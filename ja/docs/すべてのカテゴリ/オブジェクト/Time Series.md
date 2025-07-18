# Time Series



## ARIMA

### 項目のメッセージ

#### Actual

**構文:** obj &lt;&lt; Actual( state=0|1 )

**説明:** [列の保存]コマンドを実行したとき、実測値のデータ列も保存する。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Actual( 1 ), Save Columns );

```

#### Autocorrelations

**構文:** obj &lt;&lt; Autocorrelations( state=0|1 )

**説明:** 自己相関プロットの表示/非表示を切り替える。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Autocorrelations( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

#### Confidence Intervals

**構文:** obj &lt;&lt; Confidence Intervals( number )

#### Create SAS Job

**構文:** obj &lt;&lt; Create SAS Job

**説明:** PROC ARIMAによる分析を実行するためのSASプログラムを作成する。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Create SAS Job;

```

#### Innovations

**構文:** obj &lt;&lt; Innovations( state=0|1 )

**説明:** デフォルトではオン。

**JMP追加されたバージョン:** 16

#### Lower Confidence Limit

**構文:** obj &lt;&lt; Lower Confidence Limit( state=0|1 )

**説明:** [列の保存]コマンドを実行したとき、下側95%信頼限界のデータ列も保存する。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Lower Confidence Limit( 1 ), Save Columns );

```

#### No Constrain

**構文:** obj &lt;&lt; No Constrain( state=0|1 )

**説明:** ARIMAモデルを推定する際に、自己回帰パラメータを定常領域内に、移動平均パラメータを反転可能領域内に位置させるという制約を課さない。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, No Constrain( 1 ) );

```

#### No Intercept

**構文:** obj &lt;&lt; No Intercept( state=0|1 )

**説明:** ARIMAモデルの切片を0に固定する。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, No Intercept( 1 ) );

```

#### Partial Autocorrelations

**構文:** obj &lt;&lt; Partial Autocorrelations( state=0|1 )

**説明:** 偏自己相関プロットの表示/非表示を切り替える。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Partial Autocorrelations( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

#### Plot

**構文:** obj &lt;&lt; Plot( state=0|1 )

**説明:** 残差プロットの表示/非表示を切り替える。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Plot( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

#### Predicted

**構文:** obj &lt;&lt; Predicted( state=0|1 )

**説明:** [列の保存]コマンドを実行したとき、予測値のデータ列も保存する。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Predicted( 1 ), Save Columns );

```

#### Prediction Interval

**構文:** obj &lt;&lt; Prediction Interval( level )

**説明:** ARIMAモデルの予測に関する信頼区間の水準を設定する。デフォルトは0.95。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, Forecasting Interval( 0.99 ) );

```

#### Remove Fit

**構文:** obj &lt;&lt; Remove Fit

**JMP追加されたバージョン:** 16

#### Residuals

**構文:** obj &lt;&lt; Residuals( state=0|1 )

**説明:** [列の保存]コマンドを実行したとき、残差のデータ列も保存する。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Residuals( 1 ), Save Columns );

```

#### Save Columns

**構文:** obj &lt;&lt; Save Columns

**説明:** 応答変数の実測値、予測値、標準偏差、残差、95%予測区間を含んだ新しいデータテーブルを作成する。このオプションは、すべてのARIMAモデル、平滑化モデル、伝達関数モデルで使用できる。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Save Columns;

```

#### Save Prediction Formula

**構文:** obj &lt;&lt; Save Prediction Formula

**説明:** データテーブルの新しい列に予測式を保存する。このオプションはすべてのARIMAモデルと平滑化モデルで使用できる。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Save Prediction Formula;

```

#### Show Confidence Interval

**構文:** obj &lt;&lt; Show Confidence Interval( state=0|1 )

**説明:** 時系列予測プロットにおいて、予測区間の表示/非表示を切り替える。このオプションはすべてのARIMAモデルと平滑化モデルで使用できる。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Simple Exponential Smoothing( Zero to One );
obj2 << Show Confidence Interval( 0 );

```

#### Show Points

**構文:** obj &lt;&lt; Show Points( state=0|1 )

**説明:** 時系列予測プロットにおいて、点の表示/非表示を切り替える。このオプションはすべてのARIMAモデルと平滑化モデルで使用できる。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Show Points( 1 ) );

(obj << report)["Model Comparison"] << Close( 1 );

```

#### Show Prediction Interval

**構文:** obj &lt;&lt; Show Prediction Interval( state=0|1 )

**説明:** 時系列予測プロットにおいて、予測区間の表示/非表示を切り替える。このオプションはすべてのARIMAモデルと平滑化モデルで使用できる。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Simple Exponential Smoothing( Zero to One );
obj2 << Show Prediction Interval( 0 );

```

#### Std Error of Predicted

**構文:** obj &lt;&lt; Std Error of Predicted( state=0|1 )

**説明:** [列の保存]コマンドを実行したとき、予測値の標準誤差のデータ列も保存する。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Std Error of Predicted( 1 ), Save Columns );

```

#### Time

**構文:** obj &lt;&lt; Time( state=0|1 )

**説明:** [列の保存]コマンドを実行したとき、時間のデータ列も保存する。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ), Time ID( :Date ) );
obj << Arima( 1, 0, 0, Time( 0 ), Save Columns );

```

#### Upper Confidence Limit

**構文:** obj &lt;&lt; Upper Confidence Limit( state=0|1 )

**説明:** [列の保存]コマンドを実行したとき、上側95%信頼限界のデータ列も保存する。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Upper Confidence Limit( 1 ), Save Columns );

```

#### Variogram

**構文:** obj &lt;&lt; Variogram( state=0|1 )

