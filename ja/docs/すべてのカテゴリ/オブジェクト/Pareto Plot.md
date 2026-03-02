# Pareto Plot



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

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );obj << Show Pareto Bars( 0 );obj << Automatic Recalc( 1 );dt << Select Rows( 5 ) << Exclude( 1 );

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

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Pareto Plot(	Cause( :failure ),	X( :clean ),	Freq( :N ),	Show Pareto Line( 1 ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj << Show Pareto Bars( 0 );obj[1] << Copy ByGroup Script;

```

### Copy Script

**構文:** obj &lt;&lt; Copy Script

**説明:** この分析を再現するJSLスクリプトを生成し、クリップボードにコピーする。

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );obj << Show Pareto Bars( 0 );obj << Copy Script;

```

### Data Table Window

**構文:** obj &lt;&lt; Data Table Window

**説明:** この分析に使用したデータテーブルのウィンドウを手前に表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );obj << Show Pareto Bars( 0 );obj << Data Table Window;

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

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Pareto Plot(	Cause( :failure ),	X( :clean ),	Freq( :N ),	Show Pareto Line( 1 ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj << Show Pareto Bars( 0 );t = obj[1] << Get ByGroup Script;Show( t );

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

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );obj << Show Pareto Bars( 0 );t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

### Get Data Table

**構文:** obj &lt;&lt; Get Data Table

**説明:** データテーブルへの参照を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );obj << Show Pareto Bars( 0 );t = obj << Get Datatable;Show( N Rows( t ) );

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

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );obj << Show Pareto Bars( 0 );t = obj << Get Script;Show( t );

```

### Get Script With Data Table

**構文:** obj &lt;&lt; Get Script With Data Table

**説明:** この分析を再現するスクリプト(JSL)をデータテーブルへの参照も含めて生成し、それを式として戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );obj << Show Pareto Bars( 0 );t = obj << Get Script With Data Table;Show( t );

```

### Get Timing

**構文:** obj &lt;&lt; Get Timing

**説明:** プラットフォームの起動にかかった時間を取得する。

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );obj << Show Pareto Bars( 0 );t = obj << Get Timing;Show( t );

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

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );obj << Show Pareto Bars( 0 );obj << Redo Analysis;

```

### Relaunch Analysis

**構文:** obj &lt;&lt; Relaunch Analysis

**説明:** プラットフォームの起動ウィンドウを開き、レポートを作成した時の設定を表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );obj << Show Pareto Bars( 0 );obj << Relaunch Analysis;

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

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );obj << Show Pareto Bars( 0 );r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Report View

**構文:** obj &lt;&lt; Report View( "完全"|"要約" )

**説明:** レポートビューは、プラットフォームレポートの詳細を表示するかどうかを決定する。Fullはすべての詳細を表示し、Summaryはプラットフォームにより限定されたものだけを表示する。 動作をカスタマイズするため、各ディスプレイボックスは<<Set Summary Behaviorメッセージをサポートする。

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );obj << Show Pareto Bars( 0 );obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**構文:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**説明:** 分析を再現するためのJSLスクリプトを作成し、データテーブルにテーブルプロパティとして保存する。スクリプトの名前を指定できる。Append Suffixオプションは、スクリプト名に数字の接尾辞を追加する。これにより、同名のスクリプトが存在していても区別できる。Promptオプションは、ユーザにスクリプト名の指定を促す。Replaceオプションは、同名の既存のスクリプトを置き換える。

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Pareto Plot(	Cause( :failure ),	X( :clean ),	Freq( :N ),	Show Pareto Line( 1 ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj << Show Pareto Bars( 0 );obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**構文:** obj &lt;&lt; Save ByGroup Script to Journal

**説明:** この分析を再現するJSLスクリプトを生成し、ジャーナルにそのスクリプトのボタンを追加する。

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Pareto Plot(	Cause( :failure ),	X( :clean ),	Freq( :N ),	Show Pareto Line( 1 ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj << Show Pareto Bars( 0 );obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**構文:** obj &lt;&lt; Save ByGroup Script to Script Window

**説明:** この分析を再現するJSLスクリプトを生成し、現在のスクリプトウィンドウに表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Pareto Plot(	Cause( :failure ),	X( :clean ),	Freq( :N ),	Show Pareto Line( 1 ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj << Show Pareto Bars( 0 );obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**構文:** obj &lt;&lt; Save Script for All Objects

**説明:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );obj << Show Pareto Bars( 0 );obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**構文:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**説明:** すべてのレポートオブジェクトを再現するスクリプトを現在のデータテーブルに保存する。このオプションは、ウィンドウ内にレポートが複数ある場合に便利。作成されるスクリプトの名前は、引用符で囲んで指定しない限り、1つ目のプラットフォーム名となる。

**例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Pareto Plot(	Cause( :failure ),	X( :clean ),	Freq( :N ),	Show Pareto Line( 1 ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj << Show Pareto Bars( 0 );obj[1] << Save Script for All Objects To Data Table;

```

