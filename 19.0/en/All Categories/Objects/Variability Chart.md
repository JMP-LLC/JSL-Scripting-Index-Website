# Variability Chart



## Associated Constructors

### Variability Chart

**Syntax:** Variability Chart( Y( column ), X( columns ) )

**Description:** Analyzes continuous measurements to determine how your measurement system is performing. You can also perform a gauge study to see measures of variation in your data.

#### Decide Later on Model

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );

```

#### Crossed Effects Model

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
Y( :Measurement ),
Model( "Crossed" ),
X( :Operator, :part# ),
Variance Components( 1 )
);

```

#### Crossed then Nested Effects Model

```jsl

dt = New Table( "3 Factors Crossed then Nested",
Add Rows( 81 ),
New Column( "Operator",
Character( 7 ),
"Nominal",
Set Values(
{"Clara", "Clara", "Clara", "Clara", "Clara", "Clara", "Clara", "Clara", "Clara",
"Clara", "Clara", "Clara", "Clara", "Clara", "Clara", "Clara", "Clara", "Clara",
"Clara", "Clara", "Clara", "Clara", "Clara", "Clara", "Clara", "Clara", "Clara",
"Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo",
"Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo",
"Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo",
"Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo", "Jane", "Jane",
"Jane", "Jane", "Jane", "Jane", "Jane", "Jane", "Jane", "Jane", "Jane", "Jane",
"Jane", "Jane", "Jane", "Jane", "Jane", "Jane", "Jane", "Jane", "Jane", "Jane",
"Jane", "Jane", "Jane", "Jane", "Jane"}
),
Set Display Width( 0 )
),
New Column( "Instrument",
Character( 1 ),
"Nominal",
Set Values(
{"A", "A", "A", "A", "A", "A", "A", "A", "A", "B", "B", "B", "B", "B", "B", "B",
"B", "B", "C", "C", "C", "C", "C", "C", "C", "C", "C", "A", "A", "A", "A", "A",
"A", "A", "A", "A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "C", "C", "C",
"C", "C", "C", "C", "C", "C", "A", "A", "A", "A", "A", "A", "A", "A", "A", "B",
"B", "B", "B", "B", "B", "B", "B", "B", "C", "C", "C", "C", "C", "C", "C", "C",
"C"}
),
Set Display Width( 0 )
),
New Column( "Part",
Numeric,
"Nominal",
Format( "Best", 8 ),
Set Values(
[1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8, 9, 9, 9,
10, 10, 10, 11, 11, 11, 12, 12, 12, 13, 13, 13, 14, 14, 14, 15, 15, 15, 16, 16,
16, 17, 17, 17, 18, 18, 18, 19, 19, 19, 20, 20, 20, 21, 21, 21, 22, 22, 22, 23,
23, 23, 24, 24, 24, 25, 25, 25, 26, 26, 26, 27, 27, 27]
),
Set Display Width( 0 )
),
New Column( "Y",
Numeric,
"Continuous",
Format( "Best", 8 ),
Set Values(
[0.5, 0.6, 0.2, 0.8, 0.6, 0.6, 1.6, 1.1, 1, 0.4, 0.2, 0.1, 0.1, 0.5, 0, 0.3, 0.6,
0.8, 0.1, 0.1, 0.2, 0.4, 0.9, 1.8, 0.1, 0.3, 0.4, 0.1, 0.3, 0.1, 0.9, 0.4, 0, 0.6,
0.7, 0.7, 0.3, 0.1, 0.2, 0.3, 0.6, 0.2, 0.2, 0.4, 0.4, 0.8, 0.3, 0.3, 2.6, 0.4,
1.6, 0.5, 0.3, 2.9, 0, 0, 0.5, 0.1, 0, 0.3, 0.5, 0, 0, 0.4, 0, 0.4, 0.3, 0.2, 0,
0, 0.5, 0.1, 0.1, 0.2, 0.3, 1.1, 0.2, 0.1, 0.6, 0.3, 0.6]
),
Set Display Width( 68 )
)
);
obj = dt << Variability Chart(
Y( :Y ),
X( :Operator, :Instrument, :Part ),
Model( "Crossed then Nested" ),
Variance Components( 1 )
);

```

#### Main Effects Model

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Wafer.jmp" );
obj = dt << Variability Chart(
Y( :Y ),
Model( "Main Effect" ),
X( :Operator, :Wafer ),
Variance Components( 1 )
);

```

#### Nested Effects Model

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Nested.jmp" );
obj = dt << Variability Chart(
Y( :Y ),
Model( "Nested" ),
X( :Operator, :Part ),
Variance Components( 1 )
);

```

#### Nested then Crossed Effects Model

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/3 Factors Nested & Crossed.jmp" );
obj = dt << Variability Chart(
Y( :Y ),
Model( "Nested then Crossed" ),
X( :Operator, :Instrument, :Part ),
Variance Components( 1 )
);

```

## Columns

### By

**Syntax:** obj = Variability Chart(...&lt;By( column(s) )&gt;...)

**Description:** Produce multiple reports, one for each level of the variable(s).

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/3 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :new Y ),
	X( :Operator, :part ),
	Model( "Crossed" ),
	By( :Instrument )
);

```

### Freq

**Syntax:** obj = Variability Chart(...&lt;Freq( column )&gt;...)

