# Fit Curve



## ANOM for Estimates

### 項目のメッセージ

#### Point Options

**構文:** obj << ANOM( 1, Point Options( "Show Needles"|"Show Connected Points"|"Show Only Points" ) );

scrobj << Point Options( "Show Needles"|"Show Connected Points"|"Show Only Points" )

**説明:** グラフにおける点のスタイルを指定する。垂線、接続線、点のみから選択できる。デフォルトでは、全体平均の水平線からの垂線でグラフが描かれる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM( 1, Point Options( "Show Only Points" ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means"] << Get Scriptable Object;
scrobj << Point Options( "Show Connected Points" );

```

#### Set Alpha Level

**構文:** obj << ANOM( 1, Set Alpha Level( alpha ) );

scrobj << Set Alpha Level( alpha )

**説明:** 決定限界の計算に使う有意水準を変更する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = Oneway( Y( :y ), X( :Drug ) );
obj << ANOM( 1, Set Alpha Level( 0.1 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means"] << Get Scriptable Object;
scrobj << Set Alpha Level( 0.05 );

```

#### Show Center Line

**構文:** obj << ANOM( 1, Show Center Line( state=0|1 ) );

scrobj << Show Center Line( state=0|1 )

**説明:** 平均分析(ANOM)のグラフにおいて、中心線（全体平均）の表示/非表示を切り替える。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM( 1, Show Center Line( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means"] << Get Scriptable Object;
scrobj << Show Center Line( 1 );

```

#### Show Decision Limit Shading

**構文:** obj << ANOM( 1, Show Decision Limit Shading( state=0|1 ) );

scrobj << Show Decision Limit Shading( state=0|1 )

**説明:** 平均分析(ANOM)のグラフにおいて、決定限界の領域に対する陰影の表示/非表示を切り替える。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM( 1, Show Decision Limit Shading( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means"] << Get Scriptable Object;
scrobj << Show Decision Limit Shading( 1 );

```

#### Show Decision Limits

**構文:** obj << ANOM( 1, Show Decision Limits( state=0|1 ) );

scrobj << Show Decision Limits( state=0|1 )

**説明:** 平均分析(ANOM)のグラフにおいて、決定限界を示す線の表示/非表示を切り替える。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM( 1, Show Decision Limits( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means"] << Get Scriptable Object;
scrobj << Show Decision Limits( 1 );

```

#### Show Summary Report

**構文:** obj << ANOM( 1, Show Summary Report( state=0|1 ) );

scrobj << Show Summary Report( state=0|1 )

**説明:** グループ平均と決定限界を含むレポートの表示/非表示を切り替える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM( 1, Show Summary Report( 1 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means"] << Get Scriptable Object;
scrobj << Show Summary Report( 0 );

```

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
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ), By( _bycol ) );
obj << Fit Logistic 4P;
obj[1] << Copy ByGroup Script;

```

### Copy Script

**構文:** obj << Copy Script

**説明:** この分析を再現するJSLスクリプトを生成し、クリップボードにコピーする。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;
obj << Copy Script;

```

### Data Table Window

**構文:** obj << Data Table Window

**説明:** この分析に使用したデータテーブルのウィンドウを手前に表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;
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
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ), By( _bycol ) );
obj << Fit Logistic 4P;
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
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

### Get Data Table

**構文:** obj << Get Data Table

**説明:** データテーブルへの参照を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;
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
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**構文:** obj << Get Script With Data Table

**説明:** この分析を再現するスクリプト(JSL)をデータテーブルへの参照も含めて生成し、それを式として戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**構文:** obj << Get Timing

**説明:** プラットフォームの起動にかかった時間を取得する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;
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
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**構文:** obj << Redo ByGroup Analysis

**説明:** 同じ分析をやり直し新しいウィンドウに表示する。データが変更されていると分析結果は異なる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ), By( _bycol ) );
obj << Fit Logistic 4P;
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**構文:** obj << Relaunch Analysis

**説明:** プラットフォームの起動ウィンドウを開き、レポートを作成した時の設定を表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**構文:** obj << Relaunch ByGroup

**説明:** プラットフォームの起動ウィンドウを開き、レポートを作成した時の設定を表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ), By( _bycol ) );
obj << Fit Logistic 4P;
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
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**構文:** obj << Report View( "完全"|"要約" )

**説明:** レポートビューは、プラットフォームレポートの詳細を表示するかどうかを決定する。Fullはすべての詳細を表示し、Summaryはプラットフォームにより限定されたものだけを表示する。 動作をカスタマイズするため、各ディスプレイボックスは<<Set Summary Behaviorメッセージをサポートする。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**構文:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**説明:** 分析を再現するためのJSLスクリプトを作成し、データテーブルにテーブルプロパティとして保存する。スクリプトの名前を指定できる。Append Suffixオプションは、スクリプト名に数字の接尾辞を追加する。これにより、同名のスクリプトが存在していても区別できる。Promptオプションは、ユーザにスクリプト名の指定を促す。Replaceオプションは、同名の既存のスクリプトを置き換える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ), By( _bycol ) );
obj << Fit Logistic 4P;
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**構文:** obj << Save ByGroup Script to Journal

**説明:** この分析を再現するJSLスクリプトを生成し、ジャーナルにそのスクリプトのボタンを追加する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ), By( _bycol ) );
obj << Fit Logistic 4P;
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**構文:** obj << Save ByGroup Script to Script Window

**説明:** この分析を再現するJSLスクリプトを生成し、現在のスクリプトウィンドウに表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ), By( _bycol ) );
obj << Fit Logistic 4P;
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**構文:** obj << Save Script for All Objects

**説明:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**構文:** obj << Save Script for All Objects To Data Table( <name> )

**説明:** すべてのレポートオブジェクトを再現するスクリプトを現在のデータテーブルに保存する。このオプションは、ウィンドウ内にレポートが複数ある場合に便利。作成されるスクリプトの名前は、引用符で囲んで指定しない限り、1つ目のプラットフォーム名となる。

**例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ), By( _bycol ) );
obj << Fit Logistic 4P;
obj[1] << Save Script for All Objects To Data Table;

```

**例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ), By( _bycol ) );
obj << Fit Logistic 4P;
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**構文:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**説明:** この分析を再現するJSLスクリプトを生成し、データテーブルのテーブルプロパティとして保存する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**構文:** obj << Save Script to Journal

**説明:** この分析を再現するJSLスクリプトを生成し、ジャーナルにそのスクリプトのボタンを追加する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;
obj << Save Script to Journal;

```

### Save Script to Report

**構文:** obj << Save Script to Report

**説明:** この分析を再現するJSLスクリプトを生成し、レポートウィンドウに表示する。分析手順の記録を結果と一緒に残せる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;
obj << Save Script to Report;

```

### Save Script to Script Window

**構文:** obj << Save Script to Script Window

**説明:** この分析を再現するJSLスクリプトを生成し、現在のスクリプトウィンドウに表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;
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
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;
obj << Title( "My Platform" );

```

### Top Report

**構文:** obj << Top Report

**説明:** レポート内のルートノードへの参照を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;
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

**構文:** obj = Fit Curve(...Window View( "Visible"|"Invisible"|"Private" )...)

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

**構文:** obj = Fit Curve(...<By( column(s) )>...)

**説明:** 指定された列の各水準に対して、個別に分析を実行する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ), By( _bycol ) );
obj << Fit Logistic 4P;

