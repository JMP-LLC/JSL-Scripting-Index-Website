# Text Explorer



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
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
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

### Column Switcher

**構文:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**説明:** プラットフォームの変数を変更するための設定パネルを追加する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);

```

### Copy ByGroup Script

**構文:** obj &lt;&lt; Copy ByGroup Script

**説明:** この分析を再現するJSLスクリプトを生成し、クリップボードにコピーする。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), By( _bycol ) );
obj[1] << Copy ByGroup Script;

```

### Copy Script

**構文:** obj &lt;&lt; Copy Script

**説明:** この分析を再現するJSLスクリプトを生成し、クリップボードにコピーする。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Copy Script;

```

### Data Table Window

**構文:** obj &lt;&lt; Data Table Window

**説明:** この分析に使用したデータテーブルのウィンドウを手前に表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
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
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), By( _bycol ) );
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
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

### Get Data Table

**構文:** obj &lt;&lt; Get Data Table

**説明:** データテーブルへの参照を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
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
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**構文:** obj &lt;&lt; Get Script With Data Table

**説明:** この分析を再現するスクリプト(JSL)をデータテーブルへの参照も含めて生成し、それを式として戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**構文:** obj &lt;&lt; Get Timing

**説明:** プラットフォームの起動にかかった時間を取得する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
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

### Local Data Filter

**構文:** obj &lt;&lt; Local Data Filter

**説明:** このプラットフォームに対してのみ有効なフィルタで、データを特定のグループまたは範囲にフィルタリングする。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :country ) ),
	Local Data Filter(
		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),
		Mode( Show( 1 ), Include( 1 ) )
	)
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

### Paste Local Data Filter

**構文:** obj &lt;&lt; Paste Local Data Filter

**説明:** クリップボードにあるローカルデータフィルタを現在のレポートに適用する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
filter = dist << Local Data Filter(
	Add Filter( columns( :Region ), Where( :Region == "MW" ) )
);
filter << Copy Local Data Filter;
dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );
Wait( 1 );
dist2 << Paste Local Data Filter;

```

### Redo Analysis

**構文:** obj &lt;&lt; Redo Analysis

**説明:** 同じ分析をやり直し新しいウィンドウに表示する。データが変更されていると分析結果は異なる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**構文:** obj &lt;&lt; Redo ByGroup Analysis

**説明:** 同じ分析をやり直し新しいウィンドウに表示する。データが変更されていると分析結果は異なる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), By( _bycol ) );
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**構文:** obj &lt;&lt; Relaunch Analysis

**説明:** プラットフォームの起動ウィンドウを開き、レポートを作成した時の設定を表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**構文:** obj &lt;&lt; Relaunch ByGroup

**説明:** プラットフォームの起動ウィンドウを開き、レポートを作成した時の設定を表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), By( _bycol ) );
obj[1] << Relaunch ByGroup;

```

### Remove Column Switcher

**構文:** obj &lt;&lt; Remove Column Switcher

**説明:** プラットフォームに最後に追加された列スイッチャーを削除する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
Wait( 2 );
obj << Remove Column Switcher;

```

### Remove Local Data Filter

**構文:** obj &lt;&lt; Remove Local Data Filter

**説明:** すでに作成されているローカルデータフィルタを削除し、プラットフォームはデータテーブル内のすべてのデータを使用した状態に戻る。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dist = dt << Distribution(
	Nominal Distribution( Column( :country ) ),
	Local Data Filter(
		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),
		Mode( Show( 1 ), Include( 1 ) )
	)
);
Wait( 2 );
dist << remove local data filter;

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
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**構文:** obj &lt;&lt; Report View( "完全"|"要約" )

**説明:** レポートビューは、プラットフォームレポートの詳細を表示するかどうかを決定する。Fullはすべての詳細を表示し、Summaryはプラットフォームにより限定されたものだけを表示する。 動作をカスタマイズするため、各ディスプレイボックスは<<Set Summary Behaviorメッセージをサポートする。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**構文:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**説明:** 分析を再現するためのJSLスクリプトを作成し、データテーブルにテーブルプロパティとして保存する。スクリプトの名前を指定できる。Append Suffixオプションは、スクリプト名に数字の接尾辞を追加する。これにより、同名のスクリプトが存在していても区別できる。Promptオプションは、ユーザにスクリプト名の指定を促す。Replaceオプションは、同名の既存のスクリプトを置き換える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), By( _bycol ) );
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**構文:** obj &lt;&lt; Save ByGroup Script to Journal

**説明:** この分析を再現するJSLスクリプトを生成し、ジャーナルにそのスクリプトのボタンを追加する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), By( _bycol ) );
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**構文:** obj &lt;&lt; Save ByGroup Script to Script Window

**説明:** この分析を再現するJSLスクリプトを生成し、現在のスクリプトウィンドウに表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), By( _bycol ) );
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**構文:** obj &lt;&lt; Save Script for All Objects

**説明:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**構文:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**説明:** すべてのレポートオブジェクトを再現するスクリプトを現在のデータテーブルに保存する。このオプションは、ウィンドウ内にレポートが複数ある場合に便利。作成されるスクリプトの名前は、引用符で囲んで指定しない限り、1つ目のプラットフォーム名となる。

**例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table;

```

**例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**構文:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**説明:** この分析を再現するJSLスクリプトを生成し、データテーブルのテーブルプロパティとして保存する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**構文:** obj &lt;&lt; Save Script to Journal

**説明:** この分析を再現するJSLスクリプトを生成し、ジャーナルにそのスクリプトのボタンを追加する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Save Script to Journal;

```

### Save Script to Report

**構文:** obj &lt;&lt; Save Script to Report

**説明:** この分析を再現するJSLスクリプトを生成し、レポートウィンドウに表示する。分析手順の記録を結果と一緒に残せる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Save Script to Report;

```

### Save Script to Script Window

**構文:** obj &lt;&lt; Save Script to Script Window

**説明:** この分析を再現するJSLスクリプトを生成し、現在のスクリプトウィンドウに表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
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
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Title( "My Platform" );

```

### Top Report

**構文:** obj &lt;&lt; Top Report

**説明:** レポート内のルートノードへの参照を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
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

**構文:** obj = Text Explorer(...Window View( "Visible"|"Invisible"|"Private" )...)

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

**構文:** obj &lt;&lt; By( column(s) )

**説明:** 変数の水準ごとに1つずつ、複数のレポートを作成する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), By( _bycol ) );

```

### ID

**構文:** obj &lt;&lt; ID( column )

**説明:** 「積み重ねた文書単語行列の保存」出力データテーブル、および「潜在クラス分析」レポートにおいて、別々の回答者を識別するために使用される列。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer(
	Text Columns( :Reasons Not to Floss ),
	ID( :School Age Children )
);
obj << Save Stacked DTM For Association;

```

### Text Columns

**構文:** obj &lt;&lt; Text Columns( column(s) )

**説明:** 処理対象の文書を含むテキスト列。この列に含まれる各行におけるデータが1つの文書として扱われる。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );

```

### Validation

**構文:** obj &lt;&lt; Validation( column )

**説明:** 2～3つの異なる値を含む数値列。値が2つある場合は、小さい方の値を学習セット、大きい方の値を検証セットとする。値が3つある場合は、小さい方から学習セット・検証セット・テストセットとする。値が4つ以上ある場合、小さい方から3つの値が使用され、残りは無視される。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer(
	Text Columns( :Reasons Not to Floss ),
	Validation( :School Age Children )
);
obj << Latent Class Analysis(
	Number of Clusters( 5 ),
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 2 )
);

```

## 関連するコンストラクター

### Text Explorer

**構文:** Text Explorer( Text Columns( columns ) )

**説明:** 列のテキストを単語に分けてそれらをカウントし、他の列との関連付け、指示変数の保存、関係性のグラフ化などを行う。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );

```

## 項目のメッセージ

### Add Delimiters

**構文:** obj &lt;&lt; Add Delimiters( "string" )

**説明:** 語を分割する区切り文字のデフォルトのリストに、ユーザが指定した文字列を追加する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Tokenizing( "Basic Words" );
obj << Show Delimiters( 1 );
Wait( 1 );
obj << Add Delimiters( "{}" );

```

### Add Phrase Exceptions

**構文:** obj &lt;&lt; Add Phrase Exceptions( list )

**説明:** 単語のリストから削除する句を、リスト形式で追加する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Add Phrases( {"twice a day", "every time", "time consuming"} );
Wait( 1 );
obj << Add Phrase Exceptions( {"every time"} );

```

### Add Phrases

**構文:** obj &lt;&lt; Add Phrases( list )

**説明:** 1つの単語のように分析する句を、リスト形式で指定する。指定された句それぞれは、1つの単語として単語のリストに追加される。また、それに伴い、単語の数も更新される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Add Phrases( {"twice a day", "every time"} );

```

### Add Recode Exceptions

**構文:** obj &lt;&lt; Add Recode Exceptions( { {pair1}, {pair2}, ...} )

**説明:** 削除すべき、再コード化されたテキスト文字列のリストを追加する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Add Recodes( {{"everytime", "every time"}, {"neglagent", "negligent"}} );
obj << Show Recodes( 1 );
Wait( 1 );
obj << Add Recode Exceptions( {"neglagent", "negligent"} );

```

### Add Recodes

**構文:** obj &lt;&lt; Add Recodes( { {pair1}, {pair2}, ...} )

**説明:** 再コード化する単語のペアのリストを追加する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Add Recodes( {{"everytime", "every time"}, {"neglagent", "negligent"}} );
obj << Show Recodes( 1 );

```

