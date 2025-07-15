# Data Table



## 关联的构造器

### Association Analysis

**语法:** Association Analysis( Item( columns ), ID( columns ) )

**说明:** 识别独立事件或交易中各组项之间的关系。关联分析经常用于分析交易数据（亦称“市场购物篮”），用以标识在交易中经常一起出现的项。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Grocery Purchases.jmp" );
obj = dt << Association Analysis( Item( :Product ), ID( :Customer ID ) );

```

### Attribute Chart

**语法:** Attribute Chart( Y( columns ), X( columns ) )

**说明:** 分析分类测量值以显示各响应（如评测员）之间的一致性度量。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );
obj = dt << Attribute Chart( Y( :A, :B, :C ), X( :Part ), Standard( :Standard ) );

```

### Bayesian Optimization

**语法:** Bayesian Optimization

**说明:** Recommends factor settings to optimize responses by augmenting the data table.

**JMP添加的版本:** 19

### Bivariate

**语法:** Bivariate( Y( columns ), X( columns ) )

**说明:** 对另一个连续变量进行连续响应建模。分析方法包括拟合线、多项式、样条和二元密度。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );

```

### Boosted Tree

**语法:** Boosted Tree (Y( column ), X( columns ))

**说明:** 通过生成由一系列较小决策树组成的较大加性决策树来构造预测模型。每个树都基于上一个树的残差进行拟合。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation ),
	Go
);

```

### Bootstrap Forest

**语法:** Bootstrap Forest (Y( column ), X( columns ))

**说明:** 通过对许多决策树中的预测值取平均值，构造预测模型。使用每个决策树拟合训练数据的随机 Bootstrap 样本。

```jsl

Names Default To Here( 1 );
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

**语法:** Bubble Plot( X( column ), Y( column ), &lt;Sizes( column )&gt;, &lt;Time( column )&gt;, &lt;ID( column )&gt;, &lt;Coloring( column ) )

**说明:** 生成可随时间变量变化播放动画的二维气泡散点图。可以使用其他变量来调整气泡的大小和设置气泡颜色。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Country )
);

```

### CUSUM Control Chart

**语法:** CUSUM Control Chart( Y( column ), &lt;X( column )&gt;, &lt;By( column )&gt;, &lt;Data Units( 0|1 )&gt;, &lt;Show Excluded Region( 0|1 )&gt; )

**说明:** 创建一个图表，它绘制子组均值与目标偏差的累积和。该图也称为表格形式 CUSUM 图。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
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

**语法:** Categorical( Responses | Aligned Responses | Repeated Measures | Rater Agreement | Multiple Response | Multiple Response by ID | Multiple Delimited | Indicator Group | Response Frequencies( column ), X( column(s) ) )

**说明:** 汇总和分析分类响应数据。数据可以是简单响应、多重响应、重复测量、评级员一致性、对齐的响应或自由文本。包括生成响应的定制交叉表的能力。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );

```

### Cell Plot

**语法:** Cell Plot( Y( column(s) ), &lt;X( column )&gt; )

**说明:** 生成与数据表值一一对应绘制的单元格的矩形网格。网格中的单元格按单元格中的值着色。

```jsl

Names Default To Here( 1 );
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

**语法:** Choice( Profile DataTable( data table ), Profile ID( column ), Profile Effects( column(s) ), &lt;Response Data Table( data table )&gt;, &lt;Subject Data Table( data table )&gt;, &lt;Response Profile ID Chosen( column )&gt;, &lt;Response Subject ID( column)&gt;, &lt;Response Grouping( column(s) )&gt;, &lt;Response Profile ID Choices( column(s) )&gt;, &lt;Profile Grouping( column(s) )&gt;, &lt;Subject Subject ID( column )&gt;, &lt;Subject Effects( column(s) )&gt; )

**说明:** 对研究客户偏好的选择实验得到的数据进行建模。使用条件 Logistic 回归估计首选特定配置的概率。

**示例 1**

```jsl

Names Default To Here( 1 );
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

**示例 2**

```jsl

Names Default To Here( 1 );
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

**语法:** Close( data table name, &lt;NoSave|Save("path")&gt; )

**说明:** 关闭第一个参数所引用的数据表，默认为当前数据表。第二个参数用于保存数据表。在路径中使用合适的文件扩展名将数据表另存为非 JMP 格式。指定 NoSave 会跳过保存提示或忽略所做的更改。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
Close( dt );

```

### Cluster Variables

**语法:** Cluster Variables( Y( columns ) )

**说明:** 将变量（列）聚类到可通过单个成分或变量表示的组中。聚类变量可用作降维方法。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Cluster Variables( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );

```

### Contingency

**语法:** Contingency( Y( columns ), X( columns ) )

**说明:** 在一组分类组中对分类响应建模。分析方法包括卡方检验和马赛克图。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );

```

### Contour Plot

**语法:** Contour Plot( X( column, column ), Y( column ) )

**说明:** 在二维视图中生成三个变量的图形，其中第三个变量通过等值的等高曲线表示。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Little Pond.jmp" );
obj = dt << Contour Plot( X( :X, :Y ), Y( :Z ) );

```

### Contour Profiler

**语法:** Contour Profiler( Y( column1, column2, ... ) )

**说明:** 生成交互式等高线图，使您能够探索一个或多个预测响应如何在因子对之间变化。在图中未使用的因子的值可以改变，以进一步探索因子设置对预测响应的影响。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Contour Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);

```

### Control Chart Builder

**语法:** Control Chart Builder( Class( "Shewhart Variables"|"Shewhart Attribute"|"Short Run"|"Rare Event" ), Variables( variables ), &lt;Chart( Position( number ), Points( Statistic( "statistic" ), &lt;points options&gt; ), Limits( Sigma( "sigma" ), &lt;limits options&gt; )&gt; ) ) )

**说明:** 允许您以交互方式创建控制图，它们用于确定过程是否稳定和可预测。“控制图生成器”平台可用于创建以下类型的控制图: IMR、均值、短期运行、运行、P、NP、C、U、Laney P&apos;、Laney U&apos;、Levey-Jennings、基于均值的 IMR、三因子和稀有事件图。

**C 图**

```jsl

Names Default To Here( 1 );
// Create a C chart by adding a Y variable, changing the Class to Shewhart Attribute, changing the Statistic to Count, and changing the Sigma to Poisson.
dt = Open( "$SAMPLE_DATA/Quality Control/Orange Juice.jmp" );
obj = dt << Control Chart Builder(
	Class( "Shewhart Attribute" ),
	Variables( Subgroup( :Sample ), Y( :Status ), Phase( :Phase ) ),
	Chart( Points( Statistic( "Count" ) ), Limits( Sigma( "Poisson" ) ) )
);

```

**IMR 图**

```jsl

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );

```

**Levey-Jennings 图**

```jsl

Names Default To Here( 1 );
// Create a Levey-Jennings chart by adding a Y variable, removing the dispersion chart, and changing the Sigma to Levey Jennings. Make sure that the Statistic is set to Individual.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Show Two Shewhart Charts( 0 ),
	Variables( Y( :Weight ) ),
	Chart( Points( Statistic( "Individual" ) ), Limits( Sigma( "Levey Jennings" ) ) )
);

```

**NP 图**

```jsl

Names Default To Here( 1 );
// Create an NP chart by adding a Y variable, changing the Class to Shewhart Attribute, changing the Statistic to Count, and changing the Sigma to Binomial (P, NP).
dt = Open( "$SAMPLE_DATA/Quality Control/Orange Juice.jmp" );
obj = dt << Control Chart Builder(
	Class( "Shewhart Attribute" ),
	Variables( Subgroup( :Sample ), Y( :Status ), Phase( :Phase ) ),
	Chart( Points( Statistic( "Count" ) ), Limits( Sigma( "Binomial" ) ) )
);

```

**P 图**

```jsl

Names Default To Here( 1 );
// Create a P chart by adding a Y variable, changing the Class to Shewhart Attribute, changing the Statistic to Proportion, and changing the Sigma to Binomial (P, NP).
dt = Open( "$SAMPLE_DATA/Quality Control/Orange Juice.jmp" );
obj = dt << Control Chart Builder(
	Class( "Shewhart Attribute" ),
	Variables( Subgroup( :Sample ), Y( :Status ), Phase( :Phase ) ),
	Chart( Points( Statistic( "Proportion" ) ), Limits( Sigma( "Binomial" ) ) )
);

```

**P' 图**

```jsl

Names Default To Here( 1 );
// Create a P' chart by adding a Y variable, changing the Class to Shewhart Attribute, changing the Statistic to Proportion, and changing the Sigma to Laney P'.
dt = Open( "$SAMPLE_DATA/Quality Control/Washers.jmp" );
obj = dt << Control Chart Builder(
	Class( "Shewhart Attribute" ),
	Variables( Subgroup( :Lot ), Y( :"# defective"n ), n Trials( :Lot Size ) ),
	Chart( Points( Statistic( "Proportion" ) ), Limits( Sigma( "Laney P Prime" ) ) )
);

```

**U 图**

```jsl

Names Default To Here( 1 );
// Create a U chart by adding a Y variable, changing the Class to Shewhart Attribute, changing the Statistic to Proportion, and changing the Sigma to Poisson.
dt = Open( "$SAMPLE_DATA/Quality Control/Orange Juice.jmp" );
obj = dt << Control Chart Builder(
	Class( "Shewhart Attribute" ),
	Variables( Subgroup( :Sample ), Y( :Status ), Phase( :Phase ) ),
	Chart( Points( Statistic( "Proportion" ) ), Limits( Sigma( "Poisson" ) ) )
);

```

**U' 图**

```jsl

Names Default To Here( 1 );
// Create a U' chart by adding a Y variable, changing the Class to Shewhart Attribute, changing the Statistic to Proportion, and changing the Sigma to Laney U'.
dt = Open( "$SAMPLE_DATA/Quality Control/Washers.jmp" );
obj = dt << Control Chart Builder(
	Class( "Shewhart Attribute" ),
	Variables( Subgroup( :Lot ), Y( :"# defective"n ), n Trials( :Lot Size ) ),
	Chart( Points( Statistic( "Proportion" ) ), Limits( Sigma( "Laney U Prime" ) ) )
);

```

**三因子图（子组变量）**

```jsl

Names Default To Here( 1 );
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

**三因子图（设置子组大小）**

```jsl

Names Default To Here( 1 );
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

**均值/R 图**

```jsl

Names Default To Here( 1 );
// Create an XBar/R chart by adding a subgroup or setting a subgroup size after adding a Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ), Set Subgroup Size( 4 ) );

```

**均值/S 图（子组变量）**

```jsl

Names Default To Here( 1 );
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

**均值/S 图（设置子组大小）**

```jsl

Names Default To Here( 1 );
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

**基于均值的 IMR 图（子组变量）**

```jsl

Names Default To Here( 1 );
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

**基于均值的 IMR 图（设置子组大小）**

```jsl

Names Default To Here( 1 );
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

**基于组均值的移动极差中位数图（子组变量）**

```jsl

Names Default To Here( 1 );
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

**基于组均值的移动极差中位数图（设置子组大小）**

```jsl

Names Default To Here( 1 );
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

**基于组标准差的 IMR 图（子组变量）**

```jsl

Names Default To Here( 1 );
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

**基于组标准差的 IMR 图（设置子组大小）**

```jsl

Names Default To Here( 1 );
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

**基于组标准差的移动极差中位数图（子组变量）**

```jsl

Names Default To Here( 1 );
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

**基于组标准差的移动极差中位数图（设置子组大小）**

```jsl

Names Default To Here( 1 );
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

**短期运行均值差值图**

```jsl

Names Default To Here( 1 );
// Create a Short Run Difference chart for summarized data by changing the class to Short Run and adding a Product or Part variable,  Short Run Standardized charts are sometimes referred to as Z-MR charts. Centered Short Run control charts are sometimes referred to as Deviation from Nominal (DNOM) charts.
dt = Open( "$SAMPLE_DATA/Quality Control/Fancy Chocolate Factory.jmp" );
obj = dt << Control Chart Builder(
	Show Product Separators( 0 ),
	Class( "Short Run" ),
	Variables( Subgroup( :Box ), Y( :"%Cocoa"n ), Part( :Product ) )
);

```

**短期运行均值标准化图**

```jsl

Names Default To Here( 1 );
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

**短期运行差值图**

```jsl

Names Default To Here( 1 );
// Create a Short Run Difference chart by changing the class to Short Run and adding a Product or Part variable. Make sure that the Statistic values for the location chart and dispersion chart are set to Centered and Moving Range Centered, respectively. Centered Short Run control charts are sometimes referred to as Deviation from Nominal (DNOM) charts.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Class( "Short Run" ),
	Variables( Y( :Weight ), Part( :Product ) )
);

```

**短期运行标准化图**

```jsl

Names Default To Here( 1 );
// Create a Short Run Standardized chart by changing the class to Short Run and adding a Subgroup and a Product or Part variable, changing the Statistic for the location chart type to Standardized, and changing the Statistic for the dispersion chart to Moving Range Standardized. Short Run Standardized charts are sometimes referred to as Z-MR charts.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Class( "Short Run" ),
	Variables( Y( :Weight ), Part( :Product ) ),
	Chart( Position( 1 ), Points( Statistic( "Standardized" ) ) ),
	Chart( Position( 2 ), Points( Statistic( "Moving Range Standardized" ) ) )
);

```

**移动极差中位数图**

```jsl

Names Default To Here( 1 );
// Create a Median Moving Range chart by adding a Y variable and changing the Sigma to Median Moving Range on both the location and dispersion charts.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Y( :Weight ) ),
	Chart( Position( 1 ), Limits( Sigma( "Median Moving Range" ) ) ),
	Chart( Position( 2 ), Limits( Sigma( "Median Moving Range" ) ) )
);

```

**稀有事件 G 图**

```jsl

Names Default To Here( 1 );
// Create a G chart by changing the class to Rare Event and adding a nonnegative discrete Y variable. Make sure that the Sigma is set to Negative Binomial.
dt = Open( "$SAMPLE_DATA/Quality Control/Fan Burnout.jmp" );
obj = dt << Control Chart Builder(
	Class( "Rare Event" ),
	Variables( Subgroup( :Burnout ), Y( :Hours between Burnouts ) ),
	Chart( Points( Statistic( "Count" ) ), Limits( Sigma( "Negative Binomial" ) ) )
);

```

**稀有事件 T 图**

```jsl

Names Default To Here( 1 );
// Create a T chart by changing the class to Rare Event, changing the Sigma to Weibull, and adding a nonnegative discrete Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Fan Burnout.jmp" );
obj = dt << Control Chart Builder(
	Class( "Rare Event" ),
	Variables( Subgroup( :Burnout ), Y( :Hours between Burnouts ) ),
	Chart( Points( Statistic( "Count" ) ), Limits( Sigma( "Weibull" ) ) )
);

```

**运行图**

```jsl

Names Default To Here( 1 );
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

### Cumulative Damage

**语法:** Cumulative Damage

**说明:** 分析变动应力和步进应力模型。

```jsl

Names Default To Here( 1 );
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

**语法:** Custom Profiler( Y( column1, column2, ... ) )

**说明:** 提供一个界面，使您能够优化响应而无需图形输出。该刻画器对于较大的问题很有用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Custom Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);

```

### Degradation

**语法:** Degradation( Y( column ), Time( column ), Application( "Repeated Measures Degradation"|"Destructive Degradation"|"Stability Test" ), &lt;X( column )&gt;, &lt;Label( column )&gt;, &lt;Freq( column )&gt;, &lt;Censor( column )&gt;, &lt;Censor Code( value )&gt;, &lt;Upper Spec Limit( value )&gt;, &lt;Lower Spec Limit( value )&gt;, &lt;Censoring Time( value )&gt; )

**说明:** 使用线性和非线性曲线对随时间发生的退化进行建模。分析选项包括稳定性分析和生成伪失效数据。

```jsl

Names Default To Here( 1 );
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

**语法:** Destructive Degradation( Y( column ), Time( column ), &lt;X( column )&gt;, &lt;Freq( column )&gt;, &lt;Censor( column ), Censor Code( value )&gt; )

**说明:** 对随时间发生的破坏性退化数据进行建模。

```jsl

Names Default To Here( 1 );
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

**语法:** Diagram( Y( column ), X( column ) )

**说明:** 创建因果图。也称为石川因果图或鱼骨图。它们是层次结构图，用于探索根本原因。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Ishikawa.jmp" );
obj = dt << Diagram( Y( :Child ), X( :Parent ) );

```

### Discriminant

**语法:** Discriminant( Y( columns ), X( columns ) )

**说明:** 使用 Mahalanobis 距离估计每个观测到每个组的多元均值（重心）的距离。随后观测会被归类到距离它们最近的组中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);

```

### Distance Matrix

**语法:** Distance Matrix( Y( columns ) )

**说明:** 使用多种方法计算行之间的距离。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Distance Matrix( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );

```

### Distribution

**语法:** Distribution( Column() )

**说明:** 显示每个变量的分布和一元汇总统计量。结果和选项取决于每个变量的建模类型。某些选项包括直方图、箱线图、分位数图、拟合分布和能力分析。

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );

```

**示例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
colref = Column( "age" );
// Correct way to use the colref
Distribution( Column( colref ) );
// This will not work
Distribution( colref );

```

### EMP Measurement Systems Analysis

**语法:** EMP Measurement Systems Analysis( Y( column ), X( columns ), Part(column), Model(Main|Crossed|Crossed with Two Factor Interactions|Nested|Crossed then Nested|Nested then Crossed), Dispersion Chart Type(Range|Standard Deviation) )

**说明:** 启动用于测量系统分析的 EMP（评估测量过程）方法。默认情况下显示平均图和散度（极差或标准差）图。

```jsl

Names Default To Here( 1 );
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

**语法:** EWMA Control Chart( Y( column ), &lt;Subgroup( column )&gt;, &lt;By( column )&gt;, &lt;Center Data( 1 )&gt; )

**说明:** 创建绘制指数加权移动平均值的图表，以及绘制单值观测或子组均值的图表。EWMA 图也称为反馈控制图。

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );

```

### Explore Missing Values

**语法:** Explore Missing Values( Y( columns ) )

**说明:** 查找缺失值的模式并进行插补。

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );

```

### Explore Outliers

**语法:** Explore Outliers( Y( columns ) )

**说明:** 标识、探索和管理一元或多元数据中的离群值。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );

```

### Explore Patterns

**语法:** Explore Patterns( Y( columns ) )

**说明:** 搜索数据中的异常特征，包括长试验、重复的长序列、异常的格式化值和线性关系的试验。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nicardipine Lab Patterns.jmp" );
obj = dt << Explore Patterns( Y( Column Group( "Laboratory Results" ) ) );

```

### Factor Analysis

**语法:** Factor Analysis( Y( columns ) )

**说明:** 通过提取表示观测变量中的共有变异的未观测到的变量或因子来发现数据的底层结构。因子旋转用于增加其可解释性。

```jsl

Names Default To Here( 1 );
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

**语法:** Fatigue Model( N( column ), X( column ), &lt;Freq( column )&gt;, &lt;Censor( column ), Censor Code( value )&gt; )

**说明:** 分析疲劳数据，亦称 S-N 曲线建模。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Reliability/Metal Wire Z.jmp" );
obj = dt << Fatigue Model(
	N( :Cycles ),
	S( :Stress ),
	Censor( :Censoring Indicator ),
	Censor Code( "Runout" )
);

```

### Fit Curve

**语法:** Fit Curve( Y( column ), X( column ) )

**说明:** 拟合各种内置非线性模型。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;

```

### Fit Life by X

**语法:** Fit Life by X( Y( column ), X( column ), Relationship( string ), Distribution( string ), &lt;Censor( column )&gt; )

**说明:** 分析通过单一回归因子参数化的事件时间数据的分布。分析选项包括加速失效模型、组间寿命分布和回归因子变换。

```jsl

Names Default To Here( 1 );
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

**语法:** Fit Model( Y( columns ), Effects( columns ), Personality( "Parametric Survival" ), Censor( columns ) )

**说明:** 拟合生存时间的广义线性回归模型。这些模型可用于可以表示为一个或多个解释变量的函数的生存时间。考虑各种生存分布和删失。

```jsl

