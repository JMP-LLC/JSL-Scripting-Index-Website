# EMP Measurement Systems Analysis



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
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
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
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" ),
	By( _bycol )
);
obj[1] << Copy ByGroup Script;

```

### Copy Script

**構文:** obj << Copy Script

**説明:** この分析を再現するJSLスクリプトを生成し、クリップボードにコピーする。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << Copy Script;

```

### Data Table Window

**構文:** obj << Data Table Window

**説明:** この分析に使用したデータテーブルのウィンドウを手前に表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
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
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" ),
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
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

### Get Data Table

**構文:** obj << Get Data Table

**説明:** データテーブルへの参照を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
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
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**構文:** obj << Get Script With Data Table

**説明:** この分析を再現するスクリプト(JSL)をデータテーブルへの参照も含めて生成し、それを式として戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**構文:** obj << Get Timing

**説明:** プラットフォームの起動にかかった時間を取得する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
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
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**構文:** obj << Redo ByGroup Analysis

**説明:** 同じ分析をやり直し新しいウィンドウに表示する。データが変更されていると分析結果は異なる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" ),
	By( _bycol )
);
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**構文:** obj << Relaunch Analysis

**説明:** プラットフォームの起動ウィンドウを開き、レポートを作成した時の設定を表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**構文:** obj << Relaunch ByGroup

**説明:** プラットフォームの起動ウィンドウを開き、レポートを作成した時の設定を表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" ),
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
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
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
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**構文:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**説明:** 分析を再現するためのJSLスクリプトを作成し、データテーブルにテーブルプロパティとして保存する。スクリプトの名前を指定できる。Append Suffixオプションは、スクリプト名に数字の接尾辞を追加する。これにより、同名のスクリプトが存在していても区別できる。Promptオプションは、ユーザにスクリプト名の指定を促す。Replaceオプションは、同名の既存のスクリプトを置き換える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**構文:** obj << Save ByGroup Script to Journal

**説明:** この分析を再現するJSLスクリプトを生成し、ジャーナルにそのスクリプトのボタンを追加する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**構文:** obj << Save ByGroup Script to Script Window

**説明:** この分析を再現するJSLスクリプトを生成し、現在のスクリプトウィンドウに表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**構文:** obj << Save Script for All Objects

**説明:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**構文:** obj << Save Script for All Objects To Data Table( <name> )

**説明:** すべてのレポートオブジェクトを再現するスクリプトを現在のデータテーブルに保存する。このオプションは、ウィンドウ内にレポートが複数ある場合に便利。作成されるスクリプトの名前は、引用符で囲んで指定しない限り、1つ目のプラットフォーム名となる。

**例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table;

```

**例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**構文:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**説明:** この分析を再現するJSLスクリプトを生成し、データテーブルのテーブルプロパティとして保存する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**構文:** obj << Save Script to Journal

**説明:** この分析を再現するJSLスクリプトを生成し、ジャーナルにそのスクリプトのボタンを追加する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << Save Script to Journal;

```

### Save Script to Report

**構文:** obj << Save Script to Report

**説明:** この分析を再現するJSLスクリプトを生成し、レポートウィンドウに表示する。分析手順の記録を結果と一緒に残せる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << Save Script to Report;

```

### Save Script to Script Window

**構文:** obj << Save Script to Script Window

**説明:** この分析を再現するJSLスクリプトを生成し、現在のスクリプトウィンドウに表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
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
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << Title( "My Platform" );

```

### Top Report

**構文:** obj << Top Report

**説明:** レポート内のルートノードへの参照を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
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

**構文:** obj = EMP Measurement Systems Analysis(...Window View( "Visible"|"Invisible"|"Private" )...)

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

**構文:** obj = EMP Measurement Systems Analysis(...<By( column(s) )>...)

**説明:** 変数の水準ごとに1つずつ、複数のレポートを作成する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/3 Factors Crossed.jmp" );
EMP Measurement Systems Analysis(
	Y( :new Y ),
	X( :Operator ),
	Part( :Part ),
	Model( Crossed ),
	Dispersion Chart Type( Range ),
	By( :Instrument )
);

```

### Grouping

**構文:** obj = EMP Measurement Systems Analysis(...<Grouping( column(s) )>...)

**説明:** グループ変数として使うカテゴリカル変数の列を指定する。

**例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	MSA Metadata( :Y( Lower Tolerance( 140 ), Upper Tolerance( 220 ) ) ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);

```

