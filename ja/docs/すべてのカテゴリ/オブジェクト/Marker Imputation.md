# Marker Imputation



## 共有されるメッセージ

### Action

**構文:** obj &lt;&lt; Action

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

**構文:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

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

**構文:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**説明:** データの除外や変更があった場合に分析を自動的にやり直す。Automatic Recalcオプションがオンになっている場合で、データの除外や変更が再計算の前に確実に適用されるようにするには、Wait(0)コマンドを使用すること。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );

//Set missing values for some markers
dt = Current Data Table();
nMarkers = 60; //number of markers in the data table
Random Reset( 0 ); //set seed for reproducibility
SelectedMarkers = As List( Random Index( nMarkers, 15 ) + 10 ); //random select 15 markers and return their column indexes
dt << Clear Select; //clear row selection
dt << Clear Column Selection; //clear column selection
For( i = 1, i <= N Items( SelectedMarkers ), i++, //loop over selected markers
	dt << Select Columns( SelectedMarkers[i] ); //select column in the data table
	Random Reset( i ); //set seed for reproducibility
	dt << Select Randomly( 20 ); //random select 20 rows
	sRows = dt << Get Selected Rows; //get indexes of selected rows
	Column( SelectedMarkers[i] )[sRows] = .;//set selected rows to missing values
	dt << Clear Select; //clear row selection
	dt << Clear Column Selection; //clear column selection
);

//Run platform
dt << Marker Imputation(
	Marker( Column Group( "Markers" ) ),
	Ploidy( 2 ),
	Missing Marker Imputation Method( "LD-kNN" )
);
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

### Broadcast

**構文:** obj &lt;&lt; Broadcast(message)

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

**構文:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

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

**構文:** obj &lt;&lt; Copy ByGroup Script

**説明:** この分析を再現するJSLスクリプトを生成し、クリップボードにコピーする。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);

//Set missing values for some markers
dt = Current Data Table();
nMarkers = 60; //number of markers in the data table
Random Reset( 0 ); //set seed for reproducibility
SelectedMarkers = As List( Random Index( nMarkers, 15 ) + 10 ); //random select 15 markers and return their column indexes
dt << Clear Select; //clear row selection
dt << Clear Column Selection; //clear column selection
For( i = 1, i <= N Items( SelectedMarkers ), i++, //loop over selected markers
	dt << Select Columns( SelectedMarkers[i] ); //select column in the data table
	Random Reset( i ); //set seed for reproducibility
	dt << Select Randomly( 20 ); //random select 20 rows
	sRows = dt << Get Selected Rows; //get indexes of selected rows
	Column( SelectedMarkers[i] )[sRows] = .;//set selected rows to missing values
	dt << Clear Select; //clear row selection
	dt << Clear Column Selection; //clear column selection
);

//Run platform
dt << Marker Imputation(
	Marker( Column Group( "Markers" ) ),
	Ploidy( 2 ),
	Missing Marker Imputation Method( "LD-kNN" ),
	By( _bycol )
);
obj[1] << Copy ByGroup Script;

```

### Copy Script

**構文:** obj &lt;&lt; Copy Script

**説明:** この分析を再現するJSLスクリプトを生成し、クリップボードにコピーする。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );

//Set missing values for some markers
dt = Current Data Table();
nMarkers = 60; //number of markers in the data table
Random Reset( 0 ); //set seed for reproducibility
SelectedMarkers = As List( Random Index( nMarkers, 15 ) + 10 ); //random select 15 markers and return their column indexes
dt << Clear Select; //clear row selection
dt << Clear Column Selection; //clear column selection
For( i = 1, i <= N Items( SelectedMarkers ), i++, //loop over selected markers
	dt << Select Columns( SelectedMarkers[i] ); //select column in the data table
	Random Reset( i ); //set seed for reproducibility
	dt << Select Randomly( 20 ); //random select 20 rows
	sRows = dt << Get Selected Rows; //get indexes of selected rows
	Column( SelectedMarkers[i] )[sRows] = .;//set selected rows to missing values
	dt << Clear Select; //clear row selection
	dt << Clear Column Selection; //clear column selection
);

//Run platform
dt << Marker Imputation(
	Marker( Column Group( "Markers" ) ),
	Ploidy( 2 ),
	Missing Marker Imputation Method( "LD-kNN" )
);
obj << Copy Script;

```

### Data Table Window

**構文:** obj &lt;&lt; Data Table Window

**説明:** この分析に使用したデータテーブルのウィンドウを手前に表示する。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );

//Set missing values for some markers
dt = Current Data Table();
nMarkers = 60; //number of markers in the data table
Random Reset( 0 ); //set seed for reproducibility
SelectedMarkers = As List( Random Index( nMarkers, 15 ) + 10 ); //random select 15 markers and return their column indexes
dt << Clear Select; //clear row selection
dt << Clear Column Selection; //clear column selection
For( i = 1, i <= N Items( SelectedMarkers ), i++, //loop over selected markers
	dt << Select Columns( SelectedMarkers[i] ); //select column in the data table
	Random Reset( i ); //set seed for reproducibility
	dt << Select Randomly( 20 ); //random select 20 rows
	sRows = dt << Get Selected Rows; //get indexes of selected rows
	Column( SelectedMarkers[i] )[sRows] = .;//set selected rows to missing values
	dt << Clear Select; //clear row selection
	dt << Clear Column Selection; //clear column selection
);

//Run platform
dt << Marker Imputation(
	Marker( Column Group( "Markers" ) ),
	Ploidy( 2 ),
	Missing Marker Imputation Method( "LD-kNN" )
);
obj << Data Table Window;

