# Explore Outliers



## 共有されるメッセージ

### Action

**構文:** obj << Action

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

**構文:** Apply Preset( preset ); Apply Preset( source, label, <Folder( folder {, folder2, ...} )> )

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

**構文:** obj << Automatic Recalc( state=0|1 )

**説明:** データの除外や変更があった場合に分析を自動的にやり直す。Automatic Recalcオプションがオンになっている場合で、データの除外や変更が再計算の前に確実に適用されるようにするには、Wait(0)コマンドを使用すること。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

### Broadcast

**構文:** obj << Broadcast(message)

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

**構文:** obj << Column Switcher(column reference, {column reference, ...}, < Title(title) >, < Close Outline(0|1) >, < Retain Axis Settings(0|1) >, < Layout(0|1) >)

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

**構文:** obj << Copy ByGroup Script

**説明:** この分析を再現するJSLスクリプトを生成し、クリップボードにコピーする。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ), By( _bycol ) );
obj[1] << Copy ByGroup Script;

```

### Copy Script

**構文:** obj << Copy Script

**説明:** この分析を再現するJSLスクリプトを生成し、クリップボードにコピーする。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Copy Script;

```

### Data Table Window

**構文:** obj << Data Table Window

**説明:** この分析に使用したデータテーブルのウィンドウを手前に表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Data Table Window;

```

### Get By Levels

**構文:** obj << Get By Levels

**説明:** By列が指定されている場合、列名をキー、データ値を値とした連想配列を戻す。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

### Get ByGroup Script

**構文:** obj << Get ByGroup Script

**説明:** この分析を再現するスクリプト(JSL)を生成し、それを式として戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ), By( _bycol ) );
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Container

**構文:** obj << Get Container

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
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

### Get Data Table

**構文:** obj << Get Data Table

**説明:** データテーブルへの参照を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Group Platform

**構文:** obj << Get Group Platform

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

**構文:** obj << Get Script

**説明:** この分析を再現するスクリプト(JSL)を生成し、それを式として戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**構文:** obj << Get Script With Data Table

**説明:** この分析を再現するスクリプト(JSL)をデータテーブルへの参照も含めて生成し、それを式として戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**構文:** obj << Get Timing

**説明:** プラットフォームの起動にかかった時間を取得する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
t = obj << Get Timing;
Show( t );

```

### Get Web Support

**構文:** obj << Get Web Support

**説明:** ディスプレイオブジェクトにおけるインタラクティブHTMLサポートのレベルを数値で戻す。1は、一部または全部の要素がサポートされていることを示し、0は、サポートされないことを示す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

### Get Where Expr

**構文:** obj << Get Where Expr

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

**構文:** obj << Local Data Filter

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

**構文:** obj << Paste Local Data Filter

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

**構文:** obj << Redo Analysis

**説明:** 同じ分析をやり直し新しいウィンドウに表示する。データが変更されていると分析結果は異なる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**構文:** obj << Redo ByGroup Analysis

**説明:** 同じ分析をやり直し新しいウィンドウに表示する。データが変更されていると分析結果は異なる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ), By( _bycol ) );
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**構文:** obj << Relaunch Analysis

**説明:** プラットフォームの起動ウィンドウを開き、レポートを作成した時の設定を表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**構文:** obj << Relaunch ByGroup

**説明:** プラットフォームの起動ウィンドウを開き、レポートを作成した時の設定を表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ), By( _bycol ) );
obj[1] << Relaunch ByGroup;

```

### Remove Column Switcher

**構文:** obj << Remove Column Switcher

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

**構文:** obj << Remove Local Data Filter

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

**構文:** obj << Report;

Report( obj )

**説明:** レポートオブジェクトへの参照を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**構文:** obj << Report View( "完全"|"要約" )

**説明:** レポートビューは、プラットフォームレポートの詳細を表示するかどうかを決定する。Fullはすべての詳細を表示し、Summaryはプラットフォームにより限定されたものだけを表示する。 動作をカスタマイズするため、各ディスプレイボックスは<<Set Summary Behaviorメッセージをサポートする。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**構文:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**説明:** 分析を再現するためのJSLスクリプトを作成し、データテーブルにテーブルプロパティとして保存する。スクリプトの名前を指定できる。Append Suffixオプションは、スクリプト名に数字の接尾辞を追加する。これにより、同名のスクリプトが存在していても区別できる。Promptオプションは、ユーザにスクリプト名の指定を促す。Replaceオプションは、同名の既存のスクリプトを置き換える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ), By( _bycol ) );
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**構文:** obj << Save ByGroup Script to Journal

**説明:** この分析を再現するJSLスクリプトを生成し、ジャーナルにそのスクリプトのボタンを追加する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ), By( _bycol ) );
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**構文:** obj << Save ByGroup Script to Script Window

**説明:** この分析を再現するJSLスクリプトを生成し、現在のスクリプトウィンドウに表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ), By( _bycol ) );
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**構文:** obj << Save Script for All Objects

**説明:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**構文:** obj << Save Script for All Objects To Data Table( <name> )

**説明:** すべてのレポートオブジェクトを再現するスクリプトを現在のデータテーブルに保存する。このオプションは、ウィンドウ内にレポートが複数ある場合に便利。作成されるスクリプトの名前は、引用符で囲んで指定しない限り、1つ目のプラットフォーム名となる。

**例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table;

```

