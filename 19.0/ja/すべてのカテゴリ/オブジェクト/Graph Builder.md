# Graph Builder



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

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
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

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) ),
	By( _bycol )
);
obj[1] << Copy ByGroup Script;

```

### Copy Script

**構文:** obj &lt;&lt; Copy Script

**説明:** この分析を再現するJSLスクリプトを生成し、クリップボードにコピーする。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
obj << Copy Script;

```

### Data Table Window

**構文:** obj &lt;&lt; Data Table Window

**説明:** この分析に使用したデータテーブルのウィンドウを手前に表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
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

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) ),
	By( _bycol )
);
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

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

### Get Data Table

**構文:** obj &lt;&lt; Get Data Table

**説明:** データテーブルへの参照を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
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

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**構文:** obj &lt;&lt; Get Script With Data Table

**説明:** この分析を再現するスクリプト(JSL)をデータテーブルへの参照も含めて生成し、それを式として戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**構文:** obj &lt;&lt; Get Timing

**説明:** プラットフォームの起動にかかった時間を取得する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
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

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**構文:** obj &lt;&lt; Redo ByGroup Analysis

**説明:** 同じ分析をやり直し新しいウィンドウに表示する。データが変更されていると分析結果は異なる。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) ),
	By( _bycol )
);
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**構文:** obj &lt;&lt; Relaunch Analysis

**説明:** プラットフォームの起動ウィンドウを開き、レポートを作成した時の設定を表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**構文:** obj &lt;&lt; Relaunch ByGroup

**説明:** プラットフォームの起動ウィンドウを開き、レポートを作成した時の設定を表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) ),
	By( _bycol )
);
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

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**構文:** obj &lt;&lt; Report View( "完全"|"要約" )

**説明:** レポートビューは、プラットフォームレポートの詳細を表示するかどうかを決定する。Fullはすべての詳細を表示し、Summaryはプラットフォームにより限定されたものだけを表示する。 動作をカスタマイズするため、各ディスプレイボックスは<<Set Summary Behaviorメッセージをサポートする。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**構文:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**説明:** 分析を再現するためのJSLスクリプトを作成し、データテーブルにテーブルプロパティとして保存する。スクリプトの名前を指定できる。Append Suffixオプションは、スクリプト名に数字の接尾辞を追加する。これにより、同名のスクリプトが存在していても区別できる。Promptオプションは、ユーザにスクリプト名の指定を促す。Replaceオプションは、同名の既存のスクリプトを置き換える。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**構文:** obj &lt;&lt; Save ByGroup Script to Journal

**説明:** この分析を再現するJSLスクリプトを生成し、ジャーナルにそのスクリプトのボタンを追加する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**構文:** obj &lt;&lt; Save ByGroup Script to Script Window

**説明:** この分析を再現するJSLスクリプトを生成し、現在のスクリプトウィンドウに表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**構文:** obj &lt;&lt; Save Script for All Objects

**説明:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**構文:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**説明:** すべてのレポートオブジェクトを再現するスクリプトを現在のデータテーブルに保存する。このオプションは、ウィンドウ内にレポートが複数ある場合に便利。作成されるスクリプトの名前は、引用符で囲んで指定しない限り、1つ目のプラットフォーム名となる。

#### 例 1

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table;

```

#### 例 2

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**構文:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**説明:** この分析を再現するJSLスクリプトを生成し、データテーブルのテーブルプロパティとして保存する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**構文:** obj &lt;&lt; Save Script to Journal

**説明:** この分析を再現するJSLスクリプトを生成し、ジャーナルにそのスクリプトのボタンを追加する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
obj << Save Script to Journal;

```

### Save Script to Report

**構文:** obj &lt;&lt; Save Script to Report

**説明:** この分析を再現するJSLスクリプトを生成し、レポートウィンドウに表示する。分析手順の記録を結果と一緒に残せる。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
obj << Save Script to Report;

```

### Save Script to Script Window

**構文:** obj &lt;&lt; Save Script to Script Window

**説明:** この分析を再現するJSLスクリプトを生成し、現在のスクリプトウィンドウに表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
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

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
obj << Title( "My Platform" );

```

### Top Report

**構文:** obj &lt;&lt; Top Report

**説明:** レポート内のルートノードへの参照を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
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

**構文:** obj = Graph Builder(...Window View( "Visible"|"Invisible"|"Private" )...)

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

## 関連するコンストラクター

### Graph Builder

**構文:** Graph Builder( Variables( X(column ), Y( column ), &lt;Group X( column )&gt;, &lt;Group Y( column )&gt;, &lt;Shape( column )&gt;, &lt;Color( column )&gt;, &lt;Overlay( column )&gt;, &lt;Freq( column )&gt; ), &lt;Elements(...)&gt; ) )

