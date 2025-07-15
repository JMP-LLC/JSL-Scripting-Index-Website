# Neural



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
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	By( _bycol ),
	Go
);
obj[1] << Copy ByGroup Script;

```

### Copy Script

**構文:** obj &lt;&lt; Copy Script

**説明:** この分析を再現するJSLスクリプトを生成し、クリップボードにコピーする。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
obj << Copy Script;

```

### Data Table Window

**構文:** obj &lt;&lt; Data Table Window

**説明:** この分析に使用したデータテーブルのウィンドウを手前に表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
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
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	By( _bycol ),
	Go
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
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

### Get Data Table

**構文:** obj &lt;&lt; Get Data Table

**説明:** データテーブルへの参照を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
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
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**構文:** obj &lt;&lt; Get Script With Data Table

**説明:** この分析を再現するスクリプト(JSL)をデータテーブルへの参照も含めて生成し、それを式として戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**構文:** obj &lt;&lt; Get Timing

**説明:** プラットフォームの起動にかかった時間を取得する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
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
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**構文:** obj &lt;&lt; Redo ByGroup Analysis

**説明:** 同じ分析をやり直し新しいウィンドウに表示する。データが変更されていると分析結果は異なる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	By( _bycol ),
	Go
);
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**構文:** obj &lt;&lt; Relaunch Analysis

**説明:** プラットフォームの起動ウィンドウを開き、レポートを作成した時の設定を表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**構文:** obj &lt;&lt; Relaunch ByGroup

**説明:** プラットフォームの起動ウィンドウを開き、レポートを作成した時の設定を表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	By( _bycol ),
	Go
);
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
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
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
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**構文:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**説明:** 分析を再現するためのJSLスクリプトを作成し、データテーブルにテーブルプロパティとして保存する。スクリプトの名前を指定できる。Append Suffixオプションは、スクリプト名に数字の接尾辞を追加する。これにより、同名のスクリプトが存在していても区別できる。Promptオプションは、ユーザにスクリプト名の指定を促す。Replaceオプションは、同名の既存のスクリプトを置き換える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	By( _bycol ),
	Go
);
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**構文:** obj &lt;&lt; Save ByGroup Script to Journal

**説明:** この分析を再現するJSLスクリプトを生成し、ジャーナルにそのスクリプトのボタンを追加する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	By( _bycol ),
	Go
);
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**構文:** obj &lt;&lt; Save ByGroup Script to Script Window

**説明:** この分析を再現するJSLスクリプトを生成し、現在のスクリプトウィンドウに表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	By( _bycol ),
	Go
);
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**構文:** obj &lt;&lt; Save Script for All Objects

**説明:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**構文:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**説明:** すべてのレポートオブジェクトを再現するスクリプトを現在のデータテーブルに保存する。このオプションは、ウィンドウ内にレポートが複数ある場合に便利。作成されるスクリプトの名前は、引用符で囲んで指定しない限り、1つ目のプラットフォーム名となる。

**例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	By( _bycol ),
	Go
);
obj[1] << Save Script for All Objects To Data Table;

```

**例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	By( _bycol ),
	Go
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**構文:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**説明:** この分析を再現するJSLスクリプトを生成し、データテーブルのテーブルプロパティとして保存する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**構文:** obj &lt;&lt; Save Script to Journal

**説明:** この分析を再現するJSLスクリプトを生成し、ジャーナルにそのスクリプトのボタンを追加する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
obj << Save Script to Journal;

```

### Save Script to Report

**構文:** obj &lt;&lt; Save Script to Report

**説明:** この分析を再現するJSLスクリプトを生成し、レポートウィンドウに表示する。分析手順の記録を結果と一緒に残せる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
obj << Save Script to Report;

```

### Save Script to Script Window

**構文:** obj &lt;&lt; Save Script to Script Window

**説明:** この分析を再現するJSLスクリプトを生成し、現在のスクリプトウィンドウに表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
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
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
obj << Title( "My Platform" );

```

### Top Report

**構文:** obj &lt;&lt; Top Report

**説明:** レポート内のルートノードへの参照を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
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

**構文:** obj = Neural(...Window View( "Visible"|"Invisible"|"Private" )...)

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

**構文:** obj = Neural(...&lt;By( column(s) )&gt;...)

