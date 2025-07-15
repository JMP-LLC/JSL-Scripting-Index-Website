# Python Connection



## 項目のメッセージ

### Create JPIP CMD

**構文:** obj &lt;&lt; Create JPIP CMD()

**説明:** Pythonのpipコマンドの、jpipコマンドラインラッパースクリプトを作成する。ディレクトリ選択ダイアログが表示されるので、生成されるスクリプトの保存先を指定する。このスクリプトはpipの全機能を提供すると同時に、JMPの隔離されたPython環境に対して必要な環境変数を正しく設定する。

**JMP追加されたバージョン:** 18

**例 1**

```jsl

Names Default To Here( 1 );
// install numpy and pandas packages
conn = Python Connect();
conn << Create JPIP CMD();

```

**例 2**

```jsl

Names Default To Here( 1 );
Python Create JPIP CMD();

```

### Disconnect

**構文:** obj &lt;&lt; Disconnect

**説明:** 注: この機能は、JMP 18で廃止されました。指定しても処理を行いません。

**JMP追加されたバージョン:** 14

### Execute

**構文:** list = obj &lt;&lt; Execute( { list of Inputs }, { list of Outputs }, statements &lt; , echo( 1 | 0 ) &gt; )

**説明:** 入力値のリストを送り、ステートメントを実行し、結果のリストを戻す。オプションのecho()パラメータのデフォルト値は真(true)。echoパラメータは、Pythonソースのログへのエコーを制御する。True (1)はソースのエコーを有効にし、0はログへのエコーを抑制する。

**JMP追加されたバージョン:** 14

**例 1**

```jsl

Names Default To Here( 1 );
PythonConnection = Python Connect();
// NOTE: a,d,x,z must be declared before Execute()
// as this is the location the results will be written.
a = "abcdef";
d = 3.141;
x = 0;
z = 0;
v = [1 0 0, 0 1 0, 0 0 1];
// pi, e, phi, c, Plank's, Faraday, 345 triangle
m = [3.141 2.718 1.618,
2.997 6.626 9.648,
3 4 5];
ml = PythonConnection << Execute(
	{v, m, a, d},
	{x, z, a, d},
	"\[
import numpy as np
a = np.multiply(v, m) # matrix product
d = np.divide(v, m) # matrix division
z = np.multiply(m, np.linalg.inv(v)) # m * inv(v) called Left division
x = np.multiply(np.linalg.inv(m), v) # inv(m) * v called right division
	]\"
);
Show( v, m, ml, x, z, a, d );

```

**例 2**

```jsl

Names Default To Here( 1 );
PythonConnection = Python Connect();
x1 = 0;
x2 = 0;
y1 = 0;
y2 = 0;
z1 = 0;
z2 = 0;
v = [1 0 0, 0 1 0, 0 0 1];
// pi, e, phi, c, Plank's, Faraday, 345 triangle
m = [3.141 2.718 1.618,
2.997 6.626 9.648,
3 4 5];
ml = Python Execute(
	{v, m},
	{x1, x2, y1, y2, z1, z2},
	"\[
import numpy as np
x1 = np.multiply(v, m) # matrix product
print('x1=', x1)
x2 = np.divide(v, m) # matrix division
print('x2=', x2)
y1 = np.dot(v, m) # dot product of v and m
print('y1=', y1)
y2 = np.dot(m, v) # dot product of m and v
print('y2=', y2)
z1 = np.inner(v, m) # inner product of v and m
print('z1=', z1)
z2 = np.inner(m, v) # innder product of m and v
print('z2=', z2)
		]\"
);
Show( v, m, ml, x1, x2, y1, y2, z1, z2 );

```

### Get

**構文:** y = obj &lt;&lt; Get( name )

**説明:** Pythonからデータを取得する。引数nameには、数値、文字列、行列、リスト、ディクショナリ、データテーブル、データフレーム、日付時間、numpy.datetime64といったデータタイプのものを指定することができる。

**JMP追加されたバージョン:** 14

**Datetime**

```jsl

Names Default To Here( 1 );

PythonConnection = Python Connect();
date1 = As Date( Today() );
PythonConnection << Set( date1 );
date2 = PythonConnection << Get( date1 );
Show( date1, date2 );

```

**numpy.datetime64**

```jsl

Names Default To Here( 1 );

PythonConnection = Python Connect();
PythonConnection << Install Packages( "numpy" );
PythonConnection << Submit( "import numpy as np" );
PythonConnection << Submit( "datetime64 = np.datetime64('1989-10-05')" );
numpy_datetime = PythonConnection << Get( datetime64 );
Show( numpy_datetime );

```

**例 1**

```jsl

Names Default To Here( 1 );

PythonConnection = Python Connect();
x1 = [1, 2, 3];
PythonConnection << Set( x1 );
x2 = PythonConnection << Get( x1 );
Show( x1, x2 );
dt1 = Open( "$SAMPLE_DATA/Big Class.jmp" );
PythonConnection << Set( dt1 );
dt2 = PythonConnection << Get( dt1 );
dt2 << New Data View;
Close( dt1 );

```

### Get Version

**構文:** version = obj &lt;&lt; Get Version

**説明:** 現在接続しているPythonのバージョン番号を戻す。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
PythonConnection = Python Connect();
version = PythonConnection << Get Version;
Show( version );

