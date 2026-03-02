# Window Object



## 共有されるメッセージ

### Bring Window To Front

**構文:** obj &lt;&lt; Bring Window To Front

**説明:** ウィンドウを最前面に移動する。

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << Run Script( "Bivariate" );
w << Bring Window To Front;

```

### Close Window

**構文:** obj &lt;&lt; Close Window( &lt;"NoSave"&gt; )

**説明:** ウィンドウを閉じる。

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
w << Close Window;

```

### Get Content Size

**構文:** obj &lt;&lt; Get Content Size

**説明:** ウィンドウ内のコンテンツのサイズを戻す。

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
c = w << Get Content Size();
Show( c );

```

### Get On Close

**構文:** obj &lt;&lt; Get On Close

**説明:** ウィンドウを閉じるときに実行されるスクリプトまたは関数を戻す。

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

**構文:** obj &lt;&lt; Get Page Setup

**説明:** PDFファイルのページ設定情報を取得する。

```jsl

//This message applies to all display box objects
w = New Window( "Window", Text Box( "Page Setup Test" ) );
w << get page setup();

```

### Get Project

**構文:** project = obj &lt;&lt; Get Project()

**説明:** ウィンドウの親プロジェクトを戻す。プロジェクトの中にない場合は、Empty()を戻す。

**JMP追加されたバージョン:** 14

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
c = w << Get Project();
Show( c );

```

### Get Show Window

**構文:** obj &lt;&lt; Get Show Window

**説明:** ウィンドウの表示/非表示を戻す。

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 1 );
w << Show Window( 0 );
Wait( 2 );
Print( w << Get Show Window() );

```

### Get Web Support

**構文:** obj &lt;&lt; Get Web Support

**説明:** ディスプレイオブジェクトにおけるインタラクティブHTMLサポートのレベルを数値で戻す。1は、一部または全部の要素がサポートされていることを示し、0は、サポートされないことを示す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

### Get Window Icon

**構文:** obj &lt;&lt; Get Window Icon

**説明:** ウィンドウのアイコンを戻す。

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
t = w << Get Window Icon;
Show( t );

```

### Get Window Position

**構文:** obj &lt;&lt; Get Window Position

**説明:** ウィンドウの位置を戻す。

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
p = w << Get Window Position();
Show( p );

```

### Get Window Size

**構文:** obj &lt;&lt; Get Window Size

**説明:** ウィンドウのサイズを戻す。

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
s = w << Get Window Size();
Show( s );

```

### Get Window Title

**構文:** obj &lt;&lt; Get Window Title

**説明:** ウィンドウのタイトルを戻す。

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
t = w << Get Window Title;
Show( t );

```

### Get Window View

**構文:** obj &lt;&lt; Get Window View

**説明:** 現在のウィンドウ表示を戻す。戻り値は"Visible"、"Invisible"、"Private"のいずれかになる。

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
Print( w << Get Window View() );

```

### Is Modal Dialog

**構文:** obj &lt;&lt; Is Modal Dialog

**説明:** ウィンドウがモーダルダイアログの場合、Trueを戻す。ウィンドウハンドラコールバックから呼び出される場合のみ有用。

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

**構文:** obj &lt;&lt; Maximize Window( &lt;state=0|1&gt; )

**説明:** ウィンドウを最大化する。デフォルトの引数は1。

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 1 );
w << Maximize Window( 1 );
Wait( 1 );
w << Maximize Window( 0 );

```

### Minimize Window

**構文:** obj &lt;&lt; Minimize Window( &lt;state=0|1&gt; )

**説明:** ウィンドウを最小化する。デフォルトの引数は1。

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 1 );
w << Minimize Window( 1 );
Wait( 1 );
w << Minimize Window( 0 );

```

### Move Window

**構文:** obj &lt;&lt; Move Window( x,y )

**説明:** ウィンドウを指定した位置に移動させる。

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
w << Move Window( 500, 500 );

