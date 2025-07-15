# MouseBox



## 共有されるメッセージ

### Add Line Annotation

**構文:** obj &lt;&lt; Add Line Annotation

**説明:** ディスプレイボックスに線を追加する。

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Add Line Annotation( Line( 160, 235, 240, 235 ) );

```

### Add Pin Annotation

**構文:** obj &lt;&lt; Add Pin Annotation

**説明:** ディスプレイボックスに、ピン留めされたツールヒントを追加する。ほとんどの属性(Index Row、UniqueID、FoundPtなど)は、内部使用のために実装されている。

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

**構文:** obj &lt;&lt; Add Polygon Annotation

**説明:** ディスプレイボックスに多角形を追加する。

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

**構文:** obj &lt;&lt; Add Simple Shape Annotation

**説明:** ディスプレイボックスに基本図形を追加する。

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

**構文:** obj &lt;&lt; Add Text Annotation

**説明:** ディスプレイボックスにテキストを追加する。

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

**構文:** obj &lt;&lt; Append( db2 )

**説明:** dbの後の表示ツリーにdb2を追加する。

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << append( Text Box( "=== below ===" ) );

```

### Background Color

**構文:** obj &lt;&lt; Background Color( color );color = obj &lt;&lt; Get Background Color

**説明:** 背景色が指定されている場合、ボックスは中身が描画される前に背景色で塗りつぶされる。背景色が指定されていない場合、中に含まれているボックスの背景と中身が透けて表示される。

**JMP追加されたバージョン:** 15

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

**構文:** obj &lt;&lt; Border( sides );sides = obj &lt;&lt; Get Border

**説明:** 境界線はディスプレイボックスの外側を囲む実線。値を1つだけ指定した場合は、それがすべての辺に適用される。値を2つ指定した場合、それぞれ横と縦の境界線に適用される。

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

**構文:** obj &lt;&lt; Border Color( color );color = obj &lt;&lt; Get Border Color

**説明:** ボックスの境界線の色をデフォルトのものから変更する。

**JMP追加されたバージョン:** 19

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

**構文:** obj &lt;&lt; Bring Window To Front

**説明:** ウィンドウを最前面に移動する。

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << Run Script( "Bivariate" );
w << Bring Window To Front;

```

### Child

**構文:** obj &lt;&lt; Child

**説明:** ディスプレイボックスの子を戻す。

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

**構文:** obj &lt;&lt; Class Name

**説明:** ディスプレイボックスのクラス名を戻す。

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

**構文:** obj &lt;&lt; Clone Box

**説明:** ディスプレイボックスのコピーを作成する。

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

**構文:** obj &lt;&lt; Close Window( &lt;"NoSave"&gt; )

**説明:** ウィンドウを閉じる。

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
w << Close Window;

```

### Copy Data

**構文:** obj &lt;&lt; Copy Data

**説明:** 行列またはテーブルから、タブ区切りのデータをクリップボードにコピーする。

```jsl

Names Default To Here( 1 );
New Window( "x", mat = Matrix Box( [1 2 3, 4 5 6, 7 8 9] ) );
mat << CopyData;

```

### Copy Graph

**構文:** obj &lt;&lt; Copy Graph

**説明:** クリップボードにグラフと軸のイメージをコピーする。

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

**構文:** obj &lt;&lt; Copy Picture

**説明:** クリップボードにディスプレイボックスのイメージをコピーする。

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Copy Picture();

```

### Delete Box

**構文:** obj &lt;&lt; Delete Box

**説明:** ディスプレイボックスを削除する。

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

**構文:** obj &lt;&lt; Deselect

**説明:** オブジェクトの選択を取り消し、[編集]メニューのコマンドの適用対象から外す。

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

**構文:** obj &lt;&lt; Dispatch( {outline node, ...}, display element, display element type, command )

**説明:** ディスプレイツリーの特定の部分にcommandを送る。

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Dispatch( {}, "Bivar Plot", FrameBox, {Marker Size( 3 )} );

```

### Enabled

**構文:** obj &lt;&lt; Enabled( state=0|1 );state = obj &lt;&lt; Get Enabled

**説明:** 有効にされていないオブジェクトはキーボードまたはマウスによる入力に反応しない。このプロパティは子オブジェクトにも継承されるため、コンテナオブジェクトが無効になっていると、その下位のオブジェクトがすべて無効になる。

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

**構文:** obj &lt;&lt; Find

**説明:** argumentで指定されたディスプレイボックスを戻す。

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

**構文:** obj &lt;&lt; Get Annotation

**説明:** このディスプレイボックスにアンカーを付けられた最初の注釈を戻す。その結果にSib()を使うと、その他の注釈にもアクセスできる。

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

**構文:** obj &lt;&lt; Background Color( color );color = obj &lt;&lt; Get Background Color

**説明:** 背景色が指定されている場合、ボックスは中身が描画される前に背景色で塗りつぶされる。背景色が指定されていない場合、中に含まれているボックスの背景と中身が透けて表示される。

**JMP追加されたバージョン:** 15

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

**構文:** obj &lt;&lt; Border( sides );sides = obj &lt;&lt; Get Border

**説明:** 境界線はディスプレイボックスの外側を囲む実線。値を1つだけ指定した場合は、それがすべての辺に適用される。値を2つ指定した場合、それぞれ横と縦の境界線に適用される。

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

**構文:** obj &lt;&lt; Border Color( color );color = obj &lt;&lt; Get Border Color

**説明:** ボックスの境界線の色をデフォルトのものから変更する。

**JMP追加されたバージョン:** 19

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

**構文:** obj &lt;&lt; Get Content Size

**説明:** ウィンドウ内のコンテンツのサイズを戻す。

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
c = w << Get Content Size();
Show( c );

```

### Get Display Path

**構文:** obj &lt;&lt; Get Display Path( parent box, &lt;receiver expr&gt;, &lt;Mode("XPath"|"Subscript")&gt; )

**説明:** parent boxとobjの間をナビゲートするための比較的ロバストな式を取得する。このパスは、JMPのどのリリースでも同様であることが保証されているものではない。receiver exprが与えられている場合、その式は出力の式に組み込まれる。そうでない場合は、parent boxに与えられた式が代わりに使用される。このメッセージは、すでに利用可能なパスのロバスト性を高めるために主に利用される(例を参照)。デフォルトはXPathモード。

**サブスクリプトモード**

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

**構文:** obj &lt;&lt; Enabled( state=0|1 );state = obj &lt;&lt; Get Enabled

**説明:** 有効にされていないオブジェクトはキーボードまたはマウスによる入力に反応しない。このプロパティは子オブジェクトにも継承されるため、コンテナオブジェクトが無効になっていると、その下位のオブジェクトがすべて無効になる。

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

**構文:** obj &lt;&lt; Get HTML( &lt;format&gt; )

**説明:** ディスプレイボックスに含まれている文字列をHTMLソースとして戻す。

**例 1**

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
win = New Window( "Example", a = Text Box( "Example Text" ) );
a << Set Text( win << Get HTML );

```

**例 2**

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), Means( 1 ), Mean Diamonds( 1 ) );
Save Text File( "$TEMP/Oneway.html", obj << Get HTML( "svg" ) ); // Prefer <<Save HTML
Web( "$TEMP/Oneway.html", JMPWindow );

```

### Get Height

**構文:** width = obj &lt;&lt; Get Height

**説明:** ディスプレイボックスの高さを戻す。

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

**構文:** obj &lt;&lt; Horizontal Alignment( "Default"|"Left"|"Center"|"Right" );"Default"|"Left"|"Center"|"Right" = obj &lt;&lt; Get Horizontal Alignment

**説明:** ボックスがコンテナ全体を埋めていない場合、ボックスの横方向の配置を指定する。

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

**構文:** obj &lt;&lt; Get Journal

**説明:** ディスプレイボックスに含まれている文字列をジャーナルソースとして戻す。

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
Print( rbiv << Get Journal );

```

### Get Margin

**構文:** obj &lt;&lt; Margin( sides );sides = obj &lt;&lt; Get Margin

**説明:** ボックスとそれに隣接するボックスとの境界にスペースを追加する。名前付きの引数を使うか、値のリストを指定すること。値を1つだけ指定した場合は、それがすべての辺に適用される。値を2つ指定した場合、それぞれ横と縦の余白に適用される。

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

**構文:** width,height = obj &lt;&lt; Get Max Size

**説明:** このディスプレイボックスの自動伸縮の最大サイズを戻す。

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

**構文:** width,height = obj &lt;&lt; Get Min Size

**説明:** このディスプレイボックスの自動伸縮の最小サイズを戻す。

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

**構文:** obj &lt;&lt; Get Namespace

**説明:** この表示オブジェクトの名前空間を戻す。

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

**構文:** obj &lt;&lt; Get On Close

**説明:** ウィンドウを閉じるときに実行されるスクリプトまたは関数を戻す。

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

**構文:** obj &lt;&lt; Padding( sides );sides = obj &lt;&lt; Get Padding

**説明:** ボックスの中身と境界線の間に空白を追加する。名前付きの引数を使うか、値のリストを指定すること。値を1つだけ指定した場合は、それがすべての辺に適用される。値を2つ指定した場合、それぞれ横と縦のパディングに適用される。

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

