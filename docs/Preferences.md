# Preferences



## Platform Preferences

### Get

**Syntax:** obj << Get

**Description:** Returns the script for setting a specified preference.

```

Names Default To Here( 1 );
a = Platform Preferences[1] << Get( Distribution );
Show( a );

```

### Get Script

**Syntax:** obj << Get Script

**Description:** Returns the script for setting the preferences.

```

Names Default To Here( 1 );
a = Platform Preferences[1] << Get Script;
Show( a );

```

### Set

**Syntax:** obj << Set

**Description:** Sets a specified preference.

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Platform Preferences[1] << Set( Distribution( Vertical( 1 ) ) );

```

### Add Color Theme

**Syntax:** obj << Add Color Theme( Add Color Theme({"Name", <type|style>, {color, ..., <Missing(color)>}, <{position, ...}>}, <color blindness discernability>) )

**Description:** Creates a new custom color theme and registers it with the theme picker.

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Set Preference(
	Add Color Theme(
		{"Sunny", {{255, 255, 0}, {255, 128, 64}, {255, 0, 0}, {163, 12, 27}}, {0, 0.5,
		0.642857142857143, 1}}
	)
);
Show( Get Color Theme Detail( "Sunny" ) );

```

### Add Rows default number of rows

**Syntax:** obj << Add Rows default number of rows( number )

**Description:** Initial number of rows in the Add Rows window

**JMP Version Added:** 18

### Add Rows recall last value

**Syntax:** obj << Add Rows recall last value( state=0|1 )

**Description:** The last entered value is used for the number of rows to add

**JMP Version Added:** 18

### Add files opened by scripts to the Recent Files list

**Syntax:** obj << Add files opened by scripts to the Recent Files list( state=0|1 )

**Description:** Changes the default setting for whether files opened with the JSL Open() function are added to the Recent Files list.

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Add files opened by scripts to the Recent Files list( 1 ) );

```

### Allow 16 Bit List Check Compression

**Syntax:** obj << Allow 16 Bit List Check Compression( state=0|1 )

**Description:** Specifies whether to use List Check to encode values when there are more than 255 distinct values in the column. If encoded, these columns cannot be read by JMP 14 and earlier.

**JMP Version Added:** 15

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Allow 16 Bit List Check Compression( 1 ) );

```

### Allow Compress Selected Columns to create compact columns

**Syntax:** obj << Allow Compress Selected Columns to create compact columns( state=0|1 )

**Description:** Compress Selected Columns will compact columns if that uses less disk space.

**JMP Version Added:** 18

### Allow Unquoted Strings in JSL

**Syntax:** obj << Allow Unquoted Strings in JSL( "No"|"Yes (with a warning)"|"Yes (no warning)" )

### Allow mixed ISO format patterns

**Syntax:** obj << Allow mixed ISO format patterns( state=0|1 )

**Description:** Allow format pattern dates with both ISO weeks (<ww>) and non-ISO years (<YYYY> or <YY>), and with both non-ISO weeks (<WW1> or <WW2>) and ISO years (<yyyy> or <yy>). ISO weeks and years are not compatible with non-ISO weeks and years. They should not be mixed. By default, JMP will not allow such date format to be created.

**JMP Version Added:** 18

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Allow mixed ISO format patterns( 1 ) );

```

### Allow short numeric data format

**Syntax:** obj << Allow short numeric data format( state=0|1 )

**Description:** Changes the default setting for allowing short numeric data format.

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Allow short numeric data format( 1 ) );

```

### Auto Hide Menus

**Syntax:** obj << Auto Hide Menus( "Always"|"Never"|"Based on window size" )

**Description:** Determines if and when JMP auto-hides the menu and toolbars. Note: This is available on Windows only.

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Auto Hide Menus( "Always" ) );

```

### Auto Run Recent JSL

**Syntax:** obj << Auto Run Recent JSL( state=0|1 )

**Description:** Changes the default behavior for automatically running recently submitted JSL scripts. Note: This is available on Windows only.

```

Names Default To Here( 1 );
//Caution: Changing a preference will affect 
//the default behavior of JMP. 

Preferences[1] << Set( Auto Run Recent JSL( 1 ) );

```

### Auto match brackets in script editor

**Syntax:** obj << Auto match brackets in script editor( state=0|1 )

**Description:** Changes the default setting for automatically matching brackets in the script window. Note: This is available on Windows only.

```

Names Default To Here( 1 );
//Caution: Changing a preference will affect 
//the default behavior of JMP. 

Preferences[1] << Set( Auto match brackets in script editor( 1 ) );

```

### Autosave maximum data table columns

**Syntax:** obj << Autosave maximum data table columns( number )

**Description:** Maximum number of data table columns that will be automatically saved.

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Autosave Maximum Data Table Columns( 1000 ) );

```

### Autosave maximum data table rows

**Syntax:** obj << Autosave maximum data table rows( number )

**Description:** Maximum number of data table rows that will be automatically saved.

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Autosave Maximum Data Table Rows( 10000 ) );

```

### Autosave timeout

**Syntax:** obj << Autosave timeout( number )

**Description:** Autosave time-out interval is in minutes. When the time-out interval has been met, all open and modified files are saved. The default value is "0", which indicates that no autosave processing will be performed.

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Autosave Timeout( 15 ) );

```

### Axis Title Above

**Syntax:** obj << Axis Title Above( state=0|1 )

**Description:** Changes the position of the y-axis label in graphs.

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Axis Title Above( 1 ) );

```

### Background Color

**Syntax:** obj << Background Color( color )

**Description:** Changes the default setting for the background color in all windows. Note: Available for Windows only.

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Background Color( "Light Blue" ) );

```

### Bad to Good Color Theme

**Syntax:** obj << Bad to Good Color Theme( "name" )

**Description:** Changes the default setting for the continuous color theme appearing in all graphs.

**JMP Version Added:** 16

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Show( Get Preference( Continuous Color Theme ) );
Set Preference( Bad to Good Color Theme( "Green to Purple" ) );
Show( Get Preference( Bad to Good Color Theme ) );

```

### Box Plot Line Width

**Syntax:** obj << Box Plot Line Width( number )

**Description:** Changes the default line width for box plots.

```

Names Default To Here( 1 );
//Caution: Changing a preference will
//affect the default behavior of JMP.

Preferences[1] << Set( Box Plot Line Width( 2 ) );

```

### Bypass Proxy

**Syntax:** obj << Bypass Proxy( text )

**Description:** Disable proxy use for specific hosts

**JMP Version Added:** 15

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Bypass Proxy( "www.example.com" ) );

```

### Categorical Color Theme

**Syntax:** obj << Categorical Color Theme( "name" )

**Description:** Changes the default setting for the categorical color theme appearing in all graphs.

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Show( Get Preference( Categorical Color Theme ) );
Set Preference( Categorical Color Theme( "Jet" ) );
Show( Get Preference( Categorical Color Theme ) );

```

### Categorical graph type

**Syntax:** obj << Categorical graph type( "Auto"|"Histogram"|"Bars"|"Heat Map"|"Mosaic"|"Run Chart"|"Run Chart" )

**Description:** Default graph to display in column header for nominal and ordinal columns.

**JMP Version Added:** 18

### Classic Data Table Selection

**Syntax:** obj << Classic Data Table Selection( state=0|1 )

**Description:** Enables classic click selection behavior in the data table. In this mode, selecting a column will have no effect on row selection, and selecting a row will have no effect on column selection.

**JMP Version Added:** 19

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Classic Data Table Selection( 1 ) );

```