```

### Get By Levels

**構文:** obj &lt;&lt; Get By Levels

**説明:** By列が指定されている場合、列名をキー、データ値を値とした連想配列を戻す。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

### Get ByGroup Script

**構文:** obj &lt;&lt; Get ByGroup Script

**説明:** この分析を再現するスクリプト(JSL)を生成し、それを式として戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);

//Set missing values for some markers
dt = Current Data Table();
nMarkers = 60; //number of markers in the data table
Random Reset( 0 ); //set seed for reproducibility
SelectedMarkers = As List( Random Index( nMarkers, 15 ) + 10 ); //random select 15 markers and return their column indexes
dt << Clear Select; //clear row selection
dt << Clear Column Selection; //clear column selection
For( i = 1, i <= N Items( SelectedMarkers ), i++, //loop over selected markers
	dt << Select Columns( SelectedMarkers[i] ); //select column in the data table
	Random Reset( i ); //set seed for reproducibility
	dt << Select Randomly( 20 ); //random select 20 rows
	sRows = dt << Get Selected Rows; //get indexes of selected rows
	Column( SelectedMarkers[i] )[sRows] = .;//set selected rows to missing values
	dt << Clear Select; //clear row selection
	dt << Clear Column Selection; //clear column selection
);

//Run platform
dt << Marker Imputation(
	Marker( Column Group( "Markers" ) ),
	Ploidy( 2 ),
	Missing Marker Imputation Method( "LD-kNN" ),
	By( _bycol )
);
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Container

**構文:** obj &lt;&lt; Get Container

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

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );

//Set missing values for some markers
dt = Current Data Table();
nMarkers = 60; //number of markers in the data table
Random Reset( 0 ); //set seed for reproducibility
SelectedMarkers = As List( Random Index( nMarkers, 15 ) + 10 ); //random select 15 markers and return their column indexes
dt << Clear Select; //clear row selection
dt << Clear Column Selection; //clear column selection
For( i = 1, i <= N Items( SelectedMarkers ), i++, //loop over selected markers
	dt << Select Columns( SelectedMarkers[i] ); //select column in the data table
	Random Reset( i ); //set seed for reproducibility
	dt << Select Randomly( 20 ); //random select 20 rows
	sRows = dt << Get Selected Rows; //get indexes of selected rows
	Column( SelectedMarkers[i] )[sRows] = .;//set selected rows to missing values
	dt << Clear Select; //clear row selection
	dt << Clear Column Selection; //clear column selection
);

//Run platform
dt << Marker Imputation(
	Marker( Column Group( "Markers" ) ),
	Ploidy( 2 ),
	Missing Marker Imputation Method( "LD-kNN" )
);
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

### Get Data Table

**構文:** obj &lt;&lt; Get Data Table

**説明:** データテーブルへの参照を戻す。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );

//Set missing values for some markers
dt = Current Data Table();
nMarkers = 60; //number of markers in the data table
Random Reset( 0 ); //set seed for reproducibility
SelectedMarkers = As List( Random Index( nMarkers, 15 ) + 10 ); //random select 15 markers and return their column indexes
dt << Clear Select; //clear row selection
dt << Clear Column Selection; //clear column selection
For( i = 1, i <= N Items( SelectedMarkers ), i++, //loop over selected markers
	dt << Select Columns( SelectedMarkers[i] ); //select column in the data table
	Random Reset( i ); //set seed for reproducibility
	dt << Select Randomly( 20 ); //random select 20 rows
	sRows = dt << Get Selected Rows; //get indexes of selected rows
	Column( SelectedMarkers[i] )[sRows] = .;//set selected rows to missing values
	dt << Clear Select; //clear row selection
	dt << Clear Column Selection; //clear column selection
);

//Run platform
dt << Marker Imputation(
	Marker( Column Group( "Markers" ) ),
	Ploidy( 2 ),
	Missing Marker Imputation Method( "LD-kNN" )
);
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Group Platform

**構文:** obj &lt;&lt; Get Group Platform

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

**構文:** obj &lt;&lt; Get Script

**説明:** この分析を再現するスクリプト(JSL)を生成し、それを式として戻す。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );

//Set missing values for some markers
dt = Current Data Table();
nMarkers = 60; //number of markers in the data table
Random Reset( 0 ); //set seed for reproducibility
SelectedMarkers = As List( Random Index( nMarkers, 15 ) + 10 ); //random select 15 markers and return their column indexes
dt << Clear Select; //clear row selection
dt << Clear Column Selection; //clear column selection
For( i = 1, i <= N Items( SelectedMarkers ), i++, //loop over selected markers
	dt << Select Columns( SelectedMarkers[i] ); //select column in the data table
	Random Reset( i ); //set seed for reproducibility
	dt << Select Randomly( 20 ); //random select 20 rows
	sRows = dt << Get Selected Rows; //get indexes of selected rows
	Column( SelectedMarkers[i] )[sRows] = .;//set selected rows to missing values
	dt << Clear Select; //clear row selection
	dt << Clear Column Selection; //clear column selection
);

//Run platform
dt << Marker Imputation(
	Marker( Column Group( "Markers" ) ),
	Ploidy( 2 ),
	Missing Marker Imputation Method( "LD-kNN" )
);
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**構文:** obj &lt;&lt; Get Script With Data Table

**説明:** この分析を再現するスクリプト(JSL)をデータテーブルへの参照も含めて生成し、それを式として戻す。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );

//Set missing values for some markers
dt = Current Data Table();
nMarkers = 60; //number of markers in the data table
Random Reset( 0 ); //set seed for reproducibility
SelectedMarkers = As List( Random Index( nMarkers, 15 ) + 10 ); //random select 15 markers and return their column indexes
dt << Clear Select; //clear row selection
dt << Clear Column Selection; //clear column selection
For( i = 1, i <= N Items( SelectedMarkers ), i++, //loop over selected markers
	dt << Select Columns( SelectedMarkers[i] ); //select column in the data table
	Random Reset( i ); //set seed for reproducibility
	dt << Select Randomly( 20 ); //random select 20 rows
	sRows = dt << Get Selected Rows; //get indexes of selected rows
	Column( SelectedMarkers[i] )[sRows] = .;//set selected rows to missing values
	dt << Clear Select; //clear row selection
	dt << Clear Column Selection; //clear column selection
);

//Run platform
dt << Marker Imputation(
	Marker( Column Group( "Markers" ) ),
	Ploidy( 2 ),
	Missing Marker Imputation Method( "LD-kNN" )
);
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**構文:** obj &lt;&lt; Get Timing

**説明:** プラットフォームの起動にかかった時間を取得する。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );

//Set missing values for some markers
dt = Current Data Table();
nMarkers = 60; //number of markers in the data table
Random Reset( 0 ); //set seed for reproducibility
SelectedMarkers = As List( Random Index( nMarkers, 15 ) + 10 ); //random select 15 markers and return their column indexes
dt << Clear Select; //clear row selection
dt << Clear Column Selection; //clear column selection
For( i = 1, i <= N Items( SelectedMarkers ), i++, //loop over selected markers
	dt << Select Columns( SelectedMarkers[i] ); //select column in the data table
	Random Reset( i ); //set seed for reproducibility
	dt << Select Randomly( 20 ); //random select 20 rows
	sRows = dt << Get Selected Rows; //get indexes of selected rows
	Column( SelectedMarkers[i] )[sRows] = .;//set selected rows to missing values
	dt << Clear Select; //clear row selection
	dt << Clear Column Selection; //clear column selection
);

//Run platform
dt << Marker Imputation(
	Marker( Column Group( "Markers" ) ),
	Ploidy( 2 ),
	Missing Marker Imputation Method( "LD-kNN" )
);
t = obj << Get Timing;
Show( t );

```

### Get Web Support

**構文:** obj &lt;&lt; Get Web Support

