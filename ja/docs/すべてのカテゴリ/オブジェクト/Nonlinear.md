# Nonlinear



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

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Nonlinear(	Y( :pop ),	X( :"X-formula"n ),	Finish(),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Copy ByGroup Script;

```

### Copy Script

**構文:** obj &lt;&lt; Copy Script

**説明:** この分析を再現するJSLスクリプトを生成し、クリップボードにコピーする。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );obj << Copy Script;

```

### Data Table Window

**構文:** obj &lt;&lt; Data Table Window

**説明:** この分析に使用したデータテーブルのウィンドウを手前に表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );obj << Data Table Window;

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

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Nonlinear(	Y( :pop ),	X( :"X-formula"n ),	Finish(),	By( :_bycol ),	Group Options( Return Group( 1 ) ));t = obj[1] << Get ByGroup Script;Show( t );

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

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

### Get Data Table

**構文:** obj &lt;&lt; Get Data Table

**説明:** データテーブルへの参照を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );t = obj << Get Datatable;Show( N Rows( t ) );

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

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );t = obj << Get Script;Show( t );

```

### Get Script With Data Table

**構文:** obj &lt;&lt; Get Script With Data Table

**説明:** この分析を再現するスクリプト(JSL)をデータテーブルへの参照も含めて生成し、それを式として戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );t = obj << Get Script With Data Table;Show( t );

```

### Get Timing

**構文:** obj &lt;&lt; Get Timing

**説明:** プラットフォームの起動にかかった時間を取得する。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );t = obj << Get Timing;Show( t );

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

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );obj << Redo Analysis;

```

### Relaunch Analysis

**構文:** obj &lt;&lt; Relaunch Analysis

**説明:** プラットフォームの起動ウィンドウを開き、レポートを作成した時の設定を表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );obj << Relaunch Analysis;

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

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Report View

**構文:** obj &lt;&lt; Report View( "完全"|"要約" )

**説明:** レポートビューは、プラットフォームレポートの詳細を表示するかどうかを決定する。Fullはすべての詳細を表示し、Summaryはプラットフォームにより限定されたものだけを表示する。 動作をカスタマイズするため、各ディスプレイボックスは<<Set Summary Behaviorメッセージをサポートする。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**構文:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**説明:** 分析を再現するためのJSLスクリプトを作成し、データテーブルにテーブルプロパティとして保存する。スクリプトの名前を指定できる。Append Suffixオプションは、スクリプト名に数字の接尾辞を追加する。これにより、同名のスクリプトが存在していても区別できる。Promptオプションは、ユーザにスクリプト名の指定を促す。Replaceオプションは、同名の既存のスクリプトを置き換える。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Nonlinear(	Y( :pop ),	X( :"X-formula"n ),	Finish(),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**構文:** obj &lt;&lt; Save ByGroup Script to Journal

**説明:** この分析を再現するJSLスクリプトを生成し、ジャーナルにそのスクリプトのボタンを追加する。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Nonlinear(	Y( :pop ),	X( :"X-formula"n ),	Finish(),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**構文:** obj &lt;&lt; Save ByGroup Script to Script Window

**説明:** この分析を再現するJSLスクリプトを生成し、現在のスクリプトウィンドウに表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Nonlinear(	Y( :pop ),	X( :"X-formula"n ),	Finish(),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**構文:** obj &lt;&lt; Save Script for All Objects

**説明:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**構文:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**説明:** すべてのレポートオブジェクトを再現するスクリプトを現在のデータテーブルに保存する。このオプションは、ウィンドウ内にレポートが複数ある場合に便利。作成されるスクリプトの名前は、引用符で囲んで指定しない限り、1つ目のプラットフォーム名となる。

**例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Nonlinear(	Y( :pop ),	X( :"X-formula"n ),	Finish(),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table;

```

**例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Nonlinear(	Y( :pop ),	X( :"X-formula"n ),	Finish(),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**構文:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**説明:** この分析を再現するJSLスクリプトを生成し、データテーブルのテーブルプロパティとして保存する。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**構文:** obj &lt;&lt; Save Script to Journal

**説明:** この分析を再現するJSLスクリプトを生成し、ジャーナルにそのスクリプトのボタンを追加する。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );obj << Save Script to Journal;

