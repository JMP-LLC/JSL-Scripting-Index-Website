# Torch Deep Learning



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

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );obj[1] << Copy ByGroup Script;

```

### Copy Script

**構文:** obj &lt;&lt; Copy Script

**説明:** この分析を再現するJSLスクリプトを生成し、クリップボードにコピーする。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );obj << Copy Script;

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

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );t = obj[1] << Get ByGroup Script;Show( t );

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

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

### Get Data Table

**構文:** obj &lt;&lt; Get Data Table

**説明:** データテーブルへの参照を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );t = obj << Get Datatable;Show( N Rows( t ) );

```

### Get Script

**構文:** obj &lt;&lt; Get Script

**説明:** この分析を再現するスクリプト(JSL)を生成し、それを式として戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );t = obj << Get Script;Show( t );

```

### Get Script With Data Table

**構文:** obj &lt;&lt; Get Script With Data Table

**説明:** この分析を再現するスクリプト(JSL)をデータテーブルへの参照も含めて生成し、それを式として戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );t = obj << Get Script With Data Table;Show( t );

```

### Get Timing

**構文:** obj &lt;&lt; Get Timing

**説明:** プラットフォームの起動にかかった時間を取得する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );t = obj << Get Timing;Show( t );

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

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Save ByGroup Script to Data Table

**構文:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**説明:** 分析を再現するためのJSLスクリプトを作成し、データテーブルにテーブルプロパティとして保存する。スクリプトの名前を指定できる。Append Suffixオプションは、スクリプト名に数字の接尾辞を追加する。これにより、同名のスクリプトが存在していても区別できる。Promptオプションは、ユーザにスクリプト名の指定を促す。Replaceオプションは、同名の既存のスクリプトを置き換える。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**構文:** obj &lt;&lt; Save ByGroup Script to Journal

**説明:** この分析を再現するJSLスクリプトを生成し、ジャーナルにそのスクリプトのボタンを追加する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**構文:** obj &lt;&lt; Save ByGroup Script to Script Window

**説明:** この分析を再現するJSLスクリプトを生成し、現在のスクリプトウィンドウに表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**構文:** obj &lt;&lt; Save Script for All Objects

**説明:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**構文:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**説明:** すべてのレポートオブジェクトを再現するスクリプトを現在のデータテーブルに保存する。このオプションは、ウィンドウ内にレポートが複数ある場合に便利。作成されるスクリプトの名前は、引用符で囲んで指定しない限り、1つ目のプラットフォーム名となる。

**例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );obj[1] << Save Script for All Objects To Data Table;

```

**例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**構文:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**説明:** この分析を再現するJSLスクリプトを生成し、データテーブルのテーブルプロパティとして保存する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**構文:** obj &lt;&lt; Save Script to Journal

**説明:** この分析を再現するJSLスクリプトを生成し、ジャーナルにそのスクリプトのボタンを追加する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );obj << Save Script to Journal;

```

### Save Script to Report

**構文:** obj &lt;&lt; Save Script to Report

**説明:** この分析を再現するJSLスクリプトを生成し、レポートウィンドウに表示する。分析手順の記録を結果と一緒に残せる。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );obj << Save Script to Report;

```

### Save Script to Script Window

**構文:** obj &lt;&lt; Save Script to Script Window

**説明:** この分析を再現するJSLスクリプトを生成し、現在のスクリプトウィンドウに表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );obj << Save Script to Script Window;

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

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );obj << Title( "My Platform" );

```

### Top Report

**構文:** obj &lt;&lt; Top Report

**説明:** レポート内のルートノードへの参照を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### View Web XML

**構文:** obj &lt;&lt; View Web XML

**説明:** インタラクティブHTMLレポートの作成に使うXMLコードを戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );xml = obj << View Web XML;

```

## 列

### Censor

**構文:** obj &lt;&lt; Censor( column )

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );

```

### Freq

**構文:** obj &lt;&lt; Freq( column )

**説明:** 分析の際に各行の度数として用いる値の列を指定する。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );dt << New Column( "_freqcol", Numeric, Continuous, Set Each Value( Random Integer( 1, 5 ) ) );obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );

```

### Inputs

**構文:** obj &lt;&lt; Inputs( column(s) )

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );

```

### Responses

**構文:** obj &lt;&lt; Responses( column(s) )

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );

```

### Subject

**構文:** obj &lt;&lt; Subject( column )

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );

```

### Validation

**構文:** obj &lt;&lt; Validation( column(s) )

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );

```

### Weight

**構文:** obj &lt;&lt; Weight( column )

**説明:** 分析の際に各行の重みとして用いる値の列を指定する。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );dt << New Column( "_weightcol", Numeric, Continuous, Set Each Value( Random Beta( 1, 1 ) ) );obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );

```

### X

**構文:** obj &lt;&lt; X( column(s) )

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );

```

### Y

**構文:** obj &lt;&lt; Y( column(s) )

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );

```

## 関連するコンストラクター

### Torch Deep Learning

