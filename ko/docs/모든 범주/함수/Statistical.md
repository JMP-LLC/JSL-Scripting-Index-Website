# Statistical



### ARIMA Forecast

**구문:** x = ARIMA Forecast( dtcol, length, model, estimates, from, to )

**설명:** from 및 to 인수로 결정된 범위에 있는 dtcol 열에 대한 예측값의 벡터를 반환합니다. length 인수는 함수에서 사용할 열 부분을 지정합니다. model 인수는 모형을 적합시키기 위해 시계열 플랫폼에 전송된 메시지와 매칭됩니다. estimates 인수는 단일 모형의 모형 가져오기 메시지 결과의 하위 항목과 매칭됩니다. 일반적으로 from 값은 1에서 to 사이(경계값 포함)의 값입니다. 하지만 from<=0 및 from<=to일 경우에는 예측 결과의 일부가 필터링됩니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );ARIMA Forecast(	:Steel Shipments,	96,	ARIMA( 1, 0, 1 ),	{AR Coefficients( {0.900397691783565} ), MA Coefficients( {0.483316746530245} ),	Intercept( 6466.03264802329 )},	1,	2);

```

### Arc Finder

**구문:** Arc Finder( Group( lot, wafer ), X( col ), Y( col ), &lt;optional arguments&gt; )

**설명:** 점 데이터에서 호를 찾고, 호를 나타내는 새 열을 생성합니다.

**JMP추가된 버전:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Wafer Stacked.jmp" );Arc Finder(	Group( :Lot, :Wafer ),	X( :X_Die ),	Y( :Y_Die ),	Min Distance( 12 ), // minimum distance among 3 points to seed an arc	Min Radius( 15 ), // minimum radius of the acceptable arc	Max Radius( 2000 ), // maximum radius of acceptable arc	Max Radius Error( 2 ), // how close a point needs to be added	Min Arc Points( 5 ), // how many points to define an arc	Number of Searches( 500 ), // how many random probes of data	Max Number Arcs( 3 ) // number of arcs searched for);dt << Color or Mark by Column( :Arc Number );dt << Graph Builder(	Size( 1539, 921 ),	Variables( X( :X_Die ), Y( :Y_Die ), Wrap( :Lot_Wafer Label ), Color( :Arc Number ) ),	Elements( Points( X, Y, Legend( 6 ) ) ));

```

### Best Partition

**구문:** {c1, c2, g2} = Best Partition( xIndices, yIndices, &lt;&lt;Ordered, &lt;&lt;ContinuousY, &lt;&lt;ContinuousX )

**설명:** 최적 그룹화를 결정합니다. 아직 실험적인 함수입니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

/*Example for Continuous X and Continuous Y*/Best Partition(	[1.2, 2.2, 3.5, 4.4, 5.6, 7.8],	[11.2, 11.5, 11.8, 100.5, 100.7, 100.8],	<<ContinuousX,	<<ContinuousY);

```

### Col At

**구문:** y = Col At( col, index, &lt;byVar, ...&gt;, &lt; &lt;&lt;relative(bool)&gt;, &lt; &lt;&lt;skip missing(expr)&gt; )

**설명:** byVar 그룹 내의 행 위치 index에서 col 값을 반환합니다. skip missing 표현식 결과가 결측값인 행은 인덱싱에 포함되지 않습니다.

**JMP추가된 버전:** 19

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );New Column( "Lag Height by Sex", Formula( Col At( :height, -1, :sex, <<relative( 1 ) ) ) );New Column( "Relative to First Height", Formula( :height / Col At( :height, 1, :sex ) ) );New Column( "Relative to Last Height", Formula( :height / Col At( :height, -1, :sex ) ) );

```

### Col Cumulative Sum

**구문:** y = Col Cumulative Sum( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt;, &lt; &lt;&lt; Freq( freqCol ) &gt; )

**설명:** 현재 행에 대한 누적 합을 반환합니다. 기준 변수를 사전 정렬할 필요가 없습니다.

**JMP추가된 버전:** 버전 14 이전

**예제 1**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );Row() = 40;Col Cumulative Sum( :height, :sex );

```

**예제 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;dt << New Column( "Col Cumulative Sum for each Sex", Formula( Col Cumulative Sum( :height, :sex ) ) );dt << New Column( "Col Cumulative Sum for each Sex grouped by Excluded",	Formula( Col Cumulative Sum( :height, :sex, Excluded( Row State() ) ) ));

```

### Col Interpolate

**구문:** y = Col Interpolate( v, xCol, yCol, &lt;byVar, ...&gt;, &lt; &lt;&lt;method(linear|nearest|previous|next)&gt;, &lt; &lt;&lt;extrapolate(bool)&gt; )

**설명:** xCol에서 v의 위치에 해당하는 yCol 내의 보간된 값을 반환합니다. xCol 범위를 벗어난 값은 extrapolate 옵션이 설정되지 않은 경우 결측이고, 설정된 경우 가장 가까운 yCol 값이 반환됩니다.

