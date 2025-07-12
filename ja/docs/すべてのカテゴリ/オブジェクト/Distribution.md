# Distribution



## 共有されるメッセージ

### Action

**構文:** obj << Action

**説明:** 評価する式を挿入するための、プラットフォーム内の汎用トラップドア。プラットフォームに一時的にディスプレイボックスおよびデータテーブルのコンテキストを設定する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

### Automatic Recalc

**構文:** obj << Automatic Recalc( state=0|1 )

**説明:** データの除外や変更があった場合に分析を自動的にやり直す。Automatic Recalcオプションがオンになっている場合で、データの除外や変更が再計算の前に確実に適用されるようにするには、Wait(0)コマンドを使用すること。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

### Broadcast

**構文:** obj << Broadcast(message)

**説明:** メッセージをプラットフォームに一括適用する。個々のオブジェクトから戻される結果がデータテーブルである場合は、可能な限り連結する。その最終的な形式は、Table BoxのSave Combined Tableオプションの結果と同じになるか、またはソース列を使用したConcanateオプションの結果と同じになる。それ以外の場合、結果はリストの形で戻される。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
objs = Control Chart Builder(
	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),
	By( :OPERATOR )
);
objs[1] << Broadcast( Save Summaries );

```

### Column Switcher

**構文:** obj << Column Switcher(column reference, {column reference, ...}, < Title(title) >, < Close Outline(0|1) >, < Retain Axis Settings(0|1) >, < Layout(0|1) >)

**説明:** プラットフォームの変数を変更するための設定パネルを追加する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);

```

### Copy ByGroup Script

**構文:** obj << Copy ByGroup Script

**説明:** この分析を再現するJSLスクリプトを生成し、クリップボードにコピーする。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Distribution( Column( :Age, :Weight ), By( _bycol ) );
obj[1] << Copy ByGroup Script;

```

### Copy Script

**構文:** obj << Copy Script

**説明:** この分析を再現するJSLスクリプトを生成し、クリップボードにコピーする。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );
obj << Copy Script;

```

### Data Table Window

**構文:** obj << Data Table Window

**説明:** この分析に使用したデータテーブルのウィンドウを手前に表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );
obj << Data Table Window;

```

### Get By Levels

**構文:** obj << Get By Levels

**説明:** By列が指定されている場合、列名をキー、データ値を値とした連想配列を戻す。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

### Get ByGroup Script

**構文:** obj << Get ByGroup Script

**説明:** この分析を再現するスクリプト(JSL)を生成し、それを式として戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Distribution( Column( :Age, :Weight ), By( _bycol ) );
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Container

**構文:** obj << Get Container

**説明:** オブジェクトのコンテンツを含んだコンテナボックスの参照を戻す。

**フィルタのあるプラットフォーム**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Show Control Panel( 0 ),
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),
	Local Data Filter(
		Add Filter(
			columns( :age, :sex, :height ),
			Where( :age == {12, 13, 14} ),
			Where( :sex == "F" ),
			Where( :height >= 55 ),
			Display( :age, N Items( 6 ) )
		)
	)
);
New Window( "platform boxes",
	H List Box(
		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),
		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )
	)
);

```

**一般**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

### Get Data Table

**構文:** obj << Get Data Table

**説明:** データテーブルへの参照を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Group Platform

**構文:** obj << Get Group Platform

**説明:** 該当のプラットフォームがグループに属している場合に、Group Platformオブジェクトを戻す。それ以外の場合はEmpty()を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );
group = biv[1] << Get Group Platform;
Wait( 1 );
group << Layout( "Arrange in Tabs" );

```

### Get Script

**構文:** obj << Get Script

**説明:** この分析を再現するスクリプト(JSL)を生成し、それを式として戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**構文:** obj << Get Script With Data Table

**説明:** この分析を再現するスクリプト(JSL)をデータテーブルへの参照も含めて生成し、それを式として戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**構文:** obj << Get Timing

**説明:** プラットフォームの起動にかかった時間を取得する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );
t = obj << Get Timing;
Show( t );

```

### Get Web Support

**構文:** obj << Get Web Support

**説明:** ディスプレイオブジェクトにおけるインタラクティブHTMLサポートのレベルを数値で戻す。1は、一部または全部の要素がサポートされていることを示し、0は、サポートされないことを示す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

### Get Where Expr

**構文:** obj << Get Where Expr

**説明:** プラットフォームがBy()またはWhere()を使って起動された場合に、データをサブセットするためのWhere式を戻す。By()やWhere()が使われていない場合はEmpty()を戻す。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );
Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

### Ignore Platform Preferences

**構文:** Ignore Platform Preferences( state=0|1 )

**説明:** プラットフォームに対する現在の環境設定を無視する。このメッセージは、プラットフォームを呼び出した後に、そのプラットフォームに送られた場合、無視される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Ignore Platform Preferences( 1 ),
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

### Local Data Filter

**構文:** obj << Local Data Filter

**説明:** このプラットフォームに対してのみ有効なフィルタで、データを特定のグループまたは範囲にフィルタリングする。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :country ) ),
	Local Data Filter(
		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),
		Mode( Show( 1 ), Include( 1 ) )
	)
);

```

### Paste Local Data Filter

**構文:** obj << Paste Local Data Filter

**説明:** クリップボードにあるローカルデータフィルタを現在のレポートに適用する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
filter = dist << Local Data Filter(
	Add Filter( columns( :Region ), Where( :Region == "MW" ) )
);
filter << Copy Local Data Filter;
dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );
Wait( 1 );
dist2 << Paste Local Data Filter;

```

### Redo Analysis

**構文:** obj << Redo Analysis

**説明:** 同じ分析をやり直し新しいウィンドウに表示する。データが変更されていると分析結果は異なる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**構文:** obj << Redo ByGroup Analysis

**説明:** 同じ分析をやり直し新しいウィンドウに表示する。データが変更されていると分析結果は異なる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Distribution( Column( :Age, :Weight ), By( _bycol ) );
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**構文:** obj << Relaunch Analysis

**説明:** プラットフォームの起動ウィンドウを開き、レポートを作成した時の設定を表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**構文:** obj << Relaunch ByGroup

**説明:** プラットフォームの起動ウィンドウを開き、レポートを作成した時の設定を表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Distribution( Column( :Age, :Weight ), By( _bycol ) );
obj[1] << Relaunch ByGroup;

```

### Remove Column Switcher

**構文:** obj << Remove Column Switcher

**説明:** プラットフォームに最後に追加された列スイッチャーを削除する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
Wait( 2 );
obj << Remove Column Switcher;

```

### Remove Local Data Filter

**構文:** obj << Remove Local Data Filter

**説明:** すでに作成されているローカルデータフィルタを削除し、プラットフォームはデータテーブル内のすべてのデータを使用した状態に戻る。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dist = dt << Distribution(
	Nominal Distribution( Column( :country ) ),
	Local Data Filter(
		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),
		Mode( Show( 1 ), Include( 1 ) )
	)
);
Wait( 2 );
dist << remove local data filter;

```

### Report

**構文:** obj << Report;

Report( obj )

**説明:** レポートオブジェクトへの参照を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**構文:** obj << Report View( "完全"|"要約" )

**説明:** レポートビューは、プラットフォームレポートの詳細を表示するかどうかを決定する。Fullはすべての詳細を表示し、Summaryはプラットフォームにより限定されたものだけを表示する。 動作をカスタマイズするため、各ディスプレイボックスは<<Set Summary Behaviorメッセージをサポートする。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**構文:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**説明:** 分析を再現するためのJSLスクリプトを作成し、データテーブルにテーブルプロパティとして保存する。スクリプトの名前を指定できる。Append Suffixオプションは、スクリプト名に数字の接尾辞を追加する。これにより、同名のスクリプトが存在していても区別できる。Promptオプションは、ユーザにスクリプト名の指定を促す。Replaceオプションは、同名の既存のスクリプトを置き換える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Distribution( Column( :Age, :Weight ), By( _bycol ) );
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**構文:** obj << Save ByGroup Script to Journal

**説明:** この分析を再現するJSLスクリプトを生成し、ジャーナルにそのスクリプトのボタンを追加する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Distribution( Column( :Age, :Weight ), By( _bycol ) );
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**構文:** obj << Save ByGroup Script to Script Window

**説明:** この分析を再現するJSLスクリプトを生成し、現在のスクリプトウィンドウに表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Distribution( Column( :Age, :Weight ), By( _bycol ) );
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**構文:** obj << Save Script for All Objects

**説明:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**構文:** obj << Save Script for All Objects To Data Table( <name> )

**説明:** すべてのレポートオブジェクトを再現するスクリプトを現在のデータテーブルに保存する。このオプションは、ウィンドウ内にレポートが複数ある場合に便利。作成されるスクリプトの名前は、引用符で囲んで指定しない限り、1つ目のプラットフォーム名となる。

**例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Distribution( Column( :Age, :Weight ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table;

```

**例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Distribution( Column( :Age, :Weight ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**構文:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**説明:** この分析を再現するJSLスクリプトを生成し、データテーブルのテーブルプロパティとして保存する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**構文:** obj << Save Script to Journal

**説明:** この分析を再現するJSLスクリプトを生成し、ジャーナルにそのスクリプトのボタンを追加する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );
obj << Save Script to Journal;

```

### Save Script to Report

**構文:** obj << Save Script to Report

**説明:** この分析を再現するJSLスクリプトを生成し、レポートウィンドウに表示する。分析手順の記録を結果と一緒に残せる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );
obj << Save Script to Report;

```

### Save Script to Script Window

**構文:** obj << Save Script to Script Window

**説明:** この分析を再現するJSLスクリプトを生成し、現在のスクリプトウィンドウに表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );
obj << Save Script to Script Window;

```

### SendToByGroup

**構文:** SendToByGroup( {":Column == level"}, command );

**説明:** プラットフォームコマンドまたは表示のカスタマイズコマンドをByグループの各水準に送る。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	By( :Sex ),
	SendToByGroup(
		{:sex == "F"},
		Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) )
	),
	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) )
);

```

### SendToEmbeddedScriptable

**構文:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**説明:** SendToEmbeddedScriptableは、埋め込まれたスクリプト可能なオブジェクトの設定を復元する。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
dt << Life Distribution(
	Y( :Time ),
	Censor( :Censor ),
	Censor Code( 1 ),
	<<Fit Weibull,
	SendToEmbeddedScriptable(
		Dispatch(
			{"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},
			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}
		)
	)
);

```

### SendToReport

**構文:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**説明:** Send To Reportはレポートの表示をカスタマイズするためにDispatchコマンドと一緒に使用される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :age ) ),
	Continuous Distribution( Column( :weight ) ),
	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) )
);

```

### Sync to Data Table Changes

**構文:** obj << Sync to Data Table Changes

**説明:** 除外やデータの変更が行われた場合に同期する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
Wait( 1 );
dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );
dist << Sync To Data Table Changes;

```

### Title

**構文:** obj << Title( "new title" )

**説明:** プラットフォームのタイトルを設定する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );
obj << Title( "My Platform" );

```

### Top Report

**構文:** obj << Top Report

**説明:** レポート内のルートノードへの参照を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Transform Column

**構文:** obj = <Platform>(... Transform Column(<name>, Formula(<expression>), [Random Seed(<n>)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**説明:** オブジェクトのローカルコンテキスト(通常はプラットフォーム)内に変換列を作成する。この変換列は、それを作成したプラットフォームの中のみで使用可能。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),
	Continuous Distribution( Column( :"age^2"n ) )
);

```

### View Web XML

**構文:** obj << View Web XML

**説明:** インタラクティブHTMLレポートの作成に使うXMLコードを戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

### Window View

**構文:** obj = Distribution(...Window View( "Visible"|"Invisible"|"Private" )...)

**説明:** レポートとして作成するウィンドウの種類を設定する。デフォルトでは、Visibleレポートウィンドウが作成される。Invisible のウィンドウは画面に表示されないが、Window()などの関数によって検出できる。Private のウィンドウにはほとんどのウィンドウメッセージを送れるが、検出することはできないため、レポートオブジェクトを通してアクセスする必要がある。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );
eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;
biv << Close Window;
New Window( "Bivariate Equation",
	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) )
);

```

## 列

### By

**構文:** obj = Distribution(...<By( column(s) )>...)

**説明:** 指定された列の各水準に対して、個別に分析を実行する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Distribution( Column( :Age, :Weight ), By( _bycol ) );

```

### Column

**構文:** obj = Distribution(...<Column( column(s) )>...)

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );

```

### Columns

**構文:** obj = Distribution(...Columns( column(s) )...)

**説明:** 分析対象となるカテゴリカルな列または連続尺度の列を指定する。

**例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Columns( :Age, :Weight ) );

