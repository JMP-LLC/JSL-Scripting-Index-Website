# Process Capability



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

### Apply Preset

**構文:** Apply Preset( preset ); Apply Preset( source, label, <Folder( folder {, folder2, ...} )> )

**説明:** 作成されたプリセットをオブジェクトに適用する。保存された設定に合わせてオプションとカスタマイズが更新される。

**JMP追加されたバージョン:** 18

**フォルダ内で検索**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

**匿名のプリセット**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();
dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );
Wait( 1 );
obj2 << Apply Preset( preset );

```

**名前で検索**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

### Automatic Recalc

**構文:** obj << Automatic Recalc( state=0|1 )

**説明:** データの除外や変更があった場合に分析を自動的にやり直す。Automatic Recalcオプションがオンになっている場合で、データの除外や変更が再計算の前に確実に適用されるようにするには、Wait(0)コマンドを使用すること。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
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

### Copy ByGroup Script

**構文:** obj << Copy ByGroup Script

**説明:** この分析を再現するJSLスクリプトを生成し、クリップボードにコピーする。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	),
	By( _bycol )
);
obj[1] << Copy ByGroup Script;

```

### Copy Script

**構文:** obj << Copy Script

**説明:** この分析を再現するJSLスクリプトを生成し、クリップボードにコピーする。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
obj << Copy Script;

```

### Data Table Window

**構文:** obj << Data Table Window

**説明:** この分析に使用したデータテーブルのウィンドウを手前に表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
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
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	),
	By( _bycol )
);
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
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

### Get Data Table

**構文:** obj << Get Data Table

**説明:** データテーブルへの参照を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
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
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**構文:** obj << Get Script With Data Table

**説明:** この分析を再現するスクリプト(JSL)をデータテーブルへの参照も含めて生成し、それを式として戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**構文:** obj << Get Timing

**説明:** プラットフォームの起動にかかった時間を取得する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
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

### New JSL Preset

**構文:** New JSL Preset( preset )

**説明:** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
preset = obj << New JSL Preset( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) );
Wait( 1 );
obj << Apply Preset( preset );

```

### New Preset

**構文:** obj = New Preset()

**説明:** オブジェクトに適用されているオプションとカスタマイズをプリセットとしてまとめる。このオブジェクトをApply Presetに渡すことで、同じ種類のオブジェクトに設定をコピーすることができる。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

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
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**構文:** obj << Redo ByGroup Analysis

**説明:** 同じ分析をやり直し新しいウィンドウに表示する。データが変更されていると分析結果は異なる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	),
	By( _bycol )
);
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**構文:** obj << Relaunch Analysis

**説明:** プラットフォームの起動ウィンドウを開き、レポートを作成した時の設定を表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**構文:** obj << Relaunch ByGroup

**説明:** プラットフォームの起動ウィンドウを開き、レポートを作成した時の設定を表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	),
	By( _bycol )
);
obj[1] << Relaunch ByGroup;

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

### Render Preset

**構文:** Render Preset( preset )

**説明:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

### Report

**構文:** obj << Report;

Report( obj )

**説明:** レポートオブジェクトへの参照を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**構文:** obj << Report View( "完全"|"要約" )

**説明:** レポートビューは、プラットフォームレポートの詳細を表示するかどうかを決定する。Fullはすべての詳細を表示し、Summaryはプラットフォームにより限定されたものだけを表示する。 動作をカスタマイズするため、各ディスプレイボックスは<<Set Summary Behaviorメッセージをサポートする。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**構文:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**説明:** 分析を再現するためのJSLスクリプトを作成し、データテーブルにテーブルプロパティとして保存する。スクリプトの名前を指定できる。Append Suffixオプションは、スクリプト名に数字の接尾辞を追加する。これにより、同名のスクリプトが存在していても区別できる。Promptオプションは、ユーザにスクリプト名の指定を促す。Replaceオプションは、同名の既存のスクリプトを置き換える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**構文:** obj << Save ByGroup Script to Journal

**説明:** この分析を再現するJSLスクリプトを生成し、ジャーナルにそのスクリプトのボタンを追加する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**構文:** obj << Save ByGroup Script to Script Window

**説明:** この分析を再現するJSLスクリプトを生成し、現在のスクリプトウィンドウに表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**構文:** obj << Save Script for All Objects

**説明:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**構文:** obj << Save Script for All Objects To Data Table( <name> )

**説明:** すべてのレポートオブジェクトを再現するスクリプトを現在のデータテーブルに保存する。このオプションは、ウィンドウ内にレポートが複数ある場合に便利。作成されるスクリプトの名前は、引用符で囲んで指定しない限り、1つ目のプラットフォーム名となる。

**例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table;

```

**例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**構文:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**説明:** この分析を再現するJSLスクリプトを生成し、データテーブルのテーブルプロパティとして保存する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**構文:** obj << Save Script to Journal

**説明:** この分析を再現するJSLスクリプトを生成し、ジャーナルにそのスクリプトのボタンを追加する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
obj << Save Script to Journal;

```

### Save Script to Report

**構文:** obj << Save Script to Report

**説明:** この分析を再現するJSLスクリプトを生成し、レポートウィンドウに表示する。分析手順の記録を結果と一緒に残せる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
obj << Save Script to Report;

```

### Save Script to Script Window

**構文:** obj << Save Script to Script Window

**説明:** この分析を再現するJSLスクリプトを生成し、現在のスクリプトウィンドウに表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
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
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
obj << Title( "My Platform" );

```

### Top Report

**構文:** obj << Top Report

**説明:** レポート内のルートノードへの参照を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
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

**構文:** obj = Process Capability(...Window View( "Visible"|"Invisible"|"Private" )...)

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

**構文:** obj = Process Capability(...<By( column(s) )>...)

**説明:** 指定された列の各水準に対して、個別に分析を実行する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	),
	By( _bycol )
);

```

### Grouping

**構文:** obj = Process Capability( Process Variables( columns), Grouping( columns) )

**説明:** 列をグループ変数として指定する。

**例 1**

```jsl

Names Default To Here( 1 );

dtLimits = Open( "$SAMPLE_DATA/Cheese Manufacturing Limits.jmp" );
dt = Open( "$SAMPLE_DATA/Cheese Manufacturing Data.jmp" );
dt << Process Capability(
	Process Variables( :pH, :Salt Concentration, :Moisture Content ),
	Grouping( :Cheese Type ),
	Spec Limits( Use Limits Table( dtLimits ) ),
	Moving Range Method( Average of Moving Ranges ),
	Goal Plot( 1 ),
	Capability Index Plot( 1 ),
	Process Performance Plot( 0 )
);

```

**例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables( :NPN1[:lot_id], :PNP1[:lot_id], :PNP2[:lot_id] ),
	Grouping( :site )
);

```

### Process Variables

**構文:** obj = Process Capability(...Process Variables( column(s) )...)

**説明:** 分析対象の工程データを含んでいる列を指定する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);

```

## 関連するコンストラクター

### Process Capability

**構文:** Process Capability( Process Variables (columns), < Spec Limits() > )

**説明:** 各変数の工程能力分析を行い、複数の工程変数における工程能力を一度に分析するのに役立つグラフを作成する。仕様限界も定義できる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);

```

## 項目のメッセージ

### AIAG (Ppk) Labeling

**構文:** obj << "AIAG (Ppk) Labeling"n( state=0|1 )

**説明:** 工程能力指数のラベルをAIAG形式とし、「Cp」ではなく「Pp」というラベルに変更する。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables( :NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer] )
);
obj << Individual Detail Reports( 1 );
Wait( 1 );
obj << "AIAG (Ppk) Labeling"n( 0 );

```

### Capability Box Plots

**構文:** obj << Capability Box Plots( state=0|1 )

**説明:** 並列箱ひげ図の表示/非表示を切り替える。この箱ひげ図の値は、各工程のデータ値を目標値で中心化し、仕様限界で尺度化している。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	),
	Capability Box Plots( 0 )
);
Wait( 1 );
obj << Capability Box Plots( 1 );

```

### Capability Index Plot

**構文:** obj << Capability Index Plot( state=0|1, <plot options> )

**説明:** 各工程の全体Ppkをプロットしたグラフの表示/非表示を切り替える。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:Process 1 & Dist( Lognormal ), :Process 2 & Dist( Lognormal ),
		:Process 3 & Dist( Weibull ), :Process 4 & Dist( Lognormal ),
		:Process 5 & Dist( Weibull ), :Process 6 & Dist( Johnson ), :Process 7
	),
	Capability Index Plot( 0 ),
	Goal Plot( 0 )
);
Wait( 1 );
obj << Capability Index Plot( 1 );

