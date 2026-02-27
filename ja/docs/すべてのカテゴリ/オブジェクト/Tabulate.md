# Tabulate



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

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Automatic Recalc( 1 );dt << Select Rows( 5 ) << Exclude( 1 );

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

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Copy ByGroup Script;

```

### Copy Script

**構文:** obj &lt;&lt; Copy Script

**説明:** この分析を再現するJSLスクリプトを生成し、クリップボードにコピーする。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Copy Script;

```

### Data Table Window

**構文:** obj &lt;&lt; Data Table Window

**説明:** この分析に使用したデータテーブルのウィンドウを手前に表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Data Table Window;

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

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));t = obj[1] << Get ByGroup Script;Show( t );

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

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

### Get Data Table

**構文:** obj &lt;&lt; Get Data Table

**説明:** データテーブルへの参照を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));t = obj << Get Datatable;Show( N Rows( t ) );

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

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));t = obj << Get Script;Show( t );

```

### Get Script With Data Table

**構文:** obj &lt;&lt; Get Script With Data Table

**説明:** この分析を再現するスクリプト(JSL)をデータテーブルへの参照も含めて生成し、それを式として戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));t = obj << Get Script With Data Table;Show( t );

```

### Get Timing

**構文:** obj &lt;&lt; Get Timing

**説明:** プラットフォームの起動にかかった時間を取得する。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));t = obj << Get Timing;Show( t );

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

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Redo Analysis;

```

### Relaunch Analysis

**構文:** obj &lt;&lt; Relaunch Analysis

**説明:** プラットフォームの起動ウィンドウを開き、レポートを作成した時の設定を表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Relaunch Analysis;

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

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Report View

**構文:** obj &lt;&lt; Report View( "完全"|"要約" )

**説明:** レポートビューは、プラットフォームレポートの詳細を表示するかどうかを決定する。Fullはすべての詳細を表示し、Summaryはプラットフォームにより限定されたものだけを表示する。 動作をカスタマイズするため、各ディスプレイボックスは<<Set Summary Behaviorメッセージをサポートする。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**構文:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**説明:** 分析を再現するためのJSLスクリプトを作成し、データテーブルにテーブルプロパティとして保存する。スクリプトの名前を指定できる。Append Suffixオプションは、スクリプト名に数字の接尾辞を追加する。これにより、同名のスクリプトが存在していても区別できる。Promptオプションは、ユーザにスクリプト名の指定を促す。Replaceオプションは、同名の既存のスクリプトを置き換える。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**構文:** obj &lt;&lt; Save ByGroup Script to Journal

**説明:** この分析を再現するJSLスクリプトを生成し、ジャーナルにそのスクリプトのボタンを追加する。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**構文:** obj &lt;&lt; Save ByGroup Script to Script Window

**説明:** この分析を再現するJSLスクリプトを生成し、現在のスクリプトウィンドウに表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**構文:** obj &lt;&lt; Save Script for All Objects

**説明:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**構文:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**説明:** すべてのレポートオブジェクトを再現するスクリプトを現在のデータテーブルに保存する。このオプションは、ウィンドウ内にレポートが複数ある場合に便利。作成されるスクリプトの名前は、引用符で囲んで指定しない限り、1つ目のプラットフォーム名となる。

**例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table;

```

**例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**構文:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**説明:** この分析を再現するJSLスクリプトを生成し、データテーブルのテーブルプロパティとして保存する。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**構文:** obj &lt;&lt; Save Script to Journal

**説明:** この分析を再現するJSLスクリプトを生成し、ジャーナルにそのスクリプトのボタンを追加する。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Save Script to Journal;

```

### Save Script to Report

**構文:** obj &lt;&lt; Save Script to Report

**説明:** この分析を再現するJSLスクリプトを生成し、レポートウィンドウに表示する。分析手順の記録を結果と一緒に残せる。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Save Script to Report;

```

### Save Script to Script Window

**構文:** obj &lt;&lt; Save Script to Script Window

**説明:** この分析を再現するJSLスクリプトを生成し、現在のスクリプトウィンドウに表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Save Script to Script Window;

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

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Title( "My Platform" );

```

### Top Report

**構文:** obj &lt;&lt; Top Report

**説明:** レポート内のルートノードへの参照を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

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

**構文:** obj = Tabulate(...Window View( "Visible"|"Invisible"|"Private" )...)

**説明:** レポートとして作成するウィンドウの種類を設定する。デフォルトでは、Visibleレポートウィンドウが作成される。Invisible のウィンドウは画面に表示されないが、Window()などの関数によって検出できる。Private のウィンドウにはほとんどのウィンドウメッセージを送れるが、検出することはできないため、レポートオブジェクトを通してアクセスする必要がある。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

## 列

### Analysis Columns

**構文:** Analysis Columns( Column(s) )

**説明:** 現在のテーブルに分析列を追加する。[Add Table]または[Modify Table]コマンドとともに使用できる。

#### 新しいテーブルに追加

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Analysis Columns( :OZONE ), Statistics( Mean ) ),		Row Table( Grouping Columns( :Region ) )	));

```

#### 既存のテーブルに追加

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Analysis Columns( :OZONE ), Statistics( Mean ) ),		Row Table( Grouping Columns( :Region ) )	));obj << Modify Table( Column Table( 1 ), Analysis Columns( :CO ) );

```

### By

**構文:** obj &lt;&lt; By( column(s) )

**説明:** 指定された列の各水準に対して、個別に分析を実行する。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	),	By( :type ));

```

### Columns by Categories

**構文:** Columns by Categories( column1, column2, ...) )