**Description:** A column whose values assign a frequency to each row for the analysis.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
dt << New Column( "_freqcol", Numeric, Continuous, Formula( Random Integer( 1, 5 ) ) );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ), Freq( _freqcol ) );

```

### Grouping

**Syntax:** obj = Variability Chart(...&lt;Grouping( column(s) )&gt;...)

**Description:** Specifies categorical column(s) as grouping variables. The last column in the list should be the part or unit being measured.

**Example 1**

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );

```

**Example 2**

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), Grouping( :Operator, :part# ) );

```

### Response

**Syntax:** obj = Variability Chart(...Response( column(s) )...)

**Description:** Specifies the continuous column(s) of measurements.

**Example 1**

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );

```

**Example 2**

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Response( :Measurement ), X( :Operator, :part# ) );

```

### Standard

**Syntax:** obj = Variability Chart(...&lt;Standard( column )&gt;...)

**Description:** Specifies a standard or reference column that contains the known values for the measured part.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/MSALinearity.jmp" );
obj = dt << Variability Chart(
	Y( :Response ),
	X( :Part ),
	Standard( :Standard ),
	Variability Analysis( :Response, Std Dev Chart( 0 ), Linearity Study( 1 ) )
);

```

### X

**Syntax:** obj = Variability Chart(...&lt;X( column(s) )&gt;...)

**Description:** Specifies categorical column(s) as grouping variables. The last column in the list should be the part or unit being measured.

**Example 1**

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );

```

**Example 2**

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), Grouping( :Operator, :part# ) );

```

### Y

**Syntax:** obj = Variability Chart(...Y( column(s) )...)

**Description:** Specifies the continuous column(s) of measurements.

**Example 1**

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );

```

**Example 2**

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Response( :Measurement ), X( :Operator, :part# ) );

```

## Item Messages

### Analysis Type

**Syntax:** obj = Variability Chart(...Analysis Type( "Choose best analysis (EMS REML Bayesian)"|"Choose best analysis (EMS REML)"|"Use REML analysis"|"Use Bayesian analysis" )...)

**Description:** Identifies the method used for computing variance components.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Model( "Crossed" ),
	Analysis Type( "Use REML analysis" )
);
obj << (Variability Analysis[1] << Variance Components( 1 ));

```

### Conv Limit

**Syntax:** obj = Variability Chart(...Conv Limit( number )...)

**Description:** Sets the convergence limit that is used for computing variance components. This option affects only REML analyses.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Model( "Crossed" ),
	Analysis Type( "Use REML analysis" ),
	Conv Limit( 0.0000001 )
);
obj << (Variability Analysis[1] << Variance Components( 1 ));

```

### Edit MSA Metadata

**Syntax:** obj &lt;&lt; Edit MSA Metadata( :column( Lower Tolerance( number ), Upper Tolerance( number ), &lt;Historical Mean( number ), Historical Process Sigma( number )&gt; ) )

**Description:** Opens a window that enables you to add or edit the tolerance range, tolerance limits, historical mean, and historical process sigma for all analyses. The reports are automatically updated.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Model( "Crossed" ),
	MSA Metadata( :Measurement( Lower Tolerance( .2 ), Upper Tolerance( 1.3 ) ) ),
	Variability Analysis( "Measurement", Misclassification Probabilities( 1 ) )
);
Wait( 1 );
obj << Edit MSA Metadata( :Measurement( Lower Tolerance( .1 ), Upper Tolerance( 1.4 ) ) );

```

### Max Iter

**Syntax:** obj = Variability Chart(...Max Iter( number )...)

**Description:** Sets the maximum number of iterations that are used for computing variance components. This option affects only REML analyses.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Model( "Crossed" ),
	Analysis Type( "Use REML analysis" ),
	Max Iter( 50 )
);
obj << (Variability Analysis[1] << Variance Components( 1 ));

```

### Number Function Evals

**Syntax:** obj = Variability Chart(...Number Function Evals( number )...)

**Description:** Sets the maximum number of function evaluations that are used for computing variance components. This option affects only Bayesian analyses.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Model( "Crossed" ),
	Analysis Type( "Use Bayesian analysis" ),
	Number Function Evals( 10000 )
);
obj << (Variability Analysis[1] << Variance Components( 1 ));

```

### Number Integration Abscissas

**Syntax:** obj = Variability Chart(...Number Integration Abscissas( number )...)

**Description:** Sets the number of integration abscissas that are used for computing variance components. This option affects only Bayesian analyses.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Model( "Crossed" ),
	Analysis Type( "Use Bayesian analysis" ),
	Number Integration Abscissas( 90 )
);
obj << (Variability Analysis[1] << Variance Components( 1 ));

```

### Save All Metadata to Table

**Syntax:** obj &lt;&lt; Save All Metadata to Table( &lt; MSA( state=0|1 ) &gt;, &lt; Measurement Sigma( state=0|1 ) &gt;, &lt; Tolerance as Specs( state=0|1 ) &gt; )

**Description:** Creates a new data table that contains the MSA metadata and Measurement Sigma for each column of measurement data. The table is in a tall format and contains a row for each measurement variable. There is an option to save the lower and upper tolerance values as additional columns in the data table.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	MSA Metadata(
		:Measurement(
			Lower Tolerance( 0.2 ),
			Upper Tolerance( 1.3 ),
			Historical Process Sigma( 0.2 )
		)
	),
	Model( "Crossed" ),
	Variability Analysis( "Measurement", "Gauge R&R Report"n( 1 ) )
);
obj << Save All Metadata to Table;

