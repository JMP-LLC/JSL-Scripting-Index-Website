# Legend Model



## Item Messages

### Get Fill Color

**Syntax:** obj &lt;&lt; Get Fill Color

**Description:** Returns the fill color of the Legend Model Item which is linked to a Display Seg in the graph.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Variables( X( :height ), Y( :weight ), Overlay( :sex ) ),	Elements( Points( X, Y, Legend( 1 ) ), Ellipse( X, Y, Legend( 3 ) ) ));server = gb << Get Legend Server;item = server << Get Legend Item( 3, 1 );Show( item << Get Fill Color );

```

### Get Gradient Settings

**Syntax:** obj &lt;&lt; Get Gradient Settings

**Description:** Returns a list of Gradient Settings for the Legend Model Item which is linked to a Display Seg in the graph.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Variables( X( :height ), Y( :weight ), Color( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ));server = gb << Get Legend Server;item = server << Get Legend Item( 1, 1 );Print( item << Get Gradient Settings );

```

### Get Label

**Syntax:** obj &lt;&lt; Get Label

**Description:** Returns the label of the Legend Model Item.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Variables( X( :height ), Y( :weight ), Overlay( :sex ), Color( :age ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ));server = gb << Get Legend Server;item = server << Get Legend Item( 2, 1 );Print( item << Get Label );

```

### Get Marker Size Settings

**Syntax:** obj &lt;&lt; Get Marker Size Settings

**Description:** Returns a list of Marker Size Settings for the Legend Model Item which is linked to a Display Seg in the graph.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Variables( X( :height ), Y( :weight ), Size( :height ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ));server = gb << Get Legend Server;item = server << Get Legend Item( 1, 1 );Print( item << Get Marker Size Settings );

```

### Get Pen Settings

**Syntax:** obj &lt;&lt; Get Pen Settings

**Description:** Returns a list of Pen Settings for the Legend Model Item which is linked to a Display Seg in the graph.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Variables( X( :height ), Y( :weight ), Overlay( :sex ), Color( :age ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ));server = gb << Get Legend Server;item = server << Get Legend Item( 1, 7 );Print( item << Get Pen Settings );

```

### Get Type

**Syntax:** obj &lt;&lt; Get Type

**Description:** Returns the type of the Legend Model Item. Types are: "None", "Marker", "H Line", "V Line", "Step", "Bar", "V Box Plot", "H Interval", "V Interval", "H Bar Box Plot", "V Bar Box Plot", "OHLC Plot", "H Box Plot",Gradient", "Density Gradient", "Fill and Line", "Marker Size", "Line Size", Gradient Line", "Gradient Contour", "Mark Color", "Marker Size Categorical", "Cell Size".

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Variables( X( :height ), Y( :weight ), Overlay( :sex ), Color( :age ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ));server = gb << Get Legend Server;item = server << Get Legend Item( 2, 1 );Print( item << Get Type );

```

### Set Label

**Syntax:** obj &lt;&lt; Set Label( text )

**Description:** Sets the label for the Legend Model Item which is linked to a Display Seg in the graph.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Variables( X( :height ), Y( :weight ), Overlay( :sex ), Color( :age ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ));server = gb << Get Legend Server;items = server << Get Legend Items;For Each( {item, index}, items[1], item << Set Label( "Item " || Char( index ) ) );

```

### Set Properties

**Syntax:** obj &lt;&lt; Set Properties

**Description:** Set arbitrary display properties for the Legend Model Item which is linked to a Display Seg in the graph.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Variables( X( :height ), Y( :weight ), Size( :height ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ));server = gb << Get Legend Server;item = server << Get Legend Item( 1, 1 );item << Set Properties(	{Marker Size( 5 ), Marker Scale( {Marker Size Minimum( "Dot" ), Style( "Nested Full" )} )	});

```

