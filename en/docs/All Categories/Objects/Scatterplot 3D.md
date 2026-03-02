# Scatterplot 3D



## Associated Constructors

### Scatterplot 3D

**Syntax:** Scatterplot 3D( Y( columns ) )

**Description:** Produces a rotating three-dimensional scatterplot for three or more variables. If you specify more than three variables, you can cycle through which variables are shown in the scatterplot.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );

```

## Columns

### By

**Syntax:** obj &lt;&lt; By( column(s) )

**Description:** Produce multiple reports, one for each level of the variable(s).

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Scatterplot 3D(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));

```

### Coloring

**Syntax:** obj &lt;&lt; Coloring( column )

**Description:** Colors the markers according to the selected variable.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Scatterplot 3D(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Coloring( :Sepal length ));

```

### Freq

**Syntax:** obj &lt;&lt; Freq( column )

**Description:** A column whose values assign a frequency to each row for the analysis.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );dt << New Column( "_freqcol", Numeric, Continuous, Set Each Value( Random Integer( 1, 5 ) ) );obj = dt << Scatterplot 3D(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Freq( :_freqcol ));

```

### Weight

**Syntax:** obj &lt;&lt; Weight( column )

**Description:** A column whose values assign a weight to each row for the analysis.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );dt << New Column( "_weightcol", Numeric, Continuous, Set Each Value( Random Beta( 1, 1 ) ) );obj = dt << Scatterplot 3D(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Weight( :_weightcol ));

```

### Y

**Syntax:** obj &lt;&lt; Y( column(s) )

**Description:** Variables that will be available for the X, Y, and Z coordinates in the 3D graph.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );

```

## Item Messages

### Biplot Rays

**Syntax:** obj &lt;&lt; Biplot Rays( state=0|1 )

**Description:** Shows or hides the biplot rays on the graph. On by default with principal components.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Principal Components( 1 );obj << Biplot Rays( 1 );

```

### Circle Size

**Syntax:** obj &lt;&lt; Circle Size( number=0.2 )

**Description:** Sets the marker size when "Sized Points" is set or a Weight or Freq role is used. "0.2" by default.

**JMP Version Added:** 18

```jsl

// slightly larger circlesdt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Scatterplot 3D(	Y( :Sepal length, :Sepal width, :Petal length ),	Weight( :Petal width ),	Circle Size( .3 ));

```

### Connect Points

**Syntax:** obj &lt;&lt; Connect Points( state=0|1, &lt;group column name&gt; )

**Description:** Displays or hides lines connecting the points. Optionally, the points can be grouped.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Connect Points( 1, :Species );

```

### Drop Line Thickness

**Syntax:** obj &lt;&lt; Drop Line Thickness( fraction=0.03 )

**Description:** Sets the line thickness of the drop line. "0.03" by default.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Drop Lines( 1 );Wait( 2 );obj << Drop Line Thickness( 0.8 );

```

### Drop Lines

**Syntax:** obj &lt;&lt; Drop Lines( state=0|1 )

**Description:** Draws or hides lines from the floor defined by the first and third variables to each point in the graph.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Drop Lines( 1 );

```

### Ellipsoid Coverage

**Syntax:** obj &lt;&lt; Ellipsoid Coverage( fraction=0.5 )

**Description:** Sets the coverage for the ellipse. For example, 0.5 covers the most dense half of the data. "0.5" by default.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Ellipsoid Coverage( 0.8 );obj << Normal Contour Ellipsoids( 1, :Species );

```

### Ellipsoid Transparency

**Syntax:** obj &lt;&lt; Ellipsoid Transparency( fraction=0.5 )

**Description:** Sets the transparency for the ellipse. 0 [clear] and 1 [opaque]. "0.5" by default.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Ellipsoid Transparency( 0.4 );obj << Normal Contour Ellipsoids( 1, :Species );

```

### Frame3D

**Syntax:** obj &lt;&lt; Frame3D( &lt;commands passed to Frame3D&gt; )

**Description:** Sends display commands to the 3D plot.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Frame3D( Set View Zoom( 0.9075 ) );

