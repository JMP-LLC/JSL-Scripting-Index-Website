# Multivariate



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

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Automatic Recalc( 1 );dt << Select Rows( 5 ) << Exclude( 1 );

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

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = Multivariate(	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Copy ByGroup Script;

```

### Copy Script

**構文:** obj &lt;&lt; Copy Script

**説明:** この分析を再現するJSLスクリプトを生成し、クリップボードにコピーする。

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Copy Script;

```

### Data Table Window

**構文:** obj &lt;&lt; Data Table Window

**説明:** この分析に使用したデータテーブルのウィンドウを手前に表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Data Table Window;

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

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = Multivariate(	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));t = obj[1] << Get ByGroup Script;Show( t );

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

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

### Get Data Table

**構文:** obj &lt;&lt; Get Data Table

**説明:** データテーブルへの参照を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );t = obj << Get Datatable;Show( N Rows( t ) );

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

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );t = obj << Get Script;Show( t );

```

### Get Script With Data Table

**構文:** obj &lt;&lt; Get Script With Data Table

**説明:** この分析を再現するスクリプト(JSL)をデータテーブルへの参照も含めて生成し、それを式として戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );t = obj << Get Script With Data Table;Show( t );

```

### Get Timing

**構文:** obj &lt;&lt; Get Timing

**説明:** プラットフォームの起動にかかった時間を取得する。

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );t = obj << Get Timing;Show( t );

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

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Redo Analysis;

```

### Relaunch Analysis

**構文:** obj &lt;&lt; Relaunch Analysis

**説明:** プラットフォームの起動ウィンドウを開き、レポートを作成した時の設定を表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Relaunch Analysis;

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

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Report View

**構文:** obj &lt;&lt; Report View( "完全"|"要約" )

**説明:** レポートビューは、プラットフォームレポートの詳細を表示するかどうかを決定する。Fullはすべての詳細を表示し、Summaryはプラットフォームにより限定されたものだけを表示する。 動作をカスタマイズするため、各ディスプレイボックスは<<Set Summary Behaviorメッセージをサポートする。

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**構文:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**説明:** 分析を再現するためのJSLスクリプトを作成し、データテーブルにテーブルプロパティとして保存する。スクリプトの名前を指定できる。Append Suffixオプションは、スクリプト名に数字の接尾辞を追加する。これにより、同名のスクリプトが存在していても区別できる。Promptオプションは、ユーザにスクリプト名の指定を促す。Replaceオプションは、同名の既存のスクリプトを置き換える。

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = Multivariate(	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**構文:** obj &lt;&lt; Save ByGroup Script to Journal

**説明:** この分析を再現するJSLスクリプトを生成し、ジャーナルにそのスクリプトのボタンを追加する。

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = Multivariate(	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**構文:** obj &lt;&lt; Save ByGroup Script to Script Window

**説明:** この分析を再現するJSLスクリプトを生成し、現在のスクリプトウィンドウに表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = Multivariate(	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**構文:** obj &lt;&lt; Save Script for All Objects

**説明:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**構文:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**説明:** すべてのレポートオブジェクトを再現するスクリプトを現在のデータテーブルに保存する。このオプションは、ウィンドウ内にレポートが複数ある場合に便利。作成されるスクリプトの名前は、引用符で囲んで指定しない限り、1つ目のプラットフォーム名となる。

**例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = Multivariate(	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table;

```