Names Default To Here( 1 );
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

**语法:** Fit Model( Y( columns ), Effects( columns ), Personality( "Proportional Hazard" ), Censor( columns ) )

**说明:** 拟合半参数回归模型（Cox 比例风险模型）以评估考虑删失情况下解释变量对生存时间的影响。

```jsl

Names Default To Here( 1 );
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

**语法:** Formula Depot

**说明:** 预测模型的容器可支持模型比较、刻画和评分代码生成。“公式存储库”通过分析菜单、建模平台中的“发布”命令、“重新编码”和“公式编辑器”启动。

```jsl

Names Default To Here( 1 );

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

**语法:** Functional Data Explorer( Y(column), X(column), ID(column) )

**说明:** 使用 B 样条、P 样条、傅里叶或小波基函数模型拟合函数模型。可以对函数模型执行函数主成分分析，以从数据中提取重要特征。还有一个选项可以直接对数据执行函数主成分分析，而无需先拟合基函数模型。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );

```

### Gaussian Process

**语法:** Gaussian Process( Y( column ), X( columns ) )

**说明:** 将连续响应值与一个或多个连续预测变量之间的关系建模为带插值的样条。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/2D Gaussian Process Example.jmp" );
obj = dt << Gaussian Process( Y( :Y ), X( :X1, :X2 ) );

```

### Graph Builder

**语法:** Graph Builder( Variables( X(column ), Y( column ), &lt;Group X( column )&gt;, &lt;Group Y( column )&gt;, &lt;Shape( column )&gt;, &lt;Color( column )&gt;, &lt;Overlay( column )&gt;, &lt;Freq( column )&gt; ), &lt;Elements(...)&gt; ) )

**说明:** 提供一个使您可以探索数据的交互式图形界面。您可以将列拖动到图形区域中以创建各种图形，包括散点图、等高线图、条形图、面积图、箱线图、直方图、热图、饼图、矩形树图、马赛克图和地图。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);

```

### Hierarchical Cluster

**语法:** Hierarchical Cluster( Y( columns ) )

**说明:** 基于连续或分类变量对行进行聚类。层次聚类首先将每行视为其自己的聚类，然后一次组合两个聚类，并重复下去。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster( Y( :birth, :death ), Label( :country ) );

```

### Item Analysis

**语法:** Item Analysis( Y( columns ) )

**说明:** 将个体的特质或能力与该个体支持或正确响应某个项目的概率相关联。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/MathScienceTest.jmp" );
obj = Item Analysis( Y( :Q1, :Q2, :Q3, :Q4, :Q5, :Q6, :Q7, :Q8, :Q9 ) );

```

### K Means Cluster

**语法:** K Means Cluster( Y( column(s) ), Number of Clusters( number ) )

**说明:** 基于包含多达数百万行的数据表中的数值变量对行聚类。您必须提前指定聚类数。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 )
);
obj << Go;

```

### K Nearest Neighbors

**语法:** K Nearest Neighbors(Y( column ), X( columns ))

**说明:** 基于 X 变量空间范围内 K 最近邻的响应来预测连续或分类响应。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = K Nearest Neighbors(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	K( 10 )
);

```

### Latent Class Analysis

**语法:** Latent Class Analysis( Y( column(s) ), Number of Clusters( number ) )

**说明:** 使用多项式混合基于分类变量对行进行聚类。您必须提前指定潜在类（聚类）数目。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Latent Class Analysis(
	Y( :sex, :marital status, :country, :size, :type ),
	Number of Clusters( 3 )
);

```

### Life Distribution

**语法:** Life Distribution( Y( column(s) ) )

**说明:** 分析事件时间数据的分布。可用于对删失数据、产品寿命、可靠性和竞争原因进行建模。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );

```

### Logistic

**语法:** Logistic( Y( columns ), X( columns ) )

**说明:** 对连续变量进行分类响应建模。分析方法包括 Logistic 回归和 ROC 曲线。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );

```

### Make Validation Column

**语法:** Make Validation Column( &lt;分层列(columns)&gt;, &lt;分组列(columns)&gt;, &lt;割点列(column)&gt;, &lt;割点批次 ID(column)&gt; )

**说明:** 生成一列，用于将数据分为训练集、验证集和测试集。

**分层示例**

```jsl

Names Default To Here( 1 );
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

**割点示例**

```jsl

Names Default To Here( 1 );
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

### Manage Limits

**语法:** Manage Limits( Process Variables( columns ) )

**说明:** 启动用于同时管理多个列的质量限值的实用工具。您可以添加、编辑并将限值保存至列属性。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Manage Limits( Process Variables( dt << Get Column Group( "Processes" ) ) );

```

### Marker Admixture

**语法:** Marker Admixture( Marker( columns ) )

**说明:** 根据标记基因型估计个体的群体遗传混合。

**JMP添加的版本:** 19

**示例 1**

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Set(), Fit() );

```

**示例 2**

```jsl

Names Default To Here( 1 );

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

**语法:** Marker Imputation( Marker( columns ) )

**说明:** Imputes numeric missing marker genotypes.

**JMP添加的版本:** 19

**示例 1**

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

**示例 2**

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

### Marker Relatedness

**语法:** Marker Relatedness( Marker( columns ) )

**说明:** 在二倍体和多倍体生物中基于遗传标记来估计个体对之间若干类型的基因组关系测度。

**JMP添加的版本:** 18

**示例 1**

```jsl

Names Default To Here( 1 );

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

**示例 2**

```jsl

Names Default To Here( 1 );

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

**语法:** Marker Simulation( Marker( columns ), Predictor Formula( columns ) )

**说明:** 模拟亲本杂交的标记基因型，并计算繁殖性能的相关测度。

**JMP添加的版本:** 17

**示例 1**

```jsl

Names Default To Here( 1 );

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

**示例 2**

```jsl

Names Default To Here( 1 );

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

**语法:** Marker Statistics( Marker( columns ), With Marker( columns ) )

**说明:** 对遗传标记数据执行分析以计算测度，例如次要等位基因频率、Hardy-Weinberg 平衡和连锁不平衡。

**JMP添加的版本:** 17

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt << Marker Statistics( Marker( Column Group( "Markers" ) ), Ploidy( 2 ) );

```

**示例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
obj = dt << Marker Statistics(
	Marker( Column Group( "Markers" ) ),
	With Marker( Column Group( "Markers" ) ),
	Ploidy( 2 )
);

```

### Matched Pairs

**语法:** Matched Pairs( Y( columns ), X( column ) )

**说明:** 使用配对 t 检验或简单的重复测量分析比较匹配变量集的均值以解释响应之间的相关性。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
obj = dt << Matched Pairs( X( :Dose ), Y( :BP 8M, :BP 8W ) );

```

### MaxDiff

**语法:** MaxDiff( Profile DataTable( data table ), Profile ID( column ), Profile Effects( column(s) ), &lt;Response Data Table( data table )&gt;, &lt;Subject Data Table( data table )&gt;, &lt;Response Profile ID Chosen( column )&gt;, &lt;Response Subject ID( column)&gt;, &lt;Response Grouping( column(s) )&gt;, &lt;Response Profile ID Choices( column(s) )&gt;, &lt;Profile Grouping( column(s) )&gt;, &lt;Subject Subject ID( column )&gt;, &lt;Subject Effects( column(s) )&gt; )

**说明:** 创建一个设计，找出客户最喜欢和最不喜欢的产品特性的组合。

```jsl

Names Default To Here( 1 );
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

**语法:** Mixture Profiler( Y( column1, column2, ... ) )

**说明:** 生成交互式三元图，使您能够探索具有三个或更多因子的混合模型的已保存预测公式的等高线。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );
obj = dt << Mixture Profiler( Y( :Pred Formula Y ) );

```

### Model Comparison

**语法:** Model Comparison( Predictors( columns ), Group( column ) )

**说明:** 使用预测公式列比较不同模型的性能。

```jsl

Names Default To Here( 1 );
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

**语法:** Model Driven Multivariate Control Chart( Process( columns ) )

**说明:** 基于主成分或偏最小二乘法创建多元控制图。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Flight Delays.jmp" );
obj = dt << Model Driven Multivariate Control Chart(
	Process( :AA, :CO, :DL, :F9, :FL, :NW, :UA, :US, :WN )
);

```

### Model Screening

**语法:** Model Screening( Y( column ), X( columns ) )

**说明:** 拟合许多不同的预测模型，以便您可以选择最佳模型。

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose )
);

```

### Multidimensional Scaling

**语法:** Multidimensional Scaling( Y( columns ) )

**说明:** 把一组对象邻近性的模式直观地呈现出来。

```jsl

Names Default To Here( 1 );
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

**语法:** Multiple Correspondence Analysis( Y( columns ), X( columns ) )

**说明:** 标识分类变量水平之间的关联。“多重对应分析”类似于分类数据的主成分分析。

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cereal.jmp" );
dt << Multiple Correspondence Analysis(
	Y( :Mfr, :"Hot/Cold"n, :Fiber Gr ),
	X( :Manufacturer )
);

```

**示例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Multiple Correspondence Analysis( Y( :country, :size, :type ) );

```

### Multiple Factor Analysis

**语法:** Multiple Factor Analysis( MFABLocks({"Block 1", columns},{"Block 2", columns}) )

**说明:** 分析感官数据分析中的小组成员之间的一致性。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
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

**语法:** Multivariate( Y( columns ) )

**说明:** 使用各种多元分析方法探索数值变量之间的相关性和关联性。这些方法包括参数和非参数关联测量、散点图矩阵、主成分分析、离群值分析和项目信度。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );

```

### Multivariate Embedding

**语法:** Multivariate Embedding( Y( columns ) )

**说明:** 使用均匀流形近似和投影 (UMAP) 方法或 t 分布随机近邻嵌入 (t-SNE) 方法将数据从高维空间映射到低维空间。很多时候您希望将数据映射到二维或三维，以便可以轻松地可视化低维空间。两种方法都尝试保留数据的局部结构，但是对于大型数据集，UMAP 通常比 t-SNE 快。

**JMP添加的版本:** 17

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Multivariate Embedding(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);

```

**示例 2**

```jsl

Names Default To Here( 1 );
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

**示例 3**

```jsl

Names Default To Here( 1 );
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

**语法:** Naive Bayes( Y( column ), X( columns ), Method( "Naive Bayes" ) )

**说明:** 根据分类变量的预测变量值与每组的预测变量值的接近程度，预测分类变量与每组的关系。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Naive Bayes(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width )
);

```

### Neural

**语法:** Neural( Y( column ), X( columns ), &lt;Validation( column )&gt; )

**说明:** 使用灵活的输入变量函数预测一个或多个响应变量。灵活的框架引入了分层与 s 形函数。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);

```

### New Table

**语法:** New Table( name, &lt;invisible&gt;, &lt;private&gt;, &lt;actions&gt; )

**说明:** 创建新数据表。"Invisible" 在视图中隐藏数据表，但在“JMP 主窗口”中列出它。"Private" 完全隐藏表。"Visible" 是默认值，创建可见并在“JMP 主窗口”中列出的正常表。可选 actions 参数是数据表支持的任何消息。

```jsl

Names Default To Here( 1 );
dt = New Table( "Little Class",
	Add Rows( 3 ),
	New Column( "name", Character, Nominal, Set Values( {"KATIE", "LOUISE", "JANE"} ) ),
	New Column( "height", Continuous, Set Values( [59, 61, 55] ) )
);

```

### Nonlinear

**语法:** Nonlinear( Y( column ), X( column with predictor formula ) )

**说明:** 使用最小二乘或定制损失函数拟合非线性模型。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );

```

### Normal Mixtures

**语法:** Normal Mixtures( Y( column(s) ), Number of Clusters( number ) )

**说明:** 当您的数据来自混合起来的重叠多元正态分布时，基于数值变量对行进行聚类。您必须提前指定聚类数。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Normal Mixtures(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 )
);
obj << Go;

```

### Normalization

**语法:** Normalization( Y( columns ) )

**说明:** Adjusts for technical biases and improves suitability for subsequent analysis

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Normalization( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );

```

### Notebook

**语法:** Notebook

**说明:** 创建新笔记本，或返回具有提供的名称或索引的笔记本。

```jsl

Names Default To Here( 1 );

nb = Notebook();

```

### Oneway

**语法:** Oneway( Y( columns ), X( columns ) )

**说明:** 在一组分类组中进行连续响应建模。分析方法包括方差分析、均值比较、均值分析和分位数图。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );

```

### Open

**语法:** Open( file path, &lt;invisible&gt;, &lt;private&gt;, &lt;select columns(list)&gt; | &lt;ignore columns(list)&gt;, &lt;column names only&gt;, &lt;Table Info&gt; )

**说明:** 打开 JMP 文件或导入其他受支持的文件类型。打开的数据表选项“不可见”会在视图中隐藏文件，但会将其列在 JMP 主窗口中。“私有”完全隐藏文件。文件选项“选择列”只会读入指定列。“忽略列”与“选择列”相反，它不会读入指定列。JMP 文件选项“仅列名称”和“表信息”不会读入数据，也不会创建数据表。“仅列名称”返回数据表列名的列表。“表信息”返回数据表中的行数和列数。选项“FIRST(n)”/“LAST(n)”/“RANDOM(n)”只会读入数据表的 n 行。若 n 是介于 0 和 1 之间的数值，则 n 是数据表中总行数的若干分之几。

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );

```

**示例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp", ignore columns( "age" ) );

```

**示例 3**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp", "Column Names Only" );

```

**示例 4**

```jsl

Names Default To Here( 1 );
info = Open( "$SAMPLE_DATA/probe.jmp", "Table Info" );
Print( info );

```

**示例 5**

```jsl

Names Default To Here( 1 );
info = Open( "$SAMPLE_DATA/SATByYear.jmp", random( 10 ) );
Print( info );

```

**示例 6**

```jsl

Names Default To Here( 1 );
info = Open( "$SAMPLE_DATA/SATByYear.jmp", First( 10 ) );
Print( info );

```

### Parallel Plot

**语法:** Parallel Plot( Y( columns ), &lt;X( column )&gt; )

**说明:** 通过连接每一行对应的线段生成两个或多个变量的图。

**示例 1**

```jsl

Names Default To Here( 1 );
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

**示例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Parallel Plot( Y( :hist0, :hist1, :hist3, :hist5 ) );

```

### Pareto Plot

**语法:** Pareto Plot( Cause( column ), &lt;X( column )&gt;, &lt;Subcategory( column )&gt;, &lt;Freq( column )&gt;, &lt;Weight( column )&gt; )

**说明:** 以降序显示与质量相关的过程中的项的相对频数。您可以定义一个或多个分类变量以创建比较 Pareto 图。

**子类别**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot(
	Cause( :failure ),
	Subcategory( :clean ),
	Freq( :N ),
	Subcategory Bar Style( Stacked )
);

```

**简单**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure Raw Data.jmp" );
obj = dt << Pareto Plot( Cause( :failure ) );

```

**组**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ) );

```

### Partial Least Squares

**语法:** Partial Least Squares( Y( columns ), X( columns ) )

**说明:** 使用潜在因子拟合一个或多个响应变量的模型。这允许在以下情况下拟合模型: 解释变量高度相关或解释变量多于观测。

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );
obj = dt << Partial Least Squares(
	Y( :Hedonic, :Goes with meat, :Goes with dessert ),
	X( :Price, :Sugar, :Alcohol, :Acidity ),
	Go
);

```

**示例 2**

```jsl

Names Default To Here( 1 );
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

**语法:** Predictor Screening( Y( columns ), X( columns ) )

**说明:** 通过使用 Bootstrap 森林法分割来评估预测变量对响应的贡献，从大量候选项中识别显著预测变量。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Bands Data.jmp" );
obj = dt << Predictor Screening( Y( :Banding? ), X( Column Group( "Predictors" ) ) );

```

### Principal Components

**语法:** Principal Components( Y( columns ) )

**说明:** 根据比变量个数更少的几个独立线性组合（主成分），对这些变量中的变异进行建模。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane )
);

```

### Process Capability

**语法:** Process Capability( Process Variables (columns), &lt; Spec Limits() &gt; )

**说明:** 为每个过程计算过程能力分析，并创建有助于同时分析多个过程能力的图形。也可以定义规格限。

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

### Process History Explorer

**语法:** Process History Explorer( Y( columns ),ID( columns), X( columns ), Step( columns ), Timestamp( columns ) )

**说明:** 标识与低劣良率有关的过程步骤。

```jsl

Names Default To Here( 1 );
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

**语法:** Process Screening( Process Variables( columns ) )

**说明:** 从多个角度检查许多过程，包括稳定性、能力、控制图检验和偏移（漂移）。能够帮助关注于需要注意的过程。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Grouping( :Site ), Process Variables( Eval( 5 :: 132 ) ) );

```

### Profiler

**语法:** Profiler( Y( column1, &lt;column2&gt;, ..., &lt;PredSE column1, PredSE column2&gt;, ... ), &lt;Expand&gt; )

**说明:** 生成交互式图形，使您能够探索更改因子设置时预测响应如何变化。对于每个因子，刻画器都会显示基于保存的预测公式和线性约束的预测轨迹，并说明响应如何相对于该因子发生变化。Expand 参数对应于启动窗口中的“展开中间公式”选项。

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);

```

**示例 2**

```jsl

Names Default To Here( 1 );
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

**示例 3**

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Stochastic Optimization.jmp" );
dt << Profiler( Y( :Yield ), Profiler( 1, Desirability Functions( 1 ), ), Expand );

```

### Recurrence Analysis

**语法:** Recurrence Analysis( Y( column ), Cost( column ), Label( column ), &lt;Grouping( column )&gt; )

**说明:** 分析每个系统中复发事件随时间的分布情况，直至系统退出服务。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Bladder Cancer.jmp" );
obj = dt << Recurrence Analysis(
	Y( :Age ),
	Cost( :Cost ),
	Grouping( :Treatment Group ),
	Label( :Patient Number )
);

```

### Reliability Forecast

**语法:** Reliability Forecast

**说明:** 基于观测数据和将来风险单位预测将来失效。 该平台接受多种输入格式。请参见每种格式获取规格详细信息。

**Nevada 格式**

```jsl

Names Default To Here( 1 );
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

**事件时间格式**

```jsl

Names Default To Here( 1 );

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

**日期格式**

```jsl

Names Default To Here( 1 );

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

**语法:** obj = Reliability Growth( Input Format( Time to Event ), Time to Event( column, &lt;column&gt; ), &lt;Event Count( column )&gt;, &lt;Phase( column )&gt; );obj = Reliability Growth( Input Format( Dates ), Timestamp( column, &lt;column&gt; ), &lt;Event Count( column )&gt;, &lt;Phase( column )&gt; );obj = Reliability Growth( Input Format( Concurrent Systems ), Time to Event( column, column, ... ), System ID( column ), &lt;Phase( column )&gt; )obj = Reliability Growth( Input Format( Parallel Systems ), Time to Event( column, column, ... ), &lt;Event Count( column )&gt;, System ID( column ), &lt;Phase( column )&gt; )

**说明:** 随着单个可修复系统不断接受系统设计的改进而对系统可靠性的变化建模。 该平台接受多种输入格式。请参见每种格式获取规格详细信息。

**事件时间**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
obj << Crow AMSAA;

```

**并发系统**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Concurrent Systems.jmp" );
obj = dt << Reliability Growth(
	Input Format( Concurrent Systems ),
	Time to Event( :Prototype 1, :Prototype 2 ),
	System ID( :Failed System ),

);
obj << Crow AMSAA;

```

**并联系统**

```jsl

Names Default To Here( 1 );
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

**日期**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/BrakeReliability.jmp" );
obj = dt << Reliability Growth(
	Input Format( Dates ),
	Timestamp( :Date ),
	Event Count( :Fixes )
);

```

### Repeated Measures Degradation

**语法:** Repeated Measures Degradation( Y( column ), Time( column ), &lt;X( column )&gt;, &lt;Freq( column )&gt;, &lt;Censor( column ), Censor Code( value )&gt; )

**说明:** 对重复测量退化数据进行随时间带随机参数的建模。

```jsl

Names Default To Here( 1 );

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

**语法:** Response Screening( Y( columns ), X( columns ) )