**例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	Grouping( :Operator ),
	Part( :Part ),
	MSA Metadata( :Y( Lower Tolerance( 140 ), Upper Tolerance( 220 ) ) ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);

```

### Measurement

**構文:** obj = EMP Measurement Systems Analysis(...Measurement( column(s) )...)

**説明:** 連続尺度である測定値の列を指定する。

**例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	MSA Metadata( :Y( Lower Tolerance( 140 ), Upper Tolerance( 220 ) ) ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);

```

**例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Measurement( :Y ),
	X( :Operator ),
	Part( :Part ),
	MSA Metadata( :Y( Lower Tolerance( 140 ), Upper Tolerance( 220 ) ) ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);

```

### Part

**構文:** obj = EMP Measurement Systems Analysis(...Part( column )...)

**説明:** 部品やユニットを表すカテゴリカル変数の列を指定する。

**例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	MSA Metadata( :Y( Lower Tolerance( 140 ), Upper Tolerance( 220 ) ) ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);

```

**例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Sample ID( :Part ),
	MSA Metadata( :Y( Lower Tolerance( 140 ), Upper Tolerance( 220 ) ) ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);

```

### Sample ID

**構文:** obj = EMP Measurement Systems Analysis(...Sample ID( column )...)

**説明:** 部品やユニットを表すカテゴリカル変数の列を指定する。

**例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	MSA Metadata( :Y( Lower Tolerance( 140 ), Upper Tolerance( 220 ) ) ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);

```

**例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Sample ID( :Part ),
	MSA Metadata( :Y( Lower Tolerance( 140 ), Upper Tolerance( 220 ) ) ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);

```

### Standard

**構文:** obj = EMP Measurement Systems Analysis(...<Standard( column )>...)

**説明:** 基準値（参照値）が含まれている列を指定する。基準値とは，測定対象の部品がもつ真値である。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/MSALinearity.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Response ),
	Part( :Part ),
	Standard( :Standard ),
	Model( "Main" ),
	Dispersion Chart Type( "Range" )
);

```

### X

**構文:** obj = EMP Measurement Systems Analysis(...<X( column(s) )>...)

**説明:** グループ変数として使うカテゴリカル変数の列を指定する。

**例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	MSA Metadata( :Y( Lower Tolerance( 140 ), Upper Tolerance( 220 ) ) ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);

```

**例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	Grouping( :Operator ),
	Part( :Part ),
	MSA Metadata( :Y( Lower Tolerance( 140 ), Upper Tolerance( 220 ) ) ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);

```

### Y

**構文:** obj = EMP Measurement Systems Analysis(...Y( column(s) )...)

**説明:** 連続尺度である測定値の列を指定する。

**例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	MSA Metadata( :Y( Lower Tolerance( 140 ), Upper Tolerance( 220 ) ) ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);

```

**例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Measurement( :Y ),
	X( :Operator ),
	Part( :Part ),
	MSA Metadata( :Y( Lower Tolerance( 140 ), Upper Tolerance( 220 ) ) ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);

```

## 関連するコンストラクター

### EMP Measurement Systems Analysis

**構文:** EMP Measurement Systems Analysis( Y( column ), X( columns ), Part(column), Model(Main|Crossed|Crossed with Two Factor Interactions|Nested|Crossed then Nested|Nested then Crossed), Dispersion Chart Type(Range|Standard Deviation) )

**説明:** EMP(Evaruating the Measurement Process)法による測定システム分析を起動する。デフォルトで平均図とばらつき図(範囲または標準偏差)が表示される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);

```

## 項目のメッセージ

### Conv Limit

**構文:** obj = EMP Measurement Systems Analysis(...Conv Limit( number )...)

**説明:** 分散成分を推定するための反復計算の収束基準を設定する。このオプションはREML分析にのみ適用される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
dt << Select Rows( 5 ) << Exclude( 1 );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Standard Deviation" ),
	Conv Limit( 1e-7 )
);
obj << (EMP MSA Analysis[1] << Variance Components( 1 ));

```

### EMP MSA Analysis

**構文:** obj = EMP Measurement Systems Analysis(...EMP MSA Analysis( )...)

**説明:** 「EMP 測定システム分析」レポートのオプションを指定する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" ),
	EMP MSA Analysis(
		"Y",
		EMP Results( 1 ),
		Variance Components( 1 ),
		"EMP Gauge R&R Results"n( 1 )
	)
);

