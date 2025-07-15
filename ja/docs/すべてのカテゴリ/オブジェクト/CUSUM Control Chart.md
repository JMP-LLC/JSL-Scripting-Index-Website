# CUSUM Control Chart



## 共有されるメッセージ

### Action

**構文:** obj &lt;&lt; Action

**説明:** 評価する式を挿入するための、プラットフォーム内の汎用トラップドア。プラットフォームに一時的にディスプレイボックスおよびデータテーブルのコンテキストを設定する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

### Apply Preset

**構文:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**説明:** 作成されたプリセットをオブジェクトに適用する。保存された設定に合わせてオプションとカスタマイズが更新される。

**JMP追加されたバージョン:** 18

**フォルダ内で検索**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

**匿名のプリセット**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();
dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );
Wait( 1 );
obj2 << Apply Preset( preset );

```

**名前で検索**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

### Automatic Recalc

**構文:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**説明:** データの除外や変更があった場合に分析を自動的にやり直す。Automatic Recalcオプションがオンになっている場合で、データの除外や変更が再計算の前に確実に適用されるようにするには、Wait(0)コマンドを使用すること。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Oil1 Cusum.jmp" );
obj = dt << CUSUM Control Chart(
	Y( :weight ),
	H( 2 ),
	Lower Side( 1 ),
	Target( 8.1 ),
	K( 0.025 ),
	Sigma( 0.05 ),
	Head Start( 0.05 )
);
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

### Broadcast

**構文:** obj &lt;&lt; Broadcast(message)

**説明:** メッセージをプラットフォームに一括適用する。個々のオブジェクトから戻される結果がデータテーブルである場合は、可能な限り連結する。その最終的な形式は、Table BoxのSave Combined Tableオプションの結果と同じになるか、またはソース列を使用したConcanateオプションの結果と同じになる。それ以外の場合、結果はリストの形で戻される。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
objs = Control Chart Builder(
	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),
	By( :OPERATOR )
);
objs[1] << Broadcast( Save Summaries );

```

### Copy ByGroup Script

**構文:** obj &lt;&lt; Copy ByGroup Script

**説明:** この分析を再現するJSLスクリプトを生成し、クリップボードにコピーする。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Oil1 Cusum.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << CUSUM Control Chart(
	Y( :weight ),
	H( 2 ),
	Lower Side( 1 ),
	Target( 8.1 ),
	K( 0.025 ),
	Sigma( 0.05 ),
	Head Start( 0.05 ),
	By( _bycol )
);
obj[1] << Copy ByGroup Script;

```

### Copy Script

**構文:** obj &lt;&lt; Copy Script

**説明:** この分析を再現するJSLスクリプトを生成し、クリップボードにコピーする。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Oil1 Cusum.jmp" );
obj = dt << CUSUM Control Chart(
	Y( :weight ),
	H( 2 ),
	Lower Side( 1 ),
	Target( 8.1 ),
	K( 0.025 ),
	Sigma( 0.05 ),
	Head Start( 0.05 )
);
obj << Copy Script;

```

### Data Table Window

**構文:** obj &lt;&lt; Data Table Window

**説明:** この分析に使用したデータテーブルのウィンドウを手前に表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Oil1 Cusum.jmp" );
obj = dt << CUSUM Control Chart(
	Y( :weight ),
	H( 2 ),
	Lower Side( 1 ),
	Target( 8.1 ),
	K( 0.025 ),
	Sigma( 0.05 ),
	Head Start( 0.05 )
);
obj << Data Table Window;

```

### Get By Levels

**構文:** obj &lt;&lt; Get By Levels

**説明:** By列が指定されている場合、列名をキー、データ値を値とした連想配列を戻す。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

### Get ByGroup Script

**構文:** obj &lt;&lt; Get ByGroup Script

**説明:** この分析を再現するスクリプト(JSL)を生成し、それを式として戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Oil1 Cusum.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << CUSUM Control Chart(
	Y( :weight ),
	H( 2 ),
	Lower Side( 1 ),
	Target( 8.1 ),
	K( 0.025 ),
	Sigma( 0.05 ),
	Head Start( 0.05 ),
	By( _bycol )
);
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Container

**構文:** obj &lt;&lt; Get Container

**説明:** オブジェクトのコンテンツを含んだコンテナボックスの参照を戻す。

**フィルタのあるプラットフォーム**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Show Control Panel( 0 ),
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),
	Local Data Filter(
		Add Filter(
			columns( :age, :sex, :height ),
			Where( :age == {12, 13, 14} ),
			Where( :sex == "F" ),
			Where( :height >= 55 ),
			Display( :age, N Items( 6 ) )
		)
	)
);
New Window( "platform boxes",
	H List Box(
		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),
		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )
	)
);

```

