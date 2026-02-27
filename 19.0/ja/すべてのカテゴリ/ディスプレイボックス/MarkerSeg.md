# MarkerSeg



## 共有されるメッセージ

### Enabled

**構文:** obj &lt;&lt; Enabled( state=0|1 );state = obj &lt;&lt; Get Enabled

**説明:** 有効にされていないオブジェクトはキーボードまたはマウスによる入力に反応しない。このプロパティは子オブジェクトにも継承されるため、コンテナオブジェクトが無効になっていると、その下位のオブジェクトがすべて無効になる。

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

### Get Enabled

**構文:** obj &lt;&lt; Enabled( state=0|1 );state = obj &lt;&lt; Get Enabled

**説明:** 有効にされていないオブジェクトはキーボードまたはマウスによる入力に反応しない。このプロパティは子オブジェクトにも継承されるため、コンテナオブジェクトが無効になっていると、その下位のオブジェクトがすべて無効になる。

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

### Get Namespace

**構文:** obj &lt;&lt; Get Namespace

**説明:** この表示オブジェクトの名前空間を戻す。

```jsl

//This message applies to all display objects
x = 1;
w = New Window( "Test", b = Button Box( "Press me" ) );
b:x = 2;
ns = b << GetNamespace();
Show( ns:x, x );

```

### Get Properties

**構文:** obj &lt;&lt; Get Properties

**説明:** ディスプレイボックスのプロパティとその値を含む連想配列を戻す。

```jsl

New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Get Properties;

```

### Get Property

**構文:** obj &lt;&lt; Get Property( "property" )

**説明:** propertyで指定したプロパティの現在の設定を戻す。

```jsl

New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Get Property( "Enabled" );

```

### Get Property List

**構文:** obj &lt;&lt; Get Property List

**説明:** ディスプレイボックスの持つプロパティのリストを戻す。

```jsl

New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Get Property List;

```

### Set Property

**構文:** obj &lt;&lt; Set Property( "property", value )

**説明:** ディスプレイボックスの、propertyで指定した名前のプロパティに値を設定する。

```jsl

New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Set Property( "Enabled", 0 );

```

## 関連するコンストラクター

### Marker Seg

**構文:** me = Marker Seg( x, y, &lt; Row States( dt | dt,[rows] | dt,{{rows}, ...} | {states} ) &gt;, &lt; Sizes( s ) &gt; )

**説明:** 指定された(x,y)座標にマーカーを描くディスプレイセグメントを戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
aa = [=> 0];
sz = Column( "age" ) << get values;
yy = J( N Rows( xx ), 1, 0 );
For( ii = 1, ii <= N Rows( xx ), ii++,
	aa[xx[ii]]++;
	yy[ii] = aa[xx[ii]];
);
New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg( xx, yy, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Marker Seg( 1 ) ));

```

## 項目のメッセージ

### Always Show Label

**構文:** obj &lt;&lt; Always Show Label( {pt, state=0|1}, ... )

**説明:** 他のラベルの後ろに隠れている場合でも、常にマーカーラベルを表示する。

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
For( i = 1, i <= 40, i++,
	Labeled( Row State( i ) ) = 1
);
r = Bivariate( Y( :weight ), X( :height ) ) << Report();
frame = r[FrameBox( 1 )];
seg = (frame << Find Seg( Marker Seg( 1 ) ));
seg << always show label( {0, 1}, {1, 1}, {2, 1}, {3, 1}, {4, 1}, {5, 1} );

```

### Child

**構文:** seg2 = obj &lt;&lt; Child

**説明:** ディスプレイセグメントの最初の子を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
aa = [=> 0];
sz = Column( "age" ) << get values;
yy = J( N Rows( xx ), 1, 0 );
For( ii = 1, ii <= N Rows( xx ), ii++,
	aa[xx[ii]]++;
	yy[ii] = aa[xx[ii]];
);
New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg( xx, yy, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Marker Seg( 1 ) ));
seg << Child; // not many segs support children

```

### Class Name

**構文:** classname = obj &lt;&lt; Class Name

**説明:** ディスプレイボックスのクラス名を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
aa = [=> 0];
sz = Column( "age" ) << get values;
yy = J( N Rows( xx ), 1, 0 );
For( ii = 1, ii <= N Rows( xx ), ii++,
	aa[xx[ii]]++;
	yy[ii] = aa[xx[ii]];
);
New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg( xx, yy, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Marker Seg( 1 ) ));
seg << Class Name;

```

### Clip Shape

**構文:** seg &lt;&lt; Clip Shape(Boundaries(Shape File, [ID(string)]) | Path([string] | [matrix]) | Empty())

**説明:** 指定された地図シェープをもとに図やグラフをクリッピングする。クリッピングする領域は、シェープファイルやパスによって指定できる。シェープファイルを使用する場合は、IDをオプション指定してファイルの中から1つの領域を選択することもできる。IDを指定しなかった場合は、すべての領域を結合したものがクリッピング領域として使われる。Nx3行列やテキスト表記を使ってクリッピングするパスを指定することもできる。パスの行列は、X座標、Y座標、フラグの3列で構成される。フラグは0がコントロール点、1が移動、2が線分、3が3次ベジエ曲線で、パスを閉じる点の場合は負の値を指定する。一方、パスをテキスト表記するときにはSVG構文を使用する。

**JMP追加されたバージョン:** 14

```jsl

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

### Color

**構文:** obj &lt;&lt; Color( color )

**説明:** すべてのマーカーの色を設定する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
aa = [=> 0];
sz = Column( "age" ) << get values;
yy = J( N Rows( xx ), 1, 0 );
For( ii = 1, ii <= N Rows( xx ), ii++,
	aa[xx[ii]]++;
	yy[ii] = aa[xx[ii]];
);
New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg( xx, yy, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Marker Seg( 1 ) ));
seg << Color( "Green" );

```

### Color Theme

**構文:** obj &lt;&lt; Color Theme

### Delete

**構文:** obj &lt;&lt; Delete

**説明:** ディスプレイセグメントを削除する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
aa = [=> 0];
sz = Column( "age" ) << get values;
yy = J( N Rows( xx ), 1, 0 );
For( ii = 1, ii <= N Rows( xx ), ii++,
	aa[xx[ii]]++;
	yy[ii] = aa[xx[ii]];
);
New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg( xx, yy, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Marker Seg( 1 ) ));
seg << Delete;

```

### Density Gradient

**構文:** obj &lt;&lt; Density Gradient( "白へフェードアウト"|"グレーへフェードアウト"|"フルカラー"="白へフェードアウト" )

**説明:** 密度グラデーションの色付けの動作を設定する。 デフォルトの値は"白へフェードアウト"。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
aa = [=> 0];
sz = Column( "age" ) << get values;
yy = J( N Rows( xx ), 1, 0 );
For( ii = 1, ii <= N Rows( xx ), ii++,
	aa[xx[ii]]++;
	yy[ii] = aa[xx[ii]];
);
New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg( xx, yy, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Marker Seg( 1 ) ));
seg << Density Gradient( "Fade to Gray" );

```

### Frame

**構文:** FrameBox = obj &lt;&lt; Frame

**説明:** ディスプレイセグメントがあるフレームボックスを戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
aa = [=> 0];
sz = Column( "age" ) << get values;
yy = J( N Rows( xx ), 1, 0 );
For( ii = 1, ii <= N Rows( xx ), ii++,
	aa[xx[ii]]++;
	yy[ii] = aa[xx[ii]];
);
New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg( xx, yy, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Marker Seg( 1 ) ));
seg << Frame;

```

### Get Clip Shape

**構文:** obj &lt;&lt; Get Clip Shape

**説明:** 現在、クリッピングしている領域を戻す。

**JMP追加されたバージョン:** 14

```jsl

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

### Get Color

**構文:** color = obj &lt;&lt; Get Color

**説明:** マーカーの色を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
aa = [=> 0];
sz = Column( "age" ) << get values;
yy = J( N Rows( xx ), 1, 0 );
For( ii = 1, ii <= N Rows( xx ), ii++,
	aa[xx[ii]]++;
	yy[ii] = aa[xx[ii]];
);
New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg( xx, yy, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Marker Seg( 1 ) ));
seg << Get Color;

```

### Get Colors

**構文:** list = obj &lt;&lt; Get Colors

**説明:** 行属性のマーカーの情報に基づいたマーカーの色のリストを戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
aa = [=> 0];
sz = Column( "age" ) << get values;
yy = J( N Rows( xx ), 1, 0 );
For( ii = 1, ii <= N Rows( xx ), ii++,
	aa[xx[ii]]++;
	yy[ii] = aa[xx[ii]];
);
New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg( xx, yy, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Marker Seg( 1 ) ));
seg << Get Colors;

```

### Get Density Gradient

