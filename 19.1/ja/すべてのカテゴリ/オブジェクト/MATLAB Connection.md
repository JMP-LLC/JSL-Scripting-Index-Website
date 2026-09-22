# MATLAB Connection



## 項目のメッセージ

### Control

**構文:** obj &lt;&lt; Control(&lt;Echo(Boolean)&gt;)

**説明:** MATLABの制御オプションを変更する。

```jsl

conn = MATLAB Connect();conn << Control( Echo( 0 ) );conn << Submit( "\[ a = 'hello'; ]\" ); // no echoconn << Control( Echo( 1 ) );conn << Submit( "\[ a = 'hello'; ]\" ); // echo

```

### Disconnect

**構文:** obj &lt;&lt; Disconnect

**説明:** MATLABインターフェースを終了する。

```jsl

MATLABConnection = MATLAB Connect();MATLABConnection << Disconnect;

```

### Execute

**構文:** obj &lt;&lt; Execute( { list of Inputs }, { list of Outputs }, statements, &lt;Echo(0|1)&gt;, &lt;Expand(0|1)&gt; )

**説明:** 入力値のリストを送り、ステートメントを実行し、結果のリストを戻す。オプションのecho()パラメータのデフォルト値は真(True)。echoパラメータは、MATLABソースのログへのエコーを制御する。True (1)はソースのエコーを有効にし、0はログへのエコーを抑制する。

```jsl

MATLABConnection = MATLAB Connect();a = "abcdef";d = 3.141;v = [9 8 7, 6 5 4, 3 2 1];m = [1 2 3, 4 5 6, 7 8 9];MATLABConnection << Execute(	{v, m, a, d},	{x, z, a, d},	"\[a = v * m; % matrix productd = v / m; % = v * inv(m) called Right divisionz = m \ v; % = m * inv(v)	called Left divisionx = m .* v; % element-wise product]\");Show( v, m, x, z, a, d );MATLABConnection << Disconnect;

```

### Get

**構文:** y = obj &lt;&lt; Get( name )

**説明:** MATLABからデータを取得する。引数nameには、数値、文字列、行列、リスト、データフレームといったタイプのMATLAB変数を指定することができる。

```jsl

MATLABConnection = MATLAB Connect();x1 = [1, 2, 3];MATLABConnection << Set( x1 );x2 = MATLABConnection << Get( x1 );Show( x1, x2 );dt1 = Open( "$SAMPLE_DATA/Big Class.jmp" );MATLABConnection << Set( dt1 );dt2 = MATLABConnection << Get( dt1 );dt2 << New Data View;Close( dt1 );MATLABConnection << Disconnect;

```

### Get Graphics

**構文:** MATLAB graphics = obj &lt;&lt; Get Graphics( format )

**説明:** MATLABグラフ表示ウィンドウに最後に書き込まれたグラフィックオブジェクトを、format引数で指定されたグラフィック形式で戻す。

```jsl

MATLABConnection = MATLAB Connect();ml = MATLABConnection << Submit( "\[x = 0:pi/100:2*pi;y = sin(x);plot(x,y)]\" );plot = MATLABConnection << Get Graphics( png );New Window( "Plot", Picture Box( plot ) );MATLABConnection << Disconnect;

```

### Get Version

**構文:** version = obj &lt;&lt; Get Version

**説明:** 現在接続しているMATLABのバージョン番号を戻す。

```jsl

MATLABConnection = MATLAB Connect();version = MATLABConnection << Get Version;Show( version );MATLABConnection << Disconnect;

```

### Is Connected

**構文:** x = obj &lt;&lt; Is Connected

**説明:** アクティブなMATLAB接続がある場合は1、そうでない場合は0を戻す。

```jsl

MATLABConnection = MATLAB Connect();x = MATLABConnection << Is Connected;Show( x );MATLABConnection << Disconnect;

```

### JMP Name To MATLAB Name

**構文:** obj &lt;&lt; JMP Name To MATLAB Name( JMP name )

**説明:** JMPの変数名を、MATLABの変数命名規則に従ってMATLAB変数名にマップする。

```jsl

MATLABConnection = MATLAB Connect();MATLAB Name = MATLABConnection << JMP Name To MATLAB Name( a b c );Show( MATLAB Name );MATLABConnection << Disconnect;

```

### Load

**構文:** obj &lt;&lt; Load( path )

**説明:** ".mat"ファイルをMATLABにロードし、変数をJSL連想配列に戻す。

```jsl

MATLABConnection = MATLAB Connect();// .mat file has x, y variables with valuesvars = MATLABConnection << Load( "path/to/matfile.mat" );Show( vars << Get Value( "x" ), vars << Get Value( "y" ) );MATLABConnection << Disconnect;

```

### Send

**構文:** y = obj &lt;&lt; Send( name, &lt;Named Arguments&gt; )

**説明:** MATLABにデータを送る。引数nameには、数値、文字列、行列、リスト、データテーブルといったデータタイプのJSL変数を指定することができる。

```jsl

MATLABConnection = MATLAB Connect();x = [1, 2, 3];MATLABConnection << Send( x );dt = Open( "$SAMPLE_DATA/Big Class.jmp" );MATLABConnection << Send( dt );Close( dt );MATLABConnection << Submit( "x" );MATLABConnection << Submit( "dt" );MATLABConnection << Disconnect;

```

### Send File

**構文:** y = obj &lt;&lt; Send File( filename, &lt;MATLAB Name ( name )&gt; )

**説明:** MATLABにデータファイルを送信する。filename引数は、MATLABに送信されるファイルのパス名を示す文字列。

```jsl

MATLABConnection = MATLAB Connect();MATLABConnection << Send File( "$SAMPLE_DATA/Big Class.jmp" );dtname = "$SAMPLE_DATA/Baseball.jmp";MATLABConnection << Send File( dtname );MATLABConnection << Submit( "BigClass" );MATLABConnection << Submit( "Baseball" );MATLABConnection << Disconnect;

```

### Set

**構文:** y = obj &lt;&lt; Set( name, &lt;MATLAB Name ( name )&gt; )

**説明:** MATLABにデータを送る。引数nameには、数値、文字列、行列、リスト、データテーブルといったデータタイプのJSL変数を指定することができる。

```jsl

MATLABConnection = MATLAB Connect();x = [1, 2, 3];MATLABConnection << Set( x );dt = Open( "$SAMPLE_DATA/Big Class.jmp" );MATLABConnection << Set( dt );Close( dt );MATLABConnection << Submit( "x" );MATLABConnection << Submit( "dt" );MATLABConnection << Disconnect;

```

### Submit

**構文:** obj &lt;&lt; Submit( statements )

**説明:** MATLABでステートメントをサブミットする。ステートメントは、文字列の値、または文字列の値のリスト。

```jsl

MATLABConnection = MATLAB Connect();MATLABConnection << Submit(	"\[str = 'The quick brown fox jumps over the lazy dog';a = 200;]\");getStr = MATLABConnection << Get( str );getNum = MATLABConnection << Get( a );Show( getStr, getNum );MATLABConnection << Disconnect;

```

### Submit File

**構文:** obj &lt;&lt; Submit File( path )

**説明:** path引数によって指定されたファイルにあるステートメントを、MATLABで実行する。

```jsl

MATLABConnection = MATLAB Connect();MATLABConnection << Submit File( "file containing MATLAB source." );MATLABConnection << Disconnect;

```

