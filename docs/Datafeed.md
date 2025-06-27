# Datafeed



### Close

**Syntax:** obj << Close

**Description:** (Windows only) Closes the data feed object and its window.

```

Names Default To Here( 1 );
feed = Open Datafeed(
	Connect( Port( "com1" ), Baud rate( 4800 ), Parity( even ), DataBits( 8 ) ),
	Set Script( Print( feed << Get Line ) )
);
Wait( 1 );
feed << Close;

```

### Connect

**Syntax:** obj << Connect( Port(  "com1"|"com2"|"lpt1"... ), Parity( even|odd|none ), Baud rate( 4800|9600 ), Data bits( 8|7 ), <Stop bits( 0|1|2 )>, <DTR_DSR( 0|1 )>, <RTS_CTS( 0|1 )>, <XON_XOFF( 1|0 )> )

**Description:** (Windows only) Sets up port settings for the connection to the device.

```

Names Default To Here( 1 );
feed = Open Datafeed(
	Connect( Port( "com1" ), Baud rate( 4800 ), Parity( even ), DataBits( 8 ) ),
	Set Script( Print( feed << Get Line ) )
);

```

### Datafeed

**Syntax:** y = Open Datafeed( ... )

**Description:** (Windows only) Creates a real-time method to read data continuously, such as from a laboratory measurement device connected to a serial port.

```

Names Default To Here( 1 );
feed = Open Datafeed(
	Connect( Port( "com1" ), Baud rate( 4800 ), Parity( even ), DataBits( 8 ) ),
	Set Script( Print( feed << getLine ) )
);

```

### Disconnect

**Syntax:** obj << Disconnect

**Description:** (Windows only) Disconnects the device from the data feed queue but leaves the data feed object active.

```

Names Default To Here( 1 );
feed = Open Datafeed(
	Connect( Port( "com1" ), Baud rate( 4800 ), Parity( even ), DataBits( 8 ) ),
	Set Script( Print( feed << Get Line ) )
);
feed << Disconnect;

```

### EOL

**Syntax:** obj << EOL( "CR"|"LF"|"CRLF" )

**Description:** (Windows only) Sets the line ending value used as a separator when parsing incoming lines of data. The value is also used as the terminator in outgoing lines of data. CR = ASCII character 13 (Carriage Return). LF = ASCII character 10 (Line Feed). CRLF will use both CR and LF in sequence.

```

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

### Get Line

**Syntax:** line = obj << Get Line

**Description:** (Windows only) Returns and removes one line from the data feed queue.

```

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

**Syntax:** list = obj << Get Lines

**Description:** (Windows only) Returns as a list and removes all lines from the data feed queue.

```

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

**Syntax:** obj << Print Queue

**Description:** (Windows only) Prints the internal queue of messages to the log window.

```

Names Default To Here( 1 );
exfeed = Open Datafeed( /*no JSL to consume queue for this example*/ );
For( exi = 1, exi <= 5, exi++,
	exfeed << Queue Line( {"alice", "chuck", "ralph", "susan", "bobby"}[exi] )
);
exfeed << print queue;/* or red triangle menu item */;

```

### Queue Line

**Syntax:** obj << Queue Line( string )

**Description:** (Windows only) Sends one line to the end of the data feed queue.

```

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

**Syntax:** obj << Restart

**Description:** (Windows only) Restarts processing queued lines.

```

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

**Syntax:** obj << Set Script( script )

**Description:** (Windows only) Assigns the script that is run each time a line of data is received.

```

Names Default To Here( 1 );
feed = Open Datafeed(
	Connect( Port( "com1" ), Baud rate( 4800 ), Parity( even ), DataBits( 8 ) ),
	Set Script( Print( feed << Get Line ) )
);

```

### Stop

**Syntax:** obj << Stop

**Description:** (Windows only) Stops processing queued lines.

```

Names Default To Here( 1 );
feed = Open Datafeed(
	Connect( Port( "com1" ), Baud rate( 4800 ), Parity( even ), DataBits( 8 ) ),
	Set Script( Print( feed << Get Line ) )
);
feed << Stop;

```

### Write

**Syntax:** obj << Write( string )

**Description:** (Windows only) Sends a string to the data feed device.

**JMP Version Added:** 14

```

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

**Syntax:** obj << Write Line( string )

**Description:** (Windows only) Sends the string to the data feed device. If EOL has been set for the data feed, the strings are terminated by the EOL value specified. If EOL has not been set, the line is terminated with CRLF.

**JMP Version Added:** 14

```

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

**Syntax:** obj << Write Lines( list )

**Description:** (Windows only) Sends a list of strings to the data feed device. If EOL has been set for the data feed, each string is separated by the EOL value. If EOL has not been set, each line is separated with CRLF.

**JMP Version Added:** 14

```

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