**例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Pareto Plot(	Cause( :failure ),	X( :clean ),	Freq( :N ),	Show Pareto Line( 1 ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj << Show Pareto Bars( 0 );obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**構文:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**説明:** この分析を再現するJSLスクリプトを生成し、データテーブルのテーブルプロパティとして保存する。

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );obj << Show Pareto Bars( 0 );obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**構文:** obj &lt;&lt; Save Script to Journal

**説明:** この分析を再現するJSLスクリプトを生成し、ジャーナルにそのスクリプトのボタンを追加する。

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );obj << Show Pareto Bars( 0 );obj << Save Script to Journal;

```

### Save Script to Report

**構文:** obj &lt;&lt; Save Script to Report

**説明:** この分析を再現するJSLスクリプトを生成し、レポートウィンドウに表示する。分析手順の記録を結果と一緒に残せる。

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );obj << Show Pareto Bars( 0 );obj << Save Script to Report;

```

### Save Script to Script Window

**構文:** obj &lt;&lt; Save Script to Script Window

**説明:** この分析を再現するJSLスクリプトを生成し、現在のスクリプトウィンドウに表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );obj << Show Pareto Bars( 0 );obj << Save Script to Script Window;

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

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );obj << Show Pareto Bars( 0 );obj << Title( "My Platform" );

```

### Top Report

**構文:** obj &lt;&lt; Top Report

**説明:** レポート内のルートノードへの参照を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );obj << Show Pareto Bars( 0 );r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

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

**構文:** obj = Show Pareto Bars(...Window View( "Visible"|"Invisible"|"Private" )...)

**説明:** レポートとして作成するウィンドウの種類を設定する。デフォルトでは、Visibleレポートウィンドウが作成される。Invisible のウィンドウは画面に表示されないが、Window()などの関数によって検出できる。Private のウィンドウにはほとんどのウィンドウメッセージを送れるが、検出することはできないため、レポートオブジェクトを通してアクセスする必要がある。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

## 列

### By

**構文:** obj &lt;&lt; By( column(s) )

**説明:** 指定された列の各水準に対して、個別に分析を実行する。

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Pareto Plot(	Cause( :failure ),	X( :clean ),	Freq( :N ),	Show Pareto Line( 1 ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj << Show Pareto Bars( 0 );

```

### Cause

**構文:** obj &lt;&lt; Cause( column )

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );obj << Show Pareto Bars( 0 );

```

### Freq

**構文:** obj &lt;&lt; Freq( column )

**説明:** 分析の際に各行の度数として用いる値の列を指定する。

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );dt << New Column( "_freqcol", Numeric, Continuous, Set Each Value( Random Integer( 1, 5 ) ) );obj = dt << Pareto Plot(	Cause( :failure ),	X( :clean ),	Freq( :N ),	Show Pareto Line( 1 ),	Freq( :_freqcol ));obj << Show Pareto Bars( 0 );

```

