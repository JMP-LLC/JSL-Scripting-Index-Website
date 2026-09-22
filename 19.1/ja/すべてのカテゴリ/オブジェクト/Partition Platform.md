# Partition Platform



## 関連するコンストラクター

### Partition

**構文:** Partition( Y( column ), X( columns ) )

**説明:** 予測変数と応答値の関係に従ってデータを対話的に分岐することで、ディシジョンツリーを作成する。応答と予測変数は、連続量または離散値のどちらでもよい。

**例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << Partition(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Split Best( 3 ));

```

**例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Partition( Y( :country ), X( :sex, :marital status, :age, :type, :size ) );obj << Split Best( 2 );

```

## 項目のメッセージ

### Method

**構文:** Method( "Decision Tree" )

**説明:** パーティションで使用する方法を指定する。デフォルトは、ディシジョンツリー(決定木)。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ));obj << Split Best( 2 );

```

## Decision Tree

### 共有されるメッセージ

#### Action

**構文:** obj &lt;&lt; Action

**説明:** 評価する式を挿入するための、プラットフォーム内の汎用トラップドア。プラットフォームに一時的にディスプレイボックスおよびデータテーブルのコンテキストを設定する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

#### Apply Preset

**構文:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**説明:** 作成されたプリセットをオブジェクトに適用する。保存された設定に合わせてオプションとカスタマイズが更新される。

**JMP追加されたバージョン:** 18

**フォルダ内で検索**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

**匿名のプリセット**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );Wait( 1 );obj2 << Apply Preset( preset );

```

**名前で検索**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

#### Broadcast

**構文:** obj &lt;&lt; Broadcast(message)

**説明:** メッセージをプラットフォームに一括適用する。個々のオブジェクトから戻される結果がデータテーブルである場合は、可能な限り連結する。その最終的な形式は、Table BoxのSave Combined Tableオプションの結果と同じになるか、またはソース列を使用したConcanateオプションの結果と同じになる。それ以外の場合、結果はリストの形で戻される。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );objs = Control Chart Builder(	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),	By( :OPERATOR ));objs[1] << Broadcast( Save Summaries );

```

#### Column Switcher

**構文:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**説明:** プラットフォームの変数を変更するための設定パネルを追加する。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});

```

#### Copy ByGroup Script

**構文:** obj &lt;&lt; Copy ByGroup Script

**説明:** この分析を再現するJSLスクリプトを生成し、クリップボードにコピーする。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));dt << Make Validation Column(	Training Set( .5 ),	Validation Set( .3 ),	Test Set( .2 ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Go);obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj << Split Best( 2 );obj[1] << Copy ByGroup Script;

```

#### Copy Script

**構文:** obj &lt;&lt; Copy Script

**説明:** この分析を再現するJSLスクリプトを生成し、クリップボードにコピーする。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );obj << Copy Script;

```

#### Data Table Window

**構文:** obj &lt;&lt; Data Table Window

**説明:** この分析に使用したデータテーブルのウィンドウを手前に表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );obj << Data Table Window;

```

#### Get By Levels

**構文:** obj &lt;&lt; Get By Levels

**説明:** By列が指定されている場合、列名をキー、データ値を値とした連想配列を戻す。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv << Get By Levels;

```

#### Get ByGroup Script

**構文:** obj &lt;&lt; Get ByGroup Script

**説明:** この分析を再現するスクリプト(JSL)を生成し、それを式として戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));dt << Make Validation Column(	Training Set( .5 ),	Validation Set( .3 ),	Test Set( .2 ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Go);obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj << Split Best( 2 );t = obj[1] << Get ByGroup Script;Show( t );

```

#### Get Container

**構文:** obj &lt;&lt; Get Container

**説明:** オブジェクトのコンテンツを含んだコンテナボックスの参照を戻す。

**フィルタのあるプラットフォーム**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

**一般**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Get Data Table

**構文:** obj &lt;&lt; Get Data Table

**説明:** データテーブルへの参照を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );t = obj << Get Datatable;Show( N Rows( t ) );

```

#### Get Group Platform

**構文:** obj &lt;&lt; Get Group Platform

**説明:** 該当のプラットフォームがグループに属している場合に、Group Platformオブジェクトを戻す。それ以外の場合はEmpty()を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );group = biv[1] << Get Group Platform;Wait( 1 );group << Layout( "Arrange in Tabs" );

```

#### Get Script

**構文:** obj &lt;&lt; Get Script

**説明:** この分析を再現するスクリプト(JSL)を生成し、それを式として戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );t = obj << Get Script;Show( t );

```

#### Get Script With Data Table

**構文:** obj &lt;&lt; Get Script With Data Table

**説明:** この分析を再現するスクリプト(JSL)をデータテーブルへの参照も含めて生成し、それを式として戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );t = obj << Get Script With Data Table;Show( t );

```

#### Get Timing

**構文:** obj &lt;&lt; Get Timing

**説明:** プラットフォームの起動にかかった時間を取得する。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );t = obj << Get Timing;Show( t );

```

#### Get Web Support

**構文:** obj &lt;&lt; Get Web Support

**説明:** ディスプレイオブジェクトにおけるインタラクティブHTMLサポートのレベルを数値で戻す。1は、一部または全部の要素がサポートされていることを示し、0は、サポートされないことを示す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );s = obj << Get Web Support();Show( s );

```

#### Get Where Expr

**構文:** obj &lt;&lt; Get Where Expr

**説明:** プラットフォームがBy()またはWhere()を使って起動された場合に、データをサブセットするためのWhere式を戻す。By()やWhere()が使われていない場合はEmpty()を戻す。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

#### Ignore Platform Preferences

**構文:** Ignore Platform Preferences( state=0|1 )

**説明:** プラットフォームに対する現在の環境設定を無視する。このメッセージは、プラットフォームを呼び出した後に、そのプラットフォームに送られた場合、無視される。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Ignore Platform Preferences( 1 ),	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

#### Local Data Filter

**構文:** obj &lt;&lt; Local Data Filter

**説明:** このプラットフォームに対してのみ有効なフィルタで、データを特定のグループまたは範囲にフィルタリングする。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));

```

#### New Preset

**構文:** obj = New Preset()

**説明:** オブジェクトに適用されているオプションとカスタマイズをプリセットとしてまとめる。このオブジェクトをApply Presetに渡すことで、同じ種類のオブジェクトに設定をコピーすることができる。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();

```

#### Paste Local Data Filter

**構文:** obj &lt;&lt; Paste Local Data Filter

**説明:** クリップボードにあるローカルデータフィルタを現在のレポートに適用する。

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );filter = dist << Local Data Filter(	Add Filter( columns( :Region ), Where( :Region == "MW" ) ));filter << Copy Local Data Filter;dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );Wait( 1 );dist2 << Paste Local Data Filter;

```

#### Redo Analysis

**構文:** obj &lt;&lt; Redo Analysis

**説明:** 同じ分析をやり直し新しいウィンドウに表示する。データが変更されていると分析結果は異なる。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );obj << Redo Analysis;

```

#### Relaunch Analysis

**構文:** obj &lt;&lt; Relaunch Analysis

**説明:** プラットフォームの起動ウィンドウを開き、レポートを作成した時の設定を表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );obj << Relaunch Analysis;

```

#### Remove Column Switcher

**構文:** obj &lt;&lt; Remove Column Switcher

**説明:** プラットフォームに最後に追加された列スイッチャーを削除する。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});Wait( 2 );obj << Remove Column Switcher;

