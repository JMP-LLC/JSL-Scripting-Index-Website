# Statistical



### ARIMA Forecast

**構文:** x = ARIMA Forecast( dtcol, length, model, estimates, from, to )

**説明:** 引数fromおよびtoによって指定された範囲で、dtcol列の予測値のベクトルを戻す。引数lengthには、予測に使用するデータの範囲を指定する。引数modelは、「時系列」プラットフォームでモデルを指定するときに用いるメッセージに対応している。引数estimatesは、1つのモデルのGet Modelsメッセージの結果の子とマッチする。通常は、fromの値を1～toの値に設定する。ただし、from<=0およびfrom<=toの場合、実測値に対する予測値になる。

**JMP追加されたバージョン:** バージョン14より前

```jsl

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

**構文:** Arc Finder( Group( lot, wafer ), X( col ), Y( col ), &lt;optional arguments&gt; )

**説明:** 点のデータにおいて円弧を見つけ、円弧を示す新しい列を作成する。

**JMP追加されたバージョン:** 14

```jsl


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

**構文:** {c1, c2, g2} = Best Partition( xIndices, yIndices, &lt;&lt;Ordered, &lt;&lt;ContinuousY, &lt;&lt;ContinuousX )

**説明:** 最適なグループ分けを判断する(試験的な関数)。

**JMP追加されたバージョン:** バージョン14より前

```jsl

/*Example for Continuous X and Continuous Y*/Best Partition(
	[1.2, 2.2, 3.5, 4.4, 5.6, 7.8],
	[11.2, 11.5, 11.8, 100.5, 100.7, 100.8],
	<<ContinuousX,
	<<ContinuousY
);

```

### Col At

**構文:** y = Col At( col, index, &lt;byVar, ...&gt;, &lt; &lt;&lt;relative(bool)&gt;, &lt; &lt;&lt;skip missing(expr)&gt; )

**説明:** byVarグループ内での行の位置indexにおけるcolの値を戻す。skip missing式が欠測値になる行は、インデックスに含まれない。

**JMP追加されたバージョン:** 19

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
New Column( "Lag Height by Sex", Formula( Col At( :height, -1, :sex, <<relative( 1 ) ) ) );
New Column( "Relative to First Height", Formula( :height / Col At( :height, 1, :sex ) ) );
New Column( "Relative to Last Height", Formula( :height / Col At( :height, -1, :sex ) ) );

```

### Col Cumulative Sum

**構文:** y = Col Cumulative Sum( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt;, &lt; &lt;&lt; Freq( freqCol ) &gt; )

**説明:** 現在の行までの累積和を戻す。BY変数は事前にソートされている必要はない。

**JMP追加されたバージョン:** バージョン14より前

#### 例 1

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row() = 40;
Col Cumulative Sum( :height, :sex );

```

#### 例 2

```jsl

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

**構文:** y = Col Interpolate( v, xCol, yCol, &lt;byVar, ...&gt;, &lt; &lt;&lt;method(linear|nearest|previous|next)&gt;, &lt; &lt;&lt;extrapolate(bool)&gt; )

**説明:** xCol のv の位置に対応するyCol の補間値を戻す。xCol の範囲の外にある値に対しては、extrapolate がオンでない限り欠測値が戻される。このオプションがオンの場合は、最も近いyCol の値が戻される。

**JMP追加されたバージョン:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/GNP.jmp" );
dt << New Column( "date30", Formula( :date + 30 ) );
dt << New Column( "gnp30",
	Formula( Col Interpolate( :date30, :date, :"gross national product ($billions)"n ) )
);

```

### Col Max

**構文:** y = Col Maximum( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt; )

**説明:** 指定された列の行全体における最大値を求める。計算結果が内部的に保持されるので、複数の統計量を求めるのに効率が良い。オプションの引数byVarbyVarによってByグループを指定できる(これは、列の計算式またはFor Each Row()関数で使用されなければならない)。

**JMP追加されたバージョン:** バージョン14より前

#### 例 1

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Maximum( :height );

```

#### 例 2

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Maximum( :height, :age ) ) );

```

#### 例 3

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Maximum Value for Each Age and Sex Group",
	Formula( Col Maximum( :height, :age, :sex ) )
);

