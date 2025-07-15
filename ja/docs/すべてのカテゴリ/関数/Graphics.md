# Graphics



### Add Color Theme

**説明:** 新しいカスタムカラーテーマを作成し、テーマピッカーに登録する。

**JMP追加されたバージョン:** バージョン14より前

**例 1**

```jsl

Names Default To Here( 1 );
Add Color Theme( {"Yellow To Blue", 0, {{255, 255, 0}, {0, 0, 255}}, {0.0, 1.0}} );

```

**例 2**

```jsl

Names Default To Here( 1 );
Add Color Theme(
	{"Black To Red To White", {"Continuous", "Categorical", "Diverging"}, {{0, 0, 0}, {255, 0,
	0}, {255, 255, 255}, Missing( "Green" )}, {"Full Color", "Tritanopia", "Tritanomaly"}}
);

```

### Arc

**構文:** Arc( left, top, right, bottom, startAngle, endAngle )

**説明:** 楕円の弧を描画する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Pen Color( "red" );
		Arc( 10, 80, 70, 30, 0, 90 );
	)
);

```

### Arrow

**構文:** Arrow( {x1, y1}, {x2, y2}, ... ); Arrow( xMatrix, yMatrix )

**説明:** 矢印付きの線を1本または連続して引く。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Pen Size( 4 );
		Arrow( [10 30 90], [88 22 44] );
	)
);

```

### Back Color

**構文:** Back Color( &lt;name|index|rgbList&gt; )

**説明:** Text()関数でErasedモードを選択した時の背景色を設定する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Back Color( "red" );
		Text( Erased, {50, 20}, "Hello" );
	)
);

```

### Blend Colors

**構文:** color = Blend Colors( color1, color2, &lt;percent2&gt;, &lt;colorSpace&gt;, &lt;hueDirection&gt; )

**説明:** 2つの色を混ぜる。割合と色空間を指定することができる。

**JMP追加されたバージョン:** 18

**例 1**

```jsl

Names Default To Here( 1 );
Blend Colors( "black", "white", 0.25 );

```

**例 2**

```jsl

Names Default To Here( 1 );
Blend Colors( "red", "blue", "sRGB" );

```

**例 3**

```jsl

Names Default To Here( 1 );
Blend Colors( "red", "blue", "lRGB" );

```

**例 4**

```jsl

Names Default To Here( 1 );
Blend Colors( "red", "blue", 0.5, "LUV" );

```

**例 5**

```jsl

Names Default To Here( 1 );
Blend Colors( "red", "blue", 0.75, "HLS" );

```

**例 6**

```jsl

Names Default To Here( 1 );
Names Default To Here( 1 );
c1 = "red";
c2 = "blue";
steps = 20;
New Window( "HLS Radial Color Blending",
	Graph(
		frameSize( 290, 110 ),
		X Scale( 0, 150 ),
		Y Scale( 0, 55 ),
		Suppress Axes,
		Text( {2, 47}, "Short" ),
		Text( {2, 32}, "Long" ),
		Text( {2, 17}, "Positive" ),
		Text( {2, 2}, "Negative" ),
		For( i = 0, i < steps, i += 1,
			x = i * 6 + 30;
			Fill Color( Blend Colors( c1, c2, i / (steps - 1), "HLS", "Short" ) );
			Rect( x, 45, x + 5, 55, 1 );
			Fill Color( Blend Colors( c1, c2, i / (steps - 1), "HLS", "Long" ) );
			Rect( x, 30, x + 5, 40, 1 );
			Fill Color( Blend Colors( c1, c2, i / (steps - 1), "HLS", "Positive" ) );
			Rect( x, 15, x + 5, 25, 1 );
			Fill Color( Blend Colors( c1, c2, i / (steps - 1), "HLS", "Negative" ) );
			Rect( x, 0, x + 5, 10, 1 );
		)
	)
);

```

**例 7**

```jsl

Names Default To Here( 1 );
Names Default To Here( 1 );
c1 = "blue";
c2 = "red";
steps = 20;
New Window( "HCLuv Radial Color Blending",
	Graph(
		frameSize( 290, 110 ),
		X Scale( 0, 150 ),
		Y Scale( 0, 55 ),
		Suppress Axes,
		Text( {2, 47}, "Short" ),
		Text( {2, 32}, "Long" ),
		Text( {2, 17}, "Positive" ),
		Text( {2, 2}, "Negative" ),
		For( i = 0, i < steps, i += 1,
			x = i * 6 + 30;
			Fill Color( Blend Colors( c1, c2, i / (steps - 1), "HCLuv", "Short" ) );
			Rect( x, 45, x + 5, 55, 1 );
			Fill Color( Blend Colors( c1, c2, i / (steps - 1), "HCLuv", "Long" ) );
			Rect( x, 30, x + 5, 40, 1 );
			Fill Color( Blend Colors( c1, c2, i / (steps - 1), "HCLuv", "Positive" ) );
			Rect( x, 15, x + 5, 25, 1 );
			Fill Color( Blend Colors( c1, c2, i / (steps - 1), "HCLuv", "Negative" ) );
			Rect( x, 0, x + 5, 10, 1 );
		)
	)
);

```

### Char To Path

**構文:** m = Char To Path( pathText )

**説明:** パスの指定を文字形式から行列形式に変換する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
Show( Char To Path( "M10 10 L50 10 L30 50 Z M20 20 L40 20 L30 40 Z" ) );

```

### Circle

**構文:** Circle( {x, y}, radius|PixelRadius( px ), ..., &lt;"FILL"&gt; )

**説明:** {x, y}を中心とした円を描く。縦軸の値に基づいた数値またはピクセルで半径を指定する。半径をピクセルで指定した場合は縦軸が変更されても円は変化しない。複数の円を描く場合は、引数を任意の順序で繰り返す。"FILL"を使用する場合は、必ず最後に配置する。"FILL"を使用すると、円がPenColorの色で線画されるのではなく、FillColorの色で塗りつぶされる。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Pen Color( "red" );
		Circle( {20, 20}, 4, 7, 10/* no fill for concentric circles */ );
		Fill Color( "blue" );
		Transparency( .25 );/* transparent fill for concentric circles */
		Circle( {60, 20}, 4, 7, 10, "FILL" );
		Fill Color( "green" );
		Transparency( 1 );/* solid fill */Circle(
			PixelRadius( 18 ),
			{40, 20},
			{40, 50},
			{40, 80},
			"FILL"
		);
	)
);

```

### Color Difference

**構文:** color = Color Difference( color1, color2, &lt;difference metric&gt;)

**説明:** 2つの色の差を戻す。差は、指定された指標に基づく。

**JMP追加されたバージョン:** 18

**例 1**

```jsl

Names Default To Here( 1 );
Color Difference( "red", "blue" );

```

**例 2**

```jsl

