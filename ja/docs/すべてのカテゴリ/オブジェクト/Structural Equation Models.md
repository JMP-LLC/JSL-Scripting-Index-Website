# Structural Equation Models



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

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	)
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

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	),
	By( _bycol )
);
obj[1] << Copy ByGroup Script;

```

### Copy Script

**構文:** obj &lt;&lt; Copy Script

**説明:** この分析を再現するJSLスクリプトを生成し、クリップボードにコピーする。

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	)
);
obj << Copy Script;

```

### Data Table Window

**構文:** obj &lt;&lt; Data Table Window

**説明:** この分析に使用したデータテーブルのウィンドウを手前に表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
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

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
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

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	)
);
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

### Get Data Table

**構文:** obj &lt;&lt; Get Data Table

**説明:** データテーブルへの参照を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
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

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	)
);
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**構文:** obj &lt;&lt; Get Script With Data Table

**説明:** この分析を再現するスクリプト(JSL)をデータテーブルへの参照も含めて生成し、それを式として戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	)
);
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**構文:** obj &lt;&lt; Get Timing

**説明:** プラットフォームの起動にかかった時間を取得する。

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
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

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	)
);
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**構文:** obj &lt;&lt; Redo ByGroup Analysis

**説明:** 同じ分析をやり直し新しいウィンドウに表示する。データが変更されていると分析結果は異なる。

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	),
	By( _bycol )
);
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**構文:** obj &lt;&lt; Relaunch Analysis

**説明:** プラットフォームの起動ウィンドウを開き、レポートを作成した時の設定を表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	)
);
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**構文:** obj &lt;&lt; Relaunch ByGroup

**説明:** プラットフォームの起動ウィンドウを開き、レポートを作成した時の設定を表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
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

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
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

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	)
);
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**構文:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**説明:** 分析を再現するためのJSLスクリプトを作成し、データテーブルにテーブルプロパティとして保存する。スクリプトの名前を指定できる。Append Suffixオプションは、スクリプト名に数字の接尾辞を追加する。これにより、同名のスクリプトが存在していても区別できる。Promptオプションは、ユーザにスクリプト名の指定を促す。Replaceオプションは、同名の既存のスクリプトを置き換える。

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**構文:** obj &lt;&lt; Save ByGroup Script to Journal

**説明:** この分析を再現するJSLスクリプトを生成し、ジャーナルにそのスクリプトのボタンを追加する。

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**構文:** obj &lt;&lt; Save ByGroup Script to Script Window

**説明:** この分析を再現するJSLスクリプトを生成し、現在のスクリプトウィンドウに表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**構文:** obj &lt;&lt; Save Script for All Objects

**説明:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	)
);
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**構文:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**説明:** すべてのレポートオブジェクトを再現するスクリプトを現在のデータテーブルに保存する。このオプションは、ウィンドウ内にレポートが複数ある場合に便利。作成されるスクリプトの名前は、引用符で囲んで指定しない限り、1つ目のプラットフォーム名となる。

#### 例 1

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table;

```

#### 例 2

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**構文:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**説明:** この分析を再現するJSLスクリプトを生成し、データテーブルのテーブルプロパティとして保存する。

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	)
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**構文:** obj &lt;&lt; Save Script to Journal

**説明:** この分析を再現するJSLスクリプトを生成し、ジャーナルにそのスクリプトのボタンを追加する。

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	)
);
obj << Save Script to Journal;

```

### Save Script to Report

**構文:** obj &lt;&lt; Save Script to Report

**説明:** この分析を再現するJSLスクリプトを生成し、レポートウィンドウに表示する。分析手順の記録を結果と一緒に残せる。

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	)
);
obj << Save Script to Report;

```

### Save Script to Script Window

**構文:** obj &lt;&lt; Save Script to Script Window

**説明:** この分析を再現するJSLスクリプトを生成し、現在のスクリプトウィンドウに表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
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

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	)
);
obj << Title( "My Platform" );

```

### Top Report

**構文:** obj &lt;&lt; Top Report

**説明:** レポート内のルートノードへの参照を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
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

**構文:** obj = Structural Equation Models(...Window View( "Visible"|"Invisible"|"Private" )...)

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

### Freq

**構文:** obj &lt;&lt; Freq( column )

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
dt << New Column( "_freqcol", Numeric, Continuous, Formula( Random Integer( 1, 5 ) ) );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	),
	Freq( _freqcol )
);

```

### Groups

**構文:** obj &lt;&lt; Groups( column )

**説明:** 多母集団分析におけるグループ変数を指定する。

```jsl

dt = Open( "$SAMPLE_DATA/Academic Achievement.jmp" );
dt << Structural Equation Models( Model Variables( 4 :: 7 ), Groups( :Sex ) );

```

### Mean

**構文:** obj = Structural Equation Models(...&lt;Mean( column )&gt;...)

**説明:** 相関行列または共分散行列を分析対象とする時に、顕在変数の平均が含まれた列を指定する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
mat = dt[0, 2 :: 5];
mat_cor = Correlation( mat );
mat_means = V Mean( mat );
mat_sds = V Std( mat );
As Table( mat_cor || mat_means` || mat_sds` ) << Set Name( "Correlation" );
Data Table( "Correlation" ) << Structural Equation Models(
	Data Format( "Matrix" ),
	Model Variables( 1 :: 4 ),
	Mean( :Col5 ),
	Std Dev( :Col6 ),
	Sample Size( 200 )
);

```

### Model Variables

**構文:** obj &lt;&lt; Model Variables( column(s) )

**説明:** 分析に用いる変数を指定する。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L )
);

```

### Std Dev

**構文:** obj = Structural Equation Models(...&lt;Std Dev( column )&gt;...)

**説明:** 相関行列を分析対象とする時に、顕在変数の標準偏差が含まれた列を指定する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
mat = dt[0, 2 :: 5];
mat_cor = Correlation( mat );
mat_means = V Mean( mat );
mat_sds = V Std( mat );
As Table( mat_cor || mat_means` || mat_sds` ) << Set Name( "Correlation" );
Data Table( "Correlation" ) << Structural Equation Models(
	Data Format( "Matrix" ),
	Model Variables( 1 :: 4 ),
	Mean( :Col5 ),
	Std Dev( :Col6 ),
	Sample Size( 200 )
);

```

### Weight

**構文:** obj &lt;&lt; Weight( column )

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
dt << New Column( "_weightcol", Numeric, Continuous, Formula( Random Beta( 1, 1 ) ) );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	),
	Weight( _weightcol )
);

```

## 関連するコンストラクター

### Structural Equation Models

**構文:** Structural Equation Models( Model Variables ( columns ) )

**説明:** 構造方程式モデルをあてはめる。構造方程式モデルには、確証的因子分析モデル、(潜在変数がある場合も含む)パスモデル、測定誤差モデル、潜在成長曲線モデルなどのさまざまなモデルが含まれる。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	)
);

```

## 項目のメッセージ

### Add Manifest Variables

**構文:** obj &lt;&lt; Add Manifest Variables

**説明:** 既存のモデルで用いている変数群に、指定された顕在変数を追加する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Run Script( "SEM: CFA 1Factor Conflict UI" );
obj << Add Manifest Variables();

```

### Bootstrap Inference

**構文:** obj &lt;&lt; Bootstrap Inference

**説明:** 「構造方程式モデル」レポートであてはめられたモデルに対して、ユーザによって選択された推定値のブートストラップ推測を実行する。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Bootstrap Inference( Parameter Estimates( 1 ), Indirect Effects( 1 ) );

```