**説明:** 列名と共通のカテゴリで構成された2元度数表を表に追加する。スクリプトの場合には、列テーブル(Column Table)メッセージ、もしくは、行テーブル(メッセージ)のなかに指定すること。

#### 新しいテーブルに追加

```jsl

dt = Open( "$SAMPLE_DATA/Children's Popularity.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table( Row Table( Columns by Categories( :Grades, :Sports, :Looks, :Money ) ) ));

```

#### 既存のテーブルに追加

```jsl

dt = Open( "$SAMPLE_DATA/Children's Popularity.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table( Row Table( Columns by Categories( :Grades, :Sports, :Looks ) ) ));obj << Modify Table( Row Table( 1 ), Columns by Categories( :Money ) );

```

### Freq

**構文:** Freq( Column )

**説明:** 統計量の計算に使用する度数列を指定する。

#### 新しいテーブルで設定

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failures.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Freq( :Count ),	Add Table( Row Table( Grouping Columns( :Causes ) ) ));

```

#### 既存のテーブルに設定

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failures.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table( Row Table( Grouping Columns( :Causes ) ) ));Wait( 1 );obj << Freq( :Count );

```

### Grouping Columns

**構文:** Grouping Columns( Column(s) )

**説明:** 現在のテーブルにグループ変数の列を追加する。[Add Table]または[Modify Table]コマンドとともに使用できる。

#### Add nested to new

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));

```

#### 新しいテーブルに追加

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table( Column Table( Grouping Columns( :sex ) ) ));

```

#### 既存のグループ列に入れ子として追加

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Tabulate( Show Control Panel( 0 ) );obj << Add Table( Column Table( Grouping Columns( :sex ) ) );obj << Modify Table( Column Table( 1 ), Grouping Column( :age ) );

```

#### 既存のテーブルに追加

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Tabulate( Show Control Panel( 0 ) );obj << Add Table( Column Table( Grouping Columns( :sex ) ) );obj << Modify Table( Row Table( 1 ), Grouping Column( :age ) );

```

### ID

**構文:** ID( Column )

**説明:** 固有の値のカウントに使用する列を指定する。

#### 新しいテーブルで設定

```jsl

dt = Open( "$SAMPLE_DATA/Hybrid Fuel Economy.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	ID( :Division ),	Set Format( Uniform Format( 10, 2 ) ),	Add Table(		Column Table(			Statistics( Sum ),			Analysis Columns( :City MPG, :Hwy MPG, :Comb MPG ),			Pack(				Analysis Columns( City MPG, Hwy MPG, Comb MPG ),				Template( "^FIRST  (^OTHERS)", "/" )			)		),		Row Table( Grouping Columns( :Mfr Name ) )	));

```

#### 既存のテーブルに設定

```jsl

dt = Open( "$SAMPLE_DATA/Hybrid Fuel Economy.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Set Format( Uniform Format( 10, 2 ) ),	Add Table(		Column Table(			Statistics( Sum ),			Analysis Columns( :City MPG, :Hwy MPG, :Comb MPG ),			Pack(				Analysis Columns( City MPG, Hwy MPG, Comb MPG ),				Template( "^FIRST  (^OTHERS)", "/" )			)		),		Row Table( Grouping Columns( :Mfr Name ) )	));Wait( 1 );obj << ID( :Division );

```

### Page Column

**構文:** Page Column( Column )

**説明:** レポートのページを設定するためのページ列を指定する。

#### 多重応答のページ列

```jsl

dt = Open( "$Sample_Data/Big Class Families.jmp" );obj = Tabulate(	Show Control Panel( 0 ),	Page Column( :family cars( "Jeep" ) ),	Add Table(		Column Table( Analysis Columns( :height ), Statistics( N, "% of Total"n ) ),		Row Table( Grouping Columns( :sex ) )	));

```

#### 新しいテーブルにページ列とページ水準を設定

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Page Column( :sex( "F" ) ),	Add Table(		Column Table( Analysis Columns( :height, :weight ), Statistics( Mean ) ),		Row Table( Grouping Columns( :age ) )	));

```

#### 新しいテーブルにページ列を設定

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Page Column( :sex ),	Add Table(		Column Table( Analysis Columns( :height, :weight ), Statistics( Mean ) ),		Row Table( Grouping Columns( :age ) )	));

```

#### 既存のテーブルにページ列とページ水準を設定

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Analysis Columns( :height, :weight ), Statistics( Mean ) ),		Row Table( Grouping Columns( :age ) )	));Wait( 1 );obj << Page Column( :sex( "F" ) );

```

### Weight

**構文:** Weight( Column )

**説明:** 統計量の計算に使用する重み列を指定する。

#### 新しいテーブルで設定

```jsl

