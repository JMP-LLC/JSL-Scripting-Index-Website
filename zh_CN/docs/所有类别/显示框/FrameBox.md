# FrameBox



## 共享项消息

### Add Line Annotation

**语法:** obj &lt;&lt; Add Line Annotation

**说明:** 在显示框上添加线条。

```jsl

Names Default To Here( 1 );
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

Names Default To Here( 1 );
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

Names Default To Here( 1 );
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

Names Default To Here( 1 );
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

Names Default To Here( 1 );
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

Names Default To Here( 1 );
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

Names Default To Here( 1 );
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

Names Default To Here( 1 );
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

Names Default To Here( 1 );
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

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << Run Script( "Bivariate" );
w << Bring Window To Front;

```

### Child

**语法:** obj &lt;&lt; Child

**说明:** 返回该显示框的子级项。

```jsl

Names Default To Here( 1 );
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

Names Default To Here( 1 );
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

Names Default To Here( 1 );
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

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
w << Close Window;

```

### Copy Data

**语法:** obj &lt;&lt; Copy Data

**说明:** 将矩阵或表中的制表符分隔数据复制到剪贴板。

```jsl

Names Default To Here( 1 );
New Window( "x", mat = Matrix Box( [1 2 3, 4 5 6, 7 8 9] ) );
mat << CopyData;

```

### Copy Graph

**语法:** obj &lt;&lt; Copy Graph

**说明:** 将包含图形和坐标轴的图片置于剪贴板中。

```jsl

Names Default To Here( 1 );
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

Names Default To Here( 1 );
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

Names Default To Here( 1 );
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

Names Default To Here( 1 );
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

Names Default To Here( 1 );
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

### Find

**语法:** obj &lt;&lt; Find

**说明:** 返回使用指定的“argument”的显示框。

```jsl

Names Default To Here( 1 );
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

Names Default To Here( 1 );
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

Names Default To Here( 1 );
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

Names Default To Here( 1 );
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

Names Default To Here( 1 );
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

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
c = w << Get Content Size();
Show( c );

```

### Get Display Path

**语法:** obj &lt;&lt; Get Display Path( parent box, &lt;receiver expr&gt;, &lt;Mode("XPath"|"Subscript")&gt; )

**说明:** 获取相对稳健的表达式以在 parent box 和 obj 之间导航。该路径不能保证在 JMP 版本之间是稳定的。receiver expr 归入到输出表达式（若提供）。若未提供，则改用为 parent box 提供的表达式。如示例中所示，该消息主要用于增加已有路径的稳健性。默认为 XPath 模式。

**下标模式**

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Run Script( "Bivariate" );
rpt = Report( biv );
subscript expr = rpt[Number Col Box( 9 )] << Get Display Path( rpt, Mode( "Subscript" ) ); // Make Number Col Box(9) more robust
Show( subscript expr );
subscript expr << Select;

```

**基本**

```jsl

Names Default To Here( 1 );
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

### Get HTML

**语法:** obj &lt;&lt; Get HTML( &lt;format&gt; )

**说明:** 返回包含显示框的 HTML 源的字符串。

**示例 1**

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
win = New Window( "Example", a = Text Box( "Example Text" ) );
a << Set Text( win << Get HTML );

```

**示例 2**

```jsl

Names Default To Here( 1 );
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

Names Default To Here( 1 );
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

Names Default To Here( 1 );
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

Names Default To Here( 1 );
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

Names Default To Here( 1 );
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

Names Default To Here( 1 );
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

Names Default To Here( 1 );
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

Names Default To Here( 1 );
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

Names Default To Here( 1 );
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

Names Default To Here( 1 );
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

Names Default To Here( 1 );
//This message applies to all display box objects
w = New Window( "Window", Text Box( "Page Setup Test" ) );
w << get page setup();

```

### Get Picture

**语法:** obj &lt;&lt; Get Picture( &lt;Scale(factor)&gt;, &lt;Type("Bitmap" | "Scalable")&gt;, &lt;View("Picture" | "Screen" | "Print"), &lt;Appearance("Default" | "Current")&gt;, &lt;SubRect(Left(number), Top(number), Right(number), Bottom(number))&gt; )

**说明:** 将 db 捕获为图像对象。可选 Scale 参数将以统一尺度的分辨率呈现图像。统一尺度要求显示框可伸缩。Type 参数确定结果将是可缩放矢量图像还是位图。默认返回可缩放图像，它适合保存为矢量格式，例如 PDF。View 选项更改某些框的行为。"Picture" 的默认选项按照导出为图像格式时的方式绘制报表，其滚动区域完全显示。"Screen" 的视图模式按照屏幕上看到的方式绘制报表，"Print" 按照打印时的方式绘制报表，而没有任何页面设置功能。SubRect 选项将捕获生成的图像的一部分而不是整个图像。Appearance 选项可以从 "Default" 输出颜色更改为屏幕上看到的 "Current" 颜色。仅 Type "Bitmap"Appearance 支持 View、SubRect 和 Appearance 选项。

**尺度**

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv[FrameBox( 1 )] << Set Stretch( "Window", "Window" );
New Window( "Example", rbiv << Get Picture( Scale( 1.5 ) ) );

```

**视图和外观**

```jsl

Names Default To Here( 1 );
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

**默认值**

```jsl

Names Default To Here( 1 );
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

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
c = w << Get Project();
Show( c );

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

### Get RTF

**语法:** obj &lt;&lt; Get RTF( &lt;format&gt; )

**说明:** 返回包含显示框的 RTF 源的字符串。

**示例 1**

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
win = New Window( "Example", a = Text Box( "Example Text" ) );
a << Set Text( win << Get RTF );

```

**示例 2**

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), Means( 1 ), Mean Diamonds( 1 ) );
Save Text File( "$TEMP/Oneway.rtf", obj << Get RTF( "png" ) ); // Prefer <<Save RTF
Open( "$TEMP/Oneway.rtf" );

```

### Get Row States

**语法:** rs = obj &lt;&lt; Get Row States( &lt;dt&gt; )

**说明:** 返回一个向量，它包含给定数据表或当前数据表中每行的行状态。行状态可以来自表或来自框的过滤器上下文。

**Single table**

```jsl

Names Default To Here( 1 );
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

**Where subset**

```jsl

Names Default To Here( 1 );
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

Names Default To Here( 1 );
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

Names Default To Here( 1 );
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

Names Default To Here( 1 );
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

Names Default To Here( 1 );
//This message applies to all display box objects
win = New Window( "Example", a = Text Box( "Example Text" ) );
a << Set Text( win << Get Text );

```

### Get Text Color

**语法:** obj &lt;&lt; Text Color( color );color = obj &lt;&lt; Get Text Color

**说明:** 将使用文本颜色（若已设置）绘制文本。若未设置属性，则框将继承包含框的文本颜色。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );
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

Names Default To Here( 1 );
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

Names Default To Here( 1 );
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

Names Default To Here( 1 );
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

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

### Get Width

**语法:** width = obj &lt;&lt; Get Width

**说明:** 返回显示框的宽度。

```jsl

Names Default To Here( 1 );
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

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
t = w << Get Window Icon;
Show( t );

```

### Get Window Position

**语法:** obj &lt;&lt; Get Window Position

**说明:** 返回窗口的位置。

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
p = w << Get Window Position();
Show( p );

```

### Get Window Size

**语法:** obj &lt;&lt; Get Window Size

**说明:** 返回窗口大小。

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
s = w << Get Window Size();
Show( s );

```

### Get Window Title

**语法:** obj &lt;&lt; Get Window Title

**说明:** 返回窗口标题。

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
t = w << Get Window Title;
Show( t );