### Grouping

**構文:** obj &lt;&lt; Grouping( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );obj << Show Pareto Bars( 0 );

```

### Subcategory

**構文:** obj &lt;&lt; Subcategory( column )

**JMP追加されたバージョン:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );obj << Show Pareto Bars( 0 );

```

### Weight

**構文:** obj &lt;&lt; Weight( column )

**説明:** 分析の際に各行の重みとして用いる値の列を指定する。

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );dt << New Column( "_weightcol", Numeric, Continuous, Set Each Value( Random Beta( 1, 1 ) ) );obj = dt << Pareto Plot(	Cause( :failure ),	X( :clean ),	Freq( :N ),	Show Pareto Line( 1 ),	Weight( :_weightcol ));obj << Show Pareto Bars( 0 );

```

### X

**構文:** obj &lt;&lt; X( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );obj << Show Pareto Bars( 0 );

```

### Y

**構文:** obj &lt;&lt; Y( column )

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );obj << Show Pareto Bars( 0 );

```

## 項目のメッセージ

### Alias

**構文:** obj &lt;&lt; Alias( cause, alias )

**説明:** 原因に別の名前を設定する。

**JMP追加されたバージョン:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ), Alias( "doping", "substitution" ) );

```

### Bar Label Format

**構文:** obj &lt;&lt; Bar Label Format

**説明:** パレート図の棒ラベルの表示形式を設定する。

**JMP追加されたバージョン:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure.jmp" );obj = dt << Pareto Plot(	Cause( :failure ),	Freq( :N ),	Label( 1 ),	Bar Label Format( "Currency", "USD", Use thousands separator( 0 ), 12, 0 ));

```

### Bar Style

**構文:** obj &lt;&lt; Bar Style( "棒グラフ"|"フロート" )

**説明:** パレート図の棒の表示を制御する。

**JMP追加されたバージョン:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ) );obj << Bar Style( Float );

```

### Cause Colors

**構文:** obj &lt;&lt; Cause Colors( { { causeName, color }, ...} )

**説明:** 指定の棒の色を変更する。

**JMP追加されたバージョン:** 17

#### 1つの色(RGB)

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ), Show Cum Percent Points( 1 ) );obj << Cause Colors( {117, 150, 200} );

```

#### 1つの色のリスト

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ), Show Cum Percent Points( 1 ) );obj << Cause Colors( {"corrosion", "Light Gray"} );

```

#### 全体の色

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ), Show Cum Percent Points( 1 ) );obj << Cause Colors( "Orange" );

```

#### 複数の色のリスト

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ), Show Cum Percent Points( 1 ) );obj << Cause Colors( {{"miscellaneous", "Purple"}, {"silicon defect", "Red"}} );

```

### Cause Labels

**構文:** obj &lt;&lt; Cause Labels( { { causeName, 0|1 }, ...} )

**説明:** 指定の棒に対して、度数のラベルを表示する。

**JMP追加されたバージョン:** 17

#### 1つの原因

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot(	Cause( :failure ),	Freq( :N ),	Cause Labels( {"contamination", 1} ));

```

#### すべての原因

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ), Cause Labels( 1 ) );

```

#### 原因のリスト

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot(	Cause( :failure ),	Freq( :N ),	Cause Labels( {{"contamination", 1}, {"oxide defect", 1}} ));

```

### Cause Markers

**構文:** obj &lt;&lt; Cause Markers( { { causeName, marker }, ...} )

**説明:** 累積パーセントを示す、指定の棒のマーカーを変更する。

**JMP追加されたバージョン:** 17

#### 1つの原因

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ), Show Cum Percent Points( 1 ) );obj << Cause Markers( {"silicon defect", "Diamond"} );

```

#### すべての原因

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ), Show Cum Percent Points( 1 ) );obj << Cause Markers( 1 );

```

#### 原因のリスト

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ), Show Cum Percent Points( 1 ) );obj << Cause Markers( {{"miscellaneous", "Square"}, {"silicon defect", "Diamond"}} );

```

