# Model Screening



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
dt = Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose )
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
dt = Open( "$Sample_Data/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	By( _bycol )
);
obj[1] << Copy ByGroup Script;

```

### Copy Script

**構文:** obj << Copy Script

**説明:** この分析を再現するJSLスクリプトを生成し、クリップボードにコピーする。

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose )
);
obj << Copy Script;

```

### Data Table Window

**構文:** obj << Data Table Window

**説明:** この分析に使用したデータテーブルのウィンドウを手前に表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose )
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
dt = Open( "$Sample_Data/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
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
dt = Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose )
);
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

### Get Data Table

**構文:** obj << Get Data Table

**説明:** データテーブルへの参照を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose )
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
dt = Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose )
);
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**構文:** obj << Get Script With Data Table

**説明:** この分析を再現するスクリプト(JSL)をデータテーブルへの参照も含めて生成し、それを式として戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose )
);
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**構文:** obj << Get Timing

**説明:** プラットフォームの起動にかかった時間を取得する。

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose )
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
dt = Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose )
);
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**構文:** obj << Redo ByGroup Analysis

**説明:** 同じ分析をやり直し新しいウィンドウに表示する。データが変更されていると分析結果は異なる。

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	By( _bycol )
);
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**構文:** obj << Relaunch Analysis

**説明:** プラットフォームの起動ウィンドウを開き、レポートを作成した時の設定を表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose )
);
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**構文:** obj << Relaunch ByGroup

**説明:** プラットフォームの起動ウィンドウを開き、レポートを作成した時の設定を表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
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
dt = Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose )
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
dt = Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose )
);
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**構文:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**説明:** 分析を再現するためのJSLスクリプトを作成し、データテーブルにテーブルプロパティとして保存する。スクリプトの名前を指定できる。Append Suffixオプションは、スクリプト名に数字の接尾辞を追加する。これにより、同名のスクリプトが存在していても区別できる。Promptオプションは、ユーザにスクリプト名の指定を促す。Replaceオプションは、同名の既存のスクリプトを置き換える。

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**構文:** obj << Save ByGroup Script to Journal

**説明:** この分析を再現するJSLスクリプトを生成し、ジャーナルにそのスクリプトのボタンを追加する。

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**構文:** obj << Save ByGroup Script to Script Window

**説明:** この分析を再現するJSLスクリプトを生成し、現在のスクリプトウィンドウに表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**構文:** obj << Save Script for All Objects

**説明:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose )
);
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**構文:** obj << Save Script for All Objects To Data Table( <name> )

**説明:** すべてのレポートオブジェクトを再現するスクリプトを現在のデータテーブルに保存する。このオプションは、ウィンドウ内にレポートが複数ある場合に便利。作成されるスクリプトの名前は、引用符で囲んで指定しない限り、1つ目のプラットフォーム名となる。

**例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table;

```

**例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**構文:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**説明:** この分析を再現するJSLスクリプトを生成し、データテーブルのテーブルプロパティとして保存する。

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose )
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**構文:** obj << Save Script to Journal

**説明:** この分析を再現するJSLスクリプトを生成し、ジャーナルにそのスクリプトのボタンを追加する。

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose )
);
obj << Save Script to Journal;

```

### Save Script to Report

**構文:** obj << Save Script to Report

**説明:** この分析を再現するJSLスクリプトを生成し、レポートウィンドウに表示する。分析手順の記録を結果と一緒に残せる。

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose )
);
obj << Save Script to Report;

```

### Save Script to Script Window

**構文:** obj << Save Script to Script Window

**説明:** この分析を再現するJSLスクリプトを生成し、現在のスクリプトウィンドウに表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose )
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
dt = Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose )
);
obj << Title( "My Platform" );

```

### Top Report

**構文:** obj << Top Report

**説明:** レポート内のルートノードへの参照を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose )
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