```

### Edit MSA Metadata

**構文:** obj << Edit MSA Metadata( :column( Lower Tolerance( number ), Upper Tolerance( number ), <Historical Mean( number ), Historical Process Sigma( number )> ) )

**説明:** すべての分析に対し、許容範囲・許容限界・履歴平均・履歴工程シグマを追加または編集するためのウィンドウを開く。レポートは自動的に更新される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	MSA Metadata( :Y( Lower Tolerance( 140 ), Upper Tolerance( 220 ) ) ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" ),
	EMP MSA Analysis( "Y", Dispersion Chart( 0 ), "AIAG Gauge R&R Results"n( 1 ) )
);
Wait( 1 );
obj << Edit MSA Metadata( :Y( Lower Tolerance( 130 ), Upper Tolerance( 230 ) ) );

```

### Include Interactions in Reproducibility

**構文:** obj = EMP Measurement Systems Analysis(...Include Interactions in Reproducibility( state=0|1 )...)

**説明:** 再現性に関する統計量の計算において、に交互作用を含める。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" ),
	Include Interactions in Reproducibility( 1 )
);
obj << (EMP MSA Analysis[1] << "EMP Gauge R&R Results"n( 1 ));

```

### Max Iter

**構文:** obj = EMP Measurement Systems Analysis(...Max Iter( number )...)

**説明:** 分散成分を推定するための反復計算の最大回数を設定する。このオプションはREML分析にのみ適用される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
dt << Select Rows( 5 ) << Exclude( 1 );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Standard Deviation" ),
	Max Iter( 200 )
);
obj << (EMP MSA Analysis[1] << Variance Components( 1 ));

```

### Save All Metadata to Table

**構文:** obj << Save All Metadata to Table( < MSA( state=0|1 ) >, < Measurement Sigma( state=0|1 ) >, < Tolerance as Specs( state=0|1 ) > )

**説明:** 測定データの各列の測定システム分析メタデータと「測定のシグマ」を、新しいデータテーブルにまとめる。データテーブルは縦長の形式で、測定変数1つにつき1行を含む。許容下限と許容上限の値を追加の列として保存するオプションもある。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	MSA Metadata( :Y( Lower Tolerance( 140 ), Upper Tolerance( 220 ) ) ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << Save All Metadata to Table;

```

### Save Metadata as Column Properties

**構文:** obj << Save Metadata as Column Properties( < MSA( state=0|1 ) >, < Measurement Sigma( state=0|1 ) >, < Tolerance as Specs( state=0|1 ) > )

**説明:** 測定データの各列について、測定システム分析メタデータと「測定のシグマ」を、元のデータテーブルの列に列プロパティとして保存する。許容下限と許容上限の値を「仕様限界」列プロパティとして保存するオプションもある。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	MSA Metadata( :Y( Lower Tolerance( 140 ), Upper Tolerance( 220 ) ) ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << Save Metadata as Column Properties;

```

### Set Alpha Level

**構文:** obj = EMP Measurement Systems Analysis(...Set Alpha Level( number )...)

**説明:** 「バイアスの比較」レポートと「繰り返し誤差の比較」レポートに使用される有意水準を指定する。 デフォルトの値は"0.05"。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" ),
	Set Alpha Level( .01 )
);
obj << (EMP MSA Analysis[1] << Bias Comparison( 1 ));

```

### Set Random Seed

**構文:** obj = EMP Measurement Systems Analysis(...Set Random Seed( number )...)

**説明:** 乱数シード値を特定の値に設定する。設定した後のシミュレーションが、そのシード値で実行されるようになる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Standard Deviation" ),
	Set Random Seed( 12345 )
);
obj << (EMP MSA Analysis[1] << "Test-Retest Error Comparison"n( 1 ));

```

### Sigma Multiplier

**構文:** obj = EMP Measurement Systems Analysis(...Sigma Multiplier( number=6 )...)

**説明:** シグマに掛け合わせる定数を指定する。 デフォルトの値は"6"。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" ),
	Sigma Multiplier( 5.15 ),
	EMP MSA Analysis( "Y", "AIAG Gauge R&R Results"n( 1 ) )
);