### Color Mode

**Syntax:** obj << Color Mode( "Use System Setting"|"Light"|"Dark"|"High Contrast" )

**Description:** Changes whether JMP uses a specific window coloring theme or honors the operating system setting.

```

Names Default To Here( 1 );
//Caution: Changing a preference will affect 
//the default behavior of JMP. 

Preferences[1] << Set( Color Mode( Dark ) );

```

### Columns Manager

**Syntax:** obj << Columns Manager

**JMP Version Added:** 18

### Conditional formatting rules

**Syntax:** obj << Conditional formatting rules

**Description:** Creates a custom conditional rule that is shown or not according to the Show conditional formatting preference setting.

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences(
	Conditional Formatting Rules(
		RuleSet(
			RuleName( "My Special Rule" ),
			GreaterThan(
				Value( 0 ),
				Inclusive( 0 ),
				Format(
					Text Color( "Medium Dark Red" ),
					Back Color( "Light Yellow" ),
					Annotation( 1 ),
					FontStyle( Bold )
				)
			)
		)
	)
);

```

### Continuous Color Theme

**Syntax:** obj << Continuous Color Theme( "name" )

**Description:** Changes the default setting for the continuous color theme appearing in all graphs.

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Show( Get Preference( Continuous Color Theme ) );
Set Preference( Continuous Color Theme( "Green to Purple" ) );
Show( Get Preference( Continuous Color Theme ) );

```

### Continuous graph type

**Syntax:** obj << Continuous graph type( "Auto"|"Histogram"|"Bars"|"Heat Map"|"Mosaic"|"Run Chart"|"Run Chart" )

**Description:** Default graph to display in column header for continuous columns.

**JMP Version Added:** 18

### Custom Locale Settings

**Syntax:** obj << Custom Locale Settings

**Description:** Overrides locale settings such as decimal separator and thousands separator

**JMP Version Added:** 16

**Example 1**

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences( Custom Locale Settings( Decimal Separator( "," ) ) );
Print( Format( 1.25, "Best" ) );
Preferences( Custom Locale Settings( Decimal Separator( "." ) ) );
Print( Format( 1.25, "Best" ) );
Preferences( Custom Locale Settings( Decimal Separator() ) );

```

**Example 2**

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

// Clear all locale overrides...
Preferences( Custom Locale Settings( Reset to Defaults ) );

```

**Example 3**

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Get Preferences( Custom Locale Settings );

```

### Data Filter Auto Clear

**Syntax:** obj << Data Filter Auto Clear( state=0|1 )

### Data Filter Check Box Display

**Syntax:** obj << Data Filter Check Box Display( state=0|1 )

**Description:** Default display for categorical filter column is check box display.

### Data Filter Conditional

**Syntax:** obj << Data Filter Conditional( state=0|1 )

### Data Filter Group is AND

**Syntax:** obj << Data Filter Group is AND( state=0|1 )

### Data Filter Histograms and Bars

**Syntax:** obj << Data Filter Histograms and Bars( state=0|1 )

**Description:** Show Histograms and Bars for filter columns where available

**JMP Version Added:** 15

### Data Filter Include Check

**Syntax:** obj << Data Filter Include Check( state=0|1 )

### Data Filter Select Check

**Syntax:** obj << Data Filter Select Check( state=0|1 )

### Data Filter Show Check

**Syntax:** obj << Data Filter Show Check( state=0|1 )

### Data Table Actions

**Syntax:** obj << Data Table Actions( state=0|1 )

**JMP Version Added:** 16

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Data Table Actions( 1 ) );

```

### Data Table Title on Output

**Syntax:** obj << Data Table Title on Output( state=0|1 )

**Description:** Changes the default setting for displaying the data table names at the top of the report&apos;s output.

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Data Table Title on Output( 1 ) );

```

### Date Title on Output

**Syntax:** obj << Date Title on Output( state=0|1 )

**Description:** Changes the default setting for displaying the date in the title of the output.

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Date Title on Output( 1 ) );

```

### Default Field Width

**Syntax:** obj << Default Field Width( number )

**Description:** Change the default field width used for new numeric columns.

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences( Default Field Width( 16 ) );

```

### Default Project Show Bookmarks

**Syntax:** obj << Default Project Show Bookmarks( state=0|1 )

**Description:** Show the Project pane in new projects

**JMP Version Added:** 16

### Default Project Show Contents

**Syntax:** obj << Default Project Show Contents( state=0|1 )

**Description:** Show the Contents pane in new projects

**JMP Version Added:** 16

### Default Project Show Log

**Syntax:** obj << Default Project Show Log( state=0|1 )

**Description:** Show the Log pane in new projects

**JMP Version Added:** 16

### Default Project Show Recent Files

**Syntax:** obj << Default Project Show Recent Files( state=0|1 )

**Description:** Show the Recent Files pane in new projects

**JMP Version Added:** 16

### Default Project Show Workspace

**Syntax:** obj << Default Project Show Workspace( state=0|1 )

**Description:** Show the Workspace pane in new projects

**JMP Version Added:** 16

### Display indexes in English

**Syntax:** obj << Display indexes in English( state=0|1 )

**Description:** Displays the Object Scripting Index, the JSL Functions Index, and the Display Box Index in English.

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Display indexes in English( 1 ) );

```

### Double Click Opens Column Info

**Syntax:** obj << Double Click Opens Column Info( state=0|1 )

**Description:** Double clicking on a column header will open the column info dialog rather than editing the column name.

**JMP Version Added:** 19

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Double Click Opens Column Info( 1 ) );

```

### Empty Project at Startup

**Syntax:** obj << Empty Project at Startup( "Always"|"If no other project is open"|"Never" )

**JMP Version Added:** 16

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Create an empty project when starting JMP( "Always" ) );

```

### Emulate Zoom Mode

**Syntax:** obj << Emulate Zoom Mode( state=0|1 )

**Description:** Determines whether JMP includes the Window List in maximized windows

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Emulate Zoom Mode( 1 ) );

```

### Enable Advanced Linear Algebra Routines

**Syntax:** obj << Enable Advanced Linear Algebra Routines( state=0|1 )

**Description:** Changes the linear algebra computation routines that are used in multiple platforms and JSL functions. When selected, this preference enables advanced linear algebra routines that are based on the BLAS and LAPACK libraries. The JMP documentation contains more information about the platforms and JSL functions that are affected by this preference.

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Enable Advanced Linear Algebra Routines( 0 ) );

```

### Enable Core Text Input

**Syntax:** obj << Enable Core Text Input( state=0|1 )

### Enable Telemetry

**Syntax:** obj << Enable Telemetry( state=0|1 )

### Enable direct input from IME

**Syntax:** obj << Enable direct input from IME( state=0|1 )

### End Menu Item Marking After Deadline

**Syntax:** obj << End Menu Item Marking After Deadline( state=0|1 )

**Description:** Menu items will no longer be marked after the time limit elapses

**JMP Version Added:** 17

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( End Menu Item Marking After Deadline( 0 ) );

```

### Enhanced Log Alternate Table Rows

**Syntax:** obj << Enhanced Log Alternate Table Rows( state=0|1 )

**JMP Version Added:** 16

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Enhanced Log Shade Alternate Table Rows( 1 ) );

```

### Enhanced Log Color By Window

**Syntax:** obj << Enhanced Log Color By Window( state=0|1 )

**JMP Version Added:** 16

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Enhanced Log Color By Window( 1 ) );

