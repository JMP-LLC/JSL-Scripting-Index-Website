# Graph Builder



## Area Element

### 関連するコンストラクター

#### Area Element

**構文:** Area Element

**説明:** 応答をカテゴリごとに要約して表示する。

**100%積み重ねた面グラフ**

```jsl

Open( "$SAMPLE_DATA/Corn Wheat Soybean Production.jmp" );// 100% stacked areaGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :Year ),		Y( :Commodity Acres Planted ),		Group X( :State, Show Title( 0 ) ),		Overlay( :Commodity )	),	Elements( Area( X, Y, Legend( 40 ), Summary Statistic( "% of Factor" ) ) ),	Local Data Filter(		Add Filter( columns( :State ), Where( :State == {"IOWA", "NEBRASKA", "OKLAHOMA"} ) )	),	SendToReport(		Dispatch( {}, "Commodity Acres Planted", ScaleBox,			{Format( "Percent", 13, 0 ), Max( 1 )}		),		Dispatch( {}, "400", LegendBox, {Legend Position( {40, [2, 1, 0, -3, -3, -3]} )} )	));

```

**塗りのパターンを指定した重ね合わせ面グラフ**

```jsl

Open( "$SAMPLE_DATA/Corn Wheat Soybean Production.jmp" );// overlaid area with fill patternsGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :Year ),		Y( :Commodity Acres Planted ),		Group X( :State, Show Title( 0 ) ),		Overlay( :Commodity )	),	Elements( Area( X, Y, Legend( 40 ), Area Style( "Overlaid" ) ) ),	Local Data Filter(		Add Filter( columns( :State ), Where( :State == {"IOWA", "NEBRASKA", "OKLAHOMA"} ) )	),	SendToReport(		Dispatch( {}, "Commodity Acres Planted", ScaleBox, {Format( "Engineering SI", 13 )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				40,				Properties( 0, {Fill Pattern( "grid dots" )} ),				Properties( 1, {Fill Pattern( "right slant medium" )} ),				Properties( 2, {Fill Pattern( "left slant medium" )} )			)}		),		Dispatch( {}, "400", LegendBox, {Legend Position( {40, [2, 1, 0, -3, -3, -3]} )} )	));

```

**積み重ねた面グラフ**

```jsl

Open( "$SAMPLE_DATA/Corn Wheat Soybean Production.jmp" );// stacked areaGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :Year ),		Y( :Commodity Acres Planted ),		Group X( :State, Show Title( 0 ) ),		Overlay( :Commodity )	),	Elements( Area( X, Y, Legend( 40 ) ) ),	Local Data Filter(		Add Filter( columns( :State ), Where( :State == {"IOWA", "NEBRASKA", "OKLAHOMA"} ) )	),	SendToReport(		Dispatch( {}, "Commodity Acres Planted", ScaleBox, {Format( "Engineering SI", 13 )} ),		Dispatch( {}, "400", LegendBox, {Legend Position( {40, [2, 1, 0, -3, -3, -3]} )} )	));

```

**線を挟んだカスタム区間となる範囲面グラフ**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// range area, custom interval, overlaid line, transparencyGraph Builder(	Transform Column(		"Quantile...=0.75[height][age]",		Formula( Col Quantile( :height, 0.75, :age, :"@Exclude"n, :"@Filter"n ) )	),	Transform Column(		"Quantile...=0.25[height][age]",		Formula( Col Quantile( :height, 0.25, :age, :"@Exclude"n, :"@Filter"n ) )	),	Show Control Panel( 0 ),	Variables(		X( :age ),		Y( :height ),		Y( :"Quantile...=0.25[height][age]"n, Position( 1 ) ),		Y( :"Quantile...=0.75[height][age]"n, Position( 1 ) )	),	Elements(		Area( X, Y( 2 ), Y( 3 ), Legend( 5 ), Area Style( "Range" ) ),		Line( X, Y( 1 ), Legend( 6 ) )	),	SendToReport(		Dispatch( {}, "400", ScaleBox,			{Legend Model(				5,				Level Name( 0, "IQR" ),				Properties( 0, {Transparency( 0.33 )} )			)}		),		Dispatch( {}, "400", LegendBox, {Set Title( "" )} )	));

```

### 項目のメッセージ

#### Area Style

**構文:** obj &lt;&lt; Area Style( "積み重ね"|"重ね合わせ"|"範囲"|"積み重ねた範囲" )

#### Connection

**構文:** obj &lt;&lt; Connection( "直線"|"矢印"|"曲線"|"ステップ "|"中心化ステップ"|"横"|"縦" )

#### Error Interval

**構文:** obj &lt;&lt; Error Interval( "自動"|"なし"|"範囲"|"四分位範囲"|"標準誤差"|"標準偏差"|"信頼区間"|"中央絶対偏差"|"カスタム区間"|"二方向区間" )

#### Interval Style

**構文:** obj &lt;&lt; Interval Style( "誤差バー"|"バンド"|"ハッシュバンド"|"矢印" )

#### Missing Factors

**構文:** obj &lt;&lt; Missing Factors( "スキップ"|"欠測値として扱う"|"ゼロとして扱う" )

**説明:** データにない水準をつなぐ線の表示方法

**JMP追加されたバージョン:** 15

#### Missing Values

**構文:** obj &lt;&lt; Missing Values( "実線でつなぐ"|"薄い線でつなぐ"|"点線でつなぐ"|"つながない" )

**説明:** 欠測値をつなぐ線の表示方法。

#### Ordering

**構文:** obj &lt;&lt; Ordering( "自動"|"データの出現順"|"要約"|"行内" )

#### Response Axis

**構文:** obj &lt;&lt; Response Axis( "自動"|"X"|"Y" )

#### Row order

**構文:** obj &lt;&lt; Row order( state=0|1 )

#### Save Summary Formula

**構文:** obj &lt;&lt; Save Summary Formula

#### Smoothness

**構文:** obj &lt;&lt; Smoothness( number )

#### Stack Negative

**構文:** obj &lt;&lt; Stack Negative( "重ね合わせ"|"負値を分けて表示"|"ゼロとして扱う" )

**説明:** 積み重ねたときに負のデータ値をどのように処理するかを制御する。

**JMP追加されたバージョン:** 17

#### Summary Statistic

**構文:** obj &lt;&lt; Summary Statistic( "N"|"平均"|"中央値(メディアン)"|"最頻値"|"幾何平均"|"最小値"|"最大値"|"範囲"|"合計"|"累積和"|"累積%"|"全体に対する%"|"各因子水準内での%"|"全応答と全体での%"|"標準偏差"|"分散"|"標準誤差"|"変動係数"|"四分位範囲"|"中央絶対偏差"|"第1四分位点"|"第3四分位点" )

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

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));obj << Automatic Recalc( 1 );dt << Select Rows( 5 ) << Exclude( 1 );

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

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));obj[1] << Copy ByGroup Script;

```

### Copy Script

**構文:** obj &lt;&lt; Copy Script

**説明:** この分析を再現するJSLスクリプトを生成し、クリップボードにコピーする。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));obj << Copy Script;

```

### Data Table Window

**構文:** obj &lt;&lt; Data Table Window

**説明:** この分析に使用したデータテーブルのウィンドウを手前に表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));obj << Data Table Window;

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

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));t = obj[1] << Get ByGroup Script;Show( t );

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

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

### Get Data Table

**構文:** obj &lt;&lt; Get Data Table

**説明:** データテーブルへの参照を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));t = obj << Get Datatable;Show( N Rows( t ) );

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

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));t = obj << Get Script;Show( t );

```

### Get Script With Data Table

**構文:** obj &lt;&lt; Get Script With Data Table

**説明:** この分析を再現するスクリプト(JSL)をデータテーブルへの参照も含めて生成し、それを式として戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));t = obj << Get Script With Data Table;Show( t );

```

### Get Timing

**構文:** obj &lt;&lt; Get Timing

**説明:** プラットフォームの起動にかかった時間を取得する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));t = obj << Get Timing;Show( t );

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

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));obj << Redo Analysis;

```

### Relaunch Analysis

**構文:** obj &lt;&lt; Relaunch Analysis

**説明:** プラットフォームの起動ウィンドウを開き、レポートを作成した時の設定を表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));obj << Relaunch Analysis;

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

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Report View

**構文:** obj &lt;&lt; Report View( "完全"|"要約" )

**説明:** レポートビューは、プラットフォームレポートの詳細を表示するかどうかを決定する。Fullはすべての詳細を表示し、Summaryはプラットフォームにより限定されたものだけを表示する。 動作をカスタマイズするため、各ディスプレイボックスは<<Set Summary Behaviorメッセージをサポートする。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**構文:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**説明:** 分析を再現するためのJSLスクリプトを作成し、データテーブルにテーブルプロパティとして保存する。スクリプトの名前を指定できる。Append Suffixオプションは、スクリプト名に数字の接尾辞を追加する。これにより、同名のスクリプトが存在していても区別できる。Promptオプションは、ユーザにスクリプト名の指定を促す。Replaceオプションは、同名の既存のスクリプトを置き換える。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**構文:** obj &lt;&lt; Save ByGroup Script to Journal

**説明:** この分析を再現するJSLスクリプトを生成し、ジャーナルにそのスクリプトのボタンを追加する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**構文:** obj &lt;&lt; Save ByGroup Script to Script Window

**説明:** この分析を再現するJSLスクリプトを生成し、現在のスクリプトウィンドウに表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**構文:** obj &lt;&lt; Save Script for All Objects

**説明:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**構文:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**説明:** すべてのレポートオブジェクトを再現するスクリプトを現在のデータテーブルに保存する。このオプションは、ウィンドウ内にレポートが複数ある場合に便利。作成されるスクリプトの名前は、引用符で囲んで指定しない限り、1つ目のプラットフォーム名となる。

**例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));obj[1] << Save Script for All Objects To Data Table;

```

**例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**構文:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**説明:** この分析を再現するJSLスクリプトを生成し、データテーブルのテーブルプロパティとして保存する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**構文:** obj &lt;&lt; Save Script to Journal

**説明:** この分析を再現するJSLスクリプトを生成し、ジャーナルにそのスクリプトのボタンを追加する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));obj << Save Script to Journal;

```

### Save Script to Report

**構文:** obj &lt;&lt; Save Script to Report

**説明:** この分析を再現するJSLスクリプトを生成し、レポートウィンドウに表示する。分析手順の記録を結果と一緒に残せる。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));obj << Save Script to Report;

```

### Save Script to Script Window

**構文:** obj &lt;&lt; Save Script to Script Window

**説明:** この分析を再現するJSLスクリプトを生成し、現在のスクリプトウィンドウに表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));obj << Save Script to Script Window;

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

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));obj << Title( "My Platform" );

```

### Top Report

**構文:** obj &lt;&lt; Top Report

**説明:** レポート内のルートノードへの参照を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

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

**構文:** obj = Graph Builder(...Window View( "Visible"|"Invisible"|"Private" )...)

**説明:** レポートとして作成するウィンドウの種類を設定する。デフォルトでは、Visibleレポートウィンドウが作成される。Invisible のウィンドウは画面に表示されないが、Window()などの関数によって検出できる。Private のウィンドウにはほとんどのウィンドウメッセージを送れるが、検出することはできないため、レポートオブジェクトを通してアクセスする必要がある。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

## 関連するコンストラクター

### Graph Builder

**構文:** Graph Builder( Variables( X(column ), Y( column ), &lt;Group X( column )&gt;, &lt;Group Y( column )&gt;, &lt;Shape( column )&gt;, &lt;Color( column )&gt;, &lt;Overlay( column )&gt;, &lt;Freq( column )&gt; ), &lt;Elements(...)&gt; ) )

**説明:** データをインタラクティブに探索するためのグラフィカルインターフェースを提供する。グラフのゾーンに列をドラッグしてさまざまなグラフを作成できる。グラフの種類には、散布図、等高線図、棒グラフ、面グラフ、箱ひげ図、ヒストグラム、ヒートマップ、円グラフ、ツリーマップ、モザイク図、地図などがある。

#### 100%積み重ねた棒グラフ

```jsl

Open( "$SAMPLE_DATA/Lipid Data.jmp" );// 100% stacked bar chart, custom legend colorsGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Age ), Y( :Cholesterol ), Overlay( :Alcohol Use ) ),	Elements(		Bar( X, Y, Legend( 55 ), Bar Style( "Stacked" ), Summary Statistic( "% of Factor" ) )	),	SendToReport(		Dispatch( {}, "Cholesterol", ScaleBox, {Max( 1 )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				55,				Properties( 0, {Fill Color( RGB Color( 0.9, 0.9, 0.9 ) )} ),				Properties( 1, {Fill Color( RGB Color( 1.0, 0.8, 0.8 ) )} ),				Properties( 2, {Fill Color( RGB Color( 1.0, 0.6, 0.6 ) )} ),				Properties( 3, {Fill Color( RGB Color( 1.0, 0.3, 0.3 ) )} )			)}		)	));

```

#### BY変数を使った独立したグラフ

```jsl

Open( "$SAMPLE_DATA/Financial.jmp" );// by variable creates multiple Graph Builder instancesGraph Builder(	Show Control Panel( 0 ),	Variables( X( :"Assets($Mil.)"n ), Y( :"Stockholder's Eq($Mil.)"n ), ),	Elements( Points( X, Y, Legend( 17 ) ), Smoother( X, Y, Legend( 18 ) ) ),	By( :Type ));

```

#### Napoleonの進軍のグラフ

```jsl

Open( "$SAMPLE_DATA/Napoleons March.jmp" );// flow diagramGraph Builder(	Show Control Panel( 0 ),	Show X Axis( 0 ),	Show Y Axis( 0 ),	Show X Axis Title( 0 ),	Show Y Axis Title( 0 ),	Variables(		X( :Longitude ),		Y( :Latitude ),		Overlay( :Group ),		Color( :Direction ),		Size( :Army Size )	),	Elements(		Line( X, Y, Legend( 3 ), Ordering( "Row Order" ), Missing Values( "No Connection" ) )	),	SendToReport(		Dispatch( {}, "Longitude", ScaleBox,			{Min( 26.71 ), Max( 34.9 ), Inc( 2.5 ), Minor Ticks( 0 ),			Label Row( Show Major Grid( 1 ) )}		),		Dispatch( {}, "Latitude", ScaleBox,			{Min( 53.32 ), Max( 56.61 ), Inc( 0.5 ), Minor Ticks( 1 ),			Label Row( Show Major Grid( 1 ) )}		),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				3,				Properties( 0, {Line Width( 10 )} ),				Properties( 1, {RGB Color( 1, 0.69, 0.49 )} ),				Properties( 2, {RGB Color( 0.47, 0.47, 0.47 )} )			)}		),		Dispatch( {}, "graph title", TextEditBox,			{Set Text( "Napoleon's March to Moscow" )}		),		Dispatch( {}, "Graph Builder", FrameBox,			{Background Map( Images( "Detailed Earth", Transparency( 0.75 ) ) )}		)	));

```

#### Y軸を揃えていないパネル状のグラフ

```jsl

Open( "$SAMPLE_DATA/US Regional Population.jmp" );// panels with unaligned y axesGraph Builder(	Transform Column( "Transform[Year]", Continuous, Formula( Num( :Year ) ) ),	Show Control Panel( 0 ),	Extend Axis to Zero( 10 ),	Link Page Axes( "X Only" ),	Replicate Linked Page Axes( 0 ),	Variables(		X( :"Transform[Year]"n ),		Y( :Population ),		Page( :Region, Levels per Row( 3 ) )	),	Elements( Points( X, Y, Legend( 3 ) ), Smoother( X, Y, Legend( 4 ) ) ),	Local Data Filter(		Add Filter(			columns( :Region ),			Where(				:Region == {"AR,LA,OK,TX", "Great Lakes", "KY,TN,AL,MS", "Midwest",				"Mountain", "New England", "NY,NJ,PA", "Pacific", "South Atlantic"}			)		)	),	SendToReport(		Dispatch( {}, "Population", ScaleBox, {Format( "Engineering SI", 10 )} ),		Dispatch( {}, "Population", ScaleBox( 2 ), {Format( "Engineering SI", 10 )} ),		Dispatch( {}, "Population", ScaleBox( 3 ), {Format( "Engineering SI", 10 )} ),		Dispatch( {}, "Population", ScaleBox( 4 ), {Format( "Engineering SI", 10 )} ),		Dispatch( {}, "Population", ScaleBox( 5 ), {Format( "Engineering SI", 10 )} ),		Dispatch( {}, "Population", ScaleBox( 6 ), {Format( "Engineering SI", 10 )} ),		Dispatch( {}, "Population", ScaleBox( 7 ), {Format( "Engineering SI", 10 )} ),		Dispatch( {}, "Population", ScaleBox( 8 ), {Format( "Engineering SI", 10 )} ),		Dispatch( {}, "Population", ScaleBox( 9 ), {Format( "Engineering SI", 10 )} ),		Dispatch( {}, "Population", ScaleBox( 10 ), {Format( "Engineering SI", 10 )} ),		Dispatch( {}, "Transform[Year]", TextEditBox, {Set Text( "Year" )} ),		Dispatch( {}, "Transform[Year]", Text Edit Box( 2 ), {Set Text( "Year" )} ),		Dispatch( {}, "Transform[Year]", Text Edit Box( 3 ), {Set Text( "Year" )} )	));

```

#### ウエハーマップ

```jsl

Open( "$SAMPLE_DATA/Wafer Stacked.jmp" );// wafer map, heat map, trellis, wrap arrangementGraph Builder(	Show Control Panel( 0 ),	Variables( X( :X_Die ), Y( :Y_Die ), Wrap( :Wafer ), Color( :Defects ) ),	Elements( Heatmap( X, Y, Legend( 8 ) ) ),	SendToReport(		Dispatch( {}, "X_Die", ScaleBox, {Minor Ticks( 9 )} ),		Dispatch( {}, "Y_Die", ScaleBox, {Minor Ticks( 9 )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				8,				Properties( 0, {gradient( {Color Theme( "White to Orange" )} )} )			)}		)	));

```

#### カスタム範囲のバンドを表示した折れ線グラフ

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// range area, custom interval, overlaid line, transparencyGraph Builder(	Transform Column(		"Quantile...=0.75[height][age]",		Formula( Col Quantile( :height, 0.75, :age, :"@Exclude"n, :"@Filter"n ) )	),	Transform Column(		"Quantile...=0.25[height][age]",		Formula( Col Quantile( :height, 0.25, :age, :"@Exclude"n, :"@Filter"n ) )	),	Show Control Panel( 0 ),	Variables(		X( :age ),		Y( :height ),		Y( :"Quantile...=0.25[height][age]"n, Position( 1 ) ),		Y( :"Quantile...=0.75[height][age]"n, Position( 1 ) )	),	Elements(		Area( X, Y( 2 ), Y( 3 ), Legend( 5 ), Area Style( "Range" ) ),		Line( X, Y( 1 ), Legend( 6 ) )	),	SendToReport(		Dispatch( {}, "400", ScaleBox,			{Legend Model(				5,				Level Name( 0, "IQR" ),				Properties( 0, {Transparency( 0.33 )} )			)}		),		Dispatch( {}, "400", LegendBox, {Set Title( "" )} )	));

```

#### パネル状の線形回帰

```jsl

Open( "$SAMPLE_DATA/Financial.jmp" );// line of fit, regression, small multiples, custom group color, custom graph spacingGraph Builder(	Show Control Panel( 0 ),	Grid Color( "Medium Light Gray" ),	Grid Transparency( 0.25 ),	Title Fill Color( "Medium Light Gray" ),	Title Frame Color( "Medium Light Gray" ),	Level Fill Color( {217, 217, 217} ),	Level Frame Color( "Medium Light Gray" ),	Level Spacing Color( "Medium Light Gray" ),	Graph Spacing( 10 ),	Variables( X( :"Assets($Mil.)"n ), Y( :"Stockholder's Eq($Mil.)"n ), Wrap( :Type ) ),	Elements( Points( X, Y, Legend( 17 ) ), Line Of Fit( X, Y, Legend( 19 ) ) ),	Local Data Filter(		Add Filter( columns( :"Assets($Mil.)"n ), Where( :"Assets($Mil.)"n <= 60941 ) )	));

```

#### 二項割合の信頼区間

```jsl

Open( "$SAMPLE_DATA/Bands Data.jmp" );// binomial proportion confidence intervalGraph Builder(	Show Control Panel( 0 ),	Show Legend( 0 ),	Show Title( 0 ),	Show Y Axis Title( 0 ),	Variables( X( :customer ), Y( :Banding? ) ),	Elements(		Points( X, Y, Legend( 3 ) ),		Line Of Fit( X, Y, Legend( 4 ), Means and Std Devs( 1 ) )	),	Local Data Filter(		Add Filter(			columns( :customer ),			Where( :customer == {"MODMAT", "REI", "ROSES", "SHEPLERS", "TARGET"} )		)	),	SendToReport(		Dispatch( {}, "Banding?", ScaleBox,			{Min( -0.07 ), Max( 1.07 ), Label Row( Show Major Grid( 1 ) )}		)	));

