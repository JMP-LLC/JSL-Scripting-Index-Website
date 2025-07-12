# TextSeg



## 共有されるメッセージ

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

### Set Property

**構文:** obj << Set Property( "property", value )

**説明:** ディスプレイボックスの、propertyで指定した名前のプロパティに値を設定する。

```jsl

Names Default To Here( 1 );
New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Set Property( "Enabled", 0 );

```

## 関連するコンストラクター

### Text Seg

**構文:** seg = Text Seg("text")

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );

```

## 項目のメッセージ

### Child

**構文:** seg2 = obj << Child

**説明:** ディスプレイセグメントの最初の子を戻す。

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Child; // not many segs support children

```

### Class Name

**構文:** classname = obj << Class Name

**説明:** ディスプレイボックスのクラス名を戻す。

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Class Name;

```

### Clip Shape

**構文:** seg << Clip Shape(Boundaries(Shape File, [ID(string)]) | Path([string] | [matrix]) | Empty())

**説明:** 指定された地図シェープをもとに図やグラフをクリッピングする。クリッピングする領域は、シェープファイルやパスによって指定できる。シェープファイルを使用する場合は、IDをオプション指定してファイルの中から1つの領域を選択することもできる。IDを指定しなかった場合は、すべての領域を結合したものがクリッピング領域として使われる。Nx3行列やテキスト表記を使ってクリッピングするパスを指定することもできる。パスの行列は、X座標、Y座標、フラグの3列で構成される。フラグは0がコントロール点、1が移動、2が線分、3が3次ベジエ曲線で、パスを閉じる点の場合は負の値を指定する。一方、パスをテキスト表記するときにはSVG構文を使用する。

**JMP追加されたバージョン:** 14

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

**構文:** obj << Color Theme

### Delete

**構文:** obj << Delete

**説明:** ディスプレイセグメントを削除する。

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Delete;

```

### Density Gradient

**構文:** obj << Density Gradient( "白へフェードアウト"|"グレーへフェードアウト"|"フルカラー"="白へフェードアウト" )

**説明:** 密度グラデーションの色付けの動作を設定する。 デフォルトの値は"白へフェードアウト"。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Density Gradient( "Fade to Gray" );

```

### Error Bar Cap

**構文:** obj << Error Bar Cap( "なし"|"極小"|"小"|"中"|"大" )

**説明:** 誤差バーの終端に描くキャップの種類を指定する。

**JMP追加されたバージョン:** 14

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

**構文:** obj << Error Bar Cap Shape( begin, end )

**説明:** 誤差バーに表示するキャップの形状を指定する。1つの引数で棒の両端の形状を設定するか、2つの引数で始端と終端を別々に設定する。デフォルトの形状は"Line"。"Arrow"を指定すると、外側を向いた矢印が描かれ、"None"を指定するとキャップが省略される。

**JMP追加されたバージョン:** 18

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

**構文:** obj << Fill Color( color )

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Fill Color( "Green" );

```

### First Value

**構文:** obj << First Value( state=0|1 )

**JMP追加されたバージョン:** 16

### Frame

**構文:** FrameBox = obj << Frame

**説明:** ディスプレイセグメントがあるフレームボックスを戻す。

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Frame;

```

### Get Base Font

**構文:** font = obj << Get Base Font

**説明:** ディスプレイボックスのテキストに使用されるベースフォントを戻す。ベースフォントはTitle、Text、Annotationなどで、フォントの環境設定で事前に設定されている。

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
fontobj << Get Base Font;

```

### Get Clip Shape

**構文:** obj << Get Clip Shape

**説明:** 現在、クリッピングしている領域を戻す。

**JMP追加されたバージョン:** 14

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

**構文:** obj << Get Density Gradient

**説明:** 密度グラデーションの色付けの動作を取得する。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Get Density Gradient;

```

### Get Description

**構文:** description = obj << Get Description

**説明:** ディスプレイセグメントの名前を取得する。

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << get description();

```

