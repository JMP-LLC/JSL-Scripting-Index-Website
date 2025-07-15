# TextSeg



## 共享项消息

### Enabled

**语法:** obj &lt;&lt; Enabled( state=0|1 );state = obj &lt;&lt; Get Enabled

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

**语法:** obj &lt;&lt; Enabled( state=0|1 );state = obj &lt;&lt; Get Enabled

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

**语法:** obj &lt;&lt; Get Namespace

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

**语法:** obj &lt;&lt; Get Properties

**说明:** 返回包含显示框的属性及其值的关联数组。

```jsl

Names Default To Here( 1 );
New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Get Properties;

```

### Get Property

**语法:** obj &lt;&lt; Get Property( "property" )

**说明:** 返回已命名的“property”的当前设置。

```jsl

Names Default To Here( 1 );
New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Get Property( "Enabled" );

```

### Get Property List

**语法:** obj &lt;&lt; Get Property List

**说明:** 返回显示框具有的属性列表。

```jsl

Names Default To Here( 1 );
New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Get Property List;

```

### Set Property

**语法:** obj &lt;&lt; Set Property( "property", value )

**说明:** 设置显示框的已命名的“property”的值。

```jsl

Names Default To Here( 1 );
New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Set Property( "Enabled", 0 );

```

## 关联的构造器

### Text Seg

**语法:** seg = Text Seg("text")

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );

```

## 项消息

### Child

**语法:** seg2 = obj &lt;&lt; Child

**说明:** 返回显示段的第一个子级。

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Child; // not many segs support children

```

### Class Name

**语法:** classname = obj &lt;&lt; Class Name

**说明:** 返回显示段的显示类的名称。

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Class Name;

```

### Clip Shape

**语法:** seg &lt;&lt; Clip Shape(Boundaries(Shape File, [ID(string)]) | Path([string] | [matrix]) | Empty())

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

### Color Theme

**语法:** obj &lt;&lt; Color Theme

### Delete

**语法:** obj &lt;&lt; Delete

**说明:** 删除显示段。

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Delete;

```

### Density Gradient

**语法:** obj &lt;&lt; Density Gradient( "渐变为白色"|"渐变为灰色"|"全色"="渐变为白色" )

**说明:** 设置密度渐变的着色行为。 默认为“渐变为白色”。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Density Gradient( "Fade to Gray" );

```

### Error Bar Cap

**语法:** obj &lt;&lt; Error Bar Cap( "无"|"微小"|"小"|"中"|"大" )

**说明:** 指定放置在误差条上的端盖的类型。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :Age ), Y( :Height ) ),
	Elements( Line( X, Y, Legend( 4 ), Error Bars( "Range" ) ) ), 

);
frame = Report( obj )[FrameBox( 1 )];
seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Error Bar Cap( "Large" );

```

### Error Bar Cap Shape

**语法:** obj &lt;&lt; Error Bar Cap Shape( begin, end )

**说明:** 指定要在误差条上显示的端盖的形状。单个参数设置直条两端的形状，也可以为开始端和结束端提供单独的参数。默认形状为 "Line"。形状 "Arrow" 绘制向外指向的箭头，而 "None" 省略端盖。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :Age ), Y( :Height ) ),
	Elements( Line( X, Y, Legend( 4 ), Error Bars( "Range" ) ) ), 

);
frame = Report( obj )[FrameBox( 1 )];
seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Error Bar Cap Shape( "Line", "Arrow" );

```

### Fill Color

**语法:** obj &lt;&lt; Fill Color( color )

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Fill Color( "Green" );

```

### First Value

**语法:** obj &lt;&lt; First Value( state=0|1 )

**JMP添加的版本:** 16

### Frame

**语法:** FrameBox = obj &lt;&lt; Frame

**说明:** 返回显示段所在的框架框。

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Frame;

```

### Get Base Font

**语法:** font = obj &lt;&lt; Get Base Font

**说明:** 返回该框绘制的文本所用的基本字体。基本字体包括“Title”、“Text”、“Annotation”之类的预定义名称，以及在字体“首选项”中指定的那些字体。

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
fontobj << Get Base Font;

```

### Get Clip Shape

**语法:** obj &lt;&lt; Get Clip Shape

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

### Get Density Gradient

**语法:** obj &lt;&lt; Get Density Gradient

**说明:** 获取密度渐变的着色行为。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Get Density Gradient;

```

### Get Description

**语法:** description = obj &lt;&lt; Get Description

**说明:** 获取显示段的说明。

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << get description();

```

### Get Error Bar Cap

**语法:** obj &lt;&lt; Get Error Bar Cap

**说明:** 返回误差条端盖的当前种类。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :Age ), Y( :Height ) ),
	Elements( Line( X, Y, Legend( 4 ), Error Bars( "Range" ) ) ), 

);
frame = Report( obj )[FrameBox( 1 )];
seg = (frame << Find Seg( "Bar Seg" ));
seg << Get Error Bar Cap();