**説明:** 指定された列の各水準に対して、個別に分析を実行する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	By( _bycol ),
	Go
);

```

### Factor

**構文:** obj = Neural(...Factor( column(s) )...)

**説明:** 予測変数(説明変数)を指定する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);

```

### Freq

**構文:** obj = Neural(...&lt;Freq( column )&gt;...)

**説明:** 分析の際に各行の度数として用いる値の列を指定する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "_freqcol", Numeric, Continuous, Formula( Random Integer( 1, 5 ) ) );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Freq( _freqcol ),
	Go
);

```

### Response

**構文:** obj = Neural(...Response( column(s) )...)

**説明:** 分析したい応答変数を指定する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);

```

### Validation

**構文:** obj = Neural(...&lt;Validation( column )&gt;...)

**説明:** 検証セットを定義する数値列を指定する。異なる値が3つ以下の列でなければならない。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation )
);
obj << Go;

```

### X

**構文:** obj = Neural(...X( column(s) )...)

**説明:** 予測変数(説明変数)を指定する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);

```

### Y

**構文:** obj = Neural(...Y( column(s) )...)

**説明:** 分析したい応答変数を指定する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);

```

## 関連するコンストラクター

### Neural

**構文:** Neural( Y( column ), X( columns ), &lt;Validation( column )&gt; )

**説明:** 入力変数の関数を使用して柔軟なモデルをあてはめ、1つまたは複数の応答変数を予測する。柔軟なフレームワークには、隠れ層や、複数のS字型関数の組み合わせが含まれる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);

```

## 項目のメッセージ

### Fit

**構文:** obj &lt;&lt; Fit( NTanH|NLinear|NTanH2|NLinear2|NGaussian|NGaussian2( number ) )

**説明:** ニューラルネットワークの隠れ層を指定し、データにあてはめる。複数層の指定、および、TanH以外の活性化関数はJMP Proでのみ使用可能。複数層と活性化関数を指定するには、引数をカンマで区切って入力する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose )
);
obj << Fit( NTanH( 4 ) );

```

### Go

**構文:** obj &lt;&lt; Go

**説明:** ニューラルネットモデルのあてはめを開始する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose )
);
Wait( 1 );
obj << Go;

```

### Informative Missing

**構文:** obj = Neural(...Informative Missing( state=0|1 )...)

**説明:** 欠測値の補完およびコード化を有効にする。このオプションが選択されていない場合、欠測値のある行は無視される。



連続変数の場合、欠測値は変数の平均で置き換えられるとともに、欠測値に対する指数変数が作成され、モデルに含まれる。



カテゴリカル変数の場合、欠測値は補完されず、モデルにおいて変数の別の水準として扱われる。 このオプションはJMP Proでのみ使用可能。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:age[3] = .;
obj = dt << Neural( Y( :weight ), X( :height, :age ), Informative Missing( 1 ), Go );

```

### Learning Rate

**構文:** obj &lt;&lt; Learning Rate( fraction )

**説明:** ブースティングの学習率を指定する。1に近い値を指定すると、最終的なモデルに速く収束するが、過剰適合(オーバーフィット)になる傾向が高まる。 このオプションはJMP Proでのみ使用可能。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	N Boost( 2 )
);
obj << Learning Rate( 0.2 );
obj << Go;
obj << SendToReport( Dispatch( {}, "Model Launch", OutlineBox, {Close( 0 )} ) );

```

### Multithreading

**構文:** obj = Neural(...Multithreading( state=0|1 )...)

**説明:** コンピュータで使用可能なスレッドに、計算を分割する。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Multithreading( 0 )
);
obj << Go;

```

### N Boost

**構文:** obj &lt;&lt; N Boost( number )

**説明:** ブースティングに使用する最大モデル数を指定する。 このオプションはJMP Proでのみ使用可能。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose )
);
obj << N Boost( 2 );
obj << Go;
obj << SendToReport( Dispatch( {}, "Model Launch", OutlineBox, {Close( 0 )} ) );

```

### Penalty Method

**構文:** obj &lt;&lt; Penalty Method( "2乗"|"絶対"|"重み減衰"|"ペナルティなし" )

