# Fit Definitive Screening



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

dt = Open( "$SAMPLE_DATA/Design Experiment/Extraction Data.jmp" );obj = dt << Fit Definitive Screening(	Y( :Yield ),	X( :Methanol, :Ethanol, :Propanol, :Butanol, :pH, :Time ));obj << Automatic Recalc( 1 );dt << Select Rows( 5 ) << Exclude( 1 );

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

dt = Open( "$SAMPLE_DATA/Design Experiment/Extraction Data.jmp" );obj = dt << Fit Definitive Screening(	Y( :Yield ),	X( :Methanol, :Ethanol, :Propanol, :Butanol, :pH, :Time ));obj << Copy Script;

```

### Data Table Window

**構文:** obj &lt;&lt; Data Table Window

**説明:** この分析に使用したデータテーブルのウィンドウを手前に表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Extraction Data.jmp" );obj = dt << Fit Definitive Screening(	Y( :Yield ),	X( :Methanol, :Ethanol, :Propanol, :Butanol, :pH, :Time ));obj << Data Table Window;

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

dt = Open( "$SAMPLE_DATA/Design Experiment/Extraction Data.jmp" );obj = dt << Fit Definitive Screening(	Y( :Yield ),	X( :Methanol, :Ethanol, :Propanol, :Butanol, :pH, :Time ));t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

### Get Data Table

**構文:** obj &lt;&lt; Get Data Table

**説明:** データテーブルへの参照を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Extraction Data.jmp" );obj = dt << Fit Definitive Screening(	Y( :Yield ),	X( :Methanol, :Ethanol, :Propanol, :Butanol, :pH, :Time ));t = obj << Get Datatable;Show( N Rows( t ) );

```

### Get Script

**構文:** obj &lt;&lt; Get Script

**説明:** この分析を再現するスクリプト(JSL)を生成し、それを式として戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Extraction Data.jmp" );obj = dt << Fit Definitive Screening(	Y( :Yield ),	X( :Methanol, :Ethanol, :Propanol, :Butanol, :pH, :Time ));t = obj << Get Script;Show( t );

```

### Get Script With Data Table

**構文:** obj &lt;&lt; Get Script With Data Table

**説明:** この分析を再現するスクリプト(JSL)をデータテーブルへの参照も含めて生成し、それを式として戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Extraction Data.jmp" );obj = dt << Fit Definitive Screening(	Y( :Yield ),	X( :Methanol, :Ethanol, :Propanol, :Butanol, :pH, :Time ));t = obj << Get Script With Data Table;Show( t );

```

### Get Timing

**構文:** obj &lt;&lt; Get Timing

**説明:** プラットフォームの起動にかかった時間を取得する。

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Extraction Data.jmp" );obj = dt << Fit Definitive Screening(	Y( :Yield ),	X( :Methanol, :Ethanol, :Propanol, :Butanol, :pH, :Time ));t = obj << Get Timing;Show( t );

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

### New Preset

**構文:** obj = New Preset()

**説明:** オブジェクトに適用されているオプションとカスタマイズをプリセットとしてまとめる。このオブジェクトをApply Presetに渡すことで、同じ種類のオブジェクトに設定をコピーすることができる。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();

```

### Redo Analysis

**構文:** obj &lt;&lt; Redo Analysis

**説明:** 同じ分析をやり直し新しいウィンドウに表示する。データが変更されていると分析結果は異なる。

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Extraction Data.jmp" );obj = dt << Fit Definitive Screening(	Y( :Yield ),	X( :Methanol, :Ethanol, :Propanol, :Butanol, :pH, :Time ));obj << Redo Analysis;

```

### Relaunch Analysis

**構文:** obj &lt;&lt; Relaunch Analysis

**説明:** プラットフォームの起動ウィンドウを開き、レポートを作成した時の設定を表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Extraction Data.jmp" );obj = dt << Fit Definitive Screening(	Y( :Yield ),	X( :Methanol, :Ethanol, :Propanol, :Butanol, :pH, :Time ));obj << Relaunch Analysis;

```

### Remove Column Switcher

**構文:** obj &lt;&lt; Remove Column Switcher

**説明:** プラットフォームに最後に追加された列スイッチャーを削除する。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});Wait( 2 );obj << Remove Column Switcher;

```

### Report

**構文:** obj &lt;&lt; Report; Report( obj )

**説明:** レポートオブジェクトへの参照を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Extraction Data.jmp" );obj = dt << Fit Definitive Screening(	Y( :Yield ),	X( :Methanol, :Ethanol, :Propanol, :Butanol, :pH, :Time ));r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Save Script for All Objects

**構文:** obj &lt;&lt; Save Script for All Objects

**説明:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Extraction Data.jmp" );obj = dt << Fit Definitive Screening(	Y( :Yield ),	X( :Methanol, :Ethanol, :Propanol, :Butanol, :pH, :Time ));obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**構文:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**説明:** すべてのレポートオブジェクトを再現するスクリプトを現在のデータテーブルに保存する。このオプションは、ウィンドウ内にレポートが複数ある場合に便利。作成されるスクリプトの名前は、引用符で囲んで指定しない限り、1つ目のプラットフォーム名となる。

