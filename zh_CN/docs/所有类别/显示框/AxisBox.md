# AxisBox



## 共享项消息

### Add Line Annotation

**语法:** obj &lt;&lt; Add Line Annotation

**说明:** 在显示框上添加线条。

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << Add Line Annotation( Line( 160, 235, 240, 235 ) );

```

### Add Pin Annotation

**语法:** obj &lt;&lt; Add Pin Annotation

**说明:** 在显示框顶部添加固定注解。大多数特性（例如“Index Row”、“UniqueID”和“FoundPt”）专为内部使用设计。

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Y( :weight ),	X( :height ),	SendToReport(		Dispatch( {}, "Bivar Plot", FrameBox,			Add Pin Annotation(				Seg( Marker Seg( 1 ) ),				Index( 17 ),				Index Row( 17 ),				UniqueID( -960001792 ),				FoundPt( {238, 219} ),				Origin( {64.9765625, 142} ),				Offset( {-174, -40} ),				Tag Line( 1 ),				Font( "Helvetica", 11, "Plain" )			)		)	));

```

### Add Polygon Annotation

**语法:** obj &lt;&lt; Add Polygon Annotation

**说明:** 在显示框上添加多边形。

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << Add Polygon Annotation(	Points( {210, 80}, {230, 70}, {280, 115}, {240, 120} ),	Color( "Red" ),	Closed( 1 ));

```

### Add Simple Shape Annotation

**语法:** obj &lt;&lt; Add Simple Shape Annotation

**说明:** 在显示框上添加简单形状。

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << Add Simple Shape Annotation( Oval( 210, 100, 250, 75 ) );rbiv << Add Simple Shape Annotation( Rectangle( 70, 180, 95, 215 ) );

```

### Add Text Annotation

**语法:** obj &lt;&lt; Add Text Annotation

**说明:** 在显示框上添加文本。

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << Add Text Annotation(	Text( "We need to discuss this at the next meeting." ),	Text Box( {65, 35, 200, 77} ));

```

### Append

**语法:** obj &lt;&lt; Append( db2 )

**说明:** 将“db2”添加到显示树的“db”之后。

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << append( Text Box( "=== below ===" ) );

```

### Background Color

**语法:** obj &lt;&lt; Background Color( color ); color = obj &lt;&lt; Get Background Color

**说明:** 若背景颜色已设置，在绘制框内容之前将使用背景颜色填满框。若未设置背景颜色，包含框的背景和内容将显现。

**JMP添加的版本:** 15

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;tb = r[Table Box( 1 )];Show( tb << Get Background Color );Wait( 2 );tb << Background Color( "Yellow" );

```

### Border

**语法:** obj &lt;&lt; Border( sides ); sides = obj &lt;&lt; Get Border

**说明:** 边框是沿显示框四周绘制的实线。若提供单个值，它将应用于所有边。若指定两个值，它们将应用于水平和垂直边框。

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;tb = r[Table Box( 1 )];Show( tb << Get Border );Wait( 1 );tb << Border( 1 );

```

### Border Color

**语法:** obj &lt;&lt; Border Color( color ); color = obj &lt;&lt; Get Border Color

**说明:** 用于覆盖框边框默认颜色的可选颜色。

**JMP添加的版本:** 19

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;tb = r[Table Box( 1 )];Wait( 2 );tb << Border( 1 );tb << Border Color( "Light Red" );

```

### Bring Window To Front

**语法:** obj &lt;&lt; Bring Window To Front

**说明:** 将窗口移至最前面。

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );w << Run Script( "Bivariate" );w << Bring Window To Front;

```

### Child

**语法:** obj &lt;&lt; Child

**说明:** 返回该显示框的子级项。

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;axisbox = rbiv[axis box( 1 )];axisParent = axisbox << parent();axisChild = axisParent << child();Print( axisChild << Class Name() );

```

### Class Name

**语法:** obj &lt;&lt; Class Name

**说明:** 返回显示框的显示类的名称。

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;axisbox = rbiv[axis box( 1 )];axisbox << Class Name();

```

### Clone Box

**语法:** obj &lt;&lt; Clone Box

**说明:** 创建显示框的新副本。

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << append( Text Box( "=== below ===" ) );clonedBox = rbiv << Clone Box();rbiv << append( clonedBox );

```

### Close Window

**语法:** obj &lt;&lt; Close Window( &lt;"NoSave"&gt; )

**说明:** 关闭窗口。

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );Wait( 2 );w << Close Window;

```

### Copy Data

**语法:** obj &lt;&lt; Copy Data

**说明:** 将矩阵或表中的制表符分隔数据复制到剪贴板。

```jsl

New Window( "x", mat = Matrix Box( [1 2 3, 4 5 6, 7 8 9] ) );mat << CopyData;

```

### Copy Graph

**语法:** obj &lt;&lt; Copy Graph

**说明:** 将包含图形和坐标轴的图片置于剪贴板中。

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;(rbiv[FrameBox( 1 )]) << Copy Graph();"paste into a paint program";

```

### Copy Picture

**语法:** obj &lt;&lt; Copy Picture

**说明:** 将显示框图片置于剪贴板中。

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << Copy Picture();

```

### Delete Box

**语法:** obj &lt;&lt; Delete Box

**说明:** 删除该显示框。

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;axisbox = rbiv[axis box( 1 )];axisbox << Delete Box();

```

### Deselect

**语法:** obj &lt;&lt; Deselect

**说明:** 取消选择用于“编辑”菜单命令的该对象。

```jsl

//This message applies to all display box objectsselected = 0;New Window( "Example",	ex = Button Box( "Press Me",		selected = !selected;		refresh;	));refresh = Function( {},	If( selected,		ex << Select,		ex << Deselect	));

```

### Dispatch

**语法:** obj &lt;&lt; Dispatch( {outline node, ...}, display element, display element type, command )

**说明:** 将“command”发送到显示树的特定部分。

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << Dispatch( {}, "Bivar Plot", FrameBox, {Marker Size( 3 )} );

```

### Enabled

**语法:** obj &lt;&lt; Enabled( state=0|1 ); state = obj &lt;&lt; Get Enabled

**说明:** 未启用的对象不会响应键盘或鼠标输入。子对象会继承该属性，所以禁用的容器对象会导致所有子孙对象都被禁用。

```jsl

//This message applies to all display objectsNew Window( "enabled",	V List Box(		check = Check Box(			{"Use Password"},			ptext << Enabled( check << Get( 1 ) );			pvalue << Enabled( check << Get( 1 ) );		),		Lineup Box( N Col( 2 ),			Text Box( "Username:" ),			Text Edit Box( "", <<Set Width( 100 ) ),			ptext = Text Box( "Password:", <<Enabled( 0 ) ),			pvalue = Text Edit Box( "",				<<Password Style( 1 ),				<<Set Width( 20 ),				<<Enabled( 0 )			)		)	));

```

### Find

**语法:** obj &lt;&lt; Find

**说明:** 返回使用指定的“argument”的显示框。

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;axisbox = rbiv << Find( axis box( 1 ) );axisbox << Delete();

```

### Get Annotation

**语法:** obj &lt;&lt; Get Annotation

**说明:** 返回固定到该显示框的第一个注解。可以通过对结果使用 Sib() 来访问其他注解。

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << Add Text Annotation(	Text( "We need to discuss this at the next meeting." ),	Text Box( {65, 35, 200, 77} ));annotation = rbiv << Get Annotation;annotation << delete;

```

### Get Background Color

**语法:** obj &lt;&lt; Background Color( color ); color = obj &lt;&lt; Get Background Color

**说明:** 若背景颜色已设置，在绘制框内容之前将使用背景颜色填满框。若未设置背景颜色，包含框的背景和内容将显现。

**JMP添加的版本:** 15

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;tb = r[Table Box( 1 )];Show( tb << Get Background Color );Wait( 2 );tb << Background Color( "Yellow" );

```

### Get Border

**语法:** obj &lt;&lt; Border( sides ); sides = obj &lt;&lt; Get Border

**说明:** 边框是沿显示框四周绘制的实线。若提供单个值，它将应用于所有边。若指定两个值，它们将应用于水平和垂直边框。

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;tb = r[Table Box( 1 )];Show( tb << Get Border );Wait( 1 );tb << Border( 1 );

```

### Get Border Color

**语法:** obj &lt;&lt; Border Color( color ); color = obj &lt;&lt; Get Border Color

**说明:** 用于覆盖框边框默认颜色的可选颜色。

**JMP添加的版本:** 19

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;tb = r[Table Box( 1 )];Wait( 2 );tb << Border( 1 );tb << Border Color( "Light Red" );

```

### Get Content Size

**语法:** obj &lt;&lt; Get Content Size

**说明:** 返回窗口中内容的大小。

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );c = w << Get Content Size();Show( c );

```

### Get Display Path

**语法:** obj &lt;&lt; Get Display Path( parent box, &lt;receiver expr&gt;, &lt;Mode("XPath"|"Subscript")&gt; )

**说明:** 获取相对稳健的表达式以在 parent box 和 obj 之间导航。该路径不能保证在 JMP 版本之间是稳定的。receiver expr 归入到输出表达式（若提供）。若未提供，则改用为 parent box 提供的表达式。如示例中所示，该消息主要用于增加已有路径的稳健性。默认为 XPath 模式。

#### 下标模式

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Run Script( "Bivariate" );rpt = Report( biv );subscript expr = rpt[Number Col Box( 9 )] << Get Display Path( rpt, Mode( "Subscript" ) ); // Make Number Col Box(9) more robustShow( subscript expr );subscript expr << Select;

```

#### 基本

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Run Script( "Bivariate" );rpt = Report( biv );xpath expr = rpt[Number Col Box( 9 )] << Get Display Path( rpt, Expr( Report( biv ) ) ); // Make Number Col Box(9) more robustShow( xpath expr );xpath expr << Select;

```

### Get Enabled

**语法:** obj &lt;&lt; Enabled( state=0|1 ); state = obj &lt;&lt; Get Enabled

**说明:** 未启用的对象不会响应键盘或鼠标输入。子对象会继承该属性，所以禁用的容器对象会导致所有子孙对象都被禁用。