**一般**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Oil1 Cusum.jmp" );
obj = dt << CUSUM Control Chart(
	Y( :weight ),
	H( 2 ),
	Lower Side( 1 ),
	Target( 8.1 ),
	K( 0.025 ),
	Sigma( 0.05 ),
	Head Start( 0.05 )
);
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

### Get Data Table

**構文:** obj &lt;&lt; Get Data Table

**説明:** データテーブルへの参照を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Oil1 Cusum.jmp" );
obj = dt << CUSUM Control Chart(
	Y( :weight ),
	H( 2 ),
	Lower Side( 1 ),
	Target( 8.1 ),
	K( 0.025 ),
	Sigma( 0.05 ),
	Head Start( 0.05 )
);
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Group Platform

**構文:** obj &lt;&lt; Get Group Platform

**説明:** 該当のプラットフォームがグループに属している場合に、Group Platformオブジェクトを戻す。それ以外の場合はEmpty()を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );
group = biv[1] << Get Group Platform;
Wait( 1 );
group << Layout( "Arrange in Tabs" );

```

### Get Script

**構文:** obj &lt;&lt; Get Script

**説明:** この分析を再現するスクリプト(JSL)を生成し、それを式として戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Oil1 Cusum.jmp" );
obj = dt << CUSUM Control Chart(
	Y( :weight ),
	H( 2 ),
	Lower Side( 1 ),
	Target( 8.1 ),
	K( 0.025 ),
	Sigma( 0.05 ),
	Head Start( 0.05 )
);
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**構文:** obj &lt;&lt; Get Script With Data Table

**説明:** この分析を再現するスクリプト(JSL)をデータテーブルへの参照も含めて生成し、それを式として戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Oil1 Cusum.jmp" );
obj = dt << CUSUM Control Chart(
	Y( :weight ),
	H( 2 ),
	Lower Side( 1 ),
	Target( 8.1 ),
	K( 0.025 ),
	Sigma( 0.05 ),
	Head Start( 0.05 )
);
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**構文:** obj &lt;&lt; Get Timing

**説明:** プラットフォームの起動にかかった時間を取得する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Oil1 Cusum.jmp" );
obj = dt << CUSUM Control Chart(
	Y( :weight ),
	H( 2 ),
	Lower Side( 1 ),
	Target( 8.1 ),
	K( 0.025 ),
	Sigma( 0.05 ),
	Head Start( 0.05 )
);
t = obj << Get Timing;
Show( t );

```

### Get Web Support

**構文:** obj &lt;&lt; Get Web Support

**説明:** ディスプレイオブジェクトにおけるインタラクティブHTMLサポートのレベルを数値で戻す。1は、一部または全部の要素がサポートされていることを示し、0は、サポートされないことを示す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

### Get Where Expr

**構文:** obj &lt;&lt; Get Where Expr

**説明:** プラットフォームがBy()またはWhere()を使って起動された場合に、データをサブセットするためのWhere式を戻す。By()やWhere()が使われていない場合はEmpty()を戻す。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );
Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

### Ignore Platform Preferences

**構文:** Ignore Platform Preferences( state=0|1 )

**説明:** プラットフォームに対する現在の環境設定を無視する。このメッセージは、プラットフォームを呼び出した後に、そのプラットフォームに送られた場合、無視される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Ignore Platform Preferences( 1 ),
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

### New JSL Preset

**構文:** New JSL Preset( preset )

**説明:** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
preset = obj << New JSL Preset( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) );
Wait( 1 );
obj << Apply Preset( preset );