Names Default To Here( 1 );
Color Difference( "red", "blue", "sRGB" );

```

**例 3**

```jsl

Names Default To Here( 1 );
Color Difference( "red", "blue", "redmean" );

```

**例 4**

```jsl

Names Default To Here( 1 );
Color Difference( "red", "blue", "CIE76" );

```

**例 5**

```jsl

Names Default To Here( 1 );
Color Difference( "red", "blue", "CIE94" );

```

**例 6**

```jsl

Names Default To Here( 1 );
Color Difference( "red", "blue", "CIEDE2000" );

```

**例 7**

```jsl

Names Default To Here( 1 );
Color Difference( "red", "blue", "dEok" );

```

### Color To HLS

**構文:** {h, l, s} = Color To HLS( color )

**説明:** 色調(h)、明度(l)、彩度(s)の成分を、0～1の数値のリストで戻す。引数colorには、有効なJSL色の色番号を、数値もしくは行列で指定できる。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
Color To HLS( RGB Color( 1.0, 0.5, 0.5 ) );

```

### Color To RGB

**構文:** {r, g, b} = Color To RGB( color )

**説明:** 指定された色値に対する赤(r)、緑(g)、青(b)の成分を、0～1の数値のリストで戻す。引数colorには、有効なJSL色、または色番号の行列を指定できる。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
Color To RGB( HLS Color( 30 / 360, 0.5, 1 ) );

```

### Contour

**構文:** Contour( xVector, yVector, zGridMatrix, zContours, &lt; &lt;&lt;zColor( color, option )&gt;, &lt; &lt;&lt;Fill|Fill Between|Fill Below|Fill Above&gt;, &lt; &lt;&lt;Transparency(vector)&gt; )

**説明:** 指定したグリッド値で等高線を描画する。指定された色の数が等高線の数より少ない場合、Interpolate ColorsまたはCycle Colorsのオプションによって色の適用方法が決まる。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );

New Window( "Example",
	H List Box(
		Outline Box( "Line",
			Graph Box(
				Contour( 1 :: 100, 1 :: 100, (1 :: 100)` * (1 :: 100), 7 ^ (0 :: 4) )
			)
		),
		Outline Box( "Line Colors",
			Graph Box(
				Contour(
					1 :: 100,
					1 :: 100,
					(1 :: 100)` * (1 :: 100),
					7 ^ (0 :: 4),
					<<zColor( {"Blue", "Red"} )
				)
			)
		)
	),
	H List Box(
		Outline Box( "Fill Cycle",
			Graph Box(
				Contour(
					1 :: 100,
					1 :: 100,
					(1 :: 100)` * (1 :: 100),
					7 ^ (0 :: 4),
					<<zColor(
						{RGB Color( 218, 218, 255 ), RGB Color( 255, 218, 218 )},
						"Cycle Colors"
					),
					fill
				)
			)
		),
		Outline Box( "Fill Interpolate",
			Graph Box(
				Contour(
					1 :: 100,
					1 :: 100,
					(1 :: 100)` * (1 :: 100),
					7 ^ (0 :: 4),
					<<zColor( {"Blue", "Red"}, "Interpolate Colors" ),
					fill
				)
			)
		)
	)
);

```

### Contour Function

**構文:** Contour Function( zExpr, xName, yName, z|zMatrix, &lt; &lt;&lt;XGrid( min, max, incr )&gt;, &lt; &lt;&lt;YGrid( min, max, incr )&gt;, &lt; &lt;&lt;ZColor( color, option )&gt;, &lt; &lt;&lt;ZLabeled&gt;, &lt; &lt;&lt;Filled&gt;, &lt; &lt;&lt;FillBetween&gt;, &lt; &lt;&lt;Ternary&gt;, &lt; &lt;&lt;Transparency( t )&gt; )

**説明:** 式を評価し、xNameとyNameのグリッド上で等高線を描く。colorは、数値、行列、RGB値のリスト、色名のリスト、またはカラーテーマで指定できる。透明度tは、数値または行列で指定できる。Ternaryオプションを指定した場合、等高線は三角図の座標に設定される。

**JMP追加されたバージョン:** バージョン14より前

**例 1**

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Contour Function(
			Log( a * a + b * b ),
			a,
			b,
			1 :: 10,
			<<ZColor( {"blue", "green", "red"}, "Cycle Colors" ),
			Transparency( 0.9 )
		)
	)
);

```

**例 2**

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Contour Function(
			Log( a * a + b * b ),
			a,
			b,
			1 :: 10,
			<<Filled,
			<<ZColor( {{1, 0.1, 0.1}, {0.1, 1, 0.1}, {0.1, 0.1, 1}}, "Interpolate Colors" )
		)
	)
);

```

### Drag Line

**構文:** Drag Line( xMatrixName, yMatrixName, &lt;dragScript&gt;, &lt;MouseUpScript&gt; )

**説明:** 指定の点に線を描く。ただしLineとは異なり、画面で点をドラッグでき、ドラッグすると引数の行列の値が更新される。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
New Window( "Example",
	exx = [11 33 77];
	exy = [88 22 44];,
	Graph Box(
		Drag Line( exx, exy );
		Line( exx, exy );
	)
);

```

### Drag Marker

**構文:** Drag Marker( xMatrixName, yMatrixName, &lt;dragScript&gt;, &lt;MouseUpScript&gt; )

**説明:** 指定された点に移動可能なマーカーを描画する。行列の値はマーカーの移動に合わせて更新される。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
New Window( "Example",
	exx = [11 33 77];
	exy = [88 22 44];,
	Graph Box(
		Drag Marker( exx, exy );
		Line( exx, exy );
	)
);

```

### Drag Polygon

**構文:** Drag Polygon( xMatrixName, yMatrixName, &lt;dragScript&gt;, &lt;MouseUpScript&gt; )

**説明:** 指定された点の塗りつぶした多角形を描く。ただしPolygonとは異なり、画面で点をドラッグでき、ドラッグすると引数の行列の値が更新される。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
New Window( "Example",
	exx = [11 33 77];
	exy = [88 22 44];,
	Graph Box(
		Drag Polygon( exx, exy );
		Line( exx, exy );
	)
);

```

### Drag Rect

**構文:** Drag Rect( xMatrixName, yMatrixName, &lt;dragScript&gt;, &lt;MouseUpScript&gt; )

**説明:** 指定の点に長方形を描く。ただしRectとは異なり、画面で長方形の角をドラッグでき、ドラッグすると引数の行列の値が更新される。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
New Window( "Example",
	exx = [11 33];
	exy = [88 22];,
	Graph Box(
		Drag Rect( exx, exy );
		Line( exx, exy );
	)
);

```

### Drag Text

**構文:** Drag Text( xMatrixName, yMatrixName, text, &lt;dragScript&gt;, &lt;MouseUpScript&gt; )

**説明:** 指定された点にテキストを描画する。ただし、Text()関数とは異なり、点は画面でドラッグでき、ドラッグされるたびにxMatrixNameとyMatrixNameの行列引数内の値が更新される。引数textは、1つの文字列でも文字列のリストでもよい。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
New Window( "Example",
	exx = [11 33 77];
	exy = [88 22 44];,
	Graph Box(
		Drag Text( exx, exy, "hello" );
		Line( exx, exy );
	)
);

```

### Fill Color

**構文:** Fill Color( &lt;name|index|rgbList&gt; )

**説明:** 塗りつぶしの色を設定する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Fill Color( {1, 1, .5} );
		Polygon( [10 30 90], [88 22 44] );
	)
);

```

### Fill Pattern

**構文:** Fill Pattern( name|mask|image )

**説明:** 塗りつぶしの描画パターンを設定する。maskは、0～1の値の行列で、現在の塗りつぶしの色に適用される。

**JMP追加されたバージョン:** バージョン14より前

**イメージ**

```jsl

Names Default To Here( 1 );

image = New Image( "$SAMPLE_IMAGES/pi.gif" );
New Window( "Example",
	Graph Box(
		Fill Pattern( image );
		Polygon( [10 30 90], [88 22 44] );
	)
);

```

**マスク**

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Fill Pattern( [1 0.5 0 0, 0.5 0 0 1, 0 0 1 0.5, 0 1 0.5 0] );
		Polygon( [10 30 90], [88 22 44] );
	)
);