**構文:** obj &lt;&lt; Get Density Gradient

**説明:** 密度グラデーションの色付けの動作を取得する。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
aa = [=> 0];
sz = Column( "age" ) << get values;
yy = J( N Rows( xx ), 1, 0 );
For( ii = 1, ii <= N Rows( xx ), ii++,
	aa[xx[ii]]++;
	yy[ii] = aa[xx[ii]];
);
New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg( xx, yy, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Marker Seg( 1 ) ));
seg << Get Density Gradient;

```

### Get Description

**構文:** description = obj &lt;&lt; Get Description

**説明:** ディスプレイセグメントの名前を取得する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
aa = [=> 0];
sz = Column( "age" ) << get values;
yy = J( N Rows( xx ), 1, 0 );
For( ii = 1, ii <= N Rows( xx ), ii++,
	aa[xx[ii]]++;
	yy[ii] = aa[xx[ii]];
);
New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg( xx, yy, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Marker Seg( 1 ) ));
seg << get description();

```

### Get Force Labels

**構文:** obj &lt;&lt; Get Force Labels( "ラベルなし"|"値ラベル"|"行ラベル"|"行と値のラベル" )

**説明:** データテーブルにおける行の属性に関係なく、すべてのマーカーにラベルを強制的に付与する。

**JMP追加されたバージョン:** 18

### Get Gradient

**構文:** obj &lt;&lt; Get Gradient

**説明:** 色のグラデーションを取得する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
aa = [=> 0];
sz = Column( "age" ) << get values;
yy = J( N Rows( xx ), 1, 0 );
For( ii = 1, ii <= N Rows( xx ), ii++,
	aa[xx[ii]]++;
	yy[ii] = aa[xx[ii]];
);
New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg( xx, yy, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Marker Seg( 1 ) ));
seg << Get Gradient;

```

### Get Gradient Color Theme

**構文:** obj &lt;&lt; Get Gradient Color Theme

**説明:** グラデーションのカラーテーマを取得する。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
aa = [=> 0];
sz = Column( "age" ) << get values;
yy = J( N Rows( xx ), 1, 0 );
For( ii = 1, ii <= N Rows( xx ), ii++,
	aa[xx[ii]]++;
	yy[ii] = aa[xx[ii]];
);
New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg( xx, yy, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Marker Seg( 1 ) ));
seg << Get Gradient Color Theme;

```

### Get Gradient Discrete Colors

**構文:** obj &lt;&lt; Get Gradient Discrete Colors

**説明:** グラデーションの各水準を均一の色にするか、色の境目を滑らかに変化させるかを取得する。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
aa = [=> 0];
sz = Column( "age" ) << get values;
yy = J( N Rows( xx ), 1, 0 );
For( ii = 1, ii <= N Rows( xx ), ii++,
	aa[xx[ii]]++;
	yy[ii] = aa[xx[ii]];
);
New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg( xx, yy, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Marker Seg( 1 ) ));
seg << Get Gradient Discrete Colors;

```

### Get Gradient Fill

**構文:** obj &lt;&lt; Get Gradient Fill

**説明:** グラデーションのスケールの範囲外にある値について、色付けの方法を取得する。

**JMP追加されたバージョン:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Get Gradient Fill;

```

### Get Gradient Label Count

**構文:** obj &lt;&lt; Get Gradient Label Count

**説明:** グラデーションの凡例に表示されるラベルの数を取得する。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
aa = [=> 0];
sz = Column( "age" ) << get values;
yy = J( N Rows( xx ), 1, 0 );
For( ii = 1, ii <= N Rows( xx ), ii++,
	aa[xx[ii]]++;
	yy[ii] = aa[xx[ii]];
);
New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg( xx, yy, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Marker Seg( 1 ) ));
seg << Get Gradient Label Count;

```

### Get Gradient Label Levels

**構文:** [value1,value1, ... value N] = obj &lt;&lt; Get Gradient Label Levels

**説明:** グラデーションのスケールのラベルに使用される値のセットを取得する。

**JMP追加されたバージョン:** 18

#### 例 1

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Get Gradient Scale Values;

```

#### 例 2

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Scale Values( [-10.0, 0.0, 100] );
seg << Get Gradient Scale Values;

```

### Get Gradient Legend Horizontal

**構文:** obj &lt;&lt; Get Gradient Legend Horizontal

**説明:** グラデーションの凡例を横方向に表示するかどうかを取得する。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
aa = [=> 0];
sz = Column( "age" ) << get values;
yy = J( N Rows( xx ), 1, 0 );
For( ii = 1, ii <= N Rows( xx ), ii++,
	aa[xx[ii]]++;
	yy[ii] = aa[xx[ii]];
);
New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg( xx, yy, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Marker Seg( 1 ) ));
seg << Get Gradient Legend Horizontal;

```

### Get Gradient Legend Label Format

**構文:** obj &lt;&lt; Get Gradient Legend Label Format

**説明:** グラデーションの凡例ラベルの表示形式を取得する。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
aa = [=> 0];
sz = Column( "age" ) << get values;
yy = J( N Rows( xx ), 1, 0 );
For( ii = 1, ii <= N Rows( xx ), ii++,
	aa[xx[ii]]++;
	yy[ii] = aa[xx[ii]];
);
New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg( xx, yy, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Marker Seg( 1 ) ));
seg << Get Gradient Legend Label Format;

```

### Get Gradient Legend Label Width

**構文:** obj &lt;&lt; Get Gradient Legend Label Width

**説明:** グラデーションの凡例ラベルの最大文字数を取得する。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
aa = [=> 0];
sz = Column( "age" ) << get values;
yy = J( N Rows( xx ), 1, 0 );
For( ii = 1, ii <= N Rows( xx ), ii++,
	aa[xx[ii]]++;
	yy[ii] = aa[xx[ii]];
);
New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg( xx, yy, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Marker Seg( 1 ) ));
seg << Get Gradient Legend Label Width;

```

### Get Gradient Legend Show Labels

**構文:** obj &lt;&lt; Get Gradient Legend Show Labels

**説明:** グラデーションの凡例に水準ラベルを表示するかどうかを取得する。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
aa = [=> 0];
sz = Column( "age" ) << get values;
yy = J( N Rows( xx ), 1, 0 );
For( ii = 1, ii <= N Rows( xx ), ii++,
	aa[xx[ii]]++;
	yy[ii] = aa[xx[ii]];
);
New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg( xx, yy, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Marker Seg( 1 ) ));
seg << Get Gradient Legend Show Labels;

```

### Get Gradient Level Count

**構文:** obj &lt;&lt; Get Gradient Level Count

**説明:** グラデーションの水準数を取得する。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
aa = [=> 0];
sz = Column( "age" ) << get values;
yy = J( N Rows( xx ), 1, 0 );
For( ii = 1, ii <= N Rows( xx ), ii++,
	aa[xx[ii]]++;
	yy[ii] = aa[xx[ii]];
);
New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg( xx, yy, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Marker Seg( 1 ) ));
seg << Get Gradient Levels;

```

### Get Gradient Lightness Range

**構文:** obj &lt;&lt; Get Gradient Lightness Range

**説明:** グラデーションの水準の色について、明度の最小値と最大値を取得する。欠測値は、カラーテーマの元の値が使用されることを示す。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
aa = [=> 0];
sz = Column( "age" ) << get values;
yy = J( N Rows( xx ), 1, 0 );
For( ii = 1, ii <= N Rows( xx ), ii++,
	aa[xx[ii]]++;
	yy[ii] = aa[xx[ii]];
);
New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg( xx, yy, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Marker Seg( 1 ) ));
seg << Get Gradient Lightness Range;

```

### Get Gradient Range

**構文:** obj &lt;&lt; Get Gradient Range

**説明:** カスタムではないグラデーションのスケールの範囲を取得する。

**JMP追加されたバージョン:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Get Gradient Range;

```

### Get Gradient Reverse Color Order

**構文:** obj &lt;&lt; Get Gradient Reverse Color Order

**説明:** グラデーションの色の順序が逆かどうかを取得する。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
aa = [=> 0];
sz = Column( "age" ) << get values;
yy = J( N Rows( xx ), 1, 0 );
For( ii = 1, ii <= N Rows( xx ), ii++,
	aa[xx[ii]]++;
	yy[ii] = aa[xx[ii]];
);
New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg( xx, yy, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Marker Seg( 1 ) ));
seg << Get Gradient Reverse Color Order;

```

### Get Gradient Reverse Label Order

**構文:** obj &lt;&lt; Get Gradient Reverse Label Order

**説明:** グラデーション内のラベルの順序が逆かどうかを取得する。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
aa = [=> 0];
sz = Column( "age" ) << get values;
yy = J( N Rows( xx ), 1, 0 );
For( ii = 1, ii <= N Rows( xx ), ii++,
	aa[xx[ii]]++;
	yy[ii] = aa[xx[ii]];
);
New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg( xx, yy, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Marker Seg( 1 ) ));
seg << Get Gradient Reverse Label Order;

```

