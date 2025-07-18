# Compare Data Tables



## 関連するコンストラクター

### Compare Data Tables

**構文:** Compare Data Tables( &lt;Compare with( Data Table( name ))&gt;, &lt;show window(0 | 1)&gt;, &lt;limit(integer)&gt;, &lt;Compare table properties(0 | 1)&gt;, &lt;Compare column attributes and properties(0 | 1)&gt;, &lt;Compare data(0 | 1)&gt;, &lt;Fuzzy compare( &lt;0 | 1&gt;, &lt;Relative Error(number)&gt;)&gt;, &lt;Show difference summary(0 | 1)&gt;, &lt;Show difference plot(0 | 1)&gt; )

**説明:** 開いている2つのデータテーブルを比較し、データやメタデータの違いをレポートする。

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );

```

## 項目のメッセージ

### Are Data Different

**構文:** obj &lt;&lt; Are Data Different

**説明:** 2つのテーブルのデータが異なるかどうかを、true(1)またはfalse(0)で戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
how = (obj << Are Data Different);

```

### Auto compare

**構文:** Auto Compare(0|1)

**説明:** いずれかの設定が変更されたら直ちに比較を実行する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
obj << Auto Compare( 1 );

```

### Close

**構文:** obj &lt;&lt; Close

**説明:** Compare Data Tableオブジェクトを閉じる。

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
obj << close;

```

### Compare

**構文:** Compare()

**説明:** 今すぐ比較を実行する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
obj << Compare();

```

### Compare Column Attributes and Properties

**構文:** obj &lt;&lt; Compare Column Attributes and Properties( state=0|1 )

**説明:** 列の属性とプロパティを比較するフラグをオンまたはオフにする。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
obj << compare column attributes and properties( 1 );

```

### Compare Data

**構文:** obj &lt;&lt; Compare Data( state=0|1 )

**説明:** 列のデータを比較するフラグをオンまたはオフにする。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
obj << compare data( 0 );

```

### Compare Table Properties

**構文:** obj &lt;&lt; Compare Table Properties( state=0|1 )

**説明:** テーブル変数とテーブルスクリプトを比較するフラグをオンまたはオフにする。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
obj << compare table properties;

```

### Compare With

**構文:** obj &lt;&lt; Compare With( Data Table( name ) )

**説明:** 最初のテーブルをこのテーブルと比較する。真(true)または偽(false)を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
obj = dt << Compare Data Tables();
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
same = obj << compare with( dt2 );

```

### Copy Script

**構文:** obj &lt;&lt; Copy Script

**説明:** Compare Data Tablesスクリプトをクリップボードにコピーする。

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
obj << Copy Script;

```

### Fuzzy Compare

**構文:** obj &lt;&lt; Fuzzy Compare( &lt;(state= 1 | 0)&gt;, &lt;Relative Error (number)&gt; )

**説明:** 列のデータを比較するフラグをオンまたはオフにする。

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
obj << fuzzy compare( relative error( 0.0001 ) );

```

### Get column attributes differences

**構文:** obj &lt;&lt; Get column attributes differences( columns( column) )

**説明:** 比較した列の中で異なる属性のリストを取得する。

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
attribDiff = (obj << Get columns attributes differences( :name ));

```

### Get column properties differences

**構文:** obj &lt;&lt; Get column properties differences( columns( column) )

**説明:** 比較した列の中で異なる列プロパティのリストを取得する。

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
propDiff = (obj << Get columns properties differences( :name ));

```

### Get columns list

**構文:** obj &lt;&lt; Get columns list( ( &lt;differed in data&gt; | &lt;differed in properties&gt; | &lt;mismatched data type&gt; | &lt;differed in attributes&gt;) )

**説明:** データ、列プロパティ、データタイプ、または他の列属性が異なる列のリストを取得する。

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
colDiff = (obj << Get columns list( differed in attributes ));
Show( colDiff );

```

### Get difference summary matrix

**構文:** obj &lt;&lt; Get difference summary matrix

**説明:** 相違点の要約を行列として取得する。行列の各列は「相違点の要約」表の列に対応する。最初の列「アクション」は、行列では-1(削除)、0(置換)、および1(追加)となる。

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
mtx = (obj << Get Difference Summary matrix);

```

### Get table scripts difference list

**構文:** obj &lt;&lt; Get table scripts difference list

**説明:** 異なる、または欠けているテーブルスクリプトのリストを取得する。

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
scriptDiff = (obj << Get table scripts difference list);

```

### Get table variables difference list

**構文:** obj &lt;&lt; Get table variables difference list

**説明:** 異なる、または欠けているテーブル変数のリストを取得する。

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
tvdiff = (obj << Get table variables difference list);

