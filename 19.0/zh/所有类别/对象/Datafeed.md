# Datafeed



## 关联的构造器

### Datafeed

**语法:** Datafeed( Connect( ) )

**说明:** （仅限 Windows）创建一个实时方法来连续读取数据，例如通过连接到串行端口的实验室测量设备。

```jsl

feed = Open Datafeed(
	Connect( Port( "com1" ), Baud rate( 4800 ), Parity( even ), DataBits( 8 ) ),
	Set Script( Print( feed << getLine ) )
);

```

## 项消息

### Close

**语法:** obj &lt;&lt; Close

**说明:** （仅限 Windows）关闭数据传送对象及其窗口。

```jsl

feed = Open Datafeed(
	Connect( Port( "com1" ), Baud rate( 4800 ), Parity( even ), DataBits( 8 ) ),
	Set Script( Print( feed << Get Line ) )
);
Wait( 1 );
feed << Close;

```

### Connect

**语法:** obj &lt;&lt; Connect( Port( "com1"|"com2"|"lpt1"... ), Parity( even|odd|none ), Baud rate( 4800|9600 ), Data bits( 8|7 ), &lt;Stop bits( 0|1|2 )&gt;, &lt;DTR_DSR( 0|1 )&gt;, &lt;RTS_CTS( 0|1 )&gt;, &lt;XON_XOFF( 1|0 )&gt; )

**说明:** （仅限 Windows）设置设备连接的端口设置。

```jsl

feed = Open Datafeed(
	Connect( Port( "com1" ), Baud rate( 4800 ), Parity( even ), DataBits( 8 ) ),
	Set Script( Print( feed << Get Line ) )
);

```

### Disconnect

**语法:** obj &lt;&lt; Disconnect

**说明:** （仅限 Windows）断开设备与数据传送队列的连接，但保留数据传送对象为活动状态。

```jsl

feed = Open Datafeed(
	Connect( Port( "com1" ), Baud rate( 4800 ), Parity( even ), DataBits( 8 ) ),
	Set Script( Print( feed << Get Line ) )
);
feed << Disconnect;

```

### EOL

**语法:** obj &lt;&lt; EOL( "CR"|"LF"|"CRLF" )

**说明:** （仅限 Windows）设置解析传入数据行时用作分隔符的行结束值。该值也用作传出数据行中的终止符。CR = ASCII 字符 13（回车符）。LF = ASCII 字符 10（换行符）。CRLF 将按顺序使用 CR 和 LF。

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

**语法:** obj &lt;&lt; Get Container

**说明:** 返回对保留对象内容的容器框的引用。

```jsl

feed = Open Datafeed(
	Connect( Port( "com1" ), Baud rate( 4800 ), Parity( even ), DataBits( 8 ) ),
	Set Script( Print( feed << getLine ) )
);
t = feed << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

### Get Line

**语法:** line = obj &lt;&lt; Get Line

**说明:** （仅限 Windows）返回并从数据传送队列中删除一行。

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

**语法:** list = obj &lt;&lt; Get Lines

**说明:** （仅限 Windows）以列表方式返回并从数据传送队列中删除所有行。

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

**语法:** obj &lt;&lt; Print Queue

**说明:** （仅限 Windows）将内部消息队列打印至日志窗口。

```jsl

exfeed = Open Datafeed( /*no JSL to consume queue for this example*/ );
For( exi = 1, exi <= 5, exi++,
	exfeed << Queue Line( {"alice", "chuck", "ralph", "susan", "bobby"}[exi] )
);
exfeed << print queue;/* or red triangle menu item */;

```

### Queue Line

**语法:** obj &lt;&lt; Queue Line( string )

**说明:** （仅限 Windows）将一行发送至数据传送队列的结尾处。

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

**语法:** obj &lt;&lt; Restart

**说明:** （仅限 Windows）重新开始处理排入队列的行。

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

**语法:** obj &lt;&lt; Set Script( script )

**说明:** （仅限 Windows）分配每次接收到一行数据时运行的脚本。

```jsl

feed = Open Datafeed(
	Connect( Port( "com1" ), Baud rate( 4800 ), Parity( even ), DataBits( 8 ) ),
	Set Script( Print( feed << Get Line ) )
);

```

### Stop

**语法:** obj &lt;&lt; Stop

**说明:** （仅限 Windows）停止处理排入队列的行。

```jsl

feed = Open Datafeed(
	Connect( Port( "com1" ), Baud rate( 4800 ), Parity( even ), DataBits( 8 ) ),
	Set Script( Print( feed << Get Line ) )
);
feed << Stop;

```

### Write

**语法:** obj &lt;&lt; Write( string )

**说明:** （仅限 Windows）将字符串发送至数据传送设备。

**JMP添加的版本:** 14

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

**语法:** obj &lt;&lt; Write Line( string )

**说明:** （仅限 Windows）

**JMP添加的版本:** 14

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

**语法:** obj &lt;&lt; Write Lines( list )

**说明:** （仅限 Windows）将字符串列表发送至数据传送设备。若数据传送设置了 EOL，则每个字符串由 EOL 值分隔。若未设置 EOL，则使用 CRLF 分隔每行。

**JMP添加的版本:** 14

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

