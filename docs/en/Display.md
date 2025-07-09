# Display



### Alignment Cell Box

**Syntax:** y = Alignment Cell Box( row, col, nRow, nCol, <Sides(left+2*top+4*right+8*bottom=15)> <RowSpan(nRow matrix)> <ColSpan(nCol matrix)>, matrix or list of strings )

**Description:** Returns a reference to a display box that contains the row (or column) contents that are contained inside of an Alignment Grid Box.

**JMP Version Added:** 19

```js

Names Default To Here( 1 );

New Window( "Crosstab",
	Alignment Grid Box(
		Alignment Cell Box( 0, 1, 1, 1, ColSpan( [3] ), {"sex"} ),
		Alignment Cell Box( 1, 1, 1, 3, {"F", "M", "Total"} ),
		Alignment Cell Box( 3, 0, 1, 1, Sides( 0 ), ColSpan( [4] ), {"age"} ),
		Alignment Cell Box( 4, 0, 6, 1, {"  12", "  13", "  14", "  15", "  16", "  17"} ),
		Alignment Cell Box(
			4,
			1,
			6,
			3,
			{"5 (28%)", "3 (14%)", "8 (20%)", "3 (17%)", "4 (18%)", "7 (18%)", "5 (28%)",
			"7 (32%)", "12 (30%)", "2 (11%)", "5 (23%)", "7 (18%)", "2 (11%)", "1 (5%)",
			"3 (8%)", "1 (6%)", "2 (9%)", "3 (8%)"}
		)
	)
);

```

### Alignment Grid Box

**Syntax:** y = Alignment Grid Box( alignment cell boxes )

**Description:** Returns a reference to a display box that can contain alignment cell boxes.

**JMP Version Added:** 19

```js

Names Default To Here( 1 );

New Window( "Crosstab",
	Alignment Grid Box(
		Alignment Cell Box( 0, 1, 1, 1, ColSpan( [3] ), {"sex"} ),
		Alignment Cell Box( 1, 1, 1, 3, {"F", "M", "Total"} ),
		Alignment Cell Box( 3, 0, 1, 1, Sides( 0 ), ColSpan( [4] ), {"age"} ),
		Alignment Cell Box( 4, 0, 6, 1, {"  12", "  13", "  14", "  15", "  16", "  17"} ),
		Alignment Cell Box(
			4,
			1,
			6,
			3,
			{"5 (28%)", "3 (14%)", "8 (20%)", "3 (17%)", "4 (18%)", "7 (18%)", "5 (28%)",
			"7 (32%)", "12 (30%)", "2 (11%)", "5 (23%)", "7 (18%)", "2 (11%)", "1 (5%)",
			"3 (8%)", "1 (6%)", "2 (9%)", "3 (8%)"}
		)
	)
);

```

### Alignment Multi Box

**Syntax:** y = Alignment Multi Box( row, col, nRow, nCol, nElements, list-of-nElements-matrices or empty values, list-of-nElements-lists of strings or empty values )

**Description:** Returns a reference to a display box that contains multiple elements inside each cell that is contained inside of an Alignment Grid Box.

**JMP Version Added:** 19

```js

Names Default To Here( 1 );

New Window( "Alignment MultiBox",
	Border Box( Top( 15 ), Left( 15 ), Right( 15 ), Bottom( 15 ),
		Alignment Grid Box(
			Alignment Multi Box( 0, 1, 1, 1, 2, {}, {{"Freq"}, {"Share"}} ),
			Alignment Cell Box( 0, 2, 1, 1, ColSpan( [2] ), {"sex"} ),
			Alignment Cell Box( 1, 2, 1, 2, ColSpan( [1, 1] ), {"F", "M"} ),
			Alignment Cell Box( 2, 0, 1, 1, RowSpan( [7] ), {"age"} ),
			Alignment Cell Box(
				2,
				1,
				7,
				1,
				{"12", "13", "14", "15", "16", "17", "Total Responses"}
			),
			Alignment Multi Box(
				2,
				2,
				6,
				2,
				2,
				{[5 3, 5 2, 2 1, 3 4, 7 5, 1 2], [0.277 0.167, 0.278 0.111, 0.111 0.055,
				0.136 0.181, 0.318 0.227, 0.045 0.090]},
				{Empty(), Empty()}
			),
			Alignment Cell Box( 8, 2, 1, 2, [18 22] )
		)
	)
);

```

### Alpha Shape

**Syntax:** ashape = Alpha Shape(Triangulation)

**Description:** Returns the alpha shape for the given triangulation.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = Alpha Shape( triang );

```

### Border Box

**Syntax:** y = Border Box( <Left( pix )>, <Right( pix )>, <Top( pix )>, <Bottom( pix )>, <Sides( 0 )>, displayBoxArg )

**Description:** Returns a display box to add space around the argument display box.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Lineup Box( N Col( 1 ), spacing( 10 ),
		Text Box( "Quadratic Formula" ),
		Border Box( Left( 10 ), Right( 10 ), bottom( 10 ), top( 10 ), sides( 15 ),
			Expr As Picture( Expr( (-b + Sqrt( b ^ 2 - 4 * a * c )) / (2 * a) ) )
		)
	)
);

```

### Box Plot Seg

**Syntax:** b = Box Plot Seg(<data>, <frequency>, <weight>, <vertical=0|1>)

**Description:** Returns a display seg representing a box plot based on the passed in x and y values.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Box Plot Seg Example",
	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 5 ), Box Plot Seg( [1, 2, 3, 4] ) )
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));

```

### Busy Light

**Syntax:** y = Busy Light( < <<Automatic(0|1)>, <Size(x, y)>, < <<Disable> )

**Description:** Creates a rotating image to indicate a busy process.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example", Busy Light( <<automatic ) );

```

### Button Box

**Syntax:** y = Button Box( title, script )

**Description:** Returns a display box to show a titled button. The script argument is run when the button is clicked.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example", Button Box( "Press Me", Print( "Pressed." ) ) );

```

### Calendar Box

**Syntax:** y = Calendar Box()

**Description:** Returns a display box containing a calendar control. The calendar supports single-selection of a date and optional time.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Calendar Box Example", Calendar Box() );

```

### Check Box

**Syntax:** y = Check Box( {item, ...}, <script> )

**Description:** Returns a display box to show one or more check boxes.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example", cb = Check Box( {"Good"}, Show( cb << Get() ) ) );

```

### Clear Global Window Handler

**Syntax:** Clear Global Window Handler()

**Description:** Clears a window handler previously set by Set Global Window Handler.

**JMP Version Added:** 17

```js

Names Default To Here( 1 );
Set Global Window Handler(
	Function( {window},
		Print( window << get window title() );
		window << close window();
	)
);
New Window( "My Window" );
Clear Global Window Handler();

```

### Col Box

**Syntax:** y = Col Box( title, boxes )

**Description:** Returns a column box made up of the given display boxes.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
dt = New Window( "Example",
	exx = 1;
	exy = 4;
	exz = 8;
	Table Box(
		String Col Box( "strings", {"x", "y", "z"} ),
		Col Box(
			"boxes",
			Slider Box( 0, 10, exx, Show( exx ) ),
			Slider Box( 0, 10, exy, Show( exy ) ),
			Slider Box( 0, 10, exz, Show( exz ) )
		)
	);
);

```

### Col List Box

**Syntax:** y = Col List Box( <Data Table( name )>, <all>|<character|numeric>, <width( pix )>, <grouped>, <maxSelected( n )>, <nlines( n )>, <MaxItems( n )>, <MinItems( n )>, <onChange( expr )>, < <<Modeling Type({"Any","Continuous","Nominal","Ordinal","Multiple Response","Unstructured Text","Vector","None","Row State"}) >, < << Set Data Type(Any|Numeric|Character)>, <script> )

**Description:** Returns a display box to show list box to select data table columns. Use the <<Modeling Type message to allow specialty modeling types or to restrict the types allowed. The default value of "Any" will allow any column with a classic modeling type ("Continuous", "Nominal", "Ordinal").

**JMP Version Added:** Before version 14

**Example 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Col List Box Example 1",
	Col List Box( all, width( 250 ), maxSelected( 1 ) )
);

```

**Example 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Col List Box Example 2",
	Col List Box( all, <<Set Data Type( "numeric" ), width( 250 ), maxSelected( 1 ) )
);

```

**Example 3**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Col List Box Example 3",
	H List Box(
		ll1 = Col List Box( all ),
		Button Box( "Add", ll2 << append( ll1 << get selected ) ),
		ll2 = Col List Box( "numeric", MaxItems( 1 ), nlines( 1 ) ),
		Button Box( "Remove", ll2 << remove selected )
	)
);

```

### Col Span Box

**Syntax:** y = Col Span Box( title, children )

**Description:** Returns a column that has a header that spans child columns

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "test",
	Table Box(
		Col Span Box(
			"Col Span",
			String Col Box( "col 1", {"A", "B", "C"} ),
			Number Col Box( "col2", {1, 2, 3} )
		)
	)
);

```

### Column Dialog