**说明:** 自动执行对大量的响应进行线性模型效应的检验的过程。检验结果和汇总统计量以数据表和图的形式呈现。假发现率 (FDR) 可防止错误声明显著性。稳健估计方法可降低检验对于离群值的灵敏度。

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
obj = dt << Response Screening(
	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),
	X( :Process )
);

```

**示例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Probe.jmp" );
obj = dt << Response Screening( X( :Process ), Y( Eval( 8 :: 108 ) ) );

```

### Scatterplot 3D

**语法:** Scatterplot 3D( Y( columns ) )

**说明:** 生成三个或更多变量的旋转三维散点图。若指定了三个以上的变量，则可以循环显示散点图中显示的变量。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );

```

### Scatterplot Matrix

**语法:** Scatterplot Matrix( Y( columns ), &lt;X( columns )&gt;, &lt;Group( column )&gt;, &lt;By( column )&gt; )

**说明:** 生成一个可供您探索二元关系的散点图网格。若未指定 X 变量，则散点图适用于所有 Y 变量对。若指定了一个或多个 X 变量，则散点图适用于相对 X 变量绘制的 Y 变量。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Scatterplot Matrix(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);

```

### Structural Equation Models

**语法:** Structural Equation Models( Model Variables ( columns ) )

**说明:** 提供一个框架来拟合各种模型，包括验证性因子分析、具有或不具有潜在变量的路径模型、测量值误差模型以及潜在变量增长曲线模型。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );
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

**语法:** Support Vector Machines(Y( column ), X( columns ))

**说明:** 基于 X 变量空间范围内的支持向量来预测响应。“支持向量机”算法的一个目标是使用训练数据学习如何分类新数据。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width )
);

```

### Surface Plot

**语法:** Surface Plot( Columns() )

**说明:** 生成由保存的公式定义的点或曲面构成的旋转三维图。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);

```

### Survival

**语法:** Survival( Y( columns ), Censor( column ), &lt;Grouping( column )&gt; )

**说明:** 对一个或多个组使用乘积限 (Kaplan-Meier) 法计算生存函数估计值。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );

```

### Tabulate

**语法:** Tabulate( Add Table( Column Table( Analysis Columns( column(s) )|Grouping Columns( column(s))|Statistics( )), Row Table( Analysis Columns( column(s) )|Grouping Columns( column(s))|Statistics( )) )

**说明:** 创建一个或多个变量的汇总统计量的定制表。变量可以按一个或多个分类列进行分组。允许您使用拖放操作构建汇总表。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);

```

### Ternary Plot

**语法:** Ternary Plot( Y( columns ) )

**说明:** 生成三个混料成分的总和为常数的二维图。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );
obj = dt << Ternary Plot( Y( :p1, :p2, :p3 ) );

```

### Text Explorer

**语法:** Text Explorer( Text Columns( columns ) )

**说明:** 解析来自列中文本的单词，对其计数，将其关联至其他列，保存指示符并绘制关系图。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );

```

### Time Series

**语法:** Time Series( Y( column ) )

**说明:** 对等间距的时间点中的一系列观测进行建模。包括时间序列图、自相关性、变差图、谱密度、ARIMA、季节性 ARIMA、平滑模型和预测。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );

```

### Time Series Forecast

**语法:** Time Series Forecast( Y( column ) )

**说明:** 使用指定的方法拟合并预测多个时间序列。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/M3C Quarterly.jmp" );
obj = dt << Time Series Forecast( Y( :Y ), Grouping( :Series ), Time( :Time ) );

```

### Uplift

**语法:** Uplift( Y( column ), X( columns ), Treatment( column ) )

**说明:** 拟合递归分割树，它选择使处理差异最大化的拆分。模型可识别最可能响应某项处理的个体群组。

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Hair Care Product.jmp" );
obj = Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Split Best( 3 )
);

```

**示例 2**

```jsl

Names Default To Here( 1 );
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

**语法:** Variability Chart( Y( column ), X( columns ) )

**说明:** 分析连续测量值以确定测量系统的执行效果。您还可以执行量具研究以查看数据中的变异度量。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );

```

### Virtual Join

**语法:** Virtual Join

**说明:** 通过 ID 列将主数据表链接到辅助数据表。

允许主表通过辅助表而不必物理地连接表来访问列。



“链接 ID”列属性将辅助表中的列标记为 ID 列。



“链接引用”列属性将主表中的列映射到辅助表中的 ID 列。

“链接引用”属性允许您设置数据表引用或想链接的数据表的路径。

选项“使用链接的列名”将使用源列名而不是完全限定唯一名称来构建链接的列。

**示例 1**

```jsl

Names Default To Here( 1 );
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

**示例 2**

```jsl

Names Default To Here( 1 );
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

**示例 3**

```jsl

Names Default To Here( 1 );

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

## 项消息

### Add Properties to Table

**语法:** obj &lt;&lt; Add Properties to Table

**说明:** 将属性添加到表。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Properties( {2, 4} );
proplist = dt << Get Selected Properties();
dt2 = New Table( "Little Class" );
dt2 << Add Properties to Table( proplist );

```

### Add Scripts to Table

**语法:** obj &lt;&lt; Add Scripts to Table

**说明:** 该命令是“将属性添加到表”的别名。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Properties( {2, 4} );
proplist = dt << Get Selected Properties();
dt2 = New Table( "Little Class" );
dt2 << Add scripts to table( proplist );

```

### Anonymize

**语法:** obj &lt;&lt; Anonymize( columns( columns ), &lt;Output Table( name )&gt; )

**说明:** 创建一个删除了唯一标识符的新数据表。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << anonymize( columns( :name, :age ), output table name( "anonymized" ) );

```

### Apply Columns List Filter To Data Grid

**语法:** obj &lt;&lt; Apply Columns List Filter To Data Grid( state=0|1 )

**说明:** 启用该选项可将数据表“列”列表中的过滤器应用于数据网格。

**JMP添加的版本:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << Column Filter( Column Name( "tude" ) );
Wait( 1 );
dt << Apply Columns List Filter To Data Grid( 0 );
Wait( 1 );
dt << Apply Columns List Filter To Data Grid( 1 );

```

### Apply Formula

