# Scatterplot 3D



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

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
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

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Scatterplot 3D(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	By( _bycol )
);
obj[1] << Copy ByGroup Script;

```

### Copy Script

**構文:** obj &lt;&lt; Copy Script

**説明:** この分析を再現するJSLスクリプトを生成し、クリップボードにコピーする。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Copy Script;

```

### Data Table Window

**構文:** obj &lt;&lt; Data Table Window

**説明:** この分析に使用したデータテーブルのウィンドウを手前に表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
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

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Scatterplot 3D(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
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

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

### Get Data Table

**構文:** obj &lt;&lt; Get Data Table

**説明:** データテーブルへの参照を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
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

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**構文:** obj &lt;&lt; Get Script With Data Table

**説明:** この分析を再現するスクリプト(JSL)をデータテーブルへの参照も含めて生成し、それを式として戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**構文:** obj &lt;&lt; Get Timing

**説明:** プラットフォームの起動にかかった時間を取得する。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
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

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**構文:** obj &lt;&lt; Redo ByGroup Analysis

**説明:** 同じ分析をやり直し新しいウィンドウに表示する。データが変更されていると分析結果は異なる。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Scatterplot 3D(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	By( _bycol )
);
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**構文:** obj &lt;&lt; Relaunch Analysis

**説明:** プラットフォームの起動ウィンドウを開き、レポートを作成した時の設定を表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**構文:** obj &lt;&lt; Relaunch ByGroup

**説明:** プラットフォームの起動ウィンドウを開き、レポートを作成した時の設定を表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Scatterplot 3D(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
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

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**構文:** obj &lt;&lt; Report View( "完全"|"要約" )

**説明:** レポートビューは、プラットフォームレポートの詳細を表示するかどうかを決定する。Fullはすべての詳細を表示し、Summaryはプラットフォームにより限定されたものだけを表示する。 動作をカスタマイズするため、各ディスプレイボックスは<<Set Summary Behaviorメッセージをサポートする。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**構文:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**説明:** 分析を再現するためのJSLスクリプトを作成し、データテーブルにテーブルプロパティとして保存する。スクリプトの名前を指定できる。Append Suffixオプションは、スクリプト名に数字の接尾辞を追加する。これにより、同名のスクリプトが存在していても区別できる。Promptオプションは、ユーザにスクリプト名の指定を促す。Replaceオプションは、同名の既存のスクリプトを置き換える。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Scatterplot 3D(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**構文:** obj &lt;&lt; Save ByGroup Script to Journal

**説明:** この分析を再現するJSLスクリプトを生成し、ジャーナルにそのスクリプトのボタンを追加する。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Scatterplot 3D(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**構文:** obj &lt;&lt; Save ByGroup Script to Script Window

**説明:** この分析を再現するJSLスクリプトを生成し、現在のスクリプトウィンドウに表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Scatterplot 3D(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**構文:** obj &lt;&lt; Save Script for All Objects

**説明:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**構文:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**説明:** すべてのレポートオブジェクトを再現するスクリプトを現在のデータテーブルに保存する。このオプションは、ウィンドウ内にレポートが複数ある場合に便利。作成されるスクリプトの名前は、引用符で囲んで指定しない限り、1つ目のプラットフォーム名となる。

#### 例 1

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Scatterplot 3D(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table;

```

#### 例 2

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Scatterplot 3D(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**構文:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**説明:** この分析を再現するJSLスクリプトを生成し、データテーブルのテーブルプロパティとして保存する。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**構文:** obj &lt;&lt; Save Script to Journal

**説明:** この分析を再現するJSLスクリプトを生成し、ジャーナルにそのスクリプトのボタンを追加する。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Save Script to Journal;

```

### Save Script to Report

**構文:** obj &lt;&lt; Save Script to Report

**説明:** この分析を再現するJSLスクリプトを生成し、レポートウィンドウに表示する。分析手順の記録を結果と一緒に残せる。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Save Script to Report;

```

### Save Script to Script Window

**構文:** obj &lt;&lt; Save Script to Script Window

**説明:** この分析を再現するJSLスクリプトを生成し、現在のスクリプトウィンドウに表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
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

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Title( "My Platform" );

```

### Top Report

**構文:** obj &lt;&lt; Top Report

**説明:** レポート内のルートノードへの参照を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
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

**構文:** obj = Scatterplot 3D(...Window View( "Visible"|"Invisible"|"Private" )...)

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

**説明:** 変数の水準ごとに1つずつ、複数のレポートを作成する。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Scatterplot 3D(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	By( _bycol )
);

```

### Coloring

**構文:** obj &lt;&lt; Coloring( column )

**説明:** 指定した変数の値に応じて、マーカーを色分けする。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Scatterplot 3D(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Coloring( :Sepal length )
);

```

### Columns

**構文:** obj &lt;&lt; Columns( column(s) )

**説明:** 3次元グラフのX・Y・Z座標に使うための変数。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );

```

### Freq

**構文:** obj &lt;&lt; Freq( column )

**説明:** この列の値を、分析の際に各行の度数として用いる。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_freqcol", Numeric, Continuous, Formula( Random Integer( 1, 5 ) ) );
obj = dt << Scatterplot 3D(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Freq( _freqcol )
);

```

### Weight

**構文:** obj &lt;&lt; Weight( column )

**説明:** この列の値を、分析の際に各行の重みとして用いる。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_weightcol", Numeric, Continuous, Formula( Random Beta( 1, 1 ) ) );
obj = dt << Scatterplot 3D(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Weight( _weightcol )
);

```

### Y

**構文:** obj &lt;&lt; Y( column(s) )

**説明:** 3次元グラフのX・Y・Z座標に使うための変数。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );

```

## 関連するコンストラクター

### Scatterplot 3D

**構文:** Scatterplot 3D( Y( columns ) )

**説明:** 3つ以上の変数を使った回転する3次元の散布図。変数を4つ以上指定した場合、散布図に表示する変数が順に選択できる。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );

```

## 項目のメッセージ

### Biplot Rays

**構文:** obj &lt;&lt; Biplot Rays( state=0|1 )

**説明:** グラフ上でバイプロット線の表示/非表示を切り替える。主成分の場合はデフォルトでオン。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Principal Components( 1 );
obj << Biplot Rays( 1 );

```

### Circle Size

**構文:** obj &lt;&lt; Circle Size( number=0.2 )

**説明:** [重み]または[度数]の列が指定されている場合に、また、スクリプトではSized Pointsが指定されている場合に、マーカーサイズを設定する。 デフォルトの値は"0.2"。

**JMP追加されたバージョン:** 18

```jsl

// slightly larger circles
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Scatterplot 3D(
	Y( :Sepal length, :Sepal width, :Petal length ),
	Weight( :Petal width ),
	Circle Size( .3 )
);

```

### Connect Points

**構文:** obj &lt;&lt; Connect Points( state=0|1, &lt;group column name&gt; )

**説明:** 点をつなぐ線の表示/非表示を切り替える。オプションで点をグループ分けできる。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Connect Points( 1, :Species );

```

### Drop Line Thickness

**構文:** obj &lt;&lt; Drop Line Thickness( fraction=0.03 )

**説明:** 垂線の太さを設定する。 デフォルトの値は"0.03"。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Drop Lines( 1 );
Wait( 2 );
obj << Drop Line Thickness( 0.8 );

```

### Drop Lines

**構文:** obj &lt;&lt; Drop Lines( state=0|1 )

**説明:** グラフ上の各点から第1変数と第3変数で定義された平面に引いた垂線の表示/非表示を切り替える。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Drop Lines( 1 );

```

### Ellipsoid Coverage

**構文:** obj &lt;&lt; Ellipsoid Coverage( fraction=0.5 )

**説明:** 楕円の累積確率を設定する。たとえば0.5に設定すると、データの半分が、密度が高いほうから含められる。 デフォルトの値は"0.5"。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Ellipsoid Coverage( 0.8 );
obj << Normal Contour Ellipsoids( 1, :Species );

```

### Ellipsoid Transparency

**構文:** obj &lt;&lt; Ellipsoid Transparency( fraction=0.5 )

**説明:** 楕円の透明度を設定する。0は透明、1は不透明。 デフォルトの値は"0.5"。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Ellipsoid Transparency( 0.4 );
obj << Normal Contour Ellipsoids( 1, :Species );

```

### Frame3D

**構文:** obj &lt;&lt; Frame3D( &lt;commands passed to Frame3D&gt; )

**説明:** 表示コマンドを3Dプロットに送信する。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set View Zoom( 0.9075 ) );

```

### Jitter

**構文:** obj &lt;&lt; Jitter( state=0|1 )

**説明:** 散布図上で点を少しずらして重なりをなくす。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Petal length, :Petal width, :Species ), Jitter( 0 ) );

```

### Legend

**構文:** obj &lt;&lt; Legend( &lt;Legend Model ID&gt; )

### Nonpar Density Contour

**構文:** obj &lt;&lt; Nonpar Density Contour( state=0|1, &lt;group column name&gt; )

**説明:** 点の周りにカーネル密度の等密度面を描く。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Nonpar Density Contour( 1, :Species );

```

### Nonpar Density Contour Settings

**構文:** obj &lt;&lt; Nonpar Density Contour Settings( surface, on=0|1, &lt;quantile&gt;, &lt;transparency&gt;, &lt;color&gt; )

**説明:** 等値面の設定

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Nonpar Density Contour( 1 );
obj << Nonpar Density Contour Settings( 1, 1, .5, .6, Green );

```

### Normal Contour Ellipsoids

**構文:** obj &lt;&lt; Normal Contour Ellipsoids( state=0|1, &lt;group column name&gt; )

**説明:** 確率楕円体の表示/非表示を切り替える。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Normal Contour Ellipsoids( 1, :Species );

```

### Principal Components

**構文:** obj &lt;&lt; Principal Components( state=0|1 )

**説明:** 主成分分析のレポートを表示し、グラフにバイプロット線を表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Principal Components;

```

### Remove Prin Comp

**構文:** obj &lt;&lt; Remove Prin Comp

**説明:** 主成分分析のレポート、および、グラフからバイプロットを削除する。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Principal Components( 1 );
Wait( 2 );
obj << Remove Prin Comp;

```

### Rotated Components

**構文:** obj &lt;&lt; Rotated Components( PC|ML, ONE|SMC , number, Varimax| Biquartimax| Quartimax|Equamax|Orthomax| Factorparsimax... )

**説明:** 成分のいくつかの要素が座標空間に近づくように成分を回転し、レポートを表示する。第2パラメータは、事前共通性を示す、行列の対角要素を定義するもので、値はSMCまたはONE(主成分)。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Rotated Components( PC, ONE, 3, Varimax );

```

### Save Prin Components

**構文:** obj &lt;&lt; Save Prin Components( number )

**説明:** 主成分スコアを、データテーブルの新しい列に保存する。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Principal Components( 1 );
obj << Save Prin Components( 3 );

```

### Save Rotated Components

**構文:** obj &lt;&lt; Save Rotated Components

**説明:** 回転後の主成分スコアを、データテーブルの新しい列に保存する。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Rotated Components( PC, ONE, 3, Varimax );
obj << Save Rotated Components;

```

### Show Controls

**構文:** obj &lt;&lt; Show Controls( state=0|1 )

**説明:** 散布図の下部にある設定パネルの表示/非表示を切り替える。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Show Controls( 1 );

```

### Show Points

**構文:** obj &lt;&lt; Show Points( state=0|1 )

**説明:** 散布図上の点の表示/非表示を切り替える。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Show Points( 1 );

```

### Show Ray Labels

**構文:** obj &lt;&lt; Show Ray Labels( state=0|1 )

**説明:** バイプロット線のラベルの表示/非表示を切り替える。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Principal Components( 1 );
obj << Biplot Rays( 1 );
obj << Show Ray Labels( 1 );

```

### Sized Points

**構文:** obj &lt;&lt; Sized Points( state=0|1 )

**説明:** 散布図上の点を拡大/縮小する。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Sized Points( 1 );

```

### Std Prin Components

**構文:** obj &lt;&lt; Std Prin Components( state=0|1 )

**説明:** 標準化した主成分分析のレポートを表示し、グラフにバイプロット線を表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Std Prin Components;

```

## Frame3D

### 関連するコンストラクター

#### Graph 3D Box

**構文:** y = Graph 3D Box()

**説明:** 表示コマンドを3Dプロットに送信する。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );

```

### 項目のメッセージ

#### Add Ellipsoid

**構文:** obj &lt;&lt; Add Ellipsoid( 4x4 matrix )obj &lt;&lt; Add Ellipsoid(3x3 cov,3x1 means)obj &lt;&lt; Add Ellipsoid(3x3 corr,3x1 means,3x1 std dev)

**説明:** プロットに楕円を描画する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D(
	Add Ellipsoid(
		[1 0.42632 0.85183, 0.42632 1 0.34418, 0.85183 0.34418 1],
		[6.55099 2.96919 5.5066],
		[0.57829 0.29087 0.53668]
	)
);

```

#### Add Markers

**構文:** obj &lt;&lt; Add Markers( [ nx1 X matrix ], [ nx1 Y matrix ], [ nx1 Z matrix ] )

**説明:** プロットにn個のマーカーを描画する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Add Markers( [2 3 4], [5 6 7], [1 8 9] ) );

