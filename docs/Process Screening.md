# Process Screening



## Chart Options Drift Graph

### Circle Alarm Points

**Syntax:** obj << Chart Options as Selected( Circle Alarm Points( state=0|1 ) ); 

 obj << Chart Options for Selected( Circle Alarm Points( state=0|1 ) )

**Description:** Shows or hides red circles around points that are in an alarm state. The corresponding alarm code is shown next to each circled point. This option is not available for Drift Graphs. On by default.

**JMP Version Added:** 17

**Chart Options as Selected Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All,
	Chart Options as Selected( Circle Alarm Points( 0 ) )
);
Wait( 1 );
obj << Chart Options as Selected( Circle Alarm Points( 1 ) );

```

**Chart Options for Selected Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),

);
Wait( 1 );
obj << Chart Options for Selected( Circle Alarm Points( 1 ) );

```

### Connect Points

**Syntax:** obj << Chart Options as Selected( Connect Points( state=0|1 ) ); 

 obj << Chart Options for Selected( Connect Points( state=0|1 ) ); 

 obj << Chart Options Drift Graph( Connect Points( state=0|1 ) )

**Description:** Shows or hides lines that connect the points. On by default.

**JMP Version Added:** 17

**Chart Options as Selected Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Connect Points( 0 ) );

```

**Chart Options Drift Graph Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options Drift Graph( Show Markers( 1 ) )
);
Wait( 1 );
obj << Chart Options Drift Graph( Connect Points( 0 ) );

```

**Chart Options for Selected Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options for Selected( Show Markers( 1 ) )
);
Wait( 1 );
obj << Chart Options for Selected( Connect Points( 0 ) );

```

### Dispersion Chart

**Syntax:** obj << Chart Options as Selected( Dispersion Chart( state=0|1 ) ); 

 obj << Chart Options for Selected( Dispersion Chart( state=0|1 ) )

**Description:** Shows or hides a range, standard deviation, or moving range chart in addition to the control chart for each process. This option is not available for Drift Graphs.

**JMP Version Added:** 17

**Chart Options as Selected Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Dispersion Chart( 1 ) );

```

**Chart Options for Selected Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),

);
Wait( 1 );
obj << Chart Options for Selected( Dispersion Chart( 1 ) );

```

### Frame Size

**Syntax:** obj << Chart Options as Selected( Frame Size( width=500, height=170 ) ); 

 obj << Chart Options for Selected( Frame Size( width=500, height=170 ) ); 

 obj << Chart Options Drift Graph( Frame Size( width=500, height=170 ) )

**Description:** Sets the size of the graph. "500,170" by default.

**JMP Version Added:** 17

**Chart Options as Selected Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Frame Size( 500, 400 ) );

```

**Chart Options Drift Graph Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options Drift Graph( Frame Size( 600, 200 ) )
);

```

**Chart Options for Selected Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options for Selected( Frame Size( 300, 100 ) );

```

### Number of Plots Across

**Syntax:** obj << Chart Options as Selected( Number of Plots Across( number=1 ) ); 

 obj << Chart Options for Selected( Number of Plots Across( number=1 ) ); 

 obj << Chart Options Drift Graph( Number of Plots Across( number=1 ) )

**Description:** Specifies the layout for the charts. "1" by default.

**JMP Version Added:** 17

**Chart Options as Selected Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Number of Plots Across( 2 ) );

```

**Chart Options Drift Graph Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options Drift Graph( Number of Plots Across( 2 ) )
);

```

**Chart Options for Selected Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options for Selected( Number of Plots Across( 4 ) );

```

### Remove

**Syntax:** obj << Chart Options as Selected( Remove ); 

 obj << Chart Options for Selected( Remove ); 

 obj << Chart Options Drift Graph( Remove )

**Description:** Removes the charts from the report.

**JMP Version Added:** 14

**Chart Options as Selected Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Remove );

```

**Chart Options Drift Graph Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options Drift Graph( Remove );

```

**Chart Options for Selected Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options for Selected( Remove );

```

### Show Centerline

**Syntax:** obj << Chart Options as Selected( Show Centerline( state=0|1 ) ); 

 obj << Chart Options for Selected( Show Centerline( state=0|1 ) ); 

 obj << Chart Options Drift Graph( Show Centerline( state=0|1 ) )

**Description:** Shows or hides a solid green line for the average of the process. On by default.

**JMP Version Added:** 17

**Chart Options as Selected Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Show Centerline( 0 ) );

```

**Chart Options Drift Graph Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options Drift Graph( Show Centerline( 1 ) );

```

**Chart Options for Selected Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options for Selected( Show Centerline( 0 ) )
);
Wait( 1 );
obj << Chart Options for Selected( Show Centerline( 1 ) );

```

### Show Control Limits

**Syntax:** obj << Chart Options as Selected( Show Control Limits( state=0|1 ) ); 

 obj << Chart Options for Selected( Show Control Limits( state=0|1 ) ); 

 obj << Chart Options Drift Graph( Show Control Limits( state=0|1 ) )

**Description:** Shows or hides the upper and lower control limits. On by default.

**JMP Version Added:** 17

**Chart Options as Selected Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Show Control Limits( 0 ) );

```

**Chart Options Drift Graph Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options Drift Graph( Show Control Limits( 0 ) );

```

**Chart Options for Selected Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options for Selected( Show Control Limits( 0 ) )
);
Wait( 1 );
obj << Chart Options for Selected( Show Control Limits( 1 ) );

```

### Show Markers

**Syntax:** obj << Chart Options as Selected( Show Markers( state=0|1 ) ); 

 obj << Chart Options for Selected( Show Markers( state=0|1 ) ); 

 obj << Chart Options Drift Graph( Show Markers( state=0|1 ) )

**Description:** Shows or hides the individual points on the charts.

**Chart Options as Selected Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Show Markers( 0 ) );

```

**Chart Options Drift Graph Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),

);
Wait( 1 );
obj << Chart Options Drift Graph( Show Markers( 1 ) );

```

**Chart Options for Selected Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),

);
Wait( 1 );
obj << Chart Options for Selected( Show Markers( 1 ) );

```

### Show Spec Limits

**Syntax:** obj << Chart Options as Selected( Show Spec Limits( state=0|1 ) ); 

 obj << Chart Options for Selected( Show Spec Limits( state=0|1 ) ); 

 obj << Chart Options Drift Graph( Show Spec Limits( state=0|1 ) )

**Description:** Shows or hides the upper and lower specification limits as dotted blue lines.

**JMP Version Added:** 17

**Chart Options as Selected Example**

```

Names Default To Here( 1 );
dt1 = Open( "$SAMPLE_DATA/Cities.jmp" );
dt2 = Open( "$SAMPLE_DATA/CitySpecLimits.jmp" );
obj = dt1 << Process Screening(
	Y( :OZONE, :CO, :SO2, :NO ),
	Use Limits Table(
		1,
		dt2,
		Process Variables( :Column 1 ),
		LSL( :_LSL ),
		USL( :_USL ),
		Target( :_Target ),
		Go
	),
	Select All,
	Show Charts as Selected
);
Wait( 1 );
obj << Chart Options as Selected( Show Spec Limits( 1 ) );

```

**Chart Options Drift Graph Example**

```

Names Default To Here( 1 );
dt1 = Open( "$SAMPLE_DATA/Cities.jmp" );
dt2 = Open( "$SAMPLE_DATA/CitySpecLimits.jmp" );
obj = dt1 << Process Screening(
	Y( :OZONE, :CO, :SO2, :NO ),
	Use Limits Table(
		1,
		dt2,
		Process Variables( :Column 1 ),
		LSL( :_LSL ),
		USL( :_USL ),
		Target( :_Target ),
		Go
	),
	Drift Graph Selected( {:NO, :OZONE, :CO, :SO2} )
);
Wait( 1 );
obj << Chart Options Drift Graph( Show Spec Limits( 1 ) );

```

**Chart Options for Selected Example**

```

Names Default To Here( 1 );
dt1 = Open( "$SAMPLE_DATA/Cities.jmp" );
dt2 = Open( "$SAMPLE_DATA/CitySpecLimits.jmp" );
obj = dt1 << Process Screening(
	Y( :OZONE, :CO, :SO2, :NO ),
	Use Limits Table(
		1,
		dt2,
		Process Variables( :Column 1 ),
		LSL( :_LSL ),
		USL( :_USL ),
		Target( :_Target ),
		Go
	),
	Show Charts for Selected( {:NO, :OZONE, :CO, :SO2} )
);
Wait( 1 );
obj << Chart Options for Selected( Show Spec Limits( 1 ) );

```

### Show Zones

**Syntax:** obj << Chart Options as Selected( Show Zones( state=0|1 ) ); 

 obj << Chart Options for Selected( Show Zones( state=0|1 ) )

**Description:** Shows or hides the one and two standard deviation zones on the charts. This option is not available for Drift Graphs.

**JMP Version Added:** 17

**Chart Options as Selected Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Chart Options as Selected( Show Zones( 1 ) ),
	Select All
);

```

**Chart Options for Selected Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
obj << Chart Options for Selected( Show Zones( 1 ) );

```

### V Axis Label

**Syntax:** obj << Chart Options as Selected( V Axis Label( state=0|1 ) ); 

 obj << Chart Options for Selected( V Axis Label( state=0|1 ) ); 

 obj << Chart Options Drift Graph( V Axis Label( state=0|1 ) )

**Description:** Shows or hides the vertical axis label on each chart. On by default.

**JMP Version Added:** 17

**Chart Options as Selected Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Chart Options as Selected( V Axis Label( 0 ) ),
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( V Axis Label( 1 ) );

```

**Chart Options Drift Graph Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options Drift Graph( V Axis Label( 1 ) );

```

**Chart Options for Selected Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options for Selected( V Axis Label( 0 ) )
);
Wait( 1 );
obj << Chart Options for Selected( V Axis Label( 1 ) );

```

## Chart Options Graphlet

### Circle Alarm Points

**Syntax:** obj << Chart Options as Selected( Circle Alarm Points( state=0|1 ) ); 

 obj << Chart Options for Selected( Circle Alarm Points( state=0|1 ) )

**Description:** Shows or hides red circles around points that are in an alarm state. The corresponding alarm code is shown next to each circled point. This option is not available for Drift Graphs. On by default.

**JMP Version Added:** 17

**Chart Options as Selected Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All,
	Chart Options as Selected( Circle Alarm Points( 0 ) )
);
Wait( 1 );
obj << Chart Options as Selected( Circle Alarm Points( 1 ) );

```

**Chart Options for Selected Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),

);
Wait( 1 );
obj << Chart Options for Selected( Circle Alarm Points( 1 ) );

```

### Connect Points

**Syntax:** obj << Chart Options as Selected( Connect Points( state=0|1 ) ); 

 obj << Chart Options for Selected( Connect Points( state=0|1 ) ); 

 obj << Chart Options Drift Graph( Connect Points( state=0|1 ) )

**Description:** Shows or hides lines that connect the points. On by default.

**JMP Version Added:** 17

**Chart Options as Selected Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Connect Points( 0 ) );

```

**Chart Options Drift Graph Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options Drift Graph( Show Markers( 1 ) )
);
Wait( 1 );
obj << Chart Options Drift Graph( Connect Points( 0 ) );

```

**Chart Options for Selected Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options for Selected( Show Markers( 1 ) )
);
Wait( 1 );
obj << Chart Options for Selected( Connect Points( 0 ) );

```

### Dispersion Chart

**Syntax:** obj << Chart Options as Selected( Dispersion Chart( state=0|1 ) ); 

 obj << Chart Options for Selected( Dispersion Chart( state=0|1 ) )

**Description:** Shows or hides a range, standard deviation, or moving range chart in addition to the control chart for each process. This option is not available for Drift Graphs.

**JMP Version Added:** 17

**Chart Options as Selected Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Dispersion Chart( 1 ) );

```

**Chart Options for Selected Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),

);
Wait( 1 );
obj << Chart Options for Selected( Dispersion Chart( 1 ) );

