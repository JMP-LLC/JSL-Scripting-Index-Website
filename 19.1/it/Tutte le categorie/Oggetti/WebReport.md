# WebReport



## Messaggi degli elementi

### Add Image

**Sintassi:** obj &lt;&lt; Add Image("path to image" | File("path to image"), &lt;Title(...)&gt;,&lt;Description(...)&gt;)

**Descrizione:** Aggiunge un&apos;immagine da pubblicare nel report Web. Gli argomenti facoltativi comprendono il titolo e la descrizione.

**JMP Versione aggiunta:** 14

```jsl

webreport = New Web Report();webreport << Add Image(	File( "$SAMPLE_IMAGES/black rhino footprint.jpg" ),	Title( "Black Rhino Footprint" ));

```

### Add Report

**Sintassi:** obj &lt;&lt; Add Report( jmpreport, &lt;Title(...)&gt;, &lt;Description(...)&gt;, &lt;Publish Data(0|1)&gt;, &lt;Enable Warnings(0|1)&gt;, &lt;Optimization("Interactivity" | "Performance")&gt; )

**Descrizione:** Aggiunge un report da pubblicare nel report Web. Gli argomenti facoltativi comprendono il titolo e la descrizione.

**JMP Versione aggiunta:** 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp", Invisible );jmpreport = Distribution(	Continuous Distribution( Column( :weight ) ),	Nominal Distribution( Column( :age ) ));webreport = New Web Report();webreport << Add Report( jmpreport );

```

### Add Reports

**Sintassi:** obj &lt;&lt; Add Reports( reports )

**Descrizione:** Aggiunge un elenco di report di JMP a un report Web utilizzando le opzioni predefinite.

**JMP Versione aggiunta:** 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp", Invisible );Distribution(	Continuous Distribution( Column( :weight ) ),	Nominal Distribution( Column( :age ) ));Bivariate(	Y( :weight ),	X( :height ),	Automatic Recalc( 1 ),	Fit Line( {Line Color( {213, 72, 87} )} ),	Local Data Filter( Add Filter( columns( :sex ) ) ));windows = Find All( Reports );If( N Items( windows ) > 0,	webreport = New Web Report();	webreport << Title( "Big Class Reports" );	webreport << Description( "Multiple reports found in Big Class." );	webreport << Add Reports( windows ););

```

### Description

**Sintassi:** obj &lt;&lt; Description(...)

**Descrizione:** Imposta la descrizione del report Web.

**JMP Versione aggiunta:** 15

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp", Invisible );jmpreport_1 = Distribution(	Continuous Distribution( Column( :weight ) ),	Nominal Distribution( Column( :age ) ));jmpreport_2 = Bivariate(	Y( :weight ),	X( :height ),	Automatic Recalc( 1 ),	Fit Line( {Line Color( {213, 72, 87} )} ),	Local Data Filter( Add Filter( columns( :sex ) ) ));webreport = New Web Report();webreport << Add Report( jmpreport_1 );webreport << Add Report( jmpreport_2 );webreport << Title( "Publish Test" );webreport << Description( "This is a multiple report publish" );file = webreport << Save( "$TEMP" );If( !Is Empty( file ),	Web( file ));

```

### Index

**Sintassi:** obj &lt;&lt; Index( Title(...), &lt;Description(...)&gt;, &lt;Timestamp(1 | 0)&gt;, &lt;Font(name, style)&gt;, &lt;Logo(image path)&gt;, &lt;CSS(css path)&gt;, &lt;Theme(Default | Orange | Blue | Red | Green | Black)&gt;, &lt;Style(LargeList | SmallList | Grid | Custom)&gt; )

**Descrizione:** Aggiunge una pagina di indice personalizzata al report Web.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp", Invisible );jmpreport1 = dt << Distribution(	Continuous Distribution( Column( :weight ) ),	Nominal Distribution( Column( :age ) ));jmpreport2 = dt << Oneway( Y( :height ), X( :sex ), Means( 1 ), Mean Diamonds( 1 ) );webreport = New Web Report();webreport << Add Report( jmpreport1 );webreport << Add Report(	jmpreport2,	Title( "Oneway Analysis" ),	Description( "shows height by sex" ));webreport << Index(	Title( "Publish Test" ),	Description( "This is a multiple report publish with a custom index page" ),	Timestamp( 1 ),	Font( "Arial Narrow", "Bold Italic" ),	Logo( "$SAMPLE_IMAGES/pi.gif" ),	Theme( "Orange" ),	Style( "Grid" ));file = webreport << Save( "$TEMP" );If( !Is Empty( file ),	Web( file ));

```

### Reset

**Sintassi:** obj &lt;&lt; Reset()

**Descrizione:** Reimposta il report Web a nuovi valori cancellando una eventuale designazione pubblica, percorsi di file e altre informazioni memorizzate nella cache.

**JMP Versione aggiunta:** 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp", Invisible );jmpreport = Distribution(	Continuous Distribution( Column( :weight ) ),	Nominal Distribution( Column( :age ) ));Bivariate(	Y( :weight ),	X( :height ),	Automatic Recalc( 1 ),	Fit Line( {Line Color( {213, 72, 87} )} ),	Local Data Filter( Add Filter( columns( :sex ) ) ));windows = Find All( Reports );If( N Items( windows ) > 0,	webreport = New Web Report();	webreport << Add Reports( windows ););webreport << Reset();webreport << Add Report( jmpreport );

```

### Save

**Sintassi:** obj &lt;&lt; Save ("directory path", &lt;Replace(&lt;0&gt;|&lt;1&gt;)&gt;, &lt;Publish Data(&lt;0&gt;|&lt;1&gt;)&gt;)

**Descrizione:** Salva il report Web nella directory specificata. Al termine, viene restituito il nome del file del percorso del report pubblicato. Un report Web salvato localmente può contenere dati dell&apos;utente incorporati. Impostando il valore Publish Data su falso si crea un report usando immagini statiche invece di incorporare dati dell&apos;utente. L&apos;impostazione di default è vero.

**JMP Versione aggiunta:** 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp", Invisible );jmpreport = Distribution(	Continuous Distribution( Column( :weight ) ),	Nominal Distribution( Column( :age ) ));webreport = New Web Report();webreport << Add Report( jmpreport );file = webreport << Save( "$TEMP" );If( !Is Empty( file ),	Web( file ));

```

### Title

**Sintassi:** obj &lt;&lt; Title(...)

**Descrizione:** Imposta il titolo del report Web.

**JMP Versione aggiunta:** 15

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp", Invisible );jmpreport_1 = Distribution(	Continuous Distribution( Column( :weight ) ),	Nominal Distribution( Column( :age ) ));jmpreport_2 = Bivariate(	Y( :weight ),	X( :height ),	Automatic Recalc( 1 ),	Fit Line( {Line Color( {213, 72, 87} )} ),	Local Data Filter( Add Filter( columns( :sex ) ) ));webreport = New Web Report();webreport << Add Report( jmpreport_1 );webreport << Add Report( jmpreport_2 );webreport << Title( "Publish Test" );file = webreport << Save( "$TEMP" );If( !Is Empty( file ),	Web( file ));

```

