# Surface Plot



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

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	By( _bycol )
);
obj[1] << Copy ByGroup Script;

```

### Copy Script

**構文:** obj &lt;&lt; Copy Script

**説明:** この分析を再現するJSLスクリプトを生成し、クリップボードにコピーする。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Copy Script;

```

### Data Table Window

**構文:** obj &lt;&lt; Data Table Window

**説明:** この分析に使用したデータテーブルのウィンドウを手前に表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
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

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
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

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

### Get Data Table

**構文:** obj &lt;&lt; Get Data Table

**説明:** データテーブルへの参照を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
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

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**構文:** obj &lt;&lt; Get Script With Data Table

**説明:** この分析を再現するスクリプト(JSL)をデータテーブルへの参照も含めて生成し、それを式として戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**構文:** obj &lt;&lt; Get Timing

**説明:** プラットフォームの起動にかかった時間を取得する。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
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

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**構文:** obj &lt;&lt; Redo ByGroup Analysis

**説明:** 同じ分析をやり直し新しいウィンドウに表示する。データが変更されていると分析結果は異なる。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	By( _bycol )
);
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**構文:** obj &lt;&lt; Relaunch Analysis

**説明:** プラットフォームの起動ウィンドウを開き、レポートを作成した時の設定を表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**構文:** obj &lt;&lt; Relaunch ByGroup

**説明:** プラットフォームの起動ウィンドウを開き、レポートを作成した時の設定を表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
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

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**構文:** obj &lt;&lt; Report View( "完全"|"要約" )

**説明:** レポートビューは、プラットフォームレポートの詳細を表示するかどうかを決定する。Fullはすべての詳細を表示し、Summaryはプラットフォームにより限定されたものだけを表示する。 動作をカスタマイズするため、各ディスプレイボックスは<<Set Summary Behaviorメッセージをサポートする。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**構文:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**説明:** 分析を再現するためのJSLスクリプトを作成し、データテーブルにテーブルプロパティとして保存する。スクリプトの名前を指定できる。Append Suffixオプションは、スクリプト名に数字の接尾辞を追加する。これにより、同名のスクリプトが存在していても区別できる。Promptオプションは、ユーザにスクリプト名の指定を促す。Replaceオプションは、同名の既存のスクリプトを置き換える。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**構文:** obj &lt;&lt; Save ByGroup Script to Journal

**説明:** この分析を再現するJSLスクリプトを生成し、ジャーナルにそのスクリプトのボタンを追加する。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**構文:** obj &lt;&lt; Save ByGroup Script to Script Window

**説明:** この分析を再現するJSLスクリプトを生成し、現在のスクリプトウィンドウに表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**構文:** obj &lt;&lt; Save Script for All Objects

**説明:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**構文:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**説明:** すべてのレポートオブジェクトを再現するスクリプトを現在のデータテーブルに保存する。このオプションは、ウィンドウ内にレポートが複数ある場合に便利。作成されるスクリプトの名前は、引用符で囲んで指定しない限り、1つ目のプラットフォーム名となる。

#### 例 1

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table;

```

#### 例 2

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**構文:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**説明:** この分析を再現するJSLスクリプトを生成し、データテーブルのテーブルプロパティとして保存する。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**構文:** obj &lt;&lt; Save Script to Journal

**説明:** この分析を再現するJSLスクリプトを生成し、ジャーナルにそのスクリプトのボタンを追加する。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Save Script to Journal;

```

### Save Script to Report

**構文:** obj &lt;&lt; Save Script to Report

**説明:** この分析を再現するJSLスクリプトを生成し、レポートウィンドウに表示する。分析手順の記録を結果と一緒に残せる。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Save Script to Report;

```

### Save Script to Script Window

**構文:** obj &lt;&lt; Save Script to Script Window

**説明:** この分析を再現するJSLスクリプトを生成し、現在のスクリプトウィンドウに表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
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

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Title( "My Platform" );

```

### Top Report

**構文:** obj &lt;&lt; Top Report

**説明:** レポート内のルートノードへの参照を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
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

**構文:** obj = Surface Plot(...Window View( "Visible"|"Invisible"|"Private" )...)

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

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	By( _bycol )
);

```

### Columns

**構文:** obj &lt;&lt; Columns( column(s) )

**説明:** 3次元グラフのX・Y・Z座標に使うための変数。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :silane, :silica, :hardness ) );

```

### Factors

**構文:** obj &lt;&lt; Factors( column(s) )

**説明:** 3次元グラフのX・Y・Z座標に使うための変数。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Factors( :silane, :silica, :hardness ) );

```

## 関連するコンストラクター

### Surface Plot

**構文:** Surface Plot( Columns() )

**説明:** 回転する3次元のプロット(点または保存された計算式による曲面のプロット)を作成する。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);

```

## 項目のメッセージ

### Clip Sheet

**構文:** obj &lt;&lt; Clip Sheet( state=0|1 ); obj &lt;&lt; Clip Sheet1( state=0|1 )

**説明:** 計算式を持つ1つ目の応答列の値の範囲内だけで、曲面を表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Response( :Pred Formula ABRASION );
Wait( 1 );
obj << Clip Sheet( 1 );

```

### Clip Sheet1

**構文:** obj &lt;&lt; Clip Sheet( state=0|1 ); obj &lt;&lt; Clip Sheet1( state=0|1 )

**説明:** 計算式を持つ1つ目の応答列の値の範囲内だけで、曲面を表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Response( :Pred Formula ABRASION );
Wait( 1 );
obj << Clip Sheet( 1 );

```

### Clip Sheet2

**構文:** obj &lt;&lt; Clip Sheet2( state=0|1 )

**説明:** 計算式を持つ2つ目の応答列の値の範囲内だけで、曲面を表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Response( "Pred Formula MODULUS", :Pred Formula MODULUS );
obj << Show Surface2( "Both Sides" );
Wait( 1 );
obj << Clip Sheet2( 1 );

```

### Clip Sheet3

**構文:** obj &lt;&lt; Clip Sheet3( state=0|1 )

**説明:** 計算式を持つ3つ目の応答列の値の範囲内だけで、曲面を表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Response( "Pred Formula ELONG", "Pred Formula ELONG", :Pred Formula ELONG );
obj << Show Surface3( "Both sides" );
Wait( 1 );
obj << Clip Sheet3( 1 );

```

### Clip Sheet4

**構文:** obj &lt;&lt; Clip Sheet4( state=0|1 )

**説明:** 計算式を持つ4つ目の応答列の値の範囲内だけで、曲面を表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ELONG, :Pred Formula ABRASION, :Pred Formula MODULUS,
		:Pred Formula HARDNESS
	)
);
obj << Response(
	"Pred Formula HARDNESS", "Pred Formula HARDNESS", "Pred Formula HARDNESS",
	:Pred Formula HARDNESS
);
obj << Show Surface4( "Both sides" );
Wait( 1 );
obj << Clip Sheet4( 1 );

```

### Contour Color

**構文:** obj &lt;&lt; Contour Color( color ); obj &lt;&lt; Contour Color1( color )

**説明:** 1つ目の曲面における等高線の色を指定する。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ), Show Contour( "On Surface" ) );
obj << Surface Color Method( ":Pred Formula ABRASION" );
Wait( 1 );
obj << Contour Color( {255, 128, 0} );

```

### Contour Color1

**構文:** obj &lt;&lt; Contour Color( color ); obj &lt;&lt; Contour Color1( color )

**説明:** 1つ目の曲面における等高線の色を指定する。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ), Show Contour( "On Surface" ) );
obj << Surface Color Method( ":Pred Formula ABRASION" );
Wait( 1 );
obj << Contour Color( {255, 128, 0} );

```

### Contour Color2

**構文:** obj &lt;&lt; Contour Color2( color )

**説明:** 2つ目の曲面における等高線の色を指定する。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ),
	Show Surface2( "Both Sides" )
);
obj << Show Contour2( "On Surface" );
Wait( 1 );
obj << Contour Color2( {255, 128, 0} );

```

### Contour Color3

**構文:** obj &lt;&lt; Contour Color3( color )

**説明:** 3つ目の曲面における等高線の色を指定する。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG ),
	Show Surface3( "Both Sides" )
);
obj << Show Contour3( "On Surface" );
Wait( 1 );
obj << Contour Color3( {255, 0, 0} );

```

### Contour Color4

**構文:** obj &lt;&lt; Contour Color4( color )

**説明:** 4つ目の曲面における等高線の色を指定する。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Show Surface4( "Both Sides" ),
	Show Surface1( "Off" )
);
obj << Show Contour4( "On Surface" );
Wait( 1 );
obj << Contour Color4( {100, 0, 200} );

```

### Control Panel

**構文:** obj &lt;&lt; Control Panel( state=0|1 )

**説明:** 設定パネルの表示/非表示を切り替える。設定パネルでは、表示の仕方、独立変数、従属変数を制御できる。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
Wait( 1 );
obj << Control Panel( 0 );

```

### Data points Color

**構文:** obj &lt;&lt; Data Points Color( color ); obj &lt;&lt; Data Points Color1( color )

**説明:** 第1応答変数のデータ点の色を変更する。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );
obj << Response( :Pred Formula ABRASION );
obj << Datapoints Choice( "Mesh" );
obj << Data Points Color( {0, 0, 255} );

```