```

### New Preset

**構文:** obj = New Preset()

**説明:** オブジェクトに適用されているオプションとカスタマイズをプリセットとしてまとめる。このオブジェクトをApply Presetに渡すことで、同じ種類のオブジェクトに設定をコピーすることができる。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

### Redo Analysis

**構文:** obj &lt;&lt; Redo Analysis

**説明:** 同じ分析をやり直し新しいウィンドウに表示する。データが変更されていると分析結果は異なる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Oil1 Cusum.jmp" );
obj = dt << CUSUM Control Chart(
	Y( :weight ),
	H( 2 ),
	Lower Side( 1 ),
	Target( 8.1 ),
	K( 0.025 ),
	Sigma( 0.05 ),
	Head Start( 0.05 )
);
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**構文:** obj &lt;&lt; Redo ByGroup Analysis

**説明:** 同じ分析をやり直し新しいウィンドウに表示する。データが変更されていると分析結果は異なる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Oil1 Cusum.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << CUSUM Control Chart(
	Y( :weight ),
	H( 2 ),
	Lower Side( 1 ),
	Target( 8.1 ),
	K( 0.025 ),
	Sigma( 0.05 ),
	Head Start( 0.05 ),
	By( _bycol )
);
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**構文:** obj &lt;&lt; Relaunch Analysis

**説明:** プラットフォームの起動ウィンドウを開き、レポートを作成した時の設定を表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Oil1 Cusum.jmp" );
obj = dt << CUSUM Control Chart(
	Y( :weight ),
	H( 2 ),
	Lower Side( 1 ),
	Target( 8.1 ),
	K( 0.025 ),
	Sigma( 0.05 ),
	Head Start( 0.05 )
);
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**構文:** obj &lt;&lt; Relaunch ByGroup

**説明:** プラットフォームの起動ウィンドウを開き、レポートを作成した時の設定を表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Oil1 Cusum.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << CUSUM Control Chart(
	Y( :weight ),
	H( 2 ),
	Lower Side( 1 ),
	Target( 8.1 ),
	K( 0.025 ),
	Sigma( 0.05 ),
	Head Start( 0.05 ),
	By( _bycol )
);
obj[1] << Relaunch ByGroup;

```

### Render Preset

**構文:** Render Preset( preset )

**説明:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

### Report

**構文:** obj &lt;&lt; Report;Report( obj )