```

### Color Out of Spec Values

**構文:** obj << Color Out of Spec Values( state=0|1 )

**説明:** データテーブルにおいて、仕様限界外となっている値のセルに色を付ける。下側仕様限界(LSL)より小さい値のセルは赤で、上側仕様限界(USL)より大きい値のセルは青で色付けされる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Process Capability(
	Process Variables( :OZONE, :CO, :SO2, :NO ),
	Spec Limits( Import Spec Limits( "$SAMPLE_DATA/CitySpecLimits.jmp" ) )
);
obj << Color Out of Spec Values( 1 );

```

### Get Limits

**構文:** obj = Process Capability(...Spec Limits(Get Limits( data table ) )...)

**説明:** 仕様限界のデータテーブルから仕様限界をロードする。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt2 = Open( "$SAMPLE_DATA/CitySpecLimits.jmp" );
obj = dt << Process Capability(
	Process Variables( :OZONE, :CO, :SO2, :NO ),
	Spec Limits( Get Limits( dt2 ) )
);

```

### Goal Plot

**構文:** obj << Goal Plot( state=0|1, <plot options> )

**説明:** ゴールプロットの表示/非表示を切り替える。ゴールプロットは、仕様限界で正規化した平均のシフトをX座標とし、仕様限界で正規化した標準偏差をY座標として、各工程をプロットしたグラフである。ゴールの外側にある点は、指定したPpk (Cpk)を下回っている工程。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	),
	Goal Plot( 0 )
);
Wait( 1 );
obj << Goal Plot( 1 );

```

### Individual Detail Reports

**構文:** obj << Individual Detail Reports( state=0|1 )

**説明:** 各工程に対して個別に表示される、詳細な工程能力レポートの表示/非表示を切り替える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
obj << Individual Detail Reports( 1 );

```

### Individual Detail Reports Cutoff

**構文:** obj << Individual Detail Reports Cutoff( number=1 )

**説明:** 工程変数の個数が指定された閾値以下の場合、「各列の詳細レポート」を表示し、ゴールプロットと工程能力箱ひげ図を非表示にする。 デフォルトの値は"1"。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer] & Between, :PNP1[:lot_id, :wafer] & Between,
		:PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
obj << Individual Detail Reports Cutoff( 7 );

```

### Make Goal Plot Summary Table

**構文:** obj << Make Goal Plot Summary Table

**説明:** ゴールプロットに描画される点の座標を含む新しいデータテーブルを作成する。これらには、群内シグマおよび全体シグマの両方から計算された座標が含まれる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
obj << Make Goal Plot Summary Table;

```

### Order By

**構文:** obj << Order By( "最初の表示順序"|"最初の表示順序の逆順"|"群内シグマCpkの昇順"|"群内シグマCpkの降順"|"全体シグマPpkの昇順"|"全体シグマPpkの降順" )

**説明:** 箱ひげ図、要約レポート、および各列の詳細レポートを指定された順序で並べ替える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
obj << Within Sigma Summary Report( 1 );
Wait( 1 );
obj << Order By( "Within Sigma Cpk Ascending" );

```

### Overall Sigma Normalized Box Plots

**構文:** obj << Overall Sigma Normalized Box Plots( state=0|1 )

**説明:** 各工程の並列箱ひげ図の表示/非表示を切り替える。この箱ひげ図の値は、各工程のデータ値を平均で中心化し、群内シグマで割って計算される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
Wait( 0 );
obj << Overall Sigma Normalized Box Plots( 1 );

```

### Overall Sigma Summary Report

**構文:** obj << Overall Sigma Summary Report( state=0|1 )

**説明:** 工程能力指数の要約レポートの表示/非表示を切り替える。工程能力指数は、全体シグマを使って計算される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
Wait( 0 );
obj << Overall Sigma Summary Report( 1 );

```

### Process Performance Plot

**構文:** obj << Process Performance Plot( state=0|1, <plot options> )

**説明:** 安定性に対して全体工程性能Ppkをプロットした4象限グラフの表示/非表示を切り替える。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	),
	Capability Box Plots( 0 ),
	Goal Plot( 0 ),
	Capability Index Plot( 0 ),

);
obj << Process Performance Plot( 1 );

```

### Save Distributions as Column Properties

**構文:** obj << Save Distributions as Column Properties

**説明:** 分析に含まれる各工程変数に対し、工程能力の計算に使う分布を[工程能力分布]列プロパティとして保存する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Process Capability(
	Process Variables( :OZONE & Dist( Johnson ), :CO, :SO2 & Dist( Lognormal ), :NO ),
	Spec Limits( Import Spec Limits( "$SAMPLE_DATA/CitySpecLimits.jmp" ) )
);
obj << Save Distributions as Column Properties;

```

### Save In Spec Indicator Formulas

**構文:** obj << Save In Spec Indicator Formulas

**説明:** 各行が仕様限界内にあるかどうかを示す値を求める計算式の列をデータテーブルに作成する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer] & Between, :PNP1[:lot_id, :wafer] & Between,
		:PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
obj << Save In Spec Indicator Formulas;

```

### Save Spec Limits as Column Properties

**構文:** obj << Save Spec Limits as Column Properties

**説明:** 分析に含まれる各工程変数の列プロパティに仕様限界を保存する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Process Capability(
	Process Variables( :OZONE, :CO, :SO2, :NO ),
	Spec Limits( Import Spec Limits( "$SAMPLE_DATA/CitySpecLimits.jmp" ) )
);
obj << Save Spec Limits as Column Properties;

```

### Save Spec Limits to New Table

**構文:** obj << Save Spec Limits to New Table

**説明:** 各工程変数に関して、仕様限界、工程の重要度、および分布を含む新しいデータテーブルを作成する。このデータテーブルは、縦長形式で、1つの工程変数につき1行を含む。工程の重要度と分布の種類は、該当する場合にのみ保存される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer] & Between, :PNP1[:lot_id, :wafer] & Between,
		:PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
obj << Save Spec Limits to New Table;

```

### Select Out of Spec Values

**構文:** obj << Select Out of Spec Values( state=0|1 )

**説明:** 少なくとも1つの値が仕様限界の外にある行と列をデータテーブルで選択する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Process Capability(
	Process Variables( :OZONE, :CO, :SO2, :NO ),
	Spec Limits( Import Spec Limits( "$SAMPLE_DATA/CitySpecLimits.jmp" ) )
);
obj << Select Out of Spec Values( 1 );

```

### Use Limits Table

**構文:** obj = Process Capability(...Spec Limits(Use Limits Table( data table ) )...)

**説明:** 仕様限界のデータテーブルから仕様限界をロードする。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt2 = Open( "$SAMPLE_DATA/CitySpecLimits.jmp" );
obj = dt << Process Capability(
	Process Variables( :OZONE, :CO, :SO2, :NO ),
	Spec Limits( Use Limits Table( dt2 ) )
);

```

### Within Sigma Normalized Box Plots

**構文:** obj << Within Sigma Normalized Box Plots( state=0|1 )

**説明:** 各工程の並列箱ひげ図の表示/非表示を切り替える。この箱ひげ図の値は、各工程のデータ値を平均で中心化し、群内シグマで割って計算される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
Wait( 0 );
obj << Within Sigma Normalized Box Plots( 1 );

```

### Within Sigma Summary Report

**構文:** obj << Within Sigma Summary Report( state=0|1 )

**説明:** 工程能力指数の要約レポートの表示/非表示を切り替える。工程能力指数は、標準偏差の群内推定値を使って計算される。正規分布を指定した変数のみが対象。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
Wait( 0 );
obj << Within Sigma Summary Report( 1 );

```

### Within or Between-and-Within Sigma Normalized Box Plots

**構文:** obj << "Within or Between-and-Within Sigma Normalized Box Plots"n( state=0|1 )

**説明:** 並列箱ひげ図の表示/非表示を切り替える。この箱ひげ図の値は、各工程のデータ値を平均で中心化し、群内シグマ(「群間＋群内シグマ」を指定した場合は「群間＋群内シグマ」)で割って計算される。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer] & Between, :PNP1[:lot_id, :wafer] & Between,
		:PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
Wait( 0 );
obj << "Within or Between-and-Within Sigma Normalized Box Plots"n( 1 );

```

### Within or Between-and-Within Sigma Summary Report

**構文:** obj << "Within or Between-and-Within Sigma Summary Report"n( state=0|1 )

**説明:** 工程能力指数の要約レポートの表示/非表示を切り替える。工程能力指数は、群内シグマを使って計算されるか、「群間＋群内シグマ」を指定した場合はそれを使って計算される。このオプションは、起動ウィンドウにおいて少なくとも1つの工程に対して[群間＋群内シグマを計算する]を選択した場合のみ利用可能。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer] & Between, :PNP1[:lot_id, :wafer] & Between,
		:PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
