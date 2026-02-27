# Normal Mixtures



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

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Normal Mixtures(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ));obj << Go;obj << Automatic Recalc( 1 );dt << Select Rows( 5 ) << Exclude( 1 );

```

### Broadcast

**構文:** obj &lt;&lt; Broadcast(message)

**説明:** メッセージをプラットフォームに一括適用する。個々のオブジェクトから戻される結果がデータテーブルである場合は、可能な限り連結する。その最終的な形式は、Table BoxのSave Combined Tableオプションの結果と同じになるか、またはソース列を使用したConcanateオプションの結果と同じになる。それ以外の場合、結果はリストの形で戻される。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );objs = Control Chart Builder(	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),	By( :OPERATOR ));objs[1] << Broadcast( Save Summaries );

```

### Column Switcher

**構文:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**説明:** プラットフォームの変数を変更するための設定パネルを追加する。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});

```

### Copy ByGroup Script

**構文:** obj &lt;&lt; Copy ByGroup Script

**説明:** この分析を再現するJSLスクリプトを生成し、クリップボードにコピーする。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Normal Mixtures(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj << Go;obj[1] << Copy ByGroup Script;

```

### Copy Script

**構文:** obj &lt;&lt; Copy Script

**説明:** この分析を再現するJSLスクリプトを生成し、クリップボードにコピーする。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Normal Mixtures(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ));obj << Go;obj << Copy Script;

```

### Data Table Window

**構文:** obj &lt;&lt; Data Table Window

**説明:** この分析に使用したデータテーブルのウィンドウを手前に表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Normal Mixtures(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ));obj << Go;obj << Data Table Window;

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

dt = Open( "$SAMPLE_DATA/Iris.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Normal Mixtures(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj << Go;t = obj[1] << Get ByGroup Script;Show( t );

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

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Normal Mixtures(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ));obj << Go;t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

### Get Data Table

**構文:** obj &lt;&lt; Get Data Table

**説明:** データテーブルへの参照を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Normal Mixtures(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ));obj << Go;t = obj << Get Datatable;Show( N Rows( t ) );

```

### Get Group Platform

**構文:** obj &lt;&lt; Get Group Platform

**説明:** 該当のプラットフォームがグループに属している場合に、Group Platformオブジェクトを戻す。それ以外の場合はEmpty()を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );group = biv[1] << Get Group Platform;Wait( 1 );group << Layout( "Arrange in Tabs" );

```

### Get Script

**構文:** obj &lt;&lt; Get Script

**説明:** この分析を再現するスクリプト(JSL)を生成し、それを式として戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Normal Mixtures(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ));obj << Go;t = obj << Get Script;Show( t );

```

### Get Script With Data Table

**構文:** obj &lt;&lt; Get Script With Data Table

**説明:** この分析を再現するスクリプト(JSL)をデータテーブルへの参照も含めて生成し、それを式として戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Normal Mixtures(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ));obj << Go;t = obj << Get Script With Data Table;Show( t );

```

### Get Timing

**構文:** obj &lt;&lt; Get Timing

**説明:** プラットフォームの起動にかかった時間を取得する。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Normal Mixtures(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ));obj << Go;t = obj << Get Timing;Show( t );

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

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Normal Mixtures(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ));obj << Go;obj << Redo Analysis;

```

### Relaunch Analysis

**構文:** obj &lt;&lt; Relaunch Analysis

**説明:** プラットフォームの起動ウィンドウを開き、レポートを作成した時の設定を表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Normal Mixtures(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ));obj << Go;obj << Relaunch Analysis;

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

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Normal Mixtures(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ));obj << Go;r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Report View

**構文:** obj &lt;&lt; Report View( "完全"|"要約" )

