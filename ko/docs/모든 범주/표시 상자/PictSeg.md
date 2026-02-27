# PictSeg



## 항목 메시지

### Bounds

**구문:** obj &lt;&lt; Bounds( left(value), right(value), top(value), bottom(value) )

**설명:** 축 좌표에 PictSeg의 경계를 설정합니다.

```jsl

imgBox = Graph Box( frameSize( 150, 150 ) );win = New Window( "Image", imgBox );img = New Image( "$SAMPLE_IMAGES/tile.jpg" );imgBox = win[framebox( 1 )];imgBox << AddImage( Image( img ) );imgSeg = imgBox << FindSeg( PictSeg( 1 ) );imgSeg << bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) );{l, r, t, b} = imgSeg << getBounds;

```

### Contrast

**구문:** obj &lt;&lt; filter("contrast")

**설명:** PictSeg의 이미지에 대비를 적용합니다. 양수 값은 이미지를 밝게 만들고 음수 값은 이미지를 어둡게 만듭니다. 유용한 값은 -10 ~ 10입니다.

```jsl

imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );win = New Window( "Image", imgBox );img = New Image( "$SAMPLE_IMAGES/tile.jpg" );imgBox = win[framebox( 1 )];imgBox << AddImage( Image( img ), bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) ) );imgSeg = imgBox << FindSeg( PictSeg( 1 ) );imgSeg << Filter( "contrast", 3 );

```

### Crop

**구문:** obj &lt;&lt; Crop

**설명:** PictSeg를 지정된 크기에 맞게 잘라 이미지에서 지정된 경계를 벗어나는 부분을 제거합니다. 순서는 왼쪽, 위쪽, 오른쪽, 아래쪽 순으로 적용됩니다. 이 경우 화면비율이 유지되지 않아 이미지가 왜곡될 수 있습니다.

```jsl

imgBox = Graph Box( frameSize( 451, 451 ), SuppressAxes );win = New Window( "Image", imgBox );img = New Image( "$SAMPLE_IMAGES/tile.jpg" );imgBox = win[framebox( 1 )];imgBox << AddImage( Image( img ), bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) ) );imgSeg = imgBox << FindSeg( PictSeg( 1 ) );Wait( 1 );imgSeg << Crop( 10, 90, 90, 10 );

```

### Despeckle

**구문:** obj &lt;&lt; filter("despeckle")

**설명:** 잡음을 제거하기 위해 PictSeg의 이미지에 얼룩 제거 필터를 적용합니다.

```jsl

imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );win = New Window( "Image", imgBox );img = New Image( "$SAMPLE_IMAGES/tile.jpg" );imgBox = win[framebox( 1 )];imgBox << AddImage( Image( img ), bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) ) );imgSeg = imgBox << FindSeg( PictSeg( 1 ) );imgSeg << Filter( "despeckle" );

```

### Edge

**구문:** obj &lt;&lt; filter("edge")

**설명:** PictSeg의 이미지에 모서리 감지 필터를 적용합니다. 모서리는 검정색으로 그려지고 나머지는 모두 흰색으로 나타납니다.

```jsl

imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );win = New Window( "Image", imgBox );img = New Image( "$SAMPLE_IMAGES/tile.jpg" );imgBox = win[framebox( 1 )];imgBox << AddImage( Image( img ), bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) ) );imgSeg = imgBox << FindSeg( PictSeg( 1 ) );imgSeg << Filter( "edge" );

```

### Enhance

**구문:** obj &lt;&lt; filter("enhance")

**설명:** PictSeg의 이미지에 강조 필터를 적용하여 이미지가 선명하게 나타나도록 합니다.

```jsl

imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );win = New Window( "Image", imgBox );img = New Image( "$SAMPLE_IMAGES/tile.jpg" );imgBox = win[framebox( 1 )];imgBox << AddImage( Image( img ), bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) ) );imgSeg = imgBox << FindSeg( PictSeg( 1 ) );imgSeg << Filter( "enhance" );

```

### Fill Graph

**구문:** obj &lt;&lt; Fill Graph