### Compare Selected Models

**構文:** obj &lt;&lt; Compare Selected Models

**説明:** 「モデルの比較」で選択されているモデルをカイ2乗検定などで比べる。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Run Script( "SEM: Measurement Models" );
obj << Compare Selected Models( {"Orthogonal 3-Factor CFA", "3-Factor CFA"} );

```

### Copy Diagram Properties

**構文:** obj &lt;&lt; Copy Diagram Properties

**説明:** 現在のパス図のプロパティをクリップボードにコピーする。それを、別の構造方程式モデルのパス図に貼り付けることができる。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
dt2 = Open( "$SAMPLE_DATA/Academic Achievement.jmp" );
obj = dt2 << Run Script( "SEM: Compare Growth Trajectories" );
obj << Copy Diagram Properties();
obj2 = dt << Structural Equation Models( Model Variables( 2 :: 12 ) );
obj2 << Paste Diagram Properties();

```

### Copy Model Specification

**構文:** obj &lt;&lt; Copy Model Specification

**説明:** 現在の構造方程式モデルの設定をクリップボードにコピーする。それを、別の「構造方程式モデル」レポートに貼り付けることができる。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Run Script( "SEM: Path Analysis no Latent" );
obj << Copy Model Specification();
obj2 = dt << Structural Equation Models(
	Model Variables( :Leadership_Avg, :Conflict_Avg, :Satisfaction_Avg )
);
obj2 << Paste Model Specification();

```

### Estimation Method

**構文:** obj = Structural Equation Models(...Estimation Method( "最尤法 (ML・FIML)"|"ロバスト最尤法"|"MIIV 2段階最小2乗法" )...)

**説明:** モデルを推定する際の推定方法を指定する。

**JMP追加されたバージョン:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Estimation Method( "MIIV Two-Stage Least Squares" ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Goal_L, :Work_L, :Interact_L, "Leader"}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 ),
		Assess Measurement Model( 1 )
	)
);

```

### Fit

**構文:** obj &lt;&lt; Fit

**説明:** 構造方程式モデルを指定して、あてはめる。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		)
	)
);

```

### Fit Independence Model

**構文:** obj = Structural Equation Models(...Fit Independence Model( state=0|1 )...)

**説明:** このオプションをオンにすると、プラットフォームの起動時に、独立モデルもあてはめる。 デフォルトではオン。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit Independence Model( 0 )
);

```

### Fit Unrestricted Model

**構文:** obj &lt;&lt; Fit Unrestricted Model( state=0|1 )

**説明:** このオプションをオンにすると、プラットフォームの起動時に、無構造モデル(飽和モデル)もあてはめる。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit Unrestricted Model( 0 )
);

```

### Full Information Multivariate Statistics

**構文:** obj &lt;&lt; Full Information Multivariate Statistics( state=0|1 )

**説明:** 多変量の枠組みで求めた基本統計量の表示/非表示を切り替える。この基本統計量は、欠測値を考慮した完全情報最尤法によって推定される。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L )
);
obj << Full Information Multivariate Statistics( 1 );

```

### Generate R Code

**構文:** obj &lt;&lt; Generate R Code

**説明:** パズ図に現段階で指定されているモデルのRコードを生成する。このRコードは、スクリプトエディタウィンドウに書き込まれる。

**JMP追加されたバージョン:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Run Script( "SEM: Path Analysis no Latent" );
obj << Generate R Code();

```

### Hide Model

**構文:** obj &lt;&lt; Hide Model

**説明:** 「モデルの比較」表における選択にしたがってモデルを非表示にする。

**JMP追加されたバージョン:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		)
	),
	Hide Model( {3} )
);

```

### Launch Explore Missing Values

**構文:** obj &lt;&lt; Launch Explore Missing Values

**説明:** 「欠測値を調べる」プラットフォームを起動する。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L )
);
obj << Launch Explore Missing Values( 1 );

```

### Launch Explore Outliers

**構文:** obj &lt;&lt; Launch Explore Outliers

**説明:** 「外れ値を調べる」プラットフォームを起動する。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L )
);
obj << Launch Explore Outliers( 1 );

```

### Model Specification

**構文:** obj &lt;&lt; Model Specification

**説明:** 構造方程式モデルの指定を有効にする。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Leadership_Avg, :Conflict_Avg ),
	Model Specification(
		Model Name( "Means and Variances Model" ),
		Means( {"Constant", {:Leadership_Avg, :Conflict_Avg}} ),
		Variances( {:Leadership_Avg, {:Leadership_Avg}}, {:Conflict_Avg, {:Conflict_Avg}} )
	)
);

```

### Paste Diagram Properties

**構文:** obj &lt;&lt; Paste Diagram Properties

**説明:** クリップボードにあるパス図のプロパティを現在の構造方程式モデルのパス図に貼り付ける。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
dt2 = Open( "$SAMPLE_DATA/Academic Achievement.jmp" );
obj = dt2 << Run Script( "SEM: Compare Growth Trajectories" );
obj << Copy Diagram Properties();
obj2 = dt << Structural Equation Models( Model Variables( 2 :: 12 ) );
obj2 << Paste Diagram Properties();

```

### Paste Model Specification

**構文:** obj &lt;&lt; Paste Model Specification

**説明:** クリップボードにあるモデルの設定を現在のモデルの設定に貼り付ける。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Run Script( "SEM: Path Analysis no Latent" );
obj << Copy Model Specification();
obj2 = dt << Structural Equation Models(
	Model Variables( :Leadership_Avg, :Conflict_Avg, :Satisfaction_Avg )
);
obj2 << Paste Model Specification();

```

### Path Diagram Properties

**構文:** obj &lt;&lt; Path Diagram Properties

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Academic Achievement.jmp" );
obj = dt << Structural Equation Models(
	Model Variables(
		:Multiple Choice Year1, :Multiple Choice Year2, :Multiple Choice Year3,
		:Multiple Choice Year4
	),
	Fit(
		Model Name( "Linear Growth Model" ),
		New Latent( "Intercept", "Slope" ),
		Means( {"Constant", {"Intercept", "Slope"}} ),
		Loadings(
			{"Intercept", {:Multiple Choice Year1, :Multiple Choice Year2,
			:Multiple Choice Year3, :Multiple Choice Year4}, {1, 1, 1, 1}},
			{"Slope", {:Multiple Choice Year1, :Multiple Choice Year2, :Multiple Choice Year3,
			:Multiple Choice Year4}, {0, 1, 2, 3}}
		),
		Variances(
			{:Multiple Choice Year1, {:Multiple Choice Year1}, {"b1"}},
			{:Multiple Choice Year2, {:Multiple Choice Year2}, {"b1"}},
			{:Multiple Choice Year3, {:Multiple Choice Year3}, {"b1"}},
			{:Multiple Choice Year4, {:Multiple Choice Year4}, {"b1"}},
			{"Intercept", {"Intercept"}},
			{"Slope", {"Slope"}}
		),
		Covariances( {"Intercept", {"Slope"}} ),
		Path Diagram Properties( Show Means( 1 ) )
	)
);

```

### Remove Manifest Variables

**構文:** obj &lt;&lt; Remove Manifest Variables

**説明:** 既存のモデルから、指定された変数を削除する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Run Script( "SEM: CFA 1Factor Conflict UI" );
obj << Remove Manifest Variables();

