# LineSeg



## 共有されるメッセージ

### Enabled

**構文:** obj &lt;&lt; Enabled( state=0|1 ); state = obj &lt;&lt; Get Enabled

**説明:** 有効にされていないオブジェクトはキーボードまたはマウスによる入力に反応しない。このプロパティは子オブジェクトにも継承されるため、コンテナオブジェクトが無効になっていると、その下位のオブジェクトがすべて無効になる。

```jsl

//This message applies to all display objectsNew Window( "enabled",	V List Box(		check = Check Box(			{"Use Password"},			ptext << Enabled( check << Get( 1 ) );			pvalue << Enabled( check << Get( 1 ) );		),		Lineup Box( N Col( 2 ),			Text Box( "Username:" ),			Text Edit Box( "", <<Set Width( 100 ) ),			ptext = Text Box( "Password:", <<Enabled( 0 ) ),			pvalue = Text Edit Box( "",				<<Password Style( 1 ),				<<Set Width( 20 ),				<<Enabled( 0 )			)		)	));

```

### Get Enabled

**構文:** obj &lt;&lt; Enabled( state=0|1 ); state = obj &lt;&lt; Get Enabled

**説明:** 有効にされていないオブジェクトはキーボードまたはマウスによる入力に反応しない。このプロパティは子オブジェクトにも継承されるため、コンテナオブジェクトが無効になっていると、その下位のオブジェクトがすべて無効になる。

```jsl

//This message applies to all display objectsNew Window( "enabled",	V List Box(		check = Check Box(			{"Use Password"},			ptext << Enabled( check << Get( 1 ) );			pvalue << Enabled( check << Get( 1 ) );		),		Lineup Box( N Col( 2 ),			Text Box( "Username:" ),			Text Edit Box( "", <<Set Width( 100 ) ),			ptext = Text Box( "Password:", <<Enabled( 0 ) ),			pvalue = Text Edit Box( "",				<<Password Style( 1 ),				<<Set Width( 20 ),				<<Enabled( 0 )			)		)	));

```

### Get Namespace

**構文:** obj &lt;&lt; Get Namespace

**説明:** この表示オブジェクトの名前空間を戻す。

```jsl

//This message applies to all display objectsx = 1;w = New Window( "Test", b = Button Box( "Press me" ) );b:x = 2;ns = b << GetNamespace();Show( ns:x, x );

```

### Get Properties

**構文:** obj &lt;&lt; Get Properties

**説明:** ディスプレイボックスのプロパティとその値を含む連想配列を戻す。

```jsl

New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );bb << Get Properties;

```

### Get Property

**構文:** obj &lt;&lt; Get Property( "property" )

**説明:** propertyで指定したプロパティの現在の設定を戻す。

```jsl

New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );bb << Get Property( "Enabled" );

```

### Get Property List

**構文:** obj &lt;&lt; Get Property List

**説明:** ディスプレイボックスの持つプロパティのリストを戻す。

```jsl

New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );bb << Get Property List;

```

### Set Property

**構文:** obj &lt;&lt; Set Property( "property", value )

**説明:** ディスプレイボックスの、propertyで指定した名前のプロパティに値を設定する。

```jsl

New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );bb << Set Property( "Enabled", 0 );

```

## 関連するコンストラクター

### Line Seg

**構文:** ls = Line Seg(x values, y values, &lt;Row States( dt | dt,[rows] | dt,{{rows}, ...} | {states} ) &gt;, &lt; Sizes( s ) &gt; )&gt;)

**説明:** 折れ線を描くディスプレイセグメントを作成する。第3引数(オプション)は、データテーブル(dt)から、または個別に行属性の割り当てを可能にする。

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));

```

## 項目のメッセージ

### Arrowhead

**構文:** obj &lt;&lt; Arrowhead( "None"|"Start"|"End"|"Both" )

**説明:** ラインセグメントの矢じりの種類を設定する。

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Set Arrowhead( "Both" );

```

### Child

**構文:** seg2 = obj &lt;&lt; Child

**説明:** ディスプレイセグメントの最初の子を戻す。

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Child; // not many segs support children

```

### Class Name

**構文:** classname = obj &lt;&lt; Class Name

**説明:** ディスプレイボックスのクラス名を戻す。

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Class Name;

```

### Clip Shape

**構文:** seg &lt;&lt; Clip Shape(Boundaries(Shape File, [ID(string)]) | Path([string] | [matrix]) | Empty())

**説明:** 指定された地図シェープをもとに図やグラフをクリッピングする。クリッピングする領域は、シェープファイルやパスによって指定できる。シェープファイルを使用する場合は、IDをオプション指定してファイルの中から1つの領域を選択することもできる。IDを指定しなかった場合は、すべての領域を結合したものがクリッピング領域として使われる。Nx3行列やテキスト表記を使ってクリッピングするパスを指定することもできる。パスの行列は、X座標、Y座標、フラグの3列で構成される。フラグは0がコントロール点、1が移動、2が線分、3が3次ベジエ曲線で、パスを閉じる点の場合は負の値を指定する。一方、パスをテキスト表記するときにはSVG構文を使用する。

**JMP追加されたバージョン:** 14

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Size( 653, 396 ),	Show Control Panel( 0 ),	Variables( X( :Longitude ), Y( :Latitude ) ),	Elements( Contour( X, Y, Legend( 2 ) ) ),	SendToReport(		Dispatch( {}, "Graph Builder", FrameBox,			{Background Map( Boundaries( "US States" ) ), Grid Line Order( 2 ),			Reference Line Order( 3 )}		)	));cs = (gb << Report)[FrameBox( 1 )] << Find Seg( Contour Seg( 1 ) );Wait( 2 );cs << Clip Shape( Boundaries( "US States" ) );