**構文:** obj = Model Screening(...Window View( "Visible"|"Invisible"|"Private" )...)

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

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	By( _bycol )
);

```

### Factor

**構文:** obj << Factor( column(s) )

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose )
);

```

### Freq

**構文:** obj << Freq( column )

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Diabetes.jmp" );
dt << New Column( "_freqcol", Numeric, Continuous, Formula( Random Integer( 1, 5 ) ) );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Freq( _freqcol )
);

```

### Response

**構文:** obj << Response( column(s) )

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose )
);

```

### Validation

**構文:** obj << Validation( column )

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose )
);

```

### Weight

**構文:** obj << Weight( column )

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Diabetes.jmp" );
dt << New Column( "_weightcol", Numeric, Continuous, Formula( Random Beta( 1, 1 ) ) );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Weight( _weightcol )
);

```

### X

**構文:** obj << X( column(s) )

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose )
);

```

### Y

**構文:** obj << Y( column(s) )

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose )
);

```

## 関連するコンストラクター

### Model Screening

**構文:** Model Screening( Y( column ), X( columns ) )

**説明:** 多数の異なる予測モデルをあてはめる。それらのモデルから最良のモデルを選択できる。

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose )
);

```

## 項目のメッセージ

### Add Quadratics

**構文:** obj = Model Screening(...Add Quadratics( state=0|1 )...)

**説明:** 線形モデルをあてはめる際に、その線形モデルに2乗項を追加する。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :LTG, :BMI, :BP, :Glucose, :HDL ),
	Add Quadratics( 1 )
);

```

### Add Two Way Interactions

**構文:** obj = Model Screening(...Add Two Way Interactions( state=0|1 )...)

**説明:** 線形モデルをあてはめる際に、その線形モデルに交互作用項を追加する。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :LTG, :BMI, :BP, :Glucose, :HDL ),
	Add Two Way Interactions( 1 )
);

```

### Additional Methods

**構文:** obj = Model Screening(...Additional Methods( state=0|1 )...)

**説明:** Lassoに加え、「一般化回帰」プラットフォームで用意されている、変数増加法、減少付き変数増加法、弾性ネット、リッジ回帰法も行う。す

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Additional Methods( 1 )
);

```

### Boosted Tree

**構文:** obj = Model Screening(...Boosted Tree( state=0|1 )...)

**説明:** 小さなツリーを逐次的にあてはめてディシジョンツリーを作成し、応答の予測値を求める。 デフォルトではオン。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Decision Tree( 0 ),
	Bootstrap Forest( 0 ),
	Boosted Tree( 1 ),
	K Nearest Neighbors( 0 ),
	Neural( 0 ),
	Support Vector Machines( 0 ),
	Fit Least Squares( 0 ),
	Fit Stepwise( 0 ),
	Generalized Regression( 0 )
);

```

### Bootstrap Forest

**構文:** obj = Model Screening(...Bootstrap Forest( state=0|1 )...)

**説明:** 無作為抽出した標本を使ってディシジョンツリーを作成する処理を何度も行い、結果を平均して応答の予測値を求める。 デフォルトではオン。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Decision Tree( 0 ),
	Bootstrap Forest( 1 ),
	Boosted Tree( 0 ),
	K Nearest Neighbors( 0 ),
	Neural( 0 ),
	Support Vector Machines( 0 ),
	Fit Least Squares( 0 ),
	Fit Stepwise( 0 ),
	Generalized Regression( 0 )
);

```

### Cardinality of Predictors

**構文:** obj << Cardinality of Predictors( state=0|1 )

**説明:** カテゴリカルな予測変数について、線形モデルで使用される水準数とパラメータ数を示したレポートの表示/非表示を切り替える。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Equity.jmp" );
Model Screening(
	Y( :BAD ),
	Validation( :Validation ),
	X(
		:LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO,
		:DEBTINC
	),
	Neural( 0 ),
	Bootstrap Forest( 0 ),
	Generalized Regression( 0 ),
	Support Vector Machines( 0 ),
	Cardinality of Predictors( 1 )
);

