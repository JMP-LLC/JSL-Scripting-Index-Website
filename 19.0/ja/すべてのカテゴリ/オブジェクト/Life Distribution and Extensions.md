# Life Distribution and Extensions



## Compare Groups

### 共有されるメッセージ

#### Action

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

#### Apply Preset

**構文:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**説明:** 作成されたプリセットをオブジェクトに適用する。保存された設定に合わせてオプションとカスタマイズが更新される。

**JMP追加されたバージョン:** 18

**フォルダ内で検索**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

**匿名のプリセット**

```jsl

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

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

#### Automatic Recalc

**構文:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**説明:** データの除外や変更があった場合に分析を自動的にやり直す。Automatic Recalcオプションがオンになっている場合で、データの除外や変更が再計算の前に確実に適用されるようにするには、Wait(0)コマンドを使用すること。

```jsl

obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

#### Broadcast

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

#### Column Switcher

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

#### Copy ByGroup Script

**構文:** obj &lt;&lt; Copy ByGroup Script

**説明:** この分析を再現するJSLスクリプトを生成し、クリップボードにコピーする。

```jsl

obj[1] << Copy ByGroup Script;

```

#### Copy Script

**構文:** obj &lt;&lt; Copy Script

**説明:** この分析を再現するJSLスクリプトを生成し、クリップボードにコピーする。

```jsl

obj << Copy Script;

```

#### Data Table Window

**構文:** obj &lt;&lt; Data Table Window

**説明:** この分析に使用したデータテーブルのウィンドウを手前に表示する。

```jsl

obj << Data Table Window;

```

#### Get By Levels

**構文:** obj &lt;&lt; Get By Levels

**説明:** By列が指定されている場合、列名をキー、データ値を値とした連想配列を戻す。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

#### Get ByGroup Script

**構文:** obj &lt;&lt; Get ByGroup Script

**説明:** この分析を再現するスクリプト(JSL)を生成し、それを式として戻す。

```jsl

t = obj[1] << Get ByGroup Script;
Show( t );

```

#### Get Container

**構文:** obj &lt;&lt; Get Container

**説明:** オブジェクトのコンテンツを含んだコンテナボックスの参照を戻す。

**フィルタのあるプラットフォーム**

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

**一般**

```jsl

t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Get Data Table

**構文:** obj &lt;&lt; Get Data Table

**説明:** データテーブルへの参照を戻す。

```jsl

t = obj << Get Datatable;
Show( N Rows( t ) );

```

#### Get Group Platform

**構文:** obj &lt;&lt; Get Group Platform

**説明:** 該当のプラットフォームがグループに属している場合に、Group Platformオブジェクトを戻す。それ以外の場合はEmpty()を戻す。

```jsl

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

t = obj << Get Script;
Show( t );

```

#### Get Script With Data Table

**構文:** obj &lt;&lt; Get Script With Data Table

**説明:** この分析を再現するスクリプト(JSL)をデータテーブルへの参照も含めて生成し、それを式として戻す。

```jsl

t = obj << Get Script With Data Table;
Show( t );

```

#### Get Timing

**構文:** obj &lt;&lt; Get Timing

**説明:** プラットフォームの起動にかかった時間を取得する。

```jsl

t = obj << Get Timing;
Show( t );

```

#### Get Web Support

**構文:** obj &lt;&lt; Get Web Support

**説明:** ディスプレイオブジェクトにおけるインタラクティブHTMLサポートのレベルを数値で戻す。1は、一部または全部の要素がサポートされていることを示し、0は、サポートされないことを示す。

```jsl

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

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );
Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

#### Ignore Platform Preferences

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

#### Local Data Filter

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

#### New JSL Preset

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

#### New Preset

**構文:** obj = New Preset()

**説明:** オブジェクトに適用されているオプションとカスタマイズをプリセットとしてまとめる。このオブジェクトをApply Presetに渡すことで、同じ種類のオブジェクトに設定をコピーすることができる。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

#### Paste Local Data Filter

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

#### Redo Analysis

**構文:** obj &lt;&lt; Redo Analysis

**説明:** 同じ分析をやり直し新しいウィンドウに表示する。データが変更されていると分析結果は異なる。

```jsl

obj << Redo Analysis;

```

#### Redo ByGroup Analysis

**構文:** obj &lt;&lt; Redo ByGroup Analysis

**説明:** 同じ分析をやり直し新しいウィンドウに表示する。データが変更されていると分析結果は異なる。

```jsl

obj[1] << Redo ByGroup Analysis;

```

#### Relaunch Analysis

**構文:** obj &lt;&lt; Relaunch Analysis

**説明:** プラットフォームの起動ウィンドウを開き、レポートを作成した時の設定を表示する。

```jsl

obj << Relaunch Analysis;

```

#### Relaunch ByGroup

**構文:** obj &lt;&lt; Relaunch ByGroup

**説明:** プラットフォームの起動ウィンドウを開き、レポートを作成した時の設定を表示する。

```jsl

obj[1] << Relaunch ByGroup;

```

#### Remove Column Switcher

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

#### Remove Local Data Filter

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

#### Render Preset

**構文:** Render Preset( preset )

**説明:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

#### Report

**構文:** obj &lt;&lt; Report;Report( obj )

**説明:** レポートオブジェクトへの参照を戻す。

```jsl

r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Report View

**構文:** obj &lt;&lt; Report View( "完全"|"要約" )

**説明:** レポートビューは、プラットフォームレポートの詳細を表示するかどうかを決定する。Fullはすべての詳細を表示し、Summaryはプラットフォームにより限定されたものだけを表示する。 動作をカスタマイズするため、各ディスプレイボックスは<<Set Summary Behaviorメッセージをサポートする。

```jsl

obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**構文:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**説明:** 分析を再現するためのJSLスクリプトを作成し、データテーブルにテーブルプロパティとして保存する。スクリプトの名前を指定できる。Append Suffixオプションは、スクリプト名に数字の接尾辞を追加する。これにより、同名のスクリプトが存在していても区別できる。Promptオプションは、ユーザにスクリプト名の指定を促す。Replaceオプションは、同名の既存のスクリプトを置き換える。

```jsl

obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**構文:** obj &lt;&lt; Save ByGroup Script to Journal

**説明:** この分析を再現するJSLスクリプトを生成し、ジャーナルにそのスクリプトのボタンを追加する。

```jsl

obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**構文:** obj &lt;&lt; Save ByGroup Script to Script Window

**説明:** この分析を再現するJSLスクリプトを生成し、現在のスクリプトウィンドウに表示する。

```jsl

obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**構文:** obj &lt;&lt; Save Script for All Objects

**説明:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**構文:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**説明:** すべてのレポートオブジェクトを再現するスクリプトを現在のデータテーブルに保存する。このオプションは、ウィンドウ内にレポートが複数ある場合に便利。作成されるスクリプトの名前は、引用符で囲んで指定しない限り、1つ目のプラットフォーム名となる。

**例 1**

```jsl

obj[1] << Save Script for All Objects To Data Table;

```

**例 2**

```jsl

obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**構文:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**説明:** この分析を再現するJSLスクリプトを生成し、データテーブルのテーブルプロパティとして保存する。

```jsl

obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**構文:** obj &lt;&lt; Save Script to Journal

**説明:** この分析を再現するJSLスクリプトを生成し、ジャーナルにそのスクリプトのボタンを追加する。

```jsl

obj << Save Script to Journal;

```

#### Save Script to Report

**構文:** obj &lt;&lt; Save Script to Report

**説明:** この分析を再現するJSLスクリプトを生成し、レポートウィンドウに表示する。分析手順の記録を結果と一緒に残せる。

```jsl

obj << Save Script to Report;

```

#### Save Script to Script Window

**構文:** obj &lt;&lt; Save Script to Script Window

**説明:** この分析を再現するJSLスクリプトを生成し、現在のスクリプトウィンドウに表示する。

```jsl

obj << Save Script to Script Window;

```

#### SendToByGroup

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

#### SendToEmbeddedScriptable

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

#### SendToReport

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

#### Sync to Data Table Changes

**構文:** obj &lt;&lt; Sync to Data Table Changes

**説明:** 除外やデータの変更が行われた場合に同期する。

```jsl

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