```

### Save Script to Report

**構文:** obj &lt;&lt; Save Script to Report

**説明:** この分析を再現するJSLスクリプトを生成し、レポートウィンドウに表示する。分析手順の記録を結果と一緒に残せる。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );obj << Save Script to Report;

```

### Save Script to Script Window

**構文:** obj &lt;&lt; Save Script to Script Window

**説明:** この分析を再現するJSLスクリプトを生成し、現在のスクリプトウィンドウに表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );obj << Save Script to Script Window;

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

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );obj << Title( "My Platform" );

```

### Top Report

**構文:** obj &lt;&lt; Top Report

**説明:** レポート内のルートノードへの参照を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

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

**構文:** obj = Nonlinear(...Window View( "Visible"|"Invisible"|"Private" )...)

**説明:** レポートとして作成するウィンドウの種類を設定する。デフォルトでは、Visibleレポートウィンドウが作成される。Invisible のウィンドウは画面に表示されないが、Window()などの関数によって検出できる。Private のウィンドウにはほとんどのウィンドウメッセージを送れるが、検出することはできないため、レポートオブジェクトを通してアクセスする必要がある。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

## 列

### By

**構文:** obj = Nonlinear(...&lt;By( column(s) )&gt;...)

**説明:** 指定された列の各水準に対して、個別に分析を実行する。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Nonlinear(	Y( :pop ),	X( :"X-formula"n ),	Finish(),	By( :_bycol ),	Group Options( Return Group( 1 ) ));

```

### Freq

**構文:** obj = Nonlinear(...&lt;Freq( column )&gt;...)

**説明:** 分析の際に各行の度数として用いる値の列を指定する。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );dt << New Column( "_freqcol", Numeric, Continuous, Set Each Value( Random Integer( 1, 5 ) ) );obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish(), Freq( :_freqcol ) );

```

### Group

**構文:** obj = Nonlinear(...&lt;Group( column )&gt;...)

**説明:** グループ変数を指定する。グループ変数の水準ごとに別のパラメータを持つモデルがあてはめられる。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );dt << Run Script( "Fit Curve" );					 obj = dt << Nonlinear(	Y( :Toxicity ),	X( :Toxicity Predictor Formula ),	Group( :Formulation ),	Newton,	Finish);

```

### Loss

**構文:** obj = Nonlinear(...&lt;Loss( column )&gt;...)

**説明:** 損失関数の計算式の列を指定する。

```jsl

dt = Open( "$SAMPLE_DATA/Ship Damage.jmp" );obj = dt << Nonlinear(	X( :model ),	Loss( :Poisson ),	Loss is Neg LogLikelihood( 1 ),	Newton,	Finish);

```

### Predictor Formula

**構文:** obj = Nonlinear(...&lt;Predictor Formula( column )&gt;...)

**説明:** X変数の列、または、パラメータを含むモデルの計算式の列を指定する。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );

```

### Response

**構文:** obj = Nonlinear(...&lt;Response( column )&gt;...)

**説明:** 応答変数を指定する。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );

```

### Weight

**構文:** obj = Nonlinear(...&lt;Weight( column )&gt;...)

**説明:** 分析の際に各行の重みとして用いる値の列を指定する。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );dt << New Column( "_weightcol", Numeric, Continuous, Set Each Value( Random Beta( 1, 1 ) ) );obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish(), Weight( :_weightcol ) );

```

### X

**構文:** obj = Nonlinear(...&lt;X( column )&gt;...)

**説明:** X変数の列、または、パラメータを含むモデルの計算式の列を指定する。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );

```

### Y

**構文:** obj = Nonlinear(...&lt;Y( column )&gt;...)

**説明:** 応答変数を指定する。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );

```

## 関連するコンストラクター

### Nonlinear

**構文:** Nonlinear( Y( column ), X( column with predictor formula ) )

**説明:** 最小2乗法またはカスタム損失関数を使って非線形モデルをあてはめる。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );

```

## 項目のメッセージ

### Accept Current Estimates