```

### Enhanced Log Color By Window Color Theme

**Syntax:** obj << Enhanced Log Color By Window Color Theme( "name" )

**JMP Version Added:** 16

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Show( Get Preference( Enhanced Log Color By Window Color Theme ) );
Set Preference( Enhanced Log Color By Window Color Theme( "Jet" ) );
Show( Get Preference( Enhanced Log Color By Window Color Theme ) );

```

### Enhanced Log Filter Action

**Syntax:** obj << Enhanced Log Filter Action( state=0|1 )

**JMP Version Added:** 16

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Enhanced Log Filter Action( 1 ) );

```

### Enhanced Log Filter Error

**Syntax:** obj << Enhanced Log Filter Error( state=0|1 )

**JMP Version Added:** 16

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Enhanced Log Filter Error( 1 ) );

```

### Enhanced Log Filter Log

**Syntax:** obj << Enhanced Log Filter Log( state=0|1 )

**JMP Version Added:** 16

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Enhanced Log Filter Log( 1 ) );

```

### Enhanced Log Filter Result

**Syntax:** obj << Enhanced Log Filter Result( state=0|1 )

**JMP Version Added:** 16

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Enhanced Log Filter Result( 1 ) );

```

### Enhanced Log Filter Script

**Syntax:** obj << Enhanced Log Filter Script( state=0|1 )

**JMP Version Added:** 16

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Enhanced Log Filter Script( 1 ) );

```

### Enhanced Log Filter Warn

**Syntax:** obj << Enhanced Log Filter Warn( state=0|1 )

**JMP Version Added:** 16

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Enhanced Log Filter Warn( 1 ) );

```

### Enhanced Log Origin Column

**Syntax:** obj << Enhanced Log Origin Column( state=0|1 )

**JMP Version Added:** 16

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Enhanced Log Origin Column( 1 ) );

```

### Enhanced Log Result Column

**Syntax:** obj << Enhanced Log Result Column( state=0|1 )

**JMP Version Added:** 16

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Enhanced Log Result Column( 1 ) );

```

### Enhanced Log Shade Table Cells

**Syntax:** obj << Enhanced Log Shade Table Cells( state=0|1 )

**JMP Version Added:** 16

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Enhanced Log Shade Table Cells( 1 ) );

```

### Enhanced Log Shade Table Headings

**Syntax:** obj << Enhanced Log Shade Table Headings( state=0|1 )

**JMP Version Added:** 16

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Enhanced Log Shade Table Headings( 1 ) );

```

### Enhanced Log Table Column Borders

**Syntax:** obj << Enhanced Log Table Column Borders( state=0|1 )

**JMP Version Added:** 16

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Enhanced Log Table Column Borders( 1 ) );

```

### Enhanced Log Table Heading Column Borders

**Syntax:** obj << Enhanced Log Table Heading Column Borders( state=0|1 )

**JMP Version Added:** 16

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Enhanced Log Table Heading Column Borders( 1 ) );

```

### Enhanced Log Table Row Borders

**Syntax:** obj << Enhanced Log Table Row Borders( state=0|1 )

**JMP Version Added:** 16

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Enhanced Log Table Row Borders( 1 ) );

```

### Enhanced Log Timestamp Column

**Syntax:** obj << Enhanced Log Timestamp Column( state=0|1 )

**JMP Version Added:** 16

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Enhanced Log Timestamp Column( 1 ) );

```

### Enhanced Log Underline Table Headings

**Syntax:** obj << Enhanced Log Underline Table Headings( state=0|1 )

**JMP Version Added:** 16

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Enhanced Log Underline Table Headings( 1 ) );

```

### Enter Key moves down

**Syntax:** obj << Enter Key moves down( state=0|1 )

**Description:** Changes the default setting for the Enter key movement.

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Enter Key moves down( 1 ) );

```

### Evaluate OnOpen Scripts

**Syntax:** obj << Evaluate OnOpen Scripts( "Prompt"|"Never"|"Always" )

**Description:** Set to "Never" to never allow OnOpen scripts to run.  Scripts from unknown sources should not be run.

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Evaluate OnOpen Scripts( "Prompt" ) );

```

### Excel Open Method

**Syntax:** obj << Excel Open Method( "Open All Sheets"|"Select Individual Worksheets"|"Use Excel Wizard" )

### Fast Marker Threshold

**Syntax:** obj << Fast Marker Threshold( number )

**Description:** Changes the default setting for refreshing markers on graphs.

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Fast Marker Threshold( 100000 ) );

```

### Fill Hollow Markers

**Syntax:** obj << Fill Hollow Markers( state=0|1 )

**Description:** Hollow markers will be filled with the graph background color

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Fill Hollow Markers( 1 ) );

```

### Fill Selection Color

**Syntax:** obj << Fill Selection Color( color )

**Description:** Color of filled selections when Fill Selection Mode is Selected Same Color.

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Fill Selection Color( "Red" ) );

```

### Fill Selection Fade

**Syntax:** obj << Fill Selection Fade( number )

**Description:** Changes the default setting for the amount unselected fills are faded.

**JMP Version Added:** 16

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Fill Selection Fade( 50 ) );

```

### Fill Selection Mode

**Syntax:** obj << Fill Selection Mode( "Selected Patterned"|"Selected Darker"|"Selected Outlined"|"Selected Same Color"|"Unselected Faded" )

**Description:** Changes the way that the selection is indicated for filled areas. Default is patterned.

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Fill Selection Mode( "Selected Patterned" ) );

```

### Formula Evaluation

**Syntax:** obj << Formula Evaluation( "When Idle"|"Immediate" )

**Description:** Determines if formula evaluation happens during idle time or if it runs immediately in the foreground

**JMP Version Added:** 16

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Formula Evaluation( "Immediate" ) );

```

### Frame Border

**Syntax:** obj << Frame Border( state=0|1 )

**Description:** Changes the default setting for displaying the frame border on non-axis sides of all graphs.

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Frame Border( 1 ) );

```

### Frame Color

**Syntax:** obj << Frame Color( color )

**Description:** Changes the default setting for the color of frame borders drawn on all graphs.

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Frame Color( "Green" ) );

```

### Get

**Syntax:** obj << Get

**Description:** Returns the script for setting a specified preference.

```

Names Default To Here( 1 );
a = Preferences[1] << Get( Show the Tip of the Day at startup );
Show( a );

```

### Get Script

**Syntax:** obj << Get Script

**Description:** Returns the script for setting the preferences.

```

Names Default To Here( 1 );
a = Preferences[1] << Get Script;
Show( a );

```

### Graph Background Color

**Syntax:** obj << Graph Background Color( color )

**Description:** Changes the default setting for the background color in all graphs.

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Graph Background Color( "Light Green" ) );

```

### Graph Border

**Syntax:** obj << Graph Border( state=0|1 )

**Description:** Changes the default setting for displaying the graph border on all graphs.

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Graph Border( 1 ) );

```

### Graph Height

**Syntax:** obj << Graph Height( number )

**Description:** Changes the default setting for the graph height for all graphs.

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Graph Height( 1 ) );

```

### Graph Marker

**Syntax:** obj << Graph Marker( marker )

**Description:** Changes the default setting for the marker shape appearing in all graphs.

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Graph Marker( "Diamond" ) );

```

### Graph Marker Theme

**Syntax:** obj << Graph Marker Theme( "Standard"|"Hollow"|"Solid"|"Paired"|"Classic"|"Alphanumeric" )

**Description:** Changes the default setting for the marker theme appearing in all graphs.

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Graph Marker Theme( "Classic" ) );

```