```

## EMP MSA Analysis > EMP AIAG Gauge Results

### 項目のメッセージ

#### AIAG Labels

**構文:** obj << (EMP MSA Analysis[number] << "AIAG Gauge R&R Results"n(1, AIAG Labels( state=0|1 )))

**説明:** 「AIAGゲージR&R分析」表において、ラベルの表示/非表示を切り替える。ラベルは、米国自動車工業会(AIAG)の定義によるもの。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << "AIAG Gauge R&R Results"n( 1, AIAG Labels( 0 ) ));

```

#### Discrimination Ratio

**構文:** obj << (EMP MSA Analysis[number] << "AIAG Gauge R&R Results"n(1, Discrimination Ratio( state=0|1 )))

**説明:** 指定のモデルにおける判別比の表示/非表示を切り替える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << "AIAG Gauge R&R Results"n( 1, Discrimination Ratio( 1 ) ));

```

## EMP MSA Analysis > EMP Average Chart

### 項目のメッセージ

#### Show Connected Means

**構文:** obj << (EMP MSA Analysis[number] << Average Chart( 1, Show Connected Means( state=0|1 )))

**説明:** 平均図において、測定値の平均をつなぐ折れ線の表示/非表示を切り替える。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << Average Chart( 1, Show Connected Means( 0 ) ));

```

#### Show Control Limits

**構文:** obj << (EMP MSA Analysis[number] << Average Chart( 1, Show Control Limits( state=0|1 )))

**説明:** 平均図において、管理限界の表示/非表示を切り替える。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << Average Chart( 1, Show Control Limits( 0 ) ));

```

#### Show Control Limits Shading

**構文:** obj << (EMP MSA Analysis[number] << Average Chart( 1, Show Control Limits Shading( state=0|1 )))

**説明:** 平均図において、管理限界の間における陰影の表示/非表示を切り替える。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << Average Chart( 1, Show Control Limits Shading( 0 ) ));

```

#### Show Data

**構文:** obj << (EMP MSA Analysis[number] << Average Chart( 1, Show Data( state=0|1 )))

**説明:** 平均図において、データ点の表示/非表示を切り替える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << Average Chart( 1, Show Data( 1 ) ));

```

#### Show Grand Mean

**構文:** obj << (EMP MSA Analysis[number] << Average Chart( 1, Show Grand Mean( state=0|1 )))

**説明:** 平均図において、Y変数の全体平均の表示/非表示を切り替える。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << Average Chart( 1, Show Grand Mean( 0 ) ));

```

#### Show Separators

**構文:** obj << (EMP MSA Analysis[number] << Average Chart( 1, Show Separators( state=0|1 )))

**説明:** 平均図において、X変数を区切る縦線の表示/非表示を切り替える。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << Average Chart( 1, Show Separators( 0 ) ));

```

## EMP MSA Analysis > EMP Dispersion Chart

### 項目のメッセージ

#### Show Average Dispersion

**構文:** obj << (EMP MSA Analysis[number] << Dispersion Chart( 1, Show Average Dispersion( state=0|1 )))

**説明:** ばらつき図において、範囲の平均または標準偏差の平均の表示/非表示を切り替える。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << Dispersion Chart( 1, Show Average Dispersion( 0 ) ));

```

#### Show Connected Points

**構文:** obj << (EMP MSA Analysis[number] << Dispersion Chart( 1, Show Connected Points( state=0|1 )))

**説明:** ばらつき図において、範囲または標準偏差をつなぐ折れ線の表示/非表示を切り替える。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << Dispersion Chart( 1, Show Connected Points( 0 ) ));

```

#### Show Control Limits

**構文:** obj << (EMP MSA Analysis[number] << Dispersion Chart( 1, Show Control Limits( state=0|1 )))

**説明:** ばらつき図において、管理限界の表示/非表示を切り替える。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << Dispersion Chart( 1, Show Control Limits( 0 ) ));

```

#### Show Control Limits Shading

**構文:** obj << (EMP MSA Analysis[number] << Dispersion Chart( 1, Show Control Limits Shading( state=0|1 )))

**説明:** ばらつき図において、管理限界の間における陰影の表示/非表示を切り替える。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << Dispersion Chart( 1, Show Control Limits Shading( 0 ) ));

```

#### Show Separators

**構文:** obj << (EMP MSA Analysis[number] << Dispersion Chart( 1, Show Separators( state=0|1 )))

**説明:** ばらつき図において、X変数を区切る縦線の表示/非表示を切り替える。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << Dispersion Chart( 1, Show Separators( 0 ) ));

```