```

### Reset Independence Model

**構文:** obj &lt;&lt; Reset Independence Model

**説明:** ユーザが指定した独立モデルをデフォルトの独立モデルに戻す。

**JMP追加されたバージョン:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Academic Achievement.jmp" );
obj = dt << Run Script( "SEM: Compare Growth Trajectories" );
obj << Set as Independence Model( 2 );
obj << Reset Independence Model();

```

### Robust Inference

**構文:** obj &lt;&lt; Robust Inference( state=0|1 )

**説明:** 最尤推定法(完全情報最尤推定法)に基づく点推定値に対して、サンドイッチ標準誤差を計算する。このサンドイッチ標準誤差は、確率分布が連続型であるが正規分布でない場合に対しても、ロバストな推測方法となっている。また、適合度統計量も、ロバストな推測の枠組みに基づくものを計算する。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Robust Inference( 1 );

```

### Set as Independence Model

**構文:** obj &lt;&lt; Set as Independence Model( number )

**説明:** デフォルトの独立モデルをユーザが指定したモデルに置き換える。

**JMP追加されたバージョン:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Academic Achievement.jmp" );
obj = dt << Run Script( "SEM: Compare Growth Trajectories" );
obj << Set as Independence Model( 2 );

```

### Standardize Latent Variables

**構文:** obj = Structural Equation Models(...Standardize Latent Variables( state=0|1 )...)

**説明:** 潜在変数の分散を1に固定する。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Standardize Latent Variables( 1 )
);

```

### Univariate Simple Statistics

**構文:** obj &lt;&lt; Univariate Simple Statistics( state=0|1 )

**説明:** 単変量の枠組みで求めた基本統計量の表示/非表示を切り替える。この基本統計量は列ごとに算出され、他の列に欠測値があってもその影響を受けない。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L )
);
obj << Univariate Simple Statistics( 1 );

```

## Structural Equation Models Fit

### 項目のメッセージ

#### All Modification Indices

**構文:** obj &lt;&lt; All Modification Indices( state=0|1 )

**説明:** モデル修正指標の表示/非表示を切り替える。この結果に基づいて、どのパラメータをモデルに追加すればあてはめが改善できるかを判断できる。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Modification Indices( 1 );

```

#### Assess Measurement Model

**構文:** obj &lt;&lt; Assess Measurement Model( state=0|1 )

**説明:** 検定や指標の信頼性および妥当性を示す統計量の表示/非表示を切り替える。これらの統計量には、指標変数の信頼性、ω係数、H係数、構成概念妥当性行列などがある。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Run Script( "SEM: Measurement Models" );
obj << Assess Measurement Model( 1 );

```

#### Confidence Intervals

**構文:** obj &lt;&lt; Confidence Intervals( state=0|1 )

**説明:** すべてのパラメータ推定値について、95%信頼区間の表示/非表示を切り替える。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Confidence Intervals( 1 );

```

#### Copy Diagram Properties

**構文:** obj &lt;&lt; Copy Diagram Properties

**説明:** 現在のパス図のプロパティをクリップボードにコピーする。それを、別の構造方程式モデルのパス図に貼り付けることができる。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
dt2 = Open( "$SAMPLE_DATA/Academic Achievement.jmp" );
obj = dt2 << Run Script( "SEM: Compare Growth Trajectories" );
obj << Copy Diagram Properties();
obj2 = dt << Structural Equation Models( Model Variables( 2 :: 12 ) );
obj2 << Paste Diagram Properties();

```

#### Copy Model Specification

**構文:** obj &lt;&lt; Copy Model Specification

**説明:** 現在の構造方程式モデルの設定をクリップボードにコピーする。それを、別の「構造方程式モデル」レポートに貼り付けることができる。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Run Script( "SEM: Path Analysis w/ Latent" );
obj << (Fit[1] << Copy Model Specification());
obj2 = dt << Structural Equation Models( Model Variables( 2 :: 12 ) );
obj2 << Paste Model Specification();

```

#### Correlation of Estimates

**構文:** obj &lt;&lt; Correlation of Estimates( state=0|1 )

**説明:** 「推定値の相関」の表示/非表示を切り替える。これは、推定値間における相関係数行列である。

**JMP追加されたバージョン:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Correlation of Estimates( 1 );

```

#### Correlation of Estimates Heat Map

**構文:** obj &lt;&lt; Correlation of Estimates Heat Map( state=0|1 )

**説明:** 「推定値の相関」のヒートマップの表示/非表示を切り替える。これは、推定値間における相関係数行列のヒートマップである。

**JMP追加されたバージョン:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Correlation of Estimates Heat Map( 1 );

```

#### Covariance of Estimates

**構文:** obj &lt;&lt; Covariance of Estimates( state=0|1 )

**説明:** パラメータ推定値の共分散行列の表示/非表示を切り替える。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Covariance of Estimates( 1 );

```

#### Covariance of Estimates Heat Map

**構文:** obj &lt;&lt; Covariance of Estimates Heat Map( state=0|1 )

**説明:** 「推定値の共分散」のヒートマップの表示/非表示を切り替える。これは、推定値間における共分散行列のヒートマップである。

**JMP追加されたバージョン:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Covariance of Estimates Heat Map( 1 );

```

#### Covariances

**構文:** obj &lt;&lt; Covariances

**説明:** モデルの変数間に共分散を追加する。

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Leadership_Avg, :Conflict_Avg ),
	Model Specification(
		Means( {"Constant", {:Leadership_Avg, :Conflict_Avg}} ),
		Covariances( {:Leadership_Avg, {:Conflict_Avg}} ),
		Variances( {:Leadership_Avg, {:Leadership_Avg}}, {:Conflict_Avg, {:Conflict_Avg}} )
	)
);

```

#### Define Time Values

**構文:** obj &lt;&lt; Define Time Values

**説明:** 経時的モデルで用いる時点を設定する。設定された時点の値は、成長曲線モデルなどの経時的モデルで使われる。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Academic Achievement.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Multiple Choice Year1, :Multiple Choice Year3, :Multiple Choice Year4 ),
	Fit(
		Model Name( "Linear Growth Model" ),
		Define Time Values( {0, 2, 3} ),
		New Latent( "Intercept", "Slope" ),
		Means( {"Constant", {"Intercept", "Slope"}} ),
		Loadings(
			{"Intercept", {:Multiple Choice Year1, :Multiple Choice Year3,
			:Multiple Choice Year4}, {1, 1, 1}},
			{"Slope", {:Multiple Choice Year1, :Multiple Choice Year3, :Multiple Choice Year4
			}, {0, 2, 3}}
		),
		Variances(
			{:Multiple Choice Year1, {:Multiple Choice Year1}, {"b1"}},
			{:Multiple Choice Year3, {:Multiple Choice Year3}, {"b1"}},
			{:Multiple Choice Year4, {:Multiple Choice Year4}, {"b1"}},
			{"Intercept", {"Intercept"}},
			{"Slope", {"Slope"}}
		),
		Covariances( {"Intercept", {"Slope"}} ),
		Path Diagram Properties( Show Means( 1 ) ),
		Predicted Values Plot( 1, 1 )
	)
);

```

#### Equation Details

**構文:** obj &lt;&lt; Equation Details( state=0|1 )

**説明:** モデルの各方程式に関する詳細の表示/非表示を切り替える。

**JMP追加されたバージョン:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Estimation Method( "MIIV Two-Stage Least Squares" ),
	Fit(
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		)
	)
);
obj << Equation Details( 0 );

```

#### Fit Indices

**構文:** obj &lt;&lt; Fit Indices( state=0|1 )