**説明:** レポートビューは、プラットフォームレポートの詳細を表示するかどうかを決定する。Fullはすべての詳細を表示し、Summaryはプラットフォームにより限定されたものだけを表示する。 動作をカスタマイズするため、各ディスプレイボックスは<<Set Summary Behaviorメッセージをサポートする。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Normal Mixtures(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ));obj << Go;obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**構文:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**説明:** 分析を再現するためのJSLスクリプトを作成し、データテーブルにテーブルプロパティとして保存する。スクリプトの名前を指定できる。Append Suffixオプションは、スクリプト名に数字の接尾辞を追加する。これにより、同名のスクリプトが存在していても区別できる。Promptオプションは、ユーザにスクリプト名の指定を促す。Replaceオプションは、同名の既存のスクリプトを置き換える。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Normal Mixtures(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj << Go;obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**構文:** obj &lt;&lt; Save ByGroup Script to Journal

**説明:** この分析を再現するJSLスクリプトを生成し、ジャーナルにそのスクリプトのボタンを追加する。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Normal Mixtures(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj << Go;obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**構文:** obj &lt;&lt; Save ByGroup Script to Script Window

**説明:** この分析を再現するJSLスクリプトを生成し、現在のスクリプトウィンドウに表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Normal Mixtures(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj << Go;obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**構文:** obj &lt;&lt; Save Script for All Objects

**説明:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Normal Mixtures(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ));obj << Go;obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**構文:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**説明:** すべてのレポートオブジェクトを再現するスクリプトを現在のデータテーブルに保存する。このオプションは、ウィンドウ内にレポートが複数ある場合に便利。作成されるスクリプトの名前は、引用符で囲んで指定しない限り、1つ目のプラットフォーム名となる。

**例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Normal Mixtures(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj << Go;obj[1] << Save Script for All Objects To Data Table;

```

**例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Normal Mixtures(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj << Go;obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**構文:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**説明:** この分析を再現するJSLスクリプトを生成し、データテーブルのテーブルプロパティとして保存する。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Normal Mixtures(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ));obj << Go;obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**構文:** obj &lt;&lt; Save Script to Journal

**説明:** この分析を再現するJSLスクリプトを生成し、ジャーナルにそのスクリプトのボタンを追加する。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Normal Mixtures(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ));obj << Go;obj << Save Script to Journal;

```

### Save Script to Report

**構文:** obj &lt;&lt; Save Script to Report

**説明:** この分析を再現するJSLスクリプトを生成し、レポートウィンドウに表示する。分析手順の記録を結果と一緒に残せる。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Normal Mixtures(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ));obj << Go;obj << Save Script to Report;

```

### Save Script to Script Window

**構文:** obj &lt;&lt; Save Script to Script Window

**説明:** この分析を再現するJSLスクリプトを生成し、現在のスクリプトウィンドウに表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Normal Mixtures(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ));obj << Go;obj << Save Script to Script Window;

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

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Normal Mixtures(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ));obj << Go;obj << Title( "My Platform" );

```

### Top Report

**構文:** obj &lt;&lt; Top Report

**説明:** レポート内のルートノードへの参照を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Normal Mixtures(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ));obj << Go;r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Transform Column

**構文:** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**説明:** オブジェクトのローカルコンテキスト(通常はプラットフォーム)内に変換列を作成する。この変換列は、それを作成したプラットフォームの中のみで使用可能。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),	Continuous Distribution( Column( :"age^2"n ) ));

```

### View Web XML

**構文:** obj &lt;&lt; View Web XML

**説明:** インタラクティブHTMLレポートの作成に使うXMLコードを戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );xml = obj << View Web XML;

```

### Window View

**構文:** obj = Normal Mixtures(...Window View( "Visible"|"Invisible"|"Private" )...)

**説明:** レポートとして作成するウィンドウの種類を設定する。デフォルトでは、Visibleレポートウィンドウが作成される。Invisible のウィンドウは画面に表示されないが、Window()などの関数によって検出できる。Private のウィンドウにはほとんどのウィンドウメッセージを送れるが、検出することはできないため、レポートオブジェクトを通してアクセスする必要がある。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

## 列

### By

**構文:** obj = Normal Mixtures(...&lt;By( column(s) )&gt;...)

**説明:** 指定された列の各水準に対して、個別に分析を実行する。