```

### Install Packages

**構文:** obj &lt;&lt; Install Packages( packages )

**説明:** これは、Pythonパッケージを、JMPのsite-packagesディレクトリにインストールするラッパー。シンプルなパッケージインストール以外の処理を行うには、Python Create JPIP CMD()を参照して、Directory Pick()で選択されたディレクトリ内にコマンドラインpipラッパースクリプトを作成する。また、[スクリプトの索引]のPythonカテゴリにあるjmputils.jpipを参照し、JMPのPythonスクリプトウィンドウからインストールを実行することもできる。

**JMP追加されたバージョン:** 18

**例 1**

```jsl

Names Default To Here( 1 );
// install numpy and pandas packages
conn = Python Connect();
conn << Install Packages( "numpy pandas" );

```

**例 2**

```jsl

Names Default To Here( 1 );
// install numpy and pandas packages
Python Install Packages( "numpy pandas" );

```

**例 3**

```jsl

Names Default To Here( 1 );
// install numpy and pandas packages
Python Install Packages( {"numpy", "pandas"} );

```

### Is Connected

**構文:** x = obj &lt;&lt; Is Connected

**説明:** 注: この関数は、JMP 18で廃止された。常に1を戻す。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
PythonConnection = Python Connect();
x = PythonConnection << Is Connected;
Show( x );

```

### JMP Name To Python Name

**構文:** Python Name = PythonConnection &lt;&lt; JMP Name To Python Name( JMP name )

**説明:** JMPの変数名を、Pythonの変数命名規則に従ってPythonの変数名にマップする。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
PythonConnection = Python Connect();
Python Name = PythonConnection << JMP Name To Python Name( a b c );
Show( Python Name );

```

### Reset

**構文:** PythonConnection &lt;&lt; Reset

**説明:** Reset the shared Python environment.

**JMP追加されたバージョン:** 19

```jsl

Names Default To Here( 1 );
PythonConnection = Python Connect();
pi = 3.1415927;
PythonConnection << Send( pi );
PythonConnection << Submit( "print(pi)" );
PythonConnection << Reset();
// will show error, pi not defined
PythonConnection << Submit( "print(pi)" );

```

### Send

**構文:** y = obj &lt;&lt; Send( name, &lt;Python Name( name )&gt; )

**説明:** Pythonにデータを送る。引数nameには、数値、文字列、行列、リスト、データテーブル、日付のいずれかを表すものを指定する。

**JMP追加されたバージョン:** 14

**Date**

```jsl

Names Default To Here( 1 );

PythonConnection = Python Connect();
date = As Date( Today() );
PythonConnection << Send( date );
PythonConnection << Submit( "print(date)" );

```

**例 1**

```jsl

Names Default To Here( 1 );
PythonConnection = Python Connect();
x = [1, 2, 3];
PythonConnection << Send( x );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
PythonConnection << Send( dt );
PythonConnection << Submit( "print(x)" );
PythonConnection << Submit( "print(dt)" );

```

### Send File

**構文:** y = obj &lt;&lt; Send File( filename, &lt;Python Name( name )&gt; )

**説明:** Pythonにデータファイルを送る。引数filenameは、Pythonに送られるファイルのパス名。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
PythonConnection = Python Connect();
PythonConnection << Send File( "$SAMPLE_DATA/Big Class.jmp" );
dtname = "$SAMPLE_DATA/Baseball.jmp";
PythonConnection << Send File( dtname );
PythonConnection << Submit( "print(Big_Class)" );
PythonConnection << Submit( "print(Baseball)" );

```

### Set

**構文:** y = obj &lt;&lt; Set( name, &lt;Python Name( name )&gt; )

**説明:** Pythonにデータを送る。引数nameには、数値、文字列、行列、リスト、データテーブル、日付のいずれかを表すものを指定する。

**JMP追加されたバージョン:** 14

**Date**

```jsl

Names Default To Here( 1 );

PythonConnection = Python Connect();
date = As Date( Today() );
PythonConnection << Set( date );
PythonConnection << Submit( "print(date)" );

```

**例 1**

```jsl

Names Default To Here( 1 );
PythonConnection = Python Connect();
x = [1, 2, 3];
PythonConnection << Set( x );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
PythonConnection << Set( dt );
PythonConnection << Submit( "print(x)" );
PythonConnection << Submit( "print(dt)" );

```

### Submit

**構文:** obj &lt;&lt; Submit( statements &lt; , echo( 1 | 0 ) &gt; )

**説明:** Pythonにステートメントをサブミットする。ステートメントは、文字列の値、または文字列の値のリスト。オプションのecho()パラメータのデフォルトはTrue。echoパラメータは、Pythonソースのログへのエコーを制御する。True (1)はソースのエコーを有効にし、0はログへのエコーを抑制する。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
PythonConnection = Python Connect();
PythonConnection << Submit(
	"\[
str = 'The quick brown fox jumps over the lazy dog';
a = 200;
]\"
);
getStr = PythonConnection << Get( str );
getNum = PythonConnection << Get( a );
Show( getStr, getNum );

```

### Submit File

**構文:** obj &lt;&lt; Submit File( path )

**説明:** path引数によって指定されたファイルにあるステートメントを、Pythonで実行する。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
PythonConnection = Python Connect();
PythonConnection << Submit File( "some_Python_source.py" );

```

