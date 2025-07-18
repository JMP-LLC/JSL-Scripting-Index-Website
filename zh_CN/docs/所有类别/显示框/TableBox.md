# TableBox



## 共享项消息

### Add Line Annotation

**语法:** obj &lt;&lt; Add Line Annotation

**说明:** 在显示框上添加线条。

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Add Line Annotation( Line( 160, 235, 240, 235 ) );

```

### Add Pin Annotation

**语法:** obj &lt;&lt; Add Pin Annotation

**说明:** 在显示框顶部添加固定注解。大多数特性（例如“Index Row”、“UniqueID”和“FoundPt”）专为内部使用设计。

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Y( :weight ),
	X( :height ),
	SendToReport(
		Dispatch( {}, "Bivar Plot", FrameBox,
			Add Pin Annotation(
				Seg( Marker Seg( 1 ) ),
				Index( 17 ),
				Index Row( 17 ),
				UniqueID( -960001792 ),
				FoundPt( {238, 219} ),
				Origin( {64.9765625, 142} ),
				Offset( {-174, -40} ),
				Tag Line( 1 ),
				Font( "Helvetica", 11, "Plain" )
			)
		)
	)
);

```

### Add Polygon Annotation

**语法:** obj &lt;&lt; Add Polygon Annotation

**说明:** 在显示框上添加多边形。

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Add Polygon Annotation(
	Points( {210, 80}, {230, 70}, {280, 115}, {240, 120} ),
	Color( "Red" ),
	Closed( 1 )
);

```

### Add Simple Shape Annotation

**语法:** obj &lt;&lt; Add Simple Shape Annotation

**说明:** 在显示框上添加简单形状。

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Add Simple Shape Annotation( Oval( 210, 100, 250, 75 ) );
rbiv << Add Simple Shape Annotation( Rectangle( 70, 180, 95, 215 ) );

```

### Add Text Annotation

**语法:** obj &lt;&lt; Add Text Annotation

**说明:** 在显示框上添加文本。

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Add Text Annotation(
	Text( "We need to discuss this at the next meeting." ),
	Text Box( {65, 35, 200, 77} )
);

```

### Append

**语法:** obj &lt;&lt; Append( db2 )

**说明:** 将“db2”添加到显示树的“db”之后。

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << append( Text Box( "=== below ===" ) );

```

### Background Color

**语法:** obj &lt;&lt; Background Color( color );color = obj &lt;&lt; Get Background Color

**说明:** 若背景颜色已设置，在绘制框内容之前将使用背景颜色填满框。若未设置背景颜色，包含框的背景和内容将显现。

**JMP添加的版本:** 15

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Show( tb << Get Background Color );
Wait( 2 );
tb << Background Color( "Yellow" );

```

### Border

**语法:** obj &lt;&lt; Border( sides );sides = obj &lt;&lt; Get Border

**说明:** 边框是沿显示框四周绘制的实线。若提供单个值，它将应用于所有边。若指定两个值，它们将应用于水平和垂直边框。

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Show( tb << Get Border );
Wait( 1 );
tb << Border( 1 );

```

### Border Color

**语法:** obj &lt;&lt; Border Color( color );color = obj &lt;&lt; Get Border Color

**说明:** 用于覆盖框边框默认颜色的可选颜色。

**JMP添加的版本:** 19

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Wait( 2 );
tb << Border( 1 );
tb << Border Color( "Light Red" );

```

### Bring Window To Front

**语法:** obj &lt;&lt; Bring Window To Front

**说明:** 将窗口移至最前面。

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << Run Script( "Bivariate" );
w << Bring Window To Front;

```

### Child

**语法:** obj &lt;&lt; Child

**说明:** 返回该显示框的子级项。

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
axisbox = rbiv[axis box( 1 )];
axisParent = axisbox << parent();
axisChild = axisParent << child();
Print( axisChild << Class Name() );

```

### Class Name

**语法:** obj &lt;&lt; Class Name

**说明:** 返回显示框的显示类的名称。

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
axisbox = rbiv[axis box( 1 )];
axisbox << Class Name();

```

### Clone Box

**语法:** obj &lt;&lt; Clone Box

**说明:** 创建显示框的新副本。

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << append( Text Box( "=== below ===" ) );
clonedBox = rbiv << Clone Box();
rbiv << append( clonedBox );

```

### Close Window

**语法:** obj &lt;&lt; Close Window( &lt;"NoSave"&gt; )

**说明:** 关闭窗口。

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
w << Close Window;

```

### Copy Data

**语法:** obj &lt;&lt; Copy Data

**说明:** 将矩阵或表中的制表符分隔数据复制到剪贴板。

```jsl

New Window( "x", mat = Matrix Box( [1 2 3, 4 5 6, 7 8 9] ) );
mat << CopyData;

```

### Copy Graph

**语法:** obj &lt;&lt; Copy Graph

**说明:** 将包含图形和坐标轴的图片置于剪贴板中。

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
(rbiv[FrameBox( 1 )]) << Copy Graph();
"paste into a paint program";

```

### Copy Picture

**语法:** obj &lt;&lt; Copy Picture

**说明:** 将显示框图片置于剪贴板中。

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Copy Picture();

```

### Delete Box

**语法:** obj &lt;&lt; Delete Box

**说明:** 删除该显示框。

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
axisbox = rbiv[axis box( 1 )];
axisbox << Delete Box();

```

### Deselect

**语法:** obj &lt;&lt; Deselect

**说明:** 取消选择用于“编辑”菜单命令的该对象。

```jsl

//This message applies to all display box objects
selected = 0;
New Window( "Example",
	ex = Button Box( "Press Me",
		selected = !selected;
		refresh;
	)
);
refresh = Function( {},
	If( selected,
		ex << Select,
		ex << Deselect
	)
);

```

### Dispatch

**语法:** obj &lt;&lt; Dispatch( {outline node, ...}, display element, display element type, command )

**说明:** 将“command”发送到显示树的特定部分。

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Dispatch( {}, "Bivar Plot", FrameBox, {Marker Size( 3 )} );

```

### Enabled

**语法:** obj &lt;&lt; Enabled( state=0|1 );state = obj &lt;&lt; Get Enabled

**说明:** 未启用的对象不会响应键盘或鼠标输入。子对象会继承该属性，所以禁用的容器对象会导致所有子孙对象都被禁用。

```jsl

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

### Find

**语法:** obj &lt;&lt; Find

**说明:** 返回使用指定的“argument”的显示框。

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
axisbox = rbiv << Find( axis box( 1 ) );
axisbox << Delete();

```

### Get Annotation

**语法:** obj &lt;&lt; Get Annotation

**说明:** 返回固定到该显示框的第一个注解。可以通过对结果使用 Sib() 来访问其他注解。

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Add Text Annotation(
	Text( "We need to discuss this at the next meeting." ),
	Text Box( {65, 35, 200, 77} )
);
annotation = rbiv << Get Annotation;
annotation << delete;

```

### Get Background Color

**语法:** obj &lt;&lt; Background Color( color );color = obj &lt;&lt; Get Background Color

**说明:** 若背景颜色已设置，在绘制框内容之前将使用背景颜色填满框。若未设置背景颜色，包含框的背景和内容将显现。

**JMP添加的版本:** 15

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Show( tb << Get Background Color );
Wait( 2 );
tb << Background Color( "Yellow" );

```

### Get Border

**语法:** obj &lt;&lt; Border( sides );sides = obj &lt;&lt; Get Border

**说明:** 边框是沿显示框四周绘制的实线。若提供单个值，它将应用于所有边。若指定两个值，它们将应用于水平和垂直边框。

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Show( tb << Get Border );
Wait( 1 );
tb << Border( 1 );

```

### Get Border Color

**语法:** obj &lt;&lt; Border Color( color );color = obj &lt;&lt; Get Border Color

**说明:** 用于覆盖框边框默认颜色的可选颜色。

**JMP添加的版本:** 19

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Wait( 2 );
tb << Border( 1 );
tb << Border Color( "Light Red" );

```

### Get Content Size

**语法:** obj &lt;&lt; Get Content Size

**说明:** 返回窗口中内容的大小。

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
c = w << Get Content Size();
Show( c );

```

### Get Display Path

**语法:** obj &lt;&lt; Get Display Path( parent box, &lt;receiver expr&gt;, &lt;Mode("XPath"|"Subscript")&gt; )

**说明:** 获取相对稳健的表达式以在 parent box 和 obj 之间导航。该路径不能保证在 JMP 版本之间是稳定的。receiver expr 归入到输出表达式（若提供）。若未提供，则改用为 parent box 提供的表达式。如示例中所示，该消息主要用于增加已有路径的稳健性。默认为 XPath 模式。

#### 下标模式

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Run Script( "Bivariate" );
rpt = Report( biv );
subscript expr = rpt[Number Col Box( 9 )] << Get Display Path( rpt, Mode( "Subscript" ) ); // Make Number Col Box(9) more robust
Show( subscript expr );
subscript expr << Select;

```

#### 基本

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Run Script( "Bivariate" );
rpt = Report( biv );
xpath expr = rpt[Number Col Box( 9 )] << Get Display Path( rpt, Expr( Report( biv ) ) ); // Make Number Col Box(9) more robust
Show( xpath expr );
xpath expr << Select;

```

### Get Enabled

**语法:** obj &lt;&lt; Enabled( state=0|1 );state = obj &lt;&lt; Get Enabled

**说明:** 未启用的对象不会响应键盘或鼠标输入。子对象会继承该属性，所以禁用的容器对象会导致所有子孙对象都被禁用。

```jsl

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

### Get HTML

**语法:** obj &lt;&lt; Get HTML( &lt;format&gt; )

**说明:** 返回包含显示框的 HTML 源的字符串。

#### 示例 1

```jsl

//This message applies to all display box objects
win = New Window( "Example", a = Text Box( "Example Text" ) );
a << Set Text( win << Get HTML );

```

#### 示例 2

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), Means( 1 ), Mean Diamonds( 1 ) );
Save Text File( "$TEMP/Oneway.html", obj << Get HTML( "svg" ) ); // Prefer <<Save HTML
Web( "$TEMP/Oneway.html", JMPWindow );

```

### Get Height

**语法:** width = obj &lt;&lt; Get Height

**说明:** 返回显示框的高度。

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
fb = r[framebox( 1 )];
fb << Get Height;

```

### Get Horizontal Alignment

**语法:** obj &lt;&lt; Horizontal Alignment( "Default"|"Left"|"Center"|"Right" );"Default"|"Left"|"Center"|"Right" = obj &lt;&lt; Get Horizontal Alignment

**说明:** 水平对齐控制框在容器中的位置（若框未占满整个空间）。

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
lb = r[List Box( 6 )];
lb << Border( 1 );
Wait( 2 );
lb << Horizontal Alignment( "Right" );

```

### Get Journal

**语法:** obj &lt;&lt; Get Journal

**说明:** 返回包含显示框的记录源的字符串。

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
Print( rbiv << Get Journal );

```

### Get Margin

**语法:** obj &lt;&lt; Margin( sides );sides = obj &lt;&lt; Get Margin