```

### Get Window View

**语法:** obj &lt;&lt; Get Window View

**说明:** 返回当前窗口视图。窗口可以为“可见”、“不可见”或“私有”。

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
Print( w << Get Window View() );

```

### Get XML

**语法:** obj &lt;&lt; Get XML( &lt;English(0|1)&gt;, &lt;NoData(0|1)&gt; )

**说明:** 检索 XML 格式的显示树。默认情况下，字符串以本地语言返回，XML 在某些框中包括数据值。使用 English 选项返回可用的英语字符串。使用 NoData 选项省略框中的数据值，对于某些显示树来说，这些数据值可能非常大。

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
win = New Window( "test", a = Text Box( "my test" ) );
a << set text( win << get xml );

```

### GetOffset

**语法:** x,y = obj &lt;&lt; GetOffset

**说明:** 返回相对于父框该显示框的偏移。您可能需要在循环中使用 <<Parent 消息来累积若干偏移。

```jsl

Names Default To Here( 1 );
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

Names Default To Here( 1 );
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

Names Default To Here( 1 );
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

Names Default To Here( 1 );

ww = New Window( "Test", <<Script, "Open(\!"$SAMPLE_DATA\Big Class.jmp\!");" );
Show( ww << Is Dirty );
ww << Set Dirty( 0 );
Show( ww << Is Dirty );

```

### Is Modal Dialog

**语法:** obj &lt;&lt; Is Modal Dialog

**说明:** 若窗口是模态对话框，则返回 true。仅当从窗口处理程序回调调用时有用。

```jsl

Names Default To Here( 1 );
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

Names Default To Here( 1 );
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

Names Default To Here( 1 );
//This message applies to all display box objects
w = New Window( "Main Window", Text Box( "Main JMP Window" ) );
w << Journal Window;

```

### Launch

**语法:** obj &lt;&lt; Launch

**说明:** 在显示框的上下文中对指定的“argument”求值。

```jsl

Names Default To Here( 1 );
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

**Single table**

```jsl

Names Default To Here( 1 );
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

**Where subset**

```jsl

Names Default To Here( 1 );
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

Names Default To Here( 1 );
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

Names Default To Here( 1 );
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

Names Default To Here( 1 );
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

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
w << Move Window( 500, 500 );

```

### Next

**语法:** obj &lt;&lt; Next

**说明:** 返回该显示框后的显示框。

```jsl

Names Default To Here( 1 );
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

**关闭函数**

```jsl

Names Default To Here( 1 );
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

**关闭脚本**

```jsl

Names Default To Here( 1 );
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

Names Default To Here( 1 );
//This message applies to Data Table objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Optimize Display;

```

### Pad Window

**语法:** obj &lt;&lt; Pad Window( bool )

**说明:** 开启或关闭窗口填充。

```jsl

Names Default To Here( 1 );
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

Names Default To Here( 1 );
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

Names Default To Here( 1 );
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

Names Default To Here( 1 );
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

Names Default To Here( 1 );
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

Names Default To Here( 1 );
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

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << Print Window;

```

### Reshow

**语法:** obj &lt;&lt; Reshow

**说明:** 使显示框无效并用新内容更新窗口。若随着更新需要更多的控件，请参见 <<Inval 和 <<UpdateWindow 消息。

```jsl

Names Default To Here( 1 );
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

Names Default To Here( 1 );
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

Names Default To Here( 1 );
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

Names Default To Here( 1 );
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

Names Default To Here( 1 );
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

Names Default To Here( 1 );
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

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save PDF( "$TEMP/jmp_example.pdf" );

```

### Save Picture

**语法:** obj &lt;&lt; Save Picture( &lt;pathname&gt;, &lt;format&gt;, &lt;Scale(factor)&gt;, &lt;Type("Bitmap" | "Scalable")&gt;, &lt;View("Picture" | "Screen" | "Print"), &lt;Appearance("Default" | "Current")&gt;, &lt;SubRect(Left(number), Top(number), Right(number), Bottom(number))&gt; )

**说明:** 保存显示框的图片。支持的格式包括 EMF(Windows)、PICT(Macintosh)、JPEG 或 JPG、GIF 或 PNG。可选的 Scale 参数将以统一尺度的分辨率呈现图像。统一尺度要求显示框可伸缩。Type 参数确定结果将是可缩放矢量图像还是位图。默认返回可缩放图像，它适合保存为矢量格式，例如 PDF。View 选项更改某些框的行为。"Picture" 的默认选项按照导出为图像格式时的方式绘制报表，其滚动区域完全显示。"Screen" 的视图模式按照屏幕上看到的方式绘制报表，"Print" 按照打印时的方式绘制报表，而没有任何页面设置功能。SubRect 选项将捕获生成的图像的一部分而不是整个图像。Appearance 选项可以从 "Default" 输出颜色更改为屏幕上看到的 "Current" 颜色。只有 Type "Bitmap" 支持 View、SubRect 和 Appearance 选项。

**尺度**

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv[FrameBox( 1 )] << Set Stretch( "Window", "Window" );
rbiv << Save Picture( "$TEMP/jmp_example_scale.png", "png", Scale( 1.5 ) );
New Window( "scaled image", New Image( "$TEMP/jmp_example_scale.png" ) );

```

**视图和外观**

```jsl

Names Default To Here( 1 );
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

**默认值**

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save Picture( "$TEMP/jmp_example.png", "png" );

```

### Save Presentation

