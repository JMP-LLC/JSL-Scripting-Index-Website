# Legend Item



## Item Messages

### Get Label

**Syntax:** obj << Get Label

**Description:** Returns the label of the legend item.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ), Overlay( :sex ), Color( :age ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) )
);
lgnd = gb << Get Legend Display;
item = lgnd << Get Item( 2, 1 );
Print( item << Get Label );

```

### Get Position

**Syntax:** obj << Get Position

**Description:** Returns the sequential position of an item in the legend, or a negative code if it is not displayed. Codes: -1 = Hidden by User, -2 = Hidden by If Display, -3 = Hidden By Dependency, -4 = Hidden By Initial Setting

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ), Overlay( :sex ), Color( :age ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) )
);
lgnd = gb << Get Legend Display;
item = lgnd << Get Item( 2, 1 );
Print( item << Get Position );

```

### Get Type

**Syntax:** obj << Get Type

**Description:** Returns the type of the legend item. Types are: "None", "Marker", "H Line", "V Line", "Step", "Bar", "V Box Plot", "H Interval", "V Interval", "H Bar Box Plot", "V Bar Box Plot", "OHLC Plot", "H Box Plot",Gradient", "Density Gradient", "Fill and Line", "Marker Size", "Line Size", Gradient Line", "Gradient Contour", "Mark Color", "Marker Size Categorical", "Cell Size".

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ), Overlay( :sex ), Color( :age ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) )
);
lgnd = gb << Get Legend Display;
item = lgnd << Get Item( 2, 1 );
Print( item << Get Type );

```

### Set Label

**Syntax:** obj << Set Label( text )

**Description:** Sets the label of an item in the legend.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ), Overlay( :sex ), Color( :age ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) )
);
lgnd = gb << Get Legend Display;
item = lgnd << Get Item( 2, 1 );
item << Set Label( "Label Set Through Script" );

```

### Set Visible

**Syntax:** obj << Set Visible( state=0|1 )

**Description:** Sets the visibility of an item in the legend.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ), Overlay( :sex ), Color( :age ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) )
);
lgnd = gb << Get Legend Display;
item = lgnd << Get Item( 2, 1 );
item << Set Visible( 0 );

```