```

**例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Y( :Age, :Weight ) );

```

### Freq

**構文:** obj = Distribution(...<Freq( column )>...)

**説明:** 分析の際に各行の度数として用いる値の列を指定する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_freqcol", Numeric, Continuous, Formula( Random Integer( 1, 5 ) ) );
obj = dt << Distribution( Column( :Age, :Weight ), Freq( _freqcol ) );

```

### Weight

**構文:** obj = Distribution(...<Weight( column )>...)

**説明:** 分析の際に各行の重みとして用いる値の列を指定する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_weightcol", Numeric, Continuous, Formula( Random Beta( 1, 1 ) ) );
obj = dt << Distribution( Column( :Age, :Weight ), Weight( _weightcol ) );

```

### Y

**構文:** obj = Distribution(...Y( column(s) )...)

**説明:** 分析対象となるカテゴリカルな列または連続尺度の列を指定する。

**例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Columns( :Age, :Weight ) );

```

**例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Y( :Age, :Weight ) );

```

## 関連するコンストラクター

### Distribution

**構文:** Distribution( Column() )

**説明:** 一変量の分布に関する分析を行う。計算される結果と利用できるオプションは、列の尺度によって異なる。利用できるオプションには、ヒストグラム、箱ひげ図、分位点プロット、分布のあてはめ、工程能力分析などがある。

**例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );

```

**例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
colref = Column( "age" );
// Correct way to use the colref
Distribution( Column( colref ) );
// This will not work
Distribution( colref );

```

## 項目のメッセージ

### Apply Preset

**構文:** Apply Preset( preset ); Apply Preset( source, label, <Folder( folder {, folder2, ...} )> )

**説明:** 作成されたプリセットをオブジェクトに適用する。保存された設定に合わせてオプションとカスタマイズが更新される。

**JMP追加されたバージョン:** 18

**Anonymous preset**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) ),
	Nominal Distribution( Column( :age ), Mosaic Plot( 1 ) )
);
preset = obj[1] << New Preset();
dt2 = Open( "$SAMPLE_DATA/Aircraft Incidents.jmp" );
obj2 = dt2 << Distribution(
	Nominal Distribution( Column( :Aircraft Damage ) ),
	Continuous Distribution( Column( :Total Minor Injuries ) )
);
Wait( 1 );
obj2[2] << Apply Preset( preset );

```

**Search by name**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ) ),
	Nominal Distribution( Column( :age ) )
);
Wait( 1 );
obj[1] << Apply Preset( "Sample Presets", "Check Normality" );

```

### Arrange in Rows

**構文:** obj << Arrange in Rows( number )

**説明:** レポートを複数行に表示する。オプションには、1行あたりに表示するレポートの数を指定する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
obj = dt << Distribution( Column( :BP 8M, :BP 12M, :BP 6M, :BP 8W, :BP 12W ) );
obj << ArrangeInRows( 3 );

```

### Axes on Left

**構文:** obj << Axes on Left( state=0|1 )

**説明:** 軸をグラフの左側に移動する。横方向に表示されるヒスログラムの度数、確率、密度、および、横方向に表示される正規分位点プロットにこのオプションは影響する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ), Horizontal Layout( 1 ), Count Axis( 1 ) );
obj << Axes on Left( 1 );

```

### CDF Plot

**構文:** obj << CDF Plot( state=0|1 )

**説明:** 経験累積分布関数のプロットの表示/非表示を切り替える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << CDF Plot( 1 );

```

### Capability Analysis

**構文:** obj << Capability Analysis( LSL( number ), Target( number ), USL( number ) )

**説明:** 工程能力分析を実行する。工程能力指数を求めるために、下側仕様限界（LSL）、目標値、上側仕様限界（USL）指定する必要がある。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Distribution( Column( :Weight ) );
obj << Capability Analysis( LSL( 16 ), USL( 24 ), Target( 20 ) );

```

### Confidence Interval

**構文:** obj << Confidence Interval( number, <Upper | Lower>, <Sigma( number )> )

**説明:** 平均と標準偏差について、信頼区間を計算する。母標準偏差(シグマ)を指定した場合、それを母標準偏差として平均の信頼区間は計算される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Confidence Interval( 0.98 ); 

obj << Confidence Interval( 0.95, Lower ); 

obj << Confidence Interval( 0.95, Sigma( 4 ) );

```

### Count Axis

**構文:** obj << Count Axis( state=0|1 )

**説明:** ヒストグラムの度数軸の表示/非表示を切り替える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Count Axis( 1 );

```

### Custom Quantiles

**構文:** obj << Custom Quantiles( fraction, [quantile1, quantile2, ... quantileN] )

**説明:** 指定された割合の分位点を計算する。順位、および、平滑化された経験尤度によって分位点を計算する。指定された信頼水準の信頼区間も計算する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Custom Quantiles( 0.975, [0.075, 0.1, 0.125, 0.975, 0.99] );

```

### Customize Summary Statistics

**構文:** obj << Customize Summary Statistics(statistic1( state=0|1 ), statistic2( state=0|1 ), ..., statisticN( state=0|1 ), <Set Trimmed Mean Percent(number)>, <Set Alpha Level(number)>)

**説明:** 「要約統計量」レポートに表示される要約統計量をカスタマイズする。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Customize Summary Statistics( N( 0 ), Variance( 1 ), Skewness( 1 ) );

```

### Density Axis

**構文:** obj << Density Axis( state=0|1 )

**説明:** ヒストグラムで密度曲線のための密度軸の表示/非表示を切り替える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Density Axis( 1 );

```

### Fit All

**構文:** obj << Fit All

**説明:** JMPで用意されている分布のうち、現在のデータにあてはめることができるすべての確率分布をあてはめ、それらを比較する。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :CO ) );
obj << Fit All;

```

### Fit Beta

**構文:** obj << Fit Beta

**説明:** 2パラメータのベータ分布をデータにあてはめる。データの値はすべて、0より大きく1未満でなければならない。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :OZONE ) );
obj << Fit Beta;

```

### Fit Beta Binomial

**構文:** obj << Fit Beta Binomial( Sample Size( n | column ) )

**説明:** ベータ二項分布をデータにあてはめる。一定の標本サイズ、または標本サイズを含む列を指定する必要がある。ベータ二項分布は二項分布を、より柔軟にした確率分布である。

**JMP追加されたバージョン:** 15

**例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Shirts.jmp" );
obj = dt << Distribution( Column( :"# Defects"n ) );
obj << Fit Beta Binomial( Sample Size( 10 ) );

```

**例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Shirts.jmp" );
obj = dt << Distribution( Column( :"# Defects"n ) );
obj << Fit Beta Binomial( Sample Size( :Box Size ) );

```

### Fit Binomial

**構文:** obj << Fit Binomial( Sample size( n | column ) )

**説明:** 二項分布をデータにあてはめる。一定の標本サイズ、または標本サイズを含む列を指定する必要がある。二項分布は、n回の独立した試行における成功回数を表す。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Shirts.jmp" );
obj = dt << Distribution( Column( :"# Defects"n ) );
obj << Fit Binomial( Sample Size( :Box Size ) );

```

### Fit Cauchy

**構文:** obj << Fit Cauchy

**説明:** Cauchy分布をデータにあてはめる。Cauchy分布は、外れ値に対してロバスト(頑健)である。Cauchy分布は、自由度1のt分布である。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
Random Reset( 15 );
d = J( 75, 1, Random Normal() );
d[1] = 10;
d[2] = 9;
d[3] = 8;
As Table( d );
Column( 1 ) << set name( "X" );
Distribution( Column( :X ), Fit Normal, Fit Cauchy );

```

### Fit ExGaussian

**構文:** obj << Fit ExGaussian

**説明:** exGauss分布(指数修正Gauss分布)をデータにあてはめる。

**例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Distribution( Column( :Y ) );
obj << Fit ExGaussian;

```

**例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Distribution( Column( :Y ) );
obj << Fit ExGaussian;
obj << Fit Normal;
obj << Fit Exponential;

```

### Fit Exponential

**構文:** obj << Fit Exponential

**説明:** 指数分布をデータにあてはめる。データは、すべて非負の値でなければいけない。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :POP ) );
obj << Fit Exponential;

```

### Fit Gamma

**構文:** obj << Fit Gamma

**説明:** 2パラメータのガンマ分布を正のデータにあてはめる。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :Max deg. F Jan ) );
obj << Fit Gamma;

```

### Fit Handle

**構文:** obj << (Fit Handle[number] << {option}); 

 obj << (Fit Handle["Distribution Name"] << {option})

**説明:** あてはめられた分布へのハンドルの配列。これにより、あてはめられた分布にコマンドを送ることができる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :CO ) );
obj << Fit Lognormal;
obj << Fit Weibull;
obj << (Fit Handle[2] << Goodness of Fit( 1 ));
obj << (Fit Handle["Lognormal"] << QQ Plot( 1 ));

```

### Fit Johnson

**構文:** obj << Fit Johnson

**説明:** Johnson分布をデータにあてはめる。分位数に基づいて、3種類のJohnson分布（Su、Sb、Sl）のうち最も適切なものが選択される。

**JMP追加されたバージョン:** 15

**例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Distribution( Column( :Y ) );
obj << Fit Johnson;

```

**例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :CO ) );
obj << Fit Johnson;

```

### Fit Largest Extreme Value

**構文:** obj << Fit Largest Extreme Value

**説明:** 最大極値分布をデータにあてはめる。

**JMP追加されたバージョン:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :NO ) );
obj << Fit Largest Extreme Value;

```

### Fit Lognormal

**構文:** obj << Fit Lognormal

**説明:** 対数正規分布をデータにあてはめる。データは、すべて正の値でなければいけない。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :CO ) );
obj << Fit Lognormal;

```

### Fit Negative Binomial

**構文:** obj << Fit Negative Binomial

**説明:** 負の二項分布をデータにあてはめる。負の二項分布は、ガンマPoisson分布と等価な確率分布である。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Airport.jmp" );
obj = dt << Distribution( Column( :Delay ) );
obj << Fit Negative Binomial;

```

### Fit Normal

**構文:** obj << Fit Normal

**説明:** 正規分布をデータにあてはめる。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Weight ) );
obj << Fit Normal;

```

### Fit Normal 2 Mixture

**構文:** obj << Fit Normal 2 Mixture

**説明:** 二重正規混合分布をデータにあてはめる。二重正規混合分布は、特に、二峰性のデータに適している。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cytometry.jmp" );
obj = dt << Distribution( Column( :CD8 ) );
obj << Fit Normal 2 Mixture;

```

### Fit Normal 3 Mixture

**構文:** obj << Fit Normal 3 Mixture

**説明:** 三重正規混合分布をデータにあてはめる。二重正規混合分布は、特に、多峰性のデータに適している。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cytometry.jmp" );
obj = dt << Distribution( Column( :CD8 ) );
obj << Fit Normal 3 Mixture;

```

### Fit Poisson

**構文:** obj << Fit Poisson

**説明:** Poisson分布をあてはめる。Poisson分布は、度数データに対してよく利用される。Poisson分布は、平均と分散が等しい。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Airport.jmp" );
obj = dt << Distribution( Column( :Delay ) );
obj << Fit Poisson;

```

### Fit SHASH

**構文:** obj << Fit Shash

**説明:** sinh-arcsinh分布（SHASH分布）をデータにあてはめる。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :CO ) );
obj << Fit Shash;

```