### Add Stem Exceptions

**構文:** obj &lt;&lt; Add Stem Exceptions( list )

**説明:** 語幹抽出から除外する単語を、リスト形式で追加する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Stemming( "Stem All Terms" );
obj << Show Stem Report( 1 );
Wait( 1 );
obj << Add Stem Exceptions( {"care", "brush", "like"} );

```

### Add Stem Overrides

**構文:** obj &lt;&lt; Add Stem Overrides( list )

**説明:** 常に語幹抽出する単語のリストを追加する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Stemming( "Stem All Terms" );
obj << Show Stem Report( 1 );
Wait( 1 );
obj << Add Stem Overrides( {"care"} );
obj << Add Stem Exceptions( {"care", "brush", "like"} );

```

### Add Stop Word Exceptions

**構文:** obj &lt;&lt; Add Stop Word Exceptions( list )

**説明:** ストップワードから除外する単語を、リスト形式で追加する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Show Stop Words( 1 );
Wait( 1 );
obj << Add Stop Word Exceptions( {"again", "are"} );

```

### Add Stop Words

**構文:** obj &lt;&lt; Add Stop Words( list )

**説明:** 単語のリストから削除し、分析で無視する単語を、リストの形式で追加する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Show Stop Words( 1 );
Wait( 1 );
obj << Add Stop Words( {"use", "feel", "like"} );

```

### Cloud Width

**構文:** obj &lt;&lt; Cloud Width( number )

**説明:** ワードクラウドの幅を、指定されたピクセル数に設定する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Show Word Cloud( 1 );
obj << Cloud Width( 150 );

```

### Coloring

**構文:** obj &lt;&lt; Coloring( "なし"|"単色"|"グレー濃淡"|"任意の色"|"列の値による色分け..." )

**説明:** ワードクラウドにおける単語の色分けを指定する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Show Word Cloud( 1 );
obj << Coloring( "Arbitrary Colors" );

```

### Custom Stemmer

**構文:** obj &lt;&lt; Custom Stemmer( Function( {string, dot}, ... ) )

**説明:** 関数内に指定された方法に従って，語幹抽出を実行する。その関数には、stringとdotという2つの引数を指定すること。引数stringは、文書内における単語を意味する。この単語がどのようなパターンを持っているときに、どのように変換するかを関数内で指定する。dotによって、変換後の文字列にドットを付け加えることができる。変換後の文字列には、ドットを最後に付け加えておいたほうがよい。語幹抽出が行われた場合、文書内の単語ごとに指定された関数の処理が適用される。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
//This custom stemmer looks only for words ending in 'ing' and replaces the end with the stemming dot.
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Stemming( "Stem All Terms" );
obj << Show Stem Report( 1 );
obj << Custom Stemmer(
	Function( {string, dot},
		If( Ends With( string, "ing" ),
			Substr( string, 1, Length( string ) - 3 ) || dot,
			string
		)
	)
);

```

### Customize Regex

**構文:** obj = Text Explorer(...Customize Regex( state=0|1 )...)

**説明:** 「テキストエクスプローラ」の正規表現エディタを開く。このエディタにおいて、「テキストエクスプローラ」の正規表現の設定を変更できる。このオプションは、トークン化処理としてRegexを用いる場合にのみ利用可能。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Tokenizing( "Regex" );
obj << Customize Regex();

```

### Discriminant Analysis

**構文:** obj &lt;&lt; Discriminant Analysis( Maximum Number of Terms( number ), Minimum Number of Terms( number ), Weighting( "Binary"|"Ternary"|"Frequency"|"Log Freq"|"TF IDF" ), Number oc Singular Vectors( number ), Column( :column name ) )

**説明:** 文書単語行列に基づく線形判別分析によって、各文書が指定された列のカテゴリをどのように分類するを分析する。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Discriminant Analysis(
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Column( :Gender )
);

```

### Font

**構文:** obj &lt;&lt; Font( font )

**説明:** ワードクラウドにおける単語のフォント、スタイル、サイズを指定する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Show Word Cloud( 1 );
obj << Font( "Arial Narrow", 11, "Plain" );

```

### Include Builtin Phrases

**構文:** obj &lt;&lt; Include Builtin Phrases( state=0|1 )

**説明:** トークン化処理で使用される句に、ビルトインの句が含まれることを指定する。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Include Builtin Phrases( 0 );

```

### Include Builtin Stop Words

**構文:** obj &lt;&lt; Include Builtin Stop Words( state=0|1 )

**説明:** トークン化処理で使用されるストップワードに、ビルトインのストップワードが含まれることを指定する。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Include Builtin Stop Words( 0 );

```

### Language

**構文:** obj = Text Explorer(...Language( "表示言語"|"英語"|"ドイツ語"|"スペイン語"|"フランス語"|"イタリア語"|"日本語"|"中国語(簡体字)"|"中国語(繁体字)"|"韓国語" )...)

**説明:** テキスト処理に使用する言語を指定する。これは、語幹抽出と、ストップワード、再コード化、および句のビルトインリストに影響する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( TextColumns( :Reasons Not to Floss ), Language( "German" ) );

```

### Latent Class Analysis

**構文:** obj &lt;&lt; Latent Class Analysis( Number of Clusters( number ), Maximum Number of Terms( number ), Minimum Term Frequency( number ) )

**説明:** 2値の文書単語行列に対して潜在クラス分析を行う。潜在クラス分析では、類似の文書が同じクラスターに属する確率が高くなるように、潜在クラスモデルが推定される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Latent Class Analysis(
	Number of Clusters( 5 ),
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 2 )
);

```

### Latent Semantic Analysis

**構文:** obj &lt;&lt; Latent Semantic Analysis( Maximum Number of Terms( number ), Minimum Term Frequency( number ), Weighting( "Binary"|"Ternary"|"Frequency"|"Log Freq"|"TF IDF" ), Number of Singular Vectors( number ), Centering and Scaling( "Centered and Scaled",|"Centered"|"Uncentered" ) ); obj &lt;&lt; SVD( Maximum Number of Terms( number ), Minimum Term Frequency( number ), Weighting( "Binary"|"Ternary"|"Frequency"|"Log Freq"|"TF IDF" ), Number of Singular Vectors( number ), Centering and Scaling( "Centered and Scaled",|"Centered"|"Uncentered" ) )

**説明:** 文書単語行列の疎特異値分解を実行する。

**例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Latent Semantic Analysis(
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 10 ),
	Centering and Scaling( "Centered" )
);

```

**例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << SVD(
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 10 ),
	Centering and Scaling( "Centered" )
);

```

### Layout

**構文:** obj &lt;&lt; Layout( "度数順"|"アルファベット順"|"中心から配置" )

**説明:** ワードクラウドにおける単語の配置を指定する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Show Word Cloud( 1 );
obj << Layout( "Alphabetical" );

```

### Maximum Characters per Word

**構文:** obj = Text Explorer(...Maximum Characters per Word( number=50 )...)

**説明:** 分析に含める単語の最大文字数をnumberに指定する。 デフォルトの値は"50"。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer(
	TextColumns( :Reasons Not to Floss ),
	Maximum Characters per Word( 15 )
);

```

### Maximum Number of Phrases

**構文:** obj = Text Explorer(...Maximum Number of Phrases( number=5000 )...)

**説明:** 引数numberに、上限を指定する。ここに指定された上限以下の出現回数をもつ句のみが、句のリストに表示される。デフォルトは上限がない。 デフォルトの値は"5000"。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer(
	TextColumns( :Reasons Not to Floss ),
	Maximum Number of Phrases( 50 )
);

```

### Maximum Words per Phrase

**構文:** obj = Text Explorer(...Maximum Words per Phrase( number=4 )...)

**説明:** 分析対象の句に含まれる単語の最大数をnumberに指定する。 デフォルトの値は"4"。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer(
	TextColumns( :Reasons Not to Floss ),
	Maximum Words per Phrase( 2 )
);

```

### Minimum Characters per Word

**構文:** obj = Text Explorer(...Minimum Characters per Word( number=1 )...)

**説明:** 分析に含める単語の最小文字数をnumberに指定する。 デフォルトの値は"1"。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer(
	TextColumns( :Reasons Not to Floss ),
	Minimum Characters per Word( 3 )
);

```

### Minimum Frequency for Phrase

**構文:** obj &lt;&lt; Minimum Frequency for Phrase( number )

**説明:** 引数numberに、下限を指定する。ここに指定された下限以上の出現回数をもつ句のみが、句のリストに表示される。デフォルト値は0である。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Minimum Frequency for Phrase( 5 );

```

### Phrases Alphabetical

**構文:** obj &lt;&lt; Phrases Alphabetical( state=0|1 )

**説明:** 句のリストにおいて、文字コード順に並べて句を表示する。デフォルトでは、度数の降順で表示されている。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Phrases Alphabetical( 1 );

```

### Rotated SVD

**構文:** obj &lt;&lt; Topic Analysis( Number of Topics ( number ) ) obj &lt;&lt; Rotated SVD( Number of Topics( number ) )

**説明:** 文書単語行列に対する特異値分解の結果をVarimax回転する。この結果で得られる単語の塊を、「トピック」とみなす。

**例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Latent Semantic Analysis(
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 10 ),
	Centering and Scaling( "Centered" )
);
obj << Show Term List( 0 );
obj << Show Phrase List( 0 );
obj << Show Summary Counts( 0 );

obj << Topic Analysis( Number of Topics( 5 ) );

```