**説明:** データをインタラクティブに探索するためのグラフィカルインターフェースを提供する。グラフのゾーンに列をドラッグしてさまざまなグラフを作成できる。グラフの種類には、散布図、等高線図、棒グラフ、面グラフ、箱ひげ図、ヒストグラム、ヒートマップ、円グラフ、ツリーマップ、モザイク図、地図などがある。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);

```

## 項目のメッセージ

### Add Element

**構文:** obj &lt;&lt; Add Element( xposition, yposition, {Type(element name), X(i=1), Y(i=1), options...} )

**説明:** 指定されたXおよびYポジションに新しいグラフ要素を追加する。要素の指定には要素名、使用するデータの役割、およびオプションの値が含まれる。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
Wait( 0.5 );
gb << Add Element( 1, 1, {Type( "Line Of Fit" ), X, Y, Degree( "Quadratic" )} );

```

### Add Variable

**構文:** obj &lt;&lt; Add Variable( {column, Role(role), Position(p=1), Inner Position(i=1)}, &lt; &lt;&lt;Method("insert"|"merge"|"replace")&gt; )

**説明:** 現在のグラフビルダーの設定に、RoleとPositionを指定した新しい変数を追加する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
Wait( 0.5 );
gb << Add Variable( {:age, Role( "Wrap" )} );

```

### Auto Stretching

**構文:** obj &lt;&lt; Auto Stretching( state=0|1 )

**説明:** ウィンドウのサイズに合わせて、グラフを自動的に伸縮させる。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Auto Stretching( 0 );

```

### Back Color

**構文:** obj &lt;&lt; Back Color( color )

**説明:** グラフの周りの背景の色を設定する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Back Color( "Yellow" );

```

### Categorical Color Theme

**構文:** obj &lt;&lt; Categorical Color Theme

**説明:** カテゴリに使用するカラーテーマを設定する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Categorical Color Theme( "Pastel" );

```

### Continuous Color Theme

**構文:** obj &lt;&lt; Continuous Color Theme

**説明:** グラデーションに使用するカラーテーマを設定する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Continuous Color Theme( "White to Black" );

```

### Done

**構文:** obj &lt;&lt; Done

**説明:** 設定パネルを非表示にして標本抽出を中止する。

**JMP追加されたバージョン:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Done;

```

### Elements

**構文:** Elements( Points( X, Y )| Box plot( X, Y, Jitter( state=0|1 ), Outliers( state=0|1 ), Box Style( "Outlier"|"Quantile" ) )|Line( X, Y, Row Order( number ), Summary Statistic( ) )| Histogram( X, Y)| Bar( X, Y, Bar Style(), Summary Statistic() )| Contour(X, Y)| Smoother(X, Y)|Map Shapes(Summary Statistic() ))

**説明:** グラフの要素を指定する。

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
gb = dt << Graph Builder(
	Variables( X( :"F Rate 0-19"n ), Y( :Region ) ),
	Elements( Box Plot( X, Y ), Line( X, Y, Summary Statistic( "Mean" ) ) )
);

```

### Error Bar Offset

**構文:** obj &lt;&lt; Error Bar Offset

**説明:** 誤差バーのオフセットを設定するためのダイアログを開く。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
Wait( 1 );
gb << Error Bar Offset( 0.01 );

```

### Extend Axis to Zero

**構文:** obj &lt;&lt; Extend Axis to Zero( multiplier=1 )

**説明:** 軸スケールを広げてゼロが含まれるようにするための乗数。 デフォルトの値は"1"。

**JMP追加されたバージョン:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = dt << Graph Builder(
	Extend Axis to Zero( 10 ),
	Variables( X( :Weight ), Y( :Height ) ),
	Elements( Line( X, Y ) )
);

```

### Extend Dual Axes to Zero

**構文:** obj &lt;&lt; Extend Dual Axes to Zero( multiplier=2 )

**説明:** 左右両方に軸がある場合に、軸スケールを広げてゼロが含まれるようにするための乗数。 デフォルトの値は"2"。

**JMP追加されたバージョン:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = dt << Graph Builder(
	Size( 513, 465 ),
	Extend Dual Axes to Zero( 10 ),
	Variables( X( :age ), Y( :weight, Side( "Right" ) ), Y( :height, Position( 1 ) ) ),
	Elements( Line( X, Y( 2 ) ), Line( X, Y( 1 ) ) )
);

```

### Extend Parallel Y Axes to Zero

**構文:** obj &lt;&lt; Extend Parallel Y Axes to Zero( multiplier=3 )

**説明:** [複数のY軸]モードにおいて、軸スケールを広げてゼロが含まれるようにするための乗数。 デフォルトの値は"3"。

**JMP追加されたバージョン:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = dt << Graph Builder(
	Show Control Panel( 0 ),
	Parallel Axes( "Y Only" ),
	Extend Parallel Y Axes to Zero( 0 ),
	Variables( X( :age ), Y( :height ), Y( :weight ) ),
	Elements( Position( 1, 1 ), Line( X, Y ) ),
	Elements( Position( 1, 2 ), Line( X, Y ) )
);

