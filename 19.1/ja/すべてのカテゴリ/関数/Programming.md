# Programming



### Add Custom Functions

**構文:** Add Custom Functions({f1, f2, ...} | f)

**説明:** スクリプトと計算式エディタで使用できるカスタム関数のリストを定義し、リストを環境に追加する。

**JMP追加されたバージョン:** 14

```jsl

myAdd = New Custom Function( "custom", "Add", Function( {x, y}, x + y - 1 ) );mySub = New Custom Function( "custom", "Sub", Function( {x, y}, x - y + 1 ) );Add Custom Functions( {myAdd, mySub} );

```

### As Boolean

**構文:** b = As Boolean( x )

**説明:** 式を評価し、ブール値を戻す。

**JMP追加されたバージョン:** 14

```jsl

x = 45;b = As Boolean( x > 2 );Show( b );

```

### As Column

**構文:** y = :name; y = dataTable:name; y = As Column( name ); y = As Column( dataTable, name )

**説明:** 指定したデータテーブルまたは現在のデータテーブル内の指定の列にアクセスする。そのような列またはデータテーブルが見つからない場合はエラーを戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

exdt = Open( "$SAMPLE_DATA/Big Class.jmp" );exdt:height[1] + :height[2] + As Column( "height" )[3];

```

### As Constant

**構文:** y = As Constant( x )

**説明:** 引数の式を評価して、その評価後には変化しない定数値を戻す。

**JMP追加されたバージョン:** バージョン14より前

**例 1**

```jsl

New Table( "As Constant Demo Table 1",	Add Rows( 10 ),	New Column( "Non-Constant", Formula( Random Uniform() ) ),	New Column( "Constant", Formula( As Constant( Random Uniform() ) ) ));

```

**例 2**

```jsl

New Table( "As Constant Demo Table 2",	Add Rows( 1000 ),	New Column( "What's on Your Desktop?",		"character",		Formula(			As Constant( xFiles = Files In Directory( "$Desktop" ) );			iR = Row();			If( iR <= N Items( xFiles ),				xFiles[iR],				"---"			);		)	));

```

**例 3**

```jsl

For( i = 1, i <= 10, i++,	x = 2;	y = 100;	z = As Constant( x + y );	x *= i;	y /= i;	Show( i, x + y, z ););

```

### As Global

**構文:** y = ::name; y = As Global( name )

**説明:** 指定のグローバル変数にアクセスする。そのようなグローバル変数が存在しない場合はエラーを戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

::ex = 23;Local( {ex = 12}, Eval List( {ex, ::ex, As Global( "ex" )} ) );

```

### As List

**構文:** y = As List( matrix )

**説明:** 行列をリストに変換して戻す。行列に複数の列がある場合は、Matrix演算子のように、各行を1つのリストとしたリストのリストを作成する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

As List( [11 22 33, 44 55 66] );

```

### As Name

**構文:** y = As Name( s )

**説明:** 文字列を名前に変換する。または文字列のリストを名前のリストに変換する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt:(As Name( "height" ))[3];

```

### As Namespace

**構文:** asns = As Namespace( ns )

**説明:** 指定の名前空間にアクセスする。そのような名前空間が存在しない場合はエラーを戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

ns = New Namespace(	"complex");As Namespace( ns );

```

### As Root

**構文:** y = :::name; y = As Root( name )

**説明:** 指定されたルートスコープの変数にアクセスする。指定されたルートスコープの変数が存在しない場合は、エラーを発生させる。

**JMP追加されたバージョン:** 15

```jsl

::: ex = 23;Local( {ex = 12}, Eval List( {ex, ::: ex, As Global( "ex" )} ) );

```

### As Scoped

**構文:** y = namespace:variable; y = As Scoped( namespace, variable )

**説明:** 指定されたスコープの変数にアクセスする。そのような変数が存在しない場合はエラーを戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Here:z = 23.5;As Scoped( Here, z );

```

### Associative Array

**構文:** y = Associative Array( {{key1, value1}, ...} ); y = Associative Array( keys, values )

**説明:** 連想配列(「辞書」または「ハッシュマップ」ともいう)を作成する。引数を2つ指定する場合、keyおよびvalueとしてリスト、行列、またはデータテーブル列が指定できる。

**JMP追加されたバージョン:** バージョン14より前

```jsl

ex = Associative Array( {"red", "blue"}, {1, 2} );ex["green"] = 3;ex << get contents;

```

### Choose Closest

**構文:** Choose Closest(source string, {canonical strings...}, &lt;Ignore Case(ignore=1|0)&gt;, &lt;Ignore Nonprintable(ignore=1|0)&gt;, &lt;Ignore Whitespace(ignore=1|0)&gt;, &lt;Max Edit Count(count)&gt;, &lt;Max Edit Ratio([0..1])&gt;, &lt;Min String Length(&lt;count=3&gt;)&gt;, &lt;Replace Unmatched(replace=0|1)&gt;, &lt;Unmatched Value(&lt;value=""&gt;)&gt;)

**説明:** 指定のルールに従って最も近い文字列を選択し、戻す。

デフォルトでは大文字/小文字は無視される。Ignore Caseにより指定できる。

デフォルトでは印刷不可能な文字は無視される。Ignore Nonprintableにより指定できる。

デフォルトではスペースは無視される。Ignore Whitespaceにより指定できる。

デフォルトでは、マッチするものを見つける際に文字の変更はできない。

	編集できる回数を制御するには、Max Edit Countを使う。

	変更可能な割合(元の文字列に占める文字数の割合)を制御するには、Max Edit Ratioを使う。

	設定が両方指定されている場合は両方が適用される。

デフォルトでは2文字以下の文字列はマッチングされない。この設定を変更するには、Min String Lengthを使う。