**说明:** 边距在框和邻接框的边框之间添加空白。使用命名参数，或提供值列表。若提供单个值，它将应用于所有边。若指定两个值，它们将应用于水平和垂直边距。

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Show( tb << Get Margin );
tb << Border( 1 );
Wait( 2 );
tb << Margin( Left( 20 ), Top( 20 ), Right( 20 ), Bottom( 20 ) );

```

### Get Max Size

**语法:** width,height = obj &lt;&lt; Get Max Size

**说明:** 返回该显示框的最大自动拉伸尺寸。

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/big class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
fb = r[framebox( 1 )];
fb << Get Max Size;

```

### Get Min Size

**语法:** width,height = obj &lt;&lt; Get Min Size

**说明:** 返回该显示框的最小自动拉伸尺寸。

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/big class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
fb = r[framebox( 1 )];
fb << Get Min Size;

```

### Get Namespace

**语法:** obj &lt;&lt; Get Namespace

**说明:** 返回与该显示对象关联的命名空间。

```jsl

//This message applies to all display objects
x = 1;
w = New Window( "Test", b = Button Box( "Press me" ) );
b:x = 2;
ns = b << GetNamespace();
Show( ns:x, x );

```

### Get On Close

**语法:** obj &lt;&lt; Get On Close

**说明:** 返回当窗口关闭时将运行的脚本或函数。

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << On Close(
	// Modal dialogs return Button(1) if OK is pressed, Button(-1) if canceled
	New Window( "Are you sure?",
		<<modal,
		V List Box(
			Text Box( "Press OK to allow the window to close" ),
			H List Box( Button Box( "OK" ), Button Box( "Cancel" ) )
		)
	)["button"] == 1
);
Show( w << Get On Close );

```

### Get Padding

**语法:** obj &lt;&lt; Padding( sides );sides = obj &lt;&lt; Get Padding

**说明:** 填充在内容和框的边框之间添加空白。使用命名参数，或提供值列表。若提供单个值，它将应用于所有边。若指定两个值，它们将应用于水平和垂直填充。

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Show( tb << Get Padding );
tb << Border( 1 );
Wait( 1 );
tb << Padding( Left( 20 ), Top( 20 ), Right( 20 ), Bottom( 20 ) );

```

### Get Page Setup

**语法:** obj &lt;&lt; Get Page Setup

**说明:** 获取 PDF 的页面设置信息

```jsl

//This message applies to all display box objects
w = New Window( "Window", Text Box( "Page Setup Test" ) );
w << get page setup();

```

### Get Picture

**语法:** obj &lt;&lt; Get Picture( &lt;Scale(factor)&gt;, &lt;Type("Bitmap" | "Scalable")&gt;, &lt;View("Picture" | "Screen" | "Print"), &lt;Appearance("Default" | "Current")&gt;, &lt;SubRect(Left(number), Top(number), Right(number), Bottom(number))&gt; )

**说明:** 将 db 捕获为图像对象。可选 Scale 参数将以统一尺度的分辨率呈现图像。统一尺度要求显示框可伸缩。Type 参数确定结果将是可缩放矢量图像还是位图。默认返回可缩放图像，它适合保存为矢量格式，例如 PDF。View 选项更改某些框的行为。"Picture" 的默认选项按照导出为图像格式时的方式绘制报表，其滚动区域完全显示。"Screen" 的视图模式按照屏幕上看到的方式绘制报表，"Print" 按照打印时的方式绘制报表，而没有任何页面设置功能。SubRect 选项将捕获生成的图像的一部分而不是整个图像。Appearance 选项可以从 "Default" 输出颜色更改为屏幕上看到的 "Current" 颜色。仅 Type "Bitmap"Appearance 支持 View、SubRect 和 Appearance 选项。

#### 尺度

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv[FrameBox( 1 )] << Set Stretch( "Window", "Window" );
New Window( "Example", rbiv << Get Picture( Scale( 1.5 ) ) );

```

#### 视图和外观

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate(
	Y( :weight ),
	X( :height ),
	Fit Line( {Line Color( {212, 73, 88} )} ),
	Fit Polynomial( 3, {Line Color( {61, 174, 70} )} ),
	Kernel Smoother( 1, 1, 0.5, 0 )
);
rbiv = biv << report;
rbiv[FrameBox( 1 )] << Set Stretch( "Window", "Window" );
New Window( "Example",
	H List Box(
		rbiv << Get Picture( View( "Screen" ), Appearance( "Current" ) ),
		rbiv << Get Picture( View( "Print" ), Appearance( "Default" ) )
	)
);

```

#### 默认值

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
New Window( "Example", rbiv << Get Picture );

```

### Get Project

**语法:** project = obj &lt;&lt; Get Project()

**说明:** 返回窗口的父项目，若它不在项目中则返回 Empty()。

**JMP添加的版本:** 14

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
c = w << Get Project();
Show( c );

```

### Get Properties

**语法:** obj &lt;&lt; Get Properties

**说明:** 返回包含显示框的属性及其值的关联数组。

```jsl

New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Get Properties;

```

### Get Property

**语法:** obj &lt;&lt; Get Property( "property" )

**说明:** 返回已命名的“property”的当前设置。

```jsl

New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Get Property( "Enabled" );

```

### Get Property List

**语法:** obj &lt;&lt; Get Property List

**说明:** 返回显示框具有的属性列表。

```jsl

New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Get Property List;

```

### Get RTF

**语法:** obj &lt;&lt; Get RTF( &lt;format&gt; )

**说明:** 返回包含显示框的 RTF 源的字符串。

#### 示例 1

```jsl

//This message applies to all display box objects
win = New Window( "Example", a = Text Box( "Example Text" ) );
a << Set Text( win << Get RTF );

```

#### 示例 2

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), Means( 1 ), Mean Diamonds( 1 ) );
Save Text File( "$TEMP/Oneway.rtf", obj << Get RTF( "png" ) ); // Prefer <<Save RTF
Open( "$TEMP/Oneway.rtf" );

```

### Get Row States

**语法:** rs = obj &lt;&lt; Get Row States( &lt;dt&gt; )

**说明:** 返回一个向量，它包含给定数据表或当前数据表中每行的行状态。行状态可以来自表或来自框的过滤器上下文。

#### Single table

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "filter test",
	Data Filter Context Box(
		H List Box(
			dt << Data Filter(
				Local,
				Add Filter( columns( :height ), Where( :height >= 51 & :height <= 62 ) ),
				Mode( Select( 0 ), Show( 1 ), Include( 1 ) )
			),
			V List Box(
				t = Text Box( "0 Rows Excluded" ),
				Distribution(
					Continuous Distribution( Column( :weight ) ),
					Nominal Distribution( Column( :age ) )
				)
			)
		)
	)
);
updatetext = Function( {},
	rs = t << Get Row States( dt );
	n = 0;
	For( ii = 1, ii <= N Rows( rs ), ii++,
		If( Excluded( As Row State( rs[ii] ) ),
			n
			++)
	);
	t << Set Text( Char( n ) || " Rows Excluded" );
);
rsupdate = Function( {a},
	If( Is Matrix( a ),
		updatetext()
	)
);
rsh = t << Make Row State Handler( dt, rsupdate );
updatetext();

```

#### Where subset

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "filter test",
	t = Text Box( "0 Rows Excluded" ),
	dist = Distribution(
		Continuous Distribution( Column( :weight ) ),
		Nominal Distribution( Column( :age ) ),
		Local Data Filter(
			Add Filter( columns( :height ), Where( :height >= 51 & :height <= 62 ) ),
			Mode( Select( 0 ), Show( 1 ), Include( 1 ) )
		),
		Where( :sex == "F" )
	)
);
subset = dist << Get Data Table();
updatetext = Function( {},
	rs = Report( dist ) << Get Row States( subset );
	n = 0;
	For( ii = 1, ii <= N Rows( rs ), ii++,
		If( Excluded( As Row State( rs[ii] ) ),
			n
			++)
	);
	t << Set Text( Char( n ) || " Rows Excluded" );
);
rsupdate = Function( {a},
	If( Is Matrix( a ),
		updatetext()
	)
);
rsh = Report( dist ) << Make Row State Handler( subset, rsupdate );
updatetext();

```

### Get Show Window

**语法:** obj &lt;&lt; Get Show Window

**说明:** 返回窗口的可见性。

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 1 );
w << Show Window( 0 );
Wait( 2 );
Print( w << Get Show Window() );

```

### Get Size

**语法:** width,height = obj &lt;&lt; Get Size

**说明:** 返回显示框大小。

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/big class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
fb = r[framebox( 1 )];
Print( fb << Get Size );

```

### Get Stretch

**语法:** x,y = obj &lt;&lt; Get Stretch

**说明:** 返回该显示框在水平和垂直方向的拉伸标志。

**JMP添加的版本:** 16

```jsl

//This message applies to all display box objects
New Window( "Stretch",
	V List Box(
		H List Box( Text Edit Box( "String1" ), Text Edit Box( "String2" ) ),
		spacer = Spacer Box(
			Size( 20, 20 ),
			Color( "Light Red" ),
			<<Set Stretch( "Fill", "Off" )
		)
	)
);
spacer << Get Stretch();

```

### Get Text

**语法:** obj &lt;&lt; Get Text

**说明:** 返回包含显示框的文本的字符串。

```jsl

//This message applies to all display box objects
win = New Window( "Example", a = Text Box( "Example Text" ) );
a << Set Text( win << Get Text );

```

### Get Text Color

**语法:** obj &lt;&lt; Text Color( color );color = obj &lt;&lt; Get Text Color

**说明:** 将使用文本颜色（若已设置）绘制文本。若未设置属性，则框将继承包含框的文本颜色。

**JMP添加的版本:** 15

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Show( tb << Get Text Color );
Wait( 2 );
tb << Text Color( "Red" );

```

### Get UI Only

**语法:** obj &lt;&lt; UI Only( state=0|1 );state = obj &lt;&lt; Get UI Only

### Get User Resizable

**语法:** obj &lt;&lt; User Resizable;obj &lt;&lt; Get User Resizable

**说明:** 若用户可以调整该框的大小，则光标将在底部和右边缘附近改变，允许拖放式调整大小。

```jsl

root1 = Tree Node( "Parent 1" );
root2 = Tree Node( "Parent 2" );
c1 = Tree Node( "Child 1" );
c2 = Tree Node( "Child 2" );
c3 = Tree Node( "Child 3" );
c4 = Tree Node( "Child 4" );
root1 << Append( c1 );
root1 << Append( c2 );
root2 << Append( c3 );
root2 << Append( c4 );
New Window( "resize",
	H Splitter Box(
		Size( 600, 200 ),
		tree = Tree Box( {root1, root2} ),
		scroll = Scroll Box(
			Size( 300, 200 ),
			Picture Box( Open( "$SAMPLE_IMAGES/tile.jpg", jpg ) )
		)
	)
);
tree << Set Stretch( "Window", "Window" ) << Set Max Size( 10000, 10000 );
scroll << Set Stretch( "Window", "Window" ) << Set Max Size( 10000, 10000 );
Wait( 2 );
tree << User Resizable( {0, 0} );
scroll << User Resizable( {0, 0} );

