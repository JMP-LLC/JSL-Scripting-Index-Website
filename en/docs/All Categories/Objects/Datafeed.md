# Datafeed



## Associated Constructors

### Datafeed

**Syntax:** y = Open Datafeed( ... )

**Description:** (Windows only) Creates a real-time method to read data continuously, such as from a laboratory measurement device connected to a serial port.

```jsl

feed = Open Datafeed(
	Connect( Port( "com1" ), Baud rate( 4800 ), Parity( even ), DataBits( 8 ) ),
	Set Script( Print( feed << getLine ) )
);

```

## Item Messages

### Close

**Syntax:** obj &lt;&lt; Close

**Description:** (Windows only) Closes the data feed object and its window.

```jsl

feed = Open Datafeed(
	Connect( Port( "com1" ), Baud rate( 4800 ), Parity( even ), DataBits( 8 ) ),
	Set Script( Print( feed << Get Line ) )
);
Wait( 1 );
feed << Close;

```

### Connect

**Syntax:** obj &lt;&lt; Connect( Port( "com1"|"com2"|"lpt1"... ), Parity( even|odd|none ), Baud rate( 4800|9600 ), Data bits( 8|7 ), &lt;Stop bits( 0|1|2 )&gt;, &lt;DTR_DSR( 0|1 )&gt;, &lt;RTS_CTS( 0|1 )&gt;, &lt;XON_XOFF( 1|0 )&gt; )

**Description:** (Windows only) Sets up port settings for the connection to the device.

```jsl

feed = Open Datafeed(
	Connect( Port( "com1" ), Baud rate( 4800 ), Parity( even ), DataBits( 8 ) ),
	Set Script( Print( feed << Get Line ) )
);

```

### Disconnect

**Syntax:** obj &lt;&lt; Disconnect

**Description:** (Windows only) Disconnects the device from the data feed queue but leaves the data feed object active.

```jsl

feed = Open Datafeed(
	Connect( Port( "com1" ), Baud rate( 4800 ), Parity( even ), DataBits( 8 ) ),
	Set Script( Print( feed << Get Line ) )
);
feed << Disconnect;

```

### EOL

**Syntax:** obj &lt;&lt; EOL( "CR"|"LF"|"CRLF" )

**Description:** (Windows only) Sets the line ending value used as a separator when parsing incoming lines of data. The value is also used as the terminator in outgoing lines of data. CR = ASCII character 13 (Carriage Return). LF = ASCII character 10 (Line Feed). CRLF will use both CR and LF in sequence.

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

**Syntax:** obj &lt;&lt; Get Container

**Description:** Returns a reference to the container box that holds the content for the object.

**JMP Version Added:** 19

```jsl

feed = Open Datafeed(
	Connect( Port( "com1" ), Baud rate( 4800 ), Parity( even ), DataBits( 8 ) ),
	Set Script( Print( feed << getLine ) )
);
t = feed << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

### Get Line

**Syntax:** line = obj &lt;&lt; Get Line

**Description:** (Windows only) Returns and removes one line from the data feed queue.

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

**Syntax:** list = obj &lt;&lt; Get Lines

**Description:** (Windows only) Returns as a list and removes all lines from the data feed queue.

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

**Syntax:** obj &lt;&lt; Print Queue

**Description:** (Windows only) Prints the internal queue of messages to the log window.

```jsl

exfeed = Open Datafeed( /*no JSL to consume queue for this example*/ );
For( exi = 1, exi <= 5, exi++,
	exfeed << Queue Line( {"alice", "chuck", "ralph", "susan", "bobby"}[exi] )
);
exfeed << print queue;/* or red triangle menu item */;

```

### Queue Line

**Syntax:** obj &lt;&lt; Queue Line( string )

**Description:** (Windows only) Sends one line to the end of the data feed queue.

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

**Syntax:** obj &lt;&lt; Restart

**Description:** (Windows only) Restarts processing queued lines.

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

**Syntax:** obj &lt;&lt; Set Script( script )

**Description:** (Windows only) Assigns the script that is run each time a line of data is received.

```jsl

feed = Open Datafeed(
	Connect( Port( "com1" ), Baud rate( 4800 ), Parity( even ), DataBits( 8 ) ),
	Set Script( Print( feed << Get Line ) )
);

```

### Stop

**Syntax:** obj &lt;&lt; Stop

**Description:** (Windows only) Stops processing queued lines.

```jsl

feed = Open Datafeed(
	Connect( Port( "com1" ), Baud rate( 4800 ), Parity( even ), DataBits( 8 ) ),
	Set Script( Print( feed << Get Line ) )
);
feed << Stop;

```

### Write

**Syntax:** obj &lt;&lt; Write( string )

**Description:** (Windows only) Sends a string to the data feed device.

**JMP Version Added:** 14

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

**Syntax:** obj &lt;&lt; Write Line( string )

**Description:** (Windows only) Sends the string to the data feed device. If EOL has been set for the data feed, the strings are terminated by the EOL value specified. If EOL has not been set, the line is terminated with CRLF.

**JMP Version Added:** 14

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

**Syntax:** obj &lt;&lt; Write Lines( list )

**Description:** (Windows only) Sends a list of strings to the data feed device. If EOL has been set for the data feed, each string is separated by the EOL value. If EOL has not been set, each line is separated with CRLF.

**JMP Version Added:** 14

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

