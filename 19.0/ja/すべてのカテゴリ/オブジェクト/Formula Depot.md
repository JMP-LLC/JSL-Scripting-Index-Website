# Formula Depot



## 共有されるメッセージ

### Action

**構文:** obj &lt;&lt; Action

**説明:** 評価する式を挿入するための、プラットフォーム内の汎用トラップドア。プラットフォームに一時的にディスプレイボックスおよびデータテーブルのコンテキストを設定する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

### Apply Preset

**構文:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**説明:** 作成されたプリセットをオブジェクトに適用する。保存された設定に合わせてオプションとカスタマイズが更新される。

**JMP追加されたバージョン:** 18

#### フォルダ内で検索

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

#### 匿名のプリセット

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();
dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );
Wait( 1 );
obj2 << Apply Preset( preset );

```

#### 名前で検索

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

### Copy Script

**構文:** obj &lt;&lt; Copy Script

**説明:** この分析を再現するJSLスクリプトを生成し、クリップボードにコピーする。

```jsl


fd1 = Formula Depot();
dt = Open( "$SAMPLE_DATA\Iris.jmp" );
model = dt << RunScript( "Nominal Logistic" );
model << Publish Probability Formulas;
fd_script = fd1 << Get Script;
Save Text File( "$TEMP\fd.jrp", Char( Name Expr( fd_script ) ) );
fd1 << Close Window;
Open( "$TEMP\fd.jrp" );
fd2 = Formula Depot[1];
obj << Copy Script;

```

### Get By Levels

**構文:** obj &lt;&lt; Get By Levels

**説明:** By列が指定されている場合、列名をキー、データ値を値とした連想配列を戻す。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

### Get Container

**構文:** obj &lt;&lt; Get Container

**説明:** オブジェクトのコンテンツを含んだコンテナボックスの参照を戻す。

#### フィルタのあるプラットフォーム

```jsl

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

#### 一般

```jsl


fd1 = Formula Depot();
dt = Open( "$SAMPLE_DATA\Iris.jmp" );
model = dt << RunScript( "Nominal Logistic" );
model << Publish Probability Formulas;
fd_script = fd1 << Get Script;
Save Text File( "$TEMP\fd.jrp", Char( Name Expr( fd_script ) ) );
fd1 << Close Window;
Open( "$TEMP\fd.jrp" );
fd2 = Formula Depot[1];
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

### Get Data Table

**構文:** obj &lt;&lt; Get Data Table

**説明:** データテーブルへの参照を戻す。

```jsl


fd1 = Formula Depot();
dt = Open( "$SAMPLE_DATA\Iris.jmp" );
model = dt << RunScript( "Nominal Logistic" );
model << Publish Probability Formulas;
fd_script = fd1 << Get Script;
Save Text File( "$TEMP\fd.jrp", Char( Name Expr( fd_script ) ) );
fd1 << Close Window;
Open( "$TEMP\fd.jrp" );
fd2 = Formula Depot[1];
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Script

**構文:** obj &lt;&lt; Get Script

**説明:** この分析を再現するスクリプト(JSL)を生成し、それを式として戻す。

```jsl


fd1 = Formula Depot();
dt = Open( "$SAMPLE_DATA\Iris.jmp" );
model = dt << RunScript( "Nominal Logistic" );
model << Publish Probability Formulas;
fd_script = fd1 << Get Script;
Save Text File( "$TEMP\fd.jrp", Char( Name Expr( fd_script ) ) );
fd1 << Close Window;
Open( "$TEMP\fd.jrp" );
fd2 = Formula Depot[1];
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**構文:** obj &lt;&lt; Get Script With Data Table

**説明:** この分析を再現するスクリプト(JSL)をデータテーブルへの参照も含めて生成し、それを式として戻す。

```jsl


fd1 = Formula Depot();
dt = Open( "$SAMPLE_DATA\Iris.jmp" );
model = dt << RunScript( "Nominal Logistic" );
model << Publish Probability Formulas;
fd_script = fd1 << Get Script;
Save Text File( "$TEMP\fd.jrp", Char( Name Expr( fd_script ) ) );
fd1 << Close Window;
Open( "$TEMP\fd.jrp" );
fd2 = Formula Depot[1];
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**構文:** obj &lt;&lt; Get Timing

