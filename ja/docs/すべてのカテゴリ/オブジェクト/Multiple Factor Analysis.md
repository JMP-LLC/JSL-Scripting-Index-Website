# Multiple Factor Analysis



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

dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );dt << Multiple Factor Analysis(	Product ID( :Vineyard ),	Z( :Region ),	MFA Blocks(		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness},		{"Florence Flowery etc.", :Florence Flowery, :Florence Crispness, :Florence Tannin,		:Florence Savory, :Florence Lightness},		{"Xavier Fruity etc.", :Xavier Fruity, :Xavier Spicy, :Xavier Crispness,		:Xavier Alcohol, :Xavier Savory, :Xavier Lightness},		{"Robert Fruity etc.", :Robert Fruity, :Robert Flowery, :Robert Spicy,		:Robert Crispness, :Robert Tannin, :Robert Alcohol, :Robert Savory, :Robert Lightness		},		{"Paula Fruity etc.", :Paula Fruity, :Paula Flowery, :Paula Spicy, :Paula Crispness,		:Paula Tannin, :Paula Savory},		{"Monica Fruity etc.", :Monica Fruity, :Monica Flowery, :Monica Spicy, :Monica Tannin,		:Monica Alcohol, :Monica Savory, :Monica Lightness},		{"Frank Fruity etc.", :Frank Fruity, :Frank Flowery, :Frank Spicy, :Frank Crispness,		:Frank Tannin, :Frank Alcohol, :Frank Savory, :Frank Lightness}	));obj << Automatic Recalc( 1 );dt << Select Rows( 5 ) << Exclude( 1 );

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

dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));dt << Multiple Factor Analysis(	Product ID( :Vineyard ),	Z( :Region ),	MFA Blocks(		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness},		{"Florence Flowery etc.", :Florence Flowery, :Florence Crispness, :Florence Tannin,		:Florence Savory, :Florence Lightness},		{"Xavier Fruity etc.", :Xavier Fruity, :Xavier Spicy, :Xavier Crispness,		:Xavier Alcohol, :Xavier Savory, :Xavier Lightness},		{"Robert Fruity etc.", :Robert Fruity, :Robert Flowery, :Robert Spicy,		:Robert Crispness, :Robert Tannin, :Robert Alcohol, :Robert Savory, :Robert Lightness		},		{"Paula Fruity etc.", :Paula Fruity, :Paula Flowery, :Paula Spicy, :Paula Crispness,		:Paula Tannin, :Paula Savory},		{"Monica Fruity etc.", :Monica Fruity, :Monica Flowery, :Monica Spicy, :Monica Tannin,		:Monica Alcohol, :Monica Savory, :Monica Lightness},		{"Frank Fruity etc.", :Frank Fruity, :Frank Flowery, :Frank Spicy, :Frank Crispness,		:Frank Tannin, :Frank Alcohol, :Frank Savory, :Frank Lightness}	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Copy ByGroup Script;

```

### Copy Script

**構文:** obj &lt;&lt; Copy Script

**説明:** この分析を再現するJSLスクリプトを生成し、クリップボードにコピーする。

```jsl

dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );dt << Multiple Factor Analysis(	Product ID( :Vineyard ),	Z( :Region ),	MFA Blocks(		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness},		{"Florence Flowery etc.", :Florence Flowery, :Florence Crispness, :Florence Tannin,		:Florence Savory, :Florence Lightness},		{"Xavier Fruity etc.", :Xavier Fruity, :Xavier Spicy, :Xavier Crispness,		:Xavier Alcohol, :Xavier Savory, :Xavier Lightness},		{"Robert Fruity etc.", :Robert Fruity, :Robert Flowery, :Robert Spicy,		:Robert Crispness, :Robert Tannin, :Robert Alcohol, :Robert Savory, :Robert Lightness		},		{"Paula Fruity etc.", :Paula Fruity, :Paula Flowery, :Paula Spicy, :Paula Crispness,		:Paula Tannin, :Paula Savory},		{"Monica Fruity etc.", :Monica Fruity, :Monica Flowery, :Monica Spicy, :Monica Tannin,		:Monica Alcohol, :Monica Savory, :Monica Lightness},		{"Frank Fruity etc.", :Frank Fruity, :Frank Flowery, :Frank Spicy, :Frank Crispness,		:Frank Tannin, :Frank Alcohol, :Frank Savory, :Frank Lightness}	));obj << Copy Script;