マッチしない文字列

	デフォルトでは、与えられた規則の中でマッチする正の規文字列がない場合は、元の文字列が戻される。

	元の文字列を戻すかどうかを指定するには、Replace Unmatchedを使う。

	戻す値を指定するには、Unmatchedを使う。

**JMP追加されたバージョン:** 15

#### Unmatched

```jsl

Choose Closest( "MARTHA", {"Martha"}, Ignore Case( 0 ), Unmatched() );

```

#### 句読点を維持する

```jsl

Choose Closest( "MARTHA_", {"MARTHA"}, Ignore Punctuation( 0 ) );

```

#### 文字列を選択し、編集は行わない

```jsl

Choose Closest( "MARTHA_", {"Martha", "MARY"} );

```

#### 編集を許可する

```jsl

Choose Closest( "MARTA", {"MARTHA"}, Max Edit Count( 2 ) );

```

### Class Exists

**構文:** nsexists = Class Exists( class name )

**説明:** 引数nameに指定されたクラスが存在する場合は1、そうでない場合は0を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Define Class(	"complex",	real = 0;	imag = 0;	_init_ = Method( {a, b},		real = a;		imag = b;	);	Add = Method( {y},		New Object( complex( real + y:real, imag + y:imag ) )	);	Sub = Method( {y},		New Object( complex( real - y:real, imag - y:imag ) )	);	Mul = Method( {y},		New Object( complex( real * y:real - imag * y:imag, imag * y:real + real * y:imag ) )	);	Div = Method( {y},		t = New Object( complex( 0, 0 ) );		mag2 = y:Magsq();		t:real = real * y:real + imag * y:imag;		t:imag = imag * y:real + real * y:imag;		t:real = t:real / mag2;		t:imag = t:imag / mag2;		t;	);	Magsq = Method( {},		real * real + imag * imag	);	Mag = Method( {},		Sqrt( real * real + imag * imag )	);	_to string_ = Method( {},		Char( real ) || " + " || Char( imag ) || "i"	);	_show_ = _to string_;);cl = New Object( complex( 1, 2 ) );clexists = Class Exists( cl );Show( clexists );cl << Delete;Delete Classes( "complex" );

```

### Clear Globals

**構文:** Clear Globals( &lt; varname, ... &gt; )

**説明:** 現在定義されているすべてのグローバル変数の値をクリアする。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Clear Globals();

```

### Clear Log

**構文:** Clear Log()

**説明:** ログウィンドウをクリアする。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Clear Log();

```

### Clear Symbols

**構文:** Clear Symbols( &lt; varname, ... &gt; )

**説明:** 現在定義されているすべての記号をクリアする。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Clear Symbols();

```

### Close Log

**構文:** Close Log()

**説明:** ログウィンドウを閉じる。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Close Log();Show( Is Log Open() );

```

### Define Class

**構文:** Define Class("class name", &lt;Base Class{ "base class name", ... }&gt;, &lt;Show( All( boolean ) | ( Members( boolean ) | Methods( boolean ) | Functions( boolean ) )+ )&gt;, { method* | member* | function* } )

**説明:** 新しいクラスを定義する。

**JMP追加されたバージョン:** 14

```jsl

Define Class(	"complex",	real = 0;	imag = 0;	_init_ = Method( {a, b},		real = a;		imag = b;	);	Add = Method( {y},		New Object( complex( real + y:real, imag + y:imag ) )	);	Sub = Method( {y},		New Object( complex( real - y:real, imag - y:imag ) )	);	Mul = Method( {y},		New Object( complex( real * y:real - imag * y:imag, imag * y:real + real * y:imag ) )	);	Div = Method( {y},		t = New Object( complex( 0, 0 ) );		mag2 = y:Magsq();		t:real = real * y:real + imag * y:imag;		t:imag = imag * y:real + real * y:imag;		t:real = t:real / mag2;		t:imag = t:imag / mag2;		t;	);	Magsq = Method( {},		real * real + imag * imag	);	Mag = Method( {},		Sqrt( real * real + imag * imag )	);	_to string_ = Method( {},		Char( real ) || " + " || Char( imag ) || "i"	);	_show_ = _to string_;);cl = New Object( complex( 1, 2 ) );cl << Delete;Delete Classes( complex );

```

### Delete Classes

**構文:** Delete Classes( &lt;Force( boolean )&gt;, &lt;class reference, ...&gt; )

**説明:** すべてのクラスの定義、もしくは指定した1つまたは複数のクラスの定義を削除する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Define Class(	"aa",	{_init_ = Method( {} ), x = 1, m1 = Method( {a, b}, a * b )});Define Class(	"bb",	{_init_ = Method( {} ), y = 1, m2 = Method( {a, b}, a / b )});lcaa = New Object( aa() );lcbb = New Object( bb() );lcl = Get Classes();Show( lcl );Show Classes();Clear Symbols( lcl );lcaa << Delete;lcbb << Delete;Delete Classes( "aa", "bb" );Show Classes();

```

### Delete Globals

**構文:** Delete Globals( &lt; varname, ... &gt; )

**説明:** 現在定義されているグローバル変数とその値をすべて削除する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Delete Globals();

```

### Delete Namespaces

**構文:** Delete Namespaces( &lt;Force( boolean )&gt;, &lt;namespace reference, ...&gt; )

**説明:** すべての名前空間、もしくは指定した1つまたは複数の名前空間を削除する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

nsaa = New Namespace(	"aa",	{		x = 1	});nsbb = New Namespace(	"bb",	{		y = 1	});Show Namespaces();Delete Namespaces( nsaa, nsbb );Show Namespaces();

```

### Delete Symbols

**構文:** Delete Symbols( &lt; varname, ... &gt; )

**説明:** 現在定義されているすべての記号とその値を削除する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Delete Symbols();

```

### Eval

**構文:** y = Eval( x )

**説明:** 引数を評価し、その結果を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Eval( Expr( 1 + 2 ) );

```