obj << Title( "My Platform" );

```

#### Top Report

**構文:** obj &lt;&lt; Top Report

**説明:** レポート内のルートノードへの参照を戻す。

```jsl

r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Transform Column

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

#### View Web XML

**構文:** obj &lt;&lt; View Web XML

**説明:** インタラクティブHTMLレポートの作成に使うXMLコードを戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

#### Window View

**構文:** obj = Y(...Window View( "Visible"|"Invisible"|"Private" )...)

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

### 列

#### Censor

**構文:** obj &lt;&lt; Censor( column )

#### Freq

**構文:** obj &lt;&lt; Freq( column )

#### Grouping

**構文:** obj &lt;&lt; Grouping( column(s) )

#### Label

**構文:** obj &lt;&lt; Label( column )

#### Time to Event

**構文:** obj &lt;&lt; Time to Event( column(s) )

#### Y

**構文:** obj &lt;&lt; Y( column(s) )

### 項目のメッセージ

#### Change Confidence Level

**構文:** obj &lt;&lt; Change Confidence Level( fraction )

**説明:** プラットフォーム全体の信頼水準を指定する。指定された信頼水準に応じてすべてのプロットとレポートが更新される。

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = Life Distribution(
	Perspective( Compare Groups ),
	Y( :days ),
	Grouping( :Group ),
	Censor( :Censor ),
	Select Distribution( Distribution, Exponential )
);
obj << Change Confidence Level( 0.99 );

```

#### Default Parametric Distribution

**構文:** obj &lt;&lt; Default Parametric Distribution( "対数正規"|"Weibull"|"対数ロジスティック"|"Frechet"|"正規"|"最小極値"|"ロジスティック"|"最大極値"|"指数"|"対数一般化ガンマ"|"一般化ガンマ"|"閾値 Weibull"|"閾値 対数正規"|"閾値 Frechet"|"閾値 対数ロジスティック"|"ZI Weibull"|"ZI 対数正規"|"ZI Frechet"|"ZI 対数ロジスティック"|"DS Weibull"|"DS 対数正規"|"DS Frechet"|"DS 対数ロジスティック" )

#### Estimate Probability

**構文:** obj &lt;&lt; Estimate Probability( state=&lt;0|1&gt; | &lt;Compute( array )&gt; )

**説明:** 「確率の推定」レポートの表示／非表示を切り替える。このレポートは、「分布の比較」レポートで選択されている確率分布に基づいて計算が行われる。Compute引数に、確率の推定に用いる時間値の配列を指定する。

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = Life Distribution(
	Perspective( Compare Groups ),
	Y( :days ),
	Grouping( :Group ),
	Censor( :Censor ),
	Select Distribution( Distribution, Exponential )
);
obj << Estimate Probability( 1 );
obj << Estimate Probability( Compute( [1000] ) );

```

#### Estimate Quantile

**構文:** obj &lt;&lt; Estimate Quantile( state=&lt;0|1&gt; | &lt;Compute( array )&gt; )

**説明:** 「分位点の推定」レポートの表示／非表示を切り替える。このレポートは、「分位点の比較」レポートで選択されている確率分布に基づいて計算が行われる。Compute引数に、分位点の推定に用いる確率値の配列を指定する。

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = Life Distribution(
	Perspective( Compare Groups ),
	Y( :days ),
	Grouping( :Group ),
	Censor( :Censor ),
	Show Quantile Functions( 1 )
);
obj << Select Distribution( Quantile, Exponential );
obj << Estimate Quantile( 1 );
obj << Estimate Quantile( Compute( [.1] ) );

```

#### Fit Distribution

**構文:** obj &lt;&lt; Fit Distribution( distribution )

**説明:** 指定の分布をあてはめる。

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = Life Distribution(
	Perspective( Compare Groups ),
	Y( :days ),
	Grouping( :Group ),
	Censor( :Censor )
);
obj << Fit Distribution( "Loglogistic" );

```

#### Interval Type

**構文:** obj &lt;&lt; Interval Type( "同時"|"時点別" )

**説明:** 「分布の比較」プロットでノンパラメトリック推定される信頼区間の種類を指定します。指定できるオプションは、時点別信頼区間と同時信頼区間。

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = Life Distribution(
	Perspective( Compare Groups ),
	Y( :days ),
	Grouping( :Group ),
	Censor( :Censor )
);
Wait( 1 );
obj << Interval Type( "Pointwise" );

```

#### Select Distribution

**構文:** obj &lt;&lt; Select Distribution( Distribution|Quantile|Hazard|Density, distribution )

**説明:** 指定したグラフにグループごとに表示する確率分布を指定する。これは、「分布の比較」、「分位点の比較」、「ハザードの比較」、「密度の比較」の各レポートで確率分布を選択した場合と同じ処理を行う。

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = Life Distribution(
	Perspective( Compare Groups ),
	Y( :days ),
	Grouping( :Group ),
	Censor( :Censor )
);
obj << Select Distribution( Distribution, Weibull );

```

#### Select Scale

**構文:** obj &lt;&lt; Select Scale( distribution )

**説明:** 「分布の比較」プロットの確率軸のスケールを指定する。これは、「分布の比較」レポートの「スケール」でオプションを選択した場合と同じ処理を行う。

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = Life Distribution(
	Perspective( Compare Groups ),
	Y( :days ),
	Grouping( :Group ),
	Censor( :Censor )
);
obj << Select Scale( Normal );

```

#### Show Confidence Area

**構文:** obj &lt;&lt; Show Confidence Area( state=0|1 )

**説明:** 各グラフにおける信頼区間の塗りつぶした領域の表示/非表示を切り替える。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = Life Distribution(
	Perspective( Compare Groups ),
	Y( :days ),
	Grouping( :Group ),
	Censor( :Censor ),
	Select Distribution( Distribution, Exponential )
);
Wait( 1 );
obj << Show Confidence Area( 0 );

```

#### Show Density Functions

**構文:** obj &lt;&lt; Show Density Functions( state=0|1 )

**説明:** 「密度の比較」レポートの表示／非表示を切り替える。このレポートでは、選択した確率分布について、各グループの密度関数のプロットが重ね合わせて描かれている。

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = Life Distribution(
	Perspective( Compare Groups ),
	Y( :days ),
	Grouping( :Group ),
	Censor( :Censor ),
	Show Density Functions( 1 )
);
obj << Select Distribution( Density, Weibull );

```

#### Show Hazard Functions

**構文:** obj &lt;&lt; Show Hazard Functions( state=0|1 )

**説明:** 「ハザードの比較」レポートの表示／非表示を切り替える。このレポートでは、選択した確率分布について、各グループのハザード関数のプロットが重ね合わせて描かれている。

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = Life Distribution(
	Perspective( Compare Groups ),
	Y( :days ),
	Grouping( :Group ),
	Censor( :Censor ),
	Show Hazard Functions( 1 )
);
obj << Select Distribution( Hazard, Weibull );

```

#### Show Points

**構文:** obj &lt;&lt; Show Points( state=0|1 )

**説明:** 確率プロットにおいて、データ点の表示/非表示を切り替える。「寿命の一変量」プラットフォームの確率プロットでは、ステップ関数の中間点推定値がプロットされる。［点の表示］オプションの選択を解除すると、中間点推定値ではなく、通常のKaplan-Meier推定値がプロットされる。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = Life Distribution(
	Perspective( Compare Groups ),
	Y( :days ),
	Grouping( :Group ),
	Censor( :Censor )
);
Wait( 1 );
obj << Show Points( 0 );

```

#### Show Quantile Functions

**構文:** obj &lt;&lt; Show Quantile Functions( state=0|1 )

**説明:** 「分位点の比較」レポートの表示／非表示を切り替える。このレポートでは、選択した確率分布について、各グループの分位点関数のプロットが重ね合わせて描かれている。

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = Life Distribution(
	Perspective( Compare Groups ),
	Y( :days ),
	Grouping( :Group ),
	Censor( :Censor ),
	Show Quantile Functions( 1 )
);
obj << Select Distribution( Quantile, Weibull );

```

#### Show Survival Curve

**構文:** obj &lt;&lt; Show Survival Curve( state=0|1 )