**構文:** obj &lt;&lt; Get Page Setup

**説明:** PDFファイルのページ設定情報を取得する。

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = New Window( "Window", Text Box( "Page Setup Test" ) );
w << get page setup();

```

### Get Picture

**構文:** obj &lt;&lt; Get Picture( &lt;Scale(factor)&gt;, &lt;Type("Bitmap" | "Scalable")&gt;, &lt;View("Picture" | "Screen" | "Print"), &lt;Appearance("Default" | "Current")&gt;, &lt;SubRect(Left(number), Top(number), Right(number), Bottom(number))&gt; )

**説明:** dbをイメージオブジェクトとしてキャプチャする。オプションのScale引数は、スケーリングされた解像度でイメージをレンダリングする。スケーリングするには、ディスプレイボックスが伸縮可能でなければならない。Type引数は、結果をスケーラブルなベクターイメージにするか、ビットマップにするかを指定する。デフォルトでは、PDFのようなベクター形式での保存に適したスケーラブルなイメージが戻される。Viewオプションでは、いくつかのボックスの動作が変更される。デフォルトのオプションである"Picture"は、イメージ形式に書き出すときと同様にレポートを描画し、スクロールしないと見えない領域もすべて含まれる。 "Screen"は、スクリーン上で表示されるときと同様にレポートを描画し、"Print"は、ページ設定機能を使わずに、印刷するときと同じようにレポートを描画する。SubRectオプションは、生成された画像全体ではなく、一部をキャプチャする。Appearanceオプションでは、"Default"の出力の色を、画面上に表示される"Current"の色に変更することができる。View、SubRect、およびAppearanceオプションは、Typeの"Bitmap"でのみサポートされている。

**Scale**

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv[FrameBox( 1 )] << Set Stretch( "Window", "Window" );
New Window( "Example", rbiv << Get Picture( Scale( 1.5 ) ) );

```

**ViewとAppearance**

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

**デフォルト**

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
New Window( "Example", rbiv << Get Picture );

```

### Get Project

**構文:** project = obj &lt;&lt; Get Project()

**説明:** ウィンドウの親プロジェクトを戻す。プロジェクトの中にない場合は、Empty()を戻す。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
c = w << Get Project();
Show( c );

```

### Get Properties

**構文:** obj &lt;&lt; Get Properties

**説明:** ディスプレイボックスのプロパティとその値を含む連想配列を戻す。

```jsl

Names Default To Here( 1 );
New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Get Properties;

```

### Get Property

**構文:** obj &lt;&lt; Get Property( "property" )

**説明:** propertyで指定したプロパティの現在の設定を戻す。

```jsl

Names Default To Here( 1 );
New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Get Property( "Enabled" );

```

### Get Property List

**構文:** obj &lt;&lt; Get Property List

**説明:** ディスプレイボックスの持つプロパティのリストを戻す。

```jsl

Names Default To Here( 1 );
New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Get Property List;

```

### Get RTF

**構文:** obj &lt;&lt; Get RTF( &lt;format&gt; )

**説明:** ディスプレイボックスに含まれている文字列をRTFソースとして戻す。

**例 1**

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
win = New Window( "Example", a = Text Box( "Example Text" ) );
a << Set Text( win << Get RTF );

```

**例 2**

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), Means( 1 ), Mean Diamonds( 1 ) );
Save Text File( "$TEMP/Oneway.rtf", obj << Get RTF( "png" ) ); // Prefer <<Save RTF
Open( "$TEMP/Oneway.rtf" );

```

### Get Row States

**構文:** rs = obj &lt;&lt; Get Row States( &lt;dt&gt; )

**説明:** 指定したデータテーブルまたは現在のデータテーブルの各行の行属性を含むベクトルを戻す。行の属性は、テーブルから取得することも、ボックスのフィルタコンテキストから取得することもできる。

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

**構文:** obj &lt;&lt; Get Show Window

**説明:** ウィンドウの表示/非表示を戻す。

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

**構文:** width,height = obj &lt;&lt; Get Size

**説明:** ディスプレイボックスのサイズを戻す。

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

**構文:** x,y = obj &lt;&lt; Get Stretch

**説明:** このディスプレイボックスの横方向と縦方向の伸縮フラグを戻す。

**JMP追加されたバージョン:** 16

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

**構文:** obj &lt;&lt; Get Text

**説明:** ディスプレイボックスに含まれている文字列をテキストとして戻す。

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
win = New Window( "Example", a = Text Box( "Example Text" ) );
a << Set Text( win << Get Text );

```

### Get Text Color

**構文:** obj &lt;&lt; Text Color( color );color = obj &lt;&lt; Get Text Color

**説明:** テキストの色が指定された場合、テキストはその色で描画される。指定されていない場合、ボックスは内包しているボックスのテキストの色を継承する。

**JMP追加されたバージョン:** 15

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

**構文:** obj &lt;&lt; UI Only( state=0|1 );state = obj &lt;&lt; Get UI Only

### Get Vertical Alignment

**構文:** obj &lt;&lt; Vertical Alignment( "Default"|"Top"|"Center"|"Bottom" );"Default"|"Top"|"Center"|"Bottom" = obj &lt;&lt; Get Vertical Alignment

**説明:** ボックスがコンテナ全体を埋めていない場合、ボックスの縦方向の配置を指定する。

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

**構文:** obj &lt;&lt; Visibility( "Visible"|"Hidden"|"Collapse" );"Visible"|"Hidden"|"Collapse" = obj &lt;&lt; Get Visibility

**説明:** ボックスを表示するかどうか、ボックスのスペースを表示するかどうかを指定する。デフォルト値の"Visible"では、オブジェクトが表示される。"Hidden"のボックスは表示されないが、空白のスペースは表示される。一方、"Collapsed"のボックスはレイアウト内のスペースも表示されない。

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

**構文:** obj &lt;&lt; Get Web Support

**説明:** ディスプレイオブジェクトにおけるインタラクティブHTMLサポートのレベルを数値で戻す。1は、一部または全部の要素がサポートされていることを示し、0は、サポートされないことを示す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

### Get Width

**構文:** width = obj &lt;&lt; Get Width

**説明:** ディスプレイボックスの幅を戻す。

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

**構文:** obj &lt;&lt; Get Window Icon

**説明:** ウィンドウのアイコンを戻す。

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
t = w << Get Window Icon;
Show( t );

```

### Get Window Position

**構文:** obj &lt;&lt; Get Window Position

**説明:** ウィンドウの位置を戻す。

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
p = w << Get Window Position();
Show( p );

```

### Get Window Size

**構文:** obj &lt;&lt; Get Window Size

**説明:** ウィンドウのサイズを戻す。

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
s = w << Get Window Size();
Show( s );

```

### Get Window Title

**構文:** obj &lt;&lt; Get Window Title

**説明:** ウィンドウのタイトルを戻す。

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
t = w << Get Window Title;
Show( t );

```

### Get Window View

**構文:** obj &lt;&lt; Get Window View

**説明:** 現在のウィンドウ表示を戻す。戻り値は"Visible"、"Invisible"、"Private"のいずれかになる。

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
Print( w << Get Window View() );

```

### Get XML

**構文:** obj &lt;&lt; Get XML( &lt;English(0|1)&gt;, &lt;NoData(0|1)&gt; )

**説明:** 表示ツリーの内容をXML形式で取得する。デフォルトでは、文字列はローカル言語で戻され、XMLには一部のボックスのデータ値が含まれる。Englishオプションを使うと、英語の文字列が戻される。表示ツリーでボックス内のデータ値が大量になる場合があるため、NoDataオプションを使ってそれらを省略できる。

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
win = New Window( "test", a = Text Box( "my test" ) );
a << set text( win << get xml );

```

### GetOffset

**構文:** x,y = obj &lt;&lt; GetOffset

**説明:** このディスプレイボックスの親ボックスに対するオフセットを戻す。いくつか上の親ボックスまでのオフセットを求めるには、ループの中で<<parentメッセージを使用する必要がある。

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

**構文:** obj &lt;&lt; Horizontal Alignment( "Default"|"Left"|"Center"|"Right" );"Default"|"Left"|"Center"|"Right" = obj &lt;&lt; Get Horizontal Alignment

**説明:** ボックスがコンテナ全体を埋めていない場合、ボックスの横方向の配置を指定する。

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

**構文:** obj &lt;&lt; Inval

**説明:** ディスプレイボックスを無効にする。ウィンドウの更新は、<<UpdateWindowメッセージが送られるか、または、オペレーティングシステムが更新するタイミングに行われる。

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

**構文:** obj &lt;&lt; Is Dirty

**説明:** ドキュメントの変更ステータスを取得する。1は、ドキュメントが変更されたことを意味し、保存するかどうか確認するメッセージを表示する。0は、ドキュメントが変更されていないことを意味する。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );

ww = New Window( "Test", <<Script, "Open(\!"$SAMPLE_DATA\Big Class.jmp\!");" );
Show( ww << Is Dirty );
ww << Set Dirty( 0 );
Show( ww << Is Dirty );

```

