# Process Capability



## Associated Constructors

### Process Capability

**Syntax:** Process Capability( Process Variables (columns), &lt; Spec Limits() &gt; )

**Description:** Computes a process capability analysis for each process and creates graphs useful for analyzing the capability of multiple processes at one time. Specification limits can also be defined.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);

```

## Columns

### By

**Syntax:** obj = Process Capability(...&lt;By( column(s) )&gt;...)

**Description:** Performs a separate analysis for each level of the specified column.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	),
	By( _bycol )
);

```

### Grouping

**Syntax:** obj = Process Capability( Process Variables( columns), Grouping( columns) )

**Description:** Specifies columns as grouping variables.

**Example 1**

```jsl


dtLimits = Open( "$SAMPLE_DATA/Cheese Manufacturing Limits.jmp" );
dt = Open( "$SAMPLE_DATA/Cheese Manufacturing Data.jmp" );
dt << Process Capability(
	Process Variables( :pH, :Salt Concentration, :Moisture Content ),
	Grouping( :Cheese Type ),
	Spec Limits( Use Limits Table( dtLimits ) ),
	Moving Range Method( Average of Moving Ranges ),
	Goal Plot( 1 ),
	Capability Index Plot( 1 ),
	Process Performance Plot( 0 )
);

```

**Example 2**

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables( :NPN1[:lot_id], :PNP1[:lot_id], :PNP2[:lot_id] ),
	Grouping( :site )
);

```

### Process Variables

**Syntax:** obj = Process Capability(...Process Variables( column(s) )...)

**Description:** Specifies the columns of process data that contain the measurements to be analyzed.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);

```

## Item Messages

### AIAG (Ppk) Labeling

**Syntax:** obj &lt;&lt; "AIAG (Ppk) Labeling"n( state=0|1 )

**Description:** Turns on or off the AIAG labeling of the capability indices by changing the "Cp" labeling to "Pp" labeling. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables( :NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer] )
);
obj << Individual Detail Reports( 1 );
Wait( 1 );
obj << "AIAG (Ppk) Labeling"n( 0 );

```

### Capability Box Plots

**Syntax:** obj &lt;&lt; Capability Box Plots( state=0|1 )

**Description:** Shows or hides a box plot for each process. To create the box plots, the values for each process are centered by their target and scaled by their specification limits. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	),
	Capability Box Plots( 0 )
);
Wait( 1 );
obj << Capability Box Plots( 1 );

```

### Capability Index Plot

**Syntax:** obj &lt;&lt; Capability Index Plot( state=0|1, &lt;plot options&gt; )

**Description:** Shows or hides a graph that plots the overall Ppk for each process. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:Process 1 & Dist( Lognormal ), :Process 2 & Dist( Lognormal ),
		:Process 3 & Dist( Weibull ), :Process 4 & Dist( Lognormal ),
		:Process 5 & Dist( Weibull ), :Process 6 & Dist( Johnson ), :Process 7
	),
	Capability Index Plot( 0 ),
	Goal Plot( 0 )
);
Wait( 1 );
obj << Capability Index Plot( 1 );

```

### Color Out of Spec Values

**Syntax:** obj &lt;&lt; Color Out of Spec Values( state=0|1 )

**Description:** Colors the cells in the data table for values that are out of spec. Cells with values below the lower specification limit (LSL) are colored red, and cells with values above the upper specification limit (USL) are colored blue.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Process Capability(
	Process Variables( :OZONE, :CO, :SO2, :NO ),
	Spec Limits( Import Spec Limits( "$SAMPLE_DATA/CitySpecLimits.jmp" ) )
);
obj << Color Out of Spec Values( 1 );

```

### Get Limits

**Syntax:** obj = Process Capability(...Spec Limits(Get Limits( data table ) )...)

**Description:** Loads specification limits from a limits data table.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt2 = Open( "$SAMPLE_DATA/CitySpecLimits.jmp" );
obj = dt << Process Capability(
	Process Variables( :OZONE, :CO, :SO2, :NO ),
	Spec Limits( Get Limits( dt2 ) )
);

```

### Goal Plot

**Syntax:** obj &lt;&lt; Goal Plot( state=0|1, &lt;plot options&gt; )

**Description:** Shows or hides a graph with a point for each process. The spec-standardized mean is on the horizontal axis and the spec-standardized standard deviation is on the vertical axis. Points that appear above the goal arc represent processes that are below the specified Ppk (Cpk) threshold. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	),
	Goal Plot( 0 )
);
Wait( 1 );
obj << Goal Plot( 1 );

```

### Individual Detail Reports

**Syntax:** obj &lt;&lt; Individual Detail Reports( state=0|1 )

**Description:** Shows or hides a separate individual detail capability report for each process.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
obj << Individual Detail Reports( 1 );

```

### Individual Detail Reports Cutoff

**Syntax:** obj &lt;&lt; Individual Detail Reports Cutoff( number=1 )

**Description:** Shows the Individual Detail Reports and hides the Goal Plot and Capability Box Plots if the number of process variables is less than or equal to the cutoff value. "1" by default.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer] & Between, :PNP1[:lot_id, :wafer] & Between,
		:PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
obj << Individual Detail Reports Cutoff( 7 );

```

### Make Goal Plot Summary Table

**Syntax:** obj &lt;&lt; Make Goal Plot Summary Table

**Description:** Creates a new data table that contains the coordinates for both the within and overall points that are plotted in the Goal Plot.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
obj << Make Goal Plot Summary Table;

```

### Order By

**Syntax:** obj &lt;&lt; Order By( "Initial Order"|"Reverse Initial Order"|"Within Sigma Cpk Ascending"|"Within Sigma Cpk Descending"|"Overall Sigma Ppk Ascending"|"Overall Sigma Ppk Descending" )

**Description:** Reorders all box plots, summary reports, and individual detail reports into the specified order.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
obj << Within Sigma Summary Report( 1 );
Wait( 1 );
obj << Order By( "Within Sigma Cpk Ascending" );

```

### Overall Sigma Normalized Box Plots

**Syntax:** obj &lt;&lt; Overall Sigma Normalized Box Plots( state=0|1 )

**Description:** Shows or hides a box plot for each process. The values for the box plots are centered by the overall mean and scaled by the overall estimate of the standard deviation.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
Wait( 0 );
obj << Overall Sigma Normalized Box Plots( 1 );

```

### Overall Sigma Summary Report

**Syntax:** obj &lt;&lt; Overall Sigma Summary Report( state=0|1 )

**Description:** Shows or hides a summary report of capability indices. The capability indices are calculated using the overall estimate of standard deviation.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
Wait( 0 );
obj << Overall Sigma Summary Report( 1 );

```

### Process Performance Plot

**Syntax:** obj &lt;&lt; Process Performance Plot( state=0|1, &lt;plot options&gt; )

**Description:** Shows or hides a four-quadrant plot of Overall Capability Ppk versus stability.

**JMP Version Added:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	),
	Capability Box Plots( 0 ),
	Goal Plot( 0 ),
	Capability Index Plot( 0 ),

);
obj << Process Performance Plot( 1 );

```

### Save Distributions as Column Properties

**Syntax:** obj &lt;&lt; Save Distributions as Column Properties

**Description:** Saves the distribution that is used to calculate capability as a Process Capability Distribution column property. A column property is saved for each process variable in the analysis.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Process Capability(
	Process Variables( :OZONE & Dist( Johnson ), :CO, :SO2 & Dist( Lognormal ), :NO ),
	Spec Limits( Import Spec Limits( "$SAMPLE_DATA/CitySpecLimits.jmp" ) )
);
obj << Save Distributions as Column Properties;

```

### Save In Spec Indicator Formulas

**Syntax:** obj &lt;&lt; Save In Spec Indicator Formulas

**Description:** Creates a new formula column in the data table. The new column contains a value that indicates whether or not a row is within the specification limits.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer] & Between, :PNP1[:lot_id, :wafer] & Between,
		:PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
obj << Save In Spec Indicator Formulas;

```

### Save Spec Limits as Column Properties

**Syntax:** obj &lt;&lt; Save Spec Limits as Column Properties

**Description:** Saves the specification limits to a column property for each process variable in the analysis.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Process Capability(
	Process Variables( :OZONE, :CO, :SO2, :NO ),
	Spec Limits( Import Spec Limits( "$SAMPLE_DATA/CitySpecLimits.jmp" ) )
);
obj << Save Spec Limits as Column Properties;

```

