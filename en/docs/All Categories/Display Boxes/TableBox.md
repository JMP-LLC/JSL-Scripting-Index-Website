# TableBox



## Associated Constructors

### Table Box

**Syntax:** y = Table Box( displayBox, ... )

**Description:** Returns a display box for a table consisting of one or more columns.

**Example 1**

```jsl

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

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Baltic.jmp" );
d = Distribution( Continuous Distribution( Column( :ls ) ) );
rpt = d << report;
tb = rpt[Table Box( 1 )];
tb << Select;

```

## Item Messages

### Add Row

**Syntax:** obj &lt;&lt; Add Row( {values,...} )

**Description:** Adds a row of data to the table

```jsl

Names Default To Here( 1 );
New Window( "test",
	tb = Table Box(
		String Col Box( "string col", {"a"} ),
		Number Col Box( "number col", {1} )
	)
);
tb << add row( {"b", 2} );

```

### Bootstrap

**Syntax:** obj &lt;&lt; Bootstrap( nsample, Random Seed(number), Fractional Weights(0|1), Split Selected Column(0|1), Discard Stacked Table if Split Works(0|1) )

**Description:** Bootstraps this analysis: repeating it many times with different resampling weights and collecting tables as selected.

```jsl

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

### Copy Selected Table Rows

**Syntax:** obj &lt;&lt; Copy Selected Table Rows

**Description:** Copy the contents of the selected rows to the clipboard

### Copy Table

**Syntax:** obj &lt;&lt; Copy Table

**Description:** Copy the contents of the table to the clipboard

### Delete Row

**Syntax:** obj &lt;&lt; Delete Row( row number )

**Description:** Deletes a row of data to the table

```jsl

Names Default To Here( 1 );
New Window( "test",
	tb = Table Box(
		String Col Box( "string col", {"a", "b"} ),
		Number Col Box( "number col", {1, 2} )
	)
);
tb << delete row( 1 );

```

### Filter Where

**Syntax:** obj &lt;&lt; Filter Where

**Description:** Filters rows in the table based on the values in that row.

```jsl

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

### Get

**Syntax:** obj &lt;&lt; Get

**Description:** Returns the entries of the table in list form.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Baltic.jmp" );
d = Distribution( Continuous Distribution( Column( :ls ) ) );
rpt = d << report;
tb = rpt[Table Box( 1 )];
Print( tb << Get );

```

### Get As Matrix

**Syntax:** obj &lt;&lt; Get As Matrix( &lt;"Visible"&gt; )

**Description:** Returns the numeric entries of the table in matrix form.  If the Visible option is specified, only visible columns will be included.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Baltic.jmp" );
d = Distribution( Continuous Distribution( Column( :ls ) ) );
rpt = d << report;
tb = rpt[Table Box( 1 )];
Print( tb << Get As Matrix );

```

### Get Base Data Font

**Syntax:** font = obj &lt;&lt; Get Base Data Font

**Description:** Returns the base font used for text drawn by the box. Base fonts are predefined names such as Title, Text, Annotation, and others, which are specified in the Preferences for fonts.

```jsl

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

**Syntax:** font = obj &lt;&lt; Get Base Title Font

**Description:** Returns the base font used for text drawn by the box. Base fonts are predefined names such as Title, Text, Annotation, and others, which are specified in the Preferences for fonts.

```jsl

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

### Get Click Sort

**Syntax:** 0|1 = obj &lt;&lt; Get Click Sort

**Description:** 1 if the table can be sorted by single clicking on a column header, otherwise 0

```jsl

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

**Syntax:** obj &lt;&lt; Get Column Borders( state=0|1 )

**Description:** Returns 1 if columns borders are currently being drawn

```jsl

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

**Syntax:** obj &lt;&lt; Get Column Group Borders( state=0|1 )

```jsl

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

### Get Context Menu Item State

**Syntax:** 0|1|-1 = obj &lt;&lt; Get Context Menu Item State( index )

**Description:** Gets the context menu item state of index menu item. The state will be normal (0), checked (1), or disabled (-1)

```jsl

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

**Syntax:** list = obj &lt;&lt; Get Context Menu Script

**Description:** Returns the context menu script attached to the calling object.

```jsl

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

**Syntax:** obj &lt;&lt; Get Context Menu Submenu( index )

**Description:** Returns the number of submenus under the given menu item

```jsl

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

**Syntax:** obj &lt;&lt; Get Data Font Name

**Description:** Returns the name of the font.

```jsl

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

**Syntax:** obj &lt;&lt; Get Data Font Scale

**Description:** Returns the current scale factor for font.

```jsl

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

**Syntax:** obj &lt;&lt; Get Data Font Size

**Description:** Returns the size of the font.

```jsl

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

**Syntax:** obj &lt;&lt; Get Data Font Style

**Description:** Returns the font style name.

```jsl

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

### Get Font

**Syntax:** obj &lt;&lt; Get Font

```jsl

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

### Get Heading Column Borders

**Syntax:** obj &lt;&lt; Get Heading Column Borders( state=0|1 )

**Description:** Returns 1 if the column headers for the table currently have borders

```jsl

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

**Syntax:** obj &lt;&lt; Heading Underline Color( color );color = obj &lt;&lt; Get Heading Underline Color

```jsl

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

### Get Locked Columns

**Syntax:** obj &lt;&lt; Get Locked Columns

**Description:** The number of columns that cannot be dragged with the hand cursor or have any columns dropped before them.

```jsl

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

### Get Names

**Syntax:** obj &lt;&lt; Get Names

**Description:** Returns a list of the column names

```jsl

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

### Get Row Border Color

**Syntax:** obj &lt;&lt; Row Border Color( color );color = obj &lt;&lt; Get Row Border Color

```jsl

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

**Syntax:** obj &lt;&lt; Get Row Borders( state=0|1 )

**Description:** Returns 1 if lines are drawn above and below each row

```jsl

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

**Syntax:** obj &lt;&lt; Get Row Change Function

**Description:** Returns the expression that is evaluated when a row is selected.

```jsl

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

**Syntax:** obj &lt;&lt; Row Height Scale( number );number = obj &lt;&lt; Get Row Height Scale

**Description:** Scales the default height or the rows of a table. The default value is 1.

```jsl

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

### Get Row Vertical Alignment

**Syntax:** obj &lt;&lt; Row Vertical Alignment( "Top"|"Center"|"Baseline"|"Bottom" );"Top"|"Center"|"Baseline"|"Bottom" = obj &lt;&lt; Get Row Vertical Alignment

**Description:** Sets the vertical alignment of the text or numbers in the rows of a table

```jsl

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

**Syntax:** obj &lt;&lt; Get Selectable Rows

**Description:** Returns true if the table box currently allows row selection

```jsl

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

**Syntax:** obj &lt;&lt; Get Selected Row Color

**Description:** Gets the background color for selected rows

```jsl

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

**Syntax:** obj &lt;&lt; Get Selected Rows

**Description:** Returns a matrix of row numbers that are selected.

```jsl

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

**Syntax:** obj &lt;&lt; Get Shade Alternate Rows( state=0|1 )

**Description:** Returns 1 if every other row is shaded

```jsl

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