**JMP추가된 버전:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/GNP.jmp" );dt << New Column( "date30", Formula( :date + 30 ) );dt << New Column( "gnp30",	Formula( Col Interpolate( :date30, :date, :"gross national product ($billions)"n ) ));

```

### Col Max

**구문:** y = Col Maximum( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt; )

**설명:** 열의 행 전체에 대한 최대값을 반환합니다. 반복 실행의 효율을 높이기 위해 결과가 내부적으로 캐시됩니다. 선택적 byVar 인수는 그룹별 계산을 위해 지정됩니다. byVar 인수는 열 계산식 또는 For Each Row() 함수에서 사용되어야 합니다.

**JMP추가된 버전:** 버전 14 이전

**예제 1**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );Col Maximum( :height );

```

**예제 2**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );For Each Row( Show( Col Maximum( :height, :age ) ) );

```

**예제 3**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "Maximum Value for Each Age and Sex Group", Formula( Col Maximum( :height, :age, :sex ) ) );

```

**예제 4**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;dt << New Column( "Col Max for each Sex", Formula( Col Maximum( :height, :sex ) ) );dt << New Column( "Col Max for each Sex grouped by Excluded",	Formula( Col Maximum( :height, :sex, Excluded( Row State() ) ) ));

```

### Col Maximum

**구문:** y = Col Maximum( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt; )

**설명:** 열의 행 전체에 대한 최대값을 반환합니다. 반복 실행의 효율을 높이기 위해 결과가 내부적으로 캐시됩니다. 선택적 byVar 인수는 그룹별 계산을 위해 지정됩니다. byVar 인수는 열 계산식 또는 For Each Row() 함수에서 사용되어야 합니다.

**JMP추가된 버전:** 버전 14 이전

**예제 1**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );Col Maximum( :height );

```

**예제 2**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );For Each Row( Show( Col Maximum( :height, :age ) ) );

```

**예제 3**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "Maximum Value for Each Age and Sex Group", Formula( Col Maximum( :height, :age, :sex ) ) );

```

**예제 4**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;dt << New Column( "Col Max for each Sex", Formula( Col Maximum( :height, :sex ) ) );dt << New Column( "Col Max for each Sex grouped by Excluded",	Formula( Col Maximum( :height, :sex, Excluded( Row State() ) ) ));

```

### Col Mean

**구문:** y = Col Mean( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt;, &lt; &lt;&lt; Freq( freqCol ) &gt; )

**설명:** 열의 행 전체에 대한 표본 평균을 반환합니다. 반복 실행의 효율을 높이기 위해 결과가 내부적으로 캐시됩니다. 선택적 byVar 인수는 그룹별 계산을 위해 지정됩니다. byVar 인수는 열 계산식 또는 For Each Row() 함수에서 사용되어야 합니다.

**JMP추가된 버전:** 버전 14 이전

**예제 1**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );Col Mean( :height );

```

**예제 2**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );Col Mean( :height, <<Freq( :weight ) );

```

**예제 3**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );For Each Row( Show( Col Mean( :height, :age ) ) );

```

**예제 4**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "Mean for Each Age and Sex Group", Formula( Col Mean( :height, :age, :sex ) ) );

```

**예제 5**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;dt << New Column( "Col Mean for each Sex", Formula( Col Mean( :height, :sex ) ) );dt << New Column( "Col Mean for each Sex grouped by Excluded",	Formula( Col Mean( :height, :sex, Excluded( Row State() ) ) ));

```

### Col Median

**구문:** y = Col Median( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt;, &lt; &lt;&lt; Freq( freqCol ) &gt; )

**설명:** 열의 행 전체에 대해 지정된 중앙값을 반환합니다. 여러 번 진행되는 실행의 효율을 높이기 위해 정렬 상태가 내부적으로 캐시됩니다.

**JMP추가된 버전:** 15

**예제 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "Col Median Height", numeric, continuous, formula( Col Median( :height ) ) );dt << New Column( "Col Median Height by Age", numeric, continuous, formula( Col Median( :height, :age ) ) );

```

**예제 2**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );Row() = 1;Show( Col Median( :height ) );Row() = 1;Show( Col Median( :height, :age ) );

```

**예제 3**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;dt << New Column( "Col Median for each Sex", Formula( Col Median( :height, :sex ) ) );dt << New Column( "Col Median for each Sex grouped by Excluded",	Formula( Col Median( :height, :sex, Excluded( Row State() ) ) ));

```

### Col Min

**구문:** y = Col Minimum( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt; )

**설명:** 열의 행 전체에 대한 최소값을 반환합니다. 반복 실행의 효율을 높이기 위해 결과가 내부적으로 캐시됩니다. 선택적 byVar 인수는 그룹별 계산을 위해 지정됩니다. byVar 인수는 열 계산식 또는 For Each Row() 함수에서 사용되어야 합니다.

**JMP추가된 버전:** 버전 14 이전

**예제 1**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );Col Minimum( :height );

```

**예제 2**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );For Each Row( Show( Col Minimum( :height, :age ) ) );

