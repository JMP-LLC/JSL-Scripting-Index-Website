# PlotColBox



## 共有されるメッセージ

### Add Line Annotation

**構文:** obj << Add Line Annotation

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

**構文:** obj << Add Pin Annotation

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

**構文:** obj << Add Polygon Annotation

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

**構文:** obj << Add Simple Shape Annotation

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

**構文:** obj << Add Text Annotation

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

**構文:** obj << Append( db2 )

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

**構文:** obj << Background Color( color );

color = obj << Get Background Color

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

**構文:** obj << Border( sides );

sides = obj << Get Border

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

**構文:** obj << Border Color( color );

color = obj << Get Border Color

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

**構文:** obj << Bring Window To Front

**説明:** ウィンドウを最前面に移動する。

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << Run Script( "Bivariate" );
w << Bring Window To Front;

```

### Child

**構文:** obj << Child

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

**構文:** obj << Class Name

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

**構文:** obj << Clone Box

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

**構文:** obj << Close Window( <"NoSave"> )

**説明:** ウィンドウを閉じる。

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
w << Close Window;

```

### Copy Data

**構文:** obj << Copy Data

**説明:** 行列またはテーブルから、タブ区切りのデータをクリップボードにコピーする。

```jsl

Names Default To Here( 1 );
New Window( "x", mat = Matrix Box( [1 2 3, 4 5 6, 7 8 9] ) );
mat << CopyData;

```

### Copy Graph

**構文:** obj << Copy Graph

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

**構文:** obj << Copy Picture

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

**構文:** obj << Delete Box

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

**構文:** obj << Deselect

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

**構文:** obj << Dispatch( {outline node, ...}, display element, display element type, command )

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

**構文:** obj << Enabled( state=0|1 );

state = obj << Get Enabled

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

**構文:** obj << Find

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

**構文:** obj << Get Annotation

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

**構文:** obj << Background Color( color );

color = obj << Get Background Color

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

**構文:** obj << Border( sides );

sides = obj << Get Border

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

**構文:** obj << Border Color( color );

color = obj << Get Border Color

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

**構文:** obj << Get Content Size

**説明:** ウィンドウ内のコンテンツのサイズを戻す。

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
c = w << Get Content Size();
Show( c );

```

### Get Display Path

**構文:** obj << Get Display Path( parent box, <receiver expr>, <Mode("XPath"|"Subscript")> )

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

**構文:** obj << Enabled( state=0|1 );

state = obj << Get Enabled

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

**構文:** obj << Get HTML( <format> )

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

**構文:** width = obj << Get Height

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

**構文:** obj << Horizontal Alignment( "Default"|"Left"|"Center"|"Right" );

"Default"|"Left"|"Center"|"Right" = obj << Get Horizontal Alignment

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

**構文:** obj << Get Journal

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

**構文:** obj << Margin( sides );

sides = obj << Get Margin

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

**構文:** width,height = obj << Get Max Size

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

**構文:** width,height = obj << Get Min Size

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

**構文:** obj << Get Namespace

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

**構文:** obj << Get On Close

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

**構文:** obj << Padding( sides );

sides = obj << Get Padding

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

**構文:** obj << Get Page Setup

**説明:** PDFファイルのページ設定情報を取得する。

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = New Window( "Window", Text Box( "Page Setup Test" ) );
w << get page setup();

```

### Get Picture

**構文:** obj << Get Picture( <Scale(factor)>, <Type("Bitmap" | "Scalable")>, <View("Picture" | "Screen" | "Print"), <Appearance("Default" | "Current")>, <SubRect(Left(number), Top(number), Right(number), Bottom(number))> )

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

**構文:** project = obj << Get Project()

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

**構文:** obj << Get Properties

**説明:** ディスプレイボックスのプロパティとその値を含む連想配列を戻す。

```jsl

Names Default To Here( 1 );
New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Get Properties;

```

### Get Property

**構文:** obj << Get Property( "property" )

**説明:** propertyで指定したプロパティの現在の設定を戻す。

```jsl

Names Default To Here( 1 );
New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Get Property( "Enabled" );

```

### Get Property List

**構文:** obj << Get Property List

**説明:** ディスプレイボックスの持つプロパティのリストを戻す。

```jsl

Names Default To Here( 1 );
New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Get Property List;

```

### Get RTF

**構文:** obj << Get RTF( <format> )

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

**構文:** rs = obj << Get Row States( <dt> )

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