```

### Get Vertical Alignment

**语法:** obj &lt;&lt; Vertical Alignment( "Default"|"Top"|"Center"|"Bottom" );"Default"|"Top"|"Center"|"Bottom" = obj &lt;&lt; Get Vertical Alignment

**说明:** 垂直对齐控制在容器中的位置（若框未占满整个空间）。

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
lb = r[List Box( 6 )];
lb << Set Horizontal( 1 );
lb = r[List Box( 7 )];
lb << Border( 1 );
Wait( 2 );
lb << Vertical Alignment( "Bottom" );

```

### Get Visibility

**语法:** obj &lt;&lt; Visibility( "Visible"|"Hidden"|"Collapse" );"Visible"|"Hidden"|"Collapse" = obj &lt;&lt; Get Visibility

**说明:** 可见性决定框是否显示以及框是否占据空间。"Visible" 的默认值表示将显示对象。"Hidden" 框为不显示但仍占据空间，而 "Collapsed" 框不在布局中占据空间。

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Show( tb << Get Visibility );
Wait( 1 );
tb << Visibility( "Collapse" );
Show( tb << Get Visibility );

```

### Get Web Support

**语法:** obj &lt;&lt; Get Web Support

**说明:** 返回一个数字，指示显示对象的交互式 HTML 支持的水平。1 表示支持部分或全部元素。0 表示不支持。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

### Get Width

**语法:** width = obj &lt;&lt; Get Width

**说明:** 返回显示框的宽度。

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/big class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
fb = r[framebox( 1 )];
fb << Get Width;

```

### Get Window Icon

**语法:** obj &lt;&lt; Get Window Icon

**说明:** 返回窗口图标。

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
t = w << Get Window Icon;
Show( t );

```

### Get Window Position

**语法:** obj &lt;&lt; Get Window Position

**说明:** 返回窗口的位置。

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
p = w << Get Window Position();
Show( p );

```

### Get Window Size

**语法:** obj &lt;&lt; Get Window Size

**说明:** 返回窗口大小。

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
s = w << Get Window Size();
Show( s );

```

### Get Window Title

**语法:** obj &lt;&lt; Get Window Title

**说明:** 返回窗口标题。

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
t = w << Get Window Title;
Show( t );

```

### Get Window View

**语法:** obj &lt;&lt; Get Window View

**说明:** 返回当前窗口视图。窗口可以为“可见”、“不可见”或“私有”。

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
Print( w << Get Window View() );

```

### Get XML

**语法:** obj &lt;&lt; Get XML( &lt;English(0|1)&gt;, &lt;NoData(0|1)&gt; )

**说明:** 检索 XML 格式的显示树。默认情况下，字符串以本地语言返回，XML 在某些框中包括数据值。使用 English 选项返回可用的英语字符串。使用 NoData 选项省略框中的数据值，对于某些显示树来说，这些数据值可能非常大。

```jsl

//This message applies to all display box objects
win = New Window( "test", a = Text Box( "my test" ) );
a << set text( win << get xml );

```

### GetOffset

**语法:** x,y = obj &lt;&lt; GetOffset

**说明:** 返回相对于父框该显示框的偏移。您可能需要在循环中使用 <<Parent 消息来累积若干偏移。

```jsl

New Window( "example",
	MouseBox(
		Graph Box(
			title( "title" ),
			Pen Size( 3 );
			Y Function( -3 + 100 / 2 * (1 + Sin( (2 * Pi() * (x + .3)) / 100 )), x );
		),
		<<settrackenable( 1 ) // put the mouse box to work, watching "tracking"
	,
		<<settrack( // events from the mouse (movement, with button up or down)
			Function( {this, pt}, // parameters: this is the mousebox, pt is mouse x,y
				{fb, offset, t, off, size}, // local variables
				// recalulate offset and size each time, the values can change
				fb = this[framebox( 1 )]; // the framebox in the graph 
				offset = [0, 0]; // accumulator to sum up the offset between framebox and mousebox
				t = fb; // a temporary box that starts at the frame 
				While( t != this, // and walks up to the mousebox
					off = t << getOffset; // ask each box for its offset to the immediate parent
					offset += Matrix( off ); // convert list answer to matrix so + will work
					t = t << parent; // crawl up to the mousebox, one box at a time
				);
				size = Matrix( fb << getSize ); // the frame knows its size
				If( // over the frame box
					offset[1] < pt[1] < offset[1] + size[1] & offset[2] < pt[2] < offset[2]
					 + size[2]
				,
					fb << setbackgroundcolor( "red" ),
					fb << setbackgroundcolor( "blue" )
				);
			)
		)
	)
);

```

### Horizontal Alignment

**语法:** obj &lt;&lt; Horizontal Alignment( "Default"|"Left"|"Center"|"Right" );"Default"|"Left"|"Center"|"Right" = obj &lt;&lt; Get Horizontal Alignment

**说明:** 水平对齐控制框在容器中的位置（若框未占满整个空间）。

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
lb = r[List Box( 6 )];
lb << Border( 1 );
Wait( 2 );
lb << Horizontal Alignment( "Right" );

```

### Inval

**语法:** obj &lt;&lt; Inval

**说明:** 使显示框无效。若 <<UpdateWindow 消息已发送或操作系统有时间更新，窗口将更新。

```jsl

//This message applies to all display box objects
color = "green"; /* initial color in a variable */
New Window( "Inval example",
	Button Box( "red",
		color = "red";
		g1 << inval; /* tell the oval to redraw */
		g2 << inval; /* tell the rectangle to redraw */
		g1 << updateWindow; /* tell the window to update immediately */
		// this is a busy-wait to help demonstrate the various behaviors...
		x = Tick Seconds();
		While( Tick Seconds() - x < .5, 0 /* delay without wait(.5) */ );
	),
	Button Box( "blue",
		color = "blue";
		g1 << inval; /* same comments */
		g2 << inval;
		g1 << updateWindow;
		x = Tick Seconds();
		While( Tick Seconds() - x < .5, 0 );
	),
	g1 = Graph Box(/* the graph does NOT watch for the color variable to change 
                      but will use the current value of color when it reshows */
		Fill Color( color );
		Oval( 10, 80, 70, 50, 1 );
	),
	g2 = Graph Box(
		Fill Color( color );
		Rect( 10, 80, 70, 50, 1 );
	)
);

```

### Is Dirty

**语法:** obj &lt;&lt; Is Dirty

**说明:** 获取文档的修改状态。1 表示文档已修改并且将提示保存；0 表示文档未修改。

**JMP添加的版本:** 14

```jsl


ww = New Window( "Test", <<Script, "Open(\!"$SAMPLE_DATA\Big Class.jmp\!");" );
Show( ww << Is Dirty );
ww << Set Dirty( 0 );
Show( ww << Is Dirty );

```

### Is Modal Dialog

**语法:** obj &lt;&lt; Is Modal Dialog

**说明:** 若窗口是模态对话框，则返回 true。仅当从窗口处理程序回调调用时有用。

```jsl

With Window Handler(
	New Window( "Modal Window", <<Modal ),
	Function( {win},
		Print( win << Is Modal Dialog() );
		win << close window();
	)
);

```

### Journal

**语法:** obj &lt;&lt; Journal

**说明:** 从显示框生成记录。

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << journal;

```

### Journal Window

**语法:** obj &lt;&lt; Journal Window

**说明:** 打开窗口的记录窗口。

```jsl

//This message applies to all display box objects
w = New Window( "Main Window", Text Box( "Main JMP Window" ) );
w << Journal Window;

```

### Launch

**语法:** obj &lt;&lt; Launch

**说明:** 在显示框的上下文中对指定的“argument”求值。

```jsl

//This message applies to all display box objects
Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "example",
	ob1 = Outline Box( "treemap launcher" ),
	ob2 = Outline Box( "bivariate partial" ),
	ob3 = Outline Box( "bivariate launched" )
);
ob1 << launch( Treemap() );
ob2 << launch( Bivariate( Y( :height ) ) );
ob3 << launch( Bivariate( Y( :height ), X( :weight ) ) );

```

### Make RowState Handler

**语法:** rs = obj &lt;&lt; Make RowState Handler( &lt;dt&gt;, function(a) )

**说明:** 为给定的数据表或当前数据表创建行状态处理程序。当框的过滤器上下文中的行状态更改时调用该函数。函数的参数保存已更改的行号，若行状态过滤器已更改，则保存 -1。

#### Single table

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "filter test",
	Data Filter Context Box(
		H List Box(
			dt << Data Filter(
				Local,
				Add Filter( columns( :height ), Where( :height >= 51 & :height <= 62 ) ),
				Mode( Select( 0 ), Show( 1 ), Include( 1 ) )
			),
			V List Box(
				t = Text Box( "0 Rows Excluded" ),
				Distribution(
					Continuous Distribution( Column( :weight ) ),
					Nominal Distribution( Column( :age ) )
				)
			)
		)
	)
);
updatetext = Function( {},
	rs = t << Get Row States( dt );
	n = 0;
	For( ii = 1, ii <= N Rows( rs ), ii++,
		If( Excluded( As Row State( rs[ii] ) ),
			n
			++)
	);
	t << Set Text( Char( n ) || " Rows Excluded" );
);
rsupdate = Function( {a},
	If( Is Matrix( a ),
		updatetext()
	)
);
rsh = t << Make Row State Handler( dt, rsupdate );
updatetext();

```

#### Where subset

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "filter test",
	t = Text Box( "0 Rows Excluded" ),
	dist = Distribution(
		Continuous Distribution( Column( :weight ) ),
		Nominal Distribution( Column( :age ) ),
		Local Data Filter(
			Add Filter( columns( :height ), Where( :height >= 51 & :height <= 62 ) ),
			Mode( Select( 0 ), Show( 1 ), Include( 1 ) )
		),
		Where( :sex == "F" )
	)
);
subset = dist << Get Data Table();
updatetext = Function( {},
	rs = Report( dist ) << Get Row States( subset );
	n = 0;
	For( ii = 1, ii <= N Rows( rs ), ii++,
		If( Excluded( As Row State( rs[ii] ) ),
			n
			++)
	);
	t << Set Text( Char( n ) || " Rows Excluded" );
);
rsupdate = Function( {a},
	If( Is Matrix( a ),
		updatetext()
	)
);
rsh = Report( dist ) << Make Row State Handler( subset, rsupdate );
updatetext();

```

### Margin

**语法:** obj &lt;&lt; Margin( sides );sides = obj &lt;&lt; Get Margin

**说明:** 边距在框和邻接框的边框之间添加空白。使用命名参数，或提供值列表。若提供单个值，它将应用于所有边。若指定两个值，它们将应用于水平和垂直边距。

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Show( tb << Get Margin );
tb << Border( 1 );
Wait( 2 );
tb << Margin( Left( 20 ), Top( 20 ), Right( 20 ), Bottom( 20 ) );

```

### Maximize Window

**语法:** obj &lt;&lt; Maximize Window( &lt;state=0|1&gt; )

**说明:** 最大化窗口。默认参数为 1。

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 1 );
w << Maximize Window( 1 );
Wait( 1 );
w << Maximize Window( 0 );

```

### Minimize Window

**语法:** obj &lt;&lt; Minimize Window( &lt;state=0|1&gt; )

**说明:** 最小化窗口。默认参数为 1。

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 1 );
w << Minimize Window( 1 );
Wait( 1 );
w << Minimize Window( 0 );

```