```

### Decision Threshold

**構文:** obj << Decision Threshold( state = 0|1, Set Probability Threshold( number ) )

**説明:** 各モデルの予測確率の分布や、予測値と実測値の表の表示/非表示を切り替える。確率の閾値を変更すると、分類の結果にどのように影響するかが確認できる。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y Binary ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Decision Tree( 0 ),
	Bootstrap Forest( 0 ),
	Boosted Tree( 1 ),
	K Nearest Neighbors( 0 ),
	Naive Bayes( 0 ),
	Neural( 1 ),
	Support Vector Machines( 0 ),
	Fit Stepwise( 0 ),
	Logistic Regression( 1 ),
	Generalized Regression( 1 ),
	Decision Threshold( 1 )
);

```

### Decision Tree

**構文:** obj = Model Screening(...Decision Tree( state=0|1 )...)

**説明:** ディシジョンツリーを作成して応答の予測値を求める。 デフォルトではオン。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Decision Tree( 1 ),
	Bootstrap Forest( 0 ),
	Boosted Tree( 0 ),
	K Nearest Neighbors( 0 ),
	Neural( 0 ),
	Support Vector Machines( 0 ),
	Fit Least Squares( 0 ),
	Fit Stepwise( 0 ),
	Generalized Regression( 0 )
);

```

### Discriminant

**構文:** obj = Model Screening(...Discriminant( state=0|1 )...)

**説明:** 連続量の変数に基づいて、カテゴリカルなグループに属する確率を求める。 デフォルトではオン。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Iris.jmp" );
Make Validation Column( Validation Set( .3 ), Training Set( .7 ), Go );
obj = Model Screening(
	Y( :Species ),
	Validation( :Validation ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Discriminant( 1 ),
	Decision Tree( 0 ),
	Bootstrap Forest( 0 ),
	Boosted Tree( 0 ),
	K Nearest Neighbors( 0 ),
	Naive Bayes( 0 ),
	Neural( 0 ),
	Support Vector Machines( 0 ),
	Fit Stepwise( 0 ),
	Logistic Regression( 0 ),
	Generalized Regression( 0 )
);

```

### Elapsed Time

**構文:** obj << Elapsed Time( state=0|1 )

**説明:** 各手法の計算時間を示したレポートの表示/非表示を切り替える。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Elapsed Time( 1 )
);

```

### Fit Least Squares

**構文:** obj = Model Screening(...Fit Least Squares( state=0|1 )...)

**説明:** 連続尺度の応答変数に線形回帰モデルをあてはめる。手法には、回帰分析、分散分析、共分散分析、混合モデル、実験計画分析がある。「強調点」のオプションを使って、レポートのレイアウトを指定できる。 デフォルトではオン。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Decision Tree( 0 ),
	Bootstrap Forest( 0 ),
	Boosted Tree( 0 ),
	K Nearest Neighbors( 0 ),
	Neural( 0 ),
	Support Vector Machines( 0 ),
	Fit Least Squares( 1 ),
	Fit Stepwise( 0 ),
	Generalized Regression( 0 )
);

```

### Fit Stepwise

**構文:** obj = Model Screening(...Fit Stepwise( state=0|1 )...)

**説明:** ステップワイズ法による変数選択を行う。この手法では、標準最小2乗法、順序ロジスティックモデル、2値応答の名義ロジスティックモデルにおいて、ステップワイズ法による変数選択を行える。 デフォルトではオン。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Decision Tree( 0 ),
	Bootstrap Forest( 0 ),
	Boosted Tree( 0 ),
	K Nearest Neighbors( 0 ),
	Neural( 0 ),
	Support Vector Machines( 0 ),
	Fit Least Squares( 0 ),
	Fit Stepwise( 1 ),
	Generalized Regression( 0 )
);