```

#### Remove Local Data Filter

**構文:** obj &lt;&lt; Remove Local Data Filter

**説明:** すでに作成されているローカルデータフィルタを削除し、プラットフォームはデータテーブル内のすべてのデータを使用した状態に戻る。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dist = dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));Wait( 2 );dist << remove local data filter;

```

#### Report

**構文:** obj &lt;&lt; Report; Report( obj )

**説明:** レポートオブジェクトへの参照を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

#### Report View

**構文:** obj &lt;&lt; Report View( "完全"|"要約" )

**説明:** レポートビューは、プラットフォームレポートの詳細を表示するかどうかを決定する。Fullはすべての詳細を表示し、Summaryはプラットフォームにより限定されたものだけを表示する。 動作をカスタマイズするため、各ディスプレイボックスは<<Set Summary Behaviorメッセージをサポートする。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**構文:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**説明:** 分析を再現するためのJSLスクリプトを作成し、データテーブルにテーブルプロパティとして保存する。スクリプトの名前を指定できる。Append Suffixオプションは、スクリプト名に数字の接尾辞を追加する。これにより、同名のスクリプトが存在していても区別できる。Promptオプションは、ユーザにスクリプト名の指定を促す。Replaceオプションは、同名の既存のスクリプトを置き換える。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));dt << Make Validation Column(	Training Set( .5 ),	Validation Set( .3 ),	Test Set( .2 ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Go);obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj << Split Best( 2 );obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**構文:** obj &lt;&lt; Save ByGroup Script to Journal

**説明:** この分析を再現するJSLスクリプトを生成し、ジャーナルにそのスクリプトのボタンを追加する。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));dt << Make Validation Column(	Training Set( .5 ),	Validation Set( .3 ),	Test Set( .2 ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Go);obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj << Split Best( 2 );obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**構文:** obj &lt;&lt; Save ByGroup Script to Script Window

**説明:** この分析を再現するJSLスクリプトを生成し、現在のスクリプトウィンドウに表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));dt << Make Validation Column(	Training Set( .5 ),	Validation Set( .3 ),	Test Set( .2 ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Go);obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj << Split Best( 2 );obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**構文:** obj &lt;&lt; Save Script for All Objects

**説明:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**構文:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**説明:** すべてのレポートオブジェクトを再現するスクリプトを現在のデータテーブルに保存する。このオプションは、ウィンドウ内にレポートが複数ある場合に便利。作成されるスクリプトの名前は、引用符で囲んで指定しない限り、1つ目のプラットフォーム名となる。

**例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));dt << Make Validation Column(	Training Set( .5 ),	Validation Set( .3 ),	Test Set( .2 ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Go);obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj << Split Best( 2 );obj[1] << Save Script for All Objects To Data Table;

```

**例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));dt << Make Validation Column(	Training Set( .5 ),	Validation Set( .3 ),	Test Set( .2 ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Go);obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj << Split Best( 2 );obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**構文:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**説明:** この分析を再現するJSLスクリプトを生成し、データテーブルのテーブルプロパティとして保存する。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**構文:** obj &lt;&lt; Save Script to Journal

**説明:** この分析を再現するJSLスクリプトを生成し、ジャーナルにそのスクリプトのボタンを追加する。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );obj << Save Script to Journal;

```

#### Save Script to Report

**構文:** obj &lt;&lt; Save Script to Report

**説明:** この分析を再現するJSLスクリプトを生成し、レポートウィンドウに表示する。分析手順の記録を結果と一緒に残せる。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );obj << Save Script to Report;

```

#### Save Script to Script Window

**構文:** obj &lt;&lt; Save Script to Script Window

**説明:** この分析を再現するJSLスクリプトを生成し、現在のスクリプトウィンドウに表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );obj << Save Script to Script Window;

```

#### SendToByGroup

**構文:** SendToByGroup( {":Column == level"}, command );

**説明:** プラットフォームコマンドまたは表示のカスタマイズコマンドをByグループの各水準に送る。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	By( :Sex ),	SendToByGroup(		{:sex == "F"},		Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) )	),	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) ));

```

#### SendToEmbeddedScriptable

**構文:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**説明:** SendToEmbeddedScriptableは、埋め込まれたスクリプト可能なオブジェクトの設定を復元する。

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );dt << Life Distribution(	Y( :Time ),	Censor( :Censor ),	Censor Code( 1 ),	<<Fit Weibull,	SendToEmbeddedScriptable(		Dispatch(			{"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}		)	));

```

#### SendToReport

**構文:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**説明:** Send To Reportはレポートの表示をカスタマイズするためにDispatchコマンドと一緒に使用される。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Nominal Distribution( Column( :age ) ),	Continuous Distribution( Column( :weight ) ),	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) ));

```

#### Sync to Data Table Changes

**構文:** obj &lt;&lt; Sync to Data Table Changes

**説明:** 除外やデータの変更が行われた場合に同期する。

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );Wait( 1 );dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );dist << Sync To Data Table Changes;

```

#### Title

**構文:** obj &lt;&lt; Title( "new title" )

**説明:** プラットフォームのタイトルを設定する。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );obj << Title( "My Platform" );

```

#### Top Report

**構文:** obj &lt;&lt; Top Report

**説明:** レポート内のルートノードへの参照を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

#### Transform Column

**構文:** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**説明:** オブジェクトのローカルコンテキスト(通常はプラットフォーム)内に変換列を作成する。この変換列は、それを作成したプラットフォームの中のみで使用可能。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),	Continuous Distribution( Column( :"age^2"n ) ));

```

#### View Web XML

**構文:** obj &lt;&lt; View Web XML

**説明:** インタラクティブHTMLレポートの作成に使うXMLコードを戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );xml = obj << View Web XML;

```

#### Window View

**構文:** obj = Decision Tree(...Window View( "Visible"|"Invisible"|"Private" )...)

**説明:** レポートとして作成するウィンドウの種類を設定する。デフォルトでは、Visibleレポートウィンドウが作成される。Invisible のウィンドウは画面に表示されないが、Window()などの関数によって検出できる。Private のウィンドウにはほとんどのウィンドウメッセージを送れるが、検出することはできないため、レポートオブジェクトを通してアクセスする必要がある。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

### 列

#### By

**構文:** obj &lt;&lt; By( column(s) )

**説明:** 指定された列の各水準に対して、個別に分析を実行する。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));dt << Make Validation Column(	Training Set( .5 ),	Validation Set( .3 ),	Test Set( .2 ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Go);obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj << Split Best( 2 );

```

#### Factor

**構文:** obj &lt;&lt; Factor( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );

```

#### Freq

**構文:** obj &lt;&lt; Freq( column )

**説明:** 分析の際に各行の度数として用いる値の列を指定する。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << New Column( "_freqcol", Numeric, Continuous, Set Each Value( Random Integer( 1, 5 ) ) );dt << Make Validation Column(	Training Set( .5 ),	Validation Set( .3 ),	Test Set( .2 ),	Freq( :_freqcol ),	Go);obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ),	Freq( :_freqcol ));obj << Split Best( 2 );

```

#### Response

**構文:** obj &lt;&lt; Response( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );

```

#### Validation

**構文:** obj &lt;&lt; Validation( column )

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );

```

#### Weight

**構文:** obj &lt;&lt; Weight( column )

**説明:** 分析の際に各行の重みとして用いる値の列を指定する。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << New Column( "_weightcol", Numeric, Continuous, Set Each Value( Random Beta( 1, 1 ) ) );dt << Make Validation Column(	Training Set( .5 ),	Validation Set( .3 ),	Test Set( .2 ),	Weight( :_weightcol ),	Go);obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ),	Weight( :_weightcol ));obj << Split Best( 2 );