### Move Window

**语法:** obj &lt;&lt; Move Window( x,y )

**说明:** 将窗口移至指定位置。

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
w << Move Window( 500, 500 );

```

### Next

**语法:** obj &lt;&lt; Next

**说明:** 返回该显示框后的显示框。

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
next = rbiv << Next();
Print( next << Class Name() );

```

### On Close

**语法:** obj &lt;&lt; On Close( script )

**说明:** 设置脚本或函数以在关闭窗口时运行。该脚本应返回 1 以允许关闭，或返回 0 以阻止窗口关闭。

#### 关闭函数

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << On Close(
	Function( {this}, 
        // Modal dialogs return Button(1) if OK is pressed, Button(-1) if cancelled
		New Window( "Are you sure?",
			<<modal,
			V List Box(
				Text Box( "Press OK to allow " || (this << Get Window Title) || " to close" ),
				H List Box( Button Box( "OK" ), Button Box( "Cancel" ) )
			)
		)["button"] == 1
	)
);

```

#### 关闭脚本

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << On Close(
    // Modal dialogs return Button(1) if OK is pressed, Button(-1) if canceled
	New Window( "Are you sure?",
		<<modal,
		V List Box(
			Text Box( "Press OK to allow the window to close" ),
			H List Box( Button Box( "OK" ), Button Box( "Cancel" ) )
		)
	)["button"] == 1
);

```

### Optimize Display

**语法:** obj &lt;&lt; Optimize Display

**说明:** 将数据表的列宽度和窗口设置为最佳大小。

**JMP添加的版本:** 14

```jsl

//This message applies to Data Table objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Optimize Display;

```

### Pad Window

**语法:** obj &lt;&lt; Pad Window( bool )

**说明:** 开启或关闭窗口填充。

```jsl

//This message applies to all display box objects
Open( "$SAMPLE_DATA/Big Class.jmp" );
d = distribution( Column( :height ) );
r = d << report;
r << Pad Window( 0 );

```

### Padding

**语法:** obj &lt;&lt; Padding( sides );sides = obj &lt;&lt; Get Padding

**说明:** 填充在内容和框的边框之间添加空白。使用命名参数，或提供值列表。若提供单个值，它将应用于所有边。若指定两个值，它们将应用于水平和垂直填充。

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Show( tb << Get Padding );
tb << Border( 1 );
Wait( 1 );
tb << Padding( Left( 20 ), Top( 20 ), Right( 20 ), Bottom( 20 ) );

```

### Page Break

**语法:** obj &lt;&lt; Page Break

**说明:** 在显示框之前插入分页符。

```jsl

//This message applies to all display box objects
New Window( "Example",
	ob = Outline Box( "Outline Box",
		V List Box(
			ob2 = Outline Box( "Outline Box 2",
				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )
			),
			ob3 = Outline Box( "Outline Box",
				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )
			)
		)
	)
);
ob3 << Page Break;

```

### Parent

**语法:** obj &lt;&lt; Parent

**说明:** 返回该显示框的父级项。

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
axisbox = rbiv[axis box( 1 )];
axisParent = axisbox << parent();
Print( axisParent << Class Name() );

```

### Prepend

**语法:** obj &lt;&lt; Prepend( db2 )

**说明:** 将“db2”添加到显示树的“db”之前。

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << prepend( Text Box( "=== above ===" ) );

```

### Prev Sib

**语法:** obj &lt;&lt; Prev Sib

**说明:** 返回该显示框的前一个平级项。

**JMP添加的版本:** 15

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
axisbox = rbiv[axis box( 2 )];
axisSibling = axisbox << Prev Sib();
Print( axisSibling << Class Name() );

```

### Print Window

**语法:** obj &lt;&lt; Print Window

**说明:** 打印窗口。

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << Print Window;

```

### Reshow

**语法:** obj &lt;&lt; Reshow

**说明:** 使显示框无效并用新内容更新窗口。若随着更新需要更多的控件，请参见 <<Inval 和 <<UpdateWindow 消息。

```jsl

//This message applies to all display box objects
color = "green"; /* initial color in a variable */
New Window( "Reshow example",
	Button Box( "red",
		color = "red";
		g << reshow/* tell the graph that something changed */;
	),
	Button Box( "blue",
		color = "blue";
		g << reshow/* tell the graph that something changed */;
	),
	g = Graph Box(/* the graph does NOT watch for the color variable to change
                     but will use the current value of color when it reshows */
		Fill Color( color );
		Oval( 10, 80, 70, 50, 1 );
	)
);

```

### Save Capture

**语法:** obj &lt;&lt; Save Capture( &lt;"path"&gt;, &lt;format&gt;, &lt;Add Sibling(n)&gt; )

**说明:** 在指定的 path 处保存显示框抓屏图。若未指定 path，则显示“另存为”窗口。

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save Capture( "$TEMP/jmp_example.png", "png" );

```

### Save HTML

**语法:** obj &lt;&lt; Save HTML( &lt;pathname&gt;, &lt;format&gt; )

**说明:** 以指定的“format”格式保存 HTML 源和图形文件夹。

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save HTML( "$TEMP/jmp_example.html" );

```

### Save Interactive HTML

**语法:** obj &lt;&lt; Save Interactive HTML( &lt;pathname&gt;, &lt;Boolean&gt; )

**说明:** 将带数据的交互式 HTML 保存至文件。Boolean 参数表示报表为静态。

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save Interactive HTML( "$TEMP/jmp_example.html" );

```

### Save Journal

**语法:** obj &lt;&lt; Save Journal( &lt;pathname&gt; )

**说明:** 保存显示框的记录源。

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save Journal( "$TEMP/jmp_example.jrn" );

```

### Save MSWord

**语法:** obj &lt;&lt; Save MSWord( &lt;pathname&gt;, &lt;format&gt; )

**说明:** 将显示框保存为 Microsoft Word 文档（仅限于 Windows）。

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save MSWord( "$TEMP/jmp_example.doc" );

```

### Save PDF

**语法:** obj &lt;&lt; Save PDF( &lt;pathname&gt;, &lt;Show Page Setup(0|1)&gt;, &lt;Portrait(0|1)&gt; )

**说明:** 将显示框保存为 PDF 文件。

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save PDF( "$TEMP/jmp_example.pdf" );

```

### Save Picture

**语法:** obj &lt;&lt; Save Picture( &lt;pathname&gt;, &lt;format&gt;, &lt;Scale(factor)&gt;, &lt;Type("Bitmap" | "Scalable")&gt;, &lt;View("Picture" | "Screen" | "Print"), &lt;Appearance("Default" | "Current")&gt;, &lt;SubRect(Left(number), Top(number), Right(number), Bottom(number))&gt; )

**说明:** 保存显示框的图片。支持的格式包括 EMF(Windows)、PICT(Macintosh)、JPEG 或 JPG、GIF 或 PNG。可选的 Scale 参数将以统一尺度的分辨率呈现图像。统一尺度要求显示框可伸缩。Type 参数确定结果将是可缩放矢量图像还是位图。默认返回可缩放图像，它适合保存为矢量格式，例如 PDF。View 选项更改某些框的行为。"Picture" 的默认选项按照导出为图像格式时的方式绘制报表，其滚动区域完全显示。"Screen" 的视图模式按照屏幕上看到的方式绘制报表，"Print" 按照打印时的方式绘制报表，而没有任何页面设置功能。SubRect 选项将捕获生成的图像的一部分而不是整个图像。Appearance 选项可以从 "Default" 输出颜色更改为屏幕上看到的 "Current" 颜色。只有 Type "Bitmap" 支持 View、SubRect 和 Appearance 选项。

#### 尺度

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv[FrameBox( 1 )] << Set Stretch( "Window", "Window" );
rbiv << Save Picture( "$TEMP/jmp_example_scale.png", "png", Scale( 1.5 ) );
New Window( "scaled image", New Image( "$TEMP/jmp_example_scale.png" ) );

```

#### 视图和外观

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate(
	Y( :weight ),
	X( :height ),
	Fit Line( {Line Color( {212, 73, 88} )} ),
	Fit Polynomial( 3, {Line Color( {61, 174, 70} )} ),
	Kernel Smoother( 1, 1, 0.5, 0 )
);
rbiv = biv << report;
rbiv << Save Picture(
	"$TEMP/jmp_example_screen.png",
	"png",
	View( "Screen" ),
	Appearance( "Current" )
);
rbiv << Save Picture(
	"$TEMP/jmp_example_print.png",
	"png",
	View( "Print" ),
	Appearance( "Default" )
);
New Window( "Example",
	H List Box(
		New Image( "$TEMP/jmp_example_screen.png" ),
		New Image( "$TEMP/jmp_example_print.png" )
	)
);

```

#### 默认值

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save Picture( "$TEMP/jmp_example.png", "png" );

```

### Save Presentation