```

#### 周辺箱ひげ図を加えた散布図

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// scatter plot with marginal box plots, custom graph sizesGraph Builder(	Transform Column( "dummy1", Nominal, Formula( 1 ) ),	Transform Column( "dummy2", Nominal, Formula( 1 ) ),	Show Control Panel( 0 ),	Variables(		X( :Delta 13 C ),		X( :dummy1 ),		Y( :dummy2 ),		Y( :Delta 15 N ),		Color( :Sex ),		Size( :Body Mass )	),	Relative Sizes( "X", [100 10] ),	Relative Sizes( "Y", [10 100] ),	Elements( Position( 1, 1 ), Box Plot( X, Y, Color( 0 ), Size( 0 ), Legend( 12 ) ) ),	Elements( Position( 1, 2 ), Points( X, Y, Legend( 4 ) ) ),	Elements( Position( 2, 1 ) ),	Elements( Position( 2, 2 ), Box Plot( X, Y, Color( 0 ), Size( 0 ), Legend( 13 ) ) ),	SendToReport(		Dispatch( {}, "dummy1", ScaleBox, {Label Row( Show Major Labels( 0 ) )} ),		Dispatch( {}, "dummy2", ScaleBox, {Label Row( Show Major Labels( 0 ) )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				4,				Properties( 1, {Transparency( 0.75 )} ),				Properties( 2, {Transparency( 0.75 )} )			)}		),		Dispatch( {}, "dummy1", TextEditBox, {Set Text( "" )} ),		Dispatch( {}, "dummy2", TextEditBox, {Set Text( "" )} ),		Dispatch( {}, "400", LegendBox,			{Legend Position( {12, [1, -3], 4, [0, 3, 4], 13, [2, -3]} )}		)	));

```

#### 四分位点を表示したバイオリンプロット

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// violin plots, overlaid median line and quartile intervalsGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Species ), Y( :Body Mass ) ),	Elements(		Contour( X, Y, Legend( 3 ) ),		Bar(			X,			Y,			Legend( 4 ),			Bar Style( "Float" ),			Summary Statistic( "Median" ),			Error Interval( "Interquartile Range" )		)	));

```

#### 変動性図

```jsl

Open( "$SAMPLE_DATA/Variability Data/2 Factors Nested.jmp" );// variability chart, mean and range interval, nested axisGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Operator ), X( :Part, Position( 1 ) ), Y( :Y ) ),	Elements(		Points(			X( 1 ),			X( 2 ),			Y,			Legend( 3 ),			Summary Statistic( "Mean" ),			Error Interval( "Range" )		)	),	SendToReport(		Dispatch( {}, "Operator", ScaleBox, {Label Row( 2, Show Major Grid( 1 ) )} )	));

```

#### 層別した複数のグラフ

```jsl

Open( "$SAMPLE_DATA/Design Experiment/Algorithm Data.jmp" );// coplot style grouping using continuous grouping variables, smoother and scatter plotGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :Alpha, Levels( 2 ) ),		Y( :CPU Time ),		Group X( :Beta, Levels( 2 ) ),		Group Y( :Gamma, Levels( 2 ) ),		Overlay( :Algorithm )	),	Elements( Points( X, Y, Legend( 29 ) ), Smoother( X, Y, Legend( 30 ), Lambda( 0.25 ) ) ));

```

#### 左右にY軸

```jsl

Open( "$SAMPLE_DATA/Functional Data/Fermentation Process.jmp" );// left and right y axes sharing a graph, overlaid linesGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Time ), Y( :pH ), Y( :Tank Level, Position( 1 ), Side( "Right" ) ) ),	Elements( Line( X, Y( 1 ), Legend( 41 ) ), Line( X, Y( 2 ), Legend( 46 ) ) ),	SendToReport( Dispatch( {}, "Time", ScaleBox, {Label Row( Show Major Grid( 1 ) )} ) ));

```

#### 折れ線と点の重ね合わせ

```jsl

Open( "$SAMPLE_DATA/Time Series/M3C Quarterly Wide Format.jmp" );// connected lines with overlaid dots, custom markers, nested date axisGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Time ), Y( :N 646 ), Y( :N 647, Position( 1 ) ) ),	Elements(		Line( X, Y( 1 ), Y( 2 ), Legend( 10 ) ),		Points( X, Y( 1 ), Y( 2 ), Legend( 11 ) )	),	SendToReport(		Dispatch( {}, "Time", ScaleBox,			{Min( 2515958948 ), Max( 2872394250 ), Interval( "Quarter" ), Inc( 1 ),			Minor Ticks( 0 ), Label Row Nesting( 2 ), Label Row( 1, Set Font Size( 12 ) )}		),		Dispatch( {}, "N 646", ScaleBox, {Label Row( Show Major Grid( 1 ) )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				10,				Properties( 0, {Line Label Properties( {Last Label( 1 )} )} ),				Properties( 1, {Line Label Properties( {Last Label( 1 )} )} )			), Legend Model(				11,				Base( 0, 0, 0, Item ID( "N 646", 1 ) ),				Base( 1, 0, 1, Item ID( "N 647", 1 ) ),				Properties( 0, {Marker( "FilledCircle" )} ),				Properties( 1, {Marker( "Filled Up Triangle" )} )			)}		),		Dispatch( {}, "Graph Builder", FrameBox,			{DispatchSeg(				Line Seg( "Line (N 646)" ),				Label Offset( "Last", 45, {2843799627.0183, 6317.56810988166} )			), DispatchSeg(				Line Seg( "Line (N 647)" ),				Label Offset( "Last", 45, {2857099451.70628, 4518.71614237549} )			)}		)	));

```

#### 曲線を加えたバブルチャート

```jsl

Open( "$SAMPLE_DATA/SATByYear.jmp" );// Smooth trend line, variable dot size, overlaid y variables, bubble chart. data filterGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :"% Taking (2004)"n ),		Y( :SAT Verbal ),		Y( :SAT Math, Position( 1 ) ),		Size( :Population )	),	Elements(		Points( X, Y( 1 ), Y( 2 ), Legend( 7 ) ),		Smoother( X, Y( 1 ), Y( 2 ), Legend( 8 ), Lambda( 0.45 ) )	),	Local Data Filter( Add Filter( columns( :Year ), Where( :Year == 2004 ) ) ),	SendToReport(		Dispatch( {}, "% Taking (2004)", ScaleBox, {Format( "Percent", 12, 0 )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model( 7, Properties( 0, {Marker Size( 6 )} ) )}		)	));

```

#### 棒グラフと滑らかなトレンド線の組み合わせ

```jsl

Open( "$SAMPLE_DATA/Spring.jmp" );// bar chart and smooth trend line combination, left and right y axesGraph Builder(	Show Control Panel( 0 ),	Variables( X( :April ), Y( :Temp ), Y( :Precip, Position( 1 ), Side( "Right" ) ) ),	Elements(		Points( X, Y( 1 ), Legend( 12 ) ),		Smoother( X, Y( 1 ), Legend( 13 ) ),		Bar( X, Y( 2 ), Legend( 16 ) )	),	SendToReport(		Dispatch( {}, "Precip", ScaleBox,			{Format( "Best", 12 ), Max( 5 ), Inc( 1 ), Minor Ticks( 1 )}		)	));

```

#### 正積図法による地中海のコロプレス

```jsl

Open( "$SAMPLE_DATA/World Demographics.jmp" );// Mediterranean map, choropleth, equal area projection, grid linesGraph Builder(	Size( 1094, 586 ),	Show Control Panel( 0 ),	Variables( Color( :Total Median Age ), Shape( :Territory ) ),	Elements( Map Shapes( Legend( 3 ) ) ),	SendToReport(		Dispatch( {}, "", ScaleBox,			{Format( "Longitude DDD", "PUNDIR", 16 ), Min( -14.2917884823647 ),			Max( 64.9684846475565 ), Inc( 20 ), Minor Ticks( 1 ),			Label Row( Show Major Grid( 1 ) )}		),		Dispatch( {}, "", ScaleBox( 2 ),			{Format( "Latitude DDD", "PUNDIR", 16 ), Min( 21.8020806509188 ),			Max( 61.3932495299748 ), Inc( 10 ), Minor Ticks( 1 ),			Label Row( Show Major Grid( 1 ) )}		)	));

```

#### 点と平滑線

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));

```

#### 矢印線(1行につき1つ)

```jsl

Open( "$SAMPLE_DATA/Cholesterol.jmp" );// arrow lines, one per rowGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :April AM ),		X( :April PM, Position( 1 ) ),		Y( :June AM ),		Y( :June PM, Position( 1 ) ),		Overlay( :treatment )	),	Elements(		Line(			X( 1 ),			X( 2 ),			Y( 1 ),			Y( 2 ),			Legend( 8 ),			Ordering( "Within Row" ),			Connection( "Arrow" )		)	));

```

#### 等高線図と散布図の点

```jsl

Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );// contour plot and scatter plot points, smoothing, alpha shapes for non-convex hullGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Labor ), Y( :Capital ), Color( :Difference ) ),	Elements(		Contour(			X,			Y,			Legend( 9 ),			Boundary( 0 ),			Number of Levels( 7 ),			Alpha( 5 ),			Smoothness( 0.2 )		),		Points( X, Y, Color( 0 ), Legend( 10 ) )	));

```

#### 経験累積分布関数曲線の重ね合わせ

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// CDF, empirical cumulative distribution functionGraph Builder(	Transform Column(		"Rank[Culmen Length]@Overlay",		Formula(			Col Rank( :Culmen Length, :"@Exclude"n, :"@Filter"n, :"@Graph"n, :"@Overlay"n )			 / Col Number(				:Culmen Length,				:"@Exclude"n,				:"@Filter"n,				:"@Graph"n,				:"@Overlay"n			)		)	),	Show Control Panel( 0 ),	Legend Position( "Inside Bottom Right" ),	Show Title( 0 ),	Show Y Axis Title( 0 ),	Variables(		X( :Culmen Length ),		Y( :"Rank[Culmen Length]@Overlay"n ),		Overlay( :Species )	),	Elements( Line( X, Y, Legend( 15 ), Connection( "Step" ) ) ),	SendToReport(		Dispatch( {}, "Rank[Culmen Length]@Overlay", ScaleBox, {Max( 1.0117745954803 )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				15,				Level Name( 0, "Adelie" ),				Level Name( 1, "Chinstrap" ),				Level Name( 2, "Gentoo" )			)}		)	));

```

#### 複数のX軸

```jsl

Open( "$SAMPLE_DATA/Design Experiment/Algorithm Data.jmp" );// mutiple x variables in separate panels, smoother with confidence intervals and scatter plotGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Alpha ), X( :Beta ), X( :Gamma ), Y( :CPU Time ), Overlay( :Algorithm ) ),	Elements(		Position( 1, 1 ),		Points( X, Y, Legend( 39 ) ),		Smoother( X, Y, Legend( 40 ), Lambda( 1.5 ), Confidence of Fit( 1 ) )	),	Elements(		Position( 2, 1 ),		Points( X, Y, Legend( 41 ) ),		Smoother( X, Y, Legend( 42 ), Lambda( 1.5 ), Confidence of Fit( 1 ) )	),	Elements(		Position( 3, 1 ),		Points( X, Y, Legend( 43 ) ),		Smoother( X, Y, Legend( 44 ), Lambda( 1.5 ), Confidence of Fit( 1 ) )	),	SendToReport(		Dispatch( {}, "400", ScaleBox,			{Legend Model( 40, Properties( 2, {Line Color( RGB Color( 0.4, 0.4, 0.4 ) )} ) )}		)	));

```

#### 複数のY軸、重ね合わせた折れ線グラフ

```jsl

Open( "$SAMPLE_DATA/Functional Data/Fermentation Process.jmp" );// parallel y axes, multiple y scales sharing a graph, overlaid linesGraph Builder(	Show Control Panel( 0 ),	Parallel Axes( "Y Only" ),	Variables(		X( :Time ),		Y( :Temp ),		Y( :NH3 Feed ),		Y( :Air ),		Y( :Tank Level ),		Y( :pH )	),	Elements( Position( 1, 1 ), Line( X, Y, Legend( 37 ) ) ),	Elements( Position( 1, 2 ), Line( X, Y, Legend( 39 ) ) ),	Elements( Position( 1, 3 ), Line( X, Y, Legend( 40 ) ) ),	Elements( Position( 1, 4 ), Line( X, Y, Legend( 41 ) ) ),	Elements( Position( 1, 5 ), Line( X, Y, Legend( 42 ) ) ),	SendToReport( Dispatch( {}, "Time", ScaleBox, {Label Row( Show Major Grid( 1 ) )} ) ));

```

#### 要約統計量の軸テーブル

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// caption axis tableGraph Builder(	Show Control Panel( 0 ),	Variables( X( :sex ), Y( :height ) ),	Elements(		Bar( X, Y, Legend( 4 ) ),		Caption Box(			X,			Y,			Legend( 5 ),			Summary Statistic( "Mean" ),			Summary Statistic 2( "N" ),			Location( "Axis Table" )		)	));

```

#### 重ね合わせた二変量のカーネル密度等高線

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// overlaid bivariate kernel density contourGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Culmen Depth ), Y( :Culmen Length ), Overlay( :Species ) ),	Elements(		Contour( X, Y, Legend( 6 ), Line( 1 ), Number of Levels( 5 ), Smoothness( 0.2174 ) )	));

```

## 項目のメッセージ

### Add Element

**構文:** obj &lt;&lt; Add Element( xposition, yposition, {Type(element name), X(i=1), Y(i=1), options...} )

**説明:** 指定されたXおよびYポジションに新しいグラフ要素を追加する。要素の指定には要素名、使用するデータの役割、およびオプションの値が含まれる。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));Wait( 0.5 );gb << Add Element( 1, 1, {Type( "Line Of Fit" ), X, Y, Degree( "Quadratic" )} );

```

### Add Variable

**構文:** obj &lt;&lt; Add Variable( {column, Role(role), Position(p=1), Inner Position(i=1)}, &lt; &lt;&lt;Method("insert"|"merge"|"replace")&gt; )

**説明:** 現在のグラフビルダーの設定に、RoleとPositionを指定した新しい変数を追加する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));Wait( 0.5 );gb << Add Variable( {:age, Role( "Wrap" )} );

```

### Auto Stretching

**構文:** obj &lt;&lt; Auto Stretching( state=0|1 )

**説明:** ウィンドウのサイズに合わせて、グラフを自動的に伸縮させる。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Auto Stretching( 0 );

```

### Back Color

**構文:** obj &lt;&lt; Back Color( color )

**説明:** グラフの周りの背景の色を設定する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Back Color( "Yellow" );

```

### Categorical Color Theme

**構文:** obj &lt;&lt; Categorical Color Theme

**説明:** カテゴリに使用するカラーテーマを設定する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Categorical Color Theme( "Pastel" );

```

### Continuous Color Theme

**構文:** obj &lt;&lt; Continuous Color Theme

**説明:** グラデーションに使用するカラーテーマを設定する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Continuous Color Theme( "White to Black" );

```

### Done

**構文:** obj &lt;&lt; Done

**説明:** 設定パネルを非表示にして標本抽出を中止する。

**JMP追加されたバージョン:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Done;

```

### Elements

**構文:** Elements( Points( X, Y )| Box plot( X, Y, Jitter( state=0|1 ), Outliers( state=0|1 ), Box Style( "Outlier"|"Quantile" ) )|Line( X, Y, Row Order( number ), Summary Statistic( ) )| Histogram( X, Y)| Bar( X, Y, Bar Style(), Summary Statistic() )| Contour(X, Y)| Smoother(X, Y)|Map Shapes(Summary Statistic() ))

**説明:** グラフの要素を指定する。

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );gb = dt << Graph Builder(	Variables( X( :"F Rate 0-19"n ), Y( :Region ) ),	Elements( Box Plot( X, Y ), Line( X, Y, Summary Statistic( "Mean" ) ) ));

```

### Error Bar Offset

**構文:** obj &lt;&lt; Error Bar Offset

**説明:** 誤差バーのオフセットを設定するためのダイアログを開く。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));Wait( 1 );gb << Error Bar Offset( 0.01 );

```

### Extend Axis to Zero

**構文:** obj &lt;&lt; Extend Axis to Zero( multiplier=1 )

**説明:** 軸スケールを広げてゼロが含まれるようにするための乗数。 デフォルトの値は"1"。

**JMP追加されたバージョン:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Extend Axis to Zero( 10 ),	Variables( X( :Weight ), Y( :Height ) ),	Elements( Line( X, Y ) ));

```

### Extend Dual Axes to Zero

**構文:** obj &lt;&lt; Extend Dual Axes to Zero( multiplier=2 )

**説明:** 左右両方に軸がある場合に、軸スケールを広げてゼロが含まれるようにするための乗数。 デフォルトの値は"2"。

**JMP追加されたバージョン:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Size( 513, 465 ),	Extend Dual Axes to Zero( 10 ),	Variables( X( :age ), Y( :weight, Side( "Right" ) ), Y( :height, Position( 1 ) ) ),	Elements( Line( X, Y( 2 ) ), Line( X, Y( 1 ) ) ));

```

### Extend Parallel Y Axes to Zero

**構文:** obj &lt;&lt; Extend Parallel Y Axes to Zero( multiplier=3 )

**説明:** [複数のY軸]モードにおいて、軸スケールを広げてゼロが含まれるようにするための乗数。 デフォルトの値は"3"。

**JMP追加されたバージョン:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Show Control Panel( 0 ),	Parallel Axes( "Y Only" ),	Extend Parallel Y Axes to Zero( 0 ),	Variables( X( :age ), Y( :height ), Y( :weight ) ),	Elements( Position( 1, 1 ), Line( X, Y ) ),	Elements( Position( 1, 2 ), Line( X, Y ) ));

```

### Fit to Window

**構文:** obj &lt;&lt; Fit to Window( "自動"|"オン"|"オフ"|"縦横比を保持" )

**説明:** レポートの自動伸縮の動作を設定する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Fit to Window( "Off" );

```

### Get Element

**構文:** obj &lt;&lt; Get Element( xposition, yposition, i )

**説明:** 指定したXおよびYポジションのグラフ要素の指定情報を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Get Element( 1, 1, 1 );

```

### Get Elements

**構文:** obj &lt;&lt; Get Elements( xposition, yposition )

**説明:** 指定したXおよびYポジションの要素の指定情報をリストで戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Get Elements( 1, 1 );

```

### Get Legend Display

**構文:** obj &lt;&lt; Get Legend Display

**説明:** グラフの凡例ディスプレイボックスを戻す。このディスプレイボックスに対して照会や変更が行える。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Variables( X( :height ), Y( :weight ), Overlay( :sex ), Color( :age ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ));lgnd = gb << Get Legend Display;item = lgnd << Get Item( 2, 1 );item << Set Visible( 0 );

```

### Get Legend Server

**構文:** obj &lt;&lt; Get Legend Server

**説明:** 凡例のディスプレイボックスや対応するグラフ内のディスプレイセグメントによって使用される情報を保持したオブジェクトを戻す。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Variables( X( :height ), Y( :weight ), Overlay( :sex ), Color( :age ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ));lgnd = gb << Get Legend Server;items = lgnd << Get Legend Items;Show( items );

```

### Get N Elements

**構文:** obj &lt;&lt; Get N Elements( xposition, yposition )

**説明:** 指定したXおよびYポジションのグラフ要素の数を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Get N Elements( 1, 1 );

```

### Get N Positions

**構文:** nrole

**説明:** 指定の役割に使用されているポジションの数を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Get N Positions( "X" );

```

### Get N Variables

**構文:** n = obj &lt;&lt; Get N Variables

**説明:** 使用されている変数の数を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Get N Variables();

```

### Get Variable

**構文:** obj &lt;&lt; Get Variable( index )

**説明:** 変数の設定情報を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Get Variable( 1 );

```

### Get Variables

**構文:** list = obj &lt;&lt; Get Variables

**説明:** 使用されている変数の指定情報をリストで戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Get Variables();

```

### Graph Spacing

**構文:** obj &lt;&lt; Graph Spacing( gap=1 )

**説明:** グラフパネル間のスペース幅を設定する。 デフォルトの値は"1"。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Add Variable( {:age, Role( "Wrap" )} );gb << Graph Spacing( 3 );

```

### Grid Color

**構文:** obj &lt;&lt; Grid Color( color )

**説明:** グラフのグリッド線の色を設定する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Graph Spacing( 5 ),	Variables( X( :height ), Y( :weight ), Wrap( :age ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Grid Color( "Red" );

```

### Grid Transparency

**構文:** obj &lt;&lt; Grid Transparency( fraction=1 )

**説明:** グリッド線の透明度を設定する。 デフォルトの値は"1"。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Graph Spacing( 5 ),	Variables( X( :height ), Y( :weight ), Wrap( :age ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Grid Transparency( 0.2 );

```

### Include Missing Categories

**構文:** obj &lt;&lt; Include Missing Categories( state=0|1 )

**説明:** 欠測値を、カテゴリカル変数の1つの水準として処理する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));:age[{10, 20, 30}] = .;gb << Add Variable( {:age, Role( "Wrap" )} );gb << Include Missing Categories( 1 );

```

### Launch Analysis

**構文:** obj &lt;&lt; Launch Analysis

**説明:** 現在の変数を使用して分析を起動する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Launch Analysis;

```

### Legend Floating Offset

**構文:** obj &lt;&lt; Legend Floating Offset