```

### Data Table Window

**構文:** obj &lt;&lt; Data Table Window

**説明:** この分析に使用したデータテーブルのウィンドウを手前に表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );dt << Multiple Factor Analysis(	Product ID( :Vineyard ),	Z( :Region ),	MFA Blocks(		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness},		{"Florence Flowery etc.", :Florence Flowery, :Florence Crispness, :Florence Tannin,		:Florence Savory, :Florence Lightness},		{"Xavier Fruity etc.", :Xavier Fruity, :Xavier Spicy, :Xavier Crispness,		:Xavier Alcohol, :Xavier Savory, :Xavier Lightness},		{"Robert Fruity etc.", :Robert Fruity, :Robert Flowery, :Robert Spicy,		:Robert Crispness, :Robert Tannin, :Robert Alcohol, :Robert Savory, :Robert Lightness		},		{"Paula Fruity etc.", :Paula Fruity, :Paula Flowery, :Paula Spicy, :Paula Crispness,		:Paula Tannin, :Paula Savory},		{"Monica Fruity etc.", :Monica Fruity, :Monica Flowery, :Monica Spicy, :Monica Tannin,		:Monica Alcohol, :Monica Savory, :Monica Lightness},		{"Frank Fruity etc.", :Frank Fruity, :Frank Flowery, :Frank Spicy, :Frank Crispness,		:Frank Tannin, :Frank Alcohol, :Frank Savory, :Frank Lightness}	));obj << Data Table Window;

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

dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));dt << Multiple Factor Analysis(	Product ID( :Vineyard ),	Z( :Region ),	MFA Blocks(		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness},		{"Florence Flowery etc.", :Florence Flowery, :Florence Crispness, :Florence Tannin,		:Florence Savory, :Florence Lightness},		{"Xavier Fruity etc.", :Xavier Fruity, :Xavier Spicy, :Xavier Crispness,		:Xavier Alcohol, :Xavier Savory, :Xavier Lightness},		{"Robert Fruity etc.", :Robert Fruity, :Robert Flowery, :Robert Spicy,		:Robert Crispness, :Robert Tannin, :Robert Alcohol, :Robert Savory, :Robert Lightness		},		{"Paula Fruity etc.", :Paula Fruity, :Paula Flowery, :Paula Spicy, :Paula Crispness,		:Paula Tannin, :Paula Savory},		{"Monica Fruity etc.", :Monica Fruity, :Monica Flowery, :Monica Spicy, :Monica Tannin,		:Monica Alcohol, :Monica Savory, :Monica Lightness},		{"Frank Fruity etc.", :Frank Fruity, :Frank Flowery, :Frank Spicy, :Frank Crispness,		:Frank Tannin, :Frank Alcohol, :Frank Savory, :Frank Lightness}	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));t = obj[1] << Get ByGroup Script;Show( t );

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

dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );dt << Multiple Factor Analysis(	Product ID( :Vineyard ),	Z( :Region ),	MFA Blocks(		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness},		{"Florence Flowery etc.", :Florence Flowery, :Florence Crispness, :Florence Tannin,		:Florence Savory, :Florence Lightness},		{"Xavier Fruity etc.", :Xavier Fruity, :Xavier Spicy, :Xavier Crispness,		:Xavier Alcohol, :Xavier Savory, :Xavier Lightness},		{"Robert Fruity etc.", :Robert Fruity, :Robert Flowery, :Robert Spicy,		:Robert Crispness, :Robert Tannin, :Robert Alcohol, :Robert Savory, :Robert Lightness		},		{"Paula Fruity etc.", :Paula Fruity, :Paula Flowery, :Paula Spicy, :Paula Crispness,		:Paula Tannin, :Paula Savory},		{"Monica Fruity etc.", :Monica Fruity, :Monica Flowery, :Monica Spicy, :Monica Tannin,		:Monica Alcohol, :Monica Savory, :Monica Lightness},		{"Frank Fruity etc.", :Frank Fruity, :Frank Flowery, :Frank Spicy, :Frank Crispness,		:Frank Tannin, :Frank Alcohol, :Frank Savory, :Frank Lightness}	));t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

### Get Data Table

**構文:** obj &lt;&lt; Get Data Table

**説明:** データテーブルへの参照を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );dt << Multiple Factor Analysis(	Product ID( :Vineyard ),	Z( :Region ),	MFA Blocks(		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness},		{"Florence Flowery etc.", :Florence Flowery, :Florence Crispness, :Florence Tannin,		:Florence Savory, :Florence Lightness},		{"Xavier Fruity etc.", :Xavier Fruity, :Xavier Spicy, :Xavier Crispness,		:Xavier Alcohol, :Xavier Savory, :Xavier Lightness},		{"Robert Fruity etc.", :Robert Fruity, :Robert Flowery, :Robert Spicy,		:Robert Crispness, :Robert Tannin, :Robert Alcohol, :Robert Savory, :Robert Lightness		},		{"Paula Fruity etc.", :Paula Fruity, :Paula Flowery, :Paula Spicy, :Paula Crispness,		:Paula Tannin, :Paula Savory},		{"Monica Fruity etc.", :Monica Fruity, :Monica Flowery, :Monica Spicy, :Monica Tannin,		:Monica Alcohol, :Monica Savory, :Monica Lightness},		{"Frank Fruity etc.", :Frank Fruity, :Frank Flowery, :Frank Spicy, :Frank Crispness,		:Frank Tannin, :Frank Alcohol, :Frank Savory, :Frank Lightness}	));t = obj << Get Datatable;Show( N Rows( t ) );

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

dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );dt << Multiple Factor Analysis(	Product ID( :Vineyard ),	Z( :Region ),	MFA Blocks(		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness},		{"Florence Flowery etc.", :Florence Flowery, :Florence Crispness, :Florence Tannin,		:Florence Savory, :Florence Lightness},		{"Xavier Fruity etc.", :Xavier Fruity, :Xavier Spicy, :Xavier Crispness,		:Xavier Alcohol, :Xavier Savory, :Xavier Lightness},		{"Robert Fruity etc.", :Robert Fruity, :Robert Flowery, :Robert Spicy,		:Robert Crispness, :Robert Tannin, :Robert Alcohol, :Robert Savory, :Robert Lightness		},		{"Paula Fruity etc.", :Paula Fruity, :Paula Flowery, :Paula Spicy, :Paula Crispness,		:Paula Tannin, :Paula Savory},		{"Monica Fruity etc.", :Monica Fruity, :Monica Flowery, :Monica Spicy, :Monica Tannin,		:Monica Alcohol, :Monica Savory, :Monica Lightness},		{"Frank Fruity etc.", :Frank Fruity, :Frank Flowery, :Frank Spicy, :Frank Crispness,		:Frank Tannin, :Frank Alcohol, :Frank Savory, :Frank Lightness}	));t = obj << Get Script;Show( t );

```

### Get Script With Data Table

**構文:** obj &lt;&lt; Get Script With Data Table

**説明:** この分析を再現するスクリプト(JSL)をデータテーブルへの参照も含めて生成し、それを式として戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );dt << Multiple Factor Analysis(	Product ID( :Vineyard ),	Z( :Region ),	MFA Blocks(		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness},		{"Florence Flowery etc.", :Florence Flowery, :Florence Crispness, :Florence Tannin,		:Florence Savory, :Florence Lightness},		{"Xavier Fruity etc.", :Xavier Fruity, :Xavier Spicy, :Xavier Crispness,		:Xavier Alcohol, :Xavier Savory, :Xavier Lightness},		{"Robert Fruity etc.", :Robert Fruity, :Robert Flowery, :Robert Spicy,		:Robert Crispness, :Robert Tannin, :Robert Alcohol, :Robert Savory, :Robert Lightness		},		{"Paula Fruity etc.", :Paula Fruity, :Paula Flowery, :Paula Spicy, :Paula Crispness,		:Paula Tannin, :Paula Savory},		{"Monica Fruity etc.", :Monica Fruity, :Monica Flowery, :Monica Spicy, :Monica Tannin,		:Monica Alcohol, :Monica Savory, :Monica Lightness},		{"Frank Fruity etc.", :Frank Fruity, :Frank Flowery, :Frank Spicy, :Frank Crispness,		:Frank Tannin, :Frank Alcohol, :Frank Savory, :Frank Lightness}	));t = obj << Get Script With Data Table;Show( t );

```

### Get Timing

**構文:** obj &lt;&lt; Get Timing

**説明:** プラットフォームの起動にかかった時間を取得する。

```jsl

dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );dt << Multiple Factor Analysis(	Product ID( :Vineyard ),	Z( :Region ),	MFA Blocks(		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness},		{"Florence Flowery etc.", :Florence Flowery, :Florence Crispness, :Florence Tannin,		:Florence Savory, :Florence Lightness},		{"Xavier Fruity etc.", :Xavier Fruity, :Xavier Spicy, :Xavier Crispness,		:Xavier Alcohol, :Xavier Savory, :Xavier Lightness},		{"Robert Fruity etc.", :Robert Fruity, :Robert Flowery, :Robert Spicy,		:Robert Crispness, :Robert Tannin, :Robert Alcohol, :Robert Savory, :Robert Lightness		},		{"Paula Fruity etc.", :Paula Fruity, :Paula Flowery, :Paula Spicy, :Paula Crispness,		:Paula Tannin, :Paula Savory},		{"Monica Fruity etc.", :Monica Fruity, :Monica Flowery, :Monica Spicy, :Monica Tannin,		:Monica Alcohol, :Monica Savory, :Monica Lightness},		{"Frank Fruity etc.", :Frank Fruity, :Frank Flowery, :Frank Spicy, :Frank Crispness,		:Frank Tannin, :Frank Alcohol, :Frank Savory, :Frank Lightness}	));t = obj << Get Timing;Show( t );

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

dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );dt << Multiple Factor Analysis(	Product ID( :Vineyard ),	Z( :Region ),	MFA Blocks(		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness},		{"Florence Flowery etc.", :Florence Flowery, :Florence Crispness, :Florence Tannin,		:Florence Savory, :Florence Lightness},		{"Xavier Fruity etc.", :Xavier Fruity, :Xavier Spicy, :Xavier Crispness,		:Xavier Alcohol, :Xavier Savory, :Xavier Lightness},		{"Robert Fruity etc.", :Robert Fruity, :Robert Flowery, :Robert Spicy,		:Robert Crispness, :Robert Tannin, :Robert Alcohol, :Robert Savory, :Robert Lightness		},		{"Paula Fruity etc.", :Paula Fruity, :Paula Flowery, :Paula Spicy, :Paula Crispness,		:Paula Tannin, :Paula Savory},		{"Monica Fruity etc.", :Monica Fruity, :Monica Flowery, :Monica Spicy, :Monica Tannin,		:Monica Alcohol, :Monica Savory, :Monica Lightness},		{"Frank Fruity etc.", :Frank Fruity, :Frank Flowery, :Frank Spicy, :Frank Crispness,		:Frank Tannin, :Frank Alcohol, :Frank Savory, :Frank Lightness}	));obj << Redo Analysis;