```

### Save Metadata as Column Properties

**Syntax:** obj &lt;&lt; Save Metadata as Column Properties( &lt; MSA( 0|1 ) &gt;, &lt; Measurement Sigma( 0|1 ) &gt;, &lt; Tolerance as Specs( 0|1 ) &gt; )

**Description:** For each column of measurement data, saves the MSA metadata and Measurement Sigma as column properties within the column of the original data table. There is an option to save the lower and upper tolerance values as Spec Limits column properties.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	MSA Metadata(
		:Measurement(
			Lower Tolerance( 0.2 ),
			Upper Tolerance( 1.3 ),
			Historical Process Sigma( 0.2 )
		)
	),
	Model( "Crossed" ),
	Variability Analysis( "Measurement", "Gauge R&R Report"n( 1 ) )
);
obj << Save Metadata as Column Properties;

```

### Set Alpha Level

**Syntax:** obj = Variability Chart(...Set Alpha Level( number )...)

**Description:** Changes the alpha level that is used for confidence intervals and mean diamonds. This option corresponds to the Specify Alpha Level option in the Variability Chart launch window.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Set Alpha Level( .1 )
);
obj << (Variability Analysis[1] << Mean Diamonds( 1 ));

```

### Set Random Seed

**Syntax:** obj = Variability Chart(...Set Random Seed( number )...)

**Description:** Sets the random seed to a specific value assuring that all subsequent runs using the same seed are reproducible.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Model( "Crossed" ),
	Set Random Seed( 1234 )
);
obj << (Variability Analysis[1] << Heterogeneity of Variance Tests( 1 ));

```

### Sigma Multiplier

**Syntax:** obj = Variability Chart(...Sigma Multiplier( number=6 )...)

**Description:** Specifies a constant value that is multiplied by sigma. "6" by default.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Model( "Crossed" ),
	Sigma Multiplier( 5.15 ),
	Variability Analysis( "Measurement", "Gauge R&R Report"n( 1 ) )
);

```

### Variability Analysis

**Syntax:** obj &lt;&lt; Variability Analysis

**Description:** Specifies the Variability Analysis report options for each measurement response.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Model( "Crossed" ),
	Variability Analysis( "Measurement", Variance Components( 1 ), "Gauge R&R Report"n( 1 ) )
);

```

## Shared Item Messages

### Action

**Syntax:** obj &lt;&lt; Action

**Description:** All-purpose trapdoor within a platform to insert expressions to evaluate. Temporarily sets the DisplayBox and DataTable contexts to the Platform.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

### Apply Preset

**Syntax:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**Description:** Apply a previously created preset to the object, updating the options and customizations to match the saved settings.

**JMP Version Added:** 18

#### Anonymous preset

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();
dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );
Wait( 1 );
obj2 << Apply Preset( preset );

```

#### Search by name

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

#### Search within folder(s)

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

### Automatic Recalc

**Syntax:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**Description:** Redoes the analysis automatically for exclude and data changes. If the Automatic Recalc option is turned on, you should consider using Wait(0) commands to ensure that the exclude and data changes take effect before the recalculation.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

### Broadcast

**Syntax:** obj &lt;&lt; Broadcast(message)

**Description:** Broadcasts a message to a platform. If return results from individual objects are tables, they are concatenated if possible, and the final format is identical to either the result from the Save Combined Table option in a Table Box or the result from the Concatenate option using a Source column. Other than those, results are stored in a list and returned.

**JMP Version Added:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
objs = Control Chart Builder(
	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),
	By( :OPERATOR )
);
objs[1] << Broadcast( Save Summaries );

```

### Column Switcher

**Syntax:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Description:** Adds a control panel for changing the platform&apos;s variables

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);

```

### Copy ByGroup Script

**Syntax:** obj &lt;&lt; Copy ByGroup Script

**Description:** Create a JSL script to produce this analysis, and put it on the clipboard.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ), By( _bycol ) );
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Syntax:** obj &lt;&lt; Copy Script

**Description:** Create a JSL script to produce this analysis, and put it on the clipboard.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << Copy Script;

```

### Data Table Window

**Syntax:** obj &lt;&lt; Data Table Window

**Description:** Move the data table window for this analysis to the front.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << Data Table Window;

```

### Get By Levels

**Syntax:** obj &lt;&lt; Get By Levels

**Description:** Returns an associative array mapping the by group columns to their values.

**JMP Version Added:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

### Get ByGroup Script

**Syntax:** obj &lt;&lt; Get ByGroup Script

**Description:** Creates a script (JSL) to produce this analysis and returns it as an expression.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ), By( _bycol ) );
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Container

**Syntax:** obj &lt;&lt; Get Container

**Description:** Returns a reference to the container box that holds the content for the object.

#### General

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Platform with Filter

```jsl

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

### Get Data Table

**Syntax:** obj &lt;&lt; Get Data Table

**Description:** Returns a reference to the data table.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Group Platform

**Syntax:** obj &lt;&lt; Get Group Platform