**説明:** プラットフォームの起動にかかった時間を取得する。

```jsl


fd1 = Formula Depot();
dt = Open( "$SAMPLE_DATA\Iris.jmp" );
model = dt << RunScript( "Nominal Logistic" );
model << Publish Probability Formulas;
fd_script = fd1 << Get Script;
Save Text File( "$TEMP\fd.jrp", Char( Name Expr( fd_script ) ) );
fd1 << Close Window;
Open( "$TEMP\fd.jrp" );
fd2 = Formula Depot[1];
t = obj << Get Timing;
Show( t );

```

### Get Web Support

**構文:** obj &lt;&lt; Get Web Support

**説明:** ディスプレイオブジェクトにおけるインタラクティブHTMLサポートのレベルを数値で戻す。1は、一部または全部の要素がサポートされていることを示し、0は、サポートされないことを示す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

### Get Where Expr

**構文:** obj &lt;&lt; Get Where Expr

**説明:** プラットフォームがBy()またはWhere()を使って起動された場合に、データをサブセットするためのWhere式を戻す。By()やWhere()が使われていない場合はEmpty()を戻す。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );
Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

### Ignore Platform Preferences

**構文:** Ignore Platform Preferences( state=0|1 )

**説明:** プラットフォームに対する現在の環境設定を無視する。このメッセージは、プラットフォームを呼び出した後に、そのプラットフォームに送られた場合、無視される。

```jsl

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

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

### Render Preset

**構文:** Render Preset( preset )

**説明:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

### Report

**構文:** obj &lt;&lt; Report;Report( obj )

**説明:** レポートオブジェクトへの参照を戻す。

```jsl


fd1 = Formula Depot();
dt = Open( "$SAMPLE_DATA\Iris.jmp" );
model = dt << RunScript( "Nominal Logistic" );
model << Publish Probability Formulas;
fd_script = fd1 << Get Script;
Save Text File( "$TEMP\fd.jrp", Char( Name Expr( fd_script ) ) );
fd1 << Close Window;
Open( "$TEMP\fd.jrp" );
fd2 = Formula Depot[1];
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Save Script for All Objects

**構文:** obj &lt;&lt; Save Script for All Objects

**説明:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl


fd1 = Formula Depot();
dt = Open( "$SAMPLE_DATA\Iris.jmp" );
model = dt << RunScript( "Nominal Logistic" );
model << Publish Probability Formulas;
fd_script = fd1 << Get Script;
Save Text File( "$TEMP\fd.jrp", Char( Name Expr( fd_script ) ) );
fd1 << Close Window;
Open( "$TEMP\fd.jrp" );
fd2 = Formula Depot[1];
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**構文:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**説明:** すべてのレポートオブジェクトを再現するスクリプトを現在のデータテーブルに保存する。このオプションは、ウィンドウ内にレポートが複数ある場合に便利。作成されるスクリプトの名前は、引用符で囲んで指定しない限り、1つ目のプラットフォーム名となる。

#### 例 1

```jsl

fd1 = Formula Depot();
dt = Open( "$SAMPLE_DATA\Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
model = dt << RunScript( "Nominal Logistic" );
model << Publish Probability Formulas;
fd_script = fd1 << Get Script;
Save Text File( "$TEMP\fd.jrp", Char( Name Expr( fd_script ) ), By( _bycol ) );
fd1 << Close Window;
Open( "$TEMP\fd.jrp" );
fd2 = Formula Depot[1];
obj[1] << Save Script for All Objects To Data Table;

```

#### 例 2

```jsl

fd1 = Formula Depot();
dt = Open( "$SAMPLE_DATA\Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
model = dt << RunScript( "Nominal Logistic" );
model << Publish Probability Formulas;
fd_script = fd1 << Get Script;
Save Text File( "$TEMP\fd.jrp", Char( Name Expr( fd_script ) ), By( _bycol ) );
fd1 << Close Window;
Open( "$TEMP\fd.jrp" );
fd2 = Formula Depot[1];
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**構文:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**説明:** この分析を再現するJSLスクリプトを生成し、データテーブルのテーブルプロパティとして保存する。

```jsl