```

#### 例 4

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Max for each Sex", Formula( Col Maximum( :height, :sex ) ) );
dt << New Column( "Col Max for each Sex grouped by Excluded",
	Formula( Col Maximum( :height, :sex, Excluded( Row State() ) ) )
);

```

### Col Maximum

**構文:** y = Col Maximum( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt; )

**説明:** 指定された列の行全体における最大値を求める。計算結果が内部的に保持されるので、複数の統計量を求めるのに効率が良い。オプションの引数byVarbyVarによってByグループを指定できる(これは、列の計算式またはFor Each Row()関数で使用されなければならない)。

**JMP追加されたバージョン:** バージョン14より前

#### 例 1

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Maximum( :height );

```

#### 例 2

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Maximum( :height, :age ) ) );

```

#### 例 3

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Maximum Value for Each Age and Sex Group",
	Formula( Col Maximum( :height, :age, :sex ) )
);

```

#### 例 4

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Max for each Sex", Formula( Col Maximum( :height, :sex ) ) );
dt << New Column( "Col Max for each Sex grouped by Excluded",
	Formula( Col Maximum( :height, :sex, Excluded( Row State() ) ) )
);

```

### Col Mean

**構文:** y = Col Mean( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt;, &lt; &lt;&lt; Freq( freqCol ) &gt; )

**説明:** 指定された列の行全体における平均を求める。計算結果が内部的に保持されるので、複数の統計量を求めるのに効率が良い。オプションの引数byVarbyVarによってByグループを指定できる(これは、列の計算式またはFor Each Row()関数で使用されなければならない)。

**JMP追加されたバージョン:** バージョン14より前

#### 例 1

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Mean( :height );

```

#### 例 2

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Mean( :height, <<Freq( :weight ) );

```

#### 例 3

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Mean( :height, :age ) ) );

```

#### 例 4

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Mean for Each Age and Sex Group",
	Formula( Col Mean( :height, :age, :sex ) )
);

```

#### 例 5

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Mean for each Sex", Formula( Col Mean( :height, :sex ) ) );
dt << New Column( "Col Mean for each Sex grouped by Excluded",
	Formula( Col Mean( :height, :sex, Excluded( Row State() ) ) )
);

```

### Col Median

**構文:** y = Col Median( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt;, &lt; &lt;&lt; Freq( freqCol ) &gt; )

**説明:** 指定された列の行全体における、中央値を求める。データの順序が内部的に保持されるので、複数の統計量を求めるのに効率が良い。

**JMP追加されたバージョン:** 15

#### 例 1

```jsl

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

#### 例 2

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row() = 1;
Show( Col Median( :height ) );
Row() = 1;
Show( Col Median( :height, :age ) );

```

#### 例 3

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Median for each Sex", Formula( Col Median( :height, :sex ) ) );
dt << New Column( "Col Median for each Sex grouped by Excluded",
	Formula( Col Median( :height, :sex, Excluded( Row State() ) ) )
);

```

### Col Min

**構文:** y = Col Minimum( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt; )

**説明:** 指定された列の行全体における最小値を求める。計算結果が内部的に保持されるので、複数の統計量を求めるのに効率が良い。オプションの引数byVarbyVarによってByグループを指定できる(これは、列の計算式またはFor Each Row()関数で使用されなければならない)。

**JMP追加されたバージョン:** バージョン14より前

#### 例 1

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Minimum( :height );

```

#### 例 2

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Minimum( :height, :age ) ) );

```

#### 例 3

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Minimum Value for Each Age and Sex Group",
	Formula( Col Minimum( :height, :age, :sex ) )
);

```

#### 例 4

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Min for each Sex", Formula( Col Minimum( :height, :sex ) ) );
dt << New Column( "Col Min for each Sex grouped by Excluded",
	Formula( Col Minimum( :height, :sex, Excluded( Row State() ) ) )
);

```

### Col Minimum

**構文:** y = Col Minimum( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt; )

**説明:** 指定された列の行全体における最小値を求める。計算結果が内部的に保持されるので、複数の統計量を求めるのに効率が良い。オプションの引数byVarbyVarによってByグループを指定できる(これは、列の計算式またはFor Each Row()関数で使用されなければならない)。

**JMP追加されたバージョン:** バージョン14より前

#### 例 1

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Minimum( :height );

```

#### 例 2

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Minimum( :height, :age ) ) );

```

#### 例 3

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Minimum Value for Each Age and Sex Group",
	Formula( Col Minimum( :height, :age, :sex ) )
);