```

### Frame Size

**Syntax:** obj << Chart Options as Selected( Frame Size( width=500, height=170 ) ); 

 obj << Chart Options for Selected( Frame Size( width=500, height=170 ) ); 

 obj << Chart Options Drift Graph( Frame Size( width=500, height=170 ) )

**Description:** Sets the size of the graph. "500,170" by default.

**JMP Version Added:** 17

**Chart Options as Selected Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Frame Size( 500, 400 ) );

```

**Chart Options Drift Graph Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options Drift Graph( Frame Size( 600, 200 ) )
);

```

**Chart Options for Selected Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options for Selected( Frame Size( 300, 100 ) );

```

### Number of Plots Across

**Syntax:** obj << Chart Options as Selected( Number of Plots Across( number=1 ) ); 

 obj << Chart Options for Selected( Number of Plots Across( number=1 ) ); 

 obj << Chart Options Drift Graph( Number of Plots Across( number=1 ) )

**Description:** Specifies the layout for the charts. "1" by default.

**JMP Version Added:** 17

**Chart Options as Selected Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Number of Plots Across( 2 ) );

```

**Chart Options Drift Graph Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options Drift Graph( Number of Plots Across( 2 ) )
);

```

**Chart Options for Selected Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options for Selected( Number of Plots Across( 4 ) );

```

### Remove

**Syntax:** obj << Chart Options as Selected( Remove ); 

 obj << Chart Options for Selected( Remove ); 

 obj << Chart Options Drift Graph( Remove )

**Description:** Removes the charts from the report.

**JMP Version Added:** 14

**Chart Options as Selected Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Remove );

```

**Chart Options Drift Graph Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options Drift Graph( Remove );

```

**Chart Options for Selected Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options for Selected( Remove );

```

### Show Centerline

**Syntax:** obj << Chart Options as Selected( Show Centerline( state=0|1 ) ); 

 obj << Chart Options for Selected( Show Centerline( state=0|1 ) ); 

 obj << Chart Options Drift Graph( Show Centerline( state=0|1 ) )

**Description:** Shows or hides a solid green line for the average of the process. On by default.

**JMP Version Added:** 17

**Chart Options as Selected Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Show Centerline( 0 ) );

```

**Chart Options Drift Graph Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options Drift Graph( Show Centerline( 1 ) );

```

**Chart Options for Selected Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options for Selected( Show Centerline( 0 ) )
);
Wait( 1 );
obj << Chart Options for Selected( Show Centerline( 1 ) );

```

### Show Control Limits

**Syntax:** obj << Chart Options as Selected( Show Control Limits( state=0|1 ) ); 

 obj << Chart Options for Selected( Show Control Limits( state=0|1 ) ); 

 obj << Chart Options Drift Graph( Show Control Limits( state=0|1 ) )

**Description:** Shows or hides the upper and lower control limits. On by default.

**JMP Version Added:** 17

**Chart Options as Selected Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Show Control Limits( 0 ) );

```

**Chart Options Drift Graph Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options Drift Graph( Show Control Limits( 0 ) );

```

**Chart Options for Selected Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options for Selected( Show Control Limits( 0 ) )
);
Wait( 1 );
obj << Chart Options for Selected( Show Control Limits( 1 ) );

```

### Show Markers

**Syntax:** obj << Chart Options as Selected( Show Markers( state=0|1 ) ); 

 obj << Chart Options for Selected( Show Markers( state=0|1 ) ); 

 obj << Chart Options Drift Graph( Show Markers( state=0|1 ) )

**Description:** Shows or hides the individual points on the charts.

**Chart Options as Selected Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Show Markers( 0 ) );

```

**Chart Options Drift Graph Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),

);
Wait( 1 );
obj << Chart Options Drift Graph( Show Markers( 1 ) );

```

**Chart Options for Selected Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),

);
Wait( 1 );
obj << Chart Options for Selected( Show Markers( 1 ) );

```

### Show Spec Limits

**Syntax:** obj << Chart Options as Selected( Show Spec Limits( state=0|1 ) ); 

 obj << Chart Options for Selected( Show Spec Limits( state=0|1 ) ); 

 obj << Chart Options Drift Graph( Show Spec Limits( state=0|1 ) )

**Description:** Shows or hides the upper and lower specification limits as dotted blue lines.

**JMP Version Added:** 17

**Chart Options as Selected Example**

```

Names Default To Here( 1 );
dt1 = Open( "$SAMPLE_DATA/Cities.jmp" );
dt2 = Open( "$SAMPLE_DATA/CitySpecLimits.jmp" );
obj = dt1 << Process Screening(
	Y( :OZONE, :CO, :SO2, :NO ),
	Use Limits Table(
		1,
		dt2,
		Process Variables( :Column 1 ),
		LSL( :_LSL ),
		USL( :_USL ),
		Target( :_Target ),
		Go
	),
	Select All,
	Show Charts as Selected
);
Wait( 1 );
obj << Chart Options as Selected( Show Spec Limits( 1 ) );

```

**Chart Options Drift Graph Example**

```

Names Default To Here( 1 );
dt1 = Open( "$SAMPLE_DATA/Cities.jmp" );
dt2 = Open( "$SAMPLE_DATA/CitySpecLimits.jmp" );
obj = dt1 << Process Screening(
	Y( :OZONE, :CO, :SO2, :NO ),
	Use Limits Table(
		1,
		dt2,
		Process Variables( :Column 1 ),
		LSL( :_LSL ),
		USL( :_USL ),
		Target( :_Target ),
		Go
	),
	Drift Graph Selected( {:NO, :OZONE, :CO, :SO2} )
);
Wait( 1 );
obj << Chart Options Drift Graph( Show Spec Limits( 1 ) );

```

**Chart Options for Selected Example**

```

Names Default To Here( 1 );
dt1 = Open( "$SAMPLE_DATA/Cities.jmp" );
dt2 = Open( "$SAMPLE_DATA/CitySpecLimits.jmp" );
obj = dt1 << Process Screening(
	Y( :OZONE, :CO, :SO2, :NO ),
	Use Limits Table(
		1,
		dt2,
		Process Variables( :Column 1 ),
		LSL( :_LSL ),
		USL( :_USL ),
		Target( :_Target ),
		Go
	),
	Show Charts for Selected( {:NO, :OZONE, :CO, :SO2} )
);
Wait( 1 );
obj << Chart Options for Selected( Show Spec Limits( 1 ) );

```

### Show Zones

**Syntax:** obj << Chart Options as Selected( Show Zones( state=0|1 ) ); 

 obj << Chart Options for Selected( Show Zones( state=0|1 ) )

**Description:** Shows or hides the one and two standard deviation zones on the charts. This option is not available for Drift Graphs.

**JMP Version Added:** 17

**Chart Options as Selected Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Chart Options as Selected( Show Zones( 1 ) ),
	Select All
);

```

**Chart Options for Selected Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
obj << Chart Options for Selected( Show Zones( 1 ) );

```

### V Axis Label

**Syntax:** obj << Chart Options as Selected( V Axis Label( state=0|1 ) ); 

 obj << Chart Options for Selected( V Axis Label( state=0|1 ) ); 

 obj << Chart Options Drift Graph( V Axis Label( state=0|1 ) )

**Description:** Shows or hides the vertical axis label on each chart. On by default.

**JMP Version Added:** 17

**Chart Options as Selected Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Chart Options as Selected( V Axis Label( 0 ) ),
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( V Axis Label( 1 ) );

```

**Chart Options Drift Graph Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options Drift Graph( V Axis Label( 1 ) );

```

**Chart Options for Selected Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options for Selected( V Axis Label( 0 ) )
);
Wait( 1 );
obj << Chart Options for Selected( V Axis Label( 1 ) );

```

## Chart Options as Selected

### Circle Alarm Points

**Syntax:** obj << Chart Options as Selected( Circle Alarm Points( state=0|1 ) ); 

 obj << Chart Options for Selected( Circle Alarm Points( state=0|1 ) )

**Description:** Shows or hides red circles around points that are in an alarm state. The corresponding alarm code is shown next to each circled point. This option is not available for Drift Graphs. On by default.

**JMP Version Added:** 17

**Chart Options as Selected Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All,
	Chart Options as Selected( Circle Alarm Points( 0 ) )
);
Wait( 1 );
obj << Chart Options as Selected( Circle Alarm Points( 1 ) );

```

**Chart Options for Selected Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),

);
Wait( 1 );
obj << Chart Options for Selected( Circle Alarm Points( 1 ) );

```

### Connect Points

**Syntax:** obj << Chart Options as Selected( Connect Points( state=0|1 ) ); 

 obj << Chart Options for Selected( Connect Points( state=0|1 ) ); 

 obj << Chart Options Drift Graph( Connect Points( state=0|1 ) )

**Description:** Shows or hides lines that connect the points. On by default.

**JMP Version Added:** 17

**Chart Options as Selected Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Connect Points( 0 ) );

```

**Chart Options Drift Graph Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options Drift Graph( Show Markers( 1 ) )
);
Wait( 1 );
obj << Chart Options Drift Graph( Connect Points( 0 ) );

```

**Chart Options for Selected Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options for Selected( Show Markers( 1 ) )
);
Wait( 1 );
obj << Chart Options for Selected( Connect Points( 0 ) );

```

### Dispersion Chart

**Syntax:** obj << Chart Options as Selected( Dispersion Chart( state=0|1 ) ); 

 obj << Chart Options for Selected( Dispersion Chart( state=0|1 ) )

**Description:** Shows or hides a range, standard deviation, or moving range chart in addition to the control chart for each process. This option is not available for Drift Graphs.

**JMP Version Added:** 17

**Chart Options as Selected Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Dispersion Chart( 1 ) );

```

**Chart Options for Selected Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),

);
Wait( 1 );
obj << Chart Options for Selected( Dispersion Chart( 1 ) );

```

### Frame Size

**Syntax:** obj << Chart Options as Selected( Frame Size( width=500, height=170 ) ); 

 obj << Chart Options for Selected( Frame Size( width=500, height=170 ) ); 

 obj << Chart Options Drift Graph( Frame Size( width=500, height=170 ) )

**Description:** Sets the size of the graph. "500,170" by default.

**JMP Version Added:** 17

**Chart Options as Selected Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Frame Size( 500, 400 ) );

```

**Chart Options Drift Graph Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options Drift Graph( Frame Size( 600, 200 ) )
);

```

**Chart Options for Selected Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options for Selected( Frame Size( 300, 100 ) );

```

### Number of Plots Across

**Syntax:** obj << Chart Options as Selected( Number of Plots Across( number=1 ) ); 

 obj << Chart Options for Selected( Number of Plots Across( number=1 ) ); 

 obj << Chart Options Drift Graph( Number of Plots Across( number=1 ) )

**Description:** Specifies the layout for the charts. "1" by default.

**JMP Version Added:** 17

**Chart Options as Selected Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Number of Plots Across( 2 ) );

```

**Chart Options Drift Graph Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options Drift Graph( Number of Plots Across( 2 ) )
);

```

**Chart Options for Selected Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options for Selected( Number of Plots Across( 4 ) );

```

### Remove

**Syntax:** obj << Chart Options as Selected( Remove ); 

 obj << Chart Options for Selected( Remove ); 

 obj << Chart Options Drift Graph( Remove )

**Description:** Removes the charts from the report.

**JMP Version Added:** 14

**Chart Options as Selected Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Remove );

```

**Chart Options Drift Graph Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options Drift Graph( Remove );

```

**Chart Options for Selected Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options for Selected( Remove );

```

### Show Centerline

**Syntax:** obj << Chart Options as Selected( Show Centerline( state=0|1 ) ); 

 obj << Chart Options for Selected( Show Centerline( state=0|1 ) ); 

 obj << Chart Options Drift Graph( Show Centerline( state=0|1 ) )

**Description:** Shows or hides a solid green line for the average of the process. On by default.

**JMP Version Added:** 17

**Chart Options as Selected Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Show Centerline( 0 ) );