```

### Get Color Theme Detail

**構文:** script = Get Color Theme Detail(name)

**説明:** 指定されたカラーテーマのスクリプトを戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
Get Color Theme Detail( "JMP Default" );

```

### Get Color Theme Names

**構文:** {list of names} = Get Color Theme Names(&lt;kind&gt;)

**説明:** オプションパラメータkindに一致するカラーテーマの名前のリストを戻す。kind には次のいずれかを指定可能。「continuous」、「categorical」、「sequential」、「diverging」、「qualitative」、「chromatic」。

**JMP追加されたバージョン:** バージョン14より前

**例 1**

```jsl

Names Default To Here( 1 );
Get Color Theme Names();

```

**例 2**

```jsl

Names Default To Here( 1 );
Get Color Theme Names( "sequential" );

```

### Gradient Function

**構文:** Gradient Function( zExpr, xName, yName, zLimits, zColor( color list or matrix ), &lt; &lt;&lt;XGrid( min, max, incr )&gt;, &lt; &lt;&lt;YGrid( min, max, incr )&gt;, &lt; &lt;&lt;Transparency( t )&gt; )

**説明:** グラフを2色間のグラデーションで塗る。引数zExprは後続の2つの変数(xNameとyName)の関数。ベクトルzLimitsはzExprの値の範囲を指定する。引数zColorは、グラデーションの生成に使われる2つの色を定義するベクトルまたはリスト引数。Transparencyは、グリッド全体に適用される1つの値。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Gradient Function(
			Log( a * a + b * b ),
			a,
			b,
			[2 10],
			Z Color( {"Green", "Orange"} )
		)
	)
);

```

### H Line

**構文:** H Line( y ); H Line( x1, x2, y )

**説明:** yの位置に横線を描く。引数が1つの場合、グラフ全体に横線が描かれる。引数が3つの場合、x1からx2までの横線が描かれる。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Pen Size( 2 );
		H Line( 10, 50, 20 );
	)
);

```

### H Size

**構文:** h = H Size()

**説明:** グラフィックフレームの幅をピクセル単位で戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Pen Size( H Size() / 20 );
		Line( [10 30 90], [88 22 44] );
	)
);

```

### HLS Color

**構文:** y = HLS Color( h, l, s ); y = HLS Color( {h, l, s} )

**説明:** 指定された色調(h)、明度(l)、彩度(s)の成分に対する色値を戻す。色調、明度、彩度は、0～1の数値で指定すること。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
New Window( "Color Wheel",
	Graph(
		frameSize( 200, 200 ),
		For( hue = 0, hue < 360, hue += 30,
			y = 50 - 40 * Cos( hue * 2 * Pi() / 360 );
			x = 50 + 40 * Sin( hue * 2 * Pi() / 360 );
			Fill Color( HLS Color( hue / 360, 0.5, 1 ) );
			Oval( x - 10, y - 10, x + 10, y + 10, 1 );
		)
	)
);

```

### Handle

**構文:** Handle( xPos, yPos, dragScript, &lt;mouseUpScript&gt; )

**説明:** xPosとyPosで指定された座標に四角いマーカーを描画する。マーカー上でマウスが押されているときに、スクリプトdragScriptが繰り返し実行される。グローバル変数のxとyにマウスの座標値が一時的に設定される。マウスボタンが放された後に、スクリプトmouseUpScriptが実行される。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
New Window( "Example",
	exx = 20;
	exy = 50;,
	Graph Box(
		Frame Size( 200, 200 ),
		Handle(
			exx,
			exy,
			exx = x;
			exy = y;
		);
		Circle( {0, 0}, Sqrt( exx * exx + exy * exy ) );
	)
);

```

### Heat Color

**構文:** y = Heat Color( x ); y = Heat Color( x, &lt; &lt;&lt;theme&gt; )

**説明:** 0～1の値に対応する色を戻す。デフォルトのテーマは「青->グレー->赤」("Blue to Gray to Red")。この関数では、セルプロットでサポートされているカラーテーマがすべてサポートされている。引数は行列であっても良い。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
New Window( "Color Bar",
	Graph(
		For( z = 0, z < 1, z += .1,
			x = 10 + 80 * z;
			Fill Color( Heat Color( z, <<"Green to Black to Red" ) );
			Rect( x - 5, 45, x + 5, 55, 1 );
		)
	)
);

```

### In Path

**構文:** b = In Path( x, y, pathMatrix|pathText )

**説明:** 点(x,y)が指定のパスのなかにある場合は1、そうでない場合は0を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );

New Window( "Example",
	window:p = "M10 10 L52 10 L37 52 Z M20 16 L40 20 L35 40 Z";
	Graph Box(
		Fill Color( "light blue" );
		Path( window:p, 1 );
		For Each( {x}, 5 :: 55 :: 5,
			For Each( {y}, 5 :: 55 :: 5,
				Marker(
					Marker State( If( In Path( x, y, window:p ), "x", "circle" ) ),
					{x, y}
				)
			)
		);
	);
);

```

### In Polygon

**構文:** b = In Polygon( x, y, xMatrix, &lt;yMatrix&gt; )

**説明:** 点(x,y)がベクトル引数によって定義された多角形の内側であれば1を戻し、そうでない場合は0を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
In Polygon( 11, 22, [10 20 30], [10 30 20] );

```

### Level Color

