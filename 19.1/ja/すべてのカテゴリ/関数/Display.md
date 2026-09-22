# Display



### Alignment Cell Box

**構文:** y = Alignment Cell Box( row, col, nRow, nCol, &lt;Sides(left+2*top+4*right+8*bottom=15)&gt; &lt;RowSpan(nRow matrix)&gt; &lt;ColSpan(nCol matrix)&gt;, matrix or list of strings )

**説明:** Alignment Grid Boxの内側に含まれている行(または列)を含んだディスプレイボックスの参照を戻す。

**JMP追加されたバージョン:** 19

```jsl

New Window( "Crosstab",	Alignment Grid Box(		Alignment Cell Box( 0, 1, 1, 1, ColSpan( [3] ), {"sex"} ),		Alignment Cell Box( 1, 1, 1, 3, {"F", "M", "Total"} ),		Alignment Cell Box( 3, 0, 1, 1, Sides( 0 ), ColSpan( [4] ), {"age"} ),		Alignment Cell Box( 4, 0, 6, 1, {"  12", "  13", "  14", "  15", "  16", "  17"} ),		Alignment Cell Box(			4,			1,			6,			3,			{"5 (28%)", "3 (14%)", "8 (20%)", "3 (17%)", "4 (18%)", "7 (18%)", "5 (28%)",			"7 (32%)", "12 (30%)", "2 (11%)", "5 (23%)", "7 (18%)", "2 (11%)", "1 (5%)",			"3 (8%)", "1 (6%)", "2 (9%)", "3 (8%)"}		)	));

```

### Alignment Grid Box

**構文:** y = Alignment Grid Box( alignment cell boxes )

**説明:** Alignment Cell Boxを含められるディスプレイボックスの参照を戻す。

**JMP追加されたバージョン:** 19

```jsl

New Window( "Crosstab",	Alignment Grid Box(		Alignment Cell Box( 0, 1, 1, 1, ColSpan( [3] ), {"sex"} ),		Alignment Cell Box( 1, 1, 1, 3, {"F", "M", "Total"} ),		Alignment Cell Box( 3, 0, 1, 1, Sides( 0 ), ColSpan( [4] ), {"age"} ),		Alignment Cell Box( 4, 0, 6, 1, {"  12", "  13", "  14", "  15", "  16", "  17"} ),		Alignment Cell Box(			4,			1,			6,			3,			{"5 (28%)", "3 (14%)", "8 (20%)", "3 (17%)", "4 (18%)", "7 (18%)", "5 (28%)",			"7 (32%)", "12 (30%)", "2 (11%)", "5 (23%)", "7 (18%)", "2 (11%)", "1 (5%)",			"3 (8%)", "1 (6%)", "2 (9%)", "3 (8%)"}		)	));

```

### Alignment Multi Box

**構文:** y = Alignment Multi Box( row, col, nRow, nCol, nElements, list-of-nElements-matrices or empty values, list-of-nElements-lists of strings or empty values )

**説明:** Alignment Grid Boxの内側に含まれている、各セルに複数の要素を含むディスプレイボックスの参照を戻す。

**JMP追加されたバージョン:** 19

```jsl

New Window( "Alignment MultiBox",	Border Box( Top( 15 ), Left( 15 ), Right( 15 ), Bottom( 15 ),		Alignment Grid Box(			Alignment Multi Box( 0, 1, 1, 1, 2, {}, {{"Freq"}, {"Share"}} ),			Alignment Cell Box( 0, 2, 1, 1, ColSpan( [2] ), {"sex"} ),			Alignment Cell Box( 1, 2, 1, 2, ColSpan( [1, 1] ), {"F", "M"} ),			Alignment Cell Box( 2, 0, 1, 1, RowSpan( [7] ), {"age"} ),			Alignment Cell Box(				2,				1,				7,				1,				{"12", "13", "14", "15", "16", "17", "Total Responses"}			),			Alignment Multi Box(				2,				2,				6,				2,				2,				{[5 3, 5 2, 2 1, 3 4, 7 5, 1 2], [0.277 0.167, 0.278 0.111, 0.111 0.055,				0.136 0.181, 0.318 0.227, 0.045 0.090]},				{Empty(), Empty()}			),			Alignment Cell Box( 8, 2, 1, 2, [18 22] )		)	));

```

### Alpha Shape

**構文:** ashape = Alpha Shape(Triangulation)

**説明:** 指定された三角分割に対して、そこから計算されるアルファシェイプを戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );triang = Triangulation( X( :X, :Y ), Y( :POP ) );ashape = Alpha Shape( triang );

```

### Border Box

**構文:** y = Border Box( &lt;Left( pix )&gt;, &lt;Right( pix )&gt;, &lt;Top( pix )&gt;, &lt;Bottom( pix )&gt;, &lt;Sides( 0 )&gt;, displayBoxArg )

**説明:** 引数に指定されたディスプレイボックスの周りに隙間を追加したディスプレイボックスを戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

New Window( "Example",	Lineup Box( N Col( 1 ), spacing( 10 ),		Text Box( "Quadratic Formula" ),		Border Box( Left( 10 ), Right( 10 ), bottom( 10 ), top( 10 ), sides( 15 ),			Expr As Picture( Expr( (-b + Sqrt( b ^ 2 - 4 * a * c )) / (2 * a) ) )		)	));

```

### Box Plot Seg

**構文:** b = Box Plot Seg(&lt;data&gt;, &lt;frequency&gt;, &lt;weight&gt;, &lt;vertical=0|1&gt;)

**説明:** 指定されたデータの箱ひげ図を描くディスプレイセグメントを戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

New Window( "Box Plot Seg Example",	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 5 ), Box Plot Seg( [1, 2, 3, 4] ) ));g[AxisBox( 2 )] << delete;seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));

```

### Busy Light

**構文:** y = Busy Light( &lt; &lt;&lt;Automatic(0|1)&gt;, &lt;Size(x, y)&gt;, &lt; &lt;&lt;Disable&gt; )

**説明:** ビジー状態を示す、回転するイメージを作成する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

New Window( "Example", Busy Light( <<automatic ) );

```

### Button Box

**構文:** y = Button Box( title, script )

**説明:** タイトル(title)がついたボタンが表示されたディスプレイボックスを戻す。このボタンがクリックされると、引数scriptが実行される。

**JMP追加されたバージョン:** バージョン14より前

```jsl

New Window( "Example", Button Box( "Press Me", Print( "Pressed." ) ) );

```

### Calendar Box

**構文:** y = Calendar Box()

**説明:** カレンダーコントロールを含むディスプレイボックスを戻す。カレンダーは、1つの日付(および時間：オプション)の選択をサポートしている。

**JMP追加されたバージョン:** バージョン14より前

```jsl

New Window( "Calendar Box Example", Calendar Box() );

```

### Check Box

**構文:** y = Check Box( {item, ...}, &lt;script&gt; )

**説明:** 1つまたは複数のチェックボックスが表示されたディスプレイボックスを戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

New Window( "Example", cb = Check Box( {"Good"}, Show( cb << Get() ) ) );

```

### Clear Global Window Handler

**構文:** Clear Global Window Handler()

**説明:** ［Set Global Window Handle］ハンドラーによって設定されたウィンドウハンドラーをクリアする。

**JMP追加されたバージョン:** 17

```jsl

Set Global Window Handler(	Function( {window},		Print( window << get window title() );		window << close window();	));New Window( "My Window" );Clear Global Window Handler();

```

### Col Box

**構文:** y = Col Box( title, boxes )

**説明:** 指定されたディスプレイボックスから成る、列ボックスを戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

dt = New Window( "Example",	exx = 1;	exy = 4;	exz = 8;	Table Box(		String Col Box( "strings", {"x", "y", "z"} ),		Col Box(			"boxes",			Slider Box( 0, 10, exx, Show( exx ) ),			Slider Box( 0, 10, exy, Show( exy ) ),			Slider Box( 0, 10, exz, Show( exz ) )		)	););

```

### Col List Box

**構文:** y = Col List Box( &lt;Data Table( name )&gt;, &lt;all&gt;|&lt;character|numeric&gt;, &lt;width( pix )&gt;, &lt;grouped&gt;, &lt;maxSelected( n )&gt;, &lt;nlines( n )&gt;, &lt;MaxItems( n )&gt;, &lt;MinItems( n )&gt;, &lt;onChange( expr )&gt;, &lt; &lt;&lt;Modeling Type({"Any","Continuous","Nominal","Ordinal","Multiple Response","Unstructured Text","Vector","None","Row State"}) &gt;, &lt; &lt;&lt; Set Data Type(Any|Numeric|Character)&gt;, &lt;script&gt; )

**説明:** データテーブル列を選択するためのリストボックスを表示したディスプレイボックスを戻す。特殊な尺度を許可する場合、または尺度を制約する場合は、<<Modeling Typeメッセージを使用します。デフォルト値の"Any"では、従来型の尺度("Continuous"、"Nominal"、"Ordinal")の列をすべて使用できます。

**JMP追加されたバージョン:** バージョン14より前

**例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );New Window( "Col List Box Example 1", Col List Box( all, width( 250 ), maxSelected( 1 ) ) );

```

**例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );New Window( "Col List Box Example 2",	Col List Box( all, <<Set Data Type( "numeric" ), width( 250 ), maxSelected( 1 ) ));

```

**例 3**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );New Window( "Col List Box Example 3",	H List Box(		ll1 = Col List Box( all ),		Button Box( "Add", ll2 << append( ll1 << get selected ) ),		ll2 = Col List Box( "numeric", MaxItems( 1 ), nlines( 1 ) ),		Button Box( "Remove", ll2 << remove selected )	));

```

### Col Span Box

**構文:** y = Col Span Box( title, children )

**説明:** 子の列を結合したヘッダを持つ列を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

New Window( "test",	Table Box(		Col Span Box(			"Col Span",			String Col Box( "col 1", {"A", "B", "C"} ),			Number Col Box( "col2", {1, 2, 3} )		)	));

```

### Column Dialog