**説明:** モデルの適合度指標に関するレポートの表示/非表示を切り替える。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Fit Indices( 1 );

```

#### Indirect Effects

**構文:** obj &lt;&lt; Indirect Effects( state=0|1 )

**説明:** 「間接効果」レポートの表示/非表示を切り替える。このレポートには、該当のモデルから導出されるすべての間接効果が列挙される。

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Indirect Effects( 1 );

```

#### Loadings

**構文:** obj &lt;&lt; Loadings

**説明:** モデルの潜在変数に因子負荷を追加する。

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		)
	)
);

```

#### Means/Intercepts

**構文:** obj &lt;&lt; Means/Intercepts

**説明:** モデルの変数に平均や切片を追加する。

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Model Specification(
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}}
		)
	)
);

```

#### Model Implied Correlations

**構文:** obj &lt;&lt; Model Implied Correlations( state=0|1 )

**説明:** モデルから求められる相関推定値のの 表示/非表示を切り替える。

**JMP追加されたバージョン:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Model Implied Correlations( 1 );

```

#### Model Implied Correlations Heat Map

**構文:** obj &lt;&lt; Model Implied Correlations Heat Map( state=0|1 )

**説明:** 「モデルから求められる相関推定値」のヒートマップの表示/非表示を切り替える。

**JMP追加されたバージョン:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Model Implied Correlations Heat Map( 1 );

```

#### Model Implied Covariances

**構文:** obj &lt;&lt; Model Implied Covariances( state=0|1 )

**説明:** モデルから求めた共分散行列の表示/非表示を切り替える。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Model Implied Covariances( 1 );

```

#### Model Implied Covariances Heat Map

**構文:** obj &lt;&lt; Model Implied Covariances Heat Map( state=0|1 )

**説明:** 「モデルから求められる共分散推定値」のヒートマップの表示/非表示を切り替える。

**JMP追加されたバージョン:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Model Implied Covariances Heat Map( 1 );

```

#### Model Implied Means

**構文:** obj &lt;&lt; Model Implied Means( state=0|1 )

**説明:** モデルから求めた変数の平均の表示/非表示を切り替える。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Model Implied Means( 1 );

```

#### Model Name

**構文:** obj &lt;&lt; Model Name

**説明:** モデル名を設定する。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Leadership_Avg, :Conflict_Avg ),
	Model Specification(
		Model Name( "Means and Variances Model" ),
		Means( {"Constant", {:Leadership_Avg, :Conflict_Avg}} ),
		Variances( {:Leadership_Avg, {:Leadership_Avg}}, {:Conflict_Avg, {:Conflict_Avg}} )
	)
);

```

#### Modification Indices

**構文:** obj &lt;&lt; Modification Indices( state=0|1 )

**説明:** モデル修正指標の表示/非表示を切り替える。この結果に基づいて、どのパラメータをモデルに追加すればあてはめが改善できるかを判断できる。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Modification Indices( 1 );

```

#### Modification Indices for Covariances

**構文:** obj &lt;&lt; Modification Indices for Covariances( state=0|1 )

**説明:** モデル修正指標の表示/非表示を切り替える。この結果に基づいて、どのパラメータをモデルに追加すればあてはめが改善できるかを判断できる。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Modification Indices for Covariances( 1 );

```

#### Modification Indices for Loadings

**構文:** obj &lt;&lt; Modification Indices for Loadings( state=0|1 )

**説明:** モデル修正指標の表示/非表示を切り替える。この結果に基づいて、どのパラメータをモデルに追加すればあてはめが改善できるかを判断できる。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Modification Indices for Loadings( 1 );

```

#### Modification Indices for Means

**構文:** obj &lt;&lt; Modification Indices for Means( state=0|1 )

**説明:** モデル修正指標の表示/非表示を切り替える。この結果に基づいて、どのパラメータをモデルに追加すればあてはめが改善できるかを判断できる。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Academic Achievement.jmp" );
obj = dt << Structural Equation Models(
	Model Variables(
		:Multiple Choice Year1, :Multiple Choice Year2, :Multiple Choice Year3,
		:Multiple Choice Year4
	),
	Fit(
		Model Name( "Linear Growth Model" ),
		New Latent( "Intercept", "Slope" ),
		Means( {"Constant", {"Intercept", "Slope"}} ),
		Loadings(
			{"Intercept", {:Multiple Choice Year1, :Multiple Choice Year2,
			:Multiple Choice Year3, :Multiple Choice Year4}, {1, 1, 1, 1}},
			{"Slope", {:Multiple Choice Year1, :Multiple Choice Year2, :Multiple Choice Year3,
			:Multiple Choice Year4}, {0, 1, 2, 3}}
		),
		Variances(
			{:Multiple Choice Year1, {:Multiple Choice Year1}, {"b1"}},
			{:Multiple Choice Year2, {:Multiple Choice Year2}, {"b1"}},
			{:Multiple Choice Year3, {:Multiple Choice Year3}, {"b1"}},
			{:Multiple Choice Year4, {:Multiple Choice Year4}, {"b1"}},
			{"Intercept", {"Intercept"}},
			{"Slope", {"Slope"}}
		),
		Covariances( {"Intercept", {"Slope"}} ),
		Path Diagram Properties( Show Means( 1 ) )
	)
);
obj << Modification Indices for Means( 1 );

```

#### Modification Indices for Regressions

**構文:** obj &lt;&lt; Modification Indices for Regressions( state=0|1 )

**説明:** モデル修正指標の表示/非表示を切り替える。この結果に基づいて、どのパラメータをモデルに追加すればあてはめが改善できるかを判断できる。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Modification Indices for Regressions( 1 );

```

#### Modification Indices for Variances

**構文:** obj &lt;&lt; Modification Indices for Variances( state=0|1 )

**説明:** モデル修正指標の表示/非表示を切り替える。この結果に基づいて、どのパラメータをモデルに追加すればあてはめが改善できるかを判断できる。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Academic Achievement.jmp" );
obj = dt << Structural Equation Models(
	Model Variables(
		:Multiple Choice Year1, :Multiple Choice Year2, :Multiple Choice Year3,
		:Multiple Choice Year4
	),
	Fit(
		Model Name( "Linear Growth Model" ),
		New Latent( "Intercept", "Slope" ),
		Means( {"Constant", {"Intercept", "Slope"}} ),
		Loadings(
			{"Intercept", {:Multiple Choice Year1, :Multiple Choice Year2,
			:Multiple Choice Year3, :Multiple Choice Year4}, {1, 1, 1, 1}},
			{"Slope", {:Multiple Choice Year1, :Multiple Choice Year2, :Multiple Choice Year3,
			:Multiple Choice Year4}, {0, 1, 2, 3}}
		),
		Variances(
			{:Multiple Choice Year1, {:Multiple Choice Year1}, {.25}},
			{:Multiple Choice Year2, {:Multiple Choice Year2}, {.25}},
			{:Multiple Choice Year3, {:Multiple Choice Year3}, {.25}},
			{:Multiple Choice Year4, {:Multiple Choice Year4}, {.25}},
			{"Intercept", {"Intercept"}},
			{"Slope", {"Slope"}}
		),
		Covariances( {"Intercept", {"Slope"}} ),
		Path Diagram Properties( Show Means( 1 ) )
	)
);
obj << Modification Indices for Variances( 1 );

```

#### New Latent

**構文:** obj &lt;&lt; New Latent

**説明:** モデルに新しい潜在変数を追加する。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Model Specification(
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		)
	)
);

