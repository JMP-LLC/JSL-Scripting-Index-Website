# PictSeg



## 项消息

### Bounds

**语法:** obj << Bounds( left(value), right(value), top(value), bottom(value) )

**说明:** 设置轴坐标中 PictSeg 的边界。

```jsl

Names Default To Here( 1 );
imgBox = Graph Box( frameSize( 150, 150 ) );
win = New Window( "Image", imgBox );
img = New Image( "$SAMPLE_IMAGES/tile.jpg" );
imgBox = win[framebox( 1 )];
imgBox << AddImage( Image( img ) );
imgSeg = imgBox << FindSeg( PictSeg( 1 ) );
imgSeg << bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) );
{l, r, t, b} = imgSeg << getBounds;

```

### Contrast

**语法:** obj << filter("contrast")

**说明:** 在 PictSeg 中对图像应用对比度。正值使图像更明亮，负值使图像更暗。有用的值为 -10 至 10。

```jsl

Names Default To Here( 1 );
imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );
win = New Window( "Image", imgBox );
img = New Image( "$SAMPLE_IMAGES/tile.jpg" );
imgBox = win[framebox( 1 )];
imgBox << AddImage(
	Image( img ),
	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) )
);
imgSeg = imgBox << FindSeg( PictSeg( 1 ) );
imgSeg << Filter( "contrast", 3 );

```

### Crop

**语法:** obj << Crop

**说明:** 将 PictSeg 裁剪为指定大小，从而去除指定边界之外的图像任意部分。顺序隐式指定为左、上、右、下。这可能会因为未能保持纵横比而导致图像失真。

```jsl

Names Default To Here( 1 );
imgBox = Graph Box( frameSize( 451, 451 ), SuppressAxes );
win = New Window( "Image", imgBox );
img = New Image( "$SAMPLE_IMAGES/tile.jpg" );
imgBox = win[framebox( 1 )];
imgBox << AddImage(
	Image( img ),
	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) )
);
imgSeg = imgBox << FindSeg( PictSeg( 1 ) );
Wait( 1 );
imgSeg << Crop( 10, 90, 90, 10 );

```

### Despeckle

**语法:** obj << filter("despeckle")

**说明:** 在 PictSeg 中对图像应用去斑滤镜以去除噪点。

```jsl

Names Default To Here( 1 );
imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );
win = New Window( "Image", imgBox );
img = New Image( "$SAMPLE_IMAGES/tile.jpg" );
imgBox = win[framebox( 1 )];
imgBox << AddImage(
	Image( img ),
	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) )
);
imgSeg = imgBox << FindSeg( PictSeg( 1 ) );
imgSeg << Filter( "despeckle" );

```

### Edge

**语法:** obj << filter("edge")

**说明:** 在 PictSeg 中对图像应用边缘检测滤镜。边缘绘制为黑色，其他均变为白色。

```jsl

Names Default To Here( 1 );
imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );
win = New Window( "Image", imgBox );
img = New Image( "$SAMPLE_IMAGES/tile.jpg" );
imgBox = win[framebox( 1 )];
imgBox << AddImage(
	Image( img ),
	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) )
);
imgSeg = imgBox << FindSeg( PictSeg( 1 ) );
imgSeg << Filter( "edge" );

```

### Enhance

**语法:** obj << filter("enhance")

**说明:** 在 PictSeg 中对图像应用增强滤镜，从而使图像看起来更清晰。

```jsl

Names Default To Here( 1 );
imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );
win = New Window( "Image", imgBox );
img = New Image( "$SAMPLE_IMAGES/tile.jpg" );
imgBox = win[framebox( 1 )];
imgBox << AddImage(
	Image( img ),
	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) )
);
imgSeg = imgBox << FindSeg( PictSeg( 1 ) );
imgSeg << Filter( "enhance" );

```

### Fill Graph

**语法:** obj << Fill Graph

**说明:** 将界限设置到轴的范围，会导致 PictSeg 填充图形。这可能导致因为未能保持纵横比时图像失真。

