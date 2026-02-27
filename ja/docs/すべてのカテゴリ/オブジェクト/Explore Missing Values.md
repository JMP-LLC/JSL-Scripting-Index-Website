# Explore Missing Values



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

dt = Open( "$Sample_Data/Cities.jmp" );obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );obj << Automatic Recalc( 1 );dt << Select Rows( 5 ) << Exclude( 1 );

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

dt = Open( "$Sample_Data/Cities.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Explore Missing Values(	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Copy ByGroup Script;

```

### Copy Script

**構文:** obj &lt;&lt; Copy Script

**説明:** この分析を再現するJSLスクリプトを生成し、クリップボードにコピーする。

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );obj << Copy Script;

```

### Data Table Window

**構文:** obj &lt;&lt; Data Table Window

**説明:** この分析に使用したデータテーブルのウィンドウを手前に表示する。

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );obj << Data Table Window;

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

dt = Open( "$Sample_Data/Cities.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Explore Missing Values(	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));t = obj[1] << Get ByGroup Script;Show( t );

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

dt = Open( "$Sample_Data/Cities.jmp" );obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

### Get Data Table

**構文:** obj &lt;&lt; Get Data Table

**説明:** データテーブルへの参照を戻す。

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );t = obj << Get Datatable;Show( N Rows( t ) );

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

dt = Open( "$Sample_Data/Cities.jmp" );obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );t = obj << Get Script;Show( t );

```

### Get Script With Data Table

**構文:** obj &lt;&lt; Get Script With Data Table

**説明:** この分析を再現するスクリプト(JSL)をデータテーブルへの参照も含めて生成し、それを式として戻す。

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );t = obj << Get Script With Data Table;Show( t );

```

### Get Timing

**構文:** obj &lt;&lt; Get Timing

**説明:** プラットフォームの起動にかかった時間を取得する。

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );t = obj << Get Timing;Show( t );

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

dt = Open( "$Sample_Data/Cities.jmp" );obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );obj << Redo Analysis;

```

### Relaunch Analysis

**構文:** obj &lt;&lt; Relaunch Analysis

**説明:** プラットフォームの起動ウィンドウを開き、レポートを作成した時の設定を表示する。

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );obj << Relaunch Analysis;

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

dt = Open( "$Sample_Data/Cities.jmp" );obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Report View

**構文:** obj &lt;&lt; Report View( "完全"|"要約" )

**説明:** レポートビューは、プラットフォームレポートの詳細を表示するかどうかを決定する。Fullはすべての詳細を表示し、Summaryはプラットフォームにより限定されたものだけを表示する。 動作をカスタマイズするため、各ディスプレイボックスは<<Set Summary Behaviorメッセージをサポートする。

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**構文:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**説明:** 分析を再現するためのJSLスクリプトを作成し、データテーブルにテーブルプロパティとして保存する。スクリプトの名前を指定できる。Append Suffixオプションは、スクリプト名に数字の接尾辞を追加する。これにより、同名のスクリプトが存在していても区別できる。Promptオプションは、ユーザにスクリプト名の指定を促す。Replaceオプションは、同名の既存のスクリプトを置き換える。

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Explore Missing Values(	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**構文:** obj &lt;&lt; Save ByGroup Script to Journal

**説明:** この分析を再現するJSLスクリプトを生成し、ジャーナルにそのスクリプトのボタンを追加する。

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Explore Missing Values(	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**構文:** obj &lt;&lt; Save ByGroup Script to Script Window

**説明:** この分析を再現するJSLスクリプトを生成し、現在のスクリプトウィンドウに表示する。

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Explore Missing Values(	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**構文:** obj &lt;&lt; Save Script for All Objects

**説明:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**構文:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**説明:** すべてのレポートオブジェクトを再現するスクリプトを現在のデータテーブルに保存する。このオプションは、ウィンドウ内にレポートが複数ある場合に便利。作成されるスクリプトの名前は、引用符で囲んで指定しない限り、1つ目のプラットフォーム名となる。

**例 1**

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Explore Missing Values(	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table;

```

**例 2**

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Explore Missing Values(	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**構文:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**説明:** この分析を再現するJSLスクリプトを生成し、データテーブルのテーブルプロパティとして保存する。

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**構文:** obj &lt;&lt; Save Script to Journal

**説明:** この分析を再現するJSLスクリプトを生成し、ジャーナルにそのスクリプトのボタンを追加する。

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );obj << Save Script to Journal;

```

### Save Script to Report

**構文:** obj &lt;&lt; Save Script to Report

**説明:** この分析を再現するJSLスクリプトを生成し、レポートウィンドウに表示する。分析手順の記録を結果と一緒に残せる。

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );obj << Save Script to Report;

```

### Save Script to Script Window

**構文:** obj &lt;&lt; Save Script to Script Window