**説明:** 凡例の位置が[フローティング]に設定されているときの凡例のオフセットをピクセル数で設定する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Legend Position( "Inside Floating" );

```

### Legend Position

**構文:** obj &lt;&lt; Legend Position( "右"|"下"|"左内側"|"右内側"|"左下内側"|"右下内側"|"内側フローティング" )

**説明:** 凡例の位置を設定する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Legend Position( "Bottom" );

```

### Legend Settings

**構文:** obj &lt;&lt; Legend Settings

**説明:** 凡例のプロパティを変更するためのダイアログを開く。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));Wait( 1 );gb << Legend Settings();

```

### Level Fill Color

**構文:** obj &lt;&lt; Level Fill Color( color )

**説明:** グラフの水準名の背景色を設定する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Level Fill Color( {103, 214, 214} );

```

### Level Frame Color

**構文:** obj &lt;&lt; Level Frame Color( color )

**説明:** グラフの水準名の枠の色を設定する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Level Frame Color( "Blue" );

```

### Level Spacing Color

**構文:** obj &lt;&lt; Level Spacing Color( color )

**説明:** 水準ラベル間のスペースの色を設定する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Level Spacing Color( "Blue" );

```

### Level Spacing Transparency

**構文:** obj &lt;&lt; Level Spacing Transparency( fraction=1 )

**説明:** 水準ラベル間のスペースの透明度を設定する。 デフォルトの値は"1"。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Level Spacing Transparency( .2 );

```

### Level Text Color

**構文:** obj &lt;&lt; Level Text Color( color )

**説明:** グラフの水準名のテキストの色を設定する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Level Text Color( "Red" );

```

### Level Transparency

**構文:** obj &lt;&lt; Level Transparency( fraction=1 )

**説明:** グラフの水準名の背景の透明度を設定する。 デフォルトの値は"1"。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Level Transparency( .2 );

```

### Level Underline

**構文:** obj &lt;&lt; Level Underline( state=0|1 )

**説明:** グラフの水準名に下線を引く、または下線を外す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Level Frame Color( "Blue" );gb << Level Underline( 1 );

```

### Lighten large fills

**構文:** obj &lt;&lt; Lighten large fills( state=0|1 )

**説明:** 円グラフ、ツリーマップ、モザイク図で広く塗りつぶされる領域の色を自動的に薄くする。 デフォルトではオン。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Lighten large fills( 1 );

```

### Link Page Axes

**構文:** obj &lt;&lt; Link Page Axes( "なし"|"Xのみ"|"Yのみ"|"XとY" )

**説明:** ページグループの各水準でリンクする軸を指定する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Size( 470, 552 ),	Variables( X( :height ), Y( :weight ), Page( :sex ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Link Page Axes( "Y Only" );

```

### Lock Scales

**構文:** obj &lt;&lt; Lock Scales( state=0|1 )

**説明:** 軸およびグラデーションの範囲を固定して、データやフィルターの変更に対応して軸やグラデーションが変化しないようにする。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Lock Scales( 1 );

```

### Make into Data Table

**構文:** obj &lt;&lt; Make into Data Table

**説明:** グラフの画像を含んだ新しいデータテーブルを作成する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Make into Data Table;

```

### Order Statistic

**構文:** obj &lt;&lt; Order Statistic( "N"|"平均"|"中央値(メディアン)"|"最頻値"|"幾何平均"|"最小値"|"最大値"|"範囲"|"合計"|"累積和"|"累積%"|"全体に対する%"|"各因子水準内での%"|"全応答と全体での%"|"標準偏差"|"分散"|"標準誤差"|"変動係数"|"四分位範囲"|"中央絶対偏差"|"第1四分位点"|"第3四分位点"="平均" )

**説明:** グラフ内の変数に対する順序付けをするための要約統計量を指定し、デフォルトの順序を設定する。 デフォルトの値は"平均"。

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );gb = dt << Graph Builder(	Order Statistic( "Max" ),	Variables( X( :"F Rate 0-19"n ), Y( :Region, Order By( :"F Rate 0-19"n, Ascending ) ) ),	Elements( Box Plot( X, Y ) ));

```

### Overlay Auto Line Styles Limit

**構文:** obj &lt;&lt; Overlay Auto Line Styles Limit( count=6 )

**説明:** 色分けの変数があり、[重ね合わせの表現方法]が[自動]となっている場合に、線種を分ける重ね合わせ水準の数を制限する。 デフォルトの値は"6"。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Overlay Auto Line Styles Limit( 0 ),	Variables( X( :Weight ), Y( :Height ), Overlay( :sex ), Color( :Age ) ),	Elements( Line( X, Y ) ));

```

### Overlay Auto Marker Styles Limit

**構文:** obj &lt;&lt; Overlay Auto Marker Styles Limit( count=62 )

**説明:** 色分けの変数があり、[重ね合わせの表現方法]が[自動]となっている場合に、マーカースタイルを分ける重ね合わせ水準の数を制限する。 デフォルトの値は"62"。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Overlay Auto Marker Styles Limit( 0 ),	Variables( X( :Weight ), Y( :Height ), Overlay( :sex ), Color( :Age ) ),	Elements( Points( X, Y ) ));

```

### Page Count Limit

**構文:** obj &lt;&lt; Page Count Limit( count=200 )

**説明:** ページ変数を基に作成されるページの最大数を設定する。パフォーマンスの低下を防ぐことができる。 デフォルトの値は"200"。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Variables( X( :Age ), Y( :Height ), Page( :Name ) ),	Elements( Points( X, Y ) ));gb << Page Count Limit( 5 );

```

### Page Gap Size

**構文:** obj &lt;&lt; Page Gap Size( gap=25 )

**説明:** ページグループ間のスペース幅を設定する。 デフォルトの値は"25"。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Variables( X( :Age ), Y( :Height ), Page( :Sex ) ),	Elements( Smoother( X, Y ) ));gb << Page Gap Size( 3 );

```

### Page Level Fill Color

**構文:** obj &lt;&lt; Page Level Fill Color( color )

**説明:** グラフの水準名の背景色を設定する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Variables( X( :Age ), Y( :Height ), Page( :Sex ) ),	Elements( Smoother( X, Y ) ));gb << Page Level Fill Color( {103, 214, 214} );

```

### Page Level Frame Color

**構文:** obj &lt;&lt; Page Level Frame Color( color )

**説明:** グラフの水準名の枠の色を設定する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Variables( X( :Age ), Y( :Height ), Page( :Sex ) ),	Elements( Smoother( X, Y ) ));gb << Page Level Frame Color( "Blue" );

```

### Page Level Text Color

**構文:** obj &lt;&lt; Page Level Text Color( color )

**説明:** グラフの水準名のテキストの色を設定する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Variables( X( :Age ), Y( :Height ), Page( :Sex ) ),	Elements( Smoother( X, Y ) ));gb << Page Level Text Color( "Red" );

```

### Page Level Transparency

**構文:** obj &lt;&lt; Page Level Transparency( fraction=1 )

**説明:** グラフの水準名の背景の透明度を設定する。 デフォルトの値は"1"。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Variables( X( :Age ), Y( :Height ), Page( :Sex ) ),	Elements( Smoother( X, Y ) ));gb << Page Level Transparency( .2 );

```

### Page Level Underline

**構文:** obj &lt;&lt; Page Level Underline( state=0|1 )

**説明:** グラフの水準名に下線を引く、または下線を外す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Variables( X( :Age ), Y( :Height ), Page( :Sex ) ),	Elements( Smoother( X, Y ) ));gb << Page Level Frame Color( "Blue" );gb << Page Level Underline( 1 );

```

### Parallel Axis Merging

**構文:** obj &lt;&lt; Parallel Axis Merging( "常に"|"類似性 低"|"類似性 中"|"類似性 高"|"しない" )

**説明:** 「スケールの組み合わせ」で、どのようなときに「パラレル 個別」ではなく「パラレル マージ」を自動選択するかを指定する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Parallel Axis Merging( "Never" );

```

### Parallel Y Axes

**構文:** obj &lt;&lt; Parallel Y Axes( state=0|1 )

**説明:** すべてのY軸を同じグラフに表示する。パラレルプロット似ているが、X変数をサポートする点が異なる。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Variables( X( :age ), Y( :height ), Y( :weight ) ),	Elements( Position( 1, 1 ), Points( X, Y ), Smoother( X, Y ) ),	Elements( Position( 1, 2 ), Points( X, Y ), Smoother( X, Y ) ));gb << Parallel Y Axes( 1 );

```

### Random Seed

**構文:** obj &lt;&lt; Random Seed( number )

**説明:** 点をランダムにずらす場合のシード値を設定する。

**JMP追加されたバージョン:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Variables( X( :Sex ), Y( :Height ) ),	Elements( Points( X, Y, Jitter( "Random Uniform" ) ) ));Wait( 1 );gb << Random Seed( 123456 );

```

### Relative Sizes

**構文:** Relative Sizes(axis, matrix of relative size values)

**説明:** 連なった軸に割り当てられるスペースの割合を指定する。

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );Graph Builder(	Size( 435, 352 ),	Show Control Panel( 0 ),	Variables( X( :weight ), Y( :height ), Y( :sex ) ),	Relative Sizes( "Y", [4 1] ),	Elements( Position( 1, 1 ), Points( X, Y ) ),	Elements( Position( 1, 2 ), Points( X, Y ) ));

```

### Remove Element

**構文:** obj &lt;&lt; Remove Element( xposition, yposition, i )

**説明:** 指定したXおよびYポジションのグラフ要素を削除する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));Wait( 0.5 );gb << Remove Element( 1, 1, 2 );

```

### Remove Variable

**構文:** obj &lt;&lt; Remove Variable( index | {column, Role(role), Position(p=1), Inner Position(i=1)} )

**説明:** グラフビルダーのモデルから、番号、または列名、役割、位置で指定された変数を削除する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));Wait( 0.5 );gb << Add Variable( {:age, Role( "Wrap" )} );Wait( 0.5 );gb << Remove Variable( 3 );

```

### Replicate Linked Page Axes

**構文:** obj &lt;&lt; Replicate Linked Page Axes( state=0|1 )

**説明:** グリッド内でリンクされているページの軸を、グラフごとに1つ1つ表示するか、グラフの行または列ごとにまとめて表示するかを指定する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Size( 470, 552 ),	Variables( X( :height ), Y( :weight ), Page( :age ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Link Page Axes( "X and Y" );gb << Replicate Linked Page Axes( 1 );

```

### Sampling

**構文:** obj &lt;&lt; Sampling( number )

**説明:** 指定された抽出率またはサイズを使用して、ランダムにデータのサブセットを選択する。データが大きく、グラフを試しに作成してみる場合に有用。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Sampling( 20 );

```

### Set Alpha Level

**構文:** obj &lt;&lt; Set Alpha Level( 0.10|0.05|0.01|Other... )

**説明:** 信頼曲線の有意水準を変更する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Set Alpha Level( 0.10 );

```

### Set α Level

**構文:** obj &lt;&lt; Set α Level( 0.10|0.05|0.01|Other... )

**説明:** 信頼曲線の有意水準を変更する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Set Alpha Level( 0.10 );

```

### Show Control Panel

**構文:** obj &lt;&lt; Show Control Panel( state=0|1 )

**説明:** 設定パネルの表示/非表示を切り替える。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Show Control Panel( 1 );

```

### Show Excluded Rows

**構文:** obj &lt;&lt; Show Excluded Rows( state=0|1 )

**説明:** プロット上で除外された行の表示/非表示を切り替える。このオプションを選択すると、除外された行は管理限界外の数には含まれるが、数値計算からは除外される。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));dt << Select Rows( 1 :: 5 );dt << Exclude();gb << Show Excluded Rows( 1 );

```

### Show Footer

**構文:** obj &lt;&lt; Show Footer( state=0|1 )

**説明:** フッタテキストの表示/非表示を切り替える。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Show Footer( 0 );

```

### Show Legend

**構文:** obj &lt;&lt; Show Legend( state=0|1 )

**説明:** グラフの右側にある凡例の表示/非表示を切り替える。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Show Legend( 1 );

```

### Show Subtitle

**構文:** obj &lt;&lt; Show Subtitle( state=0|1 )

**説明:** グラフのサブタイトルを表示または非表示にする。

**JMP追加されたバージョン:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Show Subtitle( 1 );

```

### Show Title

**構文:** obj &lt;&lt; Show Title( state=0|1 )

**説明:** グラフのタイトルを表示または非表示にする。 デフォルトではオン。

**JMP追加されたバージョン:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Show Title( 0 );

```

### Show X Axis

**構文:** obj &lt;&lt; Show X Axis( state=0|1 )

**説明:** X軸の表示/非表示を切り替える。 デフォルトではオン。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Show X Axis( 0 );

```

### Show X Axis Title

**構文:** obj &lt;&lt; Show X Axis Title( state=0|1 )

**説明:** X軸のタイトルの表示/非表示を切り替える。 デフォルトではオン。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Show X Axis Title( 0 );

```

### Show Y Axis

**構文:** obj &lt;&lt; Show Y Axis( state=0|1 )

**説明:** Y軸の表示/非表示を切り替える。 デフォルトではオン。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Show Y Axis( 0 );

```

### Show Y Axis Title

**構文:** obj &lt;&lt; Show Y Axis Title( state=0|1 )

**説明:** Y軸のタイトルの表示/非表示を切り替える。 デフォルトではオン。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Show Y Axis Title( 0 );

```

### Size

**構文:** obj &lt;&lt; Size( width, height )

**説明:** グラフのサイズを設定する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Size( 808, 586 );

```

### Spacing Borders

**構文:** obj &lt;&lt; Spacing Borders( 0|1=0 )

**説明:** グラフパネルの境界線を設定する。 デフォルトの値は"0"。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Spacing Borders( 1 );

```

### Subtitle Alignment

**構文:** obj &lt;&lt; Subtitle Alignment( "左寄せ"|"中央寄せ"|"右寄せ"|"自動" )

**説明:** グラフのサブタイトルの配置を設定する。

**JMP追加されたバージョン:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Subtitle Alignment( "Left" );

```

### Subtitle Span

**構文:** obj &lt;&lt; Subtitle Span( "全体"|"グラフのコンテンツ" )

**説明:** グラフのサブタイトルの幅を設定する。

**JMP追加されたバージョン:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Subtitle Span( "Graph" );

```

### Summary Statistic

**構文:** Summary Statistic( N|Mean|Min|Max|Sum|% of Total )

**説明:** グラフ内のさまざまな要素で使用されるデフォルトの要約統計量を設定する。棒および折れ線のグラフではデフォルトで平均が使用される。 デフォルトの値は"平均"。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Variables( X( :Age ), Y( :Height ), Y( :weight, Position( 1 ) ) ),	Summary Statistic( "Sum" ),	Elements( Bar( X, Y( 1 ), Y( 2 ), Legend( 2 ) ) ));

```

### Title Alignment

**構文:** obj &lt;&lt; Title Alignment( "左寄せ"|"中央寄せ"|"右寄せ" )

**説明:** グラフのタイトルの配置を設定する。

**JMP追加されたバージョン:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Title Alignment( "Left" );

```

### Title Fill Color

**構文:** obj &lt;&lt; Title Fill Color( color )

**説明:** グラフのタイトルの背景色を設定する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Title Fill Color( "Cyan" );

```

### Title Frame Color

**構文:** obj &lt;&lt; Title Frame Color( color )

**説明:** グラフのタイトルの枠の色を設定する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Title Frame Color( "Blue" );

```

### Title Span

**構文:** obj &lt;&lt; Title Span( "全体"|"グラフのコンテンツ" )

**説明:** グラフのタイトルの幅を設定する。

**JMP追加されたバージョン:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Title Span( "Graph" );

```

### Title Text Color

**構文:** obj &lt;&lt; Title Text Color( color )

**説明:** グラフのタイトルの文字の色を設定する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Title Text Color( "Red" );

```

### Title Transparency

**構文:** obj &lt;&lt; Title Transparency( fraction=1 )

**説明:** グラフのタイトルの背景の透明度を設定する。 デフォルトの値は"1"。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Title Transparency( .2 );

```

### Title Underline

**構文:** obj &lt;&lt; Title Underline( state=0|1 )

**説明:** グラフのタイトルに下線を引く、または下線を外す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Title Frame Color( "Blue" );gb << Title Underline( 1 );

```

### Update Element

**構文:** obj &lt;&lt; Update Element( xposition, yposition, i, {options} )

**説明:** 既存の要素のプロパティを変更する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));Wait( 0.5 );gb << Update Element( 1, 1, 1, {Summary Statistic( "Mean" ), Error Bars( "Range" )} );

```

### Use row colors for levels

**構文:** obj &lt;&lt; Use row colors for levels( state=0|1 )

**説明:** 水準ごとに異なる色が割り当てられている場合、それらを凡例の水準の色に使用する。 デフォルトではオン。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Use row colors for levels( 1 );

```

### Variables

**構文:** Variables( X(column ), Y( column ), &lt;Group X( column )&gt;, &lt;Group Y( column )&gt;, &lt;Shape( column )&gt;, &lt;Color( column )&gt;, &lt;Overlay( column )&gt;, &lt;Freq( column )&gt; )

**説明:** グラフに使用する変数を定義する。

```jsl

dt = Open( "$SAMPLE_DATA/SATByYear.jmp" );gb = dt << Graph Builder( Variables( Color( :SAT Verbal ), Shape( :State ) ) );

```

### X Group Edge

**構文:** obj &lt;&lt; X Group Edge( "上"|"下" )

**説明:** Xグループのラベルを最上部または最下部に移動する。デフォルトは"Top"。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));Wait( 1 );gb << X Group Edge( "Bottom" );

```

### Y Group Edge

**構文:** obj &lt;&lt; Y Group Edge( "左"|"右" )

**説明:** Yグループのラベルを左または右に移動する。デフォルトの値は"Right"。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Variables( X( :Sex ), Y( :Height ), Group Y( :Age ) ),	Elements( Smoother( X, Y ) ));Wait( 1 );gb << Y Group Edge( "Left" );

```

### Y Group Level Orientation

**構文:** obj &lt;&lt; Y Group Level Orientation( "横"|"縦" )

**説明:** Yのグループ水準ラベルのテキストが横書きか縦書き(回転済み)かを指定する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Variables( X( :Sex ), Y( :Height ), Group Y( :Age ) ),	Elements( Smoother( X, Y ) ));Wait( 1 );gb << Y Group Level Orientation( "Horizontal" );

```

### Y Group Title Orientation

**構文:** obj &lt;&lt; Y Group Title Orientation( "横"|"縦" )

**説明:** グループYのタイトルラベルのテキストが横書きか縦書き(回転された状態)かを指定する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Variables( X( :Sex ), Y( :Height ), Group Y( :Age ) ),	Elements( Smoother( X, Y ) ));Wait( 1 );gb << Y Group Title Orientation( "Horizontal" );

```

## Bar Element

### 関連するコンストラクター

#### Bar Element

**構文:** Bar Element

**説明:** 応答をカテゴリごとに要約して表示する。

**100%積み重ねた棒グラフ**

```jsl

Open( "$SAMPLE_DATA/Lipid Data.jmp" );// 100% stacked bar chart, custom legend colorsGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Age ), Y( :Cholesterol ), Overlay( :Alcohol Use ) ),	Elements(		Bar( X, Y, Legend( 55 ), Bar Style( "Stacked" ), Summary Statistic( "% of Factor" ) )	),	SendToReport(		Dispatch( {}, "Cholesterol", ScaleBox, {Max( 1 )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				55,				Properties( 0, {Fill Color( RGB Color( 0.9, 0.9, 0.9 ) )} ),				Properties( 1, {Fill Color( RGB Color( 1.0, 0.8, 0.8 ) )} ),				Properties( 2, {Fill Color( RGB Color( 1.0, 0.6, 0.6 ) )} ),				Properties( 3, {Fill Color( RGB Color( 1.0, 0.3, 0.3 ) )} )			)}		)	));

```

**3つの変数とカスタムの色を使った積み重ね棒グラフ**

```jsl

Open( "$SAMPLE_DATA/Lipid Data.jmp" );// bar chart, stacked, 3 y variables, meanGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :Sex ),		Y( :Cholesterol ),		Y( :HDL, Position( 1 ) ),		Y( :LDL, Position( 1 ) )	),	Elements(		Bar(			X,			Y( 1 ),			Y( 2 ),			Y( 3 ),			Bar Style( "Stacked" ),			Summary Statistic( "Mean" ),			Legend( 5 )		)	),	SendToReport(		Dispatch( {}, "400", ScaleBox,			{Legend Model(				5,				Properties( 0, {Fill Color( "dark gray" )} ),				Properties( 1, {Fill Color( "blue" )} ),				Properties( 2, {Fill Color( "orange" )} )			)}		)	));

```

**Likert尺度を使った二極分散型積み上げ棒グラフ**