**Description:** Return the Group Platform object if this platform is part of a Group. Otherwise, returns Empty().

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );
group = biv[1] << Get Group Platform;
Wait( 1 );
group << Layout( "Arrange in Tabs" );

```

### Get Script

**Syntax:** obj &lt;&lt; Get Script

**Description:** Creates a script (JSL) to produce this analysis and returns it as an expression.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Syntax:** obj &lt;&lt; Get Script With Data Table

**Description:** Creates a script(JSL) to produce this analysis specifically referencing this data table and returns it as an expression.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Syntax:** obj &lt;&lt; Get Timing

**Description:** Times the platform launch.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
t = obj << Get Timing;
Show( t );

```

### Get Web Support

**Syntax:** obj &lt;&lt; Get Web Support

**Description:** Return a number indicating the level of Interactive HTML support for the display object. 1 means some or all elements are supported. 0 means no support.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

### Get Where Expr

**Syntax:** obj &lt;&lt; Get Where Expr

**Description:** Returns the Where expression for the data subset, if the platform was launched with By() or Where(). Otherwise, returns Empty()

**JMP Version Added:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );
Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

### Ignore Platform Preferences

**Syntax:** Ignore Platform Preferences( state=0|1 )

**Description:** Ignores the current settings of the platform&apos;s preferences. The message is ignored when sent to the platform after creation.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Ignore Platform Preferences( 1 ),
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

### Local Data Filter

**Syntax:** obj &lt;&lt; Local Data Filter

**Description:** To filter data to specific groups or ranges, but local to this platform

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :country ) ),
	Local Data Filter(
		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),
		Mode( Show( 1 ), Include( 1 ) )
	)
);

```

### New Preset

**Syntax:** obj = New Preset()

**Description:** Create an anonymous preset representing the options and customizations applied to the object. This object can be passed to Apply Preset to copy the settings to another object of the same type.

**JMP Version Added:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

### Paste Local Data Filter

**Syntax:** obj &lt;&lt; Paste Local Data Filter

**Description:** Apply the local data filter from the clipboard to the current report.

```jsl

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

### Redo Analysis

**Syntax:** obj &lt;&lt; Redo Analysis

**Description:** Rerun this same analysis in a new window. The analysis will be different if the data has changed.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Syntax:** obj &lt;&lt; Redo ByGroup Analysis

**Description:** Rerun this same analysis in a new window. The analysis will be different if the data has changed.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ), By( _bycol ) );
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**Syntax:** obj &lt;&lt; Relaunch Analysis

**Description:** Opens the platform launch window and recalls the settings that were used to create the report.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Syntax:** obj &lt;&lt; Relaunch ByGroup

**Description:** Opens the platform launch window and recalls the settings that were used to create the report.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ), By( _bycol ) );
obj[1] << Relaunch ByGroup;

```

### Remove Column Switcher

**Syntax:** obj &lt;&lt; Remove Column Switcher

**Description:** Removes the most recent Column Switcher that has been added to the platform.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
Wait( 2 );
obj << Remove Column Switcher;

```

### Remove Local Data Filter

**Syntax:** obj &lt;&lt; Remove Local Data Filter

**Description:** If a local data filter has been created, this removes it and restores the platform to use all the data in the data table directly

```jsl

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

### Report

**Syntax:** obj &lt;&lt; Report;Report( obj )

**Description:** Returns a reference to the report object.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**Syntax:** obj &lt;&lt; Report View( "Full"|"Summary" )

**Description:** The report view determines the level of detail visible in a platform report. Full shows all of the detail, while Summary shows only select content, dependent on the platform. For customized behavior, display boxes support a <<Set Summary Behavior message.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**Syntax:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description:** Creates a JSL script to produce this analysis, and save it as a table property in the data table. You can specify a name for the script. The Append Suffix option appends a numeric suffix to the script name, which differentiates the script from an existing script with the same name. The Prompt option prompts the user to specify a script name. The Replace option replaces an existing script with the same name.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ), By( _bycol ) );
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Syntax:** obj &lt;&lt; Save ByGroup Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ), By( _bycol ) );
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Syntax:** obj &lt;&lt; Save ByGroup Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ), By( _bycol ) );
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Syntax:** obj &lt;&lt; Save Script for All Objects

**Description:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntax:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Description:** Saves a script for all report objects to the current data table. This option is useful when you have multiple reports in the window. The script is named after the first platform unless you specify the script name in quotes.

**Example 1**

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table;

```

**Example 2**

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntax:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description:** Create a JSL script to produce this analysis, and save it as a table property in the data table.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntax:** obj &lt;&lt; Save Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << Save Script to Journal;

```

### Save Script to Report

**Syntax:** obj &lt;&lt; Save Script to Report

**Description:** Create a JSL script to produce this analysis, and show it in the report itself. Useful to preserve a printed record of what was done.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << Save Script to Report;

```

### Save Script to Script Window

**Syntax:** obj &lt;&lt; Save Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << Save Script to Script Window;

```

### SendToByGroup

**Syntax:** SendToByGroup( {":Column == level"}, command );

**Description:** Sends platform commands or display customization commands to each level of a by-group.

```jsl

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

### SendToEmbeddedScriptable

**Syntax:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Description:** SendToEmbeddedScriptable restores settings of embedded scriptable objects.

