# WebReport



## Mensajes del elemento

### Add Image

**Sintaxis:** obj &lt;&lt; Add Image("path to image" | File("path to image"), &lt;Title(...)&gt;,&lt;Description(...)&gt;)

**Descripción:** Añade una imagen para publicar en el informe web. Algunos de los argumentos opcionales son el título y la descripción.

**JMP Versión agregada:** 14

```jsl

Names Default To Here( 1 );

webreport = New Web Report();
webreport << Add Image(
	File( "$SAMPLE_IMAGES/black rhino footprint.jpg" ),
	Title( "Black Rhino Footprint" )
);

```

### Add Report

**Sintaxis:** obj &lt;&lt; Add Report( jmpreport, &lt;Title(...)&gt;, &lt;Description(...)&gt;, &lt;Publish Data(0|1)&gt;, &lt;Enable Warnings(0|1)&gt;, &lt;Optimization("Interactivity" | "Performance")&gt; )

**Descripción:** Añade un informe para publicar en el informe web. Algunos de los argumentos opcionales son el título y la descripción.

**JMP Versión agregada:** 14

```jsl

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

**Sintaxis:** obj &lt;&lt; Add Reports( reports )

**Descripción:** Añade una lista de informes JMP a un informe web con las opciones predeterminadas.

**JMP Versión agregada:** 14

```jsl

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

**Sintaxis:** obj &lt;&lt; Description(...)

**Descripción:** Establece la descripción del informe web.

**JMP Versión agregada:** 15

```jsl

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

**Sintaxis:** obj &lt;&lt; Index( Title(...), &lt;Description(...)&gt;, &lt;Timestamp(1 | 0)&gt;, &lt;Font(name, style)&gt;, &lt;Logo(image path)&gt;, &lt;CSS(css path)&gt;, &lt;Theme(Default | Orange | Blue | Red | Green | Black)&gt;, &lt;Style(LargeList | SmallList | Grid | Custom)&gt; )

**Descripción:** Añade una página de índice personalizado al informe web.

**JMP Versión agregada:** 14

```jsl

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

**Sintaxis:** obj &lt;&lt; Reset()

**Descripción:** Restablece el informe web a los nuevos valores. De este modo se borra cualquier designación pública, ubicaciones de archivo y otra información almacenada en caché.

**JMP Versión agregada:** 14

```jsl

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

**Sintaxis:** obj &lt;&lt; Save ("directory path", &lt;Replace(&lt;0&gt;|&lt;1&gt;)&gt;, &lt;Publish Data(&lt;0&gt;|&lt;1&gt;)&gt;)

**Descripción:** Guarda el informe web en el directorio especificado. Una vez realizado, se devuelve el nombre de archivo de la ubicación del informe publicado. Un informe web guardado en una ubicación local puede contener datos de usuario incrustados. Establecer el valor Publish Data como falso crea informes con imágenes estáticas en lugar de datos de usuario de incrustación. El predeterminado es verdadero.

**JMP Versión agregada:** 14

```jsl

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

**Sintaxis:** obj &lt;&lt; Title(...)

**Descripción:** Establece el título del informe web.

**JMP Versión agregada:** 15

```jsl

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