## EMP MSA Analysis > EMP Linearity and Bias Results

### 項目のメッセージ

#### Show Avg Bias Points

**構文:** obj << (EMP MSA Analysis[number] << Linearity and Bias Results( 1, Show Avg Bias Points( state=0|1 )))

**説明:** グラフにおいて、平均バイアス点の表示/非表示を切り替える。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Measurement ),
	X( :Operator ),
	Part( :part# ),
	Standard( :Standard ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Standard Deviation" ),
	EMP MSA Analysis( :Measurement, Average Chart( 0 ), Dispersion Chart( 0 ) )
);
obj << (EMP MSA Analysis[1] << Linearity and Bias Results( 1, Show Avg Bias Points( 1 ) ));
Wait( 1 );
obj << (EMP MSA Analysis[1] << Linearity and Bias Results( 1, Show Avg Bias Points( 0 ) ));
Wait( 1 );
obj << (EMP MSA Analysis[1] << Linearity and Bias Results( 1, Show Avg Bias Points( 1 ) ));

```

#### Show Bias Points

**構文:** obj << (EMP MSA Analysis[number] << Linearity and Bias Results( 1, Show Bias Points( state=0|1 )))

**説明:** グラフにおいて、バイアス点の表示/非表示を切り替える。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Measurement ),
	X( :Operator ),
	Part( :part# ),
	Standard( :Standard ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Standard Deviation" ),
	EMP MSA Analysis( :Measurement, Average Chart( 0 ), Dispersion Chart( 0 ) )
);
obj << (EMP MSA Analysis[1] << Linearity and Bias Results( 1, Show Bias Points( 1 ) ));
Wait( 1 );
obj << (EMP MSA Analysis[1] << Linearity and Bias Results( 1, Show Bias Points( 0 ) ));
Wait( 1 );
obj << (EMP MSA Analysis[1] << Linearity and Bias Results( 1, Show Bias Points( 1 ) ));

```

#### Show Fit Confidence Curves

**構文:** obj << (EMP MSA Analysis[number] << Linearity and Bias Results( 1, Show Fit Confidence Curves( state=0|1 )))

**説明:** グラフにおいて、回帰直線に対する信頼区間の曲線の表示/非表示を切り替える。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Measurement ),
	X( :Operator ),
	Part( :part# ),
	Standard( :Standard ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Standard Deviation" ),
	EMP MSA Analysis( :Measurement, Average Chart( 0 ), Dispersion Chart( 0 ) )
);
obj << (EMP MSA Analysis[1] << Linearity and Bias Results(
	1,
	Show Fit Confidence Curves( 1 )
));
Wait( 1 );
obj << (EMP MSA Analysis[1] << Linearity and Bias Results(
	1,
	Show Fit Confidence Curves( 0 )
));
Wait( 1 );
obj << (EMP MSA Analysis[1] << Linearity and Bias Results(
	1,
	Show Fit Confidence Curves( 1 )
));

```

#### Show Line of Fit

**構文:** obj << (EMP MSA Analysis[number] << Linearity and Bias Results( 1, Show Line of Fit( state=0|1 )))

**説明:** グラフにおいて、回帰直線の表示/非表示を切り替える。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Measurement ),
	X( :Operator ),
	Part( :part# ),
	Standard( :Standard ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Standard Deviation" ),
	EMP MSA Analysis( :Measurement, Average Chart( 0 ), Dispersion Chart( 0 ) )
);
obj << (EMP MSA Analysis[1] << Linearity and Bias Results( 1, Show Line of Fit( 1 ) ));
Wait( 1 );
obj << (EMP MSA Analysis[1] << Linearity and Bias Results( 1, Show Line of Fit( 0 ) ));
Wait( 1 );
obj << (EMP MSA Analysis[1] << Linearity and Bias Results( 1, Show Line of Fit( 1 ) ));

```

#### Show Overall Avg Bias Line

**構文:** obj << (EMP MSA Analysis[number] << Linearity and Bias Results( 1, Show Overall Avg Bias Line( state=0|1 )))

**説明:** グラフにおいて、全体平均バイアス線の表示/非表示を切り替える。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Measurement ),
	X( :Operator ),
	Part( :part# ),
	Standard( :Standard ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Standard Deviation" ),
	EMP MSA Analysis( :Measurement, Average Chart( 0 ), Dispersion Chart( 0 ) )
);
obj << (EMP MSA Analysis[1] << Linearity and Bias Results(
	1,
	Show Overall Avg Bias Line( 1 )
));
Wait( 1 );
obj << (EMP MSA Analysis[1] << Linearity and Bias Results(
	1,
	Show Overall Avg Bias Line( 0 )
));
Wait( 1 );
obj << (EMP MSA Analysis[1] << Linearity and Bias Results(
	1,
	Show Overall Avg Bias Line( 1 )
));

```

## EMP MSA Analysis

### 項目のメッセージ

#### AIAGゲージR&R分析

**構文:** obj << (EMP MSA Analysis[number] << "AIAG Gauge R&R Results"n( state=0|1 ))

**説明:** 測定システム分析のレポートの表示/非表示を切り替える。このレポートは、測定値のばらつきを、部品による変動と測定システムによる変動に分解した結果を示す。再現性に関する指標を計算する際に、交互作用も含めている。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	MSA Metadata(
		:Y(
			Lower Tolerance( 120 ),
			Upper Tolerance( 240 ),
			Tolerance Range( 120 ),
			Historical Process Sigma( 25 )
		)
	),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << "AIAG Gauge R&R Results"n( 1 ));

```

#### Apply Preset

**構文:** Apply Preset( preset ); Apply Preset( source, label, <Folder( folder {, folder2, ...} )> )

**説明:** 作成されたプリセットをオブジェクトに適用する。保存された設定に合わせてオプションとカスタマイズが更新される。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << Average Chart( 0 ));
obj << (EMP MSA Analysis[1] << Effective Resolution( 1 ));
obj << (EMP MSA Analysis[1] << Dispersion Chart( 1, Show Control Limits Shading( 0 ) ));
preset = obj << (EMP MSA Analysis[1] << New Preset);
dt2 = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj2 = dt2 << EMP Measurement Systems Analysis(
	Y( :Measurement ),
	MSA Metadata( :Measurement( Historical Process Sigma( 0.25 ) ) ),
	X( :Operator ),
	Part( :part# ),
	Standard( :Standard ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Standard Deviation" )
);
Wait( 1 );
obj2 << (EMP MSA Analysis[1] << Apply Preset( preset ));

```

#### Average Chart

**構文:** obj << (EMP MSA Analysis[number] << Average Chart( state=0|1 ))

**説明:** 部品変数とX変数の組み合わせごとに測定値の平均をプロットした図の表示/非表示を切り替える。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << Average Chart( 0 ));

```

#### Bias Comparison

**構文:** obj << (EMP MSA Analysis[number] << Bias Comparison( state=0|1 ))

**説明:** 平均分析において、チャートの表示/非表示を切り替える。このチャートは、X変数の平均が全体平均と異なるかどうかを検定した結果を示す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << Bias Comparison( 1 ));

```

#### Dispersion Chart

**構文:** obj << (EMP MSA Analysis[number] << Dispersion Chart( state=0|1 ))

**説明:** ばらつき図の表示/非表示を切り替える。デフォルトのばらつき図は、範囲図。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << Dispersion Chart( 0 ));

```

#### EMP Results

**構文:** obj << (EMP MSA Analysis[number] << EMP Results( state=0|1 ))

**説明:** 測定システムに関するレポートの表示/非表示を切り替える。このレポートには、測定システムの評価や分類に役立つ統計量がレポートされる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << EMP Results( 1 ));

