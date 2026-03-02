# Data Table



## 関連するコンストラクター

### Association Analysis

**構文:** Association Analysis( Item( columns ), ID( columns ) )

**説明:** トランザクション内において、頻繁に同時に生じているアイテムを探し出す。アソシエーション分析は、「マーケットバスケット分析」とも呼ばれている。、購買データの分析において、一緒に購入されている商品を探し出すためによく使われている。

```jsl

dt = Open( "$SAMPLE_DATA/Grocery Purchases.jmp" );
obj = dt << Association Analysis( Item( :Product ), ID( :Customer ID ) );

```

### Attribute Chart

**構文:** Attribute Chart( Y( columns ), X( columns ) )

**説明:** カテゴリカルな測定値を分析する。複数の判定者におけるカテゴリカルな測定値の一致性などを見る。

```jsl

dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );
obj = dt << Attribute Chart( Y( :A, :B, :C ), X( :Part ), Standard( :Standard ) );

```

### Bayesian Optimization

**構文:** Bayesian Optimization

**説明:** Recommends factor settings to optimize responses by augmenting the data table.

**JMP追加されたバージョン:** 19

### Bivariate

**構文:** Bivariate( Y( columns ), X( columns ) )

**説明:** 連続量の変数により連続量の応答をモデル化する。分析手法には、直線のあてはめ、多項式のあてはめ、スプライン曲線のあてはめ、確率楕円のあてはめなどがある。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );

```

### Boosted Tree

**構文:** Boosted Tree (Y( column ), X( columns ))

**説明:** 小さなディシジョンツリーを逐次的にあてはめて大きなディシジョンツリーを構築することで、予測モデルを作成する。ツリーは、それぞれ1ステップ前のツリーの残差にあてはめられる。

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation ),
	Go
);

```

### Bootstrap Forest

**構文:** Bootstrap Forest (Y( column ), X( columns ))

**説明:** 多数のディシジョンツリーから求めた予測値を平均することで、予測モデルを作成する。ディシジョンツリーは、学習データのランダムなブートストラップ標本にあてはめられる。

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation ),
	Minimum Splits Per Tree( 5 ),
	Portion Bootstrap( 1 ),
	Number Terms( 3 ),
	Number Trees( 25 ),
	Go
);

```

### Bubble Plot

**構文:** Bubble Plot( X( column ), Y( column ), &lt;Sizes( column )&gt;, &lt;Time( column )&gt;, &lt;ID( column )&gt;, &lt;Coloring( column ) )

**説明:** 2次元のバブルの散布図を作成する。このグラフは、時間の変数を使ってアニメーションとして表示できる。追加の変数でバブルのサイズや色を表現することもできる。

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Country )
);

```

### CUSUM Control Chart

**構文:** CUSUM Control Chart( Y( column ), &lt;X( column )&gt;, &lt;By( column )&gt;, &lt;Data Units( 0|1 )&gt;, &lt;Show Excluded Region( 0|1 )&gt; )

**説明:** 目標値からのサブグループ平均の偏差の累積和をプロットした管理図を作成する。この管理図は、表形式のCUSUM管理図とも呼ばれている。

**JMP追加されたバージョン:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Oil1 Cusum.jmp" );
obj = dt << CUSUM Control Chart(
	Y( :weight ),
	H( 2 ),
	Lower Side( 1 ),
	Target( 8.1 ),
	K( 0.025 ),
	Sigma( 0.05 ),
	Head Start( 0.05 )
);

```

### Categorical

**構文:** Categorical( Responses | Aligned Responses | Repeated Measures | Rater Agreement | Multiple Response | Multiple Response by ID | Multiple Delimited | Indicator Group | Response Frequencies( column ), X( column(s) ) )

**説明:** カテゴリカルなデータを要約し、分析する。データとしては、単純応答、多重応答、反復測定、判定の一致性、共通の値をもつ応答、自由回答が使える。柔軟な形式のクロス表をカスタムで作成する機能もある。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );

```

### Cell Plot

**構文:** Cell Plot( Y( column(s) ), &lt;X( column )&gt; )

**説明:** データテーブルの値と1対1で対応したセルを長方形のグリッドに並べる。セルの色はセルの値によって決まる。

```jsl

dt = Open( "$SAMPLE_DATA/SAT.jmp" );
obj = dt << Cell Plot(
	Y(
		:"2004 Verbal"n, :"2004 Math"n, :"2003 Verbal"n, :"2003 Math"n, :"2002 Verbal"n,
		:"2002 Math"n, :"2001 Verbal"n, :"2001 Math"n, :"1999 Verbal"n, :"1999 Math"n,
		:"1994 Verbal"n, :"1994 Math"n, :"1997 Verbal"n, :"1997 Math"n, :"1992 Verbal"n,
		:"1992 Math"n
	)
);

```

### Choice

**構文:** Choice( Profile DataTable( data table ), Profile ID( column ), Profile Effects( column(s) ), &lt;Response Data Table( data table )&gt;, &lt;Subject Data Table( data table )&gt;, &lt;Response Profile ID Chosen( column )&gt;, &lt;Response Subject ID( column)&gt;, &lt;Response Grouping( column(s) )&gt;, &lt;Response Profile ID Choices( column(s) )&gt;, &lt;Profile Grouping( column(s) )&gt;, &lt;Subject Subject ID( column )&gt;, &lt;Subject Effects( column(s) )&gt; )

**説明:** 顧客の嗜好について調べたデータに対して選択モデルをあてはめる。条件付きロジスティック回帰によって特定の属性をもつ製品が好まれる確率を推定する。

#### 例 1

```jsl

dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = dt << Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);

```

#### 例 2

```jsl

dt = Open( "$SAMPLE_DATA/Pizza Combined.jmp" );
obj = Choice(
	One Table( 1 ),
	Profile DataTable( dt ),
	Profile ID( :Indicator ),
	Profile Effects( :Crust, :Cheese, :Topping ),
	Profile Grouping( :Subject, :Trial )
);

```

### Close

**構文:** Close( data table name, &lt;NoSave|Save("path")&gt; )

**説明:** 第1引数で指定されたータテーブルを閉じる。第1引数のデフォルトは現在のデータテーブル。第2引数はデータテーブルを保存するのに使用される。データテーブルをJMPフォーマット以外の形式で保存する場合は、パスに適切なファイル拡張子を使用してください。NoSaveを指定すると、変更を保存するか破棄するかを尋ねるプロンプトが表示されない。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
Close( dt );

```

### Cluster Variables

**構文:** Cluster Variables( Y( columns ) )

**説明:** 1つの成分または変数を表現している可能性がある変数(列)をクラスターにまとめる。変数のクラスタリングは、次元削減の手段として使用できる。

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Cluster Variables( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );

```

### Contingency

**構文:** Contingency( Y( columns ), X( columns ) )

**説明:** カテゴリカルな説明変数とカテゴリカルな応答変数をモデル化する。カイ2乗検定を行い、モザイク図を描く。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );

```

### Contour Plot

**構文:** Contour Plot( X( column, column ), Y( column ) )

**説明:** 3つの変数を2次元で表示するグラフ。3つ目の変数は、等しい値を結んだ等高線として表す。

```jsl

dt = Open( "$SAMPLE_DATA/Little Pond.jmp" );
obj = dt << Contour Plot( X( :X, :Y ), Y( :Z ) );

```

### Contour Profiler

**構文:** Contour Profiler( Y( column1, column2, ... ) )

**説明:** 2つの因子で応答変数がどのように変化するかを示す、対話的な等高線図。プロットで使用されていない因子の値を変更することで、因子設定が応答変数の予測値に与える影響を詳しく調べられる。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Contour Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);

```

### Control Chart Builder

**構文:** Control Chart Builder( Class( "Shewhart Variables"|"Shewhart Attribute"|"Short Run"|"Rare Event" ), Variables( variables ), &lt;Chart( Position( number ), Points( Statistic( "statistic" ), &lt;points options&gt; ), Limits( Sigma( "sigma" ), &lt;limits options&gt; )&gt; ) ) )

**説明:** 工程の安定性や予測可能性を特定するための管理図をインタラクティブに作成できるようにする。[管理図ビルダー]プラットフォームで作成できる管理図は、IMR、XBar、短期操業管理図、ランチャート、P、NP、C、U、Laney P&apos;、Laney U&apos;、Levey-Jennings、平均のIMR管理図、三元管理図、まれなイベントの管理図。

#### C管理図

```jsl

// Create a C chart by adding a Y variable, changing the Class to Shewhart Attribute, changing the Statistic to Count, and changing the Sigma to Poisson.
dt = Open( "$SAMPLE_DATA/Quality Control/Orange Juice.jmp" );
obj = dt << Control Chart Builder(
	Class( "Shewhart Attribute" ),
	Variables( Subgroup( :Sample ), Y( :Status ), Phase( :Phase ) ),
	Chart( Points( Statistic( "Count" ) ), Limits( Sigma( "Poisson" ) ) )
);

```

#### IMR管理図

```jsl

// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );

```

#### Levey-Jennings管理図

```jsl

// Create a Levey-Jennings chart by adding a Y variable, removing the dispersion chart, and changing the Sigma to Levey Jennings. Make sure that the Statistic is set to Individual.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Show Two Shewhart Charts( 0 ),
	Variables( Y( :Weight ) ),
	Chart( Points( Statistic( "Individual" ) ), Limits( Sigma( "Levey Jennings" ) ) )
);

```

#### NP管理図

```jsl

// Create an NP chart by adding a Y variable, changing the Class to Shewhart Attribute, changing the Statistic to Count, and changing the Sigma to Binomial (P, NP).
dt = Open( "$SAMPLE_DATA/Quality Control/Orange Juice.jmp" );
obj = dt << Control Chart Builder(
	Class( "Shewhart Attribute" ),
	Variables( Subgroup( :Sample ), Y( :Status ), Phase( :Phase ) ),
	Chart( Points( Statistic( "Count" ) ), Limits( Sigma( "Binomial" ) ) )
);

```

#### P管理図

```jsl

// Create a P chart by adding a Y variable, changing the Class to Shewhart Attribute, changing the Statistic to Proportion, and changing the Sigma to Binomial (P, NP).
dt = Open( "$SAMPLE_DATA/Quality Control/Orange Juice.jmp" );
obj = dt << Control Chart Builder(
	Class( "Shewhart Attribute" ),
	Variables( Subgroup( :Sample ), Y( :Status ), Phase( :Phase ) ),
	Chart( Points( Statistic( "Proportion" ) ), Limits( Sigma( "Binomial" ) ) )
);

```

#### P'管理図

```jsl

// Create a P' chart by adding a Y variable, changing the Class to Shewhart Attribute, changing the Statistic to Proportion, and changing the Sigma to Laney P'.
dt = Open( "$SAMPLE_DATA/Quality Control/Washers.jmp" );
obj = dt << Control Chart Builder(
	Class( "Shewhart Attribute" ),
	Variables( Subgroup( :Lot ), Y( :"# defective"n ), n Trials( :Lot Size ) ),
	Chart( Points( Statistic( "Proportion" ) ), Limits( Sigma( "Laney P Prime" ) ) )
);

```

#### U管理図

```jsl

// Create a U chart by adding a Y variable, changing the Class to Shewhart Attribute, changing the Statistic to Proportion, and changing the Sigma to Poisson.
dt = Open( "$SAMPLE_DATA/Quality Control/Orange Juice.jmp" );
obj = dt << Control Chart Builder(
	Class( "Shewhart Attribute" ),
	Variables( Subgroup( :Sample ), Y( :Status ), Phase( :Phase ) ),
	Chart( Points( Statistic( "Proportion" ) ), Limits( Sigma( "Poisson" ) ) )
);

```

#### U'管理図

```jsl

// Create a U' chart by adding a Y variable, changing the Class to Shewhart Attribute, changing the Statistic to Proportion, and changing the Sigma to Laney U'.
dt = Open( "$SAMPLE_DATA/Quality Control/Washers.jmp" );
obj = dt << Control Chart Builder(
	Class( "Shewhart Attribute" ),
	Variables( Subgroup( :Lot ), Y( :"# defective"n ), n Trials( :Lot Size ) ),
	Chart( Points( Statistic( "Proportion" ) ), Limits( Sigma( "Laney U Prime" ) ) )
);

```

#### XBar/R管理図

```jsl

// Create an XBar/R chart by adding a subgroup or setting a subgroup size after adding a Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ), Set Subgroup Size( 4 ) );

```

#### XBar/S管理図(サブグループサイズを指定)

```jsl

// Create an XBar/S chart by adding a Y variable and defining a subgroup size, changing the Statistic for the dispersion chart to Standard Deviation, and changing the Sigma for the location chart to Standard Deviation.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Y( :Weight ) ),
	Set Subgroup Size( 4 ),
	Chart( Position( 1 ), Limits( Sigma( "Standard Deviation" ) ) ),
	Chart(
		Position( 2 ),
		Points( Statistic( "Standard Deviation" ) ),
		Limits( Sigma( "Standard Deviation" ) )
	)
);

```

#### XBar/S管理図(サブグループ変数)

```jsl

// Create an XBar/S chart by adding a Y variable and a subgroup variable, changing the Statistic for the dispersion chart to Standard Deviation, and changing the Sigma for the location chart to Standard Deviation.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Subgroup( :Sample ), Y( :Weight ) ),
	Chart( Position( 1 ), Limits( Sigma( "Standard Deviation" ) ) ),
	Chart(
		Position( 2 ),
		Points( Statistic( "Standard Deviation" ) ),
		Limits( Sigma( "Standard Deviation" ) )
	)
);

```

#### グループ平均(メディアン移動範囲)の管理図(サブグループサイズを指定)

```jsl

// Create a Median Moving Range on Group Means chart by adding a Y variable and defining a subgroup size, changing the Statistic on the dispersion chart to Moving Range on Means, and changing the Sigma to Median Moving Range on both the location and dispersion charts.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Y( :Weight ) ),
	Set Subgroup Size( 4 ),
	Chart( Position( 1 ), Limits( Sigma( "Median Moving Range" ) ) ),
	Chart(
		Position( 2 ),
		Points( Statistic( "Moving Range on Means" ) ),
		Limits( Sigma( "Median Moving Range" ) )
	)
);

```

#### グループ平均(メディアン移動範囲)の管理図(サブグループ変数)

```jsl

// Create a Median Moving Range on Group Means chart by adding a Y variable and a subgroup variable, changing the Statistic on the dispersion chart to Moving Range on Means, and changing the Sigma to Median Moving Range on both the location and dispersion charts.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Subgroup( :Sample ), Y( :Weight ) ),
	Chart( Position( 1 ), Limits( Sigma( "Median Moving Range" ) ) ),
	Chart(
		Position( 2 ),
		Points( Statistic( "Moving Range on Means" ) ),
		Limits( Sigma( "Median Moving Range" ) )
	)
);

```

#### グループ標準偏差(メディアン移動範囲)の管理図(サブグループサイズを指定)

```jsl

// Create a Median Moving Range on Group Standard Deviations chart by adding a Y variable and defining a subgroup size, changing the Statistic on the location chart to Standard deviation, on the dispersion chart to Moving Range on Std Dev, and changing the Sigma to Median Moving Range on both the location and dispersion charts.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Y( :Weight ) ),
	Set Subgroup Size( 4 ),
	Chart(
		Position( 1 ),
		Points( Statistic( "Standard Deviation" ) ),
		Limits( Sigma( "Median Moving Range" ) )
	),
	Chart(
		Position( 2 ),
		Points( Statistic( "Moving Range on Std Dev" ) ),
		Limits( Sigma( "Median Moving Range" ) )
	)
);

```

#### グループ標準偏差(メディアン移動範囲)の管理図(サブグループ変数)

```jsl

// Create a Median Moving Range on Group Standard Deviations chart by adding a Y variable and a subgroup variable, changing the Statistic on the location chart to Standard deviation, on the dispersion chart to Moving Range on Std Dev, and changing the Sigma to Median Moving Range on both the location and dispersion charts.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Subgroup( :Sample ), Y( :Weight ) ),
	Chart(
		Position( 1 ),
		Points( Statistic( "Standard Deviation" ) ),
		Limits( Sigma( "Median Moving Range" ) )
	),
	Chart(
		Position( 2 ),
		Points( Statistic( "Moving Range on Std Dev" ) ),
		Limits( Sigma( "Median Moving Range" ) )
	)
);

```

#### グループ標準偏差のIMR管理図(サブグループサイズを指定)

```jsl

// Create an IMR on Group Standard Deviation chart by adding a Y variable and defining a subgroup size, and changing the Statistic on the location chart to Standard Deviation, on the dispersion chart to Moving Range on Std Dev and the Sigma on both charts to Moving Range.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Y( :Weight ) ),
	Set Subgroup Size( 4 ),
	Chart(
		Position( 1 ),
		Points( Statistic( "Standard Deviation" ) ),
		Limits( Sigma( "Moving Range" ) )
	),
	Chart(
		Position( 2 ),
		Points( Statistic( "Moving Range on Std Dev" ) ),
		Limits( Sigma( "Moving Range" ) )
	)
);

```

#### グループ標準偏差のIMR管理図(サブグループ変数)

```jsl

// Create an IMR on Group Standard Deviation chart by adding a Y variable and a subgroup variable, and changing the Statistic on the location chart to Standard Deviation, on the dispersion chart to Moving Range on Std Dev and the Sigma on both charts to Moving Range.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Subgroup( :Sample ), Y( :Weight ) ),
	Chart(
		Position( 1 ),
		Points( Statistic( "Standard Deviation" ) ),
		Limits( Sigma( "Moving Range" ) )
	),
	Chart(
		Position( 2 ),
		Points( Statistic( "Moving Range on Std Dev" ) ),
		Limits( Sigma( "Moving Range" ) )
	)
);

```

#### まれなイベントのG管理図

```jsl

// Create a G chart by changing the class to Rare Event and adding a nonnegative discrete Y variable. Make sure that the Sigma is set to Negative Binomial.
dt = Open( "$SAMPLE_DATA/Quality Control/Fan Burnout.jmp" );
obj = dt << Control Chart Builder(
	Class( "Rare Event" ),
	Variables( Subgroup( :Burnout ), Y( :Hours between Burnouts ) ),
	Chart( Points( Statistic( "Count" ) ), Limits( Sigma( "Negative Binomial" ) ) )
);

```

#### まれなイベントのT管理図

```jsl

// Create a T chart by changing the class to Rare Event, changing the Sigma to Weibull, and adding a nonnegative discrete Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Fan Burnout.jmp" );
obj = dt << Control Chart Builder(
	Class( "Rare Event" ),
	Variables( Subgroup( :Burnout ), Y( :Hours between Burnouts ) ),
	Chart( Points( Statistic( "Count" ) ), Limits( Sigma( "Weibull" ) ) )
);

```

#### メディアン移動範囲管理図

```jsl

// Create a Median Moving Range chart by adding a Y variable and changing the Sigma to Median Moving Range on both the location and dispersion charts.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Y( :Weight ) ),
	Chart( Position( 1 ), Limits( Sigma( "Median Moving Range" ) ) ),
	Chart( Position( 2 ), Limits( Sigma( "Median Moving Range" ) ) )
);

```

#### ランチャート

```jsl

// Create a Run chart by adding a Y variable, turning off the limits, and removing the dispersion chart.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Show Two Shewhart Charts( 0 ),
	Show Limit Summaries( 0 ),
	Variables( Y( :Weight ) ),
	Chart( Limits( Show Lower Limit( 0 ), Show Upper Limit( 0 ) ) ),
	Show Control Panel( 0 )
);

```

#### 三元管理図(サブグループサイズを指定)

```jsl

// Create a Three Way chart by adding a dispersion chart after adding a Y variable and setting a subgroup size.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Y( :Weight ) ),
	Set Subgroup Size( 4 ),
	Chart(
		Position( 1 ),
		Points( Statistic( "Average" ) ),
		Limits( Sigma( "Moving Range" ) )
	),
	Chart(
		Position( 2 ),
		Points( Statistic( "Moving Range on Means" ) ),
		Limits( Sigma( "Moving Range" ) )
	),
	Chart(
		Position( 3 ),
		Points( Statistic( "Standard Deviation" ) ),
		Limits( Sigma( "Standard Deviation" ) )
	)
);

```

#### 三元管理図(サブグループ変数)

```jsl

// Create a Three Way chart by adding a dispersion chart after adding a Y variable and adding a subgroup variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Subgroup( :Sample ), Y( :Weight ) ),
	Chart(
		Position( 1 ),
		Points( Statistic( "Average" ) ),
		Limits( Sigma( "Moving Range" ) )
	),
	Chart(
		Position( 2 ),
		Points( Statistic( "Moving Range on Means" ) ),
		Limits( Sigma( "Moving Range" ) )
	),
	Chart( Position( 3 ), Points( Statistic( "Range" ) ), Limits( Sigma( "Range" ) ) )
);

```

#### 偏差短期操業XBar管理図

```jsl

// Create a Short Run Difference chart for summarized data by changing the class to Short Run and adding a Product or Part variable,  Short Run Standardized charts are sometimes referred to as Z-MR charts. Centered Short Run control charts are sometimes referred to as Deviation from Nominal (DNOM) charts.
dt = Open( "$SAMPLE_DATA/Quality Control/Fancy Chocolate Factory.jmp" );
obj = dt << Control Chart Builder(
	Show Product Separators( 0 ),
	Class( "Short Run" ),
	Variables( Subgroup( :Box ), Y( :"%Cocoa"n ), Part( :Product ) )
);

```

#### 偏差短期操業管理図

```jsl

// Create a Short Run Difference chart by changing the class to Short Run and adding a Product or Part variable. Make sure that the Statistic values for the location chart and dispersion chart are set to Centered and Moving Range Centered, respectively. Centered Short Run control charts are sometimes referred to as Deviation from Nominal (DNOM) charts.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Class( "Short Run" ),
	Variables( Y( :Weight ), Part( :Product ) )
);

```

#### 平均のIMR管理図(サブグループサイズを指定)

```jsl

// Create an IMR on Means chart by adding a Y variable and defining a subgroup size, and changing the Statistic on the dispersion chart to Moving Range on Means and the Sigma on both charts to Moving Range.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Y( :Weight ) ),
	Set Subgroup Size( 4 ),
	Chart( Position( 1 ), Limits( Sigma( "Moving Range" ) ) ),
	Chart(
		Position( 2 ),
		Points( Statistic( "Moving Range on Means" ) ),
		Limits( Sigma( "Moving Range" ) )
	)
);

```

#### 平均のIMR管理図(サブグループ変数)

```jsl

// Create an IMR on Means chart by adding a Y variable and a subgroup variable, and changing the Statistic on the dispersion chart to Moving Range on Means and the Sigma on both charts to Moving Range.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Subgroup( :Sample ), Y( :Weight ) ),
	Chart( Position( 1 ), Limits( Sigma( "Moving Range" ) ) ),
	Chart(
		Position( 2 ),
		Points( Statistic( "Moving Range on Means" ) ),
		Limits( Sigma( "Moving Range" ) )
	)
);

```

#### 標準化短期操業XBar管理図

```jsl

// Create a Short Run Standardized chart for summarized data by changing the class to Short Run and adding a Subgroup and a Product or Part variable,  Short Run Standardized charts are sometimes referred to as Z-MR charts. Centered Short Run control charts are sometimes referred to as Deviation from Nominal (DNOM) charts.
dt = Open( "$SAMPLE_DATA/Quality Control/Fancy Chocolate Factory.jmp" );
obj = dt << Control Chart Builder(
	Show Product Separators( 0 ),
	Class( "Short Run" ),
	Variables( Subgroup( :Box ), Y( :"%Cocoa"n ), Part( :Product ) ),
	Chart( Position( 1 ), Points( Statistic( "Standardized" ) ) ),
	Chart( Position( 2 ), Points( Statistic( "Range Standardized" ) ) )
);

```

#### 標準化短期操業管理図

```jsl

// Create a Short Run Standardized chart by changing the class to Short Run and adding a Subgroup and a Product or Part variable, changing the Statistic for the location chart type to Standardized, and changing the Statistic for the dispersion chart to Moving Range Standardized. Short Run Standardized charts are sometimes referred to as Z-MR charts.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Class( "Short Run" ),
	Variables( Y( :Weight ), Part( :Product ) ),
	Chart( Position( 1 ), Points( Statistic( "Standardized" ) ) ),
	Chart( Position( 2 ), Points( Statistic( "Moving Range Standardized" ) ) )
);

```

### Cumulative Damage

**構文:** Cumulative Damage

**説明:** 変動ストレス試験やステップストレス試験のデータを分析する。

```jsl

Open( "$SAMPLE_DATA/Reliability/CD Step Stress.jmp" );
Open( "$SAMPLE_DATA/Reliability/CD Step Stress Pattern.jmp" );
obj = Cumulative Damage(
	Model Type( "Step Stress" ),
	Time to Event Data Table(
		Data Table( "CD Step Stress" ),
		Time to Event( :Time ),
		Censor( :Censor ),
		Pattern ID( :Pattern ID ),
		Censor Code( 1 )
	),
	Step Stress Pattern Data Table(
		Data Table( "CD Step Stress Pattern" ),
		Stress Duration( :Duration ),
		Stress( :Stress ),
		Pattern ID( :Pattern ID )
	),
	Relationship( "Inverse Power" ),
	Distribution( "Lognormal" ),
	Pattern Continuation( "Terminate" )
);

```

### Custom Profiler

**構文:** Custom Profiler( Y( column1, column2, ... ) )

**説明:** グラフを使わずに応答を最適化するためのインターフェース。このプロファイルは、規模の大きな問題に役立つ。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Custom Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);

```

### Degradation

**構文:** Degradation( Y( column ), Time( column ), Application( "Repeated Measures Degradation"|"Destructive Degradation"|"Stability Test" ), &lt;X( column )&gt;, &lt;Label( column )&gt;, &lt;Freq( column )&gt;, &lt;Censor( column )&gt;, &lt;Censor Code( value )&gt;, &lt;Upper Spec Limit( value )&gt;, &lt;Lower Spec Limit( value )&gt;, &lt;Censoring Time( value )&gt; )

**説明:** 線形や非線形の曲線を使って劣化をモデル化する。分析オプションには、安定性分析、疑似故障データの生成などがある。

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Upper Spec Limit( 10 ),
	Model Report(
		Simple Linear Path(
			X Scale( Linear ),
			Y Scale( Linear ),
			Intercept( Common ),
			Slope( Different )
		)
	)
);

```

### Destructive Degradation

**構文:** Destructive Degradation( Y( column ), Time( column ), &lt;X( column )&gt;, &lt;Freq( column )&gt;, &lt;Censor( column ), Censor Code( value )&gt; )

**説明:** 破壊劣化データをモデル化する。

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Adhesive Bond.jmp" );
obj = dt << Destructive Degradation(
	Y( :Strength ),
	Time( :Weeks ),
	X( :Degrees ),
	Censor( :Censor ),
	Censor Code( "Right" ),
	Model( "Log10", "Sqrt", "Normal", "Individual Path with Intercept" ),
	Control( "Log10", "Sqrt", "Normal", "Individual Path with Intercept" )
);

```

### Diagram

**構文:** Diagram( Y( column ), X( column ) )

**説明:** 特性要因図を作成する。石川ダイヤグラムまたはフィッシュボーンチャートとも呼ばれる。根本的原因を調べるための階層的ダイヤグラム。

```jsl

dt = Open( "$SAMPLE_DATA/Ishikawa.jmp" );
obj = dt << Diagram( Y( :Child ), X( :Parent ) );

```

### Discriminant

**構文:** Discriminant( Y( columns ), X( columns ) )

**説明:** Mahalanobisの距離を使って、各オブザベーションから各グループの多変量平均(重心)までの距離を求める。その後、各オブザベーションを最も近いグループに分類する。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);

```

### Distance Matrix

**構文:** Distance Matrix( Y( columns ) )

**説明:** 行間の距離をさまざまな計算方法で計算する。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Distance Matrix( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );

