# LinesSeg



## 共享项消息

### Enabled

**语法:** obj << Enabled( state=0|1 );

state = obj << Get Enabled

**说明:** 未启用的对象不会响应键盘或鼠标输入。子对象会继承该属性，所以禁用的容器对象会导致所有子孙对象都被禁用。

```jsl

Names Default To Here( 1 );
//This message applies to all display objects
New Window( "enabled",
	V List Box(
		check = Check Box(
			{"Use Password"},
			ptext << Enabled( check << Get( 1 ) );
			pvalue << Enabled( check << Get( 1 ) );
		),
		Lineup Box( N Col( 2 ),
			Text Box( "Username:" ),
			Text Edit Box( "", <<Set Width( 100 ) ),
			ptext = Text Box( "Password:", <<Enabled( 0 ) ),
			pvalue = Text Edit Box( "",
				<<Password Style( 1 ),
				<<Set Width( 20 ),
				<<Enabled( 0 )
			)
		)
	)
);

```

### Get Enabled

**语法:** obj << Enabled( state=0|1 );

state = obj << Get Enabled

**说明:** 未启用的对象不会响应键盘或鼠标输入。子对象会继承该属性，所以禁用的容器对象会导致所有子孙对象都被禁用。

```jsl

Names Default To Here( 1 );
//This message applies to all display objects
New Window( "enabled",
	V List Box(
		check = Check Box(
			{"Use Password"},
			ptext << Enabled( check << Get( 1 ) );
			pvalue << Enabled( check << Get( 1 ) );
		),
		Lineup Box( N Col( 2 ),
			Text Box( "Username:" ),
			Text Edit Box( "", <<Set Width( 100 ) ),
			ptext = Text Box( "Password:", <<Enabled( 0 ) ),
			pvalue = Text Edit Box( "",
				<<Password Style( 1 ),
				<<Set Width( 20 ),
				<<Enabled( 0 )
			)
		)
	)
);

```

### Get Namespace

**语法:** obj << Get Namespace

**说明:** 返回与该显示对象关联的命名空间。

```jsl

Names Default To Here( 1 );
//This message applies to all display objects
x = 1;
w = New Window( "Test", b = Button Box( "Press me" ) );
b:x = 2;
ns = b << GetNamespace();
Show( ns:x, x );

```

### Get Properties

**语法:** obj << Get Properties

**说明:** 返回包含显示框的属性及其值的关联数组。

```jsl

Names Default To Here( 1 );
New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Get Properties;

```

### Get Property

**语法:** obj << Get Property( "property" )

**说明:** 返回已命名的“property”的当前设置。

```jsl

Names Default To Here( 1 );
New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Get Property( "Enabled" );

```

### Get Property List

**语法:** obj << Get Property List

**说明:** 返回显示框具有的属性列表。

```jsl

Names Default To Here( 1 );
New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Get Property List;

```

### Set Property

**语法:** obj << Set Property( "property", value )

**说明:** 设置显示框的已命名的“property”的值。

```jsl

Names Default To Here( 1 );
New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Set Property( "Enabled", 0 );

```

## 关联的构造器

### Lines Seg

**语法:** ls = Lines Seg([x1 y1 x2 y2,...])

**说明:** 使用一系列线段为指定的 x 和 y 值创建显示段。第二个可选参数可支持从数据表 (dt) 或独立地分配行状态。

```jsl

Names Default To Here( 1 );
lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];
New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Lines Seg( 1 ) ));

```

## 项消息

### Child

**语法:** seg2 = obj << Child

**说明:** 返回显示段的第一个子级。

```jsl

Names Default To Here( 1 );
lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];
New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Lines Seg( 1 ) ));
seg << Child; // not many segs support children

```

### Class Name

**语法:** classname = obj << Class Name

**说明:** 返回显示段的显示类的名称。

```jsl

Names Default To Here( 1 );
lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];
New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Lines Seg( 1 ) ));
seg << Class Name;

```

### Clip Shape

**语法:** seg << Clip Shape(Boundaries(Shape File, [ID(string)]) | Path([string] | [matrix]) | Empty())