```

#### EMPゲージR&R分析

**構文:** obj << (EMP MSA Analysis[number] << "EMP Gauge R&R Results"n( state=0|1 ))

**説明:** 測定システム分析のレポートの表示/非表示を切り替える。このレポートは、測定値のばらつきを、部品による変動と測定システムによる変動に分解した結果を示す。このレポートの計算は、範囲ではなく分散を使って行われる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << "EMP Gauge R&R Results"n( 1 ));

```

#### Edit MSA Metadata

**構文:** obj << (EMP MSA Analysis[number] << Linearity and Bias Results( state=0|1 ))

**説明:** すべての分析に対し、許容範囲・許容限界・履歴平均・履歴工程シグマを追加または編集するためのウィンドウを開く。レポートは自動的に更新される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	MSA Metadata( :Y( Lower Tolerance( 140 ), Upper Tolerance( 220 ) ) ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" ),
	EMP MSA Analysis( "Y", Misclassification Probabilities( 1 ) )
);
Wait( 1 );
obj << (EMP MSA Analysis[1] << Edit MSA Metadata(
	Lower Tolerance( 120 ),
	Upper Tolerance( 240 )
));

```

#### Effective Resolution

**構文:** obj << (EMP MSA Analysis[number] << Effective Resolution( state=0|1 ))

**説明:** 測定システムの分解能を示す表の表示/非表示を切り替える。この表は、測定単位や有効桁数がどの程度妥当であるかを判断するのに役立つ。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << Effective Resolution( 1 ));

```