```

### Color Theme

**構文:** obj &lt;&lt; Color Theme

### Delete

**構文:** obj &lt;&lt; Delete

**説明:** ディスプレイセグメントを削除する。

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Delete;

```

### Density Gradient

**構文:** obj &lt;&lt; Density Gradient( "白へフェードアウト"|"グレーへフェードアウト"|"フルカラー"="白へフェードアウト" )

**説明:** 密度グラデーションの色付けの動作を設定する。 デフォルトの値は"白へフェードアウト"。

**JMP追加されたバージョン:** 15

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Density Gradient( "Fade to Gray" );

```

### Error Bar Cap

**構文:** obj &lt;&lt; Error Bar Cap( "なし"|"極小"|"小"|"中"|"大" )

**説明:** 誤差バーの終端に描くキャップの種類を指定する。

**JMP追加されたバージョン:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :Age ), Y( :Height ) ),	Elements( Line( X, Y, Legend( 4 ), Error Bars( "Range" ) ) ), );frame = Report( obj )[FrameBox( 1 )];seg = (frame << Find Seg( "Bar Seg" ));seg << Set Error Bar Cap( "Large" );

```

### Error Bar Cap Shape

**構文:** obj &lt;&lt; Error Bar Cap Shape( begin, end )

**説明:** 誤差バーに表示するキャップの形状を指定する。1つの引数で棒の両端の形状を設定するか、2つの引数で始端と終端を別々に設定する。デフォルトの形状は"Line"。"Arrow"を指定すると、外側を向いた矢印が描かれ、"None"を指定するとキャップが省略される。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :Age ), Y( :Height ) ),	Elements( Line( X, Y, Legend( 4 ), Error Bars( "Range" ) ) ), );frame = Report( obj )[FrameBox( 1 )];seg = (frame << Find Seg( "Bar Seg" ));seg << Set Error Bar Cap Shape( "Line", "Arrow" );

```

### First Value

**構文:** obj &lt;&lt; First Value( state=0|1 )

**JMP追加されたバージョン:** 16

### Frame

**構文:** FrameBox = obj &lt;&lt; Frame

**説明:** ディスプレイセグメントがあるフレームボックスを戻す。

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Frame;

```

### Get Arrowhead

**構文:** obj &lt;&lt; Get Arrowhead

**説明:** 現在指定されているラインセグメントの矢じりの設定を取得する。

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Set Arrowhead( "Both" );Show( seg << Get Arrowhead );

```

### Get Clip Shape

**構文:** obj &lt;&lt; Get Clip Shape

**説明:** 現在、クリッピングしている領域を戻す。

**JMP追加されたバージョン:** 14

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Size( 653, 396 ),	Show Control Panel( 0 ),	Variables( X( :Longitude ), Y( :Latitude ) ),	Elements( Contour( X, Y, Legend( 2 ) ) ),	SendToReport(		Dispatch( {}, "Graph Builder", FrameBox,			{Background Map( Boundaries( "US States" ) ), Grid Line Order( 2 ),			Reference Line Order( 3 )}		)	));cs = (gb << Report)[FrameBox( 1 )] << Find Seg( Contour Seg( 1 ) );cs << Clip Shape( Boundaries( "US States" ) );Wait( 2 );cs << Get Clip Shape();

```

### Get Connect Missing

**構文:** obj &lt;&lt; Get Connect Missing

**説明:** 欠測値のつなぎ方を取得する。[実線でつなぐ]、[薄い線でつなぐ]、[点線でつなぐ]、[つながない]のいずれか。

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));Show( seg << Get Connect Missing() );

```

### Get Density Gradient

**構文:** obj &lt;&lt; Get Density Gradient

**説明:** 密度グラデーションの色付けの動作を取得する。

**JMP追加されたバージョン:** 15

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Get Density Gradient;

```

### Get Description

**構文:** description = obj &lt;&lt; Get Description

**説明:** ディスプレイセグメントの名前を取得する。

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << get description();

```

### Get Error Bar Cap

**構文:** obj &lt;&lt; Get Error Bar Cap

**説明:** 現在、誤差バーのキャップにどの種類が使われているかを戻す。

**JMP追加されたバージョン:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :Age ), Y( :Height ) ),	Elements( Line( X, Y, Legend( 4 ), Error Bars( "Range" ) ) ), );frame = Report( obj )[FrameBox( 1 )];seg = (frame << Find Seg( "Bar Seg" ));seg << Get Error Bar Cap();

```

### Get Error Bar Cap Shape

**構文:** { begin, end } = obj &lt;&lt; Get Error Bar Cap Shape

**説明:** 誤差バーのキャップの形状を戻す。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :Age ), Y( :Height ) ),	Elements( Line( X, Y, Legend( 4 ), Error Bars( "Range" ) ) ), );frame = Report( obj )[FrameBox( 1 )];seg = (frame << Find Seg( "Bar Seg" ));seg << Get Error Bar Cap Shape();

```

### Get Gradient

**構文:** obj &lt;&lt; Get Gradient

**説明:** 色のグラデーションを取得する。

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Get Gradient;

```

### Get Gradient Color Theme

**構文:** obj &lt;&lt; Get Gradient Color Theme

**説明:** グラデーションのカラーテーマを取得する。

**JMP追加されたバージョン:** 18

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Get Gradient Color Theme;

```

### Get Gradient Discrete Colors

**構文:** obj &lt;&lt; Get Gradient Discrete Colors

**説明:** グラデーションの各水準を均一の色にするか、色の境目を滑らかに変化させるかを取得する。

**JMP追加されたバージョン:** 18

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Get Gradient Discrete Colors;

```

### Get Gradient Fill

**構文:** obj &lt;&lt; Get Gradient Fill

**説明:** グラデーションのスケールの範囲外にある値について、色付けの方法を取得する。

**JMP追加されたバージョン:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Contour Seg( 1 ) );seg << Get Gradient Fill;

