# Datafeed



## Constructores asociados

### Datafeed

**Sintaxis:** Datafeed( Connect( ) )

**Descripción:** (Solo Windows) Crea un método en tiempo real para leer datos continuamente, como por ejemplo de un dispositivo de medición de laboratorio conectado a un puerto serie.

```jsl

feed = Open Datafeed(	Connect( Port( "com1" ), Baud rate( 4800 ), Parity( even ), DataBits( 8 ) ),	Set Script( Print( feed << getLine ) ));

```

## Mensajes del elemento

### Close

**Sintaxis:** obj &lt;&lt; Close

**Descripción:** (Solo Windows) Cierra el objeto de fuentes de datos y su ventana.

```jsl

feed = Open Datafeed(	Connect( Port( "com1" ), Baud rate( 4800 ), Parity( even ), DataBits( 8 ) ),	Set Script( Print( feed << Get Line ) ));Wait( 1 );feed << Close;

```

### Connect

**Sintaxis:** obj &lt;&lt; Connect( Port( "com1"|"com2"|"lpt1"... ), Parity( even|odd|none ), Baud rate( 4800|9600 ), Data bits( 8|7 ), &lt;Stop bits( 0|1|2 )&gt;, &lt;DTR_DSR( 0|1 )&gt;, &lt;RTS_CTS( 0|1 )&gt;, &lt;XON_XOFF( 1|0 )&gt; )

**Descripción:** (Solo Windows) Configura los ajustes de puerto para la conexión con el dispositivo.

```jsl

feed = Open Datafeed(	Connect( Port( "com1" ), Baud rate( 4800 ), Parity( even ), DataBits( 8 ) ),	Set Script( Print( feed << Get Line ) ));

```

### Disconnect

**Sintaxis:** obj &lt;&lt; Disconnect

**Descripción:** (Solo Windows) Desconecta el dispositivo de la cola de fuentes de datos pero deja el objeto de fuentes de datos activo.

```jsl

feed = Open Datafeed(	Connect( Port( "com1" ), Baud rate( 4800 ), Parity( even ), DataBits( 8 ) ),	Set Script( Print( feed << Get Line ) ));feed << Disconnect;

```

### EOL

**Sintaxis:** obj &lt;&lt; EOL( "CR"|"LF"|"CRLF" )

**Descripción:** (Solo Windows) Establece el valor de fin de línea utilizado como separador al analizar las líneas de datos entrantes. El valor también se utiliza como terminador en las líneas de datos salientes. CR = carácter ASCII 13 (retorno de carro). LF = carácter ASCII 10 (avance de línea). CRLF utilizará CR y LF de forma secuencial.

```jsl

exfeed = Open Datafeed(	Connect( Port( "com1" ), Baud rate( 4800 ), Parity( even ), DataBits( 8 ) ),	Set Script(		ex = exfeed << Get Line;		Show( ex );	));exfeed << EOL( "CRLF" );For( exi = 0, exi < 5, exi++,     /* Example to test a feed when the real data source is not available.*/    	exfeed << Queue Line( Char( exi ) );	exfeed << EOL;	Wait( .5 ););

```

### Get Container

**Sintaxis:** obj &lt;&lt; Get Container

**Descripción:** Devuelve una referencia al cuadro contenedor que incluye el contenido del objeto.

```jsl

feed = Open Datafeed(	Connect( Port( "com1" ), Baud rate( 4800 ), Parity( even ), DataBits( 8 ) ),	Set Script( Print( feed << getLine ) ));t = feed << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

### Get Line

**Sintaxis:** line = obj &lt;&lt; Get Line

**Descripción:** (Solo Windows) Devuelve y quita una línea de la cola de fuentes de datos.

```jsl

exfeed = Open Datafeed(	Connect( Port( "com1" ), Baud rate( 4800 ), Parity( even ), DataBits( 8 ) ),	Set Script(		ex = exfeed << Get Line;		Show( ex );	));

```

### Get Lines

**Sintaxis:** list = obj &lt;&lt; Get Lines

**Descripción:** (Solo Windows) Quita todas las líneas de la cola de fuentes de datos y las devuelve en forma de lista.

```jsl

exfeed = Open Datafeed(	Connect( Port( "com1" ), Baud rate( 4800 ), Parity( even ), DataBits( 8 ) ),	Set Script(		ex = exfeed << Get Lines;		Show( ex );	));For( exi = 0, exi < 5, exi++,     /* Example to test a feed when the real data source is not available.*/    	exfeed << Queue Line( Char( exi ) );	Wait( .5 ););