```

### Freq

**構文:** obj = Fit Curve(...<Freq( column )>...)

**説明:** 分析の際に各行の度数として用いる値の列を指定する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
dt << New Column( "_freqcol", Numeric, Continuous, Formula( Random Integer( 1, 5 ) ) );
obj = dt << Fit Curve(
	Y( :Toxicity ),
	X( :log Conc ),
	Group( :formulation ),
	Freq( _freqcol )
);
obj << Fit Logistic 4P;

```

### Group

**構文:** obj = Fit Curve(...<Group( column )>...)

**説明:** グループ変数を指定する。グループ変数の水準ごとに別のパラメータを持つモデルがあてはめられる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;

```

### Regressor

**構文:** obj = Fit Curve(...<Regressor( column )>...)

**説明:** 予測変数(説明変数)を指定する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;

```

### Response

**構文:** obj = Fit Curve(...Response( column(s) )...)

**説明:** 応答変数を指定する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;

```

### Supplementary

**構文:** obj = Fit Curve(...<Supplementary( column(s) )>...)

**説明:** 追加変数を指定する。追加変数は、モデルの推定には使用されないため、追加変数を含めても推定結果には影響しない。追加変数は、データの解釈やその後の分析に役立つ。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Fit Curve( Y( :height ), X( :weight ), Z( :sex ) );
obj << Fit Cubic;

```

### Weight

**構文:** obj = Fit Curve(...<Weight( column )>...)

**説明:** 分析の際に各行の重みとして用いる値の列を指定する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
dt << New Column( "_weightcol", Numeric, Continuous, Formula( Random Beta( 1, 1 ) ) );
obj = dt << Fit Curve(
	Y( :Toxicity ),
	X( :log Conc ),
	Group( :formulation ),
	Weight( _weightcol )
);
obj << Fit Logistic 4P;

```

### X

**構文:** obj = Fit Curve(...<X( column )>...)

**説明:** 予測変数(説明変数)を指定する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;

```

### Y

**構文:** obj = Fit Curve(...Y( column(s) )...)

**説明:** 応答変数を指定する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;

```

### Z

**構文:** obj = Fit Curve(...<Z( column(s) )>...)

**説明:** 追加変数を指定する。追加変数は、モデルの推定には使用されないため、追加変数を含めても推定結果には影響しない。追加変数は、データの解釈やその後の分析に役立つ。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Fit Curve( Y( :height ), X( :weight ), Z( :sex ) );
obj << Fit Cubic;

```

## 関連するコンストラクター

### Fit Curve

**構文:** Fit Curve( Y( column ), X( column ) )

**説明:** JMPが提供する非線形の各種モデルをあてはめる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;

```

## 項目のメッセージ

### F1 Analysis

**構文:** obj << F1 Analysis( Alpha( number ), Reference Level( level ), Bootstrap Samples( number ), Random Seed( number ))

**説明:** 溶出曲線を比較するための指標としてF1を使って、溶出曲線を分析する。F1は、各時点における標準製剤の曲線と試験製剤の曲線の差(%)を表す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dissolution DoE.jmp" );
obj = Fit Curve(
	Data Format( Row ),
	Y( :Dissolution 60, :Dissolution 120, :Dissolution 240, Dissolution 360 ),
	Group( :Batch ),
	Z( :Polymer A, :Polymer B, :Total Polymer, :Compression Force )
);
obj << F1 Analysis(
	Alpha( 0.05 ),
	Reference Level( "R01" ),
	Bootstrap Samples( 2000 ),
	Random Seed( 1234 )
);

```

### F2 Analysis

**構文:** obj << F2 Analysis( Alpha( number ), Reference Level( level ), Bootstrap Samples( number ), Random Seed( number ))

**説明:** 溶出曲線を比較するための指標としてF2を使って溶出曲線を分析する。F2は、標準製剤の曲線と試験製剤の曲線の間の溶出率の類似性(%)を表す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dissolution DoE.jmp" );
obj = Fit Curve(
	Data Format( Row ),
	Y( :Dissolution 60, :Dissolution 120, :Dissolution 240, Dissolution 360 ),
	Group( :Batch ),
	Z( :Polymer A, :Polymer B, :Total Polymer, :Compression Force )
);
obj << F2 Analysis(
	Alpha( 0.1 ),
	Reference Level( "R01" ),
	Bootstrap Samples( 3000 ),
	Random Seed( 4321 )
);

```

### Fit Antoine Equation

**構文:** obj << Fit Antoine Equation

**説明:** Antoineモデルをデータにあてはめる。このモデルは、蒸気圧を温度の関数としてモデル化するのによく使用される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Algae Mitscherlich.jmp" );
obj = dt << Fit Curve( Y( :Algae Density ), X( :Days ), Group( :Treatment ) );
obj << Fit Antoine Equation;

```

### Fit Asymmetric Gaussian Peak

**構文:** obj << Fit Asymmetric Gaussian Peak

### Fit Biexponential 4P

**構文:** obj << Fit Biexponential 4P

**説明:** 4パラメータの双指数モデルをデータにあてはめる。

```jsl

Names Default To Here( 1 );
Random Reset( 7483 );
xd = [.25, .5, .75, 1, 1.5, 2, 3, 4, 6, 12, 24];
yd = J( 11, 1, . );
For( i = 1, i <= 11, i++,
	yd[i] = 170 * Exp( -.15 * xd[i] ) + 80 * Exp( -1.4 * xd[i] ) + .1 * Random Normal()
);
dt = As Table( xd || yd );
Column( dt, 1 ) << set name( "time" );
Column( dt, 2 ) << set name( "concentration" );
obj = dt << Fit Curve( Y( :concentration ), X( :time ) );
obj << Fit Biexponential 4P;

```

### Fit Biexponential 5P

**構文:** obj << Fit Biexponential 5P

**説明:** 5パラメータの双指数モデルをデータにあてはめる。

```jsl

Names Default To Here( 1 );
Random Reset( 7483 );
xd = [.25, .5, .75, 1, 1.5, 2, 3, 4, 6, 12, 24];
yd = J( 11, 1, . );
For( i = 1, i <= 11, i++,
	yd[i] = 170 * Exp( -.15 * xd[i] ) + 80 * Exp( -1.4 * xd[i] ) + .1 * Random Normal()
);
dt = As Table( xd || yd );
Column( dt, 1 ) << set name( "time" );
Column( dt, 2 ) << set name( "concentration" );
obj = dt << Fit Curve( Y( :concentration ), X( :time ) );
obj << Fit Biexponential 5P;

```

### Fit Cell Growth 4P

**構文:** obj << Fit Cell Growth 4P

**説明:** 4つのパラメータからなる成長・減衰モデルをデータにあてはめる。

```jsl

Names Default To Here( 1 );
Random Reset( 7483 );
xd = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
yd = J( 12, 1, . );
For( i = 1, i <= 12, i++,
	yd[i] = 10 * Normal Density( (xd[i] - 6) / 2 ) + Random Normal() * .1
);
dt = As Table( xd || yd );
Column( dt, 1 ) << set name( "x" );
Column( dt, 2 ) << set name( "y" );
obj = dt << Fit Curve( Y( :Y ), X( :X ) );
obj << Fit Cell Growth 4P;

```

### Fit Cubic

**構文:** obj << Fit Cubic

**説明:** 3次多項式をデータにあてはめる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Fit Curve( Y( :height ), X( :weight ) );
obj << Fit Cubic;