```

### Distribution

**構文:** Distribution( Column() )

**説明:** 一変量の分布に関する分析を行う。計算される結果と利用できるオプションは、列の尺度によって異なる。利用できるオプションには、ヒストグラム、箱ひげ図、分位点プロット、分布のあてはめ、工程能力分析などがある。

#### 例 1

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );

```

#### 例 2

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
colref = Column( "age" );
// Correct way to use the colref
Distribution( Column( colref ) );
// This will not work
Distribution( colref );

```

### EMP Measurement Systems Analysis

**構文:** EMP Measurement Systems Analysis( Y( column ), X( columns ), Part(column), Model(Main|Crossed|Crossed with Two Factor Interactions|Nested|Crossed then Nested|Nested then Crossed), Dispersion Chart Type(Range|Standard Deviation) )

**説明:** EMP(Evaruating the Measurement Process)法による測定システム分析を起動する。デフォルトで平均図とばらつき図(範囲または標準偏差)が表示される。

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);

```

### EWMA Control Chart

**構文:** EWMA Control Chart( Y( column ), &lt;Subgroup( column )&gt;, &lt;By( column )&gt;, &lt;Center Data( 1 )&gt; )

**説明:** 指数加重移動平均の管理図と、個々の測定値またはサブグループ平均の管理図を作成する。EWMA管理図は、フィードバック制御管理図とも呼ばれている。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );

```

### Explore Missing Values

**構文:** Explore Missing Values( Y( columns ) )

**説明:** 欠測値のパターンを割り出し、補完を実行する。

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );

```

### Explore Outliers

**構文:** Explore Outliers( Y( columns ) )

**説明:** 単変量または多変量データにおける外れ値を見つけ、調べ、管理する。

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );

```

### Explore Patterns

**構文:** Explore Patterns( Y( columns ) )

**説明:** データにおける、長い連、長いシーケンスの繰り返し、特殊な形式、線形関係など、目立った特徴を検出する。

```jsl

dt = Open( "$SAMPLE_DATA/Nicardipine Lab Patterns.jmp" );
obj = dt << Explore Patterns( Y( Column Group( "Laboratory Results" ) ) );

```

### Factor Analysis

**構文:** Factor Analysis( Y( columns ) )

**説明:** 観測変数に共通するばらつきを説明する潜在変数(因子)を抽出する。因子の回転を行ってその解釈をしやすくする。

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment, :Professional Services,
		:Median House Value
	),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" )
);

```

### Fatigue Model

**構文:** Fatigue Model( N( column ), X( column ), &lt;Freq( column )&gt;, &lt;Censor( column ), Censor Code( value )&gt; )

**説明:** 疲労データを分析する。ここで使われる疲労モデルは、S-N曲線モデルともいう。

```jsl


dt = Open( "$SAMPLE_DATA/Reliability/Metal Wire Z.jmp" );
obj = dt << Fatigue Model(
	N( :Cycles ),
	S( :Stress ),
	Censor( :Censoring Indicator ),
	Censor Code( "Runout" )
);

```

### Fit Curve

**構文:** Fit Curve( Y( column ), X( column ) )

**説明:** JMPが提供する非線形の各種モデルをあてはめる。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;

```

### Fit Life by X

**構文:** Fit Life by X( Y( column ), X( column ), Relationship( string ), Distribution( string ), &lt;Censor( column )&gt; )

**説明:** 単一の説明変数に基づいて、イベントまでの時間の分布を分析する。分析オプションには、加速寿命モデル、グループ全体の寿命分布、説明変数の変換などがある。

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Freq( :Weight ),
	Relationship( Arrhenius Celsius )
);

```

### Fit Parametric Survival

**構文:** Fit Model( Y( columns ), Effects( columns ), Personality( "Parametric Survival" ), Censor( columns ) )

**説明:** 生存時間にパラメトリックな回帰モデルをあてはめる。これらのモデルは、生存時間の確率分布が説明変数の関数として表せる場合に使える。生存時間分布として、いくつかの確率分布を仮定できる。また、打ち切りを考慮することもできる。

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);

```

### Fit Proportional Hazards

**構文:** Fit Model( Y( columns ), Effects( columns ), Personality( "Proportional Hazard" ), Censor( columns ) )

**説明:** セミパラメトリックな回帰モデルであるCoxの比例ハザードモデルをあてはめる。このモデルは説明変数が生存時間に及ぼす影響を、打ち切りを考慮しながら評価する。

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);

```

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

### Functional Data Explorer

**構文:** Functional Data Explorer( Y(column), X(column), ID(column) )

**説明:** B-スプライン・P-スプライン・Fourier・ウェーブレットの基底に基づくモデルをあてはめる。また、関数モデルに対して関数主成分分析を実行し、データから重要な特徴を抽出する。これらの基底モデルをあてはめずに、データに対して直接的に関数主成分分析を実行するオプションもある。

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );

```

### Gaussian Process

**構文:** Gaussian Process( Y( column ), X( columns ) )

**説明:** 連続尺度の応答変数と、1つ以上の連続尺度の予測変数との間の関係を、滑らかな補間式でモデル化する。

```jsl

dt = Open( "$SAMPLE_DATA/2D Gaussian Process Example.jmp" );
obj = dt << Gaussian Process( Y( :Y ), X( :X1, :X2 ) );

```

### Graph Builder

**構文:** Graph Builder( Variables( X(column ), Y( column ), &lt;Group X( column )&gt;, &lt;Group Y( column )&gt;, &lt;Shape( column )&gt;, &lt;Color( column )&gt;, &lt;Overlay( column )&gt;, &lt;Freq( column )&gt; ), &lt;Elements(...)&gt; ) )

**説明:** データをインタラクティブに探索するためのグラフィカルインターフェースを提供する。グラフのゾーンに列をドラッグしてさまざまなグラフを作成できる。グラフの種類には、散布図、等高線図、棒グラフ、面グラフ、箱ひげ図、ヒストグラム、ヒートマップ、円グラフ、ツリーマップ、モザイク図、地図などがある。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);

```

### Hierarchical Cluster

**構文:** Hierarchical Cluster( Y( columns ) )

**説明:** 連続量またはカテゴリカルな変数に基づいて行をクラスタリングする。階層クラスタリングは、まず各行を独自のクラスターとして扱い、一度に2つずつクラスターを組み合わせていく。

```jsl

dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster( Y( :birth, :death ), Label( :country ) );

```

### Item Analysis

**構文:** Item Analysis( Y( columns ) )

**説明:** 特性または能力を、個人がある項目を支持したり、その項目に正しく回答する確率に関連付ける。

```jsl

dt = Open( "$SAMPLE_DATA/MathScienceTest.jmp" );
obj = Item Analysis( Y( :Q1, :Q2, :Q3, :Q4, :Q5, :Q6, :Q7, :Q8, :Q9 ) );

```

### K Means Cluster

**構文:** K Means Cluster( Y( column(s) ), Number of Clusters( number ) )

**説明:** 大規模なデータテーブルの数値変数をクラスタリング。事前にクラスター数を指定しておく必要がある。

**JMP追加されたバージョン:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 )
);
obj << Go;

```

### K Nearest Neighbors

**構文:** K Nearest Neighbors(Y( column ), X( columns ))

**説明:** 説明変数の空間においてk個の近傍点の応答から連続量またはカテゴリカルの応答変数の予測値を求める。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = K Nearest Neighbors(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	K( 10 )
);

```

### Latent Class Analysis

**構文:** Latent Class Analysis( Y( column(s) ), Number of Clusters( number ) )

**説明:** 混合多項分布によってカテゴリカルデータをクラスタリングする。潜在クラスの個数(クラスターの個数)を事前に指定しておく必要がある。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Latent Class Analysis(
	Y( :sex, :marital status, :country, :size, :type ),
	Number of Clusters( 3 )
);

```

### Life Distribution

**構文:** Life Distribution( Y( column(s) ) )

**説明:** 「イベントまでの時間」データの分布を分析する。打ち切りのあるデータや製品寿命、信頼性、競合する原因などをモデル化できる。

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );

```

### Logistic

**構文:** Logistic( Y( columns ), X( columns ) )

**説明:** 連続量の変数に対してカテゴリカルな応答変数をモデル化する。ロジスティック回帰をあてはめたり、ROC曲線を描いたりする。

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );

```

### Make Validation Column

**構文:** Make Validation Column( &lt;層別の列(columns)&gt;, &lt;グループの列(columns)&gt;, &lt;カットポイントの列(column)&gt;, &lt;カットポイント バッチID(column)&gt; )

**説明:** データを学習用、検証用、テスト用に分割するための列を作成する。

#### カットポイントの例

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
dt << Make Validation Column(
	Cutpoint Column( :Week of Year ),
	Cutpoint Batch ID( :ID ),
	Training Set( 0.60 ),
	Validation Set( 0.25 ),
	Test Set( 0.15 ),
	New Column Name( "Cutpoint Batch Validation" ),
	Go
);

```

#### 層別の例

```jsl

dt = Open( "$SAMPLE_DATA/Lipid Data.jmp" );
dt << Make Validation Column(
	Stratification Columns( :Gender ),
	Training Set( 0.50 ),
	Validation Set( 0.25 ),
	Test Set( 0.25 ),
	New Column Name( "Valid1" ),
	Random Seed( 1234 ),
	Go
);

```

### Manage Limits

**構文:** Manage Limits( Process Variables( columns ) )

**説明:** 複数列に対する品質に関する限界を管理するためのユーティリティを起動する。データテーブル列の限界プロパティを追加、編集、保存できる。

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Manage Limits( Process Variables( dt << Get Column Group( "Processes" ) ) );

```

### Marker Admixture

**構文:** Marker Admixture( Marker( columns ) )

**説明:** 個体に対し、マーカーの遺伝子型に基づいて集団の遺伝的混合確率を推定する。

**JMP追加されたバージョン:** 19

#### 例 1

```jsl


dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Set(), Fit() );

```

#### 例 2

```jsl


dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt << Marker Admixture(
	Marker( Column Group( "Markers" ) ),
	Set(
		Missing Marker Imputation Method( "Specified" ),
		Estimation Method( "Fixed Parameter" ),
		Unthreaded( 1 ),
		Imputation Value( 1 ),
		Number of Ancestral Populations( 3 )
	),
	Fit(
		Missing Marker Imputation Method( "Specified" ),
		Estimation Method( "Fixed Parameter" ),
		Unthreaded( 1 ),
		Imputation Value( 1 ),
		Number of Ancestral Populations( 3 )
	)
);

```

### Marker Imputation

**構文:** Marker Imputation( Marker( columns ) )

**説明:** Imputes numeric missing marker genotypes.

**JMP追加されたバージョン:** 19

#### 例 1

```jsl


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

#### 例 2

```jsl


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

### Marker Relatedness

**構文:** Marker Relatedness( Marker( columns ) )

**説明:** 二倍体や多倍体のゲノムマーカーのデータから、ゲノム関係行列を計算する。ゲノム関係行列は、各個体間のゲノムの類似度を表す。

**JMP追加されたバージョン:** 18

#### 例 1

```jsl


dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );

//Run platform
dt << Marker Relatedness(
	Marker( Column Group( "Markers" ) ),
	Ploidy( 2 ),
	Set Random Seed( 12345 ),
	Missing Marker Imputation Method( "HWE Off" ),
	Kinship Type( "Identical by State" )
);

```

#### 例 2

```jsl


dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );

//Run platform
obj = dt << Marker Relatedness(
	Marker( Column Group( "Markers" ) ),
	Ploidy( 2 ),
	Set Random Seed( 12345 ),
	Missing Marker Imputation Method( "HWE On" ),
	Kinship Type( "Identical by State" )
);

```

### Marker Simulation

**構文:** Marker Simulation( Marker( columns ), Predictor Formula( columns ) )

**説明:** 親の交配から得られるマーカー遺伝子型をシミュレーションし、交配に関する指標を計算する。

**JMP追加されたバージョン:** 17

#### 例 1

```jsl


dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );

//Hide and Exclude Rows
dt << Clear Select << Clear Row States;
dt << Select Where( :Father == 0 & :Mother == 0 & Row() <= 100 );
dt << Invert Row Selection << Exclude;
dt << Clear Select;

//Run platform
dt << Marker Simulation(
	Marker( Column Group( "Markers" ) ),
	Predictor Formula(
		:Pred Formula Trait1, :Pred Formula Trait2, :Pred Formula Trait3,
		:Pred Formula Trait4, :"Probability( Disease Status=1 )"n
	),
	Cross( :Sex ),
	Ploidy( 2 ),
	Number of Generations( 2 ),
	Number of Individuals per Cross( 10 ),
	Set Random Seed( 12345 ),
	Threshold to Make Line Plots( 1000 )
);

```

#### 例 2

```jsl


dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );

//Hide and Exclude Rows
dt << Clear Select << Clear Row States;
dt << Select Where( :Father == 0 & :Mother == 0 & Row() <= 100 );
dt << Invert Row Selection << Exclude;
dt << Clear Select;

//Run platform
obj = dt << Marker Simulation(
	Marker( Column Group( "Markers" ) ),
	Predictor Formula(
		:Pred Formula Trait1, :Pred Formula Trait2, :Pred Formula Trait3,
		:Pred Formula Trait4, :"Probability( Disease Status=1 )"n
	),
	Cross( :Sex ),
	Unthreaded( 1 ),
	Ploidy( 2 ),
	Number of Generations( 2 ),
	Number of Individuals per Cross( 10 ),
	Set Random Seed( 12345 ),
	Threshold to Make Line Plots( 1000 )
);

```

### Marker Statistics

**構文:** Marker Statistics( Marker( columns ), With Marker( columns ) )

**説明:** 遺伝子マーカーデータを分析して、マイナーアレル頻度、Hardy-Weinberg平衡(HW平衡)、連鎖不平衡(LD)などの指標を計算する。

**JMP追加されたバージョン:** 17

#### 例 1

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt << Marker Statistics( Marker( Column Group( "Markers" ) ), Ploidy( 2 ) );

```

#### 例 2

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
obj = dt << Marker Statistics(
	Marker( Column Group( "Markers" ) ),
	With Marker( Column Group( "Markers" ) ),
	Ploidy( 2 )
);

```

### Matched Pairs

**構文:** Matched Pairs( Y( columns ), X( column ) )

**説明:** 対応のある変数の平均を、応答間の相関を考慮して、対応のあるt検定または単純な反復測定分析を使って比較する。

```jsl

dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
obj = dt << Matched Pairs( X( :Dose ), Y( :BP 8M, :BP 8W ) );

```

### MaxDiff

**構文:** MaxDiff( Profile DataTable( data table ), Profile ID( column ), Profile Effects( column(s) ), &lt;Response Data Table( data table )&gt;, &lt;Subject Data Table( data table )&gt;, &lt;Response Profile ID Chosen( column )&gt;, &lt;Response Subject ID( column)&gt;, &lt;Response Grouping( column(s) )&gt;, &lt;Response Profile ID Choices( column(s) )&gt;, &lt;Profile Grouping( column(s) )&gt;, &lt;Subject Subject ID( column )&gt;, &lt;Subject Effects( column(s) )&gt; )

**説明:** 最も好まれる属性をもつ製品や、最も好まれない属性をもつ製品を探すための調査計画を作成する。

```jsl

dt = Open( "$SAMPLE_DATA/Potato Chip Combined.jmp" );
obj = dt << MaxDiff(
	One Table( 1 ),
	Subject ID( :Respondent ),
	Choice Set ID( :Choice Set ID ),
	Profile ID( :Response ),
	Profile Grouping( :Survey ID ),
	Profile Effects( :Profile ID ),
	Response Value Indicates Best( 1 ),
	Response Value Indicates Worst( -1 )
);

```

### Mixture Profiler

**構文:** Mixture Profiler( Y( column1, column2, ... ) )

**説明:** 3つ以上の因子を持つ配合モデルに対し、保存された予測式の等高線を調べられる対話的な三角図。

```jsl

dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );
obj = dt << Mixture Profiler( Y( :Pred Formula Y ) );

```

### Model Comparison

**構文:** Model Comparison( Predictors( columns ), Group( column ) )

**説明:** 予測式の列を使用して、モデルの適合度を比較する。

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );
dt << Fit Model(
	Y( :weight ),
	Effects( :height ),
	Personality( "Standard Least Squares" ),
	Run( Prediction Formula, Close Window )
);
dt << Fit Model(
	Y( :weight ),
	Effects( :age ),
	Personality( "Standard Least Squares" ),
	Run( Prediction Formula, Close Window )
);
obj = Model Comparison();

```

### Model Driven Multivariate Control Chart

**構文:** Model Driven Multivariate Control Chart( Process( columns ) )

**説明:** 主成分分析やPLS回帰のスコアから、多変量管理図を作成する。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Flight Delays.jmp" );
obj = dt << Model Driven Multivariate Control Chart(
	Process( :AA, :CO, :DL, :F9, :FL, :NW, :UA, :US, :WN )
);

```

### Model Screening

**構文:** Model Screening( Y( column ), X( columns ) )

**説明:** 多数の異なる予測モデルをあてはめる。それらのモデルから最良のモデルを選択できる。

```jsl

dt = Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose )
);

```

### Multidimensional Scaling

**構文:** Multidimensional Scaling( Y( columns ) )

**説明:** 対象間の類似度のパターンを視覚的に表す。

```jsl

dt = Open( "$SAMPLE_DATA/Flight Distances.jmp" );
obj = dt << Multidimensional Scaling(
	Y(
		:Birmingham, :Boston, :Buffalo, :Chicago, :Cleveland, :Dallas, :Denver, :Detroit,
		:El Paso, :Houston, :Indianapolis, :Kansas City, :Los Angeles, :Louisville, :Memphis,
		:Miami, :Minneapolis, :New Orleans, :New York, :Omaha, :Philadelphia, :Phoenix,
		:Pittsburgh, :St. Louis, :Salt Lake City, :San Francisco, :Seattle, :Washington DC
	)
);

```

### Multiple Correspondence Analysis

**構文:** Multiple Correspondence Analysis( Y( columns ), X( columns ) )

**説明:** カテゴリカル変数の水準間にある関係を視覚化する。多重対応分析は、カテゴリカルデータに対する主成分分析と喩えられる。

#### 例 1

```jsl

dt = Open( "$SAMPLE_DATA/Cereal.jmp" );
dt << Multiple Correspondence Analysis(
	Y( :Mfr, :"Hot/Cold"n, :Fiber Gr ),
	X( :Manufacturer )
);

```

#### 例 2

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Multiple Correspondence Analysis( Y( :country, :size, :type ) );

```

### Multiple Factor Analysis

**構文:** Multiple Factor Analysis( MFABLocks({"Block 1", columns},{"Block 2", columns}) )

**説明:** 官能データの分析においてパネリスト間の一致性を分析する。

**JMP追加されたバージョン:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
dt << Multiple Factor Analysis(
	Product ID( :Vineyard ),
	Z( :Region ),
	MFA Blocks(
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness},
		{"Florence Flowery etc.", :Florence Flowery, :Florence Crispness, :Florence Tannin,
		:Florence Savory, :Florence Lightness},
		{"Xavier Fruity etc.", :Xavier Fruity, :Xavier Spicy, :Xavier Crispness,
		:Xavier Alcohol, :Xavier Savory, :Xavier Lightness},
		{"Robert Fruity etc.", :Robert Fruity, :Robert Flowery, :Robert Spicy,
		:Robert Crispness, :Robert Tannin, :Robert Alcohol, :Robert Savory, :Robert Lightness
		},
		{"Paula Fruity etc.", :Paula Fruity, :Paula Flowery, :Paula Spicy, :Paula Crispness,
		:Paula Tannin, :Paula Savory},
		{"Monica Fruity etc.", :Monica Fruity, :Monica Flowery, :Monica Spicy, :Monica Tannin,
		:Monica Alcohol, :Monica Savory, :Monica Lightness},
		{"Frank Fruity etc.", :Frank Fruity, :Frank Flowery, :Frank Spicy, :Frank Crispness,
		:Frank Tannin, :Frank Alcohol, :Frank Savory, :Frank Lightness}
	)
);

```

### Multivariate

**構文:** Multivariate( Y( columns ) )

**説明:** さまざまな方法で数値変数間の相関や関連を調べる。手法には、パラメトリックおよびノンパラメトリックな関連の指標、散布図行列、主成分分析、外れ値分析、項目の信頼性などがある。

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );

```

### Multivariate Embedding

**構文:** Multivariate Embedding( Y( columns ) )

**説明:** UMAP(Uniform Manifold Approximation and Projection; 一様多様体の近似と射影)またはt-SNE(t-Distributed Stochastic Neighbor Embedding; t分布型確率近傍埋め込み)を使用して、高次元空間のデータを低次元空間にマッピングする。低次元空間で視覚化するために、データを2次元または3次元にマッピングすることが多い。どちらの手法もデータの局所的な構造を維持しようとするが、大規模なデータセットでは一般にUMAPの方がt-SNEよりも高速。

**JMP追加されたバージョン:** 17

#### 例 1

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Multivariate Embedding(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);

```

#### 例 2

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
/* Parameters can be changed according to data features */
obj = dt << Multivariate Embedding(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Method( "t-SNE" ),
	Maximum Iterations( 1500 ),
	Perplexity( 15 ),
	Initial Principal Component Dimensions( 55 ),
	Random Seed( 2022 ),
	Output Dimensions( 3 )
);

```

#### 例 3

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
/* by group example */
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Multivariate Embedding(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	By( _bycol )
);

```

### Naive Bayes

**構文:** Naive Bayes( Y( column ), X( columns ), Method( "Naive Bayes" ) )

**説明:** カテゴリカルな説明変数にもとづいて、カテゴリカルな応答変数の各水準に属する確率を求める。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Naive Bayes(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width )
);

```

### Neural

**構文:** Neural( Y( column ), X( columns ), &lt;Validation( column )&gt; )

**説明:** 入力変数の関数を使用して柔軟なモデルをあてはめ、1つまたは複数の応答変数を予測する。柔軟なフレームワークには、隠れ層や、複数のS字型関数の組み合わせが含まれる。

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);

```

### New Table

**構文:** New Table( name, &lt;invisible&gt;, &lt;private&gt;, &lt;actions&gt; )

**説明:** 新しいデータテーブルを作成する。"Invisible"を指定すると、データテーブルは非表示になるが、JMPホームウィンドウにはリストされる。"Private"を指定すると、テーブルが完全に非表示になる。デフォルトの"Visible"を使用すると、通常のテーブルが作成され、表示され、JMPホームウィンドウにもリストされる。オプションのactions引数には、データテーブルがサポートするメッセージならどれでも使用できる。

```jsl

dt = New Table( "Little Class",
	Add Rows( 3 ),
	New Column( "name", Character, Nominal, Set Values( {"KATIE", "LOUISE", "JANE"} ) ),
	New Column( "height", Continuous, Set Values( [59, 61, 55] ) )
);

```

### Nonlinear

**構文:** Nonlinear( Y( column ), X( column with predictor formula ) )

**説明:** 最小2乗法またはカスタム損失関数を使って非線形モデルをあてはめる。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );

```

### Normal Mixtures

**構文:** Normal Mixtures( Y( column(s) ), Number of Clusters( number ) )

**説明:** 多変量の混合正規分布にデータが従うと仮定して、数値データをクラスタリングする。クラスターの個数を事前に指定しておく必要がある。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Normal Mixtures(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 )
);
obj << Go;

```

### Normalization

**構文:** Normalization( Y( columns ) )

**説明:** Adjusts for technical biases and improves suitability for subsequent analysis

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Normalization( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );

```

### Notebook

**構文:** Notebook

**説明:** 新しいノートブックを作成するか、指定した名前またはインデックスを持つノートブックを戻す。

```jsl


nb = Notebook();

```

### Oneway

**構文:** Oneway( Y( columns ), X( columns ) )

**説明:** カテゴリカルなグループ変数により、連続量の応答変数をモデル化する。分析手法には、ANOVA、平均の比較、平均分析、分位点プロットなどがある。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );

```

### Open

**構文:** Open( file path, &lt;invisible&gt;, &lt;private&gt;, &lt;select columns(list)&gt; | &lt;ignore columns(list)&gt;, &lt;column names only&gt;, &lt;Table Info&gt; )

**説明:** JMPファイルを開くか、またはサポートされている別のタイプのファイルを読み込む。「Invisible」を指定すると、ファイルはJMPホームウィンドウにはリストされるが非表示のままとなり、「Private」を指定すると、ファイルが完全に非表示になる。「Select Columns」オプションは、指定した列のみを読み込む。「Ignore Columns」で指定した列は読み込まない。JMPファイルオプションの「Column Names Only」と「Table Info」では、データの読み込みもデータテーブルの作成も行われない。「Column Names Only」はデータテーブルの列名のリストを、「Table Info」はデータテーブルの列と行の数を戻す。「FIRST(n)&apos;/&apos;LAST(n)&apos;/&apos;RANDOM(n) 」オプションは、データテーブルのn行のみを読み込む。nが0～1の間の数である場合、nはデータテーブルの行の総数に占める割合として扱われる。

#### 例 1

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );

```

#### 例 2

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp", ignore columns( "age" ) );

```

#### 例 3

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp", "Column Names Only" );

```

#### 例 4

```jsl

info = Open( "$SAMPLE_DATA/probe.jmp", "Table Info" );
Print( info );

```

#### 例 5

```jsl

info = Open( "$SAMPLE_DATA/SATByYear.jmp", random( 10 ) );
Print( info );

```

#### 例 6

```jsl

info = Open( "$SAMPLE_DATA/SATByYear.jmp", First( 10 ) );
Print( info );

```

### Parallel Plot

**構文:** Parallel Plot( Y( columns ), &lt;X( column )&gt; )

**説明:** 複数の変数にわたる各行の値を線でつないだプロットを作成する。

#### 例 1

```jsl

dt = Open( "$SAMPLE_DATA/SAT.jmp" );
dt << Parallel Plot(
	Y(
		:"2004 Verbal"n, :"2004 Math"n, :"2003 Verbal"n, :"2003 Math"n, :"2002 Verbal"n,
		:"2002 Math"n, :"2001 Verbal"n, :"2001 Math"n, :"1999 Verbal"n, :"1999 Math"n,
		:"1994 Verbal"n, :"1994 Math"n, :"1997 Verbal"n, :"1997 Math"n, :"1992 Verbal"n,
		:"1992 Math"n
	)
);

```

#### 例 2

```jsl

dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Parallel Plot( Y( :hist0, :hist1, :hist3, :hist5 ) );

```

### Pareto Plot

**構文:** Pareto Plot( Cause( column ), &lt;X( column )&gt;, &lt;Subcategory( column )&gt;, &lt;Freq( column )&gt;, &lt;Weight( column )&gt; )

**説明:** 品質に関連する工程における項目の相対頻度を降順で表示する。分類変数を定義して層別パレート図を作成することもできる。

#### グループ

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ) );

```

#### サブカテゴリ

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot(
	Cause( :failure ),
	Subcategory( :clean ),
	Freq( :N ),
	Subcategory Bar Style( Stacked )
);

```

#### シンプル

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure Raw Data.jmp" );
obj = dt << Pareto Plot( Cause( :failure ) );

```

### Partial Least Squares

**構文:** Partial Least Squares( Y( columns ), X( columns ) )

**説明:** 潜在因子を使って1つまたは複数の応答変数にモデルをあてはめる。この手法では、説明変数の間に高い相関がある場合や、説明変数の個数が標本サイズより多い場合でもモデルがあてはめられる。

#### 例 1

```jsl

dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );
obj = dt << Partial Least Squares(
	Y( :Hedonic, :Goes with meat, :Goes with dessert ),
	X( :Price, :Sugar, :Alcohol, :Acidity ),
	Go
);

```

#### 例 2

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,
		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Go
);

```

### Predictor Screening

**構文:** Predictor Screening( Y( columns ), X( columns ) )