**構文:** y = Column Dialog( &lt;var = ColList("Label", &lt;Min Col(min)&gt;, &lt;Max Col(max)&gt;, &lt;Width(w)&gt;, &lt;Data Type("Numeric"|"Character"|"Any")&gt;, &lt;Modeling Type({&lt;"Continuous"&gt;, &lt;"Nominal"&gt;, &lt;"Ordinal"&gt;, &lt;"None"&gt;, &lt;"Multiple Response"&gt;, &lt;"Unstructured Text"&gt;, &lt;"Vector"&gt;})&gt; )&gt;, &lt;var=EditText("string")&gt;, &lt;var=EditNumber(num)&gt;, &lt;var=Check Box( "Text", 0|1)&gt;, &lt;var=RadioButtons( "a", "b" )&gt;, &lt;var=Combo Box("choice1", ...)&gt;, &lt;HList(box, ...)&gt;, &lt;VList(box, ...)&gt;, &lt;LineUp(ncol, box, ...)&gt;, &lt;Text Box("string")&gt;, &lt;Window Title("title")&gt;, &lt;Window Icon("icon string")&gt;, &lt;Dialog Description("description")&gt;, &lt;Recall(script)&gt;, &lt;Help Script(script)&gt;)

**説明:** ユーザに対し、データテーブル内の列を選択するためのモーダルウィンドウを表示する。複数の種類の入力ボックスとウィンドウを配置するためのコンテナボックスを指定できる。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );Column Dialog(	ex y = ColList( "Y", Min Col( 1 ), Max Col( 2 ), Data Type( "Numeric" ) ),	ex x = ColList( "X", Max Col( 1 ), Modeling Type( {"Continuous", "Multiple Response"} ) ),	Line Up( 2,		Text Box( "Alpha" ), ex = EditNumber( .05 ),		Text Box( "Beta" ), ey = EditText( "xyz" )	),	HList( cb = Check Box( "check", 1 ) ),	HList( combo = Combo Box( "option1", "option2" ) ),	HList( rb = RadioButtons( "a", "b" ) ),	Window Title( "Custom Launch Dialog" ),	Window Icon( "RowState" ), //icon string can be a full path file name of an image file.	Dialog Description( "The dialog before a groundbreaking discovery!" ),	Recall Script(		Function( {dlgBox},			dlgBox[list box box( 2 )] << remove all;			dlgBox[list box box( 1 )] << clear selection;			dlgBox[list box box( 1 )] << set selected( 3 );			dlgBox[Button Box( 2 )] << click;		)	),	Help Script( Web( "http://www.jmp.com/" ) ));

```

### Combo Box

**構文:** y = Combo Box( {item &lt;( tipstr )&gt;, ...}, &lt;script&gt; )

**説明:** ポップアップメニューが付いたコンボボックスのディスプレイボックスを戻す。オプションでコンボボックス内の各項目にツールヒントを付けることもできる。その場合、各項目のテキスト文字列の後ろに、ツールヒントのテキストを括弧で囲んで入力する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

New Window( "Example",	cb = Combo Box( {"single", "double", "triple"("tool tip")}, Show( cb << Get() ) ));

```

### Context Box

**構文:** y = Context Box( displayBox, ... )

**説明:** スコープを確立するディスプレイボックスを戻す。ディスプレイウィンドウの異なった部分を、個別に評価・実行することができる。

**JMP追加されたバージョン:** バージョン14より前

```jsl

New Window( "Example",	Context Box(		Outline Box( "Picker",			V List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) )		)	));

```

### Contour Seg

**構文:** me = Contour Seg( Triangulation, [ levels ], &lt; zColor([colors], &lt;Cycle Colors|Interpolate Colors&gt;) &gt;, &lt; Transparency([] | t) &gt;

**説明:** 三角分割 (Triangulation) のオブジェクトを引数とし、等高線を描くディスプレイセグメントを戻す。各水準の色を、行列またはリストによってオプション指定できる。透明度も、数字または行列で指定できる。

**JMP追加されたバージョン:** バージョン14より前

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );tri = Triangulation( X( :X, :Y ), Y( :POP ) );{xx, yy} = tri << Get Points();New Window( "Contour Seg Example",	g = Graph Box(		X Scale( Min( xx ) - .1, Max( xx ) + .1 ),		Y Scale( Min( yy ) - .1, Max( yy ) + .1 ),		Contour Seg(			tri,			[0, 400, 1000, 2000, 9000],			zColor( 5 + [64 32 0 16 48] ),			Transparency( [1, 1, 1, 1, 1] )		)	));

```

### Current Report

**構文:** y = Current Report( &lt;Project(title|index|box|window)&gt; )

**説明:** 現在のプロジェクトにある現在のレポートのディスプレイボックスへの参照を戻す。(スクリプトがプロジェクト内で実行されていない場合はプロジェクトはなし。)



プロジェクトを指定するには、オプションのProject()引数でtitle、index、display box、またはwindowオブジェクトを記述する。スクリプトがプロジェクト内で実行されていて、プロジェクトの指定をしない場合は、Project(0)を使用する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Current Report();

```

### Current Window

**構文:** y = Current Window( &lt;Project(title|index|box|window)&gt; )

**説明:** 現在のプロジェクトにある現在のウィンドウへの参照を戻す。(スクリプトがプロジェクト内で実行されていない場合はプロジェクトはなし。)



プロジェクトを指定するには、オプションのProject()引数でtitle、index、display box、またはwindowオブジェクトを記述する。スクリプトがプロジェクト内で実行されていて、プロジェクトの指定をしない場合は、Project(0)を使用する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

New Window( "Example",	Outline Box( "Example Outline",		Text Box( "Example Text" ),		Button Box( "Close", Current Window() << Close Window )	));

```

### Data Filter Context Box

**構文:** y = Data Filter Context Box( displayBox )

**説明:** ローカルデータフィルタが適用される範囲を決めるディスプレイボックスを戻す。 Data Filter Context Box 関数の中にデータフィルタを配置すると、Data Filter Context Box関数内にあるプラットフォームまたはボックスの間でデータフィルタが共有される。

**JMP追加されたバージョン:** バージョン14より前

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );New Window( "Shared Local Filter",	Data Filter Context Box(		H List Box(			dt << Data Filter( Local, Add Filter( columns( :sex ), Where( :sex == "F" ) ) ),			dt << Bubble Plot(				X( :weight ),				Y( :height ),				Fit To Window( "On" ),				Sizes( :age ),				Title Position( 0, 0 )			),			dt << Graph Builder(				Size( 525, 456 ),				Show Control Panel( 0 ),				Fit To Window( "On" ),				Variables( X( :weight ), Y( :age ) ),				Elements( Box Plot( X, Y, Legend( 4 ) ) ),			)		)	));

```

### Data Filter Source Box

**構文:** y = Data Filter Source Box( displayBox )

**説明:** 選択フィルタのソースとなるディスプレイボックスを戻す。Data Filter Source Boxに含まれるレポートで選択された行のみが、共通のData Filter Context Boxに含まれるその他のレポートの中の分析に含まれる。

**JMP追加されたバージョン:** バージョン14より前

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );New Window( "Selection Filter",	Data Filter Context Box(		H List Box(			Data Filter Source Box(				Graph Builder(					Size( 208, 207 ),					Show Control Panel( 0 ),					Show Legend( 0 ),					Variables( X( :age ) ),					Elements( Bar( X, Legend( 3 ) ) ),					SendToReport(						Dispatch( {}, "Graph Builder", OutlineBox, {Set Title( "Filter" )} )					)				)			),			Platform(				Current Data Table(),				Bubble Plot(					X( :weight ),					Y( :height ),					Sizes( :age ),					Title Position( 0, 0 )				)			)		)	));

```

### Data Grid Box

**構文:** y = Data Grid Box( )

**説明:** データテーブルを含むことのできるディスプレイボックスを戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );New Window( "Example", x = Data Grid Box() );x << Set Data Table( dt );

```

### Data Table Box

**構文:** y = Data Table Box( datatable )

**説明:** 指定されたデータテーブルを表す、テーブルボックスを戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );New Window( "Example", Data Table Box( dt ) );

```

### Data Table Col Box

**構文:** y = Data Table Col Box( col )

**説明:** 指定されたデータテーブルの列を表す、列ボックスを戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );New Window( "Example",	Table Box( Data Table Col Box( :name ), Data Table Col Box( :height ) ));

```

### Data Table Plot Col Box

**構文:** y = Data Table Plot Col Box( col )

**説明:** 指定されたデータテーブル列に対応するPlot Col Boxを戻す。オプションとして、2番目と3番目のデータテーブル列を使用して管理限界を作成する。

**JMP追加されたバージョン:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );New Window( "Example",	Table Box( Data Table Plot Col Box( :weight ), Data Table Plot Col Box( :height ) ));

```

### Dialog

**構文:** y = Dialog( specification )

**説明:** モーダルウィンドウを表示する。この関数は将来廃止されるため、New Window関数に<<Modal引数を指定して使用のこと。

**JMP追加されたバージョン:** バージョン14より前

**例 1**

```jsl

// See Example 2 for the deprecated Dialog equivalentIf(	ex = New Window( "Dialog() example",		<<Modal,		<<Return Result,		V List Box(			H List Box( "Set this value", variable = Number Edit Box( 42 ) ),			H List Box( Button Box( "OK" ), Button Box( "Cancel" ) )		)	);	ex["button"] == 1;,	ex["variable"],	"CANCEL");

```

**例 2**

```jsl

// DeprecatedIf(	ex = Dialog(		Title( " Dialog() example" ),		vlist(			hlist( "Set this value", variable = EditNumber( 42 ) ),			hlist( Button( "OK" ), Button( "Cancel" ) )		)	);	ex["button"] == 1;,	ex["variable"],	"CANCEL");

```

### Excerpt Box

**構文:** y = Excerpt Box( rptnum, lstSubscripts )

**説明:** レポートから一部分を抜粋し、その抜粋したディスプレイボックスを戻す。レポートの番号をrptnumで、ディスプレイのリストをlstSubscriptsで指定する。lstSubscriptsに指定する番号は、既に抜粋したディスプレイを除いた後の番号。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );New Window( "Example",	V Sheet Box(		<<Hold( Bivariate( Y( :weight ), X( :height ), Fit Line() ) ),		<<Hold(			Distribution(				Automatic Recalc( 1 ),				Continuous Distribution(					Column( :height ),					Horizontal Layout( 1 ),					Vertical( 0 ),					Outlier Box Plot( 0 )				)			)		),		<<Hold( Treemap( Categories( :age ) ) ),		<<Hold(			Bubble Plot(				X( :height ),				Y( :weight ),				Sizes( :age ),				Coloring( :sex ),				Circle Size( 6.226 ),				All Labels( 0 )			)		),		H Sheet Box(			Sheet Part( "weight by height", Excerpt Box( 1, {Picture Box( 1 )} ) ),			Sheet Part( "height", Excerpt Box( 2, {Picture Box( 1 )} ) )		),		H Sheet Box(			Sheet Part( "", Excerpt Box( 3, {Picture Box( 1 )} ) ),			Sheet Part( "height by weight", Excerpt Box( 4, {Picture Box( 1 )} ) )		)	));

```