**説明:** 「分布の比較」の確率プロットにおいて、故障確率と生存確率を切り替える。

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = Life Distribution(
	Perspective( Compare Groups ),
	Y( :days ),
	Grouping( :Group ),
	Censor( :Censor ),
	Show Survival Curve( 1 )
);

```

#### Tabbed Report

**構文:** obj &lt;&lt; Tabbed Report( state=0|1 )

**説明:** 個々のタブに結果を表示する。デフォルトでは、タブではなく、アウトラインに結果は表示される。

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = Life Distribution(
	Perspective( Compare Groups ),
	Y( :days ),
	Grouping( :Group ),
	Censor( :Censor ),
	Tabbed Report( 1 )
);

```

## Competing Cause > Mean Remaining Life

### 項目のメッセージ

#### Compute

**構文:** obj &lt;&lt; Mean Remaining Life( Compute( array ) )

**説明:** 平均余寿命を計算したい時間を、配列で指定する。

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Appliance.jmp" );
obj = dt << Life Distribution(
	Y( :Time Cycles ),
	Failure Cause( :Cause Code ),
	Failure Distribution by Cause( Weibull )
);
obj << Mean Remaining Life( Configuration( 1, 100, 1000, 333 ), Compute( [1000 2000] ) );

```

#### Configuration

**構文:** obj &lt;&lt; Mean Remaining Life( Configuration( useBootstrap, BootstrapSize, SampleSize, RandomSeed ) )

**説明:** 平均余寿命の計算の設定を指定する。平均余寿命は、指定した時間まで生存していたユニットがあとどれぐらい生存するかの平均である。引数では、ブートストラップを使用するかどうか、ブートストラップ標本数、シミュレーションする故障時間の個数、および乱数値を指定する。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Appliance.jmp" );
obj = dt << Life Distribution(
	Y( :Time Cycles ),
	Failure Cause( :Cause Code ),
	Failure Distribution by Cause( Weibull )
);
obj << Mean Remaining Life( Configuration( 1, 100, 1000, 333 ), Compute( [1000 2000] ) );

```

#### Get Results

**構文:** obj &lt;&lt; Mean Remaining Life( Get Results )

**説明:** 平均余寿命の計算における表の数値を、行列形式で戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Appliance.jmp" );
obj = dt << Life Distribution(
	Y( :Time Cycles ),
	Failure Cause( :Cause Code ),
	Failure Distribution by Cause( Weibull )
);
obj << Mean Remaining Life( Configuration( 1, 100, 1000, 333 ), Compute( [1000 2000] ) );
obj << Mean Remaining Life( Get Results );

```

## Competing Cause

### 共有されるメッセージ

#### Action

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

#### Apply Preset

**構文:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**説明:** 作成されたプリセットをオブジェクトに適用する。保存された設定に合わせてオプションとカスタマイズが更新される。

**JMP追加されたバージョン:** 18

**フォルダ内で検索**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

**匿名のプリセット**

```jsl

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

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

#### Automatic Recalc

**構文:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**説明:** データの除外や変更があった場合に分析を自動的にやり直す。Automatic Recalcオプションがオンになっている場合で、データの除外や変更が再計算の前に確実に適用されるようにするには、Wait(0)コマンドを使用すること。

```jsl

obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

#### Broadcast

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

#### Column Switcher

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

#### Copy ByGroup Script

**構文:** obj &lt;&lt; Copy ByGroup Script

**説明:** この分析を再現するJSLスクリプトを生成し、クリップボードにコピーする。

```jsl

obj[1] << Copy ByGroup Script;

```

#### Copy Script

**構文:** obj &lt;&lt; Copy Script

**説明:** この分析を再現するJSLスクリプトを生成し、クリップボードにコピーする。

```jsl

obj << Copy Script;

```

#### Data Table Window

**構文:** obj &lt;&lt; Data Table Window

**説明:** この分析に使用したデータテーブルのウィンドウを手前に表示する。

```jsl

obj << Data Table Window;

```

#### Get By Levels

**構文:** obj &lt;&lt; Get By Levels

**説明:** By列が指定されている場合、列名をキー、データ値を値とした連想配列を戻す。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

#### Get ByGroup Script

**構文:** obj &lt;&lt; Get ByGroup Script

**説明:** この分析を再現するスクリプト(JSL)を生成し、それを式として戻す。

```jsl

t = obj[1] << Get ByGroup Script;
Show( t );

```

#### Get Container

**構文:** obj &lt;&lt; Get Container

**説明:** オブジェクトのコンテンツを含んだコンテナボックスの参照を戻す。

**フィルタのあるプラットフォーム**

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

**一般**

```jsl

t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Get Data Table

**構文:** obj &lt;&lt; Get Data Table

**説明:** データテーブルへの参照を戻す。

```jsl

t = obj << Get Datatable;
Show( N Rows( t ) );

```

#### Get Group Platform

**構文:** obj &lt;&lt; Get Group Platform

**説明:** 該当のプラットフォームがグループに属している場合に、Group Platformオブジェクトを戻す。それ以外の場合はEmpty()を戻す。

```jsl

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

t = obj << Get Script;
Show( t );

```

#### Get Script With Data Table

**構文:** obj &lt;&lt; Get Script With Data Table

**説明:** この分析を再現するスクリプト(JSL)をデータテーブルへの参照も含めて生成し、それを式として戻す。

```jsl

t = obj << Get Script With Data Table;
Show( t );

```

#### Get Timing

**構文:** obj &lt;&lt; Get Timing

**説明:** プラットフォームの起動にかかった時間を取得する。

```jsl

t = obj << Get Timing;
Show( t );

```

#### Get Web Support

**構文:** obj &lt;&lt; Get Web Support

**説明:** ディスプレイオブジェクトにおけるインタラクティブHTMLサポートのレベルを数値で戻す。1は、一部または全部の要素がサポートされていることを示し、0は、サポートされないことを示す。

```jsl

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

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );
Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

#### Ignore Platform Preferences

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

#### Local Data Filter

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

#### New JSL Preset

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

#### New Preset

**構文:** obj = New Preset()

**説明:** オブジェクトに適用されているオプションとカスタマイズをプリセットとしてまとめる。このオブジェクトをApply Presetに渡すことで、同じ種類のオブジェクトに設定をコピーすることができる。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

#### Paste Local Data Filter

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

#### Redo Analysis

**構文:** obj &lt;&lt; Redo Analysis

**説明:** 同じ分析をやり直し新しいウィンドウに表示する。データが変更されていると分析結果は異なる。

```jsl

obj << Redo Analysis;

```

#### Redo ByGroup Analysis

**構文:** obj &lt;&lt; Redo ByGroup Analysis

**説明:** 同じ分析をやり直し新しいウィンドウに表示する。データが変更されていると分析結果は異なる。

```jsl

obj[1] << Redo ByGroup Analysis;

```

#### Relaunch Analysis

**構文:** obj &lt;&lt; Relaunch Analysis

**説明:** プラットフォームの起動ウィンドウを開き、レポートを作成した時の設定を表示する。

```jsl

obj << Relaunch Analysis;

```

#### Relaunch ByGroup

**構文:** obj &lt;&lt; Relaunch ByGroup

**説明:** プラットフォームの起動ウィンドウを開き、レポートを作成した時の設定を表示する。

```jsl

obj[1] << Relaunch ByGroup;

```

#### Remove Column Switcher

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

#### Remove Local Data Filter

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

#### Render Preset

**構文:** Render Preset( preset )

**説明:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

#### Report

**構文:** obj &lt;&lt; Report;Report( obj )

**説明:** レポートオブジェクトへの参照を戻す。

```jsl

r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Report View

**構文:** obj &lt;&lt; Report View( "完全"|"要約" )

**説明:** レポートビューは、プラットフォームレポートの詳細を表示するかどうかを決定する。Fullはすべての詳細を表示し、Summaryはプラットフォームにより限定されたものだけを表示する。 動作をカスタマイズするため、各ディスプレイボックスは<<Set Summary Behaviorメッセージをサポートする。

```jsl

obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**構文:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**説明:** 分析を再現するためのJSLスクリプトを作成し、データテーブルにテーブルプロパティとして保存する。スクリプトの名前を指定できる。Append Suffixオプションは、スクリプト名に数字の接尾辞を追加する。これにより、同名のスクリプトが存在していても区別できる。Promptオプションは、ユーザにスクリプト名の指定を促す。Replaceオプションは、同名の既存のスクリプトを置き換える。

```jsl

obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**構文:** obj &lt;&lt; Save ByGroup Script to Journal

**説明:** この分析を再現するJSLスクリプトを生成し、ジャーナルにそのスクリプトのボタンを追加する。

```jsl

obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**構文:** obj &lt;&lt; Save ByGroup Script to Script Window

**説明:** この分析を再現するJSLスクリプトを生成し、現在のスクリプトウィンドウに表示する。

```jsl

obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**構文:** obj &lt;&lt; Save Script for All Objects

**説明:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**構文:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**説明:** すべてのレポートオブジェクトを再現するスクリプトを現在のデータテーブルに保存する。このオプションは、ウィンドウ内にレポートが複数ある場合に便利。作成されるスクリプトの名前は、引用符で囲んで指定しない限り、1つ目のプラットフォーム名となる。

**例 1**

```jsl

obj[1] << Save Script for All Objects To Data Table;

```

**例 2**

```jsl

obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**構文:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**説明:** この分析を再現するJSLスクリプトを生成し、データテーブルのテーブルプロパティとして保存する。

```jsl

obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**構文:** obj &lt;&lt; Save Script to Journal

**説明:** この分析を再現するJSLスクリプトを生成し、ジャーナルにそのスクリプトのボタンを追加する。

```jsl

obj << Save Script to Journal;

```

#### Save Script to Report

**構文:** obj &lt;&lt; Save Script to Report

**説明:** この分析を再現するJSLスクリプトを生成し、レポートウィンドウに表示する。分析手順の記録を結果と一緒に残せる。

```jsl

obj << Save Script to Report;

```

#### Save Script to Script Window

**構文:** obj &lt;&lt; Save Script to Script Window

**説明:** この分析を再現するJSLスクリプトを生成し、現在のスクリプトウィンドウに表示する。

```jsl

obj << Save Script to Script Window;

```

#### SendToByGroup

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

#### SendToEmbeddedScriptable

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

#### SendToReport

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

#### Sync to Data Table Changes

**構文:** obj &lt;&lt; Sync to Data Table Changes

**説明:** 除外やデータの変更が行われた場合に同期する。

```jsl

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

obj << Title( "My Platform" );

```

#### Top Report

**構文:** obj &lt;&lt; Top Report

**説明:** レポート内のルートノードへの参照を戻す。

```jsl

r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Transform Column

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

#### View Web XML

**構文:** obj &lt;&lt; View Web XML

**説明:** インタラクティブHTMLレポートの作成に使うXMLコードを戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

#### Window View

**構文:** obj = Y(...Window View( "Visible"|"Invisible"|"Private" )...)

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

### 列

#### By

**構文:** obj &lt;&lt; By( column(s) )

#### Censor

**構文:** obj &lt;&lt; Censor( column )

#### Failure Cause

**構文:** obj &lt;&lt; Failure Cause( column )

#### Freq

**構文:** obj &lt;&lt; Freq( column )

#### Label

**構文:** obj &lt;&lt; Label( column )

#### Time to Event

**構文:** obj &lt;&lt; Time to Event( column(s) )

#### Y

**構文:** obj &lt;&lt; Y( column(s) )

### 項目のメッセージ

#### Bootstrap Sample Size

**構文:** obj &lt;&lt; Bootstrap Sample Size( n )

**説明:** Bayes推定やWeibayesのブートストラップ法で使用される標本数を指定する。Bayes法およびWeibayes法では、「分布プロファイル」に表示される故障確率の信頼限界は、パラメトリックブートストラップ法の乱数シミュレーションで求める必要がある。

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Appliance.jmp" );
obj = dt << Life Distribution(
	Y( :Time Cycles ),
	Failure Cause( :Cause Code ),
	Failure Distribution by Cause( Weibull ),
	Allow failure mode to use Bayesian models( 1 ),
	Fit Model(
		{{"0", Bayesian Lognormal, 0}, {"1", Weibull, 1}, {"10", Weibull, 0}, {"15", Weibull,
		0}, {"2", Weibull, 0}, {"5", Weibull, 0}, {"6", Weibull, 0}, {"9", Weibull, 0}}
	)
);
obj << Bootstrap Sample Size( 1000 );

```

#### Compute Remaining Life Distribution

**構文:** obj &lt;&lt; Compute Remaining Life Distribution( time0, time1 )

**説明:** ユニットがtime0まで生存しているという条件のもとでの、time1における故障確率の値を含むリストを戻す。また、リストには、故障確率の信頼区間における下限値と上限値が含まれている。

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Appliance.jmp" );
obj = dt << Life Distribution(
	Y( :Time Cycles ),
	Failure Cause( :Cause Code ),
	Failure Distribution by Cause( Weibull )
);
obj << Show Remaining Life Distribution( 1 );
p = obj << Compute Remaining Life Distribution( 2000, 4000 );

```

#### Density

**構文:** obj &lt;&lt; Density( t )

**説明:** 指定された時点における密度の値を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Appliance.jmp" );
obj = dt << Life Distribution(
	Y( :Time Cycles ),
	Failure Cause( :Cause Code ),
	Failure Distribution by Cause( Weibull )
);
d = obj << Density( .5 );

```

#### Export Bootstrap Results

**構文:** obj &lt;&lt; Export Bootstrap Results( time )

**説明:** ブートストラップの結果を新しいデータテーブルに保存する。Bayes推定やWeibayesの結果を得るために用いたブートストラップ標本が出力される。Bayes法およびWeibayes法では、「分布プロファイル」に表示される故障確率の信頼限界は、パラメトリックブートストラップ法の乱数シミュレーションで求める必要がある。

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Appliance.jmp" );
obj = dt << Life Distribution(
	Y( :Time Cycles ),
	Failure Cause( :Cause Code ),
	Failure Distribution by Cause( Weibull ),
	Allow failure mode to use Bayesian models( 1 ),
	Fit Model(
		{{"0", Bayesian Lognormal, 0}, {"1", Weibull, 1}, {"10", Weibull, 0}, {"15", Weibull,
		0}, {"2", Weibull, 0}, {"5", Weibull, 0}, {"6", Weibull, 0}, {"9", Weibull, 0}}
	)
);
obj << Export Bootstrap Results( 15000 );

```

#### Export Lifetime Data for Individual Causes

**構文:** obj &lt;&lt; Export Lifetime Data for Individual Causes

**説明:** 原因ごとの故障時間データを積み重ねたデータセットを書き出す。原因の故障時間データは元のデータの複製となっているが、当該の原因以外の観測値がすべて右側打ち切りデータとなっている。

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Appliance.jmp" );
obj = dt << Life Distribution(
	Y( :Time Cycles ),
	Failure Cause( :Cause Code ),
	Failure Distribution by Cause( Weibull ),
	Allow failure mode to use Bayesian models( 1 )
);
dt = obj << Export Lifetime Data for Individual Causes();

```

#### Fit Model

**構文:** obj &lt;&lt; Fit Model( specification )

**説明:** 指定された設定で競合原因モデルをあてはめる。モデルは、各原因の3項目のリストで指定する。各サブリストは、原因コード、確率分布の名前、原因を除去するかどうかの指示変数で構成される。

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Appliance.jmp" );
obj = dt << Life Distribution(
	Y( :Time Cycles ),
	Failure Cause( :Cause Code ),
	Failure Distribution by Cause( Weibull )
);
obj << Fit Model(
	{{"0", Weibull, 1}, {"10", Weibull, 0}, {"15", Weibull, 0}, {"2", Weibull, 0}, {"5",
	Weibull, 0}, {"6", Weibull, 0}, {"9", Weibull, 0}}
);

```

#### Get Causes

**構文:** obj &lt;&lt; Get Causes

**説明:** 原因コードを表すデータ値のリストを戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Appliance.jmp" );
obj = dt << Life Distribution(
	Y( :Time Cycles ),
	Failure Cause( :Cause Code ),
	Failure Distribution by Cause( Weibull )
);
lst = obj << Get Causes;

```

#### Get Estimates

**構文:** obj &lt;&lt; Get Estimates

