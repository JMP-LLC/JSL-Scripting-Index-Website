# Image



## 関連するコンストラクター

### New Image

**構文:** img = Open( filepath, jpg|png|gif|bmp|tif ) New Image(&lt;width, height&gt;, &lt;existing image&gt; )

**説明:** フレームボックスまたはディスプレイボックスに画像を追加するためのピクチャオブジェクト。

```jsl

img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );obj = New Window( "tile(40,40)", img );

```

### Open

**構文:** Open( filePath, &lt;data table options | Excel import options | text import options | SAS import options | HTML import options | esriShapeFile import options | PDF import options | other file options &gt; )

**説明:** ファイルから作成されたデータテーブルやその他のJMPファイル、またはオブジェクトへの参照を戻す。パスが指定されていない場合、「データファイルを開く」ダイアログが表示される。フォルダのパスが指定されている場合、システムのファイルブラウザが開かれ、オブジェクトは戻されない。使用できるオプションについては、構文リファレンスを参照。

```jsl

/* Data tables, other JMP files, external files:   Open( filePath,     <Invisible | Private>,     <Select Columns( "col", ... )>,     <Ignore Columns( "col", ... )>,     <Add to Recent Files(bool)>,     <Quarantine Action("Allow Scripts"|"Block Scripts"|"Do Not Open"|"Show Dialog")>     <Force Refresh>,     <Enable Filter Views(bool)>,     <"file type">   )*///Basic data table opendt1 = Open( "$SAMPLE_DATA/Big Class.jmp" );//Data table open with some optionsdt2 = Open( "$SAMPLE_DATA/Fitness.jmp", Select Columns( "Name", "Sex", "Age", "Weight" ) );

```

## 項目のメッセージ

### Add Frame

**構文:** obj &lt;&lt; Add Frame

**説明:** アニメーション画像に新しいフレームを追加する。[ピクセルの設定](Set Pixels)が使用されている場合を除いて、フレームには中身が含まれない。オプションの引数として、フレームの長さをミリ秒単位で指定できる。この引数を省略すると、追加のフレームの長さは現在のフレームの長さと同じになる。他のフレームがない場合は、デフォルトの長さである100ミリ秒が使用される。

**JMP追加されたバージョン:** 16

```jsl

dim = 100;mat0 = J( dim, dim, 0 );mat1 = J( dim, dim, 1 );multiImage = New Image( "rgb", {mat1, mat0, mat0} );multiImage << Add Frame( 2000 );multiImage << Set Pixels( "rgb", {mat0, mat1, mat0} );multiImage << Add Frame( 1000 );multiImage << Set Pixels( "rgb", {mat0, mat0, mat1} );win = New Window( "Multi-Frame Image", multiImage );durs = multiImage << Get Frame Durations();For( i = 0, i < 3, i++,	multiImage << Set Current Frame( i );	win << reshow();	dur = durs[i + 1] / 1000.0;	Wait( dur ););win << Close Window();

```

### Crop

**構文:** obj &lt;&lt; Crop( Left( number ), Right( number ), Top( number ), Bottom( number ) )

**説明:** 既存のイメージを指定されたピクセル座標の位置で切り取って、サブイメージを作成する。

```jsl

img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );obj = New Window( "tile(40,40)", img );Wait( 1 );img << Crop( Left( 50 ), Right( 300 ), Top( 20 ), Bottom( 200 ) );obj2 = New Window( "Cropped", img );

```

### Filter

**構文:** obj &lt;&lt; Filter( despeckle|edge|enhance|median|negate|normalize|sharpen|contrast|gamma|reduce noise|gaussian blur|canny, &lt;number&gt; )

**説明:** イメージを指定のアルゴリズムに基づいてフィルタリングする。フィルタリングはイメージのノイズを除去するのに効果的。コントラスト、ガンマ、ノイズの低減には、パラメータ(数値)がもう1つ必要。Gaussぼかしには、半径とシグマの2つのパラメータが必要。

**例 1**

