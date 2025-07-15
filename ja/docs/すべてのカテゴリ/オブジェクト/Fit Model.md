# Fit Model



## Fit Causal Treatment

### 共有されるメッセージ

#### Action

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

#### Apply Preset

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

#### Automatic Recalc

**構文:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**説明:** データの除外や変更があった場合に分析を自動的にやり直す。Automatic Recalcオプションがオンになっている場合で、データの除外や変更が再計算の前に確実に適用されるようにするには、Wait(0)コマンドを使用すること。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	Run
);
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

#### Broadcast

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

#### Column Switcher

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

#### Copy ByGroup Script

**構文:** obj &lt;&lt; Copy ByGroup Script

**説明:** この分析を再現するJSLスクリプトを生成し、クリップボードにコピーする。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	By( _bycol ),
	Run
);
obj[1] << Copy ByGroup Script;

```

#### Copy Script

**構文:** obj &lt;&lt; Copy Script

**説明:** この分析を再現するJSLスクリプトを生成し、クリップボードにコピーする。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	Run
);
obj << Copy Script;

```

#### Data Table Window

**構文:** obj &lt;&lt; Data Table Window

**説明:** この分析に使用したデータテーブルのウィンドウを手前に表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	Run
);
obj << Data Table Window;

```

#### Get By Levels

**構文:** obj &lt;&lt; Get By Levels

**説明:** By列が指定されている場合、列名をキー、データ値を値とした連想配列を戻す。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

#### Get ByGroup Script

**構文:** obj &lt;&lt; Get ByGroup Script

**説明:** この分析を再現するスクリプト(JSL)を生成し、それを式として戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	By( _bycol ),
	Run
);
t = obj[1] << Get ByGroup Script;
Show( t );

```

#### Get Container

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
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	Run
);
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Get Data Table

**構文:** obj &lt;&lt; Get Data Table

**説明:** データテーブルへの参照を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	Run
);
t = obj << Get Datatable;
Show( N Rows( t ) );

```

#### Get Group Platform

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

#### Get Script

**構文:** obj &lt;&lt; Get Script

**説明:** この分析を再現するスクリプト(JSL)を生成し、それを式として戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	Run
);
t = obj << Get Script;
Show( t );

```

#### Get Script With Data Table

**構文:** obj &lt;&lt; Get Script With Data Table

**説明:** この分析を再現するスクリプト(JSL)をデータテーブルへの参照も含めて生成し、それを式として戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	Run
);
t = obj << Get Script With Data Table;
Show( t );

```

#### Get Timing

**構文:** obj &lt;&lt; Get Timing

**説明:** プラットフォームの起動にかかった時間を取得する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	Run
);
t = obj << Get Timing;
Show( t );

```

#### Get Web Support

**構文:** obj &lt;&lt; Get Web Support

**説明:** ディスプレイオブジェクトにおけるインタラクティブHTMLサポートのレベルを数値で戻す。1は、一部または全部の要素がサポートされていることを示し、0は、サポートされないことを示す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

#### Get Where Expr

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

#### Ignore Platform Preferences

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

#### Local Data Filter

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

#### New JSL Preset

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

#### New Preset

**構文:** obj = New Preset()

**説明:** オブジェクトに適用されているオプションとカスタマイズをプリセットとしてまとめる。このオブジェクトをApply Presetに渡すことで、同じ種類のオブジェクトに設定をコピーすることができる。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

#### Paste Local Data Filter

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

#### Redo Analysis

**構文:** obj &lt;&lt; Redo Analysis

**説明:** 同じ分析をやり直し新しいウィンドウに表示する。データが変更されていると分析結果は異なる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	Run
);
obj << Redo Analysis;

```

#### Redo ByGroup Analysis

**構文:** obj &lt;&lt; Redo ByGroup Analysis

**説明:** 同じ分析をやり直し新しいウィンドウに表示する。データが変更されていると分析結果は異なる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	By( _bycol ),
	Run
);
obj[1] << Redo ByGroup Analysis;

```

#### Relaunch Analysis

**構文:** obj &lt;&lt; Relaunch Analysis

**説明:** プラットフォームの起動ウィンドウを開き、レポートを作成した時の設定を表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	Run
);
obj << Relaunch Analysis;

```

#### Relaunch ByGroup

**構文:** obj &lt;&lt; Relaunch ByGroup

**説明:** プラットフォームの起動ウィンドウを開き、レポートを作成した時の設定を表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	By( _bycol ),
	Run
);
obj[1] << Relaunch ByGroup;

```

#### Remove Column Switcher

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

#### Remove Local Data Filter

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

#### Render Preset

**構文:** Render Preset( preset )

**説明:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

#### Report

**構文:** obj &lt;&lt; Report;Report( obj )

**説明:** レポートオブジェクトへの参照を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	Run
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Report View

**構文:** obj &lt;&lt; Report View( "完全"|"要約" )

**説明:** レポートビューは、プラットフォームレポートの詳細を表示するかどうかを決定する。Fullはすべての詳細を表示し、Summaryはプラットフォームにより限定されたものだけを表示する。 動作をカスタマイズするため、各ディスプレイボックスは<<Set Summary Behaviorメッセージをサポートする。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	Run
);
obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**構文:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**説明:** 分析を再現するためのJSLスクリプトを作成し、データテーブルにテーブルプロパティとして保存する。スクリプトの名前を指定できる。Append Suffixオプションは、スクリプト名に数字の接尾辞を追加する。これにより、同名のスクリプトが存在していても区別できる。Promptオプションは、ユーザにスクリプト名の指定を促す。Replaceオプションは、同名の既存のスクリプトを置き換える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**構文:** obj &lt;&lt; Save ByGroup Script to Journal

**説明:** この分析を再現するJSLスクリプトを生成し、ジャーナルにそのスクリプトのボタンを追加する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**構文:** obj &lt;&lt; Save ByGroup Script to Script Window

**説明:** この分析を再現するJSLスクリプトを生成し、現在のスクリプトウィンドウに表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**構文:** obj &lt;&lt; Save Script for All Objects

**説明:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	Run
);
obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**構文:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**説明:** すべてのレポートオブジェクトを再現するスクリプトを現在のデータテーブルに保存する。このオプションは、ウィンドウ内にレポートが複数ある場合に便利。作成されるスクリプトの名前は、引用符で囲んで指定しない限り、1つ目のプラットフォーム名となる。

**例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	By( _bycol ),
	Run
);
obj[1] << Save Script for All Objects To Data Table;

```

**例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	By( _bycol ),
	Run
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**構文:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**説明:** この分析を再現するJSLスクリプトを生成し、データテーブルのテーブルプロパティとして保存する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	Run
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**構文:** obj &lt;&lt; Save Script to Journal

**説明:** この分析を再現するJSLスクリプトを生成し、ジャーナルにそのスクリプトのボタンを追加する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	Run
);
obj << Save Script to Journal;

```

#### Save Script to Report

**構文:** obj &lt;&lt; Save Script to Report

**説明:** この分析を再現するJSLスクリプトを生成し、レポートウィンドウに表示する。分析手順の記録を結果と一緒に残せる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	Run
);
obj << Save Script to Report;

```

#### Save Script to Script Window

**構文:** obj &lt;&lt; Save Script to Script Window

**説明:** この分析を再現するJSLスクリプトを生成し、現在のスクリプトウィンドウに表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	Run
);
obj << Save Script to Script Window;

```

#### SendToByGroup

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

#### SendToEmbeddedScriptable

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

#### SendToReport

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

#### Sync to Data Table Changes

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

#### Title

**構文:** obj &lt;&lt; Title( "new title" )

**説明:** プラットフォームのタイトルを設定する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	Run
);
obj << Title( "My Platform" );

```

#### Top Report

**構文:** obj &lt;&lt; Top Report

**説明:** レポート内のルートノードへの参照を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	Run
);
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Transform Column

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

#### View Web XML

**構文:** obj &lt;&lt; View Web XML

**説明:** インタラクティブHTMLレポートの作成に使うXMLコードを戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

#### Window View

**構文:** obj = Fit Causal Treatment(...Window View( "Visible"|"Invisible"|"Private" )...)

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

### 関連するコンストラクター

#### Fit Causal Treatment

**構文:** Fit Model( Y( columns ), &lt;Effects( columns )&gt;, Treatment( column ), Personality( "Causal Treatment" ) )

**説明:** 処置や結果に対するモデルに基づいて、因果処置効果を推定する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	Run
);

```

### 項目のメッセージ

#### Model Dialog

**構文:** obj &lt;&lt; Model Dialog

#### Show Tips and Interpretations

**構文:** obj &lt;&lt; Show Tips and Interpretations( state=0|1 )

**JMP追加されたバージョン:** 19

## Fit Generalized Linear Model

### 共有されるメッセージ

#### Action

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

#### Apply Preset

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

#### Broadcast

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

#### Column Switcher

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

#### Copy ByGroup Script

**構文:** obj &lt;&lt; Copy ByGroup Script

**説明:** この分析を再現するJSLスクリプトを生成し、クリップボードにコピーする。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	By( _bycol ),
	Run
);
obj[1] << Copy ByGroup Script;

```

#### Copy Script

**構文:** obj &lt;&lt; Copy Script

**説明:** この分析を再現するJSLスクリプトを生成し、クリップボードにコピーする。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Copy Script;

```

#### Data Table Window

**構文:** obj &lt;&lt; Data Table Window

**説明:** この分析に使用したデータテーブルのウィンドウを手前に表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Data Table Window;

```

#### Get By Levels

**構文:** obj &lt;&lt; Get By Levels

**説明:** By列が指定されている場合、列名をキー、データ値を値とした連想配列を戻す。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

#### Get ByGroup Script

**構文:** obj &lt;&lt; Get ByGroup Script

**説明:** この分析を再現するスクリプト(JSL)を生成し、それを式として戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	By( _bycol ),
	Run
);
t = obj[1] << Get ByGroup Script;
Show( t );

```

#### Get Container

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
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Get Data Table

**構文:** obj &lt;&lt; Get Data Table

**説明:** データテーブルへの参照を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
t = obj << Get Datatable;
Show( N Rows( t ) );

```

#### Get Group Platform

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

#### Get Script

**構文:** obj &lt;&lt; Get Script

**説明:** この分析を再現するスクリプト(JSL)を生成し、それを式として戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
t = obj << Get Script;
Show( t );

```

#### Get Script With Data Table

**構文:** obj &lt;&lt; Get Script With Data Table

**説明:** この分析を再現するスクリプト(JSL)をデータテーブルへの参照も含めて生成し、それを式として戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
t = obj << Get Script With Data Table;
Show( t );

```

#### Get Timing

**構文:** obj &lt;&lt; Get Timing

**説明:** プラットフォームの起動にかかった時間を取得する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
t = obj << Get Timing;
Show( t );

```

#### Get Web Support

**構文:** obj &lt;&lt; Get Web Support

**説明:** ディスプレイオブジェクトにおけるインタラクティブHTMLサポートのレベルを数値で戻す。1は、一部または全部の要素がサポートされていることを示し、0は、サポートされないことを示す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

#### Get Where Expr

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

#### Ignore Platform Preferences

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

#### Local Data Filter

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

#### New JSL Preset

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

#### New Preset

**構文:** obj = New Preset()

**説明:** オブジェクトに適用されているオプションとカスタマイズをプリセットとしてまとめる。このオブジェクトをApply Presetに渡すことで、同じ種類のオブジェクトに設定をコピーすることができる。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

#### Paste Local Data Filter

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

#### Redo Analysis

**構文:** obj &lt;&lt; Redo Analysis

**説明:** 同じ分析をやり直し新しいウィンドウに表示する。データが変更されていると分析結果は異なる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Redo Analysis;

```

#### Redo ByGroup Analysis

**構文:** obj &lt;&lt; Redo ByGroup Analysis

**説明:** 同じ分析をやり直し新しいウィンドウに表示する。データが変更されていると分析結果は異なる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	By( _bycol ),
	Run
);
obj[1] << Redo ByGroup Analysis;

```

#### Relaunch Analysis

**構文:** obj &lt;&lt; Relaunch Analysis

**説明:** プラットフォームの起動ウィンドウを開き、レポートを作成した時の設定を表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Relaunch Analysis;

```

#### Relaunch ByGroup

**構文:** obj &lt;&lt; Relaunch ByGroup

**説明:** プラットフォームの起動ウィンドウを開き、レポートを作成した時の設定を表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	By( _bycol ),
	Run
);
obj[1] << Relaunch ByGroup;

```

#### Remove Column Switcher

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

#### Remove Local Data Filter

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

#### Render Preset

**構文:** Render Preset( preset )

**説明:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

#### Report

**構文:** obj &lt;&lt; Report;Report( obj )

**説明:** レポートオブジェクトへの参照を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Report View

**構文:** obj &lt;&lt; Report View( "完全"|"要約" )

**説明:** レポートビューは、プラットフォームレポートの詳細を表示するかどうかを決定する。Fullはすべての詳細を表示し、Summaryはプラットフォームにより限定されたものだけを表示する。 動作をカスタマイズするため、各ディスプレイボックスは<<Set Summary Behaviorメッセージをサポートする。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**構文:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**説明:** 分析を再現するためのJSLスクリプトを作成し、データテーブルにテーブルプロパティとして保存する。スクリプトの名前を指定できる。Append Suffixオプションは、スクリプト名に数字の接尾辞を追加する。これにより、同名のスクリプトが存在していても区別できる。Promptオプションは、ユーザにスクリプト名の指定を促す。Replaceオプションは、同名の既存のスクリプトを置き換える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**構文:** obj &lt;&lt; Save ByGroup Script to Journal

**説明:** この分析を再現するJSLスクリプトを生成し、ジャーナルにそのスクリプトのボタンを追加する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**構文:** obj &lt;&lt; Save ByGroup Script to Script Window

**説明:** この分析を再現するJSLスクリプトを生成し、現在のスクリプトウィンドウに表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**構文:** obj &lt;&lt; Save Script for All Objects

**説明:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**構文:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**説明:** すべてのレポートオブジェクトを再現するスクリプトを現在のデータテーブルに保存する。このオプションは、ウィンドウ内にレポートが複数ある場合に便利。作成されるスクリプトの名前は、引用符で囲んで指定しない限り、1つ目のプラットフォーム名となる。

**例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	By( _bycol ),
	Run
);
obj[1] << Save Script for All Objects To Data Table;

```

**例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	By( _bycol ),
	Run
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**構文:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**説明:** この分析を再現するJSLスクリプトを生成し、データテーブルのテーブルプロパティとして保存する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**構文:** obj &lt;&lt; Save Script to Journal

**説明:** この分析を再現するJSLスクリプトを生成し、ジャーナルにそのスクリプトのボタンを追加する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Save Script to Journal;

```

#### Save Script to Report

**構文:** obj &lt;&lt; Save Script to Report

**説明:** この分析を再現するJSLスクリプトを生成し、レポートウィンドウに表示する。分析手順の記録を結果と一緒に残せる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Save Script to Report;

```

#### Save Script to Script Window

**構文:** obj &lt;&lt; Save Script to Script Window

**説明:** この分析を再現するJSLスクリプトを生成し、現在のスクリプトウィンドウに表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Save Script to Script Window;

```

#### SendToByGroup

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

#### SendToEmbeddedScriptable

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

#### SendToReport

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

#### Sync to Data Table Changes

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

#### Title

**構文:** obj &lt;&lt; Title( "new title" )

**説明:** プラットフォームのタイトルを設定する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Title( "My Platform" );

```

#### Top Report

**構文:** obj &lt;&lt; Top Report

**説明:** レポート内のルートノードへの参照を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Transform Column

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

#### View Web XML

**構文:** obj &lt;&lt; View Web XML

**説明:** インタラクティブHTMLレポートの作成に使うXMLコードを戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

#### Window View

**構文:** obj = Generalized Linear Model(...Window View( "Visible"|"Invisible"|"Private" )...)

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

### 関連するコンストラクター

#### Generalized Linear Model

**構文:** Fit Model( Y( column ), Effects( columns ), Personality( "Generalized Linear Model" ), GLM Distribution( distribution name ), Link Function( link type ) )

**説明:** 様々な確率分布およびリンク関数を用いて一般化線形モデルをあてはめる。手法には、ロジスティック回帰、Poisson回帰、指数回帰がある。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);

```

### 項目のメッセージ

#### Contour Profiler

**構文:** obj &lt;&lt; Contour Profiler( state=0|1 )

**説明:** 等高線プロファイルの表示/非表示を切り替える。等高線プロファイルは、応答変数の予測値を2因子ずつに対して描いたグラフである。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Contour Profiler( 1 );

```

#### Contrast

**構文:** obj &lt;&lt; (effect name &lt;&lt; Contrast( [l1 l2 l3 ...] ))

**説明:** 分析者の興味に基づいた対比のF検定を実行する。対比はそれぞれ行ベクトルとして指定する。注: 効果名は文字列で指定すること。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Overdispersion Tests and Intervals( 0 ),
	"Firth Bias-Adjusted Estimates"n( 0 ),
	Run
);
obj << ("color" << Contrast( [1 0 -0.5 -0.5] ));

```

#### Correlation of Estimates

**構文:** obj &lt;&lt; Correlation of Estimates( state=0|1 )

**説明:** 当該のあてはめ結果において、パラメータ推定値間の相関行列の表示/非表示を切り替える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Binomial" ),
	Link Function( "Logit" ),
	Run
);
obj << Correlation of Estimates( 1 );

```

#### Covariance of Estimates

**構文:** obj &lt;&lt; Covariance of Estimates( state=0|1 )

**説明:** 当該のあてはめ結果において、パラメータ推定値間の共分散行列の表示/非表示を切り替える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Covariance of Estimates( 1 );

```

#### Custom Test

**構文:** obj &lt;&lt; Custom Test( [ l1 l2 l3 ... ], &lt;Label( name )&gt; )

**説明:** 指定された対比に対するF検定を実行する。この機能を用いることで、分析者は自分の興味のある対比を検定することができる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Overdispersion Tests and Intervals( 0 ),
	"Firth Bias-Adjusted Estimates"n( 0 ),
	Run
);
obj << Custom Test( [0 .5 0 0 0 0 0 .5 -1], Label( "Test 1" ) );

```

#### Deviance Residuals

**構文:** obj &lt;&lt; Deviance Residuals

**説明:** デビアンス残差をデータテーブルに保存する。新しい列として、この列はデータテーブルに保存される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Deviance Residuals;

```

#### Deviance Residuals by Predicted

**構文:** obj &lt;&lt; Deviance Residuals by Predicted( state=0|1 )

**説明:** Y軸にデビアンス残差、X軸に応答の予測値を表示したプロットの表示/非表示を切り替える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Deviance Residuals by Predicted( 1 );

```

#### Effect Summary

**構文:** obj &lt;&lt; Effect Summary( state=0|1 )

**説明:** 「効果の要約」レポートの表示/非表示を切り替える。「効果の要約」レポートでは、モデルの効果を対話的に変更できる。 デフォルトではオン。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Effect Summary( 0 );
Wait( 1 );
obj << Effect Summary( 1 );
Report( obj )["Effect Summary"] << Close( 0 );

```

#### FDR

**構文:** obj &lt;&lt; FDR( state=0|1 )

**説明:** 「効果の要約」表に表示するp値と対数価値を、偽発見率(FDR)にするかどうかを指定する。偽発見率は、多重性の調整をした指標の1つである。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << FDR( 1 );
Report( obj )["Effect Summary"] << Close( 0 );

```

#### Firth Bias-Adjusted Estimates

**構文:** obj = Fit Model(...Personality( "Generalized Linear Model" ), "Firth Bias-Adjusted Estimates"n( state=0|1 )...)

**説明:** モデルの推定にFirthバイアス補正法を用いる。[一般化線形モデル]手法でのみ利用可能。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	"Firth Bias-Adjusted Estimates"n( 1 ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);

```

#### GLM Distribution

**構文:** obj = Fit Model(...Personality( "Generalized Linear Model" ), GLM Distribution( distribution name )...)

**説明:** 応答変数の確率分布を指定する。[一般化線形モデル]手法でのみ利用可能。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Binomial" ),
	Link Function( "Logit" ),
	Run
);

```

#### Inverse Prediction

**構文:** obj &lt;&lt; Inverse Prediction( Response( p1, p2, ... ), Term Value( effect1( value ), effect2( value ), ... ) )

**説明:** 指定されたYと因子の値に基づいて、Xの予測値および信頼区間を求める。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Overdispersion Tests and Intervals( 0 ),
	"Firth Bias-Adjusted Estimates"n( 0 ),
	Run
);
// Exactly one term value must be set to missing.
obj << Inverse Prediction(
	Response( 5, 6 ),
	Term Value(
		color( "Dark" ),
		spine( "Both Good" ),
		width( 26.2988439306358 ),
		weight( . )
	)
);

```

#### Linear Predictor Plot

**構文:** obj &lt;&lt; Linear Predictor Plot( state=0|1 )

**説明:** Y軸にリンク関数の逆関数によって変換された応答値、X軸に連続尺度の予測変数を表示したプロットの表示/非表示を切り替える。このオプションは、連続尺度の予測変数が1つと、カテゴリカルな予測変数が1つだけある場合のみ利用可能。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :weight, :color ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run()
);
obj << Linear Predictor Plot( 1 );

```

#### Link Function

**構文:** obj = Fit Model(...Personality( "Generalized Linear Model" ), Link Function( link type )...)

**説明:** モデルのリンク関数を指定する。[一般化線形モデル]手法でのみ利用可能。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);

```

#### Mean Confidence Interval

**構文:** obj &lt;&lt; Mean Confidence Interval

**説明:** モデルに基づく予測値に対する95%信頼限界をデータテーブルに保存する。新しい列として、この列はデータテーブルに保存される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Mean Confidence Interval;

```

#### Model Dialog

**構文:** obj &lt;&lt; Model Dialog

**説明:** 現在の分析が設定された起動ダイアログを開く。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Model Dialog;

```

#### Overdispersion Tests and Intervals

**構文:** obj = Fit Model(...Personality( "Generalized Linear Model" ), Overdispersion Tests and Intervals( state=0|1 )...)

**説明:** 過分散パラメータをモデルに含めるよう指定する。[一般化線形モデル]手法でのみ利用可能。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	Overdispersion Tests and Intervals( 1 ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);

```

#### Pearson Residuals

**構文:** obj &lt;&lt; Pearson Residuals

**説明:** Pearson残差をデータテーブルに保存する。新しい列として、この列はデータテーブルに保存される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Pearson Residuals;

```

#### Pearson Residuals by Predicted

**構文:** obj &lt;&lt; Pearson Residuals by Predicted( state=0|1 )

**説明:** Y軸にPearson残差、X軸に応答の予測値を表示したプロットの表示/非表示を切り替える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Pearson Residuals by Predicted( 1 );

```

#### Power Link Parameter

**構文:** obj = Fit Model(...Personality( "Generalized Linear Model" ), Power Link Parameter( value=1 )...)

**説明:** [べき乗]リンク関数のパラメータを指定する。[一般化線形モデル]手法を使用し、リンク関数として[べき乗]を指定した場合にのみ利用可能。 デフォルトの値は"1"。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	Overdispersion Tests and Intervals( 1 ),
	GLM Distribution( "Poisson" ),
	Link Function( "Power" ),
	Power Link Parameter( 0.5 ),
	Run
);

```

#### Predicted Values

**構文:** obj &lt;&lt; Predicted Values

**説明:** モデルに基づく予測値をデータテーブルに保存する。新しい列として、この列はデータテーブルに保存される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Predicted Values;

```

#### Prediction Formula

**構文:** obj &lt;&lt; Prediction Formula

**説明:** 指定したモデルにおいて平均の予測値を求める計算式をデータテーブルに保存する。新しい計算式の列として、この列はデータテーブルに保存される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Prediction Formula;

```

#### Profiler

**構文:** obj &lt;&lt; Profiler( state=0|1 )

**説明:** 予測プロファイルの表示/非表示を切り替える。予測プロファイルは、1因子ずつスライスしながら予測式を図示したものである。予測プロファイルでは、最適化を行える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Binomial" ),
	Link Function( "Logit" ),
	Run
);
obj << Profiler( 1 );

```

#### Regression Plot

**構文:** obj &lt;&lt; Regression Plot( state=0|1 )

**説明:** Y軸に応答値、X軸に連続尺度の予測変数を表示したプロットの表示/非表示を切り替える。このオプションは、連続尺度の予測変数が1つと、カテゴリカルな予測変数が1つだけある場合のみ利用可能。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :weight, :color ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run( Regression Plot( 0 ) )
);
Wait( 1 );
obj << Regression Plot( 1 );

```

#### Save Indiv Confid Limits

**構文:** obj &lt;&lt; Save Indiv Confid Limits

**説明:** モデルに基づく予測値で個々の値に対する95%信頼限界をデータテーブルに保存する。新しい列として、この列はデータテーブルに保存される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Save Indiv Confid Limits;

```

#### Studentized Deviance Residuals

**構文:** obj &lt;&lt; Studentized Deviance Residuals

**説明:** スチューデント化デビアンス残差をデータテーブルに保存する。新しい列として、この列はデータテーブルに保存される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Studentized Deviance Residuals;

```

#### Studentized Deviance Residuals by Predicted

**構文:** obj &lt;&lt; Studentized Deviance Residuals by Predicted( state=0|1 )

**説明:** Y軸にスチューデント化デビアンス残差、X軸に応答の予測値を表示したプロットの表示/非表示を切り替える。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run( Studentized Deviance Residuals by Predicted( 0 ) )
);
Wait( 1 );
obj << Studentized Deviance Residuals by Predicted( 1 );

```

#### Studentized Pearson Residuals

**構文:** obj &lt;&lt; Studentized Pearson Residuals

**説明:** スチューデント化Pearson残差をデータテーブルに保存する。新しい列として、この列はデータテーブルに保存される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Studentized Pearson Residuals;

```

#### Studentized Pearson Residuals by Predicted

**構文:** obj &lt;&lt; Studentized Pearson Residuals by Predicted( state=0|1 )

**説明:** Y軸にスチューデント化Pearson残差、X軸に応答の予測値を表示したプロットの表示/非表示を切り替える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Studentized Pearson Residuals by Predicted( 1 );

```

#### Surface Profiler

**構文:** obj &lt;&lt; Surface Profiler( state=0|1 )

**説明:** 曲面プロットの表示/非表示を切り替える。曲面プロットは、予測値を描いた対話的なグラフである。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Surface Profiler( 1 );

```

## Fit Least Squares > Effect Fit > Control Differences Chart

### 項目のメッセージ

#### Point Options

**構文:** scrobj &lt;&lt; Point Options( "Show Needles"|"Show Connected Points"|"Show Only Points" )

**説明:** グラフにおける点のスタイルを指定する。垂線、接続線、点のみから選択できる。デフォルトでは、全体平均の水平線からの垂線でグラフが描かれる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run(
		:Drug << {LSMeans Dunnett(
			.05,
			Control Level( "a" ),
			Control Differences Chart( 1, Point Options( "Show Only Points" ) )
		)}
	)
);
Wait( 1 );
scrobj = (Report( obj )["Control Differences"] << get scriptable object);
scrobj << Point Options( "Show Connected Points" );

```

#### Show Center Line

**構文:** scrobj &lt;&lt; Show Center Line( state=0|1 )

**説明:** 「コントロール群との差」のグラフにおいて、中心線(全体平均)の表示/非表示を切り替える。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run(
		:Drug << {LSMeans Dunnett(
			.05,
			Control Level( "a" ),
			Control Differences Chart( 1, Show Center Line( 0 ) )
		)}
	)
);
Wait( 1 );
scrobj = (Report( obj )["Control Differences"] << get scriptable object);
scrobj << Show Center Line( 1 );

```

#### Show Decision Limit Shading

**構文:** scrobj &lt;&lt; Show Decision Limit Shading( state=0|1 )

**説明:** 「コントロール群との差」のグラフにおいて、決定限界を示す陰影の表示/非表示を切り替える。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run(
		:Drug << {LSMeans Dunnett(
			.05,
			Control Level( "a" ),
			Control Differences Chart( 1, Show Decision Limit Shading( 0 ) )
		)}
	)
);
Wait( 1 );
scrobj = (Report( obj )["Control Differences"] << get scriptable object);
scrobj << Show Decision Limit Shading( 1 );

```

#### Show Decision Limits

**構文:** scrobj &lt;&lt; Show Decision Limits( state=0|1 )

**説明:** 「コントロール群との差」のグラフにおいて、決定限界を示す線の表示/非表示を切り替える。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run(
		:Drug << {LSMeans Dunnett(
			.05,
			Control Level( "a" ),
			Control Differences Chart( 1, Show Decision Limits( 0 ) )
		)}
	)
);
Wait( 1 );
scrobj = (Report( obj )["Control Differences"] << get scriptable object);
scrobj << Show Decision Limits( 1 );

```

#### Show Summary Report

**構文:** scrobj &lt;&lt; Show Summary Report( state=0|1 )

**説明:** グループ平均と決定限界を含むレポートの表示/非表示を切り替える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run(
		:Drug << {LSMeans Dunnett(
			.05,
			Control Level( "a" ),
			Control Differences Chart( 1 )
		)}
	)
);
Wait( 1 );
scrobj = (Report( obj )["Control Differences"] << get scriptable object);
scrobj << Show Summary Report( 1 );

```

## Fit Least Squares > Effect Fit

### 項目のメッセージ

#### LSMeans Contrast

**構文:** scrobj &lt;&lt; LSMeans Contrast( [ l1, l2, l3, ... ] );obj &lt;&lt; ( effect &lt;&lt; {LSMeans Contrast( [ l1, l2, l3, ... ] )} )

**説明:** 分析者によって指定された対比に対するF検定を実行する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run
);
Wait( 1 );
obj << (:Drug << {LSMeans Contrast( [1 0 -1] )});

```

#### LSMeans Dunnett

**構文:** scrobj &lt;&lt; LSMeans Dunnett( state=0|1|&lt;alpha&gt;, Control Level( level ), &lt;comparison options&gt; );obj &lt;&lt; ( effect &lt;&lt; {LSMeans Dunnett( state=0|1|&lt;alpha&gt;, Control Level( level ), &lt;comparison options&gt; )} )

**説明:** Dunnett検定を使ったコントロール群とのペア比較において、検定と信頼区間の表示/非表示を切り替える。

**例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run
);
obj << (:Drug << {LSMeans Dunnett( 1, Control Level( "a" ) )});

```

**例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run
);
obj << (:Drug << {LSMeans Dunnett( .01, Control Level( "a" ) )});

```

#### LSMeans Plot

**構文:** scrobj &lt;&lt; LSMeans Plot;obj &lt;&lt; ( effect &lt;&lt; {LSMeans Plot} )

**説明:** 名義・順序尺度の効果について最小2乗平均のプロットを表示する。効果が交互作用である場合は、「最小2乗平均プロットのオプション」ウィンドウを開く。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run
);
Wait( 1 );
obj << (:Drug << {LSMeans Plot});

```

#### LSMeans Student's t

**構文:** scrobj &lt;&lt; Student&apos;s t( state=0|1|&lt;alpha&gt;, &lt;comparison options&gt; );obj &lt;&lt; ( effect &lt;&lt; {Student&apos;s t( state=0|1|&lt;alpha&gt;, &lt;comparison options&gt; )} )

**説明:** Studentのt検定を使った最小2乗平均のペア比較において、検定と信頼区間の表示/非表示を切り替える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run
);
obj << (:Drug << {LSMeans Student's t( 1 )});

```

#### LSMeans Table

**構文:** scrobj &lt;&lt; LSMeans Table( state=0|1 );obj &lt;&lt; ( effect &lt;&lt; {LSMeans Table( state=0|1 )} )

**説明:** 「最小2乗平均」表の表示/非表示を切り替える。このオプションは、連続尺度の効果では利用できない。JMPでは、効果に対する検定は、これら最小2乗平均を比較するものになっている。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run( :Drug << {LSMeans Table( 0 )} )
);
Wait( 1 );
obj << (:Drug << {LSMeans Table( 1 )});

```

#### LSMeans Tukey HSD

**構文:** scrobj &lt;&lt; LSMeans Tukey HSD( state=0|1|&lt;alpha&gt;, &lt;comparison options&gt; );obj &lt;&lt; ( effect &lt;&lt; {LSMeans Tukey HSD( state=0|1|&lt;alpha&gt;, &lt;comparison options&gt; )} )

**説明:** Tukey-KramerのHSD検定を使った最小2乗平均のペア比較において、検定と信頼区間の表示/非表示を切り替える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run
);
obj << (:Drug << {LSMeans Tukey HSD( 1 )});

```

#### Power Analysis

**構文:** scrobj &lt;&lt; Power Analysis( Alpha(from, to, by), Sigma(from, to, by), Delta(from, to, by), Number(from, to, by), objective, &lt;Power Plot&gt;, &lt;Done&gt;);obj &lt;&lt; ( effect &lt;&lt; {Power Analysis( Alpha(from, to, by), Sigma(from, to, by), Delta(from, to, by), Number(from, to, by), objective, &lt;Power Plot&gt;, &lt;Done&gt;)} )

**説明:** 「検出力の詳細」レポートを表示する。このレポートでは、検出力分析を行える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run
);
Wait( 1 );
obj << (:Drug << {Power Analysis(
	Alpha( 0.05 ),
	Sigma( 4.00577754367453 ),
	Delta( 1.51166255719209 ),
	Number( 10, 100, 10 ),
	Solve for Power,
	Power Plot,
	Done
)});

```

#### Test Slices

**構文:** scrobj &lt;&lt; Test Slices( state=0|1 );obj &lt;&lt; ( response &lt;&lt; { effect1 * effect2 &lt;&lt; {Test Slices( state=0|1 )} } )

**説明:** 交互作用項に含まれる各因子の各水準において、輪切りのF検定を実行する。このオプションは、名義・順序尺度の効果が関連する交互作用にのみ利用可能。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Fit Model(
	Y( :height ),
	Effects( :age, :sex, :age * :sex ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run
);
Wait( 1 );
obj << (:height << {:age * :sex << {Test Slices( 1 )}});

```

## Fit Least Squares > LSMeans Comparisons

### 項目のメッセージ

#### Connecting Letters Report

**構文:** scrobj &lt;&lt; Connecting Letters Report( state=0|1 )

**説明:** 比較の結果を文字接続で示したレポートの表示/非表示を切り替える。同じ文字で接続されていない水準は、有意に異なることを意味する。同じ文字で接続された水準は、有意に異ならないことを意味する。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run( :Drug << {LSMeans Tukey HSD( 1, Connecting Letters Report( 0 ) )} )
);
Wait( 1 );
scrobj = (Report( obj )["LSMeans Differences Tukey HSD"] << get scriptable object);
scrobj << Connecting Letters Report( 1 );

```

#### Control Differences Chart

**構文:** scrobj &lt;&lt; Control Differences Chart( state=0|1 )

**説明:** Dunnett検定のグラフの表示/非表示を切り替える。グラフの各点は、その水準とコントロール群との最小2乗平均差を示す。上側決定限界(UDL)と下側決定限界(LDL)がプロットされる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run(
		:Drug << {LSMeans Dunnett(
			.05,
			Control Level( "a" ),
			Control Differences Chart( 0 )
		)}
	)
);
Wait( 1 );
scrobj = (Report( obj )["LSMeans Differences Dunnett"] << get scriptable object);
scrobj << Control Differences Chart( 1 );

```

#### Control Differences Report

**構文:** scrobj &lt;&lt; Control Differences Report( state=0|1 )

**説明:** Dunnett検定の結果の表示/非表示を切り替える。表の各行には、コントロール群と比較されている水準、差の推定値、標準誤差、信頼区間、p値が含まれる。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run(
		:Drug << {LSMeans Dunnett(
			.05,
			Control Level( "a" ),
			Control Differences Report( 0 )
		)}
	)
);
Wait( 1 );
scrobj = (Report( obj )["LSMeans Differences Dunnett"] << get scriptable object);
scrobj << Control Differences Report( 1 );

```

#### Crosstab Report

**構文:** scrobj &lt;&lt; Crosstab Report( state=0|1 )

**説明:** 最小2乗平均のペア比較をクロス表形式で表したレポートの表示/非表示を切り替える。このレポートは、最小2乗平均の各組み合わせにおける差を、その標準誤差および信頼限界とともに示した表である。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run( :Drug << {LSMeans Student's t( 1, Crosstab Report( 0 ) )} )
);
Wait( 1 );
scrobj = (Report( obj )["LSMeans Differences Student's t"] << get scriptable object);
scrobj << Crosstab Report( 1 );

```

#### Detailed Comparisons

**構文:** scrobj &lt;&lt; Detailed Comparisons( state=0|1 )

**説明:** 最小2乗平均の各ペアに関する詳細なレポートの表示/非表示を切り替える。レポートには、各比較の有意度を示すグラフも含まれる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run( :Drug << {LSMeans Student's t( .05 )} )
);
Wait( 1 );
scrobj = (Report( obj )["LSMeans Differences Student's t"] << get scriptable object);
scrobj << Detailed Comparisons( 1 );

```

#### Equivalence Test

**構文:** scrobj &lt;&lt; Equivalence Test( difference )

**説明:** 最小2乗平均の差に対する同等性検定を行う。同等性検定は、「平均において指定したマージンほどの差が見られず、実質的には同等である」ということを主張したい場合に行う検定である。通常の検定は平均が異なることを主張したい場合に行うが、同等性検定は平均が実質的に同じことを主張したい場合に用いる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run( :Drug << {LSMeans Student's t( .05 )} )
);
Wait( 1 );
scrobj = (Report( obj )["LSMeans Differences Student's t"] << get scriptable object);
scrobj << Equivalence Test( 1.5 );

```

#### Ordered Differences Report

**構文:** scrobj &lt;&lt; Ordered Differences Report( state=0|1 )

**説明:** 各水準の最小2乗平均のペアに対して、それらの差を大きい順に並べたレポートの表示/非表示を切り替える。レポートには、差の標準誤差、信頼限界、p値も表示される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run( :Drug << {LSMeans Tukey HSD( .05 )} )
);
Wait( 1 );
scrobj = (Report( obj )["LSMeans Differences Tukey HSD"] << get scriptable object);
scrobj << Ordered Differences Report( 1 );

```

#### Save Connecting Letters Table

**構文:** scrobj &lt;&lt; Save Connecting Letters Table

**説明:** 効果の水準、文字の接続、最小2乗平均とその標準誤差、および信頼区間の列を含んだデータテーブルを作成する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run( :Drug << {LSMeans Student's t( 1 )} )
);
Wait( 1 );
scrobj = (Report( obj )["LSMeans Differences Student's t"] << get scriptable object);
scrobj << Save Connecting Letters Table;

```

## Fit Least Squares > Multiple Comparisons > All Pairwise Comparisons > Equivalence Tests

### 項目のメッセージ

#### Forest Plot

**構文:** scrobj &lt;&lt; Forest Plot( state=0|1 )

**説明:** 同等性検定に対するフォレストプロットの表示/非表示を切り替える。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 0 );
obj << Multiple Comparisons( Effect( Drug ), Equivalence Tests( 5, Forest Plot( 0 ) ) );
Wait( 1 );
scrobj = Report( obj )["Equivalence Tests"] << get scriptable object;
scrobj << Forest Plot( 1 );

```

#### Remove

**構文:** scrobj &lt;&lt; Remove

**説明:** 「同等性検定」レポートを削除する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 0 );
obj << Multiple Comparisons( Effect( Drug ), Equivalence Tests( 5, Forest Plot( 0 ) ) );
Wait( 2 );
scrobj = Report( obj )["Equivalence Tests"] << get scriptable object;
scrobj << Remove;

```

#### Scatterplot

**構文:** scrobj &lt;&lt; Scatterplot( state=0|1 )

**説明:** 「同等性検定 散布図」グラフの表示／非表示を切り替える。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 0 );
obj << Multiple Comparisons( Effect( Drug ), Equivalence Tests( 5, Scatterplot( 0 ) ) );
Wait( 1 );
scrobj = Report( obj )["Equivalence Tests"] << get scriptable object;
scrobj << Scatterplot( 1 );

```

#### Test Report

**構文:** scrobj &lt;&lt; Test Report( state=0|1 )

**説明:** 2つの片側検定(TOST; two one-sided test)の結果を含んだ「同等性検定」レポートの表示/非表示を切り替える。TOSTは、平均の間に実質的な差があるかどうかを検定する際に使用する。 デフォルトではオン。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 0 );
obj << Multiple Comparisons( Effect( Drug ), Equivalence Tests( 5, Test Report( 0 ) ) );
Wait( 1 );
scrobj = Report( obj )["Equivalence Tests"] << get scriptable object;
scrobj << Test Report( 1 );

```

## Fit Least Squares > Multiple Comparisons > All Pairwise Comparisons > Mean Mean Scatterplot

### 項目のメッセージ

#### Show Reference Lines

**構文:** scrobj &lt;&lt; Show Reference Lines( state=0|1 )

**説明:** 散布図において点の参照グリッド線の表示/非表示を切り替える。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 0 );
obj << Multiple Comparisons( Effect( Drug ), Tukey HSD( 1 ) );
Wait( 1 );
scrobj = Report( obj )["All Pairwise Comparisons Scatterplot"] << get scriptable object;
scrobj << Show Reference Lines( 1 );

```

## Fit Least Squares > Multiple Comparisons > All Pairwise Comparisons

### 項目のメッセージ

#### All Pairwise Comparisons Scatterplot

**構文:** scrobj &lt;&lt; All Pairwise Comparisons Scatterplot( state=0|1 )

**説明:** 「ペア比較の散布図」の表示/非表示を切り替える。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 0 );
obj << Multiple Comparisons(
	Effect( Drug ),
	Tukey HSD( 1, All Pairwise Comparisons Scatterplot( 0 ) )
);
Wait( 1 );
scrobj = (Report( obj )["Tukey HSD All Pairwise Comparisons"] << get scriptable object);
scrobj << All Pairwise Comparisons Scatterplot( 1 );

```

#### All Pairwise Differences

**構文:** scrobj &lt;&lt; All Pairwise Differences( state=0|1 )

**説明:** 「すべてのペアの平均差」レポートの表示/非表示を切り替える。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 0 );
obj << Multiple Comparisons( Effect( Drug ), Tukey HSD( 1, All Pairwise Differences( 0 ) ) );
Wait( 1 );
scrobj = (Report( obj )["Tukey HSD All Pairwise Comparisons"] << get scriptable object);
scrobj << All Pairwise Differences( 1 );

```

#### All Pairwise Differences Connecting Letters

**構文:** scrobj &lt;&lt; All Pairwise Differences Connecting Letters( state=0|1 )

**説明:** 「ペアの差 文字の接続」レポートの表示/非表示を切り替える。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Analgesics.jmp" );
obj = dt << Fit Model(
	Y( :pain ),
	Effects( :gender, :drug, :gender * :drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 0 );
obj << Multiple Comparisons(
	Effect( Drug ),
	Tukey HSD( 1, All Pairwise Differences Connecting Letters( 1 ) )
);

```

#### Save All Pairwise Differences Connecting Letters Table

**構文:** scrobj &lt;&lt; Save All Pairwise Differences Connecting Letters Table

**説明:** 効果の水準、文字の接続、最小2乗平均とその標準誤差、および信頼区間の列を含んだデータテーブルを作成する。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Analgesics.jmp" );
obj = dt << Fit Model(
	Y( :pain ),
	Effects( :gender, :drug, :gender * :drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run(
		Multiple Comparisons(
			Effect( Drug ),
			Tukey HSD( 1, All Pairwise Comparisons Scatterplot( 0 ) )
		)
	)
);
Wait( 1 );
scrobj = (Report( obj )["Tukey HSD All Pairwise Comparisons"] << get scriptable object);
scrobj << Save All Pairwise Differences Connecting Letters Table;

```

## Fit Least Squares > Multiple Comparisons > Comparisons with Control

### 項目のメッセージ

#### Calculate Adjusted P-Values

**構文:** scrobj &lt;&lt; "Calculate Adjusted P-Values"n( state=0|1 )

**説明:** 「コントロール群との差」レポートにおいてp値の列の表示/非表示を切り替える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 0 );
obj << Multiple Comparisons(
	Effect( :Drug ),
	Comparisons with Control( 1, Control Level( "Drug:a" ) )
);
Wait( 1 );
scrobj = (Report( obj )["Comparisons with Control"] << get scriptable object);
scrobj << "Calculate Adjusted P-Values"n( 1 );

```

#### Comparisons with Control Decision Chart

**構文:** scrobj &lt;&lt; Comparisons with Control Decision Chart( state=0|1 )

**説明:** 「コントロール群との比較 グラフ」の表示/非表示を切り替える。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 0 );
obj << Multiple Comparisons(
	Effect( :Drug ),
	Comparisons with Control(
		1,
		Control Level( "Drug:a" ),
		Comparisons with Control Decision Chart( 0 )
	)
);
Wait( 1 );
scrobj = (Report( obj )["Comparisons with Control"] << get scriptable object);
scrobj << Comparisons with Control Decision Chart( 1 );

```

#### Differences from Control

**構文:** scrobj &lt;&lt; Differences from Control( state=0|1 )

**説明:** 「コントロール群との差」レポートの表示/非表示を切り替える。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 0 );
obj << Multiple Comparisons(
	Effect( :Drug ),
	Comparisons with Control( 1, Control Level( "Drug:a" ), Differences from Control( 0 ) )
);
Wait( 1 );
scrobj = (Report( obj )["Comparisons with Control"] << get scriptable object);
scrobj << Differences from Control( 1 );

```

## Fit Least Squares > Multiple Comparisons > Comparisons with Overall Average

### 項目のメッセージ

#### Calculate Adjusted P-Values

**構文:** scrobj &lt;&lt; "Calculate Adjusted P-Values"n( state=0|1 )

**説明:** 「全体平均との差」レポートにおいてp値の列の表示/非表示を切り替える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 0 );
obj << Multiple Comparisons( Effect( :Drug ), Comparisons with Overall Average( 1 ) );
Wait( 1 );
scrobj = (Report( obj )["Comparisons with Overall Average"] << get scriptable object);
scrobj << "Calculate Adjusted P-Values"n( 1 );

```

#### Comparisons with Overall Average Decision Chart

**構文:** scrobj &lt;&lt; Comparisons with Overall Average Decision Chart( state=0|1 )

**説明:** 「全体平均との比較 グラフ」の表示/非表示を切り替える。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 0 );
obj << Multiple Comparisons(
	Effect( :Drug ),
	Comparisons with Overall Average(
		1,
		Comparisons with Overall Average Decision Chart( 0 )
	)
);
Wait( 1 );
scrobj = (Report( obj )["Comparisons with Overall Average"] << get scriptable object);
scrobj << Comparisons with Overall Average Decision Chart( 1 );

```

#### Differences from Overall Average

**構文:** scrobj &lt;&lt; Differences from Overall Average( state=0|1 )

**説明:** 「全体平均との差」レポートの表示/非表示を切り替える。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 0 );
obj << Multiple Comparisons(
	Effect( :Drug ),
	Comparisons with Overall Average( 1, Differences from Overall Average( 0 ) )
);
Wait( 1 );
scrobj = (Report( obj )["Comparisons with Overall Average"] << get scriptable object);
scrobj << Differences from Overall Average( 1 );

```

## Fit Least Squares > Multiple Comparisons > Least Squares Means Plot

### 項目のメッセージ

#### Remove

**構文:** scrobj &lt;&lt; Remove

**説明:** レポートから最小2乗平均プロットを削除する。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 0 );
obj << Multiple Comparisons(
	Effect( :Drug ),
	Least Squares Means Plot( Show Connected Points( 0 ) )
);
Wait( 2 );
scrobj = (Report( obj )["Least Squares Means Plot"] << get scriptable object);
scrobj << Remove;

```

#### Show Confidence Limits

**構文:** scrobj &lt;&lt; Show Confidence Limits( state=0|1 )

**説明:** プロットにおいて各推定値の信頼限界の表示/非表示を切り替える。 デフォルトではオン。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 0 );
obj << Multiple Comparisons(
	Effect( :Drug ),
	Least Squares Means Plot( Show Confidence Limits( 0 ) )
);
Wait( 1 );
scrobj = (Report( obj )["Least Squares Means Plot"] << get scriptable object);
scrobj << Show Confidence Limits( 1 );

```

#### Show Connected Points

**構文:** scrobj &lt;&lt; Show Connected Points( state=0|1 )

**説明:** プロットにおいて各水準の最小2乗平均をつなぐ線の表示/非表示を切り替える。 デフォルトではオン。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 0 );
obj << Multiple Comparisons(
	Effect( :Drug ),
	Least Squares Means Plot( Show Connected Points( 0 ) )
);
Wait( 1 );
scrobj = (Report( obj )["Least Squares Means Plot"] << get scriptable object);
scrobj << Show Connected Points( 1 );

```

## Fit Least Squares > Multiple Comparisons

### 項目のメッセージ

#### Comparisons with Control

**構文:** scrobj &lt;&lt; Comparisons with Control( state=0|1, Control Level( level ), &lt;options&gt; );obj &lt;&lt; Multiple Comparisons( Effect( effect ), Comparisons with Control( state=0|1, Control Level( level ), &lt;options&gt; ) )

**説明:** 各効果の最小2乗平均をコントロール群の最小2乗平均と比較したDunnett検定の表示/非表示を切り替える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Multiple Comparisons(
	Effect( :Drug ),
	Comparisons with Control( 1, Control Level( "Drug:a" ) )
);

```

#### Comparisons with Overall Average

**構文:** scrobj &lt;&lt; Comparisons with Overall Average( state=0|1, &lt;options&gt; );obj &lt;&lt; Multiple Comparisons( Effect( effect ), Comparisons with Overall Average( state=0|1, &lt;options&gt; ) )

**説明:** 各効果の最小2乗平均を最小2乗平均の全体平均と比較したANOM検定の表示/非表示を切り替える。平均分析検定（analysis of means test）ともいう。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Multiple Comparisons( Effect( :Drug ), Comparisons with Overall Average( 1 ) );

```

#### Equivalence Tests

**構文:** scrobj &lt;&lt; Equivalence Tests( number );obj &lt;&lt; Multiple Comparisons( Effect( effect ), Equivalence Tests( number ) )

**説明:** 実質的に同等とみなす差に照らしてすべてのペアの最小2乗平均を比較する同等性検定の表示/非表示を切り替える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Multiple Comparisons( Effect( :Drug ), Equivalence Tests( 5 ) );

```

#### Least Squares Means Plot

**構文:** scrobj &lt;&lt; Least Squares Means Plot;obj &lt;&lt; Multiple Comparisons( Effect( effect ), Least Squares Means Plot )

**説明:** 標準誤差を示すバー付きの最小2乗平均のプロットを表示する。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Multiple Comparisons( Effect( :Drug ), Least Squares Means Plot );

```

#### Remove

**構文:** scrobj &lt;&lt; Remove

**説明:** 「多重比較」レポートを削除する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 0 );
obj << Multiple Comparisons( Effect( :Drug ), Least Squares Means Plot );
Wait( 2 );
scrobj = (Report( obj )["Multiple Comparisons for Drug"] << get scriptable object);
scrobj << Remove;

```

#### Slice F Test

**構文:** scrobj &lt;&lt; Slice F Test( state=0|1 );obj &lt;&lt; Multiple Comparisons( Sliced Effect Estimates( Sliced Effect( effect1 * effect2 ), Slice Term List( effect_level ) ), Slice F Test( state=0|1 ) )

**説明:** 輪切りF検定の表示/非表示を切り替える。 デフォルトではオン。

**JMP追加されたバージョン:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Fit Model(
	Y( :height ),
	Effects( :age, :sex, :age * :sex ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run
);
Wait( 0 );
obj << Multiple Comparisons(
	Sliced Effect Estimates( Sliced Effect( :age * :sex ), Slice Term List( :age( "12" ) ) ),
	Slice F Test( 1 )
);
Wait( 1 );
scrobj = (Report( obj )["Multiple Comparisons for Slice of age*sex where age = 12"] <<
get scriptable object);
scrobj << Slice F Test( 0 );
Wait( 1 );
scrobj << Slice F Test( 1 );

```

#### Student's t

**構文:** scrobj &lt;&lt; Student&apos;s t( state=0|1, &lt;options&gt; );obj &lt;&lt; Multiple Comparisons( Effect( effect ), Student&apos;s t( state=0|1, &lt;options&gt; ) )

**説明:** すべてのペアの最小2乗平均を比較するStudentのt検定の表示/非表示を切り替える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Multiple Comparisons(
	Effect( :Drug ),
	Student's t( 1, All Pairwise Differences Connecting Letters( 1 ) )
);

```

#### Tukey HSD

**構文:** scrobj &lt;&lt; Tukey HSD( state=0|1, &lt;options&gt; );obj &lt;&lt; Multiple Comparisons( Effect( effect ), Tukey HSD( state=0|1, &lt;options&gt; ) )

**説明:** すべてのペアの最小2乗平均を比較するTukey-KamerのHSD検定の表示/非表示を切り替える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Multiple Comparisons(
	Effect( :Drug ),
	Tukey HSD( 1, All Pairwise Differences Connecting Letters( 1 ) )
);

```

## Fit Least Squares > REML

### 項目のメッセージ

#### Convergence Limit

**構文:** obj = Fit Model(...Convergence Limit( number=0.00000001 )...)

**説明:** モデル推定の最適化計算における収束基準を指定する。最適化反復計算の収束に時間がかかる場合は、この収束基準の値を大きくするとよい。デフォルトの収束基準は0.00000001。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Convergence Limit( 0.0001 ),
	Run
);

```

#### Maximum Iterations

**構文:** obj = Fit Model(...Maximum Iterations( number=100 )...)

**説明:** モデル推定の最適化計算における反復最大回数を指定する。デフォルトの最大反復回数は100。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Maximum Iterations( 150 ),
	Run
);

```

#### Method

**構文:** obj = Fit Model(...Personality( "Standard Least Squares" ), Method( "EMS" | "REML" )...)

**説明:** [標準最小2乗]手法において、混合モデルの推定方法を指定する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	NoBounds( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Emphasis( "Minimal Report" ),
	Run
);

```

#### NoBounds

**構文:** obj = Fit Model(...Personality( "Standard Least Squares" ), NoBounds( state=0|1 )...)

**説明:** オンの場合、分散推定値が負になることを許す。オフの場合、分散推定値の下限を0とする。[標準最小2乗]手法でのみ利用可能。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	NoBounds( 0 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Emphasis( "Minimal Report" ),
	Run
);

```

## Fit Least Squares > Response Fit

### 共有されるメッセージ

#### Action

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

#### Automatic Recalc

**構文:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**説明:** データの除外や変更があった場合に分析を自動的にやり直す。Automatic Recalcオプションがオンになっている場合で、データの除外や変更が再計算の前に確実に適用されるようにするには、Wait(0)コマンドを使用すること。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

#### Broadcast

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

#### Column Switcher

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

#### Copy ByGroup Script

**構文:** obj &lt;&lt; Copy ByGroup Script

**説明:** この分析を再現するJSLスクリプトを生成し、クリップボードにコピーする。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	By( _bycol ),
	Run
);
obj[1] << Copy ByGroup Script;

```

#### Copy Script

**構文:** obj &lt;&lt; Copy Script

**説明:** この分析を再現するJSLスクリプトを生成し、クリップボードにコピーする。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Copy Script;

```

#### Data Table Window

**構文:** obj &lt;&lt; Data Table Window

**説明:** この分析に使用したデータテーブルのウィンドウを手前に表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Data Table Window;

```

#### Get By Levels

**構文:** obj &lt;&lt; Get By Levels

**説明:** By列が指定されている場合、列名をキー、データ値を値とした連想配列を戻す。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

#### Get ByGroup Script

**構文:** obj &lt;&lt; Get ByGroup Script

**説明:** この分析を再現するスクリプト(JSL)を生成し、それを式として戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	By( _bycol ),
	Run
);
t = obj[1] << Get ByGroup Script;
Show( t );

```

#### Get Container

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
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Get Data Table

**構文:** obj &lt;&lt; Get Data Table

**説明:** データテーブルへの参照を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
t = obj << Get Datatable;
Show( N Rows( t ) );

```

#### Get Group Platform

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

#### Get Script

**構文:** obj &lt;&lt; Get Script

**説明:** この分析を再現するスクリプト(JSL)を生成し、それを式として戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
t = obj << Get Script;
Show( t );

```

#### Get Script With Data Table

**構文:** obj &lt;&lt; Get Script With Data Table

**説明:** この分析を再現するスクリプト(JSL)をデータテーブルへの参照も含めて生成し、それを式として戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
t = obj << Get Script With Data Table;
Show( t );

```

#### Get Timing

**構文:** obj &lt;&lt; Get Timing

**説明:** プラットフォームの起動にかかった時間を取得する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
t = obj << Get Timing;
Show( t );

```

#### Get Web Support

**構文:** obj &lt;&lt; Get Web Support

**説明:** ディスプレイオブジェクトにおけるインタラクティブHTMLサポートのレベルを数値で戻す。1は、一部または全部の要素がサポートされていることを示し、0は、サポートされないことを示す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

#### Get Where Expr

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

#### Ignore Platform Preferences

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

#### Local Data Filter

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

#### New JSL Preset

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

#### Paste Local Data Filter

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

#### Redo Analysis

**構文:** obj &lt;&lt; Redo Analysis

**説明:** 同じ分析をやり直し新しいウィンドウに表示する。データが変更されていると分析結果は異なる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Redo Analysis;

```

#### Redo ByGroup Analysis

**構文:** obj &lt;&lt; Redo ByGroup Analysis

**説明:** 同じ分析をやり直し新しいウィンドウに表示する。データが変更されていると分析結果は異なる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	By( _bycol ),
	Run
);
obj[1] << Redo ByGroup Analysis;

```

#### Relaunch Analysis

**構文:** obj &lt;&lt; Relaunch Analysis

**説明:** プラットフォームの起動ウィンドウを開き、レポートを作成した時の設定を表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Relaunch Analysis;

```

#### Relaunch ByGroup

**構文:** obj &lt;&lt; Relaunch ByGroup

**説明:** プラットフォームの起動ウィンドウを開き、レポートを作成した時の設定を表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	By( _bycol ),
	Run
);
obj[1] << Relaunch ByGroup;

```

#### Remove Column Switcher

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

#### Remove Local Data Filter

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

#### Render Preset

**構文:** Render Preset( preset )

**説明:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

#### Report

**構文:** obj &lt;&lt; Report;Report( obj )

**説明:** レポートオブジェクトへの参照を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Report View

**構文:** obj &lt;&lt; Report View( "完全"|"要約" )

**説明:** レポートビューは、プラットフォームレポートの詳細を表示するかどうかを決定する。Fullはすべての詳細を表示し、Summaryはプラットフォームにより限定されたものだけを表示する。 動作をカスタマイズするため、各ディスプレイボックスは<<Set Summary Behaviorメッセージをサポートする。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**構文:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**説明:** 分析を再現するためのJSLスクリプトを作成し、データテーブルにテーブルプロパティとして保存する。スクリプトの名前を指定できる。Append Suffixオプションは、スクリプト名に数字の接尾辞を追加する。これにより、同名のスクリプトが存在していても区別できる。Promptオプションは、ユーザにスクリプト名の指定を促す。Replaceオプションは、同名の既存のスクリプトを置き換える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**構文:** obj &lt;&lt; Save ByGroup Script to Journal

**説明:** この分析を再現するJSLスクリプトを生成し、ジャーナルにそのスクリプトのボタンを追加する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**構文:** obj &lt;&lt; Save ByGroup Script to Script Window

**説明:** この分析を再現するJSLスクリプトを生成し、現在のスクリプトウィンドウに表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**構文:** obj &lt;&lt; Save Script for All Objects

**説明:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**構文:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**説明:** すべてのレポートオブジェクトを再現するスクリプトを現在のデータテーブルに保存する。このオプションは、ウィンドウ内にレポートが複数ある場合に便利。作成されるスクリプトの名前は、引用符で囲んで指定しない限り、1つ目のプラットフォーム名となる。

**例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	By( _bycol ),
	Run
);
obj[1] << Save Script for All Objects To Data Table;

```

**例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	By( _bycol ),
	Run
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**構文:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**説明:** この分析を再現するJSLスクリプトを生成し、データテーブルのテーブルプロパティとして保存する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**構文:** obj &lt;&lt; Save Script to Journal

**説明:** この分析を再現するJSLスクリプトを生成し、ジャーナルにそのスクリプトのボタンを追加する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Save Script to Journal;

```

#### Save Script to Report

**構文:** obj &lt;&lt; Save Script to Report

**説明:** この分析を再現するJSLスクリプトを生成し、レポートウィンドウに表示する。分析手順の記録を結果と一緒に残せる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Save Script to Report;

```

#### Save Script to Script Window

**構文:** obj &lt;&lt; Save Script to Script Window

**説明:** この分析を再現するJSLスクリプトを生成し、現在のスクリプトウィンドウに表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Save Script to Script Window;

```

#### SendToByGroup

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

#### SendToEmbeddedScriptable

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

#### SendToReport

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

#### Sync to Data Table Changes

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

#### Title

**構文:** obj &lt;&lt; Title( "new title" )

**説明:** プラットフォームのタイトルを設定する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Title( "My Platform" );

```

#### Top Report

**構文:** obj &lt;&lt; Top Report

**説明:** レポート内のルートノードへの参照を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Transform Column

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

#### View Web XML

**構文:** obj &lt;&lt; View Web XML

**説明:** インタラクティブHTMLレポートの作成に使うXMLコードを戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

#### Window View

**構文:** obj = Individual Response Fit(...Window View( "Visible"|"Invisible"|"Private" )...)

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

### 関連するコンストラクター

#### Individual Response Fit

**構文:** Fit Model( Y( columns ), Effects( columns ), Personality( "Standard Least Squares" ), Emphasis( "Effect Leverage"|"Effect Screening"|"Minimal Report" )

**説明:** 連続尺度の応答変数に線形回帰モデルをあてはめる。手法には、回帰分析、分散分析、共分散分析、混合モデル、実験計画分析がある。「強調点」のオプションを使って、レポートのレイアウトを指定できる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);

```

### 項目のメッセージ

#### AICc

**構文:** obj &lt;&lt; AICc( state=0|1 )

**説明:** 「あてはめの要約」レポートにおいて、修正済み赤池情報規準(AICc)とBayes情報量規準(BIC)の表示/非表示を切り替える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << AICc( 1 );

```

#### Analysis of Variance

**構文:** obj &lt;&lt; Analysis of Variance( state=0|1 )

**説明:** 「分散分析」表のの表示/非表示を切り替える。「分散分析」表は、あてはめたモデルの残差平方和を、切片だけのモデルの残差平方和と比較したものである。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run( Analysis of Variance( 0 ) )
);
Wait( 1 );
obj << Analysis of Variance( 1 );

```

#### Apply Preset

**構文:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**説明:** 作成されたプリセットをオブジェクトに適用する。保存された設定に合わせてオプションとカスタマイズが更新される。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Lack of Fit( 0 );
obj << Effect Details( 0 );
Report( obj )["Parameter Estimates"] << Close( 1 );
preset = obj << (:y << New Preset);

dt2 = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj2 = dt2 << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj2 << (:Oxy << Apply Preset( preset ));

```

#### Bayes Plot

**構文:** obj &lt;&lt; Bayes Plot( K( number ), Priors( p1, p2, p3, ... ), Go )

**説明:** 「Bayesプロット」の表示/非表示を切り替える。「Bayesプロット」では、Bayes法を使って事後確率を計算している。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Bayes Plot( K( 10 ), Priors( 0.2, 0.2, 0.2, 0.2, 0.2 ), Go );

```

#### Box Cox Y Transformation

**構文:** obj &lt;&lt; Box Cox Y Transformation( state=0|1, &lt;Save Best Transformation( state=0|1 )&gt;, &lt;Save Specific Transformation( number )&gt;, &lt;Table of Estimates( state=0|1 )&gt; )

**説明:** 「Box-Cox変換」レポートの表示/非表示を切り替える。このレポートは、応答変数に対してべき乗変換(Box-Cox変換)を行った場合にあてはめがどのように変化するかを示す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Box Cox Y Transformation( 1, Save Best Transformation( 1 ) );

```

#### Compare Slopes

**構文:** obj &lt;&lt; Compare Slopes( Effect( effect ), &lt;options&gt; )

**説明:** 1元配置の共分散分析(ANCOVA)モデルに基づき、交互作用の各傾きを、それらの傾きの平均と比較する平均分析(ANOM)を実行する。このオプションは、固定効果が1つの名義尺度の効果、1つの連続尺度の効果、およびそれらの交互作用効果で構成される場合にのみ利用可能。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/US Demographics.jmp" );
obj = dt << Fit Model(
	Y( :Eighth Grade Math ),
	Effects( :Region, :High School Graduates, :Region * :High School Graduates ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Compare Slopes(
	Effect( :Region * :High School Graduates ),
	Student's t( 1, All Pairwise Comparisons Scatterplot( 0 ) )
);

```

#### Conditional Indiv CI

**構文:** obj &lt;&lt; Conditional Indiv CI( &lt;alpha=0.05&gt; )

**説明:** 個々の値についての条件付き予測値に対する信頼区間を保存する。この信頼区間の計算には変量効果が含まれる。このオプションは、REML法による分析でのみ利用可能。新しい列として、これらの列はデータテーブルに保存される。 Hold down the shift key to enter alpha level or suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Conditional Indiv CI( 0.001 );

```

#### Conditional Mean CI

**構文:** obj &lt;&lt; Conditional Mean CI( &lt;alpha=0.05&gt; )

**説明:** データテーブルに新しい列を作成し、条件付き予測の期待値に対する信頼区間を保存する。この信頼区間の計算には変量効果も考慮されている。このオプションは、REML法による分析でのみ利用可能。新しい列として、これらの列はデータテーブルに保存される。 Hold down the shift key to enter alpha level or suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Conditional Mean CI( 0.01 );

```

#### Conditional Pred Formula

**構文:** obj &lt;&lt; Conditional Pred Formula

**説明:** 変量効果を含む予測式を保存する。このオプションは、REML法による分析でのみ利用可能。新しい計算式列として、この列はデータテーブルに保存される。 Hold down the shift key to enter suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Conditional Pred Formula;

```

#### Conditional Pred Values

**構文:** obj &lt;&lt; Conditional Pred Values

**説明:** 最良線形不偏予測値(BLUP)を使って計算した条件付き予測値を保存する。このオプションは、REML法による分析でのみ利用可能。新しい計算式列として、この列はデータテーブルに保存される。 Hold down the shift key to enter suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Conditional Pred Values;

```

#### Conditional Residuals

**構文:** obj &lt;&lt; Conditional Residuals

**説明:** 条件付き予測値からの残差を保存する。この残差の計算には変量効果も考慮されている。このオプションは、REML法による分析でのみ利用可能。新しい列として、この列はデータテーブルに保存される。 Hold down the shift key to enter suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Conditional Residuals;

```

#### Contour Profiler

**構文:** obj &lt;&lt; Contour Profiler( state=0|1 )

**説明:** 等高線プロファイルの表示/非表示を切り替える。等高線プロファイルは、2因子ずつに対して、応答変数の予測値を等高線で描いたグラフである。モデルに連続尺度の因子が2つ以上含まれている場合のみ利用可能。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects(
		:SILICA, :SILANE, :SULFUR, :SILICA * :SILANE, :SILICA * :SULFUR, :SILANE * :SULFUR
	),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Contour Profiler( 1 );

```

#### Cook's D Influence

**構文:** obj &lt;&lt; Cook&apos;s D Influence

**説明:** CookのD距離をデータテーブルに保存する。CookのD距離は、各観測がモデルの推定に及ぼす影響の度合いを表す統計量である。新しい列として、この列はデータテーブルに保存される。 Hold down the shift key to enter suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Cook's D Influence;

```

#### Correlation of Estimates

**構文:** obj &lt;&lt; Correlation of Estimates( state=0|1 )

**説明:** 当該のあてはめ結果において、パラメータ推定値間の相関行列の表示/非表示を切り替える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Correlation of Estimates( 1 );

```

#### Cox Mixtures

**構文:** obj &lt;&lt; Cox Mixtures( p1(percentile), p2(percentile), p3(percentile) )

**説明:** Cox配合モデルに基づくパラメータ推定値の表示/非表示を切り替える。Cox配合モデルでは、そのパラメータ表現が、指定されたベース配合成分を基準にしたものになっている。このオプションは、モデルに配合効果が含まれている場合のみ利用可能。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects(
		:p1 & RS & Mixture, :p2 & RS & Mixture, :p3 & RS & Mixture, :p2 * :p1, :p3 * :p1,
		:p3 * :p2
	),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Cox Mixtures( p1( 0.6615 ), p2( 0.126 ), p3( 0.2125 ) );

```

#### Cube Plots

**構文:** obj &lt;&lt; Cube Plots( state=0|1 )

**説明:** 「キューブプロット」の表示/非表示を切り替える。「キューブプロット」では、因子の最大および最小における予測値を立方体の８つの頂点に表示したグラフである。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Cube Plots( 1 );

```

#### Custom Test

**構文:** obj &lt;&lt; Custom Test( [l1, l2, l3, ... ], &lt;Label( text )&gt; )

**説明:** 指定された対比に対するF検定を実行する。この機能を用いることで、分析者は自分の興味のある対比を検定することができる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Custom Test( [0 0 2 1], Label( "Comparison of intercepts for drug a vs. drug" ) );

```

#### Durbin Watson Test

**構文:** obj &lt;&lt; Durbin Watson Test( state=0|1 )

**説明:** Durbin-Watsonレポートの表示/非表示を切り替える。このレポートには、残差に1次の自己相関があるかどうかを検定する統計量が含まれる。また、残差の自己相関と、検定の正確なp値も表示される。このオプションは、時系列データにのみ適し、データテーブルにおいて各行が時系列で並んでいるものと仮定している。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/CO2.jmp" );
obj = dt << Fit Model(
	Y( :CO2 ),
	Effects( :Year, :Month ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Durbin Watson Test( 1 );

```

#### Effect Details

**構文:** obj &lt;&lt; Effect Details( state=0|1 )

**説明:** モデルの各効果に関する詳細なレポートの表示/非表示を切り替える。このレポートには、カテゴリカルな効果に対しては最小2乗平均の表が含まれている。モデル効果にメッセージを送ることで追加の情報を表示できる。詳細については、[モデルのあてはめ]の下の[効果あてはめ]オブジェクトを参照。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run( Effect Details( 0 ) )
);
Wait( 1 );
obj << Effect Details( 1 );

```

#### Effect Leverage Pairs

**構文:** obj &lt;&lt; Effect Leverage Pairs

**説明:** 効果てこ比プロットのX座標とY座標をデータテーブルに保存する。Y座標は帰無仮説のもとでの残差。X座標は該当する説明変数を加えることにより減少する残差の大きさ。新しい列として、これらの列はデータテーブルに保存される。 Hold down the shift key to enter suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Effect Leverage Pairs;

```

#### Effect Summary

**構文:** obj &lt;&lt; Effect Summary( state=0|1 )

**説明:** 「効果の要約」レポートの表示/非表示を切り替える。「効果の要約」レポートでは、モデルの効果を対話的に変更できる。 デフォルトではオン。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Effect Summary( 0 );
Wait( 1 );
obj << Effect Summary( 1 );
Report( obj )["Effect Summary"] << Close( 0 );

```

#### Effect Tests

**構文:** obj &lt;&lt; Effect Tests( state=0|1 )

**説明:** 「効果の検定」表の表示/非表示を切り替える。「効果の検定」表は、モデルに含まれる固定効果を検定した結果をまとめたものである。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run( Effect Tests( 0 ) )
);
Wait( 1 );
obj << Effect Tests( 1 );

```

#### Error Specification

**構文:** obj &lt;&lt; Error Specification( "デフォルトの推定値"|"純粋誤差"|"指定した値" )

**説明:** 「最小2乗法によるあてはめ」レポートにおいて、標準誤差と検定などの計算に使用する誤差分散と誤差自由度を、分析者自身が指定する。このオプションは、モデルに変量効果が含まれていない場合にのみ利用可能。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects( :SILICA, :SILANE ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Error Specification( "Pure Error" );

```

#### Expanded  Estimates

**構文:** obj &lt;&lt; Expanded Estimates( state=0|1 )

**説明:** 名義尺度のモデル効果に対して、「全水準のパラメータ推定値」表の表示/非表示を切り替える。k個の水準を持つ名義尺度の効果の場合、「パラメータ推定値」表にはk-1個のパラメータ係数が表示されるが、「全水準の推定値」表にはk個の水準すべての係数が表示される。このオプションは、少なくとも1つの効果が連続尺度でない場合のみ利用可能。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Expanded Estimates( 1 );

```

#### Externally Studentized Residuals

**構文:** obj &lt;&lt; Externally Studentized Residuals

**説明:** 外部スチューデント化残差を保存する。スチューデント化残差は、生の残差をその標準誤差で割ったものであるが、外部スチューデント化残差では、その標準誤差を求める時に、現在の行は除外して計算する。新しい列として、この列はデータテーブルに保存される。 Hold down the shift key to enter suffix.

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Externally Studentized Residuals;

```

#### FDR

**構文:** obj &lt;&lt; FDR( state=0|1 )

**説明:** 「効果の要約」表に表示するp値と対数価値を、偽発見率(FDR)にするかどうかを指定する。偽発見率は、多重性の調整をした指標の1つである。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << FDR( 1 );
Report( obj )["Effect Summary"] << Close( 0 );

```

#### Get Conditional Formula

**構文:** obj &lt;&lt; Get Conditional Formula

**説明:** 変量効果の推定値を含んだ予測式を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Get Conditional Formula;

```

#### Get Effect Names

**構文:** obj &lt;&lt; Get Effect Names

**説明:** 効果名を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
G = obj << Get Effect Names;
Show( G );

```

#### Get Effect PValues

**構文:** obj &lt;&lt; Get Effect PValues

**説明:** 効果のp値を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
G = obj << Get Effect PValues;
Show( G );

```

#### Get Estimates

**構文:** obj &lt;&lt; Get Estimates

**説明:** 推定値を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
G = obj << Get Estimates;
Show( G );

```

#### Get Indiv Confid Limit Formula

**構文:** obj &lt;&lt; Get Indiv Confid Limit Formula

**説明:** 個々の応答値に対する信頼限界の計算式を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Get Indiv Confid Limit Formula;

```

#### Get MM SAS DATA Step

**構文:** obj &lt;&lt; Get MM SAS DATA Step

**説明:** SAS Model Managerに登録できるSASコードを作成する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Get MM SAS Data Step;

```

#### Get Mean Confid Limit Formula

**構文:** obj &lt;&lt; Get Mean Confid Limit Formula

**説明:** 平均に対する信頼限界の計算式を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Get Mean Confid Limit Formula;

```

#### Get Measures

**構文:** obj &lt;&lt; Get Measures

**説明:** あてはめたモデルの適合度指標を戻す。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Get Measures;

```

#### Get Parameter Names

**構文:** obj &lt;&lt; Get Parameter Names

**説明:** パラメータ名を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
G = obj << Get Parameter Names;
Show( G );

```

#### Get Parameterized Formula

**構文:** obj &lt;&lt; Get Parameterized Formula

**説明:** 定数の代わりにパラメータを使った予測式を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Get Parameterized Formula;

```

#### Get Prediction Formula

**構文:** obj &lt;&lt; Get Prediction Formula

**説明:** 予測式の列を作成するスクリプトを戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Get Prediction Formula;

```

#### Get Random Effect Names

**構文:** obj &lt;&lt; Get Random Effect Names

**説明:** 変量効果の名前を戻す。REML分析で使用可能。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Run
);
G = obj << Get Random Effect Names;
Show( G );

```

#### Get SAS DATA Step

**構文:** obj &lt;&lt; Get SAS DATA Step

**説明:** 新しいデータセットにスコアを付けるためのSASコードを作成する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Get SAS Data Step;

```

#### Get SQL prediction expression

**構文:** obj &lt;&lt; Get SQL prediction expression

**説明:** 応答変数を予測するためのSQL式を作成する。作成されたSQL式は、SQLのSelectステートメントに貼り付けて利用できる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Get SQL prediction expression;

```

#### Get Standard Error Formula

**構文:** obj &lt;&lt; Get Standard Error Formula

**説明:** 標準誤差の計算式を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Get Standard Error Formula;

```

#### Get Std Errors

**構文:** obj &lt;&lt; Get Std Errors

**説明:** 標準誤差を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
G = obj << Get Std Errors;
Show( G );

```

#### Get Variance Components

**構文:** obj &lt;&lt; Get Variance Components

**説明:** 分散成分を戻す。REML分析で使用可能。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Run
);
G = obj << Get Variance Components;
Show( G );

```

#### Get X Matrix

**構文:** obj &lt;&lt; Get X Matrix

**説明:** 計画行列を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
G = obj << Get X Matrix;
Show( G );

```

#### Get XPX Inverse

**構文:** obj &lt;&lt; Get XPX Inverse

**説明:** X&apos;Xの逆行列を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
G = obj << Get XPX Inverse;
Show( G );

```

#### Get Y Matrix

**構文:** obj &lt;&lt; Get Y Matrix

**説明:** Y行列を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
G = obj << Get Y Matrix;
Show( G );

```

#### Hats

**構文:** obj &lt;&lt; Hats

**説明:** 行列xInv(x`x)x`の対角要素をデータテーブルに保存する。これらの値は、ハット値またはてこ比とも呼ばれる。新しい列として、この列はデータテーブルに保存される。 Hold down the shift key to enter suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Hats;

```

#### Indicator Parameterization Estimates

**構文:** obj &lt;&lt; Indicator Parameterization Estimates( state=0|1 )

**説明:** 「指示変数に対する推定値」レポートの表示/非表示を切り替える。このレポートには、指示変数に基づいて計算した名義尺度効果のパラメータ推定値が含まれる。このオプションは、モデル効果の中に、名義尺度の説明変数および切片がある場合にのみ利用可能。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Indicator Parameterization Estimates( 1 );

```

#### Indiv Confidence Interval

**構文:** obj &lt;&lt; Indiv Confidence Interval( &lt;alpha=0.05&gt; )

**説明:** 個々の値の信頼区間の上限・下限を保存する。この予測区間には、個々の実測値のばらつきと推定誤差の両方が考慮されている。新しい列として、これらの列はデータテーブルに保存される。 Hold down the shift key to enter alpha level or suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Indiv Confidence Interval( .001 );

```

#### Indiv Confidence Limit Formula

**構文:** obj &lt;&lt; Indiv Confidence Limit Formula( &lt;alpha=0.05&gt; )

**説明:** 元のデータテーブルに新しい計算式列を保存する。これらの列には、応答の個々の値に対する上側信頼限界および下側信頼限界を計算する計算式が含まれる。デフォルトの有意水準は5%であり、95%信頼区間が求められる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
ref = obj << Indiv Confidence Limit Formula( .001 );
Show( ref );

```

#### Interaction Plots

**構文:** obj &lt;&lt; Interaction Plots( state=0|1 )

**説明:** 「交互作用プロファイル」の表示/非表示を切り替える。「交互作用プロファイル」では、交互作用を見るためのプロットが行列形式で描かれる。このオプションは、モデルに交互作用効果がある場合のみ利用可能。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects(
		:SILICA, :SILANE, :SULFUR, :SILICA * :SILANE, :SILICA * :SULFUR, :SILANE * :SULFUR
	),
	Personality( "Standard Least Squares" ),
	Run
);
Wait( 1 );
obj << Interaction Plots( 1 );

```

#### Inverse Prediction

**構文:** obj &lt;&lt; Inverse Prediction( Response( p1, p2, ... ), Term Value( effect1( value ), effect2( value ), ... ) )

**説明:** 指定されたYと因子の値に基づいて、Xの予測値および信頼区間を求める。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :RunTime ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Inverse Prediction( Response( 40, 45, 50, 55 ), Term Value( RunTime( . ) ) );

```

#### Joint Factor Tests

**構文:** obj &lt;&lt; Joint Factor Tests( state=0|1 )

**説明:** モデルの各主効果に対する「複合因子検定」表の表示/非表示を切り替える。この検定は、「主効果を含め、その因子に関係する効果がすべて0である」という帰無仮説を検定する。このオプションは、モデルに交互作用が含まれている場合のみ利用可能。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects(
		:SILICA, :SILANE, :SULFUR, :SILICA * :SILANE, :SILICA * :SULFUR, :SILANE * :SULFUR
	),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Joint Factor Tests( 1 );

```

#### Lack of Fit

**構文:** obj &lt;&lt; Lack of Fit( state=0|1 )

**説明:** あてはまりの悪さ(LOF; lack of fit)に関する検定の表示/非表示を切り替える。この検定は、データを十分に説明するほどモデルに効果が含まれていない場合、つまり、必要な効果がモデルに含まれていない場合を検出するための検定である。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run( Lack Of Fit( 0 ) )
);
Wait( 1 );
obj << Lack Of Fit( 1 );

```

#### Mean Confidence Interval

**構文:** obj &lt;&lt; Mean Confidence Interval( &lt;alpha=0.05&gt; )

**説明:** 応答変数の期待値に対する信頼区間の上限・下限をデータテーブルに保存する。この信頼区間には、推定誤差は含まれているが、個々の実測値のばらつきは考慮されていない。新しい列として、これらの列はデータテーブルに保存される。 Hold down the shift key to enter alpha level or suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Mean Confidence Interval( .01 );

```

#### Mean Confidence Limit Formula

**構文:** obj &lt;&lt; Mean Confidence Limit Formula( &lt;alpha=0.05&gt; )

**説明:** 元のデータテーブルに新しい計算式列を保存する。これらの列には、応答の平均に対する上側信頼限界および下側信頼限界を計算する計算式が含まれる。デフォルトの有意水準は5%であり、95%信頼区間が求められる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
r = obj << Mean Confidence Limit Formula( .01 );
Show( r );

```

#### Mixture Profiler

**構文:** obj &lt;&lt; Mixture Profiler( state=0|1 )

**説明:** 「配合プロファイル」の表示/非表示を切り替える。「配合プロファイル」では、三角図上に応答変数の予測値が描かれる。このオプションは、モデル内の3つ以上の因子に[配合効果]の属性が適用されているか、3つ以上の列に[配合]プロパティが適用されている場合にのみ利用可能。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects(
		:p1 & RS & Mixture, :p2 & RS & Mixture, :p3 & RS & Mixture, :p2 * :p1, :p3 * :p1,
		:p3 * :p2
	),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Mixture Profiler( 1 );

```

#### Model Dialog

**構文:** obj &lt;&lt; Model Dialog

**説明:** 現在の分析が設定された起動ダイアログを開く。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Model Dialog;

```

#### Multiple Comparisons

**構文:** obj &lt;&lt; Multiple Comparisons( Effect(...)|Estimate List(...)|Sliced Effect Estimates(...), &lt;options&gt; )

**説明:** 最小2乗平均やユーザ定義の平均を、多重比較する。比較の方法として、全体平均との比較、コントロール群との比較、または、ペア比較を選択できる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Multiple Comparisons( Effect( :Drug ) );

```

#### New Preset

**構文:** obj = New Preset()

**説明:** オブジェクトに適用されているオプションとカスタマイズをプリセットとしてまとめる。このオブジェクトをApply Presetに渡すことで、同じ種類のオブジェクトに設定をコピーすることができる。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Lack of Fit( 0 );
obj << Effect Details( 0 );
Report( obj )["Parameter Estimates"] << Close( 1 );
preset = obj << (:y << New Preset);

```

#### Normal Plot

**構文:** obj &lt;&lt; Normal Plot( state=0|1 )

**説明:** 「要因のスクリーニング」レポートにて、「正規プロット」の表示/非表示を切り替える。この「正規プロット」は、効果のスクリーニングを行う際、正規分布から外れたパラメータ推定値を見つけ出すことで、有効な効果を見つけ出すためのグラフである。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Normal Plot( 1 );

```

#### Parameter Estimates

**構文:** obj &lt;&lt; Parameter Estimates( state=0|1 )

**説明:** 「パラメータ推定値」表の表示/非表示を切り替える。「パラメータ推定値」表には、パラメータ推定値とt検定が表示される。t検定は、パラメータのそれぞれに対して、「パラメータがゼロに等しい」という仮説を検定する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run( Parameter Estimates( 0 ) )
);
Wait( 1 );
obj << Parameter Estimates( 1 );

```

#### Parameter Power

**構文:** obj &lt;&lt; Parameter Power( state=0|1 )

**説明:** 「パラメータ推定値」レポートにおいて、検出力に関する列を追加または削除する。これらの追加・削除される列は、最小有意差・最小有意数・検出力である。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Parameter Power( 1 );

```

#### Parameterized Formula

**構文:** obj &lt;&lt; Parameterized Formula

**説明:** 定数ではなくパラメータを用いた予測式を、データテーブルに保存する。新しい計算式列として、この列はデータテーブルに保存される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Parameterized Formula;

```

#### Pareto Plot

**構文:** obj &lt;&lt; Pareto Plot( state=0|1 )

**説明:** 「パレート図」の表示/非表示を切り替える。この「パレート図」では、直交化・標準化したパラメータ推定値が描かれており、絶対値の合計に対する相対的な大きさが示される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Pareto Plot( 1 );

```

#### Plot Actual by Predicted

**構文:** obj &lt;&lt; Plot Actual by Predicted( state=0|1 )

**説明:** 「予測値と実測値プロット」の表示/非表示を切り替える。このプロットは、応答変数の観測値と予測値をグラフにしたもの。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Plot Actual by Predicted( 1 );

```

#### Plot Effect Leverage

**構文:** obj &lt;&lt; Plot Effect Leverage( state=0|1 )

**説明:** モデルの各効果に対する「てこ比プロット」レポートの表示/非表示を切り替える。「てこ比プロット」は、各観測が各々の効果の検定にどのように影響しているかを視覚的に示すものであり、また、多重共線性の検討にも役立つ。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run( Plot Effect Leverage( 0 ) )
);
Wait( 1 );
obj << Plot Effect Leverage( 1 );

```

#### Plot Regression

**構文:** obj &lt;&lt; Plot Regression( state=0|1 )

**説明:** 「回帰プロット」レポートの表示/非表示を切り替える。「回帰プロット」は、連続尺度の説明変数が1つだけある場合に、回帰直線も描かれた散布図である。他にも、カテゴリカルな効果が1つだけある場合には、そのカテゴリカルな効果の各水準における回帰曲線が描かれる。。このオプションは、モデルに連続尺度の効果が1つだけあり、カテゴリカルな効果が1つ以下だけある場合のみ利用可能。これらの条件が満たされていれば「回帰プロット」レポートはデフォルトで表示される。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run( Plot Regression( 0 ) )
);
Wait( 1 );
obj << Plot Regression( 1 );

```

#### Plot Residual by Normal Quantiles

**構文:** obj &lt;&lt; Plot Residual by Normal Quantiles( state=0|1 )

**説明:** Y軸に残差、X軸に残差の正規分位点を表示したプロットの表示/非表示を切り替える。このオプションは、推定法としてREML法を使用している場合には利用できない。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Plot Residual by Normal Quantiles( 1 );

```

#### Plot Residual by Predicted

**構文:** obj &lt;&lt; Plot Residual by Predicted( state=0|1 )

**説明:** Y軸に残差、X軸に応答の予測値を表示したプロットの表示/非表示を切り替える。このオプションは、連続尺度の応答にのみ利用できる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Plot Residual by Predicted( 1 );

```

#### Plot Residual by Row

**構文:** obj &lt;&lt; Plot Residual by Row( state=0|1 )

**説明:** 「行番号と残差のプロット」の表示/非表示を切り替える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Plot Residual by Row( 1 );

```

#### Plot Studentized Residuals

**構文:** obj &lt;&lt; Plot Studentized Residuals( state=0|1 )

**説明:** Y軸にスチューデント化残差、X軸に行番号を表示したプロットの表示/非表示を切り替える。プロット上の各点の残差は、その点自身は除外して求めた標準偏差の推定値を使って計算される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Plot Studentized Residuals( 1 );

```

#### Predicted Values

**構文:** obj &lt;&lt; Predicted Values

**説明:** あてはめたモデルの予測値をデータテーブルに保存する。新しい列として、この列はデータテーブルに保存される。 Hold down the shift key to enter suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Predicted Values;

```

#### Prediction Formula

**構文:** obj &lt;&lt; Prediction Formula

**説明:** あてはめたモデルの予測式をデータテーブルに保存する。新しい計算式の列として、この列はデータテーブルに保存される。 Hold down the shift key to enter suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Prediction Formula;

```

#### Prediction and Interval Formulas

**構文:** obj &lt;&lt; Prediction and Interval Formulas( &lt;alpha=0.05&gt; )

**説明:** データテーブルに新しい列を作成し、予測値・信頼区間・予測区間の計算式を保存する。このオプションで作成される区間の列には、予測プロファイルで使用されるプロパティが含まれる。 Hold down the shift key to enter alpha level or suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Prediction and Interval Formulas;
dt << Profiler(
	Y( :Pred Formula y ),
	Profiler( 1, Confidence Intervals( 1 ), Prediction Intervals( 1 ) )
);
Wait( 2 );
obj << Prediction and Interval Formulas( 0.01 );
dt << Profiler(
	Y( :Pred Formula y2 ),
	Profiler( 1, Confidence Intervals( 1 ), Prediction Intervals( 1 ) )
);

```

#### Press

**構文:** obj &lt;&lt; Press( state=0|1 )

**説明:** 予測残差平方和(PRESS)と、PRESS誤差の標準偏差(RMSE)の表示/非表示を切り替える。PRESS統計量は、複数のモデルの比較に役立つ。PRESSの値が小さいモデルが良いモデル。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Press( 1 );

```

#### Profiler

**構文:** obj &lt;&lt; Profiler( state=0|1 )

**説明:** 予測プロファイルの表示/非表示を切り替える。予測プロファイルは、1因子ずつスライスしながら予測式を図示したものである。予測プロファイルでは、最適化を行える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Profiler( 1 );

```

#### Publish Conditional Formula

**構文:** obj &lt;&lt; Publish Conditional Formula

**説明:** 変量効果の推定値を含んだ予測式を作成し、スクリプトとして「計算式デポ」プラットフォームに発行する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Publish Conditional Formula;

```

#### Publish Indiv Confid Limit Formula

**構文:** obj &lt;&lt; Publish Indiv Confid Limit Formula

**説明:** 個々の応答値に対する信頼区間の計算式を作成し、スクリプトとして「計算式デポ」プラットフォームに発行する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Publish Indiv Confid Limit Formula;

```

#### Publish Mean Confid Limit Formula

**構文:** obj &lt;&lt; Publish Mean Confid Limit Formula

**説明:** 平均に対する信頼区間の計算式を作成し、スクリプトとして「計算式デポ」プラットフォームに発行する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Publish Mean Confid Limit Formula;

```

#### Publish Parameterized Formula

**構文:** obj &lt;&lt; Publish Parameterized Formula

**説明:** 定数の代わりにパラメータを使った予測式を作成し、スクリプトとして「計算式デポ」プラットフォームに発行する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Publish Parameterized Formula;

```

#### Publish Prediction Formula

**構文:** obj &lt;&lt; Publish Prediction Formula

**説明:** 予測式を作成するスクリプトを「計算式デポ」プラットフォームに発行する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Publish Prediction Formula;

```

#### Publish Standard Error Formula

**構文:** obj &lt;&lt; Publish Standard Error Formula

**説明:** 標準誤差の計算式を作成し、スクリプトとして「計算式デポ」プラットフォームに発行する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Publish Standard Error Formula;

```

#### Residuals

**構文:** obj &lt;&lt; Residuals

**説明:** あてはめたモデルの残差を保存する。新しい列として、この列はデータテーブルに保存される。 Hold down the shift key to enter suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Residuals;

```

#### Save Coding Table

**構文:** obj &lt;&lt; Save Coding Table

**説明:** 計画行列(デザイン行列)を含む新しいデータテーブルを作成する。この計画行列は、モデルの推定で用いられたコード変換に即したものである。最後の列には応答変数の値が保存される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Save Coding Table;

```

#### Scaled Estimates

**構文:** obj &lt;&lt; Scaled Estimates( state=0|1 )

**説明:** 「尺度化した推定値」表の表示/非表示を切り替える。「尺度化した推定値」は、平均が0、範囲が2となるよう尺度化された因子に対応するパラメータ推定値である。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects(
		:SILICA, :SILANE, :SULFUR, :SILICA * :SILANE, :SILICA * :SULFUR, :SILANE * :SULFUR
	),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Scaled Estimates( 1 );

```

#### Sequential Tests

**構文:** obj &lt;&lt; Sequential Tests( state=0|1 )

**説明:** 「逐次(タイプ1)検定」レポートの表示/非表示を切り替える。このレポートには、モデルに1つずつ効果が順次追加されたときの平方和が含まれる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Sequential Tests( 1 );

```

#### Show All Confidence Intervals

**構文:** obj &lt;&lt; Show All Confidence Intervals( state=0|1 )

**説明:** パラメータ推定値と最小2乗平均の推定値について、信頼区間の表示/非表示を切り替える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Show All Confidence Intervals( 1 );

```

#### Show Prediction Expression

**構文:** obj &lt;&lt; Show Prediction Expression( state=0|1 )

**説明:** 「予測式」レポートの表示/非表示を切り替える。このレポートには、予測式が示されている。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Show Prediction Expression( 1 );

```

#### Show Sqrt Variance Component

**構文:** obj &lt;&lt; Show Sqrt Variance Component( state=0|1 )

**説明:** 「REML法による分散成分推定値」レポートの「分散成分の平方根」列の表示/非表示を切り替える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Run
);
Wait( 1 );
obj << Show Sqrt Variance Component( 1 );

```

#### Show VIF

**構文:** obj &lt;&lt; Show VIF( state=0|1 )

**説明:** 「パラメータ推定値」表においてVIFの表示/非表示を切り替える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Show VIF( 1 );

```

#### Sorted Estimates

**構文:** obj &lt;&lt; Sorted Estimates( state=0|1 )

**説明:** 「並べ替えたパラメータ推定値」表の表示/非表示を切り替える。このレポートでは、パラメータ推定値が各推定値のt値の絶対値を基準に並べられており、スクリーニングに役立つ。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Sorted Estimates( 1 );

```

#### Std Error of Individual

**構文:** obj &lt;&lt; Std Error of Individual

**説明:** 個々の応答値に対する標準誤差をデータテーブルに保存する。この標準誤差は、個々の応答値に対する信頼区間を計算する際に使う。新しい列として、この列はデータテーブルに保存される。 Hold down the shift key to enter suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Std Error of Individual;

```

#### Std Error of Predicted

**構文:** obj &lt;&lt; Std Error of Predicted

**説明:** 予測値の標準誤差をデータテーブルに保存する。この標準誤差は、平均に対する信頼区間を計算する際に使う。新しい列として、この列はデータテーブルに保存される。 Hold down the shift key to enter suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Std Error of Predicted;

```

#### Std Error of Residual

**構文:** obj &lt;&lt; Std Error of Residual

**説明:** 残差の標準誤差をデータテーブルに保存する。この標準誤差は、スチューデント化残差を計算する際に使う。新しい列として、この列はデータテーブルに保存される。 Hold down the shift key to enter suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Std Error of Residual;

```

#### StdErr Pred Formula

**構文:** obj &lt;&lt; StdErr Pred Formula

**説明:** 予測値に対する標準誤差の計算式をデータテーブルに保存する。この計算式は、説明変数の関数になっている。新しい計算式列として、この列はデータテーブルに保存される。 Hold down the shift key to enter suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << StdErr Pred Formula;

```

#### Studentized Residuals

**構文:** obj &lt;&lt; Studentized Residuals

**説明:** スチューデント化残差(残差を標準誤差で割ったもの)をデータテーブルに保存する。新しい列として、この列はデータテーブルに保存される。 Hold down the shift key to enter suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Studentized Residuals;

```

#### Summary of Fit

**構文:** obj &lt;&lt; Summary of Fit( state=0|1 )

**説明:** モデルの適合度統計量をまとめたレポートの表示/非表示を切り替える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run( Summary of Fit( 0 ) )
);
Wait( 1 );
obj << Summary of Fit( 1 );

```

#### Surface Profiler

**構文:** obj &lt;&lt; Surface Profiler( state=0|1 )

**説明:** 曲面プロファイルの表示/非表示を切り替える。曲面プロファイルは、応答変数の予測値を3次元空間に曲面で描いたものである。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Surface Profiler( 1 );

```

## Fit Least Squares

### 共有されるメッセージ

#### Action

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

#### Automatic Recalc

**構文:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**説明:** データの除外や変更があった場合に分析を自動的にやり直す。Automatic Recalcオプションがオンになっている場合で、データの除外や変更が再計算の前に確実に適用されるようにするには、Wait(0)コマンドを使用すること。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

#### Broadcast

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

#### Column Switcher

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

#### Copy ByGroup Script

**構文:** obj &lt;&lt; Copy ByGroup Script

**説明:** この分析を再現するJSLスクリプトを生成し、クリップボードにコピーする。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	By( _bycol ),
	Run
);
obj[1] << Copy ByGroup Script;

```

#### Copy Script

**構文:** obj &lt;&lt; Copy Script

**説明:** この分析を再現するJSLスクリプトを生成し、クリップボードにコピーする。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Copy Script;

```

#### Data Table Window

**構文:** obj &lt;&lt; Data Table Window

**説明:** この分析に使用したデータテーブルのウィンドウを手前に表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Data Table Window;

```

#### Get By Levels

**構文:** obj &lt;&lt; Get By Levels

**説明:** By列が指定されている場合、列名をキー、データ値を値とした連想配列を戻す。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

#### Get ByGroup Script

**構文:** obj &lt;&lt; Get ByGroup Script

**説明:** この分析を再現するスクリプト(JSL)を生成し、それを式として戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	By( _bycol ),
	Run
);
t = obj[1] << Get ByGroup Script;
Show( t );

```

#### Get Container

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
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Get Data Table

**構文:** obj &lt;&lt; Get Data Table

**説明:** データテーブルへの参照を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
t = obj << Get Datatable;
Show( N Rows( t ) );

```

#### Get Group Platform

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

#### Get Script

**構文:** obj &lt;&lt; Get Script

**説明:** この分析を再現するスクリプト(JSL)を生成し、それを式として戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
t = obj << Get Script;
Show( t );

```

#### Get Script With Data Table

**構文:** obj &lt;&lt; Get Script With Data Table

**説明:** この分析を再現するスクリプト(JSL)をデータテーブルへの参照も含めて生成し、それを式として戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
t = obj << Get Script With Data Table;
Show( t );

```

#### Get Timing

**構文:** obj &lt;&lt; Get Timing

**説明:** プラットフォームの起動にかかった時間を取得する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
t = obj << Get Timing;
Show( t );

```

#### Get Web Support

**構文:** obj &lt;&lt; Get Web Support

**説明:** ディスプレイオブジェクトにおけるインタラクティブHTMLサポートのレベルを数値で戻す。1は、一部または全部の要素がサポートされていることを示し、0は、サポートされないことを示す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

#### Get Where Expr

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

#### Ignore Platform Preferences

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

#### Local Data Filter

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

#### New JSL Preset

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

#### Paste Local Data Filter

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

#### Redo Analysis

**構文:** obj &lt;&lt; Redo Analysis

**説明:** 同じ分析をやり直し新しいウィンドウに表示する。データが変更されていると分析結果は異なる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Redo Analysis;

```

#### Redo ByGroup Analysis

**構文:** obj &lt;&lt; Redo ByGroup Analysis

**説明:** 同じ分析をやり直し新しいウィンドウに表示する。データが変更されていると分析結果は異なる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	By( _bycol ),
	Run
);
obj[1] << Redo ByGroup Analysis;

```

#### Relaunch Analysis

**構文:** obj &lt;&lt; Relaunch Analysis

**説明:** プラットフォームの起動ウィンドウを開き、レポートを作成した時の設定を表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Relaunch Analysis;

```

#### Relaunch ByGroup

**構文:** obj &lt;&lt; Relaunch ByGroup

**説明:** プラットフォームの起動ウィンドウを開き、レポートを作成した時の設定を表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	By( _bycol ),
	Run
);
obj[1] << Relaunch ByGroup;

```

#### Remove Column Switcher

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

#### Remove Local Data Filter

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

#### Render Preset

**構文:** Render Preset( preset )

**説明:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

#### Report

**構文:** obj &lt;&lt; Report;Report( obj )

**説明:** レポートオブジェクトへの参照を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Report View

**構文:** obj &lt;&lt; Report View( "完全"|"要約" )

**説明:** レポートビューは、プラットフォームレポートの詳細を表示するかどうかを決定する。Fullはすべての詳細を表示し、Summaryはプラットフォームにより限定されたものだけを表示する。 動作をカスタマイズするため、各ディスプレイボックスは<<Set Summary Behaviorメッセージをサポートする。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**構文:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**説明:** 分析を再現するためのJSLスクリプトを作成し、データテーブルにテーブルプロパティとして保存する。スクリプトの名前を指定できる。Append Suffixオプションは、スクリプト名に数字の接尾辞を追加する。これにより、同名のスクリプトが存在していても区別できる。Promptオプションは、ユーザにスクリプト名の指定を促す。Replaceオプションは、同名の既存のスクリプトを置き換える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**構文:** obj &lt;&lt; Save ByGroup Script to Journal

**説明:** この分析を再現するJSLスクリプトを生成し、ジャーナルにそのスクリプトのボタンを追加する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**構文:** obj &lt;&lt; Save ByGroup Script to Script Window

**説明:** この分析を再現するJSLスクリプトを生成し、現在のスクリプトウィンドウに表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**構文:** obj &lt;&lt; Save Script for All Objects

**説明:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**構文:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**説明:** すべてのレポートオブジェクトを再現するスクリプトを現在のデータテーブルに保存する。このオプションは、ウィンドウ内にレポートが複数ある場合に便利。作成されるスクリプトの名前は、引用符で囲んで指定しない限り、1つ目のプラットフォーム名となる。

**例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	By( _bycol ),
	Run
);
obj[1] << Save Script for All Objects To Data Table;

```

**例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	By( _bycol ),
	Run
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**構文:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**説明:** この分析を再現するJSLスクリプトを生成し、データテーブルのテーブルプロパティとして保存する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**構文:** obj &lt;&lt; Save Script to Journal

**説明:** この分析を再現するJSLスクリプトを生成し、ジャーナルにそのスクリプトのボタンを追加する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Save Script to Journal;

```

#### Save Script to Report

**構文:** obj &lt;&lt; Save Script to Report

**説明:** この分析を再現するJSLスクリプトを生成し、レポートウィンドウに表示する。分析手順の記録を結果と一緒に残せる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Save Script to Report;

```

#### Save Script to Script Window

**構文:** obj &lt;&lt; Save Script to Script Window

**説明:** この分析を再現するJSLスクリプトを生成し、現在のスクリプトウィンドウに表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Save Script to Script Window;

```

#### SendToByGroup

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

#### SendToEmbeddedScriptable

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

#### SendToReport

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

#### Sync to Data Table Changes

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

#### Title

**構文:** obj &lt;&lt; Title( "new title" )

**説明:** プラットフォームのタイトルを設定する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Title( "My Platform" );

```

#### Top Report

**構文:** obj &lt;&lt; Top Report

**説明:** レポート内のルートノードへの参照を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Transform Column

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

#### View Web XML

**構文:** obj &lt;&lt; View Web XML

**説明:** インタラクティブHTMLレポートの作成に使うXMLコードを戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

#### Window View

**構文:** obj = Least Squares Personality(...Window View( "Visible"|"Invisible"|"Private" )...)

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

### 関連するコンストラクター

#### Least Squares Personality

**構文:** Fit Model( Y( columns ), Effects( columns ), Personality( "Standard Least Squares" ), Emphasis( "Effect Leverage"|"Effect Screening"|"Minimal Report" )

**説明:** 連続尺度の応答変数に線形回帰モデルをあてはめる。手法には、回帰分析、分散分析、共分散分析、混合モデル、実験計画分析がある。「強調点」のオプションを使って、レポートのレイアウトを指定できる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);

```

### 項目のメッセージ

#### AICc

**構文:** obj &lt;&lt; AICc( state=0|1 )

**説明:** 「あてはめの要約」レポートにおいて、修正済み赤池情報規準(AICc)とBayes情報量規準(BIC)の表示/非表示を切り替える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << AICc( 1 );

```

#### Analysis of Variance

**構文:** obj &lt;&lt; Analysis of Variance( state=0|1 )

**説明:** 「分散分析」表のの表示/非表示を切り替える。「分散分析」表は、あてはめたモデルの残差平方和を、切片だけのモデルの残差平方和と比較したものである。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run( Analysis of Variance( 0 ) )
);
Wait( 1 );
obj << Analysis of Variance( 1 );

```

#### Apply Preset

**構文:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**説明:** 作成されたプリセットをオブジェクトに適用する。保存された設定に合わせてオプションとカスタマイズが更新される。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Lack of Fit( 0 );
obj << Effect Details( 0 );
Report( obj )["Parameter Estimates"] << Close( 1 );
preset = obj << (:y << New Preset);

dt2 = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj2 = dt2 << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj2 << (:Oxy << Apply Preset( preset ));

```

#### Bayes Plot

**構文:** obj &lt;&lt; Bayes Plot( K( number ), Priors( p1, p2, p3, ... ), Go )

**説明:** 「Bayesプロット」の表示/非表示を切り替える。「Bayesプロット」では、Bayes法を使って事後確率を計算している。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Bayes Plot( K( 10 ), Priors( 0.2, 0.2, 0.2, 0.2, 0.2 ), Go );

```

#### Box Cox Y Transformation

**構文:** obj &lt;&lt; Box Cox Y Transformation( state=0|1, &lt;Save Best Transformation( state=0|1 )&gt;, &lt;Save Specific Transformation( number )&gt;, &lt;Table of Estimates( state=0|1 )&gt; )

**説明:** 「Box-Cox変換」レポートの表示/非表示を切り替える。このレポートは、応答変数に対してべき乗変換(Box-Cox変換)を行った場合にあてはめがどのように変化するかを示す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Box Cox Y Transformation( 1, Save Best Transformation( 1 ) );

```

#### Compare Slopes

**構文:** obj &lt;&lt; Compare Slopes( Effect( effect ), &lt;options&gt; )

**説明:** 1元配置の共分散分析(ANCOVA)モデルに基づき、交互作用の各傾きを、それらの傾きの平均と比較する平均分析(ANOM)を実行する。このオプションは、固定効果が1つの名義尺度の効果、1つの連続尺度の効果、およびそれらの交互作用効果で構成される場合にのみ利用可能。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/US Demographics.jmp" );
obj = dt << Fit Model(
	Y( :Eighth Grade Math ),
	Effects( :Region, :High School Graduates, :Region * :High School Graduates ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Compare Slopes(
	Effect( :Region * :High School Graduates ),
	Student's t( 1, All Pairwise Comparisons Scatterplot( 0 ) )
);

```

#### Conditional Indiv CI

**構文:** obj &lt;&lt; Conditional Indiv CI( &lt;alpha=0.05&gt; )

**説明:** 個々の値についての条件付き予測値に対する信頼区間を保存する。この信頼区間の計算には変量効果が含まれる。このオプションは、REML法による分析でのみ利用可能。新しい列として、これらの列はデータテーブルに保存される。 Hold down the shift key to enter alpha level or suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Conditional Indiv CI( 0.001 );

```

#### Conditional Mean CI

**構文:** obj &lt;&lt; Conditional Mean CI( &lt;alpha=0.05&gt; )

**説明:** データテーブルに新しい列を作成し、条件付き予測の期待値に対する信頼区間を保存する。この信頼区間の計算には変量効果も考慮されている。このオプションは、REML法による分析でのみ利用可能。新しい列として、これらの列はデータテーブルに保存される。 Hold down the shift key to enter alpha level or suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Conditional Mean CI( 0.01 );

```

#### Conditional Pred Formula

**構文:** obj &lt;&lt; Conditional Pred Formula

**説明:** 変量効果を含む予測式を保存する。このオプションは、REML法による分析でのみ利用可能。新しい計算式列として、この列はデータテーブルに保存される。 Hold down the shift key to enter suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Conditional Pred Formula;

```

#### Conditional Pred Values

**構文:** obj &lt;&lt; Conditional Pred Values

**説明:** 最良線形不偏予測値(BLUP)を使って計算した条件付き予測値を保存する。このオプションは、REML法による分析でのみ利用可能。新しい計算式列として、この列はデータテーブルに保存される。 Hold down the shift key to enter suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Conditional Pred Values;

```

#### Conditional Residuals

**構文:** obj &lt;&lt; Conditional Residuals

**説明:** 条件付き予測値からの残差を保存する。この残差の計算には変量効果も考慮されている。このオプションは、REML法による分析でのみ利用可能。新しい列として、この列はデータテーブルに保存される。 Hold down the shift key to enter suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Conditional Residuals;

```

#### Contour Profiler

**構文:** obj &lt;&lt; Contour Profiler( state=0|1 )

**説明:** 等高線プロファイルの表示/非表示を切り替える。等高線プロファイルは、2因子ずつに対して、応答変数の予測値を等高線で描いたグラフである。モデルに連続尺度の因子が2つ以上含まれている場合のみ利用可能。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects(
		:SILICA, :SILANE, :SULFUR, :SILICA * :SILANE, :SILICA * :SULFUR, :SILANE * :SULFUR
	),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Contour Profiler( 1 );

```

#### Cook's D Influence

**構文:** obj &lt;&lt; Cook&apos;s D Influence

**説明:** CookのD距離をデータテーブルに保存する。CookのD距離は、各観測がモデルの推定に及ぼす影響の度合いを表す統計量である。新しい列として、この列はデータテーブルに保存される。 Hold down the shift key to enter suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Cook's D Influence;

```

#### Correlation of Estimates

**構文:** obj &lt;&lt; Correlation of Estimates( state=0|1 )

**説明:** 当該のあてはめ結果において、パラメータ推定値間の相関行列の表示/非表示を切り替える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Correlation of Estimates( 1 );

```

#### Cox Mixtures

**構文:** obj &lt;&lt; Cox Mixtures( p1(percentile), p2(percentile), p3(percentile) )

**説明:** Cox配合モデルに基づくパラメータ推定値の表示/非表示を切り替える。Cox配合モデルでは、そのパラメータ表現が、指定されたベース配合成分を基準にしたものになっている。このオプションは、モデルに配合効果が含まれている場合のみ利用可能。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects(
		:p1 & RS & Mixture, :p2 & RS & Mixture, :p3 & RS & Mixture, :p2 * :p1, :p3 * :p1,
		:p3 * :p2
	),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Cox Mixtures( p1( 0.6615 ), p2( 0.126 ), p3( 0.2125 ) );

```

#### Cube Plots

**構文:** obj &lt;&lt; Cube Plots( state=0|1 )

**説明:** 「キューブプロット」の表示/非表示を切り替える。「キューブプロット」では、因子の最大および最小における予測値を立方体の８つの頂点に表示したグラフである。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Cube Plots( 1 );

```

#### Custom Test

**構文:** obj &lt;&lt; Custom Test( [l1, l2, l3, ... ], &lt;Label( text )&gt; )

**説明:** 指定された対比に対するF検定を実行する。この機能を用いることで、分析者は自分の興味のある対比を検定することができる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Custom Test( [0 0 2 1], Label( "Comparison of intercepts for drug a vs. drug" ) );

```

#### Durbin Watson Test

**構文:** obj &lt;&lt; Durbin Watson Test( state=0|1 )

**説明:** Durbin-Watsonレポートの表示/非表示を切り替える。このレポートには、残差に1次の自己相関があるかどうかを検定する統計量が含まれる。また、残差の自己相関と、検定の正確なp値も表示される。このオプションは、時系列データにのみ適し、データテーブルにおいて各行が時系列で並んでいるものと仮定している。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/CO2.jmp" );
obj = dt << Fit Model(
	Y( :CO2 ),
	Effects( :Year, :Month ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Durbin Watson Test( 1 );

```

#### Effect Details

**構文:** obj &lt;&lt; Effect Details( state=0|1 )

**説明:** モデルの各効果に関する詳細なレポートの表示/非表示を切り替える。このレポートには、カテゴリカルな効果に対しては最小2乗平均の表が含まれている。モデル効果にメッセージを送ることで追加の情報を表示できる。詳細については、[モデルのあてはめ]の下の[効果あてはめ]オブジェクトを参照。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run( Effect Details( 0 ) )
);
Wait( 1 );
obj << Effect Details( 1 );

```

#### Effect Leverage Pairs

**構文:** obj &lt;&lt; Effect Leverage Pairs

**説明:** 効果てこ比プロットのX座標とY座標をデータテーブルに保存する。Y座標は帰無仮説のもとでの残差。X座標は該当する説明変数を加えることにより減少する残差の大きさ。新しい列として、これらの列はデータテーブルに保存される。 Hold down the shift key to enter suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Effect Leverage Pairs;

```

#### Effect Summary

**構文:** obj &lt;&lt; Effect Summary( state=0|1 )

**説明:** 「効果の要約」レポートの表示/非表示を切り替える。「効果の要約」レポートでは、モデルの効果を対話的に変更できる。 デフォルトではオン。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Effect Summary( 0 );
Wait( 1 );
obj << Effect Summary( 1 );
Report( obj )["Effect Summary"] << Close( 0 );

```

#### Effect Tests

**構文:** obj &lt;&lt; Effect Tests( state=0|1 )

**説明:** 「効果の検定」表の表示/非表示を切り替える。「効果の検定」表は、モデルに含まれる固定効果を検定した結果をまとめたものである。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run( Effect Tests( 0 ) )
);
Wait( 1 );
obj << Effect Tests( 1 );

```

#### Error Specification

**構文:** obj &lt;&lt; Error Specification( "デフォルトの推定値"|"純粋誤差"|"指定した値" )

**説明:** 「最小2乗法によるあてはめ」レポートにおいて、標準誤差と検定などの計算に使用する誤差分散と誤差自由度を、分析者自身が指定する。このオプションは、モデルに変量効果が含まれていない場合にのみ利用可能。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects( :SILICA, :SILANE ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Error Specification( "Pure Error" );

```

#### Expanded  Estimates

**構文:** obj &lt;&lt; Expanded Estimates( state=0|1 )

**説明:** 名義尺度のモデル効果に対して、「全水準のパラメータ推定値」表の表示/非表示を切り替える。k個の水準を持つ名義尺度の効果の場合、「パラメータ推定値」表にはk-1個のパラメータ係数が表示されるが、「全水準の推定値」表にはk個の水準すべての係数が表示される。このオプションは、少なくとも1つの効果が連続尺度でない場合のみ利用可能。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Expanded Estimates( 1 );

```

#### Externally Studentized Residuals

**構文:** obj &lt;&lt; Externally Studentized Residuals

**説明:** 外部スチューデント化残差を保存する。スチューデント化残差は、生の残差をその標準誤差で割ったものであるが、外部スチューデント化残差では、その標準誤差を求める時に、現在の行は除外して計算する。新しい列として、この列はデータテーブルに保存される。 Hold down the shift key to enter suffix.

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Externally Studentized Residuals;

```

#### FDR

**構文:** obj &lt;&lt; FDR( state=0|1 )

**説明:** 「効果の要約」表に表示するp値と対数価値を、偽発見率(FDR)にするかどうかを指定する。偽発見率は、多重性の調整をした指標の1つである。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << FDR( 1 );
Report( obj )["Effect Summary"] << Close( 0 );

```

#### Get Conditional Formula

**構文:** obj &lt;&lt; Get Conditional Formula

**説明:** 変量効果の推定値を含んだ予測式を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Get Conditional Formula;

```

#### Get Effect Names

**構文:** obj &lt;&lt; Get Effect Names

**説明:** 効果名を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
G = obj << Get Effect Names;
Show( G );

```

#### Get Effect PValues

**構文:** obj &lt;&lt; Get Effect PValues

**説明:** 効果のp値を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
G = obj << Get Effect PValues;
Show( G );

```

#### Get Estimates

**構文:** obj &lt;&lt; Get Estimates

**説明:** 推定値を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
G = obj << Get Estimates;
Show( G );

```

#### Get Indiv Confid Limit Formula

**構文:** obj &lt;&lt; Get Indiv Confid Limit Formula

**説明:** 個々の応答値に対する信頼限界の計算式を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Get Indiv Confid Limit Formula;

```

#### Get MM SAS DATA Step

**構文:** obj &lt;&lt; Get MM SAS DATA Step

**説明:** SAS Model Managerに登録できるSASコードを作成する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Get MM SAS Data Step;

```

#### Get Mean Confid Limit Formula

**構文:** obj &lt;&lt; Get Mean Confid Limit Formula

**説明:** 平均に対する信頼限界の計算式を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Get Mean Confid Limit Formula;

```

#### Get Measures

**構文:** obj &lt;&lt; Get Measures

**説明:** あてはめたモデルの適合度指標を戻す。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Get Measures;

```

#### Get Parameter Names

**構文:** obj &lt;&lt; Get Parameter Names

**説明:** パラメータ名を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
G = obj << Get Parameter Names;
Show( G );

```

#### Get Parameterized Formula

**構文:** obj &lt;&lt; Get Parameterized Formula

**説明:** 定数の代わりにパラメータを使った予測式を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Get Parameterized Formula;

```

#### Get Prediction Formula

**構文:** obj &lt;&lt; Get Prediction Formula

**説明:** 予測式の列を作成するスクリプトを戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Get Prediction Formula;

```

#### Get Random Effect Names

**構文:** obj &lt;&lt; Get Random Effect Names

**説明:** 変量効果の名前を戻す。REML分析で使用可能。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Run
);
G = obj << Get Random Effect Names;
Show( G );

```

#### Get SAS DATA Step

**構文:** obj &lt;&lt; Get SAS DATA Step

**説明:** 新しいデータセットにスコアを付けるためのSASコードを作成する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Get SAS Data Step;

```

#### Get SQL prediction expression

**構文:** obj &lt;&lt; Get SQL prediction expression

**説明:** 応答変数を予測するためのSQL式を作成する。作成されたSQL式は、SQLのSelectステートメントに貼り付けて利用できる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Get SQL prediction expression;

```

#### Get Standard Error Formula

**構文:** obj &lt;&lt; Get Standard Error Formula

**説明:** 標準誤差の計算式を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Get Standard Error Formula;

```

#### Get Std Errors

**構文:** obj &lt;&lt; Get Std Errors

**説明:** 標準誤差を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
G = obj << Get Std Errors;
Show( G );

```

#### Get Variance Components

**構文:** obj &lt;&lt; Get Variance Components

**説明:** 分散成分を戻す。REML分析で使用可能。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Run
);
G = obj << Get Variance Components;
Show( G );

```

#### Get X Matrix

**構文:** obj &lt;&lt; Get X Matrix

**説明:** 計画行列を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
G = obj << Get X Matrix;
Show( G );

```

#### Get XPX Inverse

**構文:** obj &lt;&lt; Get XPX Inverse

**説明:** X&apos;Xの逆行列を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
G = obj << Get XPX Inverse;
Show( G );

```

#### Get Y Matrix

**構文:** obj &lt;&lt; Get Y Matrix

**説明:** Y行列を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
G = obj << Get Y Matrix;
Show( G );

```

#### Hats

**構文:** obj &lt;&lt; Hats

**説明:** 行列xInv(x`x)x`の対角要素をデータテーブルに保存する。これらの値は、ハット値またはてこ比とも呼ばれる。新しい列として、この列はデータテーブルに保存される。 Hold down the shift key to enter suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Hats;

```

#### Indicator Parameterization Estimates

**構文:** obj &lt;&lt; Indicator Parameterization Estimates( state=0|1 )

**説明:** 「指示変数に対する推定値」レポートの表示/非表示を切り替える。このレポートには、指示変数に基づいて計算した名義尺度効果のパラメータ推定値が含まれる。このオプションは、モデル効果の中に、名義尺度の説明変数および切片がある場合にのみ利用可能。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Indicator Parameterization Estimates( 1 );

```

#### Indiv Confidence Interval

**構文:** obj &lt;&lt; Indiv Confidence Interval( &lt;alpha=0.05&gt; )

**説明:** 個々の値の信頼区間の上限・下限を保存する。この予測区間には、個々の実測値のばらつきと推定誤差の両方が考慮されている。新しい列として、これらの列はデータテーブルに保存される。 Hold down the shift key to enter alpha level or suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Indiv Confidence Interval( .001 );

```

#### Indiv Confidence Limit Formula

**構文:** obj &lt;&lt; Indiv Confidence Limit Formula( &lt;alpha=0.05&gt; )

**説明:** 元のデータテーブルに新しい計算式列を保存する。これらの列には、応答の個々の値に対する上側信頼限界および下側信頼限界を計算する計算式が含まれる。デフォルトの有意水準は5%であり、95%信頼区間が求められる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
ref = obj << Indiv Confidence Limit Formula( .001 );
Show( ref );

```

#### Interaction Plots

**構文:** obj &lt;&lt; Interaction Plots( state=0|1 )

**説明:** 「交互作用プロファイル」の表示/非表示を切り替える。「交互作用プロファイル」では、交互作用を見るためのプロットが行列形式で描かれる。このオプションは、モデルに交互作用効果がある場合のみ利用可能。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects(
		:SILICA, :SILANE, :SULFUR, :SILICA * :SILANE, :SILICA * :SULFUR, :SILANE * :SULFUR
	),
	Personality( "Standard Least Squares" ),
	Run
);
Wait( 1 );
obj << Interaction Plots( 1 );

```

#### Inverse Prediction

**構文:** obj &lt;&lt; Inverse Prediction( Response( p1, p2, ... ), Term Value( effect1( value ), effect2( value ), ... ) )

**説明:** 指定されたYと因子の値に基づいて、Xの予測値および信頼区間を求める。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :RunTime ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Inverse Prediction( Response( 40, 45, 50, 55 ), Term Value( RunTime( . ) ) );

```

#### Joint Factor Tests

**構文:** obj &lt;&lt; Joint Factor Tests( state=0|1 )

**説明:** モデルの各主効果に対する「複合因子検定」表の表示/非表示を切り替える。この検定は、「主効果を含め、その因子に関係する効果がすべて0である」という帰無仮説を検定する。このオプションは、モデルに交互作用が含まれている場合のみ利用可能。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects(
		:SILICA, :SILANE, :SULFUR, :SILICA * :SILANE, :SILICA * :SULFUR, :SILANE * :SULFUR
	),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Joint Factor Tests( 1 );

```

#### Lack of Fit

**構文:** obj &lt;&lt; Lack of Fit( state=0|1 )

**説明:** あてはまりの悪さ(LOF; lack of fit)に関する検定の表示/非表示を切り替える。この検定は、データを十分に説明するほどモデルに効果が含まれていない場合、つまり、必要な効果がモデルに含まれていない場合を検出するための検定である。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run( Lack Of Fit( 0 ) )
);
Wait( 1 );
obj << Lack Of Fit( 1 );

```

#### Mean Confidence Interval

**構文:** obj &lt;&lt; Mean Confidence Interval( &lt;alpha=0.05&gt; )

**説明:** 応答変数の期待値に対する信頼区間の上限・下限をデータテーブルに保存する。この信頼区間には、推定誤差は含まれているが、個々の実測値のばらつきは考慮されていない。新しい列として、これらの列はデータテーブルに保存される。 Hold down the shift key to enter alpha level or suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Mean Confidence Interval( .01 );

```

#### Mean Confidence Limit Formula

**構文:** obj &lt;&lt; Mean Confidence Limit Formula( &lt;alpha=0.05&gt; )

**説明:** 元のデータテーブルに新しい計算式列を保存する。これらの列には、応答の平均に対する上側信頼限界および下側信頼限界を計算する計算式が含まれる。デフォルトの有意水準は5%であり、95%信頼区間が求められる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
r = obj << Mean Confidence Limit Formula( .01 );
Show( r );

```

#### Mixture Profiler

**構文:** obj &lt;&lt; Mixture Profiler( state=0|1 )

**説明:** 「配合プロファイル」の表示/非表示を切り替える。「配合プロファイル」では、三角図上に応答変数の予測値が描かれる。このオプションは、モデル内の3つ以上の因子に[配合効果]の属性が適用されているか、3つ以上の列に[配合]プロパティが適用されている場合にのみ利用可能。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects(
		:p1 & RS & Mixture, :p2 & RS & Mixture, :p3 & RS & Mixture, :p2 * :p1, :p3 * :p1,
		:p3 * :p2
	),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Mixture Profiler( 1 );

```

#### Model Dialog

**構文:** obj &lt;&lt; Model Dialog

**説明:** 現在の分析が設定された起動ダイアログを開く。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Model Dialog;

```

#### Multiple Comparisons

**構文:** obj &lt;&lt; Multiple Comparisons( Effect(...)|Estimate List(...)|Sliced Effect Estimates(...), &lt;options&gt; )

**説明:** 最小2乗平均やユーザ定義の平均を、多重比較する。比較の方法として、全体平均との比較、コントロール群との比較、または、ペア比較を選択できる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Multiple Comparisons( Effect( :Drug ) );

```

#### New Preset

**構文:** obj = New Preset()

**説明:** オブジェクトに適用されているオプションとカスタマイズをプリセットとしてまとめる。このオブジェクトをApply Presetに渡すことで、同じ種類のオブジェクトに設定をコピーすることができる。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Lack of Fit( 0 );
obj << Effect Details( 0 );
Report( obj )["Parameter Estimates"] << Close( 1 );
preset = obj << (:y << New Preset);

```

#### Normal Plot

**構文:** obj &lt;&lt; Normal Plot( state=0|1 )

**説明:** 「要因のスクリーニング」レポートにて、「正規プロット」の表示/非表示を切り替える。この「正規プロット」は、効果のスクリーニングを行う際、正規分布から外れたパラメータ推定値を見つけ出すことで、有効な効果を見つけ出すためのグラフである。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Normal Plot( 1 );

```

#### Parameter Estimates

**構文:** obj &lt;&lt; Parameter Estimates( state=0|1 )

**説明:** 「パラメータ推定値」表の表示/非表示を切り替える。「パラメータ推定値」表には、パラメータ推定値とt検定が表示される。t検定は、パラメータのそれぞれに対して、「パラメータがゼロに等しい」という仮説を検定する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run( Parameter Estimates( 0 ) )
);
Wait( 1 );
obj << Parameter Estimates( 1 );

```

#### Parameter Power

**構文:** obj &lt;&lt; Parameter Power( state=0|1 )

**説明:** 「パラメータ推定値」レポートにおいて、検出力に関する列を追加または削除する。これらの追加・削除される列は、最小有意差・最小有意数・検出力である。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Parameter Power( 1 );

```

#### Parameterized Formula

**構文:** obj &lt;&lt; Parameterized Formula

**説明:** 定数ではなくパラメータを用いた予測式を、データテーブルに保存する。新しい計算式列として、この列はデータテーブルに保存される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Parameterized Formula;

```

#### Pareto Plot

**構文:** obj &lt;&lt; Pareto Plot( state=0|1 )

**説明:** 「パレート図」の表示/非表示を切り替える。この「パレート図」では、直交化・標準化したパラメータ推定値が描かれており、絶対値の合計に対する相対的な大きさが示される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Pareto Plot( 1 );

```

#### Plot Actual by Predicted

**構文:** obj &lt;&lt; Plot Actual by Predicted( state=0|1 )

**説明:** 「予測値と実測値プロット」の表示/非表示を切り替える。このプロットは、応答変数の観測値と予測値をグラフにしたもの。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Plot Actual by Predicted( 1 );

```

#### Plot Effect Leverage

**構文:** obj &lt;&lt; Plot Effect Leverage( state=0|1 )

**説明:** モデルの各効果に対する「てこ比プロット」レポートの表示/非表示を切り替える。「てこ比プロット」は、各観測が各々の効果の検定にどのように影響しているかを視覚的に示すものであり、また、多重共線性の検討にも役立つ。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run( Plot Effect Leverage( 0 ) )
);
Wait( 1 );
obj << Plot Effect Leverage( 1 );

```

#### Plot Regression

**構文:** obj &lt;&lt; Plot Regression( state=0|1 )

**説明:** 「回帰プロット」レポートの表示/非表示を切り替える。「回帰プロット」は、連続尺度の説明変数が1つだけある場合に、回帰直線も描かれた散布図である。他にも、カテゴリカルな効果が1つだけある場合には、そのカテゴリカルな効果の各水準における回帰曲線が描かれる。。このオプションは、モデルに連続尺度の効果が1つだけあり、カテゴリカルな効果が1つ以下だけある場合のみ利用可能。これらの条件が満たされていれば「回帰プロット」レポートはデフォルトで表示される。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run( Plot Regression( 0 ) )
);
Wait( 1 );
obj << Plot Regression( 1 );

```

#### Plot Residual by Normal Quantiles

**構文:** obj &lt;&lt; Plot Residual by Normal Quantiles( state=0|1 )

**説明:** Y軸に残差、X軸に残差の正規分位点を表示したプロットの表示/非表示を切り替える。このオプションは、推定法としてREML法を使用している場合には利用できない。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Plot Residual by Normal Quantiles( 1 );

```

#### Plot Residual by Predicted

**構文:** obj &lt;&lt; Plot Residual by Predicted( state=0|1 )

**説明:** Y軸に残差、X軸に応答の予測値を表示したプロットの表示/非表示を切り替える。このオプションは、連続尺度の応答にのみ利用できる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Plot Residual by Predicted( 1 );

```

#### Plot Residual by Row

**構文:** obj &lt;&lt; Plot Residual by Row( state=0|1 )

**説明:** 「行番号と残差のプロット」の表示/非表示を切り替える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Plot Residual by Row( 1 );

```

#### Plot Studentized Residuals

**構文:** obj &lt;&lt; Plot Studentized Residuals( state=0|1 )

**説明:** Y軸にスチューデント化残差、X軸に行番号を表示したプロットの表示/非表示を切り替える。プロット上の各点の残差は、その点自身は除外して求めた標準偏差の推定値を使って計算される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Plot Studentized Residuals( 1 );

```

#### Predicted Values

**構文:** obj &lt;&lt; Predicted Values

**説明:** あてはめたモデルの予測値をデータテーブルに保存する。新しい列として、この列はデータテーブルに保存される。 Hold down the shift key to enter suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Predicted Values;

```

#### Prediction Formula

**構文:** obj &lt;&lt; Prediction Formula

**説明:** あてはめたモデルの予測式をデータテーブルに保存する。新しい計算式の列として、この列はデータテーブルに保存される。 Hold down the shift key to enter suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Prediction Formula;

```

#### Prediction and Interval Formulas

**構文:** obj &lt;&lt; Prediction and Interval Formulas( &lt;alpha=0.05&gt; )

**説明:** データテーブルに新しい列を作成し、予測値・信頼区間・予測区間の計算式を保存する。このオプションで作成される区間の列には、予測プロファイルで使用されるプロパティが含まれる。 Hold down the shift key to enter alpha level or suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Prediction and Interval Formulas;
dt << Profiler(
	Y( :Pred Formula y ),
	Profiler( 1, Confidence Intervals( 1 ), Prediction Intervals( 1 ) )
);
Wait( 2 );
obj << Prediction and Interval Formulas( 0.01 );
dt << Profiler(
	Y( :Pred Formula y2 ),
	Profiler( 1, Confidence Intervals( 1 ), Prediction Intervals( 1 ) )
);

```

#### Press

**構文:** obj &lt;&lt; Press( state=0|1 )

**説明:** 予測残差平方和(PRESS)と、PRESS誤差の標準偏差(RMSE)の表示/非表示を切り替える。PRESS統計量は、複数のモデルの比較に役立つ。PRESSの値が小さいモデルが良いモデル。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Press( 1 );

```

#### Profiler

**構文:** obj &lt;&lt; Profiler( state=0|1 )

**説明:** 予測プロファイルの表示/非表示を切り替える。予測プロファイルは、1因子ずつスライスしながら予測式を図示したものである。予測プロファイルでは、最適化を行える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Profiler( 1 );

```

#### Publish Conditional Formula

**構文:** obj &lt;&lt; Publish Conditional Formula

**説明:** 変量効果の推定値を含んだ予測式を作成し、スクリプトとして「計算式デポ」プラットフォームに発行する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Publish Conditional Formula;

```

#### Publish Indiv Confid Limit Formula

**構文:** obj &lt;&lt; Publish Indiv Confid Limit Formula

**説明:** 個々の応答値に対する信頼区間の計算式を作成し、スクリプトとして「計算式デポ」プラットフォームに発行する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Publish Indiv Confid Limit Formula;

```

#### Publish Mean Confid Limit Formula

**構文:** obj &lt;&lt; Publish Mean Confid Limit Formula

**説明:** 平均に対する信頼区間の計算式を作成し、スクリプトとして「計算式デポ」プラットフォームに発行する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Publish Mean Confid Limit Formula;

```

#### Publish Parameterized Formula

**構文:** obj &lt;&lt; Publish Parameterized Formula

**説明:** 定数の代わりにパラメータを使った予測式を作成し、スクリプトとして「計算式デポ」プラットフォームに発行する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Publish Parameterized Formula;

```

#### Publish Prediction Formula

**構文:** obj &lt;&lt; Publish Prediction Formula

**説明:** 予測式を作成するスクリプトを「計算式デポ」プラットフォームに発行する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Publish Prediction Formula;

```

#### Publish Standard Error Formula

**構文:** obj &lt;&lt; Publish Standard Error Formula

**説明:** 標準誤差の計算式を作成し、スクリプトとして「計算式デポ」プラットフォームに発行する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Publish Standard Error Formula;

```

#### Residuals

**構文:** obj &lt;&lt; Residuals

**説明:** あてはめたモデルの残差を保存する。新しい列として、この列はデータテーブルに保存される。 Hold down the shift key to enter suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Residuals;

```

#### Save Coding Table

**構文:** obj &lt;&lt; Save Coding Table

**説明:** 計画行列(デザイン行列)を含む新しいデータテーブルを作成する。この計画行列は、モデルの推定で用いられたコード変換に即したものである。最後の列には応答変数の値が保存される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Save Coding Table;

```

#### Scaled Estimates

**構文:** obj &lt;&lt; Scaled Estimates( state=0|1 )

**説明:** 「尺度化した推定値」表の表示/非表示を切り替える。「尺度化した推定値」は、平均が0、範囲が2となるよう尺度化された因子に対応するパラメータ推定値である。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects(
		:SILICA, :SILANE, :SULFUR, :SILICA * :SILANE, :SILICA * :SULFUR, :SILANE * :SULFUR
	),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Scaled Estimates( 1 );

```

#### Sequential Tests

**構文:** obj &lt;&lt; Sequential Tests( state=0|1 )

**説明:** 「逐次(タイプ1)検定」レポートの表示/非表示を切り替える。このレポートには、モデルに1つずつ効果が順次追加されたときの平方和が含まれる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Sequential Tests( 1 );

```

#### Show All Confidence Intervals

**構文:** obj &lt;&lt; Show All Confidence Intervals( state=0|1 )

**説明:** パラメータ推定値と最小2乗平均の推定値について、信頼区間の表示/非表示を切り替える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Show All Confidence Intervals( 1 );

```

#### Show Prediction Expression

**構文:** obj &lt;&lt; Show Prediction Expression( state=0|1 )

**説明:** 「予測式」レポートの表示/非表示を切り替える。このレポートには、予測式が示されている。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Show Prediction Expression( 1 );

```

#### Show Sqrt Variance Component

**構文:** obj &lt;&lt; Show Sqrt Variance Component( state=0|1 )

**説明:** 「REML法による分散成分推定値」レポートの「分散成分の平方根」列の表示/非表示を切り替える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Run
);
Wait( 1 );
obj << Show Sqrt Variance Component( 1 );

```

#### Show VIF

**構文:** obj &lt;&lt; Show VIF( state=0|1 )

**説明:** 「パラメータ推定値」表においてVIFの表示/非表示を切り替える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Show VIF( 1 );

```

#### Sorted Estimates

**構文:** obj &lt;&lt; Sorted Estimates( state=0|1 )

**説明:** 「並べ替えたパラメータ推定値」表の表示/非表示を切り替える。このレポートでは、パラメータ推定値が各推定値のt値の絶対値を基準に並べられており、スクリーニングに役立つ。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Sorted Estimates( 1 );

```

#### Std Error of Individual

**構文:** obj &lt;&lt; Std Error of Individual

**説明:** 個々の応答値に対する標準誤差をデータテーブルに保存する。この標準誤差は、個々の応答値に対する信頼区間を計算する際に使う。新しい列として、この列はデータテーブルに保存される。 Hold down the shift key to enter suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Std Error of Individual;

```

#### Std Error of Predicted

**構文:** obj &lt;&lt; Std Error of Predicted

**説明:** 予測値の標準誤差をデータテーブルに保存する。この標準誤差は、平均に対する信頼区間を計算する際に使う。新しい列として、この列はデータテーブルに保存される。 Hold down the shift key to enter suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Std Error of Predicted;

```

#### Std Error of Residual

**構文:** obj &lt;&lt; Std Error of Residual

**説明:** 残差の標準誤差をデータテーブルに保存する。この標準誤差は、スチューデント化残差を計算する際に使う。新しい列として、この列はデータテーブルに保存される。 Hold down the shift key to enter suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Std Error of Residual;

```

#### StdErr Pred Formula

**構文:** obj &lt;&lt; StdErr Pred Formula

**説明:** 予測値に対する標準誤差の計算式をデータテーブルに保存する。この計算式は、説明変数の関数になっている。新しい計算式列として、この列はデータテーブルに保存される。 Hold down the shift key to enter suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << StdErr Pred Formula;

```

#### Studentized Residuals

**構文:** obj &lt;&lt; Studentized Residuals

**説明:** スチューデント化残差(残差を標準誤差で割ったもの)をデータテーブルに保存する。新しい列として、この列はデータテーブルに保存される。 Hold down the shift key to enter suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Studentized Residuals;

```

#### Summary of Fit

**構文:** obj &lt;&lt; Summary of Fit( state=0|1 )

**説明:** モデルの適合度統計量をまとめたレポートの表示/非表示を切り替える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run( Summary of Fit( 0 ) )
);
Wait( 1 );
obj << Summary of Fit( 1 );

```

#### Surface Profiler

**構文:** obj &lt;&lt; Surface Profiler( state=0|1 )

**説明:** 曲面プロファイルの表示/非表示を切り替える。曲面プロファイルは、応答変数の予測値を3次元空間に曲面で描いたものである。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Surface Profiler( 1 );

```

## Fit LogVariance > Response Fit LogVariance

### 共有されるメッセージ

#### Action

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

#### Automatic Recalc

**構文:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**説明:** データの除外や変更があった場合に分析を自動的にやり直す。Automatic Recalcオプションがオンになっている場合で、データの除外や変更が再計算の前に確実に適用されるようにするには、Wait(0)コマンドを使用すること。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Prediction Formula;
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

#### Broadcast

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

#### Column Switcher

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

#### Copy ByGroup Script

**構文:** obj &lt;&lt; Copy ByGroup Script

**説明:** この分析を再現するJSLスクリプトを生成し、クリップボードにコピーする。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	By( _bycol ),
	Run
);
obj << Prediction Formula;
obj[1] << Copy ByGroup Script;

```

#### Copy Script

**構文:** obj &lt;&lt; Copy Script

**説明:** この分析を再現するJSLスクリプトを生成し、クリップボードにコピーする。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Prediction Formula;
obj << Copy Script;

```

#### Data Table Window

**構文:** obj &lt;&lt; Data Table Window

**説明:** この分析に使用したデータテーブルのウィンドウを手前に表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Prediction Formula;
obj << Data Table Window;

```

#### Get By Levels

**構文:** obj &lt;&lt; Get By Levels

**説明:** By列が指定されている場合、列名をキー、データ値を値とした連想配列を戻す。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

#### Get ByGroup Script

**構文:** obj &lt;&lt; Get ByGroup Script

**説明:** この分析を再現するスクリプト(JSL)を生成し、それを式として戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	By( _bycol ),
	Run
);
obj << Prediction Formula;
t = obj[1] << Get ByGroup Script;
Show( t );

```

#### Get Container

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
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Prediction Formula;
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Get Data Table

**構文:** obj &lt;&lt; Get Data Table

**説明:** データテーブルへの参照を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Prediction Formula;
t = obj << Get Datatable;
Show( N Rows( t ) );

```

#### Get Group Platform

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

#### Get Script

**構文:** obj &lt;&lt; Get Script

**説明:** この分析を再現するスクリプト(JSL)を生成し、それを式として戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Prediction Formula;
t = obj << Get Script;
Show( t );

```

#### Get Script With Data Table

**構文:** obj &lt;&lt; Get Script With Data Table

**説明:** この分析を再現するスクリプト(JSL)をデータテーブルへの参照も含めて生成し、それを式として戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Prediction Formula;
t = obj << Get Script With Data Table;
Show( t );

```

#### Get Timing

**構文:** obj &lt;&lt; Get Timing

**説明:** プラットフォームの起動にかかった時間を取得する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Prediction Formula;
t = obj << Get Timing;
Show( t );

```

#### Get Web Support

**構文:** obj &lt;&lt; Get Web Support

**説明:** ディスプレイオブジェクトにおけるインタラクティブHTMLサポートのレベルを数値で戻す。1は、一部または全部の要素がサポートされていることを示し、0は、サポートされないことを示す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

#### Get Where Expr

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

#### Ignore Platform Preferences

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

#### Local Data Filter

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

#### New JSL Preset

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

#### Paste Local Data Filter

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

#### Redo Analysis

**構文:** obj &lt;&lt; Redo Analysis

**説明:** 同じ分析をやり直し新しいウィンドウに表示する。データが変更されていると分析結果は異なる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Prediction Formula;
obj << Redo Analysis;

```

#### Redo ByGroup Analysis

**構文:** obj &lt;&lt; Redo ByGroup Analysis

**説明:** 同じ分析をやり直し新しいウィンドウに表示する。データが変更されていると分析結果は異なる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	By( _bycol ),
	Run
);
obj << Prediction Formula;
obj[1] << Redo ByGroup Analysis;

```

#### Relaunch Analysis

**構文:** obj &lt;&lt; Relaunch Analysis

**説明:** プラットフォームの起動ウィンドウを開き、レポートを作成した時の設定を表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Prediction Formula;
obj << Relaunch Analysis;

```

#### Relaunch ByGroup

**構文:** obj &lt;&lt; Relaunch ByGroup

**説明:** プラットフォームの起動ウィンドウを開き、レポートを作成した時の設定を表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	By( _bycol ),
	Run
);
obj << Prediction Formula;
obj[1] << Relaunch ByGroup;

```

#### Remove Column Switcher

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

#### Remove Local Data Filter

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

#### Render Preset

**構文:** Render Preset( preset )

**説明:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

#### Report

**構文:** obj &lt;&lt; Report;Report( obj )

**説明:** レポートオブジェクトへの参照を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Prediction Formula;
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Report View

**構文:** obj &lt;&lt; Report View( "完全"|"要約" )

**説明:** レポートビューは、プラットフォームレポートの詳細を表示するかどうかを決定する。Fullはすべての詳細を表示し、Summaryはプラットフォームにより限定されたものだけを表示する。 動作をカスタマイズするため、各ディスプレイボックスは<<Set Summary Behaviorメッセージをサポートする。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Prediction Formula;
obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**構文:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**説明:** 分析を再現するためのJSLスクリプトを作成し、データテーブルにテーブルプロパティとして保存する。スクリプトの名前を指定できる。Append Suffixオプションは、スクリプト名に数字の接尾辞を追加する。これにより、同名のスクリプトが存在していても区別できる。Promptオプションは、ユーザにスクリプト名の指定を促す。Replaceオプションは、同名の既存のスクリプトを置き換える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	By( _bycol ),
	Run
);
obj << Prediction Formula;
obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**構文:** obj &lt;&lt; Save ByGroup Script to Journal

**説明:** この分析を再現するJSLスクリプトを生成し、ジャーナルにそのスクリプトのボタンを追加する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	By( _bycol ),
	Run
);
obj << Prediction Formula;
obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**構文:** obj &lt;&lt; Save ByGroup Script to Script Window

**説明:** この分析を再現するJSLスクリプトを生成し、現在のスクリプトウィンドウに表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	By( _bycol ),
	Run
);
obj << Prediction Formula;
obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**構文:** obj &lt;&lt; Save Script for All Objects

**説明:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Prediction Formula;
obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**構文:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**説明:** すべてのレポートオブジェクトを再現するスクリプトを現在のデータテーブルに保存する。このオプションは、ウィンドウ内にレポートが複数ある場合に便利。作成されるスクリプトの名前は、引用符で囲んで指定しない限り、1つ目のプラットフォーム名となる。

**例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	By( _bycol ),
	Run
);
obj << Prediction Formula;
obj[1] << Save Script for All Objects To Data Table;

```

**例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	By( _bycol ),
	Run
);
obj << Prediction Formula;
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**構文:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**説明:** この分析を再現するJSLスクリプトを生成し、データテーブルのテーブルプロパティとして保存する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Prediction Formula;
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**構文:** obj &lt;&lt; Save Script to Journal

**説明:** この分析を再現するJSLスクリプトを生成し、ジャーナルにそのスクリプトのボタンを追加する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Prediction Formula;
obj << Save Script to Journal;

```

#### Save Script to Report

**構文:** obj &lt;&lt; Save Script to Report

**説明:** この分析を再現するJSLスクリプトを生成し、レポートウィンドウに表示する。分析手順の記録を結果と一緒に残せる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Prediction Formula;
obj << Save Script to Report;

```

#### Save Script to Script Window

**構文:** obj &lt;&lt; Save Script to Script Window

**説明:** この分析を再現するJSLスクリプトを生成し、現在のスクリプトウィンドウに表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Prediction Formula;
obj << Save Script to Script Window;

```

#### SendToByGroup

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

#### SendToEmbeddedScriptable

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

#### SendToReport

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

#### Sync to Data Table Changes

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

#### Title

**構文:** obj &lt;&lt; Title( "new title" )

**説明:** プラットフォームのタイトルを設定する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Prediction Formula;
obj << Title( "My Platform" );

```

#### Top Report

**構文:** obj &lt;&lt; Top Report

**説明:** レポート内のルートノードへの参照を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Prediction Formula;
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Transform Column

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

#### View Web XML

**構文:** obj &lt;&lt; View Web XML

**説明:** インタラクティブHTMLレポートの作成に使うXMLコードを戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

#### Window View

**構文:** obj = Prediction Formula(...Window View( "Visible"|"Invisible"|"Private" )...)

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

### 項目のメッセージ

#### Apply Preset

**構文:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**説明:** 作成されたプリセットをオブジェクトに適用する。保存された設定に合わせてオプションとカスタマイズが更新される。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Pressure, :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << (:Pressure << Plot Actual By Predicted( 0 ));
Report( obj )["Response Pressure", "Variance Model For Pressure"] << Close( 1 );
Wait( 1 );
preset = obj << (1 << New Preset);
obj << (2 << Apply Preset( preset ));

```

#### Contour Profiler

**構文:** obj &lt;&lt; Contour Profiler( state=0|1 )

**説明:** 等高線プロファイルの表示/非表示を切り替える。等高線プロファイルは、応答変数の予測値を2因子ずつに対して描いたグラフである。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
Wait( 0 );
obj << Contour Profiler( 1 );

```

#### Indiv Confidence Interval

**構文:** obj &lt;&lt; Indiv Confidence Interval

**説明:** 個々の応答値に対する信頼限界をデータテーブルに保存する。新しい列として、これらの列はデータテーブルに保存される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Indiv Confidence Interval;

```

#### Mean Confidence Interval

**構文:** obj &lt;&lt; Mean Confidence Interval

**説明:** 平均の予測値に対する信頼限界をデータテーブルに保存する。新しい列として、この列はデータテーブルに保存される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Mean Confidence Interval;

```

#### Model Dialog

**構文:** obj &lt;&lt; Model Dialog

**説明:** 現在の分析が設定された起動ダイアログを開く。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Model Dialog;

```

#### New Preset

**構文:** obj = New Preset()

**説明:** オブジェクトに適用されているオプションとカスタマイズをプリセットとしてまとめる。このオブジェクトをApply Presetに渡すことで、同じ種類のオブジェクトに設定をコピーすることができる。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Pressure, :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << (:Pressure << Plot Actual By Predicted( 0 ));
Report( obj )["Response Pressure", "Variance Model For Pressure"] << Close( 1 );
Wait( 1 );
preset = obj << (1 << New Preset);

```

#### Plot Actual by Predicted

**構文:** obj &lt;&lt; Plot Actual by Predicted( state=0|1 )

**説明:** Y軸に実測値、X軸に予測値を表示した診断プロットの表示/非表示を切り替える。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run( Plot Actual by Predicted( 0 ) )
);
Wait( 1 );
obj << Plot Actual by Predicted( 1 );

```

#### Plot Studentized Residual by Predicted

**構文:** obj &lt;&lt; Plot Studentized Residual by Predicted( state=0|1 )

**説明:** Y軸にスチューデント化残差、X軸に予測値を表示した診断プロットの表示/非表示を切り替える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Plot Studentized Residual by Predicted( 1 );

```

#### Plot Studentized Residual by Row

**構文:** obj &lt;&lt; Plot Studentized Residual by Row( state=0|1 )

**説明:** Y軸にスチューデント化残差、X軸に行番号を表示したプロットの表示/非表示を切り替える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Plot Studentized Residual by Row( 1 );

```

#### Prediction Formula

**構文:** obj &lt;&lt; Prediction Formula

**説明:** 指定したモデルで計算した平均の予測値をデータテーブルに保存する。新しい列として、この列はデータテーブルに保存される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Prediction Formula;

```

#### Profiler

**構文:** obj &lt;&lt; Profiler( state=0|1 )

**説明:** 予測プロファイルの表示/非表示を切り替える。予測プロファイルは、1因子ずつスライスしながら予測式を図示したものである。予測プロファイルでは、最適化を行える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
Wait( 0 );
obj << Profiler( 1 );

```

#### Residuals

**構文:** obj &lt;&lt; Residuals

**説明:** 残差(応答の観測値から予測値を引いたもの)をデータテーブルに保存する。新しい列として、この列はデータテーブルに保存される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Residuals;

```

#### Std Dev Formula

**構文:** obj &lt;&lt; Std Dev Formula

**説明:** 指定したモデルで計算した標準偏差の予測値をデータテーブルに保存する。新しい列として、この列はデータテーブルに保存される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Std Dev Formula;

```

#### Std Error of Individual

**構文:** obj &lt;&lt; Std Error of Individual

**説明:** 個々の予測値の標準誤差をデータテーブルに保存する。新しい列として、この列はデータテーブルに保存される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Std Error of Individual;

```

#### Std Error of Predicted

**構文:** obj &lt;&lt; Std Error of Predicted

**説明:** 予測値の標準誤差をデータテーブルに保存する。新しい列として、この列はデータテーブルに保存される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Std Error of Predicted;

```

#### Studentized Residuals

**構文:** obj &lt;&lt; Studentized Residuals

**説明:** 残差を標準誤差で割った値をデータテーブルに保存する。新しい列として、この列はデータテーブルに保存される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Studentized Residuals;

```

#### Surface Profiler

**構文:** obj &lt;&lt; Surface Profiler( state=0|1 )

**説明:** 曲面プロットの表示/非表示を切り替える。この曲面プロットは、応答の平均と標準偏差を描いた対話的なグラフである。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
Wait( 0 );
obj << Surface Profiler( 1 );

```

#### Variance Formula

**構文:** obj &lt;&lt; Variance Formula

**説明:** 指定したモデルで計算した分散の予測値をデータテーブルに保存する。新しい列として、この列はデータテーブルに保存される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Variance Formula;

```

## Fit LogVariance

### 共有されるメッセージ

#### Action

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

#### Apply Preset

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

#### Column Switcher

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

#### Copy Script

**構文:** obj &lt;&lt; Copy Script

**説明:** この分析を再現するJSLスクリプトを生成し、クリップボードにコピーする。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Copy Script;

```

#### Data Table Window

**構文:** obj &lt;&lt; Data Table Window

**説明:** この分析に使用したデータテーブルのウィンドウを手前に表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Data Table Window;

```

#### Get By Levels

**構文:** obj &lt;&lt; Get By Levels

**説明:** By列が指定されている場合、列名をキー、データ値を値とした連想配列を戻す。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

#### Get Container

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
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Get Data Table

**構文:** obj &lt;&lt; Get Data Table

**説明:** データテーブルへの参照を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
t = obj << Get Datatable;
Show( N Rows( t ) );

```

#### Get Script

**構文:** obj &lt;&lt; Get Script

**説明:** この分析を再現するスクリプト(JSL)を生成し、それを式として戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
t = obj << Get Script;
Show( t );

```

#### Get Script With Data Table

**構文:** obj &lt;&lt; Get Script With Data Table

**説明:** この分析を再現するスクリプト(JSL)をデータテーブルへの参照も含めて生成し、それを式として戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
t = obj << Get Script With Data Table;
Show( t );

```

#### Get Timing

**構文:** obj &lt;&lt; Get Timing

**説明:** プラットフォームの起動にかかった時間を取得する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
t = obj << Get Timing;
Show( t );

```

#### Get Web Support

**構文:** obj &lt;&lt; Get Web Support

**説明:** ディスプレイオブジェクトにおけるインタラクティブHTMLサポートのレベルを数値で戻す。1は、一部または全部の要素がサポートされていることを示し、0は、サポートされないことを示す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

#### Get Where Expr

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

#### Ignore Platform Preferences

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

#### Local Data Filter

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

#### New JSL Preset

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

#### New Preset

**構文:** obj = New Preset()

**説明:** オブジェクトに適用されているオプションとカスタマイズをプリセットとしてまとめる。このオブジェクトをApply Presetに渡すことで、同じ種類のオブジェクトに設定をコピーすることができる。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

#### Paste Local Data Filter

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

#### Redo Analysis

**構文:** obj &lt;&lt; Redo Analysis

**説明:** 同じ分析をやり直し新しいウィンドウに表示する。データが変更されていると分析結果は異なる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Redo Analysis;

```

#### Relaunch Analysis

**構文:** obj &lt;&lt; Relaunch Analysis

**説明:** プラットフォームの起動ウィンドウを開き、レポートを作成した時の設定を表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Relaunch Analysis;

```

#### Remove Column Switcher

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

#### Remove Local Data Filter

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

#### Render Preset

**構文:** Render Preset( preset )

**説明:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

#### Report

**構文:** obj &lt;&lt; Report;Report( obj )

**説明:** レポートオブジェクトへの参照を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Report View

**構文:** obj &lt;&lt; Report View( "完全"|"要約" )

**説明:** レポートビューは、プラットフォームレポートの詳細を表示するかどうかを決定する。Fullはすべての詳細を表示し、Summaryはプラットフォームにより限定されたものだけを表示する。 動作をカスタマイズするため、各ディスプレイボックスは<<Set Summary Behaviorメッセージをサポートする。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Report View( "Summary" );

```

#### Save Script for All Objects

**構文:** obj &lt;&lt; Save Script for All Objects

**説明:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**構文:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**説明:** すべてのレポートオブジェクトを再現するスクリプトを現在のデータテーブルに保存する。このオプションは、ウィンドウ内にレポートが複数ある場合に便利。作成されるスクリプトの名前は、引用符で囲んで指定しない限り、1つ目のプラットフォーム名となる。

**例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	By( _bycol ),
	Run
);
obj[1] << Save Script for All Objects To Data Table;

```

**例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	By( _bycol ),
	Run
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**構文:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**説明:** この分析を再現するJSLスクリプトを生成し、データテーブルのテーブルプロパティとして保存する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**構文:** obj &lt;&lt; Save Script to Journal

**説明:** この分析を再現するJSLスクリプトを生成し、ジャーナルにそのスクリプトのボタンを追加する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Save Script to Journal;

```

#### Save Script to Report

**構文:** obj &lt;&lt; Save Script to Report

**説明:** この分析を再現するJSLスクリプトを生成し、レポートウィンドウに表示する。分析手順の記録を結果と一緒に残せる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Save Script to Report;

```

#### Save Script to Script Window

**構文:** obj &lt;&lt; Save Script to Script Window

**説明:** この分析を再現するJSLスクリプトを生成し、現在のスクリプトウィンドウに表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Save Script to Script Window;

```

#### SendToByGroup

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

#### SendToEmbeddedScriptable

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

#### SendToReport

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

#### Sync to Data Table Changes

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

#### Title

**構文:** obj &lt;&lt; Title( "new title" )

**説明:** プラットフォームのタイトルを設定する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Title( "My Platform" );

```

#### Top Report

**構文:** obj &lt;&lt; Top Report

**説明:** レポート内のルートノードへの参照を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### View Web XML

**構文:** obj &lt;&lt; View Web XML

**説明:** インタラクティブHTMLレポートの作成に使うXMLコードを戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

### 関連するコンストラクター

#### Fit LogVariance

**構文:** Fit Model( Y( columns ), Effects( columns ), Personality( "Loglinear Variance" ) )

**説明:** 連続尺度の応答変数に対して、平均と分散の両方にモデルをあてはめる。平均と分散の2つのモデルに対し、異なる効果の組み合わせを指定できる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);

```

### 項目のメッセージ

#### Contour Profiler

**構文:** obj &lt;&lt; Contour Profiler( state=0|1 )

**説明:** 等高線プロファイルの表示/非表示を切り替える。等高線プロファイルは、応答変数の予測値を2因子ずつに対して描いたグラフである。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
Wait( 0 );
obj << Contour Profiler( 1 );

```

#### Model Dialog

**構文:** obj &lt;&lt; Model Dialog

**説明:** 現在の分析が設定された起動ダイアログを開く。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Model Dialog;

```

#### Profiler

**構文:** obj &lt;&lt; Profiler( state=0|1 )

**説明:** 予測プロファイルの表示/非表示を切り替える。予測プロファイルは、1因子ずつスライスしながら予測式を図示したものである。予測プロファイルでは、最適化を行える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
Wait( 0 );
obj << Profiler( 1 );

```

#### Surface Profiler

**構文:** obj &lt;&lt; Surface Profiler( state=0|1 )

**説明:** 曲面プロットの表示/非表示を切り替える。この曲面プロットは、応答の平均と標準偏差を描いた対話的なグラフである。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
Wait( 0 );
obj << Surface Profiler( 1 );

```

## Fit Manova > Effect

### 項目のメッセージ

#### Centroid Plot

**構文:** obj &lt;&lt; (Response[i] &lt;&lt; (Effect[j] &lt;&lt; Centroid Plot( state=0|1 )))

**説明:** 重心(多変量の最小2乗平均)の表と、重心を検定空間から求められた最初の2つの正準変数に対してプロットしたものの表示/非表示を切り替える。注: 切片項はEffect[0]として指定する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run( Response Function( "Sum" ) )
);
Wait( 0 );
obj << (Response[1] << (Effect[1] << Centroid Plot( 1 )));

```

#### Contrast

**構文:** obj &lt;&lt; (Response[i] &lt;&lt; (Effect[j] &lt;&lt; Contrast( [ l1 l2 l3 ... ] )))

**説明:** 指定された対比に対するF検定を実行する。この機能を用いることで、分析者は自分の興味のある対比を検定することができる。対比はベクトル引数として指定する。注: 切片項はEffect[0]として指定する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run( Response Function( "Sum" ) )
);
Wait( 0 );
obj << (Response[1] << (Effect[3] << Contrast( [0.5 0.5 -0.5 -0.5] )));

```

#### Save Canonical Scores

**構文:** obj &lt;&lt; (Response[i] &lt;&lt; (Effect[j] &lt;&lt; Save Cannonical Scores

**説明:** 指定の効果の正準スコアをデータテーブルに保存する。注: 切片項はEffect[0]として指定する。新しい列として、この列はデータテーブルに保存される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run( Response Function( "Sum" ) )
);
Wait( 0 );
obj << (Response[1] << (Effect[1] << Save Canonical Scores));

```

#### Test Details

**構文:** obj &lt;&lt; (Response[i] &lt;&lt; (Effect[j] &lt;&lt; Test Details( state=0|1 )))

**説明:** 指定された効果の検定について、正準相関や固有値の表示/非表示を切り替える。注: 切片項はEffect[0]として指定する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run( Response Function( "Sum" ) )
);
Wait( 0 );
obj << (Response[1] << (Effect[1] << Test Details( 1 )));

```

## Fit Manova > Response

### 項目のメッセージ

#### Custom Test

**構文:** obj &lt;&lt; (Response[i] &lt;&lt; Custom Test( [ l1 l2 l3 ... ], &lt;Label( name )&gt; ))

**説明:** 指定された対比に対するF検定を実行する。この機能を用いることで、分析者は自分の興味のある対比を検定することができる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run( Response Function( "Sum" ), Response Function( "Contrast" ) )
);
Wait( 0 );
obj << (Response[2] << Custom Test( [0 1 0 -1 0], Label( "Test 1" ) ));

```

#### Effect

**構文:** obj &lt;&lt; (Response[i] &lt;&lt; (Effect[j] &lt;&lt; effect options))

**説明:** レポートウィンドウに含まれる特定の応答変数における特定の効果に対して、メッセージを送ることができる。効果に送れるメッセージについては、[スクリプトの索引]で[オブジェクト]>[Fit Model]>[Fit Manova]>[Effect]を参照のこと。注: 切片項はEffect[0]として指定する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run( Response Function( "Sum" ) )
);
obj << (Response[1] << (Effect[1] << Centroid Plot( 1 )));

```

## Fit Manova

### 共有されるメッセージ

#### Action

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

#### Apply Preset

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

#### Automatic Recalc

**構文:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**説明:** データの除外や変更があった場合に分析を自動的にやり直す。Automatic Recalcオプションがオンになっている場合で、データの除外や変更が再計算の前に確実に適用されるようにするには、Wait(0)コマンドを使用すること。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

#### Broadcast

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

#### Column Switcher

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

#### Copy ByGroup Script

**構文:** obj &lt;&lt; Copy ByGroup Script

**説明:** この分析を再現するJSLスクリプトを生成し、クリップボードにコピーする。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	By( _bycol ),
	Run
);
obj[1] << Copy ByGroup Script;

```

#### Copy Script

**構文:** obj &lt;&lt; Copy Script

**説明:** この分析を再現するJSLスクリプトを生成し、クリップボードにコピーする。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);
obj << Copy Script;

```

#### Data Table Window

**構文:** obj &lt;&lt; Data Table Window

**説明:** この分析に使用したデータテーブルのウィンドウを手前に表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);
obj << Data Table Window;

```

#### Get By Levels

**構文:** obj &lt;&lt; Get By Levels

**説明:** By列が指定されている場合、列名をキー、データ値を値とした連想配列を戻す。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

#### Get ByGroup Script

**構文:** obj &lt;&lt; Get ByGroup Script

**説明:** この分析を再現するスクリプト(JSL)を生成し、それを式として戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	By( _bycol ),
	Run
);
t = obj[1] << Get ByGroup Script;
Show( t );

```

#### Get Container

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
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Get Data Table

**構文:** obj &lt;&lt; Get Data Table

**説明:** データテーブルへの参照を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);
t = obj << Get Datatable;
Show( N Rows( t ) );

```

#### Get Group Platform

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

#### Get Script

**構文:** obj &lt;&lt; Get Script

**説明:** この分析を再現するスクリプト(JSL)を生成し、それを式として戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);
t = obj << Get Script;
Show( t );

```

#### Get Script With Data Table

**構文:** obj &lt;&lt; Get Script With Data Table

**説明:** この分析を再現するスクリプト(JSL)をデータテーブルへの参照も含めて生成し、それを式として戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);
t = obj << Get Script With Data Table;
Show( t );

```

#### Get Timing

**構文:** obj &lt;&lt; Get Timing

**説明:** プラットフォームの起動にかかった時間を取得する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);
t = obj << Get Timing;
Show( t );

```

#### Get Web Support

**構文:** obj &lt;&lt; Get Web Support

**説明:** ディスプレイオブジェクトにおけるインタラクティブHTMLサポートのレベルを数値で戻す。1は、一部または全部の要素がサポートされていることを示し、0は、サポートされないことを示す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

#### Get Where Expr

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

#### Ignore Platform Preferences

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

#### Local Data Filter

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

#### New JSL Preset

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

#### New Preset

**構文:** obj = New Preset()

**説明:** オブジェクトに適用されているオプションとカスタマイズをプリセットとしてまとめる。このオブジェクトをApply Presetに渡すことで、同じ種類のオブジェクトに設定をコピーすることができる。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

#### Paste Local Data Filter

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

#### Redo Analysis

**構文:** obj &lt;&lt; Redo Analysis

**説明:** 同じ分析をやり直し新しいウィンドウに表示する。データが変更されていると分析結果は異なる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);
obj << Redo Analysis;

```

#### Redo ByGroup Analysis

**構文:** obj &lt;&lt; Redo ByGroup Analysis

**説明:** 同じ分析をやり直し新しいウィンドウに表示する。データが変更されていると分析結果は異なる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	By( _bycol ),
	Run
);
obj[1] << Redo ByGroup Analysis;

```

#### Relaunch Analysis

**構文:** obj &lt;&lt; Relaunch Analysis

**説明:** プラットフォームの起動ウィンドウを開き、レポートを作成した時の設定を表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);
obj << Relaunch Analysis;

```

#### Relaunch ByGroup

**構文:** obj &lt;&lt; Relaunch ByGroup

**説明:** プラットフォームの起動ウィンドウを開き、レポートを作成した時の設定を表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	By( _bycol ),
	Run
);
obj[1] << Relaunch ByGroup;

```

#### Remove Column Switcher

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

#### Remove Local Data Filter

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

#### Render Preset

**構文:** Render Preset( preset )

**説明:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

#### Report

**構文:** obj &lt;&lt; Report;Report( obj )

**説明:** レポートオブジェクトへの参照を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Report View

**構文:** obj &lt;&lt; Report View( "完全"|"要約" )

**説明:** レポートビューは、プラットフォームレポートの詳細を表示するかどうかを決定する。Fullはすべての詳細を表示し、Summaryはプラットフォームにより限定されたものだけを表示する。 動作をカスタマイズするため、各ディスプレイボックスは<<Set Summary Behaviorメッセージをサポートする。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);
obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**構文:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**説明:** 分析を再現するためのJSLスクリプトを作成し、データテーブルにテーブルプロパティとして保存する。スクリプトの名前を指定できる。Append Suffixオプションは、スクリプト名に数字の接尾辞を追加する。これにより、同名のスクリプトが存在していても区別できる。Promptオプションは、ユーザにスクリプト名の指定を促す。Replaceオプションは、同名の既存のスクリプトを置き換える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**構文:** obj &lt;&lt; Save ByGroup Script to Journal

**説明:** この分析を再現するJSLスクリプトを生成し、ジャーナルにそのスクリプトのボタンを追加する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**構文:** obj &lt;&lt; Save ByGroup Script to Script Window

**説明:** この分析を再現するJSLスクリプトを生成し、現在のスクリプトウィンドウに表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**構文:** obj &lt;&lt; Save Script for All Objects

**説明:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);
obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**構文:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**説明:** すべてのレポートオブジェクトを再現するスクリプトを現在のデータテーブルに保存する。このオプションは、ウィンドウ内にレポートが複数ある場合に便利。作成されるスクリプトの名前は、引用符で囲んで指定しない限り、1つ目のプラットフォーム名となる。

**例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	By( _bycol ),
	Run
);
obj[1] << Save Script for All Objects To Data Table;

```

**例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	By( _bycol ),
	Run
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**構文:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**説明:** この分析を再現するJSLスクリプトを生成し、データテーブルのテーブルプロパティとして保存する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**構文:** obj &lt;&lt; Save Script to Journal

**説明:** この分析を再現するJSLスクリプトを生成し、ジャーナルにそのスクリプトのボタンを追加する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);
obj << Save Script to Journal;

```

#### Save Script to Report

**構文:** obj &lt;&lt; Save Script to Report

**説明:** この分析を再現するJSLスクリプトを生成し、レポートウィンドウに表示する。分析手順の記録を結果と一緒に残せる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);
obj << Save Script to Report;

```

#### Save Script to Script Window

**構文:** obj &lt;&lt; Save Script to Script Window

**説明:** この分析を再現するJSLスクリプトを生成し、現在のスクリプトウィンドウに表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);
obj << Save Script to Script Window;

```

#### SendToByGroup

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

#### SendToEmbeddedScriptable

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

#### SendToReport

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

#### Sync to Data Table Changes

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

#### Title

**構文:** obj &lt;&lt; Title( "new title" )

**説明:** プラットフォームのタイトルを設定する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);
obj << Title( "My Platform" );

```

#### Top Report

**構文:** obj &lt;&lt; Top Report

**説明:** レポート内のルートノードへの参照を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Transform Column

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

#### View Web XML

**構文:** obj &lt;&lt; View Web XML

**説明:** インタラクティブHTMLレポートの作成に使うXMLコードを戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

#### Window View

**構文:** obj = Fit Manova(...Window View( "Visible"|"Invisible"|"Private" )...)

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

### 関連するコンストラクター

#### Fit Manova

**構文:** Fit Model( Y( columns ), Effects( columns ), Personality( "Manova" ) )

**説明:** 連続尺度の応答変数が複数あるモデルをあてはめる。多変量分散分析(MANOVA)、反復測定分析、判別分析、正準相関分析を行える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);

```

### 項目のメッセージ

#### Model Dialog

**構文:** obj &lt;&lt; Model Dialog

**説明:** 現在の分析が設定された起動ダイアログを開く。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);
obj << Model Dialog;

```

#### Response Function

**構文:** obj &lt;&lt; Response Function( matrix type, &lt;Univariate Tests Also&gt; )

**説明:** 応答関数の行列を指定する。この行列は、結果のレポートにて「M行列」と呼ばれているものであり、各行が応答変数の変換を表している。オプションとしてUnivariate Tests Also引数を指定すると、多変量検定のほかに、調整済み、および、未調整の一変量検定も実行される。

**一変量検定も実行する例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);
Wait( 0 );
obj << Response Function( "Contrast", Univariate Tests Also );

```

**基本的な例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);
obj << Response Function( "Sum" );

```

#### Save Discrim

**構文:** obj &lt;&lt; Save Discrim

**説明:** 効果の水準ごとのMahalanobis距離と所属確率、および、所属確率が最大となる水準をデータテーブルの新しい列に保存する。このオプションは、モデルにカテゴリカル変数が1つだけある場合にのみ使用可能。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Fit Model(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Effects( :Species ),
	Personality( "Manova" ),
	Run
);
obj << Save Discrim;

```

#### Save Predicted

**構文:** obj &lt;&lt; Save Predicted

**説明:** 各応答変数の予測値をデータテーブルに保存する。新しい列として、これらの列はデータテーブルに保存される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);
obj << Save Predicted;

```

#### Save Residuals

**構文:** obj &lt;&lt; Save Residuals

**説明:** 各応答変数の残差をデータテーブルに保存する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);
obj << Save Residuals;

```

## Fit Mixed

### 共有されるメッセージ

#### Action

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

#### Apply Preset

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

#### Broadcast

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

#### Column Switcher

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

#### Copy ByGroup Script

**構文:** obj &lt;&lt; Copy ByGroup Script

**説明:** この分析を再現するJSLスクリプトを生成し、クリップボードにコピーする。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run(),
	By( _bycol )
);
obj[1] << Copy ByGroup Script;

```

#### Copy Script

**構文:** obj &lt;&lt; Copy Script

**説明:** この分析を再現するJSLスクリプトを生成し、クリップボードにコピーする。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run()
);
obj << Copy Script;

```

#### Data Table Window

**構文:** obj &lt;&lt; Data Table Window

**説明:** この分析に使用したデータテーブルのウィンドウを手前に表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run()
);
obj << Data Table Window;

```

#### Get By Levels

**構文:** obj &lt;&lt; Get By Levels

**説明:** By列が指定されている場合、列名をキー、データ値を値とした連想配列を戻す。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

#### Get ByGroup Script

**構文:** obj &lt;&lt; Get ByGroup Script

**説明:** この分析を再現するスクリプト(JSL)を生成し、それを式として戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run(),
	By( _bycol )
);
t = obj[1] << Get ByGroup Script;
Show( t );

```

#### Get Container

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
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run()
);
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Get Data Table

**構文:** obj &lt;&lt; Get Data Table

**説明:** データテーブルへの参照を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run()
);
t = obj << Get Datatable;
Show( N Rows( t ) );

```

#### Get Group Platform

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

#### Get Script

**構文:** obj &lt;&lt; Get Script

**説明:** この分析を再現するスクリプト(JSL)を生成し、それを式として戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run()
);
t = obj << Get Script;
Show( t );

```

#### Get Script With Data Table

**構文:** obj &lt;&lt; Get Script With Data Table

**説明:** この分析を再現するスクリプト(JSL)をデータテーブルへの参照も含めて生成し、それを式として戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run()
);
t = obj << Get Script With Data Table;
Show( t );

```

#### Get Timing

**構文:** obj &lt;&lt; Get Timing

**説明:** プラットフォームの起動にかかった時間を取得する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run()
);
t = obj << Get Timing;
Show( t );

```

#### Get Web Support

**構文:** obj &lt;&lt; Get Web Support

**説明:** ディスプレイオブジェクトにおけるインタラクティブHTMLサポートのレベルを数値で戻す。1は、一部または全部の要素がサポートされていることを示し、0は、サポートされないことを示す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

#### Get Where Expr

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

#### Ignore Platform Preferences

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

#### Local Data Filter

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

#### New JSL Preset

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

#### New Preset

**構文:** obj = New Preset()

**説明:** オブジェクトに適用されているオプションとカスタマイズをプリセットとしてまとめる。このオブジェクトをApply Presetに渡すことで、同じ種類のオブジェクトに設定をコピーすることができる。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

#### Paste Local Data Filter

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

#### Redo Analysis

**構文:** obj &lt;&lt; Redo Analysis

**説明:** 同じ分析をやり直し新しいウィンドウに表示する。データが変更されていると分析結果は異なる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run()
);
obj << Redo Analysis;

```

#### Redo ByGroup Analysis

**構文:** obj &lt;&lt; Redo ByGroup Analysis

**説明:** 同じ分析をやり直し新しいウィンドウに表示する。データが変更されていると分析結果は異なる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run(),
	By( _bycol )
);
obj[1] << Redo ByGroup Analysis;

```

#### Relaunch Analysis

**構文:** obj &lt;&lt; Relaunch Analysis

**説明:** プラットフォームの起動ウィンドウを開き、レポートを作成した時の設定を表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run()
);
obj << Relaunch Analysis;

```

#### Relaunch ByGroup

**構文:** obj &lt;&lt; Relaunch ByGroup

**説明:** プラットフォームの起動ウィンドウを開き、レポートを作成した時の設定を表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run(),
	By( _bycol )
);
obj[1] << Relaunch ByGroup;

```

#### Remove Column Switcher

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

#### Remove Local Data Filter

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

#### Render Preset

**構文:** Render Preset( preset )

**説明:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

#### Report

**構文:** obj &lt;&lt; Report;Report( obj )

**説明:** レポートオブジェクトへの参照を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run()
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Report View

**構文:** obj &lt;&lt; Report View( "完全"|"要約" )

**説明:** レポートビューは、プラットフォームレポートの詳細を表示するかどうかを決定する。Fullはすべての詳細を表示し、Summaryはプラットフォームにより限定されたものだけを表示する。 動作をカスタマイズするため、各ディスプレイボックスは<<Set Summary Behaviorメッセージをサポートする。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run()
);
obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**構文:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**説明:** 分析を再現するためのJSLスクリプトを作成し、データテーブルにテーブルプロパティとして保存する。スクリプトの名前を指定できる。Append Suffixオプションは、スクリプト名に数字の接尾辞を追加する。これにより、同名のスクリプトが存在していても区別できる。Promptオプションは、ユーザにスクリプト名の指定を促す。Replaceオプションは、同名の既存のスクリプトを置き換える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run(),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**構文:** obj &lt;&lt; Save ByGroup Script to Journal

**説明:** この分析を再現するJSLスクリプトを生成し、ジャーナルにそのスクリプトのボタンを追加する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run(),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**構文:** obj &lt;&lt; Save ByGroup Script to Script Window

**説明:** この分析を再現するJSLスクリプトを生成し、現在のスクリプトウィンドウに表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run(),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**構文:** obj &lt;&lt; Save Script for All Objects

**説明:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run()
);
obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**構文:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**説明:** すべてのレポートオブジェクトを再現するスクリプトを現在のデータテーブルに保存する。このオプションは、ウィンドウ内にレポートが複数ある場合に便利。作成されるスクリプトの名前は、引用符で囲んで指定しない限り、1つ目のプラットフォーム名となる。

**例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run(),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table;

```

**例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run(),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**構文:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**説明:** この分析を再現するJSLスクリプトを生成し、データテーブルのテーブルプロパティとして保存する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run()
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**構文:** obj &lt;&lt; Save Script to Journal

**説明:** この分析を再現するJSLスクリプトを生成し、ジャーナルにそのスクリプトのボタンを追加する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run()
);
obj << Save Script to Journal;

```

#### Save Script to Report

**構文:** obj &lt;&lt; Save Script to Report

**説明:** この分析を再現するJSLスクリプトを生成し、レポートウィンドウに表示する。分析手順の記録を結果と一緒に残せる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run()
);
obj << Save Script to Report;

```

#### Save Script to Script Window

**構文:** obj &lt;&lt; Save Script to Script Window

**説明:** この分析を再現するJSLスクリプトを生成し、現在のスクリプトウィンドウに表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run()
);
obj << Save Script to Script Window;

```

#### SendToByGroup

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

#### SendToEmbeddedScriptable

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

#### SendToReport

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

#### Sync to Data Table Changes

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

#### Title

**構文:** obj &lt;&lt; Title( "new title" )

**説明:** プラットフォームのタイトルを設定する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run()
);
obj << Title( "My Platform" );

```

#### Top Report

**構文:** obj &lt;&lt; Top Report

**説明:** レポート内のルートノードへの参照を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run()
);
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Transform Column

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

#### View Web XML

**構文:** obj &lt;&lt; View Web XML

**説明:** インタラクティブHTMLレポートの作成に使うXMLコードを戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

#### Window View

**構文:** obj = Fit Mixed(...Window View( "Visible"|"Invisible"|"Private" )...)

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

### 関連するコンストラクター

#### Fit Mixed

**構文:** Fit Model( Y( columns ), Effects( columns ), Personality( "Mixed Model" ) )

**説明:** 線形混合モデルをREML推定する。複雑な共分散構造を指定できる。線形混合モデルには、ランダム係数モデル、反復測定モデル、分割実験モデル、空間モデル、応答に相関があるモデルなどがある。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run()
);

```

### 項目のメッセージ

#### Actual by Conditional Predicted Plot

**構文:** obj &lt;&lt; Actual by Conditional Predicted Plot( state=0|1 )

**説明:** 条件付き予測値と実測値のプロットの表示/非表示を切り替える。このプロットの予測値は、変量効果を考慮している。 このオプションは、モデルに少なくとも1つの変量効果がある場合のみ利用可能。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run( Actual by Conditional Predicted Plot( 0 ) )
);
Wait( 1 );
obj << Actual by Conditional Predicted Plot( 1 );

```

#### Actual by Predicted Plot

**構文:** obj &lt;&lt; Actual by Predicted Plot( state=0|1 )

**説明:** 周辺予測値と実測値のプロットの表示/非表示を切り替える。このプロットの予測値は、変量効果を考慮していない。 このオプションは、モデルに少なくとも1つの固定効果がある場合のみ利用可能。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run( Actual by Predicted Plot( 0 ) )
);
Wait( 1 );
obj << Actual by Predicted Plot( 1 );

```

#### Between-Within Degrees of Freedom

**構文:** obj &lt;&lt; Between-Within Degrees of Freedom( state=0|1)

**説明:** Replaces the standard errors with unadjusted estimates and degrees of freedom to between-within based throughout the report. To use between-within degrees of freedom in a multiple comparisons report, you must select this option prior to adding a multiple comparisons report.

**JMP追加されたバージョン:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cholesterol Stacked.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Treatment, :Month, :Month * :Treatment ),
	NoBounds( 1 ),
	Personality( "Mixed Model" ),
	Subject( :Patient ),
	Repeated Effects( :Time ),
	Repeated Structure( "Unstructured" ),
	Run
);
Wait( 1 );
obj << "Between-Within Degrees of Freedom"n( 1 );

```

#### Compare Slopes

**構文:** obj &lt;&lt; Compare Slopes( Effect( effect ), &lt;options&gt; )

**説明:** 共分散分析モデル(ANCOVAモデル)において交互作用の各水準の傾きを比較するレポートの表示/非表示を切り替える。このオプションは、固定効果として名義尺度の項が1つと連続尺度の項が1つ、そしてこれら両項の交互作用効果がある場合にのみ利用可能。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cereal.jmp" );
obj = dt << Fit Model(
	Y( :Calories ),
	Effects( :Sugars, :Fiber Gr, :Sugars * :Fiber Gr ),
	Random Effects( :Manufacturer ),
	NoBounds( 1 ),
	Personality( "Mixed Model" ),
	Run
);
Wait( 1 );
obj << Compare Slopes(
	Effect( :Sugars * :Fiber Gr ),
	Student's t( 1, All Pairwise Comparisons Scatterplot( 0 ) )
);

```

#### Conditional Contour Profiler

**構文:** obj &lt;&lt; Conditional Contour Profiler( state=0|1 )

**説明:** 一度に2つの因子をグラフにした条件付き予測値の等高線プロファイルの表示/非表示を切り替える。このオプションは、モデルに連続尺度の効果が少なくとも2つと、変量効果が少なくとも1つ含まれている場合にのみ利用可能。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Design Experiment/Vinyl Data.jmp" );
obj = dt << Fit Model(
	Y( :thickness ),
	Effects(
		:m1 & RS & Mixture, :m2 & RS & Mixture, :m3 & RS & Mixture, :m1 * :m2, :m1 * :m3,
		:m1 * :extrusion rate, :m1 * :temperature, :m2 * :m3, :m2 * :extrusion rate,
		:m2 * :temperature, :m3 * :extrusion rate, :m3 * :temperature,
		:extrusion rate * :temperature
	),
	Random Effects( :Whole Plots ),
	No Intercept,
	Personality( "Mixed Model" ),
	Run
);
Wait( 1 );
obj << Conditional Contour Profiler( 1 );

```

#### Conditional Mean CI

**構文:** obj &lt;&lt; Conditional Mean CI

**説明:** 条件付き予測値の上側信頼限界および下側信頼限界をデータテーブルに保存する。信頼区間には、変量効果を含むモデルの変量効果の推定値が含まれる。2つの新しい列として、これらの列はデータテーブルに保存される。 このオプションは、モデルに少なくとも1つの変量効果がある場合のみ利用可能。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects( :Variety, :Variety * :Moisture ),
	Personality( "Mixed Model" ),
	Run
);
obj << Conditional Mean CI;

```

#### Conditional Mixture Profiler

**構文:** obj &lt;&lt; Conditional Mixture Profiler( state=0|1 )

**説明:** 条件付き予測値を三角図上に等高線として表した配合プロファイルの表示/非表示を切り替える。このオプションは、モデルに少なくとも1つの変量効果があり、3つ以上の因子に[配合効果]の属性が適用されている場合、または3つ以上の因子列に[配合]プロパティが適用されている場合にのみ利用可能。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Design Experiment/Vinyl Data.jmp" );
obj = dt << Fit Model(
	Y( :thickness ),
	Effects(
		:m1 & RS & Mixture, :m2 & RS & Mixture, :m3 & RS & Mixture, :m1 * :m2, :m1 * :m3,
		:m1 * :extrusion rate, :m1 * :temperature, :m2 * :m3, :m2 * :extrusion rate,
		:m2 * :temperature, :m3 * :extrusion rate, :m3 * :temperature,
		:extrusion rate * :temperature
	),
	Random Effects( :Whole Plots ),
	No Intercept,
	Personality( "Mixed Model" ),
	Run
);
Wait( 1 );
obj << Conditional Mixture Profiler( 1 );

```

#### Conditional Prediction Formula

**構文:** obj &lt;&lt; Conditional Prediction Formula

**説明:** 条件付き平均の予測式を保存する。新しい計算式の列として、この列はデータテーブルに保存される。 このオプションは、モデルに少なくとも1つの変量効果がある場合のみ利用可能。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run
);
obj << Conditional Prediction Formula;

```

#### Conditional Predictions

**構文:** obj &lt;&lt; Conditional Predictions

**説明:** 条件付き平均の予測値をデータテーブルに保存する。新しい列として、この列はデータテーブルに保存される。 このオプションは、モデルに少なくとも1つの変量効果がある場合のみ利用可能。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run
);
obj << Conditional Predictions;

```

#### Conditional Profiler

**構文:** obj &lt;&lt; Conditional Profiler( state=0|1 )

**説明:** 予測プロファイルの表示/非表示を切り替える。予測プロファイルは、1因子ずつスライスしながら条件付き予測式を図示したものである。予測プロファイルでは、最適化を行える。 このオプションは、モデルに少なくとも1つの変量効果がある場合のみ利用可能。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Split Plot.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Tenderizer, :Roasting Time, :Tenderizer * :Roasting Time ),
	Random Effects( :Carcass, :Carcass * :Tenderizer ),
	Personality( "Mixed Model" ),
	Run
);
Wait( 1 );
obj << Conditional Profiler( 1 );

```

#### Conditional Residual Plots

**構文:** obj &lt;&lt; Conditional Residual Plots( state=0|1 )

**説明:** モデルの適合度を評価する残差プロットの表示/非表示を切り替える。このプロットの残差は、変量効果を考慮いている。 このオプションは、モデルに少なくとも1つの変量効果がある場合のみ利用可能。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run
);
Wait( 1 );
obj << Conditional Residual Plots( 1 );

```

#### Conditional Residuals

**構文:** obj &lt;&lt; Conditional Residuals

**説明:** 条件付き残差の計算式を保存する。条件付き残差は、応答の観測値から条件付き予測値を引いたもの。新しい列として、この列はデータテーブルに保存される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run
);
obj << Conditional Residuals;

```

#### Conditional Surface Profiler

**構文:** obj &lt;&lt; Conditional Surface Profiler( state=0|1 )

**説明:** 条件付き予測値を3次元空間上に表した曲面プロットの表示/非表示を切り替える。このオプションは、モデルに少なくとも2つの効果と少なくとも1つの変量効果がある場合のみ利用可能。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Split Plot.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Tenderizer, :Roasting Time, :Tenderizer * :Roasting Time ),
	Random Effects( :Carcass, :Carcass * :Tenderizer ),
	Personality( "Mixed Model" ),
	Run
);
Wait( 1 );
obj << Conditional Surface Profiler( 1 );

```

#### Containment Degrees of Freedom

**構文:** obj &lt;&lt; Containment Degrees of Freedom( state=0|1 )

**説明:** Replaces the standard errors with unadjusted estimates and degrees of freedom to containment-based throughout the report. To use containment degrees of freedom in a multiple comparisons report, you must select this option prior to adding a multiple comparisons report.

**JMP追加されたバージョン:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run( Fixed Effects Tests( 0 ) )
);
Wait( 1 );
obj << Containment Degrees of Freedom( 1 );

```

#### Contour Profiler

**構文:** obj &lt;&lt; Contour Profiler( state=0|1 )

**説明:** 一度に2つの因子をグラフにした周辺予測値の等高線プロファイルの表示/非表示を切り替える。このオプションは、モデルに連続尺度の固定効果が少なくとも2つ含まれている場合にのみ利用可能。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Design Experiment/Vinyl Data.jmp" );
obj = dt << Fit Model(
	Y( :thickness ),
	Effects(
		:m1 & RS & Mixture, :m2 & RS & Mixture, :m3 & RS & Mixture, :m1 * :m2, :m1 * :m3,
		:m1 * :extrusion rate, :m1 * :temperature, :m2 * :m3, :m2 * :extrusion rate,
		:m2 * :temperature, :m3 * :extrusion rate, :m3 * :temperature,
		:extrusion rate * :temperature
	),
	Random Effects( :Whole Plots ),
	No Intercept,
	Personality( "Mixed Model" ),
	Run
);
Wait( 1 );
obj << Contour Profiler( 1 );

```

#### Correlation of Fixed Effects

**構文:** obj &lt;&lt; Correlation of Fixed Effects( state=0|1 )

**説明:** 固定効果の相関行列の表示/非表示を切り替える。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cholesterol Stacked.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Treatment, :Month, :Month * :Treatment ),
	Random Effects( :Patient[:Treatment] ),
	NoBounds( 1 ),
	Personality( "Mixed Model" ),
	Subject( :Patient ),
	Repeated Effects( :Days ),
	Repeated Structure( "AR(1)" ),
	Run
);
Wait( 1 );
obj << Correlation of Fixed Effects( 1 );

```

#### Covariance of All Parameters

**構文:** obj &lt;&lt; Covariance of All Parameters( state=0|1 )

**説明:** 固定効果および変量効果の両方の共分散行列の表示/非表示を切り替える。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cholesterol Stacked.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Treatment, :Month, :Month * :Treatment ),
	Random Effects( :Patient[:Treatment] ),
	NoBounds( 1 ),
	Personality( "Mixed Model" ),
	Subject( :Patient ),
	Repeated Effects( :Days ),
	Repeated Structure( "AR(1)" ),
	Run
);
Wait( 1 );
obj << Covariance of All Parameters( 1 );

```

#### Covariance of Covariance Parameters

**構文:** obj &lt;&lt; Covariance of Covariance Parameters( state=0|1 )

**説明:** 変量効果の共分散行列の表示/非表示を切り替える。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cholesterol Stacked.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Treatment, :Month, :Month * :Treatment ),
	Random Effects( :Patient[:Treatment] ),
	NoBounds( 1 ),
	Personality( "Mixed Model" ),
	Subject( :Patient ),
	Repeated Effects( :Days ),
	Repeated Structure( "AR(1)" ),
	Run
);
Wait( 1 );
obj << Covariance of Covariance Parameters( 1 );

```

#### Covariance of Fixed Effects

**構文:** obj &lt;&lt; Covariance of Fixed Effects( state=0|1 )

**説明:** 固定効果の共分散行列の表示/非表示を切り替える。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cholesterol Stacked.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Treatment, :Month, :Month * :Treatment ),
	Random Effects( :Patient[:Treatment] ),
	NoBounds( 1 ),
	Personality( "Mixed Model" ),
	Subject( :Patient ),
	Repeated Effects( :Days ),
	Repeated Structure( "AR(1)" ),
	Run
);
Wait( 1 );
obj << Covariance of Fixed Effects( 1 );

```

#### Dispose Reports

**構文:** obj = Fit Model(...Dispose Reports( state=0|1 )...)

**説明:** 各モデルのレポートを非表示にし、あてはめの処理後、それらをメモリからも削除する。何千もの応答変数がある場合、このオプションにより計算時間を短縮し、メモリも節約できる。このオプションを、Results in Data Tables(データテーブルに結果を出力する)オプションと一緒に使用すれば、あてはめたモデルの結果をデータテーブルに出力できる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
obj = dt << Fit Model(
	Y( :Trait1, :Trait2, :Trait3 ),
	Effects( :Sex ),
	Random Effects( Grouped( Column Group( "Markers" ) ) ),
	Personality( "Mixed Model" ),
	Results in Data Tables( 1 ),
	Dispose Reports( 1 ),
	Run
);

```

#### Empirical Standard Errors

**構文:** obj &lt;&lt; Empirical Standard Errors( state=0|1 )

**説明:** レポート全体において、サンドイッチ分散(ロバスト分散、経験的分散)に基づいて標準誤差を計算する。ただし、「多重比較」レポートでサンドイッチ推定値を求めるには、「多重比較」レポートを追加する前にこのオプションを選択しなければならない。

**JMP追加されたバージョン:** 19

**例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :season, :species * :season ),
	Random Effects( :subject[:species] ),
	Personality( "Mixed Model" ),
	Run
);
Wait( 1 );
obj << Empirical Standard Errors( 1 );

```

**例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :season, :species * :season ),
	Random Effects( :subject[:species] ),
	Personality( "Mixed Model" ),
	Run( Empirical Standard Errors( 1 ) )
);
Wait( 1 );
obj << Multiple Comparisons(
	Effect( :species ),
	Comparisons with Control( 1, Control Level( "species:COYOTE" ) )
);

```

#### Fit Statistics

**構文:** obj &lt;&lt; Fit Statistics( state=0|1 )

**説明:** モデルの適合度統計量を表示したレポートの表示/非表示を切り替える。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run( Fit Statistics( 0 ) )
);
Wait( 1 );
obj << Fit Statistics( 1 );

```

#### Fixed Effects Parameter Estimates

**構文:** obj &lt;&lt; Fixed Effects Parameter Estimates( state=0|1 )

**説明:** 「固定効果のパラメータ推定値」表の表示/非表示を切り替える。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run( Fixed Effects Parameter Estimates( 0 ) )
);
Wait( 1 );
obj << Fixed Effects Parameter Estimates( 1 );

```

#### Fixed Effects Tests

**構文:** obj &lt;&lt; Fixed Effects Tests( state=0|1 )

**説明:** 「固定効果の検定」表の表示/非表示を切り替える。 このオプションは、モデルに少なくとも1つの固定効果がある場合のみ利用可能。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run( Fixed Effects Tests( 0 ) )
);
Wait( 1 );
obj << Fixed Effects Tests( 1 );

```

#### Homogeneity of Variance Test

**構文:** obj &lt;&lt; Homogeneity of Variance Test( state=0|1 )

**説明:** 指定されたグループ変数について、等分散性の検定を実行する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Split Plot.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Tenderizer, :Roasting Time, :Tenderizer * :Roasting Time ),
	Random Effects( :Carcass, :Carcass * :Tenderizer ),
	Personality( "Mixed Model" ),
	Repeated Effects( :Tenderizer ),
	Repeated Structure( "Unequal Variances" ),
	Run
);
Wait( 1 );
obj << Homogeneity of Variance Test( 1 );

```

#### Indiv Confidence Interval

**構文:** obj &lt;&lt; Indiv Confidence Interval

**説明:** 個々の応答値に対する信頼限界をデータテーブルに保存する。新しい列として、これら2列はデータテーブルに保存される。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects( :Variety, :Variety * :Moisture ),
	Personality( "Mixed Model" ),
	Run
);
obj << Indiv Confidence Interval;

```

#### Inverse Prediction

**構文:** obj &lt;&lt; Inverse Prediction( Response( p1, p2, ... ), Term Value( effect1( value ), effect2( value ), ... ) )

**説明:** 指定されたYと因子の値に基づいて、Xの予測値および信頼区間を求める。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run
);
Wait( 1 );
obj << Inverse Prediction( Response( 75 ), Term Value( Moisture( . ), Variety( All ) ) );

```

#### Linear Combination of Variance Components

**構文:** obj &lt;&lt; Linear Combination of Variance Components( [l1, l2, l3, ... ], &lt;Label( text )&gt; )

**説明:** 分散成分の線形結合に対して信頼区間を計算するレポートを表示する。このオプションは、モデルの構造にG行列がある場合にのみ利用可能。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/3 Factors Nested.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects,
	Random Effects( :Operator, :Instrument[:Operator], :Part[:Operator, :Instrument] ),
	NoBounds( 0 ),
	Personality( "Mixed Model" ),
	Run(
		Repeated Effects Covariance Parameter Estimates( 0 ),
		Linear Combination of Variance Components( [1 1 0 1], Label( " " ) )
	)
);

```

#### Mean Confidence Interval

**構文:** obj &lt;&lt; Mean Confidence Interval

**説明:** 応答変数の平均に対する両側信頼限界の下限・上限を保存する。2つの新しい列として、これらの列はデータテーブルに保存される。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects( :Variety, :Variety * :Moisture ),
	Personality( "Mixed Model" ),
	Run
);
obj << Mean Confidence Interval;

```

#### Mixture Profiler

**構文:** obj &lt;&lt; Mixture Profiler( state=0|1 )

**説明:** 周辺予測値を三角図上に等高線として表した配合プロファイルの表示/非表示を切り替える。このオプションは、モデル内の3つ以上の因子に[配合効果]の属性が適用されている場合、または3つ以上の因子列に[配合]プロパティが適用されている場合のみ利用可能。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Design Experiment/Vinyl Data.jmp" );
obj = dt << Fit Model(
	Y( :thickness ),
	Effects(
		:m1 & RS & Mixture, :m2 & RS & Mixture, :m3 & RS & Mixture, :m1 * :m2, :m1 * :m3,
		:m1 * :extrusion rate, :m1 * :temperature, :m2 * :m3, :m2 * :extrusion rate,
		:m2 * :temperature, :m3 * :extrusion rate, :m3 * :temperature,
		:extrusion rate * :temperature
	),
	Random Effects( :Whole Plots ),
	No Intercept,
	Personality( "Mixed Model" ),
	Run
);
Wait( 1 );
obj << Mixture Profiler( 1 );

```

#### Model Dialog

**構文:** obj &lt;&lt; Model Dialog

**説明:** 現在の分析が設定された起動ダイアログを開く。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :season, :species * :season ),
	Random Effects( :subject[:species] ),
	Personality( "Mixed Model" ),
	Run
);
obj << Model Dialog;

```

#### Multiple Comparisons

**構文:** obj &lt;&lt; Multiple Comparisons( Effect( effect ), &lt;options&gt; )

**説明:** 最小2乗平均やユーザ定義の平均を、多重比較する。比較の方法として、全体平均との比較、コントロール群との比較、または、ペア比較を選択できる。 このオプションは、モデルに少なくとも1つの固定効果がある場合のみ利用可能。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cholesterol Stacked.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects(
		:Treatment, :Month, :Treatment * :Month, :"AM/PM"n, :Treatment * :"AM/PM"n,
		:Month * :"AM/PM"n, :Treatment * :Month * :"AM/PM"n
	),
	Random Effects( :Patient[:Treatment] ),
	Personality( "Mixed Model" ),
	Run
);
Wait( 1 );
obj << Multiple Comparisons(
	Effect( :Treatment ),
	Comparisons with Control( 1, Control Level( "Treatment:Control" ) )
);

```

#### Prediction Formula

**構文:** obj &lt;&lt; Prediction Formula

**説明:** 周辺平均の予測式の列をデータテーブルに保存する。新しい計算式の列として、この列はデータテーブルに保存される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run
);
obj << Prediction Formula;

```

#### Prediction and Interval Formulas

**構文:** obj &lt;&lt; Prediction and Interval Formulas

**説明:** データテーブルに新しい列を作成し、予測値と信頼限界の計算式を保存する。このオプションで作成される信頼限界の列には、予測プロファイルで使用されるプロパティも含まれる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run
);
obj << Prediction and Interval Formulas;
Wait( 1 );
Profiler( Y( :Pred Formula Yield 2 ) );

```

#### Predictions

**構文:** obj &lt;&lt; Predictions

**説明:** 周辺平均の予測値をデータテーブルに保存する。新しい列として、この列はデータテーブルに保存される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run
);
obj << Predictions;

```

#### Profiler

**構文:** obj &lt;&lt; Profiler( state=0|1 )

**説明:** 予測プロファイルの表示/非表示を切り替える。予測プロファイルは、1因子ずつスライスしながら周辺予測式を図示したものである。予測プロファイルでは、最適化を行える。 このオプションは、モデルに少なくとも1つの固定効果がある場合のみ利用可能。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Split Plot.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Tenderizer, :Roasting Time, :Tenderizer * :Roasting Time ),
	Random Effects( :Carcass, :Carcass * :Tenderizer ),
	Personality( "Mixed Model" ),
	Run
);
Wait( 1 );
obj << Profiler( 1 );

```

#### Random Coefficients

**構文:** obj &lt;&lt; Random Coefficients( state=0|1 )

**説明:** ランダム係数の推定値をまとめたレポートの表示/非表示を切り替える。 このオプションは、モデルに少なくとも1つの変量効果がある場合のみ利用可能。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run( Random Coefficients( 0 ) )
);
Wait( 1 );
obj << Random Coefficients( 1 );

```

#### Random Effects Covariance Parameter Estimates

**構文:** obj &lt;&lt; Random Effects Covariance Parameter Estimates( state=0|1 )

**説明:** 「変量効果の共分散パラメータ推定値」表の表示/非表示を切り替える。 このオプションは、モデルに少なくとも1つの変量効果がある場合のみ利用可能。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run( Random Effects Covariance Parameter Estimates( 0 ) )
);
Wait( 1 );
obj << Random Effects Covariance Parameter Estimates( 1 );

```

#### Random Effects Predictions

**構文:** obj &lt;&lt; Random Effects Predictions( state=0|1 )

**説明:** 「変量効果の予測」表の表示/非表示を切り替える。 このオプションは、モデルに少なくとも1つの変量効果がある場合のみ利用可能。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run
);
Wait( 1 );
obj << Random Effects Predictions( 1 );

```

#### Repeated Effects Covariance Parameter Estimates

**構文:** obj &lt;&lt; Repeated Effects Covariance Parameter Estimates( state=0|1 )

**説明:** 「反復構造の共分散パラメータ推定値」表の表示/非表示を切り替える。 このオプションは、モデルに少なくとも1つの反復構造がある場合のみ利用可能。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cholesterol Stacked.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects(
		:Treatment, :Month, :Treatment * :Month, :"AM/PM"n, :Treatment * :"AM/PM"n,
		:Month * :"AM/PM"n, :Treatment * :Month * :"AM/PM"n
	),
	Subject( :Patient ),
	Repeated Effects( :Time ),
	Repeated Structure( "Unstructured" ),
	Personality( "Mixed Model" ),
	Run( Repeated Effects Covariance Parameter Estimates( 0 ) )
);
Wait( 1 );
obj << Repeated Effects Covariance Parameter Estimates( 1 );

```

#### Repeated Measures Covariance Diagnostics

**構文:** obj &lt;&lt; Repeated Measures Covariance Diagnostics( state=0|1 )

**説明:** 反復測定分析における共分散構造を特定するための診断に関するレポートの表示/非表示を切り替える。このオプションは、無構造の反復共分散構造が指定されているモデルでのみ利用可能。

**JMP追加されたバージョン:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cholesterol Stacked.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Treatment, :Month, :Month * :Treatment ),
	NoBounds( 1 ),
	Personality( "Mixed Model" ),
	Subject( :Patient ),
	Repeated Effects( :Time ),
	Repeated Structure( "Unstructured" ),
	Run
);
Wait( 1 );
obj << Repeated Measures Covariance Diagnostics( 1 );

```

#### Residual Plots

**構文:** obj &lt;&lt; Residual Plots( state=0|1 )

**説明:** モデルの適合度を評価する残差プロットの表示/非表示を切り替える。このプロットの残差は、変量効果を考慮していない。 このオプションは、モデルに少なくとも1つの固定効果がある場合のみ利用可能。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run
);
Wait( 1 );
obj << Residual Plots( 1 );

```

#### Residuals

**構文:** obj &lt;&lt; Residuals

**説明:** 残差(応答の観測値から周辺平均の予測値を引いたもの)をデータテーブルに保存する。新しい列として、この列はデータテーブルに保存される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run
);
obj << Residuals;

```

#### Results in Data Tables

**構文:** obj = Fit Model(...Results in Data Tables( state=0|1 )...)

**説明:** 複数の応答変数の、各モデルの結果をデータテーブルに出力する。作成されるデータテーブルの数や内容は、あてはめたモデルにより異なる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
obj = dt << Fit Model(
	Y( :Trait1, :Trait2, :Trait3 ),
	Effects( :Sex ),
	Random Effects( Grouped( Column Group( "Markers" ) ) ),
	Personality( "Mixed Model" ),
	Results in Data Tables( 1 ),
	Run
);

```

#### Save Simulation Formula

**構文:** obj &lt;&lt; Save Simulation Formula

**説明:** 乱数を生成する計算式を含んだ列をデータテーブルに保存する。新しい列は、推定されたモデルに基づき、応答の乱数を生成する。[シミュレート]機能において、この計算式列を利用できる。このオプションは、By変数が使用されているときは利用できない。Byグループごとにシミュレーション計算式が必要な場合は、グループごとに分けたデータテーブルを使用する必要がある。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run
);
obj << Save Simulation Formula;

```

#### Sequential Tests

**構文:** obj &lt;&lt; Sequential Tests( state=0|1 )

**説明:** 「逐次(タイプ1)検定」レポートの表示/非表示を切り替える。このレポートには、モデルに1つずつ効果を順次追加したときの平方和が含まれる。 このオプションは、モデルに少なくとも1つの固定効果がある場合のみ利用可能。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run
);
Wait( 1 );
obj << Sequential Tests( 1 );

```

#### Show Sqrt Variance Component

**構文:** obj &lt;&lt; Show Sqrt Variance Component( state=0|1 )

**説明:** 「REML法による分散成分推定値」レポートの「分散成分の平方根」列の表示/非表示を切り替える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :season, :species * :season ),
	Random Effects( :subject[:species] ),
	Personality( "Mixed Model" ),
	Run
);
Wait( 1 );
obj << Show Sqrt Variance Component( 1 );

```

#### Show VIF

**構文:** obj &lt;&lt; Show VIF( state=0|1 )

**説明:** 「固定効果のパラメータ推定値」レポートの「効果コーディング」タブにおいてVIFの表示/非表示を切り替える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :season, :species * :season ),
	Random Effects( :subject[:species] ),
	Personality( "Mixed Model" ),
	Run
);
Wait( 1 );
obj << Show VIF( 1 );

```

#### Stability Analysis

**構文:** obj &lt;&lt; Stability Analysis

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Stability.jmp" );
obj = dt << Fit Model(
	Y( :"Concentration (mg/Kg)"n ),
	Effects( :Time ),
	Random Effects( :Batch Number, :Batch Number * :Time ),
	NoBounds( 0 ),
	Personality( "Mixed Model" ),
	Run( Repeated Effects Covariance Parameter Estimates( 0 ) )
);
obj << Stability Analysis( Quantile( 0.1 ), Lower Spec Limit( 99 ) );

```

#### Standard Error of Conditional Predicted

**構文:** obj &lt;&lt; Standard Error of Conditional Predicted

**説明:** 条件付き平均の予測値の標準誤差を保存する。新しい列として、この列はデータテーブルに保存される。 このオプションは、モデルに少なくとも1つの変量効果がある場合のみ利用可能。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run
);
obj << Standard Error of Conditional Predicted;

```

#### Standard Error of Predicted

**構文:** obj &lt;&lt; Standard Error of Predicted

**説明:** 周辺平均の予測値の標準誤差を保存する。新しい列として、この列はデータテーブルに保存される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run
);
obj << Standard Error of Predicted;

```

#### Suppress Reports

**構文:** obj = Fit Model(...Suppress Reports( state=0|1 )...)

**説明:** 各モデルのレポートを非表示にする。何千もの応答変数がある場合、このオプションにより計算時間を短縮できる。あてはめオブジェクトといくつかのメニュー項目は使用可能。Results in Data Tables(データテーブルに結果を出力する)オプションを指定すると、モデルのレポートがデータテーブルに出力される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
obj = dt << Fit Model(
	Y( :Trait1, :Trait2, :Trait3 ),
	Effects( :Sex ),
	Random Effects( Grouped( Column Group( "Markers" ) ) ),
	Personality( "Mixed Model" ),
	Results in Data Tables( 1 ),
	Suppress Reports( 1 ),
	Run
);

```

#### Surface Profiler

**構文:** obj &lt;&lt; Surface Profiler( state=0|1 )

**説明:** 周辺予測値を3次元空間上に表した曲面プロットの表示/非表示を切り替える。このオプションは、モデルに少なくとも2つの効果がある場合のみ利用可能。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Split Plot.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Tenderizer, :Roasting Time, :Tenderizer * :Roasting Time ),
	Random Effects( :Carcass, :Carcass * :Tenderizer ),
	Personality( "Mixed Model" ),
	Run
);
Wait( 1 );
obj << Surface Profiler( 1 );

```

#### Variogram

**構文:** obj &lt;&lt; Variogram( &lt;X( columns )&gt;, &lt;Model 1, Model 2, ...&gt; )

**説明:** バリオグラムの表示/非表示を切り替える。バリオグラムでは、観測間の距離が大きくなるにつれて共分散がどのように変化するかを確認できる。構造に[残差]を指定した場合は、時間または空間の座標を示す列を選択できる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Air.jmp" );
obj = dt << Fit Model(
	Y( :Ozone Concentration ),
	Effects,
	Center Polynomials( 0 ),
	Personality( "Mixed Model" ),
	Run
);
Wait( 1 );
obj << Variogram( X( :month ), Exponential, Exponential with Nugget );

```

## Fit Nominal Logistic

### 共有されるメッセージ

#### Action

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

#### Apply Preset

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

#### Automatic Recalc

**構文:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**説明:** データの除外や変更があった場合に分析を自動的にやり直す。Automatic Recalcオプションがオンになっている場合で、データの除外や変更が再計算の前に確実に適用されるようにするには、Wait(0)コマンドを使用すること。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

#### Broadcast

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

#### Column Switcher

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

#### Copy ByGroup Script

**構文:** obj &lt;&lt; Copy ByGroup Script

**説明:** この分析を再現するJSLスクリプトを生成し、クリップボードにコピーする。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	By( _bycol ),
	Run
);
obj[1] << Copy ByGroup Script;

```

#### Copy Script

**構文:** obj &lt;&lt; Copy Script

**説明:** この分析を再現するJSLスクリプトを生成し、クリップボードにコピーする。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Copy Script;

```

#### Data Table Window

**構文:** obj &lt;&lt; Data Table Window

**説明:** この分析に使用したデータテーブルのウィンドウを手前に表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Data Table Window;

```

#### Get By Levels

**構文:** obj &lt;&lt; Get By Levels

**説明:** By列が指定されている場合、列名をキー、データ値を値とした連想配列を戻す。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

#### Get ByGroup Script

**構文:** obj &lt;&lt; Get ByGroup Script

**説明:** この分析を再現するスクリプト(JSL)を生成し、それを式として戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	By( _bycol ),
	Run
);
t = obj[1] << Get ByGroup Script;
Show( t );

```

#### Get Container

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
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Get Data Table

**構文:** obj &lt;&lt; Get Data Table

**説明:** データテーブルへの参照を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
t = obj << Get Datatable;
Show( N Rows( t ) );

```

#### Get Group Platform

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

#### Get Script

**構文:** obj &lt;&lt; Get Script

**説明:** この分析を再現するスクリプト(JSL)を生成し、それを式として戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
t = obj << Get Script;
Show( t );

```

#### Get Script With Data Table

**構文:** obj &lt;&lt; Get Script With Data Table

**説明:** この分析を再現するスクリプト(JSL)をデータテーブルへの参照も含めて生成し、それを式として戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
t = obj << Get Script With Data Table;
Show( t );

```

#### Get Timing

**構文:** obj &lt;&lt; Get Timing

**説明:** プラットフォームの起動にかかった時間を取得する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
t = obj << Get Timing;
Show( t );

```

#### Get Web Support

**構文:** obj &lt;&lt; Get Web Support

**説明:** ディスプレイオブジェクトにおけるインタラクティブHTMLサポートのレベルを数値で戻す。1は、一部または全部の要素がサポートされていることを示し、0は、サポートされないことを示す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

#### Get Where Expr

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

#### Ignore Platform Preferences

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

#### Local Data Filter

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

#### New JSL Preset

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

#### New Preset

**構文:** obj = New Preset()

**説明:** オブジェクトに適用されているオプションとカスタマイズをプリセットとしてまとめる。このオブジェクトをApply Presetに渡すことで、同じ種類のオブジェクトに設定をコピーすることができる。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

#### Paste Local Data Filter

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

#### Redo Analysis

**構文:** obj &lt;&lt; Redo Analysis

**説明:** 同じ分析をやり直し新しいウィンドウに表示する。データが変更されていると分析結果は異なる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Redo Analysis;

```

#### Redo ByGroup Analysis

**構文:** obj &lt;&lt; Redo ByGroup Analysis

**説明:** 同じ分析をやり直し新しいウィンドウに表示する。データが変更されていると分析結果は異なる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	By( _bycol ),
	Run
);
obj[1] << Redo ByGroup Analysis;

```

#### Relaunch Analysis

**構文:** obj &lt;&lt; Relaunch Analysis

**説明:** プラットフォームの起動ウィンドウを開き、レポートを作成した時の設定を表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Relaunch Analysis;

```

#### Relaunch ByGroup

**構文:** obj &lt;&lt; Relaunch ByGroup

**説明:** プラットフォームの起動ウィンドウを開き、レポートを作成した時の設定を表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	By( _bycol ),
	Run
);
obj[1] << Relaunch ByGroup;

```

#### Remove Column Switcher

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

#### Remove Local Data Filter

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

#### Render Preset

**構文:** Render Preset( preset )

**説明:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

#### Report

**構文:** obj &lt;&lt; Report;Report( obj )

**説明:** レポートオブジェクトへの参照を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Report View

**構文:** obj &lt;&lt; Report View( "完全"|"要約" )

**説明:** レポートビューは、プラットフォームレポートの詳細を表示するかどうかを決定する。Fullはすべての詳細を表示し、Summaryはプラットフォームにより限定されたものだけを表示する。 動作をカスタマイズするため、各ディスプレイボックスは<<Set Summary Behaviorメッセージをサポートする。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**構文:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**説明:** 分析を再現するためのJSLスクリプトを作成し、データテーブルにテーブルプロパティとして保存する。スクリプトの名前を指定できる。Append Suffixオプションは、スクリプト名に数字の接尾辞を追加する。これにより、同名のスクリプトが存在していても区別できる。Promptオプションは、ユーザにスクリプト名の指定を促す。Replaceオプションは、同名の既存のスクリプトを置き換える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**構文:** obj &lt;&lt; Save ByGroup Script to Journal

**説明:** この分析を再現するJSLスクリプトを生成し、ジャーナルにそのスクリプトのボタンを追加する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**構文:** obj &lt;&lt; Save ByGroup Script to Script Window

**説明:** この分析を再現するJSLスクリプトを生成し、現在のスクリプトウィンドウに表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**構文:** obj &lt;&lt; Save Script for All Objects

**説明:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**構文:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**説明:** すべてのレポートオブジェクトを再現するスクリプトを現在のデータテーブルに保存する。このオプションは、ウィンドウ内にレポートが複数ある場合に便利。作成されるスクリプトの名前は、引用符で囲んで指定しない限り、1つ目のプラットフォーム名となる。

**例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	By( _bycol ),
	Run
);
obj[1] << Save Script for All Objects To Data Table;

```

**例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	By( _bycol ),
	Run
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**構文:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**説明:** この分析を再現するJSLスクリプトを生成し、データテーブルのテーブルプロパティとして保存する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**構文:** obj &lt;&lt; Save Script to Journal

**説明:** この分析を再現するJSLスクリプトを生成し、ジャーナルにそのスクリプトのボタンを追加する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Save Script to Journal;

```

#### Save Script to Report

**構文:** obj &lt;&lt; Save Script to Report

**説明:** この分析を再現するJSLスクリプトを生成し、レポートウィンドウに表示する。分析手順の記録を結果と一緒に残せる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Save Script to Report;

```

#### Save Script to Script Window

**構文:** obj &lt;&lt; Save Script to Script Window

**説明:** この分析を再現するJSLスクリプトを生成し、現在のスクリプトウィンドウに表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Save Script to Script Window;

```

#### SendToByGroup

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

#### SendToEmbeddedScriptable

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

#### SendToReport

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

#### Sync to Data Table Changes

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

#### Title

**構文:** obj &lt;&lt; Title( "new title" )

**説明:** プラットフォームのタイトルを設定する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Title( "My Platform" );

```

#### Top Report

**構文:** obj &lt;&lt; Top Report

**説明:** レポート内のルートノードへの参照を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Transform Column

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

#### View Web XML

**構文:** obj &lt;&lt; View Web XML

**説明:** インタラクティブHTMLレポートの作成に使うXMLコードを戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

#### Window View

**構文:** obj = Fit Nominal Logistic(...Window View( "Visible"|"Invisible"|"Private" )...)

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

### 関連するコンストラクター

#### Fit Nominal Logistic

**構文:** Fit Model( Y( columns ), Effects( columns ), Personality( "Nominal Logistic" ) )

**説明:** 連続変数やカテゴリカルな変数を説明変数とした、名義尺度の応答変数に対するロジスティック回帰モデルをあてはめる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);

```

### 項目のメッセージ

#### Confidence Intervals

**構文:** obj &lt;&lt; Confidence Intervals( &lt;state=0|1&gt; | &lt;fraction&gt; )

**説明:** プロファイル尤度に基づいて計算したモデルパラメータの(1 - fraction)%信頼区間の表示/非表示を切り替える。fraction引数が指定された場合、プラットフォーム起動時に設定された有意水準は捨てられ、fraction引数での指定が優先される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Confidence Intervals( 0.01 );
Wait( 1 );
obj << Confidence Intervals( 0 );

```

#### Confusion Matrix

**構文:** obj &lt;&lt; Confusion Matrix( state=0|1 )

**説明:** 混同行列の表示/非表示を切り替える。混同行列は、実測値と分類値の2元度数表である。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
Wait( 0 );
obj << Confusion Matrix( 1 );

```

#### Contour Profiler

**構文:** obj &lt;&lt; Contour Profiler( state=0|1 )

**説明:** 等高線プロファイルの表示/非表示を切り替える。等高線プロファイルは、2因子ずつに対して、応答変数の予測値を等高線で描いたグラフである。モデルに連続尺度の因子が2つ以上含まれている場合のみ利用可能。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Fit Model(
	Y( :Species ),
	Effects(
		:Sepal length, :Sepal width, :Petal length, :Petal width,
		:Sepal length * :Petal width, :Petal width * :Petal width
	),
	Personality( "Nominal Logistic" ),
	Run
);
Wait( 0 );
obj << Contour Profiler( 1 );

```

#### Decision Threshold

**構文:** obj &lt;&lt; Decision Threshold( state = 0|1, Set Probability Threshold( number=0.5 ) )

**説明:** 各モデルの予測確率の分布や、予測値と実測値の表の表示/非表示を切り替える。確率の閾値を変更すると、分類の結果にどのように影響するかが確認できる。

**JMP追加されたバージョン:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
Wait( 0 );
obj << Decision Threshold( 1, Set Probability Threshold( 0.33 ) );

```

#### Dispose Reports

**構文:** obj = Fit Model(...Dispose Reports( state=0|1 )...)

**説明:** 各モデルのレポートを非表示にし、あてはめの処理後、それらをメモリからも削除する。何千もの応答変数がある場合、このオプションにより計算時間を短縮し、メモリも節約できる。このオプションを、Results in Data Tables(データテーブルに結果を出力する)オプションと一緒に使用すれば、あてはめたモデルの結果をデータテーブルに出力できる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Bands Data.jmp" );
obj = dt << Fit Model(
	Y(
		:grain screened, :proof on ctd ink, :blade mfg, :paper type, :ink type, :direct steam,
		:solvent type, :type on cylinder, :press type, :unit number, :cylinder size,
		:paper mill location, :plating tank
	),
	Effects( "Banding?"n ),
	Personality( "Nominal Logistic" ),
	Results in Data Tables( 1 ),
	Dispose Reports( 1 ),
	Run
);

```

#### Effect Summary

**構文:** obj &lt;&lt; Effect Summary( state=0|1 )

**説明:** 「効果の要約」レポートの表示/非表示を切り替える。「効果の要約」レポートでは、モデルの効果を対話的に変更できる。 デフォルトではオン。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Effect Summary( 0 );
Wait( 1 );
obj << Effect Summary( 1 );
Report( obj )["Effect Summary"] << Close( 0 );

```

#### FDR

**構文:** obj &lt;&lt; FDR( state=0|1 )

**説明:** 「効果の要約」表に表示するp値と対数価値を、偽発見率(FDR)にするかどうかを指定する。偽発見率は、多重性の調整をした指標の1つである。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << FDR( 1 );
Report( obj )["Effect Summary"] << Close( 0 );

```

#### Get Confusion Matrix Test

**構文:** obj &lt;&lt; Get Confusion Matrix Test

**説明:** テストセットの混同行列を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Equity.jmp" );
obj = dt << Fit Model(
	Validation( :Validation ),
	Y( :BAD ),
	Effects(
		:LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO,
		:DEBTINC
	),
	Personality( "Nominal Logistic" ),
	Run( Confusion Matrix( 1 ) )
);
obj << Get Confusion Matrix Test;

```

#### Get Confusion Matrix Training

**構文:** obj &lt;&lt; Get Confusion Matrix Training

**説明:** 学習セットの混同行列を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Validation( :Validation ),
	Y( :Y Binary ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Nominal Logistic" ),
	Run( Confusion Matrix( 1 ) )
);
obj << Get Confusion Matrix Training;

```

#### Get Confusion Matrix Validation

**構文:** obj &lt;&lt; Get Confusion Matrix Validation

**説明:** 検証セットの混同行列を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Validation( :Validation ),
	Y( :Y Binary ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Nominal Logistic" ),
	Run( Confusion Matrix( 1 ) )
);
obj << Get Confusion Matrix Validation;

```

#### Get Confusion Rates Test

**構文:** obj &lt;&lt; Get Confusion Rates Test

**説明:** テストセットの混同率を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Equity.jmp" );
obj = dt << Fit Model(
	Validation( :Validation ),
	Y( :BAD ),
	Effects(
		:LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO,
		:DEBTINC
	),
	Personality( "Nominal Logistic" ),
	Run( Confusion Matrix( 1 ) )
);
obj << Get Confusion Rates Test;

```

#### Get Confusion Rates Training

**構文:** obj &lt;&lt; Get Confusion Rates Training

**説明:** 学習セットの混同率を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Validation( :Validation ),
	Y( :Y Binary ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Nominal Logistic" ),
	Run( Confusion Matrix( 1 ) )
);
obj << Get Confusion Rates Training;

```

#### Get Confusion Rates Validation

**構文:** obj &lt;&lt; Get Confusion Rates Validation

**説明:** 検証セットの混同率を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Validation( :Validation ),
	Y( :Y Binary ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Nominal Logistic" ),
	Run( Confusion Matrix( 1 ) )
);
obj << Get Confusion Rates Validation;

```

#### Get MM SAS DATA Step

**構文:** obj &lt;&lt; Get MM SAS DATA Step

**説明:** SAS Model Managerに登録できるSASコードを作成する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
code = obj << Get MM SAS Data Step;

```

#### Get Measures

**構文:** obj &lt;&lt; Get Measures

**説明:** あてはめたモデルの適合度指標を戻す。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Get Measures;

```

#### Get Probability Formulas

**構文:** obj &lt;&lt; Get Probability Formulas

**説明:** 確率の計算式を作成するスクリプトを戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Get Probability Formulas;

```

#### Get SAS DATA Step

**構文:** obj &lt;&lt; Get SAS DATA Step

**説明:** 新しいデータセットにスコアを付けるためのSASコードを作成する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
code = obj << Get SAS Data Step;

```

#### Indicator Parameterization Estimates

**構文:** obj &lt;&lt; Indicator Parameterization Estimates( state=0|1 )

**説明:** 「指示変数に対する推定値」レポートの表示/非表示を切り替える。このレポートには、指示変数によって名義尺度の列をコード化し、それらを連続変数として扱った際のパラメータ推定値である。多くの場合、SASのGLMプロシジャでのパラメータ推定値と同じになる。

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Detergent.jmp" );
obj = dt << Fit Model(
	Freq( :count ),
	Y( :brand ),
	Effects( :softness, :previous use, :temperature ),
	Personality( "Nominal Logistic" ),
	Run
);
Wait( 0 );
obj << Indicator Parameterization Estimates( 1 );

```

#### Inverse Prediction

**構文:** obj &lt;&lt; Inverse Prediction( Response( p1, p2, ... ), Term Value( effect1( value ), effect2( value ), ... ) )

**説明:** 指定されたYと因子の値に基づいて、Xの予測値および信頼区間を求める。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
Wait( 0 );
obj << Inverse Prediction( Response( 0.5, 0.75, 0.9 ) );

```

#### Lift Curve

**構文:** obj &lt;&lt; Lift Curve( state=0|1 )

**説明:** リフトチャートの表示/非表示を切り替える。リフトチャートは、観測値の割合に対してリフトをプロットしたもので、モデルの予測能力を別の観点から見ることができる。検証列を指定した場合は、学習セット・検証セット・テストセットのそれぞれに対してプロットが表示される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Lift Curve( 1 );

```

#### Likelihood Ratio Tests

**構文:** obj &lt;&lt; Likelihood Ratio Tests( state=0|1 )

**説明:** 各効果に対する尤度比検定の表示/非表示を切り替える。尤度比検定では、あてはめたモデルの対数尤度と、効果の1つを除外したモデルの対数尤度を比較する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Likelihood Ratio Test( 1 );

```

#### Line Color

**構文:** obj &lt;&lt; Line Color( color )

**説明:** ロジスティックプロットにおいて、曲線の色を指定する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
Wait( 1 );
obj << Line Color( "Magenta" );

```

#### Logistic Plot

**構文:** obj &lt;&lt; Logistic Plot( state=0|1 )

**説明:** ロジスティックプロットの表示/非表示を切り替える。モデルが1つの連続尺度の効果で構成されている場合にのみ利用可能。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Logistic Plot( 0 );
Wait( 1 );
obj << Logistic Plot( 1 );

```

#### Model Dialog

**構文:** obj &lt;&lt; Model Dialog

**説明:** 現在の分析が設定された起動ダイアログを開く。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Model Dialog;

```

#### Odds Ratios

**構文:** obj &lt;&lt; Odds Ratios( state=0|1 )

**説明:** 単位オッズ比と範囲オッズ比を含んだ「オッズ比」レポートの表示/非表示を切り替える。3水準以上ある名義尺度の応答変数のモデルには、このオプションは利用できない。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
Wait( 0 );
obj << Odds Ratios( 1 );

```

#### Positive Level

**構文:** obj &lt;&lt; Positive Level

**説明:** ROC曲線において、陽性とされる水準を設定する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Positive Level( "Cured" );
obj << ROC Curve( 1 );

```

#### Precision Recall Curve

**構文:** obj &lt;&lt; Precision Recall Curve( state=0|1 )

**説明:** 応答変数の水準ごとに描かれるPR曲線の表示/非表示を切り替える。PR曲線は、さまざまな閾値における適合率と再現率をプロットしたもの。検証列を指定した場合は、学習セット・検証セット・テストセットのそれぞれに対してプロットが表示される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Positive Level( "Cured" );
Wait( 0 );
obj << Precision Recall Curve( 1 );

```

#### Profiler

**構文:** obj &lt;&lt; Profiler( state=0|1 )

**説明:** 予測プロファイルの表示/非表示を切り替える。予測プロファイルでは、モデルに含まれる因子の値を変更したときに、指定された応答確率の予測値がどのように変化するかを確認できる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
Wait( 0 );
obj << Profiler( 1 );

```

#### Publish Probability Formulas

**構文:** obj &lt;&lt; Publish Probability Formulas

**説明:** 確率の計算式を求め、その計算式の列を作成するスクリプトを「計算式デポ」に発行する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Publish Probability Formulas;

```

#### ROC Curve

**構文:** obj &lt;&lt; ROC Curve( state=0|1 )

**説明:** 応答変数の各水準に対し、ROC曲線(受診者動作特性曲線)の表示/非表示を切り替える。ROC曲線は、「感度」と「1-特異度」をプロットした曲線。検証列を指定した場合は、学習セット・検証セット・テストセットのそれぞれに対してプロットが表示される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Positive Level( "Cured" );
Wait( 0 );
obj << ROC Curve( 1 );

```

#### Results in Data Tables

**構文:** obj = Fit Model(...Results in Data Tables( state=0|1 )...)

**説明:** 複数の応答変数の、各モデルの結果をデータテーブルに出力する。作成されるデータテーブルの数や内容は、あてはめたモデルにより異なる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Bands Data.jmp" );
obj = dt << Fit Model(
	Y(
		:grain screened, :proof on ctd ink, :blade mfg, :paper type, :ink type, :direct steam,
		:solvent type, :type on cylinder, :press type, :unit number, :cylinder size,
		:paper mill location, :plating tank
	),
	Effects( "Banding?"n ),
	Personality( "Nominal Logistic" ),
	Results in Data Tables( 1 ),
	Run
);

```

#### Save Probability Formula

**構文:** obj &lt;&lt; Save Probability Formula

**説明:** 応答変数の水準ごとに、説明変数とパラメータの線形結合式、各水準が生じる確率の予測式、そして、最も生じる確率が高い応答変数の値を計算する予測式をデータテーブルに保存する。新しい計算式の列として、これらの列はデータテーブルに保存される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Save Probability Formula;

```

#### Show Points

**構文:** obj &lt;&lt; Show Points( state=0|1 )

**説明:** ロジスティックプロットにおいて、点の表示/非表示を切り替える。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
Wait( 1 );
obj << Show Points( 0 );

```

#### Show Rate Curve

**構文:** obj &lt;&lt; Show Rate Curve( state=0|1 )

**説明:** ロジスティックプロットにおいて、応答率折れ線の表示/非表示を切り替える。応答率折れ線は、X変数の各値に対して複数の点がある場合にのみ利用できる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
Wait( 1 );
obj << Show Rate Curve( 1 );

```

#### Specify Profit Matrix

**構文:** obj &lt;&lt; Specify Profit Matrix( matrix, level1, level2, ... )

**説明:** 正分類および誤分類した時の利益およびコストを指定する。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y Binary ),
	Effects( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Nominal Logistic" ),
	Run
);
Wait( 0 );
obj << Specify Profit Matrix( [0 -1, -1 0, . .], "High", "Low", "Undecided" );

```

#### Suppress Reports

**構文:** obj = Fit Model(...Suppress Reports( state=0|1 )...)

**説明:** 各モデルのレポートを非表示にする。何千もの応答変数がある場合、このオプションにより計算時間を短縮できる。あてはめオブジェクトといくつかのメニュー項目は使用可能。Results in Data Tables(データテーブルに結果を出力する)オプションを指定すると、モデルのレポートがデータテーブルに出力される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Bands Data.jmp" );
obj = dt << Fit Model(
	Y(
		:grain screened, :proof on ctd ink, :blade mfg, :paper type, :ink type, :direct steam,
		:solvent type, :type on cylinder, :press type, :unit number, :cylinder size,
		:paper mill location, :plating tank
	),
	Effects( "Banding?"n ),
	Personality( "Nominal Logistic" ),
	Results in Data Tables( 1 ),
	Suppress Reports( 1 ),
	Run
);

```

#### Wald Tests

**構文:** obj &lt;&lt; Wald Tests( state=0|1 )

**説明:** 各パラメータについて、「パラメータが0である」という帰無仮説に対するWald検定のカイ2乗検定統計量とp値の表示/非表示を切り替える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Wald Tests( 1 );

```

## Fit Ordinal Logistic

### 共有されるメッセージ

#### Action

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

#### Apply Preset

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

#### Automatic Recalc

**構文:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**説明:** データの除外や変更があった場合に分析を自動的にやり直す。Automatic Recalcオプションがオンになっている場合で、データの除外や変更が再計算の前に確実に適用されるようにするには、Wait(0)コマンドを使用すること。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

#### Broadcast

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

#### Column Switcher

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

#### Copy ByGroup Script

**構文:** obj &lt;&lt; Copy ByGroup Script

**説明:** この分析を再現するJSLスクリプトを生成し、クリップボードにコピーする。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	By( _bycol ),
	Run
);
obj[1] << Copy ByGroup Script;

```

#### Copy Script

**構文:** obj &lt;&lt; Copy Script

**説明:** この分析を再現するJSLスクリプトを生成し、クリップボードにコピーする。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Copy Script;

```

#### Data Table Window

**構文:** obj &lt;&lt; Data Table Window

**説明:** この分析に使用したデータテーブルのウィンドウを手前に表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Data Table Window;

```

#### Get By Levels

**構文:** obj &lt;&lt; Get By Levels

**説明:** By列が指定されている場合、列名をキー、データ値を値とした連想配列を戻す。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

#### Get ByGroup Script

**構文:** obj &lt;&lt; Get ByGroup Script

**説明:** この分析を再現するスクリプト(JSL)を生成し、それを式として戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	By( _bycol ),
	Run
);
t = obj[1] << Get ByGroup Script;
Show( t );

```

#### Get Container

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
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Get Data Table

**構文:** obj &lt;&lt; Get Data Table

**説明:** データテーブルへの参照を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
t = obj << Get Datatable;
Show( N Rows( t ) );

```

#### Get Group Platform

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

#### Get Script

**構文:** obj &lt;&lt; Get Script

**説明:** この分析を再現するスクリプト(JSL)を生成し、それを式として戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
t = obj << Get Script;
Show( t );

```

#### Get Script With Data Table

**構文:** obj &lt;&lt; Get Script With Data Table

**説明:** この分析を再現するスクリプト(JSL)をデータテーブルへの参照も含めて生成し、それを式として戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
t = obj << Get Script With Data Table;
Show( t );

```

#### Get Timing

**構文:** obj &lt;&lt; Get Timing

**説明:** プラットフォームの起動にかかった時間を取得する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
t = obj << Get Timing;
Show( t );

```

#### Get Web Support

**構文:** obj &lt;&lt; Get Web Support

**説明:** ディスプレイオブジェクトにおけるインタラクティブHTMLサポートのレベルを数値で戻す。1は、一部または全部の要素がサポートされていることを示し、0は、サポートされないことを示す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

#### Get Where Expr

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

#### Ignore Platform Preferences

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

#### Local Data Filter

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

#### New JSL Preset

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

#### New Preset

**構文:** obj = New Preset()

**説明:** オブジェクトに適用されているオプションとカスタマイズをプリセットとしてまとめる。このオブジェクトをApply Presetに渡すことで、同じ種類のオブジェクトに設定をコピーすることができる。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

#### Paste Local Data Filter

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

#### Redo Analysis

**構文:** obj &lt;&lt; Redo Analysis

**説明:** 同じ分析をやり直し新しいウィンドウに表示する。データが変更されていると分析結果は異なる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Redo Analysis;

```

#### Redo ByGroup Analysis

**構文:** obj &lt;&lt; Redo ByGroup Analysis

**説明:** 同じ分析をやり直し新しいウィンドウに表示する。データが変更されていると分析結果は異なる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	By( _bycol ),
	Run
);
obj[1] << Redo ByGroup Analysis;

```

#### Relaunch Analysis

**構文:** obj &lt;&lt; Relaunch Analysis

**説明:** プラットフォームの起動ウィンドウを開き、レポートを作成した時の設定を表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Relaunch Analysis;

```

#### Relaunch ByGroup

**構文:** obj &lt;&lt; Relaunch ByGroup

**説明:** プラットフォームの起動ウィンドウを開き、レポートを作成した時の設定を表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	By( _bycol ),
	Run
);
obj[1] << Relaunch ByGroup;

```

#### Remove Column Switcher

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

#### Remove Local Data Filter

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

#### Render Preset

**構文:** Render Preset( preset )

**説明:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

#### Report

**構文:** obj &lt;&lt; Report;Report( obj )

**説明:** レポートオブジェクトへの参照を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Report View

**構文:** obj &lt;&lt; Report View( "完全"|"要約" )

**説明:** レポートビューは、プラットフォームレポートの詳細を表示するかどうかを決定する。Fullはすべての詳細を表示し、Summaryはプラットフォームにより限定されたものだけを表示する。 動作をカスタマイズするため、各ディスプレイボックスは<<Set Summary Behaviorメッセージをサポートする。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**構文:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**説明:** 分析を再現するためのJSLスクリプトを作成し、データテーブルにテーブルプロパティとして保存する。スクリプトの名前を指定できる。Append Suffixオプションは、スクリプト名に数字の接尾辞を追加する。これにより、同名のスクリプトが存在していても区別できる。Promptオプションは、ユーザにスクリプト名の指定を促す。Replaceオプションは、同名の既存のスクリプトを置き換える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**構文:** obj &lt;&lt; Save ByGroup Script to Journal

**説明:** この分析を再現するJSLスクリプトを生成し、ジャーナルにそのスクリプトのボタンを追加する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**構文:** obj &lt;&lt; Save ByGroup Script to Script Window

**説明:** この分析を再現するJSLスクリプトを生成し、現在のスクリプトウィンドウに表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**構文:** obj &lt;&lt; Save Script for All Objects

**説明:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**構文:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**説明:** すべてのレポートオブジェクトを再現するスクリプトを現在のデータテーブルに保存する。このオプションは、ウィンドウ内にレポートが複数ある場合に便利。作成されるスクリプトの名前は、引用符で囲んで指定しない限り、1つ目のプラットフォーム名となる。

**例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	By( _bycol ),
	Run
);
obj[1] << Save Script for All Objects To Data Table;

```

**例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	By( _bycol ),
	Run
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**構文:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**説明:** この分析を再現するJSLスクリプトを生成し、データテーブルのテーブルプロパティとして保存する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**構文:** obj &lt;&lt; Save Script to Journal

**説明:** この分析を再現するJSLスクリプトを生成し、ジャーナルにそのスクリプトのボタンを追加する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Save Script to Journal;

```

#### Save Script to Report

**構文:** obj &lt;&lt; Save Script to Report

**説明:** この分析を再現するJSLスクリプトを生成し、レポートウィンドウに表示する。分析手順の記録を結果と一緒に残せる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Save Script to Report;

```

#### Save Script to Script Window

**構文:** obj &lt;&lt; Save Script to Script Window

**説明:** この分析を再現するJSLスクリプトを生成し、現在のスクリプトウィンドウに表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Save Script to Script Window;

```

#### SendToByGroup

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

#### SendToEmbeddedScriptable

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

#### SendToReport

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

#### Sync to Data Table Changes

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

#### Title

**構文:** obj &lt;&lt; Title( "new title" )

**説明:** プラットフォームのタイトルを設定する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Title( "My Platform" );

```

#### Top Report

**構文:** obj &lt;&lt; Top Report

**説明:** レポート内のルートノードへの参照を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Transform Column

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

#### View Web XML

**構文:** obj &lt;&lt; View Web XML

**説明:** インタラクティブHTMLレポートの作成に使うXMLコードを戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

#### Window View

**構文:** obj = Fit Ordinal Logistic(...Window View( "Visible"|"Invisible"|"Private" )...)

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

### 列

#### By

**構文:** obj &lt;&lt; By( column(s) )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	By( _bycol ),
	Run
);

```

### 関連するコンストラクター

#### Fit Ordinal Logistic

**構文:** Fit Model( Y( columns ), Effects( columns ), Personality( "Ordinal Logistic" ) )

**説明:** 連続変数やカテゴリカルな変数を説明変数とした、順序尺度の応答変数に対するロジスティック回帰モデルをあてはめる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);

```

### 項目のメッセージ

#### Confidence Intervals

**構文:** obj &lt;&lt; Confidence Intervals( &lt;state=0|1&gt; | &lt;fraction&gt; )

**説明:** プロファイル尤度に基づいて計算したモデルパラメータの(1 - fraction)%信頼区間の表示/非表示を切り替える。fraction引数が指定された場合、プラットフォーム起動時に設定された有意水準は捨てられ、fraction引数での指定が優先される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Confidence Intervals( 0.01 );
Wait( 1 );
obj << Confidence Intervals( 0 );

```

#### Confusion Matrix

**構文:** obj &lt;&lt; Confusion Matrix( state=0|1 )

**説明:** 混同行列の表示/非表示を切り替える。混同行列は、実測値と分類値の2元度数表である。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
Wait( 0 );
obj << Confusion Matrix( 1 );

```

#### Contour Profiler

**構文:** obj &lt;&lt; Contour Profiler( state=0|1 )

**説明:** 等高線プロファイルの表示/非表示を切り替える。等高線プロファイルは、2因子ずつに対して、応答変数の予測値を等高線で描いたグラフである。モデルに連続尺度の因子が2つ以上含まれている場合のみ利用可能。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Fit Model(
	Y( :Job Satisfaction ),
	Effects(
		:Years at Current Employer, :Salary, :Single Status, :Age in Years,
		:Age in Years * :Years at Current Employer
	),
	Personality( "Ordinal Logistic" ),
	Run
);
Wait( 0 );
obj << Contour Profiler( 1 );

```

#### Dispose Reports

**構文:** obj = Fit Model(...Dispose Reports( state=0|1 )...)

**説明:** 各モデルのレポートを非表示にし、あてはめの処理後、それらをメモリからも削除する。何千もの応答変数がある場合、このオプションにより計算時間を短縮し、メモリも節約できる。このオプションを、Results in Data Tables(データテーブルに結果を出力する)オプションと一緒に使用すれば、あてはめたモデルの結果をデータテーブルに出力できる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Fit Model(
	Y( :Employee Tenure, :Position Tenure, :Job Satisfaction ),
	Effects( :Gender, :Birth Year, :Single Status, :School Age Children ),
	Personality( "Ordinal Logistic" ),
	Results in Data Tables( 1 ),
	Dispose Reports( 1 ),
	Run
);

```

#### Effect Summary

**構文:** obj &lt;&lt; Effect Summary( state=0|1 )

**説明:** 「効果の要約」レポートの表示/非表示を切り替える。「効果の要約」レポートでは、モデルの効果を対話的に変更できる。 デフォルトではオン。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Effect Summary( 0 );
Wait( 1 );
obj << Effect Summary( 1 );
Report( obj )["Effect Summary"] << Close( 0 );

```

#### FDR

**構文:** obj &lt;&lt; FDR( state=0|1 )

**説明:** 「効果の要約」表に表示するp値と対数価値を、偽発見率(FDR)にするかどうかを指定する。偽発見率は、多重性の調整をした指標の1つである。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << FDR( 1 );
Report( obj )["Effect Summary"] << Close( 0 );

```

#### Get Confusion Matrix Test

**構文:** obj &lt;&lt; Get Confusion Matrix Test

**説明:** テストセットの混同行列を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );
obj = dt << Fit Model(
	Validation( :Validation 2 ),
	Y( :Y Ordinal ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Ordinal Logistic" ),
	Run( Confusion Matrix( 1 ) )
);
obj << Get Confusion Matrix Test;

```

#### Get Confusion Matrix Training

**構文:** obj &lt;&lt; Get Confusion Matrix Training

**説明:** 学習セットの混同行列を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Validation( :Validation ),
	Y( :Y Ordinal ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Ordinal Logistic" ),
	Run( Confusion Matrix( 1 ) )
);
obj << Get Confusion Matrix Training;

```

#### Get Confusion Matrix Validation

**構文:** obj &lt;&lt; Get Confusion Matrix Validation

**説明:** 検証セットの混同行列を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Validation( :Validation ),
	Y( :Y Ordinal ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Ordinal Logistic" ),
	Run( Confusion Matrix( 1 ) )
);
obj << Get Confusion Matrix Validation;

```

#### Get Confusion Rates Test

**構文:** obj &lt;&lt; Get Confusion Rates Test

**説明:** テストセットの混同率を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );
obj = dt << Fit Model(
	Validation( :Validation 2 ),
	Y( :Y Ordinal ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Ordinal Logistic" ),
	Run( Confusion Matrix( 1 ) )
);
obj << Get Confusion Rates Test;

```

#### Get Confusion Rates Training

**構文:** obj &lt;&lt; Get Confusion Rates Training

**説明:** 学習セットの混同率を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Validation( :Validation ),
	Y( :Y Ordinal ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Ordinal Logistic" ),
	Run( Confusion Matrix( 1 ) )
);
obj << Get Confusion Rates Training;

```

#### Get Confusion Rates Validation

**構文:** obj &lt;&lt; Get Confusion Rates Validation

**説明:** 検証セットの混同率を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Validation( :Validation ),
	Y( :Y Ordinal ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Ordinal Logistic" ),
	Run( Confusion Matrix( 1 ) )
);
obj << Get Confusion Rates Validation;

```

#### Get MM SAS DATA Step

**構文:** obj &lt;&lt; Get MM SAS DATA Step

**説明:** SAS Model Managerに登録できるSASコードを作成する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
code = obj << Get MM SAS Data Step;

```

#### Get Measures

**構文:** obj &lt;&lt; Get Measures

**説明:** あてはめたモデルの適合度指標を戻す。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Get Measures;

```

#### Get Probability Formulas

**構文:** obj &lt;&lt; Get Probability Formulas

**説明:** 確率の計算式を作成するスクリプトを戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Get Probability Formulas;

```

#### Get SAS DATA Step

**構文:** obj &lt;&lt; Get SAS DATA Step

**説明:** 新しいデータセットにスコアを付けるためのSASコードを作成する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
code = obj << Get SAS Data Step;

```

#### Lift Curve

**構文:** obj &lt;&lt; Lift Curve( state=0|1 )

**説明:** リフトチャートの表示/非表示を切り替える。リフトチャートは、観測値の割合に対してリフトをプロットしたもので、モデルの予測能力を別の観点から見ることができる。検証列を指定した場合は、学習セット・検証セット・テストセットのそれぞれに対してプロットが表示される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cheese.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :Cheese ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Lift Curve( 1 );

```

#### Likelihood Ratio Tests

**構文:** obj &lt;&lt; Likelihood Ratio Tests( state=0|1 )

**説明:** 各効果に対する尤度比検定の表示/非表示を切り替える。尤度比検定では、あてはめたモデルの対数尤度と、効果の1つを除外したモデルの対数尤度を比較する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Likelihood Ratio Tests( 1 );

```

#### Logistic Plot

**構文:** obj &lt;&lt; Logistic Plot( state=0|1 )

**説明:** ロジスティックプロットの表示/非表示を切り替える。モデルが1つの連続尺度の効果で構成されている場合にのみ利用可能。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Logistic Plot( 0 );
Wait( 1 );
obj << Logistic Plot( 1 );

```

#### Model Dialog

**構文:** obj &lt;&lt; Model Dialog

**説明:** 現在の分析が設定された起動ダイアログを開く。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Model Dialog;

```

#### Odds Ratios

**構文:** obj &lt;&lt; Odds Ratios( state=0|1 )

**説明:** 「オッズ比」レポートの表示/非表示を切り替える。このレポートには、単位オッズ比と範囲オッズ比が表示される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y Ordinal ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Ordinal Logistic" ),
	Run
);
Wait( 0 );
obj << Odds Ratios( 1 );

```

#### Precision Recall Curve

**構文:** obj &lt;&lt; Precision Recall Curve( state=0|1 )

**説明:** 応答変数の水準ごとに描かれるPR曲線の表示/非表示を切り替える。PR曲線は、さまざまな閾値における適合率と再現率をプロットしたもの。検証列を指定した場合は、学習セット・検証セット・テストセットのそれぞれに対してプロットが表示される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Precision Recall Curve( 1 );

```

#### Profiler

**構文:** obj &lt;&lt; Profiler( state=0|1 )

**説明:** 予測プロファイルの表示/非表示を切り替える。予測プロファイルでは、モデルに含まれる因子の値を変更したときに、指定された応答確率の予測値がどのように変化するかを確認できる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
Wait( 0 );
obj << Profiler( 1 );

```

#### Publish Probability Formulas

**構文:** obj &lt;&lt; Publish Probability Formulas

**説明:** 確率の計算式を求め、その計算式の列を作成するスクリプトを「計算式デポ」に発行する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Publish Probability Formulas;

```

#### ROC Curve

**構文:** obj &lt;&lt; ROC Curve( state=0|1 )

**説明:** 応答変数の各水準に対し、ROC曲線(受診者動作特性曲線)の表示/非表示を切り替える。ROC曲線は、「感度」と「1-特異度」をプロットした曲線。検証列を指定した場合は、学習セット・検証セット・テストセットのそれぞれに対してプロットが表示される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << ROC Curve( 1 );

```

#### Results in Data Tables

**構文:** obj = Fit Model(...Results in Data Tables( state=0|1 )...)

**説明:** 複数の応答変数の、各モデルの結果をデータテーブルに出力する。作成されるデータテーブルの数や内容は、あてはめたモデルにより異なる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Fit Model(
	Y( :Employee Tenure, :Position Tenure, :Job Satisfaction ),
	Effects( :Gender, :Birth Year, :Single Status, :School Age Children ),
	Personality( "Ordinal Logistic" ),
	Results in Data Tables( 1 ),
	Run
);

```

#### Save Expected Value

**構文:** obj &lt;&lt; Save Expected Value

**説明:** 期待値をデータテーブルに保存する。この期待値は、行ごとに、応答値とその予測確率との線形結合によって計算される。新しい列として、この列はデータテーブルに保存される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cheese.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :Cheese ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Save Expected Value;

```

#### Save Probability Formula

**構文:** obj &lt;&lt; Save Probability Formula

**説明:** 応答変数の水準ごとに、説明変数とパラメータの線形結合式、各水準が生じる確率の予測式、そして、最も生じる確率が高い応答変数の値を計算する予測式をデータテーブルに保存する。新しい計算式の列として、これらの列はデータテーブルに保存される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Save Probability Formula;

```

#### Save Quantiles

**構文:** obj &lt;&lt; Save Quantiles

**説明:** データテーブルに「分類(5%閾値)」、「分類(95%閾値)」という名前の新しい列を作成し、該当する確率に対する分位点の予測値を保存する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cheese.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :Cheese ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Save Quantiles;

```

#### Suppress Reports

**構文:** obj = Fit Model(...Suppress Reports( state=0|1 )...)

**説明:** 各モデルのレポートを非表示にする。何千もの応答変数がある場合、このオプションにより計算時間を短縮できる。あてはめオブジェクトといくつかのメニュー項目は使用可能。Results in Data Tables(データテーブルに結果を出力する)オプションを指定すると、モデルのレポートがデータテーブルに出力される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Fit Model(
	Y( :Employee Tenure, :Position Tenure, :Job Satisfaction ),
	Effects( :Gender, :Birth Year, :Single Status, :School Age Children ),
	Personality( "Ordinal Logistic" ),
	Results in Data Tables( 1 ),
	Suppress Reports( 1 ),
	Run
);

```

#### Wald Tests

**構文:** obj &lt;&lt; Wald Tests( state=0|1 )

**説明:** 各パラメータについて、「パラメータが0である」という帰無仮説に対するWald検定のカイ2乗検定統計量とp値の表示/非表示を切り替える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Wald Tests( 1 );

```

## Fit Parametric Survival

### 共有されるメッセージ

#### Action

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

#### Apply Preset

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

#### Automatic Recalc

**構文:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**説明:** データの除外や変更があった場合に分析を自動的にやり直す。Automatic Recalcオプションがオンになっている場合で、データの除外や変更が再計算の前に確実に適用されるようにするには、Wait(0)コマンドを使用すること。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

#### Broadcast

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

#### Column Switcher

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

#### Copy ByGroup Script

**構文:** obj &lt;&lt; Copy ByGroup Script

**説明:** この分析を再現するJSLスクリプトを生成し、クリップボードにコピーする。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	By( _bycol ),
	Run Model
);
obj[1] << Copy ByGroup Script;

```

#### Copy Script

**構文:** obj &lt;&lt; Copy Script

**説明:** この分析を再現するJSLスクリプトを生成し、クリップボードにコピーする。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Copy Script;

```

#### Data Table Window

**構文:** obj &lt;&lt; Data Table Window

**説明:** この分析に使用したデータテーブルのウィンドウを手前に表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Data Table Window;

```

#### Get By Levels

**構文:** obj &lt;&lt; Get By Levels

**説明:** By列が指定されている場合、列名をキー、データ値を値とした連想配列を戻す。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

#### Get ByGroup Script

**構文:** obj &lt;&lt; Get ByGroup Script

**説明:** この分析を再現するスクリプト(JSL)を生成し、それを式として戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	By( _bycol ),
	Run Model
);
t = obj[1] << Get ByGroup Script;
Show( t );

```

#### Get Container

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
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Get Data Table

**構文:** obj &lt;&lt; Get Data Table

**説明:** データテーブルへの参照を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
t = obj << Get Datatable;
Show( N Rows( t ) );

```

#### Get Group Platform

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

#### Get Script

**構文:** obj &lt;&lt; Get Script

**説明:** この分析を再現するスクリプト(JSL)を生成し、それを式として戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
t = obj << Get Script;
Show( t );

```

#### Get Script With Data Table

**構文:** obj &lt;&lt; Get Script With Data Table

**説明:** この分析を再現するスクリプト(JSL)をデータテーブルへの参照も含めて生成し、それを式として戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
t = obj << Get Script With Data Table;
Show( t );

```

#### Get Timing

**構文:** obj &lt;&lt; Get Timing

**説明:** プラットフォームの起動にかかった時間を取得する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
t = obj << Get Timing;
Show( t );

```

#### Get Web Support

**構文:** obj &lt;&lt; Get Web Support

**説明:** ディスプレイオブジェクトにおけるインタラクティブHTMLサポートのレベルを数値で戻す。1は、一部または全部の要素がサポートされていることを示し、0は、サポートされないことを示す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

#### Get Where Expr

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

#### Ignore Platform Preferences

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

#### Local Data Filter

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

#### New JSL Preset

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

#### New Preset

**構文:** obj = New Preset()

**説明:** オブジェクトに適用されているオプションとカスタマイズをプリセットとしてまとめる。このオブジェクトをApply Presetに渡すことで、同じ種類のオブジェクトに設定をコピーすることができる。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

#### Paste Local Data Filter

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

#### Redo Analysis

**構文:** obj &lt;&lt; Redo Analysis

**説明:** 同じ分析をやり直し新しいウィンドウに表示する。データが変更されていると分析結果は異なる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Redo Analysis;

```

#### Redo ByGroup Analysis

**構文:** obj &lt;&lt; Redo ByGroup Analysis

**説明:** 同じ分析をやり直し新しいウィンドウに表示する。データが変更されていると分析結果は異なる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	By( _bycol ),
	Run Model
);
obj[1] << Redo ByGroup Analysis;

```

#### Relaunch Analysis

**構文:** obj &lt;&lt; Relaunch Analysis

**説明:** プラットフォームの起動ウィンドウを開き、レポートを作成した時の設定を表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Relaunch Analysis;

```

#### Relaunch ByGroup

**構文:** obj &lt;&lt; Relaunch ByGroup

**説明:** プラットフォームの起動ウィンドウを開き、レポートを作成した時の設定を表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	By( _bycol ),
	Run Model
);
obj[1] << Relaunch ByGroup;

```

#### Remove Column Switcher

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

#### Remove Local Data Filter

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

#### Render Preset

**構文:** Render Preset( preset )

**説明:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

#### Report

**構文:** obj &lt;&lt; Report;Report( obj )

**説明:** レポートオブジェクトへの参照を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Report View

**構文:** obj &lt;&lt; Report View( "完全"|"要約" )

**説明:** レポートビューは、プラットフォームレポートの詳細を表示するかどうかを決定する。Fullはすべての詳細を表示し、Summaryはプラットフォームにより限定されたものだけを表示する。 動作をカスタマイズするため、各ディスプレイボックスは<<Set Summary Behaviorメッセージをサポートする。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**構文:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**説明:** 分析を再現するためのJSLスクリプトを作成し、データテーブルにテーブルプロパティとして保存する。スクリプトの名前を指定できる。Append Suffixオプションは、スクリプト名に数字の接尾辞を追加する。これにより、同名のスクリプトが存在していても区別できる。Promptオプションは、ユーザにスクリプト名の指定を促す。Replaceオプションは、同名の既存のスクリプトを置き換える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	By( _bycol ),
	Run Model
);
obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**構文:** obj &lt;&lt; Save ByGroup Script to Journal

**説明:** この分析を再現するJSLスクリプトを生成し、ジャーナルにそのスクリプトのボタンを追加する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	By( _bycol ),
	Run Model
);
obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**構文:** obj &lt;&lt; Save ByGroup Script to Script Window

**説明:** この分析を再現するJSLスクリプトを生成し、現在のスクリプトウィンドウに表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	By( _bycol ),
	Run Model
);
obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**構文:** obj &lt;&lt; Save Script for All Objects

**説明:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**構文:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**説明:** すべてのレポートオブジェクトを再現するスクリプトを現在のデータテーブルに保存する。このオプションは、ウィンドウ内にレポートが複数ある場合に便利。作成されるスクリプトの名前は、引用符で囲んで指定しない限り、1つ目のプラットフォーム名となる。

**例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	By( _bycol ),
	Run Model
);
obj[1] << Save Script for All Objects To Data Table;

```

**例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	By( _bycol ),
	Run Model
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**構文:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**説明:** この分析を再現するJSLスクリプトを生成し、データテーブルのテーブルプロパティとして保存する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**構文:** obj &lt;&lt; Save Script to Journal

**説明:** この分析を再現するJSLスクリプトを生成し、ジャーナルにそのスクリプトのボタンを追加する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Save Script to Journal;

```

#### Save Script to Report

**構文:** obj &lt;&lt; Save Script to Report

**説明:** この分析を再現するJSLスクリプトを生成し、レポートウィンドウに表示する。分析手順の記録を結果と一緒に残せる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Save Script to Report;

```

#### Save Script to Script Window

**構文:** obj &lt;&lt; Save Script to Script Window

**説明:** この分析を再現するJSLスクリプトを生成し、現在のスクリプトウィンドウに表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Save Script to Script Window;

```

#### SendToByGroup

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

#### SendToEmbeddedScriptable

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

#### SendToReport

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

#### Sync to Data Table Changes

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

#### Title

**構文:** obj &lt;&lt; Title( "new title" )

**説明:** プラットフォームのタイトルを設定する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Title( "My Platform" );

```

#### Top Report

**構文:** obj &lt;&lt; Top Report

**説明:** レポート内のルートノードへの参照を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Transform Column

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

#### View Web XML

**構文:** obj &lt;&lt; View Web XML

**説明:** インタラクティブHTMLレポートの作成に使うXMLコードを戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

#### Window View

**構文:** obj = Fit Parametric Survival(...Window View( "Visible"|"Invisible"|"Private" )...)

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

### 関連するコンストラクター

#### Fit Parametric Survival

**構文:** Fit Model( Y( columns ), Effects( columns ), Personality( "Parametric Survival" ), Censor( columns ) )

**説明:** 生存時間にパラメトリックな回帰モデルをあてはめる。これらのモデルは、生存時間の確率分布が説明変数の関数として表せる場合に使える。生存時間分布として、いくつかの確率分布を仮定できる。また、打ち切りを考慮することもできる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);

```

### 項目のメッセージ

#### Correlation of Estimates

**構文:** obj &lt;&lt; Correlation of Estimates( state=0|1 )

**説明:** 当該のあてはめ結果において、パラメータ推定値間の相関行列の表示/非表示を切り替える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Correlation of Estimates( 1 );

```

#### Covariance of Estimates

**構文:** obj &lt;&lt; Covariance of Estimates( state=0|1 )

**説明:** 当該のあてはめ結果において、パラメータ推定値間の共分散行列の表示/非表示を切り替える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Covariance of Estimates( 1 );

```

#### Distribution

**構文:** obj = Fit Model(...Distribution("Weibull"|"Lognormal"|"Exponential"|"Frechet"|"Loglogistic"|"All Distributions"|"SEV"|"Normal"|"LEV"|"Logistic"...)

**説明:** イベントまでの時間のデータにあてはめる確率分布を指定する。[すべての分布]は、利用可能な分布をすべてあてはめる。

**すべての分布**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "All Distributions" ),
	Censor( :censor ),
	Run Model
);

```

**単一の分布**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Lognormal" ),
	Censor( :censor ),
	Run Model
);

```

#### Distribution Plot by Level Combinations

**構文:** obj &lt;&lt; Distribution Plot by Level Combinations( state=0|1 )

**説明:** X変数で表されるモデルのうち包含関係にある3つのモデルを比較したレポートの表示/非表示を切り替える。このレポートには、モデルの適合度を評価するための3つの確率プロットが表示される。プロットには、X変数の水準の組み合わせごとに線が描かれる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/reliability/Devalt.jmp" );
dt << Fit Model(
	Censor( :Censor ),
	Censor Code( "1" ),
	Freq( :Weight ),
	Y( :Hours ),
	Effects( :x ),
	Personality( "Parametric Survival" ),
	Distribution( "Lognormal" ),
	Run( Likelihood Ratio Tests( 1 ), Distribution Plot by Level Combinations( 1 ), )
);

```

#### Distribution Profiler

**構文:** obj &lt;&lt; Distribution Profiler( state=0|1 )

**説明:** 累積分布関数プロファイルの表示/非表示を切り替える。累積分布関数は、説明変数と応答変数に対する関数となっている。一番右のセルにて、応答変数の値を変更できる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Distribution Profiler( 1 );

```

#### Effect Summary

**構文:** obj &lt;&lt; Effect Summary( state=0|1 )

**説明:** 「効果の要約」レポートの表示/非表示を切り替える。「効果の要約」レポートでは、モデルの効果を対話的に変更できる。 デフォルトではオン。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Effect Summary( 0 );
Wait( 1 );
obj << Effect Summary( 1 );
Report( obj )["Effect Summary"] << Close( 0 );

```

#### Estimate Quantile

**構文:** obj &lt;&lt; Estimate Quantile( x1 = [number, ...], x2 = [number, ...], [p1, p2, ...], Alpha( fraction ) )

**説明:** 指定された効果の値と累積故障確率に対して、分位点を推定する。効果や累積故障確率の値を複数指定するには、ベクトルを使用する。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Estimate Quantile(
	:Age = [55, 60],
	:Diag Time = [8.77],
	[0.5, 0.10, 0.05],
	Alpha( 0.05 )
);

```

#### Estimate Survival Probability

**構文:** obj &lt;&lt; Estimate Survival Probability( x1 = [number, ...], x2 = [number, ...], [time1, time2, ...], Alpha( fraction ) )

**説明:** 指定された効果の値と時間の値に対して、累積故障確率と生存確率を推定する。効果や時間の値を複数指定するには、ベクトルを使用する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Estimate Survival Probability(
	:Age = [55, 60],
	:Diag Time = [8.77],
	[50, 100, 150],
	Alpha( 0.05 )
);

```

#### FDR

**構文:** obj &lt;&lt; FDR( state=0|1 )

**説明:** 「効果の要約」表に表示するp値と対数価値を、偽発見率(FDR)にするかどうかを指定する。偽発見率は、多重性の調整をした指標の1つである。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << FDR( 1 );
Report( obj )["Effect Summary"] << Close( 0 );

```

#### Get Effect Names

**構文:** obj &lt;&lt; Get Effect Names

**説明:** モデルで使用されている効果名を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
n = obj << Get Effect Names;
Show( n );

```

#### Get Effect PValues

**構文:** obj &lt;&lt; Get Effect PValues

**説明:** モデルの各効果のp値を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
p = obj << Get Effect PValues;
Show( p );

```

#### Get Estimates

**構文:** obj &lt;&lt; Get Estimates

**説明:** モデルのパラメータ推定値を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
e = obj << Get Estimates;
Show( e );

```

#### Get Parameter Names

**構文:** obj &lt;&lt; Get Parameter Names

**説明:** モデルで使用されているパラメータ名を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
n = obj << Get Parameter Names;
Show( n );

```

#### Get Std Errors

**構文:** obj &lt;&lt; Get Std Errors

**説明:** モデルのパラメータ推定値の標準誤差を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
std = obj << Get Std Errors;
Show( std );

```

#### Hazard Profiler

**構文:** obj &lt;&lt; Hazard Profiler( state=0|1 )

**説明:** ハザード関数ロファイルの表示/非表示を切り替える。ハザード関数は、説明変数と生存時間(応答変数)の関数となっている。生存時間は一番右のセルに表示される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Hazard Profiler( 1 );

```

#### Likelihood Confidence Intervals

**構文:** obj &lt;&lt; Likelihood Confidence Intervals( state=0|1 )

**説明:** 「パラメータ推定値」表に表示する信頼区間の種類を指定する。このオプションを選択した場合はプロファイル尤度の信頼区間、それ以外の場合はWaldの信頼区間が表示される。このオプションは、プロファイル尤度の信頼区間の計算にかかる時間が長すぎない限り、デフォルトでオンになる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Likelihood Confidence Intervals( 1 );

```

#### Likelihood Ratio Tests

**構文:** obj &lt;&lt; Likelihood Ratio Tests( state=0|1 )

**説明:** 各効果に対する尤度比検定の表示/非表示を切り替える。尤度比検定では、あてはめたモデルの対数尤度と、効果の1つを除外したモデルの対数尤度を比較する。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Likelihood Ratio Tests( 1 );

```

#### Model Dialog

**構文:** obj &lt;&lt; Model Dialog

**説明:** 現在の分析が設定された起動ダイアログを開く。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Model Dialog;

```

#### Publish Probability Formula

**構文:** obj &lt;&lt; Publish Probability Formula

**説明:** 累積故障確率の計算式を作成し、スクリプトとして「計算式デポ」プラットフォームに発行する。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Publish Probability Formula;

```

#### Publish Quantile Formula

**構文:** obj &lt;&lt; Publish Quantile Formula( probability )

**説明:** 分位点の計算式を作成し、スクリプトとして「計算式デポ」プラットフォームに発行する。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Publish Quantile Formula( 0.1 );

```

#### Quantile Profiler

**構文:** obj &lt;&lt; Quantile Profiler( state=0|1 )

**説明:** 分位点関数プロファイルの表示/非表示を切り替える。分位点関数は、応答変数の値を予測するもので、説明変数と累積故障確率の関数となっている。累積故障確率は、「故障確率」として一番右のセルに表示される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Quantile Profiler( 1 );

```

#### Residual Probability Plot

**構文:** obj &lt;&lt; Residual Probability Plot( state=0|1 )

**説明:** 標準化誤差と信頼区間を表示した確率プロットの表示/非表示を切り替える。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Residual Probability Plot( 1 );

```

#### Response versus Fitted Median

**構文:** obj &lt;&lt; Response versus Fitted Median( state=0|1 )

**説明:** Y軸に応答、X軸に中央値の予測値を表示したプロットの表示/非表示を切り替える。

**JMP追加されたバージョン:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Response versus Fitted Median( 1 );

```

#### Save Probability Formula

**構文:** obj &lt;&lt; Save Probability Formula

**説明:** 故障確率の推定値を求める計算式を保存する。新しい計算式列として、この列はデータテーブルに保存される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Save Probability Formula;

```

#### Save Quantile Formula

**構文:** obj &lt;&lt; Save Quantile Formula( probability )

**説明:** 指定された累積故障確率に対する分位点を求める計算式を保存する。新しい計算式列として、この列はデータテーブルに保存される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Save Quantile Formula( 0.8 );

```

#### Save Residuals

**構文:** obj &lt;&lt; Save Residuals

**説明:** 残差をデータテーブルに保存する。分析に用いた「イベントまでの時間」列のそれぞれに対して、残差は計算される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Save Residuals;

```

#### Standardized Residuals versus Fitted Median

**構文:** obj &lt;&lt; Standardized Residuals versus Fitted Median( state=0|1 )

**説明:** Y軸に標準化残差、X軸に中央値の予測値を表示したプロットの表示/非表示を切り替える。

**JMP追加されたバージョン:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Standardized Residuals versus Fitted Median( 1 );

```

#### Survival Profiler

**構文:** obj &lt;&lt; Survival Profiler( state=0|1 )

**説明:** 「生存関数プロファイル」の表示/非表示を切り替える。生存関数は、説明変数と応答変数に対する関数となっている。一番右のセルにて、応答変数の値を変更できる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Survival Profiler( 1 );

```

#### Wald Tests

**構文:** obj &lt;&lt; Wald Tests( state=0|1 )

**説明:** 各パラメータについて、「パラメータが0である」という帰無仮説に対するWald検定のカイ2乗検定統計量とp値の表示/非表示を切り替える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Wald Tests( 0 );
Wait( 2 );
obj << Wald Tests( 1 );

```

## Fit Proportional Hazards

### 共有されるメッセージ

#### Action

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

#### Apply Preset

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

#### Broadcast

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

#### Column Switcher

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

#### Copy ByGroup Script

**構文:** obj &lt;&lt; Copy ByGroup Script

**説明:** この分析を再現するJSLスクリプトを生成し、クリップボードにコピーする。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	By( _bycol ),
	Run Model
);
obj[1] << Copy ByGroup Script;

```

#### Copy Script

**構文:** obj &lt;&lt; Copy Script

**説明:** この分析を再現するJSLスクリプトを生成し、クリップボードにコピーする。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
obj << Copy Script;

```

#### Data Table Window

**構文:** obj &lt;&lt; Data Table Window

**説明:** この分析に使用したデータテーブルのウィンドウを手前に表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
obj << Data Table Window;

```

#### Get By Levels

**構文:** obj &lt;&lt; Get By Levels

**説明:** By列が指定されている場合、列名をキー、データ値を値とした連想配列を戻す。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

#### Get ByGroup Script

**構文:** obj &lt;&lt; Get ByGroup Script

**説明:** この分析を再現するスクリプト(JSL)を生成し、それを式として戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	By( _bycol ),
	Run Model
);
t = obj[1] << Get ByGroup Script;
Show( t );

```

#### Get Container

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
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Get Data Table

**構文:** obj &lt;&lt; Get Data Table

**説明:** データテーブルへの参照を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
t = obj << Get Datatable;
Show( N Rows( t ) );

```

#### Get Group Platform

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

#### Get Script

**構文:** obj &lt;&lt; Get Script

**説明:** この分析を再現するスクリプト(JSL)を生成し、それを式として戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
t = obj << Get Script;
Show( t );

```

#### Get Script With Data Table

**構文:** obj &lt;&lt; Get Script With Data Table

**説明:** この分析を再現するスクリプト(JSL)をデータテーブルへの参照も含めて生成し、それを式として戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
t = obj << Get Script With Data Table;
Show( t );

```

#### Get Timing

**構文:** obj &lt;&lt; Get Timing

**説明:** プラットフォームの起動にかかった時間を取得する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
t = obj << Get Timing;
Show( t );

```

#### Get Web Support

**構文:** obj &lt;&lt; Get Web Support

**説明:** ディスプレイオブジェクトにおけるインタラクティブHTMLサポートのレベルを数値で戻す。1は、一部または全部の要素がサポートされていることを示し、0は、サポートされないことを示す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

#### Get Where Expr

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

#### Ignore Platform Preferences

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

#### Local Data Filter

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

#### New JSL Preset

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

#### New Preset

**構文:** obj = New Preset()

**説明:** オブジェクトに適用されているオプションとカスタマイズをプリセットとしてまとめる。このオブジェクトをApply Presetに渡すことで、同じ種類のオブジェクトに設定をコピーすることができる。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

#### Paste Local Data Filter

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

#### Redo Analysis

**構文:** obj &lt;&lt; Redo Analysis

**説明:** 同じ分析をやり直し新しいウィンドウに表示する。データが変更されていると分析結果は異なる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
obj << Redo Analysis;

```

#### Redo ByGroup Analysis

**構文:** obj &lt;&lt; Redo ByGroup Analysis

**説明:** 同じ分析をやり直し新しいウィンドウに表示する。データが変更されていると分析結果は異なる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	By( _bycol ),
	Run Model
);
obj[1] << Redo ByGroup Analysis;

```

#### Relaunch Analysis

**構文:** obj &lt;&lt; Relaunch Analysis

**説明:** プラットフォームの起動ウィンドウを開き、レポートを作成した時の設定を表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
obj << Relaunch Analysis;

```

#### Relaunch ByGroup

**構文:** obj &lt;&lt; Relaunch ByGroup

**説明:** プラットフォームの起動ウィンドウを開き、レポートを作成した時の設定を表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	By( _bycol ),
	Run Model
);
obj[1] << Relaunch ByGroup;

```

#### Remove Column Switcher

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

#### Remove Local Data Filter

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

#### Render Preset

**構文:** Render Preset( preset )

**説明:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

#### Report

**構文:** obj &lt;&lt; Report;Report( obj )

**説明:** レポートオブジェクトへの参照を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Report View

**構文:** obj &lt;&lt; Report View( "完全"|"要約" )

**説明:** レポートビューは、プラットフォームレポートの詳細を表示するかどうかを決定する。Fullはすべての詳細を表示し、Summaryはプラットフォームにより限定されたものだけを表示する。 動作をカスタマイズするため、各ディスプレイボックスは<<Set Summary Behaviorメッセージをサポートする。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**構文:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**説明:** 分析を再現するためのJSLスクリプトを作成し、データテーブルにテーブルプロパティとして保存する。スクリプトの名前を指定できる。Append Suffixオプションは、スクリプト名に数字の接尾辞を追加する。これにより、同名のスクリプトが存在していても区別できる。Promptオプションは、ユーザにスクリプト名の指定を促す。Replaceオプションは、同名の既存のスクリプトを置き換える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	By( _bycol ),
	Run Model
);
obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**構文:** obj &lt;&lt; Save ByGroup Script to Journal

**説明:** この分析を再現するJSLスクリプトを生成し、ジャーナルにそのスクリプトのボタンを追加する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	By( _bycol ),
	Run Model
);
obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**構文:** obj &lt;&lt; Save ByGroup Script to Script Window

**説明:** この分析を再現するJSLスクリプトを生成し、現在のスクリプトウィンドウに表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	By( _bycol ),
	Run Model
);
obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**構文:** obj &lt;&lt; Save Script for All Objects

**説明:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**構文:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**説明:** すべてのレポートオブジェクトを再現するスクリプトを現在のデータテーブルに保存する。このオプションは、ウィンドウ内にレポートが複数ある場合に便利。作成されるスクリプトの名前は、引用符で囲んで指定しない限り、1つ目のプラットフォーム名となる。

**例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	By( _bycol ),
	Run Model
);
obj[1] << Save Script for All Objects To Data Table;

```

**例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	By( _bycol ),
	Run Model
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**構文:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**説明:** この分析を再現するJSLスクリプトを生成し、データテーブルのテーブルプロパティとして保存する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**構文:** obj &lt;&lt; Save Script to Journal

**説明:** この分析を再現するJSLスクリプトを生成し、ジャーナルにそのスクリプトのボタンを追加する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
obj << Save Script to Journal;

```

#### Save Script to Report

**構文:** obj &lt;&lt; Save Script to Report

**説明:** この分析を再現するJSLスクリプトを生成し、レポートウィンドウに表示する。分析手順の記録を結果と一緒に残せる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
obj << Save Script to Report;

```

#### Save Script to Script Window

**構文:** obj &lt;&lt; Save Script to Script Window

**説明:** この分析を再現するJSLスクリプトを生成し、現在のスクリプトウィンドウに表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
obj << Save Script to Script Window;

```

#### SendToByGroup

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

#### SendToEmbeddedScriptable

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

#### SendToReport

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

#### Sync to Data Table Changes

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

#### Title

**構文:** obj &lt;&lt; Title( "new title" )

**説明:** プラットフォームのタイトルを設定する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
obj << Title( "My Platform" );

```

#### Top Report

**構文:** obj &lt;&lt; Top Report

**説明:** レポート内のルートノードへの参照を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Transform Column

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

#### View Web XML

**構文:** obj &lt;&lt; View Web XML

**説明:** インタラクティブHTMLレポートの作成に使うXMLコードを戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

#### Window View

**構文:** obj = Fit Proportional Hazards(...Window View( "Visible"|"Invisible"|"Private" )...)

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

### 列

#### By

**構文:** obj &lt;&lt; By( column(s) )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	By( _bycol ),
	Run Model
);

```

### 関連するコンストラクター

#### Fit Proportional Hazards

**構文:** Fit Model( Y( columns ), Effects( columns ), Personality( "Proportional Hazard" ), Censor( columns ) )

**説明:** セミパラメトリックな回帰モデルであるCoxの比例ハザードモデルをあてはめる。このモデルは説明変数が生存時間に及ぼす影響を、打ち切りを考慮しながら評価する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);

```

### 項目のメッセージ

#### Effect Summary

**構文:** obj &lt;&lt; Effect Summary( state=0|1 )

**説明:** 「効果の要約」レポートの表示/非表示を切り替える。「効果の要約」レポートでは、モデルの効果を対話的に変更できる。 デフォルトではオン。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
obj << Effect Summary( 0 );
Wait( 1 );
obj << Effect Summary( 1 );
Report( obj )["Effect Summary"] << Close( 0 );

```

#### FDR

**構文:** obj &lt;&lt; FDR( state=0|1 )

**説明:** 「効果の要約」表に表示するp値と対数価値を、偽発見率(FDR)にするかどうかを指定する。偽発見率は、多重性の調整をした指標の1つである。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
obj << FDR( 1 );
Report( obj )["Effect Summary"] << Close( 0 );

```

#### Hazard Ratios

**構文:** obj &lt;&lt; Hazard Ratios( state=0|1 )

**説明:** 「ハザード比」レポートの表示/非表示を切り替える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
obj << Hazard Ratios( 1 );

```

#### Likelihood Confidence Intervals

**構文:** obj &lt;&lt; Likelihood Confidence Intervals( state=0|1 )

**説明:** 「パラメータ推定値」表に表示する信頼区間の種類を指定する。このオプションを選択した場合はプロファイル尤度の信頼区間、それ以外の場合はWaldの信頼区間が表示される。このオプションは、プロファイル尤度の信頼区間の計算にかかる時間が長すぎない限り、デフォルトでオンになる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
obj << Likelihood Confidence Intervals( 1 );

```

#### Likelihood Ratio Tests

**構文:** obj &lt;&lt; Likelihood Ratio Tests( state=0|1 )

**説明:** 各効果に対する尤度比検定の表示/非表示を切り替える。尤度比検定では、あてはめたモデルの対数尤度と、効果の1つを除外したモデルの対数尤度を比較する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
obj << Likelihood Ratio Tests( 1 );

```

#### Model Dialog

**構文:** obj &lt;&lt; Model Dialog

**説明:** 現在の分析が設定された起動ダイアログを開く。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
obj << Model Dialog;

```

#### Wald Tests

**構文:** obj &lt;&lt; Wald Tests( state=0|1 )

**説明:** 各パラメータについて、「パラメータが0である」という帰無仮説に対するWald検定のカイ2乗検定統計量とp値の表示/非表示を切り替える。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
obj << Wald Tests( 0 );
Wait( 2 );
obj << Wald Tests( 1 );

```

## Fit Response Screening

### 共有されるメッセージ

#### Action

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

#### Apply Preset

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

#### Automatic Recalc

**構文:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**説明:** データの除外や変更があった場合に分析を自動的にやり直す。Automatic Recalcオプションがオンになっている場合で、データの除外や変更が再計算の前に確実に適用されるようにするには、Wait(0)コマンドを使用すること。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

#### Broadcast

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

#### Column Switcher

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

#### Copy ByGroup Script

**構文:** obj &lt;&lt; Copy ByGroup Script

**説明:** この分析を再現するJSLスクリプトを生成し、クリップボードにコピーする。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	By( _bycol ),
	Run
);
obj[1] << Copy ByGroup Script;

```

#### Copy Script

**構文:** obj &lt;&lt; Copy Script

**説明:** この分析を再現するJSLスクリプトを生成し、クリップボードにコピーする。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
obj << Copy Script;

```

#### Data Table Window

**構文:** obj &lt;&lt; Data Table Window

**説明:** この分析に使用したデータテーブルのウィンドウを手前に表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
obj << Data Table Window;

```

#### Get By Levels

**構文:** obj &lt;&lt; Get By Levels

**説明:** By列が指定されている場合、列名をキー、データ値を値とした連想配列を戻す。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

#### Get ByGroup Script

**構文:** obj &lt;&lt; Get ByGroup Script

**説明:** この分析を再現するスクリプト(JSL)を生成し、それを式として戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	By( _bycol ),
	Run
);
t = obj[1] << Get ByGroup Script;
Show( t );

```

#### Get Container

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
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Get Data Table

**構文:** obj &lt;&lt; Get Data Table

**説明:** データテーブルへの参照を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
t = obj << Get Datatable;
Show( N Rows( t ) );

```

#### Get Group Platform

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

#### Get Script

**構文:** obj &lt;&lt; Get Script

**説明:** この分析を再現するスクリプト(JSL)を生成し、それを式として戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
t = obj << Get Script;
Show( t );

```

#### Get Script With Data Table

**構文:** obj &lt;&lt; Get Script With Data Table

**説明:** この分析を再現するスクリプト(JSL)をデータテーブルへの参照も含めて生成し、それを式として戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
t = obj << Get Script With Data Table;
Show( t );

```

#### Get Timing

**構文:** obj &lt;&lt; Get Timing

**説明:** プラットフォームの起動にかかった時間を取得する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
t = obj << Get Timing;
Show( t );

```

#### Get Web Support

**構文:** obj &lt;&lt; Get Web Support

**説明:** ディスプレイオブジェクトにおけるインタラクティブHTMLサポートのレベルを数値で戻す。1は、一部または全部の要素がサポートされていることを示し、0は、サポートされないことを示す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

#### Get Where Expr

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

#### Ignore Platform Preferences

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

#### Local Data Filter

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

#### New JSL Preset

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

#### New Preset

**構文:** obj = New Preset()

**説明:** オブジェクトに適用されているオプションとカスタマイズをプリセットとしてまとめる。このオブジェクトをApply Presetに渡すことで、同じ種類のオブジェクトに設定をコピーすることができる。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

#### Paste Local Data Filter

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

#### Redo Analysis

**構文:** obj &lt;&lt; Redo Analysis

**説明:** 同じ分析をやり直し新しいウィンドウに表示する。データが変更されていると分析結果は異なる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
obj << Redo Analysis;

```

#### Redo ByGroup Analysis

**構文:** obj &lt;&lt; Redo ByGroup Analysis

**説明:** 同じ分析をやり直し新しいウィンドウに表示する。データが変更されていると分析結果は異なる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	By( _bycol ),
	Run
);
obj[1] << Redo ByGroup Analysis;

```

#### Relaunch Analysis

**構文:** obj &lt;&lt; Relaunch Analysis

**説明:** プラットフォームの起動ウィンドウを開き、レポートを作成した時の設定を表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
obj << Relaunch Analysis;

```

#### Relaunch ByGroup

**構文:** obj &lt;&lt; Relaunch ByGroup

**説明:** プラットフォームの起動ウィンドウを開き、レポートを作成した時の設定を表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	By( _bycol ),
	Run
);
obj[1] << Relaunch ByGroup;

```

#### Remove Column Switcher

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

#### Remove Local Data Filter

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

#### Render Preset

**構文:** Render Preset( preset )

**説明:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

#### Report

**構文:** obj &lt;&lt; Report;Report( obj )

**説明:** レポートオブジェクトへの参照を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Report View

**構文:** obj &lt;&lt; Report View( "完全"|"要約" )

**説明:** レポートビューは、プラットフォームレポートの詳細を表示するかどうかを決定する。Fullはすべての詳細を表示し、Summaryはプラットフォームにより限定されたものだけを表示する。 動作をカスタマイズするため、各ディスプレイボックスは<<Set Summary Behaviorメッセージをサポートする。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**構文:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**説明:** 分析を再現するためのJSLスクリプトを作成し、データテーブルにテーブルプロパティとして保存する。スクリプトの名前を指定できる。Append Suffixオプションは、スクリプト名に数字の接尾辞を追加する。これにより、同名のスクリプトが存在していても区別できる。Promptオプションは、ユーザにスクリプト名の指定を促す。Replaceオプションは、同名の既存のスクリプトを置き換える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**構文:** obj &lt;&lt; Save ByGroup Script to Journal

**説明:** この分析を再現するJSLスクリプトを生成し、ジャーナルにそのスクリプトのボタンを追加する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**構文:** obj &lt;&lt; Save ByGroup Script to Script Window

**説明:** この分析を再現するJSLスクリプトを生成し、現在のスクリプトウィンドウに表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**構文:** obj &lt;&lt; Save Script for All Objects

**説明:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**構文:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**説明:** すべてのレポートオブジェクトを再現するスクリプトを現在のデータテーブルに保存する。このオプションは、ウィンドウ内にレポートが複数ある場合に便利。作成されるスクリプトの名前は、引用符で囲んで指定しない限り、1つ目のプラットフォーム名となる。

**例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	By( _bycol ),
	Run
);
obj[1] << Save Script for All Objects To Data Table;

```

**例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	By( _bycol ),
	Run
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**構文:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**説明:** この分析を再現するJSLスクリプトを生成し、データテーブルのテーブルプロパティとして保存する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**構文:** obj &lt;&lt; Save Script to Journal

**説明:** この分析を再現するJSLスクリプトを生成し、ジャーナルにそのスクリプトのボタンを追加する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
obj << Save Script to Journal;

```

#### Save Script to Report

**構文:** obj &lt;&lt; Save Script to Report

**説明:** この分析を再現するJSLスクリプトを生成し、レポートウィンドウに表示する。分析手順の記録を結果と一緒に残せる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
obj << Save Script to Report;

```

#### Save Script to Script Window

**構文:** obj &lt;&lt; Save Script to Script Window

**説明:** この分析を再現するJSLスクリプトを生成し、現在のスクリプトウィンドウに表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
obj << Save Script to Script Window;

```

#### SendToByGroup

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

#### SendToEmbeddedScriptable

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

#### SendToReport

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

#### Sync to Data Table Changes

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

#### Title

**構文:** obj &lt;&lt; Title( "new title" )

**説明:** プラットフォームのタイトルを設定する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
obj << Title( "My Platform" );

```

#### Top Report

**構文:** obj &lt;&lt; Top Report

**説明:** レポート内のルートノードへの参照を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Transform Column

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

#### View Web XML

**構文:** obj &lt;&lt; View Web XML

**説明:** インタラクティブHTMLレポートの作成に使うXMLコードを戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

#### Window View

**構文:** obj = Fit Response Screening(...Window View( "Visible"|"Invisible"|"Private" )...)

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

### 関連するコンストラクター

#### Fit Response Screening

**構文:** Fit Model( Y( columns ), Effects( columns ), Personality( "Response Screening" ) )

**説明:** 応答変数が多数ある場合において、線形モデルの効果に対する検定を一度に行う。大量の検定結果および要約統計量が、データテーブルとプロットにまとめられて出力される。偽発見率(FDR)によって、検定の多重性を考慮し、本当は差がないのに「差がある」と誤って判断してしまう確率を抑えることができる。ロバストな推定法を使えば、外れ値が検定に及ぼす影響を小さくできる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);

```

### 項目のメッセージ

#### Effect Plots

**構文:** obj &lt;&lt; Effect Plots( state=0|1 )

**説明:** 「FDR P値 プロット 効果」と「FDR 対数価値 By 効果の大きさ」プロットの表示/非表示を切り替える。 デフォルトではオン。

**JMP追加されたバージョン:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run( Effect Plots( 0 ) )
);
Wait( 1 );
obj << Effect Plots( 1 );

```

#### Effect Tests

**構文:** obj &lt;&lt; Effect Tests( state=0|1 )

**説明:** 「効果の検定」表の表示/非表示を切り替える。 デフォルトではオン。

**JMP追加されたバージョン:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run( Effect Tests( 0 ) )
);
Wait( 1 );
obj << Effect Tests( 1 );

```

#### Force G Side

**構文:** Fit Model( Y( columns ), Effects( columns ), Personality( "Response Screening" ), Run( Force G Side ) )

**説明:** 変量効果行列の列数が行数より多い場合でも、変量効果の推定を、G側に基づく計算で実行する。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :season, :species * :season ),
	Random Effects( :subject[:species] ),
	Personality( "Response Screening" ),
	Run( Force G Side )
);

```

#### Force R Side

**構文:** Fit Model( Y( columns ), Effects( columns ), Personality( "Response Screening" ), Run( Force R Side ) )

**説明:** 変量効果行列の行数が列数より多い場合でも、変量効果の推定を、R側に基づく計算で実行する。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
obj = dt << Fit Model(
	Effects( :Sex ),
	Random Effects( Grouped( Column Group( "Markers" ) ) ),
	Personality( "Response Screening" ),
	Y( :Trait1 ),
	Run( Force R Side )
);

```

#### Least Squares Means

**構文:** obj &lt;&lt; Least Squares Means( state=0|1 )

**説明:** すべての最小2乗平均(最小2乗周辺平均)を計算する。

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Popcorn.jmp" );
obj = dt << Fit Model(
	Y( :yield ),
	Effects(
		:popcorn, :oil amt, :popcorn * :oil amt, :batch, :popcorn * :batch, :oil amt * :batch,
		:popcorn * :oil amt * :batch
	),
	Personality( "Response Screening" ),
	Run
);
Wait( 0 );
obj << Least Squares Means( 1 );

```

#### Model Dialog

**構文:** obj &lt;&lt; Model Dialog

**説明:** 現在の分析が設定された起動ダイアログを開く。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
obj << Model Dialog;

```

#### Overall Plots

**構文:** obj &lt;&lt; Overall Plots( state=0|1 )

**説明:** 「全体 FDR P値 プロット」と「FDR 対数価値 By R2乗」プロットの表示/非表示を切り替える。

**JMP追加されたバージョン:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
obj << Overall Plots( 1 );

```

#### Overall Report

**構文:** obj &lt;&lt; Overall Report( state=0|1 )

**説明:** 「モデル全体の適合度」表の表示/非表示を切り替える。

**JMP追加されたバージョン:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
Wait( 0 );
obj << Overall Report( 1 );

```

#### Save BLUPs

**構文:** obj &lt;&lt; Save BLUPs

**説明:** 新しいデータテーブルに、モデルの変量効果の最良線形不偏予測値(BLUP; Best Linear Unbiased Predictor)を保存する。

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Life Sciences/Genotypes Pedigree.jmp" );
obj = Fit Model(
	Y( :Trait1, :Trait2, :Trait3 ),
	Effects( :Sex ),
	Random Effects( Grouped( Column Group( "Markers" ) ) ),
	Personality( "Response Screening" ),
	Run
);
obj << Save BLUPs;

```

#### Save Conditional Predicted Values

**構文:** obj &lt;&lt; Save Conditional Predicted Values

**説明:** 最良線形不偏予測値(BLUP)を使って計算した条件付き予測値を保存する。応答列ごとにこれらの列は作成され、新しいデータテーブルに保存される。

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Life Sciences/Genotypes Pedigree.jmp" );
obj = Fit Model(
	Y( :Trait1, :Trait2, :Trait3 ),
	Effects( :Sex ),
	Random Effects( Grouped( Column Group( "Markers" ) ) ),
	Personality( "Response Screening" ),
	Run
);
obj << Save Conditional Predicted Values;

```

#### Save Conditional Prediction Formula

**構文:** obj &lt;&lt; Save Conditional Prediction Formula

**説明:** 変量効果も考慮した条件付き予測式を保存する。REML法による分析でのみ利用可能。応答列ごとにこれらの列は作成され、新しいデータテーブルに保存される。

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Life Sciences/Genotypes Pedigree.jmp" );
obj = Fit Model(
	Y( :Trait1, :Trait2, :Trait3 ),
	Effects( :Sex ),
	Random Effects( Grouped( Column Group( "Markers" ) ) ),
	Personality( "Response Screening" ),
	Run
);
obj << Save Conditional Prediction Formula;

```

#### Save Effect Tests

**構文:** obj &lt;&lt; Save Effect Tests

**説明:** 効果の検定を新しいデータテーブルに保存する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
obj << Save Effect Tests;

```

#### Save Estimates

**構文:** obj &lt;&lt; Save Estimates

**説明:** 各行に応答変数、各列にモデルの項をもつ新しいデータテーブルを作成する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
obj << Save Estimates;

```

#### Save LSMeans Differences

**構文:** obj &lt;&lt; Save LSMeans Differences

**説明:** 輪切りで得られる最小2乗平均を新しいデータテーブルに保存する。

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Big Class.jmp" );
obj = dt << Fit Model(
	Effects( :age, :sex, :age * :sex ),
	Personality( "Response Screening" ),
	Y( :height, :weight ),
	Sliced LSMeans Differences( 1 ),
	Run
);
obj << Save LSMeans Differences;

```

#### Save Least Squares Means

**構文:** obj &lt;&lt; Save Least Squares Means

**説明:** 最小2乗平均を新しいデータテーブルに保存する。

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Big Class.jmp" );
obj = dt << Fit Model(
	Y( :height, :weight ),
	Effects( :age, :sex ),
	Personality( "Response Screening" ),
	Run
);
obj << Save Least Squares Means;

```

#### Save Overall Fit

**構文:** obj &lt;&lt; Save Overall Fit

**説明:** 各行に応答変数を保存した新しいデータテーブルを作成する。列には、応答変数ごとに要約したモデルの適合度に関する情報が保存される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
obj << Save Overall Fit;

```

#### Save Predicted Values

**構文:** obj &lt;&lt; Save Predicted Values

**説明:** 応答の予測値をデータテーブルに保存する。応答列ごとにこれらの列は作成され、新しいデータテーブルに保存される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run( Save Predicted Values )
);

```

#### Save Prediction Formula

**構文:** obj &lt;&lt; Save Prediction Formula

**説明:** 応答の予測式をデータテーブルに保存する。応答列ごとにこれらの列は作成され、新しいデータテーブルに保存される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run( Save Prediction Formula )
);

```

#### Select Effects Where

**構文:** obj &lt;&lt; Select Effects Where( condition )

**説明:** 「条件による選択」ウィンドウを開く。このウィンドウで特定の条件を指定すると、「効果の検定」表で該当の行が選択される。

**JMP追加されたバージョン:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
obj << Select Effects Where( FDR Logworth > 4 );

```

#### Select Responses for Selected Effects

**構文:** obj &lt;&lt; Select Responses for Selected Effects

**説明:** 選択されている効果に対応する応答列を、分析対象となっている元のデータテーブルで選択する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run()
);
obj << Select Effects Where( FDR Logworth > 4 );
obj << Select Responses for Selected Effects;

```

#### Sliced LSMeans Differences

**構文:** obj &lt;&lt; Sliced LSMeans Differences( state=0|1 )

**説明:** 主効果と2因子・3因子の交互作用の輪切りについて、すべての最小2乗平均を比較する検定を計算する。

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Popcorn.jmp" );
obj = dt << Fit Model(
	Y( :yield ),
	Effects(
		:popcorn, :oil amt, :popcorn * :oil amt, :batch, :popcorn * :batch, :oil amt * :batch,
		:popcorn * :oil amt * :batch
	),
	Personality( "Response Screening" ),
	Run
);
Wait( 0 );
obj << Sliced LSMeans Differences( 1 );

```

#### Unthreaded

**構文:** Fit Model( Y( columns ), Effects( columns ), Personality( "Response Screening" ), Run( Unthreaded ) )

**説明:** 応答変数(およびスイッチ変数)間でマルチスレッドをオフにする。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
obj = dt << Fit Model(
	Effects( :Sex ),
	Random Effects( Grouped( Column Group( "Markers" ) ) ),
	Personality( "Response Screening" ),
	Y( :Trait1 ),
	Run( Unthreaded )
);

```

## Fit Stepwise

### 共有されるメッセージ

#### Action

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

#### Apply Preset

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

#### Automatic Recalc

**構文:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**説明:** データの除外や変更があった場合に分析を自動的にやり直す。Automatic Recalcオプションがオンになっている場合で、データの除外や変更が再計算の前に確実に適用されるようにするには、Wait(0)コマンドを使用すること。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

#### Broadcast

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

#### Column Switcher

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

#### Copy ByGroup Script

**構文:** obj &lt;&lt; Copy ByGroup Script

**説明:** この分析を再現するJSLスクリプトを生成し、クリップボードにコピーする。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	By( _bycol ),
	Run
);
obj << Finish;
obj[1] << Copy ByGroup Script;

```

#### Copy Script

**構文:** obj &lt;&lt; Copy Script

**説明:** この分析を再現するJSLスクリプトを生成し、クリップボードにコピーする。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
obj << Copy Script;

```

#### Data Table Window

**構文:** obj &lt;&lt; Data Table Window

**説明:** この分析に使用したデータテーブルのウィンドウを手前に表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
obj << Data Table Window;

```

#### Get By Levels

**構文:** obj &lt;&lt; Get By Levels

**説明:** By列が指定されている場合、列名をキー、データ値を値とした連想配列を戻す。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

#### Get ByGroup Script

**構文:** obj &lt;&lt; Get ByGroup Script

**説明:** この分析を再現するスクリプト(JSL)を生成し、それを式として戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	By( _bycol ),
	Run
);
obj << Finish;
t = obj[1] << Get ByGroup Script;
Show( t );

```

#### Get Container

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
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Get Data Table

**構文:** obj &lt;&lt; Get Data Table

**説明:** データテーブルへの参照を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
t = obj << Get Datatable;
Show( N Rows( t ) );

```

#### Get Group Platform

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

#### Get Script

**構文:** obj &lt;&lt; Get Script

**説明:** この分析を再現するスクリプト(JSL)を生成し、それを式として戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
t = obj << Get Script;
Show( t );

```

#### Get Script With Data Table

**構文:** obj &lt;&lt; Get Script With Data Table

**説明:** この分析を再現するスクリプト(JSL)をデータテーブルへの参照も含めて生成し、それを式として戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
t = obj << Get Script With Data Table;
Show( t );

```

#### Get Timing

**構文:** obj &lt;&lt; Get Timing

**説明:** プラットフォームの起動にかかった時間を取得する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
t = obj << Get Timing;
Show( t );

```

#### Get Web Support

**構文:** obj &lt;&lt; Get Web Support

**説明:** ディスプレイオブジェクトにおけるインタラクティブHTMLサポートのレベルを数値で戻す。1は、一部または全部の要素がサポートされていることを示し、0は、サポートされないことを示す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

#### Get Where Expr

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

#### Ignore Platform Preferences

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

#### Local Data Filter

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

#### New JSL Preset

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

#### New Preset

**構文:** obj = New Preset()

**説明:** オブジェクトに適用されているオプションとカスタマイズをプリセットとしてまとめる。このオブジェクトをApply Presetに渡すことで、同じ種類のオブジェクトに設定をコピーすることができる。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

#### Paste Local Data Filter

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

#### Redo Analysis

**構文:** obj &lt;&lt; Redo Analysis

**説明:** 同じ分析をやり直し新しいウィンドウに表示する。データが変更されていると分析結果は異なる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
obj << Redo Analysis;

```

#### Redo ByGroup Analysis

**構文:** obj &lt;&lt; Redo ByGroup Analysis

**説明:** 同じ分析をやり直し新しいウィンドウに表示する。データが変更されていると分析結果は異なる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	By( _bycol ),
	Run
);
obj << Finish;
obj[1] << Redo ByGroup Analysis;

```

#### Relaunch Analysis

**構文:** obj &lt;&lt; Relaunch Analysis

**説明:** プラットフォームの起動ウィンドウを開き、レポートを作成した時の設定を表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
obj << Relaunch Analysis;

```

#### Relaunch ByGroup

**構文:** obj &lt;&lt; Relaunch ByGroup

**説明:** プラットフォームの起動ウィンドウを開き、レポートを作成した時の設定を表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	By( _bycol ),
	Run
);
obj << Finish;
obj[1] << Relaunch ByGroup;

```

#### Remove Column Switcher

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

#### Remove Local Data Filter

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

#### Render Preset

**構文:** Render Preset( preset )

**説明:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

#### Report

**構文:** obj &lt;&lt; Report;Report( obj )

**説明:** レポートオブジェクトへの参照を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Report View

**構文:** obj &lt;&lt; Report View( "完全"|"要約" )

**説明:** レポートビューは、プラットフォームレポートの詳細を表示するかどうかを決定する。Fullはすべての詳細を表示し、Summaryはプラットフォームにより限定されたものだけを表示する。 動作をカスタマイズするため、各ディスプレイボックスは<<Set Summary Behaviorメッセージをサポートする。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**構文:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**説明:** 分析を再現するためのJSLスクリプトを作成し、データテーブルにテーブルプロパティとして保存する。スクリプトの名前を指定できる。Append Suffixオプションは、スクリプト名に数字の接尾辞を追加する。これにより、同名のスクリプトが存在していても区別できる。Promptオプションは、ユーザにスクリプト名の指定を促す。Replaceオプションは、同名の既存のスクリプトを置き換える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	By( _bycol ),
	Run
);
obj << Finish;
obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**構文:** obj &lt;&lt; Save ByGroup Script to Journal

**説明:** この分析を再現するJSLスクリプトを生成し、ジャーナルにそのスクリプトのボタンを追加する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	By( _bycol ),
	Run
);
obj << Finish;
obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**構文:** obj &lt;&lt; Save ByGroup Script to Script Window

**説明:** この分析を再現するJSLスクリプトを生成し、現在のスクリプトウィンドウに表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	By( _bycol ),
	Run
);
obj << Finish;
obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**構文:** obj &lt;&lt; Save Script for All Objects

**説明:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**構文:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**説明:** すべてのレポートオブジェクトを再現するスクリプトを現在のデータテーブルに保存する。このオプションは、ウィンドウ内にレポートが複数ある場合に便利。作成されるスクリプトの名前は、引用符で囲んで指定しない限り、1つ目のプラットフォーム名となる。

**例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	By( _bycol ),
	Run
);
obj << Finish;
obj[1] << Save Script for All Objects To Data Table;

```

**例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	By( _bycol ),
	Run
);
obj << Finish;
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**構文:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**説明:** この分析を再現するJSLスクリプトを生成し、データテーブルのテーブルプロパティとして保存する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**構文:** obj &lt;&lt; Save Script to Journal

**説明:** この分析を再現するJSLスクリプトを生成し、ジャーナルにそのスクリプトのボタンを追加する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
obj << Save Script to Journal;

```

#### Save Script to Report

**構文:** obj &lt;&lt; Save Script to Report

**説明:** この分析を再現するJSLスクリプトを生成し、レポートウィンドウに表示する。分析手順の記録を結果と一緒に残せる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
obj << Save Script to Report;

```

#### Save Script to Script Window

**構文:** obj &lt;&lt; Save Script to Script Window

**説明:** この分析を再現するJSLスクリプトを生成し、現在のスクリプトウィンドウに表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
obj << Save Script to Script Window;

```

#### SendToByGroup

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

#### SendToEmbeddedScriptable

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

#### SendToReport

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

#### Sync to Data Table Changes

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

#### Title

**構文:** obj &lt;&lt; Title( "new title" )

**説明:** プラットフォームのタイトルを設定する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
obj << Title( "My Platform" );

```

#### Top Report

**構文:** obj &lt;&lt; Top Report

**説明:** レポート内のルートノードへの参照を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Transform Column

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

#### View Web XML

**構文:** obj &lt;&lt; View Web XML

**説明:** インタラクティブHTMLレポートの作成に使うXMLコードを戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

#### Window View

**構文:** obj = Stepwise Personality(...Window View( "Visible"|"Invisible"|"Private" )...)

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

### 列

#### By

**構文:** obj &lt;&lt; By( column(s) )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	By( _bycol ),
	Run
);
obj << Finish;

```

### 関連するコンストラクター

#### Stepwise Personality

**構文:** Fit Model( Y( columns ), Effects( columns ), Personality( "Stepwise" ) )

**説明:** ステップワイズ法による変数選択を行う。この手法では、標準最小2乗法、順序ロジスティックモデル、2値応答の名義ロジスティックモデルにおいて、ステップワイズ法による変数選択を行える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;

```

### 項目のメッセージ

#### All Possible Models

**構文:** obj &lt;&lt; All Possible Models( max_terms, max_models, &lt;Heredity Restriction( state=0|1 )&gt; )

**説明:** 指定された上限までの、すべての項の組み合わせのモデルをあてはめ、各項数における最良のモデルを表示する。1つのモデルに含める最大項数を指定する。また、各項数で表示する最大モデル数も指定する。効果に強い親子関係が見られるモデルだけを表示することもできる。[すべてのモデル]オプションは、応答変数が連続尺度の場合のみ使用可能。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
Wait( 1 );
obj << All Possible Models( 5, 10 );

```

#### Backward Step

**構文:** obj &lt;&lt; Backward Step

**説明:** 最大のp値を持つ項をモデルから削除する。[閾値p値]の停止ルールが選択されている場合は、その項のp値が[変数を追加するときのp値]オプションで指定した閾値以上となっている場合だけ削除される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Enter All;
Wait( 1 );
obj << Backward Step;

```

#### Clear History

**構文:** obj &lt;&lt; Clear History

**説明:** ステップ履歴をクリアし、リセットする。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
Wait( 1 );
obj << Clear History;

```

#### Direction

**構文:** obj &lt;&lt; Direction( "変数増加"|"変数減少"|"変数増減" )

**説明:** ステップワイズ法においてどの方向にステップを進めるかを指定する。方向には、「変数増加」・「変数減少」・「変数増減」がある。「変数増減」を使用するには、停止ルールとして「閾値p値」を選択する必要がある。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Stopping Rule( "P-value Threshold" );
obj << Direction( "Mixed" );
obj << Finish;

```

#### Enter

**構文:** obj &lt;&lt; Enter( term )

**説明:** モデルに項を追加する。このオプションは、ロックされた項には適用されない。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Enter( :Runtime );

```

#### Enter All

**構文:** obj &lt;&lt; Enter All

**説明:** 可能な場合、すべての効果をモデルに入力する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run( Direction( "Backward" ) )
);
obj << Enter All;

```

#### Export Model With Validation

**構文:** obj &lt;&lt; Export Model With Validation( state=0|1 )

**説明:** [モデルの作成]オプションが選択されたときに「モデルの指定」ウィンドウに「検証」列を追加する。また、[モデルの実行]オプションが選択されたときに検証列を使ってモデルを実行する。このオプションは、検証列を指定した場合のみ使用可能。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Validation( :Validation ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
obj << Make Model;
Wait( 1 );
obj << Export Model With Validation( 0 );
obj << Make Model;

```

#### Finish

**構文:** obj &lt;&lt; Finish

**説明:** ステップワイズ選択の処理を、画面表示なしに即座に実行する。スクリプトでは、GoオプションではなくFinishオプションを使用することをお勧めします。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;

```

#### Forward Step

**構文:** obj &lt;&lt; Forward Step

**説明:** 最小のp値を持つ項をモデルに追加する。[閾値p値]の停止ルールが選択されている場合は、その項のp値が[変数を追加するときのp値]オプションで指定した閾値以下でなければならない。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
Wait( 1 );
obj << Forward Step;

```

#### Get Measures

**構文:** obj &lt;&lt; Get Measures

**説明:** あてはめたモデルの適合度指標を戻す。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
obj << Get Measures;

```

#### Get Prospectives

**構文:** obj &lt;&lt; Get Prospectives

**説明:** 推定値と信頼区間を含む連想配列を戻す。モデルに含まれている項の場合、それらの値は、現在のモデルにおけるもの。現在のモデルに含まれていない項の場合、それらの値は、現在のモデルにその項だけを追加したときのもの。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
Show(
	obj << Enter( :Runtime );
	obj << Get Prospectives;
);

```

#### Go

**構文:** obj &lt;&lt; Go

**説明:** ステップワイズ選択の処理を、画面表示しながらバッググランドで開始する。スクリプトでは、GoオプションではなくFinishオプションを使用することをお勧めします。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Go;

```

#### K-Fold Crossvalidation

**構文:** obj &lt;&lt; "K-Fold Crossvalidation"n( &lt;k&gt; )

**説明:** 変数選択においてK分割交差検証を実行する。このオプションを選択すると、設定パネルの[最大K分割R2乗]停止ルールが有効になる。「ステップワイズ法」プラットフォームの[K分割交差検証]は、標本をk個に分割し、それらを順に検証セットとして使用する。[K分割交差検証]オプションは、応答変数が連続尺度の場合のみ使用可能。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << "K-Fold Crossvalidation"n( 5 );
obj << Finish;

```

#### Lock

**構文:** obj &lt;&lt; Lock( term )

**説明:** 項をロックする。モデルに含まれていない項をロックすると、その項はモデルに追加できなくなる。モデルに含まれている項をロックすると、その項はモデルから削除できなくなる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Enter( :Runtime );
obj << Lock( :Runtime );

```

#### Make Model

**構文:** obj &lt;&lt; Make Model

**説明:** 「現在の推定値」表で指定されたモデルの「モデルのあてはめ」起動ウィンドウを開く。名義尺度または順序尺度の項がある場合は、[モデルの作成]オプションを選択すると、モデルに必要な項を含む一時的な変換列が作成される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
obj << Make Model;

```

#### Model Averaging

**構文:** obj &lt;&lt; Model Averaging( max_terms, AICc_cutoff )

**説明:** 最良のモデルを1つ選択するのではなく、複数のモデルの平均からモデルを作る。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
Wait( 1 );
obj << Model Averaging( 5, .90 );

```

#### Model Dialog

**構文:** obj &lt;&lt; Model Dialog

**説明:** 現在の分析が設定された起動ダイアログを開く。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
Wait( 1 );
obj << Model Dialog;

```

#### Plot Criterion History

**構文:** obj &lt;&lt; Plot Criterion History( state=0|1 )

**説明:** AICcとBICをパラメータ数に対してプロットする。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Stopping Rule( "P-value Threshold" );
obj << Direction( "Mixed" );
obj << Finish;
obj << Plot Criterion History( 1 );

```

#### Plot RSquare History

**構文:** obj &lt;&lt; Plot RSquare History( state=0|1 )

**説明:** 学習R2乗と検証R2乗をパラメータ数に対してプロットする。このオプションは、応答変数が連続尺度で、検証データがあるモデルにのみ使用可能。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << "K-Fold Crossvalidation"n( 5 );
obj << Finish;
obj << Plot RSquare History( 1 );

```

#### Prob to Enter

**構文:** obj &lt;&lt; Prob to Enter( number )

**説明:** 変数増加法および変数増減法において、モデルに項を追加する際の、p値に対する上限を指定する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Stopping Rule( "P-value Threshold" );
obj << Prob to Enter( .20 );
obj << Finish;

```

#### Prob to Leave

**構文:** obj &lt;&lt; Prob to Leave( number )

**説明:** 変数減少法および変数増減法において、モデルから項を削除する際の、p値に対する下限を指定する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Stopping Rule( "P-value Threshold" );
obj << Prob to Leave( .20 );
obj << Enter All;
obj << Direction( "Backward" );
obj << Finish;

```

#### Remove

**構文:** obj &lt;&lt; Remove( term )

**説明:** モデルから項を削除する。このオプションは、ロックされた項には適用されない。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
obj << Remove( :RunPulse );

```

#### Remove All

**構文:** obj &lt;&lt; Remove All

**説明:** モデルからすべての効果を削除する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
Wait( 1 );
obj << Remove All;

```

#### Rules

**構文:** obj &lt;&lt; Rules( "組み合わせ"|"制限"|"ルールなし"|"効果全体"|"効果全体 (親子関係を考慮)" )

**説明:** モデルの項に階層(親子関係)がある場合に適用されるルールを指定する。このオプションは、モデルに階層的な項が含まれている場合にのみ表示される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects(
		:Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse, :Weight * :Runtime,
		:Weight * :RunPulse, :Weight * :RstPulse, :Weight * :MaxPulse, :Runtime * :RunPulse,
		:RunPulse * :MaxPulse
	),
	Personality( "Stepwise" ),
	Run
);
obj << Rules( "Whole Effects" );
obj << Stopping Rule( "P-value Threshold" );
obj << Direction( "Mixed" );
obj << Finish;

```

#### Run Model

**構文:** obj &lt;&lt; Run Model

**説明:** 「現在の推定値」表で指定されたモデルの「標準最小2乗」レポートを開く。名義尺度または順序尺度の項がある場合は、[モデルの作成]オプションを選択すると、モデルに必要な項を含む一時的な変換列が作成される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
obj << Run Model;

```

#### Step

**構文:** obj &lt;&lt; Step

**説明:** ステップワイズ選択において、現在のモデルに対してステップを1つ進める。Stepオプションは、項を1つずつ追加または削除する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
Wait( 1 );
obj << Step;

```

#### Stop

**構文:** obj &lt;&lt; Stop

**説明:** GoオプションまたはFinishオプションによって開始されたステップワイズ選択処理を停止する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
obj << Stop;

```

#### Stopping Rule

**構文:** obj &lt;&lt; Stopping Rule( "閾値p値"|"最小AICc"|"最小BIC"|"最大検証R2乗"|"最大K分割R2乗" )

**説明:** ステップワイズ法の処理(GoオプションまたはFinishオプションで実行される処理)を停止するルールを指定する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects(
		:Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse, :Weight * :Runtime,
		:Weight * :RunPulse, :Weight * :RstPulse, :Weight * :MaxPulse, :Runtime * :RunPulse,
		:RunPulse * :MaxPulse
	),
	Personality( "Stepwise" ),
	Run Model( Stopping Rule( "Minimum AICc" ) )
);
obj << Finish;

```

#### Unlock

**構文:** obj &lt;&lt; Unlock( term )

**説明:** 現在ロックされている項のロックを解除する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Enter( :Runtime );
obj << Lock( :Runtime );
Wait( 1 );
obj << Unlock( :Runtime );

```

## Fit Varcomp

### 共有されるメッセージ

#### Action

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

#### Apply Preset

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

#### Broadcast

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

#### Column Switcher

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

#### Copy ByGroup Script

**構文:** obj &lt;&lt; Copy ByGroup Script

**説明:** この分析を再現するJSLスクリプトを生成し、クリップボードにコピーする。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	By( _bycol ),
	Run
);
obj[1] << Copy ByGroup Script;

```

#### Copy Script

**構文:** obj &lt;&lt; Copy Script

**説明:** この分析を再現するJSLスクリプトを生成し、クリップボードにコピーする。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
);
obj << Copy Script;

```

#### Data Table Window

**構文:** obj &lt;&lt; Data Table Window

**説明:** この分析に使用したデータテーブルのウィンドウを手前に表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
);
obj << Data Table Window;

```

#### Get By Levels

**構文:** obj &lt;&lt; Get By Levels

**説明:** By列が指定されている場合、列名をキー、データ値を値とした連想配列を戻す。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

#### Get ByGroup Script

**構文:** obj &lt;&lt; Get ByGroup Script

**説明:** この分析を再現するスクリプト(JSL)を生成し、それを式として戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	By( _bycol ),
	Run
);
t = obj[1] << Get ByGroup Script;
Show( t );

```

#### Get Container

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
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
);
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Get Data Table

**構文:** obj &lt;&lt; Get Data Table

**説明:** データテーブルへの参照を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
);
t = obj << Get Datatable;
Show( N Rows( t ) );

```

#### Get Group Platform

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

#### Get Script

**構文:** obj &lt;&lt; Get Script

**説明:** この分析を再現するスクリプト(JSL)を生成し、それを式として戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
);
t = obj << Get Script;
Show( t );

```

#### Get Script With Data Table

**構文:** obj &lt;&lt; Get Script With Data Table

**説明:** この分析を再現するスクリプト(JSL)をデータテーブルへの参照も含めて生成し、それを式として戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
);
t = obj << Get Script With Data Table;
Show( t );

```

#### Get Timing

**構文:** obj &lt;&lt; Get Timing

**説明:** プラットフォームの起動にかかった時間を取得する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
);
t = obj << Get Timing;
Show( t );

```

#### Get Web Support

**構文:** obj &lt;&lt; Get Web Support

**説明:** ディスプレイオブジェクトにおけるインタラクティブHTMLサポートのレベルを数値で戻す。1は、一部または全部の要素がサポートされていることを示し、0は、サポートされないことを示す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

#### Get Where Expr

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

#### Ignore Platform Preferences

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

#### Local Data Filter

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

#### New JSL Preset

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

#### New Preset

**構文:** obj = New Preset()

**説明:** オブジェクトに適用されているオプションとカスタマイズをプリセットとしてまとめる。このオブジェクトをApply Presetに渡すことで、同じ種類のオブジェクトに設定をコピーすることができる。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

#### Paste Local Data Filter

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

#### Redo Analysis

**構文:** obj &lt;&lt; Redo Analysis

**説明:** 同じ分析をやり直し新しいウィンドウに表示する。データが変更されていると分析結果は異なる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
);
obj << Redo Analysis;

```

#### Redo ByGroup Analysis

**構文:** obj &lt;&lt; Redo ByGroup Analysis

**説明:** 同じ分析をやり直し新しいウィンドウに表示する。データが変更されていると分析結果は異なる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	By( _bycol ),
	Run
);
obj[1] << Redo ByGroup Analysis;

```

#### Relaunch Analysis

**構文:** obj &lt;&lt; Relaunch Analysis

**説明:** プラットフォームの起動ウィンドウを開き、レポートを作成した時の設定を表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
);
obj << Relaunch Analysis;

```

#### Relaunch ByGroup

**構文:** obj &lt;&lt; Relaunch ByGroup

**説明:** プラットフォームの起動ウィンドウを開き、レポートを作成した時の設定を表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	By( _bycol ),
	Run
);
obj[1] << Relaunch ByGroup;

```

#### Remove Column Switcher

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

#### Remove Local Data Filter

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

#### Render Preset

**構文:** Render Preset( preset )

**説明:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

#### Report

**構文:** obj &lt;&lt; Report;Report( obj )

**説明:** レポートオブジェクトへの参照を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Report View

**構文:** obj &lt;&lt; Report View( "完全"|"要約" )

**説明:** レポートビューは、プラットフォームレポートの詳細を表示するかどうかを決定する。Fullはすべての詳細を表示し、Summaryはプラットフォームにより限定されたものだけを表示する。 動作をカスタマイズするため、各ディスプレイボックスは<<Set Summary Behaviorメッセージをサポートする。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
);
obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**構文:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**説明:** 分析を再現するためのJSLスクリプトを作成し、データテーブルにテーブルプロパティとして保存する。スクリプトの名前を指定できる。Append Suffixオプションは、スクリプト名に数字の接尾辞を追加する。これにより、同名のスクリプトが存在していても区別できる。Promptオプションは、ユーザにスクリプト名の指定を促す。Replaceオプションは、同名の既存のスクリプトを置き換える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**構文:** obj &lt;&lt; Save ByGroup Script to Journal

**説明:** この分析を再現するJSLスクリプトを生成し、ジャーナルにそのスクリプトのボタンを追加する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**構文:** obj &lt;&lt; Save ByGroup Script to Script Window

**説明:** この分析を再現するJSLスクリプトを生成し、現在のスクリプトウィンドウに表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**構文:** obj &lt;&lt; Save Script for All Objects

**説明:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
);
obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**構文:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**説明:** すべてのレポートオブジェクトを再現するスクリプトを現在のデータテーブルに保存する。このオプションは、ウィンドウ内にレポートが複数ある場合に便利。作成されるスクリプトの名前は、引用符で囲んで指定しない限り、1つ目のプラットフォーム名となる。

**例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	By( _bycol ),
	Run
);
obj[1] << Save Script for All Objects To Data Table;

```

**例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	By( _bycol ),
	Run
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**構文:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**説明:** この分析を再現するJSLスクリプトを生成し、データテーブルのテーブルプロパティとして保存する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**構文:** obj &lt;&lt; Save Script to Journal

**説明:** この分析を再現するJSLスクリプトを生成し、ジャーナルにそのスクリプトのボタンを追加する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
);
obj << Save Script to Journal;

```

#### Save Script to Report

**構文:** obj &lt;&lt; Save Script to Report

**説明:** この分析を再現するJSLスクリプトを生成し、レポートウィンドウに表示する。分析手順の記録を結果と一緒に残せる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
);
obj << Save Script to Report;

```

#### Save Script to Script Window

**構文:** obj &lt;&lt; Save Script to Script Window

**説明:** この分析を再現するJSLスクリプトを生成し、現在のスクリプトウィンドウに表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
);
obj << Save Script to Script Window;

```

#### SendToByGroup

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

#### SendToEmbeddedScriptable

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

#### SendToReport

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

#### Sync to Data Table Changes

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

#### Title

**構文:** obj &lt;&lt; Title( "new title" )

**説明:** プラットフォームのタイトルを設定する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
);
obj << Title( "My Platform" );

```

#### Top Report

**構文:** obj &lt;&lt; Top Report

**説明:** レポート内のルートノードへの参照を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
);
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Transform Column

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

#### View Web XML

**構文:** obj &lt;&lt; View Web XML

**説明:** インタラクティブHTMLレポートの作成に使うXMLコードを戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

#### Window View

**構文:** obj = Estimate Only Variance Components(...Window View( "Visible"|"Invisible"|"Private" )...)

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

### 列

#### By

**構文:** obj &lt;&lt; By( column(s) )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	By( _bycol ),
	Run
);

```

### 関連するコンストラクター

#### Estimate Only Variance Components

**構文:** Fit Model( Y( columns ), Effects( columns ), Personality( "Standard Least Squares" ), Method( "REML" ), Estimate Only Variance Components( 1 ) )

**説明:** 指定のモデルでREML分析を実行し、モデルの分散成分を表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
);

```

### 項目のメッセージ

#### Get Random Effect Names

**構文:** obj &lt;&lt; Get Random Effect Names

**説明:** 変量効果の名前を戻す。REML分析で使用可能。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
);
vn = obj << Get Random Effect Names;
Show( vn );

```

#### Get Variance Components

**構文:** obj &lt;&lt; Get Variance Components

**説明:** 指定のモデルについて「モデルのあてはめ」プラットフォームで算出された分散成分を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
);
vc = obj << Get Variance Components;
Show( vc );

```

## Generalized Linear Mixed Model > Fit GLMM

### 項目のメッセージ

#### Between-Within Degrees of Freedom

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Between-Within Degrees of Freedom( state=0|1 ))

**説明:** Replaces the standard errors with unadjusted estimates and degrees of freedom to between-within based throughout the report. To use between-within degrees of freedom in a multiple comparisons report, you must select this option prior to adding a multiple comparisons report.

**JMP追加されたバージョン:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Repeated Measures Binomial.jmp" );
fm = Fit Model(
	Y( :No Headache, :Number of Patients ),
	Effects( :Treatment, :Week, :Treatment * :Week ),
	Personality( "Generalized Linear Mixed Model" ),
	Subject( :"Treatment(Clinic)"n ),
	Repeated Effects( :Week Continuous ),
	Repeated Structure( "AR(1)" ),
	Generalized Distribution( "Binomial" ),
	Link Function( "Logit" ),
	Run()
);
Wait( 1 );
fm << (Fit[1] << "Between-Within Degrees of Freedom"n( 1 ));

```

#### Conditional Contour Profiler

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Conditional Contour Profiler( state=0|1 ))

**説明:** 一度に2つの因子をグラフにした条件付き予測値の等高線プロファイルの表示/非表示を切り替える。このオプションは、モデルに連続尺度の効果が少なくとも2つと、変量効果が少なくとも1つ含まれている場合にのみ利用可能。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Design Experiment/Vinyl Data.jmp" );
fm = dt << Fit Model(
	Y( :thickness ),
	Effects(
		:m1 & RS & Mixture, :m2 & RS & Mixture, :m3 & RS & Mixture, :m1 * :m2, :m1 * :m3,
		:m1 * :extrusion rate, :m1 * :temperature, :m2 * :m3, :m2 * :extrusion rate,
		:m2 * :temperature, :m3 * :extrusion rate, :m3 * :temperature,
		:extrusion rate * :temperature
	),
	Random Effects( :Whole Plots ),
	No Intercept( 1 ),
	Center Polynomials( 0 ),
	NoBounds( 1 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Poisson" ),
	Run
);
Wait( 0 );
fm << (Fit[1] << Conditional Contour Profiler( 1 ));

```

#### Conditional Diagnostic Bundle

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Conditional Diagnostic Bundle( state=0|1 ))

**説明:** 一連の診断プロットの表示/非表示を切り替える。診断プロットは、回帰モデルが観測データにどの程度あてはまっているかを判断するのに役立つ。このオプションは、分布として[二項]が選択されている場合、またはモデルに変量効果がない場合には利用できない。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Manufacturing Defect Counts.jmp" );
fm = dt << Fit Model(
	Y( :Defect ),
	Effects( :Finishing Treatment ),
	Random Effects( :Lot, :Lot * :Finishing Treatment, :Lot * :Unit in Lot ),
	NoBounds( 1 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Poisson" ),
	Run
);
Wait( 1 );
fm << (fit[1] << Conditional Diagnostic Bundle( 1 ));

```

#### Conditional Mean CI

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Conditional Mean CI)

**説明:** 条件付き予測値の上側信頼限界および下側信頼限界をデータテーブルに保存する。信頼区間には、変量効果を含むモデルの変量効果の推定値が含まれる。2つの新しい列として、これらの列はデータテーブルに保存される。 このオプションは、モデルに少なくとも1つの変量効果がある場合のみ利用可能。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
fm << (Fit[1] << Conditional Mean CI);

```

#### Conditional Mixture Profiler

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Conditional Mixture Profiler( state=0|1 ))

**説明:** 条件付き予測値を三角図上に等高線として表した配合プロファイルの表示/非表示を切り替える。このオプションは、モデルに少なくとも1つの変量効果があり、3つ以上の因子に[配合効果]の属性が適用されている場合、または3つ以上の因子列に[配合]プロパティが適用されている場合にのみ利用可能。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Design Experiment/Vinyl Data.jmp" );
fm = dt << Fit Model(
	Y( :thickness ),
	Effects(
		:m1 & RS & Mixture, :m2 & RS & Mixture, :m3 & RS & Mixture, :m1 * :m2, :m1 * :m3,
		:m1 * :extrusion rate, :m1 * :temperature, :m2 * :m3, :m2 * :extrusion rate,
		:m2 * :temperature, :m3 * :extrusion rate, :m3 * :temperature,
		:extrusion rate * :temperature
	),
	Random Effects( :Whole Plots ),
	No Intercept( 1 ),
	Center Polynomials( 0 ),
	NoBounds( 1 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Poisson" ),
	Run
);
Wait( 0 );
fm << (Fit[1] << Conditional Mixture Profiler( 1 ));

```

#### Conditional Prediction Formula

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Conditional Prediction Formula)

**説明:** 条件付き平均の予測式を保存する。新しい計算式の列として、この列はデータテーブルに保存される。 このオプションは、モデルに少なくとも1つの変量効果がある場合のみ利用可能。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
fm << (Fit[1] << Conditional Prediction Formula);

```

#### Conditional Profiler

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Conditional Profiler( state=0|1 ))

**説明:** 予測プロファイルの表示/非表示を切り替える。予測プロファイルは、1因子ずつスライスしながら条件付き予測式を図示したものである。予測プロファイルでは、最適化を行える。 このオプションは、モデルに少なくとも1つの変量効果がある場合のみ利用可能。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
fm << (Fit[1] << Conditional Profiler( 1 ));

```

#### Conditional Surface Profiler

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Conditional Surface Profiler( state=0|1 ))

**説明:** 条件付き予測値を3次元空間上に表した曲面プロットの表示/非表示を切り替える。このオプションは、モデルに少なくとも2つの効果と少なくとも1つの変量効果がある場合のみ利用可能。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
fm << (Fit[1] << Conditional Surface Profiler( 1 ));

```

#### Containment Degrees of Freedom

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Containment Degrees of Freedom( state=0|1 ))

**説明:** Replaces the standard errors with unadjusted estimates and degrees of freedom to containment-based throughout the report. To use containment degrees of freedom in a multiple comparisons report, you must select this option prior to adding a multiple comparisons report.

**JMP追加されたバージョン:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
Wait( 1 );
fm << (Fit[1] << Containment Degrees of Freedom( 1 ));

```

#### Contour Profiler

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Contour Profiler( state=0|1 ))

**説明:** 一度に2つの因子をグラフにした周辺予測値の等高線プロファイルの表示/非表示を切り替える。このオプションは、モデルに連続尺度の固定効果が少なくとも2つ含まれている場合にのみ利用可能。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Design Experiment/Vinyl Data.jmp" );
fm = dt << Fit Model(
	Y( :thickness ),
	Effects(
		:m1 & RS & Mixture, :m2 & RS & Mixture, :m3 & RS & Mixture, :m1 * :m2, :m1 * :m3,
		:m1 * :extrusion rate, :m1 * :temperature, :m2 * :m3, :m2 * :extrusion rate,
		:m2 * :temperature, :m3 * :extrusion rate, :m3 * :temperature,
		:extrusion rate * :temperature
	),
	Random Effects( :Whole Plots ),
	No Intercept( 1 ),
	Center Polynomials( 0 ),
	NoBounds( 1 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Poisson" ),
	Run
);
Wait( 0 );
fm << (Fit[1] << Contour Profiler( 1 ));

```

#### Correlation of Fixed Effects

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Correlation of Fixed Effects( state=0|1 ))

**説明:** 固定効果の相関行列の表示/非表示を切り替える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
Wait( 1 );
fm << (Fit[1] << Correlation of Fixed Effects( 1 ));

```

#### Covariance of All Parameters

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Covariance of All Parameters( state=0|1 ))

**説明:** 固定効果および変量効果の両方の共分散行列の表示/非表示を切り替える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
Wait( 1 );
fm << (Fit[1] << Covariance of All Parameters( 1 ));

```

#### Covariance of Covariance Parameters

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Covariance of Covariance Parameters( state=0|1 ))

**説明:** 変量効果の共分散行列の表示/非表示を切り替える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
Wait( 1 );
fm << (Fit[1] << Covariance of Covariance Parameters( 1 ));

```

#### Covariance of Fixed Effects

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Covariance of Fixed Effects( state=0|1 ))

**説明:** 固定効果の共分散行列の表示/非表示を切り替える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
Wait( 1 );
fm << (Fit[1] << Covariance of Fixed Effects( 1 ));

```

#### Diagnostic Bundle

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Diagnostic Bundle( state=0|1 ))

**説明:** 一連の診断プロットの表示/非表示を切り替える。診断プロットは、回帰モデルが観測データにどの程度あてはまっているかを判断するのに役立つ。このオプションは、分布として[二項]が選択されている場合、またはモデルに変量効果がある場合には利用できない。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Manufacturing Defect Counts.jmp" );
fm = dt << Fit Model(
	Y( :Defect ),
	Effects( :Finishing Treatment ),
	NoBounds( 1 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Poisson" ),
	Run
);
Wait( 1 );
fm << (fit[1] << Diagnostic Bundle( 1 ));

```

#### Empirical Standard Errors

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Empirical Standard Errors( state=0|1 ))

**説明:** レポート全体において、サンドイッチ分散(ロバスト分散、経験的分散)に基づいて標準誤差を計算する。ただし、「多重比較」レポートでサンドイッチ推定値を求めるには、「多重比較」レポートを追加する前にこのオプションを選択しなければならない。

**JMP追加されたバージョン:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
Wait( 1 );
fm << (Fit[1] << Empirical Standard Errors( 1 ));

```

#### Fit Statistics

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Fit Statistics( state=0|1 ))

**説明:** モデルの設定や適合度統計量に関する情報をまとめた「適合度統計量」レポートと「モデルの要約」レポートの表示/非表示を切り替える。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run( Fit( Fit Statistics( 0 ) ) )
);
Wait( 1 );
fm << (Fit[1] << Fit Statistics( 1 ));

```

#### Fixed Effects Parameter Estimates

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Fixed Effects Parameter Estimates( state=0|1 ))

**説明:** 「固定効果のパラメータ推定値」表の表示/非表示を切り替える。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run( Fit( Fixed Effects Parameter Estimates( 0 ) ) )
);
Wait( 1 );
fm << (Fit[1] << Fixed Effects Parameter Estimates( 1 ));

```

#### Fixed Effects Tests

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Fixed Effects Tests( state=0|1 ))

**説明:** 「固定効果の検定」表の表示/非表示を切り替える。 このオプションは、モデルに少なくとも1つの固定効果がある場合のみ利用可能。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run( Fit( Fixed Effects Tests( 0 ) ) )
);
Wait( 1 );
fm << (Fit[1] << Fixed Effects Tests( 1 ));

```

#### Mean Confidence Interval

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Mean Confidence Interval)

**説明:** 応答変数の平均に対する両側信頼限界の下限・上限を保存する。2つの新しい列として、これらの列はデータテーブルに保存される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
fm << (Fit[1] << Mean Confidence Interval);

```

#### Mixture Profiler

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Mixture Profiler( state=0|1 ))

**説明:** 周辺予測値を三角図上に等高線として表した配合プロファイルの表示/非表示を切り替える。このオプションは、モデル内の3つ以上の因子に[配合効果]の属性が適用されている場合、または3つ以上の因子列に[配合]プロパティが適用されている場合のみ利用可能。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Design Experiment/Vinyl Data.jmp" );
fm = dt << Fit Model(
	Y( :thickness ),
	Effects(
		:m1 & RS & Mixture, :m2 & RS & Mixture, :m3 & RS & Mixture, :m1 * :m2, :m1 * :m3,
		:m1 * :extrusion rate, :m1 * :temperature, :m2 * :m3, :m2 * :extrusion rate,
		:m2 * :temperature, :m3 * :extrusion rate, :m3 * :temperature,
		:extrusion rate * :temperature
	),
	Random Effects( :Whole Plots ),
	No Intercept( 1 ),
	Center Polynomials( 0 ),
	NoBounds( 1 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Poisson" ),
	Run
);
Wait( 0 );
fm << (Fit[1] << Mixture Profiler( 1 ));

```

#### Multiple Comparisons

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Multiple Comparisons( Effect( effect ), &lt;options&gt; ))

**説明:** 最小2乗平均やユーザ定義の平均を、多重比較する。比較の方法として、全体平均との比較、コントロール群との比較、または、ペア比較を選択できる。 このオプションは、モデルに少なくとも1つの固定効果がある場合のみ利用可能。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Target Level( "Pass" ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
Wait( 1 );
fm << (fit[1] << Multiple Comparisons(
	Effect( :Program ),
	Least Squares Means Plot,
	Student's t( 1 )
));

```

#### Odds Ratios

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Odds Ratios( state=0|1 ))

**説明:** オッズ比の表示/非表示を切り替える。オッズ比としては、カテゴリカルな説明変数に対しては水準間のオッズ比を、連続尺度の説明変数に対しては単位オッズ比と範囲オッズ比を求める。

#### Prediction Formula

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Prediction Formula)

**説明:** 周辺平均の予測式の列をデータテーブルに保存する。新しい計算式の列として、この列はデータテーブルに保存される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
fm << (Fit[1] << Prediction Formula);

```

#### Prediction and Interval Formulas

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Prediction and Interval Formulas)

**説明:** データテーブルに新しい列を作成し、予測値と信頼限界の計算式を保存する。このオプションで作成される信頼限界の列には、予測プロファイルで使用されるプロパティも含まれる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
fm << (Fit[1] << Prediction and Interval Formulas);

```

#### Profiler

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Profiler( state=0|1 ))

**説明:** 予測プロファイルの表示/非表示を切り替える。予測プロファイルは、1因子ずつスライスしながら周辺予測式を図示したものである。予測プロファイルでは、最適化を行える。 このオプションは、モデルに少なくとも1つの固定効果がある場合のみ利用可能。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
fm << (Fit[1] << Profiler( 1 ));

```

#### Random Coefficients

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Random Coefficients( state=0|1 ))

**説明:** ランダム係数の推定値をまとめたレポートの表示/非表示を切り替える。 このオプションは、モデルに少なくとも1つの変量効果がある場合のみ利用可能。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run( Fit( Random Coefficients( 0 ) ) )
);
Wait( 1 );
fm << (Fit[1] << Random Coefficients( 1 ));
Report( fm )["Random Coefficients"] << Close( 0 );

```

#### Random Effects Covariance Parameter Estimates

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Random Effects Covariance Parameter Estimates( state=0|1 ))

**説明:** 「変量効果の共分散パラメータ推定値」表の表示/非表示を切り替える。 このオプションは、モデルに少なくとも1つの変量効果がある場合のみ利用可能。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run( Fit( Random Effects Covariance Parameter Estimates( 0 ) ) )
);
Wait( 1 );
fm << (Fit[1] << Random Effects Covariance Parameter Estimates( 1 ));

```

#### Random Effects Predictions

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Random Effects Predictions( state=0|1 ))

**説明:** 「変量効果の予測」表の表示/非表示を切り替える。 このオプションは、モデルに少なくとも1つの変量効果がある場合のみ利用可能。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
Wait( 1 );
fm << (Fit[1] << Random Effects Predictions( 1 ));

```

#### Save Conditional Residual Formula

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Save Conditional Residual Formula )

**説明:** 条件付き残差の計算式を保存する。条件付き残差は、Yから条件付き予測値を引いたもの。このオプションは、分布として[二項]を選択した場合、またはモデルに変量効果がある場合には利用できない。新しい計算式の列として、この列はデータテーブルに保存される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Manufacturing Defect Counts.jmp" );
fm = dt << Fit Model(
	Y( :Defect ),
	Effects( :Finishing Treatment ),
	Random Effects( :Lot, :Lot * :Finishing Treatment, :Lot * :Unit in Lot ),
	NoBounds( 1 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Poisson" ),
	Run
);
fm << (fit[1] << Save Conditional Residual Formula);

```

#### Save Residual Formula

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Save Residual Formula )

**説明:** 周辺残差の計算式を保存する。周辺残差は、Yから周辺平均の予測式を引いたもの。このオプションは、分布として[二項]を選択した場合には利用できない。新しい計算式の列として、この列はデータテーブルに保存される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Manufacturing Defect Counts.jmp" );
fm = dt << Fit Model(
	Y( :Defect ),
	Effects( :Finishing Treatment ),
	Random Effects( :Lot, :Lot * :Finishing Treatment, :Lot * :Unit in Lot ),
	NoBounds( 1 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Poisson" ),
	Run
);
fm << (fit[1] << Save Residual Formula);

```

#### Save Simulation Formula

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Save Simulation Formula)

**説明:** 乱数を生成する計算式を含んだ列をデータテーブルに保存する。新しい列は、推定されたモデルに基づき、応答の乱数を生成する。[シミュレート]機能において、この計算式列を利用できる。このオプションは、By変数が使用されているときは利用できない。Byグループごとにシミュレーション計算式が必要な場合は、グループごとに分けたデータテーブルを使用する必要がある。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
fm << (Fit[1] << Save Simulation Formula);

```

#### Sequential Tests

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Sequential Tests( state=0|1 ))

**説明:** 「逐次(タイプ1)検定」レポートの表示/非表示を切り替える。このレポートには、モデルに1つずつ効果を順次追加したときの平方和が含まれる。 このオプションは、モデルに少なくとも1つの固定効果がある場合のみ利用可能。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
Wait( 1 );
fm << (Fit[1] << Sequential Tests( 1 ));

```

#### Standard Error of Conditional Predicted

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Standard Error of Conditional Predicted)

**説明:** 条件付き平均の予測値の標準誤差を保存する。新しい列として、この列はデータテーブルに保存される。 このオプションは、モデルに少なくとも1つの変量効果がある場合のみ利用可能。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
fm << (Fit[1] << Standard Error of Conditional Predicted);

```

#### Standard Error of Predicted

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Standard Error of Predicted)

**説明:** 周辺平均の予測値の標準誤差を保存する。新しい列として、この列はデータテーブルに保存される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
fm << (Fit[1] << Standard Error of Predicted);

```

#### Surface Profiler

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Surface Profiler( state=0|1 ))

**説明:** 周辺予測値を3次元空間上に表した曲面プロットの表示/非表示を切り替える。このオプションは、モデルに少なくとも2つの効果がある場合のみ利用可能。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
fm << (Fit[1] << Surface Profiler( 1 ));

```

## Generalized Linear Mixed Model

### 共有されるメッセージ

#### Action

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

#### Apply Preset

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

#### Broadcast

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

#### Column Switcher

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

#### Copy ByGroup Script

**構文:** obj &lt;&lt; Copy ByGroup Script

**説明:** この分析を再現するJSLスクリプトを生成し、クリップボードにコピーする。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	By( _bycol ),
	Run
);
obj[1] << Copy ByGroup Script;

```

#### Copy Script

**構文:** obj &lt;&lt; Copy Script

**説明:** この分析を再現するJSLスクリプトを生成し、クリップボードにコピーする。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
obj << Copy Script;

```

#### Data Table Window

**構文:** obj &lt;&lt; Data Table Window

**説明:** この分析に使用したデータテーブルのウィンドウを手前に表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
obj << Data Table Window;

```

#### Get By Levels

**構文:** obj &lt;&lt; Get By Levels

**説明:** By列が指定されている場合、列名をキー、データ値を値とした連想配列を戻す。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

#### Get ByGroup Script

**構文:** obj &lt;&lt; Get ByGroup Script

**説明:** この分析を再現するスクリプト(JSL)を生成し、それを式として戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	By( _bycol ),
	Run
);
t = obj[1] << Get ByGroup Script;
Show( t );

```

#### Get Container

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
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Get Data Table

**構文:** obj &lt;&lt; Get Data Table

**説明:** データテーブルへの参照を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
t = obj << Get Datatable;
Show( N Rows( t ) );

```

#### Get Group Platform

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

#### Get Script

**構文:** obj &lt;&lt; Get Script

**説明:** この分析を再現するスクリプト(JSL)を生成し、それを式として戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
t = obj << Get Script;
Show( t );

```

#### Get Script With Data Table

**構文:** obj &lt;&lt; Get Script With Data Table

**説明:** この分析を再現するスクリプト(JSL)をデータテーブルへの参照も含めて生成し、それを式として戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
t = obj << Get Script With Data Table;
Show( t );

```

#### Get Timing

**構文:** obj &lt;&lt; Get Timing

**説明:** プラットフォームの起動にかかった時間を取得する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
t = obj << Get Timing;
Show( t );

```

#### Get Web Support

**構文:** obj &lt;&lt; Get Web Support

**説明:** ディスプレイオブジェクトにおけるインタラクティブHTMLサポートのレベルを数値で戻す。1は、一部または全部の要素がサポートされていることを示し、0は、サポートされないことを示す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

#### Get Where Expr

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

#### Ignore Platform Preferences

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

#### Local Data Filter

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

#### New JSL Preset

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

#### New Preset

**構文:** obj = New Preset()

**説明:** オブジェクトに適用されているオプションとカスタマイズをプリセットとしてまとめる。このオブジェクトをApply Presetに渡すことで、同じ種類のオブジェクトに設定をコピーすることができる。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

#### Paste Local Data Filter

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

#### Redo Analysis

**構文:** obj &lt;&lt; Redo Analysis

**説明:** 同じ分析をやり直し新しいウィンドウに表示する。データが変更されていると分析結果は異なる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
obj << Redo Analysis;

```

#### Redo ByGroup Analysis

**構文:** obj &lt;&lt; Redo ByGroup Analysis

**説明:** 同じ分析をやり直し新しいウィンドウに表示する。データが変更されていると分析結果は異なる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	By( _bycol ),
	Run
);
obj[1] << Redo ByGroup Analysis;

```

#### Relaunch Analysis

**構文:** obj &lt;&lt; Relaunch Analysis

**説明:** プラットフォームの起動ウィンドウを開き、レポートを作成した時の設定を表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
obj << Relaunch Analysis;

```

#### Relaunch ByGroup

**構文:** obj &lt;&lt; Relaunch ByGroup

**説明:** プラットフォームの起動ウィンドウを開き、レポートを作成した時の設定を表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	By( _bycol ),
	Run
);
obj[1] << Relaunch ByGroup;

```

#### Remove Column Switcher

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

#### Remove Local Data Filter

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

#### Render Preset

**構文:** Render Preset( preset )

**説明:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

#### Report

**構文:** obj &lt;&lt; Report;Report( obj )

**説明:** レポートオブジェクトへの参照を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Report View

**構文:** obj &lt;&lt; Report View( "完全"|"要約" )

**説明:** レポートビューは、プラットフォームレポートの詳細を表示するかどうかを決定する。Fullはすべての詳細を表示し、Summaryはプラットフォームにより限定されたものだけを表示する。 動作をカスタマイズするため、各ディスプレイボックスは<<Set Summary Behaviorメッセージをサポートする。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**構文:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**説明:** 分析を再現するためのJSLスクリプトを作成し、データテーブルにテーブルプロパティとして保存する。スクリプトの名前を指定できる。Append Suffixオプションは、スクリプト名に数字の接尾辞を追加する。これにより、同名のスクリプトが存在していても区別できる。Promptオプションは、ユーザにスクリプト名の指定を促す。Replaceオプションは、同名の既存のスクリプトを置き換える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**構文:** obj &lt;&lt; Save ByGroup Script to Journal

**説明:** この分析を再現するJSLスクリプトを生成し、ジャーナルにそのスクリプトのボタンを追加する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**構文:** obj &lt;&lt; Save ByGroup Script to Script Window

**説明:** この分析を再現するJSLスクリプトを生成し、現在のスクリプトウィンドウに表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**構文:** obj &lt;&lt; Save Script for All Objects

**説明:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**構文:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**説明:** すべてのレポートオブジェクトを再現するスクリプトを現在のデータテーブルに保存する。このオプションは、ウィンドウ内にレポートが複数ある場合に便利。作成されるスクリプトの名前は、引用符で囲んで指定しない限り、1つ目のプラットフォーム名となる。

**例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	By( _bycol ),
	Run
);
obj[1] << Save Script for All Objects To Data Table;

```

**例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	By( _bycol ),
	Run
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**構文:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**説明:** この分析を再現するJSLスクリプトを生成し、データテーブルのテーブルプロパティとして保存する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**構文:** obj &lt;&lt; Save Script to Journal

**説明:** この分析を再現するJSLスクリプトを生成し、ジャーナルにそのスクリプトのボタンを追加する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
obj << Save Script to Journal;

```

#### Save Script to Report

**構文:** obj &lt;&lt; Save Script to Report

**説明:** この分析を再現するJSLスクリプトを生成し、レポートウィンドウに表示する。分析手順の記録を結果と一緒に残せる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
obj << Save Script to Report;

```

#### Save Script to Script Window

**構文:** obj &lt;&lt; Save Script to Script Window

**説明:** この分析を再現するJSLスクリプトを生成し、現在のスクリプトウィンドウに表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
obj << Save Script to Script Window;

```

#### SendToByGroup

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

#### SendToEmbeddedScriptable

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

#### SendToReport

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

#### Sync to Data Table Changes

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

#### Title

**構文:** obj &lt;&lt; Title( "new title" )

**説明:** プラットフォームのタイトルを設定する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
obj << Title( "My Platform" );

```

#### Top Report

**構文:** obj &lt;&lt; Top Report

**説明:** レポート内のルートノードへの参照を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Transform Column

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

#### View Web XML

**構文:** obj &lt;&lt; View Web XML

**説明:** インタラクティブHTMLレポートの作成に使うXMLコードを戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

#### Window View

**構文:** obj = Fit GLMM Platform(...Window View( "Visible"|"Invisible"|"Private" )...)

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

### 列

#### By

**構文:** obj &lt;&lt; By( column(s) )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	By( _bycol ),
	Run
);

```

### 関連するコンストラクター

#### Fit GLMM Platform

**構文:** Fit Model( Y( columns ), Effects( columns ), Personality( "Generalized Linear Mixed Model" ) )

**説明:** Fits a generalized linear mixed model. These models can be used for random coefficients, split-plots, and blocked designs when the response is non-Gaussian. The response distributions can accommodate continuous, categorical, count, and time-to-event response data.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);

```

### 項目のメッセージ

#### Fit

**構文:** Fit Model(...Run( Fit( options ) )...);obj &lt;&lt; Fit( options );obj &lt;&lt; (Fit[number] &lt;&lt; option)

**説明:** プラットフォームにメッセージを送ることができる。このオプションは、プラットフォームを呼び出すスクリプト中で用いるか、プラットフォームを一度、実行した後に特定のモデルへのハンドルを生成するために使用できる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run( Fit( Fit Statistics( 0 ) ) )
);
Wait( 1 );
fm << (Fit[1] << Fit Statistics( 1 ));

```

#### Model Dialog

**構文:** obj &lt;&lt; Model Dialog

**説明:** 現在の分析が設定された起動ダイアログを開く。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
fm << Model Dialog;

```

## Generalized Regression > Generalized Regression Fit

### 項目のメッセージ

#### Active Parameter Estimates

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Active Parameter Estimates( state=0|1 ))

**説明:** 現在選択されているモデルについて、ゼロになっていないパラメータ推定値の表示/非表示を切り替える。このオプションは、最尤法やリッジ回帰モデルでは使用できない。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
Wait( 1 );
fm << (fit[1] << Active Parameter Estimates( 1 ));

```

#### Confusion Matrix

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Confusion Matrix( &lt;probability=0.5&gt; ))

**説明:** 応答変数の実測値と分類値のクロス集計表を表示する。確率の閾値を0.5以外の値にするには、オプションの引数を使用する。このオプションは、分布として二項・多項・順序ロジスティックを指定した場合のみ使用可能。 デフォルトの値は"0.5"。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Binomial" ),
	Run(
		Fit(
			Estimation Method( "Logistic Regression" ),
			Validation Method( "None" ),
			Confusion Matrix( 0.5 )
		)
	)
);

```

#### Cook's D Influence

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Cook&apos;s D Influence)

**説明:** 元のデータテーブルに新しい列を作成し、CookのD距離を保存する。このオプションは、分布として正規分布を指定し、かつ、推定法として標準最小2乗を指定した場合のみ使用可能。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Run( Fit( Estimation Method( "Standard Least Squares" ) ) )
);
fm << (fit[1] << Cook's D Influence);

```

#### Correlation of Estimates

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Correlation of Estimates( state=0|1 ))

**説明:** 当該のあてはめ結果において、パラメータ推定値間の相関行列の表示/非表示を切り替える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
fm << (fit[1] << Correlation of Estimates);

```

#### Covariance of Estimates

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Covariance Of Estimates( state=0|1 ))

**説明:** 当該のあてはめ結果において、パラメータ推定値間の共分散行列の表示/非表示を切り替える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
fm << (fit[1] << Covariance of Estimates);

```

#### Custom Test

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Custom Test( [l1, l2, l3, ... ], &lt;Label( text )&gt; ))

**説明:** 「カスタム検定」レポートの表示/非表示を切り替える。「カスタム検定」は、分析者が自分の興味のある仮説を検定するための機能である。モデルに「パラメータ推定値の経路」がある場合は、パラメータ推定値を更新するとカスタム検定の結果も更新される。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :BMI, :BP, :LDL, :HDL, :TCH ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Run( Fit( Estimation Method( "Standard Least Squares" ) ) )
);
fm << (fit[1] << Custom Test( [0 0 0 1 -1 0], Label() ));

```

#### Decision Threshold

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Decision Threshold( state=0|1, Set Probability Threshold( number=0.5 ))

**説明:** 「分類の閾値」レポートの表示/非表示を切り替える。検証を用いた場合は、学習セット・検証セット・テストセットそれぞれに「分類の閾値」レポートが表示される。レポートには、各モデルの予測確率の分布を示すグラフ、各モデルの混同行列、およびモデルの適合度を比較するための分類グラフが含まれる。このオプションは、2値のカテゴリカルな応答にのみ使用可能。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Liver Cancer.jmp" );
fm = dt << Fit Model(
	Validation( :Validation ),
	Y( :Severity ),
	Effects(
		:BMI, :Age, :Time, :Markers, :Hepatitis, :Jaundice, :BMI * :Age, :BMI * :Time,
		:BMI * :Markers, :BMI * :Hepatitis, :BMI * :Jaundice, :Age * :Time, :Age * :Markers,
		:Age * :Hepatitis, :Age * :Jaundice, :Time * :Markers, :Time * :Hepatitis,
		:Time * :Jaundice, :Markers * :Hepatitis, :Markers * :Jaundice,
		:Hepatitis * :Jaundice
	),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Binomial" ),
	Run(
		Fit(
			Estimation Method( Elastic Net( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
Wait( 0 );
fm << (fit[1] << Decision Threshold( 1 ));

```

#### Diagnostic Bundle

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Diagnostic Bundle( state=0|1 ))

**説明:** 一連の診断プロットの表示/非表示を切り替える。診断プロットは、回帰モデルが観測データにどの程度あてはまっているかを判断するのに役立つ。検証セットとテストセットを使用している場合は、学習セットに加えて、それらのデータに対する診断プロットも表示される。分布として二項・多項・順序ロジスティック・Cox比例ハザードを指定した場合は使用できない。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Validation( :Validation ),
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Run( Fit( Estimation Method( "Lasso" ), Validation Method( "Validation Column" ) ) )
);
Wait( 1 );
fm << (fit[1] << Diagnostic Bundle( 1 ));

```

#### Distribution Profiler

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Distribution Profiler( state=0|1 ))

**説明:** 累積分布関数プロファイルの表示/非表示を切り替える。累積分布関数は、説明変数と応答変数に対する関数となっている。一番右のセルにて、応答変数の値を変更できる。このオプションは、分布として二項または分位点回帰を指定した場合は使用できない。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
Fit Model(
	Y( :satell ),
	Effects(
		:color, :spine, :width, :weight, :color * :spine, :color * :width, :color * :weight,
		:spine * :width, :spine * :weight, :width * :weight
	),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Poisson" ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "BIC" ),
			Distribution Profiler( 1 )
		)
	)
);

```

#### Effect Tests

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Effect Tests( state=0|1 ))

**説明:** 効果に対する検定の表示/非表示を切り替える。各効果に対する検定は、「その効果に関連するすべてのパラメータが0である」という帰無仮説を検定する。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
Wait( 1 );
fm << (fit[1] << Effect Tests( 0 ));

```

#### Get Prediction Formula

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Get Prediction Formula)

**説明:** 予測式の列を作成するスクリプトを戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
fm << (fit[1] << Get Prediction Formula);

```

#### Hats

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Hats)

**説明:** 元のデータテーブルに新しい列を作成し、ハット行列の対角要素(ハット値)を保存する。このオプションは、分布として正規分布が指定され、かつ、推定法として標準最小2乗が指定されている場合のみ使用可能。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Run( Fit( Estimation Method( "Standard Least Squares" ) ) )
);
fm << (fit[1] << Hats);

```

#### Hazard Profiler

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Hazard Profiler( state=0|1 ))

**説明:** ハザード関数ロファイルの表示/非表示を切り替える。ハザード関数は、説明変数と生存時間(応答変数)の関数となっている。生存時間は一番右のセルに表示される。このオプションは、分布として正規・指数・Weibull・対数正規・Cox比例ハザードを指定した場合のみ使用可能。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
Fit Model(
	Censor( :censor ),
	Censor Code( "1" ),
	Y( :Time ),
	Effects( :Cell Type, :Treatment, :Prior, :Age, :Diag Time, :KPS ),
	No Intercept,
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Cox Proportional Hazards" ),
	Run(
		Fit(
			Estimation Method( "Maximum Likelihood" ),
			Validation Method( "None" ),
			Hazard Profiler( 1 )
		)
	)
);

```

#### Hazard Ratios

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Hazard Ratios( state=0|1 ))

**説明:** ハザード比の表示/非表示を切り替える。ハザード比としては、カテゴリカルな説明変数に対しては水準間のハザード比を、連続尺度の説明変数に対しては単位ハザード比と範囲ハザード比を求める。ハザード比は、2つの条件におけるハザードの比。このオプションは、分布としてCox比例ハザードを指定した場合のみ使用可能。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
Fit Model(
	Censor( :censor ),
	Censor Code( "1" ),
	Y( :Time ),
	Effects( :Cell Type, :Treatment, :Prior, :Age, :Diag Time, :KPS ),
	No Intercept,
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Cox Proportional Hazards" ),
	Run(
		Fit(
			Estimation Method( "Maximum Likelihood" ),
			Validation Method( "None" ),
			Hazard Ratios( 1 )
		)
	)
);

```

#### Hide Inactive Paths

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Hide Inactive Paths( state=0|1 ))

**説明:** 「パラメータ推定値の経路」プロットにおいて、現在アクティブでない経路を薄く表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
fm << (fit[1] << Hide Inactive Paths);

```

#### Incidence Rate Ratios

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Incidence Rate Ratios( state=0|1 ))

**説明:** 発生率比の表示/非表示を切り替える。発生率比としては、カテゴリカルな説明変数に対しては水準間の発生率比を、連続尺度の説明変数に対しては単位発生率比と範囲発生率比を求める。このオプションは、分布としてPoissonまたは負の二項を指定し、かつ、モデルに切片が含まれている場合のみ使用可能。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Poisson" ),
	Run(
		Fit(
			Estimation Method( "Maximum Likelihood" ),
			Validation Method( "None" ),
			Incidence Rate Ratios( 1 )
		)
	)
);

```

#### Inverse Prediction

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Inverse Prediction( Response( p1, p2, ... ), Term Value( effect1( value ), effect2( value ), ... ) ))

**説明:** Y変数および他のX変数の値から、該当のX変数を逆推定する。その信頼区間を求める。このオプションは、列の尺度がベクトルである説明変数を含む場合は使用できない。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
fm << (fit[1] << Inverse Prediction(
	Response( 200, 250, 300 ),
	Term Value(
		Age( 48.5181 ),
		Gender( "1" ),
		BMI( . ),
		BP( 94.6470135746607 ),
		Total Cholesterol( 189.140271493213 ),
		LDL( 115.439140271493 ),
		HDL( 49.7884615384615 ),
		TCH( 4.07024886877828 ),
		LTG( 4.64141085972851 ),
		Glucose( 91.2601809954751 )
	)
));

```

#### Lift Curve

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Lift Curve( state=0|1 ))

**説明:** リフトチャートの表示/非表示を切り替える。検証を用いた場合は、学習セット・検証セット・テストセットそれぞれのリフトチャートが表示される。このオプションは、分布として二項分布・多項分布・順序ロジスティック分布を指定した場合のみ使用可能。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Liver Cancer.jmp" );
fm = dt << Fit Model(
	Validation( :Validation ),
	Y( :Severity ),
	Effects(
		:BMI, :Age, :Time, :Markers, :Hepatitis, :Jaundice, :BMI * :Age, :BMI * :Time,
		:BMI * :Markers, :BMI * :Hepatitis, :BMI * :Jaundice, :Age * :Time, :Age * :Markers,
		:Age * :Hepatitis, :Age * :Jaundice, :Time * :Markers, :Time * :Hepatitis,
		:Time * :Jaundice, :Markers * :Hepatitis, :Markers * :Jaundice,
		:Hepatitis * :Jaundice
	),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Binomial" ),
	Run(
		Fit(
			Estimation Method( Elastic Net( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
Wait( 0 );
fm << (fit[1] << Lift Curve( 1 ));

```

#### Mean Confidence Interval

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Mean Confidence Interval)

**説明:** 元のデータテーブルに新しい計算式列を2つ作成し、応答の平均に対する両側95%信頼限界の下限・上限を保存する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
fm << (fit[1] << Save Prediction Formula);
fm << (fit[1] << Mean Confidence Interval);

```

#### Model Summary

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Model Summary( state=0|1 ))

**説明:** 「モデルの要約」レポートの表示/非表示を切り替える。このレポートには、モデルの指定や適合度統計量に関する情報が含まれる。このオプションを選択すると、該当するモデルの「推定値の詳細」レポートも表示される。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
Wait( 1 );
fm << (fit[1] << Model Summary( 0 ));

```

#### Multiple Comparisons

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Multiple Comparisons( Effect( effect ), &lt;options&gt; ))

**説明:** 最小2乗平均やユーザ定義の平均に対する多重比較を行う。多重比較としては、「全体平均との比較」、「コントロール群との比較」、「ペアの比較」を行う。このオプションは、列の尺度がベクトルである説明変数をモデルに含む場合や、カテゴリカルな説明変数がモデルにない場合には使用できない。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hollywood Movies.jmp" );
fm = dt << Fit Model(
	Y( :World Gross ),
	Effects( :Rotten Tomatoes Score, :Audience Score, :Theme, :Genre ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Gamma" ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "BIC" ),
			Multiple Comparisons(
				Effect( :Genre ),
				Comparisons with Overall Average(
					1,
					Comparisons with Overall Average Decision Chart(
						ANOM( 1, Point Options( "Show Needles" ) )
					)
				)
			)
		)
	),
	SendToReport(
		Dispatch( {}, "Parameter Estimates for Original Predictors", OutlineBox, Close( 1 ) )
	)
);

```

#### Normal Quantile Plot

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Normal Quantile Plot( state=0|1 ))

**説明:** 縦軸に正規分位点、横軸に標準化残差をプロットした図の表示/非表示を切り替える。検証を用いた場合は、学習セット・検証セット・テストセットのそれぞれに対してプロットが表示される。このオプションは、分布として正規分布を指定し、打ち切りがない場合のみ使用可能。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Run( Fit( Estimation Method( "Standard Least Squares" ) ) )
);
fm << (fit[1] << Normal Quantile Plot);

```

#### Odds Ratios

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Odds Ratios( state=0|1 ))

**説明:** オッズ比の表示/非表示を切り替える。オッズ比としては、カテゴリカルな説明変数に対しては水準間のオッズ比を、連続尺度の説明変数に対しては単位オッズ比と範囲オッズ比を求める。このオプションは、分布として二項を指定し、かつモデルに切片が含まれている場合のみ使用可能。このオプションは、尺度がベクトルである説明変数を含むモデルでは使用できない。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Binomial" ),
	Run(
		Fit(
			Estimation Method( "Logistic Regression" ),
			Validation Method( "None" ),
			Odds Ratios( 1 )
		)
	)
);

```

#### Parameter Estimates for Centered and Scaled Predictors

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Parameter Estimates for Centered and Scaled Predictors( state=0|1 ))

**説明:** 標準化したパラメータ推定値の表示/非表示を切り替える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
Wait( 1 );
fm << (fit[1] << Parameter Estimates for Centered and Scaled Predictors( 1 ));

```

#### Parameter Estimates for Original Predictors

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Parameter Estimates for Original Predictors( state=0|1 ))

**説明:** データの元のスケールに対するパラメータ推定値の表示/非表示を切り替える。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
Wait( 1 );
fm << (fit[1] << Parameter Estimates for Original Predictors( 0 ));

```

#### Plot Actual by Predicted

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Plot Actual By Predicted( state=0|1 ))

**説明:** 縦軸に実測値、横軸に予測値をプロットした散布図の表示/非表示を切り替える。検証を用いた場合は、学習セット・検証セット・テストセットのそれぞれに対してプロットが表示される。このオプションは、分布として二項・多項・順序ロジスティック・Cox比例ハザードを指定した場合は使用できない。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Validation( :Validation ),
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Run( Fit( Estimation Method( "Lasso" ), Validation Method( "Validation Column" ) ) )
);
fm << (fit[1] << Plot Actual by Predicted( 1 ));

```

#### Plot Baseline Survival and Hazard

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Plot Baseline Survival and Hazard( state=0|1 ))

**説明:** ベースライン生存関数とハザード関数を生存時間に対してプロットしたグラフの表示/非表示を切り替える。プロットの下には、ベースライン生存関数とハザード関数の表が表示される。このオプションは、Cox比例ハザードモデルを指定した場合のみ使用可能。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
Fit Model(
	Censor( :censor ),
	Censor Code( "1" ),
	Y( :Time ),
	Effects( :Cell Type, :Treatment, :Prior, :Age, :Diag Time, :KPS ),
	No Intercept,
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Cox Proportional Hazards" ),
	Run(
		Fit(
			Estimation Method( "Maximum Likelihood" ),
			Validation Method( "None" ),
			Plot Baseline Survival and Hazard( 1 )
		)
	)
);

```

#### Plot Residual by Predicted

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Plot Residual By Predicted( state=0|1 ))

**説明:** 縦軸に残差、横軸に予測値をプロットした散布図の表示/非表示を切り替える。検証を用いた場合は、学習セット・検証セット・テストセットのそれぞれに対してプロットが表示される。このオプションは、分布として二項・多項・順序ロジスティック・Cox比例ハザードを指定した場合は使用できない。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Validation( :Validation ),
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Run( Fit( Estimation Method( "Lasso" ), Validation Method( "Validation Column" ) ) )
);
fm << (fit[1] << Plot Residual by Predicted( 1 ));

```

#### Plot Residual by Predictor

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Plot Actual By Predictor( state=0|1 ))

**説明:** 縦軸に残差、横軸に予測値をプロットした散布図の表示/非表示を切り替える。検証を用いた場合は、学習セット・検証セット・テストセットのそれぞれに対してプロットが表示される。このオプションは、分布として二項・多項・順序ロジスティック・Cox比例ハザードを指定した場合は使用できない。また、このオプションは、尺度が「ベクトル」の説明変数を含むモデルでも使用できない。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Validation( :Validation ),
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Run( Fit( Estimation Method( "Lasso" ), Validation Method( "Validation Column" ) ) )
);
fm << (fit[1] << Plot Residual by Predictor( 1 ));

```

#### Precision Recall Curve

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Precision Recall Curve( state=0|1 ))

**説明:** PR曲線の表示/非表示を切り替える。PR曲線は、異なる閾値での適合率(precision)と再現率(precision)をプロットした曲線。検証を用いた場合は、学習セット・検証セット・テストセットのそれぞれに対してプロットが表示される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Liver Cancer.jmp" );
fm = dt << Fit Model(
	Validation( :Validation ),
	Y( :Severity ),
	Effects(
		:BMI, :Age, :Time, :Markers, :Hepatitis, :Jaundice, :BMI * :Age, :BMI * :Time,
		:BMI * :Markers, :BMI * :Hepatitis, :BMI * :Jaundice, :Age * :Time, :Age * :Markers,
		:Age * :Hepatitis, :Age * :Jaundice, :Time * :Markers, :Time * :Hepatitis,
		:Time * :Jaundice, :Markers * :Hepatitis, :Markers * :Jaundice,
		:Hepatitis * :Jaundice
	),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Binomial" ),
	Run(
		Fit(
			Estimation Method( Elastic Net( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
Wait( 0 );
fm << (fit[1] << Precision Recall Curve( 1 ));

```

#### Profiler

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Profiler( state=0|1 ))

**説明:** 予測プロファイルの表示/非表示を切り替える。パラメータ推定値がゼロで、かつ、ゼロ以外の係数を持つ交互作用項に関係していない説明変数は、プロファイルに表示されない。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
Fit Model(
	Y( :satell ),
	Effects(
		:color, :spine, :width, :weight, :color * :spine, :color * :width, :color * :weight,
		:spine * :width, :spine * :weight, :width * :weight
	),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Poisson" ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "BIC" ),
			Profiler( 1 )
		)
	)
);

```

#### Publish Prediction Formula

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Publish Prediction Formula)

**説明:** 予測式を作成するスクリプトを「計算式デポ」プラットフォームに発行する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
fm << (fit[1] << Publish Prediction Formula);

```

#### Quantile Profiler

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Quantile Profiler( state=0|1 ))

**説明:** 分位点関数プロファイルの表示/非表示を切り替える。分位点関数は、応答変数の値を予測するもので、説明変数と累積確率の関数となっている。累積確率は、「確率」として一番右のセルに表示される。このオプションは、分布として二項または分位点回帰を指定した場合は使用できない。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
Fit Model(
	Y( :satell ),
	Effects(
		:color, :spine, :width, :weight, :color * :spine, :color * :width, :color * :weight,
		:spine * :width, :spine * :weight, :width * :weight
	),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Poisson" ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "BIC" ),
			Quantile Profiler( 1 )
		)
	)
);

```

#### ROC Curve

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; ROC Curve( state=0|1 ))

**説明:** ROC曲線(受診者動作特性曲線) の表示/非表示を切り替える。検証を用いた場合は、学習セット・検証セット・テストセットそれぞれのROC曲線が表示される。このオプションは、分布として二項分布・多項分布・順序ロジスティック分布を指定した場合のみ使用可能。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Liver Cancer.jmp" );
fm = dt << Fit Model(
	Validation( :Validation ),
	Y( :Severity ),
	Effects(
		:BMI, :Age, :Time, :Markers, :Hepatitis, :Jaundice, :BMI * :Age, :BMI * :Time,
		:BMI * :Markers, :BMI * :Hepatitis, :BMI * :Jaundice, :Age * :Time, :Age * :Markers,
		:Age * :Hepatitis, :Age * :Jaundice, :Time * :Markers, :Time * :Hepatitis,
		:Time * :Jaundice, :Markers * :Hepatitis, :Markers * :Jaundice,
		:Hepatitis * :Jaundice
	),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Binomial" ),
	Run(
		Fit(
			Estimation Method( Elastic Net( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
Wait( 0 );
fm << (fit[1] << ROC Curve( 1 ));

```

#### Relaunch Active Main Effects and Full Factorial

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Relaunch Active Main Effects and Full Factorial)

**説明:** 「モデルのあてはめ」起動ウィンドウを開き、「モデル効果の構成」リストにゼロではないパラメータ推定値を持つ項(アクティブな項)を表示する。起動ウィンドウのその他の設定には、元の分析で使用された設定が適用される。「モデル効果の構成」リストには、ゼロではない効果とそれらの完全実施要因モデルが含まれる。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
fm << (fit[1] << Relaunch Active Main Effects and Full Factorial);

```

#### Relaunch Active Main Effects and Response Surface Model

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Relaunch Active Main Effects and Response Surface Model)

**説明:** 「モデルのあてはめ」起動ウィンドウを開き、「モデル効果の構成」リストにゼロではないパラメータ推定値を持つ項(アクティブな項)を表示する。起動ウィンドウのその他の設定には、元の分析で使用された設定が適用される。「モデル効果の構成」リストには、ゼロではない効果とそれらの応答曲面モデルが含まれる。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
fm << (fit[1] << Relaunch Active Main Effects and Response Surface Model);

```

#### Relaunch Active Main Effects and Second Degree Factorial

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Relaunch Active Main Effects and Second Degree Factorial)

**説明:** 「モデルのあてはめ」起動ウィンドウを開き、「モデル効果の構成」リストにゼロではないパラメータ推定値を持つ項(アクティブな項)を表示する。起動ウィンドウのその他の設定には、元の分析で使用された設定が適用される。「モデル効果の構成」リストには、ゼロではない効果とそれらの2次交互作用が含まれる。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
fm << (fit[1] << Relaunch Active Main Effects and Second Degree Factorial);

```

#### Relaunch Active Main Effects and Second Degree Polynomial

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Relaunch Active Main Effects and Second Degree Polynomial)

**説明:** 「モデルのあてはめ」起動ウィンドウを開き、「モデル効果の構成」リストにゼロではないパラメータ推定値を持つ項(アクティブな項)を表示する。起動ウィンドウのその他の設定には、元の分析で使用された設定が適用される。「モデル効果の構成」リストには、ゼロではない効果とそれらの2次多項式が含まれる。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
fm << (fit[1] << Relaunch Active Main Effects and Second Degree Polynomial);

```

#### Relaunch Active Main Effects and Third Degree Factorial

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Relaunch Active Main Effects and Third Degree Factorial)

**説明:** 「モデルのあてはめ」起動ウィンドウを開き、「モデル効果の構成」リストにゼロではないパラメータ推定値を持つ項(アクティブな項)を表示する。起動ウィンドウのその他の設定には、元の分析で使用された設定が適用される。「モデル効果の構成」リストには、ゼロではない効果とそれらの3次までの交互作用が含まれる。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
fm << (fit[1] << Relaunch Active Main Effects and Third Degree Factorial);

```

#### Relaunch Active Main Effects and Third Degree Polynomial

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Relaunch Active Main Effects and Third Degree Polynomial)

**説明:** 「モデルのあてはめ」起動ウィンドウを開き、「モデル効果の構成」リストにゼロではないパラメータ推定値を持つ項(アクティブな項)を表示する。起動ウィンドウのその他の設定には、元の分析で使用された設定が適用される。「モデル効果の構成」リストには、ゼロではない効果とそれらの3次多項式が含まれる。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
fm << (fit[1] << Relaunch Active Main Effects and Third Degree Polynomial);

```

#### Relaunch with Active Effects

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Relaunch with Active Effects)

**説明:** 「モデルのあてはめ」起動ウィンドウを開き、「モデル効果の構成」リストに、ゼロではないパラメータ推定値を持つ項(アクティブな項)を表示する。起動ウィンドウのその他の設定には、元の分析で使用された設定が適用される。「モデル効果の構成」リストには、ゼロではない効果のみが含まれる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
fm << (fit[1] << Relaunch with Active Effects);

```

#### Remove Fit

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Remove Fit)

**説明:** 指定したあてはめをレポートから削除する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
fm = dt << Fit Model(
	Y( :Oxy ),
	Effects(
		:Weight, :Runtime, :RunPulse, :RstPulse, :MaxPulse, :Weight * :Runtime,
		:Weight * :RunPulse, :Weight * :RstPulse, :Weight * :MaxPulse, :Runtime * :RunPulse,
		:Runtime * :RstPulse, :Runtime * :MaxPulse, :RunPulse * :RstPulse,
		:RunPulse * :MaxPulse, :RstPulse * :MaxPulse
	),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Run( Fit( Estimation Method( Lasso( "Adaptive" ) ), Validation Method( "BIC" ) ) )
);
Wait( 2 );
fm << (fit[1] << Remove Fit);

```

#### Reset Solution

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Reset Solution)

**説明:** パラメータ推定値の経路において、最初のモデルにリセットする。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Validation( :Validation ),
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Run( Fit( Estimation Method( "Lasso" ), Validation Method( "Validation Column" ) ) )
);
Wait( 1 );
fm << (Fit[1] << Set Solution ID( 122 ));
Wait( 1 );
fm << (Fit[1] << Reset Solution);

```

#### Save Cox Snell Residual Formula

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Save Cox Snell Residual Formula)

**説明:** 元のデータテーブルに新しい計算式列を作成し、Cox-Snell残差の計算式を保存する。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
fm = dt << Fit Model(
	Censor( :censor ),
	Censor Code( "1" ),
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Cox Proportional Hazards" ),
	Run( Fit( Estimation Method( "Maximum Likelihood" ), Validation Method( "None" ) ) )
);
fm << (fit[1] << Save Cox Snell Residual Formula);

```

#### Save Distribution Formula

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Save Distribution Formula)

**説明:** 元のデータテーブルに新しい計算式列を作成し、累積分布関数の計算式を保存する。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Run( Fit( Estimation Method( Lasso( "Adaptive" ) ), Validation Method( "KFold", 5 ) ) )
);
fm << (Fit[1] << Save Distribution Formula);

```

#### Save Functional Prediction Formulas

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Save Functional Prediction Formulas)

**説明:** 応答変数が「関数データエクスプローラ」の関数主成分である場合に、それぞれ関数主成分に対する予測式を含む列を作成する。また、最後に、予測式(それらの関数主成分の予測式と固有関数との線形結合)も作成される。このオプションは、応答列に「FDE FPC 番号」列プロパティが含まれている場合のみ使用可能。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Simple Linear Functional Data.jmp" );
fobj = Functional Data Explorer(
	Y( :Y ),
	X( :T ),
	ID( :ID ),
	Z( :X1, :X2, :X3 ),
	B Splines( 1 )
);
dtsum = (Report( fobj )["Function Summaries"] << get scriptable object) << Save Summaries;
fobj << close window;
fm = dtsum << Fit Model(
	Y( :Y FPC 1, :Y FPC 2 ),
	Effects( :X1, :X2, :X3, :X1 * :X2, :X1 * :X3, :X2 * :X3 ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Run(
		Fit(
			Estimation Method( "Best Subset" ),
			Validation Method( "AICc" ),
			Enforce Heredity( 1 )
		)
	)
);
(Report( fm[1] )["Generalized Regression for Y FPC 1"][
"Normal Best Subset with AICc Validation"] << get scriptable object) <<
Save Functional Prediction Formulas;

```

#### Save Linear Predictor

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Save Linear Predictor)

**説明:** 元のデータテーブルに新しい計算式列を作成し、モデルにおける線形式の部分（計画行列での行ベクトルとパラメータ推定値のベクトルの内積）を求める式を保存する。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
fm = dt << Fit Model(
	Y( :satell ),
	Effects(
		:color, :spine, :width, :weight, :color * :spine, :color * :width, :color * :weight,
		:spine * :width, :spine * :weight, :width * :weight
	),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Poisson" ),
	Run( Fit( Estimation Method( Lasso( "Adaptive" ) ), Validation Method( "BIC" ) ) )
);
fm << (fit[1] << Save Prediction Formula);
fm << (fit[1] << Save Linear Predictor);

```

#### Save Martingale Residual Formula

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Save Martingale Residual Formula)

**説明:** 元のデータテーブルに新しい計算式列を作成し、Martingale残差の計算式を保存する。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
fm = dt << Fit Model(
	Censor( :censor ),
	Censor Code( "1" ),
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Cox Proportional Hazards" ),
	Run( Fit( Estimation Method( "Maximum Likelihood" ), Validation Method( "None" ) ) )
);
fm << (fit[1] << Save Martingale Residual Formula);

```

#### Save Prediction Formula

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Save Prediction Formula)

**説明:** 元のデータテーブルに新しい計算式列を作成し、標準化されていない観測データ値に基づく予測式を保存する。予測式に推定値がゼロである項は含まれない。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
fm << (fit[1] << Save Prediction Formula);

```

#### Save Resample Formulas

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Save Resample Formulas)

**説明:** 元のデータテーブルに、次に述べるような複数の計算式列を保存する。まず、「SVEM 標本」という列グループに、1つ1つの再抽出標本ごとに1つの計算列が含まれる。これらの列は、非表示の列として保存される。その次の列は、それらの予測値の平均を求める計算式。その次の列は、その標準誤差を求める計算式。最後の列には、それらの予測値の中央値を求める計算式。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run( Fit( Estimation Method( SVEM Forward Selection( Samples( 100 ) ) ) ) )
);
fm << (fit[1] << Save Resample Formulas);

```

#### Save Residual Formula

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Save Residual Formula)

**説明:** 元のデータテーブルに新しい計算式列を作成し、残差の計算式を保存する。残差は、Yから予測式を引いたもの。残差の計算式に推定値がゼロである項は含まれない。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
fm << (fit[1] << Save Residual Formula);

```

#### Save Simulation Formula

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Save Simulation Formula)

**説明:** 元のデータテーブルに新しい計算式列を作成し、あてはめたモデルのパラメータ推定値に基づく乱数を生成するための計算式を保存する。この列は、「シミュレーション」ユーティリティで切り替え先の列として使用できる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Run( Fit( Estimation Method( Lasso( "Adaptive" ) ), Validation Method( "KFold", 5 ) ) )
);
fm << (fit[1] << Save Simulation Formula);

```

#### Save Survival Formula

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Save Survival Formula)

**説明:** 元のデータテーブルに新しい計算式列を作成し、観測時点における生存確率の計算式を保存する。生存関数は、1から累積分布関数を引いたもの。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
fm = dt << Fit Model(
	Censor( :censor ),
	Censor Code( "1" ),
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Cox Proportional Hazards" ),
	Run( Fit( Estimation Method( "Maximum Likelihood" ), Validation Method( "None" ) ) )
);
fm << (fit[1] << Save Survival Formula);

```

#### Save Validation Column

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Save Validation Column)

**説明:** 元のデータテーブルに新しい列を作成し、データの各行がどの役割のデータに割り当てられたかを保存する。無作為抽出での分割(保留法による分割)では、この列は、各行が学習セットと検証セットのどちらに属するかを示す。K分割の場合、この列は、行がどの分割に割り当てられたかを示す。1つ取って置き法の場合、この列は、どの順序で除外されるかを示す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Run( Fit( Estimation Method( Lasso( "Adaptive" ) ), Validation Method( "KFold", 5 ) ) )
);
fm << (fit[1] << Save Validation Column);

```

#### Save Variance Formula

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Save Variance Formula)

**説明:** 元のデータテーブルに新しい計算式列を作成し、予測分散の計算式を保存する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
fm = dt << Fit Model(
	Y( :satell ),
	Effects(
		:color, :spine, :width, :weight, :color * :spine, :color * :width, :color * :weight,
		:spine * :width, :spine * :weight, :width * :weight
	),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Poisson" ),
	Run( Fit( Estimation Method( Lasso( "Adaptive" ) ), Validation Method( "BIC" ) ) )
);
fm << (fit[1] << Save Variance Formula);

```

#### Select Nonzero Terms

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Select Nonzero Terms)

**説明:** ゼロではない係数を持つ項を、レポート内で強調表示する。この時、データテーブル内でも、関連する列がすべて選択される。このオプションは、推定法としてリッジ回帰を指定した場合は使用できない。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
fm << (fit[1] << Select Nonzero Terms);

```

#### Select Zeroed Terms

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Select Zeroed Terms)

**説明:** ゼロではない係数を持つ項を、レポート内で強調表示する。この時、データテーブル内でも、関連する列がすべて選択される。このオプションは、推定法としてリッジ回帰を指定した場合は使用できない。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
fm << (fit[1] << Select Zeroed Terms);

```

#### Set Solution ID

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Set Solution ID( number ))

**説明:** モデルを、経路内の別のモデルに変更する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Validation( :Validation ),
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Run( Fit( Estimation Method( "Lasso" ), Validation Method( "Validation Column" ) ) )
);
Wait( 1 );
fm << (Fit[1] << Set Solution ID( 122 ));

```

#### Show Prediction Expression

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Show Prediction Expression( state=0|1 ))

**説明:** 「予測式」レポートの表示/非表示を切り替える。このレポートには、予測式が示されている。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
fm << (fit[1] << Show Prediction Expression);

```

#### Show Solution Path Summary

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Show Solution Path Summary( state=0|1 ))

**説明:** 「パラメータ推定値の経路」の2つのプロットでゼロでない効果が変化する点に対する、適合度統計量の表の表示/非表示を切り替える。このオプションは、最尤法やリッジ回帰モデルでは使用できない。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
Wait( 1 );
fm << (fit[1] << Show Solution Path Summary( 1 ));

```

#### Solution Path

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Solution Path( state=0|1 ))

**説明:** 「パラメータ推定値の経路」にある2つの図の表示/非表示を切り替える。このオプションは、最尤法では使用できない。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
Wait( 1 );
fm << (fit[1] << Solution Path( 0 ));

```

#### Std Error of Predicted

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Std Error of Predicted)

**説明:** 元のデータテーブルに新しい列を作成し、応答の平均に対する予測値の標準誤差を保存する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
fm << (fit[1] << Save Prediction Formula);
fm << (fit[1] << Std Error of Predicted);

```

#### Std Error of Predicted Formula

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Std Error of Predicted Formula)

**説明:** 元のデータテーブルに新しい計算式列を作成し、応答の平均に対する予測値の標準誤差を計算する式を保存する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit( Estimation Method( Lasso( Adaptive ) ), Validation Method( Validation Column ) )
	)
);
fm << (fit[1] << Save Prediction Formula);
fm << (fit[1] << Std Error of Predicted Formula);

```

#### Step Backward

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Step Backward)

**説明:** パラメータ推定値の経路において、次に小さいモデルに移動する。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Validation( :Validation ),
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Run( Fit( Estimation Method( "Lasso" ), Validation Method( "Validation Column" ) ) )
);
Wait( 1 );
fm << (Fit[1] << Step Backward);
Wait( 1 );
fm << (Fit[1] << Step Backward);

```

#### Step Forward

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Step Forward)

**説明:** パラメータ推定値の経路において、次に大きいモデルに移動する。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Validation( :Validation ),
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Run( Fit( Estimation Method( "Lasso" ), Validation Method( "Validation Column" ) ) )
);
Wait( 1 );
fm << (Fit[1] << Step Forward);
Wait( 1 );
fm << (Fit[1] << Step Forward);

```

#### Survival Profiler

**構文:** obj &lt;&lt; (fit[number] &lt;&lt; Survival Profiler( state=0|1 ))

**説明:** 生存関数プロファイルの表示/非表示を切り替える。生存関数は、説明変数と分位点(応答変数)の関数となっている。このオプションは、分布として正規・指数・Weibull・対数正規・Cox比例ハザードを指定した場合のみ使用可能。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
fm = dt << Fit Model(
	Censor( :censor ),
	Censor Code( "1" ),
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Cox Proportional Hazards" ),
	Run( Fit( Estimation Method( "Maximum Likelihood" ), Validation Method( "None" ) ) )
);
fm << (fit[1] << Survival Profiler( 1 ));

```

## Generalized Regression

### 共有されるメッセージ

#### Action

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

#### Apply Preset

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

#### Automatic Recalc

**構文:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**説明:** データの除外や変更があった場合に分析を自動的にやり直す。Automatic Recalcオプションがオンになっている場合で、データの除外や変更が再計算の前に確実に適用されるようにするには、Wait(0)コマンドを使用すること。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

#### Broadcast

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

#### Column Switcher

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

#### Copy ByGroup Script

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
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	),
	By( _bycol )
);
obj[1] << Copy ByGroup Script;

```

#### Copy Script

**構文:** obj &lt;&lt; Copy Script

**説明:** この分析を再現するJSLスクリプトを生成し、クリップボードにコピーする。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
obj << Copy Script;

```

#### Data Table Window

**構文:** obj &lt;&lt; Data Table Window

**説明:** この分析に使用したデータテーブルのウィンドウを手前に表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
obj << Data Table Window;

```

#### Get By Levels

**構文:** obj &lt;&lt; Get By Levels

**説明:** By列が指定されている場合、列名をキー、データ値を値とした連想配列を戻す。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

#### Get ByGroup Script

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
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	),
	By( _bycol )
);
t = obj[1] << Get ByGroup Script;
Show( t );

```

#### Get Container

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
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Get Data Table

**構文:** obj &lt;&lt; Get Data Table

**説明:** データテーブルへの参照を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
t = obj << Get Datatable;
Show( N Rows( t ) );

```

#### Get Group Platform

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

#### Get Script

**構文:** obj &lt;&lt; Get Script

**説明:** この分析を再現するスクリプト(JSL)を生成し、それを式として戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
t = obj << Get Script;
Show( t );

```

#### Get Script With Data Table

**構文:** obj &lt;&lt; Get Script With Data Table

**説明:** この分析を再現するスクリプト(JSL)をデータテーブルへの参照も含めて生成し、それを式として戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
t = obj << Get Script With Data Table;
Show( t );

```

#### Get Timing

**構文:** obj &lt;&lt; Get Timing

**説明:** プラットフォームの起動にかかった時間を取得する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
t = obj << Get Timing;
Show( t );

```

#### Get Web Support

**構文:** obj &lt;&lt; Get Web Support

**説明:** ディスプレイオブジェクトにおけるインタラクティブHTMLサポートのレベルを数値で戻す。1は、一部または全部の要素がサポートされていることを示し、0は、サポートされないことを示す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

#### Get Where Expr

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

#### Ignore Platform Preferences

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

#### Local Data Filter

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

#### New JSL Preset

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

#### New Preset

**構文:** obj = New Preset()

**説明:** オブジェクトに適用されているオプションとカスタマイズをプリセットとしてまとめる。このオブジェクトをApply Presetに渡すことで、同じ種類のオブジェクトに設定をコピーすることができる。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

#### Paste Local Data Filter

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

#### Redo Analysis

**構文:** obj &lt;&lt; Redo Analysis

**説明:** 同じ分析をやり直し新しいウィンドウに表示する。データが変更されていると分析結果は異なる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
obj << Redo Analysis;

```

#### Redo ByGroup Analysis

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
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	),
	By( _bycol )
);
obj[1] << Redo ByGroup Analysis;

```

#### Relaunch Analysis

**構文:** obj &lt;&lt; Relaunch Analysis

**説明:** プラットフォームの起動ウィンドウを開き、レポートを作成した時の設定を表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
obj << Relaunch Analysis;

```

#### Relaunch ByGroup

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
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	),
	By( _bycol )
);
obj[1] << Relaunch ByGroup;

```

#### Remove Column Switcher

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

#### Remove Local Data Filter

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

#### Render Preset

**構文:** Render Preset( preset )

**説明:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

#### Report

**構文:** obj &lt;&lt; Report;Report( obj )

**説明:** レポートオブジェクトへの参照を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Report View

**構文:** obj &lt;&lt; Report View( "完全"|"要約" )

**説明:** レポートビューは、プラットフォームレポートの詳細を表示するかどうかを決定する。Fullはすべての詳細を表示し、Summaryはプラットフォームにより限定されたものだけを表示する。 動作をカスタマイズするため、各ディスプレイボックスは<<Set Summary Behaviorメッセージをサポートする。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

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
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

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
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

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
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**構文:** obj &lt;&lt; Save Script for All Objects

**説明:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

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
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	),
	By( _bycol )
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
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**構文:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**説明:** この分析を再現するJSLスクリプトを生成し、データテーブルのテーブルプロパティとして保存する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**構文:** obj &lt;&lt; Save Script to Journal

**説明:** この分析を再現するJSLスクリプトを生成し、ジャーナルにそのスクリプトのボタンを追加する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
obj << Save Script to Journal;

```

#### Save Script to Report

**構文:** obj &lt;&lt; Save Script to Report

**説明:** この分析を再現するJSLスクリプトを生成し、レポートウィンドウに表示する。分析手順の記録を結果と一緒に残せる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
obj << Save Script to Report;

```

#### Save Script to Script Window

**構文:** obj &lt;&lt; Save Script to Script Window

**説明:** この分析を再現するJSLスクリプトを生成し、現在のスクリプトウィンドウに表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
obj << Save Script to Script Window;

```

#### SendToByGroup

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

#### SendToEmbeddedScriptable

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

#### SendToReport

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

#### Sync to Data Table Changes

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

#### Title

**構文:** obj &lt;&lt; Title( "new title" )

**説明:** プラットフォームのタイトルを設定する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
obj << Title( "My Platform" );

```

#### Top Report

**構文:** obj &lt;&lt; Top Report

**説明:** レポート内のルートノードへの参照を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Transform Column

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

#### View Web XML

**構文:** obj &lt;&lt; View Web XML

**説明:** インタラクティブHTMLレポートの作成に使うXMLコードを戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

#### Window View

**構文:** obj = Fit Generalized(...Window View( "Visible"|"Invisible"|"Private" )...)

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

### 列

#### By

**構文:** obj &lt;&lt; By( column(s) )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	),
	By( _bycol )
);

```

### 関連するコンストラクター

#### Fit Generalized

**構文:** Fit Model( Y( columns ), Effects( columns ), Personality( "Generalized Regression" ) )

**説明:** 罰則付き回帰手法を用いて一般化線形モデルをあてはめる。この手法では、オーバーフィットを回避しながら変数選択を自動化することができる。罰則付き回帰手法には、LASSO、適応型LASSO、弾性ネット、適応型弾性ネット、リッジ回帰がある。応答変数に設定できる変数としては、連続尺度の変数、カテゴリカルな変数、度数である変数、イベントまでの時間(生存時間や故障時間)がある。この機能は、回帰分析を適用するほとんどの状況で推奨される手法である。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);

```

### 項目のメッセージ

#### Fit

**構文:** obj &lt;&lt; Fit( Estimation Method( Emethod( estim_options ) ), Validation Method( Vmethod( valid_options ) ), &lt;Early Stopping&gt;, &lt;Enforce Heredity&gt;, &lt;Force( vector )&gt; )

**説明:** [推定法]のオプション、[検証法]のオプション、およびその他のあてはめに関するオプションを指定する。使用できる[推定法]のオプションは、指定された推定法によって異なる。[検証法]のオプションは、[K分割]と[保留]を選択したときに指定できる。その他のあてはめに関するオプションには、早期打ち切りを行うもの、項の親子関係を維持させるもの、モデルに項を強制的に含めるものがある。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	),
	SendToReport( Dispatch( {}, "Model Launch", OutlineBox, Close( 0 ) ) )
);

```

#### Get X Matrix

**構文:** obj &lt;&lt; Get X Matrix

**説明:** 計画行列(X行列)を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
As Table( fm << Get X Matrix );

```

#### Model Dialog

**構文:** obj &lt;&lt; Model Dialog

**説明:** 現在の分析が設定された起動ダイアログを開く。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
obj << Model Dialog;

```

#### Save Coding Table

**構文:** obj &lt;&lt; Save Coding Table

**説明:** 計画行列(デザイン行列)を含む新しいデータテーブルを作成する。この計画行列は、モデルの推定で用いられたコード変換に即したものである。最後の列には応答変数の値が保存される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Run
);
fm << Save Coding Table;

```

#### Set Random Seed

**構文:** obj = Fit Model(...Run( Set Random Seed( number ) )...)

**説明:** K分割や無作為抽出による検証で用いる乱数のシード値を設定する。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Run(
		Set Random Seed( 1111 ),
		Fit( Estimation Method( "Lasso" ), Validation Method( "Holdback", 0.3 ) )
	)
);

```

## Model Dialog

### 列

#### ID

**構文:** obj = Run(...&lt;ID( column )&gt;...)

**説明:** ゲノム関係行列の行および列を識別するためのラベルが含まれている列を指定する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects( :SILICA, :SILANE ),
	Personality( "Standard Least Squares" ),
	Run( Show Prediction Expression( 1 ) )
);
obj << Run;

```

#### Subgroup

**構文:** obj = Fit Model(...Personality( "Response Screening" ), Subgroup( column(s) )...)

**説明:** 1つまたは複数のサブグループ変数を指定する。サブグループ変数が指定された場合、そのサブグループ変数の水準ごとにも分析が行われる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Fit Model(
	Y( :age ),
	Effects( :sex, :type ),
	Subgroup( :country, :marital status ),
	Personality( "Response Screening" ),
	Subgroup Twoway( 1 ),
	Run
);

```

#### Switch

**構文:** obj = Fit Model(...Switch( column(s) )...)

**説明:** スイッチできる列を指定する。これらのスイッチ列は、1つずつモデルに含められる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects( :SILICA, :SILANE ),
	Personality( "Standard Least Squares" ),
	Run( Show Prediction Expression( 1 ) )
);
obj << Run;

```

### 項目のメッセージ

#### Cauchy Fit

**構文:** obj = Fit Model(...Personality( "Response Screening" ), Cauchy Fit( state=0|1 )...)

**説明:** 応答変数の誤差がCauchy分布に従っていると仮定する。Cauchy分布は正規分布よりも裾が厚く、そのため外れ値が推定に影響しにくい。「応答のスクリーニング」手法においてだけ使用できる。このメッセージは、「モデルのあてはめ」起動ウィンドウの[非常にロバストなあてはめ(Cauchy)]オプションに対応している。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
dt << Fit Model(
	Effects( :Process, :Site, :Process * :Site ),
	Personality( "Response Screening" ),
	Y( 8 :: 394 ),
	Cauchy Fit( 1 ),
	Run
);

```

#### Censor Code

**構文:** obj = Fit Model(...Censor Code( string )...)

**説明:** 該当のデータ行が右側打ち切りであることを示す値を指定する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Censor Code( "1" ),
	Run( Likelihood Ratio Tests( 1 ), Likelihood Confidence Intervals( 1 ) )
);

```

#### Center Polynomials

**構文:** obj = Fit Model(...Center Polynomials( state=0|1 )...)

**説明:** 多項式モデルの効果を中心化する。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects( :SILICA, :SILANE, :SILICA * :SILANE ),
	Center Polynomials( 0 ),
	Personality( "Standard Least Squares" ),
	Run
);

```

#### Centering

**構文:** obj = Fit Model(...Personality( "Partial Least Squares" ), Centering( state=0|1 )...)

**説明:** 各列から平均を差し引くことにより、すべての応答変数とモデル効果を中心化する。「PLS回帰」手法でのみ使用できる。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
dt << Fit Model(
	Y( :ls, :ha, :dt ),
	Effects( 5 :: 31 ),
	No Intercept( 1 ),
	Personality( "Partial Least Squares" ),
	Centering( 0 ),
	Run( Validation Method( KFold( 7 ) ), Fit( Method( NIPALS ) ), Number of Factors( 5 ) )
);

```

#### Choose High Target

**構文:** obj = Fit Model(...Personality( "Nominal Logistic" ), Choose High Target( state=0|1 )...)

**説明:** 応答変数が2値であるときに、ロジスティック回帰モデルで分子にくるほうの水準を指定する。「名義ロジスティック」手法で、応答変数が2値である時にだけ使用できる。このメッセージは、「モデルのあてはめ」起動ウィンドウの[イベントを示す水準]オプションに対応している。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Choose High Target( 1 ),
	Run( Likelihood Ratio Tests( 1 ), Wald Tests( 0 ), Logistic Plot( 1 ) )
);

```

#### Convergence Limit

**構文:** obj = Fit Model(...Convergence Limit( number=0.00000001 )...)

**説明:** モデル推定の最適化計算における収束基準を指定する。最適化反復計算の収束に時間がかかる場合は、この収束基準の値を大きくするとよい。デフォルトの収束基準は0.00000001。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Convergence Limit( 0.0001 ),
	Run
);

```

#### Create SAS Job

**構文:** obj &lt;&lt; Create SAS Job

**説明:** 現在のモデルの指定に対応いているSASコードを、SASプログラムウィンドウに保存する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects( :SILICA, :SILANE ),
	Personality( "Standard Least Squares" )
);
obj << Create SAS Job;

```

#### Dispose Reports

**構文:** obj = Fit Model(...Dispose Reports( state=0|1 )...)

**説明:** 各モデルのレポートを非表示にし、あてはめの処理後、それらをメモリからも削除する。何千もの応答変数がある場合、このオプションにより計算時間を短縮し、メモリも節約できる。このオプションを、Results in Data Tables(データテーブルに結果を出力する)オプションと一緒に使用すれば、あてはめたモデルの結果をデータテーブルに出力できる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Bands Data.jmp" );
obj = dt << Fit Model(
	Y(
		:grain screened, :proof on ctd ink, :blade mfg, :paper type, :ink type, :direct steam,
		:solvent type, :type on cylinder, :press type, :unit number, :cylinder size,
		:paper mill location, :plating tank
	),
	Effects( "Banding?"n ),
	Personality( "Nominal Logistic" ),
	Results in Data Tables( 1 ),
	Dispose Reports( 1 ),
	Run
);

```

#### Effects

**構文:** obj = Run(...Effects( col, col, ... )...);obj = Run(...Effects( macro( col, col, ... ) )...)

**説明:** 説明変数の項を設定する。これらの説明変数の項は、個別に指定していくか、「マクロ」機能を使って指定する。以下の各例を参照のこと。

**Scheffeの3次多項式**

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA\Big Class.jmp" );
dialog = dt << Fit Model( Y( :height ), Effects( Scheffe Cubic( :height, :weight ) ) );

```

**すべての組み合わせ**

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA\Big Class.jmp" );
dialog = dt << Fit Model( Y( :height ), Effects( Factorial Sorted( :sex, :age, :weight ) ) );

```

**効果**

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA\Big Class.jmp" );
dialog = dt << Fit Model( Y( :height ), Effects( :sex, :age, :weight ) );

```

**多項式の次数**

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA\Big Class.jmp" );
dialog = dt << Fit Model(
	Y( :height ),
	Set Degree( 5 ),
	Effects( Polynomial to Degree( :height, :weight ) )
);

```

**完全実施要因**

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA\Big Class.jmp" );
dialog = dt << Fit Model( Y( :height ), Effects( Full Factorial( :sex, :age, :weight ) ) );

```

**応答曲面**

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA\Big Class.jmp" );
dialog = dt << Fit Model( Y( :height ), Effects( Response Surface( :weight, :age ) ) );

```

**設定された次数まで**

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA\Big Class.jmp" );
dialog = dt << Fit Model(
	Y( :height ),
	Set Degree( 2 ),
	Effects( Factorial to Degree( :sex, :age, :weight ) )
);

```

**連続変数の複合化**

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA\Big Class.jmp" );
dialog = dt << Fit Model( Y( :height ), Effects( Grouped Regressors( :height, :weight ) ) );

```

**部分 3次**

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA\Big Class.jmp" );
dialog = dt << Fit Model( Y( :height ), Effects( Partial Cubic( :height, :weight ) ) );

```

**配合応答曲面**

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA\Big Class.jmp" );
dialog = dt << Fit Model(
	Y( :height ),
	Effects( Mixture Response Surface( :weight, :age ) )
);

```

#### Emphasis

**構文:** obj = Fit Model(...Personality( "Standard Least Squares" ), Emphasis( "Effect Leverage" | "Effect Screening" | "Minimal Report" )...)

**説明:** [標準最小2乗]手法で作成されるデフォルトのレポートにおいて、どのようなグラフや統計量を表示するかを指定する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects( :SILICA, :SILANE ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Screening" )
);
obj << Run Model;

```

#### Error Specification

**構文:** obj = Fit Model(...Personality("Standard Least Squares" ), Error Specification( "Default Estimate" | "Pure Error" | "Specified" )...)

**説明:** 「最小2乗法によるあてはめ」レポートの標準誤差と検定の計算に使用する誤差分散と誤差自由度を指定する。このオプションは、モデルに変量効果がなく、[標準最小2乗]手法を選択した場合にのみ利用可能。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects( :SILICA, :SILANE ),
	Center Polynomials( 0 ),
	Personality( "Standard Least Squares" ),
	Error Specification( "Pure Error" ),
	Run
);

```

#### Estimate Only Variance Components

**構文:** obj = Fit Model(...Personality( "Standard Least Squares" ), Estimate Only Variance Components( state=0|1 )...)

**説明:** 指定されたモデルを使ってREML分析を行った際に、モデルの分散成分のみを含んだレポートを表示する。[標準最小2乗]手法でのみ利用可能。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
);

```

#### Firth Bias-Adjusted Estimates

**構文:** obj = Fit Model(...Personality( "Generalized Linear Model" ), "Firth Bias-Adjusted Estimates"n( state=0|1 )...)

**説明:** モデルの推定にFirthバイアス補正法を用いる。[一般化線形モデル]手法でのみ利用可能。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	"Firth Bias-Adjusted Estimates"n( 1 ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);

```

#### Fit Separately

**構文:** obj = Fit Model(...Personality( "Standard Least Squares" ), Fit Separately( state=0|1 )...)

**説明:** 欠測値のない行すべてを使い、各Y変数に対して個別にモデルをあてはめる。このオプションは、モデルに複数のY変数があり、変量効果がなく、[標準最小2乗]手法を選択した場合にのみ利用可能。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Standard Least Squares" ),
	Fit Separately( 1 ),
	Run
);

```

#### GLM Distribution

**構文:** obj = Fit Model(...Personality( "Generalized Linear Model" ), GLM Distribution( distribution name )...)

**説明:** 応答変数の確率分布を指定する。[一般化線形モデル]手法でのみ利用可能。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Binomial" ),
	Link Function( "Logit" ),
	Run
);

```

#### Generalized Distribution

**構文:** obj = Fit Model(...Personality( "Generalized Regression" ), Generalized Distribution( distribution name )...)

**説明:** 応答変数の確率分布を指定する。[一般化回帰]手法でのみ利用可能。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Fit Model(
	Y( :height ),
	Effects( :weight, :sex ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Run(
		Fit(
			Estimation Method( "Maximum Likelihood" ),
			Validation Method( "None" ),
			Profiler( 1 )
		)
	)
);

```

#### Imputation Method

**構文:** obj = Fit Model(...Personality( "Partial Least Squares" ), Imputation Method( "Mean" | "EM" )...)

**説明:** 欠測値の補完方法を指定する。デフォルトでは、平均法が使用される。「PLS回帰」手法でのみ使用できる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << Fit Model(
	Y( :POP, :Max deg. F Jan ),
	Effects( :OZONE, :CO, :SO2, :NO, :PM10, :Lead ),
	No Intercept( 1 ),
	Center Polynomials( 0 ),
	Personality( "Partial Least Squares" ),
	Impute Missing Data( 1 ),
	Imputation Method( "EM" ),
	Run(
		Initial Number of Factors( 6 ),
		Validation Method( KFold( 7 ), Initial Number of Factors( 6 ) ),
		Fit( Method( NIPALS ), Number of Factors( 2 ) )
	)
);

```

#### Impute Missing Data

**構文:** obj = Fit Model(...Personality( "Partial Least Squares" ), Impute Missing Data( state=0|1 )...)

**説明:** 指定された補完法によって、Y列やX列の欠測値を非欠測値に置換する。「PLS回帰」手法でのみ使用できる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << Fit Model(
	Y( :POP, :Max deg. F Jan ),
	Effects( :OZONE, :CO, :SO2, :NO, :PM10, :Lead ),
	No Intercept( 1 ),
	Center Polynomials( 0 ),
	Personality( "Partial Least Squares" ),
	Impute Missing Data( 1 ),
	Run(
		Initial Number of Factors( 6 ),
		Validation Method( KFold( 7 ), Initial Number of Factors( 6 ) ),
		Fit( Method( NIPALS ), Number of Factors( 2 ) )
	)
);

```

#### Informative Missing

**構文:** obj = Fit Model(...Informative Missing( state=0|1 )...)

**説明:** 欠測値の補完およびコード化を有効にする。このオプションが選択されていない場合、欠測値のある行は無視される。



連続変数の場合、欠測値は変数の平均で置き換えられるとともに、欠測値に対する指数変数が作成され、モデルに含まれる。



カテゴリカル変数の場合、欠測値は補完されず、モデルにおいて変数の別の水準として扱われる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:height[3] = dt:age[2] = .;
dt << Fit Model(
	Y( :weight ),
	Effects( :height, :age ),
	Informative Missing( 1 ),
	Personality( "Standard Least Squares" ),
	Run
);

```

#### Keep dialog open

**構文:** obj &lt;&lt; Keep dialog open( state=0|1 )

**説明:** 「モデルのあてはめ」起動ウィンドウを、指定されたモデルの実行後も開いたままにするか、閉じるかを指定する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << Fit Model(
	Y( :ABRASION ),
	Effects( :SILICA, :SILANE ),
	Personality( "Standard Least Squares" ),
	Keep dialog open( 1 ),
	Run
);

```

#### Link Function

**構文:** obj = Fit Model(...Personality( "Generalized Linear Model" ), Link Function( link type )...)

**説明:** モデルのリンク関数を指定する。[一般化線形モデル]手法でのみ利用可能。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);

```

#### Max Iterations

**構文:** obj = Fit Model(...Personality( "Partial Least Squares" ), Max Iterations( number=1 )...)

**説明:** 欠測値補完のアルゴリズムで使用される反復計算に対して、その最大回数を設定する。欠損値に対する現在の推定値と1ステップ前の推定値との間の差が最大で10 ^ -8の場合、アルゴリズムは終了する。「PLS回帰」手法でのみ使用できる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << Fit Model(
	Y( :POP, :Max deg. F Jan ),
	Effects( :OZONE, :CO, :SO2, :NO, :PM10, :Lead ),
	No Intercept( 1 ),
	Center Polynomials( 0 ),
	Personality( "Partial Least Squares" ),
	Impute Missing Data( 1 ),
	Imputation Method( "EM" ),
	Max Iterations( 5 ),
	Run(
		Initial Number of Factors( 6 ),
		Validation Method( KFold( 7 ), Initial Number of Factors( 6 ) ),
		Fit( Method( NIPALS ), Number of Factors( 2 ) )
	)
);

```

#### Maximum Iterations

**構文:** obj = Fit Model(...Maximum Iterations( number=100 )...)

**説明:** モデル推定の最適化計算における反復最大回数を指定する。デフォルトの最大反復回数は100。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Maximum Iterations( 150 ),
	Run
);

```

#### Method

**構文:** obj = Fit Model(...Personality( "Standard Least Squares" ), Method( "EMS" | "REML" )...)

**説明:** [標準最小2乗]手法において、混合モデルの推定方法を指定する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	NoBounds( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Emphasis( "Minimal Report" ),
	Run
);

```

#### No Intercept

**構文:** obj = Fit Model(...No Intercept( state=0|1 )...)

**説明:** モデルの切片を0に設定する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects( :SILICA, :SILANE ),
	No Intercept( 1 ),
	Personality( "Standard Least Squares" ),
	Run
);

```

#### NoBounds

**構文:** obj = Fit Model(...Personality( "Standard Least Squares" ), NoBounds( state=0|1 )...)

**説明:** オンの場合、分散推定値が負になることを許す。オフの場合、分散推定値の下限を0とする。[標準最小2乗]手法でのみ利用可能。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	NoBounds( 0 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Emphasis( "Minimal Report" ),
	Run
);

```

#### Nominal Coding

**構文:** obj = Fit Model(...Nominal Coding( "Average Level" | "Last Level" )...)

**説明:** 名義尺度のコード変換について、全水準の平均からの差を表すか(デフォルト)、または最後の水準からの差を表すかを指定する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tablet Production.jmp" );
dt << Fit Model(
	Y( :Disso ),
	Effects(
		:Mill Time, :Screen Size, :Blend Time, :Blend Speed, :Compressor, :Coating Viscosity,
		:Spray Rate
	),
	Personality( "Standard Least Squares" ),
	Nominal Coding( "Last Level" ),
	Emphasis( "Effect Leverage" ),
	Run
);

```

#### Overdispersion Tests and Intervals

**構文:** obj = Fit Model(...Personality( "Generalized Linear Model" ), Overdispersion Tests and Intervals( state=0|1 )...)

**説明:** 過分散パラメータをモデルに含めるよう指定する。[一般化線形モデル]手法でのみ利用可能。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	Overdispersion Tests and Intervals( 1 ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);

```

#### Personality

**構文:** obj = Fit Model(...Personality( "Standard Least Sqaures" | "Stepwise" | "Generalized Regression" | "Mixed Model" | "Generalized Linear Mixed Model" | "Manova" | "Loglinear Variance" | "Nominal Logistic" | "Ordinal Logistic" | "Proportional Hazard" | "Parametric Survival" | "Generalized Linear Model" | "Partial Least Squares" | "Response Screening" )...)

**説明:** 「モデルのあてはめ」で用いる分析の種類を指定する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects( :SILICA, :SILANE ),
	Personality( "Standard Least Squares" )
);
obj << Run Model;

```

#### Power Link Parameter

**構文:** obj = Fit Model(...Personality( "Generalized Linear Model" ), Power Link Parameter( value=1 )...)

**説明:** [べき乗]リンク関数のパラメータを指定する。[一般化線形モデル]手法を使用し、リンク関数として[べき乗]を指定した場合にのみ利用可能。 デフォルトの値は"1"。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	Overdispersion Tests and Intervals( 1 ),
	GLM Distribution( "Poisson" ),
	Link Function( "Power" ),
	Power Link Parameter( 0.5 ),
	Run
);

```

#### Quantile

**構文:** obj = Fit Model(...Personality( "Generalized Regression" ), Generalized Distribution( "Quantile Regression" ), Quantile( q=0.5 )...)

**説明:** モデル化する応答変数の分位点を指定する。[一般化回帰]手法でのみ利用可能。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Fit Model(
	Y( :height ),
	Effects( :weight, :sex ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Quantile Regression" ),
	Quantile( 0.75 ),
	Run(
		Fit(
			Estimation Method( "Maximum Likelihood" ),
			Validation Method( "None" ),
			Profiler( 1 )
		)
	)
);

```

#### Results in Data Tables

**構文:** obj = Fit Model(...Results in Data Tables( state=0|1 )...)

**説明:** 複数の応答変数の、各モデルの結果をデータテーブルに出力する。作成されるデータテーブルの数や内容は、あてはめたモデルにより異なる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Bands Data.jmp" );
obj = dt << Fit Model(
	Y(
		:grain screened, :proof on ctd ink, :blade mfg, :paper type, :ink type, :direct steam,
		:solvent type, :type on cylinder, :press type, :unit number, :cylinder size,
		:paper mill location, :plating tank
	),
	Effects( "Banding?"n ),
	Personality( "Nominal Logistic" ),
	Results in Data Tables( 1 ),
	Run
);

```

#### Robust Fit

**構文:** obj = Fit Model(...Personality( "Response Screening" ), Robust Fit( state=0|1 )...)

**説明:** モデル推定をHuber推定で行う。Huber推定は、外れ値に対してロバストな推定方法である。外れ値がない場合、この推定結果は最小2乗法推定値に近くなる。「応答のスクリーニング」手法においてだけ使用できる。このメッセージは、「モデルのあてはめ」起動ウィンドウでの[ロバストなあてはめ(Huber)]オプションに対応する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
dt << Fit Model(
	Effects( :Process, :Site, :Process * :Site ),
	Personality( "Response Screening" ),
	Y( 8 :: 394 ),
	Robust Fit( 1 ),
	Run
);

```

#### Run

**構文:** obj = Fit Model(...Run( &lt;options&gt; )...);obj &lt;&lt; Run( &lt;options&gt; )

**説明:** 「モデルのあてはめ」起動ウィンドウで指定されたモデルを実行し、起動ウィンドウを閉じる。

**例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects( :SILICA, :SILANE ),
	Personality( "Standard Least Squares" ),
	Run( Show Prediction Expression( 1 ) )
);
obj << Run;

```

**例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects( :SILICA, :SILANE ),
	Personality( "Standard Least Squares" )
);
obj << Run;

```

#### Run Model

**構文:** obj &lt;&lt; Run Model

**説明:** 「モデルのあてはめ」起動ウィンドウで指定されたモデルを実行し、起動ウィンドウを開いたままにする。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects( :SILICA, :SILANE ),
	Personality( "Standard Least Squares" )
);
obj << Run Model;

```

#### Save to Data Table

**構文:** obj &lt;&lt; Save to Data Table

**説明:** モデルをJSLとして現在のデータテーブルに保存する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects( :SILICA, :SILANE ),
	Personality( "Standard Least Squares" )
);
obj << Save to DataTable;

```

#### Save to Script Window

**構文:** obj &lt;&lt; Save to Script Window

**説明:** モデルをJSLとしてスクリプトウィンドウに保存する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects( :SILICA, :SILANE ),
	Personality( "Standard Least Squares" )
);
obj << Save to Script Window;

```

#### Scaling

**構文:** obj = Fit Model(...Personality( "Partial Least Squares" ), Scaling( state=0|1 )...)

**説明:** 各列をその標準偏差で割ることにより、すべての応答変数とモデル効果を尺度化する。「PLS回帰」手法でのみ使用できる。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
dt << Fit Model(
	Y( :ls, :ha, :dt ),
	Effects( 5 :: 31 ),
	No Intercept( 1 ),
	Personality( "Partial Least Squares" ),
	Scaling( 0 ),
	Run( Validation Method( KFold( 7 ) ), Fit( Method( NIPALS ) ), Number of Factors( 5 ) )
);

```

#### Set Alpha Level

**構文:** obj = Fit Model(...Set Alpha Level( state=0|1 )...)

**説明:** モデルのレポートにおいて信頼区間の有意水準を指定する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects( :SILICA, :SILANE ),
	Center Polynomials( 0 ),
	Personality( "Standard Least Squares" ),
	Set Alpha Level( 0.01 ),
	Run
);

```

#### Standardize X

**構文:** obj = Fit Model(...Personality( "Partial Least Squares" ), Standardize X( state=0|1 )...)

**説明:** すべてのモデル効果を中心化および尺度化する。このオプションを選択しないと、高次の項の効果は、元のデータ列そのものから構成される。ただし、[中心化]や[尺度化]が指定された場合には、中心化や尺度化された列から高次の項の効果が構成される。この[Xの標準化]オプションは、Y変数は標準化しない。「PLS回帰」手法でのみ使用できる。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
dt << Fit Model(
	Y( :ls, :ha, :dt ),
	Effects( 5 :: 31 ),
	No Intercept( 1 ),
	Personality( "Partial Least Squares" ),
	Standardize X( 0 ),
	Run( Validation Method( KFold( 7 ) ), Fit( Method( NIPALS ) ), Number of Factors( 5 ) )
);

```

#### Subgroup Twoway

**構文:** obj = Fit Model(...Personality( "Response Screening" ), Subgroup( column(s) ), Subgroup Twoway( state=0|1 )...)

**説明:** 指定されたサブグループ変数の2変数の組み合わせでも、サブグループ化(層別化)する。このオプションは、少なくとも1つのサブグループ変数が定義されていて、[応答のスクリーニング]手法を選択した場合のみ利用可能。

**JMP追加されたバージョン:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Fit Model(
	Y( :age ),
	Effects( :sex, :type ),
	Subgroup( :country, :marital status ),
	Personality( "Response Screening" ),
	Subgroup Twoway( 1 ),
	Run
);

```

#### Suppress Coding

**構文:** obj = Fit Model(...Suppress Coding( state=0|1 )...)

**説明:** 「コード変換」列プロパティが指定されていても、その指定を無視して、元のスケールでの推定値を表示する。「コード変換」列プロパティは、推定値の比較をより容易にし、低次の効果に対する検定を意味のあるものにするのに有用である。［コード変換を適用しない］オプションは、必要な場合以外は推奨されない。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );
obj = dt << Fit Model(
	Y( :Stretch ),
	Effects( :Silica, :Sulfur, :Silane ),
	Suppress Coding( 1 ),
	Personality( "Standard Least Squares" ),
	Run
);

```

#### Suppress Reports

**構文:** obj = Fit Model(...Suppress Reports( state=0|1 )...)

**説明:** 各モデルのレポートを非表示にする。何千もの応答変数がある場合、このオプションにより計算時間を短縮できる。あてはめオブジェクトといくつかのメニュー項目は使用可能。Results in Data Tables(データテーブルに結果を出力する)オプションを指定すると、モデルのレポートがデータテーブルに出力される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Bands Data.jmp" );
obj = dt << Fit Model(
	Y(
		:grain screened, :proof on ctd ink, :blade mfg, :paper type, :ink type, :direct steam,
		:solvent type, :type on cylinder, :press type, :unit number, :cylinder size,
		:paper mill location, :plating tank
	),
	Effects( "Banding?"n ),
	Personality( "Nominal Logistic" ),
	Results in Data Tables( 1 ),
	Suppress Reports( 1 ),
	Run
);

```

#### Suppress Warning for Missing Effects

**構文:** obj = Fit Model(...Suppress Warning for Missing Effects( state=0|1 )...)

**説明:** 高次の効果から含めるべきだと考えられる低次の効果がモデルに含まれていない場合でも、警告アラートを表示しない。このオプションは、多くの候補モデルを実験的に試したい場合に有用である。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );
obj = dt << Fit Model(
	Y( :Stretch ),
	Effects( :Silica, :Sulfur * :Silane ),
	Suppress Warning for Missing Effects( 1 ),
	Personality( "Standard Least Squares" ),
	Run
);

```

#### Target Level

**構文:** obj = Fit Model(...Target Level( level )...)

**説明:** ロジスティック回帰において、モデル化したい確率の応答水準を指定する。デフォルトでは、応答変数を並び替えた時に後に来る水準がモデル化される。Y変数が2値かつ名義尺度で、特定の手法を選択した場合のみ利用可能。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Target Level( "Cured" ),
	Run( Likelihood Ratio Tests( 1 ), Wald Tests( 0 ), Logistic Plot( 1 ) )
);

```