**説明:** ディスプレイオブジェクトにおけるインタラクティブHTMLサポートのレベルを数値で戻す。1は、一部または全部の要素がサポートされていることを示し、0は、サポートされないことを示す。

```jsl

Names Default To Here( 1 );
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

**構文:** obj &lt;&lt; Local Data Filter

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

**構文:** obj &lt;&lt; Paste Local Data Filter

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

**構文:** obj &lt;&lt; Redo Analysis

**説明:** 同じ分析をやり直し新しいウィンドウに表示する。データが変更されていると分析結果は異なる。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );

//Set missing values for some markers
dt = Current Data Table();
nMarkers = 60; //number of markers in the data table
Random Reset( 0 ); //set seed for reproducibility
SelectedMarkers = As List( Random Index( nMarkers, 15 ) + 10 ); //random select 15 markers and return their column indexes
dt << Clear Select; //clear row selection
dt << Clear Column Selection; //clear column selection
For( i = 1, i <= N Items( SelectedMarkers ), i++, //loop over selected markers
	dt << Select Columns( SelectedMarkers[i] ); //select column in the data table
	Random Reset( i ); //set seed for reproducibility
	dt << Select Randomly( 20 ); //random select 20 rows
	sRows = dt << Get Selected Rows; //get indexes of selected rows
	Column( SelectedMarkers[i] )[sRows] = .;//set selected rows to missing values
	dt << Clear Select; //clear row selection
	dt << Clear Column Selection; //clear column selection
);

//Run platform
dt << Marker Imputation(
	Marker( Column Group( "Markers" ) ),
	Ploidy( 2 ),
	Missing Marker Imputation Method( "LD-kNN" )
);
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**構文:** obj &lt;&lt; Redo ByGroup Analysis

**説明:** 同じ分析をやり直し新しいウィンドウに表示する。データが変更されていると分析結果は異なる。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);

//Set missing values for some markers
dt = Current Data Table();
nMarkers = 60; //number of markers in the data table
Random Reset( 0 ); //set seed for reproducibility
SelectedMarkers = As List( Random Index( nMarkers, 15 ) + 10 ); //random select 15 markers and return their column indexes
dt << Clear Select; //clear row selection
dt << Clear Column Selection; //clear column selection
For( i = 1, i <= N Items( SelectedMarkers ), i++, //loop over selected markers
	dt << Select Columns( SelectedMarkers[i] ); //select column in the data table
	Random Reset( i ); //set seed for reproducibility
	dt << Select Randomly( 20 ); //random select 20 rows
	sRows = dt << Get Selected Rows; //get indexes of selected rows
	Column( SelectedMarkers[i] )[sRows] = .;//set selected rows to missing values
	dt << Clear Select; //clear row selection
	dt << Clear Column Selection; //clear column selection
);

//Run platform
dt << Marker Imputation(
	Marker( Column Group( "Markers" ) ),
	Ploidy( 2 ),
	Missing Marker Imputation Method( "LD-kNN" ),
	By( _bycol )
);
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**構文:** obj &lt;&lt; Relaunch Analysis

**説明:** プラットフォームの起動ウィンドウを開き、レポートを作成した時の設定を表示する。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );

//Set missing values for some markers
dt = Current Data Table();
nMarkers = 60; //number of markers in the data table
Random Reset( 0 ); //set seed for reproducibility
SelectedMarkers = As List( Random Index( nMarkers, 15 ) + 10 ); //random select 15 markers and return their column indexes
dt << Clear Select; //clear row selection
dt << Clear Column Selection; //clear column selection
For( i = 1, i <= N Items( SelectedMarkers ), i++, //loop over selected markers
	dt << Select Columns( SelectedMarkers[i] ); //select column in the data table
	Random Reset( i ); //set seed for reproducibility
	dt << Select Randomly( 20 ); //random select 20 rows
	sRows = dt << Get Selected Rows; //get indexes of selected rows
	Column( SelectedMarkers[i] )[sRows] = .;//set selected rows to missing values
	dt << Clear Select; //clear row selection
	dt << Clear Column Selection; //clear column selection
);

//Run platform
dt << Marker Imputation(
	Marker( Column Group( "Markers" ) ),
	Ploidy( 2 ),
	Missing Marker Imputation Method( "LD-kNN" )
);
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**構文:** obj &lt;&lt; Relaunch ByGroup

**説明:** プラットフォームの起動ウィンドウを開き、レポートを作成した時の設定を表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);

//Set missing values for some markers
dt = Current Data Table();
nMarkers = 60; //number of markers in the data table
Random Reset( 0 ); //set seed for reproducibility
SelectedMarkers = As List( Random Index( nMarkers, 15 ) + 10 ); //random select 15 markers and return their column indexes
dt << Clear Select; //clear row selection
dt << Clear Column Selection; //clear column selection
For( i = 1, i <= N Items( SelectedMarkers ), i++, //loop over selected markers
	dt << Select Columns( SelectedMarkers[i] ); //select column in the data table
	Random Reset( i ); //set seed for reproducibility
	dt << Select Randomly( 20 ); //random select 20 rows
	sRows = dt << Get Selected Rows; //get indexes of selected rows
	Column( SelectedMarkers[i] )[sRows] = .;//set selected rows to missing values
	dt << Clear Select; //clear row selection
	dt << Clear Column Selection; //clear column selection
);

//Run platform
dt << Marker Imputation(
	Marker( Column Group( "Markers" ) ),
	Ploidy( 2 ),
	Missing Marker Imputation Method( "LD-kNN" ),
	By( _bycol )
);
obj[1] << Relaunch ByGroup;

```

### Remove Column Switcher

**構文:** obj &lt;&lt; Remove Column Switcher

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

**構文:** obj &lt;&lt; Remove Local Data Filter

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

**構文:** obj &lt;&lt; Report;Report( obj )

**説明:** レポートオブジェクトへの参照を戻す。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );

//Set missing values for some markers
dt = Current Data Table();
nMarkers = 60; //number of markers in the data table
Random Reset( 0 ); //set seed for reproducibility
SelectedMarkers = As List( Random Index( nMarkers, 15 ) + 10 ); //random select 15 markers and return their column indexes
dt << Clear Select; //clear row selection
dt << Clear Column Selection; //clear column selection
For( i = 1, i <= N Items( SelectedMarkers ), i++, //loop over selected markers
	dt << Select Columns( SelectedMarkers[i] ); //select column in the data table
	Random Reset( i ); //set seed for reproducibility
	dt << Select Randomly( 20 ); //random select 20 rows
	sRows = dt << Get Selected Rows; //get indexes of selected rows
	Column( SelectedMarkers[i] )[sRows] = .;//set selected rows to missing values
	dt << Clear Select; //clear row selection
	dt << Clear Column Selection; //clear column selection
);