**説明:** ブートストラップ森を使って応答変数に対する説明変数の寄与度を評価し、強い予測能力を持つ説明変数を見つける。

```jsl

dt = Open( "$SAMPLE_DATA/Bands Data.jmp" );
obj = dt << Predictor Screening( Y( :Banding? ), X( Column Group( "Predictors" ) ) );

```

### Principal Components

**構文:** Principal Components( Y( columns ) )

**説明:** 複数の変数の変動をできるだけ説明する、少数の線形結合(主成分)を求める。

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane )
);

```

### Process Capability

**構文:** Process Capability( Process Variables (columns), &lt; Spec Limits() &gt; )

**説明:** 各変数の工程能力分析を行い、複数の工程変数における工程能力を一度に分析するのに役立つグラフを作成する。仕様限界も定義できる。

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);

```

### Process History Explorer

**構文:** Process History Explorer( Y( columns ),ID( columns), X( columns ), Step( columns ), Timestamp( columns ) )

**説明:** 低い歩留まりに関連している工程のステップを見つける。

```jsl

dt = Open( "$sample_data\Quality Control\Lot Wafer History.jmp" );
dt2 = Open( "$sample_data\Quality Control\Lot Wafer Yield.jmp" );
obj = dt << Process History Explorer(
	ID( :Lot, :Wafer ),
	X( :Tool, :Route ),
	Step( :Layer, :Operation ),
	Timestamp( :TimeIn, :TimeOut ),
	Yield Table( "Lot Wafer Yield" ),
	Yield Columns( "Yield" )
);

```

### Process Screening

**構文:** Process Screening( Process Variables( columns ) )

**説明:** 安定性、工程能力、管理図のテスト、シフト（ドリフト）など、さまざまな観点から多数の工程を一度に探索する。注意が必要そうな工程を見つけ出すことができる。

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Grouping( :Site ), Process Variables( Eval( 5 :: 132 ) ) );

```

### Profiler

**構文:** Profiler( Y( column1, &lt;column2&gt;, ..., &lt;PredSE column1, PredSE column2&gt;, ... ), &lt;Expand&gt; )

**説明:** 因子の設定を変えると応答変数の予測値がどうなるかを調べられる、対話的なグラフ。プロファイルには、予測値のトレースが因子ごとに表示され、因子に対する応答変数の変化が一目でわかる。Expand引数は、起動ウィンドウの［中間計算式の展開］オプションに対応する。

#### 例 1

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);

```

#### 例 2

```jsl

dt = Open( "$Sample_Data/Diabetes.jmp" );
colNum = N Items( dt << Get Column Names );
obj = dt << Fit Model(
	Validation( :Validation ),
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Screening" ),
	Run()
);
obj << Save Columns( Prediction Formula( 1 ), StdErr Pred Formula( 1 ) );
obj << Close Window( 1 );
predCol = Column( dt, colNum + 1 );
stderrCol = Column( dt, colNum + 2 );
dt << Profiler(
	Y( predCol, stderrCol ),
	Profiler( 1, Confidence Intervals( 1 ), ),
	Use SE Formula( 1 )
);

```

#### 例 3

```jsl

dt = Open( "$Sample_Data/Stochastic Optimization.jmp" );
dt << Profiler( Y( :Yield ), Profiler( 1, Desirability Functions( 1 ), ), Expand );

```

### Recurrence Analysis

**構文:** Recurrence Analysis( Y( column ), Cost( column ), Label( column ), &lt;Grouping( column )&gt; )

**説明:** 再生性(再発性)のあるイベントが、どのように分布しているかを調べるための分析。修理ができるシステムの故障を調べるときに使われる。

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Bladder Cancer.jmp" );
obj = dt << Recurrence Analysis(
	Y( :Age ),
	Cost( :Cost ),
	Grouping( :Treatment Group ),
	Label( :Patient Number )
);

```

### Reliability Forecast

**構文:** Reliability Forecast

**説明:** 現在までに観測されたデータと、将来のリスク集合から、将来に生じるであろう故障数を予測する。 このプラットフォームでは複数の入力形式を使用できる。指定の詳細は各形式を参照。

#### イベントまでの時間の形式

```jsl


dt = Open( "$SAMPLE_DATA/Reliability/Small Production Time to Event.jmp" );
obj = dt << Reliability Forecast(
	Input Format( Time to Event ),
	Time to Event( :"Time (Month)"n, :Time Right ),
	Freq( :Freq ),
	Life Time Unit( Month ),
	Forecast Start( Informat( "03/01/2010", "Locale Date" ) ),
	Forecast(
		Group( "" ),
		Future Risk Set( [33, 33, 33], [3352924800, 3355516800, 3358195200] ),
		Forecast To( "09/01/2010" ),
		Distribution( Weibull ),
		Contract( 5, Month ),
		Forecast Type( Incremental ),
		Interval Type( No Interval ),
		Set Interval Level( 0.9 )
	),
	Forecast Options(
		Animation( 1 ),
		Interactive Configuration of Risk Sets( 1 ),
		Spreadsheet Configuration of Risk Sets( 0 ),
		Show Interval( 0 ),
		Forecasting Interval Type( Prediction Interval ),
		Use Contract Length( 1 ),
		Use Failure Cost( 0 ),
		Set Failure Cost( [1] ),
		Monte Carlo Sample Size( 10000 ),
		Random Seed( 0 ),
		Use Approximate Distribution( 1 )
	)
);

```

#### ネバダ形式

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );
collist = Transform Each( {i}, 3 :: 38, Output( "List" ), Column( dt, i ) );
obj = dt << Reliability Forecast(
	Input Format( Nevada ),
	Production Count( :Volume ),
	Timestamp( :Time ),
	Failure Count( Eval List( collist ) ),
	Life Time Unit( Month ),
	Interval Censored Failure( 1 ),
	Show Legend( 0 ),
	Show Graph Filter( 0 ),
	Forecast(
		Group(),
		Risk Set(
			[1991, 2000, 1999, 2024, 1959, 1958, 2000, 2001, 1986, 1966, 1983, 2011, 2026,
			1950, 1989, 1963, 1954, 2030, 1981, 2006, 1991, 1950, 2025, 1996, 1987, 1957,
			1988, 1966, 2038, 2014, 1962, 1965, 1952, 2045, 2018, 2036]
		),
		Forecast To( "01/2004" ),
		Distribution( Weibull ),
		Contract( 5, Month ),
		Forecast Type( Incremental ),
		Interval Type( No Interval ),
		Set Interval Level( 0.9 )
	),
	Forecast Options(
		Animation( 1 ),
		Interactive Configuration of Risk Sets( 1 ),
		Spreadsheet Configuration of Risk Sets( 0 ),
		Show Interval( 0 ),
		Forecasting Interval Type( Prediction Interval ),
		Use Contract Length( 1 ),
		Use Failure Cost( 0 ),
		Set Failure Cost( . ),
		Monte Carlo Sample Size( 10000 ),
		Random Seed( -1 ),
		Use Approximate Distribution( 1 )
	)
);

```

#### 日付形式

```jsl


dt1 = Open( "$SAMPLE_DATA/Reliability/Small Production part1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Reliability/Small Production part2.jmp" );

obj = dt1 << Reliability Forecast(
	Input Format( Dates ),
	Production Data Table(
		dt1,
		Production Count( :Sold Quantity ),
		Timestamp( :Sold Month )
	),
	Failure Data Table(
		dt2,
		Failure Time( :Return Month ),
		Timestamp( :Sold Month ),
		Failure Count( :Return Quantity )
	),
	Life Time Unit( Month ),
	Show Legend( 1 ),
	Show Graph Filter( 0 ),
	Forecast(
		Group( "" ),
		Risk Set( [2550, 2600, 2650, 2700, 2750, 2800, 2850] ),
		Future Risk Set(
			[3082.5, 3052.5, 3367.5, 3952.5, 3667, 3667],
			[3347740800, 3350160000, 3352579200, 3355257600, 3357849600, 3360528000]
		),
		Forecast To( "02/2011" ),
		Distribution( Weibull ),
		Contract( 6, Month ),
		Forecast Type( Sequential ),
		Interval Type( Prediction Interval ),
		Set Interval Level( 0.9 )
	),
	Forecast Options(
		Animation( 1 ),
		Interactive Configuration of Risk Sets( 1 ),
		Spreadsheet Configuration of Risk Sets( 0 ),
		Show Interval( 1 ),
		Forecasting Interval Type( Prediction Interval ),
		Use Contract Length( 1 ),
		Use Failure Cost( 0 ),
		Set Failure Cost( . ),
		Monte Carlo Sample Size( 10000 ),
		Random Seed( -1 ),
		Use Approximate Distribution( 1 )
	)
);

```

### Reliability Growth

**構文:** obj = Reliability Growth( Input Format( Time to Event ), Time to Event( column, &lt;column&gt; ), &lt;Event Count( column )&gt;, &lt;Phase( column )&gt; );obj = Reliability Growth( Input Format( Dates ), Timestamp( column, &lt;column&gt; ), &lt;Event Count( column )&gt;, &lt;Phase( column )&gt; );obj = Reliability Growth( Input Format( Concurrent Systems ), Time to Event( column, column, ... ), System ID( column ), &lt;Phase( column )&gt; )obj = Reliability Growth( Input Format( Parallel Systems ), Time to Event( column, column, ... ), &lt;Event Count( column )&gt;, System ID( column ), &lt;Phase( column )&gt; )

**説明:** 設計に改善が組み込まれている修復可能なシステムにおいて、時間の経過に伴う信頼性の変化をモデル化する。 このプラットフォームでは複数の入力形式を使用できる。指定の詳細は各形式を参照。

#### イベントまでの時間

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
obj << Crow AMSAA;

```

#### 並列システム

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Parallel Systems Multiple Phases.jmp" );
obj = dt << Reliability Growth(
	Input Format( Parallel Systems ),
	Time to Event( :Hours ),
	Event Count( :Fixes ),
	System ID( :System ID ),
	Phase( :Phase )
);
obj << Piecewise Weibull NHPP with Different Intercepts;

```

#### 並行システム

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Concurrent Systems.jmp" );
obj = dt << Reliability Growth(
	Input Format( Concurrent Systems ),
	Time to Event( :Prototype 1, :Prototype 2 ),
	System ID( :Failed System ),

);
obj << Crow AMSAA;

```

#### 日付

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/BrakeReliability.jmp" );
obj = dt << Reliability Growth(
	Input Format( Dates ),
	Timestamp( :Date ),
	Event Count( :Fixes )
);

```

### Repeated Measures Degradation

**構文:** Repeated Measures Degradation( Y( column ), Time( column ), &lt;X( column )&gt;, &lt;Freq( column )&gt;, &lt;Censor( column ), Censor Code( value )&gt; )

**説明:** 反復測定劣化データをBayes推定する。Bayes推定では、パラメータを確率変数とみなす。

```jsl


dt = Open( "$SAMPLE_DATA/Reliability/Device B.jmp" );
obj = dt << Repeated Measures Degradation(
	Y( :Power Drop ),
	Time( :Hours ),
	Label( :Device ),
	X( :Degrees C ),
	Reference Temperature( "Celsius", 195 ),
	Control( "Linear", "Linear", "First Order Kinetics Type 2" )
);

```

### Response Screening

**構文:** Response Screening( Y( columns ), X( columns ) )

**説明:** 応答変数が多数ある場合において、線形モデルの効果に対する検定を一度に行う。大量の検定結果および要約統計量が、データテーブルとプロットにまとめられて出力される。偽発見率(FDR)によって、検定の多重性を考慮し、本当は差がないのに「差がある」と誤って判断してしまう確率を抑えることができる。ロバストな推定法を使えば、外れ値が検定に及ぼす影響を小さくできる。

#### 例 1

```jsl

dt = Open( "$SAMPLE_DATA/Probe.jmp" );
obj = dt << Response Screening(
	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),
	X( :Process )
);

```

#### 例 2

```jsl

dt = Open( "$Sample_Data/Probe.jmp" );
obj = dt << Response Screening( X( :Process ), Y( Eval( 8 :: 108 ) ) );

```

### Scatterplot 3D

**構文:** Scatterplot 3D( Y( columns ) )

**説明:** 3つ以上の変数を使った回転する3次元の散布図。変数を4つ以上指定した場合、散布図に表示する変数が順に選択できる。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );

```

### Scatterplot Matrix

**構文:** Scatterplot Matrix( Y( columns ), &lt;X( columns )&gt;, &lt;Group( column )&gt;, &lt;By( column )&gt; )

**説明:** 散布図行列を作成する。X変数が指定されていない場合は、Y変数のすべてのペアの散布図を作成する。1つ以上のX変数が指定されている場合は、X変数とY変数の散布図を作成する。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Scatterplot Matrix(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);

```

### Structural Equation Models

**構文:** Structural Equation Models( Model Variables ( columns ) )

**説明:** 構造方程式モデルをあてはめる。構造方程式モデルには、確証的因子分析モデル、(潜在変数がある場合も含む)パスモデル、測定誤差モデル、潜在成長曲線モデルなどのさまざまなモデルが含まれる。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	)
);

```

### Support Vector Machines

**構文:** Support Vector Machines(Y( column ), X( columns ))

**説明:** 説明変数の空間におけるサポートベクトルによって応答の予測値を求める。サポートベクトルマシンを用いる目的の1つは、現在の学習データから、将来のデータを分類する予測式を求めることである。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width )
);

```

### Surface Plot

**構文:** Surface Plot( Columns() )

**説明:** 回転する3次元のプロット(点または保存された計算式による曲面のプロット)を作成する。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);

```

### Survival

**構文:** Survival( Y( columns ), Censor( column ), &lt;Grouping( column )&gt; )

**説明:** 1つまたは複数のグループに対し、積-極限(Kaplan-Meier)法を使って生存関数を推定する。

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );

```

### Tabulate

**構文:** Tabulate( Add Table( Column Table( Analysis Columns( column(s) )|Grouping Columns( column(s))|Statistics( )), Row Table( Analysis Columns( column(s) )|Grouping Columns( column(s))|Statistics( )) )

**説明:** 1つまたは複数の変数の要約統計量を表にまとめる。変数は、1つまたは複数の分類列によってグループ化できる。ドラッグ＆ドロップ操作によって要約表を作成できる。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);

```

### Ternary Plot

**構文:** Ternary Plot( Y( columns ) )

**説明:** 合計が一定の値になる3つの配合成分の2次元プロット。

```jsl

dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );
obj = dt << Ternary Plot( Y( :p1, :p2, :p3 ) );

```

### Text Explorer

**構文:** Text Explorer( Text Columns( columns ) )

**説明:** 列のテキストを単語に分けてそれらをカウントし、他の列との関連付け、指示変数の保存、関係性のグラフ化などを行う。

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );

```

### Time Series

**構文:** Time Series( Y( column ) )

**説明:** 等間隔の時点で観測された一連のオブザベーションをモデル化する。時系列プロット、自己相関、バリオグラム、スペクトル密度、ARIMA、季節ARIMA、平滑化モデル、予測を含む。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );

```

### Time Series Forecast

**構文:** Time Series Forecast( Y( column ) )

**説明:** 指定された方法で、複数の時系列に対してモデルをあてはめ、予測する。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/M3C Quarterly.jmp" );
obj = dt << Time Series Forecast( Y( :Y ), Grouping( :Series ), Time( :Time ) );

```

### Uplift

**構文:** Uplift( Y( column ), X( columns ), Treatment( column ) )

**説明:** 処置の差を最大にするような分岐を選ぶ対話的パーティションツリーをあてはめる。モデルにより、処置に反応する可能性が最も高い個人のグループを特定できる。

#### 例 1

```jsl

dt = Open( "$Sample_Data/Hair Care Product.jmp" );
obj = Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Split Best( 3 )
);

```

#### 例 2

```jsl

dt = Open( "$Sample_Data/Hair Care Product.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	New Column Name( "Valid1" ),
	Go
);
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Validation( :Valid1 ),
	Split Best( 3 )
);

```

### Variability Chart

**構文:** Variability Chart( Y( column ), X( columns ) )

**説明:** 連続変数の測定値を分析する。測定システムの性能を調べる。測定値のばらつきを調べるゲージ分析も行える。

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );

```

### Virtual Join

**構文:** Virtual Join

**説明:** ID列を通じてメインデータテーブルを補助データテーブルにリンクする。

テーブルを物理的に結合しなくても、メインテーブルから補助テーブルの列にアクセスできるようになる。



「リンクID」列プロパティにより、補助テーブル内の列をID列として定義できる。



「リンク参照」列プロパティは、メインテーブル内の列を補助テーブル内のID列にマッピングする。

「リンク参照」プロパティでは、データテーブル参照、またはリンクしたいデータテーブルのパスを設定できる。

[参照先の列名をそのまま使用]オプションを使うと、リンクされた列の列名として、補助データテーブル名も含む名前ではなく元の列名がそのまま使用される。

#### 例 1

```jsl

cID = New Table( "Color IDs",
	Add Rows( 2 ),
	New Column( "ID", Numeric, Set Property( "Link ID", 1 ), Set Values( [1, 2] ) ),
	New Column( "color", Character, Set Values( {"magenta", "cyan"} ) )
);
cID << Save( "$temp\cID.jmp" );

Favs = New Table( "Favorite Colors",
	Add Rows( 4 ),
	New Column( "colorID",
		Numeric,
		Set Property( "Link Reference", Reference Table( "$temp\cID.jmp" ) ),
		Set Values( [1, 2, 1, 2] )
	),
	New Column( "person", Character, Set Values( {"fred", "ralph", "artemus", "neil"} ) )
);

Favs:"color[colorID]"n << hide( 0 ); // show the color column in the table, it is hidden by default

Write( "\!n", Favs:person[2], " likes ", Favs:"color[colorID]"n[2] );

Favs:colorID[2] = 1; // change ralph's color by changing his color id
Write( "\!n", Favs:person[2], " likes ", Favs:"color[colorID]"n[2] );
Favs:"color[colorID]"n << hide( 1 ) << hide( 0 );

Write( "\!nRalph's color changed." );

```

#### 例 2

```jsl

cID = New Table( "Color IDs",
	Add Rows( 2 ),
	New Column( "ID", Numeric, Set Values( [1, 2] ) ),
	New Column( "color", Character, Set Values( {"magenta", "cyan"} ) )
);

Favs = New Table( "Favorite Colors",
	Add Rows( 4 ),
	New Column( "colorID", Numeric, Set Values( [1, 2, 1, 2] ) ),
	New Column( "person", Character, Set Values( {"fred", "ralph", "artemus", "neil"} ) )
);
cID:ID << Set Property( "Link ID", 1 );
Favs:colorID << Set Property(
	"Link Reference",
	{Reference Table( cID ), options( "use linked column name" )}
);


Favs:color << hide( 0 ); // show the color column in the table, it is hidden by default

Write( "\!n", Favs:person[2], " likes ", Favs:color[2] ); // not Favs:"color[colorID]"n

Favs:colorID[2] = 1;    // change ralph's color by changing his color id
Write( "\!n", Favs:person[2], " likes ", Favs:color[2] );

Write( "\!nRalph's color changed." );

```

#### 例 3

```jsl


cID = New Table( "Color IDs",
	Add Rows( 2 ),
	New Column( "ID", Numeric, Set Values( [1, 2] ) ),
	New Column( "color", Character, Set Values( {"magenta", "cyan"} ) )
);

Favs = New Table( "Favorite Colors",
	Add Rows( 4 ),
	New Column( "colorID", Numeric, Set Values( [1, 2, 1, 2] ) ),
	New Column( "person", Character, Set Values( {"fred", "ralph", "artemus", "neil"} ) )
);
cID:ID << Set Property( "Link ID", 1 );
Favs:colorID << Set Property(
	"Link Reference",
	{Reference Table( cID ), options( "use linked column name"(1), "auto open" )}
);

Favs2 = New Table( "More Favorites",
	Add Rows( 4 ),
	New Column( "ID", Numeric, Set Values( [1, 2, 3, 4] ) ),
	New Column( " person", Character, Set Values( {"susie", "james", "mark", "ami"} ) )
);

// A link ID and link reference can be assigned to the same column.  The option "Auto open" will  
// automatically open the linked tables for you when you open the main referencing table.
Favs2:ID << Set Property( "Link ID", 1 );
cID:ID << Set Property(
	"Link Reference",
	{Reference Table( Favs2 ), Options( "Use Linked Column Name"(1) )}
);

Favs:color << hide( 0 ); // Show the color column in the table, it is hidden by default
Favs:ID << hide( 0 );  // Show the ID column in the table, from More Favorites table
Write( "\!n", Favs:person[2], " likes ", Favs:color[2] ); // Not Favs:"color[colorID]"n

Favs:colorID[2] = 1;    // Change ralph's color by changing his color id
Write( "\!n", Favs:person[2], " likes ", Favs:color[2] );

Write( "\!nRalph's color changed." );
cid:person << hide( 0 );

Write( "\!n", cID:person[2], " likes ", Favs:color[4] );

```

## 項目のメッセージ

### Add Properties to Table

**構文:** obj &lt;&lt; Add Properties to Table

**説明:** テーブルにプロパティを追加する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Properties( {2, 4} );
proplist = dt << Get Selected Properties();
dt2 = New Table( "Little Class" );
dt2 << Add Properties to Table( proplist );

```

### Add Scripts to Table

**構文:** obj &lt;&lt; Add Scripts to Table

**説明:** Add properties to tableの別名。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Properties( {2, 4} );
proplist = dt << Get Selected Properties();
dt2 = New Table( "Little Class" );
dt2 << Add scripts to table( proplist );

```

### Anonymize

**構文:** obj &lt;&lt; Anonymize( columns( columns ), &lt;Output Table( name )&gt; )

**説明:** データの内容を識別できないようにした新しいデータテーブルを作成する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << anonymize( columns( :name, :age ), output table name( "anonymized" ) );

```

### Apply Columns List Filter To Data Grid

**構文:** obj &lt;&lt; Apply Columns List Filter To Data Grid( state=0|1 )

**説明:** オンにすると、データテーブルの列リストのフィルタがデータグリッドに適用される。

**JMP追加されたバージョン:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << Column Filter( Column Name( "tude" ) );
Wait( 1 );
dt << Apply Columns List Filter To Data Grid( 0 );
Wait( 1 );
dt << Apply Columns List Filter To Data Grid( 1 );

```

### Apply Formula

**構文:** dt &lt;&lt; Apply Formula([Columns(&lt;col|{cols}|Group(col, count)|&lt;group name&gt;, [Ref(&lt;name&gt;)], [List Ref(&lt;name&gt;)]]+, [Output(In Place|In Place Formula|New Formula(&lt;prefix&gt;|New Static(&lt;prefix&gt;)], [Group(&lt;name&gt;)])

**説明:** 計算式を使って1つまたは複数の列を変換し、その結果を計算式またはデータとして新しい列または既存の列に入れる。

少なくとも1つの列グループ(1つの列、明示的な列のリスト、一続きの列、または既存の列グループ名)を指定しなければならない。

OutputがIn Placeの場合、最初に指定したグループが出力の対象となる。必要な場合は、計算式の中で一度にひとつずつ列を参照する名前(Ref)、または列のリストとして参照する名前(ListRef)を指定できる。

最後に、出力の仕方を指定できる。その際、オプションで新しい列の名前やグループ名も指定できる。

**JMP追加されたバージョン:** 18

#### New Data Columns/ListRef

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Data Table( "Big Class" ) << Apply Formula(
	Columns(
		Group( :height, 2 ),
		Ref( "_relative_from_height" ),
		ListRef( "height_to_weight" )
	),
	Formula( _relative_from_height / Sum( height_to_weight ) ),
	Output( New Static )
);

```

#### New Formula Columns/Grouping

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Apply Formula(
	Columns( Group( :height, 2 ), Ref( "_relative_from_height" ) ),
	Formula( _relative_from_height * 2 ),
	Output( New Formula( "result", Group( "output group" ) ) )
);

```

#### Simple New Formula Column

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Data Table( "Big Class" ) << Apply Formula(
	Columns( :height ),
	Formula( :height / 5 ),
	Output( New Formula )
);

```

### Begin Data Update

**構文:** obj &lt;&lt; Begin Data Update

**説明:** End Data Updateコマンドに達するまで、更新処理のすべてのメッセージを保留する。この機能は、一度に多くのセルを更新するのに役立つ。データセル内の変更にのみこのコマンドは適用される。

```jsl

dt = Open( "$SAMPLE_DATA/Central Limit Theorem.jmp" );
dt << Add Rows( 2000 );
dt << Distribution( Column( :"N=1"n, :"N=5"n, :"N=10"n ) );
Wait();
dt << Begin Data Update;
dt << Add Rows( 2000 );
dt << End Data Update;

```

### Checksum

**構文:** obj &lt;&lt; Checksum( &lt; Version(version) &gt;, &lt; Include(flags) &gt;, &lt; Exclude(flags) &gt; )

**説明:** Compute the table&apos;s checksum. Available flags include: "ColData", "ColName", "ColDataType", "ColModelingType", "ColFormat", "ColInFormat", "ColFormatWidth", "ColAttributes", "ColProperties", "ColListCheck", "ColRangeCheck", "ColCompact", "ColLabel", "ColHidden", "ColExclude", "ColSelection", "ColState", "ColDisplayWidth", "TableVariables", "TableScripts", "RowExclude", "RowHidden", "RowLabel", "RowColor", "RowMarker", "RowSelection", "RowState"

**JMP追加されたバージョン:** 18

#### 例 1

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Checksum();

```

#### 例 2

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Checksum( Exclude( "ColData" ) );

```

#### 例 3

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Checksum( Include( "ColData", "ColAttributes" ) );

```

#### 例 4

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
flags = {"ColData", "ColAttributes"};
dt << Checksum( Include( flags ) );

```

### Clear Cell Colors

**構文:** obj &lt;&lt; Clear Cell Colors

**説明:** 選択されている列のセルの色を消去する。列が選択されていない場合は、すべての列のセルの色が消去される。

**JMP追加されたバージョン:** 15

#### 例 1

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:age << Color Cells( "Red" );
a = {1, 3, 5};
b = {2, 4, 6};
:height << color cells( {{"Red", a}, {"blue", b}} );
:weight << color cells( {{"blue", a}} );
Wait( 2 );
dt << Clear cell colors( {:height, :age} );

```

#### 例 2

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:age << Color Cells( "Red" );
a = {1, 3, 5};
b = {2, 4, 6};
:height << color cells( {{"Red", a}, {"blue", b}} );
:weight << color cells( {{"blue", a}} );
Wait( 2 );
dt << Clear cell colors();

```

### Clear Column Selection

**構文:** obj &lt;&lt; Clear Column Selection

**説明:** データテーブルの選択された列をクリアする。

```jsl

dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
dt << Go To( :BP 12F );
Wait( 2 );
dt << Clear Column Selection();

```

### Clear Edit Lock

**構文:** obj &lt;&lt; Clear Edit Lock( [ &lt;"Modify Cells"&gt;, &lt;"Add rows"&gt;, &lt;"Add Columns"&gt;, &lt;"Delete Rows"&gt;, &lt;"Delete Columns"&gt;] )

**説明:** 対象のデータテーブルで、引数で指定した操作を行えるようにする。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Set Edit Lock( "Modify Cells", "Add Rows", "Delete Columns" );
:age << set selected( 1 );
:height << set selected( 1 );
Wait( 2 );
dt << Clear Edit Lock( "Delete Columns" );

```

### Clear Properties Selection

**構文:** obj &lt;&lt; Clear Properties Selection( { property1, property2, ... )

**説明:** 指定されたテーブルプロパティの選択を解除する。プロパティ名またはプロパティの添え字のリストを指定する。リストを指定しなかった場合、選択されているすべてのプロパティの選択が解除される。

#### 例 1

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
list = {"Bivariate", "Logistic"};
proplist = dt << Select Properties();
Wait( 1 );
dt << clear properties selection( list );

```

