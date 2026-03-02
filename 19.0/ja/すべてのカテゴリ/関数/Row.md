# Row



### As Table

**構文:** dt = As Table( matrix, &lt;matrix2,...&gt; &lt; &lt;&lt;invisible/private&gt;, &lt; &lt;&lt;Column Names(name list) &gt; )

**説明:** 行列をデータテーブルに変換する。オプションの引数invisibleを指定すると、テーブルが表示されない。

**JMP追加されたバージョン:** バージョン14より前

```jsl

As Table( [1 2 3, 4 5 6] );

```

### Col Stored Value

**構文:** y = Col Stored Value( &lt;dt&gt;, xCol, &lt;row=Row()&gt; )

**説明:** 「欠測値のコード」列プロパティを適用せずに、列の値をそのまま戻す。行番号が指定されていない場合は、現在の行が対象となる。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Open( "$SAMPLE_DATA/Equity.jmp" );
:JOB << Set Property( "Missing Value Codes", {"Other"} );
y1 = Col Stored Value( :JOB, 10 );
y2 = Col Stored Value( :JOB, 11 );
y3 = Col Stored Value( :JOB, 14 );
y4 = Col Stored Value( :JOB, 15 );
Show( y1, y2, y3, y4 );

```

### Column

**構文:** y = Column( name|number );y = Column( dataTable, name|number, &lt;"formatted"&gt; )

**説明:** 指定したデータテーブル列への参照を戻す。formattedキーワードを使うことで、値ラベルのような代替値へのアクセスを許可する。

**JMP追加されたバージョン:** バージョン14より前

#### 例 1

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
col4 = Column( 4 );
ht = Column( "height" );
col4[1] + ht[2];

```

#### 例 2

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << run script( "Set Sex Value Labels" );
col = Column( dt, "sex", "formatted" );
Write( "\!n", col[5] );
Write( "\!nData value returned is the formatted value of row 5." );

```

### Column Name

**構文:** name = Column Name( n )

**説明:** 現在のデータテーブルのn番目の列の名前を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Column Name( 4 );

```

### Count

**構文:** y = Count( start, end, s, &lt;n=1&gt; )

**説明:** s段階に分けてstartからendまでの各数字をn回反復させた数列のうち、i番目の値を戻す。iは、Row()関数の値。Count()関数はRow()関数に依存するため、主に計算式での使用に便利。

**JMP追加されたバージョン:** バージョン14より前

```jsl

New Table( "Count Example",
	Add Rows( 12 ),
	New Column( "Count1" ),
	New Column( "Count2" ),
	New Column( "Count3", Set Formula( Count( 0, 6, 4, 1 ) ) )
);
For Each Row(
	:Count1[Row()] = Count( 0, 6, 4, 1 );
	:Count2[Row()] = Count( 0, 6, 3, 2 );
);

```

### Current Data Table

**構文:** dt = Current Data Table( &lt;Project(title|index|box|window)&gt; ); Current Data Table( dt )

**説明:** 現在のテーブルを戻す。またはデータテーブルを指定した場合には、そのデータテーブルを現在のデータテーブルにする。



プロジェクトを指定するには、オプションのProject()引数でtitle、index、display box、またはwindowオブジェクトを記述する。スクリプトがプロジェクト内で実行されていて、プロジェクトの指定をしない場合は、Project(0)を使用する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Current Data Table() << Get Column Names;

```

### Data Table

**構文:** dt = Data Table( name|number )

**説明:** 指定のデータテーブルへの参照を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Open( "$SAMPLE_DATA/Cars.jmp" );
Data Table( 1 );

```

### Dif

**構文:** y = Dif( x, &lt;n=1&gt; )

**説明:** x - Lag( x, n )を戻す。「1階差分」ともいう。Dif()関数はRow()関数に依存して結果を戻すため、データ列の計算式で使用すると便利。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row() = 3;
Dif( :height, 2 );

```

### Dim

**構文:** y = Dim(); y = Dim( dt ); y = Dim( matrix )

**説明:** 現在のデータテーブル、指定のデータテーブル、または行列の次元を含む行ベクトルを戻す。次元とは、行数と列数を指し、この順序でリストされる。

**JMP追加されたバージョン:** 14

```jsl

Dim( [11 22, 33 44, 55 66] );

```

### Get Data Table

**構文:** dt = Get Data Table( &lt;Project(title|index|box|window)&gt;, name|index )

**説明:** 指定のデータテーブルへの参照を戻す。



データテーブルの検出は現在のプロジェクト内のみに限定される。(スクリプトがプロジェクト内で実行されていない場合はプロジェクトはなし。)



プロジェクトを指定するには、オプションのProject()引数でtitle、index、display box、またはwindowオブジェクトを記述する。スクリプトがプロジェクト内で実行されていて、プロジェクトの指定をしない場合は、Project(0)を使用する。

**JMP追加されたバージョン:** 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Open( "$SAMPLE_DATA/Cars.jmp" );
Get Data Table( 1 );

```

