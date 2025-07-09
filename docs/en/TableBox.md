# TableBox



### Add Line Annotation

**Syntax:** obj << Add Line Annotation

**Description:** Adds a line on top of the display box.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Add Line Annotation( Line( 160, 235, 240, 235 ) );

```

### Add Pin Annotation

**Syntax:** obj << Add Pin Annotation

**Description:** Adds a pinned annotation on top of a display box. Most attributes (such as Index Row, UniqueID and FoundPt) are designed for internal use only.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Y( :weight ),
	X( :height ),
	SendToReport(
		Dispatch( {}, "Bivar Plot", FrameBox,
			Add Pin Annotation(
				Seg( Marker Seg( 1 ) ),
				Index( 17 ),
				Index Row( 17 ),
				UniqueID( -960001792 ),
				FoundPt( {238, 219} ),
				Origin( {64.9765625, 142} ),
				Offset( {-174, -40} ),
				Tag Line( 1 ),
				Font( "Helvetica", 11, "Plain" )
			)
		)
	)
);

```

### Add Polygon Annotation

**Syntax:** obj << Add Polygon Annotation

**Description:** Adds a polygon on top of the display box.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Add Polygon Annotation(
	Points( {210, 80}, {230, 70}, {280, 115}, {240, 120} ),
	Color( "Red" ),
	Closed( 1 )
);

```

### Add Row

**Syntax:** obj << Add Row( {values,...} )

**Description:** Adds a row of data to the table

```js

Names Default To Here( 1 );
New Window( "test",
	tb = Table Box(
		String Col Box( "string col", {"a"} ),
		Number Col Box( "number col", {1} )
	)
);
tb << add row( {"b", 2} );

```

### Add Simple Shape Annotation

**Syntax:** obj << Add Simple Shape Annotation

**Description:** Adds a simple shape on top of the display box.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Add Simple Shape Annotation( Oval( 210, 100, 250, 75 ) );
rbiv << Add Simple Shape Annotation( Rectangle( 70, 180, 95, 215 ) );

```

### Add Text Annotation

**Syntax:** obj << Add Text Annotation

**Description:** Adds text on top of the display box.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Add Text Annotation(
	Text( "We need to discuss this at the next meeting." ),
	Text Box( {65, 35, 200, 77} )
);

```

### Append

**Syntax:** obj << Append( db2 )

**Description:** Add db2 to the display tree after db.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << append( Text Box( "=== below ===" ) );

```

### Background Color

**Syntax:** obj << Background Color( color );

color = obj << Get Background Color

**Description:** If the background color is set, the box is filled with the background color prior to drawing its content. If the background color is not set, the background and content of the containing boxes show through.

**JMP Version Added:** 15

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Show( tb << Get Background Color );
Wait( 2 );
tb << Background Color( "Yellow" );

```

### Bootstrap

**Syntax:** obj << Bootstrap( nsample, Random Seed(number), Fractional Weights(0|1), Split Selected Column(0|1), Discard Stacked Table if Split Works(0|1) )

**Description:** Bootstraps this analysis: repeating it many times with different resampling weights and collecting tables as selected.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Line;
(obj << Report)[Table Box( 1 )] << Bootstrap(
	50,
	Fractional Weights( 1 ),
	Split Selected Column( 1 )
);

```

### Border

**Syntax:** obj << Border( sides );

sides = obj << Get Border

**Description:** Borders are solid lines drawn around the outside of a display box. If a single value is provided, it will be applied to all sides. If two values are specified, they will be applied to horizontal and vertical borders.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Wait( 2 );
tb << Border( 1 );

```

### Border Color

**Syntax:** obj << Border Color( color );

color = obj << Get Border Color

**Description:** Optional color to override the default color for box borders.

**JMP Version Added:** 19

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Wait( 2 );
tb << Border( 1 );
tb << Border Color( "Light Red" );

```

### Bring Window To Front

**Syntax:** obj << Bring Window To Front

**Description:** Brings the window to the front.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << Run Script( "Bivariate" );
w << Bring Window To Front;

```

### Child

**Syntax:** obj << Child

**Description:** Returns the child of the display box.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
axisbox = rbiv[axis box( 1 )];
axisParent = axisbox << parent();
axisChild = axisParent << child();
Print( axisChild << Class Name() );

```

### Class Name

**Syntax:** obj << Class Name

**Description:** Returns the name of the display class for the display box.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
axisbox = rbiv[axis box( 1 )];
axisbox << Class Name();

```

### Clone Box

**Syntax:** obj << Clone Box

**Description:** Makes a new copy of the display box.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << append( Text Box( "=== below ===" ) );
clonedBox = rbiv << Clone Box();
rbiv << append( clonedBox );

```

### Close Window

**Syntax:** obj << Close Window( <"NoSave"> )

**Description:** Closes the window.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
w << Close Window;

```

### Copy Data

**Syntax:** obj << Copy Data

**Description:** copies the tab-delimited data from a matrix or table to the clip board.

```js

Names Default To Here( 1 );
New Window( "x", mat = Matrix Box( [1 2 3, 4 5 6, 7 8 9] ) );
mat << CopyData;

```

### Copy Graph

**Syntax:** obj << Copy Graph

**Description:** Puts a picture of the graph and axes on the clipboard.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
(rbiv[FrameBox( 1 )]) << Copy Graph();
"paste into a paint program";

```

### Copy Picture

**Syntax:** obj << Copy Picture

**Description:** Puts a picture of the display box on the clipboard.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Copy Picture();

```

### Copy Selected Table Rows

**Syntax:** obj << Copy Selected Table Rows

**Description:** Copy the contents of the selected rows to the clipboard

**JMP Version Added:** 15

### Copy Table

**Syntax:** obj << Copy Table

**Description:** Copy the contents of the table to the clipboard

**JMP Version Added:** 15

### Delete Box

**Syntax:** obj << Delete Box

**Description:** Delete the display box.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
axisbox = rbiv[axis box( 1 )];
axisbox << Delete Box();

```

### Delete Row

**Syntax:** obj << Delete Row( row number )

**Description:** Deletes a row of data to the table

```js

Names Default To Here( 1 );
New Window( "test",
	tb = Table Box(
		String Col Box( "string col", {"a", "b"} ),
		Number Col Box( "number col", {1, 2} )
	)
);
tb << delete row( 1 );

```

### Deselect

**Syntax:** obj << Deselect

**Description:** Deselects this object for use by Edit menu commands.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
selected = 0;
New Window( "Example",
	ex = Button Box( "Press Me",
		selected = !selected;
		refresh;
	)
);
refresh = Function( {},
	If( selected,
		ex << Select,
		ex << Deselect
	)
);

```

### Dispatch

**Syntax:** obj << Dispatch( {outline node, ...}, display element, display element type, command )

**Description:** Send command to a specific part of a display tree.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Dispatch( {}, "Bivar Plot", FrameBox, {Marker Size( 3 )} );

```

### Enabled

**Syntax:** obj << Enabled( state=0|1 );

state = obj << Get Enabled

**Description:** An object that is not enabled will not respond to keyboard or mouse input. This property is inherited by child objects, so a container object that is disabled will cause all descendent objects to be disabled.

```js

Names Default To Here( 1 );
//This message applies to all display objects
New Window( "enabled",
	V List Box(
		check = Check Box(
			{"Use Password"},
			ptext << Enabled( check << Get( 1 ) );
			pvalue << Enabled( check << Get( 1 ) );
		),
		Lineup Box( N Col( 2 ),
			Text Box( "Username:" ),
			Text Edit Box( "", <<Set Width( 100 ) ),
			ptext = Text Box( "Password:", <<Enabled( 0 ) ),
			pvalue = Text Edit Box( "",
				<<Password Style( 1 ),
				<<Set Width( 20 ),
				<<Enabled( 0 )
			)
		)
	)
);

```

### Filter Where

**Syntax:** obj << Filter Where

**Description:** Filters rows in the table based on the values in that row.

**JMP Version Added:** 17

```js

Names Default To Here( 1 );
New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << set selectable rows( 1 );
tb << filter where( "Elevation (meters)"n < 4000 | Mountain == "K2" );

```

### Find

**Syntax:** obj << Find

**Description:** Returns a display box with the given argument.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
axisbox = rbiv << Find( axis box( 1 ) );
axisbox << Delete();

```

### Get

**Syntax:** obj << Get

**Description:** Returns the entries of the table in list form.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Baltic.jmp" );
d = Distribution( Continuous Distribution( Column( :ls ) ) );
rpt = d << report;
tb = rpt[Table Box( 1 )];
Print( tb << Get );

```

### Get Annotation

**Syntax:** obj << Get Annotation

**Description:** Returns the first annotation that is anchored to this display box. Other annotations can be accessed by using Sib() on the result.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Add Text Annotation(
	Text( "We need to discuss this at the next meeting." ),
	Text Box( {65, 35, 200, 77} )
);
annotation = rbiv << Get Annotation;
annotation << delete;

```

### Get As Matrix

**Syntax:** obj << Get As Matrix( <"Visible"> )

**Description:** Returns the numeric entries of the table in matrix form.  If the Visible option is specified, only visible columns will be included.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Baltic.jmp" );
d = Distribution( Continuous Distribution( Column( :ls ) ) );
rpt = d << report;
tb = rpt[Table Box( 1 )];
Print( tb << Get As Matrix );

```

### Get Background Color

**Syntax:** obj << Background Color( color );

color = obj << Get Background Color

**Description:** If the background color is set, the box is filled with the background color prior to drawing its content. If the background color is not set, the background and content of the containing boxes show through.

**JMP Version Added:** 15

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Show( tb << Get Background Color );
Wait( 2 );
tb << Background Color( "Yellow" );

```

### Get Base Data Font

**Syntax:** font = obj << Get Base Data Font

**Description:** Returns the base font used for text drawn by the box. Base fonts are predefined names such as Title, Text, Annotation, and others, which are specified in the Preferences for fonts.

```js

Names Default To Here( 1 );
New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Get Base Data Font;

```

### Get Base Title Font

**Syntax:** font = obj << Get Base Title Font

**Description:** Returns the base font used for text drawn by the box. Base fonts are predefined names such as Title, Text, Annotation, and others, which are specified in the Preferences for fonts.

```js

Names Default To Here( 1 );
New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Get Base Title Font;

```

### Get Border

**Syntax:** obj << Border( sides );

sides = obj << Get Border

**Description:** Borders are solid lines drawn around the outside of a display box. If a single value is provided, it will be applied to all sides. If two values are specified, they will be applied to horizontal and vertical borders.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Wait( 2 );
tb << Border( 1 );

```

### Get Border Color

**Syntax:** obj << Border Color( color );

color = obj << Get Border Color

**Description:** Optional color to override the default color for box borders.

**JMP Version Added:** 19

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Wait( 2 );
tb << Border( 1 );
tb << Border Color( "Light Red" );