**例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Latent Semantic Analysis(
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 10 ),
	Centering and Scaling( "Centered" )
);
obj << Show Term List( 0 );
obj << Show Phrase List( 0 );
obj << Show Summary Counts( 0 );

obj << Rotated SVD( Number of Topics( 5 ) );

```

### SVD

**構文:** obj &lt;&lt; Latent Semantic Analysis( Maximum Number of Terms( number ), Minimum Term Frequency( number ), Weighting( "Binary"|"Ternary"|"Frequency"|"Log Freq"|"TF IDF" ), Number of Singular Vectors( number ), Centering and Scaling( "Centered and Scaled",|"Centered"|"Uncentered" ) ); obj &lt;&lt; SVD( Maximum Number of Terms( number ), Minimum Term Frequency( number ), Weighting( "Binary"|"Ternary"|"Frequency"|"Log Freq"|"TF IDF" ), Number of Singular Vectors( number ), Centering and Scaling( "Centered and Scaled",|"Centered"|"Uncentered" ) )

**説明:** 文書単語行列の疎特異値分解を実行する。

**例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Latent Semantic Analysis(
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 10 ),
	Centering and Scaling( "Centered" )
);

```

**例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << SVD(
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 10 ),
	Centering and Scaling( "Centered" )
);

```

### Save DTM Formula

**構文:** obj &lt;&lt; Save DTM Formula( Maximum Number of Terms( number ), Minimum Term Frequency( number ), Weight( "Binary"|"Ternary"|"Frequency"|"Log Freq"|"TF IDF" ) )

**説明:** Text Score 関数による計算式の列をデータテーブルに保存する。この計算式では、ベクトルが使われる。ベクトルの長さは、ユーザーが指定した単語の最大数、単語の最小度数、および重みのオプションに依存する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Save DTM Formula(
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" )
);

```

### Save Document Term Matrix

**構文:** obj &lt;&lt; Save Document Term Matrix( Maximum Number of Terms( number ), Minimum Term Frequency( number ), Weight( "Binary"|"Ternary"|"Frequency"|"Log Freq"|"TF IDF" ) )

**説明:** 文書単語行列の各列をデータテーブルに保存する。保存される列の数は、ユーザーが指定した単語の最大数、単語の最小度数、および重みのオプションに依存する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Save Document Term Matrix(
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" )
);

```

### Save Stacked DTM for Association

**構文:** obj &lt;&lt; Save Stacked DTM for Association

**説明:** 縦に積み重ねた文書単語行列を新しいデータテーブルに保存する。テキストエクスプローラの起動ウィンドウでID変数を指定しておくと、作成されるデータテーブルにそのID変数の値も保存される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Save Stacked DTM For Association;

```

### Save Term Table

**構文:** obj &lt;&lt; Save Term Table

**説明:** 「単語と句のリスト」における単語リストのJMPデータテーブルを作成する。このJMPデータテーブルには、各単語、各単語の出現回数、そして、各単語を含む文書数が含まれる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Save Term Table;

```

### SaveRegexColumn

**構文:** obj &lt;&lt; SaveRegexColumn( text )

**説明:** 指定されたカスタム正規表現を、データテーブルの新しい列に保存する。

```jsl

Names Default To Here( 1 );
 
dt = New Table( "WordTable",
	New Column( "Original Words",
		Character,
		"Nominal",
		Set Values( {"Quick brown", "foxes jumped", "over the", "lazy dog."} )
	)
);
dt << Text Explorer(
	Text Columns( :Original Words ), 
// the regex: [a-z]*? means 0 or more letters, reluctantly. [aeiou] means one vowel.	
	// {2} means repeat twice. 
	// [a-z]* means 0 or more letters, greedily. (the rest of the word)
	Set Regex(
		Custom(
			Title( "Two Vowels" ),
			Regex( "(([a-z]*?[aeiou]){2}[a-z]*)" ),
			Result( "\[\1]\" ),

		)
	),
	Include Builtin Stop Words( 0 ), // "over" is a stop word, but we want to see it
	SaveRegexColumn( "Poly Vowel Words" )
);

```

### Score Terms by Column

**構文:** obj &lt;&lt; Score Terms by Column( column )

**説明:** 指定した列の数値データに基づくスコアを、［単語テーブルの保存］オプションで作成したデータテーブルに保存する。スコアは、指定した列の数値データから単語ごとに算出される。このスコアは、指定した列の数値データを、単語の出現頻度で重み付けして平均した値である。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Score Terms By Column( :Salary );

```

### Sentiment Analysis

**構文:** obj &lt;&lt; Sentiment Analysis( state=0|1 )

**説明:** 辞書に基づく感情分析を行う。辞書に登録されている感情語を文書から抜き出し、各文書における肯定的感情、否定的感情、全体的感情をスコアリングする。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
sent = obj << Sentiment Analysis( 1 );

```

### Set Delimiters

**構文:** obj &lt;&lt; Set Delimiters( "string" )

**説明:** 語を分割する区切り文字のデフォルトのリストを、ユーザが指定した文字列で置換する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Tokenizing( "Basic Words" );
obj << Show Delimiters( 1 );
obj << Set Delimiters( " " );

```

### Set Regex

**構文:** obj &lt;&lt; Set Regex( ... )

**説明:** [Regex]によるトークン化で使用するデフォルトの正規表現を置換する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Set Regex( Library( "Words" ) );

```

### Show Delimiters

**構文:** obj &lt;&lt; Show Delimiters( state=0|1 )

**説明:** トークン化処理に使用された区切り文字の表示／非表示を切り替える。このオプションは、トークン化の方法が［基本ワード］であった場合のみ利用できる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Tokenizing( "Basic Words" );
Wait( 1 );
obj << Show Delimiters( 1 );

```

### Show Filters for all Tables

**構文:** obj &lt;&lt; Show Filters for all Tables( state=0|1 )

**説明:** レポート内の表の検索に使用できるフィルタの表示／非表示を切り替える。このオプションは、以下の表に適用される。ストップワード、指定した句、語幹の例外、単語と句のリスト、語幹レポート。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Show Filters for All Tables( 1 );

```

### Show Legend

**構文:** obj &lt;&lt; Show Legend( state=0|1 )

**説明:** ワードクラウドにおいて、凡例の表示／非表示を切り替える。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Show Word Cloud( 1 );
obj << Coloring( "Arbitrary Colors" );
Wait( 1 );
obj << Show Legend( 0 );

```

### Show Phrase List

**構文:** obj &lt;&lt; Show Phrase List( state=0|1 )

**説明:** 「単語と句のリスト」レポートにおいて、句リストの表示／非表示を切り替える。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Show Phrase List( 0 );

```

### Show Recodes

**構文:** obj &lt;&lt; Show Recodes( state=0|1 )

**説明:** 再コード化する単語のリストの表示／非表示を切り替える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Add Recodes( {{"flossing", "floss"}} );
Wait( 1 );
obj << Show Recodes( 1 );

```

### Show Selected Rows

**構文:** obj &lt;&lt; Show Selected Rows

**説明:** 現在選択されている文書のテキストを表示するウィンドウを開く。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
Current Data Table() << Select Rows( [1 2 3 4] );
obj << Show Selected Rows( 1 );

```

### Show Specified Phrases

**構文:** obj &lt;&lt; Show Specified Phrases( state=0|1 )

**説明:** 「指定した句」レポートの表示／非表示を切り替える。このレポートには、ユーザーが単語としてカウントするように指定した句の一覧が表示される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Show Specified Phrases( 1 );
Report( obj )["Specified Phrases"] << Close( 0 );

```

### Show Stem Exceptions

**構文:** obj &lt;&lt; Show Stem Exceptions( state=0|1 )

**説明:** 語幹抽出から除外される単語の表示／非表示を切り替える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Show Stem Exceptions( 1 );

```

### Show Stem Report

**構文:** obj &lt;&lt; Show Stem Report( state=0|1 )

**説明:** 語幹抽出したの2つの表を含むレポートの表示／非表示を切り替える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Stemming( "Stem for Combining" );
obj << Show Stem Report( 1 );

```

### Show Stop Words

**構文:** obj &lt;&lt; Show Stop Words( state=0|1 )

**説明:** 分析でストップワードとする単語のリストの表示／非表示を切り替える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Show Stop Words( 1 );

```

### Show Summary Counts

**構文:** obj &lt;&lt; Show Summary Counts( state=0|1 )

**説明:** レポートの先頭にある要約表の表示／非表示を切り替える。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Show Summary Counts( 0 );

```

### Show Term List

**構文:** obj &lt;&lt; Show Term List( state=0|1 )

**説明:** 「単語と句のリスト」レポートにおいて、単語リストの表示／非表示を切り替える。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Show Term List( 0 );

```

### Show Term and Phrase Options

**構文:** obj &lt;&lt; Show Term and Phrase Options( state=0|1 )

**説明:** 「単語と句のリスト」レポートのボタンの表示／非表示を切り替える。これらのボタンは、各リストのポップアップメニューで利用可能なオプションをボタンで表示したものである。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Show Term and Phrase Options( 1 );

```

### Show Word Cloud

**構文:** obj &lt;&lt; Show Word Cloud( state=0|1 )

**説明:** ワードクラウドの表示／非表示を切り替える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Show Word Cloud( 1 );

```

### Stemming

**構文:** obj = Text Explorer(...Stemming( "しない"|"同じ語幹の単語"|"すべての単語" )...)

**説明:** 先頭が同じで末尾が異なる語を同じとみなすかどうかを指定する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Stemming( "Stem All Terms" );

```

### Term Selection

**構文:** obj &lt;&lt; Term Selection( Models( Model( Response Column( &lt;column&gt; ), &lt;other models&gt; )), Model Choice( &lt;index&gt; ))

**説明:** 単語選択分析を実行する。指定された応答変数を説明するのに最良な単語を選択する。また、この単語選択分析では、応答変数が何かしらの判定である場合、感情分析にもなる。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
term = obj << Term Selection(
	Models(
		Model(
			Response Column( :Gender ),
			Fits(
				First Fit(
					Fit(
						Estimation Method( Elastic Net ),
						Validation Method( AICc ),
						Early Stopping,
						Model Summary( 0 ),
						Parameter Estimates for Original Predictors( 0 ),
						Effect Tests( 0 )
					)
				)
			)
		),
		Model(
			Response Column( :Single Status ),
			Target Levels( Target Number( 1 ), Target String( "1" ) ),
			Fit Settings( Estimation Method( Lasso ) ),
			Fits(
				First Fit(
					Fit(
						Estimation Method( Lasso ),
						Validation Method( AICc ),
						Early Stopping,
						Model Summary( 0 ),
						Parameter Estimates for Original Predictors( 0 ),
						Effect Tests( 0 )
					)
				)
			)
		),
		Current Model Settings(
			Response Column( :Single Status ),
			Target Levels( Target Number( 1 ), Target String( "1" ) ),
			Fit Settings( Estimation Method( Lasso ) )
		)
	),
	Model Choice( 2 )
);

```

### Terms Alphabetical

**構文:** obj &lt;&lt; Terms Alphabetical( state=0|1 )

**説明:** 単語のリストにおいて、文字コード順に並べて単語を表示する。デフォルトでは、度数の降順で表示されている。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Terms Alphabetical( 1 );

```

### Tokenizing

**構文:** obj = Text Explorer(...Tokenizing( "Regex"|"基本ワード" )...)

**説明:** テキストを解析し、単語またはトークンにする方法を指定する。指定できる方法は、[Regex]または[基本ワード]。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Tokenizing( "Basic Words" );

```

### Topic Analysis

**構文:** obj &lt;&lt; Topic Analysis( Number of Topics ( number ) ) obj &lt;&lt; Rotated SVD( Number of Topics( number ) )

**説明:** 文書単語行列に対する特異値分解の結果をVarimax回転する。この結果で得られる単語の塊を、「トピック」とみなす。

**例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Latent Semantic Analysis(
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 10 ),
	Centering and Scaling( "Centered" )
);
obj << Show Term List( 0 );
obj << Show Phrase List( 0 );
obj << Show Summary Counts( 0 );

obj << Topic Analysis( Number of Topics( 5 ) );

```

**例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Latent Semantic Analysis(
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 10 ),
	Centering and Scaling( "Centered" )
);
obj << Show Term List( 0 );
obj << Show Phrase List( 0 );
obj << Show Summary Counts( 0 );