**構文:** Torch Deep Learning(Y( columns ), X( columns ))

**説明:** Interface to predictive modeling via the Torch Deep Learning add-in

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );

```

## 項目のメッセージ

### Change Variables

**構文:** obj &lt;&lt; Change Variables

**説明:** Changes X, Y, and other variables for subsequent models.

**JMP追加されたバージョン:** 18

### Compare

**構文:** obj &lt;&lt; Compare

**説明:** Updates the Torch Deep Learning comparison metrics.

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );obj << Compare( AUC( 1 ) );

```

### Fit

**構文:** obj &lt;&lt; Fit

**説明:** Fits a Torch Deep Learning model. You can specify parameters and fitting specifications within this command.

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );

```

### Get Measures

**構文:** obj &lt;&lt; Get Measures

**JMP追加されたバージョン:** 18

### Redo Analysis

**構文:** obj &lt;&lt; Redo Analysis

**説明:** Rerun this same analysis in a new window. The analysis will be different if the data has changed.

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );obj << Redo Analysis;

```

### Relaunch Analysis

**構文:** obj &lt;&lt; Relaunch Analysis

**説明:** Return to the launcher for this analysis.

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );obj << Relaunch Analysis;

```

### Set

**構文:** obj &lt;&lt; Set

**説明:** Specifies parameters for a Torch Deep Learning model.

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );obj = Torch Deep Learning( Y( :sex ), X( :picture ), Set( Epochs( 5 ) ) );

```

### Show Details

**構文:** obj &lt;&lt; Show Details( state=0|1 )

**説明:** Shows more details.

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :picture ), Show Details( 1 ) );

```

## Torch Deep Learning Compare

### 関連するコンストラクター

#### Torch Deep Learning Compare

**構文:** Torch Deep Learning Compare

### 項目のメッセージ

#### AUC

**構文:** obj &lt;&lt; AUC( state=0|1 )

**説明:** Shows or hides the AUROC, which is the area under the receiver operating characteristic curve. デフォルトではオン。

**JMP追加されたバージョン:** 18

#### Accuracy

**構文:** obj &lt;&lt; Accuracy( state=0|1 )

**説明:** Shows or hides the accuracy, which is the proportion of correct classifications. デフォルトではオン。

**JMP追加されたバージョン:** 18

#### Censor

**構文:** obj &lt;&lt; Censor( state=0|1 )

**説明:** Shows or hides the Censor command デフォルトではオン。

**JMP追加されたバージョン:** 18

#### Concordance

**構文:** obj &lt;&lt; Concordance( state=0|1 )

**説明:** Shows or hides the concordance, which is the Harrell C-Index and measures strength of sorting efficiency デフォルトではオン。

**JMP追加されたバージョン:** 18

#### Correlation

**構文:** obj &lt;&lt; Correlation( state=0|1 )

**説明:** Shows or hides the Pearson correlation, which is a measure of the strength of the linear relationship. デフォルトではオン。

**JMP追加されたバージョン:** 18

#### F1

**構文:** obj &lt;&lt; F1( state=0|1 )

**説明:** Shows or hides the F1 Score, which is the harmonic average of precision and recall. デフォルトではオン。

**JMP追加されたバージョン:** 18

#### Freq

**構文:** obj &lt;&lt; Freq( state=0|1 )

**説明:** Shows or hides the Freq column. デフォルトではオン。

**JMP追加されたバージョン:** 18

#### H Measure

**構文:** obj &lt;&lt; H Measure( state=0|1 )

**説明:** Shows or hides the H Measure, which measures proportion improvement over baseline. デフォルトではオン。

**JMP追加されたバージョン:** 18

#### Hide All Models

**構文:** obj &lt;&lt; Hide All Models

**説明:** Hides all models.

**JMP追加されたバージョン:** 18

#### LogLoss

**構文:** obj &lt;&lt; LogLoss( state=0|1 )

**説明:** Shows or hides the logarithm of the likelihood-based loss function. デフォルトではオン。

**JMP追加されたバージョン:** 18

#### MAE

**構文:** obj &lt;&lt; MAE( state=0|1 )

**説明:** Shows or hides the MAE, which is the mean absolute error. デフォルトではオン。

**JMP追加されたバージョン:** 18

#### MCC

**構文:** obj &lt;&lt; MCC( state=0|1 )

**説明:** Shows or hides the Matthews correlation coefficient, which is the Pearson correlation for binary variables. デフォルトではオン。

**JMP追加されたバージョン:** 18

#### Misclass

**構文:** obj &lt;&lt; Misclass( state=0|1 )

**説明:** Shows or hides the misclassification rate, which is the proportion of incorrect classifications. デフォルトではオン。

**JMP追加されたバージョン:** 18

#### Precision Recall AUC

**構文:** obj &lt;&lt; Precision Recall AUC( state=0|1 )

**説明:** Shows or hides the Precision Recall AUC, which is the area under the precision-recall curve. デフォルトではオン。

**JMP追加されたバージョン:** 18

#### Predictors

**構文:** obj &lt;&lt; Predictors( state=0|1 )

**説明:** Shows or hides the Predictors column. デフォルトではオン。

**JMP追加されたバージョン:** 18

#### Profit

**構文:** obj &lt;&lt; Profit( state=0|1 )

**説明:** Shows or hides the expected profit. デフォルトではオン。

**JMP追加されたバージョン:** 18

#### RMSE

**構文:** obj &lt;&lt; RMSE( state=0|1 )

**説明:** Shows or hides the RMSE, which is the root mean square error. デフォルトではオン。

**JMP追加されたバージョン:** 18

#### RSquare

**構文:** obj &lt;&lt; RSquare( state=0|1 )

**説明:** Shows or hides RSquare value, which is the proportion of variability explained. デフォルトではオン。

**JMP追加されたバージョン:** 18

#### Remove Hidden Models

**構文:** obj &lt;&lt; Remove Hidden Models

**説明:** Removes all models for which the Show box is not checked.

**JMP追加されたバージョン:** 18

#### Remove Shown Models

**構文:** obj &lt;&lt; Remove Shown Models

**説明:** Removes all models for which the Show check box is checked and shows the remaining models.

**JMP追加されたバージョン:** 18

#### Response

**構文:** obj &lt;&lt; Response( state=0|1 )

**説明:** Shows or hides the Response column. デフォルトではオン。

**JMP追加されたバージョン:** 18

#### Show All Models

**構文:** obj &lt;&lt; Show All Models

**説明:** Shows all models.

**JMP追加されたバージョン:** 18

#### Subject

**構文:** obj &lt;&lt; Subject( state=0|1 )

**説明:** Shows or hides the Subject column デフォルトではオン。

**JMP追加されたバージョン:** 18

#### Training Metrics

**構文:** obj &lt;&lt; Training Metrics( state=0|1 )

**説明:** Shows or hides all training metrics. デフォルトではオン。

**JMP追加されたバージョン:** 18

#### Validation

**構文:** obj &lt;&lt; Validation( state=0|1 )

**説明:** Shows or hides the Validation column. デフォルトではオン。

**JMP追加されたバージョン:** 18

#### Validation Metrics

**構文:** obj &lt;&lt; Validation Metrics( state=0|1 )

**説明:** Shows or hides all validation metrics. デフォルトではオン。

**JMP追加されたバージョン:** 18

#### Weight

**構文:** obj &lt;&lt; Weight( state=0|1 )

**説明:** Shows or hides the Weight column. デフォルトではオン。

**JMP追加されたバージョン:** 18

## Torch Deep Learning Fit > Post

### 項目のメッセージ

#### Actual by Predicted Plots

**構文:** obj &lt;&lt; Actual by Predicted Plots( state=0|1 )

**説明:** Shows or hides a plot using the training data with the predicted values on the X axis and actual values on the Y axis. デフォルトではオン。

**JMP追加されたバージョン:** 18

#### Confusion Matrices

**構文:** obj &lt;&lt; ( fit[number] &lt;&lt; Confusion Matrices( state=0|1 ) )

**説明:** Shows or hides a crosstabulation matrix of actual and predicted levels. デフォルトではオン。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Torch Deep Learning(	Y( :Species ),	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Fit);obj << (fit[1] << Confusion Matrices( 1 ));

```