**Syntax:** obj &lt;&lt; Get Shade Cells( state=0|1 )

**Description:** Returns 1 if the cell area of the table has a shaded background

```jsl

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

**Syntax:** obj &lt;&lt; Get Shade Headings( state=0|1 )

**Description:** Returns 1 if the column headers for the table are currently shaded

```jsl

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

### Get Title Font

**Syntax:** obj &lt;&lt; Get Title Font

```jsl

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

**Syntax:** obj &lt;&lt; Get Title Font Name

**Description:** Returns the name of the font.

```jsl

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

**Syntax:** obj &lt;&lt; Get Title Font Scale

**Description:** Returns the current scale factor for font.

```jsl

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

**Syntax:** obj &lt;&lt; Get Title Font Size

**Description:** Returns the size of the font.

```jsl

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

**Syntax:** obj &lt;&lt; Get Title Font Style

**Description:** Returns the font style name.

```jsl

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

### Get Underline Headings

**Syntax:** obj &lt;&lt; Get Underline Headings( state=0|1 )

**Description:** Returns 1 if column headings are underlined

```jsl

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

### Group By Column

**Syntax:** obj &lt;&lt; Group By Column( &lt;column index or title&gt;, &lt;ascending=0|1&gt; )

**Description:** Groups all rows with the same value together and sorts the table based on the those groups. Default sort order is descending.

```jsl

Names Default To Here( 1 );
dt = Open( "$sample_data\big class.jmp" );
New Window( "Test", dtb = Data Table Box( dt ) );
dtb << sort by column( 4 );
dtb << group by column( 3 );
dtb << set click sort( 1 );

```

### Heading Underline Color

**Syntax:** obj &lt;&lt; Heading Underline Color( color );color = obj &lt;&lt; Get Heading Underline Color

```jsl

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

### Insert Row

**Syntax:** obj &lt;&lt; Insert Row( row number, {values,...} )

**Description:** Inserts a row of data to the table

```jsl

Names Default To Here( 1 );
New Window( "test",
	tb = Table Box(
		String Col Box( "string col", {"a"} ),
		Number Col Box( "number col", {1} )
	)
);
tb << insert row( 1, {"b", 2} );

```

### Make Combined Data Table

**Syntax:** obj &lt;&lt; Make Combined Data Table

**Description:** Makes a data table that also searches the report for report tables with the same columns and combine all of these into the new data table.

```jsl

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

**Syntax:** obj &lt;&lt; Make Into Data Table( &lt;Invisible(bool) | Private(bool)&gt; )

**Description:** Creates a new data table that contains the values in the TableBox.

**Example 1**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Baltic.jmp" );
d = Distribution( Continuous Distribution( Column( :ls ) ) );
rpt = d << report;
tb = rpt[Table Box( 1 )];
tb << Make Into Data Table;

```

**Example 2**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Baltic.jmp" );
d = Distribution( Continuous Distribution( Column( :ls ) ) );
rpt = d << report;
tb = rpt[Table Box( 1 )];
tb << Make Into Data Table( invisible( 1 ) );

```

### Reorder Columns

**Syntax:** obj &lt;&lt; Reorder Columns( from column index,to column index )

**Description:** Reorders the column that positions from column index in the place of to column index.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Baltic.jmp" );
d = Distribution( Continuous Distribution( Column( :ls ) ) );
rpt = d << report;
tb = rpt[Table Box( 1 )];
Wait( 1 );
tb << Reorder Columns( 1, 3 );

```

### Reset Filter

**Syntax:** obj &lt;&lt; Reset Filter

**Description:** Clears an existing "filter where" message and shows all the rows in the table.

```jsl

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

**Syntax:** obj &lt;&lt; Reset Style

**Description:** Resets the table style based on preference settings

```jsl

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

### Row Border Color

**Syntax:** obj &lt;&lt; Row Border Color( color );color = obj &lt;&lt; Get Row Border Color

```jsl

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

**Syntax:** obj &lt;&lt; Row Height Scale( number );number = obj &lt;&lt; Get Row Height Scale

**Description:** Scales the default height or the rows of a table. The default value is 1.

```jsl

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

**Syntax:** obj &lt;&lt; Row Vertical Alignment( "Top"|"Center"|"Baseline"|"Bottom" );"Top"|"Center"|"Baseline"|"Bottom" = obj &lt;&lt; Get Row Vertical Alignment

**Description:** Sets the vertical alignment of the text or numbers in the rows of a table

```jsl

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

### Select Where

**Syntax:** obj &lt;&lt; Select Where

**Description:** Selects rows in the table based on the values in that row.

```jsl

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

**Syntax:** obj &lt;&lt; Set Base Data Font( "Text"|"Heading"|"Title"|"Small"|"Mono"|"Formula Editor"|"Annotation"|"Axis"|"Marker"|"Axis Title"|"Graph Label"|"Legend"|"Graph Title"|"Caption"|"Data Table"|"Hover Label" )

**Description:** Sets the base font for text drawn by the box.

```jsl

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

**Syntax:** obj &lt;&lt; Set Base Title Font( "Text"|"Heading"|"Title"|"Small"|"Mono"|"Formula Editor"|"Annotation"|"Axis"|"Marker"|"Axis Title"|"Graph Label"|"Legend"|"Graph Title"|"Caption"|"Data Table"|"Hover Label" )

**Description:** Sets the base font for text drawn by the box.

```jsl

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

**Syntax:** obj &lt;&lt; Set Cell Changed Function( Function({thisBox, col box, row}, &lt;script&gt;;) )

**Description:** Sets a function that will be called whenever the user edits a cell in a column in the table

```jsl

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

**Syntax:** obj &lt;&lt; Set Click Sort( &lt;state=0|1&gt; )

**Description:** Allows the table so be sorted by single clicking on a column header

```jsl

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

**Syntax:** obj &lt;&lt; Set Column Borders( state=0|1 )

**Description:** Draw a line on each side of every column

```jsl

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

**Syntax:** obj &lt;&lt; Set Column Group Borders( state=0|1 )

```jsl

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

### Set Context Menu Item State

**Syntax:** obj &lt;&lt; Set Context Menu Item State( index, 0|1|-1 )

**Description:** Sets the context menu item at index to be normal (0), checked (1), or disabled (-1)

```jsl

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

**Syntax:** obj &lt;&lt; Set Context Menu Script( {"string",script,"string",script, ...} )

**Description:** Adds a context menu with the specified options and scripts to the box.

```jsl

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

**Syntax:** obj &lt;&lt; Set Context Menu Submenu( index, submenu count )

**Description:** Turns the "index" menu item into a submenu with "submenu count" menu items

```jsl

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

**Syntax:** obj &lt;&lt; Set Data Font( fontName, &lt;size&gt;, &lt;"bold italic underline strikeout"&gt;, &lt;angle&gt; )

**Example 1**

```jsl

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

```jsl

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

**Syntax:** obj &lt;&lt; Set Data Font Name( fontname )

**Description:** Sets the font for text strings.

```jsl

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

**Syntax:** obj &lt;&lt; Set Data Font Scale( f )

**Description:** Sets a scale factor for the current font. The scale factor will be applied to the size that is determined from the base font and point size.

```jsl

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