```

**Chart Options Drift Graph Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options Drift Graph( Show Centerline( 1 ) );

```

**Chart Options for Selected Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options for Selected( Show Centerline( 0 ) )
);
Wait( 1 );
obj << Chart Options for Selected( Show Centerline( 1 ) );

```

### Show Control Limits

**Syntax:** obj << Chart Options as Selected( Show Control Limits( state=0|1 ) ); 

 obj << Chart Options for Selected( Show Control Limits( state=0|1 ) ); 

 obj << Chart Options Drift Graph( Show Control Limits( state=0|1 ) )

**Description:** Shows or hides the upper and lower control limits. On by default.

**JMP Version Added:** 17

**Chart Options as Selected Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Show Control Limits( 0 ) );

```

**Chart Options Drift Graph Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options Drift Graph( Show Control Limits( 0 ) );

```

**Chart Options for Selected Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options for Selected( Show Control Limits( 0 ) )
);
Wait( 1 );
obj << Chart Options for Selected( Show Control Limits( 1 ) );

```

### Show Markers

**Syntax:** obj << Chart Options as Selected( Show Markers( state=0|1 ) ); 

 obj << Chart Options for Selected( Show Markers( state=0|1 ) ); 

 obj << Chart Options Drift Graph( Show Markers( state=0|1 ) )

**Description:** Shows or hides the individual points on the charts.

**Chart Options as Selected Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Show Markers( 0 ) );

```

**Chart Options Drift Graph Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),

);
Wait( 1 );
obj << Chart Options Drift Graph( Show Markers( 1 ) );

```

**Chart Options for Selected Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),

);
Wait( 1 );
obj << Chart Options for Selected( Show Markers( 1 ) );

```

### Show Spec Limits

**Syntax:** obj << Chart Options as Selected( Show Spec Limits( state=0|1 ) ); 

 obj << Chart Options for Selected( Show Spec Limits( state=0|1 ) ); 

 obj << Chart Options Drift Graph( Show Spec Limits( state=0|1 ) )

**Description:** Shows or hides the upper and lower specification limits as dotted blue lines.

**JMP Version Added:** 17

**Chart Options as Selected Example**

```

Names Default To Here( 1 );
dt1 = Open( "$SAMPLE_DATA/Cities.jmp" );
dt2 = Open( "$SAMPLE_DATA/CitySpecLimits.jmp" );
obj = dt1 << Process Screening(
	Y( :OZONE, :CO, :SO2, :NO ),
	Use Limits Table(
		1,
		dt2,
		Process Variables( :Column 1 ),
		LSL( :_LSL ),
		USL( :_USL ),
		Target( :_Target ),
		Go
	),
	Select All,
	Show Charts as Selected
);
Wait( 1 );
obj << Chart Options as Selected( Show Spec Limits( 1 ) );

```

**Chart Options Drift Graph Example**

```

Names Default To Here( 1 );
dt1 = Open( "$SAMPLE_DATA/Cities.jmp" );
dt2 = Open( "$SAMPLE_DATA/CitySpecLimits.jmp" );
obj = dt1 << Process Screening(
	Y( :OZONE, :CO, :SO2, :NO ),
	Use Limits Table(
		1,
		dt2,
		Process Variables( :Column 1 ),
		LSL( :_LSL ),
		USL( :_USL ),
		Target( :_Target ),
		Go
	),
	Drift Graph Selected( {:NO, :OZONE, :CO, :SO2} )
);
Wait( 1 );
obj << Chart Options Drift Graph( Show Spec Limits( 1 ) );

```

**Chart Options for Selected Example**

```

Names Default To Here( 1 );
dt1 = Open( "$SAMPLE_DATA/Cities.jmp" );
dt2 = Open( "$SAMPLE_DATA/CitySpecLimits.jmp" );
obj = dt1 << Process Screening(
	Y( :OZONE, :CO, :SO2, :NO ),
	Use Limits Table(
		1,
		dt2,
		Process Variables( :Column 1 ),
		LSL( :_LSL ),
		USL( :_USL ),
		Target( :_Target ),
		Go
	),
	Show Charts for Selected( {:NO, :OZONE, :CO, :SO2} )
);
Wait( 1 );
obj << Chart Options for Selected( Show Spec Limits( 1 ) );

```

### Show Zones

**Syntax:** obj << Chart Options as Selected( Show Zones( state=0|1 ) ); 

 obj << Chart Options for Selected( Show Zones( state=0|1 ) )

**Description:** Shows or hides the one and two standard deviation zones on the charts. This option is not available for Drift Graphs.

**JMP Version Added:** 17

**Chart Options as Selected Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Chart Options as Selected( Show Zones( 1 ) ),
	Select All
);

```

**Chart Options for Selected Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
obj << Chart Options for Selected( Show Zones( 1 ) );

```

### V Axis Label

**Syntax:** obj << Chart Options as Selected( V Axis Label( state=0|1 ) ); 

 obj << Chart Options for Selected( V Axis Label( state=0|1 ) ); 

 obj << Chart Options Drift Graph( V Axis Label( state=0|1 ) )

**Description:** Shows or hides the vertical axis label on each chart. On by default.

**JMP Version Added:** 17

**Chart Options as Selected Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Chart Options as Selected( V Axis Label( 0 ) ),
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( V Axis Label( 1 ) );

```

**Chart Options Drift Graph Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options Drift Graph( V Axis Label( 1 ) );

```

**Chart Options for Selected Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options for Selected( V Axis Label( 0 ) )
);
Wait( 1 );
obj << Chart Options for Selected( V Axis Label( 1 ) );

```

## Chart Options for Selected

### Circle Alarm Points

**Syntax:** obj << Chart Options as Selected( Circle Alarm Points( state=0|1 ) ); 

 obj << Chart Options for Selected( Circle Alarm Points( state=0|1 ) )

**Description:** Shows or hides red circles around points that are in an alarm state. The corresponding alarm code is shown next to each circled point. This option is not available for Drift Graphs. On by default.

**JMP Version Added:** 17

**Chart Options as Selected Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All,
	Chart Options as Selected( Circle Alarm Points( 0 ) )
);
Wait( 1 );
obj << Chart Options as Selected( Circle Alarm Points( 1 ) );

```

**Chart Options for Selected Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),

);
Wait( 1 );
obj << Chart Options for Selected( Circle Alarm Points( 1 ) );

```

### Connect Points

**Syntax:** obj << Chart Options as Selected( Connect Points( state=0|1 ) ); 

 obj << Chart Options for Selected( Connect Points( state=0|1 ) ); 

 obj << Chart Options Drift Graph( Connect Points( state=0|1 ) )

**Description:** Shows or hides lines that connect the points. On by default.

**JMP Version Added:** 17

**Chart Options as Selected Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Connect Points( 0 ) );

```

**Chart Options Drift Graph Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options Drift Graph( Show Markers( 1 ) )
);
Wait( 1 );
obj << Chart Options Drift Graph( Connect Points( 0 ) );

```

**Chart Options for Selected Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options for Selected( Show Markers( 1 ) )
);
Wait( 1 );
obj << Chart Options for Selected( Connect Points( 0 ) );

```

### Dispersion Chart

**Syntax:** obj << Chart Options as Selected( Dispersion Chart( state=0|1 ) ); 

 obj << Chart Options for Selected( Dispersion Chart( state=0|1 ) )

**Description:** Shows or hides a range, standard deviation, or moving range chart in addition to the control chart for each process. This option is not available for Drift Graphs.

**JMP Version Added:** 17

**Chart Options as Selected Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Dispersion Chart( 1 ) );

```

**Chart Options for Selected Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),

);
Wait( 1 );
obj << Chart Options for Selected( Dispersion Chart( 1 ) );

```

### Frame Size

**Syntax:** obj << Chart Options as Selected( Frame Size( width=500, height=170 ) ); 

 obj << Chart Options for Selected( Frame Size( width=500, height=170 ) ); 

 obj << Chart Options Drift Graph( Frame Size( width=500, height=170 ) )

**Description:** Sets the size of the graph. "500,170" by default.

**JMP Version Added:** 17

**Chart Options as Selected Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Frame Size( 500, 400 ) );

```

**Chart Options Drift Graph Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options Drift Graph( Frame Size( 600, 200 ) )
);

```

**Chart Options for Selected Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options for Selected( Frame Size( 300, 100 ) );

```

### Number of Plots Across

**Syntax:** obj << Chart Options as Selected( Number of Plots Across( number=1 ) ); 

 obj << Chart Options for Selected( Number of Plots Across( number=1 ) ); 

 obj << Chart Options Drift Graph( Number of Plots Across( number=1 ) )

**Description:** Specifies the layout for the charts. "1" by default.

**JMP Version Added:** 17

**Chart Options as Selected Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Number of Plots Across( 2 ) );

```

**Chart Options Drift Graph Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options Drift Graph( Number of Plots Across( 2 ) )
);

```

**Chart Options for Selected Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options for Selected( Number of Plots Across( 4 ) );

```

### Remove

**Syntax:** obj << Chart Options as Selected( Remove ); 

 obj << Chart Options for Selected( Remove ); 

 obj << Chart Options Drift Graph( Remove )

**Description:** Removes the charts from the report.

**JMP Version Added:** 14

**Chart Options as Selected Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Remove );

```

**Chart Options Drift Graph Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options Drift Graph( Remove );

```

**Chart Options for Selected Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options for Selected( Remove );

```

### Show Centerline

**Syntax:** obj << Chart Options as Selected( Show Centerline( state=0|1 ) ); 

 obj << Chart Options for Selected( Show Centerline( state=0|1 ) ); 

 obj << Chart Options Drift Graph( Show Centerline( state=0|1 ) )

**Description:** Shows or hides a solid green line for the average of the process. On by default.

**JMP Version Added:** 17

**Chart Options as Selected Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Show Centerline( 0 ) );

```

**Chart Options Drift Graph Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options Drift Graph( Show Centerline( 1 ) );

```

**Chart Options for Selected Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options for Selected( Show Centerline( 0 ) )
);
Wait( 1 );
obj << Chart Options for Selected( Show Centerline( 1 ) );

```

### Show Control Limits

**Syntax:** obj << Chart Options as Selected( Show Control Limits( state=0|1 ) ); 

 obj << Chart Options for Selected( Show Control Limits( state=0|1 ) ); 

 obj << Chart Options Drift Graph( Show Control Limits( state=0|1 ) )

**Description:** Shows or hides the upper and lower control limits. On by default.

**JMP Version Added:** 17

**Chart Options as Selected Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Show Control Limits( 0 ) );

```

**Chart Options Drift Graph Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options Drift Graph( Show Control Limits( 0 ) );

```

**Chart Options for Selected Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options for Selected( Show Control Limits( 0 ) )
);
Wait( 1 );
obj << Chart Options for Selected( Show Control Limits( 1 ) );

```

### Show Markers

**Syntax:** obj << Chart Options as Selected( Show Markers( state=0|1 ) ); 

 obj << Chart Options for Selected( Show Markers( state=0|1 ) ); 

 obj << Chart Options Drift Graph( Show Markers( state=0|1 ) )

**Description:** Shows or hides the individual points on the charts.

**Chart Options as Selected Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Show Markers( 0 ) );

```

**Chart Options Drift Graph Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),

);
Wait( 1 );
obj << Chart Options Drift Graph( Show Markers( 1 ) );

```

**Chart Options for Selected Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),

);
Wait( 1 );
obj << Chart Options for Selected( Show Markers( 1 ) );

```

### Show Spec Limits

**Syntax:** obj << Chart Options as Selected( Show Spec Limits( state=0|1 ) ); 

 obj << Chart Options for Selected( Show Spec Limits( state=0|1 ) ); 

 obj << Chart Options Drift Graph( Show Spec Limits( state=0|1 ) )

**Description:** Shows or hides the upper and lower specification limits as dotted blue lines.

**JMP Version Added:** 17

**Chart Options as Selected Example**

```

