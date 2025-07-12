# Image



## 연결된 생성자

### New Image

**구문:** img = Open( filepath, jpg|png|gif|bmp|tif )

New Image(<width, height>, <existing image> )

**설명:** 프레임 또는 표시 상자에 그림을 추가하는 데 사용될 수 있는 그림 개체입니다.

```jsl

Names Default To Here( 1 );
img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );
obj = New Window( "tile(40,40)", img );

```

### Open

**구문:** Open( filePath, <data table options | Excel import options | text import options | SAS import options | HTML import options | esriShapeFile import options | PDF import options | other file options > )

**설명:** 데이터 테이블이나 기타 JMP 파일 또는 파일에서 생성된 개체에 대한 참조를 반환합니다. 경로를 지정하지 않으면 열기 대화상자가 나타납니다. 폴더 경로를 지정하면 시스템 파일 브라우저가 열리고 개체가 반환되지 않습니다. 사용 가능한 옵션에 대한 전체 설명은 구문 참조에서 확인하십시오.

```jsl

Names Default To Here( 1 );
/* Data tables, other JMP files, external files:
   Open( filePath,
     <Invisible | Private>,
     <Select Columns( "col", ... )>,
     <Ignore Columns( "col", ... )>,
     <Add to Recent Files(bool)>,
     <Quarantine Action("Allow Scripts"|"Block Scripts"|"Do Not Open"|"Show Dialog")>
     <Force Refresh>,
     <Enable Filter Views(bool)>,
     <"file type">
   )
*/
//Basic data table open
dt1 = Open( "$SAMPLE_DATA/Big Class.jmp" );
//Data table open with some options
dt2 = Open( "$SAMPLE_DATA/Fitness.jmp", Select Columns( "Name", "Sex", "Age", "Weight" ) );

```

## 항목 메시지

### Add Frame

**구문:** obj << Add Frame

**설명:** 애니메이션 이미지에 새 프레임을 추가합니다. Set Pixels가 사용될 때까지 프레임에 아무 내용도 포함되지 않습니다. 프레임 지속 기간(밀리초)을 나타내는 선택적 기간 인수를 지정할 수 있습니다. 기간 인수를 생략하면 현재 프레임의 기간이 추가된 프레임의 기간으로 사용됩니다. 다른 프레임이 없는 경우에는 기본 기간인 100밀리초가 사용됩니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
dim = 100;
mat0 = J( dim, dim, 0 );
mat1 = J( dim, dim, 1 );
multiImage = New Image( "rgb", {mat1, mat0, mat0} );
multiImage << Add Frame( 2000 );
multiImage << Set Pixels( "rgb", {mat0, mat1, mat0} );
multiImage << Add Frame( 1000 );
multiImage << Set Pixels( "rgb", {mat0, mat0, mat1} );
win = New Window( "Multi-Frame Image", multiImage );
durs = multiImage << Get Frame Durations();
For( i = 0, i < 3, i++,
	multiImage << Set Current Frame( i );
	win << reshow();
	dur = durs[i + 1] / 1000.0;
	Wait( dur );
);
win << Close Window();

```

### Crop

**구문:** obj << Crop( Left( number ), Right( number ), Top( number ), Bottom( number ) )

**설명:** Modifies the image to be the sub-image at the specified pixel coordinates within the existing image.

```jsl

Names Default To Here( 1 );
img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );
obj = New Window( "tile(40,40)", img );
Wait( 1 );
img << Crop( Left( 50 ), Right( 300 ), Top( 20 ), Bottom( 200 ) );
obj2 = New Window( "Cropped", img );

```

### Filter

**구문:** obj << Filter( despeckle|edge|enhance|median|negate|normalize|sharpen|contrast|gamma|reduce noise|gaussian blur|canny, <number> )

**설명:** 지정된 알고리즘을 기반으로 이미지를 필터링합니다. 필터링은 이미지의 잡음을 정리하는 데 유용합니다. 대비, 감마 및 잡음 감소에는 하나의 추가(숫자) 파라미터가 필요합니다. 가우시안 흐림에는 두 개의 파라미터(반지름 및 시그마)가 필요합니다.

**예제 1**

```jsl

Names Default To Here( 1 );
img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );
New Window( "tile(40,40)", New Image( img ) );
Wait( 1 );
img << Filter( "negate" );
New Window( "Neg filter", img ); 
//contrast filter example 
img2 = Open( "$SAMPLE_IMAGES/black rhino footprint.jpg", jpg );
obj = New Window( "Black Rhino", New Image( img2 ) );
Wait( 1 );
img3 = New Image( img2 );/*save a copy for later*/ img2 << Filter( "Contrast", 4 );
New Window( "Contrast filter", New Image( img2 ) );