**Syntax:** obj &lt;&lt; Set Data Font Size( n )

**Description:** Sets the font size in points for text strings.

```jsl

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

**Syntax:** obj &lt;&lt; Set Data Font Style( style )

**Description:** Sets the font style for text strings. To set more than one style at once, place them in the same string, separated by spaces (see Example 2 below).

**Example 1**

```jsl

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

```jsl

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

### Set Heading Column Borders

**Syntax:** obj &lt;&lt; Set Heading Column Borders( state=0|1 )

**Description:** Column borders in headers

```jsl

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

### Set Locked Columns

**Syntax:** obj &lt;&lt; Set Locked Columns( number )

**Description:** Locks the first n columns so that cannot be dragged with the hand cursor or have any columns dropped before them.

```jsl

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

### Set Row Borders

**Syntax:** obj &lt;&lt; Set Row Borders( state=0|1 )

**Description:** Draw a line above and below each row

```jsl

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

**Syntax:** obj &lt;&lt; Set Row Change Function( Function( {thisBox}, &lt;script&gt; ) )

**Description:** Sets the expression that is evaluated when a row is selected.

```jsl

Names Default To Here( 1 );
New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Set Selectable Rows();
tb << set row change function( Function( {thisBox}, Print( thisBox << get selected rows ) ) );

```

### Set Scrollable

**Syntax:** obj &lt;&lt; Set Scrollable( rows, columns )

**Description:** Turns scrolling on or off for this TableBox.

```jsl

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

**Syntax:** obj &lt;&lt; Set Selectable Rows( state=0|1 )

**Description:** Makes the rows of this TableBox selectable or not.

```jsl

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

**Syntax:** obj &lt;&lt; Set Selected Row Color( color )

**Description:** Sets the background color for selected rows, only valid if "Set Selectable Rows" is set

```jsl

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

**Syntax:** obj &lt;&lt; Set Selected Rows( row matrix )

**Description:** Selects the given rows and deselects other rows.

```jsl

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

**Syntax:** obj &lt;&lt; Set Shade Alternate Rows( state=0|1 )

**Description:** Shade the background of every other row in the table

```jsl

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

**Syntax:** obj &lt;&lt; Set Shade Cells( state=0|1 )

**Description:** Shade the background of every cell in the table

```jsl

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

**Syntax:** obj &lt;&lt; Set Shade Headings( state=0|1 )

**Description:** Shade the background in column headings

```jsl

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

### Set Title Font

**Syntax:** obj &lt;&lt; Set Title Font( fontName, &lt;size&gt;, &lt;"bold italic underline strikeout"&gt;, &lt;angle&gt; )

**Example 1**

```jsl

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

```jsl

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

**Syntax:** obj &lt;&lt; Set Title Font Name( fontname )

**Description:** Sets the font for text strings.

```jsl

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

**Syntax:** obj &lt;&lt; Set Title Font Scale( f )

**Description:** Sets a scale factor for the current font. The scale factor will be applied to the size that is determined from the base font and point size.

```jsl

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

**Syntax:** obj &lt;&lt; Set Title Font Size( n )

**Description:** Sets the font size in points for text strings.

```jsl

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

**Syntax:** obj &lt;&lt; Set Title Font Style( style )

**Description:** Sets the font style for text strings. To set more than one style at once, place them in the same string, separated by spaces (see Example 2 below).

**Example 1**

```jsl

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

```jsl

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

**Syntax:** obj &lt;&lt; Set Underline Headings( state=0|1 )

**Description:** Draw a line underneath the column headings

```jsl

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

### Simulate

**Syntax:** obj &lt;&lt; Simulate( nsample, Random Seed(number), Out(column), In(column), Update(&lt;columns&gt;) )

**Description:** Performs a simulation by switching out a column with one that has a simulation formula.

```jsl

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

### Sort By Column

**Syntax:** obj &lt;&lt; Sort By Column( &lt;column index or title&gt;, &lt;ascending=0|1&gt; )

**Description:** Sorts all of the rows of the table based on the values in the given column. Default sort order is descending.

```jsl

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

## Shared Item Messages

### Add Line Annotation

**Syntax:** obj &lt;&lt; Add Line Annotation

**Description:** Adds a line on top of the display box.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Add Line Annotation( Line( 160, 235, 240, 235 ) );

```

### Add Pin Annotation

**Syntax:** obj &lt;&lt; Add Pin Annotation

**Description:** Adds a pinned annotation on top of a display box. Most attributes (such as Index Row, UniqueID and FoundPt) are designed for internal use only.

```jsl

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

**Syntax:** obj &lt;&lt; Add Polygon Annotation

**Description:** Adds a polygon on top of the display box.

```jsl

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

### Add Simple Shape Annotation

**Syntax:** obj &lt;&lt; Add Simple Shape Annotation

**Description:** Adds a simple shape on top of the display box.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Add Simple Shape Annotation( Oval( 210, 100, 250, 75 ) );
rbiv << Add Simple Shape Annotation( Rectangle( 70, 180, 95, 215 ) );

```

### Add Text Annotation

**Syntax:** obj &lt;&lt; Add Text Annotation

**Description:** Adds text on top of the display box.

```jsl

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

**Syntax:** obj &lt;&lt; Append( db2 )

**Description:** Add db2 to the display tree after db.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << append( Text Box( "=== below ===" ) );

```

### Background Color

**Syntax:** obj &lt;&lt; Background Color( color );color = obj &lt;&lt; Get Background Color

**Description:** If the background color is set, the box is filled with the background color prior to drawing its content. If the background color is not set, the background and content of the containing boxes show through.

```jsl

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

### Border

**Syntax:** obj &lt;&lt; Border( sides );sides = obj &lt;&lt; Get Border

**Description:** Borders are solid lines drawn around the outside of a display box. If a single value is provided, it will be applied to all sides. If two values are specified, they will be applied to horizontal and vertical borders.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Show( tb << Get Border );
Wait( 1 );
tb << Border( 1 );

```

### Border Color

**Syntax:** obj &lt;&lt; Border Color( color );color = obj &lt;&lt; Get Border Color

**Description:** Optional color to override the default color for box borders.

```jsl

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

**Syntax:** obj &lt;&lt; Bring Window To Front

**Description:** Brings the window to the front.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << Run Script( "Bivariate" );
w << Bring Window To Front;

```

### Child

**Syntax:** obj &lt;&lt; Child

**Description:** Returns the child of the display box.

```jsl

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

**Syntax:** obj &lt;&lt; Class Name

**Description:** Returns the name of the display class for the display box.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
axisbox = rbiv[axis box( 1 )];
axisbox << Class Name();

```

### Clone Box

**Syntax:** obj &lt;&lt; Clone Box

**Description:** Makes a new copy of the display box.

```jsl

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

**Syntax:** obj &lt;&lt; Close Window( &lt;"NoSave"&gt; )

**Description:** Closes the window.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
w << Close Window;

```

### Copy Data

**Syntax:** obj &lt;&lt; Copy Data

**Description:** copies the tab-delimited data from a matrix or table to the clip board.

```jsl