```

### Jitter

**Syntax:** obj &lt;&lt; Jitter( state=0|1 )

**Description:** Jitters the points by moving them slightly on the scatterplot. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Petal length, :Petal width, :Species ), Jitter( 0 ) );

```

### Legend

**Syntax:** obj &lt;&lt; Legend( &lt;Legend Model ID&gt; )

### Nonpar Density Contour

**Syntax:** obj &lt;&lt; Nonpar Density Contour( state=0|1, &lt;group column name&gt; )

**Description:** Draws a 95% kernel contour shell around the points.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Nonpar Density Contour( 1, :Species );

```

### Nonpar Density Contour Settings

**Syntax:** obj &lt;&lt; Nonpar Density Contour Settings( surface, on=0|1, &lt;quantile&gt;, &lt;transparency&gt;, &lt;color&gt; )

**Description:** Settings for the isosurface

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Nonpar Density Contour( 1 );obj << Nonpar Density Contour Settings( 1, 1, .5, .6, Green );

```

### Normal Contour Ellipsoids

**Syntax:** obj &lt;&lt; Normal Contour Ellipsoids( state=0|1, &lt;group column name&gt; )

**Description:** Displays or hides the normal contour ellipsoids.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Normal Contour Ellipsoids( 1, :Species );

```

### Principal Components

**Syntax:** obj &lt;&lt; Principal Components( state=0|1 )

**Description:** Displays both the Principal Components report and the rays on the graph.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Principal Components;

```

### Remove Prin Comp

**Syntax:** obj &lt;&lt; Remove Prin Comp

**Description:** Removes the Principal Components report and the rays on the graph.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Principal Components( 1 );Wait( 2 );obj << Remove Prin Comp;

```

### Rotated Components

**Syntax:** obj &lt;&lt; Rotated Components( PC|ML, ONE|SMC , number, Varimax| Biquartimax| Quartimax|Equamax|Orthomax| Factorparsimax... )

**Description:** Displays a report with rotated principal components, where the components more closely align with the coordinate space. The second parameter defines the diagonals used in the prior communality and can be either SMC or ONE (principal components).

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Rotated Components( PC, ONE, 3, Varimax );

```

### Save Prin Components

**Syntax:** obj &lt;&lt; Save Prin Components( number )

**Description:** Saves the principal components as new columns in the data table

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Principal Components( 1 );obj << Save Prin Components( 3 );

```

### Save Rotated Components

**Syntax:** obj &lt;&lt; Save Rotated Components

**Description:** Saves the rotated principal components as new columns in the data table

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Rotated Components( PC, ONE, 3, Varimax );obj << Save Rotated Components;

```

### Show Controls

**Syntax:** obj &lt;&lt; Show Controls( state=0|1 )

**Description:** Shows or hides the control panel at the bottom of the scatterplot. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Show Controls( 1 );

```

### Show Points

**Syntax:** obj &lt;&lt; Show Points( state=0|1 )

**Description:** Shows or hides the points on the scatterplot. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Show Points( 1 );

```

### Show Ray Labels

**Syntax:** obj &lt;&lt; Show Ray Labels( state=0|1 )

**Description:** Shows or hides labels on rays. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Principal Components( 1 );obj << Biplot Rays( 1 );obj << Show Ray Labels( 1 );

```

### Sized Points

**Syntax:** obj &lt;&lt; Sized Points( state=0|1 )

**Description:** Grows or shrinks the points on the scatterplot.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Sized Points( 1 );

```

### Std Prin Components

**Syntax:** obj &lt;&lt; Std Prin Components( state=0|1 )

**Description:** Displays both the standardized Principal Components report and the rays on the graph.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Std Prin Components;

```

## Shared Item Messages

### Action

**Syntax:** obj &lt;&lt; Action

**Description:** All-purpose trapdoor within a platform to insert expressions to evaluate. Temporarily sets the DisplayBox and DataTable contexts to the Platform.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

### Apply Preset

**Syntax:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**Description:** Apply a previously created preset to the object, updating the options and customizations to match the saved settings.

**JMP Version Added:** 18

#### Anonymous preset

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );Wait( 1 );obj2 << Apply Preset( preset );

```