//Run platform
dt << Marker Imputation(
	Marker( Column Group( "Markers" ) ),
	Ploidy( 2 ),
	Missing Marker Imputation Method( "LD-kNN" )
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**構文:** obj &lt;&lt; Report View( "完全"|"要約" )

**説明:** レポートビューは、プラットフォームレポートの詳細を表示するかどうかを決定する。Fullはすべての詳細を表示し、Summaryはプラットフォームにより限定されたものだけを表示する。 動作をカスタマイズするため、各ディスプレイボックスは<<Set Summary Behaviorメッセージをサポートする。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );

//Set missing values for some markers
dt = Current Data Table();
nMarkers = 60; //number of markers in the data table
Random Reset( 0 ); //set seed for reproducibility
SelectedMarkers = As List( Random Index( nMarkers, 15 ) + 10 ); //random select 15 markers and return their column indexes
dt << Clear Select; //clear row selection
dt << Clear Column Selection; //clear column selection
For( i = 1, i <= N Items( SelectedMarkers ), i++, //loop over selected markers
	dt << Select Columns( SelectedMarkers[i] ); //select column in the data table
	Random Reset( i ); //set seed for reproducibility
	dt << Select Randomly( 20 ); //random select 20 rows
	sRows = dt << Get Selected Rows; //get indexes of selected rows
	Column( SelectedMarkers[i] )[sRows] = .;//set selected rows to missing values
	dt << Clear Select; //clear row selection
	dt << Clear Column Selection; //clear column selection
);

//Run platform
dt << Marker Imputation(
	Marker( Column Group( "Markers" ) ),
	Ploidy( 2 ),
	Missing Marker Imputation Method( "LD-kNN" )
);
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**構文:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**説明:** 分析を再現するためのJSLスクリプトを作成し、データテーブルにテーブルプロパティとして保存する。スクリプトの名前を指定できる。Append Suffixオプションは、スクリプト名に数字の接尾辞を追加する。これにより、同名のスクリプトが存在していても区別できる。Promptオプションは、ユーザにスクリプト名の指定を促す。Replaceオプションは、同名の既存のスクリプトを置き換える。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);

//Set missing values for some markers
dt = Current Data Table();
nMarkers = 60; //number of markers in the data table
Random Reset( 0 ); //set seed for reproducibility
SelectedMarkers = As List( Random Index( nMarkers, 15 ) + 10 ); //random select 15 markers and return their column indexes
dt << Clear Select; //clear row selection
dt << Clear Column Selection; //clear column selection
For( i = 1, i <= N Items( SelectedMarkers ), i++, //loop over selected markers
	dt << Select Columns( SelectedMarkers[i] ); //select column in the data table
	Random Reset( i ); //set seed for reproducibility
	dt << Select Randomly( 20 ); //random select 20 rows
	sRows = dt << Get Selected Rows; //get indexes of selected rows
	Column( SelectedMarkers[i] )[sRows] = .;//set selected rows to missing values
	dt << Clear Select; //clear row selection
	dt << Clear Column Selection; //clear column selection
);