Names Default To Here( 1 );
New Window( "x", mat = Matrix Box( [1 2 3, 4 5 6, 7 8 9] ) );
mat << CopyData;

```

### Copy Graph

**Syntax:** obj &lt;&lt; Copy Graph

**Description:** Puts a picture of the graph and axes on the clipboard.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
(rbiv[FrameBox( 1 )]) << Copy Graph();
"paste into a paint program";

```

### Copy Picture

**Syntax:** obj &lt;&lt; Copy Picture

**Description:** Puts a picture of the display box on the clipboard.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Copy Picture();

```

### Delete Box

**Syntax:** obj &lt;&lt; Delete Box

**Description:** Delete the display box.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
axisbox = rbiv[axis box( 1 )];
axisbox << Delete Box();

```

### Deselect

**Syntax:** obj &lt;&lt; Deselect

**Description:** Deselects this object for use by Edit menu commands.

```jsl

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

**Syntax:** obj &lt;&lt; Dispatch( {outline node, ...}, display element, display element type, command )

**Description:** Send command to a specific part of a display tree.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Dispatch( {}, "Bivar Plot", FrameBox, {Marker Size( 3 )} );

```

### Enabled

**Syntax:** obj &lt;&lt; Enabled( state=0|1 );state = obj &lt;&lt; Get Enabled

**Description:** An object that is not enabled will not respond to keyboard or mouse input. This property is inherited by child objects, so a container object that is disabled will cause all descendent objects to be disabled.

```jsl

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

### Find

**Syntax:** obj &lt;&lt; Find

**Description:** Returns a display box with the given argument.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
axisbox = rbiv << Find( axis box( 1 ) );
axisbox << Delete();

```

### Get Annotation

**Syntax:** obj &lt;&lt; Get Annotation

**Description:** Returns the first annotation that is anchored to this display box. Other annotations can be accessed by using Sib() on the result.

```jsl

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

### Get Background Color

**Syntax:** obj &lt;&lt; Background Color( color );color = obj &lt;&lt; Get Background Color

**Description:** If the background color is set, the box is filled with the background color prior to drawing its content. If the background color is not set, the background and content of the containing boxes show through.

```jsl

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

### Get Border

**Syntax:** obj &lt;&lt; Border( sides );sides = obj &lt;&lt; Get Border

**Description:** Borders are solid lines drawn around the outside of a display box. If a single value is provided, it will be applied to all sides. If two values are specified, they will be applied to horizontal and vertical borders.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Show( tb << Get Border );
Wait( 1 );
tb << Border( 1 );

```

### Get Border Color

**Syntax:** obj &lt;&lt; Border Color( color );color = obj &lt;&lt; Get Border Color

**Description:** Optional color to override the default color for box borders.

```jsl

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

### Get Content Size

**Syntax:** obj &lt;&lt; Get Content Size

**Description:** Returns the content size within the window.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
c = w << Get Content Size();
Show( c );

```

### Get Display Path

**Syntax:** obj &lt;&lt; Get Display Path( parent box, &lt;receiver expr&gt;, &lt;Mode("XPath"|"Subscript")&gt; )

**Description:** Gets a relatively robust expression to navigate between parent box and obj. This path is not guaranteed to be stable across JMP releases. The receiver expr is incorporated into the output expression if provided. If not, the expression provided for parent box is used instead. As shown in the example, this message is mainly useful for increasing the robustness of a path you already have available. The XPath mode is default.

**Basic**

```jsl

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

```jsl

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

**Syntax:** obj &lt;&lt; Enabled( state=0|1 );state = obj &lt;&lt; Get Enabled

**Description:** An object that is not enabled will not respond to keyboard or mouse input. This property is inherited by child objects, so a container object that is disabled will cause all descendent objects to be disabled.

```jsl

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

### Get HTML

**Syntax:** obj &lt;&lt; Get HTML( &lt;format&gt; )

**Description:** Returns a string containing HTML source for the display box.

**Example 1**

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
win = New Window( "Example", a = Text Box( "Example Text" ) );
a << Set Text( win << Get HTML );

```

**Example 2**

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), Means( 1 ), Mean Diamonds( 1 ) );
Save Text File( "$TEMP/Oneway.html", obj << Get HTML( "svg" ) ); // Prefer <<Save HTML
Web( "$TEMP/Oneway.html", JMPWindow );

```

### Get Height

**Syntax:** width = obj &lt;&lt; Get Height

**Description:** Returns the height of the display box.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
fb = r[framebox( 1 )];
fb << Get Height;

```

### Get Horizontal Alignment

**Syntax:** obj &lt;&lt; Horizontal Alignment( "Default"|"Left"|"Center"|"Right" );"Default"|"Left"|"Center"|"Right" = obj &lt;&lt; Get Horizontal Alignment

**Description:** Horizontal alignment controls the positioning of the box within a container if the box does not fill the entire space.

```jsl

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

**Syntax:** obj &lt;&lt; Get Journal

**Description:** Returns a string containing journal source for the display box.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
Print( rbiv << Get Journal );

```

### Get Margin

**Syntax:** obj &lt;&lt; Margin( sides );sides = obj &lt;&lt; Get Margin

**Description:** Margin adds space between the border of the box and adjacent boxes. Use named arguments, or provide a list of values. If a single value is provided, it will be applied to all sides. If two values are specified, they will be applied to horizontal and vertical margins.

```jsl

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

**Syntax:** width,height = obj &lt;&lt; Get Max Size

**Description:** Returns the maximum size of this display box for purposes of auto-stretching.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/big class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
fb = r[framebox( 1 )];
fb << Get Max Size;

```

### Get Min Size

**Syntax:** width,height = obj &lt;&lt; Get Min Size

**Description:** Returns the minimum size of this display box for purposes of auto-stretching.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/big class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
fb = r[framebox( 1 )];
fb << Get Min Size;

```

### Get Namespace

**Syntax:** obj &lt;&lt; Get Namespace

**Description:** Returns the namespace associated with this display object.

```jsl

Names Default To Here( 1 );
//This message applies to all display objects
x = 1;
w = New Window( "Test", b = Button Box( "Press me" ) );
b:x = 2;
ns = b << GetNamespace();
Show( ns:x, x );

```

### Get On Close

**Syntax:** obj &lt;&lt; Get On Close

**Description:** Returns the script or function that will run when the window closes.

```jsl

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

**Syntax:** obj &lt;&lt; Padding( sides );sides = obj &lt;&lt; Get Padding

**Description:** Padding adds space between the content and the border of the box. Use named arguments, or provide a list of values. If a single value is provided, it will be applied to all sides. If two values are specified, they will be applied to horizontal and vertical padding.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Show( tb << Get Padding );
tb << Border( 1 );
Wait( 1 );
tb << Padding( Left( 20 ), Top( 20 ), Right( 20 ), Bottom( 20 ) );

```

### Get Page Setup

**Syntax:** obj &lt;&lt; Get Page Setup

**Description:** Get page setup information for PDF

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = New Window( "Window", Text Box( "Page Setup Test" ) );
w << get page setup();