```jsl

//This message applies to all display objectsNew Window( "enabled",	V List Box(		check = Check Box(			{"Use Password"},			ptext << Enabled( check << Get( 1 ) );			pvalue << Enabled( check << Get( 1 ) );		),		Lineup Box( N Col( 2 ),			Text Box( "Username:" ),			Text Edit Box( "", <<Set Width( 100 ) ),			ptext = Text Box( "Password:", <<Enabled( 0 ) ),			pvalue = Text Edit Box( "",				<<Password Style( 1 ),				<<Set Width( 20 ),				<<Enabled( 0 )			)		)	));

```

### Get HTML

**语法:** obj &lt;&lt; Get HTML( &lt;format&gt; )

**说明:** 返回包含显示框的 HTML 源的字符串。

**示例 1**

```jsl

//This message applies to all display box objectswin = New Window( "Example", a = Text Box( "Example Text" ) );a << Set Text( win << Get HTML );

```

**示例 2**

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), Means( 1 ), Mean Diamonds( 1 ) );Save Text File( "$TEMP/Oneway.html", obj << Get HTML( "svg" ) ); // Prefer <<Save HTMLWeb( "$TEMP/Oneway.html", JMPWindow );

```

### Get Height

**语法:** width = obj &lt;&lt; Get Height

**说明:** 返回显示框的高度。

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;fb = r[framebox( 1 )];fb << Get Height;

```

### Get Horizontal Alignment

**语法:** obj &lt;&lt; Horizontal Alignment( "Default"|"Left"|"Center"|"Right" ); "Default"|"Left"|"Center"|"Right" = obj &lt;&lt; Get Horizontal Alignment

**说明:** 水平对齐控制框在容器中的位置（若框未占满整个空间）。

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;lb = r[List Box( 6 )];lb << Border( 1 );Wait( 2 );lb << Horizontal Alignment( "Right" );

```

### Get Journal

**语法:** obj &lt;&lt; Get Journal

**说明:** 返回包含显示框的记录源的字符串。

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;Print( rbiv << Get Journal );

```

### Get Margin

**语法:** obj &lt;&lt; Margin( sides ); sides = obj &lt;&lt; Get Margin

**说明:** 边距在框和邻接框的边框之间添加空白。使用命名参数，或提供值列表。若提供单个值，它将应用于所有边。若指定两个值，它们将应用于水平和垂直边距。

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;tb = r[Table Box( 1 )];Show( tb << Get Margin );tb << Border( 1 );Wait( 2 );tb << Margin( Left( 20 ), Top( 20 ), Right( 20 ), Bottom( 20 ) );

```

### Get Max Size

**语法:** width,height = obj &lt;&lt; Get Max Size

**说明:** 返回该显示框的最大自动拉伸尺寸。

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/big class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;fb = r[framebox( 1 )];fb << Get Max Size;

```

### Get Min Size

**语法:** width,height = obj &lt;&lt; Get Min Size

**说明:** 返回该显示框的最小自动拉伸尺寸。

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/big class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;fb = r[framebox( 1 )];fb << Get Min Size;

```

### Get Namespace

**语法:** obj &lt;&lt; Get Namespace

**说明:** 返回与该显示对象关联的命名空间。

```jsl

//This message applies to all display objectsx = 1;w = New Window( "Test", b = Button Box( "Press me" ) );b:x = 2;ns = b << GetNamespace();Show( ns:x, x );

```

### Get On Close

**语法:** obj &lt;&lt; Get On Close

**说明:** 返回当窗口关闭时将运行的脚本或函数。

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );w << On Close(	// Modal dialogs return Button(1) if OK is pressed, Button(-1) if canceled	New Window( "Are you sure?",		<<modal,		V List Box(			Text Box( "Press OK to allow the window to close" ),			H List Box( Button Box( "OK" ), Button Box( "Cancel" ) )		)	)["button"] == 1);Show( w << Get On Close );

```

### Get Padding

**语法:** obj &lt;&lt; Padding( sides ); sides = obj &lt;&lt; Get Padding

**说明:** 填充在内容和框的边框之间添加空白。使用命名参数，或提供值列表。若提供单个值，它将应用于所有边。若指定两个值，它们将应用于水平和垂直填充。

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;tb = r[Table Box( 1 )];Show( tb << Get Padding );tb << Border( 1 );Wait( 1 );tb << Padding( Left( 20 ), Top( 20 ), Right( 20 ), Bottom( 20 ) );

```

### Get Page Setup

**语法:** obj &lt;&lt; Get Page Setup

**说明:** 获取 PDF 的页面设置信息

```jsl

//This message applies to all display box objectsw = New Window( "Window", Text Box( "Page Setup Test" ) );w << get page setup();

```

### Get Picture

**语法:** obj &lt;&lt; Get Picture( &lt;Scale(factor)&gt;, &lt;Type("Bitmap" | "Scalable")&gt;, &lt;View("Picture" | "Screen" | "Print"), &lt;Appearance("Default" | "Current")&gt;, &lt;SubRect(Left(number), Top(number), Right(number), Bottom(number))&gt; )

**说明:** 将 db 捕获为图像对象。可选 Scale 参数将以统一尺度的分辨率呈现图像。统一尺度要求显示框可伸缩。Type 参数确定结果将是可缩放矢量图像还是位图。默认返回可缩放图像，它适合保存为矢量格式，例如 PDF。View 选项更改某些框的行为。"Picture" 的默认选项按照导出为图像格式时的方式绘制报表，其滚动区域完全显示。"Screen" 的视图模式按照屏幕上看到的方式绘制报表，"Print" 按照打印时的方式绘制报表，而没有任何页面设置功能。SubRect 选项将捕获生成的图像的一部分而不是整个图像。Appearance 选项可以从 "Default" 输出颜色更改为屏幕上看到的 "Current" 颜色。仅 Type "Bitmap"Appearance 支持 View、SubRect 和 Appearance 选项。

#### 尺度

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv[FrameBox( 1 )] << Set Stretch( "Window", "Window" );New Window( "Example", rbiv << Get Picture( Scale( 1.5 ) ) );

```

#### 视图和外观

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate(	Y( :weight ),	X( :height ),	Fit Line( {Line Color( {212, 73, 88} )} ),	Fit Polynomial( 3, {Line Color( {61, 174, 70} )} ),	Kernel Smoother( 1, 1, 0.5, 0 ));rbiv = biv << report;rbiv[FrameBox( 1 )] << Set Stretch( "Window", "Window" );New Window( "Example",	H List Box(		rbiv << Get Picture( View( "Screen" ), Appearance( "Current" ) ),		rbiv << Get Picture( View( "Print" ), Appearance( "Default" ) )	));

```

#### 默认值

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;New Window( "Example", rbiv << Get Picture );

```

### Get Project

**语法:** project = obj &lt;&lt; Get Project()

**说明:** 返回窗口的父项目，若它不在项目中则返回 Empty()。

**JMP添加的版本:** 14

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );c = w << Get Project();Show( c );

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

### Get RTF

**语法:** obj &lt;&lt; Get RTF( &lt;format&gt; )

**说明:** 返回包含显示框的 RTF 源的字符串。

**示例 1**

```jsl

//This message applies to all display box objectswin = New Window( "Example", a = Text Box( "Example Text" ) );a << Set Text( win << Get RTF );

```

**示例 2**

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), Means( 1 ), Mean Diamonds( 1 ) );Save Text File( "$TEMP/Oneway.rtf", obj << Get RTF( "png" ) ); // Prefer <<Save RTFOpen( "$TEMP/Oneway.rtf" );

```

### Get Row States

**语法:** rs = obj &lt;&lt; Get Row States( &lt;dt&gt; )

**说明:** 返回一个向量，它包含给定数据表或当前数据表中每行的行状态。行状态可以来自表或来自框的过滤器上下文。

#### Single table

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );New Window( "filter test",	Data Filter Context Box(		H List Box(			dt << Data Filter(				Local,				Add Filter( columns( :height ), Where( :height >= 51 & :height <= 62 ) ),				Mode( Select( 0 ), Show( 1 ), Include( 1 ) )			),			V List Box(				t = Text Box( "0 Rows Excluded" ),				Distribution(					Continuous Distribution( Column( :weight ) ),					Nominal Distribution( Column( :age ) )				)			)		)	));updatetext = Function( {},	rs = t << Get Row States( dt );	n = 0;	For( ii = 1, ii <= N Rows( rs ), ii++,		If( Excluded( As Row State( rs[ii] ) ),			n			++)	);	t << Set Text( Char( n ) || " Rows Excluded" ););rsupdate = Function( {a},	If( Is Matrix( a ),		updatetext()	));rsh = t << Make Row State Handler( dt, rsupdate );updatetext();

```

#### Where subset

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );New Window( "filter test",	t = Text Box( "0 Rows Excluded" ),	dist = Distribution(		Continuous Distribution( Column( :weight ) ),		Nominal Distribution( Column( :age ) ),		Local Data Filter(			Add Filter( columns( :height ), Where( :height >= 51 & :height <= 62 ) ),			Mode( Select( 0 ), Show( 1 ), Include( 1 ) )		),		Where( :sex == "F" )	));subset = dist << Get Data Table();updatetext = Function( {},	rs = Report( dist ) << Get Row States( subset );	n = 0;	For( ii = 1, ii <= N Rows( rs ), ii++,		If( Excluded( As Row State( rs[ii] ) ),			n			++)	);	t << Set Text( Char( n ) || " Rows Excluded" ););rsupdate = Function( {a},	If( Is Matrix( a ),		updatetext()	));rsh = Report( dist ) << Make Row State Handler( subset, rsupdate );updatetext();

```

### Get Show Window

**语法:** obj &lt;&lt; Get Show Window

**说明:** 返回窗口的可见性。

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );Wait( 1 );w << Show Window( 0 );Wait( 2 );Print( w << Get Show Window() );

```

### Get Size

**语法:** width,height = obj &lt;&lt; Get Size

**说明:** 返回显示框大小。

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/big class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;fb = r[framebox( 1 )];Print( fb << Get Size );

```

### Get Stretch

**语法:** x,y = obj &lt;&lt; Get Stretch

**说明:** 返回该显示框在水平和垂直方向的拉伸标志。

**JMP添加的版本:** 16

```jsl

//This message applies to all display box objectsNew Window( "Stretch",	V List Box(		H List Box( Text Edit Box( "String1" ), Text Edit Box( "String2" ) ),		spacer = Spacer Box(			Size( 20, 20 ),			Color( "Light Red" ),			<<Set Stretch( "Fill", "Off" )		)	));spacer << Get Stretch();