**语法:** obj &lt;&lt; Save Presentation( "filename.pptx", &lt;Template("path\to\my_template.pptx")&gt;, &lt;Insert(Begin|End|#) | Replace(Begin|End|#) | Append&gt;, &lt;Outline Titles(None|Hide|TopLeft|TopRight|BottomLeft|BottomRight)&gt;, &lt;"EMF"|"PNG"|"JPG"|"Native"&gt; )

**说明:** 在演示文稿中保存显示框表和图形幻灯片。演示文稿可以使用 Microsoft PowerPoint 或其他演示文稿软件打开。

```jsl

Names Default To Here( 1 );
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

Names Default To Here( 1 );
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

Names Default To Here( 1 );
//This message applies to all display box objects
win = New Window( "Example", a = Text Box( "Example Text" ) );
a << save text( "$TEMP/jmp_example.txt" );

```

### Save Window Report

**语法:** obj &lt;&lt; Save Window Report( pathname, &lt;embed data(0|1)&gt; )

**说明:** 将当前报表窗口保存至 JMP 报表文件 (.jrp)。

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
//This message can be sent to any display box object but will be applied to the report window
Open( "$SAMPLE_DATA/Big Class.jmp" );
d = distribution( Column( :height ) );
d << Save Window Report( "$DOCUMENTS/test.jrp", embed data( 1 ) );

```

### Scroll Window

**语法:** obj &lt;&lt; Scroll Window( DisplayBox | &lt;Relative(&lt;v&gt; | &lt;h&gt;,&lt;v&gt;)&gt; | &lt;Absolute(&lt;v&gt; | &lt;h&gt;,&lt;v&gt;) )

**说明:** 调整窗口滚动条以显示给定的 DisplayBox，或滚动相对像素数，或滚动至绝对像素位置。可以使用关键字 "Start" 或 "End" 来代替像素数。

**Absolute**

```jsl

Names Default To Here( 1 );

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

**Box**

```jsl

Names Default To Here( 1 );

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

**Relative**

```jsl

Names Default To Here( 1 );

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

Names Default To Here( 1 );
//This message applies to all display box objects
New Window( "Example", ex = Button Box( "Press Me" ) );
ex << Select;

```

### Set Content Size

**语法:** obj &lt;&lt; Set Content Size( x,y )

**说明:** 设置窗口中内容的大小。

```jsl

Names Default To Here( 1 );
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

Names Default To Here( 1 );

ww = New Window( "Test", <<Script, "Open(\!"$SAMPLE_DATA\Big Class.jmp\!");" );
Show( ww << Is Dirty );
ww << Set Dirty( 0 );
Show( ww << Is Dirty );

```

### Set Height

**语法:** obj &lt;&lt; Set Height( width )

**说明:** 设置显示框的高度。

```jsl

Names Default To Here( 1 );
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

Names Default To Here( 1 );
//This message applies to all display box objects
w = New Window( "Main Window", Text Box( "Main JMP Window" ) );
w << Set Main Window;

```

### Set Max Size

**语法:** obj &lt;&lt; Set Max Size( width,height )

**说明:** 设置该显示框的最大自动拉伸尺寸。

```jsl

Names Default To Here( 1 );
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

Names Default To Here( 1 );
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

Names Default To Here( 1 );
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

Names Default To Here( 1 );
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

Names Default To Here( 1 );
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

Names Default To Here( 1 );
New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Set Property( "Enabled", 0 );

```

### Set Report Title

**语法:** obj &lt;&lt; Set Report Title( "string" )

**说明:** 更改报表标题。

```jsl

Names Default To Here( 1 );
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

**拉伸填充**

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
New Window( "Stretch",
	V List Box(
		H List Box( Text Edit Box( "String1" ), Text Edit Box( "String2" ) ),
		Spacer Box( Size( 20, 20 ), Color( "Light Red" ), <<Set Stretch( "Fill", "Off" ) )
	)
);

```

**随窗口拉伸**

```jsl

Names Default To Here( 1 );
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

Names Default To Here( 1 );
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

Names Default To Here( 1 );
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

Names Default To Here( 1 );
//This message applies to all display box objects
w = New Window( "Example", ex = Button Box( "New Analysis" ) );
w << Set Window Icon( "Scatter3D" );

```

### Set Window Size

**语法:** obj &lt;&lt; Set Window Size( x,y )

**说明:** 设置窗口大小。

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << Set Window Size( 800, 1200 );

```

### Set Window Title

**语法:** obj &lt;&lt; Set Window Title( "string" )

**说明:** 更改窗口标题。

```jsl

Names Default To Here( 1 );
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

Names Default To Here( 1 );
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

Names Default To Here( 1 );
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

Names Default To Here( 1 );
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

Names Default To Here( 1 );
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

Names Default To Here( 1 );
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

Names Default To Here( 1 );
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

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << Size Window( 500, 500 );

```

### Text Color

**语法:** obj &lt;&lt; Text Color( color );color = obj &lt;&lt; Get Text Color

**说明:** 将使用文本颜色（若已设置）绘制文本。若未设置属性，则框将继承包含框的文本颜色。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );
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

Names Default To Here( 1 );
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

Names Default To Here( 1 );
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

Names Default To Here( 1 );
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

Names Default To Here( 1 );
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

Names Default To Here( 1 );
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

Names Default To Here( 1 );
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

**Attributes**

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Run Script( "Bivariate" );
(Report( biv ) << xpath( "//OutlineBox[@isOpen='false']" )) << Close( 0 );

```

**Box type**

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Run Script( "Bivariate" );
(Report( biv ) << xpath( "//TextEditBox" )) << Text Color( "Green" );

```

**Child box**

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Run Script( "Bivariate" );
(Report( biv ) << xpath( "//OutlineBox[text()='Summary of Fit']/TableBox" )) <<
Make Into Data Table;

```

**Data**

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Run Script( "Bivariate" );
(Report( biv ) << xpath( "//NumberColBoxItem[text()='40']/parent::*" )) <<
Text Color( "Green" );

```

**Display Seg**

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Run Script( "Bivariate" );
(Report( biv ) << xpath( "//MarkerSeg" )) << Set Marker( "Square" );

```

**Text**

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Run Script( "Bivariate" );
(Report( biv ) << xpath( "//OutlineBox[text()='Parameter Estimates']" )) << Close;

```

### Zoom Window

**语法:** obj &lt;&lt; Zoom Window

**说明:** 调整窗口大小，使其大到足够显示其所有内容。

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << Set Window Size( 80, 120 );
Wait( 2 );
w << Zoom Window;

```

## 项消息

### Add Graphics Script

**语法:** obj &lt;&lt; Add Graphics Script( &lt;"Back" | "Front" | position&gt;, &lt;Description("name")&gt;, &lt;"Selected Layer"&gt;, &lt;Scale IDs(XID, YID)&gt;, script )

**说明:** 输入一个将在该框架内绘制的脚本。选定元素始终位于未选定元素之上。若指定一个选定的图层，则在绘制选定元素的第二次绘制过程中会调用该脚本。

**示例 1**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = Bivariate( Y( :weight ), X( :height ), FitLine );
rbiv = biv << report;
framebox = rbiv[frame box( 1 )];
framebox << Add Graphics Script(
	Transparency( 0.5 );
	Fill Color( {1.0, 0.5, 0.0} );
	Polygon( [60, 72, 57], [75, 120, 120] );
);

```

**示例 2**

```jsl

Names Default To Here( 1 );

gbox = Graph Box(
	Frame Size( 300, 300 ),
	X Axis( Scale ID( 1 ), Side( 1 ), Min( 1 ), Max( 100 ), Inc( 5 ) ),
	X Axis( Scale ID( 2 ), Side( 2 ), Min( 4 ), Max( 50 ), Inc( 3 ) ),
	Y Axis( Scale ID( 3 ), Min( -100 ), Max( 200 ) ),
	Y Axis( Scale ID( 4 ), Side( 2 ), Min( 1 ), Max( 10 ), Inc( 1 ) ), 

);

fbox = gbox[frame box( 1 )];

fbox << Add Graphics Script(
	Scale IDs( 1, 4 ), //use scale ID's 1 and 4 for this graphics script
	Pen Color( "Green" );
	Line( [20 50 80], [4 3 6] );
);
New Window( "Example", gbox );

```

**示例 3**

```jsl

Names Default To Here( 1 );
Names Default To Here( 1 );
table = New Table( "test table",
	Add Rows( 150000 ),
	<<New Column( "X", "Numeric", <<Set Each Value( Random Normal() ) ),
	<<New Column( "Y", "Numeric", <<Set Each Value( Random Normal() ) )
);
b = Bivariate( X( :x ), Y( :y ) );
table << select rows( 1 :: 10000 );
Report( b )[Frame Box( 1 )] << Add Graphics Script(
	Description( "Red Line Above Selected" ),
	"selected layer",
	Pen Color( "Red" );
	Pen Size( 5 );
	Line( [-5, 5], [-5, 5] );
);
Report( b )[Frame Box( 1 )] << Add Graphics Script(
	Description( "Green Line Below Selected Above Unselected" ),
	Pen Color( "Green" );
	Pen Size( 3 );
	Line( [5, -5], [-5, 5] );
);

```

### Add Image

**语法:** obj &lt;&lt; Add Image( image | open("image filename"), &lt;bounds( left(value), top(value), bottom(value), right(value) ) | move(centerX, centerY)&gt; )

**说明:** 

将图像添加到框架。



您可以引用现有图像（已通过新 image() 或 open() 命令创建）或使用 open() 参数直接指定图像文件。使用 move() 命令可以将图像在框架中定位，方法是以坐标轴单位指定图像中心在框架中的位置。或者，可以使用 bounds() 调整图像大小并置于框架中。

```jsl

Names Default To Here( 1 );
img = Open( "$SAMPLE_IMAGES/windmap.png", "png" );
w = New Window( "View Image",
	Graph Box(
		FrameSize( 500, 500 ),
		X Scale( 0, 100 ),
		Y Scale( 0, 100 ),
		<<Add Image(
			image( img ),
			bounds( top( 90 ), Left( 10 ), bottom( 10 ), Right( 90 ) )
		)
	)
);

```

### Append Seg

**语法:** obj &lt;&lt; Append Seg( display seg )

**说明:** 将显示段添加到 FrameBox

```jsl

Names Default To Here( 1 );
x = [20, 40, 60, 80];
New Window( "Example",
	Graph Box( Frame Size( 300, 120 ), Append Seg( Marker Seg( x, x ), Line Seg( x, x ) ) ),
	Graph Box( Frame Size( 300, 120 ) )
);
gb2 = Current Report()[FrameBox( 2 )];
gb2 << append seg( Current Report()[FrameBox( 1 )] << find seg( Marker Seg( 1 ) ) );

```

### Background Map

**语法:** obj &lt;&lt; Background Map( &lt;Images("None" | "Simple Earth" | "Detailed Earth" | "Nasa Server" | ("Web Map Service", url, layer) , &lt;Transparency(0-1)&gt; )&gt; | &lt;Boundaries("None" | Shape File)&gt; )

**说明:** 

将背景地图添加到框架。



图像为光栅图，支持透明度。边框为由形状文件定义的向量图，用户可自行创建边框。您可以指定图像和/或边框。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hurricanes.jmp" );
plot = Bubble Plot(
	X( :Longitude ),
	Y( :Latitude ),
	Sizes( :"Wind (Knots)"n ),
	Time( :Date ),
	Coloring( :Landfall in USA ),
	ID( :Name and ID ),
	Speed( 1 ),
	Time Index( 2117.70195 ),
	Trail Bubbles( 1 ),
	All Labels( 0 ),
	No Labels( 0 ),
	Title Position( -88.679, 59.73 )
);
rplot = plot << report;
framebox = rplot[Frame Box( 1 )];
framebox << Background Map(
	Images( "Simple Earth", Transparency( 0.7 ) ),
	Boundaries( "World" )
);

```

### Bottom

**语法:** obj &lt;&lt; Bottom( state=0|1 )

**说明:** 显示或隐藏框架的底部边框。

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
framebox = rbiv[Frame Box( 1 )];
framebox << Bottom( 0 );

```

### Child Seg

**语法:** obj &lt;&lt; Child Seg

**说明:** 返回 Framebox 的显示段子级

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = Bivariate( Y( :weight ), X( :height ), FitLine );
rbiv = biv << report;
rbiv[Frame Box( 1 )] << Child Seg();

```

### Copy Customizations

**语法:** obj &lt;&lt; Copy Customizations

**说明:** 复制包含图形定制内容的脚本。

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( :weight ), x( :height ) );
rbiv1 = biv << report;
rbiv2 = rbiv1 << Clone Box;
rbiv1 << append( rbiv2 );
framebox1 = rbiv1[Frame Box( 1 )];
framebox2 = rbiv2[Frame Box( 1 )];
framebox1 << Marker Drawing Mode( outlined );
framebox1 << Copy Customizations;
framebox2 << Paste Customizations;

```

### Copy Frame Contents

**语法:** obj &lt;&lt; Copy Frame Contents

**说明:** 创建包含该框架设置的记录文本，并将其复制至剪贴板。

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( :weight ), x( :height ) );
rbiv1 = biv << report;
rbiv2 = rbiv1 << Clone Box;
rbiv1 << append( rbiv2 );
framebox1 = rbiv1[Frame Box( 1 )];
framebox2 = rbiv2[Frame Box( 1 )];
biv << Fit Line;
framebox1 << Copy Frame Contents;
framebox2 << Paste Frame Contents;