```

**예제 3**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "Minimum Value for Each Age and Sex Group", Formula( Col Minimum( :height, :age, :sex ) ) );

```

**예제 4**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;dt << New Column( "Col Min for each Sex", Formula( Col Minimum( :height, :sex ) ) );dt << New Column( "Col Min for each Sex grouped by Excluded",	Formula( Col Minimum( :height, :sex, Excluded( Row State() ) ) ));

```

### Col Minimum

**구문:** y = Col Minimum( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt; )

**설명:** 열의 행 전체에 대한 최소값을 반환합니다. 반복 실행의 효율을 높이기 위해 결과가 내부적으로 캐시됩니다. 선택적 byVar 인수는 그룹별 계산을 위해 지정됩니다. byVar 인수는 열 계산식 또는 For Each Row() 함수에서 사용되어야 합니다.

**JMP추가된 버전:** 버전 14 이전

**예제 1**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );Col Minimum( :height );

```

**예제 2**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );For Each Row( Show( Col Minimum( :height, :age ) ) );

```

**예제 3**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "Minimum Value for Each Age and Sex Group", Formula( Col Minimum( :height, :age, :sex ) ) );

```

**예제 4**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;dt << New Column( "Col Min for each Sex", Formula( Col Minimum( :height, :sex ) ) );dt << New Column( "Col Min for each Sex grouped by Excluded",	Formula( Col Minimum( :height, :sex, Excluded( Row State() ) ) ));

```

### Col Mode

**구문:** y = Col Mode( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt;, &lt; &lt;&lt; Freq( freqCol ) &gt; )

**설명:** 여러 최빈값의 경우 최소값을 선택하여 열의 행 전체에 대한 표본 최빈값을 반환합니다. 반복 실행의 효율을 높이기 위해 결과가 내부적으로 캐시됩니다. 선택적 byVar 인수는 그룹별 계산을 위해 지정됩니다. byVar 인수는 열 계산식 또는 For Each Row() 함수에서 사용되어야 합니다.

**JMP추가된 버전:** 17

**예제 1**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );Col Mode( :height );

```

**예제 2**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );For Each Row( Show( Col Mode( :height, :age ) ) );

```

**예제 3**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "Mode for Each Age and Sex Group", Formula( Col Mode( :height, :age, :sex ) ) );

```

**예제 4**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;dt << New Column( "Col Mode for each Sex", Formula( Col Mode( :height, :sex ) ) );dt << New Column( "Col Mode for each Sex grouped by Excluded",	Formula( Col Mode( :height, :sex, Excluded( Row State() ) ) ));

```

### Col Moving Average

**구문:** y = Col Moving Average( xCol, &lt;weighting=0.25&gt;, &lt;before=-1&gt;, &lt;after=0&gt;, &lt;partial window is missing=1&gt;, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt; )

**설명:** 현재 행을 기반으로 제공된 간격에 대한 이동 평균을 반환합니다. 가중치 승수의 경우 1은 동일한 가중치를 의미하고 0은 선형 가중치를 의미하며 기타 값은 지수 가중치 승수로 작동합니다. 기준 변수를 사전 정렬할 필요가 없습니다.

**JMP추가된 버전:** 버전 14 이전

**예제 1**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );Row() = 40;Col Moving Average( :height, 1, 5, 0, :sex );

```

**예제 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;dt << New Column( "Col Moving Average for each Sex", Formula( Col Moving Average( :height, :sex ) ) );dt << New Column( "Col Moving Average for each Sex grouped by Excluded",	Formula( Col Moving Average( :height, :sex, Excluded( Row State() ) ) ));

```

### Col N Missing

**구문:** y = Col N Missing( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt; )

**설명:** 열의 행 전체에 대한 결측값 수를 반환합니다. 반복 실행의 효율을 높이기 위해 결과가 내부적으로 캐시됩니다. 선택적 byVar 인수는 그룹별 계산을 위해 지정됩니다. byVar 인수는 열 계산식 또는 For Each Row() 함수에서 사용되어야 합니다.

**JMP추가된 버전:** 버전 14 이전

**예제 1**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );Col N Missing( :height );

```

**예제 2**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );For Each Row( Show( Col N Missing( :height, :age ) ) );

```

**예제 3**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "Number of Missing Values for Each Age and Sex Group",	Formula( Col N Missing( :height, :age, :sex ) ));

```

**예제 4**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt:height[10] = .;dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;dt << New Column( "Col N Missing for each Sex", Formula( Col N Missing( :height, :sex ) ) );dt << New Column( "Col N Missing for each Sex grouped by Excluded",	Formula( Col N Missing( :height, :sex, Excluded( Row State() ) ) ));

```

### Col N Unique

**구문:** y = Col N Unique( xCol, &lt;byVar, ...&gt;, &lt; &lt;&lt;score missing(bool)&gt; )

**설명:** 열의 고유 값 수를 반환합니다. 결측값이 요청될 경우 모든 결측값 코드는 단일 값으로 간주되어 계산됩니다.

**JMP추가된 버전:** 19

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );New Column( "N unique age by sex", Formula( Col N Unique( :age, :sex ) ) );New Column( "N unique height by age", Formula( Col N Unique( :height, :age ) ) );

```