### Expr As Picture

**構文:** y = Expr As Picture( expr( ... ), &lt;width in pixels&gt;, &lt;Max Matrix Size( dim )&gt; )

**説明:** 指定した式を計算式の画像として含むイメージを戻す。デフォルトの幅は600ピクセル、デフォルトの行列の最大サイズは100。

**JMP追加されたバージョン:** バージョン14より前

```jsl

New Window( "Example",	Lineup Box( N Col( 1 ), spacing( 10 ),		Text Box( "Quadratic Formula" ),		Border Box( Left( 10 ), Right( 10 ), bottom( 10 ), top( 10 ), sides( 15 ),			Expr As Picture( Expr( (-b + Sqrt( b ^ 2 - 4 * a * c )) / (2 * a) ) )		)	));

```

### Filter Col Selector

**構文:** y = Filter Col Selector(&lt;Data Table(name)&gt;, &lt;width(pixels)&gt;, &lt;nlines(n)&gt;, &lt;script&gt;, &lt;onchange(expr)&gt;)

**説明:** 項目のリストを含んだディスプレイボックスを戻す。コントロールが列のフィルタリングを可能にする。

**JMP追加されたバージョン:** バージョン14より前

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );New Window( "Col List Box Example", fontobj = lb = Filter Col Selector( width( 250 ) ) );

```

### Get Project

**構文:** project = Get Project( title|index|box|window )

**説明:** 現在開いている特定のプロジェクトへの参照を戻す。プロジェクトはtitle、index、またはboxで指定する。

**JMP追加されたバージョン:** バージョン14より前

**例 1**

```jsl

Open( "$SAMPLE_PROJECTS/Big Class.jmpprj" );Open( "$SAMPLE_PROJECTS/Sports.jmpprj" );                             Print( Get Project( 2 ) << Get Window Title() );

```

**例 2**

```jsl

Open( "$SAMPLE_PROJECTS/Big Class.jmpprj" );Open( "$SAMPLE_PROJECTS/Sports.jmpprj" );                             project = Get Project( "Big Class" );

```

### Get Project List

**構文:** projectList = Get Project List()

**説明:** 現在開いているすべてのプロジェクトのリストを戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

New Project();Open( "$SAMPLE_PROJECTS/Big Class.jmpprj" );                              Print( Get Project List() << Get Window Title() );

```

### Get Window

**構文:** window = Get Window( &lt;Project(title|index|box|window)&gt;, &lt;Type(string)&gt;, title|index|box )

**説明:** Title、index、またはboxで指定されたウィンドウへの参照を戻す。



ウィンドウの検出は現在のプロジェクト内のみに限定される。(スクリプトがプロジェクト内で実行されていない場合はプロジェクトはなし。)



プロジェクトを指定するには、オプションのProject()引数でtitle、index、display box、またはwindowオブジェクトを記述する。スクリプトがプロジェクト内で実行されていて、プロジェクトの指定をしない場合は、Project(0)を使用する。



オプションのType()引数で"Data Tables"、 "Journals"、"Reports"、"Dialogs"のいずれかを指定することにより、対象をそのタイプのウィンドウのみに限定できる。

**JMP追加されたバージョン:** 14

**例 1**

```jsl

Open( "$SAMPLE_DATA\Big Class.jmp" );                                        window = Get Window( "Big Class" );

```

**例 2**

```jsl

project = Open( "$SAMPLE_PROJECTS\Big Class.jmpprj" );                             window = Get Window( Project( project ), "Big Class" );

```

### Get Window List

**構文:** windowList = Get Window List( &lt;Project(title|index|box|window)&gt;, &lt;Type(string)&gt; )

**説明:** 現在開いているすべてのウィンドウのリストを戻す。



リストに含まれるものは、現在のプロジェクト内のウィンドウに限定される。(スクリプトがプロジェクト内で実行されていない場合はプロジェクトはなし。)



プロジェクトを指定するには、オプションのProject()引数でtitle、index、display box、またはwindowオブジェクトを記述する。スクリプトがプロジェクト内で実行されていて、プロジェクトの指定をしない場合は、Project(0)を使用する。



オプションのType()引数で"Data Tables"、 "Journals"、"Reports"、"Dialogs"のいずれかを指定することにより、対象をそのタイプのウィンドウのみに限定できる。

**JMP追加されたバージョン:** 14

**例 1**

```jsl

Print( Get Window List() << Get Window Title() );

```

**例 2**

```jsl

project = Open( "$SAMPLE_PROJECTS\Big Class.jmpprj" );                             Print( Get Window List( Project( project ) ) << Get Window Title() );

```

**例 3**

```jsl

project = Open( "$SAMPLE_PROJECTS\Big Class.jmpprj" );                             Print( Get Window List( Project( project ), Type( "Data Tables" ) ) << Get Window Title() );

```

### Global Box

**構文:** box = Global Box( name )

**説明:** グローバル変数の値が表示されたディスプレイボックスを作成する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

ex = .6;New Window( "Example", Global Box( ex ) );

```

### Graph

**構文:** y = Graph Box( props, script )

**説明:** X軸およびY軸のあるグラフを含んだディスプレイボックスを戻す。名前付き引数には、title("title")、XScale(low,high)、YScale(low,high)、FrameSize(h,v)、XName("x")、yName("y")、DoubleBuffer、SuppressAxesを指定できる。

**JMP追加されたバージョン:** バージョン14より前

```jsl

New Window( "Example",	Graph Box(		Frame Size( 300, 300 ),		Marker( Marker State( 3 ), [11 44 77], [75 25 50] );		Pen Color( "Blue" );		Line( [10 30 70], [88 22 44] );	));

```

### Graph 3D Box

**構文:** y = Graph 3D Box()

**説明:** (試験段階)3次元散布図のためのディスプレイボックスを戻す。他のディスプレイボックスと一緒に使って、独自のレポートを作成することができる。

**JMP追加されたバージョン:** バージョン14より前

```jsl

x3d = Graph 3D Box(	framesize( 300, 300 ),	Xname( "X Axis" ),	Yname( "Y Axis" ),	Zname( "Z Axis" ));New Window( "Graph3DBox Example", x3d );x3d << addmarkers( /*x*/[20 20 20 20], /*y*/[20 20 20 20], /*z*/[10 20 30 40] );x3d << AddVector(	[60 60 60]/*from*/,	[90 60 60, 60 90 60, 60 60 90]/*to*/,	ShaftThickness( [.1] ),	FromThickness( [.2] ),	ToThickness( [.3] ),	ShaftColor( [-255] ),	FromColor( [-16711680] ),	ToColor( [-65280] ),	Facets( Round ),	FromCap( Sphere ),	toCap( Point ));

```

### Graph Box

**構文:** y = Graph Box( props, script )

**説明:** X軸およびY軸のあるグラフを含んだディスプレイボックスを戻す。名前付き引数には、title("title")、XScale(low,high)、YScale(low,high)、FrameSize(h,v)、XName("x")、yName("y")、DoubleBuffer、SuppressAxesを指定できる。

**JMP追加されたバージョン:** バージョン14より前

```jsl

New Window( "Example",	Graph Box(		Frame Size( 300, 300 ),		Marker( Marker State( 3 ), [11 44 77], [75 25 50] );		Pen Color( "Blue" );		Line( [10 30 70], [88 22 44] );	));

```

### H Center Box

**構文:** y = H Center Box( &lt;childbox&gt; )

**説明:** childboxを水平方向に中央揃えで配置したディスプレイボックスを戻す。水平方向の長さは、子ディスプレイボックスのうち、最大のものに設定され、それ以外の子ディスプレイボックスは水平方向に中央揃えされる。

**JMP追加されたバージョン:** バージョン14より前

```jsl

New Window( "test",	H List Box(		V Center Box( Text Box( "V+V" ) ),		V List Box(			Text Box( "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm" ),			H Center Box( Text Box( "H+H" ) ),			Text Box( "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm" ),			Text Box( "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm" ),			Text Box( "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm" ),			Text Box( "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm" )		)	));

```

### H List Box

**構文:** y = H List Box( &lt;Align( center|bottom )&gt;, displayBox, ... )

**説明:** 引数によって与えられる複数のディスプレイボックスを横方向にレイアウトしたディスプレイボックスを戻す。<<Holdメッセージにより抜粋元となるレポートをどのシートが保持するかを示す。オプションのAlign引数は、ディスプレイボックス内の配置を右寄せ(bottom)または中央寄せ(center)にすることを指定する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

New Window( "Example",	Outline Box( "Picker", H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ) ));

```

### H Scroll Box

**構文:** y = H Scroll Box( &lt;Size( x )&gt;, displayBox )

**説明:** 横方向のスクロールバーがついたディスプレイボックスを戻す。中により大きな子ボックスを配置することができる。

**JMP追加されたバージョン:** バージョン14より前

```jsl

New Window( "Example",	Outline Box( "Picker",		H Scroll Box(			Size( 200 ),			H List Box(				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) )			),			<<Set Stretch( "Window", "Window" )		)	));

```

### H Sheet Box

**構文:** y = H Sheet Box( &lt;&lt;Hold( rpt ), displayBox, ... )

**説明:** 引数によって与えられる複数のディスプレイボックスを横方向にレイアウトしたディスプレイボックスを戻す。<<Holdメッセージにより抜粋元となるレポートをどのシートが保持するかを示す。オプションのAlign引数は、ディスプレイボックス内の配置を右寄せ(right)または中央寄せ(center)にすることを指定する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );New Window( "Example",	V Sheet Box(		<<Hold( Bivariate( Y( :weight ), X( :height ), Fit Line() ) ),		<<Hold(			Distribution(				Automatic Recalc( 1 ),				Continuous Distribution(					Column( :height ),					Horizontal Layout( 1 ),					Vertical( 0 ),					Outlier Box Plot( 0 )				)			)		),		<<Hold( Treemap( Categories( :age ) ) ),		<<Hold(			Bubble Plot(				X( :height ),				Y( :weight ),				Sizes( :age ),				Coloring( :sex ),				Circle Size( 6.226 ),				All Labels( 0 )			)		),		H Sheet Box(			Sheet Part( "weight by height", Excerpt Box( 1, {Picture Box( 1 )} ) ),			Sheet Part( "height", Excerpt Box( 2, {Picture Box( 1 )} ) )		),		H Sheet Box(			Sheet Part( "", Excerpt Box( 3, {Picture Box( 1 )} ) ),			Sheet Part( "height by weight", Excerpt Box( 4, {Picture Box( 1 )} ) )		)	));