Wait( 0 );
obj << "Within or Between-and-Within Sigma Summary Report"n( 1 );

```

## Process Capability Analysis > Process Capability Analysis Comparisons > Process Capability Probability Plots

### 項目のメッセージ

#### Parametric Fit Confidence Limits Shading

**構文:** scrobj << Parametric Fit Confidence Limits Shading( state=0|1 )

**説明:** パラメトリックな推定結果に対する信頼限界の陰影の表示/非表示を切り替える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 & Dist( Lognormal ) ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	Capability Box Plots( 1 ),
	Capability Index Plot( 1 ),
	{(:Process 1 & Dist( Lognormal )) <<
	Process Capability Analysis(
		Compare Distributions(
			1,
			<<Fit Lognormal,
			Probability Plots(
				1,
				Lognormal Probability Plot( Parametric Fit Confidence Limits Shading( 1 ) )
			)
		)
	)}
);
Wait( 1 );
scrobj = (Report( obj )["Process 1(Lognormal) Probability Plot"] << get scriptable object);
scrobj << Parametric Fit Confidence Limits Shading( 0 );

```

#### Parametric Fit Line

**構文:** scrobj << Parametric Fit Line( state=0|1 )

**説明:** パラメトリックな推定結果を示す参照線の表示/非表示を切り替える。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 & Dist( Lognormal ) ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	Capability Box Plots( 1 ),
	Capability Index Plot( 1 ),
	{(:Process 1 & Dist( Lognormal )) <<
	Process Capability Analysis(
		Compare Distributions(
			1,
			<<Fit Lognormal,
			Probability Plots( 1, Lognormal Probability Plot( Parametric Fit Line( 0 ) ) )
		)
	)}
);
Wait( 1 );
scrobj = (Report( obj )["Process 1(Lognormal) Probability Plot"] << get scriptable object);
scrobj << Parametric Fit Line( 1 );

```

#### Simultaneous Empirical Confidence Limits

**構文:** scrobj << Simultaneous Empirical Confidence Limits( state=0|1 )

**説明:** 同時経験的信頼限界の表示/非表示を切り替える。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 & Dist( Lognormal ) ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	Capability Box Plots( 1 ),
	Capability Index Plot( 1 ),
	{(:Process 1 & Dist( Lognormal )) <<
	Process Capability Analysis(
		Compare Distributions(
			1,
			<<Fit Lognormal,
			Probability Plots(
				1,
				Lognormal Probability Plot( Simultaneous Empirical Confidence Limits( 0 ) )
			)
		)
	)}
);
Wait( 1 );
scrobj = (Report( obj )["Process 1(Lognormal) Probability Plot"] << get scriptable object);
scrobj << Simultaneous Empirical Confidence Limits( 1 );

```

#### Simultaneous Empirical Confidence Limits Shading

**構文:** scrobj << Simultaneous Empirical Confidence Limits Shading( state=0|1 )

**説明:** 同時経験的信頼限界を示す陰影の表示/非表示を切り替える。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 & Dist( Lognormal ) ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	Capability Box Plots( 1 ),
	Capability Index Plot( 1 ),
	{(:Process 1 & Dist( Lognormal )) <<
	Process Capability Analysis(
		Compare Distributions(
			1,
			<<Fit Lognormal,
			Probability Plots(
				1,
				Lognormal Probability Plot(
					Simultaneous Empirical Confidence Limits Shading( 0 )
				)
			)
		)
	)}
);
Wait( 1 );
scrobj = (Report( obj )["Process 1(Lognormal) Probability Plot"] << get scriptable object);
scrobj << Simultaneous Empirical Confidence Limits Shading( 1 );

```

## Process Capability Analysis > Process Capability Analysis Comparisons

### 項目のメッセージ

#### Comparison Details

**構文:** scrobj << Comparison Details( state=0|1 )

**説明:** 各確率分布に対するAICc、BIC、(-2)*対数尤度の表示/非表示を切り替える。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 & Dist( Lognormal ) ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	Capability Box Plots( 1 ),
	Capability Index Plot( 1 ),
	{(:Process 1 & Dist( Lognormal )) <<
	Process Capability Analysis(
		Compare Distributions(
			1,
			<<Fit Normal,
			<<Fit Gamma,
			<<Fit Johnson,
			<<Fit Lognormal,
			<<Fit Weibull,
			Comparison Details( 0 )
		)
	)}
);
Wait( 1 );
scrobj = Report( obj )["Compare Distributions"] << Get Scriptable Object;
scrobj << Comparison Details( 1 );

```

#### Comparison Histogram

**構文:** scrobj << Comparison Histogram( state=0|1 )

**説明:** 「分布の比較」において、ヒストグラムの表示/非表示を切り替える。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 & Dist( Lognormal ) ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	Capability Box Plots( 1 ),
	Capability Index Plot( 1 ),
	{(:Process 1 & Dist( Lognormal )) <<
	Process Capability Analysis(
		Compare Distributions(
			1,
			<<Fit Normal,
			<<Fit Gamma,
			<<Fit Johnson,
			<<Fit Lognormal,
			<<Fit Weibull,
			Comparison Histogram( 0 )
		)
	)}
);
Wait( 1 );
scrobj = Report( obj )["Compare Distributions"] << Get Scriptable Object;
scrobj << Comparison Histogram( 1 );

```

#### Fit Beta

**構文:** scrobj << Compare Distributions( 1, <<Fit Beta )

**説明:** 「比較の詳細」レポートに、ベータ分布の適合度統計量を表示する。また、ベータ分布の密度曲線をヒストグラムに描画する。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/cities.jmp" );
obj = dt << Process Capability(
	Process Variables( :OZONE ),
	Spec Limits( OZONE( LSL( 0.05 ), Target( 0.15 ), USL( 0.4 ) ) ),
	Individual Detail Reports( 1 ),
	{:OZONE << Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )}
);
Wait( 1 );
scrobj = (Report( obj )["OZONE Capability"] << get scriptable object);
scrobj << Compare Distributions( 1, <<Fit Beta );

```

#### Fit Exponential

**構文:** scrobj << Compare Distributions( 1, <<Fit Exponential )

**説明:** 「比較の詳細」レポートに、指数分布の適合度統計量を表示する。また、指数分布の密度曲線をヒストグラムに描画する。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	{:Process 1 << Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )}
);
Wait( 1 );
scrobj = (Report( obj )["Process 1 Capability"] << get scriptable object);
scrobj << Compare Distributions( 1, <<Fit Exponential );

```

#### Fit Gamma

**構文:** scrobj << Compare Distributions( 1, <<Fit Gamma )

**説明:** 「比較の詳細」レポートに、ガンマ分布の適合度統計量を表示する。また、ガンマ分布の密度曲線をヒストグラムに描画する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	{:Process 1 << Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )}
);
Wait( 1 );
scrobj = (Report( obj )["Process 1 Capability"] << get scriptable object);
scrobj << Compare Distributions( 1, <<Fit Gamma );

```

#### Fit Johnson

**構文:** scrobj << Compare Distributions( 1, <<Fit Johnson )

**説明:** 「比較の詳細」レポートに、Johnson分布の適合度統計量を表示する。また、Johnson分布の密度曲線をヒストグラムに描画する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	{:Process 1 << Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )}
);
Wait( 1 );
scrobj = (Report( obj )["Process 1 Capability"] << get scriptable object);
scrobj << Compare Distributions( 1, <<Fit Johnson );

```

#### Fit Largest Extreme Value

**構文:** scrobj << Compare Distributions( 1, <<Fit Largest Extreme Value )

**説明:** 「比較の詳細」レポートに、最大極値分布の適合度統計量を表示する。また、最大極値分布の密度曲線をヒストグラムに描画する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	{:Process 1 << Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )}
);
Wait( 1 );
scrobj = (Report( obj )["Process 1 Capability"] << get scriptable object);
scrobj << Compare Distributions( 1, <<Fit Largest Extreme Value );

```

#### Fit Lognormal

**構文:** scrobj << Compare Distributions( 1, <<Fit Lognormal )

**説明:** 「比較の詳細」レポートに、対数正規分布の適合度統計量を表示する。また、対数正規分布の密度曲線をヒストグラムに描画する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	{:Process 1 << Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )}
);
Wait( 1 );
scrobj = (Report( obj )["Process 1 Capability"] << get scriptable object);
scrobj << Compare Distributions( 1, <<Fit Lognormal );