```

### Get Click Sort

**Syntax:** 0|1 = obj << Get Click Sort

**Description:** 1 if the table can be sorted by single clicking on a column header, otherwise 0

```js

Names Default To Here( 1 );
New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Get Click Sort;

```

### Get Column Borders

**Syntax:** obj << Get Column Borders( state=0|1 )

**Description:** Returns 1 if columns borders are currently being drawn

```js

Names Default To Here( 1 );
New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Get Column Borders;

```

### Get Column Group Borders

**Syntax:** obj << Get Column Group Borders( state=0|1 )

```js

Names Default To Here( 1 );
New Window( "Mountains",
	tb = Table Box(
		Col Span Box(
			"Column Span",
			String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} )
		),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Get Column Group Borders;

```

### Get Content Size

**Syntax:** obj << Get Content Size

**Description:** Returns the content size within the window.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
c = w << Get Content Size();
Show( c );

```

### Get Context Menu Item State

**Syntax:** 0|1|-1 = obj << Get Context Menu Item State( index )

**Description:** Gets the context menu item state of index menu item. The state will be normal (0), checked (1), or disabled (-1)

```js

Names Default To Here( 1 );
New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Set Context Menu Script( {"A", Print( "A" ), "B", Print( "B" ), "C", Print( "C" )} );
tb << Set Context Menu Item State( 2, -1 );
tb << Get Context Menu Item State( 2 );

```

### Get Context Menu Script

**Syntax:** list = obj << Get Context Menu Script

**Description:** Returns the context menu script attached to the calling object.

```js

Names Default To Here( 1 );
New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Set Context Menu Script(
	{"Beep", Beep(), "Beep Twice", Beep() ; Wait( 1.0 ) ; Beep() ; ,
	"Get Context Menu Script", Print( tb << Get Context Menu Script )}
);

```

### Get Context Menu Submenu

**Syntax:** obj << Get Context Menu Submenu( index )

**Description:** Returns the number of submenus under the given menu item

```js

Names Default To Here( 1 );
New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Set Context Menu Script(
	{"A", Print( "A" ), "B", Print( "B" ), "B1", Print( "B1" ), "B2", Print( "B2" ), "B3",
	Print( "B3" ), "C", Print( "C" )}
);
tb << Set Context Menu Submenu( 2, 3 );
tb << Get Context Menu Submenu( 2 );

```

### Get Data Font Name

**Syntax:** obj << Get Data Font Name

**Description:** Returns the name of the font.

```js

Names Default To Here( 1 );
New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Set Data Font Name( "Times New Roman" );
tb << Get Data Font Name;

```

### Get Data Font Scale

**Syntax:** obj << Get Data Font Scale

**Description:** Returns the current scale factor for font.

```js

Names Default To Here( 1 );
New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Get Data Font Scale;

```

### Get Data Font Size

**Syntax:** obj << Get Data Font Size

**Description:** Returns the size of the font.

```js

Names Default To Here( 1 );
New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Get Data Font Size;

```

### Get Data Font Style

**Syntax:** obj << Get Data Font Style

**Description:** Returns the font style name.

```js

Names Default To Here( 1 );
New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Set Data Font Name( "Arial" );
tb << Set Data Font Style( "Italic" );
tb << Get Data Font Style;

```

### Get Display Path

**Syntax:** obj << Get Display Path( parent box, <receiver expr>, <Mode("XPath"|"Subscript")> )

**Description:** Gets a relatively robust expression to navigate between parent box and obj. This path is not guaranteed to be stable across JMP releases. The receiver expr is incorporated into the output expression if provided. If not, the expression provided for parent box is used instead. As shown in the example, this message is mainly useful for increasing the robustness of a path you already have available. The XPath mode is default.

**Basic**

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Run Script( "Bivariate" );
rpt = Report( biv );
xpath expr = rpt[Number Col Box( 9 )] << Get Display Path( rpt, Expr( Report( biv ) ) ); // Make Number Col Box(9) more robust
Show( xpath expr );
xpath expr << Select;

```

**Subscript Mode**

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Run Script( "Bivariate" );
rpt = Report( biv );
subscript expr = rpt[Number Col Box( 9 )] << Get Display Path( rpt, Mode( "Subscript" ) ); // Make Number Col Box(9) more robust
Show( subscript expr );
subscript expr << Select;

```

### Get Enabled

**Syntax:** obj << Enabled( state=0|1 );

state = obj << Get Enabled

**Description:** An object that is not enabled will not respond to keyboard or mouse input. This property is inherited by child objects, so a container object that is disabled will cause all descendent objects to be disabled.

```js

Names Default To Here( 1 );
//This message applies to all display objects
New Window( "enabled",
	V List Box(
		check = Check Box(
			{"Use Password"},
			ptext << Enabled( check << Get( 1 ) );
			pvalue << Enabled( check << Get( 1 ) );
		),
		Lineup Box( N Col( 2 ),
			Text Box( "Username:" ),
			Text Edit Box( "", <<Set Width( 100 ) ),
			ptext = Text Box( "Password:", <<Enabled( 0 ) ),
			pvalue = Text Edit Box( "",
				<<Password Style( 1 ),
				<<Set Width( 20 ),
				<<Enabled( 0 )
			)
		)
	)
);

```

### Get Font

**Syntax:** obj << Get Font

```js

Names Default To Here( 1 );
New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Get Font;

```

### Get HTML

**Syntax:** obj << Get HTML( <format> )

**Description:** Returns a string containing HTML source for the display box.

**Example 1**

```js

Names Default To Here( 1 );
//This message applies to all display box objects
win = New Window( "Example", a = Text Box( "Example Text" ) );
a << Set Text( win << Get HTML );

```

**Example 2**

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), Means( 1 ), Mean Diamonds( 1 ) );
Save Text File( "$TEMP/Oneway.html", obj << Get HTML( "svg" ) ); // Prefer <<Save HTML
Web( "$TEMP/Oneway.html", JMPWindow );

```

### Get Heading Column Borders

**Syntax:** obj << Get Heading Column Borders( state=0|1 )

**Description:** Returns 1 if the column headers for the table currently have borders

```js

Names Default To Here( 1 );
New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Get Heading Column Borders;

```

### Get Heading Underline Color

**Syntax:** obj << Heading Underline Color( color );

color = obj << Get Heading Underline Color

**JMP Version Added:** 19

```js

Names Default To Here( 1 );
New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Set Underline Headings( 1 );
tb << Heading Underline Color( "Black" );
Show( tb << Get Heading Underline Color );

```

### Get Height

**Syntax:** width = obj << Get Height

**Description:** Returns the height of the display box.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
fb = r[framebox( 1 )];
fb << Get Height;

```

### Get Horizontal Alignment

**Syntax:** obj << Horizontal Alignment( "Default"|"Left"|"Center"|"Right" );

"Default"|"Left"|"Center"|"Right" = obj << Get Horizontal Alignment

**Description:** Horizontal alignment controls the positioning of the box within a container if the box does not fill the entire space.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
lb = r[List Box( 6 )];
lb << Border( 1 );
Wait( 2 );
lb << Horizontal Alignment( "Right" );

```

### Get Journal

**Syntax:** obj << Get Journal

**Description:** Returns a string containing journal source for the display box.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
Print( rbiv << Get Journal );

```

### Get Locked Columns

**Syntax:** obj << Get Locked Columns

**Description:** The number of columns that cannot be dragged with the hand cursor or have any columns dropped before them.

```js

Names Default To Here( 1 );
New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << set locked columns( 1 );
tb << get locked columns();

```

### Get Margin

**Syntax:** obj << Margin( sides );

sides = obj << Get Margin

**Description:** Margin adds space between the border of the box and adjacent boxes. Use named arguments, or provide a list of values. If a single value is provided, it will be applied to all sides. If two values are specified, they will be applied to horizontal and vertical margins.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Show( tb << Get Margin );
tb << Border( 1 );
Wait( 2 );
tb << Margin( Left( 20 ), Top( 20 ), Right( 20 ), Bottom( 20 ) );

```

### Get Max Size

**Syntax:** width,height = obj << Get Max Size

**Description:** Returns the maximum size of this display box for purposes of auto-stretching.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/big class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
fb = r[framebox( 1 )];
fb << Get Max Size;

```

### Get Min Size

**Syntax:** width,height = obj << Get Min Size

**Description:** Returns the minimum size of this display box for purposes of auto-stretching.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/big class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
fb = r[framebox( 1 )];
fb << Get Min Size;

```

### Get Names

**Syntax:** obj << Get Names

**Description:** Returns a list of the column names

```js

Names Default To Here( 1 );
New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Get Names();

```

### Get Namespace

**Syntax:** obj << Get Namespace

**Description:** Returns the namespace associated with this display object.

```js

Names Default To Here( 1 );
//This message applies to all display objects
x = 1;
w = New Window( "Test", b = Button Box( "Press me" ) );
b:x = 2;
ns = b << GetNamespace();
Show( ns:x, x );

```

### Get On Close

**Syntax:** obj << Get On Close

**Description:** Returns the script or function that will run when the window closes.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << On Close(
	// Modal dialogs return Button(1) if OK is pressed, Button(-1) if canceled
	New Window( "Are you sure?",
		<<modal,
		V List Box(
			Text Box( "Press OK to allow the window to close" ),
			H List Box( Button Box( "OK" ), Button Box( "Cancel" ) )
		)
	)["button"] == 1
);
Show( w << Get On Close );

```

### Get Padding

**Syntax:** obj << Padding( sides );

sides = obj << Get Padding

**Description:** Padding adds space between the content and the border of the box. Use named arguments, or provide a list of values. If a single value is provided, it will be applied to all sides. If two values are specified, they will be applied to horizontal and vertical padding.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Show( tb << Get Hide );
tb << Border( 1 );
Wait( 2 );
tb << Padding( Left( 20 ), Top( 20 ), Right( 20 ), Bottom( 20 ) );

```

### Get Page Setup

**Syntax:** obj << Get Page Setup

**Description:** Get page setup information for PDF

```js

Names Default To Here( 1 );
//This message applies to all display box objects
w = New Window( "Window", Text Box( "Page Setup Test" ) );
w << get page setup();

```

### Get Picture

**Syntax:** obj << Get Picture( <Scale(factor)>, <Type("Bitmap" | "Scalable")>, <View("Picture" | "Screen" | "Print"), <Appearance("Default" | "Current")>, <SubRect(Left(number), Top(number), Right(number), Bottom(number))> )

**Description:** Captures db as an Image Object. The optional Scale argument will render the image at a scaled resolution. Scaling requires that the display box be stretchable. The Type argument determines whether the result will be a scalable vector image or a bitmap. By default a scalable image is returned, which is suitable for saving to vector formats like PDF. The View option changes the behavior of some boxes. The default option of "Picture" draws the report as it would when exporting to an image format, with scrolled areas fully shown. View mode of "Screen" draws the report as seen on-screen, and "Print" draws the report as it does when printing, without any of the page setup features. The SubRect option will capture a portion of the resulting image rather than a full image. The Appearance option can change from the "Default" output colors to the "Current" colors as seen on-screen. The View, SubRect, and Appearance options are only supported for Type "Bitmap".

**Default**

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
New Window( "Example", rbiv << Get Picture );

```