#### 例 2

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
list = {"Bivariate", "Logistic"};
proplist = dt << Select Properties();
Wait( 1 );
dt << clear properties selecction();

```

### Clone

**構文:** dt &lt;&lt; Clone( &lt; Table Name(name) &gt;, &lt; Copy Formulas(1|0) &gt;, &lt; Eval Formulas(1|0) &gt; )

**説明:** データテーブルのコピーを作成する。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dtClone = dt << Clone;

```

### Close Data Grid

**構文:** obj &lt;&lt; Close Data Grid

**説明:** データグリッドを閉じる、または開く。

```jsl

dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
dt << Close Data Grid( 1 );

```

### Close Side Panels

**構文:** obj &lt;&lt; Close Side Panels

**説明:** データテーブルのサイドパネルを閉じる、または開く。

```jsl

dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
dt << Close Side Panels( 1 );

```

### Close summary panels

**構文:** obj &lt;&lt; Close summary panels

**説明:** データテーブルの要約パネルを閉じる、または開く。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
dt << Close Summary Panels( 1 );

```

### Cluster

**構文:** obj &lt;&lt; Cluster

### Collapse All Column Groups

**構文:** obj &lt;&lt; Collapse All Column Groups

**説明:** すべての列グループを折りたたむ。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
dt << Group Columns( "Monday", BP 8M, 3 );
dt << Group Columns( "Wednesday", BP 8W, 3 );
dt << Group Columns( "Friday", BP 8F, 3 );
dt << Expand All Column Groups;
Wait( 2 );
dt << Collapse All Column Groups;

```

### Column Filter

**構文:** obj &lt;&lt; Column Filter

**説明:** Retrieves object to manipulate active column filter for the table.

**JMP追加されたバージョン:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Lipid Data.jmp" );
dt << Expand All Column Groups;
dt:sex << Hide( 1 );

// Use immediately
dt << Column Filter( Column Name( "Weight|Wt", Regular Expression( 1 ) ) );
dt << Column Filter( Tags( {"Blood Measurements", "Good Measure"} ) );
dt << Column Filter( Tags( {"Blood Measurements", "Good Measure"}, Intersection( 1 ) ) );
dt << Column Filter( Column Name( "3" ), Tags( {"Blood Measurements"} ) );
dt << Column Filter( Clear );

// Return an object and send messages later
cf = dt << Column Filter;
cf << Column Name( "3yr" );
cf << Get Script;

// Related to (can also send to object)
dt << Show Hidden Columns in Columns List( 0 );
dt << Apply Columns List Filter to Data Grid( 0 );

```

### Column Switcher

**構文:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**説明:** スタンドアロンの列スイッチャーを作成する

**JMP追加されたバージョン:** 16

#### 例 1

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
dt << Column Switcher(
	:Process 1,
	{:Process 1, :Process 3, :Process 4, :Process 5, :Process 6, :Process 7}
);

```

#### 例 2

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Bivariate",
	H List Box(
		cs = dt << Column Switcher( :age, {:age, :weight} ),
		V List Box(
			female = Bivariate( Y( :age ), X( :height ), Where( :sex == "F" ) ),
			male = Bivariate( Y( :age ), X( :height ), Where( :sex == "M" ) )
		)
	)
);
cs << Link Platform( female );
cs << Link Platform( male );

```

#### 例 3

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Bivariate",
	H List Box(
		cs = dt << Column Switcher( :age, {:age, :weight} ),
		b = Bivariate( Y( :age ), X( :height ), by( :sex ) )
	)
);
cs << Link Platform( b[1] );
cs << Link Platform( b[2] );

```

### Combine Columns

**構文:** obj &lt;&lt; Combine Columns

**説明:** 複数の列を1つの列に結合する。元の各列の値は指定の区切り文字で区切られる。

#### 例 1

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
dt << Combine Columns(
	delimiter( "," ),
	Columns(
		:Brush After Waking Up, :Brush After Meal, :Brush Before Sleep, :Brush Another Time
	),
	Selected Columns are Indicator Columns( 1 ),
	Column Name( "When to Brush" )
);

```

#### 例 2

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
dt << Combine Columns(
	delimiter( "," ),
	Columns(
		:Brush After Waking Up, :Brush After Meal, :Brush Before Sleep, :Brush Another Time
	),
	Column Name( "When to Brush" )
);

```

### Compare Data Tables

**構文:** obj &lt;&lt; Compare Data Tables( Compare with( Data Table( name )), &lt;Compare table variables and scripts( 0|1)&gt;, &lt;show window&gt;,&lt;Compare columns attributes and properties( 0|1)&gt;, &lt;Compare data( 0|1 )&gt;, &lt;Show difference summary(0|1)&gt;, &lt;Show difference plot(0|1)&gt; )

**説明:** 開いている2つのデータテーブルを比較し、データやメタデータの違いをレポートする。

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
dt << compare data tables( compare With( Data Table( "Students2" ) ) );

```

### Compress File When Saved

**構文:** obj &lt;&lt; Compress File When Saved( state=0|1 )

**説明:** データテーブルを保存する際にファイルを圧縮する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Compress File When Saved( 1 );

```

### Compress Selected Columns

**構文:** obj &lt;&lt; Compress Selected Columns( { column1, column2, ...} )

**説明:** 各列を最もコンパクトな形式に圧縮する。

文字データは水準が255個より少ない場合、1バイトとなる。

数値データはデータが-127から127までの間の場合、1バイトとなる。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Compress Selected Columns( {:Age, :sex, :Height, :Weight} );

```

### Concatenate

**構文:** obj &lt;&lt; Concatenate( &lt;Private&gt;, &lt;Invisible&gt;, Data Table( name ), &lt;Data Table(name), ...&gt; &lt;Label( column )&gt;, &lt;Output Table( name ) | Append to first table&gt;, &lt;Keep Formulas&gt;, &lt;Create Source Column&gt; )

**説明:** 複数のデータテーブルの行を縦に連結し、新しいデータテーブルを作成するか、最初のデータテーブルを更新する。

#### 例 1

```jsl

dt = Open( "$SAMPLE_DATA/Trial1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Trial2.jmp" );
dt << Concatenate( Data Table( "Trial2" ) );

```

#### 例 2

```jsl

dt = Open( "$SAMPLE_DATA/Students.jmp" );
dt1 = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
dt << Concatenate(
	Data Table( dt1 ),
	Data Table( dt2 ),
	"Append to first table",
	"Create source column"
);

```

### Copy Column Properties

**構文:** obj &lt;&lt; Copy Column Properties( &lt;column 1 column 2, ...&gt; )

**説明:** データテーブル内の複数の列の列プロパティをクリップボードにコピーする。列は、データテーブル内で選択するか、リストとして指定することができる。

#### 例 1

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << Select Columns( :MODULUS, :ELONG );
dt << Copy Column Properties;
New Window( "Script", Script Box( "//Try Paste here
                     " ) );

```

#### 例 2

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << Copy Column Properties( {:MODULUS, :ELONG} );
New Window( "Script", Script Box( "//Try Paste here
                     " ) );

```

### Copy Selected Properties

**構文:** obj &lt;&lt; Copy Selected Properties

**説明:** 選択されているテーブルプロパティをクリップボードにコピーする。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << select properties( {"Distribution", "Oneway"} );
proplist = dt << Copy Selected Properties();
New Window( "Script", Script Box( "//Try Paste here
                     " ) );

```

### Copy Table Script

**構文:** obj &lt;&lt; Copy Table Script( &lt;"No data"&gt; )

**説明:** データテーブルを再作成するスクリプトをクリップボードにコピーする。生成されたスクリプトには、データテーブル内に保存されているすべてのテーブルスクリプトも含まれる。また、「No Data」というキーワードを指定すると、スクリプトからデータ部分が省かれる。

#### 例 1

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Copy Table Script();
New Window( "Script", Script Box( "//Try Paste here
                     " ) );

```

#### 例 2

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Copy Table Script( "No Data" );
New Window( "Script", Script Box( "//Try Paste here
                     " ) );

```

### Debug Script

**構文:** obj &lt;&lt; Debug Script( name )

**説明:** データテーブルにプロパティとして保存されたスクリプトをデバッグする。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Debug Script( "Distribution" );

```

### Decision Tree

**構文:** obj &lt;&lt; Decision Tree

### Define Tag

**構文:** Define Tag(&lt;name&gt;, [Color(&lt;color&gt;)], [Symbol(&lt;symbol char&gt;)], [Description(&lt;text&gt;)], [Replace(&lt;existing tag name&gt;)])

**説明:** テーブルで列のタグの定義を作成または更新する。タグがない場合は、作成する。オプションで色やシンボルなどの属性を割り当てる。

**JMP追加されたバージョン:** 19

#### Color, Symbol, or None

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Define Tag( "ID1", Color( Red ) );
dt << Define Tag( "ID2", Symbol( "\!UD83D\!UDCCB" ) );
dt << Define Tag( "ID3" );

```

#### New Tag

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Define Tag( "ID", Color( Blue ) );

```

#### Replace

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Define Tag( "ID", Color( Red ) );
:height << Set Property( "Tags", {"ID"} );
dt << Define Tag( "Identifier", Replace( "ID" ), Color( Blue ) );
:height << Get Property( "Tags" );

```

### Delete Columns

**構文:** obj &lt;&lt; Delete Columns( &lt;column&gt;, &lt;column&gt;, ... )

**説明:** 指定した列を削除する。引数を指定しなかった場合、データテーブル内の選択されている列を削除する。

**JMP追加されたバージョン:** 14

#### 例 1

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:height << Set Selected;
Wait( 2 );
dt << Delete Columns();

```

#### 例 2

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
dt << Delete Columns( :Height );

```

#### 例 3

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
cols = {"height", "weight"};
Wait( 2 );
dt << Delete Columns( cols );

```

### Delete Filter View

**構文:** obj &lt;&lt; Delete Filter View( name | obj )

**説明:** 指定されたフィルタビューを削除する。

**JMP追加されたバージョン:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
fv dream = dt << New Filter View(
	"Dream",
	Active( 0 ),
	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) )
);
fv male = dt << New Filter View(
	"Male",
	Active( 0 ),
	Data Filter( Add Filter( Columns( :Sex ), Where( :Sex == "MALE" ) ) )
);
Wait( 1 );
dt << Delete Filter View( fv dream );
dt << Delete Filter View( "Male" );

```

### Delete Scripts

**構文:** obj &lt;&lt; Delete Scripts( &lt;script| {script 1, script 2, script 3, ...} &gt; )

**説明:** データテーブルから指定のスクリプトを削除する。

**JMP追加されたバージョン:** 14

#### 例 1

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Table Script(
	"New Script",
	Distribution( Column( :Height, :Weight ), By( :sex ) )
);
Wait( 2 );
dt << Delete Scripts( "New Script" );

```

#### 例 2

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
list = {"Bivariate", "Logistic"};
Wait( 2 );
dt << Delete Scripts( list );

```

### Delete Table Property

**構文:** obj &lt;&lt; Delete Table Property

**説明:** [Delete Scripts]の別名。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Table Script(
	"New Script",
	Distribution( Column( :Height, :Weight ), By( :sex ) )
);
Wait( 2 );
dt << Delete Table Property( "New Script" );

```

### Delete Table Variable

**構文:** obj &lt;&lt; Delete Table Variable( name )

**説明:** データテーブルに保存されたテーブル変数を削除する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Table Variable( "Days", 42 );
Wait( 2 );
dt << Delete Table Variable( "Days" );

```

### Delete Tag

**構文:** Delete Tag(&lt;tag&gt;|{&lt;tag&gt;, &lt;tag&gt;, ...}, [force(0|1)

**説明:** テーブルからタグを削除する。Force(1)フラグが指定された場合を除き、列に使用されているタグは削除されない。

**JMP追加されたバージョン:** 19

#### Delete tag

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Define Tag( "ID" );
Wait( 3 );
dt << Delete Tag( "ID" );

```

#### Force delete

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Define Tag( "ID" );
:height << Set Property( "Tags", {"ID"} );
Wait( 3 );
dt << Delete Tag( "ID", Force( 1 ) );

```

### Deselect Column Group

**構文:** obj &lt;&lt; Deselect Column Group( name of group | list of names )

**説明:** 列グループの選択を解除する。 列グループが指定されなかった場合、すべての列グループの選択を解除する。

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << group columns( "xy", {:X, :y} );
dt << group columns( "pollutants", :Ozone :: :Lead );
dt << select column group();
Wait( 2 );
dt << deselect column group( "pollutants" );

```

### Disable Undo

**構文:** obj &lt;&lt; Disable Undo( state=0|1 )

**説明:** このオプションを指定すると、データテーブルでの操作が元に戻せなくなる。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << disable undo( 1 );

```

### End Data Update

**構文:** obj &lt;&lt; End Data Update

**説明:** Begin Data Updateコマンドから、このコマンドまでの更新処理のすべてのメッセージを実行する。この機能は、一度に多くのセルを更新するのに役立つ。データセル内の変更にのみこのコマンドは適用される。

```jsl

dt = Open( "$SAMPLE_DATA/Central Limit Theorem.jmp" );
dt << Add Rows( 2000 );
dt << Distribution( Column( :"N=1"n, :"N=5"n, :"N=10"n ) );
Wait();
dt << Begin Data Update;
dt << Add Rows( 2000 );
dt << End Data Update;

```

### Exclude Columns

**構文:** obj &lt;&lt; Exclude Columns( &lt; 0|1 &gt; | &lt; { column1, column2, ... } &gt; )

**説明:** 分析の実行から列を除外する。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Exclude Columns( 1, {:Age, :Name} );

```

### Exit Filter View

**構文:** obj &lt;&lt; Exit Filter View

**説明:** フィルタされていない表示に戻す。すでにフィルタされていない表示になっている場合は、何も行われない。

**JMP追加されたバージョン:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
dt << New Filter View(
	"Dream",
	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) )
);
Wait( 1 );
dt << Exit Filter View;

```

### Expand All Column Groups

**構文:** obj &lt;&lt; Expand All Column Groups

**説明:** すべての列グループを展開する。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
dt << Group Columns( "Monday", BP 8M, 3 );
dt << Group Columns( "Wednesday", BP 8W, 3 );
dt << Group Columns( "Friday", BP 8F, 3 );
dt << Collapse All Column Groups;
Wait( 2 );
dt << Expand All Column Groups;

```

### Fit Model

**構文:** Fit Model( Y( columns ), Effects( columns ), Personality( "Standard Least Squares" ) )

**説明:** 線形回帰モデルをあてはめる。分散分析、ロジスティック回帰、分散成分、罰則付き回帰、ステップワイズ回帰、MANOVA、生存時間モデルなどのモデルがある。

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );
dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run Model()
);

```

### Get Active Filter View

**構文:** fv = obj &lt;&lt; Get Active Filter View

**説明:** アクティブなフィルタビューを取得する。FilterViewオブジェクトを戻す。

**JMP追加されたバージョン:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
dt << New Filter View(
	"Dream",
	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) )
);
fv active = dt << Get Active Filter View;
Show( fv active << Get Name );

```

### Get All Columns As Matrix

**構文:** obj &lt;&lt; Get All Columns As Matrix

**説明:** データテーブルを行列で戻す。文字列は並べ替え順に従って1から順に番号が与えられる。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
m = dt << Get All Columns As Matrix();
Show( m );

```

### Get As Report

**構文:** obj &lt;&lt; Get As Report

**説明:** データテーブルをレポートにしたものを戻す。

#### 例 1

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
jmp_report = New Window( "Big Class",
	Text Box( "Big Class" ),
	H List Box( Outline Box( "Big Class", dt << Get As Report ) ), 

);

```

#### 例 2

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Where( :Age < 14 );
dt << Select Columns( :name, :age, :height );
jmp_report = New Window( "Big Class",
	Text Box( "Big Class" ),
	H List Box( Outline Box( "Big Class", dt << Get As Report ) ), 

);

```

### Get Cell Height

**構文:** obj &lt;&lt; Get Cell Height

**説明:** 行の表示の高さを取得する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
ht = dt << Get Cell Height;

```

### Get Column Group

**構文:** obj &lt;&lt; Get Column Group( name of column group | list of names )

**説明:** 列グループ内の列のリストを戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << group columns( "xy", {:X, :y} );
dt << group columns( "pollutants", :Ozone :: :Lead );
dt << get column group( "xy" );

```

### Get Column Groups Names

**構文:** obj &lt;&lt; Get Column Groups Names

**説明:** 列グループの名前を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << group columns( "xy", {:X, :y} );
dt << group columns( "pollutants", :Ozone :: :Lead );
dt << get column groups names;

```

### Get Column Names

**構文:** obj &lt;&lt; Get Column Names( &lt;Numeric|Character|RowState&gt;, &lt;Continuous|Ordinal|Nominal&gt;,&lt;String&gt; )

**説明:** データテーブルにある列の列名を戻す。stringのキーワードが指定された場合、結果は文字列で戻される。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
n = dt << Get Column Names();
Show( n );
CNames = dt << Get Column Names( Continuous );
Show( CNames );
SNames = dt << Get Column Names( String );
Show( SNames );

```

### Get Column Reference

**構文:** obj &lt;&lt; Get Column Reference( list of column names )

**説明:** リスト内に文字列で指定したの列の参照を戻す。

#### 例 1

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
refList = dt << Get Column Reference( {"sex", "age"} );
Show( refList );

```

#### 例 2

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
a = {1, 3, 4};
refList = dt << Get Column Reference( a );
Show( refList );

```

### Get Edit Lock

**構文:** obj &lt;&lt; Get Edit Lock

**説明:** 対象のデータテーブルにおいて現在、行えない操作の一覧をリストで戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Set Edit Lock( "Add Rows", "Delete Columns" );
Wait( 2 );
dt << Get Edit Lock();

```

### Get Excluded Columns

**構文:** obj &lt;&lt; Get Excluded Columns

**説明:** 現在除外されている列を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:Name << Exclude;
exCols = dt << Get Excluded Columns;
Show( exCols );

```

### Get Excluded Rows

**構文:** obj &lt;&lt; Get Excluded Rows

**説明:** データテーブルで現在除外されている行を戻す。Whereを使用する方法は、より推奨される。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Rows( 1 );
dt << Select Rows( 5 );
dt << Exclude();
r1 = dt << Get Excluded Rows();
r2 = Where( Excluded() );
Show( r1, r2 );

```

### Get Filter View

**構文:** fv = obj &lt;&lt; Get Filter View( name | &lt;&lt;Temporary | &lt;&lt;Unfiltered )

**説明:** Get a filter view by name, or get one of the special filter views by using <<Temporary or <<Unfiltered. If a filter view by the given name does not exist, returns Empty().

**JMP追加されたバージョン:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
dt << New Filter View(
	"Dream",
	Active( 0 ),
	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) )
);
fv dream = dt << Get Filter View( "Dream" );
Show( fv dream << Get Name );
Show( (dt << Get Filter View( <<Unfiltered )) << Get Name );

```

### Get Filter Views

**構文:** { fv, ... } = obj &lt;&lt; Get Filter Views( &lt; Temporary(0|1) &gt;, &lt; Unfiltered(0|1) &gt; )

**説明:** すべてのフィルタビューのリストを取得する。デフォルトでは、フィルタされていない一時的なビューは含まれない。

**JMP追加されたバージョン:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
fv dream = dt << New Filter View(
	"Dream",
	Active( 0 ),
	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) )
);
fvs = dt << Get Filter Views( Unfiltered( 1 ), Temporary( 1 ) );
Show( fvs << Get Name );

```

### Get Header Height

**構文:** obj &lt;&lt; Get Header Height

**説明:** 列見出しの表示の高さを取得する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
ht = dt << Get Header Height;

```

### Get Hidden Columns

**構文:** obj &lt;&lt; Get Hidden Columns

**説明:** 現在非表示となっている列を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:Weight << Hide;
hidCols = dt << Get Hidden Columns;
Show( hidCols );

```

### Get Hidden Rows

**構文:** obj &lt;&lt; Get Hidden Rows

**説明:** データテーブルで現在非表示の行を戻す。Whereを使用する方法は、より推奨される。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Rows( 1 );
dt << Select Rows( 5 );
dt << Hide();
r1 = dt << Get Hidden Rows();
r2 = Where( Hidden() );
Show( r1, r2 );

```

### Get Label Columns

**構文:** obj &lt;&lt; Get Label Columns

**説明:** 行ラベルとして使われている列を戻す。

**JMP追加されたバージョン:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
labelCols = dt << Get Label Columns;
Show( labelCols );

```

### Get Labeled Rows

**構文:** obj &lt;&lt; Get Labeled Rows

**説明:** データテーブルで現在ラベルの付いている行を戻す。Whereを使用する方法は、より推奨される。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Rows( 1 );
dt << Select Rows( 5 );
dt << Label();
r1 = dt << Get Labeled Rows();
r2 = Where( Labeled() );
Show( r1, r2 );

```

### Get Lock

**構文:** obj &lt;&lt; Get Lock( state=0|1 )

**説明:** データテーブルがロックされているかどうかを確認する。

```jsl


dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
a = dt << get lock();
Show( a );
Wait( 1 );
dt << Lock Data Table( 1 );
a = dt << get lock();
Show( a );

```

### Get MM SAS DATA Step for Formula Columns

**構文:** obj &lt;&lt; Get MM SAS DATA Step for Formula Columns

**説明:** JMPデータテーブルの計算式列の式に対応するModel Manager用SAS DATAステップコードを作成する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Ratio", Formula( :height / :weight ) );
dt << Get MM SAS Data Step for Formula Columns;

```

### Get Name

**構文:** obj &lt;&lt; Get Name( &lt;"Ignore Extension"&gt; )

**説明:** データテーブルの表示名を戻す。オプションの引数［Ignore Extension］を指定すると、拡張子を除いたデータテーブルの名前が戻される。

#### 例 1

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
n = dt << Get Name();
Show( n );

```

#### 例 2

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
n = dt << Get Name( "Ignore Extension" );
Show( n );

```

### Get Path

**構文:** obj &lt;&lt; Get Path

**説明:** データテーブルの完全パスを戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
path = dt << Get Path();
Show( path );

```

### Get Property

**構文:** obj &lt;&lt; Get Property( name )

**説明:** データテーブルのテーブルプロパティをスクリプトで戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
s = dt << Get Property( "Distribution" );
Show( s );

```

### Get Row ID Width

**構文:** obj &lt;&lt; Get Row ID Width

**説明:** 行番号の領域の表示幅を取得する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
ht = dt << Get Row ID Width;

```

### Get Row States

**構文:** obj &lt;&lt; Get Row States

**説明:** データテーブルの各行がもつ行属性のエンコード値をベクトルで戻す。戻り値であるエンコード値は、Color Ofなどの関数で行属性として認識されないことに注意。戻り値の使用例については、例2を参照のこと。

#### 例 1

```jsl

dt = Open( "$SAMPLE_DATA/Cereal.jmp" );
rs = dt << Get Row States;
Show( rs );

```

#### 例 2

```jsl

dt = Open( "$SAMPLE_DATA/Cereal.jmp" );
rs = dt << GetRowStates;
w = Marker Of( As Row State( rs[3] ) );
dt2 = Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( dt2, 5 ) = Marker State( w );

```

### Get Rows Where

**構文:** obj &lt;&lt; Get Rows Where

**説明:** データテーブル内でWhere条件に一致する行を戻す。代わりにWhereを使用する方法が、より推奨される。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
r1 = dt << Get Rows Where( :sex == "M" );
r2 = Where( :sex == "M" );
Show( r1, r2 );

```

### Get SAS DATA Step for Formula Columns

**構文:** obj &lt;&lt; Get SAS DATA Step for Formula Columns

**説明:** JMPデータテーブルの計算式列の式に対応するSAS DATAステップのコードを作成する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Ratio", Formula( :height / :weight ) );
dt << Get SAS Data Step for Formula Columns;

```

### Get Script

**構文:** obj &lt;&lt; Get Script( &lt;script name&gt; )

**説明:** リクエストされたスクリプトを戻す。 スクリプト名が指定されなかった場合、データテーブルを表すテキストを、データ内に保存されたすべてのスクリプトとともに戻す。

#### 例 1

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
s = dt << Get Script;
New Window( "Script", Script Box( Char( Name Expr( s ) ) ) );

```

#### 例 2

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
s = dt << Get Script( "Distribution" );

```

### Get Script Group

**構文:** obj &lt;&lt; Get Script Group( name of script group )

**説明:** グループに含まれているスクリプトのスクリプト名を、リストで戻す。

**JMP追加されたバージョン:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << group scripts(
	"GB",
	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts",
	"Graph Builder Line Chart", "Graph Builder Heat Map"}
);
dt << group scripts( "VL", {"Set Sex Value Labels", "Set Age Value Labels"} );
gb = dt << get script group( "GB" );
Wait( 1 );
dt << run script( gb[2] );

```

### Get Script Groups Names

**構文:** obj &lt;&lt; Get Script Groups Names

**説明:** 複数のスクリプトグループのグループ名を、リストで戻す。

**JMP追加されたバージョン:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << group scripts(
	"GB",
	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts",
	"Graph Builder Line Chart", "Graph Builder Heat Map"}
);
dt << group scripts( "VL", {"Set Sex Value Labels", "Set Age Value Labels"} );
gb = dt << get script groups names;

```

### Get Scroll Locked Columns

**構文:** obj &lt;&lt; Get Scroll Locked Columns

**説明:** 現在スクロールロックされている列を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:Name << Scroll Lock;
lockCols = dt << Get Scroll Locked Columns;
Show( lockCols );

```

### Get Selected Columns

**構文:** obj &lt;&lt; Get Selected Columns

**説明:** データテーブルにおいて選択された列の名前を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Go To( :weight );
names = dt << Get Selected Columns;
Show( names );

```

### Get Selected Properties

**構文:** obj &lt;&lt; Get Selected Properties( &lt;{list of properties}&gt; )

**説明:** 現在、選択されているテーブルプロパティ(変数とスクリプト)をリストに取得する。どのテーブルプロパティを取得するかを、リストによって引数に指定してもよい。

#### 例 1

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Properties( {2, 4} );
proplist = dt << Get Selected Properties();

```

#### 例 2

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
proplist = dt << Get Selected Properties( {2, 4} );

```

### Get Selected Rows

**構文:** obj &lt;&lt; Get Selected Rows

**説明:** データテーブルにおいて現在選択されている行を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Rows( 1 );
dt << Select Rows( 5 );
r = dt << Get Selected Rows();
Show( r );

```

### Get Table Script Names

**構文:** obj &lt;&lt; Get Table Script Names

**説明:** データテーブルのすべてのテーブルプロパティの名前を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
names = dt << Get Table Script Names;
Show( names );

```

### Get Table Variable

**構文:** obj &lt;&lt; Get Table Variable( name )

**説明:** データテーブルにある指定のテーブル変数の値を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Set Table Variable( "Days", 42 );
var = dt << Get Table Variable( "Days" );
Show( var );

```

### Get Table Variable Names

**構文:** obj &lt;&lt; Get Table Variable Names

**説明:** データテーブルのすべてのテーブル変数の名前を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
names = dt << Get Table Variable Names;
Show( names );

```

### Get Tagged Columns

**構文:** obj &lt;&lt; Get Tagged Columns( tag|{tag1, tag2, ...}, [Intersection] )

**説明:** 指定されたタグに一致する列のリストを戻す。Intersection引数がある場合は、指定したタグをすべて含んだ列のみを戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt:Ozone << setProperty( "Tags", {"Air Pollution Levels"} );
dt:CO << setProperty( "Tags", {"Air Pollution Levels"} );
dt:SO2 << setProperty( "Tags", {"Air Pollution Levels"} );
dt:NO << setProperty( "Tags", {"Air Pollution Levels"} );
dt:PM10 << setProperty( "Tags", {"Air Pollution Levels"} );
dt:Lead << setProperty( "Tags", {"Air Pollution Levels"} );
dt << Get Tagged Columns( "Air Pollution Levels" );

```

### Get Transforms

**構文:** dt &lt;&lt; Get Transforms()

**説明:** データテーブルに設定されている変換列のリストを取得する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Transform Column( "A", Formula( :B + 1 ) );
dt << Transform Column( "B", Formula( :height + 1 ) );
Show( dt << Get Transforms() );
dt << Delete Columns( {:A, :B} );

```

### Get as Matrix

**構文:** obj &lt;&lt; Get as Matrix( &lt;list of columns by name&gt;, &lt;list of columns by number&gt;, &lt;column range&gt; )

**説明:** データテーブルの特定の数値列を行列で戻す。デフォルトはすべての数値列。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
m = dt << Get As Matrix();
Show( m );
x = dt << GetAsMatrix( {4, 5} );
Show( x );

```

### Group Columns

**構文:** obj &lt;&lt; Group Columns( first column, number )obj &lt;&lt; Group Columns( {column1, column2, ...})obj &lt;&lt; Group Columns(group name | Path({&lt;a&gt;, &lt;b&gt;, ...}), {column1, column2, ...})obj &lt;&lt; Group Columns( group name | Path({&lt;a&gt;, &lt;b&gt;, ...}), first column, number )

**説明:** 複数の列をグループ化する。

#### Add to group

```jsl

dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
Wait( 1 );
theGroup = dt << Group Columns( "BP", :BP 8M :: :BP 8W );
Wait( 2 );
// add to theGroup
theGroup = dt << Group Columns( theGroup, {:BP 12W} );

```

#### Nested group

```jsl

dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
Wait( 1 );
dt << Group Columns( Path( {"Groups", "BP8"} ), :BP 8M :: :BP 8W );

```

#### Using count

```jsl

dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
Wait( 1 );
group = dt << Group Columns( BP 8M, 9 );

```

### Group Scripts

**構文:** obj &lt;&lt; Group Scripts({ script1, script2, ...}) obj &lt;&lt; Group Scripts(group name | Path({&lt;a&gt;, &lt;b&gt;, ...}), {script1, script1, ...})

**説明:** 複数のスクリプトを1つのグループにする。

**JMP追加されたバージョン:** 14

#### Nested group

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << group scripts(
	Path( {"GB", "Sample Graphs"} ),
	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts",
	"Graph Builder Line Chart", "Graph Builder Heat Map"}
);

```

#### Simple group

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << group scripts(
	"GB",
	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts",
	"Graph Builder Line Chart", "Graph Builder Heat Map"}
);

