# XGBoost



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

### Copy ByGroup Script

**構文:** obj &lt;&lt; Copy ByGroup Script

**説明:** この分析を再現するJSLスクリプトを生成し、クリップボードにコピーする。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );obj[1] << Copy ByGroup Script;

```

### Copy Script

**構文:** obj &lt;&lt; Copy Script

**説明:** この分析を再現するJSLスクリプトを生成し、クリップボードにコピーする。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );obj << Copy Script;

```

### Get By Levels

**構文:** obj &lt;&lt; Get By Levels

**説明:** By列が指定されている場合、列名をキー、データ値を値とした連想配列を戻す。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv << Get By Levels;

```

### Get ByGroup Script

**構文:** obj &lt;&lt; Get ByGroup Script

**説明:** この分析を再現するスクリプト(JSL)を生成し、それを式として戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );t = obj[1] << Get ByGroup Script;Show( t );

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

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

### Get Data Table

**構文:** obj &lt;&lt; Get Data Table

**説明:** データテーブルへの参照を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );t = obj << Get Datatable;Show( N Rows( t ) );

```

### Get Script

**構文:** obj &lt;&lt; Get Script

**説明:** この分析を再現するスクリプト(JSL)を生成し、それを式として戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );t = obj << Get Script;Show( t );

```

### Get Script With Data Table

**構文:** obj &lt;&lt; Get Script With Data Table

**説明:** この分析を再現するスクリプト(JSL)をデータテーブルへの参照も含めて生成し、それを式として戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );t = obj << Get Script With Data Table;Show( t );

```

### Get Timing

**構文:** obj &lt;&lt; Get Timing

**説明:** プラットフォームの起動にかかった時間を取得する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );t = obj << Get Timing;Show( t );

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

### Report

**構文:** obj &lt;&lt; Report; Report( obj )

**説明:** レポートオブジェクトへの参照を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Save ByGroup Script to Data Table

**構文:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**説明:** 分析を再現するためのJSLスクリプトを作成し、データテーブルにテーブルプロパティとして保存する。スクリプトの名前を指定できる。Append Suffixオプションは、スクリプト名に数字の接尾辞を追加する。これにより、同名のスクリプトが存在していても区別できる。Promptオプションは、ユーザにスクリプト名の指定を促す。Replaceオプションは、同名の既存のスクリプトを置き換える。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**構文:** obj &lt;&lt; Save ByGroup Script to Journal

**説明:** この分析を再現するJSLスクリプトを生成し、ジャーナルにそのスクリプトのボタンを追加する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**構文:** obj &lt;&lt; Save ByGroup Script to Script Window

**説明:** この分析を再現するJSLスクリプトを生成し、現在のスクリプトウィンドウに表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**構文:** obj &lt;&lt; Save Script for All Objects

**説明:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**構文:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**説明:** すべてのレポートオブジェクトを再現するスクリプトを現在のデータテーブルに保存する。このオプションは、ウィンドウ内にレポートが複数ある場合に便利。作成されるスクリプトの名前は、引用符で囲んで指定しない限り、1つ目のプラットフォーム名となる。

**例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );obj[1] << Save Script for All Objects To Data Table;

```

**例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**構文:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**説明:** この分析を再現するJSLスクリプトを生成し、データテーブルのテーブルプロパティとして保存する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**構文:** obj &lt;&lt; Save Script to Journal

**説明:** この分析を再現するJSLスクリプトを生成し、ジャーナルにそのスクリプトのボタンを追加する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );obj << Save Script to Journal;

```

### Save Script to Report

**構文:** obj &lt;&lt; Save Script to Report

**説明:** この分析を再現するJSLスクリプトを生成し、レポートウィンドウに表示する。分析手順の記録を結果と一緒に残せる。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );obj << Save Script to Report;

```

### Save Script to Script Window

**構文:** obj &lt;&lt; Save Script to Script Window

**説明:** この分析を再現するJSLスクリプトを生成し、現在のスクリプトウィンドウに表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );obj << Save Script to Script Window;

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

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );obj << Title( "My Platform" );

```

### Top Report

**構文:** obj &lt;&lt; Top Report

**説明:** レポート内のルートノードへの参照を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### View Web XML

**構文:** obj &lt;&lt; View Web XML

**説明:** インタラクティブHTMLレポートの作成に使うXMLコードを戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );xml = obj << View Web XML;

```

## 列

### Censor

**構文:** obj = XGBoost(...&lt;Censor( column )&gt;...)

**JMP追加されたバージョン:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );

```

### Factor

**構文:** obj = XGBoost(...Factor( column(s) )...)

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );

```

### Freq

**構文:** obj = XGBoost(...&lt;Freq( column )&gt;...)

**説明:** 分析の際に各行の度数として用いる値の列を指定する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_freqcol", Numeric, Continuous, Set Each Value( Random Integer( 1, 5 ) ) );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );

```

### Response

**構文:** obj = XGBoost(...Response( column(s) )...)

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );

```

### Validation

**構文:** obj = XGBoost(...&lt;Validation( column(s) )&gt;...)

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );

```

### Weight

**構文:** obj = XGBoost(...&lt;Weight( column )&gt;...)

**説明:** 分析の際に各行の重みとして用いる値の列を指定する。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_weightcol", Numeric, Continuous, Set Each Value( Random Beta( 1, 1 ) ) );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );

```

### X

**構文:** obj = XGBoost(...X( column(s) )...)

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );

```

### Y

**構文:** obj = XGBoost(...Y( column(s) )...)

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );

```

## 関連するコンストラクター

### XGBoost

**構文:** XGBoost(Y( columns ), X( columns ))

**説明:** XGBoostツリー（eXtreme Gradient Boosted Trees）を行うプラットフォーム。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );

```

## 項目のメッセージ

### Change Variables

**構文:** obj &lt;&lt; Change Variables

**説明:** X変数やY変数などを変更し、新たにモデルをあてはめる。

**JMP追加されたバージョン:** 16

### Compare

**構文:** obj &lt;&lt; Compare

**説明:** XGBoostの評価指標を更新する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit( Objective( 0 ) ) );obj << Compare( Correlation( 1 ) );

```

### Fit

**構文:** obj &lt;&lt; Fit

**説明:** XGBoostモデルをあてはめる。XGBoostのハイパーパラメータやあてはめの設定を指定することもできる。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );

```

### Get Measures

**構文:** obj &lt;&lt; Get Measures

**JMP追加されたバージョン:** 16

### Method

**構文:** obj &lt;&lt; Method( "xgboost"|"lightgbm"="xgboost" )

**説明:** Select either XGBoost or LightGBM as a method for gradient boosting fitting. デフォルトの値は"xgboost"。

**JMP追加されたバージョン:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost(	Y( :Weight ),	X( :Height ),	Fit( Method( "lightgbm" ), objective( "regression" ) ));

```

### Redo Analysis

**構文:** obj &lt;&lt; Redo Analysis

**説明:** 同じ分析をやり直し新しいウィンドウに表示する。データが変更されていると分析結果は異なる。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );obj << Redo Analysis;

```

### Relaunch Analysis

**構文:** obj &lt;&lt; Relaunch Analysis

**説明:** プラットフォームの起動ウィンドウを開き、レポートを作成した時の設定を表示する。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );obj << Relaunch Analysis;

```

### Show Details

**構文:** obj &lt;&lt; Show Details( state=0|1 )

**説明:** 詳細を表示する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Show Details( 1 ) );

```

## XGBoost Compare

### 関連するコンストラクター

#### XGBoost Compare

**構文:** XGBoost Compare

### 項目のメッセージ

#### AUC

**構文:** obj &lt;&lt; AUC( state=0|1 )

**説明:** AUROCの表示/非表示を切り替える。AUROCは、ROC曲線の曲線下面積である。 デフォルトではオン。

**JMP追加されたバージョン:** 16

#### AUPRC

**構文:** obj &lt;&lt; AUPRC( state=0|1 )

**説明:** PR曲線の曲面下面積 デフォルトではオン。

**JMP追加されたバージョン:** 17

#### Accuracy

**構文:** obj &lt;&lt; Accuracy( state=0|1 )

**説明:** 正解率(accuracy)の表示/非表示を切り替える。正解率は、正しく分類されたものの割合である。 デフォルトではオン。

**JMP追加されたバージョン:** 15

#### Censor

**構文:** obj &lt;&lt; Censor( state=0|1 )

**説明:** 打ち切りコマンドの表示/非表示を切り替える。 デフォルトではオン。

**JMP追加されたバージョン:** 17

#### Concordance

**構文:** obj &lt;&lt; Concordance( state=0|1 )

**説明:** Harrell C指標の表示/非表示を切り替える。のことである。 この指標は、予測値を小さい順に並べたときに、実測値の並びとどれぐらい一致しているかを示す。 デフォルトではオン。

**JMP追加されたバージョン:** 17

#### Correlation