```jsl

Open( "$SAMPLE_DATA/Likert Survey.jmp" );// diverging stacked bars, likert scaleGraph Builder(	Transform Column( "neg sd", Formula( -:strongly disagree ) ),	Transform Column( "neg d", Formula( -:disagree ) ),	Transform Column( "neg n", Formula( -:neutral / 2 ) ),	Transform Column( "pos n", Formula( :neutral / 2 ) ),	Show Control Panel( 0 ),	Legend Position( "Bottom" ),	Show X Axis Title( 0 ),	Show Y Axis Title( 0 ),	Variables(		X( :neg n ),		X( :neg d, Position( 1 ) ),		X( :neg sd, Position( 1 ) ),		X( :pos n, Position( 1 ) ),		X( :agree, Position( 1 ) ),		X( :strongly agree, Position( 1 ) ),		Y( :question )	),	Elements(		Bar(			X( 1 ),			X( 2 ),			X( 3 ),			X( 4 ),			X( 5 ),			X( 6 ),			Y,			Legend( 4 ),			Bar Style( "Stacked" )		)	),	SendToReport(		Dispatch( {}, "neg n", ScaleBox, {Label Row( Show Major Grid( 1 ) )} ),		Dispatch( {}, "question", ScaleBox, {Min( 19.6 ), Max( -0.6 )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				4,				Level Name( 0, "neutral" ),				Level Name( 1, "disagree" ),				Level Name( 2, "strongly disagree" ),				Level Name( 3, "neutral" ),				Properties( 0, {Fill Color( RGB Color( {0.9, 0.9, 0.9} ) )} ),				Properties( 1, {Fill Color( RGB Color( {1.0, 0.7, 0.7} ) )} ),				Properties( 2, {Fill Color( RGB Color( {1.0, 0.3, 0.3} ) )} ),				Properties( 3, {Fill Color( RGB Color( {0.9, 0.9, 0.9} ) )} ),				Properties( 4, {Fill Color( RGB Color( {0.8, 0.8, 1.0} ) )} ),				Properties( 5, {Fill Color( RGB Color( {0.5, 0.5, 1.0} ) )} )			)}		)	),	Dispatch( {}, "400", LegendBox, {Legend Position( {4, [2, 1, 0, -1, 3, 4]} )} ));

```

**グループ化して横に並べた中央値の棒グラフ**

```jsl

Open( "$SAMPLE_DATA/Lipid Data.jmp" );// bar chart, side-by-side, 3 y variables, median, custom colorsGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :Sex ),		Y( :Cholesterol ),		Y( :HDL, Position( 1 ) ),		Y( :LDL, Position( 1 ) )	),	Elements( Bar( X, Y( 1 ), Y( 2 ), Y( 3 ), Summary Statistic( "Median" ), Legend( 5 ) ) ),	SendToReport(		Dispatch( {}, "400", ScaleBox,			{Legend Model(				5,				Properties( 0, {Fill Color( "dark gray" )} ),				Properties( 1, {Fill Color( "blue" )} ),				Properties( 2, {Fill Color( "orange" )} )			)}		)	));

```

**データに基づく棒の色分け**

```jsl

Open( "$SAMPLE_DATA/Dogs.jmp" );// data-driven bar coloring, diverging barsGraph Builder(	Transform Column(		"hilo",		Nominal,		Formula(			If(				:diff == Col Minimum( :diff ), "min",				:diff == Col Maximum( :diff ), "max",				"other"			)		)	),	Show Control Panel( 0 ),	Variables( X( :ID ), Y( :diff ), Color( :hilo ) ),	Elements( Bar( X, Y, Legend( 3 ) ) ),	SendToReport(		Dispatch( {}, "diff", ScaleBox, {Add Ref Line( 0, "Solid", "Black", "", 1, 0.75 )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				3,				Properties( 0, {Fill Color( RGB Color( 0.5, 0.5, 0.9 ) )} ),				Properties( 1, {Fill Color( RGB Color( 0.95, 0.6, 0.6 ) )} ),				Properties( 2, {Fill Color( RGB Color( 0.7, 0.7, 0.7 ) )} )			)}		),		Dispatch( {}, "400", LegendBox,			{Set Title( "" ), Legend Position( {3, [0, 1, -1]} )}		)	));

```

**フロートの線と点**

```jsl

Open( "$SAMPLE_DATA/Lipid Data.jmp" );// float lines and overlaid pointsGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Sex ), Y( :LDL ), Y( :HDL, Position( 1 ) ) ),	Elements(		Bar( X, Y( 1 ), Y( 2 ), Legend( 1 ), Bar Style( "Float" ) ),		Points( X, Y( 1 ), Y( 2 ), Legend( 3 ) )	));

```

**上位10カテゴリを強調した積み重ね棒グラフ**

```jsl

Open( "$SAMPLE_DATA/Billion Dollar Events.jmp" );// packed bar chart, top 10, custom axis format, subtitleGraph Builder(	Size( 813, 512 ),	Show Control Panel( 0 ),	Show Legend( 0 ),	Title Alignment( "Left" ),	Title Span( "Graph contents" ),	Subtitle Alignment( "Left" ),	Subtitle Span( "Graph contents" ),	Show Subtitle( 1 ),	Show Footer( 0 ),	Show X Axis Title( 0 ),	Show Y Axis Title( 0 ),	Variables( X( :Cost ), Y( :Unique Event ) ),	Elements(		Bar( X, Y, Bar Style( "Packed" ), Packed Primaries( 10 ), Packed Labeling( 0.4091 ) )	),	SendToReport(		Dispatch( {}, "Cost", ScaleBox,			{Format(				"Custom",				Formula(					If( value == 0,						"0",						"$" || Format( value, "precision", Keep trailing zeroes( 0 ), 3 ) ||						"B"					)				),				17			), Min( 0 ), Max( 164.25 ), Inc( 20 ), Minor Ticks( 0 )}		),		Dispatch( {}, "graph title", TextEditBox,			{Margin( {Left( 5 ), Top( 0 ), Right( 0 ), Bottom( 0 )} ),			Set Text( "Billion-dollar disasters in the US, 1980-2017" ),			Set Font Style( "Plain" )}		),		Dispatch( {}, "graph 1 title", TextEditBox,			{Margin( {Left( 5 ), Top( 0 ), Right( 0 ), Bottom( 0 )} ),			Set Text( "CPI-adjusted estimated costs from NOAA, www.ncdc.noaa.gov/billions/" )			}		)	));

```

**並べ替えた積み重ね棒グラフ**

```jsl

Open( "$SAMPLE_DATA/Quality Control/Cabinet Defects.jmp" );// bar chart, sorted stacked, filtered, custom legend colorsGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Lot Number ), Overlay( :Type of Defect ) ),	Elements( Bar( X, Legend( 3 ), Bar Style( "Sorted stacked" ) ) ),	Local Data Filter(		Add Filter(			columns( :Lot Number, :Type of Defect ),			Where( :Lot Number <= 10.5 ),			Where(				:Type of Defect == {"Bruised veneer", "Checked veneer", "Chipped veneer",				"Defective sanding", "Loose veneer", "Sand throughs", "Scratched veneer",				"Split veneer"}			),			Display( :Type of Defect, N Items( 9 ) )		)	),	SendToReport(		Dispatch( {}, "400", ScaleBox,			{Legend Model(				3,				Properties( 0, {Fill Color( RGB Color( 0.55, 0.83, 0.78 ) )} ),				Properties( 1, {Fill Color( RGB Color( 0.75, 0.73, 0.85 ) )} ),				Properties( 2, {Fill Color( RGB Color( 0.98, 0.50, 0.45 ) )} ),				Properties( 3, {Fill Color( RGB Color( 0.50, 0.69, 0.83 ) )} ),				Properties( 4, {Fill Color( RGB Color( 0.99, 0.71, 0.38 ) )} ),				Properties( 5, {Fill Color( RGB Color( 0.70, 0.87, 0.41 ) )} ),				Properties( 6, {Fill Color( RGB Color( 0.99, 0.80, 0.90 ) )} ),				Properties( 7, {Fill Color( RGB Color( 0.74, 0.50, 0.74 ) )} )			)}		)	));

```

**信頼区間を表示した棒グラフ**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// bar chart with confidence intervalsGraph Builder(	Size( 658, 555 ),	Show Control Panel( 0 ),	Variables( X( :age ), Y( :height ) ),	Elements( Bar( X, Y, Legend( 6 ), Error Interval( "Confidence Interval" ) ) ));

```

**値が小さい棒を「その他」として積み重ね**

```jsl

Open( "$SAMPLE_DATA/Quality Control/Failures.jmp" );// stacked other bar, packed bars, paretoGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Count ), Y( :Causes ) ),	Elements(		Bar(			X,			Y,			Bar Style( "Packed" ),			Packed Placement( "Separate stack" ),			Packed Primary Labels( "On axis" )		)	));

```

**値の順に並べた可変幅の棒グラフ**

```jsl

Open( "$SAMPLE_DATA/SAT.jmp" );// variable width bars, ordered by valueGraph Builder(	Show Control Panel( 0 ),	Variables(		X(			:State,			Order By( :"2004 Verbal"n, "Descending", Order Statistic( "Mean" ) ),			Size By( :"% Taking (2004)"n, Size Statistic( "Mean" ) )		),		Y( :"2004 Verbal"n )	),	Elements( Bar( X, Y, Legend( 4 ) ) ));

```

**垂線のグラフ**

```jsl

Open( "$SAMPLE_DATA/Lipid Data.jmp" );// needle bar chartGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Age ), Y( :Cholesterol ) ),	Elements( Bar( X, Y, Bar Style( "Needle" ), Summary Statistic( "Max" ) ) ));

```

**変換列による間隔とドット**

```jsl

Open( "$SAMPLE_DATA/Lipid Data.jmp" );// interval bar chart, transform columnsGraph Builder(	Transform Column( "Maximum[HDL][Sex]", Formula( Col Maximum( :HDL, :Sex ) ) ),	Transform Column( "Minimum[HDL][Sex]", Formula( Col Minimum( :HDL, :Sex ) ) ),	Transform Column( "Mean[HDL][Sex]", Formula( Col Mean( :HDL, :Sex ) ) ),	Show Control Panel( 0 ),	Variables(		X( :Sex ),		Y( :"Minimum[HDL][Sex]"n ),		Y( :"Maximum[HDL][Sex]"n, Position( 1 ) ),		Y( :"Mean[HDL][Sex]"n, Position( 1 ) ),	),	Elements( Bar( X, Y( 1 ), Y( 2 ), Y( 3 ), Bar Style( "Interval" ) ) ));

```

**度数順に並べた棒グラフ**

```jsl

Open( "$SAMPLE_DATA/Airline Delays.jmp" );// bar chart, ordered by countGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Airline, Order By( :Airline, "Descending", Order Statistic( "N" ) ) ) ),	Elements( Bar( X, Legend( 4 ) ) ));

```

**棒と矢印のグラフ**

```jsl

Open( "$SAMPLE_DATA/Lipid Data.jmp" );// arrow and bar chart Graph Builder(	Show Control Panel( 0 ),	Variables( X( :Sex ), Y( :HDL ), Y( :LDL, Position( 1 ) ) ),	Elements( Bar( X, Y( 1 ), Y( 2 ), Bar Style( "Arrow" ) ), Bar( X, Y( 1 ) ) ));

```

**棒と線を重ね合わせたグラフ**

```jsl

Open( "$SAMPLE_DATA/Lipid Data.jmp" );// bar with floating lines, custom colorsGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :Sex ),		Y( :Cholesterol ),		Y( :HDL, Position( 1 ) ),		Y( :LDL, Position( 1 ) )	),	Elements( Bar( X, Y( 1 ), Y( 2 ), Y( 3 ), Legend( 5 ), Bar Style( "Single" ) ) ),	SendToReport(		Dispatch( {}, "400", ScaleBox,			{Legend Model(				5,				Properties( 0, {Fill Color( "light gray" )} ),				Properties( 1, {Line Color( "green" )} ),				Properties( 2, {Line Color( "orange" )} )			)}		)	));

```

**棒にラベルをつけた棒グラフ**

```jsl

Open( "$SAMPLE_DATA/Lipid Data.jmp" );// bar chart, label by valueGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Sex ), Y( :Cholesterol ) ),	Elements( Bar( X, Y, Label( "Label by Value" ), Label Format( "Fixed Dec", 9, 1 ) ) ));

```

**範囲の棒グラフ**

```jsl

Open( "$SAMPLE_DATA/Lipid Data.jmp" );// range bar chart between two variablesGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Sex ), Y( :HDL ), Y( :LDL, Position( 1 ) ) ),	Elements( Bar( X, Y( 1 ), Y( 2 ), Bar Style( "Range" ) ) ),);

```

**銃弾スタイルの棒グラフ**

```jsl

Open( "$SAMPLE_DATA/Lipid Data.jmp" );// bar chart, bullet, 2 y variablesGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Sex ), Y( :HDL ), Y( :LDL, Position( 1 ) ) ),	Elements( Bar( X, Y( 1 ), Y( 2 ), Legend( 1 ), Bar Style( "Bullet" ) ) ),	SendToReport(		Dispatch( {}, "400", ScaleBox,			{Legend Model( 1, Properties( 1, {Fill Color( "light gray" )} ) )}		)	));

```

### 項目のメッセージ

#### Bar Style

**構文:** obj &lt;&lt; Bar Style( "横に並べて表示"|"積み重ね"|"積み重ね、並べ替えて表示"|"銃弾"|"入れ子"|"範囲"|"横に並べた範囲"|"間隔"|"横に並べた区間"|"二方向区間"|"矢印"|"単一"|"株価"|"箱ひげ図"|"垂線"|"フロート"|"ツリーマップ"|"詰め込み" )

#### Error Interval

**構文:** obj &lt;&lt; Error Interval( "自動"|"なし"|"範囲"|"四分位範囲"|"標準誤差"|"標準偏差"|"信頼区間"|"中央絶対偏差"|"カスタム区間"|"二方向区間" )

#### Interval Style

**構文:** obj &lt;&lt; Interval Style( "誤差バー"|"バンド"|"ハッシュバンド"|"矢印" )

#### Label

**構文:** obj &lt;&lt; Label( "ラベルなし"|"値ラベル"|"パーセント値ラベル"|"行ラベル" )

#### Label Format

**構文:** obj &lt;&lt; Label Format

**JMP追加されたバージョン:** 16

#### Overlap

**構文:** obj &lt;&lt; Overlap( "自動"|"なし"|"半分"|"すべて" )

**JMP追加されたバージョン:** 16

#### Packed Coloring

**構文:** obj &lt;&lt; Packed Coloring( "棒の色"|"棒の色を薄くしたもの"|"グレー" )

**JMP追加されたバージョン:** 14

#### Packed Labeling

**構文:** obj &lt;&lt; Packed Labeling( number )

**JMP追加されたバージョン:** 14

#### Packed Ordering

**構文:** obj &lt;&lt; Packed Ordering( "サイズ順"|"ラベル順" )

**JMP追加されたバージョン:** 14

#### Packed Placement

**構文:** obj &lt;&lt; Packed Placement( "別に積み重ね"|"最小の棒に積み重ね"|"最初の棒に積み重ね" )

**JMP追加されたバージョン:** 14

#### Packed Primaries

**構文:** obj &lt;&lt; Packed Primaries( number )

**JMP追加されたバージョン:** 14

#### Packed Primary Labels

**構文:** obj &lt;&lt; Packed Primary Labels( "軸上"|"棒の内側" )

**JMP追加されたバージョン:** 14

#### Response Axis

**構文:** obj &lt;&lt; Response Axis( "自動"|"X"|"Y" )

#### Save Summary Formula

**構文:** obj &lt;&lt; Save Summary Formula

#### Summary Statistic

**構文:** obj &lt;&lt; Summary Statistic( "N"|"平均"|"中央値(メディアン)"|"最頻値"|"幾何平均"|"最小値"|"最大値"|"範囲"|"合計"|"累積和"|"累積%"|"全体に対する%"|"各因子水準内での%"|"全応答と全体での%"|"標準偏差"|"分散"|"標準誤差"|"変動係数"|"四分位範囲"|"中央絶対偏差"|"第1四分位点"|"第3四分位点" )

## Box Plot Element

### 関連するコンストラクター

#### Box Plot Element

**構文:** Box Plot Element

**説明:** 変数の分布を四分位点と外れ値に要約して表現する。

**データに基づいて色分けした塗りつぶし箱ひげ図**

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// solid box plots, colored by summary of a different variableGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Species ), Y( :Body Mass ), Color( :Flipper Length ) ),	Elements( Box Plot( X, Y, Legend( 2 ), Box Style( "Solid" ), Fences( 0 ) ) ));

```

**横方向に表示した外れ値の箱ひげ図**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// horizontal outlier box plotsGraph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :sex ) ),	Elements( Box Plot( X, Y, Legend( 4 ) ) ),	SendToReport( Dispatch( {}, "height", ScaleBox, {Min( 50 )} ) ));

```

**重ね合わせた箱ひげ図**

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// box plots, overlaidGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Species ), Y( :Body Mass ), Overlay( :Sex ) ),	Elements( Box Plot( X, Y, Legend( 2 ) ) ));

```

### 項目のメッセージ

#### 5 Number Summary

**構文:** obj &lt;&lt; 5 Number Summary( state=0|1 )

**JMP追加されたバージョン:** 14

#### Box Placement

**構文:** obj &lt;&lt; Box Placement( "オフセット"|"揃える" )

**JMP追加されたバージョン:** 16

#### Box Style

**構文:** obj &lt;&lt; Box Style( "通常"|"塗りつぶし"|"線" )

#### Box Type

**構文:** obj &lt;&lt; Box Type( "分位点"|"外れ値" )

#### Confidence Diamond

**構文:** obj &lt;&lt; Confidence Diamond( state=0|1 )

**JMP追加されたバージョン:** 16

#### Fences

**構文:** obj &lt;&lt; Fences( state=0|1 )

**JMP追加されたバージョン:** 16

#### Jitter

**構文:** obj &lt;&lt; Jitter( "なし"|"自動"|"一様乱数"|"正規乱数"|"密度乱数"|"詰め込み"|"グリッド"|"六角形グリッド"|"ビースウォーム" )

#### Notched

**構文:** obj &lt;&lt; Notched( state=0|1 )

**JMP追加されたバージョン:** 16

#### Outliers

**構文:** obj &lt;&lt; Outliers( state=0|1 )

#### Response Axis

**構文:** obj &lt;&lt; Response Axis( "自動"|"X"|"Y" )

#### Shortest Half

**構文:** obj &lt;&lt; Shortest Half( state=0|1 )

**JMP追加されたバージョン:** 16

#### Shortest Half Color

**構文:** obj &lt;&lt; Shortest Half Color( color )

**JMP追加されたバージョン:** 16

#### Width Proportion

**構文:** obj &lt;&lt; Width Proportion( number=0 )

**説明:** デフォルトの値は"0"。

**JMP追加されたバージョン:** 15

## Caption Element

### 関連するコンストラクター

#### Caption Element

**構文:** Caption Element

**説明:** データの要約統計量の値を表示する。

**2つの統計量のキャプション (因子ごと)**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// caption per factor, mean and count, custom number formatGraph Builder(	Show Control Panel( 0 ),	Variables( X( :sex ), Y( :height ) ),	Elements(		Bar( X, Y, Legend( 4 ) ),		Caption Box(			X,			Y,			Legend( 5 ),			Summary Statistic( "Mean" ),			Summary Statistic 2( "N" ),			Location( "Graph per factor" ),			Number Format( "Best", 5 )		)	));

```

**グラフレベルのキャプション要約統計量**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// caption annotation per graphGraph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ), Group X( :sex ) ),	Elements(		Points( X, Y, Legend( 2 ) ),		Line Of Fit( X, Y, Legend( 4 ) ),		Caption Box( X, Y, Legend( 5 ), Summary Statistic( "N" ), X Position( "Left" ) )	));

```

**データに基づく参照線**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// caption reference line, run chartGraph Builder(	Show Control Panel( 0 ),	Variables( Y( :weight ) ),	Elements(		Caption Box(			Y,			Legend( 5 ),			Summary Statistic( "Mean" ),			Location( "Axis Reference Line" ),			X Position( "Left" )		),		Line( Y, Legend( 6 ), Ordering( "Row Order" ) )	));

```

**軸テーブルの要約統計量**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// caption axis tableGraph Builder(	Show Control Panel( 0 ),	Variables( X( :sex ), Y( :height ) ),	Elements(		Bar( X, Y, Legend( 4 ) ),		Caption Box(			X,			Y,			Legend( 5 ),			Summary Statistic( "Mean" ),			Summary Statistic 2( "N" ),			Location( "Axis Table" )		)	));

```

### 項目のメッセージ

#### Location

**構文:** obj &lt;&lt; Location( "グラフ"|"グラフ、因子ごと"|"軸テーブル"|"軸の参照線" )

#### Number Format

**構文:** obj &lt;&lt; Number Format

**JMP追加されたバージョン:** 16

#### Per Factor

**構文:** obj &lt;&lt; Per Factor( state=0|1 )

**JMP追加されたバージョン:** 14

#### Response Axis

**構文:** obj &lt;&lt; Response Axis( "自動"|"X"|"Y" )

#### Summary Statistic

**構文:** obj &lt;&lt; Summary Statistic( "なし"|"N"|"平均"|"中央値(メディアン)"|"最頻値"|"幾何平均"|"最小値"|"最大値"|"範囲"|"合計"|"累積和"|"累積%"|"全体に対する%"|"各因子水準内での%"|"全応答と全体での%"|"標準偏差"|"分散"|"標準誤差"|"変動係数"|"四分位範囲"|"中央絶対偏差"|"第1四分位点"|"第3四分位点"|"5数要約" )