**構文:** obj &lt;&lt; Accept Current Estimates

**説明:** 推定のための反復計算が収束しなかった場合でも現在の推定値を使用して解のレポートを作成する。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Parameter Bounds( B0( 15, . ) ) );obj << Finish;obj << Accept Current Estimates;

```

### CL Alpha

**構文:** obj &lt;&lt; CL Alpha( number=.05 )

**説明:** パラメータ推定値に対する信頼区間の有意水準を指定する。 デフォルトの値は".05"。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );obj << CL Alpha( .01 );obj << Confidence Limits;

```

### CL Limit

**構文:** obj &lt;&lt; CL Limit( number=.00001 )

**説明:** パラメータ推定値に対して信頼区間を計算する際に使用する収束基準を指定する。 デフォルトの値は".00001"。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );obj << CL Limit( .002 );obj << Confidence Limits;

```

### Confidence Limits

**構文:** obj &lt;&lt; Confidence Limits

**説明:** すべてのパラメータ推定値に対して信頼区間を計算する。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );obj << Confidence Limits;

```

### Contour Profiler

**構文:** obj &lt;&lt; Contour Profiler( state=0|1 )

**説明:** 等高線プロファイルの表示/非表示を切り替える。等高線プロファイルは、応答変数の予測値を2因子ずつに対して描いたグラフである。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );obj = dt << Nonlinear( Y( :"log($ value)"n ), X( :Model ), Finish );Wait( 0 );obj << Contour Profiler( 1 );

```

### Custom Estimate

**構文:** obj &lt;&lt; Custom Estimate( expression )

**説明:** パラメータに対してユーザ定義の関数を指定し、その関数値を推定する。関数値とその標準誤差は、現在のパラメータ推定値を使って計算される。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );obj = dt << Nonlinear( Y( :"log($ value)"n ), X( :Model ), Finish );obj << Custom Estimate( B0 + A + D );

```

### Custom Estimation Profiler

**構文:** obj &lt;&lt; Custom Estimation Profiler( Custom Estimation( {initial values}, expression ), &lt;Transformation( "Log"|"Logit"|"None" ), Profiler( script )&gt; )

**説明:** 分析者によって指定された式のプロファイルを表示する。パラメータと少なくとも1つの因子を含む式を指定する。デフォルトでは、[変換]オプションが[なし]に設定されている。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Logistic w Loss.jmp" );obj = dt << Nonlinear(	Loss( :Loss ),	Expand Intermediate Formulas( 1 ),	Loss is Neg LogLikelihood( 1 ),	Newton,	Finish,	Plot( 0 ),	Custom Estimation Profiler(		Custom Estimation( {x = 30}, 1 / (1 + Exp( b0 + b1 * x )) ),		Transformation( "Logit" ),		Profiler(			1,			Confidence Intervals( 1 ),			Term Value(				x(					140,					Min( -37.4344314814814 ),					Max( 392.622262689059 ),					Lock( 0 ),					Show( 1 )				)			)		)	));

```

### Custom Inverse Prediction

**構文:** obj &lt;&lt; Custom Inverse Prediction( Response( l1, l2, ... ), &lt;Term Value( column( number ) )&gt; )

**説明:** 指定された各応答値に対してX値を推定する。Xの推定値に対する標準誤差と信頼限界も計算される。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );Wait( 0 );obj << Custom Inverse Prediction( Response( 100, 150, 200 ) );

```

### Delta

**構文:** obj &lt;&lt; Delta( number=5.0e-6 )

**説明:** [数値微分のみ]オプションで使用されるデルタの値を指定する。 デフォルトの値は"5.0e-6"。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ) );obj << Numeric Derivatives Only( 1 );obj << Delta( 0.2 );obj << Finish;

```

### Expand Intermediate Formulas

**構文:** obj &lt;&lt; Expand Intermediate Formulas( state=0|1 )

**説明:** 推定値を求めたり、計算式を保存したりする際に、展開した中間式を使用する。モデルの計算式において、別の計算式を含んだ列が参照されている場合に、その元の列を参照する。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Logit Model w Loss1.jmp" );obj = dt << Nonlinear(	Loss( :Loss ),	Show Prediction Expression( 1 ),	Expand Intermediate Formulas( 1 ),	Finish);

```