**説明:** ニューラルネットワークにおいて、尤度に対してペナルティ(罰則)を課す際のペナルティ手法を指定する。ペナルティパラメータにより、データに対する過剰適合(オーバーフィット)が軽減する。ほとんどのX変数がモデルの予測に寄与すると推測される場合は、[2乗]が有効。X変数の数が多く、X変数の少数だけが予測に寄与すると考えられる場合は、[絶対]および[重み減衰]が有効。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose )
);
obj << Penalty Method( "Absolute" );
obj << Go;
obj << SendToReport( Dispatch( {}, "Model Launch", OutlineBox, {Close( 0 )} ) );

```

### Robust Fit

**構文:** obj &lt;&lt; Robust Fit( state=0|1 )

**説明:** 最小2乗法ではなく最小絶対偏差を使用してモデルの学習を行う。このオプションは、応答値における外れ値の影響を最小化したい場合に有効。このオプションは、JMP Proで連続尺度の応答変数を使用している場合のみ利用可能。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose )
);
obj << Robust Fit( 1 );
obj << Go;
obj << SendToReport( Dispatch( {}, "Model Launch", OutlineBox, {Close( 0 )} ) );

```

### Set Random Seed

**構文:** obj = Neural(...Set Random Seed( number )...)

**説明:** データ分割と学習の開始値に使われる乱数の乱数シード値を指定する。乱数シード値を指定すると、後から、検証データの割り当ておよび学習の開始値を再現できる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Set Random Seed( 1234 )
);
Wait( 1 );
obj << Go;

```

### Transform Covariates

**構文:** obj &lt;&lt; Transform Covariates( state=0|1 )

**説明:** Johnson Su分布とJohnson Sb分布のいずれかを使って、すべての連続変数を正規分布に近づくように変換する。連続変数の変換は、外れ値や極端に歪んだ分布による影響を小さくするのに役立つ。 このオプションはJMP Proでのみ使用可能。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose )
);
obj << Transform Covariates( 1 );
obj << Go;
obj << SendToReport( Dispatch( {}, "Model Launch", OutlineBox, {Close( 0 )} ) );

```

### Validation Method

**構文:** obj = Neural(...Validation Method( "Excluded Rows Holdback"|"Holdback", &lt;fraction = 0.3333&gt;|"KFold", &lt;number = 5&gt; )...);

**説明:** モデル検証に使用する手法を指定する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation Method( "Holdback", 0.4 ),
	Go
);

```

## Neural Fit

### 項目のメッセージ

#### Categorical Profiler

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Categorical Profiler( state=0|1 ))

**説明:** カテゴリカルな予測プロファイルの表示/非表示を切り替える。このプロファイルでは、カテゴリカルな応答すべてが1行に表示される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
obj << (Fit[1] << Categorical Profiler( 1 ));

```

#### Contour Profiler

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Contour Profiler( state=0|1 ))

**説明:** 等高線プロファイルの表示/非表示を切り替える。等高線プロファイルは、2因子ずつに対して、応答変数の予測値を等高線で描いたグラフである。モデルに連続尺度の因子が2つ以上含まれている場合のみ利用可能。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
obj << (Fit[1] << Contour Profiler( 1 ));

```

#### Decision Threshold

**構文:** obj &lt;&lt; fit([number] &lt;&lt; Decision Threshold( state = 0|1, Set Probability Threshold( number ) ))

**説明:** 各モデルの予測確率の分布や、予測値と実測値の表の表示/非表示を切り替える。確率の閾値を変更すると、分類の結果にどのように影響するかが確認できる。

**JMP追加されたバージョン:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
Wait( 0 );
obj << (Fit[1] << Decision Threshold( 1 ));
Wait( 1 );
obj << (Fit[1] << Decision Threshold( 1, Set Probability Threshold( .7 ) ));

```

#### Diagram

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Diagram( state=0|1 ))

**説明:** 隠れ層の構造を示すダイヤグラムの表示/非表示を切り替える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
obj << (Fit[1] << Diagram( 1 ));

```

#### Get Average Absolute Error Test

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Get Average Absolute Error Test)

**説明:** テストセットの平均絶対偏差統計量を戻す。 このオプションはJMP Proで検証セットを使用している場合のみ利用可能。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Equity.jmp" );
obj = dt << Neural(
	Y( :BAD ),
	X(
		:LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO,
		:DEBTINC
	),
	Validation( :Validation ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
ae = obj << (Fit[1] << Get Average Absolute Error Test);
Show( ae );

```