Names Default To Here( 1 );
dt1 = Open( "$SAMPLE_DATA/Cities.jmp" );
dt2 = Open( "$SAMPLE_DATA/CitySpecLimits.jmp" );
obj = dt1 << Process Screening(
	Y( :OZONE, :CO, :SO2, :NO ),
	Use Limits Table(
		1,
		dt2,
		Process Variables( :Column 1 ),
		LSL( :_LSL ),
		USL( :_USL ),
		Target( :_Target ),
		Go
	),
	Select All,
	Show Charts as Selected
);
Wait( 1 );
obj << Chart Options as Selected( Show Spec Limits( 1 ) );

```

**Chart Options Drift Graph Example**

```

Names Default To Here( 1 );
dt1 = Open( "$SAMPLE_DATA/Cities.jmp" );
dt2 = Open( "$SAMPLE_DATA/CitySpecLimits.jmp" );
obj = dt1 << Process Screening(
	Y( :OZONE, :CO, :SO2, :NO ),
	Use Limits Table(
		1,
		dt2,
		Process Variables( :Column 1 ),
		LSL( :_LSL ),
		USL( :_USL ),
		Target( :_Target ),
		Go
	),
	Drift Graph Selected( {:NO, :OZONE, :CO, :SO2} )
);
Wait( 1 );
obj << Chart Options Drift Graph( Show Spec Limits( 1 ) );

```

**Chart Options for Selected Example**

```

Names Default To Here( 1 );
dt1 = Open( "$SAMPLE_DATA/Cities.jmp" );
dt2 = Open( "$SAMPLE_DATA/CitySpecLimits.jmp" );
obj = dt1 << Process Screening(
	Y( :OZONE, :CO, :SO2, :NO ),
	Use Limits Table(
		1,
		dt2,
		Process Variables( :Column 1 ),
		LSL( :_LSL ),
		USL( :_USL ),
		Target( :_Target ),
		Go
	),
	Show Charts for Selected( {:NO, :OZONE, :CO, :SO2} )
);
Wait( 1 );
obj << Chart Options for Selected( Show Spec Limits( 1 ) );

```

### Show Zones

**Syntax:** obj << Chart Options as Selected( Show Zones( state=0|1 ) ); 

 obj << Chart Options for Selected( Show Zones( state=0|1 ) )

**Description:** Shows or hides the one and two standard deviation zones on the charts. This option is not available for Drift Graphs.

**JMP Version Added:** 17

**Chart Options as Selected Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Chart Options as Selected( Show Zones( 1 ) ),
	Select All
);

```

**Chart Options for Selected Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
obj << Chart Options for Selected( Show Zones( 1 ) );

```

### V Axis Label

**Syntax:** obj << Chart Options as Selected( V Axis Label( state=0|1 ) ); 

 obj << Chart Options for Selected( V Axis Label( state=0|1 ) ); 

 obj << Chart Options Drift Graph( V Axis Label( state=0|1 ) )

**Description:** Shows or hides the vertical axis label on each chart. On by default.

**JMP Version Added:** 17

**Chart Options as Selected Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Chart Options as Selected( V Axis Label( 0 ) ),
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( V Axis Label( 1 ) );

```

**Chart Options Drift Graph Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options Drift Graph( V Axis Label( 1 ) );

```

**Chart Options for Selected Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options for Selected( V Axis Label( 0 ) )
);
Wait( 1 );
obj << Chart Options for Selected( V Axis Label( 1 ) );

```

### Action

**Syntax:** obj << Action

**Description:** All-purpose trapdoor within a platform to insert expressions to evaluate. Temporarily sets the DisplayBox and DataTable contexts to the Platform.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

### Action Lower Quantile Prob

**Syntax:** obj = Process Screening(...Action Lower Quantile Prob( number=. )...)

**Description:** Specifies a probability that determines the value for the Action Limit. For count processes, if the Action Limit is not specified in the limits table, it is set from the estimated quantile based on this probability. "." by default.

**JMP Version Added:** 19

```

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Quality Control/Environmental Monitor Sim.jmp" );
obj = dt << Process Screening(
	Process Variables( :Count ),
	Grouping( :Type, :Grade, :Site ),
	Control Chart Type( "Count" ),
	Time( :Time ),
	Alert Lower Quantile Prob( 0.05 ),
	Action Lower Quantile Prob( 0.01 )
);

```

### Action Upper Quantile Prob

**Syntax:** obj = Process Screening(...Action Upper Quantile Prob( number=0.9985 )...)

**Description:** Specifies a probability that determines the value for the Action Limit. For count processes, if the Action Limit is not specified in the limits table, it is set from the estimated quantile based on this probability. "0.9985" by default.

**JMP Version Added:** 19

```

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Quality Control/Environmental Monitor Sim.jmp" );
obj = dt << Process Screening(
	Process Variables( :Count ),
	Grouping( :Type, :Grade, :Site ),
	Control Chart Type( "Count" ),
	Time( :Time ),
	Alert Upper Quantile Prob( 0.95 ),
	Action Upper Quantile Prob( 0.99 )
);

```

### Alarm Graph

**Syntax:** obj << Alarm Graph( state=0|1 )

**Description:** Shows or hides a plot of alarms, with the processes that have alarms on the Y axis, and the time occurrence on the X axis.

**JMP Version Added:** 19

```

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Quality Control/Environmental Monitor Sim.jmp" );
obj = dt << Process Screening(
	Process Variables( :Count ),
	Grouping( :Type, :Grade, :Site ),
	Control Chart Type( "Count" ),
	Time( :Time ),
	Alarm Graph( 1 )
);

```

### Alert Lower Quantile Prob

**Syntax:** obj = Process Screening(...Alert Lower Quantile Prob( number=. )...)

**Description:** Specifies a probability that determines the value for the Alert Limit. For count processes, if the Alert Limit is not specified in the limits table, it is set from the estimated quantile based on this probability. "." by default.

**JMP Version Added:** 19

```

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Quality Control/Environmental Monitor Sim.jmp" );
obj = dt << Process Screening(
	Process Variables( :Count ),
	Grouping( :Type, :Grade, :Site ),
	Control Chart Type( "Count" ),
	Time( :Time ),
	Alert Lower Quantile Prob( 0.05 ),
	Action Lower Quantile Prob( 0.01 )
);

```

### Alert Upper Quantile Prob

**Syntax:** obj = Process Screening(...Alert Upper Quantile Prob( number=0.975 )...)

**Description:** Specifies a probability that determines the value for the Alert Limit. For count processes, if the Alert Limit is not specified in the limits table, it is set from the estimated quantile based on this probability. "0.975" by default.

**JMP Version Added:** 19

```

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Quality Control/Environmental Monitor Sim.jmp" );
obj = dt << Process Screening(
	Process Variables( :Count ),
	Grouping( :Type, :Grade, :Site ),
	Control Chart Type( "Count" ),
	Time( :Time ),
	Alert Upper Quantile Prob( 0.95 ),
	Action Upper Quantile Prob( 0.99 )
);

```

### Apply Preset

**Syntax:** Apply Preset( preset ); Apply Preset( source, label, <Folder( folder {, folder2, ...} )> )

**Description:** Apply a previously created preset to the object, updating the options and customizations to match the saved settings.

**JMP Version Added:** 18

**Anonymous preset**

```

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

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

**Search within folder(s)**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

### Automatic Recalc

**Syntax:** obj << Automatic Recalc( state=0|1 )

**Description:** Redoes the analysis automatically for exclude and data changes. If the Automatic Recalc option is turned on, you should consider using Wait(0) commands to ensure that the exclude and data changes take effect before the recalculation.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Grouping( :Site ), Process Variables( Eval( 5 :: 132 ) ) );
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

### Broadcast

**Syntax:** obj << Broadcast(message)

**Description:** Broadcasts a message to a platform. If return results from individual objects are tables, they are concatenated if possible, and the final format is identical to either the result from the Save Combined Table option in a Table Box or the result from the Concatenate option using a Source column. Other than those, results are stored in a list and returned.

**JMP Version Added:** 18

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
objs = Control Chart Builder(
	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),
	By( :OPERATOR )
);
objs[1] << Broadcast( Save Summaries );

```

### By

**Syntax:** obj = Process Screening(...<By( column(s) )>...)

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Process Screening(
	Grouping( :Site ),
	Process Variables( Eval( 5 :: 132 ) ),
	By( _bycol )
);

```

### Chart Options Drift Graph

**Syntax:** obj << Chart Options Drift Graph( options )

**Description:** Enables you to script additional options for the charts that are produced by the Drift Graph Selected option.

**JMP Version Added:** 17

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Select All,
	Drift Graph Selected
);
Wait( 1 );
obj << Chart Options Drift Graph( Show Markers( 1 ), Connect Points( 0 ) );

```

### Chart Options Graphlet

**Syntax:** obj << Chart Options Graphlet( options )

**Description:** Enables you to script additional options for graphlets.

**JMP Version Added:** 17

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening(
	Process Variables( :NPN1, :PNP1, :PNP2, :NPN2, :PNP3 ),
	Subgroup( :lot_id, :wafer ),
	Control Chart Type( "XBar and R" ),
	Process Performance Graph( 1 ),
	Chart Options Graphlet( Show Markers( 1 ) ),
	SendToReport(
		Dispatch( {"Process Performance Graph"}, "ProcessScreening Graph", FrameBox,
			Add Pin Annotation(
				Seg( Marker Seg( 1 ) ),
				Index( 4 ),
				Index Row( 4 ),
				UniqueID( 4 ),
				FoundPt( {320, 564} ),
				Origin( {1, 0.24} ),
				RightOfCenter( 0 ),
				Tag Line( 1 )
			)
		)
	)
);

```

### Chart Options as Selected

**Syntax:** obj << Chart Options as Selected( options )

**Description:** Enables you to script additional options for the charts that are produced by the Show Charts as Selected option.

**JMP Version Added:** 17

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Select All,
	Show Charts as Selected
);
Wait( 1 );
obj << Chart Options as Selected( Show Markers( 0 ) );

```

### Chart Options for Selected

**Syntax:** obj << Chart Options for Selected( options )

**Description:** Enables you to script additional options for the charts that are produced by the Show Charts for Selected option.

**JMP Version Added:** 17

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Select All,
	Show Charts for Selected
);
Wait( 1 );
obj << Chart Options for Selected( Show Markers( 1 ) );

```

### Color Out of Spec Values

**Syntax:** obj << Color Out of Spec Values

**Description:** Colors values in the data table based on the specification limits. Blue indicates that the value is below the lower specification limit. Red indicates that the value is above the upper specification limit.

**JMP Version Added:** 16

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Y( :PNP3, :IVP1, :IVP2 ) );
obj << Color Out of Spec Values;

```

### Color Selected Items

**Syntax:** obj << Color Selected Items( color )

**Description:** Applies the specified color to the selected rows in the summary table.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening(
	Y( :NPN1, :PNP1, :PNP2, :NPN2 ),
	Find and Select( "PNP1" ),
	Color Selected Items( "Blue" )
);
obj << Find and Select( "NPN1" );
obj << Color Selected Items( "Red" );
obj << Find and Select( "NPN2" );

```

### Column Switcher

**Syntax:** obj << Column Switcher(column reference, {column reference, ...}, < Title(title) >, < Close Outline(0|1) >, < Retain Axis Settings(0|1) >, < Layout(0|1) >)

**Description:** Adds a control panel for changing the platform&apos;s variables

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);

```

### Control Chart Builder

**Syntax:** obj << Control Chart Builder

**Description:** Opens a Control Chart Builder report window for the processes that you selected in the summary table.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Select All,
	Control Chart Builder
);

```

### Control Chart Type

**Syntax:** obj = Process Screening(...Control Chart Type( "Indiv and MR"|"XBar and R"|"XBar and S"|"XBar MR and R"|"XBar MR and S"|"Count"|"Nonnegative Continuous"|"Proportion" )...)

**Description:** Specifies one of five types of control chart calculations. "Indiv and MR" by default.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Control Chart Type( "XBar and R" )
);

```