### Finish

**構文:** obj &lt;&lt; Finish

**説明:** 非線形回帰の反復計算を開始し、計算が収束または終了した時点で次のコマンドに移る。スクリプトでは、GoオプションではなくFinishオプションを使用することを推奨する。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );obj = dt << Nonlinear( Y( :"log($ value)"n ), X( :Model ) );obj << Finish;obj << Profiler;

```

### Get CI

**構文:** obj &lt;&lt; Get CI

**説明:** パラメータ推定値の標準誤差を戻す。注: [信頼区間]オプションは、[信頼区間の取得]オプションを指定する前に選択しなければならない。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );obj << Confidence Limits;G = obj << Get CI;Show( G );

```

### Get Corr

**構文:** obj &lt;&lt; Get Corr

**説明:** 推定値の相関を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );G = obj << Get Corr;Show( G );

```

### Get Cov

**構文:** obj &lt;&lt; Get Cov

**説明:** 推定値の共分散を戻す。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );G = obj << Get Cov;Show( G );

```

### Get Estimates

**構文:** obj &lt;&lt; Get Estimates

**説明:** パラメータ推定値を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );G = obj << Get Estimates;Show( G );

```

### Get Parameter Names

**構文:** obj &lt;&lt; Get Parameter Names

**説明:** パラメータ名を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );G = obj << Get Parameter Names;Show( G );

```

### Get SSE

**構文:** obj &lt;&lt; Get SSE

**説明:** 誤差平方和(SSE)を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );G = obj << Get SSE;Show( G );

```

### Get Std Errors

**構文:** obj &lt;&lt; Get Std Errors

**説明:** パラメータ推定値の標準誤差を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );G = obj << Get Std Errors;Show( G );

```

### Go

**構文:** obj &lt;&lt; Go

**説明:** 非線形回帰の解を求めるための処理をバックグランドで行う。スクリプトでは、GoオプションではなくFinishオプションを使用することを推奨する。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );obj = dt << Nonlinear( Y( :"log($ value)"n ), X( :Model ) );obj << Go;

```

### Gradient Limit

**構文:** obj &lt;&lt; Gradient Limit( number=1e-6 )

**説明:** 勾配基準に基づく収束基準を指定する。 デフォルトの値は"1e-6"。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );obj = dt << Nonlinear( Y( :"log($ value)"n ), X( :Model ) );obj << Gradient Limit( 0.0002 );obj << Finish;

```

### Iteration Limit

**構文:** obj &lt;&lt; Iteration Limit( number=60 )

**説明:** 反復の最大回数を指定する。 デフォルトの値は"60"。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );obj = dt << Nonlinear( Y( :"log($ value)"n ), X( :Model ) );obj << Iteration Limit( 10 );obj << Finish;

```

### Iteration Log

**構文:** obj &lt;&lt; Iteration Log( state=0|1 )

**説明:** 「反復履歴」の表を表示／非表示する。このオプションが選択されると、それ以降の反復について反復計算の情報が表に記録される。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ) );obj << Iteration Log( 1 );obj << Finish;obj << Plot( 0 );Report( obj )["Iterations"] << Close( 0 );

```

### Lock Parameter

**構文:** obj &lt;&lt; Lock Parameter( Name, ... )

**説明:** 特定のパラメータを指定された値にロックし、反復計算が行われている間も変化しないように固定する。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );obj = dt << Nonlinear( Y( :"log($ value)"n ), X( :Model ) );obj << Set Parameter( B0 = 0.2 );obj << Lock Parameter( B0 );obj << Finish;

```

### Loss is Neg LogLikelihood

**構文:** obj &lt;&lt; Loss is Neg LogLikelihood( state=0|1 )

**説明:** 指定された損失計算式が、誤差平方和ではなく、負の対数尤度であるみなす。そして、信頼区間や検定の計算に、F統計量ではなくカイ2乗統計量を使用する。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Logit Model w Loss1.jmp" );obj = dt << Nonlinear(	Loss( :Loss ),	Show Prediction Expression( 1 ),	Expand Intermediate Formulas( 1 ));obj << Loss is Neg LogLikelihood( 0 );obj << Finish;

```