**语法:** dt &lt;&lt; Apply Formula([Columns(&lt;col|{cols}|Group(col, count)|&lt;group name&gt;, [Ref(&lt;name&gt;)], [List Ref(&lt;name&gt;)]]+, [Output(In Place|In Place Formula|New Formula(&lt;prefix&gt;|New Static(&lt;prefix&gt;)], [Group(&lt;name&gt;)])

**说明:** 使用公式变换一个或多个列，并将结果（作为公式或数据）放入新列或现有列。

必须定义至少一个列组（单个列、列的显式列表、一连串列或现有列组名称）。

若输出为“原位”，则定义的第一个组将作为目标。若需要，则可以在公式中指定一个名称，该名称引用一次一个列 (Ref) 或作为列列表 (ListRef) 引用。

最后，可以指定输出类型，可以有选择地为新列指定名称和组名。

**JMP添加的版本:** 18

**New Data Columns/ListRef**

```jsl

Names Default To Here( 1 );
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

**New Formula Columns/Grouping**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Apply Formula(
	Columns( Group( :height, 2 ), Ref( "_relative_from_height" ) ),
	Formula( _relative_from_height * 2 ),
	Output( New Formula( "result", Group( "output group" ) ) )
);

```

**Simple New Formula Column**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Data Table( "Big Class" ) << Apply Formula(
	Columns( :height ),
	Formula( :height / 5 ),
	Output( New Formula )
);

```

### Begin Data Update

**语法:** obj &lt;&lt; Begin Data Update

**说明:** 保留所有更新消息，直到遇到“结束数据更新”命令。这对于在无中断的情况下更新许多单元格很有用。这仅适用于数据单元格中的更改。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Central Limit Theorem.jmp" );
dt << Add Rows( 2000 );
dt << Distribution( Column( :"N=1"n, :"N=5"n, :"N=10"n ) );
Wait();
dt << Begin Data Update;
dt << Add Rows( 2000 );
dt << End Data Update;

```

### Checksum

**语法:** obj &lt;&lt; Checksum( &lt; Version(version) &gt;, &lt; Include(flags) &gt;, &lt; Exclude(flags) &gt; )

**说明:** Compute the table&apos;s checksum. Available flags include: "ColData", "ColName", "ColDataType", "ColModelingType", "ColFormat", "ColInFormat", "ColFormatWidth", "ColAttributes", "ColProperties", "ColListCheck", "ColRangeCheck", "ColCompact", "ColLabel", "ColHidden", "ColExclude", "ColSelection", "ColState", "ColDisplayWidth", "TableVariables", "TableScripts", "RowExclude", "RowHidden", "RowLabel", "RowColor", "RowMarker", "RowSelection", "RowState"

**JMP添加的版本:** 18

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Checksum();

```

**示例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Checksum( Exclude( "ColData" ) );

```

**示例 3**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Checksum( Include( "ColData", "ColAttributes" ) );

```

**示例 4**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
flags = {"ColData", "ColAttributes"};
dt << Checksum( Include( flags ) );

```

### Clear Cell Colors

**语法:** obj &lt;&lt; Clear Cell Colors

**说明:** 清除选定列的单元格颜色。若未选择列，则清除所有列的单元格颜色。

**JMP添加的版本:** 15

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:age << Color Cells( "Red" );
a = {1, 3, 5};
b = {2, 4, 6};
:height << color cells( {{"Red", a}, {"blue", b}} );
:weight << color cells( {{"blue", a}} );
Wait( 2 );
dt << Clear cell colors( {:height, :age} );

```

**示例 2**

```jsl

Names Default To Here( 1 );
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

**语法:** obj &lt;&lt; Clear Column Selection

**说明:** 清除数据表中的列选择。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
dt << Go To( :BP 12F );
Wait( 2 );
dt << Clear Column Selection();

```

### Clear Edit Lock

**语法:** obj &lt;&lt; Clear Edit Lock( [ &lt;"Modify Cells"&gt;, &lt;"Add rows"&gt;, &lt;"Add Columns"&gt;, &lt;"Delete Rows"&gt;, &lt;"Delete Columns"&gt;] )

**说明:** 允许对数据表执行以前不允许的指定操作。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Set Edit Lock( "Modify Cells", "Add Rows", "Delete Columns" );
:age << set selected( 1 );
:height << set selected( 1 );
Wait( 2 );
dt << Clear Edit Lock( "Delete Columns" );

```

### Clear Properties Selection

**语法:** obj &lt;&lt; Clear Properties Selection( { property1, property2, ... )

**说明:** 取消选择指定表属性，其中列表可以是属性名称的列表或属性的索引。若没有指定列表，则取消选择所有选定的属性。

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
list = {"Bivariate", "Logistic"};
proplist = dt << Select Properties();
Wait( 1 );
dt << clear properties selection( list );

```

**示例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
list = {"Bivariate", "Logistic"};
proplist = dt << Select Properties();
Wait( 1 );
dt << clear properties selecction();

```

### Clone

**语法:** dt &lt;&lt; Clone( &lt; Table Name(name) &gt;, &lt; Copy Formulas(1|0) &gt;, &lt; Eval Formulas(1|0) &gt; )

**说明:** 创建数据表的副本

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dtClone = dt << Clone;

```

### Close Data Grid

**语法:** obj &lt;&lt; Close Data Grid

**说明:** 关闭或打开数据网格。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
dt << Close Data Grid( 1 );

```

### Close Side Panels

**语法:** obj &lt;&lt; Close Side Panels

**说明:** 关闭或打开数据表的侧面板。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
dt << Close Side Panels( 1 );

```

### Close summary panels

**语法:** obj &lt;&lt; Close summary panels

**说明:** 关闭或打开数据表的汇总面板。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
dt << Close Summary Panels( 1 );

```

### Cluster

**语法:** obj &lt;&lt; Cluster

### Collapse All Column Groups

**语法:** obj &lt;&lt; Collapse All Column Groups

**说明:** 折叠所有列组

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
dt << Group Columns( "Monday", BP 8M, 3 );
dt << Group Columns( "Wednesday", BP 8W, 3 );
dt << Group Columns( "Friday", BP 8F, 3 );
dt << Expand All Column Groups;
Wait( 2 );
dt << Collapse All Column Groups;

```

### Column Filter

**语法:** obj &lt;&lt; Column Filter

**说明:** Retrieves object to manipulate active column filter for the table.

**JMP添加的版本:** 19

```jsl

Names Default To Here( 1 );
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

**语法:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**说明:** 创建独立列切换器

**JMP添加的版本:** 16

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
dt << Column Switcher(
	:Process 1,
	{:Process 1, :Process 3, :Process 4, :Process 5, :Process 6, :Process 7}
);

```

**示例 2**

```jsl

Names Default To Here( 1 );
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

**示例 3**

```jsl

Names Default To Here( 1 );
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

**语法:** obj &lt;&lt; Combine Columns

**说明:** 将多个列合并为一列，其中每个源列的值由给定的分隔符分隔。

**示例 1**

```jsl

Names Default To Here( 1 );
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

**示例 2**

```jsl

Names Default To Here( 1 );
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

**语法:** obj &lt;&lt; Compare Data Tables( Compare with( Data Table( name )), &lt;Compare table variables and scripts( 0|1)&gt;, &lt;show window&gt;,&lt;Compare columns attributes and properties( 0|1)&gt;, &lt;Compare data( 0|1 )&gt;, &lt;Show difference summary(0|1)&gt;, &lt;Show difference plot(0|1)&gt; )

**说明:** 比较两个打开的数据表和数据之间的报表差异，以及元数据。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
dt << compare data tables( compare With( Data Table( "Students2" ) ) );

```

### Compress File When Saved

**语法:** obj &lt;&lt; Compress File When Saved( state=0|1 )

**说明:** 保存数据表时压缩文件。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Compress File When Saved( 1 );

```

### Compress Selected Columns

**语法:** obj &lt;&lt; Compress Selected Columns( { column1, column2, ...} )

**说明:** 将每一列压缩为最紧凑的格式。

若水平数少于 255，则字符数据将为 1 字节。

若数据介于 -127 和 127 之间，则数值数据将为 1 字节。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Compress Selected Columns( {:Age, :sex, :Height, :Weight} );

```

### Concatenate

**语法:** obj &lt;&lt; Concatenate( &lt;Private&gt;, &lt;Invisible&gt;, Data Table( name ), &lt;Data Table(name), ...&gt; &lt;Label( column )&gt;, &lt;Output Table( name ) | Append to first table&gt;, &lt;Keep Formulas&gt;, &lt;Create Source Column&gt; )

**说明:** 合并来自若干数据表的行并创建一个新的数据表，或将这些行附加到第一个数据表。

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Trial1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Trial2.jmp" );
dt << Concatenate( Data Table( "Trial2" ) );

```

**示例 2**

```jsl

Names Default To Here( 1 );
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

**语法:** obj &lt;&lt; Copy Column Properties( &lt;column 1 column 2, ...&gt; )

**说明:** 将选定列的列属性复制到剪贴板，随后复制到属性单独列表的列表中。您可以选择指定源列的列表，而不用在数据表中预先选择它们。

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << Select Columns( :MODULUS, :ELONG );
dt << Copy Column Properties;
New Window( "Script", Script Box( "//Try Paste here
                     " ) );

```

**示例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << Copy Column Properties( {:MODULUS, :ELONG} );
New Window( "Script", Script Box( "//Try Paste here
                     " ) );

```

### Copy Selected Properties

**语法:** obj &lt;&lt; Copy Selected Properties

**说明:** 将选定表属性复制到剪贴板。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << select properties( {"Distribution", "Oneway"} );
proplist = dt << Copy Selected Properties();
New Window( "Script", Script Box( "//Try Paste here
                     " ) );

```

### Copy Table Script

**语法:** obj &lt;&lt; Copy Table Script( &lt;"No data"&gt; )

**说明:** 复制脚本以重新创建数据表。结果脚本包括数据表中存储的所有表脚本。您可以选择添加关键字“No Data”以省略脚本中的数据。

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Copy Table Script();
New Window( "Script", Script Box( "//Try Paste here
                     " ) );

```

**示例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Copy Table Script( "No Data" );
New Window( "Script", Script Box( "//Try Paste here
                     " ) );

```

### Debug Script

**语法:** obj &lt;&lt; Debug Script( name )

**说明:** 调试数据表中存储为属性的指定脚本。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Debug Script( "Distribution" );

```

### Decision Tree

**语法:** obj &lt;&lt; Decision Tree

### Define Tag

**语法:** Define Tag(&lt;name&gt;, [Color(&lt;color&gt;)], [Symbol(&lt;symbol char&gt;)], [Description(&lt;text&gt;)], [Replace(&lt;existing tag name&gt;)])

**说明:** 在表中创建或更新列标记定义。若标记不存在，则创建它。可以选择指定颜色、符号和其他特性。

**JMP添加的版本:** 19

**Color, Symbol, or None**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Define Tag( "ID1", Color( Red ) );
dt << Define Tag( "ID2", Symbol( "\!UD83D\!UDCCB" ) );
dt << Define Tag( "ID3" );

```

**New Tag**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Define Tag( "ID", Color( Blue ) );

```

**Replace**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Define Tag( "ID", Color( Red ) );
:height << Set Property( "Tags", {"ID"} );
dt << Define Tag( "Identifier", Replace( "ID" ), Color( Blue ) );
:height << Get Property( "Tags" );

```

### Delete Columns

**语法:** obj &lt;&lt; Delete Columns( &lt;column&gt;, &lt;column&gt;, ... )

**说明:** 删除指定的列。若未指定参数，则删除数据表中的选定列。

**JMP添加的版本:** 14

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:height << Set Selected;
Wait( 2 );
dt << Delete Columns();

```

**示例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
dt << Delete Columns( :Height );

```

**示例 3**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
cols = {"height", "weight"};
Wait( 2 );
dt << Delete Columns( cols );

```

### Delete Filter View

**语法:** obj &lt;&lt; Delete Filter View( name | obj )

**说明:** 删除给定的过滤器视图。

**JMP添加的版本:** 19

```jsl

Names Default To Here( 1 );
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

**语法:** obj &lt;&lt; Delete Scripts( &lt;script| {script 1, script 2, script 3, ...} &gt; )

**说明:** 从数据表中删除指定的脚本。

**JMP添加的版本:** 14

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Table Script(
	"New Script",
	Distribution( Column( :Height, :Weight ), By( :sex ) )
);
Wait( 2 );
dt << Delete Scripts( "New Script" );

```

**示例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
list = {"Bivariate", "Logistic"};
Wait( 2 );
dt << Delete Scripts( list );

```

### Delete Table Property

**语法:** obj &lt;&lt; Delete Table Property

**说明:** 删除脚本的别名。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Table Script(
	"New Script",
	Distribution( Column( :Height, :Weight ), By( :sex ) )
);
Wait( 2 );
dt << Delete Table Property( "New Script" );

```

### Delete Table Variable

**语法:** obj &lt;&lt; Delete Table Variable( name )

**说明:** 删除数据表中存储的表变量。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Table Variable( "Days", 42 );
Wait( 2 );
dt << Delete Table Variable( "Days" );

```

### Delete Tag

**语法:** Delete Tag(&lt;tag&gt;|{&lt;tag&gt;, &lt;tag&gt;, ...}, [force(0|1)

**说明:** 从表中删除标记。若任何列仍然使用标记，则不会删除它们，除非提供了 Force(1) 标记。

**JMP添加的版本:** 19

**Delete tag**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Define Tag( "ID" );
Wait( 3 );
dt << Delete Tag( "ID" );

```

**Force delete**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Define Tag( "ID" );
:height << Set Property( "Tags", {"ID"} );
Wait( 3 );
dt << Delete Tag( "ID", Force( 1 ) );

```

### Deselect Column Group

**语法:** obj &lt;&lt; Deselect Column Group( name of group | list of names )

**说明:** 取消选择列组。 若省略了列组，则取消选择所有列组。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << group columns( "xy", {:X, :y} );
dt << group columns( "pollutants", :Ozone :: :Lead );
dt << select column group();
Wait( 2 );
dt << deselect column group( "pollutants" );

```

### Disable Undo

**语法:** obj &lt;&lt; Disable Undo( state=0|1 )

**说明:** 当设置该选项时，无法撤销对数据表的任何操作。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << disable undo( 1 );

```

### End Data Update

**语法:** obj &lt;&lt; End Data Update

**说明:** 发送自发出“开始数据更新”命令以来保留的所有更新消息。这对于在无中断的情况下更新许多单元格很有用。这仅适用于数据单元格中的更改。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Central Limit Theorem.jmp" );
dt << Add Rows( 2000 );
dt << Distribution( Column( :"N=1"n, :"N=5"n, :"N=10"n ) );
Wait();
dt << Begin Data Update;
dt << Add Rows( 2000 );
dt << End Data Update;

```

### Exclude Columns

**语法:** obj &lt;&lt; Exclude Columns( &lt; 0|1 &gt; | &lt; { column1, column2, ... } &gt; )

**说明:** 从任何分析运行中排除列

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Exclude Columns( 1, {:Age, :Name} );

```

### Exit Filter View

**语法:** obj &lt;&lt; Exit Filter View

**说明:** 返回到未过滤的视图。若已位于未过滤的视图中，则不起任何作用。

**JMP添加的版本:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
dt << New Filter View(
	"Dream",
	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) )
);
Wait( 1 );
dt << Exit Filter View;

```

### Expand All Column Groups

**语法:** obj &lt;&lt; Expand All Column Groups

**说明:** 展开所有列组

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
dt << Group Columns( "Monday", BP 8M, 3 );
dt << Group Columns( "Wednesday", BP 8W, 3 );
dt << Group Columns( "Friday", BP 8F, 3 );
dt << Collapse All Column Groups;
Wait( 2 );
dt << Expand All Column Groups;

```

### Fit Model

**语法:** Fit Model( Y( columns ), Effects( columns ), Personality( "Standard Least Squares" ) )

**说明:** 拟合线性回归模型，包括方差分析、Logistic 回归、方差分量、惩罚回归、逐步回归、多元方差分析和生存模型。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run Model()
);

```

### Get Active Filter View

**语法:** fv = obj &lt;&lt; Get Active Filter View

**说明:** 获取活动过滤器视图。返回一个 FilterView 对象。

**JMP添加的版本:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
dt << New Filter View(
	"Dream",
	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) )
);
fv active = dt << Get Active Filter View;
Show( fv active << Get Name );

```

### Get All Columns As Matrix

**语法:** obj &lt;&lt; Get All Columns As Matrix

**说明:** 将数据表作为矩阵返回。字符列根据排序水平编号，从 1 开始。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
m = dt << Get All Columns As Matrix();
Show( m );

```

### Get As Report

**语法:** obj &lt;&lt; Get As Report

**说明:** 返回数据表的报表。

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
jmp_report = New Window( "Big Class",
	Text Box( "Big Class" ),
	H List Box( Outline Box( "Big Class", dt << Get As Report ) ), 

);

```

**示例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Where( :Age < 14 );
dt << Select Columns( :name, :age, :height );
jmp_report = New Window( "Big Class",
	Text Box( "Big Class" ),
	H List Box( Outline Box( "Big Class", dt << Get As Report ) ), 

);

```

### Get Cell Height

**语法:** obj &lt;&lt; Get Cell Height

**说明:** 获取行的显示高度。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
ht = dt << Get Cell Height;

```

### Get Column Group

**语法:** obj &lt;&lt; Get Column Group( name of column group | list of names )

**说明:** 返回列组中列的列表。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << group columns( "xy", {:X, :y} );
dt << group columns( "pollutants", :Ozone :: :Lead );
dt << get column group( "xy" );

```

### Get Column Groups Names

**语法:** obj &lt;&lt; Get Column Groups Names

**说明:** 返回列组的名称。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << group columns( "xy", {:X, :y} );
dt << group columns( "pollutants", :Ozone :: :Lead );
dt << get column groups names;

```

### Get Column Names

**语法:** obj &lt;&lt; Get Column Names( &lt;Numeric|Character|RowState&gt;, &lt;Continuous|Ordinal|Nominal&gt;,&lt;String&gt; )

**说明:** 返回数据表中的列名。若使用字符串关键字，则返回字符串。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
n = dt << Get Column Names();
Show( n );
CNames = dt << Get Column Names( Continuous );
Show( CNames );
SNames = dt << Get Column Names( String );
Show( SNames );

```

### Get Column Reference

**语法:** obj &lt;&lt; Get Column Reference( list of column names )

**说明:** 返回列表中字符串的列引用

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
refList = dt << Get Column Reference( {"sex", "age"} );
Show( refList );

```

**示例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
a = {1, 3, 4};
refList = dt << Get Column Reference( a );
Show( refList );

```

### Get Edit Lock

**语法:** obj &lt;&lt; Get Edit Lock

**说明:** 获取数据表的不被允许的操作列表。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Set Edit Lock( "Add Rows", "Delete Columns" );
Wait( 2 );
dt << Get Edit Lock();

```

### Get Excluded Columns

**语法:** obj &lt;&lt; Get Excluded Columns

**说明:** 返回当前在数据表中排除的列。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:Name << Exclude;
exCols = dt << Get Excluded Columns;
Show( exCols );

```

### Get Excluded Rows

**语法:** obj &lt;&lt; Get Excluded Rows

**说明:** 返回当前在数据表中排除的行。首选 Where。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Rows( 1 );
dt << Select Rows( 5 );
dt << Exclude();
r1 = dt << Get Excluded Rows();
r2 = Where( Excluded() );
Show( r1, r2 );

```

### Get Filter View

**语法:** fv = obj &lt;&lt; Get Filter View( name | &lt;&lt;Temporary | &lt;&lt;Unfiltered )

**说明:** Get a filter view by name, or get one of the special filter views by using <<Temporary or <<Unfiltered. If a filter view by the given name does not exist, returns Empty().

**JMP添加的版本:** 19

```jsl

Names Default To Here( 1 );
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

**语法:** { fv, ... } = obj &lt;&lt; Get Filter Views( &lt; Temporary(0|1) &gt;, &lt; Unfiltered(0|1) &gt; )

**说明:** 获取所有过滤器视图的列表。默认情况下，不包括临时和未过滤的视图。

**JMP添加的版本:** 19

```jsl

Names Default To Here( 1 );
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

**语法:** obj &lt;&lt; Get Header Height

**说明:** 获取列标题的显示高度

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
ht = dt << Get Header Height;

```

### Get Hidden Columns

**语法:** obj &lt;&lt; Get Hidden Columns

**说明:** 返回当前在数据表中隐藏的列。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:Weight << Hide;
hidCols = dt << Get Hidden Columns;
Show( hidCols );

```

### Get Hidden Rows

**语法:** obj &lt;&lt; Get Hidden Rows

**说明:** 返回当前在数据表中隐藏的行。首选 Where。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Rows( 1 );
dt << Select Rows( 5 );
dt << Hide();
r1 = dt << Get Hidden Rows();
r2 = Where( Hidden() );
Show( r1, r2 );

```

### Get Label Columns

**语法:** obj &lt;&lt; Get Label Columns

**说明:** 返回用于添加行标签的列。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
labelCols = dt << Get Label Columns;
Show( labelCols );

```

### Get Labeled Rows

**语法:** obj &lt;&lt; Get Labeled Rows

**说明:** 返回当前在数据表中已添加标签的行。首选 Where。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Rows( 1 );
dt << Select Rows( 5 );
dt << Label();
r1 = dt << Get Labeled Rows();
r2 = Where( Labeled() );
Show( r1, r2 );

```

### Get Lock

**语法:** obj &lt;&lt; Get Lock( state=0|1 )

**说明:** 检查数据表是否被锁定。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
a = dt << get lock();
Show( a );
Wait( 1 );
dt << Lock Data Table( 1 );
a = dt << get lock();
Show( a );

```

### Get MM SAS DATA Step for Formula Columns

**语法:** obj &lt;&lt; Get MM SAS DATA Step for Formula Columns

**说明:** 创建与 JMP 数据表中公式列对应的用于 Model Manager 的 SAS DATA 步代码。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Ratio", Formula( :height / :weight ) );
dt << Get MM SAS Data Step for Formula Columns;

```

### Get Name

**语法:** obj &lt;&lt; Get Name( &lt;"Ignore Extension"&gt; )

**说明:** 返回数据表的显示名称。使用可选参数“忽略扩展名”，该命令返回不带扩展名的数据表的名称

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
n = dt << Get Name();
Show( n );

```

**示例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
n = dt << Get Name( "Ignore Extension" );
Show( n );

```

### Get Path

**语法:** obj &lt;&lt; Get Path

**说明:** 返回数据表的完整路径。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
path = dt << Get Path();
Show( path );

```

### Get Property

**语法:** obj &lt;&lt; Get Property( name )

**说明:** 将数据表中的指定属性作为脚本返回。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
s = dt << Get Property( "Distribution" );
Show( s );

```

### Get Row ID Width

**语法:** obj &lt;&lt; Get Row ID Width

**说明:** 获取行 ID 区域的显示宽度

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
ht = dt << Get Row ID Width;

```

### Get Row States

**语法:** obj &lt;&lt; Get Row States

**说明:** 返回包含数据表中每一行的编码行状态值的向量。请注意，编码行状态值无法用作行状态函数（例如 Color Of）中的行状态结构。请参见示例 2 了解您可以直接使用向量的方式。

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cereal.jmp" );
rs = dt << Get Row States;
Show( rs );

```

**示例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cereal.jmp" );
rs = dt << GetRowStates;
w = Marker Of( As Row State( rs[3] ) );
dt2 = Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( dt2, 5 ) = Marker State( w );

```

### Get Rows Where

**语法:** obj &lt;&lt; Get Rows Where

**说明:** 返回数据表中满足 where 条件的行。首选 Where。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
r1 = dt << Get Rows Where( :sex == "M" );
r2 = Where( :sex == "M" );
Show( r1, r2 );

```

### Get SAS DATA Step for Formula Columns

**语法:** obj &lt;&lt; Get SAS DATA Step for Formula Columns

**说明:** 创建与 JMP 数据表中公式列对应的 SAS DATA 步代码。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Ratio", Formula( :height / :weight ) );
dt << Get SAS Data Step for Formula Columns;

```

### Get Script

**语法:** obj &lt;&lt; Get Script( &lt;script name&gt; )

**说明:** 返回请求的脚本。 若省略了脚本名称，则返回数据表的文本表示，以及数据中存储的所有脚本。

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
s = dt << Get Script;
New Window( "Script", Script Box( Char( Name Expr( s ) ) ) );

```

**示例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
s = dt << Get Script( "Distribution" );

```

### Get Script Group

**语法:** obj &lt;&lt; Get Script Group( name of script group )

**说明:** 返回组中的脚本列表。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
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

**语法:** obj &lt;&lt; Get Script Groups Names

**说明:** 返回脚本组名称列表。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
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

**语法:** obj &lt;&lt; Get Scroll Locked Columns

**说明:** 返回当前在数据表中被锁定而不能滚动的列。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:Name << Scroll Lock;
lockCols = dt << Get Scroll Locked Columns;
Show( lockCols );

```

### Get Selected Columns

**语法:** obj &lt;&lt; Get Selected Columns

**说明:** 返回数据表中选定列的名称。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Go To( :weight );
names = dt << Get Selected Columns;
Show( names );

```

### Get Selected Properties

**语法:** obj &lt;&lt; Get Selected Properties( &lt;{list of properties}&gt; )

**说明:** 将选择的表属性（变量和脚本）放入列表。您可以使用可选列表指定要获取的属性而不用进行选择。

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Properties( {2, 4} );
proplist = dt << Get Selected Properties();

```

**示例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
proplist = dt << Get Selected Properties( {2, 4} );

```

### Get Selected Rows

**语法:** obj &lt;&lt; Get Selected Rows

**说明:** 返回数据表中当前选定的行。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Rows( 1 );
dt << Select Rows( 5 );
r = dt << Get Selected Rows();
Show( r );

```

### Get Table Script Names

**语法:** obj &lt;&lt; Get Table Script Names

**说明:** 返回数据表中所有属性的名称。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
names = dt << Get Table Script Names;
Show( names );

```

### Get Table Variable

**语法:** obj &lt;&lt; Get Table Variable( name )

**说明:** 返回数据表中指定表变量的值。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Set Table Variable( "Days", 42 );
var = dt << Get Table Variable( "Days" );
Show( var );

```

### Get Table Variable Names

**语法:** obj &lt;&lt; Get Table Variable Names

**说明:** 返回数据表中所有变量的名称。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
names = dt << Get Table Variable Names;
Show( names );

```

### Get Tagged Columns

**语法:** obj &lt;&lt; Get Tagged Columns( tag|{tag1, tag2, ...}, [Intersection] )

**说明:** 返回与提供的标记匹配的列的列表。若请求交集，仅返回包含所有列出标记的列。

```jsl

Names Default To Here( 1 );
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

**语法:** dt &lt;&lt; Get Transforms()

**说明:** 检索与该数据表关联的变换列的列表。

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Transform Column( "A", Formula( :B + 1 ) );
dt << Transform Column( "B", Formula( :height + 1 ) );
Show( dt << Get Transforms() );
dt << Delete Columns( {:A, :B} );

```

### Get as Matrix

**语法:** obj &lt;&lt; Get as Matrix( &lt;list of columns by name&gt;, &lt;list of columns by number&gt;, &lt;column range&gt; )

**说明:** 以矩阵形式返回数据表中的指定列。默认为所有数值列。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
m = dt << Get As Matrix();
Show( m );
x = dt << GetAsMatrix( {4, 5} );
Show( x );

```

### Group Columns

**语法:** obj &lt;&lt; Group Columns( first column, number )obj &lt;&lt; Group Columns( {column1, column2, ...})obj &lt;&lt; Group Columns(group name | Path({&lt;a&gt;, &lt;b&gt;, ...}), {column1, column2, ...})obj &lt;&lt; Group Columns( group name | Path({&lt;a&gt;, &lt;b&gt;, ...}), first column, number )

**说明:** 将若干列组成一组。

**Add to group**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
Wait( 1 );
theGroup = dt << Group Columns( "BP", :BP 8M :: :BP 8W );
Wait( 2 );
// add to theGroup
theGroup = dt << Group Columns( theGroup, {:BP 12W} );

```

**Nested group**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
Wait( 1 );
dt << Group Columns( Path( {"Groups", "BP8"} ), :BP 8M :: :BP 8W );

```

**Using count**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
Wait( 1 );
group = dt << Group Columns( BP 8M, 9 );

```

### Group Scripts

**语法:** obj &lt;&lt; Group Scripts({ script1, script2, ...}) obj &lt;&lt; Group Scripts(group name | Path({&lt;a&gt;, &lt;b&gt;, ...}), {script1, script1, ...})

**说明:** 将若干脚本组成一组。

**JMP添加的版本:** 14

**Nested group**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << group scripts(
	Path( {"GB", "Sample Graphs"} ),
	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts",
	"Graph Builder Line Chart", "Graph Builder Heat Map"}
);

```

**Simple group**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << group scripts(
	"GB",
	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts",
	"Graph Builder Line Chart", "Graph Builder Heat Map"}
);

```

### Has Column

**语法:** dt &lt;&lt; Has Column( name, &lt; Exact Match(1|0) &gt; )

**说明:** 查询数据表是否具有给定名称的列。

**JMP添加的版本:** 18

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Has Column( "weight" );

```

**示例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Show(
	dt << Has Column( "Weight" ),
	dt << Has Column( "Weight", Exact Match( 1 ) ),
	dt << Has Column( "a g e" ),
	dt << Has Column( "a g e", Exact Match( 1 ) )
);

```

### Has data view

**语法:** obj &lt;&lt; Has data view

**说明:** 若数据表包含打开的可见窗口，则返回真。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << Has Data View();

```

### Hide Columns

**语法:** obj &lt;&lt; Hide Columns( &lt; 0|1 &gt; | &lt; { column1, column2, ... } &gt; )

**说明:** 隐藏数据网格中的列

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Hide Columns( 1, {:Age, :Name} );

```

### Is Dirty

**语法:** obj &lt;&lt; Is Dirty

**说明:** 查询是否已修改数据表。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
a = dt << is Dirty;
Show( a );
dt << add rows( 5 );
b = dt << is dirty;
Show( b );

```

### Is Linked Subset

**语法:** obj &lt;&lt; Is Linked Subset

**说明:** 查询数据表是否是链接的子集

**JMP添加的版本:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
linkedSubset = dt << Subset( All Rows, Link To Original Data Table( 1 ) );
subset = dt << Subset( All Rows );
Show( dt << Is Linked Subset, linkedSubset << Is Linked Subset, subset << Is Linked Subset );

```

### JMP Query Builder

**语法:** obj &lt;&lt; JMP Query Builder

**说明:** 生成有关一个或多个 JMP 数据表的查询。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << JMP Query Builder();

```

### Join

**语法:** obj &lt;&lt; Join( &lt;Private&gt;, &lt;Invisible&gt;,With( Data Table( name )), By Matching Columns( column1 = column2, ...), Selected( columns ), SelectedWith( columns ), &lt;Drop Multiples( 0|1, 0|1 )&gt;, &lt;Include nonmatches( 0|1, 0|1 )&gt;,&lt;Copy formula( 0|1 )&gt;, &lt;Suppress Formula Evaluation&gt;, &lt;Update&gt;, &lt;Merge Same Name Columns&gt;, &lt;Preserve Main Table Order&gt; )

**说明:** 将多个数据表合并为一个新的数据表。可以通过行分配、匹配列值或以笛卡尔方式合并数据。

```jsl

Names Default To Here( 1 );
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

**语法:** obj &lt;&lt; Journal

**说明:** 从数据表创建记录。仅包括数据网格，不包括注释、变量和脚本。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Journal();

```

### Journal Link

**语法:** dt &lt;&lt; Journal Link( &lt; Save( &lt;filepath&gt; ) | Embed( ) &gt;, &lt; Button Name( "Ben") &gt; )

**说明:** 将数据表链接按钮追加至记录。使用 embed() 或 save()，但不同时使用。Embed() 没有选项。Save() 选项类似于 dt<<save()。使用 ButtonName() 覆盖按钮标签。返回新的链接按钮。

```jsl

Names Default To Here( 1 );
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

**语法:** obj &lt;&lt; Last Modified

**说明:** 将上次保存修改的日期返回至数据表。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
date = dt << Last Modified();
Show( date );

```

### Lock Data Table

**语法:** obj &lt;&lt; Lock Data Table( state=0|1 )

**说明:** 锁定数据表以便无法添加或编辑值。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Lock Data Table( 1 );
// Now try changing a value in the data table.

```

### MSA Variability Chart

**语法:** obj &lt;&lt; MSA Variability Chart( Y( column ), X( columns ) )

**说明:** 显示变异性图，该图说明了测量值在类别间如何变化，并且执行用来检查均值和方差如何在类别间变化的分析。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );

```

### Make Indicator Columns

**语法:** obj &lt;&lt; Make Indicator Columns

**说明:** 将名义型或有序型列转换为多个列，其列数与类别数相同。生成列的列名是源列的类别。生成列的值为 0 或 1。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
dt << Make Indicator Columns( columns( {:species, :season} ) );

```

### Make RowState Handler

**语法:** rs = dt &lt;&lt; Make RowState Handler( function(a) )

**说明:** 创建针对数据表的行状态处理程序。函数的参数保留行状态已更改的行。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
f = Function( {a}, Print( a ) );
rs = dt << make row state handler( f );
dt << Select Rows( 1 );
dt << Select Rows( 5 );

```

### Make SAS DATA Step

**语法:** sd = dt &lt;&lt; Make SAS Data Step( )sd = dt &lt;&lt; Make SAS Data Step( SaveJMPMetadata(true) )

**说明:** 将数据表作为 SAS DATA 步返回。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
sd = dt << Make SAS Data Step();
Show( sd );

```

### Make SAS DATA Step Window

**语法:** sd = dt &lt;&lt; Make SAS Data Step Window( )sd = dt &lt;&lt; Make SAS Data Step Window( SaveJMPMetadata(true) )

**说明:** 打开 SAS 类型的新窗口并基于数据表创建 SAS DATA 步。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
sd = dt << Make SAS Data Step Window();

```

### Merge Referenced Data

**语法:** obj &lt;&lt; Merge Referenced Data

**说明:** 通过将源表中的数据合并至引用列并取消链接它们，使表独立。引用列的“链接引用”属性也会被删除。

```jsl

Names Default To Here( 1 );
dt1 = Open( "$SAMPLE_DATA\Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA\Pizza Responses.jmp" );
dt1:ID << Set Property( "Link ID", 1 );
dt2:Choice << Set Property( "Link Reference", Reference Table( dt1 ) );
dt2:Choice1 << Set Property( "Link Reference", Reference Table( dt1 ) );
dt2:Choice2 << Set Property( "Link Reference", Reference Table( dt1 ) );
dt2 << Merge Referenced Data();

```

### Missing Data Pattern

**语法:** obj &lt;&lt; Missing Data Pattern( columns( columns ), &lt;Output Table( name )&gt; )

**说明:** 查找数据表中缺失值的模式，并创建一个包含各个模式及其频数的表。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << Missing Data Pattern(
	columns( :POP, :Max deg. F Jan, :OZONE, :CO, :SO2, :NO, :PM10, :Lead )
);

```

### Move Column Group

**语法:** obj &lt;&lt; Move Column Group( name of group | Path({&lt;a&gt;, &lt;b&gt;, ...}), to first | to last | after(column) | after(group) | after(Path({&lt;a&gt;, &lt;b&gt;, ...})) )

**说明:** 将列组移至指定位置。 若省略了列组名称，则移动所有组。

**After group**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << group columns( "xy", {:X, :y} );
dt << group columns( "pollutants", :Ozone :: :Lead );
dt << move column group( "Pollutants", after( "xy" ) );

```

**Move all**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << group columns( "xy", {:X, :y} );
dt << group columns( "pollutants", :Ozone :: :Lead );
dt << move column group( to first );

```

**To first**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << group columns( "xy", {:X, :y} );
dt << group columns( "pollutants", :Ozone :: :Lead );
dt << move column group( "xy", to first );

```

### Move Script Group

**语法:** obj &lt;&lt; Move Script Group( name of group | Path({&lt;a&gt;, &lt;b&gt;, ...}), to first | to last | after(script) | after(group) | after(Path({&lt;a&gt;, &lt;b&gt;, ...})) )

**说明:** 将脚本组移至指定位置。若省略了脚本组名称，则移动所有组。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
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

**语法:** obj &lt;&lt; Move Selected Scripts( script|list of scripts|group|Path({&lt;a&gt;, &lt;b&gt;, ...}), to first | to last | after(script) | after(group) | after(Path({&lt;a&gt;, &lt;b&gt;, ...})) )

**说明:** 将脚本移至指定位置。

**JMP添加的版本:** 14

**After group**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << group scripts(
	"GB",
	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts",
	"Graph Builder Line Chart", "Graph Builder Heat Map"}
);
dt << Move Selected scripts( {"Logistic"}, after( "GB" ) );

```

**Move Group**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << group scripts(
	Path( {"GB", "Graphs"} ),
	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts",
	"Graph Builder Line Chart", "Graph Builder Heat Map"}
);
dt << Move Selected scripts( Path( {"GB", "Graphs"} ), after( "Contingency" ) );

```

**To first**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Move Selected scripts(
	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts",
	"Graph Builder Line Chart", "Graph Builder Heat Map"},
	to first
);

```

### Move down

**语法:** obj &lt;&lt; Move down

**说明:** 将数据表第一行中的值替换为列名称并将列名称替换为默认的排序名称。

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Move down;

```

### Move up

**语法:** obj &lt;&lt; Move up

**说明:** 将列名替换为数据表第一行中的值。

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Move up;

```

### Move up and append

**语法:** obj &lt;&lt; Move up and append

**说明:** 通过将数据表第一行中的值追加至相应的列名称来替换列名称。

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Move up and append;

```

### New Data Box

**语法:** obj &lt;&lt; New Data Box( &lt; &lt;&lt;Enable Filter Views(0|1) &gt; )

**说明:** 在显示框树中生成数据表视图。将当前数据表更改为给定的数据表。可选的 Enable Filter Views 参数会控制视图是否允许过滤器视图; 默认设置是允许。

```jsl

Names Default To Here( 1 );
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

**语法:** obj &lt;&lt; New Data View

**说明:** 创建新的数据表视图。该视图链接至原始视图，因为所有突出显示或更改的内容都会影响原始视图。当您需要滚动到同一个表的不同部分时，这会很有用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << New Data View();

```

### New Filter View

**语法:** fv = dt &lt;&lt; New Filter View( &lt; name &gt;, &lt; Copy From(name|obj) &gt;, &lt; Temporary(0|1) &gt;, &lt; Active(0|1) &gt;, &lt; DataFilter(expr) &gt;)

**说明:** 创建新的过滤器视图。返回创建的 FilterView 对象。默认情况下，新的过滤器视图将处于活动状态。若不命名该筛选器视图，则该视图是临时的，除非将“临时”设置为零。

**JMP添加的版本:** 19

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
dt << New Filter View(
	"Dream",
	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) )
);

```

**示例 2**

```jsl

Names Default To Here( 1 );
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

**示例 3**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
fv = dt << New Filter View(
	Data Filter( Add Filter( Columns( :Sex ), Where( Is Missing( :Sex ) ) ) )
);
dt << New Filter View( "Unknown Sex", CopyFrom( fv ), Active( 0 ) );

```

### New Script

**语法:** New Property( name, script ) New Script( name, script )

**说明:** 在数据表中创建新属性并将其设置为脚本。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Script( "New Script", Distribution( Column( :Height, :Weight ), By( :sex ) ) );

```

### New Table Variable

**语法:** obj &lt;&lt; New Table Variable( name, number )

**说明:** 在数据表中创建新变量并将其设置为常数值。若存在一个具有相同名称的现有变量，则将在新变量的名称后面追加一个数字以使其唯一。在大多数情况下，推荐使用类似的命令 Set Table Variable。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Table Variable( "Days", 42 );

```

### OC Curves

**语法:** obj &lt;&lt; OC Curves

**说明:** 创建一个图形，它将过程中未检测到偏移的概率绘制为偏移大小的函数。

**JMP添加的版本:** 16

### Partition

**语法:** obj &lt;&lt; Partition( Y( column ), X( column(s) ) )

**说明:** 根据预测变量与响应值之间的关系通过对数据进行递归分割来构造决策树。响应和预测变量都可以为连续或分类数据。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << Partition(
	Y( :Y ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Split Best( 3 )
);

```

### Paste Column Properties

**语法:** obj &lt;&lt; Paste Column Properties

**说明:** 从剪贴板获取列属性的多个列表并粘贴至多个列。您可以选择指定目标列的列表，而不用在数据表中选择它们。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );
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

**语法:** obj &lt;&lt; Recode

**说明:** 将选定列的旧值重新编码为新值。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Go To( :weight );
dt << Recode;

```

### Recode Column

**语法:** obj &lt;&lt; Recode Column(&lt;source column reference&gt;, {&lt;transform&gt;, ...}, &lt;Update Properties(0|1)&gt;, &lt;By Word(Delimiters(&lt;chars&gt;)&gt;, Target Column(&lt;column reference&gt; | &lt;column name&gt;))

**说明:** 将列出的变换应用于源列中的每个值，并在原始列或指定的目标列中存储结果。“按单词”选项将提供的字符数据拆分为更小的输入值。一旦确定输入值，变换会分别应用于这些值。

命令执行时会填充特殊的 JSL 变量:

	_rcNow 是前面的变换之后输入的当前值。

	_rcOrig 是输入的原始值。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );
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

**语法:** obj &lt;&lt; Rename Column Group( oldname | Path({&lt;a&gt;, &lt;b&gt;, ...}), newname )

**说明:** 重命名列组。

**Nested Group**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << group columns( Path( {"xy", "Cols"} ), {:X, :y} );
Wait( 1 );
dt << rename column group( Path( {"xy"} ), "XY" );
dt << rename column group( Path( {"XY", "Cols"} ), "Columns" );

```

**Simple Group**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << group columns( "xy", {:X, :y} );
dt << group columns( "pollutants", :Ozone :: :Lead );
Wait( 1 );
dt << rename column group( "xy", "coordinates" );

```

### Rename Script Group

**语法:** obj &lt;&lt; Rename Script Group( oldname | Path({&lt;a&gt;, &lt;b&gt;, ...}), newname )

**说明:** 重命名脚本组

**JMP添加的版本:** 14

**Nested group**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << group scripts(
	Path( {"GB", "Graphs"} ),
	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts",
	"Graph Builder Line Chart", "Graph Builder Heat Map"}
);
dt << rename script group( Path( {"GB", "Graphs"} ), "My Graphs" );

```

**Simple group**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << group scripts(
	"GB",
	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts",
	"Graph Builder Line Chart", "Graph Builder Heat Map"}
);
dt << rename script group( "GB", "GraphBuilders" );

```

### Rename Table Property

**语法:** obj &lt;&lt; Rename Table Property( old name, new name )

**说明:** 重命名指定的表属性。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Script( "New Script", Distribution( Column( :Height, :Weight ), By( :sex ) ) );
Wait( 1 );
dt << Rename Table Property( "New Script", "Great Script" );

```

### Rename Table Script

**语法:** obj &lt;&lt; Rename Table Script( old name, new name )

**说明:** 重命名指定的表脚本。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Script( "New Script", Distribution( Column( :Height, :Weight ), By( :sex ) ) );
Wait( 1 );
dt << Rename Table Script( "New Script", "Great Script" );

```

### Rename Table Variable

**语法:** obj &lt;&lt; Rename Table Variable( old name, new name )

**说明:** 重命名指定的表变量。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Table Variable( "Days", 42 );
Wait( 2 );
dt << Rename Table Variable( "Days", "Hours" );

```

### Rerun Formulas

**语法:** obj &lt;&lt; Rerun Formulas

**说明:** 重新计算数据表中的所有列公式。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Central Limit Theorem.jmp" );
dt << Add Rows( 100 );
dt << Rerun Formulas;

```

### Reset Transforms

**语法:** dt &gt;&gt; Reset Transforms()

**说明:** 当访问变换列时，它们会缓存其数据供将来调用。该函数会删除这些数据。若再次访问列，将会重新创建数据。

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Reset Transforms();

```

### Revert

**语法:** obj &lt;&lt; Revert

**说明:** 恢复对数据表的任何更改。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Set Row States(
	[33, 33, 33, 33, 33, 97, 97, 97, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 768]
);
Wait( 2 );
dt << revert();

```

### Run Formulas

**语法:** obj &lt;&lt; Run Formulas

**说明:** 执行所有待执行的公式计算。并不是计算所有公式。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Central Limit Theorem.jmp" );
dt << Add Rows( 10000 );
dt << Run Formulas();
Distribution( Column( :"N=1"n, :"N=5"n, :"N=10"n ) );

```

### Run Script

**语法:** obj &lt;&lt; Run Script( name )

**说明:** 运行数据表中存储为属性的指定脚本。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Run Script( "Distribution" );

```

### Save

**语法:** obj &lt;&lt; Save( &lt;filepath&gt;, &lt;file type&gt; ) obj &lt;&lt; Save As( filepath, &lt;file type&gt; )

**说明:** 将数据表保存为任何支持的格式。支持的格式包括 .jmp、.xls、.xlsx、.txt、.csv、.tsv、.xpt、.v8xpt 和 .stx。部分格式仅在 Windows 上得到支持。详细信息，请参见“使用 JMP”。

```jsl

Names Default To Here( 1 );
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

**语法:** obj &lt;&lt; Save( &lt;filepath&gt;, &lt;file type&gt; ) obj &lt;&lt; Save As( filepath, &lt;file type&gt; )

**说明:** 将数据表保存为任何支持的格式。支持的格式包括 .jmp、.xls、.xlsx、.txt、.csv、.tsv、.xpt、.v8xpt 和 .stx。部分格式仅在 Windows 上得到支持。详细信息，请参见“使用 JMP”。

```jsl

Names Default To Here( 1 );
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

**语法:** obj &lt;&lt; Save Database( connectInfo, TableName )

**说明:** 将数据表保存回数据库。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Save Database( "Connect Dialog", "My_Class" );

```

### Screen Predictors

**语法:** obj &lt;&lt; Screen Predictors

**说明:** 这是“预测变量筛选”的别名和旧名称

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Bands Data.jmp" );
obj = dt << Predictor Screening( Y( :Banding? ), X( Column Group( "Predictors" ) ) );

```

### Select Column Group

**语法:** obj &lt;&lt; Select Column Group( name of group | list of names )

**说明:** 选择列组。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << group columns( "xy", {:X, :y} );
dt << group columns( "pollutants", :Ozone :: :Lead );
dt << select column group( "xy", "pollutants" );

```

### Select Properties

**语法:** obj &lt;&lt; Select Properties( { property1, property2, ... )

**说明:** 选择指定表属性，其中列表可以是属性名称的列表或属性的索引。

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
proplist = dt << Select Properties( {2, 4} );

```

**示例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
proplist = dt << Select Properties( {"Bivariate", "Logistic"} );

```

### Select Script Group

**语法:** obj &lt;&lt; Select Script Group( &lt;name of group | { group1, group2, ...} &gt; )

**说明:** 选择脚本组。若没有指定脚本组，则选择所有组。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
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

**语法:** obj &lt;&lt; Select Scripts( &lt;name of script | { script1, script2, ...} &gt; )

**说明:** 选择命名的脚本。

**JMP添加的版本:** 14

**示例 1**

```jsl

Names Default To Here( 1 );
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

**示例 2**

```jsl

Names Default To Here( 1 );
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

**语法:** obj &lt;&lt; Select columns( &lt;column&gt;, &lt;column&gt;, ... )

**说明:** 选择指定的列。要选择所有列，使用关键字“All”。

**JMP添加的版本:** 14

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
dt << Select Columns( :Height );

```

**示例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
dt << Select Columns( "All" );

```

**示例 3**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
clist = {:Height, :Weight};
dt << Select Columns( clist );

```

### Sequencing Variants Toolset

**语法:** obj &lt;&lt; Sequencing Variants Toolset

**说明:** 测序变异工具集插件平台的界面

### Set Active Filter View

**语法:** obj &lt;&lt; Set Active Filter View( name | obj )

**说明:** 设置活动过滤器视图

**JMP添加的版本:** 19

```jsl

Names Default To Here( 1 );
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

**语法:** obj &lt;&lt; Set Cell Height( number )

**说明:** 设置每个数据表单元格的显示高度。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Set Cell Height( 20 );

```

### Set Dirty

**语法:** obj &lt;&lt; Set Dirty( state=0|1 )

**说明:** 将数据表标记为已更改，即使还没有发生更改。这对于在关闭窗口时提示保存很有用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Set Dirty();

```

### Set Edit Lock

**语法:** obj &lt;&lt; Set Edit Lock( [ &lt;"Modify Cells"&gt;, &lt;"Add rows"&gt;, &lt;"Add Columns"&gt;, &lt;"Delete Rows"&gt;, &lt;"Delete Columns"&gt;] )

**说明:** 不允许对数据表执行指定的操作。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Set Edit Lock( "Add Rows", "Delete Columns" );

```

### Set Header Height

**语法:** obj &lt;&lt; Set Header Height( number )

**说明:** 设置列标题的显示高度

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Set Header Height( 20 );

```

### Set Label Columns

**语法:** obj &lt;&lt; Set Label Columns( column(s) )

**说明:** 将标签角色分配给数据表中的选定列。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
Wait( 1 );
dt << Set Label Columns( :City, :State );

```

### Set Matrix

**语法:** obj &lt;&lt; Set Matrix( [ matrix with rows separated by commas ] )

**说明:** 根据矩阵创建数据表。

```jsl

Names Default To Here( 1 );
dt = New Table( "B" );
dt << Set Matrix( [12 59 95, 12 61 123, 12 55 74, 12 66 145] );

```

### Set Name

**语法:** obj &lt;&lt; Set Name( new TableName )

**说明:** 更改数据表的名称。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Set Name( "New Class" );

```

### Set Property

**语法:** obj &lt;&lt; Set Property( name, script )

**说明:** 在数据表中创建新属性并将其设置为脚本。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Set Property( "New Script", Distribution( Column( :Height, :Weight ), By( :sex ) ) );

```

### Set Row ID Width

**语法:** obj &lt;&lt; Set Row ID Width( number )

**说明:** 设置行 ID 区域的显示宽度

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Set Row ID Width( 80 );

```

### Set Row States

**语法:** obj &lt;&lt; Set Row States( [state1, state2, ... stateN] )

**说明:** 为数据表中的所有行设置行状态。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Set Row States(
	[33, 33, 33, 33, 33, 97, 97, 97, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 768]
);

```

### Set Scroll Lock Columns

**语法:** obj &lt;&lt; Set Scroll Lock Columns( column(s) )

**说明:** 锁定数据表中的选定列使其不能滚动。为指明列是锁定的，背景色会更改。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << Set Scroll Lock Columns( :City );

```

### Set Table Variable

**语法:** obj &lt;&lt; Set Table Variable( name, number )

**说明:** 在数据表中创建新变量并将其设置为常数值。具有相同名称的现有变量将被覆盖。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Set Table Variable( "Days", 42 );

```

### Show Header Filter Icons

**语法:** obj &lt;&lt; Show Header Filter Icons( state=0|1 )

**说明:** Show or hide the filter icons on columns in the current filter view.

**JMP添加的版本:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lipid Data.jmp" );
dt << Show Header Filter Icons( 0 );

```

### Show Header Graphs

**语法:** obj &lt;&lt; Show Header Graphs( state=0|1 )

**说明:** Show or hide the header graphs in the data table display.

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lipid Data.jmp" );
dt << Show Header Graphs( 0 );

```

### Show Header Groups

**语法:** obj &lt;&lt; Show Header Groups( state=0|1 )

**说明:** Show or hide the column groups in the data table display.

**JMP添加的版本:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lipid Data.jmp" );
dt << Show Header Groups( 0 );

```

### Show Header Statistics

**语法:** obj &lt;&lt; Show Header Statistics( state=0|1 )

**说明:** Show or hide the header statistics in the data table display.

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lipid Data.jmp" );
dt << Show Header Statistics( 0 );

```

### Show Header Tags

**语法:** obj &lt;&lt; Show Header Tags( state=0|1 )

**说明:** Show or hide the column tags in the data table display.

**JMP添加的版本:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lipid Data.jmp" );
dt << Show Header Tags( 0 );

```

### Show Hidden Columns In Columns List

**语法:** obj &lt;&lt; Show Hidden Columns In Columns List( state=0|1 )

**说明:** 禁用该选项可省略数据表“列”列表中的“已隐藏”列。这些列从不显示在数据网格中。

**JMP添加的版本:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << Hide Columns( 1, {:"pop- m"n, :Max deg. F Jan, :X, :Y} );
Wait( 1 );
dt << Show Hidden Columns In Columns List( 0 );

```

### Show Transforms

**语法:** dt &lt;&lt; Show Transforms()

**说明:** 将与该数据表及其平台关联的变换列的有关信息打印至日志。这是信息性内容，格式可能会更改。它不应被解析。

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Transform Column( "A", Formula( :height + 1 ) );
dt << Show Transforms();
dt << Delete Columns( :A );

```

### Sort

**语法:** obj &lt;&lt; Sort( &lt;Private&gt;, &lt;Invisible&gt;, &lt;Replace table&gt;, By( column ), Order( ascending|descending ) )

**说明:** 创建一个新的数据表，该表按指定的列以升序或降序排序。

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Sort( By( :name ), Order( Ascending ) );

```

**示例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Sort( replace table, By( :name ), Order( Ascending ) );

```

### Split

**语法:** obj &lt;&lt; Split( Split( columns ), Split by( column ), &lt;Group(column)&gt;, &lt;Private&gt;|&lt;Invisible&gt;, &lt;Remaining Columns( Keep All | Drop All | Drop( columns ) | Keep( columns ) )&gt;, &lt;Copy formula( 0|1 )&gt;, &lt;Suppress formula evaluation( 0|1 )&gt;, &lt;Sort by Column Property&gt;, &lt;Output Table( "name" )&gt; )

**说明:** 创建一个新的数据表，该表将一列的几行映射为几列中的一行。

```jsl

Names Default To Here( 1 );
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

**语法:** obj &lt;&lt; Stack( &lt;Private&gt;, &lt;Invisible&gt;, columns( columns ), &lt;Source Label Column( string )&gt;, &lt;Stacked Data Column( string )&gt;, &lt;Copy formula( 0|1 )&gt;, &lt;Number of Series(n)&gt;, &lt;Contiguous&gt;, &lt;Drop All Other Columns(1) | Name("Non-stacked columns")(Keep( col1, ... )) | Name("Non-stacked columns")(Drop( col1, ... ))&gt;, &lt;Output Table( "name" )&gt;) )

**说明:** 创建新数据表，来自多个列中的值被堆叠到单个列中。

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
dt << Stack(
	columns( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Source Label Column( "Time" ),
	Stacked Data Column( "Log Hist" )
);

```

**示例 2**

```jsl

Names Default To Here( 1 );
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

**示例 3**

```jsl

Names Default To Here( 1 );
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

**语法:** obj &lt;&lt; Subscribe( Key( &lt;"client"&gt; ), OnDeleteColumns| OnAddColumns| OnAddRows| OnDeleteRows| OnRenameColumn | OnClose | OnSave | OnRename (function) )

**说明:** 订阅以获取关于数据表中更改的消息。键为订阅名称，因此可以引用它。可选参数 client 会在用户尝试关闭数据表时触发关闭确认。函数可以是先前定义的函数的名称或函数本身。On Close 仅需要一个函数参数：数据表。其他消息需要另外的参数：列的列表或受影响的行数。每个订阅会一直有效，直到您取消订阅为止。

**示例 1**

```jsl

Names Default To Here( 1 );
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

**示例 2**

```jsl

Names Default To Here( 1 );
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

**示例 3**

```jsl

Names Default To Here( 1 );
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

**语法:** obj &lt;&lt; Subset( &lt;Private&gt;, &lt;Invisible&gt;, &lt;Selected columns&gt;, &lt;Columns(column list)&gt;, &lt;All rows | Selected Rows | Filtered Rows(where clause) | Rows([number, number, ...])&gt;, &lt;By(column list)&gt;, &lt;Sampling Rate(fraction)&gt;, &lt;Sample Size(integer)&gt;, &lt;Stratify(column list)&gt;, &lt;Link to original data table(0|1)&gt;, &lt;Copy formula(0|1)&gt;, &lt;Suppress Formula Evaluation&gt;, &lt;Keep by columns&gt; )

**说明:** 依据源数据表中的选定行和列创建新的数据表。您还可以随机选择要取子集的行。

**依据**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Subset( By( :sex ), Keep by columns );

```

**分层样本**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Subset( Sample Size( 10 ), Stratify( :sex ) );

```

**行**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Subset( Rows( [28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40] ) );

```

**过滤的行**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Subset( Filtered Rows( :age == 14 & Contains( :name, "E" ) ) );

```

### Summary

**语法:** obj &lt;&lt; Summary( &lt;Private&gt;, &lt;Invisible&gt;, FREQ(column | "none"), WEIGHT(column | "none"),Group( columns ),Subgroup(columns), &lt;N (column)&gt;, &lt;Mean( column )&gt;, &lt;Std Dev( column )&gt;, &lt;Min( column )&gt;, &lt;Max( column )&gt;, &lt;Range( column )&gt;, &lt;Sum( column )&gt;, &lt;CV( column )&gt;...,Include marginal statistics, Link to original data table (0|1),statistics column name format( "stat(column)" | "column" | "stat of column" | "column stat" | "stat") )

**说明:** 创建汇总统计量的新数据表。若指定，则分组变量的每个水平或多个分组变量的每个水平组合都有一行。

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Summary(
	Group( :Age ),
	subgroup( :sex ),
	Mean( :Height ),
	Include marginal statistics
);

```

**示例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Summary(
	Group( :Age ),
	Mean( :Height ),
	statistics column name format( "stat of column" )
);

```

### Suppress Formula Eval

**语法:** obj &lt;&lt; Suppress Formula Eval( state=0|1 )

**说明:** 禁止或启用公式计算。这对快速添加行，运行多个分析以及排序很有用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Central Limit Theorem.jmp" );
dt << Add Rows( 2000 );
dt << Suppress Formula Eval( 1 );
dt << Add Rows( 2000 );
dt << Suppress Formula Eval( 0 );

```

### Text to Columns

**语法:** obj &lt;&lt; Text to Columns( delimiters(&lt;"separator"&gt;, &lt;TAB&gt;, &lt;NEWLINE&gt;), columns(column1, column2, ...) )

**说明:** 将包含嵌入式分隔符的字符串列转换为多个单独的列。结果列可以是指示符列。 分隔符可以是任何字符、关键字 TAB 或关键字 NEWLINE。

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
dt << Text To Columns( delimiter( "," ), columns( :Brush Delimited ) );

```

**示例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
dt << Text To Columns(
	delimiter( "," ),
	columns( :Brush Delimited ),
	Make Indicator Columns( 1 )
);

```

### Torch Deep Learning

**语法:** obj &lt;&lt; Torch Deep Learning

**说明:** Torch 深度学习插件平台的界面

### Transform Column

**语法:** dt &lt;&lt; Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Replace(0|1)], [Private(0|1)], [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]

**说明:** 创建与目标表关联的变换列。变换列可以类似于真实列那样被访问。

	名称: 列的名称

	Formula: 定义变换列中的数据的公式

	Replace: 使用该标志，使用与现有变换相同名称定义的变换将替换现有变换。不使用该标志，若它是等价的，将返回现有变换；否则，新列的名称将更改为非重复的。

	Private: 使用该标志，列选择器列表中将不出现列

	数据类型: 可以选择指定数据类型。若未指定，它将从第一行推断。

	建模类型: 可以选择指定建模类型。若未指定，将使用数据类型的默认值。

	列属性: 是您希望设置的任何标准列属性。您也可以在创建列之后对它进行设置。

**JMP添加的版本:** 16

**Nested**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Transform Column( "A", Formula( :B + 1 ) );
dt << Transform Column( "B", Formula( :height + 1 ) );
Show( :A[1] );
dt << Delete Columns( {:A, :B} );

```

**Random**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Transform Column( "Predictable", Formula( Random Uniform() ), Random Seed( 314 ) );
dt << Transform Column( "Random", Formula( Random Uniform() ) );
Show( :Predictable[1], :Random[1] );
dt << Delete Columns( {:Predictable, :Random} );

```

**Simple**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Transform Column( "A", Formula( :height + 1 ) );
Show( :A[1] );
dt << Delete Columns( :A );

```

### Transpose

**语法:** obj &lt;&lt; Transpose( &lt;Private&gt;, &lt;Invisible&gt;,columns( columns ), By( column ), &lt;Label( column )&gt;, &lt;Output Table( name )&gt; )

**说明:** 从源表创建新的数据表，在该表中行和列被交换。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
dt << Transpose(
	columns( :BP 8M, :BP 12M, :BP 6M, :BP 8W, :BP 12W, :BP 6W, :BP 8F, :BP 12F, :BP 6F ),
	By( :Dose ),
	Label( :Subject )
);

```

### Type 1 Gauge

**语法:** obj &lt;&lt; Type 1 Gauge( Y( column ) )

**说明:** 使用“1 型量具”方法来分析测量系统的连续数据，以评估在一个部件上的测量过程的能力。

```jsl

Names Default To Here( 1 );
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

**语法:** obj &lt;&lt; Ungroup Columns( {column1, column2, ...} | Column Group( group name ) )

**说明:** 取消组合若干列。

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
dt << Group Columns( "Monday", BP 8M, 3 );
dt << Group Columns( "Wednesday", BP 8W, 3 );
dt << Group Columns( "Friday", BP 8F, 3 );
Wait( 2 );
dt << Ungroup Columns();

```

**示例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
dt << Group Columns( "Monday", BP 8M, 3 );
dt << Group Columns( "Wednesday", BP 8W, 3 );
dt << Group Columns( "Friday", BP 8F, 3 );
Wait( 2 );
dt << Ungroup Columns( Column Group( "Monday" ) );

```

### Ungroup Scripts

**语法:** obj &lt;&lt; Ungroup Scripts( name of script group | list of scripts )

**说明:** 取消组合若干脚本。 若未指定脚本，选择的脚本将从其组中分离。若未指定脚本并且未选择脚本，则所有组将从其分组中删除。

**JMP添加的版本:** 14

**示例 1**

```jsl

Names Default To Here( 1 );
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

**示例 2**

```jsl

Names Default To Here( 1 );
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

**语法:** obj &lt;&lt; Unsubscribe( Key, OnDeleteColumns| OnAddColumns| OnAddRows| OnDeleteRows| OnClose | OnColRename | All )

**说明:** 取消之前对数据表的订阅。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Subscribe( "myname", On Close( Print( "Closing Data table" ) ) );
dt << Unsubscribe( "myname", On Close );

```

### Update

**语法:** obj &lt;&lt; Update( With( Data Table( name )), Match Columns( column1 = column2, ...), Selected( columns ), Add columns from Update table(&lt;ALL&gt;, &lt;NONE&gt;, &lt;{column1, column2, ...}&gt;), Replace columns in main table(&lt;ALL&gt;, &lt;NONE&gt;, &lt;{column1, column2, ...}&gt;), &lt;Ignore missing&gt; )

**说明:** 通过添加或替换选定的列，将更新的数据表合并到原始数据表中。

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Trial1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Little.jmp" );
dt << Update(
	With( Data Table( "Little" ) ),
	Match Columns( :popcorn = :popcorn, :batch = :batch, :oil amt = :oil )
);

```

**示例 2**

```jsl

Names Default To Here( 1 );

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

**示例 3**

```jsl

Names Default To Here( 1 );

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

**语法:** obj &lt;&lt; Update From Database( connectInfo )

**说明:** 使用从数据库重新导入的数据更新表中的数据。

```jsl

Names Default To Here( 1 );
dt = Open Database( "DSN=somedb; UID=userid;pwd=PW", "SELECT * FROM DB.TABLE" );
dt << Update From Database( "Connect Dialog" );

```

### XGBoost

**语法:** obj &lt;&lt; XGBoost

**说明:** 随机梯度提升预测建模的 XGBoost 的实验界面。

### set private

**语法:** obj &lt;&lt; set private( &lt;1|0&gt; )

**说明:** 将表设为私有。私有表会从数据表列表和订阅中省略。

```jsl

Names Default To Here( 1 );
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

### 项消息

#### Add Column Properties

**语法:** obj &lt;&lt; Add Column Properties

**说明:** 将属性添加至选定列。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Age << Add Column Properties( List Check( {17, 16, 15, 14, 13, 12} ) );

```

#### Add From Row States

**语法:** obj &lt;&lt; Add From Row States

**说明:** 用当前使用的任何非默认状态的行状态更改更新行状态列。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death.jmp" );
dt << New Column( "Row State Col", Row State, Copy from Row States );
dt << Select Rows( 1 );
dt << Select Rows( 5 );
dt << Exclude();
col = Column( "Row State Col" );
col << Add From Row States();

```

#### Add To Row States

**语法:** obj &lt;&lt; Add To Row States

**说明:** 将列中非默认状态的所有行状态值复制到数据表中当前使用的行状态。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Pickles.jmp" );
col = Column( "Time Marker" );
col << Copy To Row States();
col[5] = Color State( "Red" );
Wait( 2 );
col << Add To Row States();

```

#### Codes to Labels

**语法:** :col &lt;&lt; Codes To Labels(&lt;AssociativeArray&gt;|&lt;ListOfAssignments&gt;)

**说明:** 使用与原始代码对应的值标签生成一列字符值。

**JMP添加的版本:** 17

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Big Class.jmp" );
:age << Value Labels(
	{12 = "12!", 13 = "13!", 14 = "14!", 15 = "15!", 16 = "16!", 17 = "17!"}
);
:age << Codes to Labels;

```

**示例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Big Class.jmp" );
:sex << Labels to Codes( ["F" => 1, "M" => 2] );
:sex << Codes To Labels( [1 => "Female", 2 => "Male"] );

```

**示例 3**

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Big Class.jmp" );
:sex << Labels to Codes( ["F" => 1.5, "M" => 2.5] );
:sex << Codes To Labels( {1.5 = "Female", 2.5 = "Male"} );

```

#### Color Cell by Value

**语法:** obj &lt;&lt; Color Cell by Value( state=0|1 )

**说明:** 更改列中单元格的显示颜色。

```jsl

Names Default To Here( 1 );
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

**语法:** obj &lt;&lt; Color Cells( color, &lt;row | { row1, row2, ...} &gt; )

**说明:** 使用指定颜色对列中的单元格着色。若未给定行，则同一颜色应用于整列。

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Age << Color Cells( "Red" );

```

**示例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
a = {1, 3, 5};
:Age << Color Cells( "Red", a );

```

**示例 3**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
a = {1, 3, 5};
b = {2, 4, 6};
:height << color cells( {{"Red", a}, {"blue", b}} );

```

#### Compact

**语法:** :col &lt;&lt; Compact( &lt;1|0&gt; )

**说明:** 更改字符列的内部结构，使其仅存储每个值的一个副本，这可能节省内存并加快某些操作。可选的“保存格式”控制保存列所采用的格式。压缩格式越小，加载速度越快，但是该表无法在 JMP 17 和更早版本中打开。默认格式使用保存格式首选项。

**JMP添加的版本:** 18

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Air Traffic.jmp" );
:Airline << Compact();

```

**示例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Air Traffic.jmp" );
:Airline << Compact();
:Airline << Get Compact;

```

#### Convert to Table Column

**语法:** obj &lt;&lt; Convert to Table Column

**说明:** 将变换列添加到数据表。

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Transform Column( "New Col", Formula( 1 ) );
:NewCol << Convert to Table Column();

```

#### Copy from Row States

**语法:** obj &lt;&lt; Copy from Row States

**说明:** 将当前在数据表中使用的所有行状态值复制到列。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death.jmp" );
dt << New Column( "Row State Col", Row State, Copy from Row States );

```

#### Copy to Row States

**语法:** obj &lt;&lt; Copy to Row States

**说明:** 将列中的所有行状态值复制到数据表中当前使用的行状态。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Pickles.jmp" );
col = Column( "Time Marker" );
Wait( 2 );
col << Copy To Row States();

```

#### Data Type

**语法:** obj &lt;&lt; Data Type( "Numeric"|"Character"|"Expression"|"Row State", &lt;Format("format string")&gt;, &lt;Input Format("format string")&gt;, &lt;1|2|4&gt;, &lt; &lt;&lt;Fail On Conversion Error &gt;, &lt; &lt;&lt;Return Failed Rows &gt; )

**说明:** 设置列的数据类型。使用可选参数，您还可以设置格式、输入格式以及以字节为单位的宽度（若列为数值型）。若任何值转换失败，则“Fail On Conversion Error”会中止数据类型更改。这在将字符列转换为数值列时尤其有用。“Return Failed Rows”返回一个列表，其中包含转换失败的行的索引。

**示例 1**

```jsl

Names Default To Here( 1 );
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

**示例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
dt:Age << Set Data Type( "Character" );
dt:Height << Set Data Type( "Numeric", 2 );

```

**示例 3**

```jsl

Names Default To Here( 1 );
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

**示例 4**

```jsl

Names Default To Here( 1 );
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

**语法:** obj &lt;&lt; Delete Formula

**说明:** 删除列中的任何公式。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Bank Loan.jmp" );
:Time << Delete Formula;

```

#### Delete Property

**语法:** obj &lt;&lt; Delete Property( property name )

**说明:** 删除列中的命名属性。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Bank Loan.jmp" );
:Time << Delete Property( "Spec Limits" );

```

#### Eval Formula

**语法:** obj &lt;&lt; Eval Formula

**说明:** 对列中的公式求值。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
col = New Column( "Ratio" );
col << Set Formula( :Height / :Weight );
col << Eval Formula;

```

#### Format

**语法:** obj &lt;&lt; Format( "Best|Fixed Dec...", &lt;width&gt;, &lt;dec&gt;, &lt;"Use Thousands Separator"&gt; )obj &lt;&lt; Format( "mdy|ddmmyy|Long Date...", width )obj &lt;&lt; Format( "Format Pattern", pattern )obj &lt;&lt; Format("Currency", &lt;Country symbol&gt;, &lt;width&gt;, &lt;"Use Thousands Separator"&gt; ) obj &lt;&lt; Format("Use Thousands Separator" )

**说明:** 设置用于显示列中数据的格式。可用的格式包括“列信息”对话框中格式下的所有项。

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Height << Format( "Fixed Dec", 6, 3 );

```

**示例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/XYZ Stock Averages (plots).jmp" );
:Date << Format( "ddMonyyyy", 9 );
:DJI High << Format( "Currency" );
:DJI Close << Format( "best", "Use Thousands Separator", 10, 0 );
:DJI Low << Format( "Fixed Dec", "Use Thousands Separator", 10, 2 );

```

**示例 3**

```jsl

Names Default To Here( 1 );
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

**语法:** obj &lt;&lt; Set Formula( formula ) obj &lt;&lt; Formula( formula )

**说明:** 设置列中的公式。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
col = New Column( "Ratio" );
col << Set Formula( :Height / :Weight );

```

#### Get Column Properties

**语法:** obj &lt;&lt; Get Column Properties

**说明:** 复制选定列中定义的所有属性。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
:HARDNESS << Get Column Properties();

```

#### Get Compact

**语法:** obj &lt;&lt; Get Compact

**说明:** 是列的紧凑设置

**JMP添加的版本:** 18

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Air Traffic.jmp" );
Show( :Airline << Get Compact );

```

**示例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Air Traffic.jmp" );
:Airline << Compact();
Show( :Airline << Get Compact );

```

#### Get Data Table

**语法:** obj &lt;&lt; Get Data Table

**说明:** 获取列的数据表。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt1 = Open( "$SAMPLE_DATA/Big Class.jmp" );
c = Column( dt1, "Age" );
Show( c << Get Name, c << Get Data Table );

```

#### Get Data Type

**语法:** obj &lt;&lt; Get Data Type( &lt;"English"&gt; )

**说明:** 返回列的数据类型。若忽略关键字“English”，则数据类型会以运行 JMP 的语言返回。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
which = dt:Age << Get Data Type;
Show( which );

```

#### Get Data Type Length

**语法:** obj &lt;&lt; Get Data Type Length( &lt;English&gt; )

**说明:** 返回列的数据类型和数据长度。若数据长度不固定，像大多数字符列一样，仅返回数据类型。

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
which = dt:Age << Get Data Type Length;
Show( which );

```

**示例 2**

```jsl

Names Default To Here( 1 );
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

**语法:** obj &lt;&lt; Get Display Width

**说明:** 获取列的显示宽度。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 0 );
w = :Height << Get Display Width;

```

#### Get Excluded

**语法:** obj &lt;&lt; Get Excluded

**说明:** 若列排除，则返回 1

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
s = :Weight << Get excluded;
Show( s );

```

#### Get Field Width

**语法:** obj &lt;&lt; Get Field Width

**说明:** 返回用于显示列中数据的字段宽度。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
width = :Height << Get Field Width;
Show( width );

```

#### Get Format

**语法:** obj &lt;&lt; Get Format

**说明:** 返回列的格式。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
f = :Height << Get Format;
Show( f );

```

#### Get Formula

**语法:** obj &lt;&lt; Get Formula

**说明:** 返回列中的公式。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
col = New Column( "Ratio" );
col << Set Formula( :Height / :Weight );
col << Eval Formula;
result = col << Get Formula;
Show( result );

```

#### Get Group Name

**语法:** obj &lt;&lt; Get Group Name

**说明:** 返回包含该列的组的组名或路径（若有）。

**JMP添加的版本:** 19

**嵌套组**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Group Columns( "XYZ", :sex, 3 );
dt << Group Columns( Path( "XYZ", "Measures" ), :height, 2 );
Show( :height << Get Group Name );

```

**简单组**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Group Columns( :height, 2 );
Show( :height << Get Group Name );

```

#### Get Header Background Color

**语法:** obj &lt;&lt; Get Header Background Color

**说明:** 获取标题颜色

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:height << Set Header Background Color( "Light Red" );
Show( :height << Get Header Background Color );

```

#### Get Header Chart Type

**语法:** obj &lt;&lt; Get Header Chart Type

**说明:** 获取要在数据表列标题中显示的图表类型。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Show( :height << Get Header Chart Type );

```

#### Get Header Text Color

**语法:** obj &lt;&lt; Get Header Text Color

**说明:** 获取标题文本颜色

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:height << Set Header Text Color( "Dark Purple" );
Show( :height << Get Header Text Color );

```

#### Get Hidden

**语法:** obj &lt;&lt; Get Hidden

**说明:** 若列隐藏，则返回 1

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
s = :Weight << Get hidden;
Show( s );

```

#### Get Initial Data

**语法:** obj &lt;&lt; Get Initial Data

**说明:** 获取用于初始化列数据的值或表达式。

```jsl

Names Default To Here( 1 );
dt = New Table( "MyDt" );
dt << Add Rows( 5 );
Column( dt, 1 ) << set initial data( Log( 1 ) );
Column( dt, 1 ) << get initial data;

```

#### Get Input Format

**语法:** obj &lt;&lt; Get Input Format

**说明:** 返回用于输入和存储列数据的格式。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Stock Prices.jmp" );
f = :Date << Get Input Format;
Show( f );

```

#### Get Labeled

**语法:** obj &lt;&lt; Get Labeled

**说明:** 若列添加标签，则返回 1

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
s = :Weight << Get labeled;
Show( s );

```

#### Get List Check

**语法:** obj &lt;&lt; Get List Check

**说明:** 返回“列表检查”（若已在列中定义）。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Movies.jmp" );
prop = :Type << Get List Check;
Show( prop );

```

#### Get Lock

**语法:** obj &lt;&lt; Get Lock

**说明:** 若已锁定列，则返回 True。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cytometry.jmp" );
lock = :Prin1 << Get Lock;
Show( lock );

```

#### Get Modeling Type

**语法:** obj &lt;&lt; Get Modeling Type( &lt;"English"&gt; )

**说明:** 返回列的建模类型。若忽略关键字“English”，则建模类型会以运行 JMP 的语言返回。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
which = :Age << Get Modeling Type;
Show( which );

```

#### Get Name

**语法:** obj &lt;&lt; Get Name

**说明:** 返回列名。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
col name = Column( 4 ) << Get Name;
Show( col name );

```

#### Get Properties List

**语法:** obj &lt;&lt; Get Properties List

**说明:** 获取该列所有属性的名称的列表

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
:HARDNESS << Get Properties List();

```

#### Get Property

**语法:** obj &lt;&lt; Get Property( Notes| Range Check| List Check| Missing Value Codes| Value Labels| Value Scores | Value Order | Value Colors| Color Gradient| Axis| Units| Response Limits| Design Role| Coding| Mixture| Factor Changes | Spec Limits| Control Limits| Process Screening | Sigma| Process Capability Distribution| MSA | Distribution | Time Frequency| Map Role| Super Categories | Multiple Response | Target Level | Control Level| Profit Matrix | Expression Role | Event Handler | Link ID | Link Reference | Next In Hierarchy )

**说明:** 返回特定属性（若已在列中定义）。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Bank Loan.jmp" );
prop = :Credit Check << Get Property( "Axis" );
Show( prop );

```

#### Get Range Check

**语法:** obj &lt;&lt; Get Range Check

**说明:** 返回“范围检查”（若已在列中定义）。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Height << Range Check( LE LT( 48, 75 ) );
check = :Height << Get Range Check;
Show( check );

```

#### Get Role

**语法:** obj &lt;&lt; Get Role( &lt;"English"&gt; )

**说明:** 返回列的角色。若忽略关键字“English”，则角色会以运行 JMP 的语言返回。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
which = :Count << Get Role();
Show( which );

```

#### Get Script

**语法:** obj &lt;&lt; Get Script

**说明:** 返回脚本以重新创建列。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
s = :Age << Get Script;
Show( s );

```

#### Get Scroll Locked

**语法:** obj &lt;&lt; Get Scroll Locked

**说明:** 若列滚动锁定，则返回 1

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
s = :Weight << Get Scroll locked;
Show( s );

```

#### Get Selected

**语法:** obj &lt;&lt; Get Selected

**说明:** 若已选中列，则返回 1。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
s = :Weight << Get Selected;
Show( s );

```

#### Get Stored Values

**语法:** obj &lt;&lt; Get Stored Values

**说明:** 返回列中未进行缺失值代码转换的值

```jsl

Names Default To Here( 1 );
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

**语法:** obj &lt;&lt; Get Use Value Labels

**说明:** 返回“使用值标签”标志的状态。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
flag = :Color << Get Use Value Labels;
Show( flag );

```

#### Get Value Labels

**语法:** obj &lt;&lt; Get Value Labels

**说明:** 返回值标签（若已在列中定义）。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
values = :Color << Get Value Labels;
Show( values );

```

#### Get Values

**语法:** obj &lt;&lt; Get Values

**说明:** 返回列中的值。

**示例 1**

```jsl

Names Default To Here( 1 );
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

**示例 2**

```jsl

Names Default To Here( 1 );
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

**语法:** obj &lt;&lt; Ignore Errors( state=0|1 )

**说明:** 设置标志以在计算列公式时忽略错误

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
col = New Column( "Ratio" );
col << Set Formula( :Height / :Weight );
col << ignore errors( true );

```

#### Input Format

**语法:** obj &lt;&lt; Input Format( format )obj &lt;&lt; Input Format( "Format Pattern", pattern )

**说明:** 设置用于输入和存储列数据的格式。通常用于日期和时间格式。

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Stock Prices.jmp" );
:Date << Input Format( "ddmmyyyy" );

```

**示例 2**

```jsl

Names Default To Here( 1 );
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

**语法:** obj &lt;&lt; Is Transform Column

**说明:** 若列是变换列，则返回 1，否则返回 0。

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:height << Is Transform Column();

```

#### IsTransformedOnSASExport

**语法:** obj &lt;&lt; IsTransformedOnSASExport

**说明:** 若该列的 SAS 结果数据集中的数据将在导出至 SAS 后更改，则返回 True。注意: 该功能仅应用于日期列，因为日期在 SAS 和 JMP 中存储方式不同。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Stock Prices.jmp" );
flag = :Date << Is Transformed On SAS Export;
Show( flag );

```

#### Labels to Codes

**语法:** :col &lt;&lt; Labels to Codes(&lt;AssociativeArray&gt;|&lt;ListOfAssignments&gt;)

**说明:** 使用与原始字符值对应的值标签生成一列数值代码。

**JMP添加的版本:** 17

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Big Class.jmp" );
:sex << Labels to Codes;

```

**示例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Big Class.jmp" );
:sex << Labels to Codes( ["F" => 10, "M" => 20] );

```

**示例 3**

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Big Class.jmp" );
:sex << Labels to Codes( {"F" = 10, "M" = 20} );

```

#### Lock

**语法:** obj &lt;&lt; Lock

**说明:** 锁定列，使其不能进一步更改。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Age << Lock( 1 );

```

#### Preselect Role

**语法:** obj &lt;&lt; Preselect Role( "无角色"|"X"|"Y"|"权重"|"频数"|"验证" )

**说明:** 将预选的角色分配至数据表列。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Weight << Preselect Role( "Y" );

```

#### Remove Value Labels

**语法:** obj &lt;&lt; Remove Value Labels

**说明:** 删除列中定义的任何值标签。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
:Color << Remove Value Labels;

```

#### Reset Transform

**语法:** obj &lt;&lt; Reset Transform

**说明:** 删除变换列的缓存数据。访问列数据将重新生成缓存。若公式依赖于外部信息，则使用该方法来减少内存或允许重新计算。

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
global:a = 2;
dt << Transform Column( "sqrt[height]", Formula( global:a * Sqrt( :height ) ) );
Show( :"sqrt[height]"n[1] );
global:a = 3;
:"sqrt[height]"n << Reset Transform();
Show( :"sqrt[height]"n[1] );

```

#### Set Data Type

**语法:** obj &lt;&lt; Set Data Type( "Numeric"|"Character"|"Expression"|"Row State", &lt;Format("format string")&gt;, &lt;Input Format("format string")&gt;, &lt;1|2|4&gt;, &lt; &lt;&lt;Fail On Conversion Error &gt;, &lt; &lt;&lt;Return Failed Rows &gt; )

**说明:** 设置列的数据类型。使用可选参数，您还可以设置格式、输入格式以及以字节为单位的宽度（若列为数值型）。若任何值转换失败，则“Fail On Conversion Error”会中止数据类型更改。这在将字符列转换为数值列时尤其有用。“Return Failed Rows”返回一个列表，其中包含转换失败的行的索引。

**示例 1**

```jsl

Names Default To Here( 1 );
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

**示例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
dt:Age << Set Data Type( "Character" );
dt:Height << Set Data Type( "Numeric", 2 );

```

**示例 3**

```jsl

Names Default To Here( 1 );
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

**示例 4**

```jsl

Names Default To Here( 1 );
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

**语法:** obj &lt;&lt; Set Display Width( number )

**说明:** 更改列的显示宽度。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 0 );
w = :Height << Get Display Width;
:Height << Set Display Width( 2 * w );