fd1 = Formula Depot();
dt = Open( "$SAMPLE_DATA\Iris.jmp" );
model = dt << RunScript( "Nominal Logistic" );
model << Publish Probability Formulas;
fd_script = fd1 << Get Script;
Save Text File( "$TEMP\fd.jrp", Char( Name Expr( fd_script ) ) );
fd1 << Close Window;
Open( "$TEMP\fd.jrp" );
fd2 = Formula Depot[1];
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**構文:** obj &lt;&lt; Save Script to Journal

**説明:** この分析を再現するJSLスクリプトを生成し、ジャーナルにそのスクリプトのボタンを追加する。

```jsl


fd1 = Formula Depot();
dt = Open( "$SAMPLE_DATA\Iris.jmp" );
model = dt << RunScript( "Nominal Logistic" );
model << Publish Probability Formulas;
fd_script = fd1 << Get Script;
Save Text File( "$TEMP\fd.jrp", Char( Name Expr( fd_script ) ) );
fd1 << Close Window;
Open( "$TEMP\fd.jrp" );
fd2 = Formula Depot[1];
obj << Save Script to Journal;

```

### Save Script to Report

**構文:** obj &lt;&lt; Save Script to Report

**説明:** この分析を再現するJSLスクリプトを生成し、レポートウィンドウに表示する。分析手順の記録を結果と一緒に残せる。

```jsl


fd1 = Formula Depot();
dt = Open( "$SAMPLE_DATA\Iris.jmp" );
model = dt << RunScript( "Nominal Logistic" );
model << Publish Probability Formulas;
fd_script = fd1 << Get Script;
Save Text File( "$TEMP\fd.jrp", Char( Name Expr( fd_script ) ) );
fd1 << Close Window;
Open( "$TEMP\fd.jrp" );
fd2 = Formula Depot[1];
obj << Save Script to Report;

```

### Save Script to Script Window

**構文:** obj &lt;&lt; Save Script to Script Window

**説明:** この分析を再現するJSLスクリプトを生成し、現在のスクリプトウィンドウに表示する。

```jsl


fd1 = Formula Depot();
dt = Open( "$SAMPLE_DATA\Iris.jmp" );
model = dt << RunScript( "Nominal Logistic" );
model << Publish Probability Formulas;
fd_script = fd1 << Get Script;
Save Text File( "$TEMP\fd.jrp", Char( Name Expr( fd_script ) ) );
fd1 << Close Window;
Open( "$TEMP\fd.jrp" );
fd2 = Formula Depot[1];
obj << Save Script to Script Window;

```

### SendToByGroup

**構文:** SendToByGroup( {":Column == level"}, command );

**説明:** プラットフォームコマンドまたは表示のカスタマイズコマンドをByグループの各水準に送る。

```jsl

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

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :age ) ),
	Continuous Distribution( Column( :weight ) ),
	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) )
);

```

### Title

**構文:** obj &lt;&lt; Title( "new title" )

**説明:** プラットフォームのタイトルを設定する。

```jsl


fd1 = Formula Depot();
dt = Open( "$SAMPLE_DATA\Iris.jmp" );
model = dt << RunScript( "Nominal Logistic" );
model << Publish Probability Formulas;
fd_script = fd1 << Get Script;
Save Text File( "$TEMP\fd.jrp", Char( Name Expr( fd_script ) ) );
fd1 << Close Window;
Open( "$TEMP\fd.jrp" );
fd2 = Formula Depot[1];
obj << Title( "My Platform" );

```

### Top Report

**構文:** obj &lt;&lt; Top Report

**説明:** レポート内のルートノードへの参照を戻す。

```jsl


fd1 = Formula Depot();
dt = Open( "$SAMPLE_DATA\Iris.jmp" );
model = dt << RunScript( "Nominal Logistic" );
model << Publish Probability Formulas;
fd_script = fd1 << Get Script;
Save Text File( "$TEMP\fd.jrp", Char( Name Expr( fd_script ) ) );
fd1 << Close Window;
Open( "$TEMP\fd.jrp" );
fd2 = Formula Depot[1];
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### View Web XML

**構文:** obj &lt;&lt; View Web XML

**説明:** インタラクティブHTMLレポートの作成に使うXMLコードを戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

## 関連するコンストラクター

### Formula Depot

**構文:** Formula Depot

**説明:** 予測モデルの情報を蓄積するためのプラットフォーム。モデルを比較、プロファイルの作成、スコアリングのためのコードを生成ができる。[分析]メニューを通じて、またはモデル作成プラットフォームや「再コード化」、「計算式エディタ」で「発行」コマンドを実行すると、「計算式デポ」が起動できる。

```jsl