**構文:** obj << Get Show Window

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

**構文:** width,height = obj << Get Size

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

**構文:** x,y = obj << Get Stretch

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

**構文:** obj << Get Text

**説明:** ディスプレイボックスに含まれている文字列をテキストとして戻す。

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
win = New Window( "Example", a = Text Box( "Example Text" ) );
a << Set Text( win << Get Text );

```

### Get Text Color

**構文:** obj << Text Color( color );

color = obj << Get Text Color

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

**構文:** obj << UI Only( state=0|1 );

state = obj << Get UI Only

### Get User Resizable

**構文:** obj << User Resizable;

obj << Get User Resizable

**説明:** ディスプレイボックスを、ユーザによるサイズ変更可能にした場合、カーソルを最下部および右端に近づけるとカーソルの形が変わり、ドラッグでサイズを変更できる。

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

**構文:** obj << Vertical Alignment( "Default"|"Top"|"Center"|"Bottom" );

"Default"|"Top"|"Center"|"Bottom" = obj << Get Vertical Alignment

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

**構文:** obj << Visibility( "Visible"|"Hidden"|"Collapse" );

"Visible"|"Hidden"|"Collapse" = obj << Get Visibility

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

**構文:** obj << Get Web Support

**説明:** ディスプレイオブジェクトにおけるインタラクティブHTMLサポートのレベルを数値で戻す。1は、一部または全部の要素がサポートされていることを示し、0は、サポートされないことを示す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

### Get Width

**構文:** width = obj << Get Width

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

**構文:** obj << Get Window Icon

**説明:** ウィンドウのアイコンを戻す。

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
t = w << Get Window Icon;
Show( t );

```

### Get Window Position

**構文:** obj << Get Window Position

**説明:** ウィンドウの位置を戻す。

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
p = w << Get Window Position();
Show( p );

```

### Get Window Size

**構文:** obj << Get Window Size

**説明:** ウィンドウのサイズを戻す。

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
s = w << Get Window Size();
Show( s );

```

### Get Window Title

**構文:** obj << Get Window Title

**説明:** ウィンドウのタイトルを戻す。

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
t = w << Get Window Title;
Show( t );

```

### Get Window View

**構文:** obj << Get Window View

**説明:** 現在のウィンドウ表示を戻す。戻り値は"Visible"、"Invisible"、"Private"のいずれかになる。

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
Print( w << Get Window View() );

```

### Get XML

**構文:** obj << Get XML( <English(0|1)>, <NoData(0|1)> )

**説明:** 表示ツリーの内容をXML形式で取得する。デフォルトでは、文字列はローカル言語で戻され、XMLには一部のボックスのデータ値が含まれる。Englishオプションを使うと、英語の文字列が戻される。表示ツリーでボックス内のデータ値が大量になる場合があるため、NoDataオプションを使ってそれらを省略できる。

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
win = New Window( "test", a = Text Box( "my test" ) );
a << set text( win << get xml );

```

### GetOffset

**構文:** x,y = obj << GetOffset

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

**構文:** obj << Horizontal Alignment( "Default"|"Left"|"Center"|"Right" );

"Default"|"Left"|"Center"|"Right" = obj << Get Horizontal Alignment

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

**構文:** obj << Inval

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

**構文:** obj << Is Dirty

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

**構文:** obj << Is Modal Dialog

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

**構文:** obj << Journal

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

**構文:** obj << Journal Window

**説明:** そのウィンドウのジャーナルウィンドウを開く。

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = New Window( "Main Window", Text Box( "Main JMP Window" ) );
w << Journal Window;

```

### Launch

**構文:** obj << Launch

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

**構文:** rs = obj << Make RowState Handler( <dt>, function(a) )

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

**構文:** obj << Margin( sides );

sides = obj << Get Margin

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

**構文:** obj << Maximize Window( <state=0|1> )

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

**構文:** obj << Minimize Window( <state=0|1> )

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

**構文:** obj << Move Window( x,y )

**説明:** ウィンドウを指定した位置に移動させる。

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
w << Move Window( 500, 500 );

```

### Next

**構文:** obj << Next

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

**構文:** obj << On Close( script )

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

**構文:** obj << Optimize Display

**説明:** データテーブルの列の幅とウィンドウを最適なサイズに設定する。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
//This message applies to Data Table objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Optimize Display;

```

### Pad Window

**構文:** obj << Pad Window( bool )

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

