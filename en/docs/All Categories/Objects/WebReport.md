# WebReport



## Item Messages

### Add Image

**Syntax:** obj &lt;&lt; Add Image("path to image" | File("path to image"), &lt;Title(...)&gt;,&lt;Description(...)&gt;)

**Description:** Adds an image to publish in the web report. Optional arguments include title and description.

**JMP Version Added:** 14

```jsl

webreport = New Web Report();webreport << Add Image(	File( "$SAMPLE_IMAGES/black rhino footprint.jpg" ),	Title( "Black Rhino Footprint" ));

```

### Add Report

**Syntax:** obj &lt;&lt; Add Report( jmpreport, &lt;Title(...)&gt;, &lt;Description(...)&gt;, &lt;Publish Data(0|1)&gt;, &lt;Enable Warnings(0|1)&gt;, &lt;Optimization("Interactivity" | "Performance")&gt; )

**Description:** Adds a report to publish in the web report. Optional arguments include title and description.

**JMP Version Added:** 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp", Invisible );jmpreport = Distribution(	Continuous Distribution( Column( :weight ) ),	Nominal Distribution( Column( :age ) ));webreport = New Web Report();webreport << Add Report( jmpreport );

```

### Add Reports

**Syntax:** obj &lt;&lt; Add Reports( reports )

**Description:** Adds a list of JMP reports to a web report using default options.

**JMP Version Added:** 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp", Invisible );Distribution(	Continuous Distribution( Column( :weight ) ),	Nominal Distribution( Column( :age ) ));Bivariate(	Y( :weight ),	X( :height ),	Automatic Recalc( 1 ),	Fit Line( {Line Color( {213, 72, 87} )} ),	Local Data Filter( Add Filter( columns( :sex ) ) ));windows = Find All( Reports );If( N Items( windows ) > 0,	webreport = New Web Report();	webreport << Title( "Big Class Reports" );	webreport << Description( "Multiple reports found in Big Class." );	webreport << Add Reports( windows ););

```

### Description

**Syntax:** obj &lt;&lt; Description(...)

**Description:** Sets the description of the web report.

**JMP Version Added:** 15

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp", Invisible );jmpreport_1 = Distribution(	Continuous Distribution( Column( :weight ) ),	Nominal Distribution( Column( :age ) ));jmpreport_2 = Bivariate(	Y( :weight ),	X( :height ),	Automatic Recalc( 1 ),	Fit Line( {Line Color( {213, 72, 87} )} ),	Local Data Filter( Add Filter( columns( :sex ) ) ));webreport = New Web Report();webreport << Add Report( jmpreport_1 );webreport << Add Report( jmpreport_2 );webreport << Title( "Publish Test" );webreport << Description( "This is a multiple report publish" );file = webreport << Save( "$TEMP" );If( !Is Empty( file ),	Web( file ));

```

### Index

**Syntax:** obj &lt;&lt; Index( Title(...), &lt;Description(...)&gt;, &lt;Timestamp(1 | 0)&gt;, &lt;Font(name, style)&gt;, &lt;Logo(image path)&gt;, &lt;CSS(css path)&gt;, &lt;Theme(Default | Orange | Blue | Red | Green | Black)&gt;, &lt;Style(LargeList | SmallList | Grid | Custom)&gt; )

**Description:** Adds a custom index page to the web report.

**JMP Version Added:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp", Invisible );jmpreport1 = dt << Distribution(	Continuous Distribution( Column( :weight ) ),	Nominal Distribution( Column( :age ) ));jmpreport2 = dt << Oneway( Y( :height ), X( :sex ), Means( 1 ), Mean Diamonds( 1 ) );webreport = New Web Report();webreport << Add Report( jmpreport1 );webreport << Add Report(	jmpreport2,	Title( "Oneway Analysis" ),	Description( "shows height by sex" ));webreport << Index(	Title( "Publish Test" ),	Description( "This is a multiple report publish with a custom index page" ),	Timestamp( 1 ),	Font( "Arial Narrow", "Bold Italic" ),	Logo( "$SAMPLE_IMAGES/pi.gif" ),	Theme( "Orange" ),	Style( "Grid" ));file = webreport << Save( "$TEMP" );If( !Is Empty( file ),	Web( file ));

```

### Reset

**Syntax:** obj &lt;&lt; Reset()

**Description:** Resets the web report to new values. This clears any public designation, file locations, and other cached information.

**JMP Version Added:** 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp", Invisible );jmpreport = Distribution(	Continuous Distribution( Column( :weight ) ),	Nominal Distribution( Column( :age ) ));Bivariate(	Y( :weight ),	X( :height ),	Automatic Recalc( 1 ),	Fit Line( {Line Color( {213, 72, 87} )} ),	Local Data Filter( Add Filter( columns( :sex ) ) ));windows = Find All( Reports );If( N Items( windows ) > 0,	webreport = New Web Report();	webreport << Add Reports( windows ););webreport << Reset();webreport << Add Report( jmpreport );

```

### Save

**Syntax:** obj &lt;&lt; Save ("directory path", &lt;Replace(&lt;0&gt;|&lt;1&gt;)&gt;, &lt;Publish Data(&lt;0&gt;|&lt;1&gt;)&gt;)

**Description:** Saves the web report to the specified directory. On success, the file name of the published report location is returned. A web report saved locally can contain embedded user data. Setting the Publish Data value to false creates reports using static images rather than embedding user data. The default is true.

**JMP Version Added:** 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp", Invisible );jmpreport = Distribution(	Continuous Distribution( Column( :weight ) ),	Nominal Distribution( Column( :age ) ));webreport = New Web Report();webreport << Add Report( jmpreport );file = webreport << Save( "$TEMP" );If( !Is Empty( file ),	Web( file ));

```

### Title

**Syntax:** obj &lt;&lt; Title(...)

**Description:** Sets the title of the web report.

**JMP Version Added:** 15

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp", Invisible );jmpreport_1 = Distribution(	Continuous Distribution( Column( :weight ) ),	Nominal Distribution( Column( :age ) ));jmpreport_2 = Bivariate(	Y( :weight ),	X( :height ),	Automatic Recalc( 1 ),	Fit Line( {Line Color( {213, 72, 87} )} ),	Local Data Filter( Add Filter( columns( :sex ) ) ));webreport = New Web Report();webreport << Add Report( jmpreport_1 );webreport << Add Report( jmpreport_2 );webreport << Title( "Publish Test" );file = webreport << Save( "$TEMP" );If( !Is Empty( file ),	Web( file ));

```