**설명:** PictSeg가 그래프를 채우도록 경계를 축 범위 전체로 설정합니다. 이 경우 화면비율이 유지되지 않아 이미지가 왜곡될 수 있습니다.

```jsl

imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );win = New Window( "Image", imgBox );img = New Image( "$SAMPLE_IMAGES/tile.jpg" );imgBox = win[framebox( 1 )];imgBox << AddImage( Image( img ), bounds( Left( 0 ), Right( 50 ), top( 50 ), bottom( 0 ) ) );imgSeg = imgBox << FindSeg( PictSeg( 1 ) );Wait( 1 );imgSeg << fill graph;

```

### Flip both

**구문:** obj &lt;&lt; flip both

**설명:** PictSeg의 이미지를 상하좌우로 반전합니다.

```jsl

imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );win = New Window( "Image", imgBox );img = New Image( "$SAMPLE_IMAGES/tile.jpg" );imgBox = win[framebox( 1 )];imgBox << AddImage( Image( img ), bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) ) );imgSeg = imgBox << FindSeg( PictSeg( 1 ) );imgSeg << flip both;

```

### Flip horizontal

**구문:** obj &lt;&lt; flip horizontal

**설명:** PictSeg의 이미지를 좌우로 반전합니다.

```jsl

imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );win = New Window( "Image", imgBox );img = New Image( "$SAMPLE_IMAGES/tile.jpg" );imgBox = win[framebox( 1 )];imgBox << AddImage( Image( img ), bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) ) );imgSeg = imgBox << FindSeg( PictSeg( 1 ) );imgSeg << flip horizontal;

```

### Flip vertical

**구문:** obj &lt;&lt; flip vertical

**설명:** PictSeg의 이미지를 상하로 반전합니다.

```jsl

imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );win = New Window( "Image", imgBox );img = New Image( "$SAMPLE_IMAGES/tile.jpg" );imgBox = win[framebox( 1 )];imgBox << AddImage( Image( img ), bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) ) );imgSeg = imgBox << FindSeg( PictSeg( 1 ) );imgSeg << flip vertical;

```

### Gamma

**구문:** obj &lt;&lt; filter("gamma")

**설명:** PictSeg 이미지의 감마를 조정합니다. 유용한 범위는 0 ~ 10입니다. 0부터 1까지의 값은 감마를 줄이고 1보다 큰 값은 감마를 늘립니다.

```jsl

imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );win = New Window( "Image", imgBox );img = New Image( "$SAMPLE_IMAGES/tile.jpg" );imgBox = win[framebox( 1 )];imgBox << AddImage( Image( img ), bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) ) );imgSeg = imgBox << FindSeg( PictSeg( 1 ) );imgSeg << Filter( "gamma", 1.5 );

```

### Gaussian Blur

**구문:** obj &lt;&lt; filter("gaussian blur", radius, sigma)

**설명:** PictSeg의 이미지에 흐리게 효과를 적용합니다. 반지름의 유용한 범위는 0 ~ 5입니다.

```jsl

imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );win = New Window( "Image", imgBox );img = New Image( "$SAMPLE_IMAGES/tile.jpg" );imgBox = win[framebox( 1 )];imgBox << AddImage( Image( img ), bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) ) );imgSeg = imgBox << FindSeg( PictSeg( 1 ) );imgSeg << Filter( "gaussian blur", 0.0, 1.0 );

```

### Get Bounds

**구문:** {left, right, top, bottom} = obj &lt;&lt; Get Bounds

**설명:** PictSeg 경계를 왼쪽, 오른쪽, 위쪽, 아래쪽의 순서로 축 좌표로 반환합니다.

```jsl

imgBox = Graph Box( frameSize( 150, 150 ) );win = New Window( "Image", imgBox );img = New Image( "$SAMPLE_IMAGES/tile.jpg" );imgBox = win[framebox( 1 )];imgBox << AddImage( Image( img ), bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) ) );imgSeg = imgBox << FindSeg( PictSeg( 1 ) );{l, r, t, b} = imgSeg << getBounds;

```

