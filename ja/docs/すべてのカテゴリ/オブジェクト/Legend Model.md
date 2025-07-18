# Legend Model



## 項目のメッセージ

### Get Fill Color

**構文:** obj &lt;&lt; Get Fill Color

**説明:** グラフ内のディスプレイセグメントにリンクされた凡例モデル項目の、塗りつぶしの色を戻す。

**JMP追加されたバージョン:** 16

```jsl


dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ), Overlay( :sex ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Ellipse( X, Y, Legend( 3 ) ) )
);
server = gb << Get Legend Server;
item = server << Get Legend Item( 3, 1 );
Show( item << Get Fill Color );

```

### Get Gradient Settings

**構文:** obj &lt;&lt; Get Gradient Settings

**説明:** グラフ内のディスプレイセグメントにリンクされた凡例モデル項目の、グラデーションの設定のリストを戻す。

**JMP追加されたバージョン:** 16

```jsl


dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ), Color( :weight ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) )
);
server = gb << Get Legend Server;
item = server << Get Legend Item( 1, 1 );
Print( item << Get Gradient Settings );

```

### Get Label

**構文:** obj &lt;&lt; Get Label

**説明:** 凡例モデル項目のラベルを戻す。

**JMP追加されたバージョン:** 16

```jsl


dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ), Overlay( :sex ), Color( :age ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) )
);
server = gb << Get Legend Server;
item = server << Get Legend Item( 2, 1 );
Print( item << Get Label );

```

### Get Marker Size Settings

**構文:** obj &lt;&lt; Get Marker Size Settings

**説明:** グラフ内のディスプレイセグメントにリンクされた凡例モデル項目の、マーカーサイズの設定のリストを戻す。

**JMP追加されたバージョン:** 16

```jsl


dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ), Size( :height ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) )
);
server = gb << Get Legend Server;
item = server << Get Legend Item( 1, 1 );
Print( item << Get Marker Size Settings );

```

### Get Pen Settings

**構文:** obj &lt;&lt; Get Pen Settings

**説明:** グラフ内のディスプレイセグメントにリンクされた凡例モデル項目の、ペンの設定のリストを戻す。

**JMP追加されたバージョン:** 16

```jsl


dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ), Overlay( :sex ), Color( :age ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) )
);
server = gb << Get Legend Server;
item = server << Get Legend Item( 1, 7 );
Print( item << Get Pen Settings );

```

### Get Type

**構文:** obj &lt;&lt; Get Type

**説明:** 凡例モデル項目の種類を戻す。種類には次のものがある: "None"、" Marker"、" H Line"、" V Line"、" Step"、" Bar"、" V Box Plot"、" H Interval"、" V Interval", " H Bar Box Plot"、" V Bar Box Plot "、" OHLC Plot"、" H Box Plot"、" Gradient"、" Density Gradient"、" Fill and Line"、" Marker Size"、" Line Size"、" Gradient Line"、" Gradient Contour"、" Mark Color"、" Marker Size Categorical"、" Cell Size"。

**JMP追加されたバージョン:** 16

```jsl


dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ), Overlay( :sex ), Color( :age ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) )
);
server = gb << Get Legend Server;
item = server << Get Legend Item( 2, 1 );
Print( item << Get Type );

```

### Set Label

**構文:** obj &lt;&lt; Set Label( text )

**説明:** グラフ内のディスプレイセグメントにリンクされた凡例モデル項目のラベルを設定する。

**JMP追加されたバージョン:** 16

```jsl


dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ), Overlay( :sex ), Color( :age ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) )
);
server = gb << Get Legend Server;
items = server << Get Legend Items;
For Each( {item, index}, items[1], item << Set Label( "Item " || Char( index ) ) );

```

### Set Properties

**構文:** obj &lt;&lt; Set Properties

**説明:** グラフ内のディスプレイセグメントにリンクされた凡例モデル項目の任意の表示プロパティを設定する。

**JMP追加されたバージョン:** 16

```jsl


dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ), Size( :height ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) )
);
server = gb << Get Legend Server;
item = server << Get Legend Item( 1, 1 );
item << Set Properties(
	{Marker Size( 5 ), Marker Scale( {Marker Size Minimum( "Dot" ), Style( "Nested Full" )} )
	}
);

```