```

#### 例 4

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Min for each Sex", Formula( Col Minimum( :height, :sex ) ) );
dt << New Column( "Col Min for each Sex grouped by Excluded",
	Formula( Col Minimum( :height, :sex, Excluded( Row State() ) ) )
);

```

### Col Mode

**構文:** y = Col Mode( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt;, &lt; &lt;&lt; Freq( freqCol ) &gt; )

**説明:** 指定された列における最頻値を求める。複数の最頻値がある場合、最小のものが戻される。計算結果が内部的に保持されるので、複数回の評価が効率良く行われる。オプションの引数byVarによってByグループを指定できる。byVarは、列の計算式またはFor Each Row()で使用する必要がある。

**JMP追加されたバージョン:** 17

#### 例 1

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Mode( :height );

```

#### 例 2

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Mode( :height, :age ) ) );

```

#### 例 3

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Mode for Each Age and Sex Group",
	Formula( Col Mode( :height, :age, :sex ) )
);

```

#### 例 4

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Mode for each Sex", Formula( Col Mode( :height, :sex ) ) );
dt << New Column( "Col Mode for each Sex grouped by Excluded",
	Formula( Col Mode( :height, :sex, Excluded( Row State() ) ) )
);

```

### Col Moving Average

**構文:** y = Col Moving Average( xCol, &lt;weighting=0.25&gt;, &lt;before=-1&gt;, &lt;after=0&gt;, &lt;partial window is missing=1&gt;, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt; )

**説明:** 指定された期間で、現在の行における移動平均を戻す。移動平均を求めるときの重みとして、等しい重み(1)、線形の重み(0)、指数の重み(0と1以外)を指定できる。BY変数は事前にソートされている必要はない。

**JMP追加されたバージョン:** バージョン14より前

#### 例 1

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row() = 40;
Col Moving Average( :height, 1, 5, 0, :sex );

```

#### 例 2

```jsl

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

**構文:** y = Col N Missing( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt; )

**説明:** 指定された列の行全体における欠測値の数を求める。計算結果が内部的に保持されるので、複数の統計量を求めるのに効率が良い。オプションの引数byVarbyVarによってByグループを指定できる(これは、列の計算式またはFor Each Row()関数で使用されなければならない)。

**JMP追加されたバージョン:** バージョン14より前

#### 例 1

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Col N Missing( :height );

```

#### 例 2

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col N Missing( :height, :age ) ) );

```

#### 例 3

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Number of Missing Values for Each Age and Sex Group",
	Formula( Col N Missing( :height, :age, :sex ) )
);

```

#### 例 4

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:height[10] = .;
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col N Missing for each Sex", Formula( Col N Missing( :height, :sex ) ) );
dt << New Column( "Col N Missing for each Sex grouped by Excluded",
	Formula( Col N Missing( :height, :sex, Excluded( Row State() ) ) )
);

```

### Col N Unique

**構文:** y = Col N Unique( xCol, &lt;byVar, ...&gt;, &lt; &lt;&lt;score missing(bool)&gt; )

**説明:** 列にある一意な値の個数を戻す。欠測値もカウントするよう指定した場合は、すべての欠測値コードを1つの値として数える。

**JMP追加されたバージョン:** 19

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
New Column( "N unique age by sex", Formula( Col N Unique( :age, :sex ) ) );
New Column( "N unique height by age", Formula( Col N Unique( :height, :age ) ) );

```

### Col Number

**構文:** y = Col Number( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt;, &lt; &lt;&lt; Freq( freqCol ) &gt; )

**説明:** 指定された列の行全体における欠測値でない値の数を求める。計算結果が内部的に保持されるので、複数の統計量を求めるのに効率が良い。オプションの引数byVarbyVarによってByグループを指定できる(これは、列の計算式またはFor Each Row()関数で使用されなければならない)。

**JMP追加されたバージョン:** バージョン14より前

#### 例 1

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Number( :height );

```

#### 例 2

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Number( :height, :age ) ) );

```

#### 例 3

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Number of Nonmissing Values for Each Age and Sex Group",
	Formula( Col Number( :height, :age, :sex ) )
);

```

#### 例 4

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:height[10] = .;
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Number for each Sex", Formula( Col Number( :height, :sex ) ) );
dt << New Column( "Col Number for each Sex grouped by Excluded",
	Formula( Col Number( :height, :sex, Excluded( Row State() ) ) )
);