#### Search by name

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

#### Search within folder(s)

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

### Automatic Recalc

**Syntax:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**Description:** Redoes the analysis automatically for exclude and data changes. If the Automatic Recalc option is turned on, you should consider using Wait(0) commands to ensure that the exclude and data changes take effect before the recalculation.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Automatic Recalc( 1 );dt << Select Rows( 5 ) << Exclude( 1 );

```

### Broadcast

**Syntax:** obj &lt;&lt; Broadcast(message)

**Description:** Broadcasts a message to a platform. If return results from individual objects are tables, they are concatenated if possible, and the final format is identical to either the result from the Save Combined Table option in a Table Box or the result from the Concatenate option using a Source column. Other than those, results are stored in a list and returned.

**JMP Version Added:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );objs = Control Chart Builder(	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),	By( :OPERATOR ));objs[1] << Broadcast( Save Summaries );

```

### Column Switcher

**Syntax:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Description:** Adds a control panel for changing the platform&apos;s variables

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});

```

### Copy ByGroup Script

**Syntax:** obj &lt;&lt; Copy ByGroup Script

**Description:** Create a JSL script to produce this analysis, and put it on the clipboard.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Scatterplot 3D(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Copy ByGroup Script;

```

### Copy Script

**Syntax:** obj &lt;&lt; Copy Script

**Description:** Create a JSL script to produce this analysis, and put it on the clipboard.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Copy Script;

```

### Data Table Window

**Syntax:** obj &lt;&lt; Data Table Window

**Description:** Move the data table window for this analysis to the front.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Data Table Window;

```

### Get By Levels

**Syntax:** obj &lt;&lt; Get By Levels

**Description:** Returns an associative array mapping the by group columns to their values.

**JMP Version Added:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv << Get By Levels;

```

### Get ByGroup Script

**Syntax:** obj &lt;&lt; Get ByGroup Script

**Description:** Creates a script (JSL) to produce this analysis and returns it as an expression.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Scatterplot 3D(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));t = obj[1] << Get ByGroup Script;Show( t );

```

### Get Container

**Syntax:** obj &lt;&lt; Get Container

**Description:** Returns a reference to the container box that holds the content for the object.

#### General

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Platform with Filter

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

### Get Data Table

**Syntax:** obj &lt;&lt; Get Data Table

**Description:** Returns a reference to the data table.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );t = obj << Get Datatable;Show( N Rows( t ) );

```

### Get Group Platform

**Syntax:** obj &lt;&lt; Get Group Platform

**Description:** Return the Group Platform object if this platform is part of a Group. Otherwise, returns Empty().

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );group = biv[1] << Get Group Platform;Wait( 1 );group << Layout( "Arrange in Tabs" );

```

### Get Script

**Syntax:** obj &lt;&lt; Get Script

**Description:** Creates a script (JSL) to produce this analysis and returns it as an expression.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );t = obj << Get Script;Show( t );

```

### Get Script With Data Table

**Syntax:** obj &lt;&lt; Get Script With Data Table

**Description:** Creates a script(JSL) to produce this analysis specifically referencing this data table and returns it as an expression.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );t = obj << Get Script With Data Table;Show( t );

```

### Get Timing

**Syntax:** obj &lt;&lt; Get Timing

**Description:** Times the platform launch.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );t = obj << Get Timing;Show( t );

```

### Get Web Support

**Syntax:** obj &lt;&lt; Get Web Support

**Description:** Return a number indicating the level of Interactive HTML support for the display object. 1 means some or all elements are supported. 0 means no support.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );s = obj << Get Web Support();Show( s );

```

### Get Where Expr

**Syntax:** obj &lt;&lt; Get Where Expr

**Description:** Returns the Where expression for the data subset, if the platform was launched with By() or Where(). Otherwise, returns Empty()

**JMP Version Added:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

### Ignore Platform Preferences

**Syntax:** Ignore Platform Preferences( state=0|1 )

**Description:** Ignores the current settings of the platform&apos;s preferences. The message is ignored when sent to the platform after creation.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Ignore Platform Preferences( 1 ),	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