**Syntax:** y = Column Dialog( <var = ColList("Label", <Min Col(min)>, <Max Col(max)>, <Width(w)>, <Data Type("Numeric"|"Character"|"Any")>, <Modeling Type({<"Continuous">, <"Nominal">, <"Ordinal">, <"None">, <"Multiple Response">, <"Unstructured Text">, <"Vector">})> )>, <var=EditText("string")>, <var=EditNumber(num)>, <var=Check Box( "Text", 0|1)>, <var=RadioButtons( "a", "b" )>, <var=Combo Box("choice1", ...)>, <HList(box, ...)>, <VList(box, ...)>, <LineUp(ncol, box, ...)>, <Text Box("string")>, <Window Title("title")>, <Window Icon("icon string")>, <Dialog Description("description")>, <Recall(script)>, <Help Script(script)>)

**Description:** Prompts the user with a modal window with fields to select columns of a data table. The specification can include several types of input boxes as well as container boxes to organize the window.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
Column Dialog(
	ex y = ColList( "Y", Min Col( 1 ), Max Col( 2 ), Data Type( "Numeric" ) ),
	ex x = ColList( "X",
		Max Col( 1 ),
		Modeling Type( {"Continuous", "Multiple Response"} )
	),
	Line Up( 2,
		Text Box( "Alpha" ), ex = EditNumber( .05 ),
		Text Box( "Beta" ), ey = EditText( "xyz" )
	),
	HList( cb = Check Box( "check", 1 ) ),
	HList( combo = Combo Box( "option1", "option2" ) ),
	HList( rb = RadioButtons( "a", "b" ) ),
	Window Title( "Custom Launch Dialog" ),
	Window Icon( "RowState" ), //icon string can be a full path file name of an image file.
	Dialog Description( "The dialog before a groundbreaking discovery!" ),
	Recall Script(
		Function( {dlgBox},
			dlgBox[list box box( 2 )] << remove all;
			dlgBox[list box box( 1 )] << clear selection;
			dlgBox[list box box( 1 )] << set selected( 3 );
			dlgBox[Button Box( 2 )] << click;
		)
	),
	Help Script( Web( "http://www.jmp.com/" ) )
);

```

### Combo Box

**Syntax:** y = Combo Box( {item <( tipstr )>, ...}, <script> )

**Description:** Returns a display box to show a combo box with a popup menu. Each item in the combo box can have an optional tooltip that is specified as a string inside of parentheses following the item text string.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	cb = Combo Box( {"single", "double", "triple"("tool tip")}, Show( cb << Get() ) )
);

```

### Context Box

**Syntax:** y = Context Box( displayBox, ... )

**Description:** Returns a display box that establishes a scoped evaluation context. Allows different parts of a display window to be executed independently of each other.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Context Box(
		Outline Box( "Picker",
			V List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) )
		)
	)
);

```

### Contour Seg

**Syntax:** me = Contour Seg( Triangulation, [ levels ], < zColor([colors], <Cycle Colors|Interpolate Colors>) >, < Transparency([] | t) >

**Description:** Returns a display seg representing contours of a Triangulation.  Optional colors can be specified for each level as a matrix or list.  The transparency can be specified as a number or matrix.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
tri = Triangulation( X( :X, :Y ), Y( :POP ) );
{xx, yy} = tri << Get Points();
New Window( "Contour Seg Example",
	g = Graph Box(
		X Scale( Min( xx ) - .1, Max( xx ) + .1 ),
		Y Scale( Min( yy ) - .1, Max( yy ) + .1 ),
		Contour Seg(
			tri,
			[0, 400, 1000, 2000, 9000],
			zColor( 5 + [64 32 0 16 48] ),
			Transparency( [1, 1, 1, 1, 1] )
		)
	)
);

```

### Current Report

**Syntax:** y = Current Report( <Project(title|index|box|window)> )

**Description:** Returns a display box reference to the current report in the current project (or no project when not running the script in a project).



To specify a project, use the optional Project() argument with a title, index, display box, or window object. Use Project(0) to specify no project when running the script in a project.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Current Report();

```

### Current Window

**Syntax:** y = Current Window( <Project(title|index|box|window)> )

**Description:** Returns a reference to the current window in the current project (or no project when not running the script in a project).



To specify a project, use the optional Project() argument with a title, index, display box, or window object. Use Project(0) to specify no project when running the script in a project.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Outline Box( "Example Outline",
		Text Box( "Example Text" ),
		Button Box( "Close", Current Window() << Close Window )
	)
);

```

### Data Filter Context Box

**Syntax:** y = Data Filter Context Box( displayBox )

**Description:** Returns a display box that defines the extent of the local data filters contained in a display tree. Data filters and Data Filter Context Boxes can be arranged in a hierarchy and will be shared among platforms or boxes contained within the Data Filter Context Boxes.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Shared Local Filter",
	Data Filter Context Box(
		H List Box(
			dt << Data Filter(
				Local,
				Add Filter( columns( :sex ), Where( :sex == "F" ) )
			),
			dt << Bubble Plot(
				X( :weight ),
				Y( :height ),
				Fit To Window( "On" ),
				Sizes( :age ),
				Title Position( 0, 0 )
			),
			dt << Graph Builder(
				Size( 525, 456 ),
				Show Control Panel( 0 ),
				Fit To Window( "On" ),
				Variables( X( :weight ), Y( :age ) ),
				Elements( Box Plot( X, Y, Legend( 4 ) ) ),

			)
		)
	)
);

```

### Data Filter Source Box

**Syntax:** y = Data Filter Source Box( displayBox )

**Description:** Returns a display box that defines the source of a selection filter. Selected rows in reports contained by the Data Filter Source Box will be included for analysis in the other reports contained within a common Data Filter Context Box.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Selection Filter",
	Data Filter Context Box(
		H List Box(
			Data Filter Source Box(
				Graph Builder(
					Size( 208, 207 ),
					Show Control Panel( 0 ),
					Show Legend( 0 ),
					Variables( X( :age ) ),
					Elements( Bar( X, Legend( 3 ) ) ),
					SendToReport(
						Dispatch( {}, "Graph Builder", OutlineBox,
							{Set Title( "Filter" )}
						)
					)
				)
			),
			Platform(
				Current Data Table(),
				Bubble Plot(
					X( :weight ),
					Y( :height ),
					Sizes( :age ),
					Title Position( 0, 0 )
				)
			)
		)
	)
);

```

### Data Grid Box

**Syntax:** y = Data Grid Box(  )

**Description:** Returns a display box that can hold a data table.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Example", x = Data Grid Box() );
x << Set Data Table( dt );

```

### Data Table Box

**Syntax:** y = Data Table Box( datatable )

**Description:** Returns a table box representing the given data table.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Example", Data Table Box( dt ) );

```

### Data Table Col Box

**Syntax:** y = Data Table Col Box( col )

**Description:** Returns a column box corresponding to the given data table column.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Example",
	Table Box( Data Table Col Box( :name ), Data Table Col Box( :height ) )
);

```

### Data Table Plot Col Box

**Syntax:** y = Data Table Plot Col Box( col )

**Description:** Returns a Plot Col Box corresponding to the given data table column and optionally uses the second and third data table columns to create control limits.

**JMP Version Added:** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Example",
	Table Box( Data Table Plot Col Box( :weight ), Data Table Plot Col Box( :height ) )
);

```

### Dialog

**Syntax:** y = Dialog( specification )

**Description:** Prompts the user with a modal window. This function is deprecated. Please use the New Window function with the <<Modal argument.

**JMP Version Added:** Before version 14

**Example 1**

```js

Names Default To Here( 1 );
// See Example 2 for the deprecated Dialog equivalent
If(
	ex = New Window( "Dialog() example",
		<<Modal,
		<<Return Result,
		V List Box(
			H List Box( "Set this value", variable = Number Edit Box( 42 ) ),
			H List Box( Button Box( "OK" ), Button Box( "Cancel" ) )
		)
	);
	ex["button"] == 1;
,
	ex["variable"],
	"CANCEL"
);

```

**Example 2**

```js

Names Default To Here( 1 );
// Deprecated
If(
	ex = Dialog(
		Title( " Dialog() example" ),
		vlist(
			hlist( "Set this value", variable = EditNumber( 42 ) ),
			hlist( Button( "OK" ), Button( "Cancel" ) )
		)
	);
	ex["button"] == 1;
,
	ex["variable"],
	"CANCEL"
);

```

### Excerpt Box

**Syntax:** y = Excerpt Box( rptnum, lstSubscripts )

**Description:** Returns a display box containing the excerpt designated by the report held at number rptnum and the list of display subscripts lstSubscripts. The subscripts reflect the current state of the report, after previous excerpts have been removed.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Example",
	V Sheet Box(
		<<Hold( Bivariate( Y( :weight ), X( :height ), Fit Line() ) ),
		<<Hold(
			Distribution(
				Automatic Recalc( 1 ),
				Continuous Distribution(
					Column( :height ),
					Horizontal Layout( 1 ),
					Vertical( 0 ),
					Outlier Box Plot( 0 )
				)
			)
		),
		<<Hold( Treemap( Categories( :age ) ) ),
		<<Hold(
			Bubble Plot(
				X( :height ),
				Y( :weight ),
				Sizes( :age ),
				Coloring( :sex ),
				Circle Size( 6.226 ),
				All Labels( 0 )
			)
		),
		H Sheet Box(
			Sheet Part( "weight by height", Excerpt Box( 1, {Picture Box( 1 )} ) ),
			Sheet Part( "height", Excerpt Box( 2, {Picture Box( 1 )} ) )
		),
		H Sheet Box(
			Sheet Part( "", Excerpt Box( 3, {Picture Box( 1 )} ) ),
			Sheet Part( "height by weight", Excerpt Box( 4, {Picture Box( 1 )} ) )
		)
	)
);