**説明:** バリオグラムの表示/非表示を切り替える。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Variogram( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

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

### Automatic Recalc

**構文:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**説明:** データの除外や変更があった場合に分析を自動的にやり直す。Automatic Recalcオプションがオンになっている場合で、データの除外や変更が再計算の前に確実に適用されるようにするには、Wait(0)コマンドを使用すること。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

### Broadcast

**構文:** obj &lt;&lt; Broadcast(message)

**説明:** メッセージをプラットフォームに一括適用する。個々のオブジェクトから戻される結果がデータテーブルである場合は、可能な限り連結する。その最終的な形式は、Table BoxのSave Combined Tableオプションの結果と同じになるか、またはソース列を使用したConcanateオプションの結果と同じになる。それ以外の場合、結果はリストの形で戻される。

**JMP追加されたバージョン:** 18

```jsl

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

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Time Series( Y( :steel shipments ), By( _bycol ) );
obj[1] << Copy ByGroup Script;

```

### Copy Script

**構文:** obj &lt;&lt; Copy Script

**説明:** この分析を再現するJSLスクリプトを生成し、クリップボードにコピーする。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
obj << Copy Script;

```

### Data Table Window

**構文:** obj &lt;&lt; Data Table Window

**説明:** この分析に使用したデータテーブルのウィンドウを手前に表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
obj << Data Table Window;

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

### Get ByGroup Script

**構文:** obj &lt;&lt; Get ByGroup Script

**説明:** この分析を再現するスクリプト(JSL)を生成し、それを式として戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Time Series( Y( :steel shipments ), By( _bycol ) );
t = obj[1] << Get ByGroup Script;
Show( t );

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

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

### Get Data Table

**構文:** obj &lt;&lt; Get Data Table

**説明:** データテーブルへの参照を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Group Platform

**構文:** obj &lt;&lt; Get Group Platform

**説明:** 該当のプラットフォームがグループに属している場合に、Group Platformオブジェクトを戻す。それ以外の場合はEmpty()を戻す。

```jsl

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

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**構文:** obj &lt;&lt; Get Script With Data Table

**説明:** この分析を再現するスクリプト(JSL)をデータテーブルへの参照も含めて生成し、それを式として戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**構文:** obj &lt;&lt; Get Timing

**説明:** プラットフォームの起動にかかった時間を取得する。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
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

### Local Data Filter

**構文:** obj &lt;&lt; Local Data Filter

**説明:** このプラットフォームに対してのみ有効なフィルタで、データを特定のグループまたは範囲にフィルタリングする。

```jsl

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

### Paste Local Data Filter

**構文:** obj &lt;&lt; Paste Local Data Filter

**説明:** クリップボードにあるローカルデータフィルタを現在のレポートに適用する。

```jsl

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

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**構文:** obj &lt;&lt; Redo ByGroup Analysis

**説明:** 同じ分析をやり直し新しいウィンドウに表示する。データが変更されていると分析結果は異なる。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Time Series( Y( :steel shipments ), By( _bycol ) );
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**構文:** obj &lt;&lt; Relaunch Analysis

**説明:** プラットフォームの起動ウィンドウを開き、レポートを作成した時の設定を表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**構文:** obj &lt;&lt; Relaunch ByGroup

**説明:** プラットフォームの起動ウィンドウを開き、レポートを作成した時の設定を表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Time Series( Y( :steel shipments ), By( _bycol ) );
obj[1] << Relaunch ByGroup;

```

### Remove Column Switcher

**構文:** obj &lt;&lt; Remove Column Switcher

**説明:** プラットフォームに最後に追加された列スイッチャーを削除する。

```jsl

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

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

### Report

**構文:** obj &lt;&lt; Report;Report( obj )

**説明:** レポートオブジェクトへの参照を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**構文:** obj &lt;&lt; Report View( "完全"|"要約" )

**説明:** レポートビューは、プラットフォームレポートの詳細を表示するかどうかを決定する。Fullはすべての詳細を表示し、Summaryはプラットフォームにより限定されたものだけを表示する。 動作をカスタマイズするため、各ディスプレイボックスは<<Set Summary Behaviorメッセージをサポートする。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**構文:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**説明:** 分析を再現するためのJSLスクリプトを作成し、データテーブルにテーブルプロパティとして保存する。スクリプトの名前を指定できる。Append Suffixオプションは、スクリプト名に数字の接尾辞を追加する。これにより、同名のスクリプトが存在していても区別できる。Promptオプションは、ユーザにスクリプト名の指定を促す。Replaceオプションは、同名の既存のスクリプトを置き換える。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Time Series( Y( :steel shipments ), By( _bycol ) );
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**構文:** obj &lt;&lt; Save ByGroup Script to Journal

**説明:** この分析を再現するJSLスクリプトを生成し、ジャーナルにそのスクリプトのボタンを追加する。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Time Series( Y( :steel shipments ), By( _bycol ) );
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**構文:** obj &lt;&lt; Save ByGroup Script to Script Window

**説明:** この分析を再現するJSLスクリプトを生成し、現在のスクリプトウィンドウに表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Time Series( Y( :steel shipments ), By( _bycol ) );
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**構文:** obj &lt;&lt; Save Script for All Objects

**説明:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**構文:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**説明:** すべてのレポートオブジェクトを再現するスクリプトを現在のデータテーブルに保存する。このオプションは、ウィンドウ内にレポートが複数ある場合に便利。作成されるスクリプトの名前は、引用符で囲んで指定しない限り、1つ目のプラットフォーム名となる。

#### 例 1

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Time Series( Y( :steel shipments ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table;

```

#### 例 2

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Time Series( Y( :steel shipments ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**構文:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**説明:** この分析を再現するJSLスクリプトを生成し、データテーブルのテーブルプロパティとして保存する。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**構文:** obj &lt;&lt; Save Script to Journal

**説明:** この分析を再現するJSLスクリプトを生成し、ジャーナルにそのスクリプトのボタンを追加する。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
obj << Save Script to Journal;

```

### Save Script to Report

**構文:** obj &lt;&lt; Save Script to Report

**説明:** この分析を再現するJSLスクリプトを生成し、レポートウィンドウに表示する。分析手順の記録を結果と一緒に残せる。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
obj << Save Script to Report;

```

### Save Script to Script Window

**構文:** obj &lt;&lt; Save Script to Script Window

**説明:** この分析を再現するJSLスクリプトを生成し、現在のスクリプトウィンドウに表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
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

### Sync to Data Table Changes

**構文:** obj &lt;&lt; Sync to Data Table Changes

**説明:** 除外やデータの変更が行われた場合に同期する。

```jsl

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

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
obj << Title( "My Platform" );

```

### Top Report

**構文:** obj &lt;&lt; Top Report

**説明:** レポート内のルートノードへの参照を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Transform Column

**構文:** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**説明:** オブジェクトのローカルコンテキスト(通常はプラットフォーム)内に変換列を作成する。この変換列は、それを作成したプラットフォームの中のみで使用可能。

**JMP追加されたバージョン:** 16

```jsl

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

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

### Window View

**構文:** obj = Time Series(...Window View( "Visible"|"Invisible"|"Private" )...)

**説明:** レポートとして作成するウィンドウの種類を設定する。デフォルトでは、Visibleレポートウィンドウが作成される。Invisible のウィンドウは画面に表示されないが、Window()などの関数によって検出できる。Private のウィンドウにはほとんどのウィンドウメッセージを送れるが、検出することはできないため、レポートオブジェクトを通してアクセスする必要がある。

```jsl

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

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Time Series( Y( :steel shipments ), By( _bycol ) );

```

### Input List

**構文:** obj &lt;&lt; Input List( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );

```

### Time ID

**構文:** obj &lt;&lt; Time ID( column )

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );

```

### X

**構文:** obj &lt;&lt; X( column )

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );

```

### Y

**構文:** obj &lt;&lt; Y( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );

```

## 関連するコンストラクター

### Time Series

**構文:** Time Series( Y( column ) )

**説明:** 等間隔の時点で観測された一連のオブザベーションをモデル化する。時系列プロット、自己相関、バリオグラム、スペクトル密度、ARIMA、季節ARIMA、平滑化モデル、予測を含む。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );

```

## 項目のメッセージ

### AR Coefficients

**構文:** obj &lt;&lt; AR Coefficients( state=0|1 )

**説明:** 自己相関係数プロットの表示/非表示を切り替える。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << AR Coefficients( 1 );

```

### ARIMA

**構文:** obj &lt;&lt; ARIMA( p, d, q, &lt;No Intercept( 0|1 )&gt;, &lt;No Constrain( 0|1 )&gt;, &lt;Confidence Intervals( level )&gt; )

**説明:** ARIMAモデルをあてはめる。ARIMA(p,d,q)モデルの次数p、d、qを設定すること。信頼水準を0.95以外にするには、levelを設定する。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << arima( 1, 0, 0 );
obj << arima( 1, 0, 0, No Intercept( 1 ), No Constrain( 1 ), Confidence Intervals( 0.99 ) );

```

### ARIMA Model Group

**構文:** obj &lt;&lt; ARIMA Model Group( AR(p0,p1),Diff(d0,d1),MA(q0,q1),Seasonal AR(P0,P1),Seasonal Diff(D0,D1),Seasonal MA(Q0,Q1),Seasonal Period(S0,S1),Confidence Intervals(C),Intercept(1),Constrain fit(1) )

**説明:** 指定した範囲にある次数の、複数のARIMAモデルをあてはめる。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << ARIMA Model Group( AR( 0, 2 ), MA( 0, 2 ) );

```

### Autocorrelation

**構文:** obj &lt;&lt; Autocorrelation( state=0|1 )

**説明:** 自己相関プロットの表示/非表示を切り替える。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << Autocorrelation( 1 );

```

### Autocorrelation Lags

**構文:** obj = Time Series(...Autocorrelation Lags( number=25 )...)

**説明:** 自己相関を計算するための最大期間数を設定する。これは起動時のオプション。 デフォルトの値は"25"。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ), Autocorrelation Lags( 10 ) );

```

### Combine and Save Forecasts from Models

**構文:** obj &lt;&lt; Combine and Save Forecasts from Models

**説明:** レポートにあるすべてのモデルの結果をまとめて保存した新しいデータテーブルを作成する。

**JMP追加されたバージョン:** 16

### Connecting Lines

**構文:** obj &lt;&lt; Connecting Lines( state=0|1 )

**説明:** 時系列プロットにおいて、点をつなぐ線の表示/非表示を切り替える。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << Connecting Lines( 1 );

```

### Cross Correlation

**構文:** obj &lt;&lt; Cross Correlation( state=0|1 )

**説明:** 相互相関プロットの表示/非表示を切り替える。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );
obj = dt << Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );
obj << Cross Correlation( 1 );

```

### Damped-Trend Linear Exponential Smoothing

**構文:** obj &lt;&lt; Damped-Trend Linear Exponential Smoothing( Zero to One|Unconstrained|Stable Invertible|Custom( (Damping|Level)( Unconstrained| Bounded( lower, upper )| Fixed( value ) )), &lt;Confidence Intervals(level)&gt; )

**説明:** ダンプトレンド平滑化モデルをあてはめる。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
Time Series(
	Y( :Steel Shipments ),
	"Damped-Trend Linear Exponential Smoothing"n( Zero to One )
);

```

### Difference

**構文:** obj &lt;&lt; Difference( d, &lt;D&gt;, &lt;S&gt; )

**説明:** 時系列データの差分を計算し、その差分の自己相関や偏自己相関をグラフにする。差分は、 (1-B)^d * (1-B^S)^D * y_t で求められる。ここで、y_tは時系列の観測値、BはB * y_t = y_(t-1)で定義される差分演算子、dは季節性のない差分の次数、Dは季節性のある差分の次数、Sは1季節あたりの観測値の個数。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << Difference( 1 );
obj << Difference( 1, 1, 12 );

```

### Double Exponential Smoothing

**構文:** obj &lt;&lt; Double Exponential Smoothing( Zero to One|Unconstrained|Stable Invertible|Custom( Level( Unconstrained| Bounded( lower, upper )| Fixed( value ) )), &lt;Confidence Intervals(level)&gt; )

**説明:** 2重指数平滑化モデルをあてはめる。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
Time Series(
	Y( :Steel Shipments ),
	Double Exponential Smoothing( Zero to One ),
	Double Exponential Smoothing( Unconstrained ),
	Double Exponential Smoothing( Stable Invertible ),
	Double Exponential Smoothing( Custom( Level( Bounded( 0.8, 1 ) ) ) ),
	Double Exponential Smoothing( Custom( Level( Fixed( 0 ) ) ) ),
	Double Exponential Smoothing( Custom( Level( Unconstrained ) ) )
);

```

### Fit Recommended ETS

**構文:** obj &lt;&lt; Fit Recommended ETS( Period( m ),Constrained( "Yes"|"No" ) )

**説明:** 推奨される状態空間平滑化モデルをあてはめる。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Seriesg.jmp" );
obj = dt << Time Series( Y( :Passengers ) );
obj << Fit Recommended ETS( Period( 12 ), Constrained( "Yes" ) );

```

### Forecast Periods

**構文:** obj = Time Series(...Forecast Periods( number=25 )...)

**説明:** 予測レポートで何期先を予測するかを設定する。これは起動時のオプション。 デフォルトの値は"25"。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ), Forecast Periods( 10 ) );
obj << ARIMA( 1, 0, 0 );

```

### Forecast on Holdback

**構文:** obj = Time Series(...Forecast on Holdback( state=0|1 )...)

**説明:** 保留データを用いるかどうかを指定する。このオプションを選択した場合、[予測する期数]オプションに指定された期数のデータが保留されて、モデルのあてはめが行われる。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ), Forecast on Holdback( 1 ) );
obj << arima( 1, 0, 0 );
obj << Number of Forecast Periods( 100 );

```

### Generate Simulation

**構文:** obj &lt;&lt; Generate Simulation( id, seed, length, n )

**説明:** あてはめたモデルの将来の軌道を複数作成し、データテーブルにまとめる。作成されたデータテーブルへの参照を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << arima( 1, 0, 0 );
dt = obj << Generate Simulation( 1, 11111, 100, 5 );

```

### Get Model Specs

**構文:** obj &lt;&lt; Get Model Specs

**説明:** 指定されたモデルの推定結果を、名前付きリストの形式で戻す。この結果には、推定値と標準誤差が含まれる。ARIMA、季節ARIMA、平滑化モデル、伝達関数モデルで使用できる。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Seriesg.jmp" );
obj = dt << Time Series( Y( :Log Passengers ) );
obj << Seasonal ARIMA( 0, 1, 1, 0, 1, 1, 12, No Intercept( 1 ) );
l = obj << Get Model Specs;
Show( l );

```

### Get Models

**構文:** obj &lt;&lt; Get Models