```

#### X

**構文:** obj &lt;&lt; X( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );

```

#### Y

**構文:** obj &lt;&lt; Y( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );

```

### 関連するコンストラクター

#### Decision Tree

**構文:** Partition(Y( column ), X( columns ), Method( "Decision Tree" ))

**説明:** 対話的にデータを繰り返し分割し、応答を予測する。分類・回帰木(Classification and Regression Trees)とも呼ばれる。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );

```

### 項目のメッセージ

#### Color Points

**構文:** obj &lt;&lt; Color Points

**説明:** 点を分類ごとに色分けする。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );obj << Color Points;

```

#### Column Contributions

**構文:** obj &lt;&lt; Column Contributions( state=0|1 )

**説明:** 各入力変数の寄与を示すレポートの表示/非表示を切り替える。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );obj << Column Contributions( 1 );

```

#### Decision Threshold

**構文:** obj &lt;&lt; Decision Threshold( state = 0|1, Set Probability Threshold( number ) )

**説明:** 各モデルの予測確率の分布や、予測値と実測値の表の表示/非表示を切り替える。確率の閾値を変更すると、分類の結果にどのように影響するかが確認できる。

```jsl

dt = Open( "$Sample_Data/Diabetes.jmp" );obj = dt << Partition(	Y( :Y Binary ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ));obj << Split Best( 5 );obj << Show Tree( 0 );obj << Decision Threshold( 1 );

```

#### Get Average Absolute Error Test

**構文:** obj &lt;&lt; Get Average Absolute Error Test

**説明:** テストセットの平均絶対偏差統計量を戻す。 検証セットを使用している場合のみ使用できる。

**アップリフトの例**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );dt << Make Validation Column(	Training Set( .6 ),	Validation Set( .2 ),	Test Set( .2 ),	New Column Name( "Valid1" ),	Go);obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Validation( :Valid1 ),	Split Best( 2 ));aabs = obj << Get Average Absolute Error Test;Show( aabs );

```

**パーティションの例**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation 2 ),	Split Best( 2 ));aabs = obj << Get Average Absolute Error Test;Show( aabs );

```

**ブースティングツリーの例**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Boosted Tree(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation 2 ),	Go);aabs = obj << Get Average Absolute Error Test;Show( aabs );

```

**ブートストラップ森の例**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Bootstrap Forest(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation 2 ),	Go);aabs = obj << Get Average Absolute Error Test;Show( aabs );

```

#### Get Average Absolute Error Training

**構文:** obj &lt;&lt; Get Average Absolute Error Training

**説明:** 学習セットの平均絶対偏差統計量を戻す。

**アップリフトの例**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Split Best( 2 ));aabs = obj << Get Average Absolute Error Training;Show( aabs );

```

**パーティションの例**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Partition(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Split Best( 2 ));aabs = obj << Get Average Absolute Error Training;Show( aabs );

```

**ブースティングツリーの例**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);aabs = obj << Get Average Absolute Error Training;Show( aabs );

```

**ブートストラップ森の例**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Bootstrap Forest(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);aabs = obj << Get Average Absolute Error Training;Show( aabs );

```

#### Get Average Absolute Error Validation

**構文:** obj &lt;&lt; Get Average Absolute Error Validation

**説明:** 検証セットの平均絶対偏差統計量を戻す。 検証セットを使用している場合のみ使用できる。

**アップリフトの例**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Validation( :Validation ),	Split Best( 2 ));aabs = obj << Get Average Absolute Error Validation;Show( aabs );

```

**パーティションの例**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Partition(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation Portion( 0.2 ),	Split Best( 2 ));aabs = obj << Get Average Absolute Error Validation;Show( aabs );

```

**ブースティングツリーの例**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation Portion( 0.2 ),	Go);aabs = obj << Get Average Absolute Error Validation;Show( aabs );

```

**ブートストラップ森の例**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Bootstrap Forest(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation Portion( 0.2 ),	Go);aabs = obj << Get Average Absolute Error Validation;Show( aabs );

```

#### Get Average Log Error Test

**構文:** obj &lt;&lt; Get Average Log Error Test

**説明:** テストデータの-log(p)の平均を戻す。pは応答の実測値が生じる確率の予測値。 検証セットを使用している場合のみ使用できる。

**アップリフトの例**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );dt << Make Validation Column(	Training Set( .6 ),	Validation Set( .2 ),	Test Set( .2 ),	New Column Name( "Valid1" ),	Go);obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Validation( :Valid1 ),	Split Best( 2 ));avg = obj << Get Average Log Error Test;Show( avg );

```

**パーティションの例**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation 2 ),	Method( "Decision Tree" ),	Go);avg = obj << Get Average Log Error Test;Show( avg );

```

**ブースティングツリーの例**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Boosted Tree(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation 2 ),	Go);avg = obj << Get Average Log Error Test;Show( avg );

```

**ブートストラップ森の例**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Bootstrap Forest(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation 2 ),	Go);avg = obj << Get Average Log Error Test;Show( avg );

```

#### Get Average Log Error Training

**構文:** obj &lt;&lt; Get Average Log Error Training

**説明:** 学習データの-log(p)の平均を戻す。pは応答の実測値が生じる確率の予測値。

**アップリフトの例**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Split Best( 2 ));avg = obj << Get Average Log Error Training;Show( avg );

```

**パーティションの例**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Partition(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Split Best( 3 ));avg = obj << Get Average Log Error Training;Show( avg );

```

**ブースティングツリーの例**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);avg = obj << Get Average Log Error Training;Show( avg );

```

**ブートストラップ森の例**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Bootstrap Forest(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);avg = obj << Get Average Log Error Training;Show( avg );

```

#### Get Average Log Error Validation

**構文:** obj &lt;&lt; Get Average Log Error Validation

**説明:** 検証データの-log(p)の平均を戻す。pは応答の実測値が生じる確率の予測値。 検証セットを使用している場合のみ使用できる。

**アップリフトの例**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Validation( :Validation ),	Split Best( 2 ));avg = obj << Get Average Log Error Validation;Show( avg );

```

**パーティションの例**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Partition(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation Portion( 0.2 ),	Method( "Decision Tree" ),	Go);avg = obj << Get Average Log Error Validation;Show( avg );

```

**ブースティングツリーの例**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation Portion( 0.2 ),	Go);avg = obj << Get Average Log Error Validation;Show( avg );

```

**ブートストラップ森の例**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Bootstrap Forest(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation Portion( 0.2 ),	Go);avg = obj << Get Average Log Error Validation;Show( avg );

```

#### Get Confusion Matrix Test

**構文:** obj &lt;&lt; Get Confusion Matrix Test

**説明:** テストセットの混同行列を戻す。 検証セットを使用している場合のみ使用できる。

**アップリフトの例**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );dt << Make Validation Column(	Training Set( .6 ),	Validation Set( .2 ),	Test Set( .2 ),	New Column Name( "Valid1" ),	Go);obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Validation( :Valid1 ),	Split Best( 2 ));cm = obj << Get Confusion Matrix Test;Show( cm );

```

**パーティションの例**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Validation( :Validation ),	Split Best( 2 ));cm = obj << Get Confusion Matrix Test;Show( cm );

```

**ブースティングツリーの例**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Boosted Tree(	Y( :marital status ),	X( :sex, :age, :country, :type, :size ),	Validation( :Validation ),	Go);cm = obj << Get Confusion Matrix Test;Show( cm );