**Scale**

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv[FrameBox( 1 )] << Set Stretch( "Window", "Window" );
New Window( "Example", rbiv << Get Picture( Scale( 1.5 ) ) );

```

**View and Appearance**

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate(
	Y( :weight ),
	X( :height ),
	Fit Line( {Line Color( {212, 73, 88} )} ),
	Fit Polynomial( 3, {Line Color( {61, 174, 70} )} ),
	Kernel Smoother( 1, 1, 0.5, 0 )
);
rbiv = biv << report;
rbiv[FrameBox( 1 )] << Set Stretch( "Window", "Window" );
New Window( "Example",
	H List Box(
		rbiv << Get Picture( View( "Screen" ), Appearance( "Current" ) ),
		rbiv << Get Picture( View( "Print" ), Appearance( "Default" ) )
	)
);

```

### Get Project

**Syntax:** project = obj << Get Project()

**Description:** Returns the parent project of the window, or Empty() if it is not in a project.

**JMP Version Added:** 14

```js

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
c = w << Get Project();
Show( c );

```

### Get Properties

**Syntax:** obj << Get Properties

**Description:** Returns an associative array that contains the display box&apos;s properties and their values.

```js

Names Default To Here( 1 );
New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Get Properties;

```

### Get Property

**Syntax:** obj << Get Property( "property" )

**Description:** Returns the current setting for the named property.

```js

Names Default To Here( 1 );
New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Get Property( "Enabled" );

```

### Get Property List

**Syntax:** obj << Get Property List

**Description:** Returns a list of properties the display box has.

```js

Names Default To Here( 1 );
New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Get Property List;

```

### Get RTF

**Syntax:** obj << Get RTF( <format> )

**Description:** Returns a string containing RTF source for the display box.

**Example 1**

```js

Names Default To Here( 1 );
//This message applies to all display box objects
win = New Window( "Example", a = Text Box( "Example Text" ) );
a << Set Text( win << Get RTF );

```

**Example 2**

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), Means( 1 ), Mean Diamonds( 1 ) );
Save Text File( "$TEMP/Oneway.rtf", obj << Get RTF( "png" ) ); // Prefer <<Save RTF
Open( "$TEMP/Oneway.rtf" );

```

### Get Row Border Color

**Syntax:** obj << Row Border Color( color );

color = obj << Get Row Border Color

**JMP Version Added:** 19

```js

Names Default To Here( 1 );
New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Set Row Borders( 1 );
tb << Row Border Color( "Black" );
Show( tb << Get Row Border Color );

```

### Get Row Borders

**Syntax:** obj << Get Row Borders( state=0|1 )

**Description:** Returns 1 if lines are drawn above and below each row

```js

Names Default To Here( 1 );
New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Get Row Borders;

```

### Get Row Change Function

**Syntax:** obj << Get Row Change Function

**Description:** Returns the expression that is evaluated when a row is selected.

```js

Names Default To Here( 1 );
New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Set Selectable Rows();
tb << set row change function( Function( {this}, Print( this << get selected rows ) ) );
tb << get row change function;

```

### Get Row Height Scale

**Syntax:** obj << Row Height Scale( number );

number = obj << Get Row Height Scale

**Description:** Scales the default height or the rows of a table. The default value is 1.

**JMP Version Added:** 19

```js

Names Default To Here( 1 );
New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Row Height Scale( 3 );
tb << Get Row Height Scale();

```

### Get Row States

**Syntax:** rs = obj << Get Row States( <dt> )

**Description:** Returns a vector containing the row state for every row in the given data table or the current data table. The row states can come from the table, or from the filter context of the box.

**Single table**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "filter test",
	Data Filter Context Box(
		H List Box(
			dt << Data Filter(
				Local,
				Add Filter( columns( :height ), Where( :height >= 51 & :height <= 62 ) ),
				Mode( Select( 0 ), Show( 1 ), Include( 1 ) )
			),
			V List Box(
				t = Text Box( "0 Rows Excluded" ),
				Distribution(
					Continuous Distribution( Column( :weight ) ),
					Nominal Distribution( Column( :age ) )
				)
			)
		)
	)
);
updatetext = Function( {},
	rs = t << Get Row States( dt );
	n = 0;
	For( ii = 1, ii <= N Rows( rs ), ii++,
		If( Excluded( As Row State( rs[ii] ) ),
			n
			++)
	);
	t << Set Text( Char( n ) || " Rows Excluded" );
);
rsupdate = Function( {a},
	If( Is Matrix( a ),
		updatetext()
	)
);
rsh = t << Make Row State Handler( dt, rsupdate );
updatetext();

```

**Where subset**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "filter test",
	t = Text Box( "0 Rows Excluded" ),
	dist = Distribution(
		Continuous Distribution( Column( :weight ) ),
		Nominal Distribution( Column( :age ) ),
		Local Data Filter(
			Add Filter( columns( :height ), Where( :height >= 51 & :height <= 62 ) ),
			Mode( Select( 0 ), Show( 1 ), Include( 1 ) )
		),
		Where( :sex == "F" )
	)
);
subset = dist << Get Data Table();
updatetext = Function( {},
	rs = Report( dist ) << Get Row States( subset );
	n = 0;
	For( ii = 1, ii <= N Rows( rs ), ii++,
		If( Excluded( As Row State( rs[ii] ) ),
			n
			++)
	);
	t << Set Text( Char( n ) || " Rows Excluded" );
);
rsupdate = Function( {a},
	If( Is Matrix( a ),
		updatetext()
	)
);
rsh = Report( dist ) << Make Row State Handler( subset, rsupdate );
updatetext();

```

### Get Row Vertical Alignment

**Syntax:** obj << Row Vertical Alignment( "Top"|"Center"|"Baseline"|"Bottom" );

"Top"|"Center"|"Baseline"|"Bottom" = obj << Get Row Vertical Alignment

**Description:** Sets the vertical alignment of the text or numbers in the rows of a table

**JMP Version Added:** 19

```js

Names Default To Here( 1 );
New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Row Vertical Alignment( "Bottom" );
tb << Get Row Vertical Alignment();
tb << Row Height Scale( 3 );

```

### Get Selectable Rows

**Syntax:** obj << Get Selectable Rows

**Description:** Returns true if the table box currently allows row selection

```js

Names Default To Here( 1 );
New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Get Selectable Rows();

```

### Get Selected Row Color

**Syntax:** obj << Get Selected Row Color

**Description:** Gets the background color for selected rows

```js

Names Default To Here( 1 );
New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Set Selectable Rows();
tb << Set Selected Row Color( "Red" );
Color To RGB( tb << Get Selected Row Color );

```

### Get Selected Rows

**Syntax:** obj << Get Selected Rows

**Description:** Returns a matrix of row numbers that are selected.

```js

Names Default To Here( 1 );
New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Set Selected Rows( [1, 4] );
Print( tb << Get Selected Rows() );

```

### Get Shade Alternate Rows

**Syntax:** obj << Get Shade Alternate Rows( state=0|1 )

**Description:** Returns 1 if every other row is shaded

```js

Names Default To Here( 1 );
New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Get Shade Alternate Rows;

```

### Get Shade Cells

**Syntax:** obj << Get Shade Cells( state=0|1 )

**Description:** Returns 1 if the cell area of the table has a shaded background

```js

Names Default To Here( 1 );
New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Get Shade Cells;

```

### Get Shade Headings

**Syntax:** obj << Get Shade Headings( state=0|1 )

**Description:** Returns 1 if the column headers for the table are currently shaded

```js

Names Default To Here( 1 );
New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Get Shade Headings;

```

### Get Show Window

**Syntax:** obj << Get Show Window

**Description:** Returns the visibility of the window.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 1 );
w << Show Window( 0 );
Wait( 2 );
Print( w << Get Show Window() );

```

### Get Size

**Syntax:** width,height = obj << Get Size

**Description:** Returns the size of the display box.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/big class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
fb = r[framebox( 1 )];
Print( fb << Get Size );

```

### Get Stretch

**Syntax:** x,y = obj << Get Stretch

**Description:** Returns the stretching flags for this display box in the horizontal and vertical directions.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
//This message applies to all display box objects
New Window( "Stretch",
	V List Box(
		H List Box( Text Edit Box( "String1" ), Text Edit Box( "String2" ) ),
		spacer = Spacer Box(
			Size( 20, 20 ),
			Color( "Light Red" ),
			<<Set Stretch( "Fill", "Off" )
		)
	)
);
spacer << Get Stretch();

```

### Get Text

**Syntax:** obj << Get Text

**Description:** Returns a string containing the text of the display box.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
win = New Window( "Example", a = Text Box( "Example Text" ) );
a << Set Text( win << Get Text );

```

### Get Text Color

**Syntax:** obj << Text Color( color );

color = obj << Get Text Color

**Description:** Text will be drawn using the text color if it has been set. If the property has not been set, the box will inherit the text color of the containing box.

**JMP Version Added:** 15

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Show( tb << Get Text Color );
Wait( 2 );
tb << Text Color( "Red" );

```

### Get Title Font

**Syntax:** obj << Get Title Font

```js

Names Default To Here( 1 );
New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Get Title Font;

```

### Get Title Font Name

**Syntax:** obj << Get Title Font Name

**Description:** Returns the name of the font.

```js

Names Default To Here( 1 );
New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Set Title Font Name( "Times New Roman" );
tb << Get Title Font Name;

```

### Get Title Font Scale

**Syntax:** obj << Get Title Font Scale

**Description:** Returns the current scale factor for font.

```js

Names Default To Here( 1 );
New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Get Title Font Scale;

```

### Get Title Font Size

**Syntax:** obj << Get Title Font Size

**Description:** Returns the size of the font.

```js

Names Default To Here( 1 );
New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Get Title Font Size;

```

### Get Title Font Style

**Syntax:** obj << Get Title Font Style

**Description:** Returns the font style name.

```js

Names Default To Here( 1 );
New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Set Title Font Name( "Arial" );
tb << Set Title Font Style( "Italic" );
tb << Get Title Font Style;

```

### Get UI Only

**Syntax:** obj << UI Only( state=0|1 );

state = obj << Get UI Only

### Get Underline Headings

**Syntax:** obj << Get Underline Headings( state=0|1 )

**Description:** Returns 1 if column headings are underlined

```js

Names Default To Here( 1 );
New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Get Underline Headings;

```

### Get User Resizable

**Syntax:** obj << User Resizable;

obj << Get User Resizable

**Description:** If the box is user resizable, the cursor will change near the bottom and right edges to allow drag-and-drop resizing.