### Data points Color1

**構文:** obj &lt;&lt; Data Points Color( color ); obj &lt;&lt; Data Points Color1( color )

**説明:** 第1応答変数のデータ点の色を変更する。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );
obj << Response( :Pred Formula ABRASION );
obj << Datapoints Choice( "Mesh" );
obj << Data Points Color( {0, 0, 255} );

```

### Data points Color2

**構文:** obj &lt;&lt; Data points Color2( color )

**説明:** 第2応答変数のデータ点の色を変更する。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ) );
obj << Response( "Pred Formula MODULUS", :Pred Formula MODULUS );
obj << Datapoints Choice2( "Mesh" );
obj << Data Points Color2( {0, 0, 255} );

```

### Data points Color3

**構文:** obj &lt;&lt; Data points Color3( color )

**説明:** 第3応答変数のデータ点の色を変更する。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG )
);
obj << Response( "Pred Formula ELONG", "Pred Formula ELONG", :Pred Formula ELONG );
obj << Datapoints Choice3( "Needles" );
obj << Data Points Color3( {255, 0, 0} );

```

### Data points Color4

**構文:** obj &lt;&lt; Data points Color4( color )

**説明:** 第4応答変数のデータ点の色を変更する。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Datapoints Choice4( "Surface" );
obj << Data points Color4( 100, 0, 200 );
obj << Response(
	"Pred Formula HARDNESS", "Pred Formula HARDNESS", "Pred Formula HARDNESS",
	:Pred Formula HARDNESS
);
obj << Frame3D( Set Rotation( -79.3688859847019, -1.23001727812475, 27.7096879560307 ) );

```

### Datapoints Choice

**構文:** obj &lt;&lt; Datapoints Choice( "Off"|"Points"|"Needles"|"Mesh"|"Surface" ); obj &lt;&lt; Datapoints Choice1( "Off"|"Points"|"Needles"|"Mesh"|"Surface" )

**説明:** 1つ目の応答の曲面における点の表示の仕方を指定する。デフォルトのスタイルはPoints。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Response( :Pred Formula ABRASION );
obj << Datapoints Choice( "Needles" );

```

### Datapoints Choice1

**構文:** obj &lt;&lt; Datapoints Choice( "Off"|"Points"|"Needles"|"Mesh"|"Surface" ); obj &lt;&lt; Datapoints Choice1( "Off"|"Points"|"Needles"|"Mesh"|"Surface" )

**説明:** 1つ目の応答の曲面における点の表示の仕方を指定する。デフォルトのスタイルはPoints。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Response( :Pred Formula ABRASION );
obj << Datapoints Choice( "Needles" );

```

### Datapoints Choice2

**構文:** obj &lt;&lt; Datapoints Choice2( "オフ"|"点"|"垂線"|"メッシュ"|"曲面" )

**説明:** 2つ目の応答の曲面における点の表示の仕方を指定する。デフォルトのスタイルはPoints。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Response( ":Pred Formula MODULUS", :Pred Formula MODULUS );
Wait( 1 );
obj << Datapoints Choice2( "Off" );

```

### Datapoints Choice3

**構文:** obj &lt;&lt; Datapoints Choice3( "オフ"|"点"|"垂線"|"メッシュ"|"曲面" )

**説明:** 3つ目の応答の曲面における点の表示の仕方を指定する。デフォルトのスタイルはPoints。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Response( "Pred Formula ELONG", "Pred Formula ELONG", :Pred Formula ELONG );
obj << Datapoints Choice3( "Mesh" );

```

### Datapoints Choice4

**構文:** obj &lt;&lt; Datapoints Choice4( "オフ"|"点"|"垂線"|"メッシュ"|"曲面" )

**説明:** 4つ目の応答の曲面における点の表示の仕方を指定する。デフォルトのスタイルはPoints。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ELONG, :Pred Formula ABRASION, :Pred Formula MODULUS,
		:Pred Formula HARDNESS
	)
);
obj << Response(
	"Pred Formula HARDNESS", "Pred Formula HARDNESS", "Pred Formula HARDNESS",
	:Pred Formula HARDNESS
);
obj << Datapoints Choice4( "Surface" );

```

### Dependent Variables Points

**構文:** obj &lt;&lt; Dependent Variables Points( state=0|1 )

**説明:** 従属変数のパネルにおける点のオプションの表示/非表示を切り替える。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
Wait( 1 );
obj << Dependent Variables Points( 0 );

```

### Dependent Variables Response Grid

**構文:** obj &lt;&lt; Dependent Variables Response Grid( state=0|1 )

**説明:** 従属変数のパネルにおけるグリッドオプションの表示/非表示を切り替える。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
Wait( 1 );
obj << Dependent Variables Response Grid( 0 );

```

### Equation

**構文:** obj &lt;&lt; Equation( equation1, &lt;equation2&gt;, &lt;equation3&gt;, &lt;equation4&gt; )

**説明:** [従属変数]セクションで指定された順序でシートに計算式を割り当てる。途中の応答列を飛ばしたい場合には、ピリオドを使って欠測値を指定する。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG )
);
obj << Show Surface2( "Both sides" );
obj << Equation( ., ".7*:Silane+5*:Silica" );
obj << Show Formula( 1 );

```

### Fit to Window

**構文:** obj &lt;&lt; Fit to Window( "自動"|"オン"|"オフ" )

**説明:** レポートの自動伸縮の動作を設定する。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
Wait( 1 );
obj << Fit to Window( "Off" );

```

### Formula

**構文:** obj &lt;&lt; Formula( column, &lt;column&gt;, &lt;column&gt;, &lt;column&gt; )

**説明:** 「従属変数」セクションで表示されている順番に従い、列に保存されている計算式を割り当てる。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG ),
	Datapoints Choice2( "Surface" )
);
obj << Show Surface2( "Both sides" );
obj << Formula( :Pred Formula ABRASION, :Pred Formula ELONG );

```

### Frame3D

**構文:** obj &lt;&lt; Frame3D( Scatterplot 3D options )

**説明:** 曲面の表示オプションを変更する。このオプションは、[三次元散布図]プラットフォームのメッセージを使用する。メッセージの詳細については、三次元散布図の説明を参照のこと。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ),
	Show Surface2( "Both sides" )
);
obj << Frame3D(
	Set Graph Size( 692, 671 ),
	Set Rotation( -54, 0, 38 ),
	Background Color( 255, 177, 125 )
);

```

### Hide Lights Border

**構文:** obj &lt;&lt; Hide Lights Border( state=0|1 )

**説明:** ライトコントロールの表示/非表示を切り替える。

```jsl

obj = Surface Plot();
Wait( 1 );
obj << Hide Lights Border( 1 );

```

### Iso Value

**構文:** obj &lt;&lt; Iso Value( id, value )

**説明:** 特定の従属変数に対する等値面スライダの値を変更する。id引数には、0を基準とするインデックスで従属変数を指定する。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ) );
obj << Mode( "Isosurface" );
Wait( 1 );
obj << Iso Value( 0, 100 );
obj << Iso Value( 1, 1500 );

```

### Lock Z Scale

**構文:** obj &lt;&lt; Lock Z Scale( state=0|1 )

**説明:** Z軸を現在の値でロックする。

```jsl

obj = Surface Plot();
obj << Lock Z Scale( 1 );

```

### Mesh Color

**構文:** obj &lt;&lt; Mesh Color( color ); obj &lt;&lt; Mesh Color1( color )

**説明:** 1つ目の従属変数に対する曲面メッシュの色を指定する。このオプションは、メッシュのオプションとして[オフ]以外の値が選択されている場合のみ利用できる。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );
obj << Show Mesh( "X and Y" );
Wait( 1 );
obj << Mesh Color( {0, 0, 255} );

```

### Mesh Color1

**構文:** obj &lt;&lt; Mesh Color( color ); obj &lt;&lt; Mesh Color1( color )

**説明:** 1つ目の従属変数に対する曲面メッシュの色を指定する。このオプションは、メッシュのオプションとして[オフ]以外の値が選択されている場合のみ利用できる。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );
obj << Show Mesh( "X and Y" );
Wait( 1 );
obj << Mesh Color( {0, 0, 255} );

```

### Mesh Color2

**構文:** obj &lt;&lt; Mesh Color2( color )

**説明:** 2つ目の従属変数に対する曲面メッシュの色を指定する。このオプションは、メッシュのオプションとして[オフ]以外の値が選択されている場合のみ利用できる。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ) );
obj << Mode( "Isosurface" );
obj << Show Mesh2( "X and Y" );
Wait( 1 );
obj << Mesh Color2( {255, 0, 0} );

```

### Mesh Color3

**構文:** obj &lt;&lt; Mesh Color3( color )

**説明:** 3つ目の従属変数に対する曲面メッシュの色を指定する。このオプションは、メッシュのオプションとして[オフ]以外の値が選択されている場合のみ利用できる。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG )
);
obj << Mode( "Isosurface" );
obj << Show Mesh3( "X and Y" );
Wait( 1 );
obj << Mesh Color3( {50, 0, 100} );

```

### Mesh Color4

