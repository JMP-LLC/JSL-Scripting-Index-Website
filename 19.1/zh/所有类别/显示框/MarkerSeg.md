# MarkerSeg



## 共享项消息

### Enabled

**语法:** obj &lt;&lt; Enabled( state=0|1 ); state = obj &lt;&lt; Get Enabled

**说明:** 未启用的对象不会响应键盘或鼠标输入。子对象会继承该属性，所以禁用的容器对象会导致所有子孙对象都被禁用。

```jsl

//This message applies to all display objectsNew Window( "enabled",	V List Box(		check = Check Box(			{"Use Password"},			ptext << Enabled( check << Get( 1 ) );			pvalue << Enabled( check << Get( 1 ) );		),		Lineup Box( N Col( 2 ),			Text Box( "Username:" ),			Text Edit Box( "", <<Set Width( 100 ) ),			ptext = Text Box( "Password:", <<Enabled( 0 ) ),			pvalue = Text Edit Box( "",				<<Password Style( 1 ),				<<Set Width( 20 ),				<<Enabled( 0 )			)		)	));

```

### Get Enabled

**语法:** obj &lt;&lt; Enabled( state=0|1 ); state = obj &lt;&lt; Get Enabled

**说明:** 未启用的对象不会响应键盘或鼠标输入。子对象会继承该属性，所以禁用的容器对象会导致所有子孙对象都被禁用。

```jsl

//This message applies to all display objectsNew Window( "enabled",	V List Box(		check = Check Box(			{"Use Password"},			ptext << Enabled( check << Get( 1 ) );			pvalue << Enabled( check << Get( 1 ) );		),		Lineup Box( N Col( 2 ),			Text Box( "Username:" ),			Text Edit Box( "", <<Set Width( 100 ) ),			ptext = Text Box( "Password:", <<Enabled( 0 ) ),			pvalue = Text Edit Box( "",				<<Password Style( 1 ),				<<Set Width( 20 ),				<<Enabled( 0 )			)		)	));

```

### Get Namespace

**语法:** obj &lt;&lt; Get Namespace

**说明:** 返回与该显示对象关联的命名空间。

```jsl

//This message applies to all display objectsx = 1;w = New Window( "Test", b = Button Box( "Press me" ) );b:x = 2;ns = b << GetNamespace();Show( ns:x, x );

```

### Get Properties

**语法:** obj &lt;&lt; Get Properties

**说明:** 返回包含显示框的属性及其值的关联数组。

```jsl

New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );bb << Get Properties;

```

### Get Property

**语法:** obj &lt;&lt; Get Property( "property" )

**说明:** 返回已命名的“property”的当前设置。

```jsl

New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );bb << Get Property( "Enabled" );

```

### Get Property List

**语法:** obj &lt;&lt; Get Property List

**说明:** 返回显示框具有的属性列表。

```jsl

New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );bb << Get Property List;

```

### Set Property

**语法:** obj &lt;&lt; Set Property( "property", value )

**说明:** 设置显示框的已命名的“property”的值。

```jsl

New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );bb << Set Property( "Enabled", 0 );

```

## 关联的构造器

### Marker Seg

**语法:** me = Marker Seg( x, y, &lt; Row States( dt | dt,[rows] | dt,{{rows}, ...} | {states} ) &gt;, &lt; Sizes( s ) &gt; )

**说明:** 返回包含所有 X 和 Y 值的标记的显示段。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );xx = Column( "height" ) << Get Values;aa = [=> 0];sz = Column( "age" ) << get values;yy = J( N Rows( xx ), 1, 0 );For( ii = 1, ii <= N Rows( xx ), ii++,	aa[xx[ii]]++;	yy[ii] = aa[xx[ii]];);New Window( "Marker Seg Example",	g = Graph Box(		Frame Size( 300, 120 ),		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),		Y Scale( 0, 10 ),		Marker Seg( xx, yy, Row States( dt ) )	));frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Marker Seg( 1 ) ));

```

## 项消息

### Always Show Label

**语法:** obj &lt;&lt; Always Show Label( {pt, state=0|1}, ... )

**说明:** 始终显示标记标签，即使它被重叠标签隐藏

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );For( i = 1, i <= 40, i++,	Labeled( Row State( i ) ) = 1);r = Bivariate( Y( :weight ), X( :height ) ) << Report();frame = r[FrameBox( 1 )];seg = (frame << Find Seg( Marker Seg( 1 ) ));seg << always show label( {0, 1}, {1, 1}, {2, 1}, {3, 1}, {4, 1}, {5, 1} );

```

### Child

**语法:** seg2 = obj &lt;&lt; Child

**说明:** 返回显示段的第一个子级。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );xx = Column( "height" ) << Get Values;aa = [=> 0];sz = Column( "age" ) << get values;yy = J( N Rows( xx ), 1, 0 );For( ii = 1, ii <= N Rows( xx ), ii++,	aa[xx[ii]]++;	yy[ii] = aa[xx[ii]];);New Window( "Marker Seg Example",	g = Graph Box(		Frame Size( 300, 120 ),		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),		Y Scale( 0, 10 ),		Marker Seg( xx, yy, Row States( dt ) )	));frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Marker Seg( 1 ) ));seg << Child; // not many segs support children

```

### Class Name

**语法:** classname = obj &lt;&lt; Class Name

**说明:** 返回显示段的显示类的名称。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );xx = Column( "height" ) << Get Values;aa = [=> 0];sz = Column( "age" ) << get values;yy = J( N Rows( xx ), 1, 0 );For( ii = 1, ii <= N Rows( xx ), ii++,	aa[xx[ii]]++;	yy[ii] = aa[xx[ii]];);New Window( "Marker Seg Example",	g = Graph Box(		Frame Size( 300, 120 ),		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),		Y Scale( 0, 10 ),		Marker Seg( xx, yy, Row States( dt ) )	));frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Marker Seg( 1 ) ));seg << Class Name;

```

### Clip Shape

**语法:** seg &lt;&lt; Clip Shape(Boundaries(Shape File, [ID(string)]) | Path([string] | [matrix]) | Empty())

**说明:** 按给定形状剪切几何形状。可以使用形状文件或路径指定形状。可以使用形状文件指定可选 ID 以从文件中选择单个形状，否则所有形状的合集用作剪切区域。可以使用 N x 3 矩阵或文本表示法来指定剪切路径。路径矩阵包含三列（x、y 和标志），用于指定路径上的各点。标志值为 0 表示控制，为 1 表示移动，为 2 表示线段，为 3 表示三次 Bézier 线段，还可为负值（若该点还起到闭合路径的作用）。路径文本支持 SVG 语法。

**JMP添加的版本:** 14

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Size( 653, 396 ),	Show Control Panel( 0 ),	Variables( X( :Longitude ), Y( :Latitude ) ),	Elements( Contour( X, Y, Legend( 2 ) ) ),	SendToReport(		Dispatch( {}, "Graph Builder", FrameBox,			{Background Map( Boundaries( "US States" ) ), Grid Line Order( 2 ),			Reference Line Order( 3 )}		)	));cs = (gb << Report)[FrameBox( 1 )] << Find Seg( Contour Seg( 1 ) );Wait( 2 );cs << Clip Shape( Boundaries( "US States" ) );

```

### Color

**语法:** obj &lt;&lt; Color( color )

**说明:** 设置所有标记的颜色。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );xx = Column( "height" ) << Get Values;aa = [=> 0];sz = Column( "age" ) << get values;yy = J( N Rows( xx ), 1, 0 );For( ii = 1, ii <= N Rows( xx ), ii++,	aa[xx[ii]]++;	yy[ii] = aa[xx[ii]];);New Window( "Marker Seg Example",	g = Graph Box(		Frame Size( 300, 120 ),		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),		Y Scale( 0, 10 ),		Marker Seg( xx, yy, Row States( dt ) )	));frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Marker Seg( 1 ) ));seg << Color( "Green" );

```

### Color Theme

**语法:** obj &lt;&lt; Color Theme

### Delete

**语法:** obj &lt;&lt; Delete

**说明:** 删除显示段。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );xx = Column( "height" ) << Get Values;aa = [=> 0];sz = Column( "age" ) << get values;yy = J( N Rows( xx ), 1, 0 );For( ii = 1, ii <= N Rows( xx ), ii++,	aa[xx[ii]]++;	yy[ii] = aa[xx[ii]];);New Window( "Marker Seg Example",	g = Graph Box(		Frame Size( 300, 120 ),		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),		Y Scale( 0, 10 ),		Marker Seg( xx, yy, Row States( dt ) )	));frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Marker Seg( 1 ) ));seg << Delete;

```

### Density Gradient

**语法:** obj &lt;&lt; Density Gradient( "渐变为白色"|"渐变为灰色"|"全色"="渐变为白色" )

**说明:** 设置密度渐变的着色行为。 默认为“渐变为白色”。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );xx = Column( "height" ) << Get Values;aa = [=> 0];sz = Column( "age" ) << get values;yy = J( N Rows( xx ), 1, 0 );For( ii = 1, ii <= N Rows( xx ), ii++,	aa[xx[ii]]++;	yy[ii] = aa[xx[ii]];);New Window( "Marker Seg Example",	g = Graph Box(		Frame Size( 300, 120 ),		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),		Y Scale( 0, 10 ),		Marker Seg( xx, yy, Row States( dt ) )	));frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Marker Seg( 1 ) ));seg << Density Gradient( "Fade to Gray" );

```

### Frame

**语法:** FrameBox = obj &lt;&lt; Frame

**说明:** 返回显示段所在的框架框。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );xx = Column( "height" ) << Get Values;aa = [=> 0];sz = Column( "age" ) << get values;yy = J( N Rows( xx ), 1, 0 );For( ii = 1, ii <= N Rows( xx ), ii++,	aa[xx[ii]]++;	yy[ii] = aa[xx[ii]];);New Window( "Marker Seg Example",	g = Graph Box(		Frame Size( 300, 120 ),		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),		Y Scale( 0, 10 ),		Marker Seg( xx, yy, Row States( dt ) )	));frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Marker Seg( 1 ) ));seg << Frame;

```

### Get Clip Shape

**语法:** obj &lt;&lt; Get Clip Shape

**说明:** 返回当前的剪切形状

**JMP添加的版本:** 14

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Size( 653, 396 ),	Show Control Panel( 0 ),	Variables( X( :Longitude ), Y( :Latitude ) ),	Elements( Contour( X, Y, Legend( 2 ) ) ),	SendToReport(		Dispatch( {}, "Graph Builder", FrameBox,			{Background Map( Boundaries( "US States" ) ), Grid Line Order( 2 ),			Reference Line Order( 3 )}		)	));cs = (gb << Report)[FrameBox( 1 )] << Find Seg( Contour Seg( 1 ) );cs << Clip Shape( Boundaries( "US States" ) );Wait( 2 );cs << Get Clip Shape();

```

### Get Color