**例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = Multivariate(	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**構文:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**説明:** この分析を再現するJSLスクリプトを生成し、データテーブルのテーブルプロパティとして保存する。

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**構文:** obj &lt;&lt; Save Script to Journal

**説明:** この分析を再現するJSLスクリプトを生成し、ジャーナルにそのスクリプトのボタンを追加する。

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Save Script to Journal;

```

### Save Script to Report

**構文:** obj &lt;&lt; Save Script to Report

**説明:** この分析を再現するJSLスクリプトを生成し、レポートウィンドウに表示する。分析手順の記録を結果と一緒に残せる。

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Save Script to Report;

```

### Save Script to Script Window

**構文:** obj &lt;&lt; Save Script to Script Window

**説明:** この分析を再現するJSLスクリプトを生成し、現在のスクリプトウィンドウに表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Save Script to Script Window;

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

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Title( "My Platform" );

```

### Top Report

**構文:** obj &lt;&lt; Top Report

**説明:** レポート内のルートノードへの参照を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

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

**構文:** obj = Multivariate(...Window View( "Visible"|"Invisible"|"Private" )...)

**説明:** レポートとして作成するウィンドウの種類を設定する。デフォルトでは、Visibleレポートウィンドウが作成される。Invisible のウィンドウは画面に表示されないが、Window()などの関数によって検出できる。Private のウィンドウにはほとんどのウィンドウメッセージを送れるが、検出することはできないため、レポートオブジェクトを通してアクセスする必要がある。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

## 列

### By

**構文:** obj &lt;&lt; By( column(s) )

**説明:** 指定された列の各水準に対して、個別に分析を実行する。

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = Multivariate(	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));

```

### Columns

**構文:** obj &lt;&lt; Columns( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );

```

### Freq

**構文:** obj &lt;&lt; Freq( column )

**説明:** 分析の際に各行の度数として用いる値の列を指定する。

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );dt << New Column( "_freqcol", Numeric, Continuous, Set Each Value( Random Integer( 1, 5 ) ) );obj = Multivariate(	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),	Freq( :_freqcol ));

```

### Weight

**構文:** obj &lt;&lt; Weight( column )

**説明:** 分析の際に各行の重みとして用いる値の列を指定する。

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );dt << New Column( "_weightcol", Numeric, Continuous, Set Each Value( Random Beta( 1, 1 ) ) );obj = Multivariate(	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),	Weight( :_weightcol ));

```

### Y

**構文:** obj &lt;&lt; Y( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );

```

## 関連するコンストラクター

### Multivariate

**構文:** Multivariate( Y( columns ) )

**説明:** さまざまな方法で数値変数間の相関や関連を調べる。手法には、パラメトリックおよびノンパラメトリックな関連の指標、散布図行列、主成分分析、外れ値分析、項目の信頼性などがある。

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );

```

## 項目のメッセージ

### CI of Correlation

**構文:** obj &lt;&lt; CI of Correlation( state=0|1 )

**説明:** 相関係数およびそれらの信頼区間の表示/非表示を切り替える。

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << CI of Correlation( 1 );

```

### Cluster the Correlations

**構文:** obj &lt;&lt; Cluster the Correlations( state=0|1 )

**説明:** 相関が大きな変数どうしを近くに配置した「相関のカラーマップ」の表示/非表示を切り替える。このカラーマップは、-1の時に青色で、相関が1に近づくにつれて赤色になっていく。

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Cluster the Correlations( 1 );

```

### Color Map on Correlations

**構文:** obj &lt;&lt; Color Map on Correlations( state=0|1 )

**説明:** 「相関のカラーマップ」の表示/非表示を切り替える。このカラーマップは、-1の時に青色で、相関が1に近づくにつれて赤色になっていく。

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Color Map on Correlations( 1 );

```

### Color Map on Hoeffding's D

**構文:** obj &lt;&lt; Color Map on Hoeffding&apos;s D( state=0|1 )

**説明:** 「HoeffdingのD統計量のカラーマップ」の表示/非表示を切り替える。このカラーマップは、-1の時に青色で、相関が1に近づくにつれて赤色になっていく。HoeffdingのD統計量は、ノンパラメトリックな相関係数の1つである。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Color Map on Hoeffding's D( 1 );

```

### Color Map on Kendall's Tau

**構文:** obj &lt;&lt; Color Map on Kendall&apos;s Tau( state=0|1 )

**説明:** 「Kendallの順位相関係数(τ)のカラーマップ」の表示/非表示を切り替える。このカラーマップは、-1の時に青色で、相関が1に近づくにつれて赤色になっていく。Kendallの順位相関係数は、ノンパラメトリックな相関係数の1つである。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Color Map on Kendall's Tau( 1 );

```

### Color Map on Kendall's τ

**構文:** obj &lt;&lt; Color Map on Kendall&apos;s τ( state=0|1 )

**説明:** 「Kendallの順位相関係数(τ)のカラーマップ」の表示/非表示を切り替える。このカラーマップは、-1の時に青色で、相関が1に近づくにつれて赤色になっていく。Kendallの順位相関係数は、ノンパラメトリックな相関係数の1つである。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Color Map on Kendall's Tau( 1 );