```

### Copy Frame Settings

**语法:** obj &lt;&lt; Copy Frame Settings

**说明:** 创建包含该框架设置的脚本，并将其复制至剪贴板。

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( :weight ), x( :height ) );
rbiv1 = biv << report;
rbiv2 = rbiv1 << Clone Box;
rbiv1 << append( rbiv2 );
framebox1 = rbiv1[Frame Box( 1 )];
framebox2 = rbiv2[Frame Box( 1 )];
framebox1 << Background Color( "Green" );
framebox1 << Copy Frame Settings;
framebox2 << Paste Frame Settings;

```

### Copy Polygons

**语法:** obj &lt;&lt; Copy Polygons

**说明:** 将位于框架中的多边形副本保存到剪贴板。

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
framebox = rbiv[Frame Box( 1 )];
pa = framebox << Add Polygon Annotation(
	Points( {144, 53}, {182, 30}, {213, 80}, {181, 95} )
);
pa << Closed( 1 );
framebox << Copy Polygons;

```

### Customize

**语法:** obj &lt;&lt; Customize

**说明:** 更改图形内容的属性。

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
framebox = rbiv[Frame Box( 1 )];
framebox << Customize;

```

### Dispatch Segs

**语法:** obj &lt;&lt; Dispatch Segs( command )

**说明:** 将命令发送至显示框中的所有可视元素（“段”）。

**JMP添加的版本:** 15

### DispatchSeg

**语法:** obj &lt;&lt; DispatchSeg( command )

**说明:** 将命令发送至显示框。

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Distribution(
	Continuous Distribution( Column( :weight ), Fit Distribution( Normal ) ),
	Nominal Distribution( Column( :age ) ),
	SendToReport(
		Dispatch( {"weight"}, "Distrib Histogram", FrameBox,
			{DispatchSeg(
				Hist Seg( 1 ),
				{Line Style( "Dotted" ), Fill Color( {0, 128, 0} ), Histogram Color( -32768 )
				}
			), DispatchSeg( Line Seg( 1 ), {Line Color( {0, 0, 255} ), Line Width( 5 )} )}
		)
	)
);

```

### Edit Graphics Script

**语法:** obj &lt;&lt; Edit Graphics Script

**说明:** 编辑已安装在该框架中的脚本。

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = Bivariate( Y( :weight ), X( :height ), FitLine );
rbiv = biv << report;
framebox = rbiv[frame box( 1 )];
framebox << Add Graphics Script(
	Transparency( 0.5 );
	Fill Color( {1.0, 0.5, 0.0} );
	Polygon( [60, 72, 57], [75, 120, 120] );
);
framebox << Edit Graphics Script;

```

### Fill Selection Mode

**语法:** obj &lt;&lt; Fill Selection Mode( "首选模式"|"选中项带图案"|"选中项变深"|"选中项带轮廓"|"选中项相同颜色"|"未选中项变淡" )

**说明:** 设置填充的选择样式。

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dist = Distribution( Continuous Distribution( Column( :height ) ), Histograms Only );
rdist = dist << report;
dt << Select Where( dt:age == 12 );
framebox = rdist[Frame Box( 1 )];
framebox << Fill Selection Mode( "Selected Darker" );

```

### Find Seg

**语法:** obj &lt;&lt; Find Seg( display seg )

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = Bivariate( Y( :weight ), X( :height ), FitLine );
rbiv = biv << report;
ms = rbiv[Frame Box( 1 )] << Find Seg( Marker Seg( 1 ) );
ms << delete;

```

### Find Segs

**语法:** obj &lt;&lt; Find Segs

**JMP添加的版本:** 15

### Frame Size

**语法:** obj &lt;&lt; Frame Size

**说明:** 更改框架大小。

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
framebox = rbiv[Frame Box( 1 )];
framebox << Frame Size( 300, 300 );