**语法:** color = obj &lt;&lt; Get Color

**说明:** 返回标记颜色。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );xx = Column( "height" ) << Get Values;aa = [=> 0];sz = Column( "age" ) << get values;yy = J( N Rows( xx ), 1, 0 );For( ii = 1, ii <= N Rows( xx ), ii++,	aa[xx[ii]]++;	yy[ii] = aa[xx[ii]];);New Window( "Marker Seg Example",	g = Graph Box(		Frame Size( 300, 120 ),		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),		Y Scale( 0, 10 ),		Marker Seg( xx, yy, Row States( dt ) )	));frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Marker Seg( 1 ) ));seg << Get Color;

```

### Get Colors

**语法:** list = obj &lt;&lt; Get Colors

**说明:** 基于标记的行状态返回标记颜色列表。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );xx = Column( "height" ) << Get Values;aa = [=> 0];sz = Column( "age" ) << get values;yy = J( N Rows( xx ), 1, 0 );For( ii = 1, ii <= N Rows( xx ), ii++,	aa[xx[ii]]++;	yy[ii] = aa[xx[ii]];);New Window( "Marker Seg Example",	g = Graph Box(		Frame Size( 300, 120 ),		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),		Y Scale( 0, 10 ),		Marker Seg( xx, yy, Row States( dt ) )	));frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Marker Seg( 1 ) ));seg << Get Colors;

```

### Get Density Gradient

**语法:** obj &lt;&lt; Get Density Gradient

**说明:** 获取密度渐变的着色行为。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );xx = Column( "height" ) << Get Values;aa = [=> 0];sz = Column( "age" ) << get values;yy = J( N Rows( xx ), 1, 0 );For( ii = 1, ii <= N Rows( xx ), ii++,	aa[xx[ii]]++;	yy[ii] = aa[xx[ii]];);New Window( "Marker Seg Example",	g = Graph Box(		Frame Size( 300, 120 ),		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),		Y Scale( 0, 10 ),		Marker Seg( xx, yy, Row States( dt ) )	));frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Marker Seg( 1 ) ));seg << Get Density Gradient;

```

### Get Description

**语法:** description = obj &lt;&lt; Get Description

**说明:** 获取显示段的说明。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );xx = Column( "height" ) << Get Values;aa = [=> 0];sz = Column( "age" ) << get values;yy = J( N Rows( xx ), 1, 0 );For( ii = 1, ii <= N Rows( xx ), ii++,	aa[xx[ii]]++;	yy[ii] = aa[xx[ii]];);New Window( "Marker Seg Example",	g = Graph Box(		Frame Size( 300, 120 ),		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),		Y Scale( 0, 10 ),		Marker Seg( xx, yy, Row States( dt ) )	));frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Marker Seg( 1 ) ));seg << get description();

```

### Get Force Labels

**语法:** obj &lt;&lt; Get Force Labels( "无标签"|"将值用作标签"|"将行用作标签"|"按行和值添加标签" )

**说明:** 无论数据表行状态标志如何，为每个标记都添加标签。

**JMP添加的版本:** 18

### Get Gradient

**语法:** obj &lt;&lt; Get Gradient

**说明:** 获取着色渐变。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );xx = Column( "height" ) << Get Values;aa = [=> 0];sz = Column( "age" ) << get values;yy = J( N Rows( xx ), 1, 0 );For( ii = 1, ii <= N Rows( xx ), ii++,	aa[xx[ii]]++;	yy[ii] = aa[xx[ii]];);New Window( "Marker Seg Example",	g = Graph Box(		Frame Size( 300, 120 ),		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),		Y Scale( 0, 10 ),		Marker Seg( xx, yy, Row States( dt ) )	));frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Marker Seg( 1 ) ));seg << Get Gradient;

```

### Get Gradient Color Theme

**语法:** obj &lt;&lt; Get Gradient Color Theme

**说明:** 获取渐变的颜色主题。

**JMP添加的版本:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );xx = Column( "height" ) << Get Values;aa = [=> 0];sz = Column( "age" ) << get values;yy = J( N Rows( xx ), 1, 0 );For( ii = 1, ii <= N Rows( xx ), ii++,	aa[xx[ii]]++;	yy[ii] = aa[xx[ii]];);New Window( "Marker Seg Example",	g = Graph Box(		Frame Size( 300, 120 ),		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),		Y Scale( 0, 10 ),		Marker Seg( xx, yy, Row States( dt ) )	));frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Marker Seg( 1 ) ));seg << Get Gradient Color Theme;

```

### Get Gradient Discrete Colors

**语法:** obj &lt;&lt; Get Gradient Discrete Colors

**说明:** 获取渐变中的每个水平是否应为单一颜色或颜色是否应平滑过渡。

**JMP添加的版本:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );xx = Column( "height" ) << Get Values;aa = [=> 0];sz = Column( "age" ) << get values;yy = J( N Rows( xx ), 1, 0 );For( ii = 1, ii <= N Rows( xx ), ii++,	aa[xx[ii]]++;	yy[ii] = aa[xx[ii]];);New Window( "Marker Seg Example",	g = Graph Box(		Frame Size( 300, 120 ),		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),		Y Scale( 0, 10 ),		Marker Seg( xx, yy, Row States( dt ) )	));frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Marker Seg( 1 ) ));seg << Get Gradient Discrete Colors;

```

### Get Gradient Fill

**语法:** obj &lt;&lt; Get Gradient Fill

**说明:** 获取超出渐变尺度范围的值的着色行为。

**JMP添加的版本:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Contour Seg( 1 ) );seg << Get Gradient Fill;

```

### Get Gradient Label Count

**语法:** obj &lt;&lt; Get Gradient Label Count

**说明:** 获取渐变图例中的标签数。

**JMP添加的版本:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );xx = Column( "height" ) << Get Values;aa = [=> 0];sz = Column( "age" ) << get values;yy = J( N Rows( xx ), 1, 0 );For( ii = 1, ii <= N Rows( xx ), ii++,	aa[xx[ii]]++;	yy[ii] = aa[xx[ii]];);New Window( "Marker Seg Example",	g = Graph Box(		Frame Size( 300, 120 ),		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),		Y Scale( 0, 10 ),		Marker Seg( xx, yy, Row States( dt ) )	));frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Marker Seg( 1 ) ));seg << Get Gradient Label Count;

```

### Get Gradient Label Levels

**语法:** [value1,value1, ... value N] = obj &lt;&lt; Get Gradient Label Levels

**说明:** 获取用于渐变尺度中的标签的一组值。

**JMP添加的版本:** 18

**示例 1**

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Contour Seg( 1 ) );seg << Get Gradient Scale Values;

```

**示例 2**

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Contour Seg( 1 ) );seg << Set Gradient Scale Values( [-10.0, 0.0, 100] );seg << Get Gradient Scale Values;

```

### Get Gradient Legend Horizontal

**语法:** obj &lt;&lt; Get Gradient Legend Horizontal

**说明:** 获取是否应水平绘制渐变的图例。

**JMP添加的版本:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );xx = Column( "height" ) << Get Values;aa = [=> 0];sz = Column( "age" ) << get values;yy = J( N Rows( xx ), 1, 0 );For( ii = 1, ii <= N Rows( xx ), ii++,	aa[xx[ii]]++;	yy[ii] = aa[xx[ii]];);New Window( "Marker Seg Example",	g = Graph Box(		Frame Size( 300, 120 ),		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),		Y Scale( 0, 10 ),		Marker Seg( xx, yy, Row States( dt ) )	));frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Marker Seg( 1 ) ));seg << Get Gradient Legend Horizontal;

```

### Get Gradient Legend Label Format

**语法:** obj &lt;&lt; Get Gradient Legend Label Format

**说明:** 获取渐变图例标签的格式

**JMP添加的版本:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );xx = Column( "height" ) << Get Values;aa = [=> 0];sz = Column( "age" ) << get values;yy = J( N Rows( xx ), 1, 0 );For( ii = 1, ii <= N Rows( xx ), ii++,	aa[xx[ii]]++;	yy[ii] = aa[xx[ii]];);New Window( "Marker Seg Example",	g = Graph Box(		Frame Size( 300, 120 ),		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),		Y Scale( 0, 10 ),		Marker Seg( xx, yy, Row States( dt ) )	));frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Marker Seg( 1 ) ));seg << Get Gradient Legend Label Format;

```

### Get Gradient Legend Label Width

**语法:** obj &lt;&lt; Get Gradient Legend Label Width

**说明:** 获取渐变图例标签的最大字符长度。

**JMP添加的版本:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );xx = Column( "height" ) << Get Values;aa = [=> 0];sz = Column( "age" ) << get values;yy = J( N Rows( xx ), 1, 0 );For( ii = 1, ii <= N Rows( xx ), ii++,	aa[xx[ii]]++;	yy[ii] = aa[xx[ii]];);New Window( "Marker Seg Example",	g = Graph Box(		Frame Size( 300, 120 ),		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),		Y Scale( 0, 10 ),		Marker Seg( xx, yy, Row States( dt ) )	));frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Marker Seg( 1 ) ));seg << Get Gradient Legend Label Width;

```

### Get Gradient Legend Show Labels

**语法:** obj &lt;&lt; Get Gradient Legend Show Labels

**说明:** 获取水平标签是否应显示在渐变图例中。

**JMP添加的版本:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );xx = Column( "height" ) << Get Values;aa = [=> 0];sz = Column( "age" ) << get values;yy = J( N Rows( xx ), 1, 0 );For( ii = 1, ii <= N Rows( xx ), ii++,	aa[xx[ii]]++;	yy[ii] = aa[xx[ii]];);New Window( "Marker Seg Example",	g = Graph Box(		Frame Size( 300, 120 ),		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),		Y Scale( 0, 10 ),		Marker Seg( xx, yy, Row States( dt ) )	));frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Marker Seg( 1 ) ));seg << Get Gradient Legend Show Labels;

```

### Get Gradient Level Count

**语法:** obj &lt;&lt; Get Gradient Level Count

**说明:** 获取渐变中的水平数。

**JMP添加的版本:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );xx = Column( "height" ) << Get Values;aa = [=> 0];sz = Column( "age" ) << get values;yy = J( N Rows( xx ), 1, 0 );For( ii = 1, ii <= N Rows( xx ), ii++,	aa[xx[ii]]++;	yy[ii] = aa[xx[ii]];);New Window( "Marker Seg Example",	g = Graph Box(		Frame Size( 300, 120 ),		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),		Y Scale( 0, 10 ),		Marker Seg( xx, yy, Row States( dt ) )	));frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Marker Seg( 1 ) ));seg << Get Gradient Levels;

```

### Get Gradient Lightness Range

**语法:** obj &lt;&lt; Get Gradient Lightness Range

**说明:** 获取渐变中水平颜色的最小和最大亮度。缺失值表明使用了颜色主题的原始值。