```

### Get Error Bar Cap Shape

**语法:** { begin, end } = obj &lt;&lt; Get Error Bar Cap Shape

**说明:** 返回误差条端盖的形状。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :Age ), Y( :Height ) ),
	Elements( Line( X, Y, Legend( 4 ), Error Bars( "Range" ) ) ), 

);
frame = Report( obj )[FrameBox( 1 )];
seg = (frame << Find Seg( "Bar Seg" ));
seg << Get Error Bar Cap Shape();

```

### Get Fill Color

**语法:** color = obj &lt;&lt; Get Fill Color

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Get Fill Color;

```

### Get Fill Pattern

**语法:** obj &lt;&lt; Get Fill Pattern

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Get Fill Pattern;

```

### Get Font

**语法:** obj &lt;&lt; Get Font

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
fontobj << Get Font;

```

### Get Font Name

**语法:** obj &lt;&lt; Get Font Name

**说明:** 返回字体名称。

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
fontobj << Set Font Name( "Times New Roman" );
fontobj << Get Font Name;

```

### Get Font Scale

**语法:** obj &lt;&lt; Get Font Scale

**说明:** 返回字体的当前缩放因子。

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
fontobj << Get Font Scale;

```

### Get Font Size

**语法:** obj &lt;&lt; Get Font Size

**说明:** 返回字体大小。

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
fontobj << Get Font Size;

```

### Get Font Style

**语法:** obj &lt;&lt; Get Font Style

**说明:** 返回字体样式名称。

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
fontobj << Set Font Name( "Arial" );
fontobj << Set Font Style( "Italic" );
fontobj << Get Font Style;

```

### Get Gradient

**语法:** obj &lt;&lt; Get Gradient

**说明:** 获取着色渐变。

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Get Gradient;

```

### Get Gradient Color Theme

**语法:** obj &lt;&lt; Get Gradient Color Theme

**说明:** 获取渐变的颜色主题。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Get Gradient Color Theme;

```

### Get Gradient Discrete Colors

**语法:** obj &lt;&lt; Get Gradient Discrete Colors

**说明:** 获取渐变中的每个水平是否应为单一颜色或颜色是否应平滑过渡。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Get Gradient Discrete Colors;

```

### Get Gradient Fill

**语法:** obj &lt;&lt; Get Gradient Fill

**说明:** 获取超出渐变尺度范围的值的着色行为。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Get Gradient Fill;

```

### Get Gradient Label Count

**语法:** obj &lt;&lt; Get Gradient Label Count

**说明:** 获取渐变图例中的标签数。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Get Gradient Label Count;

```

### Get Gradient Label Levels

**语法:** [value1,value1, ... value N] = obj &lt;&lt; Get Gradient Label Levels

**说明:** 获取用于渐变尺度中的标签的一组值。

**JMP添加的版本:** 18

**示例 1**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Get Gradient Scale Values;

```

**示例 2**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Scale Values( [-10.0, 0.0, 100] );
seg << Get Gradient Scale Values;

```

### Get Gradient Legend Horizontal

**语法:** obj &lt;&lt; Get Gradient Legend Horizontal

**说明:** 获取是否应水平绘制渐变的图例。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Get Gradient Legend Horizontal;

```

### Get Gradient Legend Label Format

**语法:** obj &lt;&lt; Get Gradient Legend Label Format

**说明:** 获取渐变图例标签的格式

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Get Gradient Legend Label Format;

```

### Get Gradient Legend Label Width

**语法:** obj &lt;&lt; Get Gradient Legend Label Width

**说明:** 获取渐变图例标签的最大字符长度。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Get Gradient Legend Label Width;

```

### Get Gradient Legend Show Labels

**语法:** obj &lt;&lt; Get Gradient Legend Show Labels

**说明:** 获取水平标签是否应显示在渐变图例中。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Get Gradient Legend Show Labels;

```

### Get Gradient Level Count

**语法:** obj &lt;&lt; Get Gradient Level Count

**说明:** 获取渐变中的水平数。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Get Gradient Levels;

```

### Get Gradient Lightness Range

**语法:** obj &lt;&lt; Get Gradient Lightness Range

**说明:** 获取渐变中水平颜色的最小和最大亮度。缺失值表明使用了颜色主题的原始值。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Get Gradient Lightness Range;

```

### Get Gradient Range

**语法:** obj &lt;&lt; Get Gradient Range

**说明:** 获取生成非定制渐变尺度的范围。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Get Gradient Range;

```

### Get Gradient Reverse Color Order

**语法:** obj &lt;&lt; Get Gradient Reverse Color Order

**说明:** 获取是否反转渐变中的颜色顺序。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Get Gradient Reverse Color Order;

```

### Get Gradient Reverse Label Order

