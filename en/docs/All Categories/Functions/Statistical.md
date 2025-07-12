# Statistical



## Functions

### ARIMA Forecast

**Syntax:** x = ARIMA Forecast( dtcol, length, model, estimates, from, to )

**Description:** Returns a vector of forecasted values for the dtcol column in the range determined by the from and to arguments. The length argument specifies a portion of the column for the function to use. The model argument matches messages that are sent to the Time Series platform to fit a model. The estimates argument matches the child of a Get Models message result of a single model. Typically, the from value is between 1 and the to value, inclusive. However, if from<=0 and from<=to, part of the results are filtered predictions.

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

**Syntax:** Arc Finder( Group( lot, wafer ), X( col ), Y( col ), <optional arguments> )

**Description:** Finds the arcs in the point data and creates a new column identifying the arcs.

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

**Syntax:** {c1, c2, g2} = Best Partition( xIndices, yIndices, <<Ordered, <<ContinuousY, <<ContinuousX )

**Description:** Determines the optimal grouping (experimental function).

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

**Syntax:** y = Col At( col, index, <byVar, ...>, < <<relative(bool)>, < <<skip missing(expr)> )

**Description:** Returns the value of col at row position index within its byVar group. Rows where the skip missing expression evaluates to a missing value are not included in the indexing.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
New Column( "Lag Height by Sex", Formula( Col At( :height, -1, :sex, <<relative( 1 ) ) ) );
New Column( "Relative to First Height", Formula( :height / Col At( :height, 1, :sex ) ) );
New Column( "Relative to Last Height", Formula( :height / Col At( :height, -1, :sex ) ) );

```

### Col Cumulative Sum

**Syntax:** y = Col Cumulative Sum( xCol, <byVar, <Excluded( Row State() )>, ...>, < << Freq( freqCol ) > )

**Description:** Returns the cumulative sum for the current row. By variables do not need to be presorted.

**Example 1**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row() = 40;
Col Cumulative Sum( :height, :sex );

```

**Example 2**

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

**Syntax:** y = Col Interpolate( v, xCol, yCol, <byVar, ...>, < <<method(linear|nearest|previous|next)>, < <<extrapolate(bool)> )

**Description:** Returns an interpolated value within yCol, corresponding to the position of v with xCol. Values outside the range of xCol will be missing unless extrapolate is on, in which case the nearest yCol value will be returned.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/GNP.jmp" );
dt << New Column( "date30", Formula( :date + 30 ) );
dt << New Column( "gnp30",
	Formula( Col Interpolate( :date30, :date, :"gross national product ($billions)"n ) )
);

```

### Col Max

**Syntax:** y = Col Maximum( xCol, <byVar, <Excluded( Row State() )>, ...> )

**Description:** Returns the maximum value across rows in a column. The result is cached internally so that multiple evaluations will be efficient. The optional byVar arguments specify by groups for the calculation. Note that byVar arguments should be used in a column formula or in a For Each Row() function.

**Example 1**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Maximum( :height );

```

**Example 2**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Maximum( :height, :age ) ) );

```

**Example 3**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Maximum Value for Each Age and Sex Group",
	Formula( Col Maximum( :height, :age, :sex ) )
);

```

**Example 4**

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

**Syntax:** y = Col Maximum( xCol, <byVar, <Excluded( Row State() )>, ...> )

**Description:** Returns the maximum value across rows in a column. The result is cached internally so that multiple evaluations will be efficient. The optional byVar arguments specify by groups for the calculation. Note that byVar arguments should be used in a column formula or in a For Each Row() function.

**Example 1**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Maximum( :height );

```

**Example 2**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Maximum( :height, :age ) ) );

```

**Example 3**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Maximum Value for Each Age and Sex Group",
	Formula( Col Maximum( :height, :age, :sex ) )
);