**説明:** モデルの記述を名前とした、モデル結果の名前付きリストを戻す。出力に含まれるのは推定値と標準誤差。ARIMA、季節ARIMA、すべての平滑化モデル、および伝達関数モデルで使用可能。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Seriesg.jmp" );
obj = dt << Time Series( Y( :Log Passengers ) );
obj << Seasonal ARIMA( 0, 1, 1, 0, 1, 1, 12, No Intercept( 1 ) );
l = obj << Get Models;
Show( l );

```

### Hide All Reports

**構文:** obj &lt;&lt; Hide All Reports

**説明:** レポートウィンドウにおける「モデルの比較」表に表示されているすべてのモデルを非表示にする。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Seriesg.jmp" );
obj = dt << Time Series( Y( :Passengers ) );
obj << Fit Recommended ETS( Period( 12 ), Constrained( "Yes" ) );
obj << Hide All Model Reports;

```

### Input Series

**構文:** obj &lt;&lt; Input Series( Column, &lt;ARIMA( )&gt;| &lt;Prewhitening( )&gt; ... )

**説明:** 入力系列に送るメッセージをまとめて指定する。注:入力リスト(Input List)の変数を指定する必要がある。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );
obj = dt << Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );
obj << Input Series( :Input Gas Rate, ARIMA( 1, 0, 0 ) );

```

### Keep Best Models

**構文:** obj &lt;&lt; Keep Best Models( "AIC"|"SBC" )

**説明:** あてはめたモデルのなかで最良のモデルだけを残して、残りのモデルをレポートから削除する。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Seriesg.jmp" );
obj = dt << Time Series( Y( :Passengers ) );
obj << Fit Recommended ETS( Period( 12 ), Constrained( "Yes" ) );
Wait( 1 );
obj << Keep Best Models( "AIC" );

```

### Lambda for Box-Cox

**構文:** obj = Time Series(...Lambda for Box-Cox( number=0 )...)

**説明:** Box-Cox変換で使用するλパラメータを指定する。 デフォルトの値は"0"。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series(
	Y( :Steel Shipments ),
	Name( "Use Box-Cox Transformation" )(1),
	Name( "Lambda for Box-Cox" )(0)
);
obj << arima( 1, 0, 0 );
obj << Number of Forecast Periods( 100 );

```

### Linear Exponential Smoothing

**構文:** obj &lt;&lt; Linear Exponential Smoothing( Zero to One|Unconstrained|Stable Invertible|Custom( (Trend|Level)( Unconstrained| Bounded( lower, upper )| Fixed( value ) )), &lt;Confidence Intervals(level)&gt; )

**説明:** 線形指数平滑化モデルをあてはめる。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
Time Series(
	Y( :Steel Shipments ),
	Linear Exponential Smoothing( Zero to One ),
	Linear Exponential Smoothing( Unconstrained ),
	Linear Exponential Smoothing( Stable Invertible ),
	Linear Exponential Smoothing(
		Custom( Level( Bounded( 0.8, 1 ) ), Trend( Bounded( 0.7, 0.9 ) ) )
	),
	Linear Exponential Smoothing( Custom( Level( Fixed( 0 ) ), Trend( Fixed( .3 ) ) ) ),
	Linear Exponential Smoothing( Custom( Level( Unconstrained ), Trend( Fixed( .4 ) ) ) )
);

```

### Maximum Iterations

**構文:** obj &lt;&lt; Maximum Iterations( maxIter=250 )

**説明:** ARIMAモデルのあてはめで使用する、最適化の反復最大回数をリセットする。 デフォルトの値は"250"。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << Maximum Iterations( 2 );
obj << ARIMA( 1, 0, 0 );

```

### Mean Line

**構文:** obj &lt;&lt; Mean Line( state=0|1 )

**説明:** 時系列プロットにおいて、平均を示す線の表示/非表示を切り替える。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << Mean Line( 1 );

```

### Model Comparison Report

**構文:** obj &lt;&lt; Model Comparison Report

**説明:** 「モデルの比較」レポートを設定する。

### Number of Forecast Periods

**構文:** obj &lt;&lt; Number of Forecast Periods( number )

**説明:** 予測する期数をリセットし、予測レポートを更新する。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << arima( 1, 0, 0 );
obj << Number of Forecast Periods( 100 );

```

### Partial Autocorrelation

**構文:** obj &lt;&lt; Partial Autocorrelation( state=0|1 )

**説明:** 偏自己相関プロットの表示/非表示を切り替える。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << Partial Autocorrelation( 1 );

```

### Prewhitening

**構文:** obj &lt;&lt; Prewhitening( Order(p, d, q), Seasonal(P, D, Q, S) )

**説明:** 白色化のための次数を設定する。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );
obj = dt << Time Series(
	Y( :Output CO2 ),
	Input List( :Input Gas Rate ),
	Input Series(
		:Input Gas Rate,
		Prewhitening( Order( 1, 0, 0 ), Seasonal( 0, 0, 0, 12 ) )
	)
);

```

### Remove All Simulation

**構文:** obj &lt;&lt; Remove All Simulation

**説明:** 将来の軌道のシミュレーションをすべて削除する。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << arima( 1, 0, 0 );
obj << arima( 2, 0, 0 );
obj << Simulate More( 1, 2 );
obj << Simulate More( 2, 3 );
obj << Remove All Simulation;

```

### Remove Cycle

**構文:** obj &lt;&lt; Remove Cycle( Units per Cycle( number ), Has Constant( 0|1 ) )

**説明:** 余弦関数(コサイン関数)によって循環成分を推定し、それをデータから除去する。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Monthly Sales.jmp" );
obj = dt << Time Series( Y( :Sales ) );
obj << Remove Cycle( Units per Cycle( 12 ), Has Constant( 1 ) );

```

### Remove Fit

**構文:** obj &lt;&lt; Remove Fit

**JMP追加されたバージョン:** 16

### Remove Linear Trend

**構文:** obj &lt;&lt; Remove Linear Trend

**説明:** 線形トレンドを推定し、その線形トレンドをデータから取り除く。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Monthly Sales.jmp" );
obj = dt << Time Series( Y( :Sales ) );
obj << Remove Linear Trend;

```

### Remove Model Simulation

**構文:** obj &lt;&lt; Remove Model Simulation( id )

**説明:** あてはめたモデルの将来の軌道のシミュレーションを削除する。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << arima( 1, 0, 0 );
obj << arima( 2, 0, 0 );
obj << Simulate More( 1, 2 );
obj << Simulate More( 2, 3 );
obj << Remove Model Simulation( 1 );

```

### Save Spectral Density

**構文:** obj &lt;&lt; Save Spectral Density

**説明:** スペクトル密度をテーブルに保存する。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << Save Spectral Density;

```

### Seasonal ARIMA

**構文:** obj &lt;&lt; Seasonal ARIMA( p, d, q, P, D, Q, S, &lt;No Intercept( 0|1 )&gt;, &lt;No Constrain( 0|1 )&gt;, &lt;Confidence Intervals( level )&gt; )

**説明:** 季節ARIMAモデルをあてはめる。ARIMA(p,d,q)(P,D,Q)Sモデルの次数p、d、q、P、D、Q、Sを設定すること。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << seasonal arima( 1, 0, 0, 1, 0, 0, 12 );
obj << seasonal arima(
	1,
	0,
	0,
	1,
	0,
	0,
	12,
	No Intercept( 1 ),
	No Constrain( 1 ),
	Confidence Intervals( 0.99 )
);

```

### Seasonal Exponential Smoothing

**構文:** obj &lt;&lt; Seasonal Exponential Smoothing( Zero to One|Unconstrained|Custom( (Level| Seasonal)( Unconstrained| Bounded( lower, upper )| Fixed( value ) )), &lt;Confidence Intervals(level)&gt; )

**説明:** 季節指数平滑化モデルをあてはめる。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
Time Series(
	Y( :Steel Shipments ),
	Seasonal Exponential Smoothing(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Seasonal( Bounded( 0, 1 ) ) )
	)
);

```

### Set Seed

**構文:** obj &lt;&lt; Set Seed( seed )

**説明:** 乱数シード値を設定する。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << arima( 1, 0, 0 );
obj << Set Seed( 1111 );
obj << Simulate Once( 1 );
obj << Set Seed( 1111 );
obj << Simulate Once( 1 );

```

### Show Box-Cox Transformation Plot

**構文:** obj &lt;&lt; Show Box-Cox Transformation Plot( state=0|1 )

**JMP追加されたバージョン:** 16

### Show Lag Plot

**構文:** obj &lt;&lt; Show Lag Plot( state=0|1 )

### Show Points

**構文:** obj &lt;&lt; Show Points( state=0|1 )

**説明:** 時系列プロットにおいて、点の表示/非表示を切り替える。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << Show Points( 1 );

```

### Simple Exponential Smoothing

**構文:** obj &lt;&lt; Simple Exponential Smoothing( Zero to One|Unconstrained|Stable Invertible|Custom( Level( Unconstrained| Bounded( lower, upper )| Fixed( value ) )), &lt;Confidence Intervals(level)&gt; )

**説明:** 1重指数平滑化モデルをあてはめる。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
Time Series(
	Y( :Steel Shipments ),
	Simple Exponential Smoothing( Zero to One ),
	Simple Exponential Smoothing( Unconstrained ),
	Simple Exponential Smoothing( Stable Invertible ),
	Simple Exponential Smoothing( Custom( Level( Bounded( 0.8, 1 ) ) ) ),
	Simple Exponential Smoothing( Custom( Level( Fixed( 0 ) ) ) ),
	Simple Exponential Smoothing( Custom( Level( Unconstrained ) ) )
);

```

### Simple Moving Average

**構文:** obj &lt;&lt; Simple Moving Average

**説明:** 単純移動平均モデルをあてはめる。引数の指定がない場合、モデル設定のダイアログを開く。引数の指定がある場合は、そのモデルをあてはめる。単純移動平均モデルのスクリプト可能なハンドルを戻り値として戻す。使用できる引数については、「単純移動平均 (Simple Moving Average) 」を参照のこと。

```jsl

dt = Open( "$SAMPLE_DATA/Stock Prices.jmp" );
obj = dt << Time Series( Y( :Close ) );
sma = obj << Simple Moving Average;
sma << Add Model( 10 );