### Fit Smallest Extreme Value

**構文:** obj << Fit Smallest Extreme Value

**説明:** 最小極値分布をデータにあてはめる。

**JMP追加されたバージョン:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :NO ) );
obj << Fit Smallest Extreme Value;

```

### Fit Smooth Curve

**構文:** obj << Fit Smooth Curve( <Bandwidth( number )> )

**説明:** ノンパラメトリックな密度推定に基づき、データに滑らかな密度曲線をあてはめる。帯域幅(バンド幅)を指定することで、滑らかさを設定できる。

**JMP追加されたバージョン:** 15

**例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :SO2 ) );
obj << Fit Smooth Curve;

```

**例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :SO2 ) );
obj << Fit Smooth Curve( Bandwidth( 0.02 ) );

```

### Fit Student's t

**構文:** obj << Fit Student&apos;s t

**説明:** Studentのt分布をデータにあてはめる。t分布は、正規分布とCauchy分布の間に位置する確率分布である。t分布も、Cauchy分布と同様、外れ値に対してロバスト(頑健)である。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
Random Reset( 15 );
d = J( 75, 1, Random Normal() );
d[1] = 10;
d[2] = 9;
d[3] = 8;
As Table( d );
Column( 1 ) << set name( "X" );
Distribution( Column( :X ), Fit Normal, Fit Student's t );

```

### Fit Weibull

**構文:** obj << Fit Weibull

**説明:** 2パラメータのWeibull分布をデータにあてはめる。データは、すべて正の値でなければいけない。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :NO ) );
obj << Fit Weibull;

```

### Fit ZI Beta Binomial

**構文:** obj << Fit ZI Beta Binomial( Sample Size( n | column ) )

**説明:** ゼロ強調ベータ二項分布をあてはめる。一定の標本サイズ、または標本サイズを含む列を指定する必要がある。この分布は、ゼロの観測数がベータ二項分布よりも多くなるような場合に、独立した試行をn回行ったときの成功回数をモデル化したもの。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Shirts.jmp" );
obj = dt << Distribution( Column( :"# Defects"n ) );
obj << Fit ZI Beta Binomial( Sample Size( :Box Size ) );

```

### Fit ZI Binomial

**構文:** obj << Fit ZI Binomial( Sample Size( n | column ) )

**説明:** ゼロ強調二項分布をあてはめる。一定の標本サイズ、または標本サイズを含む列を指定する必要がある。この分布は、ゼロの観測数が二項分布で想定される個数よりも多くなるような場合に、独立した試行をn回行ったときの成功回数をモデル化したもの。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Shirts.jmp" );
obj = dt << Distribution( Column( :"# Defects"n ) );
obj << Fit ZI Binomial( Sample Size( :Box Size ) );

```

### Fit ZI Negative Binomial

**構文:** obj << Fit ZI Negative Binomial

**説明:** ゼロ強調負の二項分布分布(ゼロ過剰 負の二項分布分布)をデータにあてはめる。データにゼロの値が含まれている場合にのみ利用可能。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
dt << Distribution( Column( :satell ), Fit ZI Negative Binomial );

```

### Fit ZI Poisson

**構文:** obj << Fit ZI Poisson

**説明:** ゼロ強調Poisson分布(ゼロ過剰Poisson分布)をデータにあてはめる。データにゼロの値が含まれている場合にのみ利用可能。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
dt << Distribution( Column( :satell ), Fit ZI Poisson );

```

### Fit ZI SHASH

**構文:** obj << Fit ZI SHASH

**説明:** ゼロ強調のSHASH分布(観測値が0において確率質量をもつSHASH分布)をデータにあてはめる。

```jsl

Names Default To Here( 1 );
Random Reset( 18 );
d = J( 250, 1, Random SHASH( 0, 1, 3, 5 ) );
For( i = 1, i <= 250, i++,
	If( Random Uniform() < .2,
		d[i] = 0
	)
);
As Table( d );
Column( 1 ) << set name( "X" );
Distribution( Column( :X ), Fit ZI SHASH, Fit SHASH );

```

### Frequencies

**構文:** obj << Frequencies( state=0|1 )

**説明:** 度数と割合のレポートの表示/非表示を切り替える。このレポートには、水準ごとに、度数と割合が表示されている。 デフォルトではオン。

**名義変数の例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
Wait( 1 );
obj << Frequencies( 0 );

```

**多重応答の例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );
Wait( 1 );
obj << Frequencies( 0 );

```

### Histogram

**構文:** obj << Histogram( state=0|1 )

**説明:** ヒストグラムの表示/非表示を切り替える。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
Wait( 1 );
obj << Histogram( 0 );

```

### Histogram Color

**構文:** obj << Histogram Color( color )

**説明:** ヒストグラムの棒の色を変更する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Histogram Color( "Red" );

```

### Horizontal Layout

**構文:** obj << Horizontal Layout( state=0|1 )

**説明:** ヒストグラムとレポートの向きを横方向に変更する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Horizontal Layout( 1 );

```

### Mosaic Plot

**構文:** obj << Mosaic Plot( state=0|1 )

**説明:** 名義尺度または順序尺度の変数に対して、モザイク図の表示/非表示を切り替える。モザイク図は、各長方形がそのグループの度数に比例している、縦に積み重ねた棒グラフである。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Mosaic Plot( 1 );

```

### New JSL Preset

**構文:** New JSL Preset( preset )

**説明:** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ) ),
	Nominal Distribution( Column( :age ) )
);
preset = obj[1] << New JSL Preset(
	Continuous Distribution( Column( :A ), Normal Quantile Plot( 1 ) )
);
Wait( 1 );
obj[1] << Apply Preset( preset );

```

### New Preset

**構文:** obj = New Preset()

**説明:** オブジェクトに適用されているオプションとカスタマイズをプリセットとしてまとめる。このオブジェクトをApply Presetに渡すことで、同じ種類のオブジェクトに設定をコピーすることができる。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) ),
	Nominal Distribution( Column( :age ), Mosaic Plot( 1 ) )
);
preset = obj[1] << New Preset();

```

### Normal Quantile Plot

**構文:** obj << Normal Quantile Plot( state=0|1 )

**説明:** 正規分位点プロットの表示/非表示を切り替える。正規分位点プロットは、データがどれぐらい正規分布に従っているかどうかを視覚的に見ることができる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Normal Quantile Plot( 1 );

```

### Order By

**構文:** obj << Order By( "Default"|"Count Descending"|"Count Ascending" )

**説明:** ヒストグラム、モザイク図、度数レポートを、度数の昇順または降順で並べる。また、デフォルトの順序に戻すことも可能。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Order By( "Count Descending" );

```

### Outlier Box Plot

**構文:** obj << Outlier Box Plot( state=0|1 )

**説明:** 箱ひげ図の表示/非表示を切り替える。箱ひげ図は、データの分布を見たり、外れ値を探したりするのに有用。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
Wait( 1 );
obj << Outlier Box Plot( 0 );

```

### Outlier Box Plot Row Cutoff

**構文:** obj << Outlier Box Plot Row Cutoff( number )

**説明:** 外れ値の箱ひげ図をデフォルトで表示する最大行数を設定する。 デフォルトの値は"100000"。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Seasonal Flu.jmp" );
obj = dt << Distribution( Column( :Flu Cases ) );
obj << Outlier Box Plot Row Cutoff( 10000 );

```

### PpK Capability Labeling

**構文:** obj << PpK Capability Labeling( state=0|1 )

**説明:** 「工程能力」のレポートにおいて、全体工程能力指数のラベルのCpをPpに変える。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :PM10 ) );
obj << PpK Capability Labeling( 0 );
obj << Process Capability( LSL( 5 ), Target( 40 ), USL( 75 ) );

```

### Prediction Interval

**構文:** obj << Prediction Interval( Alpha, N Samples, <Lower | Upper> )

**説明:** 予測区間を求める。予測区間とは、将来の1つの観測値が含まれる区間、もしくは、将来のn個の観測値が含まれる区間である。両側予測区間がデフォルトだが、片側予測区間も計算できる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Prediction Interval( 0.95, 20 );

```

### Prob Axis

**構文:** obj << Prob Axis( state=0|1 )

**説明:** ヒストグラムで割合(確率)の軸の表示/非表示を切り替える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Prob Axis( 1 );

```

### Process Capability

**構文:** obj << Process Capability( LSL( number ), Target( number ), USL( number ) )

**説明:** 工程能力分析を行う。工程能力指数を計算するために、下側仕様限界（LSL）、目標値、上側仕様限界（USL）を指定する必要がある。工程能力分析のレポートには、ヒストグラム、要約の詳細、能力指数、不適合の割合が含まれる。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :PM10 ) );
obj << Process Capability( LSL( 5 ), Target( 40 ), USL( 75 ) );

```

### Quantile Box Plot

**構文:** obj << Quantile Box Plot( state=0|1 )

**説明:** 「分位点の箱ひげ図」の表示/非表示を切り替える。「分位点の箱ひげ図」は、0%、0.5%、2.5%、10%、25%、50%、75%、90%、97.5%、99%、100%の分位点が示されている箱ひげ図である。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Outlier Box Plot( 0 );
obj << Quantile Box Plot( 1 );

```

### Quantiles

**構文:** obj << Quantiles( state=0|1 )

**説明:** 「分位点」レポートの表示/非表示を切り替える。デフォルトでは、分位点として、0%、0.5%、2.5%、10%、25%、50%、75%、90%、97.5%、99.5%、100%が表示される。求めたい分位点の累積確率を指定することも可能。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
Wait( 1 );
obj << Quantiles( 0 );

```

### Render Preset

**構文:** Render Preset( preset )

**説明:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ) ),
	Nominal Distribution( Column( :age ) )
);
obj[1] << Render Preset(
	Expr(
		Continuous Distribution( Column( :A ), Normal Quantile Plot( 1 ) )
	)
);

```

### Save

**構文:** obj << Save( "水準番号"|"水準中間点"|"順位"|"平均順位"|"確率スコア"|"正規分位点"|"標準化"|"中心化"|"ロバスト 標準化"|"ロバスト 中心化"|"仕様限界"|"スクリプトをログに保存" )

**説明:** 行に対する統計量をデータテーブルの新しい列に保存する。オプションには、保存したい統計量の名前を指定する。また、現在のレポートを生成するスクリプトを、ログウィンドウに出力するオプションもある。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Save( "Ranks" );

```

### Separate Bars

**構文:** obj << Separate Bars( state=0|1 )

**説明:** ヒストグラムの棒と棒の間を離す。このオプションはカテゴリカル変数の場合のみ利用可能。

**名義変数の例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Separate Bars( 1 );

```

**多重応答の例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );
obj << Separate Bars( 1 );

```

### Set Bin Width

**構文:** obj << Set Bin Width( number )

**説明:** ヒストグラムにおいて、棒の幅を設定する。このオプションは連続変数にのみ使用可能。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Set Bin Width( 5 );

```

### Set Quantile Increment

**構文:** obj << Set Quantile Increment( fraction | "revert to default quantiles" )

**説明:** 「分位点」レポートで使用される累積確率を、指定された間隔に設定したり、またはデフォルト値に戻したりする。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Set Quantile Increment( 0.05 );
Wait( 1 );
obj << Set Quantile Increment( "revert to default quantiles" );

```

### Shadowgram

**構文:** obj << Shadowgram( state=0|1 )

**説明:** シャドウグラムの表示/非表示を切り替える。このオプションをオンにすると、ヒストグラムの代わりにシャドウグラムが描かれる。シャドウグラムとは、異なる棒の幅のヒストグラムを重ね合わせたもの。このオプションは連続変数にのみ使用可能。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Shadowgram( 1 );

```

### Show Counts

**構文:** obj << Show Counts( state=0|1 )

**説明:** ヒストグラムにおいて、棒の度数の表示/非表示を切り替える。これは、ヒストグラムの各棒で表される集合の度数を示す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Show Counts( 1 );

```

### Show Percents

**構文:** obj << Show Percents( state=0|1 )

**説明:** ヒストグラムにおいて、棒の割合の表示/非表示を切り替える。これは、ヒストグラムの各棒で表される集合の全体に対する割合を示す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Show Percents( 1 );

```