**構文:** obj &lt;&lt; Correlation( state=0|1 )

**説明:** Pearson相関係数の表示/非表示を切り替える。Pearson相関係数は、線形関係の強さを示す指標である。 デフォルトではオン。

**JMP追加されたバージョン:** 15

#### F1

**構文:** obj &lt;&lt; F1( state=0|1 )

**説明:** F1スコアの表示/非表示を切り替える。F1は、適合率と再現率の調和平均である。 デフォルトではオン。

**JMP追加されたバージョン:** 15

#### Features

**構文:** obj &lt;&lt; Features( state=0|1 )

**説明:** 特徴量の個数を示した列の表示/非表示を切り替える。 デフォルトではオン。

**JMP追加されたバージョン:** 16

#### Freq

**構文:** obj &lt;&lt; Freq( state=0|1 )

**説明:** 度数に関する列の表示/非表示を切り替える。 デフォルトではオン。

**JMP追加されたバージョン:** 16

#### H Measure

**構文:** obj &lt;&lt; H Measure( state=0|1 )

**説明:** H指標の表示/非表示を切り替える。これは、ベースラインモデルからの改善を示す指標である。 デフォルトではオン。

**JMP追加されたバージョン:** 17

#### Hide All Models

**構文:** obj &lt;&lt; Hide All Models

**説明:** すべてのモデルを非表示にする。

**JMP追加されたバージョン:** 16

#### LogLoss

**構文:** obj &lt;&lt; LogLoss( state=0|1 )

**説明:** 損失関数の表示/非表示を切り替える。この損失関数は、対数尤度に基づいている。 デフォルトではオン。

**JMP追加されたバージョン:** 15

#### MAE

**構文:** obj &lt;&lt; MAE( state=0|1 )

**説明:** 平均絶対誤差(MAE)の表示/非表示を切り替える。 デフォルトではオン。

**JMP追加されたバージョン:** 15

#### MCC

**構文:** obj &lt;&lt; MCC( state=0|1 )

**説明:** Matthews相関係数の表示/非表示を切り替える。2値変数の場合には、Matthews相関係数はPearson相関係数である。 デフォルトではオン。

**JMP追加されたバージョン:** 15

#### Misclass

**構文:** obj &lt;&lt; Misclass( state=0|1 )

**説明:** 誤分類率の表示/非表示を切り替える。誤分類率は、誤って分類されたものの割合である。 デフォルトではオン。

**JMP追加されたバージョン:** 15

#### Predictors

**構文:** obj &lt;&lt; Predictors( state=0|1 )

**説明:** 説明変数の列数を示した列の表示/非表示を切り替える。 デフォルトではオン。

**JMP追加されたバージョン:** 16

#### Profit

**構文:** obj &lt;&lt; Profit( state=0|1 )

**説明:** 利益の表示/非表示を切り替える。 デフォルトではオン。

**JMP追加されたバージョン:** 16

#### RMSE

**構文:** obj &lt;&lt; RMSE( state=0|1 )

**説明:** 「誤差の標準偏差」(RMSE)の表示/非表示を切り替える。 デフォルトではオン。

**JMP追加されたバージョン:** 15

#### RSquare

**構文:** obj &lt;&lt; RSquare( state=0|1 )

**説明:** R2乗値の表示/非表示を切り替える。R2乗値は、モデルによって説明されるばらつきの割合を示す指標である。 デフォルトではオン。

**JMP追加されたバージョン:** 15

#### Remove Hidden Models

**構文:** obj &lt;&lt; Remove Hidden Models

**説明:** [表示]にチェックが入っていないすべてのモデルを削除する。

**JMP追加されたバージョン:** 16

#### Remove Shown Models

**構文:** obj &lt;&lt; Remove Shown Models

**説明:** 「表示」チェックボックスにチェックが入っているすべてのモデルを削除し、残ったモデルを表示する。

**JMP追加されたバージョン:** 15

#### Response

**構文:** obj &lt;&lt; Response( state=0|1 )

**説明:** 応答変数の変数名を示した列の表示/非表示を切り替える。 デフォルトではオン。

**JMP追加されたバージョン:** 16

#### Show All Models

**構文:** obj &lt;&lt; Show All Models

**説明:** すべてのモデルを表示する。

**JMP追加されたバージョン:** 16

#### Training Metrics

**構文:** obj &lt;&lt; Training Metrics( state=0|1 )

**説明:** 学習データから計算されたすべての評価指標の表示/非表示を切り替える。 デフォルトではオン。

**JMP追加されたバージョン:** 15

#### Validation

**構文:** obj &lt;&lt; Validation( state=0|1 )

**説明:** 検証データに関する列の表示/非表示を切り替える。 デフォルトではオン。

**JMP追加されたバージョン:** 16

#### Validation Metrics

**構文:** obj &lt;&lt; Validation Metrics( state=0|1 )

**説明:** 検証データから計算されたすべての評価指標の表示/非表示を切り替える。 デフォルトではオン。

**JMP追加されたバージョン:** 15

#### Weight

**構文:** obj &lt;&lt; Weight( state=0|1 )

**説明:** 重みに関する列の表示/非表示を切り替える。 デフォルトではオン。

**JMP追加されたバージョン:** 16

## XGBoost Fit

### 関連するコンストラクター

#### XGBoost Fit

**構文:** XGBoost Fit

### 項目のメッセージ

#### Actual by Predicted Plots

**構文:** obj &lt;&lt; Actual by Predicted Plots( state=0|1 )

**説明:** X軸が予測値、Y軸が実測値であるプロットの表示/非表示を切り替える。 デフォルトではオン。

**JMP追加されたバージョン:** 15

#### Autotune

**構文:** obj &lt;&lt; Autotune( state=0 )

**説明:** XGBoostモデルをあてはめる時に用いるハイパーパラメータの組み合わせを、高速柔軟充填計画で決める。指定された各ハイパーパラメータの下限値と上限値の間で、全部でn個のモデルがあてはめられる。ここでnは、作成された計画における実験回数である。 デフォルトの値は"0"。

**JMP追加されたバージョン:** 17

#### Confusion Matrices

**構文:** obj &lt;&lt; ( fit[number] &lt;&lt; Confusion Matrices( state=0|1 ) )

**説明:** 実測値と予測値をクロス集計した表の表示/非表示を切り替える。 デフォルトではオン。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << XGBoost(	Y( :Species ),	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Fit);obj << (fit[1] << Confusion Matrices( 1 ));

```

#### Contour Profiler

**構文:** obj &lt;&lt; Contour Profiler

**説明:** プロファイルの表示/非表示を切り替える。プロファイルは、予測式の断面を描いた対話的なグラフである。

**JMP追加されたバージョン:** 15

#### Copy Parameters to Launch

**構文:** obj &lt;&lt; Copy Parameters to Launch

**説明:** 現在のモデルで使われたハイパーパラメータを、[モデルの設定]にコピーする。

**JMP追加されたバージョン:** 16

#### Decision Thresholds

**構文:** obj &lt;&lt; Decision Thresholds( state=0|1 )

**説明:** 閾値を探索するためのグラフや表の表示/非表示を切り替える。 デフォルトではオン。

**JMP追加されたバージョン:** 16

#### Fit Details

**構文:** obj &lt;&lt; Fit Details( state=0|1 )

**説明:** あてはめたモデルに関する適合度統計量の表示/非表示を切り替える。 デフォルトではオン。

**JMP追加されたバージョン:** 15

#### Generate Python Code

**構文:** obj &lt;&lt; Generate Python Code

**説明:** 学習およびスコアリングを行うPythonコードを作成する。

**JMP追加されたバージョン:** 16

#### Importances

**構文:** obj &lt;&lt; Importances( state=0|1 )

**説明:** 各説明変数における変数重要度の表示/非表示を切り替える。 デフォルトではオン。

**JMP追加されたバージョン:** 15

#### Lift Curves

**構文:** obj &lt;&lt; Lift Curves( state=0|1 )

**説明:** リフトチャートの表示/非表示を切り替える。リフトチャートは、観測値の割合に対してリフトをプロットしたもので、モデルの予測能力を別の観点から見ることができる。

**JMP追加されたバージョン:** 15

#### Number of Design Points

**構文:** obj &lt;&lt; Number of Design Points( number=10 )

**説明:** 調整計画におけるハイパーパラメータの組み合わせの組み合わせ数を指定する。データが大規模な場合には、この値を小さめにする。 デフォルトの値は"10"。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( Number of Design Points( 10 ) ) );

```

#### Number of Inner Folds

**構文:** obj &lt;&lt; Number of Inner Folds( number=2 )

**説明:** 自動調整の入れ子式交差検証に関して、内側分割の数を指定する。 デフォルトの値は"2"。

**JMP追加されたバージョン:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( Number of Inner Folds( 2 ) ) );