```

### Fit ExGaussian Peak

**構文:** obj << Fit ExGaussian Peak

**説明:** 指数修正Gaussピークモデル(exGaussモデル)をデータにあてはめる。

```jsl

Names Default To Here( 1 );
Random Reset( 7483 );
xd = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
yd = J( 12, 1, . );
For( i = 1, i <= 12, i++,
	yd[i] = 10 * Normal Density( (xd[i] - 6) / 2 ) + Random Normal() * .1
);
dt = As Table( xd || yd );
Column( dt, 1 ) << set name( "x" );
Column( dt, 2 ) << set name( "y" );
obj = dt << Fit Curve( Y( :Y ), X( :X ) );
obj << Fit ExGaussian Peak;

```

### Fit Exponential 2P

**構文:** obj << Fit Exponential 2P

**説明:** 2パラメータの指数モデルを、データにあてはめる。このモデルの曲線の下限は、0に固定されている。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Fit Curve( Y( :pop ), X( :year ) );
obj << Fit Exponential 2P;

```

### Fit Exponential 3P

**構文:** obj << Fit Exponential 3P

**説明:** 3パラメータの指数モデルを、データにあてはめる。このモデルの曲線の下限は、データから推定される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Fit Curve( Y( :pop ), X( :year ) );
obj << Fit Exponential 3P;

```

### Fit First Order Rate

**構文:** obj << Fit First Order Rate

**説明:** 1次反応速度モデルをデータにあてはめる。このモデルは、化学反応をモデル化するのに便利。Xの値が負でない場合にのみ使用可能。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Chemical Kinetics.jmp" );
obj = dt << Fit Curve( Y( :"Velocity (y)"n ), X( :Concentration ) );
obj << Fit First Order Rate;

```

### Fit First Order with Equilibrium

**構文:** obj << Fit First Order with Equilibrium

**説明:** 可逆1次反応速度モデルをデータにあてはめる。このオプションは、化学反応をモデル化するのに便利。Xの値が負でない場合にのみ使用可能。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Chemical Kinetics.jmp" );
obj = dt << Fit Curve( Y( :"Velocity (y)"n ), X( :Concentration ) );
obj << Fit First Order with Equilibrium;

```

### Fit First Order with Limits

**構文:** obj << Fit First Order with Limits

**説明:** 下限を持つ1次反応速度モデルをデータにあてはめる。このオプションは、化学反応をモデル化するのに便利。Xの値が負でない場合にのみ使用可能。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Chemical Kinetics.jmp" );
obj = dt << Fit Curve( Y( :"Velocity (y)"n ), X( :Concentration ) );
obj << Fit First Order with Limits;

```

### Fit Gaussian Peak

**構文:** obj << Fit Gaussian Peak

**説明:** Gauss型ピークモデルをデータにあてはめる。

```jsl

Names Default To Here( 1 );
Random Reset( 7483 );
xd = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
yd = J( 12, 1, . );
For( i = 1, i <= 12, i++,
	yd[i] = 10 * Normal Density( (xd[i] - 6) / 2 ) + Random Normal() * .1
);
dt = As Table( xd || yd );
Column( dt, 1 ) << set name( "x" );
Column( dt, 2 ) << set name( "y" );
obj = dt << Fit Curve( Y( :Y ), X( :X ) );
obj << Fit Gaussian Peak;

```

### Fit Gompertz 3P

**構文:** obj << Fit Gompertz 3P

**説明:** 3パラメータのGompertz曲線をデータにあてはめる。下限は0に固定されているが、上限はデータから推定される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
dat = dt << get as matrix;
maxy = Max( dat[0, 3] );
newy = dat[0, 3] / maxy;
form = Column( 3 ) << get values;
Close( dt, no save );
newtab = As Table( dat[0, 2] || newy );
Column( 1 ) << set name( "log conc" );
Column( 2 ) << set name( "toxicity" );
New Column( "formulation", character, nominal );
Column( 3 ) << set values( form );
obj = Fit Curve( Y( :toxicity ), X( :log conc ), Group( :formulation ) );
obj << Fit Gompertz 3P;

```

### Fit Gompertz 4P

**構文:** obj << Fit Gompertz 4P

**説明:** 4パラメータのGompertz曲線をデータにあてはめる。下限、上限ともにデータから推定される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Gompertz 4P;

```

### Fit Higuchi

**構文:** obj << Fit Higuchi

**説明:** Higuchiモデルをデータにあてはめる。これは、溶出曲線を比較するためのパラメトリックな手法。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dissolution DoE.jmp" );
obj = dt << Fit Curve(
	Data Format( Row ),
	Y( :Dissolution 60, :Dissolution 120, :Dissolution 240, :Dissolution 360 ),
	Group( :Batch )
);
obj << Fit Higuchi;

```

### Fit Higuchi with Burst

**構文:** obj << Fit Higuchi with Burst

**説明:** バースト成分を含むHiguchiモデルをデータにあてはめる。これは、溶出曲線を比較するためのパラメトリックな手法。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dissolution DoE.jmp" );
obj = dt << Fit Curve(
	Data Format( Row ),
	Y( :Dissolution 60, :Dissolution 120, :Dissolution 240, :Dissolution 360 ),
	Group( :Batch )
);
obj << Fit Higuchi with Burst;

```

### Fit Higuchi with Lag

**構文:** obj << Fit Higuchi with Lag

**説明:** ラグ成分を含むHiguchiモデルをデータにあてはめる。これは、溶出曲線を比較するためのパラメトリックな手法。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dissolution DoE.jmp" );
obj = dt << Fit Curve(
	Data Format( Row ),
	Y( :Dissolution 60, :Dissolution 120, :Dissolution 240, :Dissolution 360 ),
	Group( :Batch )
);
obj << Fit Higuchi with Lag;

```

### Fit Hixson-Crowell

**構文:** obj << "Fit Hixson-Crowell"n

**説明:** Hixson-Crowellモデルをデータにあてはめる。これは、溶出曲線を比較するためのパラメトリックな手法。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dissolution DoE.jmp" );
obj = dt << Fit Curve(
	Data Format( Row ),
	Y( :Dissolution 60, :Dissolution 120, :Dissolution 240, :Dissolution 360 ),
	Group( :Batch )
);
obj << "Fit Hixson-Crowell"n;

```

### Fit Hixson-Crowell with Lag

**構文:** obj << "Fit Hixson-Crowell with Lag"n

**説明:** ラグ成分を含むHixson-Crowellモデルをデータにあてはめる。これは、溶出曲線を比較するためのパラメトリックな手法。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dissolution DoE.jmp" );
obj = dt << Fit Curve(
	Data Format( Row ),
	Y( :Dissolution 60, :Dissolution 120, :Dissolution 240, :Dissolution 360 ),
	Group( :Batch )
);
obj << "Fit Hixson-Crowell with Lag"n;

```

### Fit Hybrid Exponential

**構文:** obj << Fit Hybrid Exponential

**説明:** ハイブリッド指数モデルをデータにあてはめる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Negative Exponential.jmp" );
obj = dt << Fit Curve( Y( :Y ), X( :X ) );
obj << Fit Hybrid Exponential;

```

### Fit Inverse Michaelis-Menten

**構文:** obj << Fit Inverse Michaelis Menten; 

obj << "Fit Inverse Michaelis-Menten"n