**例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**構文:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**説明:** この分析を再現するJSLスクリプトを生成し、データテーブルのテーブルプロパティとして保存する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**構文:** obj << Save Script to Journal

**説明:** この分析を再現するJSLスクリプトを生成し、ジャーナルにそのスクリプトのボタンを追加する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Save Script to Journal;

```

### Save Script to Report

**構文:** obj << Save Script to Report

**説明:** この分析を再現するJSLスクリプトを生成し、レポートウィンドウに表示する。分析手順の記録を結果と一緒に残せる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Save Script to Report;

```

### Save Script to Script Window

**構文:** obj << Save Script to Script Window

**説明:** この分析を再現するJSLスクリプトを生成し、現在のスクリプトウィンドウに表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
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

**構文:** obj << Sync to Data Table Changes

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

**構文:** obj << Title( "new title" )

**説明:** プラットフォームのタイトルを設定する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Title( "My Platform" );

```

### Top Report

**構文:** obj << Top Report

**説明:** レポート内のルートノードへの参照を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Transform Column

**構文:** obj = <Platform>(... Transform Column(<name>, Formula(<expression>), [Random Seed(<n>)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

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

**構文:** obj << View Web XML

**説明:** インタラクティブHTMLレポートの作成に使うXMLコードを戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

### Window View

**構文:** obj = Explore Outliers(...Window View( "Visible"|"Invisible"|"Private" )...)

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

**構文:** obj << By( column(s) )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ), By( _bycol ) );

```

### Columns

**構文:** obj << Columns( column(s) )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );

```

### Label

**構文:** obj << Label( column )

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );

```

### Validation

**構文:** obj << Validation( column )

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );

```

### Y

**構文:** obj << Y( column(s) )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );

```

## 関連するコンストラクター

### Explore Outliers

**構文:** Explore Outliers( Y( columns ) )

**説明:** 単変量または多変量データにおける外れ値を見つけ、調べ、管理する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );

```

## 項目のメッセージ

### K Nearest Neighbor Outliers

**構文:** obj << K Nearest Neighbor Outliers

**説明:** 各点から、k番目の近傍点までの距離を求める。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << k Nearest Neighbor Outliers( K( 5 ) );

```

### Multivariate k Nearest Neighbor Outliers

**構文:** obj << Multivariate k Nearest Neighbor Outliers

**JMP追加されたバージョン:** 14

### Quantile Range Outliers

**構文:** obj << Quantile Range Outliers

**説明:** 分位点から分位点範囲の数倍以上離れている値を求める。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Quantile Range Outliers;

```

### Robust Fit Outliers

**構文:** obj << Robust Fit Outliers

**説明:** 中心と尺度に関するロバストな推定値を使い、中心から尺度の数倍以上離れている値を求める。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Robust Fit Outliers;

```

### Robust PCA Outliers

**構文:** obj << Robust PCA Outliers

**説明:** データの行列を、低ランク近似行列と残差行列に分解する。残差が大きくなっている外れ値が検出される。同時に、欠測値の補完もできる。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( 2 :: 10 ) );
obj << Robust PCA Outliers;

