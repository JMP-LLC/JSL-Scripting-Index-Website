# Support Vector Machines



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
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
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
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	By( _bycol )
);
obj[1] << Copy ByGroup Script;

```

### Copy Script

**構文:** obj << Copy Script

**説明:** この分析を再現するJSLスクリプトを生成し、クリップボードにコピーする。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Copy Script;

```

### Data Table Window

**構文:** obj << Data Table Window

**説明:** この分析に使用したデータテーブルのウィンドウを手前に表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
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
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	By( _bycol )
);
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
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

### Get Data Table

**構文:** obj << Get Data Table

**説明:** データテーブルへの参照を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
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
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**構文:** obj << Get Script With Data Table

**説明:** この分析を再現するスクリプト(JSL)をデータテーブルへの参照も含めて生成し、それを式として戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**構文:** obj << Get Timing

**説明:** プラットフォームの起動にかかった時間を取得する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
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
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**構文:** obj << Redo ByGroup Analysis

**説明:** 同じ分析をやり直し新しいウィンドウに表示する。データが変更されていると分析結果は異なる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	By( _bycol )
);
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**構文:** obj << Relaunch Analysis

**説明:** プラットフォームの起動ウィンドウを開き、レポートを作成した時の設定を表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**構文:** obj << Relaunch ByGroup

**説明:** プラットフォームの起動ウィンドウを開き、レポートを作成した時の設定を表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	By( _bycol )
);
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
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**構文:** obj << Report View( "完全"|"要約" )

**説明:** レポートビューは、プラットフォームレポートの詳細を表示するかどうかを決定する。Fullはすべての詳細を表示し、Summaryはプラットフォームにより限定されたものだけを表示する。 動作をカスタマイズするため、各ディスプレイボックスは<<Set Summary Behaviorメッセージをサポートする。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**構文:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**説明:** 分析を再現するためのJSLスクリプトを作成し、データテーブルにテーブルプロパティとして保存する。スクリプトの名前を指定できる。Append Suffixオプションは、スクリプト名に数字の接尾辞を追加する。これにより、同名のスクリプトが存在していても区別できる。Promptオプションは、ユーザにスクリプト名の指定を促す。Replaceオプションは、同名の既存のスクリプトを置き換える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**構文:** obj << Save ByGroup Script to Journal

**説明:** この分析を再現するJSLスクリプトを生成し、ジャーナルにそのスクリプトのボタンを追加する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**構文:** obj << Save ByGroup Script to Script Window

**説明:** この分析を再現するJSLスクリプトを生成し、現在のスクリプトウィンドウに表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**構文:** obj << Save Script for All Objects

**説明:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**構文:** obj << Save Script for All Objects To Data Table( <name> )

**説明:** すべてのレポートオブジェクトを再現するスクリプトを現在のデータテーブルに保存する。このオプションは、ウィンドウ内にレポートが複数ある場合に便利。作成されるスクリプトの名前は、引用符で囲んで指定しない限り、1つ目のプラットフォーム名となる。

**例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table;

```

**例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**構文:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**説明:** この分析を再現するJSLスクリプトを生成し、データテーブルのテーブルプロパティとして保存する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**構文:** obj << Save Script to Journal

**説明:** この分析を再現するJSLスクリプトを生成し、ジャーナルにそのスクリプトのボタンを追加する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Save Script to Journal;

```

### Save Script to Report

**構文:** obj << Save Script to Report

**説明:** この分析を再現するJSLスクリプトを生成し、レポートウィンドウに表示する。分析手順の記録を結果と一緒に残せる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Save Script to Report;

```

### Save Script to Script Window

**構文:** obj << Save Script to Script Window

**説明:** この分析を再現するJSLスクリプトを生成し、現在のスクリプトウィンドウに表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width )
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
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Title( "My Platform" );

```

### Top Report

**構文:** obj << Top Report

**説明:** レポート内のルートノードへの参照を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
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

**構文:** obj = Support Vector Machines(...Window View( "Visible"|"Invisible"|"Private" )...)

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

**構文:** obj = Support Vector Machines(...<By( column(s) )>...)

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	By( _bycol )
);

```

### Factor

**構文:** obj = Support Vector Machines(...Factor( column(s) )...)

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width )
);

```

### Freq

**構文:** obj = Support Vector Machines(...<Freq( column )>...)

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure3Freq.jmp" );
obj = Support Vector Machines(
	Y( :clean ),
	X(
		:contamination, :corrosion, :doping, :metallization, :miscellaneous, :oxide defect,
		:silicon defect
	),
	Freq( :SampleSize )
);

```

### Response

**構文:** obj = Support Vector Machines(...Response( column )...)

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width )
);

```

### Validation