**语法:** obj &lt;&lt; Get Gradient Reverse Label Order

**说明:** 获取是否要反转渐变中的标签顺序。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Get Gradient Reverse Label Order;

```

### Get Gradient Scale

**语法:** obj &lt;&lt; Get Gradient Scale

**说明:** 获取渐变尺度类型。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Get Gradient Scale;

```

### Get Gradient Scale Values

**语法:** [value1,value1, ... value N] = obj &lt;&lt; Get Gradient Scale Values

**说明:** 获取用于渐变尺度中的标签的一组值。

**JMP添加的版本:** 18

**示例 1**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Get Gradient Scale Values;

```

**示例 2**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Scale Values( [-10.0, 0.0, 100] );
seg << Get Gradient Scale Values;

```

### Get Gradient Show Missing

**语法:** obj &lt;&lt; Get Gradient Show Missing

**说明:** 获取何时显示缺失值的图例条目。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Get Gradient Show Missing;

```

### Get Gradient Transparency

**语法:** obj &lt;&lt; Get Gradient Transparency

**说明:** 获取渐变的透明度行为。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Get Gradient Transparency;

```

### Get Interval Draw Directions

**语法:** obj &lt;&lt; Get Interval Draw Directions

**说明:** 获取绘制区间应该采用的方向。

**JMP添加的版本:** 17

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements(
		Points(
			X,
			Y,
			Legend( 3 ),
			Summary Statistic( "Mean" ),
			Error Interval( "Standard Deviation" )
		)
	),
	SendToReport(
		Dispatch( {}, "Graph Builder", FrameBox,
			{Reference Line Order( 3 ), DispatchSeg(
				BarSeg( 1 ),
				{Set Interval Draw Directions( "Upper" )}
			)}
		)
	)
);

frame = Report( obj )[FrameBox( 1 )];
seg = (frame << Find Seg( "Bar Seg" ));
seg << Get Interval Draw Directions;

```

### Get Line Color

**语法:** color = obj &lt;&lt; Get Line Color

**说明:** 返回线条的颜色。

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Get Line Color;

```

### Get Line Style

**语法:** pen style = obj &lt;&lt; Get Line Style

**说明:** 返回线条的样式。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Get Line Style;

```

### Get Line Width

**语法:** number = obj &lt;&lt; Get Line Width

**说明:** 返回线条的宽度。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Get Line Width;

```

### Get Location

**语法:** obj &lt;&lt; Get Location

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( ts = Text Seg( "moves with axes" ) );
ts << set location( 60, 60 );
ts << get location();

```

### Get Marker

**语法:** marker = obj &lt;&lt; Get Marker

**说明:** 返回标记样式。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Get Marker;

```

### Get Marker Size

**语法:** size = obj &lt;&lt; Get Marker Size

**说明:** 返回标记的大小。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Get Marker Size;

```

### Get Relative

**语法:** obj &lt;&lt; Get Relative

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "fixed bottom left" ) );
seg << set location( 0, 1 );
seg << set relative( 1, 1 );
seg << get relative();

```

### Get Text

**语法:** obj &lt;&lt; Get Text

**说明:** 返回文本段使用的字符串。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Show Control Panel( 0 ),
	Variables( X( :height ), Y( :weight ) ),
	Elements(
		Points( X, Y, Legend( 1 ), Jitter( 1 ) ),
		Line Of Fit(
			X,
			Y,
			Legend( 4 ),
			Confidence of Fit( 1 ),
			Confidence of Prediction( 1 ),
			Degree( "Cubic" ),
			Equation( 1 ),
			Root Mean Square Error( 1 ),
			R²( 0 )
		)
	)
);
fontobj = seg = Report( gb )[Framebox( 1 )] << Find Seg( "TextSeg" );
seg << Get Text;

```

### Get Text Color

**语法:** obj &lt;&lt; Get Text Color

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Get Text Color;

```

### Get Text Style

**语法:** obj &lt;&lt; Get Text Style

**说明:** 获取如何随光标笔绘制文本。

**JMP添加的版本:** 17

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y, Legend( 3 ) ), Line Of Fit( X, Y, Legend( 5 ), Equation( 1 ) ) )
);

frame = Report( obj )[FrameBox( 1 )];
seg = (frame << Find Seg( “Text Seg” ));
seg << Get Text Style;

```

### Get Transparency

**语法:** obj &lt;&lt; Get Transparency

**说明:** 返回介于 0（清晰）和 1（不透明）之间透明度数值。

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Get Transparency;

```

### Gradient