```

#### Add Vector

**構文:** obj &lt;&lt; Add Vector( [ 3xn from matrix ], [ 3xn to matrix ], FromCap( CutOff|Sphere|Point|Feather ), ToCap( CutOff|Sphere|Point|Feather ), Facets( Triangle|Square|Round ), Shaft Color( color ), Shaft Thickness( number ), From Thickness( number ), To Thickness( number ), From Color( number ), To Color( number ) ) )

**説明:** プロットにベクトルまたは矢印を描画する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Add Vector( [4.5 2 1], [7.5 4 6], FromCap( "Feather" ), ToCap( "Point" ) ) );

```

#### Get Axes

**構文:** obj &lt;&lt; Get Axes

**説明:** プロットの軸の表示状態を戻す。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
s = obj << Frame3D( Get Axes );
Show( s );

```

#### Get Box

**構文:** obj &lt;&lt; Get Box

**説明:** プロットのボックスフレームの表示状態を戻す。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
s = obj << Frame3D( Get Box );
Show( s );

```

#### Get Grab Handles

**構文:** obj &lt;&lt; Get Grab Handles

**説明:** プロットのグラブハンドルの表示状態を戻す。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
s = obj << Frame3D( Get Box );
Show( s );

```

#### Get Graph Size

**構文:** obj &lt;&lt; Get Graph Size

**説明:** グラフのサイズを戻す。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
s = obj << Frame3D( Get Graph Size );
Show( s );

```