```

#### Precision Recall Curves

**構文:** obj &lt;&lt; Precision Recall Curves( state=0|1 )

**説明:** 様々な分類閾値について、適合率(precision)と再現率(recall)の関係をプロットする。応答の水準における度数に不均衡が見られる場合にPR曲線は役立つ。

**JMP追加されたバージョン:** 15

#### Profiler

**構文:** obj &lt;&lt; Profiler

**説明:** 予測プロファイルの表示/非表示を切り替える。予測プロファイルは、1因子ずつスライスしながら予測式を図示したものである。予測プロファイルでは、最適化を行える。

**JMP追加されたバージョン:** 15

#### Publish Prediction Formula

**構文:** obj &lt;&lt; Publish Prediction Formula

**説明:** 予測式を作成し、列の計算式として「計算式デポ」プラットフォームに計算式列のスクリプトとして保存する。

**JMP追加されたバージョン:** 15

#### ROC Curves

**構文:** obj &lt;&lt; ROC Curves( state=0|1 )

**説明:** 応答変数の各水準に対し、ROC曲線(受診者動作特性曲線)の表示/非表示を切り替える。ROC曲線は、「感度」と「1-特異度」をプロットした曲線。

**JMP追加されたバージョン:** 15

#### Remove All But This Fit

**構文:** obj &lt;&lt; ( fit[number] &lt;&lt; Remove All But This Fit )

**説明:** 該当のモデルを除くすべてのモデルのレポートおよびグラフを削除する。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << XGBoost(	Y( :Species ),	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Fit);Wait( 2 );obj << (Fit[1] << Remove All But This Fit);

```

#### Remove Fit

**構文:** obj &lt;&lt; ( fit[number] &lt;&lt; Remove Fit )

**説明:** モデルのレポート全体を削除する。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << XGBoost(	Y( :Species ),	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Fit);Wait( 2 );obj << (Fit[1] << Remove Fit);

```

#### Save Predicteds

**構文:** obj &lt;&lt; Save Predicteds

**説明:** 予測値をデータテーブルの新しい列に保存する。

**JMP追加されたバージョン:** 15

#### Save Prediction Formula

**構文:** obj &lt;&lt; Save Prediction Formula

**説明:** データテーブルの新しい列に、計算式として予測式を保存する。なお、大きなモデルにおいては、計算に時間がかかる。

**JMP追加されたバージョン:** 15

#### Save SHAPs

**構文:** obj &lt;&lt; Save SHAPs

**説明:** Shapley値をデータテーブルに保存する。Shapley値は、予測値全体を各説明変数に分解する指標である。

**JMP追加されたバージョン:** 17

#### Set Random Seed

**構文:** obj &lt;&lt; Set Random Seed( number=0 )

**説明:** 乱数シード値を特定の値に設定する。設定した後のシミュレーションが、そのシード値で実行されるようになる。 デフォルトの値は"0"。

**JMP追加されたバージョン:** 19

#### Surface Profiler

**構文:** obj &lt;&lt; Surface Profiler

**説明:** プロファイルの表示/非表示を切り替える。プロファイルは、予測式の断面を描いた対話的なグラフである。

**JMP追加されたバージョン:** 15

#### Tree Details

**構文:** obj &lt;&lt; Tree Details( state=0|1 )

**説明:** ツリーの各分岐における詳細の表示/非表示を切り替える。

**JMP追加されたバージョン:** 15

#### Tuning Design Table

**構文:** Tuning Design Table( "table name" )

**説明:** ハイパーパラメータの設定値を含んだJMPデータテーブルの名前を指定する。このデータテーブルは予め開いておく必要がある。また、データテーブルにおける列の名前は、各ハイパーパラメータの名前と完全に一致しており、かつ、各行にはハイパーパラメータの数値が含まれていなければならない。指定されていないパラメータには、ダイアログにて設定された値が適用される。

**JMP追加されたバージョン:** 15

#### alpha

**構文:** obj &lt;&lt; alpha( number=0.0 )

**説明:** 重みに対するL1正則化項のハイパーパラメータの上限値を指定する。このハイパーパラメータが大きいほど、簡潔なモデルになる。指定できる値は、0以上の数値である。 デフォルトの値は"0.0"。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( alpha( 0.0 ) ) );

```

#### alpha_max

**構文:** obj &lt;&lt; alpha_max( number=0.5 )

**説明:** 重みに対するL1正則化項のハイパーパラメータの上限値を指定する。このハイパーパラメータが大きいほど、簡潔なモデルになる。指定できる値は、0以上の数値である。 デフォルトの値は"0.5"。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( alpha_max( 2.0 ) ) );

```

#### alpha_min

**構文:** obj &lt;&lt; alpha_min( number=0.0 )

**説明:** 重みに対するL1正則化項のハイパーパラメータの下限値を指定する。このハイパーパラメータが大きいほど、簡潔なモデルになる。指定できる値は、0以上の数値である。 デフォルトの値は"0.0"。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( alpha_min( 0.0 ) ) );

```

#### bagging_by_query

**構文:** obj &lt;&lt; bagging_by_query( state=0 )

**説明:** 行ごとにヒストグラムを構築する。このオプションを有効にすると、特に標本サイズが大きく、バギングの割合が小さい場合やGOSS抽出法を使った場合において、メモリ使用量が下がる。列ごとのヒストグラム構築(force_colwise)と併用することはできない。 デフォルトの値は"0"。

**JMP追加されたバージョン:** 19

#### bagging_fraction

**構文:** obj &lt;&lt; bagging_fraction( number=1 )

**説明:** 各反復において抽出する行の割合を指定する。指定できる値の範囲は、0～1である。これは、バギングの一種である。 デフォルトの値は"1"。

**JMP追加されたバージョン:** 19

#### bagging_fraction_max

**構文:** obj &lt;&lt; bagging_fraction_max( number=1.0 )

**説明:** 各反復において抽出する行の割合に対する上限値を指定する。指定できる値の範囲は、0～1である。これは、バギングの一種である。 デフォルトの値は"1.0"。

**JMP追加されたバージョン:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( bagging_fraction_max( 1.0 ) ) );

```

#### bagging_fraction_min

**構文:** obj &lt;&lt; bagging_fraction_min( number=0.3 )

**説明:** 各反復において抽出する行の割合に対する下限値を指定する。指定できる値の範囲は、0～1である。これは、バギングの一種である。 デフォルトの値は"0.3"。

**JMP追加されたバージョン:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( bagging_fraction_min( 0.3 ) ) );

```

#### bagging_freq

**構文:** obj &lt;&lt; bagging_freq( number=0 )

**説明:** バギングを何回に1回行うか。この値によって、モデルの学習を行うために新しい学習データ標本を無作為抽出する回数が決まる。 デフォルトの値は"0"。

**JMP追加されたバージョン:** 19

#### bagging_seed

**構文:** obj &lt;&lt; bagging_seed( number=3 )

**説明:** バギングのための乱数を生成する際の乱数シード値。 デフォルトの値は"3"。

**JMP追加されたバージョン:** 19

#### base_score

**構文:** obj &lt;&lt; base_score( number=0.5 )

**説明:** すべてのデータ行の予測スコアに対して一律に設定するバイアス。この値は、グローバルなバイアスとして使用される。通常は、平均値を使用するのが適切。 デフォルトの値は"0.5"。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( base_score( 0.5 ) ) );

```

#### bin_construct_sample_cnt

**構文:** obj &lt;&lt; bin_construct_sample_cnt( number=200000 )

**説明:** 特徴量を離散化するために抽出する標本サイズ。小さな値に設定すると、予期しないエラーが生じ、精度が低くなる可能性がある。 デフォルトの値は"200000"。

**JMP追加されたバージョン:** 19

#### boost_from_average

**構文:** obj &lt;&lt; boost_from_average( state=1 )

**説明:** 反復計算における予測値の初期値を、応答変数の平均値に設定するか、一律にゼロに設定するか。このオプションは、目的関数が回帰、2値、多クラス、交差エントロピーの場合にのみ使用される。 デフォルトではオン。

**JMP追加されたバージョン:** 19

#### booster

**構文:** obj &lt;&lt; booster( "gbtree"|"gblinear"|"dart"="gbtree" )

**説明:** 使用するブースターを指定する。 デフォルトの値は"gbtree"。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( booster( "gbtree" ) ) );

```

#### boosting

**構文:** obj &lt;&lt; boosting( "gbdt"|"rf"|"dart"="gbdt" )

**説明:** モデルの学習時に使用するブースティング手法。 デフォルトの値は"gbdt"。

**JMP追加されたバージョン:** 19

#### cat_l2

**構文:** obj &lt;&lt; cat_l2( number=10 )

**説明:** カテゴリカルな特徴量に対するL2正則化の値。 デフォルトの値は"10"。

**JMP追加されたバージョン:** 19

#### cat_l2_max

**構文:** obj &lt;&lt; cat_l2_max( number=15 )

**説明:** カテゴリカルな特徴量に対するL2正則化の最大値。 デフォルトの値は"15"。