### Combine Causes

**構文:** obj &lt;&lt; Combine Causes( {cause1, cause2, ... } | &lt;&lt; First(N) | &lt;&lt; Last(N), &lt;label&gt; )

**説明:** 指定された原因を1つの原因に組み合わせる。原因は、名前のリストとして指定することも、FirstまたはLastメッセージで数を指定して送信することもできる。オプションで、組み合わされた原因のラベルを指定できる。

#### ラベルなし

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ) );Wait( 2 );obj << Combine Causes( {"miscellaneous", "silicon defect", "doping"} );

```

#### ラベル指定

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot(	Cause( :failure ),	Freq( :N ),	Combine Causes( {"miscellaneous", "silicon defect", "doping"}, "Others" ));

```

#### 最後尾に移動

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot(	Cause( :failure ),	Freq( :N ),	Combine Causes( <<Last( 2 ), "Last 2" ));

```

### Cum Line Connect Style

**構文:** obj &lt;&lt; Cum Line Connect Style( "直線"|"曲線"|"ステップ " )

**説明:** 累積パーセント曲線の連結スタイルを制御する。

**JMP追加されたバージョン:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ) );obj << Cum Line Connect Style( "Step" );

```

### Cum Percent Curve Color

**構文:** obj &lt;&lt; Cum Percent Curve Color( color )

**説明:** グラフ上で累積パーセント曲線の色を変更する。

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ) );obj << Cum Percent Curve Color( "Red" );

```

### Cum Percent Label Format

**構文:** obj &lt;&lt; Cum Percent Label Format

**説明:** 累積パーセントマーカーの、ラベルの表示形式を設定する。

**JMP追加されたバージョン:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure.jmp" );obj = dt << Pareto Plot(	Cause( :failure ),	Freq( :N ),	Label Cum Percent Points( 1 ),	Cum Percent Label Format( "Percent", 12, 1 ));

```

### Get Causes

**構文:** obj &lt;&lt; Get Causes( &lt;"First" | "Last" | "First %" | "Last %", number&gt; )

**説明:** パレート図から、現在の出現順序に基づく原因名のリストを戻す。オプションが指定されていない場合、すべての原因が戻される。それ以外の場合は、キーワードと数値の指定により、最初のN個、最後のN個、最初のNパーセント、最後のNパーセントのいずれかが戻される。

**JMP追加されたバージョン:** 17

**例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failures.jmp" );obj = dt << Pareto Plot( Cause( :Causes ), Freq( :Count ) );obj << Get Causes;

```

**例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failures.jmp" );obj = dt << Pareto Plot( Cause( :Causes ), Freq( :Count ) );obj << Get Causes( "First", 3 );

```

**例 3**

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failures.jmp" );obj = dt << Pareto Plot( Cause( :Causes ), Freq( :Count ) );obj << Get Causes( "Last %", 10 );

```

**例 4**

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failures.jmp" );obj = dt << Pareto Plot(	Cause( :Causes ),	Freq( :Count ),	Combine Causes( {"Corrosion", "Metallization", "Doping"}, "3 Others" ),	Move to Last( {"3 Others"} ));obj << Get Causes( "Last", 3 );

```

### Group Settings

**構文:** obj &lt;&lt; Group Settings( Column, &lt;Levels In View( number )&gt;, &lt;Start Level( number ), &lt;Show Title (0|1)&gt;, &lt;Title Color( color )&gt;, &lt;Levels Color( color )&gt; )

**説明:** グループ変数が指定されたパレート図の表示スタイルを制御する。

**JMP追加されたバージョン:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot(	Cause( :failure ),	X( :clean ),	Freq( :N ),	Group Settings(		:clean,		Levels In View( 1 ),		Start Level( 1 ),		Title Color( "Blue" ),		Levels Color( "Light Blue" )	));