**構文:** obj << Padding( sides );

sides = obj << Get Padding

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

**構文:** obj << Page Break

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

**構文:** obj << Parent

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

**構文:** obj << Prepend( db2 )

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

**構文:** obj << Prev Sib

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

**構文:** obj << Print Window

**説明:** ウィンドウを印刷する。

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << Print Window;

```

### Reshow

**構文:** obj << Reshow

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

**構文:** obj << Save Capture( <"path">, <format>, <Add Sibling(n)> )

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

**構文:** obj << Save HTML( <pathname>, <format> )

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

**構文:** obj << Save Interactive HTML( <pathname>, <Boolean> )

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

**構文:** obj << Save Journal( <pathname> )

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

**構文:** obj << Save MSWord( <pathname>, <format> )

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

**構文:** obj << Save PDF( <pathname>, <Show Page Setup(0|1)>, <Portrait(0|1)> )

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

**構文:** obj << Save Picture( <pathname>, <format>, <Scale(factor)>, <Type("Bitmap" | "Scalable")>, <View("Picture" | "Screen" | "Print"), <Appearance("Default" | "Current")>, <SubRect(Left(number), Top(number), Right(number), Bottom(number))> )

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

**構文:** obj << Save Presentation( "filename.pptx", <Template("path\to\my_template.pptx")>, <Insert(Begin|End|#) | Replace(Begin|End|#) | Append>, <Outline Titles(None|Hide|TopLeft|TopRight|BottomLeft|BottomRight)>, <"EMF"|"PNG"|"JPG"|"Native"> )

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

**構文:** obj << Save RTF( <pathname>, <format> )

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

**構文:** obj << Save Text( <pathname>, <format> )

**説明:** ディスプレイボックスのテキストを含むファイルを保存する。

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
win = New Window( "Example", a = Text Box( "Example Text" ) );
a << save text( "$TEMP/jmp_example.txt" );

```

### Save Window Report

**構文:** obj << Save Window Report( pathname, <embed data(0|1)> )

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

**構文:** obj << Scroll Window( DisplayBox | <Relative(<v> | <h>,<v>)> | <Absolute(<v> | <h>,<v>) )

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

**構文:** obj << Select

**説明:** このオブジェクトを選択する。選択されたオブジェクトには、[編集]メニューのコマンドが適用できる。

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
New Window( "Example", ex = Button Box( "Press Me" ) );
ex << Select;

```

### Set Content Size

**構文:** obj << Set Content Size( x,y )

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

**構文:** obj << Set Dirty

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

**構文:** obj << Set Height( width )

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

**構文:** obj << Set Main Window

**説明:** このウィンドウをJMPの主ウィンドウに設定し、以前の主ウィンドウを通常のウィンドウに設定する。

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = New Window( "Main Window", Text Box( "Main JMP Window" ) );
w << Set Main Window;

```

### Set Max Size

**構文:** obj << Set Max Size( width,height )

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

**構文:** obj << Set Min Size( width,height )

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

**構文:** obj << Set Page Setup( <margins(left, top, right, bottom)>, <scale(s)>, <portrait(0|1)>, <paper size(p)>, <Table of Contents(always, never, default)>  )

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

**構文:** obj << Set Print Footers( left footer, center footer, right header )

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

**構文:** obj << Set Print Headers( left header, center header, right header )

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

**構文:** obj << Set Property( "property", value )

**説明:** ディスプレイボックスの、propertyで指定した名前のプロパティに値を設定する。

```jsl

Names Default To Here( 1 );
New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Set Property( "Enabled", 0 );

```

### Set Report Title

**構文:** obj << Set Report Title( "string" )

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

**構文:** obj << Set Stretch( x,y )

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

**構文:** obj << Set Summary Behavior( "Default"|"Visible"|"Collapse" )

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

### Set Window Icon

**構文:** obj << Set Window Icon( icon name )

**説明:** ウィンドウのアイコンを設定する。

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = New Window( "Example", ex = Button Box( "New Analysis" ) );
w << Set Window Icon( "Scatter3D" );

```

### Set Window Size

**構文:** obj << Set Window Size( x,y )

**説明:** ウィンドウのサイズを設定する。

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << Set Window Size( 800, 1200 );

```

### Set Window Title

**構文:** obj << Set Window Title( "string" )

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

**構文:** obj << Show Properties

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

**構文:** obj << Show Tree Structure

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

