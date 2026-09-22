# PictSeg



## 項目のメッセージ

### Bounds

**構文:** obj &lt;&lt; Bounds( left(value), right(value), top(value), bottom(value) )

**説明:** PictSegの境界を軸座標値で設定する。

```jsl

imgBox = Graph Box( frameSize( 150, 150 ) );win = New Window( "Image", imgBox );img = New Image( "$SAMPLE_IMAGES/tile.jpg" );imgBox = win[framebox( 1 )];imgBox << AddImage( Image( img ) );imgSeg = imgBox << FindSeg( PictSeg( 1 ) );imgSeg << bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) );{l, r, t, b} = imgSeg << getBounds;

```

### Contrast

**構文:** obj &lt;&lt; filter("contrast")

**説明:** PictSeg内の画像にコントラストを適用する。正の値で画像が明るくなり、負の値で暗くなる。有効な値の範囲は-10～10。

```jsl

imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );win = New Window( "Image", imgBox );img = New Image( "$SAMPLE_IMAGES/tile.jpg" );imgBox = win[framebox( 1 )];imgBox << AddImage(	Image( img ),	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) ));imgSeg = imgBox << FindSeg( PictSeg( 1 ) );imgSeg << Filter( "contrast", 3 );

```

### Crop

**構文:** obj &lt;&lt; Crop

**説明:** PictSegを指定のサイズに切り抜き、外側の部分を削除する。値の順序は、左、上、右、下。縦横比が維持されないため、画像が歪む場合がある。

```jsl

imgBox = Graph Box( frameSize( 451, 451 ), SuppressAxes );win = New Window( "Image", imgBox );img = New Image( "$SAMPLE_IMAGES/tile.jpg" );imgBox = win[framebox( 1 )];imgBox << AddImage(	Image( img ),	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) ));imgSeg = imgBox << FindSeg( PictSeg( 1 ) );Wait( 1 );imgSeg << Crop( 10, 90, 90, 10 );

```

### Despeckle

**構文:** obj &lt;&lt; filter("despeckle")

**説明:** PictSeg内の画像に斑点除去フィルタを適用し、斑点状のノイズを除去する。

```jsl

imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );win = New Window( "Image", imgBox );img = New Image( "$SAMPLE_IMAGES/tile.jpg" );imgBox = win[framebox( 1 )];imgBox << AddImage(	Image( img ),	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) ));imgSeg = imgBox << FindSeg( PictSeg( 1 ) );imgSeg << Filter( "despeckle" );

```

### Edge

**構文:** obj &lt;&lt; filter("edge")

**説明:** PictSeg内の画像にエッジ検出フィルタを適用する。エッジは黒、その他の部分はすべて白で描画される。

```jsl

imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );win = New Window( "Image", imgBox );img = New Image( "$SAMPLE_IMAGES/tile.jpg" );imgBox = win[framebox( 1 )];imgBox << AddImage(	Image( img ),	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) ));imgSeg = imgBox << FindSeg( PictSeg( 1 ) );imgSeg << Filter( "edge" );

```

### Enhance

**構文:** obj &lt;&lt; filter("enhance")

**説明:** PictSeg内の画像に輪郭強調フィルタを適用する。画質がシャープになる。

```jsl

imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );win = New Window( "Image", imgBox );img = New Image( "$SAMPLE_IMAGES/tile.jpg" );imgBox = win[framebox( 1 )];imgBox << AddImage(	Image( img ),	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) ));imgSeg = imgBox << FindSeg( PictSeg( 1 ) );imgSeg << Filter( "enhance" );

```

### Fill Graph

**構文:** obj &lt;&lt; Fill Graph

**説明:** グラフの境界を軸の範囲いっぱいに広げる。そのため、PictSegがグラフ全体を埋める形になる。縦横比が維持されないため、画像が歪む場合がある。

```jsl

imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );win = New Window( "Image", imgBox );img = New Image( "$SAMPLE_IMAGES/tile.jpg" );imgBox = win[framebox( 1 )];imgBox << AddImage( Image( img ), bounds( Left( 0 ), Right( 50 ), top( 50 ), bottom( 0 ) ) );imgSeg = imgBox << FindSeg( PictSeg( 1 ) );Wait( 1 );imgSeg << fill graph;

```

### Flip both

**構文:** obj &lt;&lt; flip both

**説明:** PictSeg内の画像の上下と左右をそれぞれ逆にする。

```jsl

imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );win = New Window( "Image", imgBox );img = New Image( "$SAMPLE_IMAGES/tile.jpg" );imgBox = win[framebox( 1 )];imgBox << AddImage(	Image( img ),	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) ));imgSeg = imgBox << FindSeg( PictSeg( 1 ) );imgSeg << flip both;

```

### Flip horizontal

**構文:** obj &lt;&lt; flip horizontal

**説明:** PictSeg内の画像の左右を逆にする。