```

### Label Cum Percent Points

**構文:** obj &lt;&lt; Label Cum Percent Points( state=0|1 )

**説明:** グラフ上で各棒の累積パーセントを示すラベルの表示/非表示を切り替える。

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ) );obj << Label Cum Percent Points( 1 );

```

### Legend Position

**構文:** obj &lt;&lt; Legend Position( ("Right" | "Bottom" | "Left" | "Top") )

**説明:** 凡例の位置を設定する。

**JMP追加されたバージョン:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ) );obj << Legend Position( "Bottom" );

```

### Legend Settings

**構文:** obj &lt;&lt; Legend Settings

**説明:** 凡例のプロパティを変更するためのダイアログを開く。

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ) );Wait( 1 );obj << Legend Settings();

```

### Move to First

**構文:** obj &lt;&lt; Move to First( {level1, level2, ...} | &lt;&lt; First(N) | &lt;&lt; Last(N) )

**説明:** 指定された水準の棒を先頭に移動する。水準は、名前のリストとして指定することも、FirstまたはLastメッセージで数を指定して送信することもできる。

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure Raw Data.jmp" );obj = dt << Pareto Plot( Cause( :failure ) );obj << Move to First( {"corrosion", "doping"} );

```

### Move to Last

**構文:** obj &lt;&lt; Move to Last( {level1, level2, ...} | &lt;&lt; First(N) | &lt;&lt; Last(N) )

**説明:** 指定された水準の棒を最後尾に移動する。水準は、名前のリストとして指定することも、FirstまたはLastメッセージで数を指定して送信することもできる。

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure Raw Data.jmp" );obj = dt << Pareto Plot( Cause( :failure ) );obj << Move to Last( {"miscellaneous"} );

```

### N Legend

**構文:** obj &lt;&lt; N Legend( state=0|1 )

**説明:** 全体の標本サイズをプロットに表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure Raw Data.jmp" );obj = dt << Pareto Plot( Cause( :failure ) );obj << N Legend( 1 );

```

### No Plot

**構文:** obj &lt;&lt; No Plot( state=0|1 )

**説明:** パレート図のアウトラインノードを閉じる。

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failures.jmp" );obj = dt << Pareto Plot( Cause( :Causes ), Freq( :Count ), Per Unit Rates( 1 ) );obj << No Plot( 1 );

```

### Orientation

**構文:** obj &lt;&lt; Orientation( "縦"|"横" )

**説明:** パレート図の向きを制御する。

**JMP追加されたバージョン:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ) );obj << Orientation( "Horizontal" );

```

### Pareto Line Connect Style

**構文:** obj &lt;&lt; Pareto Line Connect Style( "直線"|"曲線"|"ステップ " )

**説明:** パレート図の折れ線の連結スタイルを制御する。

**JMP追加されたバージョン:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot(	Cause( :failure ),	Freq( :N ),	Show Pareto Line( 1 ),	Show Pareto Bars( 0 ));obj << Pareto Line Connect Style( "Step" );

```

### Per Unit Rates

**構文:** obj &lt;&lt; Per Unit Rates( state=0|1 )

**説明:** グループ間で不適合率を比較する。標本サイズが指定されている場合は、ユニットあたり度数(DPU)と100万個あたりの度数(PPM)の各列がレポートに追加される。

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failures.jmp" );obj = dt << Pareto Plot(	Cause( :Causes ),	Per Unit Analysis( Constant( Sample Size( 1000 ) ) ),	Freq( :Count ));obj << Per Unit Rates( 1 );

```

### Percent Scale

**構文:** obj &lt;&lt; Percent Scale( state=0|1 )

**説明:** 左縦軸をパーセント表示にする。

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure Raw Data.jmp" );obj = dt << Pareto Plot( Cause( :failure ) );obj << Percent Scale( 1 );

```

### Pie Chart

**構文:** obj &lt;&lt; Pie Chart( state=0|1 )

**説明:** 棒グラフではなく、円グラフとして表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ) );obj << Pie Chart( 1 );