#### Contour Profiler.

**構文:** obj &lt;&lt; Contour Profiler.

**説明:** Shows or hides interactive graphs of cross-sections of the prediction function.

**JMP追加されたバージョン:** 18

#### Decision Thresholds

**構文:** obj &lt;&lt; Decision Thresholds( state=0|1 )

**説明:** Shows or hides decision threshold graphs and tables. デフォルトではオン。

**JMP追加されたバージョン:** 18

#### Fit Details

**構文:** obj &lt;&lt; Fit Details( state=0|1 )

**説明:** Shows or hides the statistics for the fitted model. デフォルトではオン。

**JMP追加されたバージョン:** 18

#### Lift Curves

**構文:** obj &lt;&lt; Lift Curves( state=0|1 )

**説明:** Plots how much more saturated the top x-percent of predicted values are compared to the whole population.

**JMP追加されたバージョン:** 18

#### Model Details

**構文:** obj &lt;&lt; Model Details( state=0|1 )

**説明:** Shows or hides model details デフォルトではオン。

**JMP追加されたバージョン:** 18

#### Precision Recall Curves

**構文:** obj &lt;&lt; Precision Recall Curves( state=0|1 )

**説明:** Plots the trade-off between precision and recall for different classification thresholds. It is preferred in scenarios where class imbalances exist.

**JMP追加されたバージョン:** 18

#### Profiler

**構文:** obj &lt;&lt; Profiler

**説明:** Shows or hides the Prediction Profiler.

**JMP追加されたバージョン:** 18

#### ROC Curves

**構文:** obj &lt;&lt; ROC Curves( state=0|1 )

**説明:** Plots the response-category sorting efficiency of the model predictions.