```

### H Splitter Box

**構文:** y = H Splitter Box( &lt;Size(x,y)&gt;, displayBox, ... )

**説明:** 引数によって与えられる複数のディスプレイボックスを横方向にレイアウトし、仕切りをつけたディスプレイボックスを戻す。子のサイズはSplitter Boxの幅または高さの割合で指定する。オプションのSize引数は、最上位のSplitter Boxに対する指定(ボックス全体のサイズ)で、子ボックスはそれに対する割合での指定となる。

**JMP追加されたバージョン:** バージョン14より前

```jsl

New Window( "Splitter",	V Splitter Box(		Size( 800, 600 ),		H Splitter Box( graph = Graph Box(), Script Box(), <<Sizes( {0.6, 0.4} ) ),		H Splitter Box(			pict = Picture Box( Open( "$SAMPLE_IMAGES/tile.jpg", jpg ) ),			spacer = Spacer Box(),			<<Sizes( {0.4, 0.6} )		)	));graph[FrameBox( 1 )] << Set Stretch( "Window", "Window" );pict << Set Min Size( 100, 100 );pict << Set Max Size( 500, 500 );pict << Set Stretch( "Window", "Window" );spacer << Set Fill( 1 );spacer << Color( "Red" );spacer << Set Stretch( "Window", "Window" );

```

### Hier Box

**構文:** y = Hier Box( text, Hier Box( ... ), Hier Box( ... ), ... )

**説明:** 階層ツリーのためのディスプレイボックスを戻す。引数textはノードの名前またはテキスト編集ボックスText Edit Box。

**JMP追加されたバージョン:** バージョン14より前

```jsl

New Window( "Example",	Hier Box(		Text Edit Box( "Cause 1" ),		Hier Box( Text Edit Box( "Subcause 1.1" ), <<direction( 1 ) ),		Hier Box( Text Box( "Subcause 1.2" ) ),		<<Change Type( Fishbone ),		<<direction( 1 )	));

```

### Hist Seg

**構文:** b = Hist Seg([data], &lt;[freq data]&gt;,&lt;[weight data]&gt;, &lt;vertical=0|1&gt;, &lt;Row States()&gt;)

**説明:** ヒストグラムセグメントを戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );xx = Column( "height" ) << Get Values;rows = N Row( xx );New Window( "Hist Seg Example",	g = Graph Box(		Frame Size( 300, 120 ),		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),		Y Scale( 0, .2 ),		Hist Seg( xx, J( rows, 1 ), J( rows, 1 ), 1, Row States( dt ) )	));

```

### Icon Box

**構文:** Box = Icon Box( "Name" )

**説明:** アイコンを表示するディスプレイボックスを作成する。引数nameには、JMPアイコン名か画像へのパスを指定できる。

**JMP追加されたバージョン:** バージョン14より前

**例 1**

```jsl

New Window( "Example",	ex1 = Icon Box( "Popup" ),	ex2 = Icon Box( "Locked" ),	ex3 = Icon Box( "Labeled" ),	ex4 = Icon Box( "Sub" ),	ex5 = Icon Box( "Excluded" ),	ex6 = Icon Box( "Hidden" ),	ex7 = Icon Box( "Continuous" ),	ex8 = Icon Box( "Nominal" ),	ex9 = Icon Box( "Ordinal" ));

```

**例 2**

```jsl

New Window( "Example with Path", ex = Icon Box( "$SAMPLE_IMAGES/pi.gif" ) );

```

### If Box

**構文:** box = If Box( 0|1, displayBoxArgs )

**説明:** 指定した引数のディスプレイボックスを条件付きで表示するディスプレイボックスを戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

New Window( "Example",	H List Box(		englishBox = If Box( 1, Text Box( "Good day" ) ),		frenchBox = If Box( 0, Text Box( "Bon Jour" ) )	));Wait( 5 );englishBox << Set( 0 );frenchBox << Set( 1 );

```

### If Seg

**構文:** seg = If Seg(&lt;state=0|1&gt;)

**説明:** 子のディスプレイセグメントを表示したり非表示にしたりするディスプレイセグメントを戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];New Window( "Lines Seg Example",	g = Graph Box( If Seg( true, <<append( Lines Seg( lines ) ) ) ));

```

### Journal Box

**構文:** y = Journal Box( journalText )

**説明:** ジャーナルに保存されている指定方法からディスプレイボックスを構築する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );sample = Distribution( Y( :height ) );sampjourn = sample << Get Journal;New Window( "Distribution of Height",	Text Box( "Here is the result of the distribution platform for Height." ),	Journal Box( sampjourn ));

```

### Line Seg

**構文:** ls = Line Seg(x values, y values, &lt;Row States( dt | dt,[rows] | dt,{{rows}, ...} | {states} ) &gt;, &lt; Sizes( s ) &gt; )&gt;)

**説明:** 指定された(x,y)座標を通る、繋がった線分を描くディスプレイセグメントを戻す。

**JMP追加されたバージョン:** バージョン14より前

**例 1**

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( "Line Seg" ));

```

**例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y, RowStates( dt ) ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( "Line Seg" ));

```

**例 3**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example",	g = Graph Box( Line Seg( x, y, RowStates( dt, {1, 3, 5} ) ) ));frame = g[FrameBox( 1 )];seg = (frame << Find Seg( "Line Seg" ));

```

### Lines Seg

**構文:** ls = Lines Seg([x1 y1 x2 y2,...])

**説明:** 指定された(x,y)座標を終点とする複数の線分を描くディスプレイセグメントを戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( "Lines Seg" ));

```

### Lineup Box

**構文:** y = Lineup Box( &lt;NCol( nc )&gt;, &lt;Spacing( pixels, &lt;vspace&gt; )&gt;, displayBoxArgs, ... )

**説明:** 各ボックスをnc列に配置したディスプレイボックスを戻す。オプションの引数Spacingは、ディスプレイボックスの周囲における水平と垂直の空白を指定する。引数vspaceが指定された場合、vspaceは垂直方向の空白、pixelsは水平方向の空白を示す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

New Window( "Example",	Lineup Box( N Col( 1 ), spacing( 10 ),		Text Box( "Quadratic Formula" ),		Border Box( Left( 10 ), Right( 10 ), bottom( 10 ), top( 10 ), sides( 15 ),			Expr As Picture( Expr( (-b + Sqrt( b ^ 2 - 4 * a * c )) / (2 * a) ) )		)	));

```

### Lineup Ruler Box

**構文:** y = Lineup Box( &lt;Widths( {width1, width2, ...} )&gt;, displayBoxArgs, ... )

**説明:** 中にあるLineup Boxの列の幅を設定するディスプレイボックスを戻す。

**JMP追加されたバージョン:** 16

```jsl

New Window( "Lineup Ruler",	lrb = Lineup Ruler Box(		Widths( {120, 200} ),		Outline Box( "Customer 1",			Lineup Box( N Col( 2 ),				Text Box( "First Name:" ),				Text Edit Box(),				Text Box( "Last Name:" ),				Text Edit Box(), 			)		),		Outline Box( "Customer 2",			Lineup Box( N Col( 2 ),				Text Box( "First Name:" ),				Text Edit Box(),				Text Box( "Last Name:" ),				Text Edit Box(), 			)		)	));

```

### List Box

**構文:** y = List Box( {item, ...}, &lt;width( pixels )&gt;, &lt;maxSelected( 9999 )&gt;, &lt;nlines( 12 )&gt;, &lt;script&gt; )

**説明:** 複数の項目を含むリストボックスを表示するためのディスプレイボックスを戻す。item自身が、項目名と、尺度または並べ替え順序("Ordinal"または"Ascending"など)を示す文字列の2項目からなるリストである場合は、リストボックス内でその項目の隣に該当するアイコンが表示される。

**JMP追加されたバージョン:** バージョン14より前

**例 1**

```jsl

New Window( "Example", b = List Box( {"single", "double", "triple"}, nlines( 10 ) ) );

```

**例 2**

```jsl

New Window( "Example",	lb = List Box(		{{"First Item", "continuous"}, {"Second Item", "ordinal"}, {"Third Item", "nominal"}},		width( 200 ),		max selected( 2 ),		nlines( 6 )	));

```

### Marker Seg

**構文:** me = Marker Seg( x, y, &lt; Row States( dt | dt,[rows] | dt,{{rows}, ...} | {states} ) &gt;, &lt; Sizes( s ) &gt; )

**説明:** 指定された(x,y)座標にマーカーを描くディスプレイセグメントを戻す。

**JMP追加されたバージョン:** バージョン14より前

**例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );xx = Column( "height" ) << Get Values;sz = Column( "age" ) << get values;aa = [=> 0];yy = J( N Rows( xx ), 1, 0 );For( ii = 1, ii <= N Rows( xx ), ii++,	aa[xx[ii]]++;	yy[ii] = aa[xx[ii]];);New Window( "Marker Seg Example",	g = Graph Box(		Frame Size( 300, 120 ),		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),		Y Scale( 0, 10 ),		Marker Seg( xx, yy, Row States( dt ), sizes( sz ) )	));

```

**例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );xx = [1 2 3 4 5];yy = [2 3 4 5 6];New Window( "Marker Seg Example",	g = Graph Box(		Frame Size( 300, 120 ),		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),		Y Scale( 0, 10 ),		Marker Seg( xx, yy, Row States( dt, {3, 4, 11, 7, 13} ) )	));

```

**例 3**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );xx = [1 2 3 4 5];yy = [2 3 4 5 6];New Window( "Marker Seg Example",	g = Graph Box(		Frame Size( 300, 120 ),		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),		Y Scale( 0, 10 ),		Marker Seg( xx, yy, Row States( dt, 11 :: 15 ) )	));

```

**例 4**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );xx = [1 2 3 4 5];yy = [2 3 4 5 6];New Window( "Marker Seg Example",	g = Graph Box(		Frame Size( 300, 120 ),		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),		Y Scale( 0, 10 ),		Marker Seg(			xx,			yy,			Row States( dt, {{1, 2, 3}, {4, 5}, {6}, {7, 12, 15, 9}, {21, 8}} )		)	));

```