```

**예제 2**

```jsl

Names Default To Here( 1 );
/* http://en.wikipedia.org/wiki/Canny_edge_detector */ 
radius = 1;
sigma = 3;
smallThreshold = .01;
largeThreshold = .3;
file = Pick File(
	"pick picture",
	"$SAMPLE_IMAGES",
	{"pictures|png;jpg", "All Files|*"},
	1,
	0,
	"black rhino footprint.jpg"
);
original = New Image( file );
edges = New Image( original );
New Window( "canny",
	H List Box(
		Slider Box(
			0,
			10,
			radius,
			refilter();
			hb << reshow;
			t1 << settext( Char( Floor( radius ) ) );,
			<<setwidth( 100 )
		),
		Text Box( "radius of smoothing filter=" ),
		t1 = Text Box( Char( Floor( radius ) ) )
	),
	H List Box(
		Slider Box(
			1,
			5,
			sigma,
			refilter();
			hb << reshow;
			t2 << settext( Char( Floor( sigma ) ) );,
			<<setwidth( 100 )
		),
		Text Box( "smoothing repeat=" ),
		t2 = Text Box( Char( Floor( sigma ) ) )
	),
	H List Box(
		sb1 = Slider Box(
			.0001,
			1,
			largeThreshold,
			If( smallThreshold >= largeThreshold,
				sb0 << set( largeThreshold / 2 )
			);
			refilter();
			hb << reshow;
			t3 << settext( Char( largeThreshold ) );
			t4 << settext( Char( smallThreshold ) );,
			<<setwidth( 300 )
		),
		Text Box( "large (start) threshold=" ),
		t3 = Text Box( Char( largeThreshold ) )
	),
	H List Box(
		sb0 = Slider Box(
			.0001,
			1,
			smallThreshold,
			If( smallThreshold >= largeThreshold,
				sb1 << set( smallThreshold + .1 )
			);
			refilter();
			hb << reshow;
			t4 << settext( Char( smallThreshold ) );
			t3 << settext( Char( largeThreshold ) );,
			<<setwidth( 300 )
		),
		Text Box( "small (stop) threshold=" ),
		t4 = Text Box( Char( smallThreshold ) )
	),
	Spacer Box( size( 10, 20 ) ),
	hb = H List Box( original, edges )
);
refilter = Function( {},
	edges << setpixels( original << getpixels );
    //edges << filter( "gaussian blur", radius, sigma ); //you could use the gaussian blur filter by setting radius(0), below
	edges << filter(
		"canny"/* here it is! */,
		largeThreshold( largeThreshold )/*tracing begins when a large-value edge is found*/,
		smallThreshold( smallThreshold )/*tracing stops when the edge value gets too small*/,
		radius( radius )/*a blur-filter, use 0 for no blurring*/,
		Repeat( sigma )/* number of repeats of a box-blur; 3 approximates a gaussian-blur filter */
	);
	edges << filter( "negate" );/*black on white*/
);
refilter();

```

### Flip Both

**구문:** obj << Flip Both

**설명:** 이미지를 상하좌우로 반전합니다.

```jsl

Names Default To Here( 1 );
img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );
obj = New Window( "tile(40,40)", img );
Wait( 1 );
img << Flip Both;
obj2 = New Window( "Diagonal Flip", img );

```

### Flip Horizontal

**구문:** obj << Flip Horizontal

**설명:** 이미지를 좌우로 반전합니다.

```jsl

Names Default To Here( 1 );
img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );
obj = New Window( "tile(40,40)", img );
Wait( 1 );
img << Flip Horizontal;
obj2 = New Window( "Horizontal Flip", img );

```

### Flip Vertical

**구문:** obj << Flip Vertical

**설명:** 이미지를 상하로 반전합니다.

```jsl

Names Default To Here( 1 );
img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );
obj = New Window( "tile(40,40)", img );
Wait( 1 );
img << Flip Vertical;
obj2 = New Window( "Vertical Flip", img );

```

### Get Current Frame

**구문:** obj << Get Current Frame

**설명:** 현재 프레임 번호를 반환합니다. 대부분의 이미지의 경우 이 값이 0입니다. 애니메이션 GIF 파일의 경우 이 값이 0에서 프레임 수보다 하나 작은 수 사이에 있을 수 있습니다. 현재 프레임에 대해 getPixels 및 setPixels와 같은 작업이 수행됩니다.

```jsl

Names Default To Here( 1 );
img = New Image( "$SAMPLE_IMAGES/progress.gif" );
num = img << Get Current Frame();

