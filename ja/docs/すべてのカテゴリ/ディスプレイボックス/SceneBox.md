# SceneBox



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

### Set Width

**構文:** obj << Set Width( width )

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

### Scene Box

**構文:** box = Scene Box( xsize, ysize )

**説明:** OpenGLコマンドを実行できるディスプレイボックスを戻す。

```jsl

Names Default To Here( 1 );
shape = Scene Display List( 0 );
shape << Enable( COLOR_MATERIAL );
shape << Color( 0, 0.48, 0.72 );
shape << Material( Front, Diffuse, 0, 1, 1, 1 );
shape << Material( Front, Specular, 0, 1, 0, 1 );
shape << Material( Front, Emission, 0, 0, 0, 1 );
shape << Material( Front, Shininess, 100 );
shape << Sphere( 1.5, 50, 50 );
shape << Disable( COLOR_MATERIAL );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << clear;
scene << Perspective( 45, 1, 10 );
scene << Translate( 0.0, 0.0, -5 );
scene << Enable( Lighting );
scene << Enable( Light0 );
scene << Light( Light0, Position, 1, 1, 1, 0 );
scene << ArcBall( shape, 3 );
scene << Disable( Light0 );
scene << Disable( Lighting );
scene << update;

```

## 項目のメッセージ

### ArcBall

**構文:** obj << ArcBall( list,radius )

**説明:** 指定のリストに、左クリック＆ドラッグで回転するオブザベーションを描く。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
shape = Scene Display List();
shape << color( 0, 0, 1 );
shape << Text( center, baseline, 0.2, "Hello, World." );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << Perspective( 45, 3, 7 );
scene << Translate( 0.0, 0.0, -4.5 );
scene << ArcBall( shape, 1 );
scene << Update;

```

### Background Color

**構文:** obj << Background Color( red, green, blue )

**説明:** シーンボックスの背景色を設定する。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << Perspective( 45, 3, 7 );
scene << Translate( 0.0, 0.0, -4.5 );
scene << color( 0, 0, 1 );
scene << Text( center, baseline, 0.2, "Hello, World." );
scene << Background Color( 0, 0, 0 );

```

### Begin

**構文:** obj << Begin

**説明:** primitiveの開始点を指定する。OpenGLコマンドglBeginを使用。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
shape = Scene Display List();
shape << Begin( POLYGON );
shape << Color( 1, 0, 0 );
shape << Vertex( -1, 0.75, 0 );
shape << Color( 0, 0, 1 );
shape << Vertex( -1, -0.75, 0 );
shape << Color( 0, 1, 0 );
shape << Vertex( 1, -0.75, 0 );
shape << Color( 1, 1, 0 );
shape << Vertex( 1, 0.75, 0 );
shape << End();
scene = Scene Box( 200, 200 );
scene << CallList( shape );
New Window( "Example", scene );

```

### BlendFunc

**構文:** obj << BlendFunc( source factor,destination factor )

**説明:** 混合に使用する関数を設定する。OpenGLコマンドglBlendFuncを使用。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
shape = Scene Display List();
shape << Enable( Blend );
shape << BlendFunc( SRC_ALPHA, ONE_MINUS_SRC_ALPHA );
shape << Begin( POLYGON );
shape << Color( 1, 0, 0, 0 );
shape << Vertex( -1, 0.75, 0 );
shape << Color( 0, 0, 1 );
shape << Vertex( -1, -0.75, 0 );
shape << Color( 0, 1, 0 );
shape << Vertex( 1, -0.75, 0 );
shape << Color( 1, 1, 0 );
shape << Vertex( 1, 0.75, 0 );
shape << End();
shape << Disable( Blend );
scene = Scene Box( 200, 200 );
scene << CallList( shape );
New Window( "Example", scene );

```

### CallList

**構文:** obj << CallList( list )

**説明:** 指定のリストにオブザベーションを描く。OpenGLコマンドglCallListを使用。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
shape = Scene Display List( 0 );
shape << Color( 0, 0.48, 0.72 );
shape << Disk( .5, 1, 50, 50 );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << clear;
scene << Perspective( 45, 1, 10 );
scene << Translate( 0.0, 0.0, -5 );
scene << CallList( shape );
scene << update;

```

### Clear

**構文:** obj << Clear

**説明:** シーンを消去し、背景色にする。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
scene = Scene Box( 500, 500 );
fps = Scene Display List();
window = New Window( "Frames Per Second", scene );
lastTime = 0;
frameCount = 0;
framesPerSecond = "Frames Per Second: ";
While( 1,
	time = Today();
	frameCount++;
	If( time != lastTime,
		framesPerSecond = Char( frameCount );
		frameCount = 0;
		lastTime = time;
	);
	fps << Clear;
	fps << Translate( -1, 0, 0 );
	fps << Color( 1, 0, 0 );
	fps << Text( left, baseline, .1, "Frames Per Second: " || framesPerSecond );
	scene << Clear;
	scene << CallList( fps );
	scene << Update;
	Wait( 0 );
);

```

### ClipPlane

**構文:** obj << ClipPlane( clip_plane0|clip_plane1|clip_plane2|clip_plane3|clip_plane4|clip_plane5,x,y,z,d )

**説明:** clipping planeを作成する。OpenGLコマンドglClipPlaneを使用。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
shape = Scene Display List();
shape << Color( 0, 0.48, 0.72 );
shape << Cylinder( 0.5, 0.5, 2, 50, 50 );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << enable( CLIP_PLANE0 );
scene << ClipPlane( CLIP_PLANE0, 1, 1, 0, 0 );
scene << Perspective( 45, 3, 7 );
scene << Translate( 0.0, 0.0, -4.5 );
scene << ArcBall( shape, 2 );
scene << Disable( CLIP_PLANE0 );
scene << Update;

```

### Color

**構文:** obj << Color( r,g,b,<a> )

**説明:** 色を設定する。αレイヤーが機能するには、混合が有効でなければならない。OpenGLコマンド glColorを使用。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
shape = Scene Display List();
shape << Enable( Blend );
shape << BlendFunc( SRC_ALPHA, ONE_MINUS_SRC_ALPHA );
shape << Begin( POLYGON );
shape << Color( 1, 0, 0, 0 );
shape << Vertex( -1, 0.75, 0 );
shape << Color( 0, 0, 1 );
shape << Vertex( -1, -0.75, 0 );
shape << Color( 0, 1, 0 );
shape << Vertex( 1, -0.75, 0 );
shape << Color( 1, 1, 0 );
shape << Vertex( 1, 0.75, 0 );
shape << End();
shape << Disable( Blend );
scene = Scene Box( 200, 200 );
scene << CallList( shape );
New Window( "Example", scene );

```

### ColorMask

**構文:** obj << ColorMask( red=0|1,green=0|1,blue=0|1,alpha=0|1 )

**説明:** 後続のオブジェクトにカラーマスクを適用する。OpenGLコマンドglColorMaskを使用。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
shape = Scene Display List( 0 );
shape << Enable( COLOR_MATERIAL );
shape << Color( 0, 0.0, 0.0 );
shape << Material( Front, Ambient, 0, 1, 1, 1 );
shape << Material( Front, Diffuse, 0, 1, 1, 1 );
shape << Material( Front, Specular, 0, 1, 0, 1 );
shape << Material( Front, Emission, 0, 0, 0, 1 );
shape << Material( Front, Shininess, 100 );
shape << ColorMask( 1, 1, 0, 0 );
shape << Begin( POLYGON );
shape << Color( 1, 0, 0 );
shape << Vertex( -1, 1.5, 0 );
shape << Color( 0, 0, 1 );
shape << Vertex( -1, -1.5, 0 );
shape << Color( 0, 1, 0 );
shape << Vertex( 1, -1.5, 0 );
shape << Color( 1, 1, 0 );
shape << Vertex( 1, 1.5, 0 );
shape << End();
shape << Disable( COLOR_MATERIAL );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << clear;
scene << Perspective( 45, 1, 10 );
scene << Translate( 0.0, 0.0, -5 );
scene << Enable( Lighting );
scene << Enable( Light0 );
scene << Light( Light0, Position, 1, 1, 1, 0 );
scene << ArcBall( shape, 2 );
scene << Disable( Light0 );
scene << Disable( Lighting );
scene << update;

```

### ColorMaterial

**構文:** obj << ColorMaterial( Front|Back|Front_And_Back,Emission|Ambient|Diffuse|Specular|Ambient_And_Diffuse )

**説明:** 後続のオブジェクトにcolor materialを適用する。OpenGLコマンドglColorMaterialを使用。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
shape = Scene Display List( 0 );
shape << Color Material( Front_And_Back, Ambient );
shape << Enable( COLOR_MATERIAL );
shape << Color( 0, 0.48, 0.72 );
shape << Material( Front, Ambient, 0, 0, 1, 1 );
shape << Material( Front, Diffuse, 0, 1, 1, 1 );
shape << Material( Front, Specular, 0, 1, 0, 1 );
shape << Material( Front, Emission, 0, 0, 0, 1 );
shape << Material( Front, Shininess, 100 );
shape << Sphere( 1.5, 50, 50 );
shape << Disable( COLOR_MATERIAL );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << clear;
scene << Perspective( 45, 1, 10 );
scene << Translate( 0.0, 0.0, -5 );
scene << Enable( Lighting );
scene << Enable( Light0 );
scene << Light( Light0, Position, 1, 1, 1, 0 );
scene << ArcBall( shape, 3 );
scene << Disable( Light0 );
scene << Disable( Lighting );
scene << update;

```