### Get Size

**구문:** {width, height} = obj &lt;&lt; Get Size

**설명:** PictSeg 크기를 픽셀 좌표에 너비 및 높이로 반환합니다.

```jsl

imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );win = New Window( "Image", imgBox );img = New Image( "$SAMPLE_IMAGES/tile.jpg" );imgBox = win[framebox( 1 )];imgBox << AddImage( Image( img ), bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) ) );imgSeg = imgBox << FindSeg( PictSeg( 1 ) );{w, h} = imgSeg << getSize;

```

### Lock

**구문:** obj &lt;&lt; Lock( state=0|1 )

**설명:** PictSeg의 이미지를 현재 위치에 잠가서 대화식으로 이동, 크기 조정 또는 회전되지 않도록 합니다.

```jsl

imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );win = New Window( "Image", imgBox );img = New Image( "$SAMPLE_IMAGES/tile.jpg" );imgBox = win[framebox( 1 )];imgBox << AddImage( Image( img ), bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) ) );imgSeg = imgBox << FindSeg( PictSeg( 1 ) );imgSeg << lock( 1 );

```

### Median

**구문:** obj &lt;&lt; filter("median")

**설명:** PictSeg의 이미지에 중앙값 필터를 적용합니다. 각 픽셀 값을 주변 픽셀의 중앙값 평균으로 바꿉니다.

```jsl

imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );win = New Window( "Image", imgBox );img = New Image( "$SAMPLE_IMAGES/tile.jpg" );imgBox = win[framebox( 1 )];imgBox << AddImage( Image( img ), bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) ) );imgSeg = imgBox << FindSeg( PictSeg( 1 ) );imgSeg << Filter( "median" );

```

### Move

**구문:** obj &lt;&lt; Move( xcenter, ycenter )

**설명:** 이미지 중심을 지정된 x,y 위치로 이동합니다. 여기서 xcenter 및 ycenter는 축 좌표로 표현됩니다.

```jsl

imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );win = New Window( "Image", imgBox );imgBox = win[framebox( 1 )];imgBox << AddImage( Open( "$SAMPLE_IMAGES/tile.jpg" ) );imgSeg = imgBox << FindSeg( PictSeg( 1 ) );imgSeg << Move( 75, 75 );

```

### Negate

**구문:** obj &lt;&lt; filter("negate")

**설명:** PictSeg의 이미지에 색상 반전 필터를 적용합니다. 빨간색, 녹색, 파란색은 청록색, 노란색, 자홍색이 되고 흰색은 검은색이 됩니다.

```jsl

imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );win = New Window( "Image", imgBox );img = New Image( "$SAMPLE_IMAGES/tile.jpg" );imgBox = win[framebox( 1 )];imgBox << AddImage( Image( img ), bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) ) );imgSeg = imgBox << FindSeg( PictSeg( 1 ) );imgSeg << Filter( "negate" );

```

### Normalize

**구문:** obj &lt;&lt; filter("normalize")

**설명:** PictSeg의 이미지에 정규화 필터를 적용합니다. 이미지의 픽셀 값 범위를 가져와 색상 범위 전체로 늘려 더 광범위한 색상 대비를 생성합니다.

```jsl

imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );win = New Window( "Image", imgBox );img = New Image( "$SAMPLE_IMAGES/tile.jpg" );imgBox = win[framebox( 1 )];imgBox << AddImage( Image( img ), bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) ) );imgSeg = imgBox << FindSeg( PictSeg( 1 ) );imgSeg << Filter( "normalize" );

```

### Open

**구문:** obj &lt;&lt; Open( filename )

**설명:** 이미지 파일을 열고 이미지를 PictSeg에 추가합니다.

```jsl

imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );win = New Window( "Image", imgBox );imgBox = win[framebox( 1 )];imgBox << AddImage(	Open( "$SAMPLE_IMAGES/tile.jpg" ),	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) ));

```

### Reduce Noise

**구문:** obj &lt;&lt; filter("reduce noise", radius)