### Get Error Bar Cap

**構文:** obj << Get Error Bar Cap

**説明:** 現在、誤差バーのキャップにどの種類が使われているかを戻す。

**JMP追加されたバージョン:** 14

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

**構文:** { begin, end } = obj << Get Error Bar Cap Shape

**説明:** 誤差バーのキャップの形状を戻す。

**JMP追加されたバージョン:** 18

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

**構文:** color = obj << Get Fill Color

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Get Fill Color;

```

### Get Fill Pattern

**構文:** obj << Get Fill Pattern

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Get Fill Pattern;

```

### Get Font

**構文:** obj << Get Font

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
fontobj << Get Font;

```

### Get Font Name

**構文:** obj << Get Font Name

**説明:** フォントの名前を戻す。

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
fontobj << Set Font Name( "Times New Roman" );
fontobj << Get Font Name;

```

### Get Font Scale

**構文:** obj << Get Font Scale

**説明:** 現在のフォントの倍率を戻す。

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
fontobj << Get Font Scale;

```

### Get Font Size

**構文:** obj << Get Font Size

**説明:** フォントのサイズを戻す。

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
fontobj << Get Font Size;

```

### Get Font Style

**構文:** obj << Get Font Style

**説明:** フォントスタイルの名前を戻す。

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
fontobj << Set Font Name( "Arial" );
fontobj << Set Font Style( "Italic" );
fontobj << Get Font Style;

```

### Get Gradient

**構文:** obj << Get Gradient

**説明:** 色のグラデーションを取得する。

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Get Gradient;

```

### Get Gradient Color Theme

**構文:** obj << Get Gradient Color Theme

**説明:** グラデーションのカラーテーマを取得する。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Get Gradient Color Theme;

```

### Get Gradient Discrete Colors

**構文:** obj << Get Gradient Discrete Colors

**説明:** グラデーションの各水準を均一の色にするか、色の境目を滑らかに変化させるかを取得する。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Get Gradient Discrete Colors;

```

### Get Gradient Fill

**構文:** obj << Get Gradient Fill

**説明:** グラデーションのスケールの範囲外にある値について、色付けの方法を取得する。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Get Gradient Fill;

```

### Get Gradient Label Count

**構文:** obj << Get Gradient Label Count

**説明:** グラデーションの凡例に表示されるラベルの数を取得する。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Get Gradient Label Count;

```

### Get Gradient Label Levels

**構文:** [value1,value1, ... value N] = obj << Get Gradient Label Levels

**説明:** グラデーションのスケールのラベルに使用される値のセットを取得する。

**JMP追加されたバージョン:** 18

**例 1**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Get Gradient Scale Values;

```

**例 2**

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

**構文:** obj << Get Gradient Legend Horizontal

**説明:** グラデーションの凡例を横方向に表示するかどうかを取得する。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Get Gradient Legend Horizontal;

```

### Get Gradient Legend Label Format

**構文:** obj << Get Gradient Legend Label Format

**説明:** グラデーションの凡例ラベルの表示形式を取得する。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Get Gradient Legend Label Format;

```

### Get Gradient Legend Label Width

**構文:** obj << Get Gradient Legend Label Width

**説明:** グラデーションの凡例ラベルの最大文字数を取得する。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Get Gradient Legend Label Width;

```

### Get Gradient Legend Show Labels

**構文:** obj << Get Gradient Legend Show Labels

**説明:** グラデーションの凡例に水準ラベルを表示するかどうかを取得する。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Get Gradient Legend Show Labels;

```

### Get Gradient Level Count

**構文:** obj << Get Gradient Level Count

**説明:** グラデーションの水準数を取得する。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Get Gradient Levels;

```

### Get Gradient Lightness Range

**構文:** obj << Get Gradient Lightness Range

**説明:** グラデーションの水準の色について、明度の最小値と最大値を取得する。欠測値は、カラーテーマの元の値が使用されることを示す。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Get Gradient Lightness Range;