**JMP追加されたバージョン:** 18

#### Surface Profiler

**構文:** obj &lt;&lt; Surface Profiler

**説明:** Shows or hides interactive graphs of cross-sections of the prediction function.

**JMP追加されたバージョン:** 18

## Torch Deep Learning Fit

### 関連するコンストラクター

#### Post

**構文:** Post

#### Torch Deep Learning Fit

**構文:** Torch Deep Learning Fit

### 項目のメッセージ

#### Activation

**構文:** obj &lt;&lt; Activation( "CELU"|"ELU"|"GELU"|"Hardshrink"|"Hardtanh"|"LeakyReLU"|"LogSigmoid"|"Mish"|"PReLU"|"ReLU"|"ReLU6"|"RReLU"|"SELU"|"Sigmoid"|"SiLU"|"Softplus"|"Softshrink"|"Softsign"|"Tanh"|"Tanhshrink"|"None"="ReLU" )

**説明:** Specifies the activation function to use after each layer. デフォルトの値は"ReLU"。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Activation( "ReLU" ) ) );

```

#### Activations

**構文:** obj &lt;&lt; Activations( text )

**説明:** Specifies a space-delimited list of activation functions to use in sequential layers.  This parameter overrides Activation when it is specified, and the last value carries forward.

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Activations( "ReLU" ) ) );

```

#### Anchor Scale

**構文:** obj &lt;&lt; Anchor Scale( number=16 )

**説明:** Specifies a multiplier applied to an internal range of anchor sizes.  Larger values tend to work better for larger boxes. デフォルトの値は"16"。

**JMP追加されたバージョン:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Anchor Scale( "16" ) ) );

```

#### Aspect Sigma

**構文:** obj &lt;&lt; Aspect Sigma( number=0 )

**説明:** Standard deviation of Gaussian aspect ratio deformation デフォルトの値は"0"。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Aspect Sigma( 0.0 ) ) );

```

#### Attention Heads

**構文:** obj &lt;&lt; Attention Heads( text=4 )

**説明:** For transformer models, specifies the number of attention heads as a space delimited list of positive integers, each of which must evenly divide its corresponding layer size. Last value carries forward if necessary. デフォルトの値は"4"。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Attention Heads( 1 ) ) );

```

#### Base Activation

**構文:** obj &lt;&lt; Base Activation( "CELU"|"ELU"|"GELU"|"Hardshrink"|"Hardtanh"|"LeakyReLU"|"LogSigmoid"|"Mish"|"PReLU"|"ReLU"|"ReLU6"|"RReLU"|"SELU"|"Sigmoid"|"SiLU"|"Softplus"|"Softshrink"|"Softsign"|"Tanh"|"Tanhshrink"|"None"="GELU" )

**説明:** Specifies the base activation function for Kolmogorov Arnold B Splines. デフォルトの値は"GELU"。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Base Activation( "GELU" ) ) );

```

#### Basis Function

**構文:** obj &lt;&lt; Basis Function( "Gaussian"|"Linear"|"Quadradic"|"InverseQuadradic"|"MultiQuadric"|"InverseMultiQuadric"|"Spline"|"Poisson1"|"Poisson2"|"Matern32"|"Matern52"="Gaussian" )

**説明:** For Radial Basis Machine models, specify the basis function. デフォルトの値は"Gaussian"。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning(	Y( :sex ),	X( :height, :weight ),	Fit( Tabular Model( "RadialBasisMachine" ), Basis Function( "Gaussian" ) ));

```

#### Batch Size

**構文:** obj &lt;&lt; Batch Size( number=128 )

**説明:** Specifies the number of rows to randomly sample for each training batch and optimization update. Decrease it to save memory and update gradients more frequently; increase it to pass through the data faster and regularize the model more. デフォルトの値は"128"。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Batch Size( 128 ) ) );

```

#### Binary Loss

**構文:** obj &lt;&lt; Binary Loss( "BCE"|"SM"="BCE" )

**説明:** Specifies the loss function for binary responses. Choose from Binary Cross Entropy (BCE) or Soft Margin (SM). デフォルトの値は"BCE"。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Binary Loss( "BCE" ) ) );

```

#### Blur Max Sigma

**構文:** obj &lt;&lt; Blur Max Sigma( number=0 )

**説明:** Maximum standard deviation of Gaussian blur デフォルトの値は"0"。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Blur Max Sigma( 1 ) ) );

```

#### Class Loss Weight

**構文:** obj &lt;&lt; Class Loss Weight( number=4.0 )

**説明:** Specifies the multiplier for class loss. デフォルトの値は"4.0"。

**JMP追加されたバージョン:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Class Loss Weight( 4.0 ) ) );

```

#### Confidence Threshold

**構文:** obj &lt;&lt; Confidence Threshold( number=0.05 )

**説明:** Specifies the confidence score threshold for predicted boxes.  Boxes with probability score less than this threshold are dropped. デフォルトの値は"0.05"。

**JMP追加されたバージョン:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Confidence Threshold( 0.05 ) ) );

```