**構文:** obj = Support Vector Machines(...<Validation( column )>...)

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = Support Vector Machines(
	Y( :Y Binary ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation )
);

```

### X

**構文:** obj = Support Vector Machines(...X( column(s) )...)

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width )
);

```

### Y

**構文:** obj = Support Vector Machines(...Y( column )...)

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width )
);

```

## 関連するコンストラクター

### Support Vector Machines

**構文:** Support Vector Machines(Y( column ), X( columns ))

**説明:** 説明変数の空間におけるサポートベクトルによって応答の予測値を求める。サポートベクトルマシンを用いる目的の1つは、現在の学習データから、将来のデータを分類する予測式を求めることである。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width )
);

```

## 項目のメッセージ

### Cost

**構文:** obj << Cost( number )

**説明:** サポートベクトルマシンの推定におけるコストパラメータを設定する。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Fit(
		Kernel Function( "Radial Basis Function" ),
		Gamma( 0.25 ),
		Cost( 1 ),
		Validation Method( "None" )
	)
);

```

### Cost Max

**構文:** obj << Cost Max( number )

**説明:** 調整計画におけるコストの上限を設定する。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
Random Reset( 1234 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Tuning Design( 1 ),
	Cost Min( .1 ),
	Cost Max( 4 ),
	Gamma Min( 0.01 ),
	Gamma Max( 0.4 ),
	Fit( Kernel Function( "Radial Basis Function" ), Validation Method( "None" ) )
);

```

### Cost Min

**構文:** obj << Cost Min( number )

**説明:** 調整計画におけるコストに対する下限を設定する。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
Random Reset( 1234 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Tuning Design( 1 ),
	Cost Min( .1 ),
	Cost Max( 4 ),
	Gamma Min( 0.01 ),
	Gamma Max( 0.4 ),
	Fit( Kernel Function( "Radial Basis Function" ), Validation Method( "None" ) )
);

```

### Fit

**構文:** obj << Fit

**説明:** サポートベクトルマシンのカーネル構造を指定し、データにあてはめる。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Fit( Kernel Function( "Radial Basis Function" ), Gamma( 0.25 ), Cost( 1 ) )
);

```

### Gamma

**構文:** obj << Gamma( number )

**説明:** 動径基底関数カーネルのガンマパラメータを設定する。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Fit(
		Kernel Function( "Radial Basis Function" ),
		Gamma( 0.25 ),
		Cost( 1 ),
		Validation Method( "None" )
	)
);

```

### Gamma Max

**構文:** obj << Gamma Max( number )

**説明:** 調整計画におけるガンマの上限を設定する。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
Random Reset( 1234 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Tuning Design( 1 ),
	Cost Min( .1 ),
	Cost Max( 4 ),
	Gamma Min( 0.01 ),
	Gamma Max( 0.4 ),
	Fit( Kernel Function( "Radial Basis Function" ), Validation Method( "None" ) )
);

```

### Gamma Min

**構文:** obj << Gamma Min( number )

**説明:** 調整計画におけるコストの下限を設定する。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
Random Reset( 1234 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Tuning Design( 1 ),
	Cost Min( .1 ),
	Cost Max( 4 ),
	Gamma Min( 0.01 ),
	Gamma Max( 0.4 ),
	Fit( Kernel Function( "Radial Basis Function" ), Validation Method( "None" ) )
);

```

### Go

**構文:** obj << Go

**説明:** サポートベクトルマシンの推定を開始する。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Go;

```

### Number of Runs

**構文:** obj << Number of Runs( number )

**説明:** 調整計画における実験回数を設定する。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
Random Reset( 1234 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Tuning Design( 1 ),
	Cost Min( .1 ),
	Cost Max( 4 ),
	Gamma Min( 0.01 ),
	Gamma Max( 0.4 ),
	Number of Runs( 15 ),
	Fit( Kernel Function( "Radial Basis Function" ), Validation Method( "None" ) )
);

```

### Set Random Seed

**構文:** Set Random Seed( number )

**説明:** 保留法やK分割法におけるデータ分割で用いる乱数のシード値を設定する。同じシード値を指定すれば、分割を再現できる。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Fit(
		Set Random Seed( 1234 ),
		Kernel Function( "Radial Basis Function" ),
		Gamma( 0.25 ),
		Cost( 1 ),
		Validation Method( "Holdback", 0.3333 )
	)
);

```

### Tuning Design

**構文:** obj << Tuning Design( state=0|1 )

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
Random Reset( 1234 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Tuning Design( 1 ),
	Fit( Kernel Function( "Radial Basis Function" ), Validation Method( "None" ) )
);