```

### Expr As Picture

**Syntax:** y = Expr As Picture( expr( ... ), <width in pixels>, <Max Matrix Size( dim )> )

**Description:** Returns an image containing the specified expression as a formula picture. The default width is 600 pixels and the default max matrix size is 100.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Lineup Box( N Col( 1 ), spacing( 10 ),
		Text Box( "Quadratic Formula" ),
		Border Box( Left( 10 ), Right( 10 ), bottom( 10 ), top( 10 ), sides( 15 ),
			Expr As Picture( Expr( (-b + Sqrt( b ^ 2 - 4 * a * c )) / (2 * a) ) )
		)
	)
);

```

### Filter Col Selector

**Syntax:** y = Filter Col Selector(<Data Table(name)>, <width(pixels)>, <nlines(n)>, <script>, <onchange(expr)>)

**Description:** Returns a display box that contains a list of items. Control allows column filtering.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Col List Box Example", fontobj = lb = Filter Col Selector( width( 250 ) ) );

```

### Get Project

**Syntax:** project = Get Project( title|index|box|window )

**Description:** Returns a reference to a specific open project by title, index, or box.

**JMP Version Added:** Before version 14

**Example 1**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_PROJECTS/Big Class.jmpprj" );
Open( "$SAMPLE_PROJECTS/Sports.jmpprj" );
                             
Print( Get Project( 2 ) << Get Window Title() );

```

**Example 2**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_PROJECTS/Big Class.jmpprj" );
Open( "$SAMPLE_PROJECTS/Sports.jmpprj" );
                             
project = Get Project( "Big Class" );

```

### Get Project List

**Syntax:** projectList = Get Project List()

**Description:** Returns a list of all open projects.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Project();
Open( "$SAMPLE_PROJECTS/Big Class.jmpprj" );
                             
Print( Get Project List() << Get Window Title() );

```

### Get Window

**Syntax:** window = Get Window( <Project(title|index|box|window)>, <Type(string)>, title|index|box )

**Description:** Returns a reference to a specific open window by title, index, or box.



The search is limited to windows in the current project (or no project when not running the script in a project).



To specify a project, use the optional Project() argument with a title, index, display box, or window object. Use Project(0) to specify no project when running the script in a project.



Use the optional Type() argument with one of "Data Tables", "Journals", "Reports", or "Dialogs" to limit the search to windows of a particular type.

**JMP Version Added:** 14

**Example 1**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA\Big Class.jmp" );
                                        
window = Get Window( "Big Class" );

```

**Example 2**

```js

Names Default To Here( 1 );
project = Open( "$SAMPLE_PROJECTS\Big Class.jmpprj" );
                             
window = Get Window( Project( project ), "Big Class" );

```

### Get Window List

**Syntax:** windowList = Get Window List( <Project(title|index|box|window)>, <Type(string)> )

**Description:** Returns a list of all open windows.



The list is limited to windows in the current project (or no project when not running the script in a project).



To specify a project, use the optional Project() argument with a title, index, display box, or window object. Use Project(0) to specify no project when running the script in a project.



Use the optional Type() argument with one of "Data Tables", "Journals", "Reports", or "Dialogs" to limit the list to windows of a particular type.

**JMP Version Added:** 14

**Example 1**

```js

Names Default To Here( 1 );
Print( Get Window List() << Get Window Title() );

```

**Example 2**

```js

Names Default To Here( 1 );
project = Open( "$SAMPLE_PROJECTS\Big Class.jmpprj" );
                             
Print( Get Window List( Project( project ) ) << Get Window Title() );

```

**Example 3**

```js

Names Default To Here( 1 );
project = Open( "$SAMPLE_PROJECTS\Big Class.jmpprj" );
                             
Print(
	Get Window List( Project( project ), Type( "Data Tables" ) ) << Get Window Title()
);

```

### Global Box

**Syntax:** box = Global Box( name )

**Description:** Creates a display box showing the value of a global variable.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
ex = .6;
New Window( "Example", Global Box( ex ) );

```

### Graph

**Syntax:** y = Graph Box( props, script )

**Description:** Returns a display box containing a graph with axes. Named property arguments can be title("title"), XScale(low,high), YScale(low,high), FrameSize(h,v), XName("x"), yName("y"), DoubleBuffer, and SuppressAxes.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Frame Size( 300, 300 ),
		Marker( Marker State( 3 ), [11 44 77], [75 25 50] );
		Pen Color( "Blue" );
		Line( [10 30 70], [88 22 44] );
	)
);

```

### Graph 3D Box

**Syntax:** y = Graph 3D Box()

**Description:** (Experimental) Returns a display box with 3D content that can be used with other display boxes to create custom reports.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
x3d = Graph 3D Box(
	framesize( 300, 300 ),
	Xname( "X Axis" ),
	Yname( "Y Axis" ),
	Zname( "Z Axis" )
);
New Window( "Graph3DBox Example", x3d );
x3d << addmarkers( /*x*/[20 20 20 20], /*y*/[20 20 20 20], /*z*/[10 20 30 40] );
x3d << AddVector(
	[60 60 60]/*from*/,
	[90 60 60, 60 90 60, 60 60 90]/*to*/,
	ShaftThickness( [.1] ),
	FromThickness( [.2] ),
	ToThickness( [.3] ),
	ShaftColor( [-255] ),
	FromColor( [-16711680] ),
	ToColor( [-65280] ),
	Facets( Round ),
	FromCap( Sphere ),
	toCap( Point )
);

```

### Graph Box

**Syntax:** y = Graph Box( props, script )

**Description:** Returns a display box containing a graph with axes. Named property arguments can be title("title"), XScale(low,high), YScale(low,high), FrameSize(h,v), XName("x"), yName("y"), DoubleBuffer, and SuppressAxes.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Frame Size( 300, 300 ),
		Marker( Marker State( 3 ), [11 44 77], [75 25 50] );
		Pen Color( "Blue" );
		Line( [10 30 70], [88 22 44] );
	)
);

```

### H Center Box

**Syntax:** y = H Center Box( <childbox> )

**Description:** Returns a display box with the childbox display box argument centered in the horizontal space defined by the maximum size of that child and all the other siblings of the center box.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "test",
	H List Box(
		V Center Box( Text Box( "V+V" ) ),
		V List Box(
			Text Box( "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm" ),
			H Center Box( Text Box( "H+H" ) ),
			Text Box( "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm" ),
			Text Box( "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm" ),
			Text Box( "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm" ),
			Text Box( "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm" )
		)
	)
);

```

### H List Box

**Syntax:** y = H List Box( <Align( center|bottom )>, displayBox, ... )

**Description:** Returns a display box that arranges the display boxes provided by the arguments in a horizontal layout. The <<Hold message tells the sheet to own the report(s) that will be excerpted. The optional Align argument allows for bottom or center alignment of the contents inside the display box.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Outline Box( "Picker",
		H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) )
	)
);

```

### H Scroll Box

**Syntax:** y = H Scroll Box( <Size( x )>, displayBox )

**Description:** Returns a display box that positions a larger child box using a horizontal scroll bar.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Outline Box( "Picker",
		H Scroll Box(
			Size( 200 ),
			H List Box(
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) )
			),
			<<Set Stretch( "Window", "Window" )
		)
	)
);

```

### H Sheet Box

**Syntax:** y = H Sheet Box( <<Hold( rpt ), displayBox, ... )

**Description:** Returns a display box that arranges the display boxes provided by the arguments in a horizontal layout. The <<Hold message tells the sheet to own the report(s) that will be excerpted. The optional Align argument allows for right or center alignment of the contents inside the display box.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Example",
	V Sheet Box(
		<<Hold( Bivariate( Y( :weight ), X( :height ), Fit Line() ) ),
		<<Hold(
			Distribution(
				Automatic Recalc( 1 ),
				Continuous Distribution(
					Column( :height ),
					Horizontal Layout( 1 ),
					Vertical( 0 ),
					Outlier Box Plot( 0 )
				)
			)
		),
		<<Hold( Treemap( Categories( :age ) ) ),
		<<Hold(
			Bubble Plot(
				X( :height ),
				Y( :weight ),
				Sizes( :age ),
				Coloring( :sex ),
				Circle Size( 6.226 ),
				All Labels( 0 )
			)
		),
		H Sheet Box(
			Sheet Part( "weight by height", Excerpt Box( 1, {Picture Box( 1 )} ) ),
			Sheet Part( "height", Excerpt Box( 2, {Picture Box( 1 )} ) )
		),
		H Sheet Box(
			Sheet Part( "", Excerpt Box( 3, {Picture Box( 1 )} ) ),
			Sheet Part( "height by weight", Excerpt Box( 4, {Picture Box( 1 )} ) )
		)
	)
);