### Newton

**構文:** obj &lt;&lt; Newton

**説明:** 最適化法としてGaus-Newton法 (通常の最小2乗法の場合)またはNewton-Raphson法 (損失関数を含むモデルの場合)を指定する。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ) );obj << Newton;obj << Finish;

```

### Numeric Chain Deriv Delta

**構文:** obj &lt;&lt; Numeric Chain Deriv Delta( =1e-5 )

**説明:** 数値微分におけるデルタを指定する。反復計算の内部計算において、解析的な微分が行えない場合には、数値微分が使われる。その数値微分のデルタを指定する。 デフォルトの値は"1e-5"。

**JMP追加されたバージョン:** 14

### Numeric Derivatives Only

**構文:** obj &lt;&lt; Numeric Derivatives Only( state=0|1 )

**説明:** 推定のための最適化における反復計算で、解析的な微分を行わず、数値微分のみが使用されるよう指定する。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ) );obj << Numeric Derivatives Only( 1 );obj << Finish;

```

### Obj Change Limit

**構文:** obj &lt;&lt; Obj Change Limit( number=1e-15 )

**説明:** 目的関数の変化量に基づく収束基準を指定する。 デフォルトの値は"1e-15"。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );obj = dt << Nonlinear( Y( :"log($ value)"n ), X( :Model ) );obj << Obj Change Limit( 1e-10 );obj << Finish;

```

### Parameter Bounds

**構文:** obj &lt;&lt; Parameter Bounds( &lt;parameter name( lower, upper )&gt; )

**説明:** 指定のパラメータに下限と上限を設定する。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ) );obj << Parameter Bounds( B0( 0, . ) );obj << Finish;

```

### Parameter Contour Profiler

**構文:** obj &lt;&lt; Parameter Contour Profiler( state=0|1 )

**説明:** パラメータに対するSSEまたは損失を描いた等高線プロファイルの表示/非表示を切り替える。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );obj = dt << Nonlinear( Y( :"log($ value)"n ), X( :Model ), Finish );Wait( 0 );obj << Parameter Contour Profiler( 1 );

```

### Parameter Profiler

**構文:** obj &lt;&lt; Parameter Profiler( state=0|1 )

**説明:** パラメータに対するSSEまたは損失を描いた予測プロファイルの表示/非表示を切り替える。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );obj = dt << Nonlinear( Y( :"log($ value)"n ), X( :Model ), Finish );Wait( 0 );obj << Parameter Profiler( 1 );

```

### Parameter Surface Profiler

**構文:** obj &lt;&lt; Parameter Surface Profiler( state=0|1 )

**説明:** パラメータに対するSSEまたは損失を描いた3次元曲面プロットの表示/非表示を切り替える。このオプションは、モデルに2つ以上のパラメータが含まれている場合のみ利用可能。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );obj = dt << Nonlinear( Y( :"log($ value)"n ), X( :Model ), Finish );Wait( 0 );obj << Parameter Surface Profiler( 1 );

```

### Plot

**構文:** obj &lt;&lt; Plot( state=0|1 )

**説明:** 予測式が1つのX変数の関数である場合、X変数に対する予測式をプロットしたグラフの表示/非表示を切り替える。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ) );Wait( 1 );obj << Plot( 0 );obj << Finish;

```

### Profile Likelihood

**構文:** obj &lt;&lt; Profile Likelihood( state=0|1 )

**説明:** 相対尤度関数を描いたプロットの表示/非表示を切り替える。相対尤度関数では、1つのパラメータの値全体における最大値が1になるように尺度化されている。該当のパラメータの各値において、他のすべてのパラメータは損失関数が最小になるように最適化されている。このオプションは、「非線形回帰」プラットフォームを起動し、2つ以上のパラメータを含む損失関数がある場合にのみ利用可能。

