# Statistical



## 函数

### ARIMA Forecast

**语法:** x = ARIMA Forecast( dtcol, length, model, estimates, from, to )

**说明:** 返回 dtcol 列中由 from 和 to 参数所确定范围内的预测值的向量。length 参数指定函数要使用的列部分。model 参数与发送至“时间序列”平台以拟合模型的消息相匹配。estimates 参数与单个模型的 Get Models 消息结果的子级项相匹配。通常，from 值介于 1 和 to 之间（包括端值）。但是，若 from<=0 且 from<=to，则部分结果是过滤后的预测值。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
ARIMA Forecast(
	:Steel Shipments,
	96,
	ARIMA( 1, 0, 1 ),
	{AR Coefficients( {0.900397691783565} ), MA Coefficients( {0.483316746530245} ),
	Intercept( 6466.03264802329 )},
	1,
	2
);

```

### Arc Finder

**语法:** Arc Finder( Group( lot, wafer ), X( col ), Y( col ), <optional arguments> )

**说明:** 查找点数据中的弧线并创建表示弧线的新列。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Wafer Stacked.jmp" );
Arc Finder(
	Group( :Lot, :Wafer ),
	X( :X_Die ),
	Y( :Y_Die ),
	Min Distance( 12 ), // minimum distance among 3 points to seed an arc
	Min Radius( 15 ), // minimum radius of the acceptable arc
	Max Radius( 2000 ), // maximum radius of acceptable arc
	Max Radius Error( 2 ), // how close a point needs to be added
	Min Arc Points( 5 ), // how many points to define an arc
	Number of Searches( 500 ), // how many random probes of data
	Max Number Arcs( 3 ) // number of arcs searched for
);
dt << Color or Mark by Column( :Arc Number );
dt << Graph Builder(
	Size( 1539, 921 ),
	Variables( X( :X_Die ), Y( :Y_Die ), Wrap( :Lot_Wafer Label ), Color( :Arc Number ) ),
	Elements( Points( X, Y, Legend( 6 ) ) )
);

```

### Best Partition

**语法:** {c1, c2, g2} = Best Partition( xIndices, yIndices, <<Ordered, <<ContinuousY, <<ContinuousX )

**说明:** 确定最优分组（实验函数）。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
/*Example for Continuous X and Continuous Y*/Best Partition(
	[1.2, 2.2, 3.5, 4.4, 5.6, 7.8],
	[11.2, 11.5, 11.8, 100.5, 100.7, 100.8],
	<<ContinuousX,
	<<ContinuousY
);

```

### Col At

**语法:** y = Col At( col, index, <byVar, ...>, < <<relative(bool)>, < <<skip missing(expr)> )

**说明:** 返回 col 在其 byVar 组中行位置 index 处的值。skip missing 表达式计算结果为缺失值的行不包括在索引中。

**JMP添加的版本:** 19

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
New Column( "Lag Height by Sex", Formula( Col At( :height, -1, :sex, <<relative( 1 ) ) ) );
New Column( "Relative to First Height", Formula( :height / Col At( :height, 1, :sex ) ) );
New Column( "Relative to Last Height", Formula( :height / Col At( :height, -1, :sex ) ) );

```

### Col Cumulative Sum

**语法:** y = Col Cumulative Sum( xCol, <byVar, <Excluded( Row State() )>, ...>, < << Freq( freqCol ) > )

**说明:** 返回当前行的累积和。无需预先对“依据”变量排序。

**JMP添加的版本:** 早于版本 14

**示例 1**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row() = 40;
Col Cumulative Sum( :height, :sex );

```

**示例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Cumulative Sum for each Sex",
	Formula( Col Cumulative Sum( :height, :sex ) )
);
dt << New Column( "Col Cumulative Sum for each Sex grouped by Excluded",
	Formula( Col Cumulative Sum( :height, :sex, Excluded( Row State() ) ) )
);

```

### Col Interpolate

**语法:** y = Col Interpolate( v, xCol, yCol, <byVar, ...>, < <<method(linear|nearest|previous|next)>, < <<extrapolate(bool)> )

**说明:** 返回 yCol 内的内插值，对应于 v 的位置（xCol]. Values outside the range of xCol）。范围之外的值将缺失，除非 extrapolate 已启用，在这种情况下将返回最近的 yCol 值。

