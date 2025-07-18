# Datafeed



## Elementmeldungen

### Close

**Syntax:** obj &lt;&lt; Close

**Beschreibung:** (Nur Windows) Schließt das Datenfeed-Objekt und sein Fenster.

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

**Beschreibung:** (Nur Windows) Richtet die Porteinstellungen für die Verbindung zum Gerät ein.

```jsl

feed = Open Datafeed(
	Connect( Port( "com1" ), Baud rate( 4800 ), Parity( even ), DataBits( 8 ) ),
	Set Script( Print( feed << Get Line ) )
);

```

### Disconnect

**Syntax:** obj &lt;&lt; Disconnect

**Beschreibung:** (Nur Windows) Trennt das Gerät von der Datenfeed-Warteschlange, lässt das Datenfeed-Objekt jedoch aktiv.

```jsl

feed = Open Datafeed(
	Connect( Port( "com1" ), Baud rate( 4800 ), Parity( even ), DataBits( 8 ) ),
	Set Script( Print( feed << Get Line ) )
);
feed << Disconnect;

```

### EOL

**Syntax:** obj &lt;&lt; EOL( "CR"|"LF"|"CRLF" )

**Beschreibung:** (Nur Windows) Legt den als Trennzeichen verwendeten Zeilenendewert, der beim Analysieren eingehender Datenzeilen verwendet wird, fest. Der Wert wird auch als Abschlusszeichen in ausgehenden Datenzeilen verwendet. CR = ASCII-Zeichen 13 (Zeilenschaltung). LF = ASCII-Zeichen 10 (Zeilenvorschub). CRLF verwendet CR und LF nacheinander.

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

**Beschreibung:** Gibt einen Verweis auf das Containerfeld zurück, das den Inhalt des Objekts enthält.

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

**Beschreibung:** (Nur Windows) Gibt eine Zeile aus der Datenfeed-Warteschlange zurück und entfernt sie.

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

**Beschreibung:** (Nur Windows) Gibt alle Zeilen aus der Datenfeed-Warteschlange zurück und entfernt sie.

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

**Beschreibung:** (Nur Windows) Druckt die interne Warteschlange der Meldungen ins Logfenster.

```jsl

exfeed = Open Datafeed( /*no JSL to consume queue for this example*/ );
For( exi = 1, exi <= 5, exi++,
	exfeed << Queue Line( {"alice", "chuck", "ralph", "susan", "bobby"}[exi] )
);
exfeed << print queue;/* or red triangle menu item */;

```

### Queue Line

**Syntax:** obj &lt;&lt; Queue Line( string )

**Beschreibung:** (Nur Windows) Sendet eine Zeile ans Ende der Datenfeed-Warteschlange.

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

**Beschreibung:** (Nur Windows) Startet die Verarbeitung von Zeilen in der Warteschlange neu.

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

**Beschreibung:** (Nur Windows) Weist das Skript zu, das bei jedem Empfang einer Datenzeile ausgeführt wird.

```jsl

feed = Open Datafeed(
	Connect( Port( "com1" ), Baud rate( 4800 ), Parity( even ), DataBits( 8 ) ),
	Set Script( Print( feed << Get Line ) )
);

```

### Stop

**Syntax:** obj &lt;&lt; Stop

**Beschreibung:** (Nur Windows) Stoppt die Verarbeitung von Zeilen in der Warteschlange.

```jsl

feed = Open Datafeed(
	Connect( Port( "com1" ), Baud rate( 4800 ), Parity( even ), DataBits( 8 ) ),
	Set Script( Print( feed << Get Line ) )
);
feed << Stop;

```

### Write

**Syntax:** obj &lt;&lt; Write( string )

**Beschreibung:** (Nur Windows) Sendet eine Zeichenkette an das Datenfeed-Gerät.

**JMP Version hinzugefügt:** 14

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

**Beschreibung:** (Nur Windows) Sendet die Zeichenkette an das Datenfeed-Gerät. Wenn für den Datenfeed EOL festgelegt ist, werden die Zeichenketten vom angegebenen EOL-Wert beendet. Wenn EOL nicht festgelegt ist, wird die Zeile mit CRLF beendet.

**JMP Version hinzugefügt:** 14

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

**Beschreibung:** (Nur Windows) Sendet eine Liste von Zeichenketten an das Datenfeed-Gerät. Wenn für den Datenfeed EOL festgelegt ist, wird jede Zeichenkette durch den EOL-Wert getrennt. Wenn EOL nicht festgelegt ist, wird jede Zeile mit CRLF getrennt.

**JMP Version hinzugefügt:** 14

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

## Zugehörige Konstruktoren

### Datafeed

**Syntax:** Datafeed( Connect( ) )

**Beschreibung:** (Nur Windows) Erstellt eine Echtzeitmethode zum fortlaufenden Lesen von Daten, z. B. aus einem Labormessgerät, das an einen seriellen Port angeschlossen ist.

```jsl

feed = Open Datafeed(
	Connect( Port( "com1" ), Baud rate( 4800 ), Parity( even ), DataBits( 8 ) ),
	Set Script( Print( feed << getLine ) )
);

```