```

### Has Column

**構文:** dt &lt;&lt; Has Column( name, &lt; Exact Match(1|0) &gt; )

**説明:** データテーブルに指定した名前の列があるかどうかを調べる。

**JMP追加されたバージョン:** 18

#### 例 1

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Has Column( "weight" );

```

#### 例 2

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Show(
	dt << Has Column( "Weight" ),
	dt << Has Column( "Weight", Exact Match( 1 ) ),
	dt << Has Column( "a g e" ),
	dt << Has Column( "a g e", Exact Match( 1 ) )
);

```

### Has data view

**構文:** obj &lt;&lt; Has data view

**説明:** データテーブルのウィンドウが開いて表示されている場合、真を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << Has Data View();

```

### Hide Columns

**構文:** obj &lt;&lt; Hide Columns( &lt; 0|1 &gt; | &lt; { column1, column2, ... } &gt; )

**説明:** データグリッドで列を非表示にする。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Hide Columns( 1, {:Age, :Name} );

```

### Is Dirty

**構文:** obj &lt;&lt; Is Dirty

**説明:** データテーブルが変更されたかどうかを調べる。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
a = dt << is Dirty;
Show( a );
dt << add rows( 5 );
b = dt << is dirty;
Show( b );

```

### Is Linked Subset

**構文:** obj &lt;&lt; Is Linked Subset

**説明:** データテーブルがリンクされたサブセットかどうかを調べる

**JMP追加されたバージョン:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
linkedSubset = dt << Subset( All Rows, Link To Original Data Table( 1 ) );
subset = dt << Subset( All Rows );
Show( dt << Is Linked Subset, linkedSubset << Is Linked Subset, subset << Is Linked Subset );

```

### JMP Query Builder

**構文:** obj &lt;&lt; JMP Query Builder

**説明:** 1つまたは複数のJMPデータテーブルのクエリーを作成する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << JMP Query Builder();

```

### Join

**構文:** obj &lt;&lt; Join( &lt;Private&gt;, &lt;Invisible&gt;,With( Data Table( name )), By Matching Columns( column1 = column2, ...), Selected( columns ), SelectedWith( columns ), &lt;Drop Multiples( 0|1, 0|1 )&gt;, &lt;Include nonmatches( 0|1, 0|1 )&gt;,&lt;Copy formula( 0|1 )&gt;, &lt;Suppress Formula Evaluation&gt;, &lt;Update&gt;, &lt;Merge Same Name Columns&gt;, &lt;Preserve Main Table Order&gt; )

**説明:** 複数のデータテーブルを新しい1つのデータテーブルに結合する。データは、行ごと、互いの列の値によるマッチング、または直積により結合することができる。

```jsl

dt = Open( "$SAMPLE_DATA/Trial1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Little.jmp" );
dt << Join(
	With( Data Table( "Little" ) ),
	Select( :popcorn, :oil amt, :batch, :yield ),
	SelectWith( :yield ),
	By Matching Columns( :popcorn = :popcorn, :batch = :batch, :oil amt = :oil )
);

```

### Journal

**構文:** obj &lt;&lt; Journal

**説明:** データテーブルからジャーナルを作成する。データグリッドだけが含まれ、ノート、変数、およびスクリプトは含まれない。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Journal();

```

### Journal Link

**構文:** dt &lt;&lt; Journal Link( &lt; Save( &lt;filepath&gt; ) | Embed( ) &gt;, &lt; Button Name( "Ben") &gt; )

**説明:** クリックするとデータテーブルが開かれるリンクボタンをジャーナルに追加する。embed()とsave()は、両方を同時には指定できない。embed()はオプションなし。save()オプションはdt<<save()と同じようにデータを保存する。リンクボタンのラベルを上書きするには、ButtonName()を使用する。戻り値として、追加されたリンクボタンへの参照が戻される。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Journal Link(); // assumes the table can be saved at its current location; button gets name from table
dt << Journal Link( Embed() ); // embed JSL script to re-create table; button gets name from table
dt << Journal Link(
	Save( "$temp/DeleteMe1.jmp" ),
	ButtonName( "Fancy Name for Temporary File" )
);
// even more fancy...
button = dt << Journal Link( Save( "$temp/DeleteMe2.jmp" ), ButtonName( "" ) ); // no text name
button << UnderlineStyle( 0 ); // not using the link-style appearance
button << SetIcon( "DataTableFile" ); // add an icon
button << SibAppend( Text Box( "Pick Me!" ), "Horizontal" ); // append a label
// save it with a prompt...you can change the name in the save-as dialog...or cancel
dt << Journal Link( Save( "" ) ); // prompt for path and save table; button gets name from prompt
Close( dt, "NoSave" );

```

### Last Modified

**構文:** obj &lt;&lt; Last Modified

**説明:** データテーブルを最後に編集した日付を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
date = dt << Last Modified();
Show( date );

```

### Lock Data Table

**構文:** obj &lt;&lt; Lock Data Table( state=0|1 )

**説明:** データテーブルをロックして、値を編集または追加できないようにする。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Lock Data Table( 1 );
// Now try changing a value in the data table.

```

### MSA Variability Chart

**構文:** obj &lt;&lt; MSA Variability Chart( Y( column ), X( columns ) )

**説明:** 変動性図を表示する。測定値がカテゴリによってどのように異なるを、平均と分散で調べる。

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );

```

### Make Indicator Columns

**構文:** obj &lt;&lt; Make Indicator Columns

**説明:** 名義尺度や順序尺度の列から、カテゴリの個数だけ、指示変数(ダミー変数)の列を作成する。指示変数の列名は、元の列のデータ値。指示変数の値は0または1。

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );
dt << Make Indicator Columns( columns( {:species, :season} ) );

```

### Make RowState Handler

**構文:** rs = dt &lt;&lt; Make RowState Handler( function(a) )

**説明:** データテーブルに対して行属性のハンドラを作成する。関数の引数には行属性が変更された行の番号が代入される。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
f = Function( {a}, Print( a ) );
rs = dt << make row state handler( f );
dt << Select Rows( 1 );
dt << Select Rows( 5 );

```

### Make SAS DATA Step

**構文:** sd = dt &lt;&lt; Make SAS Data Step( )sd = dt &lt;&lt; Make SAS Data Step( SaveJMPMetadata(true) )

**説明:** データテーブルをSASで作成するためのDATAステップを戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
sd = dt << Make SAS Data Step();
Show( sd );

```

### Make SAS DATA Step Window

**構文:** sd = dt &lt;&lt; Make SAS Data Step Window( )sd = dt &lt;&lt; Make SAS Data Step Window( SaveJMPMetadata(true) )

**説明:** SASプログラム用の新しいウィンドウを開いて、データテーブルからSAS DATAステップを作成する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
sd = dt << Make SAS Data Step Window();

```

### Merge Referenced Data

**構文:** obj &lt;&lt; Merge Referenced Data

**説明:** 参照先のデータテーブルのデータをマージし、リンクを解除することによってテーブルをスタンドアロンにする。参照している列のリンク参照プロパティも削除される。

```jsl

dt1 = Open( "$SAMPLE_DATA\Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA\Pizza Responses.jmp" );
dt1:ID << Set Property( "Link ID", 1 );
dt2:Choice << Set Property( "Link Reference", Reference Table( dt1 ) );
dt2:Choice1 << Set Property( "Link Reference", Reference Table( dt1 ) );
dt2:Choice2 << Set Property( "Link Reference", Reference Table( dt1 ) );
dt2 << Merge Referenced Data();

```

### Missing Data Pattern

**構文:** obj &lt;&lt; Missing Data Pattern( columns( columns ), &lt;Output Table( name )&gt; )

**説明:** データテーブル内の欠測値のパターンを見つけ、各パターンとその度数のテーブルを作成する。

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << Missing Data Pattern(
	columns( :POP, :Max deg. F Jan, :OZONE, :CO, :SO2, :NO, :PM10, :Lead )
);

```

### Move Column Group

**構文:** obj &lt;&lt; Move Column Group( name of group | Path({&lt;a&gt;, &lt;b&gt;, ...}), to first | to last | after(column) | after(group) | after(Path({&lt;a&gt;, &lt;b&gt;, ...})) )

**説明:** 列グループを指定の場所に移動する。 列グループの名前が指定されなかった場合、すべてのグループが対象となる。

#### After group

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << group columns( "xy", {:X, :y} );
dt << group columns( "pollutants", :Ozone :: :Lead );
dt << move column group( "Pollutants", after( "xy" ) );

```

#### Move all

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << group columns( "xy", {:X, :y} );
dt << group columns( "pollutants", :Ozone :: :Lead );
dt << move column group( to first );

```

#### To first

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << group columns( "xy", {:X, :y} );
dt << group columns( "pollutants", :Ozone :: :Lead );
dt << move column group( "xy", to first );

```

### Move Script Group

**構文:** obj &lt;&lt; Move Script Group( name of group | Path({&lt;a&gt;, &lt;b&gt;, ...}), to first | to last | after(script) | after(group) | after(Path({&lt;a&gt;, &lt;b&gt;, ...})) )

**説明:** スクリプトグループを指定の場所に移動する。グループ名が指定されなかった場合、すべてのスクリプトグループが対象となる。

**JMP追加されたバージョン:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << group scripts(
	"GB",
	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts",
	"Graph Builder Line Chart", "Graph Builder Heat Map"}
);
dt << group scripts( "VL", {"Set Sex Value Labels", "Set Age Value Labels"} );
Wait( 1 );
dt << move script group( "VL", after( "Oneway" ) );
Wait( 1 );
dt << move script group( "GB", after( "VL" ) );
Wait( 1 );
dt << move script group( "VL", after( Path( {"GB"} ) ) );
Wait( 1 );
dt << move script group( to first );

```

### Move Selected Scripts

**構文:** obj &lt;&lt; Move Selected Scripts( script|list of scripts|group|Path({&lt;a&gt;, &lt;b&gt;, ...}), to first | to last | after(script) | after(group) | after(Path({&lt;a&gt;, &lt;b&gt;, ...})) )

**説明:** スクリプトを指定の場所に移動する。

**JMP追加されたバージョン:** 14

#### After group

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << group scripts(
	"GB",
	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts",
	"Graph Builder Line Chart", "Graph Builder Heat Map"}
);
dt << Move Selected scripts( {"Logistic"}, after( "GB" ) );

```

#### Move Group

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << group scripts(
	Path( {"GB", "Graphs"} ),
	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts",
	"Graph Builder Line Chart", "Graph Builder Heat Map"}
);
dt << Move Selected scripts( Path( {"GB", "Graphs"} ), after( "Contingency" ) );

```

#### To first

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Move Selected scripts(
	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts",
	"Graph Builder Line Chart", "Graph Builder Heat Map"},
	to first
);

```

### Move down

**構文:** obj &lt;&lt; Move down

**説明:** データテーブルの最初の行の値を列名で置き換え、列名をデフォルトの通し番号のついた名前に置き換える。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Move down;

```

### Move up

**構文:** obj &lt;&lt; Move up

**説明:** 列名をデータテーブルの最初の行の値で置き換える。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Move up;

```

### Move up and append

**構文:** obj &lt;&lt; Move up and append

**説明:** データテーブルの列名に、最初の行の値を追加する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Move up and append;

```

### New Data Box

**構文:** obj &lt;&lt; New Data Box( &lt; &lt;&lt;Enable Filter Views(0|1) &gt; )

**説明:** ディスプレイボックスツリーの中にデータテーブルビューを作成する。指定されたデータテーブルが、現在のデータテーブルになる。オプションのEnable Filter Views引数は、ビューがフィルタを許可するかどうかを制御する。デフォルトでは、許可する。

```jsl

dtA = Open( "$SAMPLE_DATA/Big Class.jmp", invisible );
New Window( "school",
	H List Box(
		dtA << New Data Box(),
		Text Box(),
		dtA << Distribution(
			ContinuousDistribution( Column( :weight ) ),
			NominalDistribution( Column( :age ) )
		)
	)
);
dtA = 0;

```

### New Data View

**構文:** obj &lt;&lt; New Data View

**説明:** データテーブルの新しいビューを作成する。このビューは元のデータテーブルとリンクしており、強調表示や変更などのすべてが、元のデータテーブルにも反映される。このビューは、同じデータテーブルのスクロールしないといけないような別の個所を同時に表示させたい場合に便利。

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << New Data View();

```

### New Filter View

**構文:** fv = dt &lt;&lt; New Filter View( &lt; name &gt;, &lt; Copy From(name|obj) &gt;, &lt; Temporary(0|1) &gt;, &lt; Active(0|1) &gt;, &lt; DataFilter(expr) &gt;)

**説明:** 新しいフィルタビューを作成する。作成されたFilterViewオブジェクトが戻される。新しいフィルタビューは、デフォルトでアクティブになる。名前をつけなかったフィルタビューは、Temporaryが0に設定されていない限り、一時的になる。

**JMP追加されたバージョン:** 19

#### 例 1

```jsl

dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
dt << New Filter View(
	"Dream",
	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) )
);

```

#### 例 2

```jsl

dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
dt << New Filter View(
	"Dream Inverse",
	Data Filter(
		Data Filter(
			Inverse( 1 ),
			Add Filter( Columns( :Island ), Where( :Island == "Dream" ) )
		)
	)
);

```

#### 例 3

```jsl

dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
fv = dt << New Filter View(
	Data Filter( Add Filter( Columns( :Sex ), Where( Is Missing( :Sex ) ) ) )
);
dt << New Filter View( "Unknown Sex", CopyFrom( fv ), Active( 0 ) );

```

### New Script

**構文:** New Property( name, script ) New Script( name, script )

**説明:** データテーブルにテーブルプロパティを新規作成し、それにスクリプトを設定する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Script( "New Script", Distribution( Column( :Height, :Weight ), By( :sex ) ) );

```

### New Table Variable

**構文:** obj &lt;&lt; New Table Variable( name, number )

**説明:** データテーブル内に新しい変数を作成し、定数を設定する。同名の変数がすでに存在する場合は、新しい変数の名前に番号が追加され一意のものとなる。多くの場合、類似のコマンドであるSet Table Variableの使用が推奨される。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Table Variable( "Days", 42 );

```

### OC Curves

**構文:** obj &lt;&lt; OC Curves

**説明:** 工程で生じたシフトの大きさに対して、それを検出できずに、合格とする確率を表すグラフを作成する。

**JMP追加されたバージョン:** 16

### Partition

**構文:** obj &lt;&lt; Partition( Y( column ), X( column(s) ) )

**説明:** 予測変数と応答値の関係に従ってデータを対話的に分岐することで、ディシジョンツリーを作成する。応答と予測変数は、連続量または離散値のどちらでもよい。

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << Partition(
	Y( :Y ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Split Best( 3 )
);

```

### Paste Column Properties

**構文:** obj &lt;&lt; Paste Column Properties

**説明:** クリップボードから、リスト形式で持たれている複数の列プロパティを、複数の列に貼り付ける。対象とする列をデータテーブルで選択する代わりに、列のリストを引数に指定することもできる。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << Copy Column Properties( {:MODULUS, :ELONG} );
dt2 = New Table( "test it",
	New Column( "T1", numeric, continuous ),
	New Column( "T2", numeric, continuous ),
	New Column( "T3", numeric, continuous ),
	Add Rows( 10 )
);
dt2 << Paste Column Properties( {:T1, :T3} );

```

### Recode

**構文:** obj &lt;&lt; Recode

**説明:** 列のデータ値を、指定された新しい値に置き換える

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Go To( :weight );
dt << Recode;

```

### Recode Column

**構文:** obj &lt;&lt; Recode Column(&lt;source column reference&gt;, {&lt;transform&gt;, ...}, &lt;Update Properties(0|1)&gt;, &lt;By Word(Delimiters(&lt;chars&gt;)&gt;, Target Column(&lt;column reference&gt; | &lt;column name&gt;))

**説明:** リストとして記述された変換をソース列の各値に適用し、結果を元の列または指定の列に保存する。By Wordオプションは、与えられた文字データをいくつかの入力値に分割する。それぞれの入力値に対して変換が適用される。

コマンドの実行中に、特殊なJSL変数に値が設定される:

	_rcNowは、1つ前までの変換が終わった後の入力の現在値。

	_rcOrigは、入力値の元の値。

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
col = New Column( :age );
col << Data Type( "Character" );
dt << Recode Column(
	:age,
	{If( _rcNow >= 17, "Older", _rcNow >= 15, "Middle", "Younger" )},
	Target Column( col )
);

```

### Rename Column Group

**構文:** obj &lt;&lt; Rename Column Group( oldname | Path({&lt;a&gt;, &lt;b&gt;, ...}), newname )

**説明:** 列グループの名前を変更する。

#### Nested Group

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << group columns( Path( {"xy", "Cols"} ), {:X, :y} );
Wait( 1 );
dt << rename column group( Path( {"xy"} ), "XY" );
dt << rename column group( Path( {"XY", "Cols"} ), "Columns" );

```

#### Simple Group

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << group columns( "xy", {:X, :y} );
dt << group columns( "pollutants", :Ozone :: :Lead );
Wait( 1 );
dt << rename column group( "xy", "coordinates" );

```

### Rename Script Group

**構文:** obj &lt;&lt; Rename Script Group( oldname | Path({&lt;a&gt;, &lt;b&gt;, ...}), newname )

**説明:** スクリプトグループのグループ名を変更する。

**JMP追加されたバージョン:** 14

#### Nested group

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << group scripts(
	Path( {"GB", "Graphs"} ),
	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts",
	"Graph Builder Line Chart", "Graph Builder Heat Map"}
);
dt << rename script group( Path( {"GB", "Graphs"} ), "My Graphs" );

```

#### Simple group

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << group scripts(
	"GB",
	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts",
	"Graph Builder Line Chart", "Graph Builder Heat Map"}
);
dt << rename script group( "GB", "GraphBuilders" );

```

### Rename Table Property

**構文:** obj &lt;&lt; Rename Table Property( old name, new name )

**説明:** テーブルプロパティの名前を変更する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Script( "New Script", Distribution( Column( :Height, :Weight ), By( :sex ) ) );
Wait( 1 );
dt << Rename Table Property( "New Script", "Great Script" );

```

### Rename Table Script

**構文:** obj &lt;&lt; Rename Table Script( old name, new name )

**説明:** テーブルスクリプトの名前を変更する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Script( "New Script", Distribution( Column( :Height, :Weight ), By( :sex ) ) );
Wait( 1 );
dt << Rename Table Script( "New Script", "Great Script" );

```

### Rename Table Variable

**構文:** obj &lt;&lt; Rename Table Variable( old name, new name )

**説明:** テーブル変数の名前を変更する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Table Variable( "Days", 42 );
Wait( 2 );
dt << Rename Table Variable( "Days", "Hours" );

```

### Rerun Formulas

**構文:** obj &lt;&lt; Rerun Formulas

**説明:** データテーブル内のすべての列計算式を再評価する。

```jsl

dt = Open( "$SAMPLE_DATA/Central Limit Theorem.jmp" );
dt << Add Rows( 100 );
dt << Rerun Formulas;

```

### Reset Transforms

**構文:** dt &gt;&gt; Reset Transforms()

**説明:** 変換列にアクセスすると、そのデータが後の使用に備えてキャッシュされる。この関数はそのデータを削除する。列にもう一度アクセスすればデータが再度作成される。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Reset Transforms();

```

### Revert

**構文:** obj &lt;&lt; Revert

**説明:** データテーブルへのすべての変更を元に戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Set Row States(
	[33, 33, 33, 33, 33, 97, 97, 97, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 768]
);
Wait( 2 );
dt << revert();

```

### Run Formulas

**構文:** obj &lt;&lt; Run Formulas

**説明:** 保留されている計算式の評価を実行する。すべての計算式が評価されるわけではない。

```jsl

dt = Open( "$SAMPLE_DATA/Central Limit Theorem.jmp" );
dt << Add Rows( 10000 );
dt << Run Formulas();
Distribution( Column( :"N=1"n, :"N=5"n, :"N=10"n ) );

```

### Run Script

**構文:** obj &lt;&lt; Run Script( name )

**説明:** データテーブルにテーブルプロパティとして保存されたスクリプトを実行する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Run Script( "Distribution" );

```

### Save

**構文:** obj &lt;&lt; Save( &lt;filepath&gt;, &lt;file type&gt; ) obj &lt;&lt; Save As( filepath, &lt;file type&gt; )

**説明:** データテーブルを、サポートされている任意の形式で保存する。サポートされている形式には、.jmp、.xls、.xlsx、.txt、.csv、.tsv、.xpt、.v8xpt、.stxがある。一部の形式はWindowsのみでサポートされている。詳細については、『JMPの使用法』を参照。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Save( "$temp\deleteme Big Class.jmp" ); // explicit location
If( dt << Save( "" ),
	Write( "\!nsaved to " || (dt << GetPath) ),
	Write( "\!nsave canceled" )
); // prompt
dt << Save( "$temp\deleteme Big Class.csv" ); // convert to CSV format
Close( dt, "NoSave" );

```

### Save As

**構文:** obj &lt;&lt; Save( &lt;filepath&gt;, &lt;file type&gt; ) obj &lt;&lt; Save As( filepath, &lt;file type&gt; )

**説明:** データテーブルを、サポートされている任意の形式で保存する。サポートされている形式には、.jmp、.xls、.xlsx、.txt、.csv、.tsv、.xpt、.v8xpt、.stxがある。一部の形式はWindowsのみでサポートされている。詳細については、『JMPの使用法』を参照。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Save( "$temp\deleteme Big Class.jmp" ); // explicit location
If( dt << Save( "" ),
	Write( "\!nsaved to " || (dt << GetPath) ),
	Write( "\!nsave canceled" )
); // prompt
dt << Save( "$temp\deleteme Big Class.csv" ); // convert to CSV format
Close( dt, "NoSave" );

```

### Save Database

**構文:** obj &lt;&lt; Save Database( connectInfo, TableName )

**説明:** データテーブルをデータベースに保存する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Save Database( "Connect Dialog", "My_Class" );

```

### Screen Predictors

**構文:** obj &lt;&lt; Screen Predictors

**説明:** 「説明変数のスクリーニング」の旧名。

```jsl

dt = Open( "$SAMPLE_DATA/Bands Data.jmp" );
obj = dt << Predictor Screening( Y( :Banding? ), X( Column Group( "Predictors" ) ) );

```

### Select Column Group

**構文:** obj &lt;&lt; Select Column Group( name of group | list of names )

**説明:** 列グループを選択する。

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << group columns( "xy", {:X, :y} );
dt << group columns( "pollutants", :Ozone :: :Lead );
dt << select column group( "xy", "pollutants" );

```

### Select Properties

**構文:** obj &lt;&lt; Select Properties( { property1, property2, ... )

**説明:** 指定されたテーブルプロパティを選択する。プロパティ名またはプロパティの添え字のリストを指定する。

#### 例 1

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
proplist = dt << Select Properties( {2, 4} );

```

#### 例 2

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
proplist = dt << Select Properties( {"Bivariate", "Logistic"} );

```

### Select Script Group

**構文:** obj &lt;&lt; Select Script Group( &lt;name of group | { group1, group2, ...} &gt; )

**説明:** スクリプトグループを選択する。グループ名が指定されなかった場合、すべてのスクリプトグループを選択する。

**JMP追加されたバージョン:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << group scripts(
	"GB",
	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts",
	"Graph Builder Line Chart", "Graph Builder Heat Map"}
);
dt << group scripts( "VL", {"Set Sex Value Labels", "Set Age Value Labels"} );
Wait( 1 );
dt << select script group( "VL" );

```

### Select Scripts

**構文:** obj &lt;&lt; Select Scripts( &lt;name of script | { script1, script2, ...} &gt; )

**説明:** 引数で指定されたスクリプト名のスクリプトを選択する。

**JMP追加されたバージョン:** 14

#### 例 1

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << group scripts(
	"GB",
	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts",
	"Graph Builder Line Chart", "Graph Builder Heat Map"}
);
dt << group scripts( "VL", {"Set Sex Value Labels", "Set Age Value Labels"} );
Wait( 1 );
dt << select scripts( {"Distribution", "Graph Builder Heat Map"} );

```

#### 例 2

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << group scripts(
	"GB",
	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts",
	"Graph Builder Line Chart", "Graph Builder Heat Map"}
);
dt << group scripts( "VL", {"Set Sex Value Labels", "Set Age Value Labels"} );
Wait( 1 );
a = dt << get script group( "GB" );
dt << select scripts( a );

```

### Select columns

**構文:** obj &lt;&lt; Select columns( &lt;column&gt;, &lt;column&gt;, ... )

**説明:** 指定された列を選択する。すべての列を選択するには、キーワードとして「All」を指定する。

**JMP追加されたバージョン:** 14

#### 例 1

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
dt << Select Columns( :Height );

```

#### 例 2

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
dt << Select Columns( "All" );

```

#### 例 3

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
clist = {:Height, :Weight};
dt << Select Columns( clist );

```

### Sequencing Variants Toolset

**構文:** obj &lt;&lt; Sequencing Variants Toolset

**説明:** バリアント配列解析ツールセットアドインプラットフォームへのインターフェース

### Set Active Filter View

**構文:** obj &lt;&lt; Set Active Filter View( name | obj )

**説明:** アクティブなフィルタビューを設定する。

**JMP追加されたバージョン:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
dt << New Filter View(
	"Dream",
	Active( 0 ),
	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) )
);
Wait( 1 );
dt << Set Active Filter View( "Dream" );

```

### Set Cell Height