**语法:** obj &lt;&lt; { &lt;Color Theme(theme)&gt;, &lt;Min Lightness(0-1)&gt;, &lt;Max Lightness(0-1)&gt;, &lt;Contour Levels(num)&gt;, &lt;Reverse Gradient(0|1)&gt;, &lt;Density Gradient("Fade To White"|"Fade To Gray"|"Full Color")&gt;, &lt;Gradient Transparency("None"|"Linear")&gt; }obj &lt;&lt; { &lt;Color Theme(theme)&gt;, &lt;Min Lightness(0-1)&gt;, &lt;Max Lightness(0-1)&gt;, &lt;N Labels(num)&gt;, &lt;Show Missing Color("On"|"Off"|"Auto")&gt;, &lt;Scale Type("Linear"|"Quantile"|"Standard Deviation"|"Log"|"Log Offset"|"Custom")&gt;, &lt;Scale Values([v1, v2, …])&gt;, &lt;Range Type("Default"|"Exact Data Range"|"Middle 90%")&gt;, &lt;Fill("Between"|"Above"|"Below"|"Above Below")&gt;, &lt;Reverse Gradient(0|1)&gt;, &lt;Reverse Labels(0|1)&gt;, &lt;Discrete Color(0|1)&gt; }, &lt;Label Format(labelFormat)&gt;, &lt;Width(num)&gt;, &lt;Horizontal(0|1)&gt;, &lt;Show Labels(0|1)&gt;

**说明:** 设置着色渐变。

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Gradient( {Color Theme( "Viridis" ), N Labels( 7 )} );

```

### Gradient Color Theme

**语法:** obj &lt;&lt; Gradient Color Theme

**说明:** 设置渐变的颜色主题。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Gradient Color Theme( "Viridis" );

```

### Gradient Discrete Colors

**语法:** obj &lt;&lt; Gradient Discrete Colors

**说明:** 设置渐变中的每个水平是否应为单一颜色或颜色是否应平滑过渡。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Points( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Marker Seg( 1 ) );
seg << Set Gradient Discrete Colors( 1 );

```

### Gradient Fill

**语法:** obj &lt;&lt; Gradient Fill( "之间"|"向上"|"向下"|"向上向下"="向上向下" )

**说明:** 设置超出渐变尺度范围的值的着色行为。 默认为“向上向下”。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Range( "Middle 90%" );
seg << Set Gradient Fill( "Between" );

```

### Gradient Label Count

**语法:** obj &lt;&lt; Gradient Label Count

**说明:** 设置渐变图例中的标签数。它比等高线级别数多 1。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Gradient Label Count( 8 );

```

### Gradient Label Levels

**语法:** obj &lt;&lt; Gradient Label Levels( [value1,value1, ... value N] )

**说明:** 设置渐变尺度中使用的一组定制值。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Scale Values( [-10.0, 0.0, 10.0] );

```

### Gradient Legend Horizontal

**语法:** obj &lt;&lt; Gradient Legend Horizontal

**说明:** 设置是否应水平绘制渐变的图例。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Gradient Legend Horizontal( 1 );

```

### Gradient Legend Label Format

**语法:** obj &lt;&lt; Gradient Legend Label Format

**说明:** 设置渐变图例标签的格式

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Gradient Legend Label Format( "Fixed Dec", 6, 3 );

```

### Gradient Legend Label Width

**语法:** obj &lt;&lt; Gradient Legend Label Width

**说明:** 设置渐变图例标签的最大字符长度。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Gradient Legend Label Width( 4 );

```

### Gradient Legend Show Labels

**语法:** obj &lt;&lt; Gradient Legend Show Labels

**说明:** 设置水平标签是否应显示在渐变图例中。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Gradient Legend Show Labels( 0 );

```

### Gradient Level Count

**语法:** obj &lt;&lt; Gradient Level Count

**说明:** 设置渐变中的水平数。它比标签数少 1。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Gradient Levels( 7 );

```

### Gradient Lightness Range

**语法:** obj &lt;&lt; Gradient Lightness Range

**说明:** 设置渐变中水平颜色的最小和最大亮度。将调整颜色以覆盖该范围。缺失值被视为无变化。

**JMP添加的版本:** 18

**示例 1**

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Gradient Lightness Range( Min( 0.25 ), Max( 0.75 ) );

```

**示例 2**

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Gradient Lightness Range( 0.25, 0.75 );

```

**示例 3**

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Gradient Lightness Range( ., 0.75 );

```

### Gradient Range

**语法:** obj &lt;&lt; Gradient Range( "默认"|"精确数据范围"|"中间 90%"="默认" )

**说明:** 设置生成非定制渐变尺度的范围。 默认为“默认”。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Range( "Exact Data Range" );

```

### Gradient Reverse Color Order

**语法:** obj &lt;&lt; Gradient Reverse Color Order

**说明:** 反转渐变中颜色的顺序。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Gradient Reverse Color Order( 1 );

```

### Gradient Reverse Label Order

**语法:** obj &lt;&lt; Gradient Reverse Label Order

**说明:** 反转渐变中标签的顺序。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Gradient Reverse Label Order( 1 );

