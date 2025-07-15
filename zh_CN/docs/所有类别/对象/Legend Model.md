# Legend Model



## 项消息

### Get Fill Color

**语法:** obj &lt;&lt; Get Fill Color

**说明:** 返回图形中链接至显示段的图例模型项的填充颜色。

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ), Overlay( :sex ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Ellipse( X, Y, Legend( 3 ) ) )
);
server = gb << Get Legend Server;
item = server << Get Legend Item( 3, 1 );
Show( item << Get Fill Color );

```

### Get Gradient Settings

**语法:** obj &lt;&lt; Get Gradient Settings

**说明:** 返回链接至图形中的显示段的图例模型项的渐变设置列表。

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ), Color( :weight ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) )
);
server = gb << Get Legend Server;
item = server << Get Legend Item( 1, 1 );
Print( item << Get Gradient Settings );

```

### Get Label

**语法:** obj &lt;&lt; Get Label

**说明:** 返回图例模型项的标签。

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ), Overlay( :sex ), Color( :age ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) )
);
server = gb << Get Legend Server;
item = server << Get Legend Item( 2, 1 );
Print( item << Get Label );

```

### Get Marker Size Settings

**语法:** obj &lt;&lt; Get Marker Size Settings

**说明:** 返回图形中链接至显示段的图例模型项的标记大小设置列表。

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ), Size( :height ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) )
);
server = gb << Get Legend Server;
item = server << Get Legend Item( 1, 1 );
Print( item << Get Marker Size Settings );

```

### Get Pen Settings

**语法:** obj &lt;&lt; Get Pen Settings

**说明:** 返回图形中链接至显示段的图例模型项的画笔设置列表。

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ), Overlay( :sex ), Color( :age ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) )
);
server = gb << Get Legend Server;
item = server << Get Legend Item( 1, 7 );
Print( item << Get Pen Settings );

```

### Get Type

**语法:** obj &lt;&lt; Get Type

**说明:** 返回图例模型项的类型。类型为:“None”、“Marker”、“H Line”、“V Line”、“Step”、“Bar”、“V Box Plot”、“H Interva”、“V Interval”、“H Bar Box Plot”、“V Bar Box Plot”、“OHLC Plot”、“H Box Plot”、“Gradient”、“Density Gradient”、“Fill and Line”、“Marker Size”、“Line Size”、“Gradient Line”、“Gradient Contour”、“Mark Color”、“Marker Size Categorical”、“Cell Size”。

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ), Overlay( :sex ), Color( :age ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) )
);
server = gb << Get Legend Server;
item = server << Get Legend Item( 2, 1 );
Print( item << Get Type );

```

### Set Label

**语法:** obj &lt;&lt; Set Label( text )

**说明:** 设置链接至图形中的显示段的图例模型项的标签。

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ), Overlay( :sex ), Color( :age ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) )
);
server = gb << Get Legend Server;
items = server << Get Legend Items;
For Each( {item, index}, items[1], item << Set Label( "Item " || Char( index ) ) );

```

### Set Properties

**语法:** obj &lt;&lt; Set Properties

**说明:** 设置链接至图形中的显示段的图例模型项的任意显示属性。

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ), Size( :height ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) )
);
server = gb << Get Legend Server;
item = server << Get Legend Item( 1, 1 );
item << Set Properties(
	{Marker Size( 5 ), Marker Scale( {Marker Size Minimum( "Dot" ), Style( "Nested Full" )} )
	}
);

```