**説明:** 逆Michaelis-Menten酵素反応速度モデルをデータにあてはめる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Chemical Kinetics.jmp" );
obj = dt << Fit Curve( Y( :"Velocity (y)"n ), X( :Concentration ) );
obj << Fit Inverse Michaelis Menten;

```

### Fit Korsmeyer-Peppas

**構文:** obj << "Fit Korsmeyer-Peppas"n

**説明:** Korsmeyer-Peppasモデルをデータにあてはめる。これは、溶出曲線を比較するためのパラメトリックな手法。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dissolution DoE.jmp" );
obj = dt << Fit Curve(
	Data Format( Row ),
	Y( :Dissolution 60, :Dissolution 120, :Dissolution 240, :Dissolution 360 ),
	Group( :Batch )
);
obj << "Fit Korsmeyer-Peppas"n;

```

### Fit Korsmeyer-Peppas with Burst

**構文:** obj << "Fit Korsmeyer-Peppas with Burst"n

**説明:** バースト成分を含むKorsmeyer-Peppasモデルをデータにあてはめる。これは、溶出曲線を比較するためのパラメトリックな手法。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dissolution DoE.jmp" );
obj = dt << Fit Curve(
	Data Format( Row ),
	Y( :Dissolution 60, :Dissolution 120, :Dissolution 240, :Dissolution 360 ),
	Group( :Batch )
);
obj << "Fit Korsmeyer-Peppas with Burst"n;

```

### Fit Korsmeyer-Peppas with Lag

**構文:** obj << "Fit Korsmeyer-Peppas with Lag"n

**説明:** ラグ成分を含むKorsmeyer-Peppasモデルをデータにあてはめる。これは、溶出曲線を比較するためのパラメトリックな手法。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dissolution DoE.jmp" );
obj = dt << Fit Curve(
	Data Format( Row ),
	Y( :Dissolution 60, :Dissolution 120, :Dissolution 240, :Dissolution 360 ),
	Group( :Batch )
);
obj << "Fit Korsmeyer-Peppas with Lag"n;

```

### Fit Linear

**構文:** obj << Fit Linear

**説明:** 最小2乗法によって線形回帰モデルをあてはめる。回帰直線がプロット上に表示され、推定結果のレポートが表示される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Fit Curve( Y( :height ), X( :weight ) );
obj << Fit Linear;

```

### Fit Logistic 2P

**構文:** obj << Fit Logistic 2P

**説明:** 2パラメータのロジスティック曲線をデータにあてはめる。この曲線の下限は0で、上限は1に固定されている。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
dat = dt << get as matrix;
miny = Min( dat[0, 3] );
maxy = Max( dat[0, 3] );
newy = (dat[0, 3] - miny) / (maxy - miny);
form = Column( 3 ) << get values;
Close( dt, no save );
newtab = As Table( dat[0, 2] || newy );
Column( 1 ) << set name( "log conc" );
Column( 2 ) << set name( "toxicity" );
New Column( "formulation", character, nominal );
Column( 3 ) << set values( form );
obj = Fit Curve( Y( :toxicity ), X( :log conc ), Group( :formulation ) );
obj << Fit Logistic 2P;

```

### Fit Logistic 3P

**構文:** obj << Fit Logistic 3P

**説明:** 3パラメータのロジスティック曲線をデータにあてはめる。この曲線の下限は0に固定されているが、上限はデータから推定される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
dat = dt << get as matrix;
maxy = Max( dat[0, 3] );
newy = dat[0, 3] / maxy;
form = Column( 3 ) << get values;
Close( dt, no save );
newtab = As Table( dat[0, 2] || newy );
Column( 1 ) << set name( "log conc" );
Column( 2 ) << set name( "toxicity" );
New Column( "formulation", character, nominal );
Column( 3 ) << set values( form );
obj = Fit Curve( Y( :toxicity ), X( :log conc ), Group( :formulation ) );
obj << Fit Logistic 3P;

```

### Fit Logistic 4P

**構文:** obj << Fit Logistic 4P

**説明:** 4パラメータのロジスティック曲線をデータにあてはめる。このモデルでは、曲線の下限および上限の両方が、データから推定される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;

```

### Fit Logistic 4P Hill

**構文:** obj << Fit Logistic 4P Hill

**説明:** 4パラメータのロジスティック曲線をデータにあてはめる。このモデルでは、曲線の下限および上限の両方が、データから推定される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P Hill;

```

### Fit Logistic 4P Rodbard

**構文:** obj << Fit Logistic 4P Rodbard

**説明:** 4パラメータのロジスティック曲線をデータにあてはめる。このモデルでは、曲線の下限および上限の両方が、データから推定される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :Concentration ), Group( :formulation ) );
obj << Fit Logistic 4P Rodbard;

```

### Fit Logistic 5P

**構文:** obj << Fit Logistic 5P

**説明:** 5パラメータのロジスティック曲線をデータにあてはめる。このモデルでは、曲線の下限および上限の両方が、データから推定される。また、他のロジスティック曲線と違い、非対称になっている。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 5P;

```

### Fit Lorentzian Peak

**構文:** obj << Fit Lorentzian Peak

**説明:** Lorentz型ピークモデルをデータにあてはめる。

```jsl

Names Default To Here( 1 );
Random Reset( 7483 );
xd = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
yd = J( 12, 1, . );
For( i = 1, i <= 12, i++,
	yd[i] = 10 * (5 / ((xd[i] - 6) ^ 2 + 25)) + Random Normal() * .1
);
dt = As Table( xd || yd );
Column( dt, 1 ) << set name( "x" );
Column( dt, 2 ) << set name( "y" );
obj = dt << Fit Curve( Y( :Y ), X( :X ) );
obj << Fit Lorentzian Peak;

```

### Fit Mechanistic Growth

**構文:** obj << Fit Mechanistic Growth

**説明:** 単分子成長モデルをデータにあてはめる。このモデルは、3パラメータ指数モデルと等価だが、パラメータ表現が異なる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Corn.jmp" );
obj = dt << Fit Curve( Y( :yield ), X( :nitrate ) );
obj << Fit Mechanistic Growth;

```

### Fit Michaelis-Menten

**構文:** obj << Fit Michaelis Menten; 

obj << "Fit Michaelis-Menten"n

**説明:** Michaelis-Menten酵素反応速度モデルをデータにあてはめる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Chemical Kinetics.jmp" );
obj = dt << Fit Curve( Y( :"Velocity (y)"n ), X( :Concentration ) );
obj << Fit Michaelis Menten;

```

### Fit One Compartment Oral Dose

**構文:** obj << Fit One Compartment Oral Dose

**説明:** 1コンパートメントの経口投与モデルをデータにあてはめる。このモデルは、経口投与した後の、体内の薬剤濃度をモデル化している。

```jsl

Names Default To Here( 1 );
dat = [0 0, .27 1.72, .52 7.91, 1 8.31, 1.92 8.33, 3.5 6.85, 5.02 6.08, 7.03 5.4, 9 4.55, 12
3.01, 24.3 .9];
dt = As Table( dat );
Column( dt, 1 ) << set name( "time" );
Column( dt, 2 ) << set name( "concentration" );
obj = dt << Fit Curve( Y( :concentration ), X( :time ) );
obj << Fit One Compartment Oral Dose;

```

### Fit Pearson VII Peak

**構文:** obj << Fit Pearson VII Peak

### Fit Power Model

**構文:** obj << Fit Power Model

**説明:** べき乗モデルをデータにあてはめる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Fit Curve( Y( :height ), X( :weight ) );
obj << Fit Power Model;

```

