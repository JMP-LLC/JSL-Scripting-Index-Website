# Data Filter



## Categorical Filter

### Blocks Display

**Syntax:** obj << Blocks Display( state=0|1 )

**Description:** Show each level as a selectable block.

```

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Display( :Region, "List Display" ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Blocks Display;

```

### Check Box Display

**Syntax:** obj << Check Box Display( state=0|1 )

**Description:** Show each level with a check box, along with frequency count and bars.

```

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Display( :Region, "List Display" ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Check Box Display;

```

### Clear Find

**Syntax:** obj << Clear Find

**JMP Version Added:** 15

### Clear Selection

**Syntax:** obj << Clear Selection

**Description:** Clears any selection in effect for the given column.

```

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Clear Selection;

```

### Continuous

**Syntax:** obj << Continuous( state=0|1 )

**JMP Version Added:** 16

### Delete

**Syntax:** obj << Delete

**Description:** Removes the variable from the Data Filter control panel.

```

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Delete;

```

### Extend Where

**Syntax:** obj << Extend Where

**Description:** Select rows using an expression, adding to the current selection.

```

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Extend Where( :Region == {"MW"} );

```

### Find

**Syntax:** obj << Find(Set Text("string"), <options>)

**Description:** Provides a text box where you can enter a search string for the selected column.

**JMP Version Added:** 15

```

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Find( Set Text( "w" ) );

```

### Get Selected Items

**Syntax:** obj << Get Selected Items

**JMP Version Added:** 15

### Get Visible Items

**Syntax:** obj << Get Visible Items

**JMP Version Added:** 19

### Invert Selection

**Syntax:** obj << Invert Selection

**Description:** Deselects any selected values, and selects all values not previously selected, for the given column.

```

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Invert Selection;

```

### List Display

**Syntax:** obj << List Display( state=0|1 )

**Description:** Show each level in a list, along with frequency count and bars.

```

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Display( :Region, "Check Box Display" ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << List Display;

```

### Multiple Response

**Syntax:** obj << Multiple Response( state=0|1 )

**JMP Version Added:** 16

### Nominal/Ordinal

**Syntax:** obj << Nominal/Ordinal( state=0|1 )

**JMP Version Added:** 16

### Order By Count

**Syntax:** obj << Order By Count( state=0|1 )

**Description:** Orders the values in decreasing sort order by count.

**JMP Version Added:** 15

```

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Order by Count;

```

### Radio Box Display

**Syntax:** obj << Radio Box Display( state=0|1 )

**Description:** Show each level with a radio box, along with frequency count and bars.

**JMP Version Added:** 15

```

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Display( :Region, "List Display" ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Radio Box Display;

```

### Select Filter Item

**Syntax:** obj << Select Filter Item

**Description:** Select the given filter item. The selected filter is used as the current animation object.

```

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
popobj = obj << Get Filter Column( :POP );
popobj << Select Filter Item;

```

### Single Category Display

**Syntax:** obj << Single Category Display( state=0|1 )

**Description:** Show each level and frequency count in a combo box menu.

```

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Display( :Region, "List Display" ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Single Category Display;

```

### Unstructured Text

**Syntax:** obj << Unstructured Text( state=0|1 )

**JMP Version Added:** 16

### Where

**Syntax:** obj << Where

**Description:** Select rows using an expression.

```

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Where( :Region == {"MW"} );

```

## Continuous Filter

### Clear Selection

**Syntax:** obj << Clear Selection

**Description:** Clears any selection in effect for the given column.

```

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Clear Selection;

```

### Continuous

**Syntax:** obj << Continuous( state=0|1 )

**JMP Version Added:** 16

### Delete

**Syntax:** obj << Delete

**Description:** Removes the variable from the Data Filter control panel.

```

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Delete;

```

### Extend Where

**Syntax:** obj << Extend Where

**Description:** Select rows using an expression, adding to the current selection.

```

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Extend Where( :Region == {"MW"} );

```

### Invert Selection

**Syntax:** obj << Invert Selection

**Description:** Deselects any selected values, and selects all values not previously selected, for the given column.

```

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Invert Selection;

```

### Multiple Response

**Syntax:** obj << Multiple Response( state=0|1 )

**JMP Version Added:** 16

### Nominal/Ordinal

**Syntax:** obj << Nominal/Ordinal( state=0|1 )

**JMP Version Added:** 16

### Reset Zoom

**Syntax:** obj << Reset Zoom

**Description:** Reset the min and max of the filter display to the default values.

**JMP Version Added:** 15

```

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Time Series/Air.jmp" );
gb = dt << Graph Builder(
	Size( 522, 492 ),
	Show Control Panel( 0 ),
	Variables(
		X( :month ),
		Y( :Ozone Concentration ),
		Group X( :Summer Months Intervention )
	),
	Elements( Points( X, Y, Legend( 10 ) ), Smoother( X, Y, Legend( 11 ) ) ), 
    
);
ldf = gb << Local Data Filter(
	Add Filter( columns( :date ), Where( :date >= 16Oct1965 & :date <= 31Aug1968 ) )
);
fc = ldf << Get Filter Column( :date );
fc << Zoom to Selection;
Wait( 1 );
fc << Reset Zoom;

```

### Select Filter Item