**JMP添加的版本:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );xx = Column( "height" ) << Get Values;aa = [=> 0];sz = Column( "age" ) << get values;yy = J( N Rows( xx ), 1, 0 );For( ii = 1, ii <= N Rows( xx ), ii++,	aa[xx[ii]]++;	yy[ii] = aa[xx[ii]];);New Window( "Marker Seg Example",	g = Graph Box(		Frame Size( 300, 120 ),		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),		Y Scale( 0, 10 ),		Marker Seg( xx, yy, Row States( dt ) )	));frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Marker Seg( 1 ) ));seg << Get Gradient Lightness Range;

```

### Get Gradient Range

**语法:** obj &lt;&lt; Get Gradient Range

**说明:** 获取生成非定制渐变尺度的范围。

**JMP添加的版本:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Contour Seg( 1 ) );seg << Get Gradient Range;

```

### Get Gradient Reverse Color Order

**语法:** obj &lt;&lt; Get Gradient Reverse Color Order

**说明:** 获取是否反转渐变中的颜色顺序。

**JMP添加的版本:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );xx = Column( "height" ) << Get Values;aa = [=> 0];sz = Column( "age" ) << get values;yy = J( N Rows( xx ), 1, 0 );For( ii = 1, ii <= N Rows( xx ), ii++,	aa[xx[ii]]++;	yy[ii] = aa[xx[ii]];);New Window( "Marker Seg Example",	g = Graph Box(		Frame Size( 300, 120 ),		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),		Y Scale( 0, 10 ),		Marker Seg( xx, yy, Row States( dt ) )	));frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Marker Seg( 1 ) ));seg << Get Gradient Reverse Color Order;

```

### Get Gradient Reverse Label Order

**语法:** obj &lt;&lt; Get Gradient Reverse Label Order

**说明:** 获取是否要反转渐变中的标签顺序。

**JMP添加的版本:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );xx = Column( "height" ) << Get Values;aa = [=> 0];sz = Column( "age" ) << get values;yy = J( N Rows( xx ), 1, 0 );For( ii = 1, ii <= N Rows( xx ), ii++,	aa[xx[ii]]++;	yy[ii] = aa[xx[ii]];);New Window( "Marker Seg Example",	g = Graph Box(		Frame Size( 300, 120 ),		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),		Y Scale( 0, 10 ),		Marker Seg( xx, yy, Row States( dt ) )	));frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Marker Seg( 1 ) ));seg << Get Gradient Reverse Label Order;

```

### Get Gradient Scale

**语法:** obj &lt;&lt; Get Gradient Scale

**说明:** 获取渐变尺度类型。

**JMP添加的版本:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Contour Seg( 1 ) );seg << Get Gradient Scale;

```

### Get Gradient Scale Values

**语法:** [value1,value1, ... value N] = obj &lt;&lt; Get Gradient Scale Values

**说明:** 获取用于渐变尺度中的标签的一组值。

**JMP添加的版本:** 18

**示例 1**

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Contour Seg( 1 ) );seg << Get Gradient Scale Values;

```

**示例 2**

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Contour Seg( 1 ) );seg << Set Gradient Scale Values( [-10.0, 0.0, 100] );seg << Get Gradient Scale Values;

```

### Get Gradient Show Missing

**语法:** obj &lt;&lt; Get Gradient Show Missing

**说明:** 获取何时显示缺失值的图例条目。

**JMP添加的版本:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );xx = Column( "height" ) << Get Values;aa = [=> 0];sz = Column( "age" ) << get values;yy = J( N Rows( xx ), 1, 0 );For( ii = 1, ii <= N Rows( xx ), ii++,	aa[xx[ii]]++;	yy[ii] = aa[xx[ii]];);New Window( "Marker Seg Example",	g = Graph Box(		Frame Size( 300, 120 ),		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),		Y Scale( 0, 10 ),		Marker Seg( xx, yy, Row States( dt ) )	));frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Marker Seg( 1 ) ));seg << Get Gradient Show Missing;

```

### Get Gradient Transparency

**语法:** obj &lt;&lt; Get Gradient Transparency

**说明:** 获取渐变的透明度行为。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );xx = Column( "height" ) << Get Values;aa = [=> 0];sz = Column( "age" ) << get values;yy = J( N Rows( xx ), 1, 0 );For( ii = 1, ii <= N Rows( xx ), ii++,	aa[xx[ii]]++;	yy[ii] = aa[xx[ii]];);New Window( "Marker Seg Example",	g = Graph Box(		Frame Size( 300, 120 ),		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),		Y Scale( 0, 10 ),		Marker Seg( xx, yy, Row States( dt ) )	));frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Marker Seg( 1 ) ));seg << Get Gradient Transparency;

```

### Get Hide Missing Color

**语法:** true/false = obj &lt;&lt; Get Hide Missing Color

```jsl

Random Reset( 1111111 );n = 1000;T1 = J( n, 1, Random Normal() );T1[Loc( J( n, 1, Random Integer( 0, 1 ) ) )] = .;dt = New Table( "Test",	New Column( "X", Values( J( n, 1, Random Uniform() ) ) ),	New Column( "Y", Values( J( n, 1, Random Uniform() ) ) ),	New Column( "T1", Values( T1 ) ),);obj = dt << Graph Builder(	Size( 531, 456 ),	Show Control Panel( 0 ),	Variables( X( :X ), Y( :Y ), Color( :T1 ) ),	Elements( Points( X, Y, Legend( 16 ) ) ));frame = Report( obj )[FrameBox( 1 )];seg = (frame << Find Seg( Marker Seg( 1 ) ));seg << Get Hide Missing Color;

```

### Get Hide Missing Size

**语法:** true/false = obj &lt;&lt; Get Hide Missing Size

```jsl

Random Reset( 1111111 );n = 1000;T1 = J( n, 1, Random Normal() );T1[Loc( J( n, 1, Random Integer( 0, 1 ) ) )] = .;dt = New Table( "Test",	New Column( "X", Values( J( n, 1, Random Uniform() ) ) ),	New Column( "Y", Values( J( n, 1, Random Uniform() ) ) ),	New Column( "T1", Values( T1 ) ),);obj = dt << Graph Builder(	Size( 531, 456 ),	Show Control Panel( 0 ),	Variables( X( :X ), Y( :Y ), Size( :T1 ) ),	Elements( Points( X, Y, Legend( 16 ) ) ));frame = Report( obj )[FrameBox( 1 )];seg = (frame << Find Seg( Marker Seg( 1 ) ));seg << Get Hide Missing Size;

```

### Get Jitter

**语法:** {method, axis, limit, spacing, seed, side, overlap, grid offset, smoothing, max error, bandwidth} = obj &lt;&lt; Get Jitter

**说明:** 返回用于补偿标记位置以减少靠接的设置。“method”为无|随机均匀|随机正态|居中|居中网格|正网格。“axis”为 X|Y|XY。“limit”为随机散布的宽度，根据方法进行调整。“spacing”为用于随机散布的标记大小的百分比，或者使用 0 表示自动调整。

**JMP添加的版本:** 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );r = Oneway( Y( :height ), X( :sex ), Means( 1 ), MeanDiamonds( 1 ), XAxisProportional( 0 ) );frame = (r << report)[FrameBox( 1 )];seg = (frame << FindSeg( Marker Seg( 1 ) ));{method, axis, limit, spacing, seed, side, overlap, grid offset, smoothing, max error,bandwidth} = seg << Get Jitter();

```

### Get Jitter Offsets

**语法:** matrix = obj &lt;&lt; Get Jitter Offsets

**说明:** 返回 X 和 Y 随机散布偏移的 N x 2 矩阵。

```jsl

x = J( 1, 100, Random Normal() );y = J( 1, 100, 0 );New Window( "Marker Seg Example",	g = Graph Box(		X Scale( -4, 4 ),		Y Scale( -0.5, 0.5 ),		Frame Size( 300, 200 ),		Marker Seg( x, y, <<Set Marker Size( 5 ), <<Set Jitter( {"Grid", "Y"} ) )	));seg = (g[FrameBox( 1 )] << Find Seg( Marker Seg( 1 ) ));jitter = seg << Get Jitter Offsets;avg = Mean( jitter[0, 1] );

```

### Get Label Value Axis

**语法:** obj &lt;&lt; Get Label Value Axis( "X"|"Y" )

**说明:** 强制的标签是否显示 X 或 Y 值。

**JMP添加的版本:** 18

### Get Label Value Format

**语法:** obj &lt;&lt; Get Label Value Format

**说明:** 如何设置 X 或 Y 值的格式；“自动”表示使用轴格式。

**JMP添加的版本:** 18

### Get Marker

**语法:** marker = obj &lt;&lt; Get Marker

**说明:** 返回标记样式。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );xx = Column( "height" ) << Get Values;aa = [=> 0];sz = Column( "age" ) << get values;yy = J( N Rows( xx ), 1, 0 );For( ii = 1, ii <= N Rows( xx ), ii++,	aa[xx[ii]]++;	yy[ii] = aa[xx[ii]];);New Window( "Marker Seg Example",	g = Graph Box(		Frame Size( 300, 120 ),		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),		Y Scale( 0, 10 ),		Marker Seg( xx, yy, Row States( dt ) )	));frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Marker Seg( 1 ) ));seg << Get Marker;

```

### Get Marker Draw Column

**语法:** column = obj &lt;&lt; Get Marker Draw Column

**说明:** 返回任意定制标记绘制数据表列。

**JMP添加的版本:** 16

```jsl

Open( "$SAMPLE_DATA/Big Class Families.jmp" );r = Bivariate( Y( :height ), X( :weight ) );frame = (r << report)[FrameBox( 1 )];seg = (frame << FindSeg( Marker Seg( 1 ) ));seg << Set Marker Draw Column( :picture );ex = seg << Get Marker Draw Column();

```

### Get Marker Draw Expr

**语法:** expr = obj &lt;&lt; Get Marker Draw Expr

**说明:** 返回定制标记绘制表达式。

**JMP添加的版本:** 16

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );r = Bivariate( Y( :height ), X( :weight ) );frame = (r << report)[FrameBox( 1 )];seg = (frame << FindSeg( Marker Seg( 1 ) ));seg << Set Marker Draw Expr( [-1 0, 0 2, 1 0, 0 1, -1 0] );ex = seg << Get Marker Draw Expr();

```

### Get Marker Size

**语法:** size = obj &lt;&lt; Get Marker Size

**说明:** 返回标记大小。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );xx = Column( "height" ) << Get Values;aa = [=> 0];sz = Column( "age" ) << get values;yy = J( N Rows( xx ), 1, 0 );For( ii = 1, ii <= N Rows( xx ), ii++,	aa[xx[ii]]++;	yy[ii] = aa[xx[ii]];);New Window( "Marker Seg Example",	g = Graph Box(		Frame Size( 300, 120 ),		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),		Y Scale( 0, 10 ),		Marker Seg( xx, yy, Row States( dt ) )	));frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Marker Seg( 1 ) ));seg << Get Marker Size;