**JMP添加的版本:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/GNP.jmp" );
dt << New Column( "date30", Formula( :date + 30 ) );
dt << New Column( "gnp30",
	Formula( Col Interpolate( :date30, :date, :"gross national product ($billions)"n ) )
);

```

### Col Max

**语法:** y = Col Maximum( xCol, <byVar, <Excluded( Row State() )>, ...> )

**说明:** 返回列中各行的最大值。结果会在内部缓存，因此可高效进行多次计算。可选 byVar 参数指定按组计算。注意: byVar 参数应在列公式或 For Each Row() 函数中使用。

**JMP添加的版本:** 早于版本 14

**示例 1**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Maximum( :height );

```

**示例 2**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Maximum( :height, :age ) ) );

```

**示例 3**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Maximum Value for Each Age and Sex Group",
	Formula( Col Maximum( :height, :age, :sex ) )
);

```

**示例 4**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Max for each Sex", Formula( Col Maximum( :height, :sex ) ) );
dt << New Column( "Col Max for each Sex grouped by Excluded",
	Formula( Col Maximum( :height, :sex, Excluded( Row State() ) ) )
);

```

### Col Maximum

**语法:** y = Col Maximum( xCol, <byVar, <Excluded( Row State() )>, ...> )

**说明:** 返回列中各行的最大值。结果会在内部缓存，因此可高效进行多次计算。可选 byVar 参数指定按组计算。注意: byVar 参数应在列公式或 For Each Row() 函数中使用。

**JMP添加的版本:** 早于版本 14

**示例 1**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Maximum( :height );

```

**示例 2**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Maximum( :height, :age ) ) );

```

**示例 3**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Maximum Value for Each Age and Sex Group",
	Formula( Col Maximum( :height, :age, :sex ) )
);

```

**示例 4**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Max for each Sex", Formula( Col Maximum( :height, :sex ) ) );
dt << New Column( "Col Max for each Sex grouped by Excluded",
	Formula( Col Maximum( :height, :sex, Excluded( Row State() ) ) )
);

```

### Col Mean

**语法:** y = Col Mean( xCol, <byVar, <Excluded( Row State() )>, ...>, < << Freq( freqCol ) > )

**说明:** 返回列中各行的样本均值。结果会在内部缓存，因此可高效进行多次计算。可选 byVar 参数指定按组计算。注意: byVar 参数应在列公式或 For Each Row() 函数中使用。

**JMP添加的版本:** 早于版本 14

**示例 1**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Mean( :height );

```

**示例 2**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Mean( :height, <<Freq( :weight ) );

```

**示例 3**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Mean( :height, :age ) ) );

```

**示例 4**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Mean for Each Age and Sex Group",
	Formula( Col Mean( :height, :age, :sex ) )
);

```

**示例 5**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Mean for each Sex", Formula( Col Mean( :height, :sex ) ) );
dt << New Column( "Col Mean for each Sex grouped by Excluded",
	Formula( Col Mean( :height, :sex, Excluded( Row State() ) ) )
);

```

### Col Median

**语法:** y = Col Median( xCol, <byVar, <Excluded( Row State() )>, ...>, < << Freq( freqCol ) > )

**说明:** 返回列中各行的指定中位数。顺序会在内部缓存，因此可高效进行多重计算。

**JMP添加的版本:** 15

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Col Median Height",
	numeric,
	continuous,
	formula( Col Median( :height ) )
);
dt << New Column( "Col Median Height by Age",
	numeric,
	continuous,
	formula( Col Median( :height, :age ) )
);

```

**示例 2**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row() = 1;
Show( Col Median( :height ) );
Row() = 1;
Show( Col Median( :height, :age ) );

```

**示例 3**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Median for each Sex", Formula( Col Median( :height, :sex ) ) );
dt << New Column( "Col Median for each Sex grouped by Excluded",
	Formula( Col Median( :height, :sex, Excluded( Row State() ) ) )
);

```

### Col Min

**语法:** y = Col Minimum( xCol, <byVar, <Excluded( Row State() )>, ...> )

**说明:** 返回列中各行的最小值。结果会在内部缓存，因此可高效进行多次计算。可选 byVar 参数指定按组计算。注意: byVar 参数应在列公式或 For Each Row() 函数中使用。

**JMP添加的版本:** 早于版本 14

**示例 1**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Minimum( :height );

```

**示例 2**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Minimum( :height, :age ) ) );

```

**示例 3**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Minimum Value for Each Age and Sex Group",
	Formula( Col Minimum( :height, :age, :sex ) )
);

```