```

### Reorder Horizontal

**構文:** obj &lt;&lt; Reorder Horizontal( level1, level2, ... )

**説明:** 複数のグループに分かれているパレート図を水平方向に並べ替える。

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ) );Wait( 2 );obj << Reorder Horizontal( "before", "after" );

```

### Reorder Vertical

**構文:** obj &lt;&lt; Reorder Vertical( level1, level2, ... )

**説明:** 複数のグループに分かれているパレート図を垂直方向に並べ替える。

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failures.jmp" );obj = dt << Pareto Plot( Cause( :Causes ), X( :Process, :Day ), Freq( :Count ) );Wait( 2 );obj << Reorder Vertical( "Process B", "Process A" );

```

### Separate Causes

**構文:** obj &lt;&lt; Separate Causes

**説明:** 組み合わせた原因を個別のバーに分割する。

**例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ) );obj << Combine Causes( {"miscellaneous", "silicon defect", "doping"} );Wait( 2 );obj << Separate Causes;

```

**例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ) );obj << Combine Causes( {"miscellaneous", "silicon defect", "doping"}, "Other Causes" );Wait( 2 );obj << Separate Causes( "Other Causes" );

```

### Show Cum Percent Axis

**構文:** obj &lt;&lt; Show Cum Percent Axis( state=0|1 )

**説明:** プロットの右側にある累積パーセント軸の表示/非表示を切り替える。注: X変数またはグループ変数がある場合は、一番右のプロットだけに適用される。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ) );obj << Show Cum Percent Axis( 1 );

```

### Show Cum Percent Curve

**構文:** obj &lt;&lt; Show Cum Percent Curve( state=0|1 )

**説明:** 累積パーセント曲線の表示/非表示を切り替える。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ) );obj << Show Cum Percent Curve( 1 );

```

### Show Cum Percent Points

**構文:** obj &lt;&lt; Show Cum Percent Points( state=0|1 )

**説明:** グラフ上で累積パーセント点の表示/非表示を切り替える。

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ) );obj << Show Cum Percent Points( 1 );

```

### Show Error Bars

**構文:** obj &lt;&lt; Show Error Bars( state=0|1 )

**説明:** パレート図の棒の、信頼区間の誤差バーの表示/非表示を切り替える。

**JMP追加されたバージョン:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ) );obj << Show Error Bars( 1 );

```

### Show Pareto Bars

**構文:** obj &lt;&lt; Show Pareto Bars( state=0|1 )

**説明:** 各原因の値を表す棒の表示/非表示を切り替える。 デフォルトではオン。

**JMP追加されたバージョン:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );obj << Show Pareto Bars( 0 );

```

### Show Pareto Line

**構文:** obj &lt;&lt; Show Pareto Line( state=0|1 )

**説明:** 各原因の度数をつなぐ折れ線の表示/非表示を切り替える。

**JMP追加されたバージョン:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ) );obj << Show Pareto Line( 1 );

```

### Show Pareto Markers

**構文:** obj &lt;&lt; Show Pareto Markers( state=0|1 )

**説明:** 各原因の値の、マーカーの表示/非表示を切り替える。

**JMP追加されたバージョン:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ) );obj << Show Pareto Markers( 1 );

```

### Subcategory Bar Style

**構文:** obj &lt;&lt; Subcategory Bar Style( "横に並べて表示"|"積み重ね"|"銃弾"|"入れ子"|"単一"|"垂線"|"フロート" )

**説明:** サブカテゴリがある場合の棒の表示方法。

**JMP追加されたバージョン:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot(	Cause( :failure ),	Subcategory( :clean ),	Freq( :N ),	Subcategory Bar Style( Stacked ));

```

### Subset

**構文:** obj &lt;&lt; Subset

**説明:** パレート図で選択されている項目からサブセットのデータテーブルを作成する。

**JMP追加されたバージョン:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failures.jmp" );dt << Select Where( :Causes == "Corrosion" );obj = dt << Pareto Plot( Cause( :Causes ), Freq( :Count ) );obj << Subset;

```