```

### Color Map on Pairwise Correlations

**構文:** obj &lt;&lt; Color Map on Pairwise Correlations( state=0|1 )

**説明:** 「ペアごとの相関のカラーマップ」の表示/非表示を切り替える。このカラーマップは、-1の時に青色で、相関が1に近づくにつれて赤色になっていく。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Color Map on Pairwise Correlations( 1 );

```

### Color Map on Spearman's Rho

**構文:** obj &lt;&lt; Color Map on Spearman&apos;s Rho( state=0|1 )

**説明:** 「Spearmanの順位相関係数(ρ)のカラーマップ」の表示/非表示を切り替える。このカラーマップは、-1の時に青色で、相関が1に近づくにつれて赤色になっていく。Spearmanの順位相関係数は、ノンパラメトリックな相関係数の1つである。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Color Map on Spearman's Rho( 1 );

```

### Color Map on Spearman's ρ

**構文:** obj &lt;&lt; Color Map on Spearman&apos;s ρ( state=0|1 )

**説明:** 「Spearmanの順位相関係数(ρ)のカラーマップ」の表示/非表示を切り替える。このカラーマップは、-1の時に青色で、相関が1に近づくにつれて赤色になっていく。Spearmanの順位相関係数は、ノンパラメトリックな相関係数の1つである。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Color Map on Spearman's Rho( 1 );

```

### Color Map on p-Values

**構文:** obj &lt;&lt; Color Map on p-Values( state=0|1 )

**説明:** 「p値のカラーマップ」の表示/非表示を切り替える。このカラーマップは、p値が0の時に赤色で、0に近づくにつれて青色になっていく。

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << "Color Map on p-Values"n( 1 );

```

### Correlation Probability

**構文:** obj &lt;&lt; Correlation Probability( state=0|1 )

**説明:** 相関係数に対するp値の行列の表示/非表示を切り替える。このp値は、「変数間における真の相関はゼロである」という帰無仮説に対する検定のp値である。

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Correlation Probability( 1 );

```

### Correlations Multivariate

**構文:** obj &lt;&lt; Correlations Multivariate( state=0|1 )

**説明:** 相関係数行列の表示/非表示を切り替える。相関係数は、Y変数の各ペアにおける線形関係の強さを示す指標である。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Correlations Multivariate( 1 );

```

### Covariance Matrix

**構文:** obj &lt;&lt; Covariance Matrix( state=0|1 )

**説明:** 共分散行列の表示/非表示を切り替える。

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Covariance Matrix( 1 );

```

### Create SAS Job

**構文:** obj &lt;&lt; Create SAS Job

**説明:** SASを使って同様の推定方法を実行するSAS PROC MIXEDコードを生成する。

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), Variance Estimation( "REML" ) );obj << Create SAS Job();

```

### Cronbach's Alpha

**構文:** obj &lt;&lt; Cronbach&apos;s Alpha( state=0|1 )

**説明:** Cronbachのα係数の表示/非表示を切り替える。このCronbachのα係数には、すべての変数から計算されたα係数と、Y変数を1つずつ除外した場合のα係数がある。

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Cronbach's alpha( 1 );

```

### Cronbach's α

**構文:** obj &lt;&lt; Cronbach&apos;s α( state=0|1 )

**説明:** Cronbachのα係数の表示/非表示を切り替える。このCronbachのα係数には、すべての変数から計算されたα係数と、Y変数を1つずつ除外した場合のα係数がある。

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Cronbach's alpha( 1 );

```

### Ellipsoid 3D Plot

**構文:** obj &lt;&lt; Ellipsoid 3D Plot( column1, column2, column3 )

**説明:** 三次元散布図の表示/非表示を切り替える。このグラフには、選択した3つのY変数がプロットされる。また、95%の確率楕円体も描かれる。

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Ellipsoid 3D Plot( :Ether, :Chloroform, :Benzene );

```

### Get Correlation Matrix

**構文:** obj &lt;&lt; Get Correlation Matrix

**説明:** 相関行列を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );corr = obj << Get Correlation Matrix;Show( corr );

```

### Get Inv Correlation Matrix

**構文:** obj &lt;&lt; Get Inv Correlation Matrix

**説明:** 相関係数の逆行列を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), Inverse Correlations( 1 ) );icorr = obj << Get Inv Correlation Matrix;Show( icorr );

```

### Hoeffding's D

**構文:** obj &lt;&lt; Hoeffding&apos;s D( state=0|1 )