**示例 4**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Min for each Sex", Formula( Col Minimum( :height, :sex ) ) );
dt << New Column( "Col Min for each Sex grouped by Excluded",
	Formula( Col Minimum( :height, :sex, Excluded( Row State() ) ) )
);

```

### Col Minimum

**语法:** y = Col Minimum( xCol, <byVar, <Excluded( Row State() )>, ...> )

**说明:** 返回列中各行的最小值。结果会在内部缓存，因此可高效进行多次计算。可选 byVar 参数指定按组计算。注意: byVar 参数应在列公式或 For Each Row() 函数中使用。

**JMP添加的版本:** 早于版本 14

**示例 1**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Minimum( :height );

```

**示例 2**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Minimum( :height, :age ) ) );

```

**示例 3**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Minimum Value for Each Age and Sex Group",
	Formula( Col Minimum( :height, :age, :sex ) )
);

```

**示例 4**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Min for each Sex", Formula( Col Minimum( :height, :sex ) ) );
dt << New Column( "Col Min for each Sex grouped by Excluded",
	Formula( Col Minimum( :height, :sex, Excluded( Row State() ) ) )
);

```

### Col Mode

**语法:** y = Col Mode( xCol, <byVar, <Excluded( Row State() )>, ...>, < << Freq( freqCol ) > )

**说明:** 返回列中各行的样本众数，若有多个众数，选择最小值。结果会在内部缓存，因此可高效进行多次计算。可选 byVar 参数指定按组计算。注意: byVar 参数应在列公式或 For Each Row() 函数中使用。

**JMP添加的版本:** 17

**示例 1**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Mode( :height );

```

**示例 2**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Mode( :height, :age ) ) );

```

**示例 3**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Mode for Each Age and Sex Group",
	Formula( Col Mode( :height, :age, :sex ) )
);

```

**示例 4**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Mode for each Sex", Formula( Col Mode( :height, :sex ) ) );
dt << New Column( "Col Mode for each Sex grouped by Excluded",
	Formula( Col Mode( :height, :sex, Excluded( Row State() ) ) )
);

```

### Col Moving Average

**语法:** y = Col Moving Average( xCol, <weighting=0.25>, <before=-1>, <after=0>, <partial window is missing=1>, <byVar, <Excluded( Row State() )>, ...> )

**说明:** 返回基于当前行的给定区间的移动平均值。对于权重乘数，1 表示等同加权，0 表示线性加权，其他值则充当指数权重乘数。无需预先对“依据”变量排序。

**JMP添加的版本:** 早于版本 14

**示例 1**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row() = 40;
Col Moving Average( :height, 1, 5, 0, :sex );

```

**示例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Moving Average for each Sex",
	Formula( Col Moving Average( :height, :sex ) )
);
dt << New Column( "Col Moving Average for each Sex grouped by Excluded",
	Formula( Col Moving Average( :height, :sex, Excluded( Row State() ) ) )
);

```

### Col N Missing

**语法:** y = Col N Missing( xCol, <byVar, <Excluded( Row State() )>, ...> )

**说明:** 返回列中各行的缺失值的数目。结果会在内部缓存，因此可高效进行多次计算。可选 byVar 参数指定按组计算。注意: byVar 参数应在列公式或 For Each Row() 函数中使用。

**JMP添加的版本:** 早于版本 14

**示例 1**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Col N Missing( :height );

```

**示例 2**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col N Missing( :height, :age ) ) );

```

**示例 3**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Number of Missing Values for Each Age and Sex Group",
	Formula( Col N Missing( :height, :age, :sex ) )
);

```

**示例 4**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:height[10] = .;
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col N Missing for each Sex", Formula( Col N Missing( :height, :sex ) ) );
dt << New Column( "Col N Missing for each Sex grouped by Excluded",
	Formula( Col N Missing( :height, :sex, Excluded( Row State() ) ) )
);

```

### Col N Unique

**语法:** y = Col N Unique( xCol, <byVar, ...>, < <<score missing(bool)> )

**说明:** 返回列中唯一值的数量。若请求了缺失值，则所有缺失值代码都计为一个值。

**JMP添加的版本:** 19

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
New Column( "N unique age by sex", Formula( Col N Unique( :age, :sex ) ) );
New Column( "N unique height by age", Formula( Col N Unique( :height, :age ) ) );

```

### Col Number