```

### Get unmatched columns list

**構文:** obj &lt;&lt; Get unmatched columns list

**説明:** マッチしなかった列、つまり比較対象となる列が見つからなかった列のリストを取得する。

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
colDiff = (obj << Get unmatched columns list);

```

### Hide column properties with no differences

**構文:** Hide column properties with no differences(0|1)

**説明:** 列プロパティの比較時に、違いのないプロパティを非表示にする。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
obj << Hide column properties with no differences( 0 );

```

### Hide columns with no differences

**構文:** Hide columns with no differences(0|1)

**説明:** テーブルのデータの比較時に、違いのない列を非表示にする。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
obj << Hide columns with no differences( 0 );

```

### Hide rows with no differences

**構文:** Hide rows with no differences(0|1)

**説明:** テーブルのデータの比較時に、違いのない行を非表示にする。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
obj << Hide rows with no differences( 0 );

```

### Hide table properties with no differences

**構文:** Hide table properties with no differences(0|1)

**説明:** テーブルのメタデータの比較時に、違いのない項目を非表示にする。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
obj << Hide table properties with no differences( 0 );

```

### Ignore case

**構文:** Ignore Case(0|1)

**説明:** データの比較時に大文字と小文字を区別しない。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
obj << Ignore Case( 1 );

```

### Ignore missing

**構文:** Ignore Missing(0|1)

**説明:** データの比較時に欠測値を無視する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
obj << Ignore Missing( 1 );

```

### Ignore whitespace

**構文:** Ignore Whitespce(0|1)

**説明:** データの比較時にスペース文字を無視する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
obj << Ignore Whitespace( 1 );

```

### Limit

**構文:** obj &lt;&lt; Limit( integer )

**説明:** 相違点の数を制限する。制限数に達すると比較が停止されます。

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
obj << limit( 100 );

```

### Link

**構文:** Link({"col1", "col2", &lt;ID(0|1)&gt;, &lt;No Compare(0|1)&gt;, &lt;Fuzzy Compare(&lt;Ignore Case(0|1)&gt;, &lt;Ignore Whitespace(0|1)&gt;, &lt;Ignore Missing(0|1)&gt;, &lt;Relative Error(&lt;amount&gt;)&gt;)&gt;

**説明:** 比較する列のペアとその他の比較オプションを指定する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
obj << Link( {:age, :weight}, );

```

### Relative Error

**構文:** obj &lt;&lt; Relative Error( integer )

**説明:** ファジー比較の相対誤差を設定する。

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
obj << Relative Error( 0.00001 );

```

### Report

**構文:** obj &lt;&lt; Report

**説明:** レポートオブジェクトへの参照を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Row Alignment

**構文:** obj &lt;&lt; Row Alignment (Flexible by Row|By Row|Use ID Columns)

**説明:** 比較のために行の揃え方を設定する。

 フレキシブルな行の対応: 一致しない行のブロックをスキップし、一致する行を順番にできるだけ多く見つける。

 行番号: 各行を上から順に比較する。

ID列の使用: 指定のID列を使って各行のキーを作成し、そのキーで行を対応させる。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
obj << Row Alignment( "By Row" );

```

### Save Difference Summary

**構文:** obj &lt;&lt; Save Difference Summary( &lt;invisible(0 | 1)&gt; )

**説明:** 相違点の要約をデータテーブルに保存する。

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
summaryDT = (obj << save difference summary( invisible ));

```

### Save Script to Data Table

**構文:** obj &lt;&lt; Save Script to Data Table

**説明:** Compare Data Tablesスクリプトをテーブルプロパティとしてデータテーブルに保存する。

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
obj << Save Script to Data Table;

```

### Save Script to Journal

**構文:** obj &lt;&lt; Save Script to Journal

**説明:** Compare Data Tablesスクリプトを含むボタンをジャーナルに追加する。

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
obj << Save Script to Journal;

```

### Save Script to Script Window

**構文:** obj &lt;&lt; Save Script to Script Window

**説明:** Compare Data Tablesスクリプトを現在のスクリプトウィンドウに追加する。

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
obj << Save Script to Script Window;

```

### Show Window

**構文:** obj &lt;&lt; Show Window( Show window( 0|1) )

**説明:** Compare Data Tableのウィンドウの表示/非表示を切り替える。

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
obj << show window( 1 );

```

### Show fuzzy differences

**構文:** Show Fuzzy Differences(0|1)

**説明:** データの比較時に、ファジー比較が設定されているために等しいと判断された値について、違いを強調表示する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
obj << Show Fuzzy Differences( 1 );

```

### Unlink

**構文:** Unlink(&lt;column name 1&gt;, &lt;column name 2&gt;)

**説明:** 列の比較を削除する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
obj << Unlink( {"a", "b"} );

```

### Unlink All

**構文:** Unlink All

**説明:** 列の比較をすべて削除する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
obj << Unlink All;

```

