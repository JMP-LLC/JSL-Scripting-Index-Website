# WebReport



## Messages d'éléments

### Add Image

**Syntaxe :** obj << Add Image("path to image" | File("path to image"), <Title(...)>,<Description(...)>)

**Description :** Ajoute une image à publier dans le rapport Internet. Les arguments facultatifs incluent le titre et la description.

**JMP Version ajoutée :** 14

```jsl

Names Default To Here( 1 );

webreport = New Web Report();
webreport << Add Image(
	File( "$SAMPLE_IMAGES/black rhino footprint.jpg" ),
	Title( "Black Rhino Footprint" )
);

```

### Add Report

**Syntaxe :** obj << Add Report( jmpreport, <Title(...)>, <Description(...)>, <Publish Data(0|1)>, <Enable Warnings(0|1)>, <Optimization("Interactivity" | "Performance")> )

**Description :** Ajoute un rapport à publier dans le rapport Internet. Les arguments facultatifs incluent le titre et la description.

**JMP Version ajoutée :** 14

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

**Syntaxe :** obj << Add Reports( reports )

**Description :** Ajoute une liste des rapports JMP sur un rapport Internet à l&apos;aide des options par défaut.

**JMP Version ajoutée :** 14

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

**Syntaxe :** obj << Description(...)

**Description :** Définit la description du rapport Internet.

**JMP Version ajoutée :** 15

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

**Syntaxe :** obj << Index( Title(...), <Description(...)>, <Timestamp(1 | 0)>, <Font(name, style)>, <Logo(image path)>, <CSS(css path)>, <Theme(Default | Orange | Blue | Red | Green | Black)>, <Style(LargeList | SmallList | Grid | Custom)> )

**Description :** Ajoute une page d&apos;index personnalisée sur le rapport Internet.

**JMP Version ajoutée :** 14

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

**Syntaxe :** obj << Reset()

**Description :** Réinitialise le rapport Internet en fonction des nouvelles valeurs. Cela efface les désignations publiques, les emplacements de fichier et toute autre information mise en cache.

**JMP Version ajoutée :** 14

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

**Syntaxe :** obj << Save ("directory path", <Replace(<0>|<1>)>, <Publish Data(<0>|<1>)>)

**Description :** Enregistre le rapport web dans le répertoire spécifié. Si l&apos;enregistrement est réussi, le nom de fichier de l&apos;emplacement du rapport publié est renvoyé. Un rapport web enregistré localement peut contenir des données d&apos;utilisateur intégrées. Si la valeur Publish Data est définie sur Faux, les rapports sont créés à partir d&apos;images statiques et n&apos;intègrent pas de données d&apos;utilisateur. La valeur par défaut est Vrai.

**JMP Version ajoutée :** 14

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

**Syntaxe :** obj << Title(...)

**Description :** Définit le titre du rapport Internet.

**JMP Version ajoutée :** 15

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