```

### Get Gradient Range

**構文:** obj << Get Gradient Range

**説明:** カスタムではないグラデーションのスケールの範囲を取得する。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Get Gradient Range;

```

### Get Gradient Reverse Color Order

**構文:** obj << Get Gradient Reverse Color Order

**説明:** グラデーションの色の順序が逆かどうかを取得する。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Get Gradient Reverse Color Order;

```

### Get Gradient Reverse Label Order

**構文:** obj << Get Gradient Reverse Label Order

**説明:** グラデーション内のラベルの順序が逆かどうかを取得する。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Get Gradient Reverse Label Order;

```

### Get Gradient Scale

**構文:** obj << Get Gradient Scale

**説明:** グラデーションのスケールの種類を取得する。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Get Gradient Scale;

```

### Get Gradient Scale Values

**構文:** [value1,value1, ... value N] = obj << Get Gradient Scale Values

**説明:** グラデーションのスケールのラベルに使用される値のセットを取得する。

**JMP追加されたバージョン:** 18

**例 1**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Get Gradient Scale Values;

```

**例 2**

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

**構文:** obj << Get Gradient Show Missing

**説明:** 凡例に欠測値を表示するかどうかを取得する。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Get Gradient Show Missing;

```

### Get Gradient Transparency

**構文:** obj << Get Gradient Transparency

**説明:** グラデーションの透明度を取得する。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Get Gradient Transparency;

```

### Get Interval Draw Directions

**構文:** obj << Get Interval Draw Directions

**説明:** 区間を描画する方向を取得する。

**JMP追加されたバージョン:** 17

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

**構文:** color = obj << Get Line Color

**説明:** 線の色を戻す。

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Get Line Color;

```

### Get Line Style

**構文:** pen style = obj << Get Line Style

**説明:** 線種を戻す。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Get Line Style;

```

### Get Line Width

**構文:** number = obj << Get Line Width

**説明:** 線の幅を戻す。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Get Line Width;

```

### Get Location

**構文:** obj << Get Location

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( ts = Text Seg( "moves with axes" ) );
ts << set location( 60, 60 );
ts << get location();

```

### Get Marker

**構文:** marker = obj << Get Marker

**説明:** マーカーの種類を戻す。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Get Marker;

```

### Get Marker Size

**構文:** size = obj << Get Marker Size

**説明:** マーカーのサイズを戻す。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Get Marker Size;

```

### Get Relative

**構文:** obj << Get Relative

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "fixed bottom left" ) );
seg << set location( 0, 1 );
seg << set relative( 1, 1 );
seg << get relative();

```

### Get Text

**構文:** obj << Get Text

**説明:** TextSegの文字列を戻す。

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

**構文:** obj << Get Text Color

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Get Text Color;

```

### Get Text Style

**構文:** obj << Get Text Style

**説明:** 原点を基準として、テキストをどのように描画するかを取得する。

**JMP追加されたバージョン:** 17

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

**構文:** obj << Get Transparency

**説明:** 透明度を表す0(透明)～1(不透明)の数値を戻す。

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Get Transparency;

```

### Gradient

**構文:** obj << { <Color Theme(theme)>, <Min Lightness(0-1)>, <Max Lightness(0-1)>, <Contour Levels(num)>, <Reverse Gradient(0|1)>, <Density Gradient("Fade To White"|"Fade To Gray"|"Full Color")>, <Gradient Transparency("None"|"Linear")> }

obj << { <Color Theme(theme)>, <Min Lightness(0-1)>, <Max Lightness(0-1)>, <N Labels(num)>, <Show Missing Color("On"|"Off"|"Auto")>, <Scale Type("Linear"|"Quantile"|"Standard Deviation"|"Log"|"Log Offset"|"Custom")>, <Scale Values([v1, v2, …])>, <Range Type("Default"|"Exact Data Range"|"Middle 90%")>, <Fill("Between"|"Above"|"Below"|"Above Below")>, <Reverse Gradient(0|1)>, <Reverse Labels(0|1)>, <Discrete Color(0|1)> }, <Label Format(labelFormat)>, <Width(num)>, <Horizontal(0|1)>, <Show Labels(0|1)>

**説明:** 色のグラデーションを設定する。

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Gradient( {Color Theme( "Viridis" ), N Labels( 7 )} );

```