```

#### Set Each Value

**语法:** obj &lt;&lt; Set Each Value( number )

**说明:** 将列中的所有值设置为常数。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "X" );
dt:X << Set Each Value( 5 );

```

#### Set Excluded

**语法:** obj &lt;&lt; Set Excluded

**说明:** 排除列。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Weight << Set excluded;

```

#### Set Field Width

**语法:** obj &lt;&lt; Set Field Width( number )

**说明:** 设置用于显示列中数据的字段宽度。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Height << Set Field Width( 20 );

```

#### Set Formula

**语法:** obj &lt;&lt; Set Formula( formula ) obj &lt;&lt; Formula( formula )

**说明:** 设置列中的公式。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
col = New Column( "Ratio" );
col << Set Formula( :Height / :Weight );

```

#### Set Header Background Color

**语法:** obj &lt;&lt; Set Header Background Color

**说明:** 设置标题颜色。设置为“无”以使用默认颜色

**JMP添加的版本:** 18

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:height << Set Header Background Color( "Light Red" );

```

**示例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:height << Set Header Background Color( {250, 200, 150} );

```

#### Set Header Chart Type

**语法:** obj &lt;&lt; Set Header Chart Type

**说明:** 设置要在数据表列标题中显示的图表类型。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:height << Set Header Chart Type( "Run Chart" );

```