**语法:** obj &lt;&lt; Save Presentation( "filename.pptx", &lt;Template("path\\to\\my_template.pptx")&gt;, &lt;Insert(Begin|End|#) | Replace(Begin|End|#) | Append&gt;, &lt;Outline Titles(None|Hide|TopLeft|TopRight|BottomLeft|BottomRight)&gt;, &lt;"EMF"|"PNG"|"JPG"|"Native"&gt; )

**说明:** 在演示文稿中保存显示框表和图形幻灯片。演示文稿可以使用 Microsoft PowerPoint 或其他演示文稿软件打开。

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save Presentation( "$TEMP/jmp_example.pptx" );
Open( "$TEMP/jmp_example.pptx" );

```

### Save RTF

**语法:** obj &lt;&lt; Save RTF( &lt;pathname&gt;, &lt;format&gt; )

**说明:** 以指定的“format”格式保存带图形的 RTF 源。

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save RTF( "$TEMP/jmp_example.rtf", "png" );

```

### Save Text

**语法:** obj &lt;&lt; Save Text( &lt;pathname&gt;, &lt;format&gt; )

**说明:** 保存包含显示框的文本的文件。

```jsl

//This message applies to all display box objects
win = New Window( "Example", a = Text Box( "Example Text" ) );
a << save text( "$TEMP/jmp_example.txt" );

```

### Save Window Report

**语法:** obj &lt;&lt; Save Window Report( pathname, &lt;embed data(0|1)&gt; )

**说明:** 将当前报表窗口保存至 JMP 报表文件 (.jrp)。

**JMP添加的版本:** 16

```jsl

//This message can be sent to any display box object but will be applied to the report window
Open( "$SAMPLE_DATA/Big Class.jmp" );
d = distribution( Column( :height ) );
d << Save Window Report( "$DOCUMENTS/test.jrp", embed data( 1 ) );

```

### Scroll Window

**语法:** obj &lt;&lt; Scroll Window( DisplayBox | &lt;Relative(&lt;v&gt; | &lt;h&gt;,&lt;v&gt;)&gt; | &lt;Absolute(&lt;v&gt; | &lt;h&gt;,&lt;v&gt;) )

**说明:** 调整窗口滚动条以显示给定的 DisplayBox，或滚动相对像素数，或滚动至绝对像素位置。可以使用关键字 "Start" 或 "End" 来代替像素数。

#### Absolute

```jsl


Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
fm = Fit Model(
	Y( :BP 8M, :BP 12M, :BP 6M, :BP 8W, :BP 12W, :BP 6W, :BP 8F, :BP 12F, :BP 6F ),
	Effects( :Subject, :Dose ),
	Personality( "Manova" ),
	Run
);
fm << setwindowsize( 600, 600 ); // shrink the window
fm << scroll window( Absolute( "End", "End" ) );
Wait( 1 );
fm << scroll window( Absolute( 0, 300 ) );
Wait( 1 );

```

#### Box

```jsl


Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
fm = Fit Model(
	Y( :BP 8M, :BP 12M, :BP 6M, :BP 8W, :BP 12W, :BP 6W, :BP 8F, :BP 12F, :BP 6F ),
	Effects( :Subject, :Dose ),
	Personality( "Manova" ),
	Run
);
fm << setwindowsize( 600, 600 ); // shrink the window
For( i = 1, i <= 5, i++, // repeatedly, bring each frame box into view for 1/2 second
	fm << scroll window( Report( fm )[framebox( 2 )] );
	Wait( .5 );
	fm << scroll window( Report( fm )[framebox( 3 )] );
	Wait( .5 );
	fm << scroll window( Report( fm )[framebox( 1 )] );
	Wait( .5 );
);

```

#### Relative

```jsl


Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
fm = Fit Model(
	Y( :BP 8M, :BP 12M, :BP 6M, :BP 8W, :BP 12W, :BP 6W, :BP 8F, :BP 12F, :BP 6F ),
	Effects( :Subject, :Dose ),
	Personality( "Manova" ),
	Run
);
fm << setwindowsize( 600, 600 ); // shrink the window
fm << scroll window( Relative( 300 ) );
Wait( 1 );
fm << scroll window( Relative( -50 ) );
Wait( 1 );
fm << scroll window( Relative( "Start" ) );
Wait( 1 );

```

### Select

**语法:** obj &lt;&lt; Select

**说明:** 选择该对象，以供“编辑”菜单命令使用。

```jsl

//This message applies to all display box objects
New Window( "Example", ex = Button Box( "Press Me" ) );
ex << Select;

```

### Set Content Size

**语法:** obj &lt;&lt; Set Content Size( x,y )

**说明:** 设置窗口中内容的大小。

```jsl

//This message applies to all display box objects
w = New Window( "Test",
	lb = List Box( {"a", "b", "c", "d"} ),
	Button Box( "Enable 2nd item",
		lb << enable item( 2, 1 );
		Show( lb << item enabled( 2 ) );
	),
	Button Box( "Disable 2nd item",
		lb << enable item( 2, 0 );
		Show( lb << item enabled( 2 ) );
	)
);
Wait( 2 );
w << Set Content Size( 400, 300 );

```

### Set Dirty

**语法:** obj &lt;&lt; Set Dirty

**说明:** 设置文档的修改状态。0 将不提示保存；1 将提示。

**JMP添加的版本:** 14

```jsl


ww = New Window( "Test", <<Script, "Open(\!"$SAMPLE_DATA\Big Class.jmp\!");" );
Show( ww << Is Dirty );
ww << Set Dirty( 0 );
Show( ww << Is Dirty );

```

### Set Height

**语法:** obj &lt;&lt; Set Height( width )

**说明:** 设置显示框的高度。

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
fb = r[framebox( 1 )];
fb << Set Height( 150 );

```

### Set Main Window

**语法:** obj &lt;&lt; Set Main Window

**说明:** 将窗口设置为 JMP 中的主窗口，并将之前的主窗口设置为常规窗口

```jsl

//This message applies to all display box objects
w = New Window( "Main Window", Text Box( "Main JMP Window" ) );
w << Set Main Window;

```

### Set Max Size

**语法:** obj &lt;&lt; Set Max Size( width,height )

**说明:** 设置该显示框的最大自动拉伸尺寸。

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/big class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
fb = r[framebox( 1 )];
fb << Set Max Size( 500, 500 );
fb << Get Max Size;

```

### Set Min Size

**语法:** obj &lt;&lt; Set Min Size( width,height )

**说明:** 设置该显示框的最小自动拉伸尺寸。

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/big class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
fb = r[framebox( 1 )];
fb << Set Min Size( 30, 30 );
fb << Get Min Size;

```

### Set Page Setup

**语法:** obj &lt;&lt; Set Page Setup( &lt;margins(left, top, right, bottom)&gt;, &lt;scale(s)&gt;, &lt;portrait(0|1)&gt;, &lt;paper size(p)&gt;, &lt;Table of Contents(always, never, default)&gt; )

**说明:** 设置打印或保存为 pdf 时使用的页面设置信息。可以选择从分级显示项框生成目录。

```jsl

//This message applies to all display box objects
w = New Window( "Window", Outline Box( "TOC", Text Box( "Page Setup Test" ) ) );
w << Set page setup(
	margins( 1, 1, 1, 1 ),
	scale( 1 ),
	portrait( 1 ),
	paper size( "Letter" ),
	Table of Contents( "always" )
);
w << Save pdf( "$DOCUMENTS\test.pdf" );

```

### Set Print Footers

**语法:** obj &lt;&lt; Set Print Footers( left footer, center footer, right header )

**说明:** 为打印输出设置居左、居中和居右的页脚

```jsl

//This message applies to all display box objects
w = New Window( "Window", Text Box( "Footer Test" ) );
w << Set Print Footers(
	"Today is: &d;"/*left*/, "&wt;"/*center*/,
	"Page &pn; of &pc;"/*right*/
);
w << Print Window;

```

### Set Print Headers

**语法:** obj &lt;&lt; Set Print Headers( left header, center header, right header )

**说明:** 为打印输出设置居左、居中和居右的页眉

```jsl

//This message applies to all display box objects
w = New Window( "Window", Text Box( "Header Test" ) );
w << Set Print Headers(
	"Today is: &d;"/*left*/, "&wt;"/*center*/,
	"Page &pn; of &pc;"/*right*/
);
w << Print Window;

```

### Set Property

**语法:** obj &lt;&lt; Set Property( "property", value )

**说明:** 设置显示框的已命名的“property”的值。

```jsl

New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Set Property( "Enabled", 0 );

```

### Set Report Title

**语法:** obj &lt;&lt; Set Report Title( "string" )

**说明:** 更改报表标题。

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Set Report Title( "New Title" );

```

### Set Stretch

**语法:** obj &lt;&lt; Set Stretch( x,y )

**说明:** 设置框的水平和垂直拉伸行为。随 Window 拉伸的框将随窗口或拆分窗口大小更改调整大小。拉伸 Fill 的框将拉伸以填充它们容器中的可用空间。拉伸设置为 Off 的框通常情况下不拉伸。大多数框默认设置为 Neutral，这表示它们将根据其子框确定行为。

**JMP添加的版本:** 16

#### 拉伸填充

```jsl

//This message applies to all display box objects
New Window( "Stretch",
	V List Box(
		H List Box( Text Edit Box( "String1" ), Text Edit Box( "String2" ) ),
		Spacer Box( Size( 20, 20 ), Color( "Light Red" ), <<Set Stretch( "Fill", "Off" ) )
	)
);

```

#### 随窗口拉伸

```jsl

//This message applies to all display box objects
New Window( "Example",
	H List Box(
		tv = Text Box( "V+V", <<rotate text( left ) ),
		V List Box(
			Text Box( "resize the containing window" ),
			th = Text Box( "H+H" ),
			ts = Spacer Box( <<Size( 10, 30 ), <<Color( "blue" ) )
		)
	)
);
tv << Vertical Alignment( "Center" );
th << Horizontal Alignment( "Center" );
th << Set Stretch( "Window", "Off" );
ts << Set Min Size( 5, 20 );
ts << Set Max Size( 100000, 100 );
ts << Set Stretch( "Window", "Window" );

```

### Set Summary Behavior

**语法:** obj &lt;&lt; Set Summary Behavior( "Default"|"Visible"|"Collapse" )

**说明:** Sets the behavior of the box when a report is viewed in Summary mode.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
d << Report View( "Summary" );
r = d << Report;
tb = r[Table Box( 1 )];
tb << Set Summary Behavior( "Visible" );

```

### Set Width

**语法:** obj &lt;&lt; Set Width( width )

**说明:** 设置显示框的宽度。

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/big class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
fb = r[framebox( 1 )];
fb << Set Width( 400 );

```

### Set Window Icon

**语法:** obj &lt;&lt; Set Window Icon( icon name )

**说明:** 设置窗口图标。

```jsl

//This message applies to all display box objects
w = New Window( "Example", ex = Button Box( "New Analysis" ) );
w << Set Window Icon( "Scatter3D" );

```

### Set Window Size

**语法:** obj &lt;&lt; Set Window Size( x,y )

**说明:** 设置窗口大小。

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << Set Window Size( 800, 1200 );

```

### Set Window Title

**语法:** obj &lt;&lt; Set Window Title( "string" )

**说明:** 更改窗口标题。

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Set Window Title( "New Title" );

```

### Show Properties

**语法:** obj &lt;&lt; Show Properties

**说明:** 为显示框显示属性编辑器

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Show Properties();

```

### Show Tree Structure

**语法:** obj &lt;&lt; Show Tree Structure

**说明:** 显示该显示框及其相关节点的层次树状结构。

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Show Tree Structure();

```

### Show Window

**语法:** obj &lt;&lt; Show Window( state=0|1 )

**说明:** 显示或隐藏窗口。该功能可用于临时隐藏窗口。 默认开启。

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 1 );
w << Show Window( 0 );
Wait( 2 );
w << Show Window( 1 );

```

### Sib

**语法:** obj &lt;&lt; Sib

**说明:** 返回该显示框的平级项。

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
axisbox = rbiv[axis box( 1 )];
axisSibling = axisbox << sib();
Print( axisSibling << Class Name() );

```

### Sib Append

**语法:** obj &lt;&lt; Sib Append( Display box, Horizontal|Vertical )

**说明:** 紧接在该显示框之后添加一个显示框。

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/big class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
fb = r()[framebox( 1 )];
fb << sib append(
	Text Box( "============ after ==============", Rotate Text( "Right" ) ),
	"Horizontal"
);
fb << sib append( Text Box( "=== below ===" ), "Vertical" );

```

### Sib Prepend

**语法:** obj &lt;&lt; Sib Prepend( Display box, Horizontal|Vertical )

**说明:** 紧接在该显示框之前添加一个显示框。

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/big class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
fb = r[framebox( 1 )];
fb << sib prepend(
	Text Box( "    ============ before ==============", Rotate Text( "Right" ) ),
	"Horizontal"
);
fb << sib prepend( Text Box( "=== above ===" ), "Vertical" );

```

### Size Window

**语法:** obj &lt;&lt; Size Window( x,y )

**说明:** 设置窗口大小。

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << Size Window( 500, 500 );

```

### Text Color

**语法:** obj &lt;&lt; Text Color( color );color = obj &lt;&lt; Get Text Color

**说明:** 将使用文本颜色（若已设置）绘制文本。若未设置属性，则框将继承包含框的文本颜色。

**JMP添加的版本:** 15

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Show( tb << Get Text Color );
Wait( 2 );
tb << Text Color( "Red" );

```

### Top Parent

**语法:** obj &lt;&lt; Top Parent

**说明:** 返回该显示框的根级。

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rootParent = rbiv << Top Parent();
Print( rootParent << Class Name() );

```

### UI Only

**语法:** obj &lt;&lt; UI Only( state=0|1 );state = obj &lt;&lt; Get UI Only

### Update Window

**语法:** obj &lt;&lt; Update Window

**说明:** 若有失效的区域，则更新包含显示框的窗口。<<Inval 消息创建失效区域。

```jsl

//This message applies to all display box objects
color = "green"; /* initial color in a variable */
New Window( "UpdateWindow example",
	Button Box( "red",
		color = "red";
        // try commenting out each of the 4 lines that follow, run the script,
		// click the buttons, and resize the windows (for example) to force a
		// redraw.  All 4 lines are important, though the last two may be
		// slightly different on Windows and Mac OSs.
		g1 << inval; /* tell the oval to redraw */
		g2 << inval; /* tell the rectangle to redraw */
		g1 << updateWindow; /* tell the oval window to update immediately */
		g2 << updateWindow; /* tell the rect window to update immediately */
		// this is a busy-wait to help demonstrate the various behaviors...
		x = Tick Seconds();
		While( Tick Seconds() - x < .5, 0 /* delay without wait(.5) */ );
	),
	Button Box( "blue",
		color = "blue";
		g1 << inval; /* same comments */
		g2 << inval;
		g1 << updateWindow;
		g2 << updateWindow;
		x = Tick Seconds();
		While( Tick Seconds() - x < .5, 0 );
	)
);
New Window( "oval",
	g1 = Graph Box(/* the graph does NOT watch for the color variable to change
                      but will use the current value of color when it reshows */
		Fill Color( color );
		Oval( 10, 80, 70, 50, 1 );
	)
);
New Window( "rect",
	g2 = Graph Box(
		Fill Color( color );
		Rect( 10, 80, 70, 50, 1 );
	)
);

```

### User Resizable

**语法:** obj &lt;&lt; User Resizable;obj &lt;&lt; Get User Resizable

**说明:** 若用户可以调整该框的大小，则光标将在底部和右边缘附近改变，允许拖放式调整大小。

```jsl

root1 = Tree Node( "Parent 1" );
root2 = Tree Node( "Parent 2" );
c1 = Tree Node( "Child 1" );
c2 = Tree Node( "Child 2" );
c3 = Tree Node( "Child 3" );
c4 = Tree Node( "Child 4" );
root1 << Append( c1 );
root1 << Append( c2 );
root2 << Append( c3 );
root2 << Append( c4 );
New Window( "resize",
	H Splitter Box(
		Size( 600, 200 ),
		tree = Tree Box( {root1, root2} ),
		scroll = Scroll Box(
			Size( 300, 200 ),
			Picture Box( Open( "$SAMPLE_IMAGES/tile.jpg", jpg ) )
		)
	)
);
tree << Set Stretch( "Window", "Window" ) << Set Max Size( 10000, 10000 );
scroll << Set Stretch( "Window", "Window" ) << Set Max Size( 10000, 10000 );
Wait( 2 );
tree << User Resizable( {0, 0} );
scroll << User Resizable( {0, 0} );

```

### Vertical Alignment

**语法:** obj &lt;&lt; Vertical Alignment( "Default"|"Top"|"Center"|"Bottom" );"Default"|"Top"|"Center"|"Bottom" = obj &lt;&lt; Get Vertical Alignment

**说明:** 垂直对齐控制在容器中的位置（若框未占满整个空间）。

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
lb = r[List Box( 6 )];
lb << Set Horizontal( 1 );
lb = r[List Box( 7 )];
lb << Border( 1 );
Wait( 2 );
lb << Vertical Alignment( "Bottom" );

```

### Visibility

**语法:** obj &lt;&lt; Visibility( "Visible"|"Hidden"|"Collapse" );"Visible"|"Hidden"|"Collapse" = obj &lt;&lt; Get Visibility

**说明:** 可见性决定框是否显示以及框是否占据空间。"Visible" 的默认值表示将显示对象。"Hidden" 框为不显示但仍占据空间，而 "Collapsed" 框不在布局中占据空间。

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Show( tb << Get Visibility );
Wait( 1 );
tb << Visibility( "Collapse" );
Show( tb << Get Visibility );

```

### Window Class Name

**语法:** obj &lt;&lt; Window Class Name

**说明:** 返回显示框的窗口类的名称。

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
Show( biv << Window Class Name() );
Show( rbiv << Window Class Name() );

```

### XPath

**语法:** obj &lt;&lt; XPath( XPath expression, &lt;English(0|1)&gt;, &lt;NoData(0|1)&gt; )

**说明:** 将 XPath 表达式应用于显示树的 XML 表示并返回结果。默认情况下，字符串以本地语言返回，XML 在某些框中包括数据值。使用 English 选项返回可用的英语字符串。使用 NoData 选项来省略框中的数据值，当您的查询仅基于框特性时，这些数据值对性能很有用。

#### Attributes

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Run Script( "Bivariate" );
(Report( biv ) << xpath( "//OutlineBox[@isOpen='false']" )) << Close( 0 );

```

#### Box type

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Run Script( "Bivariate" );
(Report( biv ) << xpath( "//TextEditBox" )) << Text Color( "Green" );

```

#### Child box

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Run Script( "Bivariate" );
(Report( biv ) << xpath( "//OutlineBox[text()='Summary of Fit']/TableBox" )) <<
Make Into Data Table;

```

#### Data

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Run Script( "Bivariate" );
(Report( biv ) << xpath( "//NumberColBoxItem[text()='40']/parent::*" )) <<
Text Color( "Green" );

```

#### Display Seg

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Run Script( "Bivariate" );
(Report( biv ) << xpath( "//MarkerSeg" )) << Set Marker( "Square" );

```

#### Text

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Run Script( "Bivariate" );
(Report( biv ) << xpath( "//OutlineBox[text()='Parameter Estimates']" )) << Close;

```

### Zoom Window

**语法:** obj &lt;&lt; Zoom Window

**说明:** 调整窗口大小，使其大到足够显示其所有内容。

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << Set Window Size( 80, 120 );
Wait( 2 );
w << Zoom Window;

```

## 关联的构造器

### Table Box

**语法:** y = Table Box( displayBox, ... )

**说明:** 返回由一列或多列所组成表的显示框。

#### 示例 1

```jsl

New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);