### Gradient Color Theme

**構文:** obj << Gradient Color Theme

**説明:** グラデーションのカラーテーマを設定する。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Gradient Color Theme( "Viridis" );

```

### Gradient Discrete Colors

**構文:** obj << Gradient Discrete Colors

**説明:** グラデーションの各水準を均一の色にするか、色の境目を滑らかに変化させるかを設定する。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Points( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Marker Seg( 1 ) );
seg << Set Gradient Discrete Colors( 1 );

```

### Gradient Fill

**構文:** obj << Gradient Fill( "間"|"上"|"下"|"上下"="上下" )

**説明:** グラデーションのスケールの範囲外にある値について、色付けの方法を設定する。 デフォルトの値は"上下"。

**JMP追加されたバージョン:** 18

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

**構文:** obj << Gradient Label Count

**説明:** グラデーションの凡例に表示するラベルの数を設定する。これは、等高線の水準数に1を足した値。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Gradient Label Count( 8 );

```

### Gradient Label Levels

**構文:** obj << Gradient Label Levels( [value1,value1, ... value N] )

**説明:** グラデーションのスケールに使用する値のセットを設定する。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Scale Values( [-10.0, 0.0, 10.0] );

```

### Gradient Legend Horizontal

**構文:** obj << Gradient Legend Horizontal

**説明:** グラデーションの凡例を横方向に表示するかどうかを設定する。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Gradient Legend Horizontal( 1 );

```

### Gradient Legend Label Format

**構文:** obj << Gradient Legend Label Format

**説明:** グラデーションの凡例ラベルの表示形式を設定する。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Gradient Legend Label Format( "Fixed Dec", 6, 3 );

```

### Gradient Legend Label Width

**構文:** obj << Gradient Legend Label Width

**説明:** グラデーションの凡例ラベルの最大長さ(文字数)を設定する。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Gradient Legend Label Width( 4 );

```

### Gradient Legend Show Labels

**構文:** obj << Gradient Legend Show Labels

**説明:** グラデーションの凡例に水準ラベルを表示するかどうかを設定する。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Gradient Legend Show Labels( 0 );

```

### Gradient Level Count

**構文:** obj << Gradient Level Count

**説明:** グラデーションの水準数を設定する。これは、ラベルの数から1を引いた値。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Gradient Levels( 7 );

```

### Gradient Lightness Range

**構文:** obj << Gradient Lightness Range

**説明:** グラデーションの水準の色について、明度の最小値と最大値を設定する。この範囲をカバーするような色が使われる。欠測値は変化なしとして扱われる。

**JMP追加されたバージョン:** 18

**例 1**

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Gradient Lightness Range( Min( 0.25 ), Max( 0.75 ) );

```

**例 2**

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Gradient Lightness Range( 0.25, 0.75 );

```

**例 3**

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Gradient Lightness Range( ., 0.75 );

```

### Gradient Range

**構文:** obj << Gradient Range( "デフォルト"|"正確なデータ範囲"|"中央部 90%"="デフォルト" )

**説明:** カスタムではないグラデーションのスケールの範囲を設定する。 デフォルトの値は"デフォルト"。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Range( "Exact Data Range" );

```

### Gradient Reverse Color Order

**構文:** obj << Gradient Reverse Color Order

**説明:** グラデーションの色の順序を逆にする。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Gradient Reverse Color Order( 1 );

```

### Gradient Reverse Label Order

**構文:** obj << Gradient Reverse Label Order

**説明:** グラデーションのラベルの順序を逆にする。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Gradient Reverse Label Order( 1 );