```

### Get Markers

**语法:** list = obj &lt;&lt; Get Markers

**说明:** 基于行状态返回标记列表。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );xx = Column( "height" ) << Get Values;aa = [=> 0];sz = Column( "age" ) << get values;yy = J( N Rows( xx ), 1, 0 );For( ii = 1, ii <= N Rows( xx ), ii++,	aa[xx[ii]]++;	yy[ii] = aa[xx[ii]];);New Window( "Marker Seg Example",	g = Graph Box(		Frame Size( 300, 120 ),		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),		Y Scale( 0, 10 ),		Marker Seg( xx, yy, Row States( dt ) )	));frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Marker Seg( 1 ) ));seg << Get Markers;

```

### Get Overlay Color

**语法:** color = obj &lt;&lt; Get Overlay Color( marker index )

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );op = dt << Overlay Plot( X( :age ), Y( :height, :weight ) );rep = op << report;frame = rep[FrameBox( 1 )];seg = (frame << Find Seg( Marker Seg( 1 ) ));seg << Get Overlay Color( 1 );

```

### Get Overlay Count

**语法:** number = obj &lt;&lt; Get Overlay Count

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );op = dt << Overlay Plot( X( :age ), Y( :height, :weight ) );rep = op << report;frame = rep[FrameBox( 1 )];seg = (frame << Find Seg( Marker Seg( 1 ) ));seg << Get Overlay Count;

```

### Get Overlay Marker

**语法:** marker = obj &lt;&lt; Get Overlay Marker( marker index )

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );op = dt << Overlay Plot( X( :age ), Y( :height, :weight ) );rep = op << report;frame = rep[FrameBox( 1 )];seg = (frame << Find Seg( Marker Seg( 1 ) ));seg << Get Overlay Marker( 1 );

```

### Get Point

**语法:** point = obj &lt;&lt; Get Point( index )

**说明:** 返回指定点的 X 和 Y 坐标。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );xx = Column( "height" ) << Get Values;aa = [=> 0];sz = Column( "age" ) << get values;yy = J( N Rows( xx ), 1, 0 );For( ii = 1, ii <= N Rows( xx ), ii++,	aa[xx[ii]]++;	yy[ii] = aa[xx[ii]];);New Window( "Marker Seg Example",	g = Graph Box(		Frame Size( 300, 120 ),		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),		Y Scale( 0, 10 ),		Marker Seg( xx, yy, Row States( dt ) )	));frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Marker Seg( 1 ) ));seg << Get Point( 2 );

```

### Get Point Count

**语法:** Number = obj &lt;&lt; Get Point Count

**说明:** 返回显示段中的点数。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );xx = Column( "height" ) << Get Values;aa = [=> 0];sz = Column( "age" ) << get values;yy = J( N Rows( xx ), 1, 0 );For( ii = 1, ii <= N Rows( xx ), ii++,	aa[xx[ii]]++;	yy[ii] = aa[xx[ii]];);New Window( "Marker Seg Example",	g = Graph Box(		Frame Size( 300, 120 ),		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),		Y Scale( 0, 10 ),		Marker Seg( xx, yy, Row States( dt ) )	));frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Marker Seg( 1 ) ));seg << Get Point Count;

```

### Get Row Numbers

**语法:** matrix = obj &lt;&lt; Get Row Numbers

**说明:** 返回标记行号的向量。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );x = [10 50 70];y = [60 50 10];New Window( "Marker Seg Example",	g = Graph Box( Marker Seg( x, y, Row States( dt, [5 7 9] ) ) ));frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Marker Seg( 1 ) ));seg << Get Row Numbers;

```

### Get Sizes

**语法:** matrix = obj &lt;&lt; Get Sizes

**说明:** 返回标记大小的向量。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );xx = Column( "height" ) << Get Values;aa = [=> 0];sz = Column( "age" ) << get values;yy = J( N Rows( xx ), 1, 0 );For( ii = 1, ii <= N Rows( xx ), ii++,	aa[xx[ii]]++;	yy[ii] = aa[xx[ii]];);New Window( "Marker Seg Example",	g = Graph Box(		Frame Size( 300, 120 ),		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),		Y Scale( 0, 10 ),		Marker Seg( xx, yy, Row States( dt ) )	));frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Marker Seg( 1 ) ));seg << Get Sizes;

```

### Get Transparency

**语法:** obj &lt;&lt; Get Transparency

**说明:** 返回表示透明度的数值（介于 0 和 1 之间）。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );xx = Column( "height" ) << Get Values;aa = [=> 0];sz = Column( "age" ) << get values;yy = J( N Rows( xx ), 1, 0 );For( ii = 1, ii <= N Rows( xx ), ii++,	aa[xx[ii]]++;	yy[ii] = aa[xx[ii]];);New Window( "Marker Seg Example",	g = Graph Box(		Frame Size( 300, 120 ),		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),		Y Scale( 0, 10 ),		Marker Seg( xx, yy, Row States( dt ) )	));frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Marker Seg( 1 ) ));seg << Get Transparency;

```

### Get Value Label Width

**语法:** obj &lt;&lt; Get Value Label Width( number )

**说明:** 带格式的标签值的最大宽度。

**JMP添加的版本:** 18

### Get X Values

**语法:** matrix = obj &lt;&lt; Get X Values

**说明:** 返回 X 值列表。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );xx = Column( "height" ) << Get Values;aa = [=> 0];sz = Column( "age" ) << get values;yy = J( N Rows( xx ), 1, 0 );For( ii = 1, ii <= N Rows( xx ), ii++,	aa[xx[ii]]++;	yy[ii] = aa[xx[ii]];);New Window( "Marker Seg Example",	g = Graph Box(		Frame Size( 300, 120 ),		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),		Y Scale( 0, 10 ),		Marker Seg( xx, yy, Row States( dt ) )	));frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Marker Seg( 1 ) ));seg << Get X Values;

```

### Get Y Values

**语法:** matrix = obj &lt;&lt; Get Y Values

**说明:** 返回 Y 值列表。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );xx = Column( "height" ) << Get Values;aa = [=> 0];sz = Column( "age" ) << get values;yy = J( N Rows( xx ), 1, 0 );For( ii = 1, ii <= N Rows( xx ), ii++,	aa[xx[ii]]++;	yy[ii] = aa[xx[ii]];);New Window( "Marker Seg Example",	g = Graph Box(		Frame Size( 300, 120 ),		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),		Y Scale( 0, 10 ),		Marker Seg( xx, yy, Row States( dt ) )	));frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Marker Seg( 1 ) ));seg << Get Y Values;

```

### Gradient

**语法:** obj &lt;&lt; { &lt;Color Theme(theme)&gt;, &lt;Min Lightness(0-1)&gt;, &lt;Max Lightness(0-1)&gt;, &lt;Contour Levels(num)&gt;, &lt;Reverse Gradient(0|1)&gt;, &lt;Density Gradient("Fade To White"|"Fade To Gray"|"Full Color")&gt;, &lt;Gradient Transparency("None"|"Linear")&gt; } obj &lt;&lt; { &lt;Color Theme(theme)&gt;, &lt;Min Lightness(0-1)&gt;, &lt;Max Lightness(0-1)&gt;, &lt;N Labels(num)&gt;, &lt;Show Missing Color("On"|"Off"|"Auto")&gt;, &lt;Scale Type("Linear"|"Quantile"|"Standard Deviation"|"Log"|"Log Offset"|"Custom")&gt;, &lt;Scale Values([v1, v2, …])&gt;, &lt;Range Type("Default"|"Exact Data Range"|"Middle 90%")&gt;, &lt;Fill("Between"|"Above"|"Below"|"Above Below")&gt;, &lt;Reverse Gradient(0|1)&gt;, &lt;Reverse Labels(0|1)&gt;, &lt;Discrete Color(0|1)&gt; }, &lt;Label Format(labelFormat)&gt;, &lt;Width(num)&gt;, &lt;Horizontal(0|1)&gt;, &lt;Show Labels(0|1)&gt;

**说明:** 设置着色渐变。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );xx = Column( "height" ) << Get Values;aa = [=> 0];sz = Column( "age" ) << get values;yy = J( N Rows( xx ), 1, 0 );For( ii = 1, ii <= N Rows( xx ), ii++,	aa[xx[ii]]++;	yy[ii] = aa[xx[ii]];);New Window( "Marker Seg Example",	g = Graph Box(		Frame Size( 300, 120 ),		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),		Y Scale( 0, 10 ),		Marker Seg( xx, yy, Row States( dt ) )	));frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Marker Seg( 1 ) ));seg << Set Gradient( {Color Theme( "Viridis" ), N Labels( 7 )} );

```

### Gradient Color Theme

**语法:** obj &lt;&lt; Gradient Color Theme

**说明:** 设置渐变的颜色主题。

**JMP添加的版本:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );xx = Column( "height" ) << Get Values;aa = [=> 0];sz = Column( "age" ) << get values;yy = J( N Rows( xx ), 1, 0 );For( ii = 1, ii <= N Rows( xx ), ii++,	aa[xx[ii]]++;	yy[ii] = aa[xx[ii]];);New Window( "Marker Seg Example",	g = Graph Box(		Frame Size( 300, 120 ),		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),		Y Scale( 0, 10 ),		Marker Seg( xx, yy, Row States( dt ) )	));frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Marker Seg( 1 ) ));seg << Set Gradient Color Theme( "Viridis" );

```

### Gradient Discrete Colors

**语法:** obj &lt;&lt; Gradient Discrete Colors

**说明:** 设置渐变中的每个水平是否应为单一颜色或颜色是否应平滑过渡。

**JMP添加的版本:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Points( X, Y ) ) );frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Marker Seg( 1 ) );seg << Set Gradient Discrete Colors( 1 );

```

### Gradient Fill

**语法:** obj &lt;&lt; Gradient Fill( "之间"|"向上"|"向下"|"向上向下"="向上向下" )

**说明:** 设置超出渐变尺度范围的值的着色行为。 默认为“向上向下”。

**JMP添加的版本:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Contour Seg( 1 ) );seg << Set Gradient Range( "Middle 90%" );seg << Set Gradient Fill( "Between" );

```

### Gradient Label Count

**语法:** obj &lt;&lt; Gradient Label Count

**说明:** 设置渐变图例中的标签数。它比等高线级别数多 1。

**JMP添加的版本:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );xx = Column( "height" ) << Get Values;aa = [=> 0];sz = Column( "age" ) << get values;yy = J( N Rows( xx ), 1, 0 );For( ii = 1, ii <= N Rows( xx ), ii++,	aa[xx[ii]]++;	yy[ii] = aa[xx[ii]];);New Window( "Marker Seg Example",	g = Graph Box(		Frame Size( 300, 120 ),		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),		Y Scale( 0, 10 ),		Marker Seg( xx, yy, Row States( dt ) )	));frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Marker Seg( 1 ) ));seg << Set Gradient Label Count( 8 );