```

## K Nearest Neighbor Outliers

### 項目のメッセージ

#### Close

**構文:** obj << Close

**JMP追加されたバージョン:** 16

#### Exclude Selected Rows

**構文:** obj << Exclude Selected Rows

**JMP追加されたバージョン:** 16

#### Impute Missing

**構文:** obj << Impute Missing( state=0 )

**説明:** 欠測値がある場合、K近傍法分析を行う前に、ロバスト主成分分析によって欠測値を補完する。 デフォルトではオン。

**JMP追加されたバージョン:** 16

#### K

**構文:** obj << K( number=8 )

**説明:** データの各行に対して、何番目の近傍点を求めるかを指定する自然数。 デフォルトの値は"8"。

**JMP追加されたバージョン:** 16

#### Save NN Distances

**構文:** obj << Save NN Distances

**説明:** データテーブルに、k番目の近接点までの距離を含む新しい列を保存する。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( 2 :: 10 ) );
obj << k Nearest Neighbor Outliers( K( 4 ) );
obj << Save NN Distances;

```

#### Scatterplot Matrix

**構文:** obj << Scatterplot Matrix

**説明:** すべての列の散布図行列を含むウィンドウを開く。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( 2 :: 10 ) );
obj << k Nearest Neighbor Outliers( K( 4 ) );
obj << Scatterplot Matrix;

```

## Multivariate Robust Outliers

### 項目のメッセージ

#### Close

**構文:** obj << Close

**JMP追加されたバージョン:** 16

#### Exclude Selected Rows

**構文:** obj << Exclude Selected Rows

**JMP追加されたバージョン:** 16

## Quantile Range Outliers

### 項目のメッセージ

#### Add Highest Nines to Missing Value Codes

**構文:** obj << Add Highest Nines to Missing Value Codes( ALL or column1, column2, ... )

**説明:** 引数としてリストで指定された列を選択し、それらの列で「9」を含む最大値を見つける。そして、それらの値に対して、「欠測値のコード」列プロパティを各列に付与する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
obj = dt << Explore Outliers(
	Y( Column Group( "Responses" ) ),
	Quantile Range Outliers( Show only columns with outliers( 1 ) )
);
obj << Add Highest Nines to Missing Value Codes( :PS_RPNBR );
dt:PS_RPNBR << Get Column Properties;
//See Log for Missing Value Codes column property

```

#### Add to Missing Value Codes

**構文:** obj << Add to Missing Value Codes( ALL or column1, column2, ... )

**説明:** 引数としてリストで指定された列を選択し、それらの列の外れ値に「欠測値のコード」プロパティを追加する。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Quantile Range Outliers;
obj << Add to Missing Value Codes( :"Q-E"n, :"ZN-E"n );

```

#### Change Highest Nines to Missing

**構文:** obj << Change Highest Nines to Missing( ALL or column1, column2, ... )

**説明:** 引数としてリストで指定された列を選択し、それらの列で「9」の最大値を見つける。そして、その「9」の最大値を欠測値に変更する。この操作により、データテーブルが変更されることに注意。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
obj = dt << Explore Outliers(
	Y( Column Group( "Responses" ) ),
	Quantile Range Outliers( Show only columns with outliers( 1 ) )
);
obj << Change Highest Nines to Missing( :PS_RPNBR );

```

#### Change to Missing

**構文:** obj << Change to Missing( ALL or column1, column2, ... )

**説明:** 引数としてリストで指定された列を選択する。そして、それらの指定された列で、外れ値を欠測値に変更する。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Quantile Range Outliers( Tail Quantile( 0.3 ) );
Wait( 2 );
obj << Change to Missing( :"Q-E"n, :"ZN-E"n );

```

#### Close

**構文:** obj << Close

**説明:** 分析結果を削除し、コマンドのアウトラインを再度開く。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Quantile Range Outliers;
obj << Robust Fit Outliers;
Wait( 2 );
obj << Close;

```

#### Color Cells

**構文:** obj << Color Cells( ALL or column1, column2, ... )

**説明:** 引数としてリストで指定された列を選択する。そして、それらの列で外れ値を含むセルに色を付ける。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Quantile Range Outliers( Tail Quantile( 0.3 ) );
obj << Color Cells( :"Q-E"n, :"ZN-E"n );

```

#### Color Rows

**構文:** obj << Color Rows( ALL or column1, column2, ... )

**説明:** 引数としてリストで指定された列を選択する。そして、それらの指定された列の外れ値に対応する行に、「色」の行属性を割り当てる。

**JMP追加されたバージョン:** 16

#### Exclude Rows

**構文:** obj << Exclude Rows( ALL or column1, column2, ... )

**説明:** 引数にリストで指定された列を選択する。そして、それらの指定された列で外れ値を含む行を除外する。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Quantile Range Outliers( Tail Quantile( 0.3 ) );
obj << Exclude Rows( :"Q-E"n, :"ZN-E"n );

```