fd1 = Formula Depot();
dt = Open( "$SAMPLE_DATA\Iris.jmp" );
model = dt << RunScript( "Nominal Logistic" );
model << Publish Probability Formulas;
fd_script = fd1 << Get Script;
Save Text File( "$TEMP\fd.jrp", Char( Name Expr( fd_script ) ) );
fd1 << Close Window;
Open( "$TEMP\fd.jrp" );
fd2 = Formula Depot[1];

```

## 項目のメッセージ

### Add Formula from Column

**構文:** 予測子 = obj &lt;&lt; Add Formula from Column( Table(name|reference), Columns(name|index|reference, ...), &lt;Expand Intermediate Formulas(number)&gt; )

**説明:** データテーブルに保存されている計算式の列から、計算式デポに予測式を追加する。

```jsl


dt = Open( "$SAMPLE_DATA\Iris.jmp" );
model = dt << RunScript( "Nominal Logistic" );
fd = Formula Depot();
model << Save Probability Formula;
mp = fd << Add Formula From Column( Table( dt ), Columns( 11 ) ); // "Most Likely Species"
mp << Generate Python Code;

```

### Copy Formulas as Functions

**構文:** obj &lt;&lt; Copy Formulas as Functions( &lt;Formulas(name|index|reference, ...)&gt; )

**説明:** 計算式デポに保存されている計算式を、Function関数に変換し、そのコードをクリップボードにコピーする。

**JMP追加されたバージョン:** 14

```jsl


dt = Open( "$SAMPLE_DATA\Iris.jmp" );
model = dt << RunScript( "Nominal Logistic" );
fd = Formula Depot();
predictor = model << Publish Probability Formulas;
fd << Copy Formulas as Functions( Formulas( predictor ) );
Wait( 0 );
text = Get Clipboard();
Show( text );

```

### Copy Formulas as Transforms

**構文:** obj &lt;&lt; Copy Formulas as Transforms( &lt;Table(name|reference)&gt;, &lt;Formulas(name|index|reference, ...)&gt; )

**説明:** 計算式デポに保存されている計算式をTransform Columnステートメントで囲んだものを、クリップボードにコピーする。

```jsl


dt = Open( "$SAMPLE_DATA\Iris.jmp" );
model = dt << RunScript( "Nominal Logistic" );
fd = Formula Depot();
model << Publish Probability Formulas;
fd << Copy Formulas as Transforms(
    // English: Formulas("Fit Nominal Logistic - Species")
	Formulas( 1 )
);
Wait( 0 );
text = Get Clipboard();
Show( text );

```

### Copy Scripts

**構文:** obj &lt;&lt; Copy Scripts( &lt;Formulas(name|index|reference, ...)&gt; )

**説明:** 計算式デポに保存されている計算式を、クリップボードにコピーする。

```jsl


dt = Open( "$SAMPLE_DATA\Iris.jmp" );
model = dt << RunScript( "Nominal Logistic" );
fd = Formula Depot();
predictor = model << Publish Probability Formulas;
fd << Copy Scripts( Formulas( predictor ) );
Wait( 0 );
text = Get Clipboard();
Show( text );

```

### Generate C Code

**構文:** obj &lt;&lt; Generate C Code( &lt;Formulas(name|index|reference, ...)&gt;, &lt;No Editor&gt; )

**説明:** 計算式デポに保存されている計算式から、C言語のコードを生成する。その結果は、エディターウィンドウに表示される。ただし、「No Editor」オプションが指定されている場合には文字型変数へ出力される。

```jsl


fd = Formula Depot();
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
md = dt << Run Script( "Nominal Logistic" );
predictor = md << Publish Probability Formulas;
// Save code to string 
c_code = fd << Generate C Code( Formulas( predictor ), No Editor );
// shortcut using predictor reference
// c_code = predictor << Generate C Code(No Editor);
Save Text File( "$TEMP\logist.c", c_code );
// Open code in editor window
fd << Generate C Code( Formulas( predictor ) );