**説明:** 競合原因モデルの原因、度数、確率分布の名前、パラメータ推定値を含むリストを戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Appliance.jmp" );
obj = dt << Life Distribution(
	Y( :Time Cycles ),
	Failure Cause( :Cause Code ),
	Failure Distribution by Cause( Weibull )
);
res = obj << Get Estimates;

```

#### Get Life Distribution

**構文:** obj &lt;&lt; Get Life Distribution( i )

**説明:** 「競合原因分析」レポートの「原因ごとの分析」セクションにある指定された「寿命の一変量」レポートのオブジェクトへの参照を戻す。このオプションの引数では、「寿命の一変量」レポートは0からn-1までの指数が付けられる（nは原因の数）。

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Appliance.jmp" );
obj = dt << Life Distribution(
	Y( :Time Cycles ),
	Failure Cause( :Cause Code ),
	Failure Distribution by Cause( Weibull )
);
ld = (obj << Get Life Distribution( 1 ));

```

#### Get Model Specification

**構文:** obj &lt;&lt; Get Model Specification

**説明:** 競合原因モデルの設定を含むリストを戻す。このリストは、「競合原因分析」プラットフォームでモデルをあてはめる際に、メッセージの引数としても使用できる。

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Appliance.jmp" );
obj = dt << Life Distribution(
	Y( :Time Cycles ),
	Failure Cause( :Cause Code ),
	Failure Distribution by Cause( Weibull )
);
spec = obj << Get Model Specification;

```

#### Hazard

**構文:** obj &lt;&lt; Hazard( t )

**説明:** 指定された時点におけるハザードの値を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Appliance.jmp" );
obj = dt << Life Distribution(
	Y( :Time Cycles ),
	Failure Cause( :Cause Code ),
	Failure Distribution by Cause( Weibull )
);
h = obj << Hazard( 2500 );

```

#### Mean Remaining Life

**構文:** obj &lt;&lt; Mean Remaining Life( state=0|1 )obj &lt;&lt; Mean Remaining Life( Configuration(), Compute(), Get Results )

**説明:** 平均余寿命を計算するレポートの表示/非表示を切り替える。平均余寿命は、指定した時間まで生存していたユニットがあとどれぐらい生存するかの平均である。また、このオプションを使用して、平均余命計算のオブジェクトにメッセージを送信することができる。

**例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Appliance.jmp" );
obj = dt << Life Distribution(
	Y( :Time Cycles ),
	Failure Cause( :Cause Code ),
	Failure Distribution by Cause( Weibull )
);
obj << Mean Remaining Life( 1 );

```

**例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Appliance.jmp" );
obj = dt << Life Distribution(
	Y( :Time Cycles ),
	Failure Cause( :Cause Code ),
	Failure Distribution by Cause( Weibull )
);
obj << Mean Remaining Life( Configuration( 1, 100, 1000, 333 ), Compute( [1000 2000] ) );

```

#### Omit

**構文:** obj &lt;&lt; Omit( k, 0|1 )

**説明:** 「故障原因の組み合わせ」プロットにおいて、指定された原因の表示/非表示を切り替える。1番目の引数には、原因の番号を指定する。2番目の引数が1の場合、指定された原因が除去され、2番目の引数が0の場合、指定された原因が含まれる。

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Appliance.jmp" );
obj = dt << Life Distribution(
	Y( :Time Cycles ),
	Failure Cause( :Cause Code ),
	Failure Distribution by Cause( Weibull )
);
Wait( 1 );
obj << Omit( 1, 1 );

```

#### Probability

**構文:** obj &lt;&lt; Probability( t )

**説明:** 指定された時点における故障の発生確率を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Appliance.jmp" );
obj = dt << Life Distribution(
	Y( :Time Cycles ),
	Failure Cause( :Cause Code ),
	Failure Distribution by Cause( Weibull )
);
p = obj << Probability( 2500 );

```

#### Quantile

**構文:** obj &lt;&lt; Quantile( p )

**説明:** 指定された確率における分位点の値を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Appliance.jmp" );
obj = dt << Life Distribution(
	Y( :Time Cycles ),
	Failure Cause( :Cause Code ),
	Failure Distribution by Cause( Weibull )
);
q = obj << Quantile( .5 );

```

#### Set Scale

**構文:** obj &lt;&lt; Set Scale( name )

**説明:** 「故障原因の組み合わせ」プロットにおける縦軸の確率スケールを指定する。

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Appliance.jmp" );
obj = dt << Life Distribution(
	Y( :Time Cycles ),
	Failure Cause( :Cause Code ),
	Failure Distribution by Cause( Weibull )
);
Wait( 1 );
obj << Set Scale( Weibull );

```

#### Show Points

**構文:** obj &lt;&lt; Show Points( &lt;0|1&gt; )

**説明:** 「故障原因の組み合わせ」プロットにおいて、データ点の表示/非表示を切り替える。「寿命の一変量」プラットフォームは、ステップ関数の中間点推定値に点をプロットする。［点の表示］オプションの選択を解除すると、Kaplan-Meier推定値のステップ関数が描かれるようになる。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Appliance.jmp" );
obj = dt << Life Distribution(
	Y( :Time Cycles ),
	Failure Cause( :Cause Code ),
	Failure Distribution by Cause( Weibull )
);
Wait( 1 );
obj << Show Points( 0 );

```

#### Show Remaining Life Distribution

**構文:** obj &lt;&lt; Show Remaining Life Distribution( state=0|1 )

**説明:** 余寿命分布のプロファイルの表示/非表示を切り替える。このグラフは、ユニットが指定した時間まで生存しているという条件のもとでの故障確率を描いたプロファイルである。

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Appliance.jmp" );
obj = dt << Life Distribution(
	Y( :Time Cycles ),
	Failure Cause( :Cause Code ),
	Failure Distribution by Cause( Weibull )
);
obj << Show Remaining Life Distribution( 1 );

```

#### Show Subdistributions

**構文:** obj &lt;&lt; Show Subdistributions( state=0|1 )

**説明:** 部分分布関数のプロファイルの表示/非表示を切り替える。この部分分布関数は、指定された原因に対して描かれる。［部分分布の表示］オプションを選択すると、「故障原因の組み合わせ」プロットが更新され、すべての原因について部分分布関数が表示される。

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Appliance.jmp" );
obj = dt << Life Distribution(
	Y( :Time Cycles ),
	Failure Cause( :Cause Code ),
	Failure Distribution by Cause( Weibull )
);
obj << Show Subdistributions( 1 );

```

#### Subdistribution

**構文:** obj &lt;&lt; Subdistribution( Cause(i), Compute(m) )

**説明:** 部分分布関数を計算したい原因と時間を指定する。Cause引数には、原因の番号を指定する。Compute引数には、時間を列ベクトルで指定する。このメッセージを使用する前に、［部分分布の表示］オプションを選択しておく必要がある。

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Appliance.jmp" );
obj = dt << Life Distribution(
	Y( :Time Cycles ),
	Failure Cause( :Cause Code ),
	Failure Distribution by Cause( Weibull )
);
obj << Show Subdistributions( 1 );
obj << Subdistribution( Cause( 2 ), Compute( [5000, 10000] ) );

```

#### Tabbed Report

**構文:** obj &lt;&lt; Tabbed Report( state=0|1 )

**説明:** 「競合原因分析」レポートをタブ形式で表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Appliance.jmp" );
obj = dt << Life Distribution(
	Y( :Time Cycles ),
	Failure Cause( :Cause Code ),
	Failure Distribution by Cause( Weibull ),
	Tabbed Report( 1 )
);

```

#### Tabbed Report for Individual Causes

**構文:** obj &lt;&lt; Tabbed Report for Individual Causes( state=0|1 )

**説明:** 「競合原因分析」レポートの「原因ごとの分析」セクションにある「寿命の一変量」レポートをタブ形式で表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Appliance.jmp" );
obj = dt << Life Distribution(
	Y( :Time Cycles ),
	Failure Cause( :Cause Code ),
	Failure Distribution by Cause( Weibull ),
	Tabbed Report for Individual Causes( 1 )
);

```

## Life Distribution

### 共有されるメッセージ

#### Action

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

#### Apply Preset

**構文:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**説明:** 作成されたプリセットをオブジェクトに適用する。保存された設定に合わせてオプションとカスタマイズが更新される。