```

### Get Picture

**Syntax:** obj &lt;&lt; Get Picture( &lt;Scale(factor)&gt;, &lt;Type("Bitmap" | "Scalable")&gt;, &lt;View("Picture" | "Screen" | "Print"), &lt;Appearance("Default" | "Current")&gt;, &lt;SubRect(Left(number), Top(number), Right(number), Bottom(number))&gt; )

**Description:** Captures db as an Image Object. The optional Scale argument will render the image at a scaled resolution. Scaling requires that the display box be stretchable. The Type argument determines whether the result will be a scalable vector image or a bitmap. By default a scalable image is returned, which is suitable for saving to vector formats like PDF. The View option changes the behavior of some boxes. The default option of "Picture" draws the report as it would when exporting to an image format, with scrolled areas fully shown. View mode of "Screen" draws the report as seen on-screen, and "Print" draws the report as it does when printing, without any of the page setup features. The SubRect option will capture a portion of the resulting image rather than a full image. The Appearance option can change from the "Default" output colors to the "Current" colors as seen on-screen. The View, SubRect, and Appearance options are only supported for Type "Bitmap".

**Default**

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
New Window( "Example", rbiv << Get Picture );

```

**Scale**

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv[FrameBox( 1 )] << Set Stretch( "Window", "Window" );
New Window( "Example", rbiv << Get Picture( Scale( 1.5 ) ) );

```

**View and Appearance**

```jsl

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

**Syntax:** project = obj &lt;&lt; Get Project()

**Description:** Returns the parent project of the window, or Empty() if it is not in a project.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
c = w << Get Project();
Show( c );

```

### Get Properties

**Syntax:** obj &lt;&lt; Get Properties

**Description:** Returns an associative array that contains the display box&apos;s properties and their values.

```jsl

Names Default To Here( 1 );
New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Get Properties;

```

### Get Property

**Syntax:** obj &lt;&lt; Get Property( "property" )

**Description:** Returns the current setting for the named property.

```jsl

Names Default To Here( 1 );
New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Get Property( "Enabled" );

```

### Get Property List

**Syntax:** obj &lt;&lt; Get Property List

**Description:** Returns a list of properties the display box has.

```jsl

Names Default To Here( 1 );
New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Get Property List;

```

### Get RTF

**Syntax:** obj &lt;&lt; Get RTF( &lt;format&gt; )

**Description:** Returns a string containing RTF source for the display box.

**Example 1**

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
win = New Window( "Example", a = Text Box( "Example Text" ) );
a << Set Text( win << Get RTF );

```

**Example 2**

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), Means( 1 ), Mean Diamonds( 1 ) );
Save Text File( "$TEMP/Oneway.rtf", obj << Get RTF( "png" ) ); // Prefer <<Save RTF
Open( "$TEMP/Oneway.rtf" );

```

### Get Row States

**Syntax:** rs = obj &lt;&lt; Get Row States( &lt;dt&gt; )

**Description:** Returns a vector containing the row state for every row in the given data table or the current data table. The row states can come from the table, or from the filter context of the box.

**Single table**

```jsl

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

```jsl

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

### Get Show Window

**Syntax:** obj &lt;&lt; Get Show Window

**Description:** Returns the visibility of the window.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 1 );
w << Show Window( 0 );
Wait( 2 );
Print( w << Get Show Window() );

```

### Get Size

**Syntax:** width,height = obj &lt;&lt; Get Size

**Description:** Returns the size of the display box.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/big class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
fb = r[framebox( 1 )];
Print( fb << Get Size );

```

### Get Stretch

**Syntax:** x,y = obj &lt;&lt; Get Stretch

**Description:** Returns the stretching flags for this display box in the horizontal and vertical directions.

```jsl

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

**Syntax:** obj &lt;&lt; Get Text

**Description:** Returns a string containing the text of the display box.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
win = New Window( "Example", a = Text Box( "Example Text" ) );
a << Set Text( win << Get Text );

```

### Get Text Color

**Syntax:** obj &lt;&lt; Text Color( color );color = obj &lt;&lt; Get Text Color

**Description:** Text will be drawn using the text color if it has been set. If the property has not been set, the box will inherit the text color of the containing box.

```jsl

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

### Get UI Only

**Syntax:** obj &lt;&lt; UI Only( state=0|1 );state = obj &lt;&lt; Get UI Only

### Get User Resizable

**Syntax:** obj &lt;&lt; User Resizable;obj &lt;&lt; Get User Resizable

**Description:** If the box is user resizable, the cursor will change near the bottom and right edges to allow drag-and-drop resizing.

```jsl

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

**Syntax:** obj &lt;&lt; Vertical Alignment( "Default"|"Top"|"Center"|"Bottom" );"Default"|"Top"|"Center"|"Bottom" = obj &lt;&lt; Get Vertical Alignment

**Description:** Vertical alignment controls the positioning of the box within a container if the box does not fill the entire space.

```jsl

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

**Syntax:** obj &lt;&lt; Visibility( "Visible"|"Hidden"|"Collapse" );"Visible"|"Hidden"|"Collapse" = obj &lt;&lt; Get Visibility

**Description:** Visibility determines whether a box is shown and whether it takes up space. The default value of "Visible" means that the object will be shown.  A "Hidden" box is not shown but still takes up space, while a "Collapsed" box takes up no space in the layout.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Show( tb << Get Visibility );
Wait( 1 );
tb << Visibility( "Collapse" );
Show( tb << Get Visibility );

```

### Get Web Support

**Syntax:** obj &lt;&lt; Get Web Support

**Description:** Return a number indicating the level of Interactive HTML support for the display object. 1 means some or all elements are supported. 0 means no support.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

### Get Width

**Syntax:** width = obj &lt;&lt; Get Width

**Description:** Returns the width of the display box.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/big class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
fb = r[framebox( 1 )];
fb << Get Width;

```

### Get Window Icon

**Syntax:** obj &lt;&lt; Get Window Icon

**Description:** Returns the window icon.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
t = w << Get Window Icon;
Show( t );

```

### Get Window Position

**Syntax:** obj &lt;&lt; Get Window Position

**Description:** Returns the position of the window.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
p = w << Get Window Position();
Show( p );

```

### Get Window Size

**Syntax:** obj &lt;&lt; Get Window Size

**Description:** Returns the size of the window.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
s = w << Get Window Size();
Show( s );

```

### Get Window Title

**Syntax:** obj &lt;&lt; Get Window Title

**Description:** Returns the window title.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
t = w << Get Window Title;
Show( t );

```

### Get Window View

**Syntax:** obj &lt;&lt; Get Window View

**Description:** Returns the current window view. Windows can be "Visible", "Invisible", or "Private".

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
Print( w << Get Window View() );

```

### Get XML

**Syntax:** obj &lt;&lt; Get XML( &lt;English(0|1)&gt;, &lt;NoData(0|1)&gt; )

**Description:** Retrieves the display tree formatted as XML. By default, strings are returned in the local language, and the XML includes data values within some boxes. Use the English option to return English strings where available. Use the NoData option to omit the data values within boxes, which can be very large for some display trees.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
win = New Window( "test", a = Text Box( "my test" ) );
a << set text( win << get xml );

```

### GetOffset