```jsl

imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );win = New Window( "Image", imgBox );img = New Image( "$SAMPLE_IMAGES/tile.jpg" );imgBox = win[framebox( 1 )];imgBox << AddImage(	Image( img ),	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) ));imgSeg = imgBox << FindSeg( PictSeg( 1 ) );imgSeg << flip horizontal;

```

### Flip vertical

**構文:** obj &lt;&lt; flip vertical

**説明:** PictSeg内の画像の上下を逆にする。

```jsl

imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );win = New Window( "Image", imgBox );img = New Image( "$SAMPLE_IMAGES/tile.jpg" );imgBox = win[framebox( 1 )];imgBox << AddImage(	Image( img ),	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) ));imgSeg = imgBox << FindSeg( PictSeg( 1 ) );imgSeg << flip vertical;

```

### Gamma

**構文:** obj &lt;&lt; filter("gamma")

**説明:** PictSeg内の画像のガンマを調整する。有効な範囲は0～10。0～1の値を使うとガンマが小さくなり、1より大きい値を使うとガンマが大きくなる。

```jsl

imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );win = New Window( "Image", imgBox );img = New Image( "$SAMPLE_IMAGES/tile.jpg" );imgBox = win[framebox( 1 )];imgBox << AddImage(	Image( img ),	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) ));imgSeg = imgBox << FindSeg( PictSeg( 1 ) );imgSeg << Filter( "gamma", 1.5 );

```

### Gaussian Blur

**構文:** obj &lt;&lt; filter("gaussian blur", radius, sigma)

**説明:** PictSeg内の画像にぼかしを適用する。有効な半径の範囲は、0～5。

```jsl

imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );win = New Window( "Image", imgBox );img = New Image( "$SAMPLE_IMAGES/tile.jpg" );imgBox = win[framebox( 1 )];imgBox << AddImage(	Image( img ),	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) ));imgSeg = imgBox << FindSeg( PictSeg( 1 ) );imgSeg << Filter( "gaussian blur", 0.0, 1.0 );

```

### Get Bounds

**構文:** {left, right, top, bottom} = obj &lt;&lt; Get Bounds

**説明:** PictSegの境界を軸座標で戻す。値の順序は、左、右、上、下。

```jsl

imgBox = Graph Box( frameSize( 150, 150 ) );win = New Window( "Image", imgBox );img = New Image( "$SAMPLE_IMAGES/tile.jpg" );imgBox = win[framebox( 1 )];imgBox << AddImage(	Image( img ),	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) ));imgSeg = imgBox << FindSeg( PictSeg( 1 ) );{l, r, t, b} = imgSeg << getBounds;

```

### Get Size

**構文:** {width, height} = obj &lt;&lt; Get Size

**説明:** PictSegの幅と高さをピクセル座標で戻す。

```jsl

imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );win = New Window( "Image", imgBox );img = New Image( "$SAMPLE_IMAGES/tile.jpg" );imgBox = win[framebox( 1 )];imgBox << AddImage(	Image( img ),	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) ));imgSeg = imgBox << FindSeg( PictSeg( 1 ) );{w, h} = imgSeg << getSize;

```

### Lock

**構文:** obj &lt;&lt; Lock( state=0|1 )

**説明:** PictSeg内の画像をロックすることで、対話式操作の中で場所の移動やサイズの変更、回転が行われるのを防ぐ。

```jsl

imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );win = New Window( "Image", imgBox );img = New Image( "$SAMPLE_IMAGES/tile.jpg" );imgBox = win[framebox( 1 )];imgBox << AddImage(	Image( img ),	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) ));imgSeg = imgBox << FindSeg( PictSeg( 1 ) );imgSeg << lock( 1 );

```

### Median

**構文:** obj &lt;&lt; filter("median")

**説明:** PictSeg内の画像に中央値フィルタを適用する。これにより、各ピクセル値が周辺ピクセルの中央値の平均に置き換えられる。

```jsl

imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );win = New Window( "Image", imgBox );img = New Image( "$SAMPLE_IMAGES/tile.jpg" );imgBox = win[framebox( 1 )];imgBox << AddImage(	Image( img ),	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) ));imgSeg = imgBox << FindSeg( PictSeg( 1 ) );imgSeg << Filter( "median" );

```

### Move

**構文:** obj &lt;&lt; Move( xcenter, ycenter )

**説明:** 画像の中心を、指定したxとyの位置に動かす。xcenterとycenterは軸座標で表す。

```jsl

imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );win = New Window( "Image", imgBox );imgBox = win[framebox( 1 )];imgBox << AddImage( Open( "$SAMPLE_IMAGES/tile.jpg" ) );imgSeg = imgBox << FindSeg( PictSeg( 1 ) );imgSeg << Move( 75, 75 );

```

### Negate

**構文:** obj &lt;&lt; filter("negate")

**説明:** PictSeg内の画像に、色を反転させるフィルタを適用する。たとえば赤、緑、青がそれぞれシアン、黄、マゼンタになり、白は黒になる。