**例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Extraction Data.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Definitive Screening(	Y( :Yield ),	X( :Methanol, :Ethanol, :Propanol, :Butanol, :pH, :Time ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table;

```

**例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Extraction Data.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Definitive Screening(	Y( :Yield ),	X( :Methanol, :Ethanol, :Propanol, :Butanol, :pH, :Time ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**構文:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**説明:** この分析を再現するJSLスクリプトを生成し、データテーブルのテーブルプロパティとして保存する。

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Extraction Data.jmp" );obj = dt << Fit Definitive Screening(	Y( :Yield ),	X( :Methanol, :Ethanol, :Propanol, :Butanol, :pH, :Time ));obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**構文:** obj &lt;&lt; Save Script to Journal

**説明:** この分析を再現するJSLスクリプトを生成し、ジャーナルにそのスクリプトのボタンを追加する。

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Extraction Data.jmp" );obj = dt << Fit Definitive Screening(	Y( :Yield ),	X( :Methanol, :Ethanol, :Propanol, :Butanol, :pH, :Time ));obj << Save Script to Journal;

```

### Save Script to Report

**構文:** obj &lt;&lt; Save Script to Report

**説明:** この分析を再現するJSLスクリプトを生成し、レポートウィンドウに表示する。分析手順の記録を結果と一緒に残せる。

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Extraction Data.jmp" );obj = dt << Fit Definitive Screening(	Y( :Yield ),	X( :Methanol, :Ethanol, :Propanol, :Butanol, :pH, :Time ));obj << Save Script to Report;

```

### Save Script to Script Window

**構文:** obj &lt;&lt; Save Script to Script Window

**説明:** この分析を再現するJSLスクリプトを生成し、現在のスクリプトウィンドウに表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Extraction Data.jmp" );obj = dt << Fit Definitive Screening(	Y( :Yield ),	X( :Methanol, :Ethanol, :Propanol, :Butanol, :pH, :Time ));obj << Save Script to Script Window;

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

### Title

**構文:** obj &lt;&lt; Title( "new title" )

**説明:** プラットフォームのタイトルを設定する。

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Extraction Data.jmp" );obj = dt << Fit Definitive Screening(	Y( :Yield ),	X( :Methanol, :Ethanol, :Propanol, :Butanol, :pH, :Time ));obj << Title( "My Platform" );

```

### Top Report

**構文:** obj &lt;&lt; Top Report

**説明:** レポート内のルートノードへの参照を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Extraction Data.jmp" );obj = dt << Fit Definitive Screening(	Y( :Yield ),	X( :Methanol, :Ethanol, :Propanol, :Butanol, :pH, :Time ));r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### View Web XML

**構文:** obj &lt;&lt; View Web XML

**説明:** インタラクティブHTMLレポートの作成に使うXMLコードを戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );xml = obj << View Web XML;

```

## 列

### By

**構文:** obj &lt;&lt; By( column(s) )

**説明:** 指定された列の各水準に対して、個別に分析を実行する。

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Extraction Data.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Definitive Screening(	Y( :Yield ),	X( :Methanol, :Ethanol, :Propanol, :Butanol, :pH, :Time ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));

```

### X

**構文:** obj &lt;&lt; X( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Extraction Data.jmp" );obj = dt << Fit Definitive Screening(	Y( :Yield ),	X( :Methanol, :Ethanol, :Propanol, :Butanol, :pH, :Time ));

```

### Y

**構文:** obj &lt;&lt; Y( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Extraction Data.jmp" );obj = dt << Fit Definitive Screening(	Y( :Yield ),	X( :Methanol, :Ethanol, :Propanol, :Butanol, :pH, :Time ));

```

## 関連するコンストラクター

### Fit Definitive Screening

**構文:** Fit Definitive Screening( Y( column ), X( columns ) )

**説明:** 「決定的スクリーニング計画の効果的モデル選択」(Effective Model Selection for DSDs)と呼ばれる方法を使い、決定的スクリーニング計画で得られたデータを分析する。この分析では、決定的スクリーニング計画の特性を利用して主効果や2次効果を特定する。

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Extraction Data.jmp" );obj = dt << Fit Definitive Screening(	Y( :Yield ),	X( :Methanol, :Ethanol, :Propanol, :Butanol, :pH, :Time ));

```

## 項目のメッセージ

### Interactions Obey Strong Heredity

**構文:** obj &lt;&lt; Interactions Obey Strong Heredity( state=0|1 )

**JMP追加されたバージョン:** 14

### Make Model Callback

**構文:** obj &lt;&lt; Make Model Callback

**JMP追加されたバージョン:** 14

### Quadratic Terms Obey Strong Heredity

**構文:** obj &lt;&lt; Quadratic Terms Obey Strong Heredity( state=0|1 )

**JMP追加されたバージョン:** 14

### Run Model Callback

**構文:** obj &lt;&lt; Run Model Callback

**JMP追加されたバージョン:** 14

### Set Stage 1 p value

**構文:** obj &lt;&lt; Set Stage 1 p value

**JMP追加されたバージョン:** 15

### Set Stage 2 ratio

**構文:** obj &lt;&lt; Set Stage 2 ratio

**JMP追加されたバージョン:** 15

