# Bayesian Optimization



## 共有されるメッセージ

### Action

**構文:** obj &lt;&lt; Action

**説明:** 評価する式を挿入するための、プラットフォーム内の汎用トラップドア。プラットフォームに一時的にディスプレイボックスおよびデータテーブルのコンテキストを設定する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

### Apply Preset

**構文:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**説明:** 作成されたプリセットをオブジェクトに適用する。保存された設定に合わせてオプションとカスタマイズが更新される。

**JMP追加されたバージョン:** 18

#### フォルダ内で検索

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

#### 匿名のプリセット

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );Wait( 1 );obj2 << Apply Preset( preset );

```

#### 名前で検索

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

### Automatic Recalc

**構文:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**説明:** データの除外や変更があった場合に分析を自動的にやり直す。Automatic Recalcオプションがオンになっている場合で、データの除外や変更が再計算の前に確実に適用されるようにするには、Wait(0)コマンドを使用すること。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Automatic Recalc( 1 );dt << Select Rows( 5 ) << Exclude( 1 );

```

### Column Switcher

**構文:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**説明:** プラットフォームの変数を変更するための設定パネルを追加する。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});

```

### Copy Script

**構文:** obj &lt;&lt; Copy Script

**説明:** この分析を再現するJSLスクリプトを生成し、クリップボードにコピーする。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Copy Script;

```

### Data Table Window

**構文:** obj &lt;&lt; Data Table Window

**説明:** この分析に使用したデータテーブルのウィンドウを手前に表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Data Table Window;

```

### Get By Levels

**構文:** obj &lt;&lt; Get By Levels

**説明:** By列が指定されている場合、列名をキー、データ値を値とした連想配列を戻す。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv << Get By Levels;

```

### Get Container

**構文:** obj &lt;&lt; Get Container

**説明:** オブジェクトのコンテンツを含んだコンテナボックスの参照を戻す。

#### フィルタのあるプラットフォーム

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

#### 一般

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

### Get Data Table

**構文:** obj &lt;&lt; Get Data Table

**説明:** データテーブルへの参照を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));t = obj << Get Datatable;Show( N Rows( t ) );

```

### Get Script

**構文:** obj &lt;&lt; Get Script

**説明:** この分析を再現するスクリプト(JSL)を生成し、それを式として戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));t = obj << Get Script;Show( t );

```

### Get Script With Data Table

**構文:** obj &lt;&lt; Get Script With Data Table

**説明:** この分析を再現するスクリプト(JSL)をデータテーブルへの参照も含めて生成し、それを式として戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));t = obj << Get Script With Data Table;Show( t );

```

### Get Timing

**構文:** obj &lt;&lt; Get Timing

**説明:** プラットフォームの起動にかかった時間を取得する。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));t = obj << Get Timing;Show( t );

```

### Get Web Support

**構文:** obj &lt;&lt; Get Web Support

**説明:** ディスプレイオブジェクトにおけるインタラクティブHTMLサポートのレベルを数値で戻す。1は、一部または全部の要素がサポートされていることを示し、0は、サポートされないことを示す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );s = obj << Get Web Support();Show( s );

```

### Get Where Expr

**構文:** obj &lt;&lt; Get Where Expr

**説明:** プラットフォームがBy()またはWhere()を使って起動された場合に、データをサブセットするためのWhere式を戻す。By()やWhere()が使われていない場合はEmpty()を戻す。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

### Ignore Platform Preferences

**構文:** Ignore Platform Preferences( state=0|1 )

**説明:** プラットフォームに対する現在の環境設定を無視する。このメッセージは、プラットフォームを呼び出した後に、そのプラットフォームに送られた場合、無視される。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Ignore Platform Preferences( 1 ),	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

### Local Data Filter

**構文:** obj &lt;&lt; Local Data Filter

**説明:** このプラットフォームに対してのみ有効なフィルタで、データを特定のグループまたは範囲にフィルタリングする。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));

```

### New Preset

**構文:** obj = New Preset()

**説明:** オブジェクトに適用されているオプションとカスタマイズをプリセットとしてまとめる。このオブジェクトをApply Presetに渡すことで、同じ種類のオブジェクトに設定をコピーすることができる。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();

```

### Paste Local Data Filter

**構文:** obj &lt;&lt; Paste Local Data Filter

**説明:** クリップボードにあるローカルデータフィルタを現在のレポートに適用する。

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );filter = dist << Local Data Filter(	Add Filter( columns( :Region ), Where( :Region == "MW" ) ));filter << Copy Local Data Filter;dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );Wait( 1 );dist2 << Paste Local Data Filter;

```