**JMP追加されたバージョン:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( cat_l2_max( 2.0 ) ) );

```

#### cat_l2_min

**構文:** obj &lt;&lt; cat_l2_min( number=5 )

**説明:** カテゴリカルな特徴量に対するL2正則化の最小値。 デフォルトの値は"5"。

**JMP追加されたバージョン:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( cat_l2_min( 0.0 ) ) );

```

#### cat_smooth

**構文:** obj &lt;&lt; cat_smooth( number=10 )

**説明:** 特に標本サイズが小さいカテゴリにおいて、誤差が及ぼす影響を減らすために使う正則化の値。 デフォルトの値は"10"。

**JMP追加されたバージョン:** 19

#### cegb_penalty_split

**構文:** obj &lt;&lt; cegb_penalty_split( number=0 )

**説明:** デフォルトの値は"0"。

**JMP追加されたバージョン:** 19

#### cegb_tradeoff

**構文:** obj &lt;&lt; cegb_tradeoff( number=1 )

**説明:** デフォルトの値は"1"。

**JMP追加されたバージョン:** 19

#### colsample_bylevel

**構文:** obj &lt;&lt; colsample_bylevel( number=1.0 )

**説明:** ツリーの深さごとに抽出する列の割合。ツリーが新たな深さに到達するたびに、この抽出が1回行われる。 デフォルトの値は"1.0"。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( colsample_bylevel( 1.0 ) ) );

```

#### colsample_bynode

**構文:** obj &lt;&lt; colsample_bynode( number=1.0 )

**説明:** ノード(分岐)ごとに抽出する列の割合。新たな分岐が行なわれるたびに、この抽出が1回行われる。 デフォルトの値は"1.0"。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( colsample_bynode( 1.0 ) ) );

```

#### colsample_bytree

**構文:** obj &lt;&lt; colsample_bytree( number=1.0 )

**説明:** 各反復において抽出する列の割合に対する下限値を指定する。1つのツリーごとに1回、この列の抽出は行われる。指定できる値の範囲は、0～1である。 デフォルトの値は"1.0"。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( colsample_bytree( 1.0 ) ) );

```

#### colsample_bytree_max

**構文:** obj &lt;&lt; colsample_bytree_max( number=1.0 )

**説明:** 各反復において抽出する列の割合に対する上限値を指定する。1つのツリーごとに1回、この列の抽出は行われる。指定できる値の範囲は、0～1である。 デフォルトの値は"1.0"。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( colsample_bytree_max( 1.0 ) ) );

```

#### colsample_bytree_min

**構文:** obj &lt;&lt; colsample_bytree_min( number=0.5 )

**説明:** 各反復において抽出する列の割合に対する下限値を指定する。1つのツリーごとに1回、この列の抽出は行われる。指定できる値の範囲は、0～1である。 デフォルトの値は"0.5"。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( colsample_bytree_min( 0.3 ) ) );

```

#### data_random_seed

**構文:** obj &lt;&lt; data_random_seed( number=1 )

**説明:** ヒストグラムのビンを作成するためのデータ抽出に用いる乱数の乱数シード値。 デフォルトの値は"1"。

**JMP追加されたバージョン:** 19

#### data_sample_strategy

**構文:** obj &lt;&lt; data_sample_strategy( "bagging"|"goss"="bagging" )

**説明:** ブースティングの各反復において使用する標本抽出の方法。 デフォルトの値は"bagging"。

**JMP追加されたバージョン:** 19

#### deterministic

**構文:** obj &lt;&lt; deterministic( state=0 )

**説明:** 結果を再現可能にする。このオプションをtrueに設定すると、同じデータに対して同じパラメータ設定だけど異なるスレッド数を使用したときの結果が安定する。再現性を確保したいときに有効。 デフォルトの値は"0"。

**JMP追加されたバージョン:** 19

#### device_type

**構文:** obj &lt;&lt; device_type( "cpu"|"gpu"="cpu" )

**説明:** CPUとGPUのどちらを使用するか。 デフォルトの値は"cpu"。

**JMP追加されたバージョン:** 19

#### drop_rate

**構文:** obj &lt;&lt; drop_rate( number=0.1 )

**説明:** DARTブースティングの各反復において、これまで学習されたツリーのうちドロップアウトさせるものの割合。 デフォルトの値は"0.1"。

**JMP追加されたバージョン:** 19

#### drop_seed

**構文:** obj &lt;&lt; drop_seed( number=4 )

**説明:** DARTブースティングにおいてドロップアウト処理に使う乱数の乱数シード値。 デフォルトの値は"4"。

**JMP追加されたバージョン:** 19

#### early_stopping_min_delta

**構文:** obj &lt;&lt; early_stopping_min_delta( number=0 )

**説明:** 各反復における学習データでの適合度指標の変化量の最小値。変化量がこの最小値に達しない場合は、学習が早期打ち切りされ、停止される。 デフォルトの値は"0"。

**JMP追加されたバージョン:** 19

#### early_stopping_round

**構文:** obj &lt;&lt; early_stopping_round( number=0 )

**説明:** 学習データでの適合度指標が改善しなくても学習を続行する最大反復数。値が0の場合は、早期打ち切りされる。 デフォルトの値は"0"。

**JMP追加されたバージョン:** 19

#### enable_bundle

**構文:** obj &lt;&lt; enable_bundle( state=1 )

**説明:** 排他的特徴量バンドルを使用する。このオプションをfalseに設定した場合、スパース(疎)なデータセットにおいて処理時間が長くなる。 デフォルトではオン。

**JMP追加されたバージョン:** 19

#### eval_at

**構文:** obj &lt;&lt; eval_at( text=1,2,3,4,5 )

**説明:** NDCGまたはMAPを使ってモデルをランク付けする時の閾値。 デフォルトの値は"1,2,3,4,5"。

**JMP追加されたバージョン:** 19

#### eval_metric

**構文:** obj &lt;&lt; eval_metric( text )

**説明:** 反復履歴のプロットに表示したい指標を指定する。このオプションは、実際のモデルのあてはめには影響しない。指定する値は、rmse, rmsle, mae, logloss, error, error@t, merror, auc, aucpr, ndcg, map, ndcg@n, map@n, ndcg-, map-, ndcg@n-, map@n-, poisson-nloglik, gamma-nloglik, cox-nloglik, gamma-deviance, tweedie-nloglikの中から1つを選ぶ。空白にした場合は、デフォルトの指標が使用される(デフォルトの指標は、最適化する目的関数によって異なる)。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( eval_metric( rmse ) ) );

```

#### extra_seed

**構文:** obj &lt;&lt; extra_seed( number=6 )

**説明:** 閾値の選択などの補足的な処理で使われる乱数の乱数シード値。 デフォルトの値は"6"。

**JMP追加されたバージョン:** 19

#### extra_trees

**構文:** obj &lt;&lt; extra_trees( state=0 )

**説明:** エクストラツリー(extremely randomized tree)を用いる。このオプションを有効にすると、各特徴量に対して可能なすべての分岐点を評価して最適な分岐を見つける代わりに、各ノードにおいて各特徴量の分岐点がランダムに選択される。選択された各特徴量に対してランダムに分岐点が選択され、その分岐点に基づいて分岐が評価される。 デフォルトの値は"0"。

**JMP追加されたバージョン:** 19

#### fair_c

**構文:** obj &lt;&lt; fair_c( number=1 )

**説明:** フェア損失関数(外れ値に対してロバストな損失関数)の滑らかさを決めるパラメータ。 デフォルトの値は"1"。

**JMP追加されたバージョン:** 19

#### feature_fraction

**構文:** obj &lt;&lt; feature_fraction( number=1 )

**説明:** 各反復において抽出する列の割合に対する下限値を指定する。1つのツリーごとに1回、この列の抽出は行われる。指定できる値の範囲は、0～1である。 デフォルトの値は"1"。

**JMP追加されたバージョン:** 19

#### feature_fraction_bynode

**構文:** obj &lt;&lt; feature_fraction_bynode( number=1 )

**説明:** 学習時にランダムに選択される特徴量の割合。値が0.75の場合は、特徴量の75%がランダムに選択され、学習に使われる。 デフォルトの値は"1"。

**JMP追加されたバージョン:** 19

#### feature_fraction_max

**構文:** obj &lt;&lt; feature_fraction_max( number=1.0 )

**説明:** 各反復において抽出する列の割合に対する上限値を指定する。1つのツリーごとに1回、この列の抽出は行われる。指定できる値の範囲は、0～1である。 デフォルトの値は"1.0"。

**JMP追加されたバージョン:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( feature_fraction_max( 1.0 ) ) );

```

#### feature_fraction_min

**構文:** obj &lt;&lt; feature_fraction_min( number=0.2 )

**説明:** 各反復において抽出する列の割合に対する下限値を指定する。1つのツリーごとに1回、この列の抽出は行われる。指定できる値の範囲は、0～1である。 デフォルトの値は"0.2"。

**JMP追加されたバージョン:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( feature_fraction_min( 0.2 ) ) );

```

