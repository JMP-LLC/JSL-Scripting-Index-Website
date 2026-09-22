# Discriminant



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

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Automatic Recalc( 1 );dt << Select Rows( 5 ) << Exclude( 1 );

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

dt = Open( "$SAMPLE_DATA/Iris.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Copy ByGroup Script;

```

### Copy Script

**構文:** obj &lt;&lt; Copy Script

**説明:** この分析を再現するJSLスクリプトを生成し、クリップボードにコピーする。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Copy Script;

```

### Data Table Window

**構文:** obj &lt;&lt; Data Table Window

**説明:** この分析に使用したデータテーブルのウィンドウを手前に表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Data Table Window;

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

dt = Open( "$SAMPLE_DATA/Iris.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));t = obj[1] << Get ByGroup Script;Show( t );

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

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

### Get Data Table

**構文:** obj &lt;&lt; Get Data Table

**説明:** データテーブルへの参照を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));t = obj << Get Datatable;Show( N Rows( t ) );

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

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));t = obj << Get Script;Show( t );

```

### Get Script With Data Table

**構文:** obj &lt;&lt; Get Script With Data Table

**説明:** この分析を再現するスクリプト(JSL)をデータテーブルへの参照も含めて生成し、それを式として戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));t = obj << Get Script With Data Table;Show( t );

```

### Get Timing

**構文:** obj &lt;&lt; Get Timing

**説明:** プラットフォームの起動にかかった時間を取得する。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));t = obj << Get Timing;Show( t );

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

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Redo Analysis;

```

### Relaunch Analysis

**構文:** obj &lt;&lt; Relaunch Analysis

**説明:** プラットフォームの起動ウィンドウを開き、レポートを作成した時の設定を表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Relaunch Analysis;

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

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Report View

**構文:** obj &lt;&lt; Report View( "完全"|"要約" )

**説明:** レポートビューは、プラットフォームレポートの詳細を表示するかどうかを決定する。Fullはすべての詳細を表示し、Summaryはプラットフォームにより限定されたものだけを表示する。 動作をカスタマイズするため、各ディスプレイボックスは<<Set Summary Behaviorメッセージをサポートする。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**構文:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**説明:** 分析を再現するためのJSLスクリプトを作成し、データテーブルにテーブルプロパティとして保存する。スクリプトの名前を指定できる。Append Suffixオプションは、スクリプト名に数字の接尾辞を追加する。これにより、同名のスクリプトが存在していても区別できる。Promptオプションは、ユーザにスクリプト名の指定を促す。Replaceオプションは、同名の既存のスクリプトを置き換える。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**構文:** obj &lt;&lt; Save ByGroup Script to Journal

**説明:** この分析を再現するJSLスクリプトを生成し、ジャーナルにそのスクリプトのボタンを追加する。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**構文:** obj &lt;&lt; Save ByGroup Script to Script Window

**説明:** この分析を再現するJSLスクリプトを生成し、現在のスクリプトウィンドウに表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**構文:** obj &lt;&lt; Save Script for All Objects

**説明:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**構文:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**説明:** すべてのレポートオブジェクトを再現するスクリプトを現在のデータテーブルに保存する。このオプションは、ウィンドウ内にレポートが複数ある場合に便利。作成されるスクリプトの名前は、引用符で囲んで指定しない限り、1つ目のプラットフォーム名となる。

**例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table;

```

**例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**構文:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**説明:** この分析を再現するJSLスクリプトを生成し、データテーブルのテーブルプロパティとして保存する。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**構文:** obj &lt;&lt; Save Script to Journal

**説明:** この分析を再現するJSLスクリプトを生成し、ジャーナルにそのスクリプトのボタンを追加する。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Save Script to Journal;

```

### Save Script to Report

**構文:** obj &lt;&lt; Save Script to Report

**説明:** この分析を再現するJSLスクリプトを生成し、レポートウィンドウに表示する。分析手順の記録を結果と一緒に残せる。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Save Script to Report;

```

### Save Script to Script Window

**構文:** obj &lt;&lt; Save Script to Script Window

**説明:** この分析を再現するJSLスクリプトを生成し、現在のスクリプトウィンドウに表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Save Script to Script Window;

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

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Title( "My Platform" );

