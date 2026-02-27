# Row State



### As Row State

**構文:** rs = As Row State( x )

**説明:** 数字を行の属性値に変換する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row(
	Row State() = As Row State(
		(:sex == "F") * 2 + (:sex == "M") * 4 + ((:sex == "F") * 2 + (:sex == "M") * 6) * 16
		 + (:age - 11) * 256
	)
);

```

### Color Of

**構文:** y = Color Of( &lt;rs&gt; ); Color Of( &lt;Row State( &lt;r&gt; )&gt; ) = y

**説明:** 指定の行の属性における色の情報を、正のJMPカラーパレットインデックスまたは負のRGBエンコード値で戻す。Color Ofを左辺値として使用した場合、それにより現在のデータテーブルの現在の(またはr番目の)行の色が変更される。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" ) << Color By Column( :height );
Color To RGB( Color Of( Row State( 3 ) ) );
Row() = 3;
Color To RGB( Color Of() );

```

### Color State

**構文:** rs = Color State( color )

**説明:** 色を指定の値に設定した行の属性を戻す。引数colorには有効なJSL色のいずれかを指定できる。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Color State( {1, 0.5, 1} );
Color To RGB( Color Of( Row State( 3 ) ) );

```

### Combine States

**構文:** rs = Combine States( rs1, ... )

**説明:** 複数の行の属性値を1つに結合する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Combine States( Hue State( 5 ), Shade State( 1 ) );

```

### Excluded

**構文:** y = Excluded( &lt;rs&gt; ); Excluded( &lt;Row State( &lt;r&gt; )&gt; ) = y

**説明:** 指定された行属性における除外のステータスを0または1で戻す。Excluded()関数を左辺値に指定した場合、現在のデータテーブルにおける現在の行(またはr番目の行)の除外のステータスが変更される。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Excluded State( 1 );
Excluded( Row State( 3 ) );
Row() = 3;
Excluded();

```

### Excluded State

**構文:** rs = Excluded State( x )

**説明:** 除外のステータスを指定の値に設定した行の属性を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Excluded State( 1 );
Excluded( Row State( 3 ) );

```

### Hidden

**構文:** y = Hidden( &lt;rs&gt; ); Hidden( &lt;Row State( &lt;r&gt; )&gt; ) = y

**説明:** 指定の行の属性における表示/非表示のステータスを0または1で戻す。Hiddenを左辺値として使用した場合、それにより現在のデータテーブルの現在の(またはr番目の)行の表示/非表示のステータスが変更される。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Hidden State( 1 );
Hidden( Row State( 3 ) );
Row() = 3;
Hidden();

```

### Hidden State

**構文:** rs = Hidden State( x )

**説明:** 表示/非表示のステータスを指定の値に設定した行の属性を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Hidden State( 1 );
Hidden( Row State( 3 ) );

```

### Hue State

**構文:** rs = Hue State( x )

**説明:** 色調を指定の値に設定した行の属性を戻す。有効な色を生成するにはShade State()値と組み合わせて設定する必要がある。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Combine States( Hue State( 5 ), Shade State( 1 ) );

```

### Labeled

**構文:** y = Labeled( &lt;rs&gt; ); Labeled( &lt;Row State( &lt;r&gt; )&gt; ) = y

**説明:** 指定の行の属性におけるラベルのステータスを0または1で戻す。Labeledを左辺値として使用した場合、それにより現在のデータテーブルの現在の(またはr番目の)行のラベルのステータスが変更される。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Labeled State( 1 );
Labeled( Row State( 3 ) );
Row() = 3;
Labeled();

```

### Labeled State

**構文:** rs = Labeled State( x )

**説明:** ラベルのステータスを指定の値に設定した行の属性を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Labeled State( 1 );
Labeled( Row State( 3 ) );

```

### Marker Of

**構文:** y = Marker Of( &lt;rs&gt; ); Marker Of( &lt;Row State( &lt;r&gt; )&gt; ) = y

**説明:** 指定の行の属性におけるマーカーの情報を戻す。Marker Ofを左辺値として使用した場合、それにより現在のデータテーブルの現在の(またはr番目の)行のマーカーが変更される。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Marker State( 5 );
Marker Of( Row State( 3 ) );
Row() = 3;
Marker Of();

```

### Marker State

**構文:** rs = Marker State( marker )

**説明:** マーカーを指定の値に設定した行の属性を戻す。マーカーを指定する引数markerには、正の整数、文字、Unicode文字を示す正の整数、Unicode文字を示す16進数の文字を使用できる。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Marker State( 5 );
Marker Of( Row State( 3 ) );

```

### Row State

**構文:** y = Row State( &lt;dt&gt;, &lt;r&gt; ); Row State( &lt;dt&gt;, &lt;r&gt; ) = y

**説明:** 現在のデータテーブルにおける現在(またはr番目)の行の属性を戻す。Row State()関数が左辺値として使用されている場合は、現在のデータテーブルにおける現在(またはr番目)の行の属性を変更する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Color State( {1, .5, 1} );
Color To RGB( Color Of( Row State( 3 ) ) );

```

### Selected

**構文:** y = Selected( &lt;rs&gt; );Selected( &lt;Row State( &lt;r&gt; )&gt; ) = y

**説明:** 指定の行の属性における選択のステータスを0または1で戻す。Selectedを左辺値として使用した場合、それにより現在のデータテーブルの現在の(またはr番目の)行の選択のステータスが変更される。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Selected State( 1 );
Selected( Row State( 3 ) );
Row() = 3;
Selected();

```

### Selected State

**構文:** rs = Selected State( x )

**説明:** 選択のステータスを指定の値に設定した行の属性を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Selected State( 1 );
Selected( Row State( 3 ) );

```

### Shade State

**構文:** rs = Shade State( x )

**説明:** 色の濃淡を指定の値に設定した行の属性を戻す。有効な色を生成するにはHue State()値と組み合わせて設定する必要がある。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Combine States( Hue State( 5 ), Shade State( 1 ) );

```