### Is Modal Dialog

**構文:** obj &lt;&lt; Is Modal Dialog

**説明:** ウィンドウがモーダルダイアログの場合、Trueを戻す。ウィンドウハンドラコールバックから呼び出される場合のみ有用。

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

**構文:** obj &lt;&lt; Journal

**説明:** ディスプレイボックスからジャーナルを作成する。

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << journal;

```

### Journal Window

**構文:** obj &lt;&lt; Journal Window

**説明:** そのウィンドウのジャーナルウィンドウを開く。

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = New Window( "Main Window", Text Box( "Main JMP Window" ) );
w << Journal Window;

```

### Launch

**構文:** obj &lt;&lt; Launch

**説明:** ディスプレイボックスのコンテキスト内でargumentを評価する。

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

**構文:** rs = obj &lt;&lt; Make RowState Handler( &lt;dt&gt;, function(a) )

**説明:** 指定したデータテーブルまたは現在のデータテーブルに対して、行属性ハンドラを作成する。この関数は、ボックスのフィルタコンテキスト内で行の属性が変わると呼び出される。関数の引数に、変更された行の番号が格納されるが、行属性のフィルタが変更された場合は、-1が格納される。

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

**構文:** obj &lt;&lt; Margin( sides );sides = obj &lt;&lt; Get Margin

**説明:** ボックスとそれに隣接するボックスとの境界にスペースを追加する。名前付きの引数を使うか、値のリストを指定すること。値を1つだけ指定した場合は、それがすべての辺に適用される。値を2つ指定した場合、それぞれ横と縦の余白に適用される。

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

**構文:** obj &lt;&lt; Maximize Window( &lt;state=0|1&gt; )

**説明:** ウィンドウを最大化する。デフォルトの引数は1。

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

**構文:** obj &lt;&lt; Minimize Window( &lt;state=0|1&gt; )

**説明:** ウィンドウを最小化する。デフォルトの引数は1。

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

**構文:** obj &lt;&lt; Move Window( x,y )

**説明:** ウィンドウを指定した位置に移動させる。

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
w << Move Window( 500, 500 );

```

### Next

**構文:** obj &lt;&lt; Next

**説明:** ディスプレイボックスの後のディスプレイボックスを戻す。

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

**構文:** obj &lt;&lt; On Close( script )

**説明:** ウィンドウを閉じる際に実行するスクリプトまたは関数を設定する。このスクリプトが1を戻すとウィンドウが閉じ、0を戻すとウィンドウは閉じない。

**閉じる際のスクリプト**

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

**閉じる際の関数**

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

### Optimize Display

**構文:** obj &lt;&lt; Optimize Display

**説明:** データテーブルの列の幅とウィンドウを最適なサイズに設定する。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
//This message applies to Data Table objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Optimize Display;

```

### Pad Window

**構文:** obj &lt;&lt; Pad Window( bool )

**説明:** ウィンドウパディングのオン／オフを切り替える。

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
Open( "$SAMPLE_DATA/Big Class.jmp" );
d = distribution( Column( :height ) );
r = d << report;
r << Pad Window( 0 );

```

### Padding

**構文:** obj &lt;&lt; Padding( sides );sides = obj &lt;&lt; Get Padding

**説明:** ボックスの中身と境界線の間に空白を追加する。名前付きの引数を使うか、値のリストを指定すること。値を1つだけ指定した場合は、それがすべての辺に適用される。値を2つ指定した場合、それぞれ横と縦のパディングに適用される。

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

**構文:** obj &lt;&lt; Page Break

**説明:** ディスプレイボックスの前にページ区切りを挿入する。

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

**構文:** obj &lt;&lt; Parent

**説明:** ディスプレイボックスの親を戻す。

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

**構文:** obj &lt;&lt; Prepend( db2 )

**説明:** dbの前の表示ツリーにdb2を追加する。

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << prepend( Text Box( "=== above ===" ) );

```

### Prev Sib

**構文:** obj &lt;&lt; Prev Sib

**説明:** ディスプレイボックスの前の兄弟(同レベルのもの)を戻す。

**JMP追加されたバージョン:** 15

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

**構文:** obj &lt;&lt; Print Window

**説明:** ウィンドウを印刷する。

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << Print Window;

```

### Reshow

**構文:** obj &lt;&lt; Reshow

**説明:** ディスプレイボックスをいったん無効にし、ウィンドウの内容を更新する。更新のタイミングを調整したい場合は、<<Invalおよび<<UpdateWindowメッセージを参照。

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

**構文:** obj &lt;&lt; Save Capture( &lt;"path"&gt;, &lt;format&gt;, &lt;Add Sibling(n)&gt; )

**説明:** ディスプレイボックスのスクリーンキャプチャーを指定のpathに保存する。pathが指定されていない場合は、[名前を付けて保存]ウィンドウが表示される。

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save Capture( "$TEMP/jmp_example.png", "png" );

```

### Save HTML

**構文:** obj &lt;&lt; Save HTML( &lt;pathname&gt;, &lt;format&gt; )

**説明:** HTMLソースおよびformatで指定された形式のグラフィックファイルのフォルダを保存する。

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save HTML( "$TEMP/jmp_example.html" );

```

### Save Interactive HTML

**構文:** obj &lt;&lt; Save Interactive HTML( &lt;pathname&gt;, &lt;Boolean&gt; )

**説明:** データを含むインタラクティブHTMLをファイルに保存する。Boolean引数は、レポートを静的なものにするという指定。

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save Interactive HTML( "$TEMP/jmp_example.html" );

```

### Save Journal

**構文:** obj &lt;&lt; Save Journal( &lt;pathname&gt; )

**説明:** ディスプレイボックスをジャーナルファイルとして保存する。

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save Journal( "$TEMP/jmp_example.jrn" );

```

### Save MSWord

**構文:** obj &lt;&lt; Save MSWord( &lt;pathname&gt;, &lt;format&gt; )

**説明:** ディスプレイボックスをMicrosoft Wordドキュメントとして保存する。(Windowsのみ)

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save MSWord( "$TEMP/jmp_example.doc" );

```

### Save PDF

**構文:** obj &lt;&lt; Save PDF( &lt;pathname&gt;, &lt;Show Page Setup(0|1)&gt;, &lt;Portrait(0|1)&gt; )

**説明:** ディスプレイボックスをPDFファイルとして保存する。

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save PDF( "$TEMP/jmp_example.pdf" );

```

### Save Picture

**構文:** obj &lt;&lt; Save Picture( &lt;pathname&gt;, &lt;format&gt;, &lt;Scale(factor)&gt;, &lt;Type("Bitmap" | "Scalable")&gt;, &lt;View("Picture" | "Screen" | "Print"), &lt;Appearance("Default" | "Current")&gt;, &lt;SubRect(Left(number), Top(number), Right(number), Bottom(number))&gt; )

**説明:** ディスプレイボックスのイメージを保存する。サポートされている形式は、EMF(Windows)、PICT(Macintosh)、JPEG、JPG、GIF、PNG。オプションのScale引数は、スケーリングされた解像度でイメージをレンダリングする。スケーリングするには、ディスプレイボックスが伸縮可能でなければならない。Type引数は、結果をスケーラブルなベクターイメージにするか、ビットマップにするかを指定する。デフォルトでは、PDFのようなベクター形式での保存に適したスケーラブルなイメージが戻される。Viewオプションでは、いくつかのボックスの動作が変更される。デフォルトのオプションである"Picture"は、イメージ形式に書き出すときと同様にレポートを描画し、スクロールしないと見えない領域もすべて含まれる。 "Screen"は、スクリーン上で表示されるときと同様にレポートを描画し、"Print"は、ページ設定機能を使わずに、印刷するときと同じようにレポートを描画する。SubRectオプションは、生成された画像全体ではなく、一部をキャプチャする。Appearanceオプションでは、"Default"の出力の色を、画面上に表示される"Current"の色に変更することができる。View、SubRect、およびAppearanceオプションは、Typeが"Bitmap"の場合のみサポートされている。

**Scale**

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

**ViewとAppearance**

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

**デフォルト**

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save Picture( "$TEMP/jmp_example.png", "png" );

```

### Save Presentation