**説明:** レポートオブジェクトへの参照を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Oil1 Cusum.jmp" );
obj = dt << CUSUM Control Chart(
	Y( :weight ),
	H( 2 ),
	Lower Side( 1 ),
	Target( 8.1 ),
	K( 0.025 ),
	Sigma( 0.05 ),
	Head Start( 0.05 )
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**構文:** obj &lt;&lt; Report View( "完全"|"要約" )

**説明:** レポートビューは、プラットフォームレポートの詳細を表示するかどうかを決定する。Fullはすべての詳細を表示し、Summaryはプラットフォームにより限定されたものだけを表示する。 動作をカスタマイズするため、各ディスプレイボックスは<<Set Summary Behaviorメッセージをサポートする。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Oil1 Cusum.jmp" );
obj = dt << CUSUM Control Chart(
	Y( :weight ),
	H( 2 ),
	Lower Side( 1 ),
	Target( 8.1 ),
	K( 0.025 ),
	Sigma( 0.05 ),
	Head Start( 0.05 )
);
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**構文:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**説明:** 分析を再現するためのJSLスクリプトを作成し、データテーブルにテーブルプロパティとして保存する。スクリプトの名前を指定できる。Append Suffixオプションは、スクリプト名に数字の接尾辞を追加する。これにより、同名のスクリプトが存在していても区別できる。Promptオプションは、ユーザにスクリプト名の指定を促す。Replaceオプションは、同名の既存のスクリプトを置き換える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Oil1 Cusum.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << CUSUM Control Chart(
	Y( :weight ),
	H( 2 ),
	Lower Side( 1 ),
	Target( 8.1 ),
	K( 0.025 ),
	Sigma( 0.05 ),
	Head Start( 0.05 ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**構文:** obj &lt;&lt; Save ByGroup Script to Journal

**説明:** この分析を再現するJSLスクリプトを生成し、ジャーナルにそのスクリプトのボタンを追加する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Oil1 Cusum.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << CUSUM Control Chart(
	Y( :weight ),
	H( 2 ),
	Lower Side( 1 ),
	Target( 8.1 ),
	K( 0.025 ),
	Sigma( 0.05 ),
	Head Start( 0.05 ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**構文:** obj &lt;&lt; Save ByGroup Script to Script Window

**説明:** この分析を再現するJSLスクリプトを生成し、現在のスクリプトウィンドウに表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Oil1 Cusum.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << CUSUM Control Chart(
	Y( :weight ),
	H( 2 ),
	Lower Side( 1 ),
	Target( 8.1 ),
	K( 0.025 ),
	Sigma( 0.05 ),
	Head Start( 0.05 ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**構文:** obj &lt;&lt; Save Script for All Objects

**説明:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Oil1 Cusum.jmp" );
obj = dt << CUSUM Control Chart(
	Y( :weight ),
	H( 2 ),
	Lower Side( 1 ),
	Target( 8.1 ),
	K( 0.025 ),
	Sigma( 0.05 ),
	Head Start( 0.05 )
);
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**構文:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**説明:** すべてのレポートオブジェクトを再現するスクリプトを現在のデータテーブルに保存する。このオプションは、ウィンドウ内にレポートが複数ある場合に便利。作成されるスクリプトの名前は、引用符で囲んで指定しない限り、1つ目のプラットフォーム名となる。

**例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Oil1 Cusum.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << CUSUM Control Chart(
	Y( :weight ),
	H( 2 ),
	Lower Side( 1 ),
	Target( 8.1 ),
	K( 0.025 ),
	Sigma( 0.05 ),
	Head Start( 0.05 ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table;

```

**例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Oil1 Cusum.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << CUSUM Control Chart(
	Y( :weight ),
	H( 2 ),
	Lower Side( 1 ),
	Target( 8.1 ),
	K( 0.025 ),
	Sigma( 0.05 ),
	Head Start( 0.05 ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**構文:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**説明:** この分析を再現するJSLスクリプトを生成し、データテーブルのテーブルプロパティとして保存する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Oil1 Cusum.jmp" );
obj = dt << CUSUM Control Chart(
	Y( :weight ),
	H( 2 ),
	Lower Side( 1 ),
	Target( 8.1 ),
	K( 0.025 ),
	Sigma( 0.05 ),
	Head Start( 0.05 )
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**構文:** obj &lt;&lt; Save Script to Journal

**説明:** この分析を再現するJSLスクリプトを生成し、ジャーナルにそのスクリプトのボタンを追加する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Oil1 Cusum.jmp" );
obj = dt << CUSUM Control Chart(
	Y( :weight ),
	H( 2 ),
	Lower Side( 1 ),
	Target( 8.1 ),
	K( 0.025 ),
	Sigma( 0.05 ),
	Head Start( 0.05 )
);
obj << Save Script to Journal;

```

### Save Script to Report

**構文:** obj &lt;&lt; Save Script to Report

**説明:** この分析を再現するJSLスクリプトを生成し、レポートウィンドウに表示する。分析手順の記録を結果と一緒に残せる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Oil1 Cusum.jmp" );
obj = dt << CUSUM Control Chart(
	Y( :weight ),
	H( 2 ),
	Lower Side( 1 ),
	Target( 8.1 ),
	K( 0.025 ),
	Sigma( 0.05 ),
	Head Start( 0.05 )
);
obj << Save Script to Report;

```

### Save Script to Script Window

**構文:** obj &lt;&lt; Save Script to Script Window

**説明:** この分析を再現するJSLスクリプトを生成し、現在のスクリプトウィンドウに表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Oil1 Cusum.jmp" );
obj = dt << CUSUM Control Chart(
	Y( :weight ),
	H( 2 ),
	Lower Side( 1 ),
	Target( 8.1 ),
	K( 0.025 ),
	Sigma( 0.05 ),
	Head Start( 0.05 )
);
obj << Save Script to Script Window;

```

### SendToByGroup

**構文:** SendToByGroup( {":Column == level"}, command );

**説明:** プラットフォームコマンドまたは表示のカスタマイズコマンドをByグループの各水準に送る。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	By( :Sex ),
	SendToByGroup(
		{:sex == "F"},
		Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) )
	),
	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) )
);

```

### SendToEmbeddedScriptable

**構文:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**説明:** SendToEmbeddedScriptableは、埋め込まれたスクリプト可能なオブジェクトの設定を復元する。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
dt << Life Distribution(
	Y( :Time ),
	Censor( :Censor ),
	Censor Code( 1 ),
	<<Fit Weibull,
	SendToEmbeddedScriptable(
		Dispatch(
			{"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},
			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}
		)
	)
);

```

### SendToReport

**構文:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**説明:** Send To Reportはレポートの表示をカスタマイズするためにDispatchコマンドと一緒に使用される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :age ) ),
	Continuous Distribution( Column( :weight ) ),
	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) )
);

```

### Sync to Data Table Changes

**構文:** obj &lt;&lt; Sync to Data Table Changes

**説明:** 除外やデータの変更が行われた場合に同期する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
Wait( 1 );
dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );
dist << Sync To Data Table Changes;

```

### Title

**構文:** obj &lt;&lt; Title( "new title" )

**説明:** プラットフォームのタイトルを設定する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Oil1 Cusum.jmp" );
obj = dt << CUSUM Control Chart(
	Y( :weight ),
	H( 2 ),
	Lower Side( 1 ),
	Target( 8.1 ),
	K( 0.025 ),
	Sigma( 0.05 ),
	Head Start( 0.05 )
);
obj << Title( "My Platform" );