```

### Simple Moving Average Centering Method

**構文:** obj &lt;&lt; Simple Moving Average Centering Method( "中心化なし"|"中心化"|"中心化し、偶数サイズの場合は二重" )

### Simulate More

**構文:** obj &lt;&lt; Simulate More( id, n )

**説明:** あてはめたモデルの将来の軌道を複数シミュレーションする。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << arima( 1, 0, 0 );
obj << arima( 2, 0, 0 );
obj << Simulate More( 1, 2 );
obj << Simulate More( 2, 3 );

```

### Simulate Once

**構文:** obj &lt;&lt; Simulate Once( id )

**説明:** あてはめたモデルの将来の軌道を1本シミュレーションする。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << arima( 1, 0, 0 );
obj << arima( 2, 0, 0 );
obj << Simulate Once( 1 );
obj << Simulate Once( 2 );

```

### Spectral Density

**構文:** obj &lt;&lt; Spectral Density( state=0|1 )

**説明:** スペクトル密度グラフの表示/非表示を切り替える。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << Spectral Density( 1 );

```

### State Space Smoothing

**構文:** obj &lt;&lt; State Space Smoothing( Error Type( "Additive"|"Multiplicative" ),Trend Type( "None"|"Additive"|"Multiplicative" ),Seasonal Type( "None"|"Additive"|"Multiplicative" ),Damped( "Yes"|"No" ),Period( m ),Constrained( "Yes"|"No" ) )

**説明:** 状態空間平滑化モデルをあてはめる。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Seriesg.jmp" );
obj = dt << Time Series( Y( :Passengers ) );
obj << State Space Smoothing(
	Error Type( "Multiplicative" ),
	Trend Type( "Additive" ),
	Seasonal Type( "Multiplicative" ),
	Damped( "No" ),
	Period( 12 ),
	Constrained( "Yes" )
);

```

### Time Series Graph

**構文:** obj &lt;&lt; Time Series Graph( state=0|1 )

**説明:** 基本時系列プロットのオン/オフを切り替える。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << Time Series Graph( 1 );

```

### Transfer Function

**構文:** obj &lt;&lt; Transfer Function( Order(p, d, q), Seasonal(P, D, Q, S), input1(Order(p, d, q), Seasonal(P, D, Q, S), Lag(lag)), &lt;input2(Order(p, d, q), Seasonal(P, D, Q, S), Lag(lag))&gt;, ..., &lt;No Intercept(flag1)&gt;, &lt;No Constrain(flag2)&gt;, &lt;Alternative Parameterization( flag3 )&gt;, &lt;Confidence Intervals( level )&gt;, &lt;Number of Forecast Periods( nAhead )&gt; )

**説明:** 伝達関数モデルをあてはめる。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );
obj = dt << Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	:Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) )
);
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	:Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ),
	No Intercept( 1 ),
	Alternative Parameterization( 1 ),
	Confidence Intervals( 0.99 ),
	Number of Forecast Periods( 10 )
);

```

### Use Box-Cox Transformation

**構文:** obj = Time Series(...Use Box-Cox Transformation( state=0|1 )...)

**説明:** [Box-Cox変換のλ]オプションで指定されたλの値を使用し、元のデータに対してBox-Cox変換を行う。このオプションを選択した場合、「時系列分析」レポートのすべての分析は変換後のデータを使って行われる。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ), Name( "Use Box-Cox Transformation" )(1) );
obj << arima( 1, 0, 0 );
obj << Number of Forecast Periods( 100 );

```

### Variogram

**構文:** obj &lt;&lt; Variogram( state=0|1 )

**説明:** バリオグラムの表示/非表示を切り替える。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << Variogram( 1 );

```

### Winters Method

**構文:** obj &lt;&lt; Winters Method( Zero to One|Unconstrained|Custom( (Level|Seasonal|Trend)( Unconstrained| Seasonal| Bounded( lower, upper )| Fixed( value ) )), &lt;Confidence Intervals(level)&gt; )

**説明:** Winter法による平滑化モデルをあてはめる。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom(
			Level( Bounded( 0, 1 ) ),
			Trend( Bounded( 0, 1 ) ),
			Seasonal( Bounded( 0, 1 ) )
		)
	)
);

```

### X11

**構文:** obj &lt;&lt; X11( Additive|Multiplicative )

**説明:** 米国国勢調査局によって提案されたX-11法によって、トレンドや季節的影響を求める。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Monthly Sales.jmp" );
obj = dt << Time Series( X( :Date ), Y( :Sales ) );
obj << X11( Additive );

```

## Damped-Trend Linear Exponential Smoothing

### 項目のメッセージ

#### Actual

**構文:** obj &lt;&lt; Actual( state=0|1 )

**説明:** [列の保存]コマンドを実行したとき、実測値のデータ列も保存する。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Actual( 1 ), Save Columns );

```

#### Autocorrelations

**構文:** obj &lt;&lt; Autocorrelations( state=0|1 )

**説明:** 自己相関プロットの表示/非表示を切り替える。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Autocorrelations( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

#### Confidence Intervals

**構文:** obj &lt;&lt; Confidence Intervals( number )

#### Create SAS Job

**構文:** obj &lt;&lt; Create SAS Job

**説明:** PROC ARIMAによる分析を実行するためのSASプログラムを作成する。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Create SAS Job;

```

#### Innovations

**構文:** obj &lt;&lt; Innovations( state=0|1 )

**説明:** デフォルトではオン。

**JMP追加されたバージョン:** 16

#### Lower Confidence Limit

**構文:** obj &lt;&lt; Lower Confidence Limit( state=0|1 )

**説明:** [列の保存]コマンドを実行したとき、下側95%信頼限界のデータ列も保存する。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Lower Confidence Limit( 1 ), Save Columns );

```

#### No Constrain

**構文:** obj &lt;&lt; No Constrain( state=0|1 )

**説明:** ARIMAモデルを推定する際に、自己回帰パラメータを定常領域内に、移動平均パラメータを反転可能領域内に位置させるという制約を課さない。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, No Constrain( 1 ) );

```

#### No Intercept

**構文:** obj &lt;&lt; No Intercept( state=0|1 )

**説明:** ARIMAモデルの切片を0に固定する。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, No Intercept( 1 ) );

```

#### Partial Autocorrelations

**構文:** obj &lt;&lt; Partial Autocorrelations( state=0|1 )

**説明:** 偏自己相関プロットの表示/非表示を切り替える。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Partial Autocorrelations( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

#### Plot

**構文:** obj &lt;&lt; Plot( state=0|1 )

**説明:** 残差プロットの表示/非表示を切り替える。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Plot( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

#### Predicted

**構文:** obj &lt;&lt; Predicted( state=0|1 )

**説明:** [列の保存]コマンドを実行したとき、予測値のデータ列も保存する。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Predicted( 1 ), Save Columns );

```

#### Prediction Interval

**構文:** obj &lt;&lt; Prediction Interval( level )

**説明:** ARIMAモデルの予測に関する信頼区間の水準を設定する。デフォルトは0.95。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, Forecasting Interval( 0.99 ) );

```

#### Remove Fit

**構文:** obj &lt;&lt; Remove Fit

**JMP追加されたバージョン:** 16

#### Residuals

**構文:** obj &lt;&lt; Residuals( state=0|1 )

**説明:** [列の保存]コマンドを実行したとき、残差のデータ列も保存する。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Residuals( 1 ), Save Columns );

```

#### Save Columns

**構文:** obj &lt;&lt; Save Columns

**説明:** 応答変数の実測値、予測値、標準偏差、残差、95%予測区間を含んだ新しいデータテーブルを作成する。このオプションは、すべてのARIMAモデル、平滑化モデル、伝達関数モデルで使用できる。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Save Columns;

```

#### Save Prediction Formula

**構文:** obj &lt;&lt; Save Prediction Formula

**説明:** データテーブルの新しい列に予測式を保存する。このオプションはすべてのARIMAモデルと平滑化モデルで使用できる。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Save Prediction Formula;

```

#### Show Confidence Interval

**構文:** obj &lt;&lt; Show Confidence Interval( state=0|1 )

**説明:** 時系列予測プロットにおいて、予測区間の表示/非表示を切り替える。このオプションはすべてのARIMAモデルと平滑化モデルで使用できる。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Simple Exponential Smoothing( Zero to One );
obj2 << Show Confidence Interval( 0 );

```

#### Show Points

**構文:** obj &lt;&lt; Show Points( state=0|1 )

**説明:** 時系列予測プロットにおいて、点の表示/非表示を切り替える。このオプションはすべてのARIMAモデルと平滑化モデルで使用できる。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Show Points( 1 ) );

(obj << report)["Model Comparison"] << Close( 1 );

```

#### Show Prediction Interval

**構文:** obj &lt;&lt; Show Prediction Interval( state=0|1 )

**説明:** 時系列予測プロットにおいて、予測区間の表示/非表示を切り替える。このオプションはすべてのARIMAモデルと平滑化モデルで使用できる。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Simple Exponential Smoothing( Zero to One );
obj2 << Show Prediction Interval( 0 );

```

#### Std Error of Predicted

**構文:** obj &lt;&lt; Std Error of Predicted( state=0|1 )

**説明:** [列の保存]コマンドを実行したとき、予測値の標準誤差のデータ列も保存する。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Std Error of Predicted( 1 ), Save Columns );

```

#### Time

**構文:** obj &lt;&lt; Time( state=0|1 )

**説明:** [列の保存]コマンドを実行したとき、時間のデータ列も保存する。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ), Time ID( :Date ) );
obj << Arima( 1, 0, 0, Time( 0 ), Save Columns );

```

#### Upper Confidence Limit

**構文:** obj &lt;&lt; Upper Confidence Limit( state=0|1 )

**説明:** [列の保存]コマンドを実行したとき、上側95%信頼限界のデータ列も保存する。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Upper Confidence Limit( 1 ), Save Columns );

```

#### Variogram

**構文:** obj &lt;&lt; Variogram( state=0|1 )

**説明:** バリオグラムの表示/非表示を切り替える。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Variogram( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

## Difference

### 項目のメッセージ

#### Autocorrelation

**構文:** obj &lt;&lt; Autocorrelation( state=0|1 )

**説明:** 差分レポートで自己相関の表示/非表示を切り替える。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Difference( 1, 0, 0, Autocorrelation( 1 ) );

```

#### Connecting Lines

**構文:** obj &lt;&lt; Connecting Lines( state=0|1 )