**语法:** y = Col Number( xCol, <byVar, <Excluded( Row State() )>, ...>, < << Freq( freqCol ) > )

**说明:** 返回列中各行的非缺失值的数目。结果会在内部缓存，因此可高效进行多次计算。可选 byVar 参数指定按组计算。注意: byVar 参数应在列公式或 For Each Row() 函数中使用。

**JMP添加的版本:** 早于版本 14

**示例 1**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Number( :height );

```

**示例 2**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Number( :height, :age ) ) );

```

**示例 3**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Number of Nonmissing Values for Each Age and Sex Group",
	Formula( Col Number( :height, :age, :sex ) )
);

```

**示例 4**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:height[10] = .;
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Number for each Sex", Formula( Col Number( :height, :sex ) ) );
dt << New Column( "Col Number for each Sex grouped by Excluded",
	Formula( Col Number( :height, :sex, Excluded( Row State() ) ) )
);

```

### Col Quantile

**语法:** y = Col Quantile( xCol, p, <byVar, <Excluded( Row State() )>, ...>, < << Freq( freqCol ) > )

**说明:** 返回列中各行的指定分位数。顺序会在内部缓存，因此可高效进行多重计算。

**JMP添加的版本:** 早于版本 14

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Col Quantile Height",
	numeric,
	continuous,
	formula( Col Quantile( :height, 0.5 ) )
);
dt << New Column( "Col Quantile Height by Age",
	numeric,
	continuous,
	formula( Col Quantile( :height, 0.5, :age ) )
);

```

**示例 2**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row() = 1;
Show( Col Quantile( :height, 0.5 ) );
Row() = 1;
Show( Col Quantile( :height, 0.5, :age ) );

```

**示例 3**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Quantile for each Sex",
	Formula( Col Quantile( :height, 0.5, :sex ) )
);
dt << New Column( "Col Quantile for each Sex grouped by Excluded",
	Formula( Col Quantile( :height, 0.5, :sex, Excluded( Row State() ) ) )
);

```

### Col Rank

**语法:** y = Col Rank( xCol, <byVar, <Excluded( Row State() )>, ...>, < <<tie("average"|"row"|"minimum"|"maximum"|"arbitrary")> )

**说明:** 返回秩，范围从最小值 1 开始，除非由 <<Tie 参数指定，否则行阶平局被打破。“average”生成并列秩的平均值，“minimum”生成并列秩的最小值。对于“row”和“arbitrary”，每行具有唯一秩。

**JMP添加的版本:** 早于版本 14

**示例 1**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
New Column( "Rank Height", Formula( Col Rank( :height, <<tie( "average" ) ) ) );
New Column( "Rank Height by age", Formula( Col Rank( :height, :age ) ) );

```

**示例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Rank for each Sex", Formula( Col Rank( :height, :sex ) ) );
dt << New Column( "Col Rank for each Sex grouped by Excluded",
	Formula( Col Rank( :height, :sex, Excluded( Row State() ) ) )
);

```

### Col Score

**语法:** y = Col Score( xCol, <byVar, ...>, < <<score missing(bool)> )

**说明:** 返回每个唯一值的整数得分，这些值按照任何相关列属性进行排序。

**JMP添加的版本:** 19

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
New Column( "Score Height", Formula( Col Score( :height ) ) );
New Column( "Score Height by age", Formula( Col Score( :height, :age ) ) );

```

### Col Sequence

**语法:** y = Col Sequence( <byVar, ...>, < <<skip missing(expr)>, < <<sequence(start=1, end=unbounded, incr=1, repeat=1)>)

**说明:** 返回该行在其 byVar 组中的位置，且依据 skip missing 和任何 sequence 参数进行了调整。

**JMP添加的版本:** 19

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
New Column( "Row within sex", Formula( Col Sequence( :sex ) ) );
New Column( "Alternate within sex", Formula( Col Sequence( :sex, <<Sequence( 1, 2 ) ) ) );
New Column( "Row within sex, 60+",
	Formula( Col Sequence( :sex, <<skip missing( Sqrt( :height - 60 ) ) ) )
);

```

### Col Simple Exponential Smoothing

**语法:** y = Col Simple Exponential Smoothing( xCol, alpha, <byVar, ...> )

**说明:** 使用平滑权重 alpha 返回当前行的简单指数平滑预测。无需预先对“依据”变量排序。公式为 Predicted Value[t]=alpha * Observed Value[t-1] + (1-alpha) * Predicted Value[t-1]，其中 Predicted Value[1] = Observed Value[1]。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Time Series/Seriesa.jmp" );
Row() = 40;
Col Simple Exponential Smoothing( :Column1, .7 );

```