```

**Example 4**

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

**Syntax:** y = Col Mean( xCol, <byVar, <Excluded( Row State() )>, ...>, < << Freq( freqCol ) > )

**Description:** Returns the sample mean across rows in a column. The result is cached internally so that multiple evaluations will be efficient. The optional byVar arguments specify by groups for the calculation. Note that byVar arguments should be used in a column formula or in a For Each Row() function.

**Example 1**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Mean( :height );

```

**Example 2**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Mean( :height, <<Freq( :weight ) );

```

**Example 3**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Mean( :height, :age ) ) );

```

**Example 4**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Mean for Each Age and Sex Group",
	Formula( Col Mean( :height, :age, :sex ) )
);

```

**Example 5**

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

**Syntax:** y = Col Median( xCol, <byVar, <Excluded( Row State() )>, ...>, < << Freq( freqCol ) > )

**Description:** Returns the specified median across rows in a column. The ordering is cached internally so that multiple evaluations will be efficient.

**Example 1**

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

**Example 2**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row() = 1;
Show( Col Median( :height ) );
Row() = 1;
Show( Col Median( :height, :age ) );

```

**Example 3**

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

**Syntax:** y = Col Minimum( xCol, <byVar, <Excluded( Row State() )>, ...> )

**Description:** Returns the minimum value across rows in a column. The result is cached internally so that multiple evaluations will be efficient. The optional byVar arguments specify by groups for the calculation. Note that byVar arguments should be used in a column formula or in a For Each Row() function.

**Example 1**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Minimum( :height );

```

**Example 2**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Minimum( :height, :age ) ) );

```

**Example 3**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Minimum Value for Each Age and Sex Group",
	Formula( Col Minimum( :height, :age, :sex ) )
);

```

**Example 4**

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

**Syntax:** y = Col Minimum( xCol, <byVar, <Excluded( Row State() )>, ...> )

**Description:** Returns the minimum value across rows in a column. The result is cached internally so that multiple evaluations will be efficient. The optional byVar arguments specify by groups for the calculation. Note that byVar arguments should be used in a column formula or in a For Each Row() function.

**Example 1**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Minimum( :height );

```

**Example 2**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Minimum( :height, :age ) ) );

```

**Example 3**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Minimum Value for Each Age and Sex Group",
	Formula( Col Minimum( :height, :age, :sex ) )
);

```

**Example 4**

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

**Syntax:** y = Col Mode( xCol, <byVar, <Excluded( Row State() )>, ...>, < << Freq( freqCol ) > )

**Description:** Returns the sample mode across rows in a column, selecting the smallest in the case of multiple modes. The result is cached internally so that multiple evaluations will be efficient. The optional byVar arguments specify by groups for the calculation. Note that byVar arguments should be used in a column formula or in a For Each Row() function.

**Example 1**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Mode( :height );

```

**Example 2**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Mode( :height, :age ) ) );

```

**Example 3**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Mode for Each Age and Sex Group",
	Formula( Col Mode( :height, :age, :sex ) )
);

```

**Example 4**

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

**Syntax:** y = Col Moving Average( xCol, <weighting=0.25>, <before=-1>, <after=0>, <partial window is missing=1>, <byVar, <Excluded( Row State() )>, ...> )

**Description:** Returns the moving average over a given interval based at the current row. For the weight multiplier, 1 means equal weighting, 0 means linear weighting, and other values act as an exponential weighting multiplier. By variables do not need to be presorted.

**Example 1**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row() = 40;
Col Moving Average( :height, 1, 5, 0, :sex );

```

**Example 2**

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

**Syntax:** y = Col N Missing( xCol, <byVar, <Excluded( Row State() )>, ...> )

**Description:** Returns the number of missing values across rows in a column. The result is cached internally so that multiple evaluations will be efficient. The optional byVar arguments specify by groups for the calculation. Note that byVar arguments should be used in a column formula or in a For Each Row() function.

**Example 1**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Col N Missing( :height );

```

**Example 2**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col N Missing( :height, :age ) ) );

```