```

### Generalized Regression

**構文:** obj = Model Screening(...Generalized Regression( state=0|1 )...)

**説明:** 罰則付き回帰手法を用いて一般化線形モデルをあてはめる。この手法では、オーバーフィットを回避しながら変数選択を自動化することができる。罰則付き回帰手法には、LASSO、適応型LASSO、弾性ネット、適応型弾性ネット、リッジ回帰がある。応答変数に設定できる変数としては、連続尺度の変数、カテゴリカルな変数、度数である変数、イベントまでの時間(生存時間や故障時間)がある。この機能は、回帰分析を適用するほとんどの状況で推奨される手法である。 デフォルトではオン。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Decision Tree( 0 ),
	Bootstrap Forest( 0 ),
	Boosted Tree( 0 ),
	K Nearest Neighbors( 0 ),
	Neural( 0 ),
	Support Vector Machines( 0 ),
	Fit Least Squares( 0 ),
	Fit Stepwise( 0 ),
	Generalized Regression( 1 )
);

```

### Informative Missing

**構文:** obj = Model Screening(...Informative Missing( state=0|1 )...)

**説明:** すべてのプラットフォームに対し、[欠測値をカテゴリとして扱う]オプションを有効にする。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Equity.jmp" );
Model Screening(
	Y( :BAD ),
	Validation( :Validation ),
	X(
		:LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO,
		:DEBTINC
	),
	Neural( 0 ),
	Informative Missing( 1 )
);

```

### K Fold Crossvalidation

**構文:** obj = Model Screening(...K Fold Crossvalidation( state=0|1 )...)

**説明:** K個のグループにランダムにデータを分割する。そして、データにK回モデルをあてはめ、その際、毎回、異なる1つのグループを検証セットに用いる。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	K Fold Crossvalidation( 1 ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Neural( 0 ),
	Support Vector Machines( 0 )
);

```

### K Nearest Neighbors

**構文:** obj = Model Screening(...K Nearest Neighbors( state=0|1 )...)

**説明:** k個の近傍点の応答から応答変数の予測値を求める。 デフォルトではオン。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Decision Tree( 0 ),
	Bootstrap Forest( 0 ),
	Boosted Tree( 0 ),
	K Nearest Neighbors( 1 ),
	Neural( 0 ),
	Support Vector Machines( 0 ),
	Fit Least Squares( 0 ),
	Fit Stepwise( 0 ),
	Generalized Regression( 0 )
);

```

### K for K Fold

**構文:** obj = Model Screening(...K for K Fold( number=5 )...)

**説明:** K分割交差検証の分割数(グループ数)。デフォルトの値は5。1より大きい値を指定する必要がある。 デフォルトの値は"5"。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	K Fold Crossvalidation( 1 ),
	K for K Fold( 6 ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Neural( 0 ),
	Support Vector Machines( 0 )
);

```

### K for Nested

**構文:** obj = Model Screening(...K for Nested( number=5 )...)

**説明:** 入れ子式交差検証の分割数(グループ数)。デフォルトの値は5。1より大きい値を指定する必要がある。 デフォルトの値は"5"。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Nested Crossvalidation( 1 ),
	K for Nested( 3 ),
	L for Nested( 4 ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Neural( 0 ),
	Support Vector Machines( 0 )
);

```

### L for Nested

**構文:** obj = Model Screening(...L for Nested( number=4 )...)

**説明:** 入れ子式交差検証の内側分割の数(グループ数)。デフォルトの値は4。1より大きい値を指定する必要がある。 デフォルトの値は"4"。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Nested Crossvalidation( 1 ),
	K for Nested( 5 ),
	L for Nested( 4 ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Neural( 0 ),
	Support Vector Machines( 0 )
);

```

### Log Methods

**構文:** obj = Model Screening(...Log Methods( state=0|1 )...)

### Logistic Regression