```

### Col Quantile

**構文:** y = Col Quantile( xCol, p, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt;, &lt; &lt;&lt; Freq( freqCol ) &gt; )

**説明:** 指定された列の行全体における、指定された累積確率における分位点を求める。データの順序が内部的に保持されるので、複数の統計量を求めるのに効率が良い。

**JMP追加されたバージョン:** バージョン14より前

#### 例 1

```jsl

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

#### 例 2

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row() = 1;
Show( Col Quantile( :height, 0.5 ) );
Row() = 1;
Show( Col Quantile( :height, 0.5, :age ) );

```

#### 例 3

```jsl

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

**構文:** y = Col Rank( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt;, &lt; &lt;&lt;tie("average"|"row"|"minimum"|"maximum"|"arbitrary")&gt; )

**説明:** 最小値を1とした列の順位を戻す。<<Tie引数が指定されていない場合、同順位のものには行の順番に順位がつけられる。この引数を［average］とすると同順位の平均、［minimum］とすると最も小さな順位が割り当てられる。［row］または［arbitrary］の場合は、行ごとに異なる値が割り当てられる。

**JMP追加されたバージョン:** バージョン14より前

#### 例 1

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
New Column( "Rank Height", Formula( Col Rank( :height, <<tie( "average" ) ) ) );
New Column( "Rank Height by age", Formula( Col Rank( :height, :age ) ) );

```

#### 例 2

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Rank for each Sex", Formula( Col Rank( :height, :sex ) ) );
dt << New Column( "Col Rank for each Sex grouped by Excluded",
	Formula( Col Rank( :height, :sex, Excluded( Row State() ) ) )
);

```

### Col Score

**構文:** y = Col Score( xCol, &lt;byVar, ...&gt;, &lt; &lt;&lt;score missing(bool)&gt; )

**説明:** 一意な値の整数スコアを、順序に関連する列プロパティに応じた順序で戻す。

**JMP追加されたバージョン:** 19

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
New Column( "Score Height", Formula( Col Score( :height ) ) );
New Column( "Score Height by age", Formula( Col Score( :height, :age ) ) );

```

### Col Sequence

**構文:** y = Col Sequence( &lt;byVar, ...&gt;, &lt; &lt;&lt;skip missing(expr)&gt;, &lt; &lt;&lt;sequence(start=1, end=unbounded, incr=1, repeat=1)&gt;)

**説明:** byVarグループ内でのこの行の位置を戻す。skip missingパラメータとsequenceパラメータで調整される。

**JMP追加されたバージョン:** 19

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
New Column( "Row within sex", Formula( Col Sequence( :sex ) ) );
New Column( "Alternate within sex", Formula( Col Sequence( :sex, <<Sequence( 1, 2 ) ) ) );
New Column( "Row within sex, 60+",
	Formula( Col Sequence( :sex, <<skip missing( Sqrt( :height - 60 ) ) ) )
);

```

### Col Simple Exponential Smoothing

**構文:** y = Col Simple Exponential Smoothing( xCol, alpha, &lt;byVar, ...&gt; )

**説明:** 現在の行から1重指数平滑化法(平滑化の重みはalpha)で求めた予測値を戻す。BY変数は事前にソートされている必要はない。計算式は、予測値[t]=alpha × 観測値[t-1] + (1-alpha) × 予測値[t-1]である。ただし、最初の予測値は、予測値[1] = 観測値[1]と置く。

**JMP追加されたバージョン:** 15

```jsl

Open( "$SAMPLE_DATA/Time Series/Seriesa.jmp" );
Row() = 40;
Col Simple Exponential Smoothing( :Column1, .7 );

```

### Col Standardize

**構文:** y = Col Standardize( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt; )

**説明:** 値から列平均を引き、列の標準偏差で割った値を戻す。Byグループの列が指定されている場合、値は、Byグループごとの平均と標準偏差で標準化される。

**JMP追加されたバージョン:** バージョン14より前

#### 例 1

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row() = 1;
Col Standardize( :height );

```

#### 例 2

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Standardize( :height, :age ) ) );

```

#### 例 3