```

#### 示例 2

```jsl

Open( "$SAMPLE_DATA/Baltic.jmp" );
d = Distribution( Continuous Distribution( Column( :ls ) ) );
rpt = d << report;
tb = rpt[Table Box( 1 )];
tb << Select;

```

## 项消息

### Add Row

**语法:** obj &lt;&lt; Add Row( {values,...} )

**说明:** 将数据行添加至表

```jsl

New Window( "test",
	tb = Table Box(
		String Col Box( "string col", {"a"} ),
		Number Col Box( "number col", {1} )
	)
);
tb << add row( {"b", 2} );

```

### Bootstrap

**语法:** obj &lt;&lt; Bootstrap( nsample, Random Seed(number), Fractional Weights(0|1), Split Selected Column(0|1), Discard Stacked Table if Split Works(0|1) )

**说明:** Bootstrap 该分析: 使用不同的再抽样权重多次重复该分析并按照选择收集表。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Line;
(obj << Report)[Table Box( 1 )] << Bootstrap(
	50,
	Fractional Weights( 1 ),
	Split Selected Column( 1 )
);

```

### Copy Selected Table Rows

**语法:** obj &lt;&lt; Copy Selected Table Rows

**说明:** 将选定行的内容复制到剪贴板

**JMP添加的版本:** 15

### Copy Table

**语法:** obj &lt;&lt; Copy Table

**说明:** 将表内容复制到剪贴板

**JMP添加的版本:** 15

### Delete Row

**语法:** obj &lt;&lt; Delete Row( row number )

**说明:** 删除表中的数据行

```jsl

New Window( "test",
	tb = Table Box(
		String Col Box( "string col", {"a", "b"} ),
		Number Col Box( "number col", {1, 2} )
	)
);
tb << delete row( 1 );

```

### Filter Where

**语法:** obj &lt;&lt; Filter Where

**说明:** 基于该行的值过滤表中的行。

**JMP添加的版本:** 17

```jsl

New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << set selectable rows( 1 );
tb << filter where( "Elevation (meters)"n < 4000 | Mountain == "K2" );

```

### Get

**语法:** obj &lt;&lt; Get

**说明:** 以列表形式返回表中条目。

```jsl

Open( "$SAMPLE_DATA/Baltic.jmp" );
d = Distribution( Continuous Distribution( Column( :ls ) ) );
rpt = d << report;
tb = rpt[Table Box( 1 )];
Print( tb << Get );

```

### Get As Matrix

**语法:** obj &lt;&lt; Get As Matrix( &lt;"Visible"&gt; )

**说明:** 以矩阵形式返回表的数值条目。若指定了 Visible 选项，则仅包括可见列。

```jsl

Open( "$SAMPLE_DATA/Baltic.jmp" );
d = Distribution( Continuous Distribution( Column( :ls ) ) );
rpt = d << report;
tb = rpt[Table Box( 1 )];
Print( tb << Get As Matrix );

```

### Get Base Data Font

**语法:** font = obj &lt;&lt; Get Base Data Font

**说明:** 返回该框绘制的文本所用的基本字体。基本字体包括“Title”、“Text”、“Annotation”之类的预定义名称，以及在字体“首选项”中指定的那些字体。

```jsl

New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Get Base Data Font;

```

### Get Base Title Font

**语法:** font = obj &lt;&lt; Get Base Title Font

**说明:** 返回该框绘制的文本所用的基本字体。基本字体包括“Title”、“Text”、“Annotation”之类的预定义名称，以及在字体“首选项”中指定的那些字体。

```jsl

New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Get Base Title Font;

```

### Get Click Sort

**语法:** 0|1 = obj &lt;&lt; Get Click Sort

**说明:** 若表可以通过单次点击列标题排序，则返回 1，否则返回 0

```jsl

New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Get Click Sort;

```

### Get Column Borders

**语法:** obj &lt;&lt; Get Column Borders( state=0|1 )

**说明:** 若当前正在绘制列边框，则返回 1

```jsl

New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Get Column Borders;

```

### Get Column Group Borders

**语法:** obj &lt;&lt; Get Column Group Borders( state=0|1 )

```jsl

New Window( "Mountains",
	tb = Table Box(
		Col Span Box(
			"Column Span",
			String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} )
		),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Get Column Group Borders;

```

### Get Context Menu Item State

**语法:** 0|1|-1 = obj &lt;&lt; Get Context Menu Item State( index )

**说明:** 获取 index 菜单项的上下文菜单项状态。状态可以是正常 (0)、选中 (1) 或禁用 (-1)

```jsl

New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Set Context Menu Script( {"A", Print( "A" ), "B", Print( "B" ), "C", Print( "C" )} );
tb << Set Context Menu Item State( 2, -1 );
tb << Get Context Menu Item State( 2 );

```

### Get Context Menu Script

**语法:** list = obj &lt;&lt; Get Context Menu Script