dt = Open( "$SAMPLE_DATA/Car Physical Data.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Weight( :Weight ),	Add Table(		Column Table( Analysis Columns( :Horsepower ), Statistics( Mean ) ),		Row Table( Grouping Columns( :Type ) )	));

```

#### 既存のテーブルに設定

```jsl

dt = Open( "$SAMPLE_DATA/Car Physical Data.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Analysis Columns( :Horsepower ), Statistics( Mean ) ),		Row Table( Grouping Columns( :Type ) )	));Wait( 1 );obj << Weight( :Weight );

```

## 関連するコンストラクター

### Tabulate

**構文:** Tabulate( Add Table( Column Table( Analysis Columns( column(s) )|Grouping Columns( column(s))|Statistics( )), Row Table( Analysis Columns( column(s) )|Grouping Columns( column(s))|Statistics( )) )

**説明:** 1つまたは複数の変数の要約統計量を表にまとめる。変数は、1つまたは複数の分類列によってグループ化できる。ドラッグ＆ドロップ操作によって要約表を作成できる。

#### ID列

```jsl

dt = Open( "$SAMPLE_DATA/Hybrid Fuel Economy.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	ID( :Division ),	Set Format( Uniform Format( 10, 2 ) ),	Add Table(		Column Table(			Statistics( Sum ),			Analysis Columns( :City MPG, :Hwy MPG, :Comb MPG ),			Pack(				Analysis Columns( City MPG, Hwy MPG, Comb MPG ),				Template( "^FIRST  (^OTHERS)", "/" )			)		),		Row Table( Grouping Columns( :Mfr Name ) )	));

```

#### カテゴリごとの列

```jsl

dt = Open( "$SAMPLE_DATA/Children's Popularity.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table( Row Table( Columns by Categories( :Grades, :Sports, :Looks, :Money ) ) ));

```

#### カテゴリと統計量

```jsl

dt = Open( "$SAMPLE_DATA/Children's Popularity.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :gender, :goals ), Statistics( N, Column % ) ),		Row Table( Grouping Columns( :Grade, :Age ) )	));

```

#### グループ列の積み重ね

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table(			Grouping Columns( :marital status ),			Add Aggregate Statistics( :marital status ),			Analysis Columns( :age ),			Statistics( Min, Max )		),		Row Table(			Grouping Columns( :sex, :country, :size ),			Add Aggregate Statistics( :sex, :country, :size ),			Stack Grouping Columns( 1 )		)	));

```

#### ページ列

```jsl

dt = Open( "$SAMPLE_DATA/Hybrid Fuel Economy.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Page Column( :Engine( "Gas" ) ),	Add Table(		Column Table( Analysis Columns( :City MPG, :Hwy MPG ), Statistics( Max ) ),		Row Table( Grouping Columns( :Mfr Name ) )	));

```

#### 入れ子になったカテゴリ

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));

```

#### 列のパッキング

```jsl

dt = Open( "$SAMPLE_DATA/Hybrid Fuel Economy.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table(			Statistics( Sum, Max ),			Analysis Columns( :City MPG, :Hwy MPG, :Comb MPG ),			Pack(				Analysis Columns( City MPG, Hwy MPG, Comb MPG ),				Template( "^FIRST  (^OTHERS)", "/" )			)		),		Row Table( Grouping Columns( :Mfr Name, :Engine ) )	));

```

#### 多重応答のグループ列

```jsl

dt = Open( "$Sample_Data/Consumer Preferences.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :Floss Delimited ), Statistics( N, "% of Total"n ) ),		Row Table( Grouping Columns( :Frequency of Teeth Cleaning, :Brush Delimited ) )	));

```

#### 多重応答のページ列

```jsl

dt = Open( "$Sample_Data/Big Class Families.jmp" );obj = Tabulate(	Show Control Panel( 0 ),	Page Column( :family cars( "Jeep" ) ),	Add Table(		Column Table( Analysis Columns( :height ), Statistics( N, "% of Total"n ) ),		Row Table( Grouping Columns( :sex ) )	));

```

#### 度数

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failures.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Freq( :Count ),	Add Table( Row Table( Grouping Columns( :Causes ) ) ));

```

#### 複数の行テーブル

```jsl

dt = Open( "$SAMPLE_DATA/Children's Popularity.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Row Table( Grouping Columns( :Grades ) ),		Row Table( Grouping Columns( :Sports ) ),		Row Table( Grouping Columns( :Looks ) ),		Row Table( Grouping Columns( :Money ) )	));

```

#### 複数の行テーブルと列テーブル

```jsl

dt = Open( "$SAMPLE_DATA/Children's Popularity.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :gender ) ),		Column Table( Grouping Columns( :race ) ),		Row Table( Grouping Columns( :goals ) ),		Row Table( Grouping Columns( :"Urban/Rural"n ) )	));

```

#### 重み

```jsl

dt = Open( "$SAMPLE_DATA/Car Physical Data.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Weight( :Weight ),	Add Table(		Column Table( Analysis Columns( :Horsepower ), Statistics( Mean ) ),		Row Table( Grouping Columns( :Type ) )	));

```

## 項目のメッセージ

### Add

**構文:** add(&lt;Column Table | Row Table&gt;(table index), &lt;before first | &lt;before | after&gt;(&lt;analysis column | grouping column | statistic&gt;(&lt;operand name | index&gt;))&gt;, &lt;analysis column | grouping column | statistic&gt;(operand name)),

**説明:** 既存のテーブルに列や統計量を追加するときに、Modify Tableと一緒に使用する。Add Tableのエイリアスとしても使える。

#### 名前で指定された列の前に分析列を追加

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table( Column Table( Analysis Columns( :weight ) ) ));Wait( 0 );obj << Modify Table(	Column Table( 1 ),	Add( Before( Analysis Columns( :weight ) ), Analysis Columns( :height ) ));

```

#### 名前で指定された統計量の後に新しい統計量を追加

```jsl

dt = Open( "$SAMPLE_DATA/Companies.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table(			Grouping Columns( :Type ),			Analysis Columns( :"Sales ($M)"n, :Assets ),			Statistics( Min, Mean, Max )		)	));Wait( 0 );obj << Modify Table(	Column Table( 1 ),	Add( After( Statistics( Max ) ), Statistics( Range ) ));

```

#### 最初の統計量の前に新しい統計量を追加

```jsl

dt = Open( "$SAMPLE_DATA/Companies.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table(			Grouping Columns( :Type ),			Analysis Columns( :"Sales ($M)"n, :Assets ),			Statistics( Min, Mean, Max )		)	));Wait( 0 );obj << Modify Table( Column Table( 1 ), Add( Before First, Statistics( N ) ) );

```

#### 番号で指定された統計量の前に新しい統計量を追加

```jsl

dt = Open( "$SAMPLE_DATA/Companies.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table(			Grouping Columns( :Type ),			Analysis Columns( :"Sales ($M)"n, :Assets ),			Statistics( Min, Mean, Max )		)	));Wait( 0 );obj << Modify Table(	Column Table( 1 ),	Add( Before( Statistics( 2 ) ), Statistics( Median ) ));

```

### Add Table

**構文:** Add Table( &lt;Column Table( )&gt;, &lt;Row Table( )&gt; )

**説明:** 既存の表に、新たな表を追加する。既存の表がない場合には、ウィンドウに表を追加する。

#### 既存のテーブルに追加

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Add Table( Column Table( Grouping Columns( :type ) ) );

```

#### 空白のテーブルに追加

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Tabulate( Show Control Panel( 0 ) );obj << Add Table( Column Table( Grouping Columns( :sex ) ) );obj << Add Table( Row Table( Grouping Columns( :age ) ) );

```

### Aggregate Statistics

**構文:** Aggregate Statistics( column )

**説明:** 現在の表に、水準ごとの列と、その和の列を追加する。スクリプトの場合には、列テーブル(Column Table)メッセージ、もしくは、行テーブル(メッセージ)のなかに指定すること。

#### 新しいテーブルに追加するときに設定

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Analysis Columns( :OZONE ), Statistics( Mean ) ),		Row Table( Grouping Columns( :Region ), Aggregate Statistics( :Region ) )	));

```

#### 既存のテーブルに追加するときに設定

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table( Column Table( Analysis Columns( :OZONE ), Statistics( Mean ) ) ));obj << Modify Table(	Row Table( 1 ),	Grouping Columns( :Region ),	Aggregate Statistics( :Region ));

```

### Change Item Label

**構文:** obj &lt;&lt; Change Item Label( Statistics( stat name, new string ) )

**説明:** テキスト入力できる表のラベルを変更する。

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Analysis Columns( :OZONE ), Statistics( Mean ) ),		Row Table( Grouping Columns( :Region ) )	));obj << Change Item Label( Statistics( Mean, "Average" ) );

```

### Delete

**構文:** delete( &lt;analysis columns | grouping columns | statistics&gt;(operand name, operand name, ...))

**説明:** 既存のテーブルから列や統計量を削除するときに、Modify Tableと一緒に使用する。

#### 名前で指定された分析列を削除

```jsl

dt = Open( "$SAMPLE_DATA/Companies.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table(			Grouping Columns( :Type ),			Analysis Columns( :"Sales ($M)"n, :Assets ),			Statistics( Min, Mean, Max )		)	));Wait( 0 );obj << Modify Table( Column Table( 1 ), Delete( Analysis Columns( :Assets ) ) );

```

#### 番号で指定された統計量を削除

```jsl

dt = Open( "$SAMPLE_DATA/Companies.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table(			Grouping Columns( :Type ),			Analysis Columns( :"Sales ($M)"n, :Assets ),			Statistics( Min, Mean, Max )		)	));Wait( 0 );obj << Modify Table( Column Table( 1 ), Delete( Statistics( 1 ) ) );

```

### Display Column Width

**構文:** obj &lt;&lt; Display Column Width( Data Column( &lt;Column Table(n)&gt;, path ), &lt;width&gt; ); obj &lt;&lt; Display Column Width( Row Label( &lt;Row Table(n)&gt;, path ), &lt;width&gt; )

**説明:** 「表の作成」レポートの表における列の表示幅を設定する、または設定を戻す。Pathは、列のパスを示す一連の引用符付き列見出し。Widthは、列の幅をピクセルで表した値。Data Columnを使ってデータテーブルでの列名を指定するか、Row Labelを使って行ラベル領域での列名を指定する。レポートに複数の表がある場合は、Column Table(n)またはRow Table(n)を使って、どの表にpathが該当するかを指定する。widthを指定しなかった場合、このオプションは指定の列の現在の幅を戻す。

#### データ列を等しい幅に揃える

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Set Format( Mean( :OZONE( 6, 4 ) ) ),	Add Table(		Column Table( Analysis Columns( :OZONE ), Statistics( Min, Max, Mean, Std Dev ) ),		Row Table( Grouping Columns( :Region ) )	));stats = {"Min", "Max", "Mean", "Std Dev"};ns = N Items( stats );a = {};For( i = 1, i <= ns, i++,	a[i] = obj << Display Column Width( Data Column( "OZONE", stats[i] ) ));amax = Max( a );For( i = 1, i <= ns, i++,	obj << Display Column Width( Data Column( "OZONE", stats[i] ), amax ));

```

#### 列の幅を取得

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table(			Grouping Columns( :sex, :marital status ),			Analysis Columns( :age ),			Statistics( Sum, "% of Total" )		),		Row Table( Grouping Columns( :type ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Display Column Width(	Column( Column Table( 1 ), "sex", "Female", "Marital status", "Single", "age", "Sum" ));

```

#### 行ラベルの幅を設定

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table(			Grouping Columns( :sex, :marital status ),			Analysis Columns( :age ),			Statistics( Sum, "% of Total" )		),		Row Table( Grouping Columns( :type ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Display Column Width( Row Label( Row Table( 2 ), "country" ), 150 );

```

### Full Path Column Name

**構文:** obj &lt;&lt; Full Path Column Name( true | false )

**説明:** これを設定した場合、出力テーブルの列名にはグループ化列名が含まれている必要があります。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Full Path Column Name( 1 );obj << Make Into Data Table;

```

### Ignore duplicate responses

**構文:** obj &lt;&lt; Ignore duplicate responses( Grouping Columns( column ), true | false )

**JMP追加されたバージョン:** 19

#### 新しいテーブルで設定

```jsl

dt = Open( "$Sample_Data/Big Class Families.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Ignore Duplicate Responses( Grouping Columns( :family cars ), 1 ),	Add Table(		Column Table( Grouping Columns( :family cars ) ),		Row Table( Grouping Columns( :sex, :age ) )	));

```

#### 既存のテーブルに設定

```jsl

dt = Open( "$Sample_Data/Big Class Families.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :family cars ) ),		Row Table( Grouping Columns( :sex, :age ) )	));obj << Ignore Duplicate Responses( Grouping Columns( :family cars ), 1 );

```

### Ignore duplicates in multiple response columns

**構文:** obj &lt;&lt; Ignore duplicates in multiple response columns( state=0|1 )

**説明:** 多重応答の列で重複した応答を無視する。重複した応答は、1つの応答として扱われる。

**JMP追加されたバージョン:** 19

#### 新しいテーブルで設定

```jsl

dt = Open( "$Sample_Data/Big Class Families.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Ignore Duplicates In Multiple Response Columns( 1 ),	Add Table(		Column Table( Grouping Columns( :family cars ) ),		Row Table( Grouping Columns( :sex, :age ) )	));

```

#### 既存のテーブルに設定

```jsl

dt = Open( "$Sample_Data/Big Class Families.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :family cars ) ),		Row Table( Grouping Columns( :sex, :age ) )	));obj << Ignore Duplicates In Multiple Response Columns( 1 );

```

### Include missing for grouping columns

**構文:** obj &lt;&lt; Include missing for grouping columns( state=0|1 )

**説明:** 現在の表にあるすべてのグループ列に対して、欠測値の度数を含んだ列を追加する。

#### 新しいテーブルで設定

```jsl

dt = Open( "$SAMPLE_DATA/Cars.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Include Missing For Grouping Columns( 1 ),	Add Table( Row Table( Grouping Columns( :Doors ) ) ));

```

#### 既存のテーブルに設定

```jsl

dt = Open( "$SAMPLE_DATA/Cars.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table( Row Table( Grouping Columns( :Doors ) ) ));obj << Include Missing For Grouping Columns( 1 );

```

### Make Into Data Table

**構文:** obj &lt;&lt; Make Into Data Table( &lt;Invisible(bool) | Private(bool)&gt;, &lt;Output Table( table name)&gt;, &lt;Full Path Column Name(bool)&gt; )

**説明:** 「表の作成」で作成した表から、新しいデータテーブルを作成する。

#### データテーブルに出力

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Make Into Data Table;

```

#### フルパスの列名を使用

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Make into Data Table( Full Path Column Name( 1 ) );

```

#### 非表示のデータテーブルに出力

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Make into Data Table( Invisible( 1 ) );

```

### Max scroll locked columns

**構文:** obj &lt;&lt; Max scroll locked columns( number=3 )

**説明:** スクロールロックする列の最大数を設定する。行見出しの列は、すべてロックするか、すべてロックしないかのいずれかになる。 デフォルトではオン。

**JMP追加されたバージョン:** 19

#### 見出しの列数が上限を超えていない

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Scroll Lock Row Headers In Data Table Export( 1 );obj << Max Scroll Locked Columns( 2 );obj << Make Into Data Table;

```

#### 見出しの列数が上限を超えている

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Scroll Lock Row Headers In Data Table Export( 1 );obj << Max Scroll Locked Columns( 1 );obj << Make Into Data Table;

```

### Missing sum is zero

**構文:** obj &lt;&lt; Missing sum is zero( state=0|1 )

**説明:** 要約統計量「合計」の欠測値を0と欠測値のどちらで表示するかを指定する。

#### 新しいテーブルで設定

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Missing Sum Is Zero( 1 ),	Add Table(		Column Table( Analysis Columns( :height ), Grouping Columns( :sex ) ),		Row Table( Grouping Columns( :name ) )	));

```

#### 既存のテーブルに設定

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Analysis Columns( :height ), Grouping Columns( :sex ) ),		Row Table( Grouping Columns( :name ) )	));obj << Missing Sum Is Zero( 1 );

```

### Modify Table

**構文:** obj &lt;&lt; Modify Table( &lt;Column Table | Row Table&gt;(table index), ... )

**説明:** 既存のテーブルを変更する。

#### フルテーブルを作成してから編集

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Tabulate( Show Control Panel( 0 ) );obj << Add Table( Column Table( Grouping Columns( :sex ) ) );obj << Add table( Row Table( Grouping Columns( :age ) ) );obj << Add Table( Column Table( Analysis Columns( :height ) ) );obj << Add Table( Column Table( Analysis Columns( :weight ) ) );obj << Modify Table( Column Table( 2 ), Statistics( Min, Max ) );obj << Modify Table( Column Table( 2 ), Grouping Columns( :sex ) );obj << Modify Table( Column Table( 2 ), Analysis Columns( :weight ) );Wait( 1 );obj << Modify Table( Column Table( 2 ), Delete( Analysis Columns( :weight ) ) );obj << Modify Table( Column Table( 2 ), Delete( Statistics( Sum ) ) );

```

#### 分析列を削除

```jsl

dt = Open( "$SAMPLE_DATA/Companies.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table(			Grouping Columns( :Type ),			Analysis Columns( :"Sales ($M)"n, :Assets ),			Statistics( Min, Mean, Max )		)	));Wait( 0 );obj << Modify Table( Column Table( 1 ), Delete( Analysis Columns( :Assets ) ) );

```

### Modify Table Option

**構文:** obj &lt;&lt; Modify Table Option

**説明:** 既存のテーブルのテーブルオプションを変更するときに、Modify Tableと一緒に使用する。

#### 既存のテーブルでグループ列を積み重ね

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Analysis Columns( :height ), Statistics( Mean ) ),		Row Table( Grouping Columns( :age, :sex ) )	));obj << Modify Table( Row Table( 1 ), Modify Table Option( Stack Grouping Columns( true ) ) );

```

#### 既存のテーブルで積み重ねたグループのラベルを変更

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Analysis Columns( :height ), Statistics( Mean ) ),		Row Table( Grouping Columns( :age, :sex ), Stack Grouping Columns( 1 ) )	));obj << Modify Table(	Row Table( 1 ),	Modify Table Option( Change Stacked Group Label ),	"new label");

```

### Move

**構文:** move(&lt;Column Table | Row Table&gt;(table index), &lt;analysis column | grouping column | statistic&gt;(&lt;operand name | index&gt;)), &lt;before first | &lt;before | after&gt;(&lt;analysis column | grouping column | statistic&gt;(&lt;operand name | index&gt;)&gt;)

**説明:** 既存のテーブルで列や統計量を移動させるときに、Modify Tableと一緒に使用する。

**JMP追加されたバージョン:** 19

#### 列テーブルのグループ列を行テーブルに移動

```jsl

dt = Open( "$SAMPLE_DATA/Companies.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table(			Grouping Columns( :Type ),			Analysis Columns( :"Sales ($M)"n, :Assets ),			Statistics( Min, Mean, Max )		)	));Wait( 0 );obj << Modify Table(	Row Table( 1 ),	Move( Column Table( 1 ), Grouping Column( :Type ) ),	Before First);

```

#### 名前で指定された統計量の後に統計量を移動

```jsl

dt = Open( "$SAMPLE_DATA/Companies.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table(			Grouping Columns( :Type ),			Analysis Columns( :"Sales ($M)"n, :Assets ),			Statistics( Min, Mean, Max )		)	));Wait( 0 );obj << Modify Table(	Column Table( 1 ),	Move( Column Table( 1 ), Statistics( Mean ) ),	After( Statistics( Max ) ));

```

### Order By Count

**構文:** obj &lt;&lt; Order By Count( Grouping Columns( column ), true | false )

#### 新しいテーブルで設定

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Order By Count( Grouping Columns( :age ), 1 ),	Add Table( Row Table( Grouping Columns( :age ) ) ));