```

#### Normalized Residuals

**構文:** obj &lt;&lt; Normalized Residuals( state=0|1 )

**説明:** 正規化した残差の行列の表示/非表示を切り替える。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Normalized Residuals( 1 );

```

#### Normalized Residuals Heat Map

**構文:** obj &lt;&lt; Normalized Residuals Heat Map( state=0|1 )

**説明:** 正規化した残差のヒートマップの表示/非表示を切り替える。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Normalized Residuals Heat Map( 1 );

```

#### Parameter Estimates

**構文:** obj &lt;&lt; Parameter Estimates( state=0|1 )

**説明:** 標準化していないパラメータ推定値の表示/非表示を切り替える。 デフォルトではオン。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Parameter Estimates( 0 );

```

#### Paste Diagram Properties

**構文:** obj &lt;&lt; Paste Diagram Properties

**説明:** クリップボードにあるパス図のプロパティを現在の構造方程式モデルのパス図に貼り付ける。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
dt2 = Open( "$SAMPLE_DATA/Academic Achievement.jmp" );
obj = dt2 << Run Script( "SEM: Compare Growth Trajectories" );
obj << Copy Diagram Properties();
obj2 = dt << Structural Equation Models( Model Variables( 2 :: 12 ) );
obj2 << Paste Diagram Properties();

```

#### Path Diagram Properties

**構文:** obj &lt;&lt; Path Diagram Properties

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Academic Achievement.jmp" );
obj = dt << Structural Equation Models(
	Model Variables(
		:Multiple Choice Year1, :Multiple Choice Year2, :Multiple Choice Year3,
		:Multiple Choice Year4
	),
	Fit(
		Model Name( "Linear Growth Model" ),
		New Latent( "Intercept", "Slope" ),
		Means( {"Constant", {"Intercept", "Slope"}} ),
		Loadings(
			{"Intercept", {:Multiple Choice Year1, :Multiple Choice Year2,
			:Multiple Choice Year3, :Multiple Choice Year4}, {1, 1, 1, 1}},
			{"Slope", {:Multiple Choice Year1, :Multiple Choice Year2, :Multiple Choice Year3,
			:Multiple Choice Year4}, {0, 1, 2, 3}}
		),
		Variances(
			{:Multiple Choice Year1, {:Multiple Choice Year1}, {"b1"}},
			{:Multiple Choice Year2, {:Multiple Choice Year2}, {"b1"}},
			{:Multiple Choice Year3, {:Multiple Choice Year3}, {"b1"}},
			{:Multiple Choice Year4, {:Multiple Choice Year4}, {"b1"}},
			{"Intercept", {"Intercept"}},
			{"Slope", {"Slope"}}
		),
		Covariances( {"Intercept", {"Slope"}} ),
		Path Diagram Properties( Show Means( 1 ) )
	)
);

```

#### Predicted Values Plot

**構文:** obj &lt;&lt; Predicted Values Plot( state=0|1 )

**説明:** 予測値プロットの表示/非表示を切り替える。予測値プロットは、モデルの内生変数に対する予測値をプロットしたグラフである。

**JMP追加されたバージョン:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Academic Achievement.jmp" );
obj = dt << Run Script( "SEM: LGC with LDF" );
obj << Predicted Values Plot( 1, 1 );

```

#### Prediction Profiler

**構文:** obj &lt;&lt; Prediction Profiler

**説明:** 選択された予測変数と結果変数に関して、予測プロファイルを表示する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Run Script( "SEM: Path Analysis w / Latent" );
obj << Prediction Profiler(
	1,
	Confidence Intervals( 1 ),
	Term Value( Leadership( 0, Lock( 0 ), Show( 1 ) ), Conflict( 0, Lock( 0 ), Show( 1 ) ) ),
	Y Terms( Conflict, Satisfaction )
);

```

#### R Square for Endogenous Variables

**構文:** obj &lt;&lt; R Square for Endogenous Variables( state=0|1 )

**説明:** モデルにおけるすべての内生変数のR2乗値の表示/非表示を切り替える。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << R Square for Endogenous Variables( 1 );

```

#### RAM Matrices

**構文:** obj &lt;&lt; RAM Matrices( state=0|1 )

**説明:** RAM構造で表現されたモデル行列の表示/非表示を切り替える。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << RAM Matrices( 1 );

```

#### Recall in Model Specification

**構文:** obj &lt;&lt; Recall in Model Specification

**説明:** 当該のモデルを、「モデルの指定」レポートのモデルに設定する。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Recall in Model Specification( 1 );

```

#### Regressions

**構文:** obj &lt;&lt; Regressions

**説明:** モデルに回帰のパスを追加する。

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Leadership_Avg, :Conflict_Avg ),
	Model Specification(
		Means( {"Constant", {:Leadership_Avg, :Conflict_Avg}} ),
		Regressions( {:Leadership_Avg, {:Conflict_Avg}} ),
		Variances( {:Leadership_Avg, {:Leadership_Avg}}, {:Conflict_Avg, {:Conflict_Avg}} )
	)
);

```

#### Remove Fit

**構文:** obj &lt;&lt; Remove Fit

**説明:** レポートウィンドウから、当該のモデルのレポートを削除する。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Remove Fit( 1 );

```

#### Residuals

**構文:** obj &lt;&lt; Residuals( state=0|1 )

**説明:** 残差行列の表示/非表示を切り替える。この残差行列は、モデルから求めた共分散行列と、標本共分散行列の差である。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Residuals( 1 );

```

#### Save Bartlett Factor Scores

**構文:** obj &lt;&lt; Save Bartlett Factor Scores

**説明:** データテーブルに、各変数の因子スコアを含めた列を保存する。因子スコアは、非表示の列において中間の計算がなされ、その非表示の列もデータテーブルに追加される。 Bartlett法によって因子スコアを推定する。

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Save Bartlett Factor Scores();

```

#### Save Factor Scores

**構文:** obj &lt;&lt; Save Factor Scores

**説明:** データテーブルに、各変数の因子スコアを含めた列を保存する。因子スコアは、非表示の列において中間の計算がなされ、その非表示の列もデータテーブルに追加される。 回帰法によって因子スコアを推定する。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Save Factor Scores();

```

#### Save Observational Residuals

**構文:** obj &lt;&lt; Save Observational Residuals

**説明:** 観測された結果変数の残差を、データテーブルの新しい列に保存する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Save Observational Residuals();

```

#### Save Prediction Formulas

**構文:** obj &lt;&lt; Save Prediction Formulas

**説明:** 観測された結果変数の予測値を求める計算式を、データテーブルの新しい列に保存する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Save Prediction Formulas();

```

#### Show Path Diagram

**構文:** obj &lt;&lt; Show Path Diagram( state=0|1 )

**説明:** 構造方程式モデルにおけるパス図の表示/非表示を切り替える。 デフォルトではオン。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Show Path Diagram( 0 );

```

#### Specific Indirect Effects

**構文:** obj &lt;&lt; Specific Indirect Effects

**説明:** 推定したい特定の間接効果を指定する。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Specific Indirect Effects( {"Ind60", "Dem65"} );

```

#### Standardized Parameter Estimates

**構文:** obj &lt;&lt; Standardized Parameter Estimates( state=0|1 )

**説明:** 標準化したパラメータ推定値の表示/非表示を切り替える。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Standardized Parameter Estimates( 1 );

```

#### Summary of Fit

**構文:** obj &lt;&lt; Summary of Fit( state=0|1 )

**説明:** モデルのあてはめに関する詳細の表示/非表示を切り替える。 デフォルトではオン。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Summary of Fit( 0 );

```