**構文:** obj &lt;&lt; Mesh Color4( color )

**説明:** 4つ目の従属変数に対する曲面メッシュの色を指定する。このオプションは、メッシュのオプションとして[オフ]以外の値が選択されている場合のみ利用できる。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Mode( "Isosurface" );
obj << Show Mesh4( "X and Y" );
Wait( 1 );
obj << Mesh Color4( {0, 250, 0} );

```

### Mode

**構文:** obj &lt;&lt; Mode( "点と曲面"|"等値面"|"密度グリッド" )

**説明:** プロットでの曲面の表示の仕方を指定する。[Sheets, points]オプションは、点、曲面、線を表示する。等値面のオプションは、3つの独立変数を含んだ計算式を使用する。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Show Surface 2( "Both Sides" );
obj << Show Surface 4( "Both Sides" );
obj << Mode( "Isosurface" );

```

### Resolution

**構文:** obj &lt;&lt; Resolution( number )obj &lt;&lt; X Resolution( number )obj &lt;&lt; Y Resolution( number )

**説明:** 曲面プロットを描画するのに使用される解像度を変更する。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );
obj << Mode( "Isosurface" );
Wait( 1 );
obj << Resolution( 4 );
Wait( 1 );
obj << Resolution( 12 );

```

### Response

**構文:** obj &lt;&lt; Response( column, &lt;column&gt;, &lt;column&gt;, &lt;column&gt; )

**説明:** 点をプロットしたい応答列を指定する。途中の応答列を飛ばしたい場合には、引用符付きの空の文字列を指定する。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG ),
	Datapoints Choice3( "Surface" )
);
obj << Response( :Pred Formula ABRASION, "", :Pred Formula ELONG );

```

### Response Column Color Theme

**構文:** obj &lt;&lt; Response Column Color Theme( color theme ); obj &lt;&lt; Response Column Color Theme1( color theme )

**説明:** 1つ目の曲面におけるカラーテーマを変更する。このオプションは、連続グラデーションを使った応答列でのみ利用できる。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION ),
	Equation( ., ., ., . ),
	Datapoints Choice( "Surface" ),
	Response Column Fill( "Continuous Gradients" ),
	Response( :Pred Formula ABRASION )
);
Wait( 1 );
obj << Response Column Color Theme( "Jet" );

```

### Response Column Color Theme1

**構文:** obj &lt;&lt; Response Column Color Theme( color theme ); obj &lt;&lt; Response Column Color Theme1( color theme )

**説明:** 1つ目の曲面におけるカラーテーマを変更する。このオプションは、連続グラデーションを使った応答列でのみ利用できる。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION ),
	Equation( ., ., ., . ),
	Datapoints Choice( "Surface" ),
	Response Column Fill( "Continuous Gradients" ),
	Response( :Pred Formula ABRASION )
);
Wait( 1 );
obj << Response Column Color Theme( "Jet" );

```

### Response Column Color Theme2

**構文:** obj &lt;&lt; Response Column Color Theme2( color theme )

**説明:** 2つ目の曲面におけるカラーテーマを変更する。このオプションは、連続グラデーションを使った応答列でのみ利用できる。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ),
	Equation( ., ., ., . ),
	Datapoints Choice2( "Surface" ),
	Response Column Fill2( "Continuous Gradients" ),
	Response( "Pred Formula MODULUS", :Pred Formula MODULUS )
);
Wait( 1 );
obj << Response Column Color Theme2( "White to Black" );

```

### Response Column Color Theme3

**構文:** obj &lt;&lt; Response Column Color Theme3( color theme )

**説明:** 3つ目の曲面におけるカラーテーマを変更する。このオプションは、連続グラデーションを使った応答列でのみ利用できる。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG ),
	Equation( ., ., ., . ),
	Datapoints Choice3( "Surface" ),
	Response Column Fill3( "Continuous Gradients" ),
	Response( "Pred Formula ELONG", "Pred Formula ELONG", :Pred Formula ELONG )
);
Wait( 1 );
obj << Response Column Color Theme3( "Blue to Gray to Red" );

```

### Response Column Color Theme4

**構文:** obj &lt;&lt; Response Column Color Theme4( color theme )

**説明:** 4つ目の曲面におけるカラーテーマを変更する。このオプションは、連続グラデーションを使った応答列でのみ利用できる。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Equation( ., ., ., . ),
	Datapoints Choice4( "Surface" ),
	Response Column Fill4( "Continuous Gradients" ),
	Response(
		"Pred Formula HARDNESS", "Pred Formula HARDNESS", "Pred Formula HARDNESS",
		:Pred Formula HARDNESS
	)
);
Wait( 1 );
obj << Response Column Color Theme4( "White to Red" );

```

### Response Column Fill

**構文:** obj &lt;&lt; Response Column Fill( "Solid"|"Continuous Gradients"|"Discrete Gradients" ); obj &lt;&lt; Response Column Fill1( "Solid"|"Continuous Gradients"|"Discrete Gradients" )

**説明:** 1つ目の曲面を、単色・連続グラデーション・不連続グラデーションのどれで色付けするかを指定する。このオプションは、計算式を持たない応答列を使った曲面の場合のみ利用できる。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION ),
	Equation( ., ., ., . ),
	Datapoints Choice( "Surface" ),
	Response( :Pred Formula ABRASION )
);
Wait( 1 );
obj << Response Column Fill( "Discrete Gradients" );

```

### Response Column Fill1

**構文:** obj &lt;&lt; Response Column Fill( "Solid"|"Continuous Gradients"|"Discrete Gradients" ); obj &lt;&lt; Response Column Fill1( "Solid"|"Continuous Gradients"|"Discrete Gradients" )

**説明:** 1つ目の曲面を、単色・連続グラデーション・不連続グラデーションのどれで色付けするかを指定する。このオプションは、計算式を持たない応答列を使った曲面の場合のみ利用できる。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION ),
	Equation( ., ., ., . ),
	Datapoints Choice( "Surface" ),
	Response( :Pred Formula ABRASION )
);
Wait( 1 );
obj << Response Column Fill( "Discrete Gradients" );

```

### Response Column Fill2

**構文:** obj &lt;&lt; Response Column Fill2( "単色"|"連続グラデーション"|"不連続グラデーション" )

**説明:** 2つ目の曲面を、単色・連続グラデーション・不連続グラデーションのどれで色付けするかを指定する。このオプションは、計算式を持たない応答列を使った曲面の場合のみ利用できる。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ),
	Equation( ., ., ., . ),
	Datapoints Choice2( "Surface" ),
	Response( "Pred Formula MODULUS", :Pred Formula MODULUS )
);
Wait( 1 );
obj << Response Column Fill2( "Continuous Gradients" );

```

### Response Column Fill3

**構文:** obj &lt;&lt; Response Column Fill3( "単色"|"連続グラデーション"|"不連続グラデーション" )

**説明:** 3つ目の曲面を、単色・連続グラデーション・不連続グラデーションのどれで色付けするかを指定する。このオプションは、計算式を持たない応答列を使った曲面の場合のみ利用できる。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG ),
	Equation( ., ., ., . ),
	Datapoints Choice3( "Surface" ),
	Response( "Pred Formula ELONG", "Pred Formula ELONG", :Pred Formula ELONG )
);
Wait( 1 );
obj << Response Column Fill3( "Discrete Gradients" );

```

### Response Column Fill4

**構文:** obj &lt;&lt; Response Column Fill4( "単色"|"連続グラデーション"|"不連続グラデーション" )

**説明:** 4つ目の曲面を、単色・連続グラデーション・不連続グラデーションのどれで色付けするかを指定する。このオプションは、計算式を持たない応答列を使った曲面の場合のみ利用できる。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Equation( ., ., ., . ),
	Datapoints Choice4( "Surface" ),
	Response(
		"Pred Formula HARDNESS", "Pred Formula HARDNESS", "Pred Formula HARDNESS",
		:Pred Formula HARDNESS
	)
);
Wait( 1 );
obj << Response Column Fill4( "Continuous Gradients" );

```

### Response Column Gradient Lines

**構文:** obj &lt;&lt; Response Column Gradient Lines( state=0|1 ); obj &lt;&lt; Response Column Gradient Lines1( state=0|1 )

**説明:** 1つ目の曲面におけるグラデーションの水準間を区切る線の表示/非表示を切り替える。このオプションは、計算式を持たない応答列を使った不連続グラデーションの曲面の場合のみ利用できる。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION ),
	Equation( ., ., ., . ),
	Datapoints Choice( "Surface" ),
	Response Column Fill( "Discrete Gradients" ),
	Response( :Pred Formula ABRASION )
);
Wait( 1 );
obj << Response Column Gradient Lines( 0 );

```

### Response Column Gradient Lines1

**構文:** obj &lt;&lt; Response Column Gradient Lines( state=0|1 ); obj &lt;&lt; Response Column Gradient Lines1( state=0|1 )

**説明:** 1つ目の曲面におけるグラデーションの水準間を区切る線の表示/非表示を切り替える。このオプションは、計算式を持たない応答列を使った不連続グラデーションの曲面の場合のみ利用できる。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION ),
	Equation( ., ., ., . ),
	Datapoints Choice( "Surface" ),
	Response Column Fill( "Discrete Gradients" ),
	Response( :Pred Formula ABRASION )
);
Wait( 1 );
obj << Response Column Gradient Lines( 0 );

```