```

### Gradient Label Levels

**语法:** obj &lt;&lt; Gradient Label Levels( [value1,value1, ... value N] )

**说明:** 设置渐变尺度中使用的一组定制值。

**JMP添加的版本:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Contour Seg( 1 ) );seg << Set Gradient Scale Values( [-10.0, 0.0, 10.0] );

```

### Gradient Legend Horizontal

**语法:** obj &lt;&lt; Gradient Legend Horizontal

**说明:** 设置是否应水平绘制渐变的图例。

**JMP添加的版本:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );xx = Column( "height" ) << Get Values;aa = [=> 0];sz = Column( "age" ) << get values;yy = J( N Rows( xx ), 1, 0 );For( ii = 1, ii <= N Rows( xx ), ii++,	aa[xx[ii]]++;	yy[ii] = aa[xx[ii]];);New Window( "Marker Seg Example",	g = Graph Box(		Frame Size( 300, 120 ),		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),		Y Scale( 0, 10 ),		Marker Seg( xx, yy, Row States( dt ) )	));frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Marker Seg( 1 ) ));seg << Set Gradient Legend Horizontal( 1 );

```

### Gradient Legend Label Format

**语法:** obj &lt;&lt; Gradient Legend Label Format

**说明:** 设置渐变图例标签的格式

**JMP添加的版本:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );xx = Column( "height" ) << Get Values;aa = [=> 0];sz = Column( "age" ) << get values;yy = J( N Rows( xx ), 1, 0 );For( ii = 1, ii <= N Rows( xx ), ii++,	aa[xx[ii]]++;	yy[ii] = aa[xx[ii]];);New Window( "Marker Seg Example",	g = Graph Box(		Frame Size( 300, 120 ),		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),		Y Scale( 0, 10 ),		Marker Seg( xx, yy, Row States( dt ) )	));frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Marker Seg( 1 ) ));seg << Set Gradient Legend Label Format( "Fixed Dec", 6, 3 );

```

### Gradient Legend Label Width

**语法:** obj &lt;&lt; Gradient Legend Label Width

**说明:** 设置渐变图例标签的最大字符长度。

**JMP添加的版本:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );xx = Column( "height" ) << Get Values;aa = [=> 0];sz = Column( "age" ) << get values;yy = J( N Rows( xx ), 1, 0 );For( ii = 1, ii <= N Rows( xx ), ii++,	aa[xx[ii]]++;	yy[ii] = aa[xx[ii]];);New Window( "Marker Seg Example",	g = Graph Box(		Frame Size( 300, 120 ),		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),		Y Scale( 0, 10 ),		Marker Seg( xx, yy, Row States( dt ) )	));frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Marker Seg( 1 ) ));seg << Set Gradient Legend Label Width( 4 );

```

### Gradient Legend Show Labels

**语法:** obj &lt;&lt; Gradient Legend Show Labels

**说明:** 设置水平标签是否应显示在渐变图例中。

**JMP添加的版本:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );xx = Column( "height" ) << Get Values;aa = [=> 0];sz = Column( "age" ) << get values;yy = J( N Rows( xx ), 1, 0 );For( ii = 1, ii <= N Rows( xx ), ii++,	aa[xx[ii]]++;	yy[ii] = aa[xx[ii]];);New Window( "Marker Seg Example",	g = Graph Box(		Frame Size( 300, 120 ),		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),		Y Scale( 0, 10 ),		Marker Seg( xx, yy, Row States( dt ) )	));frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Marker Seg( 1 ) ));seg << Set Gradient Legend Show Labels( 0 );

```

### Gradient Level Count

**语法:** obj &lt;&lt; Gradient Level Count

**说明:** 设置渐变中的水平数。它比标签数少 1。

**JMP添加的版本:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );xx = Column( "height" ) << Get Values;aa = [=> 0];sz = Column( "age" ) << get values;yy = J( N Rows( xx ), 1, 0 );For( ii = 1, ii <= N Rows( xx ), ii++,	aa[xx[ii]]++;	yy[ii] = aa[xx[ii]];);New Window( "Marker Seg Example",	g = Graph Box(		Frame Size( 300, 120 ),		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),		Y Scale( 0, 10 ),		Marker Seg( xx, yy, Row States( dt ) )	));frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Marker Seg( 1 ) ));seg << Set Gradient Levels( 7 );

```

### Gradient Lightness Range

**语法:** obj &lt;&lt; Gradient Lightness Range

**说明:** 设置渐变中水平颜色的最小和最大亮度。将调整颜色以覆盖该范围。缺失值被视为无变化。

**JMP添加的版本:** 18

**示例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );xx = Column( "height" ) << Get Values;aa = [=> 0];sz = Column( "age" ) << get values;yy = J( N Rows( xx ), 1, 0 );For( ii = 1, ii <= N Rows( xx ), ii++,	aa[xx[ii]]++;	yy[ii] = aa[xx[ii]];);New Window( "Marker Seg Example",	g = Graph Box(		Frame Size( 300, 120 ),		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),		Y Scale( 0, 10 ),		Marker Seg( xx, yy, Row States( dt ) )	));frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Marker Seg( 1 ) ));seg << Set Gradient Lightness Range( Min( 0.25 ), Max( 0.75 ) );

```

**示例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );xx = Column( "height" ) << Get Values;aa = [=> 0];sz = Column( "age" ) << get values;yy = J( N Rows( xx ), 1, 0 );For( ii = 1, ii <= N Rows( xx ), ii++,	aa[xx[ii]]++;	yy[ii] = aa[xx[ii]];);New Window( "Marker Seg Example",	g = Graph Box(		Frame Size( 300, 120 ),		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),		Y Scale( 0, 10 ),		Marker Seg( xx, yy, Row States( dt ) )	));frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Marker Seg( 1 ) ));seg << Set Gradient Lightness Range( 0.25, 0.75 );

```

**示例 3**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );xx = Column( "height" ) << Get Values;aa = [=> 0];sz = Column( "age" ) << get values;yy = J( N Rows( xx ), 1, 0 );For( ii = 1, ii <= N Rows( xx ), ii++,	aa[xx[ii]]++;	yy[ii] = aa[xx[ii]];);New Window( "Marker Seg Example",	g = Graph Box(		Frame Size( 300, 120 ),		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),		Y Scale( 0, 10 ),		Marker Seg( xx, yy, Row States( dt ) )	));frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Marker Seg( 1 ) ));seg << Set Gradient Lightness Range( ., 0.75 );

```

### Gradient Range

**语法:** obj &lt;&lt; Gradient Range( "默认"|"精确数据范围"|"中间 90%"="默认" )

**说明:** 设置生成非定制渐变尺度的范围。 默认为“默认”。

**JMP添加的版本:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Contour Seg( 1 ) );seg << Set Gradient Range( "Exact Data Range" );

```

### Gradient Reverse Color Order

**语法:** obj &lt;&lt; Gradient Reverse Color Order

**说明:** 反转渐变中颜色的顺序。

**JMP添加的版本:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );xx = Column( "height" ) << Get Values;aa = [=> 0];sz = Column( "age" ) << get values;yy = J( N Rows( xx ), 1, 0 );For( ii = 1, ii <= N Rows( xx ), ii++,	aa[xx[ii]]++;	yy[ii] = aa[xx[ii]];);New Window( "Marker Seg Example",	g = Graph Box(		Frame Size( 300, 120 ),		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),		Y Scale( 0, 10 ),		Marker Seg( xx, yy, Row States( dt ) )	));frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Marker Seg( 1 ) ));seg << Set Gradient Reverse Color Order( 1 );

```

### Gradient Reverse Label Order

**语法:** obj &lt;&lt; Gradient Reverse Label Order

**说明:** 反转渐变中标签的顺序。

**JMP添加的版本:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );xx = Column( "height" ) << Get Values;aa = [=> 0];sz = Column( "age" ) << get values;yy = J( N Rows( xx ), 1, 0 );For( ii = 1, ii <= N Rows( xx ), ii++,	aa[xx[ii]]++;	yy[ii] = aa[xx[ii]];);New Window( "Marker Seg Example",	g = Graph Box(		Frame Size( 300, 120 ),		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),		Y Scale( 0, 10 ),		Marker Seg( xx, yy, Row States( dt ) )	));frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Marker Seg( 1 ) ));seg << Set Gradient Reverse Label Order( 1 );

```

### Gradient Scale

**语法:** obj &lt;&lt; Gradient Scale( "线性"|"分位数"|"标准差"|"对数"|"对数偏移"|"定制"="线性" )

**说明:** 设置渐变尺度类型。 默认为“线性”。

**JMP添加的版本:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Contour Seg( 1 ) );seg << Set Gradient Scale( "Quantile" );

```

### Gradient Scale Values

**语法:** obj &lt;&lt; Gradient Scale Values( [value1,value1, ... value N] )

**说明:** 设置渐变尺度中使用的一组定制值。

**JMP添加的版本:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Contour Seg( 1 ) );seg << Set Gradient Scale Values( [-10.0, 0.0, 10.0] );

```

### Gradient Show Missing

**语法:** obj &lt;&lt; Gradient Show Missing( "自动"|"开"|"关"="自动" )

**说明:** 设置何时显示缺失值的图例条目。 默认为“自动”。

**JMP添加的版本:** 18

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );gb = Graph Builder(	Variables( X( :city ), Y( :POP ), Color( :NO ) ),	Elements( Bar( X, Y ) ));frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Bar Seg( 1 ) );seg << Set Gradient Show Missing( "Off" );

```

### Gradient Transparency

**语法:** obj &lt;&lt; Gradient Transparency( "无"|"线性"="线性" )

**说明:** 设置渐变的透明度行为。 默认为“线性”。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );xx = Column( "height" ) << Get Values;aa = [=> 0];sz = Column( "age" ) << get values;yy = J( N Rows( xx ), 1, 0 );For( ii = 1, ii <= N Rows( xx ), ii++,	aa[xx[ii]]++;	yy[ii] = aa[xx[ii]];);New Window( "Marker Seg Example",	g = Graph Box(		Frame Size( 300, 120 ),		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),		Y Scale( 0, 10 ),		Marker Seg( xx, yy, Row States( dt ) )	));frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Marker Seg( 1 ) ));seg << Gradient Transparency( "None" );

```

### Label Offset

**语法:** obj &lt;&lt; Label Offset( {pt, x offset, y offset}, ... )

**说明:** 根据指定坐标定位行标签。

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );Labeled( Row State( 5 ) ) = 1;Labeled( Row State( 8 ) ) = 1;dist = Distribution( Continuous Distribution( Column( :height ) ) );frame = (dist << report)[FrameBox( 2 )];seg = (frame << Find Seg( Marker Seg( 1 ) ));seg << label offset( {0, -20, -10}, {1, -20, -30} );

```

### Marker

**语法:** obj &lt;&lt; Marker( marker )