```

### Top Report

**構文:** obj &lt;&lt; Top Report

**説明:** レポート内のルートノードへの参照を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Oil1 Cusum.jmp" );
obj = dt << CUSUM Control Chart(
	Y( :weight ),
	H( 2 ),
	Lower Side( 1 ),
	Target( 8.1 ),
	K( 0.025 ),
	Sigma( 0.05 ),
	Head Start( 0.05 )
);
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Transform Column

**構文:** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**説明:** オブジェクトのローカルコンテキスト(通常はプラットフォーム)内に変換列を作成する。この変換列は、それを作成したプラットフォームの中のみで使用可能。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),
	Continuous Distribution( Column( :"age^2"n ) )
);

```

### View Web XML

**構文:** obj &lt;&lt; View Web XML

**説明:** インタラクティブHTMLレポートの作成に使うXMLコードを戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

### Window View

**構文:** obj = CUSUM Control Chart(...Window View( "Visible"|"Invisible"|"Private" )...)

**説明:** レポートとして作成するウィンドウの種類を設定する。デフォルトでは、Visibleレポートウィンドウが作成される。Invisible のウィンドウは画面に表示されないが、Window()などの関数によって検出できる。Private のウィンドウにはほとんどのウィンドウメッセージを送れるが、検出することはできないため、レポートオブジェクトを通してアクセスする必要がある。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );
eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;
biv << Close Window;
New Window( "Bivariate Equation",
	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) )
);

```

## 列

### By

**構文:** By( column )

**説明:** 起動時にBy列を指定する。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << CUSUM Control Chart( Y( :DIAMETER ), X( :DAY ), By( :Phase ) );

```

### X

**構文:** X( column )

**説明:** 起動時にX列を指定する。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Oil1 Cusum.jmp" );
obj = dt << CUSUM Control Chart(
	Y( :weight ),
	X( :hour ),
	H( 2 ),
	Lower Side( 1 ),
	Target( 8.1 ),
	K( 0.025 ),
	Sigma( 0.05 ),
	Head Start( 0.05 )
);

```

### Y

**構文:** Y( column )

**説明:** 起動時にY列を指定する。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Oil1 Cusum.jmp" );
obj = dt << CUSUM Control Chart(
	Y( :weight ),
	H( 2 ),
	Lower Side( 1 ),
	Target( 8.1 ),
	K( 0.025 ),
	Sigma( 0.05 ),
	Head Start( 0.05 )
);

```

## 関連するコンストラクター

### CUSUM Control Chart

**構文:** CUSUM Control Chart( Y( column ), &lt;X( column )&gt;, &lt;By( column )&gt;, &lt;Data Units( 0|1 )&gt;, &lt;Show Excluded Region( 0|1 )&gt; )

**説明:** 目標値からのサブグループ平均の偏差の累積和をプロットした管理図を作成する。この管理図は、表形式のCUSUM管理図とも呼ばれている。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Oil1 Cusum.jmp" );
obj = dt << CUSUM Control Chart(
	Y( :weight ),
	H( 2 ),
	Lower Side( 1 ),
	Target( 8.1 ),
	K( 0.025 ),
	Sigma( 0.05 ),
	Head Start( 0.05 )
);

```

## 項目のメッセージ

### ARL Profiler

**構文:** obj &lt;&lt; ARL Profiler( state=0|1 )

**説明:** パラメータの変化に伴う平均連長のインタラクティブなプロファイルを表示または非表示にする。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Oil1 Cusum.jmp" );
obj = dt << CUSUM Control Chart(
	Y( :weight ),
	H( 2 ),
	Lower Side( 1 ),
	Target( 8.1 ),
	K( 0.025 ),
	Sigma( 0.05 ),
	Head Start( 0.05 )
);
obj << ARL Profiler( 1 );

```

### Alarm Script

**構文:** Alarm Script(Write("...")|Speak("...")|Mail(address, subject,"...") )

**説明:** 管理図上の点がテストで不合格になるたびにメッセージを送信する。メッセージは、ログに送ったり、音声で伝えたり、メールで送ったりすることができる。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Oil1 Cusum.jmp" );
obj = dt << CUSUM Control Chart(
	Alarm Script(
		Write(
			"Out of Control for test ",
			qc_test,
			" in column ",
			qc_col,
			" in sample ",
			qc_sample,
			". \!N"
		)
	),
	Y( :weight ),
	H( 2 ),
	Lower Side( 1 ),
	Target( 8.1 ),
	K( 0.025 ),
	Sigma( 0.05 ),
	Head Start( 0.05 )
);
obj << Test Beyond Limits( 1 );