**構文:** y = Level Color( i ); y = Level Color( i, n ); y = Level Color( i, n, &lt;theme&gt; ); y = Level Color( i, &lt;theme&gt; )

**説明:** カテゴリの色を戻す。ここで、iはカテゴリの水準。nはカテゴリの数（オプション）。themeは「列情報」ダイアログの「値の色」コンボボックスに使用されるカラーテーマ。（［JMP標準］がデフォルトのテーマ。）カテゴリのインデックスは1以上、かつ、コールで指定されたカテゴリ数またはテーマによって定義されたカテゴリ数以下でなければならない。第2引数が文字である場合は、それがカラーテーマを示し、nは指定しない。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
New Window( "Color Bar",
	Graph(
		For( x = 1, x <= 100, x += 5,
			Fill Color( Level Color( x, 100, "Green to Black to Red" ) );
			Rect( x - 5, 45, x + 5, 55, 1 );
		)
	)
);

```

### Line

**構文:** Line( {x1, y1}, {x2, y2}, ..., &lt; &lt;&lt;Value Space( 0|1 ) &gt;, &lt; &lt;&lt;Smooth( tension, domain, min response, max response ) &gt; ); Line( xMatrix, yMatrix, &lt; &lt;&lt;Value Space(0 | 1) &gt;, &lt; &lt;&lt;Smooth( tension, domain, min response, max response ) &gt; )

**説明:** 直線や折れ線、もしくは、滑らかな曲線を引く。デフォルトのケースでは、2つの点の間に直線が引かれる。Value Spaceが指定されている場合は、元のスケールでは直線だが、軸のスケールでは曲線となる曲線が描かれる。Smoothオプションが指定された場合、 tension、domain dimension、min response、max responseによって制約された、平滑曲線が描かれる。

**JMP追加されたバージョン:** バージョン14より前

**Constrained smoothing**

```jsl

Names Default To Here( 1 );
New Window( "Constrained smoothing",
	Graph Box(
		Pen Color( "gray" );
		H Line( 90 );
		H Line( 92 );
		H Line( 10 );
		H Line( 8 );
		Pen Color( "red" );
		Line( Index( 10, 90, 10 ), [20 10 90 90 60 70 10 10 40], <<Smooth( . ) );
		Pen Color( "blue" );
		Line( Index( 10, 90, 10 ), [20 10 90 90 60 70 10 10 40], <<Smooth( ., "X", 8, 92 ) );
	)
);

```

**Polyline**

```jsl

Names Default To Here( 1 );
New Window( "Example", Graph Box( Line( [10 30 90], [88 22 44] ) ) );

```

**Smoothing**

```jsl

Names Default To Here( 1 );
New Window( "Smoothing",
	Graph Box(
		XAxis( Min( 0 ), Max( 10 ), Inc( 2 ) ),
		YAxis( Min( -1.1 ), Max( 1.1 ), Inc( 1 ) ),
		Pen Color( "gray" );
		H Line( 1 );
		H Line( -1 );
		H Line( 0 );
		Line( 0 :: 10, Sin( 0 :: 10 ) );
		Pen Color( "red" );
		Line( 0 :: 10, Sin( 0 :: 10 ), <<Smooth( . ) );
		Pen Color( "blue" );
		Line( 0 :: 10, Sin( 0 :: 10 ), <<Smooth( 0.25 ) );
	)
);

```

**Value space interpolation**

```jsl

Names Default To Here( 1 );
New Window( "Interpolate in value space",
	Graph Box(
		XAxis( Scale( "Log" ), Min( 10 ), Max( 100 ) ),
		YAxis( Scale( "Log" ), Min( 10 ), Max( 100 ) ),
		Line( [10 30 90], [88 22 44], <<Value Space( 1 ) )
	)
);

```

### Line Style

**構文:** Line Style( x )

**説明:** 現在の線種を次のように設定できる。直線(0もしくはSolid)、点線(1もしくはDotted)、破線(2もしくはDashed)、一点鎖線(3もしくはDashDot)、二点鎖線(4もしくはDashDotDot)。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
New Window( "Line Style Example",
	Graph Box(
		Frame Size( 500, 400 ),
		named line styles = {"Solid", "Dotted", "Dashed", "Dash Dot", "Dash Dot Dot",
		"Dash Dash Dot", "Dash Dash Dot Dot", "Long Dash", "Long Dash Dash", "Dense Dash",
		"Sparse Dash", "Sparse Dot", "Sparse Dash Dot"};
		For Each( {istyle, i}, named line styles, {x = 5 :: 75, y = 12 * Sin( x / 12 )},
			Text( {x[N Items( x )] + 1, y[N Items( y )] + 92 - 6 * i - 1.5}, istyle );
			Line Style( istyle );
			Pen Size( 2 );
			Line( x, y + 92 - 6 * i );
		);
	)
);

```

### Mandelbrot

**構文:** v = Mandelbrot( n, radius, x, y )

**説明:** (x,y)におけるMandelbrot集合の値を戻す。なお、n回の反復を超えた時点、または、半径(radius)を超えた時点で計算は停止される。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
grid = 50;
rmax = 0/*zero for smooth*/;
nmax = 50;// http://wikipedia.org/wiki/Mandelbrot_set 
New Window( "Mandelbrot - use magnifier to zoom in",
	g = Graph Box(
		X Scale( -3, 3 ),
		Y Scale( -2, 2 ),
		framesize( 600, 400 ),
		Gradient Function(
			Mandelbrot( nmax, rmax, a, b ), // return value: number of iterations before something interesting happened
			a, // standard GradientFunction stuff...
			b,
			Matrix( {0, nmax} ), // range to map the colors onto
			Z Color(
				{RGB Color( 0, 0, 0 ), RGB Color( 1, 0, 0 ), RGB Color( 1, 1, 0 ),
				RGB Color( 0, 1, 0 ), RGB Color( 0, 1, 1 ), RGB Color( 0, 0, 1 ),
				RGB Color( .3, .3, .4 )}
			),
			<<xgrid(
				X Origin(), X Origin() + X Range(),
				X Range() / (Floor( grid * H Size() / V Size() ))
			),
			<<ygrid( Y Origin(), Y Origin() + Y Range(), Y Range() / (Floor( grid )) ), 

		)
	),
	H List Box( Slider Box( 2, 500, nmax, g << reshow ), Global Box( nmax ) ),
	H List Box( Slider Box( 0, 5, rmax, g << reshow ), Global Box( rmax ) ),
	H List Box( Slider Box( 2, 500, grid, g << reshow ), Global Box( grid ) ), 

);
g << Set X Axis(
	{Format( "Best", 15 ), Show Major Ticks( 0 ), Rotated Labels( "Parallel" )}
);
g << Set Y Axis(
	{Format( "Best", 15 ), Show Major Ticks( 0 ), Rotated Labels( "Parallel" )}
);