### Save Spec Limits to New Table

**Syntax:** obj &lt;&lt; Save Spec Limits to New Table

**Description:** Creates a new data table that contains the specification limits, process importance, and distributions for each process variable. The table is in a tall format and contains a row for each process variable. Process importance and distribution type are saved only when applicable.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer] & Between, :PNP1[:lot_id, :wafer] & Between,
		:PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
obj << Save Spec Limits to New Table;

```

### Select Out of Spec Values

**Syntax:** obj &lt;&lt; Select Out of Spec Values( state=0|1 )

**Description:** Selects all rows and columns in the data table that contain at least one value that does not fall within the specification limits.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Process Capability(
	Process Variables( :OZONE, :CO, :SO2, :NO ),
	Spec Limits( Import Spec Limits( "$SAMPLE_DATA/CitySpecLimits.jmp" ) )
);
obj << Select Out of Spec Values( 1 );

```

### Use Limits Table

**Syntax:** obj = Process Capability(...Spec Limits(Use Limits Table( data table ) )...)

**Description:** Loads specification limits from a limits data table.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt2 = Open( "$SAMPLE_DATA/CitySpecLimits.jmp" );
obj = dt << Process Capability(
	Process Variables( :OZONE, :CO, :SO2, :NO ),
	Spec Limits( Use Limits Table( dt2 ) )
);

```

### Within Sigma Normalized Box Plots

**Syntax:** obj &lt;&lt; Within Sigma Normalized Box Plots( state=0|1 )

**Description:** Shows or hides a graph that contains a box plot for each process. The values for the box plots are centered by the mean and divided by the within-subgroup estimate of the standard deviation.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
Wait( 0 );
obj << Within Sigma Normalized Box Plots( 1 );

```

### Within Sigma Summary Report

**Syntax:** obj &lt;&lt; Within Sigma Summary Report( state=0|1 )

**Description:** Shows or hides a summary report of capability indices. The capability indices are calculated using the within-subgroup estimate of standard deviation. Results are shown only for variables with specified normal distributions.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
Wait( 0 );
obj << Within Sigma Summary Report( 1 );

```

### Within or Between-and-Within Sigma Normalized Box Plots

**Syntax:** obj &lt;&lt; "Within or Between-and-Within Sigma Normalized Box Plots"n( state=0|1 )

**Description:** Shows or hides a graph that contains a box plot for each process. The values for the box plots are centered by the mean and divided by the within-group estimate of the standard deviation or, if specified, the between-and-within estimate.

**JMP Version Added:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer] & Between, :PNP1[:lot_id, :wafer] & Between,
		:PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
Wait( 0 );
obj << "Within or Between-and-Within Sigma Normalized Box Plots"n( 1 );

```

### Within or Between-and-Within Sigma Summary Report

**Syntax:** obj &lt;&lt; "Within or Between-and-Within Sigma Summary Report"n( state=0|1 )

**Description:** Shows or hides a summary report of capability indices. The capability indices are calculated using the within-group estimate of the standard deviation or, if specified, the between-and-within group estimate. This option is available only when the Calculate Between-and-Within Capability option is selected for at least one process in the launch window.

**JMP Version Added:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer] & Between, :PNP1[:lot_id, :wafer] & Between,
		:PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
Wait( 0 );
obj << "Within or Between-and-Within Sigma Summary Report"n( 1 );

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

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
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

### Copy ByGroup Script

**Syntax:** obj &lt;&lt; Copy ByGroup Script

**Description:** Create a JSL script to produce this analysis, and put it on the clipboard.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	),
	By( _bycol )
);
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Syntax:** obj &lt;&lt; Copy Script

**Description:** Create a JSL script to produce this analysis, and put it on the clipboard.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
obj << Copy Script;

```

### Data Table Window

**Syntax:** obj &lt;&lt; Data Table Window

**Description:** Move the data table window for this analysis to the front.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
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

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	),
	By( _bycol )
);
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Container

**Syntax:** obj &lt;&lt; Get Container

**Description:** Returns a reference to the container box that holds the content for the object.

#### General

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
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

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
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

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Syntax:** obj &lt;&lt; Get Script With Data Table

**Description:** Creates a script(JSL) to produce this analysis specifically referencing this data table and returns it as an expression.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Syntax:** obj &lt;&lt; Get Timing

**Description:** Times the platform launch.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
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

### New JSL Preset

**Syntax:** New JSL Preset( preset )

**Description:** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

**JMP Version Added:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
preset = obj << New JSL Preset( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) );
Wait( 1 );
obj << Apply Preset( preset );

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

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Syntax:** obj &lt;&lt; Redo ByGroup Analysis

**Description:** Rerun this same analysis in a new window. The analysis will be different if the data has changed.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	),
	By( _bycol )
);
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**Syntax:** obj &lt;&lt; Relaunch Analysis

**Description:** Opens the platform launch window and recalls the settings that were used to create the report.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Syntax:** obj &lt;&lt; Relaunch ByGroup

**Description:** Opens the platform launch window and recalls the settings that were used to create the report.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	),
	By( _bycol )
);
obj[1] << Relaunch ByGroup;

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

### Render Preset

**Syntax:** Render Preset( preset )

**Description:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP Version Added:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

### Report

**Syntax:** obj &lt;&lt; Report;Report( obj )

**Description:** Returns a reference to the report object.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**Syntax:** obj &lt;&lt; Report View( "Full"|"Summary" )

**Description:** The report view determines the level of detail visible in a platform report. Full shows all of the detail, while Summary shows only select content, dependent on the platform. For customized behavior, display boxes support a <<Set Summary Behavior message.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**Syntax:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description:** Creates a JSL script to produce this analysis, and save it as a table property in the data table. You can specify a name for the script. The Append Suffix option appends a numeric suffix to the script name, which differentiates the script from an existing script with the same name. The Prompt option prompts the user to specify a script name. The Replace option replaces an existing script with the same name.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Syntax:** obj &lt;&lt; Save ByGroup Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Syntax:** obj &lt;&lt; Save ByGroup Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Syntax:** obj &lt;&lt; Save Script for All Objects

**Description:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntax:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Description:** Saves a script for all report objects to the current data table. This option is useful when you have multiple reports in the window. The script is named after the first platform unless you specify the script name in quotes.

**Example 1**

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table;

```

**Example 2**

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntax:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description:** Create a JSL script to produce this analysis, and save it as a table property in the data table.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntax:** obj &lt;&lt; Save Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
obj << Save Script to Journal;

```

### Save Script to Report

**Syntax:** obj &lt;&lt; Save Script to Report

**Description:** Create a JSL script to produce this analysis, and show it in the report itself. Useful to preserve a printed record of what was done.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
obj << Save Script to Report;

```

### Save Script to Script Window

**Syntax:** obj &lt;&lt; Save Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
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

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
obj << Title( "My Platform" );

```

### Top Report

**Syntax:** obj &lt;&lt; Top Report

**Description:** Returns a reference to the root node in the report.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
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

**Syntax:** obj = Process Capability(...Window View( "Visible"|"Invisible"|"Private" )...)

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

## Process Capability Analysis > Process Capability Analysis Comparisons > Process Capability Probability Plots

### Item Messages

#### Parametric Fit Confidence Limits Shading

**Syntax:** scrobj &lt;&lt; Parametric Fit Confidence Limits Shading( state=0|1 )

**Description:** Shows or hides the confidence limits shading for the parametric fit.

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 & Dist( Lognormal ) ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	Capability Box Plots( 1 ),
	Capability Index Plot( 1 ),
	{(:Process 1 & Dist( Lognormal )) <<
	Process Capability Analysis(
		Compare Distributions(
			1,
			<<Fit Lognormal,
			Probability Plots(
				1,
				Lognormal Probability Plot( Parametric Fit Confidence Limits Shading( 1 ) )
			)
		)
	)}
);
Wait( 1 );
scrobj = (Report( obj )["Process 1(Lognormal) Probability Plot"] << get scriptable object);
scrobj << Parametric Fit Confidence Limits Shading( 0 );

```

#### Parametric Fit Line

**Syntax:** scrobj &lt;&lt; Parametric Fit Line( state=0|1 )