```

### Get EXIF

**구문:** obj << Get EXIF

**설명:** 이미지와 함께 내부적으로 저장된 EXIF 데이터를 가져옵니다. 키/값 쌍의 배열이 반환됩니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
img = New Image( "$SAMPLE_IMAGES/tile.jpg" );
exifData = img << getEXIF();
key = exifData << first;
While( !Is Empty( key ),
	v = exifData << getValue( key );
	Show( key, v );
	key = exifData << next( key );
);

```

### Get Frame Durations

**구문:** obj << Get Frame Durations

**설명:** 각 프레임 간 일시 중지 기간의 행렬을 반환합니다. 시간은 밀리초 단위로 지정합니다.

```jsl

Names Default To Here( 1 );
img = New Image( "$SAMPLE_IMAGES/progress.gif" );
durs = img << Get Frame Durations();

```

### Get N Frames

**구문:** obj << Get N Frames

**설명:** 이미지에 포함된 프레임 수를 반환합니다. 대부분의 이미지의 경우 이 값이 1입니다. 애니메이션 GIF 파일의 경우 1보다 클 수 있습니다.

```jsl

Names Default To Here( 1 );
img = New Image( "$SAMPLE_IMAGES/progress.gif" );
num = img << Get N Frames();

```

### Get N Loops

**구문:** obj << Get N Loops

**설명:** 애니메이션 이미지가 해당 시퀀스를 반복하는 횟수를 반환합니다. 값이 0이면 이미지가 무한 반복됨을 나타냅니다.

```jsl

Names Default To Here( 1 );
img = New Image( "$SAMPLE_IMAGES/progress.gif" );
loops = img << Get N Loops();

```

### Get Path

**구문:** obj << Get Path

### Get Pixels

**구문:** mat = img << Get Pixels();

{r, g, b} = img << Get Pixels("rgb");

{r, g, b, a} = img << Get Pixels("rgba")

**설명:** 색상 지시자가 지정되지 않은 경우 픽셀 값을 나타내는 JSL 색상 행렬이 반환됩니다. 색상 지정자가 rgb이면 각각 빨강, 녹색, 파랑의 세 행렬이 포함된 목록이 반환됩니다. rgba를 지정하면 알파(투명도) 채널 및 빨강, 녹색, 파랑이 반환됩니다.

**예제 1**

```jsl

Names Default To Here( 1 );
img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );
win = New Window( "tile(40,40)", img );
m = img << Get Pixels;
Show( m );

```

**예제 2**

```jsl

Names Default To Here( 1 );
img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );
win = New Window( "tile(40,40)", img );
{r, g, b} = img << Get Pixels( "rgb" );

```

**예제 3**

```jsl

Names Default To Here( 1 );
img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );
win = New Window( "tile(40,40)", img );
{r, g, b, a} = img << Get Pixels( "rgba" );

```

### GetSize

**구문:** {w,h} = pic << Get Size 

{w,h} = pic << Size

**설명:** 이미지의 너비 및 높이가 포함된 목록을 반환합니다.

```jsl

Names Default To Here( 1 );
img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );
obj = New Window( "tile(40,40)", img );
s = {w, h} = img << Get Size;
Show( s );

```

### Remove Frame

**구문:** obj << Remove Frame

**설명:** 애니메이션 이미지에서 프레임을 제거합니다. 제거할 프레임의 인덱스가 전달됩니다.

```jsl

Names Default To Here( 1 );
img = New Image( "$SAMPLE_IMAGES/progress.gif" );
img << Remove Frame( 0 );

```

### Rotate

**구문:** obj << Rotate( angle )

**설명:** 지정된 회전 각도만큼 이미지를 회전합니다.

```jsl

Names Default To Here( 1 );
img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );
obj = New Window( "tile(40,40)", img );
Wait( 1 );
img << Rotate( 45 );
obj2 = New Window( "Rotated", img );

```

### Save Image

**구문:** obj << Save Image( filePath, image type )

**설명:** 지정된 위치와 파일 이름으로 이미지를 저장합니다. 두 번째 파라미터는 파일 이름에 사용된 확장자에 관계없이 저장할 이미지 유형을 나타냅니다. 올바른 이미지 유형에는 PNG, JPG, GIF, TIFF, BMP 및 PDF가 포함됩니다. 이미지 유형이 지정되지 않거나 지정된 이미지 유형을 인식할 수 없으면 이미지가 PNG 파일로 저장됩니다.

```jsl

Names Default To Here( 1 );
img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );
obj = New Window( "tile(40,40)", img );
img << Save Image( "$TEMP/Mediterranean.jpg", "jpg" );

```

### Scale

**구문:** obj << Scale( scale | xscale, yscale )