**例 5**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );xx = [1 2 3 4 5];yy = [2 3 4 5 6];New Window( "Marker Seg Example",	g = Graph Box(		Frame Size( 300, 120 ),		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),		Y Scale( 0, 10 ),		Marker Seg(			xx,			yy,			Row States(				{Color State( "Blue" ), Color State( "Orange" ), Color State( "Green" ),				Color State( "Purple" ), Color State( "Red" )}			)		)	));

```

### Matrix Box

**構文:** y = Matrix Box( matrix, &lt; &lt;&lt;Column Names( "c1", "c2", ... )&gt;, &lt; &lt;&lt;Row Names( "r1", "r2", ... )&gt; )

**説明:** 数値の行列を表示するディスプレイボックスを戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

New Window( "Example", Matrix Box( [11 22 33, 44 55 66], <<RowNames( "First", "Second" ) ) );

```

### MouseBox

**構文:** box = MouseBox( displayBoxArgs )

**説明:** マウス動作に対するコールバックを作成できるボックスを戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

New Window( "Example",	MouseBox(/*first sibling*/Text Box( "drag from here" ),		<<setDragText( "hello" ),		<<setTooltip( "source" ),		<<setDragEnable( 1 ),		<<setDragBegin(/* decide if a drag is allowed */			Function( {this, clickpt},				"magic text";/* 0.0 to prevent the drag.  1.0 is the same as 'this<<getDragText' */			)		),		<<setDragEnd(/* clean up after a drag finishes or cancels */			Function( {this, clickpt, how}, /* how=move,copy,ignore */				If(					how != "ignore" & !Is Empty( this << getDestBox ) & this << getDestBox					 == this << sib, /* the getDestBox check makes sure the destination of the drag-and-drop was my sibling and not some other program beyond our control */					(this << child) << setText(						"done!" /* 'move' suggests clearing the source */					)				)			)		)	),	MouseBox(/*second sibling*/Text Box( "drag to here" ),		<<setTooltip( "destination" ),		<<setDropEnable( 1 ),		<<setDropTrack(/* decide if dropping is allowed, before the drop.  The getSourceBox check makes sure the source of the drag-and-drop is my sibling, and not some other program */			Function( {this, clickpt},				If( !Is Empty( this << getSourceBox ) & this == (this << getSourceBox) << sib,					1, /*else*/0				)			)		),		<<setDropCommit(/* accept the drop */Function( {this, clickpt, text},				(this << child) << setText( text )			)		)	));

```

### Move to Project

**構文:** Move to Project(&lt;Source(project)&gt;, &lt;Destination(project)&gt;, &lt;Windows({list of windows to move})&gt;)

**説明:** 1つまたは複数のウィンドウをプロジェクトに移動、またはプロジェクト間で移動させる。SourceまたはDestinationのいずれか1つのみを指定できる。指定しなかったほうは、現在のプロジェクトとなる。(ウィンドウを現在のプロジェクトに移動させるには、Sourceのみを指定する。ウィンドウを現在のプロジェクトの外に出すにはDestinationのみを指定する。)Windows引数にデータテーブルを指定した場合、そのデータテーブルから作成されたレポートも一緒に移動する。Windows引数を指定しない場合は、移動元のプロジェクトのすべてのウィンドウが対象となる。

**JMP追加されたバージョン:** 14

**例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );report = dt << Run Script( "Bivariate" );                              project = New Project();                              Move to Project( destination( project ), windows( {report} ) );

```

**例 2**

```jsl

project = Open( "$SAMPLE_PROJECTS/Sports.jmpprj" );Move to Project( Source( project ) );project << Close Window();

```

### New Image

**構文:** img = New Image() img = New Image( width, height ) img = New Image( pathname ) img = New Image( picture ) img = New Image( matrix of JSL color pixels ) img = New Image( rgb|r|g|rgba, {i, i, i} )

**説明:** JSLコマンドで編集可能な新しいイメージを戻す。既存のイメージファイルへのパスを指定する場合、ファイルは.JPG、.PNG、.GIF、.BMP、または.TIF形式でなければならない。

**JMP追加されたバージョン:** バージョン14より前

**例 1**

```jsl

image = New Image( "$SAMPLE_IMAGES/windmap.png" );New Window( "new image", image );

```

**例 2**

```jsl

pic = Open( "$SAMPLE_IMAGES/windmap.png", png );image2 = New Image( pic );New Window( "new image", image2 );

```

**例 3**

```jsl

image3 = New Image();mat = J( 256, 256 );For( y = 0, y < 256, y++,	For( x = 0, x < 256, x++,		mat[y * 256 + x] = RGB Color( y / 255.0, 0.0, x / 255.0 )	));image3 << Set Pixels( mat );New Window( "image", image3 );

```

### New Project

**構文:** project = new Project( &lt;project messages&gt; )

**説明:** 新しい空のプロジェクトウィンドウを作成する。プロジェクトへの複数のメッセージを引数として含めることも可能で、ワンステップでプロジェクトを作成できる。

**JMP追加されたバージョン:** バージョン14より前

**例 1**

```jsl

project = New Project();

```

**例 2**

```jsl

project = New Project(	Run Script(		dt = Open( "$SAMPLE_DATA/Big Class.jmp" );		dt << Run Script( "Bivariate" );	));

```

**例 3**

```jsl

project = New Project(	Run Script(		Open( "$SAMPLE_DATA/Big Class.jmp" );		New Window( "Big Class - Bivariate of weight by height",			Bivariate( Y( :weight ), X( :height ) )		);	));

```

**例 4**

```jsl

project = New Project(	Set Bookmarks(		{File( "$SAMPLE_DATA/Animals.jmp" ), File( "$SAMPLE_DATA/Big Class.jmp" )}	),	Run Script(		Open( "$SAMPLE_DATA/Big Class.jmp" );		New Window( "Big Class - Bivariate of weight by height",			Bivariate( Y( :weight ), X( :height ) )		);	));

```

**例 5**

```jsl

project = New Project(	Run Script( Open( "$SAMPLE_SCRIPTS/demoCorr.jsl", Set Window ID( "demoCorr" ), Script ) ),	Set Layout(		H Splitter Box(			<<Set Sizes( {0.15, 0.85} ),			Tab Page Box( Title( "Window List" ), Window ID( "Windows" ) ),			V Splitter Box(				<<Set Sizes( {0.7, 0.3} ),				Tab Page Box( Title( "demoCorr" ), Window ID( "demoCorr" ) ),				Tab Page Box( Title( "Log" ), Window ID( "Log" ) )			)		)	));

```

### New Window

**構文:** w = New Window( title, &lt; &lt;&lt;Type("Report" | "Dialog" | "Modal Dialog" | "Journal" | "Launcher" | "Script")&gt;, &lt; &lt;&lt; Return Result&gt;, &lt; &lt;&lt; On Open(expr | function | method)&gt;, &lt; &lt;&lt; On Close(expr | function | method)&gt;, &lt; &lt;&lt;On Validate(expr | function | method)&gt;, &lt; &lt;&lt;Show Menu(0 | 1)&gt;, &lt; &lt;&lt;Show Toolbars(0 | 1)&gt;, &lt; &lt;&lt;Suppress AutoHide(0 | 1)&gt;, &lt; &lt;&lt;Window View("Visible" | "Invisible")&gt;, &lt; &lt;&lt;Language("C" | "JavaScript" | "JSL" | "JSON" | "Python" | "R" | "SAS" | "SQL" | "Text" | "XML")&gt;, &lt; &lt;&lt;Size(x, y)&gt;, displayBox | script)

**説明:** 指定のディスプレイボックスまたはスクリプトを含むウィンドウを作成する。Typeオプションが指定されていない場合、デフォルトでレポートウィンドウが作成される。Type("Modal Dialog")で作成したウィンドウは、ダイアログに応答するまで実行を停止する。On Open、On Validate、およびReturn Resultは、モーダルウィンドウにのみ使用できる。On Open()の式・関数・クラスメソッドは、ウィンドウが作成されたときに評価される。On Close()がfalseを戻すと、ウィンドウは閉じない。On Validate()の式・関数・クラスメソッドは、[OK]ボタンがクリックされたときに評価される。式がtrueを戻すと、ウィンドウは閉じ、そうでない場合、ウィンドウは開いたままになる。Return Resultは、ウィンドウを閉じたときの戻り値を、廃止予定のDialog()関数の戻り値に合うように変更する。ツールバーをサポートしているウィンドウの場合は、Show Toolbarsを使ってデフォルトの動作を変更できる。オプションShow MenuとSuppress AutoHideはWindowsでのみ使用できる。Window View("Invisible")オプションは、Modal Dialog以外のどのウィンドウにも使用できる。Type("Script")のウィンドウは、<<Languageオプションが指定されていない限り、JSLスクリプトのウィンドウを作成する。

**JMP追加されたバージョン:** バージョン14より前

#### [Windows] ツールバーとメニュー

```jsl

// Compare settings for toolbars and menus// Suppress AutoHide is Windows onlyg = Graph Box(	Frame Size( 300, 300 ),	Marker( Marker State( 3 ), [11 44 77], [75 25 50] );	Pen Color( "Blue" );	Line( [10 30 70], [88 22 44] ););New Window( "Default - menu and toolbars", g );New Window( "Menu, no toolbars, suppress autohide",	Suppress AutoHide( 1 ),	Show Toolbars( 0 ),	g);New Window( "Toolbars, no menu", Show Menu( 0 ), g );New Window( "No menu, no toolbars", Show Menu( 0 ), Show Toolbars( 0 ), g );

```

#### Invisible

```jsl

g = Graph Box(	Frame Size( 300, 300 ),	Marker( Marker State( 3 ), [11 44 77], [75 25 50] );	Pen Color( "Blue" );	Line( [10 30 70], [88 22 44] ););w = New Window( "My Window's Title", <<WindowView( "Invisible" ), g );p = w << Get Picture();w << Close Window;psize = p << Size;New Window( "picture", Outline Box( "picture size: " || Char( psize ), p ) );

```

#### Pythonスクリプト

```jsl

pyscript = "\[import numpy as npa = np.arange(15).reshape(3, 5)]\";ex = New Window( "Script example", <<Type( "Script" ), <<Language( "Python" ), pyscript );

```

#### スクリプト

