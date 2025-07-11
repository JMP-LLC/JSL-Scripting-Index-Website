# WebReport



### Add Image

**Syntax:** obj << Add Image("path to image" | File("path to image"), <Title(...)>,<Description(...)>)

**Beschreibung:** Fügt ein Bild hinzu, das im Webbericht veröffentlicht werden soll. Optionale Argumente sind u.a. Titel und Beschreibung.

**JMP Version hinzugefügt:** 14

```js

Names Default To Here( 1 );

webreport = New Web Report();
webreport << Add Image(
	File( "$SAMPLE_IMAGES/black rhino footprint.jpg" ),
	Title( "Black Rhino Footprint" )
);

```

### Add Report

**Syntax:** obj << Add Report( jmpreport, <Title(...)>, <Description(...)>, <Publish Data(0|1)>, <Enable Warnings(0|1)>, <Optimization("Interactivity" | "Performance")> )

**Beschreibung:** Fügt einen Bericht hinzu, der im Webbericht veröffentlicht werden soll. Optionale Argumente sind u.a. Titel und Beschreibung.

**JMP Version hinzugefügt:** 14

```js

Names Default To Here( 1 );

Open( "$SAMPLE_DATA/Big Class.jmp", Invisible );
jmpreport = Distribution(
	Continuous Distribution( Column( :weight ) ),
	Nominal Distribution( Column( :age ) )
);
webreport = New Web Report();
webreport << Add Report( jmpreport );

```

### Add Reports

**Syntax:** obj << Add Reports( reports )

**Beschreibung:** Fügt einem Webbericht eine Liste von JMP-Berichten hinzu und verwendet dabei Standardoptionen.

**JMP Version hinzugefügt:** 14

```js

Names Default To Here( 1 );

Open( "$SAMPLE_DATA/Big Class.jmp", Invisible );
Distribution(
	Continuous Distribution( Column( :weight ) ),
	Nominal Distribution( Column( :age ) )
);
Bivariate(
	Y( :weight ),
	X( :height ),
	Automatic Recalc( 1 ),
	Fit Line( {Line Color( {213, 72, 87} )} ),
	Local Data Filter( Add Filter( columns( :sex ) ) )
);
windows = Find All( Reports );
If( N Items( windows ) > 0,
	webreport = New Web Report();
	webreport << Title( "Big Class Reports" );
	webreport << Description( "Multiple reports found in Big Class." );
	webreport << Add Reports( windows );
);

```

### Description

**Syntax:** obj << Description(...)

**Beschreibung:** Legt die Beschreibung des Webberichts fest.

**JMP Version hinzugefügt:** 15

```js

Names Default To Here( 1 );

Open( "$SAMPLE_DATA/Big Class.jmp", Invisible );
jmpreport_1 = Distribution(
	Continuous Distribution( Column( :weight ) ),
	Nominal Distribution( Column( :age ) )
);
jmpreport_2 = Bivariate(
	Y( :weight ),
	X( :height ),
	Automatic Recalc( 1 ),
	Fit Line( {Line Color( {213, 72, 87} )} ),
	Local Data Filter( Add Filter( columns( :sex ) ) )
);
webreport = New Web Report();
webreport << Add Report( jmpreport_1 );
webreport << Add Report( jmpreport_2 );
webreport << Title( "Publish Test" );
webreport << Description( "This is a multiple report publish" );
file = webreport << Save( "$TEMP" );
If( !Is Empty( file ),
	Web( file )
);

```

### Index

**Syntax:** obj << Index( Title(...), <Description(...)>, <Timestamp(1 | 0)>, <Font(name, style)>, <Logo(image path)>, <CSS(css path)>, <Theme(Default | Orange | Blue | Red | Green | Black)>, <Style(LargeList | SmallList | Grid | Custom)> )

**Beschreibung:** Fügt dem Webbericht eine benutzerdefinierte Indexseite hinzu.