#### Formula Columns

**構文:** obj << Formula Columns( ALL or column1, column2, ... )

**説明:** 選択されている列に関して、外れ値を欠測値に変える新しい計算式の列を作成する。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Quantile Range Outliers( Tail Quantile( 0.3 ) );
Wait( 2 );
obj << Formula Columns( Suffix( "Culled" ) );

```

#### Formula Script

**構文:** obj << Formula Script( ALL or column1, column2, ... )

**説明:** 選択されている列に関して、外れ値を欠測値に変える新しい計算式の列を作成するスクリプトを生成する。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Quantile Range Outliers( Tail Quantile( 0.3 ) );
Wait( 2 );
obj << Formula Script( Suffix( "Culled" ) );

```

#### Get Quantile Outliers

**構文:** obj << Get Quantile Outliers

**説明:** 外れ値を含む列のリストと、それらの列の外れ値を含むベクトルのリストを戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Quantile Range Outliers;
obj << Get Quantile Outliers;

```

#### Q

**構文:** obj << Q( number=3 )

**説明:** 分位点間距離に対するQを設定する。裾の分位点から分位点間距離のQ倍以上離れているものが外れ値と見なされる。設定を適用するには[再スキャン]を使用する。 デフォルトの値は"3"。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Quantile Range Outliers( Q( 4 ) );

```

#### Rescan

**構文:** obj << Rescan

**説明:** 設定を変更した後に、変更後の設定で再スキャン・再計算して外れ値を求める。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Quantile Range Outliers;
obj << Tail Quantile( 0.2 );
obj << Rescan;

```

#### Restrict search to integers

**構文:** obj << Restrict search to integers( state=0|1 )

**説明:** 外れ値とみなすデータ値を整数のみに制限する。この設定により、「99」などの欠測値コードやエラーコードを見つけられるように検索を制限できる。[分位点範囲の外れ値]と[ロバスト推定法による外れ値]の手法に使用できる。デフォルトではオフ。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers(
	Y( Column Group( "Sensor Measurements" ) ),
	Quantile Range Outliers( Restrict search to integers( 1 ) )
);

```

#### Save Quantile Outlier Limits

**構文:** obj << Save Quantile Outlier Limits

**説明:** 「分位点範囲の外れ値」レポートの情報と外れ値の列を含む新しいデータテーブルを開く。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Quantile Range Outliers;
obj << Save Quantile Outlier Limits;

```

#### Select Rows

**構文:** obj << Select Rows( ALL or column1, column2, ... )

**説明:** 引数としてリストで指定された列を選択し、それらの列で外れ値を持つ行を選択する。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Quantile Range Outliers( Tail Quantile( 0.3 ) );
obj << Select Rows( :"Q-E"n, :"ZN-E"n );

```

#### Show only columns with outliers

**構文:** obj << Show only columns with outliers( state=0|1 )

**説明:** 結果のレポートに表示される列を、外れ値を含んだものだけに限る。[分位点範囲の外れ値]と[ロバスト推定による外れ値]で使用できる。デフォルトではオフ。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers(
	Y( Column Group( "Sensor Measurements" ) ),
	Quantile Range Outliers( Show only columns with outliers( 1 ) )
);

```

#### Tail Quantile

**構文:** obj << Tail Quantile( number=.10 )

**説明:** 各裾の分位点を設定する。これは分位点間距離を計算するのに使用される。設定を適用するには[再スキャン]を使用する。 デフォルトの値は".10"。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Quantile Range Outliers( Tail Quantile( 0.2 ) );

```

## Robust Fit Outliers

### 項目のメッセージ

#### Add to Missing Value Codes

**構文:** obj << Add to Missing Value Codes( ALL or column1, column2, ... )

**説明:** 引数としてリストで指定された列を選択し、それらの列の外れ値に「欠測値のコード」プロパティを追加する。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Robust Fit Outliers( K Sigma( 2 ) );
obj << Add to Missing Value Codes( :"Q-E"n, :"ZN-E"n );

```

#### Cauchy

**構文:** obj << Cauchy( state=0|1 )

**説明:** Cauchy分布をあてはめて、中心と尺度のロバストな推定値を求める。推定された中心と尺度は外れ値を特定するために使用される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Robust Fit Outliers;
obj << Cauchy( 1 );
obj << Rescan;

```