**構文:** obj &lt;&lt; Set Cell Height( number )

**説明:** データテーブルにおける各セルの縦幅を設定する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Set Cell Height( 20 );

```

### Set Dirty

**構文:** obj &lt;&lt; Set Dirty( state=0|1 )

**説明:** データテーブルが変更されていない場合でも、変更済みとする。これにより、閉じる際に、保存するかどうかを尋ねるダイアログが表示される。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Set Dirty();

```

### Set Edit Lock

**構文:** obj &lt;&lt; Set Edit Lock( [ &lt;"Modify Cells"&gt;, &lt;"Add rows"&gt;, &lt;"Add Columns"&gt;, &lt;"Delete Rows"&gt;, &lt;"Delete Columns"&gt;] )

**説明:** 対象のデータテーブルで、引数で指定した操作を行えないようにする。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Set Edit Lock( "Add Rows", "Delete Columns" );

```

### Set Header Height

**構文:** obj &lt;&lt; Set Header Height( number )

**説明:** 列見出しの表示の高さを設定する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Set Header Height( 20 );

```

### Set Label Columns

**構文:** obj &lt;&lt; Set Label Columns( column(s) )

**説明:** データテーブルの選択された列にラベルの役割を割り当てる。

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
Wait( 1 );
dt << Set Label Columns( :City, :State );

```

### Set Matrix

**構文:** obj &lt;&lt; Set Matrix( [ matrix with rows separated by commas ] )

**説明:** 行列からデータテーブルを作成する。

```jsl

dt = New Table( "B" );
dt << Set Matrix( [12 59 95, 12 61 123, 12 55 74, 12 66 145] );

```

### Set Name

**構文:** obj &lt;&lt; Set Name( new TableName )

**説明:** データテーブルの名前を変更する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Set Name( "New Class" );

```

### Set Property

**構文:** obj &lt;&lt; Set Property( name, script )

**説明:** データテーブルにテーブルプロパティを新規作成し、それにスクリプトを設定する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Set Property( "New Script", Distribution( Column( :Height, :Weight ), By( :sex ) ) );

```

### Set Row ID Width

**構文:** obj &lt;&lt; Set Row ID Width( number )

**説明:** 行番号の領域の表示幅を設定する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Set Row ID Width( 80 );

```

### Set Row States

**構文:** obj &lt;&lt; Set Row States( [state1, state2, ... stateN] )

**説明:** データテーブルのすべての行に行属性を設定する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Set Row States(
	[33, 33, 33, 33, 33, 97, 97, 97, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 768]
);

```

### Set Scroll Lock Columns

**構文:** obj &lt;&lt; Set Scroll Lock Columns( column(s) )

**説明:** データテーブルの特定の列をスクロールされないようにロックする。背景色が変わって、列がロックされていることが示される。

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << Set Scroll Lock Columns( :City );

```

### Set Table Variable

**構文:** obj &lt;&lt; Set Table Variable( name, number )

**説明:** データテーブル内に新しい変数を作成し、定数を設定する。同名の既存の変数は上書きされる。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Set Table Variable( "Days", 42 );

```

### Show Header Filter Icons

**構文:** obj &lt;&lt; Show Header Filter Icons( state=0|1 )

**説明:** Show or hide the filter icons on columns in the current filter view.

**JMP追加されたバージョン:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Lipid Data.jmp" );
dt << Show Header Filter Icons( 0 );

```

### Show Header Graphs

**構文:** obj &lt;&lt; Show Header Graphs( state=0|1 )

**説明:** Show or hide the header graphs in the data table display.

**JMP追加されたバージョン:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Lipid Data.jmp" );
dt << Show Header Graphs( 0 );

```

### Show Header Groups

**構文:** obj &lt;&lt; Show Header Groups( state=0|1 )

**説明:** Show or hide the column groups in the data table display.

**JMP追加されたバージョン:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Lipid Data.jmp" );
dt << Show Header Groups( 0 );

```

### Show Header Statistics

**構文:** obj &lt;&lt; Show Header Statistics( state=0|1 )

**説明:** Show or hide the header statistics in the data table display.

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Lipid Data.jmp" );
dt << Show Header Statistics( 0 );

```

### Show Header Tags

**構文:** obj &lt;&lt; Show Header Tags( state=0|1 )

**説明:** Show or hide the column tags in the data table display.

**JMP追加されたバージョン:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Lipid Data.jmp" );
dt << Show Header Tags( 0 );

```

### Show Hidden Columns In Columns List

**構文:** obj &lt;&lt; Show Hidden Columns In Columns List( state=0|1 )

**説明:** オフにすると、非表示の属性を持つ列はデータテーブルの列リストにも表示されなくなる。これらの列が、データグリッドに表示されることはない。

**JMP追加されたバージョン:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << Hide Columns( 1, {:"pop- m"n, :Max deg. F Jan, :X, :Y} );
Wait( 1 );
dt << Show Hidden Columns In Columns List( 0 );

```

### Show Transforms

**構文:** dt &lt;&lt; Show Transforms()

**説明:** データテーブルに含まれる変換列とそのプラットフォームに関する情報をログに出力する。これは情報の提供を目的としており、形式は変更される可能性がある。構文解析をすることはできない。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Transform Column( "A", Formula( :height + 1 ) );
dt << Show Transforms();
dt << Delete Columns( :A );

```

### Sort

**構文:** obj &lt;&lt; Sort( &lt;Private&gt;, &lt;Invisible&gt;, &lt;Replace table&gt;, By( column ), Order( ascending|descending ) )

**説明:** 指定された列の値で昇順または降順に並べ替えた新しいデータテーブルを作成する。

#### 例 1

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Sort( By( :name ), Order( Ascending ) );

```

#### 例 2

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Sort( replace table, By( :name ), Order( Ascending ) );

```

### Split

**構文:** obj &lt;&lt; Split( Split( columns ), Split by( column ), &lt;Group(column)&gt;, &lt;Private&gt;|&lt;Invisible&gt;, &lt;Remaining Columns( Keep All | Drop All | Drop( columns ) | Keep( columns ) )&gt;, &lt;Copy formula( 0|1 )&gt;, &lt;Suppress formula evaluation( 0|1 )&gt;, &lt;Sort by Column Property&gt;, &lt;Output Table( "name" )&gt; )

**説明:** 1つの列の複数の行を複数の列にマッピングした新しいデータテーブルを作成する。

```jsl

dt = Open( "$SAMPLE_DATA/Restaurant Tips.jmp" );
:Day of Week << set property( "Row Order Levels", 1 );
dt << Split(
	Split By( :Day of Week ),
	Split( :Bill Amount ),
	Sort by Column Property,
	remaining columns( drop all )
);

```

### Stack

**構文:** obj &lt;&lt; Stack( &lt;Private&gt;, &lt;Invisible&gt;, columns( columns ), &lt;Source Label Column( string )&gt;, &lt;Stacked Data Column( string )&gt;, &lt;Copy formula( 0|1 )&gt;, &lt;Number of Series(n)&gt;, &lt;Contiguous&gt;, &lt;Drop All Other Columns(1) | Name("Non-stacked columns")(Keep( col1, ... )) | Name("Non-stacked columns")(Drop( col1, ... ))&gt;, &lt;Output Table( "name" )&gt;) )

**説明:** 複数の列の値を1列に積み重ねて新しいデータテーブルを作成する。

#### 例 1

```jsl

dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
dt << Stack(
	columns( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Source Label Column( "Time" ),
	Stacked Data Column( "Log Hist" )
);

```

#### 例 2

```jsl

dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
dt << Stack(
	columns( :BP 8M, :BP 12M, :BP 6M, :BP 8W, :BP 12W, :BP 6W, :BP 8F, :BP 12F, :BP 6F ),
	,
	Number of Series( 3 ),
	Contiguous,
	Source Label Column( "Day" ),
	Stacked Data Column( "BP" )
);

```

#### 例 3

```jsl

dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
dt << Stack(
	columns( :BP 8M, :BP 12M, :BP 6M, :BP 8W, :BP 12W, :BP 6W, :BP 8F, :BP 12F, :BP 6F ),
	,
	Number of Series( 3 ),
	Source Label Column( "Time" ),
	Stacked Data Column( "BP" )
);

```

### Subscribe

**構文:** obj &lt;&lt; Subscribe( Key( &lt;"client"&gt; ), OnDeleteColumns| OnAddColumns| OnAddRows| OnDeleteRows| OnRenameColumn | OnClose | OnSave | OnRename (function) )

**説明:** データテーブルの変更に関するメッセージを取得できるように登録する。keyには、参照できるようにするための登録名を指定する。そのオプションのパラメータclientは、データテーブルが閉じられる際に確認のダイアログを表示する。functionには、すでに定義された関数の名前または関数自体を指定する。On Close は、1つの引数(関数)のみを必要とする。その他のメッセージの場合は、データテーブルも引数として指定する。各登録は解除するまで有効。

#### 例 1

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Subscribe( "name1"("client"), On Close( Print( "Closing Data Table" ) ) );
f = Function( {dtab, oldname},
	Print( "oldname", oldname );
	Print( "new name", dtab << getname() );
);
fsave = Function( {dtab, newpathname},
	Print( "new path name", newpathname );
	Print( "new name", dtab << getname() );
);
dt << Subscribe( "name1", On Rename( f ) );
dt << Subscribe( "name1", On Save( fsave ) );
fcols = Function( {dtab, b},
	n = N Items( b );
	dtname = (dtab << getname());
	Print( dtname );
	Print( n );
	For( i = 1, i <= n, i++,
		colname = (b[i] << getname());
		Print( colname );
	);
);
dt << Subscribe( "name2", On Delete Columns( fcols ) ); 
//Try deleting a column, then close the data table.

```

#### 例 2

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
f = Function( {dtab, col, oldname},
	Print( dtab << getname() );
	Print( "new column name", (col << getname()) );
	Print( "old name", oldname );
);
sub = dt << Subscribe( "", OnRenameColumn( f ) );
Column( dt, 1 ) << set name( "test" );
Wait( 1 );
dt << unsubscribe( sub, on rename column );

```

#### 例 3

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
delRowsFn = Function( {a, b, rows},
	dtname = (a << Get Name());
	Print( dtname );
	Print( b );
	Print Matrix( rows );
);
addRowsFn = Function( {a, b, insert},
	dtname = (a << Get Name());
	Print( dtname );
	Print( b );
	Print( insert );
);
dt << subscribe( "Test Delete", onDeleteRows( delRowsFn, 3 ) );
dt << subscribe( "Test Add", onAddRows( addRowsFn, 3 ) );
// Try deleting some rows and adding new ones.

```

### Subset

**構文:** obj &lt;&lt; Subset( &lt;Private&gt;, &lt;Invisible&gt;, &lt;Selected columns&gt;, &lt;Columns(column list)&gt;, &lt;All rows | Selected Rows | Filtered Rows(where clause) | Rows([number, number, ...])&gt;, &lt;By(column list)&gt;, &lt;Sampling Rate(fraction)&gt;, &lt;Sample Size(integer)&gt;, &lt;Stratify(column list)&gt;, &lt;Link to original data table(0|1)&gt;, &lt;Copy formula(0|1)&gt;, &lt;Suppress Formula Evaluation&gt;, &lt;Keep by columns&gt; )

**説明:** 元のデータテーブルで選択されている行と列から新しいデータテーブルを作成する。サブセットにする行をランダムに選択することもできる。

#### By

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Subset( By( :sex ), Keep by columns );

```

#### フィルタリングされた行

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Subset( Filtered Rows( :age == 14 & Contains( :name, "E" ) ) );

```

#### 層化した標本

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Subset( Sample Size( 10 ), Stratify( :sex ) );

```

#### 行

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Subset( Rows( [28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40] ) );

```

### Summary

**構文:** obj &lt;&lt; Summary( &lt;Private&gt;, &lt;Invisible&gt;, FREQ(column | "none"), WEIGHT(column | "none"),Group( columns ),Subgroup(columns), &lt;N (column)&gt;, &lt;Mean( column )&gt;, &lt;Std Dev( column )&gt;, &lt;Min( column )&gt;, &lt;Max( column )&gt;, &lt;Range( column )&gt;, &lt;Sum( column )&gt;, &lt;CV( column )&gt;...,Include marginal statistics, Link to original data table (0|1),statistics column name format( "stat(column)" | "column" | "stat of column" | "column stat" | "stat") )

**説明:** 要約統計量の新しいデータテーブルを作成する。グループ変数が指定された場合は、その各水準が1行となる。グループ変数が複数ある場合はそれぞれの水準の組み合わせが1行となる。

#### 例 1

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Summary(
	Group( :Age ),
	subgroup( :sex ),
	Mean( :Height ),
	Include marginal statistics
);

```

#### 例 2

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Summary(
	Group( :Age ),
	Mean( :Height ),
	statistics column name format( "stat of column" )
);

```

### Suppress Formula Eval

**構文:** obj &lt;&lt; Suppress Formula Eval( state=0|1 )

**説明:** 自動評価を無効または有効にする。これは、行の追加、複数の分析の実行、および並べ替えの速度を速くしたい場合に便利。

```jsl

dt = Open( "$SAMPLE_DATA/Central Limit Theorem.jmp" );
dt << Add Rows( 2000 );
dt << Suppress Formula Eval( 1 );
dt << Add Rows( 2000 );
dt << Suppress Formula Eval( 0 );

```

### Text to Columns

**構文:** obj &lt;&lt; Text to Columns( delimiters(&lt;"separator"&gt;, &lt;TAB&gt;, &lt;NEWLINE&gt;), columns(column1, column2, ...) )

**説明:** 区切り文字で区切られた文字値から別々の列を作成する。オプションで指示変数の列を作成することもできる。 区切り文字(separator)には、任意の文字値、もしくはキーワードとしてTABまたはNEWLINEが指定できる。

#### 例 1

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
dt << Text To Columns( delimiter( "," ), columns( :Brush Delimited ) );

```

#### 例 2

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
dt << Text To Columns(
	delimiter( "," ),
	columns( :Brush Delimited ),
	Make Indicator Columns( 1 )
);

```

### Torch Deep Learning

**構文:** obj &lt;&lt; Torch Deep Learning

**説明:** Torch Deep Learningアドインプラットフォームへのインターフェース

### Transform Column

**構文:** dt &lt;&lt; Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Replace(0|1)], [Private(0|1)], [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]

**説明:** 対象のテーブルに変換列を作成する。変換列は、普通の列と同様に使用できる。

	 name: 列の名前

	 Formula: 変換列のデータを定義する計算式

	 Replace: このフラグを使うと、同じ名前を持つ既存の変換列を置換する。この指定がない場合、同じ変換であれば既存の変換列が戻され、そうでなければ区別がつくように新しい列の名前に変更が加えられる。

	 Private: このフラグを指定すると、作成した変換列が列の選択リストに表示されなくなる。

	データタイプ: 任意でデータタイプを指定する。指定しなかった場合は最初の行のデータから推測される。

	尺度: 任意で尺度を指定する。指定しなかった場合はデフォルトの尺度が使用される。

	列プロパティ: 列に設定したい標準的なプロパティ。列の作成後に設定することもできる。

**JMP追加されたバージョン:** 16

#### Nested

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Transform Column( "A", Formula( :B + 1 ) );
dt << Transform Column( "B", Formula( :height + 1 ) );
Show( :A[1] );
dt << Delete Columns( {:A, :B} );

```

#### Random

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Transform Column( "Predictable", Formula( Random Uniform() ), Random Seed( 314 ) );
dt << Transform Column( "Random", Formula( Random Uniform() ) );
Show( :Predictable[1], :Random[1] );
dt << Delete Columns( {:Predictable, :Random} );

```

#### Simple

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Transform Column( "A", Formula( :height + 1 ) );
Show( :A[1] );
dt << Delete Columns( :A );

```

### Transpose

**構文:** obj &lt;&lt; Transpose( &lt;Private&gt;, &lt;Invisible&gt;,columns( columns ), By( column ), &lt;Label( column )&gt;, &lt;Output Table( name )&gt; )

**説明:** 元のテーブルの行と列を入れ替え、新しいデータテーブルを作成する。

```jsl

dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
dt << Transpose(
	columns( :BP 8M, :BP 12M, :BP 6M, :BP 8W, :BP 12W, :BP 6W, :BP 8F, :BP 12F, :BP 6F ),
	By( :Dose ),
	Label( :Subject )
);

```

### Type 1 Gauge

**構文:** obj &lt;&lt; Type 1 Gauge( Y( column ) )

**説明:** タイプ1ゲージを使用して、連続データの測定システムを分析し、1つの部品における測定プロセスの能力を評価します。

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Type 1 Gauge MSA.jmp" );
dt << Type 1 Gauge(
	Y( :Y1, :Y2, :Y3 ),
	Type 1 Gauge Metadata(
		:Y1( Tolerance Range( 2 ), Reference( 50.014 ), Resolution( .001 ) ),
		:Y2( Tolerance Range( 6 ), Reference( 24.9 ), Resolution( .01 ) ),
		:Y3( Tolerance Range( 5 ), Reference( 10 ), Resolution( .0005 ) )
	)
);

```

### Ungroup Columns

**構文:** obj &lt;&lt; Ungroup Columns( {column1, column2, ...} | Column Group( group name ) )

**説明:** 複数の列のグループを解除する。

#### 例 1

```jsl

dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
dt << Group Columns( "Monday", BP 8M, 3 );
dt << Group Columns( "Wednesday", BP 8W, 3 );
dt << Group Columns( "Friday", BP 8F, 3 );
Wait( 2 );
dt << Ungroup Columns();

```

#### 例 2

```jsl

dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
dt << Group Columns( "Monday", BP 8M, 3 );
dt << Group Columns( "Wednesday", BP 8W, 3 );
dt << Group Columns( "Friday", BP 8F, 3 );
Wait( 2 );
dt << Ungroup Columns( Column Group( "Monday" ) );

```

### Ungroup Scripts

**構文:** obj &lt;&lt; Ungroup Scripts( name of script group | list of scripts )

**説明:** グループになっているスクリプトのグループ化を解除する。 スクリプト名が引数で指定されなかった場合、現在、選択されているスクリプトがグループから除外される。スクリプト名が引数で指定されず、選択されているスクリプトもない場合、すべてのスクリプトがグループから除外される。

**JMP追加されたバージョン:** 14

#### 例 1

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << group scripts(
	"GB",
	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts",
	"Graph Builder Line Chart", "Graph Builder Heat Map"}
);
dt << group scripts( "VL", {"Set Sex Value Labels", "Set Age Value Labels"} );
Wait( 1 );
dt << ungroup scripts( "VL" );
Wait( 1 );
dt << ungroup scripts( {"Graph Builder Line and Bar Charts", "Graph Builder Heat Map"} );

```

#### 例 2

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << group scripts(
	"GB",
	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts",
	"Graph Builder Line Chart", "Graph Builder Heat Map"}
);
dt << group scripts( "VL", {"Set Sex Value Labels", "Set Age Value Labels"} );
Wait( 1 );
dt << select scripts( {"Graph Builder Smoother Line", "Graph Builder Line Chart"} );
Wait( 1 );
dt << ungroup scripts();

```

### Unsubscribe

**構文:** obj &lt;&lt; Unsubscribe( Key, OnDeleteColumns| OnAddColumns| OnAddRows| OnDeleteRows| OnClose | OnColRename | All )

**説明:** データテーブルへの以前の登録をキャンセルする。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Subscribe( "myname", On Close( Print( "Closing Data table" ) ) );
dt << Unsubscribe( "myname", On Close );

```

### Update

**構文:** obj &lt;&lt; Update( With( Data Table( name )), Match Columns( column1 = column2, ...), Selected( columns ), Add columns from Update table(&lt;ALL&gt;, &lt;NONE&gt;, &lt;{column1, column2, ...}&gt;), Replace columns in main table(&lt;ALL&gt;, &lt;NONE&gt;, &lt;{column1, column2, ...}&gt;), &lt;Ignore missing&gt; )

**説明:** 元のデータテーブルに、より新しいデータを含むテーブルからデータを追加または置換して、データテーブルを更新する。

#### 例 1

```jsl

dt = Open( "$SAMPLE_DATA/Trial1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Little.jmp" );
dt << Update(
	With( Data Table( "Little" ) ),
	Match Columns( :popcorn = :popcorn, :batch = :batch, :oil amt = :oil )
);

```

#### 例 2

```jsl


dt1 = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt2 = New Table( "Little Class",
	Add Rows( 3 ),
	New Column( "name", Character, Nominal, Set Values( {"KATIE", "ALFRED", "HENRY"} ) ),
	New Column( "height", Continuous, Set Values( [999, 999, 999] ) ),
	New Column( "weight", Continuous, Set Values( [999, 999, 999] ) ),
	New Column( "RANK", Continuous, Set Values( [3, 1, 2] ) ),
	New Column( "CODE", Continuous, Set Values( [0, 1, 1] ) )
);
dt1 << Update(
	With( Data Table( "Little Class" ) ),
	Match Columns( :name = :name ),
	Add columns from Update table( {:RANK} ),
	Replace columns in Main Table( {:height} )
);

```

#### 例 3

```jsl


dt1 = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt2 = New Table( "Little Class",
	Add Rows( 3 ),
	New Column( "name", Character, Nominal, Set Values( {"KATIE", "ALFRED", "HENRY"} ) ),
	New Column( "height", Continuous, Set Values( [999, 999, 999] ) ),
	New Column( "weight", Continuous, Set Values( [999, 999, 999] ) ),
	New Column( "RANK", Continuous, Set Values( [3, 1, 2] ) ),
	New Column( "CODE", Continuous, Set Values( [0, 1, 1] ) )
);
dt1 << Update(
	With( Data Table( "Little Class" ) ),
	Match Columns( :name = :name ),
	Add columns from Update table( {:RANK} )
);

```

### Update From Database

**構文:** obj &lt;&lt; Update From Database( connectInfo )

**説明:** データテーブル内のデータを、データベースから再読み込みしたデータで更新する。

```jsl

dt = Open Database( "DSN=somedb; UID=userid;pwd=PW", "SELECT * FROM DB.TABLE" );
dt << Update From Database( "Connect Dialog" );

```

### XGBoost

**構文:** obj &lt;&lt; XGBoost

**説明:** XGBoostの試験的なインターフェース。XGBoostは、確率的勾配ブースティングに基づく予測を行う。

### set private

**構文:** obj &lt;&lt; set private( &lt;1|0&gt; )

**説明:** テーブルをプライベートにする。プライベートテーブルは、データテーブルのリストとSubscribeから除外される。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Show( Get Data Table List() );
Wait( 1 );

dt << Set Private;
Show( Get Data Table List() );
Wait( 1 );

dt << Set Private( 0 );
Show( Get Data Table List() );
Wait( 1 );

Close( dt, No Save );

```

## Column Scripting

### 項目のメッセージ

#### Add Column Properties

**構文:** obj &lt;&lt; Add Column Properties

**説明:** 選択した列にプロパティを追加する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Age << Add Column Properties( List Check( {17, 16, 15, 14, 13, 12} ) );

```

#### Add From Row States

**構文:** obj &lt;&lt; Add From Row States

**説明:** 行属性の列の値に、現在設定されている行属性を追加する。

```jsl

dt = Open( "$SAMPLE_DATA/Birth Death.jmp" );
dt << New Column( "Row State Col", Row State, Copy from Row States );
dt << Select Rows( 1 );
dt << Select Rows( 5 );
dt << Exclude();
col = Column( "Row State Col" );
col << Add From Row States();

```

#### Add To Row States

**構文:** obj &lt;&lt; Add To Row States

**説明:** 列に保存されている行属性値をすべて、データテーブルで使われる行の属性に追加する。

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Pickles.jmp" );
col = Column( "Time Marker" );
col << Copy To Row States();
col[5] = Color State( "Red" );
Wait( 2 );
col << Add To Row States();

```

#### Codes to Labels

**構文:** :col &lt;&lt; Codes To Labels(&lt;AssociativeArray&gt;|&lt;ListOfAssignments&gt;)

**説明:** 元データに付けられた値ラベルから文字値の列を作成する。

**JMP追加されたバージョン:** 17

**例 1**

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );
:age << Value Labels(
	{12 = "12!", 13 = "13!", 14 = "14!", 15 = "15!", 16 = "16!", 17 = "17!"}
);
:age << Codes to Labels;

```

**例 2**

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );
:sex << Labels to Codes( ["F" => 1, "M" => 2] );
:sex << Codes To Labels( [1 => "Female", 2 => "Male"] );

```

**例 3**

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );
:sex << Labels to Codes( ["F" => 1.5, "M" => 2.5] );
:sex << Codes To Labels( {1.5 = "Female", 2.5 = "Male"} );

```

#### Color Cell by Value

**構文:** obj &lt;&lt; Color Cell by Value( state=0|1 )

**説明:** 列内のセルの表示色を変更する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Age << Set Property(
	"Value Colors",
	{12 = -13977430, 13 = -3780930, 14 = -4157407, 15 = -13596965, 16 = -2210961, 17 =
	-10562523}
);
Wait( 1 );
:Age << Color Cell by Value( 1 );

```

#### Color Cells

**構文:** obj &lt;&lt; Color Cells( color, &lt;row | { row1, row2, ...} &gt; )

**説明:** 列のセルを指定の色で塗る。行が指定されない場合、列全体を同じ色で塗る。

**例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Age << Color Cells( "Red" );

```

**例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
a = {1, 3, 5};
:Age << Color Cells( "Red", a );

```

**例 3**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
a = {1, 3, 5};
b = {2, 4, 6};
:height << color cells( {{"Red", a}, {"blue", b}} );

```

#### Compact

**構文:** :col &lt;&lt; Compact( &lt;1|0&gt; )

**説明:** 文字タイプの列の内部構造を変更して、各値が1つだけ保存されるようにする。メモリの節約と処理の高速化につながる。オプションのSave Formatは、列の保存形式を制御する。圧縮形式はサイズが小さく、高速に読み込めるが、JMP 17以前のバージョンではテーブルを開くことができない。デフォルトでは環境設定の保存形式が使用される。

**JMP追加されたバージョン:** 18

**例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Air Traffic.jmp" );
:Airline << Compact();

```

**例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Air Traffic.jmp" );
:Airline << Compact();
:Airline << Get Compact;

```

#### Convert to Table Column

**構文:** obj &lt;&lt; Convert to Table Column

**説明:** 変換列をデータテーブルに追加する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Transform Column( "New Col", Formula( 1 ) );
:NewCol << Convert to Table Column();

```

#### Copy from Row States

**構文:** obj &lt;&lt; Copy from Row States

**説明:** 現在のデータテーブルにおけるすべての行属性を列にコピーする。

```jsl

dt = Open( "$SAMPLE_DATA/Birth Death.jmp" );
dt << New Column( "Row State Col", Row State, Copy from Row States );

```

#### Copy to Row States

**構文:** obj &lt;&lt; Copy to Row States

**説明:** 列に保存されている行属性値をすべて、データテーブルで使われる行の属性にコピーする。

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Pickles.jmp" );
col = Column( "Time Marker" );
Wait( 2 );
col << Copy To Row States();

```

#### Data Type

**構文:** obj &lt;&lt; Data Type( "Numeric"|"Character"|"Expression"|"Row State", &lt;Format("format string")&gt;, &lt;Input Format("format string")&gt;, &lt;1|2|4&gt;, &lt; &lt;&lt;Fail On Conversion Error &gt;, &lt; &lt;&lt;Return Failed Rows &gt; )

**説明:** 列のデータタイプを設定する。オプションの引数を使って表示形式、入力形式、列が数値の場合は幅(バイト)も設定できる。Fail On Conversion Errorは、いずれかの値の変換に失敗した場合にデータタイプの変更を中止する。これは、文字タイプの列を数値タイプの列に変換するときに特に便利。Return Failed Rowsは、変換に失敗した行の番号をリストで戻す。