### Copy ByGroup Script

**Syntax:** obj << Copy ByGroup Script

**Description:** Create a JSL script to produce this analysis, and put it on the clipboard.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Process Screening(
	Grouping( :Site ),
	Process Variables( Eval( 5 :: 132 ) ),
	By( _bycol )
);
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Syntax:** obj << Copy Script

**Description:** Create a JSL script to produce this analysis, and put it on the clipboard.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Grouping( :Site ), Process Variables( Eval( 5 :: 132 ) ) );
obj << Copy Script;

```

### Count

**Syntax:** obj << Count( state=0|1 )

**Description:** Shows or hides the Count column in the summary table. This column contains the number of observations. On by default.

**JMP Version Added:** 14

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Y( :NPN1, :PNP1, :PNP2, :NPN2 ) );
Wait( 1 );
obj << Count( 0 );

```

### Cp

**Syntax:** obj << Cp( state=0|1 )

**Description:** Shows or hides the Cp column in the summary table. This column contains the potential capability if target and drift issues are resolved.

**JMP Version Added:** 14

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Y( :NPN1, :PNP1, :PNP2, :NPN2 ), Cp( 1 ) );

```

### Cpk

**Syntax:** obj << Cpk( state=0|1 )

**Description:** Shows or hides the Cpk column in the summary table. This column contains the Cpk short-run capability index based on Within Sigma or Between-and-Within Sigma and assuming a normal distribution. On by default.

**JMP Version Added:** 14

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Y( :NPN1, :PNP1, :PNP2, :NPN2 ), Cpk( 0 ) );
Wait( 1 );
obj << Cpk( 1 );

```

### Data Table Window

**Syntax:** obj << Data Table Window

**Description:** Move the data table window for this analysis to the front.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Grouping( :Site ), Process Variables( Eval( 5 :: 132 ) ) );
obj << Data Table Window;

```

### Drift Alpha

**Syntax:** obj = Process Screening(...Drift Alpha( number=. )...)

**Description:** Specifies the Holt-Winters smoothing weight for position in drift detection. This value is usually estimated, rather than specified. If it is specified, you must specify it in the launch script. "." by default.

**JMP Version Added:** 14

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Alpha( .6 ),
	Select All,
	Drift Graph Selected
);

```

### Drift Beta

**Syntax:** obj = Process Screening(...Drift Beta( number=.05 )...)

**Description:** Specifies the weight that is used in the Holt Double-Exponential Smoother for drift detection. ".05" by default.

**JMP Version Added:** 14

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Beta( .1 ),
	Select All,
	Drift Graph Selected
);

```

### Drift Graph Selected

**Syntax:** obj << Drift Graph Selected( <{ process list }> )

**Description:** Shows a drift graph for each process that you select in the summary table. The values that are plotted are the slope estimates from a Holt Double-Exponential Smoothing model.

**JMP Version Added:** 14

**Example 1**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Select All,
	Drift Graph Selected
);

```

**Example 2**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening( Y( :DIAMETER ), Grouping( :MACHINE, :Phase ), );
Wait( 1 );
obj << Drift Graph Selected( {{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}} );

```

### Drift Summaries

**Syntax:** obj << Drift Summaries( state=0|1 )

**Description:** Shows or hides drift summary columns in the summary table. These columns contain the mean up drift, mean down drift, and mean absolute drift.

**JMP Version Added:** 14

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Summaries( 1 )
);

```

### Enable All Tests

**Syntax:** obj << Enable All Tests

**Description:** Includes all of the Nelson tests in the alarm rates and counts.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Enable All Tests
);

```

### Expected Out of Spec Rate

**Syntax:** obj << Expected Out of Spec Rate( state=0|1 )

**Description:** Shows or hides the Expected Out of Spec Rate column in the summary table. This column contains the expected proportion of observations that fall outside of the specification limits. The Expected Out of Spec Rate value assumes a stable and normally distributed process and uses the overall sigma.

**JMP Version Added:** 15

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening(
	Y( :NPN1, :PNP1, :PNP2, :NPN2 ),
	Expected Out of Spec Rate( 1 )
);

```

### Filter Where

**Syntax:** obj << Filter Where( condition )

**Description:** Filters and removes the processes in the summary table. The filter is based on the specified condition.

**JMP Version Added:** 14

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Filter Where( Alarm Rate > 0 )
);
Wait( 1 );
obj << Reset Filter;
obj << Filter Where( Stability Index > 1.3 | Mean <= 4.3 );

```

### Find and Select

**Syntax:** obj << Find and Select( condition )

**Description:** Finds all columns and groups where the search string appears and selects those processes in the summary table.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Find and Select( "DIAMETER", {"C334", "A455"}, 2 )
);

```

### Get By Levels

**Syntax:** obj << Get By Levels

**Description:** Returns an associative array mapping the by group columns to their values.

**JMP Version Added:** 18

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

### Get ByGroup Script

**Syntax:** obj << Get ByGroup Script

**Description:** Creates a script (JSL) to produce this analysis and returns it as an expression.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Process Screening(
	Grouping( :Site ),
	Process Variables( Eval( 5 :: 132 ) ),
	By( _bycol )
);
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Container

**Syntax:** obj << Get Container

**Description:** Returns a reference to the container box that holds the content for the object.

**General**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Grouping( :Site ), Process Variables( Eval( 5 :: 132 ) ) );
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**Platform with Filter**

```

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

### Get Data Table

**Syntax:** obj << Get Data Table

**Description:** Returns a reference to the data table.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Grouping( :Site ), Process Variables( Eval( 5 :: 132 ) ) );
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Group Platform

**Syntax:** obj << Get Group Platform

**Description:** Return the Group Platform object if this platform is part of a Group. Otherwise, returns Empty().

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );
group = biv[1] << Get Group Platform;
Wait( 1 );
group << Layout( "Arrange in Tabs" );

```

### Get Script

**Syntax:** obj << Get Script

**Description:** Creates a script (JSL) to produce this analysis and returns it as an expression.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Grouping( :Site ), Process Variables( Eval( 5 :: 132 ) ) );
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Syntax:** obj << Get Script With Data Table

**Description:** Creates a script(JSL) to produce this analysis specifically referencing this data table and returns it as an expression.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Grouping( :Site ), Process Variables( Eval( 5 :: 132 ) ) );
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Syntax:** obj << Get Timing

**Description:** Times the platform launch.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Grouping( :Site ), Process Variables( Eval( 5 :: 132 ) ) );
t = obj << Get Timing;
Show( t );

```

### Get Web Support

**Syntax:** obj << Get Web Support

**Description:** Return a number indicating the level of Interactive HTML support for the display object. 1 means some or all elements are supported. 0 means no support.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

### Get Where Expr

**Syntax:** obj << Get Where Expr

**Description:** Returns the Where expression for the data subset, if the platform was launched with By() or Where(). Otherwise, returns Empty()

**JMP Version Added:** 18

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );
Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

### Goal Plot

**Syntax:** obj << Goal Plot( state=0|1 )

**Description:** Shows or hides a plot that contains a point for each variable. The spec-normalized mean shift is on the horizontal axis and the spec-normalized standard deviation is on the vertical axis. This option is available only if specification limits are defined for at least one process variable.

**JMP Version Added:** 14

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Y( :NPN1, :PNP1, :PNP2, :NPN2 ), Goal Plot( 1 ) );

```

### Grouping

**Syntax:** obj = Process Screening(...<Grouping( column(s) )>...)

**Description:** Analyzes each process variable at every combination of levels of the specified grouping columns.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Grouping( :Site ), Process Variables( Eval( 5 :: 132 ) ) );

```

### Ignore Platform Preferences

**Syntax:** Ignore Platform Preferences( state=0|1 )

**Description:** Ignores the current settings of the platform&apos;s preferences. The message is ignored when sent to the platform after creation.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Ignore Platform Preferences( 1 ),
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

### K Sigma for Proportion

**Syntax:** obj = Process Screening(...K Sigma for Proportion( number=3 )...)

**Description:** Specifies the number of standard deviations (in terms of sigma) that the control limits should be from the centerline. "3" by default.

**JMP Version Added:** 19

```

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Quality Control/Electrical Component Defect Screening.jmp" );
dt << Process Screening(
	Process Variables( :N Defective ),
	n Trials( :N Units ),
	Time( :Day ),
	Control Chart Type( "Proportion" ),
	Show Charts as Selected( 1 ),
	RowStates( [0 1] ),
	K Sigma for Proportion( 2.5 ),
	Use Upper Limit( 1 ),
	Use Lower Limit( 1 )
);

```

### KSigma

**Syntax:** obj = Process Screening(...KSigma( number=3 )...)

**Description:** Specifies the number of standard deviations (in terms of sigma) that the control limits should be from the centerline. "3" by default.

**JMP Version Added:** 16

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( X( :Process ), Y( Eval( 5 :: 132 ) ), K Sigma( 4 ) );

```

### Keep Distribution Details

**Syntax:** obj = Process Screening(...Keep Distribution Details( state=0|1 )...)

**Description:** Retains the parameter estimates and quantile details of fitting all the distributions so that they are available to show in the report.

**JMP Version Added:** 19

```

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Quality Control/Environmental Monitor Sim.jmp" );
obj = dt << Process Screening(
	Process Variables( :Count ),
	Grouping( :Type, :Grade, :Site ),
	Control Chart Type( "Count" ),
	Time( :Time ),
	Keep Distribution Details( 1 ),
	SendToReport(
		Dispatch( {}, "Poisson λ", NumberColBox, {Visibility( "Visible" )} ),
		Dispatch( {}, "NegBin λ", NumberColBox, {Visibility( "Visible" )} ),
		Dispatch( {}, "NegBin σ", NumberColBox, {Visibility( "Visible" )} ),
		Dispatch( {}, "ZIP π", NumberColBox, {Visibility( "Visible" )} ),
		Dispatch( {}, "ZIP λ", NumberColBox, {Visibility( "Visible" )} ),
		Dispatch( {}, "ZINB π", NumberColBox, {Visibility( "Visible" )} ),
		Dispatch( {}, "ZINB λ", NumberColBox, {Visibility( "Visible" )} ),
		Dispatch( {}, "ZINB σ", NumberColBox, {Visibility( "Visible" )} )
	)
);

```

### Largest Downshift

**Syntax:** obj << Largest Downshift( state=0|1 )

**Description:** Shows or hides the Largest Downshift and Downshift Position columns in the summary table. These columns contain the largest downward shift in the series that exceeds one within sigma unit and the position in the series at which this shift occurred.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Largest Downshift( 1 )
);

```

### Largest Upshift

**Syntax:** obj << Largest Upshift( state=0|1 )

**Description:** Shows or hides the Largest Upshift and Upshift Position columns in the summary table. These columns contain the largest upward shift in the series that exceeds one within sigma unit and the position in the series at which this shift occurred.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Largest Upshift( 1 )
);

```

### Latest Out of Spec

**Syntax:** obj << Latest Out of Spec( state=0|1 )

**Description:** Shows or hides the Latest Out of Spec column in the summary table. This column contains the number of observations between the last observation that is outside of the specification limits and the final observation. If the last observation is outside of the specification limits, the Latest Out of Spec value is 1. On by default.

**JMP Version Added:** 14

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Y( :NPN1, :PNP1, :PNP2, :NPN2 ), Latest Out of Spec( 0 ) );
Wait( 1 );
obj << Latest Out of Spec( 1 );

```

### Local Data Filter

**Syntax:** obj << Local Data Filter

**Description:** To filter data to specific groups or ranges, but local to this platform

```

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

### Make Detailed Shift Data

**Syntax:** obj = Process Screening(...Make Detailed Shift Data( state=0|1 )...)

