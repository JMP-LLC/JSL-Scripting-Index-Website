# Column Switcher



### Close Outline

**Syntax:** obj << Close Outline( state=0|1 )

**Description:** Opens or closes the Column Switcher outline box

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
ColumnSwitcherObject << Close Outline( 1 );

```

### Get Current

**Syntax:** obj << Get Current

**Description:** get the name of the current variable

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
ColumnSwitcherObject << Set Current( "country" );
ColumnSwitcherObject << Get Current/*country*/ ;

```

### Get Layout

**Syntax:** obj << Get Layout

**Description:** Gets the layout for multiple Column Switchers. Vertical(0) or horizontal(1).

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Physical Data.jmp" );
gb = dt << Graph Builder(
	Variables( X( :Country ), Y( :Weight ) ),
	Elements( Bar( X, Y, Legend( 4 ) ) )
);
cs1 = gb << Column Switcher( :Country, {:Model, :Country, :Type}, Layout( 1 ) );
cs2 = gb << Column Switcher(
	:Weight,
	{:Weight, :Turning Circle, :Displacement, :Horsepower, :Gas Tank Size}
);
If( cs2 << Get Layout() == 1,
	Print( "Horizontal" ),
	Print( "Vertical" )
);

```

### Get List

**Syntax:** obj << Get List

**Description:** get the list of available variables

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
ColumnSwitcherObject << Get List/*{"sex","country","marital status"}*/ ;

```

### Get Original

**Syntax:** obj << Get Original

**Description:** get the name of the original variable

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
ColumnSwitcherObject << Next;
ColumnSwitcherObject << Get Original/*marital status*/ ;

```

### Get Speed

**Syntax:** obj << Get Speed

**Description:** fpm = obj<<getSpeed /* in Frames Per Minute */;

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
FPM = ColumnSwitcherObject << Get Speed;

```

### Link Platform

**Syntax:** obj << Link Platform( platform )

**Description:** Links a platform to this column switcher.

**JMP Version Added:** 16

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
columnSwitcher = dt << Column Switcher(
	:Process 1,
	{:Process 1, :Process 2, :Process 3, :Process 4, :Process 5, :Process 6, :Process 7}
);
gb = Graph Builder(
	Variables( Y( :Process 1 ) ),
	Elements( Histogram( Y, Legend( 3 ) ) )
);
columnSwitcher << Link Platform( gb );

```

### Make Column Switch Handler

**Syntax:** handler = cs << Make Column Switch Handler( function(pre), function(post) )

**Description:** Creates a handler for column switches with callback functions which are called before and after the column is switched. The callback functions receive the previous column, the next column and the ColumnSwitcher. The function specified for before the switch should return a non-zero value to allow the switch. Returning 0 will prevent the switch. The function called after the switch shouldn&apos;t return a value.

**JMP Version Added:** 16

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
gb = Graph Builder(
	Variables( Y( :Process 1 ) ),
	Elements( Histogram( Y, Legend( 3 ) ) )
);
columnSwitcher = gb << Column Switcher(
	:Process 1,
	{:Process 1, :Process 2, :Process 3, :Process 4, :Process 5, :Process 6, :Process 7}
);
pre = Function( {currentColumn, nextColumn, switcher},
	Print(
		"Before switch: " || (currentColumn << get name) || " >> " || (nextColumn <<
		get name) || " [Column Switcher] current: " || (columnSwitcher << Get Current)
	);
	If( nextColumn << get name == "Process 4",
		0,
		1
	);
);
post = Function( {previousColumn, currentColumn, switcher},
	Print(
		"After switch: " || (previousColumn << get name) || " >> " || (currentColumn <<
		get name) || " [Column Switcher] current: " || (columnSwitcher << Get Current)
	)
);
handler = columnSwitcher << Make Column Switch Handler( pre, post );
columnSwitcher << Run;

```

### Next

**Syntax:** obj << Next

**Description:** Change the column switcher&apos;s selection to the next available choice

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
ColumnSwitcherObject << Next;