**说明:** 设置所有标记的样式。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );xx = Column( "height" ) << Get Values;aa = [=> 0];sz = Column( "age" ) << get values;yy = J( N Rows( xx ), 1, 0 );For( ii = 1, ii <= N Rows( xx ), ii++,	aa[xx[ii]]++;	yy[ii] = aa[xx[ii]];);New Window( "Marker Seg Example",	g = Graph Box(		Frame Size( 300, 120 ),		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),		Y Scale( 0, 10 ),		Marker Seg( xx, yy, Row States( dt ) )	));frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Marker Seg( 1 ) ));seg << Set Marker( "Square" );

```

### Marker Size

**语法:** obj &lt;&lt; Marker Size

**说明:** 设置标记的大小。选项包括“点”、“小”、“中”、“大”、“特大”、“超大”和“最大”。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );xx = Column( "height" ) << Get Values;aa = [=> 0];sz = Column( "age" ) << get values;yy = J( N Rows( xx ), 1, 0 );For( ii = 1, ii <= N Rows( xx ), ii++,	aa[xx[ii]]++;	yy[ii] = aa[xx[ii]];);New Window( "Marker Seg Example",	g = Graph Box(		Frame Size( 300, 120 ),		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),		Y Scale( 0, 10 ),		Marker Seg( xx, yy, Row States( dt ) )	));frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Marker Seg( 1 ) ));seg << Set Marker Size( "XL" );Wait( 1 );seg << Set Marker Size( "dot" );

```

### Parent

**语法:** seg2 = obj &lt;&lt; Parent

**说明:** 返回显示段的父级。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );xx = Column( "height" ) << Get Values;aa = [=> 0];sz = Column( "age" ) << get values;yy = J( N Rows( xx ), 1, 0 );For( ii = 1, ii <= N Rows( xx ), ii++,	aa[xx[ii]]++;	yy[ii] = aa[xx[ii]];);New Window( "Marker Seg Example",	g = Graph Box(		Frame Size( 300, 120 ),		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),		Y Scale( 0, 10 ),		Marker Seg( xx, yy, Row States( dt ) )	));frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Marker Seg( 1 ) ));seg << Parent;

```

### Revert

**语法:** obj &lt;&lt; Revert

**说明:** 将段改回其初始状态。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );xx = Column( "height" ) << Get Values;aa = [=> 0];sz = Column( "age" ) << get values;yy = J( N Rows( xx ), 1, 0 );For( ii = 1, ii <= N Rows( xx ), ii++,	aa[xx[ii]]++;	yy[ii] = aa[xx[ii]];);New Window( "Marker Seg Example",	g = Graph Box(		Frame Size( 300, 120 ),		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),		Y Scale( 0, 10 ),		Marker Seg( xx, yy, Row States( dt ) )	));frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Marker Seg( 1 ) ));Wait( 1 );seg << Set Color( "Red" );Wait( 1 );seg << Revert;

```

### Set Color

**语法:** obj &lt;&lt; Set Color( color )

**说明:** 设置所有标记的颜色。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );xx = Column( "height" ) << Get Values;aa = [=> 0];sz = Column( "age" ) << get values;yy = J( N Rows( xx ), 1, 0 );For( ii = 1, ii <= N Rows( xx ), ii++,	aa[xx[ii]]++;	yy[ii] = aa[xx[ii]];);New Window( "Marker Seg Example",	g = Graph Box(		Frame Size( 300, 120 ),		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),		Y Scale( 0, 10 ),		Marker Seg( xx, yy, Row States( dt ) )	));frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Marker Seg( 1 ) ));seg << Color( "Green" );

```

### Set Description

**语法:** obj &lt;&lt; Set Description( description )

**说明:** 设置显示段的说明。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );xx = Column( "height" ) << Get Values;aa = [=> 0];sz = Column( "age" ) << get values;yy = J( N Rows( xx ), 1, 0 );For( ii = 1, ii <= N Rows( xx ), ii++,	aa[xx[ii]]++;	yy[ii] = aa[xx[ii]];);New Window( "Marker Seg Example",	g = Graph Box(		Frame Size( 300, 120 ),		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),		Y Scale( 0, 10 ),		Marker Seg( xx, yy, Row States( dt ) )	));frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Marker Seg( 1 ) ));seg << set description( "my seg" );

```

### Set Force Labels

**语法:** obj &lt;&lt; Set Force Labels( "无标签"|"将值用作标签"|"将行用作标签"|"按行和值添加标签" )

**说明:** 无论数据表行状态标志如何，为每个标记都添加标签。

**JMP添加的版本:** 18

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );Bivariate(	Y( :weight ),	X( :height ),	SendToReport(		Dispatch( {}, "Bivar Plot", FrameBox,			{DispatchSeg(				Marker Seg( 1 ),				Set Force Labels( "Label by Value" ),				Set Label Value Axis( "X" ),				Set Label Value Format( "Fixed", 1 )			)}		)	));

```

### Set Gradient

**语法:** obj &lt;&lt; { &lt;Color Theme(theme)&gt;, &lt;Min Lightness(0-1)&gt;, &lt;Max Lightness(0-1)&gt;, &lt;Contour Levels(num)&gt;, &lt;Reverse Gradient(0|1)&gt;, &lt;Density Gradient("Fade To White"|"Fade To Gray"|"Full Color")&gt;, &lt;Gradient Transparency("None"|"Linear")&gt; } obj &lt;&lt; { &lt;Color Theme(theme)&gt;, &lt;Min Lightness(0-1)&gt;, &lt;Max Lightness(0-1)&gt;, &lt;N Labels(num)&gt;, &lt;Show Missing Color("On"|"Off"|"Auto")&gt;, &lt;Scale Type("Linear"|"Quantile"|"Standard Deviation"|"Log"|"Log Offset"|"Custom")&gt;, &lt;Scale Values([v1, v2, …])&gt;, &lt;Range Type("Default"|"Exact Data Range"|"Middle 90%")&gt;, &lt;Fill("Between"|"Above"|"Below"|"Above Below")&gt;, &lt;Reverse Gradient(0|1)&gt;, &lt;Reverse Labels(0|1)&gt;, &lt;Discrete Color(0|1)&gt; }, &lt;Label Format(labelFormat)&gt;, &lt;Width(num)&gt;, &lt;Horizontal(0|1)&gt;, &lt;Show Labels(0|1)&gt;

**说明:** 设置着色渐变。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );xx = Column( "height" ) << Get Values;aa = [=> 0];sz = Column( "age" ) << get values;yy = J( N Rows( xx ), 1, 0 );For( ii = 1, ii <= N Rows( xx ), ii++,	aa[xx[ii]]++;	yy[ii] = aa[xx[ii]];);New Window( "Marker Seg Example",	g = Graph Box(		Frame Size( 300, 120 ),		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),		Y Scale( 0, 10 ),		Marker Seg( xx, yy, Row States( dt ) )	));frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Marker Seg( 1 ) ));seg << Set Gradient( {Color Theme( "Viridis" ), N Labels( 7 )} );

```

### Set Gradient Color Theme

**语法:** obj &lt;&lt; Set Gradient Color Theme

**说明:** 设置渐变的颜色主题。

**JMP添加的版本:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );xx = Column( "height" ) << Get Values;aa = [=> 0];sz = Column( "age" ) << get values;yy = J( N Rows( xx ), 1, 0 );For( ii = 1, ii <= N Rows( xx ), ii++,	aa[xx[ii]]++;	yy[ii] = aa[xx[ii]];);New Window( "Marker Seg Example",	g = Graph Box(		Frame Size( 300, 120 ),		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),		Y Scale( 0, 10 ),		Marker Seg( xx, yy, Row States( dt ) )	));frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Marker Seg( 1 ) ));seg << Set Gradient Color Theme( "Viridis" );

```

### Set Gradient Custom Scale

**语法:** obj &lt;&lt; Set Gradient Custom Scale

**说明:** 将渐变设置为使用定制尺度的值列表。

**JMP添加的版本:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );xx = Column( "height" ) << Get Values;aa = [=> 0];sz = Column( "age" ) << get values;yy = J( N Rows( xx ), 1, 0 );For( ii = 1, ii <= N Rows( xx ), ii++,	aa[xx[ii]]++;	yy[ii] = aa[xx[ii]];);New Window( "Marker Seg Example",	g = Graph Box(		Frame Size( 300, 120 ),		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),		Y Scale( 0, 10 ),		Marker Seg( xx, yy, Row States( dt ) )	));frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Marker Seg( 1 ) ));seg << Set Gradient Custom Scale( {0.0, 5.0, 10.0, 20.0} );

```

### Set Gradient Discrete Colors

**语法:** obj &lt;&lt; Set Gradient Discrete Colors

**说明:** 设置渐变中的每个水平是否应为单一颜色或颜色是否应平滑过渡。

**JMP添加的版本:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Points( X, Y ) ) );frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Marker Seg( 1 ) );seg << Set Gradient Discrete Colors( 1 );

```

### Set Gradient Fill

**语法:** obj &lt;&lt; Set Gradient Fill( "之间"|"向上"|"向下"|"向上向下"="向上向下" )

**说明:** 设置超出渐变尺度范围的值的着色行为。 默认为“向上向下”。

**JMP添加的版本:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Contour Seg( 1 ) );seg << Set Gradient Range( "Middle 90%" );seg << Set Gradient Fill( "Between" );

```

### Set Gradient Label Count

**语法:** obj &lt;&lt; Set Gradient Label Count

**说明:** 设置渐变图例中的标签数。它比等高线级别数多 1。

**JMP添加的版本:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );xx = Column( "height" ) << Get Values;aa = [=> 0];sz = Column( "age" ) << get values;yy = J( N Rows( xx ), 1, 0 );For( ii = 1, ii <= N Rows( xx ), ii++,	aa[xx[ii]]++;	yy[ii] = aa[xx[ii]];);New Window( "Marker Seg Example",	g = Graph Box(		Frame Size( 300, 120 ),		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),		Y Scale( 0, 10 ),		Marker Seg( xx, yy, Row States( dt ) )	));frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Marker Seg( 1 ) ));seg << Set Gradient Label Count( 8 );

```

### Set Gradient Label Levels

**语法:** obj &lt;&lt; Set Gradient Label Levels( [value1,value1, ... value N] )

**说明:** 设置渐变尺度中使用的一组定制值。

**JMP添加的版本:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Contour Seg( 1 ) );seg << Set Gradient Scale Values( [-10.0, 0.0, 10.0] );

```

### Set Gradient Legend Horizontal

**语法:** obj &lt;&lt; Set Gradient Legend Horizontal

**说明:** 设置是否应水平绘制渐变的图例。