### Redo Analysis

**構文:** obj &lt;&lt; Redo Analysis

**説明:** 同じ分析をやり直し新しいウィンドウに表示する。データが変更されていると分析結果は異なる。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Redo Analysis;

```

### Relaunch Analysis

**構文:** obj &lt;&lt; Relaunch Analysis

**説明:** プラットフォームの起動ウィンドウを開き、レポートを作成した時の設定を表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Relaunch Analysis;

```

### Remove Column Switcher

**構文:** obj &lt;&lt; Remove Column Switcher

**説明:** プラットフォームに最後に追加された列スイッチャーを削除する。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});Wait( 2 );obj << Remove Column Switcher;

```

### Remove Local Data Filter

**構文:** obj &lt;&lt; Remove Local Data Filter

**説明:** すでに作成されているローカルデータフィルタを削除し、プラットフォームはデータテーブル内のすべてのデータを使用した状態に戻る。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dist = dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));Wait( 2 );dist << remove local data filter;

```

### Report

**構文:** obj &lt;&lt; Report; Report( obj )

**説明:** レポートオブジェクトへの参照を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Report View

**構文:** obj &lt;&lt; Report View( "完全"|"要約" )

**説明:** レポートビューは、プラットフォームレポートの詳細を表示するかどうかを決定する。Fullはすべての詳細を表示し、Summaryはプラットフォームにより限定されたものだけを表示する。 動作をカスタマイズするため、各ディスプレイボックスは<<Set Summary Behaviorメッセージをサポートする。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Report View( "Summary" );

```

### Save Script for All Objects

**構文:** obj &lt;&lt; Save Script for All Objects

**説明:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**構文:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**説明:** すべてのレポートオブジェクトを再現するスクリプトを現在のデータテーブルに保存する。このオプションは、ウィンドウ内にレポートが複数ある場合に便利。作成されるスクリプトの名前は、引用符で囲んで指定しない限り、1つ目のプラットフォーム名となる。

**例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table;

```

**例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**構文:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**説明:** この分析を再現するJSLスクリプトを生成し、データテーブルのテーブルプロパティとして保存する。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**構文:** obj &lt;&lt; Save Script to Journal

**説明:** この分析を再現するJSLスクリプトを生成し、ジャーナルにそのスクリプトのボタンを追加する。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Save Script to Journal;

```

### Save Script to Report

**構文:** obj &lt;&lt; Save Script to Report

**説明:** この分析を再現するJSLスクリプトを生成し、レポートウィンドウに表示する。分析手順の記録を結果と一緒に残せる。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Save Script to Report;

```

### Save Script to Script Window

**構文:** obj &lt;&lt; Save Script to Script Window

**説明:** この分析を再現するJSLスクリプトを生成し、現在のスクリプトウィンドウに表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Save Script to Script Window;

```

### SendToByGroup

**構文:** SendToByGroup( {":Column == level"}, command );

**説明:** プラットフォームコマンドまたは表示のカスタマイズコマンドをByグループの各水準に送る。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	By( :Sex ),	SendToByGroup(		{:sex == "F"},		Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) )	),	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) ));

```

### SendToEmbeddedScriptable

**構文:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**説明:** SendToEmbeddedScriptableは、埋め込まれたスクリプト可能なオブジェクトの設定を復元する。

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );dt << Life Distribution(	Y( :Time ),	Censor( :Censor ),	Censor Code( 1 ),	<<Fit Weibull,	SendToEmbeddedScriptable(		Dispatch(			{"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}		)	));

```

### SendToReport

**構文:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**説明:** Send To Reportはレポートの表示をカスタマイズするためにDispatchコマンドと一緒に使用される。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Nominal Distribution( Column( :age ) ),	Continuous Distribution( Column( :weight ) ),	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) ));

```

### Sync to Data Table Changes

**構文:** obj &lt;&lt; Sync to Data Table Changes

**説明:** 除外やデータの変更が行われた場合に同期する。

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );Wait( 1 );dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );dist << Sync To Data Table Changes;

```

### Title

**構文:** obj &lt;&lt; Title( "new title" )

**説明:** プラットフォームのタイトルを設定する。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Title( "My Platform" );

```

### Top Report

**構文:** obj &lt;&lt; Top Report

**説明:** レポート内のルートノードへの参照を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### View Web XML

**構文:** obj &lt;&lt; View Web XML

**説明:** インタラクティブHTMLレポートの作成に使うXMLコードを戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );xml = obj << View Web XML;

```

## 列

### Iteration

**構文:** obj &lt;&lt; Iteration( column )

**説明:** バッチ番号が含まれている列を指定する。バッチ番号は、0, 1, 2...の順で通し番号になっていなければいけない。バッチ番号0は、元の学習データを示す。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );dt << New Column( "_itercol",	Numeric,	Ordinal,	set values( V Concat( (Repeat( 0, N Rows( dt ) - 10 )), Repeat( 1, 10 ) ) ));obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Iteration( _itercol ));

```

### Run Order

**構文:** obj &lt;&lt; Run Order( column )

**説明:** 実験の順序が含まれている列を指定する。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );dt << New Column( "_runorder", Numeric, Ordinal, set values( 1 :: (N Rows( dt )) ) );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Run Order( _runorder ));