**Syntax:** obj << Select Filter Item

**Description:** Select the given filter item. The selected filter is used as the current animation object.

```

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
popobj = obj << Get Filter Column( :POP );
popobj << Select Filter Item;

```

### Select Missing

**Syntax:** obj << Select Missing

**Description:** Selects rows that contain missing values.

**JMP Version Added:** 15

```

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Location( {2098, 120} ),
	Mode( Select( 0 ), Include( 1 ) ),
	Add Filter( columns( :OZONE ), Where( :OZONE >= 0.1 & :OZONE <= 0.2 ) )
);
Wait( 1 );
ozoneobj = obj << Get Filter Column( :OZONE );
ozoneobj << Select Missing;

```

### Unstructured Text

**Syntax:** obj << Unstructured Text( state=0|1 )

**JMP Version Added:** 16

### Where

**Syntax:** obj << Where

**Description:** Select rows using an expression.

```

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Where( :Region == {"MW"} );

```

### Zoom to Selection

**Syntax:** obj << Zoom to Selection

**Description:** Set the min and max of the filter display based on the current selected interval.

**JMP Version Added:** 15

```

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Time Series/Air.jmp" );
gb = dt << Graph Builder(
	Size( 522, 492 ),
	Show Control Panel( 0 ),
	Variables(
		X( :month ),
		Y( :Ozone Concentration ),
		Group X( :Summer Months Intervention )
	),
	Elements( Points( X, Y, Legend( 10 ) ), Smoother( X, Y, Legend( 11 ) ) ), 
    
);
ldf = gb << Local Data Filter(
	Add Filter( columns( :date ), Where( :date >= 16Oct1965 & :date <= 31Aug1968 ) )
);
fc = ldf << Get Filter Column( :date );
Wait( 1 );
fc << Zoom to Selection;

```

## Multiple Response Filter

### Blocks Display

**Syntax:** obj << Blocks Display( state=0|1 )

**Description:** Show each level as a selectable block.

```

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Display( :Region, "List Display" ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Blocks Display;

```

### Check Box Display

**Syntax:** obj << Check Box Display( state=0|1 )

**Description:** Show each level with a check box, along with frequency count and bars.

```

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Display( :Region, "List Display" ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Check Box Display;

```

### Clear Find

**Syntax:** obj << Clear Find

**JMP Version Added:** 15

### Clear Selection

**Syntax:** obj << Clear Selection

**Description:** Clears any selection in effect for the given column.

```

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Clear Selection;

```

### Continuous

**Syntax:** obj << Continuous( state=0|1 )

**JMP Version Added:** 16

### Delete

**Syntax:** obj << Delete

**Description:** Removes the variable from the Data Filter control panel.

```

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Delete;

```

### Extend Where

**Syntax:** obj << Extend Where

**Description:** Select rows using an expression, adding to the current selection.

```

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Extend Where( :Region == {"MW"} );

```

### Find

**Syntax:** obj << Find(Set Text("string"), <options>)

**Description:** Provides a text box where you can enter a search string for the selected column.

**JMP Version Added:** 15

```

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Find( Set Text( "w" ) );

```

### Get Selected Items

**Syntax:** obj << Get Selected Items

**JMP Version Added:** 15

### Get Visible Items

**Syntax:** obj << Get Visible Items

**JMP Version Added:** 19

### Invert Selection

**Syntax:** obj << Invert Selection

**Description:** Deselects any selected values, and selects all values not previously selected, for the given column.

```

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Invert Selection;

```

### List Display

**Syntax:** obj << List Display( state=0|1 )

**Description:** Show each level in a list, along with frequency count and bars.

```

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Display( :Region, "Check Box Display" ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << List Display;

```

### Match All

**Syntax:** obj << Match All

**Description:** Selects rows with values that match all of the checked values.

```

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Data Filter(
	Add Filter(
		columns( :Sports ),
		Match Any( Where( :sports == {"Basketball", "Tennis"} ) )
	),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
sportsobj = obj << Get Filter Column( :Sports );
sportsobj << Match All;

```

### Match Any

**Syntax:** obj << Match Any

**Description:** Selects rows with values that match any of the checked values. By default, this option is selected.

```

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Data Filter(
	Add Filter(
		columns( :Sports ),
		Match Any( Where( :sports == {"Basketball", "Tennis"} ) )
	),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
sportsobj = obj << Get Filter Column( :Sports );
sportsobj << Match Any;

```

### Match At Least

**Syntax:** dfitem << Match At Least(n);

**Description:** Select rows with values that match at least n of the checked values.

```

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Data Filter(
	Add Filter(
		columns( :Sports ),
		Match Any( Where( :sports == {"Basketball", "Tennis"} ) )
	),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
sportsobj = obj << Get Filter Column( :Sports );
sportsobj << Match At Least( 1 );

```

### Match At Most

**Syntax:** dfitem << Match At Most(n);

**Description:** Select rows with values that match at most n of the checked values.

```

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Data Filter(
	Add Filter(
		columns( :Sports ),
		Match Any( Where( :sports == {"Basketball", "Tennis"} ) )
	),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
sportsobj = obj << Get Filter Column( :Sports );
sportsobj << Match At Most( 1 );

```

### Match Between