```

### Gradient Scale

**语法:** obj &lt;&lt; Gradient Scale( "线性"|"分位数"|"标准差"|"对数"|"对数偏移"|"定制"="线性" )

**说明:** 设置渐变尺度类型。 默认为“线性”。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Scale( "Quantile" );

```

### Gradient Scale Values

**语法:** obj &lt;&lt; Gradient Scale Values( [value1,value1, ... value N] )

**说明:** 设置渐变尺度中使用的一组定制值。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Scale Values( [-10.0, 0.0, 10.0] );

```

### Gradient Show Missing

**语法:** obj &lt;&lt; Gradient Show Missing( "自动"|"开"|"关"="自动" )

**说明:** 设置何时显示缺失值的图例条目。 默认为“自动”。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :city ), Y( :POP ), Color( :NO ) ),
	Elements( Bar( X, Y ) )
);
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Bar Seg( 1 ) );
seg << Set Gradient Show Missing( "Off" );

```

### Gradient Transparency

**语法:** obj &lt;&lt; Gradient Transparency( "无"|"线性"="线性" )

**说明:** 设置渐变的透明度行为。 默认为“线性”。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Gradient Transparency( "None" );

```

### Last Value

**语法:** obj &lt;&lt; Last Value( state=0|1 )

**JMP添加的版本:** 16

### Line Color

**语法:** obj &lt;&lt; Line Color( color )

**说明:** 设置显示段中所有线条的颜色。

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Line Color( "Green" );

```

### Line Style

**语法:** obj &lt;&lt; Line Style( pen style )

**说明:** 设置线条的样式。选项包括“实线”、“点线”、“虚线”、“点划线”和“双点划线”。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Line Style( "Dotted" );

```

### Line Width

**语法:** obj &lt;&lt; Line Width( "1"|"2"|"3"|"4"|"5"|"6"|"其他..." )

**说明:** 设置线条的宽度。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Line Width( 3 );

```

### Marker

**语法:** obj &lt;&lt; Marker( marker )

**说明:** 设置所有标记的样式。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Marker( "Square" );

```

### Marker Size

**语法:** obj &lt;&lt; Marker Size( size )

**说明:** 设置标记的大小。选项包括“点”、“小”、“中”、“大”、“特大”、“超大”和“最大”。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Marker( "Square" );
seg << Set Marker Size( "XL" );

```

### Max Value

**语法:** obj &lt;&lt; Max Value( state=0|1 )

**JMP添加的版本:** 16

### Min Value

**语法:** obj &lt;&lt; Min Value( state=0|1 )

**JMP添加的版本:** 16

### Name

**语法:** obj &lt;&lt; Name( state=0|1 )

**JMP添加的版本:** 16

### Parent

**语法:** seg2 = obj &lt;&lt; Parent

**说明:** 返回显示段的父级。

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Parent;

```

### Revert

**语法:** obj &lt;&lt; Revert

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Revert;

```

### Set Base Font

**语法:** obj &lt;&lt; Set Base Font( "文本"|"题头"|"标题"|"小字体"|"单字"|"公式编辑器"|"注解"|"轴"|"标记"|"轴标题"|"图形标签"|"图例"|"图形标题"|"说明文字"|"数据表"|"悬停标签" )

**说明:** 设置该框绘制的文本的基本字体。

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
Wait( 2 );
fontobj << Set Base Font( "Title" );

```

### Set Description

**语法:** obj &lt;&lt; Set Description( description )

**说明:** 设置显示段的说明。

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << set description( "my seg" );

```

### Set Error Bar Cap

**语法:** obj &lt;&lt; Set Error Bar Cap( "无"|"微小"|"小"|"中"|"大" )

**说明:** 指定放置在误差条上的端盖的类型。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :Age ), Y( :Height ) ),
	Elements( Line( X, Y, Legend( 4 ), Error Bars( "Range" ) ) ), 

);
frame = Report( obj )[FrameBox( 1 )];
seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Error Bar Cap( "Large" );

```

### Set Error Bar Cap Shape

**语法:** obj &lt;&lt; Set Error Bar Cap Shape( begin, end )

**说明:** 指定要在误差条上显示的端盖的形状。单个参数设置直条两端的形状，也可以为开始端和结束端提供单独的参数。默认形状为 "Line"。形状 "Arrow" 绘制向外指向的箭头，而 "None" 省略端盖。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :Age ), Y( :Height ) ),
	Elements( Line( X, Y, Legend( 4 ), Error Bars( "Range" ) ) ), 

);
frame = Report( obj )[FrameBox( 1 )];
seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Error Bar Cap Shape( "Line", "Arrow" );

```

### Set Fill Color

**语法:** obj &lt;&lt; Set Fill Color( color )

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Fill Color( "Green" );

```

### Set Fill Pattern

**语法:** obj &lt;&lt; Set Fill Pattern

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Fill Pattern( "h wave medium" );

```