```jsl


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

### SendToReport

**Syntax:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Description:** Send To Report is used in tandem with the Dispatch command to customize the appearance of a report.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :age ) ),
	Continuous Distribution( Column( :weight ) ),
	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) )
);

```

### Sync to Data Table Changes

**Syntax:** obj &lt;&lt; Sync to Data Table Changes

**Description:** Sync with the exclude and data changes that have been made.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
Wait( 1 );
dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );
dist << Sync To Data Table Changes;

```

### Title

**Syntax:** obj &lt;&lt; Title( "new title" )

**Description:** Sets the title of the platform.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << Title( "My Platform" );

```

### Top Report

**Syntax:** obj &lt;&lt; Top Report

**Description:** Returns a reference to the root node in the report.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Transform Column

**Syntax:** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Description:** Create a transform column in the local context of an object, usually a platform. The transform column is active only for the lifetime of the platform.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),
	Continuous Distribution( Column( :"age^2"n ) )
);

```

### View Web XML

**Syntax:** obj &lt;&lt; View Web XML

**Description:** Returns the XML code that is used to create the interactive HTML report.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

### Window View

**Syntax:** obj = Variability Chart(...Window View( "Visible"|"Invisible"|"Private" )...)

**Description:** Set the type of the window to be created for the report. By default a Visible report window will be created. An Invisible window will not appear on screen, but is discoverable by functions such as Window(). A Private window responds to most window messages but is not discoverable and must be addressed through the report object

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );
eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;
biv << Close Window;
New Window( "Bivariate Equation",
	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) )
);

```

## Variability Analysis > Bias Report

### Item Messages

#### Confidence Intervals

**Syntax:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Bias Report(Confidence Intervals( state=0|1 )))

**Description:** Shows or hides confidence intervals on the graph in the Measurement Bias Report by Standard section. This option is available only when a standard variable is specified in the launch window.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/MSALinearity.jmp" );
obj = dt << Variability Chart(
	Y( :Response ),
	X( :Part ),
	Standard( :Standard ),
	Std Dev Chart( 0 )
);
obj << (Variability Analysis[1] << Bias Report( Confidence Intervals( 1 ) ));

```

#### Measurement Error Graphs

**Syntax:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Bias Report(Measurement Error Graphs( state=0|1 )))

**Description:** Shows or hides measurement error charts of the bias by part. This option is available only when a standard variable is specified in the launch window.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/MSALinearity.jmp" );
obj = dt << Variability Chart(
	Y( :Response ),
	X( :Part ),
	Standard( :Standard ),
	Std Dev Chart( 0 )
);
obj << (Variability Analysis[1] << Bias Report( Measurement Error Graphs( 1 ) ));

```

## Variability Analysis > Heterogeneity of Variance Test

### Item Messages

#### Point Options

**Syntax:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Heterogeneity of Variance Tests(1, Point Options("Show Needles" | "Show Connected Points" | "Show Only Points")))

**Description:** Specifies the drawing style of the points in the chart. You can choose between vertical needles, connected points, and points only. By default, the chart is drawn with needles that connect the points to the horizontal line that is drawn at the average.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = Variability Chart( Y( :Measurement ), X( :Operator, :part# ), Model( "Crossed" ) );
obj << (Variability Analysis[1] <<
Heterogeneity of Variance Tests( 1, Point Options( Show Only Points ) ));

```

#### Set Alpha Level

**Syntax:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Heterogeneity of Variance Tests(1, Set Alpha Level( number )))

**Description:** Changes the alpha level used to compute the decision limits.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = Variability Chart( Y( :Measurement ), X( :Operator, :part# ), Model( "Crossed" ) );
obj << (Variability Analysis[1] <<
Heterogeneity of Variance Tests( 1, Set Alpha Level( 0.1 ) ));

```

#### Show Center Line

**Syntax:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Heterogeneity of Variance Tests(1, Show Center Line(state=0|1)))

**Description:** Shows or hides the center line (overall mean ADM). On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = Variability Chart( Y( :Measurement ), X( :Operator, :part# ), Model( "Crossed" ) );
obj << (Variability Analysis[1] <<
Heterogeneity of Variance Tests( 1, Show Center Line( 0 ) ));

```

#### Show Decision Limit Shading

**Syntax:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Heterogeneity of Variance Tests(1, Show Decision Limit Shading(state=0|1)))

**Description:** Shows or hides the decision limit shading for the ANOMV-Levene (ADM) chart. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = Variability Chart( Y( :Measurement ), X( :Operator, :part# ), Model( "Crossed" ) );
obj << (Variability Analysis[1] <<
Heterogeneity of Variance Tests( 1, Show Decision Limit Shading( 0 ) ));

```

#### Show Decision Limits

**Syntax:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Heterogeneity of Variance Tests(1, Show Decision Limits(state=0|1)))

**Description:** Shows or hides the decision limit lines for the ANOMV-Levene (ADM) chart. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = Variability Chart( Y( :Measurement ), X( :Operator, :part# ), Model( "Crossed" ) );
obj << (Variability Analysis[1] <<
Heterogeneity of Variance Tests( 1, Show Decision Limits( 0 ) ));

```

#### Show Summary Report

**Syntax:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Heterogeneity of Variance Tests(1, Show Summary Report(state=0|1)))

**Description:** Shows or hides a report that contains the group standard deviations and corresponding decision limits.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = Variability Chart( Y( :Measurement ), X( :Operator, :part# ), Model( "Crossed" ) );
obj << (Variability Analysis[1] <<
Heterogeneity of Variance Tests( 1, Show Summary Report( 1 ) ));

```

## Variability Analysis > Linearity Study

### Item Messages

#### Linearity by Groups

**Syntax:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Linearity Study(1, Linearity By Groups( state=0|1 )))

**Description:** Shows or hides individual linearity graphs for each factor in the model.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	MSA Metadata( :Response( Historical Process Sigma( .6 ) ) ),
	Standard( :Standard ),
	Model( "Crossed" )
);
obj << (Variability Analysis[1] << Linearity Study( 1, Linearity By Groups( 1 ) ));

```

#### Set Alpha Level

**Syntax:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Linearity Study(1, Set Alpha Level( number )))

**Description:** Specifies the alpha level that is used to compute the bias confidence limits. "0.05" by default.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/MSALinearity.jmp" );
obj = dt << Variability Chart(
	Y( :Response ),
	X( :Part ),
	MSA Metadata( :Response( Historical Process Sigma( .6 ) ) ),
	Standard( :Standard )
);
obj << (Variability Analysis[1] << Linearity Study( 1, Set Alpha Level( .01 ) ));

```

#### Show Avg Bias Points

**Syntax:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Linearity Study(1, Show Avg Bias Points( state=0|1 )))

**Description:** Shows or hides the average bias points on the graph. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	MSA Metadata( :Response( Historical Process Sigma( .6 ) ) ),
	Standard( :Standard ),
	Model( "Crossed" )
);
obj << (Variability Analysis[1] << Linearity Study( 1, Show Avg Bias Points( 1 ) ));
Wait( 1 );
obj << (Variability Analysis[1] << Linearity Study( 1, Show Avg Bias Points( 0 ) ));
Wait( 1 );
obj << (Variability Analysis[1] << Linearity Study( 1, Show Avg Bias Points( 1 ) ));