**Syntax:** x,y = obj &lt;&lt; GetOffset

**Description:** Returns the offset of this display box relative to the parent box. You might need to use the <<parent message in a loop to accumulate several offsets.

```jsl

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
					offset[1] < pt[1] < offset[1] + size[1] & offset[2] < pt[2] < offset[2]
					 + size[2]
				,
					fb << setbackgroundcolor( "red" ),
					fb << setbackgroundcolor( "blue" )
				);
			)
		)
	)
);

```

### Horizontal Alignment

**Syntax:** obj &lt;&lt; Horizontal Alignment( "Default"|"Left"|"Center"|"Right" );"Default"|"Left"|"Center"|"Right" = obj &lt;&lt; Get Horizontal Alignment

**Description:** Horizontal alignment controls the positioning of the box within a container if the box does not fill the entire space.

```jsl

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

### Inval

**Syntax:** obj &lt;&lt; Inval

**Description:** Invalidate the displaybox.  The window will update when either the <<UpdateWindow message is sent or the operating system has time for the update.

```jsl

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

**Syntax:** obj &lt;&lt; Is Dirty

**Description:** Gets the document&apos;s modified status. 1 means the document has been modified and will prompt for saving; 0 means the document is not modified.

```jsl

Names Default To Here( 1 );

ww = New Window( "Test", <<Script, "Open(\!"$SAMPLE_DATA\Big Class.jmp\!");" );
Show( ww << Is Dirty );
ww << Set Dirty( 0 );
Show( ww << Is Dirty );

```

### Is Modal Dialog

**Syntax:** obj &lt;&lt; Is Modal Dialog

**Description:** Returns true if the window is a modal dialog. Only useful when called from a window handler callback.

```jsl

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

**Syntax:** obj &lt;&lt; Journal

**Description:** Makes a journal from the display box.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << journal;

```

### Journal Window

**Syntax:** obj &lt;&lt; Journal Window

**Description:** Opens a journal window of the window.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = New Window( "Main Window", Text Box( "Main JMP Window" ) );
w << Journal Window;

```

### Launch

**Syntax:** obj &lt;&lt; Launch

**Description:** Evaluates the given argument in the context of the display box.

```jsl

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

### Make RowState Handler

**Syntax:** rs = obj &lt;&lt; Make RowState Handler( &lt;dt&gt;, function(a) )

**Description:** Creates a row state handler for the given data table or the current data table. The function is called when the row states change in the filter context of the box. The argument of the function holds the rows numbers that have changed, or -1 if the row state filter has changed.

**Single table**

```jsl

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

```jsl

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

**Syntax:** obj &lt;&lt; Margin( sides );sides = obj &lt;&lt; Get Margin

**Description:** Margin adds space between the border of the box and adjacent boxes. Use named arguments, or provide a list of values. If a single value is provided, it will be applied to all sides. If two values are specified, they will be applied to horizontal and vertical margins.

```jsl

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

**Syntax:** obj &lt;&lt; Maximize Window( &lt;state=0|1&gt; )

**Description:** Maximizes the window. Default argument is 1.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 1 );
w << Maximize Window( 1 );
Wait( 1 );
w << Maximize Window( 0 );

```

### Minimize Window

**Syntax:** obj &lt;&lt; Minimize Window( &lt;state=0|1&gt; )

**Description:** Minimizes the window. Default argument is 1.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 1 );
w << Minimize Window( 1 );
Wait( 1 );
w << Minimize Window( 0 );

```

### Move Window

**Syntax:** obj &lt;&lt; Move Window( x,y )

**Description:** Moves the window to the specified position.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
w << Move Window( 500, 500 );

```

### Next

**Syntax:** obj &lt;&lt; Next

**Description:** Returns the display box after this display box.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
next = rbiv << Next();
Print( next << Class Name() );

```

### On Close

**Syntax:** obj &lt;&lt; On Close( script )

**Description:** Sets a script or function to run upon closing the window. This script should return 1 to allow the close, or 0 to prevent the window from closing.

**Close Function**

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << On Close(
	Function( {this}, 
        // Modal dialogs return Button(1) if OK is pressed, Button(-1) if cancelled
		New Window( "Are you sure?",
			<<modal,
			V List Box(
				Text Box( "Press OK to allow " || (this << Get Window Title) || " to close" ),
				H List Box( Button Box( "OK" ), Button Box( "Cancel" ) )
			)
		)["button"] == 1
	)
);

```

**Close Script**

```jsl

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

**Syntax:** obj &lt;&lt; Optimize Display

**Description:** Sets a data table&apos;s column widths and window to an optimum size.

```jsl

Names Default To Here( 1 );
//This message applies to Data Table objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Optimize Display;

```

### Pad Window

**Syntax:** obj &lt;&lt; Pad Window( bool )

**Description:** Turns window padding on or off.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
Open( "$SAMPLE_DATA/Big Class.jmp" );
d = distribution( Column( :height ) );
r = d << report;
r << Pad Window( 0 );

```

### Padding

**Syntax:** obj &lt;&lt; Padding( sides );sides = obj &lt;&lt; Get Padding

**Description:** Padding adds space between the content and the border of the box. Use named arguments, or provide a list of values. If a single value is provided, it will be applied to all sides. If two values are specified, they will be applied to horizontal and vertical padding.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Show( tb << Get Padding );
tb << Border( 1 );
Wait( 1 );
tb << Padding( Left( 20 ), Top( 20 ), Right( 20 ), Bottom( 20 ) );

```

### Page Break

**Syntax:** obj &lt;&lt; Page Break

**Description:** Inserts a page break before the display box.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
New Window( "Example",
	ob = Outline Box( "Outline Box",
		V List Box(
			ob2 = Outline Box( "Outline Box 2",
				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )
			),
			ob3 = Outline Box( "Outline Box",
				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )
			)
		)
	)
);
ob3 << Page Break;

```

### Parent

**Syntax:** obj &lt;&lt; Parent

**Description:** Returns the parent of this display box.

```jsl

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

**Syntax:** obj &lt;&lt; Prepend( db2 )

**Description:** Add db2 to the display tree before db.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << prepend( Text Box( "=== above ===" ) );

```

### Prev Sib

**Syntax:** obj &lt;&lt; Prev Sib

**Description:** Returns the previous sibling of the display box.

```jsl

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

**Syntax:** obj &lt;&lt; Print Window

**Description:** Prints the window.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << Print Window;

```

### Reshow

**Syntax:** obj &lt;&lt; Reshow

**Description:** Invalidate the displaybox and update the window with the new content.  See <<Inval and <<UpdateWindow messages if more control over timing of the update is required.

```jsl

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

### Save Capture

**Syntax:** obj &lt;&lt; Save Capture( &lt;"path"&gt;, &lt;format&gt;, &lt;Add Sibling(n)&gt; )

**Description:** Saves a screen capture of the display box at the specified path. If a path is not given, the Save As window appears.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save Capture( "$TEMP/jmp_example.png", "png" );

```

### Save HTML

**Syntax:** obj &lt;&lt; Save HTML( &lt;pathname&gt;, &lt;format&gt; )

**Description:** Saves HTML source and folder of graphics in format specified.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save HTML( "$TEMP/jmp_example.html" );