//Run platform
dt << Marker Imputation(
	Marker( Column Group( "Markers" ) ),
	Ploidy( 2 ),
	Missing Marker Imputation Method( "LD-kNN" ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**構文:** obj &lt;&lt; Save ByGroup Script to Journal

**説明:** この分析を再現するJSLスクリプトを生成し、ジャーナルにそのスクリプトのボタンを追加する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);

//Set missing values for some markers
dt = Current Data Table();
nMarkers = 60; //number of markers in the data table
Random Reset( 0 ); //set seed for reproducibility
SelectedMarkers = As List( Random Index( nMarkers, 15 ) + 10 ); //random select 15 markers and return their column indexes
dt << Clear Select; //clear row selection
dt << Clear Column Selection; //clear column selection
For( i = 1, i <= N Items( SelectedMarkers ), i++, //loop over selected markers
	dt << Select Columns( SelectedMarkers[i] ); //select column in the data table
	Random Reset( i ); //set seed for reproducibility
	dt << Select Randomly( 20 ); //random select 20 rows
	sRows = dt << Get Selected Rows; //get indexes of selected rows
	Column( SelectedMarkers[i] )[sRows] = .;//set selected rows to missing values
	dt << Clear Select; //clear row selection
	dt << Clear Column Selection; //clear column selection
);

//Run platform
dt << Marker Imputation(
	Marker( Column Group( "Markers" ) ),
	Ploidy( 2 ),
	Missing Marker Imputation Method( "LD-kNN" ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**構文:** obj &lt;&lt; Save ByGroup Script to Script Window

**説明:** この分析を再現するJSLスクリプトを生成し、現在のスクリプトウィンドウに表示する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);

//Set missing values for some markers
dt = Current Data Table();
nMarkers = 60; //number of markers in the data table
Random Reset( 0 ); //set seed for reproducibility
SelectedMarkers = As List( Random Index( nMarkers, 15 ) + 10 ); //random select 15 markers and return their column indexes
dt << Clear Select; //clear row selection
dt << Clear Column Selection; //clear column selection
For( i = 1, i <= N Items( SelectedMarkers ), i++, //loop over selected markers
	dt << Select Columns( SelectedMarkers[i] ); //select column in the data table
	Random Reset( i ); //set seed for reproducibility
	dt << Select Randomly( 20 ); //random select 20 rows
	sRows = dt << Get Selected Rows; //get indexes of selected rows
	Column( SelectedMarkers[i] )[sRows] = .;//set selected rows to missing values
	dt << Clear Select; //clear row selection
	dt << Clear Column Selection; //clear column selection
);

//Run platform
dt << Marker Imputation(
	Marker( Column Group( "Markers" ) ),
	Ploidy( 2 ),
	Missing Marker Imputation Method( "LD-kNN" ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**構文:** obj &lt;&lt; Save Script for All Objects

**説明:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );

//Set missing values for some markers
dt = Current Data Table();
nMarkers = 60; //number of markers in the data table
Random Reset( 0 ); //set seed for reproducibility
SelectedMarkers = As List( Random Index( nMarkers, 15 ) + 10 ); //random select 15 markers and return their column indexes
dt << Clear Select; //clear row selection
dt << Clear Column Selection; //clear column selection
For( i = 1, i <= N Items( SelectedMarkers ), i++, //loop over selected markers
	dt << Select Columns( SelectedMarkers[i] ); //select column in the data table
	Random Reset( i ); //set seed for reproducibility
	dt << Select Randomly( 20 ); //random select 20 rows
	sRows = dt << Get Selected Rows; //get indexes of selected rows
	Column( SelectedMarkers[i] )[sRows] = .;//set selected rows to missing values
	dt << Clear Select; //clear row selection
	dt << Clear Column Selection; //clear column selection
);

//Run platform
dt << Marker Imputation(
	Marker( Column Group( "Markers" ) ),
	Ploidy( 2 ),
	Missing Marker Imputation Method( "LD-kNN" )
);
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**構文:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**説明:** すべてのレポートオブジェクトを再現するスクリプトを現在のデータテーブルに保存する。このオプションは、ウィンドウ内にレポートが複数ある場合に便利。作成されるスクリプトの名前は、引用符で囲んで指定しない限り、1つ目のプラットフォーム名となる。

**例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);

//Set missing values for some markers
dt = Current Data Table();
nMarkers = 60; //number of markers in the data table
Random Reset( 0 ); //set seed for reproducibility
SelectedMarkers = As List( Random Index( nMarkers, 15 ) + 10 ); //random select 15 markers and return their column indexes
dt << Clear Select; //clear row selection
dt << Clear Column Selection; //clear column selection
For( i = 1, i <= N Items( SelectedMarkers ), i++, //loop over selected markers
	dt << Select Columns( SelectedMarkers[i] ); //select column in the data table
	Random Reset( i ); //set seed for reproducibility
	dt << Select Randomly( 20 ); //random select 20 rows
	sRows = dt << Get Selected Rows; //get indexes of selected rows
	Column( SelectedMarkers[i] )[sRows] = .;//set selected rows to missing values
	dt << Clear Select; //clear row selection
	dt << Clear Column Selection; //clear column selection
);

//Run platform
dt << Marker Imputation(
	Marker( Column Group( "Markers" ) ),
	Ploidy( 2 ),
	Missing Marker Imputation Method( "LD-kNN" ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table;

```

**例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);

//Set missing values for some markers
dt = Current Data Table();
nMarkers = 60; //number of markers in the data table
Random Reset( 0 ); //set seed for reproducibility
SelectedMarkers = As List( Random Index( nMarkers, 15 ) + 10 ); //random select 15 markers and return their column indexes
dt << Clear Select; //clear row selection
dt << Clear Column Selection; //clear column selection
For( i = 1, i <= N Items( SelectedMarkers ), i++, //loop over selected markers
	dt << Select Columns( SelectedMarkers[i] ); //select column in the data table
	Random Reset( i ); //set seed for reproducibility
	dt << Select Randomly( 20 ); //random select 20 rows
	sRows = dt << Get Selected Rows; //get indexes of selected rows
	Column( SelectedMarkers[i] )[sRows] = .;//set selected rows to missing values
	dt << Clear Select; //clear row selection
	dt << Clear Column Selection; //clear column selection
);

//Run platform
dt << Marker Imputation(
	Marker( Column Group( "Markers" ) ),
	Ploidy( 2 ),
	Missing Marker Imputation Method( "LD-kNN" ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**構文:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**説明:** この分析を再現するJSLスクリプトを生成し、データテーブルのテーブルプロパティとして保存する。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );

//Set missing values for some markers
dt = Current Data Table();
nMarkers = 60; //number of markers in the data table
Random Reset( 0 ); //set seed for reproducibility
SelectedMarkers = As List( Random Index( nMarkers, 15 ) + 10 ); //random select 15 markers and return their column indexes
dt << Clear Select; //clear row selection
dt << Clear Column Selection; //clear column selection
For( i = 1, i <= N Items( SelectedMarkers ), i++, //loop over selected markers
	dt << Select Columns( SelectedMarkers[i] ); //select column in the data table
	Random Reset( i ); //set seed for reproducibility
	dt << Select Randomly( 20 ); //random select 20 rows
	sRows = dt << Get Selected Rows; //get indexes of selected rows
	Column( SelectedMarkers[i] )[sRows] = .;//set selected rows to missing values
	dt << Clear Select; //clear row selection
	dt << Clear Column Selection; //clear column selection
);

//Run platform
dt << Marker Imputation(
	Marker( Column Group( "Markers" ) ),
	Ploidy( 2 ),
	Missing Marker Imputation Method( "LD-kNN" )
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**構文:** obj &lt;&lt; Save Script to Journal

**説明:** この分析を再現するJSLスクリプトを生成し、ジャーナルにそのスクリプトのボタンを追加する。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );

//Set missing values for some markers
dt = Current Data Table();
nMarkers = 60; //number of markers in the data table
Random Reset( 0 ); //set seed for reproducibility
SelectedMarkers = As List( Random Index( nMarkers, 15 ) + 10 ); //random select 15 markers and return their column indexes
dt << Clear Select; //clear row selection
dt << Clear Column Selection; //clear column selection
For( i = 1, i <= N Items( SelectedMarkers ), i++, //loop over selected markers
	dt << Select Columns( SelectedMarkers[i] ); //select column in the data table
	Random Reset( i ); //set seed for reproducibility
	dt << Select Randomly( 20 ); //random select 20 rows
	sRows = dt << Get Selected Rows; //get indexes of selected rows
	Column( SelectedMarkers[i] )[sRows] = .;//set selected rows to missing values
	dt << Clear Select; //clear row selection
	dt << Clear Column Selection; //clear column selection
);

//Run platform
dt << Marker Imputation(
	Marker( Column Group( "Markers" ) ),
	Ploidy( 2 ),
	Missing Marker Imputation Method( "LD-kNN" )
);
obj << Save Script to Journal;

```

### Save Script to Report

**構文:** obj &lt;&lt; Save Script to Report

**説明:** この分析を再現するJSLスクリプトを生成し、レポートウィンドウに表示する。分析手順の記録を結果と一緒に残せる。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );

//Set missing values for some markers
dt = Current Data Table();
nMarkers = 60; //number of markers in the data table
Random Reset( 0 ); //set seed for reproducibility
SelectedMarkers = As List( Random Index( nMarkers, 15 ) + 10 ); //random select 15 markers and return their column indexes
dt << Clear Select; //clear row selection
dt << Clear Column Selection; //clear column selection
For( i = 1, i <= N Items( SelectedMarkers ), i++, //loop over selected markers
	dt << Select Columns( SelectedMarkers[i] ); //select column in the data table
	Random Reset( i ); //set seed for reproducibility
	dt << Select Randomly( 20 ); //random select 20 rows
	sRows = dt << Get Selected Rows; //get indexes of selected rows
	Column( SelectedMarkers[i] )[sRows] = .;//set selected rows to missing values
	dt << Clear Select; //clear row selection
	dt << Clear Column Selection; //clear column selection
);

//Run platform
dt << Marker Imputation(
	Marker( Column Group( "Markers" ) ),
	Ploidy( 2 ),
	Missing Marker Imputation Method( "LD-kNN" )
);
obj << Save Script to Report;

```

### Save Script to Script Window

**構文:** obj &lt;&lt; Save Script to Script Window

**説明:** この分析を再現するJSLスクリプトを生成し、現在のスクリプトウィンドウに表示する。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );

//Set missing values for some markers
dt = Current Data Table();
nMarkers = 60; //number of markers in the data table
Random Reset( 0 ); //set seed for reproducibility
SelectedMarkers = As List( Random Index( nMarkers, 15 ) + 10 ); //random select 15 markers and return their column indexes
dt << Clear Select; //clear row selection
dt << Clear Column Selection; //clear column selection
For( i = 1, i <= N Items( SelectedMarkers ), i++, //loop over selected markers
	dt << Select Columns( SelectedMarkers[i] ); //select column in the data table
	Random Reset( i ); //set seed for reproducibility
	dt << Select Randomly( 20 ); //random select 20 rows
	sRows = dt << Get Selected Rows; //get indexes of selected rows
	Column( SelectedMarkers[i] )[sRows] = .;//set selected rows to missing values
	dt << Clear Select; //clear row selection
	dt << Clear Column Selection; //clear column selection
);

//Run platform
dt << Marker Imputation(
	Marker( Column Group( "Markers" ) ),
	Ploidy( 2 ),
	Missing Marker Imputation Method( "LD-kNN" )
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

**構文:** obj &lt;&lt; Sync to Data Table Changes

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

**構文:** obj &lt;&lt; Title( "new title" )

**説明:** プラットフォームのタイトルを設定する。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );

//Set missing values for some markers
dt = Current Data Table();
nMarkers = 60; //number of markers in the data table
Random Reset( 0 ); //set seed for reproducibility
SelectedMarkers = As List( Random Index( nMarkers, 15 ) + 10 ); //random select 15 markers and return their column indexes
dt << Clear Select; //clear row selection
dt << Clear Column Selection; //clear column selection
For( i = 1, i <= N Items( SelectedMarkers ), i++, //loop over selected markers
	dt << Select Columns( SelectedMarkers[i] ); //select column in the data table
	Random Reset( i ); //set seed for reproducibility
	dt << Select Randomly( 20 ); //random select 20 rows
	sRows = dt << Get Selected Rows; //get indexes of selected rows
	Column( SelectedMarkers[i] )[sRows] = .;//set selected rows to missing values
	dt << Clear Select; //clear row selection
	dt << Clear Column Selection; //clear column selection
);

//Run platform
dt << Marker Imputation(
	Marker( Column Group( "Markers" ) ),
	Ploidy( 2 ),
	Missing Marker Imputation Method( "LD-kNN" )
);
obj << Title( "My Platform" );

```

### Top Report

**構文:** obj &lt;&lt; Top Report

**説明:** レポート内のルートノードへの参照を戻す。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );

//Set missing values for some markers
dt = Current Data Table();
nMarkers = 60; //number of markers in the data table
Random Reset( 0 ); //set seed for reproducibility
SelectedMarkers = As List( Random Index( nMarkers, 15 ) + 10 ); //random select 15 markers and return their column indexes
dt << Clear Select; //clear row selection
dt << Clear Column Selection; //clear column selection
For( i = 1, i <= N Items( SelectedMarkers ), i++, //loop over selected markers
	dt << Select Columns( SelectedMarkers[i] ); //select column in the data table
	Random Reset( i ); //set seed for reproducibility
	dt << Select Randomly( 20 ); //random select 20 rows
	sRows = dt << Get Selected Rows; //get indexes of selected rows
	Column( SelectedMarkers[i] )[sRows] = .;//set selected rows to missing values
	dt << Clear Select; //clear row selection
	dt << Clear Column Selection; //clear column selection
);

//Run platform
dt << Marker Imputation(
	Marker( Column Group( "Markers" ) ),
	Ploidy( 2 ),
	Missing Marker Imputation Method( "LD-kNN" )
);
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Transform Column

**構文:** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

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

**構文:** obj &lt;&lt; View Web XML

**説明:** インタラクティブHTMLレポートの作成に使うXMLコードを戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

### Window View

**構文:** obj = Marker Imputation(...Window View( "Visible"|"Invisible"|"Private" )...)

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

**構文:** obj &lt;&lt; By( column(s) )

**説明:** 指定された列の水準ごとに、個別に分析を実行する。各結果を別々のデータテーブルや別々のレポートにまとめる。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );

//Set missing values for some markers
dt = Current Data Table();
nMarkers = 60; //number of markers in the data table
Random Reset( 0 ); //set seed for reproducibility
SelectedMarkers = As List( Random Index( nMarkers, 15 ) + 10 ); //random select 15 markers and return their column indexes
dt << Clear Select; //clear row selection
dt << Clear Column Selection; //clear column selection
For( i = 1, i <= N Items( SelectedMarkers ), i++, //loop over selected markers
	dt << Select Columns( SelectedMarkers[i] ); //select column in the data table
	Random Reset( i ); //set seed for reproducibility
	dt << Select Randomly( 20 ); //random select 20 rows
	sRows = dt << Get Selected Rows; //get indexes of selected rows
	Column( SelectedMarkers[i] )[sRows] = .;//set selected rows to missing values
	dt << Clear Select; //clear row selection
	dt << Clear Column Selection; //clear column selection
);

//Run platform
dt << Marker Imputation(
	Marker( Column Group( "Markers" ) ),
	By( :Sex ),
	Ploidy( 2 ),
	Unthreaded( 0 ),
	Missing Marker Imputation Method( "LD-kNN" )
);

```

### Marker

**構文:** obj &lt;&lt; Marker( column(s) )

**説明:** 遺伝子マーカーを含む列を指定する。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );

//Set missing values for some markers
dt = Current Data Table();
nMarkers = 60; //number of markers in the data table
Random Reset( 0 ); //set seed for reproducibility
SelectedMarkers = As List( Random Index( nMarkers, 15 ) + 10 ); //random select 15 markers and return their column indexes
dt << Clear Select; //clear row selection
dt << Clear Column Selection; //clear column selection
For( i = 1, i <= N Items( SelectedMarkers ), i++, //loop over selected markers
	dt << Select Columns( SelectedMarkers[i] ); //select column in the data table
	Random Reset( i ); //set seed for reproducibility
	dt << Select Randomly( 20 ); //random select 20 rows
	sRows = dt << Get Selected Rows; //get indexes of selected rows
	Column( SelectedMarkers[i] )[sRows] = .;//set selected rows to missing values
	dt << Clear Select; //clear row selection
	dt << Clear Column Selection; //clear column selection
);

//Run platform
dt << Marker Imputation(
	Marker( Column Group( "Markers" ) ),
	Ploidy( 2 ),
	Missing Marker Imputation Method( "LD-kNN" )
);

```

## 関連するコンストラクター

### Marker Imputation

**構文:** Marker Imputation( Marker( columns ) )

**説明:** Imputes numeric missing marker genotypes.

**JMP追加されたバージョン:** 19

**例 1**

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );

//Set missing values for some markers
dt = Current Data Table();
nMarkers = 60; //number of markers in the data table
Random Reset( 0 ); //set seed for reproducibility
SelectedMarkers = As List( Random Index( nMarkers, 15 ) + 10 ); //random select 15 markers and return their column indexes
dt << Clear Select; //clear row selection
dt << Clear Column Selection; //clear column selection
For( i = 1, i <= N Items( SelectedMarkers ), i++, //loop over selected markers
	dt << Select Columns( SelectedMarkers[i] ); //select column in the data table
	Random Reset( i ); //set seed for reproducibility
	dt << Select Randomly( 20 ); //random select 20 rows
	sRows = dt << Get Selected Rows; //get indexes of selected rows
	Column( SelectedMarkers[i] )[sRows] = .;//set selected rows to missing values
	dt << Clear Select; //clear row selection
	dt << Clear Column Selection; //clear column selection
);

//Run platform
dt << Marker Imputation(
	Marker( Column Group( "Markers" ) ),
	Ploidy( 2 ),
	Missing Marker Imputation Method( "LD-kNN" )
);

```

**例 2**

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );

//Set missing values for some markers
dt = Current Data Table();
nMarkers = 60; //number of markers in the data table
Random Reset( 0 ); //set seed for reproducibility
SelectedMarkers = As List( Random Index( nMarkers, 15 ) + 10 ); //random select 15 markers and return their column indexes
dt << Clear Select; //clear row selection
dt << Clear Column Selection; //clear column selection
For( i = 1, i <= N Items( SelectedMarkers ), i++, //loop over selected markers
	dt << Select Columns( SelectedMarkers[i] ); //select column in the data table
	Random Reset( i ); //set seed for reproducibility
	dt << Select Randomly( 20 ); //random select 20 rows
	sRows = dt << Get Selected Rows; //get indexes of selected rows
	Column( SelectedMarkers[i] )[sRows] = .;//set selected rows to missing values
	dt << Clear Select; //clear row selection
	dt << Clear Column Selection; //clear column selection
);

//Run platform
obj = dt << Marker Imputation(
	Marker( Column Group( "Markers" ) ),
	Ploidy( 2 ),
	Missing Marker Imputation Method( "LD-kNN" )
);

```