**構文:** obj << Show Window( state=0|1 )

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

**構文:** obj << Sib

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

**構文:** obj << Sib Append( Display box, Horizontal|Vertical )

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

**構文:** obj << Sib Prepend( Display box, Horizontal|Vertical )

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

**構文:** obj << Size Window( x,y )

**説明:** ウィンドウのサイズを設定する。

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << Size Window( 500, 500 );

```

### Text Color

**構文:** obj << Text Color( color );

color = obj << Get Text Color

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

**構文:** obj << Top Parent

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

**構文:** obj << UI Only( state=0|1 );

state = obj << Get UI Only

### Update Window

**構文:** obj << Update Window

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

### User Resizable

**構文:** obj << User Resizable;

obj << Get User Resizable

**説明:** ディスプレイボックスを、ユーザによるサイズ変更可能にした場合、カーソルを最下部および右端に近づけるとカーソルの形が変わり、ドラッグでサイズを変更できる。

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

**構文:** obj << Vertical Alignment( "Default"|"Top"|"Center"|"Bottom" );

"Default"|"Top"|"Center"|"Bottom" = obj << Get Vertical Alignment

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

**構文:** obj << Visibility( "Visible"|"Hidden"|"Collapse" );

"Visible"|"Hidden"|"Collapse" = obj << Get Visibility

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

**構文:** obj << Window Class Name

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

**構文:** obj << XPath( XPath expression, <English(0|1)>, <NoData(0|1)> )

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

**構文:** obj << Zoom Window

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

### Plot Col Box

**構文:** y = Plot Col Box( title, numbers )

**説明:** 数値をグラフ化するためのディスプレイボックスを戻す。stringはウィンドウのタイトルとなる。

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Table Box( col = pcb = Plot Col Box( "Probability", {25, 45, 5, 10, 10, 5} ) )
);

```

## 項目のメッセージ

### Add Element

**構文:** obj << Add Element( number|string|list|matrix )

**説明:** ディスプレイボックスに新しい値を追加する。

```jsl

Names Default To Here( 1 );
New Window( "Example",
	col = Number Col Box( "Random Numbers",
		{Random Uniform(), Random Uniform() * 10, Random Uniform() * 100, Random Uniform() *
		1000, Random Uniform() * 10000}
	)
);
col << Add Element( Random Uniform() * 100000 );

```

### Col ID

**構文:** obj << Col ID( state=0|1 )

**JMP追加されたバージョン:** 17

### Copy Column

**構文:** obj << Copy Column

**説明:** 列の内容をクリップボードにコピーする。

**JMP追加されたバージョン:** 15

### Copy Selected Column Rows

**構文:** obj << Copy Selected Column Rows

**説明:** 選択されている行の列データをクリップボードにコピーする。

**JMP追加されたバージョン:** 15

### Dot

**構文:** obj << Dot

**説明:** 棒ではなく点を表示する。

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Table Box( col = pcb = Plot Col Box( "Probability", {25, 45, 5, 10, 10, 5} ) )
);
pcb << Dot( 1 );

```

### Get

**構文:** list or matrix = obj << Get( <i>, <"Unsorted"> )

**説明:** リスト内のすべての値、またはi番目の値を戻す。デフォルトでは、テーブルに表示されている順番で値が戻される。Unsortedが指定された場合、テーブルのソート方法に関わらず、値は常に同じ順序となる。

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Table Box( col = pcb = Plot Col Box( "Probability", {25, 45, 5, 10, 10, 5} ) )
);
Print( col << Get );

```

### Get As Matrix

**構文:** matrix = obj << Get As Matrix

**説明:** 行列(厳密には列ベクトル)の値を戻す。

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Table Box( col = pcb = Plot Col Box( "Probability", {25, 45, 5, 10, 10, 5} ) )
);
Print( pcb << Get As Matrix );

```

### Get Axis Position

**構文:** Default|Top|Bottom = obj << Get Axis Position

**説明:** Plot Colの軸の位置を取得する。スケールやタイトルにより、デフォルトで上側に表示されることがある。

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Table Box( col = pcb = Plot Col Box( "Probability", {25, 45, 5, 10, 10, 5} ) )
);
pcb << Set Axis Position( "Bottom" );
pcb << Get Axis Position();

```

### Get Bar Color

**構文:** obj << Get Bar Color