```

### Get Gradient Label Count

**構文:** obj &lt;&lt; Get Gradient Label Count

**説明:** グラデーションの凡例に表示されるラベルの数を取得する。

**JMP追加されたバージョン:** 18

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Get Gradient Label Count;

```

### Get Gradient Label Levels

**構文:** [value1,value1, ... value N] = obj &lt;&lt; Get Gradient Label Levels

**説明:** グラデーションのスケールのラベルに使用される値のセットを取得する。

**JMP追加されたバージョン:** 18

**例 1**

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Contour Seg( 1 ) );seg << Get Gradient Scale Values;

```

**例 2**

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Contour Seg( 1 ) );seg << Set Gradient Scale Values( [-10.0, 0.0, 100] );seg << Get Gradient Scale Values;

```

### Get Gradient Legend Horizontal

**構文:** obj &lt;&lt; Get Gradient Legend Horizontal

**説明:** グラデーションの凡例を横方向に表示するかどうかを取得する。

**JMP追加されたバージョン:** 18

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Get Gradient Legend Horizontal;

```

### Get Gradient Legend Label Format

**構文:** obj &lt;&lt; Get Gradient Legend Label Format

**説明:** グラデーションの凡例ラベルの表示形式を取得する。

**JMP追加されたバージョン:** 18

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Get Gradient Legend Label Format;

```

### Get Gradient Legend Label Width

**構文:** obj &lt;&lt; Get Gradient Legend Label Width

**説明:** グラデーションの凡例ラベルの最大文字数を取得する。

**JMP追加されたバージョン:** 18

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Get Gradient Legend Label Width;

```

### Get Gradient Legend Show Labels

**構文:** obj &lt;&lt; Get Gradient Legend Show Labels

**説明:** グラデーションの凡例に水準ラベルを表示するかどうかを取得する。

**JMP追加されたバージョン:** 18

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Get Gradient Legend Show Labels;

```

### Get Gradient Level Count

**構文:** obj &lt;&lt; Get Gradient Level Count

**説明:** グラデーションの水準数を取得する。

**JMP追加されたバージョン:** 18

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Get Gradient Levels;

```

### Get Gradient Lightness Range

**構文:** obj &lt;&lt; Get Gradient Lightness Range

**説明:** グラデーションの水準の色について、明度の最小値と最大値を取得する。欠測値は、カラーテーマの元の値が使用されることを示す。

**JMP追加されたバージョン:** 18

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Get Gradient Lightness Range;

```

### Get Gradient Range

**構文:** obj &lt;&lt; Get Gradient Range

**説明:** カスタムではないグラデーションのスケールの範囲を取得する。

**JMP追加されたバージョン:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Contour Seg( 1 ) );seg << Get Gradient Range;

```

### Get Gradient Reverse Color Order

**構文:** obj &lt;&lt; Get Gradient Reverse Color Order

**説明:** グラデーションの色の順序が逆かどうかを取得する。

**JMP追加されたバージョン:** 18

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Get Gradient Reverse Color Order;

```

### Get Gradient Reverse Label Order

**構文:** obj &lt;&lt; Get Gradient Reverse Label Order

**説明:** グラデーション内のラベルの順序が逆かどうかを取得する。

**JMP追加されたバージョン:** 18

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Get Gradient Reverse Label Order;

```

### Get Gradient Scale

**構文:** obj &lt;&lt; Get Gradient Scale

**説明:** グラデーションのスケールの種類を取得する。

**JMP追加されたバージョン:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Contour Seg( 1 ) );seg << Get Gradient Scale;

```

### Get Gradient Scale Values

**構文:** [value1,value1, ... value N] = obj &lt;&lt; Get Gradient Scale Values

**説明:** グラデーションのスケールのラベルに使用される値のセットを取得する。

**JMP追加されたバージョン:** 18

**例 1**

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Contour Seg( 1 ) );seg << Get Gradient Scale Values;

```

**例 2**

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Contour Seg( 1 ) );seg << Set Gradient Scale Values( [-10.0, 0.0, 100] );seg << Get Gradient Scale Values;

```

### Get Gradient Show Missing

**構文:** obj &lt;&lt; Get Gradient Show Missing

**説明:** 凡例に欠測値を表示するかどうかを取得する。

**JMP追加されたバージョン:** 18

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Get Gradient Show Missing;

```

### Get Gradient Transparency

**構文:** obj &lt;&lt; Get Gradient Transparency

**説明:** グラデーションの透明度を取得する。

**JMP追加されたバージョン:** 15

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Get Gradient Transparency;

```

### Get Interval Draw Directions

**構文:** obj &lt;&lt; Get Interval Draw Directions

**説明:** 区間を描画する方向を取得する。

**JMP追加されたバージョン:** 17

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :age ), Y( :weight ) ),	Elements(		Points(			X,			Y,			Legend( 3 ),			Summary Statistic( "Mean" ),			Error Interval( "Standard Deviation" )		)	),	SendToReport(		Dispatch( {}, "Graph Builder", FrameBox,			{Reference Line Order( 3 ), DispatchSeg(				BarSeg( 1 ),				{Set Interval Draw Directions( "Upper" )}			)}		)	));frame = Report( obj )[FrameBox( 1 )];seg = (frame << Find Seg( "Bar Seg" ));seg << Get Interval Draw Directions;

```

### Get Line Color

**構文:** color = obj &lt;&lt; Get Line Color

**説明:** 線の色を戻す。

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Get Line Color;

```

### Get Line Style

**構文:** pen style = obj &lt;&lt; Get Line Style

**説明:** 線種を戻す。

**JMP追加されたバージョン:** 14

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Get Line Style;

```

### Get Line Width

**構文:** number = obj &lt;&lt; Get Line Width

**説明:** 線の幅を戻す。

**JMP追加されたバージョン:** 14

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Get Line Width;

```