obj << Rotated SVD( Number of Topics( 5 ) );

```

### Treat Numbers as Words

**構文:** obj = Text Explorer(...Treat Numbers as Words( state=0|1 )...)

**説明:** すべて数字で構成される語をトークンとして扱う。[基本ワード]によるトークン化の場合のみ使用可能。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Tokenizing( "Basic Words" );
obj << Treat Numbers as Words( 1 );

```

## Discriminant Analysis

### 関連するコンストラクター

#### Discriminant Analysis

**構文:** obj &lt;&lt; Discriminant Analysis( Maximum Number of Terms( number ), Minimum Number of Terms( number ), Weighting( "Binary"|"Ternary"|"Frequency"|"Log Freq"|"TF IDF" ), Number oc Singular Vectors( number ), Column( :column name ) )

**説明:** 文書単語行列に基づく線形判別分析によって、各文書が指定された列のカテゴリをどのように分類するを分析する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Discriminant Analysis(
	Maximum Number of Terms( 20 ),
	Minimum Term Frequency( 3 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 15 ),
	Column( :Floss )
);

```

### 項目のメッセージ

#### Canonical Plot

**構文:** obj &lt;&lt; Canonical Plot( state=0|1, N Canon( number ) )

**説明:** 正準スコアをプロットしたグラフの表示/非表示を切り替える。正準スコアは、分析変数の線形結合のなかで、グループを最も分離するものである。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Discriminant Analysis(
	Maximum Number of Terms( 20 ),
	Minimum Term Frequency( 3 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 15 ),
	Column( :Floss )
);
obj2 << Canonical Plot( 1, N Canon( 3 ) );

```

#### Remove

**構文:** obj &lt;&lt; Remove

**説明:** 「テキストエクスプローラ」レポートウィンドウから「判別分析」レポートを削除する。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Discriminant Analysis(
	Maximum Number of Terms( 20 ),
	Minimum Term Frequency( 3 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 15 ),
	Column( :Floss )
);
Wait( 1 );
obj2 << Remove;

```

#### Save Canonical Scores

**構文:** obj &lt;&lt; Save Canonical Scores( N Canon( number ) )

**説明:** データテーブルの新しい列に正準スコアを保存する。正準スコアは、分析変数の線形結合のなかで、グループを最も分離するものである。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Discriminant Analysis(
	Maximum Number of Terms( 20 ),
	Minimum Term Frequency( 3 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 15 ),
	Column( :Floss )
);
obj2 << Save Canonical Scores( N Canon( 3 ) );

```

#### Save Probabilities

**構文:** obj &lt;&lt; Save Probabilities

**説明:** データテーブルの新しい列に、各グループに属する確率を保存する。確率が最も高いグループを示す列も作成される。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Discriminant Analysis(
	Maximum Number of Terms( 20 ),
	Minimum Term Frequency( 3 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 15 ),
	Column( :Floss )
);
obj2 << Save Probabilities;

```

#### Save Probability Formulas

**構文:** obj &lt;&lt; Save Probability Formulas

**説明:** データテーブルの新しい列に、判別分析で求めれた、各グループに属する確率を求める計算式を保存する。この計算式では、Text Score関数が使われる。確率が最も大きいグループを示す列も作成される。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Discriminant Analysis(
	Maximum Number of Terms( 20 ),
	Minimum Term Frequency( 3 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 15 ),
	Column( :Floss )
);
obj2 << Save Probability Formulas;

```

## LCA Analysis

### 関連するコンストラクター

#### Latent Class Analysis

**構文:** obj &lt;&lt; Latent Class Analysis( Number of Clusters( number ), Maximum Number of Terms( number ), Minimum Term Frequency( number ) )

**説明:** 2値の文書単語行列に対して潜在クラス分析を行う。潜在クラス分析では、類似の文書が同じクラスターに属する確率が高くなるように、潜在クラスモデルが推定される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Class Analysis(
	Number of Clusters( 5 ),
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 2 )
);

```

### 項目のメッセージ

#### Cluster Mixture Probabilities

**構文:** obj &lt;&lt; Cluster Mixture Probabilities( state=0|1 )

**説明:** 各行が各クラスターに属する確率の表の表示／非表示を切り替える。 デフォルトではオン。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Class Analysis(
	Number of Clusters( 5 ),
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 2 )
);
Wait( 1 );
obj2 << Cluster Mixture Probabilities( 0 );

```

#### Cluster Probabilities by Row

**構文:** obj &lt;&lt; Cluster Probabilities by Row( state=0|1 )

**説明:** 「行ごとのクラスター確率」表の表示／非表示を切り替える。この法には、各データテーブル行に対して、クラスターに属する確率が含まれる。「最尤クラスター」列は、属する確率が最も高いクラスターを示す。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Class Analysis(
	Number of Clusters( 5 ),
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 2 )
);
Wait( 1 );
obj2 << Cluster Probabilities by row( 0 );

```

#### Color by Cluster

**構文:** obj &lt;&lt; Color by Cluster

**説明:** データテーブルの各行を、最尤クラスター（クラスターに属する確率が最も大きいクラスター）に従って色付けします。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Class Analysis(
	Number of Clusters( 5 ),
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 2 )
);
obj2 << Color by Cluster;

```

#### MDS Plot

**構文:** obj &lt;&lt; MDS Plot( state=0|1 )

**説明:** 多次元尺度構成プロットの表示／非表示を切り替える。これは、クラスターの類似性を2次元上に表したグラフである。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Class Analysis(
	Number of Clusters( 5 ),
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 2 )
);
Wait( 1 );
obj2 << MDS Plot( 0 );

```

#### Remove

**構文:** obj &lt;&lt; Remove

**説明:** 「テキストエクスプローラ」レポートから「潜在クラス分析」レポートを削除する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Class Analysis(
	Number of Clusters( 5 ),
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 2 )
);
Wait( 1 );
obj2 << Remove;

```

#### Rename Clusters

**構文:** obj &lt;&lt; Rename Clusters( "name1", "name2", ... )

**説明:** 1つまたは複数のクラスターに内容のわかりやすい名前を付けることができる。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Class Analysis(
	Number of Clusters( 5 ),
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 2 )
);
Wait( 1 );
obj2 << Rename Clusters( "First", "Second", "Third", "Fourth", "Fifth" );