#### feature_fraction_seed

**構文:** obj &lt;&lt; feature_fraction_seed( number=2 )

**説明:** 特徴量をランダムに選択するための乱数を生成する際の乱数シード値。 デフォルトの値は"2"。

**JMP追加されたバージョン:** 19

#### feature_pre_filter

**構文:** obj &lt;&lt; feature_pre_filter( state=1 )

**説明:** 各葉の最小標本サイズが指定されている場合において、その基準に達して分割できなくなった特徴量を計算で無視する。このオプションをfalseに設定した場合、処理時間が長くなる。 デフォルトではオン。

**JMP追加されたバージョン:** 19

#### feature_selector

**構文:** obj &lt;&lt; feature_selector( "cyclic"|"shuffle"|"greedy"|"thrifty"="cyclic" )

**説明:** ブースターとして線形ブースターを選んだときに、そこで用いる特徴量選択や順序付けの方法を指定する。 デフォルトの値は"cyclic"。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost(	Y( :Weight ),	X( :Height ),	Booster( "gblinear" ),	Fit( feature_selector( "cyclic" ) ));

```

#### force_col_wise

**構文:** obj &lt;&lt; force_col_wise( state=0 )

**説明:** 列ごとにヒストグラムを構築する。このオプションを有効にすると、特に特徴量が多いデータにおいて使用メモリ量が下がる。行ごとのヒストグラム構築(force_rowwise)と併用することはできない。 デフォルトの値は"0"。

**JMP追加されたバージョン:** 19

#### force_row_wise

**構文:** obj &lt;&lt; force_row_wise( state=0 )

**説明:** デフォルトの値は"0"。

**JMP追加されたバージョン:** 19

#### gamma

**構文:** obj &lt;&lt; gamma( number=0.0 )

**説明:** ツリーの葉ノードでさらなる分岐を行うために必要な、損失関数の減少の最小値を指定する。 デフォルトの値は"0.0"。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( Gamma( 0.0 ) ) );

```

#### gpu_device_id

**構文:** obj &lt;&lt; gpu_device_id( number=-1 )

**説明:** GPU使用時のデバイス番号。 デフォルトの値は"-1"。

**JMP追加されたバージョン:** 19

#### gpu_platform_id

**構文:** obj &lt;&lt; gpu_platform_id( number=-1 )

**説明:** GPU使用時のプラットフォーム番号。 デフォルトの値は"-1"。

**JMP追加されたバージョン:** 19

#### gpu_use_dp

**構文:** obj &lt;&lt; gpu_use_dp( state=0 )

**説明:** GPUにおいて倍精度演算を使用するかどうか。 デフォルトの値は"0"。

**JMP追加されたバージョン:** 19

#### grow_policy

**構文:** obj &lt;&lt; grow_policy( "depthwise"|"lossguide"="depthwise" )

**説明:** ツリーに新しいノードを追加する方法を指定する。現在、このオプションはtree_method=histの場合のみ適用される。 デフォルトの値は"depthwise"。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( grow_policy( "depthwise" ) ) );

```

#### histogram_pool_size

**構文:** obj &lt;&lt; histogram_pool_size( number=-1 )

**説明:** 履歴ヒストグラムの最大メモリサイズ(単位はMB)。 デフォルトの値は"-1"。

**JMP追加されたバージョン:** 19

#### interaction_constraints

**構文:** obj &lt;&lt; interaction_constraints( text )

**説明:** 説明変数の交互作用に対する制約を指定する。このオプションを用いた場合、ここで指定された説明変数の交互作用のみが、交互作用として許可される。交互作用として許可したい説明変数の組を、ネストさせた角括弧（ブラケット）に通し番号(０から始める通し番号)で指定する。

**JMP追加されたバージョン:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );:Age << Set Modeling Type( "Continuous" );dt << XGBoost(	Y( :Weight ),	X( :Age, :Height ),	Fit( interaction_constraints( "[[0,1]]" ) ));

```

#### is_enable_sparse

**構文:** obj &lt;&lt; is_enable_sparse( state=1 )

**説明:** スパース最適化を有効にするかどうか。 デフォルトではオン。

**JMP追加されたバージョン:** 19

#### is_unbalance

**構文:** obj &lt;&lt; is_unbalance( state=0 )

**説明:** 2値モデルや多クラスモデルにおいて、学習データセットが不均衡(アンバランス)かどうか。 デフォルトの値は"0"。

**JMP追加されたバージョン:** 19

#### iterations

**構文:** obj &lt;&lt; iterations( number=30 )

**説明:** 勾配ブースティングにおける反復回数を指定する。 デフォルトの値は"30"。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( iterations( 100 ) ) );

```

#### iterations_max

**構文:** obj &lt;&lt; iterations_max( number=100 )

**説明:** 勾配ブースティングにおける反復回数に対する上限値を指定する。 デフォルトの値は"100"。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( iterations_max( 300 ) ) );

```

#### iterations_min

**構文:** obj &lt;&lt; iterations_min( number=20 )

**説明:** 勾配ブースティングにおける反復回数に対する下限値を指定する。 デフォルトの値は"20"。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( iterations_min( 20 ) ) );

```

#### lambda

**構文:** obj &lt;&lt; lambda( number=1.0 )

**説明:** 重みに対するL2正則化項のハイパーパラメータの上限値を指定する。このハイパーパラメータが大きいほど、簡潔なモデルになる。指定できる値は、0以上の数値である。 デフォルトの値は"1.0"。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( lambda( 1.0 ) ) );

```

#### lambda_l1

**構文:** obj &lt;&lt; lambda_l1( number=0 )

**説明:** 重みに対するL1正則化項のハイパーパラメータの上限値を指定する。このハイパーパラメータが大きいほど、簡潔なモデルになる。指定できる値は、0以上の数値である。 デフォルトの値は"0"。

**JMP追加されたバージョン:** 19

#### lambda_l1_max

**構文:** obj &lt;&lt; lambda_l1_max( number=2.0 )

**説明:** 重みに対するL1正則化項のハイパーパラメータの上限値を指定する。このハイパーパラメータが大きいほど、簡潔なモデルになる。指定できる値は、0以上の数値である。 デフォルトの値は"2.0"。

**JMP追加されたバージョン:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( lambda_l1_max( 2.0 ) ) );

```

#### lambda_l1_min

**構文:** obj &lt;&lt; lambda_l1_min( number=0.0 )

**説明:** 重みに対するL1正則化項のハイパーパラメータの下限値を指定する。このハイパーパラメータが大きいほど、簡潔なモデルになる。指定できる値は、0以上の数値である。 デフォルトの値は"0.0"。

**JMP追加されたバージョン:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( lambda_l1_min( 0.0 ) ) );

```

#### lambda_l2

**構文:** obj &lt;&lt; lambda_l2( number=0 )

**説明:** 重みに対するL2正則化項のハイパーパラメータの上限値を指定する。このハイパーパラメータが大きいほど、簡潔なモデルになる。指定できる値は、0以上の数値である。 デフォルトの値は"0"。

**JMP追加されたバージョン:** 19

#### lambda_l2_max

**構文:** obj &lt;&lt; lambda_l2_max( number=2.0 )

**説明:** 重みに対するL2正則化項のハイパーパラメータの上限値を指定する。このハイパーパラメータが大きいほど、簡潔なモデルになる。指定できる値は、0以上の数値である。 デフォルトの値は"2.0"。

**JMP追加されたバージョン:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( lambda_l2_max( 2.0 ) ) );

```

#### lambda_l2_min

**構文:** obj &lt;&lt; lambda_l2_min( number=0.0 )

**説明:** 重みに対するL2正則化項のハイパーパラメータの下限値を指定する。このハイパーパラメータが大きいほど、簡潔なモデルになる。指定できる値は、0以上の数値である。 デフォルトの値は"0.0"。

**JMP追加されたバージョン:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( lambda_l2_min( 0.0 ) ) );

```

#### lambda_max

**構文:** obj &lt;&lt; lambda_max( number=2.0 )

**説明:** 重みに対するL2正則化項のハイパーパラメータの上限値を指定する。このハイパーパラメータが大きいほど、簡潔なモデルになる。指定できる値は、0以上の数値である。 デフォルトの値は"2.0"。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( lambda_max( 2.0 ) ) );

```

#### lambda_min

**構文:** obj &lt;&lt; lambda_min( number=0.0 )

**説明:** 重みに対するL2正則化項のハイパーパラメータの下限値を指定する。このハイパーパラメータが大きいほど、簡潔なモデルになる。指定できる値は、0以上の数値である。 デフォルトの値は"0.0"。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( lambda_min( 0.0 ) ) );

```

#### lambdarank_norm

**構文:** obj &lt;&lt; lambdarank_norm( state=1 )