### Get Log Curve

**構文:** 0|1 = obj &lt;&lt; Get Log Curve

**説明:** 対数曲線の設定をする。グラフに対数スケールの軸がある場合に、線形軸のときと同じx値とy値の点を結んで曲線が描かれる。

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));// Change Y Axis scale to Logg[AxisBox( 1 )] << Scale( "Log" );seg << Set Log Curve( 1 );seg << Get Log Curve;

```

### Get Marker

**構文:** marker = obj &lt;&lt; Get Marker

**説明:** マーカーの種類を戻す。

**JMP追加されたバージョン:** 14

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Get Marker;

```

### Get Marker Size

**構文:** size = obj &lt;&lt; Get Marker Size

**説明:** マーカーのサイズを戻す。

**JMP追加されたバージョン:** 14

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Get Marker Size;

```

### Get Point

**構文:** point = obj &lt;&lt; Get Point( index )

**説明:** 指定の点の(x,y)座標を戻す。

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Get Point( 2 );

```

### Get Point Count

**構文:** Number = obj &lt;&lt; Get Point Count

**説明:** ディスプレイセグメント内の点の数を戻す。

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Get Point Count;

```

### Get Row Numbers

**構文:** matrix = obj &lt;&lt; Get Row Numbers

**説明:** マーカーの行番号のベクトルを戻す。

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Get Row Numbers;

```

### Get Smooth

**構文:** 0|1 = obj &lt;&lt; Get Smooth

**説明:** 平滑化曲線の設定を戻す。

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Set Smooth( 1 );seg << Get Smooth;

```

### Get Smoothness

**構文:** 0..1 = obj &lt;&lt; Get Smoothness

**説明:** 平滑化曲線の設定を戻す。

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Set Smoothness( 0.5 );seg << Get Smoothness;

```

### Get Unconnected Marker

**構文:** obj &lt;&lt; Get Unconnected Marker

**説明:** Line Segmentの中で線がつながっていない単独の点に使用するマーカーを取得する。

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));Show( seg << Get Unconnected Marker() );

```

### Get X Values

**構文:** matrix = obj &lt;&lt; Get X Values

**説明:** X座標の値のベクトルを戻す。

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Get X Values;

```

### Get Y Values

**構文:** matrix = obj &lt;&lt; Get Y Values

**説明:** Y座標の値のベクトルを戻す。

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Get Y Values;

```

### Get halfpoint is unbounded line

**構文:** 0|1 = obj &lt;&lt; Get halfpoint is unbounded line

**説明:** 1つの座標が欠測値である点を、直線として処理するかどうかを戻す。

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Get halfpoint is unbounded line;

```

### Gradient

**構文:** obj &lt;&lt; { &lt;Color Theme(theme)&gt;, &lt;Min Lightness(0-1)&gt;, &lt;Max Lightness(0-1)&gt;, &lt;Contour Levels(num)&gt;, &lt;Reverse Gradient(0|1)&gt;, &lt;Density Gradient("Fade To White"|"Fade To Gray"|"Full Color")&gt;, &lt;Gradient Transparency("None"|"Linear")&gt; } obj &lt;&lt; { &lt;Color Theme(theme)&gt;, &lt;Min Lightness(0-1)&gt;, &lt;Max Lightness(0-1)&gt;, &lt;N Labels(num)&gt;, &lt;Show Missing Color("On"|"Off"|"Auto")&gt;, &lt;Scale Type("Linear"|"Quantile"|"Standard Deviation"|"Log"|"Log Offset"|"Custom")&gt;, &lt;Scale Values([v1, v2, …])&gt;, &lt;Range Type("Default"|"Exact Data Range"|"Middle 90%")&gt;, &lt;Fill("Between"|"Above"|"Below"|"Above Below")&gt;, &lt;Reverse Gradient(0|1)&gt;, &lt;Reverse Labels(0|1)&gt;, &lt;Discrete Color(0|1)&gt; }, &lt;Label Format(labelFormat)&gt;, &lt;Width(num)&gt;, &lt;Horizontal(0|1)&gt;, &lt;Show Labels(0|1)&gt;

**説明:** 色のグラデーションを設定する。

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Set Gradient( {Color Theme( "Viridis" ), N Labels( 7 )} );

```

### Gradient Color Theme

**構文:** obj &lt;&lt; Gradient Color Theme

**説明:** グラデーションのカラーテーマを設定する。

**JMP追加されたバージョン:** 18

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Set Gradient Color Theme( "Viridis" );

```

### Gradient Discrete Colors

**構文:** obj &lt;&lt; Gradient Discrete Colors

**説明:** グラデーションの各水準を均一の色にするか、色の境目を滑らかに変化させるかを設定する。

**JMP追加されたバージョン:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Points( X, Y ) ) );frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Marker Seg( 1 ) );seg << Set Gradient Discrete Colors( 1 );

```

### Gradient Fill

**構文:** obj &lt;&lt; Gradient Fill( "間"|"上"|"下"|"上下"="上下" )

**説明:** グラデーションのスケールの範囲外にある値について、色付けの方法を設定する。 デフォルトの値は"上下"。

**JMP追加されたバージョン:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Contour Seg( 1 ) );seg << Set Gradient Range( "Middle 90%" );seg << Set Gradient Fill( "Between" );

```

### Gradient Label Count

**構文:** obj &lt;&lt; Gradient Label Count

**説明:** グラデーションの凡例に表示するラベルの数を設定する。これは、等高線の水準数に1を足した値。

**JMP追加されたバージョン:** 18

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Set Gradient Label Count( 8 );

