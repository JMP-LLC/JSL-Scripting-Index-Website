# Datafeed



## 연결된 생성자

### Datafeed

**구문:** y = Open Datafeed( ... )

**설명:** 데이터를 지속적으로 읽기 위한 실시간 방법(예: 직렬 포트에 연결된 실험실 측정 장치에서 읽기)을 생성합니다(Windows에만 해당).

```jsl

Names Default To Here( 1 );
feed = Open Datafeed(
	Connect( Port( "com1" ), Baud rate( 4800 ), Parity( even ), DataBits( 8 ) ),
	Set Script( Print( feed << getLine ) )
);

```

## 항목 메시지

### Close

**구문:** obj << Close

**설명:** 데이터 공급 개체 및 해당 창을 닫습니다(Windows에만 해당).

```jsl

Names Default To Here( 1 );
feed = Open Datafeed(
	Connect( Port( "com1" ), Baud rate( 4800 ), Parity( even ), DataBits( 8 ) ),
	Set Script( Print( feed << Get Line ) )
);
Wait( 1 );
feed << Close;

```

### Connect

**구문:** obj << Connect( Port(  "com1"|"com2"|"lpt1"... ), Parity( even|odd|none ), Baud rate( 4800|9600 ), Data bits( 8|7 ), <Stop bits( 0|1|2 )>, <DTR_DSR( 0|1 )>, <RTS_CTS( 0|1 )>, <XON_XOFF( 1|0 )> )

**설명:** 장치 연결에 대한 포트 설정을 지정합니다(Windows에만 해당).

```jsl

Names Default To Here( 1 );
feed = Open Datafeed(
	Connect( Port( "com1" ), Baud rate( 4800 ), Parity( even ), DataBits( 8 ) ),
	Set Script( Print( feed << Get Line ) )
);

```

### Disconnect

**구문:** obj << Disconnect

**설명:** 데이터 공급 대기열에서 장치 연결을 끊되 데이터 공급 개체는 활성 상태로 둡니다(Windows에만 해당).

```jsl

Names Default To Here( 1 );
feed = Open Datafeed(
	Connect( Port( "com1" ), Baud rate( 4800 ), Parity( even ), DataBits( 8 ) ),
	Set Script( Print( feed << Get Line ) )
);
feed << Disconnect;

```

### EOL

**구문:** obj << EOL( "CR"|"LF"|"CRLF" )

**설명:** 들어오는 데이터 행을 파싱할 때 구분 기호로 사용되는 행 끝 값을 설정합니다. 이 값은 나가는 데이터 행에서 종결자로도 사용됩니다. CR = ASCII 문자 13(캐리지 리턴). LF = ASCII 문자 10(줄바꿈). CRLF는 CR과 LF를 연속해서 사용합니다(Windows에만 해당).

```jsl

Names Default To Here( 1 );
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

**구문:** obj << Get Container

**설명:** 개체의 콘텐츠를 담고 있는 컨테이너 상자에 대한 참조를 반환합니다.

```jsl

Names Default To Here( 1 );
feed = Open Datafeed(
	Connect( Port( "com1" ), Baud rate( 4800 ), Parity( even ), DataBits( 8 ) ),
	Set Script( Print( feed << getLine ) )
);
t = feed << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

### Get Line

**구문:** line = obj << Get Line

**설명:** 데이터 공급 대기열에서 한 행을 반환하고 제거합니다(Windows에만 해당).

```jsl

Names Default To Here( 1 );
exfeed = Open Datafeed(
	Connect( Port( "com1" ), Baud rate( 4800 ), Parity( even ), DataBits( 8 ) ),
	Set Script(
		ex = exfeed << Get Line;
		Show( ex );
	)
);

```

### Get Lines

**구문:** list = obj << Get Lines

**설명:** 데이터 공급 대기열의 모든 행을 목록으로 반환하고 제거합니다(Windows에만 해당).

```jsl

Names Default To Here( 1 );
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

**구문:** obj << Print Queue

**설명:** 내부 메시지 대기열을 로그 창에 출력합니다(Windows에만 해당).

```jsl

Names Default To Here( 1 );
exfeed = Open Datafeed( /*no JSL to consume queue for this example*/ );
For( exi = 1, exi <= 5, exi++,
	exfeed << Queue Line( {"alice", "chuck", "ralph", "susan", "bobby"}[exi] )
);
exfeed << print queue;/* or red triangle menu item */;

```

### Queue Line

**구문:** obj << Queue Line( string )

**설명:** 데이터 공급 대기열의 끝에 한 행을 보냅니다(Windows에만 해당).

```jsl

Names Default To Here( 1 );
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

**구문:** obj << Restart

**설명:** 처리 대기 중인 행을 다시 시작합니다(Windows에만 해당).

```jsl

Names Default To Here( 1 );
feed = Open Datafeed(
	Connect( Port( "com1" ), Baud rate( 4800 ), Parity( even ), DataBits( 8 ) ),
	Set Script( Print( feed << Get Line ) )
);
feed << Stop;
Wait( 1 );
feed << Restart;

```

### Set Script

**구문:** obj << Set Script( script )

**설명:** 데이터 행이 수신될 때마다 실행되는 스크립트를 할당합니다(Windows에만 해당).

```jsl

Names Default To Here( 1 );
feed = Open Datafeed(
	Connect( Port( "com1" ), Baud rate( 4800 ), Parity( even ), DataBits( 8 ) ),
	Set Script( Print( feed << Get Line ) )
);

```

### Stop

**구문:** obj << Stop

**설명:** 대기 중인 행의 처리를 중지합니다(Windows에만 해당).

```jsl

Names Default To Here( 1 );
feed = Open Datafeed(
	Connect( Port( "com1" ), Baud rate( 4800 ), Parity( even ), DataBits( 8 ) ),
	Set Script( Print( feed << Get Line ) )
);
feed << Stop;

```

### Write

**구문:** obj << Write( string )

**설명:** 데이터 공급 장치로 문자열을 보냅니다(Windows에만 해당).

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
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

**구문:** obj << Write Line( string )

**설명:** 문자열을 데이터 공급 장치로 보냅니다. 데이터 공급에 대해 EOL이 설정되어 있으면 문자열이 지정된 EOL 값으로 끝납니다. EOL이 설정되어 있지 않으면 행이 CRLF로 끝납니다(Windows에만 해당).

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
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

**구문:** obj << Write Lines( list )

**설명:** 문자열 목록을 데이터 공급 장치로 보냅니다. 데이터 공급에 대해 EOL이 설정되어 있으면 각 문자열이 EOL 값으로 구분됩니다. EOL이 지정되어 있지 않으면 각 행이 CRLF로 구분됩니다(Windows에만 해당).

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
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