### Fit Probit 2P

**構文:** obj << Fit Probit 2P

**説明:** 2パラメータのプロビット曲線をデータにあてはめる。この曲線の下限は0で、上限は1に固定されている。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
dat = dt << get as matrix;
miny = Min( dat[0, 3] );
maxy = Max( dat[0, 3] );
newy = (dat[0, 3] - miny) / (maxy - miny);
form = Column( 3 ) << get values;
Close( dt, no save );
newtab = As Table( dat[0, 2] || newy );
Column( 1 ) << set name( "log conc" );
Column( 2 ) << set name( "toxicity" );
New Column( "formulation", character, nominal );
Column( 3 ) << set values( form );
obj = Fit Curve( Y( :toxicity ), X( :log conc ), Group( :formulation ) );
obj << Fit Probit 2P;

```

### Fit Probit 3P

**構文:** obj << Fit Probit 3P

**説明:** 3パラメータのプロビット曲線をデータにあてはめる。この曲線の下限は0に固定されているが、上限はデータから推定される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
dat = dt << get as matrix;
maxy = Max( dat[0, 3] );
newy = dat[0, 3] / maxy;
form = Column( 3 ) << get values;
Close( dt, no save );
newtab = As Table( dat[0, 2] || newy );
Column( 1 ) << set name( "log conc" );
Column( 2 ) << set name( "toxicity" );
New Column( "formulation", character, nominal );
Column( 3 ) << set values( form );
obj = Fit Curve( Y( :toxicity ), X( :log conc ), Group( :formulation ) );
obj << Fit Probit 3P;

```

### Fit Probit 4P

**構文:** obj << Fit Probit 4P

**説明:** 4パラメータのプロビット曲線をデータにあてはめる。このモデルでは、曲線の下限および上限の両方が、データから推定される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = Fit Curve( Y( :toxicity ), X( :log conc ), Group( :formulation ) );
obj << Fit Probit 4P;

```

### Fit Pseudo-Voigt

**構文:** obj << Fit Pseudo-Voigt

### Fit Quadratic

**構文:** obj << Fit Quadratic

**説明:** 2次多項式をデータにあてはめる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Fit Curve( Y( :height ), X( :weight ) );
obj << Fit Quadratic;

```

### Fit Quartic

**構文:** obj << Fit Quartic

**説明:** 4次多項式をデータにあてはめる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Fit Curve( Y( :height ), X( :weight ) );
obj << Fit Quartic;

```

### Fit Quintic

**構文:** obj << Fit Quintic

**説明:** 5次多項式をデータにあてはめる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Fit Curve( Y( :height ), X( :weight ) );
obj << Fit Quintic;

```

### Fit Second Order

**構文:** obj << Fit Second Order

**説明:** 2次反応速度モデルをデータにあてはめる。このオプションは、化学反応をモデル化するのに便利。Xの値が負でない場合にのみ使用可能。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Chemical Kinetics.jmp" );
obj = dt << Fit Curve( Y( :"Velocity (y)"n ), X( :Concentration ) );
obj << Fit Second Order;

```

### Fit Second Order with Two Components

**構文:** obj << Fit Second Order with Two Components

**説明:** 2コンポーネントの2次反応速度モデルをデータにあてはめる。このオプションは、化学反応をモデル化するのに便利。Xの値が負でない場合にのみ使用可能。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Chemical Kinetics.jmp" );
obj = dt << Fit Curve( Y( :"Velocity (y)"n ), X( :Concentration ) );
obj << Fit Second Order with Two Components;

```

### Fit Skew Normal Peak

**構文:** obj << Fit Skew Normal Peak

### Fit Two Compartment IV Bolus Dose

**構文:** obj << Fit Two Compartment IV Bolus Dose

**説明:** 2コンパートメントの急速静注モデルをデータにあてはめる。このモデルは、静脈内投与した後の、体内の薬剤濃度をモデル化している。

```jsl

Names Default To Here( 1 );
Random Reset( 7483 );
xd = [.25, .5, .75, 1, 1.5, 2, 3, 4, 6, 12, 24];
yd = J( 11, 1, . );
For( i = 1, i <= 11, i++,
	yd[i] = 170 * Exp( -.15 * xd[i] ) + 80 * Exp( -1.4 * xd[i] ) + .1 * Random Normal()
);
dt = As Table( xd || yd );
Column( dt, 1 ) << set name( "time" );
Column( dt, 2 ) << set name( "concentration" );
obj = dt << Fit Curve( Y( :concentration ), X( :time ) );
obj << Fit Two Compartment IV Bolus Dose;

```

### Fit Weibull Growth

**構文:** obj << Fit Weibull Growth

**説明:** 3つのパラメータからなるワイブル型成長モデルをデータにあてはめる。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :Concentration ), Group( :formulation ) );
obj << Fit Weibull Growth;

```

### Multivariate Distance

**構文:** obj << Multivariate Distance( Alpha( number ), Reference Level( level ))

**説明:** Mahalanobisの距離であるMを使って溶出曲線を分析する。Mは、標準製剤の曲線と試験製剤の曲線の間の多変量距離を表す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dissolution DoE.jmp" );
obj = Fit Curve(
	Data Format( Row ),
	Y( :Dissolution 60, :Dissolution 120, :Dissolution 240, Dissolution 360 ),
	Group( :Batch ),
	Z( :Polymer A, :Polymer B, :Total Polymer, :Compression Force )
);
obj << Multivariate Distance( Alpha( 0.1 ), Reference Level( "R01" ) );

```

### T2EQ

**構文:** obj << T2EQ( Alpha( number ), Reference Level( level ))

**説明:** T2EQの同等性検定によって溶出曲線を分析する。T2EQは、標準製剤の曲線と試験製剤の曲線の間の多変量距離を測定する指標である。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dissolution DoE.jmp" );
obj = Fit Curve(
	Data Format( Row ),
	Y( :Dissolution 60, :Dissolution 120, :Dissolution 240, Dissolution 360 ),
	Group( :Batch ),
	Z( :Polymer A, :Polymer B, :Total Polymer, :Compression Force )
);
obj << T2EQ( Alpha( 0.05 ), Reference Level( "R01" ) );

```

## Equivalence with Ratios

### 項目のメッセージ

#### Set Alpha Level

**構文:** obj << Fit Command( Equivalence Test(..., Equivalence with Ratios( 1, Set Alpha Level( number )))); 

obj << (Fit[name|number] << Equivalence Test(..., Equivalence with Ratios( 1, Set Alpha Level( number ))))

**説明:** 同等性検定のグラフにおける信頼区間に使用するα水準を設定する。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P(
	Equivalence Test(
		Reference Group( "Standard" ),
		Equivalence with Ratios( 1, Set Alpha Level( 0.1 ) ),
		Equivalence with Ratios( 1, Set Alpha Level( 0.1 ) ),
		Equivalence with Ratios( 1, Set Alpha Level( 0.1 ) )
	)
);

```

#### Set Decision Lines

**構文:** obj << Fit Command( Equivalence Test(..., Equivalence with Ratios( 1, Set Decision Lines( lower, upper )))); 

obj << (Fit[name|number] << Equivalence Test(..., Equivalence with Ratios( 1, Set Decision Lines( lower, upper ))))