```js

Names Default To Here( 1 );
root1 = Tree Node( "Parent 1" );
root2 = Tree Node( "Parent 2" );
c1 = Tree Node( "Child 1" );
c2 = Tree Node( "Child 2" );
c3 = Tree Node( "Child 3" );
c4 = Tree Node( "Child 4" );
root1 << Append( c1 );
root1 << Append( c2 );
root2 << Append( c3 );
root2 << Append( c4 );
New Window( "resize",
	H Splitter Box(
		Size( 600, 200 ),
		tree = Tree Box( {root1, root2} ),
		scroll = Scroll Box(
			Size( 300, 200 ),
			Picture Box( Open( "$SAMPLE_IMAGES/tile.jpg", jpg ) )
		)
	)
);
tree << Set Stretch( "Window", "Window" ) << Set Max Size( 10000, 10000 );
scroll << Set Stretch( "Window", "Window" ) << Set Max Size( 10000, 10000 );
Wait( 2 );
tree << User Resizable( {0, 0} );
scroll << User Resizable( {0, 0} );

```

### Get Vertical Alignment

**Syntax:** obj << Vertical Alignment( "Default"|"Top"|"Center"|"Bottom" );

"Default"|"Top"|"Center"|"Bottom" = obj << Get Vertical Alignment

**Description:** Vertical alignment controls the positioning of the box within a container if the box does not fill the entire space.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
lb = r[List Box( 6 )];
lb << Set Horizontal( 1 );
lb = r[List Box( 7 )];
lb << Border( 1 );
Wait( 2 );
lb << Vertical Alignment( "Bottom" );

```

### Get Visibility

**Syntax:** obj << Visibility( "Visible"|"Hidden"|"Collapse" );

"Visible"|"Hidden"|"Collapse" = obj << Get Visibility

**Description:** Visibility determines whether a box is shown and whether it takes up space. The default value of "Visible" means that the object will be shown.  A "Hidden" box is not shown but still takes up space, while a "Collapsed" box takes up no space in the layout.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Show( tb << Get Visibility );
Wait( 2 );
tb << Visibility( "Collapse" );
Show( tb << Get Visibility );

```

### Get Web Support

**Syntax:** obj << Get Web Support

**Description:** Return a number indicating the level of Interactive HTML support for the display object. 1 means some or all elements are supported. 0 means no support.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

### Get Width

**Syntax:** width = obj << Get Width

**Description:** Returns the width of the display box.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/big class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
fb = r[framebox( 1 )];
fb << Get Width;

```

### Get Window Icon

**Syntax:** obj << Get Window Icon

**Description:** Returns the window icon.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
t = w << Get Window Icon;
Show( t );

```

### Get Window Position

**Syntax:** obj << Get Window Position

**Description:** Returns the position of the window.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
p = w << Get Window Position();
Show( p );

```

### Get Window Size

**Syntax:** obj << Get Window Size

**Description:** Returns the size of the window.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
s = w << Get Window Size();
Show( s );

```

### Get Window Title

**Syntax:** obj << Get Window Title

**Description:** Returns the window title.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
t = w << Get Window Title;
Show( t );

```

### Get Window View

**Syntax:** obj << Get Window View

**Description:** Returns the current window view. Windows can be "Visible", "Invisible", or "Private".

```js

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
Print( w << Get Window View() );

```

### Get XML

**Syntax:** obj << Get XML( <English(0|1)>, <NoData(0|1)> )

**Description:** Retrieves the display tree formatted as XML. By default, strings are returned in the local language, and the XML includes data values within some boxes. Use the English option to return English strings where available. Use the NoData option to omit the data values within boxes, which can be very large for some display trees.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
win = New Window( "test", a = Text Box( "my test" ) );
a << set text( win << get xml );

```

### GetOffset

**Syntax:** x,y = obj << GetOffset

**Description:** Returns the offset of this display box relative to the parent box. You might need to use the <<parent message in a loop to accumulate several offsets.

```js

Names Default To Here( 1 );
New Window( "example",
	MouseBox(
		Graph Box(
			title( "title" ),
			Pen Size( 3 );
			Y Function( -3 + 100 / 2 * (1 + Sin( (2 * Pi() * (x + .3)) / 100 )), x );
		),
		<<settrackenable( 1 ) // put the mouse box to work, watching "tracking"
	,
		<<settrack( // events from the mouse (movement, with button up or down)
			Function( {this, pt}, // parameters: this is the mousebox, pt is mouse x,y
				{fb, offset, t, off, size}, // local variables
				// recalulate offset and size each time, the values can change
				fb = this[framebox( 1 )]; // the framebox in the graph 
				offset = [0, 0]; // accumulator to sum up the offset between framebox and mousebox
				t = fb; // a temporary box that starts at the frame 
				While( t != this, // and walks up to the mousebox
					off = t << getOffset; // ask each box for its offset to the immediate parent
					offset += Matrix( off ); // convert list answer to matrix so + will work
					t = t << parent; // crawl up to the mousebox, one box at a time
				);
				size = Matrix( fb << getSize ); // the frame knows its size
				If( // over the frame box
					offset[1] < pt[1] < offset[1] + size[1] & offset[2] < pt[2] < offset[2
					] + size[2]
				,
					fb << setbackgroundcolor( "red" ),
					fb << setbackgroundcolor( "blue" )
				);
			)
		)
	)
);

```

### Group By Column

**Syntax:** obj << Group By Column( <column index or title>, <ascending=0|1> )

**Description:** Groups all rows with the same value together and sorts the table based on the those groups. Default sort order is descending.

**JMP Version Added:** 19

```js

Names Default To Here( 1 );
dt = Open( "$sample_data\big class.jmp" );
New Window( "Test", dtb = Data Table Box( dt ) );
dtb << sort by column( 4 );
dtb << group by column( 3 );
dtb << set click sort( 1 );

```

### Heading Underline Color

**Syntax:** obj << Heading Underline Color( color );

color = obj << Get Heading Underline Color

**JMP Version Added:** 19

```js

Names Default To Here( 1 );
New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Set Underline Headings( 1 );
tb << Heading Underline Color( "Black" );
Show( tb << Get Heading Underline Color );

```

### Horizontal Alignment

**Syntax:** obj << Horizontal Alignment( "Default"|"Left"|"Center"|"Right" );

"Default"|"Left"|"Center"|"Right" = obj << Get Horizontal Alignment

**Description:** Horizontal alignment controls the positioning of the box within a container if the box does not fill the entire space.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
lb = r[List Box( 6 )];
lb << Border( 1 );
Wait( 2 );
lb << Horizontal Alignment( "Right" );

```

### Insert Row

**Syntax:** obj << Insert Row( row number, {values,...} )

**Description:** Inserts a row of data to the table

```js

Names Default To Here( 1 );
New Window( "test",
	tb = Table Box(
		String Col Box( "string col", {"a"} ),
		Number Col Box( "number col", {1} )
	)
);
tb << insert row( 1, {"b", 2} );

```

### Inval

**Syntax:** obj << Inval

**Description:** Invalidate the displaybox.  The window will update when either the <<UpdateWindow message is sent or the operating system has time for the update.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
color = "green"; /* initial color in a variable */
New Window( "Inval example",
	Button Box( "red",
		color = "red";
		g1 << inval; /* tell the oval to redraw */
		g2 << inval; /* tell the rectangle to redraw */
		g1 << updateWindow; /* tell the window to update immediately */
		// this is a busy-wait to help demonstrate the various behaviors...
		x = Tick Seconds();
		While( Tick Seconds() - x < .5, 0 /* delay without wait(.5) */ );
	),
	Button Box( "blue",
		color = "blue";
		g1 << inval; /* same comments */
		g2 << inval;
		g1 << updateWindow;
		x = Tick Seconds();
		While( Tick Seconds() - x < .5, 0 );
	),
	g1 = Graph Box(/* the graph does NOT watch for the color variable to change 
                      but will use the current value of color when it reshows */
		Fill Color( color );
		Oval( 10, 80, 70, 50, 1 );
	),
	g2 = Graph Box(
		Fill Color( color );
		Rect( 10, 80, 70, 50, 1 );
	)
);

```

### Is Dirty

**Syntax:** obj << Is Dirty

**Description:** Gets the document&apos;s modified status. 1 means the document has been modified and will prompt for saving; 0 means the document is not modified.

**JMP Version Added:** 14

```js

Names Default To Here( 1 );

ww = New Window( "Test", <<Script, "Open(\!"$SAMPLE_DATA\Big Class.jmp\!");" );
Show( ww << Is Dirty );
ww << Set Dirty( 0 );
Show( ww << Is Dirty );

```

### Is Modal Dialog

**Syntax:** obj << Is Modal Dialog

**Description:** Returns true if the window is a modal dialog. Only useful when called from a window handler callback.

```js

Names Default To Here( 1 );
With Window Handler(
	New Window( "Modal Window", <<Modal ),
	Function( {win},
		Print( win << Is Modal Dialog() );
		win << close window();
	)
);

```

### Journal

**Syntax:** obj << Journal

**Description:** Makes a journal from the display box.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << journal;

```

### Journal Window

**Syntax:** obj << Journal Window

**Description:** Opens a journal window of the window.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
w = New Window( "Main Window", Text Box( "Main JMP Window" ) );
w << Journal Window;

```

### Launch

**Syntax:** obj << Launch

**Description:** Evaluates the given argument in the context of the display box.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "example",
	ob1 = Outline Box( "treemap launcher" ),
	ob2 = Outline Box( "bivariate partial" ),
	ob3 = Outline Box( "bivariate launched" )
);
ob1 << launch( Treemap() );
ob2 << launch( Bivariate( Y( :height ) ) );
ob3 << launch( Bivariate( Y( :height ), X( :weight ) ) );

```

### Make Combined Data Table

**Syntax:** obj << Make Combined Data Table

**Description:** Makes a data table that also searches the report for report tables with the same columns and combine all of these into the new data table.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Baltic.jmp" );
d = Distribution(
	Continuous Distribution( Column( :ls ) ),
	Continuous Distribution( Column( :ha ) )
);
rpt = d << report;
tb = rpt[Table Box( 1 )];
tb << Make Combined Data Table;

```

### Make Into Data Table

**Syntax:** obj << Make Into Data Table( <Invisible(bool) | Private(bool)> )

**Description:** Creates a new data table that contains the values in the TableBox.

**Example 1**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Baltic.jmp" );
d = Distribution( Continuous Distribution( Column( :ls ) ) );
rpt = d << report;
tb = rpt[Table Box( 1 )];
tb << Make Into Data Table;

```

**Example 2**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Baltic.jmp" );
d = Distribution( Continuous Distribution( Column( :ls ) ) );
rpt = d << report;
tb = rpt[Table Box( 1 )];
tb << Make Into Data Table( invisible( 1 ) );

```

### Make RowState Handler