```

### Gradient Scale

**構文:** obj << Gradient Scale( "線形"|"分位点"|"標準偏差"|"対数"|"対数オフセット"|"カスタム"="線形" )

**説明:** グラデーションのスケールの種類を設定する。 デフォルトの値は"線形"。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Scale( "Quantile" );

```

### Gradient Scale Values

**構文:** obj << Gradient Scale Values( [value1,value1, ... value N] )

**説明:** グラデーションのスケールに使用する値のセットを設定する。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Scale Values( [-10.0, 0.0, 10.0] );

```

### Gradient Show Missing

**構文:** obj << Gradient Show Missing( "自動"|"オン"|"オフ"="自動" )

**説明:** 凡例に欠測値を表示するかどうかを設定する。 デフォルトの値は"自動"。

**JMP追加されたバージョン:** 18

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

**構文:** obj << Gradient Transparency( "なし"|"線形"="線形" )

**説明:** グラデーションの透明度を設定する。 デフォルトの値は"線形"。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Gradient Transparency( "None" );

```

### Last Value

**構文:** obj << Last Value( state=0|1 )

**JMP追加されたバージョン:** 16

### Line Color

**構文:** obj << Line Color( color )

**説明:** ディスプレイセグメント内のすべての線の色を設定する。

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Line Color( "Green" );

```

### Line Style

**構文:** obj << Line Style( pen style )

**説明:** 線種を設定する。オプションはSolid(実線)、Dotted(点線)、Dashed(破線)、DashDot(一点鎖線)、DashDotDot(二点鎖線)。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Line Style( "Dotted" );

```

### Line Width

**構文:** obj << Line Width( "1"|"2"|"3"|"4"|"5"|"6"|"その他..." )

**説明:** 線の幅を設定する。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Line Width( 3 );

```

### Marker

**構文:** obj << Marker( marker )

**説明:** すべてのマーカーの種類を設定する。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Marker( "Square" );

```

### Marker Size

**構文:** obj << Marker Size( size )

**説明:** マーカーのサイズを設定する。サイズのオプションはDot(ドット)、Small(小)、Medium(中)、Large(大)、XL、XXL、XXXL。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Marker( "Square" );
seg << Set Marker Size( "XL" );

```

### Max Value

**構文:** obj << Max Value( state=0|1 )

**JMP追加されたバージョン:** 16

### Min Value

**構文:** obj << Min Value( state=0|1 )

**JMP追加されたバージョン:** 16

### Name

**構文:** obj << Name( state=0|1 )

**JMP追加されたバージョン:** 16

### Parent

**構文:** seg2 = obj << Parent

**説明:** ディスプレイセグメントの親を戻す。

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Parent;

```

### Revert

**構文:** obj << Revert

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Revert;

```

### Set Base Font

**構文:** obj << Set Base Font( "テキスト"|"見出し"|"タイトル"|"スモール"|"モノ"|"計算式エディタ"|"注釈"|"軸"|"マーカー"|"軸ラベル"|"グラフラベル"|"凡例"|"グラフタイトル"|"キャプション"|"データテーブル"|"ホバーラベル" )

**説明:** ディスプレイボックスのテキストに使用されるベースフォントを設定する。

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
Wait( 2 );
fontobj << Set Base Font( "Title" );

```

### Set Description

**構文:** obj << Set Description( description )

**説明:** ディスプレイセグメントの名前を設定する。

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << set description( "my seg" );

```

### Set Error Bar Cap

**構文:** obj << Set Error Bar Cap( "なし"|"極小"|"小"|"中"|"大" )

**説明:** 誤差バーの終端に描くキャップの種類を指定する。

**JMP追加されたバージョン:** 14

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

**構文:** obj << Set Error Bar Cap Shape( begin, end )

**説明:** 誤差バーに表示するキャップの形状を指定する。1つの引数で棒の両端の形状を設定するか、2つの引数で始端と終端を別々に設定する。デフォルトの形状は"Line"。"Arrow"を指定すると、外側を向いた矢印が描かれ、"None"を指定するとキャップが省略される。

**JMP追加されたバージョン:** 18

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

**構文:** obj << Set Fill Color( color )

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Fill Color( "Green" );

```