## 項目のメッセージ

### Imputation Value

**構文:** obj = Marker Imputation(...Imputation Value( number=0 )...)

**説明:** 0から倍数性までの整数を指定する。欠測しているマーカーの値がその指定された値で置き換えられる。 デフォルトの値は"0"。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );

//Set missing values for some markers
dt = Current Data Table();
nMarkers = 60; //number of markers in the data table
Random Reset( 0 ); //set seed for reproducibility
SelectedMarkers = As List( Random Index( nMarkers, 15 ) + 10 ); //random select 15 markers and return their column indexes
dt << Clear Select; //clear row selection
dt << Clear Column Selection; //clear column selection
For( i = 1, i <= N Items( SelectedMarkers ), i++, //loop over selected markers
	dt << Select Columns( SelectedMarkers[i] ); //select column in the data table
	Random Reset( i ); //set seed for reproducibility
	dt << Select Randomly( 20 ); //random select 20 rows
	sRows = dt << Get Selected Rows; //get indexes of selected rows
	Column( SelectedMarkers[i] )[sRows] = .;//set selected rows to missing values
	dt << Clear Select; //clear row selection
	dt << Clear Column Selection; //clear column selection
);

         //Run platform
dt << Marker Imputation(
	Marker( Column Group( "Markers" ) ),
	Ploidy( 2 ),
	Missing Marker Imputation Method( "Specified" ),
	Imputation Value( 0 )
);

```

### Method

**構文:** obj = Marker Imputation(...Method( "LD-kNN"|"HWE オフ"|"HWE オン"|"ランダム"|"指定値"="LD-kNN" )...)

**説明:** 欠測値となっているマーカーを補完する方法を4つの方法の中から1つ指定する。 デフォルトの値は"LD-kNN"。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );

//Set missing values for some markers
dt = Current Data Table();
nMarkers = 60; //number of markers in the data table
Random Reset( 0 ); //set seed for reproducibility
SelectedMarkers = As List( Random Index( nMarkers, 15 ) + 10 ); //random select 15 markers and return their column indexes
dt << Clear Select; //clear row selection
dt << Clear Column Selection; //clear column selection
For( i = 1, i <= N Items( SelectedMarkers ), i++, //loop over selected markers
	dt << Select Columns( SelectedMarkers[i] ); //select column in the data table
	Random Reset( i ); //set seed for reproducibility
	dt << Select Randomly( 20 ); //random select 20 rows
	sRows = dt << Get Selected Rows; //get indexes of selected rows
	Column( SelectedMarkers[i] )[sRows] = .;//set selected rows to missing values
	dt << Clear Select; //clear row selection
	dt << Clear Column Selection; //clear column selection
);

         //Run platform
dt << Marker Imputation(
	Marker( Column Group( "Markers" ) ),
	Ploidy( 2 ),
	Missing Marker Imputation Method( "LD-kNN" ),
	Imputation Value( 0 )
);

```

### Nearest Markers

**構文:** obj = Marker Imputation(...Nearest Markers( number=15 )...)

**説明:** Specifies the number of neighbor markers. デフォルトの値は"15"。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );

//Set missing values for some markers
dt = Current Data Table();
nMarkers = 60; //number of markers in the data table
Random Reset( 0 ); //set seed for reproducibility
SelectedMarkers = As List( Random Index( nMarkers, 15 ) + 10 ); //random select 15 markers and return their column indexes
dt << Clear Select; //clear row selection
dt << Clear Column Selection; //clear column selection
For( i = 1, i <= N Items( SelectedMarkers ), i++, //loop over selected markers
	dt << Select Columns( SelectedMarkers[i] ); //select column in the data table
	Random Reset( i ); //set seed for reproducibility
	dt << Select Randomly( 20 ); //random select 20 rows
	sRows = dt << Get Selected Rows; //get indexes of selected rows
	Column( SelectedMarkers[i] )[sRows] = .;//set selected rows to missing values
	dt << Clear Select; //clear row selection
	dt << Clear Column Selection; //clear column selection
);

         //Run platform
dt << Marker Imputation(
	Marker( Column Group( "Markers" ) ),
	Ploidy( 2 ),
	Missing Marker Imputation Method( "LD-kNN" ),
	Nearest Markers( 20 )
);