### Local Data Filter

**Syntax:** obj &lt;&lt; Local Data Filter

**Description:** To filter data to specific groups or ranges, but local to this platform

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));

```

### New Preset

**Syntax:** obj = New Preset()

**Description:** Create an anonymous preset representing the options and customizations applied to the object. This object can be passed to Apply Preset to copy the settings to another object of the same type.

**JMP Version Added:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();

```

### Paste Local Data Filter

**Syntax:** obj &lt;&lt; Paste Local Data Filter

**Description:** Apply the local data filter from the clipboard to the current report.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );filter = dist << Local Data Filter(	Add Filter( columns( :Region ), Where( :Region == "MW" ) ));filter << Copy Local Data Filter;dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );Wait( 1 );dist2 << Paste Local Data Filter;

```

### Redo Analysis

**Syntax:** obj &lt;&lt; Redo Analysis

**Description:** Rerun this same analysis in a new window. The analysis will be different if the data has changed.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Redo Analysis;

```

### Relaunch Analysis

**Syntax:** obj &lt;&lt; Relaunch Analysis

**Description:** Opens the platform launch window and recalls the settings that were used to create the report.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Relaunch Analysis;

```

### Remove Column Switcher

**Syntax:** obj &lt;&lt; Remove Column Switcher

**Description:** Removes the most recent Column Switcher that has been added to the platform.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});Wait( 2 );obj << Remove Column Switcher;

```

### Remove Local Data Filter

**Syntax:** obj &lt;&lt; Remove Local Data Filter

**Description:** If a local data filter has been created, this removes it and restores the platform to use all the data in the data table directly

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dist = dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));Wait( 2 );dist << remove local data filter;

```

### Report

**Syntax:** obj &lt;&lt; Report; Report( obj )

**Description:** Returns a reference to the report object.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Report View

**Syntax:** obj &lt;&lt; Report View( "Full"|"Summary" )

**Description:** The report view determines the level of detail visible in a platform report. Full shows all of the detail, while Summary shows only select content, dependent on the platform. For customized behavior, display boxes support a <<Set Summary Behavior message.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**Syntax:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description:** Creates a JSL script to produce this analysis, and save it as a table property in the data table. You can specify a name for the script. The Append Suffix option appends a numeric suffix to the script name, which differentiates the script from an existing script with the same name. The Prompt option prompts the user to specify a script name. The Replace option replaces an existing script with the same name.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Scatterplot 3D(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Syntax:** obj &lt;&lt; Save ByGroup Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Scatterplot 3D(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Syntax:** obj &lt;&lt; Save ByGroup Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Scatterplot 3D(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Syntax:** obj &lt;&lt; Save Script for All Objects

**Description:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntax:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Description:** Saves a script for all report objects to the current data table. This option is useful when you have multiple reports in the window. The script is named after the first platform unless you specify the script name in quotes.

**Example 1**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Scatterplot 3D(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table;

```

**Example 2**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Scatterplot 3D(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntax:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description:** Create a JSL script to produce this analysis, and save it as a table property in the data table.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntax:** obj &lt;&lt; Save Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Save Script to Journal;

```

### Save Script to Report

**Syntax:** obj &lt;&lt; Save Script to Report

**Description:** Create a JSL script to produce this analysis, and show it in the report itself. Useful to preserve a printed record of what was done.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Save Script to Report;

```

### Save Script to Script Window

**Syntax:** obj &lt;&lt; Save Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Save Script to Script Window;

```

### SendToByGroup

**Syntax:** SendToByGroup( {":Column == level"}, command );

**Description:** Sends platform commands or display customization commands to each level of a by-group.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	By( :Sex ),	SendToByGroup(		{:sex == "F"},		Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) )	),	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) ));

```

### SendToEmbeddedScriptable

**Syntax:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Description:** SendToEmbeddedScriptable restores settings of embedded scriptable objects.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );dt << Life Distribution(	Y( :Time ),	Censor( :Censor ),	Censor Code( 1 ),	<<Fit Weibull,	SendToEmbeddedScriptable(		Dispatch(			{"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}		)	));

```

### SendToReport

**Syntax:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Description:** Send To Report is used in tandem with the Dispatch command to customize the appearance of a report.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Nominal Distribution( Column( :age ) ),	Continuous Distribution( Column( :weight ) ),	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) ));

```

### Sync to Data Table Changes

**Syntax:** obj &lt;&lt; Sync to Data Table Changes

**Description:** Sync with the exclude and data changes that have been made.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );Wait( 1 );dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );dist << Sync To Data Table Changes;

```

### Title

**Syntax:** obj &lt;&lt; Title( "new title" )

**Description:** Sets the title of the platform.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Title( "My Platform" );

```

### Top Report

**Syntax:** obj &lt;&lt; Top Report

**Description:** Returns a reference to the root node in the report.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Transform Column

**Syntax:** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Description:** Create a transform column in the local context of an object, usually a platform. The transform column is active only for the lifetime of the platform.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),	Continuous Distribution( Column( :"age^2"n ) ));