### Col Standardize

**语法:** y = Col Standardize( xCol, <byVar, <Excluded( Row State() )>, ...> )

**说明:** 返回值减去列均值除以列中各行的列标准差。若指定了“依据”组列，则根据该“依据”组的均值和标准差对值进行标准化。

**JMP添加的版本:** 早于版本 14

**示例 1**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row() = 1;
Col Standardize( :height );

```

**示例 2**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Standardize( :height, :age ) ) );

```

**示例 3**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Standardize for each Sex",
	Formula( Col Standardize( :height, :sex ) )
);
dt << New Column( "Col Standardize for each Sex grouped by Excluded",
	Formula( Col Standardize( :height, :sex, Excluded( Row State() ) ) )
);

```

### Col Std Dev

**语法:** y = Col Std Dev( xCol, <byVar, <Excluded( Row State() )>, ...>, < << Freq( freqCol ) > )

**说明:** 返回列中各行的样本标准差。结果会在内部缓存，因此可高效进行多次计算。可选 byVar 参数指定按组计算。注意: byVar 参数应在列公式或 For Each Row() 函数中使用。

**JMP添加的版本:** 早于版本 14

**示例 1**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Std Dev( :height );

```

**示例 2**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Std Dev( :height, :age ) ) );

```

**示例 3**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Std Dev( :height, :age, <<Freq( :weight ) ) ) );

```

**示例 4**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Standard Deviation for Each Age and Sex Group",
	Formula( Col Std Dev( :height, :age, :sex ) )
);

```

**示例 5**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Standard Deviation for each Sex",
	Formula( Col Std Dev( :height, :sex ) )
);
dt << New Column( "Col Standard Deviation for each Sex grouped by Excluded",
	Formula( Col Std Dev( :height, :sex, Excluded( Row State() ) ) )
);

```

### Col Sum

**语法:** y = Col Sum( xCol, <byVar, <Excluded( Row State() )>, ...>, < << Freq( freqCol ) > )

**说明:** 返回列中各行的和。结果会在内部缓存，因此可高效进行多次计算。可选 byVar 参数指定按组计算。注意: byVar 参数应在列公式或 For Each Row() 函数中使用。

**JMP添加的版本:** 早于版本 14

**示例 1**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Sum( :height );

```

**示例 2**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Sum( :height, <<Freq( :weight ) );

```

**示例 3**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Sum( :height, :age ) ) );

```

**示例 4**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Sum for Each Age and Sex Group",
	Formula( Col Sum( :height, :age, :sex ) )
);

```

**示例 5**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Sum for each Sex", Formula( Col Sum( :height, :sex ) ) );
dt << New Column( "Col Sum for each Sex grouped by Excluded",
	Formula( Col Sum( :height, :sex, Excluded( Row State() ) ) )
);

```

### Cumulative Sum

**语法:** y = Cumulative Sum( x )

**说明:** 返回输入矩阵的部分总和矩阵。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Cumulative Sum( [1 1 1 1 . 10 20] );

```

### Fit Censored

**语法:** result = FitCensored( Distribution(name), YLow(vector) | Y(vector), <YHigh(vector)>, <Weight(vector)>, <X(matrix)>, <Z(matrix)>, <HoldParm(vector)>, <Use random sample to compute initial values(percent)>, <Use first N observations to compute initial values(nobs)> )

**说明:** 使用删失数据拟合分布。所需的参数为 Distribution 以及 YLow 或 Y。函数返回一个列表，其中包含参数估计值、协方差矩阵、对数似然、AICc、BIC 和一条收敛消息。X 和 Z 参数分别为位置和尺度指定回归设计矩阵。当数据向量较大时，两个可选参数可用于指定样本来计算初始值。您可以指定 percent 的观测，或前 nobs 个观测，但总样本大小必须大于 100。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
result = Fit Censored(
	Distribution( "Weibull" ),
	Y( [142, 156, 163, 198, 204, 205, 232, 239, 240, 261, 280, 296, 323, 344] )
);
Show( result );