**说明:** 按给定形状剪切几何形状。可以使用形状文件或路径指定形状。可以使用形状文件指定可选 ID 以从文件中选择单个形状，否则所有形状的合集用作剪切区域。可以使用 N x 3 矩阵或文本表示法来指定剪切路径。路径矩阵包含三列（x、y 和标志），用于指定路径上的各点。标志值为 0 表示控制，为 1 表示移动，为 2 表示线段，为 3 表示三次 Bézier 线段，还可为负值（若该点还起到闭合路径的作用）。路径文本支持 SVG 语法。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Size( 653, 396 ),
	Show Control Panel( 0 ),
	Variables( X( :Longitude ), Y( :Latitude ) ),
	Elements( Contour( X, Y, Legend( 2 ) ) ),
	SendToReport(
		Dispatch( {}, "Graph Builder", FrameBox,
			{Background Map( Boundaries( "US States" ) ), Grid Line Order( 2 ),
			Reference Line Order( 3 )}
		)
	)
);
cs = (gb << Report)[FrameBox( 1 )] << Find Seg( Contour Seg( 1 ) );
Wait( 2 );
cs << Clip Shape( Boundaries( "US States" ) );

```

### Delete

**语法:** obj << Delete

**说明:** 删除显示段。

```jsl

Names Default To Here( 1 );
lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];
New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Lines Seg( 1 ) ));
seg << Delete;

```

### First Value

**语法:** obj << First Value( state=0|1 )

**JMP添加的版本:** 16

### Frame

**语法:** FrameBox = obj << Frame

**说明:** 返回显示段所在的框架框。

```jsl

Names Default To Here( 1 );
lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];
New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Lines Seg( 1 ) ));
seg << Frame;

```

### Get Clip Shape

**语法:** obj << Get Clip Shape

**说明:** 返回当前的剪切形状

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Size( 653, 396 ),
	Show Control Panel( 0 ),
	Variables( X( :Longitude ), Y( :Latitude ) ),
	Elements( Contour( X, Y, Legend( 2 ) ) ),
	SendToReport(
		Dispatch( {}, "Graph Builder", FrameBox,
			{Background Map( Boundaries( "US States" ) ), Grid Line Order( 2 ),
			Reference Line Order( 3 )}
		)
	)
);
cs = (gb << Report)[FrameBox( 1 )] << Find Seg( Contour Seg( 1 ) );
cs << Clip Shape( Boundaries( "US States" ) );
Wait( 2 );
cs << Get Clip Shape();

```

### Get Connected

**语法:** 0|1 = obj << Get Connected

**说明:** 返回显示段中所有线段的连接状态。

```jsl

Names Default To Here( 1 );
lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];
New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Lines Seg( 1 ) ));
seg << Get Connected;

```

### Get Description

**语法:** description = obj << Get Description

**说明:** 获取显示段的说明。

```jsl

Names Default To Here( 1 );
lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];
New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Lines Seg( 1 ) ));
seg << get description();

```

### Get Line

**语法:** [x1 y1 x2 y2] = obj << Get Line( index )

**说明:** 返回指定线条的 X 和 Y 坐标。

```jsl

Names Default To Here( 1 );
lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];
New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Lines Seg( 1 ) ));
seg << Get Line( 2 );

```

### Get Line Color

**语法:** color = obj << Get Line Color

**说明:** 返回线条的颜色。

```jsl

Names Default To Here( 1 );
lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];
New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Lines Seg( 1 ) ));
seg << Get Line Color;

```

### Get Line Count

**语法:** Number = obj << Get Line Count

**说明:** 返回显示段中的线条数。

```jsl

Names Default To Here( 1 );
lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];
New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Lines Seg( 1 ) ));
seg << Get Line Count;

```

### Get Line Style

**语法:** pen style = obj << Get Line Style

**说明:** 返回线条的样式。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];
New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Lines Seg( 1 ) ));
seg << Get Line Style;

```

### Get Line Width

**语法:** number = obj << Get Line Width

**说明:** 返回线条的宽度。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];
New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Lines Seg( 1 ) ));
seg << Get Line Width;

```

### Get Lines

**语法:** [x1 y1 x2 y2, ...] = obj << Get Lines

**说明:** 返回所有线条的 X 和 Y 坐标值。

```jsl

Names Default To Here( 1 );
lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];
New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Lines Seg( 1 ) ));
seg << Get Lines;

```

### Last Value

**语法:** obj << Last Value( state=0|1 )

**JMP添加的版本:** 16

### Line Color

**语法:** obj << Line Color( color )

**说明:** 设置显示段中所有线条的颜色。

```jsl

Names Default To Here( 1 );
lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];
New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Lines Seg( 1 ) ));
seg << Set Line Color( "Green" );

```

### Line Style

**语法:** obj << Line Style( pen style )