### Get Gradient Scale

**構文:** obj &lt;&lt; Get Gradient Scale

**説明:** グラデーションのスケールの種類を取得する。

**JMP追加されたバージョン:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Get Gradient Scale;

```

### Get Gradient Scale Values

**構文:** [value1,value1, ... value N] = obj &lt;&lt; Get Gradient Scale Values

**説明:** グラデーションのスケールのラベルに使用される値のセットを取得する。

**JMP追加されたバージョン:** 18

#### 例 1

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Get Gradient Scale Values;

```

#### 例 2

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Scale Values( [-10.0, 0.0, 100] );
seg << Get Gradient Scale Values;

```

### Get Gradient Show Missing

**構文:** obj &lt;&lt; Get Gradient Show Missing

**説明:** 凡例に欠測値を表示するかどうかを取得する。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
aa = [=> 0];
sz = Column( "age" ) << get values;
yy = J( N Rows( xx ), 1, 0 );
For( ii = 1, ii <= N Rows( xx ), ii++,
	aa[xx[ii]]++;
	yy[ii] = aa[xx[ii]];
);
New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg( xx, yy, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Marker Seg( 1 ) ));
seg << Get Gradient Show Missing;

```

### Get Gradient Transparency

**構文:** obj &lt;&lt; Get Gradient Transparency

**説明:** グラデーションの透明度を取得する。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
aa = [=> 0];
sz = Column( "age" ) << get values;
yy = J( N Rows( xx ), 1, 0 );
For( ii = 1, ii <= N Rows( xx ), ii++,
	aa[xx[ii]]++;
	yy[ii] = aa[xx[ii]];
);
New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg( xx, yy, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Marker Seg( 1 ) ));
seg << Get Gradient Transparency;

```

### Get Hide Missing Color

**構文:** true/false = obj &lt;&lt; Get Hide Missing Color

```jsl

Random Reset( 1111111 );
n = 1000;
T1 = J( n, 1, Random Normal() );
T1[Loc( J( n, 1, Random Integer( 0, 1 ) ) )] = .;
dt = New Table( "Test",
	New Column( "X", Values( J( n, 1, Random Uniform() ) ) ),
	New Column( "Y", Values( J( n, 1, Random Uniform() ) ) ),
	New Column( "T1", Values( T1 ) ),

);
obj = dt << Graph Builder(
	Size( 531, 456 ),
	Show Control Panel( 0 ),
	Variables( X( :X ), Y( :Y ), Color( :T1 ) ),
	Elements( Points( X, Y, Legend( 16 ) ) )
);

frame = Report( obj )[FrameBox( 1 )];
seg = (frame << Find Seg( Marker Seg( 1 ) ));
seg << Get Hide Missing Color;

```

### Get Hide Missing Size

**構文:** true/false = obj &lt;&lt; Get Hide Missing Size

```jsl

Random Reset( 1111111 );
n = 1000;
T1 = J( n, 1, Random Normal() );
T1[Loc( J( n, 1, Random Integer( 0, 1 ) ) )] = .;
dt = New Table( "Test",
	New Column( "X", Values( J( n, 1, Random Uniform() ) ) ),
	New Column( "Y", Values( J( n, 1, Random Uniform() ) ) ),
	New Column( "T1", Values( T1 ) ),

);
obj = dt << Graph Builder(
	Size( 531, 456 ),
	Show Control Panel( 0 ),
	Variables( X( :X ), Y( :Y ), Size( :T1 ) ),
	Elements( Points( X, Y, Legend( 16 ) ) )
);

frame = Report( obj )[FrameBox( 1 )];
seg = (frame << Find Seg( Marker Seg( 1 ) ));
seg << Get Hide Missing Size;

```

### Get Jitter

**構文:** {method, axis, limit, spacing, seed, side, overlap, grid offset, smoothing, max error, bandwidth} = obj &lt;&lt; Get Jitter

**説明:** マーカーが重ならないように設定されているマーカー位置のオフセットを戻す。methodは、none(なし)|random uniform(一様乱数)|random normal（正規乱数）|centered(中央寄せ)|centered grid(中央寄せグリッド)|positive grid(正のグリッド)。axisは、X|Y|XY。limitは、点をずらす幅で、メソッドに合わせて調節される。spacingは、点をずらすのに使うマーカーサイズのパーセンテージで、0は自動調整を示す。

**JMP追加されたバージョン:** 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
r = Oneway( Y( :height ), X( :sex ), Means( 1 ), MeanDiamonds( 1 ), XAxisProportional( 0 ) );
frame = (r << report)[FrameBox( 1 )];
seg = (frame << FindSeg( Marker Seg( 1 ) ));
{method, axis, limit, spacing, seed, side, overlap, grid offset, smoothing, max error,
bandwidth} = seg << Get Jitter();

```

### Get Jitter Offsets

**構文:** matrix = obj &lt;&lt; Get Jitter Offsets

**説明:** 点をずらずXとYのオフセットをNx2行列として戻す。

```jsl

x = J( 1, 100, Random Normal() );
y = J( 1, 100, 0 );
New Window( "Marker Seg Example",
	g = Graph Box(
		X Scale( -4, 4 ),
		Y Scale( -0.5, 0.5 ),
		Frame Size( 300, 200 ),
		Marker Seg( x, y, <<Set Marker Size( 5 ), <<Set Jitter( {"Grid", "Y"} ) )
	)
);
seg = (g[FrameBox( 1 )] << Find Seg( Marker Seg( 1 ) ));
jitter = seg << Get Jitter Offsets;
avg = Mean( jitter[0, 1] );

```

### Get Label Value Axis

**構文:** obj &lt;&lt; Get Label Value Axis( "X"|"Y" )

**説明:** 値ラベルとして、X軸とY軸のどちらの値を表示するかを指定する。

**JMP追加されたバージョン:** 18

### Get Label Value Format

**構文:** obj &lt;&lt; Get Label Value Format

**説明:** X値またはY値の表示形式。[自動]は、軸の表示形式を使用する。

**JMP追加されたバージョン:** 18

### Get Marker

**構文:** marker = obj &lt;&lt; Get Marker

**説明:** マーカーの種類を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
aa = [=> 0];
sz = Column( "age" ) << get values;
yy = J( N Rows( xx ), 1, 0 );
For( ii = 1, ii <= N Rows( xx ), ii++,
	aa[xx[ii]]++;
	yy[ii] = aa[xx[ii]];
);
New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg( xx, yy, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Marker Seg( 1 ) ));
seg << Get Marker;

```

### Get Marker Draw Column

**構文:** column = obj &lt;&lt; Get Marker Draw Column

**説明:** カスタムマーカーとして使用するデータテーブル列を戻す。

**JMP追加されたバージョン:** 16

```jsl

Open( "$SAMPLE_DATA/Big Class Families.jmp" );
r = Bivariate( Y( :height ), X( :weight ) );
frame = (r << report)[FrameBox( 1 )];
seg = (frame << FindSeg( Marker Seg( 1 ) ));
seg << Set Marker Draw Column( :picture );
ex = seg << Get Marker Draw Column();

```

### Get Marker Draw Expr

**構文:** expr = obj &lt;&lt; Get Marker Draw Expr

**説明:** カスタムマーカーを描画する式を戻す。

**JMP追加されたバージョン:** 16

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
r = Bivariate( Y( :height ), X( :weight ) );
frame = (r << report)[FrameBox( 1 )];
seg = (frame << FindSeg( Marker Seg( 1 ) ));
seg << Set Marker Draw Expr( [-1 0, 0 2, 1 0, 0 1, -1 0] );
ex = seg << Get Marker Draw Expr();

```

### Get Marker Size

**構文:** size = obj &lt;&lt; Get Marker Size

**説明:** マーカーのサイズを戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
aa = [=> 0];
sz = Column( "age" ) << get values;
yy = J( N Rows( xx ), 1, 0 );
For( ii = 1, ii <= N Rows( xx ), ii++,
	aa[xx[ii]]++;
	yy[ii] = aa[xx[ii]];
);
New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg( xx, yy, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Marker Seg( 1 ) ));
seg << Get Marker Size;

```

### Get Markers

**構文:** list = obj &lt;&lt; Get Markers

**説明:** 行の属性に基づいたマーカーのリストを戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
aa = [=> 0];
sz = Column( "age" ) << get values;
yy = J( N Rows( xx ), 1, 0 );
For( ii = 1, ii <= N Rows( xx ), ii++,
	aa[xx[ii]]++;
	yy[ii] = aa[xx[ii]];
);
New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg( xx, yy, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Marker Seg( 1 ) ));
seg << Get Markers;

```

