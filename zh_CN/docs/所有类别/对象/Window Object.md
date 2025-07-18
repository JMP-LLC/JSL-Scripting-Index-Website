# Window Object



## 共享项消息

### Bring Window To Front

**语法:** obj &lt;&lt; Bring Window To Front

**说明:** 将窗口移至最前面。

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << Run Script( "Bivariate" );
w << Bring Window To Front;

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

### Get Content Size

**语法:** obj &lt;&lt; Get Content Size

**说明:** 返回窗口中内容的大小。

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
c = w << Get Content Size();
Show( c );

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

### Get Page Setup

**语法:** obj &lt;&lt; Get Page Setup

**说明:** 获取 PDF 的页面设置信息

```jsl

//This message applies to all display box objects
w = New Window( "Window", Text Box( "Page Setup Test" ) );
w << get page setup();

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

### Get Web Support

**语法:** obj &lt;&lt; Get Web Support

**说明:** 返回一个数字，指示显示对象的交互式 HTML 支持的水平。1 表示支持部分或全部元素。0 表示不支持。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

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

### Print Window

**语法:** obj &lt;&lt; Print Window

**说明:** 打印窗口。

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << Print Window;

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

### Set Main Window

**语法:** obj &lt;&lt; Set Main Window

**说明:** 将窗口设置为 JMP 中的主窗口，并将之前的主窗口设置为常规窗口

```jsl

//This message applies to all display box objects
w = New Window( "Main Window", Text Box( "Main JMP Window" ) );
w << Set Main Window;

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

### Size Window

**语法:** obj &lt;&lt; Size Window( x,y )

**说明:** 设置窗口大小。

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << Size Window( 500, 500 );

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

## 项消息

### Set Window Title

**语法:** obj &lt;&lt; Set Window Title

**说明:** 设置窗口标题。

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << Set Window Title( "New Title" );

```