```

### H Splitter Box

**Syntax:** y = H Splitter Box( <Size(x,y)>, displayBox, ... )

**Description:** Returns a display box that arranges other display boxes horizontally, with interactive control of sizes. Child sizes are specified as a proportion of the width or height of the Splitter Box. The optional Size argument is only used for the top-most Splitter Box; lower level boxes are sized like any other child box.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Splitter",
	V Splitter Box(
		Size( 800, 600 ),
		H Splitter Box( graph = Graph Box(), Script Box(), <<Sizes( {0.6, 0.4} ) ),
		H Splitter Box(
			pict = Picture Box( Open( "$SAMPLE_IMAGES/tile.jpg", jpg ) ),
			spacer = Spacer Box(),
			<<Sizes( {0.4, 0.6} )
		)
	)
);
graph[FrameBox( 1 )] << Set Stretch( "Window", "Window" );
pict << Set Min Size( 100, 100 );
pict << Set Max Size( 500, 500 );
pict << Set Stretch( "Window", "Window" );
spacer << Set Fill( 1 );
spacer << Color( "Red" );
spacer << Set Stretch( "Window", "Window" );

```

### Hier Box

**Syntax:** y = Hier Box( text, Hier Box( ... ), Hier Box( ... ), ... )

**Description:** Returns a display box for hierarchy trees. The text argument is the node&apos;s name and can be a Text Edit Box.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Hier Box(
		Text Edit Box( "Cause 1" ),
		Hier Box( Text Edit Box( "Subcause 1.1" ), <<direction( 1 ) ),
		Hier Box( Text Box( "Subcause 1.2" ) ),
		<<Change Type( Fishbone ),
		<<direction( 1 )
	)
);

```

### Hist Seg

**Syntax:** b = Hist Seg([data], <[freq data]>,<[weight data]>, <vertical=0|1>, <Row States()>)

**Description:** Returns a hist seg

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
rows = N Row( xx );
New Window( "Hist Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, .2 ),
		Hist Seg( xx, J( rows, 1 ), J( rows, 1 ), 1, Row States( dt ) )
	)
);

```

### Icon Box

**Syntax:** Box = Icon Box( "Name" )

**Description:** Constructs a display box containing an icon, where the name argument can be a JMP icon name or a path to a an image.

**JMP Version Added:** Before version 14

**Example 1**

```js

Names Default To Here( 1 );
New Window( "Example",
	ex1 = Icon Box( "Popup" ),
	ex2 = Icon Box( "Locked" ),
	ex3 = Icon Box( "Labeled" ),
	ex4 = Icon Box( "Sub" ),
	ex5 = Icon Box( "Excluded" ),
	ex6 = Icon Box( "Hidden" ),
	ex7 = Icon Box( "Continuous" ),
	ex8 = Icon Box( "Nominal" ),
	ex9 = Icon Box( "Ordinal" )
);

```

**Example 2**

```js

Names Default To Here( 1 );
New Window( "Example with Path", ex = Icon Box( "$SAMPLE_IMAGES/pi.gif" ) );

```

### If Box

**Syntax:** box = If Box( 0|1, displayBoxArgs )

**Description:** Returns a display box that conditionally displays the specified display box arguments.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	H List Box(
		englishBox = If Box( 1, Text Box( "Good day" ) ),
		frenchBox = If Box( 0, Text Box( "Bon Jour" ) )
	)
);
Wait( 5 );
englishBox << Set( 0 );
frenchBox << Set( 1 );

```

### If Seg

**Syntax:** seg = If Seg(<state=0|1>)

**Description:** Returns a display seg that shows or hides display seg children.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];
New Window( "Lines Seg Example",
	g = Graph Box( If Seg( true, <<append( Lines Seg( lines ) ) ) )
);

```

### JSS Context Box

**Syntax:** y = JSS Context Box( displayBox )

**JMP Version Added:** 19

```js

Names Default To Here( 1 );
New Window( "JSS Context",
	JSS Context Box(
		V List Box(
			Panel Box( "Panel", Text Box( "Hi" ), Button Box( "Press Me" ), ),
			Button Box( "Outside" ),

		),
		<<Set JSS(
			Expr(
				Type( TextBox ) << Background Color( "Red" );
				Type( ButtonBox ) << Background Color( "Green" );
				Descend( Type( PanelBox ), Type( ButtonBox ) ) <<
				Background Color( "Blue" );
			)
		)
	)
);

```

### Journal Box

**Syntax:** y = Journal Box( journalText )

**Description:** Constructs a display box from instructions that would be stored in a journal.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
sample = Distribution( Y( :height ) );
sampjourn = sample << Get Journal;
New Window( "Distribution of Height",
	Text Box( "Here is the result of the distribution platform for Height." ),
	Journal Box( sampjourn )
);

```

### Line Seg

**Syntax:** ls = Line Seg(x values, y values, <Row States( dt | dt,[rows] | dt,{{rows}, ...} | {states} ) >, < Sizes( s ) > )>)

**Description:** Returns a display seg with lines connecting all of the x and y values.

**JMP Version Added:** Before version 14

**Example 1**

```js

Names Default To Here( 1 );
x = [10, 50, 90];
y = [10, 90, 10];
New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( "Line Seg" ));

```

**Example 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
x = [10, 50, 90];
y = [10, 90, 10];
New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y, RowStates( dt ) ) ) );
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( "Line Seg" ));

```

**Example 3**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
x = [10, 50, 90];
y = [10, 90, 10];
New Window( "Line Seg Example",
	g = Graph Box( Line Seg( x, y, RowStates( dt, {1, 3, 5} ) ) )
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( "Line Seg" ));

```

### Lines Seg

**Syntax:** ls = Lines Seg([x1 y1 x2 y2,...])

**Description:** Returns a display seg with a sequence of line segments for the passed in x and y values.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];
New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( "Lines Seg" ));

```

### Lineup Box

**Syntax:** y = Lineup Box( <NCol( nc )>, <Spacing( pixels, <vspace> )>, displayBoxArgs, ... )

**Description:** Returns a display box to show an alignment of boxes in nc columns. The optional Spacing argument specifies the horizontal and vertical space around the display boxes. If the vspace argument is used, vspace is the vertical space and pixels is the horizontal space.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Lineup Box( N Col( 1 ), spacing( 10 ),
		Text Box( "Quadratic Formula" ),
		Border Box( Left( 10 ), Right( 10 ), bottom( 10 ), top( 10 ), sides( 15 ),
			Expr As Picture( Expr( (-b + Sqrt( b ^ 2 - 4 * a * c )) / (2 * a) ) )
		)
	)
);

```

### Lineup Ruler Box

**Syntax:** y = Lineup Box( <Widths( {width1, width2, ...} )>, displayBoxArgs, ... )

**Description:** Returns a display box that sets the column widths of the Lineup Boxes that it contains.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );

New Window( "Lineup Ruler",
	lrb = Lineup Ruler Box(
		Widths( {120, 200} ),
		Outline Box( "Customer 1",
			Lineup Box( N Col( 2 ),
				Text Box( "First Name:" ),
				Text Edit Box(),
				Text Box( "Last Name:" ),
				Text Edit Box(), 

			)
		),
		Outline Box( "Customer 2",
			Lineup Box( N Col( 2 ),
				Text Box( "First Name:" ),
				Text Edit Box(),
				Text Box( "Last Name:" ),
				Text Edit Box(), 

			)
		)
	)
);

```

### List Box

**Syntax:** y = List Box( {item, ...}, <width( pixels )>, <maxSelected( 9999 )>, <nlines( 12 )>, <script> )

**Description:** Returns a display box to show a list box of selection items. If item itself is a two-item list containing the item name and a string specifying a modeling type or sorting order, such as "Ordinal" or "Ascending", the appropriate icon will show up next to that item in the list box.

**JMP Version Added:** Before version 14

**Example 1**

```js

Names Default To Here( 1 );
New Window( "Example", b = List Box( {"single", "double", "triple"}, nlines( 10 ) ) );

```

**Example 2**

```js

Names Default To Here( 1 );
New Window( "Example",
	lb = List Box(
		{{"First Item", "continuous"}, {"Second Item", "ordinal"}, {"Third Item",
		"nominal"}},
		width( 200 ),
		max selected( 2 ),
		nlines( 6 )
	)
);

```

### Marker Seg

**Syntax:** me = Marker Seg( x, y, < Row States( dt | dt,[rows] | dt,{{rows}, ...} | {states} ) >, < Sizes( s ) > )

**Description:** Returns a display seg with markers for all of the x and y values.

**JMP Version Added:** Before version 14

**Example 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
sz = Column( "age" ) << get values;
aa = [=> 0];
yy = J( N Rows( xx ), 1, 0 );
For( ii = 1, ii <= N Rows( xx ), ii++,
	aa[xx[ii]]++;
	yy[ii] = aa[xx[ii]];
);
New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg( xx, yy, Row States( dt ), sizes( sz ) )
	)
);

```

**Example 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = [1 2 3 4 5];
yy = [2 3 4 5 6];
New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg( xx, yy, Row States( dt, {3, 4, 11, 7, 13} ) )
	)
);

```

**Example 3**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = [1 2 3 4 5];
yy = [2 3 4 5 6];
New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg( xx, yy, Row States( dt, 11 :: 15 ) )
	)
);