```

#### Show Bias Points

**Syntax:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Linearity Study(1, Show Bias Points( state=0|1 )))

**Description:** Shows or hides the bias points on the graph. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Metadata( :Response( Historical Process Sigma( .6 ) ) ),
	Standard( :Standard ),
	Model( "Crossed" )
);
obj << (Variability Analysis[1] << Linearity Study( 1, Show Bias Points( 1 ) ));
Wait( 1 );
obj << (Variability Analysis[1] << Linearity Study( 1, Show Bias Points( 0 ) ));
Wait( 1 );
obj << (Variability Analysis[1] << Linearity Study( 1, Show Bias Points( 1 ) ));

```

#### Show Fit Confidence Curves

**Syntax:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Linearity Study(1, Show Fit Confidence Curves( state=0|1 )))

**Description:** Shows or hides the line of fit confidence curves on the graph. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Metadata( :Response( Historical Process Sigma( .6 ) ) ),
	Standard( :Standard ),
	Model( "Crossed" )
);
obj << (Variability Analysis[1] << Linearity Study( 1, Show Fit Confidence Curves( 1 ) ));
Wait( 1 );
obj << (Variability Analysis[1] << Linearity Study( 1, Show Fit Confidence Curves( 0 ) ));
Wait( 1 );
obj << (Variability Analysis[1] << Linearity Study( 1, Show Fit Confidence Curves( 1 ) ));

```

#### Show Line of Fit

**Syntax:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Linearity Study(1, Show Line of Fit( state=0|1 )))

**Description:** Shows or hides the line of fit on the graph. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Metadata( :Response( Historical Process Sigma( .6 ) ) ),
	Standard( :Standard ),
	Model( "Crossed" )
);
obj << (Variability Analysis[1] << Linearity Study( 1, Show Line of Fit( 1 ) ));
Wait( 1 );
obj << (Variability Analysis[1] << Linearity Study( 1, Show Line of Fit( 0 ) ));
Wait( 1 );
obj << (Variability Analysis[1] << Linearity Study( 1, Show Line of Fit( 1 ) ));

```

#### Show Overall Avg Bias Line

**Syntax:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Linearity Study(1, Show Overall Avg Bias Line( state=0|1 )))

**Description:** Shows or hides the overall average bias line on the graph. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Metadata( :Response( Historical Process Sigma( .6 ) ) ),
	Standard( :Standard ),
	Model( "Crossed" )
);
obj << (Variability Analysis[1] << Linearity Study( 1, Show Overall Avg Bias Line( 1 ) ));
Wait( 1 );
obj << (Variability Analysis[1] << Linearity Study( 1, Show Overall Avg Bias Line( 0 ) ));
Wait( 1 );
obj << (Variability Analysis[1] << Linearity Study( 1, Show Overall Avg Bias Line( 1 ) ));

```

## Variability Analysis

### Item Messages

#### AIAG Labels

**Syntax:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; AIAG Labels( state=0|1 ))

**Description:** Shows or hides the labels in the Gauge R&R output. The labels are defined by the Automotive Industry Action Group (AIAG). On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Model( "Crossed" ),
	Analysis Type( "Choose best analysis(EMS REML)" ),
	Variability Analysis( "Measurement", "Gauge R&R Report"n( 1 ) ),

);
Wait( 1 );
obj << (Variability Analysis[1] << AIAG Labels( 0 ));
Wait( 1 );
obj << (Variability Analysis[1] << AIAG Labels( 1 ));

```