**説明:** グラフの棒の色を取得する

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Table Box( col = pcb = Plot Col Box( "Probability", {25, 45, 5, 10, 10, 5} ) )
);
pcb << Set Bar Color( "White" );
Color To RGB( pcb << Get Bar Color );

```

### Get Bar Select Color

**構文:** obj << Get Bar Select Color

**説明:** 選択されている行の棒の色を取得する。

```jsl

Names Default To Here( 1 );
New Window( "Example",
	tb = Table Box( pcb = Plot Col Box( "Probability", {25, 45, 5, 10, 10, 5} ) )
);
tb << Set Selectable Rows();
pcb << Set Bar Select Color( "White" );
Color To RGB( pcb << Get Bar Select Color );

```

### Get Base Data Font

**構文:** font = obj << Get Base Data Font

**説明:** ディスプレイボックスのテキストに使用されるベースフォントを戻す。ベースフォントはTitle、Text、Annotationなどで、フォントの環境設定で事前に設定されている。

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Table Box( col = pcb = Plot Col Box( "Probability", {25, 45, 5, 10, 10, 5} ) )
);
col << Get Base Data Font;

```

### Get Col ID

**構文:** obj << Get Col ID( state=0|1 )

**JMP追加されたバージョン:** 17

### Get Data Font Name

**構文:** obj << Get Data Font Name

**説明:** フォントの名前を戻す。

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Table Box( col = pcb = Plot Col Box( "Probability", {25, 45, 5, 10, 10, 5} ) )
);
col << Set Data Font Name( "Times New Roman" );
col << Get Data Font Name;

```

### Get Data Font Scale

**構文:** obj << Get Data Font Scale

**説明:** 現在のフォントの倍率を戻す。

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Table Box( col = pcb = Plot Col Box( "Probability", {25, 45, 5, 10, 10, 5} ) )
);
col << Get Data Font Scale;

```

### Get Data Font Size

**構文:** obj << Get Data Font Size

**説明:** フォントのサイズを戻す。

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Table Box( col = pcb = Plot Col Box( "Probability", {25, 45, 5, 10, 10, 5} ) )
);
col << Get Data Font Size;

```

### Get Data Font Style

**構文:** obj << Get Data Font Style

**説明:** フォントスタイルの名前を戻す。

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Table Box( col = pcb = Plot Col Box( "Probability", {25, 45, 5, 10, 10, 5} ) )
);
col << Set Data Font Name( "Arial" );
col << Set Data Font Style( "Italic" );
col << Get Data Font Style;

```

### Get Font

**構文:** obj << Get Font

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Table Box( col = pcb = Plot Col Box( "Probability", {25, 45, 5, 10, 10, 5} ) )
);
col << Get Font;

```

### Get Heading

**構文:** obj << Get Heading

**説明:** 列見出しのテキストを戻す。

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Table Box( col = pcb = Plot Col Box( "Probability", {25, 45, 5, 10, 10, 5} ) )
);
Print( col << Get Heading() );

```

### Get Labels

**構文:** list = obj << Get Labels

**説明:** 各行のラベルを戻す。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Table Box( col = pcb = Plot Col Box( "Probability", {25, 45, 5, 10, 10, 5} ) )
);
pcb << Set Labels( {"A", "B", "C", "D", "E", "F"} );
pcb << Get Labels();

```

### Get primary interval line properties

**構文:** {color if upper < reference line, color if crosses reference line, color if lower > reference line, alpha, line width, pen style, cap length } = obj << Get primary interval line properties

### Get secondary interval line properties

**構文:** {color if upper < reference line, color if crosses reference line, color if lower > reference line, alpha, line width, pen style, cap length } = obj << Get secondary interval line properties

### Hide/Unhide

**構文:** obj << Hide/Unhide( state=0|1 )

**説明:** ディスプレイボックスの表示/非表示を切り替える。

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Table Box( col = pcb = Plot Col Box( "Probability", {25, 45, 5, 10, 10, 5} ) )
);
col << Hide( 1 );

```

### Lock Title

**構文:** obj << Lock Title( boolean )

**説明:** 列見出しの編集を有効または無効にする。

```jsl

Names Default To Here( 1 );
New Window( "Mountains",
	tb = Table Box(
		sb = String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		nb = Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		pb = Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
nb << Lock Title( 1 );

```

### Lower

**構文:** obj << Lower( list|matrix )

**説明:** 指定の点に下側限界の折れ線を描く。

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Table Box( col = pcb = Plot Col Box( "Probability", {25, 45, 5, 10, 10, 5} ) )
);
pcb << Lower( [20, 30, 10, 15, 5, 0] );

