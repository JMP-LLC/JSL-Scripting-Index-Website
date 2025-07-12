# Python



## 関数

### Python Connect

**構文:** PythonConnection = Python Connect ()

**説明:** Python接続のスクリプト可能オブジェクトを戻す。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
PythonConnection = Python Connect();
version = PythonConnection << Get Version;
Show( version );

```

### Python Create JPIP CMD

**構文:** Python Create JPIP CMD()

**説明:** Pythonのpipコマンドの、jpipコマンドラインラッパースクリプトを作成する。ディレクトリ選択ダイアログが表示されるので、生成されるスクリプトの保存先となるディレクトリを指定する。このスクリプトはpipの全機能を提供すると同時に、JMPの隔離されたPython環境に対して必要な環境変数を正しく設定する。

**JMP追加されたバージョン:** 18

**例 1**

```jsl

Names Default To Here( 1 );
Python Create JPIP CMD();

```

**例 2**

```jsl

Names Default To Here( 1 );
// install numpy and pandas packages
conn = Python Connect();
conn << Create JPIP CMD();

```

### Python Execute

**構文:** Python Execute( { list of Inputs }, { list of Outputs }, statements < , echo( 1 | 0 ) > )

**説明:** 入力値のリストを送り、ステートメントを実行し、結果のリストを戻す。オプションのecho()パラメータのデフォルト値はTrue。echoパラメータは、Pythonソースのログへのエコーを制御する。True (1)はソースのエコーを有効にし、0はログへのエコーを抑制する。

**JMP追加されたバージョン:** 14

**例 1**

```jsl

Names Default To Here( 1 );