```jsl

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

**構文:** y = Col Std Dev( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt;, &lt; &lt;&lt; Freq( freqCol ) &gt; )

**説明:** 指定された列の行全体における標準偏差を求める。計算結果が内部的に保持されるので、複数の統計量を求めるのに効率が良い。オプションの引数byVarで、計算に使うByグループを指定する。引数byVarは、列計算式の中、またはFor Each Row()関数の中で使用する。

**JMP追加されたバージョン:** バージョン14より前

#### 例 1

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Std Dev( :height );

```

#### 例 2

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Std Dev( :height, :age ) ) );

```

#### 例 3

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Std Dev( :height, :age, <<Freq( :weight ) ) ) );

```

#### 例 4

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Standard Deviation for Each Age and Sex Group",
	Formula( Col Std Dev( :height, :age, :sex ) )
);

```

#### 例 5

```jsl

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

**構文:** y = Col Sum( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt;, &lt; &lt;&lt; Freq( freqCol ) &gt; )

**説明:** 指定された列の行全体における合計を求める。計算結果が内部的に保持されるので、複数の統計量を求めるのに効率が良い。オプションの引数byVarで、Byグループを指定する。引数byVarは、列計算式の中、またはFor Each Row()関数の中で使用する。

**JMP追加されたバージョン:** バージョン14より前

#### 例 1

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Sum( :height );

```

#### 例 2

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Sum( :height, <<Freq( :weight ) );

```

#### 例 3

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Sum( :height, :age ) ) );

```

#### 例 4

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Sum for Each Age and Sex Group",
	Formula( Col Sum( :height, :age, :sex ) )
);

```

#### 例 5

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Sum for each Sex", Formula( Col Sum( :height, :sex ) ) );
dt << New Column( "Col Sum for each Sex grouped by Excluded",
	Formula( Col Sum( :height, :sex, Excluded( Row State() ) ) )
);

```

### Cumulative Sum

**構文:** y = Cumulative Sum( x )

**説明:** 引数で指定された行列の累積和を、行列で戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Cumulative Sum( [1 1 1 1 . 10 20] );

```

### Fit Censored

**構文:** result = FitCensored( Distribution(name), YLow(vector) | Y(vector), &lt;YHigh(vector)&gt;, &lt;Weight(vector)&gt;, &lt;X(matrix)&gt;, &lt;Z(matrix)&gt;, &lt;HoldParm(vector)&gt;, &lt;Use random sample to compute initial values(percent)&gt;, &lt;Use first N observations to compute initial values(nobs)&gt; )

**説明:** 打ち切りのあるデータに対して確率分布をあてはめる。必須の引数は、Distributionと、YLowまたはYのいずれか。パラメータ推定値、共分散行列、対数尤度AICc、BIC、および収束メッセージのリストが戻される。X引数には位置に対する計画行列、Z引数には尺度に対する計画行列を指定する。データベクトルが大きいときは、2つのオプションの引数によって、初期値の計算に使う標本を指定できる。その場合、percentでオブザベーションの割合を指定するか、nobsでオブザベーションの(最初から数えた)個数を指定する(ただし、その標本サイズは100を超えていなければならない)。

**JMP追加されたバージョン:** バージョン14より前

```jsl

result = Fit Censored(
	Distribution( "Weibull" ),
	Y( [142, 156, 163, 198, 204, 205, 232, 239, 240, 261, 280, 296, 323, 344] )
);
Show( result );

```

### Fit Circle

**構文:** {xCenter, yCenter, radius, sse} = Fit Circle( Xvec, Yvec )

**説明:** 2つの座標ベクトルで定義される3つ以上の点を最適に通る円をあてはめる。結果は、円の中心点のXおよびY座標、半径の長さ、誤差平方和を含むリスト。

**JMP追加されたバージョン:** 14

```jsl

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

**構文:** {c1, c2, c3, c4, c5} = Hier Clust( x )

**説明:** データ行列xについて、Ward法により(データを標準化せずに)階層型クラスター分析を行った履歴を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

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

**構文:** y = IRT Ability( Q1, ..., Qn, parmMatrix )

**説明:** 項目反応理論のモデルで、n個の2値の項目とparmMatrixで指定された既知のパラメータを使用して、潜在変数のスコアを算出する。パラメータ行列はモデル内のパラメータと同じ数の行と、分析で使用する項目と同じ数の列を持っていなければならない。

**JMP追加されたバージョン:** バージョン14より前

#### 例 1

```jsl