```

### Top Report

**構文:** obj &lt;&lt; Top Report

**説明:** レポート内のルートノードへの参照を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

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

**構文:** obj = Discriminant(...Window View( "Visible"|"Invisible"|"Private" )...)

**説明:** レポートとして作成するウィンドウの種類を設定する。デフォルトでは、Visibleレポートウィンドウが作成される。Invisible のウィンドウは画面に表示されないが、Window()などの関数によって検出できる。Private のウィンドウにはほとんどのウィンドウメッセージを送れるが、検出することはできないため、レポートオブジェクトを通してアクセスする必要がある。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

## 列

### By

**構文:** obj = Discriminant(...&lt;By( column(s) )&gt;...)

**説明:** 指定された列の各水準に対して、個別に分析を実行する。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));

```

### Categories

**構文:** obj = Discriminant(...Categories( column )...)

**説明:** データにおいてカテゴリ(グループ)を含んだ列を指定する。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));

```

### Covariates

**構文:** obj = Discriminant(...Covariates( column(s) )...)

**説明:** 各データ行をカテゴリに分類する際に使用する連続変数の列を指定する。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));

```

### Freq

**構文:** obj = Discriminant(...&lt;Freq( column )&gt;...)

**説明:** 分析の際に各行の度数として用いる値の列を指定する。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );dt << New Column( "_freqcol", Numeric, Continuous, Set Each Value( Random Integer( 1, 5 ) ) );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Freq( :_freqcol ));

```

### Validation

**構文:** obj = Discriminant(...&lt;Validation( column )&gt;...)

**説明:** 検証セットを定義する数値列を指定する。異なる値が3つ以下の列でなければならない。

```jsl

dt = Open( "$SAMPLE_DATA/Liver Cancer.jmp" );obj = dt << Discriminant(	X( :Severity ),	Validation( :Validation ),	Y( :BMI, :Age, :Time ),	Use Matrix Columns( 1 ));

```

### Weight

**構文:** obj = Discriminant(...&lt;Weight( column )&gt;...)

**説明:** 分析の際に各行の重みとして用いる値の列を指定する。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );dt << New Column( "_weightcol", Numeric, Continuous, Set Each Value( Random Beta( 1, 1 ) ) );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Weight( :_weightcol ));

```

### X

**構文:** obj = Discriminant(...X( column )...)

**説明:** データにおいてカテゴリ(グループ)を含んだ列を指定する。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));

```

### Y

**構文:** obj = Discriminant(...Y( column(s) )...)

**説明:** 各データ行をカテゴリに分類する際に使用する連続変数の列を指定する。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));

```

## 関連するコンストラクター

### Discriminant

**構文:** Discriminant( Y( columns ), X( columns ) )

**説明:** Mahalanobisの距離を使って、各オブザベーションから各グループの多変量平均(重心)までの距離を求める。その後、各オブザベーションを最も近いグループに分類する。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));

```

## 項目のメッセージ

### Apply This Model

**構文:** obj &lt;&lt; Apply This Model

**説明:** ステップワイズ変数選択で現在選択されている変数のモデルを実行し、ダイアログを閉じる。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Stepwise Variable Selection( 1 );obj << Step Forward;Wait( 2 );obj << Apply This Model;

```

### Biplot Ray Position

**構文:** obj &lt;&lt; Biplot Ray Position( [x position, y position, radius scaling] )

**説明:** 正準プロットと三次元正準プロットにおいて、バイプロット線の位置と半径のスケールを指定する。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Biplot Ray Position( [0, 1.7, 3.5] );

```

### Canonical 3D Plot

**構文:** obj &lt;&lt; Canonical 3D Plot( state=0|1 )

**説明:** 三次元正準プロットの表示/非表示を切り替える。注: グループが4つ以上ある場合のみ使用可能。

```jsl

dt = Open( "$SAMPLE_DATA/Cherts.jmp" );obj = dt << Discriminant(	X( :location name ),	Y( :Al, :Mn, :Na, :Br, :Ce, :Co, :Cr, :Cs, :Eu, :Fe, :Hf, :La, :Sc, :Sm, :U ));obj << Canonical 3D Plot( 1 );(obj << report)["Discriminant Scores"] << Close( 1 );

```

### Canonical Plot

**構文:** obj &lt;&lt; Canonical Plot( state=0|1 )

**説明:** 正準プロットの表示/非表示を切り替える。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Canonical Plot( 1 );

```

### Color Points

**構文:** obj &lt;&lt; Color Points

**説明:** 正準プロットと三次元正準プロットの点を、X変数の水準にしたがって色分けする。この時、データテーブルの行に、色の属性が付与される。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));dt << Clear Row States;Wait( 2 );obj << Color Points;