### Eval Insert

**構文:** y = Eval Insert( string, &lt;startChar="^"&gt;, &lt;endChar=startChar&gt; )

**説明:** startChar/endCharのペアで囲まれた部分文字列を探し、その部分文字列を、それを評価した値で置き換える。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Eval Insert( "Today is ^As Date( Today())^" );

```

### Eval Insert Into

**構文:** Eval Insert Into( l_string, &lt;startChar="^"&gt;, &lt;endChar=startChar&gt; )

**説明:** startChar/endCharのペアで囲まれた部分文字列を探し、その部分文字列を、それを評価した値で置き換える。引数l_stringは、置換後の文字列に置き換えられる。

**JMP追加されたバージョン:** バージョン14より前

```jsl

ex = "Today is ^As Date( Today())^";Eval Insert Into( ex );ex;

```

### Eval List

**構文:** y = Eval List( list )

**説明:** リスト内のすべての項目の式を評価した後、その評価後のリストを戻す。

**JMP追加されたバージョン:** バージョン14より前

**例 1**

```jsl

Eval List( {1 + 2, 3 + 4} );

```

**例 2**

```jsl

x = 5;y = 10;Eval List( {x, y} );

```

### Exit

**構文:** Quit(&lt;"No Save"&gt;); Exit(&lt;"No Save"&gt;)

**説明:** JMPを終了する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

If(	New Window( "Exit() example",		<<Type( "Modal" ),		Text Box( "Shut down JMP?" ),		H List Box( Button Box( "OK" ), Button Box( "Cancel" ) )	)["Button"] == 1, /*OK==1*/Exit(), /*cancel==-1*/"Good choice.");

```

### First

**構文:** y = First( x1, x2, ... )

**説明:** 各引数を評価して最初の引数の値を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

First( 11, 22 );

```

### Function

**構文:** y = Function( {arg1=val1, ...}, &lt;{local1=val1, ...}&gt;, expr )

**説明:** 関数を定義する。複数の引数arg1,...、それらのデフォルト値val1,...、およびオプションでローカル変数を指定できる。引数のデフォルト値を設定した場合は、関数を呼ぶときにそれらの引数の指定を省略できる。Return()を使用した場合、そこで評価された値が関数の戻り値として戻される。

**JMP追加されたバージョン:** バージョン14より前

**例 1**

```jsl

exsqr = Function( {x}, x * x );exsqr( 5 );

```

**例 2**

```jsl

// y is an optional argumentexmul = Function( {x, y = 3}, x * y );a = exmul( 5 );b = exmul( 5, 10 );Show( a, b );

```

**例 3**

```jsl

posorneg = Function( {x},	{},	If(		x > 0, Return( "positive" ),		x == 0, Return( "zero" ),		Return( "negative" )	));posorneg( -5.5 );

```

### Get Class Names

**構文:** Get Class Names( &lt; &lt;class reference&gt;, ... &gt; )

**説明:** 現在定義されているすべてのクラスの名前をリストで戻す。

**JMP追加されたバージョン:** 14

```jsl

Define Class(	"aa",	{_init_ = Method( {} ), x = 1, m1 = Method( {a, b}, a * b )});Define Class(	"bb",	{_init_ = Method( {} ), y = 1, m2 = Method( {a, b}, a / b )});lcaa = New Object( aa() );lcbb = New Object( bb() );lcl = Get Class Names();Show( lcl );lcaa << Delete;lcbb << Delete;Delete Classes( "aa", "bb" );

```

### Get Classes

**構文:** Get Classes( &lt; &lt;class reference&gt;, ... &gt; )

**説明:** 現在定義されているクラスすべてに対して、参照をリストで戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Define Class(	"aa",	{_init_ = Method( {} ), x = 1, m1 = Method( {a, b}, a * b )});Define Class(	"bb",	{_init_ = Method( {} ), y = 1, m2 = Method( {a, b}, a / b )});lcaa = New Object( aa() );lcbb = New Object( bb() );lcl = Get Classes();Show( lcl );Clear Symbols( lcl );lcaa << Delete;lcbb << Delete;Delete Classes( "aa", "bb" );

```

### Get Custom Functions

**構文:** Get Custom Functions(&lt;{function 1 full name, function 2 full name, ...} | function full name&gt;)

**説明:** カスタム関数のリストを取得する。

**JMP追加されたバージョン:** 14

**例 1**

```jsl

Get Custom Functions();

```

**例 2**

```jsl

Get Custom Functions( {"custom:Add", "custom:Sub"} );

```

### Get Environment Variable

**構文:** value = Get Environment Variable( string )

**説明:** オペレーティングシステムの指定の環境変数の値を取得する。



注: Macintoshの場合、変数名に大文字/小文字の区別がある。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Get Environment Variable( "PATH" );

```

### Get Locale Setting

**構文:** value = Get Locale Setting( settingName )

**説明:** 小数点記号などのロケール設定を取得する。

**JMP追加されたバージョン:** 16

```jsl

Get Locale Setting( "Decimal Separator" );

```

### Get Log

**構文:** list = Get Log( &lt;N&gt; )

**説明:** ログから行のリストを戻す。パラメータが指定されていない場合は、ログのすべての行を戻す。Nが正の値である場合は、ログの最初のN行を戻す。Nが負の値である場合は、ログの最後のN行を戻す。Nが0の場合は、行を戻さない。

**JMP追加されたバージョン:** バージョン14より前

```jsl

all contents = Get Log();headcontents = Get Log( 10 );tailcontents = Get Log( -5 );

```

### Get Namespace Names

**構文:** Get Namespace Names( &lt; &lt;namespace reference&gt;, ... &gt; )

**説明:** 現在定義されているすべての名前空間の名前をリストで戻す。

**JMP追加されたバージョン:** 14

```jsl