**Description:** Shows or hides the line for the parametric fit. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 & Dist( Lognormal ) ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	Capability Box Plots( 1 ),
	Capability Index Plot( 1 ),
	{(:Process 1 & Dist( Lognormal )) <<
	Process Capability Analysis(
		Compare Distributions(
			1,
			<<Fit Lognormal,
			Probability Plots( 1, Lognormal Probability Plot( Parametric Fit Line( 0 ) ) )
		)
	)}
);
Wait( 1 );
scrobj = (Report( obj )["Process 1(Lognormal) Probability Plot"] << get scriptable object);
scrobj << Parametric Fit Line( 1 );

```

#### Simultaneous Empirical Confidence Limits

**Syntax:** scrobj &lt;&lt; Simultaneous Empirical Confidence Limits( state=0|1 )

**Description:** Shows or hides the simultaneous empirical confidence limits. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 & Dist( Lognormal ) ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	Capability Box Plots( 1 ),
	Capability Index Plot( 1 ),
	{(:Process 1 & Dist( Lognormal )) <<
	Process Capability Analysis(
		Compare Distributions(
			1,
			<<Fit Lognormal,
			Probability Plots(
				1,
				Lognormal Probability Plot( Simultaneous Empirical Confidence Limits( 0 ) )
			)
		)
	)}
);
Wait( 1 );
scrobj = (Report( obj )["Process 1(Lognormal) Probability Plot"] << get scriptable object);
scrobj << Simultaneous Empirical Confidence Limits( 1 );

```

#### Simultaneous Empirical Confidence Limits Shading

**Syntax:** scrobj &lt;&lt; Simultaneous Empirical Confidence Limits Shading( state=0|1 )

**Description:** Shows or hides the shading for the simultaneous empirical confidence limits. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 & Dist( Lognormal ) ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	Capability Box Plots( 1 ),
	Capability Index Plot( 1 ),
	{(:Process 1 & Dist( Lognormal )) <<
	Process Capability Analysis(
		Compare Distributions(
			1,
			<<Fit Lognormal,
			Probability Plots(
				1,
				Lognormal Probability Plot(
					Simultaneous Empirical Confidence Limits Shading( 0 )
				)
			)
		)
	)}
);
Wait( 1 );
scrobj = (Report( obj )["Process 1(Lognormal) Probability Plot"] << get scriptable object);
scrobj << Simultaneous Empirical Confidence Limits Shading( 1 );

```

## Process Capability Analysis > Process Capability Analysis Comparisons

### Item Messages

#### Comparison Details

**Syntax:** scrobj &lt;&lt; Comparison Details( state=0|1 )

**Description:** Shows or hides a report that contains the AICc, BIC, and -2Loglikelihood values for each distribution. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 & Dist( Lognormal ) ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	Capability Box Plots( 1 ),
	Capability Index Plot( 1 ),
	{(:Process 1 & Dist( Lognormal )) <<
	Process Capability Analysis(
		Compare Distributions(
			1,
			<<Fit Normal,
			<<Fit Gamma,
			<<Fit Johnson,
			<<Fit Lognormal,
			<<Fit Weibull,
			Comparison Details( 0 )
		)
	)}
);
Wait( 1 );
scrobj = Report( obj )["Compare Distributions"] << Get Scriptable Object;
scrobj << Comparison Details( 1 );

```

#### Comparison Histogram

**Syntax:** scrobj &lt;&lt; Comparison Histogram( state=0|1 )

**Description:** Shows or hides the distribution comparison histogram. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 & Dist( Lognormal ) ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	Capability Box Plots( 1 ),
	Capability Index Plot( 1 ),
	{(:Process 1 & Dist( Lognormal )) <<
	Process Capability Analysis(
		Compare Distributions(
			1,
			<<Fit Normal,
			<<Fit Gamma,
			<<Fit Johnson,
			<<Fit Lognormal,
			<<Fit Weibull,
			Comparison Histogram( 0 )
		)
	)}
);
Wait( 1 );
scrobj = Report( obj )["Compare Distributions"] << Get Scriptable Object;
scrobj << Comparison Histogram( 1 );

```

#### Fit Beta

**Syntax:** scrobj &lt;&lt; Compare Distributions( 1, &lt;&lt;Fit Beta )

**Description:** Shows the beta distribution fit statistics in the comparison details report and the density curve in the histogram.

**JMP Version Added:** 14

```jsl

dt = Open( "$SAMPLE_DATA/cities.jmp" );
obj = dt << Process Capability(
	Process Variables( :OZONE ),
	Spec Limits( OZONE( LSL( 0.05 ), Target( 0.15 ), USL( 0.4 ) ) ),
	Individual Detail Reports( 1 ),
	{:OZONE << Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )}
);
Wait( 1 );
scrobj = (Report( obj )["OZONE Capability"] << get scriptable object);
scrobj << Compare Distributions( 1, <<Fit Beta );

```

#### Fit Exponential

**Syntax:** scrobj &lt;&lt; Compare Distributions( 1, &lt;&lt;Fit Exponential )

**Description:** Shows the exponential distribution fit statistics in the comparison details report and the density curve in the histogram.

**JMP Version Added:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	{:Process 1 << Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )}
);
Wait( 1 );
scrobj = (Report( obj )["Process 1 Capability"] << get scriptable object);
scrobj << Compare Distributions( 1, <<Fit Exponential );

```

#### Fit Gamma

**Syntax:** scrobj &lt;&lt; Compare Distributions( 1, &lt;&lt;Fit Gamma )

**Description:** Shows the gamma distribution fit statistics in the comparison details report and the density curve in the histogram.

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	{:Process 1 << Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )}
);
Wait( 1 );
scrobj = (Report( obj )["Process 1 Capability"] << get scriptable object);
scrobj << Compare Distributions( 1, <<Fit Gamma );

```

#### Fit Johnson

**Syntax:** scrobj &lt;&lt; Compare Distributions( 1, &lt;&lt;Fit Johnson )

**Description:** Shows the Johnson distribution fit statistics in the comparison details report and the density curve in the histogram.

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	{:Process 1 << Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )}
);
Wait( 1 );
scrobj = (Report( obj )["Process 1 Capability"] << get scriptable object);
scrobj << Compare Distributions( 1, <<Fit Johnson );

```

#### Fit Largest Extreme Value

**Syntax:** scrobj &lt;&lt; Compare Distributions( 1, &lt;&lt;Fit Largest Extreme Value )

**Description:** Shows the largest extreme value distribution fit statistics in the comparison details report and the density curve in the histogram.

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	{:Process 1 << Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )}
);
Wait( 1 );
scrobj = (Report( obj )["Process 1 Capability"] << get scriptable object);
scrobj << Compare Distributions( 1, <<Fit Largest Extreme Value );

```

#### Fit Lognormal

**Syntax:** scrobj &lt;&lt; Compare Distributions( 1, &lt;&lt;Fit Lognormal )

**Description:** Shows the lognormal distribution fit statistics in the comparison details report and the density curve in the histogram.

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	{:Process 1 << Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )}
);
Wait( 1 );
scrobj = (Report( obj )["Process 1 Capability"] << get scriptable object);
scrobj << Compare Distributions( 1, <<Fit Lognormal );

```

#### Fit Nonparametric

**Syntax:** scrobj &lt;&lt; Compare Distributions( 1, &lt;&lt;Fit Nonparametric )

**Description:** Shows the nonparametric distribution kernel bandwidth slider and the density curve in the histogram.

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	{:Process 1 << Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )}
);
Wait( 1 );
scrobj = (Report( obj )["Process 1 Capability"] << get scriptable object);
scrobj << Compare Distributions( 1, <<Fit Nonparametric );

```

#### Fit Normal

**Syntax:** scrobj &lt;&lt; Compare Distributions( 1, &lt;&lt;Fit Normal )

**Description:** Shows the normal distribution fit statistics in the comparison details report and the density curve in the histogram.

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	{:Process 1 << Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )}
);

```

#### Fit SHASH

**Syntax:** scrobj &lt;&lt; Compare Distributions( 1, &lt;&lt;Fit SHASH )

**Description:** Shows the SHASH distribution fit statistics in the comparison details report and the density curve in the histogram.

**JMP Version Added:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	{:Process 1 << Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )}
);
Wait( 1 );
scrobj = (Report( obj )["Process 1 Capability"] << get scriptable object);
scrobj << Compare Distributions( 1, <<Fit SHASH );