**JMP添加的版本:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );xx = Column( "height" ) << Get Values;aa = [=> 0];sz = Column( "age" ) << get values;yy = J( N Rows( xx ), 1, 0 );For( ii = 1, ii <= N Rows( xx ), ii++,	aa[xx[ii]]++;	yy[ii] = aa[xx[ii]];);New Window( "Marker Seg Example",	g = Graph Box(		Frame Size( 300, 120 ),		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),		Y Scale( 0, 10 ),		Marker Seg( xx, yy, Row States( dt ) )	));frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Marker Seg( 1 ) ));seg << Set Gradient Legend Horizontal( 1 );

```

### Set Gradient Legend Label Format

**语法:** obj &lt;&lt; Set Gradient Legend Label Format

**说明:** 设置渐变图例标签的格式

**JMP添加的版本:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );xx = Column( "height" ) << Get Values;aa = [=> 0];sz = Column( "age" ) << get values;yy = J( N Rows( xx ), 1, 0 );For( ii = 1, ii <= N Rows( xx ), ii++,	aa[xx[ii]]++;	yy[ii] = aa[xx[ii]];);New Window( "Marker Seg Example",	g = Graph Box(		Frame Size( 300, 120 ),		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),		Y Scale( 0, 10 ),		Marker Seg( xx, yy, Row States( dt ) )	));frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Marker Seg( 1 ) ));seg << Set Gradient Legend Label Format( "Fixed Dec", 6, 3 );

```

### Set Gradient Legend Label Width

**语法:** obj &lt;&lt; Set Gradient Legend Label Width

**说明:** 设置渐变图例标签的最大字符长度。

**JMP添加的版本:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );xx = Column( "height" ) << Get Values;aa = [=> 0];sz = Column( "age" ) << get values;yy = J( N Rows( xx ), 1, 0 );For( ii = 1, ii <= N Rows( xx ), ii++,	aa[xx[ii]]++;	yy[ii] = aa[xx[ii]];);New Window( "Marker Seg Example",	g = Graph Box(		Frame Size( 300, 120 ),		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),		Y Scale( 0, 10 ),		Marker Seg( xx, yy, Row States( dt ) )	));frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Marker Seg( 1 ) ));seg << Set Gradient Legend Label Width( 4 );

```

### Set Gradient Legend Show Labels

**语法:** obj &lt;&lt; Set Gradient Legend Show Labels

**说明:** 设置水平标签是否应显示在渐变图例中。

**JMP添加的版本:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );xx = Column( "height" ) << Get Values;aa = [=> 0];sz = Column( "age" ) << get values;yy = J( N Rows( xx ), 1, 0 );For( ii = 1, ii <= N Rows( xx ), ii++,	aa[xx[ii]]++;	yy[ii] = aa[xx[ii]];);New Window( "Marker Seg Example",	g = Graph Box(		Frame Size( 300, 120 ),		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),		Y Scale( 0, 10 ),		Marker Seg( xx, yy, Row States( dt ) )	));frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Marker Seg( 1 ) ));seg << Set Gradient Legend Show Labels( 0 );

```

### Set Gradient Level Count

**语法:** obj &lt;&lt; Set Gradient Level Count

**说明:** 设置渐变中的水平数。它比标签数少 1。

**JMP添加的版本:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );xx = Column( "height" ) << Get Values;aa = [=> 0];sz = Column( "age" ) << get values;yy = J( N Rows( xx ), 1, 0 );For( ii = 1, ii <= N Rows( xx ), ii++,	aa[xx[ii]]++;	yy[ii] = aa[xx[ii]];);New Window( "Marker Seg Example",	g = Graph Box(		Frame Size( 300, 120 ),		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),		Y Scale( 0, 10 ),		Marker Seg( xx, yy, Row States( dt ) )	));frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Marker Seg( 1 ) ));seg << Set Gradient Levels( 7 );

```

### Set Gradient Lightness Range

**语法:** obj &lt;&lt; Set Gradient Lightness Range

**说明:** 设置渐变中水平颜色的最小和最大亮度。将调整颜色以覆盖该范围。缺失值被视为无变化。

**JMP添加的版本:** 18

**示例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );xx = Column( "height" ) << Get Values;aa = [=> 0];sz = Column( "age" ) << get values;yy = J( N Rows( xx ), 1, 0 );For( ii = 1, ii <= N Rows( xx ), ii++,	aa[xx[ii]]++;	yy[ii] = aa[xx[ii]];);New Window( "Marker Seg Example",	g = Graph Box(		Frame Size( 300, 120 ),		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),		Y Scale( 0, 10 ),		Marker Seg( xx, yy, Row States( dt ) )	));frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Marker Seg( 1 ) ));seg << Set Gradient Lightness Range( Min( 0.25 ), Max( 0.75 ) );

```

**示例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );xx = Column( "height" ) << Get Values;aa = [=> 0];sz = Column( "age" ) << get values;yy = J( N Rows( xx ), 1, 0 );For( ii = 1, ii <= N Rows( xx ), ii++,	aa[xx[ii]]++;	yy[ii] = aa[xx[ii]];);New Window( "Marker Seg Example",	g = Graph Box(		Frame Size( 300, 120 ),		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),		Y Scale( 0, 10 ),		Marker Seg( xx, yy, Row States( dt ) )	));frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Marker Seg( 1 ) ));seg << Set Gradient Lightness Range( 0.25, 0.75 );

```

**示例 3**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );xx = Column( "height" ) << Get Values;aa = [=> 0];sz = Column( "age" ) << get values;yy = J( N Rows( xx ), 1, 0 );For( ii = 1, ii <= N Rows( xx ), ii++,	aa[xx[ii]]++;	yy[ii] = aa[xx[ii]];);New Window( "Marker Seg Example",	g = Graph Box(		Frame Size( 300, 120 ),		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),		Y Scale( 0, 10 ),		Marker Seg( xx, yy, Row States( dt ) )	));frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Marker Seg( 1 ) ));seg << Set Gradient Lightness Range( ., 0.75 );

```

### Set Gradient Range

**语法:** obj &lt;&lt; Set Gradient Range( "默认"|"精确数据范围"|"中间 90%"="默认" )

**说明:** 设置生成非定制渐变尺度的范围。 默认为“默认”。

**JMP添加的版本:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Contour Seg( 1 ) );seg << Set Gradient Range( "Exact Data Range" );

```

### Set Gradient Reverse Color Order

**语法:** obj &lt;&lt; Set Gradient Reverse Color Order

**说明:** 反转渐变中颜色的顺序。

**JMP添加的版本:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );xx = Column( "height" ) << Get Values;aa = [=> 0];sz = Column( "age" ) << get values;yy = J( N Rows( xx ), 1, 0 );For( ii = 1, ii <= N Rows( xx ), ii++,	aa[xx[ii]]++;	yy[ii] = aa[xx[ii]];);New Window( "Marker Seg Example",	g = Graph Box(		Frame Size( 300, 120 ),		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),		Y Scale( 0, 10 ),		Marker Seg( xx, yy, Row States( dt ) )	));frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Marker Seg( 1 ) ));seg << Set Gradient Reverse Color Order( 1 );

```

### Set Gradient Reverse Label Order

**语法:** obj &lt;&lt; Set Gradient Reverse Label Order

**说明:** 反转渐变中标签的顺序。

**JMP添加的版本:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );xx = Column( "height" ) << Get Values;aa = [=> 0];sz = Column( "age" ) << get values;yy = J( N Rows( xx ), 1, 0 );For( ii = 1, ii <= N Rows( xx ), ii++,	aa[xx[ii]]++;	yy[ii] = aa[xx[ii]];);New Window( "Marker Seg Example",	g = Graph Box(		Frame Size( 300, 120 ),		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),		Y Scale( 0, 10 ),		Marker Seg( xx, yy, Row States( dt ) )	));frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Marker Seg( 1 ) ));seg << Set Gradient Reverse Label Order( 1 );

```

### Set Gradient Scale

**语法:** obj &lt;&lt; Set Gradient Scale( "线性"|"分位数"|"标准差"|"对数"|"对数偏移"|"定制"="线性" )

**说明:** 设置渐变尺度类型。 默认为“线性”。

**JMP添加的版本:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Contour Seg( 1 ) );seg << Set Gradient Scale( "Quantile" );

```

### Set Gradient Scale Values

**语法:** obj &lt;&lt; Set Gradient Scale Values( [value1,value1, ... value N] )

**说明:** 设置渐变尺度中使用的一组定制值。

**JMP添加的版本:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Contour Seg( 1 ) );seg << Set Gradient Scale Values( [-10.0, 0.0, 10.0] );

```

### Set Gradient Show Missing

**语法:** obj &lt;&lt; Set Gradient Show Missing( "自动"|"开"|"关"="自动" )

**说明:** 设置何时显示缺失值的图例条目。 默认为“自动”。

**JMP添加的版本:** 18

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );gb = Graph Builder(	Variables( X( :city ), Y( :POP ), Color( :NO ) ),	Elements( Bar( X, Y ) ));frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Bar Seg( 1 ) );seg << Set Gradient Show Missing( "Off" );

```

### Set Hide Missing Color

**语法:** obj &lt;&lt; Set Hide Missing Color( true/false )

```jsl

Random Reset( 1111111 );n = 1000;T1 = J( n, 1, Random Normal() );T1[Loc( J( n, 1, Random Integer( 0, 1 ) ) )] = .;dt = New Table( "Test",	New Column( "X", Values( J( n, 1, Random Uniform() ) ) ),	New Column( "Y", Values( J( n, 1, Random Uniform() ) ) ),	New Column( "T1", Values( T1 ) ),);obj = dt << Graph Builder(	Size( 531, 456 ),	Show Control Panel( 0 ),	Variables( X( :X ), Y( :Y ), Color( :T1 ) ),	Elements( Points( X, Y, Legend( 16 ) ) ));frame = Report( obj )[FrameBox( 1 )];seg = (frame << Find Seg( Marker Seg( 1 ) ));seg << Set Hide Missing Color( true );

```

### Set Hide Missing Size

**语法:** obj &lt;&lt; Set Hide Missing Size( true/false )

```jsl

Random Reset( 1111111 );n = 1000;T1 = J( n, 1, Random Normal() );T1[Loc( J( n, 1, Random Integer( 0, 1 ) ) )] = .;dt = New Table( "Test",	New Column( "X", Values( J( n, 1, Random Uniform() ) ) ),	New Column( "Y", Values( J( n, 1, Random Uniform() ) ) ),	New Column( "T1", Values( T1 ) ),);obj = dt << Graph Builder(	Size( 531, 456 ),	Show Control Panel( 0 ),	Variables( X( :X ), Y( :Y ), Size( :T1 ) ),	Elements( Points( X, Y, Legend( 16 ) ) ));frame = Report( obj )[FrameBox( 1 )];seg = (frame << Find Seg( Marker Seg( 1 ) ));seg << Set Hide Missing Size( true );

```

### Set Jitter

**语法:** obj &lt;&lt; Set Jitter( {method, axis, limit, spacing, seed, side, overlap, grid offset, smooth, max error, bandwidth} )