```

### Consider New Levels

**構文:** obj &lt;&lt; Consider New Levels( fraction )

**説明:** どのグループにも分類できそうにないデータ行を、データにはないグループのものとみなす。その新しいグループに属する事前確率を指定する。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Consider New Levels( 0.05 );

```

### Cross Validate by Excluded Rows

**構文:** obj = Discriminant(...Cross Validate by Excluded Rows( state=0 )...)

**説明:** データテーブルで除外されている行を検証セットに用いて、モデルの適合度を求める。 デフォルトの値は"0"。

**JMP追加されたバージョン:** 14

### Discriminant Method

**構文:** obj &lt;&lt; Discriminant Method( Linear ); obj &lt;&lt; Discriminant Method( Quadratic ); obj &lt;&lt; Discriminant Method( Regularized, Regularization Lambda( fraction ), Regularization Gamma( fraction ) ); obj &lt;&lt; Discriminant Method( Wide Linear )

**説明:** 判別分析の手法を指定する。

Regularizedオプションは、引数を必要とする。Regularization Lambdaパラメータの範囲は0(二次判別分析)～1(線形判別分析)。Regularization Gammaパラメータの範囲は0(縮小しない)～1(対角要素のみ)。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Discriminant Method(	Regularized,	Regularization Lambda( 0.2 ),	Regularization Gamma( 0.6 ));

```

### Discriminant Scores

**構文:** obj &lt;&lt; Discriminant Scores( state=0|1 )

**説明:** 各行の判別スコアをまとめた表の表示/非表示を切り替える。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Discriminant Scores( 1 );

```

### Enter All

**構文:** obj &lt;&lt; Enter All

**説明:** ステップワイズ変数選択ですべての変数をモデルに追加する。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Stepwise Variable Selection( 1 );obj << Enter All;

```

### Get Discrim Matrices

**構文:** obj &lt;&lt; Get Discrim Matrices

**説明:** 判別分析の結果をまとめたリストを戻す。リストは、共変量・カテゴリカル変数・X水準・共変量平均をそれぞれ含んだ、名前付きリストで構成される。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));z = obj << Get Discrim Matrices;Show( z );

```

### Get Measures

**構文:** obj &lt;&lt; Get Measures

**説明:** あてはめたモデルの適合度指標を戻す。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Get Measures;

```

### Go

**構文:** obj &lt;&lt; Go

**説明:** R2乗に改善が見られなくなるまで共変量を追加する。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Stepwise Variable Selection( 1 );obj << Go;

```

### Make Scoring Script

**構文:** obj &lt;&lt; Make Scoring Script

**説明:** [計算式の保存]オプションによって保存される計算式列を作成するスクリプトを生成する。生成されたスクリプトを保存し、たとえば別のデータテーブルで使用すると、グループに属する確率を計算し、どのグループに属するかを予測する計算式列が作成される。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Make Scoring Script;

```

### Precision Recall Curve

**構文:** obj &lt;&lt; Precision Recall Curve( state=0|1 )

**説明:** 応答変数の水準ごとに描かれるPR曲線の表示/非表示を切り替える。PR曲線は、さまざまな閾値における適合率と再現率をプロットしたもの。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Precision Recall Curve( 1 );

```

### Profiler

**構文:** obj &lt;&lt; Profiler( state=0|1 )

**説明:** 予測プロファイルの表示/非表示を切り替える。予測プロファイルは、1因子ずつスライスしながら予測式を図示したものである。予測プロファイルでは、最適化を行える。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Profiler;

```

### Publish Probability Formulas

**構文:** obj &lt;&lt; Publish Probability Formulas

**説明:** 確率の計算式を作成し、「計算式デポ」プラットフォームに計算式列のスクリプトとして保存する。「計算式デポ」レポートが開いていない場合は、このオプションによって「計算式デポ」レポートが作成される。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Publish Probability Formulas;

```

### ROC Curve

**構文:** obj &lt;&lt; ROC Curve( state=0|1 )

**説明:** 応答変数の各水準に対し、ROC曲線(受診者動作特性曲線)の表示/非表示を切り替える。ROC曲線は、「感度」と「1-特異度」をプロットした曲線。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));Wait( 0 );obj << ROC Curve( 1 );

```

### Remove All

**構文:** obj &lt;&lt; Remove All

**説明:** ステップワイズ変数選択でモデルからすべての変数を削除する。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Stepwise Variable Selection( 1 );obj << Enter All;Wait( 2 );obj << Remove All;

```

