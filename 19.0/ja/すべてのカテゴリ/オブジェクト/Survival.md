# Survival



## 共有されるメッセージ

### Action

**構文:** obj &lt;&lt; Action

**説明:** 評価する式を挿入するための、プラットフォーム内の汎用トラップドア。プラットフォームに一時的にディスプレイボックスおよびデータテーブルのコンテキストを設定する。

```jsl

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

#### フォルダ内で検索

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

#### 匿名のプリセット

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();
dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );
Wait( 1 );
obj2 << Apply Preset( preset );

```

#### 名前で検索

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

### Automatic Recalc

**構文:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**説明:** データの除外や変更があった場合に分析を自動的にやり直す。Automatic Recalcオプションがオンになっている場合で、データの除外や変更が再計算の前に確実に適用されるようにするには、Wait(0)コマンドを使用すること。

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

### Broadcast

**構文:** obj &lt;&lt; Broadcast(message)

**説明:** メッセージをプラットフォームに一括適用する。個々のオブジェクトから戻される結果がデータテーブルである場合は、可能な限り連結する。その最終的な形式は、Table BoxのSave Combined Tableオプションの結果と同じになるか、またはソース列を使用したConcanateオプションの結果と同じになる。それ以外の場合、結果はリストの形で戻される。

**JMP追加されたバージョン:** 18

```jsl

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

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ), By( _bycol ) );
obj[1] << Copy ByGroup Script;

```

### Copy Script

**構文:** obj &lt;&lt; Copy Script

**説明:** この分析を再現するJSLスクリプトを生成し、クリップボードにコピーする。

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Copy Script;

```

### Data Table Window

**構文:** obj &lt;&lt; Data Table Window

**説明:** この分析に使用したデータテーブルのウィンドウを手前に表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Data Table Window;

```

### Get By Levels

**構文:** obj &lt;&lt; Get By Levels

**説明:** By列が指定されている場合、列名をキー、データ値を値とした連想配列を戻す。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

### Get ByGroup Script

**構文:** obj &lt;&lt; Get ByGroup Script

**説明:** この分析を再現するスクリプト(JSL)を生成し、それを式として戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ), By( _bycol ) );
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Container

**構文:** obj &lt;&lt; Get Container

**説明:** オブジェクトのコンテンツを含んだコンテナボックスの参照を戻す。

#### フィルタのあるプラットフォーム

```jsl

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

#### 一般

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

### Get Data Table

**構文:** obj &lt;&lt; Get Data Table

**説明:** データテーブルへの参照を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Group Platform

**構文:** obj &lt;&lt; Get Group Platform

**説明:** 該当のプラットフォームがグループに属している場合に、Group Platformオブジェクトを戻す。それ以外の場合はEmpty()を戻す。

```jsl

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

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**構文:** obj &lt;&lt; Get Script With Data Table

**説明:** この分析を再現するスクリプト(JSL)をデータテーブルへの参照も含めて生成し、それを式として戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**構文:** obj &lt;&lt; Get Timing

**説明:** プラットフォームの起動にかかった時間を取得する。

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
t = obj << Get Timing;
Show( t );

```

### Get Web Support

**構文:** obj &lt;&lt; Get Web Support

**説明:** ディスプレイオブジェクトにおけるインタラクティブHTMLサポートのレベルを数値で戻す。1は、一部または全部の要素がサポートされていることを示し、0は、サポートされないことを示す。

```jsl

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

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );
Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

### Ignore Platform Preferences

**構文:** Ignore Platform Preferences( state=0|1 )

**説明:** プラットフォームに対する現在の環境設定を無視する。このメッセージは、プラットフォームを呼び出した後に、そのプラットフォームに送られた場合、無視される。

```jsl

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

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

### Paste Local Data Filter

**構文:** obj &lt;&lt; Paste Local Data Filter

**説明:** クリップボードにあるローカルデータフィルタを現在のレポートに適用する。

```jsl

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

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**構文:** obj &lt;&lt; Redo ByGroup Analysis

**説明:** 同じ分析をやり直し新しいウィンドウに表示する。データが変更されていると分析結果は異なる。

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ), By( _bycol ) );
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**構文:** obj &lt;&lt; Relaunch Analysis

**説明:** プラットフォームの起動ウィンドウを開き、レポートを作成した時の設定を表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**構文:** obj &lt;&lt; Relaunch ByGroup

**説明:** プラットフォームの起動ウィンドウを開き、レポートを作成した時の設定を表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ), By( _bycol ) );
obj[1] << Relaunch ByGroup;

