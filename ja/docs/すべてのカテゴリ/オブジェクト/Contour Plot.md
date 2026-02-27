# Contour Plot



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

dt = Open( "$SAMPLE_DATA/Little Pond.jmp" );obj = dt << Contour Plot( X( :X, :Y ), Y( :Z ) );obj << Automatic Recalc( 1 );dt << Select Rows( 5 ) << Exclude( 1 );

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

dt = Open( "$SAMPLE_DATA/Little Pond.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Contour Plot(	X( :X, :Y ),	Y( :Z ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Copy ByGroup Script;

```

### Copy Script

**構文:** obj &lt;&lt; Copy Script

**説明:** この分析を再現するJSLスクリプトを生成し、クリップボードにコピーする。

```jsl

dt = Open( "$SAMPLE_DATA/Little Pond.jmp" );obj = dt << Contour Plot( X( :X, :Y ), Y( :Z ) );obj << Copy Script;

```

### Data Table Window

**構文:** obj &lt;&lt; Data Table Window

**説明:** この分析に使用したデータテーブルのウィンドウを手前に表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Little Pond.jmp" );obj = dt << Contour Plot( X( :X, :Y ), Y( :Z ) );obj << Data Table Window;

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

dt = Open( "$SAMPLE_DATA/Little Pond.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Contour Plot(	X( :X, :Y ),	Y( :Z ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));t = obj[1] << Get ByGroup Script;Show( t );

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

dt = Open( "$SAMPLE_DATA/Little Pond.jmp" );obj = dt << Contour Plot( X( :X, :Y ), Y( :Z ) );t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

### Get Data Table

**構文:** obj &lt;&lt; Get Data Table

**説明:** データテーブルへの参照を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Little Pond.jmp" );obj = dt << Contour Plot( X( :X, :Y ), Y( :Z ) );t = obj << Get Datatable;Show( N Rows( t ) );

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

dt = Open( "$SAMPLE_DATA/Little Pond.jmp" );obj = dt << Contour Plot( X( :X, :Y ), Y( :Z ) );t = obj << Get Script;Show( t );

```

### Get Script With Data Table

**構文:** obj &lt;&lt; Get Script With Data Table

**説明:** この分析を再現するスクリプト(JSL)をデータテーブルへの参照も含めて生成し、それを式として戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Little Pond.jmp" );obj = dt << Contour Plot( X( :X, :Y ), Y( :Z ) );t = obj << Get Script With Data Table;Show( t );

```

### Get Timing

**構文:** obj &lt;&lt; Get Timing

**説明:** プラットフォームの起動にかかった時間を取得する。

```jsl

dt = Open( "$SAMPLE_DATA/Little Pond.jmp" );obj = dt << Contour Plot( X( :X, :Y ), Y( :Z ) );t = obj << Get Timing;Show( t );

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

dt = Open( "$SAMPLE_DATA/Little Pond.jmp" );obj = dt << Contour Plot( X( :X, :Y ), Y( :Z ) );obj << Redo Analysis;

```

### Relaunch Analysis

**構文:** obj &lt;&lt; Relaunch Analysis

**説明:** プラットフォームの起動ウィンドウを開き、レポートを作成した時の設定を表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Little Pond.jmp" );obj = dt << Contour Plot( X( :X, :Y ), Y( :Z ) );obj << Relaunch Analysis;

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

dt = Open( "$SAMPLE_DATA/Little Pond.jmp" );obj = dt << Contour Plot( X( :X, :Y ), Y( :Z ) );r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Report View

**構文:** obj &lt;&lt; Report View( "完全"|"要約" )

**説明:** レポートビューは、プラットフォームレポートの詳細を表示するかどうかを決定する。Fullはすべての詳細を表示し、Summaryはプラットフォームにより限定されたものだけを表示する。 動作をカスタマイズするため、各ディスプレイボックスは<<Set Summary Behaviorメッセージをサポートする。

```jsl

dt = Open( "$SAMPLE_DATA/Little Pond.jmp" );obj = dt << Contour Plot( X( :X, :Y ), Y( :Z ) );obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**構文:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**説明:** 分析を再現するためのJSLスクリプトを作成し、データテーブルにテーブルプロパティとして保存する。スクリプトの名前を指定できる。Append Suffixオプションは、スクリプト名に数字の接尾辞を追加する。これにより、同名のスクリプトが存在していても区別できる。Promptオプションは、ユーザにスクリプト名の指定を促す。Replaceオプションは、同名の既存のスクリプトを置き換える。

```jsl

dt = Open( "$SAMPLE_DATA/Little Pond.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Contour Plot(	X( :X, :Y ),	Y( :Z ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**構文:** obj &lt;&lt; Save ByGroup Script to Journal

**説明:** この分析を再現するJSLスクリプトを生成し、ジャーナルにそのスクリプトのボタンを追加する。

```jsl

dt = Open( "$SAMPLE_DATA/Little Pond.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Contour Plot(	X( :X, :Y ),	Y( :Z ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**構文:** obj &lt;&lt; Save ByGroup Script to Script Window

**説明:** この分析を再現するJSLスクリプトを生成し、現在のスクリプトウィンドウに表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Little Pond.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Contour Plot(	X( :X, :Y ),	Y( :Z ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**構文:** obj &lt;&lt; Save Script for All Objects

**説明:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Little Pond.jmp" );obj = dt << Contour Plot( X( :X, :Y ), Y( :Z ) );obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**構文:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**説明:** すべてのレポートオブジェクトを再現するスクリプトを現在のデータテーブルに保存する。このオプションは、ウィンドウ内にレポートが複数ある場合に便利。作成されるスクリプトの名前は、引用符で囲んで指定しない限り、1つ目のプラットフォーム名となる。

**例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Little Pond.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Contour Plot(	X( :X, :Y ),	Y( :Z ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table;

```

**例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Little Pond.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Contour Plot(	X( :X, :Y ),	Y( :Z ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**構文:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**説明:** この分析を再現するJSLスクリプトを生成し、データテーブルのテーブルプロパティとして保存する。

```jsl

dt = Open( "$SAMPLE_DATA/Little Pond.jmp" );obj = dt << Contour Plot( X( :X, :Y ), Y( :Z ) );obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**構文:** obj &lt;&lt; Save Script to Journal

**説明:** この分析を再現するJSLスクリプトを生成し、ジャーナルにそのスクリプトのボタンを追加する。

```jsl

dt = Open( "$SAMPLE_DATA/Little Pond.jmp" );obj = dt << Contour Plot( X( :X, :Y ), Y( :Z ) );obj << Save Script to Journal;

```

### Save Script to Report

**構文:** obj &lt;&lt; Save Script to Report

**説明:** この分析を再現するJSLスクリプトを生成し、レポートウィンドウに表示する。分析手順の記録を結果と一緒に残せる。

```jsl

dt = Open( "$SAMPLE_DATA/Little Pond.jmp" );obj = dt << Contour Plot( X( :X, :Y ), Y( :Z ) );obj << Save Script to Report;

```

### Save Script to Script Window

**構文:** obj &lt;&lt; Save Script to Script Window

**説明:** この分析を再現するJSLスクリプトを生成し、現在のスクリプトウィンドウに表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Little Pond.jmp" );obj = dt << Contour Plot( X( :X, :Y ), Y( :Z ) );obj << Save Script to Script Window;

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

dt = Open( "$SAMPLE_DATA/Little Pond.jmp" );obj = dt << Contour Plot( X( :X, :Y ), Y( :Z ) );obj << Title( "My Platform" );

```

### Top Report

**構文:** obj &lt;&lt; Top Report

**説明:** レポート内のルートノードへの参照を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Little Pond.jmp" );obj = dt << Contour Plot( X( :X, :Y ), Y( :Z ) );r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

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

**構文:** obj = Contour Plot(...Window View( "Visible"|"Invisible"|"Private" )...)

**説明:** レポートとして作成するウィンドウの種類を設定する。デフォルトでは、Visibleレポートウィンドウが作成される。Invisible のウィンドウは画面に表示されないが、Window()などの関数によって検出できる。Private のウィンドウにはほとんどのウィンドウメッセージを送れるが、検出することはできないため、レポートオブジェクトを通してアクセスする必要がある。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

## 列

### By

**構文:** obj = Contour Plot(...&lt;By( column(s) )&gt;...)

**説明:** 変数の水準ごとに1つずつ、複数のレポートを作成する。

```jsl

dt = Open( "$SAMPLE_DATA/Little Pond.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Contour Plot(	X( :X, :Y ),	Y( :Z ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));

```

### X

**構文:** obj = Contour Plot(...X( column, column )...)

**説明:** 領域を定義する2つの独立変数。

```jsl

dt = Open( "$SAMPLE_DATA/Little Pond.jmp" );obj = dt << Contour Plot( X( :X, :Y ), Y( :Z ) );

```

### Y

**構文:** obj = Contour Plot(...Y( column(s) )...)

**説明:** 領域内の曲線を計算するために使用される応答変数。

```jsl

dt = Open( "$SAMPLE_DATA/Little Pond.jmp" );obj = dt << Contour Plot( X( :X, :Y ), Y( :Z ) );

```

## 関連するコンストラクター

### Contour Plot

**構文:** Contour Plot( X( column, column ), Y( column ) )

**説明:** 3つの変数を2次元で表示するグラフ。3つ目の変数は、等しい値を結んだ等高線として表す。

```jsl

dt = Open( "$SAMPLE_DATA/Little Pond.jmp" );obj = dt << Contour Plot( X( :X, :Y ), Y( :Z ) );

```

## 項目のメッセージ

### Fill Areas

**構文:** obj &lt;&lt; Fill Areas( state=0|1 )

**説明:** 等高線図上で等高線間の領域を塗りつぶす。

```jsl

dt = Open( "$SAMPLE_DATA/Little Pond.jmp" );obj = dt << Contour Plot( X( :X, :Y ), Y( :Z ) );obj << Fill Areas( 1 );

```

### Fit to Window

**構文:** obj &lt;&lt; Fit to Window( "自動"|"オン"|"オフ" )

**説明:** レポートの自動伸縮の動作を設定する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Little Pond.jmp" );obj = dt << Contour Plot( X( :X, :Y ), Y( :Z ) );obj << Fit to Window( "Off" );

```

### Generate Grid

**構文:** dt = obj &lt;&lt; Generate Grid( Xsize, Ysize )

**説明:** 等高線図に現在描かれている等高線の情報を、格子上の座標として新しいデータテーブルに保存する。

```jsl

dt = Open( "$SAMPLE_DATA/Little Pond.jmp" );obj = dt << Contour Plot( X( :X, :Y ), Y( :Z ) );obj << Generate Grid( 11, 11 );

```

### Label Contours

**構文:** obj &lt;&lt; Label Contours( state=0|1 )

**説明:** 各等高線に対するラベルの表示/非表示を切り替える。

```jsl

dt = Open( "$SAMPLE_DATA/Little Pond.jmp" );obj = dt << Contour Plot( X( :X, :Y ), Y( :Z ) );obj << Label Contours( 1 );

```

### Retrieve Contours

**構文:** obj &lt;&lt; Retrieve Contours( table )

**説明:** 等高線図の等高線についての設定を、保存されているデータテーブルから取得する。

```jsl

dt = Open( "$SAMPLE_DATA/Little Pond.jmp" );obj = dt << Contour Plot( X( :X, :Y ), Y( :Z ) );obj << Specify Contours(	Min( -4 ),	Max( 6 ),	N( 3 ),	Contour( 1, -4, -2768895 ),	Contour( 2, 1, -9344469 ),	Contour( 3, 6, -13927556 ));obj << Save Contours;obj << Revert Contours;obj << Retrieve Contours( Data Table( "Contours from Little Pond" ) );

```

### Revert Contours

**構文:** obj &lt;&lt; Revert Contours

**説明:** 等高線図上の等高線に加えられた変更をすべて元に戻す。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Little Pond.jmp" );obj = dt << Contour Plot( X( :X, :Y ), Y( :Z ) );obj << Specify Contours(	Min( -4 ),	Max( 8 ),	N( 4 ),	Contour( 1, -4, -2768895 ),	Contour( 2, 0, -7700704 ),	Contour( 3, 4, -12632256 ),	Contour( 4, 8, -14575206 ),	Contour( 5, 8, -16517899 ));Wait( 2 );obj << Revert Contours;

```

### Save Contours

**構文:** dt = obj &lt;&lt; Save Contours

**説明:** 等高線図に現在描かれている等高線の情報を新しいデータテーブルに保存する。

```jsl

dt = Open( "$SAMPLE_DATA/Little Pond.jmp" );obj = dt << Contour Plot( X( :X, :Y ), Y( :Z ) );obj << Save Contours;

```

### Save Triangulation

**構文:** dt = obj &lt;&lt; Save Triangulation

**説明:** 等高線を構成する各三角形の座標を新しいデータテーブルに保存する。

```jsl

dt = Open( "$SAMPLE_DATA/Little Pond.jmp" );obj = dt << Contour Plot( X( :X, :Y ), Y( :Z ) );obj << Save Triangulation;

```

### Set Alpha

**構文:** obj &lt;&lt; Set Alpha( number )

**説明:** 境界の形状を制御するα水準を設定する。α水準が0の場合は点集合の凸包となる。α水準が大きいと、辺の長い三角形が削除される。

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Contour Plot( X( :Longitude, :Latitude ), Y( :Pop ), Fill Areas( 1 ) );obj << Set Alpha( 0.06 );

```

### Show Boundary

**構文:** obj &lt;&lt; Show Boundary( state=0|1 )

**説明:** 等高線図上で境界線の表示/非表示を切り替える。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Little Pond.jmp" );obj = dt << Contour Plot( X( :X, :Y ), Y( :Z ) );obj << Show Boundary( 1 );

```

### Show Contours

**構文:** obj &lt;&lt; Show Contours( state=0|1 )

**説明:** 等高線図上でデータ点の表示/非表示を切り替える。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Little Pond.jmp" );obj = dt << Contour Plot( X( :X, :Y ), Y( :Z ) );obj << Show Contours( 1 );

```

### Show Control Panel

**構文:** obj &lt;&lt; Show Control Panel( state=0|1 )

**説明:** 領域の境界を指定するコントロールの表示/非表示を切り替える。

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Contour Plot( X( :Longitude, :Latitude ), Y( :Pop ), Fill Areas( 1 ) );obj << Set Alpha( 0.06 );obj << Show Control Panel( 1 );

```

### Show Data Points

**構文:** obj &lt;&lt; Show Data Points( state=0|1 )

**説明:** 等高線図上でデータ点の表示/非表示を切り替える。

```jsl

dt = Open( "$SAMPLE_DATA/Little Pond.jmp" );obj = dt << Contour Plot( X( :X, :Y ), Y( :Z ) );obj << Show Data Points( 1 );

```

### Show Missing Data Points

**構文:** obj &lt;&lt; Show Missing Data Points( state=0|1 )

**説明:** データ点を表示するときに、Y変数が欠測値のものも表示するかどうかを切り替える。

```jsl

dt = Open( "$SAMPLE_DATA/Little Pond.jmp" );dt << New Column( "SqrtZ", Numeric, Continuous, Formula( Sqrt( Z ) ) );r = dt << Select Where( :Z < 0 );r << Colors( "Red" );obj = dt << Contour Plot( X( :X, :Y ), Y( :SqrtZ ) );obj << Show Data Points( 1 );Wait( 2 );obj << Show Missing Data Points( 1 );

```

### Specify Contours

**構文:** obj &lt;&lt; Specify Contours( Min( value ), Max( value ), N( number ), Contour(1, value, color), Contour(2, value, color), ... Contour(n+1, value, color) )

**説明:** 等高線図の等高線の数と幅を変更する。

```jsl

dt = Open( "$SAMPLE_DATA/Little Pond.jmp" );obj = dt << Contour Plot( X( :X, :Y ), Y( :Z ) );obj << Specify Contours(	Min( -4 ),	Max( 8 ),	N( 4 ),	Contour( 1, -4, -2768895 ),	Contour( 2, 0, -7700704 ),	Contour( 3, 4, -12632256 ),	Contour( 4, 8, -14575206 ),	Contour( 5, 8, -16517899 ));

```

### Transform

**構文:** obj &lt;&lt; Transform( "なし"|"範囲による正規化" )

**説明:** 三角分割を計算する前に適用する、尺度化の方法を設定する。このオプションによって、三角形分割が適用される空間の縦横比が変化するため、生成される三角形の構成が影響を受ける。なお、出力される座標は、変換される前の元の座標であり、影響を受けない。

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Contour Plot( X( :Longitude, :Latitude ), Y( :Pop ), Fill Areas( 1 ) );Wait( 2 );obj << Transform( "Range Normalized" );

```