#### Total Effects

**構文:** obj &lt;&lt; Total Effects( state=0|1 )

**説明:** 「総合効果」レポートの表示/非表示を切り替える。このレポートには、該当のモデルから導出されるすべての総合効果が列挙される。

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Total Effects( 1 );

```

#### Variances

**構文:** obj &lt;&lt; Variances

**説明:** モデルの変数に分散を追加する。

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Model Specification(
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}}
		)
	)
);

```

## Structural Equation Models Path Diagram

### 関連するコンストラクター

#### SEM Node Graph Display

**構文:** SEM Node Graph Display

### 項目のメッセージ

#### Constant Border Color

**構文:** obj &lt;&lt; Path Diagram Properties( Constant Border Color ( color ) );

**説明:** パス図において、定数要素の枠線の色を変更する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Show Means( 1 ), Constant Border Color( "Blue" ) );

```

#### Constant Fill Color

**構文:** obj &lt;&lt; Path Diagram Properties( Constant Fill Color ( color ) );

**説明:** パス図において、定数要素の塗りつぶしの色を変更する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Show Means( 1 ), Constant Fill Color( "Blue" ) );

```

#### Constant Font

**構文:** obj &lt;&lt; Path Diagram Properties( Constant Font ( font ) );

**説明:** パス図において、顕在変数のフォントを変更する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Show Means( 1 ), Constant Font( "Sitka Small" ) );

```

#### Constant Height

**構文:** obj &lt;&lt; Path Diagram Properties( Constant Height ( number ) );

**説明:** パス図において、定数要素の高さ(ピクセル)を変更する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Show Means( 1 ), Constant Height( 20 ) );

```

#### Constant Shape

**構文:** obj &lt;&lt; Constant Shape

**説明:** パス図において、定数のデフォルトの外観を変更する。変数の平均と切片に適用される。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties(
	Show Means( 1 ),
	Constant Shape( {Fill Color( "Medium Light BlueCyan" ), Width( 80 ), Height( 40 )} )
);

```

#### Constant Size Option

**構文:** obj &lt;&lt; Path Diagram Properties( Constant Size Option ( &lt;Default | Scale To Text | Custom&gt; ) );

**説明:** パス図において、定数のノードの大きさに対するモードを変更する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Constant Size Option( "Scale To Text" ) );

```

#### Constant Text Color

**構文:** obj &lt;&lt; Path Diagram Properties( Constant Text Color ( color ) );

**説明:** パス図において、定数要素のテキストの色を変更する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Show Means( 1 ), Constant Text Color( "Blue" ) );

```

#### Constant Width

**構文:** obj &lt;&lt; Path Diagram Properties( Constant Width ( number ) );

**説明:** パス図において、定数要素の幅(ピクセル)を変更する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Show Means( 1 ), Constant Width( 71 ) );

```

#### Copy Diagram

**構文:** obj &lt;&lt; Copy Diagram

**説明:** パス図の画像をクリップボードに保存する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
rpt = obj << Report();
rpt[Node Graph Box( 1 )] << Copy Diagram;

```

#### Copy Diagram Properties

**構文:** obj &lt;&lt; Copy Diagram Properties

**説明:** 該当のパス図を設定するためのスクリプトをクリップボードにコピーする。コピーした設定は、他のダイヤグラムに適用できる。

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
rpt = obj << Report();
diagram = rpt[Node Graph Box( 1 )];
diagram << Latent Fill Color( "Blue" );
diagram << Paths Color( "Green" );
diagram << Copy Diagram Properties;
obj = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" ) <<
Run Script( "SEM: Path Analysis w/ Latent" );
rpt = obj << Report();
other_diagram = rpt[Node Graph Box( 1 )];
other_diagram << Paste Diagram Properties;

```

#### Dashed Lines for Nonsignificant p-values

**構文:** obj &lt;&lt; Path Diagram Properties ("Dashed Lines for Nonsignificant p - values"n( 0 | 1 ) )

**説明:** 有意でないパスを、破線とするか、実線のままにするかを、切り替える。 デフォルトではオン。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( "Dashed Lines for Nonsignificant p - values"n( 0 ) );

```

#### Diagram Size

**構文:** obj &lt;&lt; Path Diagram Properties( Diagram Size ( {x, y} ) )

**説明:** パス図のサイズを変更する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties(
	Place Nodes(
		{{"Energy60", 88, 184}, {"Fair60", 374, 94}, {"Fair65", 660, 184}, {"FrOpp60", 301,
		94}, {"FrOpp65", 587, 184}, {"FrPress60", 229, 94}, {"FrPress65", 515, 184},
		{"Labor60", 161, 184}, {"Legis60", 447, 94}, {"Legis65", 732, 184}, {"Prod60", 16,
		184}}
	),
	Rotate Loops(
		{{"Dem60", 1.571}, {"Dem65", 1.571}, {"Energy60", 4.712}, {"Fair60", 4.712},
		{"Fair65", 4.712}, {"FrOpp60", 4.712}, {"FrOpp65", 4.712}, {"FrPress60", 4.712},
		{"FrPress65", 4.712}, {"Ind60", 1.571}, {"Labor60", 4.712}, {"Legis60", 4.712},
		{"Legis65", 4.712}, {"Prod60", 4.712}}
	)
);

```

#### Enable Grid

**構文:** obj &lt;&lt; Path Diagram Properties ( Enable Grid( 0|1) )

**説明:** パス図において、グリッド線を表示する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Enable Grid( 1 ) );

```

#### Fill Nodes With R Squared

**構文:** obj &lt;&lt; Path Diagram Properties ( Fill Nodes With R Squared ( 0|1) )

**説明:** パス図において、決定係数(R2乗)の大きさに応じて、ノードの一部を塗りつぶす。 デフォルトではオン。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Fill Nodes With R Squared( 1 ) );

```

#### Latent Border Color

**構文:** obj &lt;&lt; Path Diagram Properties( Latent Border Color ( color ) );

**説明:** パス図において、潜在変数の枠線の色を変更する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Latent Border Color( "Blue" ) );

```

#### Latent Fill Color

**構文:** obj &lt;&lt; Path Diagram Properties( Latent Fill Color ( color ) );

**説明:** パス図において、潜在変数の塗りつぶしの色を変更する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Latent Fill Color( "Blue" ) );

```

#### Latent Font

**構文:** obj &lt;&lt; Path Diagram Properties( Manifest Font ( font ) );

**説明:** パス図において、潜在変数のフォントを変更する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Latent Font( "Sitka Small" ) );

```

#### Latent Height

**構文:** obj &lt;&lt; Path Diagram Properties( Latent Height ( number ) );

**説明:** パス図において、潜在変数の高さ(ピクセル)を変更する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Latent Height( 30 ) );

```

#### Latent Shape

**構文:** obj &lt;&lt; Latent Shape

**説明:** パス図において、潜在変数のデフォルトの外観を変更する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties(
	Latent Shape( {Fill Color( "Medium Light BlueCyan" ), Width( 80 ), Height( 40 )} )
);

```

#### Latent Size Option

**構文:** obj &lt;&lt; Path Diagram Properties( Latent Size Option ( &lt;Default | Scale To Text | Custom&gt; ) );

**説明:** パス図において、潜在変数のノードの大きさに対するモードを変更する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Latent Size Option( "Scale To Text" ) );

```

#### Latent Text Color

**構文:** obj &lt;&lt; Path Diagram Properties( Latent Text Color ( color ) );