```

**ブートストラップ森の例**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Bootstrap Forest(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Validation( :Validation ),	Go);cm = obj << Get Confusion Matrix Test;Show( cm );

```

#### Get Confusion Matrix Training

**構文:** obj &lt;&lt; Get Confusion Matrix Training

**説明:** 学習セットの混同行列を戻す。

**アップリフトの例**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Split Best( 2 ));cm = obj << Get Confusion Matrix Training;Show( cm );

```

**パーティションの例**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Validation( :Validation ),	Split Best( 2 ));cm = obj << Get Confusion Matrix Training;Show( cm );

```

**ブースティングツリーの例**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Boosted Tree(	Y( :marital status ),	X( :sex, :age, :country, :type, :size ),	Validation( :Validation ),	Go);cm = obj << Get Confusion Matrix Training;Show( cm );

```

**ブートストラップ森の例**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Bootstrap Forest(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Validation( :Validation ),	Go);cm = obj << Get Confusion Matrix Training;Show( cm );

```

#### Get Confusion Matrix Validation

**構文:** obj &lt;&lt; Get Confusion Matrix Validation

**説明:** 検証セットの混同行列を戻す。 検証セットを使用している場合のみ使用できる。

**アップリフトの例**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Validation( :Validation ),	Split Best( 2 ));cm = obj << Get Confusion Matrix Validation;Show( cm );

```

**パーティションの例**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Validation( :Validation ),	Split Best( 2 ));cm = obj << Get Confusion Matrix Validation;Show( cm );

```

**ブースティングツリーの例**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Boosted Tree(	Y( :marital status ),	X( :sex, :age, :country, :type, :size ),	Validation( :Validation ),	Go);cm = obj << Get Confusion Matrix Validation;Show( cm );

```

**ブートストラップ森の例**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Bootstrap Forest(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Validation( :Validation ),	Go);cm = obj << Get Confusion Matrix Validation;Show( cm );

```

#### Get Confusion Rates Test

**構文:** obj &lt;&lt; Get Confusion Rates Test

**説明:** テストセットの混同率を戻す。 検証セットを使用している場合のみ使用できる。

**アップリフトの例**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );dt << Make Validation Column(	Training Set( .6 ),	Validation Set( .2 ),	Test Set( .2 ),	New Column Name( "Valid1" ),	Go);obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Validation( :Valid1 ),	Split Best( 2 ));cr = obj << Get Confusion Rates Test;Show( cr );

```

**パーティションの例**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Validation( :Validation ),	Split Best( 2 ));cr = obj << Get Confusion Rates Test;Show( cr );

```

**ブースティングツリーの例**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Boosted Tree(	Y( :marital status ),	X( :sex, :age, :country, :type, :size ),	Validation( :Validation ),	Go);cr = obj << Get Confusion Rates Test;Show( cr );

```

**ブートストラップ森の例**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Bootstrap Forest(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Validation( :Validation ),	Go);cr = obj << Get Confusion Rates Test;Show( cr );

```

#### Get Confusion Rates Training

**構文:** obj &lt;&lt; Get Confusion Rates Training

**説明:** 学習セットの混同率を戻す。

**アップリフトの例**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Split Best( 2 ));cr = obj << Get Confusion Rates Training;Show( cr );

```

**パーティションの例**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Validation( :Validation ),	Split Best( 2 ));cr = obj << Get Confusion Rates Training;Show( cr );

```

**ブースティングツリーの例**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Boosted Tree(	Y( :marital status ),	X( :sex, :age, :country, :type, :size ),	Validation( :Validation ),	Go);cr = obj << Get Confusion Rates Training;Show( cr );

```

**ブートストラップ森の例**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Bootstrap Forest(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Validation( :Validation ),	Go);cr = obj << Get Confusion Rates Training;Show( cr );

```

#### Get Confusion Rates Validation

**構文:** obj &lt;&lt; Get Confusion Rates Validation

**説明:** 検証セットの混同率を戻す。 検証セットを使用している場合のみ使用できる。

**アップリフトの例**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Validation( :Validation ),	Split Best( 2 ));cr = obj << Get Confusion Rates Validation;Show( cr );

```

**パーティションの例**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Validation( :Validation ),	Split Best( 2 ));cr = obj << Get Confusion Rates Validation;Show( cr );

```

**ブースティングツリーの例**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Boosted Tree(	Y( :marital status ),	X( :sex, :age, :country, :type, :size ),	Validation( :Validation ),	Go);cr = obj << Get Confusion Rates Validation;Show( cr );

```

**ブートストラップ森の例**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Bootstrap Forest(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Validation( :Validation ),	Go);cr = obj << Get Confusion Rates Validation;Show( cr );

```

#### Get Gen RSquare Test

**構文:** obj &lt;&lt; Get Gen RSquare Test

**説明:** テストセットの一般化R2乗を戻す。 検証セットを使用している場合のみ使用できる。

**アップリフトの例**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );dt << Make Validation Column(	Training Set( .6 ),	Validation Set( .2 ),	Test Set( .2 ),	New Column Name( "Valid1" ),	Go);obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Validation( :Valid1 ),	Split Best( 2 ));r = obj << Get Gen RSquare Test;Show( r );

```

**パーティションの例**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Validation( :Validation ),	Split Best( 2 ));r = obj << Get Gen RSquare Test;Show( r );

```

**ブースティングツリーの例**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Boosted Tree(	Y( :sex ),	X( :marital status, :age, :country, :type, :size ),	Validation( :Validation ),	Go);r = obj << Get Gen RSquare Test;Show( r );

```

**ブートストラップ森の例**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Bootstrap Forest(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Validation( :Validation ),	Go);r = obj << Get Gen RSquare Test;Show( r );

```

#### Get Gen RSquare Training

**構文:** obj &lt;&lt; Get Gen RSquare Training

**説明:** 学習セットの一般化R2乗を戻す。

**アップリフトの例**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Split Best( 2 ));r = obj << Get Gen RSquare Training;Show( r );

```

**パーティションの例**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Validation( :Validation ),	Split Best( 2 ));r = obj << Get Gen RSquare Training;Show( r );

```

**ブースティングツリーの例**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Boosted Tree(	Y( :sex ),	X( :marital status, :age, :country, :type, :size ),	Validation( :Validation ),	Go);r = obj << Get Gen RSquare Training;Show( r );

```

**ブートストラップ森の例**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Bootstrap Forest(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Validation( :Validation ),	Go);r = obj << Get Gen RSquare Training;Show( r );

```

#### Get Gen RSquare Validation

**構文:** obj &lt;&lt; Get Gen RSquare Validation

**説明:** 検証セットの一般化R2乗を戻す。 検証セットを使用している場合のみ使用できる。

**アップリフトの例**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Validation( :Validation ),	Split Best( 2 ));r = obj << Get Gen RSquare Validation;Show( r );

```

**パーティションの例**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Validation( :Validation ),	Split Best( 2 ));r = obj << Get Gen RSquare Validation;Show( r );

```

**ブースティングツリーの例**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Boosted Tree(	Y( :sex ),	X( :marital status, :age, :country, :type, :size ),	Validation( :Validation ),	Go);r = obj << Get Gen RSquare Validation;Show( r );

```

**ブートストラップ森の例**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Bootstrap Forest(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Validation( :Validation ),	Go);r = obj << Get Gen RSquare Validation;Show( r );

```

#### Get MM SAS DATA Step

**構文:** obj &lt;&lt; Get MM SAS DATA Step

**説明:** SAS Model Managerに登録できるSASコードを作成し、ログウィンドウに戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );code = obj << Get MM SAS Data Step;