```

#### 既存のテーブルに設定

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table( Row Table( Grouping Columns( :age ) ) ));obj << Order By Count( Grouping Columns( :age ), 1 );

```

### Order by count of grouping columns

**構文:** obj &lt;&lt; Order by count of grouping columns( state=0|1 )

**説明:** グループ変数の水準を表内で度数順に並べる。

#### 新しいテーブルで設定

```jsl

dt = Open( "$SAMPLE_DATA/Cars.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Order by Count of Grouping Columns( 1 ),	Add Table( Row Table( Grouping Columns( :Make ) ) ));

```

#### 既存のテーブルに設定

```jsl

dt = Open( "$SAMPLE_DATA/Cars.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table( Row Table( Grouping Columns( :Make ) ) ));obj << Order by Count of Grouping Columns( 1 );

```

### Pack

**構文:** obj &lt;&lt; Pack( &lt;Analysis columns | Statistics&gt;(operand name, ...), &lt;Template&gt; )

**説明:** テーブルの複数の統計量を1列にまとめる。Templateオプションで、項目の表示形式を指定する。

#### 新しいテーブルでテンプレートを指定して分析列をパック

```jsl

dt = Open( "$SAMPLE_DATA/Hybrid Fuel Economy.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table(			Statistics( Sum ),			Analysis Columns( :City MPG, :Hwy MPG, :Comb MPG ),			Pack(				Analysis Columns( City MPG, Hwy MPG, Comb MPG ),				Template( "^FIRST  (^OTHERS)", "/" )			)		),		Row Table( Grouping Columns( :Mfr Name, :Engine ) )	));

```