#### Continuous Loss

**構文:** obj &lt;&lt; Continuous Loss( "MSE"|"L1"|"SmoothL1"|"Huber"|"Poisson"|"Quantile"|"CoxPH"="MSE" )

**説明:** Specifies the loss function for continuous responses. Choose from Mean Squared Error (MSE), Mean Absolute Error (L1), Smoothed L1 (with margin), Huber (with margin), or Poisson (for count responses). デフォルトの値は"MSE"。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :weight ), X( :picture ), Fit( Continuous Loss( "MSE" ) ) );

```

#### Copy Parameters to Launch

**構文:** obj &lt;&lt; Copy Parameters to Launch

**説明:** Copies the parameter values from this model to the model launch section.

**JMP追加されたバージョン:** 18

#### Covariance Structure

**構文:** obj &lt;&lt; Covariance Structure( "DotProduct"|"Gaussian"="DotProduct" )

**説明:** For mixed models, specify the covariance structure. デフォルトの値は"DotProduct"。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning(	Y( :sex ),	X( :height, :weight ),	Fit( Tabular Model( "MixedModel" ), Covariance Structure( "DotProduct" ) ));

```

#### Data Threads

**構文:** obj &lt;&lt; Data Threads( number=4 )

**説明:** Specifies the number of threads to use to load data into memory. A number near half the number of actual cores is usually near optimal. デフォルトの値は"4"。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Data Threads( 0 ) ) );

```

#### Device

**構文:** obj &lt;&lt; Device( "auto"|"cpu"|"cuda:0"|"cuda:1"|"cuda:2"|"cuda:3"="auto" )

**説明:** Specifies the computational device that Torch uses. デフォルトの値は"auto"。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Device( "cpu" ) ) );

```

#### Dilations

**構文:** obj &lt;&lt; Dilations( text=1 )

**説明:** For custom convolutional models, specifies the dilations as a space-delimited list of positive integers. Last value carries forward if necessary. デフォルトの値は"1"。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Dilations( "1" ) ) );

```

#### Dropout Probs

**構文:** obj &lt;&lt; Dropout Probs( text=0.0 )

**説明:** Specifies the probabilities of dropout to use after each layer as a space-delimited list of decimals between 0 and 1. Last value carries forward if necessary. デフォルトの値は"0.0"。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Dropout Probs( "0.1" ) ) );

```

#### Epochs

**構文:** obj &lt;&lt; Epochs( number=20 )

**説明:** Specifies the number of iterations through the training data to optimize the loss function for each batch and train the model. デフォルトの値は"20"。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Epochs( 100 ) ) );

```

#### Factorization Machine Layers

**構文:** obj &lt;&lt; Factorization Machine Layers( text=0 )

**説明:** Specify a space-separated list of 0s and 1s indicating if factorization machine interactions should be added to each linear layer.  Last value carries forward. デフォルトの値は"0"。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning(	Y( :sex ),	X( :height, :weight ),	Fit( Factorization Machine Layers( "1" ) ));

```

#### Fit Ys Separately

**構文:** obj &lt;&lt; Fit Ys Separately( state=0 )

**説明:** Check to fit a distinct model for each Y variable, and uncheck to model them jointly. デフォルトの値は"0"。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex, :height ), X( :picture ), Fit( Model Ys Separately( 1 ) ) );

```

#### Fixed Effects

**構文:** obj &lt;&lt; Fixed Effects( number=0 )

**説明:** Specify the number of fixed effects, all of which must be at the beginning of the X variable list デフォルトの値は"0"。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Fixed Effects( 0 ) ) );

```

#### Folder

**構文:** obj &lt;&lt; Folder( text )

**説明:** Select a folder in which to save modeling results. A subfolder for each model is created in this folder.

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Folder( "" ) ) );

```

#### Frozen Epochs

**構文:** obj &lt;&lt; Frozen Epochs( number=0 )

**説明:** Specifies the number of epochs for which pretrained model bodies remain frozen.  After this number there is full training gradients for all parameters. デフォルトの値は"0"。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Frozen Epochs( 3 ) ) );

```

#### Generate Python Code

**構文:** obj &lt;&lt; Generate Python Code

**説明:** Creates Python code for model deployment.

**JMP追加されたバージョン:** 18

#### Grid Size

**構文:** obj &lt;&lt; Grid Size( number=5 )

**説明:** For Kolmogorov Arnold B Spline networks, specifies the number of points in the grid for the spline interpolation. デフォルトの値は"5"。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Grid Size( 5 ) ) );

```

#### HFlip Prob

**構文:** obj &lt;&lt; HFlip Prob( number=0 )

**説明:** Probability of horizontal flip デフォルトの値は"0"。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :picture ), Fit( HFlip Prob( 0.3 ) ) );

```

#### Highway Layers

**構文:** obj &lt;&lt; Highway Layers( text=0 )

**説明:** Specify a space-separated list of nonnegative integers specifying the number of highway layers to insert in the network.  Last value carries forward. デフォルトの値は"0"。