### Set Fill Pattern

**構文:** obj << Set Fill Pattern

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Fill Pattern( "h wave medium" );

```

### Set Font

**構文:** obj << Set Font( fontName, <size>, <"bold italic underline strikeout">, <angle> )

**例 1**

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
fontobj << Set Font( "Arial Black" );

```

**例 2**

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
fontobj << Set Font( "Arial Black", 12, "Italic Underline" );

```

### Set Font Name

**構文:** obj << Set Font Name( fontname )

**説明:** テキストのフォントを設定する。

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
fontobj << Set Font Name( "Arial Black" );

```

### Set Font Scale

**構文:** obj << Set Font Scale( f )

**説明:** 現在のフォントの倍率を設定する。この倍率は、ベースフォントとポイントサイズから決定されたサイズに適用される。

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
Wait( 2 );
fontobj << Set Font Scale( 2.0 );

```

### Set Font Size

**構文:** obj << Set Font Size( n )

**説明:** テキストのサイズをポイント数で設定する。

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
fontobj << Set Font Size( 14 );

```

### Set Font Style

**構文:** obj << Set Font Style( style )

**説明:** テキスト文字列のフォントスタイルを設定する。複数のスタイルを一度に設定するには、スペースで区切った文字列で指定してください(以下の例2を参照)。

**例 1**

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
fontobj << Set Font Style( "Italic" );

```

**例 2**

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
fontobj << Set Font Style( "Italic Bold Underline" );

```

### Set Gradient

**構文:** obj << { <Color Theme(theme)>, <Min Lightness(0-1)>, <Max Lightness(0-1)>, <Contour Levels(num)>, <Reverse Gradient(0|1)>, <Density Gradient("Fade To White"|"Fade To Gray"|"Full Color")>, <Gradient Transparency("None"|"Linear")> }

obj << { <Color Theme(theme)>, <Min Lightness(0-1)>, <Max Lightness(0-1)>, <N Labels(num)>, <Show Missing Color("On"|"Off"|"Auto")>, <Scale Type("Linear"|"Quantile"|"Standard Deviation"|"Log"|"Log Offset"|"Custom")>, <Scale Values([v1, v2, …])>, <Range Type("Default"|"Exact Data Range"|"Middle 90%")>, <Fill("Between"|"Above"|"Below"|"Above Below")>, <Reverse Gradient(0|1)>, <Reverse Labels(0|1)>, <Discrete Color(0|1)> }, <Label Format(labelFormat)>, <Width(num)>, <Horizontal(0|1)>, <Show Labels(0|1)>

**説明:** 色のグラデーションを設定する。

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Gradient( {Color Theme( "Viridis" ), N Labels( 7 )} );

```

### Set Gradient Color Theme

**構文:** obj << Set Gradient Color Theme

**説明:** グラデーションのカラーテーマを設定する。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Gradient Color Theme( "Viridis" );

```

### Set Gradient Custom Scale

**構文:** obj << Set Gradient Custom Scale

**説明:** 指定した値のリストにより、グラデーションにカスタムスケールを設定する。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Gradient Custom Scale( {0.0, 5.0, 10.0, 20.0} );

```

### Set Gradient Discrete Colors

**構文:** obj << Set Gradient Discrete Colors

**説明:** グラデーションの各水準を均一の色にするか、色の境目を滑らかに変化させるかを設定する。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Points( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Marker Seg( 1 ) );
seg << Set Gradient Discrete Colors( 1 );

```

### Set Gradient Fill

**構文:** obj << Set Gradient Fill( "間"|"上"|"下"|"上下"="上下" )

**説明:** グラデーションのスケールの範囲外にある値について、色付けの方法を設定する。 デフォルトの値は"上下"。

**JMP追加されたバージョン:** 18

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

**構文:** obj << Set Gradient Label Count