### Get Overlay Color

**構文:** color = obj &lt;&lt; Get Overlay Color( marker index )

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
op = dt << Overlay Plot( X( :age ), Y( :height, :weight ) );
rep = op << report;
frame = rep[FrameBox( 1 )];
seg = (frame << Find Seg( Marker Seg( 1 ) ));
seg << Get Overlay Color( 1 );

```

### Get Overlay Count

**構文:** number = obj &lt;&lt; Get Overlay Count

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
op = dt << Overlay Plot( X( :age ), Y( :height, :weight ) );
rep = op << report;
frame = rep[FrameBox( 1 )];
seg = (frame << Find Seg( Marker Seg( 1 ) ));
seg << Get Overlay Count;

```

### Get Overlay Marker

**構文:** marker = obj &lt;&lt; Get Overlay Marker( marker index )

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
op = dt << Overlay Plot( X( :age ), Y( :height, :weight ) );
rep = op << report;
frame = rep[FrameBox( 1 )];
seg = (frame << Find Seg( Marker Seg( 1 ) ));
seg << Get Overlay Marker( 1 );

```

### Get Point

**構文:** point = obj &lt;&lt; Get Point( index )

**説明:** 指定の点の(x,y)座標を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
aa = [=> 0];
sz = Column( "age" ) << get values;
yy = J( N Rows( xx ), 1, 0 );
For( ii = 1, ii <= N Rows( xx ), ii++,
	aa[xx[ii]]++;
	yy[ii] = aa[xx[ii]];
);
New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg( xx, yy, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Marker Seg( 1 ) ));
seg << Get Point( 2 );

```

### Get Point Count

**構文:** Number = obj &lt;&lt; Get Point Count

**説明:** ディスプレイセグメント内の点の数を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
aa = [=> 0];
sz = Column( "age" ) << get values;
yy = J( N Rows( xx ), 1, 0 );
For( ii = 1, ii <= N Rows( xx ), ii++,
	aa[xx[ii]]++;
	yy[ii] = aa[xx[ii]];
);
New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg( xx, yy, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Marker Seg( 1 ) ));
seg << Get Point Count;

```

### Get Row Numbers

**構文:** matrix = obj &lt;&lt; Get Row Numbers

**説明:** マーカーの行番号のベクトルを戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
x = [10 50 70];
y = [60 50 10];
New Window( "Marker Seg Example",
	g = Graph Box( Marker Seg( x, y, Row States( dt, [5 7 9] ) ) )
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Marker Seg( 1 ) ));
seg << Get Row Numbers;

```

### Get Sizes

**構文:** matrix = obj &lt;&lt; Get Sizes

**説明:** マーカーサイズのベクトルを戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
aa = [=> 0];
sz = Column( "age" ) << get values;
yy = J( N Rows( xx ), 1, 0 );
For( ii = 1, ii <= N Rows( xx ), ii++,
	aa[xx[ii]]++;
	yy[ii] = aa[xx[ii]];
);
New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg( xx, yy, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Marker Seg( 1 ) ));
seg << Get Sizes;

```

### Get Transparency

**構文:** obj &lt;&lt; Get Transparency

**説明:** 透明度を表す数値(0～1)を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
aa = [=> 0];
sz = Column( "age" ) << get values;
yy = J( N Rows( xx ), 1, 0 );
For( ii = 1, ii <= N Rows( xx ), ii++,
	aa[xx[ii]]++;
	yy[ii] = aa[xx[ii]];
);
New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg( xx, yy, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Marker Seg( 1 ) ));
seg << Get Transparency;

```

### Get Value Label Width

**構文:** obj &lt;&lt; Get Value Label Width( number )

**説明:** ラベル値の最大表示幅。

**JMP追加されたバージョン:** 18

### Get X Values

**構文:** matrix = obj &lt;&lt; Get X Values

**説明:** Xの値のリストを戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
aa = [=> 0];
sz = Column( "age" ) << get values;
yy = J( N Rows( xx ), 1, 0 );
For( ii = 1, ii <= N Rows( xx ), ii++,
	aa[xx[ii]]++;
	yy[ii] = aa[xx[ii]];
);
New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg( xx, yy, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Marker Seg( 1 ) ));
seg << Get X Values;

```

### Get Y Values

**構文:** matrix = obj &lt;&lt; Get Y Values

**説明:** Yの値のリストを戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
aa = [=> 0];
sz = Column( "age" ) << get values;
yy = J( N Rows( xx ), 1, 0 );
For( ii = 1, ii <= N Rows( xx ), ii++,
	aa[xx[ii]]++;
	yy[ii] = aa[xx[ii]];
);
New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg( xx, yy, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Marker Seg( 1 ) ));
seg << Get Y Values;

```

### Gradient

**構文:** obj &lt;&lt; { &lt;Color Theme(theme)&gt;, &lt;Min Lightness(0-1)&gt;, &lt;Max Lightness(0-1)&gt;, &lt;Contour Levels(num)&gt;, &lt;Reverse Gradient(0|1)&gt;, &lt;Density Gradient("Fade To White"|"Fade To Gray"|"Full Color")&gt;, &lt;Gradient Transparency("None"|"Linear")&gt; }obj &lt;&lt; { &lt;Color Theme(theme)&gt;, &lt;Min Lightness(0-1)&gt;, &lt;Max Lightness(0-1)&gt;, &lt;N Labels(num)&gt;, &lt;Show Missing Color("On"|"Off"|"Auto")&gt;, &lt;Scale Type("Linear"|"Quantile"|"Standard Deviation"|"Log"|"Log Offset"|"Custom")&gt;, &lt;Scale Values([v1, v2, …])&gt;, &lt;Range Type("Default"|"Exact Data Range"|"Middle 90%")&gt;, &lt;Fill("Between"|"Above"|"Below"|"Above Below")&gt;, &lt;Reverse Gradient(0|1)&gt;, &lt;Reverse Labels(0|1)&gt;, &lt;Discrete Color(0|1)&gt; }, &lt;Label Format(labelFormat)&gt;, &lt;Width(num)&gt;, &lt;Horizontal(0|1)&gt;, &lt;Show Labels(0|1)&gt;

**説明:** 色のグラデーションを設定する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
aa = [=> 0];
sz = Column( "age" ) << get values;
yy = J( N Rows( xx ), 1, 0 );
For( ii = 1, ii <= N Rows( xx ), ii++,
	aa[xx[ii]]++;
	yy[ii] = aa[xx[ii]];
);
New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg( xx, yy, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Marker Seg( 1 ) ));
seg << Set Gradient( {Color Theme( "Viridis" ), N Labels( 7 )} );

```

### Gradient Color Theme

**構文:** obj &lt;&lt; Gradient Color Theme

**説明:** グラデーションのカラーテーマを設定する。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
aa = [=> 0];
sz = Column( "age" ) << get values;
yy = J( N Rows( xx ), 1, 0 );
For( ii = 1, ii <= N Rows( xx ), ii++,
	aa[xx[ii]]++;
	yy[ii] = aa[xx[ii]];
);
New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg( xx, yy, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Marker Seg( 1 ) ));
seg << Set Gradient Color Theme( "Viridis" );

```

### Gradient Discrete Colors

**構文:** obj &lt;&lt; Gradient Discrete Colors

**説明:** グラデーションの各水準を均一の色にするか、色の境目を滑らかに変化させるかを設定する。

**JMP追加されたバージョン:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Points( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Marker Seg( 1 ) );
seg << Set Gradient Discrete Colors( 1 );

```

### Gradient Fill

**構文:** obj &lt;&lt; Gradient Fill( "間"|"上"|"下"|"上下"="上下" )

**説明:** グラデーションのスケールの範囲外にある値について、色付けの方法を設定する。 デフォルトの値は"上下"。

**JMP追加されたバージョン:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Range( "Middle 90%" );
seg << Set Gradient Fill( "Between" );

```

### Gradient Label Count

**構文:** obj &lt;&lt; Gradient Label Count

**説明:** グラデーションの凡例に表示するラベルの数を設定する。これは、等高線の水準数に1を足した値。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
aa = [=> 0];
sz = Column( "age" ) << get values;
yy = J( N Rows( xx ), 1, 0 );
For( ii = 1, ii <= N Rows( xx ), ii++,
	aa[xx[ii]]++;
	yy[ii] = aa[xx[ii]];
);
New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg( xx, yy, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Marker Seg( 1 ) ));
seg << Set Gradient Label Count( 8 );

```

### Gradient Label Levels

**構文:** obj &lt;&lt; Gradient Label Levels( [value1,value1, ... value N] )

**説明:** グラデーションのスケールに使用する値のセットを設定する。

**JMP追加されたバージョン:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Scale Values( [-10.0, 0.0, 10.0] );

```