```

### View Web XML

**Syntax:** obj &lt;&lt; View Web XML

**Description:** Returns the XML code that is used to create the interactive HTML report.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );xml = obj << View Web XML;

```

### Window View

**Syntax:** obj = Scatterplot 3D(...Window View( "Visible"|"Invisible"|"Private" )...)

**Description:** Set the type of the window to be created for the report. By default a Visible report window will be created. An Invisible window will not appear on screen, but is discoverable by functions such as Window(). A Private window responds to most window messages but is not discoverable and must be addressed through the report object

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

## Frame3D

### Associated Constructors

#### Graph 3D Box

**Syntax:** y = Graph 3D Box()

**Description:** Sends display commands to the 3D plot.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );

```

### Item Messages

#### Add Ellipsoid

**Syntax:** obj &lt;&lt; Add Ellipsoid( 4x4 matrix ) obj &lt;&lt; Add Ellipsoid(3x3 cov,3x1 means) obj &lt;&lt; Add Ellipsoid(3x3 corr,3x1 means,3x1 std dev)

**Description:** Draws an ellipsoid on the plot.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Frame3D(	Add Ellipsoid(		[1 0.42632 0.85183, 0.42632 1 0.34418, 0.85183 0.34418 1],		[6.55099 2.96919 5.5066],		[0.57829 0.29087 0.53668]	));

```

#### Add Markers

**Syntax:** obj &lt;&lt; Add Markers( [ nx1 X matrix ], [ nx1 Y matrix ], [ nx1 Z matrix ] )

**Description:** Draws n markers on the plot.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Frame3D( Add Markers( [2 3 4], [5 6 7], [1 8 9] ) );

```

#### Add Vector

**Syntax:** obj &lt;&lt; Add Vector( [ 3xn from matrix ], [ 3xn to matrix ], FromCap( CutOff|Sphere|Point|Feather ), ToCap( CutOff|Sphere|Point|Feather ), Facets( Triangle|Square|Round ), Shaft Color( color ), Shaft Thickness( number ), From Thickness( number ), To Thickness( number ), From Color( number ), To Color( number ) ) )

**Description:** Draws a vector or arrow on the plot.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Frame3D( Add Vector( [4.5 2 1], [7.5 4 6], FromCap( "Feather" ), ToCap( "Point" ) ) );

```

#### Get Axes

**Syntax:** obj &lt;&lt; Get Axes

**Description:** Returns the state of displaying the axes on the plot.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );s = obj << Frame3D( Get Axes );Show( s );

```

#### Get Box

**Syntax:** obj &lt;&lt; Get Box

**Description:** Returns the state of displaying the box frame on the plot.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );s = obj << Frame3D( Get Box );Show( s );

```

#### Get Grab Handles

**Syntax:** obj &lt;&lt; Get Grab Handles

**Description:** Returns the state of displaying the grab handles on the plot.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );s = obj << Frame3D( Get Box );Show( s );

```

#### Get Graph Size

**Syntax:** obj &lt;&lt; Get Graph Size

**Description:** Returns the size of the graph.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );s = obj << Frame3D( Get Graph Size );Show( s );

```