**설명:** PictSeg의 이미지에 잡음 감소 필터를 적용합니다. 반지름을 기준으로 해당 이웃 값을 사용하여 픽셀의 평균이 산출됩니다. 유용한 범위는 0 ~ 5입니다.

```jsl

imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );win = New Window( "Image", imgBox );img = New Image( "$SAMPLE_IMAGES/tile.jpg" );imgBox = win[framebox( 1 )];imgBox << AddImage( Image( img ), bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) ) );imgSeg = imgBox << FindSeg( PictSeg( 1 ) );imgSeg << Filter( "reduce noise", 2.0 );

```

### Remove

**구문:** obj &lt;&lt; Remove

**설명:** PictSeg를 표시 상자에서 제거합니다.

```jsl

imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );win = New Window( "Image", imgBox );img = New Image( "$SAMPLE_IMAGES/tile.jpg" );imgBox = win[framebox( 1 )];imgBox << AddImage( Image( img ), bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) ) );imgSeg = imgBox << FindSeg( PictSeg( 1 ) );Wait( 1 );imgSeg << remove;

```

### Rotate

**구문:** obj &lt;&lt; Rotate( degrees )

**설명:** PictSeg를 지정된 각도만큼 시계 방향으로 회전합니다.

```jsl

imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );win = New Window( "Image", imgBox );img = New Image( "$SAMPLE_IMAGES/tile.jpg" );imgBox = win[framebox( 1 )];imgBox << AddImage( Image( img ), bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) ) );imgSeg = imgBox << FindSeg( PictSeg( 1 ) );imgSeg << rotate( 45 );

```

### SetSize

**구문:** obj &lt;&lt; SetSize( {width, height} )

**설명:** PictSeg 크기를 픽셀 좌표에 너비 및 높이로 설정합니다.

```jsl

imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );win = New Window( "Image", imgBox );img = New Image( "$SAMPLE_IMAGES/tile.jpg" );imgBox = win[framebox( 1 )];imgBox << AddImage( Image( img ), bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) ) );imgSeg = imgBox << FindSeg( PictSeg( 1 ) );imgSeg << setSize( {300, 500} );{w, h} = imgSeg << getSize;

```

### Sharpen

**구문:** obj &lt;&lt; filter("sharpen")

**설명:** PictSeg의 이미지에 선명하게 필터를 적용하여 이미지가 더 선명하게 나타나게 합니다.

```jsl

imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );win = New Window( "Image", imgBox );img = New Image( "$SAMPLE_IMAGES/tile.jpg" );imgBox = win[framebox( 1 )];imgBox << AddImage( Image( img ), bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) ) );imgSeg = imgBox << FindSeg( PictSeg( 1 ) );imgSeg << Filter( "sharpen" );

```

### Specify Size

**구문:** obj &lt;&lt; Specify Size

**설명:** PictSeg의 경계를 설정합니다. 왼쪽, 위쪽, 오른쪽, 아래쪽 순서로 적용되는 점을 제외하면 경계 설정과 비슷합니다. 이 경우 화면비율이 유지되지 않아 이미지가 왜곡될 수 있습니다.

```jsl

imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );win = New Window( "Image", imgBox );img = New Image( "$SAMPLE_IMAGES/tile.jpg" );imgBox = win[framebox( 1 )];imgBox << AddImage( Image( img ) );imgSeg = imgBox << FindSeg( PictSeg( 1 ) );Wait( 1 );imgSeg << Specify Size( 0, 100, 100, 0 );

```

### Transparency

**구문:** obj &lt;&lt; Transparency( transparency )

**설명:** PictSeg의 투명도를 설정합니다. 0.0은 완전 투명이고 1.0은 완전 불투명입니다.

```jsl

imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );win = New Window( "Image", imgBox );img = New Image( "$SAMPLE_IMAGES/tile.jpg" );imgBox = win[framebox( 1 )];imgBox << AddImage( Image( img ), bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) ) );imgSeg = imgBox << FindSeg( PictSeg( 1 ) );imgSeg << Transparency( 0.5 );

```