```

### Fit Circle

**语法:** {xCenter, yCenter, radius, sse} = Fit Circle( Xvec, Yvec )

**说明:** 拟合一个圆，该圆通过两个坐标向量定义的三个或多个点。结果是一个列表，它包含该圆的中心点的 X 和 Y 坐标、半径长度和误差平方和。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
x = [68, 77, 85, 88, 93, 93, 95, 98];
y = [1, 9, 18, 94, 35, 82, 40, 59];
result = Fit Circle( x, y );
New Window( "Fit Circle",
	Graph Box(
		X Scale( -50, 100 ),
		Y Scale( -20, 130 ),
		FrameSize( 300, 300 ),
		Marker( x, y );
		Circle( {result[1], result[2]}, result[3] );
	)
);

```

### Hier Clust

**语法:** {c1, c2, c3, c4, c5} = Hier Clust( x )

**说明:** 使用 Ward 方法（无标准化数据）返回层次聚类的聚类历史记录，其中 x 是数据矩阵。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
exdt = Open( "$SAMPLE_DATA/Body Measurements.jmp" );
ex = exdt << get as matrix();
exhc = Hierarchical Cluster(
	Y( Eval( exdt << Get Column Names ) ),
	Method( Ward ),
	Standardize( 0 ),
	Dendrogram Scale( Even Spacing ),
	Number of Clusters( 3 )
);
Report( exhc )["Dendrogram"] << Close( 1 );
Report( exhc )["Clustering History"] << Close( 0 );
exhistory = Hier Clust( ex );
exhistory[3, 1];

```

### IRT Ability

**语法:** y = IRT Ability( Q1, ..., Qn, parmMatrix )

**说明:** 为具有 n 个二值型项目和由 parmMatrix 指定的已知参数矩阵的项目反应理论模型中的潜在变量生成得分。参数矩阵应包含与模型中相同参数个数的行和分析中相同项目数的列。

**JMP添加的版本:** 早于版本 14

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/MathScienceTest.jmp" );
obj = dt << Item Analysis( Y( :Q1, :Q2, :Q3, :Q4, :Q5 ), Model( "Logistic 2PL" ) );
obj << Save Ability Formula;
Column( dt, N Cols( dt ) ) << Get Formula;

```

**示例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/MathScienceTest.jmp" );
mth = (dt << get as matrix)[0, Index( 2, 6 )];
mthlst = {};
i = Floor( Random Uniform( 1, N Rows( mth ) ) );
mthlst[1] = mth[i, 1] |/ mth[i, 2] |/ mth[i, 3] |/ mth[i, 4] |/ mth[i, 5];
mthlst[2] = IRT Ability(
	mth[i, 1],
	mth[i, 2],
	mth[i, 3],
	mth[i, 4],
	mth[i, 5],
	[0.28 1.93 1.9 1.67 1, -0.06 -0.55 0.5 -1.89 0.04]
);
mthlst;

```

### KDE

**语法:** {Estimates, Bins, Counts, ActualBandwidth, Error} = KDE( Vector, <<weights, <<bandwidth( 0 ), <<bandwidth scale( 1 ), <<bandwidth selection( 0 ), <<kernel )

**说明:** 返回具有自动带宽选择的核密度估计量。可选 weights 参数必须是与 Vector 参数长度相等的一个向量。可选 bandwidth 参数必须为非负实数或零，为零时会强制使用 bandwidth selection 参数的值。可选 bandwidth scale 参数必须为正实数。可选 bandwidth selection 参数必须为 0、1、2 或 3，分别对应于 Sheather and Jones、Normal Reference、Silverman rule of thumb 或 Oversmoother。可选 kernel 参数可以为 0、1、2、3 或 4，分别对应于 Gaussian、Epanechnikov、Biweight、Triangular 或 Rectangular。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
// generate sample dataset from a mixture of 3 normal distributions
ndata3 = 25;
Random Reset( 113 );
channel = J( 1, ndata3 * 3, 0 );
For( i = 1, i <= ndata3, i++,
	channel[1, i] = Random Normal() - 3;
	channel[1, ndata3 + i] = Random Normal() / 2;
	channel[1, ndata3 + ndata3 + i] = Random Normal() + 3;
);

// use kernel density estimator to estimate the underlying distribution
bw = .; // automatic bandwidth
bscl = 1; // bandwidth multiplier
bsel = 0; // Sheather and Jones bandwith selection

// Create data table with estimates from all smoothing KDEs and Bins
dt = New Table( "KDE Smoothing",
	New Column( "Kernel", "Character" ),
	New Column( "Bin" ),
	New Column( "Density Estimate" ),
	New Column( "Counts" )
);

kernels = {"Gaussian", "Epanechnikov", "Biweight", "Triangular", "Rectangular"};
For( kernel = 0, kernel < N Items( kernels ), kernel++,
	res = KDE(
		channel,
		<<bandwidth( bw ),
		<<bandwidth scale( bscl ),
		<<bandwidth selection( bsel ),
		<<kernel( kernel )
	);
	nbin = N Items( res["Bins"] );
	rows = (N Rows( dt ) + 1) :: (N Rows( dt ) + nbin);
	dt << Add Rows( nbin );
	dt[rows, "Kernel"] = kernels[kernel + 1];
	dt[rows, "Bin"] = res["Bins"]`;
	dt[rows, "Density Estimate"] = res["Estimates"]`;
	dt[rows, "Counts"] = res["Counts"]`;
);