#### Get Grids

**構文:** obj &lt;&lt; Get Grids

**説明:** プロットのグリッドの表示状態を戻す。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
s = obj << Frame3D( Get Grids );
Show( s );

```

#### Get Hide Lights Border

**構文:** obj &lt;&lt; Get Hide Lights Border

**説明:** プロットの周りのライト枠の状態を戻す。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
state = obj << Frame3D( Get Hide Lights Border );
Show( state );

```

#### Get Line Scale

**構文:** obj &lt;&lt; Get Line Scale

**説明:** プロットのグリッドの線幅を戻す。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
w = obj << Frame3D( Get Line Scale );
Show( w );

```

#### Get Marker Quality

**構文:** obj &lt;&lt; Get Marker Quality

**説明:** プロットのマーカー特性(形状や濃淡などの綺麗さ)を戻す。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
q = obj << Frame3D( Get Marker Quality );
Show( q );

```

#### Get Marker Scale

**構文:** obj &lt;&lt; Get Marker Scale

**説明:** プロットのマーカーサイズを戻す。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
s = obj << Frame3D( Get Marker Scale );
Show( s );

```

#### Get Marker Transparency

**構文:** obj &lt;&lt; Get Marker Transparency

**説明:** プロットのマーカーの透明度を戻す。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
t = obj << Frame3D( Get Marker Transparency );
Show( t );

```