**説明:** Y変数の各ペアに対するHoeffdingのD統計量の表示/非表示を切り替える。

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Hoeffding's D( 1 );

```

### Hotelling's T Square Test

**構文:** obj &lt;&lt; Hotelling&apos;s T Square Test

**説明:** 多変量平均に対する1標本検定を実行する。帰無仮説における平均ベクトルを指定する。複数のY変数の多変量分布をもとに、指定された平均ベクトルを帰無仮説とした検定が行われる。

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Hotelling's T Square Test( 1, 0.7, 0.5, 0, -1 );

```

### Impute Missing Data

**構文:** obj &lt;&lt; Impute Missing Data

**説明:** すべてのY変数の欠測値を補完し、既存の値と新しく補完した欠測値を含む新しいデータテーブルを作成する。

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );obj << Impute Missing Data;

```

### Inverse Correlations

**構文:** obj &lt;&lt; Inverse Correlations( state=0|1 )

**説明:** 相関係数行列の逆行列の表示/非表示を切り替える。

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Inverse Correlations( 1 );

```

### Jackknife Distances

**構文:** obj &lt;&lt; Jackknife Distances( state = 0|1, &lt;Save Jackknife Distances&gt; )

**説明:** 各行に対するジャックナイフ法による距離のグラフ、および外れ値の可能性のあるものを識別するための参照線の表示/非表示を切り替える。

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Jackknife Distances( 1 );

```

### Kendall's Tau

**構文:** obj &lt;&lt; Kendall&apos;s Tau( state=0|1 )

**説明:** Y変数の各ペアに対するKendallの順位相関係数(τ)の表示/非表示を切り替える。

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Kendall's Tau( 1 );

```

### Kendall's τ

**構文:** obj &lt;&lt; Kendall&apos;s τ( state=0|1 )

**説明:** Y変数の各ペアに対するKendallの順位相関係数(τ)の表示/非表示を切り替える。

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Kendall's Tau( 1 );

```

### Mahalanobis Distances

**構文:** obj &lt;&lt; Mahalanobis Distances( state = 0|1, &lt;Save Outlier Distances&gt; )

**説明:** 各行に対するMahalanobisの距離のグラフ、および外れ値の可能性のあるものを識別するための参照線の表示/非表示を切り替える。

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Mahalanobis Distances( 1 );

```

### Matrix Format

**構文:** obj = Multivariate(...Matrix Format( "下三角"|"上三角"|"正方形" )...)

**説明:** 散布図行列での変数の配置方法を指定する。

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), Matrix Format( "Lower Triangular" ) );

```

### Multivariate Simple Statistics

**構文:** obj &lt;&lt; Multivariate Simple Statistics( state=0|1 )

**説明:** 「多変量の基本統計量」レポートの表示/非表示を切り替える。このレポートの統計量は、相関を推定する際に使われた推定方法に基づき算出される。

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = Multivariate( Y( :POP, :OZONE, :CO, :SO2, :NO ) );obj << Multivariate Simple Statistics( 1 );

```

### Pairwise Correlations

**構文:** obj &lt;&lt; Pairwise Correlations( state=0|1 )

**説明:** ペアごとの相関係数を一覧表示したレポートの表示/非表示を切り替える。

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Pairwise Correlations( 1 );

```

### Parallel Coord Plot

**構文:** obj &lt;&lt; Parallel Coord Plot( state=0|1 )

**説明:** パラレルプロットの表示/非表示を切り替える。

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Parallel Coord Plot( 1 );

```

### Partial Correlation Diagram

**構文:** obj &lt;&lt; Partial Correlation Diagram( state=0|1 )

**説明:** 偏相関図レポートの表示/非表示を切り替える。このオプションは、偏相関行列の大きさを視覚的に表現する。デフォルトの配置には固有値分解した結果が使われる。

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Partial Correlation Diagram( 1 );

```

### Partial Correlation Probability

**構文:** obj &lt;&lt; Partial Correlation Probability( state=0|1 )

**説明:** 偏相関係数に対するp値の行列の表示/非表示を切り替える。このp値は、「真の偏相関はゼロである」という帰無仮説に対する検定のp値である。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Partial Correlation Probability( 1 );

```

### Partial Correlations

**構文:** obj &lt;&lt; Partial Correlations( state=0|1 )

**説明:** 偏相関係数行列の表示/非表示を切り替える。

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Partial Correlations( 1 );