#### Bias Report

**Syntax:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Bias Report( state=0|1 ))

**Description:** Shows or hides a report that contains the average difference between the observed values and the standard. This option is available only when a standard variable is specified.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/MSALinearity.jmp" );
obj = dt << Variability Chart(
	Y( :Response ),
	X( :Part ),
	Standard( :Standard ),
	Std Dev Chart( 0 )
);
obj << (Variability Analysis[1] << Bias Report( 1 ));

```

#### Connect Cell Means

**Syntax:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Connect Cell Means( state=0|1 ))

**Description:** Shows or hides a line that connects the cell means within a group of cells on the variability chart.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << (Variability Analysis[1] << Connect Cell Means( 1 ));

```

#### Discrimination Ratio

**Syntax:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Discrimination Ratio( state=0|1 ))

**Description:** Shows or hides the discrimination ratio for the given model.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Model( "Crossed" ),
	Analysis Type( "Choose best analysis(EMS REML)" )
);
obj << (Variability Analysis[1] << Discrimination Ratio( 1 ));

```

#### Edit MSA Metadata

**Syntax:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Edit MSA Metadata(Lower Tolerance(number), Upper Tolerance(number), Tolerance Range(number), Historical Mean(number), Historical Process Sigma(number)))

**Description:** Opens a window that enables you to add or edit the tolerance range, tolerance limits, historical mean, and historical process sigma for all analyses. The reports are automatically updated.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	MSA Metadata( :Measurement( Lower Tolerance( .2 ), Upper Tolerance( 1.3 ) ) ),
	Model( "Crossed" ),
	Variability Analysis( "Measurement", Misclassification Probabilities( 1 ) )
);
Wait( 1 );
obj << (Variability Analysis[1] << Edit MSA Metadata(
	Lower Tolerance( .1 ),
	Upper Tolerance( 1.2 )
));

```

#### Gauge R&R Report

**Syntax:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; "Gauge R & R Report"n( state=0|1 ))

**Description:** Computes and displays a Gauge R&R (reproducibility and repeatability) summary report.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	MSA Metadata( :Measurement( Lower Tolerance( 0.2 ), Upper Tolerance( 1.3 ) ) ),
	Model( "Crossed" ),
	Analysis Type( "Choose best analysis(EMS REML)" ),

);
obj << (Variability Analysis[1] << "Gauge R&R Report"n( 1 ));

```

#### Group Means of Std Dev

**Syntax:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Group Means of Std Dev( state=0|1 ))

**Description:** Shows or hides the mean lines for groups of cell standard deviations on the standard deviation chart.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << (Variability Analysis[1] << Group Means of Std Dev( 1 ));

```

#### Heterogeneity of Variance Tests

**Syntax:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Heterogeneity of Variance Tests( state=0|1 ))

**Description:** Shows or hides a report that compares variances across groups. The report includes graphs that show the heterogeneity of variance test for each factor in the model.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Model( "Crossed" )
);
obj << (Variability Analysis[1] << Heterogeneity of Variance Tests( 1 ));

```

#### Linearity Study

**Syntax:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Linearity Study( state=0|1 ))

**Description:** Performs a regression that uses the standard values as the X variable and the bias as the Y variable.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/MSALinearity.jmp" );
obj = dt << Variability Chart(
	Y( :Response ),
	X( :Part ),
	MSA Metadata( :Response( Historical Process Sigma( 1.1 ) ) ),
	Standard( :Standard ),
	Std Dev Chart( 0 )
);
obj << (Variability Analysis[1] << Linearity Study( 1 ));

```

#### Mean Diamonds

**Syntax:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Mean Diamonds( state=0|1 ))

**Description:** Shows or hides mean diamonds on the variability chart. The confidence intervals use the within-group standard deviation for each cell.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << (Variability Analysis[1] << Mean Diamonds( 1 ));

```

#### Mean Plots

**Syntax:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Mean Plots( state=0|1 ))

**Description:** Shows or hides a plot of the factor level means for each factor in the model.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Model( "Crossed" )
);
obj << (Variability Analysis[1] << Mean Plots( 1 ));

```

#### Mean of Std Dev

**Syntax:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Mean of Std Dev( state=0|1 ))

**Description:** Shows or hides a gray dashed line at the mean standard deviation on the standard deviation chart.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << (Variability Analysis[1] << Mean of Std Dev( 1 ));

```

#### Misclassification Probabilities

**Syntax:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Misclassification Probabilities( state=0|1 ))

**Description:** Shows or hides a report containing the probabilities of misclassification for the given model.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	MSA Metadata( :Measurement( Lower Tolerance( 0.2 ), Upper Tolerance( 1.3 ) ) ),
	Model( "Crossed" ),
	Analysis Type( "Choose best analysis(EMS REML)" )
);
obj << (Variability Analysis[1] << Misclassification Probabilities( 1 ));

```

#### Points Jittered

**Syntax:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Points Jittered( state=0|1 ))

**Description:** Adds random horizontal jitter to the points in the variability chart.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << (Variability Analysis[1] << Points Jittered( 1 ));