#### Get Average Absolute Error Training

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Get Average Absolute Error Training)

**説明:** 学習セットの平均絶対偏差統計量を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
ae = obj << (Fit[1] << Get Average Absolute Error Training);
Show( ae );

```

#### Get Average Absolute Error Validation

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Get Average Absolute Error Validation)

**説明:** 検証セットの平均絶対偏差統計量を戻す。 このオプションは検証セットを使用している場合のみ利用可能。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
ae = obj << (Fit[1] << Get Average Absolute Error Validation);
Show( ae );

```

#### Get Average Log Error Test

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Get Average Log Error Test)

**説明:** テストデータの-log(p)の平均を戻す。pは応答の実測値が生じる確率の予測値。 このオプションはJMP Proで検証セットを使用している場合のみ利用可能。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Equity.jmp" );
obj = dt << Neural(
	Y( :BAD ),
	X(
		:LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO,
		:DEBTINC
	),
	Validation( :Validation ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
avg = obj << (Fit[1] << Get Average Log Error Test);
Show( avg );

```

#### Get Average Log Error Training

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Get Average Log Error Training)

**説明:** 学習データの-log(p)の平均を戻す。pは応答の実測値が生じる確率の予測値。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
avg = obj << (Fit[1] << Get Average Log Error Training);
Show( avg );

```

#### Get Average Log Error Validation

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Get Average Log Error Validation)

**説明:** 検証データの-log(p)の平均を戻す。pは応答の実測値が生じる確率の予測値。 このオプションは検証セットを使用している場合のみ利用可能。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
avg = obj << (Fit[1] << Get Average Log Error Validation);
Show( avg );

```

#### Get Confusion Matrix Test

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Get Confusion Matrix Test)

**説明:** テストセットの混同行列を戻す。 このオプションはJMP Proで検証セットを使用している場合のみ利用可能。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Equity.jmp" );
obj = dt << Neural(
	Y( :BAD ),
	X(
		:LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO,
		:DEBTINC
	),
	Validation( :Validation ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
cm = obj << (Fit[1] << Get Confusion Matrix Test);
Show( cm );

```

#### Get Confusion Matrix Training

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Get Confusion Matrix Training)

**説明:** 学習セットの混同行列を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
cm = obj << (Fit[1] << Get Confusion Matrix Training);
Show( cm );

```

#### Get Confusion Matrix Validation

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Get Confusion Matrix Validation)

**説明:** 検証セットの混同行列を戻す。 このオプションは検証セットを使用している場合のみ利用可能。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
cm = obj << (Fit[1] << Get Confusion Matrix Validation);
Show( cm );

```

#### Get Confusion Rates Test

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Get Confusion Rates Test)

**説明:** テストセットの混同率を戻す。 このオプションはJMP Proで検証セットを使用している場合のみ利用可能。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Equity.jmp" );
obj = dt << Neural(
	Y( :BAD ),
	X(
		:LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO,
		:DEBTINC
	),
	Validation( :Validation ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
cr = obj << (Fit[1] << Get Confusion Rates Test);
Show( cr );

```

#### Get Confusion Rates Training

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Get Confusion Rates Training)

**説明:** 学習セットの混同率を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
cr = obj << (Fit[1] << Get Confusion Rates Training);
Show( cr );

```

#### Get Confusion Rates Validation

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Get Confusion Rates Validation)

**説明:** 検証セットの混同率を戻す。 このオプションは検証セットを使用している場合のみ利用可能。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
cr = obj << (Fit[1] << Get Confusion Rates Validation);
Show( cr );

```

#### Get Gen RSquare Test

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Get Gen RSquare Test)

**説明:** テストセットの一般化R2乗統計量を戻す。 このオプションはJMP Proで検証セットを使用している場合のみ利用可能。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Equity.jmp" );
obj = dt << Neural(
	Y( :BAD ),
	X(
		:LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO,
		:DEBTINC
	),
	Validation( :Validation ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
rt = obj << (Fit[1] << Get Gen RSquare Test);
Show( rt );

```

#### Get Gen RSquare Training

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Get Gen RSquare Training)

**説明:** 学習セットの一般化R2乗統計量を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
rt = obj << (Fit[1] << Get Gen RSquare Training);
Show( rt );