**JMP追加されたバージョン:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Highway Layers( "1" ) ) );

```

#### Image Model

**構文:** obj &lt;&lt; Image Model( ="LeNet5" )

**説明:** Specifies the image network architecture to use. Models are ordered by size. Smaller models train faster but may not perform as well as larger models. デフォルトの値は"LeNet5"。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Image Model( "LeNet5" ) ) );

```

#### Image Size

**構文:** obj &lt;&lt; Image Size( number=28 )

**説明:** Specifies the size of image to use while training. Input images are transformed to this size square; larger images have higher resolution but slower training times. デフォルトの値は"28"。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Image Size( 28 ) ) );

```

#### Kernel Sizes

**構文:** obj &lt;&lt; Kernel Sizes( text=3 )

**説明:** For custom convolutional models, specifies the kernel sizes as a space-delimited list of positive integers. Last value carries forward if necessary. デフォルトの値は"3"。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Kernel Sizes( "3" ) ) );

```

#### L1 Penalty

**構文:** obj &lt;&lt; L1 Penalty( number=0.0 )

**説明:** Specifies a multiplier for the sum of absolute values of weight parameters to be added to the loss and induce sparsity. デフォルトの値は"0.0"。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :picture ), Fit( L1 Penalty( 0.0001 ) ) );

```

#### Layer Sizes

**構文:** obj &lt;&lt; Layer Sizes( text=16 )

**説明:** Specifies output sizes of hidden layers as a space-delimited list of integers (actual sizes) or decimals (multipliers of the previous layer size). The final value is the embedding size. デフォルトの値は"16"。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Layer Sizes( "16" ) ) );

```

#### Learning Rate

**構文:** obj &lt;&lt; Learning Rate( number=0.001 )

**説明:** Specifies the learning rate. Smaller learning rates tend to fit better but require more iterations to converge, whereas larger learning rates fit faster. デフォルトの値は"0.001"。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Learning Rate( 0.001 ) ) );

```

#### Margin

**構文:** obj &lt;&lt; Margin( number=1.0 )

**説明:** Specifies the margin used in margin-based loss functions. Larger values should produce larger embedding distances between nominal responses with different levels, but may adversely affect training. デフォルトの値は"1.0"。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Margin( 1.0 ) ) );

```

#### Max Boxes

**構文:** obj &lt;&lt; Max Boxes( number=5 )

**説明:** Specifies the maximum number of predicted boxes per image. デフォルトの値は"5"。

**JMP追加されたバージョン:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Max Boxes( 5 ) ) );

```

#### Max Seq Length

**構文:** obj &lt;&lt; Max Seq Length( number=512 )

**説明:** For text models, specifies the maximum number of tokens to create for each text item. デフォルトの値は"512"。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Chips.jmp" );Torch Deep Learning(	Y( :Buy again? ),	X( :Potato Chip Product Review ),	Fit( Max Seq Length( 512 ) ));

```

#### Mixup Portion

**構文:** obj &lt;&lt; Mixup Portion( number=0.0 )

**説明:** Specifies portion of mixup samples to add to each training batch. For example, if Batch Size is 128 and Mixup Portion is 0.5, then 64 mixup samples are added. デフォルトの値は"0.0"。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Mixup Portion( 0.5 ) ) );

```

#### NMS Threshold

**構文:** obj &lt;&lt; NMS Threshold( number=0.5 )

**説明:** Specifies the non-maximum suppression threshold for predicted boxes.  Overlapping boxes with IOU values above this threshold are dropped. デフォルトの値は"0.5"。

**JMP追加されたバージョン:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( NMS Threshold( 0.5 ) ) );

```

#### Noise Max Sigma

**構文:** obj &lt;&lt; Noise Max Sigma( number=0 )

**説明:** Maximum standard deviation of additive Gaussian noise デフォルトの値は"0"。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Noise Max Sigma( 1 ) ) );

```

#### Nominal Image Threshold

**構文:** obj &lt;&lt; Nominal Image Threshold( number=10 )

**説明:** Specifies the cutoff for determining if images in a column are nominal or continuous.  If the number of unique pixel levels is <= this number, then the images are considered to be nominal. デフォルトの値は"10"。

**JMP追加されたバージョン:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Nominal Image Threshold( 10 ) ) );

```

#### Nominal Loss

**構文:** obj &lt;&lt; Nominal Loss( "NLL"="NLL" )

**説明:** Specifies the loss function for nominal responses. Choose from Negative Loglikelihood (NLL). デフォルトの値は"NLL"。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Nominal Loss( "NLL" ) ) );

```

#### Norm

**構文:** obj &lt;&lt; Norm( "None"|"Batch"|"Group"|"Instance"="Batch" )

**説明:** Specifies the type of normalization to apply to each MLP layer. デフォルトの値は"Batch"。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Norm( "Batch" ) ) );

```

#### Norm First

**構文:** obj &lt;&lt; Norm First( "None"|"Batch"="Batch" )