### Response Column Gradient Lines2

**構文:** obj &lt;&lt; Response Column Gradient Lines2( state=0|1 )

**説明:** 2つ目の曲面におけるグラデーションの水準間を区切る線の表示/非表示を切り替える。このオプションは、計算式を持たない応答列を使った不連続グラデーションの曲面の場合のみ利用できる。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ),
	Equation( ., ., ., . ),
	Datapoints Choice2( "Surface" ),
	Response Column Fill2( "Discrete Gradients" ),
	Response( "Pred Formula MODULUS", :Pred Formula MODULUS )
);
Wait( 1 );
obj << Response Column Gradient Lines2( 0 );

```

### Response Column Gradient Lines3

**構文:** obj &lt;&lt; Response Column Gradient Lines3( state=0|1 )

**説明:** 3つ目の曲面におけるグラデーションの水準間を区切る線の表示/非表示を切り替える。このオプションは、計算式を持たない応答列を使った不連続グラデーションの曲面の場合のみ利用できる。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG ),
	Equation( ., ., ., . ),
	Datapoints Choice3( "Surface" ),
	Response Column Fill3( "Discrete Gradients" ),
	Response( "Pred Formula ELONG", "Pred Formula ELONG", :Pred Formula ELONG )
);
obj << Response Column Gradient Lines3( 0 );
Wait( 1 );
obj << Response Column Gradient Lines3( 1 );

```

### Response Column Gradient Lines4

**構文:** obj &lt;&lt; Response Column Gradient Lines4( state=0|1 )

**説明:** 4つ目の曲面におけるグラデーションの水準間を区切る線の表示/非表示を切り替える。このオプションは、計算式を持たない応答列を使った不連続グラデーションの曲面の場合のみ利用できる。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Equation( ., ., ., . ),
	Datapoints Choice4( "Surface" ),
	Response Column Fill4( "Discrete Gradients" ),
	Response(
		"Pred Formula HARDNESS", "Pred Formula HARDNESS", "Pred Formula HARDNESS",
		:Pred Formula HARDNESS
	),
	Response Column Gradient Lines4( 0 )
);
Wait( 1 );
obj << Response Column Gradient Lines4( 1 );

```

### Response Column Gradients

**構文:** obj &lt;&lt; Response Column Gradients( number ); obj &lt;&lt; Response Column Gradients1( number )

**説明:** 1つ目の曲面におけるグラデーションの水準数を指定する。このオプションは、計算式を持たない応答列を使った不連続グラデーションの曲面の場合のみ利用できる。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION ),
	Equation( ., ., ., . ),
	Datapoints Choice( "Surface" ),
	Response Column Fill( "Discrete Gradients" ),
	Response( :Pred Formula ABRASION )
);
Wait( 1 );
obj << Response Column Gradients( 9 );

```

### Response Column Gradients1

**構文:** obj &lt;&lt; Response Column Gradients( number ); obj &lt;&lt; Response Column Gradients1( number )

**説明:** 1つ目の曲面におけるグラデーションの水準数を指定する。このオプションは、計算式を持たない応答列を使った不連続グラデーションの曲面の場合のみ利用できる。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION ),
	Equation( ., ., ., . ),
	Datapoints Choice( "Surface" ),
	Response Column Fill( "Discrete Gradients" ),
	Response( :Pred Formula ABRASION )
);
Wait( 1 );
obj << Response Column Gradients( 9 );

```

### Response Column Gradients2

**構文:** obj &lt;&lt; Response Column Gradients2( number )

**説明:** 2つ目の曲面におけるグラデーションの水準数を指定する。このオプションは、計算式を持たない応答列を使った不連続グラデーションの曲面の場合のみ利用できる。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ),
	Equation( ., ., ., . ),
	Datapoints Choice2( "Surface" ),
	Response Column Fill2( "Discrete Gradients" ),
	Response( "Pred Formula MODULUS", :Pred Formula MODULUS )
);
Wait( 1 );
obj << Response Column Gradients2( 8 );

```

### Response Column Gradients3

**構文:** obj &lt;&lt; Response Column Gradients3( number )

**説明:** 3つ目の曲面におけるグラデーションの水準数を指定する。このオプションは、計算式を持たない応答列を使った不連続グラデーションの曲面の場合のみ利用できる。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG ),
	Equation( ., ., ., . ),
	Datapoints Choice3( "Surface" ),
	Response Column Fill3( "Discrete Gradients" ),
	Response( "Pred Formula ELONG", "Pred Formula ELONG", :Pred Formula ELONG )
);
Wait( 1 );
obj << Response Column Gradients3( 7 );

```

### Response Column Gradients4

**構文:** obj &lt;&lt; Response Column Gradients4( number )

**説明:** 4つ目の曲面におけるグラデーションの水準数を指定する。このオプションは、計算式を持たない応答列を使った不連続グラデーションの曲面の場合のみ利用できる。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Equation( ., ., ., . ),
	Datapoints Choice4( "Surface" ),
	Response Column Fill4( "Discrete Gradients" ),
	Response(
		"Pred Formula HARDNESS", "Pred Formula HARDNESS", "Pred Formula HARDNESS",
		:Pred Formula HARDNESS
	)
);
Wait( 1 );
obj << Response Column Gradients4( 10 );

```

### Scale response axes independently

**構文:** obj = Surface Plot(...Scale response axes indenpendently( state=0|1 )...); obj &lt;&lt; Scale response axes independently( state=0|1 )

**説明:** 応答ごとに個別のスケールを使用するか、起動ウィンドウで1つ目に入力された応答のスケールをすべての応答に適用するかを指定する。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Scale response axes independently( 1 )
);
obj << Show Surface4( "Both sides" );
Wait( 1 );
obj << Scale response axes independently( 0 );

```

### Set Z Variable

**構文:** obj &lt;&lt; Set Z Variable( column )

**説明:** 曲面プロットのZ変数とする列を設定する。このオプションは、等値面でのみ利用できる。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ),
	Mode( "Isosurface" )
);
obj << Set Y Variable( :SULFUR );
Wait( 1 );
obj << Set Z Variable( :SILANE );

```

### SetVariableAxis

**構文:** obj &lt;&lt; SetVariableAxis( column, &lt;Current Value( number )&gt;, &lt;Axis Data( axis options )&gt; )

**説明:** 独立変数の軸の属性を指定する。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );
Wait( 1 );
obj << Set Variable Axis( :SULFUR, Current Value( 2.925 ) );
Wait( 1 );
obj << Set Variable Axis( :SILANE, Axis Data( {Format( "Fixed", 8, 1 )} ) );

```

### SetXVariable

**構文:** obj &lt;&lt; SetXVariable( column )

**説明:** 曲面プロットのX変数とする列を設定する。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );
Wait( 1 );
obj << Set X Variable( :SULFUR );

```

### SetYVariable

**構文:** obj &lt;&lt; SetYVariable( column )

**説明:** 曲面プロットのY変数とする列を設定する。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );
Wait( 1 );
obj << Set Y Variable( :SULFUR );

```

### SetZAxis

**構文:** obj &lt;&lt; SetZAxis( column, Current Value( number ), &lt;Axis Data( axis options )&gt; )

**説明:** Z軸の属性を指定する。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );
Wait( 1 );
obj << Set Z Axis( :Pred Formula ABRASION, Axis Data( {Format( "Fixed", 8, 1 )} ) );

```

### Show Contour

**構文:** obj &lt;&lt; Show Contour( "Off"|"Below"|"Above"|"On Surface" ); obj &lt;&lt; Show Contour1( "Off"|"Below|Above"|"On Surface" )

**説明:** 1つ目の応答の曲面に対する等高線の配置を指定する。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
Wait( 1 );
obj << Show Contour( "On Surface" );

```

### Show Contour1

**構文:** obj &lt;&lt; Show Contour( "Off"|"Below"|"Above"|"On Surface" ); obj &lt;&lt; Show Contour1( "Off"|"Below|Above"|"On Surface" )

**説明:** 1つ目の応答の曲面に対する等高線の配置を指定する。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
Wait( 1 );
obj << Show Contour( "On Surface" );

```

### Show Contour2

**構文:** obj &lt;&lt; Show Contour2( "オフ"|"下"|"上"|"曲面上" )

**説明:** 2つ目の応答の曲面に対する等高線の配置を指定する。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
Wait( 1 );
obj << Show Contour2( "Above" );

```

### Show Contour3

**構文:** obj &lt;&lt; Show Contour3( "オフ"|"下"|"上"|"曲面上" )

**説明:** 3つ目の応答の曲面に対する等高線の配置を指定する。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Show Surface3( "Both Sides" );
Wait( 1 );
obj << Show Contour3( "Below" );

```

### Show Contour4

**構文:** obj &lt;&lt; Show Contour4( "オフ"|"下"|"上"|"曲面上" )

**説明:** 4つ目の応答の曲面に対する等高線の配置を指定する。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Show Surface4( "Both Sides" );
Wait( 1 );
obj << Show Contour4( "On Surface" );