### Gradient Legend Horizontal

**構文:** obj &lt;&lt; Gradient Legend Horizontal

**説明:** グラデーションの凡例を横方向に表示するかどうかを設定する。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
aa = [=> 0];
sz = Column( "age" ) << get values;
yy = J( N Rows( xx ), 1, 0 );
For( ii = 1, ii <= N Rows( xx ), ii++,
	aa[xx[ii]]++;
	yy[ii] = aa[xx[ii]];
);
New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg( xx, yy, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Marker Seg( 1 ) ));
seg << Set Gradient Legend Horizontal( 1 );

```

### Gradient Legend Label Format

**構文:** obj &lt;&lt; Gradient Legend Label Format

**説明:** グラデーションの凡例ラベルの表示形式を設定する。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
aa = [=> 0];
sz = Column( "age" ) << get values;
yy = J( N Rows( xx ), 1, 0 );
For( ii = 1, ii <= N Rows( xx ), ii++,
	aa[xx[ii]]++;
	yy[ii] = aa[xx[ii]];
);
New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg( xx, yy, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Marker Seg( 1 ) ));
seg << Set Gradient Legend Label Format( "Fixed Dec", 6, 3 );

```

### Gradient Legend Label Width

**構文:** obj &lt;&lt; Gradient Legend Label Width

**説明:** グラデーションの凡例ラベルの最大長さ(文字数)を設定する。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
aa = [=> 0];
sz = Column( "age" ) << get values;
yy = J( N Rows( xx ), 1, 0 );
For( ii = 1, ii <= N Rows( xx ), ii++,
	aa[xx[ii]]++;
	yy[ii] = aa[xx[ii]];
);
New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg( xx, yy, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Marker Seg( 1 ) ));
seg << Set Gradient Legend Label Width( 4 );

```

### Gradient Legend Show Labels

**構文:** obj &lt;&lt; Gradient Legend Show Labels

**説明:** グラデーションの凡例に水準ラベルを表示するかどうかを設定する。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
aa = [=> 0];
sz = Column( "age" ) << get values;
yy = J( N Rows( xx ), 1, 0 );
For( ii = 1, ii <= N Rows( xx ), ii++,
	aa[xx[ii]]++;
	yy[ii] = aa[xx[ii]];
);
New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg( xx, yy, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Marker Seg( 1 ) ));
seg << Set Gradient Legend Show Labels( 0 );

```

### Gradient Level Count

**構文:** obj &lt;&lt; Gradient Level Count

**説明:** グラデーションの水準数を設定する。これは、ラベルの数から1を引いた値。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
aa = [=> 0];
sz = Column( "age" ) << get values;
yy = J( N Rows( xx ), 1, 0 );
For( ii = 1, ii <= N Rows( xx ), ii++,
	aa[xx[ii]]++;
	yy[ii] = aa[xx[ii]];
);
New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg( xx, yy, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Marker Seg( 1 ) ));
seg << Set Gradient Levels( 7 );

```

### Gradient Lightness Range

**構文:** obj &lt;&lt; Gradient Lightness Range

**説明:** グラデーションの水準の色について、明度の最小値と最大値を設定する。この範囲をカバーするような色が使われる。欠測値は変化なしとして扱われる。

**JMP追加されたバージョン:** 18

#### 例 1

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
aa = [=> 0];
sz = Column( "age" ) << get values;
yy = J( N Rows( xx ), 1, 0 );
For( ii = 1, ii <= N Rows( xx ), ii++,
	aa[xx[ii]]++;
	yy[ii] = aa[xx[ii]];
);
New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg( xx, yy, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Marker Seg( 1 ) ));
seg << Set Gradient Lightness Range( Min( 0.25 ), Max( 0.75 ) );

```

#### 例 2

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
aa = [=> 0];
sz = Column( "age" ) << get values;
yy = J( N Rows( xx ), 1, 0 );
For( ii = 1, ii <= N Rows( xx ), ii++,
	aa[xx[ii]]++;
	yy[ii] = aa[xx[ii]];
);
New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg( xx, yy, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Marker Seg( 1 ) ));
seg << Set Gradient Lightness Range( 0.25, 0.75 );

```

#### 例 3

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
aa = [=> 0];
sz = Column( "age" ) << get values;
yy = J( N Rows( xx ), 1, 0 );
For( ii = 1, ii <= N Rows( xx ), ii++,
	aa[xx[ii]]++;
	yy[ii] = aa[xx[ii]];
);
New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg( xx, yy, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Marker Seg( 1 ) ));
seg << Set Gradient Lightness Range( ., 0.75 );

```

### Gradient Range

**構文:** obj &lt;&lt; Gradient Range( "デフォルト"|"正確なデータ範囲"|"中央部 90%"="デフォルト" )

**説明:** カスタムではないグラデーションのスケールの範囲を設定する。 デフォルトの値は"デフォルト"。

**JMP追加されたバージョン:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Range( "Exact Data Range" );

```

### Gradient Reverse Color Order

**構文:** obj &lt;&lt; Gradient Reverse Color Order

**説明:** グラデーションの色の順序を逆にする。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
aa = [=> 0];
sz = Column( "age" ) << get values;
yy = J( N Rows( xx ), 1, 0 );
For( ii = 1, ii <= N Rows( xx ), ii++,
	aa[xx[ii]]++;
	yy[ii] = aa[xx[ii]];
);
New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg( xx, yy, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Marker Seg( 1 ) ));
seg << Set Gradient Reverse Color Order( 1 );

```

### Gradient Reverse Label Order

**構文:** obj &lt;&lt; Gradient Reverse Label Order

**説明:** グラデーションのラベルの順序を逆にする。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
aa = [=> 0];
sz = Column( "age" ) << get values;
yy = J( N Rows( xx ), 1, 0 );
For( ii = 1, ii <= N Rows( xx ), ii++,
	aa[xx[ii]]++;
	yy[ii] = aa[xx[ii]];
);
New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg( xx, yy, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Marker Seg( 1 ) ));
seg << Set Gradient Reverse Label Order( 1 );

```

### Gradient Scale

**構文:** obj &lt;&lt; Gradient Scale( "線形"|"分位点"|"標準偏差"|"対数"|"対数オフセット"|"カスタム"="線形" )

**説明:** グラデーションのスケールの種類を設定する。 デフォルトの値は"線形"。

**JMP追加されたバージョン:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Scale( "Quantile" );

```

### Gradient Scale Values

**構文:** obj &lt;&lt; Gradient Scale Values( [value1,value1, ... value N] )

**説明:** グラデーションのスケールに使用する値のセットを設定する。

**JMP追加されたバージョン:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Scale Values( [-10.0, 0.0, 10.0] );

```

### Gradient Show Missing

**構文:** obj &lt;&lt; Gradient Show Missing( "自動"|"オン"|"オフ"="自動" )

**説明:** 凡例に欠測値を表示するかどうかを設定する。 デフォルトの値は"自動"。

**JMP追加されたバージョン:** 18

```jsl

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

**構文:** obj &lt;&lt; Gradient Transparency( "なし"|"線形"="線形" )

**説明:** グラデーションの透明度を設定する。 デフォルトの値は"線形"。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
aa = [=> 0];
sz = Column( "age" ) << get values;
yy = J( N Rows( xx ), 1, 0 );
For( ii = 1, ii <= N Rows( xx ), ii++,
	aa[xx[ii]]++;
	yy[ii] = aa[xx[ii]];
);
New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg( xx, yy, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Marker Seg( 1 ) ));
seg << Gradient Transparency( "None" );

```

### Label Offset

**構文:** obj &lt;&lt; Label Offset( {pt, x offset, y offset}, ... )

**説明:** 指定された座標に行ラベルを配置する。

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Labeled( Row State( 5 ) ) = 1;
Labeled( Row State( 8 ) ) = 1;
dist = Distribution( Continuous Distribution( Column( :height ) ) );
frame = (dist << report)[FrameBox( 2 )];
seg = (frame << Find Seg( Marker Seg( 1 ) ));
seg << label offset( {0, -20, -10}, {1, -20, -30} );

```

### Marker

**構文:** obj &lt;&lt; Marker( marker )

**説明:** すべてのマーカーの種類を設定する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
aa = [=> 0];
sz = Column( "age" ) << get values;
yy = J( N Rows( xx ), 1, 0 );
For( ii = 1, ii <= N Rows( xx ), ii++,
	aa[xx[ii]]++;
	yy[ii] = aa[xx[ii]];
);
New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg( xx, yy, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Marker Seg( 1 ) ));
seg << Set Marker( "Square" );