```

#### S Control Limits

**Syntax:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; S Control Limits( state=0|1 ))

**Description:** Shows or hides red lines at the lower control limit (LCL) and upper control limit (UCL) on the standard deviation chart.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << (Variability Analysis[1] << S Control Limits( 1 ));

```

#### Show Box Plots

**Syntax:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Show Box Plots( state=0|1 ))

**Description:** Shows or hides box plots for each cell on the variability chart.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << (Variability Analysis[1] << Show Box Plots( 1 ));

```

#### Show Cell Means

**Syntax:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Show Cell Means( state=0|1 ))

**Description:** Shows or hides the mean mark for each cell on the variability chart. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
Wait( 1 );
obj << (Variability Analysis[1] << Show Cell Means( 0 ));
Wait( 1 );
obj << (Variability Analysis[1] << Show Cell Means( 1 ));

```

#### Show Grand Mean

**Syntax:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Show Grand Mean( state=0|1 ))

**Description:** Shows or hides the overall mean, which is represented by a gray dotted line across the entire graph.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << (Variability Analysis[1] << Show Grand Mean( 1 ));

```

#### Show Grand Median

**Syntax:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Show Grand Median( state=0|1 ))

**Description:** Shows or hides the overall median, which is represented by a blue dotted line across the entire graph.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << (Variability Analysis[1] << Show Grand Median( 1 ));

```

#### Show Group Means

**Syntax:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Show Group Means( state=0|1 ))

**Description:** Shows or hides the mean for groups of cells, which is represented by a horizontal solid line.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << (Variability Analysis[1] << Show Group Means( 1 ));

```

#### Show Points

**Syntax:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Show Points( state=0|1 ))

**Description:** Shows or hides the points on the variability chart. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
Wait( 1 );
obj << (Variability Analysis[1] << Show Points( 0 ));
Wait( 1 );
obj << (Variability Analysis[1] << Show Points( 1 ));

```

#### Show Range Bars

**Syntax:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Show Range Bars( state=0|1 ))

**Description:** Shows or hides the bars that indicate the minimum and the maximum value of each cell. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
Wait( 1 );
obj << (Variability Analysis[1] << Show Range Bars( 0 ));
Wait( 1 );
obj << (Variability Analysis[1] << Show Range Bars( 1 ));

```

#### Show Separators

**Syntax:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Show Separators( state=0|1 ))

**Description:** Shows or hides the separator lines between levels of the grouping variables on the variability chart. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
Wait( 1 );
obj << (Variability Analysis[1] << Show Separators( 0 ));
Wait( 1 );
obj << (Variability Analysis[1] << Show Separators( 1 ));

```

#### Show Standard Mean

**Syntax:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Show Standard Mean( state=0|1 ))

**Description:** Shows or hides a line at the mean of the standard values. This option is available only if a standard variable is specified in the launch window.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/MSALinearity.jmp" );
obj = dt << Variability Chart( Y( :Response ), X( :Part ), Standard( :Standard ) );
Wait( 1 );
obj << (Variability Analysis[1] << Show Standard Mean( 1 ));

```

#### Std Dev Chart

**Syntax:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Std Dev Chart( state=0|1 ))

**Description:** Shows or hides a chart that plots the standard deviation of each cell. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
Wait( 1 );
obj << (Variability Analysis[1] << Std Dev Chart( 0 ));
Wait( 1 );
obj << (Variability Analysis[1] << Std Dev Chart( 1 ));

```

#### Std Dev Plots

**Syntax:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Std Dev Plots( state=0|1 ))

**Description:** Shows or hides plots of the standard deviations grouped by each factor level. A plot is shown for each factor in the model.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Model( "Crossed" )
);
obj << (Variability Analysis[1] << Std Dev Plots( 1 ));

```

#### Variability Chart

**Syntax:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Variability Chart( state=0|1 ))

**Description:** Shows or hides the variability chart. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
Wait( 1 );
obj << (Variability Analysis[1] << Variability Chart( 0 ));
Wait( 1 );
obj << (Variability Analysis[1] << Variability Chart( 1 ));

```

#### Variability Summary Report

**Syntax:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Variability Summary Report( state=0|1 ))

**Description:** Shows or hides a report that shows the mean, standard deviation, coefficient of variation (CV), standard error of the mean, the lower and upper confidence intervals. The minimum, maximum, range, median, and number of observations are also shown.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << (Variability Analysis[1] << Variability Summary Report( 1 ));

```

#### Variance Components

**Syntax:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Variance Components( state=0|1 ))

**Description:** Shows or hides the variance components for a specific model.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Model( "Crossed" ),
	Analysis Type( "Use REML analysis" )
);
obj << (Variability Analysis[1] << Variance Components( 1 ));

```

#### Vertical Charts

**Syntax:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Vertical Charts( state=0|1 ))

**Description:** Rotates the variability chart.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << (Variability Analysis[1] << Vertical Charts( 1 ));

```

#### XBar Control Limits

**Syntax:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; XBar Control Limits( state=0|1 ))

**Description:** Shows or hides lines at the lower control limit (LCL) and upper control limit (UCL) on the variability chart.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << (Variability Analysis[1] << XBar Control Limits( 1 ));

```

