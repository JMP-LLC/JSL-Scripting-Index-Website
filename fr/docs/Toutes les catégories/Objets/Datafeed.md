# Datafeed



## Constructeurs associés

### Datafeed

**Syntaxe :** Datafeed( Connect( ) )

**Description :** (Windows uniquement) Crée une méthode en temps réel pour lire les données en continu, tel qu’un dispositif de mesure de laboratoire connecté à un port série.

```jsl

Names Default To Here( 1 );
feed = Open Datafeed(
	Connect( Port( "com1" ), Baud rate( 4800 ), Parity( even ), DataBits( 8 ) ),
	Set Script( Print( feed << getLine ) )
);

```

## Messages d'éléments

### Close

**Syntaxe :** obj &lt;&lt; Close

**Description :** (Windows uniquement) Ferme l&apos;objet de source de données et sa fenêtre.

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

**Syntaxe :** obj &lt;&lt; Connect( Port( "com1"|"com2"|"lpt1"... ), Parity( even|odd|none ), Baud rate( 4800|9600 ), Data bits( 8|7 ), &lt;Stop bits( 0|1|2 )&gt;, &lt;DTR_DSR( 0|1 )&gt;, &lt;RTS_CTS( 0|1 )&gt;, &lt;XON_XOFF( 1|0 )&gt; )

**Description :** (Windows uniquement) Configure les paramètres du port de connexion au périphérique.

```jsl

Names Default To Here( 1 );
feed = Open Datafeed(
	Connect( Port( "com1" ), Baud rate( 4800 ), Parity( even ), DataBits( 8 ) ),
	Set Script( Print( feed << Get Line ) )
);

```

### Disconnect

**Syntaxe :** obj &lt;&lt; Disconnect

**Description :** (Windows uniquement) Déconnecte le périphérique de la file d&apos;attente de la source de données mais laisse l&apos;objet de source de données actif.

```jsl

Names Default To Here( 1 );
feed = Open Datafeed(
	Connect( Port( "com1" ), Baud rate( 4800 ), Parity( even ), DataBits( 8 ) ),
	Set Script( Print( feed << Get Line ) )
);
feed << Disconnect;

```

### EOL

**Syntaxe :** obj &lt;&lt; EOL( "CR"|"LF"|"CRLF" )

**Description :** (Windows uniquement) Définit la valeur de fin de la ligne utilisée en tant que séparateur lors de l&apos;analyse des lignes de données entrantes. La valeur est également utilisée en tant que terminaison dans les lignes de données sortantes. CR = Caractère ASCII 13 (Retour chariot). LF = Caractère ASCII 10 (Saut de ligne). CRLF utilisera CR et LF de façon séquentielle.

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

**Syntaxe :** obj &lt;&lt; Get Container

**Description :** Renvoie une référence à la zone conteneur où se trouve le contenu de l&apos;objet.

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

**Syntaxe :** line = obj &lt;&lt; Get Line

**Description :** (Windows uniquement) Renvoie et supprime une ligne de la file d&apos;attente de la source de données.

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

**Syntaxe :** list = obj &lt;&lt; Get Lines

**Description :** (Windows uniquement) Renvoie sous forme de liste et supprime toutes les lignes de la file d’attente de la source de données.

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

**Syntaxe :** obj &lt;&lt; Print Queue

**Description :** (Windows uniquement) Imprime la file d&apos;attente interne des messages dans la fenêtre log.

```jsl

Names Default To Here( 1 );
exfeed = Open Datafeed( /*no JSL to consume queue for this example*/ );
For( exi = 1, exi <= 5, exi++,
	exfeed << Queue Line( {"alice", "chuck", "ralph", "susan", "bobby"}[exi] )
);
exfeed << print queue;/* or red triangle menu item */;

```

### Queue Line

**Syntaxe :** obj &lt;&lt; Queue Line( string )

**Description :** (Windows uniquement) Envoie une ligne à la fin de la file d&apos;attente de la source de données.

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

**Syntaxe :** obj &lt;&lt; Restart

**Description :** (Windows uniquement) Redémarre le traitement des lignes en file d’attente.

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

**Syntaxe :** obj &lt;&lt; Set Script( script )

**Description :** (Windows uniquement) Affecte le script à exécuter à la réception de chaque ligne de données.

```jsl

Names Default To Here( 1 );
feed = Open Datafeed(
	Connect( Port( "com1" ), Baud rate( 4800 ), Parity( even ), DataBits( 8 ) ),
	Set Script( Print( feed << Get Line ) )
);

```

### Stop

**Syntaxe :** obj &lt;&lt; Stop

**Description :** (Windows uniquement) Arrête le traitement des lignes en file d’attente.

```jsl

Names Default To Here( 1 );
feed = Open Datafeed(
	Connect( Port( "com1" ), Baud rate( 4800 ), Parity( even ), DataBits( 8 ) ),
	Set Script( Print( feed << Get Line ) )
);
feed << Stop;

```

### Write

**Syntaxe :** obj &lt;&lt; Write( string )

**Description :** (Windows uniquement) Envoie une chaîne au périphérique de source de données.

**JMP Version ajoutée :** 14

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

**Syntaxe :** obj &lt;&lt; Write Line( string )

**Description :** (Windows uniquement) Envoie la chaîne au périphérique de source de données. Si EOL a été définie pour la source de données, les chaînes se termineront par la valeur EOL spécifiée. Si EOL n&apos;a pas été définie, la ligne se terminera avec CRLF.

**JMP Version ajoutée :** 14

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

**Syntaxe :** obj &lt;&lt; Write Lines( list )

**Description :** (Windows uniquement) Envoie une liste de chaînes au périphérique de source de données. Si EOL a été définie pour la source de données, chaque chaîne sera séparée par la valeur EOL. Si EOL n&apos;a pas été définie, chaque ligne sera séparée avec CRLF.

**JMP Version ajoutée :** 14

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