#### Change to Missing

**構文:** obj << Change to Missing( ALL or column1, column2, ... )

**説明:** 引数としてリストで指定された列を選択する。そして、それらの指定された列で、外れ値を欠測値に変更する。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Robust Fit Outliers( K Sigma( 2 ) );
Wait( 2 );
obj << Change to Missing( :"Q-E"n, :"ZN-E"n );

```

#### Close

**構文:** obj << Close

**説明:** 分析結果を削除し、コマンドのアウトラインを再度開く。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Robust Fit Outliers;
Wait( 2 );
obj << Close;

```

#### Color Cells

**構文:** obj << Color Cells( ALL or column1, column2, ... )

**説明:** 引数としてリストで指定された列を選択する。そして、それらの列で外れ値を含むセルに色を付ける。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Robust Fit Outliers( K Sigma( 2 ) );
obj << Color Cells( :"Q-E"n, :"ZN-E"n );

```

#### Color Rows

**構文:** obj << Color Rows( ALL or column1, column2, ... )

**説明:** 引数としてリストで指定された列を選択する。そして、それらの指定された列の外れ値に対応する行に、「色」の行属性を割り当てる。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
dt << Clear Row States;
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Robust Fit Outliers( K Sigma( 2 ) );
obj << Color Rows( :"Q-E"n, :"ZN-E"n );

```

#### Exclude Rows

**構文:** obj << Exclude Rows( ALL or column1, column2, ... )

**説明:** 引数にリストで指定された列を選択する。そして、それらの指定された列で外れ値を含む行を除外する。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Robust Fit Outliers( K Sigma( 2 ) );
obj << Exclude Rows( :"Q-E"n, :"ZN-E"n );

```

#### Formula Columns

**構文:** obj << Formula Columns( ALL or column1, column2, ... )

**説明:** 選択されている列に関して、外れ値を欠測値に変える新しい計算式の列を作成する。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Robust Fit Outliers( K Sigma( 2 ) );
Wait( 2 );
obj << Formula Columns( Suffix( "Culled" ) );

```

#### Formula Script

**構文:** obj << Formula Script( ALL or column1, column2, ... )

**説明:** 選択されている列に関して、外れ値を欠測値に変える新しい計算式の列を作成するスクリプトを生成する。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Robust Fit Outliers( K Sigma( 2 ) );
Wait( 2 );
obj << Formula Script( Suffix( "Culled" ) );

```

#### Huber

**構文:** obj << Huber( state=0|1 )

**説明:** Huber法によって、中心と尺度のロバストな推定値を求める。推定された中心と尺度は外れ値を特定するために使用される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Robust Fit Outliers;
obj << Huber( 1 );
obj << Rescan;

```

#### K Sigma

**構文:** obj << K Sigma( number=4 )

**説明:** シグマに対するKを設定する。中心から尺度のK倍離れているものが外れ値と定義される。 デフォルトの値は"4"。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Robust Fit Outliers;
obj << K Sigma( 3 );
obj << Rescan;

```

#### Quartile

**構文:** obj << Quartile( state=0|1 )

**説明:** ロバストな推定値として、中央値(メディアン)を中心とし、1.349で割った分位点範囲を尺度とする。これらの中心と尺度が外れ値を特定するために使用される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Robust Fit Outliers;
obj << Quartile( 1 );
obj << Rescan;

```

#### Rescan

**構文:** obj << Rescan

**説明:** 設定を変更した後に、変更後の設定で再スキャン・再計算して外れ値を求める。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Robust Fit Outliers;
obj << K Sigma( 2.5 );
obj << Rescan;

```

#### Save Robust Outlier Limits

**構文:** obj << Save Robust Outlier Limits

**説明:** 「ロバスト推定による外れ値」レポートの要約統計量を、新しいデータテーブルに保存します。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Robust Fit Outliers;
obj << Save Robust Outlier Limits;

```

#### Select Rows

**構文:** obj << Select Rows( ALL or column1, column2, ... )

**説明:** 引数としてリストで指定された列を選択し、それらの列で外れ値を持つ行を選択する。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Robust Fit Outliers( K Sigma( 2 ) );
obj << Select Rows( :"Q-E"n, :"ZN-E"n );