**说明:** 设置线条的样式。选项包括“实线”、“点线”、“虚线”、“点划线”和“双点划线”。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];
New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Lines Seg( 1 ) ));
seg << Set Line Style( "Dotted" );

```

### Line Width

**语法:** obj << Line Width( "1"|"2"|"3"|"4"|"5"|"6"|"其他..." )

**说明:** 设置线条的宽度。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];
New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Lines Seg( 1 ) ));
seg << Set Line Width( 3 );

```

### Max Value

**语法:** obj << Max Value( state=0|1 )

**JMP添加的版本:** 16

### Min Value

**语法:** obj << Min Value( state=0|1 )

**JMP添加的版本:** 16

### Name

**语法:** obj << Name( state=0|1 )

**JMP添加的版本:** 16

### Parent

**语法:** seg2 = obj << Parent

**说明:** 返回显示段的父级。

```jsl

Names Default To Here( 1 );
lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];
New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Lines Seg( 1 ) ));
seg << Parent;

```

### Set Connected

**语法:** obj << Set Connected( state=0|1 )

**说明:** 设置显示段中所有线段的连接状态。

```jsl

Names Default To Here( 1 );
lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];
New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Lines Seg( 1 ) ));
seg << Set Connected( 1 );

```

### Set Description

**语法:** obj << Set Description( description )

**说明:** 设置显示段的说明。

```jsl

Names Default To Here( 1 );
lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];
New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Lines Seg( 1 ) ));
seg << set description( "my seg" );

```

### Set Line Color

**语法:** obj << Set Line Color( color )

**说明:** 设置显示段中所有线条的颜色。

```jsl

Names Default To Here( 1 );
lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];
New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Lines Seg( 1 ) ));
seg << Set Line Color( "Green" );

```

### Set Line Style

**语法:** obj << Set Line Style( pen style )

**说明:** 设置线条的样式。选项包括“实线”、“点线”、“虚线”、“点划线”和“双点划线”。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];
New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Lines Seg( 1 ) ));
seg << Set Line Style( "Dotted" );

```

### Set Line Width

**语法:** obj << Set Line Width( "1"|"2"|"3"|"4"|"5"|"6"|"其他..." )

**说明:** 设置线条的宽度。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];
New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Lines Seg( 1 ) ));
seg << Set Line Width( 3 );

```

### Sib

**语法:** seg2 = obj << Sib

**说明:** 返回显示段的平级项。

```jsl

Names Default To Here( 1 );
lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];
New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Lines Seg( 1 ) ));
seg << Sib;

```

### Sib Append

**语法:** obj << Sib Append( seg2 )

**说明:** 紧接在显示段之后添加一个显示段。

```jsl

Names Default To Here( 1 );
Names Default To Here( 1 );
win = New Window( "World",
	gb = Graph(
		FrameSize( 800, 400 ),
		X Scale( -180, 180 ),
		Y Scale( -90, 90 ),
		<<Background Map( Images( "Simple Earth" ) )
	)
);
imgBox = win[framebox( 1 )];
mapSeg = imgBox << FindSeg( MapSeg( 1 ) );
mapSeg << Transparency( 0.5 );
Try(
	xAxis = gb[AxisBox( 2 )];
	xMin = (xAxis << get min);
	xMax = (xAxis << get max);
,
	xMin = 0;
	xMax = 100;
);
yAxis = gb[AxisBox( 1 )];
yMin = (yAxis << get min);
yMax = (yAxis << get max);
xval = Matrix( {xmin, xmax} );
yval = Matrix( {ymin, ymax} );
mapSeg << Sib Append( Line Seg( xval, yval, <<line color( "Green" ), <<line width( 3 ) ) );

```

### Sib Prepend

**语法:** obj << Sib Prepend( seg2 )

**说明:** 紧接在显示段之前添加一个显示段。

```jsl

Names Default To Here( 1 );
lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];
New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Lines Seg( 1 ) ));
Try(
	xAxis = g[AxisBox( 2 )];
	xMin = (xAxis << get min);
	xMax = (xAxis << get max);
,
	xMin = 0;
	xMax = 100;
);
yAxis = g[AxisBox( 1 )];
yMin = (yAxis << get min);
yMax = (yAxis << get max);
xval = Matrix( {xmin, xmax} );
yval = Matrix( {ymin, ymax} );
seg << Sib Prepend( Line Seg( xval, yval, <<line color( "Green" ), <<line width( 3 ) ) );

```