### Set Font

**语法:** obj &lt;&lt; Set Font( fontName, &lt;size&gt;, &lt;"bold italic underline strikeout"&gt;, &lt;angle&gt; )

**示例 1**

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
fontobj << Set Font( "Arial Black" );

```

**示例 2**

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
fontobj << Set Font( "Arial Black", 12, "Italic Underline" );

```

### Set Font Name

**语法:** obj &lt;&lt; Set Font Name( fontname )

**说明:** 设置文本字符串的字体。

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
fontobj << Set Font Name( "Arial Black" );

```

### Set Font Scale

**语法:** obj &lt;&lt; Set Font Scale( f )

**说明:** 设置当前字体的比例因子。比例因子将应用到由基本字体和磅值决定的字号。

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
Wait( 2 );
fontobj << Set Font Scale( 2.0 );

```

### Set Font Size

**语法:** obj &lt;&lt; Set Font Size( n )

**说明:** 以磅为单位设置文本字符串的字体大小。

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
fontobj << Set Font Size( 14 );

```

### Set Font Style

**语法:** obj &lt;&lt; Set Font Style( style )

**说明:** 设置文本字符串的字体样式。要一次设置多种样式，将它们放置在同一个字符串中，用空格分隔（请参见下面的示例 2）。

**示例 1**

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
fontobj << Set Font Style( "Italic" );

```

**示例 2**

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
fontobj << Set Font Style( "Italic Bold Underline" );

```

### Set Gradient

**语法:** obj &lt;&lt; { &lt;Color Theme(theme)&gt;, &lt;Min Lightness(0-1)&gt;, &lt;Max Lightness(0-1)&gt;, &lt;Contour Levels(num)&gt;, &lt;Reverse Gradient(0|1)&gt;, &lt;Density Gradient("Fade To White"|"Fade To Gray"|"Full Color")&gt;, &lt;Gradient Transparency("None"|"Linear")&gt; }obj &lt;&lt; { &lt;Color Theme(theme)&gt;, &lt;Min Lightness(0-1)&gt;, &lt;Max Lightness(0-1)&gt;, &lt;N Labels(num)&gt;, &lt;Show Missing Color("On"|"Off"|"Auto")&gt;, &lt;Scale Type("Linear"|"Quantile"|"Standard Deviation"|"Log"|"Log Offset"|"Custom")&gt;, &lt;Scale Values([v1, v2, …])&gt;, &lt;Range Type("Default"|"Exact Data Range"|"Middle 90%")&gt;, &lt;Fill("Between"|"Above"|"Below"|"Above Below")&gt;, &lt;Reverse Gradient(0|1)&gt;, &lt;Reverse Labels(0|1)&gt;, &lt;Discrete Color(0|1)&gt; }, &lt;Label Format(labelFormat)&gt;, &lt;Width(num)&gt;, &lt;Horizontal(0|1)&gt;, &lt;Show Labels(0|1)&gt;

**说明:** 设置着色渐变。

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Gradient( {Color Theme( "Viridis" ), N Labels( 7 )} );

```

### Set Gradient Color Theme

**语法:** obj &lt;&lt; Set Gradient Color Theme

**说明:** 设置渐变的颜色主题。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Gradient Color Theme( "Viridis" );

```

### Set Gradient Custom Scale

**语法:** obj &lt;&lt; Set Gradient Custom Scale

**说明:** 将渐变设置为使用定制尺度的值列表。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Gradient Custom Scale( {0.0, 5.0, 10.0, 20.0} );

```

### Set Gradient Discrete Colors

**语法:** obj &lt;&lt; Set Gradient Discrete Colors

**说明:** 设置渐变中的每个水平是否应为单一颜色或颜色是否应平滑过渡。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Points( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Marker Seg( 1 ) );
seg << Set Gradient Discrete Colors( 1 );

```

### Set Gradient Fill

**语法:** obj &lt;&lt; Set Gradient Fill( "之间"|"向上"|"向下"|"向上向下"="向上向下" )

**说明:** 设置超出渐变尺度范围的值的着色行为。 默认为“向上向下”。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Range( "Middle 90%" );
seg << Set Gradient Fill( "Between" );

```

### Set Gradient Label Count

**语法:** obj &lt;&lt; Set Gradient Label Count

**说明:** 设置渐变图例中的标签数。它比等高线级别数多 1。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Gradient Label Count( 8 );

```

### Set Gradient Label Levels

**语法:** obj &lt;&lt; Set Gradient Label Levels( [value1,value1, ... value N] )

**说明:** 设置渐变尺度中使用的一组定制值。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Scale Values( [-10.0, 0.0, 10.0] );

```

### Set Gradient Legend Horizontal

**语法:** obj &lt;&lt; Set Gradient Legend Horizontal

**说明:** 设置是否应水平绘制渐变的图例。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Gradient Legend Horizontal( 1 );