```

### Get Background Fill

**语法:** obj &lt;&lt; Get Background Fill

**说明:** 返回图形背景填充颜色的状态 (0|1)。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( weight ), x( height ) );
rbiv = biv << report;
framebox = rbiv[Frame Box( 1 )];
//Set background color
framebox << Background Color( "red" );
//Wait to see the color change
Wait( 1 );
//Turn off background fill color
framebox << Set Background Fill( 0 );
val1 = framebox << Get Background Fill;

```

### Get Fill Selection Mode

**语法:** obj &lt;&lt; Get Fill Selection Mode

**说明:** 返回填充的选择样式。

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dist = Distribution( Continuous Distribution( Column( :height ) ), Histograms Only );
rdist = dist << report;
dt << Select Where( dt:age == 12 );
framebox = rdist[Frame Box( 1 )];
framebox << Fill Selection Mode( "Selected Darker" );
framebox << Get Fill Selection Mode;

```

### Get Image

**语法:** image = obj &lt;&lt; Get Image

**说明:** 返回对该背景图像的引用。

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Animals.jmp" );
op = Overlay Plot( X( :subject ), Y( :miles ), Separate Axes( 1 ) );
opr = op << report;
fb = opr[Frame Box( 1 )];
fb << Add Image(
	Open( Convert File Path( "$SAMPLE_IMAGES/black rhino footprint.jpg" ) ),
	Transparency( 0.9 ),
	Rotate( 90 ),
	Bounds(
		Left( 0.135416666666667 ),
		Right( 3.26041666666667 ),
		Top( 11.8333333333333 ),
		Bottom( -1 )
	),
	SetSize( {300, 210} )
);
fb << Marker Size( 8 );
Print( fb << Get Image );

```

### Get Marker Selection Mode

**语法:** obj &lt;&lt; Get Marker Selection Mode

**说明:** 返回标记选择样式。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
dt << Select Where( dt:age == 12 );
framebox = rbiv[Frame Box( 1 )];
framebox << Marker Selection Mode( "Selected Haloed" );
framebox << Get Marker Selection Mode;

```

### Get Marker Size

**语法:** obj &lt;&lt; Get Marker Size

**说明:** 返回图形标记大小。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
framebox = rbiv[Frame Box( 1 )];
framebox << Marker Size( 4 );
Print( framebox << Get Marker Size() );

```

### Get Polygons

**语法:** obj &lt;&lt; Get Polygons

**说明:** 返回位于框架中的多边形列表。

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
framebox = rbiv[Frame Box( 1 )];
pa = framebox << Add Polygon Annotation(
	Points( {144, 53}, {182, 30}, {213, 80}, {181, 95} )
);
pa << Closed( 1 );
Print( framebox << Get Polygons );

```

### Grid Line Order

**语法:** obj &lt;&lt; Grid Line Order( position )

**说明:** 在图形的其他对象前或后绘制网格线

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = Bivariate( Y( :weight ), X( :height ), FitLine );
rbiv = biv << report;
rbiv[axis box( 1 )] << Add Ref Line( 90, "Solid", blue );
rbiv[axis box( 2 )] << Show Major Grid( 1 );
framebox = rbiv[frame box( 1 )];
framebox << Grid Line Order( 1 );

```

### Hover Label Editor

**语法:** obj &lt;&lt; Hover Label Editor

**说明:** 显示“悬停标签编辑器”窗口。

**JMP添加的版本:** 15

### Left

**语法:** obj &lt;&lt; Left( state=0|1 )

**说明:** 显示或隐藏框架的左边框。

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
framebox = rbiv[Frame Box( 1 )];
framebox << Left( 0 );

```

### Line Width Scale

**语法:** obj &lt;&lt; Line Width Scale( 0|scale )

**说明:** 将线条粗细设置为输入值。值 0 表示线条粗线取决于字体大小。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( :weight ), x( :height ), FitLine );
rbiv = biv << report;
framebox = rbiv[Frame Box( 1 )];
framebox << Line Width Scale( 2.0 );

```

### Make table of graphs like this

**语法:** obj &lt;&lt; Make table of graphs like this

**说明:** 创建图形数据表

### Marker Drawing Mode

**语法:** obj &lt;&lt; Marker Drawing Mode( "正常"|"快速"|"轮廓" )

**说明:** 设置标记样式。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
framebox = rbiv[Frame Box( 1 )];
framebox << Marker Drawing Mode( "outlined" );

```

### Marker Label Color Style

**语法:** obj &lt;&lt; Marker Label Color Style( "首选模式"|"标记颜色"|"标记颜色变淡"|"固定颜色" )

**说明:** 更改标记标签的颜色

### Marker Selection Mode

**语法:** obj &lt;&lt; Marker Selection Mode( "首选模式"|"未选中项变淡"|"选中项变大"|"选中项带光环"|"选中项带轮廓"|"选中项相同颜色" )

**说明:** 设置标记的选定样式。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
dt << Select Where( dt:age == 12 );
framebox = rbiv[Frame Box( 1 )];
framebox << Marker Selection Mode( "Selected Haloed" );

```

### Marker Size

**语法:** obj &lt;&lt; Marker Size( 0=dot/1=small/2=medium/... )

**说明:** 设置标记大小。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
framebox = rbiv[Frame Box( 1 )];
framebox << Marker Size( 4 );

```

### Name Selection in Column

**语法:** obj &lt;&lt; Name Selection in Column

**说明:** 为当前选定的行添加标签并将值（标签）保存在列中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
dt << Select Rows( 1 );
dt:(Column( 2 )) << Set Selected( 1 );
framebox = rbiv[Frame Box( 1 )];
framebox << Select Matching Cells;
framebox << Name Selection in Column;

```

### Paste Background Image

**语法:** obj &lt;&lt; Paste Background Image

**说明:** 将保存在内存中的背景图像粘贴到剪贴板中。

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Animals.jmp" );
op = Overlay Plot( X( :subject ), Y( :miles ), Separate Axes( 1 ) );
opr1 = op << report;
opr2 = opr1 << Clone Box;
opr1 << append( opr2 );
fb1 = opr1[Frame Box( 1 )];
fb1 << Add Image(
	Open( Convert File Path( "$SAMPLE_IMAGES/black rhino footprint.jpg" ) ),
	Transparency( 0.9 ),
	Rotate( 90 ),
	Bounds(
		Left( 0.135416666666667 ),
		Right( 3.26041666666667 ),
		Top( 11.8333333333333 ),
		Bottom( -1 )
	),
	SetSize( {300, 210} )
);
fb1 << Copy Picture;
fb2 = opr2[Frame Box( 1 )];
fb2 << Paste Background Image;

```

### Paste Customizations

**语法:** obj &lt;&lt; Paste Customizations

**说明:** 粘贴包含图形定制内容的脚本。

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( :weight ), x( :height ) );
rbiv1 = biv << report;
rbiv2 = rbiv1 << Clone Box;
rbiv1 << append( rbiv2 );
framebox1 = rbiv1[Frame Box( 1 )];
framebox2 = rbiv2[Frame Box( 1 )];
framebox1 << Marker Drawing Mode( outlined );
framebox1 << Copy Customizations;
framebox2 << Paste Customizations;

```

### Paste Frame Contents

**语法:** obj &lt;&lt; Paste Frame Contents

**说明:** 剪贴板包含框架内容的记录文本。解析该脚本并将其安装在该框架中。

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( :weight ), x( :height ) );
rbiv1 = biv << report;
rbiv2 = rbiv1 << Clone Box;
rbiv1 << append( rbiv2 );
framebox1 = rbiv1[Frame Box( 1 )];
framebox2 = rbiv2[Frame Box( 1 )];
biv << Fit Line;
framebox1 << Copy Frame Contents;
framebox2 << Paste Frame Contents;