**설명:** 이미지의 너비 및 높이에 배율을 적용하거나 너비(xscale)와 높이(yscale)를 독립적으로 조정합니다.

**예제 1**

```jsl

Names Default To Here( 1 );
img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );
obj = New Window( "tile(40,40)", img );
img << scale( 0.5 );
obj2 = New Window( "Tile scaled by 0.5", img );

```

**예제 2**

```jsl

Names Default To Here( 1 );
img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );
obj = New Window( "tile(40,40)", img );
img << scale( 2, 0.5 );
obj2 = New Window( "Tile scaled by 2 vertically and by 0.5 horizontally", img );

```

### Set Blob

**구문:** obj << Set Blob

**설명:** BLOB에서 이미지를 설정합니다.

### Set Current Frame

**구문:** obj << Set Current Frame( frame )

**설명:** 현재 프레임 번호를 설정합니다. 대부분의 이미지의 경우 이 값이 0입니다. 애니메이션 GIF 파일의 경우 이 값이 0에서 프레임 수보다 하나 작은 수 사이에 있을 수 있습니다. 현재 프레임에 대해 getPixels 및 setPixels와 같은 작업이 수행됩니다.

```jsl

Names Default To Here( 1 );
img = New Image( "$SAMPLE_IMAGES/progress.gif" );
num = img << Get N Frames();
win = New Window( "Progress", img );
For( i = 0, i < num, i++,
	img << Set Current Frame( i );
	win << reshow();
	Wait( 1 );
);
win << Close Window();

```

### Set Frame Duration

**구문:** obj << Set Frame Duration( duration )

**설명:** 애니메이션 이미지의 현재 프레임의 기간을 설정합니다. 시간은 밀리초 단위로 지정합니다.

```jsl

Names Default To Here( 1 );
img = New Image( "$SAMPLE_IMAGES/progress.gif" );
img << Set Frame Duration( 1000 );
durs = img << Get Frame Durations();

```

### Set N Loops

**구문:** obj << Set N Loops( loops )

**설명:** 애니메이션 이미지가 해당 시퀀스를 반복하는 횟수를 설정합니다. 값이 0이면 이미지가 무한정 반복됨을 나타냅니다.

```jsl

Names Default To Here( 1 );
img = New Image( "$SAMPLE_IMAGES/progress.gif" );
img << Set N Loops( 3 );
loops = img << Get N Loops();

```

### Set Pixels

**구문:** img << Set Pixels(jslmat);

img << Set Pixels ("rgb", {r, g, b})

**설명:** 이미지에 대한 픽셀 행렬 또는 행렬을 설정합니다. 색상 지정자 없이 하나의 행렬이 지정되어 있으면 행렬이 JSL 색상 행렬로 처리됩니다. rgb와 같은 색상 지정자를 지정하여 다음 행렬이 각각 빨강, 녹색, 파랑임을 나타낼 수 있습니다. 이 경우 지정된 모든 행렬의 크기가 동일해야 합니다.

**예제 1**

```jsl

Names Default To Here( 1 );
img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );
win = New Window( "tile(40,40)", img );
m = img << Get Pixels;
Wait( 1 );
n = m`;
img << Set Pixels( n );
win2 = New Window( "Transformed", img );

```

**예제 2**

```jsl

Names Default To Here( 1 );
img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );
win = New Window( "tile(40,40)", img );
{r, g, b} = img << Get Pixels( "rgb" );
Wait( 1 );
i = .30 * r + .59 * g + .11 * b;
img << Set Pixels( "rgb", {i, i, i} );
win2 = New Window( "Gray Scale", img );

```

### SetSize

**구문:** obj << SetSize( {width, height} )

**설명:** 지정된 너비 및 높이를 기반으로 이미지 크기를 설정합니다.

```jsl

Names Default To Here( 1 );
img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );
obj = New Window( "tile(40,40)", img );
img << Set Size( {600, 600} );
obj2 = New Window( "Larger tile(40,40)", img );

```

### Size

**구문:** {w,h} = pic << Get Size 

{w,h} = pic << Size

**설명:** 이미지의 너비 및 높이가 포함된 목록을 반환합니다.

```jsl

Names Default To Here( 1 );
img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );
obj = New Window( "tile(40,40)", img );
s = {w, h} = img << Get Size;
Show( s );

```

### Transparency

**구문:** obj << Transparency( fraction )

**설명:** 이미지에 투명도를 적용합니다. 올바른 값은 0.0(투명)에서 1.0(불투명) 사이의 값입니다.

```jsl

Names Default To Here( 1 );
img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );
win = New Window( "tile(40,40)", img );
Wait( 1 );
img << Transparency( 0.5 );
win << reshow;

```