dt = Open( "$SAMPLE_DATA/MathScienceTest.jmp" );
obj = dt << Item Analysis( Y( :Q1, :Q2, :Q3, :Q4, :Q5 ), Model( "Logistic 2PL" ) );
obj << Save Ability Formula;
Column( dt, N Cols( dt ) ) << Get Formula;

```

#### 例 2

```jsl

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

**構文:** {Estimates, Bins, Counts, ActualBandwidth, Error} = KDE( Vector, &lt;&lt;weights, &lt;&lt;bandwidth( 0 ), &lt;&lt;bandwidth scale( 1 ), &lt;&lt;bandwidth selection( 0 ), &lt;&lt;kernel )

**説明:** バンド幅を自動選択して、カーネル密度推定量を戻す。オプションの引数weightsは、引数Vectorと同じ長さのベクトルでなければならない。オプションの引数bandwidthは、正の数または0でなければならない。0を指定した場合、バンド幅は引数bandwidth selectionの値によって自動選択される。オプションの引数bandwidth scaleは、正の数でなければならない。オプションの引数bandwidth selectionは、0(Sheather and Jones)、1(正規分布参照)、2(Silvermanの経験則)、3(過平滑化)のいずれかの値を取る。オプションの引数kernelは、0(Gauss)、1(Epanechnikov)、2(双加重)、3(三角)、4(矩形)のいずれかの値を取る。

**JMP追加されたバージョン:** バージョン14より前

```jsl

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

**構文:** y = LenthPSE( x )

**説明:** ベクトルxの値からLenthの擬似標準誤差を求める。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Eval List( {LenthPSE( [1, 2, 3, 4, 5] ), Std Dev( [1, 2, 3, 4, 5] )} );

```

### Max

**構文:** y = Max( x1, ... ); y = Maximum( x1, ... )

**説明:** 引数の中での最大値、または、1つの行列またはリスト内の最大値を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Eval List( {Max( Pi(), e() ), Max( [33 44 22] )} );

```

### Maximum

**構文:** y = Max( x1, ... ); y = Maximum( x1, ... )

**説明:** 引数の中での最大値、または、1つの行列またはリスト内の最大値を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Eval List( {Max( Pi(), e() ), Max( [33 44 22] )} );

```

### Mean

**構文:** y = Mean( x1, ... )

**説明:** 引数の算術平均を戻す。または、1つの行列または1つのリスト内の値の算術平均を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Eval List( {Mean( Pi(), e() ), Mean( [33 44 22 20 30] )} );

```

### Median

**構文:** y = Median( x1, ... )

**説明:** 指定された引数における中央値を戻す。引数には、スカラー、行列、リストを指定でき、それらを混ぜても指定できる。

**JMP追加されたバージョン:** 15

```jsl

Median( [1.2, 1.5, 10, 25, 31, 40, 50, 99, 1000, 5000, 25000, 100000] );

```

### Min

**構文:** y = Min( x1, ... ); y = Minimum( x1, ... )

**説明:** 引数の中での最小値、または、1つの行列またはリスト内の最小値を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Eval List( {Min( Pi(), e() ), Min( [33 44 22] )} );

```

### Minimum

**構文:** y = Min( x1, ... ); y = Minimum( x1, ... )

**説明:** 引数の中での最小値、または、1つの行列またはリスト内の最小値を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Eval List( {Min( Pi(), e() ), Min( [33 44 22] )} );

```

### Moving Average

**構文:** y = Moving Average( x, weighting, &lt;before=-1&gt;, &lt;after=0&gt;, &lt;partial window is missing=0&gt; )

**説明:** 入力行列の移動平均を行列で戻す。beforeとafter移動平均の範囲(ウィンドウ)を決める。ここで、beforeが-1の場合は過去のすべての項が使われる。weightingが1の場合はすべての項に等しい重みが、weightingが0の場合は線形に増加する重みが与えられる。それ以外の場合、weightingには指数的な重みが与えられる。partial window is missingは、ウィンドウ内でデータが欠けていても移動平均を計算するかどうかを指定する。最後のほうのデータや欠測値がある場合に、このオプションが関係してくる。そのような場合に対する移動平均は、partial window is missingが0でない場合、欠測値となる。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Eval List(
	{Moving Average( [1 2 1 2 3 4 9 9 9 9 9], 1, 3 ),
	Moving Average( [1 2 1 2 3 4 9 9 9 9 9], 0, 2, 2 ),
	Moving Average( [1 2 1 2 . 4 9 9 9 9 9], 1, 1, 1, 1 ),
	Moving Average( [1 2 1 2 3 4 9 9 9 9 9], 0.5 )}
);

```