#### Linearity and Bias Results

**構文:** obj << (EMP MSA Analysis[number] << Linearity and Bias Results( state=0|1 ))

**説明:** バイアスに関するレポートの表示/非表示を切り替える。このレポートは、基準をX変数、バイアスをY変数とした回帰分析のグラフと要約である。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Measurement ),
	MSA Metadata( :Measurement( Historical Process Sigma( 0.25 ) ) ),
	X( :Operator ),
	Part( :part# ),
	Standard( :Standard ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Standard Deviation" )
);
obj << (EMP MSA Analysis[1] << Linearity and Bias Results( 1 ));

```

#### Misclassification Probabilities

**構文:** obj << (EMP MSA Analysis[number] << Misclassification Probabilties( state=0|1 ))

**説明:** 誤分類率のレポートの表示/非表示を切り替える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	MSA Metadata( :Y( Lower Tolerance( 140 ), Upper Tolerance( 220 ) ) ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << Misclassification Probabilities( 1 ));

```

#### New Preset

**構文:** obj = New Preset()

**説明:** オブジェクトに適用されているオプションとカスタマイズをプリセットとしてまとめる。このオブジェクトをApply Presetに渡すことで、同じ種類のオブジェクトに設定をコピーすることができる。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << Average Chart( 0 ));
obj << (EMP MSA Analysis[1] << Effective Resolution( 1 ));
obj << (EMP MSA Analysis[1] << Dispersion Chart( 1, Show Control Limits Shading( 0 ) ));
preset = obj << (EMP MSA Analysis[1] << New Preset);

```

#### Parallelism Plots

**構文:** obj << (EMP MSA Analysis[number] << Parallelism Plots( state=0|1 ))

**説明:** 重ね合わせプロットの表示/非表示を切り替える。このプロットは、各部品の測定値の平均を示したグラフである。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << Parallelism Plots( 1 ));

```

#### Shift Detection Profiler

**構文:** obj << (EMP MSA Analysis[number] << Shift Detection Profiler( state=0|1 ))

**説明:** 警告の生じる確率を確認するためのプロファイルの表示/非表示を切り替える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << Shift Detection Profiler( 1 ));

```

#### Show Monitor Classification Legend

**構文:** obj << (EMP MSA Analysis[number] << Show Monitor Classification Legend( state=0|1 ))

**説明:** 「EMP分析」レポートにおいて、工程監視の等級を説明する凡例の表示/非表示を切り替える。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << EMP Results( 1 ));
Wait( 1 );
obj << (EMP MSA Analysis[1] << Show Monitor Classification Legend( 0 ));

```

#### Show Part Legend

**構文:** obj << (EMP MSA Analysis[number] << Show Part Legend( state=0|1 ))

**説明:** 平均図とばらつき図において、部品の凡例の表示/非表示を切り替える。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << Show Part Legend( 0 ));

```

#### Show Shift Detection Profiler Legend

**構文:** obj << (EMP MSA Analysis[number] << Show Shift Detection Profiler Legend( state=0|1 ))

**説明:** 変化検出プロファイルにおいて、凡例の表示/非表示を切り替える。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << Shift Detection Profiler( 1 ));
Wait( 1 );
obj << (EMP MSA Analysis[1] << Show Shift Detection Profiler Legend( 0 ));

```

#### Test-Retest Error Comparison

**構文:** obj << (EMP MSA Analysis[number] << "Test-Retest Error Comparison"n( state=0|1 ))

**説明:** 「分散の平均分析」チャートや「範囲の平均分析」チャートの表示/非表示を切り替える。これらのチャートは、グループに繰り返し誤差があるかどうかを検定する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << "Test-Retest Error Comparison"n( 1 ));

```

#### Variance Components

**構文:** obj << (EMP MSA Analysis[number] << Variance Components( state=0|1 ))

**説明:** 分散成分推定値の表の表示/非表示を切り替える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << Variance Components( 1 ));

```