```

#### Get Gen RSquare Validation

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Get Gen RSquare Validation)

**説明:** 検証セットの一般化R2乗統計量を戻す。 このオプションは検証セットを使用している場合のみ利用可能。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
rt = obj << (Fit[1] << Get Gen RSquare Validation);
Show( rt );

```

#### Get MM SAS DATA Step

**構文:** text = obj &lt;&lt; (fit[number] &lt;&lt; Get MM SAS Data Step)

**説明:** SAS Model Managerに登録できるSASコードを作成する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
code = obj << (Fit[1] << Get MM SAS Data Step);

```

#### Get Measures

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Get Measures)

**説明:** あてはめたモデルの適合度指標を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
obj << (Fit[1] << Diagram( 1 ));
obj << (Fit[1] << Get Measures);

```

#### Get Misclassification Rate Test

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Get Misclassification Rate Test)

**説明:** テストセットの誤分類率を戻す。 このオプションはJMP Proで検証セットを使用している場合のみ利用可能。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Equity.jmp" );
obj = dt << Neural(
	Y( :BAD ),
	X(
		:LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO,
		:DEBTINC
	),
	Validation( :Validation ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
mr = obj << (Fit[1] << Get Misclassification Rate Test);
Show( mr );

```

#### Get Misclassification Rate Training

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Get Misclassification Rate Training)

**説明:** 学習セットの誤分類率を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
mrt = obj << (Fit[1] << Get Misclassification Rate Training);
Show( mrt );

```

#### Get Misclassification Rate Validation

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Get Misclassification Rate Validation)

**説明:** 検証セットの誤分類率を戻す。 このオプションは検証セットを使用している場合のみ利用可能。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
mrt = obj << (Fit[1] << Get Misclassification Rate Validation);
Show( mrt );

```

#### Get NBoost

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Get NBoost)

**説明:** ブースティングに使用されたモデルの数を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	N Boost( 2 ),
	Go
);
n = obj << (fit[1] << Get NBoost);
Show( n );

```

#### Get Precision Recall Area Test

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Get Precision Recall Area Test)

**説明:** テストセットのPR曲線下面積を戻す。この曲線下面積を計算するには、PR曲線が表示されていなければならない。 このオプションはJMP Proで検証セットを使用している場合のみ利用可能。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Equity.jmp" );
obj = dt << Neural(
	Y( :BAD ),
	X(
		:LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO,
		:DEBTINC
	),
	Validation( :Validation ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
obj << (Fit[1] << Precision Recall Curve( 1 ));
ra = obj << (Fit[1] << Get Precision Recall Area Test);
Show( ra );

```

#### Get Precision Recall Area Training

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Get Precision Recall Area Training)

**説明:** 学習セットのPR曲線下面積を戻す。この曲線下面積を計算するには、PR曲線が表示されていなければならない。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
obj << (Fit[1] << Precision Recall Curve( 1 ));
ra = obj << (Fit[1] << Get Precision Recall Area Training);
Show( ra );

```

#### Get Precision Recall Area Validation

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Get Precision Recall Area Validation)

**説明:** 検証セットのPR曲線下面積を戻す。この曲線下面積を計算するには、PR曲線が表示されていなければならない。 このオプションは検証セットを使用している場合のみ利用可能。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
obj << (Fit[1] << Precision Recall Curve( 1 ));
ra = obj << (Fit[1] << Get Precision Recall Area Validation);
Show( ra );

```

#### Get Prediction Formula

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Get Prediction Formula)

**説明:** 予測式の列を作成するスクリプトを戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
obj << (Fit[1] << Get Prediction Formula);

```

#### Get RMS Error Test

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Get RMS Error Test)