**説明:** グラデーションの凡例に表示するラベルの数を設定する。これは、等高線の水準数に1を足した値。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Gradient Label Count( 8 );

```

### Set Gradient Label Levels

**構文:** obj << Set Gradient Label Levels( [value1,value1, ... value N] )

**説明:** グラデーションのスケールに使用する値のセットを設定する。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Scale Values( [-10.0, 0.0, 10.0] );

```

### Set Gradient Legend Horizontal

**構文:** obj << Set Gradient Legend Horizontal

**説明:** グラデーションの凡例を横方向に表示するかどうかを設定する。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Gradient Legend Horizontal( 1 );

```

### Set Gradient Legend Label Format

**構文:** obj << Set Gradient Legend Label Format

**説明:** グラデーションの凡例ラベルの表示形式を設定する。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Gradient Legend Label Format( "Fixed Dec", 6, 3 );

```

### Set Gradient Legend Label Width

**構文:** obj << Set Gradient Legend Label Width

**説明:** グラデーションの凡例ラベルの最大長さ(文字数)を設定する。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Gradient Legend Label Width( 4 );

```

### Set Gradient Legend Show Labels

**構文:** obj << Set Gradient Legend Show Labels

**説明:** グラデーションの凡例に水準ラベルを表示するかどうかを設定する。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Gradient Legend Show Labels( 0 );

```

### Set Gradient Level Count

**構文:** obj << Set Gradient Level Count

**説明:** グラデーションの水準数を設定する。これは、ラベルの数から1を引いた値。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Gradient Levels( 7 );

```

### Set Gradient Lightness Range

**構文:** obj << Set Gradient Lightness Range

**説明:** グラデーションの水準の色について、明度の最小値と最大値を設定する。この範囲をカバーするような色が使われる。欠測値は変化なしとして扱われる。

**JMP追加されたバージョン:** 18

**例 1**

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Gradient Lightness Range( Min( 0.25 ), Max( 0.75 ) );

```

**例 2**

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Gradient Lightness Range( 0.25, 0.75 );

```

**例 3**

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Gradient Lightness Range( ., 0.75 );

```

### Set Gradient Range

**構文:** obj << Set Gradient Range( "デフォルト"|"正確なデータ範囲"|"中央部 90%"="デフォルト" )

**説明:** カスタムではないグラデーションのスケールの範囲を設定する。 デフォルトの値は"デフォルト"。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Range( "Exact Data Range" );

```

### Set Gradient Reverse Color Order

**構文:** obj << Set Gradient Reverse Color Order

**説明:** グラデーションの色の順序を逆にする。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Gradient Reverse Color Order( 1 );

```

### Set Gradient Reverse Label Order

**構文:** obj << Set Gradient Reverse Label Order

**説明:** グラデーションのラベルの順序を逆にする。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Gradient Reverse Label Order( 1 );

```

### Set Gradient Scale

**構文:** obj << Set Gradient Scale( "線形"|"分位点"|"標準偏差"|"対数"|"対数オフセット"|"カスタム"="線形" )

**説明:** グラデーションのスケールの種類を設定する。 デフォルトの値は"線形"。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Scale( "Quantile" );

```

### Set Gradient Scale Values

**構文:** obj << Set Gradient Scale Values( [value1,value1, ... value N] )

**説明:** グラデーションのスケールに使用する値のセットを設定する。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Scale Values( [-10.0, 0.0, 10.0] );

```

### Set Gradient Show Missing

**構文:** obj << Set Gradient Show Missing( "自動"|"オン"|"オフ"="自動" )

**説明:** 凡例に欠測値を表示するかどうかを設定する。 デフォルトの値は"自動"。

**JMP追加されたバージョン:** 18

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

**構文:** obj << Set Interval Draw Directions( Both|Upper|Lower|None )

**説明:** 区間を描画する方向を設定する。

**JMP追加されたバージョン:** 17

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

**構文:** obj << Set Line Color( color )

**説明:** ディスプレイセグメント内のすべての線の色を設定する。

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Line Color( "Green" );

```