```

### Get Text

**语法:** obj &lt;&lt; Get Text

**说明:** 返回包含显示框的文本的字符串。

```jsl

//This message applies to all display box objectswin = New Window( "Example", a = Text Box( "Example Text" ) );a << Set Text( win << Get Text );

```

### Get Text Color

**语法:** obj &lt;&lt; Text Color( color ); color = obj &lt;&lt; Get Text Color

**说明:** 将使用文本颜色（若已设置）绘制文本。若未设置属性，则框将继承包含框的文本颜色。

**JMP添加的版本:** 15

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;tb = r[Table Box( 1 )];Show( tb << Get Text Color );Wait( 2 );tb << Text Color( "Red" );

```

### Get UI Only

**语法:** obj &lt;&lt; UI Only( state=0|1 ); state = obj &lt;&lt; Get UI Only

### Get Vertical Alignment

**语法:** obj &lt;&lt; Vertical Alignment( "Default"|"Top"|"Center"|"Bottom" ); "Default"|"Top"|"Center"|"Bottom" = obj &lt;&lt; Get Vertical Alignment

**说明:** 垂直对齐控制在容器中的位置（若框未占满整个空间）。

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;lb = r[List Box( 6 )];lb << Set Horizontal( 1 );lb = r[List Box( 7 )];lb << Border( 1 );Wait( 2 );lb << Vertical Alignment( "Bottom" );

```

### Get Visibility

**语法:** obj &lt;&lt; Visibility( "Visible"|"Hidden"|"Collapse" ); "Visible"|"Hidden"|"Collapse" = obj &lt;&lt; Get Visibility

**说明:** 可见性决定框是否显示以及框是否占据空间。"Visible" 的默认值表示将显示对象。"Hidden" 框为不显示但仍占据空间，而 "Collapsed" 框不在布局中占据空间。

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;tb = r[Table Box( 1 )];Show( tb << Get Visibility );Wait( 1 );tb << Visibility( "Collapse" );Show( tb << Get Visibility );

```

### Get Web Support

**语法:** obj &lt;&lt; Get Web Support

**说明:** 返回一个数字，指示显示对象的交互式 HTML 支持的水平。1 表示支持部分或全部元素。0 表示不支持。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Bivariate( Y( :Weight ), X( :Height ) );s = obj << Get Web Support();Show( s );

```

### Get Width

**语法:** width = obj &lt;&lt; Get Width

**说明:** 返回显示框的宽度。

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/big class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;fb = r[framebox( 1 )];fb << Get Width;

```

### Get Window Icon

**语法:** obj &lt;&lt; Get Window Icon

**说明:** 返回窗口图标。

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );t = w << Get Window Icon;Show( t );

```

### Get Window Position

**语法:** obj &lt;&lt; Get Window Position

**说明:** 返回窗口的位置。

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );p = w << Get Window Position();Show( p );

```

### Get Window Size

**语法:** obj &lt;&lt; Get Window Size

**说明:** 返回窗口大小。

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );s = w << Get Window Size();Show( s );

```

### Get Window Title

**语法:** obj &lt;&lt; Get Window Title

**说明:** 返回窗口标题。

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );t = w << Get Window Title;Show( t );

```

### Get Window View

**语法:** obj &lt;&lt; Get Window View

**说明:** 返回当前窗口视图。窗口可以为“可见”、“不可见”或“私有”。

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );Print( w << Get Window View() );

```

### Get XML

**语法:** obj &lt;&lt; Get XML( &lt;English(0|1)&gt;, &lt;NoData(0|1)&gt; )

**说明:** 检索 XML 格式的显示树。默认情况下，字符串以本地语言返回，XML 在某些框中包括数据值。使用 English 选项返回可用的英语字符串。使用 NoData 选项省略框中的数据值，对于某些显示树来说，这些数据值可能非常大。

```jsl

//This message applies to all display box objectswin = New Window( "test", a = Text Box( "my test" ) );a << set text( win << get xml );

```

### GetOffset

**语法:** x,y = obj &lt;&lt; GetOffset

**说明:** 返回相对于父框该显示框的偏移。您可能需要在循环中使用 <<Parent 消息来累积若干偏移。

```jsl

New Window( "example",	MouseBox(		Graph Box(			title( "title" ),			Pen Size( 3 );			Y Function( -3 + 100 / 2 * (1 + Sin( (2 * Pi() * (x + .3)) / 100 )), x );		),		<<settrackenable( 1 ) // put the mouse box to work, watching "tracking"	,		<<settrack( // events from the mouse (movement, with button up or down)			Function( {this, pt}, // parameters: this is the mousebox, pt is mouse x,y				{fb, offset, t, off, size}, // local variables				// recalulate offset and size each time, the values can change				fb = this[framebox( 1 )]; // the framebox in the graph 				offset = [0, 0]; // accumulator to sum up the offset between framebox and mousebox				t = fb; // a temporary box that starts at the frame 				While( t != this, // and walks up to the mousebox					off = t << getOffset; // ask each box for its offset to the immediate parent					offset += Matrix( off ); // convert list answer to matrix so + will work					t = t << parent; // crawl up to the mousebox, one box at a time				);				size = Matrix( fb << getSize ); // the frame knows its size				If( // over the frame box					offset[1] < pt[1] < offset[1] + size[1] & offset[2] < pt[2] < offset[2]					 + size[2]				,					fb << setbackgroundcolor( "red" ),					fb << setbackgroundcolor( "blue" )				);			)		)	));

```

### Horizontal Alignment

**语法:** obj &lt;&lt; Horizontal Alignment( "Default"|"Left"|"Center"|"Right" ); "Default"|"Left"|"Center"|"Right" = obj &lt;&lt; Get Horizontal Alignment

**说明:** 水平对齐控制框在容器中的位置（若框未占满整个空间）。

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;lb = r[List Box( 6 )];lb << Border( 1 );Wait( 2 );lb << Horizontal Alignment( "Right" );

```

### Inval

**语法:** obj &lt;&lt; Inval

**说明:** 使显示框无效。若 <<UpdateWindow 消息已发送或操作系统有时间更新，窗口将更新。

```jsl

//This message applies to all display box objectscolor = "green"; /* initial color in a variable */New Window( "Inval example",	Button Box( "red",		color = "red";		g1 << inval; /* tell the oval to redraw */		g2 << inval; /* tell the rectangle to redraw */		g1 << updateWindow; /* tell the window to update immediately */		// this is a busy-wait to help demonstrate the various behaviors...		x = Tick Seconds();		While( Tick Seconds() - x < .5, 0 /* delay without wait(.5) */ );	),	Button Box( "blue",		color = "blue";		g1 << inval; /* same comments */		g2 << inval;		g1 << updateWindow;		x = Tick Seconds();		While( Tick Seconds() - x < .5, 0 );	),	g1 = Graph Box(/* the graph does NOT watch for the color variable to change                       but will use the current value of color when it reshows */		Fill Color( color );		Oval( 10, 80, 70, 50, 1 );	),	g2 = Graph Box(		Fill Color( color );		Rect( 10, 80, 70, 50, 1 );	));

```

### Is Dirty

**语法:** obj &lt;&lt; Is Dirty

**说明:** 获取文档的修改状态。1 表示文档已修改并且将提示保存；0 表示文档未修改。

**JMP添加的版本:** 14

```jsl

ww = New Window( "Test", <<Script, "Open(\!"$SAMPLE_DATA\Big Class.jmp\!");" );Show( ww << Is Dirty );ww << Set Dirty( 0 );Show( ww << Is Dirty );

```

### Is Modal Dialog

**语法:** obj &lt;&lt; Is Modal Dialog

**说明:** 若窗口是模态对话框，则返回 true。仅当从窗口处理程序回调调用时有用。

```jsl

With Window Handler(	New Window( "Modal Window", <<Modal ),	Function( {win},		Print( win << Is Modal Dialog() );		win << close window();	));

```

### Journal

**语法:** obj &lt;&lt; Journal

**说明:** 从显示框生成记录。

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << journal;

```

### Journal Window

**语法:** obj &lt;&lt; Journal Window

**说明:** 打开窗口的记录窗口。

```jsl

//This message applies to all display box objectsw = New Window( "Main Window", Text Box( "Main JMP Window" ) );w << Journal Window;

```

### Launch

**语法:** obj &lt;&lt; Launch

**说明:** 在显示框的上下文中对指定的“argument”求值。

```jsl

//This message applies to all display box objectsOpen( "$SAMPLE_DATA/Big Class.jmp" );New Window( "example",	ob1 = Outline Box( "treemap launcher" ),	ob2 = Outline Box( "bivariate partial" ),	ob3 = Outline Box( "bivariate launched" ));ob1 << launch( Treemap() );ob2 << launch( Bivariate( Y( :height ) ) );ob3 << launch( Bivariate( Y( :height ), X( :weight ) ) );

```

### Make RowState Handler

**语法:** rs = obj &lt;&lt; Make RowState Handler( &lt;dt&gt;, function(a) )

**说明:** 为给定的数据表或当前数据表创建行状态处理程序。当框的过滤器上下文中的行状态更改时调用该函数。函数的参数保存已更改的行号，若行状态过滤器已更改，则保存 -1。

#### Single table

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );New Window( "filter test",	Data Filter Context Box(		H List Box(			dt << Data Filter(				Local,				Add Filter( columns( :height ), Where( :height >= 51 & :height <= 62 ) ),				Mode( Select( 0 ), Show( 1 ), Include( 1 ) )			),			V List Box(				t = Text Box( "0 Rows Excluded" ),				Distribution(					Continuous Distribution( Column( :weight ) ),					Nominal Distribution( Column( :age ) )				)			)		)	));updatetext = Function( {},	rs = t << Get Row States( dt );	n = 0;	For( ii = 1, ii <= N Rows( rs ), ii++,		If( Excluded( As Row State( rs[ii] ) ),			n			++)	);	t << Set Text( Char( n ) || " Rows Excluded" ););rsupdate = Function( {a},	If( Is Matrix( a ),		updatetext()	));rsh = t << Make Row State Handler( dt, rsupdate );updatetext();

```

#### Where subset

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );New Window( "filter test",	t = Text Box( "0 Rows Excluded" ),	dist = Distribution(		Continuous Distribution( Column( :weight ) ),		Nominal Distribution( Column( :age ) ),		Local Data Filter(			Add Filter( columns( :height ), Where( :height >= 51 & :height <= 62 ) ),			Mode( Select( 0 ), Show( 1 ), Include( 1 ) )		),		Where( :sex == "F" )	));subset = dist << Get Data Table();updatetext = Function( {},	rs = Report( dist ) << Get Row States( subset );	n = 0;	For( ii = 1, ii <= N Rows( rs ), ii++,		If( Excluded( As Row State( rs[ii] ) ),			n			++)	);	t << Set Text( Char( n ) || " Rows Excluded" ););rsupdate = Function( {a},	If( Is Matrix( a ),		updatetext()	));rsh = Report( dist ) << Make Row State Handler( subset, rsupdate );updatetext();

```

### Margin

**语法:** obj &lt;&lt; Margin( sides ); sides = obj &lt;&lt; Get Margin

**说明:** 边距在框和邻接框的边框之间添加空白。使用命名参数，或提供值列表。若提供单个值，它将应用于所有边。若指定两个值，它们将应用于水平和垂直边距。

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;tb = r[Table Box( 1 )];Show( tb << Get Margin );tb << Border( 1 );Wait( 2 );tb << Margin( Left( 20 ), Top( 20 ), Right( 20 ), Bottom( 20 ) );

```

### Maximize Window

**语法:** obj &lt;&lt; Maximize Window( &lt;state=0|1&gt; )

**说明:** 最大化窗口。默认参数为 1。

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );Wait( 1 );w << Maximize Window( 1 );Wait( 1 );w << Maximize Window( 0 );