**Syntax:** dfitem << Match Between(n, m);

**Description:** Select rows with values that match between n and m of the checked values.

```

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Data Filter(
	Add Filter(
		columns( :Sports ),
		Match Any( Where( :sports == {"Basketball", "Tennis"} ) )
	),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
sportsobj = obj << Get Filter Column( :Sports );
sportsobj << Match Between( 1, 2 );

```

### Match Exactly

**Syntax:** obj << Match Exactly

**Description:** Selects rows with values that match exactly the checked values.

```

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Data Filter(
	Add Filter(
		columns( :Sports ),
		Match Any( Where( :sports == {"Basketball", "Tennis"} ) )
	),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
sportsobj = obj << Get Filter Column( :Sports );
sportsobj << Match Exactly;

```

### Match None

**Syntax:** obj << Match None

**Description:** Selects rows with values that match none of the checked values.

```

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Data Filter(
	Add Filter(
		columns( :Sports ),
		Match Any( Where( :sports == {"Basketball", "Tennis"} ) )
	),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
sportsobj = obj << Get Filter Column( :Sports );
sportsobj << Match None;

```

### Match Only

**Syntax:** obj << Match Only

**Description:** Select rows with values that match only the checked value.

```

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Data Filter(
	Add Filter(
		columns( :Sports ),
		Match Any( Where( :sports == {"Basketball", "Tennis"} ) )
	),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
sportsobj = obj << Get Filter Column( :Sports );
sportsobj << Match Only;

```

### Multiple Response

**Syntax:** obj << Multiple Response( state=0|1 )

**JMP Version Added:** 16

### Nominal/Ordinal

**Syntax:** obj << Nominal/Ordinal( state=0|1 )

**JMP Version Added:** 16

### Order By Count

**Syntax:** obj << Order By Count( state=0|1 )

**Description:** Orders the values in decreasing sort order by count.

**JMP Version Added:** 15

```

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Order by Count;

```

### Radio Box Display

**Syntax:** obj << Radio Box Display( state=0|1 )

**Description:** Show each level with a radio box, along with frequency count and bars.

**JMP Version Added:** 15

```

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Display( :Region, "List Display" ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Radio Box Display;

```

### Select Filter Item

**Syntax:** obj << Select Filter Item

**Description:** Select the given filter item. The selected filter is used as the current animation object.

```

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
popobj = obj << Get Filter Column( :POP );
popobj << Select Filter Item;

```

### Single Category Display

**Syntax:** obj << Single Category Display( state=0|1 )

**Description:** Show each level and frequency count in a combo box menu.

```

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Display( :Region, "List Display" ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Single Category Display;

```

### Unstructured Text

**Syntax:** obj << Unstructured Text( state=0|1 )

**JMP Version Added:** 16

### Where

**Syntax:** obj << Where

**Description:** Select rows using an expression.

```

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Where( :Region == {"MW"} );

```

## Unstructured Text Filter

### Add Missing

**Syntax:** obj << Add Missing

**Description:** Add a missing value as a selectable option for unstructured text.

**JMP Version Added:** 16

```

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Graph Builder(
	Show Control Panel( 0 ),
	Variables( X( :sibling ages ) ),
	Elements( Bar( X, Legend( 3 ) ) )
);
df = obj << Local Data Filter(
	Add Filter(
		columns( :reported illnesses ),
		Unstructured Text( Column( :reported illnesses ), Add Filter Text( "head" ) ),
		Match Any( Where( Contains( :reported illnesses, "head" ) ) ),

	)
);
Wait( 1 );
illness_obj = df << Get Filter Column( :reported illnesses );
illness_obj << Add Missing;

```

### Blocks Display

**Syntax:** obj << Blocks Display( state=0|1 )

**Description:** Show each level as a selectable block.

```

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Display( :Region, "List Display" ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Blocks Display;

```

### Check Box Display

**Syntax:** obj << Check Box Display( state=0|1 )

**Description:** Show each level with a check box, along with frequency count and bars.

```

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Display( :Region, "List Display" ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Check Box Display;

```

### Clear Filter Texts List

**Syntax:** obj << Clear Filter Texts List

**Description:** Clear the list of filters for an unstructured text filter item.

**JMP Version Added:** 16

```

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Graph Builder(
	Show Control Panel( 0 ),
	Variables( X( :sibling ages ) ),
	Elements( Bar( X, Legend( 3 ) ) )
);
df = obj << Local Data Filter(
	Add Filter(
		columns( :reported illnesses ),
		Unstructured Text( Column( :reported illnesses ), Add Filter Text( "head" ) ),
		Match Any( Where( Contains( :reported illnesses, "head" ) ) ),

	)
);
Wait( 1 );
illness_obj = df << Get Filter Column( :reported illnesses );
illness_obj << Clear Filter Texts List;

```

### Clear Selection

**Syntax:** obj << Clear Selection

**Description:** Clears any selection in effect for the given column.

```

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Clear Selection;

```

### Continuous

**Syntax:** obj << Continuous( state=0|1 )

**JMP Version Added:** 16

### Delete

**Syntax:** obj << Delete

**Description:** Removes the variable from the Data Filter control panel.

```

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Delete;

```

### Extend Where

**Syntax:** obj << Extend Where