**Description:** Stores all of the shift information so that it can be saved to a data table later using the Save Shift Table option. This option must be specified in the launch script and requires a shift of 5*sigma or greater.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Steam Turbine Current.jmp" );
obj = dt << Process Screening(
	Process Variables( :Fuel, :Steam Flow, :Steam Temp, :MW, :Cool Temp, :Pressure ),
	Control Chart Type( "Indiv and MR" ),
	RowStates( [5 1] ),
	Shift Graph( 1 ),
	Make Detailed Shift Data( 1 )
);
obj << Save Shift Table;

```

### Maximum

**Syntax:** obj << Maximum( state=0|1 )

**Description:** Shows or hides the Maximum for Count and Nonnegative Continuous chart types.  On by default.

**JMP Version Added:** 19

```

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Quality Control/Environmental Monitor Sim.jmp" );
obj = dt << Process Screening(
	Process Variables( :Count ),
	Grouping( :Type, :Grade, :Site ),
	Control Chart Type( "Count" ),
	Time( :Time )
);
Wait( 1 );
obj << Maximum( 0 );

```

### Mean

**Syntax:** obj << Mean( state=0|1 )

**Description:** Shows or hides the Mean column in the summary table. This column contains the average of the process data. On by default.

**JMP Version Added:** 14

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Y( :NPN1, :PNP1, :PNP2, :NPN2 ) );
Wait( 1 );
obj << Mean( 0 );

```

### Minimum Process Length

**Syntax:** obj = Process Screening(...Minimum Process Length( number=3 )...)

**Description:** Specifies the minimum number of data values that a process must have to be included in the analysis. "3" by default.

**JMP Version Added:** 14

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Minimum Process Length( 40 )
);

```

### Moving Range Limit Exceeded

**Syntax:** obj << Moving Range Limit Exceeded( state=0|1 )

**Description:** Shows or hides the Moving Range Limited Exceeded column in the summary table. This column contains the number of subgroups that exceed the moving range limit on the three way control chart calculation.

```

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Quality Control/Vial Fill Weights.jmp" );
obj = dt << Process Screening(
	Y( :Fill Weight ),
	Subgroup( :Sample ),
	Control Chart Type( "XBar MR and R" ),
	Moving Range Limit Exceeded( 1 )
);

```

### N Subgroups

**Syntax:** obj << N Subgroups( state=0|1 )

**Description:** Shows or hides the N Subgroups column in the summary table. This column contains the number of subgroups. On by default.

**JMP Version Added:** 16

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening(
	Y( :NPN1, :PNP1, :PNP2, :NPN2 ),
	Control Chart Type( "XBar and R" )
);
Wait( 1 );
obj << N Subgroups( 0 );

```

### New JSL Preset

**Syntax:** New JSL Preset( preset )

**Description:** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

**JMP Version Added:** 18

```

Names Default To Here( 1 );
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

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

### Out of Spec Count

**Syntax:** obj << Out of Spec Count( state=0|1 )

**Description:** Shows or hides the Out of Spec Count column in the summary table. This column contains the number of observations that fall outside of the specification limits. On by default.

**JMP Version Added:** 14

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Y( :NPN1, :PNP1, :PNP2, :NPN2 ), Out of Spec Count( 0 ) );
Wait( 1 );
obj << Out of Spec Count( 1 );

```

### Out of Spec Rate

**Syntax:** obj << Out of Spec Rate( state=0|1 )

**Description:** Shows or hides the Out of Spec Rate column in the summary table. This column contains the proportion of observations that fall outside of the specification limits. On by default.

**JMP Version Added:** 14

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Y( :NPN1, :PNP1, :PNP2, :NPN2 ), Out of Spec Rate( 0 ) );
Wait( 1 );
obj << Out of Spec Rate( 1 );

```

### Outlier Threshold

**Syntax:** obj = Process Screening(...Outlier Threshold( number=5 )...)

**Description:** Specifies the number of within sigma units that an observation must exceed in magnitude from its two neighbors in order to be treated as an outlier. "5" by default.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Shift Threshold( 2 ),
	Outlier Threshold( 1.1 ),
	Shift Graph( 1 )
);

```

### Overall Sigma

**Syntax:** obj << Overall Sigma( state=0|1 )

**Description:** Shows or hides the Overall Sigma column in the summary table. This column contains an estimate of the standard deviation based on all of the observations. On by default.

**JMP Version Added:** 14

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Y( :NPN1, :PNP1, :PNP2, :NPN2 ) );
Wait( 1 );
obj << Overall Sigma( 0 );

```

### Paste Local Data Filter

**Syntax:** obj << Paste Local Data Filter

**Description:** Apply the local data filter from the clipboard to the current report.

```

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

### Performance Graph Boundaries

**Syntax:** obj << Performance Graph Boundaries( <Capability Ppk boundary, Stability Ratio boundary> )

**Description:** Specifies boundaries for the Capability Ppk and Stability Ratio regions in the Process Performance Graph. If no arguments are specified, this option opens a window in which you can specify the boundaries.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening(
	Y( :NPN1, :PNP1, :PNP2, :NPN2 ),
	Select All,
	Process Performance Graph( 1 )
);
Wait( 1 );
obj << Performance Graph Boundaries( 1.7, 1.2 );

```

### Ppk

**Syntax:** obj << Ppk( state=0|1 )

**Description:** Shows or hides the Ppk column in the summary table. This column contains the Ppk long-run capability index based on Overall Sigma and assuming a normal distribution. On by default.

**JMP Version Added:** 14

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Y( :NPN1, :PNP1, :PNP2, :NPN2 ), Ppk( 0 ) );
Wait( 1 );
obj << Ppk( 1 );

```

### Ppk Capability Boundary

**Syntax:** obj << Ppk Capability Boundary( number=1.33 )

**Description:** Specifies a boundary between the capable and incapable regions for Capability Ppk in the Process Performance Graph. "1.33" by default.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening(
	Y( :NPN1, :PNP1, :PNP2, :NPN2 ),
	Select All,
	Ppk Capability Boundary( 1.7 ),
	Process Performance Graph( 1 )
);

```

### Process Capability

**Syntax:** obj << Process Capability

**Description:** Opens a Process Capability report window that shows Individual Detail Reports for the processes that you select in the summary table.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening(
	Y( :NPN1, :PNP1, :PNP2, :NPN2 ),
	Select All,
	Process Capability
);

```

### Process Performance Graph

**Syntax:** obj << Process Performance Graph( state=0|1 )

**Description:** Shows or hides a graph of Capability Ppk by Stability Ratio with four colored quadrants. By default, a stability ratio that exceeds 1.5 indicates that the process is unstable and a Ppk that is smaller than 1.33 indicates that the process is not capable.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening(
	Y( :NPN1, :PNP1, :PNP2, :NPN2 ),
	Select All,
	Process Performance Graph( 1 )
);

```

### Process Potential Graph

**Syntax:** obj << Process Potential Graph( state=0|1 )

**Description:** Shows or hides the Process Potential Graph, which plots Cp on the vertical axis and % Measurement Sigma^2 on the horizontal axis. This graph shows the relative benefits of improving the measurement system or the process.

```

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Quality Control/Coating.jmp" );
Column( "Weight" ) << Set Property(
	"Process Screening",
	{Centerline( 20.5 ), Specified Sigma( 1.5 ), Measurement Sigma( .8 )}
);
Column( "Weight" ) << Set Property( "Spec Limits", {LSL( 17 ), USL( 24 )} );
obj = dt << Process Screening(
	Process Variables( :Weight ),
	Subgroup( :Sample ),
	Control Chart Type( "XBar and R" ),
	Out of Spec Count( 0 ),
	Out of Spec Rate( 0 ),
	Latest Out of Spec( 0 ),
	Process Potential Graph( 1 )
);

```

### Process Screening

**Syntax:** Process Screening( Process Variables( columns ) )

**Description:** Examines many processes from several perspectives, including stability, capability, control chart tests, and shift (drift). Assists with the ability to focus on which processes need attention.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Grouping( :Site ), Process Variables( Eval( 5 :: 132 ) ) );

```

### Process Variables

**Syntax:** obj = Process Screening(...Process Variables( column(s) )...)

**Description:** Specifies the columns of process data that contain the measurements to be analyzed.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Grouping( :Site ), Process Variables( Eval( 5 :: 132 ) ) );

```

### Range Limit Exceeded

**Syntax:** obj << Range Limit Exceeded( state=0|1 )

**Description:** Shows or hides the Range Limit Exceeded column in the summary table. This column contains the number of subgroups that exceed the upper control limit on the R, S, or MR chart calculation.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Range Limit Exceeded( 1 )
);

```

### Redo Analysis

**Syntax:** obj << Redo Analysis

**Description:** Rerun this same analysis in a new window. The analysis will be different if the data has changed.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Grouping( :Site ), Process Variables( Eval( 5 :: 132 ) ) );
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Syntax:** obj << Redo ByGroup Analysis

**Description:** Rerun this same analysis in a new window. The analysis will be different if the data has changed.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Process Screening(
	Grouping( :Site ),
	Process Variables( Eval( 5 :: 132 ) ),
	By( _bycol )
);
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**Syntax:** obj << Relaunch Analysis

**Description:** Opens the platform launch window and recalls the settings that were used to create the report.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Grouping( :Site ), Process Variables( Eval( 5 :: 132 ) ) );
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Syntax:** obj << Relaunch ByGroup

**Description:** Opens the platform launch window and recalls the settings that were used to create the report.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Process Screening(
	Grouping( :Site ),
	Process Variables( Eval( 5 :: 132 ) ),
	By( _bycol )
);
obj[1] << Relaunch ByGroup;

```

### Relaunch Selected Processes

**Syntax:** obj << Relaunch Selected Processes

**Description:** To focus on just the selected processes, this will relaunch the platform on those.

**JMP Version Added:** 19

```

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Quality Control/Environmental Monitor Sim.jmp" );
obj = dt << Process Screening(
	Process Variables( :Count ),
	Grouping( :Type, :Grade, :Site ),
	Control Chart Type( "Count" ),
	Time( :Time ),
	Show Charts as Selected( 1 ),
	RowStates( [51 1, 52 1, 66 1, 85 1] )
);
Wait( 1 );
obj << Relaunch Selected Processes;

```

### Remove

**Syntax:** obj = Process Screening(...Remove( columns )...)

**Description:** Specifies processes to be excluded from the analysis. This option must be specified in the launch script and applies only when a Column Group is specified.

**JMP Version Added:** 14

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening(
	Y( dt << get Column Group( "Processes" ) ),
	Remove( :NPN2 ),
	Process Performance Graph( 1 )
);

```

### Remove Column Switcher

**Syntax:** obj << Remove Column Switcher

**Description:** Removes the most recent Column Switcher that has been added to the platform.

```

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

### Remove Local Data Filter

**Syntax:** obj << Remove Local Data Filter

**Description:** If a local data filter has been created, this removes it and restores the platform to use all the data in the data table directly

```

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

### Remove Selected Items

**Syntax:** obj << Remove Selected Items

**Description:** Removes the rows that are selected in the summary table and reruns the analysis without those processes.

**JMP Version Added:** 14

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Find and Select( "DIAMETER", {"C334", "A455"}, 2 )
);
Wait( 1 );
obj << Remove Selected Items;

```

### Render Preset

**Syntax:** Render Preset( preset )

**Description:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP Version Added:** 18

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

### Report

**Syntax:** obj << Report;

Report( obj )

**Description:** Returns a reference to the report object.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Grouping( :Site ), Process Variables( Eval( 5 :: 132 ) ) );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**Syntax:** obj << Report View( "Full"|"Summary" )

**Description:** The report view determines the level of detail visible in a platform report. Full shows all of the detail, while Summary shows only select content, dependent on the platform. For customized behavior, display boxes support a <<Set Summary Behavior message.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Grouping( :Site ), Process Variables( Eval( 5 :: 132 ) ) );
obj << Report View( "Summary" );

```

### Reset Filter

**Syntax:** obj << Reset Filter

**Description:** Removes any filter that is currently applied to the summary table.