```

### Save Interactive HTML

**Syntax:** obj &lt;&lt; Save Interactive HTML( &lt;pathname&gt;, &lt;Boolean&gt; )

**Description:** Saves Interactive HTML with Data to a file. The Boolean argument represents the report being static.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save Interactive HTML( "$TEMP/jmp_example.html" );

```

### Save Journal

**Syntax:** obj &lt;&lt; Save Journal( &lt;pathname&gt; )

**Description:** Saves journal source for the display box.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save Journal( "$TEMP/jmp_example.jrn" );

```

### Save MSWord

**Syntax:** obj &lt;&lt; Save MSWord( &lt;pathname&gt;, &lt;format&gt; )

**Description:** Saves the display box as a Microsoft Word document. (Windows Only)

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save MSWord( "$TEMP/jmp_example.doc" );

```

### Save PDF

**Syntax:** obj &lt;&lt; Save PDF( &lt;pathname&gt;, &lt;Show Page Setup(0|1)&gt;, &lt;Portrait(0|1)&gt; )

**Description:** Saves a PDF of the display box.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save PDF( "$TEMP/jmp_example.pdf" );

```

### Save Picture

**Syntax:** obj &lt;&lt; Save Picture( &lt;pathname&gt;, &lt;format&gt;, &lt;Scale(factor)&gt;, &lt;Type("Bitmap" | "Scalable")&gt;, &lt;View("Picture" | "Screen" | "Print"), &lt;Appearance("Default" | "Current")&gt;, &lt;SubRect(Left(number), Top(number), Right(number), Bottom(number))&gt; )

**Description:** Saves a picture of the display box. Supported formats are EMF(Windows), PICT(Macintosh), JPEG or JPG, GIF, or PNG. The optional Scale argument will render the image at a scaled resolution. Scaling requires that the display box be stretchable. The Type argument determines whether the result will be a scalable vector image or a bitmap. By default a scalable image is returned, which is suitable for saving to vector formats like PDF. The View option changes the behavior of some boxes. The default option of "Picture" draws the report as it would when exporting to an image format, with scrolled areas fully shown. View mode of "Screen" draws the report as seen on-screen, and "Print" draws the report as it does when printing, without any of the page setup features. The SubRect option will capture a portion of the resulting image rather than a full image. The Appearance option can change from the "Default" output colors to the "Current" colors as seen on-screen. The View, SubRect, and Appearance options are only supported for Type "Bitmap".

**Default**

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save Picture( "$TEMP/jmp_example.png", "png" );

```

**Scale**

```jsl

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

```jsl

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