**説明:** 異なるクエリのλを正規化するかどうか。λを正規化することにより、不均衡(アンバランス)なデータに対する性能が改善する。 デフォルトではオン。

**JMP追加されたバージョン:** 19

#### lambdarank_position_bias_regularization

**構文:** obj &lt;&lt; lambdarank_position_bias_regularization( number=0 )

**説明:** ラムダランク目的関数における位置バイアスを制御する値。大きい値を指定すると、位置バイアスの影響が小さくなります。 デフォルトの値は"0"。

**JMP追加されたバージョン:** 19

#### lambdarank_truncation_level

**構文:** obj &lt;&lt; lambdarank_truncation_level( number=30 )

**説明:** ラムダランク目的関数において、計算に用いる上位結果の数。 デフォルトの値は"30"。

**JMP追加されたバージョン:** 19

#### learning_rate

**構文:** obj &lt;&lt; learning_rate( number=0.3 )

**説明:** 学習率を指定する。学習率を小さくしたほうが、1回のステップにおけるオーバーフィッティング(過剰適合)は防げるが、収束までにより多くの反復が必要になる。学習率を大きくした方が、収束は速い。 デフォルトの値は"0.3"。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( learning_rate( 0.3 ) ) );

```

#### learning_rate_max

**構文:** obj &lt;&lt; learning_rate_max( number=0.4 )

**説明:** 学習率の上限値を指定する。学習率を小さくしたほうが、1回のステップにおけるオーバーフィッティング(過剰適合)は防げるが、収束までにより多くの反復が必要になる。学習率を大きくした方が、収束は速い。 デフォルトの値は"0.4"。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( learning_rate_max( 0.4 ) ) );

```

#### learning_rate_min

**構文:** obj &lt;&lt; learning_rate_min( number=0.05 )

**説明:** 学習率の下限値を指定する。学習率を小さくしたほうが、1回のステップにおけるオーバーフィッティング(過剰適合)は防げるが、収束までにより多くの反復が必要になる。学習率を大きくした方が、収束は速い。 デフォルトの値は"0.05"。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( learning_rate_min( 0.05 ) ) );

```

#### linear_lambda

**構文:** obj &lt;&lt; linear_lambda( number=0.0 )

**説明:** 線形ツリーにおける正則化パラメータ。 デフォルトの値は"0.0"。

**JMP追加されたバージョン:** 19

#### linear_tree

**構文:** obj &lt;&lt; linear_tree( state=0 )

**説明:** 区分線形勾配ブースティングツリーをあてはめる。分岐そのものは通常の方法で行われるが、各葉において、定数モデルではなく、線形モデルが使われる。 デフォルトの値は"0"。

**JMP追加されたバージョン:** 19

#### max_bin

**構文:** obj &lt;&lt; max_bin( number=256 )

**説明:** 連続量の特徴量を離散化する時のビン数に対する最大数。このオプションは、tree_method=histの場合のみ適用される。 デフォルトの値は"256"。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( max_bin( 256 ) ) );

```

#### max_bin_by_feature

**構文:** obj &lt;&lt; max_bin_by_feature( text )

**説明:** 特徴量ごとのビン数の最大数。

**JMP追加されたバージョン:** 19

#### max_cat_threshold

**構文:** obj &lt;&lt; max_cat_threshold( number=32 )

**説明:** カテゴリカルな特徴量の分岐を求めるときに考慮する一意なカテゴリの最大数。大きな値に設定すると、より最適なカテゴリ分割を求めるために徹底的な検索が行われるが、学習時間が長くなる。 デフォルトの値は"32"。

**JMP追加されたバージョン:** 19

#### max_cat_to_onehot

**構文:** obj &lt;&lt; max_cat_to_onehot( number=4 )

**説明:** Specifies the maximum number of categories that a categorical feature can have to use the one-vs-other split algorithm. Categorical features with more than the maximum number of categories are handled by a different algorithm. デフォルトの値は"4"。

**JMP追加されたバージョン:** 19

#### max_delta_step

**構文:** obj &lt;&lt; max_delta_step( number=0.0 )

**説明:** 各葉の出力変数が取りうるデルタステップの最大値を指定する。 デフォルトの値は"0.0"。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( max_delta_step( 0.0 ) ) );

```

#### max_depth

**構文:** obj &lt;&lt; max_depth( number=6 )

**説明:** ツリーの最大深さを指定する。指定できる値は、整数である。各ツリーが深くなると、複雑さが増す。深くしすぎたモデルは、オーバーフィット(過剰適合)しやくするなる。 デフォルトの値は"6"。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( max_depth( 6 ) ) );

```

#### max_depth_max

**構文:** obj &lt;&lt; max_depth_max( number=8 )

**説明:** 最大ツリーの最大深さに対する上限値を指定する。指定できる値は、整数である。ツリーを深くすると、複雑さが増す。深さを2^depth以上にしたモデルは、オーバーフィット(過剰適合)する可能性が高くなる。 デフォルトの値は"8"。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( max_depth_max( 9 ) ) );

```

#### max_depth_min

**構文:** obj &lt;&lt; max_depth_min( number=1 )

**説明:** ツリーの最大深さに対する下限値を指定する。指定できる値は、整数である。ツリーを深くすると、複雑さが増す。深さを2^depth以上にしたモデルは、オーバーフィット(過剰適合)する可能性が高くなる。 デフォルトの値は"1"。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( max_depth_min( 3 ) ) );

```

#### max_drop

**構文:** obj &lt;&lt; max_drop( number=50 )

**説明:** DARTブースティングの各反復において、ドロップアウトさせるツリーの最大数。 デフォルトの値は"50"。

**JMP追加されたバージョン:** 19

#### max_leaves

**構文:** obj &lt;&lt; max_leaves( number=0 )

**説明:** 追加するノードの最大個数。このオプションは、grow_policy=lossguideの場合のみ適用される。 デフォルトの値は"0"。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( max_leaves( 0 ) ) );

```

#### metric

**構文:** obj &lt;&lt; metric( "default"|"l1"|"l2"|"rmse"|"quantile"|"mape"|"huber"|"fair"|"poisson"|"gamma"|"gamma_deviance"|"tweedie"|"ndcg"|"map"|"auc"|"average_precision"|"binary_logloss"|"binary_error"|"auc_mu"|"multi_logloss"|"multi_error"|"cross_entropy"|"cross_entropy_lambda"|"kulback_leibler"="default" )

**説明:** モデルを評価するために用いる指標。学習セットと検証セットの両方で計算される。 デフォルトの値は"default"。

**JMP追加されたバージョン:** 19

#### min_child_weight

**構文:** obj &lt;&lt; min_child_weight( number=1.0 )

**説明:** 葉を分割するのに必要とする重み（ヘッセ行列）の最小合計に対する下限値を指定する。このハイパーパラメータは、各葉の最小サイズに影響する。 デフォルトの値は"1.0"。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( min_child_weight( 1.0 ) ) );

```

#### min_child_weight_max

**構文:** obj &lt;&lt; min_child_weight_max( number=3.0 )

**説明:** 葉を分割するのに必要とする重み（ヘッセ行列）の最小合計に対する上限値を指定する。このハイパーパラメータは、各葉の最小サイズに影響する。 デフォルトの値は"3.0"。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( min_child_weight_max( 10.0 ) ) );

```

#### min_child_weight_min

**構文:** obj &lt;&lt; min_child_weight_min( number=1.0 )

**説明:** 葉を分割するのに必要とする重み（ヘッセ行列）の最小合計に対する下限値を指定する。このハイパーパラメータは、各葉の最小サイズに影響する。 デフォルトの値は"1.0"。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( min_child_weight_min( 1.0 ) ) );

```

#### min_data_in_bin

**構文:** obj &lt;&lt; min_data_in_bin( number=3 )

**説明:** 各ビンに含まれる標本サイズの最小値。 デフォルトの値は"3"。

**JMP追加されたバージョン:** 19

#### min_data_in_leaf

**構文:** obj &lt;&lt; min_data_in_leaf( number=20 )

**説明:** 各葉での標本サイズの最小値。 デフォルトの値は"20"。

**JMP追加されたバージョン:** 19

#### min_data_per_group

**構文:** obj &lt;&lt; min_data_per_group( number=100 )

**説明:** カテゴリカルな特徴量におけるカテゴリごとの標本サイズの最小値。 デフォルトの値は"100"。

**JMP追加されたバージョン:** 19

#### min_gain_to_split

**構文:** obj &lt;&lt; min_gain_to_split( number=0 )

**説明:** ツリーの最大深さを指定する。指定できる値は、整数である。各ツリーが深くなると、複雑さが増す。深くしすぎたモデルは、オーバーフィット(過剰適合)しやくするなる。 デフォルトの値は"0"。

**JMP追加されたバージョン:** 19

#### min_sum_hessian_in_leaf

**構文:** obj &lt;&lt; min_sum_hessian_in_leaf( number=0.001 )