```jsl

script = JSL Quote(Names Default To Here(1);dt=Open("$SAMPLE_DATA/Big Class.jmp");dt << Run Script("Bivariate"););ex = New Window( "Script example", <<Type( "Script" ), script );

```

#### ダイアログ

```jsl

ex = New Window( "Dialog example",	<<Type( "Dialog" ),	V List Box(		Panel Box( "Sample data dialog",			Button Box( "Open Sample Data", Open( "$SAMPLE_DATA/Big Class.jmp" ) )		),		H List Box( Button Box( "Close", Try( ex << CloseWindow ) ) )	));

```

#### モーダルダイアログ

```jsl

ex = New Window( "Modal Dialog example",	<<Type( "Modal Dialog" ),	<<Return Result,	<<On Validate(		num = myEditBox << Get;		If( num >= 1 & num <= 100, // in range			myEditBox << Background Color( "Background" ); // this field does not need attention			1; //the number is good, validate		, // else out of range			myEditBox << Background Color( "Light Yellow" ); // this field needs attention			0; // the number is bad, do not validate		) // the result of this if(...) is the OnValidate( ) answer, 0 or 1		;	),	V List Box(		Text Box( "Enter a value between [1,100]:" ),		H List Box( myEditBox = Number Edit Box( 42 ) ),		H List Box( Button Box( "OK" ), Button Box( "Cancel" ) )	));//  the Modal window must be closed before the following code runsIf(	ex["button"] == 1 // not canceled, // then show the value	Write( ex["myEditBox"] ); // note: myEditBox is the name of the variable holding the text edit box, // else report no selection	Write( "CANCEL" ); // cancel button or red X was pressed);

```

#### レポート

```jsl

g = Graph Box(	Frame Size( 300, 300 ),	Marker( Marker State( 3 ), [11 44 77], [75 25 50] );	Pen Color( "Blue" );	Line( [10 30 70], [88 22 44] ););New Window( "My Window's Title", g );

```

### Number Col Box

**構文:** y = Number Col Box( title, numbers )

**説明:** 引数numbersで指定された数値を表示するディスプレイボックスを戻す。引数はリストまたは行列。

**JMP追加されたバージョン:** バージョン14より前

```jsl

New Window( "Example",	Outline Box( "Table",		Table Box(			String Col Box( "names", {"x", "y", "z"} ),			Number Col Box( "values", {11, 22, 33} ),			Plot Col Box( "values", {11, 22, 33} )		)	));

```

### Number Col Edit Box

**構文:** y = Number Col Edit Box( title, numbers )

**説明:** 引数numbersで指定された数値を表示するディスプレイボックスを戻す。引数はリストまたは行列。

**JMP追加されたバージョン:** バージョン14より前

```jsl

x = y = z = 0;New Window( "Example",	Modal,	<<Return Result,	Outline Box( "Table", Table Box( neb = Number Col Edit Box( "values", {x, y, z} ) ) ));

```

### Number Edit Box

**構文:** y = Number Edit Box( initValue, &lt;width&gt; )

**説明:** 数値のみを入力できる編集ボックスを戻す。オプションの引数widthを指定することにより、ボックスの幅を文字数で設定できる。

**JMP追加されたバージョン:** バージョン14より前

```jsl

New Window( "Example", neb = Number Edit Box( 5 ) );x = neb << get;

```

### Outline Box

**構文:** y = Outline Box( title, &lt;command script pairs list&gt;, displayBox, ... )

**説明:** レポート内にアウトラインを作成し、そのディスプレイボックスへの参照を戻す。アウトラインノードにメニューを含めるには、command script pairs list(メニューコマンドと関連スクリプトを指定したリスト)を指定する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

New Window( "Example",	Outline Box( "Picker",		{"Show label value", Show( teb << get text )},		H List Box( Text Box( "Label:" ), teb = Text Edit Box( Char( 213 ) ) )	));

```

### Page Break Box

**構文:** Page Break Box()

**説明:** ページ区切りを強制するディスプレイボックスを作成する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

New Window( "Example",	Graph Box(		Frame Size( 300, 300 ),		Marker( Marker State( 3 ), [11 44 77], [75 25 50] );		Pen Color( "Blue" );		Line( [10 30 70], [88 22 44] );	),	Page Break Box(),	Graph Box(		Frame Size( 300, 300 ),		Marker( Marker State( 3 ), [77 44 11], [75 25 50] );		Pen Color( "Red" );		Line( [70 30 10], [88 22 44] );	));

```

### Panel Box

**構文:** y = Panel Box( title, displayBoxArgs )

**説明:** 引数で指定された複数のディスプレイボックスを線で囲み、ラベルを付けたディスプレイボックスを戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

New Window( "Example",	Tab Box(		"alpha",		Panel Box( "panel", Text Box( "text" ) ),		"beta",		Popup Box( {"x", ex = 1, "y", ex = 2} )	));

```

### Picture Box

**構文:** pict = Picture Box( Picture Object )

**説明:** グラフィックピクチャオブジェクトを含んだディスプレイボックスを作成する。画像を開いてから参照するか、または、引数Picture Objectの箇所にファイルパスを指定したOpen関数を指定する。

**JMP追加されたバージョン:** バージョン14より前

**例 1**

```jsl

New Window( "Example",	Picture Box( Open( "$SAMPLE_IMAGES/black rhino footprint.jpg", jpg ) ));

```

**例 2**

```jsl

pict = Open( "$SAMPLE_IMAGES/black rhino footprint.jpg", jpg );New Window( "Example", Picture Box( pict ) );

```

### Pie Seg

**構文:** ps = Pie Seg(&lt;{ xorigin, yorigin }&gt;, &lt;radius&gt;, &lt;style("pie", "ring", "coxcomb")&gt;, values)

**説明:** 指定されたoriginとradiusを持ち、行列の形式で与えられた値を示す円のセグメントを作成する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Summarize( a = by( :age ), c = count, sumHt = Sum( :height ), sumWt = Sum( :weight ) );New Window( "Pie Seg",	Graph Box(		Pie Seg( style( "ring" ), {25, 50}, .25, sumHt ),		Pie Seg( {75, 50}, .25, sumWt )	));

```

### Platform

**構文:** y = Platform( dataTable, script )

**説明:** 指定されたデータテーブルに対して、指定のスクリプトを評価し、結果のディスプレイボックスを戻す。戻されたディスプレイボックスは、ディスプレイツリーに挿入することができる。

**JMP追加されたバージョン:** バージョン14より前

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );New Window( "Platform example",	H List Box(		Platform(			dt,			Bubble Plot( X( :weight ), Y( :height ), Sizes( :age ), Title Position( 0, 0 ) )		),		Platform(			dt,			Bubble Plot( X( :weight ), Y( :age ), Sizes( :height ), Title Position( 0, 0 ) )		)	));

```

### Plot Col Box

**構文:** y = Plot Col Box( title, numbers )

**説明:** 数字をグラフ化したディスプレイボックスを戻す。引数numbersはリストまたは行列。

**JMP追加されたバージョン:** バージョン14より前

```jsl

New Window( "Example",	Outline Box( "Table",		Table Box(			String Col Box( "names", {"x", "y", "z"} ),			Number Col Box( "values", {11, 22, 33} ),			Plot Col Box( "values", {11, 22, 33} )		)	));

```

### Poly Seg

**構文:** ps = Poly Seg(x values, y values)

**説明:** 指定された(x,y)座標を通るポリゴン(多角形)を描くディスプレイセグメントを戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Poly Seg Example", g = Graph Box( Poly Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( "Poly Seg" ));

```

### Popup Box

**構文:** y = Popup Box( {label1, script1, ...} )

**説明:** ラベル/スクリプトのペアで定義されたポップアップメニューがあるディスプレイボックスを戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

New Window( "Example",	Tab Box(		"alpha",		Popup Box( {"x", ex = 1, "y", ex = 2} ),		"beta",		Panel Box( "panel", Text Box( "text" ) )	));

```

### Radio Box

**構文:** y = Radio Box( {item, ...}, &lt;script&gt; )

**説明:** 複数のラジオボタンが表示されたディスプレイボックスを戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

New Window( "Example",	rb = Radio Box( {"single", "double", "triple"}, Show( rb << Get() ) ));

```

### Range Slider Box

**構文:** y = Range Slider Box( minValue, maxValue, lowVariable, highVariable, script )

**説明:** 範囲スライダコントロールを表示するディスプレイボックスを戻す。スライダの範囲はminValue～maxValue。2つのスライダの位置が変わると、値がlowVariableおよびhighVariableに代入され、スクリプトが実行される。

**JMP追加されたバージョン:** バージョン14より前

```jsl

sliderLowerValue = .5;sliderUpperValue = .7;New Window( "Example",	Panel Box( "Range Slider",		tb1 = Text Box( "Low Value: " || Char( sliderLowerValue ) ),		tb2 = Text Box( "High Value: " || Char( sliderUpperValue ) ),		sb = Range Slider Box(			0,			1,			sliderLowerValue,			sliderUpperValue,			tb1 << Set Text( "Low Value: " || Char( sliderLowerValue ) );			tb2 << Set Text( "High Value: " || Char( sliderUpperValue ) );		)	));

```

### Report

**構文:** y = Report( platform object )

**説明:** プラットフォームからのレポート用の表示ツリーへの参照を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );Report( Bivariate( Y( :weight ), X( :height ), Fit Line ) );

```

### Scene Box

**構文:** box = Scene Box( xsize, ysize )

**説明:** 3次元グラフィック用のディスプレイボックスを戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Scene = Scene Box( 600, 600 );Scene << backgroundcolor( 0 );Scene << showarcball( always );New Window( "See HelloWorld.jsl in sample scripts", Scene );Scene << perspective( 45, .2, 20 );Scene << Translate( 0.0, 0.0, -4.5 );ex = Scene Display List();ex << color( .9, .9, .9 );ex << Text( center, middle, .3, "Hello World" );Scene << arcball( ex, 1.5 );Scene << update;

```

### Scene Display List

**構文:** list = Scene Display List()

**説明:** 3次元グラフィックのためのディスプレイリストを戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

ex = Scene Display List();ex << color( .9, .9, .9 );ex << Text( center, middle, .3, "Hello World" );exScene = Scene Box( 600, 600 );exScene << backgroundcolor( 0 );exScene << showarcball( always );New Window( "See HelloWorld.jsl in sample scripts", exScene );exScene << perspective( 45, .2, 20 );exScene << Translate( 0.0, 0.0, -4.5 );exScene << arcball( ex, 1.5 );exScene << update;