```

#### Fit Smallest Extreme Value

**Syntax:** scrobj &lt;&lt; Compare Distributions( 1, &lt;&lt;Fit Smallest Extreme Value )

**Description:** Shows the smallest extreme value distribution fit statistics in the comparison details report and the density curve in the histogram.

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	{:Process 1 << Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )}
);
Wait( 1 );
scrobj = (Report( obj )["Process 1 Capability"] << get scriptable object);
scrobj << Compare Distributions( 1, <<Fit Smallest Extreme Value );

```

#### Fit Weibull

**Syntax:** scrobj &lt;&lt; Compare Distributions( 1, &lt;&lt;Fit Weibull )

**Description:** Shows the Weibull distribution fit statistics in the comparison details report and the density curve in the histogram.

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	{:Process 1 << Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )}
);
Wait( 1 );
scrobj = (Report( obj )["Process 1 Capability"] << get scriptable object);
scrobj << Compare Distributions( 1, <<Fit Weibull );

```

#### Mixture of 2 Normals

**Syntax:** scrobj &lt;&lt; Compare Distributions( 1, &lt;&lt;Mixture of 2 Normals )

**Description:** Shows the Mixture of 2 Normals distribution fit statistics in the comparison details report and the density curve in the histogram.

**JMP Version Added:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	{:Process 1 << Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )}
);
Wait( 1 );
scrobj = (Report( obj )["Process 1 Capability"] << get scriptable object);
scrobj << Compare Distributions( 1, <<Mixture of 2 Normals );

```

#### Mixture of 3 Normals

**Syntax:** scrobj &lt;&lt; Compare Distributions( 1, &lt;&lt;Mixture of 3 Normals )

**Description:** Shows the Mixture of 3 Normals distribution fit statistics in the comparison details report and the density curve in the histogram.

**JMP Version Added:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	{:Process 1 << Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )}
);
Wait( 1 );
scrobj = (Report( obj )["Process 1 Capability"] << get scriptable object);
scrobj << Compare Distributions( 1, <<Mixture of 3 Normals );

```

#### Order by Comparison Criterion

**Syntax:** scrobj &lt;&lt; Order by Comparison Criterion( "AICc"|"BIC"|"-2Loglikelihood" )

**Description:** Reorders the comparison details report. It can be reordered by AICc, BIC, or -2Loglikelihood.

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 & Dist( Lognormal ) ),
	Individual Detail Reports( 1 ),
	{(:Process 1 & Dist( Lognormal )) <<
	Process Capability Analysis(
		Compare Distributions(
			1, <<Fit Normal, <<Fit Gamma, <<Fit Johnson, <<Fit Lognormal, <<Fit Weibull,
		)
	)}
);
Wait( 1 );
scrobj = (Report( obj )["Compare Distributions"] << get scriptable object);
scrobj << Order by Comparison Criterion( "-2Loglikelihood" );

```

#### Probability Plots

**Syntax:** scrobj &lt;&lt; Probability Plots( state=0|1 )

**Description:** Shows or hides the distribution comparison probability plots.

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 & Dist( Lognormal ) ),
	Individual Detail Reports( 1 ),
	{(:Process 1 & Dist( Lognormal )) <<
	Process Capability Analysis( Compare Distributions( 1, <<Fit Normal, <<Fit Lognormal ) )}
);
Wait( 1 );
scrobj = (Report( obj )["Compare Distributions"] << get scriptable object);
scrobj << Probability Plots( 1 );

```

## Process Capability Analysis > Process Capability Analysis Histogram

### Item Messages

#### Show Between-and-Within Sigma Density

**Syntax:** scrobj &lt;&lt; "Show Between-and-Within Sigma Density"n( state=0|1 )

**Description:** Shows or hides the density curve that uses between-and-within sigma in the histogram. On by default.

**JMP Version Added:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << Process Capability(
	Process Variables( :Gap[:Date] & Between ),
	Within Subgroup Variation( Average of Unbiased Standard Deviations ),
	Individual Detail Reports( 1 ),
	{(:Gap[:Date] & Between) << Process Capability Analysis(
		Histogram( 1, "Show Between-and-Within Sigma Density"n( 0 ) )
	)}
);
Wait( 1 );
scrobj = (Report( obj )["Histogram"] << get scriptable object);
scrobj << "Show Between-and-Within Sigma Density"n( 1 );

```

#### Show Count Axis

**Syntax:** scrobj &lt;&lt; Show Count Axis( state=0|1 )

**Description:** Shows or hides a count axis to the right of the histogram frame.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << Process Capability(
	Process Variables( :Gap[:Date] ),
	Individual Detail Reports( 1 ),
	{(:Gap[:Date]) << Process Capability Analysis( Histogram( 1, Show Count Axis( 0 ) ) )}
);
Wait( 1 );
scrobj = (Report( obj )["Histogram"] << get scriptable object);
scrobj << Show Count Axis( 1 );

```

#### Show Density Axis

**Syntax:** scrobj &lt;&lt; Show Density Axis( state=0|1 )

**Description:** Shows or hides a density axis to the right of the histogram frame.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << Process Capability(
	Process Variables( :Gap[:Date] ),
	Individual Detail Reports( 1 ),
	{(:Gap[:Date]) << Process Capability Analysis( Histogram( 1, Show Density Axis( 0 ) ) )}
);
Wait( 1 );
scrobj = (Report( obj )["Histogram"] << get scriptable object);
scrobj << Show Density Axis( 1 );

```

#### Show Overall Sigma Density

**Syntax:** scrobj &lt;&lt; Show Overall Sigma Density( state=0|1 )

**Description:** Shows or hides the density curve that uses overall sigma in the histogram. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << Process Capability(
	Process Variables( :Gap[:Date] ),
	Individual Detail Reports( 1 ),
	{(:Gap[:Date]) << Process Capability Analysis(
		Histogram( 1, Show Overall Sigma Density( 0 ) )
	)}
);
Wait( 1 );
scrobj = (Report( obj )["Histogram"] << get scriptable object);
scrobj << Show Overall Sigma Density( 1 );

```

#### Show Spec Limits

**Syntax:** scrobj &lt;&lt; Show Spec Limits( state=0|1 )

**Description:** Shows or hides the lower and upper specification limits in the histogram. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << Process Capability(
	Process Variables( :Gap[:Date] ),
	Individual Detail Reports( 1 ),
	{(:Gap[:Date]) << Process Capability Analysis( Histogram( 1, Show Spec Limits( 0 ) ) )}
);
Wait( 1 );
scrobj = (Report( obj )["Histogram"] << get scriptable object);
scrobj << Show Spec Limits( 1 );

```

#### Show Target

**Syntax:** scrobj &lt;&lt; Show Target( state=0|1 )

**Description:** Shows or hides the target line in the histogram. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << Process Capability(
	Process Variables( :Gap[:Date] ),
	Individual Detail Reports( 1 ),
	{(:Gap[:Date]) << Process Capability Analysis( Histogram( 1, Show Target( 0 ) ) )}
);
Wait( 1 );
scrobj = (Report( obj )["Histogram"] << get scriptable object);
scrobj << Show Target( 1 );

```

#### Show Within Sigma Density

**Syntax:** scrobj &lt;&lt; Show Within Sigma Density( state=0|1 )

**Description:** Shows or hides the density curve that uses within sigma in the histogram. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << Process Capability(
	Process Variables( :Gap[:Date] ),
	Individual Detail Reports( 1 ),
	{(:Gap[:Date]) << Process Capability Analysis(
		Histogram( 1, Show Within Sigma Density( 0 ) )
	)}
);
Wait( 1 );
scrobj = (Report( obj )["Histogram"] << get scriptable object);
scrobj << Show Within Sigma Density( 1 );

```

## Process Capability Analysis > Process Capability Interactive Plot

### Item Messages

#### Capability

**Syntax:** scrobj &lt;&lt; Capability( state=0|1 )

**Description:** Shows or hides the capability indices. The original capability indices are based on the overall sigma. On by default.

**JMP Version Added:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables( :PNP1 ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	{:PNP1 << Process Capability Analysis(
		Process Summary( 0 ),
		Overall Sigma Capability( 0 ),
		Nonconformance( 0 ),
		Within Sigma Capability( 0 ),
		Histogram( 0 ),
		Interactive Capability Plot( 1, Capability( 0 ) )
	)}
);
Wait( 1 );
scrobj = (Report( obj )["Interactive Capability Plot"] << get scriptable object);
scrobj << Capability( 1 );