nsaa = New Namespace(	"aa",	{		x = 1	});nsbb = New Namespace(	"bb",	{		y = 1	});lns = Get Namespace Names();Show( lns );nsaa << Delete;nsbb << Delete;

```

### Get Namespaces

**構文:** Get Namespaces( &lt; &lt;namespace reference&gt;, ... &gt; )

**説明:** 現在定義されているすべての名前空間への参照をリストで戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

nsaa = New Namespace(	"aa",	{		x = 1	});nsbb = New Namespace(	"bb",	{		y = 1	});lns = Get Namespaces();Show( lns );Clear Symbols( lns );nsaa << Delete;nsbb << Delete;

```

### Get Punctuation Characters

**構文:** Get Punctuation Characters(&lt;Exclude Chars(chars) | Include Chars(chars)&gt;)

**説明:** 単語に対する区切り文字としてよく使われている文字を列挙した文字列を戻す。,:;.?!\\/#@&~()[]<>"\*`%$+=^|{}の他に、Unicodeの句読点も含まれる。

**JMP追加されたバージョン:** 15

**例 1**

```jsl

Get Punctuation Characters();

```

**例 2**

```jsl

Get Punctuation Characters( Include Chars( "_" ) );

```

**例 3**

```jsl

Get Punctuation Characters( Exclude Chars( "$[]" ) );

```

**例 4**

```jsl

Collapse Whitespace(	Substitute( "This...string..has..dots", Items( Get Punctuation Characters(), "" ), " " ));

```

### Get Session Script

**構文:** Get Session Script( win1, ... )

**説明:** 指定したウィンドウのセッションスクリプトを戻す。セッションスクリプトとは、データテーブル、スクリプトウィンドウ、ジャーナル、レポートなど、与えられたウィンドウを再作成するJSL式を言う。JSLスクリプトで作成されたレポートは、サポートが限定的であり、表示レイアウトの再作成のみ試行する。

**JMP追加されたバージョン:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << RunScript( "Bivariate" );Get Session Script( Report( biv ) );

```

### Get Whitespace Characters

**構文:** Get Whitespace Characters()

**説明:** スペース文字（空白文字）としてよく使われる文字をすべて含んだ文字列を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Get Whitespace Characters();

```

### Include

**構文:** y = Include( filepath, &lt; &lt;&lt;Parse Only&gt;, &lt; &lt;&lt;New Context&gt;, &lt; &lt;&lt;Names Default to Here&gt; )

**説明:** 指定のファイルに保存されているJSLを実行する。Parse Onlyを指定した場合、スクリプトは解析されるだけで実行されない。New Contextを指定した場合、含まれているJSLが独自の名前空間で実行される。親スクリプトとそれに含まれるスクリプトの両方がグローバル名前空間を使用している場合は、New ContextとNames Default to Hereを指定すれば名前の競合を防げる。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Include( "$SAMPLE_SCRIPTS/chaosGame.jsl" );

```

### Include File List

**構文:** y = Include File List()

**説明:** 実行時にInclude関数で含まれているファイルのリストを戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

y = Include File List();

```

### Is Log Open

**構文:** Is Log Open()

**説明:** ログウィンドウが開いているかどうかの結果を戻す。

**JMP追加されたバージョン:** バージョン14より前

**例 1**

```jsl

If( Is Log Open(),	Close Log());

```

**例 2**

```jsl

If( !Is Log Open(),	Open Log());

```

### Length

**構文:** l = Length( x )

**説明:** 指定された文字列の長さ（文字数）、リスト（項目数）、連想配列（キーの数）、BLOB（バイト数）、行列（要素数）、または名前空間/クラス（関数および変数の数）を戻す。

**JMP追加されたバージョン:** バージョン14より前

**例 1**

```jsl

Length( "Café" );

```

**例 2**

```jsl

Length( {1, 2 + 3, [11 22]} );

```

**例 3**

```jsl

Length( ["a" => 10, "b" => 3, => 0] );

```

**例 4**

```jsl

Length( Char To Blob( "Café" ) );

```

### List

**構文:** y = {a, b, ...}; y = List( a, b, ... )

**説明:** 項目のリストを作成する。計算はしない。

**JMP追加されたバージョン:** バージョン14より前

```jsl

{1, 2 + 3, [11 22]};

```

### Local

**構文:** y = Local( {name=value, ...}, expression )

**説明:** 名前をローカルに定義する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Local( {a = 1, b},	b = 2;	a + b;);

```

### Local Here

**構文:** y = Local Here( expression )

**説明:** ローカルのNames Default To Here(1)を使って式を実行する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

y = Local Here(	a = 1;	b = 2;	c = a + b;	c;);

```

### Lock Globals

**構文:** Lock Globals( name, ... )

**説明:** 指定のグローバル変数をロックする。ロックすると、値の変更や、Clear Globals関数による消去を防ぐことができる。

**JMP追加されたバージョン:** バージョン14より前

```jsl

exalpha = 0.05;exdelta = 0.5;Watch( exalpha, exdelta );Wait( 3 );Lock Globals( exalpha );Wait( 3 );Try( exalpha = 0.06, Show( "invalid - exalpha is locked" ) );Try( exdelta = 0.6, Show( "invalid - exdelta is locked" ) );Wait( 3 );Unlock Globals( exalpha );Wait( 3 );Try( exalpha = 0.06, Show( "invalid - exalpha is locked" ) );

```

### Lock Symbols

**構文:** Lock Symbols( name, ... )

**説明:** 指定のグローバル変数をロックする。ロックすると、値の変更や、Clear Symbols関数による消去を防ぐことができる。

**JMP追加されたバージョン:** バージョン14より前