```

#### Get MM Tolerant SAS DATA Step

**構文:** obj &lt;&lt; Get MM Tolerant SAS DATA Step

**説明:** 欠測値を含んだデータ用にSAS Model Managerに登録できるSASコードを作成し、ログウィンドウに戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );code = obj << Get MM Tolerant SAS Data Step;

```

#### Get Measures

**構文:** obj &lt;&lt; Get Measures

**説明:** あてはめたモデルの適合度指標を戻す。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );obj << Get Measures;

```

#### Get Microseconds

**構文:** obj &lt;&lt; Get Microseconds

**説明:** 分析にかかった時間(マイクロ秒)を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );time = obj << Get Microseconds;Show( time );

```

#### Get Misclassification Rate Test

**構文:** obj &lt;&lt; Get Misclassification Rate Test

**説明:** テストセットの誤分類率を戻す。 検証セットを使用している場合のみ使用できる。

**アップリフトの例**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );dt << Make Validation Column(	Training Set( .6 ),	Validation Set( .2 ),	Test Set( .2 ),	New Column Name( "Valid1" ),	Go);obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Validation( :Valid1 ),	Split Best( 2 ));rate = obj << Get Misclassification Rate Test;Show( rate );

```

**パーティションの例**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation 2 ),	Split Best( 2 ));rate = obj << Get Misclassification Rate Test;Show( rate );

```

**ブースティングツリーの例**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Boosted Tree(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation 2 ),	Go);rate = obj << Get Misclassification Rate Test;Show( rate );

```

**ブートストラップ森の例**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Bootstrap Forest(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation 2 ),	Go);rate = obj << Get Misclassification Rate Test;Show( rate );

```

#### Get Misclassification Rate Training

**構文:** obj &lt;&lt; Get Misclassification Rate Training

**説明:** 学習セットの誤分類率を戻す。

**アップリフトの例**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Split Best( 2 ));rate = obj << Get Misclassification Rate Training;Show( rate );

```

**パーティションの例**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Partition(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Method( "Decision Tree" ));obj << Split Best( 2 );rate = obj << Get Misclassification Rate Training;Show( rate );

```

**ブースティングツリーの例**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);rate = obj << Get Misclassification Rate Training;Show( rate );

```

**ブートストラップ森の例**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Bootstrap Forest(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);rate = obj << Get Misclassification Rate Training;Show( rate );

```

#### Get Misclassification Rate Validation

**構文:** obj &lt;&lt; Get Misclassification Rate Validation

**説明:** 検証セットの誤分類率を戻す。 検証セットを使用している場合のみ使用できる。

**アップリフトの例**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Validation( :Validation ),	Split Best( 2 ));rate = obj << Get Misclassification Rate Validation;Show( rate );

```

**パーティションの例**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << New Column( "Holdback1", formula( Random Integer( 1, 3 ) ) );obj = dt << Partition(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	validation( :Holdback1 ),	Method( "Decision Tree" ),	Go);rate = obj << Get Misclassification Rate Validation;Show( rate );

```

**ブースティングツリーの例**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << New Column( "Holdback1", formula( Random Integer( 1, 3 ) ) );obj = dt << Boosted Tree(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	validation( :Holdback1 ),	Go);rate = obj << Get Misclassification Rate Validation;Show( rate );

```

**ブートストラップ森の例**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << New Column( "Holdback1", formula( Random Integer( 1, 3 ) ) );obj = dt << Bootstrap Forest(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	validation( :Holdback1 ),	Go);rate = obj << Get Misclassification Rate Validation;Show( rate );

```

#### Get Precision Recall Area Test

**構文:** obj &lt;&lt; Get Precision Recall Area Test

**説明:** テストセットのPR曲線下面積を戻す。この曲線下面積を計算するには、PR曲線が表示されていなければならない。 検証セットを使用している場合のみ使用できる。

**パーティションの例**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation 2 ),	Method( "Decision Tree" ),	Go);obj << Precision Recall Curve;area = obj << Get Precision Recall Area Test;Show( area );

```

**ブースティングツリーの例**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Boosted Tree(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation 2 ),	Go);obj << Precision Recall Curve;area = obj << Get Precision Recall Area Test;Show( area );

```

**ブートストラップ森の例**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Bootstrap Forest(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation 2 ),	Go);obj << Precision Recall Curve;area = obj << Get Precision Recall Area Test;Show( area );

```

#### Get Precision Recall Area Training

**構文:** obj &lt;&lt; Get Precision Recall Area Training

**説明:** 学習セットのPR曲線下面積を戻す。この曲線下面積を計算するには、PR曲線が表示されていなければならない。

**パーティションの例**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Partition(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Split Best( 2 ));obj << Show Tree( 0 );obj << Precision Recall Curve;area = obj << Get Precision Recall Area Training;Show( area );

```

**ブースティングツリーの例**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);obj << Show Tree( 0 );obj << Precision Recall Curve;area = obj << Get Precision Recall Area Training;Show( area );

```

**ブートストラップ森の例**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Bootstrap Forest(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);obj << Show Tree( 0 );obj << Precision Recall Curve;area = obj << Get Precision Recall Area Training;Show( area );

```

#### Get Precision Recall Area Validation

**構文:** obj &lt;&lt; Get Precision Recall Area Validation

**説明:** 検証セットのPR曲線下面積を戻す。この曲線下面積を計算するには、PR曲線が表示されていなければならない。 検証セットを使用している場合のみ使用できる。

**パーティションの例**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Partition(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation Portion( 0.2 ),	Method( "Decision Tree" ),	Go);obj << Precision Recall Curve;area = obj << Get Precision Recall Area Validation;Show( area );

```

**ブースティングツリーの例**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation Portion( 0.2 ),	Go);obj << Precision Recall Curve;area = obj << Get Precision Recall Area Validation;Show( area );

```

**ブートストラップ森の例**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Bootstrap Forest(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation Portion( 0.2 ),	Go);obj << Precision Recall Curve;area = obj << Get Precision Recall Area Validation;Show( area );

```

#### Get Prediction Formula

**構文:** obj &lt;&lt; Get Prediction Formula

**説明:** 予測式の列を作成するスクリプトを戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );obj << Get Prediction Formula;

```

#### Get RMS Error Test

**構文:** obj &lt;&lt; Get RMS Error Test

**説明:** テストデータのRMSE(平均平方誤差の平方根)を戻す。 検証セットを使用している場合のみ使用できる。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );rms = obj << Get RMS Error Test;Show( rms );

```

#### Get RMS Error Training

**構文:** obj &lt;&lt; Get RMS Error Training

**説明:** 学習データのRMSE(平均平方誤差の平方根)を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );rms = obj << Get RMS Error Training;Show( rms );

```

#### Get RMS Error Validation

**構文:** obj &lt;&lt; Get RMS Error Validation

**説明:** 検証データのRMSE(平均平方誤差の平方根)を戻す。 検証セットを使用している場合のみ使用できる。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );rms = obj << Get RMS Error Validation;Show( rms );

```

#### Get ROC Area Test

**構文:** obj &lt;&lt; Get ROC Area Test

**説明:** テストデータのAUC(area under the curve)を戻す。このAUCは、受診者動作曲線(ROC曲線)における曲線の下の面積。AUCを計算するには、ROC曲線が表示されている必要がある。 検証セットを使用している場合のみ使用できる。

**パーティションの例**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation 2 ),	Method( "Decision Tree" ),	Go);obj << ROC Curve;area = obj << Get ROC Area Test;Show( area );

```