#### Get Rotation

**構文:** obj &lt;&lt; Get Rotation

**説明:** フレームの現在の回転を戻す。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
r = obj << Frame3D( Get Rotation() );
Show( r );

```

#### Get Text Scale

**構文:** obj &lt;&lt; Get Text Scale

**説明:** プロットの軸テキストのテキストサイズを戻す。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
s = obj << Frame3D( Get Text Scale );
Show( s );

```

#### Get View Ortho

**構文:** obj &lt;&lt; Get View Ortho

**説明:** プロットにおける平行投影の状態を戻す。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
o = obj << Frame3D( Get View Ortho );
Show( o );

```

#### Get View Perspective

**構文:** obj &lt;&lt; Get View Perspective

**説明:** プロットの透視投影を戻す。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
p = obj << Frame3D( Get View Perspective );
Show( p );

```

#### Get View Zoom

**構文:** obj &lt;&lt; Get View Zoom

**説明:** プロットの現在のズームを戻す。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
z = obj << Frame3D( Get View Zoom );
Show( z );

```

#### Get Wall Color

**構文:** obj &lt;&lt; Get Wall Color

**説明:** プロットの壁の色を戻す。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
c = obj << Frame3D( Get Wall Color );
Show( c );

```

#### Get Walls

**構文:** obj &lt;&lt; Get Walls

**説明:** プロットの壁の表示状態を戻す。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
s = obj << Frame3D( Get Walls );
Show( s );