**説明:** 差グラフ上で点をつなぐ線の表示/非表示を切り替える。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Difference( 1, 0, 0, Connecting Lines( 1 ) );

```

#### Difference Graph

**構文:** obj &lt;&lt; Difference Graph( state=0|1 )

**説明:** 差グラフの表示/非表示を切り替える デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Difference( 1, 0, 0, Difference Graph( 1 ) );

```

#### Mean Line

**構文:** obj &lt;&lt; Mean Line( state=0|1 )

**説明:** 差グラフ上で平均を示す線の表示/非表示を切り替える。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Difference( 1, 0, 0, Mean Line( 1 ) );

```

#### Partial Autocorrelation

**構文:** obj &lt;&lt; Partial Autocorrelation( state=0|1 )

**説明:** 差分レポートで偏自己相関の表示/非表示を切り替える。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Difference( 1, 0, 0, Partial Autocorrelation( 1 ) );

```

#### Remove Fit

**構文:** obj &lt;&lt; Remove Fit

**JMP追加されたバージョン:** 16

#### Save

**構文:** obj &lt;&lt; Save

**説明:** 差分の値をデータテーブルの新しい列に保存する。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Difference( 1, 0, 0, Save );

```

#### Show Points

**構文:** obj &lt;&lt; Show Points( state=0|1 )

**説明:** 差グラフ上の点の表示/非表示を切り替える。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Difference( 1, 0, 0, Show Points( 1 ) );

```

#### Variogram

**構文:** obj &lt;&lt; Variogram( state=0|1 )

**説明:** 差分レポートでバリオグラムの表示/非表示を切り替える。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Difference( 1, 0, 0, Variogram( 1 ) );

```

## Double (Brown) Exponential Smoothing

### 項目のメッセージ

#### Actual

**構文:** obj &lt;&lt; Actual( state=0|1 )

**説明:** [列の保存]コマンドを実行したとき、実測値のデータ列も保存する。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Actual( 1 ), Save Columns );

```

#### Autocorrelations

**構文:** obj &lt;&lt; Autocorrelations( state=0|1 )

**説明:** 自己相関プロットの表示/非表示を切り替える。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Autocorrelations( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

#### Confidence Intervals

**構文:** obj &lt;&lt; Confidence Intervals( number )

#### Create SAS Job

**構文:** obj &lt;&lt; Create SAS Job

**説明:** PROC ARIMAによる分析を実行するためのSASプログラムを作成する。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Create SAS Job;

```

#### Innovations

**構文:** obj &lt;&lt; Innovations( state=0|1 )

**説明:** デフォルトではオン。

**JMP追加されたバージョン:** 16

#### Lower Confidence Limit

**構文:** obj &lt;&lt; Lower Confidence Limit( state=0|1 )

**説明:** [列の保存]コマンドを実行したとき、下側95%信頼限界のデータ列も保存する。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Lower Confidence Limit( 1 ), Save Columns );

```

#### No Constrain

**構文:** obj &lt;&lt; No Constrain( state=0|1 )

**説明:** ARIMAモデルを推定する際に、自己回帰パラメータを定常領域内に、移動平均パラメータを反転可能領域内に位置させるという制約を課さない。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, No Constrain( 1 ) );

```

#### No Intercept

**構文:** obj &lt;&lt; No Intercept( state=0|1 )

**説明:** ARIMAモデルの切片を0に固定する。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, No Intercept( 1 ) );

```

#### Partial Autocorrelations

**構文:** obj &lt;&lt; Partial Autocorrelations( state=0|1 )

**説明:** 偏自己相関プロットの表示/非表示を切り替える。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Partial Autocorrelations( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

#### Plot

**構文:** obj &lt;&lt; Plot( state=0|1 )

**説明:** 残差プロットの表示/非表示を切り替える。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Plot( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

#### Predicted

**構文:** obj &lt;&lt; Predicted( state=0|1 )

**説明:** [列の保存]コマンドを実行したとき、予測値のデータ列も保存する。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Predicted( 1 ), Save Columns );

```

#### Prediction Interval

**構文:** obj &lt;&lt; Prediction Interval( level )

**説明:** ARIMAモデルの予測に関する信頼区間の水準を設定する。デフォルトは0.95。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, Forecasting Interval( 0.99 ) );

```

#### Remove Fit

**構文:** obj &lt;&lt; Remove Fit

**JMP追加されたバージョン:** 16

#### Residuals

**構文:** obj &lt;&lt; Residuals( state=0|1 )

**説明:** [列の保存]コマンドを実行したとき、残差のデータ列も保存する。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Residuals( 1 ), Save Columns );

```

#### Save Columns

**構文:** obj &lt;&lt; Save Columns

**説明:** 応答変数の実測値、予測値、標準偏差、残差、95%予測区間を含んだ新しいデータテーブルを作成する。このオプションは、すべてのARIMAモデル、平滑化モデル、伝達関数モデルで使用できる。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Save Columns;

```

#### Save Prediction Formula

**構文:** obj &lt;&lt; Save Prediction Formula

**説明:** データテーブルの新しい列に予測式を保存する。このオプションはすべてのARIMAモデルと平滑化モデルで使用できる。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Save Prediction Formula;

```

#### Show Confidence Interval

**構文:** obj &lt;&lt; Show Confidence Interval( state=0|1 )

**説明:** 時系列予測プロットにおいて、予測区間の表示/非表示を切り替える。このオプションはすべてのARIMAモデルと平滑化モデルで使用できる。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Simple Exponential Smoothing( Zero to One );
obj2 << Show Confidence Interval( 0 );

```

#### Show Points

**構文:** obj &lt;&lt; Show Points( state=0|1 )

**説明:** 時系列予測プロットにおいて、点の表示/非表示を切り替える。このオプションはすべてのARIMAモデルと平滑化モデルで使用できる。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Show Points( 1 ) );

(obj << report)["Model Comparison"] << Close( 1 );

```

#### Show Prediction Interval

**構文:** obj &lt;&lt; Show Prediction Interval( state=0|1 )

**説明:** 時系列予測プロットにおいて、予測区間の表示/非表示を切り替える。このオプションはすべてのARIMAモデルと平滑化モデルで使用できる。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Simple Exponential Smoothing( Zero to One );
obj2 << Show Prediction Interval( 0 );

```

#### Std Error of Predicted

**構文:** obj &lt;&lt; Std Error of Predicted( state=0|1 )

**説明:** [列の保存]コマンドを実行したとき、予測値の標準誤差のデータ列も保存する。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Std Error of Predicted( 1 ), Save Columns );

```

#### Time

**構文:** obj &lt;&lt; Time( state=0|1 )

**説明:** [列の保存]コマンドを実行したとき、時間のデータ列も保存する。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ), Time ID( :Date ) );
obj << Arima( 1, 0, 0, Time( 0 ), Save Columns );

```

#### Upper Confidence Limit

**構文:** obj &lt;&lt; Upper Confidence Limit( state=0|1 )

**説明:** [列の保存]コマンドを実行したとき、上側95%信頼限界のデータ列も保存する。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Upper Confidence Limit( 1 ), Save Columns );

```

#### Variogram

**構文:** obj &lt;&lt; Variogram( state=0|1 )

**説明:** バリオグラムの表示/非表示を切り替える。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Variogram( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

## Linear (Holt) Exponential Smoothing

### 項目のメッセージ

#### Actual

**構文:** obj &lt;&lt; Actual( state=0|1 )

**説明:** [列の保存]コマンドを実行したとき、実測値のデータ列も保存する。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Actual( 1 ), Save Columns );

```

#### Autocorrelations

**構文:** obj &lt;&lt; Autocorrelations( state=0|1 )

**説明:** 自己相関プロットの表示/非表示を切り替える。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Autocorrelations( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

#### Confidence Intervals

**構文:** obj &lt;&lt; Confidence Intervals( number )

#### Create SAS Job

**構文:** obj &lt;&lt; Create SAS Job

**説明:** PROC ARIMAによる分析を実行するためのSASプログラムを作成する。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Create SAS Job;

```

#### Innovations

**構文:** obj &lt;&lt; Innovations( state=0|1 )

**説明:** デフォルトではオン。

**JMP追加されたバージョン:** 16

#### Lower Confidence Limit

**構文:** obj &lt;&lt; Lower Confidence Limit( state=0|1 )

**説明:** [列の保存]コマンドを実行したとき、下側95%信頼限界のデータ列も保存する。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Lower Confidence Limit( 1 ), Save Columns );

```

#### No Constrain

**構文:** obj &lt;&lt; No Constrain( state=0|1 )

**説明:** ARIMAモデルを推定する際に、自己回帰パラメータを定常領域内に、移動平均パラメータを反転可能領域内に位置させるという制約を課さない。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, No Constrain( 1 ) );

```

#### No Intercept

**構文:** obj &lt;&lt; No Intercept( state=0|1 )

**説明:** ARIMAモデルの切片を0に固定する。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, No Intercept( 1 ) );

```

#### Partial Autocorrelations

**構文:** obj &lt;&lt; Partial Autocorrelations( state=0|1 )

**説明:** 偏自己相関プロットの表示/非表示を切り替える。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Partial Autocorrelations( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

#### Plot

**構文:** obj &lt;&lt; Plot( state=0|1 )

**説明:** 残差プロットの表示/非表示を切り替える。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Plot( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

#### Predicted

**構文:** obj &lt;&lt; Predicted( state=0|1 )

**説明:** [列の保存]コマンドを実行したとき、予測値のデータ列も保存する。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Predicted( 1 ), Save Columns );

```

#### Prediction Interval

**構文:** obj &lt;&lt; Prediction Interval( level )

**説明:** ARIMAモデルの予測に関する信頼区間の水準を設定する。デフォルトは0.95。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, Forecasting Interval( 0.99 ) );

```

#### Remove Fit

**構文:** obj &lt;&lt; Remove Fit

**JMP追加されたバージョン:** 16

#### Residuals

**構文:** obj &lt;&lt; Residuals( state=0|1 )

**説明:** [列の保存]コマンドを実行したとき、残差のデータ列も保存する。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Residuals( 1 ), Save Columns );

```

#### Save Columns

**構文:** obj &lt;&lt; Save Columns

**説明:** 応答変数の実測値、予測値、標準偏差、残差、95%予測区間を含んだ新しいデータテーブルを作成する。このオプションは、すべてのARIMAモデル、平滑化モデル、伝達関数モデルで使用できる。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Save Columns;

```