```

### Gradient Label Levels

**構文:** obj &lt;&lt; Gradient Label Levels( [value1,value1, ... value N] )

**説明:** グラデーションのスケールに使用する値のセットを設定する。

**JMP追加されたバージョン:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Contour Seg( 1 ) );seg << Set Gradient Scale Values( [-10.0, 0.0, 10.0] );

```

### Gradient Legend Horizontal

**構文:** obj &lt;&lt; Gradient Legend Horizontal

**説明:** グラデーションの凡例を横方向に表示するかどうかを設定する。

**JMP追加されたバージョン:** 18

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Set Gradient Legend Horizontal( 1 );

```

### Gradient Legend Label Format

**構文:** obj &lt;&lt; Gradient Legend Label Format

**説明:** グラデーションの凡例ラベルの表示形式を設定する。

**JMP追加されたバージョン:** 18

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Set Gradient Legend Label Format( "Fixed Dec", 6, 3 );

```

### Gradient Legend Label Width

**構文:** obj &lt;&lt; Gradient Legend Label Width

**説明:** グラデーションの凡例ラベルの最大長さ(文字数)を設定する。

**JMP追加されたバージョン:** 18

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Set Gradient Legend Label Width( 4 );

```

### Gradient Legend Show Labels

**構文:** obj &lt;&lt; Gradient Legend Show Labels

**説明:** グラデーションの凡例に水準ラベルを表示するかどうかを設定する。

**JMP追加されたバージョン:** 18

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Set Gradient Legend Show Labels( 0 );

```

### Gradient Level Count

**構文:** obj &lt;&lt; Gradient Level Count

**説明:** グラデーションの水準数を設定する。これは、ラベルの数から1を引いた値。

**JMP追加されたバージョン:** 18

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Set Gradient Levels( 7 );

```

### Gradient Lightness Range

**構文:** obj &lt;&lt; Gradient Lightness Range

**説明:** グラデーションの水準の色について、明度の最小値と最大値を設定する。この範囲をカバーするような色が使われる。欠測値は変化なしとして扱われる。

**JMP追加されたバージョン:** 18

**例 1**

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Set Gradient Lightness Range( Min( 0.25 ), Max( 0.75 ) );

```

**例 2**

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Set Gradient Lightness Range( 0.25, 0.75 );

```

**例 3**

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Set Gradient Lightness Range( ., 0.75 );

```

### Gradient Range

**構文:** obj &lt;&lt; Gradient Range( "デフォルト"|"正確なデータ範囲"|"中央部 90%"="デフォルト" )

**説明:** カスタムではないグラデーションのスケールの範囲を設定する。 デフォルトの値は"デフォルト"。

**JMP追加されたバージョン:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Contour Seg( 1 ) );seg << Set Gradient Range( "Exact Data Range" );

```

### Gradient Reverse Color Order

**構文:** obj &lt;&lt; Gradient Reverse Color Order

**説明:** グラデーションの色の順序を逆にする。

**JMP追加されたバージョン:** 18

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Set Gradient Reverse Color Order( 1 );

```

### Gradient Reverse Label Order

**構文:** obj &lt;&lt; Gradient Reverse Label Order

**説明:** グラデーションのラベルの順序を逆にする。

**JMP追加されたバージョン:** 18

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Set Gradient Reverse Label Order( 1 );

```

### Gradient Scale

**構文:** obj &lt;&lt; Gradient Scale( "線形"|"分位点"|"標準偏差"|"対数"|"対数オフセット"|"カスタム"="線形" )

**説明:** グラデーションのスケールの種類を設定する。 デフォルトの値は"線形"。

**JMP追加されたバージョン:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Contour Seg( 1 ) );seg << Set Gradient Scale( "Quantile" );

```

### Gradient Scale Values

**構文:** obj &lt;&lt; Gradient Scale Values( [value1,value1, ... value N] )

**説明:** グラデーションのスケールに使用する値のセットを設定する。

**JMP追加されたバージョン:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Contour Seg( 1 ) );seg << Set Gradient Scale Values( [-10.0, 0.0, 10.0] );

```

### Gradient Show Missing

**構文:** obj &lt;&lt; Gradient Show Missing( "自動"|"オン"|"オフ"="自動" )

**説明:** 凡例に欠測値を表示するかどうかを設定する。 デフォルトの値は"自動"。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );gb = Graph Builder(	Variables( X( :city ), Y( :POP ), Color( :NO ) ),	Elements( Bar( X, Y ) ));frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Bar Seg( 1 ) );seg << Set Gradient Show Missing( "Off" );

```

### Gradient Transparency

**構文:** obj &lt;&lt; Gradient Transparency( "なし"|"線形"="線形" )

**説明:** グラデーションの透明度を設定する。 デフォルトの値は"線形"。

**JMP追加されたバージョン:** 15

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Gradient Transparency( "None" );

```

### Label Offset

**構文:** obj &lt;&lt; Label Offset

**JMP追加されたバージョン:** 16

### Last Value

**構文:** obj &lt;&lt; Last Value( state=0|1 )

**JMP追加されたバージョン:** 16

### Line Color

**構文:** obj &lt;&lt; Line Color( color )

**説明:** ディスプレイセグメント内のすべての線の色を設定する。

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Set Line Color( "Green" );

```

### Line Style

**構文:** obj &lt;&lt; Line Style( pen style )

**説明:** 線種を設定する。オプションはSolid(実線)、Dotted(点線)、Dashed(破線)、DashDot(一点鎖線)、DashDotDot(二点鎖線)。

**JMP追加されたバージョン:** 14

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Set Line Style( "Dotted" );

```

### Line Width

**構文:** obj &lt;&lt; Line Width( "1"|"2"|"3"|"4"|"5"|"6"|"その他..." )

**説明:** 線の幅を設定する。

**JMP追加されたバージョン:** 14

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Set Line Width( 3 );

```

### Marker

**構文:** obj &lt;&lt; Marker( marker )