```jsl

exalpha = 0.05;exdelta = 0.5;Watch( exalpha, exdelta );Wait( 3 );Lock Symbols( exalpha );Wait( 3 );Try( exalpha = 0.06, Show( "invalid - exalpha is locked" ) );Try( exdelta = 0.6, Show( "invalid - exdelta is locked" ) );Wait( 3 );Unlock Symbols( exalpha );Wait( 3 );Try( exalpha = 0.06, Show( "invalid - exalpha is locked" ) );

```

### Log Capture

**構文:** string = Log Capture( expr )

**説明:** 引数exprを評価し、JMPログウィンドウに表示される出力を取り込み、ログに出力する代わりに文字列で戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

"captured:" || Log Capture(	For( i = 1, i <= 3, i++,		Write( Char( i ) );		Write( " " );	));

```

### Map Value

**構文:** Map Value(string | number, {key1, value1...|{key1...},{value1...}}, &lt;Unmatched(value)&gt;)

**説明:** 第1引数を評価し、マップされた結果またはデフォルト値を戻す。

**JMP追加されたバージョン:** 15

**例 1**

```jsl

Map Value( "celry", {"celry", "celery"} );

```

**例 2**

```jsl

Map Value( "carrot", {"celry", "celery"}, Unmatched( "not found" ) );

```

**例 3**

```jsl

Map Value( 10, {10, "celery", 11, "banana"} );

```

**例 4**

```jsl

Map Value( 10, {{1, 2, 3}, {100, 200, 300}} );

```

### Method

**構文:** m = Method( { arg1 = val1, ... }, expression* )

**説明:** クラス内にメソッドを作成する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Define Class(	"complex",	real = 0;	imag = 0;	_init_ = Method( {a, b},		real = a;		imag = b;	);	Add = Method( {y},		New Object( complex( real + y:real, imag + y:imag ) )	);	Sub = Method( {y},		New Object( complex( real - y:real, imag - y:imag ) )	);	Mul = Method( {y},		New Object( complex( real * y:real - imag * y:imag, imag * y:real + real * y:imag ) )	);	Div = Method( {y},		t = New Object( complex( 0, 0 ) );		mag2 = y:Magsq();		t:real = real * y:real + imag * y:imag;		t:imag = imag * y:real + real * y:imag;		t:real = t:real / mag2;		t:imag = t:imag / mag2;		t;	);	Magsq = Method( {},		real * real + imag * imag	);	Mag = Method( {},		Sqrt( real * real + imag * imag )	);	_to string_ = Method( {},		Char( real ) || " + " || Char( imag ) || "i"	);	_show_ = _to string_;);cl = New Object( complex( 1, 2 ) );cl << Delete;Delete Classes( "complex" );

```

### N Items

**構文:** y = N Items( x )

**説明:** リスト内の項目数、行列内の要素数、連想配列内のキーの数、名前空間内の関数と変数の数、クラスオブジェクト内のメソッドと変数の数、またはディスプレイボックスの子の数を戻します。

**JMP追加されたバージョン:** バージョン14より前

**例 1**

```jsl

N Items( {1, 2 + 3, [11 22]} );

```

**例 2**

```jsl

N Items( ["a" => 10, "b" => 3, => 0] );

```

**例 3**

```jsl

New Window( "boxes", hlist = H List Box( Button Box( "a" ), Button Box( "b" ) ) );N Items( hlist );

```

### Names Default To Here

**構文:** Names Default To Here( boolean )

**説明:** 未解決の名前が保持される場所を指定する。グローバル/ローカルに保持する場合は0、Here: 名前空間に保持する場合は1を指定する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

/* Variable x will be stored in the Here: namespace by default */x = 1;Show( x );

```

### Namespace

**構文:** ns = Namespace( namespace reference )

**説明:** 引数nameに指定された名前空間への参照を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

New Namespace(	"complex",	{		make = Function( {a, b},			Index( a, b, b - a )		),		add = Function( {x, y}, x + y ),		sub = Function( {x, y}, x - y ),		mul = Function( {x, y},			local:z = J( 1, 2 );			local:z[1] = x[1] * y[1] - x[2] * y[2];			local:z[2] = x[1] * y[2] + x[2] * y[1];			local:z;		),		div = Function( {x, y},			local:z = J( 1, 2 );			local:d = (y[1] ^ 2 + y[2] ^ 2);			local:z[1] = (x[1] * y[1] + x[2] * y[2]) / local:d;			local:z[2] = (x[2] * y[1] - x[1] * y[2]) / local:d;			local:z;		),		write = Function( {x},			Write( x[1], " + ", x[2], "i\!n" )		)	});ns = Namespace( "complex" );Show( ns );ns << Delete;

```

### Namespace Exists

**構文:** nsexists = Namespace Exists( namespace reference )

**説明:** 引数nameに指定された名前を持つ名前空間が存在する場合は1、そうでない場合は0を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

ns = New Namespace(	"complex",	{		make = Function( {a, b},			Index( a, b, b - a )		),		add = Function( {x, y}, x + y ),		sub = Function( {x, y}, x - y ),		mul = Function( {x, y},			local:z = J( 1, 2 );			local:z[1] = x[1] * y[1] - x[2] * y[2];			local:z[2] = x[1] * y[2] + x[2] * y[1];			local:z;		),		div = Function( {x, y},			local:z = J( 1, 2 );			local:d = (y[1] ^ 2 + y[2] ^ 2);			local:z[1] = (x[1] * y[1] + x[2] * y[2]) / local:d;			local:z[2] = (x[2] * y[1] - x[1] * y[2]) / local:d;			local:z;		),		write = Function( {x},			Write( x[1], " + ", x[2], "i\!n" )		)	});nsexists = Namespace Exists( ns );Show( nsexists );ns << Delete;