```

### Script Box

**構文:** y = Script Box( &lt;s&gt;, &lt;"C" | "JavaScript" | "JSL" | "JSON" | "Python" | "R" | "SAS" | "SQL" | "Text" | "XML"&gt;, &lt;width&gt;, &lt;height&gt; )

**説明:** スクリプトを編集するためのディスプレイボックスを戻す。デフォルトでは、エディタにおける強調表示と動作はJSLの構文に従う。

**JMP追加されたバージョン:** バージョン14より前

#### JSL

```jsl

Script = Script Box( "// This window is editable.", "JSL", 300, 100 );New Window( "This is a script box", Script );

```

#### Pythonスクリプト

```jsl

pyscript = "\[import numpy as npa = np.arange(15).reshape(3, 5)]\";Script = Script Box( pyscript, "Python", 300, 100 );New Window( "This is a python script box", Script );

```

### Scroll Box

**構文:** y = Scroll Box( &lt;Size( x, y )&gt;, displayBox )

**説明:** スクロールバー付きのディスプレイボックスを戻す。中により大きな子ボックスを配置することができる。

**JMP追加されたバージョン:** バージョン14より前

```jsl

New Window( "Example",	Outline Box( "Picker",		Scroll Box(			Size( 200, 100 ),			V List Box(				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) )			),			<<Set Stretch( "Window", "Window" )		)	));

```

### Set Global Window Handler

**構文:** Set Global Window Handler( Handler Function )

**説明:** 新しいウィンドウが作成されるたびに呼び出される関数を設定する。

**JMP追加されたバージョン:** 17

```jsl

Set Global Window Handler(	Function( {window},		Print( window << get window title() );		window << close window();	));New Window( "My Window" );Clear Global Window Handler();

```

### Shape Seg

**構文:** me = Shape Seg( {Path(&lt;path&gt;), ...}, &lt; Row States( dt | dt,[rows] | dt,{{rows}, ...} | {states} ) &gt; )

**説明:** パスで指定された様々な形状をもつ複数のセグメントを、オブジェクトとして戻す。指定のパスに沿って線を描いたり、もしくは、内側を塗りつぶしたりする。パスは、N x 3の行列または文字列で指定する。N x 3の行列で指定する場合は、x座標、y座標、および、各点のフラグで構成する。フラグの値は、0(コントロール点)、1(移動)、2(線分)、3(3次ベジエ曲線)または負の値(点がパスの終点でもある場合)。パスを文字列で指定する場合は、SVG構文を用いる。

**JMP追加されたバージョン:** バージョン14より前

```jsl

New Window( "Shape Seg Example",	Graph Box(		Shape Seg(			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),			Path( "M20,20 C20,60 60,60 60,20 Z" )}		)	));

```

### Sheet Part

**構文:** y = Sheet Part( title, childbox )

**説明:** 指定された引数のタイトルとchildboxから構成されたディスプレイボックスを戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );New Window( "Example",	V Sheet Box(		<<Hold( Bivariate( Y( :weight ), X( :height ), Fit Line() ) ),		<<Hold(			Distribution(				Automatic Recalc( 1 ),				Continuous Distribution(					Column( :height ),					Horizontal Layout( 1 ),					Vertical( 0 ),					Outlier Box Plot( 0 )				)			)		),		<<Hold( Treemap( Categories( :age ) ) ),		<<Hold(			Bubble Plot(				X( :height ),				Y( :weight ),				Sizes( :age ),				Coloring( :sex ),				Circle Size( 6.226 ),				All Labels( 0 )			)		),		H Sheet Box(			Sheet Part( "weight by height", Excerpt Box( 1, {Picture Box( 1 )} ) ),			Sheet Part( "height", Excerpt Box( 2, {Picture Box( 1 )} ) )		),		H Sheet Box(			Sheet Part( "", Excerpt Box( 3, {Picture Box( 1 )} ) ),			Sheet Part( "height by weight", Excerpt Box( 4, {Picture Box( 1 )} ) )		)	));

```

### Slider Box

**構文:** box = Slider Box(minValue, maxValue, variable, script, &lt;set width(n)&gt;, &lt;rescale slider(minValue, maxValue)&gt;)

**説明:** スライダコントロールを表示するディスプレイボックスを戻す。スライダの範囲はminValue～maxValue。スライダの位置が変わると、値がvariableに代入され、スクリプトが実行される。

**JMP追加されたバージョン:** バージョン14より前

```jsl

sliderValue = .6;New Window( "Example",	Panel Box( "Slider Box",		tb = Text Box( "Value: " || Char( sliderValue ) ),		sb = Slider Box(			0,			1,			sliderValue,			tb << Set Text( "Value: " || Char( sliderValue ) )		)	));

```

### Spacer Box

**構文:** y = Spacer Box( &lt;Size( x, y )&gt;, &lt;Color( c )&gt;)

**説明:** 複数のディスプレイボックスの間にスペースを作成するディスプレイボックスを戻す。これは、Lineup Boxにおいて、空白のセルを作成するのにも用いることができる。引数のSizeはピクセル数。ColorはJSLの有効な色。

**JMP追加されたバージョン:** バージョン14より前

```jsl

New Window( "Example",	Lineup Box( N Col( 3 ),		Text Box( "a" ),		Spacer Box(),		Text Box( "b" ),		Spacer Box(),		Text Edit Box( "Under Spacer Box" )	));

```

### Spin Box

**構文:** y = Spin Box( &lt;script&gt; )

**説明:** 上向き/下向きの矢印ボタンを持つディスプレイボックスを戻す。script引数は、クリックされた矢印の方向を示す引数と共に呼び出される(負は下向き、正は上向き)。絶対値1が1回のクリックを示し、2以上の値は、アクションの繰り返しを示す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

New Window( "Example",	Lineup Box(		2,		nb = Number Edit Box( 3 ),		sb = Spin Box( Function( {value}, nb << Increment( value ) ) )	));nb << Set Increment( 1 );

```

### String Col Box

**構文:** y = String Col Box( title, {strings} )

**説明:** 引数stringsで指定された文字列を表示するディスプレイボックスを戻す。引数は文字列のリスト。

**JMP追加されたバージョン:** バージョン14より前

```jsl

New Window( "Example",	Outline Box( "Table",		Table Box(			String Col Box( "names", {"x", "y", "z"} ),			Number Col Box( "values", {11, 22, 33} ),			Plot Col Box( "values", {11, 22, 33} )		)	));

```

### String Col Edit Box

**構文:** y = String Col Edit Box( title, {strings} )

**説明:** 引数stringsで指定された文字列を表示するディスプレイボックスを戻す。引数は文字列のリスト。

**JMP追加されたバージョン:** バージョン14より前

```jsl

a = b = c = "";New Window( "Example",	Modal,	<<Return Result,	Outline Box( "Table", Table Box( seb = String Col Edit Box( "names", {a, b, c} ) ) ));

```

### Tab Box

**構文:** y = Tab Box( Tab Page Box(...), TabPageBox(...), ... )

**説明:** ディスプレイボックスウィンドウにタブページのパネルを作成する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

New Window( "Example",	Tab Box(		"alpha",		Panel Box( "panel", Text Box( "text" ) ),		"beta",		Popup Box( {"x", ex = 1, "y", ex = 2} )	));

```

### Tab Page Box

**構文:** y = Tab Page Box( &lt;Title("string")&gt;, &lt;Tip(0|1)&gt;, &lt;Closeable(0|1)&gt;, &lt;Icon("string")&gt;, &lt;Moveable(0|1)&gt;, contents)

**説明:** Tab Box内で使用するか、またはタイトルのついたスタンドアロンのコンテナとして使用できるディスプレイボックスを戻す。オプションとして、タイトルを指定するTitle(文字列)、ツールヒントを指定するTip(文字列)、ページを閉じることができるかどうかを指定するCloseable(0|1)、アイコンを指定するIcon(文字列)、ページの移動が可能かどうかを指定するMoveable(0|1)を設定できる。

**JMP追加されたバージョン:** バージョン14より前

```jsl

New Window( "Example",	Tab Box(		tp = Tab Page Box( Title( "alpha" ), Panel Box( "panel", Text Box( "text" ) ) ),		Tab Page Box( Title( "beta" ), Popup Box( {"x", ex = 1, "y", ex = 2} ) )	));

```

### Table Box

**構文:** y = Table Box( displayBox, ... )

**説明:** 引数によって指定された文字列ボックス、数値列ボックス、プロット列ボックスの列で構成されたテーブルのディスプレイボックスを戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

New Window( "Example",	Outline Box( "Table",		Table Box(			String Col Box( "names", {"x", "y", "z"} ),			Number Col Box( "values", {11, 22, 33} ),			Plot Col Box( "values", {11, 22, 33} )		)	));

```

### Text Box

**構文:** y = Text Box( text, &lt;&lt;Justify Text( strPos ), &lt;&lt;Set Wrap( width ) )

**説明:** 引数textのテキストを含んだディスプレイボックスを作成する。オプションの引数でテキストの配置を指定したり、行あたりの文字数を指定したりできる。Justify Textの引数は、left、right、またはcenterを指定する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

New Window( "Justification Example",	Outline Box( "text",		V List Box(			Text Box( "Text implicitly justified over multiple lines:", <<Set Wrap( 100 ) ),			Text Box( " " ),			Text Box(				"Text left justified over multiple lines:",				<<Justify Text( "left" ),				<<Set Wrap( 100 )			),			Text Box( " " ),			Text Box(				"Text center justified over multiple lines:",				<<Justify Text( "center" ),				<<Set Wrap( 100 )			),			Text Box( " " ),			Text Box(				"Text right justified over multiple lines:",				<<Justify Text( "right" ),				<<Set Wrap( 100 )			)		)	));

```

### Text Edit Box

**構文:** y = Text Edit Box( text, &lt;&lt;Password Style( bool ), &lt;&lt;Set Script( script ), &lt;&lt;Set Width( value ) )

**説明:** 引用符で囲んだ文字列のtextを含む編集可能なボックスを作成する。オプションの引数では、テキストの表示を制御したり、テキストボックスにスクリプトを追加したり、テキストボックスの幅をピクセルで設定したりできる。Set Width(-1)を指定すると、テキストボックスが内容にあったサイズに変更される。テキストボックスにスクリプトを設定するには、オプションの引数としてスクリプトを追加するか、Set Scriptメッセージを送る。