**構文:** obj = Model Screening(...Logistic Regression( state=0|1 )...)

**説明:** 連続変数やカテゴリカルな変数を説明変数とした、名義尺度の応答変数に対するロジスティック回帰モデルをあてはめる。 デフォルトではオン。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y Binary ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Decision Tree( 0 ),
	Bootstrap Forest( 0 ),
	Boosted Tree( 0 ),
	K Nearest Neighbors( 0 ),
	Naive Bayes( 0 ),
	Neural( 0 ),
	Support Vector Machines( 0 ),
	Fit Stepwise( 0 ),
	Logistic Regression( 1 ),
	Generalized Regression( 0 )
);

```

### Model NParm Limit

**構文:** obj << Model NParm Limit( number=450 )

**説明:** 各モデルについて、モデルのパラメータ数がこの値を超えると、そのモデルをあてはめるプラットフォームは実行されない。 デフォルトの値は"450"。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Add Two Way Interactions( 1 ),
	Add Quadratics( 1 ),
	Model NParm Limit( 40 ),
	Decision Tree( 0 ),
	Bootstrap Forest( 0 ),
	Boosted Tree( 0 ),
	K Nearest Neighbors( 0 ),
	Naive Bayes( 0 ),
	Fit Least Squares( 1 ),
	Neural( 0 ),
	Support Vector Machines( 0 ),
	Fit Stepwise( 0 ),
	Logistic Regression( 0 ),
	Generalized Regression( 0 )
);

```

### Naive Bayes

**構文:** obj = Model Screening(...Naive Bayes( state=0|1 )...)

**説明:** カテゴリカル変数の各水準に属する確率を求める。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y Binary ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Decision Tree( 0 ),
	Bootstrap Forest( 0 ),
	Boosted Tree( 0 ),
	K Nearest Neighbors( 0 ),
	Naive Bayes( 1 ),
	Neural( 0 ),
	Support Vector Machines( 0 ),
	Fit Stepwise( 0 ),
	Logistic Regression( 0 ),
	Generalized Regression( 0 ), 

);

```

### Nested Crossvalidation

**構文:** obj = Model Screening(...Nested Crossvalidation( state=0|1 )...)

**説明:** K個の等しいグループにランダムにデータを分割し、1つのグループを除くすべてをさらにL個の等しいグループに分割する。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Nested Crossvalidation( 1 ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Neural( 0 ),
	Support Vector Machines( 0 )
);

```

### Neural

**構文:** obj = Model Screening(...Neural( state=0|1 )...)

**説明:** 入力変数の関数を使用して柔軟なモデルをあてはめ、1つまたは複数の応答変数を予測する。 デフォルトではオン。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Decision Tree( 0 ),
	Bootstrap Forest( 0 ),
	Boosted Tree( 0 ),
	K Nearest Neighbors( 0 ),
	Neural( 1 ),
	Support Vector Machines( 0 ),
	Fit Least Squares( 0 ),
	Fit Stepwise( 0 ),
	Generalized Regression( 0 )
);

```

### Partial Least Squares

**構文:** obj = Model Screening(...Partial Least Squares( state=0|1 )...)

**説明:** 潜在因子を使って1つまたは複数の応答変数にモデルをあてはめる。この手法では、説明変数の間に高い相関がある場合や、説明変数の個数が標本サイズより多い場合でもモデルがあてはめられる。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Decision Tree( 0 ),
	Bootstrap Forest( 0 ),
	Boosted Tree( 0 ),
	K Nearest Neighbors( 0 ),
	Neural( 0 ),
	Support Vector Machines( 0 ),
	Fit Least Squares( 0 ),
	Fit Stepwise( 0 ),
	Generalized Regression( 0 ),
	Partial Least Squares( 1 )
);

```

### Plot Actual by Predicted

**構文:** obj << Plot Actual by Predicted( state=0|1 )