```

### Control Panel

**構文:** obj &lt;&lt; Control Panel( state=0|1 )

**説明:** パラメータの現在の値をレポートとして表示する。これらのパラメータ値は変更可能。 デフォルトではオン。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Oil1 Cusum.jmp" );
obj = dt << CUSUM Control Chart(
	Y( :weight ),
	H( 2 ),
	Lower Side( 1 ),
	Target( 8.1 ),
	K( 0.025 ),
	Sigma( 0.05 ),
	Head Start( 0.05 )
);
Wait( 1 );
obj << Control Panel( 0 );

```

### Data Units

**構文:** obj = CUSUM Control Chart(...Data Units( state=0|1 )...)

**説明:** レポートで標準偏差の単位ではなくデータの単位を使用するよう指定する。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Oil1 Cusum.jmp" );
obj = dt << CUSUM Control Chart(
	Y( :weight ),
	H( 0.1 ),
	Lower Side( 1 ),
	Target( 8.1 ),
	K( 0.025 ),
	Sigma( 0.05 ),
	Head Start( 0.05 ),
	Data Units( 1 )
);

```

### Get Limits

**構文:** obj &lt;&lt; Get Limits

**説明:** 選択されたデータテーブルから管理限界を読み込み、管理図の管理限界に設定する。

**JMP追加されたバージョン:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Oil1 Cusum.jmp" );
obj = dt << CUSUM Control Chart(
	Y( :weight ),
	H( 2 ),
	Lower Side( 1 ),
	Target( 8.1 ),
	K( 0.025 ),
	Sigma( 0.05 ),
	Head Start( 0.05 )
);
limitsTable = New Table( "Cusum Limits",
	Add Rows( 4 ),
	New Column( "_LimitsKey", Character, Set Values( {"_H", "_K", "_Std Dev", "_Mean"} ) ),
	New Column( "weight", Set Values( [4, 0.5, 0.01, 8.1] ) )
);
Wait();
obj << Get Limits( limitsTable );

```

### H

**構文:** obj &lt;&lt; H( number=5 )

**説明:** 管理限界を定義するパラメータの値を指定する。データ単位オプションが指定されていない場合、これはhパラメータ。データ単位オプションが指定されている場合はHパラメータ。Hは、hにシグマを掛けたもの。 デフォルトの値は"5"。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Oil1 Cusum.jmp" );
obj = dt << CUSUM Control Chart(
	Y( :weight ),
	H( 2 ),
	Lower Side( 1 ),
	Target( 8.1 ),
	K( 0.025 ),
	Sigma( 0.05 ),
	Head Start( 0.05 )
);
obj << H( 4.5 );

```

### Head Start

**構文:** obj &lt;&lt; Head Start( number )

**説明:** 最初の標本より前における累積和を指定する。ゼロ以外の値から累積和を開始すると、標本の冒頭付近でのCUSUM管理図の感度が高くなる。このパラメータは、高速初期応答値(FIR値; Fast Initial Response value)とも呼ばれる。デフォルトでは0に設定されている。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Oil1 Cusum.jmp" );
obj = dt << CUSUM Control Chart(
	Y( :weight ),
	H( 2 ),
	Lower Side( 1 ),
	Target( 8.1 ),
	K( 0.025 ),
	Sigma( 0.05 ),
	Head Start( 0.05 )
);
obj << Head start( 1.0 );

```

### K

**構文:** obj &lt;&lt; K( number=0.5 )

**説明:** 検出したい平均の最小の変化を定義するパラメータの値。データ単位オプションが指定されていない場合、これはkパラメータ。データ単位オプションが指定されている場合はKパラメータ。Kは、kにシグマを掛けたもの。 デフォルトの値は"0.5"。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Oil1 Cusum.jmp" );
obj = dt << CUSUM Control Chart(
	Y( :weight ),
	H( 2 ),
	Lower Side( 1 ),
	Target( 8.1 ),
	K( 0.025 ),
	Sigma( 0.05 ),
	Head Start( 0.05 )
);
obj << K( 0.1 );

```

### Lower Side

**構文:** obj &lt;&lt; Lower Side( state=0|1 )

**説明:** 管理図において、負値累積和を示す折れ線の表示/非表示を切り替える。 デフォルトではオン。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Oil1 Cusum.jmp" );
obj = dt << CUSUM Control Chart(
	Y( :weight ),
	H( 2 ),
	Lower Side( 1 ),
	Target( 8.1 ),
	K( 0.025 ),
	Sigma( 0.05 ),
	Head Start( 0.05 )
);
obj << Lower Side( 0 );

```