```

### Relaunch Analysis

**構文:** obj &lt;&lt; Relaunch Analysis

**説明:** プラットフォームの起動ウィンドウを開き、レポートを作成した時の設定を表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );dt << Multiple Factor Analysis(	Product ID( :Vineyard ),	Z( :Region ),	MFA Blocks(		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness},		{"Florence Flowery etc.", :Florence Flowery, :Florence Crispness, :Florence Tannin,		:Florence Savory, :Florence Lightness},		{"Xavier Fruity etc.", :Xavier Fruity, :Xavier Spicy, :Xavier Crispness,		:Xavier Alcohol, :Xavier Savory, :Xavier Lightness},		{"Robert Fruity etc.", :Robert Fruity, :Robert Flowery, :Robert Spicy,		:Robert Crispness, :Robert Tannin, :Robert Alcohol, :Robert Savory, :Robert Lightness		},		{"Paula Fruity etc.", :Paula Fruity, :Paula Flowery, :Paula Spicy, :Paula Crispness,		:Paula Tannin, :Paula Savory},		{"Monica Fruity etc.", :Monica Fruity, :Monica Flowery, :Monica Spicy, :Monica Tannin,		:Monica Alcohol, :Monica Savory, :Monica Lightness},		{"Frank Fruity etc.", :Frank Fruity, :Frank Flowery, :Frank Spicy, :Frank Crispness,		:Frank Tannin, :Frank Alcohol, :Frank Savory, :Frank Lightness}	));obj << Relaunch Analysis;

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

dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );dt << Multiple Factor Analysis(	Product ID( :Vineyard ),	Z( :Region ),	MFA Blocks(		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness},		{"Florence Flowery etc.", :Florence Flowery, :Florence Crispness, :Florence Tannin,		:Florence Savory, :Florence Lightness},		{"Xavier Fruity etc.", :Xavier Fruity, :Xavier Spicy, :Xavier Crispness,		:Xavier Alcohol, :Xavier Savory, :Xavier Lightness},		{"Robert Fruity etc.", :Robert Fruity, :Robert Flowery, :Robert Spicy,		:Robert Crispness, :Robert Tannin, :Robert Alcohol, :Robert Savory, :Robert Lightness		},		{"Paula Fruity etc.", :Paula Fruity, :Paula Flowery, :Paula Spicy, :Paula Crispness,		:Paula Tannin, :Paula Savory},		{"Monica Fruity etc.", :Monica Fruity, :Monica Flowery, :Monica Spicy, :Monica Tannin,		:Monica Alcohol, :Monica Savory, :Monica Lightness},		{"Frank Fruity etc.", :Frank Fruity, :Frank Flowery, :Frank Spicy, :Frank Crispness,		:Frank Tannin, :Frank Alcohol, :Frank Savory, :Frank Lightness}	));r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Report View

**構文:** obj &lt;&lt; Report View( "完全"|"要約" )

**説明:** レポートビューは、プラットフォームレポートの詳細を表示するかどうかを決定する。Fullはすべての詳細を表示し、Summaryはプラットフォームにより限定されたものだけを表示する。 動作をカスタマイズするため、各ディスプレイボックスは<<Set Summary Behaviorメッセージをサポートする。

```jsl

dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );dt << Multiple Factor Analysis(	Product ID( :Vineyard ),	Z( :Region ),	MFA Blocks(		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness},		{"Florence Flowery etc.", :Florence Flowery, :Florence Crispness, :Florence Tannin,		:Florence Savory, :Florence Lightness},		{"Xavier Fruity etc.", :Xavier Fruity, :Xavier Spicy, :Xavier Crispness,		:Xavier Alcohol, :Xavier Savory, :Xavier Lightness},		{"Robert Fruity etc.", :Robert Fruity, :Robert Flowery, :Robert Spicy,		:Robert Crispness, :Robert Tannin, :Robert Alcohol, :Robert Savory, :Robert Lightness		},		{"Paula Fruity etc.", :Paula Fruity, :Paula Flowery, :Paula Spicy, :Paula Crispness,		:Paula Tannin, :Paula Savory},		{"Monica Fruity etc.", :Monica Fruity, :Monica Flowery, :Monica Spicy, :Monica Tannin,		:Monica Alcohol, :Monica Savory, :Monica Lightness},		{"Frank Fruity etc.", :Frank Fruity, :Frank Flowery, :Frank Spicy, :Frank Crispness,		:Frank Tannin, :Frank Alcohol, :Frank Savory, :Frank Lightness}	));obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**構文:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**説明:** 分析を再現するためのJSLスクリプトを作成し、データテーブルにテーブルプロパティとして保存する。スクリプトの名前を指定できる。Append Suffixオプションは、スクリプト名に数字の接尾辞を追加する。これにより、同名のスクリプトが存在していても区別できる。Promptオプションは、ユーザにスクリプト名の指定を促す。Replaceオプションは、同名の既存のスクリプトを置き換える。

```jsl

dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));dt << Multiple Factor Analysis(	Product ID( :Vineyard ),	Z( :Region ),	MFA Blocks(		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness},		{"Florence Flowery etc.", :Florence Flowery, :Florence Crispness, :Florence Tannin,		:Florence Savory, :Florence Lightness},		{"Xavier Fruity etc.", :Xavier Fruity, :Xavier Spicy, :Xavier Crispness,		:Xavier Alcohol, :Xavier Savory, :Xavier Lightness},		{"Robert Fruity etc.", :Robert Fruity, :Robert Flowery, :Robert Spicy,		:Robert Crispness, :Robert Tannin, :Robert Alcohol, :Robert Savory, :Robert Lightness		},		{"Paula Fruity etc.", :Paula Fruity, :Paula Flowery, :Paula Spicy, :Paula Crispness,		:Paula Tannin, :Paula Savory},		{"Monica Fruity etc.", :Monica Fruity, :Monica Flowery, :Monica Spicy, :Monica Tannin,		:Monica Alcohol, :Monica Savory, :Monica Lightness},		{"Frank Fruity etc.", :Frank Fruity, :Frank Flowery, :Frank Spicy, :Frank Crispness,		:Frank Tannin, :Frank Alcohol, :Frank Savory, :Frank Lightness}	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**構文:** obj &lt;&lt; Save ByGroup Script to Journal

**説明:** この分析を再現するJSLスクリプトを生成し、ジャーナルにそのスクリプトのボタンを追加する。

```jsl

dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));dt << Multiple Factor Analysis(	Product ID( :Vineyard ),	Z( :Region ),	MFA Blocks(		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness},		{"Florence Flowery etc.", :Florence Flowery, :Florence Crispness, :Florence Tannin,		:Florence Savory, :Florence Lightness},		{"Xavier Fruity etc.", :Xavier Fruity, :Xavier Spicy, :Xavier Crispness,		:Xavier Alcohol, :Xavier Savory, :Xavier Lightness},		{"Robert Fruity etc.", :Robert Fruity, :Robert Flowery, :Robert Spicy,		:Robert Crispness, :Robert Tannin, :Robert Alcohol, :Robert Savory, :Robert Lightness		},		{"Paula Fruity etc.", :Paula Fruity, :Paula Flowery, :Paula Spicy, :Paula Crispness,		:Paula Tannin, :Paula Savory},		{"Monica Fruity etc.", :Monica Fruity, :Monica Flowery, :Monica Spicy, :Monica Tannin,		:Monica Alcohol, :Monica Savory, :Monica Lightness},		{"Frank Fruity etc.", :Frank Fruity, :Frank Flowery, :Frank Spicy, :Frank Crispness,		:Frank Tannin, :Frank Alcohol, :Frank Savory, :Frank Lightness}	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**構文:** obj &lt;&lt; Save ByGroup Script to Script Window

**説明:** この分析を再現するJSLスクリプトを生成し、現在のスクリプトウィンドウに表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));dt << Multiple Factor Analysis(	Product ID( :Vineyard ),	Z( :Region ),	MFA Blocks(		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness},		{"Florence Flowery etc.", :Florence Flowery, :Florence Crispness, :Florence Tannin,		:Florence Savory, :Florence Lightness},		{"Xavier Fruity etc.", :Xavier Fruity, :Xavier Spicy, :Xavier Crispness,		:Xavier Alcohol, :Xavier Savory, :Xavier Lightness},		{"Robert Fruity etc.", :Robert Fruity, :Robert Flowery, :Robert Spicy,		:Robert Crispness, :Robert Tannin, :Robert Alcohol, :Robert Savory, :Robert Lightness		},		{"Paula Fruity etc.", :Paula Fruity, :Paula Flowery, :Paula Spicy, :Paula Crispness,		:Paula Tannin, :Paula Savory},		{"Monica Fruity etc.", :Monica Fruity, :Monica Flowery, :Monica Spicy, :Monica Tannin,		:Monica Alcohol, :Monica Savory, :Monica Lightness},		{"Frank Fruity etc.", :Frank Fruity, :Frank Flowery, :Frank Spicy, :Frank Crispness,		:Frank Tannin, :Frank Alcohol, :Frank Savory, :Frank Lightness}	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**構文:** obj &lt;&lt; Save Script for All Objects

**説明:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );dt << Multiple Factor Analysis(	Product ID( :Vineyard ),	Z( :Region ),	MFA Blocks(		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness},		{"Florence Flowery etc.", :Florence Flowery, :Florence Crispness, :Florence Tannin,		:Florence Savory, :Florence Lightness},		{"Xavier Fruity etc.", :Xavier Fruity, :Xavier Spicy, :Xavier Crispness,		:Xavier Alcohol, :Xavier Savory, :Xavier Lightness},		{"Robert Fruity etc.", :Robert Fruity, :Robert Flowery, :Robert Spicy,		:Robert Crispness, :Robert Tannin, :Robert Alcohol, :Robert Savory, :Robert Lightness		},		{"Paula Fruity etc.", :Paula Fruity, :Paula Flowery, :Paula Spicy, :Paula Crispness,		:Paula Tannin, :Paula Savory},		{"Monica Fruity etc.", :Monica Fruity, :Monica Flowery, :Monica Spicy, :Monica Tannin,		:Monica Alcohol, :Monica Savory, :Monica Lightness},		{"Frank Fruity etc.", :Frank Fruity, :Frank Flowery, :Frank Spicy, :Frank Crispness,		:Frank Tannin, :Frank Alcohol, :Frank Savory, :Frank Lightness}	));obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**構文:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**説明:** すべてのレポートオブジェクトを再現するスクリプトを現在のデータテーブルに保存する。このオプションは、ウィンドウ内にレポートが複数ある場合に便利。作成されるスクリプトの名前は、引用符で囲んで指定しない限り、1つ目のプラットフォーム名となる。

**例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));dt << Multiple Factor Analysis(	Product ID( :Vineyard ),	Z( :Region ),	MFA Blocks(		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness},		{"Florence Flowery etc.", :Florence Flowery, :Florence Crispness, :Florence Tannin,		:Florence Savory, :Florence Lightness},		{"Xavier Fruity etc.", :Xavier Fruity, :Xavier Spicy, :Xavier Crispness,		:Xavier Alcohol, :Xavier Savory, :Xavier Lightness},		{"Robert Fruity etc.", :Robert Fruity, :Robert Flowery, :Robert Spicy,		:Robert Crispness, :Robert Tannin, :Robert Alcohol, :Robert Savory, :Robert Lightness		},		{"Paula Fruity etc.", :Paula Fruity, :Paula Flowery, :Paula Spicy, :Paula Crispness,		:Paula Tannin, :Paula Savory},		{"Monica Fruity etc.", :Monica Fruity, :Monica Flowery, :Monica Spicy, :Monica Tannin,		:Monica Alcohol, :Monica Savory, :Monica Lightness},		{"Frank Fruity etc.", :Frank Fruity, :Frank Flowery, :Frank Spicy, :Frank Crispness,		:Frank Tannin, :Frank Alcohol, :Frank Savory, :Frank Lightness}	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table;

```

**例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));dt << Multiple Factor Analysis(	Product ID( :Vineyard ),	Z( :Region ),	MFA Blocks(		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness},		{"Florence Flowery etc.", :Florence Flowery, :Florence Crispness, :Florence Tannin,		:Florence Savory, :Florence Lightness},		{"Xavier Fruity etc.", :Xavier Fruity, :Xavier Spicy, :Xavier Crispness,		:Xavier Alcohol, :Xavier Savory, :Xavier Lightness},		{"Robert Fruity etc.", :Robert Fruity, :Robert Flowery, :Robert Spicy,		:Robert Crispness, :Robert Tannin, :Robert Alcohol, :Robert Savory, :Robert Lightness		},		{"Paula Fruity etc.", :Paula Fruity, :Paula Flowery, :Paula Spicy, :Paula Crispness,		:Paula Tannin, :Paula Savory},		{"Monica Fruity etc.", :Monica Fruity, :Monica Flowery, :Monica Spicy, :Monica Tannin,		:Monica Alcohol, :Monica Savory, :Monica Lightness},		{"Frank Fruity etc.", :Frank Fruity, :Frank Flowery, :Frank Spicy, :Frank Crispness,		:Frank Tannin, :Frank Alcohol, :Frank Savory, :Frank Lightness}	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**構文:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**説明:** この分析を再現するJSLスクリプトを生成し、データテーブルのテーブルプロパティとして保存する。

```jsl

dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );dt << Multiple Factor Analysis(	Product ID( :Vineyard ),	Z( :Region ),	MFA Blocks(		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness},		{"Florence Flowery etc.", :Florence Flowery, :Florence Crispness, :Florence Tannin,		:Florence Savory, :Florence Lightness},		{"Xavier Fruity etc.", :Xavier Fruity, :Xavier Spicy, :Xavier Crispness,		:Xavier Alcohol, :Xavier Savory, :Xavier Lightness},		{"Robert Fruity etc.", :Robert Fruity, :Robert Flowery, :Robert Spicy,		:Robert Crispness, :Robert Tannin, :Robert Alcohol, :Robert Savory, :Robert Lightness		},		{"Paula Fruity etc.", :Paula Fruity, :Paula Flowery, :Paula Spicy, :Paula Crispness,		:Paula Tannin, :Paula Savory},		{"Monica Fruity etc.", :Monica Fruity, :Monica Flowery, :Monica Spicy, :Monica Tannin,		:Monica Alcohol, :Monica Savory, :Monica Lightness},		{"Frank Fruity etc.", :Frank Fruity, :Frank Flowery, :Frank Spicy, :Frank Crispness,		:Frank Tannin, :Frank Alcohol, :Frank Savory, :Frank Lightness}	));obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**構文:** obj &lt;&lt; Save Script to Journal

**説明:** この分析を再現するJSLスクリプトを生成し、ジャーナルにそのスクリプトのボタンを追加する。