**JMP追加されたバージョン:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Normal Mixtures(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj << Go;

```

### Columns

**構文:** obj = Normal Mixtures(...Columns( column(s) )...)

**JMP追加されたバージョン:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Normal Mixtures(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ),	Go);

```

### Freq

**構文:** obj = Normal Mixtures(...&lt;Freq( column )&gt;...)

**説明:** 分析の際に各行の度数として用いる値の列を指定する。

**JMP追加されたバージョン:** 14

**K-Means法の例**

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure3Freq.jmp" );obj = K Means Cluster(	Y(		:contamination, :corrosion, :doping, :metallization, :miscellaneous, :oxide defect,		:silicon defect	),	Freq( :SampleSize ),	Number of Clusters( 2 ),	Go);

```

**正規混合の例**

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure3Freq.jmp" );obj = Normal Mixtures(	Y(		:contamination, :corrosion, :doping, :metallization, :miscellaneous, :oxide defect,		:silicon defect	),	Freq( :SampleSize ),	Number of Clusters( 2 ),	Go);

```

### Weight

**構文:** obj = Normal Mixtures(...&lt;Weight( column )&gt;...)

**説明:** 分析の際に各行の重みとして用いる値の列を指定する。

**JMP追加されたバージョン:** 14

**K-Means法の例**

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure3Freq.jmp" );obj = K Means Cluster(	Y(		:contamination, :corrosion, :doping, :metallization, :miscellaneous, :oxide defect,		:silicon defect	),	Weight( :SampleSize ),	Number of Clusters( 2 ),	Go);

```

**正規混合の例**

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure3Freq.jmp" );obj = Normal Mixtures(	Y(		:contamination, :corrosion, :doping, :metallization, :miscellaneous, :oxide defect,		:silicon defect	),	Weight( :SampleSize ),	Number of Clusters( 2 ),	Go);

```

### Y

**構文:** obj = Normal Mixtures(...Y( column(s) )...)

**JMP追加されたバージョン:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Normal Mixtures(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ),	Go);

```

## 関連するコンストラクター

### Normal Mixtures

**構文:** Normal Mixtures( Y( column(s) ), Number of Clusters( number ) )

**説明:** 多変量の混合正規分布にデータが従うと仮定して、数値データをクラスタリングする。クラスターの個数を事前に指定しておく必要がある。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Normal Mixtures(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ));obj << Go;

```

## 項目のメッセージ

### Diagonal Variance

**構文:** obj &lt;&lt; Diagonal Variance( state=0|1 )

**説明:** 正規混合クラスタリングにおいて、共分散がゼロであると仮定し、分散共分散行列の対角線だけを使用する。

**JMP追加されたバージョン:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Normal Mixtures( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Diagonal Variance( 1 );obj << Go;

```

### Go

**構文:** obj &lt;&lt; Go

**説明:** 反復計算を実行して、その分析結果を表示する。

**JMP追加されたバージョン:** 14

**K-Means法の例**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = K Means Cluster(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ));obj << Go;

```

**正規混合の例**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Normal Mixtures(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ));obj << Go;

```

### Mixtures MaxIter

**構文:** obj &lt;&lt; Mixtures MaxIter( number )

**説明:** 正規混合の最大反復回数を設定する。デフォルトは300。

**JMP追加されたバージョン:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Normal Mixtures( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Mixtures MaxIter( 100 );obj << Go;

```

### Mixtures N Starts

**構文:** obj &lt;&lt; Mixtures N Starts( number )

**説明:** 正規混合クラスタリングの反復計算全体を何回、やり直すかを設定する。デフォルトは30回。この値は、「詳細設定」レポートに「ツアー」として表示される。

**JMP追加されたバージョン:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Normal Mixtures( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Mixtures N Starts( 20 );obj << Go;

```

### Mixtures Tolerance

**構文:** obj &lt;&lt; Mixtures Tolerance( number )

**説明:** 正規混合クラスタリングの収束基準を設定する。デフォルトは、1e-8。値は、「詳細設定」レポートに「収束基準」として表示される。

**JMP追加されたバージョン:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Normal Mixtures( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Mixtures Tolerance( 1e-7 );obj << Go;

```

### Number of Clusters

**構文:** obj &lt;&lt; Number of Clusters( number )

**説明:** クラスターの数を変更する。

**JMP追加されたバージョン:** 14

**K-Means法の例**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = K Means Cluster(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ),	Go);Wait( 1 );obj << Number of Clusters( 5 );obj << Go;

