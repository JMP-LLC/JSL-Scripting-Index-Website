# Fit Model



## Fit Causal Treatment

### Associated Constructors

#### Fit Causal Treatment

**Syntax:** Fit Model( Y( columns ), &lt;Effects( columns )&gt;, Treatment( column ), Personality( "Causal Treatment" ) )

**Description:** Fits models for a causal treatment where adjustments are made for the probability of a treatment.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	Run
);

```

### Item Messages

#### Model Dialog

**Syntax:** obj &lt;&lt; Model Dialog

#### Show Tips and Interpretations

**Syntax:** obj &lt;&lt; Show Tips and Interpretations( state=0|1 )

### Shared Item Messages

#### Action

**Syntax:** obj &lt;&lt; Action

**Description:** All-purpose trapdoor within a platform to insert expressions to evaluate. Temporarily sets the DisplayBox and DataTable contexts to the Platform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

#### Apply Preset

**Syntax:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**Description:** Apply a previously created preset to the object, updating the options and customizations to match the saved settings.

**Anonymous preset**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();
dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );
Wait( 1 );
obj2 << Apply Preset( preset );

```

**Search by name**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

**Search within folder(s)**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

#### Automatic Recalc

**Syntax:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**Description:** Redoes the analysis automatically for exclude and data changes. If the Automatic Recalc option is turned on, you should consider using Wait(0) commands to ensure that the exclude and data changes take effect before the recalculation.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	Run
);
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

#### Broadcast

**Syntax:** obj &lt;&lt; Broadcast(message)

**Description:** Broadcasts a message to a platform. If return results from individual objects are tables, they are concatenated if possible, and the final format is identical to either the result from the Save Combined Table option in a Table Box or the result from the Concatenate option using a Source column. Other than those, results are stored in a list and returned.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
objs = Control Chart Builder(
	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),
	By( :OPERATOR )
);
objs[1] << Broadcast( Save Summaries );

```

#### Column Switcher

**Syntax:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Description:** Adds a control panel for changing the platform&apos;s variables

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);

```

#### Copy ByGroup Script

**Syntax:** obj &lt;&lt; Copy ByGroup Script

**Description:** Create a JSL script to produce this analysis, and put it on the clipboard.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	By( _bycol ),
	Run
);
obj[1] << Copy ByGroup Script;

```

#### Copy Script

**Syntax:** obj &lt;&lt; Copy Script

**Description:** Create a JSL script to produce this analysis, and put it on the clipboard.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	Run
);
obj << Copy Script;

```

#### Data Table Window

**Syntax:** obj &lt;&lt; Data Table Window

**Description:** Move the data table window for this analysis to the front.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	Run
);
obj << Data Table Window;

```

#### Get By Levels

**Syntax:** obj &lt;&lt; Get By Levels

**Description:** Returns an associative array mapping the by group columns to their values.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

#### Get ByGroup Script

**Syntax:** obj &lt;&lt; Get ByGroup Script

**Description:** Creates a script (JSL) to produce this analysis and returns it as an expression.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	By( _bycol ),
	Run
);
t = obj[1] << Get ByGroup Script;
Show( t );

```

#### Get Container

**Syntax:** obj &lt;&lt; Get Container

**Description:** Returns a reference to the container box that holds the content for the object.

**General**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	Run
);
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**Platform with Filter**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Show Control Panel( 0 ),
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),
	Local Data Filter(
		Add Filter(
			columns( :age, :sex, :height ),
			Where( :age == {12, 13, 14} ),
			Where( :sex == "F" ),
			Where( :height >= 55 ),
			Display( :age, N Items( 6 ) )
		)
	)
);
New Window( "platform boxes",
	H List Box(
		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),
		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )
	)
);

```

#### Get Data Table

**Syntax:** obj &lt;&lt; Get Data Table

**Description:** Returns a reference to the data table.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	Run
);
t = obj << Get Datatable;
Show( N Rows( t ) );

```

#### Get Group Platform

**Syntax:** obj &lt;&lt; Get Group Platform

**Description:** Return the Group Platform object if this platform is part of a Group. Otherwise, returns Empty().

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );
group = biv[1] << Get Group Platform;
Wait( 1 );
group << Layout( "Arrange in Tabs" );

```

#### Get Script

**Syntax:** obj &lt;&lt; Get Script

**Description:** Creates a script (JSL) to produce this analysis and returns it as an expression.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	Run
);
t = obj << Get Script;
Show( t );

```

#### Get Script With Data Table

**Syntax:** obj &lt;&lt; Get Script With Data Table

**Description:** Creates a script(JSL) to produce this analysis specifically referencing this data table and returns it as an expression.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	Run
);
t = obj << Get Script With Data Table;
Show( t );

```

#### Get Timing

**Syntax:** obj &lt;&lt; Get Timing

**Description:** Times the platform launch.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	Run
);
t = obj << Get Timing;
Show( t );

```

#### Get Web Support

**Syntax:** obj &lt;&lt; Get Web Support

**Description:** Return a number indicating the level of Interactive HTML support for the display object. 1 means some or all elements are supported. 0 means no support.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

#### Get Where Expr

**Syntax:** obj &lt;&lt; Get Where Expr

**Description:** Returns the Where expression for the data subset, if the platform was launched with By() or Where(). Otherwise, returns Empty()

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );
Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

#### Ignore Platform Preferences

**Syntax:** Ignore Platform Preferences( state=0|1 )

**Description:** Ignores the current settings of the platform&apos;s preferences. The message is ignored when sent to the platform after creation.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Ignore Platform Preferences( 1 ),
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

#### Local Data Filter

**Syntax:** obj &lt;&lt; Local Data Filter

**Description:** To filter data to specific groups or ranges, but local to this platform

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :country ) ),
	Local Data Filter(
		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),
		Mode( Show( 1 ), Include( 1 ) )
	)
);

```

#### New JSL Preset

**Syntax:** New JSL Preset( preset )

**Description:** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
preset = obj << New JSL Preset( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) );
Wait( 1 );
obj << Apply Preset( preset );

```

#### New Preset

**Syntax:** obj = New Preset()

**Description:** Create an anonymous preset representing the options and customizations applied to the object. This object can be passed to Apply Preset to copy the settings to another object of the same type.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

#### Paste Local Data Filter

**Syntax:** obj &lt;&lt; Paste Local Data Filter

**Description:** Apply the local data filter from the clipboard to the current report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
filter = dist << Local Data Filter(
	Add Filter( columns( :Region ), Where( :Region == "MW" ) )
);
filter << Copy Local Data Filter;
dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );
Wait( 1 );
dist2 << Paste Local Data Filter;

```

#### Redo Analysis

**Syntax:** obj &lt;&lt; Redo Analysis

**Description:** Rerun this same analysis in a new window. The analysis will be different if the data has changed.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	Run
);
obj << Redo Analysis;

```

#### Redo ByGroup Analysis

**Syntax:** obj &lt;&lt; Redo ByGroup Analysis

**Description:** Rerun this same analysis in a new window. The analysis will be different if the data has changed.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	By( _bycol ),
	Run
);
obj[1] << Redo ByGroup Analysis;

```

#### Relaunch Analysis

**Syntax:** obj &lt;&lt; Relaunch Analysis

**Description:** Opens the platform launch window and recalls the settings that were used to create the report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	Run
);
obj << Relaunch Analysis;

```

#### Relaunch ByGroup

**Syntax:** obj &lt;&lt; Relaunch ByGroup

**Description:** Opens the platform launch window and recalls the settings that were used to create the report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	By( _bycol ),
	Run
);
obj[1] << Relaunch ByGroup;

```

#### Remove Column Switcher

**Syntax:** obj &lt;&lt; Remove Column Switcher

**Description:** Removes the most recent Column Switcher that has been added to the platform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
Wait( 2 );
obj << Remove Column Switcher;

```

#### Remove Local Data Filter

**Syntax:** obj &lt;&lt; Remove Local Data Filter

**Description:** If a local data filter has been created, this removes it and restores the platform to use all the data in the data table directly

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dist = dt << Distribution(
	Nominal Distribution( Column( :country ) ),
	Local Data Filter(
		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),
		Mode( Show( 1 ), Include( 1 ) )
	)
);
Wait( 2 );
dist << remove local data filter;

```

#### Render Preset

**Syntax:** Render Preset( preset )

**Description:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

#### Report

**Syntax:** obj &lt;&lt; Report;Report( obj )

**Description:** Returns a reference to the report object.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	Run
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Report View

**Syntax:** obj &lt;&lt; Report View( "Full"|"Summary" )

**Description:** The report view determines the level of detail visible in a platform report. Full shows all of the detail, while Summary shows only select content, dependent on the platform. For customized behavior, display boxes support a <<Set Summary Behavior message.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	Run
);
obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**Syntax:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description:** Creates a JSL script to produce this analysis, and save it as a table property in the data table. You can specify a name for the script. The Append Suffix option appends a numeric suffix to the script name, which differentiates the script from an existing script with the same name. The Prompt option prompts the user to specify a script name. The Replace option replaces an existing script with the same name.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**Syntax:** obj &lt;&lt; Save ByGroup Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**Syntax:** obj &lt;&lt; Save ByGroup Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**Syntax:** obj &lt;&lt; Save Script for All Objects

**Description:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	Run
);
obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**Syntax:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Description:** Saves a script for all report objects to the current data table. This option is useful when you have multiple reports in the window. The script is named after the first platform unless you specify the script name in quotes.

**Example 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	By( _bycol ),
	Run
);
obj[1] << Save Script for All Objects To Data Table;

```

**Example 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	By( _bycol ),
	Run
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**Syntax:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description:** Create a JSL script to produce this analysis, and save it as a table property in the data table.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	Run
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**Syntax:** obj &lt;&lt; Save Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	Run
);
obj << Save Script to Journal;

```

#### Save Script to Report

**Syntax:** obj &lt;&lt; Save Script to Report

**Description:** Create a JSL script to produce this analysis, and show it in the report itself. Useful to preserve a printed record of what was done.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	Run
);
obj << Save Script to Report;

```

#### Save Script to Script Window

**Syntax:** obj &lt;&lt; Save Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	Run
);
obj << Save Script to Script Window;

```

#### SendToByGroup

**Syntax:** SendToByGroup( {":Column == level"}, command );

**Description:** Sends platform commands or display customization commands to each level of a by-group.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	By( :Sex ),
	SendToByGroup(
		{:sex == "F"},
		Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) )
	),
	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) )
);

```

#### SendToEmbeddedScriptable

**Syntax:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Description:** SendToEmbeddedScriptable restores settings of embedded scriptable objects.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
dt << Life Distribution(
	Y( :Time ),
	Censor( :Censor ),
	Censor Code( 1 ),
	<<Fit Weibull,
	SendToEmbeddedScriptable(
		Dispatch(
			{"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},
			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}
		)
	)
);

```

#### SendToReport

**Syntax:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Description:** Send To Report is used in tandem with the Dispatch command to customize the appearance of a report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :age ) ),
	Continuous Distribution( Column( :weight ) ),
	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) )
);

```

#### Sync to Data Table Changes

**Syntax:** obj &lt;&lt; Sync to Data Table Changes

**Description:** Sync with the exclude and data changes that have been made.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
Wait( 1 );
dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );
dist << Sync To Data Table Changes;

```

#### Title

**Syntax:** obj &lt;&lt; Title( "new title" )

**Description:** Sets the title of the platform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	Run
);
obj << Title( "My Platform" );

```

#### Top Report

**Syntax:** obj &lt;&lt; Top Report

**Description:** Returns a reference to the root node in the report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	Run
);
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Transform Column

**Syntax:** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Description:** Create a transform column in the local context of an object, usually a platform. The transform column is active only for the lifetime of the platform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),
	Continuous Distribution( Column( :"age^2"n ) )
);

```

#### View Web XML

**Syntax:** obj &lt;&lt; View Web XML

**Description:** Returns the XML code that is used to create the interactive HTML report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

#### Window View

**Syntax:** obj = Fit Causal Treatment(...Window View( "Visible"|"Invisible"|"Private" )...)

**Description:** Set the type of the window to be created for the report. By default a Visible report window will be created. An Invisible window will not appear on screen, but is discoverable by functions such as Window(). A Private window responds to most window messages but is not discoverable and must be addressed through the report object

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );
eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;
biv << Close Window;
New Window( "Bivariate Equation",
	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) )
);

```

## Fit Generalized Linear Model

### Associated Constructors

#### Generalized Linear Model

**Syntax:** Fit Model( Y( column ), Effects( columns ), Personality( "Generalized Linear Model" ), GLM Distribution( distribution name ), Link Function( link type ) )

**Description:** Fits a generalized linear model using various distribution and link functions. Techniques include logistic, Poisson, and exponential regression.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);

```

### Item Messages

#### Contour Profiler

**Syntax:** obj &lt;&lt; Contour Profiler( state=0|1 )

**Description:** Shows or hides the contour profiler, which shows the contours of the response graphically for two factors at a time.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Contour Profiler( 1 );

```

#### Contrast

**Syntax:** obj &lt;&lt; (effect name &lt;&lt; Contrast( [l1 l2 l3 ...] ))

**Description:** Runs a customized F test for the statistical contrasts of treatment levels for an effect in the model. Specify each contrast as a row vector. Note: Specify the effect name as a string.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Overdispersion Tests and Intervals( 0 ),
	"Firth Bias-Adjusted Estimates"n( 0 ),
	Run
);
obj << ("color" << Contrast( [1 0 -0.5 -0.5] ));

```

#### Correlation of Estimates

**Syntax:** obj &lt;&lt; Correlation of Estimates( state=0|1 )

**Description:** Shows or hides the matrix of correlations between the parameter estimates for the specified fit.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Binomial" ),
	Link Function( "Logit" ),
	Run
);
obj << Correlation of Estimates( 1 );

```

#### Covariance of Estimates

**Syntax:** obj &lt;&lt; Covariance of Estimates( state=0|1 )

**Description:** Shows or hides the matrix of covariances between the parameter estimates for the specified fit.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Covariance of Estimates( 1 );

```

#### Custom Test

**Syntax:** obj &lt;&lt; Custom Test( [ l1 l2 l3 ... ], &lt;Label( name )&gt; )

**Description:** Runs a customized F test that contrasts the different effects in the model.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Overdispersion Tests and Intervals( 0 ),
	"Firth Bias-Adjusted Estimates"n( 0 ),
	Run
);
obj << Custom Test( [0 .5 0 0 0 0 0 .5 -1], Label( "Test 1" ) );

```

#### Deviance Residuals

**Syntax:** obj &lt;&lt; Deviance Residuals

**Description:** Saves a new column to the data table. The new column contains the deviance residuals.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Deviance Residuals;

```

#### Deviance Residuals by Predicted

**Syntax:** obj &lt;&lt; Deviance Residuals by Predicted( state=0|1 )

**Description:** Shows or hides a plot of the deviance residuals on the vertical axis and the predicted response values on the horizontal axis.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Deviance Residuals by Predicted( 1 );

```

#### Effect Summary

**Syntax:** obj &lt;&lt; Effect Summary( state=0|1 )

**Description:** Shows or hides the Effect Summary report, which enables you to interactively update the effects in the model. On by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Effect Summary( 0 );
Wait( 1 );
obj << Effect Summary( 1 );
Report( obj )["Effect Summary"] << Close( 0 );

```

#### FDR

**Syntax:** obj &lt;&lt; FDR( state=0|1 )

**Description:** Specifies whether the logworth values and their corresponding p-values in the Effect Summary table are adjusted using the false discovery rate (FDR).

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << FDR( 1 );
Report( obj )["Effect Summary"] << Close( 0 );

```

#### Firth Bias-Adjusted Estimates

**Syntax:** obj = Fit Model(...Personality( "Generalized Linear Model" ), "Firth Bias-Adjusted Estimates"n( state=0|1 )...)

**Description:** Specifies that the Firth bias-adjusted method is used to fit the model. Available only for the Generalized Linear Model personality.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	"Firth Bias-Adjusted Estimates"n( 1 ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);

```

#### GLM Distribution

**Syntax:** obj = Fit Model(...Personality( "Generalized Linear Model" ), GLM Distribution( distribution name )...)

**Description:** Specifies a probability distribution for the response variable. Available only for the Generalized Linear Model personality.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Binomial" ),
	Link Function( "Logit" ),
	Run
);

```

#### Inverse Prediction

**Syntax:** obj &lt;&lt; Inverse Prediction( Response( p1, p2, ... ), Term Value( effect1( value ), effect2( value ), ... ) )

**Description:** Generates a predicted X value and confidence interval based on the specified  values of Y and all other factors.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Overdispersion Tests and Intervals( 0 ),
	"Firth Bias-Adjusted Estimates"n( 0 ),
	Run
);
// Exactly one term value must be set to missing.
obj << Inverse Prediction(
	Response( 5, 6 ),
	Term Value(
		color( "Dark" ),
		spine( "Both Good" ),
		width( 26.2988439306358 ),
		weight( . )
	)
);

```

#### Linear Predictor Plot

**Syntax:** obj &lt;&lt; Linear Predictor Plot( state=0|1 )

**Description:** Shows or hides a plot of responses transformed by the inverse link function on the vertical axis and the continuous predictor on the horizontal axis. Available only when there is one continuous predictor and no more than one categorical predictor.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :weight, :color ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run()
);
obj << Linear Predictor Plot( 1 );

```

#### Link Function

**Syntax:** obj = Fit Model(...Personality( "Generalized Linear Model" ), Link Function( link type )...)

**Description:** Specifies the link function for the model. Available only for the Generalized Linear Model personality.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);

```

#### Mean Confidence Interval

**Syntax:** obj &lt;&lt; Mean Confidence Interval

**Description:** Saves new columns to the data table. The new columns contain the 95% confidence limits for the prediction equation for the model.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Mean Confidence Interval;

```

#### Model Dialog

**Syntax:** obj &lt;&lt; Model Dialog

**Description:** Shows the completed Fit Model launch window for the current analysis.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Model Dialog;

```

#### Overdispersion Tests and Intervals

**Syntax:** obj = Fit Model(...Personality( "Generalized Linear Model" ), Overdispersion Tests and Intervals( state=0|1 )...)

**Description:** Specifies that an overdispersion parameter should be included in the model. Available only for the Generalized Linear Model personality.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	Overdispersion Tests and Intervals( 1 ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);

```

#### Pearson Residuals

**Syntax:** obj &lt;&lt; Pearson Residuals

**Description:** Saves a new column to the data table. The new column contains the Pearson residuals.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Pearson Residuals;

```

#### Pearson Residuals by Predicted

**Syntax:** obj &lt;&lt; Pearson Residuals by Predicted( state=0|1 )

**Description:** Shows or hides a plot of the Pearson residuals on the vertical axis and the predicted response values on the horizontal axis.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Pearson Residuals by Predicted( 1 );

```

#### Power Link Parameter

**Syntax:** obj = Fit Model(...Personality( "Generalized Linear Model" ), Power Link Parameter( value=1 )...)

**Description:** Specifies the parameter for the Power link function. Available only when Power is specified as the link function in the Generalized Linear Model personality. "1" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	Overdispersion Tests and Intervals( 1 ),
	GLM Distribution( "Poisson" ),
	Link Function( "Power" ),
	Power Link Parameter( 0.5 ),
	Run
);

```

#### Predicted Values

**Syntax:** obj &lt;&lt; Predicted Values

**Description:** Saves a new column to the data table. The new column contains the values predicted by the model.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Predicted Values;

```

#### Prediction Formula

**Syntax:** obj &lt;&lt; Prediction Formula

**Description:** Saves a new formula column to the data table. The new column contains a formula for the predicted values for the mean, as computed by the specified model.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Prediction Formula;

```

#### Profiler

**Syntax:** obj &lt;&lt; Profiler( state=0|1 )

**Description:** Shows or hides the prediction profiler, which is used to graphically explore the prediction equation by slicing it one factor at a time. The prediction profiler contains features for optimization.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Binomial" ),
	Link Function( "Logit" ),
	Run
);
obj << Profiler( 1 );

```

#### Regression Plot

**Syntax:** obj &lt;&lt; Regression Plot( state=0|1 )

**Description:** Shows or hides a plot of the response on the vertical axis and the continuous predictor on the horizontal axis. Available only when there is one continuous predictor and no more than one categorical predictor. On by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :weight, :color ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run( Regression Plot( 0 ) )
);
Wait( 1 );
obj << Regression Plot( 1 );

```

#### Save Indiv Confid Limits

**Syntax:** obj &lt;&lt; Save Indiv Confid Limits

**Description:** Saves new columns to the data table. The new columns contain the 95% confidence limits for a given individual value for the model.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Save Indiv Confid Limits;

```

#### Studentized Deviance Residuals

**Syntax:** obj &lt;&lt; Studentized Deviance Residuals

**Description:** Saves a new column to the data table. The new column contains the studentized deviance residuals.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Studentized Deviance Residuals;

```

#### Studentized Deviance Residuals by Predicted

**Syntax:** obj &lt;&lt; Studentized Deviance Residuals by Predicted( state=0|1 )

**Description:** Shows or hides a plot of studentized deviance residuals on the vertical axis and the predicted response values on the horizontal axis. On by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run( Studentized Deviance Residuals by Predicted( 0 ) )
);
Wait( 1 );
obj << Studentized Deviance Residuals by Predicted( 1 );

```

#### Studentized Pearson Residuals

**Syntax:** obj &lt;&lt; Studentized Pearson Residuals

**Description:** Saves a new column to the data table. The new column contains the studentized Pearson residuals.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Studentized Pearson Residuals;

```

#### Studentized Pearson Residuals by Predicted

**Syntax:** obj &lt;&lt; Studentized Pearson Residuals by Predicted( state=0|1 )

**Description:** Shows or hides a plot of the studentized Pearson residuals on the vertical axis and the predicted response values on the horizontal axis.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Studentized Pearson Residuals by Predicted( 1 );

```

#### Surface Profiler

**Syntax:** obj &lt;&lt; Surface Profiler( state=0|1 )

**Description:** Shows or hides an interactive surface plot for the response.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Surface Profiler( 1 );

```

### Shared Item Messages

#### Action

**Syntax:** obj &lt;&lt; Action

**Description:** All-purpose trapdoor within a platform to insert expressions to evaluate. Temporarily sets the DisplayBox and DataTable contexts to the Platform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

#### Apply Preset

**Syntax:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**Description:** Apply a previously created preset to the object, updating the options and customizations to match the saved settings.

**Anonymous preset**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();
dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );
Wait( 1 );
obj2 << Apply Preset( preset );

```

**Search by name**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

**Search within folder(s)**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

#### Broadcast

**Syntax:** obj &lt;&lt; Broadcast(message)

**Description:** Broadcasts a message to a platform. If return results from individual objects are tables, they are concatenated if possible, and the final format is identical to either the result from the Save Combined Table option in a Table Box or the result from the Concatenate option using a Source column. Other than those, results are stored in a list and returned.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
objs = Control Chart Builder(
	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),
	By( :OPERATOR )
);
objs[1] << Broadcast( Save Summaries );

```

#### Column Switcher

**Syntax:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Description:** Adds a control panel for changing the platform&apos;s variables

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);

```

#### Copy ByGroup Script

**Syntax:** obj &lt;&lt; Copy ByGroup Script

**Description:** Create a JSL script to produce this analysis, and put it on the clipboard.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	By( _bycol ),
	Run
);
obj[1] << Copy ByGroup Script;

```

#### Copy Script

**Syntax:** obj &lt;&lt; Copy Script

**Description:** Create a JSL script to produce this analysis, and put it on the clipboard.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Copy Script;

```

#### Data Table Window

**Syntax:** obj &lt;&lt; Data Table Window

**Description:** Move the data table window for this analysis to the front.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Data Table Window;

```

#### Get By Levels

**Syntax:** obj &lt;&lt; Get By Levels

**Description:** Returns an associative array mapping the by group columns to their values.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

#### Get ByGroup Script

**Syntax:** obj &lt;&lt; Get ByGroup Script

**Description:** Creates a script (JSL) to produce this analysis and returns it as an expression.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	By( _bycol ),
	Run
);
t = obj[1] << Get ByGroup Script;
Show( t );

```

#### Get Container

**Syntax:** obj &lt;&lt; Get Container

**Description:** Returns a reference to the container box that holds the content for the object.

**General**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**Platform with Filter**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Show Control Panel( 0 ),
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),
	Local Data Filter(
		Add Filter(
			columns( :age, :sex, :height ),
			Where( :age == {12, 13, 14} ),
			Where( :sex == "F" ),
			Where( :height >= 55 ),
			Display( :age, N Items( 6 ) )
		)
	)
);
New Window( "platform boxes",
	H List Box(
		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),
		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )
	)
);

```

#### Get Data Table

**Syntax:** obj &lt;&lt; Get Data Table

**Description:** Returns a reference to the data table.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
t = obj << Get Datatable;
Show( N Rows( t ) );

```

#### Get Group Platform

**Syntax:** obj &lt;&lt; Get Group Platform

**Description:** Return the Group Platform object if this platform is part of a Group. Otherwise, returns Empty().

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );
group = biv[1] << Get Group Platform;
Wait( 1 );
group << Layout( "Arrange in Tabs" );

```

#### Get Script

**Syntax:** obj &lt;&lt; Get Script

**Description:** Creates a script (JSL) to produce this analysis and returns it as an expression.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
t = obj << Get Script;
Show( t );

```

#### Get Script With Data Table

**Syntax:** obj &lt;&lt; Get Script With Data Table

**Description:** Creates a script(JSL) to produce this analysis specifically referencing this data table and returns it as an expression.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
t = obj << Get Script With Data Table;
Show( t );

```

#### Get Timing

**Syntax:** obj &lt;&lt; Get Timing

**Description:** Times the platform launch.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
t = obj << Get Timing;
Show( t );

```

#### Get Web Support

**Syntax:** obj &lt;&lt; Get Web Support

**Description:** Return a number indicating the level of Interactive HTML support for the display object. 1 means some or all elements are supported. 0 means no support.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

#### Get Where Expr

**Syntax:** obj &lt;&lt; Get Where Expr

**Description:** Returns the Where expression for the data subset, if the platform was launched with By() or Where(). Otherwise, returns Empty()

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );
Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

#### Ignore Platform Preferences

**Syntax:** Ignore Platform Preferences( state=0|1 )

**Description:** Ignores the current settings of the platform&apos;s preferences. The message is ignored when sent to the platform after creation.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Ignore Platform Preferences( 1 ),
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

#### Local Data Filter

**Syntax:** obj &lt;&lt; Local Data Filter

**Description:** To filter data to specific groups or ranges, but local to this platform

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :country ) ),
	Local Data Filter(
		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),
		Mode( Show( 1 ), Include( 1 ) )
	)
);

```

#### New JSL Preset

**Syntax:** New JSL Preset( preset )

**Description:** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
preset = obj << New JSL Preset( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) );
Wait( 1 );
obj << Apply Preset( preset );

```

#### New Preset

**Syntax:** obj = New Preset()

**Description:** Create an anonymous preset representing the options and customizations applied to the object. This object can be passed to Apply Preset to copy the settings to another object of the same type.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

#### Paste Local Data Filter

**Syntax:** obj &lt;&lt; Paste Local Data Filter

**Description:** Apply the local data filter from the clipboard to the current report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
filter = dist << Local Data Filter(
	Add Filter( columns( :Region ), Where( :Region == "MW" ) )
);
filter << Copy Local Data Filter;
dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );
Wait( 1 );
dist2 << Paste Local Data Filter;

```

#### Redo Analysis

**Syntax:** obj &lt;&lt; Redo Analysis

**Description:** Rerun this same analysis in a new window. The analysis will be different if the data has changed.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Redo Analysis;

```

#### Redo ByGroup Analysis

**Syntax:** obj &lt;&lt; Redo ByGroup Analysis

**Description:** Rerun this same analysis in a new window. The analysis will be different if the data has changed.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	By( _bycol ),
	Run
);
obj[1] << Redo ByGroup Analysis;

```

#### Relaunch Analysis

**Syntax:** obj &lt;&lt; Relaunch Analysis

**Description:** Opens the platform launch window and recalls the settings that were used to create the report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Relaunch Analysis;

```

#### Relaunch ByGroup

**Syntax:** obj &lt;&lt; Relaunch ByGroup

**Description:** Opens the platform launch window and recalls the settings that were used to create the report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	By( _bycol ),
	Run
);
obj[1] << Relaunch ByGroup;

```

#### Remove Column Switcher

**Syntax:** obj &lt;&lt; Remove Column Switcher

**Description:** Removes the most recent Column Switcher that has been added to the platform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
Wait( 2 );
obj << Remove Column Switcher;

```

#### Remove Local Data Filter

**Syntax:** obj &lt;&lt; Remove Local Data Filter

**Description:** If a local data filter has been created, this removes it and restores the platform to use all the data in the data table directly

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dist = dt << Distribution(
	Nominal Distribution( Column( :country ) ),
	Local Data Filter(
		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),
		Mode( Show( 1 ), Include( 1 ) )
	)
);
Wait( 2 );
dist << remove local data filter;

```

#### Render Preset

**Syntax:** Render Preset( preset )

**Description:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

#### Report

**Syntax:** obj &lt;&lt; Report;Report( obj )

**Description:** Returns a reference to the report object.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Report View

**Syntax:** obj &lt;&lt; Report View( "Full"|"Summary" )

**Description:** The report view determines the level of detail visible in a platform report. Full shows all of the detail, while Summary shows only select content, dependent on the platform. For customized behavior, display boxes support a <<Set Summary Behavior message.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**Syntax:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description:** Creates a JSL script to produce this analysis, and save it as a table property in the data table. You can specify a name for the script. The Append Suffix option appends a numeric suffix to the script name, which differentiates the script from an existing script with the same name. The Prompt option prompts the user to specify a script name. The Replace option replaces an existing script with the same name.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**Syntax:** obj &lt;&lt; Save ByGroup Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**Syntax:** obj &lt;&lt; Save ByGroup Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**Syntax:** obj &lt;&lt; Save Script for All Objects

**Description:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**Syntax:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Description:** Saves a script for all report objects to the current data table. This option is useful when you have multiple reports in the window. The script is named after the first platform unless you specify the script name in quotes.

**Example 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	By( _bycol ),
	Run
);
obj[1] << Save Script for All Objects To Data Table;

```

**Example 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	By( _bycol ),
	Run
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**Syntax:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description:** Create a JSL script to produce this analysis, and save it as a table property in the data table.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**Syntax:** obj &lt;&lt; Save Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Save Script to Journal;

```

#### Save Script to Report

**Syntax:** obj &lt;&lt; Save Script to Report

**Description:** Create a JSL script to produce this analysis, and show it in the report itself. Useful to preserve a printed record of what was done.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Save Script to Report;

```

#### Save Script to Script Window

**Syntax:** obj &lt;&lt; Save Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Save Script to Script Window;

```

#### SendToByGroup

**Syntax:** SendToByGroup( {":Column == level"}, command );

**Description:** Sends platform commands or display customization commands to each level of a by-group.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	By( :Sex ),
	SendToByGroup(
		{:sex == "F"},
		Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) )
	),
	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) )
);

```

#### SendToEmbeddedScriptable

**Syntax:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Description:** SendToEmbeddedScriptable restores settings of embedded scriptable objects.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
dt << Life Distribution(
	Y( :Time ),
	Censor( :Censor ),
	Censor Code( 1 ),
	<<Fit Weibull,
	SendToEmbeddedScriptable(
		Dispatch(
			{"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},
			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}
		)
	)
);

```

#### SendToReport

**Syntax:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Description:** Send To Report is used in tandem with the Dispatch command to customize the appearance of a report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :age ) ),
	Continuous Distribution( Column( :weight ) ),
	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) )
);

```

#### Sync to Data Table Changes

**Syntax:** obj &lt;&lt; Sync to Data Table Changes

**Description:** Sync with the exclude and data changes that have been made.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
Wait( 1 );
dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );
dist << Sync To Data Table Changes;

```

#### Title

**Syntax:** obj &lt;&lt; Title( "new title" )

**Description:** Sets the title of the platform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Title( "My Platform" );

```

#### Top Report

**Syntax:** obj &lt;&lt; Top Report

**Description:** Returns a reference to the root node in the report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Transform Column

**Syntax:** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Description:** Create a transform column in the local context of an object, usually a platform. The transform column is active only for the lifetime of the platform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),
	Continuous Distribution( Column( :"age^2"n ) )
);

```

#### View Web XML

**Syntax:** obj &lt;&lt; View Web XML

**Description:** Returns the XML code that is used to create the interactive HTML report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

#### Window View

**Syntax:** obj = Generalized Linear Model(...Window View( "Visible"|"Invisible"|"Private" )...)

**Description:** Set the type of the window to be created for the report. By default a Visible report window will be created. An Invisible window will not appear on screen, but is discoverable by functions such as Window(). A Private window responds to most window messages but is not discoverable and must be addressed through the report object

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );
eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;
biv << Close Window;
New Window( "Bivariate Equation",
	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) )
);

```

## Fit Least Squares > Effect Fit > Control Differences Chart

### Item Messages

#### Point Options

**Syntax:** scrobj &lt;&lt; Point Options( "Show Needles"|"Show Connected Points"|"Show Only Points" )

**Description:** Specifies the drawing style of the points in the chart. You can choose between vertical needles, connected points, and points only. By default, the chart is drawn with needles that connect the points to the horizontal line that is drawn at the average.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run(
		:Drug << {LSMeans Dunnett(
			.05,
			Control Level( "a" ),
			Control Differences Chart( 1, Point Options( "Show Only Points" ) )
		)}
	)
);
Wait( 1 );
scrobj = (Report( obj )["Control Differences"] << get scriptable object);
scrobj << Point Options( "Show Connected Points" );

```

#### Show Center Line

**Syntax:** scrobj &lt;&lt; Show Center Line( state=0|1 )

**Description:** Shows or hides the center line (overall mean) on the Control Differences chart. On by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run(
		:Drug << {LSMeans Dunnett(
			.05,
			Control Level( "a" ),
			Control Differences Chart( 1, Show Center Line( 0 ) )
		)}
	)
);
Wait( 1 );
scrobj = (Report( obj )["Control Differences"] << get scriptable object);
scrobj << Show Center Line( 1 );

```

#### Show Decision Limit Shading

**Syntax:** scrobj &lt;&lt; Show Decision Limit Shading( state=0|1 )

**Description:** Shows or hides the decision limit shading for the Control Differences chart. On by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run(
		:Drug << {LSMeans Dunnett(
			.05,
			Control Level( "a" ),
			Control Differences Chart( 1, Show Decision Limit Shading( 0 ) )
		)}
	)
);
Wait( 1 );
scrobj = (Report( obj )["Control Differences"] << get scriptable object);
scrobj << Show Decision Limit Shading( 1 );

```

#### Show Decision Limits

**Syntax:** scrobj &lt;&lt; Show Decision Limits( state=0|1 )

**Description:** Shows or hides the decision limit lines for the Control Differences chart. On by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run(
		:Drug << {LSMeans Dunnett(
			.05,
			Control Level( "a" ),
			Control Differences Chart( 1, Show Decision Limits( 0 ) )
		)}
	)
);
Wait( 1 );
scrobj = (Report( obj )["Control Differences"] << get scriptable object);
scrobj << Show Decision Limits( 1 );

```

#### Show Summary Report

**Syntax:** scrobj &lt;&lt; Show Summary Report( state=0|1 )

**Description:** Shows or hides a report that contains the group means and the decision limits.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run(
		:Drug << {LSMeans Dunnett(
			.05,
			Control Level( "a" ),
			Control Differences Chart( 1 )
		)}
	)
);
Wait( 1 );
scrobj = (Report( obj )["Control Differences"] << get scriptable object);
scrobj << Show Summary Report( 1 );

```

## Fit Least Squares > Effect Fit

### Item Messages

#### LSMeans Contrast

**Syntax:** scrobj &lt;&lt; LSMeans Contrast( [ l1, l2, l3, ... ] );obj &lt;&lt; ( effect &lt;&lt; {LSMeans Contrast( [ l1, l2, l3, ... ] )} )

**Description:** Runs a customized F test for the statistical contrasts of different levels of an effect.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run
);
Wait( 1 );
obj << (:Drug << {LSMeans Contrast( [1 0 -1] )});

```

#### LSMeans Dunnett

**Syntax:** scrobj &lt;&lt; LSMeans Dunnett( state=0|1|&lt;alpha&gt;, Control Level( level ), &lt;comparison options&gt; );obj &lt;&lt; ( effect &lt;&lt; {LSMeans Dunnett( state=0|1|&lt;alpha&gt;, Control Level( level ), &lt;comparison options&gt; )} )

**Description:** Shows or hides tests and confidence intervals for pairwise comparisons against the specified control level.

**Example 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run
);
obj << (:Drug << {LSMeans Dunnett( 1, Control Level( "a" ) )});

```

**Example 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run
);
obj << (:Drug << {LSMeans Dunnett( .01, Control Level( "a" ) )});

```

#### LSMeans Plot

**Syntax:** scrobj &lt;&lt; LSMeans Plot;obj &lt;&lt; ( effect &lt;&lt; {LSMeans Plot} )

**Description:** Shows plots of least squares means for nominal and ordinal effects. If the effect is an interaction, this option shows the Least Squares Means Plot Options window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run
);
Wait( 1 );
obj << (:Drug << {LSMeans Plot});

```

#### LSMeans Student's t

**Syntax:** scrobj &lt;&lt; Student&apos;s t( state=0|1|&lt;alpha&gt;, &lt;comparison options&gt; );obj &lt;&lt; ( effect &lt;&lt; {Student&apos;s t( state=0|1|&lt;alpha&gt;, &lt;comparison options&gt; )} )

**Description:** Shows or hides tests and confidence intervals for pairwise comparisons of least squares means using Student&apos;s t tests.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run
);
obj << (:Drug << {LSMeans Student's t( 1 )});

```

#### LSMeans Table

**Syntax:** scrobj &lt;&lt; LSMeans Table( state=0|1 );obj &lt;&lt; ( effect &lt;&lt; {LSMeans Table( state=0|1 )} )

**Description:** Shows or hides a table of the statistics that are compared when effects are tested. This option is not available for continuous effects. On by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run( :Drug << {LSMeans Table( 0 )} )
);
Wait( 1 );
obj << (:Drug << {LSMeans Table( 1 )});

```

#### LSMeans Tukey HSD

**Syntax:** scrobj &lt;&lt; LSMeans Tukey HSD( state=0|1|&lt;alpha&gt;, &lt;comparison options&gt; );obj &lt;&lt; ( effect &lt;&lt; {LSMeans Tukey HSD( state=0|1|&lt;alpha&gt;, &lt;comparison options&gt; )} )

**Description:** Shows or hides tests and confidence intervals for pairwise comparisons of least squares means using the Tukey-Kramer honestly significant difference (HSD) test.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run
);
obj << (:Drug << {LSMeans Tukey HSD( 1 )});

```

#### Power Analysis

**Syntax:** scrobj &lt;&lt; Power Analysis( Alpha(from, to, by), Sigma(from, to, by), Delta(from, to, by), Number(from, to, by), objective, &lt;Power Plot&gt;, &lt;Done&gt;);obj &lt;&lt; ( effect &lt;&lt; {Power Analysis( Alpha(from, to, by), Sigma(from, to, by), Delta(from, to, by), Number(from, to, by), objective, &lt;Power Plot&gt;, &lt;Done&gt;)} )

**Description:** Shows the Power Details report, which enables you to analyze the power for the effect test.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run
);
Wait( 1 );
obj << (:Drug << {Power Analysis(
	Alpha( 0.05 ),
	Sigma( 4.00577754367453 ),
	Delta( 1.51166255719209 ),
	Number( 10, 100, 10 ),
	Solve for Power,
	Power Plot,
	Done
)});

```

#### Test Slices

**Syntax:** scrobj &lt;&lt; Test Slices( state=0|1 );obj &lt;&lt; ( response &lt;&lt; { effect1 * effect2 &lt;&lt; {Test Slices( state=0|1 )} } )

**Description:** Runs a customized F test for each level of both factors in an interaction term. This option is available only for interactions that involve nominal and ordinal effects.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Fit Model(
	Y( :height ),
	Effects( :age, :sex, :age * :sex ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run
);
Wait( 1 );
obj << (:height << {:age * :sex << {Test Slices( 1 )}});

```

## Fit Least Squares > LSMeans Comparisons

### Item Messages

#### Connecting Letters Report

**Syntax:** scrobj &lt;&lt; Connecting Letters Report( state=0|1 )

**Description:** Shows or hides significant and non-significant comparisons with connecting letters. Levels that are not connected by the same letter are significantly different. Levels that are connected by the same letter are not significantly different. On by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run( :Drug << {LSMeans Tukey HSD( 1, Connecting Letters Report( 0 ) )} )
);
Wait( 1 );
scrobj = (Report( obj )["LSMeans Differences Tukey HSD"] << get scriptable object);
scrobj << Connecting Letters Report( 1 );

```

#### Control Differences Chart

**Syntax:** scrobj &lt;&lt; Control Differences Chart( state=0|1 )

**Description:** Shows or hides a chart that contains a point for each level of the effect other than the control. Each point shows the difference between the least squares mean for that level and the least squares mean for the control level. Upper decision limits (UDL) and lower decision limits (LDL) are plotted.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run(
		:Drug << {LSMeans Dunnett(
			.05,
			Control Level( "a" ),
			Control Differences Chart( 0 )
		)}
	)
);
Wait( 1 );
scrobj = (Report( obj )["LSMeans Differences Dunnett"] << get scriptable object);
scrobj << Control Differences Chart( 1 );

```

#### Control Differences Report

**Syntax:** scrobj &lt;&lt; Control Differences Report( state=0|1 )

**Description:** Shows or hides a table that contains a row for each level of the effect other than the control. Each row contains the level being compared to the control level, the estimated difference, the standard error of the difference, a confidence interval, and the p-value for the comparison. On by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run(
		:Drug << {LSMeans Dunnett(
			.05,
			Control Level( "a" ),
			Control Differences Report( 0 )
		)}
	)
);
Wait( 1 );
scrobj = (Report( obj )["LSMeans Differences Dunnett"] << get scriptable object);
scrobj << Control Differences Report( 1 );

```

#### Crosstab Report

**Syntax:** scrobj &lt;&lt; Crosstab Report( state=0|1 )

**Description:** Shows or hides a crosstab report that contains the difference in each combination of least squares means, the standard error of the difference, and confidence limits for the difference. On by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run( :Drug << {LSMeans Student's t( 1, Crosstab Report( 0 ) )} )
);
Wait( 1 );
scrobj = (Report( obj )["LSMeans Differences Student's t"] << get scriptable object);
scrobj << Crosstab Report( 1 );

```

#### Detailed Comparisons

**Syntax:** scrobj &lt;&lt; Detailed Comparisons( state=0|1 )

**Description:** Shows or hides a detailed report for each combination of least squares means. The report also contains a graph that shows the significance of each comparison.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run( :Drug << {LSMeans Student's t( .05 )} )
);
Wait( 1 );
scrobj = (Report( obj )["LSMeans Differences Student's t"] << get scriptable object);
scrobj << Detailed Comparisons( 1 );

```

#### Equivalence Test

**Syntax:** scrobj &lt;&lt; Equivalence Test( difference )

**Description:** Tests that the means do not differ by more than the specified difference that is deemed to be practically equivalent. This is the reverse of the usual significance test.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run( :Drug << {LSMeans Student's t( .05 )} )
);
Wait( 1 );
scrobj = (Report( obj )["LSMeans Differences Student's t"] << get scriptable object);
scrobj << Equivalence Test( 1.5 );

```

#### Ordered Differences Report

**Syntax:** scrobj &lt;&lt; Ordered Differences Report( state=0|1 )

**Description:** Shows or hides a report that ranks the differences for each level of least squares means from largest to smallest. The report also contains the standard errors of the differences, confidence limits, and p-values.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run( :Drug << {LSMeans Tukey HSD( .05 )} )
);
Wait( 1 );
scrobj = (Report( obj )["LSMeans Differences Tukey HSD"] << get scriptable object);
scrobj << Ordered Differences Report( 1 );

```

#### Save Connecting Letters Table

**Syntax:** scrobj &lt;&lt; Save Connecting Letters Table

**Description:** Creates a data table with columns that contain the levels of the effect, the connecting letters, the least squares means, their standard errors, and confidence intervals.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run( :Drug << {LSMeans Student's t( 1 )} )
);
Wait( 1 );
scrobj = (Report( obj )["LSMeans Differences Student's t"] << get scriptable object);
scrobj << Save Connecting Letters Table;

```

## Fit Least Squares > Multiple Comparisons > All Pairwise Comparisons > Equivalence Tests

### Item Messages

#### Forest Plot

**Syntax:** scrobj &lt;&lt; Forest Plot( state=0|1 )

**Description:** Shows or hides the Equivalence Tests Forest Plot. On by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 0 );
obj << Multiple Comparisons( Effect( Drug ), Equivalence Tests( 5, Forest Plot( 0 ) ) );
Wait( 1 );
scrobj = Report( obj )["Equivalence Tests"] << get scriptable object;
scrobj << Forest Plot( 1 );

```

#### Remove

**Syntax:** scrobj &lt;&lt; Remove

**Description:** Removes the Equivalence Tests report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 0 );
obj << Multiple Comparisons( Effect( Drug ), Equivalence Tests( 5, Forest Plot( 0 ) ) );
Wait( 2 );
scrobj = Report( obj )["Equivalence Tests"] << get scriptable object;
scrobj << Remove;

```

#### Scatterplot

**Syntax:** scrobj &lt;&lt; Scatterplot( state=0|1 )

**Description:** Shows or hides the Equivalence Tests Scatterplot. On by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 0 );
obj << Multiple Comparisons( Effect( Drug ), Equivalence Tests( 5, Scatterplot( 0 ) ) );
Wait( 1 );
scrobj = Report( obj )["Equivalence Tests"] << get scriptable object;
scrobj << Scatterplot( 1 );

```

#### Test Report

**Syntax:** scrobj &lt;&lt; Test Report( state=0|1 )

**Description:** Shows or hides the Equivalence Tests report, which contains results of the two one-sided tests (TOST) method that is used to test for a practical difference between the means. On by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 0 );
obj << Multiple Comparisons( Effect( Drug ), Equivalence Tests( 5, Test Report( 0 ) ) );
Wait( 1 );
scrobj = Report( obj )["Equivalence Tests"] << get scriptable object;
scrobj << Test Report( 1 );

```

## Fit Least Squares > Multiple Comparisons > All Pairwise Comparisons > Mean Mean Scatterplot

### Item Messages

#### Show Reference Lines

**Syntax:** scrobj &lt;&lt; Show Reference Lines( state=0|1 )

**Description:** Shows or hides reference grid lines for the points in the scatterplot.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 0 );
obj << Multiple Comparisons( Effect( Drug ), Tukey HSD( 1 ) );
Wait( 1 );
scrobj = Report( obj )["All Pairwise Comparisons Scatterplot"] << get scriptable object;
scrobj << Show Reference Lines( 1 );

```

## Fit Least Squares > Multiple Comparisons > All Pairwise Comparisons

### Item Messages

#### All Pairwise Comparisons Scatterplot

**Syntax:** scrobj &lt;&lt; All Pairwise Comparisons Scatterplot( state=0|1 )

**Description:** Shows or hides the All Pairwise Comparisons Scatterplot. On by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 0 );
obj << Multiple Comparisons(
	Effect( Drug ),
	Tukey HSD( 1, All Pairwise Comparisons Scatterplot( 0 ) )
);
Wait( 1 );
scrobj = (Report( obj )["Tukey HSD All Pairwise Comparisons"] << get scriptable object);
scrobj << All Pairwise Comparisons Scatterplot( 1 );

```

#### All Pairwise Differences

**Syntax:** scrobj &lt;&lt; All Pairwise Differences( state=0|1 )

**Description:** Shows or hides the All Pairwise Differences report. On by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 0 );
obj << Multiple Comparisons( Effect( Drug ), Tukey HSD( 1, All Pairwise Differences( 0 ) ) );
Wait( 1 );
scrobj = (Report( obj )["Tukey HSD All Pairwise Comparisons"] << get scriptable object);
scrobj << All Pairwise Differences( 1 );

```

#### All Pairwise Differences Connecting Letters

**Syntax:** scrobj &lt;&lt; All Pairwise Differences Connecting Letters( state=0|1 )

**Description:** Shows or hides the All Pairwise Differences Connecting Letters report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Analgesics.jmp" );
obj = dt << Fit Model(
	Y( :pain ),
	Effects( :gender, :drug, :gender * :drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 0 );
obj << Multiple Comparisons(
	Effect( Drug ),
	Tukey HSD( 1, All Pairwise Differences Connecting Letters( 1 ) )
);

```

#### Save All Pairwise Differences Connecting Letters Table

**Syntax:** scrobj &lt;&lt; Save All Pairwise Differences Connecting Letters Table

**Description:** Creates a data table with columns that contain the levels of the effect, the connecting letters, the least squares means, their standard errors, and confidence intervals.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Analgesics.jmp" );
obj = dt << Fit Model(
	Y( :pain ),
	Effects( :gender, :drug, :gender * :drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run(
		Multiple Comparisons(
			Effect( Drug ),
			Tukey HSD( 1, All Pairwise Comparisons Scatterplot( 0 ) )
		)
	)
);
Wait( 1 );
scrobj = (Report( obj )["Tukey HSD All Pairwise Comparisons"] << get scriptable object);
scrobj << Save All Pairwise Differences Connecting Letters Table;

```

## Fit Least Squares > Multiple Comparisons > Comparisons with Control

### Item Messages

#### Calculate Adjusted P-Values

**Syntax:** scrobj &lt;&lt; "Calculate Adjusted P-Values"n( state=0|1 )

**Description:** Shows or hides a column of p-values in the Differences from Control report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 0 );
obj << Multiple Comparisons(
	Effect( :Drug ),
	Comparisons with Control( 1, Control Level( "Drug:a" ) )
);
Wait( 1 );
scrobj = (Report( obj )["Comparisons with Control"] << get scriptable object);
scrobj << "Calculate Adjusted P-Values"n( 1 );

```

#### Comparisons with Control Decision Chart

**Syntax:** scrobj &lt;&lt; Comparisons with Control Decision Chart( state=0|1 )

**Description:** Shows or hides the Comparisons with Control Decision Chart. On by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 0 );
obj << Multiple Comparisons(
	Effect( :Drug ),
	Comparisons with Control(
		1,
		Control Level( "Drug:a" ),
		Comparisons with Control Decision Chart( 0 )
	)
);
Wait( 1 );
scrobj = (Report( obj )["Comparisons with Control"] << get scriptable object);
scrobj << Comparisons with Control Decision Chart( 1 );

```

#### Differences from Control

**Syntax:** scrobj &lt;&lt; Differences from Control( state=0|1 )

**Description:** Shows or hides the Differences from Control report. On by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 0 );
obj << Multiple Comparisons(
	Effect( :Drug ),
	Comparisons with Control( 1, Control Level( "Drug:a" ), Differences from Control( 0 ) )
);
Wait( 1 );
scrobj = (Report( obj )["Comparisons with Control"] << get scriptable object);
scrobj << Differences from Control( 1 );

```

## Fit Least Squares > Multiple Comparisons > Comparisons with Overall Average

### Item Messages

#### Calculate Adjusted P-Values

**Syntax:** scrobj &lt;&lt; "Calculate Adjusted P-Values"n( state=0|1 )

**Description:** Shows or hides a column of p-values in the Differences from Overall Averages report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 0 );
obj << Multiple Comparisons( Effect( :Drug ), Comparisons with Overall Average( 1 ) );
Wait( 1 );
scrobj = (Report( obj )["Comparisons with Overall Average"] << get scriptable object);
scrobj << "Calculate Adjusted P-Values"n( 1 );

```

#### Comparisons with Overall Average Decision Chart

**Syntax:** scrobj &lt;&lt; Comparisons with Overall Average Decision Chart( state=0|1 )

**Description:** Shows or hides the Comparisons with Overall Average Decision Chart. On by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 0 );
obj << Multiple Comparisons(
	Effect( :Drug ),
	Comparisons with Overall Average(
		1,
		Comparisons with Overall Average Decision Chart( 0 )
	)
);
Wait( 1 );
scrobj = (Report( obj )["Comparisons with Overall Average"] << get scriptable object);
scrobj << Comparisons with Overall Average Decision Chart( 1 );

```

#### Differences from Overall Average

**Syntax:** scrobj &lt;&lt; Differences from Overall Average( state=0|1 )

**Description:** Shows or hides the Differences from Overall Average report. On by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 0 );
obj << Multiple Comparisons(
	Effect( :Drug ),
	Comparisons with Overall Average( 1, Differences from Overall Average( 0 ) )
);
Wait( 1 );
scrobj = (Report( obj )["Comparisons with Overall Average"] << get scriptable object);
scrobj << Differences from Overall Average( 1 );

```

## Fit Least Squares > Multiple Comparisons > Least Squares Means Plot

### Item Messages

#### Remove

**Syntax:** scrobj &lt;&lt; Remove

**Description:** Removes the Least Squares Means plot from the report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 0 );
obj << Multiple Comparisons(
	Effect( :Drug ),
	Least Squares Means Plot( Show Connected Points( 0 ) )
);
Wait( 2 );
scrobj = (Report( obj )["Least Squares Means Plot"] << get scriptable object);
scrobj << Remove;

```

#### Show Confidence Limits

**Syntax:** scrobj &lt;&lt; Show Confidence Limits( state=0|1 )

**Description:** Shows or hides confidence limits for each estimate in the plot. On by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 0 );
obj << Multiple Comparisons(
	Effect( :Drug ),
	Least Squares Means Plot( Show Confidence Limits( 0 ) )
);
Wait( 1 );
scrobj = (Report( obj )["Least Squares Means Plot"] << get scriptable object);
scrobj << Show Confidence Limits( 1 );

```

#### Show Connected Points

**Syntax:** scrobj &lt;&lt; Show Connected Points( state=0|1 )

**Description:** Shows or hides one or more lines that connect the least squares means for each level in the plot. On by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 0 );
obj << Multiple Comparisons(
	Effect( :Drug ),
	Least Squares Means Plot( Show Connected Points( 0 ) )
);
Wait( 1 );
scrobj = (Report( obj )["Least Squares Means Plot"] << get scriptable object);
scrobj << Show Connected Points( 1 );

```

## Fit Least Squares > Multiple Comparisons

### Item Messages

#### Comparisons with Control

**Syntax:** scrobj &lt;&lt; Comparisons with Control( state=0|1, Control Level( level ), &lt;options&gt; );obj &lt;&lt; Multiple Comparisons( Effect( effect ), Comparisons with Control( state=0|1, Control Level( level ), &lt;options&gt; ) )

**Description:** Shows or hides a multiple comparisons test that compares each effect least squares mean with the least squares mean of a control level. This is also known as Dunnett&apos;s test.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Multiple Comparisons(
	Effect( :Drug ),
	Comparisons with Control( 1, Control Level( "Drug:a" ) )
);

```

#### Comparisons with Overall Average

**Syntax:** scrobj &lt;&lt; Comparisons with Overall Average( state=0|1, &lt;options&gt; );obj &lt;&lt; Multiple Comparisons( Effect( effect ), Comparisons with Overall Average( state=0|1, &lt;options&gt; ) )

**Description:** Shows or hides a multiple comparisons test that compares each effect least squares mean with the overall average least squares mean. This is also known as an analysis of means test.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Multiple Comparisons( Effect( :Drug ), Comparisons with Overall Average( 1 ) );

```

#### Equivalence Tests

**Syntax:** scrobj &lt;&lt; Equivalence Tests( number );obj &lt;&lt; Multiple Comparisons( Effect( effect ), Equivalence Tests( number ) )

**Description:** Shows or hides a multiple comparisons test of all pairwise least squares means comparisons against a specified difference that is deemed practically equivalent.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Multiple Comparisons( Effect( :Drug ), Equivalence Tests( 5 ) );

```

#### Least Squares Means Plot

**Syntax:** scrobj &lt;&lt; Least Squares Means Plot;obj &lt;&lt; Multiple Comparisons( Effect( effect ), Least Squares Means Plot )

**Description:** Shows a plot of the least squares means with standard error bars.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Multiple Comparisons( Effect( :Drug ), Least Squares Means Plot );

```

#### Remove

**Syntax:** scrobj &lt;&lt; Remove

**Description:** Removes the Multiple Comparisons report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 0 );
obj << Multiple Comparisons( Effect( :Drug ), Least Squares Means Plot );
Wait( 2 );
scrobj = (Report( obj )["Multiple Comparisons for Drug"] << get scriptable object);
scrobj << Remove;

```

#### Slice F Test

**Syntax:** scrobj &lt;&lt; Slice F Test( state=0|1 );obj &lt;&lt; Multiple Comparisons( Sliced Effect Estimates( Sliced Effect( effect1 * effect2 ), Slice Term List( effect_level ) ), Slice F Test( state=0|1 ) )

**Description:** Shows or hides the F test for the sliced effect. On by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Fit Model(
	Y( :height ),
	Effects( :age, :sex, :age * :sex ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run
);
Wait( 0 );
obj << Multiple Comparisons(
	Sliced Effect Estimates( Sliced Effect( :age * :sex ), Slice Term List( :age( "12" ) ) ),
	Slice F Test( 1 )
);
Wait( 1 );
scrobj = (Report( obj )["Multiple Comparisons for Slice of age*sex where age = 12"] <<
get scriptable object);
scrobj << Slice F Test( 0 );
Wait( 1 );
scrobj << Slice F Test( 1 );

```

#### Student's t

**Syntax:** scrobj &lt;&lt; Student&apos;s t( state=0|1, &lt;options&gt; );obj &lt;&lt; Multiple Comparisons( Effect( effect ), Student&apos;s t( state=0|1, &lt;options&gt; ) )

**Description:** Shows or hides a multiple comparisons test of all pairwise least squares means comparisons using the Student&apos;s t test.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Multiple Comparisons(
	Effect( :Drug ),
	Student's t( 1, All Pairwise Differences Connecting Letters( 1 ) )
);

```

#### Tukey HSD

**Syntax:** scrobj &lt;&lt; Tukey HSD( state=0|1, &lt;options&gt; );obj &lt;&lt; Multiple Comparisons( Effect( effect ), Tukey HSD( state=0|1, &lt;options&gt; ) )

**Description:** Shows or hides a multiple comparisons test of all pairwise least squares means comparisons using the Tukey-Kramer honestly significant differences (HSD) test.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Multiple Comparisons(
	Effect( :Drug ),
	Tukey HSD( 1, All Pairwise Differences Connecting Letters( 1 ) )
);

```

## Fit Least Squares > REML

### Item Messages

#### Convergence Limit

**Syntax:** obj = Fit Model(...Convergence Limit( number=0.00000001 )...)

**Description:** Specifies the convergence limit for the model fitting. If your model does not readily converge, you might want to increase the convergence limit. By default, the convergence limit is 0.00000001.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Convergence Limit( 0.0001 ),
	Run
);

```

#### Maximum Iterations

**Syntax:** obj = Fit Model(...Maximum Iterations( number=100 )...)

**Description:** Specifies the maximum number of iterations that are used in the model fitting. By default, the maximum number of iterations is 100.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Maximum Iterations( 150 ),
	Run
);

```

#### Method

**Syntax:** obj = Fit Model(...Personality( "Standard Least Squares" ), Method( "EMS" | "REML" )...)

**Description:** Specifies the method that is used for fitting mixed models in the Standard Least Squares personality.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	NoBounds( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Emphasis( "Minimal Report" ),
	Run
);

```

#### NoBounds

**Syntax:** obj = Fit Model(...Personality( "Standard Least Squares" ), NoBounds( state=0|1 )...)

**Description:** Removes the limits for variance estimations. When off, the lower limit for variance estimations is set to zero. Available only for the Standard Least Squares personality. On by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	NoBounds( 0 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Emphasis( "Minimal Report" ),
	Run
);

```

## Fit Least Squares > Response Fit

### Associated Constructors

#### Individual Response Fit

**Syntax:** Fit Model( Y( columns ), Effects( columns ), Personality( "Standard Least Squares" ), Emphasis( "Effect Leverage"|"Effect Screening"|"Minimal Report" )

**Description:** Fits a linear regression model for a continuous response. Techniques include regression, analysis of variance, analysis of covariance, mixed models, and analysis of designed experiments. The Emphasis option enables you to specify the report layout.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);

```

### Item Messages

#### AICc

**Syntax:** obj &lt;&lt; AICc( state=0|1 )

**Description:** Shows or hides the corrected Akaike&apos;s Information Criterion (AICc) and the Bayesian Information Criterion (BIC) values in the Summary of Fit report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << AICc( 1 );

```

#### Analysis of Variance

**Syntax:** obj &lt;&lt; Analysis of Variance( state=0|1 )

**Description:** Shows or hides a report that contains statistics for comparing the fitted model to a simple mean model.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run( Analysis of Variance( 0 ) )
);
Wait( 1 );
obj << Analysis of Variance( 1 );

```

#### Apply Preset

**Syntax:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**Description:** Apply a previously created preset to the object, updating the options and customizations to match the saved settings.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Lack of Fit( 0 );
obj << Effect Details( 0 );
Report( obj )["Parameter Estimates"] << Close( 1 );
preset = obj << (:y << New Preset);

dt2 = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj2 = dt2 << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj2 << (:Oxy << Apply Preset( preset ));

```

#### Bayes Plot

**Syntax:** obj &lt;&lt; Bayes Plot( K( number ), Priors( p1, p2, p3, ... ), Go )

**Description:** Shows or hides a plot that computes posterior probabilities for all model terms using a Bayesian approach.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Bayes Plot( K( 10 ), Priors( 0.2, 0.2, 0.2, 0.2, 0.2 ), Go );

```

#### Box Cox Y Transformation

**Syntax:** obj &lt;&lt; Box Cox Y Transformation( state=0|1, &lt;Save Best Transformation( state=0|1 )&gt;, &lt;Save Specific Transformation( number )&gt;, &lt;Table of Estimates( state=0|1 )&gt; )

**Description:** Shows or hides the Box-Cox Transformations report, which shows how the fit would change if you refit the model with a power (Box-Cox) transformation on the response.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Box Cox Y Transformation( 1, Save Best Transformation( 1 ) );

```

#### Compare Slopes

**Syntax:** obj &lt;&lt; Compare Slopes( Effect( effect ), &lt;options&gt; )

**Description:** Generates an analysis of means (ANOM) report that compares interaction slopes with the average slope for an analysis of covariance (ANCOVA) model. This option is available only when there is one nominal effect, one continuous effect, and their interaction effect for the fixed effects.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/US Demographics.jmp" );
obj = dt << Fit Model(
	Y( :Eighth Grade Math ),
	Effects( :Region, :High School Graduates, :Region * :High School Graduates ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Compare Slopes(
	Effect( :Region * :High School Graduates ),
	Student's t( 1, All Pairwise Comparisons Scatterplot( 0 ) )
);

```

#### Conditional Indiv CI

**Syntax:** obj &lt;&lt; Conditional Indiv CI( &lt;alpha=0.05&gt; )

**Description:** Saves a new column to the data table. The new column contains the confidence interval for the individual value from conditional prediction. The confidence intervals include random effect estimates for models with random effects. This option is available only for REML analysis methods. Hold down the shift key to enter alpha level or suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Conditional Indiv CI( 0.001 );

```

#### Conditional Mean CI

**Syntax:** obj &lt;&lt; Conditional Mean CI( &lt;alpha=0.05&gt; )

**Description:** Saves a new column to the data table. The new column contains the confidence interval for the expected value from conditional prediction. The confidence intervals include random effect estimates for models with random effects. This option is available only for REML analysis methods. Hold down the shift key to enter alpha level or suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Conditional Mean CI( 0.01 );

```

#### Conditional Pred Formula

**Syntax:** obj &lt;&lt; Conditional Pred Formula

**Description:** Saves a new formula column to the data table. The new column contains a formula that includes random effect estimates for models with random effects. This option is available only for REML analysis methods. Hold down the shift key to enter suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Conditional Pred Formula;

```

#### Conditional Pred Values

**Syntax:** obj &lt;&lt; Conditional Pred Values

**Description:** Saves a new column to the data table. The new column contains the conditional predicted values that are calculated using the best linear unbiased predictors (BLUPs) for the random effects coefficients. This option is available only for REML analysis methods. Hold down the shift key to enter suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Conditional Pred Values;

```

#### Conditional Residuals

**Syntax:** obj &lt;&lt; Conditional Residuals

**Description:** Saves a new column to the data table. The new column contains the residuals from conditional prediction. The residual values include random effect estimates for models with random effects. This option is available only for REML analysis methods. Hold down the shift key to enter suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Conditional Residuals;

```

#### Contour Profiler

**Syntax:** obj &lt;&lt; Contour Profiler( state=0|1 )

**Description:** Shows or hides the contour profiler, which shows the contours of the response graphically for two factors at a time. Available only when the model contains more than one continuous factor.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects(
		:SILICA, :SILANE, :SULFUR, :SILICA * :SILANE, :SILICA * :SULFUR, :SILANE * :SULFUR
	),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Contour Profiler( 1 );

```

#### Cook's D Influence

**Syntax:** obj &lt;&lt; Cook&apos;s D Influence

**Description:** Saves a new column to the data table. The new column contains a measure of how much influence each observation has in estimating the model. Hold down the shift key to enter suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Cook's D Influence;

```

#### Correlation of Estimates

**Syntax:** obj &lt;&lt; Correlation of Estimates( state=0|1 )

**Description:** Shows or hides the matrix of correlations between the parameter estimates for the specified fit.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Correlation of Estimates( 1 );

```

#### Cox Mixtures

**Syntax:** obj &lt;&lt; Cox Mixtures( p1(percentile), p2(percentile), p3(percentile) )

**Description:** Shows or hides parameter estimates for the Cox mixture model based on the specified reference mixture values. This option is available only when the model contains mixture effects.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects(
		:p1 & RS & Mixture, :p2 & RS & Mixture, :p3 & RS & Mixture, :p2 * :p1, :p3 * :p1,
		:p3 * :p2
	),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Cox Mixtures( p1( 0.6615 ), p2( 0.126 ), p3( 0.2125 ) );

```

#### Cube Plots

**Syntax:** obj &lt;&lt; Cube Plots( state=0|1 )

**Description:** Shows or hides the predicted values for the extremes of the factor ranges laid out in one or more cubes.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Cube Plots( 1 );

```

#### Custom Test

**Syntax:** obj &lt;&lt; Custom Test( [l1, l2, l3, ... ], &lt;Label( text )&gt; )

**Description:** Runs a customized F test that contrasts the different effects in the model.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Custom Test( [0 0 2 1], Label( "Comparison of intercepts for drug a vs. drug" ) );

```

#### Durbin Watson Test

**Syntax:** obj &lt;&lt; Durbin Watson Test( state=0|1 )

**Description:** Shows or hides the Durbin-Watson report, which contains a statistic to test whether the residuals have first-order autocorrelation. The report also shows the autocorrelation of the residuals and the exact probability associated with the statistic. This option is appropriate only for time series data and assumes that your observations are in time order.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/CO2.jmp" );
obj = dt << Fit Model(
	Y( :CO2 ),
	Effects( :Year, :Month ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Durbin Watson Test( 1 );

```

#### Effect Details

**Syntax:** obj &lt;&lt; Effect Details( state=0|1 )

**Description:** Shows or hides detailed reports for each effect in the model, including the LS Means table for each categorical effect. Additional information can be shown by sending messages to model effects. See the Effect Fit object under Fit Model for more information. On by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run( Effect Details( 0 ) )
);
Wait( 1 );
obj << Effect Details( 1 );

```

#### Effect Leverage Pairs

**Syntax:** obj &lt;&lt; Effect Leverage Pairs

**Description:** Saves new columns to the data table. The new columns contain the X and Y values that are plotted in effect leverage plots. The Y value is the partial residual. The X value is the regressor shrinkage in the effect leverage plots. Hold down the shift key to enter suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Effect Leverage Pairs;

```

#### Effect Summary

**Syntax:** obj &lt;&lt; Effect Summary( state=0|1 )

**Description:** Shows or hides the Effect Summary report, which enables you to interactively update the effects in the model. On by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Effect Summary( 0 );
Wait( 1 );
obj << Effect Summary( 1 );
Report( obj )["Effect Summary"] << Close( 0 );

```

#### Effect Tests

**Syntax:** obj &lt;&lt; Effect Tests( state=0|1 )

**Description:** Shows or hides a report that contains tests for the fixed effects in the model. On by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run( Effect Tests( 0 ) )
);
Wait( 1 );
obj << Effect Tests( 1 );

```

#### Error Specification

**Syntax:** obj &lt;&lt; Error Specification( "Default Estimate"|"Pure Error"|"Specified" )

**Description:** Specifies the error variance and the error degrees of freedom that are used for standard errors and tests in the Fit Least Squares report. This option is available only when the model contains no random effects.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects( :SILICA, :SILANE ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Error Specification( "Pure Error" );

```

#### Expanded  Estimates

**Syntax:** obj &lt;&lt; Expanded Estimates( state=0|1 )

**Description:** Shows or hides the parameter estimates for all levels of a nominal model effect. For a nominal effect with k levels, the Parameter Estimates table contains coefficients for the k-1 parameters, and the Expanded Estimates table contains the effect coefficients for all k levels. This option is available only when at least one of the effects is not continuous.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Expanded Estimates( 1 );

```

#### Externally Studentized Residuals

**Syntax:** obj &lt;&lt; Externally Studentized Residuals

**Description:** Saves a new column to the data table. The new column contains the externally studentized residuals. These are the residuals divided by standard error estimates that exclude the current row. Hold down the shift key to enter suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Externally Studentized Residuals;

```

#### FDR

**Syntax:** obj &lt;&lt; FDR( state=0|1 )

**Description:** Specifies whether the logworth values and their corresponding p-values in the Effect Summary table are adjusted using the false discovery rate (FDR).

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << FDR( 1 );
Report( obj )["Effect Summary"] << Close( 0 );

```

#### Get Conditional Formula

**Syntax:** obj &lt;&lt; Get Conditional Formula

**Description:** Returns a prediction formula that includes random effect estimates.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Get Conditional Formula;

```

#### Get Effect Names

**Syntax:** obj &lt;&lt; Get Effect Names

**Description:** Returns the effect names.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
G = obj << Get Effect Names;
Show( G );

```

#### Get Effect PValues

**Syntax:** obj &lt;&lt; Get Effect PValues

**Description:** Returns the effect p-values.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
G = obj << Get Effect PValues;
Show( G );

```

#### Get Estimates

**Syntax:** obj &lt;&lt; Get Estimates

**Description:** Returns the estimates.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
G = obj << Get Estimates;
Show( G );

```

#### Get Indiv Confid Limit Formula

**Syntax:** obj &lt;&lt; Get Indiv Confid Limit Formula

**Description:** Returns a formula for the individual confidence limits.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Get Indiv Confid Limit Formula;

```

#### Get MM SAS DATA Step

**Syntax:** obj &lt;&lt; Get MM SAS DATA Step

**Description:** Creates SAS code that you can register in the SAS Model Manager.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Get MM SAS Data Step;

```

#### Get Mean Confid Limit Formula

**Syntax:** obj &lt;&lt; Get Mean Confid Limit Formula

**Description:** Returns a formula for the mean confidence limits.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Get Mean Confid Limit Formula;

```

#### Get Measures

**Syntax:** obj &lt;&lt; Get Measures

**Description:** Returns summary measures of fit from the model.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Get Measures;

```

#### Get Parameter Names

**Syntax:** obj &lt;&lt; Get Parameter Names

**Description:** Returns the parameter names.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
G = obj << Get Parameter Names;
Show( G );

```

#### Get Parameterized Formula

**Syntax:** obj &lt;&lt; Get Parameterized Formula

**Description:** Returns a prediction formula that uses parameters instead of constants.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Get Parameterized Formula;

```

#### Get Prediction Formula

**Syntax:** obj &lt;&lt; Get Prediction Formula

**Description:** Constructs a script to create a prediction formula column and returns it.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Get Prediction Formula;

```

#### Get Random Effect Names

**Syntax:** obj &lt;&lt; Get Random Effect Names

**Description:** Returns the names of the random effects.  Available for REML analysis methods.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Run
);
G = obj << Get Random Effect Names;
Show( G );

```

#### Get SAS DATA Step

**Syntax:** obj &lt;&lt; Get SAS DATA Step

**Description:** Creates SAS code that you can use to score a new data set.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Get SAS Data Step;

```

#### Get SQL prediction expression

**Syntax:** obj &lt;&lt; Get SQL prediction expression

**Description:** Creates an SQL expression that you can paste into an SQL Select statement to predict a response.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Get SQL prediction expression;

```

#### Get Standard Error Formula

**Syntax:** obj &lt;&lt; Get Standard Error Formula

**Description:** Returns a formula for the standard error.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Get Standard Error Formula;

```

#### Get Std Errors

**Syntax:** obj &lt;&lt; Get Std Errors

**Description:** Returns the standard errors.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
G = obj << Get Std Errors;
Show( G );

```

#### Get Variance Components

**Syntax:** obj &lt;&lt; Get Variance Components

**Description:** Returns the variance components.  Available for REML analysis methods.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Run
);
G = obj << Get Variance Components;
Show( G );

```

#### Get X Matrix

**Syntax:** obj &lt;&lt; Get X Matrix

**Description:** Returns the design matrix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
G = obj << Get X Matrix;
Show( G );

```

#### Get XPX Inverse

**Syntax:** obj &lt;&lt; Get XPX Inverse

**Description:** Returns the X&apos;X inverse matrix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
G = obj << Get XPX Inverse;
Show( G );

```

#### Get Y Matrix

**Syntax:** obj &lt;&lt; Get Y Matrix

**Description:** Returns the Y matrix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
G = obj << Get Y Matrix;
Show( G );

```

#### Hats

**Syntax:** obj &lt;&lt; Hats

**Description:** Saves a new column to the data table. The new column contains the diagonal values of the matrix xInv(x`x)x`. These values are also called hat or leverage values. Hold down the shift key to enter suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Hats;

```

#### Indicator Parameterization Estimates

**Syntax:** obj &lt;&lt; Indicator Parameterization Estimates( state=0|1 )

**Description:** Shows or hides the Indicator Function Parameterization report, which contains parameter estimates with the nominal effects in the model parameterized using the classical indicator functions. This option is available only when there are nominal columns and an intercept among the model effects.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Indicator Parameterization Estimates( 1 );

```

#### Indiv Confidence Interval

**Syntax:** obj &lt;&lt; Indiv Confidence Interval( &lt;alpha=0.05&gt; )

**Description:** Saves new columns to the data table. The new columns contain the bounds for the confidence interval for an individual realization of the response. This encompasses the variation in both the response and its estimation. Hold down the shift key to enter alpha level or suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Indiv Confidence Interval( .001 );

```

#### Indiv Confidence Limit Formula

**Syntax:** obj &lt;&lt; Indiv Confidence Limit Formula( &lt;alpha=0.05&gt; )

**Description:** Saves new formula columns to the original data table. There are columns for the lower and upper confidence limits for an individual prediction that are functions of the regressors. The default level for alpha is 0.05, which creates 95% confidence limits.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
ref = obj << Indiv Confidence Limit Formula( .001 );
Show( ref );

```

#### Interaction Plots

**Syntax:** obj &lt;&lt; Interaction Plots( state=0|1 )

**Description:** Shows or hides a matrix of interaction plots. This option is available only when there are interaction effects in the model.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects(
		:SILICA, :SILANE, :SULFUR, :SILICA * :SILANE, :SILICA * :SULFUR, :SILANE * :SULFUR
	),
	Personality( "Standard Least Squares" ),
	Run
);
Wait( 1 );
obj << Interaction Plots( 1 );

```

#### Inverse Prediction

**Syntax:** obj &lt;&lt; Inverse Prediction( Response( p1, p2, ... ), Term Value( effect1( value ), effect2( value ), ... ) )

**Description:** Generates a predicted X value and confidence interval based on the specified  values of Y and all other factors.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :RunTime ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Inverse Prediction( Response( 40, 45, 50, 55 ), Term Value( RunTime( . ) ) );

```

#### Joint Factor Tests

**Syntax:** obj &lt;&lt; Joint Factor Tests( state=0|1 )

**Description:** Shows or hides a joint test for each main effect in the model. The joint test is for all of the parameters that involve that main effect. This option is available only when the model contains interactions.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects(
		:SILICA, :SILANE, :SULFUR, :SILICA * :SILANE, :SILICA * :SULFUR, :SILANE * :SULFUR
	),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Joint Factor Tests( 1 );

```

#### Lack of Fit

**Syntax:** obj &lt;&lt; Lack of Fit( state=0|1 )

**Description:** Shows or hides a test that assesses if the model has the appropriate effects. On by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run( Lack Of Fit( 0 ) )
);
Wait( 1 );
obj << Lack Of Fit( 1 );

```

#### Mean Confidence Interval

**Syntax:** obj &lt;&lt; Mean Confidence Interval( &lt;alpha=0.05&gt; )

**Description:** Saves new columns to the data table. The new columns contain the bounds for the confidence interval for the expected value. This encompasses the variation in the estimation, but not in the response. Hold down the shift key to enter alpha level or suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Mean Confidence Interval( .01 );

```

#### Mean Confidence Limit Formula

**Syntax:** obj &lt;&lt; Mean Confidence Limit Formula( &lt;alpha=0.05&gt; )

**Description:** Saves new formula columns to the original data table. There are columns for the lower and upper confidence limits for the mean response that are functions of the regressors. The default level for alpha is 0.05, which creates 95% confidence limits.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
r = obj << Mean Confidence Limit Formula( .01 );
Show( r );

```

#### Mixture Profiler

**Syntax:** obj &lt;&lt; Mixture Profiler( state=0|1 )

**Description:** Shows or hides a mixture profiler that shows the contours of the response on a ternary plot. This option is available only if the Mixture Effect attribute is applied to three or more factors in the model or the Mixture property is applied to three or more factor columns.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects(
		:p1 & RS & Mixture, :p2 & RS & Mixture, :p3 & RS & Mixture, :p2 * :p1, :p3 * :p1,
		:p3 * :p2
	),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Mixture Profiler( 1 );

```

#### Model Dialog

**Syntax:** obj &lt;&lt; Model Dialog

**Description:** Shows the completed Fit Model launch window for the current analysis.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Model Dialog;

```

#### Multiple Comparisons

**Syntax:** obj &lt;&lt; Multiple Comparisons( Effect(...)|Estimate List(...)|Sliced Effect Estimates(...), &lt;options&gt; )

**Description:** Generates least squares means estimates or user-defined estimates. The multiple comparisons report enables comparisons with the overall average, comparisons with a control, or pairwise comparisons.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Multiple Comparisons( Effect( :Drug ) );

```

#### New Preset

**Syntax:** obj = New Preset()

**Description:** Create an anonymous preset representing the options and customizations applied to the object. This object can be passed to Apply Preset to copy the settings to another object of the same type.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Lack of Fit( 0 );
obj << Effect Details( 0 );
Report( obj )["Parameter Estimates"] << Close( 1 );
preset = obj << (:y << New Preset);

```

#### Normal Plot

**Syntax:** obj &lt;&lt; Normal Plot( state=0|1 )

**Description:** Shows or hides a plot that identifies parameter estimates that deviate from normality. This can help you determine which effects are active.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Normal Plot( 1 );

```

#### Parameter Estimates

**Syntax:** obj &lt;&lt; Parameter Estimates( state=0|1 )

**Description:** Shows or hides a report that contains the parameter estimates and t tests for the hypothesis that each parameter is equal to zero.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run( Parameter Estimates( 0 ) )
);
Wait( 1 );
obj << Parameter Estimates( 1 );

```

#### Parameter Power

**Syntax:** obj &lt;&lt; Parameter Power( state=0|1 )

**Description:** Adds or removes columns to the Parameter Estimates report. These columns contain power and other details that relate to the corresponding hypothesis tests.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Parameter Power( 1 );

```

#### Parameterized Formula

**Syntax:** obj &lt;&lt; Parameterized Formula

**Description:** Saves a new formula column to the data table. The new column contains a prediction formula that uses table parameters instead of constants.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Parameterized Formula;

```

#### Pareto Plot

**Syntax:** obj &lt;&lt; Pareto Plot( state=0|1 )

**Description:** Shows or hides a plot of the absolute values of the orthogonalized and standardized parameter estimates. This plot shows their composition relative to the sum of the absolute values.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Pareto Plot( 1 );

```

#### Plot Actual by Predicted

**Syntax:** obj &lt;&lt; Plot Actual by Predicted( state=0|1 )

**Description:** Shows or hides the Actual by Predicted plot, which plots the observed values of the response against the predicted values of the response.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Plot Actual by Predicted( 1 );

```

#### Plot Effect Leverage

**Syntax:** obj &lt;&lt; Plot Effect Leverage( state=0|1 )

**Description:** Shows or hides the Leverage Plot report for each effect in the model. The plot shows how observations influence the test for that effect and gives insight about multicollinearity.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run( Plot Effect Leverage( 0 ) )
);
Wait( 1 );
obj << Plot Effect Leverage( 1 );

```

#### Plot Regression

**Syntax:** obj &lt;&lt; Plot Regression( state=0|1 )

**Description:** Shows or hides the Regression Plot report, which contains a scatterplot of the data and regression lines for each level of the categorical effect. This option is available only if there is exactly one continuous effect and no more than one categorical effect in the model. If these conditions are met, the Regression Plot report is provided by default. On by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run( Plot Regression( 0 ) )
);
Wait( 1 );
obj << Plot Regression( 1 );

```

#### Plot Residual by Normal Quantiles

**Syntax:** obj &lt;&lt; Plot Residual by Normal Quantiles( state=0|1 )

**Description:** Shows or hides a plot with the residuals on the vertical axis and the normal quantiles of the residuals on the horizontal axis. This option is not available when the Method is REML.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Plot Residual by Normal Quantiles( 1 );

```

#### Plot Residual by Predicted

**Syntax:** obj &lt;&lt; Plot Residual by Predicted( state=0|1 )

**Description:** Shows or hides a plot with the residuals on the vertical axis and the predicted values of the response on the horizontal axis. This option is available only for continuous responses.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Plot Residual by Predicted( 1 );

```

#### Plot Residual by Row

**Syntax:** obj &lt;&lt; Plot Residual by Row( state=0|1 )

**Description:** Shows or hides a plot with the residuals on the vertical axis and the row number on the horizontal axis.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Plot Residual by Row( 1 );

```

#### Plot Studentized Residuals

**Syntax:** obj &lt;&lt; Plot Studentized Residuals( state=0|1 )

**Description:** Shows or hides a plot with the studentized residuals on the vertical axis and the row number on the horizontal axis. Each point on the plot is computed using an estimate of its standard deviation obtained with the current observation deleted.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Plot Studentized Residuals( 1 );

```

#### Predicted Values

**Syntax:** obj &lt;&lt; Predicted Values

**Description:** Saves a new column to the data table. The new column contains the predicted values for the fitted model. Hold down the shift key to enter suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Predicted Values;

```

#### Prediction Formula

**Syntax:** obj &lt;&lt; Prediction Formula

**Description:** Saves a new formula column to the data table. The new column contains the prediction formula for the fitted model. Hold down the shift key to enter suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Prediction Formula;

```

#### Prediction and Interval Formulas

**Syntax:** obj &lt;&lt; Prediction and Interval Formulas( &lt;alpha=0.05&gt; )

**Description:** Saves new columns to the data table. The columns contain formulas for the predictions, confidence limits, and prediction limits. The limits columns that are created by this option contain properties that are used by the Prediction Profiler. Hold down the shift key to enter alpha level or suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Prediction and Interval Formulas;
dt << Profiler(
	Y( :Pred Formula y ),
	Profiler( 1, Confidence Intervals( 1 ), Prediction Intervals( 1 ) )
);
Wait( 2 );
obj << Prediction and Interval Formulas( 0.01 );
dt << Profiler(
	Y( :Pred Formula y2 ),
	Profiler( 1, Confidence Intervals( 1 ), Prediction Intervals( 1 ) )
);

```

#### Press

**Syntax:** obj &lt;&lt; Press( state=0|1 )

**Description:** Shows or hides the prediction error sum of squares (Press) statistic and its root mean square error (RMSE). The Press statistic is useful when comparing multiple models. Models with lower Press statistics are favored.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Press( 1 );

```

#### Profiler

**Syntax:** obj &lt;&lt; Profiler( state=0|1 )

**Description:** Shows or hides the prediction profiler, which is used to graphically explore the prediction equation by slicing it one factor at a time. The prediction profiler contains features for optimization.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Profiler( 1 );

```

#### Publish Conditional Formula

**Syntax:** obj &lt;&lt; Publish Conditional Formula

**Description:** Creates a prediction formula that includes random effect estimates and publishes it as a formula column script in the Formula Depot platform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Publish Conditional Formula;

```

#### Publish Indiv Confid Limit Formula

**Syntax:** obj &lt;&lt; Publish Indiv Confid Limit Formula

**Description:** Creates formulas for the individual confidence limits and publishes them as formula column scripts in the Formula Depot platform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Publish Indiv Confid Limit Formula;

```

#### Publish Mean Confid Limit Formula

**Syntax:** obj &lt;&lt; Publish Mean Confid Limit Formula

**Description:** Creates formulas for the mean confidence limits and publishes them as formula column scripts in the Formula Depot platform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Publish Mean Confid Limit Formula;

```

#### Publish Parameterized Formula

**Syntax:** obj &lt;&lt; Publish Parameterized Formula

**Description:** Creates a prediction formula that uses parameters instead of constants and publishes it as a formula column script in the Formula Depot platform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Publish Parameterized Formula;

```

#### Publish Prediction Formula

**Syntax:** obj &lt;&lt; Publish Prediction Formula

**Description:** Creates a prediction formula and publishes it as a formula column script in the Formula Depot platform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Publish Prediction Formula;

```

#### Publish Standard Error Formula

**Syntax:** obj &lt;&lt; Publish Standard Error Formula

**Description:** Creates a standard error formula and publishes it as a formula column script in the Formula Depot platform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Publish Standard Error Formula;

```

#### Residuals

**Syntax:** obj &lt;&lt; Residuals

**Description:** Saves a new column to the data table. The new column contains the residual values for the fitted model. Hold down the shift key to enter suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Residuals;

```

#### Save Coding Table

**Syntax:** obj &lt;&lt; Save Coding Table

**Description:** Creates a new data table that contains the JMP coding for all model parameters. The last column shows the values of the response variable.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Save Coding Table;

```

#### Scaled Estimates

**Syntax:** obj &lt;&lt; Scaled Estimates( state=0|1 )

**Description:** Shows or hides parameter estimates that correspond to factors that are scaled to have a mean of zero and a range of two.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects(
		:SILICA, :SILANE, :SULFUR, :SILICA * :SILANE, :SILICA * :SULFUR, :SILANE * :SULFUR
	),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Scaled Estimates( 1 );

```

#### Sequential Tests

**Syntax:** obj &lt;&lt; Sequential Tests( state=0|1 )

**Description:** Shows or hides the Sequential (Type 1) Tests report, which contains the sums of squares as effects are added to the model sequentially.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Sequential Tests( 1 );

```

#### Show All Confidence Intervals

**Syntax:** obj &lt;&lt; Show All Confidence Intervals( state=0|1 )

**Description:** Shows or hides confidence intervals for parameter estimates and least squares mean estimates.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Show All Confidence Intervals( 1 );

```

#### Show Prediction Expression

**Syntax:** obj &lt;&lt; Show Prediction Expression( state=0|1 )

**Description:** Shows or hides the Prediction Expression report, which contains the equation for the estimated model.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Show Prediction Expression( 1 );

```

#### Show Sqrt Variance Component

**Syntax:** obj &lt;&lt; Show Sqrt Variance Component( state=0|1 )

**Description:** Shows or hides the Sqrt Variance Component column in the REML Variance Component Estimates report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Run
);
Wait( 1 );
obj << Show Sqrt Variance Component( 1 );

```

#### Show VIF

**Syntax:** obj &lt;&lt; Show VIF( state=0|1 )

**Description:** Shows or hides the values of the variance inflation factor (VIF) in the Parameter Estimates report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Show VIF( 1 );

```

#### Sorted Estimates

**Syntax:** obj &lt;&lt; Sorted Estimates( state=0|1 )

**Description:** Shows or hides the Sorted Parameter Estimates report, which can be useful in screening situations. This report contains the parameter estimates sorted by the absolute value of the t ratio for each estimate.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Sorted Estimates( 1 );

```

#### Std Error of Individual

**Syntax:** obj &lt;&lt; Std Error of Individual

**Description:** Saves a new column to the data table. The new column contains the standard error of an individual predicted value. This is used to compute the individual confidence interval. Hold down the shift key to enter suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Std Error of Individual;

```

#### Std Error of Predicted

**Syntax:** obj &lt;&lt; Std Error of Predicted

**Description:** Saves a new column to the data table. The new column contains the standard error for predicted values. This is used to compute the mean confidence interval. Hold down the shift key to enter suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Std Error of Predicted;

```

#### Std Error of Residual

**Syntax:** obj &lt;&lt; Std Error of Residual

**Description:** Saves a new column to the data table. The new column contains the standard error for residual values. This is used to compute the studentized residuals. Hold down the shift key to enter suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Std Error of Residual;

```

#### StdErr Pred Formula

**Syntax:** obj &lt;&lt; StdErr Pred Formula

**Description:** Saves a new formula column to the data table. The new column contains the formula for the standard error for predicted values as a function of the regressors. Hold down the shift key to enter suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << StdErr Pred Formula;

```

#### Studentized Residuals

**Syntax:** obj &lt;&lt; Studentized Residuals

**Description:** Saves a new column to the data table. The new column contains the studentized residual, which is the residual divided by its standard error. Hold down the shift key to enter suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Studentized Residuals;

```

#### Summary of Fit

**Syntax:** obj &lt;&lt; Summary of Fit( state=0|1 )

**Description:** Shows or hides a report that contains a summary of model fit statistics.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run( Summary of Fit( 0 ) )
);
Wait( 1 );
obj << Summary of Fit( 1 );

```

#### Surface Profiler

**Syntax:** obj &lt;&lt; Surface Profiler( state=0|1 )

**Description:** Shows or hides a three-dimensional surface plot of the response surface.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Surface Profiler( 1 );

```

### Shared Item Messages

#### Action

**Syntax:** obj &lt;&lt; Action

**Description:** All-purpose trapdoor within a platform to insert expressions to evaluate. Temporarily sets the DisplayBox and DataTable contexts to the Platform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

#### Automatic Recalc

**Syntax:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**Description:** Redoes the analysis automatically for exclude and data changes. If the Automatic Recalc option is turned on, you should consider using Wait(0) commands to ensure that the exclude and data changes take effect before the recalculation.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

#### Broadcast

**Syntax:** obj &lt;&lt; Broadcast(message)

**Description:** Broadcasts a message to a platform. If return results from individual objects are tables, they are concatenated if possible, and the final format is identical to either the result from the Save Combined Table option in a Table Box or the result from the Concatenate option using a Source column. Other than those, results are stored in a list and returned.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
objs = Control Chart Builder(
	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),
	By( :OPERATOR )
);
objs[1] << Broadcast( Save Summaries );

```

#### Column Switcher

**Syntax:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Description:** Adds a control panel for changing the platform&apos;s variables

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);

```

#### Copy ByGroup Script

**Syntax:** obj &lt;&lt; Copy ByGroup Script

**Description:** Create a JSL script to produce this analysis, and put it on the clipboard.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	By( _bycol ),
	Run
);
obj[1] << Copy ByGroup Script;

```

#### Copy Script

**Syntax:** obj &lt;&lt; Copy Script

**Description:** Create a JSL script to produce this analysis, and put it on the clipboard.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Copy Script;

```

#### Data Table Window

**Syntax:** obj &lt;&lt; Data Table Window

**Description:** Move the data table window for this analysis to the front.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Data Table Window;

```

#### Get By Levels

**Syntax:** obj &lt;&lt; Get By Levels

**Description:** Returns an associative array mapping the by group columns to their values.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

#### Get ByGroup Script

**Syntax:** obj &lt;&lt; Get ByGroup Script

**Description:** Creates a script (JSL) to produce this analysis and returns it as an expression.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	By( _bycol ),
	Run
);
t = obj[1] << Get ByGroup Script;
Show( t );

```

#### Get Container

**Syntax:** obj &lt;&lt; Get Container

**Description:** Returns a reference to the container box that holds the content for the object.

**General**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**Platform with Filter**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Show Control Panel( 0 ),
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),
	Local Data Filter(
		Add Filter(
			columns( :age, :sex, :height ),
			Where( :age == {12, 13, 14} ),
			Where( :sex == "F" ),
			Where( :height >= 55 ),
			Display( :age, N Items( 6 ) )
		)
	)
);
New Window( "platform boxes",
	H List Box(
		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),
		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )
	)
);

```

#### Get Data Table

**Syntax:** obj &lt;&lt; Get Data Table

**Description:** Returns a reference to the data table.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
t = obj << Get Datatable;
Show( N Rows( t ) );

```

#### Get Group Platform

**Syntax:** obj &lt;&lt; Get Group Platform

**Description:** Return the Group Platform object if this platform is part of a Group. Otherwise, returns Empty().

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );
group = biv[1] << Get Group Platform;
Wait( 1 );
group << Layout( "Arrange in Tabs" );

```

#### Get Script

**Syntax:** obj &lt;&lt; Get Script

**Description:** Creates a script (JSL) to produce this analysis and returns it as an expression.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
t = obj << Get Script;
Show( t );

```

#### Get Script With Data Table

**Syntax:** obj &lt;&lt; Get Script With Data Table

**Description:** Creates a script(JSL) to produce this analysis specifically referencing this data table and returns it as an expression.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
t = obj << Get Script With Data Table;
Show( t );

```

#### Get Timing

**Syntax:** obj &lt;&lt; Get Timing

**Description:** Times the platform launch.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
t = obj << Get Timing;
Show( t );

```

#### Get Web Support

**Syntax:** obj &lt;&lt; Get Web Support

**Description:** Return a number indicating the level of Interactive HTML support for the display object. 1 means some or all elements are supported. 0 means no support.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

#### Get Where Expr

**Syntax:** obj &lt;&lt; Get Where Expr

**Description:** Returns the Where expression for the data subset, if the platform was launched with By() or Where(). Otherwise, returns Empty()

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );
Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

#### Ignore Platform Preferences

**Syntax:** Ignore Platform Preferences( state=0|1 )

**Description:** Ignores the current settings of the platform&apos;s preferences. The message is ignored when sent to the platform after creation.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Ignore Platform Preferences( 1 ),
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

#### Local Data Filter

**Syntax:** obj &lt;&lt; Local Data Filter

**Description:** To filter data to specific groups or ranges, but local to this platform

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :country ) ),
	Local Data Filter(
		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),
		Mode( Show( 1 ), Include( 1 ) )
	)
);

```

#### New JSL Preset

**Syntax:** New JSL Preset( preset )

**Description:** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
preset = obj << New JSL Preset( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) );
Wait( 1 );
obj << Apply Preset( preset );

```

#### Paste Local Data Filter

**Syntax:** obj &lt;&lt; Paste Local Data Filter

**Description:** Apply the local data filter from the clipboard to the current report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
filter = dist << Local Data Filter(
	Add Filter( columns( :Region ), Where( :Region == "MW" ) )
);
filter << Copy Local Data Filter;
dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );
Wait( 1 );
dist2 << Paste Local Data Filter;

```

#### Redo Analysis

**Syntax:** obj &lt;&lt; Redo Analysis

**Description:** Rerun this same analysis in a new window. The analysis will be different if the data has changed.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Redo Analysis;

```

#### Redo ByGroup Analysis

**Syntax:** obj &lt;&lt; Redo ByGroup Analysis

**Description:** Rerun this same analysis in a new window. The analysis will be different if the data has changed.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	By( _bycol ),
	Run
);
obj[1] << Redo ByGroup Analysis;

```

#### Relaunch Analysis

**Syntax:** obj &lt;&lt; Relaunch Analysis

**Description:** Opens the platform launch window and recalls the settings that were used to create the report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Relaunch Analysis;

```

#### Relaunch ByGroup

**Syntax:** obj &lt;&lt; Relaunch ByGroup

**Description:** Opens the platform launch window and recalls the settings that were used to create the report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	By( _bycol ),
	Run
);
obj[1] << Relaunch ByGroup;

```

#### Remove Column Switcher

**Syntax:** obj &lt;&lt; Remove Column Switcher

**Description:** Removes the most recent Column Switcher that has been added to the platform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
Wait( 2 );
obj << Remove Column Switcher;

```

#### Remove Local Data Filter

**Syntax:** obj &lt;&lt; Remove Local Data Filter

**Description:** If a local data filter has been created, this removes it and restores the platform to use all the data in the data table directly

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dist = dt << Distribution(
	Nominal Distribution( Column( :country ) ),
	Local Data Filter(
		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),
		Mode( Show( 1 ), Include( 1 ) )
	)
);
Wait( 2 );
dist << remove local data filter;

```

#### Render Preset

**Syntax:** Render Preset( preset )

**Description:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

#### Report

**Syntax:** obj &lt;&lt; Report;Report( obj )

**Description:** Returns a reference to the report object.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Report View

**Syntax:** obj &lt;&lt; Report View( "Full"|"Summary" )

**Description:** The report view determines the level of detail visible in a platform report. Full shows all of the detail, while Summary shows only select content, dependent on the platform. For customized behavior, display boxes support a <<Set Summary Behavior message.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**Syntax:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description:** Creates a JSL script to produce this analysis, and save it as a table property in the data table. You can specify a name for the script. The Append Suffix option appends a numeric suffix to the script name, which differentiates the script from an existing script with the same name. The Prompt option prompts the user to specify a script name. The Replace option replaces an existing script with the same name.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**Syntax:** obj &lt;&lt; Save ByGroup Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**Syntax:** obj &lt;&lt; Save ByGroup Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**Syntax:** obj &lt;&lt; Save Script for All Objects

**Description:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**Syntax:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Description:** Saves a script for all report objects to the current data table. This option is useful when you have multiple reports in the window. The script is named after the first platform unless you specify the script name in quotes.

**Example 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	By( _bycol ),
	Run
);
obj[1] << Save Script for All Objects To Data Table;

```

**Example 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	By( _bycol ),
	Run
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**Syntax:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description:** Create a JSL script to produce this analysis, and save it as a table property in the data table.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**Syntax:** obj &lt;&lt; Save Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Save Script to Journal;

```

#### Save Script to Report

**Syntax:** obj &lt;&lt; Save Script to Report

**Description:** Create a JSL script to produce this analysis, and show it in the report itself. Useful to preserve a printed record of what was done.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Save Script to Report;

```

#### Save Script to Script Window

**Syntax:** obj &lt;&lt; Save Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Save Script to Script Window;

```

#### SendToByGroup

**Syntax:** SendToByGroup( {":Column == level"}, command );

**Description:** Sends platform commands or display customization commands to each level of a by-group.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	By( :Sex ),
	SendToByGroup(
		{:sex == "F"},
		Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) )
	),
	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) )
);

```

#### SendToEmbeddedScriptable

**Syntax:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Description:** SendToEmbeddedScriptable restores settings of embedded scriptable objects.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
dt << Life Distribution(
	Y( :Time ),
	Censor( :Censor ),
	Censor Code( 1 ),
	<<Fit Weibull,
	SendToEmbeddedScriptable(
		Dispatch(
			{"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},
			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}
		)
	)
);

```

#### SendToReport

**Syntax:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Description:** Send To Report is used in tandem with the Dispatch command to customize the appearance of a report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :age ) ),
	Continuous Distribution( Column( :weight ) ),
	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) )
);

```

#### Sync to Data Table Changes

**Syntax:** obj &lt;&lt; Sync to Data Table Changes

**Description:** Sync with the exclude and data changes that have been made.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
Wait( 1 );
dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );
dist << Sync To Data Table Changes;

```

#### Title

**Syntax:** obj &lt;&lt; Title( "new title" )

**Description:** Sets the title of the platform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Title( "My Platform" );

```

#### Top Report

**Syntax:** obj &lt;&lt; Top Report

**Description:** Returns a reference to the root node in the report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Transform Column

**Syntax:** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Description:** Create a transform column in the local context of an object, usually a platform. The transform column is active only for the lifetime of the platform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),
	Continuous Distribution( Column( :"age^2"n ) )
);

```

#### View Web XML

**Syntax:** obj &lt;&lt; View Web XML

**Description:** Returns the XML code that is used to create the interactive HTML report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

#### Window View

**Syntax:** obj = Individual Response Fit(...Window View( "Visible"|"Invisible"|"Private" )...)

**Description:** Set the type of the window to be created for the report. By default a Visible report window will be created. An Invisible window will not appear on screen, but is discoverable by functions such as Window(). A Private window responds to most window messages but is not discoverable and must be addressed through the report object

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );
eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;
biv << Close Window;
New Window( "Bivariate Equation",
	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) )
);

```

## Fit Least Squares

### Associated Constructors

#### Least Squares Personality

**Syntax:** Fit Model( Y( columns ), Effects( columns ), Personality( "Standard Least Squares" ), Emphasis( "Effect Leverage"|"Effect Screening"|"Minimal Report" )

**Description:** Fits a linear regression model for a continuous response. Techniques include regression, analysis of variance, analysis of covariance, mixed models, and analysis of designed experiments. The Emphasis option enables you to specify the report layout.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);

```

### Item Messages

#### AICc

**Syntax:** obj &lt;&lt; AICc( state=0|1 )

**Description:** Shows or hides the corrected Akaike&apos;s Information Criterion (AICc) and the Bayesian Information Criterion (BIC) values in the Summary of Fit report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << AICc( 1 );

```

#### Analysis of Variance

**Syntax:** obj &lt;&lt; Analysis of Variance( state=0|1 )

**Description:** Shows or hides a report that contains statistics for comparing the fitted model to a simple mean model.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run( Analysis of Variance( 0 ) )
);
Wait( 1 );
obj << Analysis of Variance( 1 );

```

#### Apply Preset

**Syntax:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**Description:** Apply a previously created preset to the object, updating the options and customizations to match the saved settings.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Lack of Fit( 0 );
obj << Effect Details( 0 );
Report( obj )["Parameter Estimates"] << Close( 1 );
preset = obj << (:y << New Preset);

dt2 = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj2 = dt2 << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj2 << (:Oxy << Apply Preset( preset ));

```

#### Bayes Plot

**Syntax:** obj &lt;&lt; Bayes Plot( K( number ), Priors( p1, p2, p3, ... ), Go )

**Description:** Shows or hides a plot that computes posterior probabilities for all model terms using a Bayesian approach.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Bayes Plot( K( 10 ), Priors( 0.2, 0.2, 0.2, 0.2, 0.2 ), Go );

```

#### Box Cox Y Transformation

**Syntax:** obj &lt;&lt; Box Cox Y Transformation( state=0|1, &lt;Save Best Transformation( state=0|1 )&gt;, &lt;Save Specific Transformation( number )&gt;, &lt;Table of Estimates( state=0|1 )&gt; )

**Description:** Shows or hides the Box-Cox Transformations report, which shows how the fit would change if you refit the model with a power (Box-Cox) transformation on the response.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Box Cox Y Transformation( 1, Save Best Transformation( 1 ) );

```

#### Compare Slopes

**Syntax:** obj &lt;&lt; Compare Slopes( Effect( effect ), &lt;options&gt; )

**Description:** Generates an analysis of means (ANOM) report that compares interaction slopes with the average slope for an analysis of covariance (ANCOVA) model. This option is available only when there is one nominal effect, one continuous effect, and their interaction effect for the fixed effects.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/US Demographics.jmp" );
obj = dt << Fit Model(
	Y( :Eighth Grade Math ),
	Effects( :Region, :High School Graduates, :Region * :High School Graduates ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Compare Slopes(
	Effect( :Region * :High School Graduates ),
	Student's t( 1, All Pairwise Comparisons Scatterplot( 0 ) )
);

```

#### Conditional Indiv CI

**Syntax:** obj &lt;&lt; Conditional Indiv CI( &lt;alpha=0.05&gt; )

**Description:** Saves a new column to the data table. The new column contains the confidence interval for the individual value from conditional prediction. The confidence intervals include random effect estimates for models with random effects. This option is available only for REML analysis methods. Hold down the shift key to enter alpha level or suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Conditional Indiv CI( 0.001 );

```

#### Conditional Mean CI

**Syntax:** obj &lt;&lt; Conditional Mean CI( &lt;alpha=0.05&gt; )

**Description:** Saves a new column to the data table. The new column contains the confidence interval for the expected value from conditional prediction. The confidence intervals include random effect estimates for models with random effects. This option is available only for REML analysis methods. Hold down the shift key to enter alpha level or suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Conditional Mean CI( 0.01 );

```

#### Conditional Pred Formula

**Syntax:** obj &lt;&lt; Conditional Pred Formula

**Description:** Saves a new formula column to the data table. The new column contains a formula that includes random effect estimates for models with random effects. This option is available only for REML analysis methods. Hold down the shift key to enter suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Conditional Pred Formula;

```

#### Conditional Pred Values

**Syntax:** obj &lt;&lt; Conditional Pred Values

**Description:** Saves a new column to the data table. The new column contains the conditional predicted values that are calculated using the best linear unbiased predictors (BLUPs) for the random effects coefficients. This option is available only for REML analysis methods. Hold down the shift key to enter suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Conditional Pred Values;

```

#### Conditional Residuals

**Syntax:** obj &lt;&lt; Conditional Residuals

**Description:** Saves a new column to the data table. The new column contains the residuals from conditional prediction. The residual values include random effect estimates for models with random effects. This option is available only for REML analysis methods. Hold down the shift key to enter suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Conditional Residuals;

```

#### Contour Profiler

**Syntax:** obj &lt;&lt; Contour Profiler( state=0|1 )

**Description:** Shows or hides the contour profiler, which shows the contours of the response graphically for two factors at a time. Available only when the model contains more than one continuous factor.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects(
		:SILICA, :SILANE, :SULFUR, :SILICA * :SILANE, :SILICA * :SULFUR, :SILANE * :SULFUR
	),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Contour Profiler( 1 );

```

#### Cook's D Influence

**Syntax:** obj &lt;&lt; Cook&apos;s D Influence

**Description:** Saves a new column to the data table. The new column contains a measure of how much influence each observation has in estimating the model. Hold down the shift key to enter suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Cook's D Influence;

```

#### Correlation of Estimates

**Syntax:** obj &lt;&lt; Correlation of Estimates( state=0|1 )

**Description:** Shows or hides the matrix of correlations between the parameter estimates for the specified fit.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Correlation of Estimates( 1 );

```

#### Cox Mixtures

**Syntax:** obj &lt;&lt; Cox Mixtures( p1(percentile), p2(percentile), p3(percentile) )

**Description:** Shows or hides parameter estimates for the Cox mixture model based on the specified reference mixture values. This option is available only when the model contains mixture effects.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects(
		:p1 & RS & Mixture, :p2 & RS & Mixture, :p3 & RS & Mixture, :p2 * :p1, :p3 * :p1,
		:p3 * :p2
	),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Cox Mixtures( p1( 0.6615 ), p2( 0.126 ), p3( 0.2125 ) );

```

#### Cube Plots

**Syntax:** obj &lt;&lt; Cube Plots( state=0|1 )

**Description:** Shows or hides the predicted values for the extremes of the factor ranges laid out in one or more cubes.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Cube Plots( 1 );

```

#### Custom Test

**Syntax:** obj &lt;&lt; Custom Test( [l1, l2, l3, ... ], &lt;Label( text )&gt; )

**Description:** Runs a customized F test that contrasts the different effects in the model.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Custom Test( [0 0 2 1], Label( "Comparison of intercepts for drug a vs. drug" ) );

```

#### Durbin Watson Test

**Syntax:** obj &lt;&lt; Durbin Watson Test( state=0|1 )

**Description:** Shows or hides the Durbin-Watson report, which contains a statistic to test whether the residuals have first-order autocorrelation. The report also shows the autocorrelation of the residuals and the exact probability associated with the statistic. This option is appropriate only for time series data and assumes that your observations are in time order.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/CO2.jmp" );
obj = dt << Fit Model(
	Y( :CO2 ),
	Effects( :Year, :Month ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Durbin Watson Test( 1 );

```

#### Effect Details

**Syntax:** obj &lt;&lt; Effect Details( state=0|1 )

**Description:** Shows or hides detailed reports for each effect in the model, including the LS Means table for each categorical effect. Additional information can be shown by sending messages to model effects. See the Effect Fit object under Fit Model for more information. On by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run( Effect Details( 0 ) )
);
Wait( 1 );
obj << Effect Details( 1 );

```

#### Effect Leverage Pairs

**Syntax:** obj &lt;&lt; Effect Leverage Pairs

**Description:** Saves new columns to the data table. The new columns contain the X and Y values that are plotted in effect leverage plots. The Y value is the partial residual. The X value is the regressor shrinkage in the effect leverage plots. Hold down the shift key to enter suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Effect Leverage Pairs;

```

#### Effect Summary

**Syntax:** obj &lt;&lt; Effect Summary( state=0|1 )

**Description:** Shows or hides the Effect Summary report, which enables you to interactively update the effects in the model. On by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Effect Summary( 0 );
Wait( 1 );
obj << Effect Summary( 1 );
Report( obj )["Effect Summary"] << Close( 0 );

```

#### Effect Tests

**Syntax:** obj &lt;&lt; Effect Tests( state=0|1 )

**Description:** Shows or hides a report that contains tests for the fixed effects in the model. On by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run( Effect Tests( 0 ) )
);
Wait( 1 );
obj << Effect Tests( 1 );

```

#### Error Specification

**Syntax:** obj &lt;&lt; Error Specification( "Default Estimate"|"Pure Error"|"Specified" )

**Description:** Specifies the error variance and the error degrees of freedom that are used for standard errors and tests in the Fit Least Squares report. This option is available only when the model contains no random effects.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects( :SILICA, :SILANE ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Error Specification( "Pure Error" );

```

#### Expanded  Estimates

**Syntax:** obj &lt;&lt; Expanded Estimates( state=0|1 )

**Description:** Shows or hides the parameter estimates for all levels of a nominal model effect. For a nominal effect with k levels, the Parameter Estimates table contains coefficients for the k-1 parameters, and the Expanded Estimates table contains the effect coefficients for all k levels. This option is available only when at least one of the effects is not continuous.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Expanded Estimates( 1 );

```

#### Externally Studentized Residuals

**Syntax:** obj &lt;&lt; Externally Studentized Residuals

**Description:** Saves a new column to the data table. The new column contains the externally studentized residuals. These are the residuals divided by standard error estimates that exclude the current row. Hold down the shift key to enter suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Externally Studentized Residuals;

```

#### FDR

**Syntax:** obj &lt;&lt; FDR( state=0|1 )

**Description:** Specifies whether the logworth values and their corresponding p-values in the Effect Summary table are adjusted using the false discovery rate (FDR).

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << FDR( 1 );
Report( obj )["Effect Summary"] << Close( 0 );

```

#### Get Conditional Formula

**Syntax:** obj &lt;&lt; Get Conditional Formula

**Description:** Returns a prediction formula that includes random effect estimates.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Get Conditional Formula;

```

#### Get Effect Names

**Syntax:** obj &lt;&lt; Get Effect Names

**Description:** Returns the effect names.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
G = obj << Get Effect Names;
Show( G );

```

#### Get Effect PValues

**Syntax:** obj &lt;&lt; Get Effect PValues

**Description:** Returns the effect p-values.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
G = obj << Get Effect PValues;
Show( G );

```

#### Get Estimates

**Syntax:** obj &lt;&lt; Get Estimates

**Description:** Returns the estimates.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
G = obj << Get Estimates;
Show( G );

```

#### Get Indiv Confid Limit Formula

**Syntax:** obj &lt;&lt; Get Indiv Confid Limit Formula

**Description:** Returns a formula for the individual confidence limits.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Get Indiv Confid Limit Formula;

```

#### Get MM SAS DATA Step

**Syntax:** obj &lt;&lt; Get MM SAS DATA Step

**Description:** Creates SAS code that you can register in the SAS Model Manager.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Get MM SAS Data Step;

```

#### Get Mean Confid Limit Formula

**Syntax:** obj &lt;&lt; Get Mean Confid Limit Formula

**Description:** Returns a formula for the mean confidence limits.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Get Mean Confid Limit Formula;

```

#### Get Measures

**Syntax:** obj &lt;&lt; Get Measures

**Description:** Returns summary measures of fit from the model.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Get Measures;

```

#### Get Parameter Names

**Syntax:** obj &lt;&lt; Get Parameter Names

**Description:** Returns the parameter names.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
G = obj << Get Parameter Names;
Show( G );

```

#### Get Parameterized Formula

**Syntax:** obj &lt;&lt; Get Parameterized Formula

**Description:** Returns a prediction formula that uses parameters instead of constants.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Get Parameterized Formula;

```

#### Get Prediction Formula

**Syntax:** obj &lt;&lt; Get Prediction Formula

**Description:** Constructs a script to create a prediction formula column and returns it.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Get Prediction Formula;

```

#### Get Random Effect Names

**Syntax:** obj &lt;&lt; Get Random Effect Names

**Description:** Returns the names of the random effects.  Available for REML analysis methods.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Run
);
G = obj << Get Random Effect Names;
Show( G );

```

#### Get SAS DATA Step

**Syntax:** obj &lt;&lt; Get SAS DATA Step

**Description:** Creates SAS code that you can use to score a new data set.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Get SAS Data Step;

```

#### Get SQL prediction expression

**Syntax:** obj &lt;&lt; Get SQL prediction expression

**Description:** Creates an SQL expression that you can paste into an SQL Select statement to predict a response.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Get SQL prediction expression;

```

#### Get Standard Error Formula

**Syntax:** obj &lt;&lt; Get Standard Error Formula

**Description:** Returns a formula for the standard error.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Get Standard Error Formula;

```

#### Get Std Errors

**Syntax:** obj &lt;&lt; Get Std Errors

**Description:** Returns the standard errors.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
G = obj << Get Std Errors;
Show( G );

```

#### Get Variance Components

**Syntax:** obj &lt;&lt; Get Variance Components

**Description:** Returns the variance components.  Available for REML analysis methods.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Run
);
G = obj << Get Variance Components;
Show( G );

```

#### Get X Matrix

**Syntax:** obj &lt;&lt; Get X Matrix

**Description:** Returns the design matrix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
G = obj << Get X Matrix;
Show( G );

```

#### Get XPX Inverse

**Syntax:** obj &lt;&lt; Get XPX Inverse

**Description:** Returns the X&apos;X inverse matrix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
G = obj << Get XPX Inverse;
Show( G );

```

#### Get Y Matrix

**Syntax:** obj &lt;&lt; Get Y Matrix

**Description:** Returns the Y matrix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
G = obj << Get Y Matrix;
Show( G );

```

#### Hats

**Syntax:** obj &lt;&lt; Hats

**Description:** Saves a new column to the data table. The new column contains the diagonal values of the matrix xInv(x`x)x`. These values are also called hat or leverage values. Hold down the shift key to enter suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Hats;

```

#### Indicator Parameterization Estimates

**Syntax:** obj &lt;&lt; Indicator Parameterization Estimates( state=0|1 )

**Description:** Shows or hides the Indicator Function Parameterization report, which contains parameter estimates with the nominal effects in the model parameterized using the classical indicator functions. This option is available only when there are nominal columns and an intercept among the model effects.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Indicator Parameterization Estimates( 1 );

```

#### Indiv Confidence Interval

**Syntax:** obj &lt;&lt; Indiv Confidence Interval( &lt;alpha=0.05&gt; )

**Description:** Saves new columns to the data table. The new columns contain the bounds for the confidence interval for an individual realization of the response. This encompasses the variation in both the response and its estimation. Hold down the shift key to enter alpha level or suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Indiv Confidence Interval( .001 );

```

#### Indiv Confidence Limit Formula

**Syntax:** obj &lt;&lt; Indiv Confidence Limit Formula( &lt;alpha=0.05&gt; )

**Description:** Saves new formula columns to the original data table. There are columns for the lower and upper confidence limits for an individual prediction that are functions of the regressors. The default level for alpha is 0.05, which creates 95% confidence limits.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
ref = obj << Indiv Confidence Limit Formula( .001 );
Show( ref );

```

#### Interaction Plots

**Syntax:** obj &lt;&lt; Interaction Plots( state=0|1 )

**Description:** Shows or hides a matrix of interaction plots. This option is available only when there are interaction effects in the model.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects(
		:SILICA, :SILANE, :SULFUR, :SILICA * :SILANE, :SILICA * :SULFUR, :SILANE * :SULFUR
	),
	Personality( "Standard Least Squares" ),
	Run
);
Wait( 1 );
obj << Interaction Plots( 1 );

```

#### Inverse Prediction

**Syntax:** obj &lt;&lt; Inverse Prediction( Response( p1, p2, ... ), Term Value( effect1( value ), effect2( value ), ... ) )

**Description:** Generates a predicted X value and confidence interval based on the specified  values of Y and all other factors.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :RunTime ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Inverse Prediction( Response( 40, 45, 50, 55 ), Term Value( RunTime( . ) ) );

```

#### Joint Factor Tests

**Syntax:** obj &lt;&lt; Joint Factor Tests( state=0|1 )

**Description:** Shows or hides a joint test for each main effect in the model. The joint test is for all of the parameters that involve that main effect. This option is available only when the model contains interactions.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects(
		:SILICA, :SILANE, :SULFUR, :SILICA * :SILANE, :SILICA * :SULFUR, :SILANE * :SULFUR
	),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Joint Factor Tests( 1 );

```

#### Lack of Fit

**Syntax:** obj &lt;&lt; Lack of Fit( state=0|1 )

**Description:** Shows or hides a test that assesses if the model has the appropriate effects. On by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run( Lack Of Fit( 0 ) )
);
Wait( 1 );
obj << Lack Of Fit( 1 );

```

#### Mean Confidence Interval

**Syntax:** obj &lt;&lt; Mean Confidence Interval( &lt;alpha=0.05&gt; )

**Description:** Saves new columns to the data table. The new columns contain the bounds for the confidence interval for the expected value. This encompasses the variation in the estimation, but not in the response. Hold down the shift key to enter alpha level or suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Mean Confidence Interval( .01 );

```

#### Mean Confidence Limit Formula

**Syntax:** obj &lt;&lt; Mean Confidence Limit Formula( &lt;alpha=0.05&gt; )

**Description:** Saves new formula columns to the original data table. There are columns for the lower and upper confidence limits for the mean response that are functions of the regressors. The default level for alpha is 0.05, which creates 95% confidence limits.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
r = obj << Mean Confidence Limit Formula( .01 );
Show( r );

```

#### Mixture Profiler

**Syntax:** obj &lt;&lt; Mixture Profiler( state=0|1 )

**Description:** Shows or hides a mixture profiler that shows the contours of the response on a ternary plot. This option is available only if the Mixture Effect attribute is applied to three or more factors in the model or the Mixture property is applied to three or more factor columns.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects(
		:p1 & RS & Mixture, :p2 & RS & Mixture, :p3 & RS & Mixture, :p2 * :p1, :p3 * :p1,
		:p3 * :p2
	),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Mixture Profiler( 1 );

```

#### Model Dialog

**Syntax:** obj &lt;&lt; Model Dialog

**Description:** Shows the completed Fit Model launch window for the current analysis.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Model Dialog;

```

#### Multiple Comparisons

**Syntax:** obj &lt;&lt; Multiple Comparisons( Effect(...)|Estimate List(...)|Sliced Effect Estimates(...), &lt;options&gt; )

**Description:** Generates least squares means estimates or user-defined estimates. The multiple comparisons report enables comparisons with the overall average, comparisons with a control, or pairwise comparisons.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Multiple Comparisons( Effect( :Drug ) );

```

#### New Preset

**Syntax:** obj = New Preset()

**Description:** Create an anonymous preset representing the options and customizations applied to the object. This object can be passed to Apply Preset to copy the settings to another object of the same type.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Lack of Fit( 0 );
obj << Effect Details( 0 );
Report( obj )["Parameter Estimates"] << Close( 1 );
preset = obj << (:y << New Preset);

```

#### Normal Plot

**Syntax:** obj &lt;&lt; Normal Plot( state=0|1 )

**Description:** Shows or hides a plot that identifies parameter estimates that deviate from normality. This can help you determine which effects are active.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Normal Plot( 1 );

```

#### Parameter Estimates

**Syntax:** obj &lt;&lt; Parameter Estimates( state=0|1 )

**Description:** Shows or hides a report that contains the parameter estimates and t tests for the hypothesis that each parameter is equal to zero.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run( Parameter Estimates( 0 ) )
);
Wait( 1 );
obj << Parameter Estimates( 1 );

```

#### Parameter Power

**Syntax:** obj &lt;&lt; Parameter Power( state=0|1 )

**Description:** Adds or removes columns to the Parameter Estimates report. These columns contain power and other details that relate to the corresponding hypothesis tests.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Parameter Power( 1 );

```

#### Parameterized Formula

**Syntax:** obj &lt;&lt; Parameterized Formula

**Description:** Saves a new formula column to the data table. The new column contains a prediction formula that uses table parameters instead of constants.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Parameterized Formula;

```

#### Pareto Plot

**Syntax:** obj &lt;&lt; Pareto Plot( state=0|1 )

**Description:** Shows or hides a plot of the absolute values of the orthogonalized and standardized parameter estimates. This plot shows their composition relative to the sum of the absolute values.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Pareto Plot( 1 );

```

#### Plot Actual by Predicted

**Syntax:** obj &lt;&lt; Plot Actual by Predicted( state=0|1 )

**Description:** Shows or hides the Actual by Predicted plot, which plots the observed values of the response against the predicted values of the response.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Plot Actual by Predicted( 1 );

```

#### Plot Effect Leverage

**Syntax:** obj &lt;&lt; Plot Effect Leverage( state=0|1 )

**Description:** Shows or hides the Leverage Plot report for each effect in the model. The plot shows how observations influence the test for that effect and gives insight about multicollinearity.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run( Plot Effect Leverage( 0 ) )
);
Wait( 1 );
obj << Plot Effect Leverage( 1 );

```

#### Plot Regression

**Syntax:** obj &lt;&lt; Plot Regression( state=0|1 )

**Description:** Shows or hides the Regression Plot report, which contains a scatterplot of the data and regression lines for each level of the categorical effect. This option is available only if there is exactly one continuous effect and no more than one categorical effect in the model. If these conditions are met, the Regression Plot report is provided by default. On by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run( Plot Regression( 0 ) )
);
Wait( 1 );
obj << Plot Regression( 1 );

```

#### Plot Residual by Normal Quantiles

**Syntax:** obj &lt;&lt; Plot Residual by Normal Quantiles( state=0|1 )

**Description:** Shows or hides a plot with the residuals on the vertical axis and the normal quantiles of the residuals on the horizontal axis. This option is not available when the Method is REML.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Plot Residual by Normal Quantiles( 1 );

```

#### Plot Residual by Predicted

**Syntax:** obj &lt;&lt; Plot Residual by Predicted( state=0|1 )

**Description:** Shows or hides a plot with the residuals on the vertical axis and the predicted values of the response on the horizontal axis. This option is available only for continuous responses.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Plot Residual by Predicted( 1 );

```

#### Plot Residual by Row

**Syntax:** obj &lt;&lt; Plot Residual by Row( state=0|1 )

**Description:** Shows or hides a plot with the residuals on the vertical axis and the row number on the horizontal axis.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Plot Residual by Row( 1 );

```

#### Plot Studentized Residuals

**Syntax:** obj &lt;&lt; Plot Studentized Residuals( state=0|1 )

**Description:** Shows or hides a plot with the studentized residuals on the vertical axis and the row number on the horizontal axis. Each point on the plot is computed using an estimate of its standard deviation obtained with the current observation deleted.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Plot Studentized Residuals( 1 );

```

#### Predicted Values

**Syntax:** obj &lt;&lt; Predicted Values

**Description:** Saves a new column to the data table. The new column contains the predicted values for the fitted model. Hold down the shift key to enter suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Predicted Values;

```

#### Prediction Formula

**Syntax:** obj &lt;&lt; Prediction Formula

**Description:** Saves a new formula column to the data table. The new column contains the prediction formula for the fitted model. Hold down the shift key to enter suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Prediction Formula;

```

#### Prediction and Interval Formulas

**Syntax:** obj &lt;&lt; Prediction and Interval Formulas( &lt;alpha=0.05&gt; )

**Description:** Saves new columns to the data table. The columns contain formulas for the predictions, confidence limits, and prediction limits. The limits columns that are created by this option contain properties that are used by the Prediction Profiler. Hold down the shift key to enter alpha level or suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Prediction and Interval Formulas;
dt << Profiler(
	Y( :Pred Formula y ),
	Profiler( 1, Confidence Intervals( 1 ), Prediction Intervals( 1 ) )
);
Wait( 2 );
obj << Prediction and Interval Formulas( 0.01 );
dt << Profiler(
	Y( :Pred Formula y2 ),
	Profiler( 1, Confidence Intervals( 1 ), Prediction Intervals( 1 ) )
);

```

#### Press

**Syntax:** obj &lt;&lt; Press( state=0|1 )

**Description:** Shows or hides the prediction error sum of squares (Press) statistic and its root mean square error (RMSE). The Press statistic is useful when comparing multiple models. Models with lower Press statistics are favored.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Press( 1 );

```

#### Profiler

**Syntax:** obj &lt;&lt; Profiler( state=0|1 )

**Description:** Shows or hides the prediction profiler, which is used to graphically explore the prediction equation by slicing it one factor at a time. The prediction profiler contains features for optimization.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Profiler( 1 );

```

#### Publish Conditional Formula

**Syntax:** obj &lt;&lt; Publish Conditional Formula

**Description:** Creates a prediction formula that includes random effect estimates and publishes it as a formula column script in the Formula Depot platform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Publish Conditional Formula;

```

#### Publish Indiv Confid Limit Formula

**Syntax:** obj &lt;&lt; Publish Indiv Confid Limit Formula

**Description:** Creates formulas for the individual confidence limits and publishes them as formula column scripts in the Formula Depot platform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Publish Indiv Confid Limit Formula;

```

#### Publish Mean Confid Limit Formula

**Syntax:** obj &lt;&lt; Publish Mean Confid Limit Formula

**Description:** Creates formulas for the mean confidence limits and publishes them as formula column scripts in the Formula Depot platform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Publish Mean Confid Limit Formula;

```

#### Publish Parameterized Formula

**Syntax:** obj &lt;&lt; Publish Parameterized Formula

**Description:** Creates a prediction formula that uses parameters instead of constants and publishes it as a formula column script in the Formula Depot platform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Publish Parameterized Formula;

```

#### Publish Prediction Formula

**Syntax:** obj &lt;&lt; Publish Prediction Formula

**Description:** Creates a prediction formula and publishes it as a formula column script in the Formula Depot platform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Publish Prediction Formula;

```

#### Publish Standard Error Formula

**Syntax:** obj &lt;&lt; Publish Standard Error Formula

**Description:** Creates a standard error formula and publishes it as a formula column script in the Formula Depot platform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Publish Standard Error Formula;

```

#### Residuals

**Syntax:** obj &lt;&lt; Residuals

**Description:** Saves a new column to the data table. The new column contains the residual values for the fitted model. Hold down the shift key to enter suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Residuals;

```

#### Save Coding Table

**Syntax:** obj &lt;&lt; Save Coding Table

**Description:** Creates a new data table that contains the JMP coding for all model parameters. The last column shows the values of the response variable.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Save Coding Table;

```

#### Scaled Estimates

**Syntax:** obj &lt;&lt; Scaled Estimates( state=0|1 )

**Description:** Shows or hides parameter estimates that correspond to factors that are scaled to have a mean of zero and a range of two.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects(
		:SILICA, :SILANE, :SULFUR, :SILICA * :SILANE, :SILICA * :SULFUR, :SILANE * :SULFUR
	),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Scaled Estimates( 1 );

```

#### Sequential Tests

**Syntax:** obj &lt;&lt; Sequential Tests( state=0|1 )

**Description:** Shows or hides the Sequential (Type 1) Tests report, which contains the sums of squares as effects are added to the model sequentially.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Sequential Tests( 1 );

```

#### Show All Confidence Intervals

**Syntax:** obj &lt;&lt; Show All Confidence Intervals( state=0|1 )

**Description:** Shows or hides confidence intervals for parameter estimates and least squares mean estimates.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Show All Confidence Intervals( 1 );

```

#### Show Prediction Expression

**Syntax:** obj &lt;&lt; Show Prediction Expression( state=0|1 )

**Description:** Shows or hides the Prediction Expression report, which contains the equation for the estimated model.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Show Prediction Expression( 1 );

```

#### Show Sqrt Variance Component

**Syntax:** obj &lt;&lt; Show Sqrt Variance Component( state=0|1 )

**Description:** Shows or hides the Sqrt Variance Component column in the REML Variance Component Estimates report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Run
);
Wait( 1 );
obj << Show Sqrt Variance Component( 1 );

```

#### Show VIF

**Syntax:** obj &lt;&lt; Show VIF( state=0|1 )

**Description:** Shows or hides the values of the variance inflation factor (VIF) in the Parameter Estimates report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Show VIF( 1 );

```

#### Sorted Estimates

**Syntax:** obj &lt;&lt; Sorted Estimates( state=0|1 )

**Description:** Shows or hides the Sorted Parameter Estimates report, which can be useful in screening situations. This report contains the parameter estimates sorted by the absolute value of the t ratio for each estimate.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Sorted Estimates( 1 );

```

#### Std Error of Individual

**Syntax:** obj &lt;&lt; Std Error of Individual

**Description:** Saves a new column to the data table. The new column contains the standard error of an individual predicted value. This is used to compute the individual confidence interval. Hold down the shift key to enter suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Std Error of Individual;

```

#### Std Error of Predicted

**Syntax:** obj &lt;&lt; Std Error of Predicted

**Description:** Saves a new column to the data table. The new column contains the standard error for predicted values. This is used to compute the mean confidence interval. Hold down the shift key to enter suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Std Error of Predicted;

```

#### Std Error of Residual

**Syntax:** obj &lt;&lt; Std Error of Residual

**Description:** Saves a new column to the data table. The new column contains the standard error for residual values. This is used to compute the studentized residuals. Hold down the shift key to enter suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Std Error of Residual;

```

#### StdErr Pred Formula

**Syntax:** obj &lt;&lt; StdErr Pred Formula

**Description:** Saves a new formula column to the data table. The new column contains the formula for the standard error for predicted values as a function of the regressors. Hold down the shift key to enter suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << StdErr Pred Formula;

```

#### Studentized Residuals

**Syntax:** obj &lt;&lt; Studentized Residuals

**Description:** Saves a new column to the data table. The new column contains the studentized residual, which is the residual divided by its standard error. Hold down the shift key to enter suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Studentized Residuals;

```

#### Summary of Fit

**Syntax:** obj &lt;&lt; Summary of Fit( state=0|1 )

**Description:** Shows or hides a report that contains a summary of model fit statistics.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run( Summary of Fit( 0 ) )
);
Wait( 1 );
obj << Summary of Fit( 1 );

```

#### Surface Profiler

**Syntax:** obj &lt;&lt; Surface Profiler( state=0|1 )

**Description:** Shows or hides a three-dimensional surface plot of the response surface.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Surface Profiler( 1 );

```

### Shared Item Messages

#### Action

**Syntax:** obj &lt;&lt; Action

**Description:** All-purpose trapdoor within a platform to insert expressions to evaluate. Temporarily sets the DisplayBox and DataTable contexts to the Platform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

#### Automatic Recalc

**Syntax:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**Description:** Redoes the analysis automatically for exclude and data changes. If the Automatic Recalc option is turned on, you should consider using Wait(0) commands to ensure that the exclude and data changes take effect before the recalculation.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

#### Broadcast

**Syntax:** obj &lt;&lt; Broadcast(message)

**Description:** Broadcasts a message to a platform. If return results from individual objects are tables, they are concatenated if possible, and the final format is identical to either the result from the Save Combined Table option in a Table Box or the result from the Concatenate option using a Source column. Other than those, results are stored in a list and returned.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
objs = Control Chart Builder(
	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),
	By( :OPERATOR )
);
objs[1] << Broadcast( Save Summaries );

```

#### Column Switcher

**Syntax:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Description:** Adds a control panel for changing the platform&apos;s variables

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);

```

#### Copy ByGroup Script

**Syntax:** obj &lt;&lt; Copy ByGroup Script

**Description:** Create a JSL script to produce this analysis, and put it on the clipboard.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	By( _bycol ),
	Run
);
obj[1] << Copy ByGroup Script;

```

#### Copy Script

**Syntax:** obj &lt;&lt; Copy Script

**Description:** Create a JSL script to produce this analysis, and put it on the clipboard.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Copy Script;

```

#### Data Table Window

**Syntax:** obj &lt;&lt; Data Table Window

**Description:** Move the data table window for this analysis to the front.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Data Table Window;

```

#### Get By Levels

**Syntax:** obj &lt;&lt; Get By Levels

**Description:** Returns an associative array mapping the by group columns to their values.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

#### Get ByGroup Script

**Syntax:** obj &lt;&lt; Get ByGroup Script

**Description:** Creates a script (JSL) to produce this analysis and returns it as an expression.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	By( _bycol ),
	Run
);
t = obj[1] << Get ByGroup Script;
Show( t );

```

#### Get Container

**Syntax:** obj &lt;&lt; Get Container

**Description:** Returns a reference to the container box that holds the content for the object.

**General**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**Platform with Filter**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Show Control Panel( 0 ),
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),
	Local Data Filter(
		Add Filter(
			columns( :age, :sex, :height ),
			Where( :age == {12, 13, 14} ),
			Where( :sex == "F" ),
			Where( :height >= 55 ),
			Display( :age, N Items( 6 ) )
		)
	)
);
New Window( "platform boxes",
	H List Box(
		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),
		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )
	)
);

```

#### Get Data Table

**Syntax:** obj &lt;&lt; Get Data Table

**Description:** Returns a reference to the data table.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
t = obj << Get Datatable;
Show( N Rows( t ) );

```

#### Get Group Platform

**Syntax:** obj &lt;&lt; Get Group Platform

**Description:** Return the Group Platform object if this platform is part of a Group. Otherwise, returns Empty().

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );
group = biv[1] << Get Group Platform;
Wait( 1 );
group << Layout( "Arrange in Tabs" );

```

#### Get Script

**Syntax:** obj &lt;&lt; Get Script

**Description:** Creates a script (JSL) to produce this analysis and returns it as an expression.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
t = obj << Get Script;
Show( t );

```

#### Get Script With Data Table

**Syntax:** obj &lt;&lt; Get Script With Data Table

**Description:** Creates a script(JSL) to produce this analysis specifically referencing this data table and returns it as an expression.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
t = obj << Get Script With Data Table;
Show( t );

```

#### Get Timing

**Syntax:** obj &lt;&lt; Get Timing

**Description:** Times the platform launch.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
t = obj << Get Timing;
Show( t );

```

#### Get Web Support

**Syntax:** obj &lt;&lt; Get Web Support

**Description:** Return a number indicating the level of Interactive HTML support for the display object. 1 means some or all elements are supported. 0 means no support.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

#### Get Where Expr

**Syntax:** obj &lt;&lt; Get Where Expr

**Description:** Returns the Where expression for the data subset, if the platform was launched with By() or Where(). Otherwise, returns Empty()

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );
Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

#### Ignore Platform Preferences

**Syntax:** Ignore Platform Preferences( state=0|1 )

**Description:** Ignores the current settings of the platform&apos;s preferences. The message is ignored when sent to the platform after creation.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Ignore Platform Preferences( 1 ),
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

#### Local Data Filter

**Syntax:** obj &lt;&lt; Local Data Filter

**Description:** To filter data to specific groups or ranges, but local to this platform

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :country ) ),
	Local Data Filter(
		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),
		Mode( Show( 1 ), Include( 1 ) )
	)
);

```

#### New JSL Preset

**Syntax:** New JSL Preset( preset )

**Description:** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
preset = obj << New JSL Preset( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) );
Wait( 1 );
obj << Apply Preset( preset );

```

#### Paste Local Data Filter

**Syntax:** obj &lt;&lt; Paste Local Data Filter

**Description:** Apply the local data filter from the clipboard to the current report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
filter = dist << Local Data Filter(
	Add Filter( columns( :Region ), Where( :Region == "MW" ) )
);
filter << Copy Local Data Filter;
dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );
Wait( 1 );
dist2 << Paste Local Data Filter;

```

#### Redo Analysis

**Syntax:** obj &lt;&lt; Redo Analysis

**Description:** Rerun this same analysis in a new window. The analysis will be different if the data has changed.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Redo Analysis;

```

#### Redo ByGroup Analysis

**Syntax:** obj &lt;&lt; Redo ByGroup Analysis

**Description:** Rerun this same analysis in a new window. The analysis will be different if the data has changed.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	By( _bycol ),
	Run
);
obj[1] << Redo ByGroup Analysis;

```

#### Relaunch Analysis

**Syntax:** obj &lt;&lt; Relaunch Analysis

**Description:** Opens the platform launch window and recalls the settings that were used to create the report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Relaunch Analysis;

```

#### Relaunch ByGroup

**Syntax:** obj &lt;&lt; Relaunch ByGroup

**Description:** Opens the platform launch window and recalls the settings that were used to create the report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	By( _bycol ),
	Run
);
obj[1] << Relaunch ByGroup;

```

#### Remove Column Switcher

**Syntax:** obj &lt;&lt; Remove Column Switcher

**Description:** Removes the most recent Column Switcher that has been added to the platform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
Wait( 2 );
obj << Remove Column Switcher;

```

#### Remove Local Data Filter

**Syntax:** obj &lt;&lt; Remove Local Data Filter

**Description:** If a local data filter has been created, this removes it and restores the platform to use all the data in the data table directly

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dist = dt << Distribution(
	Nominal Distribution( Column( :country ) ),
	Local Data Filter(
		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),
		Mode( Show( 1 ), Include( 1 ) )
	)
);
Wait( 2 );
dist << remove local data filter;

```

#### Render Preset

**Syntax:** Render Preset( preset )

**Description:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

#### Report

**Syntax:** obj &lt;&lt; Report;Report( obj )

**Description:** Returns a reference to the report object.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Report View

**Syntax:** obj &lt;&lt; Report View( "Full"|"Summary" )

**Description:** The report view determines the level of detail visible in a platform report. Full shows all of the detail, while Summary shows only select content, dependent on the platform. For customized behavior, display boxes support a <<Set Summary Behavior message.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**Syntax:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description:** Creates a JSL script to produce this analysis, and save it as a table property in the data table. You can specify a name for the script. The Append Suffix option appends a numeric suffix to the script name, which differentiates the script from an existing script with the same name. The Prompt option prompts the user to specify a script name. The Replace option replaces an existing script with the same name.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**Syntax:** obj &lt;&lt; Save ByGroup Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**Syntax:** obj &lt;&lt; Save ByGroup Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**Syntax:** obj &lt;&lt; Save Script for All Objects

**Description:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**Syntax:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Description:** Saves a script for all report objects to the current data table. This option is useful when you have multiple reports in the window. The script is named after the first platform unless you specify the script name in quotes.

**Example 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	By( _bycol ),
	Run
);
obj[1] << Save Script for All Objects To Data Table;

```

**Example 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	By( _bycol ),
	Run
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**Syntax:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description:** Create a JSL script to produce this analysis, and save it as a table property in the data table.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**Syntax:** obj &lt;&lt; Save Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Save Script to Journal;

```

#### Save Script to Report

**Syntax:** obj &lt;&lt; Save Script to Report

**Description:** Create a JSL script to produce this analysis, and show it in the report itself. Useful to preserve a printed record of what was done.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Save Script to Report;

```

#### Save Script to Script Window

**Syntax:** obj &lt;&lt; Save Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Save Script to Script Window;

```

#### SendToByGroup

**Syntax:** SendToByGroup( {":Column == level"}, command );

**Description:** Sends platform commands or display customization commands to each level of a by-group.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	By( :Sex ),
	SendToByGroup(
		{:sex == "F"},
		Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) )
	),
	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) )
);

```

#### SendToEmbeddedScriptable

**Syntax:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Description:** SendToEmbeddedScriptable restores settings of embedded scriptable objects.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
dt << Life Distribution(
	Y( :Time ),
	Censor( :Censor ),
	Censor Code( 1 ),
	<<Fit Weibull,
	SendToEmbeddedScriptable(
		Dispatch(
			{"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},
			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}
		)
	)
);

```

#### SendToReport

**Syntax:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Description:** Send To Report is used in tandem with the Dispatch command to customize the appearance of a report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :age ) ),
	Continuous Distribution( Column( :weight ) ),
	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) )
);

```

#### Sync to Data Table Changes

**Syntax:** obj &lt;&lt; Sync to Data Table Changes

**Description:** Sync with the exclude and data changes that have been made.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
Wait( 1 );
dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );
dist << Sync To Data Table Changes;

```

#### Title

**Syntax:** obj &lt;&lt; Title( "new title" )

**Description:** Sets the title of the platform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Title( "My Platform" );

```

#### Top Report

**Syntax:** obj &lt;&lt; Top Report

**Description:** Returns a reference to the root node in the report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Transform Column

**Syntax:** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Description:** Create a transform column in the local context of an object, usually a platform. The transform column is active only for the lifetime of the platform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),
	Continuous Distribution( Column( :"age^2"n ) )
);

```

#### View Web XML

**Syntax:** obj &lt;&lt; View Web XML

**Description:** Returns the XML code that is used to create the interactive HTML report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

#### Window View

**Syntax:** obj = Least Squares Personality(...Window View( "Visible"|"Invisible"|"Private" )...)

**Description:** Set the type of the window to be created for the report. By default a Visible report window will be created. An Invisible window will not appear on screen, but is discoverable by functions such as Window(). A Private window responds to most window messages but is not discoverable and must be addressed through the report object

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );
eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;
biv << Close Window;
New Window( "Bivariate Equation",
	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) )
);

```

## Fit LogVariance > Response Fit LogVariance

### Item Messages

#### Apply Preset

**Syntax:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**Description:** Apply a previously created preset to the object, updating the options and customizations to match the saved settings.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Pressure, :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << (:Pressure << Plot Actual By Predicted( 0 ));
Report( obj )["Response Pressure", "Variance Model For Pressure"] << Close( 1 );
Wait( 1 );
preset = obj << (1 << New Preset);
obj << (2 << Apply Preset( preset ));

```

#### Contour Profiler

**Syntax:** obj &lt;&lt; Contour Profiler( state=0|1 )

**Description:** Shows or hides the contour profiler, which shows the contours of the response graphically for two factors at a time.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
Wait( 0 );
obj << Contour Profiler( 1 );

```

#### Indiv Confidence Interval

**Syntax:** obj &lt;&lt; Indiv Confidence Interval

**Description:** Saves new columns to the data table. The new columns contain confidence limits for individual response values.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Indiv Confidence Interval;

```

#### Mean Confidence Interval

**Syntax:** obj &lt;&lt; Mean Confidence Interval

**Description:** Saves new columns to the data table. The new columns contain the bounds for a confidence interval for the prediction mean.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Mean Confidence Interval;

```

#### Model Dialog

**Syntax:** obj &lt;&lt; Model Dialog

**Description:** Shows the completed Fit Model launch window for the current analysis.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Model Dialog;

```

#### New Preset

**Syntax:** obj = New Preset()

**Description:** Create an anonymous preset representing the options and customizations applied to the object. This object can be passed to Apply Preset to copy the settings to another object of the same type.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Pressure, :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << (:Pressure << Plot Actual By Predicted( 0 ));
Report( obj )["Response Pressure", "Variance Model For Pressure"] << Close( 1 );
Wait( 1 );
preset = obj << (1 << New Preset);

```

#### Plot Actual by Predicted

**Syntax:** obj &lt;&lt; Plot Actual by Predicted( state=0|1 )

**Description:** Shows or hides a diagnostic plot with the actual values on the vertical axis and predicted values on the horizontal axis. On by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run( Plot Actual by Predicted( 0 ) )
);
Wait( 1 );
obj << Plot Actual by Predicted( 1 );

```

#### Plot Studentized Residual by Predicted

**Syntax:** obj &lt;&lt; Plot Studentized Residual by Predicted( state=0|1 )

**Description:** Shows or hides a diagnostic plot with the Studentized residuals on the vertical axis and the predicted values on the horizontal axis.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Plot Studentized Residual by Predicted( 1 );

```

#### Plot Studentized Residual by Row

**Syntax:** obj &lt;&lt; Plot Studentized Residual by Row( state=0|1 )

**Description:** Shows or hides a diagnostic plot with the Studentized residuals on the vertical axis and the row number on the horizontal axis.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Plot Studentized Residual by Row( 1 );

```

#### Prediction Formula

**Syntax:** obj &lt;&lt; Prediction Formula

**Description:** Saves a new formula column to the data table. The new column contains the predicted values for the mean, as computed by the specified model.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Prediction Formula;

```

#### Profiler

**Syntax:** obj &lt;&lt; Profiler( state=0|1 )

**Description:** Shows or hides the prediction profiler, which is used to graphically explore the prediction equation by slicing it one factor at a time. The prediction profiler contains features for optimization.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
Wait( 0 );
obj << Profiler( 1 );

```

#### Residuals

**Syntax:** obj &lt;&lt; Residuals

**Description:** Saves a new column to the data table. The new column contains the residuals, which are the observed response values minus predicted values.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Residuals;

```

#### Std Dev Formula

**Syntax:** obj &lt;&lt; Std Dev Formula

**Description:** Saves a new formula column to the data table. The new column contains the predicted values for the standard deviation, as computed by the specified model.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Std Dev Formula;

```

#### Std Error of Individual

**Syntax:** obj &lt;&lt; Std Error of Individual

**Description:** Saves a new column to the data table. The new column contains the standard errors of the individual predicted values.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Std Error of Individual;

```

#### Std Error of Predicted

**Syntax:** obj &lt;&lt; Std Error of Predicted

**Description:** Saves a new column to the data table. The new column contains the standard errors of the predicted values.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Std Error of Predicted;

```

#### Studentized Residuals

**Syntax:** obj &lt;&lt; Studentized Residuals

**Description:** Saves a new column to the data table. The new column values are the residuals divided by their standard error.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Studentized Residuals;

```

#### Surface Profiler

**Syntax:** obj &lt;&lt; Surface Profiler( state=0|1 )

**Description:** Shows or hides interactive surface plots for the response and the response standard deviation.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
Wait( 0 );
obj << Surface Profiler( 1 );

```

#### Variance Formula

**Syntax:** obj &lt;&lt; Variance Formula

**Description:** Saves a new formula column to the data table. The new column contains the predicted values for the variance, as computed by the specified model.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Variance Formula;

```

### Shared Item Messages

#### Action

**Syntax:** obj &lt;&lt; Action

**Description:** All-purpose trapdoor within a platform to insert expressions to evaluate. Temporarily sets the DisplayBox and DataTable contexts to the Platform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

#### Automatic Recalc

**Syntax:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**Description:** Redoes the analysis automatically for exclude and data changes. If the Automatic Recalc option is turned on, you should consider using Wait(0) commands to ensure that the exclude and data changes take effect before the recalculation.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Prediction Formula;
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

#### Broadcast

**Syntax:** obj &lt;&lt; Broadcast(message)

**Description:** Broadcasts a message to a platform. If return results from individual objects are tables, they are concatenated if possible, and the final format is identical to either the result from the Save Combined Table option in a Table Box or the result from the Concatenate option using a Source column. Other than those, results are stored in a list and returned.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
objs = Control Chart Builder(
	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),
	By( :OPERATOR )
);
objs[1] << Broadcast( Save Summaries );

```

#### Column Switcher

**Syntax:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Description:** Adds a control panel for changing the platform&apos;s variables

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);

```

#### Copy ByGroup Script

**Syntax:** obj &lt;&lt; Copy ByGroup Script

**Description:** Create a JSL script to produce this analysis, and put it on the clipboard.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	By( _bycol ),
	Run
);
obj << Prediction Formula;
obj[1] << Copy ByGroup Script;

```

#### Copy Script

**Syntax:** obj &lt;&lt; Copy Script

**Description:** Create a JSL script to produce this analysis, and put it on the clipboard.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Prediction Formula;
obj << Copy Script;

```

#### Data Table Window

**Syntax:** obj &lt;&lt; Data Table Window

**Description:** Move the data table window for this analysis to the front.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Prediction Formula;
obj << Data Table Window;

```

#### Get By Levels

**Syntax:** obj &lt;&lt; Get By Levels

**Description:** Returns an associative array mapping the by group columns to their values.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

#### Get ByGroup Script

**Syntax:** obj &lt;&lt; Get ByGroup Script

**Description:** Creates a script (JSL) to produce this analysis and returns it as an expression.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	By( _bycol ),
	Run
);
obj << Prediction Formula;
t = obj[1] << Get ByGroup Script;
Show( t );

```

#### Get Container

**Syntax:** obj &lt;&lt; Get Container

**Description:** Returns a reference to the container box that holds the content for the object.

**General**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Prediction Formula;
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**Platform with Filter**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Show Control Panel( 0 ),
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),
	Local Data Filter(
		Add Filter(
			columns( :age, :sex, :height ),
			Where( :age == {12, 13, 14} ),
			Where( :sex == "F" ),
			Where( :height >= 55 ),
			Display( :age, N Items( 6 ) )
		)
	)
);
New Window( "platform boxes",
	H List Box(
		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),
		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )
	)
);

```

#### Get Data Table

**Syntax:** obj &lt;&lt; Get Data Table

**Description:** Returns a reference to the data table.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Prediction Formula;
t = obj << Get Datatable;
Show( N Rows( t ) );

```

#### Get Group Platform

**Syntax:** obj &lt;&lt; Get Group Platform

**Description:** Return the Group Platform object if this platform is part of a Group. Otherwise, returns Empty().

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );
group = biv[1] << Get Group Platform;
Wait( 1 );
group << Layout( "Arrange in Tabs" );

```

#### Get Script

**Syntax:** obj &lt;&lt; Get Script

**Description:** Creates a script (JSL) to produce this analysis and returns it as an expression.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Prediction Formula;
t = obj << Get Script;
Show( t );

```

#### Get Script With Data Table

**Syntax:** obj &lt;&lt; Get Script With Data Table

**Description:** Creates a script(JSL) to produce this analysis specifically referencing this data table and returns it as an expression.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Prediction Formula;
t = obj << Get Script With Data Table;
Show( t );

```

#### Get Timing

**Syntax:** obj &lt;&lt; Get Timing

**Description:** Times the platform launch.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Prediction Formula;
t = obj << Get Timing;
Show( t );

```

#### Get Web Support

**Syntax:** obj &lt;&lt; Get Web Support

**Description:** Return a number indicating the level of Interactive HTML support for the display object. 1 means some or all elements are supported. 0 means no support.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

#### Get Where Expr

**Syntax:** obj &lt;&lt; Get Where Expr

**Description:** Returns the Where expression for the data subset, if the platform was launched with By() or Where(). Otherwise, returns Empty()

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );
Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

#### Ignore Platform Preferences

**Syntax:** Ignore Platform Preferences( state=0|1 )

**Description:** Ignores the current settings of the platform&apos;s preferences. The message is ignored when sent to the platform after creation.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Ignore Platform Preferences( 1 ),
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

#### Local Data Filter

**Syntax:** obj &lt;&lt; Local Data Filter

**Description:** To filter data to specific groups or ranges, but local to this platform

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :country ) ),
	Local Data Filter(
		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),
		Mode( Show( 1 ), Include( 1 ) )
	)
);

```

#### New JSL Preset

**Syntax:** New JSL Preset( preset )

**Description:** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
preset = obj << New JSL Preset( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) );
Wait( 1 );
obj << Apply Preset( preset );

```

#### Paste Local Data Filter

**Syntax:** obj &lt;&lt; Paste Local Data Filter

**Description:** Apply the local data filter from the clipboard to the current report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
filter = dist << Local Data Filter(
	Add Filter( columns( :Region ), Where( :Region == "MW" ) )
);
filter << Copy Local Data Filter;
dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );
Wait( 1 );
dist2 << Paste Local Data Filter;

```

#### Redo Analysis

**Syntax:** obj &lt;&lt; Redo Analysis

**Description:** Rerun this same analysis in a new window. The analysis will be different if the data has changed.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Prediction Formula;
obj << Redo Analysis;

```

#### Redo ByGroup Analysis

**Syntax:** obj &lt;&lt; Redo ByGroup Analysis

**Description:** Rerun this same analysis in a new window. The analysis will be different if the data has changed.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	By( _bycol ),
	Run
);
obj << Prediction Formula;
obj[1] << Redo ByGroup Analysis;

```

#### Relaunch Analysis

**Syntax:** obj &lt;&lt; Relaunch Analysis

**Description:** Opens the platform launch window and recalls the settings that were used to create the report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Prediction Formula;
obj << Relaunch Analysis;

```

#### Relaunch ByGroup

**Syntax:** obj &lt;&lt; Relaunch ByGroup

**Description:** Opens the platform launch window and recalls the settings that were used to create the report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	By( _bycol ),
	Run
);
obj << Prediction Formula;
obj[1] << Relaunch ByGroup;

```

#### Remove Column Switcher

**Syntax:** obj &lt;&lt; Remove Column Switcher

**Description:** Removes the most recent Column Switcher that has been added to the platform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
Wait( 2 );
obj << Remove Column Switcher;

```

#### Remove Local Data Filter

**Syntax:** obj &lt;&lt; Remove Local Data Filter

**Description:** If a local data filter has been created, this removes it and restores the platform to use all the data in the data table directly

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dist = dt << Distribution(
	Nominal Distribution( Column( :country ) ),
	Local Data Filter(
		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),
		Mode( Show( 1 ), Include( 1 ) )
	)
);
Wait( 2 );
dist << remove local data filter;

```

#### Render Preset

**Syntax:** Render Preset( preset )

**Description:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

#### Report

**Syntax:** obj &lt;&lt; Report;Report( obj )

**Description:** Returns a reference to the report object.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Prediction Formula;
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Report View

**Syntax:** obj &lt;&lt; Report View( "Full"|"Summary" )

**Description:** The report view determines the level of detail visible in a platform report. Full shows all of the detail, while Summary shows only select content, dependent on the platform. For customized behavior, display boxes support a <<Set Summary Behavior message.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Prediction Formula;
obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**Syntax:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description:** Creates a JSL script to produce this analysis, and save it as a table property in the data table. You can specify a name for the script. The Append Suffix option appends a numeric suffix to the script name, which differentiates the script from an existing script with the same name. The Prompt option prompts the user to specify a script name. The Replace option replaces an existing script with the same name.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	By( _bycol ),
	Run
);
obj << Prediction Formula;
obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**Syntax:** obj &lt;&lt; Save ByGroup Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	By( _bycol ),
	Run
);
obj << Prediction Formula;
obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**Syntax:** obj &lt;&lt; Save ByGroup Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	By( _bycol ),
	Run
);
obj << Prediction Formula;
obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**Syntax:** obj &lt;&lt; Save Script for All Objects

**Description:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Prediction Formula;
obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**Syntax:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Description:** Saves a script for all report objects to the current data table. This option is useful when you have multiple reports in the window. The script is named after the first platform unless you specify the script name in quotes.

**Example 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	By( _bycol ),
	Run
);
obj << Prediction Formula;
obj[1] << Save Script for All Objects To Data Table;

```

**Example 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	By( _bycol ),
	Run
);
obj << Prediction Formula;
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**Syntax:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description:** Create a JSL script to produce this analysis, and save it as a table property in the data table.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Prediction Formula;
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**Syntax:** obj &lt;&lt; Save Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Prediction Formula;
obj << Save Script to Journal;

```

#### Save Script to Report

**Syntax:** obj &lt;&lt; Save Script to Report

**Description:** Create a JSL script to produce this analysis, and show it in the report itself. Useful to preserve a printed record of what was done.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Prediction Formula;
obj << Save Script to Report;

```

#### Save Script to Script Window

**Syntax:** obj &lt;&lt; Save Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Prediction Formula;
obj << Save Script to Script Window;

```

#### SendToByGroup

**Syntax:** SendToByGroup( {":Column == level"}, command );

**Description:** Sends platform commands or display customization commands to each level of a by-group.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	By( :Sex ),
	SendToByGroup(
		{:sex == "F"},
		Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) )
	),
	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) )
);

```

#### SendToEmbeddedScriptable

**Syntax:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Description:** SendToEmbeddedScriptable restores settings of embedded scriptable objects.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
dt << Life Distribution(
	Y( :Time ),
	Censor( :Censor ),
	Censor Code( 1 ),
	<<Fit Weibull,
	SendToEmbeddedScriptable(
		Dispatch(
			{"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},
			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}
		)
	)
);

```

#### SendToReport

**Syntax:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Description:** Send To Report is used in tandem with the Dispatch command to customize the appearance of a report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :age ) ),
	Continuous Distribution( Column( :weight ) ),
	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) )
);

```

#### Sync to Data Table Changes

**Syntax:** obj &lt;&lt; Sync to Data Table Changes

**Description:** Sync with the exclude and data changes that have been made.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
Wait( 1 );
dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );
dist << Sync To Data Table Changes;

```

#### Title

**Syntax:** obj &lt;&lt; Title( "new title" )

**Description:** Sets the title of the platform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Prediction Formula;
obj << Title( "My Platform" );

```

#### Top Report

**Syntax:** obj &lt;&lt; Top Report

**Description:** Returns a reference to the root node in the report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Prediction Formula;
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Transform Column

**Syntax:** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Description:** Create a transform column in the local context of an object, usually a platform. The transform column is active only for the lifetime of the platform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),
	Continuous Distribution( Column( :"age^2"n ) )
);

```

#### View Web XML

**Syntax:** obj &lt;&lt; View Web XML

**Description:** Returns the XML code that is used to create the interactive HTML report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

#### Window View

**Syntax:** obj = Prediction Formula(...Window View( "Visible"|"Invisible"|"Private" )...)

**Description:** Set the type of the window to be created for the report. By default a Visible report window will be created. An Invisible window will not appear on screen, but is discoverable by functions such as Window(). A Private window responds to most window messages but is not discoverable and must be addressed through the report object

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );
eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;
biv << Close Window;
New Window( "Bivariate Equation",
	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) )
);

```

## Fit LogVariance

### Associated Constructors

#### Fit LogVariance

**Syntax:** Fit Model( Y( columns ), Effects( columns ), Personality( "Loglinear Variance" ) )

**Description:** Fits a model for both the mean and the variance of a continuous response variable. You can specify different sets of effects for the two models.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);

```

### Item Messages

#### Contour Profiler

**Syntax:** obj &lt;&lt; Contour Profiler( state=0|1 )

**Description:** Shows or hides the contour profiler, which shows the contours of the response graphically for two factors at a time.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
Wait( 0 );
obj << Contour Profiler( 1 );

```

#### Model Dialog

**Syntax:** obj &lt;&lt; Model Dialog

**Description:** Shows the completed Fit Model launch window for the current analysis.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Model Dialog;

```

#### Profiler

**Syntax:** obj &lt;&lt; Profiler( state=0|1 )

**Description:** Shows or hides the prediction profiler, which is used to graphically explore the prediction equation by slicing it one factor at a time. The prediction profiler contains features for optimization.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
Wait( 0 );
obj << Profiler( 1 );

```

#### Surface Profiler

**Syntax:** obj &lt;&lt; Surface Profiler( state=0|1 )

**Description:** Shows or hides interactive surface plots for the response and the response standard deviation.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
Wait( 0 );
obj << Surface Profiler( 1 );

```

### Shared Item Messages

#### Action

**Syntax:** obj &lt;&lt; Action

**Description:** All-purpose trapdoor within a platform to insert expressions to evaluate. Temporarily sets the DisplayBox and DataTable contexts to the Platform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

#### Apply Preset

**Syntax:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**Description:** Apply a previously created preset to the object, updating the options and customizations to match the saved settings.

**Anonymous preset**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();
dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );
Wait( 1 );
obj2 << Apply Preset( preset );

```

**Search by name**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

**Search within folder(s)**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

#### Column Switcher

**Syntax:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Description:** Adds a control panel for changing the platform&apos;s variables

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);

```

#### Copy Script

**Syntax:** obj &lt;&lt; Copy Script

**Description:** Create a JSL script to produce this analysis, and put it on the clipboard.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Copy Script;

```

#### Data Table Window

**Syntax:** obj &lt;&lt; Data Table Window

**Description:** Move the data table window for this analysis to the front.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Data Table Window;

```

#### Get By Levels

**Syntax:** obj &lt;&lt; Get By Levels

**Description:** Returns an associative array mapping the by group columns to their values.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

#### Get Container

**Syntax:** obj &lt;&lt; Get Container

**Description:** Returns a reference to the container box that holds the content for the object.

**General**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**Platform with Filter**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Show Control Panel( 0 ),
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),
	Local Data Filter(
		Add Filter(
			columns( :age, :sex, :height ),
			Where( :age == {12, 13, 14} ),
			Where( :sex == "F" ),
			Where( :height >= 55 ),
			Display( :age, N Items( 6 ) )
		)
	)
);
New Window( "platform boxes",
	H List Box(
		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),
		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )
	)
);

```

#### Get Data Table

**Syntax:** obj &lt;&lt; Get Data Table

**Description:** Returns a reference to the data table.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
t = obj << Get Datatable;
Show( N Rows( t ) );

```

#### Get Script

**Syntax:** obj &lt;&lt; Get Script

**Description:** Creates a script (JSL) to produce this analysis and returns it as an expression.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
t = obj << Get Script;
Show( t );

```

#### Get Script With Data Table

**Syntax:** obj &lt;&lt; Get Script With Data Table

**Description:** Creates a script(JSL) to produce this analysis specifically referencing this data table and returns it as an expression.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
t = obj << Get Script With Data Table;
Show( t );

```

#### Get Timing

**Syntax:** obj &lt;&lt; Get Timing

**Description:** Times the platform launch.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
t = obj << Get Timing;
Show( t );

```

#### Get Web Support

**Syntax:** obj &lt;&lt; Get Web Support

**Description:** Return a number indicating the level of Interactive HTML support for the display object. 1 means some or all elements are supported. 0 means no support.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

#### Get Where Expr

**Syntax:** obj &lt;&lt; Get Where Expr

**Description:** Returns the Where expression for the data subset, if the platform was launched with By() or Where(). Otherwise, returns Empty()

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );
Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

#### Ignore Platform Preferences

**Syntax:** Ignore Platform Preferences( state=0|1 )

**Description:** Ignores the current settings of the platform&apos;s preferences. The message is ignored when sent to the platform after creation.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Ignore Platform Preferences( 1 ),
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

#### Local Data Filter

**Syntax:** obj &lt;&lt; Local Data Filter

**Description:** To filter data to specific groups or ranges, but local to this platform

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :country ) ),
	Local Data Filter(
		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),
		Mode( Show( 1 ), Include( 1 ) )
	)
);

```

#### New JSL Preset

**Syntax:** New JSL Preset( preset )

**Description:** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
preset = obj << New JSL Preset( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) );
Wait( 1 );
obj << Apply Preset( preset );

```

#### New Preset

**Syntax:** obj = New Preset()

**Description:** Create an anonymous preset representing the options and customizations applied to the object. This object can be passed to Apply Preset to copy the settings to another object of the same type.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

#### Paste Local Data Filter

**Syntax:** obj &lt;&lt; Paste Local Data Filter

**Description:** Apply the local data filter from the clipboard to the current report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
filter = dist << Local Data Filter(
	Add Filter( columns( :Region ), Where( :Region == "MW" ) )
);
filter << Copy Local Data Filter;
dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );
Wait( 1 );
dist2 << Paste Local Data Filter;

```

#### Redo Analysis

**Syntax:** obj &lt;&lt; Redo Analysis

**Description:** Rerun this same analysis in a new window. The analysis will be different if the data has changed.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Redo Analysis;

```

#### Relaunch Analysis

**Syntax:** obj &lt;&lt; Relaunch Analysis

**Description:** Opens the platform launch window and recalls the settings that were used to create the report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Relaunch Analysis;

```

#### Remove Column Switcher

**Syntax:** obj &lt;&lt; Remove Column Switcher

**Description:** Removes the most recent Column Switcher that has been added to the platform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
Wait( 2 );
obj << Remove Column Switcher;

```

#### Remove Local Data Filter

**Syntax:** obj &lt;&lt; Remove Local Data Filter

**Description:** If a local data filter has been created, this removes it and restores the platform to use all the data in the data table directly

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dist = dt << Distribution(
	Nominal Distribution( Column( :country ) ),
	Local Data Filter(
		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),
		Mode( Show( 1 ), Include( 1 ) )
	)
);
Wait( 2 );
dist << remove local data filter;

```

#### Render Preset

**Syntax:** Render Preset( preset )

**Description:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

#### Report

**Syntax:** obj &lt;&lt; Report;Report( obj )

**Description:** Returns a reference to the report object.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Report View

**Syntax:** obj &lt;&lt; Report View( "Full"|"Summary" )

**Description:** The report view determines the level of detail visible in a platform report. Full shows all of the detail, while Summary shows only select content, dependent on the platform. For customized behavior, display boxes support a <<Set Summary Behavior message.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Report View( "Summary" );

```

#### Save Script for All Objects

**Syntax:** obj &lt;&lt; Save Script for All Objects

**Description:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**Syntax:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Description:** Saves a script for all report objects to the current data table. This option is useful when you have multiple reports in the window. The script is named after the first platform unless you specify the script name in quotes.

**Example 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	By( _bycol ),
	Run
);
obj[1] << Save Script for All Objects To Data Table;

```

**Example 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	By( _bycol ),
	Run
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**Syntax:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description:** Create a JSL script to produce this analysis, and save it as a table property in the data table.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**Syntax:** obj &lt;&lt; Save Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Save Script to Journal;

```

#### Save Script to Report

**Syntax:** obj &lt;&lt; Save Script to Report

**Description:** Create a JSL script to produce this analysis, and show it in the report itself. Useful to preserve a printed record of what was done.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Save Script to Report;

```

#### Save Script to Script Window

**Syntax:** obj &lt;&lt; Save Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Save Script to Script Window;

```

#### SendToByGroup

**Syntax:** SendToByGroup( {":Column == level"}, command );

**Description:** Sends platform commands or display customization commands to each level of a by-group.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	By( :Sex ),
	SendToByGroup(
		{:sex == "F"},
		Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) )
	),
	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) )
);

```

#### SendToEmbeddedScriptable

**Syntax:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Description:** SendToEmbeddedScriptable restores settings of embedded scriptable objects.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
dt << Life Distribution(
	Y( :Time ),
	Censor( :Censor ),
	Censor Code( 1 ),
	<<Fit Weibull,
	SendToEmbeddedScriptable(
		Dispatch(
			{"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},
			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}
		)
	)
);

```

#### SendToReport

**Syntax:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Description:** Send To Report is used in tandem with the Dispatch command to customize the appearance of a report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :age ) ),
	Continuous Distribution( Column( :weight ) ),
	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) )
);

```

#### Sync to Data Table Changes

**Syntax:** obj &lt;&lt; Sync to Data Table Changes

**Description:** Sync with the exclude and data changes that have been made.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
Wait( 1 );
dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );
dist << Sync To Data Table Changes;

```

#### Title

**Syntax:** obj &lt;&lt; Title( "new title" )

**Description:** Sets the title of the platform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Title( "My Platform" );

```

#### Top Report

**Syntax:** obj &lt;&lt; Top Report

**Description:** Returns a reference to the root node in the report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### View Web XML

**Syntax:** obj &lt;&lt; View Web XML

**Description:** Returns the XML code that is used to create the interactive HTML report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

## Fit Manova > Effect

### Item Messages

#### Centroid Plot

**Syntax:** obj &lt;&lt; (Response[i] &lt;&lt; (Effect[j] &lt;&lt; Centroid Plot( state=0|1 )))

**Description:** Shows or hides a table of centroid values and a plot of the centroids (multivariate least squares means) on the first two canonical variables formed from the test space. Note: The Intercept term is specified as Effect[0].

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run( Response Function( "Sum" ) )
);
Wait( 0 );
obj << (Response[1] << (Effect[1] << Centroid Plot( 1 )));

```

#### Contrast

**Syntax:** obj &lt;&lt; (Response[i] &lt;&lt; (Effect[j] &lt;&lt; Contrast( [ l1 l2 l3 ... ] )))

**Description:** Runs a customized F test for the statistical contrasts of treatment levels for an effect in the model. Specify the contrasts as a vector argument. Note: The Intercept term is specified as Effect[0].

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run( Response Function( "Sum" ) )
);
Wait( 0 );
obj << (Response[1] << (Effect[3] << Contrast( [0.5 0.5 -0.5 -0.5] )));

```

#### Save Canonical Scores

**Syntax:** obj &lt;&lt; (Response[i] &lt;&lt; (Effect[j] &lt;&lt; Save Cannonical Scores

**Description:** Saves new columns to the data table. The new columns contain the canonical scores for the specified effect. Note: The Intercept term is specified as Effect[0].

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run( Response Function( "Sum" ) )
);
Wait( 0 );
obj << (Response[1] << (Effect[1] << Save Canonical Scores));

```

#### Test Details

**Syntax:** obj &lt;&lt; (Response[i] &lt;&lt; (Effect[j] &lt;&lt; Test Details( state=0|1 )))

**Description:** Shows or hides canonical details about the test for the specified effect. Note: The Intercept term is specified as Effect[0].

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run( Response Function( "Sum" ) )
);
Wait( 0 );
obj << (Response[1] << (Effect[1] << Test Details( 1 )));

```

## Fit Manova > Response

### Item Messages

#### Custom Test

**Syntax:** obj &lt;&lt; (Response[i] &lt;&lt; Custom Test( [ l1 l2 l3 ... ], &lt;Label( name )&gt; ))

**Description:** Runs a customized F test that contrasts the different effects in the model.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run( Response Function( "Sum" ), Response Function( "Contrast" ) )
);
Wait( 0 );
obj << (Response[2] << Custom Test( [0 1 0 -1 0], Label( "Test 1" ) ));

```

#### Effect

**Syntax:** obj &lt;&lt; (Response[i] &lt;&lt; (Effect[j] &lt;&lt; effect options))

**Description:** Enables you to send messages to a specific effect within a specific response in the report window. For more information about messages that can be sent to an effect, select Objects > Fit Model > Fit Manova > Effect in the Scripting Index. Note: The Intercept term is specified as Effect[0].

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run( Response Function( "Sum" ) )
);
obj << (Response[1] << (Effect[1] << Centroid Plot( 1 )));

```

## Fit Manova

### Associated Constructors

#### Fit Manova

**Syntax:** Fit Model( Y( columns ), Effects( columns ), Personality( "Manova" ) )

**Description:** Fits a model that involves multiple continuous response variables. Techniques include multivariate analysis of variance, repeated measures, discriminant analysis, and canonical correlations.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);

```

### Item Messages

#### Model Dialog

**Syntax:** obj &lt;&lt; Model Dialog

**Description:** Shows the completed Fit Model launch window for the current analysis.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);
obj << Model Dialog;

```

#### Response Function

**Syntax:** obj &lt;&lt; Response Function( matrix type, &lt;Univariate Tests Also&gt; )

**Description:** Specifies the matrix type for the response function. This matrix is the M matrix, the columns of which define a set of transformation variables for the multivariate analysis. The optional Univariate Tests Also argument specifies that the report include adjusted and unadjusted univariate repeated measures tests and multivariate tests.

**Basic Example**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);
obj << Response Function( "Sum" );

```

**Include Univariate Tests**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);
Wait( 0 );
obj << Response Function( "Contrast", Univariate Tests Also );

```

#### Save Discrim

**Syntax:** obj &lt;&lt; Save Discrim

**Description:** Saves new columns to the data table. The new columns contain the Mahalanobis distances, the probability for membership in each level of the effect, and the predicted level with the highest probability. This option is available only when one categorical effect is present in the model.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Fit Model(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Effects( :Species ),
	Personality( "Manova" ),
	Run
);
obj << Save Discrim;

```

#### Save Predicted

**Syntax:** obj &lt;&lt; Save Predicted

**Description:** Saves new columns to the data table. The new columns contain the predicted values for each response in the model.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);
obj << Save Predicted;

```

#### Save Residuals

**Syntax:** obj &lt;&lt; Save Residuals

**Description:** Saves new columns to the data table. The new columns contain residuals for each response in the model.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);
obj << Save Residuals;

```

### Shared Item Messages

#### Action

**Syntax:** obj &lt;&lt; Action

**Description:** All-purpose trapdoor within a platform to insert expressions to evaluate. Temporarily sets the DisplayBox and DataTable contexts to the Platform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

#### Apply Preset

**Syntax:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**Description:** Apply a previously created preset to the object, updating the options and customizations to match the saved settings.

**Anonymous preset**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();
dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );
Wait( 1 );
obj2 << Apply Preset( preset );

```

**Search by name**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

**Search within folder(s)**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

#### Automatic Recalc

**Syntax:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**Description:** Redoes the analysis automatically for exclude and data changes. If the Automatic Recalc option is turned on, you should consider using Wait(0) commands to ensure that the exclude and data changes take effect before the recalculation.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

#### Broadcast

**Syntax:** obj &lt;&lt; Broadcast(message)

**Description:** Broadcasts a message to a platform. If return results from individual objects are tables, they are concatenated if possible, and the final format is identical to either the result from the Save Combined Table option in a Table Box or the result from the Concatenate option using a Source column. Other than those, results are stored in a list and returned.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
objs = Control Chart Builder(
	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),
	By( :OPERATOR )
);
objs[1] << Broadcast( Save Summaries );

```

#### Column Switcher

**Syntax:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Description:** Adds a control panel for changing the platform&apos;s variables

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);

```

#### Copy ByGroup Script

**Syntax:** obj &lt;&lt; Copy ByGroup Script

**Description:** Create a JSL script to produce this analysis, and put it on the clipboard.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	By( _bycol ),
	Run
);
obj[1] << Copy ByGroup Script;

```

#### Copy Script

**Syntax:** obj &lt;&lt; Copy Script

**Description:** Create a JSL script to produce this analysis, and put it on the clipboard.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);
obj << Copy Script;

```

#### Data Table Window

**Syntax:** obj &lt;&lt; Data Table Window

**Description:** Move the data table window for this analysis to the front.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);
obj << Data Table Window;

```

#### Get By Levels

**Syntax:** obj &lt;&lt; Get By Levels

**Description:** Returns an associative array mapping the by group columns to their values.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

#### Get ByGroup Script

**Syntax:** obj &lt;&lt; Get ByGroup Script

**Description:** Creates a script (JSL) to produce this analysis and returns it as an expression.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	By( _bycol ),
	Run
);
t = obj[1] << Get ByGroup Script;
Show( t );

```

#### Get Container

**Syntax:** obj &lt;&lt; Get Container

**Description:** Returns a reference to the container box that holds the content for the object.

**General**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**Platform with Filter**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Show Control Panel( 0 ),
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),
	Local Data Filter(
		Add Filter(
			columns( :age, :sex, :height ),
			Where( :age == {12, 13, 14} ),
			Where( :sex == "F" ),
			Where( :height >= 55 ),
			Display( :age, N Items( 6 ) )
		)
	)
);
New Window( "platform boxes",
	H List Box(
		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),
		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )
	)
);

```

#### Get Data Table

**Syntax:** obj &lt;&lt; Get Data Table

**Description:** Returns a reference to the data table.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);
t = obj << Get Datatable;
Show( N Rows( t ) );

```

#### Get Group Platform

**Syntax:** obj &lt;&lt; Get Group Platform

**Description:** Return the Group Platform object if this platform is part of a Group. Otherwise, returns Empty().

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );
group = biv[1] << Get Group Platform;
Wait( 1 );
group << Layout( "Arrange in Tabs" );

```

#### Get Script

**Syntax:** obj &lt;&lt; Get Script

**Description:** Creates a script (JSL) to produce this analysis and returns it as an expression.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);
t = obj << Get Script;
Show( t );

```

#### Get Script With Data Table

**Syntax:** obj &lt;&lt; Get Script With Data Table

**Description:** Creates a script(JSL) to produce this analysis specifically referencing this data table and returns it as an expression.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);
t = obj << Get Script With Data Table;
Show( t );

```

#### Get Timing

**Syntax:** obj &lt;&lt; Get Timing

**Description:** Times the platform launch.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);
t = obj << Get Timing;
Show( t );

```

#### Get Web Support

**Syntax:** obj &lt;&lt; Get Web Support

**Description:** Return a number indicating the level of Interactive HTML support for the display object. 1 means some or all elements are supported. 0 means no support.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

#### Get Where Expr

**Syntax:** obj &lt;&lt; Get Where Expr

**Description:** Returns the Where expression for the data subset, if the platform was launched with By() or Where(). Otherwise, returns Empty()

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );
Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

#### Ignore Platform Preferences

**Syntax:** Ignore Platform Preferences( state=0|1 )

**Description:** Ignores the current settings of the platform&apos;s preferences. The message is ignored when sent to the platform after creation.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Ignore Platform Preferences( 1 ),
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

#### Local Data Filter

**Syntax:** obj &lt;&lt; Local Data Filter

**Description:** To filter data to specific groups or ranges, but local to this platform

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :country ) ),
	Local Data Filter(
		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),
		Mode( Show( 1 ), Include( 1 ) )
	)
);

```

#### New JSL Preset

**Syntax:** New JSL Preset( preset )

**Description:** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
preset = obj << New JSL Preset( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) );
Wait( 1 );
obj << Apply Preset( preset );

```

#### New Preset

**Syntax:** obj = New Preset()

**Description:** Create an anonymous preset representing the options and customizations applied to the object. This object can be passed to Apply Preset to copy the settings to another object of the same type.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

#### Paste Local Data Filter

**Syntax:** obj &lt;&lt; Paste Local Data Filter

**Description:** Apply the local data filter from the clipboard to the current report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
filter = dist << Local Data Filter(
	Add Filter( columns( :Region ), Where( :Region == "MW" ) )
);
filter << Copy Local Data Filter;
dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );
Wait( 1 );
dist2 << Paste Local Data Filter;

```

#### Redo Analysis

**Syntax:** obj &lt;&lt; Redo Analysis

**Description:** Rerun this same analysis in a new window. The analysis will be different if the data has changed.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);
obj << Redo Analysis;

```

#### Redo ByGroup Analysis

**Syntax:** obj &lt;&lt; Redo ByGroup Analysis

**Description:** Rerun this same analysis in a new window. The analysis will be different if the data has changed.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	By( _bycol ),
	Run
);
obj[1] << Redo ByGroup Analysis;

```

#### Relaunch Analysis

**Syntax:** obj &lt;&lt; Relaunch Analysis

**Description:** Opens the platform launch window and recalls the settings that were used to create the report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);
obj << Relaunch Analysis;

```

#### Relaunch ByGroup

**Syntax:** obj &lt;&lt; Relaunch ByGroup

**Description:** Opens the platform launch window and recalls the settings that were used to create the report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	By( _bycol ),
	Run
);
obj[1] << Relaunch ByGroup;

```

#### Remove Column Switcher

**Syntax:** obj &lt;&lt; Remove Column Switcher

**Description:** Removes the most recent Column Switcher that has been added to the platform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
Wait( 2 );
obj << Remove Column Switcher;

```

#### Remove Local Data Filter

**Syntax:** obj &lt;&lt; Remove Local Data Filter

**Description:** If a local data filter has been created, this removes it and restores the platform to use all the data in the data table directly

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dist = dt << Distribution(
	Nominal Distribution( Column( :country ) ),
	Local Data Filter(
		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),
		Mode( Show( 1 ), Include( 1 ) )
	)
);
Wait( 2 );
dist << remove local data filter;

```

#### Render Preset

**Syntax:** Render Preset( preset )

**Description:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

#### Report

**Syntax:** obj &lt;&lt; Report;Report( obj )

**Description:** Returns a reference to the report object.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Report View

**Syntax:** obj &lt;&lt; Report View( "Full"|"Summary" )

**Description:** The report view determines the level of detail visible in a platform report. Full shows all of the detail, while Summary shows only select content, dependent on the platform. For customized behavior, display boxes support a <<Set Summary Behavior message.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);
obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**Syntax:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description:** Creates a JSL script to produce this analysis, and save it as a table property in the data table. You can specify a name for the script. The Append Suffix option appends a numeric suffix to the script name, which differentiates the script from an existing script with the same name. The Prompt option prompts the user to specify a script name. The Replace option replaces an existing script with the same name.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**Syntax:** obj &lt;&lt; Save ByGroup Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**Syntax:** obj &lt;&lt; Save ByGroup Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**Syntax:** obj &lt;&lt; Save Script for All Objects

**Description:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);
obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**Syntax:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Description:** Saves a script for all report objects to the current data table. This option is useful when you have multiple reports in the window. The script is named after the first platform unless you specify the script name in quotes.

**Example 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	By( _bycol ),
	Run
);
obj[1] << Save Script for All Objects To Data Table;

```

**Example 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	By( _bycol ),
	Run
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**Syntax:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description:** Create a JSL script to produce this analysis, and save it as a table property in the data table.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**Syntax:** obj &lt;&lt; Save Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);
obj << Save Script to Journal;

```

#### Save Script to Report

**Syntax:** obj &lt;&lt; Save Script to Report

**Description:** Create a JSL script to produce this analysis, and show it in the report itself. Useful to preserve a printed record of what was done.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);
obj << Save Script to Report;

```

#### Save Script to Script Window

**Syntax:** obj &lt;&lt; Save Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);
obj << Save Script to Script Window;

```

#### SendToByGroup

**Syntax:** SendToByGroup( {":Column == level"}, command );

**Description:** Sends platform commands or display customization commands to each level of a by-group.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	By( :Sex ),
	SendToByGroup(
		{:sex == "F"},
		Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) )
	),
	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) )
);

```

#### SendToEmbeddedScriptable

**Syntax:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Description:** SendToEmbeddedScriptable restores settings of embedded scriptable objects.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
dt << Life Distribution(
	Y( :Time ),
	Censor( :Censor ),
	Censor Code( 1 ),
	<<Fit Weibull,
	SendToEmbeddedScriptable(
		Dispatch(
			{"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},
			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}
		)
	)
);

```

#### SendToReport

**Syntax:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Description:** Send To Report is used in tandem with the Dispatch command to customize the appearance of a report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :age ) ),
	Continuous Distribution( Column( :weight ) ),
	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) )
);

```

#### Sync to Data Table Changes

**Syntax:** obj &lt;&lt; Sync to Data Table Changes

**Description:** Sync with the exclude and data changes that have been made.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
Wait( 1 );
dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );
dist << Sync To Data Table Changes;

```

#### Title

**Syntax:** obj &lt;&lt; Title( "new title" )

**Description:** Sets the title of the platform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);
obj << Title( "My Platform" );

```

#### Top Report

**Syntax:** obj &lt;&lt; Top Report

**Description:** Returns a reference to the root node in the report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Transform Column

**Syntax:** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Description:** Create a transform column in the local context of an object, usually a platform. The transform column is active only for the lifetime of the platform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),
	Continuous Distribution( Column( :"age^2"n ) )
);

```

#### View Web XML

**Syntax:** obj &lt;&lt; View Web XML

**Description:** Returns the XML code that is used to create the interactive HTML report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

#### Window View

**Syntax:** obj = Fit Manova(...Window View( "Visible"|"Invisible"|"Private" )...)

**Description:** Set the type of the window to be created for the report. By default a Visible report window will be created. An Invisible window will not appear on screen, but is discoverable by functions such as Window(). A Private window responds to most window messages but is not discoverable and must be addressed through the report object

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );
eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;
biv << Close Window;
New Window( "Bivariate Equation",
	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) )
);

```

## Fit Mixed

### Associated Constructors

#### Fit Mixed

**Syntax:** Fit Model( Y( columns ), Effects( columns ), Personality( "Mixed Model" ) )

**Description:** Fits a linear mixed model for a variety of complex covariance structures using REML. These models can be used for random coefficients, repeated measures, split-plots, spatial data, and data with multiple correlated responses.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run()
);

```

### Item Messages

#### Actual by Conditional Predicted Plot

**Syntax:** obj &lt;&lt; Actual by Conditional Predicted Plot( state=0|1 )

**Description:** Shows or hides a plot of actual values versus values that are predicted by the model, while accounting for the random effects. This option is available only when the model contains at least one random effect. On by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run( Actual by Conditional Predicted Plot( 0 ) )
);
Wait( 1 );
obj << Actual by Conditional Predicted Plot( 1 );

```

#### Actual by Predicted Plot

**Syntax:** obj &lt;&lt; Actual by Predicted Plot( state=0|1 )

**Description:** Shows or hides a plot of actual values versus values that are predicted by the model, without accounting for the random effects. This option is available only when the model contains at least one fixed effect. On by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run( Actual by Predicted Plot( 0 ) )
);
Wait( 1 );
obj << Actual by Predicted Plot( 1 );

```

#### Between-Within Degrees of Freedom

**Syntax:** obj &lt;&lt; Between-Within Degrees of Freedom( state=0|1)

**Description:** Replaces the standard errors with unadjusted estimates and degrees of freedom to between-within based throughout the report. To use between-within degrees of freedom in a multiple comparisons report, you must select this option prior to adding a multiple comparisons report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cholesterol Stacked.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Treatment, :Month, :Month * :Treatment ),
	NoBounds( 1 ),
	Personality( "Mixed Model" ),
	Subject( :Patient ),
	Repeated Effects( :Time ),
	Repeated Structure( "Unstructured" ),
	Run
);
Wait( 1 );
obj << "Between-Within Degrees of Freedom"n( 1 );

```

#### Compare Slopes

**Syntax:** obj &lt;&lt; Compare Slopes( Effect( effect ), &lt;options&gt; )

**Description:** Shows or hides a report that enables you to compare the slopes of each level of the interaction effect in an analysis of covariance (ANCOVA) model. This option is available only when there is one nominal term, one continuous term, and their interaction effect for the fixed effects.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cereal.jmp" );
obj = dt << Fit Model(
	Y( :Calories ),
	Effects( :Sugars, :Fiber Gr, :Sugars * :Fiber Gr ),
	Random Effects( :Manufacturer ),
	NoBounds( 1 ),
	Personality( "Mixed Model" ),
	Run
);
Wait( 1 );
obj << Compare Slopes(
	Effect( :Sugars * :Fiber Gr ),
	Student's t( 1, All Pairwise Comparisons Scatterplot( 0 ) )
);

```

#### Conditional Contour Profiler

**Syntax:** obj &lt;&lt; Conditional Contour Profiler( state=0|1 )

**Description:** Shows or hides a contour profiler of the conditional response graphically for two factors at a time. This option is available only when the model contains at least two continuous effects and at least one random effect.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Design Experiment/Vinyl Data.jmp" );
obj = dt << Fit Model(
	Y( :thickness ),
	Effects(
		:m1 & RS & Mixture, :m2 & RS & Mixture, :m3 & RS & Mixture, :m1 * :m2, :m1 * :m3,
		:m1 * :extrusion rate, :m1 * :temperature, :m2 * :m3, :m2 * :extrusion rate,
		:m2 * :temperature, :m3 * :extrusion rate, :m3 * :temperature,
		:extrusion rate * :temperature
	),
	Random Effects( :Whole Plots ),
	No Intercept,
	Personality( "Mixed Model" ),
	Run
);
Wait( 1 );
obj << Conditional Contour Profiler( 1 );

```

#### Conditional Mean CI

**Syntax:** obj &lt;&lt; Conditional Mean CI

**Description:** Saves two new columns to the data table. The new columns contain the lower and upper confidence limits for the expected value of the conditional prediction. The confidence intervals include random effects estimates for models that contain random effects. This option is available only when the model contains at least one random effect.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects( :Variety, :Variety * :Moisture ),
	Personality( "Mixed Model" ),
	Run
);
obj << Conditional Mean CI;

```

#### Conditional Mixture Profiler

**Syntax:** obj &lt;&lt; Conditional Mixture Profiler( state=0|1 )

**Description:** Shows or hides a mixture profiler that shows the contours of the conditional response on a ternary plot. This option is available only when the model contains at least one random effect and if the Mixture Effect attribute is applied to three or more factors in the model or the Mixture property is applied to three or more factor columns.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Design Experiment/Vinyl Data.jmp" );
obj = dt << Fit Model(
	Y( :thickness ),
	Effects(
		:m1 & RS & Mixture, :m2 & RS & Mixture, :m3 & RS & Mixture, :m1 * :m2, :m1 * :m3,
		:m1 * :extrusion rate, :m1 * :temperature, :m2 * :m3, :m2 * :extrusion rate,
		:m2 * :temperature, :m3 * :extrusion rate, :m3 * :temperature,
		:extrusion rate * :temperature
	),
	Random Effects( :Whole Plots ),
	No Intercept,
	Personality( "Mixed Model" ),
	Run
);
Wait( 1 );
obj << Conditional Mixture Profiler( 1 );

```

#### Conditional Prediction Formula

**Syntax:** obj &lt;&lt; Conditional Prediction Formula

**Description:** Saves a new formula column to the data table. The new column contains the prediction formula for the conditional mean. This option is available only when the model contains at least one random effect.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run
);
obj << Conditional Prediction Formula;

```

#### Conditional Predictions

**Syntax:** obj &lt;&lt; Conditional Predictions

**Description:** Saves a new column to the data table. The new column contains the predicted values for the conditional mean. This option is available only when the model contains at least one random effect.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run
);
obj << Conditional Predictions;

```

#### Conditional Profiler

**Syntax:** obj &lt;&lt; Conditional Profiler( state=0|1 )

**Description:** Shows or hides the prediction profiler, which is used to graphically explore the conditional prediction equation by slicing it one factor at a time. The prediction profiler contains features for optimization. This option is available only when the model contains at least one random effect.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Split Plot.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Tenderizer, :Roasting Time, :Tenderizer * :Roasting Time ),
	Random Effects( :Carcass, :Carcass * :Tenderizer ),
	Personality( "Mixed Model" ),
	Run
);
Wait( 1 );
obj << Conditional Profiler( 1 );

```

#### Conditional Residual Plots

**Syntax:** obj &lt;&lt; Conditional Residual Plots( state=0|1 )

**Description:** Shows or hides residual plots that assess model fit, while accounting for the random effects. This option is available only when the model contains at least one random effect.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run
);
Wait( 1 );
obj << Conditional Residual Plots( 1 );

```

#### Conditional Residuals

**Syntax:** obj &lt;&lt; Conditional Residuals

**Description:** Saves a new formula column to the data table.The new column contains a formula for the conditional residuals, given in the form of the observed response values minus the prediction formula.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run
);
obj << Conditional Residuals;

```

#### Conditional Surface Profiler

**Syntax:** obj &lt;&lt; Conditional Surface Profiler( state=0|1 )

**Description:** Shows or hides a three-dimensional surface plot of the conditional response. This option is available only when the model contains at least two effects and at least one random effect.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Split Plot.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Tenderizer, :Roasting Time, :Tenderizer * :Roasting Time ),
	Random Effects( :Carcass, :Carcass * :Tenderizer ),
	Personality( "Mixed Model" ),
	Run
);
Wait( 1 );
obj << Conditional Surface Profiler( 1 );

```

#### Containment Degrees of Freedom

**Syntax:** obj &lt;&lt; Containment Degrees of Freedom( state=0|1 )

**Description:** Replaces the standard errors with unadjusted estimates and degrees of freedom to containment-based throughout the report. To use containment degrees of freedom in a multiple comparisons report, you must select this option prior to adding a multiple comparisons report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run( Fixed Effects Tests( 0 ) )
);
Wait( 1 );
obj << Containment Degrees of Freedom( 1 );

```

#### Contour Profiler

**Syntax:** obj &lt;&lt; Contour Profiler( state=0|1 )

**Description:** Shows or hides a contour profiler of the marginal response graphically for two factors at a time. This option is available only when the model contains at least two continuous fixed effects.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Design Experiment/Vinyl Data.jmp" );
obj = dt << Fit Model(
	Y( :thickness ),
	Effects(
		:m1 & RS & Mixture, :m2 & RS & Mixture, :m3 & RS & Mixture, :m1 * :m2, :m1 * :m3,
		:m1 * :extrusion rate, :m1 * :temperature, :m2 * :m3, :m2 * :extrusion rate,
		:m2 * :temperature, :m3 * :extrusion rate, :m3 * :temperature,
		:extrusion rate * :temperature
	),
	Random Effects( :Whole Plots ),
	No Intercept,
	Personality( "Mixed Model" ),
	Run
);
Wait( 1 );
obj << Contour Profiler( 1 );

```

#### Correlation of Fixed Effects

**Syntax:** obj &lt;&lt; Correlation of Fixed Effects( state=0|1 )

**Description:** Shows or hides the correlation matrix for the fixed effects in the model.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cholesterol Stacked.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Treatment, :Month, :Month * :Treatment ),
	Random Effects( :Patient[:Treatment] ),
	NoBounds( 1 ),
	Personality( "Mixed Model" ),
	Subject( :Patient ),
	Repeated Effects( :Days ),
	Repeated Structure( "AR(1)" ),
	Run
);
Wait( 1 );
obj << Correlation of Fixed Effects( 1 );

```

#### Covariance of All Parameters

**Syntax:** obj &lt;&lt; Covariance of All Parameters( state=0|1 )

**Description:** Shows or hides the covariance matrix for all effects in the model.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cholesterol Stacked.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Treatment, :Month, :Month * :Treatment ),
	Random Effects( :Patient[:Treatment] ),
	NoBounds( 1 ),
	Personality( "Mixed Model" ),
	Subject( :Patient ),
	Repeated Effects( :Days ),
	Repeated Structure( "AR(1)" ),
	Run
);
Wait( 1 );
obj << Covariance of All Parameters( 1 );

```

#### Covariance of Covariance Parameters

**Syntax:** obj &lt;&lt; Covariance of Covariance Parameters( state=0|1 )

**Description:** Shows or hides the covariance matrix for the random effects in the model.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cholesterol Stacked.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Treatment, :Month, :Month * :Treatment ),
	Random Effects( :Patient[:Treatment] ),
	NoBounds( 1 ),
	Personality( "Mixed Model" ),
	Subject( :Patient ),
	Repeated Effects( :Days ),
	Repeated Structure( "AR(1)" ),
	Run
);
Wait( 1 );
obj << Covariance of Covariance Parameters( 1 );

```

#### Covariance of Fixed Effects

**Syntax:** obj &lt;&lt; Covariance of Fixed Effects( state=0|1 )

**Description:** Shows or hides the covariance matrix for the fixed effects in the model.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cholesterol Stacked.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Treatment, :Month, :Month * :Treatment ),
	Random Effects( :Patient[:Treatment] ),
	NoBounds( 1 ),
	Personality( "Mixed Model" ),
	Subject( :Patient ),
	Repeated Effects( :Days ),
	Repeated Structure( "AR(1)" ),
	Run
);
Wait( 1 );
obj << Covariance of Fixed Effects( 1 );

```

#### Dispose Reports

**Syntax:** obj = Fit Model(...Dispose Reports( state=0|1 )...)

**Description:** Specifies that no individual model reports are shown and that they are removed from memory after fitting. When there are many thousands of responses, this option reduces computation time and saves memory. Use this option with the Results in Data Tables option to collect the results from the fitted models.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
obj = dt << Fit Model(
	Y( :Trait1, :Trait2, :Trait3 ),
	Effects( :Sex ),
	Random Effects( Grouped( Column Group( "Markers" ) ) ),
	Personality( "Mixed Model" ),
	Results in Data Tables( 1 ),
	Dispose Reports( 1 ),
	Run
);

```

#### Empirical Standard Errors

**Syntax:** obj &lt;&lt; Empirical Standard Errors( state=0|1 )

**Description:** Replaces the standard errors with sandwich estimates throughout the report. To use sandwich estimates in a multiple comparisons report, you must select this option prior to adding a multiple comparisons report.

**Example 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :season, :species * :season ),
	Random Effects( :subject[:species] ),
	Personality( "Mixed Model" ),
	Run
);
Wait( 1 );
obj << Empirical Standard Errors( 1 );

```

**Example 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :season, :species * :season ),
	Random Effects( :subject[:species] ),
	Personality( "Mixed Model" ),
	Run( Empirical Standard Errors( 1 ) )
);
Wait( 1 );
obj << Multiple Comparisons(
	Effect( :species ),
	Comparisons with Control( 1, Control Level( "species:COYOTE" ) )
);

```

#### Fit Statistics

**Syntax:** obj &lt;&lt; Fit Statistics( state=0|1 )

**Description:** Shows or hides a report for model fit statistics. On by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run( Fit Statistics( 0 ) )
);
Wait( 1 );
obj << Fit Statistics( 1 );

```

#### Fixed Effects Parameter Estimates

**Syntax:** obj &lt;&lt; Fixed Effects Parameter Estimates( state=0|1 )

**Description:** Shows or hides a table of fixed effects parameter estimates. On by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run( Fixed Effects Parameter Estimates( 0 ) )
);
Wait( 1 );
obj << Fixed Effects Parameter Estimates( 1 );

```

#### Fixed Effects Tests

**Syntax:** obj &lt;&lt; Fixed Effects Tests( state=0|1 )

**Description:** Shows or hides the tests of fixed effects. This option is available only when the model contains at least one fixed effect. On by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run( Fixed Effects Tests( 0 ) )
);
Wait( 1 );
obj << Fixed Effects Tests( 1 );

```

#### Homogeneity of Variance Test

**Syntax:** obj &lt;&lt; Homogeneity of Variance Test( state=0|1 )

**Description:** Computes a homogeneity of variance test across the specified grouping variable.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Split Plot.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Tenderizer, :Roasting Time, :Tenderizer * :Roasting Time ),
	Random Effects( :Carcass, :Carcass * :Tenderizer ),
	Personality( "Mixed Model" ),
	Repeated Effects( :Tenderizer ),
	Repeated Structure( "Unequal Variances" ),
	Run
);
Wait( 1 );
obj << Homogeneity of Variance Test( 1 );

```

#### Indiv Confidence Interval

**Syntax:** obj &lt;&lt; Indiv Confidence Interval

**Description:** Saves two new columns to the data table. The new columns contain confidence limits for individual response values.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects( :Variety, :Variety * :Moisture ),
	Personality( "Mixed Model" ),
	Run
);
obj << Indiv Confidence Interval;

```

#### Inverse Prediction

**Syntax:** obj &lt;&lt; Inverse Prediction( Response( p1, p2, ... ), Term Value( effect1( value ), effect2( value ), ... ) )

**Description:** Generates a predicted X value and confidence interval based on the specified  values of Y and all other factors.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run
);
Wait( 1 );
obj << Inverse Prediction( Response( 75 ), Term Value( Moisture( . ), Variety( All ) ) );

```

#### Linear Combination of Variance Components

**Syntax:** obj &lt;&lt; Linear Combination of Variance Components( [l1, l2, l3, ... ], &lt;Label( text )&gt; )

**Description:** Shows a report that enables you to compute confidence intervals for linear combinations of variance components. This option is available only when there are G-side effects.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/3 Factors Nested.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects,
	Random Effects( :Operator, :Instrument[:Operator], :Part[:Operator, :Instrument] ),
	NoBounds( 0 ),
	Personality( "Mixed Model" ),
	Run(
		Repeated Effects Covariance Parameter Estimates( 0 ),
		Linear Combination of Variance Components( [1 1 0 1], Label( " " ) )
	)
);

```

#### Mean Confidence Interval

**Syntax:** obj &lt;&lt; Mean Confidence Interval

**Description:** Saves two new columns to the data table. The new columns contain the lower and upper confidence limits for the mean response.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects( :Variety, :Variety * :Moisture ),
	Personality( "Mixed Model" ),
	Run
);
obj << Mean Confidence Interval;

```

#### Mixture Profiler

**Syntax:** obj &lt;&lt; Mixture Profiler( state=0|1 )

**Description:** Shows or hides a mixture profiler that shows the contours of the marginal response on a ternary plot. This option is available only if the Mixture Effect attribute is applied to three or more factors in the model or the Mixture property is applied to three or more factor columns.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Design Experiment/Vinyl Data.jmp" );
obj = dt << Fit Model(
	Y( :thickness ),
	Effects(
		:m1 & RS & Mixture, :m2 & RS & Mixture, :m3 & RS & Mixture, :m1 * :m2, :m1 * :m3,
		:m1 * :extrusion rate, :m1 * :temperature, :m2 * :m3, :m2 * :extrusion rate,
		:m2 * :temperature, :m3 * :extrusion rate, :m3 * :temperature,
		:extrusion rate * :temperature
	),
	Random Effects( :Whole Plots ),
	No Intercept,
	Personality( "Mixed Model" ),
	Run
);
Wait( 1 );
obj << Mixture Profiler( 1 );

```

#### Model Dialog

**Syntax:** obj &lt;&lt; Model Dialog

**Description:** Shows the completed Fit Model launch window for the current analysis.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :season, :species * :season ),
	Random Effects( :subject[:species] ),
	Personality( "Mixed Model" ),
	Run
);
obj << Model Dialog;

```

#### Multiple Comparisons

**Syntax:** obj &lt;&lt; Multiple Comparisons( Effect( effect ), &lt;options&gt; )

**Description:** Generates least squares means estimates or user-defined estimates. These estimates enable you to do comparisons with the overall average, comparisons with a control, or pairwise comparisons. This option is available only when the model contains at least one fixed effect.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cholesterol Stacked.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects(
		:Treatment, :Month, :Treatment * :Month, :"AM/PM"n, :Treatment * :"AM/PM"n,
		:Month * :"AM/PM"n, :Treatment * :Month * :"AM/PM"n
	),
	Random Effects( :Patient[:Treatment] ),
	Personality( "Mixed Model" ),
	Run
);
Wait( 1 );
obj << Multiple Comparisons(
	Effect( :Treatment ),
	Comparisons with Control( 1, Control Level( "Treatment:Control" ) )
);

```

#### Prediction Formula

**Syntax:** obj &lt;&lt; Prediction Formula

**Description:** Saves a new formula column to the data table. The new column contains the prediction formula for the marginal mean.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run
);
obj << Prediction Formula;

```

#### Prediction and Interval Formulas

**Syntax:** obj &lt;&lt; Prediction and Interval Formulas

**Description:** Saves new columns to the data table. The columns contain formulas for the predictions and confidence limits. The limits columns that are created by this option contain properties that are used by the Prediction Profiler.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run
);
obj << Prediction and Interval Formulas;
Wait( 1 );
Profiler( Y( :Pred Formula Yield 2 ) );

```

#### Predictions

**Syntax:** obj &lt;&lt; Predictions

**Description:** Saves a new column to the data table. The new column contains the predicted values for the marginal mean.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run
);
obj << Predictions;

```

#### Profiler

**Syntax:** obj &lt;&lt; Profiler( state=0|1 )

**Description:** Shows or hides the prediction profiler, which is used to graphically explore the marginal prediction equation by slicing it one factor at a time. The prediction profiler contains features for optimization. This option is available only when the model contains at least one fixed effect.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Split Plot.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Tenderizer, :Roasting Time, :Tenderizer * :Roasting Time ),
	Random Effects( :Carcass, :Carcass * :Tenderizer ),
	Personality( "Mixed Model" ),
	Run
);
Wait( 1 );
obj << Profiler( 1 );

```

#### Random Coefficients

**Syntax:** obj &lt;&lt; Random Coefficients( state=0|1 )

**Description:** Shows or hides a report of the estimates for the random coefficients. This option is available only when the model contains at least one random effect. On by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run( Random Coefficients( 0 ) )
);
Wait( 1 );
obj << Random Coefficients( 1 );

```

#### Random Effects Covariance Parameter Estimates

**Syntax:** obj &lt;&lt; Random Effects Covariance Parameter Estimates( state=0|1 )

**Description:** Shows or hides a table of random effects covariance parameter estimates. This option is available only when the model contains at least one random effect. On by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run( Random Effects Covariance Parameter Estimates( 0 ) )
);
Wait( 1 );
obj << Random Effects Covariance Parameter Estimates( 1 );

```

#### Random Effects Predictions

**Syntax:** obj &lt;&lt; Random Effects Predictions( state=0|1 )

**Description:** Shows or hides a table of random effect predictions. This option is available only when the model contains at least one random effect.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run
);
Wait( 1 );
obj << Random Effects Predictions( 1 );

```

#### Repeated Effects Covariance Parameter Estimates

**Syntax:** obj &lt;&lt; Repeated Effects Covariance Parameter Estimates( state=0|1 )

**Description:** Shows or hides a table of repeated effects covariance parameter estimates. This option is available only when the model contains at least one repeated effect. On by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cholesterol Stacked.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects(
		:Treatment, :Month, :Treatment * :Month, :"AM/PM"n, :Treatment * :"AM/PM"n,
		:Month * :"AM/PM"n, :Treatment * :Month * :"AM/PM"n
	),
	Subject( :Patient ),
	Repeated Effects( :Time ),
	Repeated Structure( "Unstructured" ),
	Personality( "Mixed Model" ),
	Run( Repeated Effects Covariance Parameter Estimates( 0 ) )
);
Wait( 1 );
obj << Repeated Effects Covariance Parameter Estimates( 1 );

```

#### Repeated Measures Covariance Diagnostics

**Syntax:** obj &lt;&lt; Repeated Measures Covariance Diagnostics( state=0|1 )

**Description:** Shows or hides a report that contains diagnostic tools to help determine candidate covariance structures for the repeated measures analysis. This option is available only for models that specify an unstructured repeated covariance structure.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cholesterol Stacked.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Treatment, :Month, :Month * :Treatment ),
	NoBounds( 1 ),
	Personality( "Mixed Model" ),
	Subject( :Patient ),
	Repeated Effects( :Time ),
	Repeated Structure( "Unstructured" ),
	Run
);
Wait( 1 );
obj << Repeated Measures Covariance Diagnostics( 1 );

```

#### Residual Plots

**Syntax:** obj &lt;&lt; Residual Plots( state=0|1 )

**Description:** Shows or hides residual plots that assess model fit, without accounting for the random effects. This option is available only when the model contains at least one fixed effect.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run
);
Wait( 1 );
obj << Residual Plots( 1 );

```

#### Residuals

**Syntax:** obj &lt;&lt; Residuals

**Description:** Saves a new column to the data table. The new column contains the residuals, which are the observed response values minus their marginal mean predicted values.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run
);
obj << Residuals;

```

#### Results in Data Tables

**Syntax:** obj = Fit Model(...Results in Data Tables( state=0|1 )...)

**Description:** Saves the individual model results across many responses into data tables. The contents and number of output data tables depend on the model being fit.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
obj = dt << Fit Model(
	Y( :Trait1, :Trait2, :Trait3 ),
	Effects( :Sex ),
	Random Effects( Grouped( Column Group( "Markers" ) ) ),
	Personality( "Mixed Model" ),
	Results in Data Tables( 1 ),
	Run
);

```

#### Save Simulation Formula

**Syntax:** obj &lt;&lt; Save Simulation Formula

**Description:** Saves a new formula column to the data table. The new column can be used to create random response values from the fitted model. You can use the formula column with the Simulate feature in JMP Pro. This option is not available if a By variable is used. Use subset data tables if By group simulation formulas are needed.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run
);
obj << Save Simulation Formula;

```

#### Sequential Tests

**Syntax:** obj &lt;&lt; Sequential Tests( state=0|1 )

**Description:** Shows or hides the Sequential (Type 1) Tests report that contains the sums of squares as effects are added to the model sequentially. This option is available only when the model contains at least one fixed effect.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run
);
Wait( 1 );
obj << Sequential Tests( 1 );

```

#### Show Sqrt Variance Component

**Syntax:** obj &lt;&lt; Show Sqrt Variance Component( state=0|1 )

**Description:** Shows or hides the Sqrt Variance Component column in the REML Variance Component Estimates report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :season, :species * :season ),
	Random Effects( :subject[:species] ),
	Personality( "Mixed Model" ),
	Run
);
Wait( 1 );
obj << Show Sqrt Variance Component( 1 );

```

#### Show VIF

**Syntax:** obj &lt;&lt; Show VIF( state=0|1 )

**Description:** Shows or hides the values of the variance inflation factor (VIF) in the Effect Coding tab of the Fixed Effects Parameter Estimates report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :season, :species * :season ),
	Random Effects( :subject[:species] ),
	Personality( "Mixed Model" ),
	Run
);
Wait( 1 );
obj << Show VIF( 1 );

```

#### Stability Analysis

**Syntax:** obj &lt;&lt; Stability Analysis

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Stability.jmp" );
obj = dt << Fit Model(
	Y( :"Concentration (mg/Kg)"n ),
	Effects( :Time ),
	Random Effects( :Batch Number, :Batch Number * :Time ),
	NoBounds( 0 ),
	Personality( "Mixed Model" ),
	Run( Repeated Effects Covariance Parameter Estimates( 0 ) )
);
obj << Stability Analysis( Quantile( 0.1 ), Lower Spec Limit( 99 ) );

```

#### Standard Error of Conditional Predicted

**Syntax:** obj &lt;&lt; Standard Error of Conditional Predicted

**Description:** Saves a new column to the data table. The new column contains the standard errors of the conditional mean predictions. This option is available only when the model contains at least one random effect.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run
);
obj << Standard Error of Conditional Predicted;

```

#### Standard Error of Predicted

**Syntax:** obj &lt;&lt; Standard Error of Predicted

**Description:** Saves a new column to the data table. The new column contains the standard errors of the marginal mean predictions.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run
);
obj << Standard Error of Predicted;

```

#### Suppress Reports

**Syntax:** obj = Fit Model(...Suppress Reports( state=0|1 )...)

**Description:** Specifies that the individual model reports are hidden. When there are thousands of responses, this option reduces computation time. The fitting objects and some menu items are still available. Use the Results in Data Tables option to collect the results from the model reports.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
obj = dt << Fit Model(
	Y( :Trait1, :Trait2, :Trait3 ),
	Effects( :Sex ),
	Random Effects( Grouped( Column Group( "Markers" ) ) ),
	Personality( "Mixed Model" ),
	Results in Data Tables( 1 ),
	Suppress Reports( 1 ),
	Run
);

```

#### Surface Profiler

**Syntax:** obj &lt;&lt; Surface Profiler( state=0|1 )

**Description:** Shows or hides a three-dimensional surface plot of the marginal response. This option is available only when the model contains at least two effects.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Split Plot.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Tenderizer, :Roasting Time, :Tenderizer * :Roasting Time ),
	Random Effects( :Carcass, :Carcass * :Tenderizer ),
	Personality( "Mixed Model" ),
	Run
);
Wait( 1 );
obj << Surface Profiler( 1 );

```

#### Variogram

**Syntax:** obj &lt;&lt; Variogram( &lt;X( columns )&gt;, &lt;Model 1, Model 2, ...&gt; )

**Description:** Shows or hides a variogram plot that shows the change in covariance as the distance between observations increases. When the Residual structure is selected, you can select the columns to use as temporal or spatial coordinates.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Air.jmp" );
obj = dt << Fit Model(
	Y( :Ozone Concentration ),
	Effects,
	Center Polynomials( 0 ),
	Personality( "Mixed Model" ),
	Run
);
Wait( 1 );
obj << Variogram( X( :month ), Exponential, Exponential with Nugget );

```

### Shared Item Messages

#### Action

**Syntax:** obj &lt;&lt; Action

**Description:** All-purpose trapdoor within a platform to insert expressions to evaluate. Temporarily sets the DisplayBox and DataTable contexts to the Platform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

#### Apply Preset

**Syntax:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**Description:** Apply a previously created preset to the object, updating the options and customizations to match the saved settings.

**Anonymous preset**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();
dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );
Wait( 1 );
obj2 << Apply Preset( preset );

```

**Search by name**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

**Search within folder(s)**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

#### Broadcast

**Syntax:** obj &lt;&lt; Broadcast(message)

**Description:** Broadcasts a message to a platform. If return results from individual objects are tables, they are concatenated if possible, and the final format is identical to either the result from the Save Combined Table option in a Table Box or the result from the Concatenate option using a Source column. Other than those, results are stored in a list and returned.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
objs = Control Chart Builder(
	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),
	By( :OPERATOR )
);
objs[1] << Broadcast( Save Summaries );

```

#### Column Switcher

**Syntax:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Description:** Adds a control panel for changing the platform&apos;s variables

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);

```

#### Copy ByGroup Script

**Syntax:** obj &lt;&lt; Copy ByGroup Script

**Description:** Create a JSL script to produce this analysis, and put it on the clipboard.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run(),
	By( _bycol )
);
obj[1] << Copy ByGroup Script;

```

#### Copy Script

**Syntax:** obj &lt;&lt; Copy Script

**Description:** Create a JSL script to produce this analysis, and put it on the clipboard.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run()
);
obj << Copy Script;

```

#### Data Table Window

**Syntax:** obj &lt;&lt; Data Table Window

**Description:** Move the data table window for this analysis to the front.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run()
);
obj << Data Table Window;

```

#### Get By Levels

**Syntax:** obj &lt;&lt; Get By Levels

**Description:** Returns an associative array mapping the by group columns to their values.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

#### Get ByGroup Script

**Syntax:** obj &lt;&lt; Get ByGroup Script

**Description:** Creates a script (JSL) to produce this analysis and returns it as an expression.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run(),
	By( _bycol )
);
t = obj[1] << Get ByGroup Script;
Show( t );

```

#### Get Container

**Syntax:** obj &lt;&lt; Get Container

**Description:** Returns a reference to the container box that holds the content for the object.

**General**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run()
);
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**Platform with Filter**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Show Control Panel( 0 ),
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),
	Local Data Filter(
		Add Filter(
			columns( :age, :sex, :height ),
			Where( :age == {12, 13, 14} ),
			Where( :sex == "F" ),
			Where( :height >= 55 ),
			Display( :age, N Items( 6 ) )
		)
	)
);
New Window( "platform boxes",
	H List Box(
		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),
		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )
	)
);

```

#### Get Data Table

**Syntax:** obj &lt;&lt; Get Data Table

**Description:** Returns a reference to the data table.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run()
);
t = obj << Get Datatable;
Show( N Rows( t ) );

```

#### Get Group Platform

**Syntax:** obj &lt;&lt; Get Group Platform

**Description:** Return the Group Platform object if this platform is part of a Group. Otherwise, returns Empty().

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );
group = biv[1] << Get Group Platform;
Wait( 1 );
group << Layout( "Arrange in Tabs" );

```

#### Get Script

**Syntax:** obj &lt;&lt; Get Script

**Description:** Creates a script (JSL) to produce this analysis and returns it as an expression.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run()
);
t = obj << Get Script;
Show( t );

```

#### Get Script With Data Table

**Syntax:** obj &lt;&lt; Get Script With Data Table

**Description:** Creates a script(JSL) to produce this analysis specifically referencing this data table and returns it as an expression.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run()
);
t = obj << Get Script With Data Table;
Show( t );

```

#### Get Timing

**Syntax:** obj &lt;&lt; Get Timing

**Description:** Times the platform launch.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run()
);
t = obj << Get Timing;
Show( t );

```

#### Get Web Support

**Syntax:** obj &lt;&lt; Get Web Support

**Description:** Return a number indicating the level of Interactive HTML support for the display object. 1 means some or all elements are supported. 0 means no support.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

#### Get Where Expr

**Syntax:** obj &lt;&lt; Get Where Expr

**Description:** Returns the Where expression for the data subset, if the platform was launched with By() or Where(). Otherwise, returns Empty()

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );
Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

#### Ignore Platform Preferences

**Syntax:** Ignore Platform Preferences( state=0|1 )

**Description:** Ignores the current settings of the platform&apos;s preferences. The message is ignored when sent to the platform after creation.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Ignore Platform Preferences( 1 ),
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

#### Local Data Filter

**Syntax:** obj &lt;&lt; Local Data Filter

**Description:** To filter data to specific groups or ranges, but local to this platform

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :country ) ),
	Local Data Filter(
		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),
		Mode( Show( 1 ), Include( 1 ) )
	)
);

```

#### New JSL Preset

**Syntax:** New JSL Preset( preset )

**Description:** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
preset = obj << New JSL Preset( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) );
Wait( 1 );
obj << Apply Preset( preset );

```

#### New Preset

**Syntax:** obj = New Preset()

**Description:** Create an anonymous preset representing the options and customizations applied to the object. This object can be passed to Apply Preset to copy the settings to another object of the same type.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

#### Paste Local Data Filter

**Syntax:** obj &lt;&lt; Paste Local Data Filter

**Description:** Apply the local data filter from the clipboard to the current report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
filter = dist << Local Data Filter(
	Add Filter( columns( :Region ), Where( :Region == "MW" ) )
);
filter << Copy Local Data Filter;
dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );
Wait( 1 );
dist2 << Paste Local Data Filter;

```

#### Redo Analysis

**Syntax:** obj &lt;&lt; Redo Analysis

**Description:** Rerun this same analysis in a new window. The analysis will be different if the data has changed.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run()
);
obj << Redo Analysis;

```

#### Redo ByGroup Analysis

**Syntax:** obj &lt;&lt; Redo ByGroup Analysis

**Description:** Rerun this same analysis in a new window. The analysis will be different if the data has changed.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run(),
	By( _bycol )
);
obj[1] << Redo ByGroup Analysis;

```

#### Relaunch Analysis

**Syntax:** obj &lt;&lt; Relaunch Analysis

**Description:** Opens the platform launch window and recalls the settings that were used to create the report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run()
);
obj << Relaunch Analysis;

```

#### Relaunch ByGroup

**Syntax:** obj &lt;&lt; Relaunch ByGroup

**Description:** Opens the platform launch window and recalls the settings that were used to create the report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run(),
	By( _bycol )
);
obj[1] << Relaunch ByGroup;

```

#### Remove Column Switcher

**Syntax:** obj &lt;&lt; Remove Column Switcher

**Description:** Removes the most recent Column Switcher that has been added to the platform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
Wait( 2 );
obj << Remove Column Switcher;

```

#### Remove Local Data Filter

**Syntax:** obj &lt;&lt; Remove Local Data Filter

**Description:** If a local data filter has been created, this removes it and restores the platform to use all the data in the data table directly

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dist = dt << Distribution(
	Nominal Distribution( Column( :country ) ),
	Local Data Filter(
		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),
		Mode( Show( 1 ), Include( 1 ) )
	)
);
Wait( 2 );
dist << remove local data filter;

```

#### Render Preset

**Syntax:** Render Preset( preset )

**Description:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

#### Report

**Syntax:** obj &lt;&lt; Report;Report( obj )

**Description:** Returns a reference to the report object.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run()
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Report View

**Syntax:** obj &lt;&lt; Report View( "Full"|"Summary" )

**Description:** The report view determines the level of detail visible in a platform report. Full shows all of the detail, while Summary shows only select content, dependent on the platform. For customized behavior, display boxes support a <<Set Summary Behavior message.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run()
);
obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**Syntax:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description:** Creates a JSL script to produce this analysis, and save it as a table property in the data table. You can specify a name for the script. The Append Suffix option appends a numeric suffix to the script name, which differentiates the script from an existing script with the same name. The Prompt option prompts the user to specify a script name. The Replace option replaces an existing script with the same name.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run(),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**Syntax:** obj &lt;&lt; Save ByGroup Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run(),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**Syntax:** obj &lt;&lt; Save ByGroup Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run(),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**Syntax:** obj &lt;&lt; Save Script for All Objects

**Description:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run()
);
obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**Syntax:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Description:** Saves a script for all report objects to the current data table. This option is useful when you have multiple reports in the window. The script is named after the first platform unless you specify the script name in quotes.

**Example 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run(),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table;

```

**Example 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run(),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**Syntax:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description:** Create a JSL script to produce this analysis, and save it as a table property in the data table.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run()
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**Syntax:** obj &lt;&lt; Save Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run()
);
obj << Save Script to Journal;

```

#### Save Script to Report

**Syntax:** obj &lt;&lt; Save Script to Report

**Description:** Create a JSL script to produce this analysis, and show it in the report itself. Useful to preserve a printed record of what was done.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run()
);
obj << Save Script to Report;

```

#### Save Script to Script Window

**Syntax:** obj &lt;&lt; Save Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run()
);
obj << Save Script to Script Window;

```

#### SendToByGroup

**Syntax:** SendToByGroup( {":Column == level"}, command );

**Description:** Sends platform commands or display customization commands to each level of a by-group.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	By( :Sex ),
	SendToByGroup(
		{:sex == "F"},
		Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) )
	),
	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) )
);

```

#### SendToEmbeddedScriptable

**Syntax:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Description:** SendToEmbeddedScriptable restores settings of embedded scriptable objects.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
dt << Life Distribution(
	Y( :Time ),
	Censor( :Censor ),
	Censor Code( 1 ),
	<<Fit Weibull,
	SendToEmbeddedScriptable(
		Dispatch(
			{"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},
			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}
		)
	)
);

```

#### SendToReport

**Syntax:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Description:** Send To Report is used in tandem with the Dispatch command to customize the appearance of a report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :age ) ),
	Continuous Distribution( Column( :weight ) ),
	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) )
);

```

#### Sync to Data Table Changes

**Syntax:** obj &lt;&lt; Sync to Data Table Changes

**Description:** Sync with the exclude and data changes that have been made.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
Wait( 1 );
dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );
dist << Sync To Data Table Changes;

```

#### Title

**Syntax:** obj &lt;&lt; Title( "new title" )

**Description:** Sets the title of the platform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run()
);
obj << Title( "My Platform" );

```

#### Top Report

**Syntax:** obj &lt;&lt; Top Report

**Description:** Returns a reference to the root node in the report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run()
);
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Transform Column

**Syntax:** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Description:** Create a transform column in the local context of an object, usually a platform. The transform column is active only for the lifetime of the platform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),
	Continuous Distribution( Column( :"age^2"n ) )
);

```

#### View Web XML

**Syntax:** obj &lt;&lt; View Web XML

**Description:** Returns the XML code that is used to create the interactive HTML report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

#### Window View

**Syntax:** obj = Fit Mixed(...Window View( "Visible"|"Invisible"|"Private" )...)

**Description:** Set the type of the window to be created for the report. By default a Visible report window will be created. An Invisible window will not appear on screen, but is discoverable by functions such as Window(). A Private window responds to most window messages but is not discoverable and must be addressed through the report object

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );
eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;
biv << Close Window;
New Window( "Bivariate Equation",
	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) )
);

```

## Fit Nominal Logistic

### Associated Constructors

#### Fit Nominal Logistic

**Syntax:** Fit Model( Y( columns ), Effects( columns ), Personality( "Nominal Logistic" ) )

**Description:** Fits a logistic regression model of nominal response categories for both continuous and categorical predictors.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);

```

### Item Messages

#### Confidence Intervals

**Syntax:** obj &lt;&lt; Confidence Intervals( &lt;state=0|1&gt; | &lt;fraction&gt; )

**Description:** Shows or hides profile-likelihood (1 - fraction)% confidence intervals for the model parameters. The fraction argument overrides the alpha level set in the platform launch.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Confidence Intervals( 0.01 );
Wait( 1 );
obj << Confidence Intervals( 0 );

```

#### Confusion Matrix

**Syntax:** obj &lt;&lt; Confusion Matrix( state=0|1 )

**Description:** Shows or hides a crosstabulation matrix of actual and predicted responses.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
Wait( 0 );
obj << Confusion Matrix( 1 );

```

#### Contour Profiler

**Syntax:** obj &lt;&lt; Contour Profiler( state=0|1 )

**Description:** Shows or hides the contour profiler, which shows the contours of the response graphically for two factors at a time. Available only when the model contains more than one continuous factor.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Fit Model(
	Y( :Species ),
	Effects(
		:Sepal length, :Sepal width, :Petal length, :Petal width,
		:Sepal length * :Petal width, :Petal width * :Petal width
	),
	Personality( "Nominal Logistic" ),
	Run
);
Wait( 0 );
obj << Contour Profiler( 1 );

```

#### Decision Threshold

**Syntax:** obj &lt;&lt; Decision Threshold( state = 0|1, Set Probability Threshold( number=0.5 ) )

**Description:** Shows or hides the distribution of fitted probabilities and actual versus predicted tables for each model. You can change the probability threshold to explore how different thresholds affect the classification results.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
Wait( 0 );
obj << Decision Threshold( 1, Set Probability Threshold( 0.33 ) );

```

#### Dispose Reports

**Syntax:** obj = Fit Model(...Dispose Reports( state=0|1 )...)

**Description:** Specifies that no individual model reports are shown and that they are removed from memory after fitting. When there are many thousands of responses, this option reduces computation time and saves memory. Use this option with the Results in Data Tables option to collect the results from the fitted models.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Bands Data.jmp" );
obj = dt << Fit Model(
	Y(
		:grain screened, :proof on ctd ink, :blade mfg, :paper type, :ink type, :direct steam,
		:solvent type, :type on cylinder, :press type, :unit number, :cylinder size,
		:paper mill location, :plating tank
	),
	Effects( "Banding?"n ),
	Personality( "Nominal Logistic" ),
	Results in Data Tables( 1 ),
	Dispose Reports( 1 ),
	Run
);

```

#### Effect Summary

**Syntax:** obj &lt;&lt; Effect Summary( state=0|1 )

**Description:** Shows or hides the Effect Summary report, which enables you to interactively update the effects in the model. On by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Effect Summary( 0 );
Wait( 1 );
obj << Effect Summary( 1 );
Report( obj )["Effect Summary"] << Close( 0 );

```

#### FDR

**Syntax:** obj &lt;&lt; FDR( state=0|1 )

**Description:** Specifies whether the logworth values and their corresponding p-values in the Effect Summary table are adjusted using the false discovery rate (FDR).

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << FDR( 1 );
Report( obj )["Effect Summary"] << Close( 0 );

```

#### Get Confusion Matrix Test

**Syntax:** obj &lt;&lt; Get Confusion Matrix Test

**Description:** Returns the confusion matrix for the test set.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Equity.jmp" );
obj = dt << Fit Model(
	Validation( :Validation ),
	Y( :BAD ),
	Effects(
		:LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO,
		:DEBTINC
	),
	Personality( "Nominal Logistic" ),
	Run( Confusion Matrix( 1 ) )
);
obj << Get Confusion Matrix Test;

```

#### Get Confusion Matrix Training

**Syntax:** obj &lt;&lt; Get Confusion Matrix Training

**Description:** Returns the confusion matrix for the training set.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Validation( :Validation ),
	Y( :Y Binary ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Nominal Logistic" ),
	Run( Confusion Matrix( 1 ) )
);
obj << Get Confusion Matrix Training;

```

#### Get Confusion Matrix Validation

**Syntax:** obj &lt;&lt; Get Confusion Matrix Validation

**Description:** Returns the confusion matrix for the validation set.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Validation( :Validation ),
	Y( :Y Binary ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Nominal Logistic" ),
	Run( Confusion Matrix( 1 ) )
);
obj << Get Confusion Matrix Validation;

```

#### Get Confusion Rates Test

**Syntax:** obj &lt;&lt; Get Confusion Rates Test

**Description:** Returns the confusion rates for the test set.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Equity.jmp" );
obj = dt << Fit Model(
	Validation( :Validation ),
	Y( :BAD ),
	Effects(
		:LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO,
		:DEBTINC
	),
	Personality( "Nominal Logistic" ),
	Run( Confusion Matrix( 1 ) )
);
obj << Get Confusion Rates Test;

```

#### Get Confusion Rates Training

**Syntax:** obj &lt;&lt; Get Confusion Rates Training

**Description:** Returns the confusion rates for the training set.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Validation( :Validation ),
	Y( :Y Binary ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Nominal Logistic" ),
	Run( Confusion Matrix( 1 ) )
);
obj << Get Confusion Rates Training;

```

#### Get Confusion Rates Validation

**Syntax:** obj &lt;&lt; Get Confusion Rates Validation

**Description:** Returns the confusion rates for the validation set.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Validation( :Validation ),
	Y( :Y Binary ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Nominal Logistic" ),
	Run( Confusion Matrix( 1 ) )
);
obj << Get Confusion Rates Validation;

```

#### Get MM SAS DATA Step

**Syntax:** obj &lt;&lt; Get MM SAS DATA Step

**Description:** Creates SAS code that you can register in the SAS Model Manager.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
code = obj << Get MM SAS Data Step;

```

#### Get Measures

**Syntax:** obj &lt;&lt; Get Measures

**Description:** Returns summary measures of fit from the model.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Get Measures;

```

#### Get Probability Formulas

**Syntax:** obj &lt;&lt; Get Probability Formulas

**Description:** Returns a script to create probability formulas.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Get Probability Formulas;

```

#### Get SAS DATA Step

**Syntax:** obj &lt;&lt; Get SAS DATA Step

**Description:** Creates SAS code that you can use to score a new data set.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
code = obj << Get SAS Data Step;

```

#### Indicator Parameterization Estimates

**Syntax:** obj &lt;&lt; Indicator Parameterization Estimates( state=0|1 )

**Description:** Shows or hides the Indicator Function Parameterization report. This report contains parameter estimates for the model where nominal columns are coded using indicator (SAS GLM) parameterization and are treated as continuous.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Detergent.jmp" );
obj = dt << Fit Model(
	Freq( :count ),
	Y( :brand ),
	Effects( :softness, :previous use, :temperature ),
	Personality( "Nominal Logistic" ),
	Run
);
Wait( 0 );
obj << Indicator Parameterization Estimates( 1 );

```

#### Inverse Prediction

**Syntax:** obj &lt;&lt; Inverse Prediction( Response( p1, p2, ... ), Term Value( effect1( value ), effect2( value ), ... ) )

**Description:** Generates a predicted X value and confidence interval based on the specified  values of Y and all other factors.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
Wait( 0 );
obj << Inverse Prediction( Response( 0.5, 0.75, 0.9 ) );

```

#### Lift Curve

**Syntax:** obj &lt;&lt; Lift Curve( state=0|1 )

**Description:** Shows or hides the Lift Curve plot. A lift curve plots the lift versus the portion of the observations and provides another view of the predictive ability of a model. If you used validation, a plot is shown for each of the training, validation, and test sets.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Lift Curve( 1 );

```

#### Likelihood Ratio Tests

**Syntax:** obj &lt;&lt; Likelihood Ratio Tests( state=0|1 )

**Description:** Shows or hides likelihood ratio tests for each effect. Each test compares the log-likelihood for the fitted model to the log-likelihood for the model that removes an effect.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Likelihood Ratio Test( 1 );

```

#### Line Color

**Syntax:** obj &lt;&lt; Line Color( color )

**Description:** Enables you to select the color of the plot curves.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
Wait( 1 );
obj << Line Color( "Magenta" );

```

#### Logistic Plot

**Syntax:** obj &lt;&lt; Logistic Plot( state=0|1 )

**Description:** Shows or hides the Logistic Plot report. Available only if the model consists of a single continuous effect. On by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Logistic Plot( 0 );
Wait( 1 );
obj << Logistic Plot( 1 );

```

#### Model Dialog

**Syntax:** obj &lt;&lt; Model Dialog

**Description:** Shows the completed Fit Model launch window for the current analysis.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Model Dialog;

```

#### Odds Ratios

**Syntax:** obj &lt;&lt; Odds Ratios( state=0|1 )

**Description:** Shows or hides an Odds Ratios report that contains Unit Odds Ratios and Range Odds Ratios. Not available for nominal responses with more than two levels.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
Wait( 0 );
obj << Odds Ratios( 1 );

```

#### Positive Level

**Syntax:** obj &lt;&lt; Positive Level

**Description:** Sets the level identified as positive for use in the ROC curves.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Positive Level( "Cured" );
obj << ROC Curve( 1 );

```

#### Precision Recall Curve

**Syntax:** obj &lt;&lt; Precision Recall Curve( state=0|1 )

**Description:** Shows or hides the Precision-Recall Curve plot that contains a curve for each level of the response variable. A precision-recall curve plots the precision values against the recall values at a variety of thresholds. If you used validation, a plot is shown for each of the training, validation, and test sets.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Positive Level( "Cured" );
Wait( 0 );
obj << Precision Recall Curve( 1 );

```

#### Profiler

**Syntax:** obj &lt;&lt; Profiler( state=0|1 )

**Description:** Shows or hides the Prediction Profiler, which shows the fitted values for a specified response probability as the values of the factors in the model are changed.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
Wait( 0 );
obj << Profiler( 1 );

```

#### Publish Probability Formulas

**Syntax:** obj &lt;&lt; Publish Probability Formulas

**Description:** Builds probability formulas and publishes them as a formula column script in Formula Depot.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Publish Probability Formulas;

```

#### ROC Curve

**Syntax:** obj &lt;&lt; ROC Curve( state=0|1 )

**Description:** Shows or hides the Receiver Operating Characteristic (ROC) curve for each level of the response variable. The ROC curve is a plot of sensitivity versus (1 - specificity). If you used validation, a plot is shown for each of the training, validation, and test sets.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Positive Level( "Cured" );
Wait( 0 );
obj << ROC Curve( 1 );

```

#### Results in Data Tables

**Syntax:** obj = Fit Model(...Results in Data Tables( state=0|1 )...)

**Description:** Saves the individual model results across many responses into data tables. The contents and number of output data tables depend on the model being fit.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Bands Data.jmp" );
obj = dt << Fit Model(
	Y(
		:grain screened, :proof on ctd ink, :blade mfg, :paper type, :ink type, :direct steam,
		:solvent type, :type on cylinder, :press type, :unit number, :cylinder size,
		:paper mill location, :plating tank
	),
	Effects( "Banding?"n ),
	Personality( "Nominal Logistic" ),
	Results in Data Tables( 1 ),
	Run
);

```

#### Save Probability Formula

**Syntax:** obj &lt;&lt; Save Probability Formula

**Description:** Saves new columns to the data table. The new columns contain formulas for linear combinations of the response levels, prediction formulas for the response levels, and a prediction formula that gives the most likely response.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Save Probability Formula;

```

#### Show Points

**Syntax:** obj &lt;&lt; Show Points( state=0|1 )

**Description:** Shows or hides the points in the logistic plot. On by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
Wait( 1 );
obj << Show Points( 0 );

```

#### Show Rate Curve

**Syntax:** obj &lt;&lt; Show Rate Curve( state=0|1 )

**Description:** Shows or hides the rate curve in the logistic plot. The rate curve is useful only if you have several points for each value of the X variable.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
Wait( 1 );
obj << Show Rate Curve( 1 );

```

#### Specify Profit Matrix

**Syntax:** obj &lt;&lt; Specify Profit Matrix( matrix, level1, level2, ... )

**Description:** Enables you to specify profits or costs associated with correct or incorrect classification decisions.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y Binary ),
	Effects( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Nominal Logistic" ),
	Run
);
Wait( 0 );
obj << Specify Profit Matrix( [0 -1, -1 0, . .], "High", "Low", "Undecided" );

```

#### Suppress Reports

**Syntax:** obj = Fit Model(...Suppress Reports( state=0|1 )...)

**Description:** Specifies that the individual model reports are hidden. When there are thousands of responses, this option reduces computation time. The fitting objects and some menu items are still available. Use the Results in Data Tables option to collect the results from the model reports.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Bands Data.jmp" );
obj = dt << Fit Model(
	Y(
		:grain screened, :proof on ctd ink, :blade mfg, :paper type, :ink type, :direct steam,
		:solvent type, :type on cylinder, :press type, :unit number, :cylinder size,
		:paper mill location, :plating tank
	),
	Effects( "Banding?"n ),
	Personality( "Nominal Logistic" ),
	Results in Data Tables( 1 ),
	Suppress Reports( 1 ),
	Run
);

```

#### Wald Tests

**Syntax:** obj &lt;&lt; Wald Tests( state=0|1 )

**Description:** Shows or hides chi-square test statistics and p-values for Wald tests of whether each parameter is zero.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Wald Tests( 1 );

```

### Shared Item Messages

#### Action

**Syntax:** obj &lt;&lt; Action

**Description:** All-purpose trapdoor within a platform to insert expressions to evaluate. Temporarily sets the DisplayBox and DataTable contexts to the Platform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

#### Apply Preset

**Syntax:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**Description:** Apply a previously created preset to the object, updating the options and customizations to match the saved settings.

**Anonymous preset**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();
dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );
Wait( 1 );
obj2 << Apply Preset( preset );

```

**Search by name**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

**Search within folder(s)**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

#### Automatic Recalc

**Syntax:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**Description:** Redoes the analysis automatically for exclude and data changes. If the Automatic Recalc option is turned on, you should consider using Wait(0) commands to ensure that the exclude and data changes take effect before the recalculation.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

#### Broadcast

**Syntax:** obj &lt;&lt; Broadcast(message)

**Description:** Broadcasts a message to a platform. If return results from individual objects are tables, they are concatenated if possible, and the final format is identical to either the result from the Save Combined Table option in a Table Box or the result from the Concatenate option using a Source column. Other than those, results are stored in a list and returned.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
objs = Control Chart Builder(
	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),
	By( :OPERATOR )
);
objs[1] << Broadcast( Save Summaries );

```

#### Column Switcher

**Syntax:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Description:** Adds a control panel for changing the platform&apos;s variables

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);

```

#### Copy ByGroup Script

**Syntax:** obj &lt;&lt; Copy ByGroup Script

**Description:** Create a JSL script to produce this analysis, and put it on the clipboard.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	By( _bycol ),
	Run
);
obj[1] << Copy ByGroup Script;

```

#### Copy Script

**Syntax:** obj &lt;&lt; Copy Script

**Description:** Create a JSL script to produce this analysis, and put it on the clipboard.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Copy Script;

```

#### Data Table Window

**Syntax:** obj &lt;&lt; Data Table Window

**Description:** Move the data table window for this analysis to the front.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Data Table Window;

```

#### Get By Levels

**Syntax:** obj &lt;&lt; Get By Levels

**Description:** Returns an associative array mapping the by group columns to their values.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

#### Get ByGroup Script

**Syntax:** obj &lt;&lt; Get ByGroup Script

**Description:** Creates a script (JSL) to produce this analysis and returns it as an expression.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	By( _bycol ),
	Run
);
t = obj[1] << Get ByGroup Script;
Show( t );

```

#### Get Container

**Syntax:** obj &lt;&lt; Get Container

**Description:** Returns a reference to the container box that holds the content for the object.

**General**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**Platform with Filter**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Show Control Panel( 0 ),
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),
	Local Data Filter(
		Add Filter(
			columns( :age, :sex, :height ),
			Where( :age == {12, 13, 14} ),
			Where( :sex == "F" ),
			Where( :height >= 55 ),
			Display( :age, N Items( 6 ) )
		)
	)
);
New Window( "platform boxes",
	H List Box(
		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),
		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )
	)
);

```

#### Get Data Table

**Syntax:** obj &lt;&lt; Get Data Table

**Description:** Returns a reference to the data table.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
t = obj << Get Datatable;
Show( N Rows( t ) );

```

#### Get Group Platform

**Syntax:** obj &lt;&lt; Get Group Platform

**Description:** Return the Group Platform object if this platform is part of a Group. Otherwise, returns Empty().

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );
group = biv[1] << Get Group Platform;
Wait( 1 );
group << Layout( "Arrange in Tabs" );

```

#### Get Script

**Syntax:** obj &lt;&lt; Get Script

**Description:** Creates a script (JSL) to produce this analysis and returns it as an expression.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
t = obj << Get Script;
Show( t );

```

#### Get Script With Data Table

**Syntax:** obj &lt;&lt; Get Script With Data Table

**Description:** Creates a script(JSL) to produce this analysis specifically referencing this data table and returns it as an expression.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
t = obj << Get Script With Data Table;
Show( t );

```

#### Get Timing

**Syntax:** obj &lt;&lt; Get Timing

**Description:** Times the platform launch.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
t = obj << Get Timing;
Show( t );

```

#### Get Web Support

**Syntax:** obj &lt;&lt; Get Web Support

**Description:** Return a number indicating the level of Interactive HTML support for the display object. 1 means some or all elements are supported. 0 means no support.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

#### Get Where Expr

**Syntax:** obj &lt;&lt; Get Where Expr

**Description:** Returns the Where expression for the data subset, if the platform was launched with By() or Where(). Otherwise, returns Empty()

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );
Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

#### Ignore Platform Preferences

**Syntax:** Ignore Platform Preferences( state=0|1 )

**Description:** Ignores the current settings of the platform&apos;s preferences. The message is ignored when sent to the platform after creation.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Ignore Platform Preferences( 1 ),
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

#### Local Data Filter

**Syntax:** obj &lt;&lt; Local Data Filter

**Description:** To filter data to specific groups or ranges, but local to this platform

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :country ) ),
	Local Data Filter(
		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),
		Mode( Show( 1 ), Include( 1 ) )
	)
);

```

#### New JSL Preset

**Syntax:** New JSL Preset( preset )

**Description:** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
preset = obj << New JSL Preset( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) );
Wait( 1 );
obj << Apply Preset( preset );

```

#### New Preset

**Syntax:** obj = New Preset()

**Description:** Create an anonymous preset representing the options and customizations applied to the object. This object can be passed to Apply Preset to copy the settings to another object of the same type.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

#### Paste Local Data Filter

**Syntax:** obj &lt;&lt; Paste Local Data Filter

**Description:** Apply the local data filter from the clipboard to the current report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
filter = dist << Local Data Filter(
	Add Filter( columns( :Region ), Where( :Region == "MW" ) )
);
filter << Copy Local Data Filter;
dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );
Wait( 1 );
dist2 << Paste Local Data Filter;

```

#### Redo Analysis

**Syntax:** obj &lt;&lt; Redo Analysis

**Description:** Rerun this same analysis in a new window. The analysis will be different if the data has changed.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Redo Analysis;

```

#### Redo ByGroup Analysis

**Syntax:** obj &lt;&lt; Redo ByGroup Analysis

**Description:** Rerun this same analysis in a new window. The analysis will be different if the data has changed.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	By( _bycol ),
	Run
);
obj[1] << Redo ByGroup Analysis;

```

#### Relaunch Analysis

**Syntax:** obj &lt;&lt; Relaunch Analysis

**Description:** Opens the platform launch window and recalls the settings that were used to create the report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Relaunch Analysis;

```

#### Relaunch ByGroup

**Syntax:** obj &lt;&lt; Relaunch ByGroup

**Description:** Opens the platform launch window and recalls the settings that were used to create the report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	By( _bycol ),
	Run
);
obj[1] << Relaunch ByGroup;

```

#### Remove Column Switcher

**Syntax:** obj &lt;&lt; Remove Column Switcher

**Description:** Removes the most recent Column Switcher that has been added to the platform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
Wait( 2 );
obj << Remove Column Switcher;

```

#### Remove Local Data Filter

**Syntax:** obj &lt;&lt; Remove Local Data Filter

**Description:** If a local data filter has been created, this removes it and restores the platform to use all the data in the data table directly

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dist = dt << Distribution(
	Nominal Distribution( Column( :country ) ),
	Local Data Filter(
		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),
		Mode( Show( 1 ), Include( 1 ) )
	)
);
Wait( 2 );
dist << remove local data filter;

```

#### Render Preset

**Syntax:** Render Preset( preset )

**Description:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

#### Report

**Syntax:** obj &lt;&lt; Report;Report( obj )

**Description:** Returns a reference to the report object.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Report View

**Syntax:** obj &lt;&lt; Report View( "Full"|"Summary" )

**Description:** The report view determines the level of detail visible in a platform report. Full shows all of the detail, while Summary shows only select content, dependent on the platform. For customized behavior, display boxes support a <<Set Summary Behavior message.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**Syntax:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description:** Creates a JSL script to produce this analysis, and save it as a table property in the data table. You can specify a name for the script. The Append Suffix option appends a numeric suffix to the script name, which differentiates the script from an existing script with the same name. The Prompt option prompts the user to specify a script name. The Replace option replaces an existing script with the same name.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**Syntax:** obj &lt;&lt; Save ByGroup Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**Syntax:** obj &lt;&lt; Save ByGroup Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**Syntax:** obj &lt;&lt; Save Script for All Objects

**Description:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**Syntax:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Description:** Saves a script for all report objects to the current data table. This option is useful when you have multiple reports in the window. The script is named after the first platform unless you specify the script name in quotes.

**Example 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	By( _bycol ),
	Run
);
obj[1] << Save Script for All Objects To Data Table;

```

**Example 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	By( _bycol ),
	Run
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**Syntax:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description:** Create a JSL script to produce this analysis, and save it as a table property in the data table.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**Syntax:** obj &lt;&lt; Save Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Save Script to Journal;

```

#### Save Script to Report

**Syntax:** obj &lt;&lt; Save Script to Report

**Description:** Create a JSL script to produce this analysis, and show it in the report itself. Useful to preserve a printed record of what was done.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Save Script to Report;

```

#### Save Script to Script Window

**Syntax:** obj &lt;&lt; Save Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Save Script to Script Window;

```

#### SendToByGroup

**Syntax:** SendToByGroup( {":Column == level"}, command );

**Description:** Sends platform commands or display customization commands to each level of a by-group.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	By( :Sex ),
	SendToByGroup(
		{:sex == "F"},
		Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) )
	),
	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) )
);

```

#### SendToEmbeddedScriptable

**Syntax:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Description:** SendToEmbeddedScriptable restores settings of embedded scriptable objects.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
dt << Life Distribution(
	Y( :Time ),
	Censor( :Censor ),
	Censor Code( 1 ),
	<<Fit Weibull,
	SendToEmbeddedScriptable(
		Dispatch(
			{"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},
			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}
		)
	)
);

```

#### SendToReport

**Syntax:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Description:** Send To Report is used in tandem with the Dispatch command to customize the appearance of a report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :age ) ),
	Continuous Distribution( Column( :weight ) ),
	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) )
);

```

#### Sync to Data Table Changes

**Syntax:** obj &lt;&lt; Sync to Data Table Changes

**Description:** Sync with the exclude and data changes that have been made.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
Wait( 1 );
dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );
dist << Sync To Data Table Changes;

```

#### Title

**Syntax:** obj &lt;&lt; Title( "new title" )

**Description:** Sets the title of the platform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Title( "My Platform" );

```

#### Top Report

**Syntax:** obj &lt;&lt; Top Report

**Description:** Returns a reference to the root node in the report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Transform Column

**Syntax:** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Description:** Create a transform column in the local context of an object, usually a platform. The transform column is active only for the lifetime of the platform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),
	Continuous Distribution( Column( :"age^2"n ) )
);

```

#### View Web XML

**Syntax:** obj &lt;&lt; View Web XML

**Description:** Returns the XML code that is used to create the interactive HTML report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

#### Window View

**Syntax:** obj = Fit Nominal Logistic(...Window View( "Visible"|"Invisible"|"Private" )...)

**Description:** Set the type of the window to be created for the report. By default a Visible report window will be created. An Invisible window will not appear on screen, but is discoverable by functions such as Window(). A Private window responds to most window messages but is not discoverable and must be addressed through the report object

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );
eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;
biv << Close Window;
New Window( "Bivariate Equation",
	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) )
);

```

## Fit Ordinal Logistic

### Associated Constructors

#### Fit Ordinal Logistic

**Syntax:** Fit Model( Y( columns ), Effects( columns ), Personality( "Ordinal Logistic" ) )

**Description:** Fits a logistic regression model of ordinal response categories for both continuous and categorical predictors.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);

```

### Columns

#### By

**Syntax:** obj &lt;&lt; By( column(s) )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	By( _bycol ),
	Run
);

```

### Item Messages

#### Confidence Intervals

**Syntax:** obj &lt;&lt; Confidence Intervals( &lt;state=0|1&gt; | &lt;fraction&gt; )

**Description:** Shows or hides profile-likelihood (1 - fraction)% confidence intervals for the model parameters. The fraction argument overrides the alpha level set in the platform launch.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Confidence Intervals( 0.01 );
Wait( 1 );
obj << Confidence Intervals( 0 );

```

#### Confusion Matrix

**Syntax:** obj &lt;&lt; Confusion Matrix( state=0|1 )

**Description:** Shows or hides a crosstabulation matrix of actual and predicted responses.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
Wait( 0 );
obj << Confusion Matrix( 1 );

```

#### Contour Profiler

**Syntax:** obj &lt;&lt; Contour Profiler( state=0|1 )

**Description:** Shows or hides the contour profiler, which shows the contours of the response graphically for two factors at a time. Available only when the model contains more than one continuous factor.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Fit Model(
	Y( :Job Satisfaction ),
	Effects(
		:Years at Current Employer, :Salary, :Single Status, :Age in Years,
		:Age in Years * :Years at Current Employer
	),
	Personality( "Ordinal Logistic" ),
	Run
);
Wait( 0 );
obj << Contour Profiler( 1 );

```

#### Dispose Reports

**Syntax:** obj = Fit Model(...Dispose Reports( state=0|1 )...)

**Description:** Specifies that no individual model reports are shown and that they are removed from memory after fitting. When there are many thousands of responses, this option reduces computation time and saves memory. Use this option with the Results in Data Tables option to collect the results from the fitted models.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Fit Model(
	Y( :Employee Tenure, :Position Tenure, :Job Satisfaction ),
	Effects( :Gender, :Birth Year, :Single Status, :School Age Children ),
	Personality( "Ordinal Logistic" ),
	Results in Data Tables( 1 ),
	Dispose Reports( 1 ),
	Run
);

```

#### Effect Summary

**Syntax:** obj &lt;&lt; Effect Summary( state=0|1 )

**Description:** Shows or hides the Effect Summary report, which enables you to interactively update the effects in the model. On by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Effect Summary( 0 );
Wait( 1 );
obj << Effect Summary( 1 );
Report( obj )["Effect Summary"] << Close( 0 );

```

#### FDR

**Syntax:** obj &lt;&lt; FDR( state=0|1 )

**Description:** Specifies whether the logworth values and their corresponding p-values in the Effect Summary table are adjusted using the false discovery rate (FDR).

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << FDR( 1 );
Report( obj )["Effect Summary"] << Close( 0 );

```

#### Get Confusion Matrix Test

**Syntax:** obj &lt;&lt; Get Confusion Matrix Test

**Description:** Returns the confusion matrix for the test set.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );
obj = dt << Fit Model(
	Validation( :Validation 2 ),
	Y( :Y Ordinal ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Ordinal Logistic" ),
	Run( Confusion Matrix( 1 ) )
);
obj << Get Confusion Matrix Test;

```

#### Get Confusion Matrix Training

**Syntax:** obj &lt;&lt; Get Confusion Matrix Training

**Description:** Returns the confusion matrix for the training set.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Validation( :Validation ),
	Y( :Y Ordinal ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Ordinal Logistic" ),
	Run( Confusion Matrix( 1 ) )
);
obj << Get Confusion Matrix Training;

```

#### Get Confusion Matrix Validation

**Syntax:** obj &lt;&lt; Get Confusion Matrix Validation

**Description:** Returns the confusion matrix for the validation set.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Validation( :Validation ),
	Y( :Y Ordinal ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Ordinal Logistic" ),
	Run( Confusion Matrix( 1 ) )
);
obj << Get Confusion Matrix Validation;

```

#### Get Confusion Rates Test

**Syntax:** obj &lt;&lt; Get Confusion Rates Test

**Description:** Returns the confusion rates for the test set.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );
obj = dt << Fit Model(
	Validation( :Validation 2 ),
	Y( :Y Ordinal ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Ordinal Logistic" ),
	Run( Confusion Matrix( 1 ) )
);
obj << Get Confusion Rates Test;

```

#### Get Confusion Rates Training

**Syntax:** obj &lt;&lt; Get Confusion Rates Training

**Description:** Returns the confusion rates for the training set.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Validation( :Validation ),
	Y( :Y Ordinal ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Ordinal Logistic" ),
	Run( Confusion Matrix( 1 ) )
);
obj << Get Confusion Rates Training;

```

#### Get Confusion Rates Validation

**Syntax:** obj &lt;&lt; Get Confusion Rates Validation

**Description:** Returns the confusion rates for the validation set.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Validation( :Validation ),
	Y( :Y Ordinal ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Ordinal Logistic" ),
	Run( Confusion Matrix( 1 ) )
);
obj << Get Confusion Rates Validation;

```

#### Get MM SAS DATA Step

**Syntax:** obj &lt;&lt; Get MM SAS DATA Step

**Description:** Creates SAS code that you can register in the SAS Model Manager.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
code = obj << Get MM SAS Data Step;

```

#### Get Measures

**Syntax:** obj &lt;&lt; Get Measures

**Description:** Returns summary measures of fit from the model.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Get Measures;

```

#### Get Probability Formulas

**Syntax:** obj &lt;&lt; Get Probability Formulas

**Description:** Returns a script to create probability formulas.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Get Probability Formulas;

```

#### Get SAS DATA Step

**Syntax:** obj &lt;&lt; Get SAS DATA Step

**Description:** Creates SAS code that you can use to score a new data set.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
code = obj << Get SAS Data Step;

```

#### Lift Curve

**Syntax:** obj &lt;&lt; Lift Curve( state=0|1 )

**Description:** Shows or hides the Lift Curve plot. A lift curve plots the lift versus the portion of the observations and provides another view of the predictive ability of a model. If you used validation, a plot is shown for each of the training, validation, and test sets.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cheese.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :Cheese ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Lift Curve( 1 );

```

#### Likelihood Ratio Tests

**Syntax:** obj &lt;&lt; Likelihood Ratio Tests( state=0|1 )

**Description:** Shows or hides likelihood ratio tests for each effect. Each test compares the log-likelihood for the fitted model to the log-likelihood for the model that removes an effect.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Likelihood Ratio Tests( 1 );

```

#### Logistic Plot

**Syntax:** obj &lt;&lt; Logistic Plot( state=0|1 )

**Description:** Shows or hides the Logistic Plot report. Available only if the model consists of a single continuous effect. On by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Logistic Plot( 0 );
Wait( 1 );
obj << Logistic Plot( 1 );

```

#### Model Dialog

**Syntax:** obj &lt;&lt; Model Dialog

**Description:** Shows the completed Fit Model launch window for the current analysis.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Model Dialog;

```

#### Odds Ratios

**Syntax:** obj &lt;&lt; Odds Ratios( state=0|1 )

**Description:** Shows or hides an Odds Ratios report that contains Unit Odds Ratios and Range Odds Ratios.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y Ordinal ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Ordinal Logistic" ),
	Run
);
Wait( 0 );
obj << Odds Ratios( 1 );

```

#### Precision Recall Curve

**Syntax:** obj &lt;&lt; Precision Recall Curve( state=0|1 )

**Description:** Shows or hides the Precision-Recall Curve plot that contains a curve for each level of the response variable. A precision-recall curve plots the precision values against the recall values at a variety of thresholds. If you used validation, a plot is shown for each of the training, validation, and test sets.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Precision Recall Curve( 1 );

```

#### Profiler

**Syntax:** obj &lt;&lt; Profiler( state=0|1 )

**Description:** Shows or hides the Prediction Profiler, which shows the fitted values for a specified response probability as the values of the factors in the model are changed.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
Wait( 0 );
obj << Profiler( 1 );

```

#### Publish Probability Formulas

**Syntax:** obj &lt;&lt; Publish Probability Formulas

**Description:** Builds probability formulas and publishes them as a formula column script in Formula Depot.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Publish Probability Formulas;

```

#### ROC Curve

**Syntax:** obj &lt;&lt; ROC Curve( state=0|1 )

**Description:** Shows or hides the Receiver Operating Characteristic (ROC) curve for each level of the response variable. The ROC curve is a plot of sensitivity versus (1 - specificity). If you used validation, a plot is shown for each of the training, validation, and test sets.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << ROC Curve( 1 );

```

#### Results in Data Tables

**Syntax:** obj = Fit Model(...Results in Data Tables( state=0|1 )...)

**Description:** Saves the individual model results across many responses into data tables. The contents and number of output data tables depend on the model being fit.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Fit Model(
	Y( :Employee Tenure, :Position Tenure, :Job Satisfaction ),
	Effects( :Gender, :Birth Year, :Single Status, :School Age Children ),
	Personality( "Ordinal Logistic" ),
	Results in Data Tables( 1 ),
	Run
);

```

#### Save Expected Value

**Syntax:** obj &lt;&lt; Save Expected Value

**Description:** Saves a new column to the data table. The new column contains the linear combination of the response values with the fitted response probabilities for each row and gives the expected value.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cheese.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :Cheese ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Save Expected Value;

```

#### Save Probability Formula

**Syntax:** obj &lt;&lt; Save Probability Formula

**Description:** Saves new columns to the data table. The new columns contain formulas for linear combinations of the response levels, prediction formulas for the response levels, and a prediction formula that gives the most likely response.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Save Probability Formula;

```

#### Save Quantiles

**Syntax:** obj &lt;&lt; Save Quantiles

**Description:** Saves new columns to the data table. The new columns are named OrdQ.05, OrdQ.50, and OrdQ.95, and they contain values that fit the quantiles for the corresponding probabilities.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cheese.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :Cheese ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Save Quantiles;

```

#### Suppress Reports

**Syntax:** obj = Fit Model(...Suppress Reports( state=0|1 )...)

**Description:** Specifies that the individual model reports are hidden. When there are thousands of responses, this option reduces computation time. The fitting objects and some menu items are still available. Use the Results in Data Tables option to collect the results from the model reports.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Fit Model(
	Y( :Employee Tenure, :Position Tenure, :Job Satisfaction ),
	Effects( :Gender, :Birth Year, :Single Status, :School Age Children ),
	Personality( "Ordinal Logistic" ),
	Results in Data Tables( 1 ),
	Suppress Reports( 1 ),
	Run
);

```

#### Wald Tests

**Syntax:** obj &lt;&lt; Wald Tests( state=0|1 )

**Description:** Shows or hides chi-square test statistics and p-values for Wald tests of whether each parameter is zero.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Wald Tests( 1 );

```

### Shared Item Messages

#### Action

**Syntax:** obj &lt;&lt; Action

**Description:** All-purpose trapdoor within a platform to insert expressions to evaluate. Temporarily sets the DisplayBox and DataTable contexts to the Platform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

#### Apply Preset

**Syntax:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**Description:** Apply a previously created preset to the object, updating the options and customizations to match the saved settings.

**Anonymous preset**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();
dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );
Wait( 1 );
obj2 << Apply Preset( preset );

```

**Search by name**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

**Search within folder(s)**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

#### Automatic Recalc

**Syntax:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**Description:** Redoes the analysis automatically for exclude and data changes. If the Automatic Recalc option is turned on, you should consider using Wait(0) commands to ensure that the exclude and data changes take effect before the recalculation.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

#### Broadcast

**Syntax:** obj &lt;&lt; Broadcast(message)

**Description:** Broadcasts a message to a platform. If return results from individual objects are tables, they are concatenated if possible, and the final format is identical to either the result from the Save Combined Table option in a Table Box or the result from the Concatenate option using a Source column. Other than those, results are stored in a list and returned.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
objs = Control Chart Builder(
	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),
	By( :OPERATOR )
);
objs[1] << Broadcast( Save Summaries );

```

#### Column Switcher

**Syntax:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Description:** Adds a control panel for changing the platform&apos;s variables

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);

```

#### Copy ByGroup Script

**Syntax:** obj &lt;&lt; Copy ByGroup Script

**Description:** Create a JSL script to produce this analysis, and put it on the clipboard.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	By( _bycol ),
	Run
);
obj[1] << Copy ByGroup Script;

```

#### Copy Script

**Syntax:** obj &lt;&lt; Copy Script

**Description:** Create a JSL script to produce this analysis, and put it on the clipboard.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Copy Script;

```

#### Data Table Window

**Syntax:** obj &lt;&lt; Data Table Window

**Description:** Move the data table window for this analysis to the front.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Data Table Window;

```

#### Get By Levels

**Syntax:** obj &lt;&lt; Get By Levels

**Description:** Returns an associative array mapping the by group columns to their values.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

#### Get ByGroup Script

**Syntax:** obj &lt;&lt; Get ByGroup Script

**Description:** Creates a script (JSL) to produce this analysis and returns it as an expression.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	By( _bycol ),
	Run
);
t = obj[1] << Get ByGroup Script;
Show( t );

```

#### Get Container

**Syntax:** obj &lt;&lt; Get Container

**Description:** Returns a reference to the container box that holds the content for the object.

**General**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**Platform with Filter**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Show Control Panel( 0 ),
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),
	Local Data Filter(
		Add Filter(
			columns( :age, :sex, :height ),
			Where( :age == {12, 13, 14} ),
			Where( :sex == "F" ),
			Where( :height >= 55 ),
			Display( :age, N Items( 6 ) )
		)
	)
);
New Window( "platform boxes",
	H List Box(
		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),
		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )
	)
);

```

#### Get Data Table

**Syntax:** obj &lt;&lt; Get Data Table

**Description:** Returns a reference to the data table.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
t = obj << Get Datatable;
Show( N Rows( t ) );

```

#### Get Group Platform

**Syntax:** obj &lt;&lt; Get Group Platform

**Description:** Return the Group Platform object if this platform is part of a Group. Otherwise, returns Empty().

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );
group = biv[1] << Get Group Platform;
Wait( 1 );
group << Layout( "Arrange in Tabs" );

```

#### Get Script

**Syntax:** obj &lt;&lt; Get Script

**Description:** Creates a script (JSL) to produce this analysis and returns it as an expression.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
t = obj << Get Script;
Show( t );

```

#### Get Script With Data Table

**Syntax:** obj &lt;&lt; Get Script With Data Table

**Description:** Creates a script(JSL) to produce this analysis specifically referencing this data table and returns it as an expression.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
t = obj << Get Script With Data Table;
Show( t );

```

#### Get Timing

**Syntax:** obj &lt;&lt; Get Timing

**Description:** Times the platform launch.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
t = obj << Get Timing;
Show( t );

```

#### Get Web Support

**Syntax:** obj &lt;&lt; Get Web Support

**Description:** Return a number indicating the level of Interactive HTML support for the display object. 1 means some or all elements are supported. 0 means no support.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

#### Get Where Expr

**Syntax:** obj &lt;&lt; Get Where Expr

**Description:** Returns the Where expression for the data subset, if the platform was launched with By() or Where(). Otherwise, returns Empty()

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );
Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

#### Ignore Platform Preferences

**Syntax:** Ignore Platform Preferences( state=0|1 )

**Description:** Ignores the current settings of the platform&apos;s preferences. The message is ignored when sent to the platform after creation.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Ignore Platform Preferences( 1 ),
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

#### Local Data Filter

**Syntax:** obj &lt;&lt; Local Data Filter

**Description:** To filter data to specific groups or ranges, but local to this platform

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :country ) ),
	Local Data Filter(
		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),
		Mode( Show( 1 ), Include( 1 ) )
	)
);

```

#### New JSL Preset

**Syntax:** New JSL Preset( preset )

**Description:** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
preset = obj << New JSL Preset( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) );
Wait( 1 );
obj << Apply Preset( preset );

```

#### New Preset

**Syntax:** obj = New Preset()

**Description:** Create an anonymous preset representing the options and customizations applied to the object. This object can be passed to Apply Preset to copy the settings to another object of the same type.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

#### Paste Local Data Filter

**Syntax:** obj &lt;&lt; Paste Local Data Filter

**Description:** Apply the local data filter from the clipboard to the current report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
filter = dist << Local Data Filter(
	Add Filter( columns( :Region ), Where( :Region == "MW" ) )
);
filter << Copy Local Data Filter;
dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );
Wait( 1 );
dist2 << Paste Local Data Filter;

```

#### Redo Analysis

**Syntax:** obj &lt;&lt; Redo Analysis

**Description:** Rerun this same analysis in a new window. The analysis will be different if the data has changed.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Redo Analysis;

```

#### Redo ByGroup Analysis

**Syntax:** obj &lt;&lt; Redo ByGroup Analysis

**Description:** Rerun this same analysis in a new window. The analysis will be different if the data has changed.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	By( _bycol ),
	Run
);
obj[1] << Redo ByGroup Analysis;

```

#### Relaunch Analysis

**Syntax:** obj &lt;&lt; Relaunch Analysis

**Description:** Opens the platform launch window and recalls the settings that were used to create the report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Relaunch Analysis;

```

#### Relaunch ByGroup

**Syntax:** obj &lt;&lt; Relaunch ByGroup

**Description:** Opens the platform launch window and recalls the settings that were used to create the report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	By( _bycol ),
	Run
);
obj[1] << Relaunch ByGroup;

```

#### Remove Column Switcher

**Syntax:** obj &lt;&lt; Remove Column Switcher

**Description:** Removes the most recent Column Switcher that has been added to the platform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
Wait( 2 );
obj << Remove Column Switcher;

```

#### Remove Local Data Filter

**Syntax:** obj &lt;&lt; Remove Local Data Filter

**Description:** If a local data filter has been created, this removes it and restores the platform to use all the data in the data table directly

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dist = dt << Distribution(
	Nominal Distribution( Column( :country ) ),
	Local Data Filter(
		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),
		Mode( Show( 1 ), Include( 1 ) )
	)
);
Wait( 2 );
dist << remove local data filter;

```

#### Render Preset

**Syntax:** Render Preset( preset )

**Description:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

#### Report

**Syntax:** obj &lt;&lt; Report;Report( obj )

**Description:** Returns a reference to the report object.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Report View

**Syntax:** obj &lt;&lt; Report View( "Full"|"Summary" )

**Description:** The report view determines the level of detail visible in a platform report. Full shows all of the detail, while Summary shows only select content, dependent on the platform. For customized behavior, display boxes support a <<Set Summary Behavior message.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**Syntax:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description:** Creates a JSL script to produce this analysis, and save it as a table property in the data table. You can specify a name for the script. The Append Suffix option appends a numeric suffix to the script name, which differentiates the script from an existing script with the same name. The Prompt option prompts the user to specify a script name. The Replace option replaces an existing script with the same name.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**Syntax:** obj &lt;&lt; Save ByGroup Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**Syntax:** obj &lt;&lt; Save ByGroup Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**Syntax:** obj &lt;&lt; Save Script for All Objects

**Description:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**Syntax:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Description:** Saves a script for all report objects to the current data table. This option is useful when you have multiple reports in the window. The script is named after the first platform unless you specify the script name in quotes.

**Example 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	By( _bycol ),
	Run
);
obj[1] << Save Script for All Objects To Data Table;

```

**Example 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	By( _bycol ),
	Run
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**Syntax:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description:** Create a JSL script to produce this analysis, and save it as a table property in the data table.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**Syntax:** obj &lt;&lt; Save Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Save Script to Journal;

```

#### Save Script to Report

**Syntax:** obj &lt;&lt; Save Script to Report

**Description:** Create a JSL script to produce this analysis, and show it in the report itself. Useful to preserve a printed record of what was done.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Save Script to Report;

```

#### Save Script to Script Window

**Syntax:** obj &lt;&lt; Save Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Save Script to Script Window;

```

#### SendToByGroup

**Syntax:** SendToByGroup( {":Column == level"}, command );

**Description:** Sends platform commands or display customization commands to each level of a by-group.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	By( :Sex ),
	SendToByGroup(
		{:sex == "F"},
		Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) )
	),
	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) )
);

```

#### SendToEmbeddedScriptable

**Syntax:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Description:** SendToEmbeddedScriptable restores settings of embedded scriptable objects.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
dt << Life Distribution(
	Y( :Time ),
	Censor( :Censor ),
	Censor Code( 1 ),
	<<Fit Weibull,
	SendToEmbeddedScriptable(
		Dispatch(
			{"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},
			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}
		)
	)
);

```

#### SendToReport

**Syntax:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Description:** Send To Report is used in tandem with the Dispatch command to customize the appearance of a report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :age ) ),
	Continuous Distribution( Column( :weight ) ),
	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) )
);

```

#### Sync to Data Table Changes

**Syntax:** obj &lt;&lt; Sync to Data Table Changes

**Description:** Sync with the exclude and data changes that have been made.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
Wait( 1 );
dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );
dist << Sync To Data Table Changes;

```

#### Title

**Syntax:** obj &lt;&lt; Title( "new title" )

**Description:** Sets the title of the platform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Title( "My Platform" );

```

#### Top Report

**Syntax:** obj &lt;&lt; Top Report

**Description:** Returns a reference to the root node in the report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Transform Column

**Syntax:** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Description:** Create a transform column in the local context of an object, usually a platform. The transform column is active only for the lifetime of the platform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),
	Continuous Distribution( Column( :"age^2"n ) )
);

```

#### View Web XML

**Syntax:** obj &lt;&lt; View Web XML

**Description:** Returns the XML code that is used to create the interactive HTML report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

#### Window View

**Syntax:** obj = Fit Ordinal Logistic(...Window View( "Visible"|"Invisible"|"Private" )...)

**Description:** Set the type of the window to be created for the report. By default a Visible report window will be created. An Invisible window will not appear on screen, but is discoverable by functions such as Window(). A Private window responds to most window messages but is not discoverable and must be addressed through the report object

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );
eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;
biv << Close Window;
New Window( "Bivariate Equation",
	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) )
);

```

## Fit Parametric Survival

### Associated Constructors

#### Fit Parametric Survival

**Syntax:** Fit Model( Y( columns ), Effects( columns ), Personality( "Parametric Survival" ), Censor( columns ) )

**Description:** Fits a general linear regression model to survival times. These models can be used for survival times that can be expressed as a function of one or more explanatory variables. Takes into account various survival distributions and censoring.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);

```

### Item Messages

#### Correlation of Estimates

**Syntax:** obj &lt;&lt; Correlation of Estimates( state=0|1 )

**Description:** Shows or hides the matrix of correlations between the parameter estimates for the specified fit.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Correlation of Estimates( 1 );

```

#### Covariance of Estimates

**Syntax:** obj &lt;&lt; Covariance of Estimates( state=0|1 )

**Description:** Shows or hides the matrix of covariances between the parameter estimates for the specified fit.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Covariance of Estimates( 1 );

```

#### Distribution

**Syntax:** obj = Fit Model(...Distribution("Weibull"|"Lognormal"|"Exponential"|"Frechet"|"Loglogistic"|"All Distributions"|"SEV"|"Normal"|"LEV"|"Logistic"...)

**Description:** Specifies the distribution to use in modeling the Time to Event response. The "All Distributions" option fits all of the available distributions.

**All Distributions**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "All Distributions" ),
	Censor( :censor ),
	Run Model
);

```

**Single Distribution**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Lognormal" ),
	Censor( :censor ),
	Run Model
);

```

#### Distribution Plot by Level Combinations

**Syntax:** obj &lt;&lt; Distribution Plot by Level Combinations( state=0|1 )

**Description:** Shows or hides a report that compares three nested models based on the levels of the X variable. This report contains three probability plots for assessing model fit. The plots show different lines for each combination of the X levels.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/reliability/Devalt.jmp" );
dt << Fit Model(
	Censor( :Censor ),
	Censor Code( "1" ),
	Freq( :Weight ),
	Y( :Hours ),
	Effects( :x ),
	Personality( "Parametric Survival" ),
	Distribution( "Lognormal" ),
	Run( Likelihood Ratio Tests( 1 ), Distribution Plot by Level Combinations( 1 ), )
);

```

#### Distribution Profiler

**Syntax:** obj &lt;&lt; Distribution Profiler( state=0|1 )

**Description:** Shows or hides a profiler of the cumulative distribution function of the predictors and the response. The response is shown in the right-most cell.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Distribution Profiler( 1 );

```

#### Effect Summary

**Syntax:** obj &lt;&lt; Effect Summary( state=0|1 )

**Description:** Shows or hides the Effect Summary report, which enables you to interactively update the effects in the model. On by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Effect Summary( 0 );
Wait( 1 );
obj << Effect Summary( 1 );
Report( obj )["Effect Summary"] << Close( 0 );

```

#### Estimate Quantile

**Syntax:** obj &lt;&lt; Estimate Quantile( x1 = [number, ...], x2 = [number, ...], [p1, p2, ...], Alpha( fraction ) )

**Description:** Estimates the quantiles for specified effect values and probabilities. Use a vector to specify more than one value for an effect or more than one probability value.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Estimate Quantile(
	:Age = [55, 60],
	:Diag Time = [8.77],
	[0.5, 0.10, 0.05],
	Alpha( 0.05 )
);

```

#### Estimate Survival Probability

**Syntax:** obj &lt;&lt; Estimate Survival Probability( x1 = [number, ...], x2 = [number, ...], [time1, time2, ...], Alpha( fraction ) )

**Description:** Estimates the failure and survival probabilities for specified effect values and time values. Use a vector to specify more than one value for an effect or more than one time value.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Estimate Survival Probability(
	:Age = [55, 60],
	:Diag Time = [8.77],
	[50, 100, 150],
	Alpha( 0.05 )
);

```

#### FDR

**Syntax:** obj &lt;&lt; FDR( state=0|1 )

**Description:** Specifies whether the logworth values and their corresponding p-values in the Effect Summary table are adjusted using the false discovery rate (FDR).

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << FDR( 1 );
Report( obj )["Effect Summary"] << Close( 0 );

```

#### Get Effect Names

**Syntax:** obj &lt;&lt; Get Effect Names

**Description:** Returns the effect names used in the model.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
n = obj << Get Effect Names;
Show( n );

```

#### Get Effect PValues

**Syntax:** obj &lt;&lt; Get Effect PValues

**Description:** Returns the p-values for each effect in the model.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
p = obj << Get Effect PValues;
Show( p );

```

#### Get Estimates

**Syntax:** obj &lt;&lt; Get Estimates

**Description:** Returns the parameter estimates in the model.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
e = obj << Get Estimates;
Show( e );

```

#### Get Parameter Names

**Syntax:** obj &lt;&lt; Get Parameter Names

**Description:** Returns the parameter names used in the model.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
n = obj << Get Parameter Names;
Show( n );

```

#### Get Std Errors

**Syntax:** obj &lt;&lt; Get Std Errors

**Description:** Returns the standard errors for the parameter estimates in the model.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
std = obj << Get Std Errors;
Show( std );

```

#### Hazard Profiler

**Syntax:** obj &lt;&lt; Hazard Profiler( state=0|1 )

**Description:** Shows or hides a profiler that shows the hazard rate as a function of the predictors and the response. The response is shown in the right-most cell.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Hazard Profiler( 1 );

```

#### Likelihood Confidence Intervals

**Syntax:** obj &lt;&lt; Likelihood Confidence Intervals( state=0|1 )

**Description:** Specifies the type of confidence intervals that are shown in the Parameter Estimates table. When this option is selected, a profile likelihood confidence interval appears. Otherwise, a Wald interval appears. This option is on by default when the computational time for the profile likelihood confidence intervals is not large.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Likelihood Confidence Intervals( 1 );

```

#### Likelihood Ratio Tests

**Syntax:** obj &lt;&lt; Likelihood Ratio Tests( state=0|1 )

**Description:** Shows or hides likelihood ratio tests for each effect. Each test compares the log-likelihood for the fitted model to the log-likelihood for the model that removes an effect. On by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Likelihood Ratio Tests( 1 );

```

#### Model Dialog

**Syntax:** obj &lt;&lt; Model Dialog

**Description:** Shows the completed Fit Model launch window for the current analysis.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Model Dialog;

```

#### Publish Probability Formula

**Syntax:** obj &lt;&lt; Publish Probability Formula

**Description:** Creates a probability formula and publishes it as a formula column script in the Formula Depot platform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Publish Probability Formula;

```

#### Publish Quantile Formula

**Syntax:** obj &lt;&lt; Publish Quantile Formula( probability )

**Description:** Creates a quantile formula and publishes it as a formula column script in the Formula Depot platform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Publish Quantile Formula( 0.1 );

```

#### Quantile Profiler

**Syntax:** obj &lt;&lt; Quantile Profiler( state=0|1 )

**Description:** Shows or hides a profiler that shows the predicted response as a function of the predictors and the quantile of the cumulative distribution function. The quantile is called Failure Probability and is shown in the right-most cell.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Quantile Profiler( 1 );

```

#### Residual Probability Plot

**Syntax:** obj &lt;&lt; Residual Probability Plot( state=0|1 )

**Description:** Shows or hides a probability plot of the standardized residuals with confidence intervals.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Residual Probability Plot( 1 );

```

#### Response versus Fitted Median

**Syntax:** obj &lt;&lt; Response versus Fitted Median( state=0|1 )

**Description:** Shows or hides a plot of the responses on the vertical axis and the fitted median on the horizontal axis.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Response versus Fitted Median( 1 );

```

#### Save Probability Formula

**Syntax:** obj &lt;&lt; Save Probability Formula

**Description:** Saves a new formula column to the data table. The new column contains a formula for the estimated probability of failure.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Save Probability Formula;

```

#### Save Quantile Formula

**Syntax:** obj &lt;&lt; Save Quantile Formula( probability )

**Description:** Saves a new formula column to the data table. The new column contains a formula for the estimated quantile for the specified probability value.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Save Quantile Formula( 0.8 );

```

#### Save Residuals

**Syntax:** obj &lt;&lt; Save Residuals

**Description:** Saves one or two new columns to the data table. The number of residual columns matches the number of Time to Event columns in the model.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Save Residuals;

```

#### Standardized Residuals versus Fitted Median

**Syntax:** obj &lt;&lt; Standardized Residuals versus Fitted Median( state=0|1 )

**Description:** Shows or hides a plot of the standardized residuals on the vertical axis and the fitted median on the horizontal axis.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Standardized Residuals versus Fitted Median( 1 );

```

#### Survival Profiler

**Syntax:** obj &lt;&lt; Survival Profiler( state=0|1 )

**Description:** Shows or hides a profiler of the survival function of the predictors and the response. The response is shown in the right-most cell.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Survival Profiler( 1 );

```

#### Wald Tests

**Syntax:** obj &lt;&lt; Wald Tests( state=0|1 )

**Description:** Shows or hides chi-square test statistics and p-values for Wald tests of whether each parameter is zero.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Wald Tests( 0 );
Wait( 2 );
obj << Wald Tests( 1 );

```

### Shared Item Messages

#### Action

**Syntax:** obj &lt;&lt; Action

**Description:** All-purpose trapdoor within a platform to insert expressions to evaluate. Temporarily sets the DisplayBox and DataTable contexts to the Platform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

#### Apply Preset

**Syntax:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**Description:** Apply a previously created preset to the object, updating the options and customizations to match the saved settings.

**Anonymous preset**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();
dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );
Wait( 1 );
obj2 << Apply Preset( preset );

```

**Search by name**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

**Search within folder(s)**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

#### Automatic Recalc

**Syntax:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**Description:** Redoes the analysis automatically for exclude and data changes. If the Automatic Recalc option is turned on, you should consider using Wait(0) commands to ensure that the exclude and data changes take effect before the recalculation.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

#### Broadcast

**Syntax:** obj &lt;&lt; Broadcast(message)

**Description:** Broadcasts a message to a platform. If return results from individual objects are tables, they are concatenated if possible, and the final format is identical to either the result from the Save Combined Table option in a Table Box or the result from the Concatenate option using a Source column. Other than those, results are stored in a list and returned.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
objs = Control Chart Builder(
	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),
	By( :OPERATOR )
);
objs[1] << Broadcast( Save Summaries );

```

#### Column Switcher

**Syntax:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Description:** Adds a control panel for changing the platform&apos;s variables

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);

```

#### Copy ByGroup Script

**Syntax:** obj &lt;&lt; Copy ByGroup Script

**Description:** Create a JSL script to produce this analysis, and put it on the clipboard.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	By( _bycol ),
	Run Model
);
obj[1] << Copy ByGroup Script;

```

#### Copy Script

**Syntax:** obj &lt;&lt; Copy Script

**Description:** Create a JSL script to produce this analysis, and put it on the clipboard.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Copy Script;

```

#### Data Table Window

**Syntax:** obj &lt;&lt; Data Table Window

**Description:** Move the data table window for this analysis to the front.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Data Table Window;

```

#### Get By Levels

**Syntax:** obj &lt;&lt; Get By Levels

**Description:** Returns an associative array mapping the by group columns to their values.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

#### Get ByGroup Script

**Syntax:** obj &lt;&lt; Get ByGroup Script

**Description:** Creates a script (JSL) to produce this analysis and returns it as an expression.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	By( _bycol ),
	Run Model
);
t = obj[1] << Get ByGroup Script;
Show( t );

```

#### Get Container

**Syntax:** obj &lt;&lt; Get Container

**Description:** Returns a reference to the container box that holds the content for the object.

**General**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**Platform with Filter**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Show Control Panel( 0 ),
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),
	Local Data Filter(
		Add Filter(
			columns( :age, :sex, :height ),
			Where( :age == {12, 13, 14} ),
			Where( :sex == "F" ),
			Where( :height >= 55 ),
			Display( :age, N Items( 6 ) )
		)
	)
);
New Window( "platform boxes",
	H List Box(
		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),
		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )
	)
);

```

#### Get Data Table

**Syntax:** obj &lt;&lt; Get Data Table

**Description:** Returns a reference to the data table.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
t = obj << Get Datatable;
Show( N Rows( t ) );

```

#### Get Group Platform

**Syntax:** obj &lt;&lt; Get Group Platform

**Description:** Return the Group Platform object if this platform is part of a Group. Otherwise, returns Empty().

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );
group = biv[1] << Get Group Platform;
Wait( 1 );
group << Layout( "Arrange in Tabs" );

```

#### Get Script

**Syntax:** obj &lt;&lt; Get Script

**Description:** Creates a script (JSL) to produce this analysis and returns it as an expression.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
t = obj << Get Script;
Show( t );

```

#### Get Script With Data Table

**Syntax:** obj &lt;&lt; Get Script With Data Table

**Description:** Creates a script(JSL) to produce this analysis specifically referencing this data table and returns it as an expression.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
t = obj << Get Script With Data Table;
Show( t );

```

#### Get Timing

**Syntax:** obj &lt;&lt; Get Timing

**Description:** Times the platform launch.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
t = obj << Get Timing;
Show( t );

```

#### Get Web Support

**Syntax:** obj &lt;&lt; Get Web Support

**Description:** Return a number indicating the level of Interactive HTML support for the display object. 1 means some or all elements are supported. 0 means no support.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

#### Get Where Expr

**Syntax:** obj &lt;&lt; Get Where Expr

**Description:** Returns the Where expression for the data subset, if the platform was launched with By() or Where(). Otherwise, returns Empty()

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );
Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

#### Ignore Platform Preferences

**Syntax:** Ignore Platform Preferences( state=0|1 )

**Description:** Ignores the current settings of the platform&apos;s preferences. The message is ignored when sent to the platform after creation.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Ignore Platform Preferences( 1 ),
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

#### Local Data Filter

**Syntax:** obj &lt;&lt; Local Data Filter

**Description:** To filter data to specific groups or ranges, but local to this platform

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :country ) ),
	Local Data Filter(
		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),
		Mode( Show( 1 ), Include( 1 ) )
	)
);

```

#### New JSL Preset

**Syntax:** New JSL Preset( preset )

**Description:** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
preset = obj << New JSL Preset( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) );
Wait( 1 );
obj << Apply Preset( preset );

```

#### New Preset

**Syntax:** obj = New Preset()

**Description:** Create an anonymous preset representing the options and customizations applied to the object. This object can be passed to Apply Preset to copy the settings to another object of the same type.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

#### Paste Local Data Filter

**Syntax:** obj &lt;&lt; Paste Local Data Filter

**Description:** Apply the local data filter from the clipboard to the current report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
filter = dist << Local Data Filter(
	Add Filter( columns( :Region ), Where( :Region == "MW" ) )
);
filter << Copy Local Data Filter;
dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );
Wait( 1 );
dist2 << Paste Local Data Filter;

```

#### Redo Analysis

**Syntax:** obj &lt;&lt; Redo Analysis

**Description:** Rerun this same analysis in a new window. The analysis will be different if the data has changed.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Redo Analysis;

```

#### Redo ByGroup Analysis

**Syntax:** obj &lt;&lt; Redo ByGroup Analysis

**Description:** Rerun this same analysis in a new window. The analysis will be different if the data has changed.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	By( _bycol ),
	Run Model
);
obj[1] << Redo ByGroup Analysis;

```

#### Relaunch Analysis

**Syntax:** obj &lt;&lt; Relaunch Analysis

**Description:** Opens the platform launch window and recalls the settings that were used to create the report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Relaunch Analysis;

```

#### Relaunch ByGroup

**Syntax:** obj &lt;&lt; Relaunch ByGroup

**Description:** Opens the platform launch window and recalls the settings that were used to create the report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	By( _bycol ),
	Run Model
);
obj[1] << Relaunch ByGroup;

```

#### Remove Column Switcher

**Syntax:** obj &lt;&lt; Remove Column Switcher

**Description:** Removes the most recent Column Switcher that has been added to the platform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
Wait( 2 );
obj << Remove Column Switcher;

```

#### Remove Local Data Filter

**Syntax:** obj &lt;&lt; Remove Local Data Filter

**Description:** If a local data filter has been created, this removes it and restores the platform to use all the data in the data table directly

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dist = dt << Distribution(
	Nominal Distribution( Column( :country ) ),
	Local Data Filter(
		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),
		Mode( Show( 1 ), Include( 1 ) )
	)
);
Wait( 2 );
dist << remove local data filter;

```

#### Render Preset

**Syntax:** Render Preset( preset )

**Description:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

#### Report

**Syntax:** obj &lt;&lt; Report;Report( obj )

**Description:** Returns a reference to the report object.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Report View

**Syntax:** obj &lt;&lt; Report View( "Full"|"Summary" )

**Description:** The report view determines the level of detail visible in a platform report. Full shows all of the detail, while Summary shows only select content, dependent on the platform. For customized behavior, display boxes support a <<Set Summary Behavior message.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**Syntax:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description:** Creates a JSL script to produce this analysis, and save it as a table property in the data table. You can specify a name for the script. The Append Suffix option appends a numeric suffix to the script name, which differentiates the script from an existing script with the same name. The Prompt option prompts the user to specify a script name. The Replace option replaces an existing script with the same name.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	By( _bycol ),
	Run Model
);
obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**Syntax:** obj &lt;&lt; Save ByGroup Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	By( _bycol ),
	Run Model
);
obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**Syntax:** obj &lt;&lt; Save ByGroup Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	By( _bycol ),
	Run Model
);
obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**Syntax:** obj &lt;&lt; Save Script for All Objects

**Description:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**Syntax:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Description:** Saves a script for all report objects to the current data table. This option is useful when you have multiple reports in the window. The script is named after the first platform unless you specify the script name in quotes.

**Example 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	By( _bycol ),
	Run Model
);
obj[1] << Save Script for All Objects To Data Table;

```

**Example 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	By( _bycol ),
	Run Model
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**Syntax:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description:** Create a JSL script to produce this analysis, and save it as a table property in the data table.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**Syntax:** obj &lt;&lt; Save Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Save Script to Journal;

```

#### Save Script to Report

**Syntax:** obj &lt;&lt; Save Script to Report

**Description:** Create a JSL script to produce this analysis, and show it in the report itself. Useful to preserve a printed record of what was done.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Save Script to Report;

```

#### Save Script to Script Window

**Syntax:** obj &lt;&lt; Save Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Save Script to Script Window;

```

#### SendToByGroup

**Syntax:** SendToByGroup( {":Column == level"}, command );

**Description:** Sends platform commands or display customization commands to each level of a by-group.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	By( :Sex ),
	SendToByGroup(
		{:sex == "F"},
		Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) )
	),
	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) )
);

```

#### SendToEmbeddedScriptable

**Syntax:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Description:** SendToEmbeddedScriptable restores settings of embedded scriptable objects.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
dt << Life Distribution(
	Y( :Time ),
	Censor( :Censor ),
	Censor Code( 1 ),
	<<Fit Weibull,
	SendToEmbeddedScriptable(
		Dispatch(
			{"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},
			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}
		)
	)
);

```

#### SendToReport

**Syntax:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Description:** Send To Report is used in tandem with the Dispatch command to customize the appearance of a report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :age ) ),
	Continuous Distribution( Column( :weight ) ),
	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) )
);

```

#### Sync to Data Table Changes

**Syntax:** obj &lt;&lt; Sync to Data Table Changes

**Description:** Sync with the exclude and data changes that have been made.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
Wait( 1 );
dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );
dist << Sync To Data Table Changes;

```

#### Title

**Syntax:** obj &lt;&lt; Title( "new title" )

**Description:** Sets the title of the platform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Title( "My Platform" );

```

#### Top Report

**Syntax:** obj &lt;&lt; Top Report

**Description:** Returns a reference to the root node in the report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Transform Column

**Syntax:** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Description:** Create a transform column in the local context of an object, usually a platform. The transform column is active only for the lifetime of the platform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),
	Continuous Distribution( Column( :"age^2"n ) )
);

```

#### View Web XML

**Syntax:** obj &lt;&lt; View Web XML

**Description:** Returns the XML code that is used to create the interactive HTML report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

#### Window View

**Syntax:** obj = Fit Parametric Survival(...Window View( "Visible"|"Invisible"|"Private" )...)

**Description:** Set the type of the window to be created for the report. By default a Visible report window will be created. An Invisible window will not appear on screen, but is discoverable by functions such as Window(). A Private window responds to most window messages but is not discoverable and must be addressed through the report object

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );
eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;
biv << Close Window;
New Window( "Bivariate Equation",
	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) )
);

```

## Fit Proportional Hazards

### Associated Constructors

#### Fit Proportional Hazards

**Syntax:** Fit Model( Y( columns ), Effects( columns ), Personality( "Proportional Hazard" ), Censor( columns ) )

**Description:** Fits a semiparametric regression model (the Cox proportional hazards model) to assess the effect of explanatory variables on survival times while taking censoring into account.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);

```

### Columns

#### By

**Syntax:** obj &lt;&lt; By( column(s) )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	By( _bycol ),
	Run Model
);

```

### Item Messages

#### Effect Summary

**Syntax:** obj &lt;&lt; Effect Summary( state=0|1 )

**Description:** Shows or hides the Effect Summary report, which enables you to interactively update the effects in the model. On by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
obj << Effect Summary( 0 );
Wait( 1 );
obj << Effect Summary( 1 );
Report( obj )["Effect Summary"] << Close( 0 );

```

#### FDR

**Syntax:** obj &lt;&lt; FDR( state=0|1 )

**Description:** Specifies whether the logworth values and their corresponding p-values in the Effect Summary table are adjusted using the false discovery rate (FDR).

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
obj << FDR( 1 );
Report( obj )["Effect Summary"] << Close( 0 );

```

#### Hazard Ratios

**Syntax:** obj &lt;&lt; Hazard Ratios( state=0|1 )

**Description:** Shows or hides the hazard ratios for the effects.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
obj << Hazard Ratios( 1 );

```

#### Likelihood Confidence Intervals

**Syntax:** obj &lt;&lt; Likelihood Confidence Intervals( state=0|1 )

**Description:** Specifies the type of confidence intervals that are shown in the Parameter Estimates table. When this option is selected, a profile likelihood confidence interval appears. Otherwise, a Wald interval appears. This option is on by default when the computational time for the profile likelihood confidence intervals is not large.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
obj << Likelihood Confidence Intervals( 1 );

```

#### Likelihood Ratio Tests

**Syntax:** obj &lt;&lt; Likelihood Ratio Tests( state=0|1 )

**Description:** Shows or hides likelihood ratio tests for each effect. Each test compares the log-likelihood for the fitted model to the log-likelihood for the model that removes an effect.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
obj << Likelihood Ratio Tests( 1 );

```

#### Model Dialog

**Syntax:** obj &lt;&lt; Model Dialog

**Description:** Shows the completed Fit Model launch window for the current analysis.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
obj << Model Dialog;

```

#### Wald Tests

**Syntax:** obj &lt;&lt; Wald Tests( state=0|1 )

**Description:** Shows or hides chi-square test statistics and p-values for Wald tests of whether each parameter is zero. On by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
obj << Wald Tests( 0 );
Wait( 2 );
obj << Wald Tests( 1 );

```

### Shared Item Messages

#### Action

**Syntax:** obj &lt;&lt; Action

**Description:** All-purpose trapdoor within a platform to insert expressions to evaluate. Temporarily sets the DisplayBox and DataTable contexts to the Platform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

#### Apply Preset

**Syntax:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**Description:** Apply a previously created preset to the object, updating the options and customizations to match the saved settings.

**Anonymous preset**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();
dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );
Wait( 1 );
obj2 << Apply Preset( preset );

```

**Search by name**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

**Search within folder(s)**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

#### Broadcast

**Syntax:** obj &lt;&lt; Broadcast(message)

**Description:** Broadcasts a message to a platform. If return results from individual objects are tables, they are concatenated if possible, and the final format is identical to either the result from the Save Combined Table option in a Table Box or the result from the Concatenate option using a Source column. Other than those, results are stored in a list and returned.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
objs = Control Chart Builder(
	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),
	By( :OPERATOR )
);
objs[1] << Broadcast( Save Summaries );

```

#### Column Switcher

**Syntax:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Description:** Adds a control panel for changing the platform&apos;s variables

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);

```

#### Copy ByGroup Script

**Syntax:** obj &lt;&lt; Copy ByGroup Script

**Description:** Create a JSL script to produce this analysis, and put it on the clipboard.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	By( _bycol ),
	Run Model
);
obj[1] << Copy ByGroup Script;

```

#### Copy Script

**Syntax:** obj &lt;&lt; Copy Script

**Description:** Create a JSL script to produce this analysis, and put it on the clipboard.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
obj << Copy Script;

```

#### Data Table Window

**Syntax:** obj &lt;&lt; Data Table Window

**Description:** Move the data table window for this analysis to the front.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
obj << Data Table Window;

```

#### Get By Levels

**Syntax:** obj &lt;&lt; Get By Levels

**Description:** Returns an associative array mapping the by group columns to their values.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

#### Get ByGroup Script

**Syntax:** obj &lt;&lt; Get ByGroup Script

**Description:** Creates a script (JSL) to produce this analysis and returns it as an expression.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	By( _bycol ),
	Run Model
);
t = obj[1] << Get ByGroup Script;
Show( t );

```

#### Get Container

**Syntax:** obj &lt;&lt; Get Container

**Description:** Returns a reference to the container box that holds the content for the object.

**General**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**Platform with Filter**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Show Control Panel( 0 ),
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),
	Local Data Filter(
		Add Filter(
			columns( :age, :sex, :height ),
			Where( :age == {12, 13, 14} ),
			Where( :sex == "F" ),
			Where( :height >= 55 ),
			Display( :age, N Items( 6 ) )
		)
	)
);
New Window( "platform boxes",
	H List Box(
		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),
		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )
	)
);

```

#### Get Data Table

**Syntax:** obj &lt;&lt; Get Data Table

**Description:** Returns a reference to the data table.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
t = obj << Get Datatable;
Show( N Rows( t ) );

```

#### Get Group Platform

**Syntax:** obj &lt;&lt; Get Group Platform

**Description:** Return the Group Platform object if this platform is part of a Group. Otherwise, returns Empty().

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );
group = biv[1] << Get Group Platform;
Wait( 1 );
group << Layout( "Arrange in Tabs" );

```

#### Get Script

**Syntax:** obj &lt;&lt; Get Script

**Description:** Creates a script (JSL) to produce this analysis and returns it as an expression.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
t = obj << Get Script;
Show( t );

```

#### Get Script With Data Table

**Syntax:** obj &lt;&lt; Get Script With Data Table

**Description:** Creates a script(JSL) to produce this analysis specifically referencing this data table and returns it as an expression.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
t = obj << Get Script With Data Table;
Show( t );

```

#### Get Timing

**Syntax:** obj &lt;&lt; Get Timing

**Description:** Times the platform launch.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
t = obj << Get Timing;
Show( t );

```

#### Get Web Support

**Syntax:** obj &lt;&lt; Get Web Support

**Description:** Return a number indicating the level of Interactive HTML support for the display object. 1 means some or all elements are supported. 0 means no support.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

#### Get Where Expr

**Syntax:** obj &lt;&lt; Get Where Expr

**Description:** Returns the Where expression for the data subset, if the platform was launched with By() or Where(). Otherwise, returns Empty()

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );
Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

#### Ignore Platform Preferences

**Syntax:** Ignore Platform Preferences( state=0|1 )

**Description:** Ignores the current settings of the platform&apos;s preferences. The message is ignored when sent to the platform after creation.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Ignore Platform Preferences( 1 ),
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

#### Local Data Filter

**Syntax:** obj &lt;&lt; Local Data Filter

**Description:** To filter data to specific groups or ranges, but local to this platform

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :country ) ),
	Local Data Filter(
		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),
		Mode( Show( 1 ), Include( 1 ) )
	)
);

```

#### New JSL Preset

**Syntax:** New JSL Preset( preset )

**Description:** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
preset = obj << New JSL Preset( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) );
Wait( 1 );
obj << Apply Preset( preset );

```

#### New Preset

**Syntax:** obj = New Preset()

**Description:** Create an anonymous preset representing the options and customizations applied to the object. This object can be passed to Apply Preset to copy the settings to another object of the same type.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

#### Paste Local Data Filter

**Syntax:** obj &lt;&lt; Paste Local Data Filter

**Description:** Apply the local data filter from the clipboard to the current report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
filter = dist << Local Data Filter(
	Add Filter( columns( :Region ), Where( :Region == "MW" ) )
);
filter << Copy Local Data Filter;
dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );
Wait( 1 );
dist2 << Paste Local Data Filter;

```

#### Redo Analysis

**Syntax:** obj &lt;&lt; Redo Analysis

**Description:** Rerun this same analysis in a new window. The analysis will be different if the data has changed.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
obj << Redo Analysis;

```

#### Redo ByGroup Analysis

**Syntax:** obj &lt;&lt; Redo ByGroup Analysis

**Description:** Rerun this same analysis in a new window. The analysis will be different if the data has changed.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	By( _bycol ),
	Run Model
);
obj[1] << Redo ByGroup Analysis;

```

#### Relaunch Analysis

**Syntax:** obj &lt;&lt; Relaunch Analysis

**Description:** Opens the platform launch window and recalls the settings that were used to create the report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
obj << Relaunch Analysis;

```

#### Relaunch ByGroup

**Syntax:** obj &lt;&lt; Relaunch ByGroup

**Description:** Opens the platform launch window and recalls the settings that were used to create the report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	By( _bycol ),
	Run Model
);
obj[1] << Relaunch ByGroup;

```

#### Remove Column Switcher

**Syntax:** obj &lt;&lt; Remove Column Switcher

**Description:** Removes the most recent Column Switcher that has been added to the platform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
Wait( 2 );
obj << Remove Column Switcher;

```

#### Remove Local Data Filter

**Syntax:** obj &lt;&lt; Remove Local Data Filter

**Description:** If a local data filter has been created, this removes it and restores the platform to use all the data in the data table directly

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dist = dt << Distribution(
	Nominal Distribution( Column( :country ) ),
	Local Data Filter(
		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),
		Mode( Show( 1 ), Include( 1 ) )
	)
);
Wait( 2 );
dist << remove local data filter;

```

#### Render Preset

**Syntax:** Render Preset( preset )

**Description:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

#### Report

**Syntax:** obj &lt;&lt; Report;Report( obj )

**Description:** Returns a reference to the report object.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Report View

**Syntax:** obj &lt;&lt; Report View( "Full"|"Summary" )

**Description:** The report view determines the level of detail visible in a platform report. Full shows all of the detail, while Summary shows only select content, dependent on the platform. For customized behavior, display boxes support a <<Set Summary Behavior message.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**Syntax:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description:** Creates a JSL script to produce this analysis, and save it as a table property in the data table. You can specify a name for the script. The Append Suffix option appends a numeric suffix to the script name, which differentiates the script from an existing script with the same name. The Prompt option prompts the user to specify a script name. The Replace option replaces an existing script with the same name.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	By( _bycol ),
	Run Model
);
obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**Syntax:** obj &lt;&lt; Save ByGroup Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	By( _bycol ),
	Run Model
);
obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**Syntax:** obj &lt;&lt; Save ByGroup Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	By( _bycol ),
	Run Model
);
obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**Syntax:** obj &lt;&lt; Save Script for All Objects

**Description:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**Syntax:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Description:** Saves a script for all report objects to the current data table. This option is useful when you have multiple reports in the window. The script is named after the first platform unless you specify the script name in quotes.

**Example 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	By( _bycol ),
	Run Model
);
obj[1] << Save Script for All Objects To Data Table;

```

**Example 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	By( _bycol ),
	Run Model
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**Syntax:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description:** Create a JSL script to produce this analysis, and save it as a table property in the data table.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**Syntax:** obj &lt;&lt; Save Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
obj << Save Script to Journal;

```

#### Save Script to Report

**Syntax:** obj &lt;&lt; Save Script to Report

**Description:** Create a JSL script to produce this analysis, and show it in the report itself. Useful to preserve a printed record of what was done.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
obj << Save Script to Report;

```

#### Save Script to Script Window

**Syntax:** obj &lt;&lt; Save Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
obj << Save Script to Script Window;

```

#### SendToByGroup

**Syntax:** SendToByGroup( {":Column == level"}, command );

**Description:** Sends platform commands or display customization commands to each level of a by-group.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	By( :Sex ),
	SendToByGroup(
		{:sex == "F"},
		Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) )
	),
	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) )
);

```

#### SendToEmbeddedScriptable

**Syntax:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Description:** SendToEmbeddedScriptable restores settings of embedded scriptable objects.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
dt << Life Distribution(
	Y( :Time ),
	Censor( :Censor ),
	Censor Code( 1 ),
	<<Fit Weibull,
	SendToEmbeddedScriptable(
		Dispatch(
			{"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},
			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}
		)
	)
);

```

#### SendToReport

**Syntax:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Description:** Send To Report is used in tandem with the Dispatch command to customize the appearance of a report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :age ) ),
	Continuous Distribution( Column( :weight ) ),
	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) )
);

```

#### Sync to Data Table Changes

**Syntax:** obj &lt;&lt; Sync to Data Table Changes

**Description:** Sync with the exclude and data changes that have been made.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
Wait( 1 );
dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );
dist << Sync To Data Table Changes;

```

#### Title

**Syntax:** obj &lt;&lt; Title( "new title" )

**Description:** Sets the title of the platform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
obj << Title( "My Platform" );

```

#### Top Report

**Syntax:** obj &lt;&lt; Top Report

**Description:** Returns a reference to the root node in the report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Transform Column

**Syntax:** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Description:** Create a transform column in the local context of an object, usually a platform. The transform column is active only for the lifetime of the platform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),
	Continuous Distribution( Column( :"age^2"n ) )
);

```

#### View Web XML

**Syntax:** obj &lt;&lt; View Web XML

**Description:** Returns the XML code that is used to create the interactive HTML report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

#### Window View

**Syntax:** obj = Fit Proportional Hazards(...Window View( "Visible"|"Invisible"|"Private" )...)

**Description:** Set the type of the window to be created for the report. By default a Visible report window will be created. An Invisible window will not appear on screen, but is discoverable by functions such as Window(). A Private window responds to most window messages but is not discoverable and must be addressed through the report object

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );
eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;
biv << Close Window;
New Window( "Bivariate Equation",
	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) )
);

```

## Fit Response Screening

### Associated Constructors

#### Fit Response Screening

**Syntax:** Fit Model( Y( columns ), Effects( columns ), Personality( "Response Screening" ) )

**Description:** Automates the process of conducting tests for linear model effects across a large number of responses. Test results and summary statistics are presented in data tables and plots. The false discovery rate (FDR) guards against incorrect declarations of significance. A robust estimation method reduces the sensitivity of tests to outliers.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);

```

### Item Messages

#### Effect Plots

**Syntax:** obj &lt;&lt; Effect Plots( state=0|1 )

**Description:** Shows or hides the FDR PValue Plot for Effects and the FDR Logworth by Effect Size plot. On by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run( Effect Plots( 0 ) )
);
Wait( 1 );
obj << Effect Plots( 1 );

```

#### Effect Tests

**Syntax:** obj &lt;&lt; Effect Tests( state=0|1 )

**Description:** Shows or hides the Effect Tests table. On by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run( Effect Tests( 0 ) )
);
Wait( 1 );
obj << Effect Tests( 1 );

```

#### Force G Side

**Syntax:** Fit Model( Y( columns ), Effects( columns ), Personality( "Response Screening" ), Run( Force G Side ) )

**Description:** Forces the random effects to be estimated on the G side, even if the random effects matrix has more columns than rows.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :season, :species * :season ),
	Random Effects( :subject[:species] ),
	Personality( "Response Screening" ),
	Run( Force G Side )
);

```

#### Force R Side

**Syntax:** Fit Model( Y( columns ), Effects( columns ), Personality( "Response Screening" ), Run( Force R Side ) )

**Description:** Forces the random effects to be estimated on the R side, even if the random effects matrix has more rows than columns.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
obj = dt << Fit Model(
	Effects( :Sex ),
	Random Effects( Grouped( Column Group( "Markers" ) ) ),
	Personality( "Response Screening" ),
	Y( :Trait1 ),
	Run( Force R Side )
);

```

#### Least Squares Means

**Syntax:** obj &lt;&lt; Least Squares Means( state=0|1 )

**Description:** Calculates all least squares (marginal) means.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Popcorn.jmp" );
obj = dt << Fit Model(
	Y( :yield ),
	Effects(
		:popcorn, :oil amt, :popcorn * :oil amt, :batch, :popcorn * :batch, :oil amt * :batch,
		:popcorn * :oil amt * :batch
	),
	Personality( "Response Screening" ),
	Run
);
Wait( 0 );
obj << Least Squares Means( 1 );

```

#### Model Dialog

**Syntax:** obj &lt;&lt; Model Dialog

**Description:** Shows the completed Fit Model launch window for the current analysis.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
obj << Model Dialog;

```

#### Overall Plots

**Syntax:** obj &lt;&lt; Overall Plots( state=0|1 )

**Description:** Shows or hides the Overall FDR PValue Plot and the FDR Logworth by RSquare plot.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
obj << Overall Plots( 1 );

```

#### Overall Report

**Syntax:** obj &lt;&lt; Overall Report( state=0|1 )

**Description:** Shows or hides the Overall Fit table.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
Wait( 0 );
obj << Overall Report( 1 );

```

#### Save BLUPs

**Syntax:** obj &lt;&lt; Save BLUPs

**Description:** Creates a new data table that contains the best linear unbiased predictors (BLUPs) for the random effects in the model.

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Life Sciences/Genotypes Pedigree.jmp" );
obj = Fit Model(
	Y( :Trait1, :Trait2, :Trait3 ),
	Effects( :Sex ),
	Random Effects( Grouped( Column Group( "Markers" ) ) ),
	Personality( "Response Screening" ),
	Run
);
obj << Save BLUPs;

```

#### Save Conditional Predicted Values

**Syntax:** obj &lt;&lt; Save Conditional Predicted Values

**Description:** Saves a new column for each response to the data table. The column contains the conditional predicted values that are calculated using the best linear unbiased predictors (BLUPs) for the random effects coefficients.

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Life Sciences/Genotypes Pedigree.jmp" );
obj = Fit Model(
	Y( :Trait1, :Trait2, :Trait3 ),
	Effects( :Sex ),
	Random Effects( Grouped( Column Group( "Markers" ) ) ),
	Personality( "Response Screening" ),
	Run
);
obj << Save Conditional Predicted Values;

```

#### Save Conditional Prediction Formula

**Syntax:** obj &lt;&lt; Save Conditional Prediction Formula

**Description:** Saves a new formula column for each response to the data table. The new column contains a formula that includes random effect estimates for models with random effects. Available only for REML analysis methods.

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Life Sciences/Genotypes Pedigree.jmp" );
obj = Fit Model(
	Y( :Trait1, :Trait2, :Trait3 ),
	Effects( :Sex ),
	Random Effects( Grouped( Column Group( "Markers" ) ) ),
	Personality( "Response Screening" ),
	Run
);
obj << Save Conditional Prediction Formula;

```

#### Save Effect Tests

**Syntax:** obj &lt;&lt; Save Effect Tests

**Description:** Creates a new data table that contains a row for each effect test.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
obj << Save Effect Tests;

```

#### Save Estimates

**Syntax:** obj &lt;&lt; Save Estimates

**Description:** Creates a new data table that contains a row for each response variable and a column for each model term.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
obj << Save Estimates;

```

#### Save LSMeans Differences

**Syntax:** obj &lt;&lt; Save LSMeans Differences

**Description:** Creates a new data table that contains all of the sliced least squares means differences.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Big Class.jmp" );
obj = dt << Fit Model(
	Effects( :age, :sex, :age * :sex ),
	Personality( "Response Screening" ),
	Y( :height, :weight ),
	Sliced LSMeans Differences( 1 ),
	Run
);
obj << Save LSMeans Differences;

```

#### Save Least Squares Means

**Syntax:** obj &lt;&lt; Save Least Squares Means

**Description:** Creates a new data table that contains all of the least squares means.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Big Class.jmp" );
obj = dt << Fit Model(
	Y( :height, :weight ),
	Effects( :age, :sex ),
	Personality( "Response Screening" ),
	Run
);
obj << Save Least Squares Means;

```

#### Save Overall Fit

**Syntax:** obj &lt;&lt; Save Overall Fit

**Description:** Creates a new data table that contains one row per response variable. For each Y, the columns in the table summarize information about the model fit.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
obj << Save Overall Fit;

```

#### Save Predicted Values

**Syntax:** obj &lt;&lt; Save Predicted Values

**Description:** Saves a new column for each response to the data table. Each column contains the predicted values for the corresponding response.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run( Save Predicted Values )
);

```

#### Save Prediction Formula

**Syntax:** obj &lt;&lt; Save Prediction Formula

**Description:** Saves a new formula column for each response to the data table. Each column contains a prediction equation for the corresponding response.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run( Save Prediction Formula )
);

```

#### Select Effects Where

**Syntax:** obj &lt;&lt; Select Effects Where( condition )

**Description:** Opens the Select Where window, which enables you to select rows in the Effects Tests table that correspond to the particular condition specified in the Select Where window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
obj << Select Effects Where( FDR Logworth > 4 );

```

#### Select Responses for Selected Effects

**Syntax:** obj &lt;&lt; Select Responses for Selected Effects

**Description:** Selects response columns in the original table that correspond to selected effects.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run()
);
obj << Select Effects Where( FDR Logworth > 4 );
obj << Select Responses for Selected Effects;

```

#### Sliced LSMeans Differences

**Syntax:** obj &lt;&lt; Sliced LSMeans Differences( state=0|1 )

**Description:** Calculates tests comparing all least squares means on main effects and slices of 2-factor and 3-factor interactions.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Popcorn.jmp" );
obj = dt << Fit Model(
	Y( :yield ),
	Effects(
		:popcorn, :oil amt, :popcorn * :oil amt, :batch, :popcorn * :batch, :oil amt * :batch,
		:popcorn * :oil amt * :batch
	),
	Personality( "Response Screening" ),
	Run
);
Wait( 0 );
obj << Sliced LSMeans Differences( 1 );

```

#### Unthreaded

**Syntax:** Fit Model( Y( columns ), Effects( columns ), Personality( "Response Screening" ), Run( Unthreaded ) )

**Description:** Suppresses multithreading across responses (and Switch variables).

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
obj = dt << Fit Model(
	Effects( :Sex ),
	Random Effects( Grouped( Column Group( "Markers" ) ) ),
	Personality( "Response Screening" ),
	Y( :Trait1 ),
	Run( Unthreaded )
);

```

### Shared Item Messages

#### Action

**Syntax:** obj &lt;&lt; Action

**Description:** All-purpose trapdoor within a platform to insert expressions to evaluate. Temporarily sets the DisplayBox and DataTable contexts to the Platform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

#### Apply Preset

**Syntax:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**Description:** Apply a previously created preset to the object, updating the options and customizations to match the saved settings.

**Anonymous preset**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();
dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );
Wait( 1 );
obj2 << Apply Preset( preset );

```

**Search by name**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

**Search within folder(s)**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

#### Automatic Recalc

**Syntax:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**Description:** Redoes the analysis automatically for exclude and data changes. If the Automatic Recalc option is turned on, you should consider using Wait(0) commands to ensure that the exclude and data changes take effect before the recalculation.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

#### Broadcast

**Syntax:** obj &lt;&lt; Broadcast(message)

**Description:** Broadcasts a message to a platform. If return results from individual objects are tables, they are concatenated if possible, and the final format is identical to either the result from the Save Combined Table option in a Table Box or the result from the Concatenate option using a Source column. Other than those, results are stored in a list and returned.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
objs = Control Chart Builder(
	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),
	By( :OPERATOR )
);
objs[1] << Broadcast( Save Summaries );

```

#### Column Switcher

**Syntax:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Description:** Adds a control panel for changing the platform&apos;s variables

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);

```

#### Copy ByGroup Script

**Syntax:** obj &lt;&lt; Copy ByGroup Script

**Description:** Create a JSL script to produce this analysis, and put it on the clipboard.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	By( _bycol ),
	Run
);
obj[1] << Copy ByGroup Script;

```

#### Copy Script

**Syntax:** obj &lt;&lt; Copy Script

**Description:** Create a JSL script to produce this analysis, and put it on the clipboard.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
obj << Copy Script;

```

#### Data Table Window

**Syntax:** obj &lt;&lt; Data Table Window

**Description:** Move the data table window for this analysis to the front.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
obj << Data Table Window;

```

#### Get By Levels

**Syntax:** obj &lt;&lt; Get By Levels

**Description:** Returns an associative array mapping the by group columns to their values.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

#### Get ByGroup Script

**Syntax:** obj &lt;&lt; Get ByGroup Script

**Description:** Creates a script (JSL) to produce this analysis and returns it as an expression.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	By( _bycol ),
	Run
);
t = obj[1] << Get ByGroup Script;
Show( t );

```

#### Get Container

**Syntax:** obj &lt;&lt; Get Container

**Description:** Returns a reference to the container box that holds the content for the object.

**General**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**Platform with Filter**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Show Control Panel( 0 ),
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),
	Local Data Filter(
		Add Filter(
			columns( :age, :sex, :height ),
			Where( :age == {12, 13, 14} ),
			Where( :sex == "F" ),
			Where( :height >= 55 ),
			Display( :age, N Items( 6 ) )
		)
	)
);
New Window( "platform boxes",
	H List Box(
		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),
		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )
	)
);

```

#### Get Data Table

**Syntax:** obj &lt;&lt; Get Data Table

**Description:** Returns a reference to the data table.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
t = obj << Get Datatable;
Show( N Rows( t ) );

```

#### Get Group Platform

**Syntax:** obj &lt;&lt; Get Group Platform

**Description:** Return the Group Platform object if this platform is part of a Group. Otherwise, returns Empty().

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );
group = biv[1] << Get Group Platform;
Wait( 1 );
group << Layout( "Arrange in Tabs" );

```

#### Get Script

**Syntax:** obj &lt;&lt; Get Script

**Description:** Creates a script (JSL) to produce this analysis and returns it as an expression.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
t = obj << Get Script;
Show( t );

```

#### Get Script With Data Table

**Syntax:** obj &lt;&lt; Get Script With Data Table

**Description:** Creates a script(JSL) to produce this analysis specifically referencing this data table and returns it as an expression.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
t = obj << Get Script With Data Table;
Show( t );

```

#### Get Timing

**Syntax:** obj &lt;&lt; Get Timing

**Description:** Times the platform launch.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
t = obj << Get Timing;
Show( t );

```

#### Get Web Support

**Syntax:** obj &lt;&lt; Get Web Support

**Description:** Return a number indicating the level of Interactive HTML support for the display object. 1 means some or all elements are supported. 0 means no support.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

#### Get Where Expr

**Syntax:** obj &lt;&lt; Get Where Expr

**Description:** Returns the Where expression for the data subset, if the platform was launched with By() or Where(). Otherwise, returns Empty()

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );
Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

#### Ignore Platform Preferences

**Syntax:** Ignore Platform Preferences( state=0|1 )

**Description:** Ignores the current settings of the platform&apos;s preferences. The message is ignored when sent to the platform after creation.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Ignore Platform Preferences( 1 ),
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

#### Local Data Filter

**Syntax:** obj &lt;&lt; Local Data Filter

**Description:** To filter data to specific groups or ranges, but local to this platform

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :country ) ),
	Local Data Filter(
		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),
		Mode( Show( 1 ), Include( 1 ) )
	)
);

```

#### New JSL Preset

**Syntax:** New JSL Preset( preset )

**Description:** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
preset = obj << New JSL Preset( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) );
Wait( 1 );
obj << Apply Preset( preset );

```

#### New Preset

**Syntax:** obj = New Preset()

**Description:** Create an anonymous preset representing the options and customizations applied to the object. This object can be passed to Apply Preset to copy the settings to another object of the same type.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

#### Paste Local Data Filter

**Syntax:** obj &lt;&lt; Paste Local Data Filter

**Description:** Apply the local data filter from the clipboard to the current report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
filter = dist << Local Data Filter(
	Add Filter( columns( :Region ), Where( :Region == "MW" ) )
);
filter << Copy Local Data Filter;
dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );
Wait( 1 );
dist2 << Paste Local Data Filter;

```

#### Redo Analysis

**Syntax:** obj &lt;&lt; Redo Analysis

**Description:** Rerun this same analysis in a new window. The analysis will be different if the data has changed.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
obj << Redo Analysis;

```

#### Redo ByGroup Analysis

**Syntax:** obj &lt;&lt; Redo ByGroup Analysis

**Description:** Rerun this same analysis in a new window. The analysis will be different if the data has changed.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	By( _bycol ),
	Run
);
obj[1] << Redo ByGroup Analysis;

```

#### Relaunch Analysis

**Syntax:** obj &lt;&lt; Relaunch Analysis

**Description:** Opens the platform launch window and recalls the settings that were used to create the report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
obj << Relaunch Analysis;

```

#### Relaunch ByGroup

**Syntax:** obj &lt;&lt; Relaunch ByGroup

**Description:** Opens the platform launch window and recalls the settings that were used to create the report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	By( _bycol ),
	Run
);
obj[1] << Relaunch ByGroup;

```

#### Remove Column Switcher

**Syntax:** obj &lt;&lt; Remove Column Switcher

**Description:** Removes the most recent Column Switcher that has been added to the platform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
Wait( 2 );
obj << Remove Column Switcher;

```

#### Remove Local Data Filter

**Syntax:** obj &lt;&lt; Remove Local Data Filter

**Description:** If a local data filter has been created, this removes it and restores the platform to use all the data in the data table directly

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dist = dt << Distribution(
	Nominal Distribution( Column( :country ) ),
	Local Data Filter(
		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),
		Mode( Show( 1 ), Include( 1 ) )
	)
);
Wait( 2 );
dist << remove local data filter;

```

#### Render Preset

**Syntax:** Render Preset( preset )

**Description:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

#### Report

**Syntax:** obj &lt;&lt; Report;Report( obj )

**Description:** Returns a reference to the report object.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Report View

**Syntax:** obj &lt;&lt; Report View( "Full"|"Summary" )

**Description:** The report view determines the level of detail visible in a platform report. Full shows all of the detail, while Summary shows only select content, dependent on the platform. For customized behavior, display boxes support a <<Set Summary Behavior message.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**Syntax:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description:** Creates a JSL script to produce this analysis, and save it as a table property in the data table. You can specify a name for the script. The Append Suffix option appends a numeric suffix to the script name, which differentiates the script from an existing script with the same name. The Prompt option prompts the user to specify a script name. The Replace option replaces an existing script with the same name.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**Syntax:** obj &lt;&lt; Save ByGroup Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**Syntax:** obj &lt;&lt; Save ByGroup Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**Syntax:** obj &lt;&lt; Save Script for All Objects

**Description:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**Syntax:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Description:** Saves a script for all report objects to the current data table. This option is useful when you have multiple reports in the window. The script is named after the first platform unless you specify the script name in quotes.

**Example 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	By( _bycol ),
	Run
);
obj[1] << Save Script for All Objects To Data Table;

```

**Example 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	By( _bycol ),
	Run
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**Syntax:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description:** Create a JSL script to produce this analysis, and save it as a table property in the data table.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**Syntax:** obj &lt;&lt; Save Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
obj << Save Script to Journal;

```

#### Save Script to Report

**Syntax:** obj &lt;&lt; Save Script to Report

**Description:** Create a JSL script to produce this analysis, and show it in the report itself. Useful to preserve a printed record of what was done.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
obj << Save Script to Report;

```

#### Save Script to Script Window

**Syntax:** obj &lt;&lt; Save Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
obj << Save Script to Script Window;

```

#### SendToByGroup

**Syntax:** SendToByGroup( {":Column == level"}, command );

**Description:** Sends platform commands or display customization commands to each level of a by-group.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	By( :Sex ),
	SendToByGroup(
		{:sex == "F"},
		Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) )
	),
	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) )
);

```

#### SendToEmbeddedScriptable

**Syntax:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Description:** SendToEmbeddedScriptable restores settings of embedded scriptable objects.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
dt << Life Distribution(
	Y( :Time ),
	Censor( :Censor ),
	Censor Code( 1 ),
	<<Fit Weibull,
	SendToEmbeddedScriptable(
		Dispatch(
			{"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},
			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}
		)
	)
);

```

#### SendToReport

**Syntax:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Description:** Send To Report is used in tandem with the Dispatch command to customize the appearance of a report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :age ) ),
	Continuous Distribution( Column( :weight ) ),
	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) )
);

```

#### Sync to Data Table Changes

**Syntax:** obj &lt;&lt; Sync to Data Table Changes

**Description:** Sync with the exclude and data changes that have been made.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
Wait( 1 );
dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );
dist << Sync To Data Table Changes;

```

#### Title

**Syntax:** obj &lt;&lt; Title( "new title" )

**Description:** Sets the title of the platform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
obj << Title( "My Platform" );

```

#### Top Report

**Syntax:** obj &lt;&lt; Top Report

**Description:** Returns a reference to the root node in the report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Transform Column

**Syntax:** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Description:** Create a transform column in the local context of an object, usually a platform. The transform column is active only for the lifetime of the platform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),
	Continuous Distribution( Column( :"age^2"n ) )
);

```

#### View Web XML

**Syntax:** obj &lt;&lt; View Web XML

**Description:** Returns the XML code that is used to create the interactive HTML report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

#### Window View

**Syntax:** obj = Fit Response Screening(...Window View( "Visible"|"Invisible"|"Private" )...)

**Description:** Set the type of the window to be created for the report. By default a Visible report window will be created. An Invisible window will not appear on screen, but is discoverable by functions such as Window(). A Private window responds to most window messages but is not discoverable and must be addressed through the report object

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );
eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;
biv << Close Window;
New Window( "Bivariate Equation",
	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) )
);

```

## Fit Stepwise

### Associated Constructors

#### Stepwise Personality

**Syntax:** Fit Model( Y( columns ), Effects( columns ), Personality( "Stepwise" ) )

**Description:** Fits stepwise regression models, which facilitate variable selection for standard least squares and ordinal logistic models, as well as nominal logistic models with a binary response.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;

```

### Columns

#### By

**Syntax:** obj &lt;&lt; By( column(s) )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	By( _bycol ),
	Run
);
obj << Finish;

```

### Item Messages

#### All Possible Models

**Syntax:** obj &lt;&lt; All Possible Models( max_terms, max_models, &lt;Heredity Restriction( state=0|1 )&gt; )

**Description:** Fits all possible models up to the specified limits and shows the best models for each number of terms. Specify the maximum number of terms to fit in any one model. Specify the maximum number of model results to show for each number of model terms. You can restrict the models that appear to those that satisfy strong effect heredity. The All Possible Models option is available only for continuous responses.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
Wait( 1 );
obj << All Possible Models( 5, 10 );

```

#### Backward Step

**Syntax:** obj &lt;&lt; Backward Step

**Description:** Removes the term with the largest p-value. If the P-value Threshold stopping rule is selected, that term must not be significant at the level specified by the Prob to Leave option.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Enter All;
Wait( 1 );
obj << Backward Step;

```

#### Clear History

**Syntax:** obj &lt;&lt; Clear History

**Description:** Clears and resets the step history.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
Wait( 1 );
obj << Clear History;

```

#### Direction

**Syntax:** obj &lt;&lt; Direction( "Forward"|"Backward"|"Mixed" )

**Description:** Specifies the direction that is used for stepping through the term selection process. The direction can be forward, backward, or a mixture of the two. The Mixed direction option requires that the P-value Threshold stopping rule be selected.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Stopping Rule( "P-value Threshold" );
obj << Direction( "Mixed" );
obj << Finish;

```

#### Enter

**Syntax:** obj &lt;&lt; Enter( term )

**Description:** Enters a term into the model. This option does not affect locked terms.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Enter( :Runtime );

```

#### Enter All

**Syntax:** obj &lt;&lt; Enter All

**Description:** Enters all the terms into the model, if possible.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run( Direction( "Backward" ) )
);
obj << Enter All;

```

#### Export Model With Validation

**Syntax:** obj &lt;&lt; Export Model With Validation( state=0|1 )

**Description:** Adds the Validation column to the Model Specification window when you select the Make Model option. This option also runs the model with the Validation column when you select the Run Model option. This option is available only when you have specified a Validation column. On by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Validation( :Validation ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
obj << Make Model;
Wait( 1 );
obj << Export Model With Validation( 0 );
obj << Make Model;

```

#### Finish

**Syntax:** obj &lt;&lt; Finish

**Description:** Completes the term selection process immediately. In scripts, the Finish option is recommended instead of the Go option.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;

```

#### Forward Step

**Syntax:** obj &lt;&lt; Forward Step

**Description:** Enters the term with the smallest p-value. If the P-value Threshold stopping rule is selected, that term must be significant at the level specified by the Prob to Enter option.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
Wait( 1 );
obj << Forward Step;

```

#### Get Measures

**Syntax:** obj &lt;&lt; Get Measures

**Description:** Returns summary measures of fit from the model.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
obj << Get Measures;

```

#### Get Prospectives

**Syntax:** obj &lt;&lt; Get Prospectives

**Description:** Returns an associative array that contains estimates and confidence intervals. For terms that are in the model, the values are the values obtained from the current model. For terms that are not in the current model, the values are the estimates and confidence intervals from a model that includes the corresponding term.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
Show(
	obj << Enter( :Runtime );
	obj << Get Prospectives;
);

```

#### Go

**Syntax:** obj &lt;&lt; Go

**Description:** Starts a background task for the term selection process. In scripts, the Finish option is recommended instead of the Go option.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Go;

```

#### K-Fold Crossvalidation

**Syntax:** obj &lt;&lt; "K-Fold Crossvalidation"n( &lt;k&gt; )

**Description:** Performs k-fold cross validation in the variable selection process. When selected, this option enables the Max K-Fold RSquare stopping rule in the control panel. K-fold cross validation in the Stepwise platform divides the sample into k subsets and uses of the subsets as a validation set. The K-Fold Crossvalidation option is available only for continuous responses.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << "K-Fold Crossvalidation"n( 5 );
obj << Finish;

```

#### Lock

**Syntax:** obj &lt;&lt; Lock( term )

**Description:** Locks a term in or out of the model. A locked term that is not in the model cannot be entered into the model, and a locked term that is in the model cannot be removed from the model.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Enter( :Runtime );
obj << Lock( :Runtime );

```

#### Make Model

**Syntax:** obj &lt;&lt; Make Model

**Description:** Opens a Fit Model launch window for the model that is specified in the Current Estimates table. In cases where there are nominal or ordinal terms, the Make Model option creates temporary transform columns that contain terms that are needed for the model.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
obj << Make Model;

```

#### Model Averaging

**Syntax:** obj &lt;&lt; Model Averaging( max_terms, AICc_cutoff )

**Description:** Enables you to average the fits for a number of models, instead of selecting a single best model.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
Wait( 1 );
obj << Model Averaging( 5, .90 );

```

#### Model Dialog

**Syntax:** obj &lt;&lt; Model Dialog

**Description:** Shows the completed Fit Model launch window for the current analysis.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
Wait( 1 );
obj << Model Dialog;

```

#### Plot Criterion History

**Syntax:** obj &lt;&lt; Plot Criterion History( state=0|1 )

**Description:** Creates a plot of AICc and BIC versus the number of parameters.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Stopping Rule( "P-value Threshold" );
obj << Direction( "Mixed" );
obj << Finish;
obj << Plot Criterion History( 1 );

```

#### Plot RSquare History

**Syntax:** obj &lt;&lt; Plot RSquare History( state=0|1 )

**Description:** Creates a plot of training and validation R-square versus the number of parameters. This option is available only for continuous response models that have validation data.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << "K-Fold Crossvalidation"n( 5 );
obj << Finish;
obj << Plot RSquare History( 1 );

```

#### Prob to Enter

**Syntax:** obj &lt;&lt; Prob to Enter( number )

**Description:** Specifies the maximum p-value that an effect must have to be entered into the model during a forward step.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Stopping Rule( "P-value Threshold" );
obj << Prob to Enter( .20 );
obj << Finish;

```

#### Prob to Leave

**Syntax:** obj &lt;&lt; Prob to Leave( number )

**Description:** Specifies the minimum p-value that an effect must have to be removed from the model during a backward step.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Stopping Rule( "P-value Threshold" );
obj << Prob to Leave( .20 );
obj << Enter All;
obj << Direction( "Backward" );
obj << Finish;

```

#### Remove

**Syntax:** obj &lt;&lt; Remove( term )

**Description:** Removes a term from the model. This option does not affect locked terms.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
obj << Remove( :RunPulse );

```

#### Remove All

**Syntax:** obj &lt;&lt; Remove All

**Description:** Removes all the terms from the model.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
Wait( 1 );
obj << Remove All;

```

#### Rules

**Syntax:** obj &lt;&lt; Rules( "Combine"|"Restrict"|"No Rules"|"Whole Effects"|"Whole Effects Respecting Heredity" )

**Description:** Specifies the rules that are applied when there is a hierarchy of terms in the model. This option appears only if your model contains hierarchical terms.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects(
		:Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse, :Weight * :Runtime,
		:Weight * :RunPulse, :Weight * :RstPulse, :Weight * :MaxPulse, :Runtime * :RunPulse,
		:RunPulse * :MaxPulse
	),
	Personality( "Stepwise" ),
	Run
);
obj << Rules( "Whole Effects" );
obj << Stopping Rule( "P-value Threshold" );
obj << Direction( "Mixed" );
obj << Finish;

```

#### Run Model

**Syntax:** obj &lt;&lt; Run Model

**Description:** Opens a Standard Least Squares report for the model that is specified in the Current Estimates table. In cases where there are nominal or ordinal terms, the Run Model option creates temporary transform columns that contain terms that are needed for the model.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
obj << Run Model;

```

#### Step

**Syntax:** obj &lt;&lt; Step

**Description:** Takes the next step in the term selection process. The Step option enters terms one-by-one in the forward direction or removes them one-by one in the backward direction.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
Wait( 1 );
obj << Step;

```

#### Stop

**Syntax:** obj &lt;&lt; Stop

**Description:** Stops the automatic selection process that is started by the Go or Finish options.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
obj << Stop;

```

#### Stopping Rule

**Syntax:** obj &lt;&lt; Stopping Rule( "P-value Threshold"|"Minimum AICc"|"Minimum BIC"|"Max Validation RSquare"|"Max K-Fold RSquare" )

**Description:** Specifies the rule that is used to stop the term selection process when the Go or Finish options are specified.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects(
		:Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse, :Weight * :Runtime,
		:Weight * :RunPulse, :Weight * :RstPulse, :Weight * :MaxPulse, :Runtime * :RunPulse,
		:RunPulse * :MaxPulse
	),
	Personality( "Stepwise" ),
	Run Model( Stopping Rule( "Minimum AICc" ) )
);
obj << Finish;

```

#### Unlock

**Syntax:** obj &lt;&lt; Unlock( term )

**Description:** Unlocks a previously locked term in the model.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Enter( :Runtime );
obj << Lock( :Runtime );
Wait( 1 );
obj << Unlock( :Runtime );

```

### Shared Item Messages

#### Action

**Syntax:** obj &lt;&lt; Action

**Description:** All-purpose trapdoor within a platform to insert expressions to evaluate. Temporarily sets the DisplayBox and DataTable contexts to the Platform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

#### Apply Preset

**Syntax:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**Description:** Apply a previously created preset to the object, updating the options and customizations to match the saved settings.

**Anonymous preset**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();
dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );
Wait( 1 );
obj2 << Apply Preset( preset );

```

**Search by name**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

**Search within folder(s)**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

#### Automatic Recalc

**Syntax:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**Description:** Redoes the analysis automatically for exclude and data changes. If the Automatic Recalc option is turned on, you should consider using Wait(0) commands to ensure that the exclude and data changes take effect before the recalculation.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

#### Broadcast

**Syntax:** obj &lt;&lt; Broadcast(message)

**Description:** Broadcasts a message to a platform. If return results from individual objects are tables, they are concatenated if possible, and the final format is identical to either the result from the Save Combined Table option in a Table Box or the result from the Concatenate option using a Source column. Other than those, results are stored in a list and returned.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
objs = Control Chart Builder(
	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),
	By( :OPERATOR )
);
objs[1] << Broadcast( Save Summaries );

```

#### Column Switcher

**Syntax:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Description:** Adds a control panel for changing the platform&apos;s variables

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);

```

#### Copy ByGroup Script

**Syntax:** obj &lt;&lt; Copy ByGroup Script

**Description:** Create a JSL script to produce this analysis, and put it on the clipboard.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	By( _bycol ),
	Run
);
obj << Finish;
obj[1] << Copy ByGroup Script;

```

#### Copy Script

**Syntax:** obj &lt;&lt; Copy Script

**Description:** Create a JSL script to produce this analysis, and put it on the clipboard.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
obj << Copy Script;

```

#### Data Table Window

**Syntax:** obj &lt;&lt; Data Table Window

**Description:** Move the data table window for this analysis to the front.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
obj << Data Table Window;

```

#### Get By Levels

**Syntax:** obj &lt;&lt; Get By Levels

**Description:** Returns an associative array mapping the by group columns to their values.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

#### Get ByGroup Script

**Syntax:** obj &lt;&lt; Get ByGroup Script

**Description:** Creates a script (JSL) to produce this analysis and returns it as an expression.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	By( _bycol ),
	Run
);
obj << Finish;
t = obj[1] << Get ByGroup Script;
Show( t );

```

#### Get Container

**Syntax:** obj &lt;&lt; Get Container

**Description:** Returns a reference to the container box that holds the content for the object.

**General**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**Platform with Filter**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Show Control Panel( 0 ),
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),
	Local Data Filter(
		Add Filter(
			columns( :age, :sex, :height ),
			Where( :age == {12, 13, 14} ),
			Where( :sex == "F" ),
			Where( :height >= 55 ),
			Display( :age, N Items( 6 ) )
		)
	)
);
New Window( "platform boxes",
	H List Box(
		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),
		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )
	)
);

```

#### Get Data Table

**Syntax:** obj &lt;&lt; Get Data Table

**Description:** Returns a reference to the data table.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
t = obj << Get Datatable;
Show( N Rows( t ) );

```

#### Get Group Platform

**Syntax:** obj &lt;&lt; Get Group Platform

**Description:** Return the Group Platform object if this platform is part of a Group. Otherwise, returns Empty().

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );
group = biv[1] << Get Group Platform;
Wait( 1 );
group << Layout( "Arrange in Tabs" );

```

#### Get Script

**Syntax:** obj &lt;&lt; Get Script

**Description:** Creates a script (JSL) to produce this analysis and returns it as an expression.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
t = obj << Get Script;
Show( t );

```

#### Get Script With Data Table

**Syntax:** obj &lt;&lt; Get Script With Data Table

**Description:** Creates a script(JSL) to produce this analysis specifically referencing this data table and returns it as an expression.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
t = obj << Get Script With Data Table;
Show( t );

```

#### Get Timing

**Syntax:** obj &lt;&lt; Get Timing

**Description:** Times the platform launch.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
t = obj << Get Timing;
Show( t );

```

#### Get Web Support

**Syntax:** obj &lt;&lt; Get Web Support

**Description:** Return a number indicating the level of Interactive HTML support for the display object. 1 means some or all elements are supported. 0 means no support.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

#### Get Where Expr

**Syntax:** obj &lt;&lt; Get Where Expr

**Description:** Returns the Where expression for the data subset, if the platform was launched with By() or Where(). Otherwise, returns Empty()

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );
Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

#### Ignore Platform Preferences

**Syntax:** Ignore Platform Preferences( state=0|1 )

**Description:** Ignores the current settings of the platform&apos;s preferences. The message is ignored when sent to the platform after creation.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Ignore Platform Preferences( 1 ),
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

#### Local Data Filter

**Syntax:** obj &lt;&lt; Local Data Filter

**Description:** To filter data to specific groups or ranges, but local to this platform

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :country ) ),
	Local Data Filter(
		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),
		Mode( Show( 1 ), Include( 1 ) )
	)
);

```

#### New JSL Preset

**Syntax:** New JSL Preset( preset )

**Description:** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
preset = obj << New JSL Preset( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) );
Wait( 1 );
obj << Apply Preset( preset );

```

#### New Preset

**Syntax:** obj = New Preset()

**Description:** Create an anonymous preset representing the options and customizations applied to the object. This object can be passed to Apply Preset to copy the settings to another object of the same type.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

#### Paste Local Data Filter

**Syntax:** obj &lt;&lt; Paste Local Data Filter

**Description:** Apply the local data filter from the clipboard to the current report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
filter = dist << Local Data Filter(
	Add Filter( columns( :Region ), Where( :Region == "MW" ) )
);
filter << Copy Local Data Filter;
dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );
Wait( 1 );
dist2 << Paste Local Data Filter;

```

#### Redo Analysis

**Syntax:** obj &lt;&lt; Redo Analysis

**Description:** Rerun this same analysis in a new window. The analysis will be different if the data has changed.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
obj << Redo Analysis;

```

#### Redo ByGroup Analysis

**Syntax:** obj &lt;&lt; Redo ByGroup Analysis

**Description:** Rerun this same analysis in a new window. The analysis will be different if the data has changed.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	By( _bycol ),
	Run
);
obj << Finish;
obj[1] << Redo ByGroup Analysis;

```

#### Relaunch Analysis

**Syntax:** obj &lt;&lt; Relaunch Analysis

**Description:** Opens the platform launch window and recalls the settings that were used to create the report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
obj << Relaunch Analysis;

```

#### Relaunch ByGroup

**Syntax:** obj &lt;&lt; Relaunch ByGroup

**Description:** Opens the platform launch window and recalls the settings that were used to create the report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	By( _bycol ),
	Run
);
obj << Finish;
obj[1] << Relaunch ByGroup;

```

#### Remove Column Switcher

**Syntax:** obj &lt;&lt; Remove Column Switcher

**Description:** Removes the most recent Column Switcher that has been added to the platform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
Wait( 2 );
obj << Remove Column Switcher;

```

#### Remove Local Data Filter

**Syntax:** obj &lt;&lt; Remove Local Data Filter

**Description:** If a local data filter has been created, this removes it and restores the platform to use all the data in the data table directly

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dist = dt << Distribution(
	Nominal Distribution( Column( :country ) ),
	Local Data Filter(
		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),
		Mode( Show( 1 ), Include( 1 ) )
	)
);
Wait( 2 );
dist << remove local data filter;

```

#### Render Preset

**Syntax:** Render Preset( preset )

**Description:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

#### Report

**Syntax:** obj &lt;&lt; Report;Report( obj )

**Description:** Returns a reference to the report object.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Report View

**Syntax:** obj &lt;&lt; Report View( "Full"|"Summary" )

**Description:** The report view determines the level of detail visible in a platform report. Full shows all of the detail, while Summary shows only select content, dependent on the platform. For customized behavior, display boxes support a <<Set Summary Behavior message.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**Syntax:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description:** Creates a JSL script to produce this analysis, and save it as a table property in the data table. You can specify a name for the script. The Append Suffix option appends a numeric suffix to the script name, which differentiates the script from an existing script with the same name. The Prompt option prompts the user to specify a script name. The Replace option replaces an existing script with the same name.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	By( _bycol ),
	Run
);
obj << Finish;
obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**Syntax:** obj &lt;&lt; Save ByGroup Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	By( _bycol ),
	Run
);
obj << Finish;
obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**Syntax:** obj &lt;&lt; Save ByGroup Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	By( _bycol ),
	Run
);
obj << Finish;
obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**Syntax:** obj &lt;&lt; Save Script for All Objects

**Description:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**Syntax:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Description:** Saves a script for all report objects to the current data table. This option is useful when you have multiple reports in the window. The script is named after the first platform unless you specify the script name in quotes.

**Example 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	By( _bycol ),
	Run
);
obj << Finish;
obj[1] << Save Script for All Objects To Data Table;

```

**Example 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	By( _bycol ),
	Run
);
obj << Finish;
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**Syntax:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description:** Create a JSL script to produce this analysis, and save it as a table property in the data table.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**Syntax:** obj &lt;&lt; Save Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
obj << Save Script to Journal;

```

#### Save Script to Report

**Syntax:** obj &lt;&lt; Save Script to Report

**Description:** Create a JSL script to produce this analysis, and show it in the report itself. Useful to preserve a printed record of what was done.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
obj << Save Script to Report;

```

#### Save Script to Script Window

**Syntax:** obj &lt;&lt; Save Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
obj << Save Script to Script Window;

```

#### SendToByGroup

**Syntax:** SendToByGroup( {":Column == level"}, command );

**Description:** Sends platform commands or display customization commands to each level of a by-group.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	By( :Sex ),
	SendToByGroup(
		{:sex == "F"},
		Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) )
	),
	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) )
);

```

#### SendToEmbeddedScriptable

**Syntax:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Description:** SendToEmbeddedScriptable restores settings of embedded scriptable objects.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
dt << Life Distribution(
	Y( :Time ),
	Censor( :Censor ),
	Censor Code( 1 ),
	<<Fit Weibull,
	SendToEmbeddedScriptable(
		Dispatch(
			{"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},
			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}
		)
	)
);

```

#### SendToReport

**Syntax:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Description:** Send To Report is used in tandem with the Dispatch command to customize the appearance of a report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :age ) ),
	Continuous Distribution( Column( :weight ) ),
	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) )
);

```

#### Sync to Data Table Changes

**Syntax:** obj &lt;&lt; Sync to Data Table Changes

**Description:** Sync with the exclude and data changes that have been made.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
Wait( 1 );
dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );
dist << Sync To Data Table Changes;

```

#### Title

**Syntax:** obj &lt;&lt; Title( "new title" )

**Description:** Sets the title of the platform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
obj << Title( "My Platform" );

```

#### Top Report

**Syntax:** obj &lt;&lt; Top Report

**Description:** Returns a reference to the root node in the report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Transform Column

**Syntax:** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Description:** Create a transform column in the local context of an object, usually a platform. The transform column is active only for the lifetime of the platform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),
	Continuous Distribution( Column( :"age^2"n ) )
);

```

#### View Web XML

**Syntax:** obj &lt;&lt; View Web XML

**Description:** Returns the XML code that is used to create the interactive HTML report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

#### Window View

**Syntax:** obj = Stepwise Personality(...Window View( "Visible"|"Invisible"|"Private" )...)

**Description:** Set the type of the window to be created for the report. By default a Visible report window will be created. An Invisible window will not appear on screen, but is discoverable by functions such as Window(). A Private window responds to most window messages but is not discoverable and must be addressed through the report object

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );
eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;
biv << Close Window;
New Window( "Bivariate Equation",
	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) )
);

```

## Fit Varcomp

### Associated Constructors

#### Estimate Only Variance Components

**Syntax:** Fit Model( Y( columns ), Effects( columns ), Personality( "Standard Least Squares" ), Method( "REML" ), Estimate Only Variance Components( 1 ) )

**Description:** Runs a REML analysis using the specified model and displays the variance components from the model.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
);

```

### Columns

#### By

**Syntax:** obj &lt;&lt; By( column(s) )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	By( _bycol ),
	Run
);

```

### Item Messages

#### Get Random Effect Names

**Syntax:** obj &lt;&lt; Get Random Effect Names

**Description:** Returns the names of the random effects.  Available for REML analysis methods.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
);
vn = obj << Get Random Effect Names;
Show( vn );

```

#### Get Variance Components

**Syntax:** obj &lt;&lt; Get Variance Components

**Description:** Returns the variance components generated by Fit Model for a specified model.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
);
vc = obj << Get Variance Components;
Show( vc );

```

### Shared Item Messages

#### Action

**Syntax:** obj &lt;&lt; Action

**Description:** All-purpose trapdoor within a platform to insert expressions to evaluate. Temporarily sets the DisplayBox and DataTable contexts to the Platform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

#### Apply Preset

**Syntax:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**Description:** Apply a previously created preset to the object, updating the options and customizations to match the saved settings.

**Anonymous preset**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();
dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );
Wait( 1 );
obj2 << Apply Preset( preset );

```

**Search by name**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

**Search within folder(s)**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

#### Broadcast

**Syntax:** obj &lt;&lt; Broadcast(message)

**Description:** Broadcasts a message to a platform. If return results from individual objects are tables, they are concatenated if possible, and the final format is identical to either the result from the Save Combined Table option in a Table Box or the result from the Concatenate option using a Source column. Other than those, results are stored in a list and returned.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
objs = Control Chart Builder(
	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),
	By( :OPERATOR )
);
objs[1] << Broadcast( Save Summaries );

```

#### Column Switcher

**Syntax:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Description:** Adds a control panel for changing the platform&apos;s variables

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);

```

#### Copy ByGroup Script

**Syntax:** obj &lt;&lt; Copy ByGroup Script

**Description:** Create a JSL script to produce this analysis, and put it on the clipboard.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	By( _bycol ),
	Run
);
obj[1] << Copy ByGroup Script;

```

#### Copy Script

**Syntax:** obj &lt;&lt; Copy Script

**Description:** Create a JSL script to produce this analysis, and put it on the clipboard.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
);
obj << Copy Script;

```

#### Data Table Window

**Syntax:** obj &lt;&lt; Data Table Window

**Description:** Move the data table window for this analysis to the front.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
);
obj << Data Table Window;

```

#### Get By Levels

**Syntax:** obj &lt;&lt; Get By Levels

**Description:** Returns an associative array mapping the by group columns to their values.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

#### Get ByGroup Script

**Syntax:** obj &lt;&lt; Get ByGroup Script

**Description:** Creates a script (JSL) to produce this analysis and returns it as an expression.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	By( _bycol ),
	Run
);
t = obj[1] << Get ByGroup Script;
Show( t );

```

#### Get Container

**Syntax:** obj &lt;&lt; Get Container

**Description:** Returns a reference to the container box that holds the content for the object.

**General**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
);
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**Platform with Filter**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Show Control Panel( 0 ),
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),
	Local Data Filter(
		Add Filter(
			columns( :age, :sex, :height ),
			Where( :age == {12, 13, 14} ),
			Where( :sex == "F" ),
			Where( :height >= 55 ),
			Display( :age, N Items( 6 ) )
		)
	)
);
New Window( "platform boxes",
	H List Box(
		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),
		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )
	)
);

```

#### Get Data Table

**Syntax:** obj &lt;&lt; Get Data Table

**Description:** Returns a reference to the data table.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
);
t = obj << Get Datatable;
Show( N Rows( t ) );

```

#### Get Group Platform

**Syntax:** obj &lt;&lt; Get Group Platform

**Description:** Return the Group Platform object if this platform is part of a Group. Otherwise, returns Empty().

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );
group = biv[1] << Get Group Platform;
Wait( 1 );
group << Layout( "Arrange in Tabs" );

```

#### Get Script

**Syntax:** obj &lt;&lt; Get Script

**Description:** Creates a script (JSL) to produce this analysis and returns it as an expression.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
);
t = obj << Get Script;
Show( t );

```

#### Get Script With Data Table

**Syntax:** obj &lt;&lt; Get Script With Data Table

**Description:** Creates a script(JSL) to produce this analysis specifically referencing this data table and returns it as an expression.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
);
t = obj << Get Script With Data Table;
Show( t );

```

#### Get Timing

**Syntax:** obj &lt;&lt; Get Timing

**Description:** Times the platform launch.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
);
t = obj << Get Timing;
Show( t );

```

#### Get Web Support

**Syntax:** obj &lt;&lt; Get Web Support

**Description:** Return a number indicating the level of Interactive HTML support for the display object. 1 means some or all elements are supported. 0 means no support.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

#### Get Where Expr

**Syntax:** obj &lt;&lt; Get Where Expr

**Description:** Returns the Where expression for the data subset, if the platform was launched with By() or Where(). Otherwise, returns Empty()

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );
Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

#### Ignore Platform Preferences

**Syntax:** Ignore Platform Preferences( state=0|1 )

**Description:** Ignores the current settings of the platform&apos;s preferences. The message is ignored when sent to the platform after creation.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Ignore Platform Preferences( 1 ),
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

#### Local Data Filter

**Syntax:** obj &lt;&lt; Local Data Filter

**Description:** To filter data to specific groups or ranges, but local to this platform

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :country ) ),
	Local Data Filter(
		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),
		Mode( Show( 1 ), Include( 1 ) )
	)
);

```

#### New JSL Preset

**Syntax:** New JSL Preset( preset )

**Description:** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
preset = obj << New JSL Preset( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) );
Wait( 1 );
obj << Apply Preset( preset );

```

#### New Preset

**Syntax:** obj = New Preset()

**Description:** Create an anonymous preset representing the options and customizations applied to the object. This object can be passed to Apply Preset to copy the settings to another object of the same type.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

#### Paste Local Data Filter

**Syntax:** obj &lt;&lt; Paste Local Data Filter

**Description:** Apply the local data filter from the clipboard to the current report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
filter = dist << Local Data Filter(
	Add Filter( columns( :Region ), Where( :Region == "MW" ) )
);
filter << Copy Local Data Filter;
dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );
Wait( 1 );
dist2 << Paste Local Data Filter;

```

#### Redo Analysis

**Syntax:** obj &lt;&lt; Redo Analysis

**Description:** Rerun this same analysis in a new window. The analysis will be different if the data has changed.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
);
obj << Redo Analysis;

```

#### Redo ByGroup Analysis

**Syntax:** obj &lt;&lt; Redo ByGroup Analysis

**Description:** Rerun this same analysis in a new window. The analysis will be different if the data has changed.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	By( _bycol ),
	Run
);
obj[1] << Redo ByGroup Analysis;

```

#### Relaunch Analysis

**Syntax:** obj &lt;&lt; Relaunch Analysis

**Description:** Opens the platform launch window and recalls the settings that were used to create the report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
);
obj << Relaunch Analysis;

```

#### Relaunch ByGroup

**Syntax:** obj &lt;&lt; Relaunch ByGroup

**Description:** Opens the platform launch window and recalls the settings that were used to create the report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	By( _bycol ),
	Run
);
obj[1] << Relaunch ByGroup;

```

#### Remove Column Switcher

**Syntax:** obj &lt;&lt; Remove Column Switcher

**Description:** Removes the most recent Column Switcher that has been added to the platform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
Wait( 2 );
obj << Remove Column Switcher;

```

#### Remove Local Data Filter

**Syntax:** obj &lt;&lt; Remove Local Data Filter

**Description:** If a local data filter has been created, this removes it and restores the platform to use all the data in the data table directly

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dist = dt << Distribution(
	Nominal Distribution( Column( :country ) ),
	Local Data Filter(
		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),
		Mode( Show( 1 ), Include( 1 ) )
	)
);
Wait( 2 );
dist << remove local data filter;

```

#### Render Preset

**Syntax:** Render Preset( preset )

**Description:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

#### Report

**Syntax:** obj &lt;&lt; Report;Report( obj )

**Description:** Returns a reference to the report object.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Report View

**Syntax:** obj &lt;&lt; Report View( "Full"|"Summary" )

**Description:** The report view determines the level of detail visible in a platform report. Full shows all of the detail, while Summary shows only select content, dependent on the platform. For customized behavior, display boxes support a <<Set Summary Behavior message.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
);
obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**Syntax:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description:** Creates a JSL script to produce this analysis, and save it as a table property in the data table. You can specify a name for the script. The Append Suffix option appends a numeric suffix to the script name, which differentiates the script from an existing script with the same name. The Prompt option prompts the user to specify a script name. The Replace option replaces an existing script with the same name.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**Syntax:** obj &lt;&lt; Save ByGroup Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**Syntax:** obj &lt;&lt; Save ByGroup Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**Syntax:** obj &lt;&lt; Save Script for All Objects

**Description:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
);
obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**Syntax:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Description:** Saves a script for all report objects to the current data table. This option is useful when you have multiple reports in the window. The script is named after the first platform unless you specify the script name in quotes.

**Example 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	By( _bycol ),
	Run
);
obj[1] << Save Script for All Objects To Data Table;

```

**Example 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	By( _bycol ),
	Run
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**Syntax:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description:** Create a JSL script to produce this analysis, and save it as a table property in the data table.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**Syntax:** obj &lt;&lt; Save Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
);
obj << Save Script to Journal;

```

#### Save Script to Report

**Syntax:** obj &lt;&lt; Save Script to Report

**Description:** Create a JSL script to produce this analysis, and show it in the report itself. Useful to preserve a printed record of what was done.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
);
obj << Save Script to Report;

```

#### Save Script to Script Window

**Syntax:** obj &lt;&lt; Save Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
);
obj << Save Script to Script Window;

```

#### SendToByGroup

**Syntax:** SendToByGroup( {":Column == level"}, command );

**Description:** Sends platform commands or display customization commands to each level of a by-group.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	By( :Sex ),
	SendToByGroup(
		{:sex == "F"},
		Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) )
	),
	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) )
);

```

#### SendToEmbeddedScriptable

**Syntax:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Description:** SendToEmbeddedScriptable restores settings of embedded scriptable objects.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
dt << Life Distribution(
	Y( :Time ),
	Censor( :Censor ),
	Censor Code( 1 ),
	<<Fit Weibull,
	SendToEmbeddedScriptable(
		Dispatch(
			{"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},
			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}
		)
	)
);

```

#### SendToReport

**Syntax:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Description:** Send To Report is used in tandem with the Dispatch command to customize the appearance of a report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :age ) ),
	Continuous Distribution( Column( :weight ) ),
	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) )
);

```

#### Sync to Data Table Changes

**Syntax:** obj &lt;&lt; Sync to Data Table Changes

**Description:** Sync with the exclude and data changes that have been made.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
Wait( 1 );
dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );
dist << Sync To Data Table Changes;

```

#### Title

**Syntax:** obj &lt;&lt; Title( "new title" )

**Description:** Sets the title of the platform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
);
obj << Title( "My Platform" );

```

#### Top Report

**Syntax:** obj &lt;&lt; Top Report

**Description:** Returns a reference to the root node in the report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
);
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Transform Column

**Syntax:** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Description:** Create a transform column in the local context of an object, usually a platform. The transform column is active only for the lifetime of the platform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),
	Continuous Distribution( Column( :"age^2"n ) )
);

```

#### View Web XML

**Syntax:** obj &lt;&lt; View Web XML

**Description:** Returns the XML code that is used to create the interactive HTML report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

#### Window View

**Syntax:** obj = Estimate Only Variance Components(...Window View( "Visible"|"Invisible"|"Private" )...)

**Description:** Set the type of the window to be created for the report. By default a Visible report window will be created. An Invisible window will not appear on screen, but is discoverable by functions such as Window(). A Private window responds to most window messages but is not discoverable and must be addressed through the report object

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );
eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;
biv << Close Window;
New Window( "Bivariate Equation",
	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) )
);

```

## Generalized Linear Mixed Model > Fit GLMM

### Item Messages

#### Between-Within Degrees of Freedom

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Between-Within Degrees of Freedom( state=0|1 ))

**Description:** Replaces the standard errors with unadjusted estimates and degrees of freedom to between-within based throughout the report. To use between-within degrees of freedom in a multiple comparisons report, you must select this option prior to adding a multiple comparisons report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Repeated Measures Binomial.jmp" );
fm = Fit Model(
	Y( :No Headache, :Number of Patients ),
	Effects( :Treatment, :Week, :Treatment * :Week ),
	Personality( "Generalized Linear Mixed Model" ),
	Subject( :"Treatment(Clinic)"n ),
	Repeated Effects( :Week Continuous ),
	Repeated Structure( "AR(1)" ),
	Generalized Distribution( "Binomial" ),
	Link Function( "Logit" ),
	Run()
);
Wait( 1 );
fm << (Fit[1] << "Between-Within Degrees of Freedom"n( 1 ));

```

#### Conditional Contour Profiler

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Conditional Contour Profiler( state=0|1 ))

**Description:** Shows or hides a contour profiler of the conditional response graphically for two factors at a time. This option is available only when the model contains at least two continuous effects and at least one random effect.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Design Experiment/Vinyl Data.jmp" );
fm = dt << Fit Model(
	Y( :thickness ),
	Effects(
		:m1 & RS & Mixture, :m2 & RS & Mixture, :m3 & RS & Mixture, :m1 * :m2, :m1 * :m3,
		:m1 * :extrusion rate, :m1 * :temperature, :m2 * :m3, :m2 * :extrusion rate,
		:m2 * :temperature, :m3 * :extrusion rate, :m3 * :temperature,
		:extrusion rate * :temperature
	),
	Random Effects( :Whole Plots ),
	No Intercept( 1 ),
	Center Polynomials( 0 ),
	NoBounds( 1 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Poisson" ),
	Run
);
Wait( 0 );
fm << (Fit[1] << Conditional Contour Profiler( 1 ));

```

#### Conditional Diagnostic Bundle

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Conditional Diagnostic Bundle( state=0|1 ))

**Description:** Shows or hides a group of diagnostic plots that are helpful in deciding how well a regression model fits the observed data. This option is not available if Binomial is selected as the Distribution or if there are no random effects in the model.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Manufacturing Defect Counts.jmp" );
fm = dt << Fit Model(
	Y( :Defect ),
	Effects( :Finishing Treatment ),
	Random Effects( :Lot, :Lot * :Finishing Treatment, :Lot * :Unit in Lot ),
	NoBounds( 1 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Poisson" ),
	Run
);
Wait( 1 );
fm << (fit[1] << Conditional Diagnostic Bundle( 1 ));

```

#### Conditional Mean CI

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Conditional Mean CI)

**Description:** Saves two new columns to the data table. The new columns contain the lower and upper confidence limits for the expected value of the conditional prediction. The confidence intervals include random effects estimates for models that contain random effects. This option is available only when the model contains at least one random effect.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
fm << (Fit[1] << Conditional Mean CI);

```

#### Conditional Mixture Profiler

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Conditional Mixture Profiler( state=0|1 ))

**Description:** Shows or hides a mixture profiler that shows the contours of the conditional response on a ternary plot. This option is available only when the model contains at least one random effect and if the Mixture Effect attribute is applied to three or more factors in the model or the Mixture property is applied to three or more factor columns.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Design Experiment/Vinyl Data.jmp" );
fm = dt << Fit Model(
	Y( :thickness ),
	Effects(
		:m1 & RS & Mixture, :m2 & RS & Mixture, :m3 & RS & Mixture, :m1 * :m2, :m1 * :m3,
		:m1 * :extrusion rate, :m1 * :temperature, :m2 * :m3, :m2 * :extrusion rate,
		:m2 * :temperature, :m3 * :extrusion rate, :m3 * :temperature,
		:extrusion rate * :temperature
	),
	Random Effects( :Whole Plots ),
	No Intercept( 1 ),
	Center Polynomials( 0 ),
	NoBounds( 1 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Poisson" ),
	Run
);
Wait( 0 );
fm << (Fit[1] << Conditional Mixture Profiler( 1 ));

```

#### Conditional Prediction Formula

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Conditional Prediction Formula)

**Description:** Saves a new formula column to the data table. The new column contains the prediction formula for the conditional mean. This option is available only when the model contains at least one random effect.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
fm << (Fit[1] << Conditional Prediction Formula);

```

#### Conditional Profiler

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Conditional Profiler( state=0|1 ))

**Description:** Shows or hides the prediction profiler, which is used to graphically explore the conditional prediction equation by slicing it one factor at a time. The prediction profiler contains features for optimization. This option is available only when the model contains at least one random effect.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
fm << (Fit[1] << Conditional Profiler( 1 ));

```

#### Conditional Surface Profiler

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Conditional Surface Profiler( state=0|1 ))

**Description:** Shows or hides a three-dimensional surface plot of the conditional response. This option is available only when the model contains at least two effects and at least one random effect.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
fm << (Fit[1] << Conditional Surface Profiler( 1 ));

```

#### Containment Degrees of Freedom

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Containment Degrees of Freedom( state=0|1 ))

**Description:** Replaces the standard errors with unadjusted estimates and degrees of freedom to containment-based throughout the report. To use containment degrees of freedom in a multiple comparisons report, you must select this option prior to adding a multiple comparisons report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
Wait( 1 );
fm << (Fit[1] << Containment Degrees of Freedom( 1 ));

```

#### Contour Profiler

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Contour Profiler( state=0|1 ))

**Description:** Shows or hides a contour profiler of the marginal response graphically for two factors at a time. This option is available only when the model contains at least two continuous fixed effects.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Design Experiment/Vinyl Data.jmp" );
fm = dt << Fit Model(
	Y( :thickness ),
	Effects(
		:m1 & RS & Mixture, :m2 & RS & Mixture, :m3 & RS & Mixture, :m1 * :m2, :m1 * :m3,
		:m1 * :extrusion rate, :m1 * :temperature, :m2 * :m3, :m2 * :extrusion rate,
		:m2 * :temperature, :m3 * :extrusion rate, :m3 * :temperature,
		:extrusion rate * :temperature
	),
	Random Effects( :Whole Plots ),
	No Intercept( 1 ),
	Center Polynomials( 0 ),
	NoBounds( 1 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Poisson" ),
	Run
);
Wait( 0 );
fm << (Fit[1] << Contour Profiler( 1 ));

```

#### Correlation of Fixed Effects

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Correlation of Fixed Effects( state=0|1 ))

**Description:** Shows or hides the correlation matrix for the fixed effects in the model.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
Wait( 1 );
fm << (Fit[1] << Correlation of Fixed Effects( 1 ));

```

#### Covariance of All Parameters

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Covariance of All Parameters( state=0|1 ))

**Description:** Shows or hides the covariance matrix for all effects in the model.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
Wait( 1 );
fm << (Fit[1] << Covariance of All Parameters( 1 ));

```

#### Covariance of Covariance Parameters

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Covariance of Covariance Parameters( state=0|1 ))

**Description:** Shows or hides the covariance matrix for the random effects in the model.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
Wait( 1 );
fm << (Fit[1] << Covariance of Covariance Parameters( 1 ));

```

#### Covariance of Fixed Effects

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Covariance of Fixed Effects( state=0|1 ))

**Description:** Shows or hides the covariance matrix for the fixed effects in the model.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
Wait( 1 );
fm << (Fit[1] << Covariance of Fixed Effects( 1 ));

```

#### Diagnostic Bundle

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Diagnostic Bundle( state=0|1 ))

**Description:** Shows or hides a group of diagnostic plots that are helpful in deciding how well a regression model fits the observed data. This option is not available if Binomial is selected as the Distribution or if there are random effects in the model.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Manufacturing Defect Counts.jmp" );
fm = dt << Fit Model(
	Y( :Defect ),
	Effects( :Finishing Treatment ),
	NoBounds( 1 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Poisson" ),
	Run
);
Wait( 1 );
fm << (fit[1] << Diagnostic Bundle( 1 ));

```

#### Empirical Standard Errors

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Empirical Standard Errors( state=0|1 ))

**Description:** Replaces the standard errors with sandwich estimates throughout the report. To use sandwich estimates in a multiple comparisons report, you must select this option prior to adding a multiple comparisons report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
Wait( 1 );
fm << (Fit[1] << Empirical Standard Errors( 1 ));

```

#### Fit Statistics

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Fit Statistics( state=0|1 ))

**Description:** Shows or hides the Fit Statistics and Model Summary reports that include information about the specification and goodness of fit statistics for the model. On by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run( Fit( Fit Statistics( 0 ) ) )
);
Wait( 1 );
fm << (Fit[1] << Fit Statistics( 1 ));

```

#### Fixed Effects Parameter Estimates

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Fixed Effects Parameter Estimates( state=0|1 ))

**Description:** Shows or hides a table of fixed effects parameter estimates. On by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run( Fit( Fixed Effects Parameter Estimates( 0 ) ) )
);
Wait( 1 );
fm << (Fit[1] << Fixed Effects Parameter Estimates( 1 ));

```

#### Fixed Effects Tests

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Fixed Effects Tests( state=0|1 ))

**Description:** Shows or hides the tests of fixed effects. This option is available only when the model contains at least one fixed effect. On by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run( Fit( Fixed Effects Tests( 0 ) ) )
);
Wait( 1 );
fm << (Fit[1] << Fixed Effects Tests( 1 ));

```

#### Mean Confidence Interval

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Mean Confidence Interval)

**Description:** Saves two new columns to the data table. The new columns contain the lower and upper confidence limits for the mean response.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
fm << (Fit[1] << Mean Confidence Interval);

```

#### Mixture Profiler

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Mixture Profiler( state=0|1 ))

**Description:** Shows or hides a mixture profiler that shows the contours of the marginal response on a ternary plot. This option is available only if the Mixture Effect attribute is applied to three or more factors in the model or the Mixture property is applied to three or more factor columns.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Design Experiment/Vinyl Data.jmp" );
fm = dt << Fit Model(
	Y( :thickness ),
	Effects(
		:m1 & RS & Mixture, :m2 & RS & Mixture, :m3 & RS & Mixture, :m1 * :m2, :m1 * :m3,
		:m1 * :extrusion rate, :m1 * :temperature, :m2 * :m3, :m2 * :extrusion rate,
		:m2 * :temperature, :m3 * :extrusion rate, :m3 * :temperature,
		:extrusion rate * :temperature
	),
	Random Effects( :Whole Plots ),
	No Intercept( 1 ),
	Center Polynomials( 0 ),
	NoBounds( 1 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Poisson" ),
	Run
);
Wait( 0 );
fm << (Fit[1] << Mixture Profiler( 1 ));

```

#### Multiple Comparisons

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Multiple Comparisons( Effect( effect ), &lt;options&gt; ))

**Description:** Generates least squares means estimates or user-defined estimates. These estimates enable you to do comparisons with the overall average, comparisons with a control, or pairwise comparisons. This option is available only when the model contains at least one fixed effect.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Target Level( "Pass" ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
Wait( 1 );
fm << (fit[1] << Multiple Comparisons(
	Effect( :Program ),
	Least Squares Means Plot,
	Student's t( 1 )
));

```

#### Odds Ratios

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Odds Ratios( state=0|1 ))

**Description:** Shows or hides a report that contains odds ratios for categorical predictors, and unit odds ratios and range odds ratios for continuous predictors.

#### Prediction Formula

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Prediction Formula)

**Description:** Saves a new formula column to the data table. The new column contains the prediction formula for the marginal mean.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
fm << (Fit[1] << Prediction Formula);

```

#### Prediction and Interval Formulas

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Prediction and Interval Formulas)

**Description:** Saves new columns to the data table. The columns contain formulas for the predictions and confidence limits. The limits columns that are created by this option contain properties that are used by the Prediction Profiler.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
fm << (Fit[1] << Prediction and Interval Formulas);

```

#### Profiler

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Profiler( state=0|1 ))

**Description:** Shows or hides the prediction profiler, which is used to graphically explore the marginal prediction equation by slicing it one factor at a time. The prediction profiler contains features for optimization. This option is available only when the model contains at least one fixed effect.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
fm << (Fit[1] << Profiler( 1 ));

```

#### Random Coefficients

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Random Coefficients( state=0|1 ))

**Description:** Shows or hides a report of the estimates for the random coefficients. This option is available only when the model contains at least one random effect. On by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run( Fit( Random Coefficients( 0 ) ) )
);
Wait( 1 );
fm << (Fit[1] << Random Coefficients( 1 ));
Report( fm )["Random Coefficients"] << Close( 0 );

```

#### Random Effects Covariance Parameter Estimates

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Random Effects Covariance Parameter Estimates( state=0|1 ))

**Description:** Shows or hides a table of random effects covariance parameter estimates. This option is available only when the model contains at least one random effect. On by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run( Fit( Random Effects Covariance Parameter Estimates( 0 ) ) )
);
Wait( 1 );
fm << (Fit[1] << Random Effects Covariance Parameter Estimates( 1 ));

```

#### Random Effects Predictions

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Random Effects Predictions( state=0|1 ))

**Description:** Shows or hides a table of random effect predictions. This option is available only when the model contains at least one random effect.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
Wait( 1 );
fm << (Fit[1] << Random Effects Predictions( 1 ));

```

#### Save Conditional Residual Formula

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Save Conditional Residual Formula )

**Description:** Saves a new formula column to the data table. The new column contains a formula for the conditional residuals, given in the form Y minus the prediction formula. This option is not available if Binomial is selected as the Distribution or if there are random effects in the model.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Manufacturing Defect Counts.jmp" );
fm = dt << Fit Model(
	Y( :Defect ),
	Effects( :Finishing Treatment ),
	Random Effects( :Lot, :Lot * :Finishing Treatment, :Lot * :Unit in Lot ),
	NoBounds( 1 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Poisson" ),
	Run
);
fm << (fit[1] << Save Conditional Residual Formula);

```

#### Save Residual Formula

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Save Residual Formula )

**Description:** Saves a new formula column to the data table. The new column contains a formula for the marginal residuals, given in the form Y minus the prediction formula. This option is not available if Binomial is selected as the Distribution.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Manufacturing Defect Counts.jmp" );
fm = dt << Fit Model(
	Y( :Defect ),
	Effects( :Finishing Treatment ),
	Random Effects( :Lot, :Lot * :Finishing Treatment, :Lot * :Unit in Lot ),
	NoBounds( 1 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Poisson" ),
	Run
);
fm << (fit[1] << Save Residual Formula);

```

#### Save Simulation Formula

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Save Simulation Formula)

**Description:** Saves a new formula column to the data table. The new column can be used to create random response values from the fitted model. You can use the formula column with the Simulate feature in JMP Pro. This option is not available if a By variable is used. Use subset data tables if By group simulation formulas are needed.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
fm << (Fit[1] << Save Simulation Formula);

```

#### Sequential Tests

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Sequential Tests( state=0|1 ))

**Description:** Shows or hides the Sequential (Type 1) Tests report that contains the sums of squares as effects are added to the model sequentially. This option is available only when the model contains at least one fixed effect.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
Wait( 1 );
fm << (Fit[1] << Sequential Tests( 1 ));

```

#### Standard Error of Conditional Predicted

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Standard Error of Conditional Predicted)

**Description:** Saves a new column to the data table. The new column contains the standard errors of the conditional mean predictions. This option is available only when the model contains at least one random effect.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
fm << (Fit[1] << Standard Error of Conditional Predicted);

```

#### Standard Error of Predicted

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Standard Error of Predicted)

**Description:** Saves a new column to the data table. The new column contains the standard errors of the marginal mean predictions.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
fm << (Fit[1] << Standard Error of Predicted);

```

#### Surface Profiler

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Surface Profiler( state=0|1 ))

**Description:** Shows or hides a three-dimensional surface plot of the marginal response. This option is available only when the model contains at least two effects.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
fm << (Fit[1] << Surface Profiler( 1 ));

```

## Generalized Linear Mixed Model

### Associated Constructors

#### Fit GLMM Platform

**Syntax:** Fit Model( Y( columns ), Effects( columns ), Personality( "Generalized Linear Mixed Model" ) )

**Description:** Fits a generalized linear mixed model. These models can be used for random coefficients, split-plots, and blocked designs when the response is non-Gaussian. The response distributions can accommodate continuous, categorical, count, and time-to-event response data.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);

```

### Columns

#### By

**Syntax:** obj &lt;&lt; By( column(s) )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	By( _bycol ),
	Run
);

```

### Item Messages

#### Fit

**Syntax:** Fit Model(...Run( Fit( options ) )...);obj &lt;&lt; Fit( options );obj &lt;&lt; (Fit[number] &lt;&lt; option)

**Description:** Enables you to send messages to the platform. This option can be used in a model launch script or to generate a handle to a specific model in the report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run( Fit( Fit Statistics( 0 ) ) )
);
Wait( 1 );
fm << (Fit[1] << Fit Statistics( 1 ));

```

#### Model Dialog

**Syntax:** obj &lt;&lt; Model Dialog

**Description:** Shows the completed Fit Model launch window for the current analysis.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
fm << Model Dialog;

```

### Shared Item Messages

#### Action

**Syntax:** obj &lt;&lt; Action

**Description:** All-purpose trapdoor within a platform to insert expressions to evaluate. Temporarily sets the DisplayBox and DataTable contexts to the Platform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

#### Apply Preset

**Syntax:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**Description:** Apply a previously created preset to the object, updating the options and customizations to match the saved settings.

**Anonymous preset**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();
dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );
Wait( 1 );
obj2 << Apply Preset( preset );

```

**Search by name**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

**Search within folder(s)**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

#### Broadcast

**Syntax:** obj &lt;&lt; Broadcast(message)

**Description:** Broadcasts a message to a platform. If return results from individual objects are tables, they are concatenated if possible, and the final format is identical to either the result from the Save Combined Table option in a Table Box or the result from the Concatenate option using a Source column. Other than those, results are stored in a list and returned.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
objs = Control Chart Builder(
	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),
	By( :OPERATOR )
);
objs[1] << Broadcast( Save Summaries );

```

#### Column Switcher

**Syntax:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Description:** Adds a control panel for changing the platform&apos;s variables

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);

```

#### Copy ByGroup Script

**Syntax:** obj &lt;&lt; Copy ByGroup Script

**Description:** Create a JSL script to produce this analysis, and put it on the clipboard.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	By( _bycol ),
	Run
);
obj[1] << Copy ByGroup Script;

```

#### Copy Script

**Syntax:** obj &lt;&lt; Copy Script

**Description:** Create a JSL script to produce this analysis, and put it on the clipboard.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
obj << Copy Script;

```

#### Data Table Window

**Syntax:** obj &lt;&lt; Data Table Window

**Description:** Move the data table window for this analysis to the front.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
obj << Data Table Window;

```

#### Get By Levels

**Syntax:** obj &lt;&lt; Get By Levels

**Description:** Returns an associative array mapping the by group columns to their values.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

#### Get ByGroup Script

**Syntax:** obj &lt;&lt; Get ByGroup Script

**Description:** Creates a script (JSL) to produce this analysis and returns it as an expression.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	By( _bycol ),
	Run
);
t = obj[1] << Get ByGroup Script;
Show( t );

```

#### Get Container

**Syntax:** obj &lt;&lt; Get Container

**Description:** Returns a reference to the container box that holds the content for the object.

**General**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**Platform with Filter**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Show Control Panel( 0 ),
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),
	Local Data Filter(
		Add Filter(
			columns( :age, :sex, :height ),
			Where( :age == {12, 13, 14} ),
			Where( :sex == "F" ),
			Where( :height >= 55 ),
			Display( :age, N Items( 6 ) )
		)
	)
);
New Window( "platform boxes",
	H List Box(
		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),
		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )
	)
);

```

#### Get Data Table

**Syntax:** obj &lt;&lt; Get Data Table

**Description:** Returns a reference to the data table.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
t = obj << Get Datatable;
Show( N Rows( t ) );

```

#### Get Group Platform

**Syntax:** obj &lt;&lt; Get Group Platform

**Description:** Return the Group Platform object if this platform is part of a Group. Otherwise, returns Empty().

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );
group = biv[1] << Get Group Platform;
Wait( 1 );
group << Layout( "Arrange in Tabs" );

```

#### Get Script

**Syntax:** obj &lt;&lt; Get Script

**Description:** Creates a script (JSL) to produce this analysis and returns it as an expression.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
t = obj << Get Script;
Show( t );

```

#### Get Script With Data Table

**Syntax:** obj &lt;&lt; Get Script With Data Table

**Description:** Creates a script(JSL) to produce this analysis specifically referencing this data table and returns it as an expression.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
t = obj << Get Script With Data Table;
Show( t );

```

#### Get Timing

**Syntax:** obj &lt;&lt; Get Timing

**Description:** Times the platform launch.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
t = obj << Get Timing;
Show( t );

```

#### Get Web Support

**Syntax:** obj &lt;&lt; Get Web Support

**Description:** Return a number indicating the level of Interactive HTML support for the display object. 1 means some or all elements are supported. 0 means no support.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

#### Get Where Expr

**Syntax:** obj &lt;&lt; Get Where Expr

**Description:** Returns the Where expression for the data subset, if the platform was launched with By() or Where(). Otherwise, returns Empty()

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );
Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

#### Ignore Platform Preferences

**Syntax:** Ignore Platform Preferences( state=0|1 )

**Description:** Ignores the current settings of the platform&apos;s preferences. The message is ignored when sent to the platform after creation.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Ignore Platform Preferences( 1 ),
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

#### Local Data Filter

**Syntax:** obj &lt;&lt; Local Data Filter

**Description:** To filter data to specific groups or ranges, but local to this platform

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :country ) ),
	Local Data Filter(
		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),
		Mode( Show( 1 ), Include( 1 ) )
	)
);

```

#### New JSL Preset

**Syntax:** New JSL Preset( preset )

**Description:** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
preset = obj << New JSL Preset( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) );
Wait( 1 );
obj << Apply Preset( preset );

```

#### New Preset

**Syntax:** obj = New Preset()

**Description:** Create an anonymous preset representing the options and customizations applied to the object. This object can be passed to Apply Preset to copy the settings to another object of the same type.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

#### Paste Local Data Filter

**Syntax:** obj &lt;&lt; Paste Local Data Filter

**Description:** Apply the local data filter from the clipboard to the current report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
filter = dist << Local Data Filter(
	Add Filter( columns( :Region ), Where( :Region == "MW" ) )
);
filter << Copy Local Data Filter;
dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );
Wait( 1 );
dist2 << Paste Local Data Filter;

```

#### Redo Analysis

**Syntax:** obj &lt;&lt; Redo Analysis

**Description:** Rerun this same analysis in a new window. The analysis will be different if the data has changed.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
obj << Redo Analysis;

```

#### Redo ByGroup Analysis

**Syntax:** obj &lt;&lt; Redo ByGroup Analysis

**Description:** Rerun this same analysis in a new window. The analysis will be different if the data has changed.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	By( _bycol ),
	Run
);
obj[1] << Redo ByGroup Analysis;

```

#### Relaunch Analysis

**Syntax:** obj &lt;&lt; Relaunch Analysis

**Description:** Opens the platform launch window and recalls the settings that were used to create the report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
obj << Relaunch Analysis;

```

#### Relaunch ByGroup

**Syntax:** obj &lt;&lt; Relaunch ByGroup

**Description:** Opens the platform launch window and recalls the settings that were used to create the report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	By( _bycol ),
	Run
);
obj[1] << Relaunch ByGroup;

```

#### Remove Column Switcher

**Syntax:** obj &lt;&lt; Remove Column Switcher

**Description:** Removes the most recent Column Switcher that has been added to the platform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
Wait( 2 );
obj << Remove Column Switcher;

```

#### Remove Local Data Filter

**Syntax:** obj &lt;&lt; Remove Local Data Filter

**Description:** If a local data filter has been created, this removes it and restores the platform to use all the data in the data table directly

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dist = dt << Distribution(
	Nominal Distribution( Column( :country ) ),
	Local Data Filter(
		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),
		Mode( Show( 1 ), Include( 1 ) )
	)
);
Wait( 2 );
dist << remove local data filter;

```

#### Render Preset

**Syntax:** Render Preset( preset )

**Description:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

#### Report

**Syntax:** obj &lt;&lt; Report;Report( obj )

**Description:** Returns a reference to the report object.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Report View

**Syntax:** obj &lt;&lt; Report View( "Full"|"Summary" )

**Description:** The report view determines the level of detail visible in a platform report. Full shows all of the detail, while Summary shows only select content, dependent on the platform. For customized behavior, display boxes support a <<Set Summary Behavior message.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**Syntax:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description:** Creates a JSL script to produce this analysis, and save it as a table property in the data table. You can specify a name for the script. The Append Suffix option appends a numeric suffix to the script name, which differentiates the script from an existing script with the same name. The Prompt option prompts the user to specify a script name. The Replace option replaces an existing script with the same name.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**Syntax:** obj &lt;&lt; Save ByGroup Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**Syntax:** obj &lt;&lt; Save ByGroup Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**Syntax:** obj &lt;&lt; Save Script for All Objects

**Description:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**Syntax:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Description:** Saves a script for all report objects to the current data table. This option is useful when you have multiple reports in the window. The script is named after the first platform unless you specify the script name in quotes.

**Example 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	By( _bycol ),
	Run
);
obj[1] << Save Script for All Objects To Data Table;

```

**Example 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	By( _bycol ),
	Run
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**Syntax:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description:** Create a JSL script to produce this analysis, and save it as a table property in the data table.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**Syntax:** obj &lt;&lt; Save Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
obj << Save Script to Journal;

```

#### Save Script to Report

**Syntax:** obj &lt;&lt; Save Script to Report

**Description:** Create a JSL script to produce this analysis, and show it in the report itself. Useful to preserve a printed record of what was done.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
obj << Save Script to Report;

```

#### Save Script to Script Window

**Syntax:** obj &lt;&lt; Save Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
obj << Save Script to Script Window;

```

#### SendToByGroup

**Syntax:** SendToByGroup( {":Column == level"}, command );

**Description:** Sends platform commands or display customization commands to each level of a by-group.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	By( :Sex ),
	SendToByGroup(
		{:sex == "F"},
		Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) )
	),
	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) )
);

```

#### SendToEmbeddedScriptable

**Syntax:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Description:** SendToEmbeddedScriptable restores settings of embedded scriptable objects.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
dt << Life Distribution(
	Y( :Time ),
	Censor( :Censor ),
	Censor Code( 1 ),
	<<Fit Weibull,
	SendToEmbeddedScriptable(
		Dispatch(
			{"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},
			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}
		)
	)
);

```

#### SendToReport

**Syntax:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Description:** Send To Report is used in tandem with the Dispatch command to customize the appearance of a report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :age ) ),
	Continuous Distribution( Column( :weight ) ),
	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) )
);

```

#### Sync to Data Table Changes

**Syntax:** obj &lt;&lt; Sync to Data Table Changes

**Description:** Sync with the exclude and data changes that have been made.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
Wait( 1 );
dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );
dist << Sync To Data Table Changes;

```

#### Title

**Syntax:** obj &lt;&lt; Title( "new title" )

**Description:** Sets the title of the platform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
obj << Title( "My Platform" );

```

#### Top Report

**Syntax:** obj &lt;&lt; Top Report

**Description:** Returns a reference to the root node in the report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Transform Column

**Syntax:** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Description:** Create a transform column in the local context of an object, usually a platform. The transform column is active only for the lifetime of the platform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),
	Continuous Distribution( Column( :"age^2"n ) )
);

```

#### View Web XML

**Syntax:** obj &lt;&lt; View Web XML

**Description:** Returns the XML code that is used to create the interactive HTML report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

#### Window View

**Syntax:** obj = Fit GLMM Platform(...Window View( "Visible"|"Invisible"|"Private" )...)

**Description:** Set the type of the window to be created for the report. By default a Visible report window will be created. An Invisible window will not appear on screen, but is discoverable by functions such as Window(). A Private window responds to most window messages but is not discoverable and must be addressed through the report object

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );
eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;
biv << Close Window;
New Window( "Bivariate Equation",
	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) )
);

```

## Generalized Regression > Generalized Regression Fit

### Item Messages

#### Active Parameter Estimates

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Active Parameter Estimates( state=0|1 ))

**Description:** Shows or hides a table of active, or nonzero, parameter estimates for the currently selected model. This option is not available for Maximum Likelihood or Ridge Regression models.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
Wait( 1 );
fm << (fit[1] << Active Parameter Estimates( 1 ));

```

#### Confusion Matrix

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Confusion Matrix( &lt;probability=0.5&gt; ))

**Description:** Generates a crosstabulation matrix of actual and predicted responses. Use the optional argument to specify a threshold probability other than 0.5. This option is available only when the specified Distribution is Binomial, Multinomial, or Ordinal Logistic. "0.5" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Binomial" ),
	Run(
		Fit(
			Estimation Method( "Logistic Regression" ),
			Validation Method( "None" ),
			Confusion Matrix( 0.5 )
		)
	)
);

```

#### Cook's D Influence

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Cook&apos;s D Influence)

**Description:** Saves a new column to the original data table. The new column contains the values for Cook&apos;s D Influence statistic. This option is available only if the specified Distribution is Normal and the specified Estimation Method is Standard Least Squares.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Run( Fit( Estimation Method( "Standard Least Squares" ) ) )
);
fm << (fit[1] << Cook's D Influence);

```

#### Correlation of Estimates

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Correlation of Estimates( state=0|1 ))

**Description:** Shows or hides the matrix of correlations between the parameter estimates for the specified fit.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
fm << (fit[1] << Correlation of Estimates);

```

#### Covariance of Estimates

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Covariance Of Estimates( state=0|1 ))

**Description:** Shows or hides the matrix of covariances between the parameter estimates for the specified fit.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
fm << (fit[1] << Covariance of Estimates);

```

#### Custom Test

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Custom Test( [l1, l2, l3, ... ], &lt;Label( text )&gt; ))

**Description:** Shows or hides a Custom Test report that enables you to test a custom hypothesis. If the model has a Solution Path, the custom test results update as you update the solution.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :BMI, :BP, :LDL, :HDL, :TCH ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Run( Fit( Estimation Method( "Standard Least Squares" ) ) )
);
fm << (fit[1] << Custom Test( [0 0 0 1 -1 0], Label() ));

```

#### Decision Threshold

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Decision Threshold( state=0|1, Set Probability Threshold( number=0.5 ))

**Description:** Shows or hides Decision Thresholds reports for the Training, Validation, and Test sets, if specified. Each report contains a graph of the distribution of fitted probabilities for each model, confusion matrices for each model, and classification graphs to compare the model fits. This option is available only for binary categorical responses.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Liver Cancer.jmp" );
fm = dt << Fit Model(
	Validation( :Validation ),
	Y( :Severity ),
	Effects(
		:BMI, :Age, :Time, :Markers, :Hepatitis, :Jaundice, :BMI * :Age, :BMI * :Time,
		:BMI * :Markers, :BMI * :Hepatitis, :BMI * :Jaundice, :Age * :Time, :Age * :Markers,
		:Age * :Hepatitis, :Age * :Jaundice, :Time * :Markers, :Time * :Hepatitis,
		:Time * :Jaundice, :Markers * :Hepatitis, :Markers * :Jaundice,
		:Hepatitis * :Jaundice
	),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Binomial" ),
	Run(
		Fit(
			Estimation Method( Elastic Net( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
Wait( 0 );
fm << (fit[1] << Decision Threshold( 1 ));

```

#### Diagnostic Bundle

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Diagnostic Bundle( state=0|1 ))

**Description:** Shows or hides a group of diagnostic plots that are helpful in deciding how well a regression model fits the observed data. A set of plots is available for the Training set, and for the Validation and Test sets if you are using these. Not available when the specified Distribution is Binomial, Multinomial, Ordinal Logistic, or Cox Proportional Hazards.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Validation( :Validation ),
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Run( Fit( Estimation Method( "Lasso" ), Validation Method( "Validation Column" ) ) )
);
Wait( 1 );
fm << (fit[1] << Diagnostic Bundle( 1 ));

```

#### Distribution Profiler

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Distribution Profiler( state=0|1 ))

**Description:** Shows or hides a profiler of the cumulative distribution function of the predictors and the response. The response is shown in the right-most cell. This option is not available when the specified Distribution is Binomial or Quantile Regression.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
Fit Model(
	Y( :satell ),
	Effects(
		:color, :spine, :width, :weight, :color * :spine, :color * :width, :color * :weight,
		:spine * :width, :spine * :weight, :width * :weight
	),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Poisson" ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "BIC" ),
			Distribution Profiler( 1 )
		)
	)
);

```

#### Effect Tests

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Effect Tests( state=0|1 ))

**Description:** Shows or hides tests for each effect. Each effect test is testing the null hypothesis that all parameters associated with that effect are zero. On by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
Wait( 1 );
fm << (fit[1] << Effect Tests( 0 ));

```

#### Get Prediction Formula

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Get Prediction Formula)

**Description:** Constructs a script to create a prediction formula column and returns it.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
fm << (fit[1] << Get Prediction Formula);

```

#### Hats

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Hats)

**Description:** Saves a new column to the original data table. The new column contains the diagonal elements of the hat matrix, which are sometimes called hat values. This option is available only if the specified Distribution is Normal and the specified Estimation Method is Standard Least Squares.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Run( Fit( Estimation Method( "Standard Least Squares" ) ) )
);
fm << (fit[1] << Hats);

```

#### Hazard Profiler

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Hazard Profiler( state=0|1 ))

**Description:** Shows or hides a profiler that shows the hazard rate as a function of the predictors and the response. The response is shown in the right-most cell. This option is available only when the specified Distribution is Normal, Exponential, Weibull, Lognormal, or Cox Proportional Hazards.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
Fit Model(
	Censor( :censor ),
	Censor Code( "1" ),
	Y( :Time ),
	Effects( :Cell Type, :Treatment, :Prior, :Age, :Diag Time, :KPS ),
	No Intercept,
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Cox Proportional Hazards" ),
	Run(
		Fit(
			Estimation Method( "Maximum Likelihood" ),
			Validation Method( "None" ),
			Hazard Profiler( 1 )
		)
	)
);

```

#### Hazard Ratios

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Hazard Ratios( state=0|1 ))

**Description:** Shows or hides a report that contains hazard ratios for categorical predictors, and unit hazard ratios and range hazard ratios for continuous predictors. A hazard ratio is the ratio of the hazard rate for two events. This option is available only when the specified Distribution is Cox Proportional Hazards.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
Fit Model(
	Censor( :censor ),
	Censor Code( "1" ),
	Y( :Time ),
	Effects( :Cell Type, :Treatment, :Prior, :Age, :Diag Time, :KPS ),
	No Intercept,
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Cox Proportional Hazards" ),
	Run(
		Fit(
			Estimation Method( "Maximum Likelihood" ),
			Validation Method( "None" ),
			Hazard Ratios( 1 )
		)
	)
);

```

#### Hide Inactive Paths

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Hide Inactive Paths( state=0|1 ))

**Description:** Adjusts the transparency of the inactive paths in the Solution Path Parameter Estimates plot so that the paths that are not currently active appear faded.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
fm << (fit[1] << Hide Inactive Paths);

```

#### Incidence Rate Ratios

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Incidence Rate Ratios( state=0|1 ))

**Description:** Shows or hides a report that contains incidence rate ratios for categorical predictors, and unit incidence rate ratios and range incidence rate ratios for continuous predictors. This option is available only when the specified Distribution is Poisson or Negative Binomial and the model contains an intercept.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Poisson" ),
	Run(
		Fit(
			Estimation Method( "Maximum Likelihood" ),
			Validation Method( "None" ),
			Incidence Rate Ratios( 1 )
		)
	)
);

```

#### Inverse Prediction

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Inverse Prediction( Response( p1, p2, ... ), Term Value( effect1( value ), effect2( value ), ... ) ))

**Description:** Generates a predicted X value and confidence interval based on the specified  values of Y and all other factors. This option is not available for models that contain a predictor that has the Vector modeling type.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
fm << (fit[1] << Inverse Prediction(
	Response( 200, 250, 300 ),
	Term Value(
		Age( 48.5181 ),
		Gender( "1" ),
		BMI( . ),
		BP( 94.6470135746607 ),
		Total Cholesterol( 189.140271493213 ),
		LDL( 115.439140271493 ),
		HDL( 49.7884615384615 ),
		TCH( 4.07024886877828 ),
		LTG( 4.64141085972851 ),
		Glucose( 91.2601809954751 )
	)
));

```

#### Lift Curve

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Lift Curve( state=0|1 ))

**Description:** Shows or hides the lift curve for the model. If you used validation, a lift curve is shown for each of the Training, Validation, and Test sets. This option is available only when the specified Distribution is Binomial, Multinomial, or Ordinal Logistic.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Liver Cancer.jmp" );
fm = dt << Fit Model(
	Validation( :Validation ),
	Y( :Severity ),
	Effects(
		:BMI, :Age, :Time, :Markers, :Hepatitis, :Jaundice, :BMI * :Age, :BMI * :Time,
		:BMI * :Markers, :BMI * :Hepatitis, :BMI * :Jaundice, :Age * :Time, :Age * :Markers,
		:Age * :Hepatitis, :Age * :Jaundice, :Time * :Markers, :Time * :Hepatitis,
		:Time * :Jaundice, :Markers * :Hepatitis, :Markers * :Jaundice,
		:Hepatitis * :Jaundice
	),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Binomial" ),
	Run(
		Fit(
			Estimation Method( Elastic Net( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
Wait( 0 );
fm << (fit[1] << Lift Curve( 1 ));

```

#### Mean Confidence Interval

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Mean Confidence Interval)

**Description:** Saves two new formula columns to the original data table. The new columns contain the lower and upper 95% confidence limits for the mean response.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
fm << (fit[1] << Save Prediction Formula);
fm << (fit[1] << Mean Confidence Interval);

```

#### Model Summary

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Model Summary( state=0|1 ))

**Description:** Shows or hides the Model Summary report that includes information about the specification and goodness of fit statistics for the model. This option also shows the Estimation Details report for applicable models. On by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
Wait( 1 );
fm << (fit[1] << Model Summary( 0 ));

```

#### Multiple Comparisons

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Multiple Comparisons( Effect( effect ), &lt;options&gt; ))

**Description:** Generates least squares means estimates or user-defined estimates. These estimates enable you to do comparisons with the overall average, comparisons with a control, or pairwise comparisons. This option is not available for models that contain a predictor that has the Vector modeling type or for models that do not contain any categorical predictors.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hollywood Movies.jmp" );
fm = dt << Fit Model(
	Y( :World Gross ),
	Effects( :Rotten Tomatoes Score, :Audience Score, :Theme, :Genre ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Gamma" ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "BIC" ),
			Multiple Comparisons(
				Effect( :Genre ),
				Comparisons with Overall Average(
					1,
					Comparisons with Overall Average Decision Chart(
						ANOM( 1, Point Options( "Show Needles" ) )
					)
				)
			)
		)
	),
	SendToReport(
		Dispatch( {}, "Parameter Estimates for Original Predictors", OutlineBox, Close( 1 ) )
	)
);

```

#### Normal Quantile Plot

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Normal Quantile Plot( state=0|1 ))

**Description:** Shows or hides a plot of normal quantiles on the vertical axis and standardized residuals on the horizontal axis. If you used validation, a plot is shown for each of the Training, Validation, and Test sets. This option is available only when the specified Distribution is Normal and there is no censoring.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Run( Fit( Estimation Method( "Standard Least Squares" ) ) )
);
fm << (fit[1] << Normal Quantile Plot);

```

#### Odds Ratios

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Odds Ratios( state=0|1 ))

**Description:** Shows or hides a report that contains odds ratios for categorical predictors, and unit odds ratios and range odds ratios for continuous predictors. This option is available only when the specified Distribution is Binomial and the model contains an intercept. This option is not available for models that contain a predictor that has the Vector modeling type.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Binomial" ),
	Run(
		Fit(
			Estimation Method( "Logistic Regression" ),
			Validation Method( "None" ),
			Odds Ratios( 1 )
		)
	)
);

```

#### Parameter Estimates for Centered and Scaled Predictors

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Parameter Estimates for Centered and Scaled Predictors( state=0|1 ))

**Description:** Shows or hides a table of centered and scaled parameter estimates.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
Wait( 1 );
fm << (fit[1] << Parameter Estimates for Centered and Scaled Predictors( 1 ));

```

#### Parameter Estimates for Original Predictors

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Parameter Estimates for Original Predictors( state=0|1 ))

**Description:** Shows or hides a table of parameter estimates in the original scale of the data. On by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
Wait( 1 );
fm << (fit[1] << Parameter Estimates for Original Predictors( 0 ));

```

#### Plot Actual by Predicted

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Plot Actual By Predicted( state=0|1 ))

**Description:** Shows or hides a plot for the training set with actual values on the vertical axis and predicted values on the horizontal axis. If you used validation, a plot is shown for each of the Training, Validation, and Test sets. This option is not available when the specified Distribution is Binomial, Multinomial, Ordinal Logistic, or Cox Proportional Hazards.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Validation( :Validation ),
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Run( Fit( Estimation Method( "Lasso" ), Validation Method( "Validation Column" ) ) )
);
fm << (fit[1] << Plot Actual by Predicted( 1 ));

```

#### Plot Baseline Survival and Hazard

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Plot Baseline Survival and Hazard( state=0|1 ))

**Description:** Shows or hides the Baseline Survival and Hazard plots, which plot the survival and hazard functions for the baseline proportional hazards function versus the response variable. Below the plots, there is a table that contains the plotted values. This option is available only when the specified Distribution is Cox Proportional Hazards.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
Fit Model(
	Censor( :censor ),
	Censor Code( "1" ),
	Y( :Time ),
	Effects( :Cell Type, :Treatment, :Prior, :Age, :Diag Time, :KPS ),
	No Intercept,
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Cox Proportional Hazards" ),
	Run(
		Fit(
			Estimation Method( "Maximum Likelihood" ),
			Validation Method( "None" ),
			Plot Baseline Survival and Hazard( 1 )
		)
	)
);

```

#### Plot Residual by Predicted

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Plot Residual By Predicted( state=0|1 ))

**Description:** Shows or hides a plot for the training set with residual values on the vertical axis and predicted values on the horizontal axis. If you used validation, a plot is shown for each of the Training, Validation, and Test sets. This option is not available when the specified Distribution is Binomial, Multinomial, Ordinal Logistic, or Cox Proportional Hazards.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Validation( :Validation ),
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Run( Fit( Estimation Method( "Lasso" ), Validation Method( "Validation Column" ) ) )
);
fm << (fit[1] << Plot Residual by Predicted( 1 ));

```

#### Plot Residual by Predictor

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Plot Actual By Predictor( state=0|1 ))

**Description:** Shows or hides a plot of the residual values on the vertical axis and predictor values on the horizontal axis. If you used validation, a plot is shown for each of the Training, Validation, and Test sets. This option is not available when the specified Distribution is Binomial, Multinomial, Ordinal Logistic, or Cox Proportional Hazards. This option is not available for models that contain a predictor that has the Vector modeling type.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Validation( :Validation ),
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Run( Fit( Estimation Method( "Lasso" ), Validation Method( "Validation Column" ) ) )
);
fm << (fit[1] << Plot Residual by Predictor( 1 ));

```

#### Precision Recall Curve

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Precision Recall Curve( state=0|1 ))

**Description:** Shows or hides the Precision-Recall Curve plot. A precision-recall curve plots the precision values against the recall values at a variety of thresholds. If you used validation, a plot is shown for each of the training, validation, and test sets.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Liver Cancer.jmp" );
fm = dt << Fit Model(
	Validation( :Validation ),
	Y( :Severity ),
	Effects(
		:BMI, :Age, :Time, :Markers, :Hepatitis, :Jaundice, :BMI * :Age, :BMI * :Time,
		:BMI * :Markers, :BMI * :Hepatitis, :BMI * :Jaundice, :Age * :Time, :Age * :Markers,
		:Age * :Hepatitis, :Age * :Jaundice, :Time * :Markers, :Time * :Hepatitis,
		:Time * :Jaundice, :Markers * :Hepatitis, :Markers * :Jaundice,
		:Hepatitis * :Jaundice
	),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Binomial" ),
	Run(
		Fit(
			Estimation Method( Elastic Net( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
Wait( 0 );
fm << (fit[1] << Precision Recall Curve( 1 ));

```

#### Profiler

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Profiler( state=0|1 ))

**Description:** Shows or hides the Prediction Profiler. Predictors that have parameter estimates of zero and that are not involved in any interaction terms with nonzero coefficients do not appear in the profiler.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
Fit Model(
	Y( :satell ),
	Effects(
		:color, :spine, :width, :weight, :color * :spine, :color * :width, :color * :weight,
		:spine * :width, :spine * :weight, :width * :weight
	),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Poisson" ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "BIC" ),
			Profiler( 1 )
		)
	)
);

```

#### Publish Prediction Formula

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Publish Prediction Formula)

**Description:** Creates a prediction formula and publishes it as a formula column script in the Formula Depot platform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
fm << (fit[1] << Publish Prediction Formula);

```

#### Quantile Profiler

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Quantile Profiler( state=0|1 ))

**Description:** Shows or hides a profiler that shows the predicted response as a function of the predictors and the quantile of the cumulative distribution function. The quantile is called Probability and is shown in the right-most cell. This option is not available when the specified Distribution is Binomial or Quantile Regression.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
Fit Model(
	Y( :satell ),
	Effects(
		:color, :spine, :width, :weight, :color * :spine, :color * :width, :color * :weight,
		:spine * :width, :spine * :weight, :width * :weight
	),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Poisson" ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "BIC" ),
			Quantile Profiler( 1 )
		)
	)
);

```

#### ROC Curve

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; ROC Curve( state=0|1 ))

**Description:** Shows or hides the Receiver Operating Characteristic (ROC) curve. If you used validation, an ROC curve is shown for each of the Training, Validation, and Test sets. This option is available only when the specified Distribution is Binomial, Multinomial, or Ordinal Logistic.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Liver Cancer.jmp" );
fm = dt << Fit Model(
	Validation( :Validation ),
	Y( :Severity ),
	Effects(
		:BMI, :Age, :Time, :Markers, :Hepatitis, :Jaundice, :BMI * :Age, :BMI * :Time,
		:BMI * :Markers, :BMI * :Hepatitis, :BMI * :Jaundice, :Age * :Time, :Age * :Markers,
		:Age * :Hepatitis, :Age * :Jaundice, :Time * :Markers, :Time * :Hepatitis,
		:Time * :Jaundice, :Markers * :Hepatitis, :Markers * :Jaundice,
		:Hepatitis * :Jaundice
	),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Binomial" ),
	Run(
		Fit(
			Estimation Method( Elastic Net( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
Wait( 0 );
fm << (fit[1] << ROC Curve( 1 ));

```

#### Relaunch Active Main Effects and Full Factorial

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Relaunch Active Main Effects and Full Factorial)

**Description:** Opens a Fit Model launch window where the Construct Model Effects list contains a set of terms based on the terms that have nonzero parameter estimates. These terms are the active effects. All other specifications in the launch window are those used in the original analysis. The Construct Model Effects list is populated with a full factorial constructed with the active effects.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
fm << (fit[1] << Relaunch Active Main Effects and Full Factorial);

```

#### Relaunch Active Main Effects and Response Surface Model

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Relaunch Active Main Effects and Response Surface Model)

**Description:** Opens a Fit Model launch window where the Construct Model Effects list contains a set of terms based on the terms that have nonzero parameter estimates. These terms are the active effects. All other specifications in the launch window are those used in the original analysis. The Construct Model Effects list is populated with a response surface model constructed with the active effects.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
fm << (fit[1] << Relaunch Active Main Effects and Response Surface Model);

```

#### Relaunch Active Main Effects and Second Degree Factorial

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Relaunch Active Main Effects and Second Degree Factorial)

**Description:** Opens a Fit Model launch window where the Construct Model Effects list contains a set of terms based on the terms that have nonzero parameter estimates. These terms are the active effects. All other specifications in the launch window are those used in the original analysis. The Construct Model Effects list is populated with a second degree factorial constructed with the active effects.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
fm << (fit[1] << Relaunch Active Main Effects and Second Degree Factorial);

```

#### Relaunch Active Main Effects and Second Degree Polynomial

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Relaunch Active Main Effects and Second Degree Polynomial)

**Description:** Opens a Fit Model launch window where the Construct Model Effects list contains a set of terms based on the terms that have nonzero parameter estimates. These terms are the active effects. All other specifications in the launch window are those used in the original analysis. The Construct Model Effects list is populated with a second degree polynomial constructed with the active effects.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
fm << (fit[1] << Relaunch Active Main Effects and Second Degree Polynomial);

```

#### Relaunch Active Main Effects and Third Degree Factorial

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Relaunch Active Main Effects and Third Degree Factorial)

**Description:** Opens a Fit Model launch window where the Construct Model Effects list contains a set of terms based on the terms that have nonzero parameter estimates. These terms are the active effects. All other specifications in the launch window are those used in the original analysis. The Construct Model Effects list is populated with a third degree factorial constructed with the active effects.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
fm << (fit[1] << Relaunch Active Main Effects and Third Degree Factorial);

```

#### Relaunch Active Main Effects and Third Degree Polynomial

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Relaunch Active Main Effects and Third Degree Polynomial)

**Description:** Opens a Fit Model launch window where the Construct Model Effects list contains a set of terms based on the terms that have nonzero parameter estimates. These terms are the active effects. All other specifications in the launch window are those used in the original analysis. The Construct Model Effects list is populated with a third degree polynomial constructed with the active effects.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
fm << (fit[1] << Relaunch Active Main Effects and Third Degree Polynomial);

```

#### Relaunch with Active Effects

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Relaunch with Active Effects)

**Description:** Opens a Fit Model launch window where the Construct Model Effects list contains a set of terms based on the terms that have nonzero parameter estimates. These terms are the active effects. All other specifications in the launch window are those used in the original analysis. The Construct Model Effects list is populated only with the active effects.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
fm << (fit[1] << Relaunch with Active Effects);

```

#### Remove Fit

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Remove Fit)

**Description:** Removes the specified fit from the report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
fm = dt << Fit Model(
	Y( :Oxy ),
	Effects(
		:Weight, :Runtime, :RunPulse, :RstPulse, :MaxPulse, :Weight * :Runtime,
		:Weight * :RunPulse, :Weight * :RstPulse, :Weight * :MaxPulse, :Runtime * :RunPulse,
		:Runtime * :RstPulse, :Runtime * :MaxPulse, :RunPulse * :RstPulse,
		:RunPulse * :MaxPulse, :RstPulse * :MaxPulse
	),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Run( Fit( Estimation Method( Lasso( "Adaptive" ) ), Validation Method( "BIC" ) ) )
);
Wait( 2 );
fm << (fit[1] << Remove Fit);

```

#### Reset Solution

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Reset Solution)

**Description:** Resets the model in the solution path to the original model.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Validation( :Validation ),
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Run( Fit( Estimation Method( "Lasso" ), Validation Method( "Validation Column" ) ) )
);
Wait( 1 );
fm << (Fit[1] << Set Solution ID( 122 ));
Wait( 1 );
fm << (Fit[1] << Reset Solution);

```

#### Save Cox Snell Residual Formula

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Save Cox Snell Residual Formula)

**Description:** Saves a new formula column to the original data table. The new column contains a formula for the Cox-Snell residuals.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
fm = dt << Fit Model(
	Censor( :censor ),
	Censor Code( "1" ),
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Cox Proportional Hazards" ),
	Run( Fit( Estimation Method( "Maximum Likelihood" ), Validation Method( "None" ) ) )
);
fm << (fit[1] << Save Cox Snell Residual Formula);

```

#### Save Distribution Formula

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Save Distribution Formula)

**Description:** Saves a new formula column to the original data table. The new column contains a formula for the cumulative distribution function.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Run( Fit( Estimation Method( Lasso( "Adaptive" ) ), Validation Method( "KFold", 5 ) ) )
);
fm << (Fit[1] << Save Distribution Formula);

```

#### Save Functional Prediction Formulas

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Save Functional Prediction Formulas)

**Description:** Saves new columns to the original data table. A new column is added for each FDE principal component response. Each new column contains a prediction formula for each functional principal component. A final column is added that contains a model prediction formula that is a linear combination of the prediction formulas and the eigenfunction columns from the Functional Data Explorer platform. This option is available only when the response columns contain the FDE FPC Num column property.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Simple Linear Functional Data.jmp" );
fobj = Functional Data Explorer(
	Y( :Y ),
	X( :T ),
	ID( :ID ),
	Z( :X1, :X2, :X3 ),
	B Splines( 1 )
);
dtsum = (Report( fobj )["Function Summaries"] << get scriptable object) << Save Summaries;
fobj << close window;
fm = dtsum << Fit Model(
	Y( :Y FPC 1, :Y FPC 2 ),
	Effects( :X1, :X2, :X3, :X1 * :X2, :X1 * :X3, :X2 * :X3 ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Run(
		Fit(
			Estimation Method( "Best Subset" ),
			Validation Method( "AICc" ),
			Enforce Heredity( 1 )
		)
	)
);
(Report( fm[1] )["Generalized Regression for Y FPC 1"][
"Normal Best Subset with AICc Validation"] << get scriptable object) <<
Save Functional Prediction Formulas;

```

#### Save Linear Predictor

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Save Linear Predictor)

**Description:** Saves a new formula column to the original data table. The new column contains a formula for the product of the design matrix and the vector of parameter estimates.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
fm = dt << Fit Model(
	Y( :satell ),
	Effects(
		:color, :spine, :width, :weight, :color * :spine, :color * :width, :color * :weight,
		:spine * :width, :spine * :weight, :width * :weight
	),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Poisson" ),
	Run( Fit( Estimation Method( Lasso( "Adaptive" ) ), Validation Method( "BIC" ) ) )
);
fm << (fit[1] << Save Prediction Formula);
fm << (fit[1] << Save Linear Predictor);

```

#### Save Martingale Residual Formula

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Save Martingale Residual Formula)

**Description:** Saves a new formula column to the original data table. The new column contains a formula for the martingale residuals.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
fm = dt << Fit Model(
	Censor( :censor ),
	Censor Code( "1" ),
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Cox Proportional Hazards" ),
	Run( Fit( Estimation Method( "Maximum Likelihood" ), Validation Method( "None" ) ) )
);
fm << (fit[1] << Save Martingale Residual Formula);

```

#### Save Prediction Formula

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Save Prediction Formula)

**Description:** Saves a new formula column to the original data table. The new column contains the prediction formula, given in terms of the observed (unstandardized) data values. The prediction formula does not contain zeroed terms.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
fm << (fit[1] << Save Prediction Formula);

```

#### Save Resample Formulas

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Save Resample Formulas)

**Description:** Saves multiple formula columns to the original data table. A column group called SVEM Samples contains one formula column per individual model. These columns are saved as hidden columns. The next column is a prediction formula for the self-validated ensemble model. The next column contains the standard error formula for the self-validated ensemble model. The final column contains the median prediction from the self-validated ensemble model for each row.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run( Fit( Estimation Method( SVEM Forward Selection( Samples( 100 ) ) ) ) )
);
fm << (fit[1] << Save Resample Formulas);

```

#### Save Residual Formula

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Save Residual Formula)

**Description:** Saves a new formula column to the original data table. The new column contains a formula for the residuals, given in the form Y minus the prediction formula. The residual formula does not contain zeroed terms.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
fm << (fit[1] << Save Residual Formula);

```

#### Save Simulation Formula

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Save Simulation Formula)

**Description:** Saves a new formula column to the original data table. The new column contains a formula that generates simulated values using the estimated parameters for the model that you fit. This column can be used in the Simulate utility as a Column to Switch In.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Run( Fit( Estimation Method( Lasso( "Adaptive" ) ), Validation Method( "KFold", 5 ) ) )
);
fm << (fit[1] << Save Simulation Formula);

```

#### Save Survival Formula

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Save Survival Formula)

**Description:** Saves a new formula column to the original data table. The new column contains a formula for the probability of survival at the observed time. The survival function is equal to 1 minus the cumulative distribution function.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
fm = dt << Fit Model(
	Censor( :censor ),
	Censor Code( "1" ),
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Cox Proportional Hazards" ),
	Run( Fit( Estimation Method( "Maximum Likelihood" ), Validation Method( "None" ) ) )
);
fm << (fit[1] << Save Survival Formula);

```

#### Save Validation Column

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Save Validation Column)

**Description:** Saves a new column to the original data table. The new column describes the assignment of rows to folds. For KFold, the column lists the fold to which the row was assigned. For Holdback, each row is identified as belonging to the Training or Validation set. For Leave-One-Out, the row&apos;s value indicates its order in being left out.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Run( Fit( Estimation Method( Lasso( "Adaptive" ) ), Validation Method( "KFold", 5 ) ) )
);
fm << (fit[1] << Save Validation Column);

```

#### Save Variance Formula

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Save Variance Formula)

**Description:** Saves a new formula column to the original data table. The new column contains a formula for the variance of the prediction.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
fm = dt << Fit Model(
	Y( :satell ),
	Effects(
		:color, :spine, :width, :weight, :color * :spine, :color * :width, :color * :weight,
		:spine * :width, :spine * :weight, :width * :weight
	),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Poisson" ),
	Run( Fit( Estimation Method( Lasso( "Adaptive" ) ), Validation Method( "BIC" ) ) )
);
fm << (fit[1] << Save Variance Formula);

```

#### Select Nonzero Terms

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Select Nonzero Terms)

**Description:** Highlights terms with nonzero coefficients in the report. Also selects all associated columns in the data table. This option is not available when the specified Estimation Method is Ridge Regression.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
fm << (fit[1] << Select Nonzero Terms);

```

#### Select Zeroed Terms

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Select Zeroed Terms)

**Description:** Highlights terms with zero coefficients in the report. Also selects all associated columns in the data table. This option is not available when the specified Estimation Method is Ridge Regression.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
fm << (fit[1] << Select Zeroed Terms);

```

#### Set Solution ID

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Set Solution ID( number ))

**Description:** Changes the specified model to a different model in the solution path.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Validation( :Validation ),
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Run( Fit( Estimation Method( "Lasso" ), Validation Method( "Validation Column" ) ) )
);
Wait( 1 );
fm << (Fit[1] << Set Solution ID( 122 ));

```

#### Show Prediction Expression

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Show Prediction Expression( state=0|1 ))

**Description:** Shows or hides the Prediction Expression report that contains the equation for the estimated model.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
fm << (fit[1] << Show Prediction Expression);

```

#### Show Solution Path Summary

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Show Solution Path Summary( state=0|1 ))

**Description:** Shows or hides a report that contains a table of fit statistics for the points on the Solution Path and Validation Path plots where the active set changes. The statistics that are available depend on the estimation method. This option is not available for Maximum Likelihood or Ridge Regression models.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
Wait( 1 );
fm << (fit[1] << Show Solution Path Summary( 1 ));

```

#### Solution Path

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Solution Path( state=0|1 ))

**Description:** Shows or hides the Solution Path and Validation Path plots. This option is not available for Maximum Likelihood models. On by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
Wait( 1 );
fm << (fit[1] << Solution Path( 0 ));

```

#### Std Error of Predicted

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Std Error of Predicted)

**Description:** Saves a new column to the original data table. The new column contains the standard errors of the predicted mean response.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
fm << (fit[1] << Save Prediction Formula);
fm << (fit[1] << Std Error of Predicted);

```

#### Std Error of Predicted Formula

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Std Error of Predicted Formula)

**Description:** Saves a new formula column to the original data table. The new column contains a formula for the standard errors of the predicted mean response.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit( Estimation Method( Lasso( Adaptive ) ), Validation Method( Validation Column ) )
	)
);
fm << (fit[1] << Save Prediction Formula);
fm << (fit[1] << Std Error of Predicted Formula);

```

#### Step Backward

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Step Backward)

**Description:** Moves to the next smallest model in the solution path.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Validation( :Validation ),
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Run( Fit( Estimation Method( "Lasso" ), Validation Method( "Validation Column" ) ) )
);
Wait( 1 );
fm << (Fit[1] << Step Backward);
Wait( 1 );
fm << (Fit[1] << Step Backward);

```

#### Step Forward

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Step Forward)

**Description:** Moves to the next largest model in the solution path.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Validation( :Validation ),
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Run( Fit( Estimation Method( "Lasso" ), Validation Method( "Validation Column" ) ) )
);
Wait( 1 );
fm << (Fit[1] << Step Forward);
Wait( 1 );
fm << (Fit[1] << Step Forward);

```

#### Survival Profiler

**Syntax:** obj &lt;&lt; (fit[number] &lt;&lt; Survival Profiler( state=0|1 ))

**Description:** Shows or hides a profiler that shows the survival function as a function of the predictors and the response. The response is shown in the right-most cell. This option is available only when the specified Distribution is Normal, Exponential, Weibull, Lognormal, or Cox Proportional Hazards.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
fm = dt << Fit Model(
	Censor( :censor ),
	Censor Code( "1" ),
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Cox Proportional Hazards" ),
	Run( Fit( Estimation Method( "Maximum Likelihood" ), Validation Method( "None" ) ) )
);
fm << (fit[1] << Survival Profiler( 1 ));

```

## Generalized Regression

### Associated Constructors

#### Fit Generalized

**Syntax:** Fit Model( Y( columns ), Effects( columns ), Personality( "Generalized Regression" ) )

**Description:** Fits generalized linear models using penalized regression techniques, which help automate variable selection in a way that avoids overfitting. The penalized regression techniques include the lasso, the adaptive lasso, the elastic net, the adaptive elastic net, and ridge regression. The response distributions can accommodate continuous, categorical, count, and time-to-event response data. This is the recommended personality for most regression settings.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);

```

### Columns

#### By

**Syntax:** obj &lt;&lt; By( column(s) )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	),
	By( _bycol )
);

```

### Item Messages

#### Fit

**Syntax:** obj &lt;&lt; Fit( Estimation Method( Emethod( estim_options ) ), Validation Method( Vmethod( valid_options ) ), &lt;Early Stopping&gt;, &lt;Enforce Heredity&gt;, &lt;Force( vector )&gt; )

**Description:** Specifies the Estimation Method and options, the Validation Method and options, and other fitting options for your model. Available estimation options depend on the specified estimation method. Validation options are available for the KFold and Holdback methods. The other fitting options control early stopping, enforcing heredity of terms, and forcing terms into the model.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	),
	SendToReport( Dispatch( {}, "Model Launch", OutlineBox, Close( 0 ) ) )
);

```

#### Get X Matrix

**Syntax:** obj &lt;&lt; Get X Matrix

**Description:** Returns the design matrix (also called the X matrix).

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
As Table( fm << Get X Matrix );

```

#### Model Dialog

**Syntax:** obj &lt;&lt; Model Dialog

**Description:** Shows the completed Fit Model launch window for the current analysis.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
obj << Model Dialog;

```

#### Save Coding Table

**Syntax:** obj &lt;&lt; Save Coding Table

**Description:** Creates a new data table that contains the JMP coding for all model parameters. The last column shows the values of the response variable.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Run
);
fm << Save Coding Table;

```

#### Set Random Seed

**Syntax:** obj = Fit Model(...Run( Set Random Seed( number ) )...)

**Description:** Sets the seed for the randomization process that is used for KFold and Holdback validation.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Run(
		Set Random Seed( 1111 ),
		Fit( Estimation Method( "Lasso" ), Validation Method( "Holdback", 0.3 ) )
	)
);

```

### Shared Item Messages

#### Action

**Syntax:** obj &lt;&lt; Action

**Description:** All-purpose trapdoor within a platform to insert expressions to evaluate. Temporarily sets the DisplayBox and DataTable contexts to the Platform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

#### Apply Preset

**Syntax:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**Description:** Apply a previously created preset to the object, updating the options and customizations to match the saved settings.

**Anonymous preset**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();
dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );
Wait( 1 );
obj2 << Apply Preset( preset );

```

**Search by name**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

**Search within folder(s)**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

#### Automatic Recalc

**Syntax:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**Description:** Redoes the analysis automatically for exclude and data changes. If the Automatic Recalc option is turned on, you should consider using Wait(0) commands to ensure that the exclude and data changes take effect before the recalculation.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

#### Broadcast

**Syntax:** obj &lt;&lt; Broadcast(message)

**Description:** Broadcasts a message to a platform. If return results from individual objects are tables, they are concatenated if possible, and the final format is identical to either the result from the Save Combined Table option in a Table Box or the result from the Concatenate option using a Source column. Other than those, results are stored in a list and returned.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
objs = Control Chart Builder(
	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),
	By( :OPERATOR )
);
objs[1] << Broadcast( Save Summaries );

```

#### Column Switcher

**Syntax:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Description:** Adds a control panel for changing the platform&apos;s variables

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);

```

#### Copy ByGroup Script

**Syntax:** obj &lt;&lt; Copy ByGroup Script

**Description:** Create a JSL script to produce this analysis, and put it on the clipboard.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	),
	By( _bycol )
);
obj[1] << Copy ByGroup Script;

```

#### Copy Script

**Syntax:** obj &lt;&lt; Copy Script

**Description:** Create a JSL script to produce this analysis, and put it on the clipboard.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
obj << Copy Script;

```

#### Data Table Window

**Syntax:** obj &lt;&lt; Data Table Window

**Description:** Move the data table window for this analysis to the front.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
obj << Data Table Window;

```

#### Get By Levels

**Syntax:** obj &lt;&lt; Get By Levels

**Description:** Returns an associative array mapping the by group columns to their values.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

#### Get ByGroup Script

**Syntax:** obj &lt;&lt; Get ByGroup Script

**Description:** Creates a script (JSL) to produce this analysis and returns it as an expression.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	),
	By( _bycol )
);
t = obj[1] << Get ByGroup Script;
Show( t );

```

#### Get Container

**Syntax:** obj &lt;&lt; Get Container

**Description:** Returns a reference to the container box that holds the content for the object.

**General**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**Platform with Filter**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Show Control Panel( 0 ),
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),
	Local Data Filter(
		Add Filter(
			columns( :age, :sex, :height ),
			Where( :age == {12, 13, 14} ),
			Where( :sex == "F" ),
			Where( :height >= 55 ),
			Display( :age, N Items( 6 ) )
		)
	)
);
New Window( "platform boxes",
	H List Box(
		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),
		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )
	)
);

```

#### Get Data Table

**Syntax:** obj &lt;&lt; Get Data Table

**Description:** Returns a reference to the data table.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
t = obj << Get Datatable;
Show( N Rows( t ) );

```

#### Get Group Platform

**Syntax:** obj &lt;&lt; Get Group Platform

**Description:** Return the Group Platform object if this platform is part of a Group. Otherwise, returns Empty().

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );
group = biv[1] << Get Group Platform;
Wait( 1 );
group << Layout( "Arrange in Tabs" );

```

#### Get Script

**Syntax:** obj &lt;&lt; Get Script

**Description:** Creates a script (JSL) to produce this analysis and returns it as an expression.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
t = obj << Get Script;
Show( t );

```

#### Get Script With Data Table

**Syntax:** obj &lt;&lt; Get Script With Data Table

**Description:** Creates a script(JSL) to produce this analysis specifically referencing this data table and returns it as an expression.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
t = obj << Get Script With Data Table;
Show( t );

```

#### Get Timing

**Syntax:** obj &lt;&lt; Get Timing

**Description:** Times the platform launch.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
t = obj << Get Timing;
Show( t );

```

#### Get Web Support

**Syntax:** obj &lt;&lt; Get Web Support

**Description:** Return a number indicating the level of Interactive HTML support for the display object. 1 means some or all elements are supported. 0 means no support.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

#### Get Where Expr

**Syntax:** obj &lt;&lt; Get Where Expr

**Description:** Returns the Where expression for the data subset, if the platform was launched with By() or Where(). Otherwise, returns Empty()

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );
Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

#### Ignore Platform Preferences

**Syntax:** Ignore Platform Preferences( state=0|1 )

**Description:** Ignores the current settings of the platform&apos;s preferences. The message is ignored when sent to the platform after creation.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Ignore Platform Preferences( 1 ),
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

#### Local Data Filter

**Syntax:** obj &lt;&lt; Local Data Filter

**Description:** To filter data to specific groups or ranges, but local to this platform

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :country ) ),
	Local Data Filter(
		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),
		Mode( Show( 1 ), Include( 1 ) )
	)
);

```

#### New JSL Preset

**Syntax:** New JSL Preset( preset )

**Description:** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
preset = obj << New JSL Preset( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) );
Wait( 1 );
obj << Apply Preset( preset );

```

#### New Preset

**Syntax:** obj = New Preset()

**Description:** Create an anonymous preset representing the options and customizations applied to the object. This object can be passed to Apply Preset to copy the settings to another object of the same type.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

#### Paste Local Data Filter

**Syntax:** obj &lt;&lt; Paste Local Data Filter

**Description:** Apply the local data filter from the clipboard to the current report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
filter = dist << Local Data Filter(
	Add Filter( columns( :Region ), Where( :Region == "MW" ) )
);
filter << Copy Local Data Filter;
dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );
Wait( 1 );
dist2 << Paste Local Data Filter;

```

#### Redo Analysis

**Syntax:** obj &lt;&lt; Redo Analysis

**Description:** Rerun this same analysis in a new window. The analysis will be different if the data has changed.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
obj << Redo Analysis;

```

#### Redo ByGroup Analysis

**Syntax:** obj &lt;&lt; Redo ByGroup Analysis

**Description:** Rerun this same analysis in a new window. The analysis will be different if the data has changed.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	),
	By( _bycol )
);
obj[1] << Redo ByGroup Analysis;

```

#### Relaunch Analysis

**Syntax:** obj &lt;&lt; Relaunch Analysis

**Description:** Opens the platform launch window and recalls the settings that were used to create the report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
obj << Relaunch Analysis;

```

#### Relaunch ByGroup

**Syntax:** obj &lt;&lt; Relaunch ByGroup

**Description:** Opens the platform launch window and recalls the settings that were used to create the report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	),
	By( _bycol )
);
obj[1] << Relaunch ByGroup;

```

#### Remove Column Switcher

**Syntax:** obj &lt;&lt; Remove Column Switcher

**Description:** Removes the most recent Column Switcher that has been added to the platform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
Wait( 2 );
obj << Remove Column Switcher;

```

#### Remove Local Data Filter

**Syntax:** obj &lt;&lt; Remove Local Data Filter

**Description:** If a local data filter has been created, this removes it and restores the platform to use all the data in the data table directly

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dist = dt << Distribution(
	Nominal Distribution( Column( :country ) ),
	Local Data Filter(
		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),
		Mode( Show( 1 ), Include( 1 ) )
	)
);
Wait( 2 );
dist << remove local data filter;

```

#### Render Preset

**Syntax:** Render Preset( preset )

**Description:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

#### Report

**Syntax:** obj &lt;&lt; Report;Report( obj )

**Description:** Returns a reference to the report object.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Report View

**Syntax:** obj &lt;&lt; Report View( "Full"|"Summary" )

**Description:** The report view determines the level of detail visible in a platform report. Full shows all of the detail, while Summary shows only select content, dependent on the platform. For customized behavior, display boxes support a <<Set Summary Behavior message.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**Syntax:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description:** Creates a JSL script to produce this analysis, and save it as a table property in the data table. You can specify a name for the script. The Append Suffix option appends a numeric suffix to the script name, which differentiates the script from an existing script with the same name. The Prompt option prompts the user to specify a script name. The Replace option replaces an existing script with the same name.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**Syntax:** obj &lt;&lt; Save ByGroup Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**Syntax:** obj &lt;&lt; Save ByGroup Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**Syntax:** obj &lt;&lt; Save Script for All Objects

**Description:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**Syntax:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Description:** Saves a script for all report objects to the current data table. This option is useful when you have multiple reports in the window. The script is named after the first platform unless you specify the script name in quotes.

**Example 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table;

```

**Example 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**Syntax:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description:** Create a JSL script to produce this analysis, and save it as a table property in the data table.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**Syntax:** obj &lt;&lt; Save Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
obj << Save Script to Journal;

```

#### Save Script to Report

**Syntax:** obj &lt;&lt; Save Script to Report

**Description:** Create a JSL script to produce this analysis, and show it in the report itself. Useful to preserve a printed record of what was done.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
obj << Save Script to Report;

```

#### Save Script to Script Window

**Syntax:** obj &lt;&lt; Save Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
obj << Save Script to Script Window;

```

#### SendToByGroup

**Syntax:** SendToByGroup( {":Column == level"}, command );

**Description:** Sends platform commands or display customization commands to each level of a by-group.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	By( :Sex ),
	SendToByGroup(
		{:sex == "F"},
		Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) )
	),
	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) )
);

```

#### SendToEmbeddedScriptable

**Syntax:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Description:** SendToEmbeddedScriptable restores settings of embedded scriptable objects.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
dt << Life Distribution(
	Y( :Time ),
	Censor( :Censor ),
	Censor Code( 1 ),
	<<Fit Weibull,
	SendToEmbeddedScriptable(
		Dispatch(
			{"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},
			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}
		)
	)
);

```

#### SendToReport

**Syntax:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Description:** Send To Report is used in tandem with the Dispatch command to customize the appearance of a report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :age ) ),
	Continuous Distribution( Column( :weight ) ),
	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) )
);

```

#### Sync to Data Table Changes

**Syntax:** obj &lt;&lt; Sync to Data Table Changes

**Description:** Sync with the exclude and data changes that have been made.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
Wait( 1 );
dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );
dist << Sync To Data Table Changes;

```

#### Title

**Syntax:** obj &lt;&lt; Title( "new title" )

**Description:** Sets the title of the platform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
obj << Title( "My Platform" );

```

#### Top Report

**Syntax:** obj &lt;&lt; Top Report

**Description:** Returns a reference to the root node in the report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Transform Column

**Syntax:** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Description:** Create a transform column in the local context of an object, usually a platform. The transform column is active only for the lifetime of the platform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),
	Continuous Distribution( Column( :"age^2"n ) )
);

```

#### View Web XML

**Syntax:** obj &lt;&lt; View Web XML

**Description:** Returns the XML code that is used to create the interactive HTML report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

#### Window View

**Syntax:** obj = Fit Generalized(...Window View( "Visible"|"Invisible"|"Private" )...)

**Description:** Set the type of the window to be created for the report. By default a Visible report window will be created. An Invisible window will not appear on screen, but is discoverable by functions such as Window(). A Private window responds to most window messages but is not discoverable and must be addressed through the report object

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );
eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;
biv << Close Window;
New Window( "Bivariate Equation",
	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) )
);

```

## Model Dialog

### Columns

#### ID

**Syntax:** obj = Run(...&lt;ID( column )&gt;...)

**Description:** Column that identifies the genetic relationship matrix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects( :SILICA, :SILANE ),
	Personality( "Standard Least Squares" ),
	Run( Show Prediction Expression( 1 ) )
);
obj << Run;

```

#### Subgroup

**Syntax:** obj = Fit Model(...Personality( "Response Screening" ), Subgroup( column(s) )...)

**Description:** Specifies one or more subgroup variables. When a subgroup variable is defined, additional fits are performed for each category of the subgroup variable.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Fit Model(
	Y( :age ),
	Effects( :sex, :type ),
	Subgroup( :country, :marital status ),
	Personality( "Response Screening" ),
	Subgroup Twoway( 1 ),
	Run
);

```

#### Switch

**Syntax:** obj = Fit Model(...Switch( column(s) )...)

**Description:** Specifies columns that can be switched, one at a time, into the model.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects( :SILICA, :SILANE ),
	Personality( "Standard Least Squares" ),
	Run( Show Prediction Expression( 1 ) )
);
obj << Run;

```

### Item Messages

#### Cauchy Fit

**Syntax:** obj = Fit Model(...Personality( "Response Screening" ), Cauchy Fit( state=0|1 )...)

**Description:** Assumes that the errors have a Cauchy distribution. A Cauchy distribution has fatter tails than the normal distribution, resulting in a reduced emphasis on outliers. Available only for the Response Screening personality. This message corresponds to the Very Robust Fit option in the Fit Model launch window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
dt << Fit Model(
	Effects( :Process, :Site, :Process * :Site ),
	Personality( "Response Screening" ),
	Y( 8 :: 394 ),
	Cauchy Fit( 1 ),
	Run
);

```

#### Censor Code

**Syntax:** obj = Fit Model(...Censor Code( string )...)

**Description:** Identifies the value in the Censor column that designates right-censored observations.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Censor Code( "1" ),
	Run( Likelihood Ratio Tests( 1 ), Likelihood Confidence Intervals( 1 ) )
);

```

#### Center Polynomials

**Syntax:** obj = Fit Model(...Center Polynomials( state=0|1 )...)

**Description:** Centers the effects in polynomial models. On by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects( :SILICA, :SILANE, :SILICA * :SILANE ),
	Center Polynomials( 0 ),
	Personality( "Standard Least Squares" ),
	Run
);

```

#### Centering

**Syntax:** obj = Fit Model(...Personality( "Partial Least Squares" ), Centering( state=0|1 )...)

**Description:** Centers all response variables and model effects by subtracting the mean from each column. Available only for the Partial Least Squares personality. On by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
dt << Fit Model(
	Y( :ls, :ha, :dt ),
	Effects( 5 :: 31 ),
	No Intercept( 1 ),
	Personality( "Partial Least Squares" ),
	Centering( 0 ),
	Run( Validation Method( KFold( 7 ) ), Fit( Method( NIPALS ) ), Number of Factors( 5 ) )
);

```

#### Choose High Target

**Syntax:** obj = Fit Model(...Personality( "Nominal Logistic" ), Choose High Target( state=0|1 )...)

**Description:** Specifies that the larger value of a binary nominal response be used as the target response. Available only for a binary response column in the Nominal Logistic personality. This message corresponds to the Target Level option in the Fit Model launch window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Choose High Target( 1 ),
	Run( Likelihood Ratio Tests( 1 ), Wald Tests( 0 ), Logistic Plot( 1 ) )
);

```

#### Convergence Limit

**Syntax:** obj = Fit Model(...Convergence Limit( number=0.00000001 )...)

**Description:** Specifies the convergence limit for the model fitting. If your model does not readily converge, you might want to increase the convergence limit. By default, the convergence limit is 0.00000001.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Convergence Limit( 0.0001 ),
	Run
);

```

#### Create SAS Job

**Syntax:** obj &lt;&lt; Create SAS Job

**Description:** Saves SAS code for the current model specification to a SAS Program window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects( :SILICA, :SILANE ),
	Personality( "Standard Least Squares" )
);
obj << Create SAS Job;

```

#### Dispose Reports

**Syntax:** obj = Fit Model(...Dispose Reports( state=0|1 )...)

**Description:** Specifies that no individual model reports are shown and that they are removed from memory after fitting. When there are many thousands of responses, this option reduces computation time and saves memory. Use this option with the Results in Data Tables option to collect the results from the fitted models.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Bands Data.jmp" );
obj = dt << Fit Model(
	Y(
		:grain screened, :proof on ctd ink, :blade mfg, :paper type, :ink type, :direct steam,
		:solvent type, :type on cylinder, :press type, :unit number, :cylinder size,
		:paper mill location, :plating tank
	),
	Effects( "Banding?"n ),
	Personality( "Nominal Logistic" ),
	Results in Data Tables( 1 ),
	Dispose Reports( 1 ),
	Run
);

```

#### Effects

**Syntax:** obj = Run(...Effects( col, col, ... )...);obj = Run(...Effects( macro( col, col, ... ) )...)

**Description:** Assigns explanatory terms to the Effects role. You can specify effects individually or using the macros that are available in the Fit Model launch window. See various examples below.

**Effects**

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA\Big Class.jmp" );
dialog = dt << Fit Model( Y( :height ), Effects( :sex, :age, :weight ) );

```

**Factorial Sorted**

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA\Big Class.jmp" );
dialog = dt << Fit Model( Y( :height ), Effects( Factorial Sorted( :sex, :age, :weight ) ) );

```

**Factorial to Degree**

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA\Big Class.jmp" );
dialog = dt << Fit Model(
	Y( :height ),
	Set Degree( 2 ),
	Effects( Factorial to Degree( :sex, :age, :weight ) )
);

```

**Full Factorial**

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA\Big Class.jmp" );
dialog = dt << Fit Model( Y( :height ), Effects( Full Factorial( :sex, :age, :weight ) ) );

```

**Grouped Regressors**

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA\Big Class.jmp" );
dialog = dt << Fit Model( Y( :height ), Effects( Grouped Regressors( :height, :weight ) ) );

```

**Mixture Response Surface**

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA\Big Class.jmp" );
dialog = dt << Fit Model(
	Y( :height ),
	Effects( Mixture Response Surface( :weight, :age ) )
);

```

**Partial Cubic**

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA\Big Class.jmp" );
dialog = dt << Fit Model( Y( :height ), Effects( Partial Cubic( :height, :weight ) ) );

```

**Polynomial to Degree**

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA\Big Class.jmp" );
dialog = dt << Fit Model(
	Y( :height ),
	Set Degree( 5 ),
	Effects( Polynomial to Degree( :height, :weight ) )
);

```

**Response Surface**

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA\Big Class.jmp" );
dialog = dt << Fit Model( Y( :height ), Effects( Response Surface( :weight, :age ) ) );

```

**Scheffe Cubic**

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA\Big Class.jmp" );
dialog = dt << Fit Model( Y( :height ), Effects( Scheffe Cubic( :height, :weight ) ) );

```

#### Emphasis

**Syntax:** obj = Fit Model(...Personality( "Standard Least Squares" ), Emphasis( "Effect Leverage" | "Effect Screening" | "Minimal Report" )...)

**Description:** Specifies the types of plots and statistics that appear in the default report for the Standard Least Squares personality.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects( :SILICA, :SILANE ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Screening" )
);
obj << Run Model;

```

#### Error Specification

**Syntax:** obj = Fit Model(...Personality("Standard Least Squares" ), Error Specification( "Default Estimate" | "Pure Error" | "Specified" )...)

**Description:** Specifies the error variance and the error degrees of freedom that are used for standard errors and tests in the Fit Least Squares report. This option is available only for the Standard Least Squares personality when there are no random effects.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects( :SILICA, :SILANE ),
	Center Polynomials( 0 ),
	Personality( "Standard Least Squares" ),
	Error Specification( "Pure Error" ),
	Run
);

```

#### Estimate Only Variance Components

**Syntax:** obj = Fit Model(...Personality( "Standard Least Squares" ), Estimate Only Variance Components( state=0|1 )...)

**Description:** Runs a REML analysis using the specified model and shows a report that contains only the variance components from the model. Available only for the Standard Least Squares personality.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
);

```

#### Firth Bias-Adjusted Estimates

**Syntax:** obj = Fit Model(...Personality( "Generalized Linear Model" ), "Firth Bias-Adjusted Estimates"n( state=0|1 )...)

**Description:** Specifies that the Firth bias-adjusted method is used to fit the model. Available only for the Generalized Linear Model personality.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	"Firth Bias-Adjusted Estimates"n( 1 ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);

```

#### Fit Separately

**Syntax:** obj = Fit Model(...Personality( "Standard Least Squares" ), Fit Separately( state=0|1 )...)

**Description:** Fits a separate model for each Y variable using all rows that are nonmissing. This option is available only in the Standard Least Squares personality with models that have multiple Y variables and do not contain random effects.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Standard Least Squares" ),
	Fit Separately( 1 ),
	Run
);

```

#### GLM Distribution

**Syntax:** obj = Fit Model(...Personality( "Generalized Linear Model" ), GLM Distribution( distribution name )...)

**Description:** Specifies a probability distribution for the response variable. Available only for the Generalized Linear Model personality.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Binomial" ),
	Link Function( "Logit" ),
	Run
);

```

#### Generalized Distribution

**Syntax:** obj = Fit Model(...Personality( "Generalized Regression" ), Generalized Distribution( distribution name )...)

**Description:** Specifies the response probability distribution. Available only for the Generalized Regression personality.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Fit Model(
	Y( :height ),
	Effects( :weight, :sex ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Run(
		Fit(
			Estimation Method( "Maximum Likelihood" ),
			Validation Method( "None" ),
			Profiler( 1 )
		)
	)
);

```

#### Imputation Method

**Syntax:** obj = Fit Model(...Personality( "Partial Least Squares" ), Imputation Method( "Mean" | "EM" )...)

**Description:** Specifies the method for imputation. By default, the Mean method is used. Available only for the Partial Least Squares personality.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << Fit Model(
	Y( :POP, :Max deg. F Jan ),
	Effects( :OZONE, :CO, :SO2, :NO, :PM10, :Lead ),
	No Intercept( 1 ),
	Center Polynomials( 0 ),
	Personality( "Partial Least Squares" ),
	Impute Missing Data( 1 ),
	Imputation Method( "EM" ),
	Run(
		Initial Number of Factors( 6 ),
		Validation Method( KFold( 7 ), Initial Number of Factors( 6 ) ),
		Fit( Method( NIPALS ), Number of Factors( 2 ) )
	)
);

```

#### Impute Missing Data

**Syntax:** obj = Fit Model(...Personality( "Partial Least Squares" ), Impute Missing Data( state=0|1 )...)

**Description:** Replaces missing data values in the Y or X columns with nonmissing values using the specified Imputation Method. Available only for the Partial Least Squares personality.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << Fit Model(
	Y( :POP, :Max deg. F Jan ),
	Effects( :OZONE, :CO, :SO2, :NO, :PM10, :Lead ),
	No Intercept( 1 ),
	Center Polynomials( 0 ),
	Personality( "Partial Least Squares" ),
	Impute Missing Data( 1 ),
	Run(
		Initial Number of Factors( 6 ),
		Validation Method( KFold( 7 ), Initial Number of Factors( 6 ) ),
		Fit( Method( NIPALS ), Number of Factors( 2 ) )
	)
);

```

#### Informative Missing

**Syntax:** obj = Fit Model(...Informative Missing( state=0|1 )...)

**Description:** Enables missing value imputation and coding. When this option is not selected, rows with missing values are ignored.



For continuous variables, missing values are replaced by the mean of the variable. Also, a missingness indicator variable is created and included in the model.



For categorical variables, the missing values are not imputed, but are treated as another level of the variable in the model.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:height[3] = dt:age[2] = .;
dt << Fit Model(
	Y( :weight ),
	Effects( :height, :age ),
	Informative Missing( 1 ),
	Personality( "Standard Least Squares" ),
	Run
);

```

#### Keep dialog open

**Syntax:** obj &lt;&lt; Keep dialog open( state=0|1 )

**Description:** Specifies whether the Fit Model launch window stays open or is closed after the specified model is run.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << Fit Model(
	Y( :ABRASION ),
	Effects( :SILICA, :SILANE ),
	Personality( "Standard Least Squares" ),
	Keep dialog open( 1 ),
	Run
);

```

#### Link Function

**Syntax:** obj = Fit Model(...Personality( "Generalized Linear Model" ), Link Function( link type )...)

**Description:** Specifies the link function for the model. Available only for the Generalized Linear Model personality.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);

```

#### Max Iterations

**Syntax:** obj = Fit Model(...Personality( "Partial Least Squares" ), Max Iterations( number=1 )...)

**Description:** Specifies the maximum number of iterations that are used by the algorithm. The algorithm terminates if the maximum difference between the current and previous estimates of missing values is bounded by 10^-8. Available only for the Partial Least Squares personality.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << Fit Model(
	Y( :POP, :Max deg. F Jan ),
	Effects( :OZONE, :CO, :SO2, :NO, :PM10, :Lead ),
	No Intercept( 1 ),
	Center Polynomials( 0 ),
	Personality( "Partial Least Squares" ),
	Impute Missing Data( 1 ),
	Imputation Method( "EM" ),
	Max Iterations( 5 ),
	Run(
		Initial Number of Factors( 6 ),
		Validation Method( KFold( 7 ), Initial Number of Factors( 6 ) ),
		Fit( Method( NIPALS ), Number of Factors( 2 ) )
	)
);

```

#### Maximum Iterations

**Syntax:** obj = Fit Model(...Maximum Iterations( number=100 )...)

**Description:** Specifies the maximum number of iterations that are used in the model fitting. By default, the maximum number of iterations is 100.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Maximum Iterations( 150 ),
	Run
);

```

#### Method

**Syntax:** obj = Fit Model(...Personality( "Standard Least Squares" ), Method( "EMS" | "REML" )...)

**Description:** Specifies the method that is used for fitting mixed models in the Standard Least Squares personality.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	NoBounds( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Emphasis( "Minimal Report" ),
	Run
);

```

#### No Intercept

**Syntax:** obj = Fit Model(...No Intercept( state=0|1 )...)

**Description:** Sets the intercept to zero for the model.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects( :SILICA, :SILANE ),
	No Intercept( 1 ),
	Personality( "Standard Least Squares" ),
	Run
);

```

#### NoBounds

**Syntax:** obj = Fit Model(...Personality( "Standard Least Squares" ), NoBounds( state=0|1 )...)

**Description:** Removes the limits for variance estimations. When off, the lower limit for variance estimations is set to zero. Available only for the Standard Least Squares personality. On by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	NoBounds( 0 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Emphasis( "Minimal Report" ),
	Run
);

```

#### Nominal Coding

**Syntax:** obj = Fit Model(...Nominal Coding( "Average Level" | "Last Level" )...)

**Description:** Specifies whether the coding for nominal effects estimates differences from the average across the levels (the default) or from the last level.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tablet Production.jmp" );
dt << Fit Model(
	Y( :Disso ),
	Effects(
		:Mill Time, :Screen Size, :Blend Time, :Blend Speed, :Compressor, :Coating Viscosity,
		:Spray Rate
	),
	Personality( "Standard Least Squares" ),
	Nominal Coding( "Last Level" ),
	Emphasis( "Effect Leverage" ),
	Run
);

```

#### Overdispersion Tests and Intervals

**Syntax:** obj = Fit Model(...Personality( "Generalized Linear Model" ), Overdispersion Tests and Intervals( state=0|1 )...)

**Description:** Specifies that an overdispersion parameter should be included in the model. Available only for the Generalized Linear Model personality.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	Overdispersion Tests and Intervals( 1 ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);

```

#### Personality

**Syntax:** obj = Fit Model(...Personality( "Standard Least Sqaures" | "Stepwise" | "Generalized Regression" | "Mixed Model" | "Generalized Linear Mixed Model" | "Manova" | "Loglinear Variance" | "Nominal Logistic" | "Ordinal Logistic" | "Proportional Hazard" | "Parametric Survival" | "Generalized Linear Model" | "Partial Least Squares" | "Response Screening" )...)

**Description:** Specifies the type of analysis that is used to fit the model.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects( :SILICA, :SILANE ),
	Personality( "Standard Least Squares" )
);
obj << Run Model;

```

#### Power Link Parameter

**Syntax:** obj = Fit Model(...Personality( "Generalized Linear Model" ), Power Link Parameter( value=1 )...)

**Description:** Specifies the parameter for the Power link function. Available only when Power is specified as the link function in the Generalized Linear Model personality. "1" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	Overdispersion Tests and Intervals( 1 ),
	GLM Distribution( "Poisson" ),
	Link Function( "Power" ),
	Power Link Parameter( 0.5 ),
	Run
);

```

#### Quantile

**Syntax:** obj = Fit Model(...Personality( "Generalized Regression" ), Generalized Distribution( "Quantile Regression" ), Quantile( q=0.5 )...)

**Description:** Specifies the quantile of the response to be modeled. Available only for the Generalized Regression personality.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Fit Model(
	Y( :height ),
	Effects( :weight, :sex ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Quantile Regression" ),
	Quantile( 0.75 ),
	Run(
		Fit(
			Estimation Method( "Maximum Likelihood" ),
			Validation Method( "None" ),
			Profiler( 1 )
		)
	)
);

```

#### Results in Data Tables

**Syntax:** obj = Fit Model(...Results in Data Tables( state=0|1 )...)

**Description:** Saves the individual model results across many responses into data tables. The contents and number of output data tables depend on the model being fit.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Bands Data.jmp" );
obj = dt << Fit Model(
	Y(
		:grain screened, :proof on ctd ink, :blade mfg, :paper type, :ink type, :direct steam,
		:solvent type, :type on cylinder, :press type, :unit number, :cylinder size,
		:paper mill location, :plating tank
	),
	Effects( "Banding?"n ),
	Personality( "Nominal Logistic" ),
	Results in Data Tables( 1 ),
	Run
);

```

#### Robust Fit

**Syntax:** obj = Fit Model(...Personality( "Response Screening" ), Robust Fit( state=0|1 )...)

**Description:** Uses robust (Huber) estimation to down weight outliers. If there are no outliers, these estimates are close to the least squares estimates. Available only for the Response Screening personality. This message corresponds to the Robust Fit option in the Fit Model launch window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
dt << Fit Model(
	Effects( :Process, :Site, :Process * :Site ),
	Personality( "Response Screening" ),
	Y( 8 :: 394 ),
	Robust Fit( 1 ),
	Run
);

```

#### Run

**Syntax:** obj = Fit Model(...Run( &lt;options&gt; )...);obj &lt;&lt; Run( &lt;options&gt; )

**Description:** Runs the model that is specified in the Fit Model launch window and then closes the launch window.

**Example 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects( :SILICA, :SILANE ),
	Personality( "Standard Least Squares" ),
	Run( Show Prediction Expression( 1 ) )
);
obj << Run;

```

**Example 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects( :SILICA, :SILANE ),
	Personality( "Standard Least Squares" )
);
obj << Run;

```

#### Run Model

**Syntax:** obj &lt;&lt; Run Model

**Description:** Runs the model that is specified in the Fit Model launch window and keeps the launch window open.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects( :SILICA, :SILANE ),
	Personality( "Standard Least Squares" )
);
obj << Run Model;

```

#### Save to Data Table

**Syntax:** obj &lt;&lt; Save to Data Table

**Description:** Saves the model as JSL to the current data table.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects( :SILICA, :SILANE ),
	Personality( "Standard Least Squares" )
);
obj << Save to DataTable;

```

#### Save to Script Window

**Syntax:** obj &lt;&lt; Save to Script Window

**Description:** Saves the model as JSL to the script window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects( :SILICA, :SILANE ),
	Personality( "Standard Least Squares" )
);
obj << Save to Script Window;

```

#### Scaling

**Syntax:** obj = Fit Model(...Personality( "Partial Least Squares" ), Scaling( state=0|1 )...)

**Description:** Scales all response variables and model effects by dividing each column by its standard deviation. Available only for the Partial Least Squares personality. On by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
dt << Fit Model(
	Y( :ls, :ha, :dt ),
	Effects( 5 :: 31 ),
	No Intercept( 1 ),
	Personality( "Partial Least Squares" ),
	Scaling( 0 ),
	Run( Validation Method( KFold( 7 ) ), Fit( Method( NIPALS ) ), Number of Factors( 5 ) )
);

```

#### Set Alpha Level

**Syntax:** obj = Fit Model(...Set Alpha Level( state=0|1 )...)

**Description:** Specifies the alpha level for confidence intervals in the model reports.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects( :SILICA, :SILANE ),
	Center Polynomials( 0 ),
	Personality( "Standard Least Squares" ),
	Set Alpha Level( 0.01 ),
	Run
);

```

#### Standardize X

**Syntax:** obj = Fit Model(...Personality( "Partial Least Squares" ), Standardize X( state=0|1 )...)

**Description:** Centers and scales all columns that are used in the construction of model effects. If this option is not selected, higher-order effects are constructed using the original data table columns. Then each higher-order effect is centered or scaled, based on the selected Centering and Scaling options. Note that Standardize X does not center or scale Y variables. Available only for the Partial Least Squares personality. On by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
dt << Fit Model(
	Y( :ls, :ha, :dt ),
	Effects( 5 :: 31 ),
	No Intercept( 1 ),
	Personality( "Partial Least Squares" ),
	Standardize X( 0 ),
	Run( Validation Method( KFold( 7 ) ), Fit( Method( NIPALS ) ), Number of Factors( 5 ) )
);

```

#### Subgroup Twoway

**Syntax:** obj = Fit Model(...Personality( "Response Screening" ), Subgroup( column(s) ), Subgroup Twoway( state=0|1 )...)

**Description:** Fits all of the two-way subgroup combinations. This option is available only when at least one Subgroup variable is defined in the Response Screening personality.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Fit Model(
	Y( :age ),
	Effects( :sex, :type ),
	Subgroup( :country, :marital status ),
	Personality( "Response Screening" ),
	Subgroup Twoway( 1 ),
	Run
);

```

#### Suppress Coding

**Syntax:** obj = Fit Model(...Suppress Coding( state=0|1 )...)

**Description:** Suppresses any Coding column property so that estimates are for the original scale. The Coding column property enables you to more easily compare estimates and is helpful in making lower order effect tests meaningful. The Suppress Coding option is not recommended unless you need it.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );
obj = dt << Fit Model(
	Y( :Stretch ),
	Effects( :Silica, :Sulfur, :Silane ),
	Suppress Coding( 1 ),
	Personality( "Standard Least Squares" ),
	Run
);

```

#### Suppress Reports

**Syntax:** obj = Fit Model(...Suppress Reports( state=0|1 )...)

**Description:** Specifies that the individual model reports are hidden. When there are thousands of responses, this option reduces computation time. The fitting objects and some menu items are still available. Use the Results in Data Tables option to collect the results from the model reports.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Bands Data.jmp" );
obj = dt << Fit Model(
	Y(
		:grain screened, :proof on ctd ink, :blade mfg, :paper type, :ink type, :direct steam,
		:solvent type, :type on cylinder, :press type, :unit number, :cylinder size,
		:paper mill location, :plating tank
	),
	Effects( "Banding?"n ),
	Personality( "Nominal Logistic" ),
	Results in Data Tables( 1 ),
	Suppress Reports( 1 ),
	Run
);

```

#### Suppress Warning for Missing Effects

**Syntax:** obj = Fit Model(...Suppress Warning for Missing Effects( state=0|1 )...)

**Description:** Suppresses warning alerts that lower-order effects implied by higher-order effects are not in the model. This option is useful when experimenting with many subset models.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );
obj = dt << Fit Model(
	Y( :Stretch ),
	Effects( :Silica, :Sulfur * :Silane ),
	Suppress Warning for Missing Effects( 1 ),
	Personality( "Standard Least Squares" ),
	Run
);

```

#### Target Level

**Syntax:** obj = Fit Model(...Target Level( level )...)

**Description:** Specifies the level whose probability you want to model. The default value is the higher of the two levels based on the order of the levels. Available only in certain personalities and when the Y variable is binary and has a Nominal modeling type.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Target Level( "Cured" ),
	Run( Likelihood Ratio Tests( 1 ), Wald Tests( 0 ), Logistic Plot( 1 ) )
);

```