### CullFace

**構文:** obj << CullFace( front|back|front_and_back )

**説明:** 除去を有効にする場所を設定する。OpenGLコマンドglCullFaceを使用。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
shape = Scene Display List( 0 );
shape << Enable( CULL_FACE );
shape << CullFace( Front );
shape << Enable( COLOR_MATERIAL );
shape << Color( 0, 0.48, 0.72 );
shape << Material( Front, Ambient, 0, 0, 1, 1 );
shape << Material( Front, Diffuse, 0, 1, 1, 1 );
shape << Material( Front, Specular, 0, 1, 0, 1 );
shape << Material( Front, Emission, 0, 0, 0, 1 );
shape << Material( Front, Shininess, 100 );
shape << Sphere( 1.5, 50, 50 );
shape << Disable( COLOR_MATERIAL );
shape << Disable( CULL_FACE );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << clear;
scene << Perspective( 45, 1, 10 );
scene << Translate( 0.0, 0.0, -5 );
scene << Enable( Lighting );
scene << Enable( Light0 );
scene << Light( Light0, Position, 1, 1, 1, 0 );
scene << ArcBall( shape, 3 );
scene << Disable( Light0 );
scene << Disable( Lighting );
scene << update;

```

### Cylinder

**構文:** obj << Cylinder( base radius,top radius,height,slices,stacks )

**説明:** 円柱を作成する。OpenGLユーティリティコマンドgluCylinderを使用。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
shape = Scene Display List();
shape << Color( 0, 0.48, 0.72 );
shape << Cylinder( 0.5, 0.5, 2, 50, 50 );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << Perspective( 45, 3, 7 );
scene << Translate( 0.0, 0.0, -4.5 );
scene << ArcBall( shape, 2 );
scene << Update;

```

### DepthFunc

**構文:** obj << DepthFunc( nevert|lesst|equalt|lequalt|greatert|notequalt|gequalt|always )

**説明:** 深さバッファ比較に使用する深さ関数を設定する。OpenGLコマンドglDepthFuncを使用。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
shape = Scene Display List( 0 );
shape << Enable( DEPTH_TEST );
shape << DepthFunc( never );
shape << Enable( COLOR_MATERIAL );
shape << Color( 0, 0.48, 0.72 );
shape << Material( Front, Ambient, 0, 0, 1, 1 );
shape << Material( Front, Diffuse, 0, 1, 1, 1 );
shape << Material( Front, Specular, 0, 1, 0, 1 );
shape << Material( Front, Emission, 0, 0, 0, 1 );
shape << Material( Front, Shininess, 100 );
shape << Sphere( 1.5, 50, 50 );
shape << Disable( COLOR_MATERIAL );
shape << Disable( DEPTH_TEST );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << clear;
scene << Perspective( 45, 1, 10 );
scene << Translate( 0.0, 0.0, -5 );
scene << Enable( Lighting );
scene << Enable( Light0 );
scene << Light( Light0, Position, 1, 1, 1, 0 );
scene << ArcBall( shape, 3 );
scene << Disable( Light0 );
scene << Disable( Lighting );
scene << update;

```

### DepthMask

**構文:** obj << DepthMask( state=0|1 )

**説明:** 深さバッファを書き込めるかどうかを設定する。OpenGLコマンドglDepthMaskを使用。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
shape = Scene Display List( 0 );
shape << Enable( DEPTH_TEST );
shape << DepthMask( 0 );
shape << Enable( COLOR_MATERIAL );
shape << Color( 0, 0.48, 0.72 );
shape << Material( Front, Ambient, 0, 0, 1, 1 );
shape << Material( Front, Diffuse, 0, 1, 1, 1 );
shape << Material( Front, Specular, 0, 1, 0, 1 );
shape << Material( Front, Emission, 0, 0, 0, 1 );
shape << Material( Front, Shininess, 100 );
shape << Sphere( 1.5, 50, 50 );
shape << Disable( COLOR_MATERIAL );
shape << Disable( DEPTH_TEST );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << clear;
scene << Perspective( 45, 1, 10 );
scene << Translate( 0.0, 0.0, -5 );
scene << Enable( Lighting );
scene << Enable( Light0 );
scene << Light( Light0, Position, 1, 1, 1, 0 );
scene << ArcBall( shape, 3 );
scene << Disable( Light0 );
scene << Disable( Lighting );
scene << update;

```

### DepthRange

**構文:** obj << DepthRange( near,far )

**説明:** 近くと遠くの深さの範囲を設定する。この範囲以外のものは何も描画されない。OpenGLコマンドglDepthRangeを使用。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
shape = Scene Display List( 0 );
shape << Enable( DEPTH_TEST );
shape << DepthRange( 1, 0 );
shape << Enable( COLOR_MATERIAL );
shape << Color( 0, 0.48, 0.72 );
shape << Material( Front, Ambient, 0, 0, 1, 1 );
shape << Material( Front, Diffuse, 0, 1, 1, 1 );
shape << Material( Front, Specular, 0, 1, 0, 1 );
shape << Material( Front, Emission, 0, 0, 0, 1 );
shape << Material( Front, Shininess, 100 );
shape << Sphere( 1.5, 50, 50 );
shape << Disable( COLOR_MATERIAL );
shape << Disable( DEPTH_TEST );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << clear;
scene << Perspective( 45, 1, 10 );
scene << Translate( 0.0, 0.0, -5 );
scene << Enable( Lighting );
scene << Enable( Light0 );
scene << Light( Light0, Position, 1, 1, 1, 0 );
scene << ArcBall( shape, 3 );
scene << Disable( Light0 );
scene << Disable( Lighting );
scene << update;

```

### Disable

**構文:** obj << Disable

**説明:** さまざまなOpenGL機能を無効にするOpenGLコマンドglDisableを使用。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
showfog = 1;
scene = Scene Box( 600, 600 );
New Window( "Example",
	scene,
	box = Button Box( "Disable Fog",
		showfog = !showfog;
		refresh();
	)
);
refresh = Function( {},
	scene << clear;
	scene << perspective( 50, .5, 5 );
	scene << translate( 0, 0, -2 );
	scene << backgroundcolor( "Black" );
	If( showfog,
		scene << enable( FOG );
		scene << fog( FOG_END, 3 );
		scene << fog( FOG_START, 1 );
		scene << fog( FOG_COLOR, 0, 0, 0 );
		scene << fog( FOG_MODE, LINEAR );
		box << SetButtonName( "Disable Fog" );
	,
		scene << disable( FOG );
		box << SetButtonName( "Enable Fog" );
	);
	scene << color( 0, 1, 0 );
	scene << rotate( 180, 1, 0, 0 );
	object = Scene Display List();
	object << cylinder( .8, .4, 1, 40, 10 );
	scene << calllist( object );
	scene << update;
);
refresh();

```

### Disk

**構文:** obj << Disk( inner radius,outer radius,slices,rings )

**説明:** 円盤を作成する。OpenGLユーティリティコマンドgluDiskを使用。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
shape = Scene Display List();
shape << Color( 0, 0.48, 0.72 );
shape << Disk( .5, 1, 50, 50 );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << Perspective( 45, 3, 7 );
scene << Translate( 0.0, 0.0, -4.5 );
scene << ArcBall( shape, 2 );
scene << Update;

```

### Enable

**構文:** obj << Enable

**説明:** さまざまなOpenGL機能を有効にするOpenGLコマンドglEnableを使用。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
showfog = 1;
scene = Scene Box( 600, 600 );
New Window( "Example",
	scene,
	box = Button Box( "Disable Fog",
		showfog = !showfog;
		refresh();
	)
);
refresh = Function( {},
	scene << clear;
	scene << perspective( 50, .5, 5 );
	scene << translate( 0, 0, -2 );
	scene << backgroundcolor( "Black" );
	If( showfog,
		scene << enable( FOG );
		scene << fog( FOG_END, 3 );
		scene << fog( FOG_START, 1 );
		scene << fog( FOG_COLOR, 0, 0, 0 );
		scene << fog( FOG_MODE, LINEAR );
		box << SetButtonName( "Disable Fog" );
	,
		scene << disable( FOG );
		box << SetButtonName( "Enable Fog" );
	);
	scene << color( 0, 1, 0 );
	scene << rotate( 180, 1, 0, 0 );
	object = Scene Display List();
	object << cylinder( .8, .4, 1, 40, 10 );
	scene << calllist( object );
	scene << update;
);
refresh();

```

### End

**構文:** obj << End

