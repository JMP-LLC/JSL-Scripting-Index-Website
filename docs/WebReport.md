# WebReport



### Add Image

**Syntax:** obj << Add Image("path to image" | File("path to image"), <Title(...)>,<Description(...)>)

**Description:** Adds an image to publish in the web report. Optional arguments include title and description.

**JMP Version Added:** 14

```

Names Default To Here( 1 );

webreport = New Web Report();
webreport << Add Image(
	File( "$SAMPLE_IMAGES/black rhino footprint.jpg" ),
	Title( "Black Rhino Footprint" )
);

```

### Add Report

**Syntax:** obj << Add Report( jmpreport, <Title(...)>, <Description(...)>, <Publish Data(0|1)>, <Enable Warnings(0|1)>, <Optimization("Interactivity" | "Performance")> )

**Description:** Adds a report to publish in the web report. Optional arguments include title and description.

**JMP Version Added:** 14

```

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

**Description:** Adds a list of JMP reports to a web report using default options.

**JMP Version Added:** 14

```

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

**Description:** Sets the description of the web report.

**JMP Version Added:** 15

```

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

**Description:** Adds a custom index page to the web report.

**JMP Version Added:** 14

```

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

**Description:** Resets the web report to new values. This clears any public designation, file locations, and other cached information.

**JMP Version Added:** 14

```

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

**Description:** Saves the web report to the specified directory. On success, the file name of the published report location is returned. A web report saved locally can contain embedded user data. Setting the Publish Data value to false creates reports using static images rather than embedding user data. The default is true.

**JMP Version Added:** 14

```

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

**Description:** Sets the title of the web report.

**JMP Version Added:** 15

```

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