```

### Show Mesh

**構文:** obj &lt;&lt; Show Mesh( "Off"|"X"|"Y"|"X and Y" ); obj &lt;&lt; Show Mesh1( "Off"|"X"|"Y"|"X and Y" )

**説明:** 1つ目の応答における曲面メッシュのスタイルを指定する。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Show Mesh( "X and Y" );

```

### Show Mesh1

**構文:** obj &lt;&lt; Show Mesh( "Off"|"X"|"Y"|"X and Y" ); obj &lt;&lt; Show Mesh1( "Off"|"X"|"Y"|"X and Y" )

**説明:** 1つ目の応答における曲面メッシュのスタイルを指定する。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Show Mesh( "X and Y" );

```

### Show Mesh2

**構文:** obj &lt;&lt; Show Mesh2( "オフ"|"XとY"|"X"|"Y" )

**説明:** 2つ目の応答における曲面メッシュのスタイルを指定する。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Show Mesh2( "X" );

```

### Show Mesh3

**構文:** obj &lt;&lt; Show Mesh3( "オフ"|"XとY"|"X"|"Y" )

**説明:** 3つ目の応答における曲面メッシュのスタイルを指定する。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Show Mesh3( "Y" );

```

### Show Mesh4

**構文:** obj &lt;&lt; Show Mesh4( "オフ"|"XとY"|"X"|"Y" )

**説明:** 4つ目の応答における曲面メッシュのスタイルを指定する。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Show Mesh4( "X and Y" );

```

### Show Surface

**構文:** obj &lt;&lt; Show Surface( "Off"|"Both sides"|"Above only"|"Below only" ); obj &lt;&lt; Show Surface1( "Off"|"Both sides"|"Above only"|"Below only" )

**説明:** 第1の曲面の表示形式を指定する。このオプションは、計算式を持つ応答列から生成した曲面でのみ利用できる。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
Wait( 1 );
obj << Show Surface( "Below Only" );

```

### Show Surface1

**構文:** obj &lt;&lt; Show Surface( "Off"|"Both sides"|"Above only"|"Below only" ); obj &lt;&lt; Show Surface1( "Off"|"Both sides"|"Above only"|"Below only" )

**説明:** 第1の曲面の表示形式を指定する。このオプションは、計算式を持つ応答列から生成した曲面でのみ利用できる。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
Wait( 1 );
obj << Show Surface( "Below Only" );

```

### Show Surface2

**構文:** obj &lt;&lt; Show Surface2( "オフ"|"両面"|"表のみ"|"裏のみ" )

**説明:** 2つ目の曲面の表示について指定する。このオプションは、計算式を持つ応答列を使った曲面の場合のみ利用できる。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
Wait( 1 );
obj << Show Surface2( "Both Sides" );

```

### Show Surface3

**構文:** obj &lt;&lt; Show Surface3( "オフ"|"両面"|"表のみ"|"裏のみ" )

**説明:** 3つ目の曲面の表示について指定する。このオプションは、計算式を持つ応答列を使った曲面の場合のみ利用できる。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
Wait( 1 );
obj << Show Surface3( "Above Only" );

```

### Show Surface4

**構文:** obj &lt;&lt; Show Surface4( "オフ"|"両面"|"表のみ"|"裏のみ" )

**説明:** 4つ目の曲面の表示について指定する。このオプションは、計算式を持つ応答列を使った曲面の場合のみ利用できる。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ELONG, :Pred Formula ABRASION, :Pred Formula MODULUS,
		:Pred Formula HARDNESS
	)
);
Wait( 1 );
obj << Show Surface4( "Both Sides" );

```

### Show formula

**構文:** obj &lt;&lt; Show formula( state=0|1 )

**説明:** 曲面プロットに現在表示されているすべての従属変数において、計算式の表示/非表示を切り替える。

```jsl

obj = Surface Plot();
obj << Show Formula( 1 );

```

### Surface Alpha

**構文:** obj &lt;&lt; Surface Alpha( number ); obj &lt;&lt; Surface Alpha1( number )

**説明:** 1つ目の応答変数について、等値面の不透明度を指定する。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Mode( "Isosurface" );
Wait( 1 );
obj << Surface Alpha( 0.25 );

```

### Surface Alpha1

**構文:** obj &lt;&lt; Surface Alpha( number ); obj &lt;&lt; Surface Alpha1( number )

**説明:** 1つ目の応答変数について、等値面の不透明度を指定する。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Mode( "Isosurface" );
Wait( 1 );
obj << Surface Alpha( 0.25 );

```

### Surface Alpha2

**構文:** obj &lt;&lt; Surface Alpha2( number )

**説明:** 2つ目の応答変数について、等値面の不透明度を指定する。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Mode( "Isosurface" );
obj << Show Surface2( "Both sides" );
Wait( 1 );
obj << Surface Alpha2( 0.3 );

```

### Surface Alpha3

**構文:** obj &lt;&lt; Surface Alpha3( number )

**説明:** 3つ目の応答変数について、等値面の不透明度を指定する。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Mode( "Isosurface" );
obj << Show Surface3( "Both sides" );
Wait( 1 );
obj << Surface Alpha3( 0.75 );

```

### Surface Alpha4

**構文:** obj &lt;&lt; Surface Alpha4( number )

**説明:** 4つ目の応答変数について、等値面の不透明度を指定する。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Mode( "Isosurface" );
obj << Show Surface4( "Both sides" );
Wait( 1 );
obj << Surface Alpha4( 0.90 );

```

### Surface Color

**構文:** obj &lt;&lt; Surface Color( color ); obj &lt;&lt; Surface Color1( color )

**説明:** 1つ目の曲面を塗りつぶすときの色を指定する。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ), Show Surface( "Both Sides" ) );
Wait( 1 );
obj << Surface Color( {0, 0, 255} );

```

### Surface Color Method

**構文:** obj &lt;&lt; Surface Color Method( "Solid"|formula, &lt;"Solid"|formula&gt;, &lt;"Solid"|formula&gt;, &lt;"Solid"|formula&gt; )

**説明:** 4つの曲面それぞれに対して、曲面の塗り方を指定する。曲面の色の計算式は、曲面そのものの計算式と異なってもよい。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ),
	Show Surface2( "Both sides" )
);
obj << Surface Gradient Type( "Continuous Gradients" );
obj << Surface Color Method( "Solid", ":Pred Formula MODULUS" );
Wait( 1 );
obj << Surface Color Theme2( "Blue to Gray to Red" );

```

### Surface Color Range

**構文:** obj &lt;&lt; Surface Color Range( "Data"|"Axis" ); obj &lt;&lt; Surface Color Range1( "Data"|"Axis" )

**説明:** 1つ目の曲面におけるカラーグラデーションの範囲を指定する。このオプションは、グラデーションが使われている場合のみ利用できる。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Show Surface( "Both Sides" )
);
obj << Surface Color Method( ":Pred Formula ABRASION" );
Wait( 1 );
obj << Surface Color Range( "Axis" );

```

### Surface Color Range1

**構文:** obj &lt;&lt; Surface Color Range( "Data"|"Axis" ); obj &lt;&lt; Surface Color Range1( "Data"|"Axis" )

**説明:** 1つ目の曲面におけるカラーグラデーションの範囲を指定する。このオプションは、グラデーションが使われている場合のみ利用できる。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Show Surface( "Both Sides" )
);
obj << Surface Color Method( ":Pred Formula ABRASION" );
Wait( 1 );
obj << Surface Color Range( "Axis" );

```

### Surface Color Range2

**構文:** obj &lt;&lt; Surface Color Range2( "データ"|"軸" )

**説明:** 2つ目の曲面におけるカラーグラデーションの範囲を指定する。このオプションは、グラデーションが使われている場合のみ利用できる。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Show Surface2( "Both Sides" )
);
obj << Surface Color Method( "Solid", ":Pred Formula MODULUS" );
Wait( 1 );
obj << Surface Color Range2( "Data" );

```

### Surface Color Range3

**構文:** obj &lt;&lt; Surface Color Range3( "データ"|"軸" )

**説明:** 3つ目の曲面におけるカラーグラデーションの範囲を指定する。このオプションは、グラデーションが使われている場合のみ利用できる。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Show Surface3( "Both Sides" )
);
obj << Surface Color Method( "Solid", "Solid", ":Pred Formula ELONG" );
Wait( 1 );
obj << Surface Color Range3( "Axis" );

```

### Surface Color Range4

**構文:** obj &lt;&lt; Surface Color Range4( "データ"|"軸" )

**説明:** 4つ目の曲面におけるカラーグラデーションの範囲を指定する。このオプションは、グラデーションが使われている場合のみ利用できる。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Show Surface4( "Both Sides" )
);
obj << Surface Color Method( "Solid", "Solid", "Solid", ":Pred Formula HARDNESS" );
Wait( 1 );
obj << Surface Color Range4( "Data" );

```

### Surface Color Theme

**構文:** obj &lt;&lt; Surface Color Theme( color theme ); obj &lt;&lt; Surface Color Theme1( color theme )

**説明:** 1つ目の曲面におけるカラーテーマを指定する。このオプションは、グラデーションを使った、計算式を持つ応答の列でのみ利用できる。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );
obj << Surface Gradient Type( "Continuous Gradients" );
obj << Surface Color Method( ":Pred Formula ABRASION" );
Wait( 1 );
obj << Surface Color Theme( "Blue to Gray to Red" );

```