**説明:** primitiveの終了点を指定する。OpenGLコマンドglEndを使用。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
shape = Scene Display List();
shape << Begin( POLYGON );
shape << Color( 1, 0, 0 );
shape << Vertex( -1, 0.75, 0 );
shape << Color( 0, 0, 1 );
shape << Vertex( -1, -0.75, 0 );
shape << Color( 0, 1, 0 );
shape << Vertex( 1, -0.75, 0 );
shape << Color( 1, 1, 0 );
shape << Vertex( 1, 0.75, 0 );
shape << End();
scene = Scene Box( 200, 200 );
scene << CallList( shape );
New Window( "Example", scene );

```

### EvalCoord1

**構文:** obj << EvalCoord1( u )

**説明:** 1次元マップを評価する。OpenGLコマンドglEvalCoord1dを使用。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
NPOINTS = 4;
points = J( NPOINTS, 3, 0 );
For( x = 1, x <= NPOINTS, x++,
	points[x, 1] = Random Uniform() - .5;
	points[x, 2] = Random Uniform() - .5;
	points[x, 3] = 0;
);
curve = Scene Box( 500, 400 );
curve << Map1( MAP1_VERTEX_3, 0, 1, 3, NPOINTS, points );
curve << Enable( MAP1_VERTEX_3 );
curve << Ortho2D( -.6, .6, -.6, .6 );
curve << Color( 0, 0, 1 );
curve << Begin( line_strip );
For( i = 0, i <= 30, i++,
	curve << EvalCoord1( i / 30 )
);
curve << End();
curve << Disable( MAP1_VERTEX_3 );
New Window( "Example", curve );

```

### EvalCoord2

**構文:** obj << EvalCoord2( u,v )

**説明:** 2次元マップを評価する。OpenGLコマンドglEvalCoord2dを使用。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
gridsize = 10;
npoints = 16;
imax = 8;
jmax = 20;
points = J( npoints, 3, 0 );
For( i = 0, i < npoints, i++,
	points[i, 1] = Random Uniform() - .5;
	points[i, 2] = Random Uniform() - .5;
	points[i, 3] = Random Uniform() - .5;
);
surface = Scene Display List();
surface << Enable( MAP2_VERTEX_3 );
surface << Enable( Auto_Normal );
surface << Map2( MAP2_VERTEX_3, 0, 1, 3, 4, 0, 1, 12, 4, points );
surface << color( 0, 0, 1 );
For( i = 0, i <= imax, i++,
	surface << begin( LINE_STRIP );
	For( j = 0, j <= jmax, j++,
		surface << EvalCoord2( j / jmax, i / imax )
	);
	surface << End();
	surface << Begin( LINE_STRIP );
	For( j = 0, j < jmax, j++,
		surface << EvalCoord2( i / imax, j / jmax )
	);
	surface << End();
);
sb = Scene Box( 500, 400 );
sb << Ortho( -.75, .75, -.75, .75, -1, 1 );
sb << CallList( surface );
sb << backgroundcolor( "white" );
New Window( "Example", sb );

```

### EvalMesh1

**構文:** obj << EvalMesh1( mode,i1,i2 )

**説明:** 1次元meshを評価する。OpenGLコマンドglEvalMesh1を使用。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
gridsize = 100;
NPOINTS = 4;
points = J( NPOINTS, 3, 0 );
For( x = 1, x <= NPOINTS, x++,
	points[x, 1] = (x - 1) / (NPOINTS - 1) - .5;
	points[x, 2] = Random Uniform() - .5;
	points[x, 3] = 0;
);
spline = Scene Box( 500, 400 );
spline << Ortho2D( -.6, .6, -.6, .6 );
spline << Enable( MAP1_VERTEX_3 );
spline << MapGrid1( gridsize, 0, 1 );
spline << color( .2, .2, 1 );
spline << Map1( MAP1_VERTEX_3, 0, 1, 3, NPOINTS, points );
spline << EvalMesh1( LINE, 0, gridsize );
New Window( "Example", spline );

```

### EvalMesh2

**構文:** obj << EvalMesh2( mode,i1,i2,j1,j2 )

**説明:** 2次元meshを評価する。OpenGLコマンドglEvalMesh2を使用。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
gridsize = 10;
npoints = 32;
points = J( npoints, 3, 0 );
For( i = 0, i < npoints, i++,
	points[i, 1] = Random Uniform() - .5;
	points[i, 2] = Random Uniform() - .5;
	points[i, 3] = Random Uniform() - .5;
);
surface = Scene Display List();
surface << Enable( MAP2_VERTEX_3 );
surface << Enable( Auto_Normal );
surface << MapGrid2( gridsize, 0, 1, gridsize, 0, 1 );
surface << color( 0, 0, 1 );
surface << Map2( MAP2_VERTEX_3, 0, 1, 3, 4, 0, 1, 12, 4, points );
surface << EvalMesh2( LINE, 0, gridsize, 0, gridsize );
sb = Scene Box( 500, 400 );
sb << Ortho( -.75, .75, -.75, .75, -1, 1 );
sb << ArcBall( surface, 1 );
New Window( "Example", sb );

```

### EvalPoint1

**構文:** obj << EvalPoint1( i )

**説明:** 単一点を1次元meshで評価する。OpenGLコマンドglEvalPoint1を使用。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
NPOINTS = 4;
points = J( NPOINTS, 3, 0 );
For( x = 1, x <= NPOINTS, x++,
	points[x, 1] = Random Uniform() - .5;
	points[x, 2] = Random Uniform() - .5;
	points[x, 3] = 0;
);
curve = Scene Box( 500, 400 );
curve << Map1( MAP1_VERTEX_3, 0, 1, 3, NPOINTS, points );
curve << Enable( MAP1_VERTEX_3 );
curve << Ortho2D( -.6, .6, -.6, .6 );
curve << Color( 0, 0, 1 );
curve << Begin( line_strip );
For( i = 0, i <= 60, i++,
	curve << EvalPoint1( i )
);
curve << End();
curve << Disable( MAP1_VERTEX_3 );
New Window( "Example", curve );

```

### EvalPoint2

**構文:** obj << EvalPoint2( i,j )

**説明:** 単一点を2次元meshで評価する。OpenGLコマンドglEvalPoint2を使用。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
gridsize = 10;
npoints = 16;
imax = 8;
jmax = 20;
points = J( npoints, 3, 0 );
For( i = 0, i < npoints, i++,
	points[i, 1] = Random Uniform() - .5;
	points[i, 2] = Random Uniform() - .5;
	points[i, 3] = Random Uniform() - .5;
);
curves = Scene Display List();
curves << Enable( MAP2_VERTEX_3 );
curves << Enable( Auto_Normal );
curves << Map2( MAP2_VERTEX_3, 0, 1, 3, 4, 0, 1, 12, 4, points );
curves << color( 0, 0, 1 );
For( i = 0, i <= imax, i++,
	curves << begin( LINE_STRIP );
	For( j = 0, j <= jmax, j++,
		curves << EvalCoord2( j / jmax, i / imax )
	);
	curves << End();
	curves << Begin( LINE_STRIP );
	For( j = 0, j < jmax, j++,
		curves << EvalPoint2( i, j )
	);
	curves << End();
);
sb = Scene Box( 500, 400 );
sb << Ortho( -.75, .75, -.75, .75, -1, 1 );
sb << CallList( curves );
sb << backgroundcolor( "white" );
New Window( "Example", sb );

```

### Fog

**構文:** obj << Fog( fog_mode|fog_density|fog_start|fog_end|fog_index|fog_color,p1,<p2>,<p3>,<p4> )

**説明:** fogを作成する。OpenGLコマンドglFogを使用。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
showfog = 1;
scene = Scene Box( 600, 600 );
New Window( "Example",
	scene,
	box = Button Box( "Disable Fog",
		showfog = !showfog;
		refresh();
	)
);
refresh = Function( {},
	scene << clear;
	scene << perspective( 50, .5, 5 );
	scene << translate( 0, 0, -2 );
	scene << backgroundcolor( "Black" );
	If( showfog,
		scene << enable( FOG );
		scene << fog( FOG_END, 3 );
		scene << fog( FOG_START, 1 );
		scene << fog( FOG_COLOR, 0, 0, 0 );
		scene << fog( FOG_MODE, LINEAR );
		box << SetButtonName( "Disable Fog" );
	,
		scene << disable( FOG );
		box << SetButtonName( "Enable Fog" );
	);
	scene << color( 0, 1, 0 );
	scene << rotate( 180, 1, 0, 0 );
	object = Scene Display List();
	object << cylinder( .8, .4, 1, 40, 10 );
	scene << calllist( object );
	scene << update;
);
refresh();

```

### Frame

**構文:** obj << Frame( x0,x1,y0,y1,z0,z1,farside )

**説明:** 枠を描く。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
scene = Scene Box( 200, 200 );
New Window( "Example", scene );
scene << frame( -0.2, 0.2, -0.2, 0.2, 0.0, 0.0, 1 );
scene << frame( -0.4, 0.4, -0.4, 0.4, 0.0, 0.0, 1 );
scene << frame( -0.6, 0.6, -0.6, 0.6, 0.0, 0.0, 1 );
scene << frame( -0.8, 0.8, -0.8, 0.8, 0.0, 0.0, 1 );