### Col Number

**구문:** y = Col Number( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt;, &lt; &lt;&lt; Freq( freqCol ) &gt; )

**설명:** 열의 행 전체에 대한 비결측값의 수를 반환합니다. 반복 실행의 효율을 높이기 위해 결과가 내부적으로 캐시됩니다. 선택적 byVar 인수는 그룹별 계산을 위해 지정됩니다. byVar 인수는 열 계산식 또는 For Each Row() 함수에서 사용되어야 합니다.

**JMP추가된 버전:** 버전 14 이전

**예제 1**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );Col Number( :height );

```

**예제 2**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );For Each Row( Show( Col Number( :height, :age ) ) );

```

**예제 3**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "Number of Nonmissing Values for Each Age and Sex Group",	Formula( Col Number( :height, :age, :sex ) ));

```

**예제 4**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt:height[10] = .;dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;dt << New Column( "Col Number for each Sex", Formula( Col Number( :height, :sex ) ) );dt << New Column( "Col Number for each Sex grouped by Excluded",	Formula( Col Number( :height, :sex, Excluded( Row State() ) ) ));

```

### Col Quantile

**구문:** y = Col Quantile( xCol, p, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt;, &lt; &lt;&lt; Freq( freqCol ) &gt; )

**설명:** 열의 행 전체에 대해 지정된 분위수를 반환합니다. 여러 번 진행되는 실행의 효율을 높이기 위해 정렬 상태가 내부적으로 캐시됩니다.

**JMP추가된 버전:** 버전 14 이전

**예제 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "Col Quantile Height", numeric, continuous, formula( Col Quantile( :height, 0.5 ) ) );dt << New Column( "Col Quantile Height by Age",	numeric,	continuous,	formula( Col Quantile( :height, 0.5, :age ) ));

```

**예제 2**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );Row() = 1;Show( Col Quantile( :height, 0.5 ) );Row() = 1;Show( Col Quantile( :height, 0.5, :age ) );

```

**예제 3**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;dt << New Column( "Col Quantile for each Sex", Formula( Col Quantile( :height, 0.5, :sex ) ) );dt << New Column( "Col Quantile for each Sex grouped by Excluded",	Formula( Col Quantile( :height, 0.5, :sex, Excluded( Row State() ) ) ));

```

### Col Rank

**구문:** y = Col Rank( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt;, &lt; &lt;&lt;tie("average"|"row"|"minimum"|"maximum"|"arbitrary")&gt; )

**설명:** <<Tie 인수로 지정한 경우를 제외하고 행 순서 동점 우선 순위 결정을 사용하여 1(가장 낮음)부터 시작하는 범위의 순위를 반환합니다. "average"는 동점 순위의 평균을 산출하고 "minimum"은 동점 순위의 가장 낮은 값을 산출합니다. "row" 및 "arbitrary"의 경우 각 행은 고유한 순위를 가집니다.

**JMP추가된 버전:** 버전 14 이전

**예제 1**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );New Column( "Rank Height", Formula( Col Rank( :height, <<tie( "average" ) ) ) );New Column( "Rank Height by age", Formula( Col Rank( :height, :age ) ) );

```

**예제 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;dt << New Column( "Col Rank for each Sex", Formula( Col Rank( :height, :sex ) ) );dt << New Column( "Col Rank for each Sex grouped by Excluded",	Formula( Col Rank( :height, :sex, Excluded( Row State() ) ) ));

```

### Col Score

**구문:** y = Col Score( xCol, &lt;byVar, ...&gt;, &lt; &lt;&lt;score missing(bool)&gt; )

**설명:** 각 고유 값의 정수 스코어를 관련된 열 특성에 따라 정렬하여 반환합니다.

**JMP추가된 버전:** 19

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );New Column( "Score Height", Formula( Col Score( :height ) ) );New Column( "Score Height by age", Formula( Col Score( :height, :age ) ) );

```

### Col Sequence

**구문:** y = Col Sequence( &lt;byVar, ...&gt;, &lt; &lt;&lt;skip missing(expr)&gt;, &lt; &lt;&lt;sequence(start=1, end=unbounded, incr=1, repeat=1)&gt;)

**설명:** 이 행의 byVar 그룹 내 위치를 skip missing 및 sequence 파라미터에 따라 조정하여 반환합니다.

**JMP추가된 버전:** 19

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );New Column( "Row within sex", Formula( Col Sequence( :sex ) ) );New Column( "Alternate within sex", Formula( Col Sequence( :sex, <<Sequence( 1, 2 ) ) ) );New Column( "Row within sex, 60+", Formula( Col Sequence( :sex, <<skip missing( Sqrt( :height - 60 ) ) ) ) );