### Stack

**構文:** obj << Stack( state=0|1 )

**説明:** ヒストグラムとレポートの向きを横方向に変更し、個々のレポートを縦に積み重ねる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
obj = dt << Distribution( Column( :BP 8M, :BP 12M, :BP 6M, :BP 8W, :BP 12W ) );
obj << Stack( 1 );

```

### Std Error Bars

**構文:** obj << Std Error Bars( state=0|1 )

**説明:** ヒストグラムの各棒について、標準誤差バーの表示/非表示を切り替える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Std Error Bars( 1 );

```

### Stem and Leaf

**構文:** obj << Stem and Leaf( state=0|1 )

**説明:** 幹葉プロットの表示/非表示を切り替える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Stem and Leaf( 1 );

```

### Summary Statistics

**構文:** obj << Summary Statistics( state=0|1 )

**説明:** 「要約統計量」レポートの表示/非表示を切り替える。このレポートには、平均や標準偏差など、連続変数に対する要約統計量が表示される。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
Wait( 1 );
obj << Summary Statistics( 0 );

```

### Test Equivalence

**構文:** obj << Test Equivalence( Target( number ), Practical Difference( number ), <Confidence( fraction )> )

**説明:** 平均に対する同等性検定を行う。平均に対する同等性検定とは、母平均が指定されたマージン内に収まっているかの検定である。同等性検定は、2つの片側検定（Two One-Sided Test: TOSt）の方式に基づいて行われる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Test Equivalence( Target( 62 ), Practical Difference( 1 ), Confidence( 0.95 ) );

```

### Test Mean

**構文:** obj << Test Mean( number, <Sigma( number )>, < Wilcoxon Signed Rank( 0|1 ) >, <PValue Animation>, <Power Animation> )

**説明:** 平均に対する1標本検定を実行する。母標準偏差（シグマ）に値を指定すると、z検定が実行される。母標準偏差を指定しなかった場合は、標本の標準偏差を使用してt検定を実行する。また、ノンパラメトリックなWilcoxon符号付き順位検定を追加で実行するオプションもある。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Test Mean( 60 ); 

obj << Test Mean( 60, Sigma( 4 ) ); 

obj << Test Mean( 60, Wilcoxon Signed Rank( 1 ) );

```

### Test Probabilities

**構文:** obj << Test Probabilities( Test( Hypothesized|Greater than|Less than ), Fix( Hypothesized|Omitted ), p1, <f>, p2, <f>, p3, <f>, etc. )

**説明:** カテゴリカルな変数の母割合に関して、指定された割合（p1、p2、p3など）を帰無仮説とした検定を行う。カテゴリカルな変数が2水準の場合には、Testオプションにて、カイ2乗適合度検定を行うか、片側の二項検定を行うかを指定できる。3水準以上の場合にはFixオプションにて、数値を指定しない仮説値をどのように設定するかを指定する。fはオプションの引数で、その前に指定されている水準を固定しているものとして計算を行う。

**2水準に対する両側検定の例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :sex ) ) );
obj << Test Probabilities( Test( Hypothesized ), 0.4, f, 0.6, f );

```

**2水準に対する片側検定の例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :sex ) ) );
obj << Test Probabilities( Test( Less than ), 0.5, f, 0.5 );

```

**多水準に対する検定例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :age ) ) );
obj << Test Probabilities(
	Test( Hypothesized ),
	0.8,
	0.04375,
	0.075,
	0.04375,
	0.01875,
	0.01875
);

```

### Test Std Dev

**構文:** obj << Test Std Dev( number )

**説明:** 標準偏差に対するカイ2乗検定を実行する。帰無仮説の値を指定する必要がある。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Test Std Dev( 3 );

```

### Tolerance Interval

**構文:** obj << Tolerance Interval( Alpha(number), Proportion(number), <Lower | Upper>, <Normal|Lognormal|Gamma|Exponential|Weibull|Smallest Extreme Value|Largest Extreme Value|Nonparametric> )

**説明:** 許容区間を求める。許容区間とは、指定された割合の観測値が含まれる区間である。通常は正規分布が仮定されるが、非正規分布を指定することもできる。指定できる分布には、対数正規分布・ガンマ分布・指数分布・Weibull分布、最小極値分布・最大極値分布があり、また、特定の確率分布を仮定しないノンパラメトリックな方法がある。また、片側区間を計算するオプションもある。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Tolerance Interval( Alpha( 0.95 ), Proportion( 0.85 ) );
obj << Tolerance Interval( Alpha( 0.95 ), Proportion( 0.9 ), Lower );
obj << Tolerance Interval( Alpha( 0.95 ), Proportion( 0.9 ), Upper, Lognormal );
obj << Tolerance Interval( Alpha( 0.95 ), Proportion( 0.8 ), Lower, Nonparametric );

```

### Uniform Scaling

**構文:** obj << Uniform Scaling( state=0|1 )

**説明:** すべてのヒストグラムの軸のスケールを同じにする。ヒストグラムの軸の最小値、最大値、目盛り間隔を同じものにする。そうすることで、異なる変数のデータの分布を比較しやすくなる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
obj = dt << Distribution( Column( :BP 8M, :BP 12M, :BP 6M, :BP 8W, :BP 12W ) );
obj << Uniform Scaling( 1 );

```

### Vertical

**構文:** obj << Vertical( state=0|1 )

**説明:** ヒストグラム、箱ひげ図、分位点プロットの向きを縦方向に変更する。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Vertical( 0 );

```

## Capability Analysis

### 項目のメッセージ

#### Capability Animation

**構文:** obj << Capability Animation

**説明:** 工程能力分析のアニメーションを別ウィンドウで開く。このアニメーションは、現在の統計量と仕様限界を元に、工程能力指標を描いたものである。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = Distribution( Column( :Weight ) );
obj << Capability Analysis( LSL( 16 ), USL( 24 ), Target( 20 ), Capability Animation );

```

#### Z Bench

**構文:** obj << Z Bench( state=0|1 )

**説明:** Z統計量の表示/非表示を切り替える。Z統計量は、平均からの仕様限界までの距離を、標準偏差を単位として表した指標。Z統計量は、AIAGで説明されている。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = Distribution( Column( :Weight ) );
obj << Capability Analysis( LSL( 16 ), USL( 24 ), Target( 20 ), Z Bench( 1 ) );

```

## Continuous Distribution

### 列

#### Column

**構文:** obj = Quantiles(...<Column( column(s) )>...)

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
Wait( 1 );
obj << Quantiles( 0 );

```

### 項目のメッセージ

#### Apply Preset

**構文:** Apply Preset( preset ); Apply Preset( source, label, <Folder( folder {, folder2, ...} )> )

**説明:** 作成されたプリセットをオブジェクトに適用する。保存された設定に合わせてオプションとカスタマイズが更新される。

**JMP追加されたバージョン:** 18

**Anonymous preset**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) ),
	Nominal Distribution( Column( :age ), Mosaic Plot( 1 ) )
);
preset = obj[1] << New Preset();
dt2 = Open( "$SAMPLE_DATA/Aircraft Incidents.jmp" );
obj2 = dt2 << Distribution(
	Nominal Distribution( Column( :Aircraft Damage ) ),
	Continuous Distribution( Column( :Total Minor Injuries ) )
);
Wait( 1 );
obj2[2] << Apply Preset( preset );

```

**Search by name**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ) ),
	Nominal Distribution( Column( :age ) )
);
Wait( 1 );
obj[1] << Apply Preset( "Sample Presets", "Check Normality" );

```

#### Axes on Left

**構文:** obj << Axes on Left( state=0|1 )

**説明:** 軸をグラフの左側に移動する。横方向に表示されるヒスログラムの度数、確率、密度、および、横方向に表示される正規分位点プロットにこのオプションは影響する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ), Horizontal Layout( 1 ), Count Axis( 1 ) );
obj << Axes on Left( 1 );

```

#### CDF Plot

**構文:** obj << CDF Plot( state=0|1 )

**説明:** 経験累積分布関数のプロットの表示/非表示を切り替える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << CDF Plot( 1 );

```

#### Capability Analysis

**構文:** obj << Capability Analysis( LSL( number ), Target( number ), USL( number ) )

**説明:** 工程能力分析を実行する。工程能力指数を求めるために、下側仕様限界（LSL）、目標値、上側仕様限界（USL）指定する必要がある。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Distribution( Column( :Weight ) );
obj << Capability Analysis( LSL( 16 ), USL( 24 ), Target( 20 ) );

```

#### Confidence Interval

**構文:** obj << Confidence Interval( number, <Upper | Lower>, <Sigma( number )> )

**説明:** 平均と標準偏差について、信頼区間を計算する。母標準偏差(シグマ)を指定した場合、それを母標準偏差として平均の信頼区間は計算される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Confidence Interval( 0.98 ); 

obj << Confidence Interval( 0.95, Lower ); 

obj << Confidence Interval( 0.95, Sigma( 4 ) );

```

#### Count Axis

**構文:** obj << Count Axis( state=0|1 )

**説明:** ヒストグラムの度数軸の表示/非表示を切り替える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Count Axis( 1 );

```

#### Custom Quantiles

**構文:** obj << Custom Quantiles( fraction, [quantile1, quantile2, ... quantileN] )

**説明:** 指定された割合の分位点を計算する。順位、および、平滑化された経験尤度によって分位点を計算する。指定された信頼水準の信頼区間も計算する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Custom Quantiles( 0.975, [0.075, 0.1, 0.125, 0.975, 0.99] );

```

#### Customize Summary Statistics

**構文:** obj << Customize Summary Statistics(statistic1( state=0|1 ), statistic2( state=0|1 ), ..., statisticN( state=0|1 ), <Set Trimmed Mean Percent(number)>, <Set Alpha Level(number)>)

**説明:** 「要約統計量」レポートに表示される要約統計量をカスタマイズする。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Customize Summary Statistics( N( 0 ), Variance( 1 ), Skewness( 1 ) );

```

#### Density Axis

**構文:** obj << Density Axis( state=0|1 )

**説明:** ヒストグラムで密度曲線のための密度軸の表示/非表示を切り替える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Density Axis( 1 );

```

#### Fit All

**構文:** obj << Fit All

**説明:** JMPで用意されている分布のうち、現在のデータにあてはめることができるすべての確率分布をあてはめ、それらを比較する。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :CO ) );
obj << Fit All;

```

#### Fit Beta

**構文:** obj << Fit Beta

**説明:** 2パラメータのベータ分布をデータにあてはめる。データの値はすべて、0より大きく1未満でなければならない。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :OZONE ) );
obj << Fit Beta;

```

#### Fit Beta Binomial

**構文:** obj << Fit Beta Binomial( Sample Size( n | column ) )

**説明:** ベータ二項分布をデータにあてはめる。一定の標本サイズ、または標本サイズを含む列を指定する必要がある。ベータ二項分布は二項分布を、より柔軟にした確率分布である。

**JMP追加されたバージョン:** 15

**例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Shirts.jmp" );
obj = dt << Distribution( Column( :"# Defects"n ) );
obj << Fit Beta Binomial( Sample Size( 10 ) );

```

**例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Shirts.jmp" );
obj = dt << Distribution( Column( :"# Defects"n ) );
obj << Fit Beta Binomial( Sample Size( :Box Size ) );

```

#### Fit Binomial

**構文:** obj << Fit Binomial( Sample size( n | column ) )

**説明:** 二項分布をデータにあてはめる。一定の標本サイズ、または標本サイズを含む列を指定する必要がある。二項分布は、n回の独立した試行における成功回数を表す。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Shirts.jmp" );
obj = dt << Distribution( Column( :"# Defects"n ) );
obj << Fit Binomial( Sample Size( :Box Size ) );

```

#### Fit Cauchy

**構文:** obj << Fit Cauchy

**説明:** Cauchy分布をデータにあてはめる。Cauchy分布は、外れ値に対してロバスト(頑健)である。Cauchy分布は、自由度1のt分布である。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
Random Reset( 15 );
d = J( 75, 1, Random Normal() );
d[1] = 10;
d[2] = 9;
d[3] = 8;
As Table( d );
Column( 1 ) << set name( "X" );
Distribution( Column( :X ), Fit Normal, Fit Cauchy );

```