```

### Nearest Samples

**構文:** obj = Marker Imputation(...Nearest Samples( number=15 )...)

**説明:** Specifies the number of neighbor samples. デフォルトの値は"15"。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );

//Set missing values for some markers
dt = Current Data Table();
nMarkers = 60; //number of markers in the data table
Random Reset( 0 ); //set seed for reproducibility
SelectedMarkers = As List( Random Index( nMarkers, 15 ) + 10 ); //random select 15 markers and return their column indexes
dt << Clear Select; //clear row selection
dt << Clear Column Selection; //clear column selection
For( i = 1, i <= N Items( SelectedMarkers ), i++, //loop over selected markers
	dt << Select Columns( SelectedMarkers[i] ); //select column in the data table
	Random Reset( i ); //set seed for reproducibility
	dt << Select Randomly( 20 ); //random select 20 rows
	sRows = dt << Get Selected Rows; //get indexes of selected rows
	Column( SelectedMarkers[i] )[sRows] = .;//set selected rows to missing values
	dt << Clear Select; //clear row selection
	dt << Clear Column Selection; //clear column selection
);

         //Run platform
dt << Marker Imputation(
	Marker( Column Group( "Markers" ) ),
	Ploidy( 2 ),
	Missing Marker Imputation Method( "LD-kNN" ),
	Nearest Samples( 20 )
);

```

### Ploidy

**構文:** obj = Marker Imputation(...Ploidy( number=2 )...)

**説明:** 倍数性を示す正の偶数を指定する。 デフォルトの値は"2"。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );

//Set missing values for some markers
dt = Current Data Table();
nMarkers = 60; //number of markers in the data table
Random Reset( 0 ); //set seed for reproducibility
SelectedMarkers = As List( Random Index( nMarkers, 15 ) + 10 ); //random select 15 markers and return their column indexes
dt << Clear Select; //clear row selection
dt << Clear Column Selection; //clear column selection
For( i = 1, i <= N Items( SelectedMarkers ), i++, //loop over selected markers
	dt << Select Columns( SelectedMarkers[i] ); //select column in the data table
	Random Reset( i ); //set seed for reproducibility
	dt << Select Randomly( 20 ); //random select 20 rows
	sRows = dt << Get Selected Rows; //get indexes of selected rows
	Column( SelectedMarkers[i] )[sRows] = .;//set selected rows to missing values
	dt << Clear Select; //clear row selection
	dt << Clear Column Selection; //clear column selection
);

//Run platform
dt << Marker Imputation(
	Marker( Column Group( "Markers" ) ),
	Ploidy( 2 ),
	Missing Marker Imputation Method( "LD-kNN" )
);

```

### Select Where

**構文:** obj &lt;&lt; Select Where

**説明:** 結果の表にて、特定の条件に合った項目を選択する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );

//Set missing values for some markers
dt = Current Data Table();
nMarkers = 60; //number of markers in the data table
Random Reset( 0 ); //set seed for reproducibility
SelectedMarkers = As List( Random Index( nMarkers, 15 ) + 10 ); //random select 15 markers and return their column indexes
dt << Clear Select; //clear row selection
dt << Clear Column Selection; //clear column selection
For( i = 1, i <= N Items( SelectedMarkers ), i++, //loop over selected markers
	dt << Select Columns( SelectedMarkers[i] ); //select column in the data table
	Random Reset( i ); //set seed for reproducibility
	dt << Select Randomly( 20 ); //random select 20 rows
	sRows = dt << Get Selected Rows; //get indexes of selected rows
	Column( SelectedMarkers[i] )[sRows] = .;//set selected rows to missing values
	dt << Clear Select; //clear row selection
	dt << Clear Column Selection; //clear column selection
);

//Run platform
obj = dt << Marker Imputation(
	Marker( Column Group( "Markers" ) ),
	Ploidy( 2 ),
	Unthreaded( 1 ),
	Missing Marker Imputation Method( "LD-kNN" )
);

obj << Select Where( Percent of Missing >= 85 );

```

### Set Random Seed

**構文:** obj = Marker Imputation(...Set Random Seed( number=0 )...)

**説明:** 乱数シード値を特定の値に設定する。設定した後のシミュレーションが、そのシード値で実行されるようになる。 デフォルトの値は"0"。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );

//Set missing values for some markers
dt = Current Data Table();
nMarkers = 60; //number of markers in the data table
Random Reset( 0 ); //set seed for reproducibility
SelectedMarkers = As List( Random Index( nMarkers, 15 ) + 10 ); //random select 15 markers and return their column indexes
dt << Clear Select; //clear row selection
dt << Clear Column Selection; //clear column selection
For( i = 1, i <= N Items( SelectedMarkers ), i++, //loop over selected markers
	dt << Select Columns( SelectedMarkers[i] ); //select column in the data table
	Random Reset( i ); //set seed for reproducibility
	dt << Select Randomly( 20 ); //random select 20 rows
	sRows = dt << Get Selected Rows; //get indexes of selected rows
	Column( SelectedMarkers[i] )[sRows] = .;//set selected rows to missing values
	dt << Clear Select; //clear row selection
	dt << Clear Column Selection; //clear column selection
);

//Run platform
dt << Marker Imputation(
	Marker( Column Group( "Markers" ) ),
	Ploidy( 2 ),
	Set Random Seed( 12345 ),
	Missing Marker Imputation Method( "HWE Off" )
);

```

### Unthreaded

**構文:** obj = Marker Imputation(...Unthreaded( state=0|1 )...)

**説明:** メインスレッドだけを計算に使用する。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );

//Set missing values for some markers
dt = Current Data Table();
nMarkers = 60; //number of markers in the data table
Random Reset( 0 ); //set seed for reproducibility
SelectedMarkers = As List( Random Index( nMarkers, 15 ) + 10 ); //random select 15 markers and return their column indexes
dt << Clear Select; //clear row selection
dt << Clear Column Selection; //clear column selection
For( i = 1, i <= N Items( SelectedMarkers ), i++, //loop over selected markers
	dt << Select Columns( SelectedMarkers[i] ); //select column in the data table
	Random Reset( i ); //set seed for reproducibility
	dt << Select Randomly( 20 ); //random select 20 rows
	sRows = dt << Get Selected Rows; //get indexes of selected rows
	Column( SelectedMarkers[i] )[sRows] = .;//set selected rows to missing values
	dt << Clear Select; //clear row selection
	dt << Clear Column Selection; //clear column selection
);

//Run platform
dt << Marker Imputation(
	Marker( Column Group( "Markers" ) ),
	Ploidy( 2 ),
	Unthreaded( 1 ),
	Missing Marker Imputation Method( "LD-kNN" )
);

```