```jsl

dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );dt << Multiple Factor Analysis(	Product ID( :Vineyard ),	Z( :Region ),	MFA Blocks(		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness},		{"Florence Flowery etc.", :Florence Flowery, :Florence Crispness, :Florence Tannin,		:Florence Savory, :Florence Lightness},		{"Xavier Fruity etc.", :Xavier Fruity, :Xavier Spicy, :Xavier Crispness,		:Xavier Alcohol, :Xavier Savory, :Xavier Lightness},		{"Robert Fruity etc.", :Robert Fruity, :Robert Flowery, :Robert Spicy,		:Robert Crispness, :Robert Tannin, :Robert Alcohol, :Robert Savory, :Robert Lightness		},		{"Paula Fruity etc.", :Paula Fruity, :Paula Flowery, :Paula Spicy, :Paula Crispness,		:Paula Tannin, :Paula Savory},		{"Monica Fruity etc.", :Monica Fruity, :Monica Flowery, :Monica Spicy, :Monica Tannin,		:Monica Alcohol, :Monica Savory, :Monica Lightness},		{"Frank Fruity etc.", :Frank Fruity, :Frank Flowery, :Frank Spicy, :Frank Crispness,		:Frank Tannin, :Frank Alcohol, :Frank Savory, :Frank Lightness}	));obj << Save Script to Journal;

```

### Save Script to Report

**構文:** obj &lt;&lt; Save Script to Report

**説明:** この分析を再現するJSLスクリプトを生成し、レポートウィンドウに表示する。分析手順の記録を結果と一緒に残せる。

```jsl

dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );dt << Multiple Factor Analysis(	Product ID( :Vineyard ),	Z( :Region ),	MFA Blocks(		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness},		{"Florence Flowery etc.", :Florence Flowery, :Florence Crispness, :Florence Tannin,		:Florence Savory, :Florence Lightness},		{"Xavier Fruity etc.", :Xavier Fruity, :Xavier Spicy, :Xavier Crispness,		:Xavier Alcohol, :Xavier Savory, :Xavier Lightness},		{"Robert Fruity etc.", :Robert Fruity, :Robert Flowery, :Robert Spicy,		:Robert Crispness, :Robert Tannin, :Robert Alcohol, :Robert Savory, :Robert Lightness		},		{"Paula Fruity etc.", :Paula Fruity, :Paula Flowery, :Paula Spicy, :Paula Crispness,		:Paula Tannin, :Paula Savory},		{"Monica Fruity etc.", :Monica Fruity, :Monica Flowery, :Monica Spicy, :Monica Tannin,		:Monica Alcohol, :Monica Savory, :Monica Lightness},		{"Frank Fruity etc.", :Frank Fruity, :Frank Flowery, :Frank Spicy, :Frank Crispness,		:Frank Tannin, :Frank Alcohol, :Frank Savory, :Frank Lightness}	));obj << Save Script to Report;

```

### Save Script to Script Window

**構文:** obj &lt;&lt; Save Script to Script Window

**説明:** この分析を再現するJSLスクリプトを生成し、現在のスクリプトウィンドウに表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );dt << Multiple Factor Analysis(	Product ID( :Vineyard ),	Z( :Region ),	MFA Blocks(		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness},		{"Florence Flowery etc.", :Florence Flowery, :Florence Crispness, :Florence Tannin,		:Florence Savory, :Florence Lightness},		{"Xavier Fruity etc.", :Xavier Fruity, :Xavier Spicy, :Xavier Crispness,		:Xavier Alcohol, :Xavier Savory, :Xavier Lightness},		{"Robert Fruity etc.", :Robert Fruity, :Robert Flowery, :Robert Spicy,		:Robert Crispness, :Robert Tannin, :Robert Alcohol, :Robert Savory, :Robert Lightness		},		{"Paula Fruity etc.", :Paula Fruity, :Paula Flowery, :Paula Spicy, :Paula Crispness,		:Paula Tannin, :Paula Savory},		{"Monica Fruity etc.", :Monica Fruity, :Monica Flowery, :Monica Spicy, :Monica Tannin,		:Monica Alcohol, :Monica Savory, :Monica Lightness},		{"Frank Fruity etc.", :Frank Fruity, :Frank Flowery, :Frank Spicy, :Frank Crispness,		:Frank Tannin, :Frank Alcohol, :Frank Savory, :Frank Lightness}	));obj << Save Script to Script Window;

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

dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );dt << Multiple Factor Analysis(	Product ID( :Vineyard ),	Z( :Region ),	MFA Blocks(		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness},		{"Florence Flowery etc.", :Florence Flowery, :Florence Crispness, :Florence Tannin,		:Florence Savory, :Florence Lightness},		{"Xavier Fruity etc.", :Xavier Fruity, :Xavier Spicy, :Xavier Crispness,		:Xavier Alcohol, :Xavier Savory, :Xavier Lightness},		{"Robert Fruity etc.", :Robert Fruity, :Robert Flowery, :Robert Spicy,		:Robert Crispness, :Robert Tannin, :Robert Alcohol, :Robert Savory, :Robert Lightness		},		{"Paula Fruity etc.", :Paula Fruity, :Paula Flowery, :Paula Spicy, :Paula Crispness,		:Paula Tannin, :Paula Savory},		{"Monica Fruity etc.", :Monica Fruity, :Monica Flowery, :Monica Spicy, :Monica Tannin,		:Monica Alcohol, :Monica Savory, :Monica Lightness},		{"Frank Fruity etc.", :Frank Fruity, :Frank Flowery, :Frank Spicy, :Frank Crispness,		:Frank Tannin, :Frank Alcohol, :Frank Savory, :Frank Lightness}	));obj << Title( "My Platform" );

```

### Top Report

**構文:** obj &lt;&lt; Top Report

**説明:** レポート内のルートノードへの参照を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );dt << Multiple Factor Analysis(	Product ID( :Vineyard ),	Z( :Region ),	MFA Blocks(		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness},		{"Florence Flowery etc.", :Florence Flowery, :Florence Crispness, :Florence Tannin,		:Florence Savory, :Florence Lightness},		{"Xavier Fruity etc.", :Xavier Fruity, :Xavier Spicy, :Xavier Crispness,		:Xavier Alcohol, :Xavier Savory, :Xavier Lightness},		{"Robert Fruity etc.", :Robert Fruity, :Robert Flowery, :Robert Spicy,		:Robert Crispness, :Robert Tannin, :Robert Alcohol, :Robert Savory, :Robert Lightness		},		{"Paula Fruity etc.", :Paula Fruity, :Paula Flowery, :Paula Spicy, :Paula Crispness,		:Paula Tannin, :Paula Savory},		{"Monica Fruity etc.", :Monica Fruity, :Monica Flowery, :Monica Spicy, :Monica Tannin,		:Monica Alcohol, :Monica Savory, :Monica Lightness},		{"Frank Fruity etc.", :Frank Fruity, :Frank Flowery, :Frank Spicy, :Frank Crispness,		:Frank Tannin, :Frank Alcohol, :Frank Savory, :Frank Lightness}	));r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

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

**構文:** obj = Multiple Factor Analysis(...Window View( "Visible"|"Invisible"|"Private" )...)

**説明:** レポートとして作成するウィンドウの種類を設定する。デフォルトでは、Visibleレポートウィンドウが作成される。Invisible のウィンドウは画面に表示されないが、Window()などの関数によって検出できる。Private のウィンドウにはほとんどのウィンドウメッセージを送れるが、検出することはできないため、レポートオブジェクトを通してアクセスする必要がある。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

## 列

### By

**構文:** obj = Multiple Factor Analysis(...&lt;By( column(s) )&gt;...)

**説明:** 指定された列の各水準に対して、個別に分析を実行する。

**JMP追加されたバージョン:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));dt << Multiple Factor Analysis(	Product ID( :Vineyard ),	Z( :Region ),	MFA Blocks(		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness},		{"Florence Flowery etc.", :Florence Flowery, :Florence Crispness, :Florence Tannin,		:Florence Savory, :Florence Lightness},		{"Xavier Fruity etc.", :Xavier Fruity, :Xavier Spicy, :Xavier Crispness,		:Xavier Alcohol, :Xavier Savory, :Xavier Lightness},		{"Robert Fruity etc.", :Robert Fruity, :Robert Flowery, :Robert Spicy,		:Robert Crispness, :Robert Tannin, :Robert Alcohol, :Robert Savory, :Robert Lightness		},		{"Paula Fruity etc.", :Paula Fruity, :Paula Flowery, :Paula Spicy, :Paula Crispness,		:Paula Tannin, :Paula Savory},		{"Monica Fruity etc.", :Monica Fruity, :Monica Flowery, :Monica Spicy, :Monica Tannin,		:Monica Alcohol, :Monica Savory, :Monica Lightness},		{"Frank Fruity etc.", :Frank Fruity, :Frank Flowery, :Frank Spicy, :Frank Crispness,		:Frank Tannin, :Frank Alcohol, :Frank Savory, :Frank Lightness}	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));

```