### Get Data Table List

**構文:** tableList = Get Data Table List( &lt;Project(title|index|box|window)&gt; )

**説明:** 現在開いているすべてのデータテーブルのリストを戻す。



リストに含まれるものは、現在のプロジェクト内のデータテーブルに限定される。(スクリプトがプロジェクト内で実行されていない場合はプロジェクトはなし。)



プロジェクトを指定するには、オプションのProject()引数でtitle、index、display box、またはwindowオブジェクトを記述する。スクリプトがプロジェクト内で実行されていて、プロジェクトの指定をしない場合は、Project(0)を使用する。

**JMP追加されたバージョン:** 14

#### 例 1

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Open( "$SAMPLE_DATA/Cars.jmp" );
Get Data Table List();

```

#### 例 2

```jsl

project = Open( "$SAMPLE_PROJECTS/Sports.jmpprj" );
Get Data Table List( Project( project ) );

```

### Lag

**構文:** y = Lag( &lt;x&gt;, &lt;n=1&gt; )

**説明:** 引数xのRow() - n番目の値を戻す。Lag()関数はRow()関数に依存して結果を戻すため、データ列の計算式で使用すると便利。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row() = 3;
Lag( :height, 2 );

```

### N Row

**構文:** y = N Row(); y = N Row( dt ); y = N Row( matrix )

**説明:** 現在のデータテーブル、指定のデータテーブル、または行列の行数を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

N Row( [11 22, 33 44] );

```

### N Rows

**構文:** y = N Rows(); y = N Rows( dt ); y = N Rows( matrix )

**説明:** 現在のデータテーブル、指定のデータテーブル、または行列の行数を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

N Rows( [11 22, 33 44] );

```

### N Table

**構文:** n = N Table()

**説明:** 現在開いているデータテーブルの数を戻す。

**JMP追加されたバージョン:** バージョン14より前

#### 例 1

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
N Table();

```

#### 例 2

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Open( "$SAMPLE_DATA/Cars.jmp" );
Open( "$SAMPLE_DATA/Solubility.jmp" );
d = {};
For( i = 1, i <= N Table(), i++,
	d[i] = Data Table( i ) << GetName
);
d;

```

### New Column

**構文:** dc = New Column( name, &lt;"Numeric"|"Character"|"RowState"|"Expression"&gt;, &lt;"Continuous"|"Ordinal"|"Nominal"|"Multiple Response"|"Unstructured Text"|"Vector"|"None"&gt;, &lt;Width( n )|Format(format name, width, precision)&gt;, &lt;Like(:other column)&gt;, &lt;actions&gt; )

**説明:** 現在のデータテーブルに新しい列を作成する。オプションの引数actionsはデータ列がサポートするメッセージ。

**JMP追加されたバージョン:** バージョン14より前

#### Like

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
New Column( "like name", Like( :name ) );

```

#### 単純な例

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
New Column( "example", "Numeric", "Continuous", Width( 5 ), <<Set Each Value( 100 ) );

```

### New Column by Text Matching

**構文:** dc = New Column by Text Matching( Column(:name), Set Regex(), &lt;Output Column Name("Name")&gt;, &lt;Use Result(0 | 1)&gt; )

**説明:** 既存の列に対して正規表現パターンマッチを実行し、新しい列を作成する。

**JMP追加されたバージョン:** 16

```jsl

Open( "$SAMPLE_DATA/Aircraft Incidents.jmp" );
New Column by Text Matching(
	Column( :Narrative Cause ),
	Set Regex( Library( "Words" ), Library( "Time" ), Library( "Units" ) ),
	Output Column Name( "Match Output" ),
	Use Result( 1 )
);

```

### New Table

**構文:** dt = New Table( name, &lt;visibility("private"|"invisible"|"visible")&gt;, &lt;Enable Filter Views(bool)&gt;, &lt;actions&gt; )

**説明:** 新しいデータテーブルを作成する。"Invisible"を指定すると、データテーブルは非表示になるが、JMPホームウィンドウにはリストされる。"Private"を指定すると、テーブルが完全に非表示になる。デフォルトの"Visible"を使用すると、通常のテーブルが作成され、表示され、JMPホームウィンドウにもリストされる。オプションのactions引数には、データテーブルがサポートするメッセージならどれでも使用できる。

**JMP追加されたバージョン:** バージョン14より前