### Graph Marker Unselected Fade

**Syntax:** obj << Graph Marker Unselected Fade( number )

**Description:** Changes the default setting for the amount unselected markers are faded.

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Graph Marker Unselected Fade( 45 ) );

```

### Graph Marker size

**Syntax:** obj << Graph Marker size( "Dot"|"Small"|"Medium"|"Large"|"XL"|"XXL"|"XXXL" )

**Description:** Changes the default setting for the marker size appearing in all graphs.

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Graph Marker size( "Large" ) );

```

### HDF5PathDelimiter

**Syntax:** obj << HDF5PathDelimiter( text )

**JMP Version Added:** 17

### Header summary heat map color theme

**Syntax:** obj << Header summary heat map color theme( "name" )

**Description:** Changes the default setting for the continuous color theme appearing in all graphs.

**JMP Version Added:** 18

```

Names Default To Here( 1 );
//Caution: Changing a preference will
//affect the default behavior of JMP.
Show( Get Preference( Header summary heat map color theme ) );
Set Preference( Header summary heat map color theme( "Green to Purple" ) );
Show( Get Preference( Header summary heat map color theme ) );

```

### Hide 'Find and Replace' window

**Syntax:** obj << Hide &apos;Find and Replace&apos; window( state=0|1 )

**Description:** Changes the default setting for keeping the &apos;Find and Replace&apos; window open after finding and replacing.

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( "Hide 'Find and Replace' window"n( 1 ) );

```

### Hide ODBC Connection Strings

**Syntax:** obj << Hide ODBC Connection Strings( state=0|1 )

### Hide Overlapping Labels

**Syntax:** obj << Hide Overlapping Labels( state=0|1 )

**Description:** Hides the overlapping labels in a graph.

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Hide Overlap Labels( 0 ) );

```

### Histogram Color

**Syntax:** obj << Histogram Color( color )

**Description:** Changes the default color for histograms.

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Histogram Color( "Light Yellow" ) );

```

### Histogram Line Color

**Syntax:** obj << Histogram Line Color( color )

**Description:** Changes the default line color for histograms.

**JMP Version Added:** 17

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 
 
Preferences[1] << Set( Histogram Line Color( "Red" ) );

```

### Hover Help

**Syntax:** obj << Hover Help( state=0|1 )

**Description:** Tooltip-style help responding to circular mouse motions

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Hover Help( 1 ) );

```

### Image Format for PowerPoint

**Syntax:** obj << Image Format for PowerPoint( "Default OS format"|"PNG"|"JPEG" )

### Include Responses Not in Data

**Syntax:** obj << Include Responses Not in Data( state=0|1 )

**Description:** Show the labels of those responses with no occurrence in the data table.

### Initial JMP Window

**Syntax:** obj << Initial JMP Window( "Home Window"|"JMP Starter"|"Window List" )

**Description:** Determines the JMP window that is created when JMP starts

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Initial JMP Window( "Home Window" ) );

```

### Initial Log Window

**Syntax:** obj << Initial Log Window( state=0|1 )

**Description:** Changes the default setting for displaying the initial log window.

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Initial Log Window( 1 ) );

```

### Initial Splash Window

**Syntax:** obj << Initial Splash Window( state=0|1 )

**Description:** Changes the default setting for displaying the initial splash window.

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Initial Splash Window( 1 ) );

```

### Inside Ticks

**Syntax:** obj << Inside Ticks( state=0|1 )

**Description:** Changes the default setting for displaying axis tick marks on the inside of graph frames.

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Inside Ticks( 1 ) );

```

### Interactive HTML Color

**Syntax:** obj << Interactive HTML Color( "Light Background"|"Dark Background"|"Gray Background" )

**Description:** Changes the default setting for the interactive HTML color theme.

**JMP Version Added:** 15

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Interactive HTML Color( "Light Background" ) );

```

### Internet Open Timeout

**Syntax:** obj << Internet Open Timeout( number )

**Description:** Internet Open will wait this many seconds before giving up.

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Internet Open Timeout( 300 /* 5 minutes */ ) );

```

### JMP Live Timeout

**Syntax:** obj << JMP Live Timeout( number )

**Description:** Sets the timeout value for publishing to JMP Live. The default is 180 seconds.

**JMP Version Added:** 15

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( JMP Live Timeout( 120 ) );

```

### JMP Theme

**Syntax:** obj << JMP Theme( "Traditional"|"Comfortable"|"JMP Live"|"JMP Clinical" )

**Description:** Switches theme for all of JMP.

**JMP Version Added:** 19

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Oneway( Y( :height ), X( :sex ), Means( 1 ), Mean Diamonds( 1 ) );

restore theme = Get Preference( JMP Theme );
Set Preference( JMP Theme( "Traditional" ) );
Wait( 2 );
Set Preference( JMP Theme( "Comfortable" ) );
Wait( 2 );
Set Preference( JMP Theme( "JMP Live" ) );
Wait( 2 );
restore theme;

```

### JSL save column groups with group name

**Syntax:** obj << JSL save column groups with group name( state=0|1 )

**Description:** When saving script with list of columns, use &apos;column group&apos; syntax if the list of columns is a column group

**JMP Version Added:** 16

### JSS Dir

**Syntax:** obj << JSS Dir( text )

**Description:** Changes the JSS directory for development use.

**JMP Version Added:** 19

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Set Preference( JSS Dir( "C:\My\Path\To\jss\" ) );

```

### Journal Freeze Backward Compatible

**Syntax:** obj << Journal Freeze Backward Compatible( state=0|1 )

### Language Switch Warning

**Syntax:** obj << Language Switch Warning( state=0|1 )

**Description:** Changes the default setting for warning when detecting change in language. Note: Available on Windows only.

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Language Switch Warning( 1 ) );

```

### Laser pointer

**Syntax:** obj << Laser pointer( "Off"|"Purple"|"Blue"|"Green"|"Yellow"|"Orange"|"Red" )

**Description:** Changes the default setting for displaying a laser pointer for emphasizing parts of a report.

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Laser pointer( "Purple" ) );

```

### Line Width

**Syntax:** obj << Line Width( number )

**Description:** Changes the default line width for graph content.

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Line Width( 2 ) );

```

### Log Mode

**Syntax:** obj << Log Mode( "Enhanced"|"Text" )

**Description:** Changes the default setting for how the logs are displayed. This includes the main and project logs.

**JMP Version Added:** 16

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Log Mode( "Text" ) );

```

### Log Window Height

**Syntax:** obj << Log Window Height( number )

**Description:** Changes the default setting for the size of the log window. Note: This is available on Windows only.

```

Names Default To Here( 1 );
//Caution: Changing a preference will affect 
//the default behavior of JMP. 

Preferences[1] << Set( Log Window Height( 200 ) );

```

### Major Grid Line Color

**Syntax:** obj << Major Grid Line Color( color )

**Description:** Changes the default color of major grid lines in graphs.

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Major Grid Line Color( "Blue" ) );

```

### Major Grid Lines

**Syntax:** obj << Major Grid Lines( state=0|1 )

**Description:** Changes the default setting for displaying major grid lines in graphs.

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Major Grid Lines( 1 ) );

```

### Mark Menu Items Added Since

**Syntax:** obj << Mark Menu Items Added Since( "None"|"Current Version"|"18"|"17"|"16"|"15"|"14" )

**Description:** Mark menu items newer than a particular JMP version.

**JMP Version Added:** 17

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Mark Items Added Since( "16" ) );