```

### Minimize Window

**语法:** obj &lt;&lt; Minimize Window( &lt;state=0|1&gt; )

**说明:** 最小化窗口。默认参数为 1。

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );Wait( 1 );w << Minimize Window( 1 );Wait( 1 );w << Minimize Window( 0 );

```

### Move Window

**语法:** obj &lt;&lt; Move Window( x,y )

**说明:** 将窗口移至指定位置。

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );Wait( 2 );w << Move Window( 500, 500 );

```

### Next

**语法:** obj &lt;&lt; Next

**说明:** 返回该显示框后的显示框。

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;next = rbiv << Next();Print( next << Class Name() );

```

### On Close

**语法:** obj &lt;&lt; On Close( script )

**说明:** 设置脚本或函数以在关闭窗口时运行。该脚本应返回 1 以允许关闭，或返回 0 以阻止窗口关闭。

#### 关闭函数

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );w << On Close(	Function( {this},         // Modal dialogs return Button(1) if OK is pressed, Button(-1) if cancelled		New Window( "Are you sure?",			<<modal,			V List Box(				Text Box( "Press OK to allow " || (this << Get Window Title) || " to close" ),				H List Box( Button Box( "OK" ), Button Box( "Cancel" ) )			)		)["button"] == 1	));

```

#### 关闭脚本

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );w << On Close(    // Modal dialogs return Button(1) if OK is pressed, Button(-1) if canceled	New Window( "Are you sure?",		<<modal,		V List Box(			Text Box( "Press OK to allow the window to close" ),			H List Box( Button Box( "OK" ), Button Box( "Cancel" ) )		)	)["button"] == 1);

```

### Optimize Display

**语法:** obj &lt;&lt; Optimize Display

**说明:** 将数据表的列宽度和窗口设置为最佳大小。

**JMP添加的版本:** 14

```jsl

//This message applies to Data Table objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Optimize Display;

```

### Pad Window

**语法:** obj &lt;&lt; Pad Window( bool )

**说明:** 开启或关闭窗口填充。

```jsl

//This message applies to all display box objectsOpen( "$SAMPLE_DATA/Big Class.jmp" );d = distribution( Column( :height ) );r = d << report;r << Pad Window( 0 );

```

### Padding

**语法:** obj &lt;&lt; Padding( sides ); sides = obj &lt;&lt; Get Padding

**说明:** 填充在内容和框的边框之间添加空白。使用命名参数，或提供值列表。若提供单个值，它将应用于所有边。若指定两个值，它们将应用于水平和垂直填充。

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;tb = r[Table Box( 1 )];Show( tb << Get Padding );tb << Border( 1 );Wait( 1 );tb << Padding( Left( 20 ), Top( 20 ), Right( 20 ), Bottom( 20 ) );

```

### Page Break

**语法:** obj &lt;&lt; Page Break

**说明:** 在显示框之前插入分页符。

```jsl

//This message applies to all display box objectsNew Window( "Example",	ob = Outline Box( "Outline Box",		V List Box(			ob2 = Outline Box( "Outline Box 2",				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )			),			ob3 = Outline Box( "Outline Box",				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )			)		)	));ob3 << Page Break;

```

### Parent

**语法:** obj &lt;&lt; Parent

**说明:** 返回该显示框的父级项。

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;axisbox = rbiv[axis box( 1 )];axisParent = axisbox << parent();Print( axisParent << Class Name() );

```

### Prepend

**语法:** obj &lt;&lt; Prepend( db2 )

**说明:** 将“db2”添加到显示树的“db”之前。

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << prepend( Text Box( "=== above ===" ) );

```

### Prev Sib

**语法:** obj &lt;&lt; Prev Sib

**说明:** 返回该显示框的前一个平级项。

**JMP添加的版本:** 15

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;axisbox = rbiv[axis box( 2 )];axisSibling = axisbox << Prev Sib();Print( axisSibling << Class Name() );

```

### Print Window

**语法:** obj &lt;&lt; Print Window

**说明:** 打印窗口。

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );w << Print Window;

```

### Reshow

**语法:** obj &lt;&lt; Reshow

**说明:** 使显示框无效并用新内容更新窗口。若随着更新需要更多的控件，请参见 <<Inval 和 <<UpdateWindow 消息。

```jsl

//This message applies to all display box objectscolor = "green"; /* initial color in a variable */New Window( "Reshow example",	Button Box( "red",		color = "red";		g << reshow/* tell the graph that something changed */;	),	Button Box( "blue",		color = "blue";		g << reshow/* tell the graph that something changed */;	),	g = Graph Box(/* the graph does NOT watch for the color variable to change                     but will use the current value of color when it reshows */		Fill Color( color );		Oval( 10, 80, 70, 50, 1 );	));

```

### Save Capture

**语法:** obj &lt;&lt; Save Capture( &lt;"path"&gt;, &lt;format&gt;, &lt;Add Sibling(n)&gt; )

**说明:** 在指定的 path 处保存显示框抓屏图。若未指定 path，则显示“另存为”窗口。

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << Save Capture( "$TEMP/jmp_example.png", "png" );

```

### Save HTML

**语法:** obj &lt;&lt; Save HTML( &lt;pathname&gt;, &lt;format&gt; )

**说明:** 以指定的“format”格式保存 HTML 源和图形文件夹。

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << Save HTML( "$TEMP/jmp_example.html" );

```

### Save Interactive HTML

**语法:** obj &lt;&lt; Save Interactive HTML( &lt;pathname&gt;, &lt;Boolean&gt; )

**说明:** 将带数据的交互式 HTML 保存至文件。Boolean 参数表示报表为静态。

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << Save Interactive HTML( "$TEMP/jmp_example.html" );

```

### Save Journal

**语法:** obj &lt;&lt; Save Journal( &lt;pathname&gt; )

**说明:** 保存显示框的记录源。

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << Save Journal( "$TEMP/jmp_example.jrn" );

```

### Save MSWord

**语法:** obj &lt;&lt; Save MSWord( &lt;pathname&gt;, &lt;format&gt; )

**说明:** 将显示框保存为 Microsoft Word 文档（仅限于 Windows）。

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << Save MSWord( "$TEMP/jmp_example.doc" );

```

### Save PDF

**语法:** obj &lt;&lt; Save PDF( &lt;pathname&gt;, &lt;Show Page Setup(0|1)&gt;, &lt;Portrait(0|1)&gt; )

**说明:** 将显示框保存为 PDF 文件。

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << Save PDF( "$TEMP/jmp_example.pdf" );

```

### Save Picture

**语法:** obj &lt;&lt; Save Picture( &lt;pathname&gt;, &lt;format&gt;, &lt;Scale(factor)&gt;, &lt;Type("Bitmap" | "Scalable")&gt;, &lt;View("Picture" | "Screen" | "Print"), &lt;Appearance("Default" | "Current")&gt;, &lt;SubRect(Left(number), Top(number), Right(number), Bottom(number))&gt; )

**说明:** 保存显示框的图片。支持的格式包括 EMF(Windows)、PICT(Macintosh)、JPEG 或 JPG、GIF 或 PNG。可选的 Scale 参数将以统一尺度的分辨率呈现图像。统一尺度要求显示框可伸缩。Type 参数确定结果将是可缩放矢量图像还是位图。默认返回可缩放图像，它适合保存为矢量格式，例如 PDF。View 选项更改某些框的行为。"Picture" 的默认选项按照导出为图像格式时的方式绘制报表，其滚动区域完全显示。"Screen" 的视图模式按照屏幕上看到的方式绘制报表，"Print" 按照打印时的方式绘制报表，而没有任何页面设置功能。SubRect 选项将捕获生成的图像的一部分而不是整个图像。Appearance 选项可以从 "Default" 输出颜色更改为屏幕上看到的 "Current" 颜色。只有 Type "Bitmap" 支持 View、SubRect 和 Appearance 选项。

#### 尺度

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv[FrameBox( 1 )] << Set Stretch( "Window", "Window" );rbiv << Save Picture( "$TEMP/jmp_example_scale.png", "png", Scale( 1.5 ) );New Window( "scaled image", New Image( "$TEMP/jmp_example_scale.png" ) );

```

#### 视图和外观

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate(	Y( :weight ),	X( :height ),	Fit Line( {Line Color( {212, 73, 88} )} ),	Fit Polynomial( 3, {Line Color( {61, 174, 70} )} ),	Kernel Smoother( 1, 1, 0.5, 0 ));rbiv = biv << report;rbiv << Save Picture(	"$TEMP/jmp_example_screen.png",	"png",	View( "Screen" ),	Appearance( "Current" ));rbiv << Save Picture(	"$TEMP/jmp_example_print.png",	"png",	View( "Print" ),	Appearance( "Default" ));New Window( "Example",	H List Box(		New Image( "$TEMP/jmp_example_screen.png" ),		New Image( "$TEMP/jmp_example_print.png" )	));

```

#### 默认值

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << Save Picture( "$TEMP/jmp_example.png", "png" );

```

### Save Presentation

**语法:** obj &lt;&lt; Save Presentation( "filename.pptx", &lt;Template("path\\to\\my_template.pptx")&gt;, &lt;Insert(Begin|End|#) | Replace(Begin|End|#) | Append&gt;, &lt;Outline Titles(None|Hide|TopLeft|TopRight|BottomLeft|BottomRight)&gt;, &lt;"EMF"|"PNG"|"JPG"|"Native"&gt; )

**说明:** 在演示文稿中保存显示框表和图形幻灯片。演示文稿可以使用 Microsoft PowerPoint 或其他演示文稿软件打开。

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );biv = bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << Save Presentation( "$TEMP/jmp_example.pptx" );Open( "$TEMP/jmp_example.pptx" );

```

### Save RTF

**语法:** obj &lt;&lt; Save RTF( &lt;pathname&gt;, &lt;format&gt; )

**说明:** 以指定的“format”格式保存带图形的 RTF 源。

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << Save RTF( "$TEMP/jmp_example.rtf", "png" );

```

### Save Text

**语法:** obj &lt;&lt; Save Text( &lt;pathname&gt;, &lt;format&gt; )

**说明:** 保存包含显示框的文本的文件。

```jsl

//This message applies to all display box objectswin = New Window( "Example", a = Text Box( "Example Text" ) );a << save text( "$TEMP/jmp_example.txt" );

```

### Save Window Report

**语法:** obj &lt;&lt; Save Window Report( pathname, &lt;embed data(0|1)&gt; )

**说明:** 将当前报表窗口保存至 JMP 报表文件 (.jrp)。

**JMP添加的版本:** 16

```jsl

//This message can be sent to any display box object but will be applied to the report windowOpen( "$SAMPLE_DATA/Big Class.jmp" );d = distribution( Column( :height ) );d << Save Window Report( "$DOCUMENTS/test.jrp", embed data( 1 ) );

```

### Scroll Window

**语法:** obj &lt;&lt; Scroll Window( DisplayBox | &lt;Relative(&lt;v&gt; | &lt;h&gt;,&lt;v&gt;)&gt; | &lt;Absolute(&lt;v&gt; | &lt;h&gt;,&lt;v&gt;) )

**说明:** 调整窗口滚动条以显示给定的 DisplayBox，或滚动相对像素数，或滚动至绝对像素位置。可以使用关键字 "Start" 或 "End" 来代替像素数。

#### Absolute

```jsl

Open( "$SAMPLE_DATA/Blood Pressure.jmp" );fm = Fit Model(	Y( :BP 8M, :BP 12M, :BP 6M, :BP 8W, :BP 12W, :BP 6W, :BP 8F, :BP 12F, :BP 6F ),	Effects( :Subject, :Dose ),	Personality( "Manova" ),	Run);fm << setwindowsize( 600, 600 ); // shrink the windowfm << scroll window( Absolute( "End", "End" ) );Wait( 1 );fm << scroll window( Absolute( 0, 300 ) );Wait( 1 );

```

#### Box

```jsl

Open( "$SAMPLE_DATA/Blood Pressure.jmp" );fm = Fit Model(	Y( :BP 8M, :BP 12M, :BP 6M, :BP 8W, :BP 12W, :BP 6W, :BP 8F, :BP 12F, :BP 6F ),	Effects( :Subject, :Dose ),	Personality( "Manova" ),	Run);fm << setwindowsize( 600, 600 ); // shrink the windowFor( i = 1, i <= 5, i++, // repeatedly, bring each frame box into view for 1/2 second	fm << scroll window( Report( fm )[framebox( 2 )] );	Wait( .5 );	fm << scroll window( Report( fm )[framebox( 3 )] );	Wait( .5 );	fm << scroll window( Report( fm )[framebox( 1 )] );	Wait( .5 ););

```

#### Relative

```jsl

Open( "$SAMPLE_DATA/Blood Pressure.jmp" );fm = Fit Model(	Y( :BP 8M, :BP 12M, :BP 6M, :BP 8W, :BP 12W, :BP 6W, :BP 8F, :BP 12F, :BP 6F ),	Effects( :Subject, :Dose ),	Personality( "Manova" ),	Run);fm << setwindowsize( 600, 600 ); // shrink the windowfm << scroll window( Relative( 300 ) );Wait( 1 );fm << scroll window( Relative( -50 ) );Wait( 1 );fm << scroll window( Relative( "Start" ) );Wait( 1 );

```

### Select

**语法:** obj &lt;&lt; Select

**说明:** 选择该对象，以供“编辑”菜单命令使用。

```jsl

//This message applies to all display box objectsNew Window( "Example", ex = Button Box( "Press Me" ) );ex << Select;

```

### Set Content Size

**语法:** obj &lt;&lt; Set Content Size( x,y )

**说明:** 设置窗口中内容的大小。

```jsl

//This message applies to all display box objectsw = New Window( "Test",	lb = List Box( {"a", "b", "c", "d"} ),	Button Box( "Enable 2nd item",		lb << enable item( 2, 1 );		Show( lb << item enabled( 2 ) );	),	Button Box( "Disable 2nd item",		lb << enable item( 2, 0 );		Show( lb << item enabled( 2 ) );	));Wait( 2 );w << Set Content Size( 400, 300 );

```

### Set Dirty

**语法:** obj &lt;&lt; Set Dirty

**说明:** 设置文档的修改状态。0 将不提示保存；1 将提示。

**JMP添加的版本:** 14

```jsl

ww = New Window( "Test", <<Script, "Open(\!"$SAMPLE_DATA\Big Class.jmp\!");" );Show( ww << Is Dirty );ww << Set Dirty( 0 );Show( ww << Is Dirty );

```

### Set Height

**语法:** obj &lt;&lt; Set Height( width )

**说明:** 设置显示框的高度。

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;fb = r[framebox( 1 )];fb << Set Height( 150 );

```

### Set Main Window

**语法:** obj &lt;&lt; Set Main Window

**说明:** 将窗口设置为 JMP 中的主窗口，并将之前的主窗口设置为常规窗口

```jsl

//This message applies to all display box objectsw = New Window( "Main Window", Text Box( "Main JMP Window" ) );w << Set Main Window;

```

### Set Max Size

**语法:** obj &lt;&lt; Set Max Size( width,height )

**说明:** 设置该显示框的最大自动拉伸尺寸。

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/big class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;fb = r[framebox( 1 )];fb << Set Max Size( 500, 500 );fb << Get Max Size;

```

### Set Min Size

**语法:** obj &lt;&lt; Set Min Size( width,height )

**说明:** 设置该显示框的最小自动拉伸尺寸。

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/big class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;fb = r[framebox( 1 )];fb << Set Min Size( 30, 30 );fb << Get Min Size;

```

### Set Page Setup

**语法:** obj &lt;&lt; Set Page Setup( &lt;margins(left, top, right, bottom)&gt;, &lt;scale(s)&gt;, &lt;portrait(0|1)&gt;, &lt;paper size(p)&gt;, &lt;Table of Contents(always, never, default)&gt; )

**说明:** 设置打印或保存为 pdf 时使用的页面设置信息。可以选择从分级显示项框生成目录。

```jsl

//This message applies to all display box objectsw = New Window( "Window", Outline Box( "TOC", Text Box( "Page Setup Test" ) ) );w << Set page setup(	margins( 1, 1, 1, 1 ),	scale( 1 ),	portrait( 1 ),	paper size( "Letter" ),	Table of Contents( "always" ));w << Save pdf( "$DOCUMENTS\test.pdf" );

```

### Set Print Footers

**语法:** obj &lt;&lt; Set Print Footers( left footer, center footer, right header )

**说明:** 为打印输出设置居左、居中和居右的页脚

```jsl

//This message applies to all display box objectsw = New Window( "Window", Text Box( "Footer Test" ) );w << Set Print Footers(	"Today is: &d;"/*left*/, "&wt;"/*center*/,	"Page &pn; of &pc;"/*right*/);w << Print Window;

```

### Set Print Headers

**语法:** obj &lt;&lt; Set Print Headers( left header, center header, right header )

**说明:** 为打印输出设置居左、居中和居右的页眉

```jsl

//This message applies to all display box objectsw = New Window( "Window", Text Box( "Header Test" ) );w << Set Print Headers(	"Today is: &d;"/*left*/, "&wt;"/*center*/,	"Page &pn; of &pc;"/*right*/);w << Print Window;

```

### Set Property

**语法:** obj &lt;&lt; Set Property( "property", value )

**说明:** 设置显示框的已命名的“property”的值。

```jsl

New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );bb << Set Property( "Enabled", 0 );

```

### Set Report Title

**语法:** obj &lt;&lt; Set Report Title( "string" )

**说明:** 更改报表标题。

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << Set Report Title( "New Title" );

```

### Set Stretch

**语法:** obj &lt;&lt; Set Stretch( x,y )

**说明:** 设置框的水平和垂直拉伸行为。随 Window 拉伸的框将随窗口或拆分窗口大小更改调整大小。拉伸 Fill 的框将拉伸以填充它们容器中的可用空间。拉伸设置为 Off 的框通常情况下不拉伸。大多数框默认设置为 Neutral，这表示它们将根据其子框确定行为。

**JMP添加的版本:** 16

#### 拉伸填充

```jsl

//This message applies to all display box objectsNew Window( "Stretch",	V List Box(		H List Box( Text Edit Box( "String1" ), Text Edit Box( "String2" ) ),		Spacer Box( Size( 20, 20 ), Color( "Light Red" ), <<Set Stretch( "Fill", "Off" ) )	));

```

#### 随窗口拉伸

```jsl

//This message applies to all display box objectsNew Window( "Example",	H List Box(		tv = Text Box( "V+V", <<rotate text( left ) ),		V List Box(			Text Box( "resize the containing window" ),			th = Text Box( "H+H" ),			ts = Spacer Box( <<Size( 10, 30 ), <<Color( "blue" ) )		)	));tv << Vertical Alignment( "Center" );th << Horizontal Alignment( "Center" );th << Set Stretch( "Window", "Off" );ts << Set Min Size( 5, 20 );ts << Set Max Size( 100000, 100 );ts << Set Stretch( "Window", "Window" );

```

### Set Summary Behavior

**语法:** obj &lt;&lt; Set Summary Behavior( "Default"|"Visible"|"Collapse" )

**说明:** Sets the behavior of the box when a report is viewed in Summary mode.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );d = dt << Distribution( Column( :height ) );d << Report View( "Summary" );r = d << Report;tb = r[Table Box( 1 )];tb << Set Summary Behavior( "Visible" );