#### Summary Statistic 2

**構文:** obj &lt;&lt; Summary Statistic 2( "なし"|"N"|"平均"|"中央値(メディアン)"|"最頻値"|"幾何平均"|"最小値"|"最大値"|"範囲"|"合計"|"累積和"|"累積%"|"全体に対する%"|"各因子水準内での%"|"全応答と全体での%"|"標準偏差"|"分散"|"標準誤差"|"変動係数"|"四分位範囲"|"中央絶対偏差"|"第1四分位点"|"第3四分位点"|"5数要約" )

#### Summary Statistic 3

**構文:** obj &lt;&lt; Summary Statistic 3( "なし"|"N"|"平均"|"中央値(メディアン)"|"最頻値"|"幾何平均"|"最小値"|"最大値"|"範囲"|"合計"|"累積和"|"累積%"|"全体に対する%"|"各因子水準内での%"|"全応答と全体での%"|"標準偏差"|"分散"|"標準誤差"|"変動係数"|"四分位範囲"|"中央絶対偏差"|"第1四分位点"|"第3四分位点"|"5数要約" )

#### Summary Statistic 4

**構文:** obj &lt;&lt; Summary Statistic 4( "なし"|"N"|"平均"|"中央値(メディアン)"|"最頻値"|"幾何平均"|"最小値"|"最大値"|"範囲"|"合計"|"累積和"|"累積%"|"全体に対する%"|"各因子水準内での%"|"全応答と全体での%"|"標準偏差"|"分散"|"標準誤差"|"変動係数"|"四分位範囲"|"中央絶対偏差"|"第1四分位点"|"第3四分位点"|"5数要約" )

#### Summary Statistic 5

**構文:** obj &lt;&lt; Summary Statistic 5( "なし"|"N"|"平均"|"中央値(メディアン)"|"最頻値"|"幾何平均"|"最小値"|"最大値"|"範囲"|"合計"|"累積和"|"累積%"|"全体に対する%"|"各因子水準内での%"|"全応答と全体での%"|"標準偏差"|"分散"|"標準誤差"|"変動係数"|"四分位範囲"|"中央絶対偏差"|"第1四分位点"|"第3四分位点"|"5数要約" )

#### X Position

**構文:** obj &lt;&lt; X Position( "左"|"中央"|"右" )

#### Y Position

**構文:** obj &lt;&lt; Y Position( "上"|"中央"|"下" )

## Contour Element

### 関連するコンストラクター

#### Contour Element

**構文:** Contour Element

**説明:** データの密度(または色分け変数の値の等高線)を表示する。Xがカテゴリカル変数の場合はバイオリンプロットを作成する。

**パネル状の等高線ヒートマップ**

```jsl

Open( "$SAMPLE_DATA/Design Experiment/Peanut Data.jmp" );// paneled contour heatmap, trellisGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :Ratio ),		Y( :Agitation Speed ),		Group X( :Hydrolyze ),		Group Y( :"Pre-Soak"n ),		Color( :Solids )	),	Elements( Contour( X, Y, Legend( 28 ), Smoothness( 0.01 ) ) ));

```

**中央値の線と平均のひし形を表示したバイオリンプロット**

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// violin plots, overlaid median line and mean diamond markerGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Species ), Y( :Body Mass ) ),	Elements(		Contour( X, Y, Legend( 3 ) ),		Bar( X, Y, Legend( 4 ), Bar Style( "Float" ), Summary Statistic( "Median" ) ),		Points( X, Y, Legend( 5 ), Summary Statistic( "Mean" ) )	),	SendToReport(		Dispatch( {}, "400", ScaleBox,			{Legend Model( 5, Properties( 0, {Marker( "Diamond" )} ) )}		)	));

```

**二変量のカーネル密度等高線**

```jsl

Open( "$SAMPLE_DATA/Airline Delays.jmp" );// bivariate kernel density contourGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Distance ), Y( :Arrival Delay ), Wrap( :Airline ) ),	Elements( Contour( X, Y, Legend( 6 ), Number of Levels( 6 ) ) ));

```

**四分位点を表示したバイオリンプロット**

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// violin plots, overlaid median line and quartile intervalsGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Species ), Y( :Body Mass ) ),	Elements(		Contour( X, Y, Legend( 3 ) ),		Bar(			X,			Y,			Legend( 4 ),			Bar Style( "Float" ),			Summary Statistic( "Median" ),			Error Interval( "Interquartile Range" )		)	));

```

**地図の等高線**

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );// contour, geographic, background map, clipped to shapes, sequential colors, hidden axesGraph Builder(	Show Control Panel( 0 ),	Show X Axis( 0 ),	Show Y Axis( 0 ),	Show X Axis Title( 0 ),	Show Y Axis Title( 0 ),	Variables( X( :Longitude ), Y( :Latitude ), Color( :PM10 ) ),	Elements(		Contour(			X,			Y,			Legend( 5 ),			Boundary( 0 ),			Number of Levels( 5 ),			Alpha( 0.04 ),			Smoothness( 0.02 )		)	),	SendToReport(		Dispatch( {}, "400", ScaleBox,			{Legend Model(				5,				Properties( 0, {gradient( {Color Theme( "White to Red" )} )} )			)}		),		Dispatch( {}, "Graph Builder", FrameBox,			{Background Map( Boundaries( "US States" ) ), Grid Line Order( 1 ),			Reference Line Order( 4 ), Reorder Segs( {1, 3} ),			DispatchSeg( Contour Seg( 1 ), {Clip Shape( Boundaries( "US States" ) )} )}		)	));

```

**最高密度領域**

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// HDR, highest denisty regions with mode lineGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Species ), Y( :Body Mass ) ),	Elements( Contour( X, Y, Legend( 4 ), Smoothness( 0.113 ), Contour Type 1D( "HDR" ) ) ));

```

**滑らかな等高線**

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// contour plot, smooth contours, alpha shapes for non-convex hullGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Culmen Length ), Y( :Flipper Length ), Color( :Body Mass ) ),	Elements(		Contour(			X,			Y,			Legend( 7 ),			Number of Levels( 5 ),			Alpha( 0.1 ),			Smoothness( 0.065 )		)	));

```

**線の箱ひげ図を加えたバイオリンプロット**

```jsl

Open( "$SAMPLE_DATA/S4 Temps.jmp" );// violin plots overlaid with thin box plotsGraph Builder(	Show Control Panel( 0 ),	Variables( X( :type of space ), Y( :Y ) ),	Elements(		Contour( X, Y, Legend( 5 ), Violin Scaling( "Weighted Area" ) ),		Box Plot( X, Y, Legend( 6 ), Outliers( 0 ), Box Style( "Thin" ), Fences( 0 ) )	));

```

### 項目のメッセージ

#### Adapt to Axis Scale

**構文:** obj &lt;&lt; Adapt to Axis Scale( state=0|1 )

**説明:** 軸のスケールが対数などに変更されている場合、変換後の座標に合わせて計算を行う。

#### Alpha

**構文:** obj &lt;&lt; Alpha( number )

**説明:** 境界の形状を制御する。値を0にすると、点集合の凸包となる。大きい値を設定すると、辺の長い三角形が削除される。

**JMP追加されたバージョン:** 15

#### Boundary

**構文:** obj &lt;&lt; Boundary( state=0|1 )

**説明:** 定義されたデータ領域の境界に線を引く。アルファ値によっては、非凸状になることがある。

**JMP追加されたバージョン:** 15

#### Contour Placement

**構文:** obj &lt;&lt; Contour Placement( "オフセット"|"揃える" )

**JMP追加されたバージョン:** 16

#### Contour Type

**構文:** obj &lt;&lt; Contour Type( "バイオリン"|"最高密度領域" )

**JMP追加されたバージョン:** 15

#### Contour Type 1D

**構文:** obj &lt;&lt; Contour Type 1D( "バイオリン"|"最高密度領域" )

**JMP追加されたバージョン:** 15

#### Contour Type 2D

**構文:** obj &lt;&lt; Contour Type 2D( "ノンパラメトリック密度"|"バッグプロット"|"最高密度領域" )

**JMP追加されたバージョン:** 15

#### Fill

**構文:** obj &lt;&lt; Fill( state=0|1 )

**説明:** 等高線の間の領域をグラデーションの色で塗りつぶす。

**JMP追加されたバージョン:** 15

#### Jitter

**構文:** obj &lt;&lt; Jitter( "なし"|"自動"|"一様乱数"|"正規乱数"|"密度乱数"|"詰め込み"|"グリッド"|"六角形グリッド"|"ビースウォーム" )

#### Line

**構文:** obj &lt;&lt; Line( state=0|1 )

**説明:** 等高線の各レベルを線で描画し、グラデーションまたは個別の線の色で色付けする。

**JMP追加されたバージョン:** 15

#### Number of Levels

**構文:** obj &lt;&lt; Number of Levels( number )

**説明:** 等高線の水準数を設定する。

#### Outliers

**構文:** obj &lt;&lt; Outliers( state=0|1 )

#### Smoothness

**構文:** obj &lt;&lt; Smoothness( number )

**説明:** 等高線を滑らかにする。

**JMP追加されたバージョン:** 14

#### Transform

**構文:** obj &lt;&lt; Transform( "なし"|"範囲による正規化" )

**説明:** 補間に使う三角分割を計算する前に点を変換するオプション。

#### Violin Scaling

**構文:** obj &lt;&lt; Violin Scaling( "等面積"|"等幅"|"重み付き面積" )

**JMP追加されたバージョン:** 14

## Ellipse Element

### 関連するコンストラクター

#### Ellipse Element

**構文:** Ellipse Element

**説明:** 二変量正規楕円を表示する。

**パネル状に表示した確率楕円**

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// density ellipse, correlation coefficient, panels, mean diamondGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :Culmen Depth ),		Y( :Culmen Length ),		Group X( :Species ),		Group Y( :Sex )	),	Elements(		Points( X, Y, Legend( 8 ) ),		Ellipse( X, Y, Legend( 10 ), Correlation( 1 ), Mean Point( 1 ) )	),	SendToReport(		Dispatch( {}, "400", ScaleBox,			{Legend Model( 8, Properties( 0, {Marker( "Circle" ), Transparency( 0.5 )} ) ),			Legend Model(				10,				Properties( 1, {Marker( "Filled Diamond" ), Marker Size( 6 )} )			)}		)	));

```

**平均の点を中心に持つ確率楕円**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// density ellipse, correlation, central meanGraph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ), Group Y( :sex ) ),	Elements(		Points( X, Y, Legend( 2 ) ),		Ellipse( X, Y, Legend( 5 ), Coverage( "95%" ), Mean Point( 1 ) )	));

```

**相関係数を表示した確率楕円**

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// density ellipse, correlation coefficientGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Culmen Depth ), Y( :Culmen Length ), Overlay( :Species ) ),	Elements(		Points( X, Y, Legend( 8 ) ),		Ellipse( X, Y, Legend( 10 ), Coverage( "50%" ), Correlation( 1 ), Mean Point( 1 ) )	));

```

**重ね合わせた確率楕円**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// overlaid density ellipse, correlation coefficientGraph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ), Overlay( :sex ) ),	Elements( Points( X, Y, Legend( 2 ) ), Ellipse( X, Y, Legend( 5 ), Correlation( 1 ) ) ));

```

### 項目のメッセージ

#### Adapt to Axis Scale

**構文:** obj &lt;&lt; Adapt to Axis Scale( state=0|1 )

**説明:** 軸のスケールが対数などに変更されている場合、変換後の座標に合わせて計算を行う。

#### Correlation

**構文:** obj &lt;&lt; Correlation( state=0|1 )

**説明:** X変数とY変数の相関係数。

#### Coverage

**構文:** obj &lt;&lt; Coverage( "99%"|"95%"|"90%"|"50%" )

#### Mean Point

**構文:** obj &lt;&lt; Mean Point( state=0|1 )

**説明:** 楕円の平均点を表示する。

## Formula Element

### 関連するコンストラクター

#### Formula Element

**構文:** Formula Element

**説明:** 列の計算式で定義された関数を表示する。

**パラメトリックな方程式**

```jsl

New Table( "bowtie",	New Column( "t", Set Values( [0, 10] ) ),	New Column( "x", Formula( Cos( :t ) ) ),	New Column( "y", Formula( Sine( :t * 2 ) ) ));// function plot, parametric equationsGraph Builder(	Show Control Panel( 0 ),	Variables( X( :x ), Y( :y ) ),	Elements( Formula( X, Y, Legend( 5 ) ) ),	SendToReport(		Dispatch( {}, "x", ScaleBox, {Min( -1.1 ), Max( 1.1 )} ),		Dispatch( {}, "y", ScaleBox, {Min( -1.4 ), Max( 1.4 )} )	));

```

**モデルの比較**

```jsl

Open( "$SAMPLE_DATA/Nonlinear Examples/Corn.jmp" );// function plot, non-linear functions piecewise linear, piecewise quadraticLocal( {obj},	obj = Data Table( "Corn.jmp" ) << Nonlinear(		Y( :yield ),		X( :linear ),		"Newton",		Finish	);	obj << Save Prediction Formula;	obj << Close Window;);Local( {obj},	obj = Data Table( "Corn.jmp" ) << Nonlinear(		Y( :yield ),		X( :quad ),		"QuasiNewton SR1",		Finish	);	obj << Save Prediction Formula;	obj << Close Window;);Graph Builder(	Show Control Panel( 0 ),	Variables(		X( :nitrate ),		Y( :yield ),		Y( :Fitted linear, Position( 1 ) ),		Y( :Fitted quad, Position( 1 ) )	),	Elements( Points( X, Y( 1 ), Legend( 8 ) ), Formula( X, Y( 2 ), Y( 3 ), Legend( 9 ) ) ));

```

### 項目のメッセージ

#### Response Axis

**構文:** obj &lt;&lt; Response Axis( "自動"|"X"|"Y" )

## Heatmap Element

### 関連するコンストラクター

#### Heatmap Element

**構文:** Heatmap Element

**説明:** X変数とY変数のカテゴリの度数を色を使って表示する。

**ウエハーマップ**

```jsl

Open( "$SAMPLE_DATA/Wafer Stacked.jmp" );// wafer map, heat map, trellis, wrap arrangementGraph Builder(	Show Control Panel( 0 ),	Variables( X( :X_Die ), Y( :Y_Die ), Wrap( :Wafer ), Color( :Defects ) ),	Elements( Heatmap( X, Y, Legend( 8 ) ) ),	SendToReport(		Dispatch( {}, "X_Die", ScaleBox, {Minor Ticks( 9 )} ),		Dispatch( {}, "Y_Die", ScaleBox, {Minor Ticks( 9 )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				8,				Properties( 0, {gradient( {Color Theme( "White to Orange" )} )} )			)}		)	));

```

**カスタムグラデーションを使ったカテゴリカル変数のヒートマップ**

```jsl

Open( "$SAMPLE_DATA/Airline Delays.jmp" );// heat map, custom gradientGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Day of Week ), Y( :Month ), Color( :Arrival Delay ) ),	Elements( Heatmap( X, Y, Legend( 17 ) ) ),	Local Data Filter(		Add Filter( columns( :Distance ), Where( :Distance >= 500 & :Distance <= 1500 ) )	),	SendToReport(		Dispatch( {}, "Month", ScaleBox, {Reversed Scale} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				17,				Properties(					0,					{gradient(						{Color Theme(							{"Blue to Gray to Red Copy", {"Continuous", "Categorical",							"Diverging"}, {{42, 63, 255}, {166, 170, 203}, {192, 192, 192},							{201, 165, 165}, {252, 11, 11}, Missing( "Black" )}, {0, 0.33,							0.5, 0.67, 1}, {"Full Color", "Tritanopia"}}						), Scale Values( [. 0 .] )}					)}				)			)}		)	));

```

**カテゴリカル変数で色分けしたヒートマップ**

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// heat map, categorical colorGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Culmen Depth ), Y( :Culmen Length ), Color( :Species ) ),	Elements( Heatmap( X, Y, Legend( 4 ) ) ));

```

**データに基づく背景色**

```jsl

Open( "$SAMPLE_DATA/Corn Wheat Soybean Production.jmp" );// heat map as background colorGraph Builder(	Transform Column(		"Mean[Total Acres Planted][State]",		Formula( Col Mean( :Total Acres Planted, :State ) )	),	Transform Column(		"delta",		Formula(			(Col At( :Total Acres Planted, -1, :State )			-Col At( :Total Acres Planted, 1, :State )) /			Col Mean( :Total Acres Planted, :State )		)	),	Show Control Panel( 0 ),	Variables(		X( :Year ),		Y( :Total Acres Planted ),		Wrap(			:State,			Order By( :Total Acres Planted, "Descending", Order Statistic( "Mean" ) )		),		Color( :delta )	),	Elements(		Heatmap( Legend( 16 ) ),		Points( X, Y, Color( 0 ), Legend( 14 ) ),		Smoother( X, Y, Color( 0 ), Legend( 15 ) )	),	Local Data Filter(		Add Filter(			columns( :"Mean[Total Acres Planted][State]"n ),			Where( :"Mean[Total Acres Planted][State]"n >= 3245000 )		)	),	SendToReport(		Dispatch( {}, "Total Acres Planted", ScaleBox,			{Format( "Engineering SI", 13 ), Minor Ticks( 0 )}		),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				16,				Properties(					0,					{gradient(						{Scale Values( [-0.3 0 0.3] ), Label Format( "Percent", 12, 0 )}					)}				)			)}		),		Dispatch( {}, "400", LegendBox, {Legend Position( {16, [2], 14, [0], 15, [1]} )} )	));

```

**ラベルのついたヒートマップ**

```jsl

Open( "$SAMPLE_DATA/Design Experiment/Peanut Data.jmp" );// labeled heatmap, treating continuous variables as categorical with transformGraph Builder(	Transform Column( "Ordinal Agitation Speed", Ordinal, Formula( :Agitation Speed ) ),	Transform Column( "Ordinal Ratio", Ordinal, Formula( :Ratio ) ),	Show Control Panel( 0 ),	Variables( X( :Ordinal Agitation Speed ), Y( :Ordinal Ratio ), Color( :Solids ) ),	Elements( Heatmap( X, Y, Legend( 29 ), Label( "Label by Value" ) ) ));

```

**度数の六角形ヒートマップ**

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// hexagonal heatmap, color by count, sequential color gradientGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Culmen Depth ), Y( :Culmen Length ) ),	Elements(		Heatmap( X, Y, Legend( 4 ), Bin Shape( "Hexagonal" ), Hex Bin Radius( 24.61 ) )	),	SendToReport(		Dispatch( {}, "400", ScaleBox,			{Legend Model(				4,				Properties( 0, {gradient( {Color Theme( "White to Purple" )} )} )			)}		)	));

```

### 項目のメッセージ

#### Bin Shape

**構文:** obj &lt;&lt; Bin Shape( "長方形"|"六角形" )

**JMP追加されたバージョン:** 16

#### Cell Outline

**構文:** obj &lt;&lt; Cell Outline( state=0|1 )

**説明:** フォントサイズの上限を定義する。

**JMP追加されたバージョン:** 16

#### Hex Bin Radius

**構文:** obj &lt;&lt; Hex Bin Radius( number )

**JMP追加されたバージョン:** 16

#### Label

**構文:** obj &lt;&lt; Label( "ラベルなし"|"値ラベル"|"パーセント値ラベル"|"行ラベル" )

**JMP追加されたバージョン:** 14

#### Label Format

**構文:** obj &lt;&lt; Label Format

**JMP追加されたバージョン:** 16

#### Max Label Size

**構文:** obj &lt;&lt; Max Label Size( number )

## Histogram Element

### 関連するコンストラクター

#### Histogram Element

**構文:** Histogram Element

**説明:** 値の範囲ごとの棒で変数の分布を表示する。

**パーセントのラベルをつけた重ね合わせヒストグラム**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// overlaid histograms, percent labelsGraph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Overlay( :sex ) ),	Elements( Histogram( X, Legend( 8 ), Smoothness( -0.0833 ), Percents( 1 ) ) ));

```

**リッジラインプロット**

```jsl

Open( "$SAMPLE_DATA/NYC 311 Records.jmp" );// ridgeline plot, overlapping kernel density estimate areas, KDEGraph Builder(	Show Control Panel( 0 ),	Show Legend( 0 ),	Variables( X( :Time ), Y( :Day of Week ) ),	Elements(		Histogram(			X,			Y,			Legend( 3 ),			Response Scale( "Percent" ),			Overlap( 4.8 ),			Histogram Style( "Kernel Density" ),			Smoothness( -0.1 )		)	),	SendToReport(		Dispatch( {}, "Time", ScaleBox, {Min( -2316 ), Max( 88403 ), Minor Ticks( 3 )} ),		Dispatch( {}, "Day of Week", ScaleBox, {Max( 4.45 )} )	));

```

**因子水準別のヒストグラム**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// histograms by levelGraph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :sex ) ),	Elements( Histogram( X, Y, Legend( 8 ) ) ));

```

**度数軸のあるヒストグラム**

```jsl