```jsl

img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );New Window( "tile(40,40)", New Image( img ) );Wait( 1 );img << Filter( "negate" );New Window( "Neg filter", img ); //contrast filter example img2 = Open( "$SAMPLE_IMAGES/black rhino footprint.jpg", jpg );obj = New Window( "Black Rhino", New Image( img2 ) );Wait( 1 );img3 = New Image( img2 );/*save a copy for later*/ img2 << Filter( "Contrast", 4 );New Window( "Contrast filter", New Image( img2 ) );

```

**例 2**

```jsl

/* http://en.wikipedia.org/wiki/Canny_edge_detector */ radius = 1;sigma = 3;smallThreshold = .01;largeThreshold = .3;file = Pick File(	"pick picture",	"$SAMPLE_IMAGES",	{"pictures|png;jpg", "All Files|*"},	1,	0,	"black rhino footprint.jpg");original = New Image( file );edges = New Image( original );New Window( "canny",	H List Box(		Slider Box(			0,			10,			radius,			refilter();			hb << reshow;			t1 << settext( Char( Floor( radius ) ) );,			<<setwidth( 100 )		),		Text Box( "radius of smoothing filter=" ),		t1 = Text Box( Char( Floor( radius ) ) )	),	H List Box(		Slider Box(			1,			5,			sigma,			refilter();			hb << reshow;			t2 << settext( Char( Floor( sigma ) ) );,			<<setwidth( 100 )		),		Text Box( "smoothing repeat=" ),		t2 = Text Box( Char( Floor( sigma ) ) )	),	H List Box(		sb1 = Slider Box(			.0001,			1,			largeThreshold,			If( smallThreshold >= largeThreshold,				sb0 << set( largeThreshold / 2 )			);			refilter();			hb << reshow;			t3 << settext( Char( largeThreshold ) );			t4 << settext( Char( smallThreshold ) );,			<<setwidth( 300 )		),		Text Box( "large (start) threshold=" ),		t3 = Text Box( Char( largeThreshold ) )	),	H List Box(		sb0 = Slider Box(			.0001,			1,			smallThreshold,			If( smallThreshold >= largeThreshold,				sb1 << set( smallThreshold + .1 )			);			refilter();			hb << reshow;			t4 << settext( Char( smallThreshold ) );			t3 << settext( Char( largeThreshold ) );,			<<setwidth( 300 )		),		Text Box( "small (stop) threshold=" ),		t4 = Text Box( Char( smallThreshold ) )	),	Spacer Box( size( 10, 20 ) ),	hb = H List Box( original, edges ));refilter = Function( {},	edges << setpixels( original << getpixels );    //edges << filter( "gaussian blur", radius, sigma ); //you could use the gaussian blur filter by setting radius(0), below	edges << filter(		"canny"/* here it is! */,		largeThreshold( largeThreshold )/*tracing begins when a large-value edge is found*/,		smallThreshold( smallThreshold )/*tracing stops when the edge value gets too small*/,		radius( radius )/*a blur-filter, use 0 for no blurring*/,		Repeat( sigma )/* number of repeats of a box-blur; 3 approximates a gaussian-blur filter */	);	edges << filter( "negate" );/*black on white*/);refilter();

```

### Flip Both

**構文:** obj &lt;&lt; Flip Both

**説明:** イメージの上下左右を逆さにする。

```jsl

img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );obj = New Window( "tile(40,40)", img );Wait( 1 );img << Flip Both;obj2 = New Window( "Diagonal Flip", img );

```

### Flip Horizontal

**構文:** obj &lt;&lt; Flip Horizontal

**説明:** イメージの左右を逆さにする。

```jsl

img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );obj = New Window( "tile(40,40)", img );Wait( 1 );img << Flip Horizontal;obj2 = New Window( "Horizontal Flip", img );

```

### Flip Vertical

**構文:** obj &lt;&lt; Flip Vertical

**説明:** イメージの上下を逆さにする。

```jsl

img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );obj = New Window( "tile(40,40)", img );Wait( 1 );img << Flip Vertical;obj2 = New Window( "Vertical Flip", img );

```

### Get Current Frame

**構文:** obj &lt;&lt; Get Current Frame