```

### Set Gradient Legend Label Format

**语法:** obj &lt;&lt; Set Gradient Legend Label Format

**说明:** 设置渐变图例标签的格式

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Gradient Legend Label Format( "Fixed Dec", 6, 3 );

```

### Set Gradient Legend Label Width

**语法:** obj &lt;&lt; Set Gradient Legend Label Width

**说明:** 设置渐变图例标签的最大字符长度。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Gradient Legend Label Width( 4 );

```

### Set Gradient Legend Show Labels

**语法:** obj &lt;&lt; Set Gradient Legend Show Labels

**说明:** 设置水平标签是否应显示在渐变图例中。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Gradient Legend Show Labels( 0 );

```

### Set Gradient Level Count

**语法:** obj &lt;&lt; Set Gradient Level Count

**说明:** 设置渐变中的水平数。它比标签数少 1。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Gradient Levels( 7 );

```

### Set Gradient Lightness Range

**语法:** obj &lt;&lt; Set Gradient Lightness Range

**说明:** 设置渐变中水平颜色的最小和最大亮度。将调整颜色以覆盖该范围。缺失值被视为无变化。

**JMP添加的版本:** 18

**示例 1**

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Gradient Lightness Range( Min( 0.25 ), Max( 0.75 ) );

```

**示例 2**

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Gradient Lightness Range( 0.25, 0.75 );

```

**示例 3**

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Gradient Lightness Range( ., 0.75 );

```

### Set Gradient Range

**语法:** obj &lt;&lt; Set Gradient Range( "默认"|"精确数据范围"|"中间 90%"="默认" )

**说明:** 设置生成非定制渐变尺度的范围。 默认为“默认”。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Range( "Exact Data Range" );

```

### Set Gradient Reverse Color Order

**语法:** obj &lt;&lt; Set Gradient Reverse Color Order

**说明:** 反转渐变中颜色的顺序。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Gradient Reverse Color Order( 1 );

```

### Set Gradient Reverse Label Order

**语法:** obj &lt;&lt; Set Gradient Reverse Label Order

**说明:** 反转渐变中标签的顺序。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Gradient Reverse Label Order( 1 );

```

### Set Gradient Scale

**语法:** obj &lt;&lt; Set Gradient Scale( "线性"|"分位数"|"标准差"|"对数"|"对数偏移"|"定制"="线性" )

**说明:** 设置渐变尺度类型。 默认为“线性”。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Scale( "Quantile" );

```

### Set Gradient Scale Values

**语法:** obj &lt;&lt; Set Gradient Scale Values( [value1,value1, ... value N] )

**说明:** 设置渐变尺度中使用的一组定制值。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Scale Values( [-10.0, 0.0, 10.0] );

```

### Set Gradient Show Missing

**语法:** obj &lt;&lt; Set Gradient Show Missing( "自动"|"开"|"关"="自动" )

**说明:** 设置何时显示缺失值的图例条目。 默认为“自动”。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :city ), Y( :POP ), Color( :NO ) ),
	Elements( Bar( X, Y ) )
);
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Bar Seg( 1 ) );
seg << Set Gradient Show Missing( "Off" );

```

### Set Interval Draw Directions

**语法:** obj &lt;&lt; Set Interval Draw Directions( Both|Upper|Lower|None )

**说明:** 设置绘制区间应该采用的方向。

**JMP添加的版本:** 17

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements(
		Points(
			X,
			Y,
			Legend( 3 ),
			Summary Statistic( "Mean" ),
			Error Interval( "Standard Deviation" )
		)
	),
	SendToReport(
		Dispatch( {}, "Graph Builder", FrameBox,
			{Reference Line Order( 3 ), DispatchSeg(
				BarSeg( 1 ),
				{Set Interval Draw Directions( "Upper" )}
			)}
		)
	)
);

frame = Report( obj )[FrameBox( 1 )];
seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Interval Draw Directions( "Lower" );

```

### Set Line Color

**语法:** obj &lt;&lt; Set Line Color( color )

**说明:** 设置显示段中所有线条的颜色。

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Line Color( "Green" );

```

### Set Line Style

**语法:** obj &lt;&lt; Set Line Style( pen style )

**说明:** 设置线条的样式。选项包括“实线”、“点线”、“虚线”、“点划线”和“双点划线”。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Line Style( "Dotted" );

```

### Set Line Width

**语法:** obj &lt;&lt; Set Line Width( "1"|"2"|"3"|"4"|"5"|"6"|"其他..." )

**说明:** 设置线条的宽度。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Line Width( 3 );

```

### Set Location

**语法:** obj &lt;&lt; Set Location

**说明:** 设置文本的位置。若设置了相对，则 0,0 将为左上方，1,1 将为右下方。若未设置相对，则坐标将相对于轴。

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "fixed bottom left" ) );
seg << set location( 0, 1 );
seg << set relative( 1, 1 );
w[FrameBox( 1 )] << append seg( ts2 = Text Seg( "moves with axes" ) );
ts2 << set location( 60, 60 );
ts2 << get location();