```

### FrontFace

**構文:** obj << FrontFace( cw|ccw )

**説明:** 前向きまたは後ろ向きの多角形を設定する。これは、オブジェクト除去で使用される。OpenGLコマンドglFrontFaceを使用。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
shape = Scene Display List( 0 );
shape << Enable( CULL_FACE );
shape << CullFace( Front );
shape << Enable( COLOR_MATERIAL );
shape << Color( 0, 0.48, 0.72 );
shape << Material( Front, Ambient, 0, 0, 1, 1 );
shape << Material( Front, Diffuse, 0, 1, 1, 1 );
shape << Material( Front, Specular, 0, 1, 0, 1 );
shape << Material( Front, Emission, 0, 0, 0, 1 );
shape << Material( Front, Shininess, 100 );
shape << Sphere( 1.5, 50, 50 );
shape << Disable( COLOR_MATERIAL );
shape << Disable( CULL_FACE );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << clear;
scene << Perspective( 45, 1, 10 );
scene << Translate( 0.0, 0.0, -5 );
scene << Enable( Lighting );
scene << Enable( Light0 );
scene << Light( Light0, Position, 1, 1, 1, 0 );
scene << frontface( cw );
scene << ArcBall( shape, 3 );
scene << Disable( Light0 );
scene << Disable( Lighting );
scene << update;

```

### Frustum

**構文:** obj << Frustum( left,right,bottom,top,near,far )

**説明:** カメラが使用するパラメータを設定する。OpenGLコマンドglFrustumを使用。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
shape = Scene Display List( 0 );
shape << Enable( COLOR_MATERIAL );
shape << Color( 0, 0.48, 0.72 );
shape << Material( Front, Diffuse, 0, 1, 1, 1 );
shape << Material( Front, Specular, 0, 1, 0, 1 );
shape << Material( Front, Emission, 0, 0, 0, 1 );
shape << Material( Front, Shininess, 100 );
shape << Sphere( 1.5, 50, 50 );
shape << Disable( COLOR_MATERIAL );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << clear;
scene << Perspective( 45, 1, 10 );
scene << Translate( 0.0, 0.0, -5 );
scene << Enable( Lighting );
scene << Enable( Light0 );
scene << Light( Light0, Position, 1, 1, 1, 0 );
scene << Frustum( -3, 1, -1, 1, 2, 9 );
scene << ArcBall( shape, 3 );
scene << Disable( Light0 );
scene << Disable( Lighting );
scene << update;

```

### Get Background Color

**構文:** color = obj << Get Background Color

**説明:** シーンボックスの背景色を戻す。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << Perspective( 45, 3, 7 );
scene << Translate( 0.0, 0.0, -4.5 );
scene << color( 0, 0, 1 );
scene << Text( center, baseline, 0.2, "Hello, World." );
scene << Background Color( 0, 0, 0 );
scene << Get Background Color();

```

### Get Show ArcBall

**構文:** obj << Get Show ArcBall

**説明:** 天球体をいつ表示するかの設定を戻す。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
shape = Scene Display List();
shape << color( 0, 0, 1 );
shape << Text( center, baseline, 0.2, "Hello, World." );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << Perspective( 45, 3, 7 );
scene << Translate( 0.0, 0.0, -4.5 );
scene << ArcBall( shape, 1 );
scene << Show ArcBall( always );
scene << Update;
scene << Get Show ArcBall();

```

### Get Width

**構文:** pixels = obj << Get Width

**説明:** ボックスの幅を戻す。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
shape = Scene Display List( 0 );
shape << Enable( COLOR_MATERIAL );
shape << Color( 0, 0.48, 0.72 );
shape << Material( Front, Diffuse, 0, 1, 1, 1 );
shape << Material( Front, Specular, 0, 1, 0, 1 );
shape << Material( Front, Emission, 0, 0, 0, 1 );
shape << Material( Front, Shininess, 100 );
shape << Sphere( 1.5, 50, 50 );
shape << Disable( COLOR_MATERIAL );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << clear;
scene << Perspective( 45, 1, 10 );
scene << Translate( 0.0, 0.0, -5 );
scene << Enable( Lighting );
scene << Enable( Light0 );
scene << Light( Light0, Position, 1, 1, 1, 0 );
scene << ArcBall( shape, 3 );
scene << Disable( Light0 );
scene << Disable( Lighting );
scene << update;
scene << Get Width();

```

### Height

**構文:** obj << Height( pixels )

**説明:** ボックスの高さを設定する。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
shape = Scene Display List( 0 );
shape << Enable( COLOR_MATERIAL );
shape << Color( 0, 0.48, 0.72 );
shape << Material( Front, Diffuse, 0, 1, 1, 1 );
shape << Material( Front, Specular, 0, 1, 0, 1 );
shape << Material( Front, Emission, 0, 0, 0, 1 );
shape << Material( Front, Shininess, 100 );
shape << Sphere( 1.5, 50, 50 );
shape << Disable( COLOR_MATERIAL );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << clear;
scene << Perspective( 45, 1, 10 );
scene << Translate( 0.0, 0.0, -5 );
scene << Enable( Lighting );
scene << Enable( Light0 );
scene << Light( Light0, Position, 1, 1, 1, 0 );
scene << ArcBall( shape, 3 );
scene << Disable( Light0 );
scene << Disable( Lighting );
scene << update;
scene << Height( 150 );

```

### Light

**構文:** obj << Light( light0|light1|light2|light3|light4|light5|light6|light7,ambient|diffuse|specular|position,x|r,y|g,z|b,<a> )

**説明:** 指定のパラメータを使って光源を作成する。OpenGLコマンドglLightを使用。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
shape = Scene Display List( 0 );
shape << Color( 0, 0.48, 0.72 );
shape << Sphere( 1.5, 50, 50 );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << clear;
scene << Perspective( 45, 1, 10 );
scene << Translate( 0.0, 0.0, -5 );
scene << Enable( Lighting );
scene << Enable( Light0 );
scene << Light( Light0, Position, 1, 1, 1, 0 );
scene << Light( Light0, Ambient, 0, 0, 1, 1 );
scene << Light( Light0, Diffuse, 0, 1, 1, 1 );
scene << Light( Light0, Specular, 1, 1, 0, 1 );
scene << ArcBall( shape, 3 );
scene << Disable( Light0 );
scene << Disable( Lighting );
scene << update;

```

### LightModel

**構文:** obj << LightModel( light_model_ambient|light_model_local_viewer|light_model_two_side,r,g,b,a )

**説明:** light modelに使用するパラメータを設定する。OpenGLコマンドglLightModelを使用。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
shape = Scene Display List( 0 );
shape << Enable( COLOR_MATERIAL );
shape << Color( 0, 0.48, 0.72 );
shape << Material( Front, Diffuse, 0, 1, 1, 1 );
shape << Material( Front, Specular, 0, 1, 0, 1 );
shape << Material( Front, Emission, 0, 0, 0, 1 );
shape << Material( Front, Shininess, 100 );
shape << Sphere( 1.5, 50, 50 );
shape << Disable( COLOR_MATERIAL );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << clear;
scene << Perspective( 45, 1, 10 );
scene << Translate( 0.0, 0.0, -5 );
scene << Enable( Lighting );
scene << Enable( Light0 );
scene << Light( Light0, Position, 1, 1, 1, 0 );
scene << Light Model( light_model_ambient, 0.2, 0, 0.5, 1 );
scene << ArcBall( shape, 3 );
scene << Disable( Light0 );
scene << Disable( Lighting );
scene << update;

```

### LineStipple

**構文:** obj << LineStipple( factor,pattern )

**説明:** 線点パターンを設定する。OpenGLコマンドglLineStippleの使用。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
scene = Scene Box( 200, 200 );
New Window( "Example", scene );
scene << LineWidth( 4 );
scene << color( 0, 0, 0 );
scene << Enable( LINE_STIPPLE );
scene << LineStipple( 2, 01101010 );
scene << Begin( LINES );
scene << Vertex( -.8, 0, 0 );
scene << Vertex( .8, 0, 0 );
scene << End();
scene << Disable( LINE_STIPPLE );

```

### LineWidth

**構文:** obj << LineWidth( width )

**説明:** 線の幅を設定する。OpenGLコマンドglLineWidthを使用。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
scene = Scene Box( 200, 200 );
New Window( "Example", scene );
scene << LineWidth( 1 );
scene << Begin( LINES );
scene << color( 0, 0, 0 );
scene << Vertex( -.4, 0.04, 0 );
scene << Vertex( .4, 0.04, 0 );
scene << End();
scene << LineWidth( 4 );
scene << Begin( LINES );
scene << Vertex( -.4, -0.04, 0 );
scene << Vertex( .4, -0.04, 0 );
scene << End();