```

#### Get X Axis Color

**構文:** obj &lt;&lt; Get X Axis Color

**説明:** プロットのX軸の色を戻す。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
c = obj << Frame3D( Get X Axis Color );
Show( c );

```

#### Get X Axis Label

**構文:** obj &lt;&lt; Get X Axis Label

**説明:** プロットのX軸のラベルを戻す。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
label = obj << Frame3D( Get X Axis Label );
Show( label );

```

#### Get Y Axis Color

**構文:** obj &lt;&lt; Get Y Axis Color

**説明:** プロットのY軸の色を戻す。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
c = obj << Frame3D( Get Y Axis Color );
Show( c );

```

#### Get Y Axis Label

**構文:** obj &lt;&lt; Get Y Axis Label

**説明:** プロットのY軸のラベルを戻す。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
label = obj << Frame3D( Get Y Axis Label );
Show( label );

```

#### Get Z Axis Color

**構文:** obj &lt;&lt; Get Z Axis Color

**説明:** プロットのZ軸の色を戻す。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
c = obj << Frame3D( Get Z Axis Color );
Show( c );

```

#### Get Z Axis Label

**構文:** obj &lt;&lt; Get Z Axis Label

**説明:** プロットのZ軸のラベルを戻す。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
label = obj << Frame3D( Get Z Axis Label );
Show( label );

```

#### Set Axes

**構文:** obj &lt;&lt; Set Axes( state=0|1 )

**説明:** プロットのX、Y、Z軸の表示/非表示を切り替える。デフォルトでは表示。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Axes( 1 ) );

```

#### Set Box

**構文:** obj &lt;&lt; Set Box( state=0|1 )

**説明:** プロットのボックスフレームの表示/非表示を切り替える。デフォルトでは表示。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Box( 1 ) );

```

#### Set Graph Size

**構文:** obj &lt;&lt; Set Graph Size( x, y )

**説明:** グラフのサイズを設定する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Graph Size( 700, 800 ) );

```

#### Set Grids

**構文:** obj &lt;&lt; Set Grids( state=0|1 )

**説明:** プロットのグリッドの表示/非表示を切り替える。デフォルトでは表示。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Grids( 1 ) );

```

#### Set Hide Lights Border

**構文:** obj &lt;&lt; Set Hide Lights Border( state=0|1 )

**説明:** プロットの周りのライト枠の表示/非表示を切り替える。デフォルトでは表示。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Hide Lights Border( 0 ) );

```

#### Set Line Scale

**構文:** obj &lt;&lt; Set Line Scale( number )

**説明:** プロットのグリッドの線幅を設定する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Line Scale( 6.5 ) );

```

#### Set Marker Quality

**構文:** obj &lt;&lt; Set Marker Quality( number )

**説明:** プロットのマーカー特性(形状や濃淡などの綺麗さ)を設定する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Marker Scale( 3 ), Set Marker Quality( 0.2625 ) );

```

#### Set Marker Scale

**構文:** obj &lt;&lt; Set Marker Scale( number )

**説明:** プロットのマーカーサイズを設定する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Marker Scale( 3.5 ) );

```

#### Set Marker Transparency

**構文:** obj &lt;&lt; Set Marker Transparency( fraction )

**説明:** プロットにマーカーの透明度を設定する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Marker Transparency( 0.4125 ) );

```

#### Set Oscillation

**構文:** obj &lt;&lt; Set Oscillation( X, Y, Z, duration )

**説明:** プロットの振幅を設定する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Rotation( -60, -3, 35 ), Set Oscillation( -54, 0, 38, 100 ) );

```

#### Set Rotation

**構文:** obj &lt;&lt; Set Rotation( X, Y, Z )

**説明:** 指定の座標にフレームを回転する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Rotation( -60, -3, 35 ) );

```

#### Set Spin

**構文:** obj &lt;&lt; Set Spin( dx, dy, sx, sy )

**説明:** 指定の軸上でグラフを回転する。dxとdyの値は、ポイント(sx, sy)からどれだけ動かすかの値。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Spin( .01, .01, 0, 0 ) );

```

#### Set Text Scale

**構文:** obj &lt;&lt; Set Text Scale( number )

**説明:** プロットの軸テキストのテキストサイズを設定する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Text Scale( 1.4 ) );

```

#### Set View Ortho

**構文:** obj &lt;&lt; Set View Ortho( state=0|1 )

**説明:** プロットを平行投影(直交射影)で表示する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set View Ortho( 1 ) );