```

### Pause

**Syntax:** obj << Pause

**Description:** pause the animation

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
ColumnSwitcherObject << Run;
Wait( 5/*seconds, while it animates*/ );
ColumnSwitcherObject << Pause;

```

### Previous

**Syntax:** obj << Previous

**Description:** Change the column switcher&apos;s selection to the previous available choice

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
ColumnSwitcherObject << Previous;

```

### Remove Column Switcher

**Syntax:** obj << Remove Column Switcher

**Description:** Remove this Column Switcher

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
ColumnSwitcherObject << Run;
Wait( 2/*seconds, while it animates*/ );
ColumnSwitcherObject << Remove Column Switcher;

```

### Retain Axis Settings

**Syntax:** obj << Retain Axis Settings( state=0|1 )

**Description:** Some graphs store axis customizations based on the name of the column. By default, these customizations are removed when switching columns. If this option is enabled, the column is updated when switching so that the customizations are applied to the new graph.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
Graph Builder(
	Variables( X( :Process 1 ), Y( :Process 2 ) ),
	Elements( Points( X, Y, Legend( 2 ) ), Smoother( X, Y, Legend( 3 ) ) ),
	Column Switcher(
		:Process 1,
		{:Process 1, :Process 3, :Process 4, :Process 5, :Process 6, :Process 7},
		Retain Axis Settings( 1 )
	),
	SendToReport(
		Dispatch( {}, "Process 1", ScaleBox,
			{Min( -0.5 ), Max( 22 ), Inc( 4 ), Minor Ticks( 3 ),
			Add Ref Line( 12, "Solid", "Black", "", 1 )}
		)
	)
);

```

### Run

**Syntax:** obj << Run

**Description:** start the animation

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
ColumnSwitcherObject << Run;

```

### Script

**Syntax:** obj << Script( script )

**Description:** Set a script that is run when the column switches

**JMP Version Added:** 16

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
ColumnSwitcherObject << Set Script(
	Print( "New Value: " || Char( ColumnSwitcherObject << Get Current ) )
);
ColumnSwitcherObject << Run;
Wait( 5/*seconds, while it animates*/ );

```

### Set Current

**Syntax:** obj << Set Current( string )

**Description:** set the current variable

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
ColumnSwitcherObject << Set Current( "country" );

```

### Set Layout

**Syntax:** obj << Set Layout( 0 = Vertical | 1 = Horizontal )

**Description:** Sets the layout for multiple Column Switchers to vertical(0) or horizontal(1).

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Physical Data.jmp" );
gb = dt << Graph Builder(
	Variables( X( :Country ), Y( :Weight ) ),
	Elements( Bar( X, Y, Legend( 4 ) ) )
);
cs1 = gb << Column Switcher( :Country, {:Model, :Country, :Type} );
cs2 = gb << Column Switcher(
	:Weight,
	{:Weight, :Turning Circle, :Displacement, :Horsepower, :Gas Tank Size}
);
cs1 << Set Layout( 1 );

```

### Set N Lines

**Syntax:** obj << Set N Lines( number )

**Description:** Set the number of lines in the List Box of column names

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
ColumnSwitcherObject << Set N Lines( 20 );

```

### Set Script

**Syntax:** obj << Set Script( script )

**Description:** Set a script that is run when the column switches

**JMP Version Added:** 16

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
ColumnSwitcherObject << Set Script(
	Print( "New Value: " || Char( ColumnSwitcherObject << Get Current ) )
);
ColumnSwitcherObject << Run;
Wait( 5/*seconds, while it animates*/ );

```

### Set Size

**Syntax:** obj << Set Size( number )

**Description:** Set the pixel width of the List Box of column names

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
ColumnSwitcherObject << Set Size( 300 );

```

### Set Speed

**Syntax:** obj << Set Speed( number )

**Description:** obj<<setSpeed(60) /* in Frames Per Minute */;

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
ColumnSwitcherObject << Set Speed( 60 );/*FPM*/ColumnSwitcherObject << Run;

```

### Title

**Syntax:** obj << Title( string )

**Description:** Sets the title for the ColumnSwitcher outline box

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
ColumnSwitcherObject << Title( "Switch on X" );

```