**説明:** 同等性検定のグラフにおいて、下側・上側の決定線を設定する。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P(
	Equivalence Test(
		Reference Group( "Standard" ),
		Equivalence with Ratios( 1, Set Decision Lines( 0.9, 1.1 ) ),
		Equivalence with Ratios( 1, Set Decision Lines( 0.9, 1.1 ) ),
		Equivalence with Ratios( 1, Set Decision Lines( 0.9, 1.1 ) )
	)
);

```

#### Show Center Line

**構文:** obj << Fit Command( Equivalence Test(..., Equivalence with Ratios( 1, Show Center Line( state=0|1 )))); 

obj << (Fit[name|number] << Equivalence Test(..., Equivalence with Ratios( 1, Show Center Line( state=0|1 ))))

**説明:** 同等性検定のグラフにおいて、中心線の表示/非表示を切り替える。 デフォルトではオン。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P(
	Equivalence Test(
		Reference Group( "Standard" ),
		Equivalence with Ratios( 1, Show Center Line( 0 ) ),
		Equivalence with Ratios( 1, Show Center Line( 1 ) ),
		Equivalence with Ratios( 1, Show Center Line( 0 ) )
	)
);

```

#### Show Decision Limit Shading

**構文:** obj << Fit Command( Equivalence Test(..., Equivalence with Ratios( 1, Show Decision Limit Shading( state=0|1 )))); 

obj << (Fit[name|number] << Equivalence Test(..., Equivalence with Ratios( 1, Show Decision Limit Shading( state=0|1 ))))

**説明:** 同等性検定のグラフにおいて、決定限界の陰影の表示/非表示を切り替える。 デフォルトではオン。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P(
	Equivalence Test(
		Reference Group( "Standard" ),
		Equivalence with Ratios( 1, Show Decision Limit Shading( 0 ) ),
		Equivalence with Ratios( 1, Show Decision Limit Shading( 1 ) ),
		Equivalence with Ratios( 1, Show Decision Limit Shading( 0 ) )
	)
);

```

#### Show Decision Limits

**構文:** obj << Fit Command( Equivalence Test(..., Equivalence with Ratios( 1, Show Decision Limits( state=0|1 )))); 

obj << (Fit[name|number] << Equivalence Test(..., Equivalence with Ratios(1, Show Decision Limits( state=0|1 ))))

**説明:** 同等性検定のグラフにおいて、決定限界を示す線の表示/非表示を切り替える。 デフォルトではオン。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P(
	Equivalence Test(
		Reference Group( "Standard" ),
		Equivalence with Ratios( 1, Show Decision Limits( 0 ) ),
		Equivalence with Ratios( 1, Show Decision Limits( 1 ) ),
		Equivalence with Ratios( 1, Show Decision Limits( 0 ) )
	)
);

```

#### Show Summary Report

**構文:** obj << Fit Command( Equivalence Test(..., Equivalence with Ratios( 1, Show Summary Report( state=0|1 )))); 

obj << (Fit[name|number] << Equivalence Test(..., Equivalence with Ratios( 1, Show Summary Report( state=0|1 ))))

**説明:** 「同等性の要約」レポートの表示/非表示を切り替える。このレポートには、パラメータ推定値、決定限界、およびパラメータが決定限界を超えているかどうかが表示される。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P(
	Equivalence Test(
		Reference Group( "Standard" ),
		Equivalence with Ratios( 1, Show Summary Report( 1 ) ),
		Equivalence with Ratios( 1, Show Summary Report( 1 ) ),
		Equivalence with Ratios( 1, Show Summary Report( 1 ) )
	)
);

```

## Fit Curve CDOE

### 項目のメッセージ

#### CDOE Fit Plot

**構文:** scrobj << CDOE Fit Plot( state=0|1 )

**説明:** あてはめた曲線のプロットの表示/非表示を切り替える。グループ変数が指定されている場合は、グループ変数の水準ごとに曲線が描かれる。 デフォルトではオン。

**JMP追加されたバージョン:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Mill DOE.jmp" );
obj = Fit Curve(
	Y( :"Size/nm"n ),
	X( :Time ),
	Group( :Batch ),
	Z( :"%Beads"n, :"%Strength"n, :"Flow(g/min)"n ),
	Fit Biexponential 5P,
	SendToReport(
		Dispatch( {"Fit Curve"}, "Model Comparison", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Fit Curve"}, "Plot", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Fit Curve", "Biexponential 5P"}, "Group Summary", OutlineBox,
			{Close( 1 )}
		),
		Dispatch( {"Fit Curve", "Biexponential 5P"}, "Plot", OutlineBox, {Close( 1 )} )
	)
);
obj << (Fit["Biexponential 5P"] << Curve DOE Analysis( 1 ));
Report( obj )["CDOE Fit"] << Close( 0 );
Wait( 2 );
scrobj = (Report( obj )["Curve DOE Analysis"] << get scriptable object);
scrobj << CDOE Fit Plot( 0 );

```

#### CDOE Profiler

**構文:** scrobj << CDOE Profiler( state=0|1 )

**説明:** 曲線実験計画プロファイルの表示/非表示を切り替える。曲線実験計画プロファイルでは、追加変数(Z変数)に基づく曲瀬の変化を調べることができる。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Mill DOE.jmp" );
obj = Fit Curve(
	Y( :"Size/nm"n ),
	X( :Time ),
	Group( :Batch ),
	Z( :"%Beads"n, :"%Strength"n, :"Flow(g/min)"n ),
	Fit Biexponential 5P,
	SendToReport(
		Dispatch( {"Fit Curve"}, "Model Comparison", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Fit Curve"}, "Plot", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Fit Curve", "Biexponential 5P"}, "Group Summary", OutlineBox,
			{Close( 1 )}
		),
		Dispatch( {"Fit Curve", "Biexponential 5P"}, "Plot", OutlineBox, {Close( 1 )} )
	)
);
obj << (Fit["Biexponential 5P"] << Curve DOE Analysis( 1 ));
Wait( 2 );
scrobj = (Report( obj )["Curve DOE Analysis"] << get scriptable object);
scrobj << CDOE Profiler( 0 );

```

#### Diagnostic Plots

**構文:** scrobj << Diagnostic Plots( state=0|1 )

**説明:** 「予測値と実測値のプロット」と「残差プロット」の表示/非表示を切り替える。 デフォルトではオン。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Mill DOE.jmp" );
obj = Fit Curve(
	Y( :"Size/nm"n ),
	X( :Time ),
	Group( :Batch ),
	Z( :"%Beads"n, :"%Strength"n, :"Flow(g/min)"n ),
	Fit Biexponential 5P,
	SendToReport(
		Dispatch( {"Fit Curve"}, "Model Comparison", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Fit Curve"}, "Plot", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Fit Curve", "Biexponential 5P"}, "Group Summary", OutlineBox,
			{Close( 1 )}
		),
		Dispatch( {"Fit Curve", "Biexponential 5P"}, "Plot", OutlineBox, {Close( 1 )} )
	)
);
obj << (Fit["Biexponential 5P"] << Curve DOE Analysis( 1 ));
Report( obj )["Diagnostic Plots"] << Close( 0 );
Wait( 2 );
scrobj = (Report( obj )["Curve DOE Analysis"] << get scriptable object);
scrobj << Diagnostic Plots( 0 );

```

#### Generalized Regression for Model Parameters

**構文:** scrobj << Generalized Regression for Model Parameters( state=0|1 )