**ブースティングツリーの例**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Boosted Tree(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation 2 ),	Go);obj << ROC Curve;area = obj << Get ROC Area Test;Show( area );

```

**ブートストラップ森の例**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Bootstrap Forest(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation 2 ),	Go);obj << ROC Curve;area = obj << Get ROC Area Test;Show( area );

```

#### Get ROC Area Training

**構文:** obj &lt;&lt; Get ROC Area Training

**説明:** 学習データのAUCを戻す。AUC (Area Under Cuvve)は、受診者動作曲線(ROC曲線)の下の面積。AUCを計算するには、ROC曲線が表示されている必要がある。

**パーティションの例**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Partition(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Split Best( 2 ));obj << Show Tree( 0 );obj << ROC Curve;area = obj << Get ROC Area Training;Show( area );

```

**ブースティングツリーの例**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);obj << Show Tree( 0 );obj << ROC Curve;area = obj << Get ROC Area Training;Show( area );

```

**ブートストラップ森の例**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Bootstrap Forest(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);obj << Show Tree( 0 );obj << ROC Curve;area = obj << Get ROC Area Training;Show( area );

```

#### Get ROC Area Validation

**構文:** obj &lt;&lt; Get ROC Area Validation

**説明:** 検証データのAUCを戻す。AUC (Area Under Cuvve)は、受診者動作曲線(ROC曲線)の下の面積。AUCを計算するには、ROC曲線が表示されている必要がある。 検証セットを使用している場合のみ使用できる。

**パーティションの例**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Partition(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation Portion( 0.2 ),	Method( "Decision Tree" ),	Go);obj << ROC Curve;area = obj << Get ROC Area Validation;Show( area );

```

**ブースティングツリーの例**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation Portion( 0.2 ),	Go);obj << ROC Curve;area = obj << Get ROC Area Validation;Show( area );

```

**ブートストラップ森の例**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Bootstrap Forest(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation Portion( 0.2 ),	Go);obj << ROC Curve;area = obj << Get ROC Area Validation;Show( area );

```

#### Get RSquare Test

**構文:** obj &lt;&lt; Get RSquare Test

**説明:** テストセットのR2乗を戻す。 検証セットを使用している場合のみ使用できる。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );r = obj << Get RSquare Test;Show( r );

```

#### Get RSquare Training

**構文:** obj &lt;&lt; Get RSquare Training

**説明:** 学習セットのR2乗を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );r = obj << Get RSquare Training;Show( r );

```

#### Get RSquare Validation

**構文:** obj &lt;&lt; Get RSquare Validation

**説明:** 検証セットのR2乗を戻す。 検証セットを使用している場合のみ使用できる。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );r = obj << Get RSquare Validation;Show( r );

```

#### Get SAS DATA Step

**構文:** obj &lt;&lt; Get SAS DATA Step

**説明:** データにスコアをつけるためのSAS DATAステップを作成し、ログウィンドウに戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );code = obj << Get SAS Data Step;

```

#### Get Seconds

**構文:** obj &lt;&lt; Get Seconds

**説明:** 分析にかかる時間(秒)を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );time = obj << Get Seconds;Show( time );

```

#### Get Tolerant Prediction Formula

**構文:** obj &lt;&lt; Get Tolerant Prediction Formula

**説明:** 欠測処理予測式の列を作成するスクリプトを作成し、ログウィンドウに戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );obj << Get Tolerant Prediction Formula;

```

#### Get Tolerant SAS DATA Step

**構文:** obj &lt;&lt; Get Tolerant SAS DATA Step

**説明:** 欠測値を含んだデータにスコアをつけるためのSAS DATAステップを作成し、ログウィンドウに戻す。欠測値は、ツリーの枝にランダムに割り当てられる。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );code = obj << Get Tolerant SAS Data Step;

```

#### Go

**構文:** obj &lt;&lt; Go

**説明:** K分割交差検証が選択される場合や検証データが使われている場合に、反復計算を開始する。JMP Proの場合は、検証列を指定した後、Goによっても反復計算を開始する。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Partition( Y( :country ), X( :sex, :marital status, :age, :type, :size ) );obj << K Fold Crossvalidation( 5 );obj << Go;

```

#### Informative Missing

**構文:** obj = Decision Tree(...Informative Missing( state=0|1 )...)

**説明:** カテゴリカル変数の場合、欠測値をカテゴリとして扱う。連続変数の場合、適合度に基づき、欠測値をデータの上限値または下限値とする。 デフォルトではオン。

**アップリフトの例**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );dt:Age[3] = .;obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Informative Missing( 0 ),	Split Best( 3 ));

```

**パーティションの例**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt:age[3] = .;obj = dt << Partition( Y( :height ), X( :age ), Informative Missing( 0 ) );obj << Split Best( 1 );

```

**ブースティングツリーの例**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt:age[3] = .;obj = dt << Boosted Tree( Y( :height ), X( :age ), Informative Missing( 0 ), Go );

```

**ブートストラップ森の例**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt:age[3] = .;obj = dt << Bootstrap Forest( Y( :height ), X( :age ), Informative Missing( 0 ), Go );

```

#### Initial Splits

**構文:** obj = Partition(...Initial Splits( condition, {left condition}, {right condition} )...)

**説明:** 適用する分岐を指定する。condition引数には、最初の分岐の左側を指定する。{left condition}と{right condition}の引数は、それぞれの側での分岐を指定し、指定の分岐数だけこの形式が再帰的に続行される。分岐を右側だけで行うには、左側分岐の引数であるleft conditionを空のリストにする。左側だけで行うには、right condition引数を省略する。

**例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Initial Splits( :size == {"Large"} ));

```

**例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Initial Splits( :size == {"Large"}, {}, {:size == {"Medium"}, {:age >= 25}} ));

```

**例 3**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Initial Splits( :size == {"Large"}, {:type == {"Family", "Sporty"}} ));

```

#### K Fold Crossvalidation

**構文:** obj &lt;&lt; K Fold Crossvalidation

**説明:** この機能は廃止されている。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Split Best( 2 ));obj << K Fold Crossvalidation( 5 );

```

#### Leaf Report

**構文:** obj &lt;&lt; Leaf Report( state=0|1 )

**説明:** 各葉に関するレポートの表示/非表示を切り替える。このレポートには、連続尺度の応答の場合には平均と度数が、カテゴリカルな応答の場合の場合には割合と度数が表示される。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );obj << Show Tree( 0 );obj << Leaf Report( 1 );

```

#### Lift Curve

**構文:** obj &lt;&lt; Lift Curve( state=0|1 )

**説明:** リフトチャートの表示/非表示を切り替える。リフトチャートは、観測値の割合に対してリフトをプロットしたもので、モデルの予測能力を別の観点から見ることができる。検証列を指定した場合は、学習セット・検証セット・テストセットのそれぞれに対してプロットが表示される。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Partition( Y( :country ), X( :sex, :marital status, :age, :type, :size ) );obj << Split Best( 5 );obj << Show Tree( 0 );obj << Lift Curve( 1 );

```

#### Lock Columns

**構文:** obj &lt;&lt; Lock Columns( state=0|1, columns )

**説明:** 指定の列をロックして、分岐に使用されないようにする。

**アップリフトの例**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ));obj << Lock Columns( 1, :Age, :Hair Color );(obj << report)[CheckboxBox( 1 )] << Select;Wait( .5 );obj << Lock Columns( 0 );Wait( .5 );obj << Lock Columns( 1 );