a = "abcdef";
d = 3.141;
x = 0;
z = 0;
v = [1 0 0, 0 1 0, 0 0 1];
// pi, e, phi, c, Plank's, Faraday, 345 triangle
m = [3.141 2.718 1.618,
2.997 6.626 9.648,
3 4 5];
ml = Python Execute(
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

x1 = 1;
x2 = 2;
y1 = 1;
y2 = 2;
z1 = 1;
z2 = 2;
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

### Python Get

**構文:** y = Python Get( name )

**説明:** Pythonからデータを取得する。引数nameには、数値、文字列、行列、リスト、ディクショナリ、データテーブル、データフレーム、日付時間、numpy.datetime64といったデータタイプのものを指定することができる。

**JMP追加されたバージョン:** 14

**Datetime**

```jsl

Names Default To Here( 1 );

date1 = As Date( Today() );
Python Send( date1 );
date2 = Python Get( date1 );
Show( date1, date2 );

```

**numpy.datetime64**

```jsl

Names Default To Here( 1 );

Python Install Packages( "numpy" );
Python Submit( "import numpy as np" );
Python Submit( "datetime64 = np.datetime64('1989-10-05')" );
numpy_datetime = Python Get( datetime64 );
Show( numpy_datetime );

```

**例 1**

```jsl

Names Default To Here( 1 );

x1 = {1, 2, 3};
Python Send( x1 );
x2 = Python Get( x1 );
Show( x1, x2 );

```

### Python Get Version

**構文:** version = Python Get Version()

**説明:** JMPのPythonインターフェースで使用されているPythonのバージョン番号を戻す。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
version = Python Get Version();
Show( version );

```

### Python Init

**構文:** PythonConnection = Python Init( )

**説明:** 注: この関数は、JMP 18で廃止された。JMP18で同等の処理は、Python Connect()で行える。

**JMP追加されたバージョン:** 14

**例 1**

```jsl

Names Default To Here( 1 );

Python Init();
Python Submit( "\[
str = 'The quick brown fox jumps over the lazy dog';
]\" );
getStr = Python Get( str );
Show( getStr );

```

**例 2**

```jsl

Names Default To Here( 1 );

PythonConnection = Python Init();
PythonConnection << Submit( "\[
str = 'The quick brown fox jumps over the lazy dog';
]\" );
getStr = Python Get( str );
Show( getStr );

```

### Python Install Packages

**構文:** Python Install Packages( packages )

**説明:** これは、Pythonパッケージを、JMPのsite-packagesディレクトリにインストールするラッパー。シンプルなパッケージインストール以外の処理を行うには、Python Create JPIP CMD()を参照して、Directory Pick()で選択されたディレクトリ内にコマンドラインpipラッパースクリプトを作成する。また、[スクリプトの索引]のPythonカテゴリにあるjmputils.jpipを参照し、JMPのPythonスクリプトウィンドウからインストールを実行することもできる。

**JMP追加されたバージョン:** 18

**例 1**

```jsl

Names Default To Here( 1 );
// install numpy and pandas packages
Python Install Packages( "numpy pandas" );

```

**例 2**

```jsl

Names Default To Here( 1 );
// install numpy and pandas packages
Python Install Packages( {"numpy", "pandas"} );

```

**例 3**

```jsl

Names Default To Here( 1 );
// install numpy and pandas packages
conn = Python Connect();
conn << Install Packages( "numpy pandas" );

```

### Python Is Connected

**構文:** connected = Python Is Connected()

**説明:** 注: この関数は、JMP 18で廃止された。常に1を戻す。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
x = Python Is Connected();
Show( x );

```

### Python JMP Name to Python Name

**構文:** Python name = Python JMP Name To Python Name( JMP name )

**説明:** JMPの変数名を、Pythonの変数命名規則に従ってPythonの変数名にマップする。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
Python name = Python JMP Name to Python Name( a b c );
Show( Python name );

```

### Python Reset

**構文:** Python Reset()

**説明:** Resets the shared Python environment, primarily clearing all references to objects. This does not change the import cache of imported modules. This is a limitation of the Python environment itself.  Modules that load shared libraries cannot be unloaded by the running process. To reload pure Python code, see the Python.org documentation on importlib reload().

**JMP追加されたバージョン:** 19

```jsl

Names Default To Here( 1 );
pi = 3.1415927;
Python Send( pi );
Python Submit( "print(pi)" );
Python Reset();
// will show error, pi not defined
Python Submit( "print(pi)" );

```

### Python Send

**構文:** Python Send( name, <Python Name( name ) | "as_name" > )

**説明:** Sends data to Python, where the name argument can represent any of the following JMP data types ( numeric | string | matrix | list | data table | data table column | date ).

**JMP追加されたバージョン:** 14

**データテーブル**

```jsl

Names Default To Here( 1 );

x = {1, 2, 3};
Python Send( x );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Python Send( dt );
Python Submit( "print(x)" );
Python Submit( "print(dt)" );

```

**列**

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Python Send( dt:weight );
Python Submit( "print(weight)" );

```

**日付**

```jsl

Names Default To Here( 1 );

date = As Date( Today() );
Python Send( date );
Python Submit( "print(date)" );

```

### Python Send File

**構文:** Python Send File( filename, <Python Name( name )> )

**説明:** Pythonにデータファイルを送る。引数filenameは、Pythonに送られるファイルのパス名。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );

Python Send File( "$SAMPLE_DATA/Big Class.jmp" );
Python Send File( "$SAMPLE_DATA/Baseball.jmp" );
Python Submit( "print(Big_Class)" );
Python Submit( "print(Baseball)" );

```

### Python Submit

**構文:** Python Submit( statements < , echo( 1 | 0 ) > )

**説明:** Pythonにステートメントをサブミットする。ステートメントは、文字列の値、または文字列の値のリスト。オプションのecho()パラメータのデフォルトは1。echoパラメータは、Pythonソースのログへのエコーを制御する。True (1)はソースのエコーを有効にし、0はログへのエコーを抑制する。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
Python Submit( "\[
str = 'The quick brown fox jumps over the lazy dog'
a = 200]\" );
getStr = Python Get( str );
getNum = Python Get( a );
Show( getStr, getNum );

```

### Python Submit File

**構文:** Python Submit File( path )

**説明:** path引数によって指定されたファイルにあるステートメントを、Pythonで実行する。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
Python Submit File( "some_Python_source.py" );

```

### Python Term

**構文:** Python Term()

**説明:** 注: この機能は、JMP 18で廃止されました。指定しても処理を行いません。

**JMP追加されたバージョン:** 14