#### 新しいテーブルで分析列をパック

```jsl

dt = Open( "$SAMPLE_DATA/Hybrid Fuel Economy.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table(			Statistics( Sum ),			Analysis Columns( :City MPG, :Hwy MPG, :Comb MPG ),			Pack( Analysis Columns( City MPG, Hwy MPG, Comb MPG ) )		),		Row Table( Grouping Columns( :Mfr Name, :Engine ) )	));

```

#### 既存のテーブルで分析列をパック

```jsl

dt = Open( "$SAMPLE_DATA/Hybrid Fuel Economy.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Statistics( Sum ), Analysis Columns( :City MPG, :Hwy MPG, :Comb MPG ) ),		Row Table( Grouping Columns( :Mfr Name, :Engine ) )	));obj << Modify Table(	Column Table( 1 ),	Pack(		Analysis Columns( City MPG, Hwy MPG, Comb MPG ),		Template( "^FIRST  (^OTHERS)", "/" )	));

```

### Plot Scale

**構文:** obj &lt;&lt; Plot Scale( min, max )

**説明:** 棒グラフのスケールを設定する。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Show Chart( 1 );Wait( 2 );obj << Plot Scale( 0, 25 );

```

### Remove Column Label

**構文:** obj &lt;&lt; Remove Column Label( Grouping Columns( column ) )

**説明:** 表において指定の列のラベルを削除する。

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :Region ) ),		Row Table( Analysis Columns( :OZONE, :CO, :NO, :SO2 ), Statistics( Mean ) )	));Wait( 2 );obj << Remove Column Label( Grouping Columns( :Region ) );

```