```

#### Save Probabilities

**構文:** obj &lt;&lt; Save Probabilities

**説明:** 文書が各クラスターに属する確率をデータテーブルの新しい列に保存する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Class Analysis(
	Number of Clusters( 5 ),
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 2 )
);
obj2 << Save Probabilities;

```

#### Save Probability Formulas

**構文:** obj &lt;&lt; Save Probability Formulas

**説明:** データテーブルに、クラスターに属する確率を求める計算式の列と、その確率が最大となっているクラスターを求める計算式の列を保存する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Class Analysis(
	Number of Clusters( 5 ),
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 2 )
);
obj2 << Save Probability Formulas;

```

#### Set Random Seed

**構文:** obj &lt;&lt; Latent Class Analysis( Set Random Seed( number ) )

**説明:** 分析における乱数シード値を設定する。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Class Analysis(
	Number of Clusters( 5 ),
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 2 ),
	Set Random Seed( 1234 )
);

```

#### Term Probabilities by Cluster

**構文:** obj &lt;&lt; Term Probabilities by Cluster( state=0|1 )

**説明:** 「クラスターごとの単語確率」表の表示／非表示を切り替える。ここで計算される確率は、ある文書が特定のクラスターに属すると仮定した場合に、その文書に該当の単語が含まれる条件付き確率である。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Class Analysis(
	Number of Clusters( 5 ),
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 2 )
);
Wait( 1 );
obj2 << Term Probabilities by Cluster( 0 );

```

#### Top Terms by Cluster

**構文:** obj &lt;&lt; Top Terms by Cluster( state=0|1 )

**説明:** 各クラスターにおいて最もスコアの高い10個の単語を示した表の表示／非表示を切り替える。 デフォルトではオン。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Class Analysis(
	Number of Clusters( 5 ),
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 2 )
);
Wait( 1 );
obj2 << Top Terms by Cluster( 0 );

```

#### Word Clouds by Cluster

**構文:** obj &lt;&lt; Word Clouds by Cluster( state=0|1 )

**説明:** 各クラスターに1つずつのワードクラウドの表示／非表示を切り替えます。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Class Analysis(
	Number of Clusters( 5 ),
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 2 )
);
obj2 << Word Clouds by Cluster( 1 );

```

## SVD Analysis > Topic Analysis

### 関連するコンストラクター

#### Rotated SVD

**構文:** obj &lt;&lt; Topic Analysis( Number of Topics ( number ) ) obj &lt;&lt; Rotated SVD( Number of Topics( number ) )

**説明:** 文書単語行列に対する特異値分解の結果をVarimax回転する。この結果で得られる単語の塊を、「トピック」とみなす。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer(
	TextColumns( :Reasons Not to Floss ),
	Show Term List( 0 ),
	Show Phrase List( 0 ),
	Show Summary Counts( 0 )
);
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj3 = obj2 << Topic Analysis( Number of Topics( 5 ) );

```

#### Topic Analysis

**構文:** obj &lt;&lt; Topic Analysis( Number of Topics ( number ) ) obj &lt;&lt; Rotated SVD( Number of Topics( number ) )

**説明:** 文書単語行列に対する特異値分解の結果をVarimax回転する。この結果で得られる単語の塊を、「トピック」とみなす。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer(
	TextColumns( :Reasons Not to Floss ),
	Show Term List( 0 ),
	Show Phrase List( 0 ),
	Show Summary Counts( 0 )
);
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj3 = obj2 << Topic Analysis( Number of Topics( 5 ) );

```

### 項目のメッセージ

#### Remove

**構文:** obj &lt;&lt; Remove

**説明:** 特異値分解のレポートから「トピック分析」レポートを削除する。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer(
	TextColumns( :Reasons Not to Floss ),
	Show Term List( 0 ),
	Show Phrase List( 0 ),
	Show Summary Counts( 0 )
);
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj3 = obj2 << Topic Analysis( Number of Topics( 5 ) );
Wait( 1 );
obj3 << Remove;

```

#### Rename Topics

**構文:** obj &lt;&lt; Rename Topics

**説明:** 1つまたは複数のトピックに内容のわかりやすい名前を付けることができる。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer(
	TextColumns( :Reasons Not to Floss ),
	Show Term List( 0 ),
	Show Phrase List( 0 ),
	Show Summary Counts( 0 )
);
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj3 = obj2 << Topic Analysis( Number of Topics( 5 ) );
Wait( 1 );
obj3 << Rename Topics( "Too Busy", "Less Often", "Difficult", "Bed", "Week" );

```

#### Rotation Matrix

**構文:** obj &lt;&lt; Rotation Matrix( state=0|1 )

**説明:** Varimax回転を行う回転行列の表示／非表示を切り替える。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer(
	TextColumns( :Reasons Not to Floss ),
	Show Term List( 0 ),
	Show Phrase List( 0 ),
	Show Summary Counts( 0 )
);
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj3 = obj2 << Topic Analysis( Number of Topics( 5 ) );
obj3 << Rotation Matrix( 1 );
Report( obj )["Rotation Matrix"] << Close( 0 );

```

#### Save Document Topic Vectors

**構文:** obj &lt;&lt; Save Document Topic Vectors

**説明:** トピック分析の特異ベクトルを、データテーブルの新しい列に保存する。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer(
	TextColumns( :Reasons Not to Floss ),
	Show Term List( 0 ),
	Show Phrase List( 0 ),
	Show Summary Counts( 0 )
);
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj3 = obj2 << Topic Analysis( Number of Topics( 5 ) );
obj3 << Save Document Topic Vectors;

```

#### Save Item Topic Vectors

**構文:** obj &lt;&lt; Save Item Topic Vectors

**説明:** 単語のデータテーブルに、トピックベクトルを保存する。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer(
	TextColumns( :Reasons Not to Floss ),
	Show Term List( 0 ),
	Show Phrase List( 0 ),
	Show Summary Counts( 0 )
);
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj3 = obj2 << Topic Analysis( Number of Topics( 5 ) );
obj3 << Save Item Topic Vectors;

```

#### Save Term Topic Vectors

**構文:** obj &lt;&lt; Save Term Topic Vectors

**説明:** トピック分析のトピックベクトルを、新しいデータテーブルに保存する。単語のデータテーブルがすでに開いている場合は、そのデータテーブルに列を追加する。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer(
	TextColumns( :Reasons Not to Floss ),
	Show Term List( 0 ),
	Show Phrase List( 0 ),
	Show Summary Counts( 0 )
);
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj3 = obj2 << Topic Analysis( Number of Topics( 5 ) );
obj << Save Term Table;
obj3 << Save Term Topic Vectors;

```

#### Save Topic Vector Formula

**構文:** obj &lt;&lt; Save Topic Vector Formula

**説明:** 回転後の特異値分解の結果を含む計算式をデータテーブルに保存する。その際、ベクトルによって計算式を構成する。その計算式では、Text Score関数を用いる。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer(
	TextColumns( :Reasons Not to Floss ),
	Show Term List( 0 ),
	Show Phrase List( 0 ),
	Show Summary Counts( 0 )
);
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj3 = obj2 << Topic Analysis( Number of Topics( 5 ) );
obj3 << Save Topic Vector Formula;

```

#### Save Transaction Topic Vectors

**構文:** obj &lt;&lt; Save Transaction Topic Vectors

**説明:** ユーザが指定した次元での特異値ベクトルを回転したもの（トピックベクトル）を、データテーブルの新しい列に保存する。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer(
	TextColumns( :Reasons Not to Floss ),
	Show Term List( 0 ),
	Show Phrase List( 0 ),
	Show Summary Counts( 0 )
);
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj3 = obj2 << Topic Analysis( Number of Topics( 5 ) );
obj3 << Save Transaction Topic Vectors;

```

#### Top Loadings by Topic

**構文:** obj &lt;&lt; Top Loadings by Topic( state=0|1 )

**説明:** 「トピック別上位負荷量」レポートの表示／非表示を切り替える。この表では、トピックごとに単語の負荷量が表示される。その際、各トピックで絶対値で負荷量が大きなものだけを表示する。 デフォルトではオン。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer(
	TextColumns( :Reasons Not to Floss ),
	Show Term List( 0 ),
	Show Phrase List( 0 ),
	Show Summary Counts( 0 )
);
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj3 = obj2 << Topic Analysis( Number of Topics( 5 ) );
Wait( 1 );
obj3 << Top Loadings by Topic( 0 );

```

#### Topic Loadings

**構文:** obj &lt;&lt; Topic Loadings( state=0|1 )

**説明:** 「トピック負荷量」レポートの表示／非表示を切り替える。この表は、各単語のトピックに対する負荷量の行列である。 デフォルトではオン。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer(
	TextColumns( :Reasons Not to Floss ),
	Show Term List( 0 ),
	Show Phrase List( 0 ),
	Show Summary Counts( 0 )
);
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj3 = obj2 << Topic Analysis( Number of Topics( 5 ) );
Report( obj )["Topic Loadings"] << Close( 0 );
Wait( 1 );
obj3 << Topic Loadings( 0 );

```

#### Topic Scatterplot Matrix

**構文:** obj &lt;&lt; Topic Scatterplot Matrix( state=0|1 )

**説明:** 回転後の特異値分解ベクトルの散布図行列の表示/非表示を切り替える。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer(
	TextColumns( :Reasons Not to Floss ),
	Show Term List( 0 ),
	Show Phrase List( 0 ),
	Show Summary Counts( 0 )
);
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj3 = obj2 << Topic Analysis( Number of Topics( 5 ) );
Wait( 1 );
obj3 << Topic Scatterplot Matrix( 1 );

```