```

### Set Window Icon

**语法:** obj &lt;&lt; Set Window Icon( icon name )

**说明:** 设置窗口图标。

```jsl

//This message applies to all display box objectsw = New Window( "Example", ex = Button Box( "New Analysis" ) );w << Set Window Icon( "Scatter3D" );

```

### Set Window Size

**语法:** obj &lt;&lt; Set Window Size( x,y )

**说明:** 设置窗口大小。

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );w << Set Window Size( 800, 1200 );

```

### Set Window Title

**语法:** obj &lt;&lt; Set Window Title( "string" )

**说明:** 更改窗口标题。

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << Set Window Title( "New Title" );

```

### Show Properties

**语法:** obj &lt;&lt; Show Properties

**说明:** 为显示框显示属性编辑器

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << Show Properties();

```

### Show Tree Structure

**语法:** obj &lt;&lt; Show Tree Structure

**说明:** 显示该显示框及其相关节点的层次树状结构。

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << Show Tree Structure();

```

### Show Window

**语法:** obj &lt;&lt; Show Window( state=0|1 )

**说明:** 显示或隐藏窗口。该功能可用于临时隐藏窗口。 默认开启。

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );Wait( 1 );w << Show Window( 0 );Wait( 2 );w << Show Window( 1 );

```