**説明:** Specifies the type of normalization to apply to the input data to the tabular model. Batch norm effectively centers and scales each input. デフォルトの値は"Batch"。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Norm First( "Batch" ) ) );

```

#### Num Linear

**構文:** obj &lt;&lt; Num Linear( number=1 )

**説明:** For custom convolutional and message passing models, specifies the number of linear layers at the end of Layer Sizes. デフォルトの値は"1"。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Num Linear( 1 ) ) );

```

#### Optimizer

**構文:** obj &lt;&lt; Optimizer( "Adam"|"AdamW"|"SGD"|"SGDAGC"="AdamW" )

**説明:** Specifies the optimization method. Choose between Adaptive moment estimation (Adam), Adam weight decay (AdamW), Stochastic Gradient Descent (SGD), or SGD with Adaptive Gradient Clipping (SGDAGC). デフォルトの値は"AdamW"。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Optimizer( "AdamW" ) ) );

```

#### Pitch Sigma

**構文:** obj &lt;&lt; Pitch Sigma( number=0 )

**説明:** Standard deviation of Gaussian pitch デフォルトの値は"0"。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Pitch Sigma( 5 ) ) );

```

#### Pooling Layers

**構文:** obj &lt;&lt; Pooling Layers( text=Max )

**説明:** Specifies pooling layers as a space-delimited list of one of four keywords:  Max, Avg, Cat, or None. Last value carries forward if necessary. デフォルトの値は"Max"。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Pooling Layers( "Max" ) ) );

```

#### Pretrained Tabular

**構文:** obj &lt;&lt; Pretrained Tabular( ="None" )

**説明:** Specify a pretrained tabular model that is prepended to the Tabular Model. デフォルトの値は"None"。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Pretrained Tabular( "None" ) ) );

```

#### Quantiles

**構文:** obj &lt;&lt; Quantiles( text=0.9 )

**説明:** Specify a space-delimited list of quantiles to use for Quantile loss. デフォルトの値は"0.9"。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Quantiles( "0.9" ) ) );

```

#### RPN NMS Threshold

**構文:** obj &lt;&lt; RPN NMS Threshold( number=0.7 )

**説明:** Specifies the non-maximum suppression threshold for region proposals.  Overlapping boxes with IOU values above this threshold are dropped. デフォルトの値は"0.7"。

**JMP追加されたバージョン:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( RPN NMS Threshold( 0.7 ) ) );

```

#### Remove All But This Fit

**構文:** obj &lt;&lt; ( fit[number] &lt;&lt; Remove All But This Fit )

**説明:** Removes the reports and plots for all models except this one.

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Torch Deep Learning(	Y( :Species ),	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Fit);Wait( 2 );obj << (Fit[1] << Remove All But This Fit);

```

#### Remove Fit

**構文:** obj &lt;&lt; ( fit[number] &lt;&lt; Remove Fit )

**説明:** Removes the entire model report.

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Torch Deep Learning(	Y( :Species ),	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Fit);Wait( 2 );obj << (Fit[1] << Remove Fit);

```

#### Restore From

**構文:** obj &lt;&lt; Restore From( " "=" " )

**説明:** Select a subfolder containing saved files from a previously fit model. Training for a new model will begin where this model finished. Model architectures and validation variables should match. Leave this field blank to train from scratch. デフォルトの値は" "。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Restore From( "" ) ) );

```

#### Roll Sigma

**構文:** obj &lt;&lt; Roll Sigma( number=0 )

**説明:** Standard deviation of Gaussian roll デフォルトの値は"0"。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Roll Sigma( 5 ) ) );

```

#### Save CAMs

**構文:** obj &lt;&lt; Save CAMs

**説明:** Save gradient-based class activation maps (CAMs) as a new column.

**JMP追加されたバージョン:** 18

#### Save Embeddings

**構文:** obj &lt;&lt; Save Embeddings

**説明:** Saves model embeddings (from final hidden layer) as new columns in the data table

**JMP追加されたバージョン:** 18

#### Save Model

**構文:** obj &lt;&lt; Save Model

**説明:** Saves serialized modeling components to disk in a folder that you name.  You can then specify this folder in Restore From to begin training with this model.

**JMP追加されたバージョン:** 18

#### Save Predicteds

**構文:** obj &lt;&lt; Save Predicteds

**説明:** Saves the predicted values in a new column in the data table.

**JMP追加されたバージョン:** 18

#### Screening Method

**構文:** obj &lt;&lt; Screening Method( "ResponseScreening"|"BootstrapForest"="ResponseScreening" )

**説明:** Choose a method by which to screen Tabular Model predictors prior to fitting the model within each fold.  ResponseScreening is fast and BootstrapForest is more thorough. デフォルトの値は"ResponseScreening"。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning(	Y( :sex ),	X( :picture ),	Fit( Screening Method( "ResponseScreening" ) ));