```

### Marker Label Color

**Syntax:** obj << Marker Label Color( color )

**Description:** Color of marker labels if "Marker Label Color Style" is set to "Fixed"

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Marker Label Color( "Blue" ) );

```

### Marker Label Color Style

**Syntax:** obj << Marker Label Color Style( "Marker Color"|"Marker Color Faded"|"Fixed Color" )

**Description:** Changes the default coloring style for marker labels

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Marker Label Color Style( "Marker Color" ) );

```

### Marker Selection Mode

**Syntax:** obj << Marker Selection Mode( "Unselected Faded"|"Selected Larger"|"Selected Haloed"|"Selected Outlined"|"Selected Same Color" )

**Description:** Changes the default setting for the marker selection mode. The default is Unselected Faded.

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Marker Selection Mode( "Selection Haloed" ) );

```

### Maximum Auto Size Column List Width

**Syntax:** obj << Maximum Auto Size Column List Width( number )

**JMP Version Added:** 18

### Maximum JMP Call Depth

**Syntax:** obj << Maximum JMP Call Depth( number )

**Description:** Changes the default setting for the Maximum JMP call depth.

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Maximum JMP call depth( 50 ) );

```

### Maximum Parse Depth

**Syntax:** obj << Maximum Parse Depth( number )

**Description:** Changes the default setting for the Maximum Parsing Depth. Default value is 512.

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Maximum Parse Depth( 600 ) );

```

### Maximum Symbol Evaluation Recursion Depth

**Syntax:** obj << Maximum Symbol Evaluation Recursion Depth( number )

**Description:** Changes the default setting for the Maximum Symbol Evaluation Recursion Depth. Default value is 25.

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Maximum Symbol Evaluation Recursion Depth( 50 ) );

```

### Minor Grid Line Color

**Syntax:** obj << Minor Grid Line Color( color )

**Description:** Changes the default color of minor grid lines in graphs.

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Minor Grid Line Color( "Black" ) );

```

### Minor Grid Lines

**Syntax:** obj << Minor Grid Lines( state=0|1 )

**Description:** Changes the default setting for displaying minor grid lines in graphs.

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Minor Grid Lines( 1 ) );

```

### New Project Template

**Syntax:** obj << New Project Template( text )

**Description:** File to use for new, empty projects.

**JMP Version Added:** 16

### New character columns default to compact

**Syntax:** obj << New character columns default to compact( state=0|1 )

**Description:** New character columns or columns switched to the character data type are automatically made compact columns

**JMP Version Added:** 18

### OAuth2 Authentication Browser

**Syntax:** obj << OAuth2 Authentication Browser( text=Default )

**Description:** Sign in to OAuth2 servers with the specified browser type. Valid values are "Default", "Embedded", "External". "Default" by default.

**JMP Version Added:** 17

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set(
	Sign in to OAuth2 servers with the specified browser type( "Embedded" )
);

```

### ODBC Allow Table Replace

**Syntax:** Preferences[1] << Name("ODBC Allow Table Replace") ( state = 0|1 )

**Description:** Select this option to allow ODBC table replace. This option is selected by default. Replacing an ODBC table will drop the existing table in the database and replace it with a new table.

```

Names Default To Here( 1 );
//Caution: Changing a preference will
//affect the default behavior of JMP.
     
Preferences[1] << Name( "ODBC Allow Table Replace" )(0);

```

### ODBC Hide Connection String

**Syntax:** obj << ODBC Hide Connection String( state=0|1 )

### Open Text File Charset

**Syntax:** obj << Open Text File Charset( "Best Guess"|"ASMO-708"|"big5"|"cp1025"|"cp866"|"cp875"|"csISO2022JP"|"DOS-720"|"DOS-862"|"EUC-CN"|"EUC-JP"|"euc-kr"|"GB18030"|"gb2312"|"hz-gb-2312"|"IBM00858"|"IBM00924"|"IBM01047"|"IBM01140"|"IBM01141"|"IBM01142"|"IBM01143"|"IBM01144"|"IBM01145"|"IBM01146"|"IBM01147"|"IBM01148"|"IBM01149"|"IBM037"|"IBM1026"|"IBM273"|"IBM277"|"IBM278"|"IBM280"|"IBM284"|"IBM285"|"IBM290"|"IBM297"|"IBM420"|"IBM423"|"IBM424"|"IBM437"|"IBM500"|"ibm737"|"ibm775"|"ibm850"|"ibm852"|"IBM855"|"ibm857"|"IBM860"|"ibm861"|"IBM863"|"IBM864"|"IBM865"|"ibm869"|"IBM870"|"IBM871"|"IBM880"|"IBM905"|"IBM-Thai"|"iso-2022-jp"|"iso-2022-jp"|"iso-2022-kr"|"iso-8859-1"|"iso-8859-13"|"iso-8859-15"|"iso-8859-2"|"iso-8859-3"|"iso-8859-4"|"iso-8859-5"|"iso-8859-6"|"iso-8859-7"|"iso-8859-8"|"iso-8859-8-i"|"iso-8859-9"|"Johab"|"koi8-r"|"koi8-u"|"ks_c_5601-1987"|"macintosh"|"shift_jis"|"us-ascii"|"utf-16"|"utf-16BE"|"utf-32"|"utf-7"|"utf-8"|"windows-1250"|"windows-1251"|"Windows-1252"|"windows-1253"|"windows-1254"|"windows-1255"|"windows-1256"|"windows-1257"|"windows-1258"|"windows-874"|"x-Chinese-CNS"|"x-Chinese-Eten"|"x-cp20001"|"x-cp20003"|"x-cp20004"|"x-cp20005"|"x-cp20261"|"x-cp20269"|"x-cp20936"|"x-cp20949"|"x-cp50227"|"x-EBCDIC-KoreanExtended"|"x-IA5"|"x-IA5-German"|"x-IA5-Norwegian"|"x-IA5-Swedish"|"x-iscii-as"|"x-iscii-be"|"x-iscii-de"|"x-iscii-gu"|"x-iscii-ka"|"x-iscii-ma"|"x-iscii-or"|"x-iscii-pa"|"x-iscii-ta"|"x-iscii-te"|"x-mac-arabic"|"x-mac-ce"|"x-mac-chinesesimp"|"x-mac-chinesetrad"|"x-mac-croatian"|"x-mac-cyrillic"|"x-mac-greek"|"x-mac-hebrew"|"x-mac-icelandic"|"x-mac-japanese"|"x-mac-korean"|"x-mac-romanian"|"x-mac-thai"|"x-mac-turkish"|"x-mac-ukrainian" )

**Description:** Specifies the encoding to use if no Unicode Byte Order Mark is found; the default is to guess the encoding based on the file&apos;s content.

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Open Text File Charset( "utf-8" ) );

```

### Open character columns as compact columns

**Syntax:** obj << Open character columns as compact columns( state=0|1 )

**Description:** Automatically open character columns as compact columns when JMP determines it&apos;s advantageous

**JMP Version Added:** 18

### Open files from outside projects in

**Syntax:** obj << Open files from outside projects in( "No Project"|"Open Project or No Project"|"Open Project or New Project"|"New Project" )

**JMP Version Added:** 16

### Outline Close Orientation

**Syntax:** obj << Outline Close Orientation( "Auto"|"Horizontal"|"Vertical" )

**Description:** Option for Outline Boxes to collapse vertically to save horizontal space

### Parallel Data Table Column Decompression

**Syntax:** obj << Parallel Data Table Column Decompression( state=0|1 )

**Description:** Changes the default setting for decompressing columns in parallel. The default value is enabled. Turning off the option might allow some very large tables to load.

```