**説明:** この分析を再現するJSLスクリプトを生成し、現在のスクリプトウィンドウに表示する。

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );obj << Save Script to Script Window;

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

dt = Open( "$Sample_Data/Cities.jmp" );obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );obj << Title( "My Platform" );

```

### Top Report

**構文:** obj &lt;&lt; Top Report

**説明:** レポート内のルートノードへの参照を戻す。

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

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

**構文:** obj = Explore Missing Values(...Window View( "Visible"|"Invisible"|"Private" )...)

**説明:** レポートとして作成するウィンドウの種類を設定する。デフォルトでは、Visibleレポートウィンドウが作成される。Invisible のウィンドウは画面に表示されないが、Window()などの関数によって検出できる。Private のウィンドウにはほとんどのウィンドウメッセージを送れるが、検出することはできないため、レポートオブジェクトを通してアクセスする必要がある。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

## 列

### By

**構文:** obj &lt;&lt; By( column(s) )

**説明:** 指定された列の各水準に対して、個別に分析を実行する。

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Explore Missing Values(	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));

```

### Columns

**構文:** obj &lt;&lt; Columns( column(s) )

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );

```

### Validation

**構文:** obj &lt;&lt; Validation( column )

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );

```

### Y

**構文:** obj &lt;&lt; Y( column(s) )

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );

```

## 関連するコンストラクター

### Explore Missing Values

**構文:** Explore Missing Values( Y( columns ) )

**説明:** 欠測値のパターンを割り出し、補完を実行する。

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );

```

## 項目のメッセージ

### ADI Loading Matrix

**構文:** obj &lt;&lt; ADI Loading Matrix( state=0|1 )

**説明:** 負荷量の表示/非表示を切り替える。レポートでは、表の各列が、1つの因子に対する負荷量となっている。

**JMP追加されたバージョン:** 14

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );obj = dt << Explore Missing Values(	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),	Set Random Seed( 123 ),	Automated Data Imputation);obj << ADI Loading Matrix( 1 );

```

### Automated Data Imputation

**構文:** obj &lt;&lt; Automated Data Imputation

**説明:** 低ランク行列近似により欠測値を補完する。この方法では、低ランク近似の最適な次元をデータから自動的に選択する。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );obj << Automated Data Imputation;

```

### Close

**構文:** obj &lt;&lt; Close

**説明:** 「欠測値に関する情報」レポートを閉じる。

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );obj = dt << Explore Missing Values(	Y( :POP, :OZONE, :CO, :SO2, :NO, :PM10 ),	Missing Value Report);Wait( 2 );obj << Close;

```

### Color Cells

**構文:** obj &lt;&lt; Color Cells( ALL or column1, column2, ... )

**説明:** 「欠測値に関する情報」レポートで選択した列について、それらの列で欠測値を含むセルをデータテーブルで色付けする。

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );obj << Color cells( :OZONE );

```

### Color Rows

**構文:** obj &lt;&lt; Color Rows( ALL or column1, column2, ... )

**説明:** 「欠測値に関する情報」レポートで選択した列について、それらの列で欠測値を含む行をデータテーブルで色付けする。

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );obj << Color rows( :OZONE );

```

### Exclude Rows

**構文:** obj &lt;&lt; Exclude Rows( ALL or column1, column2, ... )

**説明:** 「欠測値に関する情報」レポートで選択した列について、それらの列で欠測値を含む行に対して除外列の状態をデータテーブルで適用する。

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );obj << Exclude rows( :OZONE );

```

### Get U V Sigma ADI Matrices

**構文:** obj &lt;&lt; Get U V Sigma ADI Matrices

**説明:** 自動データ補完法で得られた低ランク近似のU, V, Σ行列を戻す。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );obj = dt << Explore Missing Values(	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),	Set Random Seed( 123 ),	Automated Data Imputation);obj << Get U V Sigma ADI Matrices;

```

### Maximum Dimension

**構文:** obj &lt;&lt; Maximum Dimension( number )

**説明:** 自動データ補完で、次元の上限を設定する。

**JMP追加されたバージョン:** 14

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );obj = dt << Explore Missing Values(	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),	Maximum Dimension( 3 ),	Automated Data Imputation);

```

### Maximum Iteration

**構文:** obj &lt;&lt; Maximum Iteration( number=10 )

**説明:** 自動データ補完で、反復回数の上限値を設定する。 デフォルトの値は"10"。

**JMP追加されたバージョン:** 14

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );obj = dt << Explore Missing Values(	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),	Maximum Iteration( 8 ),	Automated Data Imputation);

```

### Missing Value Clustering

**構文:** obj &lt;&lt; Missing Value Clustering

**説明:** 欠測値のパターンに対して階層型クラスター分析を行う。

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );obj << Missing Value Clustering;

```