dt << Graph Builder(
	Size( 1000, 376 ),
	Show Control Panel( 0 ),
	Legend Position( "Bottom" ),
	Variables(
		X( :Bin ),
		Y( :Density Estimate, Side( "Right" ) ),
		Y( :Counts, Position( 1 ) ),
		Overlay( :Kernel )
	),
	Elements(
		Bar( X, Y( 2 ), Overlay( 0 ), Legend( 2 ), Bar Style( "Needle" ) ),
		Line( X, Y( 1 ), Legend( 3 ) )
	)
);

```

### LenthPSE

**语法:** y = LenthPSE( x )

**说明:** 返回单一向量 x 内值的 Lenth 伪标准误差。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Eval List( {LenthPSE( [1, 2, 3, 4, 5] ), Std Dev( [1, 2, 3, 4, 5] )} );

```

### Max

**语法:** y = Max( x1, ... ); y = Maximum( x1, ... )

**说明:** 返回参数中的最大值，或单一矩阵或列表参数中各值的最大值。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Eval List( {Max( Pi(), e() ), Max( [33 44 22] )} );

```

### Maximum

**语法:** y = Max( x1, ... ); y = Maximum( x1, ... )

**说明:** 返回参数中的最大值，或单一矩阵或列表参数中各值的最大值。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Eval List( {Max( Pi(), e() ), Max( [33 44 22] )} );

```

### Mean

**语法:** y = Mean( x1, ... )

**说明:** 返回参数的算数均值，或单一矩阵或列表参数中各值的算术均值。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Eval List( {Mean( Pi(), e() ), Mean( [33 44 22 20 30] )} );

```

### Median

**语法:** y = Median( x1, ... )

**说明:** 返回组合参数的中位数，它们可以是标量、矩阵或列表参数。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );
Median( [1.2, 1.5, 10, 25, 31, 40, 50, 99, 1000, 5000, 25000, 100000] );

```

### Min

**语法:** y = Min( x1, ... ); y = Minimum( x1, ... )

**说明:** 返回参数中的最小值，或单一矩阵或列表参数中各值的最小值。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Eval List( {Min( Pi(), e() ), Min( [33 44 22] )} );

```

### Minimum

**语法:** y = Min( x1, ... ); y = Minimum( x1, ... )

**说明:** 返回参数中的最小值，或单一矩阵或列表参数中各值的最小值。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Eval List( {Min( Pi(), e() ), Min( [33 44 22] )} );

```

### Moving Average

**语法:** y = Moving Average( x, weighting, <before=-1>, <after=0>, <partial window is missing=0> )

**说明:** 返回输入矩阵的移动平均矩阵。“before”和“after”确定要平均的项的范围（“窗口”），其中“before”可为 -1 以指示所有先验项。若“weighting”为 1，则所有项都具有相同权重。若“weighting”为 0，则各项具有线性递增权重。否则，“weighting”为指数权重 (EWMA) 的参数。“partial window is missing”指示在并非所有邻近值都存在时（可能出现在末尾或接近缺失值的位置）是否报告平均值。若“partial window is missing”非零，则改为为这种不完全窗口报告缺失值。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Eval List(
	{Moving Average( [1 2 1 2 3 4 9 9 9 9 9], 1, 3 ),
	Moving Average( [1 2 1 2 3 4 9 9 9 9 9], 0, 2, 2 ),
	Moving Average( [1 2 1 2 . 4 9 9 9 9 9], 1, 1, 1, 1 ),
	Moving Average( [1 2 1 2 3 4 9 9 9 9 9], 0.5 )}
);