**説明:** 複数のモデルの「予測値と実測値のプロット」を、重ね合わせて描く。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Decision Tree( 0 ),
	Bootstrap Forest( 1 ),
	Boosted Tree( 1 ),
	K Nearest Neighbors( 0 ),
	Neural( 0 ),
	Support Vector Machines( 0 ),
	Fit Least Squares( 0 ),
	Fit Stepwise( 1 ),
	Generalized Regression( 1 ),
	Plot Actual by Predicted( 1 )
);

```

### Precision Recall Curve

**構文:** obj << Precision Recall Curve( state=0|1 )

**説明:** すべてのモデルに対するPR曲線の表示/非表示を切り替える。学習セット・検証セット・テストセットの曲線がプロットされる。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );

dt = Open( "$Sample_Data/Diabetes.jmp" );
obj = dt << Model Screening(
	Y( :Y Binary ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Decision Tree( 0 ),
	Bootstrap Forest( 0 ),
	Boosted Tree( 0 ),
	K Nearest Neighbors( 0 ),
	Naive Bayes( 0 ),
	Neural( 1 ),
	Support Vector Machines( 0 ),
	Fit Stepwise( 0 ),
	Logistic Regression( 1 ),
	Generalized Regression( 1 ),

);
obj << Precision Recall Curve( 1 );

```

### Predictor Properties

**構文:** obj << Predictor Properties( state=0|1 )

**説明:** Available if you hold down the shift button, for each platform called, shows information about supported interfaces.

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Neural( 0 ),
	Support Vector Machines( 0 ),
	Predictor Properties( 1 )
);

```

### Profiler

**構文:** obj << Profiler( state=0|1 )

**説明:** 予測プロファイルの表示/非表示を切り替える。このオプションは、応答変数が連続尺度である場合にのみ使用可能。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Decision Tree( 0 ),
	Bootstrap Forest( 0 ),
	Boosted Tree( 1 ),
	K Nearest Neighbors( 0 ),
	Neural( 1 ),
	Support Vector Machines( 0 ),
	Fit Least Squares( 0 ),
	Fit Stepwise( 0 ),
	Generalized Regression( 1 ),
	Profiler( 1 )
);

```

### ROC Curve

**構文:** obj << ROC Curve( state=0|1 )

**説明:** すべてのモデルに対する受診者動作特性(ROC)曲線の表示/非表示を切り替える。学習セット・検証セット・テストセットの曲線がプロットされる。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y Binary ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Decision Tree( 0 ),
	Bootstrap Forest( 0 ),
	Boosted Tree( 0 ),
	K Nearest Neighbors( 0 ),
	Naive Bayes( 0 ),
	Neural( 1 ),
	Support Vector Machines( 0 ),
	Fit Stepwise( 0 ),
	Logistic Regression( 1 ),
	Generalized Regression( 1 ),
	ROC Curve( 1 )
);

```

### Remove Live Reports

**構文:** obj = Model Screening(...Remove Live Reports( state=0|1 )...)

**説明:** 「モデルのスクリーニング」レポートウィンドウから個別のモデルのレポートを削除する。このオプションを使用すると、メモリが解放され、今後の作業がしやすくなる。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	K Fold Crossvalidation( 1 ),
	Remove Live Reports( 1 ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Neural( 0 ),
	Support Vector Machines( 0 )
);

```

### Repeated K Fold

**構文:** obj = Model Screening(...Repeated K Fold( number=0 )...)

**説明:** K分割交差検証や入れ子式交差検証の反復回数を指定する。 デフォルトの値は"0"。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Repeated K Fold( 2 ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Neural( 0 ),
	Support Vector Machines( 0 )
);