**説明:** パス図において、潜在変数のテキストの色を変更する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Latent Text Color( "Blue" ) );

```

#### Latent Width

**構文:** obj &lt;&lt; Path Diagram Properties( Latent Width ( number ) );

**説明:** パス図において、潜在変数の幅(ピクセル)を変更する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Latent Width( 71 ) );

```

#### Layout

**構文:** obj &lt;&lt; Path Diagram Properties ( Layout("Left To Right"|"Top To Bottom") )

**説明:** パス図の最初のレイアウトを設定する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Layout( "Top To Bottom" ) );

```

#### Lock Diagram

**構文:** obj &lt;&lt; Path Diagram Properties ( Lock Diagram( 0|1) )

**説明:** パス図をロックし、モデルに変更を加えても、パス図のレイアウトは変更されないようにする。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Lock Diagram( 1 ) );

```

#### Manifest Border Color

**構文:** obj &lt;&lt; Path Diagram Properties( Manifest Border Color ( color ) );

**説明:** パス図において、顕在変数の枠線の色を変更する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Manifest Border Color( "Blue" ) );

```

#### Manifest Fill Color

**構文:** obj &lt;&lt; Path Diagram Properties( Manifest Fill Color ( color ) );

**説明:** パス図において、顕在変数の塗りつぶしの色を変更する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Manifest Fill Color( "Blue" ) );

```

#### Manifest Font

**構文:** obj &lt;&lt; Path Diagram Properties( Manifest Font ( font ) );

**説明:** パス図において、顕在変数のフォントを変更する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Manifest Font( "Sitka Small" ) );

```

#### Manifest Height

**構文:** obj &lt;&lt; Path Diagram Properties( Manifest Height ( number ) );

**説明:** パス図において、顕在変数の高さ(ピクセル)を変更する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Manifest Height( 30 ) );

```

#### Manifest Shape

**構文:** obj &lt;&lt; Manifest Shape

**説明:** パス図において、顕在変数のデフォルトの外観を変更する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Manifest Shape( {Fill Color( "Green" )} ) );

```

#### Manifest Size Option

**構文:** obj &lt;&lt; Path Diagram Properties( Manifest Size Option ( &lt;Default | Scale To Text | Custom&gt; ) );

**説明:** パス図において、顕在変数のノードの大きさに対するモードを変更する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Manifest Size Option( "Scale To Text" ) );

```

#### Manifest Text Color

**構文:** obj &lt;&lt; Path Diagram Properties( Manifest Text Color ( color ) );

**説明:** パス図において、顕在変数のテキストの色を変更する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Manifest Text Color( "Blue" ) );

```

#### Manifest Width

**構文:** obj &lt;&lt; Path Diagram Properties( Manifest Width ( number ) );

**説明:** パス図において、顕在変数の幅(ピクセル)を変更する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Manifest Width( 67 ) );

```

#### Paste Diagram Properties

**構文:** obj &lt;&lt; Paste Diagram Properties

**説明:** クリップボードにコピーされているパス図を設定するためのスクリプトを貼り付ける。

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
rpt = obj << Report();
diagram = rpt[Node Graph Box( 1 )];
diagram << Latent Fill Color( "Blue" );
diagram << Paths Color( "Green" );
diagram << Copy Diagram Properties;
obj = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" ) <<
Run Script( "SEM: Path Analysis w/ Latent" );
rpt = obj << Report();
other_diagram = rpt[Node Graph Box( 1 )];
other_diagram << Paste Diagram Properties;

```

#### Path Styles

**構文:** obj &lt;&lt; Path Styles

**説明:** パス図において、パスのデフォルトの外観を変更する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Path Styles( {Color( "Green" )} ) );

```

#### Path Thickness

**構文:** obj &lt;&lt; Path Diagram Properties (Path Thickness( "Fixed"|"Map to Stdz. Estimates" ) )

**説明:** ダイヤグラムのパスの太さを、固定値にするか、標準化推定値の絶対値が大きいほど太くするかを、指定する。 デフォルトの値は"Fixed"。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Path Thickness( "Map to Stdz. Estimates" ) );

```

#### Path Transparency

**構文:** obj &lt;&lt; Path Diagram Properties (Path Transparency( "Fixed"|"Map to Stdz. Estimates" ) )

**説明:** ダイヤグラムのパスの透明度を、固定値にするか、標準化推定値の絶対値が大きいほど濃くするかを、指定する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Path Transparency( "Fixed" ) );

```

#### Paths Alpha Level

**構文:** obj &lt;&lt; Path Diagram Properties( Paths Alpha Level ( number) );

**説明:** パス図において、破線とするか、実線とするかの閾値を変更する。p値が閾値より大きければ破線となる。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Paths Alpha Level( 0.01 ) );

```

#### Paths Color

**構文:** obj &lt;&lt; Path Diagram Properties( Paths Color ( color) );

**説明:** パス図において、パスの色を変更する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Paths Color( "Green" ) );

```

#### Paths Font

**構文:** obj &lt;&lt; Path Diagram Properties( Paths Font ( font ) );

**説明:** パス図において、パスのラベルに使用されているフォントを変更する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Paths Font( "Segoe Script", 12, "Bold" ) );

```

#### Paths Opacity

**構文:** obj &lt;&lt; Path Diagram Properties( Paths Opacity ( number) );

**説明:** パス図において、パスの不透明度を変更する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Paths Opacity( 0.5 ), Path Transparency( "Fixed" ) );

```

#### Paths Thickness

**構文:** obj &lt;&lt; Path Diagram Properties( Paths Thickness ( number) );

**説明:** パス図において、パスの太さを変更する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Paths Thickness( 2.7103 ) );

```

#### Place Nodes

**構文:** obj &lt;&lt; Path Diagram Properties( Place Nodes ( { {name1, x1, y1}, {name2, x2, y2}, ...} ) )

**説明:** パス図において、個々のノードを指定された座標に配置する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties(
	Place Nodes(
		{{"Energy60", 88, 184}, {"Fair60", 374, 94}, {"Fair65", 660, 184}, {"FrOpp60", 301,
		94}, {"FrOpp65", 587, 184}, {"FrPress60", 229, 94}, {"FrPress65", 515, 184},
		{"Labor60", 161, 184}, {"Legis60", 447, 94}, {"Legis65", 732, 184}, {"Prod60", 16,
		184}}
	),
	Rotate Loops(
		{{"Dem60", 1.571}, {"Dem65", 1.571}, {"Energy60", 4.712}, {"Fair60", 4.712},
		{"Fair65", 4.712}, {"FrOpp60", 4.712}, {"FrOpp65", 4.712}, {"FrPress60", 4.712},
		{"FrPress65", 4.712}, {"Ind60", 1.571}, {"Labor60", 4.712}, {"Legis60", 4.712},
		{"Legis65", 4.712}, {"Prod60", 4.712}}
	)
);

```

#### R2 Fill Color

**構文:** obj &lt;&lt; Path Diagram Properties ( R2 Fill Color ( Color ) )

**説明:** 決定係数(R2乗)の大きさに応じてノードを塗りつぶす時の色を指定する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( R2 Fill Color( Cyan ) );

```

#### Rotate Latent Groups

**構文:** obj &lt;&lt; Rotate Latent Groups

**説明:** パス図にあるすべての潜在変数の指示変数の向きを回転させる。複数の潜在変数が選択されている場合は、それらの潜在変数の指示変数だけの向きを回転させる。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
rpt = obj << Report();
diagram = rpt[Node Graph Box( 1 )];
diagram << Rotate Latent Groups;

```