**JMP追加されたバージョン:** 18

**フォルダ内で検索**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

**匿名のプリセット**

```jsl

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

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

#### Automatic Recalc

**構文:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**説明:** データの除外や変更があった場合に分析を自動的にやり直す。Automatic Recalcオプションがオンになっている場合で、データの除外や変更が再計算の前に確実に適用されるようにするには、Wait(0)コマンドを使用すること。

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

#### Broadcast

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

#### Column Switcher

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

#### Copy ByGroup Script

**構文:** obj &lt;&lt; Copy ByGroup Script

**説明:** この分析を再現するJSLスクリプトを生成し、クリップボードにコピーする。

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ), By( _bycol ) );
obj[1] << Copy ByGroup Script;

```

#### Copy Script

**構文:** obj &lt;&lt; Copy Script

**説明:** この分析を再現するJSLスクリプトを生成し、クリップボードにコピーする。

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Copy Script;

```

#### Data Table Window

**構文:** obj &lt;&lt; Data Table Window

**説明:** この分析に使用したデータテーブルのウィンドウを手前に表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Data Table Window;

```

#### Get By Levels

**構文:** obj &lt;&lt; Get By Levels

**説明:** By列が指定されている場合、列名をキー、データ値を値とした連想配列を戻す。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

#### Get ByGroup Script

**構文:** obj &lt;&lt; Get ByGroup Script

**説明:** この分析を再現するスクリプト(JSL)を生成し、それを式として戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ), By( _bycol ) );
t = obj[1] << Get ByGroup Script;
Show( t );

```

#### Get Container

**構文:** obj &lt;&lt; Get Container

**説明:** オブジェクトのコンテンツを含んだコンテナボックスの参照を戻す。

**フィルタのあるプラットフォーム**

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

**一般**

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Get Data Table

**構文:** obj &lt;&lt; Get Data Table

**説明:** データテーブルへの参照を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
t = obj << Get Datatable;
Show( N Rows( t ) );

```

#### Get Group Platform

**構文:** obj &lt;&lt; Get Group Platform

**説明:** 該当のプラットフォームがグループに属している場合に、Group Platformオブジェクトを戻す。それ以外の場合はEmpty()を戻す。

```jsl

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

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
t = obj << Get Script;
Show( t );

```

#### Get Script With Data Table

**構文:** obj &lt;&lt; Get Script With Data Table

**説明:** この分析を再現するスクリプト(JSL)をデータテーブルへの参照も含めて生成し、それを式として戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
t = obj << Get Script With Data Table;
Show( t );

```

#### Get Timing

**構文:** obj &lt;&lt; Get Timing

**説明:** プラットフォームの起動にかかった時間を取得する。

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
t = obj << Get Timing;
Show( t );

```

#### Get Web Support

**構文:** obj &lt;&lt; Get Web Support

**説明:** ディスプレイオブジェクトにおけるインタラクティブHTMLサポートのレベルを数値で戻す。1は、一部または全部の要素がサポートされていることを示し、0は、サポートされないことを示す。

```jsl

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

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );
Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

#### Ignore Platform Preferences

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

#### Local Data Filter

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

#### New JSL Preset

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

#### New Preset

**構文:** obj = New Preset()

**説明:** オブジェクトに適用されているオプションとカスタマイズをプリセットとしてまとめる。このオブジェクトをApply Presetに渡すことで、同じ種類のオブジェクトに設定をコピーすることができる。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

#### Paste Local Data Filter

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

#### Redo Analysis

**構文:** obj &lt;&lt; Redo Analysis

**説明:** 同じ分析をやり直し新しいウィンドウに表示する。データが変更されていると分析結果は異なる。

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Redo Analysis;

```

#### Redo ByGroup Analysis

**構文:** obj &lt;&lt; Redo ByGroup Analysis

**説明:** 同じ分析をやり直し新しいウィンドウに表示する。データが変更されていると分析結果は異なる。

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ), By( _bycol ) );
obj[1] << Redo ByGroup Analysis;

```

#### Relaunch Analysis

**構文:** obj &lt;&lt; Relaunch Analysis

**説明:** プラットフォームの起動ウィンドウを開き、レポートを作成した時の設定を表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Relaunch Analysis;

```

#### Relaunch ByGroup

**構文:** obj &lt;&lt; Relaunch ByGroup

**説明:** プラットフォームの起動ウィンドウを開き、レポートを作成した時の設定を表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ), By( _bycol ) );
obj[1] << Relaunch ByGroup;

```

#### Remove Column Switcher

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

#### Remove Local Data Filter

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

#### Render Preset

**構文:** Render Preset( preset )

**説明:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

#### Report

**構文:** obj &lt;&lt; Report;Report( obj )

**説明:** レポートオブジェクトへの参照を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Report View

**構文:** obj &lt;&lt; Report View( "完全"|"要約" )

**説明:** レポートビューは、プラットフォームレポートの詳細を表示するかどうかを決定する。Fullはすべての詳細を表示し、Summaryはプラットフォームにより限定されたものだけを表示する。 動作をカスタマイズするため、各ディスプレイボックスは<<Set Summary Behaviorメッセージをサポートする。

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**構文:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**説明:** 分析を再現するためのJSLスクリプトを作成し、データテーブルにテーブルプロパティとして保存する。スクリプトの名前を指定できる。Append Suffixオプションは、スクリプト名に数字の接尾辞を追加する。これにより、同名のスクリプトが存在していても区別できる。Promptオプションは、ユーザにスクリプト名の指定を促す。Replaceオプションは、同名の既存のスクリプトを置き換える。

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ), By( _bycol ) );
obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**構文:** obj &lt;&lt; Save ByGroup Script to Journal

**説明:** この分析を再現するJSLスクリプトを生成し、ジャーナルにそのスクリプトのボタンを追加する。

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ), By( _bycol ) );
obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**構文:** obj &lt;&lt; Save ByGroup Script to Script Window

**説明:** この分析を再現するJSLスクリプトを生成し、現在のスクリプトウィンドウに表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ), By( _bycol ) );
obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**構文:** obj &lt;&lt; Save Script for All Objects

**説明:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**構文:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**説明:** すべてのレポートオブジェクトを再現するスクリプトを現在のデータテーブルに保存する。このオプションは、ウィンドウ内にレポートが複数ある場合に便利。作成されるスクリプトの名前は、引用符で囲んで指定しない限り、1つ目のプラットフォーム名となる。

**例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table;

```

**例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**構文:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**説明:** この分析を再現するJSLスクリプトを生成し、データテーブルのテーブルプロパティとして保存する。

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**構文:** obj &lt;&lt; Save Script to Journal

**説明:** この分析を再現するJSLスクリプトを生成し、ジャーナルにそのスクリプトのボタンを追加する。

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Save Script to Journal;

```

#### Save Script to Report

**構文:** obj &lt;&lt; Save Script to Report

**説明:** この分析を再現するJSLスクリプトを生成し、レポートウィンドウに表示する。分析手順の記録を結果と一緒に残せる。

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Save Script to Report;

```

#### Save Script to Script Window

**構文:** obj &lt;&lt; Save Script to Script Window

**説明:** この分析を再現するJSLスクリプトを生成し、現在のスクリプトウィンドウに表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Save Script to Script Window;

```

#### SendToByGroup

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

#### SendToEmbeddedScriptable

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

#### SendToReport

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

#### Sync to Data Table Changes

**構文:** obj &lt;&lt; Sync to Data Table Changes

**説明:** 除外やデータの変更が行われた場合に同期する。

```jsl

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

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Title( "My Platform" );

```

#### Top Report

**構文:** obj &lt;&lt; Top Report

**説明:** レポート内のルートノードへの参照を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Transform Column

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

#### View Web XML

**構文:** obj &lt;&lt; View Web XML

**説明:** インタラクティブHTMLレポートの作成に使うXMLコードを戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

#### Window View

**構文:** obj = Life Distribution(...Window View( "Visible"|"Invisible"|"Private" )...)

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

### 列

#### By

**構文:** obj &lt;&lt; By( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ), By( _bycol ) );

```

#### Censor

**構文:** obj &lt;&lt; Censor( column )

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );

```

#### Failure Cause

**構文:** obj &lt;&lt; Failure Cause( column )

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );

```