### Save Canonical Scores

**構文:** obj &lt;&lt; Save Canonical Scores

**説明:** データテーブルに、各データ行における正準スコアの計算式を含んだ列を保存する。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Save Canonical Scores;

```

### Save Discrim Matrices

**構文:** obj &lt;&lt; Save Discrim Matrices

**説明:** 判別分析の結果をまとめたリストを含むスクリプトをデータテーブルに保存する。リストは、共変量・カテゴリカル変数・X水準・共変量平均をそれぞれ含んだ、名前付きリストで構成される。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Save Discrim Matrices;

```

### Save Formulas

**構文:** obj &lt;&lt; Save Formulas

**説明:** 距離・確率・分類先を求める計算式をデータテーブルに保存する。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Save Formulas;

```

### Save To New Data Table

**構文:** obj &lt;&lt; Save To New Data Table

**説明:** バイプロット線の情報、正準変数のグループ平均、正準スコアを新しいデータテーブルに保存する。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Save To New Data Table;

```

### Scatterplot Matrix

**構文:** obj &lt;&lt; Scatterplot Matrix

**説明:** 共変量の「散布図行列」レポートを開く。このオプションは、「散布図行列」プラットフォームを呼び出し、各グループの確率楕円を塗りつぶした状態で表示する。散布図には、検証セットが使用される場合でもデータテーブルのすべてのデータ行が含まれる。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Scatterplot Matrix( 1 );

```

### Score Data

**構文:** obj &lt;&lt; Score Data( state=0|1 )

### Select Misclassified Rows

**構文:** obj &lt;&lt; Select Misclassified Rows

**説明:** データテーブル、および、レポートにおけるデータの一覧において、誤分類されている行を選択する。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Show Interesting Rows Only( 1 );obj << Select Misclassified Rows;

```

### Select Uncertain Rows

**構文:** obj &lt;&lt; Select Uncertain Rows( fraction )

**説明:** データテーブル、および、レポートにおけるデータの一覧において、分類が不確実な行を選択する。「分類が不確実な行」とは、いずれかのグループに属する確率が0にも1にも近くないものを指す。fraction引数は、確率が0または1からどれだけ離れているときに「不確実」とみなすかを示す。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Show Interesting Rows Only( 1 );obj << Select Uncertain Rows( 0.2 );

```

### Show Biplot Rays

**構文:** obj &lt;&lt; Show Biplot Rays( state=0|1 )

**説明:** 正準プロットと三次元正準プロットにおいて、バイプロット線の表示/非表示を切り替える。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Show Biplot Rays( 1 );

```

### Show Canonical Details

**構文:** obj &lt;&lt; Show Canonical Details( state=0|1 )

**説明:** 「正準の詳細」レポートの表示/非表示を切り替える。このレポートには、正準判別分析の結果が含まれている。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Show Canonical Details( 1 );

```

### Show Canonical Structure

**構文:** obj &lt;&lt; Show Canonical Structure( state=0|1 )

**説明:** 「正準構造」レポートの表示/非表示を切り替える。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Show Canonical Structure( 1 );

```

### Show Canonical Structures

**構文:** obj &lt;&lt; Show Canonical Structures( state=0|1 )

### Show Classification Counts

**構文:** obj &lt;&lt; Show Classification Counts( state=0|1 )

**説明:** 「スコアの要約」レポートにおいて、混同行列の表示/非表示を切り替える。デフォルトでは、この混同行列は表示される。混同行列は、カテゴリカルなX変数の水準ごとの実測値と予測値をクロス表として集計したものである。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Show Classification Counts( 1 );

```

### Show Distances to Each Group

**構文:** obj &lt;&lt; Show Distances to Each Group( state=0|1 )

**説明:** 各データ行について、グループ平均までのMahalanobis距離の2乗を計算したレポートの表示/非表示を切り替える。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Show Distances to each group( 1 );

```

### Show Group Means

**構文:** obj &lt;&lt; Show Group Means( state=0|1 )

**説明:** 各共変量の平均を示す「グループ平均」レポートの表示/非表示を切り替える。X変数の水準ごとの平均と、全体平均が表示される。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Show Group Means( 1 );

```

### Show Interesting Rows Only

**構文:** obj &lt;&lt; Show Interesting Rows Only( state=0|1 )

**説明:** 「判別スコア」レポートにおいて、誤分類された行と、予測確率が0.05～0.95である行のみを表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Show Interesting Rows Only( 1 );

```

### Show Means CL Ellipses