```

#### Fit Nonparametric

**構文:** scrobj << Compare Distributions( 1, <<Fit Nonparametric )

**説明:** ノンパラメトリック推定におけるカーネルのバンド幅を調整するスライダーを表示する。また、ノンパラメトリックな密度曲線をヒストグラムに描画する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	{:Process 1 << Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )}
);
Wait( 1 );
scrobj = (Report( obj )["Process 1 Capability"] << get scriptable object);
scrobj << Compare Distributions( 1, <<Fit Nonparametric );

```

#### Fit Normal

**構文:** scrobj << Compare Distributions( 1, <<Fit Normal )

**説明:** 「比較の詳細」レポートに、正規分布の適合度統計量を表示する。また、正規分布の密度曲線をヒストグラムに描画する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	{:Process 1 << Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )}
);

```

#### Fit SHASH

**構文:** scrobj << Compare Distributions( 1, <<Fit SHASH )

**説明:** 「比較の詳細」レポートに、SHASH分布の適合度統計量を表示する。また、SHASH分布の密度曲線をヒストグラムに描画する。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	{:Process 1 << Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )}
);
Wait( 1 );
scrobj = (Report( obj )["Process 1 Capability"] << get scriptable object);
scrobj << Compare Distributions( 1, <<Fit SHASH );

```

#### Fit Smallest Extreme Value

**構文:** scrobj << Compare Distributions( 1, <<Fit Smallest Extreme Value )

**説明:** 「比較の詳細」レポートに、最小極値分布の適合度統計量を表示する。また、最小極値分布の密度曲線をヒストグラムに描画する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	{:Process 1 << Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )}
);
Wait( 1 );
scrobj = (Report( obj )["Process 1 Capability"] << get scriptable object);
scrobj << Compare Distributions( 1, <<Fit Smallest Extreme Value );

```

#### Fit Weibull

**構文:** scrobj << Compare Distributions( 1, <<Fit Weibull )

**説明:** 「比較の詳細」レポートに、Weibull分布の適合度統計量を表示する。また、Weibull分布の密度曲線をヒストグラムに描画する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	{:Process 1 << Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )}
);
Wait( 1 );
scrobj = (Report( obj )["Process 1 Capability"] << get scriptable object);
scrobj << Compare Distributions( 1, <<Fit Weibull );

```

#### Mixture of 2 Normals

**構文:** scrobj << Compare Distributions( 1, <<Mixture of 2 Normals )

**説明:** 「比較の詳細」レポートに、二重正規混合分布の適合度統計量を表示する。また、二重正規混合分布の密度曲線をヒストグラムに描画する。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	{:Process 1 << Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )}
);
Wait( 1 );
scrobj = (Report( obj )["Process 1 Capability"] << get scriptable object);
scrobj << Compare Distributions( 1, <<Mixture of 2 Normals );

```

#### Mixture of 3 Normals

**構文:** scrobj << Compare Distributions( 1, <<Mixture of 3 Normals )

**説明:** 「比較の詳細」レポートに、三重正規混合分布の適合度統計量を表示する。また、三重正規混合分布の混合分布の密度曲線をヒストグラムに描画する。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	{:Process 1 << Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )}
);
Wait( 1 );
scrobj = (Report( obj )["Process 1 Capability"] << get scriptable object);
scrobj << Compare Distributions( 1, <<Mixture of 3 Normals );

```

#### Order by Comparison Criterion

**構文:** scrobj << Order by Comparison Criterion( "AICc"|"BIC"|"-2Loglikelihood" )

**説明:** 「比較の詳細」レポートにおいて、順序を並べ替える。AICc、BIC、または-2対数尤度で並べ替えることができる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 & Dist( Lognormal ) ),
	Individual Detail Reports( 1 ),
	{(:Process 1 & Dist( Lognormal )) <<
	Process Capability Analysis(
		Compare Distributions(
			1, <<Fit Normal, <<Fit Gamma, <<Fit Johnson, <<Fit Lognormal, <<Fit Weibull,
		)
	)}
);
Wait( 1 );
scrobj = (Report( obj )["Compare Distributions"] << get scriptable object);
scrobj << Order by Comparison Criterion( "-2Loglikelihood" );

```

#### Probability Plots

**構文:** scrobj << Probability Plots( state=0|1 )

**説明:** 「分布の比較」において、確率プロットの表示/非表示を切り替える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 & Dist( Lognormal ) ),
	Individual Detail Reports( 1 ),
	{(:Process 1 & Dist( Lognormal )) <<
	Process Capability Analysis( Compare Distributions( 1, <<Fit Normal, <<Fit Lognormal ) )}
);
Wait( 1 );
scrobj = (Report( obj )["Compare Distributions"] << get scriptable object);
scrobj << Probability Plots( 1 );

```

## Process Capability Analysis > Process Capability Analysis Histogram

### 項目のメッセージ

#### Show Between-and-Within Sigma Density

**構文:** scrobj << "Show Between-and-Within Sigma Density"n( state=0|1 )

**説明:** 群間＋群内シグマに基づいた確率密度曲線の表示/非表示を切り替える。 デフォルトではオン。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << Process Capability(
	Process Variables( :Gap[:Date] & Between ),
	Within Subgroup Variation( Average of Unbiased Standard Deviations ),
	Individual Detail Reports( 1 ),
	{(:Gap[:Date] & Between) << Process Capability Analysis(
		Histogram( 1, "Show Between-and-Within Sigma Density"n( 0 ) )
	)}
);
Wait( 1 );
scrobj = (Report( obj )["Histogram"] << get scriptable object);
scrobj << "Show Between-and-Within Sigma Density"n( 1 );

```

#### Show Count Axis

**構文:** scrobj << Show Count Axis( state=0|1 )

**説明:** ヒストグラムフレームの右側にある度数軸を表示または非表示にする。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << Process Capability(
	Process Variables( :Gap[:Date] ),
	Individual Detail Reports( 1 ),
	{(:Gap[:Date]) << Process Capability Analysis( Histogram( 1, Show Count Axis( 0 ) ) )}
);
Wait( 1 );
scrobj = (Report( obj )["Histogram"] << get scriptable object);
scrobj << Show Count Axis( 1 );

```

#### Show Density Axis

**構文:** scrobj << Show Density Axis( state=0|1 )

**説明:** ヒストグラムフレームの右側にある密度軸を表示または非表示にする。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << Process Capability(
	Process Variables( :Gap[:Date] ),
	Individual Detail Reports( 1 ),
	{(:Gap[:Date]) << Process Capability Analysis( Histogram( 1, Show Density Axis( 0 ) ) )}
);
Wait( 1 );
scrobj = (Report( obj )["Histogram"] << get scriptable object);
scrobj << Show Density Axis( 1 );

```

#### Show Overall Sigma Density

**構文:** scrobj << Show Overall Sigma Density( state=0|1 )

**説明:** ヒストグラムに描かれている、全体シグマに基づいた密度曲線の表示/非表示を切り替える。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << Process Capability(
	Process Variables( :Gap[:Date] ),
	Individual Detail Reports( 1 ),
	{(:Gap[:Date]) << Process Capability Analysis(
		Histogram( 1, Show Overall Sigma Density( 0 ) )
	)}
);
Wait( 1 );
scrobj = (Report( obj )["Histogram"] << get scriptable object);
scrobj << Show Overall Sigma Density( 1 );

```

#### Show Spec Limits

**構文:** scrobj << Show Spec Limits( state=0|1 )

**説明:** ヒストグラムにおいて、下側および上側仕様限界の表示/非表示を切り替える。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << Process Capability(
	Process Variables( :Gap[:Date] ),
	Individual Detail Reports( 1 ),
	{(:Gap[:Date]) << Process Capability Analysis( Histogram( 1, Show Spec Limits( 0 ) ) )}
);
Wait( 1 );
scrobj = (Report( obj )["Histogram"] << get scriptable object);
scrobj << Show Spec Limits( 1 );

```

#### Show Target

**構文:** scrobj << Show Target( state=0|1 )

**説明:** ヒストグラムで目標値を示す線の表示/非表示を切り替える。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << Process Capability(
	Process Variables( :Gap[:Date] ),
	Individual Detail Reports( 1 ),
	{(:Gap[:Date]) << Process Capability Analysis( Histogram( 1, Show Target( 0 ) ) )}
);
Wait( 1 );
scrobj = (Report( obj )["Histogram"] << get scriptable object);
scrobj << Show Target( 1 );

```

#### Show Within Sigma Density

**構文:** scrobj << Show Within Sigma Density( state=0|1 )