**説明:** テストデータのRMSE(平均平方誤差の平方根)を戻す。 このオプションはJMP Proで検証セットを使用している場合のみ利用可能。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Equity.jmp" );
obj = dt << Neural(
	Y( :BAD ),
	X(
		:LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO,
		:DEBTINC
	),
	Validation( :Validation ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
re = obj << (Fit[1] << Get RMS Error Test);
Show( re );

```

#### Get RMS Error Training

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Get RMS Error Training)

**説明:** 学習データのRMSE(平均平方誤差の平方根)を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
re = obj << (Fit[1] << Get RMS Error Training);
Show( re );

```

#### Get RMS Error Validation

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Get RMS Error Validation)

**説明:** 検証データのRMSE(平均平方誤差の平方根)を戻す。 このオプションは検証セットを使用している場合のみ利用可能。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
re = obj << (Fit[1] << Get RMS Error Validation);
Show( re );

```

#### Get ROC Area Test

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Get ROC Area Test)

**説明:** テストデータのAUC(area under the curve)を戻す。このAUCは、受診者動作曲線(ROC曲線)における曲線の下の面積。AUCを計算するには、ROC曲線が表示されている必要がある。 このオプションはJMP Proで検証セットを使用している場合のみ利用可能。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Equity.jmp" );
obj = dt << Neural(
	Y( :BAD ),
	X(
		:LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO,
		:DEBTINC
	),
	Validation( :Validation ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
obj << (Fit[1] << ROC Curve( 1 ));
ra = obj << (Fit[1] << Get ROC Area Test);
Show( ra );

```

#### Get ROC Area Training

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Get ROC Area Training)

**説明:** 学習データのAUCを戻す。AUC (Area Under Cuvve)は、受診者動作曲線(ROC曲線)の下の面積。AUCを計算するには、ROC曲線が表示されている必要がある。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
obj << (Fit[1] << ROC Curve( 1 ));
ra = obj << (Fit[1] << Get ROC Area Training);
Show( ra );

```

#### Get ROC Area Validation

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Get ROC Area Validation)

**説明:** 検証データのAUCを戻す。AUC (Area Under Cuvve)は、受診者動作曲線(ROC曲線)の下の面積。AUCを計算するには、ROC曲線が表示されている必要がある。 このオプションは検証セットを使用している場合のみ利用可能。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
obj << (Fit[1] << ROC Curve( 1 ));
ra = obj << (Fit[1] << Get ROC Area Validation);
Show( ra );

```

#### Get RSquare Test

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Get RSquare Test)

**説明:** テストセットのエントロピーR2乗統計量を戻す。 このオプションはJMP Proで検証セットを使用している場合のみ利用可能。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Equity.jmp" );
obj = dt << Neural(
	Y( :BAD ),
	X(
		:LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO,
		:DEBTINC
	),
	Validation( :Validation ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
rt = obj << (Fit[1] << Get RSquare Test);
Show( rt );

```

#### Get RSquare Training

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Get RSquare Training)

**説明:** 学習セットのエントロピーR2乗統計量を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
rt = obj << (Fit[1] << Get RSquare Training);
Show( rt );

```

#### Get RSquare Validation

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Get RSquare Validation)

**説明:** 検証セットのエントロピーR2乗統計量を戻す。 このオプションは検証セットを使用している場合のみ利用可能。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
rt = obj << (Fit[1] << Get RSquare Validation);
Show( rt );

```

#### Get SAS DATA Step

**構文:** text = obj &lt;&lt; (fit[number] &lt;&lt; Get SAS Data Step)

**説明:** 新しいデータセットにスコアを付けるためのSASコードを作成する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
code = obj << (Fit[1] << Get SAS Data Step);

```

#### Get Seconds

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Get Seconds)

**説明:** 分析にかかる時間(秒)を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
s = obj << (Fit[1] << Get Seconds);
Show( s );

```

#### Lift Curve

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Lift Curve( state=0|1 ))

**説明:** リフトチャートの表示/非表示を切り替える。リフトチャートは、観測値の割合に対してリフトをプロットしたもので、モデルの予測能力を別の観点から見ることができる。検証列を指定した場合は、学習セット・検証セット・テストセットのそれぞれに対してプロットが表示される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
obj << (Fit[1] << Lift Curve( 1 ));

```

#### Make SAS DATA Step

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Make SAS Data Step)

**説明:** 新しいデータセットにスコアを付けるためのSASコードを作成する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
obj << (Fit[1] << Make SAS Data Step);

```

#### Plot Actual by Predicted

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Plot Actual by Predicted( state=0|1 ))

**説明:** 縦軸に実測値、横軸に予測値を表示したプロットの表示/非表示を切り替える。このオプションは、連続尺度の応答でのみ利用できる。検証を用いた場合は、学習セット・検証セット・テストセットのそれぞれに対してプロットが表示される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
obj << (Fit[1] << Plot Actual By Predicted( 1 ));

```