**说明:** 为减少靠接对标记位置进行补偿。“method”为无|随机均匀|随机正态|居中|居中网格|正网格。“axis”为 X|Y|XY。“limit”为随机散布的宽度，根据方法进行调整。“spacing”为用于随机散布的标记大小的百分比，或者使用 0 表示自动调整。

**JMP添加的版本:** 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );r = Oneway( Y( :height ), X( :sex ), Means( 1 ), MeanDiamonds( 1 ), XAxisProportional( 0 ) );frame = (r << report)[FrameBox( 1 )];seg = (frame << FindSeg( Marker Seg( 1 ) ));seg << Set Jitter( {"Grid", "X", 1, 0, 0, "Centered"} );

```

### Set Label Value Axis

**语法:** obj &lt;&lt; Set Label Value Axis( "X"|"Y" )

**说明:** 强制的标签是否显示 X 或 Y 值。

**JMP添加的版本:** 18

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );Bivariate(	Y( :weight ),	X( :height ),	SendToReport(		Dispatch( {}, "Bivar Plot", FrameBox,			{DispatchSeg(				Marker Seg( 1 ),				Set Force Labels( "Label by Value" ),				Set Label Value Axis( "X" ),				Set Label Value Format( "Fixed", 1 )			)}		)	));

```

### Set Label Value Format

**语法:** obj &lt;&lt; Set Label Value Format

**说明:** 如何设置 X 或 Y 值的格式；“自动”表示使用轴格式。

**JMP添加的版本:** 18

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );Bivariate(	Y( :weight ),	X( :height ),	SendToReport(		Dispatch( {}, "Bivar Plot", FrameBox,			{DispatchSeg(				Marker Seg( 1 ),				Set Force Labels( "Label by Value" ),				Set Label Value Axis( "X" ),				Set Label Value Format( "Fixed", 1 )			)}		)	));

```

### Set Label Value Width

**语法:** obj &lt;&lt; Set Label Value Width( number )

**说明:** 带格式的标签值的最大宽度。

**JMP添加的版本:** 18

### Set Marker

**语法:** obj &lt;&lt; Set Marker( marker )

**说明:** 设置所有标记的样式。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );xx = Column( "height" ) << Get Values;aa = [=> 0];sz = Column( "age" ) << get values;yy = J( N Rows( xx ), 1, 0 );For( ii = 1, ii <= N Rows( xx ), ii++,	aa[xx[ii]]++;	yy[ii] = aa[xx[ii]];);New Window( "Marker Seg Example",	g = Graph Box(		Frame Size( 300, 120 ),		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),		Y Scale( 0, 10 ),		Marker Seg( xx, yy, Row States( dt ) )	));frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Marker Seg( 1 ) ));seg << Set Marker( "Square" );

```

### Set Marker Draw Column

**语法:** obj &lt;&lt; Set Marker Draw Column( column )

**说明:** 设置定制标记绘制数据表列，它可以是图片、点矩阵、文本、绘制代码或函数。

**JMP添加的版本:** 16

```jsl

Open( "$SAMPLE_DATA/Big Class Families.jmp" );r = Bivariate( Y( :height ), X( :weight ) );frame = (r << report)[FrameBox( 1 )];seg = (frame << FindSeg( Marker Seg( 1 ) ));Wait( 2 );seg << Set Marker Draw Column( :sex );Wait( 2 );seg << Set Marker Draw Column( :picture );

```

### Set Marker Draw Expr

**语法:** obj &lt;&lt; Set Marker Draw Expr( expr )

**说明:** 设置定制标记绘制表达式，它可以是点矩阵、文本、绘制代码或函数。

**JMP添加的版本:** 16

#### Drawing function

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );r = Bivariate( Y( :height ), X( :weight ) );frame = (r << report)[FrameBox( 1 )];seg = (frame << FindSeg( Marker Seg( 1 ) ));seg << Set Marker Draw Expr(	Function( {this seg, this row, x, y, size, row state},		If( Mod( this row, 2 ) == 1,			Line(				Eval List( {x, y} ),				Eval List( {:weight[this row + 1], :height[this row + 1]} )			);			"A";		,			"B"		)	));

```

#### Drawing script

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );r = Bivariate( Y( :height ), X( :weight ) );frame = (r << report)[FrameBox( 1 )];seg = (frame << FindSeg( Marker Seg( 1 ) ));seg << Set Marker Draw Expr( Expr( Arc( -2, -:age / 3, 2, :age / 3, -90, 90 ) ) );

```

#### Matrix polyline

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );r = Bivariate( Y( :height ), X( :weight ) );frame = (r << report)[FrameBox( 1 )];seg = (frame << FindSeg( Marker Seg( 1 ) ));seg << Set Marker Draw Expr( [-1 0, 0 2, 1 0, 0 1, -1 0] );

```

#### Text

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );r = Bivariate( Y( :height ), X( :weight ) );frame = (r << report)[FrameBox( 1 )];seg = (frame << FindSeg( Marker Seg( 1 ) ));seg << Set Marker Draw Expr( Expr( :sex || Char( :age ) ) );

```

### Set Marker Size

**语法:** obj &lt;&lt; Set Marker Size

**说明:** 设置标记的大小。选项包括“点”、“小”、“中”、“大”、“特大”、“超大”和“最大”。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );xx = Column( "height" ) << Get Values;aa = [=> 0];sz = Column( "age" ) << get values;yy = J( N Rows( xx ), 1, 0 );For( ii = 1, ii <= N Rows( xx ), ii++,	aa[xx[ii]]++;	yy[ii] = aa[xx[ii]];);New Window( "Marker Seg Example",	g = Graph Box(		Frame Size( 300, 120 ),		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),		Y Scale( 0, 10 ),		Marker Seg( xx, yy, Row States( dt ) )	));frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Marker Seg( 1 ) ));seg << Set Marker Size( "XL" );Wait( 1 );seg << Set Marker Size( "dot" );

```

### Set Overlay Color

**语法:** obj &lt;&lt; Set Overlay Color( marker index, color )

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );op = dt << Overlay Plot( X( :age ), Y( :height, :weight ) );rep = op << report;frame = rep[FrameBox( 1 )];seg = (frame << Find Seg( Marker Seg( 1 ) ));seg << Set Overlay Color( 1, "Green" );

```

### Set Overlay Marker

**语法:** obj &lt;&lt; Set Overlay Marker( marker index, marker )

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );op = dt << Overlay Plot( X( :age ), Y( :height, :weight ) );rep = op << report;frame = rep[FrameBox( 1 )];seg = (frame << Find Seg( Marker Seg( 1 ) ));seg << Set Overlay Marker( 1, "Star" );

```

### Set Transparency

**语法:** obj &lt;&lt; Set Transparency( number )

**说明:** 设置标记透明度。该参数应为介于 0 和 1 之间的数值。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );xx = Column( "height" ) << Get Values;aa = [=> 0];sz = Column( "age" ) << get values;yy = J( N Rows( xx ), 1, 0 );For( ii = 1, ii <= N Rows( xx ), ii++,	aa[xx[ii]]++;	yy[ii] = aa[xx[ii]];);New Window( "Marker Seg Example",	g = Graph Box(		Frame Size( 300, 120 ),		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),		Y Scale( 0, 10 ),		Marker Seg( xx, yy, Row States( dt ) )	));frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Marker Seg( 1 ) ));seg << Set Transparency( .3 );

```

### Sib

**语法:** seg2 = obj &lt;&lt; Sib

**说明:** 返回显示段的平级项。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );xx = Column( "height" ) << Get Values;aa = [=> 0];sz = Column( "age" ) << get values;yy = J( N Rows( xx ), 1, 0 );For( ii = 1, ii <= N Rows( xx ), ii++,	aa[xx[ii]]++;	yy[ii] = aa[xx[ii]];);New Window( "Marker Seg Example",	g = Graph Box(		Frame Size( 300, 120 ),		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),		Y Scale( 0, 10 ),		Marker Seg( xx, yy, Row States( dt ) )	));frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Marker Seg( 1 ) ));seg << Sib;

```

### Sib Append

**语法:** obj &lt;&lt; Sib Append( seg2 )

**说明:** 紧接在显示段之后添加一个显示段。

```jsl

win = New Window( "World",	gb = Graph(		FrameSize( 800, 400 ),		X Scale( -180, 180 ),		Y Scale( -90, 90 ),		<<Background Map( Images( "Simple Earth" ) )	));imgBox = win[framebox( 1 )];mapSeg = imgBox << FindSeg( MapSeg( 1 ) );mapSeg << Transparency( 0.5 );Try(	xAxis = gb[AxisBox( 2 )];	xMin = (xAxis << get min);	xMax = (xAxis << get max);,	xMin = 0;	xMax = 100;);yAxis = gb[AxisBox( 1 )];yMin = (yAxis << get min);yMax = (yAxis << get max);xval = Matrix( {xmin, xmax} );yval = Matrix( {ymin, ymax} );mapSeg << Sib Append( Line Seg( xval, yval, <<line color( "Green" ), <<line width( 3 ) ) );

```

### Sib Prepend

**语法:** obj &lt;&lt; Sib Prepend( seg2 )

**说明:** 紧接在显示段之前添加一个显示段。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );xx = Column( "height" ) << Get Values;aa = [=> 0];sz = Column( "age" ) << get values;yy = J( N Rows( xx ), 1, 0 );For( ii = 1, ii <= N Rows( xx ), ii++,	aa[xx[ii]]++;	yy[ii] = aa[xx[ii]];);New Window( "Marker Seg Example",	g = Graph Box(		Frame Size( 300, 120 ),		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),		Y Scale( 0, 10 ),		Marker Seg( xx, yy, Row States( dt ) )	));frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Marker Seg( 1 ) ));Try(	xAxis = g[AxisBox( 2 )];	xMin = (xAxis << get min);	xMax = (xAxis << get max);,	xMin = 0;	xMax = 100;);yAxis = g[AxisBox( 1 )];yMin = (yAxis << get min);yMax = (yAxis << get max);xval = Matrix( {xmin, xmax} );yval = Matrix( {ymin, ymax} );seg << Sib Prepend( Line Seg( xval, yval, <<line color( "Green" ), <<line width( 3 ) ) );

```

### Transparency

**语法:** obj &lt;&lt; Transparency( number )

**说明:** 设置标记透明度。该参数应为介于 0 和 1 之间的数值。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );xx = Column( "height" ) << Get Values;aa = [=> 0];sz = Column( "age" ) << get values;yy = J( N Rows( xx ), 1, 0 );For( ii = 1, ii <= N Rows( xx ), ii++,	aa[xx[ii]]++;	yy[ii] = aa[xx[ii]];);New Window( "Marker Seg Example",	g = Graph Box(		Frame Size( 300, 120 ),		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),		Y Scale( 0, 10 ),		Marker Seg( xx, yy, Row States( dt ) )	));frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Marker Seg( 1 ) ));seg << Set Transparency( .3 );

```