**説明:** 各モデルパラメータに対する「一般化回帰」レポートの表示/非表示を切り替える。 デフォルトではオン。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Mill DOE.jmp" );
obj = Fit Curve(
	Y( :"Size/nm"n ),
	X( :Time ),
	Group( :Batch ),
	Z( :"%Beads"n, :"%Strength"n, :"Flow(g/min)"n ),
	Fit Biexponential 5P,
	SendToReport(
		Dispatch( {"Fit Curve"}, "Model Comparison", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Fit Curve"}, "Plot", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Fit Curve", "Biexponential 5P"}, "Group Summary", OutlineBox,
			{Close( 1 )}
		),
		Dispatch( {"Fit Curve", "Biexponential 5P"}, "Plot", OutlineBox, {Close( 1 )} )
	)
);
obj << (Fit["Biexponential 5P"] << Curve DOE Analysis( 1 ));
Report( obj )["Generalized Regression for Model Parameters"] << Close( 0 );
Wait( 2 );
scrobj = (Report( obj )["Curve DOE Analysis"] << get scriptable object);
scrobj << Generalized Regression for Model Parameters( 0 );

```

#### Save Prediction Formula

**構文:** scrobj << Save Prediction Formula

**説明:** 予測式の列を元のデータテーブルに作成する。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Mill DOE.jmp" );
obj = Fit Curve(
	Y( :"Size/nm"n ),
	X( :Time ),
	Group( :Batch ),
	Z( :"%Beads"n, :"%Strength"n, :"Flow(g/min)"n ),
	Fit Biexponential 5P,
	SendToReport(
		Dispatch( {"Fit Curve"}, "Model Comparison", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Fit Curve"}, "Plot", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Fit Curve", "Biexponential 5P"}, "Group Summary", OutlineBox,
			{Close( 1 )}
		),
		Dispatch( {"Fit Curve", "Biexponential 5P"}, "Plot", OutlineBox, {Close( 1 )} )
	)
);
obj << (Fit["Biexponential 5P"] << Curve DOE Analysis( 1 ));
scrobj = (Report( obj )["Curve DOE Analysis"] << get scriptable object);
scrobj << Save Prediction Formula;

```

## Fit

### 項目のメッセージ

#### Area Under Curve

**構文:** obj << Fit Command( Area Under Curve( state=0|1 )); 

obj << (Fit[number|name] << Area Under Curve( state=0|1 ))

**説明:** あてはめた曲線のAUC (曲線下面積) を計算する。

```jsl

Names Default To Here( 1 );
Random Reset( 7483 );
xd = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
yd = J( 12, 1, . );
For( i = 1, i <= 12, i++,
	yd[i] = 10 * Normal Density( (xd[i] - 6) / 2 ) + Random Normal() * .1
);
dt = As Table( xd || yd );
Column( dt, 1 ) << set name( "x" );
Column( dt, 2 ) << set name( "y" );
obj = dt << Fit Curve( Y( :Y ), X( :X ) );
obj << Fit Gaussian Peak( Area Under Curve( 1 ) );

```

#### Compare Parameter Estimates

**構文:** obj << Fit Command( Compare Parameter Estimates( state=0|1 )); 

obj << (Fit[number|name] << Compare Parameter Estimates( state=0|1 ))

**説明:** 各群のパラメータ推定値を全体平均と比較する。比較は、各パラメータに対して行われる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P( Compare Parameter Estimates( 1 ) );

```

#### Curve DOE Analysis

**構文:** obj << (Fit[number|name] << Curve DOE Analysis( state=0|1 ))

**説明:** 「曲線のあてはめ」プラットフォームで「一般化回帰」レポートを起動する。追加変数(Z変数)をモデル効果とした一般化回帰モデルが、モデルの各パラメータにあてはめられる。

**JMP追加されたバージョン:** 16

**例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dissolution DoE.jmp" );
obj = Fit Curve(
	Data Format( Row ),
	Y( :Dissolution 60, :Dissolution 120, :Dissolution 240, Dissolution 360 ),
	Group( :Batch ),
	Z( :Polymer A, :Polymer B, :Total Polymer, :Compression Force ),
	Multivariate Distance( Alpha( 0.1 ), Reference Level( "R01" ) ),
	SendToReport(
		Dispatch( {"Fit Curve"}, "Plot", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Fit Curve", "Multivariate Distance"}, "Comparisons", OutlineBox,
			{Close( 1 )}
		)
	)
);
obj << (fit[1] << Curve DOE Analysis( 1 ));

```

**例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Mill DOE.jmp" );
obj = Fit Curve(
	Y( :"Size/nm"n ),
	X( :Time ),
	Group( :Batch ),
	Z( :"%Beads"n, :"%Strength"n, :"Flow(g/min)"n ),
	Fit Biexponential 5P,
	SendToReport(
		Dispatch( {"Fit Curve"}, "Model Comparison", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Fit Curve"}, "Plot", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Fit Curve", "Biexponential 5P"}, "Group Summary", OutlineBox,
			{Close( 1 )}
		),
		Dispatch( {"Fit Curve", "Biexponential 5P"}, "Plot", OutlineBox, {Close( 1 )} )
	)
);
obj << (Fit["Biexponential 5P"] << Curve DOE Analysis( 1 ));

```

#### Custom Inverse Prediction

**構文:** obj << Fit Command( Custom Inverse Prediction( Response( value ))); 

obj << (Fit[number|name] << Custom Inverse Prediction( Response( value )))

**説明:** 応答変数の指定された値に対するX値を予測する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P( Custom Inverse Prediction( Response( 0.9 ) ) );

```

#### Equivalence Test

**構文:** obj << Fit Command( Equivalence Test( Reference Group( column ))); 

obj << (Fit[number|name] << Equivalence Test( Reference Group( column )))

**説明:** 曲線を特徴付ける各群のパラメータが、参照群のパラメータと実質的に同等かどうかを検定する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P( Equivalence Test( Reference Group( "Standard" ) ) );

```

#### Inflection Point

**構文:** obj << Fit Command( Inflection Point( state=0|1 )); 

obj << (Fit[number|name] << Inflection Point( state=0|1 ))

**説明:** モデルの変曲点に対する推定値の表示/非表示を切り替える。このオプションは、Weibull成長モデル、ロジスティック 4P Rodbardモデル、ロジスティック 5Pモデルでのみ使用可能。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 5P( Inflection Point( 1 ) );

```

#### Make Parameter Table

**構文:** obj << Fit Command( Make Parameter Table ); 

obj << (Fit[number|name] << Make Parameter Table)

**説明:** パラメータ推定値の要約テーブルを作成する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P( Make Parameter Table );

```

#### Peak Response

**構文:** obj << Fit Command( Peak Response( state=0|1 ); 

obj << (Fit[number|name] << Peak Response( state=0|1 ))

**説明:** あてはめた曲線のピークにおけるY変数の推定値を計算する。このオプションは、細胞成長4Pモデルと1コンパートメントモデルで使用可能。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dat = [0 0, .27 1.72, .52 7.91, 1 8.31, 1.92 8.33, 3.5 6.85, 5.02 6.08, 7.03 5.4, 9 4.55, 12
3.01, 24.3 .9];
dt = As Table( dat );
Column( dt, 1 ) << set name( "time" );
Column( dt, 2 ) << set name( "concentration" );
obj = dt << Fit Curve( Y( :concentration ), X( :time ) );
obj << Fit One Compartment Oral Dose( Peak Response( 1 ) );

```

#### Plot Actual by Predicted