### Parameters Report

**構文:** obj &lt;&lt; Parameters Report( state=0|1 )

**説明:** パラメータレポートを表示または非表示にする。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Oil1 Cusum.jmp" );
obj = dt << CUSUM Control Chart(
	Y( :weight ),
	H( 2 ),
	Lower Side( 1 ),
	Target( 8.1 ),
	K( 0.025 ),
	Sigma( 0.05 ),
	Head Start( 0.05 )
);
obj << Parameters Report( 1 );

```

### Reset to Defaults

**構文:** obj &lt;&lt; Reset to Defaults

**説明:** すべてのパラメータをデフォルト値に戻す。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Oil1 Cusum.jmp" );
obj = dt << CUSUM Control Chart(
	Y( :weight ),
	H( 2 ),
	Lower Side( 1 ),
	Target( 8.1 ),
	K( 0.025 ),
	Sigma( 0.05 ),
	Head Start( 0.05 )
);
obj << H( 3 );
Wait( 1 );
obj << Reset to Defaults();

```

### Save Limits

**構文:** obj &lt;&lt; Save Limits( "列に"|"新しいテーブルに" )

**説明:** 管理図のパラメータを列プロパティまたは新しいデータテーブルのいずれかに保存する。



in Columnを指定すると、平均が管理限界列プロパティに保存される。



in New Tableを指定すると、パラメータh、k、標準偏差、平均、開始値が新しいデータテーブルに保存される。

**JMP追加されたバージョン:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Oil1 Cusum.jmp" );
obj = dt << CUSUM Control Chart(
	Y( :weight ),
	H( 2 ),
	Lower Side( 1 ),
	Target( 8.1 ),
	K( 0.025 ),
	Sigma( 0.05 ),
	Head Start( 0.05 )
);
Wait();
obj << Save Limits( "in Column" );
Wait();
obj << Save Limits( "in New Table" );

```

### Save Sigma

**構文:** obj &lt;&lt; Save Sigma

**説明:** 管理図で使用されているシグマを、データテーブルの列に列プロパティとして保存する。

**JMP追加されたバージョン:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Oil1 Cusum.jmp" );
obj = dt << CUSUM Control Chart(
	Y( :weight ),
	H( 2 ),
	Lower Side( 1 ),
	Target( 8.1 ),
	K( 0.025 ),
	Sigma( 0.05 ),
	Head Start( 0.05 )
);
obj << Save Sigma;

```

### Save Summaries

**構文:** obj &lt;&lt; Save Summaries

**説明:** CUSUM管理図(累積和管理図)の各サブグループの統計量を、新しいデータテーブルに保存する。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Oil1 Cusum.jmp" );
obj = dt << CUSUM Control Chart(
	Y( :weight ),
	H( 2 ),
	Lower Side( 1 ),
	Target( 8.1 ),
	K( 0.025 ),
	Sigma( 0.05 ),
	Head Start( 0.05 )
);
obj << Save Summaries;

```

### Show ARL

**構文:** obj &lt;&lt; Show ARL( state=0|1 )

**説明:** CUSUM(累積和)管理図から計算された平均連長(ARL)のレポートの表示/非表示を切り替える。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Oil1 Cusum.jmp" );
obj = dt << CUSUM Control Chart(
	Y( :weight ),
	H( 2 ),
	Lower Side( 1 ),
	Target( 8.1 ),
	K( 0.025 ),
	Sigma( 0.05 ),
	Head Start( 0.05 )
);
obj << Show ARL( 1 );

```

### Show Center Line

**構文:** obj &lt;&lt; Show Center Line( state=0|1 )

**説明:** 中心線の表示/非表示を切り替える。 デフォルトではオン。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Oil1 Cusum.jmp" );
obj = dt << CUSUM Control Chart(
	Y( :weight ),
	H( 2 ),
	Lower Side( 1 ),
	Target( 8.1 ),
	K( 0.025 ),
	Sigma( 0.05 ),
	Head Start( 0.05 )
);
obj << Show Center Line( 0 );

```

### Show Excluded Region

**構文:** obj = CUSUM Control Chart(...Show Excluded Region( state=0|1 )...)

**説明:** 完全に除外されているサブグループをCUSUM管理図の横軸に表示するかどうかを指定する。X変数が指定されている場合のみ使用可能。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
dt << Select Rows( {31, 32, 33, 34, 35, 36, 37, 38, 39, 40} ) << exclude << hide;
obj = dt << CUSUM Control Chart( Y( :Gap ), Subgroup( :Sample ), Show Excluded Region( 0 ) );

```