```

### X

**構文:** obj &lt;&lt; X( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));

```

### Y

**構文:** obj &lt;&lt; Y( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));

```

## 関連するコンストラクター

### Bayesian Optimization

**構文:** Bayesian Optimization( Y( columns ), X( columns ) )

**説明:** 1つのもしくは複数の応答変数を最適化するための逐次的な実験において、追加実験の条件を探索していく。データテーブルに追加実験の因子設定が保存されていく。

**JMP追加されたバージョン:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));

```

## 項目のメッセージ

### Automatically Generate a Batch

**構文:** obj &lt;&lt; Automatically Generate a Batch( state=0|1 )

**説明:** このオプションをオンにすると、候補集合が生成され、そこからバッチが自動的に選択される。追加のオプションで、バッチの自動選択に使う基準も指定できる。このオプションは、[候補集合の生成](Generate Candidate Set)と[バッチの自動選択](Autoselect Batch)を同時に指定した場合と同じ処理を行う。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Automatically Generate a Batch( 1 ));

```

### Autoselect Batch

**構文:** obj &lt;&lt; Autoselect Batch( state=0|1 )

**説明:** 現在の候補集合からバッチを選択する。現在の候補集合がない場合は、Space Filling計画に基づいて入力変数の個数の1000倍にあたる大きさの候補集合が生成される。このオプションは、起動時の自動バッチ選択をオフにする目的で使用することもできる。

**例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Generate Candidate Set(		Candidate Set Size( 10 ),		Include Runs that Do Not Conform to Constraints( 0 )	),	Autoselect Batch( Batch Size( 1 ), Minimum RSquare( 0.5 ) ));

```

**例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Generate Candidate Set(		Candidate Set Size( 10 ),		Include Runs that Do Not Conform to Constraints( 0 )	),	Autoselect Batch( 0 ));

```

**例 3**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Automatically Generate a Batch( 0 ));obj << Autoselect Batch( Batch Size( 5 ), Augmentation Method( Space Filling Exploration ) );

```

### Batch Size

**構文:** obj &lt;&lt; Batch Size( number )

**説明:** 自動モードでのデフォルトのバッチサイズ。プラットフォームを起動した時に自動選択するバッチのサイズ。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Batch Size( 5 ));

```

### Candidate Set Size

**構文:** obj &lt;&lt; Candidate Set Size( number )

**説明:** 生成する候補集合の大きさ。候補集合に含める行数。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Candidate Set Size( 10 ));

```

### Continuous Correlation Type

**構文:** obj &lt;&lt; Continuous Correlation Type( "Gauss"|"Matern 3/2"|"Matern 5/2"|"指数" )

**説明:** 連続尺度の入力変数に対するカーネル。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Continuous Correlation Type( "Matern 5/2" ));

```

### Generate Candidate Set

**構文:** obj &lt;&lt; Generate Candidate Set( Candidate Set Size( number ), &lt;Include Runs that Do Not Conform to Constraints( state = 0|1 )&gt; )

**説明:** 候補集合を生成する。生成する候補集合の大きさと、データテーブルの線形制約を満たしていない点を許可するかどうかを指定できる。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Generate Candidate Set(		Candidate Set Size( 10 ),		Include Runs that Do Not Conform to Constraints( 0 )	));

```

### Include Runs that Do Not Conform to Constraints

**構文:** obj &lt;&lt; Include Runs that Do Not Conform to Constraints( state=0|1 )

**説明:** 候補集合を生成する時やロードする時に、データテーブル内の線形制約に違反した点も含めるかどうかを指定する。