### Swap Group Orientation

**構文:** obj &lt;&lt; Swap Group Orientation( state=0|1 )

**説明:** グループの向きを横または縦に切り替える。グループが1つしかない場合は、表示の向きを変更する。

**JMP追加されたバージョン:** 17

#### 1つのグループ変数

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failures.jmp" );obj = dt << Pareto Plot( Cause( :Causes ), X( :Process ), Freq( :Count ) );Wait( 2 );obj << Swap Group Orientation( true );

```

#### 2つのグループ変数

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failures.jmp" );obj = dt << Pareto Plot( Cause( :Causes ), X( :Process, :Day ), Freq( :Count ) );Wait( 2 );obj << Swap Group Orientation( true );

```

### Synchronize Y Axes

**構文:** obj &lt;&lt; Synchronize Y Axes( state=0|1 )

**説明:** 右のY軸をロックして、ズームとパンが左のY軸と同期するようにする。 デフォルトではオン。

**JMP追加されたバージョン:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ) );obj << Synchronize Y Axes( 0 );

```

### Tables Match Plot

**構文:** obj &lt;&lt; Tables Match Plot( {&lt;Per Unit Rates( 0|1 )&gt;, &lt;Test Rate Within Groups( 0|1 )&gt;, &lt;Test Rates Across Groups( 0|1 )&gt;} )

**説明:** 度数の分析テーブルに、パレート図に一致するよう組み合わせた原因の値を表示するか、組み合わせをしない元の原因を表示するかを制御する。値1を指定すると、組み合わせた原因の値が表示される。値0を指定すると、組み合わせをしていない値が表示される。コマンドですべてのテーブルを指定しなくてもよい。

**JMP追加されたバージョン:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot(	Cause( :failure ),	X( :clean ),	Freq( :N ),	Per Unit Rates( 1 ),	Test Rate Within Groups( 1 ),	Test Rates Across Groups( 1 ),	Combine Causes( {"silicon defect", "oxide defect", "doping"}, "3 Others" ),	Move to Last( {"corrosion", "miscellaneous", "3 Others"} ));obj << Tables Match Plot(	{Per Unit Rates( 1 ), Test Rate Within Groups( 1 ), Test Rates Across Groups( 1 )});

```

### Test Rate Within Groups

**構文:** obj &lt;&lt; Test Rate Within Groups( state=0|1 )

**説明:** グループ内で尤度比検定を行う。グループ内で原因の比率が等しいかどうかが検定される。

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failures.jmp" );obj = dt << Pareto Plot( Cause( :Causes ), X( :Process ), Freq( :Count ) );obj << Test Rate Within Groups( 1 );

```

### Test Rates Across Groups

**構文:** obj &lt;&lt; Test Rates Across Groups( state=0|1 )

**説明:** グループ間で尤度比検定を行う。グループ間で原因の比率が等しいかどうかが検定される。

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failures.jmp" );obj = dt << Pareto Plot( Cause( :Causes ), X( :Process, :Day ), Freq( :Count ) );obj << Test Rates Across Groups( 1 );

```

### Threshold of Combined Causes

**構文:** obj &lt;&lt; Threshold of Combined Causes

**説明:** 閾値を下回った原因を組み合わせる。これは、プラットフォームの初回起動時に行われる。

#### 度数

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot(	Cause( :failure ),	Freq( :N ),	Threshold of Combined Causes( Count( 5 ) ));

```

#### 末尾%

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot(	Cause( :failure ),	Freq( :N ),	Threshold of Combined Causes( Tail %( 25 ) ));

```

### Ungroup Plots

**構文:** obj &lt;&lt; Ungroup Plots( state=0|1 )

**説明:** 複数のグループに分かれているパレート図を分割する。

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ) );Wait( 2 );obj << Ungroup Plots( 1 );

```