```jsl

Names Default To Here( 1 );
imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );
win = New Window( "Image", imgBox );
img = New Image( "$SAMPLE_IMAGES/tile.jpg" );
imgBox = win[framebox( 1 )];
imgBox << AddImage( Image( img ), bounds( Left( 0 ), Right( 50 ), top( 50 ), bottom( 0 ) ) );
imgSeg = imgBox << FindSeg( PictSeg( 1 ) );
Wait( 1 );
imgSeg << fill graph;

```

### Flip both

**语法:** obj << flip both

**说明:** 在 PictSeg 中同时垂直和水平翻转图像。

```jsl

Names Default To Here( 1 );
imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );
win = New Window( "Image", imgBox );
img = New Image( "$SAMPLE_IMAGES/tile.jpg" );
imgBox = win[framebox( 1 )];
imgBox << AddImage(
	Image( img ),
	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) )
);
imgSeg = imgBox << FindSeg( PictSeg( 1 ) );
imgSeg << flip both;

```

### Flip horizontal

**语法:** obj << flip horizontal

**说明:** 在 PictSeg 中水平翻转图像。

```jsl

Names Default To Here( 1 );
imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );
win = New Window( "Image", imgBox );
img = New Image( "$SAMPLE_IMAGES/tile.jpg" );
imgBox = win[framebox( 1 )];
imgBox << AddImage(
	Image( img ),
	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) )
);
imgSeg = imgBox << FindSeg( PictSeg( 1 ) );
imgSeg << flip horizontal;

```

### Flip vertical

**语法:** obj << flip vertical

**说明:** 在 PictSeg 中垂直翻转图像。

```jsl

Names Default To Here( 1 );
imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );
win = New Window( "Image", imgBox );
img = New Image( "$SAMPLE_IMAGES/tile.jpg" );
imgBox = win[framebox( 1 )];
imgBox << AddImage(
	Image( img ),
	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) )
);
imgSeg = imgBox << FindSeg( PictSeg( 1 ) );
imgSeg << flip vertical;

```

### Gamma

**语法:** obj << filter("gamma")

**说明:** 在 PictSeg 中调整图像的 gamma。有用的范围为 0 至 10。0 至 1 范围内的值会减小 gamma。大于 1 的值会增大 gamma。

```jsl

Names Default To Here( 1 );
imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );
win = New Window( "Image", imgBox );
img = New Image( "$SAMPLE_IMAGES/tile.jpg" );
imgBox = win[framebox( 1 )];
imgBox << AddImage(
	Image( img ),
	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) )
);
imgSeg = imgBox << FindSeg( PictSeg( 1 ) );
imgSeg << Filter( "gamma", 1.5 );

```

### Gaussian Blur

**语法:** obj << filter("gaussian blur", radius, sigma)

**说明:** 在 PictSeg 中对图像应用模糊。有用的半径范围为 0 至 5。

```jsl

Names Default To Here( 1 );
imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );
win = New Window( "Image", imgBox );
img = New Image( "$SAMPLE_IMAGES/tile.jpg" );
imgBox = win[framebox( 1 )];
imgBox << AddImage(
	Image( img ),
	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) )
);
imgSeg = imgBox << FindSeg( PictSeg( 1 ) );
imgSeg << Filter( "gaussian blur", 0.0, 1.0 );

```

### Get Bounds

**语法:** {left, right, top, bottom} = obj << Get Bounds

**说明:** 按左、右、上、下的顺序返回轴坐标中 PictSeg 的边界。

```jsl

Names Default To Here( 1 );
imgBox = Graph Box( frameSize( 150, 150 ) );
win = New Window( "Image", imgBox );
img = New Image( "$SAMPLE_IMAGES/tile.jpg" );
imgBox = win[framebox( 1 )];
imgBox << AddImage(
	Image( img ),
	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) )
);
imgSeg = imgBox << FindSeg( PictSeg( 1 ) );
{l, r, t, b} = imgSeg << getBounds;

```

### Get Size

