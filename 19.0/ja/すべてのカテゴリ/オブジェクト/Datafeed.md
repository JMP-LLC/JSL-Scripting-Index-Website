# Datafeed



## 関連するコンストラクター

### Datafeed

**構文:** Datafeed( Connect( ) )

**説明:** (Windowsのみ) シリアルポートに接続された測定機器などからリアルタイムデータを連続的に読み込む。

```jsl

feed = Open Datafeed(
	Connect( Port( "com1" ), Baud rate( 4800 ), Parity( even ), DataBits( 8 ) ),
	Set Script( Print( feed << getLine ) )
);

```

## 項目のメッセージ

### Close

**構文:** obj &lt;&lt; Close

**説明:** (Windowsのみ) データフィードオブジェクトおよびそのウィンドウを閉じる。

```jsl

feed = Open Datafeed(
	Connect( Port( "com1" ), Baud rate( 4800 ), Parity( even ), DataBits( 8 ) ),
	Set Script( Print( feed << Get Line ) )
);
Wait( 1 );
feed << Close;

```

### Connect

**構文:** obj &lt;&lt; Connect( Port( "com1"|"com2"|"lpt1"... ), Parity( even|odd|none ), Baud rate( 4800|9600 ), Data bits( 8|7 ), &lt;Stop bits( 0|1|2 )&gt;, &lt;DTR_DSR( 0|1 )&gt;, &lt;RTS_CTS( 0|1 )&gt;, &lt;XON_XOFF( 1|0 )&gt; )

**説明:** (Windowsのみ) デバイスを接続するためのポートの設定を行う。

```jsl

feed = Open Datafeed(
	Connect( Port( "com1" ), Baud rate( 4800 ), Parity( even ), DataBits( 8 ) ),
	Set Script( Print( feed << Get Line ) )
);

```

### Disconnect

**構文:** obj &lt;&lt; Disconnect

**説明:** (Windowsのみ) データフィードのキューとデバイスとの接続を切断する。ただし、データフィードオブジェクトはアクティブのまま。

```jsl

feed = Open Datafeed(
	Connect( Port( "com1" ), Baud rate( 4800 ), Parity( even ), DataBits( 8 ) ),
	Set Script( Print( feed << Get Line ) )
);
feed << Disconnect;

```

### EOL

**構文:** obj &lt;&lt; EOL( "CR"|"LF"|"CRLF" )

**説明:** (Windowsのみ) 入ってくるデータ行を解析する際に、区切り文字として使用する行の終わりの値を指定する。データを送る場合にもデータ行の終わりとして使用される。CR = ASCIIコード 13 (Carriage Return)。LF = ASCIIコード 10 (Line Feed)。CRLFはCRとLF両方を続けて使用する。

```jsl

exfeed = Open Datafeed(
	Connect( Port( "com1" ), Baud rate( 4800 ), Parity( even ), DataBits( 8 ) ),
	Set Script(
		ex = exfeed << Get Line;
		Show( ex );
	)
);
exfeed << EOL( "CRLF" );
For( exi = 0, exi < 5, exi++, 
    /* Example to test a feed when the real data source is not available.*/    
	exfeed << Queue Line( Char( exi ) );
	exfeed << EOL;
	Wait( .5 );
);

```

### Get Container

**構文:** obj &lt;&lt; Get Container

**説明:** オブジェクトのコンテンツを含んだコンテナボックスの参照を戻す。

```jsl

feed = Open Datafeed(
	Connect( Port( "com1" ), Baud rate( 4800 ), Parity( even ), DataBits( 8 ) ),
	Set Script( Print( feed << getLine ) )
);
t = feed << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

### Get Line

**構文:** line = obj &lt;&lt; Get Line

**説明:** (Windowsのみ) データフィードのキューからラインを取得し、そのラインをキューから削除する。

```jsl

exfeed = Open Datafeed(
	Connect( Port( "com1" ), Baud rate( 4800 ), Parity( even ), DataBits( 8 ) ),
	Set Script(
		ex = exfeed << Get Line;
		Show( ex );
	)
);

```

### Get Lines

**構文:** list = obj &lt;&lt; Get Lines

**説明:** (Windowsのみ) データフィードのキューのデータすべてをリストにして戻し、それらをキューから削除する。

```jsl

exfeed = Open Datafeed(
	Connect( Port( "com1" ), Baud rate( 4800 ), Parity( even ), DataBits( 8 ) ),
	Set Script(
		ex = exfeed << Get Lines;
		Show( ex );
	)
);
For( exi = 0, exi < 5, exi++, 
    /* Example to test a feed when the real data source is not available.*/    
	exfeed << Queue Line( Char( exi ) );
	Wait( .5 );
);