### Sib

**语法:** obj &lt;&lt; Sib

**说明:** 返回该显示框的平级项。

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;axisbox = rbiv[axis box( 1 )];axisSibling = axisbox << sib();Print( axisSibling << Class Name() );

```

### Sib Append

**语法:** obj &lt;&lt; Sib Append( Display box, Horizontal|Vertical )

**说明:** 紧接在该显示框之后添加一个显示框。

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/big class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;fb = r()[framebox( 1 )];fb << sib append(	Text Box( "============ after ==============", Rotate Text( "Right" ) ),	"Horizontal");fb << sib append( Text Box( "=== below ===" ), "Vertical" );

```

### Sib Prepend

**语法:** obj &lt;&lt; Sib Prepend( Display box, Horizontal|Vertical )

**说明:** 紧接在该显示框之前添加一个显示框。

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/big class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;fb = r[framebox( 1 )];fb << sib prepend(	Text Box( "    ============ before ==============", Rotate Text( "Right" ) ),	"Horizontal");fb << sib prepend( Text Box( "=== above ===" ), "Vertical" );

```

### Size Window

**语法:** obj &lt;&lt; Size Window( x,y )

**说明:** 设置窗口大小。

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );w << Size Window( 500, 500 );

```

### Text Color

**语法:** obj &lt;&lt; Text Color( color ); color = obj &lt;&lt; Get Text Color

**说明:** 将使用文本颜色（若已设置）绘制文本。若未设置属性，则框将继承包含框的文本颜色。

**JMP添加的版本:** 15

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;tb = r[Table Box( 1 )];Show( tb << Get Text Color );Wait( 2 );tb << Text Color( "Red" );

```

### Top Parent

**语法:** obj &lt;&lt; Top Parent

**说明:** 返回该显示框的根级。

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rootParent = rbiv << Top Parent();Print( rootParent << Class Name() );

```

### UI Only

**语法:** obj &lt;&lt; UI Only( state=0|1 ); state = obj &lt;&lt; Get UI Only

### Update Window

**语法:** obj &lt;&lt; Update Window

**说明:** 若有失效的区域，则更新包含显示框的窗口。<<Inval 消息创建失效区域。

```jsl

//This message applies to all display box objectscolor = "green"; /* initial color in a variable */New Window( "UpdateWindow example",	Button Box( "red",		color = "red";        // try commenting out each of the 4 lines that follow, run the script,		// click the buttons, and resize the windows (for example) to force a		// redraw.  All 4 lines are important, though the last two may be		// slightly different on Windows and Mac OSs.		g1 << inval; /* tell the oval to redraw */		g2 << inval; /* tell the rectangle to redraw */		g1 << updateWindow; /* tell the oval window to update immediately */		g2 << updateWindow; /* tell the rect window to update immediately */		// this is a busy-wait to help demonstrate the various behaviors...		x = Tick Seconds();		While( Tick Seconds() - x < .5, 0 /* delay without wait(.5) */ );	),	Button Box( "blue",		color = "blue";		g1 << inval; /* same comments */		g2 << inval;		g1 << updateWindow;		g2 << updateWindow;		x = Tick Seconds();		While( Tick Seconds() - x < .5, 0 );	));New Window( "oval",	g1 = Graph Box(/* the graph does NOT watch for the color variable to change                      but will use the current value of color when it reshows */		Fill Color( color );		Oval( 10, 80, 70, 50, 1 );	));New Window( "rect",	g2 = Graph Box(		Fill Color( color );		Rect( 10, 80, 70, 50, 1 );	));

```

### Vertical Alignment

**语法:** obj &lt;&lt; Vertical Alignment( "Default"|"Top"|"Center"|"Bottom" ); "Default"|"Top"|"Center"|"Bottom" = obj &lt;&lt; Get Vertical Alignment

**说明:** 垂直对齐控制在容器中的位置（若框未占满整个空间）。

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;lb = r[List Box( 6 )];lb << Set Horizontal( 1 );lb = r[List Box( 7 )];lb << Border( 1 );Wait( 2 );lb << Vertical Alignment( "Bottom" );

```

### Visibility

**语法:** obj &lt;&lt; Visibility( "Visible"|"Hidden"|"Collapse" ); "Visible"|"Hidden"|"Collapse" = obj &lt;&lt; Get Visibility

**说明:** 可见性决定框是否显示以及框是否占据空间。"Visible" 的默认值表示将显示对象。"Hidden" 框为不显示但仍占据空间，而 "Collapsed" 框不在布局中占据空间。

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;tb = r[Table Box( 1 )];Show( tb << Get Visibility );Wait( 1 );tb << Visibility( "Collapse" );Show( tb << Get Visibility );

```

### Window Class Name

**语法:** obj &lt;&lt; Window Class Name

**说明:** 返回显示框的窗口类的名称。

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;Show( biv << Window Class Name() );Show( rbiv << Window Class Name() );

```

### XPath

**语法:** obj &lt;&lt; XPath( XPath expression, &lt;English(0|1)&gt;, &lt;NoData(0|1)&gt; )

**说明:** 将 XPath 表达式应用于显示树的 XML 表示并返回结果。默认情况下，字符串以本地语言返回，XML 在某些框中包括数据值。使用 English 选项返回可用的英语字符串。使用 NoData 选项来省略框中的数据值，当您的查询仅基于框特性时，这些数据值对性能很有用。

#### Attributes

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Run Script( "Bivariate" );(Report( biv ) << xpath( "//OutlineBox[@isOpen='false']" )) << Close( 0 );

```

#### Box type

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Run Script( "Bivariate" );(Report( biv ) << xpath( "//TextEditBox" )) << Text Color( "Green" );

```

#### Child box

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Run Script( "Bivariate" );(Report( biv ) << xpath( "//OutlineBox[text()='Summary of Fit']/TableBox" )) <<Make Into Data Table;

```

#### Data

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Run Script( "Bivariate" );(Report( biv ) << xpath( "//NumberColBoxItem[text()='40']/parent::*" )) <<Text Color( "Green" );

```

#### Display Seg

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Run Script( "Bivariate" );(Report( biv ) << xpath( "//MarkerSeg" )) << Set Marker( "Square" );

```

#### Text

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Run Script( "Bivariate" );(Report( biv ) << xpath( "//OutlineBox[text()='Parameter Estimates']" )) << Close;

```

### Zoom Window

**语法:** obj &lt;&lt; Zoom Window

**说明:** 调整窗口大小，使其大到足够显示其所有内容。

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );w << Set Window Size( 80, 120 );Wait( 2 );w << Zoom Window;

```

## 项消息

### Add Axis Label

**语法:** obj &lt;&lt; Add Axis Label( label )

**说明:** 添加含指定字符串的坐标轴标签。

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );biv = Bivariate( Y( :weight ), X( :height ), FitLine );rbiv = biv << report;axisbox = rbiv[axis box( 1 )];axisbox << RemoveAxisLabel();axisbox << AddAxisLabel( "pounds" );

```

### Add Ref Line

**语法:** obj &lt;&lt; Add Ref Line( value, &lt;"Solid|Dashed|Double"&gt;, &lt;Color&gt;, &lt;"label"&gt;, &lt;line width&gt;, &lt;transparency&gt; )

**说明:** 在网格 value 处添加参考线。

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );biv = Bivariate( Y( :weight ), X( :height ), FitLine );rbiv = biv << report;axisbox = rbiv[axis box( 1 )];axisbox << Add Ref Line( 108.3182, "Dashed", blue, "M mean", 2 );axisbox << Add Ref Line( 100.9444, "Dotted", red, "F mean", 2 );

```

### Axis Settings

**语法:** obj &lt;&lt; Axis Settings

**说明:** 打开轴对话框，或为指定轴设置可配置的轴选项。

**示例 1**

```jsl

//Open the axis setting dialog:Open( "$SAMPLE_DATA/Big Class.jmp" );biv = Bivariate( Y( :weight ), X( :height ), FitLine );rbiv = biv << report;axisbox = rbiv[axis box( 1 )];axisbox << Axis Settings();

```

**示例 2**

```jsl

//Configure settings for horizontal and vertical axes:Open( "$SAMPLE_DATA/Big Class.jmp" );biv = Bivariate( Y( :weight ), X( :height ), FitLine );rbiv = biv << report;vaxisbox = rbiv[axis box( 1 )];haxisbox = rbiv[axis box( 2 )];vaxisbox << Axis Settings( Decimal( 10, 3 ), Show Major Grid( 1 ) );haxisbox << Axis Settings( Min( 10 ), Max( 100 ) );

```

### Copy Axis Settings

**语法:** obj &lt;&lt; Copy Axis Settings