```

### On Close

**構文:** obj &lt;&lt; On Close( script )

**説明:** ウィンドウを閉じる際に実行するスクリプトまたは関数を設定する。このスクリプトが1を戻すとウィンドウが閉じ、0を戻すとウィンドウは閉じない。

#### 閉じる際のスクリプト

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

#### 閉じる際の関数

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

### Optimize Display

**構文:** obj &lt;&lt; Optimize Display

**説明:** データテーブルの列の幅とウィンドウを最適なサイズに設定する。

**JMP追加されたバージョン:** 14

```jsl

//This message applies to Data Table objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Optimize Display;

```

### Pad Window

**構文:** obj &lt;&lt; Pad Window( bool )

**説明:** ウィンドウパディングのオン／オフを切り替える。

```jsl

//This message applies to all display box objects
Open( "$SAMPLE_DATA/Big Class.jmp" );
d = distribution( Column( :height ) );
r = d << report;
r << Pad Window( 0 );

```

### Print Window

**構文:** obj &lt;&lt; Print Window

**説明:** ウィンドウを印刷する。

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << Print Window;

```

### Save Window Report

**構文:** obj &lt;&lt; Save Window Report( pathname, &lt;embed data(0|1)&gt; )

**説明:** 現在のレポートウィンドウをJMPレポートファイル(.jrp)に保存する。

**JMP追加されたバージョン:** 16

```jsl

//This message can be sent to any display box object but will be applied to the report window
Open( "$SAMPLE_DATA/Big Class.jmp" );
d = distribution( Column( :height ) );
d << Save Window Report( "$DOCUMENTS/test.jrp", embed data( 1 ) );

```

### Set Content Size

**構文:** obj &lt;&lt; Set Content Size( x,y )

**説明:** ウィンドウ内のコンテンツのサイズを設定する。

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

**構文:** obj &lt;&lt; Set Main Window

**説明:** このウィンドウをJMPの主ウィンドウに設定し、以前の主ウィンドウを通常のウィンドウに設定する。

```jsl

//This message applies to all display box objects
w = New Window( "Main Window", Text Box( "Main JMP Window" ) );
w << Set Main Window;

```

### Set Page Setup

**構文:** obj &lt;&lt; Set Page Setup( &lt;margins(left, top, right, bottom)&gt;, &lt;scale(s)&gt;, &lt;portrait(0|1)&gt;, &lt;paper size(p)&gt;, &lt;Table of Contents(always, never, default)&gt; )

**説明:** 印刷する際、またはPDFとして保存する際に必要なページ設定情報を指定する。アウトラインボックスから生成される目次はオプション。

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

**構文:** obj &lt;&lt; Set Print Footers( left footer, center footer, right header )

**説明:** 印刷時の左、中央、右のフッタを設定する。

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

**構文:** obj &lt;&lt; Set Print Headers( left header, center header, right header )

**説明:** 印刷時の左、中央、右のヘッダを設定する。

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

**構文:** obj &lt;&lt; Set Window Icon( icon name )

**説明:** ウィンドウのアイコンを設定する。

```jsl

//This message applies to all display box objects
w = New Window( "Example", ex = Button Box( "New Analysis" ) );
w << Set Window Icon( "Scatter3D" );

```

### Set Window Size

**構文:** obj &lt;&lt; Set Window Size( x,y )

**説明:** ウィンドウのサイズを設定する。

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << Set Window Size( 800, 1200 );

```

### Show Window

**構文:** obj &lt;&lt; Show Window( state=0|1 )

**説明:** ウィンドウの表示/非表示を切り替える。これはウィンドウを一時的に隠すのに便利。 デフォルトではオン。

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 1 );
w << Show Window( 0 );
Wait( 2 );
w << Show Window( 1 );

```

### Size Window

**構文:** obj &lt;&lt; Size Window( x,y )

**説明:** ウィンドウのサイズを設定する。

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << Size Window( 500, 500 );

```

### Zoom Window

**構文:** obj &lt;&lt; Zoom Window

**説明:** 内容がすべて表示されるようにウィンドウのサイズを変更する。

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << Set Window Size( 80, 120 );
Wait( 2 );
w << Zoom Window;

```

## 項目のメッセージ

### Set Window Title

**構文:** obj &lt;&lt; Set Window Title

**説明:** ウィンドウのタイトルを設定する。

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << Set Window Title( "New Title" );

```