**Example 3**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Number of Missing Values for Each Age and Sex Group",
	Formula( Col N Missing( :height, :age, :sex ) )
);

```

**Example 4**

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

**Syntax:** y = Col N Unique( xCol, <byVar, ...>, < <<score missing(bool)> )

**Description:** Returns the number of unique values in a column. If missing values are requested, all missing value codes are counted as a single value.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
New Column( "N unique age by sex", Formula( Col N Unique( :age, :sex ) ) );
New Column( "N unique height by age", Formula( Col N Unique( :height, :age ) ) );

```

### Col Number

**Syntax:** y = Col Number( xCol, <byVar, <Excluded( Row State() )>, ...>, < << Freq( freqCol ) > )

**Description:** Returns the number of nonmissing values across rows in a column. The result is cached internally so that multiple evaluations will be efficient. The optional byVar arguments specify by groups for the calculation. Note that byVar arguments should be used in a column formula or in a For Each Row() function.

**Example 1**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Number( :height );

```

**Example 2**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Number( :height, :age ) ) );

```

**Example 3**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Number of Nonmissing Values for Each Age and Sex Group",
	Formula( Col Number( :height, :age, :sex ) )
);

```

**Example 4**

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

**Syntax:** y = Col Quantile( xCol, p, <byVar, <Excluded( Row State() )>, ...>, < << Freq( freqCol ) > )

**Description:** Returns the specified quantile across rows in a column. The ordering is cached internally so that multiple evaluations will be efficient.

**Example 1**

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

**Example 2**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row() = 1;
Show( Col Quantile( :height, 0.5 ) );
Row() = 1;
Show( Col Quantile( :height, 0.5, :age ) );

```

**Example 3**

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

**Syntax:** y = Col Rank( xCol, <byVar, <Excluded( Row State() )>, ...>, < <<tie("average"|"row"|"minimum"|"maximum"|"arbitrary")> )

**Description:** Returns the rank, ranging from 1 as the lowest, with row-order tie-breaking unless specified by the <<Tie argument. "average" produces the average for tied ranks, and "minimum" produces the lowest of tied ranks. For "row" and "arbitrary" each row has a unique rank.

**Example 1**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
New Column( "Rank Height", Formula( Col Rank( :height, <<tie( "average" ) ) ) );
New Column( "Rank Height by age", Formula( Col Rank( :height, :age ) ) );

```

**Example 2**

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

**Syntax:** y = Col Score( xCol, <byVar, ...>, < <<score missing(bool)> )

**Description:** Returns an integer score for each unique value, ordering according to any relevant column properties.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
New Column( "Score Height", Formula( Col Score( :height ) ) );
New Column( "Score Height by age", Formula( Col Score( :height, :age ) ) );

```

### Col Sequence

**Syntax:** y = Col Sequence( <byVar, ...>, < <<skip missing(expr)>, < <<sequence(start=1, end=unbounded, incr=1, repeat=1)>)

**Description:** Returns the position of this row within its byVar group, adjusted by skip missing and any sequence parameters.

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

**Syntax:** y = Col Simple Exponential Smoothing( xCol, alpha, <byVar, ...> )

**Description:** Returns the simple exponential smoothing prediction for the current row, using smoothing weight alpha. By variables do not need to be presorted. Formula is Predicted Value[t]=alpha * Observed Value[t-1] + (1-alpha) * Predicted Value[t-1], with Predicted Value[1] = Observed Value[1].

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Time Series/Seriesa.jmp" );
Row() = 40;
Col Simple Exponential Smoothing( :Column1, .7 );

```

### Col Standardize

**Syntax:** y = Col Standardize( xCol, <byVar, <Excluded( Row State() )>, ...> )

**Description:** Returns the value minus the column mean divided by the column standard deviation across rows in a column. If by-group columns are specified, the value is standardized against the mean and standard deviation of the by-group.

**Example 1**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row() = 1;
Col Standardize( :height );

```