**例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Include Runs that Do Not Conform to Constraints( 0 ));

```

**例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );dtCand = New Table( "Tiretread Candidate Set",	Add Rows( 15 ),	New Column( "SILICA",		Continuous,		Set Values(			[1.2, 1.60825, 0.79175, 0.995875, 1.812375, 1.404125, 0.587625, 0.6896875,			1.5061875, 1.9144375, 1.0979375, 0.8938125, 1.7103125, 1.3020625, 0.4855625]		)	),	New Column( "SILANE",		Continuous,		Set Values(			[50, 41.835, 58.165, 45.9175, 62.2475, 37.7525, 54.0825, 43.87625, 60.20625,			35.71125, 52.04125, 39.79375, 56.12375, 47.95875, 64.28875]		)	),	New Column( "SULFUR",		Continuous,		Set Values(			[2.3, 1.89175, 2.70825, 2.504125, 1.687625, 2.912375, 2.095875, 3.0144375,			2.1979375, 2.6061875, 1.7896875, 1.9938125, 2.8103125, 1.5855625, 2.4020625]		)	));dt << New Script( "Constraint", {:SILICA + :SULFUR <= 3} );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Include Runs that Do Not Conform to Constraints( 0 ),	Load Candidate Set from Data Table( dtCand ));

```

### Minimum RSquare

**構文:** obj &lt;&lt; Minimum RSquare( number )

**説明:** バッチ自動選択におけるサブモードの切り替えに使われるR2乗の閾値。このオプションは、「Bayes最適化」プラットフォームの起動ウィンドウでは[モデルに基づく選択に切り替えるR2乗閾値]と表示されています。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Minimum RSquare( 0.25 ));

```

### Nominal Correlation Type

**構文:** obj &lt;&lt; Nominal Correlation Type( "均一相関構造"|"不均一相関構造" )

**説明:** 名義尺度の入力変数に対するカーネル。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Nominal Correlation Type( "Equal Correlations" ));

```

### Ordinal Correlation Type

**構文:** obj &lt;&lt; Ordinal Correlation Type( "均一相関構造"|"不均一相関構造"|"潜在変数" )

**説明:** 順序尺度の入力変数に対するカーネル。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Ordinal Correlation Type( "Equal Correlations" ));

```

### Save Prediction Formula

**構文:** obj &lt;&lt; Save Prediction Formula

**説明:** 予測式をデータテーブルの新しい列に保存する。

**例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Save Prediction Formula;

```

**例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Save Prediction Formula( Elong );

```

### Set Tab

**構文:** obj &lt;&lt; Set Tab( number )

**説明:** 現在のタブを指定する。この引数は、0を「モデルの要約」タブ、1を「バッチの選択」タブ、のように、レポートウィンドウに表示されたタブの順序で引数を解釈する。

**例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << set tab( 1 );

```

**例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << set tab( "ABRASION" );

```

## Bayesian Optimization Batch Customizer > Candidate Set View

### 項目のメッセージ

#### Export Candidate Set to Data Table

**構文:** obj &lt;&lt; Export Candidate Set to Data Table

**説明:** 現在ロードされている候補集合を新しいデータテーブルに書き出す。書き出したい複数の列を、引数として指定できる。列を指定しなかった場合は、デフォルトで因子設定が書き出される。引数をまったく指定しなかった場合は、オプションを指定するためのウィンドウが表示される。

**例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Export Candidate Set to Data Table( Go );

```

**例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Export Candidate Set to Data Table();

```

**例 3**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Export Candidate Set to Data Table(	Order Added, Factor Settings, Bayesian Desirability, Bayesian Desirability Std Dev,	Multimodel Prediction Std Dev, MaxPro Space Filling Criterion,	Bayesian Desirability Expected Improvement, Bayesian Desirability Upper Confidence Bound,	Training Response Predictions, Augmented Response Prediction Std Dev,	Augmented Response Prediction Confidence Intervals);

```

#### Select Runs

**構文:** obj &lt;&lt; Select Runs( Row Index( [ numbers ] ), &lt;Order Added( [ numbers ]&gt;, &lt;Reason Added( { text } )&gt;, &lt;Replace( 0|1 )&gt; )

**説明:** 候補集合の表から、現在のバッチに追加する行を選択する。

**例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Select Runs(		Row Index( [3 5] ),		Order Added( [1 2] ),		Reason Added( {"Custom Reason", "Custom Reason"} ),		Replace( 1 )	));