**说明:** 返回附加到调用对象的上下文菜单脚本。

```jsl

New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Set Context Menu Script(
	{"Beep", Beep(), "Beep Twice", Beep() ; Wait( 1.0 ) ; Beep() ; ,
	"Get Context Menu Script", Print( tb << Get Context Menu Script )}
);

```

### Get Context Menu Submenu

**语法:** obj &lt;&lt; Get Context Menu Submenu( index )

**说明:** 返回给定菜单项下面的子菜单数

```jsl

New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Set Context Menu Script(
	{"A", Print( "A" ), "B", Print( "B" ), "B1", Print( "B1" ), "B2", Print( "B2" ), "B3",
	Print( "B3" ), "C", Print( "C" )}
);
tb << Set Context Menu Submenu( 2, 3 );
tb << Get Context Menu Submenu( 2 );

```

### Get Data Font Name

**语法:** obj &lt;&lt; Get Data Font Name

**说明:** 返回字体名称。

```jsl

New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Set Data Font Name( "Times New Roman" );
tb << Get Data Font Name;

```

### Get Data Font Scale

**语法:** obj &lt;&lt; Get Data Font Scale

**说明:** 返回字体的当前缩放因子。

```jsl

New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Get Data Font Scale;

```

### Get Data Font Size

**语法:** obj &lt;&lt; Get Data Font Size

**说明:** 返回字体大小。

```jsl

New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Get Data Font Size;

```

### Get Data Font Style

**语法:** obj &lt;&lt; Get Data Font Style

**说明:** 返回字体样式名称。

```jsl

New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Set Data Font Name( "Arial" );
tb << Set Data Font Style( "Italic" );
tb << Get Data Font Style;

```

### Get Font

**语法:** obj &lt;&lt; Get Font

```jsl

New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Get Font;

```

### Get Heading Column Borders

**语法:** obj &lt;&lt; Get Heading Column Borders( state=0|1 )

**说明:** 若表的列标题当前有边框，则返回 1

```jsl

New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Get Heading Column Borders;

```

### Get Heading Underline Color

**语法:** obj &lt;&lt; Heading Underline Color( color );color = obj &lt;&lt; Get Heading Underline Color

**JMP添加的版本:** 19

```jsl

New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Set Underline Headings( 1 );
tb << Heading Underline Color( "Black" );
Show( tb << Get Heading Underline Color );

```

### Get Locked Columns

**语法:** obj &lt;&lt; Get Locked Columns

**说明:** 无法使用手形光标拖动或在其前放置列的列数。

```jsl

New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << set locked columns( 1 );
tb << get locked columns();

```

### Get Names

**语法:** obj &lt;&lt; Get Names

**说明:** 返回列名列表

```jsl

New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Get Names();

```

### Get Row Border Color

**语法:** obj &lt;&lt; Row Border Color( color );color = obj &lt;&lt; Get Row Border Color

**JMP添加的版本:** 19

```jsl

New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Set Row Borders( 1 );
tb << Row Border Color( "Black" );
Show( tb << Get Row Border Color );

```

### Get Row Borders

**语法:** obj &lt;&lt; Get Row Borders( state=0|1 )

**说明:** 若在每行上下绘制线条，则返回 1

```jsl

New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Get Row Borders;

```

### Get Row Change Function

**语法:** obj &lt;&lt; Get Row Change Function

**说明:** 返回当选择行时进行求值的表达式。

```jsl

New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Set Selectable Rows();
tb << set row change function( Function( {this}, Print( this << get selected rows ) ) );
tb << get row change function;

```

### Get Row Height Scale

**语法:** obj &lt;&lt; Row Height Scale( number );number = obj &lt;&lt; Get Row Height Scale

**说明:** 调整表行的默认高度。默认值为 1。

**JMP添加的版本:** 19

```jsl

New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Row Height Scale( 3 );
tb << Get Row Height Scale();

```

### Get Row Vertical Alignment

**语法:** obj &lt;&lt; Row Vertical Alignment( "顶部"|"中心"|"基线"|"底部" );"顶部"|"中心"|"基线"|"底部" = obj &lt;&lt; Get Row Vertical Alignment

**说明:** 设置表行中文本或数字的垂直对齐

**JMP添加的版本:** 19

```jsl

New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Row Vertical Alignment( "Bottom" );
tb << Get Row Vertical Alignment();
tb << Row Height Scale( 3 );

```

### Get Selectable Rows

**语法:** obj &lt;&lt; Get Selectable Rows

**说明:** 若表框当前允许行选择，则返回真

```jsl

New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Get Selectable Rows();

```

### Get Selected Row Color

**语法:** obj &lt;&lt; Get Selected Row Color

**说明:** 获取选定行的背景颜色

```jsl

New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Set Selectable Rows();
tb << Set Selected Row Color( "Red" );
Color To RGB( tb << Get Selected Row Color );

```

### Get Selected Rows

**语法:** obj &lt;&lt; Get Selected Rows

**说明:** 返回所选行号的矩阵。

```jsl

New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Set Selected Rows( [1, 4] );
Print( tb << Get Selected Rows() );

```

### Get Shade Alternate Rows

**语法:** obj &lt;&lt; Get Shade Alternate Rows( state=0|1 )

**说明:** 若每隔一行着色，则返回 1

```jsl

New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Get Shade Alternate Rows;

```

### Get Shade Cells

**语法:** obj &lt;&lt; Get Shade Cells( state=0|1 )

**说明:** 若表的单元格区域有着色背景，则返回 1

```jsl

New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Get Shade Cells;

```

### Get Shade Headings

**语法:** obj &lt;&lt; Get Shade Headings( state=0|1 )

**说明:** 若表的列标题当前着色，则返回 1

```jsl

New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Get Shade Headings;

```

### Get Title Font

**语法:** obj &lt;&lt; Get Title Font

```jsl

New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Get Title Font;

```

### Get Title Font Name

**语法:** obj &lt;&lt; Get Title Font Name

**说明:** 返回字体名称。

```jsl

New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Set Title Font Name( "Times New Roman" );
tb << Get Title Font Name;

```

### Get Title Font Scale

**语法:** obj &lt;&lt; Get Title Font Scale

**说明:** 返回字体的当前缩放因子。

```jsl

New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Get Title Font Scale;

```

### Get Title Font Size

**语法:** obj &lt;&lt; Get Title Font Size

**说明:** 返回字体大小。

```jsl

New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Get Title Font Size;

```

### Get Title Font Style

**语法:** obj &lt;&lt; Get Title Font Style

**说明:** 返回字体样式名称。

```jsl

New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Set Title Font Name( "Arial" );
tb << Set Title Font Style( "Italic" );
tb << Get Title Font Style;

```

### Get Underline Headings

**语法:** obj &lt;&lt; Get Underline Headings( state=0|1 )

**说明:** 若列标题带下划线，则返回 1

```jsl

New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Get Underline Headings;

```

### Group By Column

**语法:** obj &lt;&lt; Group By Column( &lt;column index or title&gt;, &lt;ascending=0|1&gt; )

**说明:** 将具有相同值的所有行分组在一起，并根据这些组对表排序。默认排序顺序是降序。

**JMP添加的版本:** 19

```jsl

dt = Open( "$sample_data\big class.jmp" );
New Window( "Test", dtb = Data Table Box( dt ) );
dtb << sort by column( 4 );
dtb << group by column( 3 );
dtb << set click sort( 1 );

```

### Heading Underline Color

**语法:** obj &lt;&lt; Heading Underline Color( color );color = obj &lt;&lt; Get Heading Underline Color

**JMP添加的版本:** 19

```jsl

New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Set Underline Headings( 1 );
tb << Heading Underline Color( "Black" );
Show( tb << Get Heading Underline Color );

```

### Insert Row

**语法:** obj &lt;&lt; Insert Row( row number, {values,...} )

**说明:** 将数据行插入表

```jsl

New Window( "test",
	tb = Table Box(
		String Col Box( "string col", {"a"} ),
		Number Col Box( "number col", {1} )
	)
);
tb << insert row( 1, {"b", 2} );

```

### Make Combined Data Table

**语法:** obj &lt;&lt; Make Combined Data Table

**说明:** 创建一个数据表，该表同时在报表中搜索具有相同列的表，然后将所有这些表合并入该新数据表中。

```jsl

Open( "$SAMPLE_DATA/Baltic.jmp" );
d = Distribution(
	Continuous Distribution( Column( :ls ) ),
	Continuous Distribution( Column( :ha ) )
);
rpt = d << report;
tb = rpt[Table Box( 1 )];
tb << Make Combined Data Table;

```

### Make Into Data Table

**语法:** obj &lt;&lt; Make Into Data Table( &lt;Invisible(bool) | Private(bool)&gt; )

**说明:** 创建新数据表，其包含 TableBox 中的值。

#### 示例 1

```jsl

Open( "$SAMPLE_DATA/Baltic.jmp" );
d = Distribution( Continuous Distribution( Column( :ls ) ) );
rpt = d << report;
tb = rpt[Table Box( 1 )];
tb << Make Into Data Table;

```

#### 示例 2

```jsl

Open( "$SAMPLE_DATA/Baltic.jmp" );
d = Distribution( Continuous Distribution( Column( :ls ) ) );
rpt = d << report;
tb = rpt[Table Box( 1 )];
tb << Make Into Data Table( invisible( 1 ) );

```

### Reorder Columns

**语法:** obj &lt;&lt; Reorder Columns( from column index,to column index )

**说明:** 对将 from column index 置于 to column index 的列重新排序。

```jsl

Open( "$SAMPLE_DATA/Baltic.jmp" );
d = Distribution( Continuous Distribution( Column( :ls ) ) );
rpt = d << report;
tb = rpt[Table Box( 1 )];
Wait( 1 );
tb << Reorder Columns( 1, 3 );

```

### Reset Filter

**语法:** obj &lt;&lt; Reset Filter

**说明:** 清除现有的“过滤符合条件的行”消息并显示表中的所有行。

**JMP添加的版本:** 17

```jsl

New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << set selectable rows( 1 );
tb << filter where( "Elevation (meters)"n < 4000 | Mountain == "K2" );
Wait( 2 );
tb << Reset Filter;

```

### Reset Style

**语法:** obj &lt;&lt; Reset Style

**说明:** 根据首选项设置重置表样式

```jsl

New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Set Shade Cells( 1 );
tb << Reset Style;

```

### Row Border Color

**语法:** obj &lt;&lt; Row Border Color( color );color = obj &lt;&lt; Get Row Border Color

**JMP添加的版本:** 19

```jsl

New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Set Row Borders( 1 );
tb << Row Border Color( "Black" );
Show( tb << Get Row Border Color );

```

### Row Height Scale

**语法:** obj &lt;&lt; Row Height Scale( number );number = obj &lt;&lt; Get Row Height Scale

**说明:** 调整表行的默认高度。默认值为 1。

**JMP添加的版本:** 19

```jsl

New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Row Height Scale( 3 );
tb << Get Row Height Scale();

```

### Row Vertical Alignment

**语法:** obj &lt;&lt; Row Vertical Alignment( "顶部"|"中心"|"基线"|"底部" );"顶部"|"中心"|"基线"|"底部" = obj &lt;&lt; Get Row Vertical Alignment