#### Set Header Text Color

**语法:** obj &lt;&lt; Set Header Text Color

**说明:** 设置标题文本颜色。设置为“无”以使用默认颜色

**JMP添加的版本:** 18

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:height << Set Header Text Color( "Dark Purple" );

```

**示例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:height << Set Header Text Color( {100, 50, 100} );

```

#### Set Hidden

**语法:** obj &lt;&lt; Set Hidden

**说明:** 隐藏列。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Weight << Set hidden;

```

#### Set Initial Data

**语法:** obj &lt;&lt; Set Initial Data

**说明:** 使用任意常数或简单表达式初始化列数据。

**示例 1**

```jsl

Names Default To Here( 1 );
dt = New Table( "MyDt", New Column(), New Column() );
dt << Add Rows( 5 );
Column( dt, 1 ) << set initial data( Today() );
Column( dt, 2 ) << set initial data( 99 );

```

**示例 2**

```jsl

Names Default To Here( 1 );
dt = New Table( "MyDt" );
dt << Add Rows( 5 );
Column( dt, 1 ) << set initial data( Log( 1 ) );

```

#### Set Labeled

**语法:** obj &lt;&lt; Set Labeled

**说明:** 将列数据值用于标签。

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Weight << Set labeled;

```

#### Set Modeling Type