#### Fit ExGaussian

**構文:** obj << Fit ExGaussian

**説明:** exGauss分布(指数修正Gauss分布)をデータにあてはめる。

**例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Distribution( Column( :Y ) );
obj << Fit ExGaussian;

```

**例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Distribution( Column( :Y ) );
obj << Fit ExGaussian;
obj << Fit Normal;
obj << Fit Exponential;

```

#### Fit Exponential

**構文:** obj << Fit Exponential

**説明:** 指数分布をデータにあてはめる。データは、すべて非負の値でなければいけない。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :POP ) );
obj << Fit Exponential;

```

#### Fit Gamma

**構文:** obj << Fit Gamma

**説明:** 2パラメータのガンマ分布を正のデータにあてはめる。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :Max deg. F Jan ) );
obj << Fit Gamma;

```

#### Fit Handle

**構文:** obj << (Fit Handle[number] << {option}); 

 obj << (Fit Handle["Distribution Name"] << {option})

**説明:** あてはめられた分布へのハンドルの配列。これにより、あてはめられた分布にコマンドを送ることができる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :CO ) );
obj << Fit Lognormal;
obj << Fit Weibull;
obj << (Fit Handle[2] << Goodness of Fit( 1 ));
obj << (Fit Handle["Lognormal"] << QQ Plot( 1 ));

```

#### Fit Johnson

**構文:** obj << Fit Johnson

**説明:** Johnson分布をデータにあてはめる。分位数に基づいて、3種類のJohnson分布（Su、Sb、Sl）のうち最も適切なものが選択される。

**JMP追加されたバージョン:** 15

**例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Distribution( Column( :Y ) );
obj << Fit Johnson;

```

**例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :CO ) );
obj << Fit Johnson;

```

#### Fit Largest Extreme Value

**構文:** obj << Fit Largest Extreme Value

**説明:** 最大極値分布をデータにあてはめる。

**JMP追加されたバージョン:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :NO ) );
obj << Fit Largest Extreme Value;

```

#### Fit Lognormal

**構文:** obj << Fit Lognormal

**説明:** 対数正規分布をデータにあてはめる。データは、すべて正の値でなければいけない。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :CO ) );
obj << Fit Lognormal;

```

#### Fit Negative Binomial

**構文:** obj << Fit Negative Binomial

**説明:** 負の二項分布をデータにあてはめる。負の二項分布は、ガンマPoisson分布と等価な確率分布である。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Airport.jmp" );
obj = dt << Distribution( Column( :Delay ) );
obj << Fit Negative Binomial;

```

#### Fit Normal

**構文:** obj << Fit Normal

**説明:** 正規分布をデータにあてはめる。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Weight ) );
obj << Fit Normal;

```

#### Fit Normal 2 Mixture

**構文:** obj << Fit Normal 2 Mixture

**説明:** 二重正規混合分布をデータにあてはめる。二重正規混合分布は、特に、二峰性のデータに適している。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cytometry.jmp" );
obj = dt << Distribution( Column( :CD8 ) );
obj << Fit Normal 2 Mixture;

```

#### Fit Normal 3 Mixture

**構文:** obj << Fit Normal 3 Mixture

**説明:** 三重正規混合分布をデータにあてはめる。二重正規混合分布は、特に、多峰性のデータに適している。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cytometry.jmp" );
obj = dt << Distribution( Column( :CD8 ) );
obj << Fit Normal 3 Mixture;

```

#### Fit Poisson

**構文:** obj << Fit Poisson

**説明:** Poisson分布をあてはめる。Poisson分布は、度数データに対してよく利用される。Poisson分布は、平均と分散が等しい。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Airport.jmp" );
obj = dt << Distribution( Column( :Delay ) );
obj << Fit Poisson;

```

#### Fit SHASH

**構文:** obj << Fit Shash

**説明:** sinh-arcsinh分布（SHASH分布）をデータにあてはめる。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :CO ) );
obj << Fit Shash;

```

#### Fit Smallest Extreme Value

**構文:** obj << Fit Smallest Extreme Value

**説明:** 最小極値分布をデータにあてはめる。

**JMP追加されたバージョン:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :NO ) );
obj << Fit Smallest Extreme Value;

```

#### Fit Smooth Curve

**構文:** obj << Fit Smooth Curve( <Bandwidth( number )> )

**説明:** ノンパラメトリックな密度推定に基づき、データに滑らかな密度曲線をあてはめる。帯域幅(バンド幅)を指定することで、滑らかさを設定できる。

**JMP追加されたバージョン:** 15

**例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :SO2 ) );
obj << Fit Smooth Curve;

```

**例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :SO2 ) );
obj << Fit Smooth Curve( Bandwidth( 0.02 ) );

```

#### Fit Student's t

**構文:** obj << Fit Student&apos;s t

**説明:** Studentのt分布をデータにあてはめる。t分布は、正規分布とCauchy分布の間に位置する確率分布である。t分布も、Cauchy分布と同様、外れ値に対してロバスト(頑健)である。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
Random Reset( 15 );
d = J( 75, 1, Random Normal() );
d[1] = 10;
d[2] = 9;
d[3] = 8;
As Table( d );
Column( 1 ) << set name( "X" );
Distribution( Column( :X ), Fit Normal, Fit Student's t );

```

#### Fit Weibull

**構文:** obj << Fit Weibull

**説明:** 2パラメータのWeibull分布をデータにあてはめる。データは、すべて正の値でなければいけない。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :NO ) );
obj << Fit Weibull;

```

#### Fit ZI Beta Binomial

**構文:** obj << Fit ZI Beta Binomial( Sample Size( n | column ) )

**説明:** ゼロ強調ベータ二項分布をあてはめる。一定の標本サイズ、または標本サイズを含む列を指定する必要がある。この分布は、ゼロの観測数がベータ二項分布よりも多くなるような場合に、独立した試行をn回行ったときの成功回数をモデル化したもの。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Shirts.jmp" );
obj = dt << Distribution( Column( :"# Defects"n ) );
obj << Fit ZI Beta Binomial( Sample Size( :Box Size ) );

```

#### Fit ZI Binomial

**構文:** obj << Fit ZI Binomial( Sample Size( n | column ) )

**説明:** ゼロ強調二項分布をあてはめる。一定の標本サイズ、または標本サイズを含む列を指定する必要がある。この分布は、ゼロの観測数が二項分布で想定される個数よりも多くなるような場合に、独立した試行をn回行ったときの成功回数をモデル化したもの。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Shirts.jmp" );
obj = dt << Distribution( Column( :"# Defects"n ) );
obj << Fit ZI Binomial( Sample Size( :Box Size ) );

```

#### Fit ZI Negative Binomial

**構文:** obj << Fit ZI Negative Binomial

**説明:** ゼロ強調負の二項分布分布(ゼロ過剰 負の二項分布分布)をデータにあてはめる。データにゼロの値が含まれている場合にのみ利用可能。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
dt << Distribution( Column( :satell ), Fit ZI Negative Binomial );

```

#### Fit ZI Poisson

**構文:** obj << Fit ZI Poisson

**説明:** ゼロ強調Poisson分布(ゼロ過剰Poisson分布)をデータにあてはめる。データにゼロの値が含まれている場合にのみ利用可能。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
dt << Distribution( Column( :satell ), Fit ZI Poisson );

```

#### Fit ZI SHASH

**構文:** obj << Fit ZI SHASH

**説明:** ゼロ強調のSHASH分布(観測値が0において確率質量をもつSHASH分布)をデータにあてはめる。

```jsl

Names Default To Here( 1 );
Random Reset( 18 );
d = J( 250, 1, Random SHASH( 0, 1, 3, 5 ) );
For( i = 1, i <= 250, i++,
	If( Random Uniform() < .2,
		d[i] = 0
	)
);
As Table( d );
Column( 1 ) << set name( "X" );
Distribution( Column( :X ), Fit ZI SHASH, Fit SHASH );

```

#### Histogram

**構文:** obj << Histogram( state=0|1 )

**説明:** ヒストグラムの表示/非表示を切り替える。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
Wait( 1 );
obj << Histogram( 0 );

```

#### Histogram Color

**構文:** obj << Histogram Color( color )

**説明:** ヒストグラムの棒の色を変更する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Histogram Color( "Red" );

```

#### Horizontal Layout

**構文:** obj << Horizontal Layout( state=0|1 )

**説明:** ヒストグラムとレポートの向きを横方向に変更する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Horizontal Layout( 1 );

```

#### New JSL Preset

**構文:** New JSL Preset( preset )

**説明:** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ) ),
	Nominal Distribution( Column( :age ) )
);
preset = obj[1] << New JSL Preset(
	Continuous Distribution( Column( :A ), Normal Quantile Plot( 1 ) )
);
Wait( 1 );
obj[1] << Apply Preset( preset );

```

#### New Preset

**構文:** obj = New Preset()

**説明:** オブジェクトに適用されているオプションとカスタマイズをプリセットとしてまとめる。このオブジェクトをApply Presetに渡すことで、同じ種類のオブジェクトに設定をコピーすることができる。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) ),
	Nominal Distribution( Column( :age ), Mosaic Plot( 1 ) )
);
preset = obj[1] << New Preset();

```

#### Normal Quantile Plot

**構文:** obj << Normal Quantile Plot( state=0|1 )

**説明:** 正規分位点プロットの表示/非表示を切り替える。正規分位点プロットは、データがどれぐらい正規分布に従っているかどうかを視覚的に見ることができる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Normal Quantile Plot( 1 );

```

#### Outlier Box Plot

**構文:** obj << Outlier Box Plot( state=0|1 )

**説明:** 箱ひげ図の表示/非表示を切り替える。箱ひげ図は、データの分布を見たり、外れ値を探したりするのに有用。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
Wait( 1 );
obj << Outlier Box Plot( 0 );

```

#### Outlier Box Plot Row Cutoff

**構文:** obj << Outlier Box Plot Row Cutoff( number )

**説明:** 外れ値の箱ひげ図をデフォルトで表示する最大行数を設定する。 デフォルトの値は"100000"。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Seasonal Flu.jmp" );
obj = dt << Distribution( Column( :Flu Cases ) );
obj << Outlier Box Plot Row Cutoff( 10000 );

```

#### PpK Capability Labeling

**構文:** obj << PpK Capability Labeling( state=0|1 )

**説明:** 「工程能力」のレポートにおいて、全体工程能力指数のラベルのCpをPpに変える。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :PM10 ) );
obj << PpK Capability Labeling( 0 );
obj << Process Capability( LSL( 5 ), Target( 40 ), USL( 75 ) );

```

#### Prediction Interval

**構文:** obj << Prediction Interval( Alpha, N Samples, <Lower | Upper> )

**説明:** 予測区間を求める。予測区間とは、将来の1つの観測値が含まれる区間、もしくは、将来のn個の観測値が含まれる区間である。両側予測区間がデフォルトだが、片側予測区間も計算できる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Prediction Interval( 0.95, 20 );

```

#### Prob Axis

**構文:** obj << Prob Axis( state=0|1 )

**説明:** ヒストグラムで割合(確率)の軸の表示/非表示を切り替える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Prob Axis( 1 );

```

#### Process Capability

**構文:** obj << Process Capability( LSL( number ), Target( number ), USL( number ) )

**説明:** 工程能力分析を行う。工程能力指数を計算するために、下側仕様限界（LSL）、目標値、上側仕様限界（USL）を指定する必要がある。工程能力分析のレポートには、ヒストグラム、要約の詳細、能力指数、不適合の割合が含まれる。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :PM10 ) );
obj << Process Capability( LSL( 5 ), Target( 40 ), USL( 75 ) );

```

#### Quantile Box Plot

**構文:** obj << Quantile Box Plot( state=0|1 )