```

### Marker Size

**構文:** obj &lt;&lt; Marker Size

**説明:** マーカーのサイズを設定する。サイズのオプションはDot(ドット)、Small(小)、Medium(中)、Large(大)、XL、XXL、XXXL。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
aa = [=> 0];
sz = Column( "age" ) << get values;
yy = J( N Rows( xx ), 1, 0 );
For( ii = 1, ii <= N Rows( xx ), ii++,
	aa[xx[ii]]++;
	yy[ii] = aa[xx[ii]];
);
New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg( xx, yy, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Marker Seg( 1 ) ));
seg << Set Marker Size( "XL" );
Wait( 1 );
seg << Set Marker Size( "dot" );

```

### Parent

**構文:** seg2 = obj &lt;&lt; Parent

**説明:** ディスプレイセグメントの親を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
aa = [=> 0];
sz = Column( "age" ) << get values;
yy = J( N Rows( xx ), 1, 0 );
For( ii = 1, ii <= N Rows( xx ), ii++,
	aa[xx[ii]]++;
	yy[ii] = aa[xx[ii]];
);
New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg( xx, yy, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Marker Seg( 1 ) ));
seg << Parent;

```

### Revert

**構文:** obj &lt;&lt; Revert

**説明:** セグメントを元の状態に戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
aa = [=> 0];
sz = Column( "age" ) << get values;
yy = J( N Rows( xx ), 1, 0 );
For( ii = 1, ii <= N Rows( xx ), ii++,
	aa[xx[ii]]++;
	yy[ii] = aa[xx[ii]];
);
New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg( xx, yy, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Marker Seg( 1 ) ));
Wait( 1 );
seg << Set Color( "Red" );
Wait( 1 );
seg << Revert;

```

### Set Color

**構文:** obj &lt;&lt; Set Color( color )

**説明:** すべてのマーカーの色を設定する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
aa = [=> 0];
sz = Column( "age" ) << get values;
yy = J( N Rows( xx ), 1, 0 );
For( ii = 1, ii <= N Rows( xx ), ii++,
	aa[xx[ii]]++;
	yy[ii] = aa[xx[ii]];
);
New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg( xx, yy, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Marker Seg( 1 ) ));
seg << Color( "Green" );

```

### Set Description

**構文:** obj &lt;&lt; Set Description( description )

**説明:** ディスプレイセグメントの名前を設定する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
aa = [=> 0];
sz = Column( "age" ) << get values;
yy = J( N Rows( xx ), 1, 0 );
For( ii = 1, ii <= N Rows( xx ), ii++,
	aa[xx[ii]]++;
	yy[ii] = aa[xx[ii]];
);
New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg( xx, yy, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Marker Seg( 1 ) ));
seg << set description( "my seg" );

```

### Set Force Labels

**構文:** obj &lt;&lt; Set Force Labels( "ラベルなし"|"値ラベル"|"行ラベル"|"行と値のラベル" )

**説明:** データテーブルにおける行の属性に関係なく、すべてのマーカーにラベルを強制的に付与する。

**JMP追加されたバージョン:** 18

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Bivariate(
	Y( :weight ),
	X( :height ),
	SendToReport(
		Dispatch( {}, "Bivar Plot", FrameBox,
			{DispatchSeg(
				Marker Seg( 1 ),
				Set Force Labels( "Label by Value" ),
				Set Label Value Axis( "X" ),
				Set Label Value Format( "Fixed", 1 )
			)}
		)
	)
);

```

### Set Gradient

**構文:** obj &lt;&lt; { &lt;Color Theme(theme)&gt;, &lt;Min Lightness(0-1)&gt;, &lt;Max Lightness(0-1)&gt;, &lt;Contour Levels(num)&gt;, &lt;Reverse Gradient(0|1)&gt;, &lt;Density Gradient("Fade To White"|"Fade To Gray"|"Full Color")&gt;, &lt;Gradient Transparency("None"|"Linear")&gt; }obj &lt;&lt; { &lt;Color Theme(theme)&gt;, &lt;Min Lightness(0-1)&gt;, &lt;Max Lightness(0-1)&gt;, &lt;N Labels(num)&gt;, &lt;Show Missing Color("On"|"Off"|"Auto")&gt;, &lt;Scale Type("Linear"|"Quantile"|"Standard Deviation"|"Log"|"Log Offset"|"Custom")&gt;, &lt;Scale Values([v1, v2, …])&gt;, &lt;Range Type("Default"|"Exact Data Range"|"Middle 90%")&gt;, &lt;Fill("Between"|"Above"|"Below"|"Above Below")&gt;, &lt;Reverse Gradient(0|1)&gt;, &lt;Reverse Labels(0|1)&gt;, &lt;Discrete Color(0|1)&gt; }, &lt;Label Format(labelFormat)&gt;, &lt;Width(num)&gt;, &lt;Horizontal(0|1)&gt;, &lt;Show Labels(0|1)&gt;

**説明:** 色のグラデーションを設定する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
aa = [=> 0];
sz = Column( "age" ) << get values;
yy = J( N Rows( xx ), 1, 0 );
For( ii = 1, ii <= N Rows( xx ), ii++,
	aa[xx[ii]]++;
	yy[ii] = aa[xx[ii]];
);
New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg( xx, yy, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Marker Seg( 1 ) ));
seg << Set Gradient( {Color Theme( "Viridis" ), N Labels( 7 )} );

```

### Set Gradient Color Theme

**構文:** obj &lt;&lt; Set Gradient Color Theme

**説明:** グラデーションのカラーテーマを設定する。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
aa = [=> 0];
sz = Column( "age" ) << get values;
yy = J( N Rows( xx ), 1, 0 );
For( ii = 1, ii <= N Rows( xx ), ii++,
	aa[xx[ii]]++;
	yy[ii] = aa[xx[ii]];
);
New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg( xx, yy, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Marker Seg( 1 ) ));
seg << Set Gradient Color Theme( "Viridis" );

```

### Set Gradient Custom Scale

**構文:** obj &lt;&lt; Set Gradient Custom Scale

**説明:** 指定した値のリストにより、グラデーションにカスタムスケールを設定する。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
aa = [=> 0];
sz = Column( "age" ) << get values;
yy = J( N Rows( xx ), 1, 0 );
For( ii = 1, ii <= N Rows( xx ), ii++,
	aa[xx[ii]]++;
	yy[ii] = aa[xx[ii]];
);
New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg( xx, yy, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Marker Seg( 1 ) ));
seg << Set Gradient Custom Scale( {0.0, 5.0, 10.0, 20.0} );

```

### Set Gradient Discrete Colors

**構文:** obj &lt;&lt; Set Gradient Discrete Colors

**説明:** グラデーションの各水準を均一の色にするか、色の境目を滑らかに変化させるかを設定する。

**JMP追加されたバージョン:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Points( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Marker Seg( 1 ) );
seg << Set Gradient Discrete Colors( 1 );

```

### Set Gradient Fill

**構文:** obj &lt;&lt; Set Gradient Fill( "間"|"上"|"下"|"上下"="上下" )

**説明:** グラデーションのスケールの範囲外にある値について、色付けの方法を設定する。 デフォルトの値は"上下"。

**JMP追加されたバージョン:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Range( "Middle 90%" );
seg << Set Gradient Fill( "Between" );

```

### Set Gradient Label Count

**構文:** obj &lt;&lt; Set Gradient Label Count

**説明:** グラデーションの凡例に表示するラベルの数を設定する。これは、等高線の水準数に1を足した値。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
aa = [=> 0];
sz = Column( "age" ) << get values;
yy = J( N Rows( xx ), 1, 0 );
For( ii = 1, ii <= N Rows( xx ), ii++,
	aa[xx[ii]]++;
	yy[ii] = aa[xx[ii]];
);
New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg( xx, yy, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Marker Seg( 1 ) ));
seg << Set Gradient Label Count( 8 );

```

### Set Gradient Label Levels

**構文:** obj &lt;&lt; Set Gradient Label Levels( [value1,value1, ... value N] )

**説明:** グラデーションのスケールに使用する値のセットを設定する。

**JMP追加されたバージョン:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Scale Values( [-10.0, 0.0, 10.0] );

```

### Set Gradient Legend Horizontal

**構文:** obj &lt;&lt; Set Gradient Legend Horizontal

**説明:** グラデーションの凡例を横方向に表示するかどうかを設定する。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
aa = [=> 0];
sz = Column( "age" ) << get values;
yy = J( N Rows( xx ), 1, 0 );
For( ii = 1, ii <= N Rows( xx ), ii++,
	aa[xx[ii]]++;
	yy[ii] = aa[xx[ii]];
);
New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg( xx, yy, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Marker Seg( 1 ) ));
seg << Set Gradient Legend Horizontal( 1 );