**语法:** obj &lt;&lt; Set Modeling Type( "无"|"连续型"|"有序型"|"名义型"|"行状态"|"多重响应"|"非结构化文本"|"向量" )

**说明:** 设置数据表列的建模类型。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Age << Set Modeling Type( "Continuous" );

```

#### Set Name

**语法:** obj &lt;&lt; Set Name( name )

**说明:** 设置列名。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Age << Set Name( "Time" );

```

#### Set Property

**语法:** obj &lt;&lt; Set Property( Notes | List Check | Range Check | Axis | Spec Limits | Control Limits | Sigma | Process Capability Distribution | Coding | Mixture | Design Role | Response Limits | Units | Value Order | Value Labels | Value Scores | Row Order Levels | Distribution | Time Frequency | Value Colors | Color Gradient | Missing Value Codes | Factor Change | Map Role | Supercategories | Multiple Response | Profit Matrix | Informative Missing | Expression Role | Link ID | Link Reference | Event Handler | Custom Property, {argument list} )

**说明:** 设置列中的属性。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Weight << Set Property( "Units", lbs );

```

#### Set Scroll Locked

**语法:** obj &lt;&lt; Set Scroll Locked

**说明:** 滚动锁定列。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Weight << Set Scroll locked;

```

#### Set Selected

**语法:** obj &lt;&lt; Set Selected( state=0|1 )

**说明:** 选择列。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Height << Set Selected( 1 );

```

#### Set Use for Marker

**语法:** obj &lt;&lt; Set Use for Marker

**说明:** 使用该列中的值作为图形中的标记。带图片的表达式列或带 ID 的字符列可以正常使用。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Name << Set Use for Marker;

```

#### Set Values

**语法:** obj &lt;&lt; Set Values( [ value1, value2, value3, ... ] )