```

### Marker

**構文:** Marker( &lt;rs&gt;, {x1, y1}, {x2, y2}, ... ); Marker( &lt;rs&gt;, xMatrix, yMatrix )

**説明:** 指定された座標にマーカーを描く。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
New Window( "Example", Graph Box( Marker( Marker State( 3 ), [11 44 77], [75 25 50] ) ) );

```

### Marker Size

**構文:** Marker Size( n )

**説明:** グラフィックフレームに描画するマーカーのサイズを設定する。0 = ドット、1 = 小さい点、....

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Marker Size( 5 );
		Marker( Marker State( 3 ), [11 44 77], [75 25 50] );
	)
);

```

### Mousetrap

**構文:** Mousetrap( dragScript, &lt;mouseUpScript&gt; )

**説明:** マウスがグラフ内で押され、他のグラフオブジェクトによって処理されていない間、dragScriptを反復して評価する。グローバル変数xおよびyは、スクリプトの実行前にマウスの座標値に設定され、処理後、元の値に戻される。マウスボタンが放されると、スクリプトmouseUpScriptが実行される。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
New Window( "Example",
	exx = 20;
	exy = 50;,
	Graph Box(
		Frame Size( 200, 200 ),
		Mousetrap(
			exx = x;
			exy = y;
		);
		Circle( {0, 0}, Sqrt( exx * exx + exy * exy ) );
	)
);

```

### New Heat Image

**構文:** New Heat Image( Matrix, &lt;Color Theme / gradient ( ... )&gt;

**説明:** 指定した行列とカラーテーマ、グラデーションに基づいてヒートマップのイメージを作成する。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );

nx = 20; // data is this size
ny = 15;
data = J( ny, nx, Random Normal() ); // ny=rows, nx=cols
// create a magnified matrix for seeing each value
magnify = 10;
big data = J( N Rows( data ) * magnify, N Cols( data ) * magnify );
big data = Transform Each( {z, {row, col}}, big data, 
	// and filling each value with one from the small matrix
	data[Floor( (row - 1) / magnify ) + 1, Floor( (col - 1) / magnify ) + 1]
);
New Window( "small and big",
	Lineup Box( N Col( 3 ),
		New Heat Image(
			data,
			gradient(
				{Color Theme( "Blue To Gray To Orange" ), Scale Type( "Standard Deviation" )}
			)
		),
		New Heat Image(
			big data,
			gradient(
				{Color Theme( "Blue To Gray To Orange" ), Scale Type( "Standard Deviation" )}
			)
		),
		New Heat Image(
			Abs( big data ),
			gradient(
				{Color Theme( "White to Black" ), Scale Values( [0 2] ),
				Reverse Gradient( 1 )}
			)
		)
	)
);

```

### Normal Contour

**構文:** Normal Contour( prob, meanMatrix, stdMatrix, corrMatrix, &lt;colorsMatrix&gt;, &lt;fill=0&gt; )

**説明:** 二変量正規分布の等高線を描く。k個の母集団に対する等高線を描くことができる。prob引数は累積確率か、または複数の累積確率を行列で指定することも可。引数meanMatrixおよび引数stdsMatrixはk行2列、引数corrMatrixはk行1列の行列。引数colorsMatrixにはk個の等高線の色を指定する。色は、JSL色の整数値、またはRGB Color()やHLS Color()などのJSL色関数の戻り値で指定。引数fillは、塗りつぶしの色の透明度を指定する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Fill Color( "blue" );
		Normal Contour( 0.95, [40 40], [15 5], [0.5], Empty(), 0.1 );,
		Normal Contour(
			0.95,
			[40 40, 60 50],
			[15 5, 10 10],
			[-0.9, -0.5],
			Matrix( {RGB Color( {0.1, 0.9, 0.1} ), 3} ),
			0.2
		)
	)
);

```

### Oval

**構文:** Oval( left, top, right, bottom, &lt;fill=0&gt; )

**説明:** 楕円を描く。指定された長方形内に楕円は描かれる。fillが0でない場合は、塗りつぶした楕円が描かれる。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Pen Color( "Green" );
		Pen Size( 2 );
		Fill Color( "Red" );
		Oval( 15, 75, 65, 55, 1 );
		Oval( 10, 80, 70, 50 );
	)
);

```

### Path

**構文:** Path( pathMatrix|pathText, &lt;fill=0&gt; )

**説明:** fillの値が0の場合は指定のパスに沿って線を描き、fillの値が0でない場合は指定のパスの内側を塗りつぶす。パスは、N x 3の行列として、または、テキストで指定する。パスを行列で指定する場合は、x、y、およびパスに含まれる各点のフラグで構成する。フラグの値は、0(コントロール点)、1(移動)、2(線分)、3(3次ベジエ曲線)または負の値(点がパスの終点でもある場合)。パスをテキストで指定する場合には、SVG構文を用いる。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Fill Color( "blue" );
		Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3], 1 );
		Path( "M20,20 C20,60 60,60 60,20 Z", 0 );
	)
);

```

### Path To Char

**構文:** s = Path To Char( pathMatrix )

**説明:** パスの指定を行列形式から文字形式に変換する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
Path To Char( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] );

```

### Pen Color

**構文:** Pen Color( &lt;name|index|rgbList&gt; )

**説明:** 線を描画する色を設定する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Pen Color( {.3, .5, .7} );
		Circle( {20, 20}, 10 );
	)
);

```

### Pen Size

**構文:** Pen Size( &lt;x&gt; )

**説明:** 描画線のペンサイズをピクセル単位で設定する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Pen Size( 4 );
		Line( [10 30 90], [88 22 44] );
	)
);

```

### Pick Color

**構文:** color = Pick Color( &lt;window title&gt;, &lt;name|index|rgbList&gt; )

**説明:** 標準のカラーピッカー(色を選択する画面)で選択された色を戻す。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
pickedColor = Pick Color( "Pick a Line Color", "Red" );
New Window( "Example",
	Graph Box(
		Frame Size( 300, 300 ),
		Marker( Marker State( 3 ), [11 44 77], [75 25 50] );
		Pen Color( pickedColor );
		Line( [10 30 70], [88 22 44] );
	)
);

```

### Pick Color Theme

**構文:** theme = Pick Color Theme( &lt;window title&gt;, &lt;Color Theme(name|specification)&gt;, &lt;Type("Continuous" | "Sequential" | "Bad to Good" | "Categorical")&gt;)

**説明:** 標準のカラーテーマピッカーで選択されたカラーテーマを戻す。初期テーマは明示的に指定するか、またはTypeを指定して環境設定で設定されているテーマを使用できる。

**JMP追加されたバージョン:** 17

**グラフビルダー**