### Freq

**構文:** obj = Multiple Factor Analysis(...&lt;Freq( column )&gt;...)

**説明:** 分析の際に各行の度数として用いる値の列を指定する。

**JMP追加されたバージョン:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );dt << New Column( "_freqcol", Numeric, Continuous, Set Each Value( Random Integer( 1, 5 ) ) );dt << Multiple Factor Analysis(	Product ID( :Vineyard ),	Z( :Region ),	MFA Blocks(		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness},		{"Florence Flowery etc.", :Florence Flowery, :Florence Crispness, :Florence Tannin,		:Florence Savory, :Florence Lightness},		{"Xavier Fruity etc.", :Xavier Fruity, :Xavier Spicy, :Xavier Crispness,		:Xavier Alcohol, :Xavier Savory, :Xavier Lightness},		{"Robert Fruity etc.", :Robert Fruity, :Robert Flowery, :Robert Spicy,		:Robert Crispness, :Robert Tannin, :Robert Alcohol, :Robert Savory, :Robert Lightness		},		{"Paula Fruity etc.", :Paula Fruity, :Paula Flowery, :Paula Spicy, :Paula Crispness,		:Paula Tannin, :Paula Savory},		{"Monica Fruity etc.", :Monica Fruity, :Monica Flowery, :Monica Spicy, :Monica Tannin,		:Monica Alcohol, :Monica Savory, :Monica Lightness},		{"Frank Fruity etc.", :Frank Fruity, :Frank Flowery, :Frank Spicy, :Frank Crispness,		:Frank Tannin, :Frank Alcohol, :Frank Savory, :Frank Lightness}	),	Freq( :_freqcol ));

```

### MFA Blocks

**構文:** obj = Multiple Factor Analysis(...&lt;MFA Blocks( column )&gt;...)

**説明:** 多重因子分析において、1つのグループとして扱う変数群を指定する。

**JMP追加されたバージョン:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );dt << Multiple Factor Analysis(	Product ID( :Wine ),	MFA Blocks(		{"Susan", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness},		{"Florence", :Florence Flowery, :Florence Crispness, :Florence Tannin,		:Florence Savory, :Florence Lightness}	));

```

### Product ID

**構文:** obj = Multiple Factor Analysis(...&lt;Product ID( column )&gt;...)

**説明:** 分析対象とするアイテムまたは商品の列を指定する。

**JMP追加されたバージョン:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );dt << Multiple Factor Analysis(	Product ID( :Wine ),	MFA Blocks(		{"Susan", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness},		{"Florence", :Florence Flowery, :Florence Crispness, :Florence Tannin,		:Florence Savory, :Florence Lightness}	));

```

### Supplementary

**構文:** obj = Multiple Factor Analysis(...&lt;Supplementary( column )&gt;...)

**説明:** 追加変数を指定する。追加変数は、モデルの推定には使用されないため、追加変数を含めても推定結果には影響しない。追加変数は、データの解釈やその後の分析に役立つ。

**JMP追加されたバージョン:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );dt << Multiple Factor Analysis(	Product ID( :Wine ),	Z( :Region ),	MFA Blocks(		{"Susan", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness},		{"Florence", :Florence Flowery, :Florence Crispness, :Florence Tannin,		:Florence Savory, :Florence Lightness}	));

```

### Weight

**構文:** obj = Multiple Factor Analysis(...&lt;Weight( column )&gt;...)

**説明:** 分析の際に各行の重みとして用いる値の列を指定する。

**JMP追加されたバージョン:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );dt << New Column( "_weightcol", Numeric, Continuous, Set Each Value( Random Beta( 1, 1 ) ) );dt << Multiple Factor Analysis(	Product ID( :Vineyard ),	Z( :Region ),	MFA Blocks(		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness},		{"Florence Flowery etc.", :Florence Flowery, :Florence Crispness, :Florence Tannin,		:Florence Savory, :Florence Lightness},		{"Xavier Fruity etc.", :Xavier Fruity, :Xavier Spicy, :Xavier Crispness,		:Xavier Alcohol, :Xavier Savory, :Xavier Lightness},		{"Robert Fruity etc.", :Robert Fruity, :Robert Flowery, :Robert Spicy,		:Robert Crispness, :Robert Tannin, :Robert Alcohol, :Robert Savory, :Robert Lightness		},		{"Paula Fruity etc.", :Paula Fruity, :Paula Flowery, :Paula Spicy, :Paula Crispness,		:Paula Tannin, :Paula Savory},		{"Monica Fruity etc.", :Monica Fruity, :Monica Flowery, :Monica Spicy, :Monica Tannin,		:Monica Alcohol, :Monica Savory, :Monica Lightness},		{"Frank Fruity etc.", :Frank Fruity, :Frank Flowery, :Frank Spicy, :Frank Crispness,		:Frank Tannin, :Frank Alcohol, :Frank Savory, :Frank Lightness}	),	Weight( :_weightcol ));

```

### Z

**構文:** obj = Multiple Factor Analysis(...&lt;Z( column )&gt;...)

**説明:** 追加変数を指定する。追加変数は、モデルの推定には使用されないため、追加変数を含めても推定結果には影響しない。追加変数は、データの解釈やその後の分析に役立つ。

**JMP追加されたバージョン:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );dt << Multiple Factor Analysis(	Product ID( :Wine ),	Z( :Region ),	MFA Blocks(		{"Susan", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness},		{"Florence", :Florence Flowery, :Florence Crispness, :Florence Tannin,		:Florence Savory, :Florence Lightness}	));

```

## 関連するコンストラクター

### Multiple Factor Analysis

**構文:** Multiple Factor Analysis( MFABLocks({"Block 1", columns},{"Block 2", columns}) )

**説明:** 官能データの分析においてパネリスト間の一致性を分析する。

**JMP追加されたバージョン:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );dt << Multiple Factor Analysis(	Product ID( :Vineyard ),	Z( :Region ),	MFA Blocks(		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness},		{"Florence Flowery etc.", :Florence Flowery, :Florence Crispness, :Florence Tannin,		:Florence Savory, :Florence Lightness},		{"Xavier Fruity etc.", :Xavier Fruity, :Xavier Spicy, :Xavier Crispness,		:Xavier Alcohol, :Xavier Savory, :Xavier Lightness},		{"Robert Fruity etc.", :Robert Fruity, :Robert Flowery, :Robert Spicy,		:Robert Crispness, :Robert Tannin, :Robert Alcohol, :Robert Savory, :Robert Lightness		},		{"Paula Fruity etc.", :Paula Fruity, :Paula Flowery, :Paula Spicy, :Paula Crispness,		:Paula Tannin, :Paula Savory},		{"Monica Fruity etc.", :Monica Fruity, :Monica Flowery, :Monica Spicy, :Monica Tannin,		:Monica Alcohol, :Monica Savory, :Monica Lightness},		{"Frank Fruity etc.", :Frank Fruity, :Frank Flowery, :Frank Spicy, :Frank Crispness,		:Frank Tannin, :Frank Alcohol, :Frank Savory, :Frank Lightness}	));