**例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Time",
	"Character",
	"Nominal",
	Set Values( {"13:32", "20:10", "20:12", "14:56"} )
);
Wait( 2 );
dt:Time << Set Data Type( "Numeric", Format( "h:m", 12 ), Input Format( "h:m" ) );
dt:Time << Set Modeling Type( "Continuous" );

```

**例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
dt:Age << Set Data Type( "Character" );
dt:Height << Set Data Type( "Numeric", 2 );

```

**例 3**

```jsl

dt = New Table( "My Table",
	New Column( "col1",
		Character,
		"Nominal",
		Set Values( {"123", "456", "abc", "789", "", "def"} )
	)
);
r = dt:col1 << Set Data Type( "Numeric", <<Fail On Conversion Error, <<Return Failed Rows );
Show( r );

```

**例 4**

```jsl

dt = New Table( "My Table",
	New Column( "col1",
		Character,
		"Nominal",
		Set Values( {"123", "456", "abc", "789", "", "def"} )
	)
);
r = dt:col1 << Set Data Type( "Numeric", <<Return Failed Rows );
Show( r );

```

#### Delete Formula

**構文:** obj &lt;&lt; Delete Formula

**説明:** 列の計算式をすべて削除する。

```jsl

dt = Open( "$SAMPLE_DATA/Bank Loan.jmp" );
:Time << Delete Formula;

```

#### Delete Property

**構文:** obj &lt;&lt; Delete Property( property name )

**説明:** 指定されたプロパティを列から削除する。

```jsl

dt = Open( "$SAMPLE_DATA/Bank Loan.jmp" );
:Time << Delete Property( "Spec Limits" );

```

#### Eval Formula

**構文:** obj &lt;&lt; Eval Formula

**説明:** 列の計算式を評価する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
col = New Column( "Ratio" );
col << Set Formula( :Height / :Weight );
col << Eval Formula;

```

#### Format

**構文:** obj &lt;&lt; Format( "Best|Fixed Dec...", &lt;width&gt;, &lt;dec&gt;, &lt;"Use Thousands Separator"&gt; )obj &lt;&lt; Format( "mdy|ddmmyy|Long Date...", width )obj &lt;&lt; Format( "Format Pattern", pattern )obj &lt;&lt; Format("Currency", &lt;Country symbol&gt;, &lt;width&gt;, &lt;"Use Thousands Separator"&gt; ) obj &lt;&lt; Format("Use Thousands Separator" )

**説明:** 列内のデータを表示するための形式を設定する。表示形式としては、列情報ダイアログの[表示形式]で設定できるすべての形式が指定できる。

**例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Height << Format( "Fixed Dec", 6, 3 );

```

**例 2**

```jsl

dt = Open( "$SAMPLE_DATA/XYZ Stock Averages (plots).jmp" );
:Date << Format( "ddMonyyyy", 9 );
:DJI High << Format( "Currency" );
:DJI Close << Format( "best", "Use Thousands Separator", 10, 0 );
:DJI Low << Format( "Fixed Dec", "Use Thousands Separator", 10, 2 );

```

**例 3**

```jsl

dt = New Table( "hour24_times",
	Add Rows( 3 ),
	New Column( "time",
		Continuous,
		Format( "Format Pattern", "<hh24><:><mm><:><ss>" ),
		Set Values( {"01:23:45", "18:19:20", "23:45:01"} )
	)
);

```

#### Formula

**構文:** obj &lt;&lt; Set Formula( formula ) obj &lt;&lt; Formula( formula )

**説明:** 列に計算式を設定する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
col = New Column( "Ratio" );
col << Set Formula( :Height / :Weight );

```

#### Get Column Properties

**構文:** obj &lt;&lt; Get Column Properties

**説明:** 選択した列に定義されているすべてのプロパティをコピーする。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
:HARDNESS << Get Column Properties();

```

#### Get Compact

**構文:** obj &lt;&lt; Get Compact

**説明:** 列がコンパクトに設定されているかどうか。

**JMP追加されたバージョン:** 18

**例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Air Traffic.jmp" );
Show( :Airline << Get Compact );

```

**例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Air Traffic.jmp" );
:Airline << Compact();
Show( :Airline << Get Compact );

```

#### Get Data Table

**構文:** obj &lt;&lt; Get Data Table

**説明:** 該当の列を含んでいるデータテーブルを取得する。

**JMP追加されたバージョン:** 14

```jsl

dt1 = Open( "$SAMPLE_DATA/Big Class.jmp" );
c = Column( dt1, "Age" );
Show( c << Get Name, c << Get Data Table );

```

#### Get Data Type

**構文:** obj &lt;&lt; Get Data Type( &lt;"English"&gt; )

**説明:** 列のデータタイプを戻す。キーワードの"English"を指定しない場合、データタイプは現在JMPで使用している言語で戻される。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
which = dt:Age << Get Data Type;
Show( which );

```

#### Get Data Type Length

**構文:** obj &lt;&lt; Get Data Type Length( &lt;English&gt; )

**説明:** 列のデータタイプとデータ長を戻す。ほとんどの文字タイプの列のようにデータ長が固定されていない場合は、データタイプのみを戻す。

**例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
which = dt:Age << Get Data Type Length;
Show( which );

```

**例 2**

```jsl

dt = New Table( "Little Class",
	Add Rows( 3 ),
	New Column( "name", Character( 8 ), Nominal, Set Values( {"KATIE", "CAROL", "MARTHA"} ) ),
	New Column( "Age", Numeric( 2 ), Set Values( [12, 14, 16] ) )
);
nameTypeLength = dt:Name << Get Data Type Length;
ageTypeLength = dt:Age << Get Data Type Length;
Show( nameTypeLength, ageTypeLength );

```

#### Get Display Width

**構文:** obj &lt;&lt; Get Display Width

**説明:** 列の表示幅を取得する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 0 );
w = :Height << Get Display Width;

```

#### Get Excluded

**構文:** obj &lt;&lt; Get Excluded

**説明:** 列が除外されている場合に1を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
s = :Weight << Get excluded;
Show( s );

```

#### Get Field Width

**構文:** obj &lt;&lt; Get Field Width

**説明:** データを表示するのに使用されている、列のフィールド幅を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
width = :Height << Get Field Width;
Show( width );

```

#### Get Format

**構文:** obj &lt;&lt; Get Format

**説明:** 列の形式を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
f = :Height << Get Format;
Show( f );

```

#### Get Formula

**構文:** obj &lt;&lt; Get Formula

**説明:** 列の計算式を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
col = New Column( "Ratio" );
col << Set Formula( :Height / :Weight );
col << Eval Formula;
result = col << Get Formula;
Show( result );

```

#### Get Group Name

**構文:** obj &lt;&lt; Get Group Name

**説明:** この列を含む列グループの名前またはパスを戻す。

**JMP追加されたバージョン:** 19

**シンプルなグループ**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Group Columns( :height, 2 );
Show( :height << Get Group Name );

```

**入れ子のグループ**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Group Columns( "XYZ", :sex, 3 );
dt << Group Columns( Path( "XYZ", "Measures" ), :height, 2 );
Show( :height << Get Group Name );

```

#### Get Header Background Color

**構文:** obj &lt;&lt; Get Header Background Color

**説明:** ヘッダの色を取得する。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:height << Set Header Background Color( "Light Red" );
Show( :height << Get Header Background Color );

```

#### Get Header Chart Type

**構文:** obj &lt;&lt; Get Header Chart Type

**説明:** データテーブルの列のヘッダに表示するグラフの種類を取得する。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Show( :height << Get Header Chart Type );

```

#### Get Header Text Color

**構文:** obj &lt;&lt; Get Header Text Color

**説明:** ヘッダのテキストの色を取得する。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:height << Set Header Text Color( "Dark Purple" );
Show( :height << Get Header Text Color );

```

#### Get Hidden

**構文:** obj &lt;&lt; Get Hidden

**説明:** 列が非表示の場合に1を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
s = :Weight << Get hidden;
Show( s );

```

#### Get Initial Data

**構文:** obj &lt;&lt; Get Initial Data

**説明:** 列のデータの初期化に使用された値または式を取得する。

```jsl

dt = New Table( "MyDt" );
dt << Add Rows( 5 );
Column( dt, 1 ) << set initial data( Log( 1 ) );
Column( dt, 1 ) << get initial data;

```

#### Get Input Format

**構文:** obj &lt;&lt; Get Input Format

**説明:** 列にデータを入力する時に使用される形式を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Stock Prices.jmp" );
f = :Date << Get Input Format;
Show( f );

```

#### Get Labeled

**構文:** obj &lt;&lt; Get Labeled

**説明:** 列がラベルありに設定されている場合に1を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
s = :Weight << Get labeled;
Show( s );

```

#### Get List Check

**構文:** obj &lt;&lt; Get List Check

**説明:** リストチェックを戻す(列に定義されている場合)。

```jsl

dt = Open( "$SAMPLE_DATA/Movies.jmp" );
prop = :Type << Get List Check;
Show( prop );

```

#### Get Lock

**構文:** obj &lt;&lt; Get Lock

**説明:** 列がロックされている場合、真を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Cytometry.jmp" );
lock = :Prin1 << Get Lock;
Show( lock );

```

#### Get Modeling Type

**構文:** obj &lt;&lt; Get Modeling Type( &lt;"English"&gt; )

**説明:** 列の尺度を戻す。キーワードの"English"を指定しない場合、尺度は現在JMPで使用している言語で戻される。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
which = :Age << Get Modeling Type;
Show( which );

```

#### Get Name

**構文:** obj &lt;&lt; Get Name

**説明:** 列の名前を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
col name = Column( 4 ) << Get Name;
Show( col name );

```

#### Get Properties List

**構文:** obj &lt;&lt; Get Properties List

**説明:** この列に設定されたすべてのプロパティの名前のリストを取得する。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
:HARDNESS << Get Properties List();

```

#### Get Property

**構文:** obj &lt;&lt; Get Property( Notes| Range Check| List Check| Missing Value Codes| Value Labels| Value Scores | Value Order | Value Colors| Color Gradient| Axis| Units| Response Limits| Design Role| Coding| Mixture| Factor Changes | Spec Limits| Control Limits| Process Screening | Sigma| Process Capability Distribution| MSA | Distribution | Time Frequency| Map Role| Super Categories | Multiple Response | Target Level | Control Level| Profit Matrix | Expression Role | Event Handler | Link ID | Link Reference | Next In Hierarchy )

**説明:** 指定のプロパティを戻す(列に定義されている場合)。

```jsl

dt = Open( "$SAMPLE_DATA/Bank Loan.jmp" );
prop = :Credit Check << Get Property( "Axis" );
Show( prop );

```

#### Get Range Check

**構文:** obj &lt;&lt; Get Range Check

**説明:** 範囲チェックを戻す(列に定義されている場合)。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Height << Range Check( LE LT( 48, 75 ) );
check = :Height << Get Range Check;
Show( check );

```

#### Get Role

**構文:** obj &lt;&lt; Get Role( &lt;"English"&gt; )

**説明:** 列の役割を戻す。キーワードの"English"を指定しない場合、役割は現在JMPで使用している言語で戻される。

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
which = :Count << Get Role();
Show( which );

```

#### Get Script

**構文:** obj &lt;&lt; Get Script

**説明:** 列を再作成するスクリプトを戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
s = :Age << Get Script;
Show( s );

```

#### Get Scroll Locked

**構文:** obj &lt;&lt; Get Scroll Locked

**説明:** 列がスクロールロックされている場合に1を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
s = :Weight << Get Scroll locked;
Show( s );

```

#### Get Selected

**構文:** obj &lt;&lt; Get Selected

**説明:** 列が選択されている場合、1を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
s = :Weight << Get Selected;
Show( s );

```

#### Get Stored Values

**構文:** obj &lt;&lt; Get Stored Values

**説明:** 列の値を、「欠測値のコード」列プロパティを無視して、そのまま戻す

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Height << Set Property( "Missing Value Codes", 65 );
valuesMatrix = :Height << Get Stored Values;
Show( valuesMatrix );
valuesList = :Height << GetStoredValues(
	Format(/* a numeric column will be list of character items if a format is supplied, see format function */
		"Currency",
		"EUR",
		2,
		<<use locale(
			0 /* ignore locale and use period for decimal.  the default is 1: use the locale. */
		)
	)
);
Show( valuesList );

```

#### Get Use Value Labels

**構文:** obj &lt;&lt; Get Use Value Labels

**説明:** 「値ラベルの使用」のオン/オフの状態を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
flag = :Color << Get Use Value Labels;
Show( flag );

```

#### Get Value Labels

**構文:** obj &lt;&lt; Get Value Labels

**説明:** 値ラベルを戻す(列に定義されている場合)。

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
values = :Color << Get Value Labels;
Show( values );

```

#### Get Values

**構文:** obj &lt;&lt; Get Values

**説明:** 列の値を戻す。

**例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
valuesMatrix = :Height << Get Values;
Show( valuesMatrix );
valuesList = :Height << GetValues(
	Format(/* a numeric column will be list of character items if a format is supplied, see format function */
		"Currency",
		"EUR",
		2,
		<<use locale(
			0 /* ignore locale and use period for decimal.  the default is 1: use the locale. */
		)
	)
);
Show( valuesList );

```

**例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Height << Set Property( "Missing Value Codes", 65 );
valuesMatrix = :Height << Get Values;
Show( valuesMatrix );
valuesList = :Height << GetValues(
	Format(/* a numeric column will be list of character items if a format is supplied, see format function */
		"Currency",
		"EUR",
		2,
		<<use locale(
			0 /* ignore locale and use period for decimal.  the default is 1: use the locale. */
		)
	)
);
Show( valuesList );

```

#### Ignore Errors

**構文:** obj &lt;&lt; Ignore Errors( state=0|1 )

**説明:** 列計算式の評価時のエラーを無視するかどうかのフラグを設定する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
col = New Column( "Ratio" );
col << Set Formula( :Height / :Weight );
col << ignore errors( true );

```

#### Input Format

**構文:** obj &lt;&lt; Input Format( format )obj &lt;&lt; Input Format( "Format Pattern", pattern )

**説明:** 列にデータを入力する時に使用される形式を設定する。これは、日付や時間を入力する時によく使用される。

**例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Stock Prices.jmp" );
:Date << Input Format( "ddmmyyyy" );

```

**例 2**

```jsl

dt = New Table( "duration_table",
	Add Rows( 3 ),
	New Column( "durations",
		Continuous,
		Format( "Format Pattern", "<Hour><:><mm><:><ss>" ),
		Input Format( "Format Pattern", "<Hour>h <mm>m <ss>s" ),
		Set Values( {"65h 43m 21s", "12h 34m 56s", "4h 32m 10s"} )
	)
);

```

#### Is Transform Column

**構文:** obj &lt;&lt; Is Transform Column

**説明:** 列が変換列である場合は1、そうでない場合は0を戻す。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:height << Is Transform Column();

```

#### IsTransformedOnSASExport

**構文:** obj &lt;&lt; IsTransformedOnSASExport

**説明:** SASデータセットへ書き出す際に、データが変更される場合に真を戻す。注: SASとJMPでは日付が異なって保存されるので、これは日付の列にのみ適用される。

```jsl

dt = Open( "$SAMPLE_DATA/Stock Prices.jmp" );
flag = :Date << Is Transformed On SAS Export;
Show( flag );

```

#### Labels to Codes

**構文:** :col &lt;&lt; Labels to Codes(&lt;AssociativeArray&gt;|&lt;ListOfAssignments&gt;)

**説明:** 文字値の列を、数値コードの列に変換する。作成された数値コードにはラベルが付与される。

**JMP追加されたバージョン:** 17

**例 1**

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );
:sex << Labels to Codes;

```

**例 2**

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );
:sex << Labels to Codes( ["F" => 10, "M" => 20] );

```

**例 3**

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );
:sex << Labels to Codes( {"F" = 10, "M" = 20} );

```

#### Lock

**構文:** obj &lt;&lt; Lock

**説明:** どのような変更も行われないように列をロックする。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Age << Lock( 1 );

```

#### Preselect Role

**構文:** obj &lt;&lt; Preselect Role( "役割なし"|"X"|"Y"|"重み"|"度数"|"検証" )

**説明:** 役割を列に割り当てる。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Weight << Preselect Role( "Y" );

```

#### Remove Value Labels

**構文:** obj &lt;&lt; Remove Value Labels

**説明:** 列に定義されている値ラベルをすべて削除する。

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
:Color << Remove Value Labels;

```

#### Reset Transform

**構文:** obj &lt;&lt; Reset Transform

**説明:** 変換列のキャッシュデータを削除する。列のデータにアクセスするとキャッシュが再び構築される。これを利用することで、メモリを減らしたり、外部情報に依存する計算式の再計算を可能にしたりできる。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
global:a = 2;
dt << Transform Column( "sqrt[height]", Formula( global:a * Sqrt( :height ) ) );
Show( :"sqrt[height]"n[1] );
global:a = 3;
:"sqrt[height]"n << Reset Transform();
Show( :"sqrt[height]"n[1] );

```

#### Set Data Type

**構文:** obj &lt;&lt; Set Data Type( "Numeric"|"Character"|"Expression"|"Row State", &lt;Format("format string")&gt;, &lt;Input Format("format string")&gt;, &lt;1|2|4&gt;, &lt; &lt;&lt;Fail On Conversion Error &gt;, &lt; &lt;&lt;Return Failed Rows &gt; )

**説明:** 列のデータタイプを設定する。オプションの引数を使って表示形式、入力形式、列が数値の場合は幅(バイト)も設定できる。Fail On Conversion Errorは、いずれかの値の変換に失敗した場合にデータタイプの変更を中止する。これは、文字タイプの列を数値タイプの列に変換するときに特に便利。Return Failed Rowsは、変換に失敗した行の番号をリストで戻す。

**例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Time",
	"Character",
	"Nominal",
	Set Values( {"13:32", "20:10", "20:12", "14:56"} )
);
Wait( 2 );
dt:Time << Set Data Type( "Numeric", Format( "h:m", 12 ), Input Format( "h:m" ) );
dt:Time << Set Modeling Type( "Continuous" );

```

**例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
dt:Age << Set Data Type( "Character" );
dt:Height << Set Data Type( "Numeric", 2 );

```

**例 3**

```jsl

dt = New Table( "My Table",
	New Column( "col1",
		Character,
		"Nominal",
		Set Values( {"123", "456", "abc", "789", "", "def"} )
	)
);
r = dt:col1 << Set Data Type( "Numeric", <<Fail On Conversion Error, <<Return Failed Rows );
Show( r );

```

**例 4**

```jsl

dt = New Table( "My Table",
	New Column( "col1",
		Character,
		"Nominal",
		Set Values( {"123", "456", "abc", "789", "", "def"} )
	)
);
r = dt:col1 << Set Data Type( "Numeric", <<Return Failed Rows );
Show( r );

```

#### Set Display Width

**構文:** obj &lt;&lt; Set Display Width( number )

**説明:** 列の表示幅を変更する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 0 );
w = :Height << Get Display Width;
:Height << Set Display Width( 2 * w );

```

#### Set Each Value

**構文:** obj &lt;&lt; Set Each Value( number )

**説明:** 列のすべての値を、指定された定数に設定する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "X" );
dt:X << Set Each Value( 5 );

```

#### Set Excluded

**構文:** obj &lt;&lt; Set Excluded

**説明:** 列を除外する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Weight << Set excluded;

```

#### Set Field Width

**構文:** obj &lt;&lt; Set Field Width( number )

**説明:** データを表示するのに使用される、列のフィールド幅を設定する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Height << Set Field Width( 20 );

```

#### Set Formula

**構文:** obj &lt;&lt; Set Formula( formula ) obj &lt;&lt; Formula( formula )

**説明:** 列に計算式を設定する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
col = New Column( "Ratio" );
col << Set Formula( :Height / :Weight );

```

#### Set Header Background Color

**構文:** obj &lt;&lt; Set Header Background Color

**説明:** ヘッダの色を設定する。デフォルトの色を使用する場合は「None」を指定する。

**JMP追加されたバージョン:** 18

**例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:height << Set Header Background Color( "Light Red" );

```

**例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:height << Set Header Background Color( {250, 200, 150} );

```

#### Set Header Chart Type

**構文:** obj &lt;&lt; Set Header Chart Type

**説明:** データテーブルの列のヘッダに表示するグラフの種類を設定する。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:height << Set Header Chart Type( "Run Chart" );

```

#### Set Header Text Color

**構文:** obj &lt;&lt; Set Header Text Color

**説明:** ヘッダのテキストの色を設定する。デフォルトの色を使用する場合は「None」を指定する。

**JMP追加されたバージョン:** 18

**例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:height << Set Header Text Color( "Dark Purple" );

```

**例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:height << Set Header Text Color( {100, 50, 100} );

```

#### Set Hidden

**構文:** obj &lt;&lt; Set Hidden

**説明:** 列を非表示にする。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Weight << Set hidden;

```

#### Set Initial Data

**構文:** obj &lt;&lt; Set Initial Data

**説明:** 任意の定数または簡単な式を指定して列のデータを初期化する。

**例 1**

```jsl

dt = New Table( "MyDt", New Column(), New Column() );
dt << Add Rows( 5 );
Column( dt, 1 ) << set initial data( Today() );
Column( dt, 2 ) << set initial data( 99 );

```

**例 2**

```jsl

dt = New Table( "MyDt" );
dt << Add Rows( 5 );
Column( dt, 1 ) << set initial data( Log( 1 ) );

```

#### Set Labeled

**構文:** obj &lt;&lt; Set Labeled

**説明:** その列のデータ値をラベルに使用する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Weight << Set labeled;

```

#### Set Modeling Type

**構文:** obj &lt;&lt; Set Modeling Type( "なし"|"連続尺度"|"順序尺度"|"名義尺度"|"行の属性"|"多重応答"|"非構造化テキスト"|"ベクトル" )

**説明:** データテーブル列の尺度を設定する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Age << Set Modeling Type( "Continuous" );

```

#### Set Name

**構文:** obj &lt;&lt; Set Name( name )

**説明:** 列名を設定する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Age << Set Name( "Time" );

```

#### Set Property

**構文:** obj &lt;&lt; Set Property( Notes | List Check | Range Check | Axis | Spec Limits | Control Limits | Sigma | Process Capability Distribution | Coding | Mixture | Design Role | Response Limits | Units | Value Order | Value Labels | Value Scores | Row Order Levels | Distribution | Time Frequency | Value Colors | Color Gradient | Missing Value Codes | Factor Change | Map Role | Supercategories | Multiple Response | Profit Matrix | Informative Missing | Expression Role | Link ID | Link Reference | Event Handler | Custom Property, {argument list} )

**説明:** 列のプロパティを設定する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Weight << Set Property( "Units", lbs );

```

#### Set Scroll Locked

**構文:** obj &lt;&lt; Set Scroll Locked

**説明:** 列をスクロールロックする。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Weight << Set Scroll locked;

```

#### Set Selected

**構文:** obj &lt;&lt; Set Selected( state=0|1 )

**説明:** 列を選択する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Height << Set Selected( 1 );

```

#### Set Use for Marker

**構文:** obj &lt;&lt; Set Use for Marker

**説明:** グラフのマーカーとしてこの列の値を使う。画像や文字列もマーカーとして使用できる。

**JMP追加されたバージョン:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Name << Set Use for Marker;

```

#### Set Values

**構文:** obj &lt;&lt; Set Values( [ value1, value2, value3, ... ] )

**説明:** 列に値を設定する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Column( "X" );
:X << Set Values(
	[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9,
	10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
);

```

#### SetLock

**構文:** obj &lt;&lt; SetLock

**説明:** どのような変更も行われないように列をロックする。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Age << Lock( 1 );

```

#### Suppress Eval

**構文:** obj &lt;&lt; Suppress Eval( state=0|1 )

**説明:** 列の計算式の自動評価を抑制する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
col = New Column( "Ratio" );
col << Set Formula( :Height / :Weight );
col << suppress eval( true );

```

#### Use Value Labels

**構文:** obj &lt;&lt; Use Value Labels( state=0|1 )

**説明:** すべての出力において値ラベルを表示するかどうかを指定する。

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
:Color << Use Value Labels( 1 );
Distribution( Column( :Color ) );

```

#### Value Labels

**構文:** obj &lt;&lt; Value Labels( { value1 = "label1", value2 = "label2", ... } )

**説明:** 値ラベルを設定する

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:sex << Value Labels( {"F" = "Female", "M" = "Male"} );

```

## Data Table Cols

### 関連するコンストラクター

#### Column

**構文:** Column( &lt;data table&gt;, "column name"|column number )

**説明:** 指定のデータテーブル列への参照を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
col = Column( "height" );

```

### 項目のメッセージ

#### Add Multiple Columns

**構文:** obj &lt;&lt; Add Multiple Columns( Column prefix, number of columns, &lt;before first|after last|after(column)&gt;, Character|Numeric|Row State, &lt;fieldwidth(number)&gt; )

**説明:** 現在のデータテーブルに複数の新しい列を作成する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Add Multiple Columns( "Date", 5, Character );

```

#### Clear Column Selection

**構文:** obj &lt;&lt; Clear Column Selection

**説明:** データテーブルの選択された列をクリアする。

```jsl

dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
dt << Go To( :BP 12F );
Wait( 2 );
dt << Clear Column Selection();

```

#### Clone Formula Column

**構文:** obj &lt;&lt; Clone Formula Column( column, n, &lt;Substitute Column Reference( column1, list )&gt; )

**説明:** 指定したcolumnに基づいてn個の新しい計算式列を作成する。元の計算式にあるcolumn1への列参照は、 n 個すべての列についてlist内の各列に置き換えられる。元の計算式から複数の列参照を置き換える場合は、複数のSubstitute Column Reference引数を使用する。

```jsl

dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
dt << New Column( "Day 1", Formula( (:BP 8M + :BP 12M + :BP 6M) / 3 ) );
list1 = {:BP 8W, :BP 8F};
list2 = {:BP 12W, :BP 12F};
list3 = {:BP 6W, :BP 6F};
dt << Clone Formula Column(
	"Day 1",
	2,
	Substitute Column Reference( :BP 8M, list1 ),
	Substitute Column Reference( :BP 12M, list2 ),
	Substitute Column Reference( :BP 6M, list3 )
);

```

#### Columns Manager

**構文:** obj &lt;&lt; Columns Manager

**説明:** 現在のテーブルで列マネージャーを開き、列のプロパティや統計量を表示する。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
col1 = dt << Columns Manager;

```

#### Combine Columns

**構文:** obj &lt;&lt; Combine Columns

**説明:** 複数の列に含まれているデータ値を、区切り文字で区切ったテキストにして1つの列に含める。

**例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
dt << Combine Columns(
	delimiter( "," ),
	Columns(
		:Brush After Waking Up, :Brush After Meal, :Brush Before Sleep, :Brush Another Time
	),
	Selected Columns are Indicator Columns( 1 ),
	Column Name( "When to Brush" )
);

```

**例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
dt << Combine Columns(
	delimiter( "," ),
	Columns(
		:Brush After Waking Up, :Brush After Meal, :Brush Before Sleep, :Brush Another Time
	),
	Column Name( "When to Brush" )
);

```

#### Compress Selected Columns

**構文:** obj &lt;&lt; Compress Selected Columns( { column1, column2, ... )

**説明:** 各列を最もコンパクトな形式に圧縮する。

文字データは水準が255個より少ない場合、1バイトとなる。

数値データはデータが-127から127までの間の場合、1バイトとなる。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Compress Selected Columns( {:Age, :sex, :Height, :Weight} );

```

#### Exclude/Unexclude

**構文:** obj &lt;&lt; Exclude( 0|1 )

**説明:** 分析の実行から列を除外する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:Name << Exclude( 1 );

```

#### Formula

**構文:** obj &lt;&lt; Formula

**説明:** 列に計算式を設定する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
col1 = dt << New Column( "Ratio", Numeric, Continuous );
col1 << Formula( :height / :weight );

```

#### Freq

**構文:** obj &lt;&lt; Preselect Role( Freq )