```

### Fit to Window

**構文:** obj &lt;&lt; Fit to Window( "自動"|"オン"|"オフ"|"縦横比を保持" )

**説明:** レポートの自動伸縮の動作を設定する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Fit to Window( "Off" );

```

### Get Element

**構文:** obj &lt;&lt; Get Element( xposition, yposition, i )

**説明:** 指定したXおよびYポジションのグラフ要素の指定情報を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Get Element( 1, 1, 1 );

```

### Get Elements

**構文:** obj &lt;&lt; Get Elements( xposition, yposition )

**説明:** 指定したXおよびYポジションの要素の指定情報をリストで戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Get Elements( 1, 1 );

```

### Get Legend Display

**構文:** obj &lt;&lt; Get Legend Display

**説明:** グラフの凡例ディスプレイボックスを戻す。このディスプレイボックスに対して照会や変更が行える。

**JMP追加されたバージョン:** 16

```jsl


dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ), Overlay( :sex ), Color( :age ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) )
);
lgnd = gb << Get Legend Display;
item = lgnd << Get Item( 2, 1 );
item << Set Visible( 0 );

```

### Get Legend Server

**構文:** obj &lt;&lt; Get Legend Server

**説明:** 凡例のディスプレイボックスや対応するグラフ内のディスプレイセグメントによって使用される情報を保持したオブジェクトを戻す。

**JMP追加されたバージョン:** 16

```jsl


dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ), Overlay( :sex ), Color( :age ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) )
);
lgnd = gb << Get Legend Server;
items = lgnd << Get Legend Items;
Show( items );

```

### Get N Elements

**構文:** obj &lt;&lt; Get N Elements( xposition, yposition )

**説明:** 指定したXおよびYポジションのグラフ要素の数を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Get N Elements( 1, 1 );

```

### Get N Positions

**構文:** nrole

**説明:** 指定の役割に使用されているポジションの数を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Get N Positions( "X" );

```

### Get N Variables

**構文:** n = obj &lt;&lt; Get N Variables

**説明:** 使用されている変数の数を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Get N Variables();

```

### Get Variable

**構文:** obj &lt;&lt; Get Variable( index )

**説明:** 変数の設定情報を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Get Variable( 1 );

```

### Get Variables

**構文:** list = obj &lt;&lt; Get Variables

**説明:** 使用されている変数の指定情報をリストで戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Get Variables();

```

### Graph Spacing

**構文:** obj &lt;&lt; Graph Spacing( gap=1 )

**説明:** グラフパネル間のスペース幅を設定する。 デフォルトの値は"1"。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Add Variable( {:age, Role( "Wrap" )} );
gb << Graph Spacing( 3 );

```

### Grid Color

**構文:** obj &lt;&lt; Grid Color( color )