```

### Remove Column Switcher

**構文:** obj &lt;&lt; Remove Column Switcher

**説明:** プラットフォームに最後に追加された列スイッチャーを削除する。

```jsl

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

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

### Report

**構文:** obj &lt;&lt; Report;Report( obj )

**説明:** レポートオブジェクトへの参照を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**構文:** obj &lt;&lt; Report View( "完全"|"要約" )

**説明:** レポートビューは、プラットフォームレポートの詳細を表示するかどうかを決定する。Fullはすべての詳細を表示し、Summaryはプラットフォームにより限定されたものだけを表示する。 動作をカスタマイズするため、各ディスプレイボックスは<<Set Summary Behaviorメッセージをサポートする。

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**構文:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**説明:** 分析を再現するためのJSLスクリプトを作成し、データテーブルにテーブルプロパティとして保存する。スクリプトの名前を指定できる。Append Suffixオプションは、スクリプト名に数字の接尾辞を追加する。これにより、同名のスクリプトが存在していても区別できる。Promptオプションは、ユーザにスクリプト名の指定を促す。Replaceオプションは、同名の既存のスクリプトを置き換える。

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ), By( _bycol ) );
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**構文:** obj &lt;&lt; Save ByGroup Script to Journal

**説明:** この分析を再現するJSLスクリプトを生成し、ジャーナルにそのスクリプトのボタンを追加する。

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ), By( _bycol ) );
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**構文:** obj &lt;&lt; Save ByGroup Script to Script Window

**説明:** この分析を再現するJSLスクリプトを生成し、現在のスクリプトウィンドウに表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ), By( _bycol ) );
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**構文:** obj &lt;&lt; Save Script for All Objects

**説明:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**構文:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**説明:** すべてのレポートオブジェクトを再現するスクリプトを現在のデータテーブルに保存する。このオプションは、ウィンドウ内にレポートが複数ある場合に便利。作成されるスクリプトの名前は、引用符で囲んで指定しない限り、1つ目のプラットフォーム名となる。

#### 例 1

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table;

```

#### 例 2

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**構文:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**説明:** この分析を再現するJSLスクリプトを生成し、データテーブルのテーブルプロパティとして保存する。

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**構文:** obj &lt;&lt; Save Script to Journal

**説明:** この分析を再現するJSLスクリプトを生成し、ジャーナルにそのスクリプトのボタンを追加する。

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Save Script to Journal;

```

### Save Script to Report

**構文:** obj &lt;&lt; Save Script to Report

**説明:** この分析を再現するJSLスクリプトを生成し、レポートウィンドウに表示する。分析手順の記録を結果と一緒に残せる。

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Save Script to Report;

```

### Save Script to Script Window

**構文:** obj &lt;&lt; Save Script to Script Window

**説明:** この分析を再現するJSLスクリプトを生成し、現在のスクリプトウィンドウに表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Save Script to Script Window;

```

### SendToByGroup

**構文:** SendToByGroup( {":Column == level"}, command );

**説明:** プラットフォームコマンドまたは表示のカスタマイズコマンドをByグループの各水準に送る。

```jsl

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

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Title( "My Platform" );

```

### Top Report

**構文:** obj &lt;&lt; Top Report

**説明:** レポート内のルートノードへの参照を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Transform Column

**構文:** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**説明:** オブジェクトのローカルコンテキスト(通常はプラットフォーム)内に変換列を作成する。この変換列は、それを作成したプラットフォームの中のみで使用可能。

**JMP追加されたバージョン:** 16

```jsl

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

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

### Window View

**構文:** obj = Survival(...Window View( "Visible"|"Invisible"|"Private" )...)

**説明:** レポートとして作成するウィンドウの種類を設定する。デフォルトでは、Visibleレポートウィンドウが作成される。Invisible のウィンドウは画面に表示されないが、Window()などの関数によって検出できる。Private のウィンドウにはほとんどのウィンドウメッセージを送れるが、検出することはできないため、レポートオブジェクトを通してアクセスする必要がある。

```jsl

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

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ), By( _bycol ) );

```

### Censor

**構文:** obj &lt;&lt; Censor( column )

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );

```

### Freq

**構文:** obj &lt;&lt; Freq( column )

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
dt << New Column( "_freqcol", Numeric, Continuous, Formula( Random Integer( 1, 5 ) ) );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ), Freq( _freqcol ) );

```

### Grouping

**構文:** obj &lt;&lt; Grouping( column )

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );

```

### Time to Event

**構文:** obj &lt;&lt; Time to Event( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );

```

### Y

**構文:** obj &lt;&lt; Y( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );

```

## 関連するコンストラクター

### Survival