```

### Paste Frame Settings

**语法:** obj &lt;&lt; Paste Frame Settings

**说明:** 将剪贴板的内容粘贴于该框架。

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( :weight ), x( :height ) );
rbiv1 = biv << report;
rbiv2 = rbiv1 << Clone Box;
rbiv1 << append( rbiv2 );
framebox1 = rbiv1[Frame Box( 1 )];
framebox2 = rbiv2[Frame Box( 1 )];
framebox1 << Background Color( "Green" );
framebox1 << Copy Frame Settings;
framebox2 << Paste Frame Settings;

```

### Paste Graphlet

**语法:** obj &lt;&lt; Paste Graphlet

**说明:** 基于剪贴板内容添加 Graphlet 定制。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
gb = dt << Graph Builder(
	Show Control Panel( 0 ),
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Legend( 7 ) ) )
);
Set Clipboard(JSLQuote(Bivariate(
                             Y( :height ),
                             X( :weight ),
                             Histogram Borders( 1 ),
                             Fit Robust( {Line Color( {212, 73, 88} )} ),
                             Fit Cauchy( {Line Color( {61, 174, 70} )} ),
                             SendToReport(
                                 Dispatch(
                                     {},
                                     "Bivar Plot",
                                     FrameBox,
                                     {Grid Line Order( 1 ), Reference Line Order( 2 )}
                                 )
                             )
                         )));
frame = (gb << report)[FrameBox( 1 )];
frame << Paste Graphlet();
gpin = frame << Add Pin Annotation(
	Seg( BarSeg( 1 ) ),
	Index( {0, 0} ),
	Index Row( {0, 0} ),
	UniqueID( 1513503376 ),
	FoundPt( {107, 211} ),
	Origin( {0.00867052023121384, 96.6870397553517} ),
	Tag Line( 1 )
);
gpin << Launch Graphlet;

```

### Reference Line Order

**语法:** obj &lt;&lt; Reference Line Order( position )

**说明:** 在图形的其他对象前或后绘制参考线

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = Bivariate( Y( :weight ), X( :height ), FitLine );
rbiv = biv << report;
rbiv[axis box( 1 )] << Add Ref Line( 90, "Solid", blue );
rbiv[axis box( 2 )] << Show Major Grid( 1 );
framebox = rbiv[frame box( 1 )];
framebox << Reference Line Order( 1 );

```

### Remove Graphics Script

**语法:** obj &lt;&lt; Remove Graphics Script( position )

**说明:** 删除附于指定 position 处的框架的图形脚本。

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = Bivariate( Y( :weight ), X( :height ), FitLine );
rbiv = biv << report;
framebox = rbiv[frame box( 1 )];
framebox << Add Graphics Script(
	Transparency( 0.5 );
	Fill Color( {1.0, 0.5, 0.0} );
	Polygon( [60, 72, 57], [75, 120, 120] );
);
framebox << Add Graphics Script(
	Transparency( 0.5 );
	Fill Color( {0.0, 0.5, 1.0} );
	Polygon( [60, 72, 57], [150, 120, 120] );
);
Wait( 2 );
framebox << Remove Graphics Script( 2 );

```

### Reorder Segs

**语法:** obj &lt;&lt; Reorder Segs( List of integers representing the current segs in the new order. )

**说明:** 重新排序图形中的段。

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
Open( "$sample_data\big class.jmp" );
gb = Graph Builder(
	Size( 534, 456 ),
	Show Control Panel( 0 ),
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y, Legend( 6 ) ), Bar( X, Y, Legend( 7 ) ) ),
	SendToReport(
		Dispatch( {}, "weight", ScaleBox,
			{Label Row( {Show Major Grid( 1 ), Show Minor Grid( 1 )} )}
		)
	)
);
For( blink = 1, blink < 4, blink++,
	Wait( .5 );
	(gb << report)[FrameBox( 1 )] << reorder segs( {4, 3, 2, 1} );
);

```

### Right

**语法:** obj &lt;&lt; Right( state=0|1 )

**说明:** 显示或隐藏框架的右边框。

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
framebox = rbiv[Frame Box( 1 )];
framebox << Right( 0 );

```

### Right Y Axis

**语法:** obj &lt;&lt; Right Y Axis( &lt; Min( min ) &gt;, &lt; Max( max ) &gt;, &lt; Inc( n ) &gt;, ... )

**说明:** 在单个消息中应用一个或多个右侧 Y 轴更改。若未指定参数，则会打开“右侧 Y 轴设置”窗口。

**示例 1**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Show Control Panel( 0 ),
	Variables( X( :age ), Y( :height ), Y( :weight, Position( 1 ), Side( "Right" ) ) ),
	Elements(
		Points( X, Y( 1 ), Legend( 1 ), Jitter( 1 ) ),
		Points( X, Y( 2 ), Legend( 3 ), Jitter( 1 ) )
	)
);
gbr = gb << report;
fb = gbr[Frame Box( 1 )];
fb << Right Y Axis;

```

**示例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = dt << Graph Builder(
	Show Control Panel( 0 ),
	Variables(
		X( :age, Size( 23 ) ),
		Y( :height, Size( 37 ) ),
		Y( :weight, Position( 1 ), Size( 37 ), Side( "Right" ) )
	),
	Elements(
		Points( X, Y( 1 ), Legend( 1 ), Jitter( 1 ) ),
		Points( X, Y( 2 ), Legend( 3 ), Jitter( 1 ) )
	)
);
framebox = Report( gb )[framebox( 1 )];
framebox << Right Y Axis(
	Rotated Labels( "Angled" ),
	Scale( "Log" ),
	Add Ref Line( 125, dashed, "red" )
);

```

### Row Colors

**语法:** obj &lt;&lt; Row Colors( 颜色 )

**说明:** 设置选定行的颜色。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
dt << Select Where( dt:age == 12 );
framebox = rbiv[Frame Box( 1 )];
framebox << Row Colors( "Red" );

```

### Row Editor

**语法:** obj &lt;&lt; Row Editor

**说明:** 打开“行编辑器”窗口，开始于首个选定点。

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
framebox = rbiv[Frame Box( 1 )];
framebox << Row Editor;

```

### Row Exclude

**语法:** obj &lt;&lt; Row Exclude

**说明:** 排除（或撤销排除）数据表中的相应行。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
dt << Select Where( dt:age == 12 );
framebox = rbiv[Frame Box( 1 )];
framebox << Row Exclude( 1 );

```

### Row Hide

**语法:** obj &lt;&lt; Row Hide

**说明:** 隐藏（或撤销隐藏）数据表中的相应行。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
dt << Select Where( dt:age == 12 );
framebox = rbiv[Frame Box( 1 )];
framebox << Row Hide( 1 );

```

### Row Hide and Exclude

**语法:** obj &lt;&lt; Row Hide and Exclude

**说明:** 隐藏和排除（或取消隐藏和取消排除）数据表中的相应行。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
dt << Select Where( dt:age == 12 );
framebox = rbiv[Frame Box( 1 )];
framebox << Row Hide and Exclude( 1 );

```

### Row Label

**语法:** obj &lt;&lt; Row Label

**说明:** 为数据表中的相应行添加标签（或撤销标签）。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
dt << Select Where( dt:age == 12 );
framebox = rbiv[Frame Box( 1 )];
framebox << Row Label( 1 );