**説明:** すべてのマーカーの種類を設定する。

**JMP追加されたバージョン:** 14

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Set Marker( "Square" );

```

### Marker Size

**構文:** obj &lt;&lt; Marker Size( size )

**説明:** マーカーのサイズを設定する。サイズのオプションはDot(ドット)、Small(小)、Medium(中)、Large(大)、XL、XXL、XXXL。

**JMP追加されたバージョン:** 14

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Set Marker( "Square" );seg << Set Marker Size( "XL" );

```

### Max Value

**構文:** obj &lt;&lt; Max Value( state=0|1 )

**JMP追加されたバージョン:** 16

### Min Value

**構文:** obj &lt;&lt; Min Value( state=0|1 )

**JMP追加されたバージョン:** 16

### Name

**構文:** obj &lt;&lt; Name( state=0|1 )

**JMP追加されたバージョン:** 16

### Parent

**構文:** seg2 = obj &lt;&lt; Parent

**説明:** ディスプレイセグメントの親を戻す。

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Parent;

```

### Set Arrowhead

**構文:** obj &lt;&lt; Set Arrowhead( "None"|"Start"|"End"|"Both" )

**説明:** ラインセグメントの矢じりの種類を設定する。

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Set Arrowhead( "Both" );

```

### Set Connect Missing

**構文:** obj &lt;&lt; Set Connect Missing( "実線でつなぐ"|"薄い線でつなぐ"|"点線でつなぐ"|"つながない" )

**説明:** 欠測値のつなぎ方を設定する。[実線でつなぐ]、[薄い線でつなぐ]、[点線でつなぐ]、[つながない]のいずれか。

```jsl

x = (1 :: 9) * 10;y = [10, 20, ., 60, ., 40, 30, ., 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Set Connect Missing( "Connect Faded" );

```

### Set Description

**構文:** obj &lt;&lt; Set Description( description )

**説明:** ディスプレイセグメントの名前を設定する。

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << set description( "my seg" );

```

### Set Error Bar Cap

**構文:** obj &lt;&lt; Set Error Bar Cap( "なし"|"極小"|"小"|"中"|"大" )

**説明:** 誤差バーの終端に描くキャップの種類を指定する。

**JMP追加されたバージョン:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :Age ), Y( :Height ) ),	Elements( Line( X, Y, Legend( 4 ), Error Bars( "Range" ) ) ), );frame = Report( obj )[FrameBox( 1 )];seg = (frame << Find Seg( "Bar Seg" ));seg << Set Error Bar Cap( "Large" );

```

### Set Error Bar Cap Shape

**構文:** obj &lt;&lt; Set Error Bar Cap Shape( begin, end )

**説明:** 誤差バーに表示するキャップの形状を指定する。1つの引数で棒の両端の形状を設定するか、2つの引数で始端と終端を別々に設定する。デフォルトの形状は"Line"。"Arrow"を指定すると、外側を向いた矢印が描かれ、"None"を指定するとキャップが省略される。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :Age ), Y( :Height ) ),	Elements( Line( X, Y, Legend( 4 ), Error Bars( "Range" ) ) ), );frame = Report( obj )[FrameBox( 1 )];seg = (frame << Find Seg( "Bar Seg" ));seg << Set Error Bar Cap Shape( "Line", "Arrow" );

```

### Set Gradient

**構文:** obj &lt;&lt; { &lt;Color Theme(theme)&gt;, &lt;Min Lightness(0-1)&gt;, &lt;Max Lightness(0-1)&gt;, &lt;Contour Levels(num)&gt;, &lt;Reverse Gradient(0|1)&gt;, &lt;Density Gradient("Fade To White"|"Fade To Gray"|"Full Color")&gt;, &lt;Gradient Transparency("None"|"Linear")&gt; } obj &lt;&lt; { &lt;Color Theme(theme)&gt;, &lt;Min Lightness(0-1)&gt;, &lt;Max Lightness(0-1)&gt;, &lt;N Labels(num)&gt;, &lt;Show Missing Color("On"|"Off"|"Auto")&gt;, &lt;Scale Type("Linear"|"Quantile"|"Standard Deviation"|"Log"|"Log Offset"|"Custom")&gt;, &lt;Scale Values([v1, v2, …])&gt;, &lt;Range Type("Default"|"Exact Data Range"|"Middle 90%")&gt;, &lt;Fill("Between"|"Above"|"Below"|"Above Below")&gt;, &lt;Reverse Gradient(0|1)&gt;, &lt;Reverse Labels(0|1)&gt;, &lt;Discrete Color(0|1)&gt; }, &lt;Label Format(labelFormat)&gt;, &lt;Width(num)&gt;, &lt;Horizontal(0|1)&gt;, &lt;Show Labels(0|1)&gt;

**説明:** 色のグラデーションを設定する。

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Set Gradient( {Color Theme( "Viridis" ), N Labels( 7 )} );

```

### Set Gradient Color Theme

**構文:** obj &lt;&lt; Set Gradient Color Theme

**説明:** グラデーションのカラーテーマを設定する。

**JMP追加されたバージョン:** 18

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Set Gradient Color Theme( "Viridis" );

```

### Set Gradient Custom Scale

**構文:** obj &lt;&lt; Set Gradient Custom Scale

**説明:** 指定した値のリストにより、グラデーションにカスタムスケールを設定する。

**JMP追加されたバージョン:** 18

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Set Gradient Custom Scale( {0.0, 5.0, 10.0, 20.0} );

```

### Set Gradient Discrete Colors

**構文:** obj &lt;&lt; Set Gradient Discrete Colors

**説明:** グラデーションの各水準を均一の色にするか、色の境目を滑らかに変化させるかを設定する。

**JMP追加されたバージョン:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Points( X, Y ) ) );frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Marker Seg( 1 ) );seg << Set Gradient Discrete Colors( 1 );