#### Freq

**構文:** obj &lt;&lt; Freq( column )

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
dt << New Column( "_freqcol", Numeric, Continuous, Formula( Random Integer( 1, 5 ) ) );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ), Freq( _freqcol ) );

```

#### Label

**構文:** obj &lt;&lt; Label( column )

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );

```

#### Time to Event

**構文:** obj &lt;&lt; Time to Event( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );

```

#### Y

**構文:** obj &lt;&lt; Y( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );

```

### 関連するコンストラクター

#### Life Distribution

**構文:** Life Distribution( Y( column(s) ) )

**説明:** 「イベントまでの時間」データの分布を分析する。打ち切りのあるデータや製品寿命、信頼性、競合する原因などをモデル化できる。

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );

```

### 項目のメッセージ

#### Censor Code

**構文:** obj = Life Distribution(... Censor Code( value ) )

**説明:** 該当のデータ行が右側打ち切りであることを示す値を指定する。 デフォルトの値は"1"。

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Life Distribution(
	Y( :Hours ),
	Censor( :Status ),
	Freq( :Weight ),
	Censor Code( "Censored" )
);
obj << Fit Lognormal;

```

#### Change Confidence Level

**構文:** obj &lt;&lt; Change Confidence Level( fraction )

**説明:** プラットフォーム全体の信頼水準を指定する。指定された信頼水準に応じてすべてのプロットとレポートが更新される。

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ), Fit Exponential );
obj << Change Confidence Level( 0.99 );

```

#### Comparison Criterion

**構文:** obj &lt;&lt; Comparison Criterion( &lt;Negative Loglikelihood|AICc|BIC&gt; )

**説明:** 「モデル比較」レポートでの並び順を決めるモデル選択規準を指定する。3つの規準とも、数値が小さいほど適合性が高いことを示す。

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Fit All Distributions;
obj << Comparison Criterion( BIC );

```

#### Confidence Interval Method

**構文:** obj = Life Distribution(... Confidence Interval Method( "Wald"|"Likelihood" ) )

**説明:** パラメータの信頼区間を計算するために使用する方法を指定する。デフォルトはWaldだが、代わりに尤度を選択することもできる。ただし、プロファイルで提供される信頼区間はすべてWald法に基づく。 デフォルトの値は"Wald"。

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Life Distribution(
	Y( :Hours ),
	Censor( :Status ),
	Freq( :Weight ),
	Censor Code( "Censored" ),
	Confidence Interval Method( "Likelihood" )
);
obj << Fit Lognormal;

```

#### Do Same Analyses For All Groups

**構文:** obj &lt;&lt; Do Same Analyses For All Groups

**説明:** 現在のグループで選択したすべてのオプションを、他のByグループすべてに適用する。

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Blenders.jmp" );
obj = dt << Life Distribution(
	Y( :Time Cycles ),
	By( :Group ),
	Censor( :Censor ),
	Fit Exponential
);
obj[2] << Fit Weibull;
Wait( 1 );
obj[2] << Do Same Analyses For All Groups;

```

#### Fit All DS Distributions

**構文:** obj &lt;&lt; Fit All DS Distributions

**説明:** すべての故障部分母集団分布（DS分布）をあてはめる。

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Fit All DS Distributions;

```

#### Fit All Distributions

**構文:** obj &lt;&lt; Fit All Distributions

**説明:** 閾値のある分布(TH分布)以外のすべての分布をあてはめる。

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Fit All Distributions;

```

#### Fit All Nonnegative

**構文:** obj &lt;&lt; Fit All Nonnegative

**説明:** 非負の値だけをとるすべての確率分布をあてはめる。

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Fit All Nonnegative;

```

#### Fit Competing Risk Mixture

**構文:** obj &lt;&lt; Fit Competing Risk Mixture( Mix( distribution( n ), &lt;distribution( n ), ...&gt;, method, &lt;Show Profilers( 0|1 )&gt;

**説明:** 競合リスク混合分布について、どの分布を混合するか、および、いくつかのオプションを指定する。method引数は必須。このオプションは、反復計算の開始値(初期値)を決めるものであり、単一のクラスター、分離できるクラスター、または重なったクラスターのいずれかを指定する。

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Life Distribution(
	Y( :Hours ),
	Censor( :Status ),
	Censor Code( "Censored" ),
	Freq( :Weight ),
	<<Fit Lognormal
);
obj << Fit Competing Risk Mixture(
	Mix( Lognormal( 2 ), Single Cluster, Show Profilers( 0 ) )
);

```

#### Fit DS Frechet

**構文:** obj &lt;&lt; Fit DS Frechet

**説明:** 故障部分母集団-Fréchet分布をデータにあてはめる。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Fit DS Frechet;

```

#### Fit DS Loglogistic

**構文:** obj &lt;&lt; Fit DS Loglogistic

**説明:** 故障部分母集団-対数ロジスティック分布(DS-対数ロジスティック分布)をデータにあてはめる。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Fit DS Loglogistic;

```

#### Fit DS Lognormal

**構文:** obj &lt;&lt; Fit DS Lognormal

**説明:** 故障部分母集団-対数正規分布をデータにあてはめる。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Fit DS Lognormal;

```

#### Fit DS Weibull

**構文:** obj &lt;&lt; Fit DS Weibull

**説明:** 故障部分母集団-Weibull分布をデータにあてはめる。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Fit DS Weibull;

```

#### Fit Exponential

**構文:** obj &lt;&lt; Fit Exponential

**説明:** 指数分布をデータにあてはめる。

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Fit Exponential;

```

#### Fit Frechet

**構文:** obj &lt;&lt; Fit Frechet

**説明:** Fréchet分布をデータにあてはめる。

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Fit Frechet;

```

#### Fit GenGamma

**構文:** obj &lt;&lt; Fit GenGamma

**説明:** 一般化ガンマ分布をデータにあてはめる。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Fit GenGamma;

```

#### Fit LEV

**構文:** obj &lt;&lt; Fit LEV

**説明:** 最大極値分布（LEV分布）をデータにあてはめる。

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Fit LEV;

```

#### Fit LogGenGamma

**構文:** obj &lt;&lt; Fit LogGenGamma

**説明:** 対数一般化ガンマ分布をデータにあてはめる。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Fit LogGenGamma;

```

#### Fit Logistic

**構文:** obj &lt;&lt; Fit Logistic

**説明:** ロジスティック分布をデータにあてはめる。

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Fit Logistic;

```

#### Fit Loglogistic

**構文:** obj &lt;&lt; Fit Loglogistic

**説明:** ロジスティック分布をデータにあてはめる。

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Fit Loglogistic;

```

#### Fit Lognormal

**構文:** obj &lt;&lt; Fit Lognormal

**説明:** 対数正規分布をデータにあてはめる。

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Fit Lognormal;

```

#### Fit Mixture