**説明:** 葉を分割するのに必要とする重み（ヘッセ行列）の最小合計に対する下限値を指定する。このハイパーパラメータは、各葉の最小サイズに影響する。 デフォルトの値は"0.001"。

**JMP追加されたバージョン:** 19

#### min_sum_hessian_in_leaf_max

**構文:** obj &lt;&lt; min_sum_hessian_in_leaf_max( number=10.0 )

**説明:** 葉を分割するのに必要とする重み（ヘッセ行列）の最小合計に対する上限値を指定する。このハイパーパラメータは、各葉の最小サイズに影響する。 デフォルトの値は"10.0"。

**JMP追加されたバージョン:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( min_sum_hessian_in_leaf_max( 10.0 ) ) );

```

#### min_sum_hessian_in_leaf_min

**構文:** obj &lt;&lt; min_sum_hessian_in_leaf_min( number=0.5 )

**説明:** 葉を分割するのに必要とする重み（ヘッセ行列）の最小合計に対する下限値を指定する。このハイパーパラメータは、各葉の最小サイズに影響する。 デフォルトの値は"0.5"。

**JMP追加されたバージョン:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( min_sum_hessian_in_leaf_min( 0.5 ) ) );

```

#### monotone_constraints

**構文:** obj &lt;&lt; monotone_constraints( text=None )

**説明:** 各特徴に対して単調性制約を指定する。この単調性制約は、(-1,0,1,1,1)のように、-1,0,1をカンマで区切って指定し、それを丸括弧で囲んで指定する。-1は単調減少、1は単調増加、0は制約なしを示す。 デフォルトの値は"None"。

**JMP追加されたバージョン:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );:Age << Set Modeling Type( "Continuous" );dt << XGBoost( Y( :Weight ), X( :Age, :Height ), Fit( monotone_constraints( "(1,1)" ) ) );

```

#### monotone_constraints_method

**構文:** obj &lt;&lt; monotone_constraints_method( "basic"|"intermediate"|"advanced"="basic" )

**説明:** 制約を課した場合に使用する単調制約の方法。 デフォルトの値は"basic"。

**JMP追加されたバージョン:** 19

#### monotone_penalty

**構文:** obj &lt;&lt; monotone_penalty( number=0 )

**説明:** 単調制約を課した場合の単調制約に対する厳しさ。値をKに指定した場合は、ツリーの最初のK回における分岐で単調性が課せられない。大きな値に設定すると、ツリー構築の初期に多く罰則が課され、単調制約が生じなくなる。 デフォルトの値は"0"。

**JMP追加されたバージョン:** 19

#### multi_error_top_k

**構文:** obj &lt;&lt; multi_error_top_k( number=1 )

**説明:** 多クラス分類でのtop-kマルチ誤差で用いる閾値。 デフォルトの値は"1"。

**JMP追加されたバージョン:** 19

#### neg_bagging_fraction

**構文:** obj &lt;&lt; neg_bagging_fraction( number=1 )

**説明:** 不均衡(アンバランス)なデータに対する2値モデルにおいて、負例を抽出する際の抽出率。 デフォルトの値は"1"。

**JMP追加されたバージョン:** 19

#### normalize_type

**構文:** obj &lt;&lt; normalize_type( "tree"|"forest"="tree" )

**説明:** ブースターとしてDARTブースターを選んだ時に、そこで用いる正規化アルゴリズムを指定する。 デフォルトの値は"tree"。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost(	Y( :Weight ),	X( :Height ),	Booster( "dart" ),	Fit( normalize_type( "tree" ) ));

```

#### nthread

**構文:** obj &lt;&lt; nthread( number=0 )

**説明:** XGBoostの実行時に用いる並列スレッドの数を指定する。デフォルトでは、使用可能なスレッドがすべて使用される。 デフォルトの値は"0"。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( nthread( 8 ) ) );

```

#### num_grad_quant_bins

**構文:** obj &lt;&lt; num_grad_quant_bins( number=4 )

**説明:** 勾配およびヘッセ行列を量子化する際のビン数。ビン数を大きくすると、勾配やヘッセ行列が最大精度に近づき、量子化しない場合の結果に近づく。 デフォルトの値は"4"。

**JMP追加されたバージョン:** 19

#### num_iteration_predict

**構文:** obj &lt;&lt; num_iteration_predict( number=-1 )

**説明:** 指定したツリーの本数で予測値を求める。 デフォルトの値は"-1"。

**JMP追加されたバージョン:** 19

#### num_iterations

**構文:** obj &lt;&lt; num_iterations( number=100 )

**説明:** 勾配ブースティングにおける反復回数を指定する。 デフォルトの値は"100"。

**JMP追加されたバージョン:** 19

#### num_iterations_max

**構文:** obj &lt;&lt; num_iterations_max( number=100 )

**説明:** 勾配ブースティングにおける反復回数に対する上限値を指定する。 デフォルトの値は"100"。

**JMP追加されたバージョン:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( num_iterations_max( 100 ) ) );

```

#### num_iterations_min

**構文:** obj &lt;&lt; num_iterations_min( number=20 )

**説明:** 勾配ブースティングにおける反復回数に対する下限値を指定する。 デフォルトの値は"20"。

**JMP追加されたバージョン:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( num_iterations_min( 20 ) ) );

```

#### num_leaves

**構文:** obj &lt;&lt; num_leaves( number=31 )

**説明:** 各ツリーにおける葉の最大数。 デフォルトの値は"31"。

**JMP追加されたバージョン:** 19

#### num_parallel_tree

**構文:** obj &lt;&lt; num_parallel_tree( number=1 )

**説明:** 各反復において、同時に成長させるツリーの個数。結果は平均として計算される。 デフォルトの値は"1"。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( num_parallel_tree( 1 ) ) );

```

#### num_threads

**構文:** obj &lt;&lt; num_threads( number=0 )

**説明:** スレッド数。処理速度を上げるには、このスレッド数をコアCPUの個数に設定する。 デフォルトの値は"0"。

**JMP追加されたバージョン:** 19

#### objective

**構文:** obj &lt;&lt; objective( "reg:squarederror"|"binary:logistic"|"binary:hinge"|"count:poisson"|"multi:softprob"|"rank:pairwise"|"rank:ndcg"|"rank:map"|"reg:gamma"|"reg:logistic"|"reg:pseudohubererror"|"reg:squaredlogerror"|"reg:tweedie"|"survival:cox"="reg:squarederror" )

**説明:** モデルの学習において最適化する関数を指定する。応答変数の尺度によって、指定できる関数は限られる。 デフォルトの値は"reg:squarederror"。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), objective( "reg:squarederror" ) );

```

#### objective_seed

**構文:** obj &lt;&lt; objective_seed( number=5 )

**説明:** Specifies the seed that is used in the random number generator for the objective parameter. デフォルトの値は"5"。

**JMP追加されたバージョン:** 19

#### one_drop

**構文:** obj &lt;&lt; one_drop( number=0 )

**説明:** ブースターとしてDARTブースターを用いた時にこのフラグをオンにすると、ドロップアウト時に少なくとも1つのツリーが必ずドロップされる。 デフォルトの値は"0"。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( booster( "dart" ), one_drop( 0 ) ) );

```

#### other_rate

**構文:** obj &lt;&lt; other_rate( number=0.1 )

**説明:** GOSSデータ抽出法での勾配が小さいデータの保持率。 デフォルトの値は"0.1"。

**JMP追加されたバージョン:** 19

#### path_smooth

**構文:** obj &lt;&lt; path_smooth( number=0 )

**説明:** デフォルトの値は"0"。

**JMP追加されたバージョン:** 19

#### poisson_max_delta_step

**構文:** obj &lt;&lt; poisson_max_delta_step( number=0.7 )

**説明:** Poissonモデルにおいて、葉の予測値更新量を制限するための閾値。 デフォルトの値は"0.7"。

**JMP追加されたバージョン:** 19

#### pos_bagging_fraction

**構文:** obj &lt;&lt; pos_bagging_fraction( number=1 )

**説明:** 不均衡(アンバランス)なデータに対する2値モデルにおいて、正例を抽出する際の抽出率。 デフォルトの値は"1"。

**JMP追加されたバージョン:** 19

#### pred_early_stop

**構文:** obj &lt;&lt; pred_early_stop( state=0 )

**説明:** 分類および順位付けにおいて、予測に基づく早期打ち切り(予測早期打ち切り)を適用する。このオプションをtrueに設定すると、予測値の計算速度は向上するが、精度は低くなる可能性がある。 デフォルトの値は"0"。

**JMP追加されたバージョン:** 19

#### pred_early_stop_freq

**構文:** obj &lt;&lt; pred_early_stop_freq( number=10 )

**説明:** 予測に基づく早期打ち切り(予測早期打ち切り)が指定されている場合に、現在の反復で打ち切るかどうかを確認する頻度。 デフォルトの値は"10"。

**JMP追加されたバージョン:** 19

#### pred_early_stop_margin

