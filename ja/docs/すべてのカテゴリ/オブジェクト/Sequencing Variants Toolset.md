# Sequencing Variants Toolset



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

### Copy Script

**構文:** obj << Copy Script

**説明:** この分析を再現するJSLスクリプトを生成し、クリップボードにコピーする。

```jsl

Names Default To Here( 1 );
obj << Copy Script;

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
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

### Get Data Table

**構文:** obj << Get Data Table

**説明:** データテーブルへの参照を戻す。

```jsl

Names Default To Here( 1 );
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Script

**構文:** obj << Get Script

**説明:** この分析を再現するスクリプト(JSL)を生成し、それを式として戻す。

```jsl

Names Default To Here( 1 );
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**構文:** obj << Get Script With Data Table

**説明:** この分析を再現するスクリプト(JSL)をデータテーブルへの参照も含めて生成し、それを式として戻す。

```jsl

Names Default To Here( 1 );
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**構文:** obj << Get Timing

**説明:** プラットフォームの起動にかかった時間を取得する。

```jsl

Names Default To Here( 1 );
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
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Save Script for All Objects

**構文:** obj << Save Script for All Objects

**説明:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**構文:** obj << Save Script for All Objects To Data Table( <name> )

**説明:** すべてのレポートオブジェクトを再現するスクリプトを現在のデータテーブルに保存する。このオプションは、ウィンドウ内にレポートが複数ある場合に便利。作成されるスクリプトの名前は、引用符で囲んで指定しない限り、1つ目のプラットフォーム名となる。

**例 1**

```jsl

Names Default To Here( 1 );
obj[1] << Save Script for All Objects To Data Table;

```

**例 2**

```jsl

Names Default To Here( 1 );
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**構文:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**説明:** この分析を再現するJSLスクリプトを生成し、データテーブルのテーブルプロパティとして保存する。

```jsl

Names Default To Here( 1 );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**構文:** obj << Save Script to Journal

**説明:** この分析を再現するJSLスクリプトを生成し、ジャーナルにそのスクリプトのボタンを追加する。

```jsl

Names Default To Here( 1 );
obj << Save Script to Journal;

```

### Save Script to Report

**構文:** obj << Save Script to Report

**説明:** この分析を再現するJSLスクリプトを生成し、レポートウィンドウに表示する。分析手順の記録を結果と一緒に残せる。

```jsl

Names Default To Here( 1 );
obj << Save Script to Report;

```

### Save Script to Script Window

**構文:** obj << Save Script to Script Window

**説明:** この分析を再現するJSLスクリプトを生成し、現在のスクリプトウィンドウに表示する。

```jsl

Names Default To Here( 1 );
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

### Title

**構文:** obj << Title( "new title" )

**説明:** プラットフォームのタイトルを設定する。

```jsl

Names Default To Here( 1 );
obj << Title( "My Platform" );

```

### Top Report

**構文:** obj << Top Report

**説明:** レポート内のルートノードへの参照を戻す。