```

### Col Simple Exponential Smoothing

**구문:** y = Col Simple Exponential Smoothing( xCol, alpha, &lt;byVar, ...&gt; )

**설명:** 현재 행에 대해 평활 가중 알파를 사용한 단순 지수 평활 예측 결과를 반환합니다. 기준 변수를 사전 정렬할 필요가 없습니다. 계산식은 예측값[t] = 알파 \* 관측값[t-1] + (1-α) \* 예측값[t-1]입니다(예측값[1] = 관측값[1]).

**JMP추가된 버전:** 15

```jsl

Open( "$SAMPLE_DATA/Time Series/Seriesa.jmp" );Row() = 40;Col Simple Exponential Smoothing( :Column1, .7 );

```

### Col Standardize

**구문:** y = Col Standardize( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt; )

**설명:** 열의 행 전체에 대해 열 표준편차로 나눈 열 평균을 뺀 값을 반환합니다. 그룹별 열이 지정되면 값이 그룹별 평균 및 표준편차에 대해 표준화됩니다.

**JMP추가된 버전:** 버전 14 이전

**예제 1**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );Row() = 1;Col Standardize( :height );

```

**예제 2**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );For Each Row( Show( Col Standardize( :height, :age ) ) );

```

**예제 3**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;dt << New Column( "Col Standardize for each Sex", Formula( Col Standardize( :height, :sex ) ) );dt << New Column( "Col Standardize for each Sex grouped by Excluded",	Formula( Col Standardize( :height, :sex, Excluded( Row State() ) ) ));

```

### Col Std Dev

**구문:** y = Col Std Dev( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt;, &lt; &lt;&lt; Freq( freqCol ) &gt; )

**설명:** 열의 행 전체에 대한 표본 표준편차를 반환합니다. 반복 실행의 효율을 높이기 위해 결과가 내부적으로 캐시됩니다. 선택적 byVar 인수는 그룹별 계산을 위해 지정됩니다. byVar 인수는 열 계산식 또는 For Each Row() 함수에서 사용되어야 합니다.

**JMP추가된 버전:** 버전 14 이전

**예제 1**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );Col Std Dev( :height );

```

**예제 2**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );For Each Row( Show( Col Std Dev( :height, :age ) ) );

```

**예제 3**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );For Each Row( Show( Col Std Dev( :height, :age, <<Freq( :weight ) ) ) );

```

**예제 4**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "Standard Deviation for Each Age and Sex Group",	Formula( Col Std Dev( :height, :age, :sex ) ));

```

**예제 5**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;dt << New Column( "Col Standard Deviation for each Sex", Formula( Col Std Dev( :height, :sex ) ) );dt << New Column( "Col Standard Deviation for each Sex grouped by Excluded",	Formula( Col Std Dev( :height, :sex, Excluded( Row State() ) ) ));

```

### Col Sum

**구문:** y = Col Sum( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt;, &lt; &lt;&lt; Freq( freqCol ) &gt; )

**설명:** 열의 행 전체에 대한 합을 반환합니다. 반복 실행의 효율을 높이기 위해 결과가 내부적으로 캐시됩니다. 선택적 byVar 인수는 그룹별 계산을 위해 지정됩니다. byVar 인수는 열 계산식 또는 For Each Row() 함수에서 사용되어야 합니다.

**JMP추가된 버전:** 버전 14 이전

**예제 1**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );Col Sum( :height );

```

**예제 2**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );Col Sum( :height, <<Freq( :weight ) );

```

**예제 3**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );For Each Row( Show( Col Sum( :height, :age ) ) );

```

**예제 4**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "Sum for Each Age and Sex Group", Formula( Col Sum( :height, :age, :sex ) ) );

```

**예제 5**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;dt << New Column( "Col Sum for each Sex", Formula( Col Sum( :height, :sex ) ) );dt << New Column( "Col Sum for each Sex grouped by Excluded",	Formula( Col Sum( :height, :sex, Excluded( Row State() ) ) ));

```

### Cumulative Sum

**구문:** y = Cumulative Sum( x )

**설명:** 입력 행렬에 대한 부분 합의 행렬을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Cumulative Sum( [1 1 1 1 . 10 20] );

```

### Fit Censored

**구문:** result = FitCensored( Distribution(name), YLow(vector) | Y(vector), &lt;YHigh(vector)&gt;, &lt;Weight(vector)&gt;, &lt;X(matrix)&gt;, &lt;Z(matrix)&gt;, &lt;HoldParm(vector)&gt;, &lt;Use random sample to compute initial values(percent)&gt;, &lt;Use first N observations to compute initial values(nobs)&gt; )

**설명:** 중도절단된 데이터를 사용하여 분포를 적합시킵니다. 필수 인수는 Distribution과 YLow 또는 Y입니다. 이 함수는 모수 추정값, 공분산 행렬, 로그 가능도, AICc, BIC 및 수렴 메시지가 포함된 목록을 반환합니다. X 및 Z 인수는 각각 위치 및 척도에 대한 회귀 설계 행렬을 지정합니다. 데이터 벡터의 크기가 큰 경우에는 두 개의 선택적 인수를 사용하여 초기값을 계산할 표본을 지정할 수 있습니다. 관측값의 percent 또는 처음 nobs개의 관측값을 지정할 수 있지만 총 표본 크기는 100보다 커야 합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

result = Fit Censored(	Distribution( "Weibull" ),	Y( [142, 156, 163, 198, 204, 205, 232, 239, 240, 261, 280, 296, 323, 344] ));Show( result );

```