**Syntax:** rs = obj << Make RowState Handler( <dt>, function(a) )

**Description:** Creates a row state handler for the given data table or the current data table. The function is called when the row states change in the filter context of the box. The argument of the function holds the rows numbers that have changed, or -1 if the row state filter has changed.

**Single table**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "filter test",
	Data Filter Context Box(
		H List Box(
			dt << Data Filter(
				Local,
				Add Filter( columns( :height ), Where( :height >= 51 & :height <= 62 ) ),
				Mode( Select( 0 ), Show( 1 ), Include( 1 ) )
			),
			V List Box(
				t = Text Box( "0 Rows Excluded" ),
				Distribution(
					Continuous Distribution( Column( :weight ) ),
					Nominal Distribution( Column( :age ) )
				)
			)
		)
	)
);
updatetext = Function( {},
	rs = t << Get Row States( dt );
	n = 0;
	For( ii = 1, ii <= N Rows( rs ), ii++,
		If( Excluded( As Row State( rs[ii] ) ),
			n
			++)
	);
	t << Set Text( Char( n ) || " Rows Excluded" );
);
rsupdate = Function( {a},
	If( Is Matrix( a ),
		updatetext()
	)
);
rsh = t << Make Row State Handler( dt, rsupdate );
updatetext();

```

**Where subset**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "filter test",
	t = Text Box( "0 Rows Excluded" ),
	dist = Distribution(
		Continuous Distribution( Column( :weight ) ),
		Nominal Distribution( Column( :age ) ),
		Local Data Filter(
			Add Filter( columns( :height ), Where( :height >= 51 & :height <= 62 ) ),
			Mode( Select( 0 ), Show( 1 ), Include( 1 ) )
		),
		Where( :sex == "F" )
	)
);
subset = dist << Get Data Table();
updatetext = Function( {},
	rs = Report( dist ) << Get Row States( subset );
	n = 0;
	For( ii = 1, ii <= N Rows( rs ), ii++,
		If( Excluded( As Row State( rs[ii] ) ),
			n
			++)
	);
	t << Set Text( Char( n ) || " Rows Excluded" );
);
rsupdate = Function( {a},
	If( Is Matrix( a ),
		updatetext()
	)
);
rsh = Report( dist ) << Make Row State Handler( subset, rsupdate );
updatetext();

```

### Margin

**Syntax:** obj << Margin( sides );

sides = obj << Get Margin

**Description:** Margin adds space between the border of the box and adjacent boxes. Use named arguments, or provide a list of values. If a single value is provided, it will be applied to all sides. If two values are specified, they will be applied to horizontal and vertical margins.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Show( tb << Get Margin );
tb << Border( 1 );
Wait( 2 );
tb << Margin( Left( 20 ), Top( 20 ), Right( 20 ), Bottom( 20 ) );

```

### Maximize Window

**Syntax:** obj << Maximize Window( <state=0|1> )

**Description:** Maximizes the window. Default argument is 1.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 1 );
w << Maximize Window( 1 );
Wait( 1 );
w << Maximize Window( 0 );

```

### Minimize Window

**Syntax:** obj << Minimize Window( <state=0|1> )

**Description:** Minimizes the window. Default argument is 1.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 1 );
w << Minimize Window( 1 );
Wait( 1 );
w << Minimize Window( 0 );

```

### Move Window

**Syntax:** obj << Move Window( x,y )

**Description:** Moves the window to the specified position.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
w << Move Window( 500, 500 );

```

### Next

**Syntax:** obj << Next

**Description:** Returns the display box after this display box.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
next = rbiv << Next();
Print( next << Class Name() );

```

### On Close

**Syntax:** obj << On Close( script )

**Description:** Sets a script or function to run upon closing the window. This script should return 1 to allow the close, or 0 to prevent the window from closing.

**Close Function**

```js

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << On Close(
	Function( {this}, 
        // Modal dialogs return Button(1) if OK is pressed, Button(-1) if cancelled
		New Window( "Are you sure?",
			<<modal,
			V List Box(
				Text Box(
					"Press OK to allow " || (this << Get Window Title) || " to close"
				),
				H List Box( Button Box( "OK" ), Button Box( "Cancel" ) )
			)
		)["button"] == 1
	)
);

```

**Close Script**

```js

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << On Close(
    // Modal dialogs return Button(1) if OK is pressed, Button(-1) if canceled
	New Window( "Are you sure?",
		<<modal,
		V List Box(
			Text Box( "Press OK to allow the window to close" ),
			H List Box( Button Box( "OK" ), Button Box( "Cancel" ) )
		)
	)["button"] == 1
);

```

### Optimize Display

**Syntax:** obj << Optimize Display

**Description:** Sets a data table&apos;s column widths and window to an optimum size.

**JMP Version Added:** 14

```js

Names Default To Here( 1 );
//This message applies to Data Table objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Optimize Display;

```

### Pad Window

**Syntax:** obj << Pad Window( bool )

**Description:** Turns window padding on or off.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
Open( "$SAMPLE_DATA/Big Class.jmp" );
d = distribution( Column( :height ) );
r = d << report;
r << Pad Window( 0 );

```

### Padding

**Syntax:** obj << Padding( sides );

sides = obj << Get Padding

**Description:** Padding adds space between the content and the border of the box. Use named arguments, or provide a list of values. If a single value is provided, it will be applied to all sides. If two values are specified, they will be applied to horizontal and vertical padding.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Show( tb << Get Hide );
tb << Border( 1 );
Wait( 2 );
tb << Padding( Left( 20 ), Top( 20 ), Right( 20 ), Bottom( 20 ) );

```

### Page Break

**Syntax:** obj << Page Break

**Description:** Inserts a page break before the display box.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
New Window( "Example",
	ob = Outline Box( "Outline Box",
		V List Box(
			ob2 = Outline Box( "Outline Box 2",
				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )
			),
			ob3 = Outline Box( "Outline Box",
				H List Box(
					Text Edit Box( "Bottom Left" ),
					Text Edit Box( "Bottom Right" )
				)
			)
		)
	)
);
ob3 << Page Break;

```

### Parent

**Syntax:** obj << Parent

**Description:** Returns the parent of this display box.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
axisbox = rbiv[axis box( 1 )];
axisParent = axisbox << parent();
Print( axisParent << Class Name() );

```

### Prepend

**Syntax:** obj << Prepend( db2 )

**Description:** Add db2 to the display tree before db.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << prepend( Text Box( "=== above ===" ) );

```

### Prev Sib

**Syntax:** obj << Prev Sib

**Description:** Returns the previous sibling of the display box.

**JMP Version Added:** 15

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
axisbox = rbiv[axis box( 2 )];
axisSibling = axisbox << Prev Sib();
Print( axisSibling << Class Name() );

```

### Print Window

**Syntax:** obj << Print Window

**Description:** Prints the window.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << Print Window;

```

### Reorder Columns

**Syntax:** obj << Reorder Columns( from column index,to column index )

**Description:** Reorders the column that positions from column index in the place of to column index.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Baltic.jmp" );
d = Distribution( Continuous Distribution( Column( :ls ) ) );
rpt = d << report;
tb = rpt[Table Box( 1 )];
Wait( 1 );
tb << Reorder Columns( 1, 3 );

```

### Reset Filter

**Syntax:** obj << Reset Filter

**Description:** Clears an existing "filter where" message and shows all the rows in the table.

**JMP Version Added:** 17

```js

Names Default To Here( 1 );
New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << set selectable rows( 1 );
tb << filter where( "Elevation (meters)"n < 4000 | Mountain == "K2" );
Wait( 2 );
tb << Reset Filter;

```

### Reset Style

**Syntax:** obj << Reset Style

**Description:** Resets the table style based on preference settings

```js

Names Default To Here( 1 );
New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Set Shade Cells( 1 );
tb << Reset Style;

```

### Reshow

**Syntax:** obj << Reshow

**Description:** Invalidate the displaybox and update the window with the new content.  See <<Inval and <<UpdateWindow messages if more control over timing of the update is required.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
color = "green"; /* initial color in a variable */
New Window( "Reshow example",
	Button Box( "red",
		color = "red";
		g << reshow/* tell the graph that something changed */;
	),
	Button Box( "blue",
		color = "blue";
		g << reshow/* tell the graph that something changed */;
	),
	g = Graph Box(/* the graph does NOT watch for the color variable to change
                     but will use the current value of color when it reshows */
		Fill Color( color );
		Oval( 10, 80, 70, 50, 1 );
	)
);

```

### Row Border Color

**Syntax:** obj << Row Border Color( color );

color = obj << Get Row Border Color

**JMP Version Added:** 19

```js

Names Default To Here( 1 );
New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Set Row Borders( 1 );
tb << Row Border Color( "Black" );
Show( tb << Get Row Border Color );

```

### Row Height Scale

**Syntax:** obj << Row Height Scale( number );

number = obj << Get Row Height Scale

**Description:** Scales the default height or the rows of a table. The default value is 1.

**JMP Version Added:** 19

```js

Names Default To Here( 1 );
New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Row Height Scale( 3 );
tb << Get Row Height Scale();

```

### Row Vertical Alignment

**Syntax:** obj << Row Vertical Alignment( "Top"|"Center"|"Baseline"|"Bottom" );

"Top"|"Center"|"Baseline"|"Bottom" = obj << Get Row Vertical Alignment

**Description:** Sets the vertical alignment of the text or numbers in the rows of a table

**JMP Version Added:** 19

```js

Names Default To Here( 1 );
New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Row Vertical Alignment( "Bottom" );
tb << Get Row Vertical Alignment();
tb << Row Height Scale( 3 );

```

### Save Capture

**Syntax:** obj << Save Capture( <"path">, <format>, <Add Sibling(n)> )

**Description:** Saves a screen capture of the display box at the specified path. If a path is not given, the Save As window appears.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save Capture( "$TEMP/jmp_example.png", "png" );

```

### Save HTML

**Syntax:** obj << Save HTML( <pathname>, <format> )

**Description:** Saves HTML source and folder of graphics in format specified.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save HTML( "$TEMP/jmp_example.html" );

```

### Save Interactive HTML

**Syntax:** obj << Save Interactive HTML( <pathname>, <Boolean> )

**Description:** Saves Interactive HTML with Data to a file. The Boolean argument represents the report being static.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save Interactive HTML( "$TEMP/jmp_example.html" );

```

### Save Journal

**Syntax:** obj << Save Journal( <pathname> )

**Description:** Saves journal source for the display box.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save Journal( "$TEMP/jmp_example.jrn" );

```

### Save MSWord

**Syntax:** obj << Save MSWord( <pathname>, <format> )

**Description:** Saves the display box as a Microsoft Word document. (Windows Only)

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save MSWord( "$TEMP/jmp_example.doc" );