#### Topic Scores

**構文:** obj &lt;&lt; Topic Scores( state=0|1 )

**説明:** 「トピックスコア」レポートの表示／非表示を切り替える。この表は、文書ごとの各トピックのスコアである。 デフォルトではオン。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer(
	TextColumns( :Reasons Not to Floss ),
	Show Term List( 0 ),
	Show Phrase List( 0 ),
	Show Summary Counts( 0 )
);
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj3 = obj2 << Topic Analysis( Number of Topics( 5 ) );
Report( obj )["Topic Scores"] << Close( 0 );
Wait( 1 );
obj3 << Topic Scores( 0 );

```

#### Topic Scores Plots

**構文:** obj &lt;&lt; Topic Scores Plots( state=0|1 )

**説明:** 「トピックスコアのプロット」レポートの表示／非表示を切り替える。 デフォルトではオン。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer(
	TextColumns( :Reasons Not to Floss ),
	Show Term List( 0 ),
	Show Phrase List( 0 ),
	Show Summary Counts( 0 )
);
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj3 = obj2 << Topic Analysis( Number of Topics( 5 ) );
Report( obj )["Topic Scores Plots"] << Close( 0 );
Wait( 1 );
obj3 << Topic Scores Plots( 0 );

```

#### Variance Explained by Each Topic

**構文:** obj &lt;&lt; Variance Explained by Each Topic( state=0|1 )

**説明:** 各トピックによって説明される分散を示した表の表示／非表示を切り替えます。また、この表には、各トピックによって説明される変動の割合と累積%が示される。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer(
	TextColumns( :Reasons Not to Floss ),
	Show Term List( 0 ),
	Show Phrase List( 0 ),
	Show Summary Counts( 0 )
);
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj3 = obj2 << Topic Analysis( Number of Topics( 5 ) );
Wait( 1 );
obj3 << Variance Explained by Each Topic( 1 );
Report( obj )["Variance Explained by Each Topic"] << Close( 0 );

```

#### Word Clouds by Topic

**構文:** obj &lt;&lt; Word Clouds by Topic( state=0|1 )

**説明:** 各トピックに1つずつのワードクラウドの表示／非表示を切り替える。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer(
	TextColumns( :Reasons Not to Floss ),
	Show Term List( 0 ),
	Show Phrase List( 0 ),
	Show Summary Counts( 0 )
);
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj3 = obj2 << Topic Analysis( Number of Topics( 5 ) );
Wait( 1 );
obj3 << Word Clouds by Topic( 1 );
Report( obj )["Word Clouds by Topic"] << Close( 0 );

```

## SVD Analysis

### 関連するコンストラクター

#### Latent Semantic Analysis

**構文:** obj &lt;&lt; Latent Semantic Analysis( Maximum Number of Terms( number ), Minimum Term Frequency( number ), Weighting( "Binary"|"Ternary"|"Frequency"|"Log Freq"|"TF IDF" ), Number of Singular Vectors( number ), Centering and Scaling( "Centered and Scaled",|"Centered"|"Uncentered" ) ); obj &lt;&lt; SVD( Maximum Number of Terms( number ), Minimum Term Frequency( number ), Weighting( "Binary"|"Ternary"|"Frequency"|"Log Freq"|"TF IDF" ), Number of Singular Vectors( number ), Centering and Scaling( "Centered and Scaled",|"Centered"|"Uncentered" ) )

**説明:** 文書単語行列の疎特異値分解を実行する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);

```

#### SVD

**構文:** obj &lt;&lt; Latent Semantic Analysis( Maximum Number of Terms( number ), Minimum Term Frequency( number ), Weighting( "Binary"|"Ternary"|"Frequency"|"Log Freq"|"TF IDF" ), Number of Singular Vectors( number ), Centering and Scaling( "Centered and Scaled",|"Centered"|"Uncentered" ) ); obj &lt;&lt; SVD( Maximum Number of Terms( number ), Minimum Term Frequency( number ), Weighting( "Binary"|"Ternary"|"Frequency"|"Log Freq"|"TF IDF" ), Number of Singular Vectors( number ), Centering and Scaling( "Centered and Scaled",|"Centered"|"Uncentered" ) )

**説明:** 文書単語行列の疎特異値分解を実行する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);

```

### 項目のメッセージ

#### Cluster Documents

**構文:** obj &lt;&lt; Cluster Documents( state=0|1 )

**説明:** データ内の文書の階層型クラスター分析の表示/非表示を切り替える。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj2 << Cluster Documents( 1 );

```

#### Cluster Items

**構文:** obj &lt;&lt; Cluster Items( state=0|1 )

**説明:** データ内の単語の階層型クラスター分析の表示/非表示を切り替える。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA\Grocery Purchases.jmp" );
obj = dt << Association Analysis( Item( :Product ), ID( :Customer ID ) );
obj2 = obj << SVD( Number of Singular Vectors( 20 ) );
obj2 << Cluster Items( 1 );

```

#### Cluster Terms

**構文:** obj &lt;&lt; Cluster Terms( state=0|1 )

**説明:** データ内の単語の階層型クラスター分析の表示/非表示を切り替える。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj2 << obj << Cluster Terms( 1 );

```

#### Cluster Transactions

**構文:** obj &lt;&lt; Cluster Transactions( state=0|1 )

**説明:** データ内の文書の階層型クラスター分析の表示/非表示を切り替える。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA\Grocery Purchases.jmp" );
obj = dt << Association Analysis( Item( :Product ), ID( :Customer ID ) );
obj2 = obj << SVD( Number of Singular Vectors( 20 ) );
obj2 << Cluster Transactions( 1 );

```

#### Remove

**構文:** obj &lt;&lt; Remove

**説明:** 「テキストエクスプローラ」レポートウィンドウから特異値分解の結果を削除する。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
Wait( 1 );
obj2 << Remove;

```

#### Rotated SVD

**構文:** obj &lt;&lt; Topic Analysis( Number of Topics ( number ) ) obj &lt;&lt; Rotated SVD( Number of Topics( number ) )

**説明:** 文書単語行列に対する特異値分解の結果をVarimax回転する。この結果で得られる単語の塊を、「トピック」とみなす。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj << Show Term List( 0 );
obj << Show Phrase List( 0 );
obj << Show Summary Counts( 0 );
obj2 << Topic Analysis( Number of Topics( 5 ) );

```

#### SVD Scatterplot Matrix

**構文:** obj &lt;&lt; SVD Scatterplot Matrix( state=0|1, Number of Vectors( number ) )

**説明:** 該当の特異値分解の結果をもとにした文書と単語の散布図の表示/非表示を切り替える。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj2 << SVD Scatterplot Matrix( 1, Number of Vectors( 8 ) );

```

#### Save Document Singular Vectors

**構文:** obj &lt;&lt; Save Document Singular Vectors(number)

**説明:** 特異値分解の特異ベクトルを、指定された次元だけ、データテーブルの新しい列に保存する。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj2 << Save Document Singular Vectors( 5 );

```

#### Save Item SVD

**構文:** obj &lt;&lt; Save Item SVD

**説明:** 単語のデータテーブルに、指定された次元までの特異ベクトルを保存する。この特異ベクトルは、文書単語行列の右特異ベクトルである。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj2 << Save Item SVD( 5 );

```

#### Save Item Singular Vectors

**構文:** obj &lt;&lt; Save Item Singular Vectors

**説明:** 単語のデータテーブルに、指定された次元までの特異ベクトルを保存する。この特異ベクトルは、文書単語行列の右特異ベクトルである。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj2 << Save Item Singular Vectors( 5 );

```

#### Save Singular Vector Formula

**構文:** obj &lt;&lt; Save Singular Vector Formula

**説明:** 特異値分解の文書に対する結果の計算式をデータテーブルに保存する。その際、ベクトルによって計算式を構成する。その計算式では、Text Score関数を用いる。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj2 << Save Singular Vector Formula;

```

#### Save Term Singular Vectors

**構文:** obj &lt;&lt; Save Term Singular Vectors( number )

**説明:** 特異値分解で求められた特異ベクトルを、指定された次元だけ、新しいデータテーブルに保存する。各列は単語に対応する。単語のデータテーブルがすでに開いている場合は、そのデータテーブルに列を追加する。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj2 << Save Term Singular Vectors( 5 );

```

#### Save Transaction SVD

**構文:** obj &lt;&lt; Save Transaction SVD

**説明:** 文書のデータテーブルに、指定された次元までの特異ベクトルを保存する。この特異ベクトルは、文書単語行列の左特異ベクトルである。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj2 << Save Transaction SVD( 5 );

```

#### Save Transaction Singular Vectors

**構文:** obj &lt;&lt; Save Transaction Singular Vectors

**説明:** 文書のデータテーブルに、指定された次元までの特異ベクトルを保存する。この特異ベクトルは、文書単語行列の左特異ベクトルである。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj2 << Save Transaction Singular Vectors( 5 );

```

#### Select Near Neighbors

**構文:** obj &lt;&lt; Select Near Neighbors( number=10 )

**説明:** 「特異値分解プロット」で選択されている点について、その点のk近傍点を選択する。 デフォルトの値は"10"。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
dt << Select Rows( [102, 237] );
obj2 << Select Near Neighbors( 8 );