### N Missing

**構文:** y = N Missing( x1, x2, ... )

**説明:** 引数のうちの欠測値の数を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

N Missing( 1, 2, ., 3, [11 22 . .], 4 );

```

### Normal Tolerance Factor

**構文:** q = Normal Tolerance Factor( 1-alpha, p, n, &lt;One Sided&gt; )

**説明:** 正規分布に従う標本サイズnの標本に対して、割合がpで信頼係数が (1-α) である許容区間を求める時に用いる係数を計算する。オプションによって、片側許容区間の係数も計算できる。

**JMP追加されたバージョン:** 19

```jsl

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

**構文:** y = Number( x1, ... )

**説明:** 引数のうちの非欠測値の個数を戻す。または、1つの行列または1つのリスト内の非欠測値の個数を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Eval List( {Number( 12, ., 11, 0, -42 ), Number( [33 . -42 . 0 . -30] )} );

```

### Product

**構文:** y = Product( assignExpr, limit, bodyExpr )

**説明:** 引数bodyExprに指定された数列の総積を戻す。変数の値は最初、引数assignExprに等しく、引数limit以下の範囲で毎回増分する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

2 * Product( i = 1, 10000, 4 * i * i / (2 * i - 1) / (2 * i + 1) );

```

### Quantile

**構文:** y = Quantile( p, x1, ... )

**説明:** 引数xの分位点pを戻す。分位点引数にはスカラーまたは行列を指定できる。xにも、1つの行列や1つのリストを指定できる。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Eval List(
	{Quantile( 0.75, 0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000 ),
	Quantile( 0.5, [1.2, 1.5, 10, 25, 31, 40, 50, 99, 1000, 5000, 25000, 100000] )}
);

```

### Range

**構文:** y = Range( x1, ... )

**説明:** 指定された引数における最小値と最大値を戻す。引数には、スカラー、行列、リストを指定でき、それらを混ぜても指定できる。

**JMP追加されたバージョン:** 15

```jsl

Eval List( {Range( Pi(), e() ), Range( [33 44 22] )} );

```

### SSQ

**構文:** y = SSQ( x1, ... )

**説明:** 全要素の平方和を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Eval List( {SSQ( Pi(), e() ), SSQ( [33 44 22 20 30] )} );

```

### Std Dev

**構文:** y = Std Dev( x1, ... )

**説明:** 引数の標準偏差を戻す。または、1つの行列または1つのリスト内の値の標準偏差を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Eval List( {Std Dev( Pi(), e() ), Std Dev( [33 44 22 20 30] )} );

```

### Sum

**構文:** y = Sum( x1, ... )

**説明:** 引数の合計を戻す。または、1つの行列または1つのリスト内の値の合計を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Eval List( {Sum( Pi(), e() ), Sum( [33 44 22 20 30] )} );

```

### Summarize

**構文:** Summarize( &lt;dt&gt;, nameBy=By( colBy ), name1=statName1( col1 ), ... )

**説明:** By変数の値ごとに、さまざまな要約統計量を計算する。統計量の名前はCount、Sum、Mean、Max/Maximum、Min/Minimum、StdDev、Corr、Quantile、First。結果は数値列に対してのみ計算される。結果は指定された変数に行列として保存される。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Summarize( exg = By( :sex ), exm = Mean( :height ) );
Eval List( {exg, Round( exm, 1 )} );

```

### Summarize YByX

**構文:** Summarize YByX( X(x columns),Y(y columns), Group(grouping columns), Freq(freq column), Weight(Weight column))

**説明:** すべての組み合わせで二変量の関係の統計量を計算する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Summarize YByX( X( :age, :height ), Y( :sex, :weight ) );

```

### Summation

**構文:** y = Summation( assignExpr, limit, bodyExpr )

**説明:** 引数bodyExprに指定された数列の総和を戻す。変数の値は最初、引数assignExprに等しく、引数limit以下の範囲で毎回増分する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Summation( i = 0, 10, 1 / Factorial( i ) );

```