```

**正規混合の例**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Normal Mixtures(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ),	Go);Wait( 1 );obj << Number of Clusters( 5 );obj << Go;

```

### Outlier Cluster

**構文:** obj &lt;&lt; Outlier Cluster( state=0|1 )

**説明:** 外れ値のデータを特定するため、一様分布に従う追加のクラスターを設定する。分析結果のレポートにおいて、この一様分布のクラスターは「クラスター0」と呼ばれる。

**JMP追加されたバージョン:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Normal Mixtures( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Outlier Cluster( 1 );obj << Go;

```

## Normal Mixtures Fit

### 項目のメッセージ

#### Biplot

**構文:** obj &lt;&lt; Biplot( state=0|1 )

**説明:** 最初の2つの主成分において、クラスターと点をプロットしたグラフの表示/非表示を切り替える。

**JMP追加されたバージョン:** 14

**K-Means法の例**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = K Means Cluster(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ),	Go);obj << Biplot( 1 );

```

**正規混合の例**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Normal Mixtures(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ),	Go);obj << Biplot( 1 );

```

#### Biplot 3D

**構文:** obj &lt;&lt; Biplot 3D( state=0|1 )

**説明:** 最初の3つの主成分において、クラスターと点をプロットしたグラフの表示/非表示を切り替える。

**JMP追加されたバージョン:** 14

**K-Means法の例**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = K Means Cluster(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ),	Go);obj << Biplot 3D( 1 );

```

**正規混合の例**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Normal Mixtures(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ),	Go);obj << Biplot 3D( 1 );

```

#### Biplot Contour Density

**構文:** obj &lt;&lt; Biplot Contour Density( density percent )

**説明:** 密度等高線の水準を設定する。

**JMP追加されたバージョン:** 14

**K-Means法の例**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = K Means Cluster(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ),	Go( Biplot( 1 ) ));obj << Biplot Contour Density( .95 );

```

**正規混合の例**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Normal Mixtures(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ),	Go( Biplot( 1 ) ));obj << Biplot Contour Density( .95 );

```

#### Biplot Ray Position

**構文:** obj &lt;&lt; Biplot Ray Position( [X, Y, scaling] )

**説明:** バイプロット線を移動させる。

**JMP追加されたバージョン:** 14

**K-Means法の例**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = K Means Cluster(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ),	Go( Biplot( 1 ) ));obj << Biplot Ray Position( [-1, -1, 2] );

```

**正規混合の例**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Normal Mixtures(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ),	Go( Biplot( 1 ) ));obj << Biplot Ray Position( [-1, -1, 2] );

```

#### Get Statistics

**構文:** obj &lt;&lt; Get Statistics

**説明:** 各クラスター内の平均および標準偏差を戻す。

**JMP追加されたバージョン:** 14

**K-Means法の例**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = K Means Cluster(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ),	Go);stats = obj << Get Statistics;Show( stats );

```

**正規混合の例**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Normal Mixtures(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ),	Go);stats = obj << Get Statistics;Show( stats );

```

#### Mark Clusters

**構文:** obj &lt;&lt; Mark Clusters

**説明:** クラスターごとに異なるマーカーが割り当てられる。これは、クラスターのバイプロットなど、行属性のマーカーを使用するプラットフォームのプロットに影響する。

**JMP追加されたバージョン:** 14

**K-Means法の例**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = K Means Cluster(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ),	Go);obj << Biplot( 1 );obj << Mark Clusters;

```

**正規混合の例**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Normal Mixtures(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ),	Go);obj << Biplot( 1 );obj << Mark Clusters;

```

#### Parallel Coord Plots

**構文:** obj &lt;&lt; Parallel Coord Plots( state=0|1 )

**説明:** クラスターごとに各データ行の値を折れ線で表したグラフの表示/非表示を切り替える。

**JMP追加されたバージョン:** 14

**K-Means法の例**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = K Means Cluster(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ),	Go);obj << Parallel Coord Plots( 1 );

```

**正規混合の例**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Normal Mixtures(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ),	Go);obj << Parallel Coord Plots( 1 );