```

### Save Imputed Formula

**構文:** obj &lt;&lt; Save Imputed Formula

**説明:** Y列の値が欠測しているところでは値を補完する。元のデータテーブルに新しい列を作成して、補完の計算式を保存する。

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );obj << Save Imputed Formula;

```

### Scatterplot Matrix

**構文:** obj &lt;&lt; Scatterplot Matrix( state=0|1 )

**説明:** 散布図行列の表示/非表示を切り替える。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate(	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),	Scatterplot Matrix( 0 ));

```

### Set Alpha Level

**構文:** obj &lt;&lt; Set Alpha Level( "0.01"|"0.05"|"0.10"|"0.50"|"その他..."=0.05 )

**説明:** 各相関の信頼区間の有意水準を変更する。 デフォルトの値は"0.05"。

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Set Alpha Level( 0.01 );obj << CI of Correlation( 1 );

```

### Set α Level

**構文:** obj &lt;&lt; Set α Level( "0.01"|"0.05"|"0.10"|"0.50"|"その他..."=0.05 )

**説明:** 各相関の信頼区間の有意水準を変更する。 デフォルトの値は"0.05"。

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Set α Level( 0.01 );obj << CI of Correlation( 1 );

```

### Spearman's Rho

**構文:** obj &lt;&lt; Spearman&apos;s Rho( state=0|1 )

**説明:** Y変数の各ペアに対するSpearmanの順位相関係数(ρ)の表示/非表示を切り替える。

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Spearman's Rho( 1 );

```

### Spearman's ρ

**構文:** obj &lt;&lt; Spearman&apos;s ρ( state=0|1 )

**説明:** Y変数の各ペアに対するSpearmanの順位相関係数(ρ)の表示/非表示を切り替える。

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Spearman's Rho( 1 );

```

### Standardized Alpha

**構文:** obj &lt;&lt; Standardized Alpha( state=0|1 )

**説明:** C標準化した変数に対するCronbachのα係数の表示/非表示を切り替える。このCronbachのα係数には、すべての変数から計算されたα係数と、Y変数を1つずつ除外した場合のα係数がある。

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Standardized alpha( 1 );

```

### Standardized α

**構文:** obj &lt;&lt; Standardized α( state=0|1 )

**説明:** C標準化した変数に対するCronbachのα係数の表示/非表示を切り替える。このCronbachのα係数には、すべての変数から計算されたα係数と、Y変数を1つずつ除外した場合のα係数がある。

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Standardized alpha( 1 );

```

### T Square

**構文:** obj &lt;&lt; T Square( state = 0|1, &lt;Save T Square&gt; )

**説明:** 各行に対するT²値のグラフ、および外れ値の可能性のあるものを識別するための参照線の表示/非表示を切り替える。

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << T Square( 1 );

```

### T²

**構文:** obj &lt;&lt; T²( state = 0|1, &lt;Save T Square&gt; )

**説明:** 各行に対するT²値のグラフ、および外れ値の可能性のあるものを識別するための参照線の表示/非表示を切り替える。

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << T Square( 1 );

```

### Univariate Simple Statistics

**構文:** obj &lt;&lt; Univariate Simple Statistics( state=0|1 )

**説明:** 単変量の枠組みで求めた基本統計量の表示/非表示を切り替える。この基本統計量は列ごとに算出され、他の列に欠測値があってもその影響を受けない。

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = Multivariate( Y( :POP, :OZONE, :CO, :SO2, :NO ) );obj << Univariate Simple Statistics( 1 );

```

### Variance Estimation

**構文:** Variance Estimation( REML|ML|Robust|Row-wise|Pairwise )

**説明:** 相関を計算するための推定法を設定する。

欠測値がない場合、デフォルトはリストワイズ。

欠測値があり、変数の数が10以下、行数が5000以下の場合、デフォルトはREML。

欠測値があり、変数の数が10を超えるか、行数が5000を超える場合、デフォルトはペアワイズ。

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), Variance Estimation( "ML" ) );

```

## Principal Component Options

### 項目のメッセージ

#### 3D Score Plot

**構文:** obj &lt;&lt; 3D Score Plot( state=0|1 )

**説明:** 主成分スコア(もしくは因子スコア)をプロットした三次元散布図の表示/非表示を切り替える。このプロットには、バイプロット線も描かれる。

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );obj << Principal Components( "on Correlations", "3D Score Plot"n );

```