Open( "$SAMPLE_DATA/Airline Delays.jmp" );// histogram, countGraph Builder(	Show Control Panel( 0 ),	Show Legend( 0 ),	Variables( X( :Distance ), Wrap( :Airline, Show Title( 0 ) ) ),	Elements( Histogram( X, Legend( 9 ) ) ),	SendToReport(		Dispatch( {}, "Distance", ScaleBox,			{Min( -6 ), Max( 2900 ), Inc( 1000 ), Minor Ticks( 1 )}		),		Dispatch( {}, "", ScaleBox, {Format( "Engineering SI", 12 ), Inc( 2000 )} ),		Dispatch( {}, "graph title", TextEditBox,			{Set Text( "Flight Distance by Airline" )}		)	));

```

**滑らかなカーネル密度の面グラフ**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// kernel density estimate KDE area chartGraph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :sex ) ),	Elements(		Histogram(			X,			Y,			Legend( 8 ),			Histogram Style( "Kernel Density" ),			Smoothness( -0.08 )		)	));

```

### 項目のメッセージ

#### Confid Percent

**構文:** obj &lt;&lt; Confid Percent( number=. )

**説明:** 平均の信頼区間の幅をパーセントで表したもの。 デフォルトの値は"."。

**JMP追加されたバージョン:** 14

#### Counts

**構文:** obj &lt;&lt; Counts( state=0|1 )

**JMP追加されたバージョン:** 15

#### Histogram Style

**構文:** obj &lt;&lt; Histogram Style( "棒"|"多角形"|"カーネル密度"|"シャドウグラム" )

**JMP追加されたバージョン:** 15

#### Horizontal

**構文:** obj &lt;&lt; Horizontal( state=0|1 )

#### Means and Std Devs

**構文:** obj &lt;&lt; Means and Std Devs( state=0|1 )

**JMP追加されたバージョン:** 14

#### Overlap

**構文:** obj &lt;&lt; Overlap( number )

**JMP追加されたバージョン:** 15

#### Percents

**構文:** obj &lt;&lt; Percents( state=0|1 )

**JMP追加されたバージョン:** 15

#### Response Axis

**構文:** obj &lt;&lt; Response Axis( "自動"|"X"|"Y" )

#### Response Scale

**構文:** obj &lt;&lt; Response Scale( "度数"|"パーセント"|"なし" )

**JMP追加されたバージョン:** 15

#### Smoothness

**構文:** obj &lt;&lt; Smoothness( number )

**説明:** バンド幅は、密度曲線の滑らかさを左右する。バンド幅を狭くすると、密度曲線が滑らかでなくなり、ぎざぎざになる。バンド幅を広くすると、密度曲線は滑らかになるが、データの細部を表さなくなる。

**JMP追加されたバージョン:** 15

#### Vertical

**構文:** obj &lt;&lt; Vertical( state=0|1 )

**説明:** デフォルトではオン。

#### t Test for Mean At

**構文:** obj &lt;&lt; t Test for Mean At( number=. )

**説明:** 平均が指定した値と等しいか検定する。 デフォルトの値は"."。

**JMP追加されたバージョン:** 14

## Line Element

### 関連するコンストラクター

#### Line Element

**構文:** Line Element

**説明:** 応答をカテゴリごとに要約して表示する。

**イベントの期間**

```jsl

Open( "$SAMPLE_DATA/Nic Adverse Events.jmp" );// event spans, start and stop times, categorical colorGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :Study Day of Start of Adverse Event ),		X( :Study Day of End of Adverse Event, Position( 1 ) ),		Y( :Unique Subject Identifier ),		Color( :"Severity/Intensity"n )	),	Elements( Line( X( 1 ), X( 2 ), Y, Legend( 4 ), Ordering( "Within Row" ) ) ),	Local Data Filter(		Add Filter(			columns( :"Dictionary-Derived Term"n, :Action Taken with Study Treatment ),			Where( :"Dictionary-Derived Term"n == "Hypertension" ),			Where( :Action Taken with Study Treatment == "DRUG WITHDRAWN" )		)	),	SendToReport(		Dispatch( {}, "Unique Subject Identifier", ScaleBox,			{Label Row( Show Major Grid( 1 ) )}		),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				4,				Properties( 0, {Line Color( RGB Color( 0.31, 0.61, 1 ) ), Line Width( 4 )} ),				Properties(					1,					{Line Color( RGB Color( 0.69, 0.65, 0.01 ) ), Line Width( 4 )}				),				Properties(					2,					{Line Color( RGB Color( 0.79, 0.09, 0.16 ) ), Line Width( 4 )}				)			)}		)	));

```

**スパゲティプロット**

```jsl

Open( "$SAMPLE_DATA/Time Series/Air.jmp" );// Spaghetti plot, line chart, smooth connections, mean line, transform columnGraph Builder(	Transform Column( "Year", Nominal, Formula( Year( :date ) ) ),	Show Control Panel( 0 ),	Variables( X( :month ), Y( :Ozone Concentration ), Overlay( :Year ) ),	Elements(		Line( X, Y, Legend( 8 ), Connection( "Curve" ) ),		Line( X, Y, Overlay( 0 ), Legend( 9 ), Connection( "Curve" ), Smoothness( 0.6 ) )	),	SendToReport(		Dispatch( {}, "400", ScaleBox,			{Legend Model(				8,				Properties( 0, {Line Color( "gray" ), Transparency( 0.5 )} ),				Properties( 1, {Line Color( "gray" ), Transparency( 0.5 )} ),				Properties( 2, {Line Color( "gray" ), Transparency( 0.5 )} ),				Properties( 3, {Line Color( "gray" ), Transparency( 0.5 )} ),				Properties( 4, {Line Color( "gray" ), Transparency( 0.5 )} ),				Properties( 5, {Line Color( "gray" ), Transparency( 0.5 )} ),				Properties( 6, {Line Color( "gray" ), Transparency( 0.5 )} ),				Properties( 7, {Line Color( "gray" ), Transparency( 0.5 )} ),				Properties( 8, {Line Color( "gray" ), Transparency( 0.5 )} ),				Properties( 9, {Line Color( "gray" ), Transparency( 0.5 )} ),				Properties( 10, {Line Color( "gray" ), Transparency( 0.5 )} ),				Properties( 11, {Line Color( "gray" ), Transparency( 0.5 )} ),				Properties( 12, {Line Color( "gray" ), Transparency( 0.5 )} ),				Properties( 13, {Line Color( "gray" ), Transparency( 0.5 )} ),				Properties( 14, {Line Color( "gray" ), Transparency( 0.5 )} ),				Properties( 15, {Line Color( "gray" ), Transparency( 0.5 )} ),				Properties( 16, {Line Color( "gray" ), Transparency( 0.5 )} ),				Properties( 17, {Line Color( "gray" ), Transparency( 0.5 )} ),				Properties( 18, {Line Color( "gray" ), Transparency( 0.5 )} )			), Legend Model( 9, Properties( 0, {Line Color( "black" ), Line Width( 4 )} ) )}		)	));

```

**バンプチャート(順位を接続)**

```jsl

Open( "$SAMPLE_DATA/SATByYear.jmp" );// Bump chart, line chart of ranking, smooth connections, transform columnGraph Builder(	Transform Column(		"Rank",		Formula(			(Col Number( :SAT Verbal, :Year, :"@Exclude"n, :"@Filter"n )			-Col Rank( :SAT Verbal, :Year, :"@Exclude"n, :"@Filter"n )) + 1		)	),	Show Control Panel( 0 ),	Variables( X( :Year ), Y( :Rank ), Overlay( :State ) ),	Elements( Line( X, Y, Legend( 4 ), Connection( "Curve" ) ) ),	Local Data Filter(		Add Filter(			columns( :Region ),			Where(				:Region == {"Midwest", "Mountain", "New England", "Northeast", "Pacific",				"Plains", "South", "Southwest"}			)		)	),	SendToReport( Dispatch( {}, "Rank", ScaleBox, {Reversed Scale} ) ));

```

**ラベルのついた折れ線グラフ**

```jsl

Open( "$SAMPLE_DATA/Airline Delays.jmp" );// overlaid line chart, labels in graphGraph Builder(	Show Control Panel( 0 ),	Show Legend( 0 ),	Variables( X( :Day of Week ), Y( :Arrival Delay ), Overlay( :Airline ) ),	Elements( Line( X, Y, Legend( 11 ) ) ),	SendToReport(		Dispatch( {}, "400", ScaleBox,			{Legend Model(				11,				Type Properties( "H Line", {Line Label Properties( {Name Label( 1 )} )} ),				Properties( 0, {Line Label Properties( {Name Label( 1 )} )} ),				Properties( 1, {Line Label Properties( {Name Label( 1 )} )} ),				Properties( 2, {Line Label Properties( {Name Label( 1 )} )} ),				Properties( 3, {Line Label Properties( {Name Label( 1 )} )} ),				Properties( 4, {Line Label Properties( {Name Label( 1 )} )} ),				Properties( 5, {Line Label Properties( {Name Label( 1 )} )} )			)}		)	));

```

**前方区間の移動平均折れ線グラフ**

```jsl

Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );// trailing moving average line chartGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Pin ), Y( :Weight ), Color( :Product ) ),	Elements(		Points( X, Y, Legend( 11 ) ),		Smoother(			X,			Y,			Color( 0 ),			Legend( 12 ),			Method( "Moving Average" ),			Local Region( "Trailing" ),			Local Width( 6 ),			Trim( 0.6435 )		)	),	SendToReport(		Dispatch( {}, "Pin", ScaleBox, {Label Row( Show Major Grid( 1 ) )} ),		Dispatch( {}, "Weight", ScaleBox, {Label Row( Show Major Grid( 1 ) )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				12,				Properties( 0, {Line Color( RGB Color( 0.25, 0.25, 0.25 ) )} )			)}		)	));

```

**散布図の点を接続**

```jsl

New Table( "prey and predator",	Add Rows( 48 ),	New Column( "Month", Formula( Row() ) ),	New Column( "Rabbits", Formula( 10 * Cos( :Month * 0.35 ) + Random Normal( 50, 1.5 ) ) ),	New Column( "Foxes", Formula( 8 * Cos( :Month * 0.35 + 1 ) + Random Normal( 30, 1 ) ) ),);// connected scatter plot, smooth line connections, row orderGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Foxes ), Y( :Rabbits ), Color( :Month ) ),	Elements(		Line( X, Y, Legend( 5 ), Ordering( "Row Order" ), Connection( "Curve" ) ),		Points( X, Y, Color( 0 ), Legend( 6 ) )	));

```

**矢印で接続**

```jsl

Open( "$SAMPLE_DATA/SAT.jmp" );// arrow chart, multiple x and y variables, overlaidGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :"1992 Verbal"n ),		X( :"1999 Verbal"n, Position( 1 ) ),		X( :"2004 Verbal"n, Position( 1 ) ),		Y( :"1992 Math"n ),		Y( :"1999 Math"n, Position( 1 ) ),		Y( :"2004 Math"n, Position( 1 ) ),		Overlay( :State )	),	Elements(		Line(			X( 1 ),			X( 2 ),			X( 3 ),			Y( 1 ),			Y( 2 ),			Y( 3 ),			Legend( 7 ),			Ordering( "Within Row" ),			Connection( "Arrow" )		)	),	Local Data Filter(		Add Filter( columns( :"% Taking (2004)"n ), Where( :"% Taking (2004)"n >= 0.57788 ) )	),	SendToReport(		Dispatch( {}, "1992 Verbal & 2 more", TextEditBox, {Set Text( "Verbal" )} ),		Dispatch( {}, "1992 Math & 2 more", TextEditBox, {Set Text( "Math" )} )	));

```

**矢印線(1行につき1つ)**

```jsl

Open( "$SAMPLE_DATA/Cholesterol.jmp" );// arrow lines, one per rowGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :April AM ),		X( :April PM, Position( 1 ) ),		Y( :June AM ),		Y( :June PM, Position( 1 ) ),		Overlay( :treatment )	),	Elements(		Line(			X( 1 ),			X( 2 ),			Y( 1 ),			Y( 2 ),			Legend( 8 ),			Ordering( "Within Row" ),			Connection( "Arrow" )		)	));

```

**移動平均折れ線グラフ**

```jsl

Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );// moving average line chartGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Pin ), Y( :Weight ), Color( :Product ) ),	Elements(		Points( X, Y, Legend( 11 ) ),		Smoother( X, Y, Color( 0 ), Legend( 12 ), Method( "Moving Average" ) )	),	SendToReport(		Dispatch( {}, "Pin", ScaleBox, {Label Row( Show Major Grid( 1 ) )} ),		Dispatch( {}, "Weight", ScaleBox, {Label Row( Show Major Grid( 1 ) )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				12,				Properties( 0, {Line Color( RGB Color( 0.25, 0.25, 0.25 ) )} )			)}		)	));

```

**行の順序によるランチャート**

```jsl

Open( "$SAMPLE_DATA/Time Series/Air.jmp" );// Run chart, line chart by row, grid linesGraph Builder(	Show Control Panel( 0 ),	Variables( Y( :Ozone Concentration ) ),	Elements( Line( Y, Legend( 3 ) ) ),	SendToReport(		Dispatch( {}, "", ScaleBox,			{Min( 0 ), Max( 220 ), Label Row( {Show Major Grid( 1 ), Show Minor Grid( 1 )} )}		),		Dispatch( {}, "Ozone Concentration", ScaleBox, {Label Row( Show Major Grid( 1 ) )} )	));

```

**誤差バンドを表示した折れ線グラフ**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// line chart, error bandGraph Builder(	Show Control Panel( 0 ),	Variables( X( :age ), Y( :height ) ),	Elements(		Line(			X,			Y,			Legend( 4 ),			Error Interval( "Confidence Interval" ),			Interval Style( "Band" )		)	));

```

### 項目のメッセージ

#### Connection

**構文:** obj &lt;&lt; Connection( "直線"|"矢印"|"曲線"|"ステップ "|"中心化ステップ"|"横"|"縦" )

#### Error Interval

**構文:** obj &lt;&lt; Error Interval( "自動"|"なし"|"範囲"|"四分位範囲"|"標準誤差"|"標準偏差"|"信頼区間"|"中央絶対偏差"|"カスタム区間"|"二方向区間" )

#### Fill

**構文:** obj &lt;&lt; Fill( "なし"|"下を塗りつぶす"|"間を塗りつぶす" )

**JMP追加されたバージョン:** 15

#### Interval Style

**構文:** obj &lt;&lt; Interval Style( "誤差バー"|"バンド"|"ハッシュバンド"|"矢印" )

#### Missing Factors

**構文:** obj &lt;&lt; Missing Factors( "スキップ"|"欠測値として扱う"|"ゼロとして扱う" )

**説明:** データにない水準をつなぐ線の表示方法

**JMP追加されたバージョン:** 15

#### Missing Values

**構文:** obj &lt;&lt; Missing Values( "実線でつなぐ"|"薄い線でつなぐ"|"点線でつなぐ"|"つながない" )

**説明:** 欠測値をつなぐ線の表示方法。

#### Ordering

**構文:** obj &lt;&lt; Ordering( "自動"|"データの出現順"|"要約"|"行内" )

#### Response Axis

**構文:** obj &lt;&lt; Response Axis( "自動"|"X"|"Y" )

#### Row order

**構文:** obj &lt;&lt; Row order( state=0|1 )

#### Save Summary Formula

**構文:** obj &lt;&lt; Save Summary Formula

#### Smoothness

**構文:** obj &lt;&lt; Smoothness( number )

#### Stack

**構文:** obj &lt;&lt; Stack( state=0|1 )

**JMP追加されたバージョン:** 15

#### Stack Negative

**構文:** obj &lt;&lt; Stack Negative( "重ね合わせ"|"負値を分けて表示"|"ゼロとして扱う" )

**説明:** 積み重ねたときに負のデータ値をどのように処理するかを制御する。

**JMP追加されたバージョン:** 17

#### Summary Statistic

**構文:** obj &lt;&lt; Summary Statistic( "N"|"平均"|"中央値(メディアン)"|"最頻値"|"幾何平均"|"最小値"|"最大値"|"範囲"|"合計"|"累積和"|"累積%"|"全体に対する%"|"各因子水準内での%"|"全応答と全体での%"|"標準偏差"|"分散"|"標準誤差"|"変動係数"|"四分位範囲"|"中央絶対偏差"|"第1四分位点"|"第3四分位点" )

## Line of Fit Element

### 関連するコンストラクター

#### Line of Fit Element

**構文:** Line of Fit Element

**説明:** 連続尺度のXとYに対し、回帰直線と信頼区間を表示する。カテゴリカルなXの場合は平均をあてはめる。

**2次のあてはめ**

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// linear regression, overlaid curves, quadraticGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Culmen Length ), Y( :Flipper Length ), Overlay( :Species ) ),	Elements(		Points( X, Y, Legend( 9 ) ),		Line Of Fit( X, Y, Legend( 10 ), Degree( "Quadratic" ) )	));

```

**一元配置分散分析、平均の比較**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// ANOVA fit, oneway, means comparison, confidence interval, F test p-valueGraph Builder(	Show Control Panel( 0 ),	Variables( X( :age ), Y( :weight ) ),	Elements(		Points( X, Y, Legend( 1 ) ),		Line Of Fit( X, Y, Legend( 2 ), Unequal Variances( 1 ), F Test( 1 ) )	));

```

**時系列回帰**

```jsl

Open( "$SAMPLE_DATA/Time Series/Monthly Sales.jmp" );// time series regression, periodicGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Date ), Y( :Sales ) ),	Elements(		Points( X, Y, Legend( 3 ) ),		Line Of Fit( X, Y, Legend( 5 ), Fit( "Time Series" ), Seasonal Period( 12 ) )	));

```

**線形回帰の重ね合わせ**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// linear regression, overlaid with confidence intervalsGraph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ), Overlay( :sex ) ),	Elements( Points( X, Y, Legend( 2 ) ), Line Of Fit( X, Y, Legend( 4 ) ) ));

```

### 項目のメッセージ

#### Adapt to Axis Scale

**構文:** obj &lt;&lt; Adapt to Axis Scale( state=0|1 )

**説明:** 軸のスケールが対数などに変更されている場合、変換後の座標に合わせて計算を行う。

#### Confidence of Fit

**構文:** obj &lt;&lt; Confidence of Fit( state=0|1 )

#### Confidence of Prediction

**構文:** obj &lt;&lt; Confidence of Prediction( state=0|1 )

#### Constrain Parameters

**構文:** obj &lt;&lt; Constrain Parameters( state=0|1 )

**説明:** ETSパラメータを制約する。

**JMP追加されたバージョン:** 17

#### Degree

**構文:** obj &lt;&lt; Degree( "1次"|"2次"|"3次" )

#### Equation

**構文:** obj &lt;&lt; Equation( state=0|1 )

**説明:** あてはめによって得られた式。

#### F Test

**構文:** obj &lt;&lt; F Test( state=0|1 )

**説明:** モデル全体のF検定。

**JMP追加されたバージョン:** 14

#### Fit

**構文:** obj &lt;&lt; Fit( "多項式"|"ロバスト Cauchy"|"時系列" )

**JMP追加されたバージョン:** 15

#### Forecast Model

**構文:** obj &lt;&lt; Forecast Model( state=0|1 )

**説明:** 予測に使用されるモデルを、そのパラメータ推定値と一緒に表示する。

**JMP追加されたバージョン:** 15

#### Forecast Periods

**構文:** obj &lt;&lt; Forecast Periods( number )

**説明:** 将来予測したい期数(時点数)。

**JMP追加されたバージョン:** 15

#### Means and Std Devs

**構文:** obj &lt;&lt; Means and Std Devs( state=0|1 )

**説明:** 平均線に隣接する各グループの平均と標準偏差を表示する。

**JMP追加されたバージョン:** 14

#### Prediction

**構文:** obj &lt;&lt; Prediction( state=0|1 )

**説明:** 個々の予測値の信頼領域。

#### RMSE

**構文:** obj &lt;&lt; RMSE( state=0|1 )

**説明:** 誤差の標準偏差(RMSE)。応答の単位で表した誤差の指標。

#### Response Axis

**構文:** obj &lt;&lt; Response Axis( "自動"|"X"|"Y" )

#### Root Mean Square Error

**構文:** obj &lt;&lt; Root Mean Square Error( state=0|1 )

#### R²

**構文:** obj &lt;&lt; R²( state=0|1 )

**説明:** 決定係数。あてはめによりどれくらいデータの変動を説明できるかの指標。

#### Save Formula

**構文:** obj &lt;&lt; Save Formula

#### Seasonal Period

**構文:** obj &lt;&lt; Seasonal Period( number )

**説明:** 季節の期間(1季節あたりの時点数)。たとえば月次データの場合、1年を1季節としたときの期間は12。

**JMP追加されたバージョン:** 15

#### Unequal Variances

**構文:** obj &lt;&lt; Unequal Variances( state=0|1 )

**説明:** グループの分散が異なるという前提で検定結果や信頼区間を算出する。

## Mosaic Element

### 関連するコンストラクター

#### Mosaic Element

**構文:** Mosaic Element

**説明:** X変数とY変数の度数をサイズで表したグラフを表示する。

**モザイク図**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// mosaic, marimekkoGraph Builder(	Show Control Panel( 0 ),	Variables( X( :age ), Y( :sex ) ),	Elements( Mosaic( X, Y, Legend( 4 ) ) ));