```

**例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	autoselect batch( 0 ));obj << Select Runs(	Row Index( [3 5] ),	Order Added( [1 2] ),	Reason Added( {"Custom Reason", "Custom Reason"} ),	Replace( 0 ));

```

#### Show Table Columns

**構文:** obj &lt;&lt; Show Table Columns( &lt;"Column Group Name"&gt;,... )

**説明:** 候補集合の表に表示する列を指定する。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Show Table Columns( Order Added, Factor Settings, Bayesian Desirability ));

```

## Bayesian Optimization Batch Customizer

### 項目のメッセージ

#### Add Current Profiler Settings to Batch

**構文:** obj &lt;&lt; Add Current Profiler Settings to Batch

**説明:** 現在のプロファイル設定を、バッチおよび実験候補に追加する。「バッチ」とは、次回に行う追加実験の集合である。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Add Current Profiler Settings to Batch;

```

#### Augmented Acquisition Functions Profiler

**構文:** obj &lt;&lt; Augmented Acquisition Functions Profiler( state=0|1 )

**説明:** 因子の値の変化に応じて各獲得関数がどのように変化するかを確認できるプロファイルの表示/非表示を切り替える。現在のバッチに選択されている点もデータとして追加されているという仮定の下で、獲得関数は計算される。このプロファイルは、「実験追加後の予測プロファイル」において因子水準と満足度関数に加えられた変更を反映する。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Augmented Acquisition Functions Profiler( 0 );

```

#### Augmented Prediction Profiler

**構文:** obj &lt;&lt; Augmented Prediction Profiler( state=0|1 )

**説明:** 各モデルにおいて、因子の値の変化に応じて各列がどのように変化するかを確認できるプロファイルの表示/非表示を切り替える。現在のバッチに選択されている点もデータとして追加されているという仮定の下で、予測分散は計算される。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Augmented Prediction Profiler( 0 );

```

#### Deselect All

**構文:** obj &lt;&lt; Deselect All

**説明:** Deselect all points in current batch.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Deselect All;

```

#### Load Candidate Set from Data Table

**構文:** obj &lt;&lt; Load Candidate Set from Data Table

**例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Load Candidate Set from Data Table());

```

**例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Borehole Latin Hypercube.jmp" );:log y << Set Property( "Response Limits", {Goal( maximize ), Importance( 1 )} );obj = dt << Bayesian Optimization(	Y( :log y ),	X( :log10 Rw, :log10 R, :Tu, :Tl, :Hu, :Hl, :L, :Kw ));dt_candidate = Open( "$SAMPLE_DATA/Design Experiment/Borehole Uniform.jmp" );obj << Load Candidate Set from Data Table( dt_candidate );

```

#### Make Table

**構文:** obj &lt;&lt; Make Table

**説明:** Export currently selected batch points to data table based on current settings.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Make Table;

```

#### Make Table Options

**構文:** obj &lt;&lt; Make Table Options( &lt;Location( state = 0|1 )&gt;, &lt;Randomize Runs( state = 0|1 )&gt;, &lt; "Include Option Name"( state = 0|1 ) &gt; , ... )

**説明:** 選択したバッチをデータテーブルに書き出す際に使用されるオプションの設定を選択できる。"Include Option Name"は、「データ追加のオプション」メニューに含まれるオプションのいずれかを指す。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Make Table Options(		Location( 1 ),		Randomize Runs( 0 ),		Save desirability function values to columns( 1 ),		Save startup script for next batch selection to data table( 1 ),		Include observed desirabilities( 1 ),		Include original candidate set row indices( 1 ),		Include reason added column( 1 ),		Include predicted response values( 1 ),		Include prediction standard deviations( 1 ),		Include Bayesian desirability expected improvement column( 1 )	));

```

#### Maximize Bayesian Desirability

**構文:** obj &lt;&lt; Maximize Bayesian Desirability

**説明:** 満足度分布の事後平均が最大となっている因子設定を見つける。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Maximize Bayesian Desirability;

```

#### Maximize Bayesian Desirability Std Dev

**構文:** obj &lt;&lt; Maximize Bayesian Desirability Std Dev

**説明:** 満足度分布における事後標準偏差が最大となっている因子設定を見つける。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Maximize Bayesian Desirability Std Dev;

```

#### Maximize Expected Improvement

**構文:** obj &lt;&lt; Maximize Expected Improvement

**説明:** Bayes満足度から求められる期待改善量が最大となっている因子設定を見つける。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Maximize Expected Improvement;

```