```

#### Nonconformance

**Syntax:** scrobj &lt;&lt; Nonconformance( state=0|1 )

**Description:** Shows or hides the nonconformance. The original nonconformance values are based on the overall sigma. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables( :PNP1 ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	{:PNP1 << Process Capability Analysis(
		Process Summary( 0 ),
		Overall Sigma Capability( 0 ),
		Nonconformance( 0 ),
		Within Sigma Capability( 0 ),
		Histogram( 0 ),
		Interactive Capability Plot( 1, Nonconformance( 0 ) )
	)}
);
Wait( 1 );
scrobj = (Report( obj )["Interactive Capability Plot"] << get scriptable object);
scrobj << Nonconformance( 1 );

```

#### Revert to Original Values

**Syntax:** scrobj &lt;&lt; Revert to Original Values

**Description:** Reverts the interactive capability plot back to its original values.

**JMP Version Added:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables( :PNP1 ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	{:PNP1 << Process Capability Analysis(
		Process Summary( 0 ),
		Overall Sigma Capability( 0 ),
		Nonconformance( 0 ),
		Within Sigma Capability( 0 ),
		Histogram( 0 ),
		Interactive Capability Plot( 1, New Values( Mean( 400 ) ) )
	)}
);
Wait( 1 );
scrobj = (Report( obj )["Interactive Capability Plot"] << get scriptable object);
scrobj << Revert to Original Values;

```

#### Save New Spec Limits as a Column Property

**Syntax:** scrobj &lt;&lt; Save New Spec Limits as a Column Property

**Description:** Saves the new specification limits as a column property in the original data table.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables( :PNP1 ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	{:PNP1 << Process Capability Analysis(
		Process Summary( 0 ),
		Overall Sigma Capability( 0 ),
		Nonconformance( 0 ),
		Within Sigma Capability( 0 ),
		Histogram( 0 ),
		Interactive Capability Plot( 1, New Values( LSL( 150 ), Target( 300 ), USL( 450 ) ) )
	)}
);
Wait( 1 );
scrobj = (Report( obj )["Interactive Capability Plot"] << get scriptable object);
scrobj << Save New Spec Limits as a Column Property;

```

## Process Capability Analysis > Process Capability Normal Probability Plot

### Item Messages

#### Normal Fit Confidence Limits Shading

**Syntax:** scrobj &lt;&lt; Normal Fit Confidence Limits Shading( state=0|1 )

**Description:** Shows or hides the normal fit confidence limits shading in the normal probability plot. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << Process Capability(
	Process Variables( :Gap[:Date] ),
	Individual Detail Reports( 1 ),
	{:Gap[:Date] << Process Capability Analysis(
		Normal Probability Plot( 1, Normal Fit Confidence Limits Shading( 0 ) )
	)}
);
Wait( 2 );
scrobj = Report( obj )["Normal Probability Plot"] << get scriptable object;
scrobj << Normal Fit Confidence Limits Shading( 1 );

```

#### Normal Fit Line

**Syntax:** scrobj &lt;&lt; Normal Fit Line( state=0|1 )

**Description:** Shows or hides the normal fit line in the normal probability plot. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << Process Capability(
	Process Variables( :Gap[:Date] ),
	Individual Detail Reports( 1 ),
	{:Gap[:Date] << Process Capability Analysis(
		Normal Probability Plot( 1, Normal Fit Line( 0 ) )
	)}
);
Wait( 2 );
scrobj = Report( obj )["Normal Probability Plot"] << get scriptable object;
scrobj << Normal Fit Line( 1 );

```

#### Simultaneous Empirical Confidence Limits

**Syntax:** scrobj &lt;&lt; Simultaneous Empirical Confidence Limits( state=0|1 )

**Description:** Shows or hides the simultaneous empirical confidence limits in the normal probability plot in the Process Capability report. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << Process Capability(
	Process Variables( :Gap[:Date] ),
	Individual Detail Reports( 1 ),
	{:Gap[:Date] << Process Capability Analysis(
		Normal Probability Plot( 1, Simultaneous Empirical Confidence Limits( 0 ) )
	)}
);
Wait( 2 );
scrobj = Report( obj )["Normal Probability Plot"] << get scriptable object;
scrobj << Simultaneous Empirical Confidence Limits( 1 );

```

#### Simultaneous Empirical Confidence Limits Shading

**Syntax:** scrobj &lt;&lt; Simultaneous Empirical Confidence Limits Shading( state=0|1 )

**Description:** Shows or hides the simultaneous empirical confidence limits shading in the normal probability plot in the Process Capability report. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << Process Capability(
	Process Variables( :Gap[:Date] ),
	Individual Detail Reports( 1 ),
	{:Gap[:Date] << Process Capability Analysis(
		Normal Probability Plot( 1, Simultaneous Empirical Confidence Limits Shading( 0 ) )
	)}
);
Wait( 2 );
scrobj = Report( obj )["Normal Probability Plot"] << get scriptable object;
scrobj << Simultaneous Empirical Confidence Limits Shading( 1 );

```

## Process Capability Analysis

### Item Messages

#### Between-and-Within Sigma Capability

**Syntax:** scrobj &lt;&lt; "Between-and-Within Sigma Capability"n( state=0|1 )

**Description:** Shows or hides the capability indices that use between-and-within sigma. On by default.

**JMP Version Added:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << Process Capability(
	Process Variables( :Gap[:Date] & Between ),
	Individual Detail Reports( 1 ),
	{(:Gap[:Date] & Between) << Process Capability Analysis(
		"Between-and-Within Sigma Capability"n( 0 )
	)}
);
Wait( 1 );
scrobj = Report( obj )["Gap[Date] Capability"] << Get Scriptable Object;
scrobj << "Between-and-Within Sigma Capability"n( 1 );

```

#### Between-and-Within Sigma Target Index

**Syntax:** scrobj &lt;&lt; "Between-and-Within Sigma Target Index"n( state=0|1 )

**Description:** Shows or hides an estimate of the target index that is based on the between-and-within sigma.

**JMP Version Added:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << Process Capability(
	Process Variables( :Gap[:Date] & Between ),
	Individual Detail Reports( 1 ),
	{(:Gap[:Date] & Between) << Process Capability Analysis(
		"Between-and-Within Sigma Target Index"n( 1 )
	)}
);
Wait( 1 );
scrobj = Report( obj )["Gap[Date] Capability"] << get scriptable object;
scrobj << "Between-and-Within Sigma Target Index"n( 0 );

```

#### Between-and-Within Sigma Z Benchmark

**Syntax:** scrobj &lt;&lt; "Between-and-Within Sigma Z Benchmark"n( state=0|1 )

**Description:** Shows or hides the Z benchmark indices that use between-and-within sigma.

**JMP Version Added:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << Process Capability(
	Process Variables( :Gap[:Date] & Between ),
	Individual Detail Reports( 1 ),
	{(:Gap[:Date] & Between) << Process Capability Analysis(
		"Between-and-Within Sigma Z Benchmark"n( 0 )
	)}
);
Wait( 1 );
scrobj = Report( obj )["Gap[Date] Capability"] << get scriptable object;
scrobj << "Between-and-Within Sigma Z Benchmark"n( 1 );

```

#### Compare Distributions

**Syntax:** scrobj &lt;&lt; Compare Distributions( state=0|1, &lt; &lt;&lt;distribution options &gt; )

**Description:** Shows or hides the control panel for comparing distributions for the process.

**Example 1**

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 & Dist( Lognormal ) ),
	Individual Detail Reports( 1 ),
	{(:Process 1 & Dist( Lognormal )) <<
	Process Capability Analysis( Compare Distributions( 0 ) )}
);
Wait( 1 );
scrobj = Report( obj )["Process 1(Lognormal) Capability"] << get scriptable object;
scrobj << Compare Distributions( 1, <<Fit Lognormal );

```

**Example 2**

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	{:Process 1 << Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )}
);
Wait( 1 );
scrobj = (Report( obj )["Process 1 Capability"] << get scriptable object);
scrobj << Compare Distributions( 1, <<Fit SHASH );

```

**Example 3**

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 & Dist( Lognormal ) ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	Capability Box Plots( 1 ),
	Capability Index Plot( 1 ),
	{(:Process 1 & Dist( Lognormal )) <<
	Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )}
);
Wait( 1 );
scrobj = Report( obj )["Process 1(Lognormal) Capability"] << Get Scriptable Object;
scrobj << Compare Distributions(
	1, <<Fit Gamma, <<Fit Johnson, <<FitLognormal, <<Fit Weibull
);

```