```jsl

New Table( "Little Class",
	Add Rows( 3 ),
	New Column( "name", Character, Nominal, Set Values( {"KATIE", "LOUISE", "JANE"} ) ),
	New Column( "age", Nominal, Set Values( [12, 13, 13] ) ),
	New Column( "weight", Continuous, Set Values( [95, 123, 74] ) )
);

```

### Row

**構文:** y = Row(); Row() = y

**説明:** データテーブル内の現在の行を戻す。左辺値として使用し、現在の行を設定することも可能。値0を割り当てると現在の行をリセットできる。

**JMP追加されたバージョン:** バージョン14より前

#### 行のリセット

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Add Rows( 5 );
Show( Row() );
Row() = 0;

```

#### 行の指定

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Row() = 3;
:height * :weight;

```

### Sequence

**構文:** y = Sequence( start, end, &lt;incr=1&gt;, &lt;n=1&gt; )

**説明:** startから始まり、incrを増分としてendまで続く番号のシーケンスのうち、Row()番目の項目を戻す。シーケンスの各番号は、n回繰り返される。Sequence()関数は、Row()に依存して結果を戻すため、データ列の計算式で使用すると便利。シーケンスをJSL行列として作成する場合は、Index()を参照のこと。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Row() = 3;
Sequence( 1, 9, 2 );

```

### Subscribe to Data Table List

**構文:** aSub = Subscribe to Data Table List( &lt;subscriber name | ""&gt;, &lt;OnOpen(fn) | OnClose(fn) | On Rename(fn)&gt;)

**説明:** 新しいデータテーブルが追加されたときや、閉じられたときに通知されるようにデータテーブルに登録する。

**JMP追加されたバージョン:** バージョン14より前

#### 例 1

```jsl

f1 = Function( {dtab},
	dtname = (dtab << getname());
	Print( "opening" );
	Print( dtname );
);
f2 = Function( {dtab},
	dtname = (dtab << getname());
	Print( "closing" );
	Print( dtname );
);
aSub = Subscribe to Data Table List( , OnOpen( f1 ) );
Subscribe to Data Table List( aSub, OnClose( f2 ) );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
Close( dt );

```

#### 例 2

```jsl

f1 = Function( {dtab},
	dtname = (dtab << getname());
	Print( "opening" );
	Print( dtname );
);
f2 = Function( {dtab, b},
	dtname = (dtab << getname());
	Print( "renaming ", b, " to ", dtname );
);
aSub = Subscribe to Data Table List( , OnOpen( f1 ) );
Subscribe to Data Table List( aSub, OnRename( f2 ) );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
dt << setname( "xxx" );

```

### Subscript

**構文:** y = x[i]; y = m[row, col]; y = Subscript( x, i )

**説明:** 添え字指定が可能なオブジェクトのi番目の値を戻す。値は、データテーブルの列、行列、リスト、またはレポートの表示要素。

**JMP追加されたバージョン:** バージョン14より前

```jsl

{11, 12, 13}[2];

```

### Suppress Formula Eval

**構文:** Suppress Formula Eval( &lt;suppress=1&gt; )

**説明:** 引数がゼロ以外の場合、すべてのデータテーブル内で計算式の評価を抑制する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Suppress Formula Eval( 1 );

```

### Unsubscribe to Data Table List

**構文:** aSub = Unsubscribe to Data Table List(&lt;subscriber name&gt;, &lt;"OnOpen" | "OnClose" | "OnRename" | "ALL"&gt;)

**説明:** コマンド"subscribe to data table list"で追加されたデータテーブルリストから登録を削除する。

**JMP追加されたバージョン:** バージョン14より前

#### 例 1

```jsl

f1 = Function( {dtab},
	dtname = (dtab << getname());
	Print( "opening" );
	Print( dtname );
);
f2 = Function( {dtab},
	dtname = (dtab << getname());
	Print( "closing" );
	Print( dtname );
);
aSub = Subscribe to Data Table List( , OnOpen( f1 ) );
Subscribe to Data Table List( aSub, OnClose( f2 ) );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
Close( dt );
Unsubscribe to Data Table List( aSub, "on close" );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );

```

#### 例 2

```jsl

f1 = Function( {dtab},
	dtname = (dtab << getname());
	Print( "opening" );
	Print( dtname );
);
f2 = Function( {dtab},
	dtname = (dtab << getname());
	Print( "closing" );
	Print( dtname );
);
aSub = Subscribe to Data Table List( , OnOpen( f1 ) );
Subscribe to Data Table List( aSub, OnClose( f2 ) );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
Close( dt );
Unsubscribe to Data Table List( aSub, "all" );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
Close( dt );

```