**说明:** 生成包含当前轴设置的脚本，并将其置于剪贴板上。

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );biv1 = Bivariate( Y( :weight ), X( :height ), FitLine );biv2 = Bivariate( Y( :weight ), X( :height ), FitLine );rbiv1 = biv1 << report;axisbox1 = rbiv1[axis box( 1 )];axisbox1 << Scale( "Log" );axissettings = axisbox1 << Copy Axis Settings;rbiv2 = biv2 << report;axisbox2 = rbiv2[axis box( 1 )];axisbox2 << Paste Axis Settings;

```

### Custom Scale Name

**语法:** obj &lt;&lt; Custom Scale Name

**说明:** 尺度的名称。

```jsl

Open( "$sample_data/big class.jmp" );gb = Graph Builder(	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 2 ) ), Smoother( X, Y, Legend( 1 ) ) ));gbr = Report( gb );gbr[axisbox( 1 )] << scale( custom scale, custom scale name( "log2" ) ) << Min( 32 ) <<Max( 100 );

```

### Decimal

**语法:** obj &lt;&lt; Decimal( number )

**说明:** 设置数值标签小数点后的小数位数。

```jsl

Open( "$SAMPLE_DATA/SATByYear.jmp" );biv = Bivariate( Y( :Population ), X( :"Salary (1997)"n ) );rbiv = biv << report;axisbox = rbiv[axis box( 2 )];axisbox << decimal( 1 );

```

### Edit Value Order

**语法:** obj &lt;&lt; Edit Value Order

**说明:** 打开“值顺序”列属性进行编辑。

**JMP添加的版本:** 16

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );o = Oneway( Y( :weight ), X( :sex ) );ro = o << report;axisbox = ro[axis box( 2 )];axisbox << Edit Value Order();

```

### Edit Value Order Mode

**语法:** obj &lt;&lt; Edit Value Order Mode

**JMP添加的版本:** 16

### Format

**语法:** obj &lt;&lt; Format( "最佳"|"固定小数位数"|"百分比"|"p 值"|"科学记数法"|"工程"|"工程 SI"|"精度"|"货币"|"m#d#y"|"mmddyyyy"|"m#y"|"yyyyQq"|"d#m#y"|"ddmmyyyy"|"ddMonyyyy"|"Monddyyyy"|"y#m#d"|"yyyymmdd"|"yyyy-mm-dd"|"m#d#y h:m"|"m#d#y h:m:s"|"d#m#y h:m"|"d#m#y h:m:s"|"y#m#d h:m"|"y#m#d h:m:s"|"ddMonyyyy h:m"|"ddMonyyyy h:m:s"|"ddMonyyyy:h:m"|"ddMonyyyy:h:m:s"|"Monddyyyy h:m"|"Monddyyyy h:m:s"|"yyyy-mm-ddThh:mm"|"yyyy-mm-ddThh:mm:ss"|":day:hr:m"|":day:hr:m:s"|"hr:m"|"hr:m:s"|"min:s"|"h:m:s"|"h:m"|"完整日期"|"缩写日期"|"语言/区域日期"|"语言/区域日期时间 h:m"|"语言/区域日期时间 h:m:s" )

**说明:** 设置标签的格式。

```jsl

Open( "$SAMPLE_DATA/Financial.jmp" );biv = Bivariate( Y( :"Profit($M)"n ), X( :"Sales($M)"n ), FitLine );rbiv = biv << report;profitaxis = rbiv[axis box( 1 )];profitaxis << Format( currency );salesaxis = rbiv[axis box( 2 )];salesaxis << Format( currency );

```

### Get Format

**语法:** obj &lt;&lt; Get Format

**说明:** Returns the format specification for axis values.

**JMP添加的版本:** 14

```jsl

Open( "$SAMPLE_DATA/Financial.jmp" );biv = Bivariate( Y( :"Profit($M)"n ), X( :"Sales($M)"n ), FitLine );rbiv = biv << report;profitaxis = rbiv[axis box( 1 )];profitaxis << Format( currency );salesaxis = rbiv[axis box( 2 )];salesaxis << Format( currency );salesaxis << get format;

```

### Get Inc

**语法:** obj &lt;&lt; Get Inc( number )

**说明:** 获取轴的增量值

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );biv = Bivariate( Y( :weight ), X( :height ), FitLine );rbiv = biv << report;axisbox = rbiv[axis box( 1 )];axisbox << Get Inc;

```

### Get Max

**语法:** obj &lt;&lt; Get Max( number )

**说明:** 获取轴的最大值

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );biv = Bivariate( Y( :weight ), X( :height ), FitLine );rbiv = biv << report;axisbox = rbiv[axis box( 1 )];axisbox << Get Max;

```

### Get Min

**语法:** obj &lt;&lt; Get Min( number )

**说明:** 获取轴的最小值

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );biv = Bivariate( Y( :weight ), X( :height ), FitLine );rbiv = biv << report;axisbox = rbiv[axis box( 1 )];axisbox << Get Min;

```

### Get Minor Ticks

**语法:** obj &lt;&lt; Get Minor Ticks( number )

**说明:** 获取副刻度数。

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );biv = Bivariate( Y( :weight ), X( :height ), FitLine );rbiv = biv << report;axisbox = rbiv[axis box( 1 )];n = axisbox << Get Minor Ticks;

```

### Get Script

**语法:** obj &lt;&lt; Get Script

**说明:** 返回用于重新创建坐标轴框的脚本。

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );biv = Bivariate( Y( :weight ), X( :height ), FitLine );rbiv = biv << report;axisbox = rbiv[axis box( 1 )];Print( axisbox << Get Script() );

```

### Inc

**语法:** obj &lt;&lt; Inc( number )

**说明:** 设置轴的增量值。

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );biv = Bivariate( Y( :weight ), X( :height ), FitLine );rbiv = biv << report;axisbox = rbiv[axis box( 1 )];axisbox << Inc( 5 );

```

### Inside Ticks

**语法:** obj &lt;&lt; Inside Ticks( state=0|1 )

**说明:** 在图形框架内显示坐标轴刻度标

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );biv = Bivariate( Y( :weight ), X( :height ), FitLine );rbiv = biv << report;axisbox = rbiv[axis box( 2 )];axisbox << Inside Ticks( 1 );

```

### Interval

**语法:** obj &lt;&lt; Interval( "数值"|"年"|"季度"|"月"|"周"|"日"|"时"|"分"|"秒" )

**说明:** 设置数值标签的格式。

```jsl

Open( "$SAMPLE_DATA/TechStock.jmp" );plot = Overlay Plot(	X( :Date ),	Y( :High, :Low, :Close, :Volume ),	Y Scale( Left, Left, Left, Right ),	Left Axis << {{Format( "Best", 9 ), Min( 0 ), Max( 60 ), Inc( 10 ), Minor Ticks( 0 )}},	Right Axis << {{Format( "Best", 9 ), Min( 0 ), Max( 800000000 ), Inc( 100000000 ),	Minor Ticks( 0 )}},);rplot = plot << Report();axisbox = rplot[axis box( 3 )];axisbox << Format( "y/m/d" );axisbox << Interval( Week );

```

### Label Row

**语法:** obj &lt;&lt; Label Row

### Label Row Nesting

**语法:** obj &lt;&lt; Label Row Nesting( number )

**说明:** 设置日期格式轴的标签行数

```jsl

Open( "$SAMPLE_DATA/TechStock.jmp" );biv = Bivariate( Y( :Open ), X( :Date ), FitLine );rbiv = biv << report;axisbox = rbiv[axis box( 2 )];axisbox << Label Row Nesting( 3 );

```

### Major Grid Line Color

**语法:** obj &lt;&lt; Major Grid Line Color( color )

**说明:** 设置主网格线颜色

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );biv = Bivariate( Y( :weight ), X( :height ), FitLine );rbiv = biv << report;axisbox = rbiv[axis box( 2 )];axisbox << Major Grid Line Color( "Blue" );

```

### Max

**语法:** obj &lt;&lt; Max( number )

**说明:** 设置轴的最大值。

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );biv = Bivariate( Y( :weight ), X( :height ), FitLine );rbiv = biv << report;axisbox = rbiv[axis box( 1 )];axisbox << Max( 120 );

```

### Min

**语法:** obj &lt;&lt; Min( number )

**说明:** 设置轴的最小值。

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );biv = Bivariate( Y( :weight ), X( :height ), FitLine );rbiv = biv << report;axisbox = rbiv[axis box( 1 )];axisbox << Min( 100 );

```

### Minor Grid Line Color

**语法:** obj &lt;&lt; Minor Grid Line Color( color )

**说明:** 设置副网格线颜色

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );biv = Bivariate( Y( :weight ), X( :height ), FitLine );rbiv = biv << report;axisbox = rbiv[axis box( 2 )];axisbox << Minor Grid Line Color( "Blue" );

```

### Minor Ticks

**语法:** obj &lt;&lt; Minor Ticks( number )

**说明:** 设置标签之间的刻度标数量。

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );biv = Bivariate( Y( :weight ), X( :height ), FitLine );rbiv = biv << report;axisbox = rbiv[axis box( 1 )];axisbox << Minor Ticks( 5 );

```

### Paste Axis Settings

**语法:** obj &lt;&lt; Paste Axis Settings

**说明:** 剪贴板包含适用于轴设置的脚本，应用该脚本。

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );biv1 = Bivariate( Y( :weight ), X( :height ), FitLine );biv2 = Bivariate( Y( :weight ), X( :height ), FitLine );rbiv1 = biv1 << report;axisbox1 = rbiv1[axis box( 1 )];axisbox1 << Scale( "Log" );axissettings = axisbox1 << Copy Axis Settings;rbiv2 = biv2 << report;axisbox2 = rbiv2[axis box( 1 )];axisbox2 << Paste Axis Settings;

```

### Remove Axis Label

**语法:** obj &lt;&lt; Remove Axis Label

**说明:** 删除所有使用“添加轴标签”添加的标签。

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );biv = Bivariate( Y( :weight ), X( :height ), FitLine );rbiv = biv << report;axisbox = rbiv[axis box( 1 )];axisbox << RemoveAxisLabel( "weight" );axisbox << AddAxisLabel( "pounds" );

```

### Remove Ref Line

**语法:** obj &lt;&lt; Remove Ref Line( number )

**说明:** 删除指定的参考线。

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );biv = Bivariate( Y( :weight ), X( :height ), FitLine );rbiv = biv << report;axisbox = rbiv[axis box( 1 )];axisbox << Add Ref Line( 90, "Dashed", blue );axisbox << Remove Ref Line( 90 );

