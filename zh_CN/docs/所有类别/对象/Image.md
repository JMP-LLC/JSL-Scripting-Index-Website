# Image



## 关联的构造器

### New Image

**语法:** img = Open( filepath, jpg|png|gif|bmp|tif ) New Image(&lt;width, height&gt;, &lt;existing image&gt; )

**说明:** 图片对象，可用于将图片添加到帧或显示框。

```jsl

img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );obj = New Window( "tile(40,40)", img );

```

### Open

**语法:** Open( filePath, &lt;data table options | Excel import options | text import options | SAS import options | HTML import options | esriShapeFile import options | PDF import options | other file options &gt; )

**说明:** 返回对数据表或其他 JMP 文件或基于文件创建的对象的引用。若未指定路径，则“打开”对话框显示。若指定了文件夹路径，则打开系统文件浏览器并且不返回对象。请参阅语法参考获取可用选项的完整说明。

```jsl

/* Data tables, other JMP files, external files:   Open( filePath,     <Invisible | Private>,     <Select Columns( "col", ... )>,     <Ignore Columns( "col", ... )>,     <Add to Recent Files(bool)>,     <Quarantine Action("Allow Scripts"|"Block Scripts"|"Do Not Open"|"Show Dialog")>     <Force Refresh>,     <Enable Filter Views(bool)>,     <"file type">   )*///Basic data table opendt1 = Open( "$SAMPLE_DATA/Big Class.jmp" );//Data table open with some optionsdt2 = Open( "$SAMPLE_DATA/Fitness.jmp", Select Columns( "Name", "Sex", "Age", "Weight" ) );

```

## 项消息

### Add Frame

**语法:** obj &lt;&lt; Add Frame

**说明:** 向动画图像添加新帧。在使用“设置像素”之前，该帧不包含任何内容。可以指定可选的持续时间参数，该参数指示以毫秒表示的帧持续时间。若省略持续时间参数，当前帧的持续时间将被用作新添帧的持续时间。若没有其他帧，将使用默认持续时间 100 毫秒。

**JMP添加的版本:** 16

```jsl

dim = 100;mat0 = J( dim, dim, 0 );mat1 = J( dim, dim, 1 );multiImage = New Image( "rgb", {mat1, mat0, mat0} );multiImage << Add Frame( 2000 );multiImage << Set Pixels( "rgb", {mat0, mat1, mat0} );multiImage << Add Frame( 1000 );multiImage << Set Pixels( "rgb", {mat0, mat0, mat1} );win = New Window( "Multi-Frame Image", multiImage );durs = multiImage << Get Frame Durations();For( i = 0, i < 3, i++,	multiImage << Set Current Frame( i );	win << reshow();	dur = durs[i + 1] / 1000.0;	Wait( dur ););win << Close Window();

```

### Crop

**语法:** obj &lt;&lt; Crop( Left( number ), Right( number ), Top( number ), Bottom( number ) )

**说明:** 将图像修改为现有图像中指定像素坐标处的子图像。

```jsl

img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );obj = New Window( "tile(40,40)", img );Wait( 1 );img << Crop( Left( 50 ), Right( 300 ), Top( 20 ), Bottom( 200 ) );obj2 = New Window( "Cropped", img );

```

### Filter

**语法:** obj &lt;&lt; Filter( despeckle|edge|enhance|median|negate|normalize|sharpen|contrast|gamma|reduce noise|gaussian blur|canny, &lt;number&gt; )

**说明:** 根据指定的算法过滤图像。过滤对于清除图像中的噪点很有用。对比度、Gamma 和降噪需要一个额外的（数值）参数。高斯模糊需要两个参数: radius 和 sigma。

**示例 1**

```jsl

img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );New Window( "tile(40,40)", New Image( img ) );Wait( 1 );img << Filter( "negate" );New Window( "Neg filter", img ); //contrast filter example img2 = Open( "$SAMPLE_IMAGES/black rhino footprint.jpg", jpg );obj = New Window( "Black Rhino", New Image( img2 ) );Wait( 1 );img3 = New Image( img2 );/*save a copy for later*/ img2 << Filter( "Contrast", 4 );New Window( "Contrast filter", New Image( img2 ) );

```