```

### Lower2

**構文:** obj << Lower2( list|matrix )

**説明:** 指定の点に下側限界の折れ線を描く。

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Table Box( col = pcb = Plot Col Box( "Probability", {25, 45, 5, 10, 10, 5} ) )
);
pcb << Lower( [20, 30, 10, 15, 5, 0] );
pcb << Lower2( [15, 25, 5, 10, 0, -5] );

```

### Marks

**構文:** obj << Marks

**説明:** 各値の限界にマーカーを表示する。

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Table Box( col = pcb = Plot Col Box( "Probability", {25, 45, 5, 10, 10, 5} ) )
);
pcb << Marks( 1 );

```

### Remove Element

**構文:** obj << Remove Element( row number )

**説明:** 列から要素を削除する。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
New Window( "Example",
	col = Number Col Box( "Random Numbers",
		{Random Uniform(), Random Uniform() * 10, Random Uniform() * 100, Random Uniform() *
		1000, Random Uniform() * 10000}
	)
);
col << Remove Element( 2 );

```

### Set

**構文:** obj << Set( <list>, <"Presorted"> )

**説明:** リストの値を設定する。Presortedが指定された場合、値は渡されたリストと同じ順序で表示され、そうでない場合は現在のテーブルのソート順序に基づいて並べ替えられる。

```jsl

Names Default To Here( 1 );
New Window( "Example", col = Number Col Box( "Random Numbers", {} ) );
col << Set(
	{Random Uniform(), Random Uniform() * 10, Random Uniform() * 100, Random Uniform() * 1000,
	Random Uniform() * 10000}
);

```

### Set Axis

**構文:** obj << Set Axis( <Format(format)>, <Inc(number)>, <Max(number)>, <Min(number)>, <Minor Grid Line Color(color)>, <Minor Ticks(number)>, <Scale(scale type)>, <Show Labels(state=0|1)>, <Show Major Grid(state=0|1)>, <Show Major Grid Labels (state=0|1)>,<Show Major Grid Ticks (state=0|1)>, , <Show Minor Grid(state=0|1)>, <Show Minor Grid Labels (state=0|1)>,<Show Minor Grid Ticks (state=0|1)>, <Tick Label List({labels}, {Values})>, <Tick Font(font)>, <Add Ref Line<(value, < "Solid|Dashed|Double">, <Color>, <"label">, <line width>, <transparency>)> )

**説明:** PlotColBoxの軸を設定する。詳細については、AxisBoxを参照のこと。

```jsl

Names Default To Here( 1 );
dt = Open( "$sample_data\World Demographics.jmp" );
New Window( "World Population",
	Table Box(
		"test",
		String Col Box( "Territory", :Territory << get values ),
		pcb = Plot Col Box( "Population", dt:Name( "Population (1000)" ) << get values )
	)
);
pcb << Set Axis( Min( 0 ), scale( "log" ), Format( "Best", 6 ), Inc( 1 ), Minor Ticks( 1 ) );
pcb << set axis position( "Bottom" );
pcb << set width( 300 );
pcb << set plot style( "Interval" );
pcb << set scrollable( 25 );

```

### Set Axis Position

**構文:** obj << Set Axis Position( "Default"|"Top"|"Bottom" )

**説明:** プロット列の軸が常に上側か下側になるように設定する。デフォルトでは、スケールやタイトルによって上側に表示されることがある。

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Table Box( col = pcb = Plot Col Box( "Probability", {25, 45, 5, 10, 10, 5} ) )
);
pcb << Set Axis Position( "Bottom" );
Wait( 1 );
pcb << Set Axis Position( "Top" );
Wait( 1 );
pcb << Set Axis Position( "Default" );

```

### Set Bar Color

**構文:** obj << Set Bar Color( color )

**説明:** グラフの棒の色を設定する。

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Table Box( col = pcb = Plot Col Box( "Probability", {25, 45, 5, 10, 10, 5} ) )
);
pcb << Set Bar Color( "White" );

```

### Set Bar Select Color

**構文:** obj << Set Bar Select Color( color )

**説明:** 選択されている行の棒の色を設定する。

```jsl

Names Default To Here( 1 );
New Window( "Example",
	tb = Table Box( pcb = Plot Col Box( "Probability", {25, 45, 5, 10, 10, 5} ) )
);
tb << Set Selectable Rows();
tb << Set Selected Rows( [1, 4] );
pcb << Set Bar Select Color( "White" );

```