### Surface Color Theme1

**構文:** obj &lt;&lt; Surface Color Theme( color theme ); obj &lt;&lt; Surface Color Theme1( color theme )

**説明:** 1つ目の曲面におけるカラーテーマを指定する。このオプションは、グラデーションを使った、計算式を持つ応答の列でのみ利用できる。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );
obj << Surface Gradient Type( "Continuous Gradients" );
obj << Surface Color Method( ":Pred Formula ABRASION" );
Wait( 1 );
obj << Surface Color Theme( "Blue to Gray to Red" );

```

### Surface Color Theme2

**構文:** obj &lt;&lt; Surface Color Theme2( color theme )

**説明:** 2つ目の曲面におけるカラーテーマを指定する。このオプションは、グラデーションを使った、計算式を持つ応答の列でのみ利用できる。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ),
	Show Surface2( "Both sides" )
);
obj << Surface Gradient Type2( "Continuous Gradients" );
obj << Surface Color Method( "Solid", ":Pred Formula MODULUS" );
Wait( 1 );
obj << Surface Color Theme2( "White to Black" );

```

### Surface Color Theme3

**構文:** obj &lt;&lt; Surface Color Theme3( color theme )

**説明:** 3つ目の曲面におけるカラーテーマを指定する。このオプションは、グラデーションを使った、計算式を持つ応答の列でのみ利用できる。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG ),
	Show Surface3( "Both Sides" )
);
obj << Surface Gradient Type3( "Continuous Gradients" );
obj << Surface Color Method( "Solid", "Solid", ":Pred Formula ELONG" );
Wait( 1 );
obj << Surface Color Theme3( "Spectral" );

```

### Surface Color Theme4

**構文:** obj &lt;&lt; Surface Color Theme4( color theme )

**説明:** 4つ目の曲面におけるカラーテーマを指定する。このオプションは、グラデーションを使った、計算式を持つ応答の列でのみ利用できる。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Show Surface4( "Both Sides" )
);
obj << Surface Gradient Type4( "Continuous Gradients" );
obj << Surface Color Method( "Solid", "Solid", "Solid", ":Pred Formula HARDNESS" );
Wait( 1 );
obj << Surface Color Theme4( "Jet" );

```

### Surface Color1

**構文:** obj &lt;&lt; Surface Color( color ); obj &lt;&lt; Surface Color1( color )

**説明:** 1つ目の曲面を塗りつぶすときの色を指定する。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ), Show Surface( "Both Sides" ) );
Wait( 1 );
obj << Surface Color( {0, 0, 255} );

```

### Surface Color2

**構文:** obj &lt;&lt; Surface Color2( color )

**説明:** 2つ目の曲面を塗りつぶすときの色を指定する。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ),
	Show Surface2( "Both Sides" )
);
obj << Surface Color2( {255, 128, 0} );

```

### Surface Color3

**構文:** obj &lt;&lt; Surface Color3( color )

**説明:** 3つ目の曲面を塗りつぶすときの色を指定する。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG ),
	Show Surface3( "Both Sides" )
);
obj << Surface Color3( {255, 0, 0} );

```

### Surface Color4

**構文:** obj &lt;&lt; Surface Color4( color )

**説明:** 4つ目の曲面を塗りつぶすときの色を指定する。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Show Surface4( "Both Sides" )
);
obj << Surface Color4( {100, 0, 200} );

```

### Surface Gradient Type

**構文:** obj &lt;&lt; Surface Gradient Type( "Solid"|"Continuous Gradients"|"Discrete Gradients" ); obj &lt;&lt; Surface Gradient Type1( "Solid"|"Continuous Gradients"|"Discrete Gradients" )

**説明:** 1つ目の曲面における塗りつぶしの種類を指定する。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );
Wait( 1 );
obj << Surface Gradient Type( "Continuous Gradients" );
obj << Surface Color Method( ":Pred Formula ABRASION" );

```

### Surface Gradient Type1

**構文:** obj &lt;&lt; Surface Gradient Type( "Solid"|"Continuous Gradients"|"Discrete Gradients" ); obj &lt;&lt; Surface Gradient Type1( "Solid"|"Continuous Gradients"|"Discrete Gradients" )

**説明:** 1つ目の曲面における塗りつぶしの種類を指定する。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );
Wait( 1 );
obj << Surface Gradient Type( "Continuous Gradients" );
obj << Surface Color Method( ":Pred Formula ABRASION" );

```

### Surface Gradient Type2

**構文:** obj &lt;&lt; Surface Gradient Type2( "単色"|"連続グラデーション"|"不連続グラデーション" )

**説明:** 2つ目の曲面における塗りつぶしの種類を指定する。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ),
	Show Surface2( "Both sides" )
);
Wait( 1 );
obj << Surface Gradient Type2( "Discrete Gradients" );
obj << Surface Color Method( "Solid", ":Pred Formula MODULUS" );

```

### Surface Gradient Type3

**構文:** obj &lt;&lt; Surface Gradient Type3( "単色"|"連続グラデーション"|"不連続グラデーション" )

**説明:** 3つ目の曲面における塗りつぶしの種類を指定する。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG ),
	Show Surface3( "Both Sides" )
);
Wait( 1 );
obj << Surface Gradient Type3( "Solid" );
obj << Surface Color Method( "Solid", "Solid", ":Pred Formula ELONG" );

```

### Surface Gradient Type4

**構文:** obj &lt;&lt; Surface Gradient Type4( "単色"|"連続グラデーション"|"不連続グラデーション" )

**説明:** 4つ目の曲面における塗りつぶしの種類を指定する。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Show Surface4( "Both Sides" )
);
Wait( 1 );
obj << Surface Gradient Type4( "Discrete Gradients" );
obj << Surface Color Method( "Solid", "Solid", "Solid", ":Pred Formula HARDNESS" );

```

### Surface Gradients

**構文:** obj &lt;&lt; Surface Gradients( number ); obj &lt;&lt; Surface Gradients1( number )

**説明:** 1つ目の曲面におけるグラデーションの水準数を指定する。このオプションは、不連続グラデーションが使われている場合のみ利用できる。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION ),
	Surface Color Method( ":Pred Formula ABRASION" )
);
obj << Surface Gradient Type( "Discrete Gradients" );
Wait( 1 );
obj << Surface Gradients( 9 );

```

### Surface Gradients1

**構文:** obj &lt;&lt; Surface Gradients( number ); obj &lt;&lt; Surface Gradients1( number )

**説明:** 1つ目の曲面におけるグラデーションの水準数を指定する。このオプションは、不連続グラデーションが使われている場合のみ利用できる。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION ),
	Surface Color Method( ":Pred Formula ABRASION" )
);
obj << Surface Gradient Type( "Discrete Gradients" );
Wait( 1 );
obj << Surface Gradients( 9 );

```

### Surface Gradients2

**構文:** obj &lt;&lt; Surface Gradients2( number )

**説明:** 2つ目の曲面におけるグラデーションの水準数を指定する。このオプションは、不連続グラデーションが使われている場合のみ利用できる。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ),
	Show Surface2( "Both sides" ),
	Surface Color Method( "Solid", ":Pred Formula MODULUS" )
);
obj << Surface Gradient Type2( "Discrete Gradients" );
Wait( 1 );
obj << Surface Gradients2( 8 );

```

### Surface Gradients3

**構文:** obj &lt;&lt; Surface Gradients3( number )

**説明:** 3つ目の曲面におけるグラデーションの水準数を指定する。このオプションは、不連続グラデーションが使われている場合のみ利用できる。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG ),
	Show Surface3( "Both sides" ),
	Surface Color Method( "Solid", "Solid", ":Pred Formula ELONG" )
);
obj << Surface Gradient Type3( "Discrete Gradients" );
Wait( 1 );
obj << Surface Gradients3( 10 );

```

### Surface Gradients4

**構文:** obj &lt;&lt; Surface Gradients4( number )

**説明:** 4つ目の曲面におけるグラデーションの水準数を指定する。このオプションは、不連続グラデーションが使われている場合のみ利用できる。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Show Surface4( "Both sides" ),
	Surface Color Method( "Solid", "Solid", "Solid", ":Pred Formula HARDNESS" )
);
obj << Surface Gradient Type4( "Discrete Gradients" );
Wait( 1 );
obj << Surface Gradients4( 9 );

```

### Surface Lighting

**構文:** obj &lt;&lt; Surface Lighting( "None"|"Low Reflection"|"Normal" ); obj &lt;&lt; Surface Lighting1( "None"|"Low Reflection"|"Normal" )

**説明:** 1つ目の曲面におけるライトの設定をする。このオプションは、連続グラデーションと不連続グラデーションでのみ利用できる。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );
obj << Surface Color Method( ":Pred Formula ABRASION" );
Wait( 1 );
obj << Surface Lighting( "Low Reflection" );