```

### SVM NRow Limit

**構文:** obj << SVM NRow Limit( number=10000 )

**説明:** データの行数がこの値を超えると、サポートベクトルマシンは実行されない。 デフォルトの値は"10000"。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Equity.jmp" );
Model Screening(
	Y( :BAD ),
	Validation( :Validation ),
	X(
		:LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO,
		:DEBTINC
	),
	Decision Tree( 1 ),
	Bootstrap Forest( 0 ),
	Boosted Tree( 0 ),
	K Nearest Neighbors( 0 ),
	Neural( 0 ),
	Support Vector Machines( 1 ),
	Fit Least Squares( 0 ),
	Fit Stepwise( 0 ),
	Generalized Regression( 0 ),
	SVM NRow Limit( 6000 )
);

```

### Save Folded Prediction Formula

**構文:** obj << Save Folded Prediction Formula

**説明:** 元のデータテーブルに新しい列を作成し、K分割交差検証のリークフリーな予測式を保存する。この式は、各行の予測式において、その行を使用して学習したモデルの推定結果を使用しない。

### Save KFold Results Table

**構文:** obj << Save KFold Results Table

**説明:** 「分割全体の要約」レポートの情報を、新しいデータテーブルに保存する。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	K Fold Crossvalidation( 1 ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Decision Tree( 0 ),
	Bootstrap Forest( 1 ),
	Boosted Tree( 1 ),
	K Nearest Neighbors( 0 ),
	Neural( 0 ),
	Support Vector Machines( 0 ),
	Fit Least Squares( 0 ),
	Fit Stepwise( 0 ),
	Generalized Regression( 1 ),
	Save KFold Results Table
);

```

### Save Prediction Formulas

**構文:** obj << Save Prediction Formulas

**説明:** 予測式をデータテーブルに保存する。

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Decision Tree( 0 ),
	Bootstrap Forest( 0 ),
	Boosted Tree( 1 ),
	K Nearest Neighbors( 0 ),
	Naive Bayes( 0 ),
	Fit Least Squares( 1 ),
	Neural( 0 ),
	Support Vector Machines( 0 ),
	Fit Stepwise( 0 ),
	Logistic Regression( 0 ),
	Generalized Regression( 0 )
);
obj << Select Fit( "Training", "Best" );
obj << Save Prediction Formulas;

```

### Save Results Table

**構文:** obj << Save Results Table

**説明:** 検証データに対する結果を、新しいデータテーブルに保存する。テストデータがある場合は、テストデータに対する結果も新しいデータテーブルに保存する。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Save Results Table
);

```

### Select Fit

**構文:** <<Select Fit( Training | Validation | Test | Summary | Clear All,

	  Clear

	| Dominant

	| Best(<number>),

	| Largest(name,<number>) 

	| Smallest(name,<number>)

	| Where(expression) )

**説明:** 各種レポートにおいて、指定された統計量に基づき、モデルを選択する。このコマンドは、JSLでのみ使用できる。

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose )
);
obj << Select Fit( Validation, Largest( "RSquare", 2 ) );

```

### Set Probability Threshold

**構文:** obj << Set Probability Threshold( number=0.5 )

**説明:** 各モデルについて、モデルのパラメータ数がこの値を超えると、そのモデルをあてはめるプラットフォームは実行されない。 デフォルトの値は"0.5"。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y Binary ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Decision Tree( 0 ),
	Bootstrap Forest( 0 ),
	Boosted Tree( 1 ),
	K Nearest Neighbors( 0 ),
	Naive Bayes( 0 ),
	Neural( 0 ),
	Support Vector Machines( 0 ),
	Fit Stepwise( 0 ),
	Logistic Regression( 1 ),
	Generalized Regression( 1 ),
	Decision Threshold( 1 ),
	Set Probability Threshold( .2 )
);

```

### Set Random Seed

**構文:** obj = Model Screening(...Set Random Seed( number )...)

**説明:** 乱数シード値を指定する。乱数シード値を指定することにより、今後プラットフォームを起動したときに同じ結果を再現できる。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Set Random Seed( 123454321 )
);

```

### Show Methods in Log

**構文:** obj = Model Screening(...Show Methods in Log( state=0|1 )...)