**Example 2**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Standardize( :height, :age ) ) );

```

**Example 3**

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

**Syntax:** y = Col Std Dev( xCol, <byVar, <Excluded( Row State() )>, ...>, < << Freq( freqCol ) > )

**Description:** Returns the sample standard deviation across rows in a column. The result is cached internally so that multiple evaluations will be efficient. The optional byVar arguments specify by groups for the calculation. Note that byVar arguments should be used in a column formula or in a For Each Row() function.

**Example 1**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Std Dev( :height );

```

**Example 2**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Std Dev( :height, :age ) ) );

```

**Example 3**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Std Dev( :height, :age, <<Freq( :weight ) ) ) );

```

**Example 4**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Standard Deviation for Each Age and Sex Group",
	Formula( Col Std Dev( :height, :age, :sex ) )
);

```

**Example 5**

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

**Syntax:** y = Col Sum( xCol, <byVar, <Excluded( Row State() )>, ...>, < << Freq( freqCol ) > )

**Description:** Returns the sum across rows in a column. The result is cached internally so that multiple evaluations will be efficient. The optional byVar arguments specify by groups for the calculation. Note that byVar arguments should be used in a column formula or in a For Each Row() function.

**Example 1**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Sum( :height );

```

**Example 2**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Sum( :height, <<Freq( :weight ) );

```

**Example 3**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Sum( :height, :age ) ) );

```

**Example 4**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Sum for Each Age and Sex Group",
	Formula( Col Sum( :height, :age, :sex ) )
);

```

**Example 5**

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

**Syntax:** y = Cumulative Sum( x )

**Description:** Returns a matrix of partial sums for the input matrix.

```jsl

Names Default To Here( 1 );
Cumulative Sum( [1 1 1 1 . 10 20] );

```

### Fit Censored

**Syntax:** result = FitCensored( Distribution(name), YLow(vector) | Y(vector), <YHigh(vector)>, <Weight(vector)>, <X(matrix)>, <Z(matrix)>, <HoldParm(vector)>, <Use random sample to compute initial values(percent)>, <Use first N observations to compute initial values(nobs)> )

**Description:** Fits a distribution using censored data. The required arguments are Distribution and either YLow or Y. The function returns a list that contains parameter estimates, covariance matrix, log-likelihood, AICc, BIC, and a convergence message. The X and Z arguments specify regression design matrices for location and scale, respectively. When the data vector is large, two optional arguments can be used to specify a sample to compute the initial values. You can specify a percent of the observations or the first nobs observations, but the total sample size must be greater than 100.

```jsl

Names Default To Here( 1 );
result = Fit Censored(
	Distribution( "Weibull" ),
	Y( [142, 156, 163, 198, 204, 205, 232, 239, 240, 261, 280, 296, 323, 344] )
);
Show( result );

```

### Fit Circle

**Syntax:** {xCenter, yCenter, radius, sse} = Fit Circle( Xvec, Yvec )

**Description:** Fits the circle that best goes through three or more points that are defined by two vectors of coordinates. The result is a list that contains the X and Y coordinates of the center point of the circle, the length of the radius, and the sum of squared errors.

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

**Syntax:** {c1, c2, c3, c4, c5} = Hier Clust( x )

**Description:** Returns the clustering history for a hierarchical clustering using Ward&apos;s method (without standardizing data), where x is a data matrix.

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

**Syntax:** y = IRT Ability( Q1, ..., Qn, parmMatrix )

**Description:** Produces scores for the latent variable in an item response theory model with n binary items and a matrix of known parameters, specified by parmMatrix. The parameter matrix should contain as many rows as there are parameters in the model and as many columns as there are items in the analysis.

**Example 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/MathScienceTest.jmp" );
obj = dt << Item Analysis( Y( :Q1, :Q2, :Q3, :Q4, :Q5 ), Model( "Logistic 2PL" ) );
obj << Save Ability Formula;
Column( dt, N Cols( dt ) ) << Get Formula;

```