Names Default To Here( 1 );
//Caution: Changing a preference will
//affect the default behavior of JMP.

Preferences[1] << Set( Parallel Data Table Column Decompression( 0 ) );

```

### Partial Selection Indicator

**Syntax:** obj << Partial Selection Indicator( "None"|"Bar"|"Pie"|"Waffle" )

**Description:** How a partial selection of a group is indicated.

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Partial Selection Mode( "Bar" ) );

```

### Platform Launch Actions

**Syntax:** obj << Platform Launch Actions( state=0|1 )

**JMP Version Added:** 16

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Platform Launch Actions( 1 ) );

```

### Prefer DSN-less ODBC Connection Strings

**Syntax:** Preferences[1] << Name("Prefer DSN-less ODBC Connection Strings") ( state = 0|1 )

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 
     
Preferences[1] << Name( "Prefer DSN-less ODBC Connection Strings" )(1);

```

### Preserve SAS formats when exporting to SAS

**Syntax:** obj << Preserve SAS formats when exporting to SAS( state=0|1 )

**Description:** Changes the default setting for preserving SAS formats when exporting to SAS.

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Preserve SAS formats when exporting to SAS( 1 ) );

```

### Preserve SAS variable names when exporting to SAS

**Syntax:** obj << Preserve SAS variable names when exporting to SAS( state=0|1 )

**Description:** Changes the default setting for preserving SAS variable names when exporting to SAS.

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Preserve SAS variable names when exporting to SAS( 1 ) );

```

### Print Data Grid as is

**Syntax:** obj << Print Data Grid as is( state=0|1 )

**Description:** Changes the default setting for printing the data grid as it appears on the screen.

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Print Data Grid as is( 1 ) );

```

### Prompt to save when closing summary tables

**Syntax:** obj << Prompt to save when closing summary tables( state=0|1 )

**Description:** Prompt or no prompt when closing the summary table.

**JMP Version Added:** 14

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Close report action( "Prompt" ) );

```

### Proxy Port

**Syntax:** obj << Proxy Port( number )

**Description:** Use the specified proxy port.

**JMP Version Added:** 15

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Proxy Port( 80 ) );

```

### Proxy Server

**Syntax:** obj << Proxy Server( text )

**Description:** Use the specified proxy.

**JMP Version Added:** 15

```

Names Default To Here( 1 );

//Caution: Changing a preference will 
//affect the default behavior of JMP.

url = "http:://myproxy.com:80";
Preferences[1] << Set( Proxy Server( url ) );

```

### Proxy User

**Syntax:** obj << Proxy User( text )

**Description:** The user name and password to use for proxy authentication. [user name]:[password]

**JMP Version Added:** 15

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Proxy User( "clark%20kent:superman" ) );

```

### Reopen the initial JMP window on last window close

**Syntax:** obj << Reopen the initial JMP window on last window close( state=0|1 )

**Description:** Determines whether the initial JMP window is automatically reopened when the last JMP window is closed

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Reopen the initial JMP window on last window close( 1 ) );

```

### Report Invalid Display Box Messages

**Syntax:** obj << Report Invalid Display Box Messages( state=0|1 )

**Description:** Changes the default setting for outputting errors on invalid messages for display boxes.

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Report Invalid Display Box Messages( 1 ) );

```

### Report JSL warnings and errors interactively

**Syntax:** obj << Report JSL warnings and errors interactively( state=0|1 )

**Description:** Warnings and errors from submitting JSL will be logged and shown interactively. When disabled, warnings and errors will only be logged

**JMP Version Added:** 15

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Report JSL warnings and errors interactively( 1 ) );

```

### Report Recent Problems

**Syntax:** obj << Report Recent Problems( state=0|1 )

### Report Snapshot On Close

**Syntax:** obj << Report Snapshot On Close( state=0|1 )

**JMP Version Added:** 16

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Report Snapshot On Close( 1 ) );

```

### Row Editor Always Show All Columns

**Syntax:** obj << Row Editor Always Show All Columns( state=0|1 )

**Description:** If checked, the row editor will shows all the columns in the data table whether or not there are selected columns.

**JMP Version Added:** 16

### Ruler Tool Units

**Syntax:** obj << Ruler Tool Units( "Kilometers"|"Miles" )

**Description:** Changes the units shown by the graph tools ruler when used on a map in Graph Builder.

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Ruler Tool Units( "Miles" ) );

```

### SAS Automatically Generate ODS results

**Syntax:** obj << SAS Automatically Generate ODS results( state=0|1 )

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( "SAS Automatically Generate ODS results"n( 1 ) );

```

### SAS Connect to CAS with SAS Viya

**Syntax:** obj << SAS Connect to CAS with SAS Viya( state=0|1 )

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 
          
Preferences[1] << Set( "SAS Connect to CAS with SAS Viya"n( 1 ) );

```

### SAS Data Import Close Warning

**Syntax:** obj << SAS Data Import Close Warning( state=0|1 )

**JMP Version Added:** 19

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( "SAS Data Import Close Warning"n( 0 ) );

```

### SAS Data Import Uses Labels

**Syntax:** obj << SAS Data Import Uses Labels( state=0|1 )

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( "SAS Data Import Uses Labels"n( 1 ) );

```

### SAS Import generated datasets into JMP

**Syntax:** obj << SAS Import generated datasets into JMP( state=0|1 )

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( "SAS Import generated datasets into JMP"n( 1 ) );

```

### SAS ODS Results Format

**Syntax:** obj << SAS ODS Results Format( "HTML"|"TEXT" )

### SAS Organize results in JMP project

**Syntax:** obj << SAS Organize results in JMP project( state=0|1 )

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( "SAS Organize results in JMP project"n( 1 ) );

```

### SAS Transport Use UTF8

**Syntax:** obj << SAS Transport Use UTF8( state=0|1 )

**Description:** Change the default character encoding for Transport files to UTF-8

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( SAS Transport Use UTF8( 1 ) );

```

### SPSSMultiResponseDelimiter

**Syntax:** obj << SPSSMultiResponseDelimiter( text=| )

**Description:** "|" by default.

**JMP Version Added:** 16

### Save Data Table Columns GZ Compressed

**Syntax:** obj << Save Data Table Columns GZ Compressed( state=0|1 )

**Description:** Changes the default setting for saving data tables in a GZip compressed format.

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Save Data Table Columns GZ Compressed( 1 ) );

```

### Save Image DPI

**Syntax:** obj << Save Image DPI( number )

**Description:** Specifies a DPI setting to use when saving images, otherwise a default value is used.

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Save Image DPI( 300 ) );

```

### Save Journals GZ Compressed

**Syntax:** obj << Save Journals GZ Compressed( state=0|1 )

**Description:** Changes the default setting for saving journals in a GZip compressed format.

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Save Journals GZ Compressed( 1 ) );

```

### Save Scripts in English

**Syntax:** obj << Save Scripts in English( state=0|1 )

**Description:** Changes the default setting for saving scripts in English rather than in the language displayed.

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Save Scripts in English( 1 ) );

```

### Save Text Files as Unicode

**Syntax:** obj << Save Text Files as Unicode( state=0|1 )

**Description:** Changes the default setting for saving text files in Unicode format.

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Save Text Files as Unicode( 1 ) );

```

### Save table with report

**Syntax:** obj << Save table with report( "Embed"|"Separate"|"Prompt" )

**Description:** Changes how data is stored with saved reports

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Save table with report( prompt | embed | separate ) );

```