#### Get Grids

**Syntax:** obj &lt;&lt; Get Grids

**Description:** Returns the state of displaying the grids on the plot.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );s = obj << Frame3D( Get Grids );Show( s );

```

#### Get Hide Lights Border

**Syntax:** obj &lt;&lt; Get Hide Lights Border

**Description:** Returns the state of the lights border around the plot.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );state = obj << Frame3D( Get Hide Lights Border );Show( state );

```

#### Get Line Scale

**Syntax:** obj &lt;&lt; Get Line Scale

**Description:** Returns the line width for the plot.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );w = obj << Frame3D( Get Line Scale );Show( w );

```

#### Get Marker Quality

**Syntax:** obj &lt;&lt; Get Marker Quality

**Description:** Returns the marker characteristics such as shape and shade for the plot.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );q = obj << Frame3D( Get Marker Quality );Show( q );

```

#### Get Marker Scale

**Syntax:** obj &lt;&lt; Get Marker Scale

**Description:** Returns the marker size for the plot.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );s = obj << Frame3D( Get Marker Scale );Show( s );

```

#### Get Marker Transparency

**Syntax:** obj &lt;&lt; Get Marker Transparency

**Description:** Returns the marker transparency for the plot.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );t = obj << Frame3D( Get Marker Transparency );Show( t );

```

#### Get Rotation

**Syntax:** obj &lt;&lt; Get Rotation

**Description:** Returns the current rotation for the frame.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );r = obj << Frame3D( Get Rotation() );Show( r );

```

#### Get Text Scale

**Syntax:** obj &lt;&lt; Get Text Scale

**Description:** Returns the text size for the plot.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );s = obj << Frame3D( Get Text Scale );Show( s );

```

#### Get View Ortho

**Syntax:** obj &lt;&lt; Get View Ortho

**Description:** Returns the state of the orthographic view for the plot.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );o = obj << Frame3D( Get View Ortho );Show( o );

```

#### Get View Perspective

**Syntax:** obj &lt;&lt; Get View Perspective

**Description:** Returns the view perspective for the plot.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );p = obj << Frame3D( Get View Perspective );Show( p );

```

#### Get View Zoom

**Syntax:** obj &lt;&lt; Get View Zoom

**Description:** Returns the current zoom for the plot.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );z = obj << Frame3D( Get View Zoom );Show( z );

```

#### Get Wall Color

**Syntax:** obj &lt;&lt; Get Wall Color

**Description:** Returns the wall color for the plot.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );c = obj << Frame3D( Get Wall Color );Show( c );

```

#### Get Walls

**Syntax:** obj &lt;&lt; Get Walls

**Description:** Returns the state of displaying the walls on the plot.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );s = obj << Frame3D( Get Walls );Show( s );

```

#### Get X Axis Color

**Syntax:** obj &lt;&lt; Get X Axis Color

**Description:** Returns the x axis color for the plot.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );c = obj << Frame3D( Get X Axis Color );Show( c );

```

#### Get X Axis Label

**Syntax:** obj &lt;&lt; Get X Axis Label

**Description:** Returns the label for the X Axis on the plot.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );label = obj << Frame3D( Get X Axis Label );Show( label );

```

#### Get Y Axis Color

**Syntax:** obj &lt;&lt; Get Y Axis Color

**Description:** Returns the y axis color for the plot.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );c = obj << Frame3D( Get Y Axis Color );Show( c );

```

#### Get Y Axis Label

**Syntax:** obj &lt;&lt; Get Y Axis Label

**Description:** Returns the label for the Y Axis on the plot.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );label = obj << Frame3D( Get Y Axis Label );Show( label );

```

#### Get Z Axis Color

**Syntax:** obj &lt;&lt; Get Z Axis Color

**Description:** Returns the z axis color for the plot.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );c = obj << Frame3D( Get Z Axis Color );Show( c );

```

#### Get Z Axis Label

**Syntax:** obj &lt;&lt; Get Z Axis Label