### Show Limits

**構文:** obj &lt;&lt; Show Limits( state=0|1 )

**説明:** 限界の表示/非表示を切り替える。 デフォルトではオン。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Oil1 Cusum.jmp" );
obj = dt << CUSUM Control Chart(
	Y( :weight ),
	H( 2 ),
	Lower Side( 1 ),
	Target( 8.1 ),
	K( 0.025 ),
	Sigma( 0.05 ),
	Head Start( 0.05 )
);
obj << Show Limits( 0 );

```

### Show Shift Lines

**構文:** obj &lt;&lt; Show Shift Lines( state=0|1 )

**説明:** 管理図にシフトを示す縦線を表示する。シフト線は、シフトの始まりを示す。データでシフトが検出された場合のみ使用可能。 デフォルトではオン。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Oil1 Cusum.jmp" );
obj = dt << CUSUM Control Chart(
	Y( :weight ),
	H( 2 ),
	Lower Side( 1 ),
	Target( 8.1 ),
	K( 0.025 ),
	Sigma( 0.05 ),
	Head Start( 0.05 )
);
Wait( 1 );
obj << Show Shift Lines( 0 );

```

### Sigma

**構文:** obj &lt;&lt; Sigma( number )

**説明:** 既知の標準偏差の値を指定する。デフォルトの値は、Y列の移動範囲の平均から求められた値。X変数がある場合、Sigmaは要約データの移動範囲の平均から求められた値に設定される。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Oil1 Cusum.jmp" );
obj = dt << CUSUM Control Chart(
	Y( :weight ),
	H( 2 ),
	Lower Side( 1 ),
	Target( 8.1 ),
	K( 0.025 ),
	Sigma( 0.05 ),
	Head Start( 0.05 )
);
obj << Sigma( 2 );

```

### Target

**構文:** obj &lt;&lt; Target( number )

**説明:** 既知の平均値を指定する。これは、管理図の中心線の値。デフォルトでは、このパラメータはY列の「仕様限界」列プロパティで「目標値」に設定されています。Y列の「仕様限界」列プロパティで目標値が設定されていない場合は、Y列の全体平均に設定されます。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Oil1 Cusum.jmp" );
obj = dt << CUSUM Control Chart(
	Y( :weight ),
	H( 2 ),
	Lower Side( 1 ),
	Target( 8.1 ),
	K( 0.025 ),
	Sigma( 0.05 ),
	Head Start( 0.05 )
);
obj << Target( 9.5 );

```

### Test Beyond Limits

**構文:** obj &lt;&lt; Test Beyond Limits( state=0|1 )

**説明:** CUSUM管理図(累積和管理図)で、上側限界を上回る点、または下側限界を下回る点を赤い円で囲む。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Oil1 Cusum.jmp" );
obj = dt << CUSUM Control Chart(
	Y( :weight ),
	H( 2 ),
	Lower Side( 1 ),
	Target( 8.1 ),
	K( 0.025 ),
	Sigma( 0.05 ),
	Head Start( 0.05 )
);
obj << Test Beyond Limits( 1 );

```

### Tune Chart

**構文:** obj &lt;&lt; Tune Chart( &lt;0|1&gt; | Min( value, Max( value ) ) )

**説明:** kパラメータの値を設定するためのコントロールの表示/非表示を切り替える。この値は、Y変数に対する受け入れ範囲を指定することで設定する。スクリプトでは、許容範囲を直接指定することもできる。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Oil1 Cusum.jmp" );
obj = dt << CUSUM Control Chart(
	Y( :weight ),
	H( 2 ),
	Lower Side( 1 ),
	Target( 8.1 ),
	K( 0.025 ),
	Sigma( 0.05 ),
	Head Start( 0.05 )
);
obj << Tune Chart( Min( 8.08, Max( 8.12 ) ) );

```

### Upper Side

**構文:** obj &lt;&lt; Upper Side( state=0|1 )

**説明:** 管理図において、正値累積和を示す折れ線の表示/非表示を切り替える。 デフォルトではオン。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Oil1 Cusum.jmp" );
obj = dt << CUSUM Control Chart(
	Y( :weight ),
	H( 2 ),
	Lower Side( 1 ),
	Target( 8.1 ),
	K( 0.025 ),
	Sigma( 0.05 ),
	Head Start( 0.05 )
);
obj << Upper Side( 0 );

```