```

**横向きのモザイク図**

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// horizontal mosaic, axis label line wrappingGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Clutch Completion ), Y( :Species ) ),	Elements( Mosaic( X, Y, Legend( 5 ), Response Axis( "X" ) ) ));

```

### 項目のメッセージ

#### Cell Labeling

**構文:** obj &lt;&lt; Cell Labeling( "ラベルなし"|"度数ラベル"|"パーセントラベル"|"値ラベル"|"行ラベル" )

**JMP追加されたバージョン:** 14

#### Chi-square Test

**構文:** obj &lt;&lt; Chi-square Test( state=0|1 )

**説明:** 応答の割合がグループ間で同じであるか、または2つの応答が独立しているかを調べるカイ2乗検定。

**JMP追加されたバージョン:** 14

#### Confid Percent

**構文:** obj &lt;&lt; Confid Percent( number=. )

**説明:** 上側の水準の割合について、信頼区間の幅をパーセントで表したもの。 デフォルトの値は"."。

**JMP追加されたバージョン:** 14

#### Horizontal

**構文:** obj &lt;&lt; Horizontal( state=0|1 )

#### Label Format

**構文:** obj &lt;&lt; Label Format

**JMP追加されたバージョン:** 16

#### Response Axis

**構文:** obj &lt;&lt; Response Axis( "自動"|"X"|"Y" )

#### Test Proportion At

**構文:** obj &lt;&lt; Test Proportion At( number=. )

**説明:** 上側の水準の割合が指定の値と等しいかどうかを検定する。 デフォルトの値は"."。

**JMP追加されたバージョン:** 14

#### Vertical

**構文:** obj &lt;&lt; Vertical( state=0|1 )

**説明:** デフォルトではオン。

## Parallel Element

### 関連するコンストラクター

#### Parallel Element

**構文:** Parallel Element

**説明:** 多数の変数を、行ごとに線でつないで表示する。

**サンキーパラレルセット**

```jsl

Open( "$SAMPLE_DATA/Color Preference Survey.jmp" );// parallel sets, sankey, categorical parallel coordinatesGraph Builder(	Show Control Panel( 0 ),	Show Legend( 0 ),	Variables(		X( :What is your gender?, Combine( "Parallel Independent" ) ),		X(			:"What is your favorite color? (select one)"n,			Position( 1 ),			Combine( "Parallel Independent" )		),		X( :What is your favorite color?, Position( 1 ), Combine( "Parallel Independent" ) ),		Color( :"What is your favorite color? (select one)"n )	),	Elements( Parallel( X( 1 ), X( 2 ), X( 3 ), Legend( 15 ) ) ),	SendToReport(		Dispatch( {}, "What is your gender?", ScaleBox,			{Label Row(				{Tick Mark(					Label( "What is your favorite color?" ),					Label( "Specific favorite color" )				), Tick Mark(					Label( "What is your favorite color? (select one)" ),					Label( "General favorite color" )				), Tick Mark( Label( "What is your gender?" ), Label( "Gender" ) )}			)}		)	));

```

**スケールを揃えたパラレルプロット**

```jsl

Open( "$SAMPLE_DATA/Lipid Data.jmp" );// parallel coordinates - aligned scaleGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :"Trig-3yrs"n, Combine( "Parallel Merged" ) ),		X( :"Chol-3yrs"n, Position( 1 ), Combine( "Parallel Merged" ) ),		X( :"HDL-3yrs"n, Position( 1 ), Combine( "Parallel Merged" ) ),		X( :"LDL-3yrs"n, Position( 1 ), Combine( "Parallel Merged" ) )	),	Elements( Parallel( X( 1 ), X( 2 ), X( 3 ), X( 4 ), Legend( 8 ) ) ));

```

**パラレルセット**

```jsl

Open( "$SAMPLE_DATA/Titanic Passengers.jmp" );// parallel setsGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :Survived ),		X( :Passenger Class, Position( 1 ) ),		X( :Sex, Position( 1 ) ),		X( :Age, Position( 1 ) ),		Color( :Survived )	),	Elements( Parallel( X( 1 ), X( 2 ), X( 3 ), X( 4 ), Legend( 5 ) ) ),	SendToReport(		Dispatch( {}, "Graph Builder", FrameBox,			{DispatchSeg( ParallelAxisSeg( 1 ), Reversed( Passenger Class, Sex ) )}		)	));

```

**パラレルドットプロット**

```jsl

Open( "$SAMPLE_DATA/Lipid Data.jmp" );// parallel coordinates - dotsGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :Height ),		X( :Skinfold, Position( 1 ) ),		X( :Weight, Position( 1 ) ),		X( :"% Ideal Body Wt."n, Position( 1 ) ),		X( :"% Ideal Weight-3yr"n, Position( 1 ) ),		X( :"Weight-3yr"n, Position( 1 ) ),		X( :Cholesterol, Position( 1 ) ),		X( :Triglycerides, Position( 1 ) ),		X( :HDL, Position( 1 ) ),		X( :LDL, Position( 1 ) ),		X( :Cholesterol Loss, Position( 1 ) ),		Color( :Sex )	),	Points(		Parallel(			X( 1 ),			X( 2 ),			X( 3 ),			X( 4 ),			X( 5 ),			X( 6 ),			X( 7 ),			X( 8 ),			X( 9 ),			X( 10 ),			X( 11 ),			Smoothness( 0.5 )		)	));

```

**パラレルプロット**

```jsl

Open( "$SAMPLE_DATA/Lipid Data.jmp" );// parallel coordinates - linesGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :Height ),		X( :Skinfold, Position( 1 ) ),		X( :Weight, Position( 1 ) ),		X( :"% Ideal Body Wt."n, Position( 1 ) ),		X( :"% Ideal Weight-3yr"n, Position( 1 ) ),		X( :"Weight-3yr"n, Position( 1 ) ),		X( :Cholesterol, Position( 1 ) ),		X( :Triglycerides, Position( 1 ) ),		X( :HDL, Position( 1 ) ),		X( :LDL, Position( 1 ) ),		X( :Cholesterol Loss, Position( 1 ) ),		Color( :Sex )	),	Elements(		Parallel(			X( 1 ),			X( 2 ),			X( 3 ),			X( 4 ),			X( 5 ),			X( 6 ),			X( 7 ),			X( 8 ),			X( 9 ),			X( 10 ),			X( 11 ),			Smoothness( 0.5 )		)	));

```

**パラレル箱ひげ図**

```jsl

Open( "$SAMPLE_DATA/Lipid Data.jmp" );// parallel coordinates - box plotsGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :Height ),		X( :Skinfold, Position( 1 ) ),		X( :Weight, Position( 1 ) ),		X( :"% Ideal Body Wt."n, Position( 1 ) ),		X( :"% Ideal Weight-3yr"n, Position( 1 ) ),		X( :"Weight-3yr"n, Position( 1 ) ),		X( :Cholesterol, Position( 1 ) ),		X( :Triglycerides, Position( 1 ) ),		X( :HDL, Position( 1 ) ),		X( :LDL, Position( 1 ) ),		X( :Cholesterol Loss, Position( 1 ) )	),	Elements(		Box Plot(			X( 1 ),			X( 2 ),			X( 3 ),			X( 4 ),			X( 5 ),			X( 6 ),			X( 7 ),			X( 8 ),			X( 9 ),			X( 11 )		)	));

```

### 項目のメッセージ

#### Axes Labels

**構文:** obj &lt;&lt; Axes Labels( state=0|1 )

#### Combine Sets

**構文:** obj &lt;&lt; Combine Sets( state=0|1 )

#### Smoothness

**構文:** obj &lt;&lt; Smoothness( number )

**JMP追加されたバージョン:** 16

## Pie Element

### 関連するコンストラクター

#### Pie Element

**構文:** Pie Element

**説明:** 全体に占める割合を表示する。

**パネル状の円グラフ**

```jsl

Open( "$SAMPLE_DATA/Smartphone OS.jmp" );// pie panelGraph Builder(	Transform Column( "Market Share freq", Formula( Round( :Market Share * 1000 ) ) ),	Show Control Panel( 0 ),	Show Footer( 0 ),	Variables( X( :Operating System ), Wrap( :Year ), Frequency( :Market Share freq ) ),	Elements( Pie( X, Legend( 6 ) ) ),	SendToReport(		Dispatch( {}, "graph title", TextEditBox,			{Set Text( "SmartPhone OS Market Share" )}		)	));

```

**度数のドーナツチャート**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// donut chart by countGraph Builder(	Show Control Panel( 0 ),	Variables( X( :age ) ),	Elements( Pie( X, Legend( 6 ), Pie Style( "Ring" ) ) ));

```

**度数の円グラフ**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// pie chart by countGraph Builder(	Show Control Panel( 0 ),	Variables( X( :age ) ),	Elements( Pie( X, Legend( 6 ) ) ));

```

### 項目のメッセージ

#### Label

**構文:** obj &lt;&lt; Label( "ラベルなし"|"値ラベル"|"パーセント値ラベル"|"行ラベル" )

#### Label Format

**構文:** obj &lt;&lt; Label Format

**JMP追加されたバージョン:** 16

#### Pie Style

**構文:** obj &lt;&lt; Pie Style( "円"|"ドーナツ"|"鶏頭図" )

#### Summary Statistic

**構文:** obj &lt;&lt; Summary Statistic( "N"|"平均"|"中央値(メディアン)"|"最頻値"|"幾何平均"|"最小値"|"最大値"|"範囲"|"合計"|"累積和"|"累積%"|"全体に対する%"|"各因子水準内での%"|"全応答と全体での%"|"標準偏差"|"分散"|"標準誤差"|"変動係数"|"四分位範囲"|"中央絶対偏差"|"第1四分位点"|"第3四分位点" )

## Points Element

### 関連するコンストラクター

#### Points Element

**構文:** Points Element

**説明:** データ値の散布図を表示する。

**サイズと色を使った散布図**

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// bubble plotGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :Culmen Depth ),		Y( :Culmen Length ),		Group X( :Species, Show Title( 0 ) ),		Color( :Sex ),		Size( :Body Mass )	),	Elements( Points( X, Y, Legend( 20 ) ) ),	SendToReport(		Dispatch( {}, "400", ScaleBox,			{Legend Model(				20,				Properties( 1, {Marker( "Circle" ), Transparency( 0.5 )}, ),				Properties( 2, {Marker( "FilledCircle" ), Transparency( 0.5 )} )			)}		)	));

```

**中央寄せで横に並べたドットプロット**

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// center dot plots, colored by categorical variableGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Species ), Y( :Body Mass ), Color( :Sex ) ),	Elements( Points( X, Y, Legend( 10 ) ) ),	SendToReport(		Dispatch( {}, "Species", ScaleBox, {Label Row( Show Major Grid( 1 ) )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				10,				Properties( 0, {Marker Size( 5 )} ),				Properties( 1, {Marker Size( 5 )} )			)}		)	));

```

**中央寄せで滑らかにして横に並べたドットプロット**

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// center dot plots, smoothed jitter placement, colored by categorical variableGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Species ), Y( :Body Mass ), Color( :Sex ) ),	Elements( Points( X, Y, Legend( 10 ), Jitter Smooth( 0.5 ) ) ),	SendToReport(		Dispatch( {}, "Species", ScaleBox, {Label Row( Show Major Grid( 1 ) )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				10,				Properties( 0, {Marker Size( 5 )} ),				Properties( 1, {Marker Size( 5 )} )			)}		)	));

```

**六角形グリッドのドットプロット**

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// center hexagonal grid dot plots, smoothed jitter placement, colored by categorical variableGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Species ), Y( :Body Mass ), Color( :Sex ) ),	Elements( Points( X, Y, Legend( 10 ), Jitter( "Hex Grid" ), Jitter Smooth( 1 ) ) ),	SendToReport(		Dispatch( {}, "Species", ScaleBox, {Label Row( Show Major Grid( 1 ) )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				10,				Properties( 0, {Marker Size( 5 )} ),				Properties( 1, {Marker Size( 5 )} )			)}		)	));

```

**六角形で正負方向組み合わせてずらしたドットプロット**

```jsl

Open( "$SAMPLE_DATA/S4 Temps.jmp" );// dot plot, hexagonal jitter from opposite side (ordinal), custom axis label formatGraph Builder(	Show Control Panel( 0 ),	Show Legend( 0 ),	Variables( X( :Y ), Y( :type of space ) ),	Elements(		Points(			X,			Y,			Legend( 9 ),			Jitter( "Hex Grid" ),			Jitter Side( "Ordinal" ),			Jitter Smooth( 1 )		)	),	Local Data Filter(		Add Filter(			columns( :type of space ),			Where( :type of space == {"exterior", "interior"} )		)	),	SendToReport(		Dispatch( {}, "Y", ScaleBox,			{Format( "Custom", Formula( Char( value ) || "°" ), 12, 0 )}		),		Dispatch( {}, "type of space", ScaleBox, {Min( 0 ), Max( 1 )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model( 9, Properties( 0, {Line Color( "Gray" ), Marker Size( 6 )} ) )}		),		Dispatch( {}, "Y", TextEditBox, {Set Text( "Temperature (Celcius))" )} )	));

```

**円の中央寄せのプロット**

```jsl

Open( "$SAMPLE_DATA/Design Experiment/Peanut Data.jmp" );// categorical 2D jitter, circle packing, color by responseGraph Builder(	Show Control Panel( 0 ),	Variables( X( :"Pre-Soak"n ), Y( :Hydrolyze ), Color( :Solids ) ),	Elements( Points( X, Y, Legend( 4 ) ) ),	SendToReport(		Dispatch( {}, "400", ScaleBox,			{Legend Model( 4, Properties( 1, {Marker Size( 10 )} ) )}		)	));

```

**変動性図**

```jsl

Open( "$SAMPLE_DATA/Variability Data/2 Factors Nested.jmp" );// variability chart, mean and range interval, nested axisGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Operator ), X( :Part, Position( 1 ) ), Y( :Y ) ),	Elements(		Points(			X( 1 ),			X( 2 ),			Y,			Legend( 3 ),			Summary Statistic( "Mean" ),			Error Interval( "Range" )		)	),	SendToReport(		Dispatch( {}, "Operator", ScaleBox, {Label Row( 2, Show Major Grid( 1 ) )} )	));

```

**密度ドットプロット**

```jsl

Open( "$SAMPLE_DATA/Online Consumer Data.jmp" );// density dot plot, beeswarmGraph Builder(	Show Control Panel( 0 ),	Show Legend( 0 ),	Variables( X( :Privacy ), Y( :Female ) ),	Elements(		Points(			X,			Y,			Legend( 3 ),			Jitter( "Hex Grid" ),			Jitter Side( "Positive" ),			Jitter Smooth( 1 )		)	),	SendToReport(		Dispatch( {}, "Female", ScaleBox,			{Min( 0 ), Max( 1.99 ), Label Row( Show Major Grid( 1 ) )}		),		Dispatch( {}, "400", ScaleBox,			{Legend Model( 3, Properties( 0, {Marker( "FilledCircle" )} ) )}		)	));

```

**散布図行列**

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// scatter plot matrix with main diagonal histogramsGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :Culmen Length ),		X( :Culmen Depth ),		X( :Flipper Length ),		X( :Body Mass ),		Y( :Culmen Length ),		Y( :Culmen Depth ),		Y( :Flipper Length ),		Y( :Body Mass ),		Overlay( :Species )	),	Elements( Position( 1, 1 ), Histogram( X, Y, Legend( 87 ) ) ),	Elements(		Position( 1, 2 ),		Points( X, Y, Legend( 57 ) ),		Smoother( X, Y, Legend( 58 ) )	),	Elements(		Position( 1, 3 ),		Points( X, Y, Legend( 59 ) ),		Smoother( X, Y, Legend( 60 ) )	),	Elements(		Position( 1, 4 ),		Points( X, Y, Legend( 61 ) ),		Smoother( X, Y, Legend( 62 ) )	),	Elements(		Position( 2, 1 ),		Points( X, Y, Legend( 63 ) ),		Smoother( X, Y, Legend( 64 ) )	),	Elements( Position( 2, 2 ), Histogram( X, Y, Legend( 88 ) ) ),	Elements(		Position( 2, 3 ),		Points( X, Y, Legend( 67 ) ),		Smoother( X, Y, Legend( 68 ) )	),	Elements(		Position( 2, 4 ),		Points( X, Y, Legend( 69 ) ),		Smoother( X, Y, Legend( 70 ) )	),	Elements(		Position( 3, 1 ),		Points( X, Y, Legend( 71 ) ),		Smoother( X, Y, Legend( 72 ) )	),	Elements(		Position( 3, 2 ),		Points( X, Y, Legend( 73 ) ),		Smoother( X, Y, Legend( 74 ) )	),	Elements( Position( 3, 3 ), Histogram( X, Y, Legend( 89 ) ) ),	Elements(		Position( 3, 4 ),		Points( X, Y, Legend( 77 ) ),		Smoother( X, Y, Legend( 78 ) )	),	Elements(		Position( 4, 1 ),		Points( X, Y, Legend( 79 ) ),		Smoother( X, Y, Legend( 80 ) )	),	Elements(		Position( 4, 2 ),		Points( X, Y, Legend( 81 ) ),		Smoother( X, Y, Legend( 82 ) )	),	Elements(		Position( 4, 3 ),		Points( X, Y, Legend( 83 ) ),		Smoother( X, Y, Legend( 84 ) )	),	Elements( Position( 4, 4 ), Histogram( X, Y, Legend( 90 ) ) ));

```

**滑らかになるようずらしたドットプロット**

```jsl

Open( "$SAMPLE_DATA/Online Consumer Data.jmp" );// smoothed dot plot, color by ordinalGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Privacy ), Y( :Female ), Color( :Internet Use ) ),	Elements( Points( X, Y, Legend( 5 ), Jitter Smooth( 0.8 ) ) ),	SendToReport(		Dispatch( {}, "Privacy", ScaleBox,			{Min( -2 ), Max( 2 ), Label Row( Show Major Grid( 1 ) )}		),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				5,				Type Properties( 0, "Marker", {Marker Size( 5 )} ),				Properties(					0,					{Line Color( RGB Color( 0.86, 0.52, 0.35 ) ), Marker Size( 5 )}				),				Properties(					1,					{Line Color( RGB Color( 0.95, 0.79, 0.45 ) ), Marker Size( 5 )}				),				Properties(					2,					{Line Color( RGB Color( 0.56, 0.02, 0.23 ) ), Marker Size( 5 )}				),				Properties(					3,					{Line Color( RGB Color( 0.88, 0.9, 0.74 ) ), Marker Size( 5 )}				)			)}		),		Dispatch( {}, "400", LegendBox, {Legend Position( {5, [1, 2, 0, 3]} )} )	));

```

**緯度と経度**

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );// geographic scatter plot, background map, sized dotsGraph Builder(	Show Control Panel( 0 ),	Show X Axis( 0 ),	Show Y Axis( 0 ),	Show X Axis Title( 0 ),	Show Y Axis Title( 0 ),	Variables( X( :Longitude ), Y( :Latitude ), Color( :PM10 ), Size( :POP ) ),	Elements( Points( X, Y, Legend( 2 ) ) ),	SendToReport(		Dispatch( {}, "400", ScaleBox,			{Legend Model(				2,				Properties( 0, {Marker Size( 8 )} ),				Properties( 1, {gradient( {Color Theme( "Muted Yellow to Red" )} )} )			)}		),		Dispatch( {}, "Graph Builder", FrameBox,			{Background Map( Boundaries( "US States" ) )}		)	));

```

### 項目のメッセージ

#### Error Interval

**構文:** obj &lt;&lt; Error Interval( "自動"|"なし"|"範囲"|"四分位範囲"|"標準誤差"|"標準偏差"|"信頼区間"|"中央絶対偏差"|"カスタム区間"|"二方向区間" )

#### Interval Style

**構文:** obj &lt;&lt; Interval Style( "誤差バー"|"バンド"|"ハッシュバンド"|"矢印" )

#### Jitter

**構文:** obj &lt;&lt; Jitter( "なし"|"自動"|"一様乱数"|"正規乱数"|"密度乱数"|"詰め込み"|"グリッド"|"六角形グリッド"|"ビースウォーム" )

#### Jitter Limit

**構文:** obj &lt;&lt; Jitter Limit( number )

**JMP追加されたバージョン:** 14

#### Jitter Overlap

**構文:** obj &lt;&lt; Jitter Overlap( number )

**JMP追加されたバージョン:** 19

#### Jitter Side

**構文:** obj &lt;&lt; Jitter Side( "中央寄せ"|"正方向"|"負方向"|"組み合わせ" )

#### Jitter Smooth

**構文:** obj &lt;&lt; Jitter Smooth( number )

**JMP追加されたバージョン:** 19

#### Label

**構文:** obj &lt;&lt; Label( "ラベルなし"|"値ラベル"|"行ラベル"|"行と値のラベル" )

#### Label Format

**構文:** obj &lt;&lt; Label Format

**JMP追加されたバージョン:** 18

#### Response Axis

**構文:** obj &lt;&lt; Response Axis( "自動"|"X"|"Y" )

#### Save Summary Formula

**構文:** obj &lt;&lt; Save Summary Formula

#### Set Shape Column

**構文:** obj &lt;&lt; Set Shape Column