**構文:** obj &lt;&lt; Save Presentation( "filename.pptx", &lt;Template("path\to\my_template.pptx")&gt;, &lt;Insert(Begin|End|#) | Replace(Begin|End|#) | Append&gt;, &lt;Outline Titles(None|Hide|TopLeft|TopRight|BottomLeft|BottomRight)&gt;, &lt;"EMF"|"PNG"|"JPG"|"Native"&gt; )

**説明:** プレゼンテーションにディスプレイボックスのテーブルとグラフを含むスライドを保存する。プレゼンテーションはMicrosoft PowerPointまたはその他のプレゼンテーションソフトウェアで開くことができる。

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save Presentation( "$TEMP/jmp_example.pptx" );
Open( "$TEMP/jmp_example.pptx" );

```

### Save RTF

**構文:** obj &lt;&lt; Save RTF( &lt;pathname&gt;, &lt;format&gt; )

**説明:** RTFソースとformatで指定された形式のグラフィックを保存する。

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save RTF( "$TEMP/jmp_example.rtf", "png" );

```

### Save Text

**構文:** obj &lt;&lt; Save Text( &lt;pathname&gt;, &lt;format&gt; )

**説明:** ディスプレイボックスのテキストを含むファイルを保存する。

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
win = New Window( "Example", a = Text Box( "Example Text" ) );
a << save text( "$TEMP/jmp_example.txt" );

```

### Save Window Report

**構文:** obj &lt;&lt; Save Window Report( pathname, &lt;embed data(0|1)&gt; )

**説明:** 現在のレポートウィンドウをJMPレポートファイル(.jrp)に保存する。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
//This message can be sent to any display box object but will be applied to the report window
Open( "$SAMPLE_DATA/Big Class.jmp" );
d = distribution( Column( :height ) );
d << Save Window Report( "$DOCUMENTS/test.jrp", embed data( 1 ) );

```

### Scroll Window

**構文:** obj &lt;&lt; Scroll Window( DisplayBox | &lt;Relative(&lt;v&gt; | &lt;h&gt;,&lt;v&gt;)&gt; | &lt;Absolute(&lt;v&gt; | &lt;h&gt;,&lt;v&gt;) )

**説明:** DisplayBoxが表示されるようにウィンドウのスクロールバーを調整するか、相対的なまたは絶対ピクセル数だけスクロールする。ピクセル数の代わりに、キーワード"Start"または"End"を使用できる。

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

**構文:** obj &lt;&lt; Select

**説明:** このオブジェクトを選択する。選択されたオブジェクトには、[編集]メニューのコマンドが適用できる。

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
New Window( "Example", ex = Button Box( "Press Me" ) );
ex << Select;

```

### Set Content Size

**構文:** obj &lt;&lt; Set Content Size( x,y )

**説明:** ウィンドウ内のコンテンツのサイズを設定する。

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

**構文:** obj &lt;&lt; Set Dirty

**説明:** ドキュメントの変更ステータスを設定する。0を設定すると保存するかどうか確認するメッセージを表示しないようになり、1を設定すると表示するようになる。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );

ww = New Window( "Test", <<Script, "Open(\!"$SAMPLE_DATA\Big Class.jmp\!");" );
Show( ww << Is Dirty );
ww << Set Dirty( 0 );
Show( ww << Is Dirty );

```

### Set Height

**構文:** obj &lt;&lt; Set Height( width )

**説明:** ディスプレイボックスの高さを設定する。

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

**構文:** obj &lt;&lt; Set Main Window

**説明:** このウィンドウをJMPの主ウィンドウに設定し、以前の主ウィンドウを通常のウィンドウに設定する。

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = New Window( "Main Window", Text Box( "Main JMP Window" ) );
w << Set Main Window;

```

### Set Max Size

**構文:** obj &lt;&lt; Set Max Size( width,height )

**説明:** このディスプレイボックスの自動伸縮の最大サイズを設定する。

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

**構文:** obj &lt;&lt; Set Min Size( width,height )

**説明:** このディスプレイボックスの自動伸縮の最小サイズを設定する。

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

**構文:** obj &lt;&lt; Set Page Setup( &lt;margins(left, top, right, bottom)&gt;, &lt;scale(s)&gt;, &lt;portrait(0|1)&gt;, &lt;paper size(p)&gt;, &lt;Table of Contents(always, never, default)&gt; )

**説明:** 印刷する際、またはPDFとして保存する際に必要なページ設定情報を指定する。アウトラインボックスから生成される目次はオプション。

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

**構文:** obj &lt;&lt; Set Print Footers( left footer, center footer, right header )

**説明:** 印刷時の左、中央、右のフッタを設定する。

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

**構文:** obj &lt;&lt; Set Print Headers( left header, center header, right header )

**説明:** 印刷時の左、中央、右のヘッダを設定する。

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

**構文:** obj &lt;&lt; Set Property( "property", value )

**説明:** ディスプレイボックスの、propertyで指定した名前のプロパティに値を設定する。

```jsl

Names Default To Here( 1 );
New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Set Property( "Enabled", 0 );

```

### Set Report Title

**構文:** obj &lt;&lt; Set Report Title( "string" )

**説明:** レポートのタイトルを変更する。

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Set Report Title( "New Title" );

```

### Set Stretch

**構文:** obj &lt;&lt; Set Stretch( x,y )

**説明:** ボックスの横方向と縦方向の伸縮動作を設定する。Windowを指定すると、ボックスのサイズはウィンドウまたはSplitterのサイズに応じて変わる。Fillを指定すると、コンテナいっぱいのサイズになる。Offを指定すると、ボックスは伸縮しない。ほとんどのボックスはデフォルトでNeutralに設定され、子ボックスに応じて動作が決まる。

**JMP追加されたバージョン:** 16

**ウィンドウとともに伸縮**

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

**伸縮して空きを埋める**

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

### Set Summary Behavior

**構文:** obj &lt;&lt; Set Summary Behavior( "Default"|"Visible"|"Collapse" )

**説明:** Sets the behavior of the box when a report is viewed in Summary mode.

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

**構文:** obj &lt;&lt; Set Width( width )

**説明:** ディスプレイボックスの幅を設定する。

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

**構文:** obj &lt;&lt; Set Window Icon( icon name )

**説明:** ウィンドウのアイコンを設定する。

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = New Window( "Example", ex = Button Box( "New Analysis" ) );
w << Set Window Icon( "Scatter3D" );

```

### Set Window Size

**構文:** obj &lt;&lt; Set Window Size( x,y )

**説明:** ウィンドウのサイズを設定する。

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << Set Window Size( 800, 1200 );

```

### Set Window Title

**構文:** obj &lt;&lt; Set Window Title( "string" )

**説明:** ウィンドウのタイトルを変更する。

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Set Window Title( "New Title" );

```

### Show Properties

**構文:** obj &lt;&lt; Show Properties

**説明:** ディスプレイボックスのプロパティエディタを表示する。

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Show Properties();

```

### Show Tree Structure

**構文:** obj &lt;&lt; Show Tree Structure

**説明:** ディスプレイボックスの階層型のツリー構造とその関連ノードを表示する。

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Show Tree Structure();

```

### Show Window

**構文:** obj &lt;&lt; Show Window( state=0|1 )

**説明:** ウィンドウの表示/非表示を切り替える。これはウィンドウを一時的に隠すのに便利。 デフォルトではオン。

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

**構文:** obj &lt;&lt; Sib

**説明:** ディスプレイボックスの兄弟(同レベルのもの)を戻す。

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

**構文:** obj &lt;&lt; Sib Append( Display box, Horizontal|Vertical )

**説明:** このディスプレイボックスのすぐ後にディスプレイボックスを1つ追加する。

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

**構文:** obj &lt;&lt; Sib Prepend( Display box, Horizontal|Vertical )

**説明:** このディスプレイボックスのすぐ前にディスプレイボックスを1つ追加する。

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

**構文:** obj &lt;&lt; Size Window( x,y )

**説明:** ウィンドウのサイズを設定する。

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << Size Window( 500, 500 );

```

### Text Color

**構文:** obj &lt;&lt; Text Color( color );color = obj &lt;&lt; Get Text Color

**説明:** テキストの色が指定された場合、テキストはその色で描画される。指定されていない場合、ボックスは内包しているボックスのテキストの色を継承する。

**JMP追加されたバージョン:** 15

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

**構文:** obj &lt;&lt; Top Parent

**説明:** ディスプレイボックスの最上層の親を戻す。

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

**構文:** obj &lt;&lt; UI Only( state=0|1 );state = obj &lt;&lt; Get UI Only

### Update Window

**構文:** obj &lt;&lt; Update Window

**説明:** 無効になった領域がある場合に、ディスプレイボックスを含むウィンドウを更新する。<<Invalメッセージが無効の領域を作成する。

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

### Vertical Alignment

**構文:** obj &lt;&lt; Vertical Alignment( "Default"|"Top"|"Center"|"Bottom" );"Default"|"Top"|"Center"|"Bottom" = obj &lt;&lt; Get Vertical Alignment

**説明:** ボックスがコンテナ全体を埋めていない場合、ボックスの縦方向の配置を指定する。

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

**構文:** obj &lt;&lt; Visibility( "Visible"|"Hidden"|"Collapse" );"Visible"|"Hidden"|"Collapse" = obj &lt;&lt; Get Visibility

**説明:** ボックスを表示するかどうか、ボックスのスペースを表示するかどうかを指定する。デフォルト値の"Visible"では、オブジェクトが表示される。"Hidden"のボックスは表示されないが、空白のスペースは表示される。一方、"Collapsed"のボックスはレイアウト内のスペースも表示されない。

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

**構文:** obj &lt;&lt; Window Class Name

**説明:** ディスプレイボックスのウィンドウクラス名を戻す。

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

**構文:** obj &lt;&lt; XPath( XPath expression, &lt;English(0|1)&gt;, &lt;NoData(0|1)&gt; )

**説明:** 表示ツリーのXML表現にXpath式を適用し、その結果を戻す。デフォルトでは、文字列はローカル言語で戻され、XMLには一部のボックスのデータ値が含まれる。Englishオプションを使うと、英語の文字列が戻される。NoDataオプションを使うと、ボックス内のデータ値を省略できるため、ボックスの属性を取得することが目的の場合にパフォーマンスを向上できる。

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

**構文:** obj &lt;&lt; Zoom Window

**説明:** 内容がすべて表示されるようにウィンドウのサイズを変更する。

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << Set Window Size( 80, 120 );
Wait( 2 );
w << Zoom Window;

```

## 関連するコンストラクター

### Mouse Box

**構文:** box = MouseBox( displayBoxArgs )

**説明:** マウス動作に対するコールバックを作成できるボックスを戻す。

```jsl

Names Default To Here( 1 );
New Window( "Example",
	MouseBox(/*first sibling*/Text Box( "drag from here" ),
		<<setDragText( "hello" ),
		<<setTooltip( "source" ),
		<<setDragEnable( 1 ),
		<<setDragBegin(/* decide if a drag is allowed */
			Function( {this, clickpt},
				"magic text";/* 0.0 to prevent the drag.  1.0 is the same as 'this<<getDragText' */
			)
		),
		<<setDragEnd(/* clean up after a drag finishes or cancels */
			Function( {this, clickpt, how}, /* how=move,copy,ignore */
				If(
					how != "ignore" & !Is Empty( this << getDestBox ) & this << getDestBox
					 == this << sib, /* the getDestBox check makes sure the destination of the drag-and-drop was my sibling and not some other program beyond our control */
					(this << child) << setText(
						"done!" /* 'move' suggests clearing the source */
					)
				)
			)
		)
	),
	MouseBox(/*second sibling*/Text Box( "drag to here" ),
		<<setTooltip( "destination" ),
		<<setDropEnable( 1 ),
		<<setDropTrack(/* decide if dropping is allowed, before the drop.  The getSourceBox check makes sure the source of the drag-and-drop is my sibling, and not some other program */
			Function( {this, clickpt},
				If( !Is Empty( this << getSourceBox ) & this == (this << getSourceBox) << sib,
					1, /*else*/0
				)
			)
		),
		<<setDropCommit(/* accept the drop */Function( {this, clickpt, text},
				(this << child) << setText( text )
			)
		)
	)
);

```

## 項目のメッセージ

### GetChildBox

**構文:** GetChildBox( { x, y } | [ x y ] | x, y )

**説明:** このマウスボックス内の指定の座標にある、ゼロ個以上の、入れ子になったディスプレイボックスのリスト: {child、grand-child、great-grand-child, …}を戻す。それぞれの子を個別のマウスボックスで囲んだ方が簡単な場合が多い。

```jsl

Names Default To Here( 1 );
New Window( "MouseBox",
	Text Box( "Move the mouse around" ),
	MouseBox(
		Lineup Box( N Col( 2 ), 
            /*pre-load the spacer boxes with a color, but make them transparent as well so the color won't show*/
			s1 = Spacer Box( size( 50, 50 ), <<Color( "red" ), <<SetFill( 0 ) ),
			s2 = Spacer Box( size( 50, 50 ), <<Color( "green" ), <<SetFill( 0 ) ),
			s3 = Spacer Box( size( 50, 50 ), <<Color( "blue" ), <<SetFill( 0 ) ),
			Lineup Box( N Col( 2 ), 
                /*demonstrate nested boxes*/
				s4 = Spacer Box( size( 24, 24 ), <<Color( "red" ), <<SetFill( 0 ) ),
				s5 = Spacer Box( size( 24, 24 ), <<Color( "green" ), <<SetFill( 0 ) ),
				s6 = Spacer Box( size( 24, 24 ), <<Color( "blue" ), <<SetFill( 0 ) ),
				s7 = Spacer Box( size( 24, 24 ), <<Color( "yellow" ), <<SetFill( 0 ) )
			)
		), 
        /*set up a callback function to track the mouse movements*/
		<<SetTrackEnable( 1 ),
		<<SetTrack(
			Function( {this, clickpt}, /*clickpt is really the move point*/
/*on each mouse move, make children transparent*/
				s1 << setfill( 0 );
				s2 << setfill( 0 );
				s3 << setfill( 0 );
				s4 << setfill( 0 );
				s5 << setfill( 0 );
				s6 << setfill( 0 );
				s7 << setfill( 0 );
                /*retrieve a list of boxes under the clickpt (which is a mouse coordinate within the mouse box like {10,20})*/
				childBoxList = this << GetChildBox( clickpt );
                /* child 1 is the LineupBox.  child 2, if present, is one of the Spacer Boxes */
				If(
					N Items( childBoxList ) > 0 & (childBoxList[N Items( childBoxList )]) <<
					className == "SpacerBox", 
                    /*if a SpacerBox is under the mouse, make it opaque*/
					childBoxList[N Items( childBoxList )] << SetFill( 1 )
				);
			)
		)
	)
);

```

### GetClick

**構文:** obj &lt;&lt; GetClick

**説明:** <<SetClickの関数を戻す。

```jsl

Names Default To Here( 1 );
mb = MouseBox();
mb << setClick( Function( {this, clickPt, event}, Print( 42 ) ) );
mb << getClick();

```

### GetClickEnable

**構文:** obj &lt;&lt; GetClickEnable

**説明:** SetClickEnableで指定された値を戻す。

```jsl

Names Default To Here( 1 );
mb = MouseBox();
mb << setClickEnable( 1 );
mb << getClickEnable();

```

### GetDefaultCursor

**構文:** obj &lt;&lt; GetDefaultCursor

**説明:** SetDefaultCursorで指定された値を取得する。

### GetDefaultCursorEnable

**構文:** obj &lt;&lt; GetDefaultCursorEnable

**説明:** SetDefaultCursorEnableで指定された値を取得する。

### GetDestBox

**構文:** obj &lt;&lt; GetDestBox

### GetDragBegin

**構文:** obj &lt;&lt; GetDragBegin

**説明:** <<SetDragBeginで指定された関数を戻す。

### GetDragEnable

**構文:** obj &lt;&lt; GetDragEnable

**説明:** MouseBoxが現在ドラッグ＆ドロップ操作を実行できるか否かを取得する。

```jsl

Names Default To Here( 1 );
mb = MouseBox();
mb << GetDragEnable;

```

### GetDragEnd

**構文:** obj &lt;&lt; GetDragEnd

**説明:** <<SetDragEndで指定された関数を戻す。

### GetDragText

**構文:** obj &lt;&lt; GetDragText

**説明:** 通常は不要。SetDragTextで指定されたテキストを戻す。これは、ドロップ先に送られるテキストではない可能性がある。

```jsl

Names Default To Here( 1 );
mb = MouseBox();
mb << setDragText( "1000 words" );
mb << getDragText;

```

### GetDropCommit

**構文:** obj &lt;&lt; GetDropCommit

**説明:** <<setDropCommitで設定された関数を戻す。

```jsl

Names Default To Here( 1 );
mb = MouseBox();
mb << setDropCommit( Function( {this, clickPt, text}, Print( 42 ) ) );
mb << getDropCommit();

```

### GetDropEnable

**構文:** obj &lt;&lt; GetDropEnable

**説明:** <<SetDropEnableによって設定された値を戻す。

```jsl

Names Default To Here( 1 );
mb = MouseBox();
mb << setDropEnable( 1 );
mb << getDropEnable();

```

### GetDropTrack

**構文:** obj &lt;&lt; GetDropTrack

**説明:** <<setDropTrackで設定された関数を戻す。

```jsl

Names Default To Here( 1 );
mb = MouseBox();
mb << setDropTrack( Function( {this, clickPt}, Print( 42 ) ) );
mb << getDropTrack();

```

### GetEdit

**構文:** obj &lt;&lt; GetEdit

### GetEditClear

**構文:** obj &lt;&lt; GetEditClear( state=0|1 )

### GetEditCopy

**構文:** obj &lt;&lt; GetEditCopy( state=0|1 )

### GetEditCopyLabel

**構文:** obj &lt;&lt; GetEditCopyLabel( state=0|1 )

### GetEditCopyText

**構文:** obj &lt;&lt; GetEditCopyText( state=0|1 )

### GetEditCut

**構文:** obj &lt;&lt; GetEditCut( state=0|1 )

### GetEditEnable

**構文:** obj &lt;&lt; GetEditEnable

### GetEditJournal

**構文:** obj &lt;&lt; GetEditJournal( state=0|1 )

### GetEditPaste

**構文:** obj &lt;&lt; GetEditPaste( state=0|1 )

### GetEditPasteJSL

**構文:** obj &lt;&lt; GetEditPasteJSL( state=0|1 )

### GetEditPasteLabel

**構文:** obj &lt;&lt; GetEditPasteLabel( state=0|1 )

### GetEditSaveSelectionAs

**構文:** obj &lt;&lt; GetEditSaveSelectionAs( state=0|1 )

### GetEditSubmit

**構文:** obj &lt;&lt; GetEditSubmit( state=0|1 )

### GetEditSubmitDebug

**構文:** obj &lt;&lt; GetEditSubmitDebug( state=0|1 )

### GetFocus

**構文:** obj &lt;&lt; GetFocus

### GetKey

**構文:** obj &lt;&lt; GetKey

**説明:** Set Keyによって設定された関数を戻す。

```jsl

Names Default To Here( 1 );
New Window( "SetKey Example", mb = MouseBox( tb = Text Box( "Press a key." ) ) );
mb << setkey(
	Function( {this, key},
		tb << settext( key );
		1;
	)
);
mb << setkeyenable( 1 );
mb << setfocus;
Show( mb << GetKey );

```

### GetKeyEnable

**構文:** obj &lt;&lt; GetKeyEnable

### GetMark

**構文:** obj &lt;&lt; GetMark

**説明:** <<SetMarkによって指定された値を取得する。

```jsl

Names Default To Here( 1 );
New Window( "Mouse Box", mb = MouseBox( Text Box( "Text" ) ) );
mb << setMarkEnable( 1 );
mb << setMark( Function( {this}, this << Set Marked( !(this << Get Marked) ) ) );
mb << GetMark;

```

### GetMarkEnable

**構文:** obj &lt;&lt; GetMarkEnable

**説明:** <<SetMarkEnableによって設定された値を取得する。

```jsl

Names Default To Here( 1 );
New Window( "Mouse Box", mb = MouseBox( Text Box( "Text" ) ) );
mb << setMarkEnable( 1 );
mb << getMarkEnable();

```

### GetMarked

**構文:** obj &lt;&lt; GetMarked

**説明:** 現在マークされているか否かのフラグを戻す。

```jsl

Names Default To Here( 1 );
New Window( "Mouse Box", mb = MouseBox( Text Box( "Text" ) ) );
mb << setMarkEnable( 1 );
mb << setMarked();
mb << getMarked();

```

### GetSourceBox

**構文:** obj &lt;&lt; GetSourceBox

### GetToolTip

**構文:** obj &lt;&lt; GetToolTip

**説明:** 通常は不要。SetTooltipで指定されたテキストを戻す。ツールヒントは自動的に表示されるのでこのメッセージは特に必要ではない。

```jsl

Names Default To Here( 1 );
mb = MouseBox();
mb << setTooltip( "this is your best choice" );
mb << getTooltip;

```

### GetTrack

**構文:** obj &lt;&lt; GetTrack

**説明:** <<SetTrackによって指定された値を取得する。

```jsl

Names Default To Here( 1 );
mb = MouseBox();
mb << setTrack(/*track the button-up mouse movement*/Function( {this, clickPt},
		Print( 42 )
	)
);
mb << getTrack();

```

### GetTrackEnable

**構文:** obj &lt;&lt; GetTrackEnable

**説明:** <<SetTrackEnableによって設定された値を取得する。

```jsl

Names Default To Here( 1 );
mb = MouseBox();
mb << setTrackEnable( 1 );
mb << getTrackEnable();

```

### GetUserData

**構文:** obj &lt;&lt; GetUserData

**説明:** << SetUserDataによって保存された値を取得する。

```jsl

Names Default To Here( 1 );
mb = MouseBox();
mb << setUserData( [1 2, 3 4] );
(mb << getUserData())[2, 1];

```

### RemoveFocus

**構文:** obj &lt;&lt; RemoveFocus

### SetClick

**構文:** obj &lt;&lt; SetClick( Function( {this, clickpt, event}, &lt;script&gt; ) )

**説明:** マウスボタンを下げたとき(または押して放したとき)に行う関数を指定する。ボタンが上がっているときについては<<SetTrack()を参照。clickptは、MouseBox内におけるクリック位置の{x,y}座標。eventは行われた操作を示し、それらの値は、起こる順番に、"Pressed"(ボタンが押された)、"Ticked"(ボタンが押されている)、"Released"(ボタンが放された)。

```jsl

Names Default To Here( 1 );
xsize = 300; /* size of the bitmap */
ysize = 200;
backred = .8; /* background color is light gray-green */
backgrn = .9;
backblu = .8;
RED = J( ysize, xsize, backred ); /* matrix where the bitmap is composed */
GRN = J( ysize, xsize, backgrn );
BLU = J( ysize, xsize, backblu );
BITMAP = New Image( xsize, ysize ); /* displaybox that holds the bitmap */
BITMAP << setpixels( "rgb", {RED, GRN, BLU} ); /* initialize bitmap */
drawline = Function( {x0, y0, x1, y1}, /* utility function to draw a line in an array using matrix operations */
	{dx = x1 - x0, dy = y1 - y0, adx = Abs( dx ), ady = Abs( dy ), m, b},
	If( adx > ady,
		xx = Round( x0 ) :: Round( x1 );
		m = dy / dx;
		b = y0 - m * x0;
		yy = Round( xx * m + b );
	,
		yy = Round( y0 ) :: Round( y1 );
		m = dx / dy;
		b = x0 - m * y0;
		xx = Round( yy * m + b );
	);
	singleindex = (yy - 1) * N Col( GRN ) + xx;
	Try( GRN[singleindex] = .6, 0 ); /* catch indexing errors and ignore the problems */
	Try( RED[singleindex] = .1, 0 ); /* the line is dark green; you could add other */
	Try( BLU[singleindex] = .1, 0 ); /* controls to change the color. */
);
w = New Window( "paint",
	MouseBox( /* <<<<<<<< handler for mouse events */
		BITMAP, /* <<<<<< child box does not receive the mouse events */
		<<setTrackEnable( 1 ),
		<<setTrack(
			Function( {this, clickpt},
				this << setCursor( "Hand" ) /* button-up tracking - use the hand */
			)
		),
		<<setClickEnable( 1 ),
		<<setClick( /* button-down, move, button-release handler */
			Function( {this, clickpt, event}, /*Is Alt Key(),Is Control Key(),Is Shift Key() should be captured on "Pressed" */
				If( event == "Released" | event == "Canceled",
					this << setCursor( "Hand" ) /* switch back to hand immediately */
				,
					this << setCursor( "Finger" ) /* change cursor during drawing */
				);
				If(
					event == "Pressed",
						origin = clickpt; /* capture starting point */
						Show( event, origin );,
					event == "Moved", /* else */
						{x0, y0} = origin;
						{x1, y1} = clickpt; /* draw to new point */
						drawline( x0, y0, x1, y1 );
						drawline( x0 + 1, y0, x1 + 1, y1 ); /* make a thick line */
						drawline( x0 - 1, y0, x1 - 1, y1 );
						drawline( x0, y0 + 1, x1, y1 + 1 );
						drawline( x0, y0 - 1, x1, y1 - 1 );
						origin = clickpt;
						BITMAP << setpixels( "rgb", {RED, GRN, BLU} ); /* apply changes to bitmap */
						w << reshow; /* force screen update */
				,
					event == "Ticked", /* else ... while the button is pressed but not moving, the tick event will let you do something...here we fade the drawing... */
						GRN = (49 * GRN + backgrn) / 50;
						RED = (49 * RED + backred) / 50;
						BLU = (49 * BLU + backblu) / 50;
						BITMAP << setpixels( "rgb", {RED, GRN, BLU} );
						w << reshow;
				);
			)
		)
	)
);

```

### SetClickEnable

**構文:** obj &lt;&lt; SetClickEnable( state=0|1 )

**説明:** MouseBoxが、ボタンを押したままマウスを動かし、ボタンを放す一連の操作を<<SetClick関数を介して処理できるようにする。

### SetCursor

**構文:** obj &lt;&lt; SetCursor( "Arrow"|"NS"|"EW"|"NWSE"|"NESW"|"Finger"|"Hand" )

**説明:** SetCursor(“Hand”)(またはFinger、Arrow、NS、EW、NWSE、NESW)はカーソルを設定する。<<SetTrack関数または<<SetClick関数から使用する。

```jsl

Names Default To Here( 1 );
New Window( "roll over demo",
	MouseBox(
		Text Box( "hello" ),
		<<setTrackEnable( 1 ),
		<<settrack(
			Function( {this, pos},
				(this << child) << FontColor( If( pos[1] >= 0, "red", "black" ) )
			)
		),
		<<setDefaultCursor( "Finger" )
	),
	MouseBox(
		Text Box( "there" ),
		<<setToolTip( "Special!" ),
		<<setTrackEnable( 1 ),
		<<settrack( Function( {this, pos}, this << setCursor( "Hand" ) ) )
	)
);

```

### SetDefaultCursor

**構文:** obj &lt;&lt; SetDefaultCursor( "Arrow"|"NS"|"EW"|"NWSE"|"NESW"|"Finger"|"Hand" )

**説明:** SetDefaultCursorEnable(1)も指定されている場合に、表示するデフォルトのカーソルを指定する。”Arrow”、” NS”、” EW”、” NWSE”、” NESW"、”Finger"、”Hand”のいずれか。SetTrackスクリプトで使用されるSetCursorとは異なり、SetDefaultCursorはスクリプトなしで機能する。

```jsl

Names Default To Here( 1 );
clickFunction = Function( {this, pos, action},
	If(
		action == "Pressed", oldPos = pos,
		action == "Moved",
			dx = pos[1] - oldPos[1];
			dy = pos[2] - oldPos[2];
			oldPos = pos;
			{tops, lefts, rights, bottoms} = this << getUserData();
			If(
				N Items( tops ) > 0 & 0 < ((border << getTop()) + dy) & (((boxes[tops[1]] <<
				child) << getTop) - dy) > 0,
				border << top( (border << getTop()) + dy );
				For( i = 1, i <= N Items( tops ), i++,
					(boxes[tops[i]] << child) << top(
						((boxes[tops[i]] << child) << getTop) - dy
					)
				);
			);
			If(
				N Items( bottoms ) > 0 & 0 < ((border << getBottom()) - dy) & (((boxes[
				bottoms[1]] << child) << getBottom) + dy) > 0,
				border << bottom( (border << getBottom()) - dy );
				For( i = 1, i <= N Items( bottoms ), i++,
					(boxes[bottoms[i]] << child) << bottom(
						((boxes[bottoms[i]] << child) << getBottom) + dy
					)
				);
			);
			If(
				N Items( lefts ) > 0 & 0 < ((border << getLeft()) + dx) & (((boxes[lefts[1]]
				 << child) << getLeft) - dx) > 0,
				border << Left( (border << getLeft()) + dx );
				For( i = 1, i <= N Items( lefts ), i++,
					(boxes[lefts[i]] << child) << Left(
						((boxes[lefts[i]] << child) << getLeft) - dx
					)
				);
			);
			If(
				N Items( rights ) > 0 & 0 < ((border << getRight()) - dx) & (((boxes[rights[1
				]] << child) << getRight) + dx) > 0,
				border << Right( (border << getRight()) - dx );
				For( i = 1, i <= N Items( rights ), i++,
					(boxes[rights[i]] << child) << Right(
						((boxes[rights[i]] << child) << getRight) + dx
					)
				);
			);,
		action == "Released", 0,
		action == "Ticked",
			((this << child) << child) << settext(
				Char( Num( ((this << child) << child) << gettext() ) + 1 )
			)
	)
);
mb = Function( {boxNumber, cursor, TopLeftRightBottom},
	MouseBox(
		Border Box( sides( 15 ), Left( 5 ), Right( 5 ), top( 5 ), bottom( 5 ),
			Text Box( boxNumber )
		),
		<<setDefaultCursor( Eval( cursor ) ),
		<<setClickEnable( 1 ),
		<<SetClick( clickFunction ),
		<<SetUserData( TopLeftRightBottom )
	)
);
boxes = {};
bigBorder = 50;
New Window( "corner demo",
	border = Border Box( sides( 15 ), Left( bigBorder ), Right( bigBorder ), top( bigBorder ),
		bottom( bigBorder ),
		Lineup Box( N Col( 3 ), spacing( 10, 10 ),
			boxes[1] = mb( "1000", "NWSE", {{1, 2, 3}, {1, 4, 7}, {}, {}} ),
			boxes[2] = mb( "2000", "NS", {{1, 2, 3}, {}, {}, {}} ),
			boxes[3] = mb( "3000", "NESW", {{1, 2, 3}, {}, {3, 6, 9}, {}} ),
			boxes[4] = mb( "4000", "EW", {{}, {1, 4, 7}, {}, {}} ),
			boxes[5] = mb( "5000", "HAND", {{}, {}, {}, {}} ),
			boxes[6] = mb( "6000", "EW", {{}, {}, {3, 6, 9}, {}} ),
			boxes[7] = mb( "7000", "NESW", {{}, {1, 4, 7}, {}, {7, 8, 9}} ),
			boxes[8] = mb( "8000", "NS", {{}, {}, {}, {7, 8, 9}} ),
			boxes[9] = mb( "9000", "NWSE", {{}, {}, {3, 6, 9}, {7, 8, 9}} )
		)
	)
);

```

### SetDefaultCursorEnable

**構文:** obj &lt;&lt; SetDefaultCursorEnable( state=0|1 )

**説明:** MouseBoxがSetDefaultCursorで指定されたカーソルを表示できるようにする。

### SetDragBegin

**構文:** obj &lt;&lt; SetDragBegin( Function( {this, clickpt}, &lt;script&gt; ) )

**説明:** ドラッグ＆ドロップ操作の開始時に呼び出す関数を指定する。この関数の戻り値を0にすると、ドラッグが行われないようになる。この関数の戻り値を文字列や1にすると、ドラッグが許可される。文字列や1を指定するのは、<<SetDragTextの代わりにもなる。clickptは、MouseBox内における、ドラッグの開始点の{x,y}座標。

```jsl

Names Default To Here( 1 );
/* See full example for MouseBox() */
mb = MouseBox();
mb << SetDragBegin( Function( {this, clickpt}, 1.0 /*always allow*/ ) );

```

### SetDragEnable

**構文:** obj &lt;&lt; SetDragEnable( state=0|1 )

**説明:** MouseBoxはドラッグ＆ドロップ操作を実行できる。

```jsl

Names Default To Here( 1 );
New Window( "example",
	MouseBox(
		Text Box( "drag me to a text editor" ),
		<<SetDragEnable( 1 ),
		<<SetDragText( "hello" )
	)
);

```

### SetDragEnd

**構文:** obj &lt;&lt; SetDragEnd( Function( {this, clickpt, how}, &lt;script&gt; ) )

**説明:** ドラッグ＆ドロップ操作の終了時に呼び出す関数を指定する。howにはマウス操作の結果("move"/移動または"ignore"/無視)が戻される。マウス操作の結果、移動が行われた場合は、この関数によってドラッグ元の場所をクリアすることもできる。clickptは、MouseBox内における、ドラッグの開始点の{x,y}座標。

```jsl

Names Default To Here( 1 );
/* See full example for MouseBox() */
mb = MouseBox();
mb << SetDragEnd(
	Function( {this, clickpt, how},
		If( how == "move",
			(this << child) << delete/* example; probably not what you want */
		)
	)
);

```

### SetDragText

**構文:** obj &lt;&lt; SetDragText

**説明:** MouseBoxによってドロップ先に送られるテキストを指定する。

```jsl

Names Default To Here( 1 );
mb = MouseBox();
mb << setDragText( "1000 words" );

```

### SetDropCommit

**構文:** obj &lt;&lt; SetDropCommit( Function( {this, clickpt, text}, &lt;script&gt; ) )

**説明:** SetDropCommitは、ドラッグ＆ドロップ操作の終了間際、ボタンが放されたときに呼び出される関数を指定する。指定された関数は、ドラッグ元のtextを受け取るので、textBoxのテキストを設定するなどに利用できる。clickptは、MouseBox内における、ドラッグの終点の{x,y}座標。

```jsl

Names Default To Here( 1 );
/* See full example for <<SetDropTrack() */
mb = MouseBox();
mb << setDropCommit(
	Function( {this, clickPt, text},
		((this << child) << child) << setText( text );
		1;/* return code is ignored */
	)
);

```

### SetDropEnable

**構文:** obj &lt;&lt; SetDropEnable( state=0|1 )

**説明:** MouseBoxがドロップを受け入れるようにする。

```jsl

Names Default To Here( 1 );
mb = MouseBox();
mb << setDropEnable( 1 );

```

### SetDropTrack

**構文:** obj &lt;&lt; SetDropTrack( Function( {this, clickpt}, &lt;script&gt; ) )

**説明:** 該当のMouseBoxを横切るドラッグが行われたときに呼び出される関数を指定する。この関数の戻り値を0にすると、ドロップが行われないようになる。この関数の戻り値を1にすると、ドロップが許可される。ボタンを放した時点で初めて実際にドロップが起こるが、このSetDropTrackに定義された関数が1を戻した場合のみ、SetDropCommitに定義された関数が呼び出され、ドロップされたテキストが処理される。clickptは、MouseBox内における、ドラッグの開始点の{x,y}座標。ドラッグの場所が引数thisのMouseBox上にない場合は{-1, -1}。

```jsl

Names Default To Here( 1 );
nextToBlank = Function( {x, y}, /* helper function */
	If( /* child is border, grandchild is text */
		(x > 1 & (((puzzle[x - 1][y] << child) << child) << gettext) == " ") | (x < 4 & (((
		puzzle[x + 1][y] << child) << child) << gettext) == " ") | (y > 1 & (((puzzle[x][y
		-1] << child) << child) << gettext) == " ") | (y < 4 & (((puzzle[x][y + 1] << child)
		 << child) << gettext) == " ")
	,
		1,
		0
	)
);/* only allow drag begin if next door to empty cell */
dragBegin = Function( {this, clickPt},
	{x, y} = this << getUserData;
	If( nextToBlank( x, y ),
		((this << child) << child) << getText/* the message is the textbox content */
	, /* else */
		0 /* suppress the drag */
	);
);/* function to remove the character from the source cell, but only if the drop was successful */
dragEnd = Function( {this, clickPt, how}, /* how is copy/move/ignore */
	destbox = this << getDestBox;
	If( Is Empty( destBox ),
		Show( "unknown destination" );
		0 /* don't know where the dest was, force ignore */
		;
	,
		Try(
			{x, y} = destbox << GetUserData,
			x = -1;
			y = -1;
		); /* the destbox might not have a list in userdata */
		If(
			Try(
				puzzle[x][y] != destbox,
				1 /*throw is same as !=*/
			)
		, /* x,y might not be valid index */
			Show( "not dropped in this puzzle" );
			0 /* not this puzzle instance, force ignore */
			;
		, /* else */
			If( how == "ignore",
				Show( "drop not completed" );
				0 /* the drop was not completed */
				;
			, /* else */
				((this << child) << child) << setText( " " )
			)
		);
	);
	0 /* the return code is ignored */
	;
);/* function to decide if a drop is allowed.  return codes (0,1) are critical. */
dropTrack = Function( {this, clickPt},
	sourcebox = this << getSourceBox;
	If( Is Empty( sourcebox ),
		Show( "unknown source" );
		0 /* no drop from unknown source box */
		;
	, /* else */
		Try(
			{x, y} = sourcebox << getUserData,
			x = -1;
			y = -1;
		); /* the sourcebox mightnot have a list in userdata */
		If(
			Try(
				puzzle[x][y] != sourcebox,
				1 /*throw is same as !=*/
			)
		, /* x,y might not be valid index */
			Show( "not from this puzzle" );
			0 /* not sourced from this puzzle instance, ignore */
			;
		, /* else */
			If( ((this << child) << child) << getText != " ",
				0 /* no drop on occupied cell */
			, /* else */
				1 /* allow drop on the blank cell */
			)
		);
	);
);/* function to implement the drop */
dropCommit = Function( {this, clickPt, text},
	((this << child) << child) << setText( text );
	1; /* ignored */
);/* cursor changer for cells that can source a drag */
track = Function( {this, clickPt},
	{x, y} = this << getUserData;
	If( nextToBlank( x, y ),
		this << setCursor( "Hand" ),
		this << setCursor( "Arrow" )
	);
	1; /* ignored */
);/* helper function to construct the displaybox tree */
mb = Function( {letter, x, y},
	MouseBox(
		Border Box( Left( 9 ), Right( 9 ), top( 3 ), bottom( 3 ), sides( 15 ),
			Text Box(
				letter,
				<<setFont( "Courier New" ),
				<<set font size( 15 ),
				<<set font style( "bold" )
			)
		),
		<<setUserData( Eval List( {x, y} ) ), /* remember my location.  I don't move, but my content changes. */
		<<setDragEnable( 1 ),
		<<setDragBegin( dragBegin ), /* dragFunctions defined below */
		<<setDragEnd( dragEnd ),
		<<setDropEnable( 1 ),
		<<setDropTrack( dropTrack ),
		<<setDropCommit( dropCommit ),
		<<setTrackEnable( 1 ),
		<<setTrack( track )
	)
);
puzzle = Eval List(
	{Eval List( {mb( "b", 1, 1 ), mb( "u", 1, 2 ), mb( "y", 1, 3 ), mb( " ", 1, 4 )} ),
	Eval List( {mb( "t", 2, 1 ), mb( "h", 2, 2 ), mb( "i", 2, 3 ), mb( "s", 2, 4 )} ),
	Eval List( {mb( "w", 3, 1 ), mb( "o", 3, 2 ), mb( "r", 3, 3 ), mb( "d", 3, 4 )} ),
	Eval List( {mb( "g", 4, 1 ), mb( "a", 4, 2 ), mb( "m", 4, 3 ), mb( "e", 4, 4 )} )}
);
New Window( "puzzle",
	Border Box( Left( 5 ), Right( 5 ), top( 5 ), bottom( 5 ), sides( 15 ),
		Lineup Box( N Col( 4 ), spacing( 3, 3 ),
			puzzle[1][1],
			puzzle[1][2],
			puzzle[1][3],
			puzzle[1][4],
			puzzle[2][1],
			puzzle[2][2],
			puzzle[2][3],
			puzzle[2][4],
			puzzle[3][1],
			puzzle[3][2],
			puzzle[3][3],
			puzzle[3][4],
			puzzle[4][1],
			puzzle[4][2],
			puzzle[4][3],
			puzzle[4][4]
		)
	)
);

```

### SetEdit

**構文:** obj &lt;&lt; SetEdit

### SetEditClear

**構文:** obj &lt;&lt; SetEditClear( state=0|1 )

### SetEditCopy

**構文:** obj &lt;&lt; SetEditCopy( state=0|1 )

### SetEditCopyLabel

**構文:** obj &lt;&lt; SetEditCopyLabel( state=0|1 )

### SetEditCopyText

**構文:** obj &lt;&lt; SetEditCopyText( state=0|1 )

### SetEditCut

**構文:** obj &lt;&lt; SetEditCut( state=0|1 )

### SetEditEnable

**構文:** obj &lt;&lt; SetEditEnable

### SetEditJournal

**構文:** obj &lt;&lt; SetEditJournal( state=0|1 )

### SetEditPaste

**構文:** obj &lt;&lt; SetEditPaste( state=0|1 )

### SetEditPasteJSL

**構文:** obj &lt;&lt; SetEditPasteJSL( state=0|1 )

### SetEditPasteLabel

**構文:** obj &lt;&lt; SetEditPasteLabel( state=0|1 )

### SetEditSaveSelectionAs

**構文:** obj &lt;&lt; SetEditSaveSelectionAs( state=0|1 )

### SetEditSubmit

**構文:** obj &lt;&lt; SetEditSubmit( state=0|1 )

### SetEditSubmitDebug

**構文:** obj &lt;&lt; SetEditSubmitDebug( state=0|1 )

### SetFocus

**構文:** obj &lt;&lt; SetFocus

### SetKey

**構文:** obj &lt;&lt; SetKey( Function( {this, key}, &lt;script&gt; ) )

**説明:** Mouse Boxにフォーカスがあるときにキーが押されると呼び出される関数を設定する。この関数は、キーが処理された場合は1、処理されなかった場合は0を戻す。

```jsl

Names Default To Here( 1 );
New Window( "SetKey Example", mb = MouseBox( tb = Text Box( "Press a key." ) ) );
mb << setkey(
	Function( {this, key},
		tb << settext( key );
		1;
	)
);
mb << setkeyenable( 1 );
mb << setfocus;

```

### SetKeyEnable

**構文:** obj &lt;&lt; SetKeyEnable

### SetMark

**構文:** obj &lt;&lt; SetMark( Function( {this}, &lt;script&gt; ) )

**説明:** SetMarkは、ボックスにフォーカスがあるときに、マウスのクリックまたはリターンキーによって呼び出される関数を指定する。Mouse Boxの選択状態をマーキングで表現できる。クリックのアクションを設定するには、<<SetClickを使用する。

```jsl

Names Default To Here( 1 );
New Window( "Mouse Box", mb = MouseBox( Text Box( "Text" ) ) );
mb << setMarkEnable( 1 );
mb << getMarkEnable();
mb << setMark( Function( {this}, this << Set Marked( !(this << Get Marked) ) ) );

```

### SetMarkEnable

**構文:** obj &lt;&lt; SetMarkEnable( state=0|1 )

**説明:** ボックスにフォーカスがあるときに、マウスのクリックまたはリターンキーによって、MouseBoxが<<SetMark関数を呼び出せるようにする。

```jsl

Names Default To Here( 1 );
New Window( "Mouse Box", mb = MouseBox( Text Box( "Text" ) ) );
mb << setMarkEnable( 1 );

```

### SetMarked

**構文:** obj &lt;&lt; SetMarked( state=0|1 )

**説明:** マーキングのフラグをMouse Boxに設定する。マークされたボックスは、背景が強調表示される。

```jsl

Names Default To Here( 1 );
New Window( "Mouse Box", mb = MouseBox( Text Box( "Text" ) ) );
mb << setMarkEnable( 1 );
mb << setMarked();

```

### SetToolTip

**構文:** obj &lt;&lt; SetToolTip

**説明:** MouseBoxがツールヒントとして使うテキストを指定する。

```jsl

Names Default To Here( 1 );
mb = MouseBox();
mb << setTooltip( "this is your best choice" );

```

### SetTrack

**構文:** obj &lt;&lt; SetTrack( Function( {this, clickpt}, &lt;script&gt; ) )

**説明:** マウスボタンが押されていない状態のマウスがMouseBox上を移動したときに呼び出される関数を指定する。ボタンが押されているときについては<<SetClickを参照。clickptは、MouseBox内における、カーソルの現在位置を示す{x,y}座標。

```jsl

Names Default To Here( 1 );
/* See full example for <<SetClick() */
mb = MouseBox();
mb << setTrack(
	Function( {this, clickpt},
		this << setCursor( "Hand" ) /* button-up tracking - use the hand */
	)
);

```

### SetTrackEnable

**構文:** obj &lt;&lt; SetTrackEnable( state=0|1 )

**説明:** マウスボタンが上がった状態のマウスが移動したときにMouseBoxが<<SetTrack関数を呼び出せるようにする。

### SetUserData

**構文:** obj &lt;&lt; SetUserData

**説明:** MouseBoxに値を保存する。値は、数値、文字列、リスト、連想配列またはその他のJSLタイプ。