**语法:** {width, height} = obj << Get Size

**说明:** 返回以宽度和高度表示的像素坐标中 PictSeg 的大小。

```jsl

Names Default To Here( 1 );
imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );
win = New Window( "Image", imgBox );
img = New Image( "$SAMPLE_IMAGES/tile.jpg" );
imgBox = win[framebox( 1 )];
imgBox << AddImage(
	Image( img ),
	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) )
);
imgSeg = imgBox << FindSeg( PictSeg( 1 ) );
{w, h} = imgSeg << getSize;

```

### Lock

**语法:** obj << Lock( state=0|1 )

**说明:** 在 PictSeg 中将图像锁定在原位，从而使它不会通过交互方式移动、调整大小或旋转。

```jsl

Names Default To Here( 1 );
imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );
win = New Window( "Image", imgBox );
img = New Image( "$SAMPLE_IMAGES/tile.jpg" );
imgBox = win[framebox( 1 )];
imgBox << AddImage(
	Image( img ),
	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) )
);
imgSeg = imgBox << FindSeg( PictSeg( 1 ) );
imgSeg << lock( 1 );

```

### Median

**语法:** obj << filter("median")

**说明:** 在 PictSeg 中对图像应用中间值滤镜。这将每个像素值替换为周围像素的均值中位数。

```jsl

Names Default To Here( 1 );
imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );
win = New Window( "Image", imgBox );
img = New Image( "$SAMPLE_IMAGES/tile.jpg" );
imgBox = win[framebox( 1 )];
imgBox << AddImage(
	Image( img ),
	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) )
);
imgSeg = imgBox << FindSeg( PictSeg( 1 ) );
imgSeg << Filter( "median" );

```

### Move

**语法:** obj << Move( xcenter, ycenter )

**说明:** 将图像的中心移至指定的 x,y 位置，其中 xcenter 和 ycenter 以轴坐标表示。

```jsl

Names Default To Here( 1 );
imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );
win = New Window( "Image", imgBox );
imgBox = win[framebox( 1 )];
imgBox << AddImage( Open( "$SAMPLE_IMAGES/tile.jpg" ) );
imgSeg = imgBox << FindSeg( PictSeg( 1 ) );
imgSeg << Move( 75, 75 );

```

### Negate

**语法:** obj << filter("negate")

**说明:** 在 PictSeg 中对图像应用反转颜色的滤镜。红色、绿色、蓝色变为蓝绿色、黄色和洋红色，白色变为黑色等。

```jsl

Names Default To Here( 1 );
imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );
win = New Window( "Image", imgBox );
img = New Image( "$SAMPLE_IMAGES/tile.jpg" );
imgBox = win[framebox( 1 )];
imgBox << AddImage(
	Image( img ),
	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) )
);
imgSeg = imgBox << FindSeg( PictSeg( 1 ) );
imgSeg << Filter( "negate" );

```

### Normalize

**语法:** obj << filter("normalize")

**说明:** 在 PictSeg 中对图像应用标准化滤镜。这将获取图像中像素值的范围并将它们延伸至整个颜色范围，从而创建具有更宽对比度的颜色。

```jsl

Names Default To Here( 1 );
imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );
win = New Window( "Image", imgBox );
img = New Image( "$SAMPLE_IMAGES/tile.jpg" );
imgBox = win[framebox( 1 )];
imgBox << AddImage(
	Image( img ),
	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) )
);
imgSeg = imgBox << FindSeg( PictSeg( 1 ) );
imgSeg << Filter( "normalize" );

```

### Open

**语法:** obj << Open( filename )

**说明:** 打开图像文件并将图像添加至 PictSeg。

```jsl

Names Default To Here( 1 );
imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );
win = New Window( "Image", imgBox );
imgBox = win[framebox( 1 )];
imgBox << AddImage(
	Open( "$SAMPLE_IMAGES/tile.jpg" ),
	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) )
);

```

### Reduce Noise

**语法:** obj << filter("reduce noise", radius)