**JMP Version hinzugefügt:** 14

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp", Invisible );
jmpreport1 = dt << Distribution(
	Continuous Distribution( Column( :weight ) ),
	Nominal Distribution( Column( :age ) )
);
jmpreport2 = dt << Oneway( Y( :height ), X( :sex ), Means( 1 ), Mean Diamonds( 1 ) );
webreport = New Web Report();
webreport << Add Report( jmpreport1 );
webreport << Add Report(
	jmpreport2,
	Title( "Oneway Analysis" ),
	Description( "shows height by sex" )
);
webreport << Index(
	Title( "Publish Test" ),
	Description( "This is a multiple report publish with a custom index page" ),
	Timestamp( 1 ),
	Font( "Arial Narrow", "Bold Italic" ),
	Logo( "$SAMPLE_IMAGES/pi.gif" ),
	Theme( "Orange" ),
	Style( "Grid" )
);
file = webreport << Save( "$TEMP" );
If( !Is Empty( file ),
	Web( file )
);

```

### Reset

**Syntax:** obj << Reset()

**Beschreibung:** Setzt den Webbericht auf neue Werte zurück. Dadurch werden alle öffentlichen Bezeichnungen, Dateispeicherorte und andere gespeicherte Informationen gelöscht.

**JMP Version hinzugefügt:** 14

```js

Names Default To Here( 1 );

Open( "$SAMPLE_DATA/Big Class.jmp", Invisible );
jmpreport = Distribution(
	Continuous Distribution( Column( :weight ) ),
	Nominal Distribution( Column( :age ) )
);
Bivariate(
	Y( :weight ),
	X( :height ),
	Automatic Recalc( 1 ),
	Fit Line( {Line Color( {213, 72, 87} )} ),
	Local Data Filter( Add Filter( columns( :sex ) ) )
);
windows = Find All( Reports );
If( N Items( windows ) > 0,
	webreport = New Web Report();
	webreport << Add Reports( windows );
);
webreport << Reset();
webreport << Add Report( jmpreport );

```

### Save

**Syntax:** obj << Save ("directory path", <Replace(<0>|<1>)>, <Publish Data(<0>|<1>)>)

**Beschreibung:** Speichert den Webbericht im angegebenen Verzeichnis. Wenn erfolgreich, wird der Dateiname des Speicherorts des veröffentlichten Berichts zurückgegeben. Ein lokal gespeicherter Webbericht kann eingebettete Benutzerdaten enthalten. Wenn Sie für den Wert von Publish Data die Option „falsch“ auswählen, werden in Berichten keine Benutzerdaten eingebettet, sondern stattdessen statische Bilder verwendet. Standardmäßig ist die Einstellung „wahr“.

**JMP Version hinzugefügt:** 14

```js

Names Default To Here( 1 );

Open( "$SAMPLE_DATA/Big Class.jmp", Invisible );
jmpreport = Distribution(
	Continuous Distribution( Column( :weight ) ),
	Nominal Distribution( Column( :age ) )
);
webreport = New Web Report();
webreport << Add Report( jmpreport );
file = webreport << Save( "$TEMP" );
If( !Is Empty( file ),
	Web( file )
);

```

### Title

**Syntax:** obj << Title(...)

**Beschreibung:** Legt den Titel für den Webbericht fest.

**JMP Version hinzugefügt:** 15

```js

Names Default To Here( 1 );

Open( "$SAMPLE_DATA/Big Class.jmp", Invisible );
jmpreport_1 = Distribution(
	Continuous Distribution( Column( :weight ) ),
	Nominal Distribution( Column( :age ) )
);
jmpreport_2 = Bivariate(
	Y( :weight ),
	X( :height ),
	Automatic Recalc( 1 ),
	Fit Line( {Line Color( {213, 72, 87} )} ),
	Local Data Filter( Add Filter( columns( :sex ) ) )
);
webreport = New Web Report();
webreport << Add Report( jmpreport_1 );
webreport << Add Report( jmpreport_2 );
webreport << Title( "Publish Test" );
file = webreport << Save( "$TEMP" );
If( !Is Empty( file ),
	Web( file )
);

```