#### Rotate Loops

**構文:** obj &lt;&lt; Path Diagram Properties( Rotate Loops ( { {name1, angle1}, {name2, angle2}, ...} ) )

**説明:** パス図において、分散を示すループ曲線の位置を指定する。時計回りの角度で、単位をラジアンとして指定する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties(
	Place Nodes(
		{{"Energy60", 88, 184}, {"Fair60", 374, 94}, {"Fair65", 660, 184}, {"FrOpp60", 301,
		94}, {"FrOpp65", 587, 184}, {"FrPress60", 229, 94}, {"FrPress65", 515, 184},
		{"Labor60", 161, 184}, {"Legis60", 447, 94}, {"Legis65", 732, 184}, {"Prod60", 16,
		184}}
	),
	Rotate Loops(
		{{"Dem60", 1.571}, {"Dem65", 1.571}, {"Energy60", 4.712}, {"Fair60", 4.712},
		{"Fair65", 4.712}, {"FrOpp60", 4.712}, {"FrOpp65", 4.712}, {"FrPress60", 4.712},
		{"FrPress65", 4.712}, {"Ind60", 1.571}, {"Labor60", 4.712}, {"Legis60", 4.712},
		{"Legis65", 4.712}, {"Prod60", 4.712}}
	)
);

```

#### Show Constant Mean Square

**構文:** obj &lt;&lt; Show Constant Mean Square( state=0|1 )

**説明:** パス図において、定数に対するエッジの表示/非表示を切り替える。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Show Constant Mean Square( 1 ) );

```

#### Show Covariances

**構文:** obj &lt;&lt; Show Covariances( state=0|1 )

**説明:** パス図において、共分散を示す両方向の矢印を表示する。 デフォルトではオン。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Show Covariances( 0 ) );

```

#### Show Equality Constraints

**構文:** obj &lt;&lt; Show Equality Constraints( state=0|1 )

**説明:** パス図のエッジに等号制約を表示する。それぞれの等号制約は、固定値またはラベルによって表示される。 デフォルトではオン。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Show Equality Constraints( 0 ) );

```

#### Show Estimates

**構文:** obj &lt;&lt; Show Estimates( "非標準化"|"標準化"|"なし" )

**説明:** パス図において、標準化していないパラメータ推定値の表示/非表示を切り替える。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Show Estimates( "None" ) );

```

#### Show Loadings

**構文:** obj &lt;&lt; Show Loadings( state=0|1 )

**説明:** パス図において潜在変数に対する指標変数の表示/非表示を切り替える。 デフォルトではオン。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Show Loadings( 0 ) );

```

#### Show Means/Intercepts

**構文:** obj &lt;&lt; Show Means/Intercepts( state=0|1 )

**説明:** 「構造方程式モデル」プラットフォームにおいて、平均の表示/非表示を切り替える。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Show Means( 1 ) );

```

#### Show R Squared Values

**構文:** obj &lt;&lt; Show R Squared Values( state=0|1 )

**説明:** パス図において、ノードの内側にR2乗の値を表示する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Show R Squared Values( 1 ) );

```

#### Show Regressions

**構文:** obj &lt;&lt; Show Regressions( state=0|1 )

**説明:** 「構造方程式モデル」プラットフォームにおいて、回帰の表示/非表示を切り替える。 デフォルトではオン。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Show Regressions( 0 ) );

```

#### Show Variances

**構文:** obj &lt;&lt; Show Variances( state=0|1 )

**説明:** パス図において、分散を示す両方向の矢印を表示する。 デフォルトではオン。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Show Variances( 0 ) );

```

## Structural Equation Models Specification

### 項目のメッセージ

#### Covariances

**構文:** obj &lt;&lt; Covariances

**説明:** モデルの変数間に共分散を追加する。

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Leadership_Avg, :Conflict_Avg ),
	Model Specification(
		Means( {"Constant", {:Leadership_Avg, :Conflict_Avg}} ),
		Covariances( {:Leadership_Avg, {:Conflict_Avg}} ),
		Variances( {:Leadership_Avg, {:Leadership_Avg}}, {:Conflict_Avg, {:Conflict_Avg}} )
	)
);

```

#### Define Time Values

**構文:** obj &lt;&lt; Define Time Values

**説明:** 経時的モデルで用いる時点を設定する。設定された時点の値は、成長曲線モデルなどの経時的モデルで使われる。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Academic Achievement.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Multiple Choice Year1, :Multiple Choice Year3, :Multiple Choice Year4 ),
	Model Specification(
		Model Name( "Longitudinal Model" ),
		Define Time Values( {0, 2, 3} )
	)
);

```

#### Loadings

**構文:** obj &lt;&lt; Loadings

**説明:** モデルの潜在変数に因子負荷を追加する。

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		)
	)
);

```

#### Max Iterations

**構文:** Structural Equation Models(..., Max Iterations( 3 )

**説明:** 最適化のための反復計算の最大回数を設定する。 デフォルトの値は"1000"。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Leadership_Avg, :Conflict_Avg ),
	Model Specification(
		Means( {"Constant", {:Leadership_Avg, :Conflict_Avg}} ),
		Covariances( {:Leadership_Avg, {:Conflict_Avg}} ),
		Variances( {:Leadership_Avg, {:Leadership_Avg}}, {:Conflict_Avg, {:Conflict_Avg}} ),
		Max Iterations( 3 )
	)
);

```

#### Means/Intercepts

**構文:** obj &lt;&lt; Means/Intercepts

**説明:** モデルの変数に平均や切片を追加する。

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Model Specification(
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}}
		)
	)
);

```

#### Model Name

**構文:** obj &lt;&lt; Model Name

**説明:** モデルの名前を指定する。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Leadership_Avg, :Conflict_Avg ),
	Model Specification(
		Model Name( "Means and Variances Model" ),
		Means( {"Constant", {:Leadership_Avg, :Conflict_Avg}} ),
		Variances( {:Leadership_Avg, {:Leadership_Avg}}, {:Conflict_Avg, {:Conflict_Avg}} )
	)
);

```

#### Model Notes

**構文:** obj &lt;&lt; Model Notes

**説明:** モデルに関するメモを指定する。

**JMP追加されたバージョン:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Leadership_Avg, :Conflict_Avg ),
	Model Specification(
		Model Name( "Means and Variances Model" ),
		Model Notes(
			"This is a simple model with only means and variances for each variable"
		),
		Means( {"Constant", {:Leadership_Avg, :Conflict_Avg}} ),
		Variances( {:Leadership_Avg, {:Leadership_Avg}}, {:Conflict_Avg, {:Conflict_Avg}} )
	)
);

```

#### New Latent

**構文:** obj &lt;&lt; New Latent

**説明:** モデルに新しい潜在変数を追加する。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Model Specification(
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		)
	)
);

```

#### Regressions

**構文:** obj &lt;&lt; Regressions

**説明:** モデルに回帰のパスを追加する。

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Leadership_Avg, :Conflict_Avg ),
	Model Specification(
		Means( {"Constant", {:Leadership_Avg, :Conflict_Avg}} ),
		Regressions( {:Leadership_Avg, {:Conflict_Avg}} ),
		Variances( {:Leadership_Avg, {:Leadership_Avg}}, {:Conflict_Avg, {:Conflict_Avg}} )
	)
);

```

#### Variances

**構文:** obj &lt;&lt; Variances

**説明:** モデルの変数に分散を追加する。

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Model Specification(
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}}
		)
	)
);

```

