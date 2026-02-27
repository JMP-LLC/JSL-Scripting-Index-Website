# Display3DBox



## 関連するコンストラクター

### Graph 3D Box

**構文:** y = Graph 3D Box()

**説明:** 表示コマンドを3Dプロットに送信する。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );

```

## 項目のメッセージ

### Add Ellipsoid

**構文:** obj &lt;&lt; Add Ellipsoid( 4x4 matrix )obj &lt;&lt; Add Ellipsoid(3x3 cov,3x1 means)obj &lt;&lt; Add Ellipsoid(3x3 corr,3x1 means,3x1 std dev)

**説明:** プロットに楕円を描画する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D(
	Add Ellipsoid(
		[1 0.42632 0.85183, 0.42632 1 0.34418, 0.85183 0.34418 1],
		[6.55099 2.96919 5.5066],
		[0.57829 0.29087 0.53668]
	)
);

```

### Add Markers

**構文:** obj &lt;&lt; Add Markers( [ nx1 X matrix ], [ nx1 Y matrix ], [ nx1 Z matrix ] )

**説明:** プロットにn個のマーカーを描画する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Add Markers( [2 3 4], [5 6 7], [1 8 9] ) );

```

### Add Vector

**構文:** obj &lt;&lt; Add Vector( [ 3xn from matrix ], [ 3xn to matrix ], FromCap( CutOff|Sphere|Point|Feather ), ToCap( CutOff|Sphere|Point|Feather ), Facets( Triangle|Square|Round ), Shaft Color( color ), Shaft Thickness( number ), From Thickness( number ), To Thickness( number ), From Color( number ), To Color( number ) ) )

**説明:** プロットにベクトルまたは矢印を描画する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Add Vector( [4.5 2 1], [7.5 4 6], FromCap( "Feather" ), ToCap( "Point" ) ) );

```

### Get Axes

**構文:** obj &lt;&lt; Get Axes

**説明:** プロットの軸の表示状態を戻す。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
s = obj << Frame3D( Get Axes );
Show( s );

```

### Get Box

**構文:** obj &lt;&lt; Get Box

**説明:** プロットのボックスフレームの表示状態を戻す。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
s = obj << Frame3D( Get Box );
Show( s );

```

### Get Grab Handles

**構文:** obj &lt;&lt; Get Grab Handles

**説明:** プロットのグラブハンドルの表示状態を戻す。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
s = obj << Frame3D( Get Box );
Show( s );

```

### Get Graph Size

**構文:** obj &lt;&lt; Get Graph Size

**説明:** グラフのサイズを戻す。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
s = obj << Frame3D( Get Graph Size );
Show( s );

```

### Get Grids

**構文:** obj &lt;&lt; Get Grids

**説明:** プロットのグリッドの表示状態を戻す。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
s = obj << Frame3D( Get Grids );
Show( s );

```

### Get Hide Lights Border

**構文:** obj &lt;&lt; Get Hide Lights Border

**説明:** プロットの周りのライト枠の状態を戻す。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
state = obj << Frame3D( Get Hide Lights Border );
Show( state );

```

### Get Line Scale

**構文:** obj &lt;&lt; Get Line Scale

**説明:** プロットのグリッドの線幅を戻す。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
w = obj << Frame3D( Get Line Scale );
Show( w );

```

### Get Marker Quality

**構文:** obj &lt;&lt; Get Marker Quality

**説明:** プロットのマーカー特性(形状や濃淡などの綺麗さ)を戻す。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
q = obj << Frame3D( Get Marker Quality );
Show( q );

```

### Get Marker Scale

**構文:** obj &lt;&lt; Get Marker Scale

**説明:** プロットのマーカーサイズを戻す。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
s = obj << Frame3D( Get Marker Scale );
Show( s );

```

### Get Marker Transparency

**構文:** obj &lt;&lt; Get Marker Transparency

**説明:** プロットのマーカーの透明度を戻す。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
t = obj << Frame3D( Get Marker Transparency );
Show( t );

```

### Get Rotation

**構文:** obj &lt;&lt; Get Rotation

**説明:** フレームの現在の回転を戻す。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
r = obj << Frame3D( Get Rotation() );
Show( r );

```

### Get Text Scale

**構文:** obj &lt;&lt; Get Text Scale

**説明:** プロットの軸テキストのテキストサイズを戻す。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
s = obj << Frame3D( Get Text Scale );
Show( s );

```

### Get View Ortho

**構文:** obj &lt;&lt; Get View Ortho

**説明:** プロットにおける平行投影の状態を戻す。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
o = obj << Frame3D( Get View Ortho );
Show( o );

```

### Get View Perspective

**構文:** obj &lt;&lt; Get View Perspective

**説明:** プロットの透視投影を戻す。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
p = obj << Frame3D( Get View Perspective );
Show( p );

```