### Save the session when exiting

**Syntax:** obj << Save the session when exiting( "Always"|"Never"|"Prompt" )

**Description:** Changes the default setting for saving the session on exiting JMP.

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Save table with report( "Prompt" ) );

```

### Selected Marker Color

**Syntax:** obj << Selected Marker Color( color )

**Description:** Changes the color of selected markers when using Selected Same Color in Markers Selection Mode

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Selected Marker Color( "Cyan" ) );

```

### Semantic formatting

**Syntax:** obj << Semantic formatting

**Description:** Creates a semantic format that is used when its criteria matches the current report context.

**JMP Version Added:** 17

**Example 1**

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Oneway( Y( :height ), X( :sex ), Means( 1 ), Mean Diamonds( 1 ) );

Preferences(
	Semantic formatting(
		Add Semantic Format(
			Format Name( "My Format 1" ),
			Semantic Format( Format( "Fixed Dec", 11, 1 ) ),
			Criteria(
				Object Name( "*mean*" ),
				Outline Path( "** :: Means for Oneway Anova" )
			)
		),
		Add Semantic Format(
			Format Name( "My Format 2" ),
			Semantic Format( Format( "Fixed Dec", 11, 2 ) ),
			Criteria(
				Object Name( "*mean*" ),
				Outline Path( "** :: Means for Oneway Anova" ),
				Row Name( "M" )
			)
		)
	)
);

```

**Example 2**

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences( Semantic formatting( Clear ) );

```

### Sequential Color Theme

**Syntax:** obj << Sequential Color Theme( "name" )

**Description:** Changes the default setting for the continuous color theme appearing in all graphs.

**JMP Version Added:** 16

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Show( Get Preference( Continuous Color Theme ) );
Set Preference( Sequential Color Theme( "Green to Purple" ) );
Show( Get Preference( Sequential Color Theme ) );

```

### Set

**Syntax:** obj << Set

**Description:** Sets a specified preference.

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 
Preferences[1] << Set( Show the Tip of the Day at startup( 1 ) );

```

### Shade Alternate Table Rows

**Syntax:** obj << Shade Alternate Table Rows( state=0|1 )

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Shade Alternate Table Rows( 1 ) );

```

### Shade Table Cells

**Syntax:** obj << Shade Table Cells( state=0|1 )

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Shade Table Cells( 1 ) );

```

### Shade Table Headings

**Syntax:** obj << Shade Table Headings( state=0|1 )

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Shade Table Headings( 1 ) );

```

### Shape Boundary Color

**Syntax:** obj << Shape Boundary Color( color )

**Description:** Changes the default setting for the color of shape boundaries drawn on all graphs, such as background maps.

**JMP Version Added:** 16

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Shape Boundary Color( "Black" ) );

```

### Show Alternate Column Name

**Syntax:** obj << Show Alternate Column Name( state=0|1 )

**Description:** Change default setting for showing alternate name in dialog and data table columns panel

### Show Personalization at startup

**Syntax:** obj << Show Personalization at startup( state=0|1 )

**Description:** Personalization Dialog will show the next time JMP starts.

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Show Personalization at startup( 1 ) );

```

### Show Search box on Columns Panel

**Syntax:** obj << Show Search box on Columns Panel( state=0|1 )

**Description:** Show the search edit box on the columns panel by default

**JMP Version Added:** 16

### Show Status Bar

**Syntax:** obj << Show Status Bar( state=0|1 )

**Description:** Changes the default setting for displaying the Status Bar.

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Show Status Bar( 1 ) );

```

### Show conditional formatting

**Syntax:** obj << Show conditional formatting( "Always"|"Screen only"|"Never" )

**Description:** Changes the default setting for displaying the conditional formatting in reports.

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Show conditional formatting( "Always" ) );

```

### Show menu tips

**Syntax:** obj << Show menu tips( state=0|1 )

**Description:** Changes the default setting for displaying the menu tips that appear when you hover the mouse over a red triangle menu item.

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Show menu tips( 1 ) );

```

### Show missing data bars or bins in summary graphs

**Syntax:** obj << Show missing data bars or bins in summary graphs( state=0|1 )

**Description:** Whether missing data bars or bins are initially displayed in summary graphs. Whatever the value here, they can be toggled for individual summary graphs by right-clicking on the summary graph and selecting "Missing values bar" or "Missing values bin".

**JMP Version Added:** 16

### Show semantic formatting

**Syntax:** obj << Show semantic formatting( "Always"|"No Row Matching"|"Never" )

**Description:** Changes the default setting for using semantic formatting in reports. Possible values are: "Always", "No Row Matching", and "Never". Use "No Row Matching" to disable row-specific semantic formats.

**JMP Version Added:** 17

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Show semantic formatting( "Always" ) );

```

### Show summary graphs below column names

**Syntax:** obj << Show summary graphs below column names( state=0|1 )

**Description:** Whether the summary graphs are initially displayed in the data table between the column names and the data cells, if the number of rows is under some performance threshold (3 million rows). Whatever the initial state, the display can be toggled for an individual data table with the icon next to the column names.

**JMP Version Added:** 15

### Show the Quick Start at startup

**Syntax:** obj << Show the Quick Start at startup( state=0|1 )

**Description:** Changes the default setting for displaying the Quick Start window.

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Show the Quick Start at startup( 1 ) );

```

### Summary Graph Continuous Color

**Syntax:** obj << Summary Graph Continuous Color( color )

**Description:** Set the color for continuous data in summary graphs and data filters

**JMP Version Added:** 16

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences( Summary Graph Continuous Color( RGB Color( 0.5, 0.9, 0.9 ) ) );

```

### Summary Graph Continuous Highlight Color

**Syntax:** obj << Summary Graph Continuous Highlight Color( color )

**Description:** Set the highlight color for continuous data in summary graphs and data filters

**JMP Version Added:** 16

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences( Summary Graph Continuous Highlight Color( RGB Color( 0.5, 0.9, 0.9 ) ) );

```

### Summary Graph Continuous Missing Color

**Syntax:** obj << Summary Graph Continuous Missing Color( color )

**Description:** Set the color for missing continuous data in summary graphs and data filters

**JMP Version Added:** 16

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences( Summary Graph Continuous Missing Color( RGB Color( 0.5, 0.9, 0.9 ) ) );

```

### Summary Graph Continuous Missing Highlight Color

**Syntax:** obj << Summary Graph Continuous Missing Highlight Color( color )

**Description:** Set the highlight color for missing continuous data in summary graphs and data filters

**JMP Version Added:** 16

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences(
	Summary Graph Continuous Missing Highlight Color( RGB Color( 0.5, 0.9, 0.9 ) )
);

```

### Summary Graph Name Ordered Color

**Syntax:** obj << Summary Graph Name Ordered Color( color )

**Description:** Set the color for name-ordered data in summary graphs and data filters

**JMP Version Added:** 16

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences( Summary Graph Name Ordered Color( RGB Color( 0.5, 0.9, 0.9 ) ) );

```

### Summary Graph Name Ordered Highlight Color

**Syntax:** obj << Summary Graph Name Ordered Highlight Color( color )

**Description:** Set the highlight color for name-ordered data in summary graphs and data filters

**JMP Version Added:** 16

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences( Summary Graph Name Ordered Highlight Color( RGB Color( 0.5, 0.9, 0.9 ) ) );

```

### Summary Graph Other Color