```

### N Missing

**语法:** y = N Missing( x1, x2, ... )

**说明:** 返回参数中的缺失值数量。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
N Missing( 1, 2, ., 3, [11 22 . .], 4 );

```

### Normal Tolerance Factor

**语法:** q = Normal Tolerance Factor( 1-alpha, p, n, <One Sided> )

**说明:** 计算构造 1-alpha 置信区间的容差因子，以包含正态分布中样本大小为 n 的均值的比例 p。可通过一个选项来请求单侧容差区间的因子。

**JMP添加的版本:** 19

```jsl

Names Default To Here( 1 );
n = 15;
New Window( "Example: Tolerance Factor()",
	tdig = Graph Box(
		Y Scale( 0, 5 ),
		X Scale( 0.05, 0.95 ),
		Yname( "Tolerance Factor" ),
		Xname( "p" ),
		Pen Color( "red" );
		Y Function( Normal Tolerance Factor( 0.95, p, n ), p );
		Text( {0.1, 4}, "n=", Round( n ) );
	),
	H List Box( Text Box( "n" ), Slider Box( 5, 25, n, tdig << reshow ) )
);

```

### Number

**语法:** y = Number( x1, ... )

**说明:** 返回非缺失参数的个数，或单一矩阵或列表参数中各值的个数。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Eval List( {Number( 12, ., 11, 0, -42 ), Number( [33 . -42 . 0 . -30] )} );

```

### Product

**语法:** y = Product( assignExpr, limit, bodyExpr )

**说明:** 返回 bodyExpr 参数的计算值乘积，每次从 assignExpr 参数增加变量，直到其大于等于 limit 参数为止。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
2 * Product( i = 1, 10000, 4 * i * i / (2 * i - 1) / (2 * i + 1) );

```

### Quantile

**语法:** y = Quantile( p, x1, ... )

**说明:** 返回 x 参数的指定 p 分位数。分位数参数可以是标量或矩阵。x 值也可以指定为单一矩阵或列表参数中的值。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Eval List(
	{Quantile( 0.75, 0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000 ),
	Quantile( 0.5, [1.2, 1.5, 10, 25, 31, 40, 50, 99, 1000, 5000, 25000, 100000] )}
);

```

### Range

**语法:** y = Range( x1, ... )

**说明:** 返回组合参数中的最小值和最大值，它们可以是标量、矩阵或列表参数。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );
Eval List( {Range( Pi(), e() ), Range( [33 44 22] )} );

```

### SSQ

**语法:** y = SSQ( x1, ... )

**说明:** 返回所有元素的平方和

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Eval List( {SSQ( Pi(), e() ), SSQ( [33 44 22 20 30] )} );

```

### Std Dev

**语法:** y = Std Dev( x1, ... )

**说明:** 返回参数的标准差，或单一矩阵或列表参数中各值的标准差。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Eval List( {Std Dev( Pi(), e() ), Std Dev( [33 44 22 20 30] )} );

```

### Sum

**语法:** y = Sum( x1, ... )

**说明:** 返回参数的总和，或单一矩阵或列表参数中各值的总和。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Eval List( {Sum( Pi(), e() ), Sum( [33 44 22 20 30] )} );

```

### Summarize

**语法:** Summarize( <dt>, nameBy=By( colBy ), name1=statName1( col1 ), ... )

**说明:** 计算跨越“依据”列的各种汇总统计量。统计量名称为计数、总和、均值、最大值、最小值、标准差、相关性、分位数、第一个。仅为数值列计算统计量。结果以矩阵形式储存在指定名称的变量中。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Summarize( exg = By( :sex ), exm = Mean( :height ) );
Eval List( {exg, Round( exm, 1 )} );

```

### Summarize YByX

**语法:** Summarize YByX( X(x columns),Y(y columns), Group(grouping columns), Freq(freq column), Weight(Weight column))

**说明:** 计算所有“以 X 拟合 Y”组合

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Summarize YByX( X( :age, :height ), Y( :sex, :weight ) );

```

### Summation

**语法:** y = Summation( assignExpr, limit, bodyExpr )

**说明:** 返回 bodyExpr 参数的计算值总和，每次从 assignExpr 参数增加变量，直到其大于等于 limit 参数为止。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Summation( i = 0, 10, 1 / Factorial( i ) );

```