```

### Set Gradient Fill

**構文:** obj &lt;&lt; Set Gradient Fill( "間"|"上"|"下"|"上下"="上下" )

**説明:** グラデーションのスケールの範囲外にある値について、色付けの方法を設定する。 デフォルトの値は"上下"。

**JMP追加されたバージョン:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Contour Seg( 1 ) );seg << Set Gradient Range( "Middle 90%" );seg << Set Gradient Fill( "Between" );

```

### Set Gradient Label Count

**構文:** obj &lt;&lt; Set Gradient Label Count

**説明:** グラデーションの凡例に表示するラベルの数を設定する。これは、等高線の水準数に1を足した値。

**JMP追加されたバージョン:** 18

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Set Gradient Label Count( 8 );

```

### Set Gradient Label Levels

**構文:** obj &lt;&lt; Set Gradient Label Levels( [value1,value1, ... value N] )

**説明:** グラデーションのスケールに使用する値のセットを設定する。

**JMP追加されたバージョン:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Contour Seg( 1 ) );seg << Set Gradient Scale Values( [-10.0, 0.0, 10.0] );

```

### Set Gradient Legend Horizontal

**構文:** obj &lt;&lt; Set Gradient Legend Horizontal

**説明:** グラデーションの凡例を横方向に表示するかどうかを設定する。

**JMP追加されたバージョン:** 18

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Set Gradient Legend Horizontal( 1 );

```

### Set Gradient Legend Label Format

**構文:** obj &lt;&lt; Set Gradient Legend Label Format

**説明:** グラデーションの凡例ラベルの表示形式を設定する。

**JMP追加されたバージョン:** 18

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Set Gradient Legend Label Format( "Fixed Dec", 6, 3 );

```

### Set Gradient Legend Label Width

**構文:** obj &lt;&lt; Set Gradient Legend Label Width

**説明:** グラデーションの凡例ラベルの最大長さ(文字数)を設定する。

**JMP追加されたバージョン:** 18

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Set Gradient Legend Label Width( 4 );

```

### Set Gradient Legend Show Labels

**構文:** obj &lt;&lt; Set Gradient Legend Show Labels

**説明:** グラデーションの凡例に水準ラベルを表示するかどうかを設定する。

**JMP追加されたバージョン:** 18

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Set Gradient Legend Show Labels( 0 );

```

### Set Gradient Level Count

**構文:** obj &lt;&lt; Set Gradient Level Count

**説明:** グラデーションの水準数を設定する。これは、ラベルの数から1を引いた値。

**JMP追加されたバージョン:** 18

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Set Gradient Levels( 7 );

```

### Set Gradient Lightness Range

**構文:** obj &lt;&lt; Set Gradient Lightness Range

**説明:** グラデーションの水準の色について、明度の最小値と最大値を設定する。この範囲をカバーするような色が使われる。欠測値は変化なしとして扱われる。

**JMP追加されたバージョン:** 18

**例 1**

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Set Gradient Lightness Range( Min( 0.25 ), Max( 0.75 ) );

```

**例 2**

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Set Gradient Lightness Range( 0.25, 0.75 );

```

**例 3**

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Set Gradient Lightness Range( ., 0.75 );

```

### Set Gradient Range

**構文:** obj &lt;&lt; Set Gradient Range( "デフォルト"|"正確なデータ範囲"|"中央部 90%"="デフォルト" )

**説明:** カスタムではないグラデーションのスケールの範囲を設定する。 デフォルトの値は"デフォルト"。

**JMP追加されたバージョン:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Contour Seg( 1 ) );seg << Set Gradient Range( "Exact Data Range" );

```

### Set Gradient Reverse Color Order

**構文:** obj &lt;&lt; Set Gradient Reverse Color Order

**説明:** グラデーションの色の順序を逆にする。

**JMP追加されたバージョン:** 18

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Set Gradient Reverse Color Order( 1 );

```

### Set Gradient Reverse Label Order

**構文:** obj &lt;&lt; Set Gradient Reverse Label Order

**説明:** グラデーションのラベルの順序を逆にする。

**JMP追加されたバージョン:** 18

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Set Gradient Reverse Label Order( 1 );

```

### Set Gradient Scale

**構文:** obj &lt;&lt; Set Gradient Scale( "線形"|"分位点"|"標準偏差"|"対数"|"対数オフセット"|"カスタム"="線形" )

**説明:** グラデーションのスケールの種類を設定する。 デフォルトの値は"線形"。

**JMP追加されたバージョン:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Contour Seg( 1 ) );seg << Set Gradient Scale( "Quantile" );

```

### Set Gradient Scale Values

**構文:** obj &lt;&lt; Set Gradient Scale Values( [value1,value1, ... value N] )

**説明:** グラデーションのスケールに使用する値のセットを設定する。

**JMP追加されたバージョン:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Contour Seg( 1 ) );seg << Set Gradient Scale Values( [-10.0, 0.0, 10.0] );

```

### Set Gradient Show Missing

**構文:** obj &lt;&lt; Set Gradient Show Missing( "自動"|"オン"|"オフ"="自動" )

**説明:** 凡例に欠測値を表示するかどうかを設定する。 デフォルトの値は"自動"。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );gb = Graph Builder(	Variables( X( :city ), Y( :POP ), Color( :NO ) ),	Elements( Bar( X, Y ) ));frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Bar Seg( 1 ) );seg << Set Gradient Show Missing( "Off" );

```

### Set Interval Draw Directions

**構文:** obj &lt;&lt; Set Interval Draw Directions( Both|Upper|Lower|None )

**説明:** 区間を描画する方向を設定する。