**Description:** Select rows using an expression, adding to the current selection.

```

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Extend Where( :Region == {"MW"} );

```

### Get Selected Items

**Syntax:** obj << Get Selected Items

**JMP Version Added:** 15

### Get Visible Items

**Syntax:** obj << Get Visible Items

**JMP Version Added:** 19

### Invert Selection

**Syntax:** obj << Invert Selection

**Description:** Deselects any selected values, and selects all values not previously selected, for the given column.

```

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Invert Selection;

```

### List Display

**Syntax:** obj << List Display( state=0|1 )

**Description:** Show each level in a list, along with frequency count and bars.

```

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Display( :Region, "Check Box Display" ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << List Display;

```

### Match All

**Syntax:** obj << Match All

**Description:** Selects rows with values that match all of the checked values.

```

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Data Filter(
	Add Filter(
		columns( :Sports ),
		Match Any( Where( :sports == {"Basketball", "Tennis"} ) )
	),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
sportsobj = obj << Get Filter Column( :Sports );
sportsobj << Match All;

```

### Match Any

**Syntax:** obj << Match Any

**Description:** Selects rows with values that match any of the checked values. By default, this option is selected.

```

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Data Filter(
	Add Filter(
		columns( :Sports ),
		Match Any( Where( :sports == {"Basketball", "Tennis"} ) )
	),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
sportsobj = obj << Get Filter Column( :Sports );
sportsobj << Match Any;

```

### Match At Least

**Syntax:** dfitem << Match At Least(n);

**Description:** Select rows with values that match at least n of the checked values.

```

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Data Filter(
	Add Filter(
		columns( :Sports ),
		Match Any( Where( :sports == {"Basketball", "Tennis"} ) )
	),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
sportsobj = obj << Get Filter Column( :Sports );
sportsobj << Match At Least( 1 );

```

### Match At Most

**Syntax:** dfitem << Match At Most(n);

**Description:** Select rows with values that match at most n of the checked values.

```

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Data Filter(
	Add Filter(
		columns( :Sports ),
		Match Any( Where( :sports == {"Basketball", "Tennis"} ) )
	),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
sportsobj = obj << Get Filter Column( :Sports );
sportsobj << Match At Most( 1 );

```

### Match Between

**Syntax:** dfitem << Match Between(n, m);

**Description:** Select rows with values that match between n and m of the checked values.

```

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Data Filter(
	Add Filter(
		columns( :Sports ),
		Match Any( Where( :sports == {"Basketball", "Tennis"} ) )
	),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
sportsobj = obj << Get Filter Column( :Sports );
sportsobj << Match Between( 1, 2 );

```

### Match Exactly

**Syntax:** obj << Match Exactly

**Description:** Selects rows with values that match exactly the checked values.

```

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Data Filter(
	Add Filter(
		columns( :Sports ),
		Match Any( Where( :sports == {"Basketball", "Tennis"} ) )
	),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
sportsobj = obj << Get Filter Column( :Sports );
sportsobj << Match Exactly;

```

### Match None

**Syntax:** obj << Match None

**Description:** Selects rows with values that match none of the checked values.

```

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Data Filter(
	Add Filter(
		columns( :Sports ),
		Match Any( Where( :sports == {"Basketball", "Tennis"} ) )
	),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
sportsobj = obj << Get Filter Column( :Sports );
sportsobj << Match None;

```

### Match Only

**Syntax:** obj << Match Only

**Description:** Select rows with values that match only the checked value.

```

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Data Filter(
	Add Filter(
		columns( :Sports ),
		Match Any( Where( :sports == {"Basketball", "Tennis"} ) )
	),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
sportsobj = obj << Get Filter Column( :Sports );
sportsobj << Match Only;

```

### Multiple Response

**Syntax:** obj << Multiple Response( state=0|1 )

**JMP Version Added:** 16

### Nominal/Ordinal

**Syntax:** obj << Nominal/Ordinal( state=0|1 )

**JMP Version Added:** 16

### Order By Count

**Syntax:** obj << Order By Count( state=0|1 )

**Description:** Orders the values in decreasing sort order by count.

**JMP Version Added:** 15

```

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Order by Count;

```

### Radio Box Display

**Syntax:** obj << Radio Box Display( state=0|1 )

**Description:** Show each level with a radio box, along with frequency count and bars.

**JMP Version Added:** 15

```

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Display( :Region, "List Display" ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Radio Box Display;

```

### Select Filter Item

**Syntax:** obj << Select Filter Item

**Description:** Select the given filter item. The selected filter is used as the current animation object.

```

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
popobj = obj << Get Filter Column( :POP );
popobj << Select Filter Item;

```

### Show Filter Text Edit Box

**Syntax:** obj << Show Filter Text Edit Box( state=0|1 )

**Description:** Show or hide the text edit box for defining text filter conditions.

**JMP Version Added:** 16

```

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Graph Builder(
	Show Control Panel( 0 ),
	Variables( X( :sibling ages ) ),
	Elements( Bar( X, Legend( 3 ) ) )
);
df = obj << Local Data Filter(
	Add Filter(
		columns( :reported illnesses ),
		Unstructured Text( Column( :reported illnesses ), Add Filter Text( "head" ) ),
		Match Any( Where( Contains( :reported illnesses, "head" ) ) ),

	)
);
Wait( 1 );
illness_obj = df << Get Filter Column( :reported illnesses );
illness_obj << Show Filter Text Edit Box( 0 );

```