**说明:** 设置表行中文本或数字的垂直对齐

**JMP添加的版本:** 19

```jsl

New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Row Vertical Alignment( "Bottom" );
tb << Get Row Vertical Alignment();
tb << Row Height Scale( 3 );

```

### Select Where

**语法:** obj &lt;&lt; Select Where

**说明:** 基于该行的值选择表中的行。

**JMP添加的版本:** 15

```jsl

New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << set selectable rows( 1 );
tb << select where( "Elevation (meters)"n < 4000 | Mountain == "K2" );

```

### Set Base Data Font

**语法:** obj &lt;&lt; Set Base Data Font( "文本"|"题头"|"标题"|"小字体"|"单字"|"公式编辑器"|"注解"|"轴"|"标记"|"轴标题"|"图形标签"|"图例"|"图形标题"|"说明文字"|"数据表"|"悬停标签" )

**说明:** 设置该框绘制的文本的基本字体。

```jsl

New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
Wait( 2 );
tb << Set Base Data Font( "Data" );

```

### Set Base Title Font

**语法:** obj &lt;&lt; Set Base Title Font( "文本"|"题头"|"标题"|"小字体"|"单字"|"公式编辑器"|"注解"|"轴"|"标记"|"轴标题"|"图形标签"|"图例"|"图形标题"|"说明文字"|"数据表"|"悬停标签" )

**说明:** 设置该框绘制的文本的基本字体。

```jsl

New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
Wait( 2 );
tb << Set Base Title Font( "Title" );

```

### Set Cell Changed Function

**语法:** obj &lt;&lt; Set Cell Changed Function( Function({thisBox, col box, row}, &lt;script&gt;;) )

**说明:** 设置一个函数，每当用户编辑表列中的单元格时将调用该函数

```jsl

New Window( "Mountains",
	tb = Table Box(
		String Col Edit Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Edit Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Set Cell Changed Function(
	Function( {thisBox, col, row},
		Print(
			(col << get heading) || ": row:" || Char( row ) || " is now " ||
			Char( col << get( row ) )
		)
	)
);

```

### Set Click Sort

**语法:** obj &lt;&lt; Set Click Sort( &lt;state=0|1&gt; )

**说明:** 允许表通过单次点击列标题排序

```jsl

New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Set Click Sort( 1 );

```

### Set Column Borders

**语法:** obj &lt;&lt; Set Column Borders( state=0|1 )

**说明:** 在每列的两边绘制一条线

```jsl

New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Set Column Borders( 1 );

```

### Set Column Group Borders

**语法:** obj &lt;&lt; Set Column Group Borders( state=0|1 )

```jsl

New Window( "Mountains",
	tb = Table Box(
		Col Span Box(
			"Column Span",
			String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} )
		),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Set Column Group Borders( 1 );

```

### Set Context Menu Item State

**语法:** obj &lt;&lt; Set Context Menu Item State( index, 0|1|-1 )

**说明:** 将 index 处的上下文菜单项设置为正常 (0)、选中 (1) 或禁用 (-1)

```jsl

New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Set Context Menu Script( {"A", Print( "A" ), "B", Print( "B" ), "C", Print( "C" )} );
tb << Set Context Menu Item State( 2, -1 );

```

### Set Context Menu Script

**语法:** obj &lt;&lt; Set Context Menu Script( {"string",script,"string",script, ...} )

**说明:** 将带有指定选项和脚本的上下文菜单添加到框。

```jsl

New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Set Context Menu Script(
	{"Beep", Beep(), "Beep Twice", Beep() ; Wait( 1.0 ) ; Beep() ; ,
	"Get Context Menu Script", Print( tb << Get Context Menu Script )}
);

```

### Set Context Menu Submenu

**语法:** obj &lt;&lt; Set Context Menu Submenu( index, submenu count )

**说明:** 将“index”菜单项转换为带“submenu count”个菜单项的子菜单

```jsl

New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Set Context Menu Script(
	{"A", Print( "A" ), "B", Print( "B" ), "B1", Print( "B1" ), "B2", Print( "B2" ), "B3",
	Print( "B3" ), "C", Print( "C" )}
);
tb << Set Context Menu Submenu( 2, 3 );

```

### Set Data Font

**语法:** obj &lt;&lt; Set Data Font( fontName, &lt;size&gt;, &lt;"bold italic underline strikeout"&gt;, &lt;angle&gt; )

#### 示例 1

```jsl

New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Set Data Font( "Arial Black" );

```

#### 示例 2

```jsl

New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Set Data Font( "Arial Black", 12, "Italic Underline" );

```

### Set Data Font Name

**语法:** obj &lt;&lt; Set Data Font Name( fontname )

**说明:** 设置文本字符串的字体。

```jsl

New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Set Data Font Name( "Arial Black" );

```

### Set Data Font Scale

**语法:** obj &lt;&lt; Set Data Font Scale( f )

**说明:** 设置当前字体的比例因子。比例因子将应用到由基本字体和磅值决定的字号。

```jsl

New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
Wait( 2 );
tb << Set Data Font Scale( 2.0 );

```

### Set Data Font Size

**语法:** obj &lt;&lt; Set Data Font Size( n )

**说明:** 以磅为单位设置文本字符串的字体大小。

```jsl

New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Set Data Font Size( 14 );

```

### Set Data Font Style

**语法:** obj &lt;&lt; Set Data Font Style( style )

**说明:** 设置文本字符串的字体样式。要一次设置多种样式，将它们放置在同一个字符串中，用空格分隔（请参见下面的示例 2）。

#### 示例 1

```jsl

New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Set Data Font Style( "Italic" );

```

#### 示例 2

```jsl

New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Set Data Font Style( "Italic Bold Underline" );

```

### Set Heading Column Borders

**语法:** obj &lt;&lt; Set Heading Column Borders( state=0|1 )

**说明:** 标题中的列边框

```jsl

New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Set Heading Column Borders( 1 );

```

### Set Locked Columns

**语法:** obj &lt;&lt; Set Locked Columns( number )

**说明:** 锁定前 n 列，从而禁止使用手形光标拖动这些列或在其前放置列。

```jsl

New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << set locked columns( 1 );

```

### Set Row Borders

**语法:** obj &lt;&lt; Set Row Borders( state=0|1 )

**说明:** 在每行的上下绘制一条线

```jsl

New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Set Row Borders( 1 );

```

### Set Row Change Function

**语法:** obj &lt;&lt; Set Row Change Function( Function( {thisBox}, &lt;script&gt; ) )

**说明:** 设置当选择行时进行求值的表达式。

```jsl

New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Set Selectable Rows();
tb << set row change function( Function( {thisBox}, Print( thisBox << get selected rows ) ) );

```

### Set Scrollable

**语法:** obj &lt;&lt; Set Scrollable( rows, columns )

**说明:** 启用或禁用 TableBox 的滚动功能。

```jsl

New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Set Scrollable( 3, 0 );

```

### Set Selectable Rows

**语法:** obj &lt;&lt; Set Selectable Rows( state=0|1 )

**说明:** 将该 TableBox 中的行设置为可选或不可选。

```jsl

New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Set Selectable Rows();

```

### Set Selected Row Color

**语法:** obj &lt;&lt; Set Selected Row Color( color )

**说明:** 设置选定行的背景颜色，仅在设置了“设置可选行”时有效

```jsl

New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Set Selectable Rows();
tb << Set Selected Rows( [1, 4] );
tb << Set Selected Row Color( "Red" );

```

### Set Selected Rows

**语法:** obj &lt;&lt; Set Selected Rows( row matrix )

**说明:** 选择指定行并取消选择其他行。

```jsl

New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Set Selected Rows( [1, 4] );

```

### Set Shade Alternate Rows

**语法:** obj &lt;&lt; Set Shade Alternate Rows( state=0|1 )

**说明:** 在表中每隔一行为行添加背景色

```jsl

New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Set Shade Alternate Rows( 1 );

```

### Set Shade Cells

**语法:** obj &lt;&lt; Set Shade Cells( state=0|1 )

**说明:** 为表中的每个单元格添加背景色

```jsl

New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Set Shade Cells( 1 );

```

### Set Shade Headings

**语法:** obj &lt;&lt; Set Shade Headings( state=0|1 )

**说明:** 为列标题添加背景色

```jsl

New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Set Shade Headings( 1 );

```

### Set Title Font

**语法:** obj &lt;&lt; Set Title Font( fontName, &lt;size&gt;, &lt;"bold italic underline strikeout"&gt;, &lt;angle&gt; )

#### 示例 1

```jsl

New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Set Title Font( "Arial Black" );

```

#### 示例 2

```jsl

New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Set Title Font( "Arial Black", 12, "Italic Underline" );

```

### Set Title Font Name

**语法:** obj &lt;&lt; Set Title Font Name( fontname )

**说明:** 设置文本字符串的字体。

```jsl

New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Set Title Font Name( "Arial Black" );

```

### Set Title Font Scale

**语法:** obj &lt;&lt; Set Title Font Scale( f )

**说明:** 设置当前字体的比例因子。比例因子将应用到由基本字体和磅值决定的字号。

```jsl

New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
Wait( 2 );
tb << Set Title Font Scale( 2.0 );

```

### Set Title Font Size

**语法:** obj &lt;&lt; Set Title Font Size( n )

**说明:** 以磅为单位设置文本字符串的字体大小。

```jsl

New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Set Title Font Size( 14 );

```

### Set Title Font Style

**语法:** obj &lt;&lt; Set Title Font Style( style )

**说明:** 设置文本字符串的字体样式。要一次设置多种样式，将它们放置在同一个字符串中，用空格分隔（请参见下面的示例 2）。

#### 示例 1

```jsl

New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Set Title Font Style( "Italic" );

```

#### 示例 2

```jsl

New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Set Title Font Style( "Italic Bold Underline" );

```

### Set Underline Headings

**语法:** obj &lt;&lt; Set Underline Headings( state=0|1 )

**说明:** 在列标题下面绘制一条线

```jsl

New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Set Underline Headings( 1 );

```

### Simulate

**语法:** obj &lt;&lt; Simulate( nsample, Random Seed(number), Out(column), In(column), Update(&lt;columns&gt;) )

**说明:** 通过用具有模拟公式的列替换某列来执行模拟。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Fit Model(
	Y( :weight ),
	Effects( :age, :sex, :height ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Run( Fit( Estimation Method( Lasso( Adaptive ) ), Validation Method( AICc ) ) )
);
obj << (fit[1] << Save Simulation Formula);
rpt = Report( obj );
dtlst = rpt["Parameter Estimates for Original Predictors"][
Number Col Box( "Prob > ChiSquare" )] << Simulate(
	10,
	Out( :weight ),
	In( :weight Simulation Formula )
);
dtlst[2] << Distribution( Y( :height ) );

```

### Sort By Column

**语法:** obj &lt;&lt; Sort By Column( &lt;column index or title&gt;, &lt;ascending=0|1&gt; )

**说明:** 根据给定列中的值对表中的所有行排序。默认排序顺序为降序。

```jsl

New Window( "Mountains",
	tb = Table Box(
		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
tb << Sort By Column( 1 );
Wait( 2 );
tb << Sort By Column( "Elevation (meters)" );

```