```

**Example 4**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = [1 2 3 4 5];
yy = [2 3 4 5 6];
New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg(
			xx,
			yy,
			Row States( dt, {{1, 2, 3}, {4, 5}, {6}, {7, 12, 15, 9}, {21, 8}} )
		)
	)
);

```

**Example 5**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = [1 2 3 4 5];
yy = [2 3 4 5 6];
New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg(
			xx,
			yy,
			Row States(
				{Color State( "Blue" ), Color State( "Orange" ), Color State( "Green" ),
				Color State( "Purple" ), Color State( "Red" )}
			)
		)
	)
);

```

### Matrix Box

**Syntax:** y = Matrix Box( matrix, < <<Column Names( "c1", "c2", ... )>, < <<Row Names( "r1", "r2", ... )> )

**Description:** Returns a display box to show a matrix of numbers.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Matrix Box( [11 22 33, 44 55 66], <<RowNames( "First", "Second" ) )
);

```

### MouseBox

**Syntax:** box = MouseBox( displayBoxArgs )

**Description:** Returns a box that can make JSL callbacks for mouse actions

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	MouseBox(/*first sibling*/Text Box( "drag from here" ),
		<<setDragText( "hello" ),
		<<setTooltip( "source" ),
		<<setDragEnable( 1 ),
		<<setDragBegin(/* decide if a drag is allowed */
			Function( {this, clickpt},
				"magic text";/* 0.0 to prevent the drag.  1.0 is the same as 'this<<getDragText' */
			)
		),
		<<setDragEnd(/* clean up after a drag finishes or cancels */
			Function( {this, clickpt, how}, /* how=move,copy,ignore */
				If(
					how != "ignore" & !Is Empty( this << getDestBox ) & this << getDestBox
					 == this << sib, /* the getDestBox check makes sure the destination of the drag-and-drop was my sibling and not some other program beyond our control */
					(this << child) << setText(
						"done!" /* 'move' suggests clearing the source */
					)
				)
			)
		)
	),
	MouseBox(/*second sibling*/Text Box( "drag to here" ),
		<<setTooltip( "destination" ),
		<<setDropEnable( 1 ),
		<<setDropTrack(/* decide if dropping is allowed, before the drop.  The getSourceBox check makes sure the source of the drag-and-drop is my sibling, and not some other program */
			Function( {this, clickpt},
				If(
					!Is Empty( this << getSourceBox ) & this == (this << getSourceBox) <<
					sib,
					1, /*else*/0
				)
			)
		),
		<<setDropCommit(/* accept the drop */Function( {this, clickpt, text},
				(this << child) << setText( text )
			)
		)
	)
);

```

### Move to Project

**Syntax:** Move to Project(<Source(project)>, <Destination(project)>, <Windows({list of windows to move})>)

**Description:** Moves one or more windows into a project, out of a project, or between projects. Only one of Source and Destination must be specified; the other will default to the current project. (Use only Source to move windows into the current project, and only Destination to move windows out of it.) A data table window will be moved together with its dependent reports, though only one need be specified in the Windows argument. If omitted, the Windows argument defaults to all open windows in the source project.

**JMP Version Added:** 14

**Example 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
report = dt << Run Script( "Bivariate" );
                             
project = New Project();
                             
Move to Project( destination( project ), windows( {report} ) );

```

**Example 2**

```js

Names Default To Here( 1 );
project = Open( "$SAMPLE_PROJECTS/Sports.jmpprj" );
Move to Project( Source( project ) );
project << Close Window();

```

### New Image

**Syntax:** img = New Image()

img = New Image( width, height )

img = New Image( pathname )

img = New Image( picture )

img = New Image( matrix of JSL color pixels ) 

img = New Image( rgb|r|g|rgba, {i, i, i} )

**Description:** Returns a new image which can then be edited through JSL commands. If a path is specified to an existing image file, the file should be a .JPG, .PNG, .GIF, .BMP or .TIF file.

**JMP Version Added:** Before version 14

**Example 1**

```js

Names Default To Here( 1 );
image = New Image( "$SAMPLE_IMAGES/windmap.png" );
New Window( "new image", image );

```

**Example 2**

```js

Names Default To Here( 1 );
pic = Open( "$SAMPLE_IMAGES/windmap.png", png );
image2 = New Image( pic );
New Window( "new image", image2 );

```

**Example 3**

```js

Names Default To Here( 1 );
image3 = New Image();
mat = J( 256, 256 );
For( y = 0, y < 256, y++,
	For( x = 0, x < 256, x++,
		mat[y * 256 + x] = RGB Color( y / 255.0, 0.0, x / 255.0 )
	)
);
image3 << Set Pixels( mat );
New Window( "image", image3 );

```

### New Project

**Syntax:** project = new Project( <project messages> )

**Description:** Creates a new empty project window. One or more project messages can be included as arguments in order to create a project in one step.

**JMP Version Added:** Before version 14

**Example 1**

```js

Names Default To Here( 1 );
project = New Project();

```

**Example 2**

```js

Names Default To Here( 1 );
project = New Project(
	Run Script(
		dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
		dt << Run Script( "Bivariate" );
	)
);

```

**Example 3**

```js

Names Default To Here( 1 );
project = New Project(
	Run Script(
		Open( "$SAMPLE_DATA/Big Class.jmp" );
		New Window( "Big Class - Bivariate of weight by height",
			Bivariate( Y( :weight ), X( :height ) )
		);
	)
);

```

**Example 4**

```js

Names Default To Here( 1 );
project = New Project(
	Set Bookmarks(
		{File( "$SAMPLE_DATA/Animals.jmp" ), File( "$SAMPLE_DATA/Big Class.jmp" )}
	),
	Run Script(
		Open( "$SAMPLE_DATA/Big Class.jmp" );
		New Window( "Big Class - Bivariate of weight by height",
			Bivariate( Y( :weight ), X( :height ) )
		);
	)
);

```

**Example 5**

```js

Names Default To Here( 1 );
project = New Project(
	Run Script(
		Open( "$SAMPLE_SCRIPTS/demoCorr.jsl", Set Window ID( "demoCorr" ), Script )
	),
	Set Layout(
		H Splitter Box(
			<<Set Sizes( {0.15, 0.85} ),
			Tab Page Box( Title( "Window List" ), Window ID( "Windows" ) ),
			V Splitter Box(
				<<Set Sizes( {0.7, 0.3} ),
				Tab Page Box( Title( "demoCorr" ), Window ID( "demoCorr" ) ),
				Tab Page Box( Title( "Log" ), Window ID( "Log" ) )
			)
		)
	)
);

```

### New Window

**Syntax:** w = New Window( title, < <<Type("Report" | "Dialog" | "Modal Dialog" | "Journal" | "Launcher" | "Script")>, < << Return Result>, < << On Open(expr | function | method)>, < << On Close(expr | function | method)>, < <<On Validate(expr | function | method)>, < <<Show Menu(0 | 1)>, < <<Show Toolbars(0 | 1)>, < <<Suppress AutoHide(0 | 1)>, < <<Window View("Visible" | "Invisible")>, < <<Language("C" | "JavaScript" | "JSL" | "JSON" | "Python" | "R" | "SAS"  | "SQL" | "Text" | "XML")>, < <<Size(x, y)>, displayBox | script)

**Description:** Creates a window containing the specified display box or script. A report window is created by default, unless the Type option is specified. A window of Type("Modal Dialog") halts execution until the dialog is responded to. On Open, On Validate, and Return Result are available only for modal windows. On Open() evaluates its expression, function, or class method when the window is created. If On Close() returns false, the window is prevented from closing. On Validate() runs its expression, function, or class method when the OK button is clicked. If the expression returns true, the window is closed. Otherwise, the window remains open. Return Result changes the window&apos;s return value when it closes to match that of the deprecated Dialog() function. For window types that support toolbars, use Show Toolbars to specify changes from the default behavior. The options Show Menu and Suppress AutoHide are Windows only. The Window View("Invisible") option can be used for any window other than a Modal Dialog. A window of Type("Script") creates a JSL document unless the <<Language option is specified.

**JMP Version Added:** Before version 14

**[Win] Toolbars and Menus**

```js

Names Default To Here( 1 );
// Compare settings for toolbars and menus
// Suppress AutoHide is Windows only
g = Graph Box(
	Frame Size( 300, 300 ),
	Marker( Marker State( 3 ), [11 44 77], [75 25 50] );
	Pen Color( "Blue" );
	Line( [10 30 70], [88 22 44] );
);
New Window( "Default - menu and toolbars", g );
New Window( "Menu, no toolbars, suppress autohide",
	Suppress AutoHide( 1 ),
	Show Toolbars( 0 ),
	g
);
New Window( "Toolbars, no menu", Show Menu( 0 ), g );
New Window( "No menu, no toolbars", Show Menu( 0 ), Show Toolbars( 0 ), g );

```

**Dialog**

```js

Names Default To Here( 1 );

ex = New Window( "Dialog example",
	<<Type( "Dialog" ),
	V List Box(
		Panel Box( "Sample data dialog",
			Button Box( "Open Sample Data", Open( "$SAMPLE_DATA/Big Class.jmp" ) )
		),
		H List Box( Button Box( "Close", Try( ex << CloseWindow ) ) )
	)
);

```

**Invisible**