```

### Set Gradient Legend Label Format

**構文:** obj &lt;&lt; Set Gradient Legend Label Format

**説明:** グラデーションの凡例ラベルの表示形式を設定する。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
aa = [=> 0];
sz = Column( "age" ) << get values;
yy = J( N Rows( xx ), 1, 0 );
For( ii = 1, ii <= N Rows( xx ), ii++,
	aa[xx[ii]]++;
	yy[ii] = aa[xx[ii]];
);
New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg( xx, yy, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Marker Seg( 1 ) ));
seg << Set Gradient Legend Label Format( "Fixed Dec", 6, 3 );

```

### Set Gradient Legend Label Width

**構文:** obj &lt;&lt; Set Gradient Legend Label Width

**説明:** グラデーションの凡例ラベルの最大長さ(文字数)を設定する。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
aa = [=> 0];
sz = Column( "age" ) << get values;
yy = J( N Rows( xx ), 1, 0 );
For( ii = 1, ii <= N Rows( xx ), ii++,
	aa[xx[ii]]++;
	yy[ii] = aa[xx[ii]];
);
New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg( xx, yy, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Marker Seg( 1 ) ));
seg << Set Gradient Legend Label Width( 4 );

```

### Set Gradient Legend Show Labels

**構文:** obj &lt;&lt; Set Gradient Legend Show Labels

**説明:** グラデーションの凡例に水準ラベルを表示するかどうかを設定する。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
aa = [=> 0];
sz = Column( "age" ) << get values;
yy = J( N Rows( xx ), 1, 0 );
For( ii = 1, ii <= N Rows( xx ), ii++,
	aa[xx[ii]]++;
	yy[ii] = aa[xx[ii]];
);
New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg( xx, yy, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Marker Seg( 1 ) ));
seg << Set Gradient Legend Show Labels( 0 );

```

### Set Gradient Level Count

**構文:** obj &lt;&lt; Set Gradient Level Count

**説明:** グラデーションの水準数を設定する。これは、ラベルの数から1を引いた値。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
aa = [=> 0];
sz = Column( "age" ) << get values;
yy = J( N Rows( xx ), 1, 0 );
For( ii = 1, ii <= N Rows( xx ), ii++,
	aa[xx[ii]]++;
	yy[ii] = aa[xx[ii]];
);
New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg( xx, yy, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Marker Seg( 1 ) ));
seg << Set Gradient Levels( 7 );

```

### Set Gradient Lightness Range

**構文:** obj &lt;&lt; Set Gradient Lightness Range

**説明:** グラデーションの水準の色について、明度の最小値と最大値を設定する。この範囲をカバーするような色が使われる。欠測値は変化なしとして扱われる。

**JMP追加されたバージョン:** 18

#### 例 1

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
aa = [=> 0];
sz = Column( "age" ) << get values;
yy = J( N Rows( xx ), 1, 0 );
For( ii = 1, ii <= N Rows( xx ), ii++,
	aa[xx[ii]]++;
	yy[ii] = aa[xx[ii]];
);
New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg( xx, yy, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Marker Seg( 1 ) ));
seg << Set Gradient Lightness Range( Min( 0.25 ), Max( 0.75 ) );

```

#### 例 2

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
aa = [=> 0];
sz = Column( "age" ) << get values;
yy = J( N Rows( xx ), 1, 0 );
For( ii = 1, ii <= N Rows( xx ), ii++,
	aa[xx[ii]]++;
	yy[ii] = aa[xx[ii]];
);
New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg( xx, yy, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Marker Seg( 1 ) ));
seg << Set Gradient Lightness Range( 0.25, 0.75 );

```

#### 例 3

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
aa = [=> 0];
sz = Column( "age" ) << get values;
yy = J( N Rows( xx ), 1, 0 );
For( ii = 1, ii <= N Rows( xx ), ii++,
	aa[xx[ii]]++;
	yy[ii] = aa[xx[ii]];
);
New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg( xx, yy, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Marker Seg( 1 ) ));
seg << Set Gradient Lightness Range( ., 0.75 );

```

### Set Gradient Range

**構文:** obj &lt;&lt; Set Gradient Range( "デフォルト"|"正確なデータ範囲"|"中央部 90%"="デフォルト" )

**説明:** カスタムではないグラデーションのスケールの範囲を設定する。 デフォルトの値は"デフォルト"。

**JMP追加されたバージョン:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Range( "Exact Data Range" );

```

### Set Gradient Reverse Color Order

**構文:** obj &lt;&lt; Set Gradient Reverse Color Order

**説明:** グラデーションの色の順序を逆にする。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
aa = [=> 0];
sz = Column( "age" ) << get values;
yy = J( N Rows( xx ), 1, 0 );
For( ii = 1, ii <= N Rows( xx ), ii++,
	aa[xx[ii]]++;
	yy[ii] = aa[xx[ii]];
);
New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg( xx, yy, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Marker Seg( 1 ) ));
seg << Set Gradient Reverse Color Order( 1 );

```

### Set Gradient Reverse Label Order

**構文:** obj &lt;&lt; Set Gradient Reverse Label Order

**説明:** グラデーションのラベルの順序を逆にする。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
aa = [=> 0];
sz = Column( "age" ) << get values;
yy = J( N Rows( xx ), 1, 0 );
For( ii = 1, ii <= N Rows( xx ), ii++,
	aa[xx[ii]]++;
	yy[ii] = aa[xx[ii]];
);
New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg( xx, yy, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Marker Seg( 1 ) ));
seg << Set Gradient Reverse Label Order( 1 );

```

### Set Gradient Scale

**構文:** obj &lt;&lt; Set Gradient Scale( "線形"|"分位点"|"標準偏差"|"対数"|"対数オフセット"|"カスタム"="線形" )

**説明:** グラデーションのスケールの種類を設定する。 デフォルトの値は"線形"。

**JMP追加されたバージョン:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Scale( "Quantile" );

```

### Set Gradient Scale Values

**構文:** obj &lt;&lt; Set Gradient Scale Values( [value1,value1, ... value N] )

**説明:** グラデーションのスケールに使用する値のセットを設定する。

**JMP追加されたバージョン:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Scale Values( [-10.0, 0.0, 10.0] );

```

### Set Gradient Show Missing

**構文:** obj &lt;&lt; Set Gradient Show Missing( "自動"|"オン"|"オフ"="自動" )

**説明:** 凡例に欠測値を表示するかどうかを設定する。 デフォルトの値は"自動"。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :city ), Y( :POP ), Color( :NO ) ),
	Elements( Bar( X, Y ) )
);
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Bar Seg( 1 ) );
seg << Set Gradient Show Missing( "Off" );

```

### Set Hide Missing Color

**構文:** obj &lt;&lt; Set Hide Missing Color( true/false )

```jsl

Random Reset( 1111111 );
n = 1000;
T1 = J( n, 1, Random Normal() );
T1[Loc( J( n, 1, Random Integer( 0, 1 ) ) )] = .;
dt = New Table( "Test",
	New Column( "X", Values( J( n, 1, Random Uniform() ) ) ),
	New Column( "Y", Values( J( n, 1, Random Uniform() ) ) ),
	New Column( "T1", Values( T1 ) ),

);
obj = dt << Graph Builder(
	Size( 531, 456 ),
	Show Control Panel( 0 ),
	Variables( X( :X ), Y( :Y ), Color( :T1 ) ),
	Elements( Points( X, Y, Legend( 16 ) ) )
);

frame = Report( obj )[FrameBox( 1 )];
seg = (frame << Find Seg( Marker Seg( 1 ) ));
seg << Set Hide Missing Color( true );

```

### Set Hide Missing Size

**構文:** obj &lt;&lt; Set Hide Missing Size( true/false )

```jsl

Random Reset( 1111111 );
n = 1000;
T1 = J( n, 1, Random Normal() );
T1[Loc( J( n, 1, Random Integer( 0, 1 ) ) )] = .;
dt = New Table( "Test",
	New Column( "X", Values( J( n, 1, Random Uniform() ) ) ),
	New Column( "Y", Values( J( n, 1, Random Uniform() ) ) ),
	New Column( "T1", Values( T1 ) ),

);
obj = dt << Graph Builder(
	Size( 531, 456 ),
	Show Control Panel( 0 ),
	Variables( X( :X ), Y( :Y ), Size( :T1 ) ),
	Elements( Points( X, Y, Legend( 16 ) ) )
);

frame = Report( obj )[FrameBox( 1 )];
seg = (frame << Find Seg( Marker Seg( 1 ) ));
seg << Set Hide Missing Size( true );

```

### Set Jitter

**構文:** obj &lt;&lt; Set Jitter( {method, axis, limit, spacing, seed, side, overlap, grid offset, smooth, max error, bandwidth} )

**説明:** マーカーが重ならないようにマーカー位置にオフセットを適用する。methodは、none(なし)|random uniform(一様乱数)|random normal（正規乱数）|centered(中央寄せ)|centered grid(中央寄せグリッド)|positive grid(正のグリッド)。axisは、X|Y|XY。limitは、点をずらす幅で、メソッドに合わせて調節される。spacingは、点をずらすのに使うマーカーサイズのパーセンテージで、0は自動調整を示す。