**説明:** ヒストグラムに描かれている、群内シグマに基づいた密度曲線の表示/非表示を切り替える。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << Process Capability(
	Process Variables( :Gap[:Date] ),
	Individual Detail Reports( 1 ),
	{(:Gap[:Date]) << Process Capability Analysis(
		Histogram( 1, Show Within Sigma Density( 0 ) )
	)}
);
Wait( 1 );
scrobj = (Report( obj )["Histogram"] << get scriptable object);
scrobj << Show Within Sigma Density( 1 );

```

## Process Capability Analysis > Process Capability Interactive Plot

### 項目のメッセージ

#### Capability

**構文:** scrobj << Capability( state=0|1 )

**説明:** 工程能力指数の表示/非表示を切り替える。なお、元の工程能力指数は全体シグマに基づいて計算されている。 デフォルトではオン。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables( :PNP1 ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	{:PNP1 << Process Capability Analysis(
		Process Summary( 0 ),
		Overall Sigma Capability( 0 ),
		Nonconformance( 0 ),
		Within Sigma Capability( 0 ),
		Histogram( 0 ),
		Interactive Capability Plot( 1, Capability( 0 ) )
	)}
);
Wait( 1 );
scrobj = (Report( obj )["Interactive Capability Plot"] << get scriptable object);
scrobj << Capability( 1 );

```

#### Nonconformance

**構文:** scrobj << Nonconformance( state=0|1 )

**説明:** 不適合率の表示/非表示を切り替える。レポートに最初に表示されている不適合率の値は全体シグマに基づく。 デフォルトではオン。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables( :PNP1 ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	{:PNP1 << Process Capability Analysis(
		Process Summary( 0 ),
		Overall Sigma Capability( 0 ),
		Nonconformance( 0 ),
		Within Sigma Capability( 0 ),
		Histogram( 0 ),
		Interactive Capability Plot( 1, Nonconformance( 0 ) )
	)}
);
Wait( 1 );
scrobj = (Report( obj )["Interactive Capability Plot"] << get scriptable object);
scrobj << Nonconformance( 1 );

```

#### Revert to Original Values

**構文:** scrobj << Revert to Original Values

**説明:** 「対話式工程能力プロット」を最初の設定に戻す。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables( :PNP1 ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	{:PNP1 << Process Capability Analysis(
		Process Summary( 0 ),
		Overall Sigma Capability( 0 ),
		Nonconformance( 0 ),
		Within Sigma Capability( 0 ),
		Histogram( 0 ),
		Interactive Capability Plot( 1, New Values( Mean( 400 ) ) )
	)}
);
Wait( 1 );
scrobj = (Report( obj )["Interactive Capability Plot"] << get scriptable object);
scrobj << Revert to Original Values;

```

#### Save New Spec Limits as a Column Property

**構文:** scrobj << Save New Spec Limits as a Column Property

**説明:** 元のデータテーブルの列に、新しい仕様限界を列プロパティとして保存する。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables( :PNP1 ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	{:PNP1 << Process Capability Analysis(
		Process Summary( 0 ),
		Overall Sigma Capability( 0 ),
		Nonconformance( 0 ),
		Within Sigma Capability( 0 ),
		Histogram( 0 ),
		Interactive Capability Plot( 1, New Values( LSL( 150 ), Target( 300 ), USL( 450 ) ) )
	)}
);
Wait( 1 );
scrobj = (Report( obj )["Interactive Capability Plot"] << get scriptable object);
scrobj << Save New Spec Limits as a Column Property;

```

## Process Capability Analysis > Process Capability Normal Probability Plot

### 項目のメッセージ

#### Normal Fit Confidence Limits Shading

**構文:** scrobj << Normal Fit Confidence Limits Shading( state=0|1 )

**説明:** 正規確率プロットの正規分布のあてはめにおいて、信頼限界の陰影の表示/非表示を切り替える。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << Process Capability(
	Process Variables( :Gap[:Date] ),
	Individual Detail Reports( 1 ),
	{:Gap[:Date] << Process Capability Analysis(
		Normal Probability Plot( 1, Normal Fit Confidence Limits Shading( 0 ) )
	)}
);
Wait( 2 );
scrobj = Report( obj )["Normal Probability Plot"] << get scriptable object;
scrobj << Normal Fit Confidence Limits Shading( 1 );

```

#### Normal Fit Line

**構文:** scrobj << Normal Fit Line( state=0|1 )

**説明:** 正規確率プロットにおいて、正規分布を示す参照線の表示/非表示を切り替える。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << Process Capability(
	Process Variables( :Gap[:Date] ),
	Individual Detail Reports( 1 ),
	{:Gap[:Date] << Process Capability Analysis(
		Normal Probability Plot( 1, Normal Fit Line( 0 ) )
	)}
);
Wait( 2 );
scrobj = Report( obj )["Normal Probability Plot"] << get scriptable object;
scrobj << Normal Fit Line( 1 );

```

#### Simultaneous Empirical Confidence Limits

**構文:** scrobj << Simultaneous Empirical Confidence Limits( state=0|1 )

**説明:** 「工程能力分析」レポートにおいて、正規確率プロットの同時経験的信頼限界の表示/非表示を切り替える。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << Process Capability(
	Process Variables( :Gap[:Date] ),
	Individual Detail Reports( 1 ),
	{:Gap[:Date] << Process Capability Analysis(
		Normal Probability Plot( 1, Simultaneous Empirical Confidence Limits( 0 ) )
	)}
);
Wait( 2 );
scrobj = Report( obj )["Normal Probability Plot"] << get scriptable object;
scrobj << Simultaneous Empirical Confidence Limits( 1 );

```

#### Simultaneous Empirical Confidence Limits Shading

**構文:** scrobj << Simultaneous Empirical Confidence Limits Shading( state=0|1 )

**説明:** 「工程能力分析」レポートにおいて、正規確率プロットの同時経験的信頼限界の陰影の表示/非表示を切り替える。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << Process Capability(
	Process Variables( :Gap[:Date] ),
	Individual Detail Reports( 1 ),
	{:Gap[:Date] << Process Capability Analysis(
		Normal Probability Plot( 1, Simultaneous Empirical Confidence Limits Shading( 0 ) )
	)}
);
Wait( 2 );
scrobj = Report( obj )["Normal Probability Plot"] << get scriptable object;
scrobj << Simultaneous Empirical Confidence Limits Shading( 1 );

```

## Process Capability Analysis

### 項目のメッセージ

#### Between-and-Within Sigma Capability

**構文:** scrobj << "Between-and-Within Sigma Capability"n( state=0|1 )

**説明:** 群間＋群内シグマに基づいた工程能力分析の表示/非表示を切り替える。 デフォルトではオン。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << Process Capability(
	Process Variables( :Gap[:Date] & Between ),
	Individual Detail Reports( 1 ),
	{(:Gap[:Date] & Between) << Process Capability Analysis(
		"Between-and-Within Sigma Capability"n( 0 )
	)}
);
Wait( 1 );
scrobj = Report( obj )["Gap[Date] Capability"] << Get Scriptable Object;
scrobj << "Between-and-Within Sigma Capability"n( 1 );

```

#### Between-and-Within Sigma Target Index

**構文:** scrobj << "Between-and-Within Sigma Target Index"n( state=0|1 )

**説明:** 「群間＋群内シグマ」に基づく目標指数の推定値の表示/非表示を切り替える。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << Process Capability(
	Process Variables( :Gap[:Date] & Between ),
	Individual Detail Reports( 1 ),
	{(:Gap[:Date] & Between) << Process Capability Analysis(
		"Between-and-Within Sigma Target Index"n( 1 )
	)}
);
Wait( 1 );
scrobj = Report( obj )["Gap[Date] Capability"] << get scriptable object;
scrobj << "Between-and-Within Sigma Target Index"n( 0 );

```

#### Between-and-Within Sigma Z Benchmark

**構文:** scrobj << "Between-and-Within Sigma Z Benchmark"n( state=0|1 )

**説明:** 群間＋群内シグマに基づいたZベンチマークの表示/非表示を切り替える。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << Process Capability(
	Process Variables( :Gap[:Date] & Between ),
	Individual Detail Reports( 1 ),
	{(:Gap[:Date] & Between) << Process Capability Analysis(
		"Between-and-Within Sigma Z Benchmark"n( 0 )
	)}
);
Wait( 1 );
scrobj = Report( obj )["Gap[Date] Capability"] << get scriptable object;
scrobj << "Between-and-Within Sigma Z Benchmark"n( 1 );

```

#### Compare Distributions

**構文:** scrobj << Compare Distributions( state=0|1, < <<distribution options > )

**説明:** 複数の確率分布を選択できる設定パネルの表示/非表示を切り替える。