```jsl

dt = Open( "$Sample_Data/Reliability/Fan.jmp" );dt << New Column( "Unconstrained Weibull Loss",	formula(		Parameter(			{mu = 10, logSigma = 0},			If(				Censor == 0, -Log( Weibull Density( Time, 1 / Exp( logSigma ), Exp( mu ) ) ),				Censor == 1,					-Log( 1 - Weibull Distribution( Time, 1 / Exp( logSigma ), Exp( mu ) ) )			)		)	));obj = dt << Nonlinear(	Loss( :Unconstrained Weibull Loss ),	Numeric Derivatives Only( 1 ),	Loss is Neg LogLikelihood( 1 ),	Newton,	Finish);Wait( 0 );obj << Profile Likelihood( 1 );

```

### Profile Likelihood Contour

**構文:** obj &lt;&lt; Profile Likelihood Contour( state=0|1 )

**説明:** 2つのパラメータにおける相対プロファイル尤度関数の等高線プロットの表示/非表示を切り替える。該当の2つのパラメータの値の各組み合わせにおいて、他のすべてのパラメータは損失関数が最小なるように最適化されている。このオプションは、「非線形回帰」プラットフォームが起動され、損失関数に3つ以上のパラメータが含まれている場合にのみ利用可能。

```jsl

dt = Open( "$Sample_Data/Reliability/Fan.jmp" );dt << New Column( "Partial Unconstrained DS Weibull Loss",	formula(		Parameter(			{mu = 10, logSigma = 0, p = 0.5},			If(				p < 0 | p > 1, .,				Censor == 0,					-Log( p * Weibull Density( Time, 1 / Exp( logSigma ), Exp( mu ) ) ),				Censor == 1,					-Log(						1 - p * Weibull Distribution( Time, 1 / Exp( logSigma ), Exp( mu ) )					)			)		)	));obj = dt << Nonlinear(	Loss( :Partial Unconstrained DS Weibull Loss ),	Numeric Derivatives Only( 1 ),	Loss is Neg LogLikelihood( 1 ),	Newton,	Finish);Wait( 0 );obj << Profile Likelihood Contour( 1 );

```

### Profiler

**構文:** obj &lt;&lt; Profiler( state=0|1 )

**説明:** 予測プロファイルの表示/非表示を切り替える。予測プロファイルは、1因子ずつスライスしながら予測式を図示したものである。予測プロファイルでは、最適化を行える。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );obj = dt << Nonlinear( Y( :"log($ value)"n ), X( :Model ), Finish );obj << Profiler( 1 );

```

### QuasiNewton BFGS

**構文:** obj &lt;&lt; QuasiNewton BFGS

**説明:** 最適化法として準Newton BFGSを指定する。この手法は、パラメータの数が多い場合に最適。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ) );obj << QuasiNewton BFGS;obj << Finish;

```

### QuasiNewton SR1

**構文:** obj &lt;&lt; QuasiNewton SR1

**説明:** 最適化法として準Newton SR1を指定する。この手法は、反復のたびに微分が再計算するのを避けている。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ) );obj << QuasiNewton SR1;obj << Finish;

```

### Relative Gradient

**構文:** obj &lt;&lt; Relative Gradient( number=1e-6 )

**説明:** 相対的な勾配基準に基づく収束基準を指定する。 デフォルトの値は"1e-6"。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );obj = dt << Nonlinear( Y( :"log($ value)"n ), X( :Model ) );obj << Relative Gradient( 0.0001 );obj << Finish;

```

### Remember Solution

**構文:** obj &lt;&lt; Remember Solution( name )

**説明:** 「記録したモデル」レポートを作成する。このレポートには、現在のパラメータ推定値と要約統計量が表示される。複数のモデルの結果を記録して比較することができる。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );obj = dt << Nonlinear( Y( :"log($ value)"n ), X( :Model ), Finish );obj << Remember Solution( "New Model" );

```

### Reset

**構文:** obj &lt;&lt; Reset

**説明:** 収束基準の値をリセットする。この機能は、反復計算の終了後に、別の初期値を使ってモデルの再計算を行いたい場合に用いる。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );obj = dt << Nonlinear( Y( :"log($ value)"n ), X( :Model ) );obj << Set Parameter( B0 = 0.2 );obj << Finish;Wait( 2 );obj << Reset;

```