```

## 項目のメッセージ

### Arrow Lines

**構文:** obj &lt;&lt; Arrow Lines( state=0|1 )

**説明:** グラフ上における矢印線の表示/非表示を切り替える。 デフォルトではオン。

**JMP追加されたバージョン:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );obj = dt << Multiple Factor Analysis(	MFA Blocks(		{"Carolyn Peppery etc.", :Carolyn Peppery, :Carolyn Tannic, :Carolyn Aromatic,		:Carolyn Berry Notes},		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness}	));obj << Arrow Lines( 0 );

```

### Biplot

**構文:** obj &lt;&lt; Biplot( state=0|1 )

**説明:** 指定された個数の成分に関して、スコアプロットと負荷量プロットを重ね合わせたプロットを表示する。

**JMP追加されたバージョン:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );obj = dt << Multiple Factor Analysis(	MFA Blocks(		{"Carolyn Peppery etc.", :Carolyn Peppery, :Carolyn Tannic, :Carolyn Aromatic,		:Carolyn Berry Notes},		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness}	));obj << Biplot( 1 );

```

### Biplot Select Component

**構文:** obj&lt;&lt;Biplot Select Component( 1, 3 )

**説明:** バイプロットの軸に用いる成分を指定する。

**JMP追加されたバージョン:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );obj = dt << Multiple Factor Analysis(	MFA Blocks(		{"Carolyn Peppery etc.", :Carolyn Peppery, :Carolyn Tannic, :Carolyn Aromatic,		:Carolyn Berry Notes},		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness}	));obj << Biplot Select Component( 1, 3 );

```

### Block Partial Contributions

**構文:** obj &lt;&lt; Block Partial Contributions( state=0|1 )

**説明:** ブロックの偏寄与率の表示/非表示を切り替える。これは、ブロックに含まれている変数が該当の次元にどれぐらい寄与しているか、ブロック内で合計した寄与率である。

**JMP追加されたバージョン:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );obj = dt << Multiple Factor Analysis(	MFA Blocks(		{"Carolyn Peppery etc.", :Carolyn Peppery, :Carolyn Tannic, :Carolyn Aromatic,		:Carolyn Berry Notes},		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness}	));obj << Block Partial Contributions( 1 );

```

### Block Partial Inertias

**構文:** obj &lt;&lt; Block Partial Inertias( state=0|1 )

**説明:** 尺度を変更したブロックの偏寄与率の表示/非表示を切り替える。「ブロックの偏寄与率」を合計が固有値になるように変更したものである。

**JMP追加されたバージョン:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );obj = dt << Multiple Factor Analysis(	MFA Blocks(		{"Carolyn Peppery etc.", :Carolyn Peppery, :Carolyn Tannic, :Carolyn Aromatic,		:Carolyn Berry Notes},		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness}	));obj << Block Partial Inertias( 1 );

```

### Block Partial and Consensus Correlations

**構文:** obj &lt;&lt; Block Partial and Consensus Correlations( state=0|1 )

**説明:** ブロック偏スコアと全体スコアとの相関係数を要素とする行列の表示/非表示を切り替える。

**JMP追加されたバージョン:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );obj = dt << Multiple Factor Analysis(	MFA Blocks(		{"Carolyn Peppery etc.", :Carolyn Peppery, :Carolyn Tannic, :Carolyn Aromatic,		:Carolyn Berry Notes},		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness}	));obj << Block Partial and Consensus Correlations( 1 );

```

### Block Squared Cosines

**構文:** obj &lt;&lt; Block Squared Cosines( state=0|1 )

**説明:** 該当のブロックが、各次元でどれぐらい表現されるかを示す指標の表示/非表示を切り替える。

**JMP追加されたバージョン:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );obj = dt << Multiple Factor Analysis(	MFA Blocks(		{"Carolyn Peppery etc.", :Carolyn Peppery, :Carolyn Tannic, :Carolyn Aromatic,		:Carolyn Berry Notes},		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness}	));obj << Block Squared Cosines( 1 );

```

### Block Weights

**構文:** obj &lt;&lt; Block Weights( state=0|1 )

**説明:** ブロックに対する重みの表示/非表示を切り替える。この重みは、該当ブロックの第1特異値の逆数である。

**JMP追加されたバージョン:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );obj = dt << Multiple Factor Analysis(	MFA Blocks(		{"Carolyn Peppery etc.", :Carolyn Peppery, :Carolyn Tannic, :Carolyn Aromatic,		:Carolyn Berry Notes},		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness}	));obj << Block Weights( 1 );

```

### Consensus Map

**構文:** obj &lt;&lt; Consensus Map( state=0|1 )

**説明:** コンセンサスマップの表示/非表示を切り替える。コンセンサスマップには、各ブロックのスコアが、重心とともにプロットされる。 デフォルトではオン。

**JMP追加されたバージョン:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );obj = dt << Multiple Factor Analysis(	MFA Blocks(		{"Carolyn Peppery etc.", :Carolyn Peppery, :Carolyn Tannic, :Carolyn Aromatic,		:Carolyn Berry Notes},		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness}	));obj << Consensus Map( 0 );

```

### Consensus Map Select Component

**構文:** obj&lt;&lt;Consensus Map Select Component( 1, 3 )

**説明:** コンセンサスマップの軸に用いる成分を選択する。

**JMP追加されたバージョン:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );obj = dt << Multiple Factor Analysis(	MFA Blocks(		{"Carolyn Peppery etc.", :Carolyn Peppery, :Carolyn Tannic, :Carolyn Aromatic,		:Carolyn Berry Notes},		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness}	));obj << Consensus Map Select Component( 1, 3 );

```

### Eigenvalues

**構文:** obj &lt;&lt; Eigenvalues( state=0|1 )

**説明:** 固有値、寄与率、累積寄与率の表示/非表示を切り替える。なお、これらは、固有値が大きい順に表示される。

**JMP追加されたバージョン:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );obj = dt << Multiple Factor Analysis(	MFA Blocks(		{"Carolyn Peppery etc.", :Carolyn Peppery, :Carolyn Tannic, :Carolyn Aromatic,		:Carolyn Berry Notes},		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness}	));obj << Eigenvalues( 1 );

```

### Eigenvectors

**構文:** obj &lt;&lt; Eigenvectors( state=0|1 )

**説明:** 固有ベクトルに関するレポートの表示/非表示を切り替える。

**JMP追加されたバージョン:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );obj = dt << Multiple Factor Analysis(	MFA Blocks(		{"Carolyn Peppery etc.", :Carolyn Peppery, :Carolyn Tannic, :Carolyn Aromatic,		:Carolyn Berry Notes},		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness}	));obj << Eigenvectors( 1 );

```

### Highlight Product

**構文:** obj&lt;&lt;Partial Axes Plot Select Component( 1, 3 )

**説明:** 指定された慣性の値に基づき、データ点の一部分だけを表示する。

**JMP追加されたバージョン:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );obj = dt << Multiple Factor Analysis(	MFA Blocks(		{"Carolyn Peppery etc.", :Carolyn Peppery, :Carolyn Tannic, :Carolyn Aromatic,		:Carolyn Berry Notes},		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness}	),	Consensus Map( 1 ));obj << Highlight Product( "Small Inertia", 4 );

```

### Lg Coefficients

**構文:** obj &lt;&lt; Lg Coefficients( state=0|1 )

**説明:** ブロック間の類似性を示す係数を要素とする行列の表示/非表示を切り替える。Lg係数を標準化したものが、RV相関になる。