```jsl

Names Default To Here( 1 );

theme = Pick Color Theme( "Choose a color theme", Type( "Bad to Good" ) );
dt = Open( "$SAMPLE_DATA/SATByYear.jmp" );
gb = dt << Graph Builder(
	Show Control Panel( 0 ),
	Variables( Color( :SAT Math ), Shape( :State ) ),
	Elements( Map Shapes( Legend( 2 ) ) )
);
server = gb << Get Legend Server;
item = server << Get Legend Item( 2, 1 );
item << Set Properties( {Gradient( {Color Theme( theme )} )} );

```

**行の凡例**

```jsl

Names Default To Here( 1 );

pickedTheme = Pick Color Theme( "Pick a Color Theme" );
biv = Open( "$SAMPLE_DATA/Big Class.jmp" ) << Run Script( "Bivariate" );
Report( biv )[FrameBox( 1 )] << Row Legend( "age", Color Theme( pickedTheme ) );

```

### Pie

**構文:** Pie( left, top, right, bottom, startAngle, endAngle )

**説明:** 扇形を描画する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Fill Color( "red" );
		Pie( 10, 80, 70, 40, 0, 90 );
	)
);

```

### Pixel Line To

**構文:** Pixel Line To( h, v )

**説明:** 現在のピクセルベースのペンの座標から、指定の横および縦の座標へと線を引く。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Pixel Origin( 50, 50 ); // in axis coordinates
		// others are pixels, relative to pixel origin
		Pixel Move To( 0, 0 );
		Pixel Line To( 0, 80 );
		Pixel Move To( 2, 0 );
		Pixel Line To( 2, 40 );
		Pixel Move To( 4, 0 );
		Pixel Line To( 4, 20 );
	)
);

```

### Pixel Move To

**構文:** Pixel Move To( h, v )

**説明:** ピクセル対応のペンを基点に相対して横(h)および縦(v)に移動する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Pixel Origin( 50, 50 ); // in axis coordinates
		// others are pixels, relative to pixel origin
		Pixel Move To( 0, 0 );
		Pixel Line To( 0, 80 );
		Pixel Move To( 2, 0 );
		Pixel Line To( 2, 40 );
		Pixel Move To( 4, 0 );
		Pixel Line To( 4, 20 );
	)
);

```

### Pixel Origin

**構文:** Pixel Origin( x, y )

**説明:** ピクセル描画のコマンドのベースとなる基点を設定する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Pixel Origin( 50, 50 ); // in axis coordinates
		// others are pixels, relative to pixel origin
		Pixel Move To( 0, 0 );
		Pixel Line To( 0, 80 );
		Pixel Move To( 2, 0 );
		Pixel Line To( 2, 40 );
		Pixel Move To( 4, 0 );
		Pixel Line To( 4, 20 );
	)
);

```

### Pixel Path

**構文:** PixelPath( h, v, pathMatrix|pathText, &lt;fill=0&gt;, &lt;scale=1.0&gt;, &lt;orient={0.0,1.0}&gt; )

**説明:** 指定されたピクセルの座標にそって、線や塗りつぶしの図形を描く。fillが0の場合は線を描き、0以外の場合は塗りつぶした図形を描く。座標は、N x 3の行列、または、テキストで指定する。座標を行列で指定する場合は、x座標、y座標、および、それらの座標の各点に対するフラグで構成する。フラグの値は、0(コントロール点)、1(移動)、2(線分)、3(3次ベジエ曲線)または負の値(点がパスの終点でもある場合)。座標をテキストで指定する場合は、SVG構文を用いる。座標は、オプションのパラメータに応じて、基点、方向、および尺度が決められる。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Fill Color( "blue" );
		angle = 45 * Pi() / 180; // 45 deg in radians
		Pixel Origin( 20, 80 );
		Pixel Path(
			0,
			0, // offset from pixel origin in pixels
			[-10 -10 1,
			10 -10 0,
			20 20 0,
			-10 20 -3],
			1, // fill
			2.0, // scale
			{Sin( angle ), Cos( angle )} // clockwise rotation
		);
		Pixel Origin( 80, 20 );
		Pixel Path(
			0,
			0,
			"M-10,-10 C10,-10 20,20 -10,20 Z",
			0,
			1.0,
			{Sin( -angle ), Cos( -angle )}
		);
	)
);

```

### Pixel Text

**構文:** Pixel Text( &lt;properties&gt;, {h, v}, text, ... )

**説明:** ピクセル位置{h, v}に移動し、引数textで指定したテキストを描画する。名前付きプロパティ引数には、Center Justified、Right Justified、Top Align、Bottom Align、Erased、Boxed、Counterclockwise、Clockwiseがある。位置引数、名前付き引数、および文字列は任意の順で組み合わせることができる。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );

New Window( "Example",
	Graph Box(
		Pixel Origin( 10, 80 ); // in axis coordinates
		Pixel Move To( 0, 0 );
		Pixel Line To( 160, 140 ); // in pixels from pixel origin
		Pixel Text( {0, 0}, "default" );
		Pixel Text( Erased, Boxed, Clockwise, {75, 75}, "Erased Boxed Clockwise" );
		Pixel Text(
			Center Justified,
			Bottom Align,
			{160, 140},  // in pixels from pixel origin
			"Bottom Align\!NCenter Justified"
		);
	)
);

```

### Polygon

**構文:** Polygon( {x1, y1}, {x2, y2}, ..., &lt;&lt;fill(bool) ); Polygon( xMatrix, &lt;yMatrix&gt;, &lt;&lt;fill(bool) )

**説明:** 点で指定された多角形を描画する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Fill Color( "gray" );
		Polygon( [10 30 90], [88 22 44] );
		Polygon( [10 10, 50 80, 80 20, 50 50], <<Fill( 0 ) );
	)
);

```

### Polygon Area

**構文:** area = Polygon Area( {x1, y1}, {x2, y2}, ... );area = Polygon Area( xMatrix, yMatrix )

**説明:** 指定した多角形の面積を計算する。

**JMP追加されたバージョン:** 14

**例 1**

```jsl

Names Default To Here( 1 );
area = Polygon Area( {0, 0}, {0, 10}, {10, 10}, {10, 0} );

```

**例 2**

```jsl

Names Default To Here( 1 );
area = Polygon Area( [10 20 30], [10 30 20] );

```

### Polygon Centroid

**構文:** {cx, cy} = Polygon Centroid( {x1, y1}, {x2, y2}, ... );centroid = Polygon Centroid( xMatrix, yMatrix )

**説明:** 指定した多角形の重心を計算する。

**JMP追加されたバージョン:** 14

**例 1**

```jsl

Names Default To Here( 1 );
{cx, cy} = Polygon Centroid( {0, 0}, {0, 10}, {10, 10}, {10, 0} );

```

**例 2**

```jsl

Names Default To Here( 1 );
centroid = Polygon Centroid( [10 20 30], [10 30 20] );