**構文:** obj &lt;&lt; Show Means CL Ellipses( state=0|1 )

**説明:** 正準プロットと三次元正準プロットにおいて、各グループの平均に対する95%信頼楕円の表示/非表示を切り替える。この信頼楕円は、データが正規分布に従うと仮定している。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Show Means CL Ellipses( 1 );

```

### Show Normal 50% Contours

**構文:** obj &lt;&lt; Show Normal 50% Contours( state=0|1 )

**説明:** 正準プロットと三次元正準プロットにおいて、各グループの母集団の50%を含むと推定される正規楕円領域の表示/非表示を切り替える。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Show Normal 50% Contours( 1 );

```

### Show Points

**構文:** obj &lt;&lt; Show Points( state=0|1 )

**説明:** 正準プロットと三次元正準プロットにおいて、点の表示/非表示を切り替える。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Show Points( 1 );

```

### Show Probabilities to Each Group

**構文:** obj &lt;&lt; Show Probabilities to Each Group( state=0|1 )

**説明:** カテゴリカルなX変数によって定義されるグループについて、それら各グループに各データ行が属する確率を計算したレポートの表示/非表示を切り替える。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Show Probabilities to each group( 1 );

```

### Show Within Covariances

**構文:** obj &lt;&lt; Show Within Covariances( state=0|1 )

**説明:** 共分散行列に関連するレポートの表示/非表示を切り替える。レポートに出力される内容は、判別法によって異なる。「横長データ」の手法では使用できない。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Show Within Covariances( 1 );

```

### Shrink Covariances

**構文:** obj = Discriminant(...Shrink Covariances( state=0|1 )...)

**説明:** プールした群内共分散行列と群内共分散行列の非対角要素を縮小する。非対角要素を縮小することにより、予測の安定性を高め、予測のばらつきを減らすことができる。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Shrink Covariances( 1 ));

```

### Specify Priors

**構文:** obj &lt;&lt; Specify Priors( Equal Probabilities | Proportional to Occurrence | [matrix of priors] )

**説明:** X変数の各水準に対し事前確率を設定する。

```jsl

dt = Open( "$SAMPLE_DATA/Cherts.jmp" );obj = dt << Discriminant(	X( :location name ),	Y( :Al, :Mn, :Na, :Br, :Ce, :Co, :Cr, :Cs, :Eu, :Fe, :Hf, :La, :Sc, :Sm, :U ));obj << Specify Priors( Proportional to Occurrence );

```

### Step Backward

**構文:** obj &lt;&lt; Step Backward

**説明:** ステップワイズ変数選択で変数減少のステップを1回実行し、モデルから変数を1つ削除する。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Stepwise Variable Selection( 1 );obj << Enter All;Wait( 2 );obj << Step Backward;

```

### Step Forward

**構文:** obj &lt;&lt; Step Forward

**説明:** ステップワイズ変数選択で変数増加のステップを1回実行し、モデルに変数を1つ追加する。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Stepwise Variable Selection( 1 );obj << Step Forward;

```

### Stepwise Variable Selection

**構文:** obj = Discriminant(...Stepwise Variable Selection( state=0|1 )...)

**説明:** 「列選択」設定パネルの表示/非表示を切り替える。この設定パネルには、共分散分析のp値に基づきステップワイズ変数選択を行うオプションが表示される。このオプションは、「横長データ」の手法では使用できない。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Stepwise Variable Selection( 1 );

```

### Uncentered Canonical

**構文:** obj = Discriminant(...Uncentered Canonical( state=0|1 )...)

**説明:** 正準スコアの中心化を行わない。旧バージョンとの互換性のため。JMPの旧バージョンでは中心化を行っていない。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Uncentered Canonical( 1 ));

```

### Use Matrix Columns

**構文:** obj &lt;&lt; Use Matrix Columns( state=0|1 )

**説明:** 行列形式で計算するように指定する。データ列で行列形式を用いると、スコアの予測式において予測値を計算するときの負荷が軽減される。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Use Matrix Columns( 1 ));

```

### Use Pseudoinverses

**構文:** obj = Discriminant(...Use Pseudoinverses( state=0|1 )...)

**説明:** 特異な共分散行列の逆行列を求める時に、Moore-Penrose型疑似逆行列を使用する。スコアの計算にはすべての共変量が含まれる。このオプションが選択されていない場合、「Y, 共変量」のリストにおいて1次従属関係にある共変量は、計算から除かれる。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Use Pseudoinverses( 0 ));

```