```

### New Custom Function

**構文:** f=New Custom Function(namespace, name, function definition)

**説明:** 新しいカスタム関数オブジェクトを作成する。カスタム関数はスクリプトエディタ内でカラー表示になり、[スクリプトの索引]に表示される。カスタム関数に必要な情報は、名前空間(グローバル関数との競合を防ぐため)、名前、関数定義。メッセージを使ってその他の情報を追加できる。Add Custom Functionsコマンドを使うと新しい関数をJMP環境に発行できる。

**JMP追加されたバージョン:** 14

**例 1**

```jsl

myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );

```

**例 2**

```jsl

/*Create a custom function that can be used as a format*/Add Custom Functions(	{New Custom Function(		"custom",		"User Defined Format Function",		Function( {inches},			Char( inches ) || " in"		),		<<Custom Format Category( "Custom" ), 	)});

```

**例 3**

```jsl

/*Create a custom function that can be used as a transform*/Add Custom Functions(	{New Custom Function(		"custom",		"User Defined Transform Function",		Function( {inches},			inches * 2.54		),		<<Transform Category( "Custom" ), 	)});

```

### New Namespace

**構文:** ns = New Namespace( &lt;name&gt;, &lt;list of expressions&gt; )

**説明:** 引数nameに指定された名前で新しい名前空間を作成する。nameが指定されていない場合は、匿名で作成する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

ns = New Namespace(	"complex",	{		make = Function( {a, b},			Index( a, b, b - a )		),		add = Function( {x, y}, x + y ),		sub = Function( {x, y}, x - y ),		mul = Function( {x, y},			local:z = J( 1, 2 );			local:z[1] = x[1] * y[1] - x[2] * y[2];			local:z[2] = x[1] * y[2] + x[2] * y[1];			local:z;		),		div = Function( {x, y},			local:z = J( 1, 2 );			local:d = (y[1] ^ 2 + y[2] ^ 2);			local:z[1] = (x[1] * y[1] + x[2] * y[2]) / local:d;			local:z[2] = (x[2] * y[1] - x[1] * y[2]) / local:d;			local:z;		),		write = Function( {x},			Write( x[1], " + ", x[2], "i\!n" )		)	});Show( ns );ns << Delete;

```

### New Object

**構文:** New Object( "class name" | class name | class reference( constructor arguments* ) )

**説明:** クラスのインスタンスオブジェクトを作成する。

**JMP追加されたバージョン:** 14

```jsl

Define Class(	"complex",	real = 0;	imag = 0;	_init_ = Method( {a, b},		real = a;		imag = b;	);	Add = Method( {y},		New Object( complex( real + y:real, imag + y:imag ) )	);	Sub = Method( {y},		New Object( complex( real - y:real, imag - y:imag ) )	);	Mul = Method( {y},		New Object( complex( real * y:real - imag * y:imag, imag * y:real + real * y:imag ) )	);	Div = Method( {y},		t = New Object( complex( 0, 0 ) );		mag2 = y:Magsq();		t:real = real * y:real + imag * y:imag;		t:imag = imag * y:real + real * y:imag;		t:real = t:real / mag2;		t:imag = t:imag / mag2;		t;	);	Magsq = Method( {},		real * real + imag * imag	);	Mag = Method( {},		Sqrt( real * real + imag * imag )	);	_to string_ = Method( {},		Char( real ) || " + " || Char( imag ) || "i"	);	_show_ = _to string_;);cl = New Object( complex( 1, 2 ) );cl << Delete;Delete Classes( "complex" );

```

### Open Log

**構文:** Open Log( &lt;bring window to top&gt; )

**説明:** ログウィンドウを開く。

**JMP追加されたバージョン:** バージョン14より前

**例 1**

```jsl

Open Log();Show( Is Log Open() );

```

**例 2**

```jsl

/* Bring Log Windows to the Top */Open Log( 1 );Show( Is Log Open() );

```

### Parameter

**構文:** y = Parameter( {name=value, ...}, model expression )

**説明:** 非線形回帰モデルの計算式におけるパラメータを定義する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Parameter( {a = 1}, a + 1 );

```

### Parse

**構文:** y = Parse( s )

**説明:** 文字列をパースして、JSLの式を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Parse( "x+y" );

```

### Print

**構文:** Print( x, ... )

**説明:** 指定された引数の値を、1つの引数に対して1行ずつログウィンドウに表示する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Print( 355 / 113, Pi() );

```

### Quit

**構文:** Quit(&lt;"No Save"&gt;); Exit(&lt;"No Save"&gt;)

**説明:** JMPを終了する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

If(	New Window( "Quit() example",		<<Type( "Modal" ),		Text Box( "Shut down JMP?" ),		H List Box( Button Box( "OK" ), Button Box( "Cancel" ) )	)["Button"] == 1, /*OK==1*/Quit(), /*cancel==-1*/"Good choice.");

```

### Recode