**说明:** 设置列中的值。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Column( "X" );
:X << Set Values(
	[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9,
	10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
);

```

#### SetLock

**语法:** obj &lt;&lt; SetLock

**说明:** 锁定列，使其不能进一步更改。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Age << Lock( 1 );

```

#### Suppress Eval

**语法:** obj &lt;&lt; Suppress Eval( state=0|1 )

**说明:** 设置标志以禁止对列中的公式计算。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
col = New Column( "Ratio" );
col << Set Formula( :Height / :Weight );
col << suppress eval( true );

```

#### Use Value Labels

**语法:** obj &lt;&lt; Use Value Labels( state=0|1 )

**说明:** 在所有输出中替换列中定义的值标签。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
:Color << Use Value Labels( 1 );
Distribution( Column( :Color ) );

```

#### Value Labels

**语法:** obj &lt;&lt; Value Labels( { value1 = "label1", value2 = "label2", ... } )

**说明:** 设置值标签

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:sex << Value Labels( {"F" = "Female", "M" = "Male"} );

```

## Data Table Cols

### 关联的构造器

#### Column

**语法:** Column( &lt;data table&gt;, "column name"|column number )

**说明:** 返回对指定数据表列的引用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
col = Column( "height" );

```

### 项消息

#### Add Multiple Columns

**语法:** obj &lt;&lt; Add Multiple Columns( Column prefix, number of columns, &lt;before first|after last|after(column)&gt;, Character|Numeric|Row State, &lt;fieldwidth(number)&gt; )

**说明:** 在当前数据表中创建多个新列。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Add Multiple Columns( "Date", 5, Character );

```

#### Clear Column Selection

**语法:** obj &lt;&lt; Clear Column Selection

**说明:** 清除数据表中的列选择。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
dt << Go To( :BP 12F );
Wait( 2 );
dt << Clear Column Selection();

```

#### Clone Formula Column

**语法:** obj &lt;&lt; Clone Formula Column( column, n, &lt;Substitute Column Reference( column1, list )&gt; )

**说明:** 基于给定的 column 创建 n 个新公式列。原始公式中对 column1 的列引用将替换为所有 n 个列的 list 中的每个列。当替换原始公式中的多个列引用时使用多个 Substitute Column Reference 参数。

```jsl

Names Default To Here( 1 );
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

**语法:** obj &lt;&lt; Columns Manager

**说明:** 对当前表调用“列管理器”，从而显示该列的属性和统计量。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
col1 = dt << Columns Manager;

```

#### Combine Columns

**语法:** obj &lt;&lt; Combine Columns

**说明:** 将一组列合并为分隔（多重响应）列。

**示例 1**

```jsl

Names Default To Here( 1 );
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

**示例 2**

```jsl

Names Default To Here( 1 );
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

**语法:** obj &lt;&lt; Compress Selected Columns( { column1, column2, ... )

**说明:** 将每一列压缩为最紧凑的格式。

若水平数少于 255，则字符数据将为 1 字节。

若数据介于 -127 和 127 之间，则数值数据将为 1 字节。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Compress Selected Columns( {:Age, :sex, :Height, :Weight} );

```

#### Exclude/Unexclude

**语法:** obj &lt;&lt; Exclude( 0|1 )

**说明:** 从任何分析运行中排除列。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:Name << Exclude( 1 );

```

#### Formula

**语法:** obj &lt;&lt; Formula

**说明:** 设置列中的公式。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
col1 = dt << New Column( "Ratio", Numeric, Continuous );
col1 << Formula( :height / :weight );

```

#### Freq

**语法:** obj &lt;&lt; Preselect Role( Freq )

**说明:** 为数据表列分配“频数”角色

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
col = Column( "weight" );
col << Preselect Role( "freq" );

```

#### Go to

**语法:** obj &lt;&lt; Go to( column name|column number )

**说明:** 选择并移至当前数据表中的指定列。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
dt << Go to( :BP 12F );

```

#### Hide/Unhide

**语法:** obj &lt;&lt; Hide( 0|1 )

**说明:** 隐藏数据网格中的列。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:Age << Hide( 1 );

```

#### Invert Column Selection

**语法:** obj &lt;&lt; Invert Column Selection( &lt;list of columns&gt; )

**说明:** 反转当前列选择。若指定了列的列表，则选择不在该列表中的列。

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:age << Set Selected( 1 );
dt:height << Set Selected( 1 );
Wait( 1 );
b = dt << Invert Column Selection;

```

**示例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
a = {:height, :weight};
b = dt << Invert Column Selection( a );

```

#### Label/Unlabel

**语法:** obj &lt;&lt; Label( 0|1 )

**说明:** 将该列设置为标签以便进行标识。当选择点时，列中的值将出现在图形中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:Age << Label( 1 );

```

#### Make Indicator Columns

**语法:** obj &lt;&lt; Make Indicator Columns

**说明:** 从选定列生成一组指示符列

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
dt << Make Indicator Columns( columns( {:species, :season} ) );

```

#### Move Selected Columns

**语法:** obj &lt;&lt; Move Selected Columns( column|column list, To first|To last|After(column)|after(group)|after(Path({&lt;a&gt;, &lt;b&gt;, ...}) )

**说明:** 移动数据表中的选定列。

**After column**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Go To( :Age );
Wait( 2 );
dt << Move Selected Columns( After( :sex ) );

```

**After group**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << group Columns( "Measures", {:height, :weight} );
dt << Go To( :Age );
Wait( 2 );
dt << Move Selected Columns( After( "Measures" ) );

```

**Input list**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Move Selected Columns( {:height, :weight}, After( :name ) );

```

**To last**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Go To( :Age );
Wait( 2 );
dt << Move Selected Columns( To last );

```

#### New Column

**语法:** obj &lt;&lt; New Column( &lt;name&gt;, &lt;data type&gt;, &lt;modeling type&gt;, &lt;Format()&gt;, &lt;Formula()&gt;, &lt;Set Property()&gt;, &lt;Set Values()&gt;, &lt;Like()&gt; )

**说明:** 在当前数据表中创建新列。

**Like**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "like name", Like( :name ) );

```

**新建表**

```jsl

Names Default To Here( 1 );
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

**简单**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "X", Formula( Random Uniform() ) );

```

#### New Formula Column

**语法:** dt &lt;&lt; New Formula Column(Operation(name, &lt;Category(name)&gt;), Columns(columns), &lt;Group By(columns)&gt;)

**说明:** 使用指定的列并应用运算和可选分组列，在表中创建公式列。必要时可以指定运算类别以消除运算名称的歧义。返回已创建列的列引用列表。

**JMP添加的版本:** 17

**Log 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Formula Column( Operation( "Log 2" ), Columns( :height, :weight ) );

```

**分组依据**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Formula Column(
	Operation( "Mean" ),
	Columns( :height, :weight ),
	Group By( :age )
);

```

#### Next Selected Column

**语法:** obj &lt;&lt; Next Selected Column

**说明:** 转至下一个选定列。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:age << Set Selected( 1 );
dt:height << Set Selected( 1 );
Wait( 1 );
dt << Next Selected Column;
Wait( 2 );
dt << Next Selected Column;

```

#### No Role

**语法:** obj &lt;&lt; Preselect Role( No Role )

**说明:** 从数据表列中删除分配的角色。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Weight << Preselect Role( "No Role" );

```

#### Original Order

**语法:** obj &lt;&lt; Original Order

**说明:** 将列移回其在数据表中的原始位置。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Go To( :Age );
dt << Move Selected Columns( To last );
Wait( 2 );
dt << Original Order();

```

#### Paste Column Properties

**语法:** obj &lt;&lt; Paste Column Properties

**说明:** 从剪贴板获取列属性的多个列表并粘贴至多个列。您可以选择指定目标列的列表，而不用在数据表中选择它们。

```jsl

Names Default To Here( 1 );
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

**语法:** obj &lt;&lt; Previous Selected Column

**说明:** 转至上一个选定列。

```jsl

Names Default To Here( 1 );
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

**语法:** obj &lt;&lt; Reorder by Data Type

**说明:** 对数据表中的列按数据类型重新排序。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
Wait( 1 );
dt << Reorder By Data Type();

```

#### Reorder by Modeling Type

**语法:** obj &lt;&lt; Reorder by Modeling Type

**说明:** 对数据表中的列按建模类型重新排序。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
Wait( 1 );
dt << Reorder By Modeling Type();

```

#### Reorder by Name

**语法:** obj &lt;&lt; Reorder by Name

**说明:** 对数据表中的列按列名重新排序。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
Wait( 1 );
dt << Reorder By Name();

```

#### Reverse Order

**语法:** obj &lt;&lt; Reverse Order

**说明:** 反转数据表中的列顺序。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
Wait( 1 );
dt << Reverse Order();

```

#### Set Label Columns

**语法:** obj &lt;&lt; Set Label Columns( column(s) )

**说明:** 将标签角色分配给数据表中的选定列。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
Wait( 1 );
dt << Set Label Columns( :City, :State );

```

#### Set Scroll Lock Columns

**语法:** obj &lt;&lt; Set Scroll Lock Columns( column(s) )

**说明:** 锁定数据表中的选定列使其不能滚动。为指明列是锁定的，背景色会更改。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << Set Scroll Lock Columns( :City );

```

#### Text to Columns

**语法:** obj &lt;&lt; Text to Columns

**说明:** 从分隔的文本列生成一组文本列或指示符列

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
dt << Text To Columns( delimiter( "," ), columns( :Brush Delimited ) );

```

**示例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
dt << Text To Columns(
	delimiter( "," ),
	columns( :Brush Delimited ),
	Make Indicator Columns( 1 )
);

```

#### Use for Marker

**语法:** obj &lt;&lt; UseForMarker( 0|1 )

**说明:** 使用该列中的值作为图形中的标记。带图片的表达式列或带 ID 的字符列可以正常使用。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:Name << UseForMarker( 1 );

```

#### Validation

**语法:** obj &lt;&lt; Preselect Role( Validation)

**说明:** 为数据表列分配“验证”角色

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
col = Column( "age" );
col << Preselect Role( "Validation" );

```

#### Weight

**语法:** obj &lt;&lt; Preselect Role( Weight )

**说明:** 为数据表列分配“权重”角色

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:Weight << Preselect Role( "weight" );

```

#### X

**语法:** obj &lt;&lt; Preselect Role( X )

**说明:** 为数据表列分配 X 角色

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
col = Column( "weight" );
col << Preselect Role( "X" );

```

#### Y

**语法:** obj &lt;&lt; Preselect Role( Y )

**说明:** 为数据表列分配 Y 角色

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Weight << Preselect Role( "Y" );

```

## Data Table Rows

### 项消息

#### Add Rows

**语法:** obj &lt;&lt; Add Rows( &lt;n&gt;, &lt;At Start|At End|After(m)&gt; | {list of (column name = value) pairs}) )

**说明:** 在数据表的开头、结尾或第 m 行之后添加 n 行。

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Add Rows( 3, after( 5 ) );

```

**示例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Add Rows( {name = "David", age = 15} );

```

#### Clear Row States

**语法:** obj &lt;&lt; Clear Row States

**说明:** 清除所有行的状态，包括选定、排除、隐藏、标记、标签和颜色。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Rows( [5, 7, 8, 10, 12, 15] );
Wait( 2 );
dt << Clear Row States;

```

#### Clear Select

**语法:** obj &lt;&lt; Clear Select

**说明:** 清除或取消选择选定行。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Rows( [5, 7, 8, 10] );
Wait( 2 );
dt << Clear Select();

```

#### Clear Selected Row States

**语法:** obj &lt;&lt; Clear Selected Row States

**说明:** 清除选定行的状态，包括选定、排除、隐藏、标记、标签和颜色。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
r = dt << Select Rows( [5, 6, 7, 8, 9, 10] );
r << Exclude;
r << clear select;
r << Select Rows( [5, 6] );
Wait( 1 );
dt << Clear Selected Row States;

```

#### Color Rows by Row State

**语法:** obj &lt;&lt; Color Rows by Row State

**说明:** 在数据表的单元格中显示或隐藏行状态中分配的颜色。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Color by Column( :Age );
Wait( 2 );
dt << Color Rows by Row State;

```

#### Color by Column

**语法:** obj &lt;&lt; Color by Column( column, &lt;Color( number )&gt;, &lt;Color Theme( color theme )&gt;, &lt; Continuous scale(0|1)&gt;, &lt;Reverse scale(0|1)&gt;, &lt;Excluded Row( 0|1 ), &lt;Make window with legend&gt; )

**说明:** 根据指定列的值为数据表中的每一行分配颜色。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Color by Column( :Age );

```

#### Color or Mark by Column

**语法:** obj &lt;&lt; Color or Mark by Column( column, &lt;Color( number )&gt;, &lt;Color Theme( color theme )&gt;, &lt;Marker Theme( standard|hollow|solid|paired|classic|alphanumeric )&gt; )

**说明:** 将颜色或标记与指定列的值相关联

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Color or Mark by Column( :Age );

```

#### Colors

**语法:** obj &lt;&lt; Colors( color )

**说明:** 在所有包含标记的图形输出中为选定行着色。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Run Script( "Bivariate" );
Wait( 1 );
dt << Select Where( :sex == "F" );
Wait( 1 );
dt << Colors( "Red" );

```

#### Data Filter

**语法:** obj &lt;&lt; Data Filter( &lt;Location(x,y)&gt;, &lt;"Close Outline"&gt;, &lt;"Local"&gt;, &lt;Inverse(0|1)&gt;, &lt;Show Columns Selector(0|1)&gt;, &lt;Title(string)&gt;, &lt;Save And Restore Current Row States(0|1)&gt;, &lt;Conditional(0|1)&gt;, &lt;Auto Clear(0|1)&gt;, &lt;Group By AND(0|1)&gt;, &lt;Show Histograms And Bars(0|1)&gt;, &lt;Count Excluded Rows(0|1)&gt;, &lt;Mode(...)&gt;, &lt;Add Filter(Columns(...), Where(...), Display(...), &lt;Select Missing(cols)&gt;, &lt;Order By Count(cols)&gt;)&gt;, &lt;Favorites(...)&gt;, &lt;Animation(...)&gt; )

**说明:** 创建或显示“数据过滤器”，您可以在其中以交互方式选择复杂的数据子集。Mode 选项确定受过滤器中的选择影响的行状态。Add Filter 命令将添加具有指定 Columns 和 Where 子句的过滤器组。当存在多个过滤器组时，组合行为由 Group By AND 选项确定。若指定了 Local 关键字，则过滤器可以嵌入在报表中以过滤一个或多个平台但不影响其他报表。

**全局数据过滤器**

```jsl

Names Default To Here( 1 );
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

**本地数据过滤器**

```jsl

Names Default To Here( 1 );
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

**语法:** obj &lt;&lt; Data View

**说明:** 创建包含当前选定行的新数据视图。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Where( :age < 14 );
dt << Data View;

```

#### Delete Rows

**语法:** obj &lt;&lt; Delete Rows

**说明:** 删除选定行。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Rows( [5, 7, 8, 10] );
Wait( 2 );
r = dt << Delete Rows;
Show( r );

```

#### Exclude/Unexclude

**语法:** obj &lt;&lt; Exclude/Unexclude

**说明:** 从参与计算的行中排除选定行。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
r = dt << Select Rows( [5, 7, 8, 10] );
r << Exclude;

```

#### Get Rows

**语法:** obj &lt;&lt; Get Rows( number )

**说明:** 返回指定行的列值列表

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Get Rows( 3 );
dt << Get Rows( {1, 2, 3} );

```

#### Go to Row

**语法:** obj &lt;&lt; Go to Row( row number )

**说明:** 返回行对象，移至指定行，选择行并突出显示。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Go To Row( 5 );

```

#### Hide and Exclude

**语法:** obj &lt;&lt; Hide and Exclude

**说明:** 在图形中隐藏选定行并从参与计算的行中排除它们。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
r = dt << Select Rows( [5, 7, 8, 10] );
r << Hide and Exclude;

```

#### Hide/Unhide

**语法:** obj &lt;&lt; Hide/Unhide

**说明:** 在图形中隐藏选定行。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
r = dt << Go To Row( 12 );
r << Hide;

```

#### Insert Rows

**语法:** obj &lt;&lt; Insert Rows

**说明:** 在选定行之前插入行。若未选定任何行，则不起作用。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Rows( [3, 4, 5] );
dt << Insert Rows;

```

#### Invert Row Selection

**语法:** obj &lt;&lt; Invert Row Selection

**说明:** 反向当前行选择。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
r = dt << Select Where( :Age < 14 );
Wait( 2 );
r << Invert Row Selection;

```

#### Label/Unlabel

**语法:** obj &lt;&lt; Label/Unlabel

**说明:** 在所有包含标记的图形输出中为选定行添加标签。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
r = dt << Go To Row( 5 );
r << Label;

```

#### Marker by Column

**语法:** obj &lt;&lt; Marker by Column( column, &lt;Marker( number )&gt;, &lt;Marker Theme( standard | hollow | solid | paired | classic | alphanumeric )&gt;, &lt;Color theme( string )&gt;, &lt; Continuous scale(0|1)&gt;, &lt;Reverse scale(0|1)&gt;, &lt;Excluded Row( 0|1 ), &lt;Make window with legend&gt; )

**说明:** 根据指定列的值为数据表中的每一行分配标记。

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Marker by Column( :sex );

```

**示例 2**

```jsl

Names Default To Here( 1 );
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

**语法:** obj &lt;&lt; Markers( marker )

**说明:** 更改所有包含标记的图形输出中选定行的标记。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
r = dt << Select Where( :sex == "M" );
r << Markers( "+" );

```

#### Move Rows

**语法:** obj &lt;&lt; Move Rows( At Start|At End|After(n) )

**说明:** 将选定行在数据表中上移或下移至指定的新位置。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
r = dt << Select Rows( [5, 7, 8, 10] );
Wait( 2 );
r << Move Rows( At Start );

```

#### Name Selection in Column

**语法:** obj &lt;&lt; Name Selection in Column( Column Name( name ), Selected( string ), Unselected( string ) )

**说明:** 创建具有两个值的新分类列，一个针对选定的行，一个针对未选定的行。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Where( :Age < 14 );
dt << Name Selection in Column(
	Column Name( "Younger" ),
	Selected( "Yes" ),
	Unselected( "No" )
);

```

#### Next Selected

**语法:** obj &lt;&lt; Next Selected

**说明:** 突出显示一组选定行的下一行。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
r = dt << Select Rows( [5, 7, 8, 10] );
Wait( 2 );
r << Next Selected;

```

#### Previous Selected

**语法:** obj &lt;&lt; Previous Selected

**说明:** 突出显示一组选定行的上一行。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
r = dt << Select Rows( [5, 7, 8, 10] );
Wait( 2 );
r << Previous Selected;

```

#### Row Editor

**语法:** obj &lt;&lt; Row Editor

**说明:** 打开选定行的“行编辑器”对话框。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
r = dt << Select Rows( [5, 7, 8, 10] );
r << Row Editor();

```

#### Row Selection

**语法:** obj &lt;&lt; Row Selection( Select Where(condition), &lt; current selection("extend" | "restrict" | "clear")&gt;, &lt;Dialog("Keep Dialog Open")&gt;, &lt;Match Case(0|1)&gt; )

**说明:** 选择满足定义条件的所有行，可选择扩展或限制现有选择，执行选择或仅显示对话框。当省略“区分大小写”时，默认为区分大小写的匹配。

**JMP添加的版本:** 15

**示例 1**

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Row Selection( Select where( :age < 15 ) );

```

**示例 2**

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Row Selection( Select where( :age < 15 ) );
Wait( 2 );
dt << Row Selection( Select where( :age == 15 ), current selection( "extend" ) );

```

**示例 3**

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Row Selection( Select where( :age < 15 ) );
dt << Row Selection(
	Select where( :sex == "M" ),
	current selection( "restrict" ),
	Dialog( "keep dialog open" )
);

```

**示例 4**

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Row Selection( Select where( :name == "jane" ), Match Case( 0 ) );

```

#### Select All Matching Cells

**语法:** obj &lt;&lt; Select All Matching Cells

**说明:** 在所有打开的数据表中，选择其中选定列的值与该列中选定行的一个值相匹配的所有行。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students.jmp" );
dt << Select Rows( [1, 2, 3, 4] );
dt << Go To( :Height );
Wait( 2 );
dt << Select All Matching Cells();

```

#### Select All Rows

**语法:** obj &lt;&lt; Select All Rows

**说明:** 选择数据表中的所有行。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select All Rows;

```

#### Select Dominant

**语法:** obj &lt;&lt; Select Dominant( {column1, column2, ...},{0|1, 0|1, ...} )

**说明:** 根据 Pareto 边界的高值 (1) 或低值 (0) 选择所有行。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Go To( :height );
dt << Select Dominant( {:height, :weight}, {0, 0} );

```

#### Select Duplicate Rows

**语法:** obj &lt;&lt; Select Duplicate Rows( &lt;match(column1, column2, ...)&gt; )

**说明:** 选择重复行并按选定列进行匹配。若未指定匹配列，则行按表的所有列进行匹配。返回重复行数。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select duplicate rows( Match( :age, :height ) );

```

#### Select Excluded

**语法:** obj &lt;&lt; Select Excluded

**说明:** 选择数据表中所有排除的行。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Rows( [5, 7, 8, 10, 15] );
dt << Exclude( 1 );
dt << Clear Select;
Wait( 2 );
dt << Select Excluded;

```

#### Select Hidden

**语法:** obj &lt;&lt; Select Hidden

**说明:** 选择数据表中所有隐藏的行。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Rows( [5, 7, 8, 10, 15] );
dt << Hide( 1 );
dt << Clear Select;
Wait( 2 );
dt << Select Hidden;

```

#### Select Labeled

**语法:** obj &lt;&lt; Select Labeled

**说明:** 选择数据表中所有已添加标签的行。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Rows( [5, 7, 8, 10, 15] );
dt << Label( 1 );
dt << Clear Select;
Wait( 2 );
dt << Select Labeled;

```

#### Select Matching Cells

**语法:** obj &lt;&lt; Select Matching Cells

**说明:** 选择其中选定列的值与该列中选定行的一个值相匹配的所有行。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Rows( [1, 2, 3, 4] );
dt << Go To( :Height );
Wait( 2 );
dt << Select Matching Cells();

```

#### Select Randomly

**语法:** obj &lt;&lt; Select Randomly( number | probability | Sample Size( number ) | Sampling Rate( probability ) )

**说明:** 随机选择指定比例的行。

**Probability**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Randomly( 0.3 );

```

**抽样率**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Randomly( Sampling Rate( 0.3 ) );

```

**样本大小**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Randomly( Sample Size( 12 ) );

```

#### Select Rows

**语法:** obj &lt;&lt; Select Rows( [row1, row2, ...] )

**说明:** 选择指定行。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Rows( [5, 7, 8, 10] );

```

#### Select Where

**语法:** obj &lt;&lt; Select Where( condition, &lt; current selection("extend" | "restrict" | "clear")&gt; )

**说明:** 选项包括扩展或限制选择、执行选择或仅显示对话框。

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Where( :Age < 14 );

```

**示例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Where( :Age == 14 );
Wait( 0 );
dt << Select Where( :sex == "M", current selection( "extend" ) );

```

**示例 3**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Where( Contains( :name, "AR" ) );

```

## Filter Views

### 项消息

#### Get Data Filter

**语法:** expr = obj &lt;&lt; Get Data Filter

**说明:** 返回过滤器视图的过滤器定义

**JMP添加的版本:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
fv = dt << New Filter View(
	"Dream",
	Active( 0 ),
	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) )
);
Show( fv << Get Data Filter );

```

#### Get Data Table

**语法:** data table = obj &lt;&lt; Get Data Table

**说明:** 返回拥有该过滤器视图的表

**JMP添加的版本:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
fv = dt << New Filter View(
	"Dream",
	Active( 0 ),
	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) )
);
Show( fv << Get Data Table );

```

#### Get Name

**语法:** string = obj &lt;&lt; Get Name

**说明:** 获取过滤器视图的名称

**JMP添加的版本:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
fv = dt << New Filter View(
	"Dream",
	Active( 0 ),
	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) )
);
Show( fv << Get Name );

```

#### Get Show Hidden Rows

**语法:** 0|1 = obj &lt;&lt; Get Show Hidden Rows

**说明:** 返回该过滤器视图的“显示隐藏行”设置

**JMP添加的版本:** 19

```jsl

Names Default To Here( 1 );
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

**语法:** obj &lt;&lt; Get Type

**说明:** 获取过滤器视图的类型:“未过滤”、“已过滤”或“临时过滤”之一。

**JMP添加的版本:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
fv = dt << New Filter View(
	"Dream",
	Active( 0 ),
	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) )
);
Show( fv << Get Type, fv << Is Temporary, fv << Is Unfiltered );

```

#### Is Locked

**语法:** 0|1 = obj &lt;&lt; Is Locked

**说明:** 返回该过滤器视图的锁定设置

**JMP添加的版本:** 19

```jsl

Names Default To Here( 1 );
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

**语法:** 0|1 = obj &lt;&lt; Is Temporary

**说明:** 若过滤的视图是临时过滤器视图，则返回 1

**JMP添加的版本:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
fv = dt << New Filter View(
	"Dream",
	Active( 0 ),
	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) )
);
Show( fv << Get Type, fv << Is Temporary, fv << Is Unfiltered );

```

#### Is Unfiltered

**语法:** 0|1 = obj &lt;&lt; Is Unfiltered

**说明:** 若过滤的视图是未过滤的过滤器视图，则返回 1

**JMP添加的版本:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
fv = dt << New Filter View(
	"Dream",
	Active( 0 ),
	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) )
);
Show( fv << Get Type, fv << Is Temporary, fv << Is Unfiltered );

```

#### Lock

**语法:** obj &lt;&lt; Lock( 0|1 )

**说明:** 防止编辑该过滤器视图。

**JMP添加的版本:** 19

```jsl

Names Default To Here( 1 );
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

**语法:** obj &lt;&lt; Set Data Filter( expr )

**说明:** 更改该过滤器视图的过滤器定义。未过滤视图的过滤器定义无法更改

**JMP添加的版本:** 19

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
fv = dt << New Filter View( "Dream", Active( 0 ) );
fv << Set Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) );
Show( fv << Get Data Filter );

```

**示例 2**

```jsl

Names Default To Here( 1 );
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

**语法:** string = obj &lt;&lt; Set Name( name )

**说明:** 更改过滤器视图的名称。未过滤视图和临时过滤的视图的名称无法更改。

**JMP添加的版本:** 19

```jsl

Names Default To Here( 1 );
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

**语法:** obj &lt;&lt; Show Hidden Rows( 0|1 )

**说明:** 更改该过滤器视图的“显示隐藏行”设置。

**JMP添加的版本:** 19

```jsl

Names Default To Here( 1 );
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