#### Maximize MaxPro Criterion

**構文:** obj &lt;&lt; Maximize MaxPro Criterion

**説明:** Space Filling（空間充填）のMaxPro基準が最も良くなる因子設定を見つける。実験空間をうまく埋めるような実験点が探し出される。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Maximize MaxPro Criterion;

```

#### Maximize Multimodel Std Dev

**構文:** obj &lt;&lt; Maximize Multimodel Std Dev

**説明:** 複数の応答変数における予測標準偏差が最大となっている因子設定を見つける。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Maximize Multimodel Std Dev;

```

#### Maximize Upper Confidence Bound

**構文:** obj &lt;&lt; Maximize Upper Confidence Bound

**説明:** Bayes満足度の予測上側信頼限界が最も大きくなっている因子設定を見つける。これは、UCB基準とも呼ばれている。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Maximize Upper Confidence Bound;

```

#### Restore Best Training Point

**構文:** obj &lt;&lt; Restore Best Training Point

**説明:** 学習データにおいて応答の観測値から求められる満足度が最も高い行の因子設定を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Maximize Bayesian Desirability;obj << Add Current Profiler Settings to Batch;obj << Restore Best Training Point;

```

## Bayesian Optimization Model Summary

### 項目のメッセージ

#### All Responses Profiler

**構文:** obj &lt;&lt; All Responses Profiler( state=0|1 )

**説明:** 複数のモデルに対して、各因子の値が変化したときに応答がどのように変化するかを調べる。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	All Responses Profiler( 1 ));

```

## Gaussian Process Model

### 項目のメッセージ

#### Intercept

**構文:** obj &lt;&lt; Intercept( number )

**説明:** Gauss過程モデルのあてはめに使う切片パラメータの値を指定する。θ、ナゲット、残差、切片のパラメータすべてが指定されている場合、それらの値は固定値として扱われる。値の一部のみが指定されている場合は、指定された値が開始値として扱われる。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Response Model Tab(		Y( :ABRASION ),		Theta Values( {0.5, 0.5, 0.5} ),		Nugget( 0.05 ),		Residual( 500 ),		Intercept( 100 )	));

```

#### Nugget

**構文:** obj &lt;&lt; Nugget( number )

**説明:** Gauss過程モデルのあてはめに使うナゲットパラメータの値を指定する。θ、ナゲット、残差、切片のパラメータすべてが指定されている場合、それらの値は固定値として扱われる。値の一部のみが指定されている場合は、指定された値が開始値として扱われる。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Response Model Tab(		Y( :ABRASION ),		Theta Values( {0.5, 0.5, 0.5} ),		Nugget( 0.05 ),		Residual( 500 ),		Intercept( 100 )	));

```

#### Profiler

**構文:** obj &lt;&lt; Profiler( state=0|1 )

**説明:** 複数のモデルに対して、各因子の値が変化したときに応答がどのように変化するかを調べる。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Response Model Tab( Y( :MODULUS ), Profiler( 0 ) ));

```

#### Residual

**構文:** obj &lt;&lt; Residual( number )

**説明:** Gauss過程モデルのあてはめに使う残差パラメータの値を指定する。θ、ナゲット、残差、切片のパラメータすべてが指定されている場合、それらの値は固定値として扱われる。値の一部のみが指定されている場合は、指定された値が開始値として扱われる。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Response Model Tab(		Y( :ABRASION ),		Theta Values( {0.5, 0.5, 0.5} ),		Nugget( 0.05 ),		Residual( 500 ),		Intercept( 100 )	));

```

#### Starting Values

**構文:** obj &lt;&lt; Starting Values( number )

**説明:** Gauss過程モデルを推定するための反復計算で用いる開始値。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Response Model Tab(		Y( :ABRASION ),		Starting Values(			Theta Values( {0.5, 0.5, 0.5} ),			Nugget( 0.05 ),			Residual( 500 ),			Intercept( 100 )		)	));

```

#### Theta Values

**構文:** obj &lt;&lt; Theta Values( number )

**説明:** Gauss過程モデルのあてはめに使うθパラメータの値を指定する。θ、ナゲット、残差、切片のパラメータすべてが指定されている場合、それらの値は固定値として扱われる。値の一部のみが指定されている場合は、指定された値が開始値として扱われる。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Response Model Tab(		Y( :ABRASION ),		Theta Values( {0.5, 0.5, 0.5} ),		Nugget( 0.05 ),		Residual( 500 ),		Intercept( 100 )	));

```