**説明:** データテーブルの列に[度数]の役割を割り当てる。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
col = Column( "weight" );
col << Preselect Role( "freq" );

```

#### Go to

**構文:** obj &lt;&lt; Go to( column name|column number )

**説明:** データテーブルの指定された列を選択し、その列まで移動する。

```jsl

dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
dt << Go to( :BP 12F );

```

#### Hide/Unhide

**構文:** obj &lt;&lt; Hide( 0|1 )

**説明:** データグリッド上に列を表示しない。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:Age << Hide( 1 );

```

#### Invert Column Selection

**構文:** obj &lt;&lt; Invert Column Selection( &lt;list of columns&gt; )

**説明:** 現在の列の選択状態を逆転する。列のリストが指定された場合、リストにない列を選択する。

**例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:age << Set Selected( 1 );
dt:height << Set Selected( 1 );
Wait( 1 );
b = dt << Invert Column Selection;

```

**例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
a = {:height, :weight};
b = dt << Invert Column Selection( a );

```

#### Label/Unlabel

**構文:** obj &lt;&lt; Label( 0|1 )

**説明:** この列を、グラフ上で点を識別するためのラベルとして設定する。点を選択すると、列の値が表示される。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:Age << Label( 1 );

```

#### Make Indicator Columns

**構文:** obj &lt;&lt; Make Indicator Columns

**説明:** 選択した列から指示変数の列を作成する

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );
dt << Make Indicator Columns( columns( {:species, :season} ) );

```

#### Move Selected Columns

**構文:** obj &lt;&lt; Move Selected Columns( column|column list, To first|To last|After(column)|after(group)|after(Path({&lt;a&gt;, &lt;b&gt;, ...}) )

**説明:** データテーブルの選択された列を移動する。

**After column**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Go To( :Age );
Wait( 2 );
dt << Move Selected Columns( After( :sex ) );

```

**After group**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << group Columns( "Measures", {:height, :weight} );
dt << Go To( :Age );
Wait( 2 );
dt << Move Selected Columns( After( "Measures" ) );

```

**Input list**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Move Selected Columns( {:height, :weight}, After( :name ) );

```

**To last**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Go To( :Age );
Wait( 2 );
dt << Move Selected Columns( To last );

```

#### New Column

**構文:** obj &lt;&lt; New Column( &lt;name&gt;, &lt;data type&gt;, &lt;modeling type&gt;, &lt;Format()&gt;, &lt;Formula()&gt;, &lt;Set Property()&gt;, &lt;Set Values()&gt;, &lt;Like()&gt; )

**説明:** 現在のデータテーブルに新しい列を作成する。

**Like**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "like name", Like( :name ) );

```

**テーブルの新規作成**

```jsl

New Table( "test",
	Add Rows( 5 ),
	New Column( "name",
		Character( 8 ),
		Nominal,
		Set Values( {"KATIE", "LOUISE", "JANE", "JACLYN", "LILLIE"} )
	),
	New Column( "age",
		Numeric,
		Ordinal,
		Format( "Fixed Dec", Use thousands separator( 0 ), 5, 0 ),
		Set Values( [12, 12, 12, 12, 12] )
	),
	New Column( "code",
		Character( 2 ),
		Nominal,
		Set Values( {"AA", "AA", "BB", "BB", "AA"} )
	)
);

```

**単純な例**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "X", Formula( Random Uniform() ) );

```

#### New Formula Column

**構文:** dt &lt;&lt; New Formula Column(Operation(name, &lt;Category(name)&gt;), Columns(columns), &lt;Group By(columns)&gt;)

**説明:** 指定した列を使い、演算とオプションのグループ列を適用してテーブル内に計算式列を作成する。必要であれば、計算方法を明確にするためにカテゴリを指定できる。作成された列への列参照のリストを戻す。

**JMP追加されたバージョン:** 17

**Log 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Formula Column( Operation( "Log 2" ), Columns( :height, :weight ) );

```

**グループ別**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Formula Column(
	Operation( "Mean" ),
	Columns( :height, :weight ),
	Group By( :age )
);

```

#### Next Selected Column

**構文:** obj &lt;&lt; Next Selected Column

**説明:** 次に選択されている列に移動する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:age << Set Selected( 1 );
dt:height << Set Selected( 1 );
Wait( 1 );
dt << Next Selected Column;
Wait( 2 );
dt << Next Selected Column;

```

#### No Role

**構文:** obj &lt;&lt; Preselect Role( No Role )

**説明:** データテーブルの列に割り当てられた役割を削除する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Weight << Preselect Role( "No Role" );

```

#### Original Order

**構文:** obj &lt;&lt; Original Order

**説明:** データテーブルにおける列の並びを元の順序に戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Go To( :Age );
dt << Move Selected Columns( To last );
Wait( 2 );
dt << Original Order();

```

#### Paste Column Properties

**構文:** obj &lt;&lt; Paste Column Properties

**説明:** クリップボードから、リスト形式で持たれている複数の列プロパティを、複数の列に貼り付ける。対象とする列をデータテーブルで選択する代わりに、列のリストを引数に指定することもできる。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << Copy Column Properties( {:MODULUS, :ELONG} );
dt2 = New Table( "test it",
	New Column( "T1", numeric, continuous ),
	New Column( "T2", numeric, continuous ),
	New Column( "T3", numeric, continuous ),
	Add Rows( 10 )
);
dt2 << Paste Column Properties( {:T1, :T3} );

```

#### Previous Selected Column

**構文:** obj &lt;&lt; Previous Selected Column

**説明:** 前に選択されている列に移動する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:age << Set Selected( 1 );
dt:height << Set Selected( 1 );
Wait( 1 );
dt << Next Selected Column;
dt << Next Selected Column;
Wait( 2 );
dt << Previous Selected Column;

```

#### Reorder by Data Type

**構文:** obj &lt;&lt; Reorder by Data Type

**説明:** データテーブルの列をデータタイプで並べ替える。

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
Wait( 1 );
dt << Reorder By Data Type();

```

#### Reorder by Modeling Type

**構文:** obj &lt;&lt; Reorder by Modeling Type

**説明:** データテーブルの列を尺度で並べ替える。

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
Wait( 1 );
dt << Reorder By Modeling Type();

```

#### Reorder by Name

**構文:** obj &lt;&lt; Reorder by Name

**説明:** データテーブルの列を列名で並べ替える。

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
Wait( 1 );
dt << Reorder By Name();

```

#### Reverse Order

**構文:** obj &lt;&lt; Reverse Order

**説明:** データテーブルにおける列の並び順を、そっくり逆にする。

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
Wait( 1 );
dt << Reverse Order();

```

#### Set Label Columns

**構文:** obj &lt;&lt; Set Label Columns( column(s) )

**説明:** データテーブルの選択された列にラベルの役割を割り当てる。

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
Wait( 1 );
dt << Set Label Columns( :City, :State );

```

#### Set Scroll Lock Columns

**構文:** obj &lt;&lt; Set Scroll Lock Columns( column(s) )

**説明:** データテーブルの特定の列をスクロールされないようにロックする。背景色が変わって、列がロックされていることが示される。

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << Set Scroll Lock Columns( :City );

```

#### Text to Columns

**構文:** obj &lt;&lt; Text to Columns

**説明:** 区切り文字で区切ったテキストから、テキストごとの列もしくは指示変数の列を作成する。

**例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
dt << Text To Columns( delimiter( "," ), columns( :Brush Delimited ) );

```

**例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
dt << Text To Columns(
	delimiter( "," ),
	columns( :Brush Delimited ),
	Make Indicator Columns( 1 )
);

```

#### Use for Marker

**構文:** obj &lt;&lt; UseForMarker( 0|1 )

**説明:** グラフのマーカーとしてこの列の値を使う。画像や文字列もマーカーとして使用できる。

**JMP追加されたバージョン:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:Name << UseForMarker( 1 );

```

#### Validation

**構文:** obj &lt;&lt; Preselect Role( Validation)

**説明:** データテーブルの列に[検証]の役割を割り当てる。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
col = Column( "age" );
col << Preselect Role( "Validation" );

```

#### Weight

**構文:** obj &lt;&lt; Preselect Role( Weight )

**説明:** データテーブルの列に[重み]の役割を割り当てる。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:Weight << Preselect Role( "weight" );

```

#### X

**構文:** obj &lt;&lt; Preselect Role( X )

**説明:** データテーブルの列に[X]の役割を割り当てる。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
col = Column( "weight" );
col << Preselect Role( "X" );

```

#### Y

**構文:** obj &lt;&lt; Preselect Role( Y )

**説明:** データテーブルの列に[Y]の役割を割り当てる。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Weight << Preselect Role( "Y" );

```

## Data Table Rows

### 項目のメッセージ

#### Add Rows

**構文:** obj &lt;&lt; Add Rows( &lt;n&gt;, &lt;At Start|At End|After(m)&gt; | {list of (column name = value) pairs}) )

**説明:** n個の行をデータテーブルの最初、最後、または指定した行の後ろに追加する。

**例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Add Rows( 3, after( 5 ) );

```

**例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Add Rows( {name = "David", age = 15} );

```

#### Clear Row States

**構文:** obj &lt;&lt; Clear Row States

**説明:** すべての行から、選択、除外、非表示、マーカー、ラベル、色などの属性をクリアする。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Rows( [5, 7, 8, 10, 12, 15] );
Wait( 2 );
dt << Clear Row States;

```

#### Clear Select

**構文:** obj &lt;&lt; Clear Select

**説明:** 行の選択をクリアする。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Rows( [5, 7, 8, 10] );
Wait( 2 );
dt << Clear Select();

```

#### Clear Selected Row States

**構文:** obj &lt;&lt; Clear Selected Row States

**説明:** 選択されている行から、選択、除外、非表示、マーカー、ラベル、色などの属性をクリアする。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
r = dt << Select Rows( [5, 6, 7, 8, 9, 10] );
r << Exclude;
r << clear select;
r << Select Rows( [5, 6] );
Wait( 1 );
dt << Clear Selected Row States;

```

#### Color Rows by Row State

**構文:** obj &lt;&lt; Color Rows by Row State

**説明:** データテーブルのセルに対して、行属性に基づく色付けの表示/非表示を切り替える。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Color by Column( :Age );
Wait( 2 );
dt << Color Rows by Row State;

```

#### Color by Column

**構文:** obj &lt;&lt; Color by Column( column, &lt;Color( number )&gt;, &lt;Color Theme( color theme )&gt;, &lt; Continuous scale(0|1)&gt;, &lt;Reverse scale(0|1)&gt;, &lt;Excluded Row( 0|1 ), &lt;Make window with legend&gt; )

**説明:** 指定された列の値に基づいて、データテーブルの各行に色を割り当てる。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Color by Column( :Age );

```

#### Color or Mark by Column

**構文:** obj &lt;&lt; Color or Mark by Column( column, &lt;Color( number )&gt;, &lt;Color Theme( color theme )&gt;, &lt;Marker Theme( standard|hollow|solid|paired|classic|alphanumeric )&gt; )

**説明:** 色やマーカーを特定の列の値に関連付ける。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Color or Mark by Column( :Age );

```

#### Colors

**構文:** obj &lt;&lt; Colors( color )

**説明:** 選択された行に色を付ける。マーカーを表示するすべてのグラフに反映される。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Run Script( "Bivariate" );
Wait( 1 );
dt << Select Where( :sex == "F" );
Wait( 1 );
dt << Colors( "Red" );

```

#### Data Filter

**構文:** obj &lt;&lt; Data Filter( &lt;Location(x,y)&gt;, &lt;"Close Outline"&gt;, &lt;"Local"&gt;, &lt;Inverse(0|1)&gt;, &lt;Show Columns Selector(0|1)&gt;, &lt;Title(string)&gt;, &lt;Save And Restore Current Row States(0|1)&gt;, &lt;Conditional(0|1)&gt;, &lt;Auto Clear(0|1)&gt;, &lt;Group By AND(0|1)&gt;, &lt;Show Histograms And Bars(0|1)&gt;, &lt;Count Excluded Rows(0|1)&gt;, &lt;Mode(...)&gt;, &lt;Add Filter(Columns(...), Where(...), Display(...), &lt;Select Missing(cols)&gt;, &lt;Order By Count(cols)&gt;)&gt;, &lt;Favorites(...)&gt;, &lt;Animation(...)&gt; )

**説明:** データフィルタを作成または表示する。データフィルタでは、データの複雑なサブセットを対話式に指定できる。Modeオプションでは、フィルタでの選択でどの行属性を有効にするか指定する。Add Filterは、 Columns で指定した列やWhere句で指定したフィルタグループを追加する。複数のフィルタグループがある場合、 Group By ANDオプションの指定に従って組み合わせの動作が決まる。Localが指定された場合、フィルタはレポート内に表示され、それ以外のレポートにはフィルタリングは適用されない。

**グローバルデータフィルタ**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Data Filter(
	Location( {218, 114} ),
	Mode( Select( 0 ), Show( 1 ), Include( 1 ) ),
	Add Filter(
		columns( :age, :height ),
		Where( :age == {13, 14, 15} ),
		Where( :height >= 65 & :height <= 70 )
	),
	Add Filter( columns( :weight ), Where( :weight >= 64 & :weight <= 100 ) )
);

```

**ローカルデータフィルタ**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Local Data Filter",
	Data Filter Context Box(
		H List Box(
			dt << Data Filter(
				Local,
				Mode( Show( 1 ), Include( 1 ) ),
				Add Filter(
					columns( :age, :height ),
					Where( :age == {13, 14, 15} ),
					Where( :height >= 65 & :height <= 70 )
				),
				Add Filter( columns( :weight ), Where( :weight >= 64 & :weight <= 100 ) )
			),
			dt << Run Script( "Bivariate" ),
			dt << Run Script( "Distribution" )
		)
	)
);

```

#### Data View

**構文:** obj &lt;&lt; Data View

**説明:** 現在選択されている行の新しいデータビューを作成する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Where( :age < 14 );
dt << Data View;

```

#### Delete Rows

**構文:** obj &lt;&lt; Delete Rows

**説明:** 選択した行を削除する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Rows( [5, 7, 8, 10] );
Wait( 2 );
r = dt << Delete Rows;
Show( r );

```

#### Exclude/Unexclude

**構文:** obj &lt;&lt; Exclude/Unexclude

**説明:** 選択された行を計算から除外する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
r = dt << Select Rows( [5, 7, 8, 10] );
r << Exclude;

```

#### Get Rows

**構文:** obj &lt;&lt; Get Rows( number )

**説明:** 指定された行について、列の値をリストとして戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Get Rows( 3 );
dt << Get Rows( {1, 2, 3} );

```

#### Go to Row

**構文:** obj &lt;&lt; Go to Row( row number )

**説明:** 指定された行の行オブジェクトを戻し、その行に移動し、選択および強調表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Go To Row( 5 );

```

#### Hide and Exclude

**構文:** obj &lt;&lt; Hide and Exclude

**説明:** 選択された行をグラフに表示せず、計算からも除外する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
r = dt << Select Rows( [5, 7, 8, 10] );
r << Hide and Exclude;

```

#### Hide/Unhide

**構文:** obj &lt;&lt; Hide/Unhide

**説明:** 選択された行をグラフに表示しない。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
r = dt << Go To Row( 12 );
r << Hide;

```

#### Insert Rows

**構文:** obj &lt;&lt; Insert Rows

**説明:** 選択されている行の前に行を挿入する。行が選択されていない場合は無効。

**JMP追加されたバージョン:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Rows( [3, 4, 5] );
dt << Insert Rows;

```

#### Invert Row Selection

**構文:** obj &lt;&lt; Invert Row Selection

**説明:** 現在の行の選択状態を逆転する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
r = dt << Select Where( :Age < 14 );
Wait( 2 );
r << Invert Row Selection;

```

#### Label/Unlabel

**構文:** obj &lt;&lt; Label/Unlabel

**説明:** 選択された行にラベルを付ける。マーカーを表示するすべてのグラフに反映される。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
r = dt << Go To Row( 5 );
r << Label;

```

#### Marker by Column

**構文:** obj &lt;&lt; Marker by Column( column, &lt;Marker( number )&gt;, &lt;Marker Theme( standard | hollow | solid | paired | classic | alphanumeric )&gt;, &lt;Color theme( string )&gt;, &lt; Continuous scale(0|1)&gt;, &lt;Reverse scale(0|1)&gt;, &lt;Excluded Row( 0|1 ), &lt;Make window with legend&gt; )

**説明:** 指定された列の値に基づいて、データテーブルの各行にマーカーを割り当てる。

**例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Marker by Column( :sex );

```

**例 2**

```jsl

dt = Open( "$SAMPLE_DATA/big class.jmp" );
dt << Marker By Column(
	:age,
	Marker( 1 ),
	Color theme( "White to Red" ),
	Marker Theme( "alphanumeric" ),
	Reverse Scale( 1 ),
	Make Window With Legend
);

```

#### Markers

**構文:** obj &lt;&lt; Markers( marker )

**説明:** 選択された行のマーカーを変更する。マーカーを表示するすべてのグラフに反映される。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
r = dt << Select Where( :sex == "M" );
r << Markers( "+" );

```

#### Move Rows

**構文:** obj &lt;&lt; Move Rows( At Start|At End|After(n) )

**説明:** データテーブルで選択された行を、指定の位置まで移動する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
r = dt << Select Rows( [5, 7, 8, 10] );
Wait( 2 );
r << Move Rows( At Start );

```

#### Name Selection in Column

**構文:** obj &lt;&lt; Name Selection in Column( Column Name( name ), Selected( string ), Unselected( string ) )

**説明:** 選択と非選択の状態を示す、2値のカテゴリカルな列を作成する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Where( :Age < 14 );
dt << Name Selection in Column(
	Column Name( "Younger" ),
	Selected( "Yes" ),
	Unselected( "No" )
);

```

#### Next Selected

**構文:** obj &lt;&lt; Next Selected

**説明:** 選択されている行のうち、次の行へと移動する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
r = dt << Select Rows( [5, 7, 8, 10] );
Wait( 2 );
r << Next Selected;

```

#### Previous Selected

**構文:** obj &lt;&lt; Previous Selected

**説明:** 選択されている行のうち、前の行へと移動する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
r = dt << Select Rows( [5, 7, 8, 10] );
Wait( 2 );
r << Previous Selected;

```

#### Row Editor

**構文:** obj &lt;&lt; Row Editor

**説明:** 選択した行の行編集ダイアログを開く。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
r = dt << Select Rows( [5, 7, 8, 10] );
r << Row Editor();

```

#### Row Selection

**構文:** obj &lt;&lt; Row Selection( Select Where(condition), &lt; current selection("extend" | "restrict" | "clear")&gt;, &lt;Dialog("Keep Dialog Open")&gt;, &lt;Match Case(0|1)&gt; )

**説明:** 定義された条件を満たすすべての行を選択する。オプションには、既存の選択をどう扱うかや、ダイアログの表示に関するものなどがある。[Match Case]を省略した場合、デフォルトで大文字と小文字が区別される。

**JMP追加されたバージョン:** 15

**例 1**

```jsl


dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Row Selection( Select where( :age < 15 ) );

```

**例 2**

```jsl


dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Row Selection( Select where( :age < 15 ) );
Wait( 2 );
dt << Row Selection( Select where( :age == 15 ), current selection( "extend" ) );

```

**例 3**

```jsl


dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Row Selection( Select where( :age < 15 ) );
dt << Row Selection(
	Select where( :sex == "M" ),
	current selection( "restrict" ),
	Dialog( "keep dialog open" )
);

```

**例 4**

```jsl


dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Row Selection( Select where( :name == "jane" ), Match Case( 0 ) );

```

#### Select All Matching Cells

**構文:** obj &lt;&lt; Select All Matching Cells

**説明:** 選択された列において、指定された行の値のいずれかと一致する行を、開いているすべてのデータテーブルにおいて選択する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students.jmp" );
dt << Select Rows( [1, 2, 3, 4] );
dt << Go To( :Height );
Wait( 2 );
dt << Select All Matching Cells();

```

#### Select All Rows

**構文:** obj &lt;&lt; Select All Rows

**説明:** データテーブルのすべての行を選択する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select All Rows;

```

#### Select Dominant

**構文:** obj &lt;&lt; Select Dominant( {column1, column2, ...},{0|1, 0|1, ...} )

**説明:** パレート優位の高値(1)または低値(0)に位置する行を選択する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Go To( :height );
dt << Select Dominant( {:height, :weight}, {0, 0} );

```

#### Select Duplicate Rows

**構文:** obj &lt;&lt; Select Duplicate Rows( &lt;match(column1, column2, ...)&gt; )

**説明:** 指定された列において値が重複している行を選択する。列が指定されなかった場合、テーブルのすべての列で行のマッチングを行う。重複している行の行数が戻り値として戻される。

**JMP追加されたバージョン:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select duplicate rows( Match( :age, :height ) );

```

#### Select Excluded

**構文:** obj &lt;&lt; Select Excluded

**説明:** データテーブルの除外されている行をすべて選択する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Rows( [5, 7, 8, 10, 15] );
dt << Exclude( 1 );
dt << Clear Select;
Wait( 2 );
dt << Select Excluded;

```

#### Select Hidden

**構文:** obj &lt;&lt; Select Hidden

**説明:** データテーブルの非表示の行をすべて選択する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Rows( [5, 7, 8, 10, 15] );
dt << Hide( 1 );
dt << Clear Select;
Wait( 2 );
dt << Select Hidden;

```

#### Select Labeled

**構文:** obj &lt;&lt; Select Labeled

**説明:** データテーブルのラベルの付いた行をすべて選択する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Rows( [5, 7, 8, 10, 15] );
dt << Label( 1 );
dt << Clear Select;
Wait( 2 );
dt << Select Labeled;

```

#### Select Matching Cells

**構文:** obj &lt;&lt; Select Matching Cells

**説明:** 選択された列において、指定された行の値のいずれかと一致する行をすべて選択する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Rows( [1, 2, 3, 4] );
dt << Go To( :Height );
Wait( 2 );
dt << Select Matching Cells();

```

#### Select Randomly

**構文:** obj &lt;&lt; Select Randomly( number | probability | Sample Size( number ) | Sampling Rate( probability ) )

**説明:** 指定された割合だけランダムに行を選択する。

**Probability**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Randomly( 0.3 );

```

**標本サイズ**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Randomly( Sample Size( 12 ) );

```

**標本抽出率**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Randomly( Sampling Rate( 0.3 ) );

```

#### Select Rows

**構文:** obj &lt;&lt; Select Rows( [row1, row2, ...] )

**説明:** 指定された行を選択する。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Rows( [5, 7, 8, 10] );

```

#### Select Where

**構文:** obj &lt;&lt; Select Where( condition, &lt; current selection("extend" | "restrict" | "clear")&gt; )

**説明:** オプションには、選択可能な範囲の拡張または制限、選択内容の実行、ダイアログのみの表示、がある。

**例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Where( :Age < 14 );

```

**例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Where( :Age == 14 );
Wait( 0 );
dt << Select Where( :sex == "M", current selection( "extend" ) );

```

**例 3**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Where( Contains( :name, "AR" ) );

```

## Filter Views

### 項目のメッセージ

#### Get Data Filter

**構文:** expr = obj &lt;&lt; Get Data Filter

**説明:** フィルタビューのフィルタ定義を戻す。

**JMP追加されたバージョン:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
fv = dt << New Filter View(
	"Dream",
	Active( 0 ),
	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) )
);
Show( fv << Get Data Filter );

```

#### Get Data Table

**構文:** data table = obj &lt;&lt; Get Data Table

**説明:** フィルタビューを所有するテーブルを戻す。

**JMP追加されたバージョン:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
fv = dt << New Filter View(
	"Dream",
	Active( 0 ),
	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) )
);
Show( fv << Get Data Table );

```

#### Get Name

**構文:** string = obj &lt;&lt; Get Name

**説明:** フィルタビューの名前を取得する。

**JMP追加されたバージョン:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
fv = dt << New Filter View(
	"Dream",
	Active( 0 ),
	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) )
);
Show( fv << Get Name );

```

#### Get Show Hidden Rows

**構文:** 0|1 = obj &lt;&lt; Get Show Hidden Rows

**説明:** このフィルタビューの[非表示の行を表示]設定を戻す。

**JMP追加されたバージョン:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
fv = dt << New Filter View(
	"Dream",
	Active( 0 ),
	Show Hidden Rows( 1 ),
	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) )
);
Show( fv << Get Show Hidden Rows );

```

#### Get Type

**構文:** obj &lt;&lt; Get Type

**説明:** フィルタビューの種類を取得する。種類には、Unfiltered (フィルタリングされていない)、Filtered (フィルタリングされている)、TemporaryFiltered (一時的にフィルタリングされている)がある。

**JMP追加されたバージョン:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
fv = dt << New Filter View(
	"Dream",
	Active( 0 ),
	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) )
);
Show( fv << Get Type, fv << Is Temporary, fv << Is Unfiltered );

```

#### Is Locked

**構文:** 0|1 = obj &lt;&lt; Is Locked

**説明:** このフィルタビューのロックの設定を戻す。

**JMP追加されたバージョン:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
fv = dt << New Filter View(
	"Dream",
	Active( 0 ),
	Lock( 1 ),
	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) )
);
Show( fv << Is Locked );

```

#### Is Temporary

**構文:** 0|1 = obj &lt;&lt; Is Temporary

**説明:** フィルタビューが一時的にフィルタリングされているビューの場合に1を戻す。

**JMP追加されたバージョン:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
fv = dt << New Filter View(
	"Dream",
	Active( 0 ),
	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) )
);
Show( fv << Get Type, fv << Is Temporary, fv << Is Unfiltered );

```

#### Is Unfiltered

**構文:** 0|1 = obj &lt;&lt; Is Unfiltered

**説明:** フィルタビューがフィルタリングされていないビューの場合に1を戻す。

**JMP追加されたバージョン:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
fv = dt << New Filter View(
	"Dream",
	Active( 0 ),
	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) )
);
Show( fv << Get Type, fv << Is Temporary, fv << Is Unfiltered );

```

#### Lock

**構文:** obj &lt;&lt; Lock( 0|1 )

**説明:** このフィルタビューを編集できないようにする。

**JMP追加されたバージョン:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
fv = dt << New Filter View(
	"Dream",
	Active( 0 ),
	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) )
);
fv << Lock( 1 );
Show( fv << Is Locked );

```

#### Set Data Filter

**構文:** obj &lt;&lt; Set Data Filter( expr )

**説明:** フィルタビューのフィルタ定義を変更する。フィルタリングされていないビューは、フィルタ定義を変更できない。

**JMP追加されたバージョン:** 19

**例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
fv = dt << New Filter View( "Dream", Active( 0 ) );
fv << Set Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) );
Show( fv << Get Data Filter );

```

**例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
fv = dt << New Filter View( "Dream", Active( 0 ) );
fv << Set Data Filter(
	Data Filter(
		Inverse( 1 ),
		Add Filter( Columns( :Island ), Where( :Island == "Dream" ) )
	)
);
Show( fv << Get Data Filter );

```

#### Set Name

**構文:** string = obj &lt;&lt; Set Name( name )

**説明:** フィルタビューの名前を変更する。フィルタリングされていないビューと一時的にフィルタリングされたビューは、名前を変更できない。

**JMP追加されたバージョン:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
fv = dt << New Filter View(
	"Dream",
	Active( 0 ),
	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) )
);
Show( fv << Set Name( "Dream Penguins" ) );
Show( fv << Get Name );

```

#### Show Hidden Rows

**構文:** obj &lt;&lt; Show Hidden Rows( 0|1 )

**説明:** このフィルタビューの[非表示の行を表示]設定を変更する。

**JMP追加されたバージョン:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
fv = dt << New Filter View(
	"Dream",
	Active( 0 ),
	Show Hidden Rows( 1 ),
	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) )
);
fv << Show Hidden Rows( 0 );
Show( fv << Get Show Hidden Rows );

```