**説明:** 現在のフレーム番号を戻す。ほとんどの場合、この値は0である。アニメーションのGIFファイルでは、0とフレーム数から1を引いた数の間の値になる。getPixelsやsetPixelsなどのアクションは、現在のフレームに対して行われる。

```jsl

img = New Image( "$SAMPLE_IMAGES/progress.gif" );num = img << Get Current Frame();

```

### Get EXIF

**構文:** obj &lt;&lt; Get EXIF

**説明:** イメージに埋め込まれたEXIFデータを取得し、一連のキー/値のペアを戻す。

**JMP追加されたバージョン:** 14

```jsl

img = New Image( "$SAMPLE_IMAGES/tile.jpg" );exifData = img << getEXIF();key = exifData << first;While( !Is Empty( key ),	v = exifData << getValue( key );	Show( key, v );	key = exifData << next( key ););

```

### Get Frame Durations

**構文:** obj &lt;&lt; Get Frame Durations

**説明:** フレームとフレームとの間の停止時間を行列で戻す。時間の単位はミリ秒。

```jsl

img = New Image( "$SAMPLE_IMAGES/progress.gif" );durs = img << Get Frame Durations();

```

### Get N Frames

**構文:** obj &lt;&lt; Get N Frames

**説明:** 画像のフレーム数を戻す。ほとんどの画像においてフレーム数は1。アニメーションGIFファイルではフレーム数が2枚以上になっている。

```jsl

img = New Image( "$SAMPLE_IMAGES/progress.gif" );num = img << Get N Frames();

```

### Get N Loops

**構文:** obj &lt;&lt; Get N Loops

**説明:** アニメーション画像のループ回数を戻す。0は、無限にループすることを示す。

```jsl

img = New Image( "$SAMPLE_IMAGES/progress.gif" );loops = img << Get N Loops();

```

### Get Path

**構文:** obj &lt;&lt; Get Path

### Get Pixels

**構文:** mat = img &lt;&lt; Get Pixels(); {r, g, b} = img &lt;&lt; Get Pixels("rgb"); {r, g, b, a} = img &lt;&lt; Get Pixels("rgba")

**説明:** カラーモデルを表す値が指定されなかった場合、ピクセル値を表すJSL色の行列を戻す。カラーモデルがrgbの場合、赤、緑、青の3つの行列のリストを戻す。rgbaの場合、アルファ(透明度)チャネルと赤、緑、青を戻す。

**例 1**

```jsl

img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );win = New Window( "tile(40,40)", img );m = img << Get Pixels;Show( m );

```

**例 2**

```jsl

img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );win = New Window( "tile(40,40)", img );{r, g, b} = img << Get Pixels( "rgb" );

```

**例 3**

```jsl

img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );win = New Window( "tile(40,40)", img );{r, g, b, a} = img << Get Pixels( "rgba" );

```

### GetSize

**構文:** {w,h} = pic &lt;&lt; Get Size {w,h} = pic &lt;&lt; Size

**説明:** イメージの幅と高さをリストとして戻す。

```jsl

img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );obj = New Window( "tile(40,40)", img );s = {w, h} = img << Get Size;Show( s );

```

### Remove Frame

**構文:** obj &lt;&lt; Remove Frame

**説明:** アニメーション画像からフレームを削除する。削除されるフレームの番号を指定する。

```jsl

img = New Image( "$SAMPLE_IMAGES/progress.gif" );img << Remove Frame( 0 );

```

### Rotate

**構文:** obj &lt;&lt; Rotate( angle )

**説明:** イメージを指定の角度だけ回転させる。

```jsl

img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );obj = New Window( "tile(40,40)", img );Wait( 1 );img << Rotate( 45 );obj2 = New Window( "Rotated", img );

```

### Save Image

**構文:** obj &lt;&lt; Save Image( filePath, image type )

**説明:** イメージを指定の場所およびファイル名で保存する。第2パラメータには、保存するイメージのタイプを指定する。指定できるイメージのタイプには、PNG、JPG、GIS、TIFF、BMP、PDFがある。イメージのタイプを指定しなかった場合、または指定したイメージのタイプが有効なものでなかった場合は、PNGファイルとして保存される。