```

**パーティションの例**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Partition( Y( :country ), X( :sex, :marital status, :age, :type, :size ) );obj << Lock Columns( 1, :age, :size );(obj << report)[CheckboxBox( 1 )] << Select;Wait( .5 );obj << Lock Columns( 0 );Wait( .5 );obj << Lock Columns( 1 );

```

#### Make SAS DATA Step

**構文:** obj &lt;&lt; Make SAS DATA Step

**説明:** データにスコアをつけるためのSAS DATAステップを作成し、スクリプトウィンドウに戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );obj << Make SAS Data Step;

```

#### Make Tolerant SAS DATA Step

**構文:** obj &lt;&lt; Make Tolerant SAS DATA Step

**説明:** 欠測値を含んだデータにスコアをつけるためのSAS DATAステップを作成し、スクリプトウィンドウに戻す。欠測値は、ツリーの枝にランダムに割り当てられる。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );obj << Make Tolerant SAS Data Step;

```

#### Method

**構文:** Method( "Decision Tree" )

**説明:** パーティションで使用する方法を指定する。デフォルトは、ディシジョンツリー(決定木)。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ));obj << Split Best( 2 );

```

#### Minimum Size Split

**構文:** obj &lt;&lt; Minimum Size Split( number )

**説明:** グループを分岐するかどうかを判断する際の最小グループサイズを設定する。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Partition( Y( :country ), X( :sex, :marital status, :age, :type, :size ) );obj << Minimum Size Split( 15 );obj << Split Best( 4 );

```

#### Missing Value Order

**構文:** Missing Value Order( Low(list of numeric columns),High(list of numeric columns))

**説明:** 欠測値を上と下のどちらに割り振るかを指定する。

**JMP追加されたバージョン:** 16

#### Multithreading

**構文:** Multithreading( state=0|1 )

**説明:** コンピュータで使用可能なスレッドに、計算を分割する。 デフォルトではオン。

**パーティションの例**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Partition(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Multithreading( 1 ),	Split Best( 2 ));

```

**ブースティングツリーの例**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Multithreading( 1 ),	Go);

```

**ブートストラップ森の例**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Bootstrap Forest(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Multithreading( 1 ),	Go);

```

#### Ordinal Restricts Order

**構文:** obj = Decision Tree(...Ordinal Restricts Order( state=0|1 )...)

**説明:** 順序尺度の列に対して、データの順序を保った分岐だけを考慮する。 デフォルトではオン。

**アップリフトの例**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Ordinal Restricts Order( 1 ),	Split Best( 2 ));

```

**パーティションの例**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Partition( Y( :height ), X( :age ), Ordinal Restricts Order( 1 ) );obj << Split Best( 3 );

```

**ブースティングツリーの例**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Boosted Tree( Y( :height ), X( :age ), Ordinal Restricts Order( 1 ), Go );

```

**ブートストラップ森の例**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bootstrap Forest( Y( :height ), X( :age ), Ordinal Restricts Order( 1 ), Go );

```

#### Plot Actual by Predicted

**構文:** obj &lt;&lt; Plot Actual by Predicted( state=0|1 )

**説明:** X軸が予測値、Y軸が実測値であるプロットの表示/非表示を切り替える。

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Partition(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Split Best( 3 ));obj << Plot Actual By Predicted;

```

#### Precision Recall Curve

**構文:** obj &lt;&lt; Precision Recall Curve( state=0|1 )

**説明:** 応答変数の水準ごとに描かれるPR曲線の表示/非表示を切り替える。PR曲線は、さまざまな閾値における適合率と再現率をプロットしたもの。検証列を指定した場合は、学習セット・検証セット・テストセットのそれぞれに対してプロットが表示される。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Partition( Y( :country ), X( :sex, :marital status, :age, :type, :size ) );obj << Split Best( 5 );obj << Show Tree( 0 );obj << Precision Recall Curve( 1 );

```

#### Profiler

**構文:** obj &lt;&lt; Profiler( state=0|1 )

**説明:** 予測プロファイルの表示/非表示を切り替える。予測プロファイルは、1因子ずつスライスしながら予測式を図示したものである。予測プロファイルでは、最適化を行える。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );obj << Profiler( 1 );

```

#### Prune Worst

**構文:** obj &lt;&lt; Prune Worst

**説明:** グループの特徴を区別する能力が最も低い分岐を削除する。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );obj << Prune Worst;Wait( .5 );obj << Prune Worst;

```

#### Publish Prediction Formula

**構文:** obj &lt;&lt; Publish Prediction Formula

**説明:** 予測式を作成し、列の計算式として「計算式デポ」プラットフォームに計算式列のスクリプトとして保存する。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );obj << Publish Prediction Formula;

```

#### Publish Tolerant Prediction Formula

**構文:** obj &lt;&lt; Publish Tolerant Prediction Formula

**説明:** 欠測値がある場合でも予測する予測式を求め、その計算式の列を作成するスクリプトを「計算式デポ」に発行する。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );obj << Publish Tolerant Prediction Formula;

```

#### ROC Curve

**構文:** obj &lt;&lt; ROC Curve( state=0|1 )

**説明:** 応答変数の各水準に対し、ROC曲線(受診者動作特性曲線)の表示/非表示を切り替える。ROC曲線は、「感度」と「1-特異度」をプロットした曲線。検証列を指定した場合は、学習セット・検証セット・テストセットのそれぞれに対してプロットが表示される。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Partition( Y( :country ), X( :sex, :marital status, :age, :type, :size ) );obj << Split Best( 5 );obj << Show Tree( 0 );obj << ROC Curve( 1 );

```

#### Save Leaf Label Formula

**構文:** obj &lt;&lt; Save Leaf Label Formula

**説明:** 葉のラベルの計算式をデータテーブルの新しい列に保存する。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );obj << Save Leaf Label Formula;

```

#### Save Leaf Labels

**構文:** obj &lt;&lt; Save Leaf Labels

**説明:** 葉のラベルをデータテーブルの新しい列に保存する。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );obj << Save Leaf Labels;

```

#### Save Leaf Number Formula

**構文:** obj &lt;&lt; Save Leaf Number Formula

**説明:** 葉の番号の計算式をデータテーブルの新しい列に保存する。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );obj << Save Leaf Number Formula;

```

#### Save Leaf Numbers

**構文:** obj &lt;&lt; Save Leaf Numbers

**説明:** 葉の番号をデータテーブルの新しい列に保存する。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );obj << Save Leaf Numbers;

```

#### Save Predicteds

**構文:** obj &lt;&lt; Save Predicteds

**説明:** 予測値をデータテーブルの新しい列に保存する。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );obj << Save Predicteds;

```

#### Save Prediction Formula

**構文:** obj &lt;&lt; Save Prediction Formula

**説明:** 予測式をデータテーブルの新しい列に保存する。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );obj << Save Prediction Formula;

```

#### Save Residuals

**構文:** obj &lt;&lt; Save Residuals

**説明:** 残差をデータテーブルの新しい列に保存する。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );obj << Save Residuals;

```

#### Save Tolerant Prediction Formula

**構文:** obj &lt;&lt; Save Tolerant Prediction Formula

**説明:** 欠測値がある場合でも予測する式を、データテーブルの新しい列に保存する。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );obj << Save Tolerant Prediction Formula;

```

#### Set Random Seed

**構文:** obj &lt;&lt; Set Random Seed( number )

**説明:** 乱数シード値を指定する。乱数シード値を指定することにより、今後プラットフォームを起動したときに同じ結果を再現できる。

**アップリフトの例**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Set Random Seed( 1234 ),	Split Best( 2 ));