```

### Polygon Simplify

**構文:** rows = Polygon Simplify( xMatrix|xyMatrix, &lt;yMatrix&gt;, &lt;&lt;&lt;detail factor(f=200)&gt;, &lt;&lt;&lt;multiple(ids)&gt;, &lt;&lt;&lt;geodesic(bool)&gt; )

**説明:** 多角形から、余分な詳細を削除し、残りの点のインデックスを戻す。detail factorは、詳細の許容誤差の逆数に比例する。multiple(ids)は、多数の多角形をまとめて単純化し、共通の辺が同じに扱われるようにすることを示す。idsは、各点を行とした行列。geodesic(1)は、座標が測地系の緯度と経度であることを示す。

**JMP追加されたバージョン:** 19

**例 1**

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Fill Color( "cyan" );
		xx = 18 * [1 1 1 1 1 2 3 4 5 5 5 5 5 4 3 2] + J( 1, 16, Random Uniform( -5, 5 ) );
		yy = 18 * [1 2 3 4 5 5 5 5 5 4 3 2 1 1 1 1] + J( 1, 16, Random Uniform( -5, 5 ) );
		Polygon( xx, yy );
		rows = Polygon Simplify( xx, yy, <<detail factor( 10 ) );
		Polygon( xx[rows], yy[rows], <<Fill( 0 ) );
	)
);

```

**複数の多角形**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_IMPORT_DATA/Parishes.shp" );
rows = Where( dt, 4 <= :Shape <= 7 );
polys = dt[rows, {"X", "Y"}];
ids = dt[rows, {"Shape"}] * 100 + dt[rows, {"Part"}];
Close( dt, NoSave );

simple rows = Polygon Simplify(
	polys,
	<<detail factor( 500 ),
	<<multiple( ids ),
	<<geodesic( 1 )
);
unique ids = Associative Array( ids );

minx = Min( polys[0, 1] );
maxx = Max( polys[0, 1] );
sx = maxx - minx;
miny = Min( polys[0, 2] );
maxy = Max( polys[0, 2] );
sy = maxy - miny;

New Window( "Parishes",
	Graph Box(
		Frame Size( 600, 600 ),
		X Scale( minx - sx * 0.02, maxx + sx * 0.02 ),
		Y Scale( miny - sy * 0.02, maxy + sy * 0.02 ), 
		
		For Each( {id}, unique ids, 

			rows = simple rows[Loc( ids[simple rows] == id )];
			Pen Color( "light red" );
			Pen Size( 4 );
			Polygon( polys[rows, 0], <<Fill( 0 ) );

			rows = Loc( ids == id );
			Pen Color( "black" );
			Pen Size( 1 );
			Polygon( polys[rows, 0], <<Fill( 0 ) );
			
			{cx, cy} = Polygon Centroid( polys[rows, 0] );
			Text( Center Justified, {cx, cy}, Char( id ) );
		)
	)
);

```

### RGB Color

**構文:** y = RGB Color( r, g, b ); y = RGB Color( {r, g, b} )

**説明:** 指定された赤(r)、緑(g)、青(b)の成分に対する色値を戻す。赤、緑、青の成分は、0～1の数値で指定すること。RGB Color(1, 1, 1) は白色。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
New Window( "RGB Color Example", 
    /* 1 through 16 are good */ 
	division = 6;
	blocks = division + 1;
	ysize = 400 / Sqrt( division );
	xsize = ysize * blocks;
	fract = 1 / division;
    /* 100 is default axis range */
	yBlockSize = 100 / blocks;
	xBlockSize = 100 / (blocks * blocks);
	Graph(
		frameSize( xsize, ysize ),
		For( blue = 0, blue <= 1, blue += fract,
			For( red = 0, red <= 1, red += fract,
				For( green = 0, green <= 1, green += fract,
					y = red / fract * yBlockSize;
					x = green / fract * xBlockSize + blue / fract * xBlockSize * blocks;
                    /* here's the example */
					Fill Color( RGB Color( red, green, blue ) );
					Rect( x, y, x + xBlockSize, y + yBlockSize, 1 );
				)
			)
		)
	);
);

```

### Rect

**構文:** Rect( left, top, right, bottom, &lt;fill=0&gt; ); Rect( {left, top}, {right, bottom} )

**説明:** 長方形を描く。塗りつぶし(fill)が0でない場合は、塗りつぶしたもの。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Pen Color( "Green" );
		Pen Size( 2 );
		Fill Color( "Red" );
		Rect( 15, 75, 65, 55, 1 );
		Rect( 10, 80, 70, 50 );
	)
);

```

### Remove Color Theme

**構文:** Remove Color Theme("Name"|{"Name", &lt;flags&gt;, {color, ...}, &lt;{position, ...}&gt;})

**説明:** グローバルリストから、名前またはフルカラーテーマオブジェクトとして指定されたカスタムカラーテーマを削除する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
Remove Color Theme( "Yellow To Blue" );

```

### Text

**構文:** Text( &lt;properties&gt;, {x, y}, text, ... )Text( {left, top, right, bottom}, text )

**説明:** {x, y}の位置に移動して引数textで指定されたテキストを描く。名前付き引数には、Center Justified、Right Justified、Erased、Boxed、Counterclockwise、Clockwiseがある。位置引数、名前付き引数、文字列は、任意の順序で指定できる。4組のx-y座標を使ってテキストのボックスを指定することもできる。その場合、プロパティは使用されない。

**JMP追加されたバージョン:** バージョン14より前

**例 1**

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Text Color( "red" );
		Text( Center Justified, {50, 20}, "centered" );
	)
);

```

**例 2**

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Text Color( "blue" );
		Text( {20, 80, 40, 70}, "some text" );
	)
);

```

### Text Color

**構文:** Text Color( &lt;name|index|rgbList&gt; )

**説明:** テキストを描画する色を設定する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Text Color( "red" );
		Text( {50, 20}, "label" );
	)
);

```

### Text Font

**構文:** {nm, sz, st, an} = Text Font(fontName, &lt;size&gt;, &lt;"bold italic underline strikeout"&gt;, &lt;angle&gt;

**説明:** 後続のText()で使用するフォントを設定する。引数なしで使用すると、現在のフォント設定が取得できる。Angleは時計回りの角度。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
New Window( "Degrees",
	Graph Box(
		FrameSize( 400, 400 ),
		X Scale( -100, 100 ),
		Y Scale( -100, 100 ),
		Local( {fname, fsize, fstyle, fangle, i, a},
			{fname, fsize, fstyle, fangle} = Text Font();
			Text Font( If( Host is( "Mac" ), "Helvetica", "Arial" ), 30, "Italic Bold" );
			Text( Center Justified, {0, -10}, "JMP" );
			For( i = 0, i < 360, i += 15,
				Text Font( {fname, 10, "plain", -i + 90} );
				a = i * Pi() / 180;
				Text( Center Justified, {80 * Cos( a ), 80 * Sin( a )}, Char( i ) );
				Line( {70 * Cos( a ), 70 * Sin( a )}, {76 * Cos( a ), 76 * Sin( a )} );
			);
		)
	)
);

```