**Syntax:** obj &lt;&lt; Save Presentation( "filename.pptx", &lt;Template("path\to\my_template.pptx")&gt;, &lt;Insert(Begin|End|#) | Replace(Begin|End|#) | Append&gt;, &lt;Outline Titles(None|Hide|TopLeft|TopRight|BottomLeft|BottomRight)&gt;, &lt;"EMF"|"PNG"|"JPG"|"Native"&gt; )

**Description:** Saves the display box tables and graphs slides in a presentation. The presentation can be opened with Microsoft PowerPoint or other presentation software.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save Presentation( "$TEMP/jmp_example.pptx" );
Open( "$TEMP/jmp_example.pptx" );

```

### Save RTF

**Syntax:** obj &lt;&lt; Save RTF( &lt;pathname&gt;, &lt;format&gt; )

**Description:** Saves RTF source with graphics in format specified.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save RTF( "$TEMP/jmp_example.rtf", "png" );

```

### Save Text

**Syntax:** obj &lt;&lt; Save Text( &lt;pathname&gt;, &lt;format&gt; )

**Description:** Saves a file containing the text of the display box.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
win = New Window( "Example", a = Text Box( "Example Text" ) );
a << save text( "$TEMP/jmp_example.txt" );

```

### Save Window Report

**Syntax:** obj &lt;&lt; Save Window Report( pathname, &lt;embed data(0|1)&gt; )

**Description:** Saves the current report window to a JMP report file (.jrp).

```jsl

Names Default To Here( 1 );
//This message can be sent to any display box object but will be applied to the report window
Open( "$SAMPLE_DATA/Big Class.jmp" );
d = distribution( Column( :height ) );
d << Save Window Report( "$DOCUMENTS/test.jrp", embed data( 1 ) );

```

### Scroll Window

**Syntax:** obj &lt;&lt; Scroll Window( DisplayBox | &lt;Relative(&lt;v&gt; | &lt;h&gt;,&lt;v&gt;)&gt; | &lt;Absolute(&lt;v&gt; | &lt;h&gt;,&lt;v&gt;) )

**Description:** Adjust the window scrollbar to bring the given DisplayBox into view, or scroll a relative number of pixels, or scroll to an absolute pixel location. In place of a number of pixels the keywords "Start" or "End" can be used.

**Absolute**

```jsl

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

```jsl

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

```jsl

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

**Syntax:** obj &lt;&lt; Select

**Description:** Selects this object for use by Edit menu commands.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
New Window( "Example", ex = Button Box( "Press Me" ) );
ex << Select;

```

### Set Content Size

**Syntax:** obj &lt;&lt; Set Content Size( x,y )

**Description:** Sets the content size within the window.

```jsl

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

### Set Dirty

**Syntax:** obj &lt;&lt; Set Dirty

**Description:** Sets the document&apos;s modified status. 0 will not prompt for saving; 1 will prompt.

```jsl

Names Default To Here( 1 );

ww = New Window( "Test", <<Script, "Open(\!"$SAMPLE_DATA\Big Class.jmp\!");" );
Show( ww << Is Dirty );
ww << Set Dirty( 0 );
Show( ww << Is Dirty );

```

### Set Height

**Syntax:** obj &lt;&lt; Set Height( width )

**Description:** Sets the height of the display box.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
fb = r[framebox( 1 )];
fb << Set Height( 150 );

```

### Set Main Window

**Syntax:** obj &lt;&lt; Set Main Window

**Description:** Set the window to be the main window in JMP and sets the prior main window to be a normal window

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = New Window( "Main Window", Text Box( "Main JMP Window" ) );
w << Set Main Window;

```

### Set Max Size

**Syntax:** obj &lt;&lt; Set Max Size( width,height )

**Description:** Sets the maximum size of this display box for purposes of auto-stretching.

```jsl

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

**Syntax:** obj &lt;&lt; Set Min Size( width,height )

**Description:** Sets the minimum size of this display box for purposes of auto-stretching.

```jsl

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

**Syntax:** obj &lt;&lt; Set Page Setup( &lt;margins(left, top, right, bottom)&gt;, &lt;scale(s)&gt;, &lt;portrait(0|1)&gt;, &lt;paper size(p)&gt;, &lt;Table of Contents(always, never, default)&gt; )

**Description:** Sets the page setup information that is used during printing or saving as pdf. A Table of Contents can optionally be generated from Outline Boxes.

```jsl

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

**Syntax:** obj &lt;&lt; Set Print Footers( left footer, center footer, right header )

**Description:** Sets the left, center, and right footers for printed output

```jsl

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

**Syntax:** obj &lt;&lt; Set Print Headers( left header, center header, right header )

**Description:** Sets the left, center, and right headers for printed output

```jsl

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

**Syntax:** obj &lt;&lt; Set Property( "property", value )

**Description:** Sets the value for the named property for the display box.

```jsl

Names Default To Here( 1 );
New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Set Property( "Enabled", 0 );

```

### Set Report Title

**Syntax:** obj &lt;&lt; Set Report Title( "string" )

**Description:** Changes the report title.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Set Report Title( "New Title" );

```

### Set Stretch

**Syntax:** obj &lt;&lt; Set Stretch( x,y )

**Description:** Sets the horizontal and vertical stretching behavior of the box. Boxes that stretch with Window will resize as the window or splitter size changes. Boxes that stretch to Fill will stretch to fill available space in their container. Boxes with stretching turned Off generally will not stretch. Most boxes default to Neutral, which means that they will determine their behavior based on their child boxes.

**Stretch to Fill**

```jsl

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

```jsl

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

**Syntax:** obj &lt;&lt; Set Summary Behavior( "Default"|"Visible"|"Collapse" )

**Description:** Sets the behavior of the box when a report is viewed in Summary mode.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
d << Report View( "Summary" );
r = d << Report;
tb = r[Table Box( 1 )];
tb << Set Summary Behavior( "Visible" );

```

### Set Width

**Syntax:** obj &lt;&lt; Set Width( width )

**Description:** Sets the width of the display box.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/big class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
fb = r[framebox( 1 )];
fb << Set Width( 400 );

```

### Set Window Icon

**Syntax:** obj &lt;&lt; Set Window Icon( icon name )

**Description:** Sets the window icon.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = New Window( "Example", ex = Button Box( "New Analysis" ) );
w << Set Window Icon( "Scatter3D" );

```

### Set Window Size

**Syntax:** obj &lt;&lt; Set Window Size( x,y )

**Description:** Sets the size of the window.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << Set Window Size( 800, 1200 );

```

### Set Window Title

**Syntax:** obj &lt;&lt; Set Window Title( "string" )

**Description:** Changes the window title.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Set Window Title( "New Title" );

```

### Show Properties

**Syntax:** obj &lt;&lt; Show Properties

**Description:** Displays a property editor for display boxes

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Show Properties();

```

### Show Tree Structure

**Syntax:** obj &lt;&lt; Show Tree Structure

**Description:** Displays a hierarchical tree structure of the display box and its related nodes.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Show Tree Structure();

```

### Show Window

**Syntax:** obj &lt;&lt; Show Window( state=0|1 )

**Description:** Shows or hides the window. This is useful for hiding windows temporarily. On by default.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 1 );
w << Show Window( 0 );
Wait( 2 );
w << Show Window( 1 );

```

### Sib

**Syntax:** obj &lt;&lt; Sib

**Description:** Returns the sibling of the display box.

```jsl

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

**Syntax:** obj &lt;&lt; Sib Append( Display box, Horizontal|Vertical )

**Description:** Adds a display box immediately after this display box.

```jsl

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

**Syntax:** obj &lt;&lt; Sib Prepend( Display box, Horizontal|Vertical )

**Description:** Adds a display box immediately before this display box.

```jsl

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

### Size Window

**Syntax:** obj &lt;&lt; Size Window( x,y )

**Description:** Sets the size of the window.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << Size Window( 500, 500 );

```

### Text Color

**Syntax:** obj &lt;&lt; Text Color( color );color = obj &lt;&lt; Get Text Color

**Description:** Text will be drawn using the text color if it has been set. If the property has not been set, the box will inherit the text color of the containing box.

```jsl

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

**Syntax:** obj &lt;&lt; Top Parent

**Description:** Returns the root parent of this display box.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rootParent = rbiv << Top Parent();
Print( rootParent << Class Name() );

```

### UI Only

**Syntax:** obj &lt;&lt; UI Only( state=0|1 );state = obj &lt;&lt; Get UI Only

### Update Window

**Syntax:** obj &lt;&lt; Update Window

**Description:** Update the window holding the displaybox if there are invalidated regions.  The <<Inval message creates invalidated regions.

```jsl

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

**Syntax:** obj &lt;&lt; User Resizable;obj &lt;&lt; Get User Resizable

**Description:** If the box is user resizable, the cursor will change near the bottom and right edges to allow drag-and-drop resizing.

```jsl

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

**Syntax:** obj &lt;&lt; Vertical Alignment( "Default"|"Top"|"Center"|"Bottom" );"Default"|"Top"|"Center"|"Bottom" = obj &lt;&lt; Get Vertical Alignment

**Description:** Vertical alignment controls the positioning of the box within a container if the box does not fill the entire space.

```jsl

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

**Syntax:** obj &lt;&lt; Visibility( "Visible"|"Hidden"|"Collapse" );"Visible"|"Hidden"|"Collapse" = obj &lt;&lt; Get Visibility

**Description:** Visibility determines whether a box is shown and whether it takes up space. The default value of "Visible" means that the object will be shown.  A "Hidden" box is not shown but still takes up space, while a "Collapsed" box takes up no space in the layout.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Show( tb << Get Visibility );
Wait( 1 );
tb << Visibility( "Collapse" );
Show( tb << Get Visibility );

```

### Window Class Name

**Syntax:** obj &lt;&lt; Window Class Name

**Description:** Returns the name of the window class for the display box.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
Show( biv << Window Class Name() );
Show( rbiv << Window Class Name() );

```

### XPath

**Syntax:** obj &lt;&lt; XPath( XPath expression, &lt;English(0|1)&gt;, &lt;NoData(0|1)&gt; )

**Description:** Applies an XPath expression to the XML representation of the display tree and returns the results. By default, strings are returned in the local language, and the XML includes data values within some boxes. Use the English option to return English strings where available. Use the NoData option to omit the data values within boxes, which is useful for performance when your query is based only on box attributes.

**Attributes**

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Run Script( "Bivariate" );
(Report( biv ) << xpath( "//OutlineBox[@isOpen='false']" )) << Close( 0 );

```

**Box type**

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Run Script( "Bivariate" );
(Report( biv ) << xpath( "//TextEditBox" )) << Text Color( "Green" );

```

**Child box**

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Run Script( "Bivariate" );
(Report( biv ) << xpath( "//OutlineBox[text()='Summary of Fit']/TableBox" )) <<
Make Into Data Table;

```

**Data**

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Run Script( "Bivariate" );
(Report( biv ) << xpath( "//NumberColBoxItem[text()='40']/parent::*" )) <<
Text Color( "Green" );

```

**Display Seg**

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Run Script( "Bivariate" );
(Report( biv ) << xpath( "//MarkerSeg" )) << Set Marker( "Square" );

```

**Text**

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Run Script( "Bivariate" );
(Report( biv ) << xpath( "//OutlineBox[text()='Parameter Estimates']" )) << Close;

```

### Zoom Window

**Syntax:** obj &lt;&lt; Zoom Window

**Description:** Resizes the window to be large enough to show all of its contents.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << Set Window Size( 80, 120 );
Wait( 2 );
w << Zoom Window;

```