```js

Names Default To Here( 1 );

g = Graph Box(
	Frame Size( 300, 300 ),
	Marker( Marker State( 3 ), [11 44 77], [75 25 50] );
	Pen Color( "Blue" );
	Line( [10 30 70], [88 22 44] );
);
w = New Window( "My Window's Title", <<WindowView( "Invisible" ), g );
p = w << Get Picture();
w << Close Window;
psize = p << Size;
New Window( "picture", Outline Box( "picture size: " || Char( psize ), p ) );

```

**Modal Dialog**

```js

Names Default To Here( 1 );

ex = New Window( "Modal Dialog example",
	<<Type( "Modal Dialog" ),
	<<Return Result,
	<<On Validate(
		num = myEditBox << Get;
		If( num >= 1 & num <= 100, // in range
			myEditBox << Background Color( "Background" ); // this field does not need attention
			1; //the number is good, validate
		, // else out of range
			myEditBox << Background Color( "Light Yellow" ); // this field needs attention
			0; // the number is bad, do not validate
		) // the result of this if(...) is the OnValidate( ) answer, 0 or 1
		;
	),
	V List Box(
		Text Box( "Enter a value between [1,100]:" ),
		H List Box( myEditBox = Number Edit Box( 42 ) ),
		H List Box( Button Box( "OK" ), Button Box( "Cancel" ) )
	)
);

//  the Modal window must be closed before the following code runs

If(
	ex["button"] == 1 // not canceled
, // then show the value
	Write( ex["myEditBox"] ); // note: myEditBox is the name of the variable holding the text edit box
, // else report no selection
	Write( "CANCEL" ); // cancel button or red X was pressed
);

```

**Python script**

```js

Names Default To Here( 1 );
pyscript = "\[import numpy as np
a = np.arange(15).reshape(3, 5)]\";
ex = New Window( "Script example", <<Type( "Script" ), <<Language( "Python" ), pyscript );

```

**Report**

```js

Names Default To Here( 1 );
g = Graph Box(
	Frame Size( 300, 300 ),
	Marker( Marker State( 3 ), [11 44 77], [75 25 50] );
	Pen Color( "Blue" );
	Line( [10 30 70], [88 22 44] );
);
New Window( "My Window's Title", g );

```

**Script**

```js

Names Default To Here( 1 );
script = JSL Quote(Names Default To Here(1);
dt=Open("$SAMPLE_DATA/Big Class.jmp");
dt << Run Script("Bivariate");
);
ex = New Window( "Script example", <<Type( "Script" ), script );

```

### Number Col Box

**Syntax:** y = Number Col Box( title, numbers )

**Description:** Returns a display box to show the numbers specified by the numbers argument, which can be a list or matrix.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Outline Box( "Table",
		Table Box(
			String Col Box( "names", {"x", "y", "z"} ),
			Number Col Box( "values", {11, 22, 33} ),
			Plot Col Box( "values", {11, 22, 33} )
		)
	)
);

```

### Number Col Edit Box

**Syntax:** y = Number Col Edit Box( title, numbers )

**Description:** Returns a display box to show the numbers specified by the numbers argument, which can be a list or matrix.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
x = y = z = 0;
New Window( "Example",
	Modal,
	<<Return Result,
	Outline Box( "Table", Table Box( neb = Number Col Edit Box( "values", {x, y, z} ) ) )
);

```

### Number Edit Box

**Syntax:** y = Number Edit Box( initValue, <width> )

**Description:** Returns an edit box that accepts only numeric input. Specify the optional width argument to set the width of the box in characters.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example", neb = Number Edit Box( 5 ) );
x = neb << get;

```

### Outline Box

**Syntax:** y = Outline Box( title, <command script pairs list>, displayBox, ... )

**Description:** Creates an outline element in the report, returning the display box reference. To include a menu in the outline node, specify the command script pairs list, a list specifying menu commands and associated scripts.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Outline Box( "Picker",
		{"Show label value", Show( teb << get text )},
		H List Box( Text Box( "Label:" ), teb = Text Edit Box( Char( 213 ) ) )
	)
);

```

### Page Break Box

**Syntax:** Page Break Box()

**Description:** Creates a display box that forces a page break.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Frame Size( 300, 300 ),
		Marker( Marker State( 3 ), [11 44 77], [75 25 50] );
		Pen Color( "Blue" );
		Line( [10 30 70], [88 22 44] );
	),
	Page Break Box(),
	Graph Box(
		Frame Size( 300, 300 ),
		Marker( Marker State( 3 ), [77 44 11], [75 25 50] );
		Pen Color( "Red" );
		Line( [70 30 10], [88 22 44] );
	)
);

```

### Panel Box

**Syntax:** y = Panel Box( title, displayBoxArgs )

**Description:** Returns a display box to label and enclose the argument display box.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Tab Box(
		"alpha",
		Panel Box( "panel", Text Box( "text" ) ),
		"beta",
		Popup Box( {"x", ex = 1, "y", ex = 2} )
	)
);

```

### Picture Box

**Syntax:** pict = Picture Box( Picture Object )

**Description:** Creates a display box that contains a graphics picture object. You can either open a picture and then reference it, or you can use the Open command with a path to the picture in place of the Picture Object argument.

**JMP Version Added:** Before version 14

**Example 1**

```js

Names Default To Here( 1 );
New Window( "Example",
	Picture Box( Open( "$SAMPLE_IMAGES/black rhino footprint.jpg", jpg ) )
);

```

**Example 2**

```js

Names Default To Here( 1 );
pict = Open( "$SAMPLE_IMAGES/black rhino footprint.jpg", jpg );
New Window( "Example", Picture Box( pict ) );

```

### Pie Seg

**Syntax:** ps = Pie Seg(<{ xorigin, yorigin }>, <radius>, <style("pie", "ring", "coxcomb")>, values)

**Description:** Creates a Pie Seg at the specified origin, with the specified radius, based on values specified in matrix format.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Summarize( a = by( :age ), c = count, sumHt = Sum( :height ), sumWt = Sum( :weight ) );
New Window( "Pie Seg",
	Graph Box(
		Pie Seg( style( "ring" ), {25, 50}, .25, sumHt ),
		Pie Seg( {75, 50}, .25, sumWt )
	)
);

```

### Platform

**Syntax:** y = Platform( dataTable, script )

**Description:** Evaluates the given script in the context of the given data table. Returns the resulting display box for embedding in a display tree.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Platform example",
	H List Box(
		Platform(
			dt,
			Bubble Plot(
				X( :weight ),
				Y( :height ),
				Sizes( :age ),
				Title Position( 0, 0 )
			)
		),
		Platform(
			dt,
			Bubble Plot(
				X( :weight ),
				Y( :age ),
				Sizes( :height ),
				Title Position( 0, 0 )
			)
		)
	)
);

```

### Plot Col Box

**Syntax:** y = Plot Col Box( title, numbers )

**Description:** Returns a display box to graph the numbers. The numbers argument can be a list or matrix.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Outline Box( "Table",
		Table Box(
			String Col Box( "names", {"x", "y", "z"} ),
			Number Col Box( "values", {11, 22, 33} ),
			Plot Col Box( "values", {11, 22, 33} )
		)
	)
);

```

### Poly Seg

**Syntax:** ps = Poly Seg(x values, y values)

**Description:** Returns a display seg that represents a polygon with vertices based on the passed in x and y values.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
x = [10, 50, 90];
y = [10, 90, 10];
New Window( "Poly Seg Example", g = Graph Box( Poly Seg( x, y ) ) );
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( "Poly Seg" ));

```

### Popup Box

**Syntax:** y = Popup Box( {label1, script1, ...} )

**Description:** Returns a display box with a popup menu defined by label/script pairs.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Tab Box(
		"alpha",
		Popup Box( {"x", ex = 1, "y", ex = 2} ),
		"beta",
		Panel Box( "panel", Text Box( "text" ) )
	)
);

```

### Radio Box

**Syntax:** y = Radio Box( {item, ...}, <script> )

**Description:** Returns a display box to show a set of radio buttons.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	rb = Radio Box( {"single", "double", "triple"}, Show( rb << Get() ) )
);

```

### Range Slider Box

**Syntax:** y = Range Slider Box( minValue, maxValue, lowVariable, highVariable, script )

**Description:** Returns a display box that shows a range slider control that ranges from minValue to maxValue. As the two sliders&apos; positions change, their values are placed into lowVariable and highVariable, and the script is run.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
sliderLowerValue = .5;
sliderUpperValue = .7;
New Window( "Example",
	Panel Box( "Range Slider",
		tb1 = Text Box( "Low Value: " || Char( sliderLowerValue ) ),
		tb2 = Text Box( "High Value: " || Char( sliderUpperValue ) ),
		sb = Range Slider Box(
			0,
			1,
			sliderLowerValue,
			sliderUpperValue,
			tb1 << Set Text( "Low Value: " || Char( sliderLowerValue ) );
			tb2 << Set Text( "High Value: " || Char( sliderUpperValue ) );
		)
	)
);

```

### Report

**Syntax:** y = Report( platform object )

**Description:** Returns a reference to the display tree for the report from a platform.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Report( Bivariate( Y( :weight ), X( :height ), Fit Line ) );

```

### Scene Box

**Syntax:** box = Scene Box( xsize, ysize )