**说明:** 在 PictSeg 中对图像应用降噪滤镜。这将根据半径范围使用邻近像素对某个像素取平均值。有用的范围为 0 至 5。

```jsl

Names Default To Here( 1 );
imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );
win = New Window( "Image", imgBox );
img = New Image( "$SAMPLE_IMAGES/tile.jpg" );
imgBox = win[framebox( 1 )];
imgBox << AddImage(
	Image( img ),
	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) )
);
imgSeg = imgBox << FindSeg( PictSeg( 1 ) );
imgSeg << Filter( "reduce noise", 2.0 );

```

### Remove

**语法:** obj << Remove

**说明:** 从显示框删除 PictSeg。

```jsl

Names Default To Here( 1 );
imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );
win = New Window( "Image", imgBox );
img = New Image( "$SAMPLE_IMAGES/tile.jpg" );
imgBox = win[framebox( 1 )];
imgBox << AddImage(
	Image( img ),
	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) )
);
imgSeg = imgBox << FindSeg( PictSeg( 1 ) );
Wait( 1 );
imgSeg << remove;

```

### Rotate

**语法:** obj << Rotate( degrees )

**说明:** 顺时针以指定的角度旋转 PictSeg。

```jsl

Names Default To Here( 1 );
imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );
win = New Window( "Image", imgBox );
img = New Image( "$SAMPLE_IMAGES/tile.jpg" );
imgBox = win[framebox( 1 )];
imgBox << AddImage(
	Image( img ),
	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) )
);
imgSeg = imgBox << FindSeg( PictSeg( 1 ) );
imgSeg << rotate( 45 );

```

### SetSize

**语法:** obj << SetSize( {width, height} )

**说明:** 设置以宽度和高度表示的像素坐标中 PictSeg 的大小。

```jsl

Names Default To Here( 1 );
imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );
win = New Window( "Image", imgBox );
img = New Image( "$SAMPLE_IMAGES/tile.jpg" );
imgBox = win[framebox( 1 )];
imgBox << AddImage(
	Image( img ),
	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) )
);
imgSeg = imgBox << FindSeg( PictSeg( 1 ) );
imgSeg << setSize( {300, 500} );
{w, h} = imgSeg << getSize;

```

### Sharpen

**语法:** obj << filter("sharpen")

**说明:** 在 PictSeg 中对图像应用锐化滤镜，使图像看起来更清晰。

```jsl

Names Default To Here( 1 );
imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );
win = New Window( "Image", imgBox );
img = New Image( "$SAMPLE_IMAGES/tile.jpg" );
imgBox = win[framebox( 1 )];
imgBox << AddImage(
	Image( img ),
	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) )
);
imgSeg = imgBox << FindSeg( PictSeg( 1 ) );
imgSeg << Filter( "sharpen" );

```

### Specify Size

**语法:** obj << Specify Size

**说明:** 设置 PictSeg 的界限。类似于设置界限，但不包括顺序隐式指定为左、上、右、下。这可能导致因为未能保持纵横比时图像失真。

```jsl

Names Default To Here( 1 );
imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );
win = New Window( "Image", imgBox );
img = New Image( "$SAMPLE_IMAGES/tile.jpg" );
imgBox = win[framebox( 1 )];
imgBox << AddImage( Image( img ) );
imgSeg = imgBox << FindSeg( PictSeg( 1 ) );
Wait( 1 );
imgSeg << Specify Size( 0, 100, 100, 0 );

```

### Transparency

**语法:** obj << Transparency( transparency )

**说明:** 设置 PictSeg 的透明度，其中 0.0 为完全透明，1.0 为完全不透明。

```jsl

Names Default To Here( 1 );
imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );
win = New Window( "Image", imgBox );
img = New Image( "$SAMPLE_IMAGES/tile.jpg" );
imgBox = win[framebox( 1 )];
imgBox << AddImage(
	Image( img ),
	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) )
);
imgSeg = imgBox << FindSeg( PictSeg( 1 ) );
imgSeg << Transparency( 0.5 );

```