### Single Category Display

**Syntax:** obj << Single Category Display( state=0|1 )

**Description:** Show each level and frequency count in a combo box menu.

```

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Display( :Region, "List Display" ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Single Category Display;

```

### Unstructured Text

**Syntax:** obj << Unstructured Text( state=0|1 )

**JMP Version Added:** 16

### Where

**Syntax:** obj << Where

**Description:** Select rows using an expression.

```

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Where( :Region == {"MW"} );

```

### Add Favorites

**Syntax:** obj << Add Favorites( name or string )

**Description:** Associate the current filter selection with the given name and save into the favorites list

**Example 1**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
df = dt << Data Filter(
	Add Filter(
		columns( :age, :sex, :height, :weight ),
		Where( :sex == "F" ),
		Where( :height >= 55 & :height <= 65 )
	),
	Mode( Select )
);
Wait( 1 );
fav1 = df << add favorites( "FemaleAverageHt" );

```

**Example 2**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
df = dt << Data Filter(
	Add Filter( columns( :age, :sex, :height, :weight ), Where( :sex == "F" ) ),
	Mode( Select )
);
Wait( 1 );
fav1 = df << add favorites();
Show( fav1 );

```

### Add Filter

**Syntax:** obj << Add Filter( columns( column, ... ), <Where( clause )> )

**Description:** Add one or more filter columns in a new OR group.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter();
obj << Add Filter( columns( :POP ) );
obj << Add Filter(
	columns( :Region, :State, :City ),
	Where( :Region == "S" ),
	Where( :State == {"SC", "NC"} )
);

```

### Add Filter Columns

**Syntax:** obj << Add Filter Columns( Add Filter Columns( column ) )

**Description:** Add one or more filter columns.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
obj << Add Filter Columns( :State );

```

### Animation

**Syntax:** obj << Animation( <Animate Column( column )>, <Animate Rate( number )>, <Forward|Backward|Bounce> )

**Description:** Cycles through the sorted values of specified column selecting and deselecting rows.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
obj << Columns( :Region );
obj << Animation( Animate Column( :Region ), Bounce );
//Now press the play button.

```

### Apply Favorites

**Syntax:** obj << Apply Favorites( name or string )

**Description:** Apply the filter selection as saved in the named favorites to the data filter.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
df = dt << Data Filter(
	Add Filter(
		columns( :age, :sex, :height, :weight ),
		Where( :sex == "F" ),
		Where( :height >= 55 & :height <= 65 )
	),
	Mode( Select )
);
a = "FemaleAverageHt";
b = "Female";
df << add favorites( a );
df << Match( Where( :sex == "F" ) );
df << add favorites( b );
Wait( 1 );
df << apply favorites( "FemaleAverageHt" );

```

### Auto clear

**Syntax:** obj << Auto clear( state=0|1 )

**Description:** Clears all currently selected rows prior to setting a new selection when filtering.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Data Filter;
obj << Auto Clear( 1 );
obj << Add Filter( columns( :age, :sex ), Where( :age == {13, 14} ) );
Wait( 1 );
obj << (filter column( :sex ) << Where( :sex == "M" ));

```

### Clear

**Syntax:** obj << Clear

**Description:** Clears the currently selected rows.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter;
obj << Add Filter( Columns( :Region ), Where( :Region == "N" ) );
Wait( 1 );
obj << Clear;

```

### Clear Selection

**Syntax:** obj << Clear Selection

**Description:** Clear the selection for this column filter.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter( Add( Filter Columns( :Region ), Where( :Region = {"N", "S"} ) ) );
Wait( 1 );
obj << (Filter Column( :Region ) << Clear Selection);

```

### Close

**Syntax:** obj << Close

**Description:** Closes the data filter.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
obj << Close;

```

### Conditional

**Syntax:** obj << Conditional( state=0|1 )

**Description:** The option flags whether the categorical columns filters are conditionally ordered. Selecting a category will limit the categories of the next column filter only to those that are in the selected category.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/SATByYear.jmp" );
obj = dt << Data Filter( Add Filter( columns( :Region, :State ) ) );
obj << (Filter Column( :Region ) << Where( :Region == {"South"} ));
Wait( 1 );
obj << conditional( 1 );

```

### Copy Local Data Filter

**Syntax:** obj << Copy Local Data Filter

**Description:** Copy the script for the local data filter to the clipboard.

**JMP Version Added:** 16

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

### Copy Script

**Syntax:** obj << Copy Script

**Description:** Create a JSL script to produce the filter window and put it on the clipboard.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
obj << Copy Script;

```

### Count Excluded Rows

**Syntax:** obj << Count Excluded Rows( state=0|1 )

**Description:** If the option is cleared, the column values and counts in the data filter will not include rows with excluded row states in the data table.

**JMP Version Added:** 14