### Restore Column Label

**構文:** obj &lt;&lt; Restore Column Label( Grouping Columns( column ) )

**説明:** 表において、一度削除した指定の列のラベルを復元する。

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :Region ) ),		Row Table( Analysis Columns( :OZONE, :CO, :NO, :SO2 ), Statistics( Mean ) )	));obj << Remove Column Label( Grouping Columns( :Region ) );Wait( 2 );obj << Restore Column Label( Grouping Columns( :Region ) );

```

### Retype

**構文:** Retype( &lt;Analysis Columns | Grouping Columns&gt;( operand name, ... ), &lt;Analysis Column | Gropuing Column&gt; )

**説明:** 既存のテーブルで、列のタイプ(分析列またはグループ変数)を変換するときに、Modify Tableと一緒に使用する。

**JMP追加されたバージョン:** 19

#### グループ列を分析列に変更

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Statistics( N ), Grouping Columns( :age ) ),		Row Table( Grouping Columns( :sex ) )	));obj << Modify Table( Column Table( 1 ), Retype( Grouping Column( :age ) ), Analysis Column );

```

#### 分析列をグループ列に変更

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Statistics( N ), Analysis Columns( :age ) ),		Row Table( Grouping Columns( :sex ) )	));obj << Modify Table( Column Table( 1 ), Retype( Analysis Column( :age ) ), Grouping Column );