```

### Row Legend

**语法:** obj &lt;&lt; Row Legend( Color( 0|1), Marker( 0|1 ), &lt;Color theme( string )&gt;, &lt;Marker theme( string )&gt;, &lt; Continuous scale(0|1)&gt;, &lt;Reverse scale(0|1)&gt;, &lt;Excluded Row( 0|1 ), &lt;Make window with legend&gt; )

**说明:** 按照数据列对行着色，并在该框架的右侧插入图例。

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
framebox = rbiv[Frame Box( 1 )];
framebox << Row Legend( "age", color( 1 ), Marker( 1 ) );

```

### Row Markers

**语法:** obj &lt;&lt; Row Markers( marker )

**说明:** 设置选定行的标记。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
dt << Select Where( dt:age == 12 );
framebox = rbiv[Frame Box( 1 )];
framebox << Row Markers( 3 );

```

### Scale with Font

**语法:** obj &lt;&lt; Scale with Font

**说明:** 将线条粗细设置为按字体大小调整。相当于 <<Line Width Scale(0)。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( weight ), x( height ), FitLine );
rbiv = biv << report;
framebox = rbiv[Frame Box( 1 )];
framebox << Scale with Font;

```

### Seg Count

**语法:** obj &lt;&lt; Seg Count( &lt;seg type&gt; )

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = Bivariate( Y( :weight ), X( :height ), FitLine );
rbiv = biv << report;
rbiv[Frame Box( 1 )] << Seg Count( MarkerSeg );

```

### Select Matching Cells

**语法:** obj &lt;&lt; Select Matching Cells

**说明:** 选择与选定行具有相似标签的点。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
dt << Select Rows( 1 );
dt:(Column( 2 )) << Set Selected( 1 );
framebox = rbiv[Frame Box( 1 )];
framebox << Select Matching Cells;

```

### Select Similar

**语法:** obj &lt;&lt; Select Similar

**说明:** 选择与选定列有类似数据值的行。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
dt << Select Rows( 1 );
dt:(Column( 3 )) << Set Selected( 1 );
framebox = rbiv[Frame Box( 1 )];
framebox << Select Similar;

```

### Set Background Fill

**语法:** obj &lt;&lt; Set Background Fill( state=0|1 )

**说明:** 启用或禁用使用背景颜色填充图形背景。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( weight ), x( height ) );
rbiv = biv << report;
framebox = rbiv[Frame Box( 1 )];
//Set background color
framebox << Background Color( "red" );
//Wait to see the color change
Wait( 1 );
//Turn off background fill color
framebox << Set Background Fill( 0 );

```

### Set Graphlet

**语法:** obj &lt;&lt; Set Graphlet

**说明:** 定义该图形的悬停标签嵌入式可视化 (graphlet)。

**JMP添加的版本:** 15

**外部图像**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
gb = dt << Graph Builder(
	Size( 531, 456 ),
	Show Control Panel( 0 ),
	Variables( X( :Petal length ), Y( :Sepal length ), Color( :Species ) ),
	Elements( Points( X, Y, Legend( 2 ) ) )
);
frame = (gb << report)[FrameBox( 1 )];
frame << Set Graphlet(
	Picture(
		local:img_url = "https://upload.wikimedia.org/wikipedia/commons/thumb/" ||
		Match( local:_Species,
			"versicolor", "2/27/Blue_Flag%2C_Ottawa.jpg/240px-Blue_Flag%2C_Ottawa.jpg",
			"virginica", "f/f8/Iris_virginica_2.jpg/240px-Iris_virginica_2.jpg",
			"setosa",
				"5/56/Kosaciec_szczecinkowaty_Iris_setosa.jpg/180px-Kosaciec_szczecinkowaty_Iris_setosa.jpg"
		);
		Open( local:img_url );
	),
	Click( Web( "https://en.wikipedia.org/wiki/Iris_" || local:_Species ) ),
	Title( "External Image" ),
	Reapply( 1 )
);
gpin = frame << Add Pin Annotation(
	Seg( Marker Seg( 1 ) ),
	Index( 18 ),
	Index Row( 18 ),
	UniqueID( 1441114818 ),
	FoundPt( {123, 293} ),
	Origin( {1.70752129817444, 5.66359183673469} ),
	Tag Line( 1 )
);
gpin << Launch Graphlet;

```

**预设**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
gb = dt << Graph Builder(
	Show Control Panel( 0 ),
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Legend( 7 ) ) )
);
frame = (gb << report)[FrameBox( 1 )];
frame << Set Graphlet(
	Picture(
		loader = Include( "$BUILTIN_SCRIPTS/hllib.jsl" );
		hlp = loader:lazyLoad( "hllPresets" );
		hlp:launchPie();
	),
	Title( "Pie Preset" ),
	Reapply( 1 )
);
gpin = frame << Add Pin Annotation(
	Seg( BarSeg( 1 ) ),
	Index( {0, 0} ),
	Index Row( {0, 0} ),
	UniqueID( 1513503376 ),
	FoundPt( {107, 211} ),
	Origin( {0.00867052023121384, 96.6870397553517} ),
	Tag Line( 1 )
);
gpin << Launch Graphlet;

```

### Set Gridlet

**语法:** obj &lt;&lt; Set Gridlet

**说明:** 定义该图形的悬停标签内容网格 (gridlet)。

**JMP添加的版本:** 15

**删除**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
gb = dt << Graph Builder(
	Size( 531, 456 ),
	Show Control Panel( 0 ),
	Variables( X( :Petal length ), Y( :Sepal length ), Color( :Species ) ),
	Elements( Points( X, Y, Legend( 2 ) ) )
);
frame = (gb << report)[FrameBox( 1 )];
frame << Set Gridlet( Expunge( {{Matcher( "Row" )}} ) );
frame << Add Pin Annotation(
	Seg( Marker Seg( 1 ) ),
	Index( 133 ),
	Index Row( 133 ),
	UniqueID( 1441114933 ),
	FoundPt( {384, 228} ),
	Origin( {5.08093306288033, 6.30828571428571} ),
	Tag Line( 1 )
);

```

**样式**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
gb = dt << Graph Builder(
	Size( 531, 456 ),
	Show Control Panel( 0 ),
	Variables( X( :Petal length ), Y( :Sepal length ), Color( :Species ) ),
	Elements( Points( X, Y, Legend( 2 ) ) )
);
frame = (gb << report)[FrameBox( 1 )];
frame << Set Gridlet(
	Style(
		{{Matcher( "Species" ), Text Color( "Red" ), Background Color( "Light Yellow" ),
		Justification( "Center" ), "Font"("Times New Roman", 14, "Italic")}}
	)
);
frame << Add Pin Annotation(
	Seg( Marker Seg( 1 ) ),
	Index( 133 ),
	Index Row( 133 ),
	UniqueID( 1441114933 ),
	FoundPt( {384, 228} ),
	Origin( {5.08093306288033, 6.30828571428571} ),
	Tag Line( 1 )
);

```

**追加**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
gb = dt << Graph Builder(
	Size( 531, 456 ),
	Show Control Panel( 0 ),
	Variables( X( :Petal length ), Y( :Sepal length ), Color( :Species ) ),
	Elements( Points( X, Y, Legend( 2 ) ) )
);
frame = (gb << report)[FrameBox( 1 )];
frame << Set Gridlet(
	Expunge( {{Matcher( "Species" )}} ),
	Annex(
		{{Matcher( "Species@Wikipedia" ), value( local:_Species ),
		click( Web( "https://wikipedia.com/wiki/Iris_" || local:_Species ) )}}
	)
);
frame << Add Pin Annotation(
	Seg( Marker Seg( 1 ) ),
	Index( 133 ),
	Index Row( 133 ),
	UniqueID( 1441114933 ),
	FoundPt( {384, 228} ),
	Origin( {5.08093306288033, 6.30828571428571} ),
	Tag Line( 1 )
);