```

### LoadIdentity

**構文:** obj << LoadIdentity

**説明:** 現在の行列をidentity matrixに設定する。OpenGLコマンドglLoadIdentityを使用。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
shape = Scene Display List( 0 );
shape << Color( 0, 0.48, 0.72 );
shape << Sphere( 0.5, 50, 50 );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << clear;
scene << Perspective( 45, 1, 10 );
scene << Translate( 1.0, 0.0, -5 );
scene << CallList( shape );
scene << LoadIdentity;
scene << Perspective( 90, 1, 10 );
scene << Translate( -1.0, 0.0, -5 );
scene << CallList( shape );
scene << update;

```

### LoadMatrix

**構文:** obj << LoadMatrix( matrix )

**説明:** 現在の行列を指定の行列に設定する。OpenGLコマンドglLoadMatrixを使用。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
shape = Scene Display List( 0 );
shape << Color( 0, 0.48, 0.72 );
shape << Sphere( 0.5, 50, 50 );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << clear;
scene << Perspective( 45, 1, 10 );
scene << Translate( 1.0, 0.0, -5 );
scene << CallList( shape );
identitymatrix = [1 0 0 0, 0 1 0 0, 0 0 1 0, 0 0 0 1];
scene << LoadMatrix( identitymatrix );
scene << Perspective( 90, 1, 10 );
scene << Translate( -1.0, 0.0, -5 );
scene << CallList( shape );
scene << update;

```

### LoadName

**構文:** obj << LoadName( i )

**説明:** pickerとともに使用する。後続のオブジェクトを識別する整数を読み込む。OpenGLコマンドglLoadNameを使用。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
spheres = Scene Display List();
spheres << Point Size( 50 );
Spheres << PushName( 0 );
For( i = 0, i < 3, i++,
	spheres << LoadName( (i + 1) );
	spheres << PushMatrix;
	spheres << Translate( (i * 0.75 - .75), 0, 0 );
	spheres << color( 1, 0, 0 );
	spheres << Begin( POINTS );
	spheres << Vertex( 0, 0, -.0001 );
	spheres << End;
	spheres << color( 0, 0, 0 );
	spheres << Text( center, middle, 0.2, Char( (i + 1) ) );
	spheres << PopMatrix;
);
spheres << PopName;
view = Scene Box( 500, 400 );
view << Ortho( -1, 1, -1, 1, -2, 2 );
view << CallList( spheres );
view << update;
New Window( "Example", view );
Print( view << Pick( 50, 200, 1, 1, 4, 1 ) );

```

### LookAt

**構文:** obj << LookAt( eye x,eye y,eye z,center x,center y,center z,up x,up y,up z )

**説明:** カメラが見ている位置を設定する。OpenGL ユーティリティコマンドgluLookAtを使用。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
shape = Scene Display List();
shape << Enable( COLOR_MATERIAL );
shape << Color( 0, 0.48, 0.72 );
shape << Cylinder( 0.5, 0.5, 2, 50, 50 );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << Perspective( 45, 3, 20 );
scene << LookAt( 1, 0, 7, 0, 0, 0, 0, 1, 0 );
scene << ArcBall( shape, 2 );
scene << Update;

```

### Map1

**構文:** obj << Map1( target,u1,u2,stride,order,points )

**説明:** 1次元評価を定義する。OpenGLコマンドglMap1dを使用。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
gridsize = 100;
NPOINTS = 4;
points = J( NPOINTS, 3, 0 );
For( x = 1, x <= NPOINTS, x++,
	points[x, 1] = (x - 1) / (NPOINTS - 1) - .5;
	points[x, 2] = Random Uniform() - .5;
	points[x, 3] = 0;
);
spline = Scene Box( 500, 400 );
spline << Ortho2D( -.6, .6, -.6, .6 );
spline << Enable( MAP1_VERTEX_3 );
spline << MapGrid1( gridsize, 0, 1 );
spline << color( .2, .2, 1 );
spline << Map1( MAP1_VERTEX_3, 0, 1, 3, NPOINTS, points );
spline << EvalMesh1( LINE, 0, gridsize );
New Window( "Example", spline );

```

### Map2

**構文:** obj << Map2( target,u1,u2,ustride,uorder,v1,v2,vstride,vorder,points )

**説明:** 2次元評価を定義する。OpenGLコマンドglMap2dを使用。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
gridsize = 10;
npoints = 32;
points = J( npoints, 3, 0 );
For( i = 0, i < npoints, i++,
	points[i, 1] = Random Uniform() - .5;
	points[i, 2] = Random Uniform() - .5;
	points[i, 3] = Random Uniform() - .5;
);
surface = Scene Display List();
surface << Enable( MAP2_VERTEX_3 );
surface << Enable( Auto_Normal );
surface << MapGrid2( gridsize, 0, 1, gridsize, 0, 1 );
surface << color( 0, 0, 1 );
surface << Map2( MAP2_VERTEX_3, 0, 1, 3, 4, 0, 1, 12, 4, points );
surface << EvalMesh2( LINE, 0, gridsize, 0, gridsize );
sb = Scene Box( 500, 400 );
sb << Ortho( -.75, .75, -.75, .75, -1, 1 );
sb << ArcBall( surface, 1 );
New Window( "Example", sb );

```

### MapGrid1

**構文:** obj << MapGrid1( un,u1,u2 )

**説明:** 1次元meshを定義する。OpenGLコマンドglMapGrid1dを使用。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
gridsize = 100;
NPOINTS = 4;
points = J( NPOINTS, 3, 0 );
For( x = 1, x <= NPOINTS, x++,
	points[x, 1] = (x - 1) / (NPOINTS - 1) - .5;
	points[x, 2] = Random Uniform() - .5;
	points[x, 3] = 0;
);
spline = Scene Box( 500, 400 );
spline << Ortho2D( -.6, .6, -.6, .6 );
spline << Enable( MAP1_VERTEX_3 );
spline << MapGrid1( gridsize, 0, 1 );
spline << color( .2, .2, 1 );
spline << Map1( MAP1_VERTEX_3, 0, 1, 3, NPOINTS, points );
spline << EvalMesh1( LINE, 0, gridsize );
New Window( "Example", spline );

```

### MapGrid2

**構文:** obj << MapGrid2( un,u1,u2,vn,v1,v2 )

**説明:** 2次元meshを定義する。OpenGLコマンドglMapGrid2dを使用。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
gridsize = 10;
npoints = 32;
points = J( npoints, 3, 0 );
For( i = 0, i < npoints, i++,
	points[i, 1] = Random Uniform() - .5;
	points[i, 2] = Random Uniform() - .5;
	points[i, 3] = Random Uniform() - .5;
);
surface = Scene Display List();
surface << Enable( MAP2_VERTEX_3 );
surface << Enable( Auto_Normal );
surface << MapGrid2( gridsize, 0, 1, gridsize, 0, 1 );
surface << color( 0, 0, 1 );
surface << Map2( MAP2_VERTEX_3, 0, 1, 3, 4, 0, 1, 12, 4, points );
surface << EvalMesh2( LINE, 0, gridsize, 0, gridsize );
sb = Scene Box( 500, 400 );
sb << Ortho( -.75, .75, -.75, .75, -1, 1 );
sb << ArcBall( surface, 1 );
New Window( "Example", sb );

```

### Material

**構文:** obj << Material

**説明:** 後続のオブジェクトに使用する素材の種類を指定する。OpenGLコマンドglMaterialを使用。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
shape = Scene Display List( 0 );
shape << Enable( COLOR_MATERIAL );
shape << Color( 0, 0.48, 0.72 );
shape << Material( Front, Ambient, 0, 0, 1, 1 );
shape << Material( Front, Diffuse, 0, 1, 1, 1 );
shape << Material( Front, Specular, 0, 1, 0, 1 );
shape << Material( Front, Emission, 0, 0, 0, 1 );
shape << Material( Front, Shininess, 100 );
shape << Sphere( 1.5, 50, 50 );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << clear;
scene << Perspective( 45, 1, 10 );
scene << Translate( 0.0, 0.0, -5 );
scene << Enable( Lighting );
scene << Enable( Light0 );
scene << Light( Light0, Position, 1, 1, 1, 0 );
scene << ArcBall( shape, 3 );
scene << update;

```

### MatrixMode

**構文:** obj << MatrixMode( modelview|projection|texture )

**説明:** 操作対象の行列を設定する。OpenGLコマンドglMatrixModeを使用。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
shape = Scene Display List( 0 );
shape << Color( 0, 0.48, 0.72 );
shape << Sphere( 0.5, 50, 50 );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << clear;
scene << Perspective( 45, 1, 10 );
scene << Translate( 1.0, 0.0, -5 );
scene << CallList( shape );
scene << MatrixMode( projection );
scene << LoadIdentity;
scene << Perspective( 90, 1, 10 );
scene << Translate( -1.0, 0.0, -5 );
scene << CallList( shape );
scene << update;