**例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 & Dist( Lognormal ) ),
	Individual Detail Reports( 1 ),
	{(:Process 1 & Dist( Lognormal )) <<
	Process Capability Analysis( Compare Distributions( 0 ) )}
);
Wait( 1 );
scrobj = Report( obj )["Process 1(Lognormal) Capability"] << get scriptable object;
scrobj << Compare Distributions( 1, <<Fit Lognormal );

```

**例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	{:Process 1 << Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )}
);
Wait( 1 );
scrobj = (Report( obj )["Process 1 Capability"] << get scriptable object);
scrobj << Compare Distributions( 1, <<Fit SHASH );

```

**例 3**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 & Dist( Lognormal ) ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	Capability Box Plots( 1 ),
	Capability Index Plot( 1 ),
	{(:Process 1 & Dist( Lognormal )) <<
	Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )}
);
Wait( 1 );
scrobj = Report( obj )["Process 1(Lognormal) Capability"] << Get Scriptable Object;
scrobj << Compare Distributions(
	1, <<Fit Gamma, <<Fit Johnson, <<FitLognormal, <<Fit Weibull
);

```

**例 4**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	{:Process 1 << Process Capability Analysis(
		Compare Distributions( 1, <<Fit Normal, <<Fit Gamma )
	)}
);
Wait( 1 );
scrobj = (Report( obj )["Process 1 Capability"] << get scriptable object);
scrobj << Compare Distributions( 0 );

```

#### Fix Parameters

**構文:** scrobj << Fix Parameters( vector )

**説明:** 一部のパラメータを指定の値に固定し、残りのパラメータを再推定する。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 & Dist( Weibull ) ),
	Individual Detail Reports( 1 ),
	{(:Process 1 & Dist( Weibull )) <<
	Process Capability Analysis( Fix Parameters( [11, .] ) )}
);
Wait( 1 );
scrobj = Report( obj )["Process 1(Weibull*) Capability"] << get scriptable object;
scrobj << Fix Parameters( [., .] );

```

#### Histogram

**構文:** scrobj << Histogram( state=0|1 )

**説明:** 「各列の詳細レポート」において、ヒストグラムの表示/非表示を切り替える。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << Process Capability(
	Process Variables( :Gap[:Date] ),
	Individual Detail Reports( 1 ),
	{:Gap[:Date] << Process Capability Analysis( Histogram( 0 ) )}
);
Wait( 1 );
scrobj = Report( obj )["Gap[Date] Capability"] << get scriptable object;
scrobj << Histogram( 1 );

```

#### Interactive Capability Plot

**構文:** scrobj << Interactive Capability Plot( state=0|1 )

**説明:** 「対話的工程能力プロット」の表示/非表示を切り替える。このレポートでは、工程や仕様限界を変更することで工程能力指数にどのような影響が及ぶかを調べることができる。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables( :PNP1 ),
	Individual Detail Reports( 1 ),
	{:PNP1 << Process Capability Analysis( Interactive Capability Plot( 0 ) )}
);
Wait( 1 );
scrobj = Report( obj )["PNP1 Capability"] << get scriptable object;
scrobj << Interactive Capability Plot( 1 );

```

#### Nonconformance

**構文:** scrobj << Nonconformance( state=0|1 )

**説明:** 仕様限界外にある割合について、観測割合と期待割合をまとめたレポートの表示/非表示を切り替える。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << Process Capability(
	Process Variables( :Gap[:Date] ),
	Individual Detail Reports( 1 ),
	{:Gap[:Date] << Process Capability Analysis( Nonconformance( 0 ) )}
);
Wait( 1 );
scrobj = Report( obj )["Gap[Date] Capability"] << get scriptable object;
scrobj << Nonconformance( 1 );

```

#### Nonparametric Density

**構文:** scrobj << Nonparametric Density( state=0|1 )

**説明:** 「ノンパラメトリック密度」レポートの表示/非表示を切り替える。このレポートでは、ノンパラメトリック分布のあてはめに使用されたカーネルのバンド幅が表示される。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tablet Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Purity & Dist( Nonparametric ) ),
	Individual Detail Reports( 1 ),
	{(:Purity & Dist( Nonparametric )) <<
	Process Capability Analysis( Nonparametric Density( 0 ) )}
);
Wait( 1 );
scrobj = Report( obj )["Purity(Nonparametric) Capability"] << get scriptable object;
scrobj << Nonparametric Density( 1 );

```

#### Normal Probability Plot

**構文:** scrobj << Normal Probability Plot( state=0|1 )

**説明:** 正規確率プロットの表示/非表示を切り替える。

**JMP追加されたバージョン:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << Process Capability(
	Process Variables( :Gap[:Date] ),
	Individual Detail Reports( 1 ),

);
Wait( 1 );
scrobj = Report( obj )["Gap[Date] Capability"] << get scriptable object;
scrobj << Normal Probability Plot( 1 );

```

#### Overall Sigma Capability

**構文:** scrobj << Overall Sigma Capability( state=0|1 )

**説明:** 全体シグマに基づいた工程能力指数の表示/非表示を切り替える。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << Process Capability(
	Process Variables( :Gap[:Date] ),
	Individual Detail Reports( 1 ),
	{:Gap[:Date] << Process Capability Analysis( Overall Sigma Capability( 0 ) )}
);
Wait( 1 );
scrobj = Report( obj )["Gap[Date] Capability"] << get scriptable object;
scrobj << Overall Sigma Capability( 1 );

```

#### Overall Sigma Z Benchmark

**構文:** scrobj << Overall Sigma Z Benchmark( state=0|1 )

**説明:** 全体シグマに基づいたZベンチマーク指数の表示/非表示を切り替える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << Process Capability(
	Process Variables( :Gap[:Date] ),
	Individual Detail Reports( 1 ),
	{:Gap[:Date] << Process Capability Analysis( Overall Sigma Z Benchmark( 0 ) )}
);
Wait( 1 );
scrobj = Report( obj )["Gap[Date] Capability"] << get scriptable object;
scrobj << Overall Sigma Z Benchmark( 1 );

```

#### Parameter Estimates

**構文:** scrobj << Parameter Estimates( state=0|1 )

**説明:** 非正規分布に対する「パラメータ推定値」レポートの表示/非表示を切り替える。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tablet Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Thickness & Dist( Johnson ) ),
	Individual Detail Reports( 1 ),
	{(:Thickness & Dist( Johnson )) <<
	Process Capability Analysis( Parameter Estimates( 0 ) )}
);
Wait( 1 );
scrobj = Report( obj )["Thickness(Johnson) Capability"] << get scriptable object;
scrobj << Parameter Estimates( 1 );

```

#### Process Summary

**構文:** scrobj << Process Summary( state=0|1 )

**説明:** 工程要約統計量の表示/非表示を切り替える。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << Process Capability(
	Process Variables( :Gap[:Date] ),
	Individual Detail Reports( 1 ),
	{:Gap[:Date] << Process Capability Analysis( Process Summary( 0 ) )}
);
Wait( 1 );
scrobj = Report( obj )["Gap[Date] Capability"] << get scriptable object;
scrobj << Process Summary( 1 );

```

#### Within Sigma Capability

**構文:** scrobj << Within Sigma Capability( state=0|1 )

**説明:** 群内シグマに基づいた工程能力指数とその信頼区間の表示/非表示を切り替える。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << Process Capability(
	Process Variables( :Gap[:Date] ),
	Individual Detail Reports( 1 ),
	{:Gap[:Date] << Process Capability Analysis( Within Sigma Capability( 0 ) )}
);
Wait( 1 );
scrobj = Report( obj )["Gap[Date] Capability"] << get scriptable object;
scrobj << Within Sigma Capability( 1 );

```

#### Within Sigma Target Index

**構文:** scrobj << Within Sigma Target Index( state=0|1 )

**説明:** 群内シグマに基づく目標指数の推定値の表示/非表示を切り替える。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << Process Capability(
	Process Variables( :Gap[:Date] ),
	Individual Detail Reports( 1 ),
	{:Gap[:Date] << Process Capability Analysis( Within Sigma Target Index( 0 ) )}
);
Wait( 1 );
scrobj = Report( obj )["Gap[Date] Capability"] << get scriptable object;
scrobj << Within Sigma Target Index( 1 );

```

#### Within Sigma Z Benchmark

**構文:** scrobj << Within Sigma Z Benchmark( state=0|1 )