```jsl

Names Default To Here( 1 );
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

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

## 関連するコンストラクター

### Sequencing Variants Toolset

**構文:** Sequencing Variants Toolset

**説明:** SAMtoolsとBCStoolsを使って高スループットの配列データを処理・分析するための枠組みを提供する。

## 項目のメッセージ

### Arguments

**構文:** obj << Arguments

**説明:** スクリプトウィンドウからプラットフォームを実行する際に、のオプションを指定する。

### Run Cmd

**構文:** obj << Run Cmd

**説明:** スクリプトによって、バリアント配列解析ツールセットの実行に関する設定を指定する。

### Run Spec

**構文:** obj << Run Spec

**説明:** 設定のウィンドウにおいて、バリアント配列解析ツールセットの実行に関する設定を指定する。

### Specification

**構文:** obj << Specification

**説明:** タスクの指定を可能にする。

## Sequencing Variants Toolset Run

### 項目のメッセージ

#### Auto Send Output to Files List

**構文:** obj << Auto Send Output to Files List( state=0|1 )

**説明:** 出力ファイルをファイルリストのパネルに送る。

#### Bam Files

**構文:** obj << Bam Files

**説明:** BAMファイルを指定する。

#### Bcf Files

**構文:** obj << Bcf Files

**説明:** BCFファイルを指定する。

#### Caller

**構文:** obj << Caller( "複アレル"|"コンセンサス"="複アレル" )

**説明:** デフォルトの値は"複アレル"。

#### Copy Task Specification

**構文:** obj << Copy Task Specification

**説明:** 現在のバリアント配列解析ツールセットに対する設定をクリップボードにコピーする。

**JMP追加されたバージョン:** 19

#### Files

**構文:** obj << Files

**説明:** SAMtoolsで実行する入力ファイルをロードする。

#### Ploidy

**構文:** obj << Ploidy( number=2 )

**説明:** デフォルトの値は"2"。

#### Recall in Task Specification

**構文:** obj << Recall in Task Specification

**説明:** 「タスクの指定」レポートにおいて、タスクの指定を指定されたモデルに設定する。

#### Ref Files

**構文:** obj << Ref Files

**説明:** 参照ゲノムファイルを指定する。

#### Remove Run

**構文:** obj << ( Run[number] << Remove Run( state=0|1 ) )

**説明:** レポートウィンドウから、当該の実行のレポートを削除する。

#### Results Folder

**構文:** obj << Results Folder

**説明:** 結果フォルダを指定する。

#### Sam Files

**構文:** obj << Sam Files

**説明:** SAMファイルを指定する。

#### Send Output to Files List

**構文:** obj << Send Output to Files List( state=0|1 )

**説明:** 出力ファイルをファイルリストのパネルに送る。

#### Sort Reads By

**構文:** obj << Sort Reads By( "座標"|"英数字"|"文字コード"="座標" )

**説明:** デフォルトの値は"座標"。

#### Summary

**構文:** obj << Summary( state=0|1 )

**説明:** 実行に関する詳細の表示/非表示を切り替える。 デフォルトではオン。

#### Target Regions

**構文:** obj << Target Regions

**説明:** ターゲット領域を設定する。領域を指定するには、BAMファイルが座標で並べ替えられ、インデックスが作成されている必要がある。

#### Task

**構文:** obj << Task( "FASTAのインデックス作成"|"SAMをBAMに変換"|"リードの並べ替え"|"メイト座標の追加"|"重複を削除する"|"ファイルのマージ"|"BAMのインデックス作成"|"BAMをSAMに変換"|"マップされたリードの抽出"|"マップされていないリードの抽出"|"ターゲット領域の抽出"|"正常なアラインメントの抽出"|"最初のリードを抽出"|"不一致と挿入にタグを付ける"|"アラインメントをカウント"|"フラグ別にアラインメントをカウント"|"参照別にアラインメントをカウント"|"統計量の生成"|"塩基アラインメント品質の生成"|"リード深度の生成"|"Bgzipに圧縮"|"Bgzipを解凍"|"遺伝子型尤度の生成"|"遺伝子型コールの生成"|"BCFをVCFに変換"|"VCFをBCFに変換" )

**説明:** 実行するタスクを決定する。

#### Title

**構文:** obj << Title

**説明:** タイトルを設定する。

#### Unthreaded

**構文:** obj << Unthreaded( state=0|1 )

**説明:** メインスレッドだけを計算に使用する。

#### Vcf Files

**構文:** obj << Vcf Files

**説明:** VCFファイルを指定する。

## Sequencing Variants Toolset Specification

### 項目のメッセージ

#### Auto Send Output to Files List

**構文:** obj << Auto Send Output to Files List( state=0|1 )

**説明:** 出力ファイルをファイルリストのパネルに送る。

#### Bam Files

**構文:** obj << Bam Files

**説明:** BAMファイルを指定する。

#### Bcf Files

**構文:** obj << Bcf Files

**説明:** BCFファイルを指定する。

#### Caller

**構文:** obj << Caller( "複アレル"|"コンセンサス"="複アレル" )

**説明:** デフォルトの値は"複アレル"。

#### Files

**構文:** obj << Files

**説明:** SAMtoolsで実行する入力ファイルをロードする。

#### Ploidy

**構文:** obj << Ploidy( number=2 )

**説明:** 倍数性を示す正の数値を指定する。 デフォルトの値は"2"。

#### Ref Files

**構文:** obj << Ref Files

**説明:** 参照ゲノムファイルを指定する。

#### Results Folder

**構文:** obj << Results Folder

**説明:** 結果フォルダを指定する。

#### Sam Files

**構文:** obj << Sam Files

**説明:** SAMファイルを指定する。

#### Sort Reads By

**構文:** obj << Sort Reads By( "座標"|"英数字"|"文字コード"="座標" )

**説明:** デフォルトの値は"座標"。

#### Target Regions

**構文:** obj << Target Regions

**説明:** ターゲット領域を設定する。領域を指定するには、BAMファイルが座標で並べ替えられ、インデックスが作成されている必要がある。

#### Task

**構文:** obj << Task( "FASTAのインデックス作成"|"SAMをBAMに変換"|"リードの並べ替え"|"メイト座標の追加"|"重複を削除する"|"ファイルのマージ"|"BAMのインデックス作成"|"BAMをSAMに変換"|"マップされたリードの抽出"|"マップされていないリードの抽出"|"ターゲット領域の抽出"|"正常なアラインメントの抽出"|"最初のリードを抽出"|"不一致と挿入にタグを付ける"|"アラインメントをカウント"|"フラグ別にアラインメントをカウント"|"参照別にアラインメントをカウント"|"統計量の生成"|"塩基アラインメント品質の生成"|"リード深度の生成"|"Bgzipに圧縮"|"Bgzipを解凍"|"遺伝子型尤度の生成"|"遺伝子型コールの生成"|"BCFをVCFに変換"|"VCFをBCFに変換"="FASTAのインデックス作成" )

**説明:** 実行するタスクを決定する。 デフォルトの値は"FASTAのインデックス作成"。

#### Title

**構文:** obj << Title

**説明:** タイトルを設定する。

#### Unthreaded

**構文:** obj << Unthreaded( state=0|1 )

**説明:** メインスレッドだけを計算に使用する。

#### Vcf Files

**構文:** obj << Vcf Files

**説明:** VCFファイルを指定する。