### Missing Value Report

**構文:** obj &lt;&lt; Missing Value Report

**説明:** 「欠測値に関する情報」レポートを表示する。このレポートには、各列について、列名と欠測値数がリストされる。

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );obj << Missing Value Report;

```

### Missing Value Snapshot

**構文:** obj &lt;&lt; Missing Value Snapshot

**説明:** 欠測値のセルプロットを表示する。セルプロットで黒いセルは欠測値を示す。

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );obj << Missing Value Snapshot;

```

### Multivariate Normal Imputation

**構文:** obj &lt;&lt; Multivariate Normal Imputation( Shrink Covariances( state=0|1 ) )

**説明:** 多重正規分布に基づいて欠測値を補完する。共分散行列の推定を改善するために、縮小させた推定値を用いる。

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );obj << Multivariate Normal Imputation( Shrink Covariances( 1 ) );

```

### Multivariate RPCA Imputation

**構文:** obj &lt;&lt; Multivariate RPCA Imputation( Lambda( number ), Tolerance( number = 1e-7 ), MaxIt( number ) )

**説明:** ロバストな主成分分析に基づき欠測値を補完する。この方法は、低ランク行列近似（特異値分解）であるが、外れ値に対してロバストになるように工夫されている。この方法は、さまざまな横長のデータ（ワイドデータ）に対して有用。Lambdaのデフォルト値は2/sqrt(max(n, p))。ここで、nは行数、pは列数。min(n, p)が100より小さい場合、最大反復回数(MaxIt)は75。min(n, p)が100以上1000未満の場合、MaxItのデフォルト値は100。min(n,p)が1000以上の場合、MaxItのデフォルト値は200。指定された最大反復回数の後にアルゴリズムが収束しない場合、MaxIt が済んだ段階での解がレポートに表示される。

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );obj << Multivariate RPCA Imputation;

```

### Multivariate SVD Imputation

**構文:** obj &lt;&lt; Multivariate SVD Imputation( Number of Singular Vectors( number ), Maximum Iterations( number ), Show Iteration Log( state=0|1 ) )

**説明:** 低ランク近似の特異値分解によって、欠測値を補完する。大規模なデータに対しても、処理に計算時間があまりかからない。

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );obj << Multivariate SVD Imputation(	Number of Singular Vectors( 3 ),	Maximum Iterations( 10 ),	Show Iteration Log( 1 ),);

```

### Options for Saving Imputed Values

**構文:** obj &lt;&lt; Options for Saving Imputed Values(1|2|3)

**説明:** 自動データ補完法(ADI法)において、補完値をデータテーブルに保存する方法を指定する。［新しいデータテーブルを作成する］オプションを用いたい場合には1を、［現データテーブルに計算式を保存する］オプションを用いたい場合には2を、3は［現データテーブルの欠測を置き換える］オプションを用いたい場合には3を指定する。

**JMP追加されたバージョン:** 14

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );obj = dt << Explore Missing Values(	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),	Options for Saving Imputed Values( 1 ),	Set Random Seed( 123 ),	Automated Data Imputation);

```

### Select Rows

**構文:** obj &lt;&lt; Select Rows( ALL or column1, column2, ... )

**説明:** 「欠測値に関する情報」レポートで選択した列について、それらの列で欠測値を含む行をデータテーブルで選択する。

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );obj << Select rows( :OZONE );

```

### Set Random Seed

**構文:** obj &lt;&lt; Set Random Seed( number=0 )

**説明:** 自動データ補完で、乱数シード値を設定する。 デフォルトの値は"0"。

**JMP追加されたバージョン:** 14

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );obj = dt << Explore Missing Values(	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),	Set Random Seed( 1234 ),	Automated Data Imputation);

```

### Show only columns with missing

**構文:** obj &lt;&lt; Show only columns with missing( state=0|1 )

**説明:** 欠測値がない列をリストから削除する。

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );obj = dt << Explore Missing Values( Y( :POP, :OZONE, :CO, :SO2, :NO, :PM10 ) );obj << Show Only Columns With Missing( 1 );

```

### Undo Imputation

**構文:** obj &lt;&lt; Undo Imputation

**説明:** 補完した結果を、元の欠測値に戻す。最近の補完処理が、元に戻される

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );obj = dt << Explore Missing Values(	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),	Multivariate Normal Imputation);Wait( 2 );obj << Undo Imputation;

```

### Validation Proportion

**構文:** obj &lt;&lt; Validation Proportion( number=0.3 )

**説明:** 自動データ補完で、検証セットとして用いる行の割合を設定する。 デフォルトの値は"0.3"。

**JMP追加されたバージョン:** 14

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );obj = dt << Explore Missing Values(	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),	Validation Proportion( 0.25 ),	Automated Data Imputation);

```