**JMP追加されたバージョン:** 16

#### Set Shape Expression

**構文:** obj &lt;&lt; Set Shape Expression

**JMP追加されたバージョン:** 16

#### Summary Statistic

**構文:** obj &lt;&lt; Summary Statistic( "なし"|"N"|"平均"|"中央値(メディアン)"|"最頻値"|"幾何平均"|"最小値"|"最大値"|"範囲"|"合計"|"累積和"|"累積%"|"全体に対する%"|"各因子水準内での%"|"全応答と全体での%"|"標準偏差"|"分散"|"標準誤差"|"変動係数"|"四分位範囲"|"中央絶対偏差"|"第1四分位点"|"第3四分位点" )

## Shapes Element

### 関連するコンストラクター

#### Map Shapes Element

**構文:** Map Shapes Element

**説明:** 地図のシェープ変数で定義された領域を、別の変数で色分けして表示する。

**アジア太平洋を中心とした世界地図**

```jsl

Open( "$SAMPLE_DATA/World Demographics.jmp" );// world map, choropleth, grid lines, Pacific centeringGraph Builder(	Size( 1094, 586 ),	Show Control Panel( 0 ),	Variables( Color( :Total Median Age ), Shape( :Territory ) ),	Elements( Map Shapes( Legend( 3 ) ) ),	SendToReport(		Dispatch( {}, "", ScaleBox,			{Format( "Longitude DDD", "PUNDIR", 16 ), Min( -23.27 ), Max( 327.33 ), Inc( 30 ),			Minor Ticks( 0 ), Label Row( Show Major Grid( 1 ) )}		),		Dispatch( {}, "", ScaleBox( 2 ),			{Format( "Latitude DDD", "PUNDIR", 16 ), Min( -87.55 ), Max( 87.55 ), Inc( 30 ),			Minor Ticks( 0 ), Label Row( Show Major Grid( 1 ) )}		)	));

```

**カテゴリカル変数で色分けしたカスタムシェープファイル**

```jsl

Open( "$SAMPLE_DATA/S4 Temps.jmp" );// custom shape file choropleth, categorical colorGraph Builder(	Show Control Panel( 0 ),	Show X Axis( 0 ),	Show Y Axis( 0 ),	Show X Axis Title( 0 ),	Show Y Axis Title( 0 ),	Variables( Color( :sector ), Shape( :"room/office"n ) ),	Elements( Map Shapes( Legend( 2 ) ) ));

```

**グラデーションを使ったカスタムシェープファイル**

```jsl

Open( "$SAMPLE_DATA/S4 Temps.jmp" );// custom shape file choropleth, color gradientGraph Builder(	Show Control Panel( 0 ),	Show X Axis( 0 ),	Show Y Axis( 0 ),	Show X Axis Title( 0 ),	Show Y Axis Title( 0 ),	Variables( Group X( :time of day ), Color( :fahrenheit ), Shape( :"room/office"n ) ),	Elements( Map Shapes( Legend( 2 ) ) ));

```

**世界地図コロプレス**

```jsl

Open( "$SAMPLE_DATA/World Demographics.jmp" );// world map, choropleth, grid linesGraph Builder(	Show Control Panel( 0 ),	Variables( Color( :Total Median Age ), Shape( :Territory ) ),	Elements( Map Shapes( Legend( 3 ) ) ),	SendToReport(		Dispatch( {}, "", ScaleBox,			{Format( "Longitude DDD", "PUNDIR", 16 ), Min( -175.3 ), Max( 175.3 ), Inc( 30 ),			Minor Ticks( 0 ), Label Row( Show Major Grid( 1 ) )}		),		Dispatch( {}, "", ScaleBox( 2 ),			{Format( "Latitude DDD", "PUNDIR", 16 ), Min( -82.6 ), Max( 82.6 ), Inc( 30 ),			Minor Ticks( 0 ), Label Row( Show Major Grid( 1 ) )}		)	));

```

**正積図法による地中海のコロプレス**

```jsl

Open( "$SAMPLE_DATA/World Demographics.jmp" );// Mediterranean map, choropleth, equal area projection, grid linesGraph Builder(	Size( 1094, 586 ),	Show Control Panel( 0 ),	Variables( Color( :Total Median Age ), Shape( :Territory ) ),	Elements( Map Shapes( Legend( 3 ) ) ),	SendToReport(		Dispatch( {}, "", ScaleBox,			{Format( "Longitude DDD", "PUNDIR", 16 ), Min( -14.2917884823647 ),			Max( 64.9684846475565 ), Inc( 20 ), Minor Ticks( 1 ),			Label Row( Show Major Grid( 1 ) )}		),		Dispatch( {}, "", ScaleBox( 2 ),			{Format( "Latitude DDD", "PUNDIR", 16 ), Min( 21.8020806509188 ),			Max( 61.3932495299748 ), Inc( 10 ), Minor Ticks( 1 ),			Label Row( Show Major Grid( 1 ) )}		)	));

```

### 項目のメッセージ

#### Aspect Ratio

**構文:** obj &lt;&lt; Aspect Ratio( number )

**説明:** X:Yの縦横比の調整因子。

#### Show Missing Shapes

**構文:** obj &lt;&lt; Show Missing Shapes( state=0|1 )

**JMP追加されたバージョン:** 16

#### Summary Statistic

**構文:** obj &lt;&lt; Summary Statistic( "N"|"平均"|"中央値(メディアン)"|"最頻値"|"幾何平均"|"最小値"|"最大値"|"範囲"|"合計"|"累積和"|"累積%"|"全体に対する%"|"各因子水準内での%"|"全応答と全体での%"|"標準偏差"|"分散"|"標準誤差"|"変動係数"|"四分位範囲"|"中央絶対偏差"|"第1四分位点"|"第3四分位点" )

## Smoother Element

### 関連するコンストラクター

#### Smoother Element

**構文:** Smoother Element

**説明:** データに沿った滑らかな曲線を表示する。連続量のX変数とY変数の関係を調べる場合に最適。

**サイクルの制約を持つ平滑線**

```jsl

Open( "$SAMPLE_DATA/Time Series/Air.jmp" );// smoother, cycle, p-spline, bootstrap confidence intervalGraph Builder(	Show Control Panel( 0 ),	Variables( X( :month ), Y( :Ozone Concentration ) ),	Elements(		Points( X, Y, Legend( 5 ) ),		Smoother(			X,			Y,			Legend( 6 ),			Method( "P-Spline" ),			Shape Constraint( "Cycle" ),			Confidence of Fit( 1 )		)	));

```

**分割した滑らかな時系列傾向線**

```jsl

Open( "$SAMPLE_DATA/Time Series/Air.jmp" );// Time series, split trend curve, grid linesGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :date ),		Y( :Ozone Concentration ),		Overlay( :Intervention for post 1960 period )	),	Elements( Points( X, Y, Legend( 9 ) ), Smoother( X, Y, Legend( 10 ), Lambda( 1.4 ) ) ),	SendToReport(		Dispatch( {}, "date", ScaleBox, {Minor Ticks( 4 )} ),		Dispatch( {}, "Ozone Concentration", ScaleBox, {Label Row( Show Major Grid( 1 ) )} )	));

```

**単調で滑らかな傾向線**

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// monotonic smooth trend line, p-spline, constraintGraph Builder(	Show Control Panel( 0 ),	Include Missing Continuous Values( 0 ),	Variables( X( :Culmen Length ), Y( :Culmen Depth ), Overlay( :Species ) ),	Elements(		Points( X, Y ),		Smoother(			X,			Y,			Method( "P-Spline" ),			Lambda( 0.3 ),			Shape Constraint( "Non-descending" )		)	));

```

**対数のX軸で単調**

```jsl

Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );// monotonic spline smoother, log x axis, overlaid, legend in graph cornerGraph Builder(	Show Control Panel( 0 ),	Legend Position( "Inside Left" ),	Variables( X( :Concentration ), Y( :Toxicity ), Overlay( :Formulation ) ),	Elements(		Points( X, Y, Legend( 11 ) ),		Smoother(			X,			Y,			Legend( 12 ),			Method( "P-Spline" ),			Shape Constraint( "Non-descending" )		)	),	SendToReport(		Dispatch( {}, "Concentration", ScaleBox, {Scale( "Log" ), Minor Ticks( 1 )} )	));

```

**平滑線の比較: Loess、スプライン、p-スプライン**

```jsl

Open( "$SAMPLE_DATA/Nonlinear Examples/Corn.jmp" );// smoothers, loess, cubic spline, p-spline, monotonic, legend in bottom rightGraph Builder(	Show Control Panel( 0 ),	Legend Position( "Inside Bottom Right" ),	Variables( X( :nitrate ), Y( :yield ) ),	Elements(		Points( X, Y, Legend( 3 ) ),		Smoother(			X,			Y,			Legend( 4 ),			Method( "Local Kernel" ),			Lambda( 0.5 ),			Local Width( 0.687 ),			Trim( 0 )		),		Smoother( X, Y, Legend( 5 ), Lambda( 0.4 ) ),		Smoother(			X,			Y,			Legend( 6 ),			Method( "P-Spline" ),			Lambda( 2.0 ),			Shape Constraint( "Non-descending" )		)	),	SendToReport(		Dispatch( {}, "400", ScaleBox,			{Legend Model( 4, Level Name( 0, "Loess" ) ),			Legend Model( 5, Level Name( 0, "Spline" ) ),			Legend Model( 6, Level Name( 0, "Monotonic p-spline" ) )}		),		Dispatch( {}, "400", LegendBox,			{Set Title( "" ), Legend Position( {3, [-1], 4, [0], 5, [1], 6, [2]} )}		)	));

```

**滑らかな傾向線、パネル状**

```jsl

Open( "$SAMPLE_DATA/Nonlinear Examples/Algae Mitscherlich.jmp" );// paneled cubic spline trend linesGraph Builder(	Show Control Panel( 0 ),	Show Legend( 0 ),	Variables( X( :Days ), Y( :Algae density ), Wrap( :Treatment ) ),	Elements( Points( X, Y, Legend( 9 ) ), Smoother( X, Y, Legend( 10 ) ) ));

```

**滑らかな傾向線、パネル状、重ね合わせ**

```jsl

Open( "$SAMPLE_DATA/Corn Wheat Soybean Production.jmp" );// smoothers paneled and filteredGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :Year ),		Y( :Commodity Acres Planted ),		Group X( :State ),		Overlay( :Commodity )	),	Elements( Points( X, Y, Legend( 38 ) ), Smoother( X, Y, Legend( 39 ) ) ),	Local Data Filter(		Add Filter( columns( :State ), Where( :State == {"IOWA", "NEBRASKA", "OKLAHOMA"} ) )	));

```

**滑らかな傾向線、重ね合わせ**

```jsl

Open( "$SAMPLE_DATA/Nonlinear Examples/Algae Mitscherlich.jmp" );// overlaid cubic spline trend linesGraph Builder(	Show Control Panel( 0 ),	Legend Position( "Inside Left" ),	Variables( X( :Days ), Y( :Algae density ), Overlay( :Treatment ) ),	Elements( Points( X, Y, Legend( 9 ) ), Smoother( X, Y, Legend( 10 ) ) ));

```

**滑らかな傾向線と信頼区間**

```jsl

Open( "$SAMPLE_DATA/Nonlinear Examples/Chemical Kinetics.jmp" );// cubic spline smoother confidence intervalGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Concentration ), Y( :"Velocity (y)"n ) ),	Elements(		Points( X, Y, Legend( 3 ) ),		Smoother( X, Y, Legend( 4 ), Confidence of Fit( 1 ) )	));

```

**滑らかな傾向線を加えた散布図**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// smoothers and scatter plot, overlay, panels, trellis, trend curve, splineGraph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ), Wrap( :age ), Overlay( :sex ) ),	Elements( Points( X, Y ), Smoother( X, Y, Lambda( 0.2 ) ) ));

```

### 項目のメッセージ

#### Adapt to Axis Scale

**構文:** obj &lt;&lt; Adapt to Axis Scale( state=0|1 )

**説明:** 軸のスケールが対数などに変更されている場合、変換後の座標に合わせて計算を行う。

#### Confidence Bootstrap

**構文:** obj &lt;&lt; Confidence Bootstrap( number )

**JMP追加されたバージョン:** 14

#### Confidence of Fit

**構文:** obj &lt;&lt; Confidence of Fit( state=0|1 )

**説明:** あてはめのブートストラップ信頼領域。

**JMP追加されたバージョン:** 14

#### Constrain Confidence Region

**構文:** obj &lt;&lt; Constrain Confidence Region( state=0|1 )

**説明:** 形状の制約を、信頼領域の計算に使うブートストラップのあてはめにも適用するかどうか。

**JMP追加されたバージョン:** 19

#### Degree

**構文:** obj &lt;&lt; Degree( "メディアン"|"平均"|"線形"|"2次"|"3次" )

**JMP追加されたバージョン:** 16

#### Lambda

**構文:** obj &lt;&lt; Lambda( number )

#### Local Constraint

**構文:** obj &lt;&lt; Local Constraint( state=0|1 )

**説明:** 近くにあるデータの応答値の範囲内になるように曲線を制限する。

**JMP追加されたバージョン:** 19

#### Local Region

**構文:** obj &lt;&lt; Local Region( "べき乗"|"割合"|"固定"|"前方区間" )

**JMP追加されたバージョン:** 16

#### Local Robustness

**構文:** obj &lt;&lt; Local Robustness( number )

**JMP追加されたバージョン:** 16

#### Local Weighting

**構文:** obj &lt;&lt; Local Weighting( "トリキューブ"|"余弦(cos) "|"Epanechnikov"|"Gauss"|"Cauchy"|"Laplace"|"三角"|"長方形" )

**JMP追加されたバージョン:** 16

#### Local Width

**構文:** obj &lt;&lt; Local Width( number )

**JMP追加されたバージョン:** 16

#### Maximum Constraint

**構文:** obj &lt;&lt; Maximum Constraint( number )

#### Method

**構文:** obj &lt;&lt; Method( "スプライン"|"P-スプライン"|"局所カーネル"|"Savitzky-Golay"|"移動平均"|"移動箱ひげ図" )

**JMP追加されたバージョン:** 15

#### Minimum Constraint

**構文:** obj &lt;&lt; Minimum Constraint( number )

#### Response Axis

**構文:** obj &lt;&lt; Response Axis( "自動"|"X"|"Y" )

#### Save Formula

**構文:** obj &lt;&lt; Save Formula

#### Scale lambda for count

**構文:** obj &lt;&lt; Scale lambda for count( state=0|1 )

**説明:** データサイズを考慮して、平滑化スプラインのパラメータλを調整する。標本サイズが異なるグループ間で、平滑化処理を統一したい場合に有用。

#### Shape Constraint

**構文:** obj &lt;&lt; Shape Constraint( "なし"|"非下降"|"非上昇"|"ピーク(山)"|"バレー(谷)"|"ピークとバレー"|"開始部分が平坦"|"終了部分が平坦"|"開始と終了の部分が平坦"|"サイクル" )

**JMP追加されたバージョン:** 19

#### Summary Statistic

**構文:** obj &lt;&lt; Summary Statistic( "なし"|"N"|"平均"|"中央値(メディアン)"|"最頻値"|"幾何平均"|"最小値"|"最大値"|"範囲"|"合計"|"累積和"|"累積%"|"全体に対する%"|"各因子水準内での%"|"全応答と全体での%"|"標準偏差"|"分散"|"標準誤差"|"変動係数"|"四分位範囲"|"中央絶対偏差"|"第1四分位点"|"第3四分位点" )

#### Trim

**構文:** obj &lt;&lt; Trim( number )

**JMP追加されたバージョン:** 16

## Treemap Element

### 関連するコンストラクター

#### Treemap Element

**構文:** Treemap Element

**説明:** カテゴリごとに応答を要約して表示する。カテゴリが多数のときに適している。

**位置的順序の指定**

```jsl

Open( "$SAMPLE_DATA/SATByYear.jmp" );// treemap, positional ordering hintsGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :State ),		Y( :Longitude ),		Y( :Latitude, Position( 1 ) ),		Color( :SAT Verbal ),		Size( :Population )	),	Elements( Treemap( X, Y( 1 ), Y( 2 ), Legend( 9 ) ) ));

```

**入れ子のツリーマップ、長方形分割**

```jsl

Open( "$SAMPLE_DATA/Color Preference Survey.jmp" );// nested treemap, squarify, color value column propertyGraph Builder(	Show Control Panel( 0 ),	Show Legend( 0 ),	Variables(		X( :What is your gender? ),		X( :"What is your favorite color? (select one)"n, Position( 1 ) ),		X( :What is your favorite color?, Position( 1 ) ),		Color( :"What is your favorite color? (select one)"n )	),	Elements(		Treemap(			X( 1 ),			X( 2 ),			X( 3 ),			Legend( 6 ),			Layout( "Squarify" ),			Group Labels( "Above" )		)	));

```

**連続的なカラーグラデーション**

```jsl

Open( "$SAMPLE_DATA/Airline Delays.jmp" );// treemap, continuous color gradientGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Airline ), Color( :Arrival Delay ) ),	Elements( Treemap( X, Legend( 5 ), Summary Statistic( "N" ) ) ),	SendToReport(		Dispatch( {}, "graph title", TextEditBox,			{Set Text( "Airline Flight Count colored by Average Delay" )}		)	));

```

### 項目のメッセージ

#### Category Name

**構文:** obj &lt;&lt; Category Name( state=0|1 )

**説明:** カテゴリの列名をカテゴリラベルの一部として表示する。このオプションはカテゴリの値も表示されている場合のみ使用可能。

#### Category Value

**構文:** obj &lt;&lt; Category Value( state=0|1 )

**説明:** カテゴリの値をカテゴリラベルの一部として表示する。

#### Color Label Format

**構文:** obj &lt;&lt; Color Label Format

**JMP追加されたバージョン:** 16

#### Color Name

**構文:** obj &lt;&lt; Color Name( state=0|1 )

**説明:** 色分け変数の名前を色のラベルに含める。このオプションは、色の列の値が表示されている場合のみ使用できる。

**JMP追加されたバージョン:** 16

#### Color Value

**構文:** obj &lt;&lt; Color Value( state=0|1 )

**説明:** 色の変数の値をカテゴリのラベルの一部として表示する。このオプションは色の変数が指定されている場合のみ使用可能。

#### Group Labels

**構文:** obj &lt;&lt; Group Labels( "なし"|"上"|"フローティング" )

**説明:** グループラベルの表示方法を指定する。非表示、カテゴリの上に表示、フローティングボックスとして表示から選択する。

#### Implicit Color

**構文:** obj &lt;&lt; Implicit Color( state=0|1 )

**説明:** ツリーマップを色分けする。このオプションを選択解除すると、ツリーマップは単色で表示される。色の変数が指定されている場合、このオプションは無効となる。 デフォルトではオン。

#### Label Justification

**構文:** obj &lt;&lt; Label Justification( "左側"|"中央部"|"右側" )

#### Label Threshold

**構文:** obj &lt;&lt; Label Threshold( number )

**説明:** ボックス内にラベルを表示する最小サイズ(面積)。

#### Label Transparency

**構文:** obj &lt;&lt; Label Transparency( number )

**説明:** グループのラベル表示がフローティングとなっている場合の透明度を設定する。有効な値の範囲は0.0～1.0。

**JMP追加されたバージョン:** 16

#### Layout

**構文:** obj &lt;&lt; Layout( "分割"|"長方形分割"|"混合" )

#### Max Label Size

**構文:** obj &lt;&lt; Max Label Size( number )

**説明:** フォントサイズの上限を定義する。

#### Orientation Bias

**構文:** obj &lt;&lt; Orientation Bias( number )

**説明:** 水平方向と垂直方向の領域分割の相対的な優先度を設定する。

**JMP追加されたバージョン:** 17

#### Show Frames

**構文:** obj &lt;&lt; Show Frames( state=0|1 )

**説明:** デフォルトではオン。

#### Show Group Name

**構文:** obj &lt;&lt; Show Group Name( state=0|1 )

**説明:** グループの列名をグループラベルの一部として表示する。このオプションはグループラベルがグループタイルの上にある場合のみ使用可能。

#### Size Label Format

**構文:** obj &lt;&lt; Size Label Format

**JMP追加されたバージョン:** 16

#### Size Name

**構文:** obj &lt;&lt; Size Name( state=0|1 )

**説明:** サイズ変数の名前をサイズのラベルに含める。このオプションは、サイズの列の値が表示されている場合のみ使用できる。

**JMP追加されたバージョン:** 16

#### Size Value

**構文:** obj &lt;&lt; Size Value( state=0|1 )

**説明:** サイズ変数の値をカテゴリのラベルの一部として表示する。

#### Summary Statistic

**構文:** obj &lt;&lt; Summary Statistic( "N"|"平均"|"中央値(メディアン)"|"最頻値"|"幾何平均"|"最小値"|"最大値"|"範囲"|"合計"|"累積和"|"累積%"|"全体に対する%"|"各因子水準内での%"|"全応答と全体での%"|"標準偏差"|"分散"|"標準誤差"|"変動係数"|"四分位範囲"|"中央絶対偏差"|"第1四分位点"|"第3四分位点" )

#### Tile Labels

**構文:** obj &lt;&lt; Tile Labels