#### Save Prediction Formula

**構文:** obj &lt;&lt; Save Prediction Formula

**説明:** データテーブルの新しい列に予測式を保存する。このオプションはすべてのARIMAモデルと平滑化モデルで使用できる。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Save Prediction Formula;

```

#### Show Confidence Interval

**構文:** obj &lt;&lt; Show Confidence Interval( state=0|1 )

**説明:** 時系列予測プロットにおいて、予測区間の表示/非表示を切り替える。このオプションはすべてのARIMAモデルと平滑化モデルで使用できる。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Simple Exponential Smoothing( Zero to One );
obj2 << Show Confidence Interval( 0 );

```

#### Show Points

**構文:** obj &lt;&lt; Show Points( state=0|1 )

**説明:** 時系列予測プロットにおいて、点の表示/非表示を切り替える。このオプションはすべてのARIMAモデルと平滑化モデルで使用できる。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Show Points( 1 ) );

(obj << report)["Model Comparison"] << Close( 1 );

```

#### Show Prediction Interval

**構文:** obj &lt;&lt; Show Prediction Interval( state=0|1 )

**説明:** 時系列予測プロットにおいて、予測区間の表示/非表示を切り替える。このオプションはすべてのARIMAモデルと平滑化モデルで使用できる。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Simple Exponential Smoothing( Zero to One );
obj2 << Show Prediction Interval( 0 );

```

#### Std Error of Predicted

**構文:** obj &lt;&lt; Std Error of Predicted( state=0|1 )

**説明:** [列の保存]コマンドを実行したとき、予測値の標準誤差のデータ列も保存する。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Std Error of Predicted( 1 ), Save Columns );

```

#### Time

**構文:** obj &lt;&lt; Time( state=0|1 )

**説明:** [列の保存]コマンドを実行したとき、時間のデータ列も保存する。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ), Time ID( :Date ) );
obj << Arima( 1, 0, 0, Time( 0 ), Save Columns );

```

#### Upper Confidence Limit

**構文:** obj &lt;&lt; Upper Confidence Limit( state=0|1 )

**説明:** [列の保存]コマンドを実行したとき、上側95%信頼限界のデータ列も保存する。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Upper Confidence Limit( 1 ), Save Columns );

```

#### Variogram

**構文:** obj &lt;&lt; Variogram( state=0|1 )

**説明:** バリオグラムの表示/非表示を切り替える。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Variogram( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

## Seasonal ARIMA

### 項目のメッセージ

#### Actual

**構文:** obj &lt;&lt; Actual( state=0|1 )

**説明:** [列の保存]コマンドを実行したとき、実測値のデータ列も保存する。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Actual( 1 ), Save Columns );

```

#### Autocorrelations

**構文:** obj &lt;&lt; Autocorrelations( state=0|1 )

**説明:** 自己相関プロットの表示/非表示を切り替える。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Autocorrelations( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

#### Confidence Intervals

**構文:** obj &lt;&lt; Confidence Intervals( number )

#### Create SAS Job

**構文:** obj &lt;&lt; Create SAS Job

**説明:** PROC ARIMAによる分析を実行するためのSASプログラムを作成する。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Create SAS Job;

```

#### Innovations

**構文:** obj &lt;&lt; Innovations( state=0|1 )

**説明:** デフォルトではオン。

**JMP追加されたバージョン:** 16

#### Lower Confidence Limit

**構文:** obj &lt;&lt; Lower Confidence Limit( state=0|1 )

**説明:** [列の保存]コマンドを実行したとき、下側95%信頼限界のデータ列も保存する。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Lower Confidence Limit( 1 ), Save Columns );

```

#### No Constrain

**構文:** obj &lt;&lt; No Constrain( state=0|1 )

**説明:** ARIMAモデルを推定する際に、自己回帰パラメータを定常領域内に、移動平均パラメータを反転可能領域内に位置させるという制約を課さない。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, No Constrain( 1 ) );

```

#### No Intercept

**構文:** obj &lt;&lt; No Intercept( state=0|1 )

**説明:** ARIMAモデルの切片を0に固定する。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, No Intercept( 1 ) );

```

#### Partial Autocorrelations

**構文:** obj &lt;&lt; Partial Autocorrelations( state=0|1 )

**説明:** 偏自己相関プロットの表示/非表示を切り替える。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Partial Autocorrelations( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

#### Plot

**構文:** obj &lt;&lt; Plot( state=0|1 )

**説明:** 残差プロットの表示/非表示を切り替える。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Plot( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

#### Predicted

**構文:** obj &lt;&lt; Predicted( state=0|1 )

**説明:** [列の保存]コマンドを実行したとき、予測値のデータ列も保存する。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Predicted( 1 ), Save Columns );

```

#### Prediction Interval

**構文:** obj &lt;&lt; Prediction Interval( level )

**説明:** ARIMAモデルの予測に関する信頼区間の水準を設定する。デフォルトは0.95。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, Forecasting Interval( 0.99 ) );

```

#### Remove Fit

**構文:** obj &lt;&lt; Remove Fit

**JMP追加されたバージョン:** 16

#### Residuals

**構文:** obj &lt;&lt; Residuals( state=0|1 )

**説明:** [列の保存]コマンドを実行したとき、残差のデータ列も保存する。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Residuals( 1 ), Save Columns );

```

#### Save Columns

**構文:** obj &lt;&lt; Save Columns

**説明:** 応答変数の実測値、予測値、標準偏差、残差、95%予測区間を含んだ新しいデータテーブルを作成する。このオプションは、すべてのARIMAモデル、平滑化モデル、伝達関数モデルで使用できる。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Save Columns;

```

#### Save Prediction Formula

**構文:** obj &lt;&lt; Save Prediction Formula

**説明:** データテーブルの新しい列に予測式を保存する。このオプションはすべてのARIMAモデルと平滑化モデルで使用できる。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Save Prediction Formula;

```

#### Show Confidence Interval

**構文:** obj &lt;&lt; Show Confidence Interval( state=0|1 )

**説明:** 時系列予測プロットにおいて、予測区間の表示/非表示を切り替える。このオプションはすべてのARIMAモデルと平滑化モデルで使用できる。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Simple Exponential Smoothing( Zero to One );
obj2 << Show Confidence Interval( 0 );

```

#### Show Points

**構文:** obj &lt;&lt; Show Points( state=0|1 )

**説明:** 時系列予測プロットにおいて、点の表示/非表示を切り替える。このオプションはすべてのARIMAモデルと平滑化モデルで使用できる。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Show Points( 1 ) );

(obj << report)["Model Comparison"] << Close( 1 );

```

#### Show Prediction Interval

**構文:** obj &lt;&lt; Show Prediction Interval( state=0|1 )

**説明:** 時系列予測プロットにおいて、予測区間の表示/非表示を切り替える。このオプションはすべてのARIMAモデルと平滑化モデルで使用できる。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Simple Exponential Smoothing( Zero to One );
obj2 << Show Prediction Interval( 0 );

```

#### Std Error of Predicted

**構文:** obj &lt;&lt; Std Error of Predicted( state=0|1 )

**説明:** [列の保存]コマンドを実行したとき、予測値の標準誤差のデータ列も保存する。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Std Error of Predicted( 1 ), Save Columns );

```

#### Time

**構文:** obj &lt;&lt; Time( state=0|1 )

**説明:** [列の保存]コマンドを実行したとき、時間のデータ列も保存する。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ), Time ID( :Date ) );
obj << Arima( 1, 0, 0, Time( 0 ), Save Columns );

```

#### Upper Confidence Limit

**構文:** obj &lt;&lt; Upper Confidence Limit( state=0|1 )

**説明:** [列の保存]コマンドを実行したとき、上側95%信頼限界のデータ列も保存する。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Upper Confidence Limit( 1 ), Save Columns );

```

#### Variogram

**構文:** obj &lt;&lt; Variogram( state=0|1 )

**説明:** バリオグラムの表示/非表示を切り替える。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Variogram( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

## Seasonal Exponential Smoothing

### 項目のメッセージ

#### Actual

**構文:** obj &lt;&lt; Actual( state=0|1 )

**説明:** [列の保存]コマンドを実行したとき、実測値のデータ列も保存する。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Actual( 1 ), Save Columns );

```

#### Autocorrelations

**構文:** obj &lt;&lt; Autocorrelations( state=0|1 )

**説明:** 自己相関プロットの表示/非表示を切り替える。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Autocorrelations( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

#### Confidence Intervals

**構文:** obj &lt;&lt; Confidence Intervals( number )

#### Create SAS Job

**構文:** obj &lt;&lt; Create SAS Job

**説明:** PROC ARIMAによる分析を実行するためのSASプログラムを作成する。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Create SAS Job;

```

#### Innovations

**構文:** obj &lt;&lt; Innovations( state=0|1 )

**説明:** デフォルトではオン。

**JMP追加されたバージョン:** 16

#### Lower Confidence Limit

**構文:** obj &lt;&lt; Lower Confidence Limit( state=0|1 )

**説明:** [列の保存]コマンドを実行したとき、下側95%信頼限界のデータ列も保存する。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Lower Confidence Limit( 1 ), Save Columns );

```

#### No Constrain

**構文:** obj &lt;&lt; No Constrain( state=0|1 )

**説明:** ARIMAモデルを推定する際に、自己回帰パラメータを定常領域内に、移動平均パラメータを反転可能領域内に位置させるという制約を課さない。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, No Constrain( 1 ) );

```

#### No Intercept

**構文:** obj &lt;&lt; No Intercept( state=0|1 )

**説明:** ARIMAモデルの切片を0に固定する。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, No Intercept( 1 ) );

```

#### Partial Autocorrelations

**構文:** obj &lt;&lt; Partial Autocorrelations( state=0|1 )