**Example 1**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Data Filter(
	Mode( Select( 0 ), Show( 1 ), Include( 1 ) ),
	Add Filter( columns( :sex ), Where( :sex == "F" ) )
);
Distribution(
	Automatic Recalc( 1 ),
	Continuous Distribution( Column( :weight ) ),
	Local Data Filter(
		Count Excluded Rows( 0 ),
		Add Filter( columns( :age ), Where( :age == 12 ) )
	)
);

```

**Example 2**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Data Filter(
	Mode( Select( 0 ), Show( 1 ), Include( 1 ) ),
	Add Filter( columns( :sex ), Where( :sex == "F" ) )
);
New Window( "Hierarchical Data Filter",
	V List Box(
		Data Filter Context Box(
			H List Box(
				Filter Ref Sub 1 = dt << Data Filter(
					Local,
					Add Filter( columns( :age ), Where( :age == 12 ) )
				),
				Platform( Current Data Table(), Distribution( Column( :weight ) ) )
			)
		),
		Data Filter Context Box(
			H List Box(
				Filter Ref Sub 2 = dt << Data Filter(
					Local,
					Count Excluded Rows( 0 ),
					Add Filter( columns( :age ), Where( :age == 12 ) )
				),
				Platform( Current Data Table(), Distribution( Column( :weight ) ) )
			)
		)
	)
);

```

### Data Filter

**Syntax:** Data Filter( <local>, <invisible>, <Add Filter>, <Mode>, <Show Window(0 | 1)>, <no outline box(0 | 1)> )

**Description:** Creates or shows a Data Filter, where you interactively select complex subsets of data. The Mode option determines which row states are affected by selection in the filter. The Add Filter command will add a filter group with the given Columns and Where clauses. When multiple filter groups are present, the combined behavior is determined by the Group By AND option. If the Local keyword is given, the filter can be embedded in a report to filter one or more platforms without affecting other reports.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);

```

### Data Table Window

**Syntax:** obj << Data Table Window

**Description:** Show the data table used for this filter dialog.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
obj << Data Table Window;

```

### Delete

**Syntax:** obj << Delete( {column(s)} )

**Description:** Deletes the specified columns with existing filters in the data filter.

**Example 1**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
obj << Columns( :Region, :SO2, :CO, :State );
Wait( 1 );
obj << Delete( {:State} );

```

**Example 2**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
obj << Columns( :Region, :SO2, :CO, :State );
Wait( 1 );
obj << (Filter Column( :State ) << delete);

```

### Delete All

**Syntax:** obj << Delete All

**Description:** Deletes all existing filters in the data filter.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
obj << Columns( :Region, :SO2, :CO, :State );
Wait( 2 );
obj << Delete All;

```

### Display

**Syntax:** obj << Display( column, <Invisible(0 | 1)>, <options> )

**Description:** Changes the way the column levels are displayed in the filter. Categorical columns support a display type option of "Blocks Display", "List Display", "Single Category Display", "Check Box Display", or "Radio Box Display". Option NItems(n) will set the number of visible items in a scrollable view. Continuous columns support options of NBins(n) and Height(h).

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
obj << Display( :Region, N Items( 4 ) );

```

### Extend Where

**Syntax:** obj << Extend Where

**Description:** Extend the selection based on the given criterion for this column filter.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter( Add( Filter Columns( :Region ), Where( :Region = {"N", "S"} ) ) );
Wait( 1 );
obj << (Filter Column( :Region ) << Extend Where( :Region = "W" ));

```

### Filter Column

**Syntax:** obj << Filter Column( column(s) )

**Description:** Add a filter column.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
obj << Filter Column( :State );

```

### Filter Columns

**Syntax:** obj << Filter Columns( column(s) )

**Description:** Add one or more filter columns.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
obj << Filter Columns( :State, :OZONE );

```

### Filter Group

**Syntax:** obj << Filter Group( column(s) )

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);

```

### Get Data Table

**Syntax:** obj << Get Data Table

**Description:** Returns the data table associated with the filter.

**JMP Version Added:** 17

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionfilter = obj << Get Data Table();

```

### Get Filter Column

**Syntax:** obj << Get Filter Column( column, <index> )

**Description:** Returns the filter column object for the named column. If the same column is used multiple times, the index argument will return the specified occurrence

**JMP Version Added:** 15

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionfilter = obj << Get Filter Column( :Region );
regionfilter << Invert Selection;

```

### Get Filtered Rows

**Syntax:** obj << Get Filtered Rows

**Description:** Returns a matrix of row numbers that satisfy the current filter conditions.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
obj << Get Filtered Rows;

```

### Get Script

**Syntax:** obj << Get Script

**Description:** Get the data filter script as text.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
txt = obj << Get Script;
Show( txt );

```

### Get where clause

**Syntax:** obj << Get where clause

**Description:** Get the descriptive text for the filter selection.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter( Add( Filter Columns( :Region, :Lead ) ) );
Wait( 1 );
obj << (Filter Column( :Lead ) << Where( :Lead >= .4 & :Lead <= 1.4 ));
txt = obj << get where clause;

```

### Grouped by AND

**Syntax:** obj << Grouped by AND( state=0|1 )

**Description:** Groups of filter items are joined by AND

### Inverse

**Syntax:** obj << Inverse( state=0|1 )

**Description:** Inverts the current selection state of the rows in the data table.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
obj << Inverse( 1 );

```

### Invert Selection

**Syntax:** obj << Invert Selection