### Revert To Original Parameters

**構文:** obj &lt;&lt; Revert To Original Parameters

**説明:** 設定パネルに表示されたパラメータの値を元の値にリセットする。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );obj = dt << Nonlinear( Y( :"log($ value)"n ), X( :Model ), Finish );Wait( 1 );obj << Revert to Original Parameters;

```

### SSE Grid

**構文:** obj &lt;&lt; SSE Grid

**説明:** 解の周りにグリッドを作成し、そのグリッドの各値での誤差平方和を計算する。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );obj = dt << Nonlinear( Y( :"log($ value)"n ), X( :Model ), Finish );obj << SSE Grid;

```

### Save Estimates

**構文:** obj &lt;&lt; Save Estimates

**説明:** 現在のパラメータ推定値を計算式列に保存する。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );Wait( 1 );obj << Save Estimates;

```

### Save Estimates To Table

**構文:** obj &lt;&lt; Save Estimates To Table

**説明:** パラメータ推定値を含んだ新しいデータテーブルを作成する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );obj << Save Estimates To Table;

```

### Save Indiv Confid Limit Formula

**構文:** obj &lt;&lt; Save Indiv Confid Limit Formula

**説明:** 個々の測定値の予測に対して信頼区間を計算する式をデータテーブルに保存する。これは、与えられたX値に対する個々の応答値に対する信頼区間。新しい計算式列として、これらの列はデータテーブルに保存される。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );obj << Save Indiv Confid Limit Formula;

```

### Save Indiv Confid Limits

**構文:** obj &lt;&lt; Save Indiv Confid Limits

**説明:** 個々の値に対する漸近的な信頼限界をデータテーブルに保存する。これは、与えられたX値における個々の応答値の信頼区間。新しい計算式列として、これらの列はデータテーブルに保存される。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );obj << Save Indiv Confid Limits;

```

### Save Inverse Prediction Formula

**構文:** obj &lt;&lt; Save Inverse Prediction Formula

**説明:** モデルの逆推定、逆推定の標準誤差、および個々の逆推定値の標準誤差の計算式をデータテーブルに保存する。新しい計算式列として、これらの列はデータテーブルに保存される。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );obj << Save Inverse Prediction Formula;

```

### Save Pred Confid Limit Formula

**構文:** obj &lt;&lt; Save Pred Confid Limit Formula

**説明:** モデルによる予測値に対する信頼区間の計算式をデータテーブルに保存する。これは、与えられたX値における平均応答値に対する信頼区間。新しい計算式列として、これらの列はデータテーブルに保存される。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );obj << Save Pred Confid Limit Formula;

```

### Save Pred Confid Limits

**構文:** obj &lt;&lt; Save Pred Confid Limits

**説明:** 予測値に対する漸近的な信頼限界をデータテーブルに保存する。これは、与えられたX値における平均応答値の信頼区間。新しい計算式列として、これらの列はデータテーブルに保存される。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );obj << Save Pred Confid Limits;

```

### Save Prediction Formula

**構文:** obj &lt;&lt; Save Prediction Formula

**説明:** 現在のパラメータ推定値を含む予測式の列をデータテーブルに保存する。新しい計算式列として、この列はデータテーブルに保存される。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );obj << Save Prediction Formula;

```

### Save Residual Formula

**構文:** obj &lt;&lt; Save Residual Formula

**説明:** 残差の計算式をデータテーブルに保存する。新しい計算式列として、この列はデータテーブルに保存される。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );obj << Save Residual Formula;

```

### Save Specific Solving Formula

**構文:** obj &lt;&lt; Save Specific Solving Formula( &lt;column to solve for, {name1=expr1, ...}, Save Formula for Std Error Mean, Save Formula for Std Error Individual&gt; )

**説明:** 応答変数とデータ内のその他のX値または定数がわかっている場合に、Xの値と標準誤差を求める式をデータテーブルに保存する。新しい計算式列として、これらの列はデータテーブルに保存される。

**例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );obj << Save Specific Solving Formula;

```

**例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );obj << Save Specific Solving Formula( :year, {:pop = 200}, Save Formula for Std Error Mean );