**構文:** recode(string|number|list, {&lt;transform&gt;, ...}, &lt;Multiple Response (Separator(sepChar))&gt;, &lt;By Word(Delimiters(&lt;chars&gt;)&gt;)

**説明:** リストとして記述された変換を入力値に適用し、結果を戻す。Multiple ResponseとBy Wordオプションは、与えられた文字データをいくつかの入力値に分割する。それぞれの入力値に対して変換が適用される。

コマンドの実行中に特殊なJSL変数に値が設定される:

	_rcNowは、1つ前までの変換が終わった後の入力の現在値。

	_rcOrigは、入力の元の値。

**JMP追加されたバージョン:** 15

**例 1**

```jsl

Recode(	"27513-0000",	{Regex( _rcNow, "(\d\d\d\d\d)-\d+", "\1", GLOBALREPLACE ), Num( _rcNow )});

```

**例 2**

```jsl

Recode(	"A B C",	{Map Value( _rcNow, {"A", "Apple", "B", "Banana"}, Unmatched( "Unknown fruit" ) )},	By Word);

```

### Recurse

**構文:** y = Recurse( x1, ... )

**説明:** それ自身を含んでいる関数を呼び出す。関数の再帰的呼び出しを行いたい時に使用。

**JMP追加されたバージョン:** バージョン14より前

```jsl

ex rev = Function( {s},	If( Length( s ) <= 1,		s,		Recurse( Substr( s, 2 ) ) || Left( s, 1 )	));ex rev( "abcd" );

```

### Remove Custom Functions

**構文:** Remove Custom Functions({function 1 full name, function 2 full name, ...} | function full name)

**説明:** 環境からカスタム関数のリストを削除する。

**JMP追加されたバージョン:** 14

```jsl

Remove Custom Functions( {"custom:Add", "custom:Sub"} );

```

### Save Log

**構文:** f = Save Log( &lt;path&gt; )

**説明:** 指定のファイルの場所にログの内容を書き込む。書き込み処理が完了すると、作成されたファイルの名前を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Save Log( "$TEMP/log.txt" );exlogText = Load Text File( "$TEMP/log.txt" );Substr( exlogText, 1, 30 );

```

### Send

**構文:** r = obj &lt;&lt; msg( args ); r = obj &lt;&lt; msg; r = Send( obj, msg )

**説明:** オブジェクトにメッセージを(式の形で)送る。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );Bivariate( Y( :weight ), X( :height ) ) << Fit Line;

```

### Set Environment Variable

**構文:** value = Set Environment Variable( string, &lt; string&gt; )

**説明:** オペレーティングシステムの環境変数の値を設定する。第2引数が欠測値または空白の場合、環境変数は削除される。



注: Macintoshの場合、変数名に大文字/小文字の区別がある。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Set Environment Variable( "PATH", "some path to a directory" );

```

### Show

**構文:** Show( x, ... )

**説明:** 指定された引数の名前と値を、1つの引数に対して1行ずつログウィンドウに表示する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Show( 355 / 113, Pi() );

```

### Show Classes

**構文:** Show Classes( &lt; &lt;class name | class reference&gt;, ... &gt; )

**説明:** ユーザが定義したクラスの内容を表示する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Define Class(	"complex",	real = 0;	imag = 0;	_init_ = Method( {a, b},		real = a;		imag = b;	);	Add = Method( {y},		New Object( complex( real + y:real, imag + y:imag ) )	);	Sub = Method( {y},		New Object( complex( real - y:real, imag - y:imag ) )	);	Mul = Method( {y},		New Object( complex( real * y:real - imag * y:imag, imag * y:real + real * y:imag ) )	);	Div = Method( {y},		t = New Object( complex( 0, 0 ) );		mag2 = y:Magsq();		t:real = real * y:real + imag * y:imag;		t:imag = imag * y:real + real * y:imag;		t:real = t:real / mag2;		t:imag = t:imag / mag2;		t;	);	Magsq = Method( {},		real * real + imag * imag	);	Mag = Method( {},		Sqrt( real * real + imag * imag )	);	_to string_ = Method( {},		Char( real ) || " + " || Char( imag ) || "i"	);	_show_ = _to string_;);Show Classes();

```

### Show Globals

**構文:** Show Globals()

**説明:** 現在定義されているグローバル変数とその値を一覧表示する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Show Globals();

```

### Show Namespaces

**構文:** Show Namespaces( &lt; &lt;namespace reference&gt;, ... &gt; )

**説明:** ユーザが定義した名前空間(名前のあるものと匿名のものすべて)の内容を表示する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

New Namespace(	"complex",	{		make = Function( {a, b},			Index( a, b, b - a )		),		add = Function( {x, y}, x + y ),		sub = Function( {x, y}, x - y ),		mul = Function( {x, y},			local:z = J( 1, 2 );			local:z[1] = x[1] * y[1] - x[2] * y[2];			local:z[2] = x[1] * y[2] + x[2] * y[1];			local:z;		),		div = Function( {x, y},			local:z = J( 1, 2 );			local:d = (y[1] ^ 2 + y[2] ^ 2);			local:z[1] = (x[1] * y[1] + x[2] * y[2]) / local:d;			local:z[2] = (x[2] * y[1] - x[1] * y[2]) / local:d;			local:z;		),		write = Function( {x},			Write( x[1], " + ", x[2], "i\!n" )		)	});Show Namespaces( "complex" );Delete Namespaces( "complex" );

```

### Show Symbols

**構文:** Show Symbols()

**説明:** 現在定義されているすべての記号とその値を一覧表示する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Show Symbols();

```

### Sort List

**構文:** y = Sort List( x )

**説明:** リストxの項目の順序を昇順にした結果を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Sort List( {111, 212, 133, 114, 55} );

```

### Sort List Into

**構文:** Sort List Into( x )

**説明:** リストxの項目の順序を昇順にする。引数xは変数でなければならない。

**JMP追加されたバージョン:** バージョン14より前

```jsl

ex = {111, 212, 133, 114, 55};Sort List Into( ex );ex;

```

### Throw

**構文:** Throw(&lt;message&gt;, &lt;Boolean&gt;)

**説明:** 外側にあるTry()に実行の制御を移す。そうしないと、スクリプトの実行は停止される。messageが感嘆符で始まる場合、致命的なエラーであり、Try()は検出できないことを示す。2番目の引数には、トレースバックを含めるためのオプションのブール値を指定する。

**JMP追加されたバージョン:** バージョン14より前

#### Try-Catch

```jsl

Try( If( Random Uniform() < 0.5, 1, Throw() ), "thrown" );

```

#### トレースバック

```jsl

Throw( "A line number is included in this error", 1 );

```

#### 致命的なスロー

```jsl

Try( Throw( "!This is a fatal error" ), Print( "CATCH message not reached" ) );Print( "AFTER TRY message not reached" );

```

### Try

**構文:** y = Try( expr, &lt;catchExpr&gt; )

**説明:** 引数exprを評価して戻す。評価によってThrow()または内部例外が生じた場合は、catchExprの評価を戻す。catchExprとしてexception_msgを指定した場合、そのメッセージが戻される。

**JMP追加されたバージョン:** バージョン14より前

**例 1**

```jsl

Try( Sqrt( "s" ), "invalid" );

```

**例 2**

```jsl

Try( Sqrt( "s" ), exception_msg );

```

### Type

**構文:** y = Type( x )

**説明:** 引数xの値のタイプを示す文字列を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Type( [1 2 3] );

```

### Unlock Globals

**構文:** Unlock Globals( name, ... )

**説明:** 指定のグローバル変数のロックを解除する。ロックを解除すると、値の変更や、Clear Globals関数による消去が可能となる。

**JMP追加されたバージョン:** バージョン14より前

```jsl

exalpha = 0.05;exdelta = 0.5;Watch( exalpha, exdelta );Wait( 3 );Lock Globals( exalpha );Wait( 3 );Try( exalpha = 0.06, Show( "invalid - exalpha is locked" ) );Try( exdelta = 0.6, Show( "invalid - exdelta is locked" ) );Wait( 3 );Unlock Globals( exalpha );Wait( 3 );Try( exalpha = 0.06, Show( "invalid - exalpha is locked" ) );

```

### Unlock Symbols

**構文:** Unlock Symbols( name, ... )

**説明:** 指定のグローバル変数のロックを解除する。ロックを解除すると、値の変更や、Clear Symbols関数による消去が可能となる。

**JMP追加されたバージョン:** バージョン14より前

```jsl

exalpha = 0.05;exdelta = 0.5;Watch( exalpha, exdelta );Wait( 3 );Lock Symbols( exalpha );Wait( 3 );Try( exalpha = 0.06, Show( "invalid - exalpha is locked" ) );Try( exdelta = 0.6, Show( "invalid - exdelta is locked" ) );Wait( 3 );Unlock Symbols( exalpha );Wait( 3 );Try( exalpha = 0.06, Show( "invalid - exalpha is locked" ) );

```

### Wait

**構文:** Wait( &lt;x&gt; )

**説明:** 実行に移る前に、x秒待機する。xのデフォルト値は3秒。xが0以上の場合、JMPは、待ち時間に加えて、オペレーティングシステムのイベント（画面の描画など）や、保留中のコールバック（計算式の評価など）を完了させる。xが0未満の場合、画面の描画や保留中のOSイベントが完了したことを確認してから、次に進む。

**JMP追加されたバージョン:** バージョン14より前

#### OSイベント

```jsl

Wait( -1 ); // Wait for OS events

```

#### コールバック

```jsl

Wait( 0 ); // Wait for OS events and callbacks

```

**単純な例**

```jsl

Wait( 1.5 );

```

### Watch

**構文:** w = Watch( all|name1, ... )

**説明:** Global、Here、Local名前空間の変数とその値を表示したウィンドウを作成する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

x = 1;y = 2;z = "abc";w = Watch( all );Wait( 5 );x = x * 5;y = y / 25;z = z || "def";Wait( 5 );w << close Window();

```

### Where

**構文:** Where( &lt;dt&gt;, clause )

**説明:** Where節に指定された条件に一致する要素の通し番号(通常は行番号)を戻す。オプションのdtを指定すると、評価時にCurrent Data Tableが変更される。これらのWhere節は、データフィルタで条件を指定する際に使用されている。これは、通常、Loc、<<Get Rows Where、<<Select Whereを使用するよりも、処理時間が文字会。なお、Where節の条件が評価される時に、数列や記号を変更される場合にこの関数の動作がどうなるかは定義されていない。

**JMP追加されたバージョン:** 18

#### その他

```jsl

xs = [10 20 30 . 50];ys = [0 0 0 1 1];Where( xs > 20 & ys );xs = {{10}, {20}, {15}};Where( xs[1] < 18 );

```

#### 列

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Get Rows Where( :sex == "M" );Where( :sex == "M" );Where( dt, :sex == "M" );

```

#### 列関数

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Clear Select << Select Rows( Where( Col Max( :height, :age ) >= 68 ) );dt << Clear Select << Select Rows( Where( :height == Col Max( :height, :age ) ) );

```

#### 行の属性

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Select Rows( [2 4 6] ) << Exclude( 1 );Where( Excluded() );Where( !Excluded() );

```

#### 行列/リスト

```jsl

xs = [10 20 30 . 50];xs[Where( xs >= 20 )];xs[Where( !Is Missing( xs ) )];ys = {10, 20, "30", ., 50};ys[Where( ys >= 20 )];

```

### Wild

**構文:** Wild()

**説明:** どんな文字にも一致するワイルドカードの位置を表す(パターンを表す時だけに使うことができる)。

**JMP追加されたバージョン:** バージョン14より前

```jsl

extestexpr = Expr(	For( i = 1, i <= 14, i++, Print( "YES!!!" ) );	Show( "END" ););Extract Expr( extestexpr, For( i = 1, Wild(), i++, Print( "YES!!!" ) ) );

```

### Wild List

**構文:** Wild List()

**説明:** どんな文字列にも一致する一連のワイルドカード引数を表す(パターンを表す時だけに使うことができる)。

**JMP追加されたバージョン:** バージョン14より前

```jsl

extestexpr = Expr(	For( i = 1, i <= 14, i++, Print( "YES!!!" ) );	Show( "END" ););Extract Expr( extestexpr, For( i = 1, Wild List(), Print( "YES!!!" ) ) );

```

### Write

**構文:** Write( x, ... )

**説明:** (Print()のように)引用符、スペース、または改行を追加することなく、指定の値をログウィンドウに表示する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Write( "fraction = ", 355 / 113, "\!N", "pi       = ", Pi() );

```