**JMP追加されたバージョン:** バージョン14より前

```jsl

New Window( "Example: Text Edit Box",	Outline Box( "Picker Example",		H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) )	),	Outline Box( "Text Edit Box with password style Example",		H List Box(			Text Box( "Enter password:    " ),			exq = Text Edit Box( "", Password Style( 1 ), Set Script( Print( "changed!" ) ) )		),		Button Box( "print to log", Set Script( Print( exq << Get Text() ) ) ),		Button Box( "hide password", Set Script( exq << Password Style( 1 ) ) ),		Button Box( "show password", Set Script( exq << Password Style( 0 ) ) )	)); // "look in the log window"

```

### Text Seg

**構文:** seg = Text Seg("text")

**JMP追加されたバージョン:** 17

```jsl

w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );w[FrameBox( 1 )] << append seg( ts1 = Text Seg( "default location fixed bottom left" ) );

```

### This Project

**構文:** project = this project()

**説明:** プロジェクトの中で実行した場合は、そのプロジェクトのオブジェクトを戻す。プロジェクトの外で実行した場合は、何も戻さない。

**JMP追加されたバージョン:** 14

```jsl

If(	Is Empty( This Project() ), Print( "Project: (none)" ),	Print( "Project: " || (This Project() << Get Window Title()) ),);

```

### Tree Box

**構文:** tree = Tree Box( &lt;{rootnodes}&gt;, &lt;Size( x, y )&gt;, &lt;Multiselect( 0|1 )&gt; )

**説明:** 階層型情報を表示するディスプレイボックスを作成する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

root1 = Tree Node( "Parent 1" );root2 = Tree Node( "Parent 2" );                                        c1 = Tree Node( "Child 1" );c2 = Tree Node( "Child 2" );c3 = Tree Node( "Child 3" );c4 = Tree Node( "Child 4" );                                        root1 << Append( c1 );root1 << Append( c2 );root2 << Append( c3 );root2 << Append( c4 );                                        New Window( "TreeBox", tree = Tree Box( {root1, root2}, Size( 300, 200 ) ) );

```

### Tree Node

**構文:** node = Tree Node( &lt;label&gt; )

**説明:** ツリーボックス内に表示するツリーノードを作成する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

root1 = Tree Node( "Parent 1" );root2 = Tree Node( "Parent 2" );                                        c1 = Tree Node( "Child 1" );c2 = Tree Node( "Child 2" );c3 = Tree Node( "Child 3" );c4 = Tree Node( "Child 4" );                                        root1 << Append( c1 );root1 << Append( c2 );root2 << Append( c3 );root2 << Append( c4 );                                        New Window( "TreeBox Nodes", tree = Tree Box( {root1, root2}, Size( 300, 200 ) ) );

```

### Triangulation

**構文:** triangulation = Triangulation( X(Column1, Column2), &lt; Y(Column) &gt; )

**説明:** 与えられたデータ点に対して、Delaunayの三角分割を行い、その結果のオブジェクトを戻す。データ点の座標に重複があった場合、それらのデータ点は一つにまとめられ、オプション指定のY値には平均が使われる。

**JMP追加されたバージョン:** バージョン14より前

**例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );tri = Triangulation( X( :X, :Y ), Y( :POP ) );

```

**例 2**

```jsl

tri = Triangulation( X( [0 0 1 1], [0 1 0 1] ), Y( [0 1 2 3] ) );

```

### Unlineup Box

**構文:** y = UnLineup Box(displayBoxArgs, ... )

**説明:** Lineup Boxの列のレイアウトをその部分だけ無効にするディスプレイボックスを戻す。Unlineup Boxの子は、Lineup Boxのすべての列に広がる。

**JMP追加されたバージョン:** 16

```jsl

New Window( "unlineup",	Lineup Box( N Col( 2 ),		Unlineup Box( Text Box( "First Section", <<Justify Text( "Center" ) ) ),		Button Box( "First Section 1" ),		Button Box( "First Section 2" ),		Unlineup Box( Text Box( "Second Section", <<Justify Text( "Center" ) ) ),		Button Box( "Second Section 1" ),		Button Box( "Second Section 2" )	));

```

### V Center Box

**構文:** y = V Center Box( &lt;childbox&gt; )

**説明:** childboxを垂直方向に中央揃えで配置したディスプレイボックスを戻す。垂直方向の長さは、子ディスプレイボックスのうち、最大のものに設定され、それ以外の子ディスプレイボックスは垂直方向に中央揃えされる。

**JMP追加されたバージョン:** バージョン14より前

```jsl

New Window( "test",	H List Box(		V Center Box( Text Box( "V+V" ) ),		V List Box(			Text Box( "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm" ),			H Center Box( Text Box( "H+H" ) ),			Text Box( "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm" ),			Text Box( "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm" ),			Text Box( "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm" ),			Text Box( "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm" )		)	));

```

### V List Box

**構文:** y = V List Box( &lt;Align( center|right )&gt;, displayBox, ... )

**説明:** 引数によって与えられる複数のディスプレイボックスを縦方向にレイアウトしたディスプレイボックスを戻す<<Holdメッセージにより抜粋元となるレポートをどのシートが保持するかを示す。オプションのAlign引数は、ディスプレイボックス内の配置を右寄せ(right)または中央寄せ(center)にすることを指定する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

New Window( "Example",	Outline Box( "Picker", V List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ) ));

```

### V Scroll Box

**構文:** y = V Scroll Box( &lt;Size( y )&gt;, displayBox )

**説明:** 縦方向のスクロールバーがついたディスプレイボックスを戻す。中により大きな子ボックスを配置することができる。

**JMP追加されたバージョン:** バージョン14より前

```jsl

New Window( "Example",	Outline Box( "Picker",		V Scroll Box(			Size( 100 ),			V List Box(				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) )			),			<<Set Stretch( "Window", "Window" )		)	));

```

### V Sheet Box

**構文:** y = V Sheet Box( &lt;&lt;Hold( rpt ), displayBox, ... )

**説明:** 引数によって与えられる複数のディスプレイボックスを縦方向にレイアウトしたディスプレイボックスを戻す<<Holdメッセージにより抜粋元となるレポートをどのシートが保持するかを示す。オプションのAlign引数は、ディスプレイボックス内の配置を右寄せ(right)または中央寄せ(center)にすることを指定する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );New Window( "Example",	V Sheet Box(		<<Hold( Bivariate( Y( :weight ), X( :height ), Fit Line() ) ),		<<Hold(			Distribution(				Automatic Recalc( 1 ),				Continuous Distribution(					Column( :height ),					Horizontal Layout( 1 ),					Vertical( 0 ),					Outlier Box Plot( 0 )				)			)		),		<<Hold( Treemap( Categories( :age ) ) ),		<<Hold(			Bubble Plot(				X( :height ),				Y( :weight ),				Sizes( :age ),				Coloring( :sex ),				Circle Size( 6.226 ),				All Labels( 0 )			)		),		H Sheet Box(			Sheet Part( "weight by height", Excerpt Box( 1, {Picture Box( 1 )} ) ),			Sheet Part( "height", Excerpt Box( 2, {Picture Box( 1 )} ) )		),		H Sheet Box(			Sheet Part( "", Excerpt Box( 3, {Picture Box( 1 )} ) ),			Sheet Part( "height by weight", Excerpt Box( 4, {Picture Box( 1 )} ) )		)	));

```

### V Splitter Box

**構文:** y = V Splitter Box( &lt;Size(x,y)&gt;, displayBox, ... )

**説明:** 引数によって与えられる複数のディスプレイボックスを縦方向にレイアウトし、仕切りをつけたディスプレイボックスを戻す。子のサイズはSplitter Boxの幅または高さの割合で指定する。オプションのSize引数は、最上位のSplitter Boxに対する指定(ボックス全体のサイズ)で、子ボックスはそれに対する割合での指定となる。

**JMP追加されたバージョン:** バージョン14より前

```jsl

New Window( "Splitter",	V Splitter Box(		Size( 800, 600 ),		H Splitter Box( graph = Graph Box(), Script Box(), <<Sizes( {0.6, 0.4} ) ),		H Splitter Box(			pict = Picture Box( Open( "$SAMPLE_IMAGES/tile.jpg", jpg ) ),			spacer = Spacer Box(),			<<Sizes( {0.4, 0.6} )		)	));graph[FrameBox( 1 )] << Set Stretch( "Window", "Window" );pict << Set Min Size( 100, 100 );pict << Set Max Size( 500, 500 );pict << Set Stretch( "Window", "Window" );spacer << Set Fill( 1 );spacer << Color( "Red" );spacer << Set Stretch( "Window", "Window" );

```

### Web Browser Box

**構文:** wb = Web Browser Box( url )

**説明:** 文字列引数urlで指定されたWebページを表示するディスプレイボックスを戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

New Window( "Example", wb = Web Browser Box() );wb << Navigate( "http://www.jmp.com" );wb << Set Stretch( "Window", "Window" );wb << Set Max Size( 10000, 10000 );

```

### Window

**構文:** y = Window( &lt;string|int&gt; )

**説明:** この関数は、以前のバージョンで作成されたスクリプトの互換性を保つために使用可能となっているが、将来廃止される。今後作成されるスクリプトではGet Window()またはGet Window List()を使用すること。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Window( "Big Class" );

```

### With Window Handler

**構文:** With Window Handler( JSL Code, Handler Function )

**説明:** 新しいウィンドウが作成されるたびに呼び出される関数で一連のコードを実行する。

**JMP追加されたバージョン:** 17

```jsl

With Window Handler(	New Window( "My Window" ),	Function( {window},		Print( window << get window title() );		window << close window();	));

```

### Wrap List Box

**構文:** y = Wrap List Box( displayBox, ... )

**説明:** 引数で指定されたディスプレイボックスを横に並べたディスプレイボックスを戻す。ただし、印刷時は折り返した形で印刷される。

**JMP追加されたバージョン:** バージョン14より前

```jsl

New Window( "WrapListBox",	Wrap List Box(		Graph Box( framesize( 150, 100 ), Text( {50, 50}, "1" ) ),		Graph Box( framesize( 150, 100 ), Text( {50, 50}, "2" ) ),		Graph Box( framesize( 150, 100 ), Text( {50, 50}, "3" ) ),		Graph Box( framesize( 150, 100 ), Text( {50, 50}, "4" ) )	));

```