```

### Surface Lighting1

**構文:** obj &lt;&lt; Surface Lighting( "None"|"Low Reflection"|"Normal" ); obj &lt;&lt; Surface Lighting1( "None"|"Low Reflection"|"Normal" )

**説明:** 1つ目の曲面におけるライトの設定をする。このオプションは、連続グラデーションと不連続グラデーションでのみ利用できる。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );
obj << Surface Color Method( ":Pred Formula ABRASION" );
Wait( 1 );
obj << Surface Lighting( "Low Reflection" );

```

### Surface Lighting2

**構文:** obj &lt;&lt; Surface Lighting2( "なし"|"低反射"|"通常" )

**説明:** 2つ目の曲面におけるライトの設定をする。このオプションは、連続グラデーションと不連続グラデーションでのみ利用できる。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ) );
obj << Show Surface2( "Both Sides" );
obj << Surface Color Method( "Solid", ":Pred Formula MODULUS" );
Wait( 1 );
obj << Surface Lighting2( "Normal" );

```

### Surface Lighting3

**構文:** obj &lt;&lt; Surface Lighting3( "なし"|"低反射"|"通常" )

**説明:** 3つ目の曲面におけるライトの設定をする。このオプションは、連続グラデーションと不連続グラデーションでのみ利用できる。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Show Surface3( "Both Sides" );
obj << Surface Color Method( "Solid", "Solid", ":Pred Formula ELONG" );
Wait( 1 );
obj << Surface Lighting3( "Low Reflection" );

```

### Surface Lighting4

**構文:** obj &lt;&lt; Surface Lighting4( "なし"|"低反射"|"通常" )

**説明:** 4つ目の曲面におけるライトの設定をする。このオプションは、連続グラデーションと不連続グラデーションでのみ利用できる。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Show Surface4( "Both Sides" );
obj << Surface Color Method( "Solid", "Solid", "Solid", ":Pred Formula HARDNESS" );
Wait( 1 );
obj << Surface Lighting4( "Normal" );

```

### Surface Selector

**構文:** obj &lt;&lt; Surface Selector( state=0|1 )

**説明:** 従属変数のパネルにおける曲面オプションの表示/非表示を切り替える。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
Wait( 1 );
obj << Surface Selector( 0 );

```

### X Grid

**構文:** obj &lt;&lt; X Grid( state=0|1 )

**説明:** X軸と垂直なグリッドの表示/非表示を切り替える。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << X Grid( 1 );

```

### X Resolution

**構文:** obj &lt;&lt; Resolution( number )obj &lt;&lt; X Resolution( number )obj &lt;&lt; Y Resolution( number )

**説明:** 曲面プロットを描画するのに使用される解像度を変更する。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );
obj << Mode( "Isosurface" );
Wait( 1 );
obj << Resolution( 4 );
Wait( 1 );
obj << Resolution( 12 );

```

### XRotate

**構文:** obj &lt;&lt; XRotate( degrees )

**説明:** X軸上で曲面プロットを回転する。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );
Wait( 1 );
obj << XRotate( 30 );

```

### Y Grid

**構文:** obj &lt;&lt; Y Grid( state=0|1 )

**説明:** Y軸と垂直なグリッドの表示/非表示を切り替える。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Y Grid( 1 );

```

### Y Resolution

**構文:** obj &lt;&lt; Resolution( number )obj &lt;&lt; X Resolution( number )obj &lt;&lt; Y Resolution( number )

**説明:** 曲面プロットを描画するのに使用される解像度を変更する。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );
obj << Mode( "Isosurface" );
Wait( 1 );
obj << Resolution( 4 );
Wait( 1 );
obj << Resolution( 12 );

```

### YRotate

**構文:** obj &lt;&lt; YRotate( degrees )

**説明:** Y軸上で曲面プロットを回転する。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );
Wait( 1 );
obj << YRotate( 20 );

```

### Z Grid

**構文:** obj &lt;&lt; Z Grid( state=0|1 )

**説明:** Z軸と垂直なグリッドの表示/非表示を切り替える。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Z Grid( 1 );

```

### Z Grid Position

**構文:** obj &lt;&lt; Z Grid Position( fraction )

**説明:** Zグリッドを指定の割合だけ移動する。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );
obj << Z Grid( 1 );
Wait( 1 );
obj << Z Grid Position( 0.733 );

```

### ZRotate

**構文:** obj &lt;&lt; ZRotate( degrees )

**説明:** Z軸上で曲面プロットを回転する。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );
Wait( 1 );
obj << ZRotate( 45 );

```

## Surface Frame3D

### 関連するコンストラクター

#### Surface Frame3D

**構文:** Surface Frame3D( &lt;commands passed to Frame3D&gt; )

**説明:** 表示コマンドを3Dプロットに送信する。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);

```

### 項目のメッセージ

#### Add Ellipsoid

**構文:** obj &lt;&lt; Add Ellipsoid( 4x4 matrix )obj &lt;&lt; Add Ellipsoid(3x3 cov,3x1 means)obj &lt;&lt; Add Ellipsoid(3x3 corr,3x1 means,3x1 std dev)

**説明:** プロットに楕円を描画する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
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

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Add Markers( [2 3 4], [5 6 7], [1 8 9] ) );

```

#### Add Vector

**構文:** obj &lt;&lt; Add Vector( [ 3xn from matrix ], [ 3xn to matrix ], FromCap( CutOff|Sphere|Point|Feather ), ToCap( CutOff|Sphere|Point|Feather ), Facets( Triangle|Square|Round ), Shaft Color( color ), Shaft Thickness( number ), From Thickness( number ), To Thickness( number ), From Color( number ), To Color( number ) ) )

**説明:** プロットにベクトルまたは矢印を描画する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Add Vector( [4.5 2 1], [7.5 4 6], FromCap( "Feather" ), ToCap( "Point" ) ) );

```

#### Get Axes

**構文:** obj &lt;&lt; Get Axes

**説明:** プロットの軸の表示状態を戻す。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
s = obj << Frame3D( Get Axes );
Show( s );

```

#### Get Box

**構文:** obj &lt;&lt; Get Box

**説明:** プロットのボックスフレームの表示状態を戻す。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
s = obj << Frame3D( Get Box );
Show( s );

```

#### Get Grab Handles

**構文:** obj &lt;&lt; Get Grab Handles

**説明:** プロットのグラブハンドルの表示状態を戻す。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
s = obj << Frame3D( Get Box );
Show( s );

```

#### Get Graph Size

**構文:** obj &lt;&lt; Get Graph Size

**説明:** グラフのサイズを戻す。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
s = obj << Frame3D( Get Graph Size );
Show( s );

```

#### Get Grids

**構文:** obj &lt;&lt; Get Grids

**説明:** プロットのグリッドの表示状態を戻す。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
s = obj << Frame3D( Get Grids );
Show( s );

```

#### Get Hide Lights Border

**構文:** obj &lt;&lt; Get Hide Lights Border

**説明:** プロットの周りのライト枠の状態を戻す。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
state = obj << Frame3D( Get Hide Lights Border );
Show( state );

```

#### Get Line Scale

**構文:** obj &lt;&lt; Get Line Scale

**説明:** プロットのグリッドの線幅を戻す。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
w = obj << Frame3D( Get Line Scale );
Show( w );

```

#### Get Marker Quality

**構文:** obj &lt;&lt; Get Marker Quality

**説明:** プロットのマーカー特性(形状や濃淡などの綺麗さ)を戻す。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
q = obj << Frame3D( Get Marker Quality );
Show( q );

```

#### Get Marker Scale

**構文:** obj &lt;&lt; Get Marker Scale

**説明:** プロットのマーカーサイズを戻す。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
s = obj << Frame3D( Get Marker Scale );
Show( s );

```

#### Get Marker Transparency

**構文:** obj &lt;&lt; Get Marker Transparency

**説明:** プロットのマーカーの透明度を戻す。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
t = obj << Frame3D( Get Marker Transparency );
Show( t );

```

#### Get Rotation

**構文:** obj &lt;&lt; Get Rotation

**説明:** フレームの現在の回転を戻す。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
r = obj << Frame3D( Get Rotation() );
Show( r );

```

#### Get Text Scale

**構文:** obj &lt;&lt; Get Text Scale

**説明:** プロットの軸テキストのテキストサイズを戻す。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
s = obj << Frame3D( Get Text Scale );
Show( s );

```

#### Get View Ortho

**構文:** obj &lt;&lt; Get View Ortho

**説明:** プロットにおける平行投影の状態を戻す。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
o = obj << Frame3D( Get View Ortho );
Show( o );

```

#### Get View Perspective

**構文:** obj &lt;&lt; Get View Perspective

**説明:** プロットの透視投影を戻す。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
p = obj << Frame3D( Get View Perspective );
Show( p );

```

#### Get View Zoom

**構文:** obj &lt;&lt; Get View Zoom

**説明:** プロットの現在のズームを戻す。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
z = obj << Frame3D( Get View Zoom );
Show( z );

```

#### Get Wall Color

**構文:** obj &lt;&lt; Get Wall Color

**説明:** プロットの壁の色を戻す。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
c = obj << Frame3D( Get Wall Color );
Show( c );

```

#### Get Walls

**構文:** obj &lt;&lt; Get Walls

**説明:** プロットの壁の表示状態を戻す。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
s = obj << Frame3D( Get Walls );
Show( s );