**JMP追加されたバージョン:** 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
r = Oneway( Y( :height ), X( :sex ), Means( 1 ), MeanDiamonds( 1 ), XAxisProportional( 0 ) );
frame = (r << report)[FrameBox( 1 )];
seg = (frame << FindSeg( Marker Seg( 1 ) ));
seg << Set Jitter( {"Grid", "X", 1, 0, 0, "Centered"} );

```

### Set Label Value Axis

**構文:** obj &lt;&lt; Set Label Value Axis( "X"|"Y" )

**説明:** 値ラベルとして、X軸とY軸のどちらの値を表示するかを指定する。

**JMP追加されたバージョン:** 18

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Bivariate(
	Y( :weight ),
	X( :height ),
	SendToReport(
		Dispatch( {}, "Bivar Plot", FrameBox,
			{DispatchSeg(
				Marker Seg( 1 ),
				Set Force Labels( "Label by Value" ),
				Set Label Value Axis( "X" ),
				Set Label Value Format( "Fixed", 1 )
			)}
		)
	)
);

```

### Set Label Value Format

**構文:** obj &lt;&lt; Set Label Value Format

**説明:** X値またはY値の表示形式。[自動]は、軸の表示形式を使用する。

**JMP追加されたバージョン:** 18

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Bivariate(
	Y( :weight ),
	X( :height ),
	SendToReport(
		Dispatch( {}, "Bivar Plot", FrameBox,
			{DispatchSeg(
				Marker Seg( 1 ),
				Set Force Labels( "Label by Value" ),
				Set Label Value Axis( "X" ),
				Set Label Value Format( "Fixed", 1 )
			)}
		)
	)
);

```

### Set Label Value Width

**構文:** obj &lt;&lt; Set Label Value Width( number )

**説明:** ラベル値の最大表示幅。

**JMP追加されたバージョン:** 18

### Set Marker

**構文:** obj &lt;&lt; Set Marker( marker )

**説明:** すべてのマーカーの種類を設定する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
aa = [=> 0];
sz = Column( "age" ) << get values;
yy = J( N Rows( xx ), 1, 0 );
For( ii = 1, ii <= N Rows( xx ), ii++,
	aa[xx[ii]]++;
	yy[ii] = aa[xx[ii]];
);
New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg( xx, yy, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Marker Seg( 1 ) ));
seg << Set Marker( "Square" );

```

### Set Marker Draw Column

**構文:** obj &lt;&lt; Set Marker Draw Column( column )

**説明:** カスタムマーカーの描画に使用するデータテーブル列を設定する。画像、多角形を表す点の行列、テキスト、描画コードまたは関数を持つ列を指定できる。

**JMP追加されたバージョン:** 16

```jsl

Open( "$SAMPLE_DATA/Big Class Families.jmp" );
r = Bivariate( Y( :height ), X( :weight ) );
frame = (r << report)[FrameBox( 1 )];
seg = (frame << FindSeg( Marker Seg( 1 ) ));
Wait( 2 );
seg << Set Marker Draw Column( :sex );
Wait( 2 );
seg << Set Marker Draw Column( :picture );

```

### Set Marker Draw Expr

**構文:** obj &lt;&lt; Set Marker Draw Expr( expr )

**説明:** カスタムマーカーを描画する式を設定する。多角形を表す点の行列、テキスト、描画コードまたは関数を指定できる。

**JMP追加されたバージョン:** 16

#### Drawing function

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
r = Bivariate( Y( :height ), X( :weight ) );
frame = (r << report)[FrameBox( 1 )];
seg = (frame << FindSeg( Marker Seg( 1 ) ));
seg << Set Marker Draw Expr(
	Function( {this seg, this row, x, y, size, row state},
		If( Mod( this row, 2 ) == 1,
			Line(
				Eval List( {x, y} ),
				Eval List( {:weight[this row + 1], :height[this row + 1]} )
			);
			"A";
		,
			"B"
		)
	)
);

```

#### Drawing script

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
r = Bivariate( Y( :height ), X( :weight ) );
frame = (r << report)[FrameBox( 1 )];
seg = (frame << FindSeg( Marker Seg( 1 ) ));
seg << Set Marker Draw Expr( Expr( Arc( -2, -:age / 3, 2, :age / 3, -90, 90 ) ) );

```

#### Matrix polyline

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
r = Bivariate( Y( :height ), X( :weight ) );
frame = (r << report)[FrameBox( 1 )];
seg = (frame << FindSeg( Marker Seg( 1 ) ));
seg << Set Marker Draw Expr( [-1 0, 0 2, 1 0, 0 1, -1 0] );

```

#### Text

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
r = Bivariate( Y( :height ), X( :weight ) );
frame = (r << report)[FrameBox( 1 )];
seg = (frame << FindSeg( Marker Seg( 1 ) ));
seg << Set Marker Draw Expr( Expr( :sex || Char( :age ) ) );

```

### Set Marker Size

**構文:** obj &lt;&lt; Set Marker Size

**説明:** マーカーのサイズを設定する。サイズのオプションはDot(ドット)、Small(小)、Medium(中)、Large(大)、XL、XXL、XXXL。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
aa = [=> 0];
sz = Column( "age" ) << get values;
yy = J( N Rows( xx ), 1, 0 );
For( ii = 1, ii <= N Rows( xx ), ii++,
	aa[xx[ii]]++;
	yy[ii] = aa[xx[ii]];
);
New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg( xx, yy, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Marker Seg( 1 ) ));
seg << Set Marker Size( "XL" );
Wait( 1 );
seg << Set Marker Size( "dot" );

```

### Set Overlay Color

**構文:** obj &lt;&lt; Set Overlay Color( marker index, color )

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
op = dt << Overlay Plot( X( :age ), Y( :height, :weight ) );
rep = op << report;
frame = rep[FrameBox( 1 )];
seg = (frame << Find Seg( Marker Seg( 1 ) ));
seg << Set Overlay Color( 1, "Green" );

```

### Set Overlay Marker

**構文:** obj &lt;&lt; Set Overlay Marker( marker index, marker )

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
op = dt << Overlay Plot( X( :age ), Y( :height, :weight ) );
rep = op << report;
frame = rep[FrameBox( 1 )];
seg = (frame << Find Seg( Marker Seg( 1 ) ));
seg << Set Overlay Marker( 1, "Star" );

```

### Set Transparency

**構文:** obj &lt;&lt; Set Transparency( number )

**説明:** マーカーの透明度を設定する。引数は0～1の数値。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
aa = [=> 0];
sz = Column( "age" ) << get values;
yy = J( N Rows( xx ), 1, 0 );
For( ii = 1, ii <= N Rows( xx ), ii++,
	aa[xx[ii]]++;
	yy[ii] = aa[xx[ii]];
);
New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg( xx, yy, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Marker Seg( 1 ) ));
seg << Set Transparency( .3 );

```

### Sib

**構文:** seg2 = obj &lt;&lt; Sib

**説明:** ディスプレイセグメントの兄弟(同レベルのもの)を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
aa = [=> 0];
sz = Column( "age" ) << get values;
yy = J( N Rows( xx ), 1, 0 );
For( ii = 1, ii <= N Rows( xx ), ii++,
	aa[xx[ii]]++;
	yy[ii] = aa[xx[ii]];
);
New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg( xx, yy, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Marker Seg( 1 ) ));
seg << Sib;

```

### Sib Append

**構文:** obj &lt;&lt; Sib Append( seg2 )

**説明:** ディスプレイセグメントのすぐ後にディスプレイセグメントを表示する。

```jsl

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

**構文:** obj &lt;&lt; Sib Prepend( seg2 )

**説明:** ディスプレイセグメントのすぐ前にディスプレイセグメントを表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
aa = [=> 0];
sz = Column( "age" ) << get values;
yy = J( N Rows( xx ), 1, 0 );
For( ii = 1, ii <= N Rows( xx ), ii++,
	aa[xx[ii]]++;
	yy[ii] = aa[xx[ii]];
);
New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg( xx, yy, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Marker Seg( 1 ) ));
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

### Transparency

**構文:** obj &lt;&lt; Transparency( number )

**説明:** マーカーの透明度を設定する。引数は0～1の数値。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
aa = [=> 0];
sz = Column( "age" ) << get values;
yy = J( N Rows( xx ), 1, 0 );
For( ii = 1, ii <= N Rows( xx ), ii++,
	aa[xx[ii]]++;
	yy[ii] = aa[xx[ii]];
);
New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg( xx, yy, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Marker Seg( 1 ) ));
seg << Set Transparency( .3 );

```

