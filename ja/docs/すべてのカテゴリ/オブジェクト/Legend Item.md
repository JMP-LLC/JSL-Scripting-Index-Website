# Legend Item



## 項目のメッセージ

### Get Label

**構文:** obj &lt;&lt; Get Label

**説明:** 凡例の項目のラベルを戻す。

**JMP追加されたバージョン:** 16

```jsl


dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ), Overlay( :sex ), Color( :age ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) )
);
lgnd = gb << Get Legend Display;
item = lgnd << Get Item( 2, 1 );
Print( item << Get Label );

```

### Get Position

**構文:** obj &lt;&lt; Get Position

**説明:** 凡例の項目の位置番号を戻す。表示されていない項目の場合は、負のコードを戻す。-1 = ユーザによって非表示、-2 = If Displayによって非表示、-3 = 依存関係によって非表示、-4 = 初期設定によって非表示。

**JMP追加されたバージョン:** 16

```jsl


dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ), Overlay( :sex ), Color( :age ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) )
);
lgnd = gb << Get Legend Display;
item = lgnd << Get Item( 2, 1 );
Print( item << Get Position );

```

### Get Type

**構文:** obj &lt;&lt; Get Type

**説明:** 凡例の項目の種類を戻す。種類には次のものがある: "None"、" Marker"、" H Line"、" V Line"、" Step"、" Bar"、" V Box Plot"、" H Interval"、" V Interval", " H Bar Box Plot"、" V Bar Box Plot "、" OHLC Plot"、" H Box Plot"、" Gradient"、" Density Gradient"、" Fill and Line"、" Marker Size"、" Line Size"、" Gradient Line"、" Gradient Contour"、" Mark Color"、" Marker Size Categorical"、" Cell Size"。

**JMP追加されたバージョン:** 16

```jsl


dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ), Overlay( :sex ), Color( :age ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) )
);
lgnd = gb << Get Legend Display;
item = lgnd << Get Item( 2, 1 );
Print( item << Get Type );

```

### Set Label

**構文:** obj &lt;&lt; Set Label( text )

**説明:** 凡例の項目のラベルを設定する。

**JMP追加されたバージョン:** 16

```jsl


dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ), Overlay( :sex ), Color( :age ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) )
);
lgnd = gb << Get Legend Display;
item = lgnd << Get Item( 2, 1 );
item << Set Label( "Label Set Through Script" );

```

### Set Visible

**構文:** obj &lt;&lt; Set Visible( state=0|1 )

**説明:** 凡例の項目の表示/非表示を設定する。

**JMP追加されたバージョン:** 16

```jsl


dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ), Overlay( :sex ), Color( :age ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) )
);
lgnd = gb << Get Legend Display;
item = lgnd << Get Item( 2, 1 );
item << Set Visible( 0 );

```