**Description:** Returns the label for the Z Axis on the plot.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );label = obj << Frame3D( Get Z Axis Label );Show( label );

```

#### Set Axes

**Syntax:** obj &lt;&lt; Set Axes( state=0|1 )

**Description:** Shows or hides the x, y, and z axes on the plot. On by default.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Frame3D( Set Axes( 1 ) );

```

#### Set Box

**Syntax:** obj &lt;&lt; Set Box( state=0|1 )

**Description:** Shows or hides the box frame on the plot. On by default.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Frame3D( Set Box( 1 ) );

```

#### Set Graph Size

**Syntax:** obj &lt;&lt; Set Graph Size( x, y )

**Description:** Sets the size of the graph.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Frame3D( Set Graph Size( 700, 800 ) );

```

#### Set Grids

**Syntax:** obj &lt;&lt; Set Grids( state=0|1 )

**Description:** Shows or hides the grids on the plot. On by default.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Frame3D( Set Grids( 1 ) );

```

#### Set Hide Lights Border

**Syntax:** obj &lt;&lt; Set Hide Lights Border( state=0|1 )

**Description:** Hides or displays the lights border around the plot. On by default.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Frame3D( Set Hide Lights Border( 0 ) );

```

#### Set Line Scale

**Syntax:** obj &lt;&lt; Set Line Scale( number )

**Description:** Sets the line width for the grid on the plot.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Frame3D( Set Line Scale( 6.5 ) );

```

#### Set Marker Quality

**Syntax:** obj &lt;&lt; Set Marker Quality( number )

**Description:** Sets the marker characteristics such as shape and shade for the plot.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Frame3D( Set Marker Scale( 3 ), Set Marker Quality( 0.2625 ) );

```

#### Set Marker Scale

**Syntax:** obj &lt;&lt; Set Marker Scale( number )

**Description:** Sets the marker size for the plot.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Frame3D( Set Marker Scale( 3.5 ) );

```

#### Set Marker Transparency

**Syntax:** obj &lt;&lt; Set Marker Transparency( fraction )

**Description:** Sets the marker transparency for the plot.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Frame3D( Set Marker Transparency( 0.4125 ) );

```

#### Set Oscillation

**Syntax:** obj &lt;&lt; Set Oscillation( X, Y, Z, duration )

**Description:** Sets oscillation rate on the plot.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Frame3D( Set Rotation( -60, -3, 35 ), Set Oscillation( -54, 0, 38, 100 ) );

```

#### Set Rotation

**Syntax:** obj &lt;&lt; Set Rotation( X, Y, Z )

**Description:** Rotates the frame to the specified coordinates.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Frame3D( Set Rotation( -60, -3, 35 ) );

```

#### Set Spin

**Syntax:** obj &lt;&lt; Set Spin( dx, dy, sx, sy )

**Description:** Spins the graph on a specified axis. The values dx and dy are a delta motion of the mouse from the point, (sx, sy).

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Frame3D( Set Spin( .01, .01, 0, 0 ) );

```

#### Set Text Scale

**Syntax:** obj &lt;&lt; Set Text Scale( number )

**Description:** Sets the text size for the axis text on the plot.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Frame3D( Set Text Scale( 1.4 ) );

```

#### Set View Ortho

**Syntax:** obj &lt;&lt; Set View Ortho( state=0|1 )

**Description:** Displays the plot orthographically or linearly.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Frame3D( Set View Ortho( 1 ) );

```

#### Set View Perspective

**Syntax:** obj &lt;&lt; Set View Perspective( fraction )

**Description:** Sets the view perspective on the plot.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Frame3D( Set View Perspective( 0.275 ) );

```

#### Set View Zoom

**Syntax:** obj &lt;&lt; Set View Zoom( number )

**Description:** Sets the zoom on the plot.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Frame3D( Set View Zoom( 0.5 ) );Wait( 2 );obj << Frame3D( Set View Zoom( 2 ) );

```

#### Set Wall Color

**Syntax:** obj &lt;&lt; Set Wall Color( number )

**Description:** Sets the wall color on the plot.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Frame3D( Set Wall Color( -16775543 ) );

```

#### Set Walls