**JMP Version Added:** 14

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening( Y( :DIAMETER ), Grouping( :MACHINE, :Phase ) );
Wait( 1 );
obj << Filter Where( Alarm Rate > 0 );
Wait( 3 );
obj << Reset Filter;

```

### RowStates

**Syntax:** obj << RowStates( matrix )

**Description:** Sets the row states for the rows in the summary table. The input is an m by 2 matrix. The first column contains row numbers (zero-based in original order) and the second column contains numeric row state values. See the JMP User&apos;s Guide for more information about numeric row state values.

**JMP Version Added:** 16

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Process Variables( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Control Chart Type( "XBar and R" ),
	RowStates( [0 1, 5 768] ) //Select first and Color Red the sixth of original order
);
Wait( 1 );
// sort columns to show original order
obj << SendToReport( Dispatch( {}, "", TableBox, {Sort By Column( 3, 1 )} ) );
obj << SendToReport( Dispatch( {}, "", TableBox, {Sort By Column( 2, 1 )} ) );

```

### Save ByGroup Script to Data Table

**Syntax:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Description:** Creates a JSL script to produce this analysis, and save it as a table property in the data table. You can specify a name for the script. The Append Suffix option appends a numeric suffix to the script name, which differentiates the script from an existing script with the same name. The Prompt option prompts the user to specify a script name. The Replace option replaces an existing script with the same name.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Process Screening(
	Grouping( :Site ),
	Process Variables( Eval( 5 :: 132 ) ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Syntax:** obj << Save ByGroup Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Process Screening(
	Grouping( :Site ),
	Process Variables( Eval( 5 :: 132 ) ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Syntax:** obj << Save ByGroup Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Process Screening(
	Grouping( :Site ),
	Process Variables( Eval( 5 :: 132 ) ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Script Window;

```

### Save Details Table

**Syntax:** obj << Save Details Table

**Description:** Creates a new data table that contains the test alarm information for each combination of process and grouping variables.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Y( Eval( 5 :: 132 ) ), Subgroup Sample Size( 6 ) );
obj << Save Details Table;

```

### Save Script for All Objects

**Syntax:** obj << Save Script for All Objects

**Description:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Grouping( :Site ), Process Variables( Eval( 5 :: 132 ) ) );
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntax:** obj << Save Script for All Objects To Data Table( <name> )

**Description:** Saves a script for all report objects to the current data table. This option is useful when you have multiple reports in the window. The script is named after the first platform unless you specify the script name in quotes.

**Example 1**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Process Screening(
	Grouping( :Site ),
	Process Variables( Eval( 5 :: 132 ) ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table;

```

**Example 2**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Process Screening(
	Grouping( :Site ),
	Process Variables( Eval( 5 :: 132 ) ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntax:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Description:** Create a JSL script to produce this analysis, and save it as a table property in the data table.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Grouping( :Site ), Process Variables( Eval( 5 :: 132 ) ) );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntax:** obj << Save Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Grouping( :Site ), Process Variables( Eval( 5 :: 132 ) ) );
obj << Save Script to Journal;

```

### Save Script to Report

**Syntax:** obj << Save Script to Report

**Description:** Create a JSL script to produce this analysis, and show it in the report itself. Useful to preserve a printed record of what was done.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Grouping( :Site ), Process Variables( Eval( 5 :: 132 ) ) );
obj << Save Script to Report;

```

### Save Script to Script Window

**Syntax:** obj << Save Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Grouping( :Site ), Process Variables( Eval( 5 :: 132 ) ) );
obj << Save Script to Script Window;

```

### Save Selected Details

**Syntax:** obj << Save Selected Details

**Description:** Creates a new data table that contains the test alarm information for the selected rows in the summary table.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Find and Select( "DIAMETER", {"C334", "A455"}, 2 )
);
obj << Save Selected Details;

```

### Save Shift Table

**Syntax:** obj << Save Shift Table

**Description:** Creates a new data table that contains the saved shift gap data. This option requires that the Make Detailed Shift Data option is specified in the launch script.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Steam Turbine Current.jmp" );
obj = dt << Process Screening(
	Process Variables( :Fuel, :Steam Flow, :Steam Temp, :MW, :Cool Temp, :Pressure ),
	Control Chart Type( "Indiv and MR" ),
	RowStates( [5 1] ),
	Shift Graph( 1 ),
	Make Detailed Shift Data( 1 )
);
obj << Save Shift Table;

```

### Save Summary Table

**Syntax:** obj << Save Summary Table

**Description:** Creates a new data table that contains all of the process summary information for all variables and groups.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Y( Eval( 5 :: 132 ) ), Subgroup Sample Size( 6 ) );
obj << Save Summary Table;

```

### Save Summary Table with Graphs

**Syntax:** obj << Save Summary Table with Graphs

**Description:** Creates a new data table that contains all of the process summary information and a column of quick graphs.

**JMP Version Added:** 15

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Y( Eval( 5 :: 132 ) ), Subgroup Sample Size( 6 ) );
obj << Save Summary Table with Graphs;

```

### Select All

**Syntax:** obj << Select All

**Description:** Selects all columns and groups and performs subsequent commands on these.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening( Y( :DIAMETER ), Grouping( :MACHINE, :Phase ), Select All );

```

### Select Where

**Syntax:** obj << Select Where( condition )

**Description:** Selects process columns in the summary table. The selected columns correspond to the specified condition.

**JMP Version Added:** 14

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Select Where( Alarm Rate > 0 )
);

```

### SendToByGroup

**Syntax:** SendToByGroup( {":Column == level"}, command );

**Description:** Sends platform commands or display customization commands to each level of a by-group.

```

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

### SendToEmbeddedScriptable

**Syntax:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Description:** SendToEmbeddedScriptable restores settings of embedded scriptable objects.

```

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
dt << Life Distribution(
	Y( :Time ),
	Censor( :Censor ),
	Censor Code( 1 ),
	<<Fit Weibull,
	SendToEmbeddedScriptable(
		Dispatch(
			{"Statistics", "Parametric Estimate - Weibull", "Profilers",
			"Density Profiler"},
			{1, Confidence Intervals( 0 ), Term Value(
				Time( 6000, Lock( 0 ), Show( 1 ) )
			)}
		)
	)
);

```

### SendToReport

**Syntax:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Description:** Send To Report is used in tandem with the Dispatch command to customize the appearance of a report.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :age ) ),
	Continuous Distribution( Column( :weight ) ),
	SendToReport(
		Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} )
	)
);

```

### Set Scrolling

**Syntax:** obj << Set Scrolling( number )

**Description:** Specifies how many rows to show in the scrolling summary table.

**JMP Version Added:** 14

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Set Scrolling( 3 )
);

```

### Shift Graph

**Syntax:** obj << Shift Graph( state=0|1 )

**Description:** Shows or hides a plot of the time occurrence of all process shifts that exceed the number of within sigma units that are specified by the Shift Threshold option. Green markers indicate upshifts and red markers indicate downshifts.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Steam Turbine Current.jmp" );
obj = dt << Process Screening(
	Y( :Fuel, :Steam Flow, :Steam Temp, :MW, :Cool Temp, :Pressure ),
	Control Chart Type( "Indiv and MR" )
);
obj << Shift Graph( 1 );

```

### Shift Lambda

**Syntax:** obj = Process Screening(...Shift Lambda( number=.3 )...)

**Description:** Specifies the weight that is used in the exponentially weighted moving average (EWMA) for shift detection. ".3" by default.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Steam Turbine Current.jmp" );
obj = dt << Process Screening(
	Process Variables( :Fuel, :Steam Flow, :Steam Temp, :MW, :Cool Temp, :Pressure ),
	Control Chart Type( "Indiv and MR" ),
	Show Charts as Selected( 1 ),
	RowStates( [5 1] ),
	Shift Lambda( 0.2 ),
	Shift Graph( 1 )
);

```

### Shift Threshold

**Syntax:** obj = Process Screening(...Shift Threshold( number=3 )...)

**Description:** Specifies the number of within sigma units that a shift must exceed in magnitude in order to be shown in the Shift Graph. "3" by default.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Shift Threshold( 2 ),
	Shift Graph( 1 )
);

```

### Show Charts as Selected

**Syntax:** obj << Show Charts as Selected( state=0|1 )

**Description:** Plots small graphs of the processes that are selected in the summary table. The graphs are shown in a Charts as Selected report that automatically updates as you select and deselect processes in the summary table.

**JMP Version Added:** 17

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening( Y( :DIAMETER ), Grouping( :MACHINE, :Phase ) );
obj << Select Where( :MACHINE == "C334" );
obj << Show Charts as Selected( 1 );
Wait( 2 );
obj << Select Where( :MACHINE == "A455" );

```

### Show Charts for Selected

**Syntax:** obj << Show Charts for Selected( <process list> )

**Description:** Plots small graphs of the processes that are selected in the summary table. The graphs are shown in a Charts for Selected report where it is possible to view and compare many processes at once.

**Example 1**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Select All,
	Show Charts for Selected
);

```

**Example 2**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :OPERATOR, :MACHINE ),
	Show Charts for Selected( {{:DIAMETER, "DRJ", "C334"}, {:DIAMETER, "MKS", "A386"}} )
);

```

**Example 3**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening(
	Y( :IVP7, :B1, :IVP8 ),
	Show Charts for Selected( {:IVP7, :IVP8} )
);

```

### Show Shifts in Graphs

**Syntax:** obj << Show Shifts in Graphs( state=0|1 )

**Description:** Shows or hides the locations of the shifts in the quick graphs using green and red vertical lines.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Steam Turbine Current.jmp" );
obj = dt << Process Screening(
	Y( :Fuel, :Steam Flow, :Steam Temp, :MW, :Cool Temp, :Pressure ),
	Control Chart Type( "Indiv and MR" ),
	Select All,
	Show Charts for Selected,
	Show Shifts in Graphs( 1 )
);

```

### Show Tests

**Syntax:** obj << Show Tests( state=0|1 )

**Description:** Shows or hides the Nelson tests that are selected under Choose Tests. On by default.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Test 2( 1 ),
	Test 3( 1 )
);
Wait( 1 );
obj << Show Tests( 0 );

```

### Sort by Subgroup

**Syntax:** obj = Process Screening(...Sort by Subgroup( state=0|1 )...)

**Description:** Sorts the process data by the subgroup variable, or combination of nested subgroup variables, before calculations are performed. This option is available only if a Subgroup variable is specified.

**JMP Version Added:** 16

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening(
	Y( Eval( 5 :: 132 ) ),
	Control Chart Type( "XBar and R" ),
	Subgroup( :wafer ),
	Sort by Subgroup( 1 )
);

```

### Spec Centered Mean

**Syntax:** obj << Spec Centered Mean( state=0|1 )

**Description:** Shows or hides the (Mean-Tgt)/SpecRange column in the summary table. This column contains the mean relative to the specification limits.

**JMP Version Added:** 14

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Y( :NPN1, :PNP1, :PNP2, :NPN2 ), Spec Centered Mean( 1 ) );

```

### Spec Limits

**Syntax:** obj << Spec Limits( state=0|1 )

**Description:** Shows or hides the specification limit columns in the summary table. These columns contain the lower specification limit (LSL), upper specification limit (USL), and target values.

**JMP Version Added:** 14

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Y( :NPN1, :PNP1, :PNP2, :NPN2 ), Spec Limits( 1 ) );

```

### Spec Scaled Std Dev

**Syntax:** obj << Spec Scaled Std Dev( state=0|1 )

**Description:** Shows or hides the StdDev/SpecRange column in the summary table. This column contains the overall standard deviation divided by the range of the specification limits.

**JMP Version Added:** 14

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Y( :NPN1, :PNP1, :PNP2, :NPN2 ), Spec Scaled Std Dev( 1 ) );

```

### Stability Index

**Syntax:** obj << Stability Index( state=0|1 )

**Description:** Shows or hides the Stability Index column in the summary table. This column is a measure of the stability of a process, where a stable process has a stability index near 1. On by default.

