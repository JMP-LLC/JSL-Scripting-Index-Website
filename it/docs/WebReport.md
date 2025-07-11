# WebReport



### Add Image

**Sintassi:** obj << Add Image("path to image" | File("path to image"), <Title(...)>,<Description(...)>)

**Descrizione:** Aggiunge un&apos;immagine da pubblicare nel report Web. Gli argomenti facoltativi comprendono il titolo e la descrizione.

**JMP Versione aggiunta:** 14

```js

Names Default To Here( 1 );

webreport = New Web Report();
webreport << Add Image(
	File( "$SAMPLE_IMAGES/black rhino footprint.jpg" ),
	Title( "Black Rhino Footprint" )
);

```

### Add Report

**Sintassi:** obj << Add Report( jmpreport, <Title(...)>, <Description(...)>, <Publish Data(0|1)>, <Enable Warnings(0|1)>, <Optimization("Interactivity" | "Performance")> )

**Descrizione:** Aggiunge un report da pubblicare nel report Web. Gli argomenti facoltativi comprendono il titolo e la descrizione.

**JMP Versione aggiunta:** 14

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

**Sintassi:** obj << Add Reports( reports )

**Descrizione:** Aggiunge un elenco di report di JMP a un report Web utilizzando le opzioni predefinite.

**JMP Versione aggiunta:** 14

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

**Sintassi:** obj << Description(...)

**Descrizione:** Imposta la descrizione del report Web.

**JMP Versione aggiunta:** 15

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

**Sintassi:** obj << Index( Title(...), <Description(...)>, <Timestamp(1 | 0)>, <Font(name, style)>, <Logo(image path)>, <CSS(css path)>, <Theme(Default | Orange | Blue | Red | Green | Black)>, <Style(LargeList | SmallList | Grid | Custom)> )

**Descrizione:** Aggiunge una pagina di indice personalizzata al report Web.

**JMP Versione aggiunta:** 14

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

**Sintassi:** obj << Reset()

**Descrizione:** Reimposta il report Web a nuovi valori cancellando una eventuale designazione pubblica, percorsi di file e altre informazioni memorizzate nella cache.

**JMP Versione aggiunta:** 14

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

**Sintassi:** obj << Save ("directory path", <Replace(<0>|<1>)>, <Publish Data(<0>|<1>)>)

**Descrizione:** Salva il report Web nella directory specificata. Al termine, viene restituito il nome del file del percorso del report pubblicato. Un report Web salvato localmente può contenere dati dell&apos;utente incorporati. Impostando il valore Publish Data su falso si crea un report usando immagini statiche invece di incorporare dati dell&apos;utente. L&apos;impostazione di default è vero.

**JMP Versione aggiunta:** 14

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

**Sintassi:** obj << Title(...)

**Descrizione:** Imposta il titolo del report Web.

**JMP Versione aggiunta:** 15

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