### Get View Zoom

**構文:** obj &lt;&lt; Get View Zoom

**説明:** プロットの現在のズームを戻す。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
z = obj << Frame3D( Get View Zoom );
Show( z );

```

### Get Wall Color

**構文:** obj &lt;&lt; Get Wall Color

**説明:** プロットの壁の色を戻す。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
c = obj << Frame3D( Get Wall Color );
Show( c );

```

### Get Walls

**構文:** obj &lt;&lt; Get Walls

**説明:** プロットの壁の表示状態を戻す。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
s = obj << Frame3D( Get Walls );
Show( s );

```

### Get X Axis Color

**構文:** obj &lt;&lt; Get X Axis Color

**説明:** プロットのX軸の色を戻す。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
c = obj << Frame3D( Get X Axis Color );
Show( c );

```

### Get X Axis Label

**構文:** obj &lt;&lt; Get X Axis Label

**説明:** プロットのX軸のラベルを戻す。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
label = obj << Frame3D( Get X Axis Label );
Show( label );

```

### Get Y Axis Color

**構文:** obj &lt;&lt; Get Y Axis Color

**説明:** プロットのY軸の色を戻す。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
c = obj << Frame3D( Get Y Axis Color );
Show( c );

```

### Get Y Axis Label

**構文:** obj &lt;&lt; Get Y Axis Label

**説明:** プロットのY軸のラベルを戻す。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
label = obj << Frame3D( Get Y Axis Label );
Show( label );

```

### Get Z Axis Color

**構文:** obj &lt;&lt; Get Z Axis Color

**説明:** プロットのZ軸の色を戻す。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
c = obj << Frame3D( Get Z Axis Color );
Show( c );

```

### Get Z Axis Label

**構文:** obj &lt;&lt; Get Z Axis Label

**説明:** プロットのZ軸のラベルを戻す。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
label = obj << Frame3D( Get Z Axis Label );
Show( label );

```

### Set Axes

**構文:** obj &lt;&lt; Set Axes( state=0|1 )

**説明:** プロットのX、Y、Z軸の表示/非表示を切り替える。デフォルトでは表示。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Axes( 1 ) );

```

### Set Box

**構文:** obj &lt;&lt; Set Box( state=0|1 )

**説明:** プロットのボックスフレームの表示/非表示を切り替える。デフォルトでは表示。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Box( 1 ) );

```

### Set Graph Size

**構文:** obj &lt;&lt; Set Graph Size( x, y )

**説明:** グラフのサイズを設定する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Graph Size( 700, 800 ) );

```

### Set Grids

**構文:** obj &lt;&lt; Set Grids( state=0|1 )

**説明:** プロットのグリッドの表示/非表示を切り替える。デフォルトでは表示。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Grids( 1 ) );

```

### Set Hide Lights Border

**構文:** obj &lt;&lt; Set Hide Lights Border( state=0|1 )

**説明:** プロットの周りのライト枠の表示/非表示を切り替える。デフォルトでは表示。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Hide Lights Border( 0 ) );

```

### Set Line Scale

**構文:** obj &lt;&lt; Set Line Scale( number )

**説明:** プロットのグリッドの線幅を設定する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Line Scale( 6.5 ) );

```

### Set Marker Quality

**構文:** obj &lt;&lt; Set Marker Quality( number )

**説明:** プロットのマーカー特性(形状や濃淡などの綺麗さ)を設定する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Marker Scale( 3 ), Set Marker Quality( 0.2625 ) );

```

### Set Marker Scale

**構文:** obj &lt;&lt; Set Marker Scale( number )

**説明:** プロットのマーカーサイズを設定する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Marker Scale( 3.5 ) );

```

### Set Marker Transparency

**構文:** obj &lt;&lt; Set Marker Transparency( fraction )

**説明:** プロットにマーカーの透明度を設定する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Marker Transparency( 0.4125 ) );

```

### Set Oscillation

**構文:** obj &lt;&lt; Set Oscillation( X, Y, Z, duration )

**説明:** プロットの振幅を設定する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Rotation( -60, -3, 35 ), Set Oscillation( -54, 0, 38, 100 ) );

```

### Set Rotation

**構文:** obj &lt;&lt; Set Rotation( X, Y, Z )

**説明:** 指定の座標にフレームを回転する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Rotation( -60, -3, 35 ) );

```

### Set Spin

**構文:** obj &lt;&lt; Set Spin( dx, dy, sx, sy )

**説明:** 指定の軸上でグラフを回転する。dxとdyの値は、ポイント(sx, sy)からどれだけ動かすかの値。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Spin( .01, .01, 0, 0 ) );