**説明:** グラフのグリッド線の色を設定する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = dt << Graph Builder(
	Graph Spacing( 5 ),
	Variables( X( :height ), Y( :weight ), Wrap( :age ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Grid Color( "Red" );

```

### Grid Transparency

**構文:** obj &lt;&lt; Grid Transparency( fraction=1 )

**説明:** グリッド線の透明度を設定する。 デフォルトの値は"1"。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = dt << Graph Builder(
	Graph Spacing( 5 ),
	Variables( X( :height ), Y( :weight ), Wrap( :age ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Grid Transparency( 0.2 );

```

### Include Missing Categories

**構文:** obj &lt;&lt; Include Missing Categories( state=0|1 )

**説明:** 欠測値を、カテゴリカル変数の1つの水準として処理する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
:age[{10, 20, 30}] = .;
gb << Add Variable( {:age, Role( "Wrap" )} );
gb << Include Missing Categories( 1 );

```

### Launch Analysis

**構文:** obj &lt;&lt; Launch Analysis

**説明:** 現在の変数を使用して分析を起動する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Launch Analysis;

```

### Legend Floating Offset

**構文:** obj &lt;&lt; Legend Floating Offset

**説明:** 凡例の位置が[フローティング]に設定されているときの凡例のオフセットをピクセル数で設定する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Legend Position( "Inside Floating" );

```

### Legend Position

**構文:** obj &lt;&lt; Legend Position( "右"|"下"|"左内側"|"右内側"|"左下内側"|"右下内側"|"内側フローティング" )

**説明:** 凡例の位置を設定する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Legend Position( "Bottom" );

```

### Legend Settings

**構文:** obj &lt;&lt; Legend Settings

**説明:** 凡例のプロパティを変更するためのダイアログを開く。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
Wait( 1 );
gb << Legend Settings();

```

### Level Fill Color

**構文:** obj &lt;&lt; Level Fill Color( color )

**説明:** グラフの水準名の背景色を設定する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Level Fill Color( {103, 214, 214} );

```

### Level Frame Color

**構文:** obj &lt;&lt; Level Frame Color( color )

**説明:** グラフの水準名の枠の色を設定する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Level Frame Color( "Blue" );

```

### Level Spacing Color

**構文:** obj &lt;&lt; Level Spacing Color( color )

**説明:** 水準ラベル間のスペースの色を設定する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Level Spacing Color( "Blue" );

```

### Level Spacing Transparency

**構文:** obj &lt;&lt; Level Spacing Transparency( fraction=1 )

**説明:** 水準ラベル間のスペースの透明度を設定する。 デフォルトの値は"1"。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Level Spacing Transparency( .2 );

```

### Level Text Color

**構文:** obj &lt;&lt; Level Text Color( color )

**説明:** グラフの水準名のテキストの色を設定する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Level Text Color( "Red" );

```

### Level Transparency

**構文:** obj &lt;&lt; Level Transparency( fraction=1 )

**説明:** グラフの水準名の背景の透明度を設定する。 デフォルトの値は"1"。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Level Transparency( .2 );

```

### Level Underline

**構文:** obj &lt;&lt; Level Underline( state=0|1 )

**説明:** グラフの水準名に下線を引く、または下線を外す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Level Frame Color( "Blue" );
gb << Level Underline( 1 );

```

### Lighten large fills

**構文:** obj &lt;&lt; Lighten large fills( state=0|1 )

**説明:** 円グラフ、ツリーマップ、モザイク図で広く塗りつぶされる領域の色を自動的に薄くする。 デフォルトではオン。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Lighten large fills( 1 );

```

### Link Page Axes

**構文:** obj &lt;&lt; Link Page Axes( "なし"|"Xのみ"|"Yのみ"|"XとY" )

**説明:** ページグループの各水準でリンクする軸を指定する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = dt << Graph Builder(
	Size( 470, 552 ),
	Variables( X( :height ), Y( :weight ), Page( :sex ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Link Page Axes( "Y Only" );

```

### Lock Scales

**構文:** obj &lt;&lt; Lock Scales( state=0|1 )

**説明:** 軸およびグラデーションの範囲を固定して、データやフィルターの変更に対応して軸やグラデーションが変化しないようにする。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Lock Scales( 1 );

```

### Make into Data Table

**構文:** obj &lt;&lt; Make into Data Table

**説明:** グラフの画像を含んだ新しいデータテーブルを作成する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Make into Data Table;

```

### Order Statistic

**構文:** obj &lt;&lt; Order Statistic( "N"|"平均"|"中央値(メディアン)"|"最頻値"|"幾何平均"|"最小値"|"最大値"|"範囲"|"合計"|"累積和"|"累積%"|"全体に対する%"|"各因子水準内での%"|"全応答と全体での%"|"標準偏差"|"分散"|"標準誤差"|"変動係数"|"四分位範囲"|"中央絶対偏差"|"第1四分位点"|"第3四分位点"="平均" )

**説明:** グラフ内の変数に対する順序付けをするための要約統計量を指定し、デフォルトの順序を設定する。 デフォルトの値は"平均"。

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
gb = dt << Graph Builder(
	Order Statistic( "Max" ),
	Variables( X( :"F Rate 0-19"n ), Y( :Region, Order By( :"F Rate 0-19"n, Ascending ) ) ),
	Elements( Box Plot( X, Y ) )
);

```

### Overlay Auto Line Styles Limit

**構文:** obj &lt;&lt; Overlay Auto Line Styles Limit( count=6 )

**説明:** 色分けの変数があり、[重ね合わせの表現方法]が[自動]となっている場合に、線種を分ける重ね合わせ水準の数を制限する。 デフォルトの値は"6"。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = dt << Graph Builder(
	Overlay Auto Line Styles Limit( 0 ),
	Variables( X( :Weight ), Y( :Height ), Overlay( :sex ), Color( :Age ) ),
	Elements( Line( X, Y ) )
);

```

### Overlay Auto Marker Styles Limit

**構文:** obj &lt;&lt; Overlay Auto Marker Styles Limit( count=62 )

**説明:** 色分けの変数があり、[重ね合わせの表現方法]が[自動]となっている場合に、マーカースタイルを分ける重ね合わせ水準の数を制限する。 デフォルトの値は"62"。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = dt << Graph Builder(
	Overlay Auto Marker Styles Limit( 0 ),
	Variables( X( :Weight ), Y( :Height ), Overlay( :sex ), Color( :Age ) ),
	Elements( Points( X, Y ) )
);

```

### Page Count Limit

**構文:** obj &lt;&lt; Page Count Limit( count=200 )

**説明:** ページ変数を基に作成されるページの最大数を設定する。パフォーマンスの低下を防ぐことができる。 デフォルトの値は"200"。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = dt << Graph Builder(
	Variables( X( :Age ), Y( :Height ), Page( :Name ) ),
	Elements( Points( X, Y ) )
);
gb << Page Count Limit( 5 );

```

### Page Gap Size

**構文:** obj &lt;&lt; Page Gap Size( gap=25 )

**説明:** ページグループ間のスペース幅を設定する。 デフォルトの値は"25"。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = dt << Graph Builder(
	Variables( X( :Age ), Y( :Height ), Page( :Sex ) ),
	Elements( Smoother( X, Y ) )
);
gb << Page Gap Size( 3 );

```

### Page Level Fill Color

**構文:** obj &lt;&lt; Page Level Fill Color( color )

**説明:** グラフの水準名の背景色を設定する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = dt << Graph Builder(
	Variables( X( :Age ), Y( :Height ), Page( :Sex ) ),
	Elements( Smoother( X, Y ) )
);
gb << Page Level Fill Color( {103, 214, 214} );

```

### Page Level Frame Color

**構文:** obj &lt;&lt; Page Level Frame Color( color )

**説明:** グラフの水準名の枠の色を設定する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = dt << Graph Builder(
	Variables( X( :Age ), Y( :Height ), Page( :Sex ) ),
	Elements( Smoother( X, Y ) )
);
gb << Page Level Frame Color( "Blue" );

```

### Page Level Text Color

**構文:** obj &lt;&lt; Page Level Text Color( color )

**説明:** グラフの水準名のテキストの色を設定する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = dt << Graph Builder(
	Variables( X( :Age ), Y( :Height ), Page( :Sex ) ),
	Elements( Smoother( X, Y ) )
);
gb << Page Level Text Color( "Red" );

```

### Page Level Transparency

**構文:** obj &lt;&lt; Page Level Transparency( fraction=1 )

**説明:** グラフの水準名の背景の透明度を設定する。 デフォルトの値は"1"。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = dt << Graph Builder(
	Variables( X( :Age ), Y( :Height ), Page( :Sex ) ),
	Elements( Smoother( X, Y ) )
);
gb << Page Level Transparency( .2 );

```

### Page Level Underline

**構文:** obj &lt;&lt; Page Level Underline( state=0|1 )

**説明:** グラフの水準名に下線を引く、または下線を外す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = dt << Graph Builder(
	Variables( X( :Age ), Y( :Height ), Page( :Sex ) ),
	Elements( Smoother( X, Y ) )
);
gb << Page Level Frame Color( "Blue" );
gb << Page Level Underline( 1 );

```

### Parallel Axis Merging

**構文:** obj &lt;&lt; Parallel Axis Merging( "常に"|"類似性 低"|"類似性 中"|"類似性 高"|"しない" )

**説明:** 「スケールの組み合わせ」で、どのようなときに「パラレル 個別」ではなく「パラレル マージ」を自動選択するかを指定する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Parallel Axis Merging( "Never" );

```

### Parallel Y Axes

**構文:** obj &lt;&lt; Parallel Y Axes( state=0|1 )

**説明:** すべてのY軸を同じグラフに表示する。パラレルプロット似ているが、X変数をサポートする点が異なる。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = dt << Graph Builder(
	Variables( X( :age ), Y( :height ), Y( :weight ) ),
	Elements( Position( 1, 1 ), Points( X, Y ), Smoother( X, Y ) ),
	Elements( Position( 1, 2 ), Points( X, Y ), Smoother( X, Y ) )
);
gb << Parallel Y Axes( 1 );

```

### Random Seed

**構文:** obj &lt;&lt; Random Seed( number )

**説明:** 点をランダムにずらす場合のシード値を設定する。

**JMP追加されたバージョン:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = dt << Graph Builder(
	Variables( X( :Sex ), Y( :Height ) ),
	Elements( Points( X, Y, Jitter( "Random Uniform" ) ) )
);
Wait( 1 );
gb << Random Seed( 123456 );

```

### Relative Sizes

**構文:** Relative Sizes(axis, matrix of relative size values)

**説明:** 連なった軸に割り当てられるスペースの割合を指定する。

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Graph Builder(
	Size( 435, 352 ),
	Show Control Panel( 0 ),
	Variables( X( :weight ), Y( :height ), Y( :sex ) ),
	Relative Sizes( "Y", [4 1] ),
	Elements( Position( 1, 1 ), Points( X, Y ) ),
	Elements( Position( 1, 2 ), Points( X, Y ) )
);

```

### Remove Element

**構文:** obj &lt;&lt; Remove Element( xposition, yposition, i )

**説明:** 指定したXおよびYポジションのグラフ要素を削除する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
Wait( 0.5 );
gb << Remove Element( 1, 1, 2 );

```

### Remove Variable

**構文:** obj &lt;&lt; Remove Variable( index | {column, Role(role), Position(p=1), Inner Position(i=1)} )

**説明:** グラフビルダーのモデルから、番号、または列名、役割、位置で指定された変数を削除する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
Wait( 0.5 );
gb << Add Variable( {:age, Role( "Wrap" )} );
Wait( 0.5 );
gb << Remove Variable( 3 );

```

### Replicate Linked Page Axes

**構文:** obj &lt;&lt; Replicate Linked Page Axes( state=0|1 )

**説明:** グリッド内でリンクされているページの軸を、グラフごとに1つ1つ表示するか、グラフの行または列ごとにまとめて表示するかを指定する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = dt << Graph Builder(
	Size( 470, 552 ),
	Variables( X( :height ), Y( :weight ), Page( :age ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Link Page Axes( "X and Y" );
gb << Replicate Linked Page Axes( 1 );

```

### Sampling

**構文:** obj &lt;&lt; Sampling( number )

**説明:** 指定された抽出率またはサイズを使用して、ランダムにデータのサブセットを選択する。データが大きく、グラフを試しに作成してみる場合に有用。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Sampling( 20 );

```

### Set Alpha Level

**構文:** obj &lt;&lt; Set Alpha Level( 0.10|0.05|0.01|Other... )

**説明:** 信頼曲線の有意水準を変更する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Set Alpha Level( 0.10 );

```

### Set α Level

**構文:** obj &lt;&lt; Set α Level( 0.10|0.05|0.01|Other... )

**説明:** 信頼曲線の有意水準を変更する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Set Alpha Level( 0.10 );

```

### Show Control Panel

**構文:** obj &lt;&lt; Show Control Panel( state=0|1 )

**説明:** 設定パネルの表示/非表示を切り替える。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Show Control Panel( 1 );

```

### Show Excluded Rows

**構文:** obj &lt;&lt; Show Excluded Rows( state=0|1 )

**説明:** プロット上で除外された行の表示/非表示を切り替える。このオプションを選択すると、除外された行は管理限界外の数には含まれるが、数値計算からは除外される。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
dt << Select Rows( 1 :: 5 );
dt << Exclude();
gb << Show Excluded Rows( 1 );

```

### Show Footer

**構文:** obj &lt;&lt; Show Footer( state=0|1 )

**説明:** フッタテキストの表示/非表示を切り替える。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Show Footer( 0 );

```

### Show Legend

**構文:** obj &lt;&lt; Show Legend( state=0|1 )

**説明:** グラフの右側にある凡例の表示/非表示を切り替える。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Show Legend( 1 );

```

### Show Subtitle

**構文:** obj &lt;&lt; Show Subtitle( state=0|1 )

**説明:** グラフのサブタイトルを表示または非表示にする。

**JMP追加されたバージョン:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Show Subtitle( 1 );

```

### Show Title

**構文:** obj &lt;&lt; Show Title( state=0|1 )

**説明:** グラフのタイトルを表示または非表示にする。 デフォルトではオン。

**JMP追加されたバージョン:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Show Title( 0 );

```

### Show X Axis

**構文:** obj &lt;&lt; Show X Axis( state=0|1 )

**説明:** X軸の表示/非表示を切り替える。 デフォルトではオン。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Show X Axis( 0 );

```

### Show X Axis Title

**構文:** obj &lt;&lt; Show X Axis Title( state=0|1 )

**説明:** X軸のタイトルの表示/非表示を切り替える。 デフォルトではオン。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Show X Axis Title( 0 );

```

### Show Y Axis

**構文:** obj &lt;&lt; Show Y Axis( state=0|1 )

**説明:** Y軸の表示/非表示を切り替える。 デフォルトではオン。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Show Y Axis( 0 );

```

### Show Y Axis Title

**構文:** obj &lt;&lt; Show Y Axis Title( state=0|1 )

**説明:** Y軸のタイトルの表示/非表示を切り替える。 デフォルトではオン。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Show Y Axis Title( 0 );

```

### Size

**構文:** obj &lt;&lt; Size( width, height )

**説明:** グラフのサイズを設定する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Size( 808, 586 );

```

### Spacing Borders

**構文:** obj &lt;&lt; Spacing Borders( 0|1=0 )

**説明:** グラフパネルの境界線を設定する。 デフォルトの値は"0"。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Spacing Borders( 1 );

```

### Subtitle Alignment

**構文:** obj &lt;&lt; Subtitle Alignment( "左寄せ"|"中央寄せ"|"右寄せ"|"自動" )

**説明:** グラフのサブタイトルの配置を設定する。

**JMP追加されたバージョン:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Subtitle Alignment( "Left" );

```

### Subtitle Span

**構文:** obj &lt;&lt; Subtitle Span( "全体"|"グラフのコンテンツ" )

**説明:** グラフのサブタイトルの幅を設定する。

**JMP追加されたバージョン:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Subtitle Span( "Graph" );

```

### Summary Statistic

**構文:** Summary Statistic( N|Mean|Min|Max|Sum|% of Total )

**説明:** グラフ内のさまざまな要素で使用されるデフォルトの要約統計量を設定する。棒および折れ線のグラフではデフォルトで平均が使用される。 デフォルトの値は"平均"。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = dt << Graph Builder(
	Variables( X( :Age ), Y( :Height ), Y( :weight, Position( 1 ) ) ),
	Summary Statistic( "Sum" ),
	Elements( Bar( X, Y( 1 ), Y( 2 ), Legend( 2 ) ) )
);

```

### Title Alignment

**構文:** obj &lt;&lt; Title Alignment( "左寄せ"|"中央寄せ"|"右寄せ" )

**説明:** グラフのタイトルの配置を設定する。

**JMP追加されたバージョン:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Title Alignment( "Left" );

```

### Title Fill Color

**構文:** obj &lt;&lt; Title Fill Color( color )

**説明:** グラフのタイトルの背景色を設定する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Title Fill Color( "Cyan" );

```

### Title Frame Color

**構文:** obj &lt;&lt; Title Frame Color( color )

**説明:** グラフのタイトルの枠の色を設定する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Title Frame Color( "Blue" );

```

### Title Span

**構文:** obj &lt;&lt; Title Span( "全体"|"グラフのコンテンツ" )

**説明:** グラフのタイトルの幅を設定する。

**JMP追加されたバージョン:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Title Span( "Graph" );

```

### Title Text Color

**構文:** obj &lt;&lt; Title Text Color( color )

**説明:** グラフのタイトルの文字の色を設定する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Title Text Color( "Red" );

```

### Title Transparency

**構文:** obj &lt;&lt; Title Transparency( fraction=1 )

**説明:** グラフのタイトルの背景の透明度を設定する。 デフォルトの値は"1"。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Title Transparency( .2 );

```

### Title Underline

**構文:** obj &lt;&lt; Title Underline( state=0|1 )

**説明:** グラフのタイトルに下線を引く、または下線を外す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Title Frame Color( "Blue" );
gb << Title Underline( 1 );

```

### Update Element

**構文:** obj &lt;&lt; Update Element( xposition, yposition, i, {options} )

**説明:** 既存の要素のプロパティを変更する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
Wait( 0.5 );
gb << Update Element( 1, 1, 1, {Summary Statistic( "Mean" ), Error Bars( "Range" )} );

```

### Use row colors for levels

**構文:** obj &lt;&lt; Use row colors for levels( state=0|1 )

**説明:** 水準ごとに異なる色が割り当てられている場合、それらを凡例の水準の色に使用する。 デフォルトではオン。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Use row colors for levels( 1 );

```

### Variables

**構文:** Variables( X(column ), Y( column ), &lt;Group X( column )&gt;, &lt;Group Y( column )&gt;, &lt;Shape( column )&gt;, &lt;Color( column )&gt;, &lt;Overlay( column )&gt;, &lt;Freq( column )&gt; )

**説明:** グラフに使用する変数を定義する。

```jsl

dt = Open( "$SAMPLE_DATA/SATByYear.jmp" );
gb = dt << Graph Builder( Variables( Color( :SAT Verbal ), Shape( :State ) ) );

```

### X Group Edge

**構文:** obj &lt;&lt; X Group Edge( "上"|"下" )

**説明:** Xグループのラベルを最上部または最下部に移動する。デフォルトは"Top"。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
Wait( 1 );
gb << X Group Edge( "Bottom" );

```

### Y Group Edge

**構文:** obj &lt;&lt; Y Group Edge( "左"|"右" )

**説明:** Yグループのラベルを左または右に移動する。デフォルトの値は"Right"。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = dt << Graph Builder(
	Variables( X( :Sex ), Y( :Height ), Group Y( :Age ) ),
	Elements( Smoother( X, Y ) )
);
Wait( 1 );
gb << Y Group Edge( "Left" );

```

### Y Group Level Orientation

**構文:** obj &lt;&lt; Y Group Level Orientation( "横"|"縦" )

**説明:** Yのグループ水準ラベルのテキストが横書きか縦書き(回転済み)かを指定する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = dt << Graph Builder(
	Variables( X( :Sex ), Y( :Height ), Group Y( :Age ) ),
	Elements( Smoother( X, Y ) )
);
Wait( 1 );
gb << Y Group Level Orientation( "Horizontal" );

```

### Y Group Title Orientation

**構文:** obj &lt;&lt; Y Group Title Orientation( "横"|"縦" )

**説明:** グループYのタイトルラベルのテキストが横書きか縦書き(回転された状態)かを指定する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = dt << Graph Builder(
	Variables( X( :Sex ), Y( :Height ), Group Y( :Age ) ),
	Elements( Smoother( X, Y ) )
);
Wait( 1 );
gb << Y Group Title Orientation( "Horizontal" );

```

## Graph Builder Elements

### 項目のメッセージ

#### Area

**構文:** obj &lt;&lt; Area

**説明:** 面: 応答をカテゴリごとに要約して表示する。

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Graph Builder( Variables( X( :age ), Y( :weight ) ), Elements( Area( X, Y ) ) );

```

#### Bar

**構文:** obj &lt;&lt; Bar

**説明:** 棒: 応答をカテゴリごとに要約して表示する。

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Graph Builder( Variables( X( :age ), Y( :weight ) ), Elements( Bar( X, Y ) ) );

```

#### Box Plot

**構文:** obj &lt;&lt; Box Plot

**説明:** 箱ひげ図: 変数の分布を四分位点と外れ値に要約して表現する。

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Graph Builder( Variables( X( :age ), Y( :weight ) ), Elements( Box Plot( X, Y ) ) );

```

#### Caption Box

**構文:** obj &lt;&lt; Caption Box

**説明:** キャプションボックス: データの要約統計量の値を表示する。

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Line( X, Y ), Caption Box( X, Y ) )
);

```

#### Contour

**構文:** obj &lt;&lt; Contour

**説明:** 等高線: データの密度(または色分け変数の値の等高線)を表示する。Xがカテゴリカル変数の場合はバイオリンプロットを作成する。

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Graph Builder( Variables( X( :height ), Y( :weight ) ), Elements( Contour( X, Y ) ) );

```

#### Ellipse

**構文:** obj &lt;&lt; Ellipse

**説明:** 楕円: 二変量正規楕円を表示する。

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Graph Builder( Variables( X( :height ), Y( :weight ) ), Elements( Ellipse( X, Y ) ) );

```

#### Formula

**構文:** obj &lt;&lt; Formula

**説明:** 計算式: 列の計算式で定義された関数を表示する。

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Graph Builder(
	Variables( X( :height ), Y( Transform Column( "f", Formula( Sin( :height / 5 ) ) ) ) ),
	Elements( Formula( X, Y ) )
);

```

#### Heatmap

**構文:** obj &lt;&lt; Heatmap

**説明:** ヒートマップ: X変数とY変数のカテゴリの度数を色を使って表示する。

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Graph Builder( Variables( X( :height ), Y( :weight ) ), Elements( Heatmap( X, Y ) ) );

```

#### Histogram

**構文:** obj &lt;&lt; Histogram

**説明:** ヒストグラム: 値の範囲ごとの棒で変数の分布を表示する。

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Graph Builder( Variables( X( :weight ) ), Elements( Histogram( X ) ) );

```

#### Line

**構文:** obj &lt;&lt; Line

**説明:** 折れ線: 応答をカテゴリごとに要約して表示する。

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Graph Builder( Variables( X( :age ), Y( :weight ) ), Elements( Line( X, Y ) ) );

```

#### Line Of Fit

**構文:** obj &lt;&lt; Line Of Fit

**説明:** 回帰直線: 連続尺度のXとYに対し、回帰直線と信頼区間を表示する。カテゴリカルなXの場合は平均をあてはめる。

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Graph Builder( Variables( X( :height ), Y( :weight ) ), Elements( Line of Fit( X, Y ) ) );

```

#### Map Shapes

**構文:** obj &lt;&lt; Map Shapes

**説明:** 地図シェープ: 地図のシェープ変数で定義された領域を、別の変数で色分けして表示する。

```jsl

Open( "$SAMPLE_DATA/SATByYear.jmp" );
Graph Builder( Variables( Color( :SAT Verbal ), Shape( :State ) ), Elements( Map Shapes() ) );

```

#### Mosaic

**構文:** obj &lt;&lt; Mosaic

**説明:** モザイク: X変数とY変数の度数をサイズで表したグラフを表示する。

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Graph Builder( Variables( X( :age ), Y( :sex ) ), Elements( Mosaic( X, Y ) ) );

```

#### Parallel

**構文:** obj &lt;&lt; Parallel

**説明:** パラレル: 多数の変数を、行ごとに線でつないで表示する。

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Graph Builder(
	Variables( X( :height ), X( :weight, Position( 1 ) ), X( :age, Position( 1 ) ) ),
	Elements( Parallel( X( 1 ), X( 2 ), X( 3 ) ) )
);

```

#### Pie

**構文:** obj &lt;&lt; Pie

**説明:** 円: 全体に占める割合を表示する。

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Graph Builder( Variables( X( :age ) ), Elements( Pie( X ) ) );

```

#### Points

**構文:** obj &lt;&lt; Points

**説明:** 点: データ値の散布図を表示する。

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Graph Builder( Variables( X( :height ), Y( :weight ) ), Elements( Points( X, Y ) ) );

```

#### Smoother

**構文:** obj &lt;&lt; Smoother

**説明:** 平滑線: データに沿った滑らかな曲線を表示する。連続量のX変数とY変数の関係を調べる場合に最適。

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Graph Builder( Variables( X( :height ), Y( :weight ) ), Elements( Smoother( X, Y ) ) );

```

#### Treemap

**構文:** obj &lt;&lt; Treemap

**説明:** ツリーマップ: カテゴリごとに応答を要約して表示する。カテゴリが多数のときに適している。

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Graph Builder( Variables( X( :age ), Y( :weight ) ), Elements( Treemap( X, Y ) ) );

```