```

### Save PDF

**Syntax:** obj << Save PDF( <pathname>, <Show Page Setup(0|1)>, <Portrait(0|1)> )

**Description:** Saves a PDF of the display box.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save PDF( "$TEMP/jmp_example.pdf" );

```

### Save Picture

**Syntax:** obj << Save Picture( <pathname>, <format>, <Scale(factor)>, <Type("Bitmap" | "Scalable")>, <View("Picture" | "Screen" | "Print"), <Appearance("Default" | "Current")>, <SubRect(Left(number), Top(number), Right(number), Bottom(number))> )

**Description:** Saves a picture of the display box. Supported formats are EMF(Windows), PICT(Macintosh), JPEG or JPG, GIF, or PNG. The optional Scale argument will render the image at a scaled resolution. Scaling requires that the display box be stretchable. The Type argument determines whether the result will be a scalable vector image or a bitmap. By default a scalable image is returned, which is suitable for saving to vector formats like PDF. The View option changes the behavior of some boxes. The default option of "Picture" draws the report as it would when exporting to an image format, with scrolled areas fully shown. View mode of "Screen" draws the report as seen on-screen, and "Print" draws the report as it does when printing, without any of the page setup features. The SubRect option will capture a portion of the resulting image rather than a full image. The Appearance option can change from the "Default" output colors to the "Current" colors as seen on-screen. The View, SubRect, and Appearance options are only supported for Type "Bitmap".

**Default**

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save Picture( "$TEMP/jmp_example.png", "png" );

```

**Scale**

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv[FrameBox( 1 )] << Set Stretch( "Window", "Window" );
rbiv << Save Picture( "$TEMP/jmp_example_scale.png", "png", Scale( 1.5 ) );
New Window( "scaled image", New Image( "$TEMP/jmp_example_scale.png" ) );

```

**View and Appearance**

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate(
	Y( :weight ),
	X( :height ),
	Fit Line( {Line Color( {212, 73, 88} )} ),
	Fit Polynomial( 3, {Line Color( {61, 174, 70} )} ),
	Kernel Smoother( 1, 1, 0.5, 0 )
);
rbiv = biv << report;
rbiv << Save Picture(
	"$TEMP/jmp_example_screen.png",
	"png",
	View( "Screen" ),
	Appearance( "Current" )
);
rbiv << Save Picture(
	"$TEMP/jmp_example_print.png",
	"png",
	View( "Print" ),
	Appearance( "Default" )
);
New Window( "Example",
	H List Box(
		New Image( "$TEMP/jmp_example_screen.png" ),
		New Image( "$TEMP/jmp_example_print.png" )
	)
);

```

### Save Presentation

**Syntax:** obj << Save Presentation( "filename.pptx", <Template("path\to\my_template.pptx")>, <Insert(Begin|End|#) | Replace(Begin|End|#) | Append>, <Outline Titles(None|Hide|TopLeft|TopRight|BottomLeft|BottomRight)>, <"EMF"|"PNG"|"JPG"|"Native"> )

**Description:** Saves the display box tables and graphs slides in a presentation. The presentation can be opened with Microsoft PowerPoint or other presentation software.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save Presentation( "$TEMP/jmp_example.pptx" );
Open( "$TEMP/jmp_example.pptx" );

```

### Save RTF

**Syntax:** obj << Save RTF( <pathname>, <format> )

**Description:** Saves RTF source with graphics in format specified.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save RTF( "$TEMP/jmp_example.rtf", "png" );

```

### Save Text

**Syntax:** obj << Save Text( <pathname>, <format> )

**Description:** Saves a file containing the text of the display box.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
win = New Window( "Example", a = Text Box( "Example Text" ) );
a << save text( "$TEMP/jmp_example.txt" );

```

### Save Window Report

**Syntax:** obj << Save Window Report( pathname, <embed data(0|1)> )

**Description:** Saves the current report window to a JMP report file (.jrp).

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
//This message can be sent to any display box object but will be applied to the report window
Open( "$SAMPLE_DATA/Big Class.jmp" );
d = distribution( Column( :height ) );
d << Save Window Report( "$DOCUMENTS/test.jrp", embed data( 1 ) );

```

### Scroll Window

**Syntax:** obj << Scroll Window( DisplayBox | <Relative(<v> | <h>,<v>)> | <Absolute(<v> | <h>,<v>) )

**Description:** Adjust the window scrollbar to bring the given DisplayBox into view, or scroll a relative number of pixels, or scroll to an absolute pixel location. In place of a number of pixels the keywords "Start" or "End" can be used.

**Absolute**

```js

Names Default To Here( 1 );

Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
fm = Fit Model(
	Y( :BP 8M, :BP 12M, :BP 6M, :BP 8W, :BP 12W, :BP 6W, :BP 8F, :BP 12F, :BP 6F ),
	Effects( :Subject, :Dose ),
	Personality( "Manova" ),
	Run
);
fm << setwindowsize( 600, 600 ); // shrink the window
fm << scroll window( Absolute( "End", "End" ) );
Wait( 1 );
fm << scroll window( Absolute( 0, 300 ) );
Wait( 1 );

```

**Box**

```js

Names Default To Here( 1 );

Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
fm = Fit Model(
	Y( :BP 8M, :BP 12M, :BP 6M, :BP 8W, :BP 12W, :BP 6W, :BP 8F, :BP 12F, :BP 6F ),
	Effects( :Subject, :Dose ),
	Personality( "Manova" ),
	Run
);
fm << setwindowsize( 600, 600 ); // shrink the window
For( i = 1, i <= 5, i++, // repeatedly, bring each frame box into view for 1/2 second
	fm << scroll window( Report( fm )[framebox( 2 )] );
	Wait( .5 );
	fm << scroll window( Report( fm )[framebox( 3 )] );
	Wait( .5 );
	fm << scroll window( Report( fm )[framebox( 1 )] );
	Wait( .5 );
);

```

**Relative**

```js

Names Default To Here( 1 );

Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
fm = Fit Model(
	Y( :BP 8M, :BP 12M, :BP 6M, :BP 8W, :BP 12W, :BP 6W, :BP 8F, :BP 12F, :BP 6F ),
	Effects( :Subject, :Dose ),
	Personality( "Manova" ),
	Run
);
fm << setwindowsize( 600, 600 ); // shrink the window
fm << scroll window( Relative( 300 ) );
Wait( 1 );
fm << scroll window( Relative( -50 ) );
Wait( 1 );
fm << scroll window( Relative( "Start" ) );
Wait( 1 );

```

### Select

**Syntax:** obj << Select

**Description:** Selects this object for use by Edit menu commands.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
New Window( "Example", ex = Button Box( "Press Me" ) );
ex << Select;

```

### Select Where

**Syntax:** obj << Select Where

**Description:** Selects rows in the table based on the values in that row.

**JMP Version Added:** 15

```js

Names Default To Here( 1 );
New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << set selectable rows( 1 );
tb << select where( "Elevation (meters)"n < 4000 | Mountain == "K2" );

```

### Set Base Data Font

**Syntax:** obj << Set Base Data Font( "Text"|"Heading"|"Title"|"Small"|"Mono"|"Formula Editor"|"Annotation"|"Axis"|"Marker"|"Axis Title"|"Graph Label"|"Legend"|"Graph Title"|"Caption"|"Data Table"|"Hover Label" )

**Description:** Sets the base font for text drawn by the box.

```js

Names Default To Here( 1 );
New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
Wait( 2 );
tb << Set Base Data Font( "Data" );

```

### Set Base Title Font

**Syntax:** obj << Set Base Title Font( "Text"|"Heading"|"Title"|"Small"|"Mono"|"Formula Editor"|"Annotation"|"Axis"|"Marker"|"Axis Title"|"Graph Label"|"Legend"|"Graph Title"|"Caption"|"Data Table"|"Hover Label" )

**Description:** Sets the base font for text drawn by the box.

```js

Names Default To Here( 1 );
New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
Wait( 2 );
tb << Set Base Title Font( "Title" );

```

### Set Cell Changed Function

**Syntax:** obj << Set Cell Changed Function( Function({thisBox, col box, row}, <script>;) )

**Description:** Sets a function that will be called whenever the user edits a cell in a column in the table

```js

Names Default To Here( 1 );
New Window( "Mountains",
	tb = Table Box(
		String Col Edit Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Edit Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Set Cell Changed Function(
	Function( {thisBox, col, row},
		Print(
			(col << get heading) || ": row:" || Char( row ) || " is now " ||
			Char( col << get( row ) )
		)
	)
);

```

### Set Click Sort

**Syntax:** obj << Set Click Sort( <state=0|1> )

**Description:** Allows the table so be sorted by single clicking on a column header

```js

Names Default To Here( 1 );
New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Set Click Sort( 1 );

```

### Set Column Borders

**Syntax:** obj << Set Column Borders( state=0|1 )

**Description:** Draw a line on each side of every column

```js

Names Default To Here( 1 );
New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Set Column Borders( 1 );

```

### Set Column Group Borders

**Syntax:** obj << Set Column Group Borders( state=0|1 )

```js

Names Default To Here( 1 );
New Window( "Mountains",
	tb = Table Box(
		Col Span Box(
			"Column Span",
			String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} )
		),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Set Column Group Borders( 1 );

```

### Set Content Size

**Syntax:** obj << Set Content Size( x,y )

**Description:** Sets the content size within the window.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
w = New Window( "Test",
	lb = List Box( {"a", "b", "c", "d"} ),
	Button Box( "Enable 2nd item",
		lb << enable item( 2, 1 );
		Show( lb << item enabled( 2 ) );
	),
	Button Box( "Disable 2nd item",
		lb << enable item( 2, 0 );
		Show( lb << item enabled( 2 ) );
	)
);
Wait( 2 );
w << Set Content Size( 400, 300 );

```

### Set Context Menu Item State

**Syntax:** obj << Set Context Menu Item State( index, 0|1|-1 )

**Description:** Sets the context menu item at index to be normal (0), checked (1), or disabled (-1)

```js

Names Default To Here( 1 );
New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Set Context Menu Script( {"A", Print( "A" ), "B", Print( "B" ), "C", Print( "C" )} );
tb << Set Context Menu Item State( 2, -1 );

```

### Set Context Menu Script

**Syntax:** obj << Set Context Menu Script( {"string",script,"string",script, ...} )

**Description:** Adds a context menu with the specified options and scripts to the box.

```js

Names Default To Here( 1 );
New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Set Context Menu Script(
	{"Beep", Beep(), "Beep Twice", Beep() ; Wait( 1.0 ) ; Beep() ; ,
	"Get Context Menu Script", Print( tb << Get Context Menu Script )}
);

```

### Set Context Menu Submenu

**Syntax:** obj << Set Context Menu Submenu( index, submenu count )

**Description:** Turns the "index" menu item into a submenu with "submenu count" menu items

```js

Names Default To Here( 1 );
New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Set Context Menu Script(
	{"A", Print( "A" ), "B", Print( "B" ), "B1", Print( "B1" ), "B2", Print( "B2" ), "B3",
	Print( "B3" ), "C", Print( "C" )}
);
tb << Set Context Menu Submenu( 2, 3 );