**示例 2**

```jsl

/* http://en.wikipedia.org/wiki/Canny_edge_detector */ radius = 1;sigma = 3;smallThreshold = .01;largeThreshold = .3;file = Pick File(	"pick picture",	"$SAMPLE_IMAGES",	{"pictures|png;jpg", "All Files|*"},	1,	0,	"black rhino footprint.jpg");original = New Image( file );edges = New Image( original );New Window( "canny",	H List Box(		Slider Box(			0,			10,			radius,			refilter();			hb << reshow;			t1 << settext( Char( Floor( radius ) ) );,			<<setwidth( 100 )		),		Text Box( "radius of smoothing filter=" ),		t1 = Text Box( Char( Floor( radius ) ) )	),	H List Box(		Slider Box(			1,			5,			sigma,			refilter();			hb << reshow;			t2 << settext( Char( Floor( sigma ) ) );,			<<setwidth( 100 )		),		Text Box( "smoothing repeat=" ),		t2 = Text Box( Char( Floor( sigma ) ) )	),	H List Box(		sb1 = Slider Box(			.0001,			1,			largeThreshold,			If( smallThreshold >= largeThreshold,				sb0 << set( largeThreshold / 2 )			);			refilter();			hb << reshow;			t3 << settext( Char( largeThreshold ) );			t4 << settext( Char( smallThreshold ) );,			<<setwidth( 300 )		),		Text Box( "large (start) threshold=" ),		t3 = Text Box( Char( largeThreshold ) )	),	H List Box(		sb0 = Slider Box(			.0001,			1,			smallThreshold,			If( smallThreshold >= largeThreshold,				sb1 << set( smallThreshold + .1 )			);			refilter();			hb << reshow;			t4 << settext( Char( smallThreshold ) );			t3 << settext( Char( largeThreshold ) );,			<<setwidth( 300 )		),		Text Box( "small (stop) threshold=" ),		t4 = Text Box( Char( smallThreshold ) )	),	Spacer Box( size( 10, 20 ) ),	hb = H List Box( original, edges ));refilter = Function( {},	edges << setpixels( original << getpixels );    //edges << filter( "gaussian blur", radius, sigma ); //you could use the gaussian blur filter by setting radius(0), below	edges << filter(		"canny"/* here it is! */,		largeThreshold( largeThreshold )/*tracing begins when a large-value edge is found*/,		smallThreshold( smallThreshold )/*tracing stops when the edge value gets too small*/,		radius( radius )/*a blur-filter, use 0 for no blurring*/,		Repeat( sigma )/* number of repeats of a box-blur; 3 approximates a gaussian-blur filter */	);	edges << filter( "negate" );/*black on white*/);refilter();

```

### Flip Both

**语法:** obj &lt;&lt; Flip Both

**说明:** 同时将图像水平和垂直翻转。

```jsl

img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );obj = New Window( "tile(40,40)", img );Wait( 1 );img << Flip Both;obj2 = New Window( "Diagonal Flip", img );

```

### Flip Horizontal

**语法:** obj &lt;&lt; Flip Horizontal

**说明:** 将图像水平翻转。

```jsl

img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );obj = New Window( "tile(40,40)", img );Wait( 1 );img << Flip Horizontal;obj2 = New Window( "Horizontal Flip", img );

```

### Flip Vertical

**语法:** obj &lt;&lt; Flip Vertical

**说明:** 将图像上面向下翻转。

```jsl

img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );obj = New Window( "tile(40,40)", img );Wait( 1 );img << Flip Vertical;obj2 = New Window( "Vertical Flip", img );

```

### Get Current Frame

**语法:** obj &lt;&lt; Get Current Frame

**说明:** 返回当前帧号。对于大多数图像，该值为 0。对于动画 GIF 文件，该值可以介于 0 和帧数减 1 之间。操作（例如，getPixels 和 setPixels）将对当前帧进行。