```

## Robust PCA Outliers

### 項目のメッセージ

#### Center

**構文:** obj << Center( state=1 )

**説明:** 処理を行う前に、中央値によってデータを中心化するかどうかを指定する。 デフォルトではオン。

**JMP追加されたバージョン:** 16

#### Close

**構文:** obj << Close

**説明:** プラットフォームのレポートから、ロバスト主成分分析の結果を削除する。

**JMP追加されたバージョン:** 16

#### Lambda

**構文:** obj << Lambda( number )

**説明:** この値を小さくすると、ロバスト主成分分析において外れ値を検出する感度が高くなる。デフォルトのラムダは2/sqrt(max(nRow,nCol))。

**JMP追加されたバージョン:** 16

#### MaxIt

**構文:** obj << MaxIt( number )

**説明:** 特異値分解の最大反復回数。この回数に達しても収束しない場合、収束に失敗したことになる。

**JMP追加されたバージョン:** 16

#### Outlier Threshold

**構文:** obj << Outlier Threshold( number=2 )

**説明:** 絶対値がこの閾値より大きい標準化残差は、外れ値のレポートに表示される。 デフォルトの値は"2"。

**JMP追加されたバージョン:** 16

#### Randomized SVD Dim

**構文:** obj << Randomized SVD Dim( state=0|1 )

**説明:** 乱択特異値分解の次元数を指定する。乱択特異値分解は、横長のデータ(ワイドデータ)に対して計算時間を短縮することができる。

**JMP追加されたバージョン:** 17

#### Save Cleaned

**構文:** obj << Save Cleaned( Trim(<threshold>),Impute(<threshold>),Make Missing(<threshold>),Color Impute(0|1)--if none specified it will prompt with dialog )

**説明:** 外れ値を補完や削除した新しい列を作成する。Trim(引数)は、標準化残差が引数よりも大きい場合には、その値を「＋引数」もしくは「－引数」に置換する。Impute(引数)は、標準化残差が引数より大きい場合には、その値を低ランク近似による予測値に変える。Make Missing(引数)は、標準化残差が引数より大きな場合には、その値を欠測値に変える。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers(
	Y( Column Group( "Sensor Measurements" ) ),
	Robust PCA Outliers
);
obj << Save Cleaned( Trim( 25 ), Impute( 50 ), Make Missing( 100 ) );

```

#### Save Large Outliers

**構文:** obj << Save Large Outliers

**説明:** レポートにおける外れ値を含んだ新しいデータテーブルを作成する。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers(
	Y( Column Group( "Sensor Measurements" ) ),
	Robust PCA Outliers
);
obj << Save Large Outliers;

```

#### Save Low Rank Approx

**構文:** obj << Save Low Rank Approx

**説明:** 低ランク近似による予測値を含んだ新しい列を作成する。低ランク近似による予測値は、特異値分解によって求められる。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers(
	Y( Column Group( "Sensor Measurements" ) ),
	Robust PCA Outliers
);
obj << Save Low Rank Approx;

```

#### Save Residuals

**構文:** obj << Save Residuals

**説明:** 残差を含んだ新しい列を作成する。残差とは、実測値から低ランク近似による予測値を引いたもの。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers(
	Y( Column Group( "Sensor Measurements" ) ),
	Robust PCA Outliers
);
obj << Save Residuals;

```

#### Save Scaled Residuals

**構文:** obj << Save Scaled Residuals

**説明:** 標準化残差を含んだ新しい列を作成する。標準化残差とは、標準化したデータから、その低ランク近似による予測値を引いたもの。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers(
	Y( Column Group( "Sensor Measurements" ) ),
	Robust PCA Outliers
);
obj << Save Scaled Residuals;

```

#### Scale

**構文:** obj << Scale( state=1 )

**説明:** 処理を行う前に、分位点範囲によってデータを標準化するかどうかを指定する。分位点範囲によって標準化するのは、標準偏差による標準化よりも、ロバストにするためである。 デフォルトではオン。

**JMP追加されたバージョン:** 16

#### Tolerance

**構文:** obj << Tolerance( number )

**説明:** アルゴリズムを停止する時の収束基準を指定する。デフォルトの収束基準値は、起動時に指定された列の数に基づいて設定される。

**JMP追加されたバージョン:** 16

#### Use Randomized SVD

**構文:** obj << Use Randomized SVD( state=0|1 )

**説明:** 乱択特異値分解によって次元を削減する。乱択特異値分解は、横長のデータ(ワイドデータ)に対して計算時間を短縮することができる。

**JMP追加されたバージョン:** 17