**構文:** obj &lt;&lt; Fit Mixture( Mix( distribution( n ), &lt;distribution( n ), ...&gt;, method, &lt;Show Profilers( 0|1 )&gt;

**説明:** 混合分布について、どの分布を混合するか、および、いくつかのオプションを指定する。method引数は必須。このオプションは、反復計算の開始値(初期値)を決めるものであり、単一のクラスター、分離できるクラスター、または重なったクラスターのいずれかを指定する。

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Life Distribution(
	Y( :Hours ),
	Censor( :Status ),
	Censor Code( "Censored" ),
	Freq( :Weight ),
	<<Fit Lognormal
);
obj << Fit Mixture( Mix( Lognormal( 2 ), Single Cluster, Show Profilers( 0 ) ) );

```

#### Fit Normal

**構文:** obj &lt;&lt; Fit Normal

**説明:** 正規分布をデータにあてはめる。

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Fit Normal;

```

#### Fit SEV

**構文:** obj &lt;&lt; Fit SEV

**説明:** 最小極値分布（SEV分布）をデータにあてはめる。

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Fit SEV;

```

#### Fit TH Frechet

**構文:** obj &lt;&lt; Fit TH Frechet

**説明:** 閾値-Fréchet分布をデータにあてはめる。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Fit TH Frechet;

```

#### Fit TH Loglogistic

**構文:** obj &lt;&lt; Fit TH Loglogistic

**説明:** 閾値-対数ロジスティック分布をデータにあてはめる。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Fit TH Loglogistic;

```

#### Fit TH Lognormal

**構文:** obj &lt;&lt; Fit TH Lognormal

**説明:** 閾値-対数正規分布をデータにあてはめる。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Fit TH Lognormal;

```

#### Fit TH Weibull

**構文:** obj &lt;&lt; Fit TH Weibull

**説明:** 閾値-Weibull分布をデータにあてはめる。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Fit TH Weibull;

```

#### Fit Weibull

**構文:** obj &lt;&lt; Fit Weibull

**説明:** Weibull分布をデータにあてはめる。

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Fit Weibull;

```

#### Fit ZI Frechet

**構文:** obj &lt;&lt; Fit ZI Frechet

**説明:** ゼロ強調-Fréchet分布をデータにあてはめる。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Spring.jmp" );
obj = dt << Life Distribution( Y( :Precip ) );
obj << Fit ZI Frechet;

```

#### Fit ZI Loglogistic

**構文:** obj &lt;&lt; Fit ZI Loglogistic

**説明:** ゼロ強調-対数ロジスティック分布をデータにあてはめる。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Spring.jmp" );
obj = dt << Life Distribution( Y( :Precip ) );
obj << Fit ZI Loglogistic;

```

#### Fit ZI Lognormal

**構文:** obj &lt;&lt; Fit ZI Lognormal

**説明:** ゼロ強調-対数正規分布をデータにあてはめる。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Spring.jmp" );
obj = dt << Life Distribution( Y( :Precip ) );
obj << Fit ZI Lognormal;

```

#### Fit ZI Weibull

**構文:** obj &lt;&lt; Fit ZI Weibull

**説明:** ゼロ強調-Weibull分布をデータにあてはめる。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Spring.jmp" );
obj = dt << Life Distribution( Y( :Precip ) );
obj << Fit ZI Weibull;

```

#### Get Estimates

**構文:** obj &lt;&lt; Get Estimates

**説明:** あてはめたすべての確率分布の推定値を含むリストを戻す。リストには、元のデータも含まれている。

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution(
	Y( :Time ),
	Censor( :Censor ),
	Fit Exponential,
	Set Scale( Exponential )
);
estimate = obj << Get Estimates;
Show( estimate );

```

#### Get Formula

**構文:** obj &lt;&lt; Get Formula

**説明:** あてはめたすべての確率分布の計算式を含むリストを戻す。リストには、元のデータも含まれている。

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution(
	Y( :Time ),
	Censor( :Censor ),
	Fit Exponential,
	Set Scale( Exponential )
);
formula = obj << Get Formula;
Show( formula );

```

#### Get Results

**構文:** obj &lt;&lt; Get Results

**説明:** あてはめたすべての分布の結果を含むリストを戻す。リストには、元のデータも含まれている。

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution(
	Y( :Time ),
	Censor( :Censor ),
	Fit Exponential,
	Set Scale( Exponential )
);
r = obj << Get Results;
Show( r );

```

#### Interval Type

**構文:** obj &lt;&lt; Interval Type( "同時"|"時点別" )

**説明:** 「分布の比較」プロットでノンパラメトリック推定される信頼区間の種類を指定します。指定できるオプションは、時点別信頼区間と同時信頼区間。

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ), Fit Exponential );
obj << Interval Type( "Pointwise" );

```

#### Nonparametric Estimate Plot Options

**構文:** obj &lt;&lt; Nonparametric Estimate Plot Options( "点"|"ステップ関数"|"両方"|"なし" )

**説明:** 確率プロットにおいてデータ点をどのように表示するかを指定する。点、ステップ関数、点とステップ関数の両方、またはどちらでもない、のいずれかを選択できる。

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
Wait( 1 );
obj << Nonparametric Estimate Plot Options( "Step Function" );

```

#### Rejection Sampler Maximum Trials

**構文:** obj &lt;&lt; Rejection Sampler Maximum Trials( number=10000 )

**説明:** デフォルトの値は"10000"。

**JMP追加されたバージョン:** 14

#### Save By Group Results

**構文:** obj &lt;&lt; Save By Group Results

**説明:** すべてのグループに対する結果を、新しいテーブルに行ごとに保存する。

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Blenders.jmp" );
obj = dt << Life Distribution(
	Y( :Time Cycles ),
	By( :Group ),
	Censor( :Censor ),
	Fit Exponential
);
obj[1] << Save By Group Results;

```

#### Set Scale

**構文:** obj &lt;&lt; Set Scale( Linear|Lognormal|Weibull|Loglogistic|Frechet|Normal|SEV|Logistic|LEV|Exponential )

**説明:** 「分布の比較」プロットの確率軸におけるスケールを指定する。

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ), Fit Exponential );
obj << Set Scale( Exponential );

```

#### Show Confidence Area

**構文:** obj &lt;&lt; Show Confidence Area( state=0|1 )

**説明:** 各グラフにおける信頼区間の塗りつぶした領域の表示/非表示を切り替える。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ), Fit Exponential );
Wait( 1 );
obj << Show Confidence Area( 0 );

```

#### Show Event Plot Frequency Label

**構文:** obj &lt;&lt; Show Event Plot Frequency Label( state=0|1 )

**説明:** イベントプロットにおいて、度数ラベルの表示/非表示を切り替る。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Microprocessor Data.jmp" );
obj = dt << Life Distribution( Y( :start time, end time ), Freq( :count ) );
Report( obj )["Event Plot"] << Close( 0 );
Wait( 1 );
obj << Show Event Plot Frequency Label( 0 );

```

#### Show Hazard Functions

**構文:** obj &lt;&lt; Show Hazard Functions( state=0|1 )

**説明:** 「ハザードプロファイル」レポートの表示/非表示を切り替える。このレポートでは、選択した複数の確率分布のハザード関数が重ねて描かれる。

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ), Fit Exponential );
obj << Show Hazard Functions( 1 );

```

#### Show Points

**構文:** obj &lt;&lt; Show Points( state=0|1 )

**説明:** 確率プロットにおいて、データ点の表示/非表示を切り替える。「寿命の一変量」プラットフォームの確率プロットでは、ステップ関数の中間点推定値がプロットされる。［点の表示］オプションの選択を解除すると、中間点推定値ではなく、通常のKaplan-Meier推定値がプロットされる。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
Wait( 1 );
obj << Show Points( 0 );

```

#### Show Quantile Functions

**構文:** obj &lt;&lt; Show Quantile Functions( state=0|1 )

**説明:** 「分位点プロファイル」レポートの表示/非表示を切り替える。このレポートでは、選択した複数の確率分布の分位点関数が重ねて描かれる。

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ), Fit Exponential );
obj << Show Quantile Functions( 1 );

```

#### Show Statistics

**構文:** obj &lt;&lt; Show Statistics( state=0|1 )

**説明:** 「統計量」レポートの表示/非表示を切り替える。このレポートには、「モデルの比較」、「データの要約」、「ノンパラメトリック推定値」、「パラメトリック推定値」が含まれている。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ), Fit Exponential );
Wait( 1 );
obj << Show Statistics( 0 );

```

#### Show Survival Curve

**構文:** obj &lt;&lt; Show Survival Curve( state=0|1 )

**説明:** 「分布の比較」の確率プロットと「分布プロファイル」プロットで、故障確率をプロットするか、生存確率をプロットするかを切り替える。

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution(
	Y( :Time ),
	Censor( :Censor ),
	Show Survival Curve( 1 ),
	Fit Exponential
);

```

#### Suppress Plot

**構文:** obj &lt;&lt; Suppress Plot( distribution name )

**説明:** レポートのプロットから指定された確率分布を削除する。このオプションは、「分布の比較」、「ハザードプロファイル」、または「分位点プロファイル」において、［分布］のチェックボックスのチェックを外すことと同じ処理を行う。

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Fit Weibull, Fit Lognormal, Set Scale( Weibull ) );
Wait( 2 );
obj << Suppress Plot( Lognormal );

```

#### Tabbed Report

**構文:** obj &lt;&lt; Tabbed Report( state=0|1 )

**説明:** 個々のタブに結果を表示する。デフォルトでは、タブではなく、アウトラインに結果は表示される。

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ), Fit Exponential );
obj << Tabbed Report( 1 );

```