**構文:** obj &lt;&lt; pred_early_stop_margin( number=10 )

**説明:** Specifies the threshold margin in prediction early stopping when prediction early stopping is specified. This parameter enables the prediction process to stop early if the margin is far enough from the threshold. デフォルトの値は"10"。

**JMP追加されたバージョン:** 19

#### predict_disable_shape_check

**構文:** obj &lt;&lt; predict_disable_shape_check( state=0 )

**説明:** 予測値の計算時に、予測値の計算に用いる特徴量の個数が学習データのものと異なる場合はエラーとする。 デフォルトの値は"0"。

**JMP追加されたバージョン:** 19

#### predictor

**構文:** obj &lt;&lt; predictor( "auto"|"cpu_predictor"|"gpu_predictor"="auto" )

**説明:** 予測アルゴリズムの種類を指定する。 デフォルトの値は"auto"。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( predictor( "cpu_predictor" ) ) );

```

#### process_type

**構文:** obj &lt;&lt; process_type( "default"|"update"="default" )

**説明:** ブースティングの更新過程を指定する。 デフォルトの値は"default"。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( process_type( "default" ) ) );

```

#### quant_train_renew_leaf

**構文:** obj &lt;&lt; quant_train_renew_leaf( state=0 )

**説明:** 勾配量子化を用いている場合において、量子化する前の元の勾配を使って葉の値を更新する。このオプションを有効にすると、量子化による学習において順位付けの精度が改善される。 デフォルトの値は"0"。

**JMP追加されたバージョン:** 19

#### rate_drop

**構文:** obj &lt;&lt; rate_drop( number=0.0 )

**説明:** ブースターとしてDARTブースターを用いた時に、そのドロップアウト率を指定する。 デフォルトの値は"0.0"。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( booster( "dart" ), rate_drop( 0.0 ) ) );

```

#### refresh_leaf

**構文:** obj &lt;&lt; refresh_leaf( number=1 )

**説明:** 更新に関するパラメータを指定する。1に設定すると、葉とノードの両方が更新され、0に設定するとノードのみが更新される。 デフォルトの値は"1"。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( refresh_leaf( 1 ) ) );

```

#### reg_sqrt

**構文:** obj &lt;&lt; reg_sqrt( state=0 )

**説明:** 回帰モデルにおいて、応答変数の元の値ではなく平方根をあてはめるかどうか。 デフォルトの値は"0"。

**JMP追加されたバージョン:** 19

#### sample_type

**構文:** obj &lt;&lt; sample_type( "uniform"|"weighted"="uniform" )

**説明:** ブースターとしてDARTブースターを選んだ時に、そこで用いる標本抽出アルゴリズムを指定する。 デフォルトの値は"uniform"。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost(	Y( :Weight ),	X( :Height ),	Booster( "dart" ),	Fit( sample_type( "uniform" ) ));

```

#### scale_pos_weight

**構文:** obj &lt;&lt; scale_pos_weight( number=1.0 )

**説明:** 応答のカテゴリがアンバランスであることを避けるために、正の重みと負の重みのバランスを指定する。このオプションに対する典型的な指定としては、負値の総観測数を正値の総観測数で割ったもので指定する。 デフォルトの値は"1.0"。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( scale_posweight( 1.0 ) ) );

```

#### seed

**構文:** obj &lt;&lt; seed( number=0 )

**説明:** 乱数の生成に使うシード値。後で結果を再現したいときには、この乱数シード値を指定しておく。 デフォルトの値は"0"。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( seed( 0 ) ) );

```

#### sigmoid

**構文:** obj &lt;&lt; sigmoid( number=1 )

**説明:** 2値クラス・多クラスのモデルにおけるシグモイド関数のパラメータ。 デフォルトの値は"1"。

**JMP追加されたバージョン:** 19

#### sketch_eps

**構文:** obj &lt;&lt; sketch_eps( number=0.03 )

**説明:** このオプションは、tree_method=approxの場合のみ使用できる。大まかには、1 / sketch_epsがビンの個数となる。 デフォルトの値は"0.03"。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( sketch_eps( 0.03 ) ) );

```

#### skip_drop

**構文:** obj &lt;&lt; skip_drop( number=0.0 )

**説明:** ブースターとしてDARTブースターを用いた時に、そのブースティングの反復においてドロップアウト処理を行わない確率。 デフォルトの値は"0.0"。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( booster( "dart" ), skip_drop( 0.0 ) ) );

```

#### start_iteration_predict

**構文:** obj &lt;&lt; start_iteration_predict( number=0 )

**説明:** 指定した反復以降のツリーだけで予測値を求める。 デフォルトの値は"0"。

**JMP追加されたバージョン:** 19

#### stochastic_rounding

**構文:** obj &lt;&lt; stochastic_rounding( state=1 )

**説明:** 勾配量子化において確率的丸めを使用する。 デフォルトではオン。

**JMP追加されたバージョン:** 19

#### subsample

**構文:** obj &lt;&lt; subsample( number=1.0 )

**説明:** 各反復において抽出する行の割合を指定する。指定できる値の範囲は、0～1である。これは、バギングの一種である。 デフォルトの値は"1.0"。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( subsample( 1.0 ) ) );

```

#### subsample_max

**構文:** obj &lt;&lt; subsample_max( number=1.0 )

**説明:** 各反復において抽出する行の割合に対する上限値を指定する。指定できる値の範囲は、0～1である。これは、バギングの一種である。 デフォルトの値は"1.0"。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( subsample_max( 1.0 ) ) );

```

#### subsample_min

**構文:** obj &lt;&lt; subsample_min( number=0.5 )

**説明:** 各反復において抽出する行の割合に対する下限値を指定する。指定できる値の範囲は、0～1である。これは、バギングの一種である。 デフォルトの値は"0.5"。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( subsample_min( 0.3 ) ) );

```

#### top_k

**構文:** obj &lt;&lt; top_k( number=256 )

**説明:** 貪欲な方法による特徴量選択において選択する上位の特徴量の個数。このオプションは、GBLinearブースターにのみ適用される。 デフォルトの値は"256"。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( booster( "gblinear" ), top_k( 0 ) ) );

```

#### top_rate

**構文:** obj &lt;&lt; top_rate( number=0.2 )

**説明:** GOSSデータ抽出法での勾配が大きいデータの保持率。 デフォルトの値は"0.2"。

**JMP追加されたバージョン:** 19

#### tree_method

**構文:** obj &lt;&lt; tree_method( "auto"|"exact"|"approx"|"hist"|"gpu_exact"|"gpu_hist"="auto" )

**説明:** XGBoostで用いるツリー構築のアルゴリズムを指定する。 デフォルトの値は"auto"。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( tree_method( "auto" ) ) );

```

#### tweedie_variance_power

**構文:** obj &lt;&lt; tweedie_variance_power( number=1.5 )

**説明:** Tweedie分布におけるべき乗パラメータを指定する。指定できる値の範囲は、1～2である。このオプションは、objective=reg:tweedieの場合のみ適用される。 デフォルトの値は"1.5"。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost(	Y( :Weight ),	X( :Height ),	Fit( objective( "reg:tweedie" ), tweedie_variance_power( 1.5 ) ));

```

#### uniform_drop

**構文:** obj &lt;&lt; uniform_drop( state=0 )

**説明:** Specifies whether to select trees for dropping in DART boosting using uniform probability. デフォルトの値は"0"。

**JMP追加されたバージョン:** 19

#### updater

**構文:** obj &lt;&lt; updater( text )

**説明:** ブースターとしてGBTreeブースターを選んだときに、ツリーの更新方法を指定する。grow_colmaker, distcol, grow_histmaker, grow_local_histmaker, grow_skmaker, sync, refresh, prune. For the gblinear booster, specify either shotgun or coord_descentの中から1つを選ぶ。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( updater( "grow_colmaker" ) ) );

```

#### use_missing

**構文:** obj &lt;&lt; use_missing( state=1 )

**説明:** 欠測値の特別処理を適用するかどうか。 デフォルトではオン。

**JMP追加されたバージョン:** 19

#### use_quantized_grad

**構文:** obj &lt;&lt; use_quantized_grad( state=0 )

**説明:** 学習時に勾配量子化を使用する。このオプションを有効にすると、勾配とヘッセ行列が離散化されるため、多くの場合、精度をほとんど落とさずに学習速度を上げることができる。 デフォルトの値は"0"。

**JMP追加されたバージョン:** 19

#### xgboost_dart_mode

**構文:** obj &lt;&lt; xgboost_dart_mode( state=0 )

**説明:** XGBoost DARTモードを用いるかどうか。 デフォルトの値は"0"。

**JMP追加されたバージョン:** 19

#### zero_as_missing

**構文:** obj &lt;&lt; zero_as_missing( state=0 )

**説明:** ゼロの値をすべて欠測値として扱うかどうか。 デフォルトの値は"0"。

**JMP追加されたバージョン:** 19