**Syntax:** obj << Summary Graph Other Color( color )

**Description:** Set the color for the other bar in summary graphs and data filters

**JMP Version Added:** 16

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences( Summary Graph Other Color( RGB Color( 0.5, 0.9, 0.9 ) ) );

```

### Summary Graph Other Highlight Color

**Syntax:** obj << Summary Graph Other Highlight Color( color )

**Description:** Set the highlight color for the other bar in summary graphs and data filters

**JMP Version Added:** 16

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences( Summary Graph Other Highlight Color( RGB Color( 0.5, 0.9, 0.9 ) ) );

```

### Summary Graph Run Chart Color

**Syntax:** obj << Summary Graph Run Chart Color( color )

**Description:** Set the color for the other bar in summary graphs and data filters

**JMP Version Added:** 18

```

Names Default To Here( 1 );
//Caution: Changing a preference will
//affect the default behavior of JMP.

Preferences( Summary Graph Run Chart Color( RGB Color( 0.5, 0.1, 0.9 ) ) );

```

### Summary Graph Size Ordered Color

**Syntax:** obj << Summary Graph Size Ordered Color( color )

**Description:** Set the color for size-ordered data in summary graphs and data filters

**JMP Version Added:** 16

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences( Summary Graph Size Ordered Color( RGB Color( 0.5, 0.9, 0.9 ) ) );

```

### Summary Graph Size Ordered Highlight Color

**Syntax:** obj << Summary Graph Size Ordered Highlight Color( color )

**Description:** Set the highlight color for size-ordered data in summary graphs and data filters

**JMP Version Added:** 16

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences( Summary Graph Size Ordered Highlight Color( RGB Color( 0.5, 0.9, 0.9 ) ) );

```

### Suppress Formula Eval on Open

**Syntax:** obj << Suppress Formula Eval on Open( state=0|1 )

**Description:** Changes the default setting for suppressing formula evaluations when opening a data table.

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Suppress Formula Eval on Open( 1 ) );

```

### Table Column Borders

**Syntax:** obj << Table Column Borders( state=0|1 )

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Table Column Borders( 1 ) );

```

### Table Column Group Borders

**Syntax:** obj << Table Column Group Borders( state=0|1 )

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Table Column Group Borders( 1 ) );

```

### Table Heading Column Borders

**Syntax:** obj << Table Heading Column Borders( state=0|1 )

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Table Heading Column Borders( 1 ) );

```

### Table Row Borders

**Syntax:** obj << Table Row Borders( state=0|1 )

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Table Row Borders( 1 ) );

```

### Task Bar Strategy

**Syntax:** obj << Task Bar Strategy( "All windows"|"Main window only"|"Main and data tables" )

**Description:** Determines which JMP windows are displayed on the Windows task bar

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Task Bar Strategy( "All Windows" ) );

```

### Transparent background for report PNG images

**Syntax:** obj << Transparent background for report PNG images( state=0|1 )

**Description:** When reports or portions of reports are saved as PNG images, the background will be transparent.

**JMP Version Added:** 14

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Transparent background for report PNG images( 1 ) );

```

### Underline Table Headings

**Syntax:** obj << Underline Table Headings( state=0|1 )

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Underline Table Headings( 1 ) );

```

### Use Excel Labels as Headings

**Syntax:** obj << Use Excel Labels as Headings( "Use best guess"|"Always"|"Never" )

**Description:** Changes the default setting for importing Excel labels as JMP Column names when opening Excel files.

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Use Excel Labels as Headings( "Always" ) );

```

### Use Greek letters

**Syntax:** obj << Use Greek letters( state=0|1 )

**Description:** Changes the default setting for enabling Greek letters in JMP reports.

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Use Greek letters( 1 ) );

```

### Use JMP Locale Settings

**Syntax:** obj << Use JMP Locale Settings( state=0|1 )

**Description:** Changes the default behavior for displaying number, date and currency formats. Note: This is available on Windows only.

```

Names Default To Here( 1 );
//Caution: Changing a preference will affect 
//the default behavior of JMP. 

Preferences[1] << Set( Use JMP Locale Settings( 1 ) );

```

### Use Numerical Ordering

**Syntax:** obj << Use Numerical Ordering( state=0|1 )

**Description:** Configure column sorting for new columns so that text containing numbers is sorted in numerical order. Columns converted to character type will also be affected if they don&apos;t already contain a Value Order property.

**JMP Version Added:** 16

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences( Use Numerical Ordering( 0 ) );

```

### Use Project Log

**Syntax:** obj << Use Project Log( "Always"|"If Open"|"Never" )

**Description:** Whether to send log messages generated by scripts and windows in a project to the project log window (instead of the main log window)

**JMP Version Added:** 16

### Use SPSS labels for column names during import

**Syntax:** obj << Use SPSS labels for column names during import( state=0|1 )

**Description:** Changes the default setting for importing SPSS labels as JMP Column names when opening SPSS files.

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Use SPSS labels for column names during import( 1 ) );

```

### Use Thousands Separator

**Syntax:** obj << Use Thousands Separator( state=0|1 )

**Description:** Changes the default setting for using the thousands separator in numeric output.

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Use Thousands Separator( 1 ) );

```

### Use Triple-S Labels as Headings

**Syntax:** obj << Use Triple-S Labels as Headings( state=0|1 )

**Description:** Changes the default setting for use of labels as column names for Triple-S variables

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( "Use Triple-S Labels as Headings"n( 1 ) );

```

### Use a Floating Window for Data Filters

**Syntax:** obj << Use a Floating Window for Data Filters( state=0|1 )

**Description:** When set, data filters use a window that floats above their data tables and associated windows. Otherwise, data filters use a window that can be arranged with other windows normally.

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Use a Floating Window for Data Filters( 1 ) );

```

### Use an Asterisk with the PValue Format

**Syntax:** obj << Use an Asterisk with the PValue Format( state=0|1 )

**Description:** PValue format will append an asterisk in numeric columns

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Use an Asterisk with the PValue Format( 1 ) );

```

### Use column references in Dispatch

**Syntax:** obj << Use column references in Dispatch( state=0|1 )

**Description:** When saving report customizations, use column references instead of strings when referring to customized elements. This generates scripts that are more robust against column name changes. Note that customizations that are saved using this preference might work only in JMP 18.0 and newer.

**JMP Version Added:** 18

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Use column references in Dispatch( 1 ) );

```

### Use math symbols

**Syntax:** obj << Use math symbols( state=0|1 )

**Description:** Changes the default setting for enabling math symbols in JMP reports.

```

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Use math symbols( 1 ) );

```

### Virtual Join Auto Open Linked Table

**Syntax:** obj << Virtual Join Auto Open Linked Table( state=0|1 )

**Description:** Automatically open the data table that this column references.

**JMP Version Added:** 16

### Virtual Join Use Linked Column Name

**Syntax:** obj << Virtual Join Use Linked Column Name( state=0|1 )

**Description:** Name the virtual column with the linked column&apos;s name.

**JMP Version Added:** 16

### Warn that compact columns cannot be opened in JMP 17 and earlier

**Syntax:** obj << Warn that compact columns cannot be opened in JMP 17 and earlier( state=0|1 )

**Description:** The compact file format cannot be opened in JMP 17 and earlier.

**JMP Version Added:** 18

### Warn when referenced table name has changed

**Syntax:** obj << Warn when referenced table name has changed( state=0|1 )

**Description:** Give a warning message when a virtually linked (referenced) table&apos;s name has changed.

**JMP Version Added:** 15