**構文:** Survival( Y( columns ), Censor( column ), &lt;Grouping( column )&gt; )

**説明:** 1つまたは複数のグループに対し、積-極限(Kaplan-Meier)法を使って生存関数を推定する。

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );

```

## 項目のメッセージ

### Censor Code

**構文:** obj = Survival(...Censor Code( value=1 )...)

**説明:** 該当のデータ行が右側打ち切りであることを示す値を指定する。 デフォルトの値は"1"。

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Survival( Y( :Time ), Censor( :Censor ), Censor Code( 0 ) );

```

### Competing Causes

**構文:** obj &lt;&lt; Competing Causes( column )

**説明:** Weibull分布に基づく競合リスクモデルを推定する。故障原因もしくは打ち切りを表す値が含まれた列を用いる。推定された分布は、生存分析プロットに点線で表示される。

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Competing Causes( :Failure Cause );

```

### Connect Quantile Points

**構文:** obj &lt;&lt; Connect Quantile Points( state=0|1 )

**説明:** 指数プロット・Weibullプロット・対数正規プロットにおいて、折れ線の表示/非表示を切り替える。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Weibull Plot( 1 );
Wait( 1 );
obj << Connect Quantile Points( 0 );

```

### Estimate Survival Probability

**構文:** obj &lt;&lt; Estimate Survival Probability( [time1, time2, ...], Alpha( level ) )

**説明:** あてはめた分布に基づき、指定の時間における生存確率と信頼区間を推定する。

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Weibull Fit( 1 );
obj << Estimate Survival Probability( [100, 200, 300], Alpha( 0.001 ) );

```

### Estimate Time Quantile

**構文:** obj &lt;&lt; Estimate Time Quantile( [p1, p2, ...], Alpha( level ) )

**説明:** あてはめた分布に基づき、指定の生存確率における時間分位点と信頼区間を推定する。

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Weibull Fit( 1 );
obj << Estimate Time Quantile( [0.5, 0.9, 0.95], Alpha( 0.01 ) );

```

### Exponential Fit

**構文:** obj &lt;&lt; Exponential Fit( state=0|1 )

**説明:** 「指数パラメータ推定値」表の表示/非表示を切り替える。また、指数プロットに、直線を追加する。

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Exponential Plot( 1 );
Wait( 1 );
obj << Exponential Fit( 1 );

```

### Exponential Plot

**構文:** obj &lt;&lt; Exponential Plot( state=0|1 )

**説明:** 指数プロットの表示/非表示を切り替える。このプロットは、指数分布を使ってグループごとに累積故障確率と時間をプロットしたもの。折れ線が直線に近い場合は、指数モデルを使って分析を続けるのが適切であることを意味する。

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Exponential Plot( 1 );

```

### Failure Plot

**構文:** obj &lt;&lt; Failure Plot( state=0|1 )

**説明:** 全グループを合わせてすべてのデータから求めた累積故障確率のプロットの表示/非表示を切り替える。このプロットは、生存率プロットの縦軸を逆転させたもので、生存確率ではなく累積故障確率を示す。このプロットは、信頼性分析に役立つ。

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Failure Plot( 1 );

```

### Fitted Distribution Plots

**構文:** obj &lt;&lt; Fitted Distribution Plots( state=0|1 )

**説明:** あてはめた分布に関する一連のグラフの表示/非表示を切り替える。このグラフでは、生存関数・密度関数・ハザード関数が描かれる。あてはめを実行していない場合、プロットは表示されない。

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Weibull Fit( 1 );
obj << Fitted Distribution Plots( 1 );

```

### Fitted Failure CI

**構文:** obj &lt;&lt; Fitted Failure CI( state=0|1 )

**説明:** 故障率プロット(累積故障確率の曲線)において、グループごとの信頼区間の表示/非表示を切り替える。この信頼区間は、あてはめた確率分布に基づくものである。

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ), Failure Plot( 1 ) );
obj << Weibull Fit( 1 );
obj << Fitted Failure CI( 1 );

```

### Fitted Quantile

**構文:** obj &lt;&lt; Fitted Quantile( state=0|1 )

**説明:** 指数プロット・Weibullプロット・対数正規プロットにおいて、あてはめたモデルを示す直線の表示/非表示を切り替える。この直線は、指数分布・Weibull分布・対数正規分布をグループごとにあてはめることで求めれたものである。

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Exponential Plot( 1 );
obj << Exponential Fit( 1 );
Wait( 1 );
obj << Fitted Quantile( 0 );

```

### Fitted Quantile CI Lines

**構文:** obj &lt;&lt; Fitted Quantile CI Lines( state=0|1 )