**JMP Version Added:** 14

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Y( :NPN1, :PNP1, :PNP2, :NPN2 ) );
Wait( 1 );
obj << Stability Index( 0 );

```

### Stability Index Boundary

**Syntax:** obj << Stability Index Boundary( number=1.25 )

**Description:** Specifies the boundary between the stable and unstable regions for Stability Index in the Process Performance Graph. "1.25" by default.

**JMP Version Added:** 14

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening(
	Y( :NPN1, :PNP1, :PNP2, :NPN2 ),
	Select All,
	Process Performance Graph( 1 )
);
Wait( 1 );
obj << Stability Index Boundary( 1.5 );

```

### Stability Ratio

**Syntax:** obj << Stability Ratio( state=0|1 )

**Description:** Shows or hides the Stability Ratio column in the summary table. This column is a measure of the stability of a process, where a stable process has a stability ratio near 1.

**JMP Version Added:** 14

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Y( :NPN1, :PNP1, :PNP2, :NPN2 ) );
obj << Stability Ratio( 1 );

```

### Subgroup

**Syntax:** obj = Process Screening(...<Subgroup( column(s) )>...)

**Description:** Assigns one or more subgroup variables.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening(
	Y( Eval( 5 :: 132 ) ),
	Control Chart Type( "XBar and R" ),
	Subgroup( :wafer ),
	Sort by Subgroup( 1 )
);

```

### Subgroup Sample Size

**Syntax:** obj = Process Screening(...Subgroup Sample Size( number=5 )...)

**Description:** Specifies the number of observations in each subgroup. The minimum subgroup size is 2. "5" by default.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening(
	Y( Eval( 5 :: 132 ) ),
	Control Chart Type( "XBar and R" ),
	Subgroup Sample Size( 6 )
);

```

### Summary

**Syntax:** obj << Summary( state=0|1 )

**Description:** Shows or hides the summary table in the report. On by default.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening(
	Y( Eval( 5 :: 132 ) ),
	Subgroup Sample Size( 6 ),
	Summary( 0 )
);
Wait( 1 );
obj << Summary( 1 );

```

### Sync to Data Table Changes

**Syntax:** obj << Sync to Data Table Changes

**Description:** Sync with the exclude and data changes that have been made.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
Wait( 1 );
dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );
dist << Sync To Data Table Changes;

```

### Target Index

**Syntax:** obj << Target Index( state=0|1 )

**Description:** Shows or hides the Target Index column in the summary table. This column contains the number of short-term standard deviations that the process average differs from the target value.

**JMP Version Added:** 14

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Y( :NPN1, :PNP1, :PNP2, :NPN2 ), Target Index( 1 ) );

```

### Test 1

**Syntax:** obj << Test 1( state=0|1 )

**Description:** Shows or hides the Test1 column in the summary table. This test is triggered when one point is more than three standard deviations from the center line. On by default.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening( Y( :DIAMETER ), Grouping( :MACHINE, :Phase ), Test 1( 0 ) );

```

### Test 2

**Syntax:** obj << Test 2( state=0|1 )

**Description:** Shows or hides the Test2 column in the summary table. This test is triggered when nine or more consecutive points are on the same side of the center line.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening( Y( :DIAMETER ), Grouping( :MACHINE, :Phase ), Test 2( 1 ) );

```

### Test 3

**Syntax:** obj << Test 3( state=0|1 )

**Description:** Shows or hides the Test3 column in the summary table. This test is triggered when six or more consecutive points are continually increasing or decreasing.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening( Y( :DIAMETER ), Grouping( :MACHINE, :Phase ), Test 3( 1 ) );

```

### Test 4

**Syntax:** obj << Test 4( state=0|1 )

**Description:** Shows or hides the Test4 column in the summary table. This test is triggered when fourteen consecutive points alternate in direction: increasing and then decreasing or decreasing and then increasing.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening( Y( :DIAMETER ), Grouping( :MACHINE, :Phase ), Test 4( 1 ) );

```

### Test 5

**Syntax:** obj << Test 5( state=0|1 )

**Description:** Shows or hides the Test5 column in the summary table. This test is triggered when two out of three consecutive points on the same side of the center line are more than two standard deviations from the center line.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening( Y( :DIAMETER ), Grouping( :MACHINE, :Phase ), Test 5( 1 ) );

```

### Test 6

**Syntax:** obj << Test 6( state=0|1 )

**Description:** Shows or hides the Test6 column in the summary table. This test is triggered when four out of five consecutive points on the same side of the center line are more than one standard deviation from the center line.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening( Y( :DIAMETER ), Grouping( :MACHINE, :Phase ), Test 6( 1 ) );

```

### Test 7

**Syntax:** obj << Test 7( state=0|1 )

**Description:** Shows or hides the Test7 column in the summary table. This test is triggered when fifteen consecutive points, on either side of the center line, are all within one standard deviation of the center line.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening( Y( :DIAMETER ), Grouping( :MACHINE, :Phase ), Test 7( 1 ) );

```

### Test 8

**Syntax:** obj << Test 8( state=0|1 )

**Description:** Shows or hides the Test8 column in the summary table. This test is triggered when eight consecutive points, on either side of the center line, all fall beyond one standard deviation of the center line.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening( Y( :DIAMETER ), Grouping( :MACHINE, :Phase ), Test 8( 1 ) );

```

### Test Action

**Syntax:** obj << Test Action( state=0|1 )

**Description:** Shows or hides the Action column in the summary table. This test is triggered when a point is greater than the Action Quantile. On by default.

**JMP Version Added:** 19

```

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Quality Control/Environmental Monitor Sim.jmp" );
obj = dt << Process Screening(
	Process Variables( :Count ),
	Grouping( :Type, :Grade, :Site ),
	Control Chart Type( "Count" ),
	Time( :Time ),
	Alarm Graph( 1 )
);
Wait( 1 );
obj << Test Action( 0 );

```

### Test Alert

**Syntax:** obj << Test Alert( state=0|1 )

**Description:** Shows or hides the Alert column in the summary table. This test is triggered when a point is greater than the Alert Quantile.

**JMP Version Added:** 19

```

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Quality Control/Environmental Monitor Sim.jmp" );
obj = dt << Process Screening(
	Process Variables( :Count ),
	Grouping( :Type, :Grade, :Site ),
	Control Chart Type( "Count" ),
	Time( :Time ),
	Alarm Graph( 1 )
);
Wait( 1 );
obj << Test Alert( 1 );

```

### Test Alert Increasing

**Syntax:** obj << Test Alert Increasing( state=0|1 )

**Description:** Shows or hides the Alert Increasing column in the summary table. This test is triggered when a point is increasing but the previous point is already at the alert level.

**JMP Version Added:** 19

```

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Quality Control/Environmental Monitor Sim.jmp" );
obj = dt << Process Screening(
	Process Variables( :Count ),
	Grouping( :Type, :Grade, :Site ),
	Control Chart Type( "Count" ),
	Time( :Time ),
	Show Charts as Selected( 1 ),
	Alarm Graph( 1 )
);
Wait( 1 );
obj << Test Alert Increasing( 0 );

```

### Time

**Syntax:** obj = Process Screening(...<Time( column )>...)

**Description:** Assigns a column that specifies the time order for the data. The process data are sorted by the Time variable before calculations are performed.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Prices.jmp" );
obj = dt << Process Screening(
	Process Variables( :Price ),
	Grouping( :Series ),
	Control Chart Type( "XBar and R" ),
	Time( :Date ),
	Subgroup Sample Size( 3 )
);

```

### Title

**Syntax:** obj << Title( "new title" )

**Description:** Sets the title of the platform.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Grouping( :Site ), Process Variables( Eval( 5 :: 132 ) ) );
obj << Title( "My Platform" );

```

### Top Report

**Syntax:** obj << Top Report

**Description:** Returns a reference to the root node in the report.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Grouping( :Site ), Process Variables( Eval( 5 :: 132 ) ) );
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Transform Column

**Syntax:** obj = <Platform>(... Transform Column(<name>, Formula(<expression>), [Random Seed(<n>)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Description:** Create a transform column in the local context of an object, usually a platform. The transform column is active only for the lifetime of the platform.

**JMP Version Added:** 16

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),
	Continuous Distribution( Column( :"age^2"n ) )
);

```

### Use Limits Table

**Syntax:** obj = Process Screening(...Use Limits Table( state=0|1, data table, <options>)...)

**Description:** Imports historical control limits and specification limits from a data table.

```

Names Default To Here( 1 );
dt1 = Open( "$SAMPLE_DATA/Cities.jmp" );
dt2 = Open( "$SAMPLE_DATA/CitySpecLimits.jmp" );
obj = dt1 << Process Screening(
	Y( :OZONE, :CO, :SO2, :NO ),
	Use Limits Table(
		1,
		dt2,
		Process Variables( :Column 1 ),
		LSL( :_LSL ),
		USL( :_USL ),
		Target( :_Target ),
		Go
	)
);

```

### Use Lower Limit

**Syntax:** obj = Process Screening(...Use Lower Limit( state=0|1 )...)

**Description:** For Proportion Charts, whether to use the K-Sigma lower limit

**JMP Version Added:** 19

```

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Quality Control/Electrical Component Defect Screening.jmp" );
dt << Process Screening(
	Process Variables( :N Defective ),
	n Trials( :N Units ),
	Time( :Day ),
	Control Chart Type( "Proportion" ),
	Show Charts as Selected( 1 ),
	RowStates( [0 1] ),
	Use Lower Limit( 1 )
);

```

### Use Medians instead of Means

**Syntax:** obj = Process Screening(...Use Medians instead of Means( state=0|1 )...)

**Description:** Estimates the center line using the median of the observations to reduce the effect of outliers on tests.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Use Medians instead of Means( 1 )
);

```

### Use Upper Limit

**Syntax:** obj = Process Screening(...Use Upper Limit( state=0|1 )...)

**Description:** For Proportion Charts, whether to use the K-Sigma upper limit On by default.

**JMP Version Added:** 19

```

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Quality Control/Electrical Component Defect Screening.jmp" );
dt << Process Screening(
	Process Variables( :N Defective ),
	n Trials( :N Units ),
	Time( :Day ),
	Control Chart Type( "Proportion" ),
	Show Charts as Selected( 1 ),
	RowStates( [0 1] ),
	Use Upper Limit( 0 ),
	Use Lower Limit( 1 )
);

```

### View Web XML

**Syntax:** obj << View Web XML

**Description:** Returns the XML code that is used to create the interactive HTML report.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

### Window View

**Syntax:** obj = Process Screening(...Window View( "Visible"|"Invisible"|"Private" )...)

**Description:** Set the type of the window to be created for the report. By default a Visible report window will be created. An Invisible window will not appear on screen, but is discoverable by functions such as Window(). A Private window responds to most window messages but is not discoverable and must be addressed through the report object

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );
eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;
biv << Close Window;
New Window( "Bivariate Equation",
	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) )
);

```

### Within Sigma

**Syntax:** obj << Within Sigma( state=0|1 )

**Description:** Shows or hides the Within Sigma column in the summary table. This column contains an estimate of the standard deviation based on within subgroup variation. On by default.

**JMP Version Added:** 14

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Y( :NPN1, :PNP1, :PNP2, :NPN2 ), Within Sigma( 0 ) );
Wait( 1 );
obj << Within Sigma( 1 );

```

### n Trials

**Syntax:** obj = Process Screening(...<n Trials( column )>...)

**Description:** Assigns a column that contains the number of trials. This number is used as the denominator of the proportion defective for a P chart.

```

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Quality Control/Washers.jmp" );
dt << Process Screening(
	Process Variables( :"# defective"n ),
	Control Chart Type( "Proportion" ),
	n Trials( :Lot Size 2 ),
	Show Charts as Selected( 1 ),
	RowStates( [0 1] )
);

```