**Example 4**

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	{:Process 1 << Process Capability Analysis(
		Compare Distributions( 1, <<Fit Normal, <<Fit Gamma )
	)}
);
Wait( 1 );
scrobj = (Report( obj )["Process 1 Capability"] << get scriptable object);
scrobj << Compare Distributions( 0 );

```

#### Fix Parameters

**Syntax:** scrobj &lt;&lt; Fix Parameters( vector )

**Description:** Fixes certain parameters to the specified values and re-estimates the rest.

**JMP Version Added:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 & Dist( Weibull ) ),
	Individual Detail Reports( 1 ),
	{(:Process 1 & Dist( Weibull )) <<
	Process Capability Analysis( Fix Parameters( [11, .] ) )}
);
Wait( 1 );
scrobj = Report( obj )["Process 1(Weibull*) Capability"] << get scriptable object;
scrobj << Fix Parameters( [., .] );

```

#### Histogram

**Syntax:** scrobj &lt;&lt; Histogram( state=0|1 )

**Description:** Shows or hides the histogram of the process data in the Individual Detail Report. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << Process Capability(
	Process Variables( :Gap[:Date] ),
	Individual Detail Reports( 1 ),
	{:Gap[:Date] << Process Capability Analysis( Histogram( 0 ) )}
);
Wait( 1 );
scrobj = Report( obj )["Gap[Date] Capability"] << get scriptable object;
scrobj << Histogram( 1 );

```

#### Interactive Capability Plot

**Syntax:** scrobj &lt;&lt; Interactive Capability Plot( state=0|1 )

**Description:** Shows or hides an interactive capability report that enables you to explore how changes to the process or the specification limits affect capability.

**JMP Version Added:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables( :PNP1 ),
	Individual Detail Reports( 1 ),
	{:PNP1 << Process Capability Analysis( Interactive Capability Plot( 0 ) )}
);
Wait( 1 );
scrobj = Report( obj )["PNP1 Capability"] << get scriptable object;
scrobj << Interactive Capability Plot( 1 );

```

#### Nonconformance

**Syntax:** scrobj &lt;&lt; Nonconformance( state=0|1 )

**Description:** Shows or hides a report of the observed and expected percentage of observations that fall outside the specifications limits. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << Process Capability(
	Process Variables( :Gap[:Date] ),
	Individual Detail Reports( 1 ),
	{:Gap[:Date] << Process Capability Analysis( Nonconformance( 0 ) )}
);
Wait( 1 );
scrobj = Report( obj )["Gap[Date] Capability"] << get scriptable object;
scrobj << Nonconformance( 1 );

```

#### Nonparametric Density

**Syntax:** scrobj &lt;&lt; Nonparametric Density( state=0|1 )

**Description:** Shows or hides the Nonparametric Density report, which provides the kernel bandwidth that is used to fit the nonparametric distribution. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Tablet Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Purity & Dist( Nonparametric ) ),
	Individual Detail Reports( 1 ),
	{(:Purity & Dist( Nonparametric )) <<
	Process Capability Analysis( Nonparametric Density( 0 ) )}
);
Wait( 1 );
scrobj = Report( obj )["Purity(Nonparametric) Capability"] << get scriptable object;
scrobj << Nonparametric Density( 1 );

```

#### Normal Probability Plot

**Syntax:** scrobj &lt;&lt; Normal Probability Plot( state=0|1 )

**Description:** Shows or hides a normal probability plot.

**JMP Version Added:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << Process Capability(
	Process Variables( :Gap[:Date] ),
	Individual Detail Reports( 1 ),

);
Wait( 1 );
scrobj = Report( obj )["Gap[Date] Capability"] << get scriptable object;
scrobj << Normal Probability Plot( 1 );

```

#### Overall Sigma Capability

**Syntax:** scrobj &lt;&lt; Overall Sigma Capability( state=0|1 )

**Description:** Shows or hides the capability indices that are based on the overall sigma. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << Process Capability(
	Process Variables( :Gap[:Date] ),
	Individual Detail Reports( 1 ),
	{:Gap[:Date] << Process Capability Analysis( Overall Sigma Capability( 0 ) )}
);
Wait( 1 );
scrobj = Report( obj )["Gap[Date] Capability"] << get scriptable object;
scrobj << Overall Sigma Capability( 1 );

```

#### Overall Sigma Z Benchmark

**Syntax:** scrobj &lt;&lt; Overall Sigma Z Benchmark( state=0|1 )

**Description:** Shows or hides the Z benchmark indices that are based on the overall sigma.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << Process Capability(
	Process Variables( :Gap[:Date] ),
	Individual Detail Reports( 1 ),
	{:Gap[:Date] << Process Capability Analysis( Overall Sigma Z Benchmark( 0 ) )}
);
Wait( 1 );
scrobj = Report( obj )["Gap[Date] Capability"] << get scriptable object;
scrobj << Overall Sigma Z Benchmark( 1 );

```

#### Parameter Estimates

**Syntax:** scrobj &lt;&lt; Parameter Estimates( state=0|1 )

**Description:** Shows or hides the parameter estimate report for nonnormal parametric distributions. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Tablet Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Thickness & Dist( Johnson ) ),
	Individual Detail Reports( 1 ),
	{(:Thickness & Dist( Johnson )) <<
	Process Capability Analysis( Parameter Estimates( 0 ) )}
);
Wait( 1 );
scrobj = Report( obj )["Thickness(Johnson) Capability"] << get scriptable object;
scrobj << Parameter Estimates( 1 );

```

#### Process Summary

**Syntax:** scrobj &lt;&lt; Process Summary( state=0|1 )

**Description:** Shows or hides the process summary statistics. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << Process Capability(
	Process Variables( :Gap[:Date] ),
	Individual Detail Reports( 1 ),
	{:Gap[:Date] << Process Capability Analysis( Process Summary( 0 ) )}
);
Wait( 1 );
scrobj = Report( obj )["Gap[Date] Capability"] << get scriptable object;
scrobj << Process Summary( 1 );

```

#### Within Sigma Capability

**Syntax:** scrobj &lt;&lt; Within Sigma Capability( state=0|1 )

**Description:** Shows or hides the capability indices and their confidence intervals that are based on the within sigma. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << Process Capability(
	Process Variables( :Gap[:Date] ),
	Individual Detail Reports( 1 ),
	{:Gap[:Date] << Process Capability Analysis( Within Sigma Capability( 0 ) )}
);
Wait( 1 );
scrobj = Report( obj )["Gap[Date] Capability"] << get scriptable object;
scrobj << Within Sigma Capability( 1 );

```

#### Within Sigma Target Index

**Syntax:** scrobj &lt;&lt; Within Sigma Target Index( state=0|1 )

**Description:** Shows or hides an estimate of the target index that is based on the within sigma.

**JMP Version Added:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << Process Capability(
	Process Variables( :Gap[:Date] ),
	Individual Detail Reports( 1 ),
	{:Gap[:Date] << Process Capability Analysis( Within Sigma Target Index( 0 ) )}
);
Wait( 1 );
scrobj = Report( obj )["Gap[Date] Capability"] << get scriptable object;
scrobj << Within Sigma Target Index( 1 );

```

#### Within Sigma Z Benchmark

**Syntax:** scrobj &lt;&lt; Within Sigma Z Benchmark( state=0|1 )

**Description:** Shows or hides the Z benchmark indices that are based on the within sigma.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << Process Capability(
	Process Variables( :Gap[:Date] ),
	Individual Detail Reports( 1 ),
	{:Gap[:Date] << Process Capability Analysis( Within Sigma Z Benchmark( 0 ) )}
);
Wait( 1 );
scrobj = Report( obj )["Gap[Date] Capability"] << get scriptable object;
scrobj << Within Sigma Z Benchmark( 1 );

```

## Process Capability Goal Plot

### Item Messages

#### Capability Lines

**Syntax:** obj &lt;&lt; Goal Plot( 1, Capability Lines( number=1.0 ) ); scrobj &lt;&lt; Capability Lines( number=1.0 )