```

#### Topic Analysis

**構文:** obj &lt;&lt; Topic Analysis( Number of Topics ( number ) ) obj &lt;&lt; Rotated SVD( Number of Topics( number ) )

**説明:** 文書単語行列に対する特異値分解の結果をVarimax回転する。この結果で得られる単語の塊を、「トピック」とみなす。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj << Show Term List( 0 );
obj << Show Phrase List( 0 );
obj << Show Summary Counts( 0 );
obj2 << Topic Analysis( Number of Topics( 5 ) );

```

## Sentiment Analysis

### 関連するコンストラクター

#### Sentiment Analysis

**構文:** Sentiment Analysis( state=0|1 )

**説明:** 辞書に基づく感情分析を行う。辞書に登録されている感情語を文書から抜き出し、各文書における肯定的感情、否定的感情、全体的感情をスコアリングする。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
sent = obj << Sentiment Analysis( 1 );

```

### 項目のメッセージ

#### Add Feature Words

**構文:** obj &lt;&lt; Add Feature Words( list )

**説明:** 特徴としてスコアをつける単語のリストを追加する。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
sent = obj << Sentiment Analysis( 1 );
sent << Add Feature Words( {"floss"} );

```

#### Add Intensifier Exception Words

**構文:** obj &lt;&lt; Add Intensifier Exception Words( list )

**説明:** 分析から削除する強意語を、リストで指定する。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
sent = obj << Sentiment Analysis( 1 );
Wait( 1 );
sent << Add Intensifier Exception Words( {"almost"} );

```

#### Add Intensifier Words

**構文:** obj &lt;&lt; Add Intensifier Words( {{&lt;word, multiplier&gt;}, {&lt;word&gt;, &lt;multiplier&gt;}, ... } )

**説明:** 指定された単語を、強意語として登録する。登録された単語は、感情分析において強意語として処理される。乗数は、通常は-2～2の範囲にある浮動小数点数。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
sent = obj << Sentiment Analysis( 1 );
Wait( 1 );
sent << Add Intensifier Words( {{"extreme", 1.8}, {"extremely", 1.8}} );

```

#### Add Negation Exception Words

**構文:** obj &lt;&lt; Add Negation Exception Words( list )

**説明:** 分析から削除する否定語を、リストで指定する。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
sent = obj << Sentiment Analysis( 1 );
Wait( 1 );
sent << Add Negation Exception Words( {"without"} );

```

#### Add Negation Words

**構文:** obj &lt;&lt; Add Negation Words( list )

**説明:** 指定された単語を、否定語として登録する。登録された単語は、感情分析において否定語として処理される。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
sent = obj << Sentiment Analysis( 1 );
Wait( 1 );
sent << Add Negation Words( {"dont"} );

```

#### Add Sentiment Exception Words

**構文:** obj &lt;&lt; Add Sentiment Exception Words( list )

**説明:** 分析から削除する感情語を、リストで指定する。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
sent = obj << Sentiment Analysis( 1 );
Wait( 1 );
sent << Add Sentiment Exception Words( {"easy"} );

```

#### Add Sentiment Words

**構文:** obj &lt;&lt; Add Sentiment Words( {{&lt;word&gt;, &lt;score&gt;}, {&lt;word&gt;, &lt;score&gt;}, ... } )

**説明:** 指定された単語を、感情語として登録する。登録された単語は、感情分析において感情語として処理される。スコアは、-100～100の範囲にある整数。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
sent = obj << Sentiment Analysis( 1 );
Wait( 1 );
sent << Add Sentiment Words( {{"difficult", -70}, {"necessary", -20}} );

```

#### Include Builtin Intensifier Terms

**構文:** obj &lt;&lt; Include Builtin Intensifier Terms( state=0|1 )

**説明:** 感情分析で使用される強意語に、ビルトインの強意語を含めるかどうかを指定する。 デフォルトではオン。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
sent = obj << Sentiment Analysis( 1 );
Wait( 1 );
sent << Include Builtin Intensifier Terms( 0 );

```

#### Include Builtin Negation Terms

**構文:** obj &lt;&lt; Include Builtin Negation Terms( state=0|1 )

**説明:** 感情分析に使用される否定語に、ビルトインの否定語を含めるかどうかを指定する。 デフォルトではオン。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
sent = obj << Sentiment Analysis( 1 );
Wait( 1 );
sent << Include Builtin Negation Terms( 0 );

```

#### Include Builtin Sentiment Terms

**構文:** obj &lt;&lt; Include Builtin Sentiment Terms( state=0|1 )

**説明:** 感情分析で使用される感情語に、ビルトインの感情語を含めるかどうかを指定する。 デフォルトではオン。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
sent = obj << Sentiment Analysis( 1 );
Wait( 1 );
sent << Include Builtin Sentiment Terms( 0 );

```

#### Parse Documents

**構文:** obj &lt;&lt; Parse Documents( state=0|1 )

**説明:** 文書の解析に自然言語処理（NLP）を用いることを指定する。 デフォルトではオン。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
sent = obj << Sentiment Analysis( 1 );
Wait( 1 );
sent << Parse Documents( 0 );

```

#### Save Count of Sentiment Scores by Document

**構文:** obj &lt;&lt; Save Count of Sentiment Scores by Document

**説明:** 感情語ごとにデータテーブルに列を保存する。各列には、文書における各感情語の出現回数が含まれる。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
sent = obj << Sentiment Analysis( 1 );
sent << Save Count of Sentiment Scores by Document;

```

#### Save Document Scores

**構文:** obj &lt;&lt; Save Document Scores

**説明:** データテーブルの新しい列に、文書のスコアを保存する。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
sent = obj << Sentiment Analysis( 1 );
sent << Save Document Scores;

```

#### Score Column

**構文:** obj &lt;&lt; Score Column( column )

**説明:** ここで指定した列に含まれる既知の情報が、算出された感情と比較される。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
sent = obj << Sentiment Analysis( 1 );
sent << Score Column( :Gender );

```

#### Scoring

**構文:** obj &lt;&lt; Scoring( "尺度化"|"最小値/最大値" )

**説明:** 文書のスコアを計算するための計算方法を指定する。［尺度化］オプションは、肯定的な句と否定的な句のスコアを合計し、その合計を句の数で割る。［最小値/最大値］オプションは、肯定的最大値と否定的最小値を足す。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
sent = obj << Sentiment Analysis( 1 );
Wait( 1 );
sent << Scoring( "Min Max" );

```

#### Show Feature Finder

**構文:** obj &lt;&lt; Show Feature Finder( state=0|1 )

**説明:** 選択した特徴によって感情をフィルタリングすることができるレポートの表示／非表示を切り替える。 デフォルトではオン。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
sent = obj << Sentiment Analysis( 1 );
Report( obj )["Features"] << Close( 0 );
Wait( 2 );
sent << Show Feature Finder( 0 );

```

#### Show Intensifier Terms

**構文:** obj &lt;&lt; Show Intensifier Terms( state=0|1 )

**説明:** 登録されている強意語の一覧表の表示/非表示を切り替える。 デフォルトではオン。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
sent = obj << Sentiment Analysis( 1 );
Report( obj )["Intensifier Terms"] << Close( 0 );
Wait( 2 );
sent << Show Intensifier Terms( 0 );

```

#### Show Negation Terms

**構文:** obj &lt;&lt; Show Negation Terms( state=0|1 )

**説明:** 登録されている否定語の一覧表の表示/非表示を切り替える。 デフォルトではオン。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
sent = obj << Sentiment Analysis( 1 );
Report( obj )["Negation Terms"] << Close( 0 );
Wait( 2 );
sent << Show Negation Terms( 0 );

```

#### Show Sentiment Cloud

**構文:** obj &lt;&lt; Show Sentiment Cloud( state=0|1 )

**説明:** 感情語のワードクラウドの表示/非表示を切り替える。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
sent = obj << Sentiment Analysis( 1 );
sent << Show Sentiment Cloud( 1 );

```

#### Show Sentiment Terms

**構文:** obj &lt;&lt; Show Sentiment Terms( state=0|1 )

**説明:** 登録されている感情語の一覧表の表示/非表示を切り替える。 デフォルトではオン。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
sent = obj << Sentiment Analysis( 1 );
Report( obj )["Sentiment Terms"] << Close( 0 );
Wait( 2 );
sent << Show Sentiment Terms( 0 );

```

## Term Selection

### 関連するコンストラクター

#### Term Selection

**構文:** obj &lt;&lt; Term Selection( Models( Model( Response Column( &lt;column&gt; ), &lt;other models&gt; )), Model Choice( &lt;index&gt; ))

**説明:** 単語選択分析を実行する。指定された応答変数を説明するのに最良な単語を選択する。また、この単語選択分析では、応答変数が何かしらの判定である場合、感情分析にもなる。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
term = obj << Term Selection(
	Models(
		Model(
			Response Column( :Gender ),
			Fits(
				First Fit(
					Fit(
						Estimation Method( Elastic Net ),
						Validation Method( AICc ),
						Early Stopping,
						Model Summary( 0 ),
						Parameter Estimates for Original Predictors( 0 ),
						Effect Tests( 0 )
					)
				)
			)
		),
		Model(
			Response Column( :Single Status ),
			Target Levels( Target Number( 1 ), Target String( "1" ) ),
			Fit Settings( Estimation Method( Lasso ) ),
			Fits(
				First Fit(
					Fit(
						Estimation Method( Lasso ),
						Validation Method( AICc ),
						Early Stopping,
						Model Summary( 0 ),
						Parameter Estimates for Original Predictors( 0 ),
						Effect Tests( 0 )
					)
				)
			)
		),
		Current Model Settings(
			Response Column( :Single Status ),
			Target Levels( Target Number( 1 ), Target String( "1" ) ),
			Fit Settings( Estimation Method( Lasso ) )
		)
	),
	Model Choice( 2 )
);

```