```

## SVM Fit

### 項目のメッセージ

#### Confusion Matrix

**構文:** obj << (fit[number] << Confusion Matrix( state=0|1 ))

**説明:** 混同行列の表示/非表示を切り替える。混同行列は、実測値と分類値の2元度数表である。 デフォルトではオン。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Fit( Kernel Function( "Radial Basis Function" ), Gamma( 0.25 ), Cost( 1 ) )
);
obj << (fit[1] << Confusion Matrix( 0 ));

```

#### Contour Profiler

**構文:** obj << (fit[number] << Contour Profiler( state=0|1 ))

**説明:** 等高線プロファイルの表示/非表示を切り替える。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Fit( Kernel Function( "Radial Basis Function" ), Gamma( 0.25 ), Cost( 1 ) )
);
obj << (Fit[1] << Contour Profiler( 1 ));

```

#### Get Measures

**構文:** obj << (fit[number] << Get Measures)

**説明:** あてはめたモデルの適合度指標を戻す。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Fit( Kernel Function( "Radial Basis Function" ), Gamma( 0.25 ), Cost( 1 ) )
);
obj << (Fit[1] << Response Profile Plot( 0 ));
obj << (Fit[1] << Get Measures);

```

#### Get Prediction Formula

**構文:** obj << (fit[number] << Get Prediction Formula)

**説明:** 予測式の列を作成するスクリプトを戻す。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Fit( Kernel Function( "Radial Basis Function" ), Gamma( 0.25 ), Cost( 1 ) )
);
obj << (fit[1] << Get Prediction Formula);

```

#### Lift Curve

**構文:** obj << (fit[number] << Lift Curve( state=0|1 ))

**説明:** リフトチャートの表示/非表示を切り替える。リフトチャートは、観測値の割合に対してリフトをプロットしたもので、モデルの予測能力を別の観点から見ることができる。検証列を指定した場合は、学習セット・検証セット・テストセットのそれぞれに対してプロットが表示される。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Fit( Kernel Function( "Radial Basis Function" ), Gamma( 0.25 ), Cost( 1 ) )
);
Wait( 0 );
obj << (fit[1] << Lift Curve( 1 ));

```

#### Plot Actual by Predicted

**構文:** obj << (fit[number] << Plot Actual By Predicted( state=0|1 ))

**説明:** 当該のあてはめ結果において、学習セットの実測値(Y軸)と予測値(X軸)のプロットの表示/非表示を切り替える。検証セットやテストセットを使用している場合は、それらのプロットも表示される。 デフォルトではオン。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Support Vector Machines(
	Y( :Y ),
	X( :Age, :BMI, :Total Cholesterol, :Glucose ),
	Fit( Kernel Function( "Radial Basis Function" ), Gamma( 0.25 ), Cost( 1 ) )
);
obj << (fit[1] << Plot Actual By Predicted( 0 ));

```

#### Plot Residual by Predicted

**構文:** obj << (fit[number] << Plot Residual By Predicted( state=0|1 ))

**説明:** 当該のあてはめ結果において、学習セットの残差(Y軸)と予測値(X軸)のプロットの表示/非表示を切り替える。検証セットやテストセットを使用している場合は、それらのプロットも表示される。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Support Vector Machines(
	Y( :Y ),
	X( :Age, :BMI, :Total Cholesterol, :Glucose ),
	Fit( Kernel Function( "Radial Basis Function" ), Gamma( 0.25 ), Cost( 1 ) )
);
obj << (fit[1] << Plot Residual By Predicted( 1 ));

```

#### Precision Recall Curve

**構文:** obj << (fit[number] << Precision Recall Curve( state=0|1 ))

**説明:** 応答変数の水準ごとに描かれるPR曲線の表示/非表示を切り替える。PR曲線は、さまざまな閾値における適合率と再現率をプロットしたもの。検証列を指定した場合は、学習セット・検証セット・テストセットのそれぞれに対してプロットが表示される。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Fit( Kernel Function( "Radial Basis Function" ), Gamma( 0.25 ), Cost( 1 ) )
);
Wait( 0 );
obj << (fit[1] << Precision Recall Curve( 1 ));

```

#### Profiler

**構文:** obj << (fit[number] << Profiler( state=0|1 ))

**説明:** 該当のあてはめにおいて、予測プロファイルを表示する。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Fit( Kernel Function( "Radial Basis Function" ), Gamma( 0.25 ), Cost( 1 ) )
);
obj << (fit[1] << Profiler( 1 ));

```

#### Publish Prediction Formula

**構文:** obj << (fit[number] << Publish Prediction Formula)

**説明:** 予測式を作成し、列の計算式として「計算式デポ」プラットフォームに計算式列のスクリプトとして保存する。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Fit( Kernel Function( "Radial Basis Function" ), Gamma( 0.25 ), Cost( 1 ) )
);
obj << (fit[1] << Publish Prediction Formula);