```

### Set Data Font

**Syntax:** obj << Set Data Font( fontName, <size>, <"bold italic underline strikeout">, <angle> )

**Example 1**

```js

Names Default To Here( 1 );
New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Set Data Font( "Arial Black" );

```

**Example 2**

```js

Names Default To Here( 1 );
New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Set Data Font( "Arial Black", 12, "Italic Underline" );

```

### Set Data Font Name

**Syntax:** obj << Set Data Font Name( fontname )

**Description:** Sets the font for text strings.

```js

Names Default To Here( 1 );
New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Set Data Font Name( "Arial Black" );

```

### Set Data Font Scale

**Syntax:** obj << Set Data Font Scale( f )

**Description:** Sets a scale factor for the current font. The scale factor will be applied to the size that is determined from the base font and point size.

```js

Names Default To Here( 1 );
New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
Wait( 2 );
tb << Set Data Font Scale( 2.0 );

```

### Set Data Font Size

**Syntax:** obj << Set Data Font Size( n )

**Description:** Sets the font size in points for text strings.

```js

Names Default To Here( 1 );
New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Set Data Font Size( 14 );

```

### Set Data Font Style

**Syntax:** obj << Set Data Font Style( style )

**Description:** Sets the font style for text strings. To set more than one style at once, place them in the same string, separated by spaces (see Example 2 below).

**Example 1**

```js

Names Default To Here( 1 );
New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Set Data Font Style( "Italic" );

```

**Example 2**

```js

Names Default To Here( 1 );
New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Set Data Font Style( "Italic Bold Underline" );

```

### Set Dirty

**Syntax:** obj << Set Dirty

**Description:** Sets the document&apos;s modified status. 0 will not prompt for saving; 1 will prompt.

**JMP Version Added:** 14

```js

Names Default To Here( 1 );

ww = New Window( "Test", <<Script, "Open(\!"$SAMPLE_DATA\Big Class.jmp\!");" );
Show( ww << Is Dirty );
ww << Set Dirty( 0 );
Show( ww << Is Dirty );

```

### Set Heading Column Borders

**Syntax:** obj << Set Heading Column Borders( state=0|1 )

**Description:** Column borders in headers

```js

Names Default To Here( 1 );
New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Set Heading Column Borders( 1 );

```

### Set Height

**Syntax:** obj << Set Height( width )

**Description:** Sets the height of the display box.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
fb = r[framebox( 1 )];
fb << Set Height( 150 );

```

### Set Locked Columns

**Syntax:** obj << Set Locked Columns( number )

**Description:** Locks the first n columns so that cannot be dragged with the hand cursor or have any columns dropped before them.

```js

Names Default To Here( 1 );
New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << set locked columns( 1 );

```

### Set Main Window

**Syntax:** obj << Set Main Window

**Description:** Set the window to be the main window in JMP and sets the prior main window to be a normal window

```js

Names Default To Here( 1 );
//This message applies to all display box objects
w = New Window( "Main Window", Text Box( "Main JMP Window" ) );
w << Set Main Window;

```

### Set Max Size

**Syntax:** obj << Set Max Size( width,height )

**Description:** Sets the maximum size of this display box for purposes of auto-stretching.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/big class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
fb = r[framebox( 1 )];
fb << Set Max Size( 500, 500 );
fb << Get Max Size;

```

### Set Min Size

**Syntax:** obj << Set Min Size( width,height )

**Description:** Sets the minimum size of this display box for purposes of auto-stretching.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/big class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
fb = r[framebox( 1 )];
fb << Set Min Size( 30, 30 );
fb << Get Min Size;

```

### Set Page Setup

**Syntax:** obj << Set Page Setup( <margins(left, top, right, bottom)>, <scale(s)>, <portrait(0|1)>, <paper size(p)>, <Table of Contents(always, never, default)>  )

**Description:** Sets the page setup information that is used during printing or saving as pdf. A Table of Contents can optionally be generated from Outline Boxes.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
w = New Window( "Window", Outline Box( "TOC", Text Box( "Page Setup Test" ) ) );
w << Set page setup(
	margins( 1, 1, 1, 1 ),
	scale( 1 ),
	portrait( 1 ),
	paper size( "Letter" ),
	Table of Contents( "always" )
);
w << Save pdf( "$DOCUMENTS\test.pdf" );

```

### Set Print Footers

**Syntax:** obj << Set Print Footers( left footer, center footer, right header )

**Description:** Sets the left, center, and right footers for printed output

```js

Names Default To Here( 1 );
//This message applies to all display box objects
w = New Window( "Window", Text Box( "Footer Test" ) );
w << Set Print Footers(
	"Today is: &d;"/*left*/, "&wt;"/*center*/,
	"Page &pn; of &pc;"/*right*/
);
w << Print Window;

```

### Set Print Headers

**Syntax:** obj << Set Print Headers( left header, center header, right header )

**Description:** Sets the left, center, and right headers for printed output

```js

Names Default To Here( 1 );
//This message applies to all display box objects
w = New Window( "Window", Text Box( "Header Test" ) );
w << Set Print Headers(
	"Today is: &d;"/*left*/, "&wt;"/*center*/,
	"Page &pn; of &pc;"/*right*/
);
w << Print Window;

```

### Set Property

**Syntax:** obj << Set Property( "property", value )

**Description:** Sets the value for the named property for the display box.

```js

Names Default To Here( 1 );
New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Set Property( "Enabled", 0 );

```

### Set Report Title

**Syntax:** obj << Set Report Title( "string" )

**Description:** Changes the report title.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Set Report Title( "New Title" );

```

### Set Row Borders

**Syntax:** obj << Set Row Borders( state=0|1 )

**Description:** Draw a line above and below each row

```js

Names Default To Here( 1 );
New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Set Row Borders( 1 );

```

### Set Row Change Function

**Syntax:** obj << Set Row Change Function( Function( {thisBox}, <script> ) )

**Description:** Sets the expression that is evaluated when a row is selected.

```js

Names Default To Here( 1 );
New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Set Selectable Rows();
tb << set row change function(
	Function( {thisBox},
		Print( thisBox << get selected rows )
	)
);

```

### Set Scrollable

**Syntax:** obj << Set Scrollable( rows, columns )

**Description:** Turns scrolling on or off for this TableBox.

```js

Names Default To Here( 1 );
New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Set Scrollable( 3, 0 );

```

### Set Selectable Rows

**Syntax:** obj << Set Selectable Rows( state=0|1 )

**Description:** Makes the rows of this TableBox selectable or not.

```js

Names Default To Here( 1 );
New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Set Selectable Rows();

```

### Set Selected Row Color

**Syntax:** obj << Set Selected Row Color( color )

**Description:** Sets the background color for selected rows, only valid if "Set Selectable Rows" is set

```js

Names Default To Here( 1 );
New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Set Selectable Rows();
tb << Set Selected Rows( [1, 4] );
tb << Set Selected Row Color( "Red" );

```

### Set Selected Rows

**Syntax:** obj << Set Selected Rows( row matrix )

**Description:** Selects the given rows and deselects other rows.

```js

Names Default To Here( 1 );
New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Set Selected Rows( [1, 4] );

```

### Set Shade Alternate Rows

**Syntax:** obj << Set Shade Alternate Rows( state=0|1 )

**Description:** Shade the background of every other row in the table

```js

Names Default To Here( 1 );
New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Set Shade Alternate Rows( 1 );

```

### Set Shade Cells

**Syntax:** obj << Set Shade Cells( state=0|1 )

**Description:** Shade the background of every cell in the table

```js

Names Default To Here( 1 );
New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Set Shade Cells( 1 );

```

### Set Shade Headings

**Syntax:** obj << Set Shade Headings( state=0|1 )

**Description:** Shade the background in column headings

```js

Names Default To Here( 1 );
New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Set Shade Headings( 1 );

```

### Set Stretch

**Syntax:** obj << Set Stretch( x,y )

**Description:** Sets the horizontal and vertical stretching behavior of the box. Boxes that stretch with Window will resize as the window or splitter size changes. Boxes that stretch to Fill will stretch to fill available space in their container. Boxes with stretching turned Off generally will not stretch. Most boxes default to Neutral, which means that they will determine their behavior based on their child boxes.

**JMP Version Added:** 16

**Stretch to Fill**

```js

Names Default To Here( 1 );
//This message applies to all display box objects
New Window( "Stretch",
	V List Box(
		H List Box( Text Edit Box( "String1" ), Text Edit Box( "String2" ) ),
		Spacer Box( Size( 20, 20 ), Color( "Light Red" ), <<Set Stretch( "Fill", "Off" ) )
	)
);

```

**Stretch with Window**

```js

Names Default To Here( 1 );
//This message applies to all display box objects
New Window( "Example",
	H List Box(
		tv = Text Box( "V+V", <<rotate text( left ) ),
		V List Box(
			Text Box( "resize the containing window" ),
			th = Text Box( "H+H" ),
			ts = Spacer Box( <<Size( 10, 30 ), <<Color( "blue" ) )
		)
	)
);
tv << Vertical Alignment( "Center" );
th << Horizontal Alignment( "Center" );
th << Set Stretch( "Window", "Off" );
ts << Set Min Size( 5, 20 );
ts << Set Max Size( 100000, 100 );
ts << Set Stretch( "Window", "Window" );

```

### Set Summary Behavior

**Syntax:** obj << Set Summary Behavior( "Default"|"Visible"|"Collapse" )

**Description:** Sets the behavior of the box when a report is viewed in Summary mode.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
d << Report View( "Summary" );
r = d << Report;
tb = r[Table Box( 1 )];
tb << Set Summary Behavior( "Visible" );

```

### Set Title Font

**Syntax:** obj << Set Title Font( fontName, <size>, <"bold italic underline strikeout">, <angle> )

**Example 1**

```js

Names Default To Here( 1 );
New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Set Title Font( "Arial Black" );

```

**Example 2**

```js

Names Default To Here( 1 );
New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Set Title Font( "Arial Black", 12, "Italic Underline" );

```

### Set Title Font Name

**Syntax:** obj << Set Title Font Name( fontname )

**Description:** Sets the font for text strings.

```js

Names Default To Here( 1 );
New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Set Title Font Name( "Arial Black" );

```

### Set Title Font Scale

**Syntax:** obj << Set Title Font Scale( f )

**Description:** Sets a scale factor for the current font. The scale factor will be applied to the size that is determined from the base font and point size.

```js

Names Default To Here( 1 );
New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
Wait( 2 );
tb << Set Title Font Scale( 2.0 );

```

### Set Title Font Size

**Syntax:** obj << Set Title Font Size( n )

**Description:** Sets the font size in points for text strings.

```js

Names Default To Here( 1 );
New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Set Title Font Size( 14 );