**Description:** Sets the Ppk (Cpk) value that controls the goal triangle lines in the Goal Plot. This value also appears in the Ppk (Cpk) edit box. "1.0" by default.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
obj << Goal Plot( 1, Capability Lines( 1.5 ) );
scrobj = (Report( obj )["Goal Plot"] << get scriptable object);
Wait( 1 );
scrobj << Capability Lines( 1 );

```

#### Defect Rate Contour

**Syntax:** obj &lt;&lt; Goal Plot( 1, Defect Rate Contour( number=0.0001 ) ); scrobj &lt;&lt; Defect Rate Contour( number=0.0001 )

**Description:** Shows or hides the specified defect rate contour. "0.0001" by default.

**Example 1**

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
obj << Goal Plot( 1, Defect Rate Contour( 0.01 ) );

```

**Example 2**

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
Wait( 1 );
scrobj = (Report( obj )["Goal Plot"] << get scriptable object);
scrobj << Defect Rate Contour( 0.01 );

```

#### Label Overall Sigma Points

**Syntax:** obj &lt;&lt; Goal Plot( 1, Label Overall Sigma Points( state=0|1 ) ); scrobj &lt;&lt; Label Overall Sigma Points( state=0|1 )

**Description:** Shows or hides labels for points on the goal plot. The points are calculated using the overall sigma estimate.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
obj << Goal Plot( 1, Label Overall Sigma Points( 0 ) );
Wait( 1 );
scrobj = (Report( obj )["Goal Plot"] << get scriptable object);
scrobj << Label Overall Sigma Points( 1 );

```

#### Label Within Sigma Points

**Syntax:** obj &lt;&lt; Goal Plot( 1, Label Within Sigma Points( state=0|1 ) ); scrobj &lt;&lt; Label Within Sigma Points( state=0|1 )

**Description:** Shows or hides labels for points on the goal plot. The points are calculated using the within sigma estimate.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	),

);
obj << Goal Plot(
	1,
	Show Within Sigma Points( 1 ),
	Show Overall Sigma Points( 0 ),
	Label Within Sigma Points( 1 )
);
Wait( 1 );
scrobj = (Report( obj )["Goal Plot"] << get scriptable object);
scrobj << Label Within Sigma Points( 0 );

```

#### Label Within or Between-and-Within Sigma Points

**Syntax:** obj &lt;&lt; Goal Plot( 1, "Label Within or Between-and-Within Sigma Points"n( state=0|1 ) ); scrobj &lt;&lt; "Label Within or Between-and-Within Sigma Points"n( state=0|1 )

**Description:** Shows or hides labels for points on the goal plot. The points are calculated using the within sigma estimate or, if specified, the between-and-within sigma estimate.

**JMP Version Added:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer] & Between, :PNP1[:lot_id, :wafer] & Between,
		:PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	),

);
obj << Goal Plot(
	1,
	"Show Within or Between-and-Within Sigma Points"n( 1 ),
	Show Overall Sigma Points( 0 ),
	"Label Within or Between-and-Within Sigma Points"n( 1 )
);
Wait( 1 );
scrobj = (Report( obj )["Goal Plot"] << get scriptable object);
scrobj << "Label Within or Between-and-Within Sigma Points"n( 0 );

```

#### Shade Levels

**Syntax:** obj &lt;&lt; Goal Plot( 1, Shade Levels( state=0|1 ) ); scrobj &lt;&lt; Shade Levels( state=0|1 )

**Description:** Shows or hides the Ppk (Cpk) level shading in the goal plot. If p represents the Ppk (Cpk) goal entered in the edit box, processes with Ppk (Cpk) greater than 2*p are shaded green; processes with Ppk (Cpk) less than p are shaded red; and the processes with Ppk (Cpk) greater than p and less than 2*p are shaded yellow.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
obj << Goal Plot( 1, Shade Levels( 1 ) );
Wait( 1 );
scrobj = (Report( obj )["Goal Plot"] << get scriptable object);
scrobj << Shade Levels( 0 );

```

#### Show Overall Sigma Points

**Syntax:** obj &lt;&lt; Goal Plot( 1, Show Overall Sigma Points( state=0|1 ) ); scrobj &lt;&lt; Show Overall Sigma Points( state=0|1 )

**Description:** Shows or hides points on the goal plot. The points are calculated using the overall sigma estimate. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	),

);
Wait( 1 );
obj << Goal Plot( 1, Show Overall Sigma Points( 0 ) );
Wait( 1 );
scrobj = (Report( obj )["Goal Plot"] << get scriptable object);
scrobj << Show Overall Sigma Points( 1 );

```

#### Show Within Sigma Points

**Syntax:** obj &lt;&lt; Goal Plot( 1, Show Within Sigma Points( state=0|1 ) ); scrobj &lt;&lt; Show Within Sigma Points( state=0|1 )

**Description:** Shows or hides points on the goal plot. The points are calculated using the within sigma estimate.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
Wait( 1 );
obj << Goal Plot( 1, Show Within Sigma Points( 1 ) );
Wait( 1 );
scrobj = (Report( obj )["Goal Plot"] << get scriptable object);
scrobj << Show Within Sigma Points( 0 );

```

#### Show Within or Between-and-Within Sigma Points

**Syntax:** obj &lt;&lt; Goal Plot( 1, "Show Within or Between-and-Within Sigma Points"n( state=0|1 ) ); scrobj &lt;&lt; "Show Within or Between-and-Within Sigma Points"n( state=0|1 )

**Description:** Shows or hides points on the goal plot. The points are calculated using the within sigma estimate or, if specified, the between-and-within sigma estimate.

**JMP Version Added:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer] & Between, :PNP1[:lot_id, :wafer] & Between,
		:PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
Wait( 1 );
obj << Goal Plot( 1, "Show Within or Between-and-Within Sigma Points"n( 1 ) );
Wait( 1 );
scrobj = (Report( obj )["Goal Plot"] << get scriptable object);
scrobj << "Show Within or Between-and-Within Sigma Points"n( 0 );

```

## Process Capability Index Plot

### Item Messages

#### Capability Lines

**Syntax:** obj &lt;&lt; Capability Index Plot( 1, Capability Lines( number=1.0 ) ); scrobj &lt;&lt; Capability Lines( number=1.0 )

**Description:** Sets the Ppk (Cpk) value that controls the Ppk (Cpk) reference line in the capability index plot. This value also appears in the Ppk (Cpk) edit box. "1.0" by default.

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:Process 1 & Dist( Johnson ), :Process 2 & Dist( Lognormal ), :Process 3,
		:Process 4 & Dist( Lognormal )
	),
	Capability Box Plots( 0 ),
	Goal Plot( 0 ),
	Process Performance Plot( 0 )
);
obj << Capability Index Plot( 1, Capability Lines( 2.0 ) );
scrobj = (Report( obj )["Capability Index Plot"] << get scriptable object);
Wait( 1 );
scrobj << Capability Lines( 1.0 );

```

#### Label Overall Sigma Points

**Syntax:** obj &lt;&lt; Capability Index Plot( 1, Label Overall Sigma Points( state=0|1 ) ); scrobj &lt;&lt; Label Overall Sigma Points( state=0|1 )

**Description:** Shows or hides labels for points on the capability index plot. The points are calculated using the overall sigma estimate.

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:Process 1, :Process 2 & Dist( Lognormal ), :Process 3,
		:Process 4 & Dist( Lognormal ), :Process 5 & Dist( Weibull ), :Process 6, :Process 7
	),
	Capability Box Plots( 0 ),
	Goal Plot( 0 ),
	Process Performance Plot( 0 )
);
obj << Capability Index Plot( 1, Label Overall Sigma Points( 1 ) );
Wait( 1 );
scrobj = (Report( obj )["Capability Index Plot"] << get scriptable object);
scrobj << Label Overall Sigma Points( 0 );

```

#### Label Within Sigma Points

**Syntax:** obj &lt;&lt; Capability Index Plot( 1, Label Within Sigma Points( state=0|1 ) ); scrobj &lt;&lt; Label Within Sigma Points( state=0|1 )

**Description:** Shows or hides labels for points on the capability index plot. The points are calculated using the within sigma estimate.

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:Process 1, :Process 2 & Dist( Lognormal ), :Process 3,
		:Process 4 & Dist( Lognormal ), :Process 5 & Dist( Weibull ), :Process 6, :Process 7
	),
	Moving Range Method( Average of Moving Ranges ),
	Capability Box Plots( 0 ),
	Goal Plot( 0 ),
	Process Performance Plot( 0 )
);
obj << Capability Index Plot(
	1,
	Show Within Sigma Points( 1 ),
	Label Within Sigma Points( 1 )
);
Wait( 1 );
scrobj = (Report( obj )["Capability Index Plot"] << get scriptable object);
scrobj << Label Within Sigma Points( 0 );