```

#### Get X Axis Color

**構文:** obj &lt;&lt; Get X Axis Color

**説明:** プロットのX軸の色を戻す。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
c = obj << Frame3D( Get X Axis Color );
Show( c );

```

#### Get X Axis Label

**構文:** obj &lt;&lt; Get X Axis Label

**説明:** プロットのX軸のラベルを戻す。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
label = obj << Frame3D( Get X Axis Label );
Show( label );

```

#### Get Y Axis Color

**構文:** obj &lt;&lt; Get Y Axis Color

**説明:** プロットのY軸の色を戻す。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
c = obj << Frame3D( Get Y Axis Color );
Show( c );

```

#### Get Y Axis Label

**構文:** obj &lt;&lt; Get Y Axis Label

**説明:** プロットのY軸のラベルを戻す。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
label = obj << Frame3D( Get Y Axis Label );
Show( label );

```

#### Get Z Axis Color

**構文:** obj &lt;&lt; Get Z Axis Color

**説明:** プロットのZ軸の色を戻す。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
c = obj << Frame3D( Get Z Axis Color );
Show( c );

```

#### Get Z Axis Label

**構文:** obj &lt;&lt; Get Z Axis Label

**説明:** プロットのZ軸のラベルを戻す。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
label = obj << Frame3D( Get Z Axis Label );
Show( label );

```

#### Legend

**構文:** obj &lt;&lt; Legend( state=0|1 )

**説明:** プロットの凡例の表示/非表示を切り替える。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Show Surface2( Both Sides )
);
obj << Frame3D( Legend( 0 ) );
Wait( 2 );
obj << Frame3D( Legend( 1 ) );

```

#### Set Axes

**構文:** obj &lt;&lt; Set Axes( state=0|1 )

**説明:** プロットのX、Y、Z軸の表示/非表示を切り替える。デフォルトでは表示。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set Axes( 1 ) );

```

#### Set Box

**構文:** obj &lt;&lt; Set Box( state=0|1 )

**説明:** プロットのボックスフレームの表示/非表示を切り替える。デフォルトでは表示。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set Box( 1 ) );

```

#### Set Graph Size

**構文:** obj &lt;&lt; Set Graph Size( x, y )

**説明:** グラフのサイズを設定する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set Graph Size( 700, 800 ) );

```

#### Set Grids

**構文:** obj &lt;&lt; Set Grids( state=0|1 )

**説明:** プロットのグリッドの表示/非表示を切り替える。デフォルトでは表示。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set Grids( 1 ) );

```

#### Set Hide Lights Border

**構文:** obj &lt;&lt; Set Hide Lights Border( state=0|1 )

**説明:** プロットの周りのライト枠の表示/非表示を切り替える。デフォルトでは表示。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set Hide Lights Border( 0 ) );

```

#### Set Line Scale

**構文:** obj &lt;&lt; Set Line Scale( number )

**説明:** プロットのグリッドの線幅を設定する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set Line Scale( 6.5 ) );

```

#### Set Marker Quality

**構文:** obj &lt;&lt; Set Marker Quality( number )

**説明:** プロットのマーカー特性(形状や濃淡などの綺麗さ)を設定する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set Marker Scale( 3 ), Set Marker Quality( 0.2625 ) );

```

#### Set Marker Scale

**構文:** obj &lt;&lt; Set Marker Scale( number )

**説明:** プロットのマーカーサイズを設定する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set Marker Scale( 3.5 ) );

```

#### Set Marker Transparency

**構文:** obj &lt;&lt; Set Marker Transparency( fraction )

**説明:** プロットにマーカーの透明度を設定する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set Marker Transparency( 0.4125 ) );

```

#### Set Oscillation

**構文:** obj &lt;&lt; Set Oscillation( X, Y, Z, duration )

**説明:** プロットの振幅を設定する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set Rotation( -60, -3, 35 ), Set Oscillation( -54, 0, 38, 100 ) );

```

#### Set Rotation

**構文:** obj &lt;&lt; Set Rotation( X, Y, Z )

**説明:** 指定の座標にフレームを回転する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set Rotation( -60, -3, 35 ) );

```

#### Set Spin

**構文:** obj &lt;&lt; Set Spin( dx, dy, sx, sy )

**説明:** 指定の軸上でグラフを回転する。dxとdyの値は、ポイント(sx, sy)からどれだけ動かすかの値。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set Spin( .01, .01, 0, 0 ) );

```

#### Set Text Scale

**構文:** obj &lt;&lt; Set Text Scale( number )

**説明:** プロットの軸テキストのテキストサイズを設定する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set Text Scale( 1.4 ) );

```

#### Set View Ortho

**構文:** obj &lt;&lt; Set View Ortho( state=0|1 )

**説明:** プロットを平行投影(直交射影)で表示する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set View Ortho( 1 ) );

```

#### Set View Perspective

**構文:** obj &lt;&lt; Set View Perspective( fraction )

**説明:** プロットの透視投影を設定する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set View Perspective( 0.275 ) );

```

#### Set View Zoom

**構文:** obj &lt;&lt; Set View Zoom( number )

**説明:** プロットのズームを設定する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set View Zoom( 0.5 ) );
Wait( 2 );
obj << Frame3D( Set View Zoom( 2 ) );

```

#### Set Wall Color

**構文:** obj &lt;&lt; Set Wall Color( number )

**説明:** プロットの壁の色を設定する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set Wall Color( -16775543 ) );

```

#### Set Walls

**構文:** obj &lt;&lt; Set Walls( state=0|1 )

**説明:** プロットの壁の表示/非表示を切り替える。デフォルトでは表示。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set Walls( 1 ) );

```

#### Set X Axis Color

**構文:** obj &lt;&lt; Set X Axis Color( color )

**説明:** プロットのX軸の色を設定する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set X Axis Color( 5 ) );

```

#### Set X Axis Label

**構文:** obj &lt;&lt; Set X Axis Label( string )

**説明:** プロットのX軸のラベルを設定する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set X Axis Label( "Iris Sepal Length" ) );

```

#### Set Y Axis Color

**構文:** obj &lt;&lt; Set Y Axis Color( color )

**説明:** プロットのY軸の色を設定する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set Y Axis Color( 11 ) );

```

#### Set Y Axis Label

**構文:** obj &lt;&lt; Set Y Axis Label( string )

**説明:** プロットのY軸のラベルを設定する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set Y Axis Label( "Iris Petal Length" ) );

```

#### Set Z Axis Color

**構文:** obj &lt;&lt; Set Z Axis Color( color )

**説明:** プロットのZ軸の色を設定する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set Z Axis Color( "Green" ) );

```

#### Set Z Axis Label

**構文:** obj &lt;&lt; Set Z Axis Label( string )

**説明:** プロットのZ軸のラベルを設定する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set Z Axis Label( "Iris Sepal Width" ) );

```

#### XAxis

**構文:** obj &lt;&lt; XAxis( Min( number ), Max( number ), Inc( number ), Format( ) )

**説明:** プロットのX軸の値を設定する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( XAxis( Min( 3 ), Max( 10 ) ) );

```

#### YAxis

**構文:** obj &lt;&lt; YAxis( Min( number ), Max( number ), Inc( number ), Format( ) )

**説明:** プロットのY軸の値を設定する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( YAxis( Min( 1 ), Max( 10 ), Inc( 0.5 ) ) );

```

#### Z Axis

**構文:** obj &lt;&lt; Z Axis( Min( number ), Max( number ), Inc( number ), Format( ) )

**説明:** プロットのZ軸の値を設定する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( ZAxis( Min( 1 ), Max( 5 ), Inc( 0.25 ) ) );

```

#### get light active

**構文:** obj &lt;&lt; get light active( light number )

**説明:** プロットを照らす指定のライトのオン/オフの状態を戻す。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
p = obj << Frame3D( Set Hide Lights Border( 0 ), Get Light Active( 2 ) );
Show( p );

```

#### get light color

**構文:** obj &lt;&lt; get light color( light number )

**説明:** プロットを照らす指定のライトの色をリスト{red, green, blue}で戻す。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
c = obj << Frame3D( Set Hide Lights Border( 0 ), Get Light Color( 1 ) );
Show( c );

```

#### get light position

**構文:** obj &lt;&lt; get light position( light number )

**説明:** プロットを照らす指定のライトの位置をリスト{x, y, z}で戻す。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
p = obj << Frame3D( Set Hide Lights Border( 0 ), Get Light Position( 2 ) );
Show( p );

```

#### set light active

**構文:** obj &lt;&lt; set light active( light number, state=0|1 )

**説明:** プロットを照らす指定のライトをオンにする。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set Hide Lights Border( 0 ), Set Light Active( 4, 1 ) );

```

#### set light color

**構文:** obj &lt;&lt; set light color( light number, red value, green value, blue value )

**説明:** プロットを照らすライトの色を設定する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set Hide Lights Border( 0 ), Set Light Color( 2, 240, 50, 70 ) );

```

#### set light position

**構文:** obj &lt;&lt; set light position( light number, X, Y, Z )

**説明:** プロットを照らすライトの位置を設定する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set Hide Lights Border( 0 ), Set Light Position( 2, -1.5833, 10, 0 ) );

```