**Example 2**

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

**Syntax:** {Estimates, Bins, Counts, ActualBandwidth, Error} = KDE( Vector, <<weights, <<bandwidth( 0 ), <<bandwidth scale( 1 ), <<bandwidth selection( 0 ), <<kernel )

**Description:** Returns a kernel density estimator with automatic bandwidth selection. The optional weights argument must be a vector of the same length as the Vector argument. The optional bandwidth argument must be a nonnegative real number or zero, which forces the use of the value of the bandwidth selection argument. The optional bandwidth scale argument must be a positive real number. The optional bandwidth selection argument must be either 0, 1, 2, or 3, corresponding to Sheather and Jones, Normal Reference, Silverman rule of thumb, or Oversmoother, respectively. The optional kernel argument accepts the values 0, 1, 2, 3, or 4, corresponding to Gaussian, Epanechnikov, Biweight, Triangular, or Rectangular, respectively.

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

**Syntax:** y = LenthPSE( x )

**Description:** Returns Lenth&apos;s pseudo-standard error of the values within a single vector x.

```jsl

Names Default To Here( 1 );
Eval List( {LenthPSE( [1, 2, 3, 4, 5] ), Std Dev( [1, 2, 3, 4, 5] )} );

```

### Max

**Syntax:** y = Max( x1, ... ); y = Maximum( x1, ... )

**Description:** Returns the maximum value among the arguments or of the values within a single matrix or list argument.

```jsl

Names Default To Here( 1 );
Eval List( {Max( Pi(), e() ), Max( [33 44 22] )} );

```

### Maximum

**Syntax:** y = Max( x1, ... ); y = Maximum( x1, ... )

**Description:** Returns the maximum value among the arguments or of the values within a single matrix or list argument.

```jsl

Names Default To Here( 1 );
Eval List( {Max( Pi(), e() ), Max( [33 44 22] )} );

```

### Mean

**Syntax:** y = Mean( x1, ... )

**Description:** Returns the arithmetic mean of the arguments or of the values within a single matrix or list argument.

```jsl

Names Default To Here( 1 );
Eval List( {Mean( Pi(), e() ), Mean( [33 44 22 20 30] )} );

```

### Median

**Syntax:** y = Median( x1, ... )

**Description:** Returns the median of the combined arguments, which can be scalar, matrix or list arguments.

```jsl

Names Default To Here( 1 );
Median( [1.2, 1.5, 10, 25, 31, 40, 50, 99, 1000, 5000, 25000, 100000] );

```

### Min

**Syntax:** y = Min( x1, ... ); y = Minimum( x1, ... )

**Description:** Returns the minimum value among the arguments or of the values within a single matrix or list argument.

```jsl

Names Default To Here( 1 );
Eval List( {Min( Pi(), e() ), Min( [33 44 22] )} );

```

### Minimum

**Syntax:** y = Min( x1, ... ); y = Minimum( x1, ... )

**Description:** Returns the minimum value among the arguments or of the values within a single matrix or list argument.

```jsl

Names Default To Here( 1 );
Eval List( {Min( Pi(), e() ), Min( [33 44 22] )} );

```

### Moving Average

**Syntax:** y = Moving Average( x, weighting, <before=-1>, <after=0>, <partial window is missing=0> )

**Description:** Returns a matrix of moving averages for the input matrix. before and after determine the range ("window") of items to average, where before can be -1 to indicate all prior items. If weighting is 1, all items have equal weight. If weighting is 0, items have linearly incremental weights. Otherwise, weighting is the parameter for exponential weighting (EWMA). partial window is missing indicates whether averages are reported when not all neighbors are present, which can occur at the ends or near missing values. If partial window is missing is nonzero, missing values are reported instead for such partial windows.

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

**Syntax:** y = N Missing( x1, x2, ... )

**Description:** Returns the number of missing values among arguments.

```jsl

Names Default To Here( 1 );
N Missing( 1, 2, ., 3, [11 22 . .], 4 );

```