**Description:** Invert the selection for this column filter.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter( Add( Filter Columns( :Region ), Where( :Region = {"N", "S"} ) ) );
Wait( 1 );
obj << (Filter Column( :Region ) << invert selection);

```

### Make Filter Change Handler

**Syntax:** rs = df << Make Filter Change Handler(function(a) );

**Description:** Creates a data filter handler to handle notification that the filter has changed. The number of rows filtered is returned in the argument to the function.

**JMP Version Added:** 14

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Automatic Recalc( 1 ), Continuous Distribution( Column( :POP ) ) );
filter = dist << Local Data Filter( Add Filter( columns( :Region ) ) );
f = Function( {a}, Print( a ) );
rs = filter << Make Filter Change Handler( f );

```

### Match

**Syntax:** obj << Match( Filter Columns(:a, :b, :c, ...), where( conditions ) )

**Description:** Sets the filter conditions for each group.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :BP 8W, :BP 6M ) ),
	Add Filter( columns( :BP 12M ) )
);
Wait( 1 );
obj << Match( Filter Columns( :BP 8W, :BP 6M ), Where( :BP 8W > 174.8 & :BP 8W < 184.2 ) );
obj << Match( Filter Columns( :BP 12M ), Where( :BP 12M > 181.9 & :BP 12M < 192.1 ) );

```

### Mode

**Syntax:** obj << Mode( Select|Show|Include (state = 0|1) )

**Description:** Sets the action or mode used when selecting rows through the data filter.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter;
obj << Mode( Include( 1 ), Select( 0 ), Show( 0 ) );
obj << Add Filter( Columns( :Region ), Where( :Region == "N" ) );

```

### On Clear

**Syntax:** obj << On Clear

**Description:** Set a script or function to be executed after the filter is cleared.

```

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Data Filter;
df = obj << Add Filter( columns( :age, :sex ), Where( :age == {13, 14} ) );
obj << OnClear( Function( {}, df << Mode( Include( 0 ), Select( 1 ), Show( 0 ) ) ) );
Wait( 1 );
df << Mode( Include( 1 ), Select( 0 ), Show( 0 ) );

```

### Remove Favorites

**Syntax:** obj << Remove Favorites( name or string )

**Description:** Remove the named favorites from the favorites list

**Example 1**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
df = dt << Data Filter(
	Add Filter(
		columns( :age, :sex, :height, :weight ),
		Where( :sex == "F" ),
		Where( :height >= 55 & :height <= 65 )
	),
	Mode( Select )
);
df << add favorites( "FemaleAverageHt" );
df << Match( Where( :sex == "F" ) );
df << add favorites( "Female" );
Wait( 1 );
df << remove favorites( "FemaleAverageHt" );

```

**Example 2**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
df = dt << Data Filter(
	Add Filter(
		columns( :age, :sex, :height, :weight ),
		Where( :sex == "F" ),
		Where( :height >= 55 & :height <= 65 )
	),
	Mode( Select )
);
df << add favorites( "FemaleAverageHt" );
df << Match( Where( :sex == "F" ) );
df << add favorites( "Female" );
Wait( 1 );
df << remove favorites();

```

### Report

**Syntax:** obj << Report