### 項目のメッセージ

#### Model Choice

**構文:** obj &lt;&lt; Term Selection( Model Choice(&lt;index&gt;) )

**説明:** 要約のレポートにおいて現在のモデルがどれかを指定する。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
term = obj << Term Selection(
	Models(
		Model(
			Response Column( :Gender ),
			Fits(
				First Fit(
					Fit(
						Estimation Method( Elastic Net ),
						Validation Method( AICc ),
						Early Stopping,
						Model Summary( 0 ),
						Parameter Estimates for Original Predictors( 0 ),
						Effect Tests( 0 )
					)
				)
			)
		),
		Model(
			Response Column( :Single Status ),
			Target Levels( Target Number( 1 ), Target String( "1" ) ),
			Fit Settings( Estimation Method( Lasso ) ),
			Fits(
				First Fit(
					Fit(
						Estimation Method( Lasso ),
						Validation Method( AICc ),
						Early Stopping,
						Model Summary( 0 ),
						Parameter Estimates for Original Predictors( 0 ),
						Effect Tests( 0 )
					)
				)
			)
		),
		Current Model Settings(
			Response Column( :Single Status ),
			Target Levels( Target Number( 1 ), Target String( "1" ) ),
			Fit Settings( Estimation Method( Lasso ) )
		)
	),
	Model Choice( 2 )
);

```

#### Models

**構文:** obj &lt;&lt; Term Selection( Models( Model( Response Column( &lt;column&gt; ), &lt;other models&gt; )))

**説明:** モデルを生成するのに必要な情報を指定する。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
term = obj << Term Selection(
	Models(
		Model(
			Response Column( :Gender ),
			Fits(
				First Fit(
					Fit(
						Estimation Method( Elastic Net ),
						Validation Method( AICc ),
						Early Stopping,
						Model Summary( 0 ),
						Parameter Estimates for Original Predictors( 0 ),
						Effect Tests( 0 )
					)
				)
			)
		),
		Model(
			Response Column( :Single Status ),
			Target Levels( Target Number( 1 ), Target String( "1" ) ),
			Fit Settings( Estimation Method( Lasso ) ),
			Fits(
				First Fit(
					Fit(
						Estimation Method( Lasso ),
						Validation Method( AICc ),
						Early Stopping,
						Model Summary( 0 ),
						Parameter Estimates for Original Predictors( 0 ),
						Effect Tests( 0 )
					)
				)
			)
		),
		Current Model Settings(
			Response Column( :Single Status ),
			Target Levels( Target Number( 1 ), Target String( "1" ) ),
			Fit Settings( Estimation Method( Lasso ) )
		)
	),
	Model Choice( 2 )
);

```

#### Remove

**構文:** obj &lt;&lt; Remove

**説明:** 「テキストエクスプローラ」レポートウィンドウから、単語選択分析のレポートを削除する。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
term = obj << Term Selection(
	Models(
		Model(
			Response Column( :Gender ),
			Fits(
				First Fit(
					Fit(
						Estimation Method( Elastic Net ),
						Validation Method( AICc ),
						Early Stopping,
						Model Summary( 0 ),
						Parameter Estimates for Original Predictors( 0 ),
						Effect Tests( 0 )
					)
				)
			)
		),
		Model(
			Response Column( :Single Status ),
			Target Levels( Target Number( 1 ), Target String( "1" ) ),
			Fit Settings( Estimation Method( Lasso ) ),
			Fits(
				First Fit(
					Fit(
						Estimation Method( Lasso ),
						Validation Method( AICc ),
						Early Stopping,
						Model Summary( 0 ),
						Parameter Estimates for Original Predictors( 0 ),
						Effect Tests( 0 )
					)
				)
			)
		),
		Current Model Settings(
			Response Column( :Single Status ),
			Target Levels( Target Number( 1 ), Target String( "1" ) ),
			Fit Settings( Estimation Method( Lasso ) )
		)
	),
	Model Choice( 2 )
);
Wait( 1 );
term << Remove;

```

#### Save Document Scores

**構文:** obj &lt;&lt; Save Document Scores

**説明:** データテーブルの新しい列に、文書のスコアを保存する。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
term = obj << Term Selection(
	Models(
		Model(
			Response Column( :Gender ),
			Fits(
				First Fit(
					Fit(
						Estimation Method( Elastic Net ),
						Validation Method( AICc ),
						Early Stopping,
						Model Summary( 0 ),
						Parameter Estimates for Original Predictors( 0 ),
						Effect Tests( 0 )
					)
				)
			)
		),
		Model(
			Response Column( :Single Status ),
			Target Levels( Target Number( 1 ), Target String( "1" ) ),
			Fit Settings( Estimation Method( Lasso ) ),
			Fits(
				First Fit(
					Fit(
						Estimation Method( Lasso ),
						Validation Method( AICc ),
						Early Stopping,
						Model Summary( 0 ),
						Parameter Estimates for Original Predictors( 0 ),
						Effect Tests( 0 )
					)
				)
			)
		),
		Current Model Settings(
			Response Column( :Single Status ),
			Target Levels( Target Number( 1 ), Target String( "1" ) ),
			Fit Settings( Estimation Method( Lasso ) )
		)
	),
	Model Choice( 2 )
);
term << Save Document Scores;

```

#### Save Prediction Formulas

**構文:** obj &lt;&lt; Save Prediction Formulas

**説明:** 単語選択分析で求められたモデルの予測式を含む列を、元のデータテーブルに保存します。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
term = obj << Term Selection(
	Models(
		Model(
			Response Column( :Gender ),
			Fits(
				First Fit(
					Fit(
						Estimation Method( Elastic Net ),
						Validation Method( AICc ),
						Early Stopping,
						Model Summary( 0 ),
						Parameter Estimates for Original Predictors( 0 ),
						Effect Tests( 0 )
					)
				)
			)
		),
		Model(
			Response Column( :Single Status ),
			Target Levels( Target Number( 1 ), Target String( "1" ) ),
			Fit Settings( Estimation Method( Lasso ) ),
			Fits(
				First Fit(
					Fit(
						Estimation Method( Lasso ),
						Validation Method( AICc ),
						Early Stopping,
						Model Summary( 0 ),
						Parameter Estimates for Original Predictors( 0 ),
						Effect Tests( 0 )
					)
				)
			)
		),
		Current Model Settings(
			Response Column( :Single Status ),
			Target Levels( Target Number( 1 ), Target String( "1" ) ),
			Fit Settings( Estimation Method( Lasso ) )
		)
	),
	Model Choice( 2 )
);
term << Save Prediction Formulas;

```

#### Save Term Score DTM

**構文:** obj &lt;&lt; Save Term Score DTM

**説明:** 単語選択分析で選択された単語に関して、元のデータテーブルにモデル係数の列を保存する。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
term = obj << Term Selection(
	Models(
		Model(
			Response Column( :Gender ),
			Fits(
				First Fit(
					Fit(
						Estimation Method( Elastic Net ),
						Validation Method( AICc ),
						Early Stopping,
						Model Summary( 0 ),
						Parameter Estimates for Original Predictors( 0 ),
						Effect Tests( 0 )
					)
				)
			)
		),
		Model(
			Response Column( :Single Status ),
			Target Levels( Target Number( 1 ), Target String( "1" ) ),
			Fit Settings( Estimation Method( Lasso ) ),
			Fits(
				First Fit(
					Fit(
						Estimation Method( Lasso ),
						Validation Method( AICc ),
						Early Stopping,
						Model Summary( 0 ),
						Parameter Estimates for Original Predictors( 0 ),
						Effect Tests( 0 )
					)
				)
			)
		),
		Current Model Settings(
			Response Column( :Single Status ),
			Target Levels( Target Number( 1 ), Target String( "1" ) ),
			Fit Settings( Estimation Method( Lasso ) )
		)
	),
	Model Choice( 2 )
);
term << Save Term Score DTM;

```

#### Show Term Cloud

**構文:** obj &lt;&lt; Show Term Cloud( state=0|1 )

**説明:** 単語選択分析で選択された単語だけからなるワードクラウドの表示／非表示を切り替えます。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
term = obj << Term Selection(
	Models(
		Model(
			Response Column( :Gender ),
			Fits(
				First Fit(
					Fit(
						Estimation Method( Elastic Net ),
						Validation Method( AICc ),
						Early Stopping,
						Model Summary( 0 ),
						Parameter Estimates for Original Predictors( 0 ),
						Effect Tests( 0 )
					)
				)
			)
		),
		Model(
			Response Column( :Single Status ),
			Target Levels( Target Number( 1 ), Target String( "1" ) ),
			Fit Settings( Estimation Method( Lasso ) ),
			Fits(
				First Fit(
					Fit(
						Estimation Method( Lasso ),
						Validation Method( AICc ),
						Early Stopping,
						Model Summary( 0 ),
						Parameter Estimates for Original Predictors( 0 ),
						Effect Tests( 0 )
					)
				)
			)
		),
		Current Model Settings(
			Response Column( :Single Status ),
			Target Levels( Target Number( 1 ), Target String( "1" ) ),
			Fit Settings( Estimation Method( Lasso ) )
		)
	),
	Model Choice( 2 )
);
term << Show Term Cloud;

```