### Set Line Style

**構文:** obj << Set Line Style( pen style )

**説明:** 線種を設定する。オプションはSolid(実線)、Dotted(点線)、Dashed(破線)、DashDot(一点鎖線)、DashDotDot(二点鎖線)。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Line Style( "Dotted" );

```

### Set Line Width

**構文:** obj << Set Line Width( "1"|"2"|"3"|"4"|"5"|"6"|"その他..." )

**説明:** 線の幅を設定する。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Line Width( 3 );

```

### Set Location

**構文:** obj << Set Location

**説明:** テキストの位置を設定する。Relativeが設定されている場合、左上が0,0、右下が1,1になる。Relativeが設定されていない場合、座標は軸に対して相対的になりる。

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

**構文:** obj << Set Marker( marker )

**説明:** すべてのマーカーの種類を設定する。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Marker( "Square" );

```

### Set Marker Size

**構文:** obj << Set Marker Size( size )

**説明:** マーカーのサイズを設定する。サイズのオプションはDot(ドット)、Small(小)、Medium(中)、Large(大)、XL、XXL、XXXL。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Marker( "Square" );
seg << Set Marker Size( "XL" );

```

### Set Relative

**構文:** obj << Set Relative( 0|1,0|1 )

**説明:** 値0は、xまたはy座標がフレームボックスに対して相対的なものであることを意味し、値1は、xまたはy値が軸に対して相対的なものであることを意味する。0に設定すると、xおよびy座標はグラフボックスの左上から右下に向かって0,0から1,1の範囲にマッピングされる。

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

**構文:** obj << Set Text( text )

**説明:** TextSegの文字列を設定する。

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

**構文:** obj << Set Text Alignment( left|center|right,<top|center|bottom> )

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "center" ) );
seg << set relative( 1, 1 );
seg << set location( .5, .5 );
seg << set text alignment( center, center );

```

### Set Text Color

**構文:** obj << Set Text Color( color )

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Text Color( "Green" );

```

### Set Text Style

**構文:** obj << Set Text Style( [左寄せ|中央寄せ|右寄せ], [上|縦中央|ベースライン|下], [消去], [囲み] )

**説明:** 原点を基準として、テキストをどのように描画するかを設定する。サポートされている場合、「消去」はテキストの境界ボックスを塗りつぶし、「消去」はその輪郭を描画する。指定がない場合、デフォルトの横方向の配置は「左寄せ」で、縦方向の配置は「ベースライン」となる。

**JMP追加されたバージョン:** 17

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

**構文:** obj << Set Transparency( number )

**説明:** 図形の透明度を設定する。引数は0～1の数値。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Transparency( .3 );

```

### Sib

**構文:** seg2 = obj << Sib

**説明:** ディスプレイセグメントの兄弟(同レベルのもの)を戻す。

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Sib;

```

### Sib Append

**構文:** obj << Sib Append( seg2 )

**説明:** ディスプレイセグメントのすぐ後にディスプレイセグメントを表示する。

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

**構文:** obj << Sib Prepend( seg2 )

**説明:** ディスプレイセグメントのすぐ前にディスプレイセグメントを表示する。

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

**構文:** obj << Text Color( color )

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Text Color( "Green" );

```

### Text Style

**構文:** obj << Text Style( [左寄せ|中央寄せ|右寄せ], [上|縦中央|ベースライン|下], [消去], [囲み] )

**説明:** 原点を基準として、テキストをどのように描画するかを設定する。サポートされている場合、「消去」はテキストの境界ボックスを塗りつぶし、「消去」はその輪郭を描画する。指定がない場合、デフォルトの横方向の配置は「左寄せ」で、縦方向の配置は「ベースライン」となる。

**JMP追加されたバージョン:** 17

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

**構文:** obj << Transparency( number )

**説明:** 図形の透明度を設定する。引数は0～1の数値。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Transparency( .3 );

```