```

### Generate JavaScript Code

**構文:** obj &lt;&lt; Generate JavaScript Code( &lt;Formulas(name|index|reference, ...)&gt;, &lt;No Editor&gt; )

**説明:** 計算式デポに保存されている計算式から、JavaScriptのコードを生成する。その結果は、エディターウィンドウに表示される。ただし、「No Editor」オプションが指定されている場合には文字型変数へ出力される。

```jsl


fd = Formula Depot();
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
md = dt << Run Script( "Nominal Logistic" );
predictor = md << Publish Probability Formulas;
// Save code to string 
js_code = fd << Generate JavaScript Code( Formulas( predictor ), No Editor );
// shortcut using predictor reference
// js_code = predictor << Generate JavaScript Code(No Editor);
Save Text File( "$TEMP\logist.js", js_code );
// Open code in editor window
fd << Generate JavaScript Code( Formulas( predictor ) );

```

### Generate Python Code

**構文:** obj &lt;&lt; Generate Python Code( &lt;Formulas(name|index|reference, ...)&gt;, &lt;No Editor&gt; )

**説明:** 計算式デポに保存されている計算式から、Pythonのコードを生成する。その結果は、エディターウィンドウに表示される。ただし、「No Editor」オプションが指定されている場合には文字型変数へ出力される。

```jsl


fd = Formula Depot();
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
md = dt << Run Script( "Nominal Logistic" );
predictor = md << Publish Probability Formulas;
// Save code to string 
py_code = fd << Generate Python Code( Formulas( predictor ), No Editor );
// shortcut using predictor reference
// py_code = predictor << Generate Python Code(No Editor);
Save Text File( "$TEMP\logist.py", py_code );
// Open code in editor window
fd << Generate Python Code( Formulas( predictor ) );

```

### Generate SAS Code

**構文:** obj &lt;&lt; Generate SAS Code( &lt;Formulas(name|index|reference, ...)&gt;, &lt;No Editor&gt; )

**説明:** 現モデルのスクリプトを、クリップボードにコピーする。

```jsl


fd = Formula Depot();
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
md = dt << Run Script( "Nominal Logistic" );
predictor = md << Publish Probability Formulas;
// Save code to string 
sas_code = fd << Generate SAS Code( Formulas( predictor ), No Editor );
// shortcut using predictor reference
// sas_code = predictor << Generate SAS Code(No Editor);
Save Text File( "$TEMP\logist.sas", sas_code );
// Open code in editor window
fd << Generate SAS Code( Formulas( predictor ) );

```

### Generate SQL Code

**構文:** obj &lt;&lt; Generate SQL Code( &lt;Formulas(name|index|reference, ...)&gt;, &lt;No Editor&gt;, &lt;QUOTE_STYLE&gt; )

**説明:** 計算式デポに保存されている計算式から、SQLのコード（SQLのSELECTステートメントで記述されたコード）を生成する。その結果は、エディタウィンドウに表示される。ただし、「No Editor」オプションが指定されている場合には、文字型変数へ出力される。QUOTE_STYLEには、サポートされているSQLデータベース(MySQL, Impala, Hiveなど)の名前を指定するか、もしくは、引用符の付け方（"Underline", "Backquote", "Braket", "Doublequote"のいずれか）を指定する。

```jsl


fd = Formula Depot();
dt = Open( "$SAMPLE_DATA/Liver Cancer.jmp" );
md = dt << Run Script( "Elastic Net Poisson, BIC" );
mp_obs = md << xpath( "//OutlineBox" );
scriptables = Filter Each( {ob}, mp_obs << Get Scriptable Object(), !Is Empty( ob ) );
mp = scriptables[2];
predictor = mp << Publish Prediction Formula;
// Save code to string 
sql_code = fd << Generate SQL Code( Formulas( 1 ), No Editor );
// shortcut using predictor reference
// sql_code = predictor << Generate SQL Code(No Editor);
Save Text File( "$TEMP\genreg.sql", sql_code );
// Open code in editor window
fd << Generate SQL Code( Formulas( predictor ), "MySQL" );

