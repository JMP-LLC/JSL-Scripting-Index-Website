# Legend Item



## 项消息

### Get Label

**语法:** obj &lt;&lt; Get Label

**说明:** 返回图例项的标签。

**JMP添加的版本:** 16

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

**语法:** obj &lt;&lt; Get Position

**说明:** 返回项在图例中的顺序位置，若未显示，则返回负数代码。代码: -1 =被用户隐藏，-2 = 被 If Display 隐藏，-3 = 被相依性隐藏，-4 = 被初始设置隐藏

**JMP添加的版本:** 16

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

**语法:** obj &lt;&lt; Get Type

**说明:** 返回图例项的类型。类型为:“None”、“Marker”、“H Line”、“V Line”、“Step”、“Bar”、“V Box Plot”、“H Interva”、“V Interval”、“H Bar Box Plot”、“V Bar Box Plot”、“OHLC Plot”、“H Box Plot”、“Gradient”、“Density Gradient”、“Fill and Line”、“Marker Size”、“Line Size”、“Gradient Line”、“Gradient Contour”、“Mark Color”、“Marker Size Categorical”、“Cell Size”。

**JMP添加的版本:** 16

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

**语法:** obj &lt;&lt; Set Label( text )

**说明:** 设置项在图例中的标签。

**JMP添加的版本:** 16

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

**语法:** obj &lt;&lt; Set Visible( state=0|1 )

**说明:** 设置项在图例中的可见性。

**JMP添加的版本:** 16

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