```

### MultMatrix

**構文:** obj << MultMatrix( matrix )

**説明:** 現在の行列に指定の行列を掛ける。OpenGLコマンドglMultMatrixを使用。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
shape = Scene Display List( 0 );
shape << Color( 0, 0.48, 0.72 );
shape << Sphere( 1.0, 50, 50 );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << clear;
scene << Perspective( 45, 1, 10 );
scene << Translate( 0.0, 0.0, -5 );
matrix = [1.5 0 0 0, 0 1 0 0, 0 0 1 0, 0 0 0 1];
scene << MultMatrix( matrix );
scene << CallList( shape );
scene << update;

```

### Normal

**構文:** obj << Normal( x,y,z )

**説明:** current normalを設定する。OpenGLコマンドglNormalを使用。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
shape = Scene Display List( 0 );
shape << Enable( COLOR_MATERIAL );
shape << LightModel( LIGHT_MODEL_TWO_SIDE, 1 );
shape << Color( 0, 0.0, 0.0 );
shape << Material( Front_and_back, Ambient, 0, 1, 1, 1 );
shape << Material( Front_and_back, Diffuse, 0, 1, 1, 1 );
shape << Material( Front_and_back, Specular, 0, 1, 0, 1 );
shape << Material( Front_and_back, Emission, 0, 0, 0, 1 );
shape << Material( Front_and_back, Shininess, 100 );
shape << Begin( POLYGON );
shape << Normal( 0, 0, 1 );
shape << Color( 1, 0, 0 );
shape << Vertex( -1, 1.5, 0 );
shape << Color( 0, 0, 1 );
shape << Vertex( -1, -1.5, 0 );
shape << Color( 0, 1, 0 );
shape << Vertex( 1, -1.5, 0 );
shape << Color( 1, 1, 0 );
shape << Vertex( 1, 1.5, 0 );
shape << End();
shape << Disable( COLOR_MATERIAL );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << clear;
scene << Perspective( 45, 1, 10 );
scene << Translate( 0.0, 0.0, -5 );
scene << Enable( Lighting );
scene << Enable( Light0 );
scene << Light( Light0, Position, 1, 1, 1, 0 );
scene << ArcBall( shape, 2 );
scene << Disable( Light0 );
scene << Disable( Lighting );
scene << update;

```

### Ortho

**構文:** obj << Ortho( left,right,bottom,top,near,far )

**説明:** シーンを直交ビューに設定する。OpenGLコマンドglOrthoを使用。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
shape = Scene Display List( 0 );
shape << Begin( POLYGON );
shape << Color( 1, 0, 0 );
shape << Vertex( -1, 1.5, 0 );
shape << Color( 0, 0, 1 );
shape << Vertex( -1, -1.5, 0 );
shape << Color( 0, 1, 0 );
shape << Vertex( 1, -1.5, 0 );
shape << Color( 1, 1, 0 );
shape << Vertex( 1, 1.5, 0 );
shape << End();
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << clear;
scene << Ortho( -2, 2, -2, 2, -0.5, 0.5 );
scene << ArcBall( shape, 2 );
scene << update;

```

### Ortho2D

**構文:** obj << Ortho2D( left,right,bottom,top )

**説明:** シーンを2次元の直交ビューに設定する。OpenGLユーティリティコマンドgluOrtho2dを使用。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
scene = Scene Box( 200, 200 );
New Window( "Example", scene );
scene << Ortho2D( -1, 1, -1, 1 );
scene << Shade Model( SMOOTH );
scene << Begin( TRIANGLES );
scene << color( 1, 0, 0 );
scene << Vertex( -1, -1, 0 );
scene << Color( 0, 1, 0 );
scene << Vertex( 0, 1, 0 );
scene << Color( 0, 0, 1 );
scene << Vertex( 1, -1, 0 );
scene << End();
scene << Update;

```

### PartialDisk

**構文:** obj << PartialDisk( inner radius,outer radius,slices,rings,start angle,sweep angle )

**説明:** 扇型を作成する。OpenGLユーティリティコマンドgluPartialDiskを使用。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
shape = Scene Display List();
shape << Color( 0, 0.48, 0.72 );
shape << PartialDisk( 0.5, 1, 2, 3, 50, 50 );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << Perspective( 45, 3, 7 );
scene << Translate( 0.0, 0.0, -4.5 );
scene << ArcBall( shape, 2 );
scene << Update;

```

### Perspective

**構文:** obj << Perspective( angle,z near,z far )

**説明:** 表示の透視投影を設定する。OpenGLユーティリティコマンドgluPerspectiveを使用。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << Perspective( 45, 3, 7 );
scene << Translate( 0.0, 0.0, -4.5 );
scene << color( 0, 0, 1 );
scene << Text( center, baseline, 0.2, "Hello, World." );

```

### Pick

**構文:** name = obj << Pick( x center,y center,pick width,pick height,buffer size,only return the names=0|1 )

**説明:** 二次元座標系でマウスの下にある名前付きオブジェクトを戻す。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
spheres = Scene Display List();
spheres << Point Size( 50 );
Spheres << PushName( 0 );
For( i = 0, i < 3, i++,
	spheres << LoadName( (i + 1) );
	spheres << PushMatrix;
	spheres << Translate( (i * 0.75 - .75), 0, 0 );
	spheres << color( 1, 0, 0 );
	spheres << Begin( POINTS );
	spheres << Vertex( 0, 0, -.0001 );
	spheres << End;
	spheres << color( 0, 0, 0 );
	spheres << Text( center, middle, 0.2, Char( (i + 1) ) );
	spheres << PopMatrix;
);
spheres << PopName;
view = Scene Box( 500, 400 );
view << Ortho( -1, 1, -1, 1, -2, 2 );
view << CallList( spheres );
view << update;
New Window( "Example", view );
Print( view << Pick( 50, 200, 1, 1, 4, 1 ) );

```

### PointSize

**構文:** obj << PointSize( size )

**説明:** 点のサイズを設定する。OpenGL コマンドglPointSizeを使用。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
scene = Scene Box( 200, 200 );
New Window( "Example", scene );
scene << pointsize( 1 );
scene << Begin( POINTS );
scene << color( 0, 0, 0 );
scene << Vertex( -.08, 0.04, 0 );
scene << Vertex( -.04, 0.04, 0 );
scene << Vertex( 0, 0.04, 0 );
scene << Vertex( .04, 0.04, 0 );
scene << Vertex( .08, 0.04, 0 );
scene << End();
scene << pointsize( 2 );
scene << Begin( POINTS );
scene << Vertex( -.08, -0.04, 0 );
scene << Vertex( -.04, -0.04, 0 );
scene << Vertex( 0, -0.04, 0 );
scene << Vertex( .04, -0.04, 0 );
scene << Vertex( .08, -0.04, 0 );
scene << End();

```

### PolygonMode

**構文:** obj << PolygonMode( front|back|front_and_back,point|line|fill )

**説明:** ラスター化に使用するモードを設定する。OpenGLコマンドglPolygonModeを使用。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
shape = Scene Display List( 0 );
shape << PolygonMode( front, line );
shape << Begin( POLYGON );
shape << Color( 1, 0, 0 );
shape << Vertex( -1, 1.5, 0 );
shape << Color( 0, 0, 1 );
shape << Vertex( -1, -1.5, 0 );
shape << Color( 0, 1, 0 );
shape << Vertex( 1, -1.5, 0 );
shape << Color( 1, 1, 0 );
shape << Vertex( 1, 1.5, 0 );
shape << End();
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << clear;
scene << Ortho( -2, 2, -2, 2, -2, 2 );
scene << ArcBall( shape, 2 );
scene << update;

```

### PolygonOffset

**構文:** obj << PolygonOffset( factor,units )

**説明:** 多角形のオフセットを設定する。OpenGLコマンドglPolygonOffsetを使用。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
shape = Scene Display List( 0 );
shape << Begin( POLYGON );
shape << Color( 1, 0, 0 );
shape << Vertex( -1, 1.5, 0 );
shape << Color( 0, 0, 1 );
shape << Vertex( -1, -1.5, 0 );
shape << Color( 0, 1, 0 );
shape << Vertex( 1, -1.5, 0 );
shape << Color( 1, 1, 0 );
shape << Vertex( 1, 1.5, 1 );
shape << Color( 0, 0, 0 );
shape << Vertex( 1, 1.5, 0 );
shape << End();
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << clear;
scene << Ortho( -2, 2, -2, 2, -2, 2 );
scene << Enable( Polygon_offset_fill );
scene << PolygonMode( back, point );
scene << ArcBall( shape, 2 );
scene << Disable( Polygon_offset_line );
scene << update;

```

### PopAttrib

**構文:** obj << PopAttrib

**説明:** 現在の属性をPops。OpenGLコマンドglPopAttribを使用。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
shape = Scene Display List( 0 );
shape << Color( 0, 0, 1 );
shape << PushAttrib( GL_CURRENT_BIT );
shape << Color( 0, 0, 0 );
shape << Begin( POLYGON );
shape << Vertex( -1, 0, 0 );
shape << Vertex( 1, 0, 0 );
shape << Color( 0, 1, 0 );
shape << Vertex( 1, -2, 0 );
shape << Vertex( -1, -2, 0 );
shape << End;
shape << PopAttrib;
shape << Begin( TRIANGLES );
shape << Vertex( -1, 0, 0 );
shape << Vertex( 1, 0, 0 );
shape << Color( 1, 0, 0 );
shape << Vertex( 0, 2, 0 );
shape << End();
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << clear;
scene << Perspective( 45, 1, 10 );
scene << Translate( 0, 0, -5 );
scene << ArcBall( shape, 2 );
scene << update;

```

