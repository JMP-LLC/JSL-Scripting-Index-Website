# RangeSeg



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

### Range Seg

**構文:** Range Seg

```jsl


dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
filter = dt << Data Filter(
	Add Filter( columns( :height ), Where( :height >= 54 & :height <= 68 ) )
);
frame = (filter << Report)[FrameBox( 1 )];
seg = (frame << Find Seg( "Range Seg" ));

```

## 項目のメッセージ

### Child

**構文:** seg2 = obj &lt;&lt; Child

**説明:** ディスプレイセグメントの最初の子を戻す。

```jsl


dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
filter = dt << Data Filter(
	Add Filter( columns( :height ), Where( :height >= 54 & :height <= 68 ) )
);
frame = (filter << Report)[FrameBox( 1 )];
seg = (frame << Find Seg( "Range Seg" ));
seg << Child; // not many segs support children

```

### Class Name

**構文:** classname = obj &lt;&lt; Class Name

**説明:** ディスプレイボックスのクラス名を戻す。

```jsl


dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
filter = dt << Data Filter(
	Add Filter( columns( :height ), Where( :height >= 54 & :height <= 68 ) )
);
frame = (filter << Report)[FrameBox( 1 )];
seg = (frame << Find Seg( "Range Seg" ));
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

### Delete

**構文:** obj &lt;&lt; Delete

**説明:** ディスプレイセグメントを削除する。

```jsl


dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
filter = dt << Data Filter(
	Add Filter( columns( :height ), Where( :height >= 54 & :height <= 68 ) )
);
frame = (filter << Report)[FrameBox( 1 )];
seg = (frame << Find Seg( "Range Seg" ));
seg << Delete;

```

### Frame

**構文:** FrameBox = obj &lt;&lt; Frame

**説明:** ディスプレイセグメントがあるフレームボックスを戻す。

```jsl


dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
filter = dt << Data Filter(
	Add Filter( columns( :height ), Where( :height >= 54 & :height <= 68 ) )
);
frame = (filter << Report)[FrameBox( 1 )];
seg = (frame << Find Seg( "Range Seg" ));
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

### Get Description

**構文:** description = obj &lt;&lt; Get Description

**説明:** ディスプレイセグメントの名前を取得する。

```jsl


dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
filter = dt << Data Filter(
	Add Filter( columns( :height ), Where( :height >= 54 & :height <= 68 ) )
);
frame = (filter << Report)[FrameBox( 1 )];
seg = (frame << Find Seg( "Range Seg" ));
seg << get description();

```

### Parent

**構文:** seg2 = obj &lt;&lt; Parent

**説明:** ディスプレイセグメントの親を戻す。

```jsl


dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
filter = dt << Data Filter(
	Add Filter( columns( :height ), Where( :height >= 54 & :height <= 68 ) )
);
frame = (filter << Report)[FrameBox( 1 )];
seg = (frame << Find Seg( "Range Seg" ));
seg << Parent;

```

### Set Description

**構文:** obj &lt;&lt; Set Description( description )

**説明:** ディスプレイセグメントの名前を設定する。

```jsl


dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
filter = dt << Data Filter(
	Add Filter( columns( :height ), Where( :height >= 54 & :height <= 68 ) )
);
frame = (filter << Report)[FrameBox( 1 )];
seg = (frame << Find Seg( "Range Seg" ));
seg << set description( "my seg" );

```

### Sib

**構文:** seg2 = obj &lt;&lt; Sib

**説明:** ディスプレイセグメントの兄弟(同レベルのもの)を戻す。

```jsl


dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
filter = dt << Data Filter(
	Add Filter( columns( :height ), Where( :height >= 54 & :height <= 68 ) )
);
frame = (filter << Report)[FrameBox( 1 )];
seg = (frame << Find Seg( "Range Seg" ));
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
filter = dt << Data Filter(
	Add Filter( columns( :height ), Where( :height >= 54 & :height <= 68 ) )
);
frame = (filter << Report)[FrameBox( 1 )];
seg = (frame << Find Seg( "Range Seg" ));
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