```

**例 3**

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );obj << Save Specific Solving Formula( :pop, Save Formula for Std Error Individual );

```

### Save Std Error of Individual

**構文:** obj &lt;&lt; Save Std Error of Individual

**説明:** 個々の値の予測の標準誤差を求める計算式をデータテーブルに保存する。これは、与えられたX値に対して予測した個々の応答値の標準誤差。新しい計算式列として、この列はデータテーブルに保存される。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );obj << Save Std Error of Individual;

```

### Save Std Error of Predicted

**構文:** obj &lt;&lt; Save Std Error of Predicted

**説明:** モデルによる予測の標準誤差を求める計算式をデータテーブルに保存する。これは、与えられたX値に対して予測した平均応答値の標準誤差。新しい計算式列として、この列はデータテーブルに保存される。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );obj << Save Std Error of Predicted;

```

### Second Deriv Method

**構文:** obj &lt;&lt; Second Deriv Method( state=0|1 )

**説明:** 推定のための最適化における反復計算で、2次微分が使用されるよう指定する。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Second Deriv Method( 1 ), Finish );

```

### Set Parameter

**構文:** obj &lt;&lt; Set Parameter( name=expr, ... )

**説明:** モデルを推定する前に、1つまたは複数のパラメータ値を設定する。この機能は、パラメータを特定の値に固定する場合、および、反復計算の開始値を設定する場合に用いる。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );obj = dt << Nonlinear( Y( :"log($ value)"n ), X( :Model ) );obj << Set Parameter( B0 = 0.2 );Wait( 2 );obj << Finish;

```

### Show Derivatives

**構文:** obj &lt;&lt; Show Derivatives

**説明:** 非線形回帰式を微分した式(導関数)をログに表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ) );obj << Show Derivatives;

```

### Show Prediction Expression

**構文:** obj &lt;&lt; Show Prediction Expression( state=0|1 )

**説明:** レポートにおいて予測モデルまたは損失関数の表示/非表示を切り替える。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Logit Model w Loss1.jmp" );obj = dt << Nonlinear(	Loss( :Loss ),	Show Prediction Expression( 1 ),	Expand Intermediate Formulas( 1 ),	Finish);

```

### Step

**構文:** obj &lt;&lt; Step

**説明:** 非線形回帰の反復計算において、計算を1ステップ進める。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );obj = dt << Nonlinear( Y( :"log($ value)"n ), X( :Model ) );obj << Step;Wait( 1 );obj << Step;

```

### Stop

**構文:** obj &lt;&lt; Stop

**説明:** 非線形回帰の反復計算を中断し、現在の反復ステップで停止する。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );obj = dt << Nonlinear( Y( :"log($ value)"n ), X( :Model ) );obj << Go;obj << Stop;

```

### Surface Profiler

**構文:** obj &lt;&lt; Surface Profiler( state=0|1 )

**説明:** 3次元曲面プロットの表示/非表示を切り替える。このオプションは、モデルに2つ以上のX変数がある場合のみ利用可能。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );obj = dt << Nonlinear( Y( :"log($ value)"n ), X( :Model ), Finish );Wait( 0 );obj << Surface Profiler( 1 );

```

### Unlock Parameter

**構文:** obj &lt;&lt; Unlock Parameter( Name, ... )

**説明:** 指定されたパラメータのロックを解除する。ロックされている因子に対してこのオプションを使用すると、パラメータの固定が解除され、反復計算においてそのパラメータの推定値が求められるようになる。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );obj = dt << Nonlinear( Y( :"log($ value)"n ), X( :Model ) );obj << Set Parameter( B0 = 0.2 );obj << Lock Parameter( B0, A, D );obj << Finish;Wait( 2 );obj << Unlock Parameter( B0, A );obj << Finish;

```

### Unthreaded

**構文:** obj &lt;&lt; Unthreaded( state=0|1 )

**説明:** 推定のための反復計算を現在の1つのメインスレッドだけで実行する。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Algae Mitscherlich.jmp" );obj = dt << Nonlinear( Y( :Algae density ), X( :Mitscherlich ) );obj << Unthreaded( 1 );obj << Finish;

```