#### Bartlett Test

**構文:** obj &lt;&lt; Bartlett Test( state=0|1 )

**説明:** 各主成分に対する等質性検定に関するレポートの表示/非表示を切り替える。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );obj << Principal Components( "on Correlations", Bartlett Test( 1 ) );

```

#### Eigenvectors

**構文:** obj &lt;&lt; Eigenvectors( state=0|1 )

**説明:** 固有ベクトルに関するレポートの表示/非表示を切り替える。

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );obj << Principal Components( "on Correlations", Eigenvectors( 1 ) );

```

#### Factor Rotation

**構文:** obj &lt;&lt; Factor Rotation( &lt;ML|PC&gt;, 1|SMC, n Rotated, Varimax|Biquartimax| Equamax| Factorparsimax| Orthomax| Parsimax| Quartimax| Biquartimin| Covarimin| Obbiquartimax| Obequamax| Obfactorparsimax| Obequamax| Obfactorparsimax| Oblimin| Obparsimax| Obquartimax| Obvarimax| Quartimin| Promax )

**説明:** 因子分析（もしくは主成分分析）を行い、得られた因子（もしくは主成分）を回転する。

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );obj << Principal Components(	"on Correlations",	Factor Rotation( "ML", "SMC", 2, "Varimax" ));

```

#### Loading Plot

**構文:** obj &lt;&lt; Loading Plot( number )

**説明:** 因子負荷量を2次元で表現したプロットを行列形式で配置したレポートの表示/非表示を切り替える。

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );obj << Principal Components( "on Correlations", Loading Plot( 2 ) );

```

#### Save Principal Components

**構文:** obj &lt;&lt; Save Principal Components( number )

**説明:** 指定の数の主成分を、データテーブルの新しい列に保存する。

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );obj << Principal Components( "on Correlations", Save Principal Components( 3 ) );

```

#### Save Principal Components with Imputation

**構文:** obj &lt;&lt; Save Principal Components with Imputation( number )

**説明:** 欠測値を補完して計算された主成分を、指定の数だけ、データテーブルの新しい列に保存する。

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );obj << Principal Components(	"on Correlations",	Save Principal Components with Imputation( 3 ));

```

#### Save Rotated Components

**構文:** obj &lt;&lt; Save Rotated Components

**説明:** 成分の回転を、データテーブルの新しい列に保存する。

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );obj << Principal Components(	"on Correlations",	Factor Rotation( "SMC", 2, "Varimax" ),	Save Rotated Components);

```

#### Save Rotated Components with Imputation

**構文:** obj &lt;&lt; Save Rotated Components with Imputation

**説明:** 欠測値を補完して計算された回転後の成分を、データテーブルの新しい列に保存する。注:このオプションは［因子分析］が実行された後にのみ使用可能。

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );obj << Principal Components(	"on Correlations",	Factor Rotation( "SMC", 2, "Varimax" ),	Save Rotated Components with Imputation);

```

#### Score Plot

**構文:** obj &lt;&lt; Score Plot( number )

**説明:** 指定された個数の主成分に対し、主成分スコアをプロットした散布図行列の表示/非表示を切り替える。

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );obj << Principal Components( "on Correlations", Score Plot( 2 ) );

```

#### Score Plot with Imputation

**構文:** obj &lt;&lt; Score Plot with Imputation( number )

**説明:** 指定された個数の主成分に対し、主成分スコアをプロットした散布図行列の表示/非表示を切り替える。この際、欠測値は補完される。

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );obj << Principal Components( "on Correlations", Score Plot with Imputation( 2 ) );

```

#### Scree Plot

**構文:** obj &lt;&lt; Scree Plot( state=0|1 )

**説明:** 各成分の固有値を折れ線で描いたプロットの表示/非表示を切り替える。

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );obj << Principal Components( "on Correlations", Scree Plot( 1 ) );

```

## Scatterplot Matrix Message

### 項目のメッセージ

#### Density Ellipses

**構文:** Density Ellipses( state=0|1 )

**説明:** 散布図行列において、確率楕円の表示/非表示を切り替える。

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate(	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),	Scatterplot Matrix( Density Ellipses( 1 ) ));

```

#### Ellipse Alpha

**構文:** obj &lt;&lt; Ellipse Alpha( "0.90"|"0.95"|"0.99"|"その他..." )