```jsl

img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );obj = New Window( "tile(40,40)", img );img << Save Image( "$TEMP/Mediterranean.jpg", "jpg" );

```

### Scale

**構文:** obj &lt;&lt; Scale( scale | xscale, yscale )

**説明:** 画像の幅と高さに同じ倍率を掛けるか、幅(xscale)と高さ(yscale)の倍率を個別に設定する。

**例 1**

```jsl

img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );obj = New Window( "tile(40,40)", img );img << scale( 0.5 );obj2 = New Window( "Tile scaled by 0.5", img );

```

**例 2**

```jsl

img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );obj = New Window( "tile(40,40)", img );img << scale( 2, 0.5 );obj2 = New Window( "Tile scaled by 2 vertically and by 0.5 horizontally", img );

```

### Set Blob

**構文:** obj &lt;&lt; Set Blob

**説明:**  BLOBから、イメージを設定する。

### Set Current Frame

**構文:** obj &lt;&lt; Set Current Frame( frame )

**説明:** 現在のフレーム番号を設定する。この値はほとんどの画像で0。アニメーションのGIFファイルでは、0とフレーム数から1を引いた数の間の値になる。getPixelsやsetPixelsなどのアクションは、現在のフレームに対して行われる。

```jsl

img = New Image( "$SAMPLE_IMAGES/progress.gif" );num = img << Get N Frames();win = New Window( "Progress", img );For( i = 0, i < num, i++,	img << Set Current Frame( i );	win << reshow();	Wait( 1 ););win << Close Window();

```

### Set Frame Duration

**構文:** obj &lt;&lt; Set Frame Duration( duration )

**説明:** アニメーション画像の現在のフレームの時間の長さを設定する。単位はミリ秒。

```jsl

img = New Image( "$SAMPLE_IMAGES/progress.gif" );img << Set Frame Duration( 1000 );durs = img << Get Frame Durations();

```

### Set N Loops

**構文:** obj &lt;&lt; Set N Loops( loops )

**説明:** アニメーション画像のループ回数を戻す。0の値は、無限にループすることを示す。

```jsl

img = New Image( "$SAMPLE_IMAGES/progress.gif" );img << Set N Loops( 3 );loops = img << Get N Loops();

```

### Set Pixels

**構文:** img &lt;&lt; Set Pixels(jslmat); img &lt;&lt; Set Pixels ("rgb", {r, g, b})

**説明:** イメージのピクセル行列を設定する。1つの行列がカラーモデルなしで指定された場合は、JSLの色の行列として扱う。rgbなどのカラーモデルを指定し、次の引数に赤、緑、青の行列を指定することもできる。その場合、指定する行列のサイズはすべて同じでなければならない。

**例 1**

```jsl

img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );win = New Window( "tile(40,40)", img );m = img << Get Pixels;Wait( 1 );n = m`;img << Set Pixels( n );win2 = New Window( "Transformed", img );

```

**例 2**

```jsl

img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );win = New Window( "tile(40,40)", img );{r, g, b} = img << Get Pixels( "rgb" );Wait( 1 );i = .30 * r + .59 * g + .11 * b;img << Set Pixels( "rgb", {i, i, i} );win2 = New Window( "Gray Scale", img );

```

### SetSize

**構文:** obj &lt;&lt; SetSize( {width, height} )

**説明:** イメージサイズの幅と高さを設定する。

```jsl

img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );obj = New Window( "tile(40,40)", img );img << Set Size( {600, 600} );obj2 = New Window( "Larger tile(40,40)", img );

```

### Size

**構文:** {w,h} = pic &lt;&lt; Get Size {w,h} = pic &lt;&lt; Size

**説明:** イメージの幅と高さをリストとして戻す。

```jsl

img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );obj = New Window( "tile(40,40)", img );s = {w, h} = img << Get Size;Show( s );

```

### Transparency

**構文:** obj &lt;&lt; Transparency( fraction )

**説明:** イメージの透明度を指定する。有効な値は0.0(透明)から1.0(不透明)まで。

```jsl

img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );win = New Window( "tile(40,40)", img );Wait( 1 );img << Transparency( 0.5 );win << reshow;

```