**説明:** 「分位点の箱ひげ図」の表示/非表示を切り替える。「分位点の箱ひげ図」は、0%、0.5%、2.5%、10%、25%、50%、75%、90%、97.5%、99%、100%の分位点が示されている箱ひげ図である。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Outlier Box Plot( 0 );
obj << Quantile Box Plot( 1 );

```

#### Quantiles

**構文:** obj << Quantiles( state=0|1 )

**説明:** 「分位点」レポートの表示/非表示を切り替える。デフォルトでは、分位点として、0%、0.5%、2.5%、10%、25%、50%、75%、90%、97.5%、99.5%、100%が表示される。求めたい分位点の累積確率を指定することも可能。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
Wait( 1 );
obj << Quantiles( 0 );

```

#### Render Preset

**構文:** Render Preset( preset )

**説明:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ) ),
	Nominal Distribution( Column( :age ) )
);
obj[1] << Render Preset(
	Expr(
		Continuous Distribution( Column( :A ), Normal Quantile Plot( 1 ) )
	)
);

```

#### Save

**構文:** obj << Save( "水準番号"|"水準中間点"|"順位"|"平均順位"|"確率スコア"|"正規分位点"|"標準化"|"中心化"|"ロバスト 標準化"|"ロバスト 中心化"|"仕様限界"|"スクリプトをログに保存" )

**説明:** 行に対する統計量をデータテーブルの新しい列に保存する。オプションには、保存したい統計量の名前を指定する。また、現在のレポートを生成するスクリプトを、ログウィンドウに出力するオプションもある。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Save( "Ranks" );

```

#### Set Bin Width

**構文:** obj << Set Bin Width( number )

**説明:** ヒストグラムにおいて、棒の幅を設定する。このオプションは連続変数にのみ使用可能。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Set Bin Width( 5 );

```

#### Set Quantile Increment

**構文:** obj << Set Quantile Increment( fraction | "revert to default quantiles" )

**説明:** 「分位点」レポートで使用される累積確率を、指定された間隔に設定したり、またはデフォルト値に戻したりする。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Set Quantile Increment( 0.05 );
Wait( 1 );
obj << Set Quantile Increment( "revert to default quantiles" );

```

#### Shadowgram

**構文:** obj << Shadowgram( state=0|1 )

**説明:** シャドウグラムの表示/非表示を切り替える。このオプションをオンにすると、ヒストグラムの代わりにシャドウグラムが描かれる。シャドウグラムとは、異なる棒の幅のヒストグラムを重ね合わせたもの。このオプションは連続変数にのみ使用可能。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Shadowgram( 1 );

```

#### Show Counts

**構文:** obj << Show Counts( state=0|1 )

**説明:** ヒストグラムにおいて、棒の度数の表示/非表示を切り替える。これは、ヒストグラムの各棒で表される集合の度数を示す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Show Counts( 1 );

```

#### Show Percents

**構文:** obj << Show Percents( state=0|1 )

**説明:** ヒストグラムにおいて、棒の割合の表示/非表示を切り替える。これは、ヒストグラムの各棒で表される集合の全体に対する割合を示す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Show Percents( 1 );

```

#### Std Error Bars

**構文:** obj << Std Error Bars( state=0|1 )

**説明:** ヒストグラムの各棒について、標準誤差バーの表示/非表示を切り替える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Std Error Bars( 1 );

```

#### Stem and Leaf

**構文:** obj << Stem and Leaf( state=0|1 )

**説明:** 幹葉プロットの表示/非表示を切り替える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Stem and Leaf( 1 );

```

#### Summary Statistics

**構文:** obj << Summary Statistics( state=0|1 )

**説明:** 「要約統計量」レポートの表示/非表示を切り替える。このレポートには、平均や標準偏差など、連続変数に対する要約統計量が表示される。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
Wait( 1 );
obj << Summary Statistics( 0 );

```

#### Test Equivalence

**構文:** obj << Test Equivalence( Target( number ), Practical Difference( number ), <Confidence( fraction )> )

**説明:** 平均に対する同等性検定を行う。平均に対する同等性検定とは、母平均が指定されたマージン内に収まっているかの検定である。同等性検定は、2つの片側検定（Two One-Sided Test: TOSt）の方式に基づいて行われる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Test Equivalence( Target( 62 ), Practical Difference( 1 ), Confidence( 0.95 ) );

```

#### Test Mean

**構文:** obj << Test Mean( number, <Sigma( number )>, < Wilcoxon Signed Rank( 0|1 ) >, <PValue Animation>, <Power Animation> )

**説明:** 平均に対する1標本検定を実行する。母標準偏差（シグマ）に値を指定すると、z検定が実行される。母標準偏差を指定しなかった場合は、標本の標準偏差を使用してt検定を実行する。また、ノンパラメトリックなWilcoxon符号付き順位検定を追加で実行するオプションもある。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Test Mean( 60 ); 

obj << Test Mean( 60, Sigma( 4 ) ); 

obj << Test Mean( 60, Wilcoxon Signed Rank( 1 ) );

```

#### Test Std Dev

**構文:** obj << Test Std Dev( number )

**説明:** 標準偏差に対するカイ2乗検定を実行する。帰無仮説の値を指定する必要がある。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Test Std Dev( 3 );

```

#### Tolerance Interval

**構文:** obj << Tolerance Interval( Alpha(number), Proportion(number), <Lower | Upper>, <Normal|Lognormal|Gamma|Exponential|Weibull|Smallest Extreme Value|Largest Extreme Value|Nonparametric> )

**説明:** 許容区間を求める。許容区間とは、指定された割合の観測値が含まれる区間である。通常は正規分布が仮定されるが、非正規分布を指定することもできる。指定できる分布には、対数正規分布・ガンマ分布・指数分布・Weibull分布、最小極値分布・最大極値分布があり、また、特定の確率分布を仮定しないノンパラメトリックな方法がある。また、片側区間を計算するオプションもある。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Tolerance Interval( Alpha( 0.95 ), Proportion( 0.85 ) );
obj << Tolerance Interval( Alpha( 0.95 ), Proportion( 0.9 ), Lower );
obj << Tolerance Interval( Alpha( 0.95 ), Proportion( 0.9 ), Upper, Lognormal );
obj << Tolerance Interval( Alpha( 0.95 ), Proportion( 0.8 ), Lower, Nonparametric );

```

#### Vertical

**構文:** obj << Vertical( state=0|1 )

**説明:** ヒストグラム、箱ひげ図、分位点プロットの向きを縦方向に変更する。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Vertical( 0 );

```

## Distribution Fit

### 項目のメッセージ

#### Density Curve

**構文:** obj << Fit Distribution Name( Density Curve( state=0|1 ) ); 

obj << ( Fit Handle[number] << Density Curve( state=0|1 ))

**説明:** ヒストグラムの密度曲線の表示/非表示を切り替える。あてはめられた確率分布の密度曲線がヒストグラム上に描かれる。 デフォルトではオン。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :CO ) );
obj << Fit Lognormal( Density Curve( 0 ) );

```

#### Distribution Profiler

**構文:** obj << Fit Distribution Name( Distribution Profiler( state=0|1 ) ); 

obj << ( Fit Handle[number] << Distribution Profiler( state=0|1 ) )

**説明:** あてはめた分布に関して、累積分布関数の予測プロファイルの表示/非表示を切り替える。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :CO ) );
obj << Fit Lognormal( Distribution Profiler( 1 ) );

```

#### Fitted CDF

**構文:** obj << Fit Distribution Name( Fitted CDF( vector ));

 obj << ( Fit Handle[number] << Fitted CDF( vector ))

**説明:** あてはめた分布の下側累積確率の表示/非表示を切り替える。

**JMP追加されたバージョン:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :CO ) );
obj << Fit Lognormal( Fitted CDF( [5 8 11] ) );

```

#### Fitted Quantiles

**構文:** obj << Fit Distribution Name( Fitted Quantiles( vector ));

 obj << ( Fit Handle[number] << Fitted Quantiles( vector ))

**説明:** あてはめた分布の分位点の表示/非表示を切り替える。オプションには、求めたい分位点の累積確率を指定する。

**JMP追加されたバージョン:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :CO ) );
obj << Fit Lognormal( Fitted Quantiles( [.9 .95 .99] ) );

```

#### Fix Parameters

**構文:** obj << Fit Distribution Name( Fix Parameters( vector ));

 obj << ( Fit Handle[number] << Fix Parameters( vector ))

**説明:** 指定されたパラメータを定数として固定して、残りのパラメータを再推定する。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :CO ) );
obj << Fit Normal( Fix Parameters( [. 2.8] ) );

```

#### Goodness of Fit

**構文:** obj << Fit Distribution Name( Goodness of Fit( state=0|1 )); 

obj << ( Fit Handle[number] << Goodness of Fit( state=0|1 ))

**説明:** 適合度検定の表示/非表示を切り替える。この適合度検定は、あてはめられた確率分布のデータに対する適合度を検定するものである。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :CO ) );
obj << Fit Lognormal( Goodness of Fit( 1 ) );

```

#### PP Plot

**構文:** obj << Fit Distribution Name( PP Plot( state=0|1 ) ); 

 obj << (Fit Handle[ number ] << PP Plot( state=0|1 ) )

**説明:** 確率プロット(PPプロット)の表示/非表示を切り替える。確率プロットは、経験累積分布関数とあてはめ分布の累積分布関数との関係を示したグラフである。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Distribution( Column( :Y ) );
obj << Fit Gamma( PP Plot( 1 ) );

```

#### Process Capability

**構文:** obj << Fit Distribution Name( Process Capability( LSL( number ), Target( number ), USL( number ))); 

 obj << (Fit Handle[number] << ( Process Capability( LSL( number ), Target( number ), USL( number ))))

**説明:** 工程能力分析を行う。工程能力指数を計算するために、下側仕様限界（LSL）、目標値、上側仕様限界（USL）を指定する必要がある。工程能力分析のレポートには、ヒストグラム、要約の詳細、能力指数、不適合の割合が含まれる。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :OZONE ) );
obj << Fit Lognormal( Process Capability( LSL( .03 ), Target( .15 ), USL( .27 ) ) );

```

#### QQ Plot

**構文:** obj << Fit Distribution Name( QQ Plot( state=0|1 ) ); 

obj << ( Fit Handle[number] << QQ Plot( state=0|1 ) )

**説明:** あてはめ分布の分位点プロット(QQプロット)の表示/非表示を切り替える。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Distribution( Column( :Y ) );
obj << Fit Gamma( QQ Plot( 1 ) );

```

#### Quantile Profiler

**構文:** obj << Fit Distribution Name( Quantile Profiler( state=0|1 ) ); 

obj << ( Fit Handle[number] << Quantile Profiler( state=0|1 ) )

**説明:** あてはめた分布に関して、分位点関数の予測プロファイルの表示/非表示を切り替える。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :CO ) );
obj << Fit Lognormal( Quantile Profiler( 1 ) );

```

#### Remove Fit

**構文:** obj << (Fit Handle[number] << Remove Fit )

**説明:** 指定された分布のあてはめとJSLオブジェクトを削除する。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :CO ) );
obj << Fit Weibull;
obj << Fit Lognormal;
Wait( 1 );
obj << (Fit Handle[1] << Remove Fit);

```

#### Save Density Formula

**構文:** obj << Fit Distribution Name( Save Density Formula ) ; 

obj << ( Fit Handle[number] << Save Density Formula )

**説明:** あてはめた分布の密度関数の列をデータテーブルに保存する。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :CO ) );
obj << Fit Lognormal( Save Density Formula );

```

#### Save Distribution Formula

**構文:** obj << Fit Distribution Name( Save Distribution Formula ) ; 

obj << ( Fit Handle[number] << Save Distribution Formula )

**説明:** あてはめた分布の累積分布関数の列をデータテーブルに保存する。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :CO ) );
obj << Fit Lognormal( Save Distribution Formula );

```

#### Save Simulation Formula

**構文:** obj << Fit Distribution Name( Save Simulation Formula ) ; 

obj << ( Fit Handle[number] << Save Simulation Formula )

**説明:** あてはめた分布の乱数を生成する計算式の列をデータテーブルに保存する。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :CO ) );
obj << Fit Lognormal( Save Simulation Formula );