### Normal Tolerance Factor

**Syntax:** q = Normal Tolerance Factor( 1-alpha, p, n, <One Sided> )

**Description:** Computes the tolerance factor for constructing a 1-alpha confidence interval to contain proportion p of the means with sample size n from the normal distribution. There is an option to request the factor for a one-sided tolerance interval.

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

**Syntax:** y = Number( x1, ... )

**Description:** Returns the number of non-missing arguments or values within a single matrix or list argument.

```jsl

Names Default To Here( 1 );
Eval List( {Number( 12, ., 11, 0, -42 ), Number( [33 . -42 . 0 . -30] )} );

```

### Product

**Syntax:** y = Product( assignExpr, limit, bodyExpr )

**Description:** Returns the product of evaluations of the bodyExpr arguments, each time incrementing the variable from the assignExpr argument until it is greater than or equal to the limit argument.

```jsl

Names Default To Here( 1 );
2 * Product( i = 1, 10000, 4 * i * i / (2 * i - 1) / (2 * i + 1) );

```

### Quantile

**Syntax:** y = Quantile( p, x1, ... )

**Description:** Returns the specified quantile p of the x arguments. The quantile argument can be a scalar or a matrix. The x values can also be specified as values within a single matrix or list argument.

```jsl

Names Default To Here( 1 );
Eval List(
	{Quantile( 0.75, 0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000 ),
	Quantile( 0.5, [1.2, 1.5, 10, 25, 31, 40, 50, 99, 1000, 5000, 25000, 100000] )}
);

```

### Range

**Syntax:** y = Range( x1, ... )

**Description:** Returns the minimum and maximum values among the combined arguments, which can be scalar, matrix or list arguments.

```jsl

Names Default To Here( 1 );
Eval List( {Range( Pi(), e() ), Range( [33 44 22] )} );

```

### SSQ

**Syntax:** y = SSQ( x1, ... )

**Description:** Returns the sum of squares of all elements

```jsl

Names Default To Here( 1 );
Eval List( {SSQ( Pi(), e() ), SSQ( [33 44 22 20 30] )} );

```

### Std Dev

**Syntax:** y = Std Dev( x1, ... )

**Description:** Returns the standard deviation of the arguments or of the values within a single matrix or list argument.

```jsl

Names Default To Here( 1 );
Eval List( {Std Dev( Pi(), e() ), Std Dev( [33 44 22 20 30] )} );

```

### Sum

**Syntax:** y = Sum( x1, ... )

**Description:** Returns the sum of the arguments or of the values within a single matrix or list argument.

```jsl

Names Default To Here( 1 );
Eval List( {Sum( Pi(), e() ), Sum( [33 44 22 20 30] )} );

```

### Summarize

**Syntax:** Summarize( <dt>, nameBy=By( colBy ), name1=statName1( col1 ), ... )

**Description:** Calculates various summary statistics across a By column. The statistic names are Count, Sum, Mean, Max or Maximum, Min or Minimum, StdDev, Corr, Quantile, First. The statistics can be calculated only for numeric columns. The results are stored as matrices in variables with the specified names.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Summarize( exg = By( :sex ), exm = Mean( :height ) );
Eval List( {exg, Round( exm, 1 )} );

```

### Summarize YByX

**Syntax:** Summarize YByX( X(x columns),Y(y columns), Group(grouping columns), Freq(freq column), Weight(Weight column))

**Description:** Calculates all Fit Y by X combinations

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Summarize YByX( X( :age, :height ), Y( :sex, :weight ) );

```

### Summation

**Syntax:** y = Summation( assignExpr, limit, bodyExpr )

**Description:** Returns the sum of evaluations of the bodyExpr arguments, each time incrementing the variable from the assignExpr argument until it is greater than or equal to the limit argument.

```jsl

Names Default To Here( 1 );
Summation( i = 0, 10, 1 / Factorial( i ) );

```