```

### Set Text Scale

**構文:** obj &lt;&lt; Set Text Scale( number )

**説明:** プロットの軸テキストのテキストサイズを設定する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Text Scale( 1.4 ) );

```

### Set View Ortho

**構文:** obj &lt;&lt; Set View Ortho( state=0|1 )

**説明:** プロットを平行投影(直交射影)で表示する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set View Ortho( 1 ) );

```

### Set View Perspective

**構文:** obj &lt;&lt; Set View Perspective( fraction )

**説明:** プロットの透視投影を設定する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set View Perspective( 0.275 ) );

```

### Set View Zoom

**構文:** obj &lt;&lt; Set View Zoom( number )

**説明:** プロットのズームを設定する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set View Zoom( 0.5 ) );
Wait( 2 );
obj << Frame3D( Set View Zoom( 2 ) );

```

### Set Wall Color

**構文:** obj &lt;&lt; Set Wall Color( number )

**説明:** プロットの壁の色を設定する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Wall Color( -16775543 ) );

```

### Set Walls

**構文:** obj &lt;&lt; Set Walls( state=0|1 )

**説明:** プロットの壁の表示/非表示を切り替える。デフォルトでは表示。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Walls( 1 ) );

```

### Set X Axis Color

**構文:** obj &lt;&lt; Set X Axis Color( color )

**説明:** プロットのX軸の色を設定する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set X Axis Color( 5 ) );

```

### Set X Axis Label

**構文:** obj &lt;&lt; Set X Axis Label( string )

**説明:** プロットのX軸のラベルを設定する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set X Axis Label( "Iris Sepal Length" ) );

```

### Set Y Axis Color

**構文:** obj &lt;&lt; Set Y Axis Color( color )

**説明:** プロットのY軸の色を設定する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Y Axis Color( 11 ) );

```

### Set Y Axis Label

**構文:** obj &lt;&lt; Set Y Axis Label( string )

**説明:** プロットのY軸のラベルを設定する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Y Axis Label( "Iris Petal Length" ) );

```

### Set Z Axis Color

**構文:** obj &lt;&lt; Set Z Axis Color( color )

**説明:** プロットのZ軸の色を設定する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Z Axis Color( "Green" ) );

```

### Set Z Axis Label

**構文:** obj &lt;&lt; Set Z Axis Label( string )

**説明:** プロットのZ軸のラベルを設定する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Z Axis Label( "Iris Sepal Width" ) );

```

### XAxis

**構文:** obj &lt;&lt; XAxis( Min( number ), Max( number ), Inc( number ), Format( ) )

**説明:** プロットのX軸の値を設定する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( XAxis( Min( 3 ), Max( 10 ) ) );

```

### YAxis

**構文:** obj &lt;&lt; YAxis( Min( number ), Max( number ), Inc( number ), Format( ) )

**説明:** プロットのY軸の値を設定する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( YAxis( Min( 1 ), Max( 10 ), Inc( 0.5 ) ) );

```

### Z Axis

**構文:** obj &lt;&lt; Z Axis( Min( number ), Max( number ), Inc( number ), Format( ) )

**説明:** プロットのZ軸の値を設定する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( ZAxis( Min( 1 ), Max( 5 ), Inc( 0.25 ) ) );

```

### get light active

**構文:** obj &lt;&lt; get light active( light number )

**説明:** プロットを照らす指定のライトのオン/オフの状態を戻す。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
p = obj << Frame3D( Set Hide Lights Border( 0 ), Get Light Active( 2 ) );
Show( p );

```

### get light color

**構文:** obj &lt;&lt; get light color( light number )

**説明:** プロットを照らす指定のライトの色をリスト{red, green, blue}で戻す。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
c = obj << Frame3D( Set Hide Lights Border( 0 ), Get Light Color( 1 ) );
Show( c );

```

### get light position

**構文:** obj &lt;&lt; get light position( light number )

**説明:** プロットを照らす指定のライトの位置をリスト{x, y, z}で戻す。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
p = obj << Frame3D( Set Hide Lights Border( 0 ), Get Light Position( 2 ) );
Show( p );

```

### set light active

**構文:** obj &lt;&lt; set light active( light number, state=0|1 )

**説明:** プロットを照らす指定のライトをオンにする。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Hide Lights Border( 0 ), Set Light Active( 4, 1 ) );

```

### set light color

**構文:** obj &lt;&lt; set light color( light number, red value, green value, blue value )

**説明:** プロットを照らすライトの色を設定する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Hide Lights Border( 0 ), Set Light Color( 2, 240, 50, 70 ) );

```

### set light position

**構文:** obj &lt;&lt; set light position( light number, X, Y, Z )

**説明:** プロットを照らすライトの位置を設定する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Hide Lights Border( 0 ), Set Light Position( 2, -1.5833, 10, 0 ) );

```