```

#### Save Transformed

**構文:** obj << Fit Distribution Name( Save Transformed ); 

obj << ( Fit Handle[number] << Save Transformed )

**説明:** SHASH分布の変換式の列をデータテーブルに保存する。この変換は、元のデータを正規分布に近付けるための変換である。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :CO ) );
obj << Fit Shash( Save Transformed );

```

## Distribution Process Capability

### 項目のメッセージ

#### Color Out of Spec Values

**構文:** obj << Color Out of Spec Values

**説明:** データテーブルにおいて、仕様限界外となっている値のセルに色を付ける。下側仕様限界(LSL)より小さい値のセルは赤で、上側仕様限界(USL)より大きい値のセルは青で色付けされる。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :OZONE ) );
obj << Process Capability(
	LSL( 0.12 ),
	Target( 0.18 ),
	USL( 0.24 ),
	Color Out of Spec Values
);

```

#### Save Distribution as a Column Property

**構文:** obj << Process Capability( Save Distribution as a Column Property )

**説明:** 工程能力で使われている確率分布の種類を、元のデータテーブルの列の「工程能力分布」列プロパティに保存する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :OZONE ) );
obj << Process Capability(
	LSL( 0.03 ),
	Target( 0.15 ),
	USL( 0.27 ),
	Dist( Lognormal ),
	Save Distribution as a Column Property
);

```

#### Save In Spec Indicator Formula

**構文:** obj << Save In Spec Indicator Formula

**説明:** 行が仕様限界内にあるかどうかを示す値を求める計算式の列をデータテーブルに保存する。。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :OZONE ) );
obj << Process Capability(
	LSL( 0.12 ),
	Target( 0.18 ),
	USL( 0.24 ),
	Save In Spec Indicator Formula
);

```

#### Save Spec Limits and Distribution to Column Properties without Report

**構文:** obj << Fit Distribution Name( Process Capability(Save Spec Limits and Distribution to Column Properties without Report))

**説明:** 工程能力レポートは表示しないで、あてはめた確率分布から求められた仕様限界と、その確率分布を元のデータテーブルの列に列プロパティとして保存する。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :OZONE ) );
obj << Fit Lognormal(
	Process Capability(
		Set Sigma Multiplier for Quantile Spec Limits( 4 ),
		Save Spec Limits and Distribution to Column Properties without Report
	)
);

```

#### Save Spec Limits as a Column Property

**構文:** obj << Fit Distribution Name( Process Capability( Save Spec Limits as a Column Property )); 

 obj << Process Capability( Save Spec Limits as a Column Property )

**説明:** 元のデータテーブルの列に、列プロパティとして仕様限界を保存する。

**JMP追加されたバージョン:** 15

**例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :OZONE ) );
obj << Fit Lognormal(
	Process Capability(
		LSL( 0.03 ),
		Target( 0.15 ),
		USL( 0.27 ),
		Save Spec Limits as a Column Property
	)
);

```

**例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :OZONE ) );
obj << Process Capability(
	LSL( 0.03 ),
	Target( 0.15 ),
	USL( 0.27 ),
	Save Spec Limits as a Column Property
);

```

#### Set Probabilities for Quantile Spec Limits

**構文:** obj << Fit Distribution Name( Process Capability(Set Probabilties for Quantile Spec Limits( LSL Prob(p1), Target Prob(p2), USL Prob(p3)))); 

 obj << Process Capability(Set Probabilties for Quantile Spec Limits( LSL Prob(p1), Target Prob(p2), USL Prob(p3)))

**説明:** 仕様限界の計算に用いる、あてはめた分布の分位点の累積確率を設定する。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :OZONE ) );
obj << Fit Lognormal(
	Process Capability(
		Set Probabilities for Quantile Spec Limits(
			LSL Prob( .0001 ),
			Target Prob( .5 ),
			USL Prob( .9999 )
		)
	)
);

```

#### Set Sigma Multiplier for Quantile Spec Limits

**構文:** obj << Fit Distribution Name( Process Capability(Set Sigma Multiplier for Quantile Spec Limits(K, <sided=1|2>))); 

 obj << Process Capability(Set Sigma Multiplier for Quantile Spec Limits(K, <sided=1|2>))

**説明:** 仕様限界の計算に用いる、シグマ乗数のKを設定する。オプションのsided引数には、LSLのみの場合は 1、USLのみの場合は2に相当する。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :OZONE ) );
obj << Fit Lognormal(
	Process Capability( Set Sigma Multiplier for Quantile Spec Limits( 4 ) )
);

```

## Distribution Summary Statistics

### 項目のメッセージ

#### Customize Summary Statistics

**構文:** obj << Customize Summary Statistics(statistic1( state=0|1 ), statistic2( state=0|1 ), ..., statisticN( state=0|1 ), <Set Trimmed Mean Percent(number)>, <Set Alpha Level(number)>)

**説明:** 「要約統計量」レポートに表示される要約統計量をカスタマイズする。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Distribution( Column( :Height ) );
obj << Customize Summary Statistics( N( 0 ), Variance( 1 ), Skewness( 1 ) );

```

#### Show All Modes

**構文:** obj << Customize Summary Statistics( Show all Modes( state=0|1 ))

**説明:** 「要約統計量」レポートにおいて、すべての最頻値の表示/非表示を切り替える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Distribution( Column( :Height ) );
obj << Customize Summary Statistics( Mode( 1 ), Show All Modes( 1 ) );

```

## Multiple Response Distribution

### 項目のメッセージ

#### Apply Preset

**構文:** Apply Preset( preset ); Apply Preset( source, label, <Folder( folder {, folder2, ...} )> )

**説明:** 作成されたプリセットをオブジェクトに適用する。保存された設定に合わせてオプションとカスタマイズが更新される。

**JMP追加されたバージョン:** 18

**Anonymous preset**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) ),
	Nominal Distribution( Column( :age ), Mosaic Plot( 1 ) )
);
preset = obj[1] << New Preset();
dt2 = Open( "$SAMPLE_DATA/Aircraft Incidents.jmp" );
obj2 = dt2 << Distribution(
	Nominal Distribution( Column( :Aircraft Damage ) ),
	Continuous Distribution( Column( :Total Minor Injuries ) )
);
Wait( 1 );
obj2[2] << Apply Preset( preset );

```

**Search by name**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ) ),
	Nominal Distribution( Column( :age ) )
);
Wait( 1 );
obj[1] << Apply Preset( "Sample Presets", "Check Normality" );

```

#### Axes on Left

**構文:** obj << Axes on Left( state=0|1 )

**説明:** 軸をグラフの左側に移動する。横方向に表示されるヒスログラムの度数、確率、密度、および、横方向に表示される正規分位点プロットにこのオプションは影響する。

**名義変数の例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Nominal Distribution( Column( :Age ), Horizontal Layout( 1 ), Count Axis( 1 ) )
);
obj << Axes on Left( 1 );

```

**多重応答の例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution(
	Multiple Response Distribution(
		Column( :Brush Delimited ),
		Horizontal Layout( 1 ),
		Count Axis( 1 )
	)
);
obj << Axes on Left( 1 );

```

#### Confidence Interval

**構文:** obj << Confidence Interval( "0.90"|"0.95"|"0.99"|"その他..." )

**説明:** 割合のスコア信頼区間を計算する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Confidence Interval( 0.95 );

```

#### Count Axis

**構文:** obj << Count Axis( state=0|1 )

**説明:** ヒストグラムの度数軸の表示/非表示を切り替える。

**名義変数の例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Count Axis( 1 );

```

**多重応答の例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );
obj << Count Axis( 1 );

```

#### Density Axis

**構文:** obj << Density Axis( state=0|1 )

**説明:** ヒストグラムで密度曲線のための密度軸の表示/非表示を切り替える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Density Axis( 1 );

```

#### Frequencies

**構文:** obj << Frequencies( state=0|1 )

**説明:** 度数と割合のレポートの表示/非表示を切り替える。このレポートには、水準ごとに、度数と割合が表示されている。 デフォルトではオン。

**名義変数の例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
Wait( 1 );
obj << Frequencies( 0 );

```

**多重応答の例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );
Wait( 1 );
obj << Frequencies( 0 );

```

#### Histogram

**構文:** obj << Histogram( state=0|1 )

**説明:** ヒストグラムの表示/非表示を切り替える。 デフォルトではオン。

**名義変数の例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
Wait( 1 );
obj << Histogram( 0 );

```

**多重応答の例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );
Wait( 1 );
obj << Histogram( 0 );

```

#### Histogram Color

**構文:** obj << Histogram Color( color )

**説明:** ヒストグラムの棒の色を変更する。

**名義変数の例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Histogram Color( "Red" );

```

**多重応答の例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );
obj << Histogram Color( "Blue" );

```

#### Horizontal Layout

**構文:** obj << Horizontal Layout( state=0|1 )

**説明:** ヒストグラムとレポートの向きを横方向に変更する。

**名義変数の例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Horizontal Layout( 1 );

```

**多重応答の例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );
obj << Horizontal Layout( 1 );

```

#### Mosaic Plot

**構文:** obj << Mosaic Plot( state=0|1 )

**説明:** 名義尺度または順序尺度の変数に対して、モザイク図の表示/非表示を切り替える。モザイク図は、各長方形がそのグループの度数に比例している、縦に積み重ねた棒グラフである。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Mosaic Plot( 1 );

```

#### New JSL Preset

**構文:** New JSL Preset( preset )

**説明:** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ) ),
	Nominal Distribution( Column( :age ) )
);
preset = obj[1] << New JSL Preset(
	Continuous Distribution( Column( :A ), Normal Quantile Plot( 1 ) )
);
Wait( 1 );
obj[1] << Apply Preset( preset );

```

#### New Preset

**構文:** obj = New Preset()

**説明:** オブジェクトに適用されているオプションとカスタマイズをプリセットとしてまとめる。このオブジェクトをApply Presetに渡すことで、同じ種類のオブジェクトに設定をコピーすることができる。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) ),
	Nominal Distribution( Column( :age ), Mosaic Plot( 1 ) )
);
preset = obj[1] << New Preset();

```

#### Order By

**構文:** obj << Order By( "Default"|"Count Descending"|"Count Ascending" )

**説明:** ヒストグラム、モザイク図、度数レポートを、度数の昇順または降順で並べる。また、デフォルトの順序に戻すことも可能。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Order By( "Count Descending" );

```

#### Prob Axis

**構文:** obj << Prob Axis( state=0|1 )

**説明:** ヒストグラムで割合(確率)の軸の表示/非表示を切り替える。

**名義変数の例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Prob Axis( 1 );

```

**多重応答の例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );
obj << Prob Axis( 1 );

```

#### Render Preset

**構文:** Render Preset( preset )

**説明:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ) ),
	Nominal Distribution( Column( :age ) )
);
obj[1] << Render Preset(
	Expr(
		Continuous Distribution( Column( :A ), Normal Quantile Plot( 1 ) )
	)
);

```

#### Save

**構文:** obj << Save( "水準番号"|"値の順序"|"スクリプトをログに保存" )

**説明:** 水準番号をデータテーブルの新しい列に保存、またはスクリプトをログに保存する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Save( "Level Numbers" );

```

#### Separate Bars

**構文:** obj << Separate Bars( state=0|1 )

**説明:** ヒストグラムの棒と棒の間を離す。このオプションはカテゴリカル変数の場合のみ利用可能。

**名義変数の例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Separate Bars( 1 );

```

**多重応答の例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );
obj << Separate Bars( 1 );

```

#### Show Counts

**構文:** obj << Show Counts( state=0|1 )

**説明:** ヒストグラムにおいて、棒の度数の表示/非表示を切り替える。これは、ヒストグラムの各棒で表される集合の度数を示す。

**名義変数の例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Show Counts( 1 );

```

**多重応答の例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );
obj << Show Counts( 1 );

```

#### Show Percents

**構文:** obj << Show Percents( state=0|1 )

**説明:** ヒストグラムにおいて、棒の割合の表示/非表示を切り替える。これは、ヒストグラムの各棒で表される集合の全体に対する割合を示す。