**JMP追加されたバージョン:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );obj = dt << Multiple Factor Analysis(	MFA Blocks(		{"Carolyn Peppery etc.", :Carolyn Peppery, :Carolyn Tannic, :Carolyn Aromatic,		:Carolyn Berry Notes},		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness}	));obj << Lg Coefficients( 1 );

```

### Partial Axes Plot

**構文:** obj &lt;&lt; Partial Axes Plot( state=0|1 )

**説明:** 部分主成分軸プロットの表示/非表示を切り替える。部分主成分軸プロットは、各ブロックでの主成分と、全体での主成分との関係を図示する。

**JMP追加されたバージョン:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );obj = dt << Multiple Factor Analysis(	MFA Blocks(		{"Carolyn Peppery etc.", :Carolyn Peppery, :Carolyn Tannic, :Carolyn Aromatic,		:Carolyn Berry Notes},		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness}	));obj << Partial Axes Plot( 1 );

```

### Partial Axes Plot Select Component

**構文:** obj&lt;&lt;Partial Axes Plot Select Component( 1, 3 )

**説明:** 部分主成分軸プロットの軸に用いる成分を指定する。

**JMP追加されたバージョン:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );obj = dt << Multiple Factor Analysis(	MFA Blocks(		{"Carolyn Peppery etc.", :Carolyn Peppery, :Carolyn Tannic, :Carolyn Aromatic,		:Carolyn Berry Notes},		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness}	),	Partial Axes Plot( 1 ));obj << Partial Axes Plot Select component( 1, 3 );

```

### RV Correlations

**構文:** obj &lt;&lt; RV Correlations( state=0|1 )

**説明:** ブロック間における相関係数の2乗を要素とする行列の表示/非表示を切り替える。RV係数は、0～1の値をとる。

**JMP追加されたバージョン:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );obj = dt << Multiple Factor Analysis(	MFA Blocks(		{"Carolyn Peppery etc.", :Carolyn Peppery, :Carolyn Tannic, :Carolyn Aromatic,		:Carolyn Berry Notes},		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness}	));obj << RV Correlations( 1 );

```

### Save Block Partial Scores

**構文:** obj &lt;&lt; Save Block Partial Scores

**説明:** データテーブルの新しい列に、ブロック偏スコアを保存する。

**JMP追加されたバージョン:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );obj = dt << Multiple Factor Analysis(	MFA Blocks(		{"Carolyn Peppery etc.", :Carolyn Peppery, :Carolyn Tannic, :Carolyn Aromatic,		:Carolyn Berry Notes},		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness}	));obj << Save Block Partial Scores();

```

### Save Individual Partial Contributions

**構文:** obj &lt;&lt; Save Individual Partial Contributions

**説明:** データ行の偏寄与率を、データテーブルの新しい列に保存する。

**JMP追加されたバージョン:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );obj = dt << Multiple Factor Analysis(	MFA Blocks(		{"Carolyn Peppery etc.", :Carolyn Peppery, :Carolyn Tannic, :Carolyn Aromatic,		:Carolyn Berry Notes},		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness}	));obj << Save Individual Partial Contributions();

```

### Save Individual Scores

**構文:** obj &lt;&lt; Save Individual Scores

**説明:** 指定の数の主成分を、データテーブルの新しい列に保存する。

**JMP追加されたバージョン:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );obj = dt << Multiple Factor Analysis(	MFA Blocks(		{"Carolyn Peppery etc.", :Carolyn Peppery, :Carolyn Tannic, :Carolyn Aromatic,		:Carolyn Berry Notes},		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness}	));obj << Save Individual Scores();

```

### Save Individual Squared Cosines

**構文:** obj &lt;&lt; Save Individual Squared Cosines

**説明:** データ行の余弦2乗を、データテーブルの新しい列に保存する。

**JMP追加されたバージョン:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );obj = dt << Multiple Factor Analysis(	MFA Blocks(		{"Carolyn Peppery etc.", :Carolyn Peppery, :Carolyn Tannic, :Carolyn Aromatic,		:Carolyn Berry Notes},		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness}	));obj << Save Individual Squared Cosines();

```

### Save Partial Axes Coordinates

**構文:** obj &lt;&lt; Save Partial Axes Coordinates

**説明:** データテーブルの新しい列に、部分主成分軸の座標を保存する。

**JMP追加されたバージョン:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );obj = dt << Multiple Factor Analysis(	MFA Blocks(		{"Carolyn Peppery etc.", :Carolyn Peppery, :Carolyn Tannic, :Carolyn Aromatic,		:Carolyn Berry Notes},		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness}	));obj << Save Partial Axes Coordinates();

```

### Show Labels

**構文:** obj &lt;&lt; Show Labels( state=0|1 )

**説明:** グラフにおける点に対するラベルの表示/非表示を切り替える。

**JMP追加されたバージョン:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );obj = dt << Multiple Factor Analysis(	MFA Blocks(		{"Carolyn Peppery etc.", :Carolyn Peppery, :Carolyn Tannic, :Carolyn Aromatic,		:Carolyn Berry Notes},		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness}	));obj << Show Labels( 1 );

```

### Summary Plot Select Component

**構文:** obj&lt;&lt;Summary Plot Select Component( 1, 3 )

**説明:** 要約プロットの軸に用いる成分を選択する。

**JMP追加されたバージョン:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );obj = dt << Multiple Factor Analysis(	MFA Blocks(		{"Carolyn Peppery etc.", :Carolyn Peppery, :Carolyn Tannic, :Carolyn Aromatic,		:Carolyn Berry Notes},		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness}	));obj << Summary Plot Select Component( 1, 3 );

```

### Summary Plots

**構文:** obj &lt;&lt; Summary Plots( state=0|1 )

**説明:** 固有値のプロット、スコアプロット、負荷量プロットを含んだアウトラインの表示/非表示を切り替える。 デフォルトではオン。

**JMP追加されたバージョン:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );obj = dt << Multiple Factor Analysis(	MFA Blocks(		{"Carolyn Peppery etc.", :Carolyn Peppery, :Carolyn Tannic, :Carolyn Aromatic,		:Carolyn Berry Notes},		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness}	));obj << Summary Plots( 0 );

```

### Variable Loadings

**構文:** obj &lt;&lt; Variable Loadings( state=0|1 )

**説明:** 変数の負荷量を各次元ごとに表示した表の表示/非表示を切り替える。

**JMP追加されたバージョン:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );obj = dt << Multiple Factor Analysis(	MFA Blocks(		{"Carolyn Peppery etc.", :Carolyn Peppery, :Carolyn Tannic, :Carolyn Aromatic,		:Carolyn Berry Notes},		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness}	));obj << Variable Loadings( 1 );

```

### Variable Partial Contributions

**構文:** obj &lt;&lt; Variable Partial Contributions( state=0|1 )

**説明:** 「変数の偏寄与率」に関する表と、最初の3主成分の偏寄与率を示すプロットの表示/非表示を切り替える。

**JMP追加されたバージョン:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );obj = dt << Multiple Factor Analysis(	MFA Blocks(		{"Carolyn Peppery etc.", :Carolyn Peppery, :Carolyn Tannic, :Carolyn Aromatic,		:Carolyn Berry Notes},		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness}	));obj << Variable Partial Contributions( 1 );

```

### Variable Squared Cosines

**構文:** obj &lt;&lt; Variable Squared Cosines( state=0|1 )

**説明:** 「変数の余弦2乗」に関する表の表示/非表示を切り替える。

**JMP追加されたバージョン:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );obj = dt << Multiple Factor Analysis(	MFA Blocks(		{"Carolyn Peppery etc.", :Carolyn Peppery, :Carolyn Tannic, :Carolyn Aromatic,		:Carolyn Berry Notes},		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness}	));obj << Variable Squared Cosines( 1 );

```

