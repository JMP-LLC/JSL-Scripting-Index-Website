# MATLAB



### Check MATLAB Dependencies

**構文:** Check MATLAB Dependencies()

**説明:** MATLAB関連ファイルがインストールされているか確認する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

If( !Check MATLAB Dependencies(),	Install MATLAB Dependencies();	Print( "Dependencies are installed" );,	Print( "Dependencies are installed" ));

```

### Install MATLAB Dependencies

**構文:** Install MATLAB Dependencies(&lt;Patch(0|1)&gt;)

**説明:** 必要なMATLAB関連ファイルをインストールする。

**JMP追加されたバージョン:** バージョン14より前

```jsl

If( !Check MATLAB Dependencies(),	Install MATLAB Dependencies(),	Print( "Dependencies are installed" ));

```

### MATLAB Connect

**構文:** MATLABConnection = MATLAB Connect(&lt;Echo(0|1)&gt;)

**説明:** MATLAB接続のスクリプト可能なオブジェクトを戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

MATLABConnection = MATLAB Connect();x = MatlabConnection << Is Connected;Show( x );

```

### MATLAB Control

**構文:** MATLAB Control( Echo(bool) )

**説明:** MATLABの制御オプションを変更する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

MATLAB Init( Echo( true ) );MATLAB Control( Echo( false ) );MATLAB Submit(	"\[	v = [9 8 7, 6 5 4, 3 2 1];	m = [1 2 3, 4 5 6, 7 8 9];	rowjoin = [v ; m]	coljoin = [v , m]]\");MATLAB Term();

```

### MATLAB Execute

**構文:** MATLAB Execute( { list of Inputs }, { list of Outputs }, statements, &lt;Echo(0|1)&gt;, &lt;Expand(0|1)&gt; )

**説明:** 入力値のリストを送り、ステートメントを実行し、結果のリストを取得する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

MATLAB Init();a = "abcdef";d = 3.141;v = [9 8 7, 6 5 4, 3 2 1];m = [1 2 3, 4 5 6, 7 8 9];ml = MATLAB Execute(	{v, m, a, d},	{x, z, a, d},	"\[a = v * m; % matrix productd = v / m; % = v * inv(m) called Right divisionz = m \ v; % = m * inv(v) called Left divisionx = m .* v; % element-wise product]\");Show( v, m, ml, x, z, a, d );MATLAB Term();

```

### MATLAB Get

**構文:** y = MATLAB Get( name )

**説明:** MATLABからデータを取得する。引数nameには、数値、文字列、行列、リスト、データフレームといったタイプのMATLAB変数を指定することができる。

**JMP追加されたバージョン:** バージョン14より前

```jsl

MATLAB Init();x1 = [1, 2, 3];MATLAB Send( x1 );x2 = MATLAB Get( x1 );Show( x1, x2 );dt1 = Open( "$SAMPLE_DATA/Big Class.jmp" );MATLAB Send( dt1 );dt2 = MATLAB Get( dt1 );dt2 << New Data View;Close( dt1 );MATLAB Term();

```

### MATLAB Get Graphics

**構文:** MATLAB graphics = MATLAB Get Graphics( format )

**説明:** MATLABグラフ表示ウィンドウに最後に書き込まれたグラフィックオブジェクトを、format引数で指定されたグラフィック形式で戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

MATLAB Init();ml = MATLAB Submit( "\[plot(1:10)]\" );plot = MATLAB Get Graphics( png );pngJMP = New Window( "Plot", Picture Box( plot ) );pngJMP << Close Window;MATLAB Submit( "close" );//Needed this command to close the figure generated from MatlabMATLAB Term();

```

### MATLAB Get Version

**構文:** version = MATLAB Get Version()

**説明:** JMPのMATLABインターフェースで使用されているMATLABのバージョン番号を戻す。

**JMP追加されたバージョン:** 14

```jsl

MATLAB Init();version = MATLAB Get Version();Show( version );MATLAB Term();

```

### MATLAB Init

**構文:** MATLAB Init(&lt;Echo(0|1)&gt;)

**説明:** MATLABインターフェースを初期化する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

MATLAB Init();MATLAB Submit( "\[str = 'The quick brown fox jumps over the lazy dog';]\" );getStr = MATLAB Get( str );Show( getStr );MATLAB Term();

```

### MATLAB Is Connected

**構文:** connected = MATLAB Is Connected()

**説明:** アクティブなMATLAB接続がある場合は1、そうでない場合は0を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

MATLAB Init();x = MATLAB Is Connected();Show( x );MATLAB Term();

```

### MATLAB JMP Name to MATLAB Name

**構文:** MATLAB name = MATLAB JMP Name To MATLAB Name( JMP name )

**説明:** JMPの変数名を、MATLABの変数命名規則に従ってMATLAB変数名にマップする。

**JMP追加されたバージョン:** バージョン14より前

```jsl

MATLAB Init();MATLAB name = MATLAB JMP Name to MATLAB Name( a b c );Show( MATLAB name );MATLAB Term();

```

### MATLAB Load

**構文:** MATLAB Load( path )

**説明:** .matファイルの変数をMATLABにロードし、変数をJSL連想配列に戻す。

**JMP追加されたバージョン:** 19

```jsl

MATLAB Init();// if .mat file contained: x = 40; y = 'hello';vars = MATLAB Load( "path/to/.mat" );Show( vars << Get Value( "x" ), vars << Get Value( "y" ) );MATLAB Term();

```

### MATLAB Send

**構文:** MATLAB Send( name, &lt;MATLAB Name( name )&gt;, &lt;Named Arguments&gt; )

**説明:** MATLABにデータを送る。引数nameには、数値、文字列、行列、リスト、データテーブルといったデータタイプのJSL変数を指定することができる。

**JMP追加されたバージョン:** バージョン14より前

```jsl

MATLAB Init();x = [1, 2, 3];MATLAB Send( x );dt = Open( "$SAMPLE_DATA/Big Class.jmp" );MATLAB Send( dt );Close( dt );MATLAB Submit( "x" );MATLAB Submit( "dt" );MATLAB Term();

```

### MATLAB Send File

**構文:** MATLAB Send File( filename, &lt;MATLAB Name( name )&gt; )

**説明:** MATLABにデータファイルを送信する。filename引数は、MATLABに送信されるファイルのパス名を示す文字列。

**JMP追加されたバージョン:** バージョン14より前

```jsl

MATLAB Init();MATLAB Send File( "$SAMPLE_DATA/Big Class.jmp" );MATLAB Send File( "$SAMPLE_DATA/Baseball.jmp" );MATLAB Submit( "BigClass" );MATLAB Submit( "Baseball" );MATLAB Term();

```

### MATLAB Submit

**構文:** MATLAB Submit( statements, &lt;Echo(0|1)&gt;, &lt;Expand(0|1)&gt; )

**説明:** MATLABでステートメントをサブミットする。ステートメントは、文字列の値、または文字列の値のリスト。

**JMP追加されたバージョン:** バージョン14より前

```jsl

MATLAB Init();MATLAB Submit( "\[str = 'The quick brown fox jumps over the lazy dog';a = 200;]\" );getStr = MATLAB Get( str );getNum = MATLAB Get( a );Show( getStr, getNum );MATLAB Term();

```

### MATLAB Submit File

**構文:** MATLAB Submit File( path, &lt;Echo(0|1)&gt;, &lt;Expand(0|1)&gt; )

**説明:** path引数によって指定されたファイルにあるステートメントを、MATLABで実行する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

MATLAB Init();MATLAB Submit File( "file containing MATLAB source.m" );MATLAB Term();

```

### MATLAB Term

**構文:** MATLAB Term()

**説明:** MATLABインターフェースを終了する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

MATLAB Init();MATLAB Submit( "\[str = 'The quick brown fox jumps over the lazy dog';]\" );getStr = MATLAB Get( str );Show( getStr );MATLAB Term();

```

### Update MATLAB Dependencies

**構文:** Update MATLAB Dependencies(&lt;Patch(0|1)&gt;)

**説明:** 必要なMATLAB関連ファイルを更新する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

If( Check MATLAB Dependencies(),	Update MATLAB Dependencies(),	Print( "Dependencies are updated" ));

```