```

### Set Title Font Style

**Syntax:** obj << Set Title Font Style( style )

**Description:** Sets the font style for text strings. To set more than one style at once, place them in the same string, separated by spaces (see Example 2 below).

**Example 1**

```js

Names Default To Here( 1 );
New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Set Title Font Style( "Italic" );

```

**Example 2**

```js

Names Default To Here( 1 );
New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Set Title Font Style( "Italic Bold Underline" );

```

### Set Underline Headings

**Syntax:** obj << Set Underline Headings( state=0|1 )

**Description:** Draw a line underneath the column headings

```js

Names Default To Here( 1 );
New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Set Underline Headings( 1 );

```

### Set Width

**Syntax:** obj << Set Width( width )

**Description:** Sets the width of the display box.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/big class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
fb = r[framebox( 1 )];
fb << Set Width( 400 );

```

### Set Window Icon

**Syntax:** obj << Set Window Icon( icon name )

**Description:** Sets the window icon.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
w = New Window( "Example", ex = Button Box( "New Analysis" ) );
w << Set Window Icon( "Scatter3D" );

```

### Set Window Size

**Syntax:** obj << Set Window Size( x,y )

**Description:** Sets the size of the window.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << Set Window Size( 800, 1200 );

```

### Set Window Title

**Syntax:** obj << Set Window Title( "string" )

**Description:** Changes the window title.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Set Window Title( "New Title" );

```

### Show Properties

**Syntax:** obj << Show Properties

**Description:** Displays a property editor for display boxes

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Show Properties();

```

### Show Tree Structure

**Syntax:** obj << Show Tree Structure

**Description:** Displays a hierarchical tree structure of the display box and its related nodes.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Show Tree Structure();

```

### Show Window

**Syntax:** obj << Show Window( state=0|1 )

**Description:** Shows or hides the window. This is useful for hiding windows temporarily. On by default.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 1 );
w << Show Window( 0 );
Wait( 2 );
w << Show Window( 1 );

```

### Sib

**Syntax:** obj << Sib

**Description:** Returns the sibling of the display box.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
axisbox = rbiv[axis box( 1 )];
axisSibling = axisbox << sib();
Print( axisSibling << Class Name() );

```

### Sib Append

**Syntax:** obj << Sib Append( Display box, Horizontal|Vertical )

**Description:** Adds a display box immediately after this display box.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/big class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
fb = r()[framebox( 1 )];
fb << sib append(
	Text Box( "============ after ==============", Rotate Text( "Right" ) ),
	"Horizontal"
);
fb << sib append( Text Box( "=== below ===" ), "Vertical" );

```

### Sib Prepend

**Syntax:** obj << Sib Prepend( Display box, Horizontal|Vertical )

**Description:** Adds a display box immediately before this display box.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/big class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
fb = r[framebox( 1 )];
fb << sib prepend(
	Text Box( "    ============ before ==============", Rotate Text( "Right" ) ),
	"Horizontal"
);
fb << sib prepend( Text Box( "=== above ===" ), "Vertical" );

```

### Simulate

**Syntax:** obj << Simulate( nsample, Random Seed(number), Out(column), In(column), Update(<columns>) )

**Description:** Performs a simulation by switching out a column with one that has a simulation formula.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Fit Model(
	Y( :weight ),
	Effects( :age, :sex, :height ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Run( Fit( Estimation Method( Lasso( Adaptive ) ), Validation Method( AICc ) ) )
);
obj << (fit[1] << Save Simulation Formula);
rpt = Report( obj );
dtlst = rpt["Parameter Estimates for Original Predictors"][
Number Col Box( "Prob > ChiSquare" )] << Simulate(
	10,
	Out( :weight ),
	In( :weight Simulation Formula )
);
dtlst[2] << Distribution( Y( :height ) );

```

### Size Window

**Syntax:** obj << Size Window( x,y )

**Description:** Sets the size of the window.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << Size Window( 500, 500 );

```

### Sort By Column

**Syntax:** obj << Sort By Column( <column index or title>, <ascending=0|1> )

**Description:** Sorts all of the rows of the table based on the values in the given column. Default sort order is descending.

```js

Names Default To Here( 1 );
New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Sort By Column( 1 );
Wait( 2 );
tb << Sort By Column( "Elevation (meters)" );

```

### Table Box

**Syntax:** y = Table Box( displayBox, ... )

**Description:** Returns a display box for a table consisting of one or more columns.

**Example 1**

```js

Names Default To Here( 1 );
New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);

```

**Example 2**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Baltic.jmp" );
d = Distribution( Continuous Distribution( Column( :ls ) ) );
rpt = d << report;
tb = rpt[Table Box( 1 )];
tb << Select;

```

### Text Color

**Syntax:** obj << Text Color( color );

color = obj << Get Text Color

**Description:** Text will be drawn using the text color if it has been set. If the property has not been set, the box will inherit the text color of the containing box.

**JMP Version Added:** 15

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Show( tb << Get Text Color );
Wait( 2 );
tb << Text Color( "Red" );

```

### Top Parent

**Syntax:** obj << Top Parent

**Description:** Returns the root parent of this display box.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rootParent = rbiv << Top Parent();
Print( rootParent << Class Name() );

```

### UI Only

**Syntax:** obj << UI Only( state=0|1 );

state = obj << Get UI Only

### Update Window

**Syntax:** obj << Update Window

**Description:** Update the window holding the displaybox if there are invalidated regions.  The <<Inval message creates invalidated regions.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
color = "green"; /* initial color in a variable */
New Window( "UpdateWindow example",
	Button Box( "red",
		color = "red";
        // try commenting out each of the 4 lines that follow, run the script,
		// click the buttons, and resize the windows (for example) to force a
		// redraw.  All 4 lines are important, though the last two may be
		// slightly different on Windows and Mac OSs.
		g1 << inval; /* tell the oval to redraw */
		g2 << inval; /* tell the rectangle to redraw */
		g1 << updateWindow; /* tell the oval window to update immediately */
		g2 << updateWindow; /* tell the rect window to update immediately */
		// this is a busy-wait to help demonstrate the various behaviors...
		x = Tick Seconds();
		While( Tick Seconds() - x < .5, 0 /* delay without wait(.5) */ );
	),
	Button Box( "blue",
		color = "blue";
		g1 << inval; /* same comments */
		g2 << inval;
		g1 << updateWindow;
		g2 << updateWindow;
		x = Tick Seconds();
		While( Tick Seconds() - x < .5, 0 );
	)
);
New Window( "oval",
	g1 = Graph Box(/* the graph does NOT watch for the color variable to change
                      but will use the current value of color when it reshows */
		Fill Color( color );
		Oval( 10, 80, 70, 50, 1 );
	)
);
New Window( "rect",
	g2 = Graph Box(
		Fill Color( color );
		Rect( 10, 80, 70, 50, 1 );
	)
);

```

### User Resizable

**Syntax:** obj << User Resizable;

obj << Get User Resizable

**Description:** If the box is user resizable, the cursor will change near the bottom and right edges to allow drag-and-drop resizing.

```js

Names Default To Here( 1 );
root1 = Tree Node( "Parent 1" );
root2 = Tree Node( "Parent 2" );
c1 = Tree Node( "Child 1" );
c2 = Tree Node( "Child 2" );
c3 = Tree Node( "Child 3" );
c4 = Tree Node( "Child 4" );
root1 << Append( c1 );
root1 << Append( c2 );
root2 << Append( c3 );
root2 << Append( c4 );
New Window( "resize",
	H Splitter Box(
		Size( 600, 200 ),
		tree = Tree Box( {root1, root2} ),
		scroll = Scroll Box(
			Size( 300, 200 ),
			Picture Box( Open( "$SAMPLE_IMAGES/tile.jpg", jpg ) )
		)
	)
);
tree << Set Stretch( "Window", "Window" ) << Set Max Size( 10000, 10000 );
scroll << Set Stretch( "Window", "Window" ) << Set Max Size( 10000, 10000 );
Wait( 2 );
tree << User Resizable( {0, 0} );
scroll << User Resizable( {0, 0} );

```

### Vertical Alignment

**Syntax:** obj << Vertical Alignment( "Default"|"Top"|"Center"|"Bottom" );

"Default"|"Top"|"Center"|"Bottom" = obj << Get Vertical Alignment

**Description:** Vertical alignment controls the positioning of the box within a container if the box does not fill the entire space.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
lb = r[List Box( 6 )];
lb << Set Horizontal( 1 );
lb = r[List Box( 7 )];
lb << Border( 1 );
Wait( 2 );
lb << Vertical Alignment( "Bottom" );

```

### Visibility

**Syntax:** obj << Visibility( "Visible"|"Hidden"|"Collapse" );

"Visible"|"Hidden"|"Collapse" = obj << Get Visibility

**Description:** Visibility determines whether a box is shown and whether it takes up space. The default value of "Visible" means that the object will be shown.  A "Hidden" box is not shown but still takes up space, while a "Collapsed" box takes up no space in the layout.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Show( tb << Get Visibility );
Wait( 2 );
tb << Visibility( "Collapse" );
Show( tb << Get Visibility );

```

### Window Class Name

**Syntax:** obj << Window Class Name

**Description:** Returns the name of the window class for the display box.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
Show( biv << Window Class Name() );
Show( rbiv << Window Class Name() );

```

### XPath

**Syntax:** obj << XPath( XPath expression, <English(0|1)>, <NoData(0|1)> )

**Description:** Applies an XPath expression to the XML representation of the display tree and returns the results. By default, strings are returned in the local language, and the XML includes data values within some boxes. Use the English option to return English strings where available. Use the NoData option to omit the data values within boxes, which is useful for performance when your query is based only on box attributes.

**Attributes**

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Run Script( "Bivariate" );
(Report( biv ) << xpath( "//OutlineBox[@isOpen='false']" )) << Close( 0 );

```

**Box type**

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Run Script( "Bivariate" );
(Report( biv ) << xpath( "//TextEditBox" )) << Text Color( "Green" );

```

**Child box**

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Run Script( "Bivariate" );
(Report( biv ) << xpath( "//OutlineBox[text()='Summary of Fit']/TableBox" )) <<
Make Into Data Table;

```

**Data**

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Run Script( "Bivariate" );
(Report( biv ) << xpath( "//NumberColBoxItem[text()='40']/parent::*" )) <<
Text Color( "Green" );

```

**Display Seg**

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Run Script( "Bivariate" );
(Report( biv ) << xpath( "//MarkerSeg" )) << Set Marker( "Square" );

```

**Text**

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Run Script( "Bivariate" );
(Report( biv ) << xpath( "//OutlineBox[text()='Parameter Estimates']" )) << Close;

```

### Zoom Window

**Syntax:** obj << Zoom Window

**Description:** Resizes the window to be large enough to show all of its contents.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << Set Window Size( 80, 120 );
Wait( 2 );
w << Zoom Window;

```