**説明:** 散布図行列上の確率楕円の信頼率を変更する。

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate(	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),	Scatterplot Matrix( Density Ellipses( 1 ), Ellipse Alpha( 0.1 ) ));

```

#### Ellipse Color

**構文:** Ellipse Color( color )

**説明:** 散布図行列上の確率楕円の色を変更する。

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate(	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),	Scatterplot Matrix( Density Ellipses( 1 ), Ellipse Color( "Blue" ) ));

```

#### Ellipse α

**構文:** obj &lt;&lt; Ellipse α( "0.90"|"0.95"|"0.99"|"その他..." )

**説明:** 散布図行列上の確率楕円の信頼率を変更する。

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate(	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),	Scatterplot Matrix( Density Ellipses( 1 ), Ellipse Alpha( 0.1 ) ));

```

#### Ellipses Coverage

**構文:** obj &lt;&lt; Ellipses Coverage( "0.90"|"0.95"|"0.99"|"その他..." )

**説明:** 散布図行列上の確率楕円の信頼率を変更する。

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate(	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),	Scatterplot Matrix( Density Ellipses( 1 ), Ellipses Coverage( 0.9 ) ));

```

#### Ellipses Transparency

**構文:** obj &lt;&lt; Ellipses Transparency( "0.20"|"0.40"|"0.60"|"その他..." )

**説明:** 散布図行列上の確率楕円の塗りの透明度を変更する。

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate(	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),	Scatterplot Matrix( Ellipses Transparency( 0.6 ), Shaded Ellipses( 1 ) ));

```

#### Fit Line

**構文:** obj &lt;&lt; Fit Line( state=0|1 )

**説明:** 散布図行列において、回帰直線と信頼区間の表示/非表示を切り替える。

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate(	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),	Scatterplot Matrix( Fit line( 1 ) ));

```

#### Heat Map

**構文:** Heat Map( state=0|1 )

**説明:** 散布図行列の右上部分に相関ヒートマップを表示する。ヒートマップにおけるセルの色は、相関係数を表す。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate(	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),	Scatterplot Matrix( Heat Map( 1 ) ));

```

#### Horizontal

**構文:** Horizontal( state=0|1 )

**説明:** 散布図行列の対角線上にヒストグラムを横に表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate(	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),	Scatterplot Matrix( Horizontal( 1 ) ));

```

#### Nonpar Density

**構文:** Nonpar Density( state=0|1 )

**説明:** 0.90分位点と0.50分位点を表す陰影付きノンパラメトリック密度等高線の表示/非表示を切り替える。

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate(	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),	Scatterplot Matrix( Nonpar Density( 1 ) ));

```

#### Shaded Ellipses

**構文:** Shaded Ellipses( state=0|1 )

**説明:** 散布図行列上の確率楕円内を塗る、または塗りを削除する。

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate(	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),	Scatterplot Matrix( Shaded Ellipses( 1 ) ));

```

#### Show Correlations

**構文:** Show Correlations( state=0|1 )

**説明:** 散布図行列において、各ペアの相関係数の表示/非表示を切り替える。この相関係数は、各図の左上隅に表示される。

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate(	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),	Scatterplot Matrix( Show Correlations( 1 ) ));

```

#### Show Counts

**構文:** Show Counts( state=0|1 )

**説明:** 散布図行列の対角線上にあるヒストグラムの棒に対する度数ラベルの表示/非表示を切り替える。注: ヒストグラムが表示されている場合にのみ使用可能。

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate(	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),	Scatterplot Matrix( Vertical( 1 ), Show Counts( 1 ) ));

```

#### Show Points

**構文:** Show Points( state=0|1 )

**説明:** 散布図行列の点の表示/非表示を切り替える。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate(	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),	Scatterplot Matrix( Show Points( 1 ) ));

```

#### Significance Circles

**構文:** Significance Circles( state=0|1 )

**説明:** 散布図行列における右上部分に、相関の大きさと検定の有意性を表す円を表示する。各円の色は相関を表し、各円のサイズは統計的検定の有意性を表す。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate(	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),	Scatterplot Matrix( Significance Circles( 1 ) ));

```

#### Vertical

**構文:** Vertical( state=0|1 )

**説明:** 散布図行列の対角線上にヒストグラムを縦に表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate(	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),	Scatterplot Matrix( Vertical( 1 ) ));

```