**説明:** 偏自己相関プロットの表示/非表示を切り替える。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Partial Autocorrelations( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

#### Plot

**構文:** obj &lt;&lt; Plot( state=0|1 )

**説明:** 残差プロットの表示/非表示を切り替える。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Plot( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

#### Predicted

**構文:** obj &lt;&lt; Predicted( state=0|1 )

**説明:** [列の保存]コマンドを実行したとき、予測値のデータ列も保存する。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Predicted( 1 ), Save Columns );

```

#### Prediction Interval

**構文:** obj &lt;&lt; Prediction Interval( level )

**説明:** ARIMAモデルの予測に関する信頼区間の水準を設定する。デフォルトは0.95。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, Forecasting Interval( 0.99 ) );

```

#### Remove Fit

**構文:** obj &lt;&lt; Remove Fit

**JMP追加されたバージョン:** 16

#### Residuals

**構文:** obj &lt;&lt; Residuals( state=0|1 )

**説明:** [列の保存]コマンドを実行したとき、残差のデータ列も保存する。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Residuals( 1 ), Save Columns );

```

#### Save Columns

**構文:** obj &lt;&lt; Save Columns

**説明:** 応答変数の実測値、予測値、標準偏差、残差、95%予測区間を含んだ新しいデータテーブルを作成する。このオプションは、すべてのARIMAモデル、平滑化モデル、伝達関数モデルで使用できる。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Save Columns;

```

#### Save Prediction Formula

**構文:** obj &lt;&lt; Save Prediction Formula

**説明:** データテーブルの新しい列に予測式を保存する。このオプションはすべてのARIMAモデルと平滑化モデルで使用できる。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Save Prediction Formula;

```

#### Show Confidence Interval

**構文:** obj &lt;&lt; Show Confidence Interval( state=0|1 )

**説明:** 時系列予測プロットにおいて、予測区間の表示/非表示を切り替える。このオプションはすべてのARIMAモデルと平滑化モデルで使用できる。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Simple Exponential Smoothing( Zero to One );
obj2 << Show Confidence Interval( 0 );

```

#### Show Points

**構文:** obj &lt;&lt; Show Points( state=0|1 )

**説明:** 時系列予測プロットにおいて、点の表示/非表示を切り替える。このオプションはすべてのARIMAモデルと平滑化モデルで使用できる。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Show Points( 1 ) );

(obj << report)["Model Comparison"] << Close( 1 );

```

#### Show Prediction Interval

**構文:** obj &lt;&lt; Show Prediction Interval( state=0|1 )

**説明:** 時系列予測プロットにおいて、予測区間の表示/非表示を切り替える。このオプションはすべてのARIMAモデルと平滑化モデルで使用できる。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Simple Exponential Smoothing( Zero to One );
obj2 << Show Prediction Interval( 0 );

```

#### Std Error of Predicted

**構文:** obj &lt;&lt; Std Error of Predicted( state=0|1 )

**説明:** [列の保存]コマンドを実行したとき、予測値の標準誤差のデータ列も保存する。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Std Error of Predicted( 1 ), Save Columns );

```

#### Time

**構文:** obj &lt;&lt; Time( state=0|1 )

**説明:** [列の保存]コマンドを実行したとき、時間のデータ列も保存する。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ), Time ID( :Date ) );
obj << Arima( 1, 0, 0, Time( 0 ), Save Columns );

```

#### Upper Confidence Limit

**構文:** obj &lt;&lt; Upper Confidence Limit( state=0|1 )

**説明:** [列の保存]コマンドを実行したとき、上側95%信頼限界のデータ列も保存する。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Upper Confidence Limit( 1 ), Save Columns );

```

#### Variogram

**構文:** obj &lt;&lt; Variogram( state=0|1 )

**説明:** バリオグラムの表示/非表示を切り替える。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Variogram( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

## Simple Exponential Smoothing

### 項目のメッセージ

#### Actual

**構文:** obj &lt;&lt; Actual( state=0|1 )

**説明:** [列の保存]コマンドを実行したとき、実測値のデータ列も保存する。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Actual( 1 ), Save Columns );

```

#### Autocorrelations

**構文:** obj &lt;&lt; Autocorrelations( state=0|1 )

**説明:** 自己相関プロットの表示/非表示を切り替える。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Autocorrelations( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

#### Confidence Intervals

**構文:** obj &lt;&lt; Confidence Intervals( number )

#### Create SAS Job

**構文:** obj &lt;&lt; Create SAS Job

**説明:** PROC ARIMAによる分析を実行するためのSASプログラムを作成する。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Create SAS Job;

```

#### Innovations

**構文:** obj &lt;&lt; Innovations( state=0|1 )

**説明:** デフォルトではオン。

**JMP追加されたバージョン:** 16

#### Lower Confidence Limit

**構文:** obj &lt;&lt; Lower Confidence Limit( state=0|1 )

**説明:** [列の保存]コマンドを実行したとき、下側95%信頼限界のデータ列も保存する。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Lower Confidence Limit( 1 ), Save Columns );

```

#### No Constrain

**構文:** obj &lt;&lt; No Constrain( state=0|1 )

**説明:** ARIMAモデルを推定する際に、自己回帰パラメータを定常領域内に、移動平均パラメータを反転可能領域内に位置させるという制約を課さない。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, No Constrain( 1 ) );

```

#### No Intercept

**構文:** obj &lt;&lt; No Intercept( state=0|1 )

**説明:** ARIMAモデルの切片を0に固定する。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, No Intercept( 1 ) );

```

#### Partial Autocorrelations

**構文:** obj &lt;&lt; Partial Autocorrelations( state=0|1 )

**説明:** 偏自己相関プロットの表示/非表示を切り替える。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Partial Autocorrelations( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

#### Plot

**構文:** obj &lt;&lt; Plot( state=0|1 )

**説明:** 残差プロットの表示/非表示を切り替える。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Plot( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

#### Predicted

**構文:** obj &lt;&lt; Predicted( state=0|1 )

**説明:** [列の保存]コマンドを実行したとき、予測値のデータ列も保存する。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Predicted( 1 ), Save Columns );

```

#### Prediction Interval

**構文:** obj &lt;&lt; Prediction Interval( level )

**説明:** ARIMAモデルの予測に関する信頼区間の水準を設定する。デフォルトは0.95。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, Forecasting Interval( 0.99 ) );

```

#### Remove Fit

**構文:** obj &lt;&lt; Remove Fit

**JMP追加されたバージョン:** 16

#### Residuals

**構文:** obj &lt;&lt; Residuals( state=0|1 )

**説明:** [列の保存]コマンドを実行したとき、残差のデータ列も保存する。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Residuals( 1 ), Save Columns );

```

#### Save Columns

**構文:** obj &lt;&lt; Save Columns

**説明:** 応答変数の実測値、予測値、標準偏差、残差、95%予測区間を含んだ新しいデータテーブルを作成する。このオプションは、すべてのARIMAモデル、平滑化モデル、伝達関数モデルで使用できる。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Save Columns;

```

#### Save Prediction Formula

**構文:** obj &lt;&lt; Save Prediction Formula

**説明:** データテーブルの新しい列に予測式を保存する。このオプションはすべてのARIMAモデルと平滑化モデルで使用できる。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Save Prediction Formula;

```

#### Show Confidence Interval

**構文:** obj &lt;&lt; Show Confidence Interval( state=0|1 )

**説明:** 時系列予測プロットにおいて、予測区間の表示/非表示を切り替える。このオプションはすべてのARIMAモデルと平滑化モデルで使用できる。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Simple Exponential Smoothing( Zero to One );
obj2 << Show Confidence Interval( 0 );

```

#### Show Points

**構文:** obj &lt;&lt; Show Points( state=0|1 )

**説明:** 時系列予測プロットにおいて、点の表示/非表示を切り替える。このオプションはすべてのARIMAモデルと平滑化モデルで使用できる。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Show Points( 1 ) );

(obj << report)["Model Comparison"] << Close( 1 );

```

#### Show Prediction Interval

**構文:** obj &lt;&lt; Show Prediction Interval( state=0|1 )

**説明:** 時系列予測プロットにおいて、予測区間の表示/非表示を切り替える。このオプションはすべてのARIMAモデルと平滑化モデルで使用できる。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Simple Exponential Smoothing( Zero to One );
obj2 << Show Prediction Interval( 0 );

```

#### Std Error of Predicted

**構文:** obj &lt;&lt; Std Error of Predicted( state=0|1 )

**説明:** [列の保存]コマンドを実行したとき、予測値の標準誤差のデータ列も保存する。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Std Error of Predicted( 1 ), Save Columns );

```

#### Time

**構文:** obj &lt;&lt; Time( state=0|1 )

**説明:** [列の保存]コマンドを実行したとき、時間のデータ列も保存する。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ), Time ID( :Date ) );
obj << Arima( 1, 0, 0, Time( 0 ), Save Columns );

```

#### Upper Confidence Limit

**構文:** obj &lt;&lt; Upper Confidence Limit( state=0|1 )

**説明:** [列の保存]コマンドを実行したとき、上側95%信頼限界のデータ列も保存する。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Upper Confidence Limit( 1 ), Save Columns );

```

#### Variogram

**構文:** obj &lt;&lt; Variogram( state=0|1 )

**説明:** バリオグラムの表示/非表示を切り替える。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Variogram( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

## Simple Moving Average

### 項目のメッセージ

#### Add Model

**構文:** obj &lt;&lt; Add Model( Window Width, &lt;Centered&gt; )

**説明:** 単純移動平均モデルを追加する。単純移動平均の各モデルは、移動平均を計算するウィンドウ幅が異なっている。オプションの引数で、中心化するかどうかを指定する。

```jsl

dt = Open( "$SAMPLE_DATA/Stock Prices.jmp" );
obj = Time Series( Y( :Close ), Simple Moving Average( Add Model( 5 ) ) );
sma = obj << Simple Moving Average( Add Model( 10 ) );
sma << Add Model( 15, Centered );

```

#### Connecting Lines

**構文:** obj &lt;&lt; Connecting Lines( &lt;1|0&gt; )

**説明:** グラフに接続線を表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Stock Prices.jmp" );
obj = Time Series( Y( :Close ), Simple Moving Average( Add Model( 5 ) ) );
sma = obj << Simple Moving Average( Connecting Lines );

```

#### Get Results

**構文:** obj &lt;&lt; Get Results

**説明:** すべての単純移動平均モデルを、JSLのオブジェクトとして戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Stock Prices.jmp" );
obj = Time Series( Y( :Close ), Simple Moving Average( Add Model( 5 ) ) );
resultobj = obj << Simple Moving Average( Get Result );

```

#### Remove Model

**構文:** obj &lt;&lt; Remove Model( Window Width, &lt;Centered&gt; )

**説明:** 単純移動平均モデルを削除する。単純移動平均の各モデルは、移動平均を計算するウィンドウ幅が異なっている。

```jsl