**JMP追加されたバージョン:** 17

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :age ), Y( :weight ) ),	Elements(		Points(			X,			Y,			Legend( 3 ),			Summary Statistic( "Mean" ),			Error Interval( "Standard Deviation" )		)	),	SendToReport(		Dispatch( {}, "Graph Builder", FrameBox,			{Reference Line Order( 3 ), DispatchSeg(				BarSeg( 1 ),				{Set Interval Draw Directions( "Upper" )}			)}		)	));frame = Report( obj )[FrameBox( 1 )];seg = (frame << Find Seg( "Bar Seg" ));seg << Set Interval Draw Directions( "Lower" );

```

### Set Line Color

**構文:** obj &lt;&lt; Set Line Color( color )

**説明:** ディスプレイセグメント内のすべての線の色を設定する。

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Set Line Color( "Green" );

```

### Set Line Style

**構文:** obj &lt;&lt; Set Line Style( pen style )

**説明:** 線種を設定する。オプションはSolid(実線)、Dotted(点線)、Dashed(破線)、DashDot(一点鎖線)、DashDotDot(二点鎖線)。

**JMP追加されたバージョン:** 14

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Set Line Style( "Dotted" );

```

### Set Line Width

**構文:** obj &lt;&lt; Set Line Width( "1"|"2"|"3"|"4"|"5"|"6"|"その他..." )

**説明:** 線の幅を設定する。

**JMP追加されたバージョン:** 14

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Set Line Width( 3 );

```

### Set Log Curve

**構文:** obj &lt;&lt; Set Log Curve( state=0|1 )

**説明:** 対数曲線が設定されているか否かを取得する。グラフに対数スケールの軸がある場合に、線形軸のときと同じx値とy値の点を結んで曲線が描かれる。

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));// Change Y Axis scale to Logg[AxisBox( 1 )] << Scale( "Log" );seg << Set Log Curve( 1 );

```

### Set Marker

**構文:** obj &lt;&lt; Set Marker( marker )

**説明:** すべてのマーカーの種類を設定する。

**JMP追加されたバージョン:** 14

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Set Marker( "Square" );

```

### Set Marker Size

**構文:** obj &lt;&lt; Set Marker Size( size )

**説明:** マーカーのサイズを設定する。サイズのオプションはDot(ドット)、Small(小)、Medium(中)、Large(大)、XL、XXL、XXXL。

**JMP追加されたバージョン:** 14

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Set Marker( "Square" );seg << Set Marker Size( "XL" );

```

### Set Smooth

**構文:** obj &lt;&lt; Set Smooth( state=0|1 )

**説明:** 平滑化曲線をオンまたはオフにする。

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Set Smooth( 1 );

```

### Set Smoothness

**構文:** obj &lt;&lt; Set Smoothness( number )

**説明:** 平滑化曲線をオンまたはオフにする。

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Set Smoothness( 0.5 );

```

### Set Transparency

**構文:** obj &lt;&lt; Set Transparency( number )

**説明:** 図形の透明度を設定する。引数は0～1の数値。

**JMP追加されたバージョン:** 16

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Set Transparency( .3 );

```

### Set Unconnected Marker

**構文:** obj &lt;&lt; Set Unconnected Marker( marker )

**説明:** Line Segmentの中で線がつながっていない単独の点に使用するマーカーを設定する。この表示が不要の場合は " " を使用する。

```jsl

x = (1 :: 9) * 10;y = [10, 20, ., 60, ., 40, 30, ., 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Set Unconnected Marker( "diamond" );

```

### Set halfpoint is unbounded line

**構文:** obj &lt;&lt; Set halfpoint is unbounded line( state=0|1 )

**説明:** 1つの座標が欠測値である点を、直線として処理するかどうかを設定する。

```jsl

x = [.];y = [30];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Set halfpoint is unbounded line( 1 );

```

### Sib

**構文:** seg2 = obj &lt;&lt; Sib

**説明:** ディスプレイセグメントの兄弟(同レベルのもの)を戻す。

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Sib;

```

### Sib Append

**構文:** obj &lt;&lt; Sib Append( seg2 )

**説明:** ディスプレイセグメントのすぐ後にディスプレイセグメントを表示する。

```jsl

win = New Window( "World",	gb = Graph(		FrameSize( 800, 400 ),		X Scale( -180, 180 ),		Y Scale( -90, 90 ),		<<Background Map( Images( "Simple Earth" ) )	));imgBox = win[framebox( 1 )];mapSeg = imgBox << FindSeg( MapSeg( 1 ) );mapSeg << Transparency( 0.5 );Try(	xAxis = gb[AxisBox( 2 )];	xMin = (xAxis << get min);	xMax = (xAxis << get max);,	xMin = 0;	xMax = 100;);yAxis = gb[AxisBox( 1 )];yMin = (yAxis << get min);yMax = (yAxis << get max);xval = Matrix( {xmin, xmax} );yval = Matrix( {ymin, ymax} );mapSeg << Sib Append( Line Seg( xval, yval, <<line color( "Green" ), <<line width( 3 ) ) );

```

### Sib Prepend

**構文:** obj &lt;&lt; Sib Prepend( seg2 )

**説明:** ディスプレイセグメントのすぐ前にディスプレイセグメントを表示する。

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));Try(	xAxis = g[AxisBox( 2 )];	xMin = (xAxis << get min);	xMax = (xAxis << get max);,	xMin = 0;	xMax = 100;);yAxis = g[AxisBox( 1 )];yMin = (yAxis << get min);yMax = (yAxis << get max);xval = Matrix( {xmin, xmax} );yval = Matrix( {ymin, ymax} );seg << Sib Prepend( Line Seg( xval, yval, <<line color( "Green" ), <<line width( 3 ) ) );

```

### Transparency

**構文:** obj &lt;&lt; Transparency( number )

**説明:** 図形の透明度を設定する。引数は0～1の数値。

**JMP追加されたバージョン:** 16

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Set Transparency( .3 );

```