**説明:** 群内シグマに基づいたZベンチマーク指数の表示/非表示を切り替える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << Process Capability(
	Process Variables( :Gap[:Date] ),
	Individual Detail Reports( 1 ),
	{:Gap[:Date] << Process Capability Analysis( Within Sigma Z Benchmark( 0 ) )}
);
Wait( 1 );
scrobj = Report( obj )["Gap[Date] Capability"] << get scriptable object;
scrobj << Within Sigma Z Benchmark( 1 );

```

## Process Capability Goal Plot

### 項目のメッセージ

#### Capability Lines

**構文:** obj << Goal Plot( 1, Capability Lines( number=1.0 ) ); 

scrobj << Capability Lines( number=1.0 )

**説明:** ゴールプロットの三角形部分を示すPpk (Cpk)の値を設定する。この値はPpk (Cpk)編集ボックスにも表示される。 デフォルトの値は"1.0"。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
obj << Goal Plot( 1, Capability Lines( 1.5 ) );
scrobj = (Report( obj )["Goal Plot"] << get scriptable object);
Wait( 1 );
scrobj << Capability Lines( 1 );

```

#### Defect Rate Contour

**構文:** obj << Goal Plot( 1, Defect Rate Contour( number=0.0001 ) ); 

scrobj << Defect Rate Contour( number=0.0001 )

**説明:** 指定された不適合率を示す等高線の表示/非表示を切り替える。 デフォルトの値は"0.0001"。

**例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
obj << Goal Plot( 1, Defect Rate Contour( 0.01 ) );

```

**例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
Wait( 1 );
scrobj = (Report( obj )["Goal Plot"] << get scriptable object);
scrobj << Defect Rate Contour( 0.01 );

```

#### Label Overall Sigma Points

**構文:** obj << Goal Plot( 1, Label Overall Sigma Points( state=0|1 ) ); 

scrobj << Label Overall Sigma Points( state=0|1 )

**説明:** ゴールプロットにおける点のラベルの表示/非表示を切り替える。プロットの点は全体シグマの推定値を使って計算される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
obj << Goal Plot( 1, Label Overall Sigma Points( 0 ) );
Wait( 1 );
scrobj = (Report( obj )["Goal Plot"] << get scriptable object);
scrobj << Label Overall Sigma Points( 1 );

```

#### Label Within Sigma Points

**構文:** obj << Goal Plot( 1, Label Within Sigma Points( state=0|1 ) ); 

scrobj << Label Within Sigma Points( state=0|1 )

**説明:** ゴールプロットにおける点のラベルの表示/非表示を切り替える。プロットの点は群内シグマの推定値を使って計算される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	),

);
obj << Goal Plot(
	1,
	Show Within Sigma Points( 1 ),
	Show Overall Sigma Points( 0 ),
	Label Within Sigma Points( 1 )
);
Wait( 1 );
scrobj = (Report( obj )["Goal Plot"] << get scriptable object);
scrobj << Label Within Sigma Points( 0 );

```

#### Label Within or Between-and-Within Sigma Points

**構文:** obj << Goal Plot( 1, "Label Within or Between-and-Within Sigma Points"n( state=0|1 ) ); 

scrobj << "Label Within or Between-and-Within Sigma Points"n( state=0|1 )

**説明:** ゴールプロットにおける点のラベルの表示/非表示を切り替える。プロットの点は、群内シグマの推定値(「群間＋群内シグマ」が指定されている場合はその推定値)を使って計算される。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer] & Between, :PNP1[:lot_id, :wafer] & Between,
		:PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	),

);
obj << Goal Plot(
	1,
	"Show Within or Between-and-Within Sigma Points"n( 1 ),
	Show Overall Sigma Points( 0 ),
	"Label Within or Between-and-Within Sigma Points"n( 1 )
);
Wait( 1 );
scrobj = (Report( obj )["Goal Plot"] << get scriptable object);
scrobj << "Label Within or Between-and-Within Sigma Points"n( 0 );

```

#### Shade Levels

**構文:** obj << Goal Plot( 1, Shade Levels( state=0|1 ) ); 

scrobj << Shade Levels( state=0|1 )

**説明:** ゴールプロットにおいて、指定したPpk (Cpk)に対する陰影の表示/非表示を切り替える。編集ボックスに入力されたPpkの値をpとすると、2p < Ppkは緑色、p > Ppkは赤色、p < Ppk < 2pは黄色の陰影で描かれる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
obj << Goal Plot( 1, Shade Levels( 1 ) );
Wait( 1 );
scrobj = (Report( obj )["Goal Plot"] << get scriptable object);
scrobj << Shade Levels( 0 );

```

#### Show Overall Sigma Points

**構文:** obj << Goal Plot( 1, Show Overall Sigma Points( state=0|1 ) ); 

scrobj << Show Overall Sigma Points( state=0|1 )

**説明:** ゴールプロットの表示/非表示を切り替える。プロットの点は全体シグマの推定値を使って計算される。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	),

);
Wait( 1 );
obj << Goal Plot( 1, Show Overall Sigma Points( 0 ) );
Wait( 1 );
scrobj = (Report( obj )["Goal Plot"] << get scriptable object);
scrobj << Show Overall Sigma Points( 1 );

```

#### Show Within Sigma Points

**構文:** obj << Goal Plot( 1, Show Within Sigma Points( state=0|1 ) ); 

scrobj << Show Within Sigma Points( state=0|1 )

**説明:** ゴールプロットの表示/非表示を切り替える。プロットの点は群内シグマの推定値を使って計算される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
Wait( 1 );
obj << Goal Plot( 1, Show Within Sigma Points( 1 ) );
Wait( 1 );
scrobj = (Report( obj )["Goal Plot"] << get scriptable object);
scrobj << Show Within Sigma Points( 0 );

```

#### Show Within or Between-and-Within Sigma Points

**構文:** obj << Goal Plot( 1, "Show Within or Between-and-Within Sigma Points"n( state=0|1 ) ); 

scrobj << "Show Within or Between-and-Within Sigma Points"n( state=0|1 )

**説明:** ゴールプロットの表示/非表示を切り替える。プロットの点は、群内シグマの推定値を使って計算されるか、「群間＋群内シグマ」が指定されている場合はその推定値を使って計算される。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer] & Between, :PNP1[:lot_id, :wafer] & Between,
		:PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
Wait( 1 );
obj << Goal Plot( 1, "Show Within or Between-and-Within Sigma Points"n( 1 ) );
Wait( 1 );
scrobj = (Report( obj )["Goal Plot"] << get scriptable object);
scrobj << "Show Within or Between-and-Within Sigma Points"n( 0 );

```

## Process Capability Index Plot

### 項目のメッセージ

#### Capability Lines

**構文:** obj << Capability Index Plot( 1, Capability Lines( number=1.0 ) ); 

scrobj << Capability Lines( number=1.0 )

**説明:** 工程能力指数プロットの参照線に使われるPpk (Cpk)の値を設定する。この値は、グラフ下にある「Ppk」のテキスト編集ボックスにも表示される。 デフォルトの値は"1.0"。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:Process 1 & Dist( Johnson ), :Process 2 & Dist( Lognormal ), :Process 3,
		:Process 4 & Dist( Lognormal )
	),
	Capability Box Plots( 0 ),
	Goal Plot( 0 ),
	Process Performance Plot( 0 )
);
obj << Capability Index Plot( 1, Capability Lines( 2.0 ) );
scrobj = (Report( obj )["Capability Index Plot"] << get scriptable object);
Wait( 1 );
scrobj << Capability Lines( 1.0 );

```

#### Label Overall Sigma Points

**構文:** obj << Capability Index Plot( 1, Label Overall Sigma Points( state=0|1 ) ); 

scrobj << Label Overall Sigma Points( state=0|1 )

**説明:** 工程能力指数プロットにおける点のラベルの表示/非表示を切り替える。プロットの点は全体シグマの推定値を使って計算される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:Process 1, :Process 2 & Dist( Lognormal ), :Process 3,
		:Process 4 & Dist( Lognormal ), :Process 5 & Dist( Weibull ), :Process 6, :Process 7
	),
	Capability Box Plots( 0 ),
	Goal Plot( 0 ),
	Process Performance Plot( 0 )
);
obj << Capability Index Plot( 1, Label Overall Sigma Points( 1 ) );
Wait( 1 );
scrobj = (Report( obj )["Capability Index Plot"] << get scriptable object);
scrobj << Label Overall Sigma Points( 0 );