**Description:** Returns a display box for 3D graphics.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Scene = Scene Box( 600, 600 );
Scene << backgroundcolor( 0 );
Scene << showarcball( always );
New Window( "See HelloWorld.jsl in sample scripts", Scene );
Scene << perspective( 45, .2, 20 );
Scene << Translate( 0.0, 0.0, -4.5 );
ex = Scene Display List();
ex << color( .9, .9, .9 );
ex << Text( center, middle, .3, "Hello World" );
Scene << arcball( ex, 1.5 );
Scene << update;

```

### Scene Display List

**Syntax:** list = Scene Display List()

**Description:** Returns a display list for 3D graphics.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
ex = Scene Display List();
ex << color( .9, .9, .9 );
ex << Text( center, middle, .3, "Hello World" );
exScene = Scene Box( 600, 600 );
exScene << backgroundcolor( 0 );
exScene << showarcball( always );
New Window( "See HelloWorld.jsl in sample scripts", exScene );
exScene << perspective( 45, .2, 20 );
exScene << Translate( 0.0, 0.0, -4.5 );
exScene << arcball( ex, 1.5 );
exScene << update;

```

### Script Box

**Syntax:** y = Script Box( <s>, <"C" | "JavaScript" | "JSL" | "JSON" | "Python" | "R" | "SAS" | "SQL" | "Text" | "XML">, <width>, <height> )

**Description:** Returns a display box to edit a script. By default the editor has JSL syntax highlighting and behavior.

**JMP Version Added:** Before version 14

**JSL**

```js

Names Default To Here( 1 );
Script = Script Box( "// This window is editable.", "JSL", 300, 100 );
New Window( "This is a script box", Script );

```

**Python script**

```js

Names Default To Here( 1 );
pyscript = "\[import numpy as np
a = np.arange(15).reshape(3, 5)]\";
Script = Script Box( pyscript, "Python", 300, 100 );
New Window( "This is a python script box", Script );

```

### Scroll Box

**Syntax:** y = Scroll Box( <Size( x, y )>, displayBox )

**Description:** Returns a display box that positions a larger child box using scroll bars.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Outline Box( "Picker",
		Scroll Box(
			Size( 200, 100 ),
			V List Box(
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) )
			),
			<<Set Stretch( "Window", "Window" )
		)
	)
);

```

### Set Global Window Handler

**Syntax:** Set Global Window Handler( Handler Function )

**Description:** Sets a function to be called each time a new window is created.

**JMP Version Added:** 17

```js

Names Default To Here( 1 );
Set Global Window Handler(
	Function( {window},
		Print( window << get window title() );
		window << close window();
	)
);
New Window( "My Window" );
Clear Global Window Handler();

```

### Shape Seg

**Syntax:** me = Shape Seg( {Path(<path>), ...}, < Row States( dt | dt,[rows] | dt,{{rows}, ...} | {states} ) > )

**Description:** Returns a display seg with a collection of shapes.  Each shape draws a stroke along the given path if fill is 0, or paints the interior of the given path if fill is not 0. The path can be specified with an N x 3 matrix or with a text representation. A path matrix has three columns for x, y, and flags for each point in the path. The flag values are 0 for control, 1 for move, 2 for line segment, 3 for cubic Bézier segment, and are negative if the point also closes the path. Path text supports SVG syntax.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);

```

### Sheet Part

**Syntax:** y = Sheet Part( title, childbox )

**Description:** Returns a display box containing the childbox display box argument with the specified title.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Example",
	V Sheet Box(
		<<Hold( Bivariate( Y( :weight ), X( :height ), Fit Line() ) ),
		<<Hold(
			Distribution(
				Automatic Recalc( 1 ),
				Continuous Distribution(
					Column( :height ),
					Horizontal Layout( 1 ),
					Vertical( 0 ),
					Outlier Box Plot( 0 )
				)
			)
		),
		<<Hold( Treemap( Categories( :age ) ) ),
		<<Hold(
			Bubble Plot(
				X( :height ),
				Y( :weight ),
				Sizes( :age ),
				Coloring( :sex ),
				Circle Size( 6.226 ),
				All Labels( 0 )
			)
		),
		H Sheet Box(
			Sheet Part( "weight by height", Excerpt Box( 1, {Picture Box( 1 )} ) ),
			Sheet Part( "height", Excerpt Box( 2, {Picture Box( 1 )} ) )
		),
		H Sheet Box(
			Sheet Part( "", Excerpt Box( 3, {Picture Box( 1 )} ) ),
			Sheet Part( "height by weight", Excerpt Box( 4, {Picture Box( 1 )} ) )
		)
	)
);

```

### Slider Box

**Syntax:** box = Slider Box(minValue, maxValue, variable, script, <set width(n)>, <rescale slider(minValue, maxValue)>)

**Description:** Returns a display box that shows a slider control that ranges from minValue to maxValue. As the slider&apos;s position changes, its value is placed into variable and the script is run.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
sliderValue = .6;
New Window( "Example",
	Panel Box( "Slider Box",
		tb = Text Box( "Value: " || Char( sliderValue ) ),
		sb = Slider Box(
			0,
			1,
			sliderValue,
			tb << Set Text( "Value: " || Char( sliderValue ) )
		)
	)
);

```

### Spacer Box

**Syntax:** y = Spacer Box( <Size( x, y )>, <Color( c )>)

**Description:** Returns a display box that can be used to maintain space between other display boxes or fill a cell in a Lineup Box. The Size arguments are specified in pixels, and the Color argument is any valid JSL color.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Lineup Box( N Col( 3 ),
		Text Box( "a" ),
		Spacer Box(),
		Text Box( "b" ),
		Spacer Box(),
		Text Edit Box( "Under Spacer Box" )
	)
);

```

### Spin Box

**Syntax:** y = Spin Box( <script> )

**Description:** Returns a display box to show a button with up/down controls.  The script argument is invoked with an argument that indicates the direction of the arrow clicked (negative is down, positive is up).  A magnitude of 1 indicates a single click, while larger values can be used to indicate a repeating action.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Lineup Box(
		2,
		nb = Number Edit Box( 3 ),
		sb = Spin Box( Function( {value}, nb << Increment( value ) ) )
	)
);
nb << Set Increment( 1 );

```

### String Col Box

**Syntax:** y = String Col Box( title, {strings} )

**Description:** Returns a display box to show the strings specified by the strings argument, which is a list of character strings.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Outline Box( "Table",
		Table Box(
			String Col Box( "names", {"x", "y", "z"} ),
			Number Col Box( "values", {11, 22, 33} ),
			Plot Col Box( "values", {11, 22, 33} )
		)
	)
);

```

### String Col Edit Box

**Syntax:** y = String Col Edit Box( title, {strings} )

**Description:** Returns a display box to show the strings specified by the strings argument, which is a list of character strings.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
a = b = c = "";
New Window( "Example",
	Modal,
	<<Return Result,
	Outline Box( "Table", Table Box( seb = String Col Edit Box( "names", {a, b, c} ) ) )
);

```

### Tab Box

**Syntax:** y = Tab Box( Tab Page Box(...), TabPageBox(...), ... )

**Description:** Creates a tabbed-page panel in a display box window.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Tab Box(
		"alpha",
		Panel Box( "panel", Text Box( "text" ) ),
		"beta",
		Popup Box( {"x", ex = 1, "y", ex = 2} )
	)
);

```

### Tab Page Box

**Syntax:** y = Tab Page Box( <Title("string")>, <Tip(0|1)>,  <Closeable(0|1)>, <Icon("string")>, <Moveable(0|1)>, contents)

**Description:** Returns a display box that that can be used in a Tab Box or as a stand-alone container with title. Recognized options include Title(string) to specify a title, Tip(string) to specify a tooltip, Closeable(0|1) to specify whether the page can be closed, Icon(string) to specify the icon, and Moveable(0|1) to specify whether the page can be moved.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Tab Box(
		tp = Tab Page Box( Title( "alpha" ), Panel Box( "panel", Text Box( "text" ) ) ),
		Tab Page Box( Title( "beta" ), Popup Box( {"x", ex = 1, "y", ex = 2} ) )
	)
);

```

### Table Box

**Syntax:** y = Table Box( displayBox, ... )

**Description:** Returns a display box that composes a table of the String Col Box, Number Col Box, and Plot Col Box column display boxes provided by the arguments.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Outline Box( "Table",
		Table Box(
			String Col Box( "names", {"x", "y", "z"} ),
			Number Col Box( "values", {11, 22, 33} ),
			Plot Col Box( "values", {11, 22, 33} )
		)
	)
);

```

### Text Box

**Syntax:** y = Text Box( text, <<Justify Text( strPos ), <<Set Wrap( width ) )

**Description:** Constructs a display box that contains the text in the string argument text. The optional arguments are available to control the text justification or set the text wrap width. The argument for Justify Text should be a string containing left, right, or center.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Justification Example",
	Outline Box( "text",
		V List Box(
			Text Box(
				"Text implicitly justified over multiple lines:",
				<<Set Wrap( 100 )
			),
			Text Box( " " ),
			Text Box(
				"Text left justified over multiple lines:",
				<<Justify Text( "left" ),
				<<Set Wrap( 100 )
			),
			Text Box( " " ),
			Text Box(
				"Text center justified over multiple lines:",
				<<Justify Text( "center" ),
				<<Set Wrap( 100 )
			),
			Text Box( " " ),
			Text Box(
				"Text right justified over multiple lines:",
				<<Justify Text( "right" ),
				<<Set Wrap( 100 )
			)
		)
	)
);

```