```

**重命名**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
gb = dt << Graph Builder(
	Size( 531, 456 ),
	Show Control Panel( 0 ),
	Variables( X( :Petal length ), Y( :Sepal length ), Color( :Species ) ),
	Elements( Points( X, Y, Legend( 2 ) ) )
);
frame = (gb << report)[FrameBox( 1 )];
frame << Set Gridlet( Rename( {{Matcher( "Row" ), value( "Observation" )}} ) );
frame << Add Pin Annotation(
	Seg( Marker Seg( 1 ) ),
	Index( 133 ),
	Index Row( 133 ),
	UniqueID( 1441114933 ),
	FoundPt( {384, 228} ),
	Origin( {5.08093306288033, 6.30828571428571} ),
	Tag Line( 1 )
);

```

**重新格式化**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
gb = dt << Graph Builder(
	Size( 531, 456 ),
	Show Control Panel( 0 ),
	Variables( X( :Petal length ), Y( :Sepal length ), Color( :Species ) ),
	Elements( Points( X, Y, Legend( 2 ) ) )
);
frame = (gb << report)[FrameBox( 1 )];
frame << Set Gridlet(
	Reformat(
		{{Matcher( "Petal length" ), Format( "Scientific", 80 ), 80},
		{Matcher( "Sepal length" ), Format( "Scientific", 80 ), 80}}
	)
);
frame << Add Pin Annotation(
	Seg( Marker Seg( 1 ) ),
	Index( 133 ),
	Index Row( 133 ),
	UniqueID( 1441114933 ),
	FoundPt( {384, 228} ),
	Origin( {5.08093306288033, 6.30828571428571} ),
	Tag Line( 1 )
);

```

### Set Textlet

**语法:** obj &lt;&lt; Set Textlet

**说明:** 定义该图形的悬停标签 RTF 内容 (textlet)。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );
//This example uses hardcoded content from Wikipedia
// For a complete example that uses dynamic, data-driven content, please see
// https://community.jmp.com/t5/JMP-Scripts/WikiReader-Augmenting-Hover-Labels-with-web-data-and-images/ta-p/237488
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
gb = dt << Graph Builder(
	Size( 531, 456 ),
	Show Control Panel( 0 ),
	Variables( X( :Petal length ), Y( :Sepal length ), Color( :Species ) ),
	Elements( Points( X, Y, Legend( 2 ) ) )
);
frame = (gb << report)[FrameBox( 1 )];
frame << Set Textlet(
	Setup(
		local:description =
		"Iris virginica, with the common name Virginia iris, is a perennial species of flowering plant, native to eastern North America.";
		local:text = Substr( local:description, 1, 140 ) || "...";
	),
	Markup(
		"<background color='white'><i><font family='Arial' size='12'>{local:text}</font></i></background>"
	),
	Width( 320 )
);
gpin = frame << Add Pin Annotation(
	Seg( Marker Seg( 1 ) ),
	Index( 133 ),
	Index Row( 133 ),
	UniqueID( 1441114933 ),
	FoundPt( {384, 228} ),
	Origin( {5.08093306288033, 6.30828571428571} ),
	Tag Line( 1 )
);

```

### Size to Isometric

**语法:** obj &lt;&lt; Size to Isometric

**说明:** 重新调整框架大小，以使在 X 方向上每个像素的实际单位数与在 Y 方向上的相同。

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
framebox = rbiv[Frame Box( 1 )];
framebox << Size To Isometric;

```

### Ternary X Title

**语法:** obj &lt;&lt; Ternary X Title( text )

**说明:** 设置三元框架的 X 轴标题。

**JMP添加的版本:** 15

### Ternary Y Title

**语法:** obj &lt;&lt; Ternary Y Title( text )

**说明:** 设置三元框架的 Y 轴标题。

**JMP添加的版本:** 15

### Ternary Y1 Title

**语法:** obj &lt;&lt; Ternary Y1 Title( text )

**说明:** 设置三元框架的 Y1 轴标题。

**JMP添加的版本:** 15

### Top

**语法:** obj &lt;&lt; Top( state=0|1 )

**说明:** 显示或隐藏框架的顶部边框。

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
framebox = rbiv[Frame Box( 1 )];
framebox << Top( 0 );

```

### Transparency

**语法:** obj &lt;&lt; Transparency

**说明:** 设置框架的透明度。

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
framebox = rbiv[Frame Box( 1 )];
framebox << Transparency( 0.5 );

```

### X Axis

**语法:** obj &lt;&lt; X Axis( &lt; Min( min ) &gt;, &lt; Max( max ) &gt;, &lt; Inc( n ) &gt;, ... )

**说明:** 在单个消息中应用一个或多个 X 轴更改。若未指定参数，则会打开“X 轴设置”窗口。

**示例 1**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Show Control Panel( 0 ),
	Variables( X( :age ), Y( :height ), Y( :weight, Position( 1 ), Side( "Right" ) ) ),
	Elements(
		Points( X, Y( 1 ), Legend( 1 ), Jitter( 1 ) ),
		Points( X, Y( 2 ), Legend( 3 ), Jitter( 1 ) )
	)
);
gbr = gb << report;
fb = gbr[Frame Box( 1 )];
fb << X Axis;

```

**示例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = dt << Graph Builder(
	Show Control Panel( 0 ),
	Variables(
		X( :age, Size( 23 ) ),
		Y( :height, Size( 37 ) ),
		Y( :weight, Position( 1 ), Size( 37 ), Side( "Right" ) )
	),
	Elements(
		Points( X, Y( 1 ), Legend( 1 ), Jitter( 1 ) ),
		Points( X, Y( 2 ), Legend( 3 ), Jitter( 1 ) )
	)
);
framebox = Report( gb )[framebox( 1 )];
framebox << X Axis(
	Min( -2 ),
	Max( 7 ),
	Inc( 1 ),
	Add Ref Line( 5, "Solid", "Blue" ),
	Rotated Labels( "Vertical" )
);

```

### Y Axis

**语法:** obj &lt;&lt; Y Axis( &lt; Min( min ) &gt;, &lt; Max( max ) &gt;, &lt; Inc( n ) &gt;, ... )

**说明:** 在单个消息中应用一个或多个 Y 轴更改。若未指定参数，则会打开“Y 轴设置”窗口。

**示例 1**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Show Control Panel( 0 ),
	Variables( X( :age ), Y( :height ), Y( :weight, Position( 1 ), Side( "Right" ) ) ),
	Elements(
		Points( X, Y( 1 ), Legend( 1 ), Jitter( 1 ) ),
		Points( X, Y( 2 ), Legend( 3 ), Jitter( 1 ) )
	)
);
gbr = gb << report;
fb = gbr[Frame Box( 1 )];
fb << Y Axis;

```

**示例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = dt << Graph Builder(
	Show Control Panel( 0 ),
	Variables(
		X( :age, Size( 23 ) ),
		Y( :height, Size( 37 ) ),
		Y( :weight, Position( 1 ), Size( 37 ), Side( "Right" ) )
	),
	Elements(
		Points( X, Y( 1 ), Legend( 1 ), Jitter( 1 ) ),
		Points( X, Y( 2 ), Legend( 3 ), Jitter( 1 ) )
	)
);
framebox = Report( gb )[framebox( 1 )];
framebox << Y Axis(
	Add Ref Line( 61.25, "Solid", "Medium Dark Green" ),
	Show Major Grid( 1 ),
	Show Minor Grid( 1 ),
	Format( "Fixed Dec", 5, 2 ),
	Rotated Labels( "Perpendicular" )
);

```