**名義変数の例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Show Percents( 1 );

```

**多重応答の例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );
obj << Show Percents( 1 );

```

#### Std Error Bars

**構文:** obj << Std Error Bars( state=0|1 )

**説明:** ヒストグラムの各棒について、標準誤差バーの表示/非表示を切り替える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Std Error Bars( 1 );

```

#### Test Probabilities

**構文:** obj << Test Probabilities( Test( Hypothesized|Greater than|Less than ), Fix( Hypothesized|Omitted ), p1, <f>, p2, <f>, p3, <f>, etc. )

**説明:** カテゴリカルな変数の母割合に関して、指定された割合（p1、p2、p3など）を帰無仮説とした検定を行う。カテゴリカルな変数が2水準の場合には、Testオプションにて、カイ2乗適合度検定を行うか、片側の二項検定を行うかを指定できる。3水準以上の場合にはFixオプションにて、数値を指定しない仮説値をどのように設定するかを指定する。fはオプションの引数で、その前に指定されている水準を固定しているものとして計算を行う。

**2水準に対する両側検定の例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :sex ) ) );
obj << Test Probabilities( Test( Hypothesized ), 0.4, f, 0.6, f );

```

**2水準に対する片側検定の例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :sex ) ) );
obj << Test Probabilities( Test( Less than ), 0.5, f, 0.5 );

```

**多水準に対する検定例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :age ) ) );
obj << Test Probabilities(
	Test( Hypothesized ),
	0.8,
	0.04375,
	0.075,
	0.04375,
	0.01875,
	0.01875
);

```

#### Vertical

**構文:** obj << Vertical( state=0|1 )

**説明:** ヒストグラム、箱ひげ図、分位点プロットの向きを縦方向に変更する。 デフォルトではオン。

**名義変数の例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Vertical( 0 );

```

**多重応答の例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );
obj << Vertical( 0 );

```

## Nominal Distribution

### 項目のメッセージ

#### Apply Preset

**構文:** Apply Preset( preset ); Apply Preset( source, label, <Folder( folder {, folder2, ...} )> )

**説明:** 作成されたプリセットをオブジェクトに適用する。保存された設定に合わせてオプションとカスタマイズが更新される。

**JMP追加されたバージョン:** 18

**Anonymous preset**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) ),
	Nominal Distribution( Column( :age ), Mosaic Plot( 1 ) )
);
preset = obj[1] << New Preset();
dt2 = Open( "$SAMPLE_DATA/Aircraft Incidents.jmp" );
obj2 = dt2 << Distribution(
	Nominal Distribution( Column( :Aircraft Damage ) ),
	Continuous Distribution( Column( :Total Minor Injuries ) )
);
Wait( 1 );
obj2[2] << Apply Preset( preset );

```

**Search by name**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ) ),
	Nominal Distribution( Column( :age ) )
);
Wait( 1 );
obj[1] << Apply Preset( "Sample Presets", "Check Normality" );

```

#### Axes on Left

**構文:** obj << Axes on Left( state=0|1 )

**説明:** 軸をグラフの左側に移動する。横方向に表示されるヒスログラムの度数、確率、密度、および、横方向に表示される正規分位点プロットにこのオプションは影響する。

**名義変数の例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Nominal Distribution( Column( :Age ), Horizontal Layout( 1 ), Count Axis( 1 ) )
);
obj << Axes on Left( 1 );

```

**多重応答の例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution(
	Multiple Response Distribution(
		Column( :Brush Delimited ),
		Horizontal Layout( 1 ),
		Count Axis( 1 )
	)
);
obj << Axes on Left( 1 );

```

#### Confidence Interval

**構文:** obj << Confidence Interval( "0.90"|"0.95"|"0.99"|"その他..." )

**説明:** 割合のスコア信頼区間を計算する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Confidence Interval( 0.95 );

```

#### Count Axis

**構文:** obj << Count Axis( state=0|1 )

**説明:** ヒストグラムの度数軸の表示/非表示を切り替える。

**名義変数の例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Count Axis( 1 );

```

**多重応答の例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );
obj << Count Axis( 1 );

```

#### Density Axis

**構文:** obj << Density Axis( state=0|1 )

**説明:** ヒストグラムで密度曲線のための密度軸の表示/非表示を切り替える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Density Axis( 1 );

```

#### Frequencies

**構文:** obj << Frequencies( state=0|1 )

**説明:** 度数と割合のレポートの表示/非表示を切り替える。このレポートには、水準ごとに、度数と割合が表示されている。 デフォルトではオン。

**名義変数の例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
Wait( 1 );
obj << Frequencies( 0 );

```

**多重応答の例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );
Wait( 1 );
obj << Frequencies( 0 );

```

#### Histogram

**構文:** obj << Histogram( state=0|1 )

**説明:** ヒストグラムの表示/非表示を切り替える。 デフォルトではオン。

**名義変数の例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
Wait( 1 );
obj << Histogram( 0 );

```

**多重応答の例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );
Wait( 1 );
obj << Histogram( 0 );

```

#### Histogram Color

**構文:** obj << Histogram Color( color )

**説明:** ヒストグラムの棒の色を変更する。

**名義変数の例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Histogram Color( "Red" );

```

**多重応答の例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );
obj << Histogram Color( "Blue" );

```

#### Horizontal Layout

**構文:** obj << Horizontal Layout( state=0|1 )

**説明:** ヒストグラムとレポートの向きを横方向に変更する。

**名義変数の例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Horizontal Layout( 1 );

```

**多重応答の例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );
obj << Horizontal Layout( 1 );

```

#### Mosaic Plot

**構文:** obj << Mosaic Plot( state=0|1 )

**説明:** 名義尺度または順序尺度の変数に対して、モザイク図の表示/非表示を切り替える。モザイク図は、各長方形がそのグループの度数に比例している、縦に積み重ねた棒グラフである。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Mosaic Plot( 1 );

```

#### New JSL Preset

**構文:** New JSL Preset( preset )

**説明:** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ) ),
	Nominal Distribution( Column( :age ) )
);
preset = obj[1] << New JSL Preset(
	Continuous Distribution( Column( :A ), Normal Quantile Plot( 1 ) )
);
Wait( 1 );
obj[1] << Apply Preset( preset );

```

#### New Preset

**構文:** obj = New Preset()

**説明:** オブジェクトに適用されているオプションとカスタマイズをプリセットとしてまとめる。このオブジェクトをApply Presetに渡すことで、同じ種類のオブジェクトに設定をコピーすることができる。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) ),
	Nominal Distribution( Column( :age ), Mosaic Plot( 1 ) )
);
preset = obj[1] << New Preset();

```

#### Order By

**構文:** obj << Order By( "Default"|"Count Descending"|"Count Ascending" )

**説明:** ヒストグラム、モザイク図、度数レポートを、度数の昇順または降順で並べる。また、デフォルトの順序に戻すことも可能。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Order By( "Count Descending" );

```

#### Prob Axis

**構文:** obj << Prob Axis( state=0|1 )

**説明:** ヒストグラムで割合(確率)の軸の表示/非表示を切り替える。

**名義変数の例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Prob Axis( 1 );

```

**多重応答の例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );
obj << Prob Axis( 1 );

```

#### Render Preset

**構文:** Render Preset( preset )

**説明:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ) ),
	Nominal Distribution( Column( :age ) )
);
obj[1] << Render Preset(
	Expr(
		Continuous Distribution( Column( :A ), Normal Quantile Plot( 1 ) )
	)
);

```

#### Save

**構文:** obj << Save( "水準番号"|"値の順序"|"スクリプトをログに保存" )

**説明:** 水準番号をデータテーブルの新しい列に保存、またはスクリプトをログに保存する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Save( "Level Numbers" );

```

#### Separate Bars

**構文:** obj << Separate Bars( state=0|1 )

**説明:** ヒストグラムの棒と棒の間を離す。このオプションはカテゴリカル変数の場合のみ利用可能。

**名義変数の例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Separate Bars( 1 );

```

**多重応答の例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );
obj << Separate Bars( 1 );

```

#### Show Counts

**構文:** obj << Show Counts( state=0|1 )

**説明:** ヒストグラムにおいて、棒の度数の表示/非表示を切り替える。これは、ヒストグラムの各棒で表される集合の度数を示す。

**名義変数の例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Show Counts( 1 );

```

**多重応答の例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );
obj << Show Counts( 1 );

```

#### Show Percents

**構文:** obj << Show Percents( state=0|1 )

**説明:** ヒストグラムにおいて、棒の割合の表示/非表示を切り替える。これは、ヒストグラムの各棒で表される集合の全体に対する割合を示す。

**名義変数の例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Show Percents( 1 );

```

**多重応答の例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );
obj << Show Percents( 1 );

```

#### Std Error Bars

**構文:** obj << Std Error Bars( state=0|1 )

**説明:** ヒストグラムの各棒について、標準誤差バーの表示/非表示を切り替える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Std Error Bars( 1 );

```

#### Test Probabilities

**構文:** obj << Test Probabilities( Test( Hypothesized|Greater than|Less than ), Fix( Hypothesized|Omitted ), p1, <f>, p2, <f>, p3, <f>, etc. )

**説明:** カテゴリカルな変数の母割合に関して、指定された割合（p1、p2、p3など）を帰無仮説とした検定を行う。カテゴリカルな変数が2水準の場合には、Testオプションにて、カイ2乗適合度検定を行うか、片側の二項検定を行うかを指定できる。3水準以上の場合にはFixオプションにて、数値を指定しない仮説値をどのように設定するかを指定する。fはオプションの引数で、その前に指定されている水準を固定しているものとして計算を行う。

**2水準に対する両側検定の例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :sex ) ) );
obj << Test Probabilities( Test( Hypothesized ), 0.4, f, 0.6, f );

```

**2水準に対する片側検定の例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :sex ) ) );
obj << Test Probabilities( Test( Less than ), 0.5, f, 0.5 );

```

**多水準に対する検定例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :age ) ) );
obj << Test Probabilities(
	Test( Hypothesized ),
	0.8,
	0.04375,
	0.075,
	0.04375,
	0.01875,
	0.01875
);

```

#### Vertical

**構文:** obj << Vertical( state=0|1 )

**説明:** ヒストグラム、箱ひげ図、分位点プロットの向きを縦方向に変更する。 デフォルトではオン。

**名義変数の例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Vertical( 0 );

```

**多重応答の例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );
obj << Vertical( 0 );

```

## Test Mean

### 項目のメッセージ

#### PValue animation

**構文:** obj << Test Mean( PValue Animation )

**説明:** 平均の変化に応じてp値がどのように変化するかをアニメーションで表示する別ウィンドウを開く。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Distribution( Column( :Height ) );
obj << Test Mean( 60, PValue Animation );

```

#### Power animation

**構文:** obj << Test Mean( Power Animation )

**説明:** 検出力のアニメーションを別ウィンドウで開く。このアニメーションは、平均の変化に応じて検出力がどのように変化するかを描いたものである。片側検定か両側検定かの指定も行える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Distribution( Column( :Height ) );
obj << Test Mean( 60, Power Animation );

```

## Tolerance Interval

### 項目のメッセージ

#### Save Distribution as a Column Property

**構文:** obj << Tolerance Interval( Save Distribution as a Column Property )

**説明:** 許容区間で仮定されている確率分布の種類を、元のデータテーブルの列の「許容区間分布」列プロパティに保存する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Distribution( Column( :Height ) );
obj << Tolerance Interval(
	Alpha( 0.95 ),
	Proportion( 0.90 ),
	Lognormal,
	Save Distribution as a Column Property
);

```

#### Save to Spec Limits Column Property

**構文:** obj << Save to Spec Limits Column Property( Alpha(number), Proportion(number), <Lower | Upper>, <Nonparametric>, <Save to Spec Limits Column Property> )

**説明:** 許容区間を、データテーブルの「仕様限界」列プロパティに保存する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Tolerance Interval(
	Alpha( 0.95 ),
	Proportion( 0.85 ),
	Save to Spec Limits Column Property
);

```

