# Columns Manager



## 項目のメッセージ

### Clear All Filters

**構文:** obj &lt;&lt; Clear All Filters

**説明:** 要約テーブルからすべてのフィルタを削除する。Set Columnsコマンドはフィルタではないため、このコマンドを呼び出しても、表示される列の制限は取り除かれない。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Columns Manager;obj << Set Text Filter( "t" );obj << Clear All Filters;

```

### Create Data Dictionary

**構文:** obj &lt;&lt; Create Data Dictionary

**説明:** 各列の統計量とプロパティの情報を含むジャーナルを作成する。

**JMP追加されたバージョン:** 18

### Extended Statistics

**構文:** obj &lt;&lt; Extended Statistics(&lt;list of statistics&gt;)

**説明:** 環境設定でリストを設定しなくても、デフォルトの追加統計量を変更できる。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Columns Manager( Include Extended Statistics( 1 ) );obj << Extended Statistics( {"Median Absolute Deviation", "Q1"} );

```

### Force calculations for all categorical columns

**構文:** obj &lt;&lt; Force calculations for all categorical columns( state=0|1 )

**説明:** このオプションを有効にすると、文字タイプの列だけでなくカテゴリカルな列すべてで統計量が計算される。たとえば、式タイプの列でも欠測値の数が求められる。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );obj = dt << Columns Manager;obj << Force calculations for all categorical columns( 1 );

```

### Force calculations for all numeric columns

**構文:** obj &lt;&lt; Force calculations for all numeric columns( state=0|1 )

**説明:** このオプションを有効にすると、可能な限り、すべての数値タイプの列で統計量が計算される。たとえば、連続尺度の列に対しても、一意な値の個数が求められる。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Columns Manager;obj << Force calculations for all numeric columns( 1 );

```

### Get Summary Table

**構文:** obj &lt;&lt; Get Summary Table

**説明:** 要約テーブルのTable Boxを取得する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Columns Manager;tab = obj << Get Summary table;tab << Sort By Column( "n unique" );

```

### Hide Excluded Columns

**構文:** obj &lt;&lt; Hide Excluded Columns( state=0|1 )

**説明:** 除外されている列を要約テーブルに含める、または削除する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Columns Manager;obj << Hide Excluded Columns( 0 );

```

### Hide Hidden Columns

**構文:** obj &lt;&lt; Hide Hidden Columns( state=0|1 )

**説明:** 非表示の列を要約テーブルに含める、または削除する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Columns Manager;obj << Hide Hidden Columns( 0 );

```

### Include Extended Statistics

**構文:** obj &lt;&lt; Include Extended Statistics( state=0|1 )

**説明:** 追加の統計量は、「環境設定」で設定できる。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Columns Manager;obj << Include Extended Statistics( 1 );

```

### Select Rows

**構文:** obj &lt;&lt; Select Rows(&lt;empty&gt; | All | None | &lt;column references&gt;)

**説明:** 列に対応する行を要約テーブル内で選択する。引数を指定しない場合はクリアされる。Allを渡すと表示されている行のすべてが選択され、Noneを渡すとどの行も選択されない。特定の行を選択するには、列参照のリストを渡す。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Columns Manager;obj << Select Rows( :age, :height );

```

### Set Columns

**構文:** obj &lt;&lt; Set Columns(&lt;columns&gt;)

**説明:** デフォルトでは、列マネージャーにはデータテーブルのすべての列が基本の列セットとして含まれる。除外された列を削除して、レポートに含める列を少なくすることなどもできる。このオプションにより、列マネージャーで使用される列を制限できる。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Columns Manager;obj << Set Columns( {:height, :weight} );

```

### Set Modeling Type Filter

**構文:** obj &lt;&lt; Set Modeling Type Filter(&lt;empty&gt; | &lt;Continuous, Nominal, Ordinal, Vector, Unstructured Text, Multiple Response, None&gt;)

**説明:** 尺度フィルタを設定する。引数を指定せずにフィルタをクリアするか、1つまたは複数の尺度を指定する。いずれかの尺度に一致する列のみが表示される。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Columns Manager;obj << Set Modeling Type Filter( "Continuous", "Ordinal" );

```

### Set Property Filter

**構文:** obj &lt;&lt; Set Property Filter(&lt;empty&gt; | At Least One Property | &lt;list of property names&gt;)

**説明:** プロパティフィルタを設定する。引数を指定せずにフィルタをクリアするか、1つまたは複数のプロパティ名を指定する。指定したいずれかのプロパティを持つ列のみが表示される。また、引数の指定により、1つ以上の任意のプロパティを持つ列をすべてマッチすることもできる。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );obj = dt << Columns Manager;obj << Set Property Filter( "Matrix Column Names", "Value colors" );

```

### Set Selection Filter

**構文:** obj &lt;&lt; Set Selection Filter(&lt;empty&gt; | Keep | Hide)

**説明:** 選択フィルタを設定する。ユーザは、任意の列を選択し、リストをフィルタリングすることができる(Keep、またはその逆のHideを指定する)。引数を渡さずにフィルタをクリアすることもできる。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Columns Manager;obj << Select Rows( :age, :height );obj << Set Selection Filter( "Keep" );

```

### Set Text Filter

**構文:** obj &lt;&lt; Set Text Filter(&lt;empty&gt; | &lt;search text&gt;)

**説明:** 現在のテキストフィルタを設定する。テキストフィルタによって要約テーブルに表示される列が限定される。テキストフィルタは列名にのみ適用される。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Columns Manager;obj << Set Text Filter( "me" );

```

### Show Attributes

**構文:** obj &lt;&lt; Show Attributes( state=0|1 )

**説明:** 要約テーブルの列の属性のセクションを、展開するか、または折りたたむ。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Columns Manager;obj << Show Attributes( 0 );

```

### Show Properties

**構文:** obj &lt;&lt; Show Properties( state=0|1 )

**説明:** 要約テーブルのプロパティのセクションを、展開するか、または折りたたむ。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Columns Manager;obj << Show Properties( 0 );

```

### Show Statistics

**構文:** obj &lt;&lt; Show Statistics( state=0|1 )

**説明:** 要約テーブルの統計量のセクションを、展開するか、または折りたたむ。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Columns Manager;obj << Show Statistics( 0 );

```