dt = Open( "$SAMPLE_DATA/Stock Prices.jmp" );
obj = Time Series( Y( :Close ), Simple Moving Average( Add Model( 5 ) ) );
obj << Simple Moving Average( Remove Model( 5 ) );

```

#### Remove Report

**構文:** obj &lt;&lt; Remove Report

**JMP追加されたバージョン:** 16

#### Save to Data Table

**構文:** obj &lt;&lt; Save to Data Table

**説明:** すべての単純移動平均モデルの結果をデータテーブルに保存し、そのデータテーブルに対する参照を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Stock Prices.jmp" );
obj = Time Series( Y( :Close ), Simple Moving Average( Add Model( 5 ) ) );
resultdt = obj << Simple Moving Average( Save to Data Table );

```

#### Show Points

**構文:** obj &lt;&lt; Show Points( &lt;1|0&gt; )

**説明:** グラフに点を表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Stock Prices.jmp" );
obj = Time Series( Y( :Close ), Simple Moving Average( Add Model( 5 ) ) );
sma = obj << Simple Moving Average( Show Points( 0 ) );

```

## Transfer Function Model

### 項目のメッセージ

#### Alternative Parameterization

**構文:** obj &lt;&lt; Alternative Parameterization( state=0|1 )

**説明:** 分子の多項式において、一般的な回帰係数を因数分解してパラメータ化するかどうかを指定する。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );
obj = Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	:Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) )
);
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	:Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ),
	Alternative Parameterization( 1 )
);

```

#### Autocorrelations

**構文:** obj &lt;&lt; Autocorrelations( state=0|1 )

**説明:** 自己相関プロットの表示/非表示を切り替える。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );
obj = Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ),
	Autocorrelations( 1 )
);
(obj << report)["Residuals"] << Close( 0 );

```

#### Compute Objective

**構文:** obj &lt;&lt; Compute Objective

#### Create SAS Job

**構文:** obj &lt;&lt; Create SAS Job

**説明:** PROC ARIMAによる分析を実行するためのSASプログラムを作成する。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );
obj = Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ),
	Create SAS Job
);

```

#### Import New Inputs

**構文:** obj &lt;&lt; Import New Inputs

**JMP追加されたバージョン:** 16

#### Maximum Iterations

**構文:** obj &lt;&lt; Maximum Iterations( number )

**説明:** 反復の最大回数を指定する。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );
obj = Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	:Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) )
);
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	:Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ),
	Maximum Iterations( 10 )
);

```

#### No Constrain

**構文:** obj &lt;&lt; No Constrain( state=0|1 )

**説明:** AR係数およびMA係数に制約を課さない。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );
obj = Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	:Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) )
);
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	:Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ),
	No Constrain( 1 )
);

```

#### No Intercept

**構文:** obj &lt;&lt; No Intercept( state=0|1 )

**説明:** 切片を0に固定する。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );
obj = Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	:Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) )
);
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	:Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ),
	No Intercept( 1 )
);

```

#### Number of Forecast Periods

**構文:** obj &lt;&lt; Number of Forecast Periods( number )

**説明:** 予測する期間の数を指定する。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );
obj = Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	:Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) )
);
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	:Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ),
	Number of Forecast Periods( 10 )
);

```

#### Partial Autocorrelations

**構文:** obj &lt;&lt; Partial Autocorrelations( state=0|1 )

**説明:** 偏自己相関プロットの表示/非表示を切り替える。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );
obj = Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ),
	Partial Autocorrelations( 1 )
);
(obj << report)["Residuals"] << Close( 0 );

```

#### Plot

**構文:** obj &lt;&lt; Plot( state=0|1 )

**説明:** 残差プロットの表示/非表示を切り替える。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );
obj = Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ),
	Plot( 1 )
);
(obj << report)["Residuals"] << Close( 0 );

```

#### Prediction Interval

**構文:** obj &lt;&lt; Prediction Interval( number )

**説明:** 表示される信頼区間の水準を設定する。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );
obj = Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	:Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) )
);
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	:Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ),
	Confidence Intervals( 0.99 )
);

```

#### Remove Fit

**構文:** obj &lt;&lt; Remove Fit

**JMP追加されたバージョン:** 16

#### Save Columns

**構文:** obj &lt;&lt; Save Columns

**説明:** 応答変数の実測値、予測値、標準偏差、残差、95%予測区間を含んだ新しいデータテーブルを作成する。このオプションは、すべてのARIMAモデル、平滑化モデル、伝達関数モデルで使用できる。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );
obj = Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ),
	Save Columns
);

```

#### Variogram

**構文:** obj &lt;&lt; Variogram( state=0|1 )

**説明:** バリオグラムの表示/非表示を切り替える。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );
obj = Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ),
	Variogram( 1 )
);
(obj << report)["Residuals"] << Close( 0 );

```

## Winters Method (Additive)

### 項目のメッセージ

#### Actual

**構文:** obj &lt;&lt; Actual( state=0|1 )

**説明:** [列の保存]コマンドを実行したとき、実測値のデータ列も保存する。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Actual( 1 ), Save Columns );

```

#### Autocorrelations

**構文:** obj &lt;&lt; Autocorrelations( state=0|1 )

**説明:** 自己相関プロットの表示/非表示を切り替える。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Autocorrelations( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

#### Confidence Intervals

**構文:** obj &lt;&lt; Confidence Intervals( number )

#### Create SAS Job

**構文:** obj &lt;&lt; Create SAS Job

**説明:** PROC ARIMAによる分析を実行するためのSASプログラムを作成する。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Create SAS Job;

```

#### Innovations

**構文:** obj &lt;&lt; Innovations( state=0|1 )

**説明:** デフォルトではオン。

**JMP追加されたバージョン:** 16

#### Lower Confidence Limit

**構文:** obj &lt;&lt; Lower Confidence Limit( state=0|1 )

**説明:** [列の保存]コマンドを実行したとき、下側95%信頼限界のデータ列も保存する。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Lower Confidence Limit( 1 ), Save Columns );

```

#### No Constrain

**構文:** obj &lt;&lt; No Constrain( state=0|1 )

**説明:** ARIMAモデルを推定する際に、自己回帰パラメータを定常領域内に、移動平均パラメータを反転可能領域内に位置させるという制約を課さない。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, No Constrain( 1 ) );

```

#### No Intercept

**構文:** obj &lt;&lt; No Intercept( state=0|1 )

**説明:** ARIMAモデルの切片を0に固定する。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, No Intercept( 1 ) );

```

#### Partial Autocorrelations

**構文:** obj &lt;&lt; Partial Autocorrelations( state=0|1 )

**説明:** 偏自己相関プロットの表示/非表示を切り替える。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Partial Autocorrelations( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

#### Plot

**構文:** obj &lt;&lt; Plot( state=0|1 )

**説明:** 残差プロットの表示/非表示を切り替える。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Plot( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

#### Predicted

**構文:** obj &lt;&lt; Predicted( state=0|1 )

**説明:** [列の保存]コマンドを実行したとき、予測値のデータ列も保存する。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Predicted( 1 ), Save Columns );

```

#### Prediction Interval

**構文:** obj &lt;&lt; Prediction Interval( level )

**説明:** ARIMAモデルの予測に関する信頼区間の水準を設定する。デフォルトは0.95。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, Forecasting Interval( 0.99 ) );

```

#### Remove Fit

**構文:** obj &lt;&lt; Remove Fit

**JMP追加されたバージョン:** 16

#### Residuals

**構文:** obj &lt;&lt; Residuals( state=0|1 )

**説明:** [列の保存]コマンドを実行したとき、残差のデータ列も保存する。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Residuals( 1 ), Save Columns );

```

#### Save Columns

**構文:** obj &lt;&lt; Save Columns

**説明:** 応答変数の実測値、予測値、標準偏差、残差、95%予測区間を含んだ新しいデータテーブルを作成する。このオプションは、すべてのARIMAモデル、平滑化モデル、伝達関数モデルで使用できる。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Save Columns;

```

#### Save Prediction Formula

**構文:** obj &lt;&lt; Save Prediction Formula

**説明:** データテーブルの新しい列に予測式を保存する。このオプションはすべてのARIMAモデルと平滑化モデルで使用できる。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Save Prediction Formula;

```

#### Show Confidence Interval

**構文:** obj &lt;&lt; Show Confidence Interval( state=0|1 )

**説明:** 時系列予測プロットにおいて、予測区間の表示/非表示を切り替える。このオプションはすべてのARIMAモデルと平滑化モデルで使用できる。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Simple Exponential Smoothing( Zero to One );
obj2 << Show Confidence Interval( 0 );

```

#### Show Points

**構文:** obj &lt;&lt; Show Points( state=0|1 )

**説明:** 時系列予測プロットにおいて、点の表示/非表示を切り替える。このオプションはすべてのARIMAモデルと平滑化モデルで使用できる。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Show Points( 1 ) );

(obj << report)["Model Comparison"] << Close( 1 );

```

#### Show Prediction Interval

**構文:** obj &lt;&lt; Show Prediction Interval( state=0|1 )

**説明:** 時系列予測プロットにおいて、予測区間の表示/非表示を切り替える。このオプションはすべてのARIMAモデルと平滑化モデルで使用できる。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Simple Exponential Smoothing( Zero to One );
obj2 << Show Prediction Interval( 0 );

```

#### Std Error of Predicted

**構文:** obj &lt;&lt; Std Error of Predicted( state=0|1 )

**説明:** [列の保存]コマンドを実行したとき、予測値の標準誤差のデータ列も保存する。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Std Error of Predicted( 1 ), Save Columns );

```

#### Time

**構文:** obj &lt;&lt; Time( state=0|1 )

**説明:** [列の保存]コマンドを実行したとき、時間のデータ列も保存する。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ), Time ID( :Date ) );
obj << Arima( 1, 0, 0, Time( 0 ), Save Columns );

```

#### Upper Confidence Limit

**構文:** obj &lt;&lt; Upper Confidence Limit( state=0|1 )

**説明:** [列の保存]コマンドを実行したとき、上側95%信頼限界のデータ列も保存する。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Upper Confidence Limit( 1 ), Save Columns );

```

#### Variogram

**構文:** obj &lt;&lt; Variogram( state=0|1 )

**説明:** バリオグラムの表示/非表示を切り替える。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Variogram( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