### Text Size

**構文:** Text Size( n )

**説明:** テキストのフォントサイズを設定する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Text Size( 20 );
		Text( {50, 20}, "label" );
	)
);

```

### To Color Space

**構文:** color = To Color Space( color, colorSpace )

**説明:** 指定された色を、別の色空間に変換する。色域外である色は、より狭い色空間に収まるようにマッピングされる。

**JMP追加されたバージョン:** 18

**例 1**

```jsl

Names Default To Here( 1 );
To Color Space( "red", "LMS" );

```

**例 2**

```jsl

Names Default To Here( 1 );
To Color Space( {0.871, 0.032, 0.061, "lRGB"}, "HLS" );

```

**例 3**

```jsl

Names Default To Here( 1 );
To Color Space( {0.941, 0.196, 0.274, "lRGB", 0.871, 0.032, 0.061}, "HLS" );

```

### Transparency

**構文:** Transparency( &lt;alpha&gt; )

**説明:** 描画コマンドで使用される透明度を設定する。alphaの範囲は0(透明)～1(不透明、デフォルト)。これをサポートしていないオペレーティングシステムもある。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Frame Size( 500, 500 ),
		X Scale( -3, 3 ),
		Y Scale( -3, 3 ),
		Transparency( .1 );
		Fill Color( RGB Color( 1/*red*/, 0/*green*/, 0/*blue*/ ) );
		For( i = 0, i < 10000, i++,
			Circle( {Random Normal(), Random Normal()}, 0.05, "FILL" )
		);
	)
);

```

### V Line

**構文:** V Line( x ); V Line( x, y1, y2 )

**説明:** xの位置に縦線を描く。引数が1つの場合、グラフ全体に縦線が描かれる。引数が3つの場合、y1からy2までの縦線が描かれる。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Pen Size( 2 );
		V Line( 20, 10, 50 );
	)
);

```

### V Size

**構文:** v = V Size()

**説明:** グラフィックフレームの高さをピクセル単位で戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Text Size( V Size() / 4 );
		Text( {50, 20}, "label" );
	)
);

```

### X Function

**構文:** X Function( xExpr, yName, &lt;properties&gt; )

**説明:** 関数の値をX軸上にプロットする。yNameの値をY軸に沿って変化させたときの式xExprの値が描かれる。次の名前付き引数を追加で指定できる。Min(下限値)、Max(上限値)、Fill(0もしくは1)、Inc(インクリメントの上限値)。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Pen Color( "red" );
		X Function( 20 + 40 * Sin( a / 30 ), a );
	)
);

```

### X Origin

**構文:** x = X Origin()

**説明:** グラフィックフレームの左端のx値を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Fill Color( "red" );
		Oval(
			X Origin() + 10,
			Y Origin() + Y Range() - 10,
			X Origin() + X Range() - 10,
			Y Origin() + 10,
			1
		);
	)
);

```

### X Range

**構文:** x = X Range()

**説明:** 左端から右端までのx方向の距離を戻す。X Origin() + X Range()が右端。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Fill Color( "red" );
		Oval(
			X Origin() + 10,
			Y Origin() + Y Range() - 10,
			X Origin() + X Range() - 10,
			Y Origin() + 10,
			1
		);
	)
);

```

### X Scale

**構文:** X Scale( &lt;xMin&gt;, &lt;xMax&gt; )

**説明:** グラフィックフレームに対して新しいスケールを設定。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
/* Default value for X Scale() is (0,100). */
New Window( "Example",
	Graph Box(
		Y Scale( -10, 90 ),
		X Scale( -10, 90 ),
		Oval(
			X Origin() + 10,
			(Y Origin() + Y Range()) - 10,
			(X Origin() + X Range()) - 10,
			Y Origin() + 10,
			1
		)
	)
);

```

### XY Function

**構文:** XY Function( x(t), y(t), t, min(0), max(1), inc(.01) | steps(100) )

**説明:** 指定された範囲のパラメータtに対して、x(t)とy(t)を座標とした曲線を描画する。Inc()はtの最大増分、steps()はtの最小ステップ数。デフォルト値では曲線が上手に表示されない場合に、これらのsteps()またはinc()を使用すること。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
New Window( "Spiral",
	Graph Box(
		Pen Color( "red" );
		xCenter = 50;
		yCenter = 50;
		minAngle = 0;
		maxAngle = Pi() * 2 * 20;
		XY Function(
			xCenter + ((ta / 3) * Cos( ta )),
			yCenter + ((ta / 3) * Sin( ta )),
			ta,
			Min( minAngle ),
			Max( maxAngle ),
			inc( Pi() / 100 )
		);
	)
);
/* sin() and cos() use ta as an argument (rotates)
   AND as a factor (expands) in this example.
   (sin and cos use radians, not degrees.) */

```

### Y Function

**構文:** Y Function( yExpr, xName, &lt;properties&gt; )

**説明:** 関数の値をY軸上にプロットする。xNameの値をX軸に沿って変化させたときの式yExprの値が描かれる。次の名前付き引数を追加で指定できる。Min(下限値)、Max(上限値)、Fill(0もしくは1)、Inc(インクリメントの上限値)。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Pen Color( "red" );
		Y Function( 20 + 40 * Sin( a / 30 ), a );
	)
);

```

### Y Origin

**構文:** y = Y Origin()

**説明:** グラフィックフレームの下端のy値を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Fill Color( "red" );
		Oval(
			X Origin() + 10,
			Y Origin() + Y Range() - 10,
			X Origin() + X Range() - 10,
			Y Origin() + 10,
			1
		);
	)
);

```

### Y Range

**構文:** y = Y Range()

**説明:** 下端から上端までのy方向の距離を戻す。Y Origin() + Y Range()が上端。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Fill Color( "red" );
		Oval(
			X Origin() + 10,
			Y Origin() + Y Range() - 10,
			X Origin() + X Range() - 10,
			Y Origin() + 10,
			1
		);
	)
);

```

### Y Scale

**構文:** Y Scale( &lt;yMin&gt;, &lt;yMax&gt; )

**説明:** グラフィックフレームに対して新しいスケールを設定。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
/* Default value for Y Scale() is (0,100).*/
New Window( "Example",
	Graph Box(
		Y Scale( -10, 90 ),
		X Scale( -10, 90 ),
		Oval(
			X Origin() + 10,
			(Y Origin() + Y Range()) - 10,
			(X Origin() + X Range()) - 10,
			Y Origin() + 10,
			1
		)
	)
);

```