**説明:** 各モデルのプラットフォームが呼び出されるたびに、ログに進行状況メッセージを書き出す。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y Binary ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Log Methods( 1 )
);

```

### Show Profit

**構文:** obj << Show Profit( state=0|1 )

**説明:** 応答の水準に対して指定された利益行列を使い、各モデルの期待利益を求める。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
Column( "Y Binary" ) << Set Property(
	"Profit Matrix", {[1 - 1, -0.3333333 1, . .], {"Low", "High", "Undecided"}}
);
obj = Model Screening(
	Y( :Y Binary ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Decision Tree( 0 ),
	Bootstrap Forest( 0 ),
	Boosted Tree( 0 ),
	K Nearest Neighbors( 0 ),
	Naive Bayes( 0 ),
	Neural( 1 ),
	Support Vector Machines( 0 ),
	Fit Stepwise( 0 ),
	Logistic Regression( 1 ),
	Generalized Regression( 1 ),
	Show Profit( 1 )
);

```

### Specify Profit Matrix

**構文:** obj << Specify Profit Matrix

**説明:** 正分類および誤分類した時の利益およびコストを指定する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Model Screening(
	Y( :marital status ),
	X( :sex, :age, :country, :type, :size ),
	Decision Tree( 0 ),
	Bootstrap Forest( 0 ),
	Boosted Tree( 0 ),
	K Nearest Neighbors( 0 ),
	Naive Bayes( 0 ),
	Neural( 1 ),
	Support Vector Machines( 0 ),
	Fit Stepwise( 0 ),
	Logistic Regression( 1 ),
	Generalized Regression( 1 ),
	Specify Profit Matrix( [0 -1, -0.6 0, . .], "Married", "Single", "Undecided" ),
	Show Profit( 1 )
);

```

### Support Vector Machines

**構文:** obj = Model Screening(...Support Vector Machines( state=0|1 )...)

**説明:** X変数の空間におけるサポートベクトルに基づき、応答を予測する。 デフォルトではオン。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Decision Tree( 0 ),
	Bootstrap Forest( 0 ),
	Boosted Tree( 0 ),
	K Nearest Neighbors( 0 ),
	Neural( 0 ),
	Support Vector Machines( 1 ),
	Fit Least Squares( 0 ),
	Fit Stepwise( 0 ),
	Generalized Regression( 0 )
);

```

### Time Limit Each

**構文:** obj = Model Screening(...Time Limit Each( number )...)

**説明:** 各モデルの計算時間に対する上限を秒数で指定する。なお、早期停止をサポートしているプラットフォームの場合は、その時点における最良の推定値が表示される。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Equity.jmp" );
Model Screening(
	Y( :BAD ),
	Validation( :Validation ),
	X(
		:LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO,
		:DEBTINC
	),
	Time Limit Each( 1 )
);

```

### Use Two Way Splits for K Fold

**構文:** obj = Model Screening(...Use Two Way Splits for K Fold( state=0|1 )...)

**説明:** Uses only training and validation splits instead of training, validation, and test splits.

**JMP追加されたバージョン:** 19

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	K Fold Crossvalidation( 1 ),
	Use Two Way Splits for K Fold( 1 ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Neural( 0 ),
	Support Vector Machines( 0 )
);

```

### XGBoost

**構文:** obj = Model Screening(...XGBoost( state=0|1 )...)

**説明:** 勾配ブースティングのためにXGBoostを呼び出す。このオプションは、XGBoostアドインがインストールされている場合のみ表示されます。

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Decision Tree( 0 ),
	Bootstrap Forest( 0 ),
	Boosted Tree( 0 ),
	K Nearest Neighbors( 0 ),
	Neural( 0 ),
	Support Vector Machines( 0 ),
	Fit Least Squares( 0 ),
	Fit Stepwise( 0 ),
	Generalized Regression( 0 ),
	XGBoost( 1 )
);

```