```jsl

imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );win = New Window( "Image", imgBox );img = New Image( "$SAMPLE_IMAGES/tile.jpg" );imgBox = win[framebox( 1 )];imgBox << AddImage(	Image( img ),	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) ));imgSeg = imgBox << FindSeg( PictSeg( 1 ) );imgSeg << Filter( "negate" );

```

### Normalize

**構文:** obj &lt;&lt; filter("normalize")

**説明:** PictSeg内の画像に正規化フィルタを適用する。画像のピクセル値の範囲が、色範囲全体に広がるように変換され、色のコントラストの幅が広くなる。

```jsl

imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );win = New Window( "Image", imgBox );img = New Image( "$SAMPLE_IMAGES/tile.jpg" );imgBox = win[framebox( 1 )];imgBox << AddImage(	Image( img ),	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) ));imgSeg = imgBox << FindSeg( PictSeg( 1 ) );imgSeg << Filter( "normalize" );

```

### Open

**構文:** obj &lt;&lt; Open( filename )

**説明:** 画像ファイルを開き、画像をPictSegに追加する。

```jsl

imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );win = New Window( "Image", imgBox );imgBox = win[framebox( 1 )];imgBox << AddImage(	Open( "$SAMPLE_IMAGES/tile.jpg" ),	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) ));

```

### Reduce Noise

**構文:** obj &lt;&lt; filter("reduce noise", radius)

**説明:** PictSeg内の画像にノイズ軽減フィルタを適用する。これにより、ピクセルが、radiusの指定に従ってその周辺ピクセルと平均化される。有効な範囲は0～5。

```jsl

imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );win = New Window( "Image", imgBox );img = New Image( "$SAMPLE_IMAGES/tile.jpg" );imgBox = win[framebox( 1 )];imgBox << AddImage(	Image( img ),	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) ));imgSeg = imgBox << FindSeg( PictSeg( 1 ) );imgSeg << Filter( "reduce noise", 2.0 );

```

### Remove

**構文:** obj &lt;&lt; Remove

**説明:** PictSegをディスプレイボックスから削除する。

```jsl

imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );win = New Window( "Image", imgBox );img = New Image( "$SAMPLE_IMAGES/tile.jpg" );imgBox = win[framebox( 1 )];imgBox << AddImage(	Image( img ),	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) ));imgSeg = imgBox << FindSeg( PictSeg( 1 ) );Wait( 1 );imgSeg << remove;

```

### Rotate

**構文:** obj &lt;&lt; Rotate( degrees )

**説明:** PictSegを時計回りの方向に指定の角度だけ回転させる。

```jsl

imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );win = New Window( "Image", imgBox );img = New Image( "$SAMPLE_IMAGES/tile.jpg" );imgBox = win[framebox( 1 )];imgBox << AddImage(	Image( img ),	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) ));imgSeg = imgBox << FindSeg( PictSeg( 1 ) );imgSeg << rotate( 45 );

```

### SetSize

**構文:** obj &lt;&lt; SetSize( {width, height} )

**説明:** PictSegの幅と高さをピクセル座標値で設定する。

```jsl

imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );win = New Window( "Image", imgBox );img = New Image( "$SAMPLE_IMAGES/tile.jpg" );imgBox = win[framebox( 1 )];imgBox << AddImage(	Image( img ),	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) ));imgSeg = imgBox << FindSeg( PictSeg( 1 ) );imgSeg << setSize( {300, 500} );{w, h} = imgSeg << getSize;

```

### Sharpen

**構文:** obj &lt;&lt; filter("sharpen")

**説明:** PictSeg内の画像に鮮鋭化(sharpen)フィルタを適用する。画質がシャープになる。

```jsl

imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );win = New Window( "Image", imgBox );img = New Image( "$SAMPLE_IMAGES/tile.jpg" );imgBox = win[framebox( 1 )];imgBox << AddImage(	Image( img ),	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) ));imgSeg = imgBox << FindSeg( PictSeg( 1 ) );imgSeg << Filter( "sharpen" );

```

### Specify Size

**構文:** obj &lt;&lt; Specify Size

**説明:** PictSegの境界を設定する。Boundsと似ているが、順序が左、上、右、下である点が異なる。縦横比が維持されないため、画像が歪む場合がある。

```jsl

imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );win = New Window( "Image", imgBox );img = New Image( "$SAMPLE_IMAGES/tile.jpg" );imgBox = win[framebox( 1 )];imgBox << AddImage( Image( img ) );imgSeg = imgBox << FindSeg( PictSeg( 1 ) );Wait( 1 );imgSeg << Specify Size( 0, 100, 100, 0 );

```

### Transparency

**構文:** obj &lt;&lt; Transparency( transparency )

**説明:** PicSegの透明度を設定する。0.0は完全に透明で、1.0は完全に不透明。

```jsl

imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );win = New Window( "Image", imgBox );img = New Image( "$SAMPLE_IMAGES/tile.jpg" );imgBox = win[framebox( 1 )];imgBox << AddImage(	Image( img ),	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) ));imgSeg = imgBox << FindSeg( PictSeg( 1 ) );imgSeg << Transparency( 0.5 );

```