**構文:** obj << Fit Command( Plot Actual by Predicted( state=0|1 ); 

obj << (Fit[number|name] << Plot Actual by Predicted( state=0|1 ))

**説明:** 「予測値と実測値のプロット」の表示/非表示を切り替える。データにモデルが良くあてはまっていれば、点が対角線の近くに位置する。対角線の遠くに位置する点やパターンを見つけたり、モデル全体に対する検定を視覚的に把握したりできる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
fc = Fit Curve( Y( :weight ), X( :height ), Fit Linear() );
fc << (fit[1] << Plot Actual by Predicted( 1 ));

```

#### Plot Residual by Predicted

**構文:** obj << Fit Command( Plot Residual by Predicted( state=0|1 ); 

obj << (Fit[number|name] << Plot Residual by Predicted( state=0|1 ))

**説明:** 「行番号と残差のプロット」の表示/非表示を切り替える。このプロットは、横軸に行番号、縦軸に残差をとったプロットである。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
fc = Fit Curve( Y( :weight ), X( :height ), Fit Linear() );
fc << (fit[1] << Plot Residual by Predicted( 1 ));

```

#### Profiler

**構文:** obj << Fit Command( Profiler( state=0|1 )); 

obj << (Fit[number|name] << Profiler( state=0|1 ))

**説明:** あてはめた予測式と、その1次微分および2次微分のプロファイルの表示/非表示を切り替える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve(
	Y( :Toxicity ),
	X( :log Conc ),
	Group( :formulation ),
	Fit Logistic 4P
);
obj << (Fit["Logistic 4P"] << Profiler( 1 ));

```

#### Remove Fit

**構文:** obj << (Fit[number|name]<<Remove Fit)

**説明:** 指定したあてはめをレポートから削除する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;
Wait( 2 );
obj << (Fit[1] << Remove Fit);

```

#### Save Bootstrap Results

**構文:** obj << Fit Command( Save Bootstrap Results ); 

obj << (Fit[number] << Save Bootstrap Results)

**説明:** F1分析またはF2分析のブートストラップの結果を新しいデータテーブルに保存する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dissolution DoE.jmp" );
obj = Fit Curve(
	Data Format( Row ),
	Y( :Dissolution 60, :Dissolution 120, :Dissolution 240, Dissolution 360 ),
	Group( :Batch ),
	Z( :Polymer A, :Polymer B, :Total Polymer, :Compression Force ),
	F2 Analysis(
		Alpha( 0.1 ),
		Reference Level( "R01" ),
		Bootstrap Samples( 2500 ),
		Random Seed( 1234 )
	),
	SendToReport(
		Dispatch( {"Fit Curve"}, "Plot", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Fit Curve", "F2 Analysis"}, "Comparisons", OutlineBox, {Close( 1 )} )
	)
);
obj << (fit[1] << Save Bootstrap Results);

```

#### Save First Derivative

**構文:** obj << Fit Command( Save First Derivative ); 

obj << (Fit[number|name] << Save First Derivative)

**説明:** 予測値の1次微分を求める計算式の列を元のデータテーブルに作成する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P( Save First Derivative );

```

#### Save Inverse Prediction Formula

**構文:** obj << Fit Command( Save Inverse Prediction Formula ); 

obj << (Fit[number|name] << Save Inverse Prediction Formula)

**説明:** あてはめたモデルの逆関数を表す計算式の列を元のデータテーブルに作成する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P( Save Inverse Prediction Formula );

```

#### Save Parametric Prediction Formula

**構文:** obj << Fit Command( Save Parametric Prediction Formula ); 

obj << (Fit[number|name] << Save Parametric Prediction Formula)

**説明:** 「非線形回帰」プラットフォームで使用できる予測式を元のデータテーブルに作成する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve(
	Y( :Toxicity ),
	X( :log Conc ),
	Group( :formulation ),
	Fit Logistic 4P
);
obj << (Fit["Logistic 4P"] << Save Parametric Prediction Formula);

```

#### Save Prediction Formula

**構文:** obj << Fit Command( Save Prediction Formula ); 

obj << (Fit[number|name] << Save Prediction Formula)

**説明:** 現在のパラメータ推定値を含む予測式の列を元のデータテーブルに作成する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve(
	Y( :Toxicity ),
	X( :log Conc ),
	Group( :formulation ),
	Fit Logistic 4P
);
obj << (Fit[1] << Save Prediction Formula);

```

#### Save Residual Formula

**構文:** obj << Fit Command( Save Residual Formula ); 

obj << (Fit[number|name] << Save Residual Formula)

**説明:** 残差を求める計算式の列を元のデータテーブルに作成する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P( Save Residual Formula );

```

#### Save Stacked Data

**構文:** obj << Fit Command( Save Stacked Data ); 

obj << (Fit[number|name] << Save Stacked Data)

**説明:** 新しいデータテーブルに、積み重ねた形式の元のデータ、応答の予測値の列、残差の列を保存する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dissolution DoE.jmp" );
obj = dt << Fit Curve(
	Data Format( Row ),
	Y( :Dissolution 60, :Dissolution 120, :Dissolution 240, :Dissolution 360 ),
	Group( :Batch )
);
obj << Fit Higuchi( Save Stacked Data );

```

#### Save Std Error of First Derivative

**構文:** obj << Fit Command( Save Std Error of First Derivative ); 

obj << (Fit[number|name] << Save Std Error of First Derivative)

**説明:** 予測値の1次微分の標準誤差を求める計算式の列を元のデータテーブルに作成する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P( Save First Derivative, Save Std Error of First Derivative );

```

#### Save Std Error of Predicted

**構文:** obj << Fit Command( Save Std Error of Predicted ); 

obj << (Fit[number|name] << Save Std Error of Predicted)

**説明:** 予測値の標準誤差を求める計算式の列を元のデータテーブルに作成する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P( Save Prediction Formula, Save Std Error of Predicted );

```

#### Save Studentized Residual Formula

**構文:** obj << Fit Command( Save Studentized Residual Formula ); 

obj << (Fit[number|name] << Save Studentized Residual Formula)

**説明:** スチューデント化残差を求める計算式の列を元のデータテーブルに作成する。スチューデント化残差は、標準残差を、その標準偏差の推定値で割ったもの。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P( Save Studentized Residual Formula );

```

#### Test Parallelism

**構文:** obj << Fit Command( Test Parallelism( state=0|1 )); 

obj << (Fit[number|name] << Test Parallelism( state=0|1 ))

**説明:** あてはめた曲線の形状がグループ間で同じかどうかを検定する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P( Test Parallelism( 1 ) );

```

#### Time to Peak Response

**構文:** obj << Fit Command( Time to Peak Response( state=0|1 )); 

obj << (Fit[number|name] << Time to Peak Response( state=0|1 ))

**説明:** あてはめた曲線のピークにおけるX変数の推定値を計算する。このオプションは、細胞成長4Pモデルと1コンパートメントモデルでのみ使用可能。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dat = [0 0, .27 1.72, .52 7.91, 1 8.31, 1.92 8.33, 3.5 6.85, 5.02 6.08, 7.03 5.4, 9 4.55, 12
3.01, 24.3 .9];
dt = As Table( dat );
Column( dt, 1 ) << set name( "time" );
Column( dt, 2 ) << set name( "concentration" );
obj = dt << Fit Curve( Y( :concentration ), X( :time ) );
obj << Fit One Compartment Oral Dose( Time to Peak Response( 1 ) );

```