**説明:** 指数プロット・Weibullプロット・対数正規プロットにおいて、グループごとの95%信頼区間の表示/非表示を切り替える。

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Lognormal Plot( 1 );
obj << Lognormal Fit( 1 );
obj << Fitted Quantile CI Lines( 1 );

```

### Fitted Quantile CI Shaded

**構文:** obj &lt;&lt; Fitted Quantile CI Shaded( state=0|1 )

**説明:** 指数プロット・Weibullプロット・対数正規プロットにおいて、グループごとの95%信頼区間を示す陰影の表示/非表示を切り替える。

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Weibull Plot( 1 );
obj << Weibull Fit( 1 );
obj << Fitted Quantile CI Shaded( 1 );

```

### Fitted Survival CI

**構文:** obj &lt;&lt; Fitted Survival CI( state=0|1 )

**説明:** 生存分析プロット(生存曲線)において、グループごとの信頼区間の表示/非表示を切り替える。この信頼区間は、あてはめた確率分布に基づくものである。

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Exponential Fit( 1 );
obj << Fitted Survival CI( 1 );

```

### LogNormal Fit

**構文:** obj &lt;&lt; LogNormal Fit( state=0|1 )

**説明:** 「対数正規パラメータ推定値」表の表示/非表示を切り替える。また、対数正規プロットに、直線を追加する。

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << LogNormal Plot( 1 );
Wait( 1 );
obj << LogNormal Fit( 1 );

```

### LogNormal Plot

**構文:** obj &lt;&lt; LogNormal Plot( state=0|1 )

**説明:** 対数正規プロットの表示/非表示を切り替える。このプロットは、対数正規分布を使ってグループごとに累積故障確率とlog(時間)をプロットしたもの。線が直線に近い場合は、対数正規分布を使って分析を続けるのが適切であることを意味する。

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << LogNormal Plot( 1 );

```

### Midstep Quantile Points

**構文:** obj &lt;&lt; Midstep Quantile Points( state=0|1 )

**説明:** 指数プロット・Weibullプロット・対数正規プロットに、Kaplan-Meierの修正済みプロット位置を使うよう指定する。この時、Kaplan-Meier曲線のステップ関数の底ではなく、中間位置に点がプロットされる。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Weibull Plot( 1 );
Wait( 1 );
obj << Midstep Quantile Points( 0 );

```

### Plot Failure Instead of Survival

**構文:** obj = Survival(...Plot Failure instead of Surivival( state=0|1 )...)

**説明:** 生存確率プロットではなく故障確率プロットを表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival(
	Y( :days ),
	Censor( :Censor ),
	Grouping( :Group ),
	Plot Failure instead of Survival( 1 )
);

```

### Save Estimates

**構文:** obj &lt;&lt; Save Estimates

**説明:** 新しいデータテーブルを作成し、グループごとの生存率と故障率(累積故障確率)の推定値、信頼区間、その他の統計量を保存する。

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Save Estimates;

```

### Show Combined

**構文:** obj &lt;&lt; Show Combined( state=0|1 )

**説明:** 生存率プロットと故障率プロットにおいて、組み合わせたKaplan-Meier生存関数の表示/非表示を切り替える。

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Failure Plot( 1 );
Wait( 1 );
obj << Show Combined( 1 );

```

### Show Confid Interval

**構文:** obj &lt;&lt; Show Confid Interval( state=0|1 )

**説明:** 生存分析プロット(生存曲線)と故障率プロット(累積故障確率の曲線)において、Kaplan-Meier推定値に対する95%時点別信頼区間の表示/非表示を切り替える。また、[組み合わせの表示]オプションが選択されている場合は、データすべてでの生存関数もしくは累積故障確率の時点別信頼区間でも表示/非表示を切り替える。

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Failure Plot( 1 );
Wait( 1 );
obj << Show Confid Interval( 1 );
Wait( 1 );
obj << Show Combined( 1 );

```

### Show Kaplan Meier

**構文:** obj &lt;&lt; Show Kaplan Meier( state=0|1 )

**説明:** 生存率プロットと故障率プロットにおいて、各グループのKaplan-Meier生存関数の表示/非表示を切り替える。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival(
	Y( :days ),
	Censor( :Censor ),
	Grouping( :Group ),
	Show Kaplan Meier( 0 )
);
Wait( 1 );
obj << Show Kaplan Meier( 1 );

```

### Show Points

**構文:** obj &lt;&lt; Show Points( state=0|1 )

**説明:** 生存分析プロット(生存曲線)と故障率プロット(累積故障確率の曲線)において、点の表示/非表示を切り替える。故障は生存曲線の下に、打ち切りのあるデータは生存曲線の上に点で表示される。

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Failure Plot( 1 );
Wait( 1 );
obj << Show Points( 1 );

```