```jsl

img = New Image( "$SAMPLE_IMAGES/progress.gif" );num = img << Get Current Frame();

```

### Get EXIF

**语法:** obj &lt;&lt; Get EXIF

**说明:** 获取与图像一起在内部储存的 EXIF 数据。将返回键/值对的数组。

**JMP添加的版本:** 14

```jsl

img = New Image( "$SAMPLE_IMAGES/tile.jpg" );exifData = img << getEXIF();key = exifData << first;While( !Is Empty( key ),	v = exifData << getValue( key );	Show( key, v );	key = exifData << next( key ););

```

### Get Frame Durations

**语法:** obj &lt;&lt; Get Frame Durations

**说明:** 返回每帧之间的暂停时间矩阵。指定的时间以毫秒为单位。

```jsl

img = New Image( "$SAMPLE_IMAGES/progress.gif" );durs = img << Get Frame Durations();

```

### Get N Frames

**语法:** obj &lt;&lt; Get N Frames

**说明:** 返回图像的帧数。对于大多数图像，该结果为 1。对于动画 GIF 文件，该结果可能大于 1。

```jsl

img = New Image( "$SAMPLE_IMAGES/progress.gif" );num = img << Get N Frames();

```

### Get N Loops

**语法:** obj &lt;&lt; Get N Loops

**说明:** 返回动画图像应遍历它的序列的次数。值为零表示它应无限次遍历。

```jsl

img = New Image( "$SAMPLE_IMAGES/progress.gif" );loops = img << Get N Loops();

```

### Get Path

**语法:** obj &lt;&lt; Get Path

### Get Pixels

**语法:** mat = img &lt;&lt; Get Pixels(); {r, g, b} = img &lt;&lt; Get Pixels("rgb"); {r, g, b, a} = img &lt;&lt; Get Pixels("rgba")

**说明:** 若未指定颜色指示符，则返回表示像素值的 JSL 颜色的矩阵。颜色指示符“rgb”将返回三个矩阵（分别为红色、绿色和蓝色）的列表。指定“rgba”将返回 alpha（透明度）通道以及红色、绿色和蓝色。

**示例 1**

```jsl

img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );win = New Window( "tile(40,40)", img );m = img << Get Pixels;Show( m );

```

**示例 2**

```jsl

img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );win = New Window( "tile(40,40)", img );{r, g, b} = img << Get Pixels( "rgb" );

```

**示例 3**

```jsl

img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );win = New Window( "tile(40,40)", img );{r, g, b, a} = img << Get Pixels( "rgba" );

```

### GetSize

**语法:** {w,h} = pic &lt;&lt; Get Size {w,h} = pic &lt;&lt; Size

**说明:** 返回包含图像宽度和高度的列表。

```jsl

img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );obj = New Window( "tile(40,40)", img );s = {w, h} = img << Get Size;Show( s );

```

### Remove Frame

**语法:** obj &lt;&lt; Remove Frame

**说明:** 从动画图像中删除一帧。传递要删除的帧的索引。

```jsl

img = New Image( "$SAMPLE_IMAGES/progress.gif" );img << Remove Frame( 0 );

```

### Rotate

**语法:** obj &lt;&lt; Rotate( angle )

**说明:** 按指定的旋转角度旋转图像。

```jsl

img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );obj = New Window( "tile(40,40)", img );Wait( 1 );img << Rotate( 45 );obj2 = New Window( "Rotated", img );

```

### Save Image

**语法:** obj &lt;&lt; Save Image( filePath, image type )

**说明:** 采用指定的位置和文件名保存图像。第二个参数表示保存的图像类型，不考虑文件名中使用的扩展名。有效的图像类型包括 PNG、JPG、GIF、TIFF、BMP 和 PDF。若未指定图像类型，或指定的图像类型无法理解，则图像将另存为 PNG 文件。

```jsl

img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );obj = New Window( "tile(40,40)", img );img << Save Image( "$TEMP/Mediterranean.jpg", "jpg" );

```