```

### Set Marker

**语法:** obj &lt;&lt; Set Marker( marker )

**说明:** 设置所有标记的样式。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Marker( "Square" );

```

### Set Marker Size

**语法:** obj &lt;&lt; Set Marker Size( size )

**说明:** 设置标记的大小。选项包括“点”、“小”、“中”、“大”、“特大”、“超大”和“最大”。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Marker( "Square" );
seg << Set Marker Size( "XL" );

```

### Set Relative

**语法:** obj &lt;&lt; Set Relative( 0|1,0|1 )

**说明:** 值 0 表示 x 或 y 坐标将相对于框架框，值 1 表示 x 或 y 值将相对于轴。当相对设置为 0 时，x 或 y 坐标将从 0,0 映射为 1,1 表示图形框的左上方到右下方。

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "fixed bottom left" ) );
seg << set location( 0, 1 );
seg << set relative( 1, 1 );
w[FrameBox( 1 )] << append seg( ts2 = Text Seg( "moves with axes" ) );
ts2 << set location( 60, 60 );

```

### Set Text

**语法:** obj &lt;&lt; Set Text( text )

**说明:** 设置文本段使用的字符串。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Show Control Panel( 0 ),
	Variables( X( :height ), Y( :weight ) ),
	Elements(
		Points( X, Y, Legend( 1 ), Jitter( 1 ) ),
		Line Of Fit(
			X,
			Y,
			Legend( 4 ),
			Confidence of Fit( 1 ),
			Confidence of Prediction( 1 ),
			Degree( "Cubic" ),
			Equation( 1 ),
			Root Mean Square Error( 1 ),
			R²( 0 )
		)
	)
);
g = Report( gb );
fontobj = seg = g[Framebox( 1 )] << Find Seg( "TextSeg" );
seg << Get Text;
seg << Set Text( seg << Get Text || "  Tallest: Lawrence" );

```

### Set Text Alignment

**语法:** obj &lt;&lt; Set Text Alignment( left|center|right,&lt;top|center|bottom&gt; )

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "center" ) );
seg << set relative( 1, 1 );
seg << set location( .5, .5 );
seg << set text alignment( center, center );

```

### Set Text Color

**语法:** obj &lt;&lt; Set Text Color( color )

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Text Color( "Green" );

```

### Set Text Style

**语法:** obj &lt;&lt; Set Text Style( [左对齐|居中|右对齐], [顶部|垂直居中|基线|底部], [已清除], [加框] )

**说明:** 设置如何随光标笔绘制文本。若支持，“已清除”会填充文本的边界框，“已清除”会对其添加轮廓。若未指定，则默认水平对齐方式为“左对齐”，垂直对齐方式为“基线”。

**JMP添加的版本:** 17

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y, Legend( 3 ) ), Line Of Fit( X, Y, Legend( 5 ), Equation( 1 ) ) )
);

frame = Report( obj )[FrameBox( 1 )];
seg = (frame << Find Seg( “Text Seg” ));
seg << Set Text Style( {Center, VCenter} );

```

### Set Transparency

**语法:** obj &lt;&lt; Set Transparency( number )

**说明:** 设置形状透明度。该参数应为介于 0 和 1 之间的数值。

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Transparency( .3 );

```

### Sib

**语法:** seg2 = obj &lt;&lt; Sib

**说明:** 返回显示段的平级项。

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Sib;

```

### Sib Append

**语法:** obj &lt;&lt; Sib Append( seg2 )

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

**语法:** obj &lt;&lt; Sib Prepend( seg2 )

**说明:** 紧接在显示段之前添加一个显示段。

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
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

### Text Color

**语法:** obj &lt;&lt; Text Color( color )

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Text Color( "Green" );

```

### Text Style

**语法:** obj &lt;&lt; Text Style( [左对齐|居中|右对齐], [顶部|垂直居中|基线|底部], [已清除], [加框] )

**说明:** 设置如何随光标笔绘制文本。若支持，“已清除”会填充文本的边界框，“已清除”会对其添加轮廓。若未指定，则默认水平对齐方式为“左对齐”，垂直对齐方式为“基线”。

**JMP添加的版本:** 17

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y, Legend( 3 ) ), Line Of Fit( X, Y, Legend( 5 ), Equation( 1 ) ) )
);

frame = Report( obj )[FrameBox( 1 )];
seg = (frame << Find Seg( “Text Seg” ));
seg << Set Text Style( {Center, VCenter} );

```

### Transparency

**语法:** obj &lt;&lt; Transparency( number )

**说明:** 设置形状透明度。该参数应为介于 0 和 1 之间的数值。

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Transparency( .3 );

```