```

#### Publish Probability Formula

**構文:** obj << (fit[number] << Publish Probability Formula)

**説明:** 各応答水準に対する確率を、個別の列としてデータテーブルに保存する。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Support Vector Machines(
	Y( :Y Binary ),
	X( :Age, :BMI, :Total Cholesterol, :Glucose ),
	Fit( Kernel Function( "Radial Basis Function" ), Gamma( 0.25 ), Cost( 1 ) )
);
obj << (fit[1] << Publish Probability Formula);

```

#### ROC Curve

**構文:** obj << (fit[number] << ROC Curve( state=0|1 ))

**説明:** 応答変数の各水準に対し、ROC曲線(受診者動作特性曲線)の表示/非表示を切り替える。ROC曲線は、「感度」と「1-特異度」をプロットした曲線。検証列を指定した場合は、学習セット・検証セット・テストセットのそれぞれに対してプロットが表示される。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Fit( Kernel Function( "Radial Basis Function" ), Gamma( 0.25 ), Cost( 1 ) )
);
Wait( 0 );
obj << (fit[1] << ROC Curve( 1 ));

```

#### Remove Fit

**構文:** obj << (fit[number] << Remove Fit)

**説明:** モデルのレポート全体を削除する。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Fit( Kernel Function( "Radial Basis Function" ), Gamma( 0.25 ), Cost( 1 ) ),
	Fit( Kernel Function( "Linear" ), Cost( 1 ), Validation Method( "None" ) )
);
Wait( 2 );
obj << (Fit[1] << Remove Fit);

```

#### Response Profile Plot

**構文:** obj << (fit[number] << Response Profile Plot( state=0|1 ))

**説明:** 応答プロファイルプロットを表示する。 デフォルトではオン。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Fit( Kernel Function( "Radial Basis Function" ), Gamma( 0.25 ), Cost( 1 ) )
);
obj << (Fit[1] << Response Profile Plot( 0 ));

```

#### Save Predicteds

**構文:** obj << (fit[number] << Save Predicteds)

**説明:** 予測値をデータテーブルの新しい列に保存する。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Fit( Kernel Function( "Radial Basis Function" ), Gamma( 0.25 ), Cost( 1 ) )
);
obj << (fit[1] << Save Predicteds);

```

#### Save Prediction Formula

**構文:** obj << (fit[number] << Save Prediction Formula)

**説明:** データテーブルに、予測式を含む新しい列を作成する。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Fit( Kernel Function( "Radial Basis Function" ), Gamma( 0.25 ), Cost( 1 ) )
);
obj << (fit[1] << Save Prediction Formula);

```

#### Save Probabilities

**構文:** obj << (fit[number] << Save Probabilities)

**説明:** 各応答水準に対する確率を、個別の列としてデータテーブルに保存する。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Fit( Kernel Function( "Radial Basis Function" ), Gamma( 0.25 ), Cost( 1 ) )
);
obj << (fit[1] << Save Probabilities);

```

#### Save Probability Formula

**構文:** obj << (fit[number] << Save Probability Formula)

**説明:** 各応答水準に対する確率を、個別の列としてデータテーブルに保存する。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Support Vector Machines(
	Y( :Y Binary ),
	X( :Age, :BMI, :Total Cholesterol, :Glucose ),
	Fit( Kernel Function( "Radial Basis Function" ), Gamma( 0.25 ), Cost( 1 ) )
);
obj << (fit[1] << Save Probability Formula);

```

#### Save Validation

**構文:** obj << (fit[number] << Save Validation)

**説明:** 学習、検証、およびテストのいずれに行が使用されたかを識別するための列をデータテーブルに作成する。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Fit(
		Kernel Function( "Radial Basis Function" ),
		Gamma( 0.25 ),
		Cost( 1 ),
		Validation Method( "Holdback", 0.3333 ), 

	)
);
obj << (Fit[1] << Save Validation);

```

#### Support Vector Coefficients

**構文:** obj << (fit[number] << Support Vector Coefficients( state=0|1 ))

**説明:** サポートベクトルの係数に関する表を表示する。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Fit( Kernel Function( "Radial Basis Function" ), Gamma( 0.25 ), Cost( 1 ) )
);
obj << (Fit[1] << Support Vector Coefficients( 1 ));

```

#### Surface Profiler

**構文:** obj << (fit[number] << Surface Profiler( state=0|1 ))

**説明:** 曲面プロファイルの表示/非表示を切り替える。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Fit( Kernel Function( "Radial Basis Function" ), Gamma( 0.25 ), Cost( 1 ) )
);
obj << (Fit[1] << Surface Profiler( 1 ));

```