```

#### Label Within Sigma Points

**構文:** obj << Capability Index Plot( 1, Label Within Sigma Points( state=0|1 ) ); 

scrobj << Label Within Sigma Points( state=0|1 )

**説明:** 工程能力指数プロットにおける点のラベルの表示/非表示を切り替える。プロットの点は群内シグマの推定値を使って計算される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:Process 1, :Process 2 & Dist( Lognormal ), :Process 3,
		:Process 4 & Dist( Lognormal ), :Process 5 & Dist( Weibull ), :Process 6, :Process 7
	),
	Moving Range Method( Average of Moving Ranges ),
	Capability Box Plots( 0 ),
	Goal Plot( 0 ),
	Process Performance Plot( 0 )
);
obj << Capability Index Plot(
	1,
	Show Within Sigma Points( 1 ),
	Label Within Sigma Points( 1 )
);
Wait( 1 );
scrobj = (Report( obj )["Capability Index Plot"] << get scriptable object);
scrobj << Label Within Sigma Points( 0 );

```

#### Label Within or Between-and-Within Sigma Points

**構文:** obj << Capability Index Plot( 1, "Label Within or Between-and-Within Sigma Points"n( state=0|1 ) ); 

scrobj << "Label Within or Between-and-Within Sigma Points"n( state=0|1 )

**説明:** 工程能力指数プロットにおける点のラベルの表示/非表示を切り替える。プロットの点は、群内シグマの推定値(「群間＋群内シグマ」が指定されている場合はその推定値)を使って計算される。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer] & Between, :PNP1[:lot_id, :wafer] & Between,
		:PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	),
	Capability Box Plots( 0 ),
	Goal Plot( 0 ),
	Process Performance Plot( 0 )
);
obj << Capability Index Plot(
	1,
	"Show Within or Between-and-Within Sigma Points"n( 1 ),
	"Label Within or Between-and-Within Sigma Points"n( 1 )
);
Wait( 1 );
scrobj = (Report( obj )["Capability Index Plot"] << get scriptable object);
scrobj << "Label Within or Between-and-Within Sigma Points"n( 0 );

```

#### Shade Levels

**構文:** obj << Capability Index Plot( 1, Shade Levels( state=0|1 ) ); 

scrobj << Shade Levels( state=0|1 )

**説明:** 工程能力指数プロットにおいて、Ppk (Cpk)に対する陰影の表示/非表示を切り替える。編集ボックスに入力されたPpkの値をpとすると、2p < Ppkは緑色、p > Ppkは赤色、p < Ppk < 2pは黄色の陰影で描かれる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:Process 1, :Process 2 & Dist( Lognormal ), :Process 3,
		:Process 4 & Dist( Lognormal ), :Process 5 & Dist( Weibull ), :Process 6, :Process 7
	),
	Capability Box Plots( 0 ),
	Goal Plot( 0 ),
	Process Performance Plot( 0 )
);
obj << Capability Index Plot( 1, Shade Levels( 1 ) );
Wait( 1 );
scrobj = (Report( obj )["Capability Index Plot"] << get scriptable object);
scrobj << Shade Levels( 0 );

```

#### Show Overall Sigma Points

**構文:** obj << Capability Index Plot( 1, Show Overall Sigma Points( state=0|1 ) ); 

scrobj << Show Overall Sigma Points( state=0|1 )

**説明:** 工程能力指数プロットの表示/非表示を切り替える。プロットの点は全体シグマの推定値を使って計算される。 デフォルトではオン。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:Process 1, :Process 2 & Dist( Lognormal ), :Process 3,
		:Process 4 & Dist( Lognormal ), :Process 5 & Dist( Weibull ), :Process 6, :Process 7
	),
	Capability Box Plots( 0 ),
	Goal Plot( 0 ),
	Process Performance Plot( 0 )
);
obj << Capability Index Plot(
	1,
	Show Within Sigma Points( 1 ),
	Show Overall Sigma Points( 0 )
);
Wait( 1 );
scrobj = (Report( obj )["Capability Index Plot"] << get scriptable object);
scrobj << Show Overall Sigma Points( 1 );

```

#### Show Within Sigma Points

**構文:** obj << Capability Index Plot( 1, Show Within Sigma Points( state=0|1 ) ); 

scrobj << Show Within Sigma Points( state=0|1 )

**説明:** 工程能力指数プロットの表示/非表示を切り替える。プロットの点は群内シグマの推定値を使って計算される。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:Process 1, :Process 2 & Dist( Lognormal ), :Process 3,
		:Process 4 & Dist( Lognormal ), :Process 5 & Dist( Weibull ), :Process 6, :Process 7
	),
	Moving Range Method( Average of Moving Ranges ),
	Capability Box Plots( 0 ),
	Goal Plot( 0 ),
	Process Performance Plot( 0 )
);
obj << Capability Index Plot( 1, Show Within Sigma Points( 1 ) );
Wait( 1 );
scrobj = (Report( obj )["Capability Index Plot"] << get scriptable object);
scrobj << Show Within Sigma Points( 0 );

```

#### Show Within or Between-and-Within Sigma Points

**構文:** obj << Capability Index Plot( 1, "Show Within or Between-and-Within Sigma Points"n( state=0|1 ) ); 

scrobj << "Show Within or Between-and-Within Sigma Points"n( state=0|1 )

**説明:** 工程能力指数プロットの表示/非表示を切り替える。プロットの点は、群内シグマの推定値(「群間＋群内シグマ」が指定されている場合はその推定値)を使って計算される。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer] & Between, :PNP1[:lot_id, :wafer] & Between,
		:PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	),
	Capability Box Plots( 0 ),
	Goal Plot( 0 ),
	Process Performance Plot( 0 )
);
obj << Capability Index Plot( 1, "Show Within or Between-and-Within Sigma Points"n( 1 ) );
Wait( 1 );
scrobj = (Report( obj )["Capability Index Plot"] << get scriptable object);
scrobj << "Show Within or Between-and-Within Sigma Points"n( 0 );

```

## Process Capability Performance Plot

### 項目のメッセージ

#### Capability Boundary

**構文:** obj << Process Performance Plot( 1, Capability Boundary( number=1.0 ) ); 

scrobj << Capability Boundary( number=1.0 )

**説明:** 工程性能プロットにおいて、Ppkに対する境界を指定する。設定された値で、工程能力があるかないかを判断するための境界線が引かれる。この値は、「全体シグマPpk」編集ボックスにも表示される。 デフォルトの値は"1.0"。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	),
	Capability Box Plots( 0 ),
	Process Performance Plot( 1 ),
	Goal Plot( 0 ),
	Capability Index Plot( 0 )
);
Wait( 1 );
obj << Process Performance Plot( 1, Capability Boundary( 1.33 ) );
scrobj = (Report( obj )["Process Performance Plot"] << get scriptable object);
Wait( 1 );
scrobj << Capability Boundary( 1 );

```

#### Label Points

**構文:** obj << Process Performance Plot( 1, Label Points( state=0|1 ) ); 

scrobj << Label Points( state=0|1 )

**説明:** 工程性能プロットにおいて、点に付けられている工程名ラベルの表示/非表示を切り替える。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	),
	Capability Box Plots( 0 ),
	Process Performance Plot( 1 ),
	Goal Plot( 0 ),
	Capability Index Plot( 0 )
);
obj << Process Performance Plot( 1, Label Points( 1 ) );
Wait( 1 );
scrobj = (Report( obj )["Process Performance Plot"] << get scriptable object);
scrobj << Label Points( 0 );

```

#### Show Within Cpk Curve

**構文:** obj << Process Performance Plot( 1, Show Within Cpk Curve( state=0|1 ) ); 

scrobj << Show Within Cpk Curve( state=0|1 )

**説明:** 工程性能プロットにおいて、群内Cpk曲線の表示/非表示を切り替える。 デフォルトではオン。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	),
	Capability Box Plots( 0 ),
	Process Performance Plot( 1 ),
	Goal Plot( 0 ),
	Capability Index Plot( 0 )
);
obj << Process Performance Plot( 1, Show Within Cpk Curve( 0 ) );
Wait( 1 );
scrobj = (Report( obj )["Process Performance Plot"] << get scriptable object);
scrobj << Show Within Cpk Curve( 1 );

```

#### Stability Boundary

**構文:** obj << Process Performance Plot( 1, Stability Boundary( number=1.25 ) ); 

scrobj << Stability Boundary( number=1.25 )

**説明:** 「工程性能プロット」において、安定比に対する境界を指定する。設定された値で、安定しているかどうかの境界線が引かれる。 デフォルトの値は"1.25"。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	),
	Capability Box Plots( 0 ),
	Process Performance Plot( 1 ),
	Goal Plot( 0 ),
	Capability Index Plot( 0 )
);
Wait( 1 );
obj << Process Performance Plot( 1, Stability Boundary( 1.7 ) );
scrobj = (Report( obj )["Process Performance Plot"] << get scriptable object);
Wait( 1 );
scrobj << Stability Boundary( 1.25 );

```