```

### Print Queue

**構文:** obj &lt;&lt; Print Queue

**説明:** (Windowsのみ) 内部のメッセージのキューをログウィンドウに表示する。

```jsl

exfeed = Open Datafeed( /*no JSL to consume queue for this example*/ );
For( exi = 1, exi <= 5, exi++,
	exfeed << Queue Line( {"alice", "chuck", "ralph", "susan", "bobby"}[exi] )
);
exfeed << print queue;/* or red triangle menu item */;

```

### Queue Line

**構文:** obj &lt;&lt; Queue Line( string )

**説明:** (Windowsのみ) データフィードのキューの最後に1行のデータを送る。

```jsl

exfeed = Open Datafeed(
	Connect( Port( "com1" ), Baud rate( 4800 ), Parity( even ), DataBits( 8 ) ),
	Set Script(
		ex = exfeed << Get Line;
		Show( ex );
	)
);
For( exi = 0, exi < 5, exi++, 
    /* Example to test a feed when the real data source is not available.*/    
	exfeed << Queue Line( Char( exi ) );
	Wait( .5 );
);

```

### Restart

**構文:** obj &lt;&lt; Restart

**説明:** (Windowsのみ) キューにあるデータの処理を再開する。

```jsl

feed = Open Datafeed(
	Connect( Port( "com1" ), Baud rate( 4800 ), Parity( even ), DataBits( 8 ) ),
	Set Script( Print( feed << Get Line ) )
);
feed << Stop;
Wait( 1 );
feed << Restart;

```

### Set Script

**構文:** obj &lt;&lt; Set Script( script )

**説明:** (Windowsのみ) データ行を受け取るたびに実行されるスクリプトを設定する。

```jsl

feed = Open Datafeed(
	Connect( Port( "com1" ), Baud rate( 4800 ), Parity( even ), DataBits( 8 ) ),
	Set Script( Print( feed << Get Line ) )
);

```

### Stop

**構文:** obj &lt;&lt; Stop

**説明:** (Windowsのみ) キューにあるデータの処理を停止する。

```jsl

feed = Open Datafeed(
	Connect( Port( "com1" ), Baud rate( 4800 ), Parity( even ), DataBits( 8 ) ),
	Set Script( Print( feed << Get Line ) )
);
feed << Stop;

```

### Write

**構文:** obj &lt;&lt; Write( string )

**説明:** (Windowsのみ) データフィードの機器に文字列を送る。

**JMP追加されたバージョン:** 14

```jsl

exfeed = Open Datafeed(
	Connect( Port( "com1" ), Baud rate( 4800 ), Parity( even ), DataBits( 8 ) ),
	Set Script(
		ex = exfeed << Get Line;
		Show( ex );
	)
); 
/* Example - send a message to external device over the serial port to trigger data messages. This can be used to send control messages to a sensor or other attached device.*/
exfeed << Write( "Ready" );

```

### Write Line

**構文:** obj &lt;&lt; Write Line( string )

**説明:** (Windowsのみ) データフィードの機器に文字列を送る。データフィードにEOLが指定されている場合、文字列は指定されたEOL値で終わる。EOLが指定されていない場合は、行はCRLFで終わる。

**JMP追加されたバージョン:** 14

```jsl

exfeed = Open Datafeed(
	Connect( Port( "com1" ), Baud rate( 4800 ), Parity( even ), DataBits( 8 ) ),
	Set Script(
		ex = exfeed << Get Line;
		Show( ex );
	)
); 
/* Example - send a message to external device over the serial port to trigger data messages.*/
exfeed << Write Line( "Ready" );

```

### Write Lines

**構文:** obj &lt;&lt; Write Lines( list )

**説明:** (Windowsのみ) データフィードの機器に文字列のリストを送る。データフィードにEOLが指定されている場合、各文字列は指定されたEOL値で区切られる。EOLが指定されていない場合は、各行はCRLFで区切られる。

**JMP追加されたバージョン:** 14

```jsl

exfeed = Open Datafeed(
	Connect( Port( "com1" ), Baud rate( 4800 ), Parity( even ), DataBits( 8 ) ),
	Set Script(
		ex = exfeed << Get Line;
		Show( ex );
	)
); 
/* Example - send a message to external device over the serial port.*/
exfeed << Write Lines( {"Ready", "Set", "Go"} );

```