### Set Base Data Font

**構文:** obj << Set Base Data Font( "テキスト"|"見出し"|"タイトル"|"スモール"|"モノ"|"計算式エディタ"|"注釈"|"軸"|"マーカー"|"軸ラベル"|"グラフラベル"|"凡例"|"グラフタイトル"|"キャプション"|"データテーブル"|"ホバーラベル" )

**説明:** ディスプレイボックスのテキストに使用されるベースフォントを設定する。

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Table Box( col = pcb = Plot Col Box( "Probability", {25, 45, 5, 10, 10, 5} ) )
);
Wait( 2 );
col << Set Base Data Font( "Data" );

```

### Set Col ID

**構文:** obj << Set Col ID( state=0|1 )

**JMP追加されたバージョン:** 17

### Set Data Font

**構文:** obj << Set Data Font( fontName, <size>, <"bold italic underline strikeout">, <angle> )

**例 1**

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Table Box( col = pcb = Plot Col Box( "Probability", {25, 45, 5, 10, 10, 5} ) )
);
col << Set Data Font( "Arial Black" );

```

**例 2**

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Table Box( col = pcb = Plot Col Box( "Probability", {25, 45, 5, 10, 10, 5} ) )
);
col << Set Data Font( "Arial Black", 12, "Italic Underline" );

```

### Set Data Font Name

**構文:** obj << Set Data Font Name( fontname )

**説明:** テキストのフォントを設定する。

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Table Box( col = pcb = Plot Col Box( "Probability", {25, 45, 5, 10, 10, 5} ) )
);
col << Set Data Font Name( "Arial Black" );

```

### Set Data Font Scale

**構文:** obj << Set Data Font Scale( f )

**説明:** 現在のフォントの倍率を設定する。この倍率は、ベースフォントとポイントサイズから決定されたサイズに適用される。

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Table Box( col = pcb = Plot Col Box( "Probability", {25, 45, 5, 10, 10, 5} ) )
);
Wait( 2 );
col << Set Data Font Scale( 2.0 );

```

### Set Data Font Size

**構文:** obj << Set Data Font Size( n )

**説明:** テキストのサイズをポイント数で設定する。

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Table Box( col = pcb = Plot Col Box( "Probability", {25, 45, 5, 10, 10, 5} ) )
);
col << Set Data Font Size( 14 );

```

### Set Data Font Style

**構文:** obj << Set Data Font Style( style )

**説明:** テキスト文字列のフォントスタイルを設定する。複数のスタイルを一度に設定するには、スペースで区切った文字列で指定してください(以下の例2を参照)。

**例 1**

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Table Box( col = pcb = Plot Col Box( "Probability", {25, 45, 5, 10, 10, 5} ) )
);
col << Set Data Font Style( "Italic" );

```

**例 2**

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Table Box( col = pcb = Plot Col Box( "Probability", {25, 45, 5, 10, 10, 5} ) )
);
col << Set Data Font Style( "Italic Bold Underline" );

```

### Set Heading

**構文:** obj << Set Heading( "string" )

**説明:** 列見出しのテキストを変更する。

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Table Box( col = pcb = Plot Col Box( "Probability", {25, 45, 5, 10, 10, 5} ) )
);
col << Set Heading( "New Column Header" );

```

### Set Labels

**構文:** obj << Set Labels( list )

**説明:** 各行のラベルを設定する。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Table Box( col = pcb = Plot Col Box( "Probability", {25, 45, 5, 10, 10, 5} ) )
);
pcb << Set Labels( {"A", "B", "C", "D", "E", "F"} );

```

### Set Plot Style

**構文:** obj << Set Plot Style( "Default"|"Bar"|"Interval" )

**説明:** プロット列の表示を変更する。

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Table Box( col = pcb = Plot Col Box( "Probability", {25, 45, 5, 10, 10, 5} ) )
);
pcb << Lower( [20, 30, 10, 15, 5, 0] );
pcb << Upper( [20, 30, 10, 15, 5, 0] + 10 );
pcb << Set Plot Style( "Interval" );

```

### Set Reference Line

**構文:** obj << Set Reference Line( number )

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Table Box( col = pcb = Plot Col Box( "Probability", {25, 45, 5, 10, 10, 5} ) )
);
pcb << Lower( [.20, .30, .10, .15, .5, 0] );
pcb << Upper( [.20, .30, .10, .15, .5, 0] + 10 );
pcb << Set Plot Style( "Interval" );
pcb << Set Reference Line( 1 );

```