```

**パーティションの例**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Partition(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Set Random Seed( 1234 ),	Split Best( 2 ));

```

**ブースティングツリーの例**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Set Random Seed( 1234 ),	Go);

```

**ブートストラップ森の例**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Bootstrap Forest(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Set Random Seed( 1234 ),	Go);

```

#### Show Fit Details

**構文:** obj &lt;&lt; Show Fit Details( state=0|1 )

**説明:** 誤差、誤分類率、および混同行列などのレポートの表示/非表示を切り替える。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );obj << Show Tree( 0 );obj << Show Fit Details( 1 );

```

#### Show Graph

**構文:** obj &lt;&lt; Show Graph( state=0|1 )

**説明:** パーティショングラフ(レポートの先頭にあるグラフ)の表示/非表示を切り替える。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );obj << ShowGraph( 0 );Wait( .5 );obj << ShowGraph( 1 );

```

#### Show Points

**構文:** obj &lt;&lt; Show Points( state=0|1 )

**説明:** グラフにおいて、点を表示するか(1またはon)、もしくは、色で塗りつぶすか(0またはoff)を指定する。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );obj << ShowPoints( 0 );Wait( .5 );obj << ShowPoints( 1 );

```

#### Show Split Bar

**構文:** obj &lt;&lt; Show Split Bar( state=0|1 )

**説明:** ツリーの各ノードにおいて、応答変数の水準ごとの割合を示す帯グラフの表示/非表示を切り替える。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );obj << Show Split Bar( 0 );Wait( .5 );obj << Show Split Bar( 1 );

```

#### Show Split Candidates

**構文:** obj &lt;&lt; Show Split Candidates( state=0|1 )

**説明:** 末端のノードにおいて、「候補」レポートの表示/非表示を切り替える。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );obj << Show Split Candidates( 1 );(obj << Report)["Candidates"] << Close( 0 ) << select;

```

#### Show Split Count

**構文:** obj &lt;&lt; Show Split Count( state=0|1 )

**説明:** ツリーの各ノードにおいて、応答変数の水準ごとの度数の表示/非表示を切り替える。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );obj << Show Split Count( 0 );Wait( .5 );obj << Show Split Count( 1 );

```

#### Show Split Prob

**構文:** obj &lt;&lt; Show Split Prob( state=0|1 )

**説明:** ツリーの各ノードにおいて、応答変数の水準ごとの割合の表示/非表示を切り替える。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );obj << Show Split Prob( 0 );Wait( .5 );obj << Show Split Prob( 1 );

```

#### Show Split Stats

**構文:** obj &lt;&lt; Show Split Stats( state=0|1 )

**説明:** 度数と分岐統計量の表示/非表示を切り替える。表示される統計量には、G²または平均と標準偏差が含まれる。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );obj << Show Split Stats( 0 );Wait( .5 );obj << Show Split Stats( 1 );

```

#### Show Tree

**構文:** obj &lt;&lt; Show Tree( state=0|1 )

**説明:** 分岐の情報を示したツリーの表示/非表示を切り替える。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );obj << ShowTree( 1 );

```

#### Small Tree View

**構文:** obj &lt;&lt; Small Tree View( state=0|1 )

**説明:** 小さいパーティションツリーの表示/非表示を切り替える。これは、パーティショングラフ(レポートの先頭にあるグラフ)の右側に表示される。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );obj << Small Tree View( 1 );

```

#### Sort Split Candidates

**構文:** obj &lt;&lt; Sort Split Candidates( state=0|1 )

**説明:** 分岐に用いる列の候補を、有意度が高いものから並べる。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );(obj << Report)["Candidates"] << Close( 0 ) << select;Wait( 1 );obj << Sort Split Candidates;

```

#### Specify Profit Matrix

**構文:** obj &lt;&lt; Specify Profit Matrix

**説明:** 正分類および誤分類した時の利益およびコストを指定する。

**アップリフトの例**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Split Best( 2 ),	Specify Profit Matrix( [0 -1, -1 0, . .], "Yes", "No", "Undecided" ),	Show Fit Details( 1 ));

```

**パーティションの例**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Partition(	Y( :marital status ),	X( :sex, :age, :country, :type, :size ),	Split Best( 3 ),	Specify Profit Matrix( [0 -1, -1 0, . .], "Married", "Single", "Undecided" ),	Show Fit Details( 1 ));

```

#### Split Best

**構文:** obj &lt;&lt; Split Best( &lt;number of splits&gt; )

**説明:** 最良分岐点でツリーを分岐する。

**アップリフトの例**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ));obj << Split Best;Wait( 1 );obj << Split Best( 2 );

```

**パーティションの例**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Partition( Y( :country ), X( :sex, :marital status, :age, :type, :size ) );obj << Split Best;Wait( .5 );obj << Split Best( 2 );

```

#### Split History

**構文:** obj &lt;&lt; Split History( state=0|1 )

**説明:** 分岐数をX軸、R²値をY軸に示したグラフの表示/非表示を切り替える。

**アップリフトの例**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ));obj << Split Best( 2 );obj << Show Tree( 0 );obj << Split History;

```

**パーティションの例**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Partition( Y( :country ), X( :sex, :marital status, :age, :type, :size ) );obj << Split Best( 5 );obj << Show Tree( 0 );obj << Split History;

```

#### Tree 3D

**構文:** obj &lt;&lt; Tree 3D( state=0|1 )

**説明:** ツリー構造を示す三次元プロットの表示/非表示を切り替える。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Partition( Y( :country ), X( :sex, :marital status, :age, :type, :size ) );obj << Split Best( 14 );obj << Show Tree( 0 );obj << Tree 3D( 1 );

```

#### Use Excluded Rows for Validation

**構文:** obj = Decision Tree(...Use Excluded Rows for Validation( state=0|1 )...)

**説明:** 検証セットの作成時にデータテーブルで除外されている行を使用する。このオプションは、標準のJMPを使用していて、データに除外されている行がある場合のみ起動ウィンドウに表示される。

**JMP追加されたバージョン:** 15

**アップリフトの例**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );For Each( {i}, 10 :: 200 :: 10, Row State( i ) = Excluded State( 1 ) );obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Use Excluded Rows for Validation( 1 ),	Split Best( 2 ));

```

**パーティションの例**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );For Each( {i}, 10 :: 200 :: 10, Row State( i ) = Excluded State( 1 ) );obj = dt << Partition(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Use Excluded Rows for Validation( 1 ));obj << Split Best( 5 );

```

**ブースティングツリーの例**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );For Each( {i}, 10 :: 200 :: 10, Row State( i ) = Excluded State( 1 ) );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Use Excluded Rows for Validation( 1 ),	Go);

```

**ブートストラップ森の例**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );For Each( {i}, 10 :: 200 :: 10, Row State( i ) = Excluded State( 1 ) );obj = dt << Bootstrap Forest(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Use Excluded Rows for Validation( 1 ),	Go);

```

#### Validation Portion

**構文:** obj = Decision Tree(...Validation Portion( fraction=0 )...)

**説明:** 指定された確率(fraction)で各行をランダムに選択して、検証データを形成する。 デフォルトの値は"0"。

**アップリフトの例**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Validation Portion( 0.2 ),	Go);

```

**パーティションの例**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Validation Portion( 0.2 ));obj << Split Best( 2 );

```

**ブースティングツリーの例**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Boosted Tree(	Y( :marital status ),	X( :sex, :country, :age, :type, :size ),	Validation Portion( 0.2 ),	Go);

```

**ブートストラップ森の例**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Bootstrap Forest(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Validation Portion( 0.2 ),	Go);

```