### PopMatrix

**構文:** obj << PopMatrix

**説明:** 現在の行列をPops。OpenGLコマンドglPopMatrixを使用。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
object = Scene Display List();
object << PushMatrix;
object << Translate( 0, 0, .1 );
object << Color( 1, 0, 0 );
object << Cylinder( 1, .4, .4, 25, 5 );
object << PopMatrix;
object << PushMatrix;
object << Translate( 0, 0, -.1 );
object << Rotate( 180, 1, 0, 0 );
object << Color( 0, 1, 0 );
object << Cylinder( 1, .4, .4, 25, 5 );
object << PopMatrix;
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << Perspective( 45, 3, 7 );
scene << Translate( 0.0, 0.0, -4.5 );
scene << Rotate( -85, 1, 0, 0 );
scene << CallList( object );
scene << Update;

```

### PopName

**構文:** obj << PopName

**説明:** pickerとともに使用する。後続のオブジェクトを識別する整数をpop。OpenGLコマンドglPopNameを使用。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
spheres = Scene Display List();
spheres << Point Size( 50 );
Spheres << PushName( 0 );
For( i = 0, i < 3, i++,
	spheres << LoadName( (i + 1) );
	spheres << PushMatrix;
	spheres << Translate( (i * 0.75 - .75), 0, 0 );
	spheres << color( 1, 0, 0 );
	spheres << Begin( POINTS );
	spheres << Vertex( 0, 0, -.0001 );
	spheres << End;
	spheres << color( 0, 0, 0 );
	spheres << Text( center, middle, 0.2, Char( (i + 1) ) );
	spheres << PopMatrix;
);
spheres << PopName;
view = Scene Box( 500, 400 );
view << Ortho( -1, 1, -1, 1, -2, 2 );
view << CallList( spheres );
view << update;
New Window( "Example", view );
Print( view << Pick( 50, 200, 1, 1, 4, 1 ) );

```

### PushAttrib

**構文:** obj << PushAttrib( mask )

**説明:** 現在の属性をPushes。OpenGLコマンドglPushAttribを使用。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
shape = Scene Display List( 0 );
shape << Color( 0, 0, 1 );
shape << PushAttrib( GL_CURRENT_BIT );
shape << Color( 0, 0, 0 );
shape << Begin( POLYGON );
shape << Vertex( -1, 0, 0 );
shape << Vertex( 1, 0, 0 );
shape << Color( 0, 1, 0 );
shape << Vertex( 1, -2, 0 );
shape << Vertex( -1, -2, 0 );
shape << End;
shape << PopAttrib;
shape << Begin( TRIANGLES );
shape << Vertex( -1, 0, 0 );
shape << Vertex( 1, 0, 0 );
shape << Color( 1, 0, 0 );
shape << Vertex( 0, 2, 0 );
shape << End();
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << clear;
scene << Perspective( 45, 1, 10 );
scene << Translate( 0, 0, -5 );
scene << ArcBall( shape, 2 );
scene << update;

```

### PushMatrix

**構文:** obj << PushMatrix

**説明:** 現在の行列をPushes。OpenGLコマンドglPushMatrixを使用。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
object = Scene Display List();
object << PushMatrix;
object << Translate( 0, 0, .1 );
object << Color( 1, 0, 0 );
object << Cylinder( 1, .4, .4, 25, 5 );
object << PopMatrix;
object << PushMatrix;
object << Translate( 0, 0, -.1 );
object << Rotate( 180, 1, 0, 0 );
object << Color( 0, 1, 0 );
object << Cylinder( 1, .4, .4, 25, 5 );
object << PopMatrix;
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << Perspective( 45, 3, 7 );
scene << Translate( 0.0, 0.0, -4.5 );
scene << Rotate( -85, 1, 0, 0 );
scene << CallList( object );
scene << Update;

```

### PushName

**構文:** obj << PushName( i )

**説明:** pickerとともに使用する。後続のオブジェクトを識別する整数をpush。OpenGLコマンドglPushNameを使用。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
spheres = Scene Display List();
spheres << Point Size( 50 );
Spheres << PushName( 0 );
For( i = 0, i < 3, i++,
	spheres << LoadName( (i + 1) );
	spheres << PushMatrix;
	spheres << Translate( (i * 0.75 - .75), 0, 0 );
	spheres << color( 1, 0, 0 );
	spheres << Begin( POINTS );
	spheres << Vertex( 0, 0, -.0001 );
	spheres << End;
	spheres << color( 0, 0, 0 );
	spheres << Text( center, middle, 0.2, Char( (i + 1) ) );
	spheres << PopMatrix;
);
spheres << PopName;
view = Scene Box( 500, 400 );
view << Ortho( -1, 1, -1, 1, -2, 2 );
view << CallList( spheres );
view << update;
New Window( "Example", view );
Print( view << Pick( 50, 200, 1, 1, 4, 1 ) );

```

### QuadricDrawStyle

**構文:** obj << QuadricDrawStyle( point|line|silhouette|fill )

**説明:** 2次曲面に使用する描画スタイルの種類を設定する。OpenGLユーティリティコマンドgluQuadricDrawStyleを使用。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
shape = Scene Display List( 0 );
shape << QuadricDrawStyle( LINE );
shape << Enable( COLOR_MATERIAL );
shape << Color( 0, 0.48, 0.72 );
shape << Material( Front, Ambient, 0, 0, 1, 1 );
shape << Material( Front, Diffuse, 0, 1, 1, 1 );
shape << Material( Front, Specular, 0, 1, 0, 1 );
shape << Material( Front, Emission, 0, 0, 0, 1 );
shape << Material( Front, Shininess, 100 );
shape << Sphere( 1.5, 50, 50 );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << clear;
scene << Perspective( 45, 1, 10 );
scene << Translate( 0.0, 0.0, -5 );
scene << Enable( Lighting );
scene << Enable( Light0 );
scene << Light( Light0, Position, 1, 1, 1, 0 );
scene << ArcBall( shape, 3 );
scene << update;

```

### QuadricNormals

**構文:** obj << QuadricNormals( none|flat|smooth )

**説明:** 2次曲面に使用するnormalsの種類を設定する。OpenGLユーティリティコマンドgluQuadricNormalsを使用。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
shape = Scene Display List( 0 );
shape << QuadricNormals( FLAT );
shape << Enable( COLOR_MATERIAL );
shape << Color( 0, 0.48, 0.72 );
shape << Material( Front, Ambient, 0, 0, 1, 1 );
shape << Material( Front, Diffuse, 0, 1, 1, 1 );
shape << Material( Front, Specular, 0, 1, 0, 1 );
shape << Material( Front, Emission, 0, 0, 0, 1 );
shape << Material( Front, Shininess, 100 );
shape << Sphere( 1.5, 50, 50 );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << clear;
scene << Perspective( 45, 1, 10 );
scene << Translate( 0.0, 0.0, -5 );
scene << Enable( Lighting );
scene << Enable( Light0 );
scene << Light( Light0, Position, 1, 1, 1, 0 );
scene << ArcBall( shape, 3 );
scene << update;

```

### QuadricOrientation

**構文:** obj << QuadricOrientation( outside|inside )

**説明:** 2次曲面に使用する方向の種類を設定する。OpenGLユーティリティコマンドgluQuadricOrientationを使用。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
shape = Scene Display List( 0 );
shape << QuadricOrientation( INSIDE );
shape << Enable( COLOR_MATERIAL );
shape << Color( 0, 0.48, 0.72 );
shape << Material( Front, Ambient, 0, 0, 1, 1 );
shape << Material( Front, Diffuse, 0, 1, 1, 1 );
shape << Material( Front, Specular, 0, 1, 0, 1 );
shape << Material( Front, Emission, 0, 0, 0, 1 );
shape << Material( Front, Shininess, 100 );
shape << Sphere( 1.5, 50, 50 );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << clear;
scene << Perspective( 45, 1, 10 );
scene << Translate( 0.0, 0.0, -5 );
scene << Enable( Lighting );
scene << Enable( Light0 );
scene << Light( Light0, Position, 1, 1, 1, 0 );
scene << ArcBall( shape, 3 );
scene << update;

```

### QuadricTexture

**構文:** obj << QuadricTexture

**JMP追加されたバージョン:** 16

### Rect

**構文:** obj << Rect( x1,y1,x2,y2 )

**説明:** 矩形を作成する。OpenGLコマンドglRectを使用。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
shape = Scene Display List( 0 );
shape << Color( 0.5, 0, 0 );
shape << Rect( -0.75, -0.75, 0.5, 0.75 );
scene = Scene Box( 200, 200 );
New Window( "Example", scene );
scene << Ortho2D( -1, 1, -1, 1 );
scene << CallList( shape );