**Description:** Returns a reference to the report object.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
obj << Add Filter( columns( :POP ) );
obj << Add Filter(
	columns( :Region, :State, :City ),
	Where( :Region == "S" ),
	Where( :State == {"SC", "NC"} )
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Save Script to Data Table

**Syntax:** obj << Save Script to Data Table

**Description:** Create a JSL script to produce the filter window and save it as a table property in the data table.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
obj << Save Script to Data Table;

```

### Save Script to Journal

**Syntax:** obj << Save Script to Journal

**Description:** Create a JSL script to produce the filter window and add a Button to the journal containing this script.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
obj << Save Script to Journal;

```

### Save Script to Script Window

**Syntax:** obj << Save Script to Script Window

**Description:** Create a JSL script to produce the filter window and append it to the current Script text window.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
obj << Save Script to Script Window;

```

### Save Where Clause to Clipboard

**Syntax:** obj << Save Where Clause to Clipboard

**Description:** Create the WHERE clause from the filter criteria and put it on the clipboard.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter;
obj << Add Filter( Columns( :Lead ), Where( :Lead >= .4 & :Lead <= 2.0 ) );
obj << Save Where Clause To Clipboard;

```

### Save Where Clause to Data Table

**Syntax:** obj << Save Where Clause to Data Table

**Description:** Create a WHERE clause from the filter criteria and save it as a table property in the data table.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter;
obj << Add Filter( Columns( :Lead ), Where( :Lead >= .4 & :Lead <= 2.0 ) );
obj << Save Where Clause To Data Table;

```

### Save Where Clause to Formula Column

**Syntax:** obj << Save Where Clause to Formula Column

**Description:** Create an indicator column that has a formula equivalent to the filter criteria. Rows satisfying the filer criteria will have a value of 1, and all other rows will have a value of 0.

**JMP Version Added:** 15

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter;
obj << Add Filter( Columns( :Lead ), Where( :Lead >= .4 & :Lead <= 2.0 ) );
obj << Save Where Clause To Formula Column;

```

### Save Where Clause to Journal

**Syntax:** obj << Save Where Clause to Journal

**Description:** Create the WHERE clause from the filter criteria and append it to the journal.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter;
obj << Add Filter( Columns( :Lead ), Where( :Lead >= .4 & :Lead <= 2.0 ) );
obj << Save Where Clause To Journal;

```

### Save Where Clause to Row State Column

**Syntax:** obj << Save Where Clause to Row State Column

**Description:** Create a row state column that has a formula equivalent to the filter criteria.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter;
obj << Add Filter( Columns( :Lead ), Where( :Lead >= .4 & :Lead <= 2.0 ) );
obj << Save Where Clause To Row State Column;

```

### Save Where Clause to Script Window

**Syntax:** obj << Save Where Clause to Script Window

**Description:** Create a WHERE clause from the filter criteria and append it to the current Script text window.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter;
obj << Add Filter( Columns( :Lead ), Where( :Lead >= .4 & :Lead <= 2.0 ) );
obj << Save Where Clause To Script Window;

```

### Save and restore current row states

**Syntax:** obj << Save and restore current row states( state=0|1 )

**Description:** Save the current row states for the data table, then restores those states upon closing the data filter.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Save and Restore Current Row States( 1 ),
	Add Filter( Columns( :Region ), Where( :Region == "N" ) )
);
Wait( 1 );
obj << Close;

```

### Select Missing

**Syntax:** obj << Select Missing( state=0|1 )

**Description:** Add the missing rows to the selection for this continuous column filter.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter( Add( Filter Columns( :CO ), Where( :CO >= 9 & :CO < 15 ) ) );
Wait( 1 );
obj << (Filter Column( :CO ) << Select Missing);

```

### Set Include

**Syntax:** obj << Set Include( state=0|1 )

**Description:** Check the uncheck the include mode.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Data Filter( Add Filter( columns( :age, :sex ) ) );
obj << set Include( 1 );
Wait( 1 );
obj << set Include( 0 );

```

### Set Select

**Syntax:** obj << Set Select( state=0|1 )

**Description:** Check or uncheck the select mode.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Data Filter( Add Filter( columns( :age, :sex ) ) );
obj << set select( 1 );
Wait( 1 );
obj << set select( 0 );

```

### Set Show

**Syntax:** obj << Set Show( state=0|1 )

**Description:** Check the uncheck the show mode.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Data Filter( Add Filter( columns( :age, :sex ) ) );
obj << set Show( 1 );
Wait( 1 );
obj << set Show( 0 );

```

### Show Controls

**Syntax:** obj << Show Controls( state=0|1 )

**Description:** Show or hide the controls for modifying the data filter options.

**JMP Version Added:** 16

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
obj << Show Controls( 0 );

```

### Show Counts

**Syntax:** obj << Show Counts( state=0|1 )

**JMP Version Added:** 16

### Show Histograms and Bars

**Syntax:** obj << Show Histograms and Bars( state=0|1 )

**Description:** Show Histograms and Bars for filter columns where available

**JMP Version Added:** 15

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) )
);
Wait( 1 );
obj << Show Histograms and Bars( 0 );

```

### Show Modes

**Syntax:** obj << Show Modes( state=0|1 )

**Description:** Show or hide the controls for changing the mode of the data filter, which controls the select/show/include behavior of the data filter.

**JMP Version Added:** 16

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
obj << Show Modes( 0 );

```

### Show Subset

**Syntax:** obj << Show Subset

**Description:** Show the filtered data in a separate data table window.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter;
obj << Add Filter( Columns( :Region ), Where( :Region == "N" ) );
obj << Show Subset;

```

### Stretch Width

**Syntax:** obj << Stretch Width( "Manual" | "Window" )

**Description:** Sets the horizontal stretching behavior of the filter. By default, the filter width can be changed manually. If set to "Window", the width gets larger or smaller with the window size.

**JMP Version Added:** 19

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Shared Local Filter",
	Data Filter Context Box(
		H Splitter Box(
			Size( 1200, 500 ),
			V Scroll Box(
				dt << Data Filter(
					Local,
					Stretch Width( "Window" ),
					Add Filter( columns( :sex ), Where( :sex == "F" ) )
				),
				<<Set Stretch( "Off", "Fill" )
			),
			H Splitter Box(
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

				),

			)
		)
	)
);

```

### Title

**Syntax:** obj << Title

### Unstructured Text

**Syntax:** obj << Unstructured Text

**JMP Version Added:** 16

### Use Floating Window

**Syntax:** obj << Use Floating Window( state=0|1 )

**Description:** Toggle whether this data filter uses a window that floats above its data table and associated windows, or uses a window that can be arranged with other windows normally.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter;
obj << Use Floating Window;

```

### Where

**Syntax:** obj << Where

**Description:** Select the rows based on the given criterion for this column filter.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter( Add( Filter Columns( :Region, :Lead ) ) );
Wait( 1 );
obj << (Filter Column( :Lead ) << Where( :Lead >= .4 & :Lead <= 1.4 ));

```

### columns

**Syntax:** obj << columns( columns )

**Description:** Add filter columns. It is alternative command to add filter columns.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
obj << Columns( :Region, :SO2, :CO, :State );

```