```

#### Screening Threshold

**構文:** obj &lt;&lt; Screening Threshold( number=0 )

**説明:** If >= 1, the number of Tabular Model predictors to select by screening.  If < 1, the predictors with cumulative portion less than the threshold. デフォルトの値は"0"。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Screening Threshold( 1 ) ) );

```

#### Seed

**構文:** obj &lt;&lt; Seed( number=0 )

**説明:** Specifies the seed for the random number generator.  Note results may not be fully reproducible with the same seed due to the stochastic nature of certain Torch calculations. デフォルトの値は"0"。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Seed( 0 ) ) );

```

#### Segmentation Model

**構文:** obj &lt;&lt; Segmentation Model( "UNet"|"FPN"|"LinkNet"|"DeepLabV3"|"DeepLabV3Plus"|"PAN"|"PSPNet"="UNet" )

**説明:** Specifies the image segmentation model. デフォルトの値は"UNet"。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/segmentation.jmp" );Torch Deep Learning( Y( :Mask ), X( :Picture ), Sett( Segmentation Model( "VGG11_BN" ) ) );

```

#### Spline Order

**構文:** obj &lt;&lt; Spline Order( number=3 )

**説明:** For Kolmogorov Arnold B Spline networks, specifies the order of the spline used for interpolation. デフォルトの値は"3"。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Spline Order( 3 ) ) );

```

#### Strides

**構文:** obj &lt;&lt; Strides( text=1 )

**説明:** For custom convolutional models, specifies the strides as a space-delimited list of positive integers. Last value carries forward if necessary. デフォルトの値は"1"。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Strides( "1" ) ) );

```

#### Tabular Model

**構文:** obj &lt;&lt; Tabular Model( "MultiLayerPerceptron"|"FTTransformer"|"KolmogorovArnoldBSpline"|"CustomConv1d"|"LSTM"|"RadialBasisMachine"|"MixedModel"="MultiLayerPerceptron" )

**説明:** Specifies the tabular network architecture to use. Choose from Multilayer Perceptron (MLP), Feature Tokenized Transformer (FTTransformer), Kolmogorov Arnold Network (KolmogorovArnoldBSpline), or other options デフォルトの値は"MultiLayerPerceptron"。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning(	Y( :sex ),	X( :picture ),	Fit( Tabular Model( "MultiLayerPerceptron" ) ));

```

#### Text Model

**構文:** obj &lt;&lt; Text Model( ="BertTiny" )

**説明:** Specifies the text network architecture to use. Models are ordered by size. Smaller models train faster but may not perform as well as larger models. デフォルトの値は"BertTiny"。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Chips.jmp" );Torch Deep Learning(	Y( :Buy again? ),	X( :Potato Chip Product Review ),	Fit( Text Model( "BERT" ) ));

```

#### Triplet Loss Weight

**構文:** obj &lt;&lt; Triplet Loss Weight( number=0.0 )

**説明:** Specifies the multiplier alpha to use in the following compound loss function: alpha \* triplet_loss + (1 - alpha) \* loss_function. Must be between 0 and 1. デフォルトの値は"0.0"。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Triplet Loss Weight( 0.5 ) ) );

```

#### Use Data As Knots

**構文:** obj &lt;&lt; Use Data As Knots( state=0 )

**説明:** For Radial Basis Machine models, check to use the training data as knots to form an interpolation-style model. デフォルトの値は"0"。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning(	Y( :sex, :height ),	X( :picture ),	Fit( Tabular Model( "Radial Basis Machine" ), Use Data As Knots( 1 ) ));

```

#### VFlip Prob

**構文:** obj &lt;&lt; VFlip Prob( number=0 )

**説明:** Probability of vertical flip デフォルトの値は"0"。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :picture ), Fit( VFlip Prob( 0.2 ) ) );

```

#### Weight Decay

**構文:** obj &lt;&lt; Weight Decay( number=0.0 )

**説明:** Specifies a penalty term multiplier of the L2 norm of the trainable parameters, which regularizes them in a way similar to ridge regression. デフォルトの値は"0.0"。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Weight Decay( 0.0001 ) ) );

```

#### Worker Count

**構文:** obj &lt;&lt; Worker Count( number=4 )

**説明:** Specifies the number of workers to use to load batches of data during training. A number near half the number of actual cores is usually near optimal. デフォルトの値は"4"。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Worker Count( 0 ) ) );

```

#### X Slide Sigma

**構文:** obj &lt;&lt; X Slide Sigma( number=0 )

**説明:** Standard deviation of Gaussian random shift along the X axis デフォルトの値は"0"。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :picture ), Fit( X Slide Sigma( 5 ) ) );

```

#### Y Slide Sigma

**構文:** obj &lt;&lt; Y Slide Sigma( number=0 )

**説明:** Standard deviation of Gaussian random shift along the Y axis デフォルトの値は"0"。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Y Slide Sigma( 5 ) ) );

```

#### Yaw Sigma

**構文:** obj &lt;&lt; Yaw Sigma( number=0 )

**説明:** Standard deviation of Gaussian yaw デフォルトの値は"0"。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Yaw Sigma( 5 ) ) );

```