### Fit Circle

**구문:** {xCenter, yCenter, radius, sse} = Fit Circle( Xvec, Yvec )

**설명:** 좌표의 두 벡터로 정의된 세 개 이상의 점을 가장 잘 통과하는 원을 적합시킵니다. 결과는 원 중앙점의 X 및 Y 좌표, 반지름의 길이, 오차 제곱합이 포함된 목록입니다.

**JMP추가된 버전:** 14

```jsl

x = [68, 77, 85, 88, 93, 93, 95, 98];y = [1, 9, 18, 94, 35, 82, 40, 59];result = Fit Circle( x, y );New Window( "Fit Circle",	Graph Box(		X Scale( -50, 100 ),		Y Scale( -20, 130 ),		FrameSize( 300, 300 ),		Marker( x, y );		Circle( {result[1], result[2]}, result[3] );	));

```

### Hier Clust

**구문:** {c1, c2, c3, c4, c5} = Hier Clust( x )

**설명:** 표준화하지 않은 데이터에 대해 Ward 방법을 사용하여 계층적 군집화를 수행한 군집화 기록을 반환합니다. 여기서 x는 데이터 행렬입니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

exdt = Open( "$SAMPLE_DATA/Body Measurements.jmp" );ex = exdt << get as matrix();exhc = Hierarchical Cluster(	Y( Eval( exdt << Get Column Names ) ),	Method( Ward ),	Standardize( 0 ),	Dendrogram Scale( Even Spacing ),	Number of Clusters( 3 ));Report( exhc )["Dendrogram"] << Close( 1 );Report( exhc )["Clustering History"] << Close( 0 );exhistory = Hier Clust( ex );exhistory[3, 1];

```

### IRT Ability

**구문:** y = IRT Ability( Q1, ..., Qn, parmMatrix )

**설명:** 이진 항목 n 및 parmMatrix로 지정된 알려진 모수 행렬을 사용하여 항목 반응 이론 모형의 잠재 변수에 대한 스코어를 생성합니다. 모수 행렬에는 모형에 있는 모수 수만큼의 행과, 분석에 있는 항목 수만큼의 열이 포함되어야 합니다.

**JMP추가된 버전:** 버전 14 이전

**예제 1**

```jsl

dt = Open( "$SAMPLE_DATA/MathScienceTest.jmp" );obj = dt << Item Analysis( Y( :Q1, :Q2, :Q3, :Q4, :Q5 ), Model( "Logistic 2PL" ) );obj << Save Ability Formula;Column( dt, N Cols( dt ) ) << Get Formula;

```

**예제 2**

```jsl

dt = Open( "$SAMPLE_DATA/MathScienceTest.jmp" );mth = (dt << get as matrix)[0, Index( 2, 6 )];mthlst = {};i = Floor( Random Uniform( 1, N Rows( mth ) ) );mthlst[1] = mth[i, 1] |/ mth[i, 2] |/ mth[i, 3] |/ mth[i, 4] |/ mth[i, 5];mthlst[2] = IRT Ability(	mth[i, 1],	mth[i, 2],	mth[i, 3],	mth[i, 4],	mth[i, 5],	[0.28 1.93 1.9 1.67 1, -0.06 -0.55 0.5 -1.89 0.04]);mthlst;