#### Plot Residual by Predicted

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Plot Residual by Predicted( state= 0|1 ))

**説明:** 縦軸に残差、横軸に予測値を表示したプロットの表示/非表示を切り替える。このオプションは、連続尺度の応答でのみ利用できる。検証を用いた場合は、学習セット・検証セット・テストセットのそれぞれに対してプロットが表示される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
obj << (Fit[1] << Plot Residual By Predicted( 1 ));

```

#### Precision Recall Curve

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Precision Recall Curve( state=0|1 ))

**説明:** 応答変数の水準ごとに描かれるPR曲線の表示/非表示を切り替える。PR曲線は、さまざまな閾値における適合率と再現率をプロットしたもの。検証列を指定した場合は、学習セット・検証セット・テストセットのそれぞれに対してプロットが表示される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
obj << (Fit[1] << Precision Recall Curve( 1 ));

```

#### Profiler

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Profiler( state=0|1 ))

**説明:** 予測プロファイルの表示/非表示を切り替える。予測プロファイルは、1因子ずつスライスしながら予測式を図示したものである。予測プロファイルでは、最適化を行える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
obj << (Fit[1] << Profiler( 1 ));

```

#### Publish Prediction Formula

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Publish Prediction Formula)

**説明:** 予測式を作成し、列の計算式として「計算式デポ」プラットフォームに計算式列のスクリプトとして保存する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
obj << (Fit[1] << Publish Prediction Formula);

```

#### ROC Curve

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; ROC Curve( state=0|1 ))

**説明:** 応答変数の各水準に対し、ROC曲線(受診者動作特性曲線)の表示/非表示を切り替える。ROC曲線は、「感度」と「1-特異度」をプロットした曲線。検証列を指定した場合は、学習セット・検証セット・テストセットのそれぞれに対してプロットが表示される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
obj << (Fit[1] << ROC Curve( 1 ));

```

#### Remove Fit

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Remove Fit)

**説明:** モデルのレポート全体を削除する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
Wait( 2 );
obj << (Fit[1] << Remove Fit);

```

#### Save Fast Formulas

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Save Fast Formulas)

**説明:** 隠れ層ノードの計算式が組み込まれた応答の予測式をデータテーブルに保存する。このオプションで作成された計算式は、高速だが、プロファイルでは使用できない。新しい計算式列として、この列はデータテーブルに保存される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
obj << (Fit[1] << Save Fast Formulas);

```

#### Save Formulas

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Save Formulas)

**説明:** 応答の予測式と隠れ層ノードの計算式を個別にデータテーブルに保存する。新しい計算式列として、これらの列はデータテーブルに保存される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
obj << (Fit[1] << Save Formulas);

```

#### Save Profile Formulas

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Save Profile Formulas)

**説明:** 隠れ層ノードの計算式が組み込まれた応答の予測式をデータテーブルに保存する。このオプションで作成された計算式は、プロファイルで使用できる。新しい計算式列として、この列はデータテーブルに保存される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
obj << (Fit[1] << Save Profile Formulas);

```

#### Save Transformed Covariates

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Save Transformed Covariates)

**説明:** 共変量の変換に使用した計算式をデータテーブルに保存する。このオプションは、JMP Proでプラットフォームの起動時に[説明変数を変換]オプションを指定した場合のみ利用可能。新しい計算式列として、これらの列はデータテーブルに保存される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Transform Covariates( 1 ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
obj << (Fit[1] << Save Transformed Covariates);

```

#### Save Validation

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Save Validation)

**説明:** 学習セットと検証セットにどの行が使用されたかを示す列をデータテーブルに保存する。新しい列として、この列はデータテーブルに保存される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
obj << (Fit[1] << Save Validation);

```

#### Show Estimates

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Show Estimates( state=0|1 ))

**説明:** パラメータ推定値の表示/非表示を切り替える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
obj << (Fit[1] << Show Estimates( 1 ));

```

#### Surface Profiler

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Surface Profiler( state=0|1 ))

**説明:** 3次元曲面プロットの表示/非表示を切り替える。このオプションは、モデルに2つ以上のX変数がある場合のみ利用可能。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
obj << (Fit[1] << Surface Profiler( 1 ));

```