```

#### Set View Perspective

**構文:** obj &lt;&lt; Set View Perspective( fraction )

**説明:** プロットの透視投影を設定する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set View Perspective( 0.275 ) );

```

#### Set View Zoom

**構文:** obj &lt;&lt; Set View Zoom( number )

**説明:** プロットのズームを設定する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set View Zoom( 0.5 ) );
Wait( 2 );
obj << Frame3D( Set View Zoom( 2 ) );

```

#### Set Wall Color

**構文:** obj &lt;&lt; Set Wall Color( number )

**説明:** プロットの壁の色を設定する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Wall Color( -16775543 ) );

```

#### Set Walls

**構文:** obj &lt;&lt; Set Walls( state=0|1 )

**説明:** プロットの壁の表示/非表示を切り替える。デフォルトでは表示。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Walls( 1 ) );

```

#### Set X Axis Color

**構文:** obj &lt;&lt; Set X Axis Color( color )

**説明:** プロットのX軸の色を設定する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set X Axis Color( 5 ) );

```

#### Set X Axis Label

**構文:** obj &lt;&lt; Set X Axis Label( string )

**説明:** プロットのX軸のラベルを設定する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set X Axis Label( "Iris Sepal Length" ) );

```

#### Set Y Axis Color

**構文:** obj &lt;&lt; Set Y Axis Color( color )

**説明:** プロットのY軸の色を設定する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Y Axis Color( 11 ) );

```

#### Set Y Axis Label

**構文:** obj &lt;&lt; Set Y Axis Label( string )

**説明:** プロットのY軸のラベルを設定する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Y Axis Label( "Iris Petal Length" ) );

```

#### Set Z Axis Color

**構文:** obj &lt;&lt; Set Z Axis Color( color )

**説明:** プロットのZ軸の色を設定する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Z Axis Color( "Green" ) );

```

#### Set Z Axis Label

**構文:** obj &lt;&lt; Set Z Axis Label( string )

**説明:** プロットのZ軸のラベルを設定する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Z Axis Label( "Iris Sepal Width" ) );

```

#### XAxis

**構文:** obj &lt;&lt; XAxis( Min( number ), Max( number ), Inc( number ), Format( ) )

**説明:** プロットのX軸の値を設定する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( XAxis( Min( 3 ), Max( 10 ) ) );

```

#### YAxis

**構文:** obj &lt;&lt; YAxis( Min( number ), Max( number ), Inc( number ), Format( ) )

**説明:** プロットのY軸の値を設定する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( YAxis( Min( 1 ), Max( 10 ), Inc( 0.5 ) ) );

```

#### Z Axis

**構文:** obj &lt;&lt; Z Axis( Min( number ), Max( number ), Inc( number ), Format( ) )

**説明:** プロットのZ軸の値を設定する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( ZAxis( Min( 1 ), Max( 5 ), Inc( 0.25 ) ) );

```

#### get light active

**構文:** obj &lt;&lt; get light active( light number )

**説明:** プロットを照らす指定のライトのオン/オフの状態を戻す。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
p = obj << Frame3D( Set Hide Lights Border( 0 ), Get Light Active( 2 ) );
Show( p );

```

#### get light color

**構文:** obj &lt;&lt; get light color( light number )

**説明:** プロットを照らす指定のライトの色をリスト{red, green, blue}で戻す。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
c = obj << Frame3D( Set Hide Lights Border( 0 ), Get Light Color( 1 ) );
Show( c );

```

#### get light position

**構文:** obj &lt;&lt; get light position( light number )

**説明:** プロットを照らす指定のライトの位置をリスト{x, y, z}で戻す。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
p = obj << Frame3D( Set Hide Lights Border( 0 ), Get Light Position( 2 ) );
Show( p );

```

#### set light active

**構文:** obj &lt;&lt; set light active( light number, state=0|1 )

**説明:** プロットを照らす指定のライトをオンにする。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Hide Lights Border( 0 ), Set Light Active( 4, 1 ) );

```

#### set light color

**構文:** obj &lt;&lt; set light color( light number, red value, green value, blue value )

**説明:** プロットを照らすライトの色を設定する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Hide Lights Border( 0 ), Set Light Color( 2, 240, 50, 70 ) );

```

#### set light position

**構文:** obj &lt;&lt; set light position( light number, X, Y, Z )

**説明:** プロットを照らすライトの位置を設定する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Hide Lights Border( 0 ), Set Light Position( 2, -1.5833, 10, 0 ) );

```