```

#### Publish Cluster Formulas

**構文:** obj &lt;&lt; Publish Cluster Formulas

**説明:** 確率の計算式を求め、その計算式の列を作成するスクリプトを「計算式デポ」に発行する。

**JMP追加されたバージョン:** 14

**K-Means法の例**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = K Means Cluster(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ),	Go);obj << Publish Cluster Formulas;

```

**正規混合の例**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Normal Mixtures(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ),	Go);obj << Publish Cluster Formulas;

```

#### Save Cluster Formula

**構文:** obj &lt;&lt; Save Cluster Formula

**説明:** データテーブルに、最も所属する確率が高いクラスター名を求める計算式を含んだ新しい列を保存する。

**JMP追加されたバージョン:** 14

**K-Means法の例**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = K Means Cluster(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ),	Go);obj << Save Cluster Formula;

```

**正規混合の例**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Normal Mixtures(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ),	Go);obj << Save Cluster Formula;

```

#### Save Clusters

**構文:** obj &lt;&lt; Save Clusters

**説明:** データテーブルに、最も所属する確率が高いクラスター名を含んだ新しい列を保存する。

**JMP追加されたバージョン:** 14

**K-Means法の例**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = K Means Cluster(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ),	Go);obj << Save Clusters;

```

**正規混合の例**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Normal Mixtures(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ),	Go);obj << Save Clusters;

```

#### Save Colors to Table

**構文:** obj &lt;&lt; Save Colors to Table

**説明:** 属するクラスターごとに異なる色で各行を色分けする。、「行の属性」に、色を保存する。

**JMP追加されたバージョン:** 14

**K-Means法の例**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = K Means Cluster(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ));obj << Go;obj << Save Colors to Table;

```

**正規混合の例**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Normal Mixtures(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ));obj << Go;obj << Save Colors to Table;

```

#### Save Density Formula

**構文:** obj &lt;&lt; Save Density Formula

**説明:** 密度関数の計算式をデータテーブルに保存する。

**JMP追加されたバージョン:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Normal Mixtures(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ),	Go);obj << Save Density Formula;

```

#### Save Mixture Formulas

**構文:** obj &lt;&lt; Save Mixture Formulas

**説明:** 各クラスターの混合確率の計算式をデータテーブルの新しい列に保存する。

**JMP追加されたバージョン:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Normal Mixtures(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ),	Go);obj << Save Mixture Formulas;

```

#### Save Mixture Probabilities

**構文:** obj &lt;&lt; Save Mixture Probabilities

**説明:** 各クラスターに属する確率をデータテーブルの新しい列に保存する。

**JMP追加されたバージョン:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Normal Mixtures(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ),	Go);obj << Save Mixture Probabilities;

```

#### Scatterplot Matrix

**構文:** obj &lt;&lt; Scatterplot Matrix( state=0|1 )

**説明:** 新しいウィンドウに散布図行列を作成し、現在のクラスター数に基づく信頼限界楕円を表示する。

**JMP追加されたバージョン:** 14

**K-Means法の例**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = K Means Cluster(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ));obj << Go;obj << Scatterplot Matrix;

```

**正規混合の例**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Normal Mixtures(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ));obj << Go;obj << Scatterplot Matrix;

```

#### Show Biplot Rays

**構文:** obj &lt;&lt; Show Biplot Rays( state=0|1 )

**説明:** バイプロットにおいて、中心からの線分の表示/非表示を切り替える。 デフォルトではオン。

**JMP追加されたバージョン:** 14

**K-Means法の例**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = K Means Cluster(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ),	Go( Biplot( 1 ) ));obj << Show Biplot Rays( 1 );

```

**正規混合の例**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Normal Mixtures(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ),	Go( Biplot( 1 ) ));obj << Show Biplot Rays( 1 );

```

#### Simulate Clusters

**構文:** obj &lt;&lt; Simulate Clusters

**説明:** クラスターの混合確率、平均、標準偏差の推定値を使ってシミュレーションしたデータを、新しいデータテーブルに作成する。

**JMP追加されたバージョン:** 14

**K-Means法の例**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = K Means Cluster(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ),	Go);obj << Simulate Clusters( 1000 );

```

**正規混合の例**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Normal Mixtures(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ),	Go);obj << Simulate Clusters( 1000 );

```