```

### Rotate

**構文:** obj << Rotate( angle,x,y,z )

**説明:** 現在の行列に指定の回転角度(度)を掛ける。OpenGLコマンドglRotateを使用。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << Perspective( 45, 3, 7 );
scene << Translate( 0.0, 0.0, -4.5 );
scene << color( 0, 0, 1 );
scene << Rotate( 15, 0, 0, 1 );
scene << Text( center, baseline, 0.2, "Hello, World." );

```

### Scale

**構文:** obj << Scale( x,y,z )

**説明:** 現在の行列に指定のスケールを掛ける。OpenGLコマンドglScaleを使用。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << Perspective( 45, 3, 7 );
scene << Translate( 0.0, 0.0, -4.5 );
scene << color( 0, 0, 1 );
scene << Scale( 2, 1, 1 );
scene << Text( center, baseline, 0.2, "Hello, World." );

```

### Scissor

**構文:** obj << Scissor( x,y,width,height )

**説明:** scissorビュー内に表示されるアイテムのみが描画される。OpenGLコマンドglScissorを使用。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
shape = Scene Display List();
shape << Color( 1, 0, 0 );
shape << Rect( -0.5, -0.5, 0.5, 0.5 );
scene = Scene Box( 200, 200 );
New Window( "Example", scene );
scene << Scissor( 0, 0, 100, 200 );
scene << Enable( scissor_test );
scene << CallList( shape );
scene << Disable( scissor_test );

```

### ShadeModel

**構文:** obj << ShadeModel( flat|smooth )

**説明:** 後続のオブジェクトに使用する陰影の種類を指定する。OpenGLコマンドglShadeModelを使用。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
scene = Scene Box( 200, 200 );
New Window( "Example", scene );
scene << Ortho2D( -1, 1, -1, 1 );
scene << Shade Model( SMOOTH );
scene << Begin( TRIANGLES );
scene << color( 1, 0, 0 );
scene << Vertex( -1, -1, 0 );
scene << Color( 0, 1, 0 );
scene << Vertex( 0, 1, 0 );
scene << Color( 0, 0, 1 );
scene << Vertex( 1, -1, 0 );
scene << End();
scene << Update;

```

### Show ArcBall

**構文:** obj << Show ArcBall( "ドラッグ時"|"常に"|"非表示" )

**説明:** 天体球をいつ表示するかを設定する。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
shape = Scene Display List();
shape << color( 0, 0, 1 );
shape << Text( center, baseline, 0.2, "Hello, World." );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << Perspective( 45, 3, 7 );
scene << Translate( 0.0, 0.0, -4.5 );
scene << ArcBall( shape, 1 );
scene << Show ArcBall( always );
scene << Update;

```

### SortList

**構文:** obj << SortList

**JMP追加されたバージョン:** 16

### Sphere

**構文:** obj << Sphere( radius,slices,stacks )

**説明:** 球を作成する。OpenGLユーティリティコマンドgluSphereを使用。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
shape = Scene Display List( 0 );
shape << Enable( COLOR_MATERIAL );
shape << Color( 0, 0.48, 0.72 );
shape << Material( Front, Diffuse, 0, 1, 1, 1 );
shape << Material( Front, Specular, 0, 1, 0, 1 );
shape << Material( Front, Emission, 0, 0, 0, 1 );
shape << Material( Front, Shininess, 100 );
shape << Sphere( 1.5, 50, 50 );
shape << Disable( COLOR_MATERIAL );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << clear;
scene << Perspective( 45, 1, 10 );
scene << Translate( 0.0, 0.0, -5 );
scene << Enable( Lighting );
scene << Enable( Light0 );
scene << Light( Light0, Position, 1, 1, 1, 0 );
scene << ArcBall( shape, 3 );
scene << Disable( Light0 );
scene << Disable( Lighting );
scene << update;

```

### Suppress Context Menu

**構文:** obj << Suppress Context Menu( state=0|1 )

**説明:** シーンボックスのコンテキストメニューの表示を抑制する。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
shape = Scene Display List();
shape << color( 0, 0, 1 );
shape << Text( center, baseline, 0.2, "Hello, World." );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << Perspective( 45, 3, 7 );
scene << Translate( 0.0, 0.0, -4.5 );
scene << ArcBall( shape, 1 );
scene << Update;
scene << Suppress Context Menu( 1 );

```

### Text

**構文:** obj << Text( left|center|right,top|middle|baseline|bottom,size,"string" )

**説明:** SceneBoxで表示可能なテキストを作成する。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << Perspective( 45, 3, 7 );
scene << Translate( 0.0, 0.0, -4.5 );
scene << color( 0, 0, 1 );
scene << Text( center, baseline, 0.2, "Hello, World." );

```

### Translate

**構文:** obj << Translate( x,y,z )

**説明:** 現在の行列に指定の解釈を掛ける。OpenGLコマンドglTranslateを使用。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << Perspective( 45, 3, 7 );
scene << Translate( -0.9, 1.5, -4.5 );
scene << color( 0, 0, 1 );
scene << Text( center, baseline, 0.2, "Hello, World." );

```

### Update

**構文:** obj << Update

**説明:** シーンを更新する。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
scene = Scene Box( 500, 500 );
fps = Scene Display List();
window = New Window( "Frames Per Second", scene );
lastTime = 0;
frameCount = 0;
framesPerSecond = "Frames Per Second: ";
While( 1,
	time = Today();
	frameCount++;
	If( time != lastTime,
		framesPerSecond = Char( frameCount );
		frameCount = 0;
		lastTime = time;
	);
	fps << Clear;
	fps << Translate( -1, 0, 0 );
	fps << Color( 1, 0, 0 );
	fps << Text( left, baseline, .1, "Frames Per Second: " || framesPerSecond );
	scene << Clear;
	scene << CallList( fps );
	scene << Update;
	Wait( 0 );
);

```

### Use Hardware Acceleration

**構文:** obj << Use Hardware Acceleration( state=0|1 )

**説明:** ハードウェアアクセラレーションにより、表示が速くなることがある。表示に問題がある場合、(ハードウェアベンダーが提供する)新しいグラフィックドライバが必要な可能性がある。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
scene = Scene Box( 500, 500 );
fps = Scene Display List();
window = New Window( "Frames Per Second",
	scene,
	accelButton = Button Box( "Turn Hardware Acceleration On", toggleHardwareAccel() )
);
hardwareAccel = 0;
lastTime = 0;
frameCount = 0;
framesPerSecond = "Frames Per Second: ";
toggleHardwareAccel = Function( {},
	hardwareAccel = !hardwareAccel;
	scene << Use Hardware Acceleration( hardwareAccel );
	If( hardwareAccel,
		accelButton << Set Button Name( "Turn Hardware Acceleration Off" ),
		accelButton << Set Button Name( "Turn Hardware Acceleration On" )
	);
);
While( 1,
	time = Today();
	frameCount++;
	If( time != lastTime,
		framesPerSecond = Char( frameCount );
		frameCount = 0;
		lastTime = time;
	);
	fps << Clear;
	fps << Translate( -1, 0, 0 );
	fps << Color( 1, 0, 0 );
	fps << Text( left, baseline, .1, "Frames Per Second: " || framesPerSecond );
	scene << Clear;
	scene << CallList( fps );
	scene << Update;
	Wait( 0 );
);

```

### Vertex

**構文:** obj << Vertex( x,y,z )

**説明:** primitiveの頂点を指定する。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
shape = Scene Display List();
shape << Begin( POLYGON );
shape << Color( 1, 0, 0 );
shape << Vertex( -1, 0.75, 0 );
shape << Color( 0, 0, 1 );
shape << Vertex( -1, -0.75, 0 );
shape << Color( 0, 1, 0 );
shape << Vertex( 1, -0.75, 0 );
shape << Color( 1, 1, 0 );
shape << Vertex( 1, 0.75, 0 );
shape << End();
scene = Scene Box( 200, 200 );
scene << CallList( shape );
New Window( "Example", scene );

```

### Width

**構文:** obj << Width( pixels )

**説明:** ボックスの幅を設定する。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
shape = Scene Display List( 0 );
shape << Enable( COLOR_MATERIAL );
shape << Color( 0, 0.48, 0.72 );
shape << Material( Front, Diffuse, 0, 1, 1, 1 );
shape << Material( Front, Specular, 0, 1, 0, 1 );
shape << Material( Front, Emission, 0, 0, 0, 1 );
shape << Material( Front, Shininess, 100 );
shape << Sphere( 1.5, 50, 50 );
shape << Disable( COLOR_MATERIAL );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << clear;
scene << Perspective( 45, 1, 10 );
scene << Translate( 0.0, 0.0, -5 );
scene << Enable( Lighting );
scene << Enable( Light0 );
scene << Light( Light0, Position, 1, 1, 1, 0 );
scene << ArcBall( shape, 3 );
scene << Disable( Light0 );
scene << Disable( Lighting );
scene << update;
scene << Width( 150 );

```