### Set Resizable

**構文:** obj << Set Resizable( boolean )

**説明:** 列のサイズを対話式に変更する機能をオンまたはオフにする。

```jsl

Names Default To Here( 1 );
New Window( "Mountains",
	tb = Table Box(
		sb = String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),
		nb = Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),
		pb = Plot Col Box( "", {8611, 681, 5895, 4199} )
	)
);
nb << Set Resizable( 1 );

```

### Set Scale

**構文:** obj << Set Scale( minimum, maximum, <format name>, <width> | <width, decimal places>, < "Use thousands separator"> )

**説明:** PlotColBoxのminimumとmaximumのスケールを設定する。表示形式のパラメータの指定は、最初の2つのパラメータが0と1である場合のみに適用される。

**スケール**

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Table Box( col = pcb = Plot Col Box( "Probability", {25, 45, 5, 10, 10, 5} ) )
);
pcb << Set Scale( 0, 100 );

```

**表示形式**

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );
obj = dt << Attribute Chart( Y( :A, :B, :C ), X( :Part ), Standard( :Standard ) );
(obj << xpath( "//PlotColBox" )) << Set Scale( 0, 1, "Percent" );

```

### Set Smart Shrinking

**構文:** obj << Set Smart Shrinking( boolean )

**説明:** 有効になっている場合、現在の幅の3分の2未満になったときに初めて、幅を縮小させる。

```jsl

Names Default To Here( 1 );
New Window( "Smart Shrinking",
	Table Box(
		String Col Edit Box( "Regular", {"I change my size every time you edit"} ),
		c = String Col Edit Box(
			"Smart",
			{"I only get smaller when my text is less than 2/3 my width"}
		)
	)
);
c << Set Smart Shrinking( true );

```

### Set Values

**構文:** obj << Set Values( matrix|list )

**説明:** PlotColBoxを与えられた値で更新する。

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Table Box( col = pcb = Plot Col Box( "Probability", {25, 45, 5, 10, 10, 5} ) )
);
pcb << Set Values( [5, 25, 45, 5, 10, 10] );

```

### Set Width

**構文:** obj << Set Width( width )

**説明:** PlotColBoxの幅をピクセル数で指定する。

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Table Box( col = pcb = Plot Col Box( "Probability", {25, 45, 5, 10, 10, 5} ) )
);
pcb << Set Width( 300 );

```

### Set primary interval line properties

**構文:** obj << Set primary interval line properties( {color if upper < reference line, color if crosses reference line, color if lower > reference line, alpha, line width, pen style, cap length } )

### Set secondary interval line properties

**構文:** obj << Set secondary interval line properties( {color if upper < reference line, color if crosses reference line, color if lower > reference line, alpha, line width, pen style, cap length } )

### Significance

**構文:** obj << Significance( list|matrix )

**説明:** プロット列がintervalモードのときに、マーカーのサイズを変更するために使用する。

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Table Box( col = pcb = Plot Col Box( "Probability", {25, 45, 5, 10, 10, 5} ) )
);
pcb << set plot style( "Interval" );
pcb << Significance( [2, 3, 1, 1.5, 1, 1] );

```

### Upper

**構文:** obj << Upper( list|matrix )

**説明:** 指定の点に上側限界の折れ線を描く。Lower(下側)を先に指定しなければならない。

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Table Box( col = pcb = Plot Col Box( "Probability", {25, 45, 5, 10, 10, 5} ) )
);
pcb << Lower( [20, 30, 10, 15, 5, 0] );
pcb << Upper( [20, 30, 10, 15, 5, 0] + 10 );

```

### Upper2

**構文:** obj << Upper2( list|matrix )

**説明:** 指定の点に上側限界の折れ線を描く。Lower(下側)を先に指定しなければならない。

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Table Box( col = pcb = Plot Col Box( "Probability", {25, 45, 5, 10, 10, 5} ) )
);
pcb << Lower( [20, 30, 10, 15, 5, 0] );
pcb << Lower2( [20, 30, 10, 15, 5, 0] - 5 );
pcb << Upper( [20, 30, 10, 15, 5, 0] + 5 );
pcb << Upper2( [20, 30, 10, 15, 5, 0] + 10 );

```