```

### Reversed Scale

**语法:** obj &lt;&lt; Reversed Scale

**说明:** 反转正常尺度方向，使得最高值位于左侧或底部。

```jsl

Open( "$sample_data/big class.jmp" );gb = Graph Builder(	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gbr = Report( gb );gbr[axisbox( 1 )] << Reversed Scale( 1 );

```

### Revert Axis

**语法:** obj &lt;&lt; Revert Axis

**说明:** 恢复坐标轴的原始设置（创建时）。

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );biv = Bivariate( Y( :weight ), X( :height ), FitLine );rbiv = biv << report;axisbox = rbiv[axis box( 1 )];axisbox << Max( 120 );axisbox << Revert Axis;

```

### Revert Scale

**语法:** obj &lt;&lt; Revert Scale

**说明:** 恢复轴的尺度但不更改其他定制设置

**JMP添加的版本:** 16

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );biv = Bivariate( Y( :weight ), X( :height ), FitLine );rbiv = biv << report;axisbox = rbiv[axis box( 1 )];axisbox << Max( 120 );axisbox << Revert Scale;

```

### Save To Column Property

**语法:** obj &lt;&lt; Save To Column Property

**说明:** 将轴设置作为轴属性保存在与该轴相关联的数据列中。

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );biv = Bivariate( Y( :weight ), X( :height ), FitLine );rbiv = biv << report;axisbox = rbiv[axis box( 1 )];axisbox << Save To Column Property();

```

### Scale

**语法:** obj &lt;&lt; Scale( "线性"|"对数"|"指数概率"|"Weibull 概率"|"Logistic 概率"|"Frechet 概率"|"正态概率"|"立方根"|"Johnson Su"|"测地线"|"测地线 US"|"乘方"|"Gamma 概率"|"Beta 概率"|"2 个正态混合概率"|"3 个正态混合概率"|"定制尺度" )

**说明:** 指定要应用于坐标轴的尺度类型。若类型为“定制尺度”，则该消息需要两个附加子句；请参见“调整至内部”和“调整至外部”。

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );biv = Bivariate( Y( :weight ), X( :height ), FitLine );rbiv = biv << report;axisbox = rbiv[axis box( 1 )];axisbox << Scale( "Log" );

```

### Scale ID

**语法:** obj &lt;&lt; Scale ID( number )

**说明:** 将特定的 ID 添加至轴供多个轴一起使用。

**JMP添加的版本:** 16

```jsl

gbox = Graph Box(	Frame Size( 300, 300 ),	X Axis( Scale ID( 1 ), Side( 1 ), Min( 1 ), Max( 100 ), Inc( 5 ) ),	X Axis( Scale ID( 2 ), Side( 2 ), Min( 4 ), Max( 50 ), Inc( 3 ) ),	X Axis( Min( 8 ), Max( 700 ) ), //assigned scale ID 3	X Axis( Scale ID( 7 ), Side( 2 ), Min( -100 ), Max( 200 ) ),	Y Axis( Min( 1 ), Max( 100 ) ), //assigned scale ID 4	Y Axis( Side( 2 ), Min( 1 ), Max( 10 ), Inc( 1 ) ), //assigned scale ID 5	Y Axis( Scale ID( 6 ), Min( -100 ), Max( 200 ) ));gbox << Set Y Name( "Test", 5 ); //set y name of axis with ID 5fbox = gbox[frame box( 1 )];fbox << Add Graphics Script(	Scale IDs( 1, 5 ), //use scale ID's 1 and 5 for this graphics script	Pen Color( "Purple" );	Line( [20 50 80], [4 3 6] ););New Window( "Example", gbox );

```

### Scale To External

**语法:** obj &lt;&lt; Scale To External

**说明:** 根据给定的定制公式设置外部坐标系统尺度。

```jsl

Open( "$sample_data/big class.jmp" );gb = Graph Builder(	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 2 ) ), Smoother( X, Y, Legend( 1 ) ) ));gbr = Report( gb );gbr[axisbox( 1 )] << scale(	custom scale,	Scale To Internal( Function( {x}, If( x > 0, Log( x, 2 ), . ) ) ),	Scale To External( Function( {x}, Power( 2, x ) ) )) << Min( 32 ) << Max( 100 );

```

### Scale To Internal

**语法:** obj &lt;&lt; Scale To Internal

**说明:** 根据给定的定制公式设置内部坐标系统尺度。

```jsl

Open( "$sample_data/big class.jmp" );gb = Graph Builder(	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 2 ) ), Smoother( X, Y, Legend( 1 ) ) ));gbr = Report( gb );gbr[axisbox( 1 )] << scale(	custom scale,	Scale To Internal( Function( {x}, If( x > 0, Log( x, 2 ), . ) ) ),	Scale To External( Function( {x}, Power( 2, x ) ) )) << Min( 32 ) << Max( 100 );

```

### Set Width

**语法:** obj &lt;&lt; Set Width( number )

**说明:** 设置坐标轴的宽度。

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );biv = Bivariate( Y( :weight ), X( :height ), FitLine );rbiv = biv << report;axisbox = rbiv[axis box( 1 )];axisbox << SetWidth( 100 );

```

### Show Labels

**语法:** obj &lt;&lt; Show Labels( state=0|1 )

**说明:** 显示 (1) 或隐藏 (0) 主刻度标的轴标签。 默认开启。

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );biv = Bivariate( Y( :weight ), X( :height ), FitLine );rbiv = biv << report;axisbox = rbiv[axis box( 1 )];axisbox << Show Major Labels( 0 );

```

### Show Major Grid

**语法:** obj &lt;&lt; Show Major Grid( state=0|1 )

**说明:** 显示 (1) 或隐藏 (0) 与数值标签位于同一位置的网格。

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );biv = Bivariate( Y( :weight ), X( :height ), FitLine );rbiv = biv << report;axisbox = rbiv[axis box( 1 )];axisbox << Show Major Grid( 1 );

```

### Show Major Labels

**语法:** obj &lt;&lt; Show Major Labels( state=0|1 )

**说明:** 显示 (1) 或隐藏 (0) 主刻度标的轴标签。 默认开启。

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );biv = Bivariate( Y( :weight ), X( :height ), FitLine );rbiv = biv << report;axisbox = rbiv[axis box( 1 )];axisbox << Show Major Labels( 0 );

```

### Show Major Ticks

**语法:** obj &lt;&lt; Show Major Ticks( state=0|1 )

**说明:** 显示 (1) 或隐藏 (0) 与数值标签位于同一位置的刻度标。 默认开启。

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );biv = Bivariate( Y( :weight ), X( :height ), FitLine );rbiv = biv << report;axisbox = rbiv[axis box( 1 )];axisbox << Show Major Ticks( 0 );

```

### Show Minor Grid

**语法:** obj &lt;&lt; Show Minor Grid( state=0|1 )

**说明:** 显示 (1) 或隐藏 (0) 位于数值标签之间的网格。

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );biv = Bivariate( Y( :weight ), X( :height ), FitLine );rbiv = biv << report;axisbox = rbiv[axis box( 2 )];axisbox << Show Minor Grid( 1 );

```

### Show Minor Labels

**语法:** obj &lt;&lt; Show Minor Labels( state=0|1 )

**说明:** 显示 (1) 或隐藏 (0) 副刻度标的轴标签。

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );biv = Bivariate( Y( :weight ), X( :height ), FitLine );rbiv = biv << report;axisbox = rbiv[axis box( 1 )];axisbox << Show Minor Labels( 1 );

```

### Show Minor Ticks

**语法:** obj &lt;&lt; Show Minor Ticks( state=0|1 )

**说明:** 显示 (1) 或隐藏 (0) 位于数值标签之间的刻度标。 默认开启。

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );biv = Bivariate( Y( :weight ), X( :height ), FitLine );rbiv = biv << report;axisbox = rbiv[axis box( 2 )];axisbox << Show Minor Ticks( 1 );

```

### Side

**语法:** &lt;X / Y&gt; Axis( Side ( &lt;1/2&gt; ) )

**说明:** 更改轴的侧轴（主要 (1) 或次要 (2)）

**JMP添加的版本:** 16

```jsl

gbox = Graph Box(	Frame Size( 300, 300 ),	X Axis( Scale ID( 1 ), Side( 1 ), Min( 1 ), Max( 100 ), Inc( 5 ) ),	X Axis( Scale ID( 2 ), Side( 2 ), Min( 4 ), Max( 50 ), Inc( 3 ) ),	X Axis( Min( 8 ), Max( 700 ) ), //assigned scale ID 3	X Axis( Scale ID( 7 ), Side( 2 ), Min( -100 ), Max( 200 ) ),	Y Axis( Min( 1 ), Max( 100 ) ), //assigned scale ID 4	Y Axis( Side( 2 ), Min( 1 ), Max( 10 ), Inc( 1 ) ), //assigned scale ID 5	Y Axis( Scale ID( 6 ), Min( -100 ), Max( 200 ) ));New Window( "Example", gbox );

```

### Tick Font

**语法:** obj &lt;&lt; Tick Font

**说明:** 设置刻度标字体。

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );biv = Bivariate( Y( :weight ), X( :height ), FitLine );rbiv = biv << report;axisbox = rbiv[axis box( 1 )];axisbox << Tick Font( "Arial", 14, "Italic Underline" );

```

### Tick Label List

**语法:** obj &lt;&lt; Tick Label List

**说明:** 设置轴刻度标签的值和位置

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );biv = Bivariate( Y( :weight ), X( :height ), FitLine );rbiv = biv << report;axisbox = rbiv[axis box( 1 )];axisbox << {Min( 0 ), Max( 5 ), Inc( 1 )};axisbox << Tick Label List( {"sqrt2", "sqrt3", "e", "pi"}, {1.41, 1.73, 2.72, 3.14} );

```

### Update Ref Line

**语法:** obj &lt;&lt; Update Ref Line( ID, index, value, &lt;"Solid|Dashed|Double"&gt;, &lt;Color&gt;, &lt;"label"&gt;, &lt;line width&gt;, &lt;transparency&gt; )

**说明:** 修改现有参考线。

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );biv = Bivariate( Y( :weight ), X( :height ), FitLine );rbiv = biv << report;axisbox = rbiv[axis box( 1 )];axisbox << Add Ref Line( 108.3182, "Dashed", blue, "M mean", 2 );axisbox << Add Ref Line( 100.9444, "Dotted", red, "F mean", 2 );

```

