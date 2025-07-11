# Datafeed



### Close

**Sintassi:** obj << Close

**Descrizione:** (Solo Windows) Chiude l&apos;oggetto dell&apos;alimentazione dei dati e la relativa finestra.

```js

Names Default To Here( 1 );
feed = Open Datafeed(
	Connect( Port( "com1" ), Baud rate( 4800 ), Parity( even ), DataBits( 8 ) ),
	Set Script( Print( feed << Get Line ) )
);
Wait( 1 );
feed << Close;

```

### Connect

**Sintassi:** obj << Connect( Port(  "com1"|"com2"|"lpt1"... ), Parity( even|odd|none ), Baud rate( 4800|9600 ), Data bits( 8|7 ), <Stop bits( 0|1|2 )>, <DTR_DSR( 0|1 )>, <RTS_CTS( 0|1 )>, <XON_XOFF( 1|0 )> )

**Descrizione:** (Solo Windows) Configura le impostazioni della porta per la connessione al dispositivo.

```js

Names Default To Here( 1 );
feed = Open Datafeed(
	Connect( Port( "com1" ), Baud rate( 4800 ), Parity( even ), DataBits( 8 ) ),
	Set Script( Print( feed << Get Line ) )
);

```

### Datafeed

**Sintassi:** Datafeed( Connect( ) )

**Descrizione:** (Solo Windows) Crea un metodo per l&apos;acquisizione continua di dati in tempo reale, come se si trattasse di uno strumento di misura di laboratorio connesso a una porta seriale.

```js

Names Default To Here( 1 );
feed = Open Datafeed(
	Connect( Port( "com1" ), Baud rate( 4800 ), Parity( even ), DataBits( 8 ) ),
	Set Script( Print( feed << getLine ) )
);

```

### Disconnect

**Sintassi:** obj << Disconnect

**Descrizione:** (Solo Windows) Scollega la periferica dalla coda dell&apos;alimentazione dei dati ma lascia attivo l&apos;oggetto dell&apos;alimentazione dei dati.

```js

Names Default To Here( 1 );
feed = Open Datafeed(
	Connect( Port( "com1" ), Baud rate( 4800 ), Parity( even ), DataBits( 8 ) ),
	Set Script( Print( feed << Get Line ) )
);
feed << Disconnect;

```

### EOL

**Sintassi:** obj << EOL( "CR"|"LF"|"CRLF" )

**Descrizione:** (Solo Windows) Imposta il valore di fine riga usato come separatore quando si analizzano righe di dati in ingresso. Il valore è anche utilizzato come terminatore per le righe di dati in uscita. CR = carattere ASCII 13 (Ritorno a capo). LF = carattere ASCII 10 (Avanzamento riga). CRLF utilizzerà sia CR che LF in sequenza.

```js

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

**Sintassi:** obj << Get Container

**Descrizione:** Restituisce un riferimento al riquadro contenitore che racchiude il contenuto dell&apos;oggetto.

```js

Names Default To Here( 1 );
feed = Open Datafeed(
	Connect( Port( "com1" ), Baud rate( 4800 ), Parity( even ), DataBits( 8 ) ),
	Set Script( Print( feed << getLine ) )
);
t = feed << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

### Get Line

**Sintassi:** line = obj << Get Line

**Descrizione:** (Solo Windows) Restituisce una riga dalla coda dell&apos;alimentazione di dati e la rimuove.

```js

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

**Sintassi:** list = obj << Get Lines

**Descrizione:** (Solo Windows) Restituisce sotto forma di elenco tutte le righe dalla coda di alimentazione dei dati e le rimuove.

```js

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

**Sintassi:** obj << Print Queue

**Descrizione:** (Solo Windows) Stampa la coda interna di messaggi nella finestra Log.

```js

Names Default To Here( 1 );
exfeed = Open Datafeed( /*no JSL to consume queue for this example*/ );
For( exi = 1, exi <= 5, exi++,
	exfeed << Queue Line( {"alice", "chuck", "ralph", "susan", "bobby"}[exi] )
);
exfeed << print queue;/* or red triangle menu item */;

```

### Queue Line

**Sintassi:** obj << Queue Line( string )

**Descrizione:** (Solo Windows) Invia una riga alla fine della coda dell&apos;alimentazione di dati.

```js

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

**Sintassi:** obj << Restart

**Descrizione:** (Solo Windows) Riavvia l&apos;elaborazione delle righe in coda.

```js

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

**Sintassi:** obj << Set Script( script )

**Descrizione:** (Solo Windows) Assegna lo script che sarà eseguito ogni volta che viene ricevuta una riga di dati.

```js

Names Default To Here( 1 );
feed = Open Datafeed(
	Connect( Port( "com1" ), Baud rate( 4800 ), Parity( even ), DataBits( 8 ) ),
	Set Script( Print( feed << Get Line ) )
);

```

### Stop

**Sintassi:** obj << Stop

**Descrizione:** (Solo Windows) Interrompe l&apos;elaborazione delle righe in coda.

```js

Names Default To Here( 1 );
feed = Open Datafeed(
	Connect( Port( "com1" ), Baud rate( 4800 ), Parity( even ), DataBits( 8 ) ),
	Set Script( Print( feed << Get Line ) )
);
feed << Stop;

```

### Write

**Sintassi:** obj << Write( string )

**Descrizione:** (Solo Windows) Invia una stringa alla periferica di alimentazione dei dati.

**JMP Versione aggiunta:** 14

```js

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

**Sintassi:** obj << Write Line( string )

**Descrizione:** (Solo Windows) Invia la stringa alla periferica di alimentazione dei dati. Se per l&apos;alimentazione dei dati è stato impostato EOL, le stringhe sono terminate dal valore EOL specificato. Se non è stato impostato EOL, la riga viene terminata con CRLF.

**JMP Versione aggiunta:** 14

```js

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

**Sintassi:** obj << Write Lines( list )

**Descrizione:** (Solo Windows) Invia un elenco di stringhe alla periferica di alimentazione dei dati. Se per l&apos;alimentazione dei dati è stato impostato EOL, ogni stringa è separata dal valore EOL. Se non è stato impostato EOL, ogni riga è separata con CRLF.

**JMP Versione aggiunta:** 14

```js

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