```

### KDE

**구문:** {Estimates, Bins, Counts, ActualBandwidth, Error} = KDE( Vector, &lt;&lt;weights, &lt;&lt;bandwidth( 0 ), &lt;&lt;bandwidth scale( 1 ), &lt;&lt;bandwidth selection( 0 ), &lt;&lt;kernel )

**설명:** 자동 대역폭이 선택된 상태의 커널 밀도 추정량을 반환합니다. 선택적 weights 인수는 Vector 인수와 동일한 길이의 벡터여야 합니다. 선택적 bandwidth 인수는 음수가 아닌 실수 또는 0이어야 합니다(이 경우 bandwidth selection 인수의 값이 강제로 사용됨). 선택적 bandwidth scale 인수는 양의 실수여야 합니다. 선택적 bandwidth selection 인수는 0, 1, 2 또는 3이어야 하며 이는 각각 Sheather and Jones, 정규 참조, Silverman 경험 법칙 또는 Oversmoother에 해당합니다. 선택적 kernel 인수는 값 0, 1, 2, 3 또는 4를 허용하며 이는 각각 가우시안, Epanechnikov, Biweight, 삼각형 또는 직사각형에 해당합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

// generate sample dataset from a mixture of 3 normal distributionsndata3 = 25;Random Reset( 113 );channel = J( 1, ndata3 * 3, 0 );For( i = 1, i <= ndata3, i++,	channel[1, i] = Random Normal() - 3;	channel[1, ndata3 + i] = Random Normal() / 2;	channel[1, ndata3 + ndata3 + i] = Random Normal() + 3;);// use kernel density estimator to estimate the underlying distributionbw = .; // automatic bandwidthbscl = 1; // bandwidth multiplierbsel = 0; // Sheather and Jones bandwith selection// Create data table with estimates from all smoothing KDEs and Binsdt = New Table( "KDE Smoothing",	New Column( "Kernel", "Character" ),	New Column( "Bin" ),	New Column( "Density Estimate" ),	New Column( "Counts" ));kernels = {"Gaussian", "Epanechnikov", "Biweight", "Triangular", "Rectangular"};For( kernel = 0, kernel < N Items( kernels ), kernel++,	res = KDE(		channel,		<<bandwidth( bw ),		<<bandwidth scale( bscl ),		<<bandwidth selection( bsel ),		<<kernel( kernel )	);	nbin = N Items( res["Bins"] );	rows = (N Rows( dt ) + 1) :: (N Rows( dt ) + nbin);	dt << Add Rows( nbin );	dt[rows, "Kernel"] = kernels[kernel + 1];	dt[rows, "Bin"] = res["Bins"]`;	dt[rows, "Density Estimate"] = res["Estimates"]`;	dt[rows, "Counts"] = res["Counts"]`;);dt << Graph Builder(	Size( 1000, 376 ),	Show Control Panel( 0 ),	Legend Position( "Bottom" ),	Variables(		X( :Bin ),		Y( :Density Estimate, Side( "Right" ) ),		Y( :Counts, Position( 1 ) ),		Overlay( :Kernel )	),	Elements(		Bar( X, Y( 2 ), Overlay( 0 ), Legend( 2 ), Bar Style( "Needle" ) ),		Line( X, Y( 1 ), Legend( 3 ) )	));

```

### LenthPSE

**구문:** y = LenthPSE( x )

**설명:** 단일 벡터 x 내의 값에 대한 Lenth 유사 표준 오차를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Eval List( {LenthPSE( [1, 2, 3, 4, 5] ), Std Dev( [1, 2, 3, 4, 5] )} );

```

### Max

**구문:** y = Max( x1, ... ); y = Maximum( x1, ... )

**설명:** 인수 중에서 또는 단일 행렬이나 목록 인수 내의 값 중에서 최대값을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Eval List( {Max( Pi(), e() ), Max( [33 44 22] )} );

```

### Maximum

**구문:** y = Max( x1, ... ); y = Maximum( x1, ... )

**설명:** 인수 중에서 또는 단일 행렬이나 목록 인수 내의 값 중에서 최대값을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Eval List( {Max( Pi(), e() ), Max( [33 44 22] )} );

```

### Mean

**구문:** y = Mean( x1, ... )

**설명:** 인수의 산술평균 또는 단일 행렬이나 목록 인수 내에 있는 값의 산술평균을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Eval List( {Mean( Pi(), e() ), Mean( [33 44 22 20 30] )} );

```

### Median

**구문:** y = Median( x1, ... )

**설명:** 스칼라, 행렬 또는 목록 인수로 구성된 인수 조합의 중앙값을 반환합니다.

**JMP추가된 버전:** 15

```jsl

Median( [1.2, 1.5, 10, 25, 31, 40, 50, 99, 1000, 5000, 25000, 100000] );

```

### Min

**구문:** y = Min( x1, ... ); y = Minimum( x1, ... )

**설명:** 인수 중에서 또는 단일 행렬이나 목록 인수 내의 값 중에서 최소값을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Eval List( {Min( Pi(), e() ), Min( [33 44 22] )} );

```

### Minimum

**구문:** y = Min( x1, ... ); y = Minimum( x1, ... )

**설명:** 인수 중에서 또는 단일 행렬이나 목록 인수 내의 값 중에서 최소값을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Eval List( {Min( Pi(), e() ), Min( [33 44 22] )} );

```

### Moving Average

**구문:** y = Moving Average( x, weighting, &lt;before=-1&gt;, &lt;after=0&gt;, &lt;partial window is missing=0&gt; )

**설명:** 입력 행렬에 대한 이동 평균 행렬을 반환합니다. before와 after는 평균화할 항목의 범위("창")를 결정하며, before를 -1로 설정하여 모든 이전 항목을 포함할 수 있습니다. weighting이 1이면 모든 항목의 가중치가 동일하고 weighting이 0이면 항목이 선형 증분 가중치를 갖습니다. 그렇지 않은 경우 weighting은 EWMA(지수 가중)의 모수입니다. partial window is missing은 일부 이웃이 존재하지 않을 때(끝 또는 결측값 근처에서 발생할 수 있음) 평균이 보고되는지 여부를 나타냅니다. partial window is missing이 0이 아니면 이러한 부분 창에 대해 결측값이 대신 보고됩니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Eval List(	{Moving Average( [1 2 1 2 3 4 9 9 9 9 9], 1, 3 ), Moving Average( [1 2 1 2 3 4 9 9 9 9 9], 0, 2, 2 ),	Moving Average( [1 2 1 2 . 4 9 9 9 9 9], 1, 1, 1, 1 ), Moving Average( [1 2 1 2 3 4 9 9 9 9 9], 0.5 )});

```

