# Custom Function



## 項目のメッセージ

### Custom Format Category

**構文:** f &lt;&lt; Custom Format Category(1|0)

**説明:** カスタム関数をカスタム形式として使用できるようにする。関数をカスタム形式メニューから除外したい場合は、0を指定する。

**JMP追加されたバージョン:** 14

```jsl

myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Custom Format Category( 1 );

```

### Description

**構文:** obj &lt;&lt; Description( text )

**説明:** カスタム関数の説明を設定する。この説明は、[スクリプトの索引]やツールヒントに表示される。

**JMP追加されたバージョン:** 14

```jsl

myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Description( "Add two numbers together, but subtract 1" );

```

### Example

**構文:** f &lt;&lt; Example(example text | Expr(example JSL code), &lt;example name&gt;)

**説明:** 関数の効果的な使い方を示す例を追加する。例は、テキスト文字列またはExprコマンドで囲んだしたJSLコードとして指定する。メッセージを何回か送り、複数の例を追加することができる。

**JMP追加されたバージョン:** 14

#### 例 1

```jsl

myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Example( "Add(1, 2)" );

```

#### 例 2

```jsl

myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Example( "Add(1, 2)", "small add" );
myAdd << Example( "Add(1, 500)", "bigger add" );

```

### Formula Category

**構文:** f &lt;&lt; Formula Category(name|""|1|0)

**説明:** 関数を計算式エディタの指定のカテゴリに含める。関数は、指定されたカテゴリの最後に追加される。指定されたカテゴリが存在しない場合、新しいカテゴリが作成される。関数を計算式エディタのツリーに表示したくない場合は、0または空白の文字列を指定する。

**JMP追加されたバージョン:** 14

```jsl

myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Formula Category( "NumberStuff" );

```

### Get Custom Format Category

**構文:** f &lt;&lt; Get Custom Format Category

**説明:** カスタム関数がカスタム形式として使用可能かどうかを取得する。

**JMP追加されたバージョン:** 14

```jsl

myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Custom Format Category( 1 );
myAdd << Get Custom Format Category;

```

### Get Description

**構文:** f &lt;&lt; Get Description

**説明:** カスタム関数の説明を取得する。

**JMP追加されたバージョン:** 14

```jsl

myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Description( "Add two numbers together, but subtract 1" );
myAdd << Get Description;

```

### Get Examples

**構文:** f &lt;&lt; Get Examples

**説明:** 関数の例を文字列のリストとして取得する。

**JMP追加されたバージョン:** 14

```jsl

myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Example( "Add(1, 2)", "small add" );
myAdd << Example( "Add(1, 500)", "bigger add" );
myAdd << Get Examples;

```

### Get Formula Category

**構文:** f &lt;&lt; Get Formula Category

**説明:** この関数が計算式エディタのカテゴリの一つに属している場合は、どのカテゴリかを戻す。

**JMP追加されたバージョン:** 14

```jsl

myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Formula Category( "NumberStuff" );
myAdd << Get Formula Category;

```

### Get Function

**構文:** f &lt;&lt; Get Function

**説明:** 関数の定義を取得する。

**JMP追加されたバージョン:** 14

```jsl

myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Get Function;

```

### Get Name

**構文:** f &lt;&lt; Get Name

**説明:** 関数名を取得する。

**JMP追加されたバージョン:** 14

```jsl

myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Get Name;

```

### Get Namespace

**構文:** f &lt;&lt; Get Namespace

**説明:** 関数の名前空間を取得する。

**JMP追加されたバージョン:** 14

```jsl

myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Get Namespace;

```

### Get Parameters

**構文:** f &lt;&lt; Get Parameters

**説明:** パラメータをリストとして取得する。

**JMP追加されたバージョン:** 14

```jsl

myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Parameter( "Number", "number" );
myAdd << Parameter( "Number", "<number=1>" );
myAdd << Get Parameters;

```

### Get Prototype

**構文:** f &lt;&lt; Get Prototype

**説明:** [スクリプトの索引]で表示されるこの関数のプロトタイプを取得する。

**JMP追加されたバージョン:** 14

```jsl

myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Prototype( "Add(number, <number=1>)" );
myAdd << Get Prototype;

```

### Get Result Type

**構文:** f &lt;&lt; Get Result Type

**説明:** 関数の結果のタイプを取得する。

**JMP追加されたバージョン:** 14

```jsl

myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Result Type( "Number" );
myAdd << Get Result Type;

```

### Get Scripting Index Category

**構文:** f &lt;&lt; Get Scripting Index Category

**説明:** [スクリプトの索引]でのカスタム関数のカテゴリを取得する。

**JMP追加されたバージョン:** 14

```jsl

myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Scripting Index Category( "My Functions" );
myAdd << Get Scripting Index Category;

```

### Get Transform Category

**構文:** f &lt;&lt; Get Transform Category

**説明:** カスタム関数が列の変換メニューで使用可能かどうかを取得する。

**JMP追加されたバージョン:** 14

```jsl

myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Transform Category( 1 );
myAdd << Get Transform Category;

```

### Parameter

**構文:** f &lt;&lt; Parameter(typename | {typename1, typename2, ...}, hint text)

**説明:** 関数のパラメータに関する情報を追加する。このメッセージを、関数が取るパラメータ1つにつき1回送る。コードの検証に使用できる。パラメータタイプの有効な選択肢は、Any、Name、Number、String、List、Matrix、RowState。結果のタイプが複数のもののいずれかになる場合は、リストとして指定する。ヒントのテキストは、計算式エディタの中で、該当する引数にどのようなデータを指定すべきかを表示するために使用する。ヒントのテキストを表示したくない場合は、空白の文字列を指定する。

**JMP追加されたバージョン:** 14

```jsl

myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Parameter( "Number", "number" );
myAdd << Parameter( "Number", "<number=1>" );

```

### Prototype

**構文:** obj &lt;&lt; Prototype( text )

**説明:** [スクリプトの索引]で表示されるこの関数のプロトタイプを設定する。

**JMP追加されたバージョン:** 14

```jsl

myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Prototype( "Add(number, <number=1>)" );

```

### Result Type

**構文:** f &lt;&lt; Result Type(typename | {typename1, typename2 ...})

**説明:** 関数の結果タイプを設定する。これは、コードの検証に使用できる。有効な選択肢は、Any、Name、Number、String、List、Matrix、RowState。結果タイプが複数のもののいずれかになる場合は、リストとして指定する。

**JMP追加されたバージョン:** 14

#### 例 1

```jsl

myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Result Type( "Number" );

```

#### 例 2

```jsl

myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Result Type( {"Number", "String"} );

```

### Scripting Index Category

**構文:** f &lt;&lt; Scripting Index Category(name|""|1|0)

**説明:** [スクリプトの索引]でのカスタム関数のカテゴリを設定する。どのカスタム関数も、指定したカテゴリに加え、[すべての関数]にもリストされる。関数を[すべての関数]だけに表示したい場合は0または""を指定する。

**JMP追加されたバージョン:** 14

```jsl

myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Scripting Index Category( "My Functions" );

```

### Transform Category

**構文:** f &lt;&lt; Transform Category(1|0)

**説明:** カスタム関数を、変換列を作成するメニューから使用できるようにする。関数を変換メニューから除外したい場合は、0を指定する。

**JMP追加されたバージョン:** 14

```jsl

myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Transform Category( 1 );

```