```

### Print Queue

**Sintaxis:** obj &lt;&lt; Print Queue

**Descripción:** (Solo Windows) Imprime la cola interna de mensajes en la ventana de registro.

```jsl

exfeed = Open Datafeed( /*no JSL to consume queue for this example*/ );For( exi = 1, exi <= 5, exi++,	exfeed << Queue Line( {"alice", "chuck", "ralph", "susan", "bobby"}[exi] ));exfeed << print queue;/* or red triangle menu item */;

```

### Queue Line

**Sintaxis:** obj &lt;&lt; Queue Line( string )

**Descripción:** (Solo Windows) Envía una línea al final de la cola de fuentes de datos.

```jsl

exfeed = Open Datafeed(	Connect( Port( "com1" ), Baud rate( 4800 ), Parity( even ), DataBits( 8 ) ),	Set Script(		ex = exfeed << Get Line;		Show( ex );	));For( exi = 0, exi < 5, exi++,     /* Example to test a feed when the real data source is not available.*/    	exfeed << Queue Line( Char( exi ) );	Wait( .5 ););

```

### Restart

**Sintaxis:** obj &lt;&lt; Restart

**Descripción:** (Solo Windows) Reinicia el procesamiento de las líneas de la cola.

```jsl

feed = Open Datafeed(	Connect( Port( "com1" ), Baud rate( 4800 ), Parity( even ), DataBits( 8 ) ),	Set Script( Print( feed << Get Line ) ));feed << Stop;Wait( 1 );feed << Restart;

```

### Set Script

**Sintaxis:** obj &lt;&lt; Set Script( script )

**Descripción:** (Solo Windows) Asigna el script que se ejecuta cada vez que se recibe una línea de datos.

```jsl

feed = Open Datafeed(	Connect( Port( "com1" ), Baud rate( 4800 ), Parity( even ), DataBits( 8 ) ),	Set Script( Print( feed << Get Line ) ));

```

### Stop

**Sintaxis:** obj &lt;&lt; Stop

**Descripción:** (Solo Windows) Detiene el procesamiento de las líneas de la cola.

```jsl

feed = Open Datafeed(	Connect( Port( "com1" ), Baud rate( 4800 ), Parity( even ), DataBits( 8 ) ),	Set Script( Print( feed << Get Line ) ));feed << Stop;

```

### Write

**Sintaxis:** obj &lt;&lt; Write( string )

**Descripción:** (Solo Windows) Envía una cadena al dispositivo de fuentes de datos.

**JMP Versión agregada:** 14

```jsl

exfeed = Open Datafeed(	Connect( Port( "com1" ), Baud rate( 4800 ), Parity( even ), DataBits( 8 ) ),	Set Script(		ex = exfeed << Get Line;		Show( ex );	)); /* Example - send a message to external device over the serial port to trigger data messages. This can be used to send control messages to a sensor or other attached device.*/exfeed << Write( "Ready" );

```

### Write Line

**Sintaxis:** obj &lt;&lt; Write Line( string )

**Descripción:** (Solo Windows) Envía la cadena al dispositivo de fuentes de datos. Si se ha establecido EOL para la fuente de datos, las cadenas las termina el valor EOL especificado. Si no se ha establecido EOL, la línea se termina con CRLF.

**JMP Versión agregada:** 14

```jsl

exfeed = Open Datafeed(	Connect( Port( "com1" ), Baud rate( 4800 ), Parity( even ), DataBits( 8 ) ),	Set Script(		ex = exfeed << Get Line;		Show( ex );	)); /* Example - send a message to external device over the serial port to trigger data messages.*/exfeed << Write Line( "Ready" );

```

### Write Lines

**Sintaxis:** obj &lt;&lt; Write Lines( list )

**Descripción:** (Solo Windows) Envía una lista de cadenas al dispositivo de fuentes de datos. Si se ha establecido EOL para la fuente de datos, cada cadena la separa el valor EOL. Si no se ha establecido EOL, la línea se separa con CRLF.

**JMP Versión agregada:** 14

```jsl

exfeed = Open Datafeed(	Connect( Port( "com1" ), Baud rate( 4800 ), Parity( even ), DataBits( 8 ) ),	Set Script(		ex = exfeed << Get Line;		Show( ex );	)); /* Example - send a message to external device over the serial port.*/exfeed << Write Lines( {"Ready", "Set", "Go"} );

```