```

#### Label Within or Between-and-Within Sigma Points

**Syntax:** obj &lt;&lt; Capability Index Plot( 1, "Label Within or Between-and-Within Sigma Points"n( state=0|1 ) ); scrobj &lt;&lt; "Label Within or Between-and-Within Sigma Points"n( state=0|1 )

**Description:** Shows or hides labels for points on the capability index plot. The points are calculated using the within sigma estimate or, if specified, the between-and-within sigma estimate.

**JMP Version Added:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer] & Between, :PNP1[:lot_id, :wafer] & Between,
		:PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	),
	Capability Box Plots( 0 ),
	Goal Plot( 0 ),
	Process Performance Plot( 0 )
);
obj << Capability Index Plot(
	1,
	"Show Within or Between-and-Within Sigma Points"n( 1 ),
	"Label Within or Between-and-Within Sigma Points"n( 1 )
);
Wait( 1 );
scrobj = (Report( obj )["Capability Index Plot"] << get scriptable object);
scrobj << "Label Within or Between-and-Within Sigma Points"n( 0 );

```

#### Shade Levels

**Syntax:** obj &lt;&lt; Capability Index Plot( 1, Shade Levels( state=0|1 ) ); scrobj &lt;&lt; Shade Levels( state=0|1 )

**Description:** Shows or hides the Ppk (Cpk) level shading in the capability index plot. If p represents the Ppk (Cpk) value entered in the edit box, processes with Ppk (Cpk) greater than 2*p are shaded green; processes with Ppk (Cpk) less than p are shaded red; and the processes with Ppk (Cpk) greater than p and less than 2*p are shaded yellow.

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:Process 1, :Process 2 & Dist( Lognormal ), :Process 3,
		:Process 4 & Dist( Lognormal ), :Process 5 & Dist( Weibull ), :Process 6, :Process 7
	),
	Capability Box Plots( 0 ),
	Goal Plot( 0 ),
	Process Performance Plot( 0 )
);
obj << Capability Index Plot( 1, Shade Levels( 1 ) );
Wait( 1 );
scrobj = (Report( obj )["Capability Index Plot"] << get scriptable object);
scrobj << Shade Levels( 0 );

```

#### Show Overall Sigma Points

**Syntax:** obj &lt;&lt; Capability Index Plot( 1, Show Overall Sigma Points( state=0|1 ) ); scrobj &lt;&lt; Show Overall Sigma Points( state=0|1 )

**Description:** Shows or hides points on the capability index plot. The points are calculated using the overall sigma estimate. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:Process 1, :Process 2 & Dist( Lognormal ), :Process 3,
		:Process 4 & Dist( Lognormal ), :Process 5 & Dist( Weibull ), :Process 6, :Process 7
	),
	Capability Box Plots( 0 ),
	Goal Plot( 0 ),
	Process Performance Plot( 0 )
);
obj << Capability Index Plot(
	1,
	Show Within Sigma Points( 1 ),
	Show Overall Sigma Points( 0 )
);
Wait( 1 );
scrobj = (Report( obj )["Capability Index Plot"] << get scriptable object);
scrobj << Show Overall Sigma Points( 1 );

```

#### Show Within Sigma Points

**Syntax:** obj &lt;&lt; Capability Index Plot( 1, Show Within Sigma Points( state=0|1 ) ); scrobj &lt;&lt; Show Within Sigma Points( state=0|1 )

**Description:** Shows or hides points on the capability index plot. The points are calculated using the within sigma estimate.

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:Process 1, :Process 2 & Dist( Lognormal ), :Process 3,
		:Process 4 & Dist( Lognormal ), :Process 5 & Dist( Weibull ), :Process 6, :Process 7
	),
	Moving Range Method( Average of Moving Ranges ),
	Capability Box Plots( 0 ),
	Goal Plot( 0 ),
	Process Performance Plot( 0 )
);
obj << Capability Index Plot( 1, Show Within Sigma Points( 1 ) );
Wait( 1 );
scrobj = (Report( obj )["Capability Index Plot"] << get scriptable object);
scrobj << Show Within Sigma Points( 0 );

```

#### Show Within or Between-and-Within Sigma Points

**Syntax:** obj &lt;&lt; Capability Index Plot( 1, "Show Within or Between-and-Within Sigma Points"n( state=0|1 ) ); scrobj &lt;&lt; "Show Within or Between-and-Within Sigma Points"n( state=0|1 )

**Description:** Shows or hides points on the capability index plot. The points are calculated using the within sigma estimate or, if specified, the between-and-within sigma estimate.

**JMP Version Added:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer] & Between, :PNP1[:lot_id, :wafer] & Between,
		:PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	),
	Capability Box Plots( 0 ),
	Goal Plot( 0 ),
	Process Performance Plot( 0 )
);
obj << Capability Index Plot( 1, "Show Within or Between-and-Within Sigma Points"n( 1 ) );
Wait( 1 );
scrobj = (Report( obj )["Capability Index Plot"] << get scriptable object);
scrobj << "Show Within or Between-and-Within Sigma Points"n( 0 );

```

## Process Capability Performance Plot

### Item Messages

#### Capability Boundary

**Syntax:** obj &lt;&lt; Process Performance Plot( 1, Capability Boundary( number=1.0 ) ); scrobj &lt;&lt; Capability Boundary( number=1.0 )

**Description:** Sets the overall capability Ppk value that controls the process performance plot boundaries for capable versus not capable. This value also appears in the Overall Ppk edit box. "1.0" by default.

**JMP Version Added:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	),
	Capability Box Plots( 0 ),
	Process Performance Plot( 1 ),
	Goal Plot( 0 ),
	Capability Index Plot( 0 )
);
Wait( 1 );
obj << Process Performance Plot( 1, Capability Boundary( 1.33 ) );
scrobj = (Report( obj )["Process Performance Plot"] << get scriptable object);
Wait( 1 );
scrobj << Capability Boundary( 1 );

```

#### Label Points

**Syntax:** obj &lt;&lt; Process Performance Plot( 1, Label Points( state=0|1 ) ); scrobj &lt;&lt; Label Points( state=0|1 )

**Description:** Shows or hides the process names as labels for the points in the process performance plot.

**JMP Version Added:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	),
	Capability Box Plots( 0 ),
	Process Performance Plot( 1 ),
	Goal Plot( 0 ),
	Capability Index Plot( 0 )
);
obj << Process Performance Plot( 1, Label Points( 1 ) );
Wait( 1 );
scrobj = (Report( obj )["Process Performance Plot"] << get scriptable object);
scrobj << Label Points( 0 );

```

#### Show Within Cpk Curve

**Syntax:** obj &lt;&lt; Process Performance Plot( 1, Show Within Cpk Curve( state=0|1 ) ); scrobj &lt;&lt; Show Within Cpk Curve( state=0|1 )

**Description:** Shows or hides the Within Cpk curve in the process performance plot. On by default.

**JMP Version Added:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	),
	Capability Box Plots( 0 ),
	Process Performance Plot( 1 ),
	Goal Plot( 0 ),
	Capability Index Plot( 0 )
);
obj << Process Performance Plot( 1, Show Within Cpk Curve( 0 ) );
Wait( 1 );
scrobj = (Report( obj )["Process Performance Plot"] << get scriptable object);
scrobj << Show Within Cpk Curve( 1 );

```

#### Stability Boundary

**Syntax:** obj &lt;&lt; Process Performance Plot( 1, Stability Boundary( number=1.25 ) ); scrobj &lt;&lt; Stability Boundary( number=1.25 )

**Description:** Sets the stability ratio value that controls the process performance plot boundaries for stable versus unstable. "1.25" by default.

**JMP Version Added:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	),
	Capability Box Plots( 0 ),
	Process Performance Plot( 1 ),
	Goal Plot( 0 ),
	Capability Index Plot( 0 )
);
Wait( 1 );
obj << Process Performance Plot( 1, Stability Boundary( 1.7 ) );
scrobj = (Report( obj )["Process Performance Plot"] << get scriptable object);
Wait( 1 );
scrobj << Stability Boundary( 1.25 );

```