```

### Model Comparison

**構文:** obj &lt;&lt; Model Comparison( &lt;Table(name|reference)&gt;, &lt;Formulas(name|index|reference, ...)&gt; )

**説明:** 既存のデータテーブルに基づき、計算式デポに保存されているモデルを比較する。

```jsl


fd = Formula Depot();
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
nl_md = dt << Run Script( "Nominal Logistic" );
nl_mp = nl_md << Publish Probability Formulas;
nn_md = Neural(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Informative Missing( 0 ),
	Validation Method( "Holdback", 0.3333 ),
	Fit( NTanH( 3 ) )
);
nn_mp = nn_md << Publish Prediction Formula;
mc_plat = fd << ModelComparison( Formulas( 1, 2 ) );
// Other options:
// mds = {"Fit Nominal Logistic - Species", "Neural - Species"};
// fd << ModelComparison( Formulas( mds ) );
// fd << ModelComparison( Formulas( 1 ), Formulas( 2 ) );
// fd << ModelComparison; // all models

```

### Profiler

**構文:** obj &lt;&lt; Profiler( &lt;Table(name|reference)&gt;, &lt;Formulas(name|index|reference, ...)&gt; )

**説明:** 計算式デポに保存されているモデルのプロファイルを描く。

```jsl


fd = Formula Depot();
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
nl_md = dt << Run Script( "Nominal Logistic" );
nl_mp = nl_md << Publish Probability Formulas;
nn_md = Neural(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Informative Missing( 0 ),
	Validation Method( "Holdback", 0.3333 ),
	Fit( NTanH( 3 ) )
);
nn_mp = nn_md << Publish Prediction Formula;
fd << Profiler( Formulas( nl_mp, nn_mp ) );

```

### Remove Model Comparison

**構文:** obj &lt;&lt; Remove Model Comparison

**説明:** 現在の計算式デポから「モデルの比較」レポートを削除する。

```jsl


fd = Formula Depot();
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
nl_md = dt << Run Script( "Nominal Logistic" );
nl_md << Publish Probability Formulas;
fd << Model Comparison();
fd << Remove Model Comparison();

```

### Remove Profiler

**構文:** obj &lt;&lt; Remove Profiler

**説明:** 現在の計算式デポから「プロファイル」レポートを削除する。

```jsl


fd = Formula Depot();
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
nl_md = dt << Run Script( "Nominal Logistic" );
nl_md << Publish Probability Formulas;
fd << Profiler();
fd << Remove Profiler();

```

### Rename Formula Depot

**構文:** obj &lt;&lt; Rename Formula Depot( text )

```jsl


fd = Formula Depot();
fd << Rename Formula Depot( "New Name" );

```

### Run Scripts

**構文:** obj &lt;&lt; Run Scripts( &lt;Table(name|reference)&gt;, &lt;Formulas(name|index|reference, ...)&gt; )

**説明:** 計算式デポに保存されている計算式を、データテーブルの列に保存する。

```jsl


// Create a Formula Depot to store the model
dt1 = Open( "$SAMPLE_DATA\Iris.jmp" );
model = dt1 << RunScript( "Nominal Logistic" );
fd1 = Formula Depot();
model << Publish Probability Formulas;
fd_script = fd1 << Get Script;
Save Text File( "$TEMP\fd.jrp", Char( Name Expr( fd_script ) ) );
// Clean-up
Close( dt1, NoSave );
fd1 << Close Window;
// Read FD from disk
Open( "$TEMP\fd.jrp" );
fd2 = Formula Depot[1];
// Create columns from stored model; usually this is a new table with a compatible schema
dt2 = Open( "$SAMPLE_DATA\Iris.jmp" );
fd2 << Run Scripts( Table( dt2 ), Formulas( 1 ) );

```

### Show Scripts

**構文:** obj &lt;&lt; Show Scripts( &lt;Formulas(name|index|reference, ...)&gt; )

**説明:** 計算式デポに保存されている予測式のスクリプトを、計算式ウィンドウに新たに保存する(すでに計算式ウィンドウが開かれている場合は、予測式のスクリプトをそこに追加する）。

```jsl


dt = Open( "$SAMPLE_DATA\Iris.jmp" );
model = dt << RunScript( "Nominal Logistic" );
fd = Formula Depot();
model << Publish Probability Formulas;
fd << Show Scripts( Formulas( 1 ) );

```