```

### Save grouping as tags in data table export

**構文:** obj &lt;&lt; Save grouping as tags in data table export( state=0|1 )

**説明:** グループ変数の水準を列のタグとしてデータテーブルに含めるかどうかを設定する。 デフォルトではオン。

**JMP追加されたバージョン:** 19

#### タグを保存

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Save Grouping As Tags In Data Table Export( 1 );obj << Make Into Data Table;

```

#### タグを保存しない

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Save Grouping As Tags In Data Table Export( 0 );obj << Make Into Data Table;

```

### Scroll lock row headers in data table export

**構文:** obj &lt;&lt; Scroll lock row headers in data table export( state=0|1 )

**説明:** 行見出しが含まれている列をスクロールロックするかどうかを設定する。 デフォルトではオン。

**JMP追加されたバージョン:** 19

#### 行見出しのスクロールロック

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Scroll Lock Row Headers In Data Table Export( 1 );obj << Make Into Data Table;

```

#### 行見出しのスクロールロックをしない

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Scroll Lock Row Headers In Data Table Export( 0 );obj << Make Into Data Table;

```

### Set Format

**構文:** Set Format( statistic( Column( format ) )

**説明:** 分析列に対する表示形式を設定する。

#### 1つの統計量と分析列の形式を設定

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Set Format( Mean( :OZONE( 6, 4 ) ) ),	Add Table(		Column Table( Analysis Columns( :OZONE ), Statistics( Mean ) ),		Row Table( Grouping Columns( :Region ) )	));

```

#### 分析列なしで1つの統計量の形式を設定

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Set Format( Row %( Format( 9, 1, "Percent" ) ) ),	Add Table( Column Table( Grouping Columns( :age ), Statistics( Row % ) ) ));

```

#### 既存のテーブルで形式を設定

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Analysis Columns( :OZONE ), Statistics( Mean ) ),		Row Table( Grouping Columns( :Region ) )	));obj << Set Format( Mean( :OZONE( 6, 4 ) ) );

```

#### 複数の統計量と分析列の形式を設定

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Tabulate(	Show Control Panel( 0 ),	Set Format(		Mean(			:height( 10, 1 ),			Analysis Column(				Transform Column( "Log[height]", Formula( Log( :height ) ) ),				Format( 10, "Best" )			)		),		"% of Total"n(			:height( 12, 2 ),			Analysis Column(				Transform Column( "Log[height]", Formula( Log( :height ) ) ),				Format( 12, 2 )			)		)	),	Add Table(		Column Table(			Analysis Columns(				:height,				Transform Column( "Log[height]", Formula( Log( :height ) ) )			),			Statistics( Mean, "% of Total"n )		),		Row Table( Grouping Columns( :sex ) )	));

```

### Show Chart

**構文:** obj &lt;&lt; Show Chart( state=0|1 )

**説明:** 作成された表において、棒グラフの表示/非表示を切り替える。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Show Chart( 1 );

```

### Show Control Panel

**構文:** obj &lt;&lt; Show Control Panel( state=0|1 )

**説明:** 表の作成に用いる設定パネルの表示/非表示を切り替える。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Show Control Panel( 1 );

```

### Show Shading

**構文:** obj &lt;&lt; Show Shading( state=0|1 )

**説明:** 作成された表において、陰影付きと陰影なしで交互に行を表示する機能のオン/オフを切り替える。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Show Shading( 1 );

```

### Show Table

**構文:** obj &lt;&lt; Show Table( state=0|1 )

**説明:** 作成された表の表示/非表示を切り替える。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Show Table( 1 );

```

### Show Test Build Panel

**構文:** obj &lt;&lt; Show Test Build Panel( state=0|1 )

**説明:** テスト集計の標本抽出を制御するパネルの表示/非表示を切り替える。

#### 新しいテーブルのパネルを表示

```jsl