**Syntax:** obj &lt;&lt; Set Walls( state=0|1 )

**Description:** Shows or hides the walls on the plot. On by default.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Frame3D( Set Walls( 1 ) );

```

#### Set X Axis Color

**Syntax:** obj &lt;&lt; Set X Axis Color( color )

**Description:** Sets the x axis color on the plot.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Frame3D( Set X Axis Color( 5 ) );

```

#### Set X Axis Label

**Syntax:** obj &lt;&lt; Set X Axis Label( string )

**Description:** Sets the label for the X Axis on the plot.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Frame3D( Set X Axis Label( "Iris Sepal Length" ) );

```

#### Set Y Axis Color

**Syntax:** obj &lt;&lt; Set Y Axis Color( color )

**Description:** Sets the y axis color on the plot.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Frame3D( Set Y Axis Color( 11 ) );

```

#### Set Y Axis Label

**Syntax:** obj &lt;&lt; Set Y Axis Label( string )

**Description:** Sets the label for the Y Axis on the plot.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Frame3D( Set Y Axis Label( "Iris Petal Length" ) );

```

#### Set Z Axis Color

**Syntax:** obj &lt;&lt; Set Z Axis Color( color )

**Description:** Sets the z axis color on the plot.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Frame3D( Set Z Axis Color( "Green" ) );

```

#### Set Z Axis Label

**Syntax:** obj &lt;&lt; Set Z Axis Label( string )

**Description:** Sets the label for the Z Axis on the plot.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Frame3D( Set Z Axis Label( "Iris Sepal Width" ) );

```

#### XAxis

**Syntax:** obj &lt;&lt; XAxis( Min( number ), Max( number ), Inc( number ), Format( ) )

**Description:** Sets the values for the X Axis on the plot.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Frame3D( XAxis( Min( 3 ), Max( 10 ) ) );

```

#### YAxis

**Syntax:** obj &lt;&lt; YAxis( Min( number ), Max( number ), Inc( number ), Format( ) )

**Description:** Sets the values for the Y Axis on the plot.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Frame3D( YAxis( Min( 1 ), Max( 10 ), Inc( 0.5 ) ) );

```

#### Z Axis

**Syntax:** obj &lt;&lt; Z Axis( Min( number ), Max( number ), Inc( number ), Format( ) )

**Description:** Sets the values for the Z Axis on the plot.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Frame3D( ZAxis( Min( 1 ), Max( 5 ), Inc( 0.25 ) ) );

```

#### get light active

**Syntax:** obj &lt;&lt; get light active( light number )

**Description:** Returns the specified light activation shining on the plot.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );p = obj << Frame3D( Set Hide Lights Border( 0 ), Get Light Active( 2 ) );Show( p );

```

#### get light color

**Syntax:** obj &lt;&lt; get light color( light number )

**Description:** Returns the specified light color shining on the plot as a list {red, green, blue}.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );c = obj << Frame3D( Set Hide Lights Border( 0 ), Get Light Color( 1 ) );Show( c );

```

#### get light position

**Syntax:** obj &lt;&lt; get light position( light number )

**Description:** Returns the specified light position shining on the plot as a list {x, y, z}.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );p = obj << Frame3D( Set Hide Lights Border( 0 ), Get Light Position( 2 ) );Show( p );

```

#### set light active

**Syntax:** obj &lt;&lt; set light active( light number, state=0|1 )

**Description:** Turns on the specified light shining on the plot.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Frame3D( Set Hide Lights Border( 0 ), Set Light Active( 4, 1 ) );

```

#### set light color

**Syntax:** obj &lt;&lt; set light color( light number, red value, green value, blue value )

**Description:** Sets the color of the light shining on the plot.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Frame3D( Set Hide Lights Border( 0 ), Set Light Color( 2, 240, 50, 70 ) );

```

#### set light position

**Syntax:** obj &lt;&lt; set light position( light number, X, Y, Z )

**Description:** Sets the light position shining on the plot.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Frame3D( Set Hide Lights Border( 0 ), Set Light Position( 2, -1.5833, 10, 0 ) );

```

