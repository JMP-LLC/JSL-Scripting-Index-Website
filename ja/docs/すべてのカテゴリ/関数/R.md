# R



### R Connect

**構文:** RConnection = R Connect()

**説明:** R接続のスクリプト可能オブジェクトを戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

RConnection = R Connect();

```

### R Control

**構文:** R Control( Interrupt | Async( bool ) | Echo( bool ) )

**説明:** Rの制御オプションを変更する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

R Init( Echo( true ) );R Control( Echo( false ) );R Submit( "Add R code" );

```

### R Execute

**構文:** R Execute( { list of Inputs }, { list of Outputs }, statements )

**説明:** 入力値のリストを送り、ステートメントを実行し、結果のリストを取得する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

R Init();a = "abcdef";d = 3.141;x = 0;z = 0;v = [9 8 7, 6 5 4, 3 2 1];m = [1 2 3, 4 5 6, 7 8 9];rc = R Execute( {v, m, a, d}, {x, z, a, d}, "\[x <- rnorm(5)z <- v * m]\" );Show( v, m, rc, x, z, a, d );

```

### R Get

**構文:** y = R Get( name )

**説明:** Rからデータを取得する。引数nameには、数値、文字列、行列、リスト、データフレームといったタイプのR変数を指定することができる。

**JMP追加されたバージョン:** バージョン14より前

```jsl

R Init();x1 = [1, 2, 3];R Send( x1 );x2 = R Get( x1 );Show( x1, x2 );dt1 = New Table( "Test", New Column( "Col", Values( [10, 20, 30] ) ) );R Send( dt1 );dt2 = R Get( dt1 );Close( dt1, No Save );

```

### R Get Graphics

**構文:** R graphics = R Get Graphics( format )

**説明:** JMP 19で廃止されたため、指定しても無視される。代わりに、デバイスをpng("r_plot.png")のようなファイル名に設定し、そのファイルを開いて画像を読み込む。このオプションはJMP 20で削除される予定。以下のコードは、回避方法を示している。

**JMP追加されたバージョン:** バージョン14より前

```jsl

R Init();img_path = Get Path Variable( "TEMP" ) || "r_plot.png";R Execute( {img_path}, {}, "\[png(img_path)plot(1:10)dev.off()]\" );plot = Open( img_path );rc = Delete File( img_path );

```

### R Get Version

**構文:** version = R Get Version()

**説明:** JMPのRインターフェースで使用されているRのバージョン番号を戻す。

**JMP追加されたバージョン:** 14

```jsl

R Init();version = R Get Version();Show( version );

```

### R Init

**構文:** R Init()

**説明:** Rインターフェースを初期化する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

R Init();

```

### R Is Connected

**構文:** connected = R Is Connected()

**説明:** アクティブなR接続がある場合に1、それ以外の場合は0を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

R Init();connected = R Is Connected();

```

### R JMP Name to R Name

**構文:** R name = R JMP Name To R Name( JMP name )

**説明:** R変数の命名規則に従い、JMP変数名をR変数名に変換する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

R name = R JMP Name to R Name( a b c );

```

### R Send

**構文:** R Send( name, &lt;R Name( as_name ) | "as_name"&gt; )

**説明:** Rにデータを送る。引数nameには、数値、文字列、行列、リスト、データテーブル、データテーブル列といったデータタイプのものを指定することができる。

**JMP追加されたバージョン:** バージョン14より前

#### データテーブル

```jsl

R Init();x = [1, 2, 3];R Send( x, "x1" );rx = R Get( "x1" );dt = Open( "$SAMPLE_DATA/Big Class.jmp" );R Send( dt );Close( dt );R Submit( "dt" );

```

#### 列

```jsl

R Init();dt = Open( "$SAMPLE_DATA/Big Class.jmp" );R Send( dt:weight );Close( dt );w = R Get( "dt.weight" );

```

### R Send File

**構文:** R Send File( filename, &lt;R Name( name )&gt; )

**説明:** データファイルをRに送る。引数filenameは、Rに送られるファイルのパス名。

**JMP追加されたバージョン:** バージョン14より前

```jsl

R Init();R Send File( "$SAMPLE_DATA/Big Class.jmp" );R Send File( "$SAMPLE_DATA/Baseball.jmp" );R Submit( "Big.Class" );R Submit( "Baseball" );

```

### R Submit

**構文:** R Submit( statements )

**説明:** Rでステートメントをサブミットする。ステートメントは、文字列の値、または文字列の値のリスト。

**JMP追加されたバージョン:** バージョン14より前

```jsl

R Init();img_path = Get Path Variable( "TEMP" ) || "r_plot.png";code ="\[x <- rnorm(1000)hx <- hist(x, breaks=100, plot=FALSE)png("IMG_PATH")plot(hx, col=ifelse(abs(hx$breaks) < 1.669, 4, 2))dev.off()x <- rnorm (100)y <- x**2 + rnorm (100)summary(y)]\";// substitue portable path into R coder_code = Substitute( code, "IMG_PATH", img_path );R Submit( r_code );Wait( 3 );plot = Open( img_path );rc = Delete File( img_path );

```

### R Submit File

**構文:** R Submit File( path )

**説明:** 引数pathによって指定されたファイルにあるプログラムを、Rでサブミットする。

**JMP追加されたバージョン:** バージョン14より前

```jsl

R Init();file_path = Get Path Variable( "SAMPLE_SCRIPTS" ) || "R/SI_example.R";R Submit File( file_path );

```

### R Term

**構文:** R Term()

**説明:** JMP19で廃止されたため、指定しても無視される。

**JMP追加されたバージョン:** バージョン14より前

```jsl

R Init();R Term();

```