### N Missing

**구문:** y = N Missing( x1, x2, ... )

**설명:** 인수 간 결측값 수를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

N Missing( 1, 2, ., 3, [11 22 . .], 4 );

```

### Normal Tolerance Factor

**구문:** q = Normal Tolerance Factor( 1-alpha, p, n, &lt;One Sided&gt; )

**설명:** 정규 분포를 따르고 표본 크기가 n일 때 평균의 일정 비율(p)을 포함하도록 &apos;1-alpha&apos; 신뢰 구간을 구성하기 위한 공차 계수를 계산합니다. 단측 공차 구간에 대한 계수를 요청하는 옵션이 있습니다.

**JMP추가된 버전:** 19

```jsl

n = 15;New Window( "Example: Tolerance Factor()",	tdig = Graph Box(		Y Scale( 0, 5 ),		X Scale( 0.05, 0.95 ),		Yname( "Tolerance Factor" ),		Xname( "p" ),		Pen Color( "red" );		Y Function( Normal Tolerance Factor( 0.95, p, n ), p );		Text( {0.1, 4}, "n=", Round( n ) );	),	H List Box( Text Box( "n" ), Slider Box( 5, 25, n, tdig << reshow ) ));

```

### Number

**구문:** y = Number( x1, ... )

**설명:** 단일 행렬 또는 목록 인수 내에 있는 비결측 인수 또는 값의 개수를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Eval List( {Number( 12, ., 11, 0, -42 ), Number( [33 . -42 . 0 . -30] )} );

```

### Product

**구문:** y = Product( assignExpr, limit, bodyExpr )

**설명:** 변수가 limit 인수보다 크거나 같게 될 때까지 매번 assignExpr 인수에서 변수를 증분하여 bodyExpr 인수에 대한 실행의 결과를 곱하여 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

2 * Product( i = 1, 10000, 4 * i * i / (2 * i - 1) / (2 * i + 1) );

```

### Quantile

**구문:** y = Quantile( p, x1, ... )

**설명:** x 인수의 지정된 분위수 p를 반환합니다. 분위수 인수는 스칼라 또는 행렬일 수 있습니다. 또한 x 값은 단일 행렬 또는 목록 인수 내에서 값으로 지정될 수 있습니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Eval List(	{Quantile( 0.75, 0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000 ),	Quantile( 0.5, [1.2, 1.5, 10, 25, 31, 40, 50, 99, 1000, 5000, 25000, 100000] )});

```

### Range

**구문:** y = Range( x1, ... )

**설명:** 스칼라, 행렬 또는 목록 인수로 구성된 인수 조합의 최소값 및 최대값을 반환합니다.

**JMP추가된 버전:** 15

```jsl

Eval List( {Range( Pi(), e() ), Range( [33 44 22] )} );

```

### SSQ

**구문:** y = SSQ( x1, ... )

**설명:** 모든 요소의 제곱합을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Eval List( {SSQ( Pi(), e() ), SSQ( [33 44 22 20 30] )} );

```

### Std Dev

**구문:** y = Std Dev( x1, ... )

**설명:** 인수의 표준편차 또는 단일 행렬이나 목록 인수 내에 있는 값의 표준편차를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Eval List( {Std Dev( Pi(), e() ), Std Dev( [33 44 22 20 30] )} );

```

### Sum

**구문:** y = Sum( x1, ... )

**설명:** 인수의 합 또는 단일 행렬이나 목록 인수 내에 있는 값의 합을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Eval List( {Sum( Pi(), e() ), Sum( [33 44 22 20 30] )} );

```

### Summarize

**구문:** Summarize( &lt;dt&gt;, nameBy=By( colBy ), name1=statName1( col1 ), ... )

**설명:** 기준 열에 따라 다양한 요약 통계량을 계산합니다. 통계량 이름은 Count, Sum, Mean, Max 또는 Maximum, Min 또는 Minimum, StdDev, Corr, Quantile, First입니다. 숫자 열에 대해서만 이러한 통계량을 계산할 수 있습니다. 결과는 지정된 이름의 변수에 행렬로 저장됩니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );Summarize( exg = By( :sex ), exm = Mean( :height ) );Eval List( {exg, Round( exm, 1 )} );

```

### Summarize YByX

**구문:** Summarize YByX( X(x columns),Y(y columns), Group(grouping columns), Freq(freq column), Weight(Weight column))

**설명:** 모든 X로 Y 적합 조합에 대한 적합을 수행합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );Summarize YByX( X( :age, :height ), Y( :sex, :weight ) );

```

### Summation

**구문:** y = Summation( assignExpr, limit, bodyExpr )

**설명:** 변수가 limit 인수보다 크거나 같게 될 때까지 매번 assignExpr 인수에서 변수를 증분하여 bodyExpr 인수에 대한 실행의 결과를 더하여 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Summation( i = 0, 10, 1 / Factorial( i ) );

```

