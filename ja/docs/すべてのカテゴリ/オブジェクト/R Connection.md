# R Connection



## 関連するコンストラクター

### R Connect

**構文:** RConnection = R Connect()

**説明:** R接続のスクリプト可能オブジェクトを戻す。

```jsl

RConnection = R Connect();
x = RConnection << Is Connected;
Show( x );

```

## 項目のメッセージ

### Control

**構文:** obj &lt;&lt; Control( Echo( Boolean ) )

**説明:** Rの制御オプションを変更する。

```jsl

RConnection = R Connect();
RConnection << Control( Echo( 0 ) );
RConnection << Submit( "rnorm(10)" );

```

### Disconnect

**構文:** obj &lt;&lt; Disconnect

**説明:** JMP19で廃止されたため、指定しても無視されます。

```jsl

RConnection = R Connect();
RConnection << Disconnect;

```

### Execute

**構文:** list = obj &lt;&lt; Execute( { list of Inputs }, { list of Outputs }, statements )

**説明:** 入力値のリストを送り、ステートメントを実行し、結果のリストを取得する。

```jsl


RConnection = R Connect();
a = "abcdef";
d = 3.1415927;
x = 0;
z = 0;
v = [9 8 7, 6 5 4, 3 2 1];
m = [1 2 3, 4 5 6, 7 8 9];
rc = RConnection << Execute( {v, m, a, d}, {x, z, a, d}, "\[
x <- rnorm(5)
z <- v * m
]\" );
Show( v, m, rc, x, z, a, d );

```

### Get

**構文:** y = obj &lt;&lt; Get( name )

**説明:** Rからデータを取得する。引数nameには、数値、文字列、行列、リスト、データフレームといったタイプのR変数を指定することができる。

```jsl

RConnection = R Connect();
x1 = [1, 2, 3];
RConnection << Set( x1 );
x2 = RConnection << Get( x1 );
Show( x1, x2 );
dt1 = New Table( "Test", New Column( "Col", Values( [10, 20, 30] ) ) );
RConnection << Set( dt1 );
dt2 = RConnection << Get( dt1 );
Close( dt1, No Save );

```

### Get Graphics

**構文:** R graphics = obj &lt;&lt; Get Graphics( format )

**説明:** JMP 19では廃止されたため、指定しても無視される。代わりに、デバイスをpng("r_plot.png")のようなファイル名に設定し、そのファイルを開いて画像を読み込む。このオプションはJMP 20で削除される予定。以下のコードは、回避方法を示している。

```jsl

RConnection = R Connect();
img_path = Get Path Variable( "TEMP" ) || "r_plot.png";
RConnection << Execute( {img_path}, {}, "\[
png(img_path)
plot(1:10)
dev.off()
]\" );
plot = Open( img_path );
rc = Delete File( img_path );

```

### Get Version

**構文:** version = obj &lt;&lt; Get Version

**説明:** 現在の接続で使用されているRのバージョン番号を戻す。

```jsl

RConnection = R Connect();
version = RConnection << Get Version;
Show( version );

```

### Is Connected

**構文:** x = obj &lt;&lt; Is Connected

**説明:** アクティブなR接続がある場合に1、それ以外の場合は0を戻す。

```jsl

RConnection = R Connect();
x = RConnection << Is Connected;
Show( x );

```

### JMP Name To R Name

**構文:** Rname = JMP Name To R Name( JMP name )

**説明:** R変数の命名規則に従い、JMP変数名をR変数名に変換する。

```jsl

RConnection = R Connect();
RName = RConnection << JMP Name To R Name( a b c );
Show( RName );

```

### Send

**構文:** y = obj &lt;&lt; Send( name, &lt;R Name( name )&gt; )

**説明:** Rにデータを送る。引数nameには、数値、文字列、行列、リスト、データテーブルといったデータタイプのJSL変数を指定することができる。

```jsl

RConnection = R Connect();
x = [1, 2, 3];
RConnection << Send( x );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
RConnection << Send( dt );
Close( dt );
RConnection << Submit( "dt" );

```

### Send File

**構文:** y = obj &lt;&lt; Send File( filename, &lt;R Name( name )&gt; )

**説明:** データファイルをRに送ります。引数filenameは、Rに送られるファイルのパス名です。

```jsl

RConnection = R Connect();
RConnection << Send File( "$SAMPLE_DATA/Big Class.jmp" );
RConnection << Disconnect;
dtname = "$SAMPLE_DATA/Baseball.jmp";
RConnection << Send File( dtname );

```

### Set

**構文:** y = obj &lt;&lt; Set( name, &lt;R Name( name )&gt; )

**説明:** Rにデータを送る。引数nameには、数値、文字列、行列、リスト、データテーブルといったデータタイプのJSL変数を指定することができる。

```jsl

RConnection = R Connect();
x = [1, 2, 3];
RConnection << Set( x );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
RConnection << Set( dt );
Close( dt );
RConnection << Submit( "dt" );

```

### Submit

**構文:** obj &lt;&lt; Submit( statements )

**説明:** Rでステートメントをサブミットする。ステートメントは、文字列の値、または文字列の値のリスト。

```jsl


RConnection = R Connect();
img_path = Get Path Variable( "TEMP" ) || "r_plot.png";
code =
"\[
x <- rnorm(1000)
hx <- hist(x, breaks=100, plot=FALSE)
png("IMG_PATH")
plot(hx, col=ifelse(abs(hx$breaks) < 1.669, 4, 2))
dev.off()
x <- rnorm (100)
y <- x**2 + rnorm (100)
summary(y)
]\";
// substitue portable path into R code
r_code = Substitute( code, "IMG_PATH", img_path );
RConnection << Submit( r_code );
Wait( 3 );
plot = Open( img_path );
rc = Delete File( img_path );

```

### Submit File

**構文:** obj &lt;&lt; Submit File( path )

**説明:** 引数pathによって指定されたファイルにあるプログラムを、Rでサブミットする。

```jsl

RConnection = R Connect();
RConnection << Submit File( "file containing R source." );

```