### Show Shaded Pointwise CI

**構文:** obj &lt;&lt; Show Shaded Pointwise CI( state=0|1 )

**説明:** 生存分析プロット(生存曲線)と故障率プロット(累積故障確率の曲線)において、Kaplan-Meier推定値に対するの95%時点別信頼区間を示す陰影の表示/非表示を切り替える。また、[組み合わせの表示]オプションが選択されている場合は、データすべてでの時点別信頼区間を示す陰影でも表示/非表示を切り替える。

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Show Shaded Pointwise CI( 1 );

```

### Show Shaded Simultaneous CI

**構文:** obj &lt;&lt; Show Shaded Simultaneous CI( state=0|1 )

**説明:** 生存分析プロット(生存関数曲線)と故障率プロット(累積故障確率の曲線)において、Kaplan-Meier推定値に対するの95%同時信頼区間を示す陰影の表示/非表示を切り替える。また、[組み合わせの表示]オプションが選択されている場合は、データすべてでの同時信頼区間を示す陰影でも表示/非表示を切り替える。

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Show Shaded Simultaneous CI( 1 );

```

### Show Simultaneous CI

**構文:** obj &lt;&lt; Show Simultaneous CI( state=0|1 )

**説明:** 生存分析プロット(生存曲線)と故障率プロット(累積故障確率の曲線)において、Kaplan-Meier推定値に対する95%同時信頼区間の表示/非表示を切り替える。また、[組み合わせの表示]オプションが選択されている場合は、データすべてでの生存関数もしくは累積故障確率の同時信頼区間でも表示/非表示を切り替える。

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Show Simultaneous CI( 1 );

```

### Survival Plot

**構文:** obj &lt;&lt; Survival Plot( state=0|1 )

**説明:** 全グループを合わせてすべてのデータから求めた生存曲線の表示/非表示を切り替える。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Survival Plot( 0 );
Wait( 1 );
obj << Survival Plot( 1 );

```

### Weibull Fit

**構文:** obj &lt;&lt; Weibull Fit( state=0|1 )

**説明:** 「極値パラメータ推定値」表と「Weibullパラメータ推定値」表の表示/非表示を切り替える。また、Weibullプロットに直線を追加する。

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Weibull Plot( 1 );
Wait( 1 );
obj << Weibull Fit( 1 );

```

### Weibull Plot

**構文:** obj &lt;&lt; Weibull Plot( state=0|1 )

**説明:** Weibullプロットの表示/非表示を切り替える。このプロットは、Weibull分布を使ってグループごとに累積故障確率とlog(時間)をプロットしたもの。線が直線に近い場合は、Weibull分布を使って分析を続けるのが適切であることを意味する。

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Weibull Plot( 1 );

```

## Competing Causes

### 項目のメッセージ

#### Hazard Plot

**構文:** obj &lt;&lt; Hazard Plot( state=0|1 )

**説明:** 競合原因分析に基づき、データのハザード関数のプロットを表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Competing Causes( :Failure Cause );
obj << Hazard Plot( 1 );

```

#### Omit Causes

**構文:** obj &lt;&lt; Omit Causes( cause1, &lt;cause2&gt;, ... )

**説明:** 特定の故障原因を除去したときの影響を分析する。生存確率の推定値が自動的に再計算される。このオプションは、特定の故障原因が取り除かれた場合にどうなるかを調べるのに役立つ。

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Competing Causes( :Failure Cause );
obj << Omit Causes( "accident" );

```

#### Save Cause Coordinates

**構文:** obj &lt;&lt; Save Cause Coordinates

**説明:** 元のデータテーブルに新しい列を作成し、log(-log(生存率))の値を保存する。この値は、多くの場合、故障の種類を示すコードなど、グループ変数の値ごとに時間変数に対してプロットされる。

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Competing Causes( :Failure Cause );
obj << Save Cause Coordinates;

```

#### Simulate

**構文:** obj &lt;&lt; Simulate( number )

**説明:** 新しいデータテーブルを作成し、シミュレートした時間と原因を保存する。あてはめたWeibull分布が、そのシミュレーションに使われる。

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Competing Causes( :Failure Cause );
obj << Simulate( 1000 );

```

#### Weibull Lines

**構文:** obj &lt;&lt; Weibull Lines( state=0|1 )

**説明:** 生存分析プロットにWeibull線を表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Competing Causes( :Failure Cause );
obj << Weibull Lines( 1 );

```