### Text Edit Box

**Syntax:** y = Text Edit Box( text, <<Password Style( bool ), <<Set Script( script ), <<Set Width( value ) )

**Description:** Constructs an editable box that contains the quoted string text, returning the display box reference. The optional arguments are available to control the display of the text, to attach a script to the text box, and to set the width in pixels of the text box. Specifying Set Width(-1) forces a resize to content. Note that a script can be attached to the text edit box either by adding the script as an optional argument or by sending the Set Script message.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example: Text Edit Box",
	Outline Box( "Picker Example",
		H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) )
	),
	Outline Box( "Text Edit Box with password style Example",
		H List Box(
			Text Box( "Enter password:    " ),
			exq = Text Edit Box( "",
				Password Style( 1 ),
				Set Script( Print( "changed!" ) )
			)
		),
		Button Box( "print to log", Set Script( Print( exq << Get Text() ) ) ),
		Button Box( "hide password", Set Script( exq << Password Style( 1 ) ) ),
		Button Box( "show password", Set Script( exq << Password Style( 0 ) ) )
	)
); // "look in the log window"

```

### Text Seg

**Syntax:** seg = Text Seg("text")

**JMP Version Added:** 17

```js

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( ts1 = Text Seg( "default location fixed bottom left" ) );

```

### This Project

**Syntax:** project = this project()

**Description:** From within a project, returns the corresponding project object. Outside of a project, returns nothing.

**JMP Version Added:** 14

```js

Names Default To Here( 1 );
If(
	Is Empty( This Project() ), Print( "Project: (none)" ),
	Print( "Project: " || (This Project() << Get Window Title()) ),
);

```

### Tree Box

**Syntax:** tree = Tree Box( <{rootnodes}>, <Size( x, y )>, <Multiselect( 0|1 )> )

**Description:** Constructs a display box to show hierarchical information.

**JMP Version Added:** Before version 14

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
                                        
New Window( "TreeBox", tree = Tree Box( {root1, root2}, Size( 300, 200 ) ) );

```

### Tree Node

**Syntax:** node = Tree Node( <label> )

**Description:** Constructs a tree node intended for display within a Tree Box.

**JMP Version Added:** Before version 14

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
                                        
New Window( "TreeBox Nodes", tree = Tree Box( {root1, root2}, Size( 300, 200 ) ) );

```

### Triangulation

**Syntax:** triangulation = Triangulation( X(Column1, Column2), < Y(Column) > )

**Description:** Returns an object containing the Delaunay triangulation of the given point set. The optional Y will be averaged for duplicate points, and all points in the output will be unique.

**JMP Version Added:** Before version 14

**Example 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
tri = Triangulation( X( :X, :Y ), Y( :POP ) );

```

**Example 2**

```js

Names Default To Here( 1 );
tri = Triangulation( X( [0 0 1 1], [0 1 0 1] ), Y( [0 1 2 3] ) );

```

### Unlineup Box

**Syntax:** y = UnLineup Box(displayBoxArgs, ... )

**Description:** Returns a display box that temporarily suspends the column layout of a Lineup Box. The child of the Unlineup Box will be stretched to span all columns of the Lineup Box.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
New Window( "unlineup",
	Lineup Box( N Col( 2 ),
		Unlineup Box( Text Box( "First Section", <<Justify Text( "Center" ) ) ),
		Button Box( "First Section 1" ),
		Button Box( "First Section 2" ),
		Unlineup Box( Text Box( "Second Section", <<Justify Text( "Center" ) ) ),
		Button Box( "Second Section 1" ),
		Button Box( "Second Section 2" )
	)
);

```

### V Center Box

**Syntax:** y = V Center Box( <childbox> )

**Description:** Returns a display box with the childbox display box argument centered in the vertical space defined by the maximum size of that child and all the other siblings of the center box.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "test",
	H List Box(
		V Center Box( Text Box( "V+V" ) ),
		V List Box(
			Text Box( "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm" ),
			H Center Box( Text Box( "H+H" ) ),
			Text Box( "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm" ),
			Text Box( "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm" ),
			Text Box( "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm" ),
			Text Box( "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm" )
		)
	)
);

```

### V List Box

**Syntax:** y = V List Box( <Align( center|right )>, displayBox, ... )

**Description:** Returns a display box that arranges the display boxes provided by the arguments in a vertical layout. The <<Hold message tells the sheet to own the report(s) that will be excerpted. The optional Align argument allows for right or center alignment of the contents inside the display box.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Outline Box( "Picker",
		V List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) )
	)
);

```

### V Scroll Box

**Syntax:** y = V Scroll Box( <Size( y )>, displayBox )

**Description:** Returns a display box that positions a larger child box using a vertical scroll bar.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Outline Box( "Picker",
		V Scroll Box(
			Size( 100 ),
			V List Box(
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) )
			),
			<<Set Stretch( "Window", "Window" )
		)
	)
);

```

### V Sheet Box

**Syntax:** y = V Sheet Box( <<Hold( rpt ), displayBox, ... )

**Description:** Returns a display box that arranges the display boxes provided by the arguments in a vertical layout. The <<Hold message tells the sheet to own the report(s) that will be excerpted. The optional Align argument allows for right or center alignment of the contents inside the display box.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Example",
	V Sheet Box(
		<<Hold( Bivariate( Y( :weight ), X( :height ), Fit Line() ) ),
		<<Hold(
			Distribution(
				Automatic Recalc( 1 ),
				Continuous Distribution(
					Column( :height ),
					Horizontal Layout( 1 ),
					Vertical( 0 ),
					Outlier Box Plot( 0 )
				)
			)
		),
		<<Hold( Treemap( Categories( :age ) ) ),
		<<Hold(
			Bubble Plot(
				X( :height ),
				Y( :weight ),
				Sizes( :age ),
				Coloring( :sex ),
				Circle Size( 6.226 ),
				All Labels( 0 )
			)
		),
		H Sheet Box(
			Sheet Part( "weight by height", Excerpt Box( 1, {Picture Box( 1 )} ) ),
			Sheet Part( "height", Excerpt Box( 2, {Picture Box( 1 )} ) )
		),
		H Sheet Box(
			Sheet Part( "", Excerpt Box( 3, {Picture Box( 1 )} ) ),
			Sheet Part( "height by weight", Excerpt Box( 4, {Picture Box( 1 )} ) )
		)
	)
);

```

### V Splitter Box

**Syntax:** y = V Splitter Box( <Size(x,y)>, displayBox, ... )

**Description:** Returns a display box that arranges other display boxes vertically, with interactive control of sizes. Child sizes are specified as a proportion of the width or height of the Splitter Box. The optional Size argument is only used for the top-most Splitter Box; lower level boxes are sized like any other child box.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Splitter",
	V Splitter Box(
		Size( 800, 600 ),
		H Splitter Box( graph = Graph Box(), Script Box(), <<Sizes( {0.6, 0.4} ) ),
		H Splitter Box(
			pict = Picture Box( Open( "$SAMPLE_IMAGES/tile.jpg", jpg ) ),
			spacer = Spacer Box(),
			<<Sizes( {0.4, 0.6} )
		)
	)
);
graph[FrameBox( 1 )] << Set Stretch( "Window", "Window" );
pict << Set Min Size( 100, 100 );
pict << Set Max Size( 500, 500 );
pict << Set Stretch( "Window", "Window" );
spacer << Set Fill( 1 );
spacer << Color( "Red" );
spacer << Set Stretch( "Window", "Window" );

```

### Web Browser Box

**Syntax:** wb = Web Browser Box( url )

**Description:** Returns a display box to view a web page, specified by the url string argument.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example", wb = Web Browser Box() );
wb << Navigate( "http://www.jmp.com" );
wb << Set Stretch( "Window", "Window" );
wb << Set Max Size( 10000, 10000 );

```

### Window

**Syntax:** y = Window( <string|int> )

**Description:** This function is deprecated and retained only for backward compatibility with existing scripts. For new scripts, use Get Window() or Get Window List().

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Window( "Big Class" );

```

### With Window Handler

**Syntax:** With Window Handler( JSL Code, Handler Function )

**Description:** Runs a block of code with a function to be called each time a new window is created.

**JMP Version Added:** 17

```js

Names Default To Here( 1 );
With Window Handler(
	New Window( "My Window" ),
	Function( {window},
		Print( window << get window title() );
		window << close window();
	)
);

```

### Wrap List Box

**Syntax:** y = Wrap List Box( displayBox, ... )

**Description:** Returns a display box that arranges the display boxes provided by the arguments in a horizontal layout, but will wrap that list when printing.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "WrapListBox",
	Wrap List Box(
		Graph Box( framesize( 150, 100 ), Text( {50, 50}, "1" ) ),
		Graph Box( framesize( 150, 100 ), Text( {50, 50}, "2" ) ),
		Graph Box( framesize( 150, 100 ), Text( {50, 50}, "3" ) ),
		Graph Box( framesize( 150, 100 ), Text( {50, 50}, "4" ) )
	)
);

```