### Scale

**语法:** obj &lt;&lt; Scale( scale | xscale, yscale )

**说明:** 将尺度因子应用于图像的宽度和高度或分别统一宽度 (xscale) 和高度 (yscale) 的尺度。

**示例 1**

```jsl

img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );obj = New Window( "tile(40,40)", img );img << scale( 0.5 );obj2 = New Window( "Tile scaled by 0.5", img );

```

**示例 2**

```jsl

img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );obj = New Window( "tile(40,40)", img );img << scale( 2, 0.5 );obj2 = New Window( "Tile scaled by 2 vertically and by 0.5 horizontally", img );

```

### Set Blob

**语法:** obj &lt;&lt; Set Blob

**说明:** 设置 blob 中的图像。

### Set Current Frame

**语法:** obj &lt;&lt; Set Current Frame( frame )

**说明:** 设置当前帧号。对于大多数图像，该结果为 0。对于动画 GIF 文件，该结果可以介于 0 和帧数减 1 之间。操作（例如，getPixels 和 setPixels）将对当前帧进行。

```jsl

img = New Image( "$SAMPLE_IMAGES/progress.gif" );num = img << Get N Frames();win = New Window( "Progress", img );For( i = 0, i < num, i++,	img << Set Current Frame( i );	win << reshow();	Wait( 1 ););win << Close Window();

```

### Set Frame Duration

**语法:** obj &lt;&lt; Set Frame Duration( duration )

**说明:** 设置动画图像中当前帧的持续时间。该时间以毫秒来指定。

```jsl

img = New Image( "$SAMPLE_IMAGES/progress.gif" );img << Set Frame Duration( 1000 );durs = img << Get Frame Durations();

```

### Set N Loops

**语法:** obj &lt;&lt; Set N Loops( loops )

**说明:** 设置动画图像应遍历它的序列的次数。值为 0 表示该图像应无限次遍历。

```jsl

img = New Image( "$SAMPLE_IMAGES/progress.gif" );img << Set N Loops( 3 );loops = img << Get N Loops();

```

### Set Pixels

**语法:** img &lt;&lt; Set Pixels(jslmat); img &lt;&lt; Set Pixels ("rgb", {r, g, b})

**说明:** 设置图像的像素矩阵。若指定了一个不带颜色指示符的矩阵，则该矩阵视为 JSL 颜色的矩阵。可以指定颜色指示符（例如，rgb）以指出下列矩阵分别为红色、绿色和蓝色。在这种情况下，所有指定矩阵的大小应相同。

**示例 1**

```jsl

img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );win = New Window( "tile(40,40)", img );m = img << Get Pixels;Wait( 1 );n = m`;img << Set Pixels( n );win2 = New Window( "Transformed", img );

```

**示例 2**

```jsl

img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );win = New Window( "tile(40,40)", img );{r, g, b} = img << Get Pixels( "rgb" );Wait( 1 );i = .30 * r + .59 * g + .11 * b;img << Set Pixels( "rgb", {i, i, i} );win2 = New Window( "Gray Scale", img );

```

### SetSize

**语法:** obj &lt;&lt; SetSize( {width, height} )

**说明:** 根据指定的宽度和高度设置图像大小。

```jsl

img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );obj = New Window( "tile(40,40)", img );img << Set Size( {600, 600} );obj2 = New Window( "Larger tile(40,40)", img );

```

### Size

**语法:** {w,h} = pic &lt;&lt; Get Size {w,h} = pic &lt;&lt; Size

**说明:** 返回包含图像宽度和高度的列表。

```jsl

img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );obj = New Window( "tile(40,40)", img );s = {w, h} = img << Get Size;Show( s );

```

### Transparency

**语法:** obj &lt;&lt; Transparency( fraction )

**说明:** 对图像应用透明度。有效值介于 0.0（透明）和 1.0（不透明）之间

```jsl

img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );win = New Window( "tile(40,40)", img );Wait( 1 );img << Transparency( 0.5 );win << reshow;

```