dt = Open( "$SAMPLE_DATA/Cytometry.jmp" );obj = dt << Tabulate(	Show Control Panel( 1 ),	Show Test Build Panel( 1 ),	Add Table(		Column Table( Statistics( Mean, Std Dev ) ),		Row Table( Analysis Columns( :ForSc, :SideSc, :CD3, :CD8, :CD4, :MCB ) )	));

```

#### 既存のテーブルのパネルを表示

```jsl

dt = Open( "$SAMPLE_DATA/Cytometry.jmp" );obj = dt << Tabulate(	Show Control Panel( 1 ),	Add Table(		Column Table( Statistics( Mean, Std Dev ) ),		Row Table( Analysis Columns( :ForSc, :SideSc, :CD3, :CD8, :CD4, :MCB ) )	));obj << Show Test Build Panel( 1 );

```

### Show Tooltip

**構文:** obj &lt;&lt; Show Tooltip( state=0|1 )

**説明:** 表の作成において、ドロップゾーンやメニューの上にマウスポインタを置いたときにツールヒントを表示する機能のオン/オフを切り替える。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Show Tool Tip( 1 );

```

### Stack Grouping Columns

**構文:** Stack Grouping Columns(0 | 1)

**説明:** グループ列を1つの列に積み重ね、インデントを使って入れ子構造で表示する。

#### 新しいテーブルで設定

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table(			Grouping Columns( :marital status ),			Add Aggregate Statistics( :marital status ),			Analysis Columns( :age ),			Statistics( Min, Max )		),		Row Table(			Grouping Columns( :sex, :country, :size ),			Add Aggregate Statistics( :sex, :country, :size ),			Stack Grouping Columns( 1 )		)	));

```

#### 既存のテーブルに設定

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table(			Grouping Columns( :marital status ),			Add Aggregate Statistics( :marital status ),			Analysis Columns( :age ),			Statistics( Min, Max )		),		Row Table(			Grouping Columns( :sex, :country, :size ),			Add Aggregate Statistics( :sex, :country, :size )		)	));obj << Modify Table( Row Table( 1 ), Modify Table Option( Stack Grouping Columns( 1 ) ) );

```

### Statistics

**構文:** Statistics( N|Mean|Std Dev|Min|Max|Range|% of Total|N Missing|N Categories|Sum|Sum Wgt|Variance|Std Err|CV|Median|Interquartile Range|Quantiles|Column %|Row %|All )

**説明:** 表の列または行に統計量を追加する。スクリプトの場合には、統計量(Statistics)メッセージを分析列(Analysis Columns)メッセージの前に置き、列テーブル(Column Table)メッセージ、もしくは、行テーブル(メッセージ)のなかに指定すること。

#### 新しいテーブルに追加

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Analysis Columns( :OZONE ), Statistics( Mean, Max ) ),		Row Table( Grouping Columns( :Region ) )	));

```

#### 既存のテーブルに追加

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Analysis Columns( :OZONE ), Statistics( Mean, Max ) ),		Row Table( Grouping Columns( :Region ) )	));obj << Modify Table( Column Table( 1 ), Statistics( Min ) );

```

### Test Build

**構文:** obj &lt;&lt; Test Build( Sample Size( number ) )

**説明:** データサイズがnumberであるテスト集計の標本を使用したテーブルを表示する。

#### 新しいテーブルで設定

```jsl

dt = Open( "$SAMPLE_DATA/Cytometry.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Test Build( Sample Size( 100 ) ),	Add Table(		Column Table( Statistics( Mean, Std Dev ) ),		Row Table( Analysis Columns( :ForSc, :SideSc, :CD3, :CD8, :CD4, :MCB ) )	));

```

#### 既存のテーブルに設定

```jsl

dt = Open( "$SAMPLE_DATA/Cytometry.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Statistics( Mean, Std Dev ) ),		Row Table( Analysis Columns( :ForSc, :SideSc, :CD3, :CD8, :CD4, :MCB ) )	));obj << Test Build( Sample Size( 100 ) );

```

### Test Data View

**構文:** obj &lt;&lt; Test Data View

**説明:** テスト集計で使用した標本のデータテーブルを表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Cytometry.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Statistics( Mean, Std Dev ) ),		Row Table( Analysis Columns( :ForSc, :SideSc, :CD3, :CD8, :CD4, :MCB ) )	));obj << Test Build( Sample Size( 100 ) );obj << Test Data View;

```

### Undo

**構文:** obj &lt;&lt; Undo

**説明:** 現在の表に対して行われた最後の操作を取り消す。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Add Table( Column Table( Grouping Columns( :type ) ) );Wait( 2 );obj << Undo;

```

### Uniform plot scale

**構文:** obj &lt;&lt; Uniform plot scale( state=0|1 )

**説明:** すべてのサブカテゴリに対して、棒グラフのスケールを同じにする。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Show Chart( 1 );Wait( 2 );obj << Uniform Plot Scale( 1 );

```

### Unpack

**構文:** obj &lt;&lt; Unpack( &lt;Analysis columns | Statistics&gt;(operand name, ...) )

**説明:** パッキングした列をアンパックする。

```jsl

dt = Open( "$SAMPLE_DATA/Hybrid Fuel Economy.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table(			Statistics( Sum ),			Analysis Columns( :City MPG, :Hwy MPG, :Comb MPG ),			Pack(				Analysis Columns( City MPG, Hwy MPG, Comb MPG ),				Template( "^FIRST  (^OTHERS)", "/" )			)		),		Row Table( Grouping Columns( :Mfr Name, :Engine ) )	));obj << Modify Table( Column Table( 1 ), Unpack( Analysis Columns( :City MPG ) ) );

```

