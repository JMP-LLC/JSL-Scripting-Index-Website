# Data Table



## 연결된 생성자

### Association Analysis

**구문:** Association Analysis( Item( columns ), ID( columns ) )

**설명:** 독립 사건 또는 트랜잭션에 있는 항목 그룹 간의 연결을 식별합니다. 연관성 분석은 트랜잭션에서 함께 나타나는 항목을 식별하기 위해 트랜잭션 데이터(장바구니라고도 함)를 분석하는 데 흔히 사용됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Grocery Purchases.jmp" );
obj = dt << Association Analysis( Item( :Product ), ID( :Customer ID ) );

```

### Attribute Chart

**구문:** Attribute Chart( Y( columns ), X( columns ) )

**설명:** 범주형 측정값을 분석하여 응답(예: 평가자) 간의 합치 측도를 보여 줍니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );
obj = dt << Attribute Chart( Y( :A, :B, :C ), X( :Part ), Standard( :Standard ) );

```

### Bayesian Optimization

**구문:** Bayesian Optimization

**설명:** Recommends factor settings to optimize responses by augmenting the data table.

**JMP추가된 버전:** 19

### Bivariate

**구문:** Bivariate( Y( columns ), X( columns ) )

**설명:** 연속형 반응을 다른 수치형 변수와의 관계를 통해 모델링합니다. 분석 방법으로는 적합선, 다항식, 스플라인 및 다변량 밀도가 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );

```

### Boosted Tree

**구문:** Boosted Tree (Y( column ), X( columns ))

**설명:** 일련의 작은 의사 결정 나무가 누적된 큰 의사 결정 나무를 생성하여 예측 모형을 생성합니다. 각 트리는 이전 트리의 잔차에 대해 적합됩니다.

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

**구문:** Bootstrap Forest (Y( column ), X( columns ))

**설명:** 다수의 의사 결정 나무에서 얻은 예측값의 평균을 구해 예측 모형을 생성합니다. 각 의사 결정 나무는 훈련 데이터의 랜덤 붓스트랩 표본에 적합됩니다.

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

**구문:** Bubble Plot( X( column ), Y( column ), &lt;Sizes( column )&gt;, &lt;Time( column )&gt;, &lt;ID( column )&gt;, &lt;Coloring( column ) )

**설명:** 시간 변수에 대해 애니메이션을 적용할 수 있는 버블의 2차원 산점도를 생성합니다. 추가 변수를 사용하여 버블의 크기와 색상을 지정할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot( X( :"Portion 0-19"n ), Y( :"Portion60+"n ), Sizes( :Pop ), ID( :Country ) );

```

### CUSUM Control Chart

**구문:** CUSUM Control Chart( Y( column ), &lt;X( column )&gt;, &lt;By( column )&gt;, &lt;Data Units( 0|1 )&gt;, &lt;Show Excluded Region( 0|1 )&gt; )

**설명:** 부분군 평균과 목표값 간 편차의 누적합을 표시하는 차트를 생성합니다. 이 차트를 테이블 형식 CUSUM이라고도 합니다.

**JMP추가된 버전:** 14

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

**구문:** Categorical( Responses | Aligned Responses | Repeated Measures | Rater Agreement | Multiple Response | Multiple Response by ID | Multiple Delimited | Indicator Group | Response Frequencies( column ), X( column(s) ) )

**설명:** 범주형 응답 데이터를 요약 및 분석합니다. 단순 응답, 다중 응답, 반복 측정, 평가자 합치도, 정렬된 응답 또는 프리 텍스트 데이터가 대상이 될 수 있습니다. 응답에 대한 사용자 교차표를 생성하는 기능도 포함되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );

```

### Cell Plot

**구문:** Cell Plot( Y( column(s) ), &lt;X( column )&gt; )

**설명:** 데이터 테이블 값에 일대일로 대응하여 그려진 직사각형 격자 셀을 생성합니다. 격자의 셀은 셀 값에 따라 색상이 지정됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/SAT.jmp" );
obj = dt << Cell Plot(
	Y(
		:"2004 Verbal"n, :"2004 Math"n, :"2003 Verbal"n, :"2003 Math"n, :"2002 Verbal"n, :"2002 Math"n,
		:"2001 Verbal"n, :"2001 Math"n, :"1999 Verbal"n, :"1999 Math"n, :"1994 Verbal"n, :"1994 Math"n,
		:"1997 Verbal"n, :"1997 Math"n, :"1992 Verbal"n, :"1992 Math"n
	)
);

```

### Choice

**구문:** Choice( Profile DataTable( data table ), Profile ID( column ), Profile Effects( column(s) ), &lt;Response Data Table( data table )&gt;, &lt;Subject Data Table( data table )&gt;, &lt;Response Profile ID Chosen( column )&gt;, &lt;Response Subject ID( column)&gt;, &lt;Response Grouping( column(s) )&gt;, &lt;Response Profile ID Choices( column(s) )&gt;, &lt;Profile Grouping( column(s) )&gt;, &lt;Subject Subject ID( column )&gt;, &lt;Subject Effects( column(s) )&gt; )

**설명:** 고객 선호도를 연구하는 선택 실험에서 얻은 데이터를 모델링합니다. 일종의 조건부 로지스틱 회귀를 사용하여 특정 구성이 선호되는 확률을 추정합니다.

**예제 1**

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

**예제 2**

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

**구문:** Close( data table name, &lt;NoSave|Save("path")&gt; )

**설명:** 첫 번째 인수에 의해 참조되는 데이터 테이블(기본적으로 현재 데이터 테이블)을 닫습니다. 두 번째 인수는 데이터 테이블을 저장하는 데 사용됩니다. 경로에 적절한 파일 확장자를 사용하여 데이터 테이블을 비 JMP 형식으로 저장하십시오. NoSave를 지정하면 변경 사항을 저장할지 또는 삭제할지 묻는 메시지가 표시되지 않습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
Close( dt );

```

### Cluster Variables

**구문:** Cluster Variables( Y( columns ) )

**설명:** 변수(열)를 단일 성분 또는 변수로 나타낼 수 있는 그룹으로 군집화합니다. 변수 군집화는 차원 축소 기법으로 사용할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Cluster Variables( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );

```

### Contingency

**구문:** Contingency( Y( columns ), X( columns ) )

**설명:** 일련의 범주형 그룹 간에 범주형 응답을 모델링합니다. 분석 방법에는 카이제곱 검정과 모자이크 그림이 포함됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );

```

### Contour Plot

**구문:** Contour Plot( X( column, column ), Y( column ) )

**설명:** 세 변수의 그래프를 2차원 보기로 생성합니다. 세 번째 변수는 동일한 값의 등고선 곡선으로 표현됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Little Pond.jmp" );
obj = dt << Contour Plot( X( :X, :Y ), Y( :Z ) );

```

### Contour Profiler

**구문:** Contour Profiler( Y( column1, column2, ... ) )

**설명:** 전체 요인 쌍에 대해 하나 이상의 예측 반응이 어떻게 변하는지 탐색할 수 있는 대화식 등고선 그림을 생성합니다. 그림에 사용되지 않는 요인의 값은 요인 설정이 예측 반응에 미치는 영향을 추가로 탐색하기 위해 변경될 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Contour Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS )
);

```

### Control Chart Builder

**구문:** Control Chart Builder( Class( "Shewhart Variables"|"Shewhart Attribute"|"Short Run"|"Rare Event" ), Variables( variables ), &lt;Chart( Position( number ), Points( Statistic( "statistic" ), &lt;points options&gt; ), Limits( Sigma( "sigma" ), &lt;limits options&gt; )&gt; ) ) )

**설명:** 공정이 안정적이고 예측 가능한지 여부를 판단하는 데 사용되는 관리도를 대화식으로 생성할 수 있습니다. 관리도 빌더 플랫폼을 사용하여 IMR, XBar, 단기 런, 런, P, NP, C, U, Laney P&apos;, Laney U&apos;, Levey-Jennings, 평균 IMR, 삼원 및 희귀 사건 차트와 같은 유형의 관리도를 생성할 수 있습니다.

**C 차트**

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

**IMR 차트**

```jsl

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );

```

**Levey-Jennings 차트**

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

**NP 차트**

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

**P 차트**

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

**P' 차트**

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

**U 차트**

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

**U' 차트**

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

**XBar 단기 런 차이 차트**

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

**XBar 표준화 단기 런 차트**

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

**XBar/R 차트**

```jsl

Names Default To Here( 1 );
// Create an XBar/R chart by adding a subgroup or setting a subgroup size after adding a Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ), Set Subgroup Size( 4 ) );

```

**XBar/S 차트(부분군 변수)**

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

**XBar/S 차트(부분군 크기 설정)**

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

**그룹 평균 이동 범위 중앙값 차트(부분군 변수)**

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

**그룹 평균 이동 범위 중앙값 차트(부분군 크기 설정)**

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

**그룹 표준편차 IMR 차트(부분군 변수)**

```jsl

Names Default To Here( 1 );
// Create an IMR on Group Standard Deviation chart by adding a Y variable and a subgroup variable, and changing the Statistic on the location chart to Standard Deviation, on the dispersion chart to Moving Range on Std Dev and the Sigma on both charts to Moving Range.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Subgroup( :Sample ), Y( :Weight ) ),
	Chart( Position( 1 ), Points( Statistic( "Standard Deviation" ) ), Limits( Sigma( "Moving Range" ) ) ),
	Chart(
		Position( 2 ),
		Points( Statistic( "Moving Range on Std Dev" ) ),
		Limits( Sigma( "Moving Range" ) )
	)
);

```

**그룹 표준편차 IMR 차트(부분군 크기 설정)**

```jsl

Names Default To Here( 1 );
// Create an IMR on Group Standard Deviation chart by adding a Y variable and defining a subgroup size, and changing the Statistic on the location chart to Standard Deviation, on the dispersion chart to Moving Range on Std Dev and the Sigma on both charts to Moving Range.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Y( :Weight ) ),
	Set Subgroup Size( 4 ),
	Chart( Position( 1 ), Points( Statistic( "Standard Deviation" ) ), Limits( Sigma( "Moving Range" ) ) ),
	Chart(
		Position( 2 ),
		Points( Statistic( "Moving Range on Std Dev" ) ),
		Limits( Sigma( "Moving Range" ) )
	)
);

```

**그룹 표준편차 이동 범위 중앙값 차트(부분군 변수)**

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

**그룹 표준편차 이동 범위 중앙값 차트(부분군 크기 설정)**

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

**단기 런 차이 차트**

```jsl

Names Default To Here( 1 );
// Create a Short Run Difference chart by changing the class to Short Run and adding a Product or Part variable. Make sure that the Statistic values for the location chart and dispersion chart are set to Centered and Moving Range Centered, respectively. Centered Short Run control charts are sometimes referred to as Deviation from Nominal (DNOM) charts.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Class( "Short Run" ), Variables( Y( :Weight ), Part( :Product ) ) );

```

**런 차트**

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

**삼원 차트(부분군 변수)**

```jsl

Names Default To Here( 1 );
// Create a Three Way chart by adding a dispersion chart after adding a Y variable and adding a subgroup variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Subgroup( :Sample ), Y( :Weight ) ),
	Chart( Position( 1 ), Points( Statistic( "Average" ) ), Limits( Sigma( "Moving Range" ) ) ),
	Chart( Position( 2 ), Points( Statistic( "Moving Range on Means" ) ), Limits( Sigma( "Moving Range" ) ) ),
	Chart( Position( 3 ), Points( Statistic( "Range" ) ), Limits( Sigma( "Range" ) ) )
);

```

**삼원 차트(부분군 크기 설정)**

```jsl

Names Default To Here( 1 );
// Create a Three Way chart by adding a dispersion chart after adding a Y variable and setting a subgroup size.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Y( :Weight ) ),
	Set Subgroup Size( 4 ),
	Chart( Position( 1 ), Points( Statistic( "Average" ) ), Limits( Sigma( "Moving Range" ) ) ),
	Chart( Position( 2 ), Points( Statistic( "Moving Range on Means" ) ), Limits( Sigma( "Moving Range" ) ) ),
	Chart(
		Position( 3 ),
		Points( Statistic( "Standard Deviation" ) ),
		Limits( Sigma( "Standard Deviation" ) )
	)
);

```

**이동 범위 중앙값 차트**

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

**평균 IMR 차트(부분군 변수)**

```jsl

Names Default To Here( 1 );
// Create an IMR on Means chart by adding a Y variable and a subgroup variable, and changing the Statistic on the dispersion chart to Moving Range on Means and the Sigma on both charts to Moving Range.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Subgroup( :Sample ), Y( :Weight ) ),
	Chart( Position( 1 ), Limits( Sigma( "Moving Range" ) ) ),
	Chart( Position( 2 ), Points( Statistic( "Moving Range on Means" ) ), Limits( Sigma( "Moving Range" ) ) )
);

```

**평균 IMR 차트(부분군 크기 설정)**

```jsl

Names Default To Here( 1 );
// Create an IMR on Means chart by adding a Y variable and defining a subgroup size, and changing the Statistic on the dispersion chart to Moving Range on Means and the Sigma on both charts to Moving Range.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Y( :Weight ) ),
	Set Subgroup Size( 4 ),
	Chart( Position( 1 ), Limits( Sigma( "Moving Range" ) ) ),
	Chart( Position( 2 ), Points( Statistic( "Moving Range on Means" ) ), Limits( Sigma( "Moving Range" ) ) )
);

```

**표준화 단기 런 차트**

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

**희귀 사건 G 차트**

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

**희귀 사건 T 차트**

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

### Cumulative Damage

**구문:** Cumulative Damage

**설명:** 변동 스트레스 및 계단 스트레스 모형을 분석합니다.

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

**구문:** Custom Profiler( Y( column1, column2, ... ) )

**설명:** 그래픽 출력 없이 반응을 최적화하는 데 사용할 수 있는 인터페이스를 제공합니다. 이 프로파일러는 큰 문제에 유용합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Custom Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS )
);

```

### Degradation

**구문:** Degradation( Y( column ), Time( column ), Application( "Repeated Measures Degradation"|"Destructive Degradation"|"Stability Test" ), &lt;X( column )&gt;, &lt;Label( column )&gt;, &lt;Freq( column )&gt;, &lt;Censor( column )&gt;, &lt;Censor Code( value )&gt;, &lt;Upper Spec Limit( value )&gt;, &lt;Lower Spec Limit( value )&gt;, &lt;Censoring Time( value )&gt; )

**설명:** 선형 및 비선형 곡선을 사용하여 시간 경과에 따른 열화를 모델링합니다. 분석 옵션으로는 안정성 분석과 유사 고장 데이터 생성이 있습니다.

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
		Simple Linear Path( X Scale( Linear ), Y Scale( Linear ), Intercept( Common ), Slope( Different ) )
	)
);

```

### Destructive Degradation

**구문:** Destructive Degradation( Y( column ), Time( column ), &lt;X( column )&gt;, &lt;Freq( column )&gt;, &lt;Censor( column ), Censor Code( value )&gt; )

**설명:** 시간 경과에 따른 파괴 열화 데이터를 모델링합니다.

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

**구문:** Diagram( Y( column ), X( column ) )

**설명:** Ishikawa 또는 Fishbone 다이어그램이라고도 하는 특성 요인도를 생성합니다. 이 다이어그램은 근본 원인을 탐색할 수 있는 계층적 다이어그램입니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Ishikawa.jmp" );
obj = dt << Diagram( Y( :Child ), X( :Parent ) );

```

### Discriminant

**구문:** Discriminant( Y( columns ), X( columns ) )

**설명:** Mahalanobis 거리를 사용하여 각 관측값부터 각 그룹의 다변량 평균(중심)까지의 거리를 추정합니다. 그런 다음에는 관측값이 가장 가까운 그룹으로 분류됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant( X( :Species ), Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );

```

### Distance Matrix

**구문:** Distance Matrix( Y( columns ) )

**설명:** 다양한 방법을 사용하여 행 사이의 거리를 계산합니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Distance Matrix( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );

```

### Distribution

**구문:** Distribution( Column() )

**설명:** 각 변수에 대한 분포 및 단변량 요약 통계량을 표시합니다. 결과 및 옵션은 각 변수의 모델링 유형에 따라 달라집니다. 옵션으로는 히스토그램, 상자 그림, 분위수 그림, 적합 분포 및 공정 능력 분석 등이 있습니다.

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );

```

**예제 2**

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

**구문:** EMP Measurement Systems Analysis( Y( column ), X( columns ), Part(column), Model(Main|Crossed|Crossed with Two Factor Interactions|Nested|Crossed then Nested|Nested then Crossed), Dispersion Chart Type(Range|Standard Deviation) )

**설명:** 측정 시스템 분석에 대한 EMP(Evaluating the Measurement Process) 방법을 시작합니다. 기본적으로 평균 및 산포(범위 또는 표준편차) 차트가 표시됩니다.

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

**구문:** EWMA Control Chart( Y( column ), &lt;Subgroup( column )&gt;, &lt;By( column )&gt;, &lt;Center Data( 1 )&gt; )

**설명:** 지수 가중 이동 평균을 표시하는 차트와 개별 관측값 또는 부분군 평균을 표시하는 차트를 생성합니다. EWMA 차트를 피드백 관리도라고도 합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );

```

### Explore Missing Values

**구문:** Explore Missing Values( Y( columns ) )

**설명:** 결측값의 패턴을 찾고 대치를 수행합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );

```

### Explore Outliers

**구문:** Explore Outliers( Y( columns ) )

**설명:** 단변량 또는 다변량 데이터에서 이상치를 식별, 탐색 및 관리합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );

```

### Explore Patterns

**구문:** Explore Patterns( Y( columns ) )

**설명:** 데이터에서 긴 런, 중복된 긴 시퀀스, 일반적이지 않은 형식이 지정된 값 및 선형 관계의 런을 비롯한 일반적이지 않은 특징을 검색합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nicardipine Lab Patterns.jmp" );
obj = dt << Explore Patterns( Y( Column Group( "Laboratory Results" ) ) );

```

### Factor Analysis

**구문:** Factor Analysis( Y( columns ) )

**설명:** 관측된 변수 간의 공통적인 변동을 나타내는 관측되지 않은 변수 또는 요인을 추출하여 데이터의 기본 구조를 파악합니다. 요인 회전은 해석력을 높이는 데 사용됩니다.

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

**구문:** Fatigue Model( N( column ), X( column ), &lt;Freq( column )&gt;, &lt;Censor( column ), Censor Code( value )&gt; )

**설명:** 피로 데이터를 분석하며 S-N 곡선 모델링이라고도 합니다.

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

**구문:** Fit Curve( Y( column ), X( column ) )

**설명:** 다양한 기본 제공 비선형 모형을 적합시킵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;

```

### Fit Life by X

**구문:** Fit Life by X( Y( column ), X( column ), Relationship( string ), Distribution( string ), &lt;Censor( column )&gt; )

**설명:** 단일 회귀 계수로 파라미터화된 사건 발생 시간 데이터의 분포를 분석합니다. 분석 옵션으로는 가속 고장 시간 모형, 그룹 간 수명 분포 및 회귀 요인 변환이 있습니다.

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

**구문:** Fit Model( Y( columns ), Effects( columns ), Personality( "Parametric Survival" ), Censor( columns ) )

**설명:** 생존 시간에 일반 선형 회귀 모형을 적합시킵니다. 하나 이상의 설명 변수에 대한 함수로 표현될 수 있는 생존 시간에 이 모형을 사용할 수 있습니다. 다양한 생존 분포 및 중도절단을 고려합니다.

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

**구문:** Fit Model( Y( columns ), Effects( columns ), Personality( "Proportional Hazard" ), Censor( columns ) )

**설명:** 중도절단을 고려하여 설명 변수가 생존 시간에 미치는 영향을 평가하기 위해 준모수 회귀 모형(Cox 비례 위험 모형)을 적합시킵니다.

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

**구문:** Formula Depot

**설명:** 모형 비교, 프로파일링 및 스코어링 코드 생성을 지원하는 예측 모형을 위한 컨테이너입니다. 계산식 저장소는 분석 메뉴, 모델링 플랫폼의 게시 명령, 재코딩 및 계산식 편집기를 통해 시작됩니다.

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

**구문:** Functional Data Explorer( Y(column), X(column), ID(column) )

**설명:** B-스플라인, P-스플라인, Fourier 또는 소파동 기저 모형을 사용하여 함수 모형을 적합시킵니다. 함수 모형에 대해 함수 주성분 분석을 수행하여 데이터에서 중요한 특징을 추출할 수 있습니다. 기저 함수 모형을 먼저 적합시키지 않고 데이터에 대해 함수 주성분 분석을 직접 수행할 수도 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );

```

### Gaussian Process

**구문:** Gaussian Process( Y( column ), X( columns ) )

**설명:** 연속형 반응 변수와 하나 이상의 연속형 예측 변수 간의 관계를 보간을 사용한 스플라인으로 모델링합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/2D Gaussian Process Example.jmp" );
obj = dt << Gaussian Process( Y( :Y ), X( :X1, :X2 ) );

```

### Graph Builder

**구문:** Graph Builder( Variables( X(column ), Y( column ), &lt;Group X( column )&gt;, &lt;Group Y( column )&gt;, &lt;Shape( column )&gt;, &lt;Color( column )&gt;, &lt;Overlay( column )&gt;, &lt;Freq( column )&gt; ), &lt;Elements(...)&gt; ) )

**설명:** 데이터 탐색에 사용할 수 있는 대화식 그래픽 인터페이스를 제공합니다. 열을 그래프 영역으로 드래그하여 산점도, 등고선 그림, 막대 차트, 영역 차트, 상자 그림, 히스토그램, 히트맵, 파이 차트, 트리맵, 모자이크 그림, 맵 등 다양한 그래프를 생성할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder( Variables( X( :height ), Y( :weight ) ), Elements( Points( X, Y ), Smoother( X, Y ) ) );

```

### Hierarchical Cluster

**구문:** Hierarchical Cluster( Y( columns ) )

**설명:** 연속형 또는 범주형 변수를 기준으로 행을 군집화합니다. 계층적 군집화 과정에서는 먼저 각 행을 개별 군집으로 처리한 후 계속해서 한 번에 두 개씩 군집을 결합합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster( Y( :birth, :death ), Label( :country ) );

```

### Item Analysis

**구문:** Item Analysis( Y( columns ) )

**설명:** 개별 반응에서 항목을 지지하거나 올바르게 응답할 확률과 특성 또는 능력의 관계를 분석합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/MathScienceTest.jmp" );
obj = Item Analysis( Y( :Q1, :Q2, :Q3, :Q4, :Q5, :Q6, :Q7, :Q8, :Q9 ) );

```

### K Means Cluster

**구문:** K Means Cluster( Y( column(s) ), Number of Clusters( number ) )

**설명:** 최대 수백만 개의 행이 포함된 데이터 테이블에서 수치형 변수를 기준으로 행을 군집화합니다. 먼저 군집 수를 지정해야 합니다.

**JMP추가된 버전:** 14

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

**구문:** K Nearest Neighbors(Y( column ), X( columns ))

**설명:** X 변수 공간에 있는 K 최근접 이웃의 반응을 기반으로 연속형 또는 범주형 반응을 예측합니다.

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

**구문:** Latent Class Analysis( Y( column(s) ), Number of Clusters( number ) )

**설명:** 다항 혼합물을 사용하여 범주형 변수를 기반으로 행을 군집화합니다. 잠재 계층(군집)의 수를 미리 지정해야 합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Latent Class Analysis(
	Y( :sex, :marital status, :country, :size, :type ),
	Number of Clusters( 3 )
);

```

### Life Distribution

**구문:** Life Distribution( Y( column(s) ) )

**설명:** 사건 발생 시간의 분포를 분석합니다. 중도절단 데이터, 제품 수명, 신뢰성 및 경쟁 원인을 모델링하는 데 사용할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );

```

### Logistic

**구문:** Logistic( Y( columns ), X( columns ) )

**설명:** 연속형 변수에 대한 범주형 반응의 관계를 모델링합니다. 분석 방법에는 로지스틱 회귀와 ROC 곡선이 포함됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );

```

### Make Validation Column

**구문:** Make Validation Column( &lt;층화 열(columns)&gt;, &lt;그룹화 열(columns)&gt;, &lt;절단점 열(column)&gt;, &lt;절단점 배치 ID(column)&gt; )

**설명:** 데이터를 훈련 데이터 집합, 검증 데이터 집합 및 테스트 데이터 집합으로 나누는 데 사용되는 열을 생성합니다.

**절단점 예제**

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

**층화 예제**

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

### Manage Limits

**구문:** Manage Limits( Process Variables( columns ) )

**설명:** 여러 열에 대한 품질 한계를 한 번에 관리하기 위한 유틸리티를 시작합니다. 열 특성에 한계를 추가하고 편집하고 저장할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Manage Limits( Process Variables( dt << Get Column Group( "Processes" ) ) );

```

### Marker Admixture

**구문:** Marker Admixture( Marker( columns ) )

**설명:** 표지자 유전자형을 기반으로 개체의 집단 혼합을 추정합니다.

**JMP추가된 버전:** 19

**예제 1**

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Set(), Fit() );

```

**예제 2**

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

**구문:** Marker Imputation( Marker( columns ) )

**설명:** Imputes numeric missing marker genotypes.

**JMP추가된 버전:** 19

**예제 1**

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

**예제 2**

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

**구문:** Marker Relatedness( Marker( columns ) )

**설명:** 이배체와 배수체 생물 둘 다에서 개체 기반 유전 표지자 쌍 사이의 유전체 관계를 설명하는 몇 가지 유형의 측도를 추정합니다.

**JMP추가된 버전:** 18

**예제 1**

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

**예제 2**

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

**구문:** Marker Simulation( Marker( columns ), Predictor Formula( columns ) )

**설명:** 부모 교배에서 표지자 유전자형을 시뮬레이션하고 관련된 육종 성능 측도를 계산합니다.

**JMP추가된 버전:** 17

**예제 1**

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
		:Pred Formula Trait1, :Pred Formula Trait2, :Pred Formula Trait3, :Pred Formula Trait4,
		:"Probability( Disease Status=1 )"n
	),
	Cross( :Sex ),
	Ploidy( 2 ),
	Number of Generations( 2 ),
	Number of Individuals per Cross( 10 ),
	Set Random Seed( 12345 ),
	Threshold to Make Line Plots( 1000 )
);

```

**예제 2**

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
		:Pred Formula Trait1, :Pred Formula Trait2, :Pred Formula Trait3, :Pred Formula Trait4,
		:"Probability( Disease Status=1 )"n
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

**구문:** Marker Statistics( Marker( columns ), With Marker( columns ) )

**설명:** 유전 표지자 데이터 분석을 수행하여 마이너 대립유전자 빈도, Hardy-Weinberg 평형 및 연관비평형과 같은 측도를 계산합니다.

**JMP추가된 버전:** 17

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt << Marker Statistics( Marker( Column Group( "Markers" ) ), Ploidy( 2 ) );

```

**예제 2**

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

**구문:** Matched Pairs( Y( columns ), X( column ) )

**설명:** 쌍체 t-검정 또는 단순 반복 측정 분석을 사용하여 매칭된 변수 집합의 평균을 비교함으로써 반응 간의 상관 관계를 설명합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
obj = dt << Matched Pairs( X( :Dose ), Y( :BP 8M, :BP 8W ) );

```

### MaxDiff

**구문:** MaxDiff( Profile DataTable( data table ), Profile ID( column ), Profile Effects( column(s) ), &lt;Response Data Table( data table )&gt;, &lt;Subject Data Table( data table )&gt;, &lt;Response Profile ID Chosen( column )&gt;, &lt;Response Subject ID( column)&gt;, &lt;Response Grouping( column(s) )&gt;, &lt;Response Profile ID Choices( column(s) )&gt;, &lt;Profile Grouping( column(s) )&gt;, &lt;Subject Subject ID( column )&gt;, &lt;Subject Effects( column(s) )&gt; )

**설명:** 고객이 가장 선호하거나 가장 선호하지 않는 제품 속성 조합을 찾기 위한 설계를 생성합니다.

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

**구문:** Mixture Profiler( Y( column1, column2, ... ) )

**설명:** 세 개 이상의 요인이 있는 혼합물 모형에 대해 저장된 예측 계산식의 등고선을 탐색하는 데 사용할 수 있는 대화식 삼원 그림을 생성합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );
obj = dt << Mixture Profiler( Y( :Pred Formula Y ) );

```

### Model Comparison

**구문:** Model Comparison( Predictors( columns ), Group( column ) )

**설명:** 예측 계산식 열을 사용하여 모형 간에 성능을 비교합니다.

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

**구문:** Model Driven Multivariate Control Chart( Process( columns ) )

**설명:** 주성분 또는 부분 최소 제곱 방법을 기반으로 다변량 관리도를 생성합니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Flight Delays.jmp" );
obj = dt << Model Driven Multivariate Control Chart( Process( :AA, :CO, :DL, :F9, :FL, :NW, :UA, :US, :WN ) );

```

### Model Screening

**구문:** Model Screening( Y( column ), X( columns ) )

**설명:** 최적 모형을 선택할 수 있도록 다양한 예측 모형을 적합시킵니다.

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

**구문:** Multidimensional Scaling( Y( columns ) )

**설명:** 개체 간의 근접성 패턴에 대한 시각적 표현을 생성합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Flight Distances.jmp" );
obj = dt << Multidimensional Scaling(
	Y(
		:Birmingham, :Boston, :Buffalo, :Chicago, :Cleveland, :Dallas, :Denver, :Detroit, :El Paso, :Houston,
		:Indianapolis, :Kansas City, :Los Angeles, :Louisville, :Memphis, :Miami, :Minneapolis, :New Orleans,
		:New York, :Omaha, :Philadelphia, :Phoenix, :Pittsburgh, :St. Louis, :Salt Lake City, :San Francisco,
		:Seattle, :Washington DC
	)
);

```

### Multiple Correspondence Analysis

**구문:** Multiple Correspondence Analysis( Y( columns ), X( columns ) )

**설명:** 범주형 변수의 수준 간 연관성을 식별합니다. 다중 대응 분석은 범주형 데이터에 대한 주성분 분석과 유사합니다.

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cereal.jmp" );
dt << Multiple Correspondence Analysis( Y( :Mfr, :"Hot/Cold"n, :Fiber Gr ), X( :Manufacturer ) );

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Multiple Correspondence Analysis( Y( :country, :size, :type ) );

```

### Multiple Factor Analysis

**구문:** Multiple Factor Analysis( MFABLocks({"Block 1", columns},{"Block 2", columns}) )

**설명:** 감각 데이터 분석 시 참가자 간의 합치도를 분석합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
dt << Multiple Factor Analysis(
	Product ID( :Vineyard ),
	Z( :Region ),
	MFA Blocks(
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness},
		{"Florence Flowery etc.", :Florence Flowery, :Florence Crispness, :Florence Tannin, :Florence Savory,
		:Florence Lightness},
		{"Xavier Fruity etc.", :Xavier Fruity, :Xavier Spicy, :Xavier Crispness, :Xavier Alcohol,
		:Xavier Savory, :Xavier Lightness},
		{"Robert Fruity etc.", :Robert Fruity, :Robert Flowery, :Robert Spicy, :Robert Crispness,
		:Robert Tannin, :Robert Alcohol, :Robert Savory, :Robert Lightness},
		{"Paula Fruity etc.", :Paula Fruity, :Paula Flowery, :Paula Spicy, :Paula Crispness, :Paula Tannin,
		:Paula Savory},
		{"Monica Fruity etc.", :Monica Fruity, :Monica Flowery, :Monica Spicy, :Monica Tannin,
		:Monica Alcohol, :Monica Savory, :Monica Lightness},
		{"Frank Fruity etc.", :Frank Fruity, :Frank Flowery, :Frank Spicy, :Frank Crispness, :Frank Tannin,
		:Frank Alcohol, :Frank Savory, :Frank Lightness}
	)
);

```

### Multivariate

**구문:** Multivariate( Y( columns ) )

**설명:** 다양한 다변량 분석 기법을 사용하여 수치형 변수 간의 상관 관계 및 연관성을 탐색합니다. 이러한 기법으로는 모수 및 비모수 연관성 측도, 산점도 행렬, 주성분 분석, 이상치 분석 및 항목 신뢰도가 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );

```

### Multivariate Embedding

**구문:** Multivariate Embedding( Y( columns ) )

**설명:** UMAP(Uniform Manifold Approximation and Projection, 균일 매니폴드 근사 및 투영) 방법 또는 t-SNE(t-Distributed Stochastic Neighbor Embedding, t 분포 확률적 이웃 임베딩) 방법을 사용하여 고차원 공간의 데이터를 저차원 공간에 매핑합니다. 대부분의 경우 저차원 공간을 더 쉽게 시각화할 수 있도록 데이터를 2차원 또는 3차원으로 매핑하려고 합니다. 두 방법 모두 데이터의 로컬 구조를 유지하려고 하지만 큰 데이터 집합의 경우 일반적으로 UMAP이 t-SNE보다 빠릅니다.

**JMP추가된 버전:** 17

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Multivariate Embedding( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );

```

**예제 2**

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

**예제 3**

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

**구문:** Naive Bayes( Y( column ), X( columns ), Method( "Naive Bayes" ) )

**설명:** 각 그룹의 예측 변수 값과의 근접성을 기반으로 범주형 변수의 그룹 멤버십을 예측합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Naive Bayes( Y( :Species ), X( :Sepal length, :Sepal width, :Petal length, :Petal width ) );

```

### Neural

**구문:** Neural( Y( column ), X( columns ), &lt;Validation( column )&gt; )

**설명:** 입력 변수의 유연한 함수를 사용하여 하나 이상의 반응 변수를 예측합니다. 유연한 프레임워크에는 여러 층 및 s 형태의 함수가 통합되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural( Y( :Y ), X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ), Go );

```

### New Table

**구문:** New Table( name, &lt;invisible&gt;, &lt;private&gt;, &lt;actions&gt; )

**설명:** 새 데이터 테이블을 생성합니다. "Invisible"은 데이터 테이블을 보기에서 숨기되 JMP 홈 창의 목록에 표시합니다. "Private"은 테이블을 완전히 숨깁니다. "Visible"은 기본값으로, 표시 가능하고 JMP 홈 창에 나열되는 정규 테이블을 생성합니다. 선택적인 actions 인수는 데이터 테이블이 지원하는 메시지입니다.

```jsl

Names Default To Here( 1 );
dt = New Table( "Little Class",
	Add Rows( 3 ),
	New Column( "name", Character, Nominal, Set Values( {"KATIE", "LOUISE", "JANE"} ) ),
	New Column( "height", Continuous, Set Values( [59, 61, 55] ) )
);

```

### Nonlinear

**구문:** Nonlinear( Y( column ), X( column with predictor formula ) )

**설명:** 최소 제곱 또는 사용자 손실 함수를 사용하여 비선형 모형을 적합시킵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );

```

### Normal Mixtures

**구문:** Normal Mixtures( Y( column(s) ), Number of Clusters( number ) )

**설명:** 데이터가 여러 중첩된 다변량 정규 분포 혼합에서 나온 경우 수치형 변수를 기준으로 행을 군집화합니다. 먼저 군집 수를 지정해야 합니다.

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

**구문:** Normalization( Y( columns ) )

**설명:** Adjusts for technical biases and improves suitability for subsequent analysis

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Normalization( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );

```

### Notebook

**구문:** Notebook

**설명:** 새 노트북을 생성하거나, 제공된 이름 또는 인덱스를 사용하여 노트북을 반환합니다.

```jsl

Names Default To Here( 1 );

nb = Notebook();

```

### Oneway

**구문:** Oneway( Y( columns ), X( columns ) )

**설명:** 일련의 범주형 그룹에서 연속형 반응을 모델링합니다. 분석 방법으로는 ANOVA, 평균 비교, 평균 분석 및 분위수 그림이 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );

```

### Open

**구문:** Open( file path, &lt;invisible&gt;, &lt;private&gt;, &lt;select columns(list)&gt; | &lt;ignore columns(list)&gt;, &lt;column names only&gt;, &lt;Table Info&gt; )

**설명:** JMP 파일을 열거나, 지원되는 다른 파일 유형을 가져옵니다. 데이터 테이블 열기 옵션 &apos;Invisible&apos;은 파일을 보기에서 숨기지만 JMP 홈 창에 나열합니다. &apos;Private&apos;은 파일을 완전히 숨깁니다. &apos;Select Columns&apos; 파일 옵션은 지정된 열에서만 읽습니다. &apos;Ignore Columns&apos;는 &apos;Select Columns&apos;의 반대로, 지정된 열에서 읽지 않습니다. JMP 파일 옵션 &apos;Column Names Only&apos;와 &apos;Table Info&apos;는 데이터를 읽거나 데이터 테이블을 생성하지 않습니다. &apos;Column Names Only&apos;는 데이터 테이블의 열 이름 목록을 반환하고, &apos;Table Info&apos;는 데이터 테이블의 열 및 행 수를 반환합니다. &apos;FIRST(n)&apos;/&apos;LAST(n)&apos;/&apos;RANDOM(n)&apos; 옵션은 데이터 테이블의 n개 행에서만 읽습니다. n이 0에서 1 사이의 숫자인 경우 n은 데이터 테이블의 총 행 수에 대한 비율입니다.

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp", ignore columns( "age" ) );

```

**예제 3**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp", "Column Names Only" );

```

**예제 4**

```jsl

Names Default To Here( 1 );
info = Open( "$SAMPLE_DATA/probe.jmp", "Table Info" );
Print( info );

```

**예제 5**

```jsl

Names Default To Here( 1 );
info = Open( "$SAMPLE_DATA/SATByYear.jmp", random( 10 ) );
Print( info );

```

**예제 6**

```jsl

Names Default To Here( 1 );
info = Open( "$SAMPLE_DATA/SATByYear.jmp", First( 10 ) );
Print( info );

```

### Parallel Plot

**구문:** Parallel Plot( Y( columns ), &lt;X( column )&gt; )

**설명:** 각 행에 대한 연결선 세그먼트를 사용하여 둘 이상의 변수가 있는 그림을 생성합니다.

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/SAT.jmp" );
dt << Parallel Plot(
	Y(
		:"2004 Verbal"n, :"2004 Math"n, :"2003 Verbal"n, :"2003 Math"n, :"2002 Verbal"n, :"2002 Math"n,
		:"2001 Verbal"n, :"2001 Math"n, :"1999 Verbal"n, :"1999 Math"n, :"1994 Verbal"n, :"1994 Math"n,
		:"1997 Verbal"n, :"1997 Math"n, :"1992 Verbal"n, :"1992 Math"n
	)
);

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Parallel Plot( Y( :hist0, :hist1, :hist3, :hist5 ) );

```

### Pareto Plot

**구문:** Pareto Plot( Cause( column ), &lt;X( column )&gt;, &lt;Subcategory( column )&gt;, &lt;Freq( column )&gt;, &lt;Weight( column )&gt; )

**설명:** 품질 관련 공정에 포함된 항목의 상대 빈도를 내림차순으로 표시합니다. 하나 이상의 분류 변수를 정의하여 비교 가능한 파레토도를 생성할 수 있습니다.

**그룹**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ) );

```

**단순**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure Raw Data.jmp" );
obj = dt << Pareto Plot( Cause( :failure ) );

```

**하위 범주**

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

### Partial Least Squares

**구문:** Partial Least Squares( Y( columns ), X( columns ) )

**설명:** 잠재 요인을 사용하여 하나 이상의 반응 변수에 모형을 적합시킵니다. 설명 변수의 상관관계가 높거나 관측값보다 설명 변수가 더 많은 경우에 이 방법으로 모형을 적합시킬 수 있습니다.

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );
obj = dt << Partial Least Squares(
	Y( :Hedonic, :Goes with meat, :Goes with dessert ),
	X( :Price, :Sugar, :Alcohol, :Acidity ),
	Go
);

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16, :v17, :v18,
		:v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Go
);

```

### Predictor Screening

**구문:** Predictor Screening( Y( columns ), X( columns ) )

**설명:** 붓스트랩 포레스트 분할을 사용하여 반응에 대한 예측 변수의 기여도를 평가하는 방법으로 다수의 후보에서 유의한 예측 변수를 파악합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Bands Data.jmp" );
obj = dt << Predictor Screening( Y( :Banding? ), X( Column Group( "Predictors" ) ) );

```

### Principal Components

**구문:** Principal Components( Y( columns ) )

**설명:** 변수 집합의 변동을 본래 변수보다 더 적은 수의 주성분(본래 변수의 독립적 선형 결합)으로 모델링합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );

```

### Process Capability

**구문:** Process Capability( Process Variables (columns), &lt; Spec Limits() &gt; )

**설명:** 각 공정에 대한 공정 능력 분석을 계산하고 여러 공정의 공정 능력을 한 번에 분석하는 데 유용한 그래프를 생성합니다. 규격 한계도 정의할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer],
		:PNP3[:lot_id, :wafer]
	)
);

```

### Process History Explorer

**구문:** Process History Explorer( Y( columns ),ID( columns), X( columns ), Step( columns ), Timestamp( columns ) )

**설명:** 낮은 수율과 연관된 공정 단계를 파악합니다.

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

**구문:** Process Screening( Process Variables( columns ) )

**설명:** 안정성, 공정 능력, 관리도 검정 및 변화(흐름)를 포함한 몇 가지 관점에서 여러 공정을 검토합니다. 주의가 필요한 공정에 초점을 맞추는 데 도움이 됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Grouping( :Site ), Process Variables( Eval( 5 :: 132 ) ) );

```

### Profiler

**구문:** Profiler( Y( column1, &lt;column2&gt;, ..., &lt;PredSE column1, PredSE column2&gt;, ... ), &lt;Expand&gt; )

**설명:** 요인 설정을 변경하면 예측 반응이 어떻게 변하는지 탐색할 수 있는 대화식 그래프를 생성합니다. 각 요인에 대해 프로파일러는 저장된 예측 계산식 및 선형 제약 조건에 기반한 예측 추적선을 표시하고, 해당 요인과 관련하여 반응이 어떻게 변하는지 보여 줍니다. Expand 인수는 시작 창의 중간 계산식 확장 옵션에 해당합니다.

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),
	Desirability Functions( 1 )
);

```

**예제 2**

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
dt << Profiler( Y( predCol, stderrCol ), Profiler( 1, Confidence Intervals( 1 ), ), Use SE Formula( 1 ) );

```

**예제 3**

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Stochastic Optimization.jmp" );
dt << Profiler( Y( :Yield ), Profiler( 1, Desirability Functions( 1 ), ), Expand );

```

### Recurrence Analysis

**구문:** Recurrence Analysis( Y( column ), Cost( column ), Label( column ), &lt;Grouping( column )&gt; )

**설명:** 재발 사건의 분포를 시간대 및 시스템별로, 또는 시스템의 서비스가 중단될 때까지 분석합니다.

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

**구문:** Reliability Forecast

**설명:** 관측된 데이터를 기반으로 미래 고장 및 미래 위험 유닛을 예측합니다. 이 플랫폼에서는 여러 가지 입력 형식이 허용됩니다. 규격에 대한 자세한 내용은 각 형식을 참조하십시오.

**Nevada 형식**

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
			[1991, 2000, 1999, 2024, 1959, 1958, 2000, 2001, 1986, 1966, 1983, 2011, 2026, 1950, 1989, 1963,
			1954, 2030, 1981, 2006, 1991, 1950, 2025, 1996, 1987, 1957, 1988, 1966, 2038, 2014, 1962, 1965,
			1952, 2045, 2018, 2036]
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

**날짜 형식**

```jsl

Names Default To Here( 1 );

dt1 = Open( "$SAMPLE_DATA/Reliability/Small Production part1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Reliability/Small Production part2.jmp" );

obj = dt1 << Reliability Forecast(
	Input Format( Dates ),
	Production Data Table( dt1, Production Count( :Sold Quantity ), Timestamp( :Sold Month ) ),
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

**사건 발생 시간 형식**

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

### Reliability Growth

**구문:** obj = Reliability Growth( Input Format( Time to Event ), Time to Event( column, &lt;column&gt; ), &lt;Event Count( column )&gt;, &lt;Phase( column )&gt; );obj = Reliability Growth( Input Format( Dates ), Timestamp( column, &lt;column&gt; ), &lt;Event Count( column )&gt;, &lt;Phase( column )&gt; );obj = Reliability Growth( Input Format( Concurrent Systems ), Time to Event( column, column, ... ), System ID( column ), &lt;Phase( column )&gt; )obj = Reliability Growth( Input Format( Parallel Systems ), Time to Event( column, column, ... ), &lt;Event Count( column )&gt;, System ID( column ), &lt;Phase( column )&gt; )

**설명:** 시간이 경과하면서 설계에 개선 사항이 반영됨에 따른 단일 수리 가능 시스템의 신뢰성 변화를 모델링합니다. 이 플랫폼에서는 여러 가지 입력 형식이 허용됩니다. 규격에 대한 자세한 내용은 각 형식을 참조하십시오.

**날짜**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/BrakeReliability.jmp" );
obj = dt << Reliability Growth( Input Format( Dates ), Timestamp( :Date ), Event Count( :Fixes ) );

```

**동시 시스템**

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

**병렬 시스템**

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

**사건 발생 시간**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
obj << Crow AMSAA;

```

### Repeated Measures Degradation

**구문:** Repeated Measures Degradation( Y( column ), Time( column ), &lt;X( column )&gt;, &lt;Freq( column )&gt;, &lt;Censor( column ), Censor Code( value )&gt; )

**설명:** 랜덤 모수를 사용하여 시간 경과에 따른 반복 측정 열화 데이터를 모델링합니다.

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

**구문:** Response Screening( Y( columns ), X( columns ) )

**설명:** 여러 반응에 대해 선형 모형 효과의 검정 수행 과정을 자동화합니다. 검정 결과와 요약 통계량은 데이터 테이블과 그림에 제공됩니다. FDR(False Discovery Rate)은 유의성이 잘못 선언되지 않도록 보호합니다. 로버스트 추정 방법은 이상치에 대한 검정 민감도를 줄입니다.

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
obj = dt << Response Screening(
	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),
	X( :Process )
);

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Probe.jmp" );
obj = dt << Response Screening( X( :Process ), Y( Eval( 8 :: 108 ) ) );

```

### Scatterplot 3D

**구문:** Scatterplot 3D( Y( columns ) )

**설명:** 세 개 이상의 변수에 대해 회전하는 3차원 산점도를 생성합니다. 변수를 네 개 이상 지정하면 산점도에 표시되는 변수를 순환할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );

```

### Scatterplot Matrix

**구문:** Scatterplot Matrix( Y( columns ), &lt;X( columns )&gt;, &lt;Group( column )&gt;, &lt;By( column )&gt; )

**설명:** 이변량 관계를 탐색하는 데 사용할 수 있는 산점도 격자를 생성합니다. X 변수가 지정되지 않은 경우 산점도는 모든 Y 변수 쌍을 대상으로 합니다. 하나 이상의 X 변수가 지정된 경우 산점도는 X 변수에 대해 그림에 표시된 Y 변수를 대상으로 합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Scatterplot Matrix( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );

```

### Structural Equation Models

**구문:** Structural Equation Models( Model Variables ( columns ) )

**설명:** 확증적 요인 분석, 잠재 변수를 사용하거나 사용하지 않는 경로 모형, 측정 오차 모형 등의 다양한 모형을 적합시키기 위한 프레임워크를 제공합니다.

**JMP추가된 버전:** 15

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

**구문:** Support Vector Machines(Y( column ), X( columns ))

**설명:** X 변수 공간의 서포트 벡터를 기반으로 반응을 예측합니다. 서포트 벡터 머신 알고리즘의 목표 중 하나는 훈련 데이터를 사용하여 새 데이터의 분류 방법을 학습하는 것입니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Support Vector Machines( Y( :Species ), X( :Sepal length, :Sepal width, :Petal length, :Petal width ) );

```

### Surface Plot

**구문:** Surface Plot( Columns() )

**설명:** 저장된 계산식으로 정의된 표면 또는 점의 회전하는 3차원 그림을 생성합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS )
);

```

### Survival

**구문:** Survival( Y( columns ), Censor( column ), &lt;Grouping( column )&gt; )

**설명:** 하나 이상의 그룹에 대해 승법 극한(Kaplan-Meier) 방법을 사용하여 생존 함수의 추정값을 계산합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );

```

### Tabulate

**구문:** Tabulate( Add Table( Column Table( Analysis Columns( column(s) )|Grouping Columns( column(s))|Statistics( )), Row Table( Analysis Columns( column(s) )|Grouping Columns( column(s))|Statistics( )) )

**설명:** 하나 이상의 변수에 대한 사용자 요약 통계량 테이블을 생성합니다. 하나 이상의 분류 열을 기준으로 변수를 그룹화할 수 있습니다. 드래그하여 놓기 작업으로 요약 테이블을 생성할 수 있습니다.

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

**구문:** Ternary Plot( Y( columns ) )

**설명:** 합이 상수가 되는 세 가지 혼합 성분의 2차원 그림을 생성합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );
obj = dt << Ternary Plot( Y( :p1, :p2, :p3 ) );

```

### Text Explorer

**구문:** Text Explorer( Text Columns( columns ) )

**설명:** 열의 텍스트에서 단어를 파싱하여 해당 개수를 세고, 다른 열과의 연관성을 확인하고, 표시자를 저장하고, 관계를 그래프로 나타냅니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );

```

### Time Series

**구문:** Time Series( Y( column ) )

**설명:** 일정 간격의 시점에서 얻은 일련의 관측값을 모델링합니다. 시계열 그림, 자기상관, 변동도, 스펙트럼 밀도, ARIMA, 계절 ARIMA, 평활 모형 및 예측을 포함합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );

```

### Time Series Forecast

**구문:** Time Series Forecast( Y( column ) )

**설명:** 지정된 방법을 사용하여 여러 시계열을 적합시키고 예측합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/M3C Quarterly.jmp" );
obj = dt << Time Series Forecast( Y( :Y ), Grouping( :Series ), Time( :Time ) );

```

### Uplift

**구문:** Uplift( Y( column ), X( columns ), Treatment( column ) )

**설명:** 처리 차이를 최대화하기 위한 분할을 선택하는 재귀 분할 트리를 적합시킵니다. 이 모형은 처리에 반응할 확률이 가장 높은 개인 그룹을 식별합니다.

**예제 1**

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

**예제 2**

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

**구문:** Variability Chart( Y( column ), X( columns ) )

**설명:** 연속형 측정값을 분석하여 측정 시스템의 성능을 확인합니다. 게이지 연구를 수행하여 데이터의 변동 척도를 확인할 수도 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );

```

### Virtual Join

**구문:** Virtual Join

**설명:** 주 데이터 테이블을 ID 열을 통해 보조 데이터 테이블에 연결합니다.

테이블을 실제로 결합하지 않고 주 테이블에서 보조 테이블의 열에 액세스할 수 있습니다.



연결 ID 열 특성은 보조 테이블의 열을 ID 열로 표시합니다.



연결 참조 열 특성은 주 테이블의 열을 보조 테이블의 ID 열에 매핑합니다.

연결 참조 특성을 사용하면 데이터 테이블 참조나 연결할 데이터 테이블의 경로를 설정할 수 있습니다.

&apos;연결된 열 이름 사용&apos; 옵션을 사용하면 정규화된 고유 이름 대신에 소스 열 이름이 있는 연결된 열이 생성됩니다.

**예제 1**

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

**예제 2**

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

**예제 3**

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

## 항목 메시지

### Add Properties to Table

**구문:** obj &lt;&lt; Add Properties to Table

**설명:** 테이블에 특성을 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Properties( {2, 4} );
proplist = dt << Get Selected Properties();
dt2 = New Table( "Little Class" );
dt2 << Add Properties to Table( proplist );

```

### Add Scripts to Table

**구문:** obj &lt;&lt; Add Scripts to Table

**설명:** 이 명령은 &apos;Add properties to table&apos;의 별칭입니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Properties( {2, 4} );
proplist = dt << Get Selected Properties();
dt2 = New Table( "Little Class" );
dt2 << Add scripts to table( proplist );

```

### Anonymize

**구문:** obj &lt;&lt; Anonymize( columns( columns ), &lt;Output Table( name )&gt; )

**설명:** 고유 식별자가 제거된 새 데이터 테이블을 생성합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << anonymize( columns( :name, :age ), output table name( "anonymized" ) );

```

### Apply Columns List Filter To Data Grid

**구문:** obj &lt;&lt; Apply Columns List Filter To Data Grid( state=0|1 )

**설명:** 데이터 테이블 열 목록의 필터를 데이터 격자에 적용하려면 설정합니다.

**JMP추가된 버전:** 19

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

**구문:** dt &lt;&lt; Apply Formula([Columns(&lt;col|{cols}|Group(col, count)|&lt;group name&gt;, [Ref(&lt;name&gt;)], [List Ref(&lt;name&gt;)]]+, [Output(In Place|In Place Formula|New Formula(&lt;prefix&gt;|New Static(&lt;prefix&gt;)], [Group(&lt;name&gt;)])

**설명:** 계산식을 사용하여 하나 이상의 열을 변환하고 결과(계산식 또는 데이터)를 새 열 또는 기존 열에 배치합니다.

하나 이상의 열 그룹을 정의해야 합니다(단일 열, 명시적 열 목록, 열의 런 또는 기존 열 그룹 이름).

출력이 &apos;현재 위치&apos;이면 첫 번째로 정의된 그룹이 대상으로 사용됩니다. 필요한 경우 한 번에 하나씩 가져온 열을 참조하거나(Ref), 열 목록을 참조하는 이름(ListRef)을 계산식에 지정할 수 있습니다.

마지막으로 출력 유형을 지정할 수 있으며, 원하는 경우 새 열의 이름과 그룹 이름을 사용할 수 있습니다.

**JMP추가된 버전:** 18

**New Data Columns/ListRef**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Data Table( "Big Class" ) << Apply Formula(
	Columns( Group( :height, 2 ), Ref( "_relative_from_height" ), ListRef( "height_to_weight" ) ),
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

**구문:** obj &lt;&lt; Begin Data Update

**설명:** &apos;End Data Update&apos; 명령에 도달할 때까지 모든 &apos;Update&apos; 메시지를 보류합니다. 많은 셀을 한꺼번에 업데이트하려는 경우에 유용합니다. 이는 데이터 셀의 변경에만 적용됩니다.

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

**구문:** obj &lt;&lt; Checksum( &lt; Version(version) &gt;, &lt; Include(flags) &gt;, &lt; Exclude(flags) &gt; )

**설명:** Compute the table&apos;s checksum. Available flags include: "ColData", "ColName", "ColDataType", "ColModelingType", "ColFormat", "ColInFormat", "ColFormatWidth", "ColAttributes", "ColProperties", "ColListCheck", "ColRangeCheck", "ColCompact", "ColLabel", "ColHidden", "ColExclude", "ColSelection", "ColState", "ColDisplayWidth", "TableVariables", "TableScripts", "RowExclude", "RowHidden", "RowLabel", "RowColor", "RowMarker", "RowSelection", "RowState"

**JMP추가된 버전:** 18

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Checksum();

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Checksum( Exclude( "ColData" ) );

```

**예제 3**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Checksum( Include( "ColData", "ColAttributes" ) );

```

**예제 4**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
flags = {"ColData", "ColAttributes"};
dt << Checksum( Include( flags ) );

```

### Clear Cell Colors

**구문:** obj &lt;&lt; Clear Cell Colors

**설명:** 선택된 열의 셀 색상을 지웁니다. 선택된 열이 없으면 모든 열의 셀 색상이 지워집니다.

**JMP추가된 버전:** 15

**예제 1**

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

**예제 2**

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

**구문:** obj &lt;&lt; Clear Column Selection

**설명:** 데이터 테이블의 열 선택을 지웁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
dt << Go To( :BP 12F );
Wait( 2 );
dt << Clear Column Selection();

```

### Clear Edit Lock

**구문:** obj &lt;&lt; Clear Edit Lock( [ &lt;"Modify Cells"&gt;, &lt;"Add rows"&gt;, &lt;"Add Columns"&gt;, &lt;"Delete Rows"&gt;, &lt;"Delete Columns"&gt;] )

**설명:** 앞서 데이터 테이블에 허용되지 않았던 지정된 연산자를 허용합니다.

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

**구문:** obj &lt;&lt; Clear Properties Selection( { property1, property2, ... )

**설명:** 지정된 테이블 특성을 선택 취소합니다. 여기서 목록은 특성 이름 목록 또는 특성에 대한 인덱스 목록일 수 있습니다. 목록이 제공되지 않은 경우 선택된 모든 특성을 선택 취소합니다.

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
list = {"Bivariate", "Logistic"};
proplist = dt << Select Properties();
Wait( 1 );
dt << clear properties selection( list );

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
list = {"Bivariate", "Logistic"};
proplist = dt << Select Properties();
Wait( 1 );
dt << clear properties selecction();

```

### Clone

**구문:** dt &lt;&lt; Clone( &lt; Table Name(name) &gt;, &lt; Copy Formulas(1|0) &gt;, &lt; Eval Formulas(1|0) &gt; )

**설명:** 데이터 테이블의 복사본을 생성합니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dtClone = dt << Clone;

```

### Close Data Grid

**구문:** obj &lt;&lt; Close Data Grid

**설명:** 데이터 격자를 닫거나 엽니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
dt << Close Data Grid( 1 );

```

### Close Side Panels

**구문:** obj &lt;&lt; Close Side Panels

**설명:** 데이터 테이블의 측면 패널을 닫거나 엽니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
dt << Close Side Panels( 1 );

```

### Close summary panels

**구문:** obj &lt;&lt; Close summary panels

**설명:** 데이터 테이블의 요약 패널을 닫거나 엽니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
dt << Close Summary Panels( 1 );

```

### Cluster

**구문:** obj &lt;&lt; Cluster

### Collapse All Column Groups

**구문:** obj &lt;&lt; Collapse All Column Groups

**설명:** 모든 열 그룹을 접습니다.

**JMP추가된 버전:** 18

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

**구문:** obj &lt;&lt; Column Filter

**설명:** Retrieves object to manipulate active column filter for the table.

**JMP추가된 버전:** 19

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

**구문:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**설명:** 독립 실행형 열 전환기를 생성합니다.

**JMP추가된 버전:** 16

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
dt << Column Switcher( :Process 1, {:Process 1, :Process 3, :Process 4, :Process 5, :Process 6, :Process 7} );

```

**예제 2**

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

**예제 3**

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

**구문:** obj &lt;&lt; Combine Columns

**설명:** 각 소스 열의 값을 지정된 구분자로 구분하여 여러 열을 단일 열로 결합합니다.

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
dt << Combine Columns(
	delimiter( "," ),
	Columns( :Brush After Waking Up, :Brush After Meal, :Brush Before Sleep, :Brush Another Time ),
	Selected Columns are Indicator Columns( 1 ),
	Column Name( "When to Brush" )
);

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
dt << Combine Columns(
	delimiter( "," ),
	Columns( :Brush After Waking Up, :Brush After Meal, :Brush Before Sleep, :Brush Another Time ),
	Column Name( "When to Brush" )
);

```

### Compare Data Tables

**구문:** obj &lt;&lt; Compare Data Tables( Compare with( Data Table( name )), &lt;Compare table variables and scripts( 0|1)&gt;, &lt;show window&gt;,&lt;Compare columns attributes and properties( 0|1)&gt;, &lt;Compare data( 0|1 )&gt;, &lt;Show difference summary(0|1)&gt;, &lt;Show difference plot(0|1)&gt; )

**설명:** 두 개의 열린 데이터 테이블을 비교하고 메타데이터 및 데이터 간의 차이를 보고합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
dt << compare data tables( compare With( Data Table( "Students2" ) ) );

```

### Compress File When Saved

**구문:** obj &lt;&lt; Compress File When Saved( state=0|1 )

**설명:** 데이터 테이블을 저장할 때 파일을 압축합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Compress File When Saved( 1 );

```

### Compress Selected Columns

**구문:** obj &lt;&lt; Compress Selected Columns( { column1, column2, ...} )

**설명:** 각 열을 가장 압축된 형식으로 압축합니다.

수준이 255개 미만인 경우 문자 데이터는 1바이트입니다.

데이터가 -127에서 127 사이일 경우 숫자 데이터는 1바이트입니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Compress Selected Columns( {:Age, :sex, :Height, :Weight} );

```

### Concatenate

**구문:** obj &lt;&lt; Concatenate( &lt;Private&gt;, &lt;Invisible&gt;, Data Table( name ), &lt;Data Table(name), ...&gt; &lt;Label( column )&gt;, &lt;Output Table( name ) | Append to first table&gt;, &lt;Keep Formulas&gt;, &lt;Create Source Column&gt; )

**설명:** 여러 데이터 테이블의 행을 결합하여 새 데이터 테이블을 생성하거나 첫 번째 데이터 테이블에 행을 추가합니다.

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Trial1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Trial2.jmp" );
dt << Concatenate( Data Table( "Trial2" ) );

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Students.jmp" );
dt1 = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
dt << Concatenate( Data Table( dt1 ), Data Table( dt2 ), "Append to first table", "Create source column" );

```

### Copy Column Properties

**구문:** obj &lt;&lt; Copy Column Properties( &lt;column 1 column 2, ...&gt; )

**설명:** 선택한 열의 열 특성을 별도의 특성 목록으로 클립보드에 복사합니다. 데이터 테이블에서 소스 열을 사전 선택하는 대신 소스 열 목록을 지정할 수도 있습니다.

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << Select Columns( :MODULUS, :ELONG );
dt << Copy Column Properties;
New Window( "Script", Script Box( "//Try Paste here
                     " ) );

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << Copy Column Properties( {:MODULUS, :ELONG} );
New Window( "Script", Script Box( "//Try Paste here
                     " ) );

```

### Copy Selected Properties

**구문:** obj &lt;&lt; Copy Selected Properties

**설명:** 선택된 테이블 특성을 클립보드에 복사합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << select properties( {"Distribution", "Oneway"} );
proplist = dt << Copy Selected Properties();
New Window( "Script", Script Box( "//Try Paste here
                     " ) );

```

### Copy Table Script

**구문:** obj &lt;&lt; Copy Table Script( &lt;"No data"&gt; )

**설명:** 스크립트를 복사하여 데이터 테이블을 다시 생성합니다. 결과 스크립트에는 데이터 테이블에 저장된 모든 테이블 스크립트가 포함됩니다. 필요한 경우 스크립트에서 데이터를 생략하려면 "No Data" 키워드를 추가하십시오.

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Copy Table Script();
New Window( "Script", Script Box( "//Try Paste here
                     " ) );

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Copy Table Script( "No Data" );
New Window( "Script", Script Box( "//Try Paste here
                     " ) );

```

### Debug Script

**구문:** obj &lt;&lt; Debug Script( name )

**설명:** 데이터 테이블에 특성으로 저장된 명명된 스크립트를 디버깅합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Debug Script( "Distribution" );

```

### Decision Tree

**구문:** obj &lt;&lt; Decision Tree

### Define Tag

**구문:** Define Tag(&lt;name&gt;, [Color(&lt;color&gt;)], [Symbol(&lt;symbol char&gt;)], [Description(&lt;text&gt;)], [Replace(&lt;existing tag name&gt;)])

**설명:** 테이블에 열 태그 정의를 생성하거나 업데이트합니다. 태그가 없는 경우 생성하고 필요에 따라 색상, 기호 및 기타 속성을 할당합니다.

**JMP추가된 버전:** 19

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

**구문:** obj &lt;&lt; Delete Columns( &lt;column&gt;, &lt;column&gt;, ... )

**설명:** 지정된 열을 삭제합니다. 인수가 지정되지 않은 경우 데이터 테이블에서 선택된 열을 삭제합니다.

**JMP추가된 버전:** 14

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:height << Set Selected;
Wait( 2 );
dt << Delete Columns();

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
dt << Delete Columns( :Height );

```

**예제 3**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
cols = {"height", "weight"};
Wait( 2 );
dt << Delete Columns( cols );

```

### Delete Filter View

**구문:** obj &lt;&lt; Delete Filter View( name | obj )

**설명:** 지정된 필터 보기를 삭제합니다.

**JMP추가된 버전:** 19

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

**구문:** obj &lt;&lt; Delete Scripts( &lt;script| {script 1, script 2, script 3, ...} &gt; )

**설명:** 지정된 스크립트를 데이터 테이블에서 삭제합니다.

**JMP추가된 버전:** 14

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Table Script( "New Script", Distribution( Column( :Height, :Weight ), By( :sex ) ) );
Wait( 2 );
dt << Delete Scripts( "New Script" );

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
list = {"Bivariate", "Logistic"};
Wait( 2 );
dt << Delete Scripts( list );

```

### Delete Table Property

**구문:** obj &lt;&lt; Delete Table Property

**설명:** &apos;Delete Scripts&apos;의 별칭입니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Table Script( "New Script", Distribution( Column( :Height, :Weight ), By( :sex ) ) );
Wait( 2 );
dt << Delete Table Property( "New Script" );

```

### Delete Table Variable

**구문:** obj &lt;&lt; Delete Table Variable( name )

**설명:** 데이터 테이블에 저장된 테이블 변수를 삭제합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Table Variable( "Days", 42 );
Wait( 2 );
dt << Delete Table Variable( "Days" );

```

### Delete Tag

**구문:** Delete Tag(&lt;tag&gt;|{&lt;tag&gt;, &lt;tag&gt;, ...}, [force(0|1)

**설명:** 테이블에서 태그를 삭제합니다. 강제 적용(1) 플래그가 제공된 경우가 아니면 열에 사용 중인 태그는 삭제되지 않습니다.

**JMP추가된 버전:** 19

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

**구문:** obj &lt;&lt; Deselect Column Group( name of group | list of names )

**설명:** 열 그룹을 선택 취소합니다. 열 그룹을 생략하면 모든 열 그룹이 선택 취소됩니다.

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

**구문:** obj &lt;&lt; Disable Undo( state=0|1 )

**설명:** 이 옵션이 설정되어 있으면 데이터 테이블에 대한 모든 작업을 실행 취소할 수 없습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << disable undo( 1 );

```

### End Data Update

**구문:** obj &lt;&lt; End Data Update

**설명:** &apos;Begin Data Update&apos; 명령이 실행된 후 보류했던 모든 &apos;Update&apos; 메시지를 보냅니다. 많은 셀을 한꺼번에 업데이트하려는 경우에 유용합니다. 이는 데이터 셀의 변경에만 적용됩니다.

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

**구문:** obj &lt;&lt; Exclude Columns( &lt; 0|1 &gt; | &lt; { column1, column2, ... } &gt; )

**설명:** 모든 분석 실행에서 열을 제외합니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Exclude Columns( 1, {:Age, :Name} );

```

### Exit Filter View

**구문:** obj &lt;&lt; Exit Filter View

**설명:** 필터링되지 않은 보기로 돌아갑니다. 이미 필터링되지 않은 보기 상태인 경우 달라지는 것이 없습니다.

**JMP추가된 버전:** 19

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

**구문:** obj &lt;&lt; Expand All Column Groups

**설명:** 모든 열 그룹을 펼칩니다.

**JMP추가된 버전:** 18

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

**구문:** Fit Model( Y( columns ), Effects( columns ), Personality( "Standard Least Squares" ) )

**설명:** 분산 분석, 로지스틱 회귀, 분산 성분, 벌점 회귀, 단계별 회귀, 다변량 분산분석, 생존 모형 등의 선형 회귀 모형을 적합시킵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
dt << Fit Model( Y( :y ), Effects( :Drug, :x ), Personality( "Standard Least Squares" ), Run Model() );

```

### Get Active Filter View

**구문:** fv = obj &lt;&lt; Get Active Filter View

**설명:** 활성 필터 보기를 가져오고 FilterView 개체를 반환합니다.

**JMP추가된 버전:** 19

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

**구문:** obj &lt;&lt; Get All Columns As Matrix

**설명:** 데이터 테이블을 행렬로 반환합니다. 문자 열은 1부터 시작하여 정렬된 수준에 따라 번호가 매겨집니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
m = dt << Get All Columns As Matrix();
Show( m );

```

### Get As Report

**구문:** obj &lt;&lt; Get As Report

**설명:** 데이터 테이블의 보고서를 반환합니다.

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
jmp_report = New Window( "Big Class",
	Text Box( "Big Class" ),
	H List Box( Outline Box( "Big Class", dt << Get As Report ) ), 

);

```

**예제 2**

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

**구문:** obj &lt;&lt; Get Cell Height

**설명:** 행 표시 높이를 가져옵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
ht = dt << Get Cell Height;

```

### Get Column Group

**구문:** obj &lt;&lt; Get Column Group( name of column group | list of names )

**설명:** 열 그룹의 열 목록을 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << group columns( "xy", {:X, :y} );
dt << group columns( "pollutants", :Ozone :: :Lead );
dt << get column group( "xy" );

```

### Get Column Groups Names

**구문:** obj &lt;&lt; Get Column Groups Names

**설명:** 열 그룹의 이름을 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << group columns( "xy", {:X, :y} );
dt << group columns( "pollutants", :Ozone :: :Lead );
dt << get column groups names;

```

### Get Column Names

**구문:** obj &lt;&lt; Get Column Names( &lt;Numeric|Character|RowState&gt;, &lt;Continuous|Ordinal|Nominal&gt;,&lt;String&gt; )

**설명:** 데이터 테이블의 열 이름을 반환합니다. 문자열 키워드가 사용된 경우에는 문자열이 반환됩니다.

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

**구문:** obj &lt;&lt; Get Column Reference( list of column names )

**설명:** 목록에 있는 문자열의 열 참조를 반환합니다.

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
refList = dt << Get Column Reference( {"sex", "age"} );
Show( refList );

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
a = {1, 3, 4};
refList = dt << Get Column Reference( a );
Show( refList );

```

### Get Edit Lock

**구문:** obj &lt;&lt; Get Edit Lock

**설명:** 데이터 테이블에 허용되지 않은 연산자 목록 가져오기

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Set Edit Lock( "Add Rows", "Delete Columns" );
Wait( 2 );
dt << Get Edit Lock();

```

### Get Excluded Columns

**구문:** obj &lt;&lt; Get Excluded Columns

**설명:** 데이터 테이블에서 현재 제외된 열을 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:Name << Exclude;
exCols = dt << Get Excluded Columns;
Show( exCols );

```

### Get Excluded Rows

**구문:** obj &lt;&lt; Get Excluded Rows

**설명:** 데이터 테이블에서 현재 제외된 행을 반환합니다. Where을(를) 사용하는 것이 좋습니다.

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

**구문:** fv = obj &lt;&lt; Get Filter View( name | &lt;&lt;Temporary | &lt;&lt;Unfiltered )

**설명:** Get a filter view by name, or get one of the special filter views by using <<Temporary or <<Unfiltered. If a filter view by the given name does not exist, returns Empty().

**JMP추가된 버전:** 19

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

**구문:** { fv, ... } = obj &lt;&lt; Get Filter Views( &lt; Temporary(0|1) &gt;, &lt; Unfiltered(0|1) &gt; )

**설명:** 모든 필터 보기 목록을 가져옵니다. 기본적으로 임시 보기와 필터링되지 않은 보기는 포함되지 않습니다.

**JMP추가된 버전:** 19

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

**구문:** obj &lt;&lt; Get Header Height

**설명:** 열 머리글 표시 높이를 가져옵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
ht = dt << Get Header Height;

```

### Get Hidden Columns

**구문:** obj &lt;&lt; Get Hidden Columns

**설명:** 데이터 테이블에서 현재 숨겨진 열을 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:Weight << Hide;
hidCols = dt << Get Hidden Columns;
Show( hidCols );

```

### Get Hidden Rows

**구문:** obj &lt;&lt; Get Hidden Rows

**설명:** 데이터 테이블에서 현재 숨겨진 행을 반환합니다. Where을(를) 사용하는 것이 좋습니다.

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

**구문:** obj &lt;&lt; Get Label Columns

**설명:** 행에 라벨을 지정하는 데 사용된 열을 반환합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
labelCols = dt << Get Label Columns;
Show( labelCols );

```

### Get Labeled Rows

**구문:** obj &lt;&lt; Get Labeled Rows

**설명:** 데이터 테이블에서 현재 라벨이 지정된 행을 반환합니다. Where을(를) 사용하는 것이 좋습니다.

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

**구문:** obj &lt;&lt; Get Lock( state=0|1 )

**설명:** 데이터 테이블이 잠겨 있는지 확인합니다.

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

**구문:** obj &lt;&lt; Get MM SAS DATA Step for Formula Columns

**설명:** JMP 데이터 테이블에 계산식 열에 해당하는 모형 관리자 SAS DATA 스텝 코드를 생성합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Ratio", Formula( :height / :weight ) );
dt << Get MM SAS Data Step for Formula Columns;

```

### Get Name

**구문:** obj &lt;&lt; Get Name( &lt;"Ignore Extension"&gt; )

**설명:** 데이터 테이블의 표시 이름을 반환합니다. 선택적 인수인 &apos;Ignore Extension&apos;을 이 명령에 사용하면 확장자를 제외한 데이터 테이블 이름이 반환됩니다.

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
n = dt << Get Name();
Show( n );

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
n = dt << Get Name( "Ignore Extension" );
Show( n );

```

### Get Path

**구문:** obj &lt;&lt; Get Path

**설명:** 데이터 테이블의 전체 경로를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
path = dt << Get Path();
Show( path );

```

### Get Property

**구문:** obj &lt;&lt; Get Property( name )

**설명:** 데이터 테이블의 명명된 특성을 스크립트로 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
s = dt << Get Property( "Distribution" );
Show( s );

```

### Get Row ID Width

**구문:** obj &lt;&lt; Get Row ID Width

**설명:** 행 ID 영역의 표시 너비를 가져옵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
ht = dt << Get Row ID Width;

```

### Get Row States

**구문:** obj &lt;&lt; Get Row States

**설명:** 데이터 테이블의 모든 행에 대해 인코딩된 행 상태 값이 포함된 벡터를 반환합니다. Color Of와 같은 행 상태 함수에서는 인코딩된 행 상태 값이 행 상태 구조로 사용될 수 없습니다. 벡터를 직접 사용할 수 있는 방법은 예제 2를 참조하십시오.

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cereal.jmp" );
rs = dt << Get Row States;
Show( rs );

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cereal.jmp" );
rs = dt << GetRowStates;
w = Marker Of( As Row State( rs[3] ) );
dt2 = Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( dt2, 5 ) = Marker State( w );

```

### Get Rows Where

**구문:** obj &lt;&lt; Get Rows Where

**설명:** 데이터 테이블에서 Where 기준과 매칭되는 행을 반환합니다. 대신 Where을(를) 사용하는 것이 좋습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
r1 = dt << Get Rows Where( :sex == "M" );
r2 = Where( :sex == "M" );
Show( r1, r2 );

```

### Get SAS DATA Step for Formula Columns

**구문:** obj &lt;&lt; Get SAS DATA Step for Formula Columns

**설명:** JMP 데이터 테이블에 계산식 열에 해당하는 SAS DATA 스텝 코드를 생성합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Ratio", Formula( :height / :weight ) );
dt << Get SAS Data Step for Formula Columns;

```

### Get Script

**구문:** obj &lt;&lt; Get Script( &lt;script name&gt; )

**설명:** 요청된 스크립트를 반환합니다. 스크립트 이름을 생략하면 데이터 테이블의 텍스트 표현과 함께 데이터에 저장된 모든 스크립트를 반환합니다.

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
s = dt << Get Script;
New Window( "Script", Script Box( Char( Name Expr( s ) ) ) );

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
s = dt << Get Script( "Distribution" );

```

### Get Script Group

**구문:** obj &lt;&lt; Get Script Group( name of script group )

**설명:** 그룹의 스크립트 목록을 반환합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << group scripts(
	"GB",
	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts", "Graph Builder Line Chart",
	"Graph Builder Heat Map"}
);
dt << group scripts( "VL", {"Set Sex Value Labels", "Set Age Value Labels"} );
gb = dt << get script group( "GB" );
Wait( 1 );
dt << run script( gb[2] );

```

### Get Script Groups Names

**구문:** obj &lt;&lt; Get Script Groups Names

**설명:** 스크립트 그룹의 이름 목록을 반환합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << group scripts(
	"GB",
	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts", "Graph Builder Line Chart",
	"Graph Builder Heat Map"}
);
dt << group scripts( "VL", {"Set Sex Value Labels", "Set Age Value Labels"} );
gb = dt << get script groups names;

```

### Get Scroll Locked Columns

**구문:** obj &lt;&lt; Get Scroll Locked Columns

**설명:** 데이터 테이블에서 현재 스크롤 잠금이 설정된 열을 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:Name << Scroll Lock;
lockCols = dt << Get Scroll Locked Columns;
Show( lockCols );

```

### Get Selected Columns

**구문:** obj &lt;&lt; Get Selected Columns

**설명:** 데이터 테이블에서 선택된 열 이름을 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Go To( :weight );
names = dt << Get Selected Columns;
Show( names );

```

### Get Selected Properties

**구문:** obj &lt;&lt; Get Selected Properties( &lt;{list of properties}&gt; )

**설명:** 선택한 테이블 특성(변수 및 스크립트)을 목록으로 가져옵니다. 선택하는 대신 선택적 목록을 사용하여 가져올 특성을 지정할 수 있습니다.

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Properties( {2, 4} );
proplist = dt << Get Selected Properties();

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
proplist = dt << Get Selected Properties( {2, 4} );

```

### Get Selected Rows

**구문:** obj &lt;&lt; Get Selected Rows

**설명:** 데이터 테이블의 현재 선택된 행을 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Rows( 1 );
dt << Select Rows( 5 );
r = dt << Get Selected Rows();
Show( r );

```

### Get Table Script Names

**구문:** obj &lt;&lt; Get Table Script Names

**설명:** 데이터 테이블에 있는 모든 특성의 이름을 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
names = dt << Get Table Script Names;
Show( names );

```

### Get Table Variable

**구문:** obj &lt;&lt; Get Table Variable( name )

**설명:** 데이터 테이블에서 지정된 테이블 변수의 값을 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Set Table Variable( "Days", 42 );
var = dt << Get Table Variable( "Days" );
Show( var );

```

### Get Table Variable Names

**구문:** obj &lt;&lt; Get Table Variable Names

**설명:** 데이터 테이블에 있는 모든 변수의 이름을 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
names = dt << Get Table Variable Names;
Show( names );

```

### Get Tagged Columns

**구문:** obj &lt;&lt; Get Tagged Columns( tag|{tag1, tag2, ...}, [Intersection] )

**설명:** 제공된 태그와 매칭되는 열 목록을 반환합니다. 교차가 요청되면 나열된 모든 태그를 포함하는 열만 반환됩니다.

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

**구문:** dt &lt;&lt; Get Transforms()

**설명:** 이 데이터 테이블과 연결된 변환 열 목록을 가져옵니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Transform Column( "A", Formula( :B + 1 ) );
dt << Transform Column( "B", Formula( :height + 1 ) );
Show( dt << Get Transforms() );
dt << Delete Columns( {:A, :B} );

```

### Get as Matrix

**구문:** obj &lt;&lt; Get as Matrix( &lt;list of columns by name&gt;, &lt;list of columns by number&gt;, &lt;column range&gt; )

**설명:** 데이터 테이블의 지정된 열을 행렬로 반환합니다. 기본값은 모든 숫자 열입니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
m = dt << Get As Matrix();
Show( m );
x = dt << GetAsMatrix( {4, 5} );
Show( x );

```

### Group Columns

**구문:** obj &lt;&lt; Group Columns( first column, number )obj &lt;&lt; Group Columns( {column1, column2, ...})obj &lt;&lt; Group Columns(group name | Path({&lt;a&gt;, &lt;b&gt;, ...}), {column1, column2, ...})obj &lt;&lt; Group Columns( group name | Path({&lt;a&gt;, &lt;b&gt;, ...}), first column, number )

**설명:** 열 목록을 그룹화합니다.

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

**구문:** obj &lt;&lt; Group Scripts({ script1, script2, ...}) obj &lt;&lt; Group Scripts(group name | Path({&lt;a&gt;, &lt;b&gt;, ...}), {script1, script1, ...})

**설명:** 스크립트 목록을 그룹화합니다.

**JMP추가된 버전:** 14

**Nested group**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << group scripts(
	Path( {"GB", "Sample Graphs"} ),
	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts", "Graph Builder Line Chart",
	"Graph Builder Heat Map"}
);

```

**Simple group**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << group scripts(
	"GB",
	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts", "Graph Builder Line Chart",
	"Graph Builder Heat Map"}
);

```

### Has Column

**구문:** dt &lt;&lt; Has Column( name, &lt; Exact Match(1|0) &gt; )

**설명:** 데이터 테이블에 지정된 이름의 열이 있는지 여부를 조회합니다.

**JMP추가된 버전:** 18

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Has Column( "weight" );

```

**예제 2**

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

**구문:** obj &lt;&lt; Has data view

**설명:** 데이터 테이블에 표시되는 창이 열려 있으면 true를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << Has Data View();

```

### Hide Columns

**구문:** obj &lt;&lt; Hide Columns( &lt; 0|1 &gt; | &lt; { column1, column2, ... } &gt; )

**설명:** 데이터 격자에서 열을 숨깁니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Hide Columns( 1, {:Age, :Name} );

```

### Is Dirty

**구문:** obj &lt;&lt; Is Dirty

**설명:** 데이터 테이블이 수정되었는지 여부를 조회합니다.

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

**구문:** obj &lt;&lt; Is Linked Subset

**설명:** 데이터 테이블이 연결된 부분집합인지 여부 조회

**JMP추가된 버전:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
linkedSubset = dt << Subset( All Rows, Link To Original Data Table( 1 ) );
subset = dt << Subset( All Rows );
Show( dt << Is Linked Subset, linkedSubset << Is Linked Subset, subset << Is Linked Subset );

```

### JMP Query Builder

**구문:** obj &lt;&lt; JMP Query Builder

**설명:** 하나 이상의 JMP 데이터 테이블에 대한 쿼리를 생성합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << JMP Query Builder();

```

### Join

**구문:** obj &lt;&lt; Join( &lt;Private&gt;, &lt;Invisible&gt;,With( Data Table( name )), By Matching Columns( column1 = column2, ...), Selected( columns ), SelectedWith( columns ), &lt;Drop Multiples( 0|1, 0|1 )&gt;, &lt;Include nonmatches( 0|1, 0|1 )&gt;,&lt;Copy formula( 0|1 )&gt;, &lt;Suppress Formula Evaluation&gt;, &lt;Update&gt;, &lt;Merge Same Name Columns&gt;, &lt;Preserve Main Table Order&gt; )

**설명:** 여러 데이터 테이블을 하나의 새 데이터 테이블로 결합합니다. 행 할당, 열 값 매칭 또는 Cartesian 방식을 통해 데이터를 결합할 수 있습니다.

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

**구문:** obj &lt;&lt; Journal

**설명:** 데이터 테이블에서 저널을 만듭니다. 데이터 격자만 포함되고 노트, 변수 또는 스크립트는 포함되지 않습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Journal();

```

### Journal Link

**구문:** dt &lt;&lt; Journal Link( &lt; Save( &lt;filepath&gt; ) | Embed( ) &gt;, &lt; Button Name( "Ben") &gt; )

**설명:** 저널에 데이터 테이블 연결 버튼을 추가합니다. embed() 또는 save() 중 하나만 사용하십시오. Embed()에는 옵션이 없고 Save()의 옵션은 dt<<save()와 유사합니다. 버튼 라벨을 재정의하려면 ButtonName()을 사용하십시오. 새 연결 버튼을 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Journal Link(); // assumes the table can be saved at its current location; button gets name from table
dt << Journal Link( Embed() ); // embed JSL script to re-create table; button gets name from table
dt << Journal Link( Save( "$temp/DeleteMe1.jmp" ), ButtonName( "Fancy Name for Temporary File" ) );
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

**구문:** obj &lt;&lt; Last Modified

**설명:** 데이터 테이블에 마지막으로 저장된 수정 날짜를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
date = dt << Last Modified();
Show( date );

```

### Lock Data Table

**구문:** obj &lt;&lt; Lock Data Table( state=0|1 )

**설명:** 데이터 테이블을 잠가, 값을 편집하거나 추가할 수 없도록 합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Lock Data Table( 1 );
// Now try changing a value in the data table.

```

### MSA Variability Chart

**구문:** obj &lt;&lt; MSA Variability Chart( Y( column ), X( columns ) )

**설명:** 범주 간에 측정이 어떻게 다른지 보여 주는 계량형 차트를 표시하고 범주 간에 평균 및 분산이 어떻게 변경되는지 검토하는 분석을 수행합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );

```

### Make Indicator Columns

**구문:** obj &lt;&lt; Make Indicator Columns

**설명:** 명목형 또는 순서형 열을 범주 수만큼의 열로 변환합니다. 결과 열의 열 이름은 소스 열의 범주입니다. 결과 열의 값은 0 또는 1입니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
dt << Make Indicator Columns( columns( {:species, :season} ) );

```

### Make RowState Handler

**구문:** rs = dt &lt;&lt; Make RowState Handler( function(a) )

**설명:** 데이터 테이블에 대한 행 상태 처리기를 생성합니다. 함수의 인수는 행 상태가 변경되는 행을 보유합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
f = Function( {a}, Print( a ) );
rs = dt << make row state handler( f );
dt << Select Rows( 1 );
dt << Select Rows( 5 );

```

### Make SAS DATA Step

**구문:** sd = dt &lt;&lt; Make SAS Data Step( )sd = dt &lt;&lt; Make SAS Data Step( SaveJMPMetadata(true) )

**설명:** 데이터 테이블을 SAS DATA 스텝으로 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
sd = dt << Make SAS Data Step();
Show( sd );

```

### Make SAS DATA Step Window

**구문:** sd = dt &lt;&lt; Make SAS Data Step Window( )sd = dt &lt;&lt; Make SAS Data Step Window( SaveJMPMetadata(true) )

**설명:** 유형 SAS의 새 창을 열고 데이터 테이블에서 SAS DATA 스텝을 생성합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
sd = dt << Make SAS Data Step Window();

```

### Merge Referenced Data

**구문:** obj &lt;&lt; Merge Referenced Data

**설명:** 소스 테이블의 데이터를 참조된 열에 병합하고 연결을 끊어 테이블을 독립 실행형으로 설정합니다. 참조하는 열의 연결 참조 특성도 제거됩니다.

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

**구문:** obj &lt;&lt; Missing Data Pattern( columns( columns ), &lt;Output Table( name )&gt; )

**설명:** 데이터 테이블에서 결측값 패턴을 찾은 후 각 패턴 및 해당 빈도에 대한 테이블을 생성합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << Missing Data Pattern( columns( :POP, :Max deg. F Jan, :OZONE, :CO, :SO2, :NO, :PM10, :Lead ) );

```

### Move Column Group

**구문:** obj &lt;&lt; Move Column Group( name of group | Path({&lt;a&gt;, &lt;b&gt;, ...}), to first | to last | after(column) | after(group) | after(Path({&lt;a&gt;, &lt;b&gt;, ...})) )

**설명:** 열 그룹을 지정한 위치로 이동합니다. 열 그룹 이름을 생략하면 모든 그룹이 이동됩니다.

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

**구문:** obj &lt;&lt; Move Script Group( name of group | Path({&lt;a&gt;, &lt;b&gt;, ...}), to first | to last | after(script) | after(group) | after(Path({&lt;a&gt;, &lt;b&gt;, ...})) )

**설명:** 스크립트 그룹을 지정한 위치로 이동합니다. 스크립트 그룹 이름을 생략하면 모든 그룹이 이동됩니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << group scripts(
	"GB",
	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts", "Graph Builder Line Chart",
	"Graph Builder Heat Map"}
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

**구문:** obj &lt;&lt; Move Selected Scripts( script|list of scripts|group|Path({&lt;a&gt;, &lt;b&gt;, ...}), to first | to last | after(script) | after(group) | after(Path({&lt;a&gt;, &lt;b&gt;, ...})) )

**설명:** 스크립트를 지정한 위치로 이동합니다.

**JMP추가된 버전:** 14

**After group**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << group scripts(
	"GB",
	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts", "Graph Builder Line Chart",
	"Graph Builder Heat Map"}
);
dt << Move Selected scripts( {"Logistic"}, after( "GB" ) );

```

**Move Group**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << group scripts(
	Path( {"GB", "Graphs"} ),
	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts", "Graph Builder Line Chart",
	"Graph Builder Heat Map"}
);
dt << Move Selected scripts( Path( {"GB", "Graphs"} ), after( "Contingency" ) );

```

**To first**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Move Selected scripts(
	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts", "Graph Builder Line Chart",
	"Graph Builder Heat Map"},
	to first
);

```

### Move down

**구문:** obj &lt;&lt; Move down

**설명:** 데이터 테이블의 첫 번째 행에 있는 값을 열 이름으로 바꾸고 열 이름을 기본 시퀀싱 이름으로 바꿉니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Move down;

```

### Move up

**구문:** obj &lt;&lt; Move up

**설명:** 열 이름을 데이터 테이블의 첫 번째 행에 있는 값으로 바꿉니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Move up;

```

### Move up and append

**구문:** obj &lt;&lt; Move up and append

**설명:** 데이터 테이블의 첫 번째 행에 있는 값을 해당 열 이름에 추가하여 열 이름을 바꿉니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Move up and append;

```

### New Data Box

**구문:** obj &lt;&lt; New Data Box( &lt; &lt;&lt;Enable Filter Views(0|1) &gt; )

**설명:** 표시 상자 트리에 데이터 테이블 보기를 생성하고 현재 데이터 테이블을 지정된 데이터 테이블로 변경합니다. 선택적 Enable Filter Views 인수는 필터 보기를 허용할지 여부를 제어하며 기본값은 필터 보기를 허용합니다.

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

**구문:** obj &lt;&lt; New Data View

**설명:** 데이터 테이블의 새 보기를 만듭니다. 새 보기는 원래 보기에 연결되며 항목이 강조 표시되거나 변경되면 원래 보기에 영향을 줍니다. 동일한 테이블의 다른 부분으로 스크롤하려는 경우에 유용합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << New Data View();

```

### New Filter View

**구문:** fv = dt &lt;&lt; New Filter View( &lt; name &gt;, &lt; Copy From(name|obj) &gt;, &lt; Temporary(0|1) &gt;, &lt; Active(0|1) &gt;, &lt; DataFilter(expr) &gt;)

**설명:** 새 필터 보기를 생성하고 생성된 FilterView 개체가 반환됩니다. 새 필터 보기는 기본적으로 활성화됩니다. 필터 보기의 이름을 지정하지 않으면 &apos;Temporary&apos;를 &apos;0&apos;으로 설정한 경우 외에는 &apos;temporary&apos;가 사용됩니다.

**JMP추가된 버전:** 19

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
dt << New Filter View(
	"Dream",
	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) )
);

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
dt << New Filter View(
	"Dream Inverse",
	Data Filter( Data Filter( Inverse( 1 ), Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) ) )
);

```

**예제 3**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
fv = dt << New Filter View( Data Filter( Add Filter( Columns( :Sex ), Where( Is Missing( :Sex ) ) ) ) );
dt << New Filter View( "Unknown Sex", CopyFrom( fv ), Active( 0 ) );

```

### New Script

**구문:** New Property( name, script ) New Script( name, script )

**설명:** 데이터 테이블에 새 특성을 생성하고 스크립트로 설정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Script( "New Script", Distribution( Column( :Height, :Weight ), By( :sex ) ) );

```

### New Table Variable

**구문:** obj &lt;&lt; New Table Variable( name, number )

**설명:** 데이터 테이블에 새 변수를 생성하고 상수 값으로 설정합니다. 이름이 같은 기존 변수가 있으면 새 변수 이름에 숫자가 추가되어 고유하게 만듭니다. 대부분의 경우 유사한 &apos;테이블 변수 설정&apos; 명령을 사용하는 것이 좋습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Table Variable( "Days", 42 );

```

### OC Curves

**구문:** obj &lt;&lt; OC Curves

**설명:** 공정 변화를 감지하지 못할 확률을 변화 크기의 함수로 표시하는 그래프를 생성합니다.

**JMP추가된 버전:** 16

### Partition

**구문:** obj &lt;&lt; Partition( Y( column ), X( column(s) ) )

**설명:** 예측 변수와 반응 값 사이의 관계에 따라 데이터를 재귀적으로 분할하여 의사 결정 나무를 생성합니다. 반응과 예측 변수는 모두 연속형이거나 모두 범주형일 수 있습니다.

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

**구문:** obj &lt;&lt; Paste Column Properties

**설명:** 클립보드의 여러 열 특성 목록을 여러 열에 붙여 넣습니다. 데이터 테이블에서 대상 열을 선택하는 대신 대상 열 목록을 지정할 수도 있습니다.

**JMP추가된 버전:** 15

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

**구문:** obj &lt;&lt; Recode

**설명:** 선택한 열의 이전 값을 새 값으로 재코딩하십시오.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Go To( :weight );
dt << Recode;

```

### Recode Column

**구문:** obj &lt;&lt; Recode Column(&lt;source column reference&gt;, {&lt;transform&gt;, ...}, &lt;Update Properties(0|1)&gt;, &lt;By Word(Delimiters(&lt;chars&gt;)&gt;, Target Column(&lt;column reference&gt; | &lt;column name&gt;))

**설명:** 나열된 변환을 소스 열의 각 값에 적용하고 결과를 원래 열 또는 지정된 대상 열에 저장합니다. &apos;단어별&apos; 옵션은 제공된 문자 데이터를 더 작은 입력 값으로 분할합니다. 입력 값이 결정되면 해당 값에 개별적으로 변환이 적용됩니다.

명령이 실행되는 동안 특수 JSL 변수가 채워집니다.

	_rcNow는 이전 변환 후 입력의 현재 값입니다.

	_rcOrig는 입력의 원래 값입니다.

**JMP추가된 버전:** 15

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

**구문:** obj &lt;&lt; Rename Column Group( oldname | Path({&lt;a&gt;, &lt;b&gt;, ...}), newname )

**설명:** 열 그룹의 이름을 바꿉니다.

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

**구문:** obj &lt;&lt; Rename Script Group( oldname | Path({&lt;a&gt;, &lt;b&gt;, ...}), newname )

**설명:** 스크립트 그룹의 이름을 바꿉니다.

**JMP추가된 버전:** 14

**Nested group**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << group scripts(
	Path( {"GB", "Graphs"} ),
	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts", "Graph Builder Line Chart",
	"Graph Builder Heat Map"}
);
dt << rename script group( Path( {"GB", "Graphs"} ), "My Graphs" );

```

**Simple group**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << group scripts(
	"GB",
	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts", "Graph Builder Line Chart",
	"Graph Builder Heat Map"}
);
dt << rename script group( "GB", "GraphBuilders" );

```

### Rename Table Property

**구문:** obj &lt;&lt; Rename Table Property( old name, new name )

**설명:** 지정된 테이블 특성의 이름을 바꿉니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Script( "New Script", Distribution( Column( :Height, :Weight ), By( :sex ) ) );
Wait( 1 );
dt << Rename Table Property( "New Script", "Great Script" );

```

### Rename Table Script

**구문:** obj &lt;&lt; Rename Table Script( old name, new name )

**설명:** 지정된 테이블 스크립트의 이름을 바꿉니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Script( "New Script", Distribution( Column( :Height, :Weight ), By( :sex ) ) );
Wait( 1 );
dt << Rename Table Script( "New Script", "Great Script" );

```

### Rename Table Variable

**구문:** obj &lt;&lt; Rename Table Variable( old name, new name )

**설명:** 지정된 테이블 변수의 이름을 바꿉니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Table Variable( "Days", 42 );
Wait( 2 );
dt << Rename Table Variable( "Days", "Hours" );

```

### Rerun Formulas

**구문:** obj &lt;&lt; Rerun Formulas

**설명:** 데이터 테이블에 있는 모든 열 계산식을 재실행합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Central Limit Theorem.jmp" );
dt << Add Rows( 100 );
dt << Rerun Formulas;

```

### Reset Transforms

**구문:** dt &gt;&gt; Reset Transforms()

**설명:** 변환 열에 액세스하면 이후의 호출을 위해 데이터를 캐시합니다. 이 기능은 캐시된 데이터를 제거합니다. 열에 다시 액세스하면 데이터가 재생성됩니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Reset Transforms();

```

### Revert

**구문:** obj &lt;&lt; Revert

**설명:** 데이터 테이블에 대한 변경 사항을 되돌립니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Set Row States(
	[33, 33, 33, 33, 33, 97, 97, 97, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 768]
);
Wait( 2 );
dt << revert();

```

### Run Formulas

**구문:** obj &lt;&lt; Run Formulas

**설명:** 보류 중인 모든 계산식 실행을 수행합니다. 모든 계산식을 실행하지는 않습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Central Limit Theorem.jmp" );
dt << Add Rows( 10000 );
dt << Run Formulas();
Distribution( Column( :"N=1"n, :"N=5"n, :"N=10"n ) );

```

### Run Script

**구문:** obj &lt;&lt; Run Script( name )

**설명:** 데이터 테이블에 특성으로 저장된 명명된 스크립트를 실행합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Run Script( "Distribution" );

```

### Save

**구문:** obj &lt;&lt; Save( &lt;filepath&gt;, &lt;file type&gt; ) obj &lt;&lt; Save As( filepath, &lt;file type&gt; )

**설명:** 데이터 테이블을 지원되는 형식으로 저장합니다. 지원되는 형식에는 .jmp, .xls, .xlsx, .txt, .csv, .tsv, .xpt, .v8xpt, .stx 등이 있습니다. 일부 형식은 Windows에서만 지원됩니다. 자세한 내용은 "JMP 사용"에서 확인하십시오.

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

**구문:** obj &lt;&lt; Save( &lt;filepath&gt;, &lt;file type&gt; ) obj &lt;&lt; Save As( filepath, &lt;file type&gt; )

**설명:** 데이터 테이블을 지원되는 형식으로 저장합니다. 지원되는 형식에는 .jmp, .xls, .xlsx, .txt, .csv, .tsv, .xpt, .v8xpt, .stx 등이 있습니다. 일부 형식은 Windows에서만 지원됩니다. 자세한 내용은 "JMP 사용"에서 확인하십시오.

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

**구문:** obj &lt;&lt; Save Database( connectInfo, TableName )

**설명:** 데이터 테이블을 다시 데이터베이스에 저장합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Save Database( "Connect Dialog", "My_Class" );

```

### Screen Predictors

**구문:** obj &lt;&lt; Screen Predictors

**설명:** &apos;Predictor Screening&apos;의 별칭이자 기존 이름입니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Bands Data.jmp" );
obj = dt << Predictor Screening( Y( :Banding? ), X( Column Group( "Predictors" ) ) );

```

### Select Column Group

**구문:** obj &lt;&lt; Select Column Group( name of group | list of names )

**설명:** 열 그룹을 선택합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << group columns( "xy", {:X, :y} );
dt << group columns( "pollutants", :Ozone :: :Lead );
dt << select column group( "xy", "pollutants" );

```

### Select Properties

**구문:** obj &lt;&lt; Select Properties( { property1, property2, ... )

**설명:** 지정된 테이블 특성을 선택합니다. 여기서 목록은 특성 이름 목록 또는 특성에 대한 인덱스 목록일 수 있습니다.

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
proplist = dt << Select Properties( {2, 4} );

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
proplist = dt << Select Properties( {"Bivariate", "Logistic"} );

```

### Select Script Group

**구문:** obj &lt;&lt; Select Script Group( &lt;name of group | { group1, group2, ...} &gt; )

**설명:** 스크립트 그룹을 선택합니다. 스크립트 그룹을 제공하지 않으면 모든 그룹이 선택됩니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << group scripts(
	"GB",
	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts", "Graph Builder Line Chart",
	"Graph Builder Heat Map"}
);
dt << group scripts( "VL", {"Set Sex Value Labels", "Set Age Value Labels"} );
Wait( 1 );
dt << select script group( "VL" );

```

### Select Scripts

**구문:** obj &lt;&lt; Select Scripts( &lt;name of script | { script1, script2, ...} &gt; )

**설명:** 명명된 스크립트를 선택합니다.

**JMP추가된 버전:** 14

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << group scripts(
	"GB",
	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts", "Graph Builder Line Chart",
	"Graph Builder Heat Map"}
);
dt << group scripts( "VL", {"Set Sex Value Labels", "Set Age Value Labels"} );
Wait( 1 );
dt << select scripts( {"Distribution", "Graph Builder Heat Map"} );

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << group scripts(
	"GB",
	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts", "Graph Builder Line Chart",
	"Graph Builder Heat Map"}
);
dt << group scripts( "VL", {"Set Sex Value Labels", "Set Age Value Labels"} );
Wait( 1 );
a = dt << get script group( "GB" );
dt << select scripts( a );

```

### Select columns

**구문:** obj &lt;&lt; Select columns( &lt;column&gt;, &lt;column&gt;, ... )

**설명:** 지정한 열을 선택합니다. 모든 열을 선택하려면 &apos;All&apos; 키워드를 사용하십시오.

**JMP추가된 버전:** 14

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
dt << Select Columns( :Height );

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
dt << Select Columns( "All" );

```

**예제 3**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
clist = {:Height, :Weight};
dt << Select Columns( clist );

```

### Sequencing Variants Toolset

**구문:** obj &lt;&lt; Sequencing Variants Toolset

**설명:** 시퀀싱 변이 도구 집합 추가기능 플랫폼 인터페이스

### Set Active Filter View

**구문:** obj &lt;&lt; Set Active Filter View( name | obj )

**설명:** 활성 필터 보기를 설정합니다.

**JMP추가된 버전:** 19

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

**구문:** obj &lt;&lt; Set Cell Height( number )

**설명:** 각 데이터 테이블 셀의 표시 높이를 설정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Set Cell Height( 20 );

```

### Set Dirty

**구문:** obj &lt;&lt; Set Dirty( state=0|1 )

**설명:** 데이터 테이블이 변경되지 않은 경우에도 데이터 테이블을 변경된 것으로 표시합니다. 닫을 때 저장할지 묻는 메시지를 표시하려는 경우에 유용합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Set Dirty();

```

### Set Edit Lock

**구문:** obj &lt;&lt; Set Edit Lock( [ &lt;"Modify Cells"&gt;, &lt;"Add rows"&gt;, &lt;"Add Columns"&gt;, &lt;"Delete Rows"&gt;, &lt;"Delete Columns"&gt;] )

**설명:** 데이터 테이블에 지정된 연산자를 허용하지 않습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Set Edit Lock( "Add Rows", "Delete Columns" );

```

### Set Header Height

**구문:** obj &lt;&lt; Set Header Height( number )

**설명:** 열 머리글 표시 높이를 설정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Set Header Height( 20 );

```

### Set Label Columns

**구문:** obj &lt;&lt; Set Label Columns( column(s) )

**설명:** 데이터 테이블의 선택된 열에 라벨 역할을 할당합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
Wait( 1 );
dt << Set Label Columns( :City, :State );

```

### Set Matrix

**구문:** obj &lt;&lt; Set Matrix( [ matrix with rows separated by commas ] )

**설명:** 행렬에서 데이터 테이블을 생성합니다.

```jsl

Names Default To Here( 1 );
dt = New Table( "B" );
dt << Set Matrix( [12 59 95, 12 61 123, 12 55 74, 12 66 145] );

```

### Set Name

**구문:** obj &lt;&lt; Set Name( new TableName )

**설명:** 데이터 테이블의 이름을 변경합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Set Name( "New Class" );

```

### Set Property

**구문:** obj &lt;&lt; Set Property( name, script )

**설명:** 데이터 테이블에 새 특성을 생성하고 스크립트로 설정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Set Property( "New Script", Distribution( Column( :Height, :Weight ), By( :sex ) ) );

```

### Set Row ID Width

**구문:** obj &lt;&lt; Set Row ID Width( number )

**설명:** 행 ID 영역의 표시 너비를 설정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Set Row ID Width( 80 );

```

### Set Row States

**구문:** obj &lt;&lt; Set Row States( [state1, state2, ... stateN] )

**설명:** 데이터 테이블의 모든 행에 대한 행 상태를 설정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Set Row States(
	[33, 33, 33, 33, 33, 97, 97, 97, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 768]
);

```

### Set Scroll Lock Columns

**구문:** obj &lt;&lt; Set Scroll Lock Columns( column(s) )

**설명:** 데이터 테이블의 선택된 열을 잠가, 스크롤할 수 없도록 합니다. 열이 잠겨 있음을 나타내기 위해 배경 색상이 바뀝니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << Set Scroll Lock Columns( :City );

```

### Set Table Variable

**구문:** obj &lt;&lt; Set Table Variable( name, number )

**설명:** 데이터 테이블에 새 변수를 생성하고 상수 값으로 설정합니다. 이름이 같은 기존 변수를 덮어씁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Set Table Variable( "Days", 42 );

```

### Show Header Filter Icons

**구문:** obj &lt;&lt; Show Header Filter Icons( state=0|1 )

**설명:** Show or hide the filter icons on columns in the current filter view.

**JMP추가된 버전:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lipid Data.jmp" );
dt << Show Header Filter Icons( 0 );

```

### Show Header Graphs

**구문:** obj &lt;&lt; Show Header Graphs( state=0|1 )

**설명:** Show or hide the header graphs in the data table display.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lipid Data.jmp" );
dt << Show Header Graphs( 0 );

```

### Show Header Groups

**구문:** obj &lt;&lt; Show Header Groups( state=0|1 )

**설명:** Show or hide the column groups in the data table display.

**JMP추가된 버전:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lipid Data.jmp" );
dt << Show Header Groups( 0 );

```

### Show Header Statistics

**구문:** obj &lt;&lt; Show Header Statistics( state=0|1 )

**설명:** Show or hide the header statistics in the data table display.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lipid Data.jmp" );
dt << Show Header Statistics( 0 );

```

### Show Header Tags

**구문:** obj &lt;&lt; Show Header Tags( state=0|1 )

**설명:** Show or hide the column tags in the data table display.

**JMP추가된 버전:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lipid Data.jmp" );
dt << Show Header Tags( 0 );

```

### Show Hidden Columns In Columns List

**구문:** obj &lt;&lt; Show Hidden Columns In Columns List( state=0|1 )

**설명:** 데이터 테이블 열 목록에서 숨겨진 열을 제외하려면 해제합니다. 이러한 열은 데이터 격자에 표시되지 않습니다.

**JMP추가된 버전:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << Hide Columns( 1, {:"pop- m"n, :Max deg. F Jan, :X, :Y} );
Wait( 1 );
dt << Show Hidden Columns In Columns List( 0 );

```

### Show Transforms

**구문:** dt &lt;&lt; Show Transforms()

**설명:** 이 데이터 테이블 및 해당 플랫폼과 연결된 변환 열에 대한 정보를 로그에 출력합니다. 이것은 정보 제공용이며 형식이 변경될 수 있으므로 파싱하면 안 됩니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Transform Column( "A", Formula( :height + 1 ) );
dt << Show Transforms();
dt << Delete Columns( :A );

```

### Sort

**구문:** obj &lt;&lt; Sort( &lt;Private&gt;, &lt;Invisible&gt;, &lt;Replace table&gt;, By( column ), Order( ascending|descending ) )

**설명:** 지정된 열을 기준으로 오름차순 또는 내림차순으로 정렬되는 새 데이터 테이블을 생성합니다.

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Sort( By( :name ), Order( Ascending ) );

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Sort( replace table, By( :name ), Order( Ascending ) );

```

### Split

**구문:** obj &lt;&lt; Split( Split( columns ), Split by( column ), &lt;Group(column)&gt;, &lt;Private&gt;|&lt;Invisible&gt;, &lt;Remaining Columns( Keep All | Drop All | Drop( columns ) | Keep( columns ) )&gt;, &lt;Copy formula( 0|1 )&gt;, &lt;Suppress formula evaluation( 0|1 )&gt;, &lt;Sort by Column Property&gt;, &lt;Output Table( "name" )&gt; )

**설명:** 한 열의 여러 행이 여러 열의 한 행으로 매핑되는 새 데이터 테이블을 생성합니다.

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

**구문:** obj &lt;&lt; Stack( &lt;Private&gt;, &lt;Invisible&gt;, columns( columns ), &lt;Source Label Column( string )&gt;, &lt;Stacked Data Column( string )&gt;, &lt;Copy formula( 0|1 )&gt;, &lt;Number of Series(n)&gt;, &lt;Contiguous&gt;, &lt;Drop All Other Columns(1) | Name("Non-stacked columns")(Keep( col1, ... )) | Name("Non-stacked columns")(Drop( col1, ... ))&gt;, &lt;Output Table( "name" )&gt;) )

**설명:** 단일 열로 쌓은 여러 열의 값으로 새 데이터 테이블을 생성합니다.

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
dt << Stack(
	columns( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Source Label Column( "Time" ),
	Stacked Data Column( "Log Hist" )
);

```

**예제 2**

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

**예제 3**

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

**구문:** obj &lt;&lt; Subscribe( Key( &lt;"client"&gt; ), OnDeleteColumns| OnAddColumns| OnAddRows| OnDeleteRows| OnRenameColumn | OnClose | OnSave | OnRename (function) )

**설명:** 구독하여 데이터 테이블의 변경 사항과 관련된 메시지를 가져옵니다. 키는 구독 이름이므로 참조될 수 있습니다. 선택적으로 사용되는 변수인 client는 데이터 테이블에 대해 닫기가 시도될 때 닫기 확인을 트리거합니다. 함수는 이전에 정의된 함수의 이름이거나 함수 자체일 수 있습니다. On Close는 함수에 대해 하나의 인수(데이터 테이블)만 필요로 합니다. 다른 메시지에는 선택적 인수(영향을 받는 열 목록 또는 행 수)가 필요합니다. 각 구독은 구독을 취소할 때까지 유효합니다.

**예제 1**

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

**예제 2**

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

**예제 3**

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

**구문:** obj &lt;&lt; Subset( &lt;Private&gt;, &lt;Invisible&gt;, &lt;Selected columns&gt;, &lt;Columns(column list)&gt;, &lt;All rows | Selected Rows | Filtered Rows(where clause) | Rows([number, number, ...])&gt;, &lt;By(column list)&gt;, &lt;Sampling Rate(fraction)&gt;, &lt;Sample Size(integer)&gt;, &lt;Stratify(column list)&gt;, &lt;Link to original data table(0|1)&gt;, &lt;Copy formula(0|1)&gt;, &lt;Suppress Formula Evaluation&gt;, &lt;Keep by columns&gt; )

**설명:** 소스 데이터 테이블의 선택된 행 및 열을 이용하여 새 데이터 테이블을 생성합니다. 부분집합을 생성하기 위해 행을 무작위로 선택할 수도 있습니다.

**기준**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Subset( By( :sex ), Keep by columns );

```

**층화 표본**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Subset( Sample Size( 10 ), Stratify( :sex ) );

```

**필터링된 행**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Subset( Filtered Rows( :age == 14 & Contains( :name, "E" ) ) );

```

**행**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Subset( Rows( [28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40] ) );

```

### Summary

**구문:** obj &lt;&lt; Summary( &lt;Private&gt;, &lt;Invisible&gt;, FREQ(column | "none"), WEIGHT(column | "none"),Group( columns ),Subgroup(columns), &lt;N (column)&gt;, &lt;Mean( column )&gt;, &lt;Std Dev( column )&gt;, &lt;Min( column )&gt;, &lt;Max( column )&gt;, &lt;Range( column )&gt;, &lt;Sum( column )&gt;, &lt;CV( column )&gt;...,Include marginal statistics, Link to original data table (0|1),statistics column name format( "stat(column)" | "column" | "stat of column" | "column stat" | "stat") )

**설명:** 요약 통계량에 대한 새 데이터 테이블을 생성합니다. 지정할 경우 그룹화 변수의 각 수준 또는 여러 그룹화 변수의 각 수준 조합에 대한 행이 있습니다.

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Summary( Group( :Age ), subgroup( :sex ), Mean( :Height ), Include marginal statistics );

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Summary( Group( :Age ), Mean( :Height ), statistics column name format( "stat of column" ) );

```

### Suppress Formula Eval

**구문:** obj &lt;&lt; Suppress Formula Eval( state=0|1 )

**설명:** 계산식 실행을 제한하거나 활성화합니다. 행 추가, 여러 분석 실행 및 정렬을 빠르게 수행하려는 경우에 유용합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Central Limit Theorem.jmp" );
dt << Add Rows( 2000 );
dt << Suppress Formula Eval( 1 );
dt << Add Rows( 2000 );
dt << Suppress Formula Eval( 0 );

```

### Text to Columns

**구문:** obj &lt;&lt; Text to Columns( delimiters(&lt;"separator"&gt;, &lt;TAB&gt;, &lt;NEWLINE&gt;), columns(column1, column2, ...) )

**설명:** 구분자가 포함된 문자열 열을 여러 개의 별도의 열로 변환합니다. 결과 열은 표시자 열일 수 있습니다. 구분자는 모든 문자, TAB 키워드 또는 NEWLINE 키워드일 수 있습니다.

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
dt << Text To Columns( delimiter( "," ), columns( :Brush Delimited ) );

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
dt << Text To Columns( delimiter( "," ), columns( :Brush Delimited ), Make Indicator Columns( 1 ) );

```

### Torch Deep Learning

**구문:** obj &lt;&lt; Torch Deep Learning

**설명:** Torch Deep Learning 추가기능 플랫폼에 대한 인터페이스

### Transform Column

**구문:** dt &lt;&lt; Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Replace(0|1)], [Private(0|1)], [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]

**설명:** 목표 테이블과 연결된 변환 열을 생성합니다. 변환 열은 실제 열처럼 액세스할 수 있습니다. 

	이름: 열 이름입니다.

	계산식: 변환 열의 데이터를 정의하는 계산식입니다.

	바꾸기: 이 플래그를 사용하는 경우, 기존 변환과 동일한 이름으로 정의된 변환이 기존 변환을 바꿉니다. 이 플래그를 사용하지 않는 경우, 변환이 동등하면 기존 변환이 반환되고 그렇지 않으면 새 열의 이름이 고유하게 변경됩니다.

	비공개: 이 플래그를 사용하면 열 선택기 목록에 열이 표시되지 않습니다.

	데이터 유형: 필요에 따라 데이터 유형을 지정합니다. 지정하지 않으면 첫 번째 행에서 추론됩니다.

	모델링 유형: 필요에 따라 모델링 유형을 지정합니다. 지정하지 않으면 데이터 유형의 기본값이 사용됩니다.

	열 특성: 설정할 표준 열 특성입니다. 열을 생성한 후 해당 열에 특성을 설정할 수도 있습니다.

**JMP추가된 버전:** 16

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

**구문:** obj &lt;&lt; Transpose( &lt;Private&gt;, &lt;Invisible&gt;,columns( columns ), By( column ), &lt;Label( column )&gt;, &lt;Output Table( name )&gt; )

**설명:** 소스 테이블에서 행과 열이 교환된 새 데이터 테이블을 생성합니다.

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

**구문:** obj &lt;&lt; Type 1 Gauge( Y( column ) )

**설명:** 한 부품의 측정 공정 능력을 평가하기 위해 유형 1 게이지 방법을 사용하여 연속형 데이터에 대한 측정 시스템을 분석합니다.

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

**구문:** obj &lt;&lt; Ungroup Columns( {column1, column2, ...} | Column Group( group name ) )

**설명:** 열 목록 그룹을 해제합니다.

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
dt << Group Columns( "Monday", BP 8M, 3 );
dt << Group Columns( "Wednesday", BP 8W, 3 );
dt << Group Columns( "Friday", BP 8F, 3 );
Wait( 2 );
dt << Ungroup Columns();

```

**예제 2**

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

**구문:** obj &lt;&lt; Ungroup Scripts( name of script group | list of scripts )

**설명:** 스크립트 목록의 그룹 해제 스크립트가 제공되지 않은 경우 선택된 스크립트가 해당 그룹에서 분리됩니다. 제공된 스크립트도 없고 선택된 스크립트도 없으면 모든 그룹에 대해 그룹화가 취소됩니다.

**JMP추가된 버전:** 14

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << group scripts(
	"GB",
	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts", "Graph Builder Line Chart",
	"Graph Builder Heat Map"}
);
dt << group scripts( "VL", {"Set Sex Value Labels", "Set Age Value Labels"} );
Wait( 1 );
dt << ungroup scripts( "VL" );
Wait( 1 );
dt << ungroup scripts( {"Graph Builder Line and Bar Charts", "Graph Builder Heat Map"} );

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << group scripts(
	"GB",
	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts", "Graph Builder Line Chart",
	"Graph Builder Heat Map"}
);
dt << group scripts( "VL", {"Set Sex Value Labels", "Set Age Value Labels"} );
Wait( 1 );
dt << select scripts( {"Graph Builder Smoother Line", "Graph Builder Line Chart"} );
Wait( 1 );
dt << ungroup scripts();

```

### Unsubscribe

**구문:** obj &lt;&lt; Unsubscribe( Key, OnDeleteColumns| OnAddColumns| OnAddRows| OnDeleteRows| OnClose | OnColRename | All )

**설명:** 데이터 테이블에 대한 이전 구독을 취소합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Subscribe( "myname", On Close( Print( "Closing Data table" ) ) );
dt << Unsubscribe( "myname", On Close );

```

### Update

**구문:** obj &lt;&lt; Update( With( Data Table( name )), Match Columns( column1 = column2, ...), Selected( columns ), Add columns from Update table(&lt;ALL&gt;, &lt;NONE&gt;, &lt;{column1, column2, ...}&gt;), Replace columns in main table(&lt;ALL&gt;, &lt;NONE&gt;, &lt;{column1, column2, ...}&gt;), &lt;Ignore missing&gt; )

**설명:** 선택한 열을 바꾸거나 추가하여 업데이트된 데이터 테이블을 원래 데이터 테이블에 병합합니다.

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Trial1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Little.jmp" );
dt << Update(
	With( Data Table( "Little" ) ),
	Match Columns( :popcorn = :popcorn, :batch = :batch, :oil amt = :oil )
);

```

**예제 2**

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

**예제 3**

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

**구문:** obj &lt;&lt; Update From Database( connectInfo )

**설명:** 테이블의 데이터를 데이터베이스에서 다시 가져온 데이터로 업데이트합니다.

```jsl

Names Default To Here( 1 );
dt = Open Database( "DSN=somedb; UID=userid;pwd=PW", "SELECT * FROM DB.TABLE" );
dt << Update From Database( "Connect Dialog" );

```

### XGBoost

**구문:** obj &lt;&lt; XGBoost

**설명:** Stochastic 그래디언트 부스트 예측 모델링을 위한 XGBoost에 대한 시험적 인터페이스입니다.

### set private

**구문:** obj &lt;&lt; set private( &lt;1|0&gt; )

**설명:** 테이블을 비공개로 설정합니다. 비공개 테이블은 데이터 테이블 목록 및 구독에서 생략됩니다.

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

### 항목 메시지

#### Add Column Properties

**구문:** obj &lt;&lt; Add Column Properties

**설명:** 선택한 열에 특성을 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Age << Add Column Properties( List Check( {17, 16, 15, 14, 13, 12} ) );

```

#### Add From Row States

**구문:** obj &lt;&lt; Add From Row States

**설명:** 행 상태 열을 기본 상태가 아닌 현재 사용되는 모든 행 상태 변경 사항으로 업데이트합니다.

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

**구문:** obj &lt;&lt; Add To Row States

**설명:** 기본 상태가 아닌 열의 모든 행 상태 값을 데이터 테이블에서 현재 사용되는 행 상태에 복사합니다.

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

**구문:** :col &lt;&lt; Codes To Labels(&lt;AssociativeArray&gt;|&lt;ListOfAssignments&gt;)

**설명:** 원래 코드에 해당하는 값 라벨을 사용하여 문자 값 열을 생성합니다.

**JMP추가된 버전:** 17

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Big Class.jmp" );
:age << Value Labels( {12 = "12!", 13 = "13!", 14 = "14!", 15 = "15!", 16 = "16!", 17 = "17!"} );
:age << Codes to Labels;

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Big Class.jmp" );
:sex << Labels to Codes( ["F" => 1, "M" => 2] );
:sex << Codes To Labels( [1 => "Female", 2 => "Male"] );

```

**예제 3**

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Big Class.jmp" );
:sex << Labels to Codes( ["F" => 1.5, "M" => 2.5] );
:sex << Codes To Labels( {1.5 = "Female", 2.5 = "Male"} );

```

#### Color Cell by Value

**구문:** obj &lt;&lt; Color Cell by Value( state=0|1 )

**설명:** 열의 셀 표시 색상을 변경합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Age << Set Property(
	"Value Colors",
	{12 = -13977430, 13 = -3780930, 14 = -4157407, 15 = -13596965, 16 = -2210961, 17 = -10562523}
);
Wait( 1 );
:Age << Color Cell by Value( 1 );

```

#### Color Cells

**구문:** obj &lt;&lt; Color Cells( color, &lt;row | { row1, row2, ...} &gt; )

**설명:** 열의 셀에 지정된 색상을 적용합니다. 행이 지정되지 않은 경우 전체 열에 동일한 색상이 적용됩니다.

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Age << Color Cells( "Red" );

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
a = {1, 3, 5};
:Age << Color Cells( "Red", a );

```

**예제 3**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
a = {1, 3, 5};
b = {2, 4, 6};
:height << color cells( {{"Red", a}, {"blue", b}} );

```

#### Compact

**구문:** :col &lt;&lt; Compact( &lt;1|0&gt; )

**설명:** 각 값의 복사본을 하나만 저장하여 결과적으로 메모리를 절약하고 일부 작업 속도를 높일 수 있도록 문자 열의 내부를 변경합니다. 선택적 &apos;Save Format&apos;은 열이 저장되는 형식을 제어합니다. 압축 형식은 크기가 작고 로드 속도가 빠르지만 JMP 17 및 이전 버전에서 테이블을 열 수 없습니다. &apos;Default&apos; 형식은 저장 형식 환경 설정을 사용합니다.

**JMP추가된 버전:** 18

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Air Traffic.jmp" );
:Airline << Compact();

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Air Traffic.jmp" );
:Airline << Compact();
:Airline << Get Compact;

```

#### Convert to Table Column

**구문:** obj &lt;&lt; Convert to Table Column

**설명:** 변환 열을 데이터 테이블에 추가합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Transform Column( "New Col", Formula( 1 ) );
:NewCol << Convert to Table Column();

```

#### Copy from Row States

**구문:** obj &lt;&lt; Copy from Row States

**설명:** 현재 데이터 테이블에서 사용되는 모든 행 상태 값을 열에 복사합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death.jmp" );
dt << New Column( "Row State Col", Row State, Copy from Row States );

```

#### Copy to Row States

**구문:** obj &lt;&lt; Copy to Row States

**설명:** 열의 모든 행 상태 값을 데이터 테이블에서 현재 사용되는 행 상태에 복사합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Pickles.jmp" );
col = Column( "Time Marker" );
Wait( 2 );
col << Copy To Row States();

```

#### Data Type

**구문:** obj &lt;&lt; Data Type( "Numeric"|"Character"|"Expression"|"Row State", &lt;Format("format string")&gt;, &lt;Input Format("format string")&gt;, &lt;1|2|4&gt;, &lt; &lt;&lt;Fail On Conversion Error &gt;, &lt; &lt;&lt;Return Failed Rows &gt; )

**설명:** 열의 데이터 유형을 설정합니다. 숫자 열인 경우 선택적 인수를 사용하여 형식, 입력 형식 및 너비(바이트)도 설정할 수 있습니다. &apos;Fail On Conversion Error&apos;는 변환에 실패한 값이 있을 경우 데이터 유형 변경을 중단합니다. 이 옵션은 문자 열을 숫자 열로 변환할 때 특히 유용합니다. &apos;Return Failed Rows&apos;는 변환에 실패한 행의 인덱스를 포함하는 목록을 반환합니다.

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Time", "Character", "Nominal", Set Values( {"13:32", "20:10", "20:12", "14:56"} ) );
Wait( 2 );
dt:Time << Set Data Type( "Numeric", Format( "h:m", 12 ), Input Format( "h:m" ) );
dt:Time << Set Modeling Type( "Continuous" );

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
dt:Age << Set Data Type( "Character" );
dt:Height << Set Data Type( "Numeric", 2 );

```

**예제 3**

```jsl

Names Default To Here( 1 );
dt = New Table( "My Table",
	New Column( "col1", Character, "Nominal", Set Values( {"123", "456", "abc", "789", "", "def"} ) )
);
r = dt:col1 << Set Data Type( "Numeric", <<Fail On Conversion Error, <<Return Failed Rows );
Show( r );

```

**예제 4**

```jsl

Names Default To Here( 1 );
dt = New Table( "My Table",
	New Column( "col1", Character, "Nominal", Set Values( {"123", "456", "abc", "789", "", "def"} ) )
);
r = dt:col1 << Set Data Type( "Numeric", <<Return Failed Rows );
Show( r );

```

#### Delete Formula

**구문:** obj &lt;&lt; Delete Formula

**설명:** 열의 모든 계산식을 삭제합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Bank Loan.jmp" );
:Time << Delete Formula;

```

#### Delete Property

**구문:** obj &lt;&lt; Delete Property( property name )

**설명:** 이름이 지정된 특성을 열에서 삭제합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Bank Loan.jmp" );
:Time << Delete Property( "Spec Limits" );

```

#### Eval Formula

**구문:** obj &lt;&lt; Eval Formula

**설명:** 열의 계산식을 실행합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
col = New Column( "Ratio" );
col << Set Formula( :Height / :Weight );
col << Eval Formula;

```

#### Format

**구문:** obj &lt;&lt; Format( "Best|Fixed Dec...", &lt;width&gt;, &lt;dec&gt;, &lt;"Use Thousands Separator"&gt; )obj &lt;&lt; Format( "mdy|ddmmyy|Long Date...", width )obj &lt;&lt; Format( "Format Pattern", pattern )obj &lt;&lt; Format("Currency", &lt;Country symbol&gt;, &lt;width&gt;, &lt;"Use Thousands Separator"&gt; ) obj &lt;&lt; Format("Use Thousands Separator" )

**설명:** 열에 데이터를 표시하는 데 사용되는 형식을 설정합니다. 사용할 수 있는 형식에는 열 정보 대화상자의 형식 아래에 있는 모든 항목이 포함됩니다.

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Height << Format( "Fixed Dec", 6, 3 );

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/XYZ Stock Averages (plots).jmp" );
:Date << Format( "ddMonyyyy", 9 );
:DJI High << Format( "Currency" );
:DJI Close << Format( "best", "Use Thousands Separator", 10, 0 );
:DJI Low << Format( "Fixed Dec", "Use Thousands Separator", 10, 2 );

```

**예제 3**

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

**구문:** obj &lt;&lt; Set Formula( formula ) obj &lt;&lt; Formula( formula )

**설명:** 열에 계산식을 설정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
col = New Column( "Ratio" );
col << Set Formula( :Height / :Weight );

```

#### Get Column Properties

**구문:** obj &lt;&lt; Get Column Properties

**설명:** 선택한 열에 정의된 모든 특성을 복사합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
:HARDNESS << Get Column Properties();

```

#### Get Compact

**구문:** obj &lt;&lt; Get Compact

**설명:** 열에 압축이 설정되었는지 여부를 나타냅니다.

**JMP추가된 버전:** 18

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Air Traffic.jmp" );
Show( :Airline << Get Compact );

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Air Traffic.jmp" );
:Airline << Compact();
Show( :Airline << Get Compact );

```

#### Get Data Table

**구문:** obj &lt;&lt; Get Data Table

**설명:** 열의 데이터 테이블을 가져옵니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt1 = Open( "$SAMPLE_DATA/Big Class.jmp" );
c = Column( dt1, "Age" );
Show( c << Get Name, c << Get Data Table );

```

#### Get Data Type

**구문:** obj &lt;&lt; Get Data Type( &lt;"English"&gt; )

**설명:** 열의 데이터 유형을 반환합니다. 키워드 "English"를 생략하면 JMP가 실행 중인 언어로 데이터 유형이 반환됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
which = dt:Age << Get Data Type;
Show( which );

```

#### Get Data Type Length

**구문:** obj &lt;&lt; Get Data Type Length( &lt;English&gt; )

**설명:** 열의 데이터 유형 및 데이터 길이를 반환합니다. 대부분의 문자 열처럼 데이터 길이가 고정되지 않은 경우 데이터 유형만 반환됩니다.

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
which = dt:Age << Get Data Type Length;
Show( which );

```

**예제 2**

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

**구문:** obj &lt;&lt; Get Display Width

**설명:** 열 표시 너비를 가져옵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 0 );
w = :Height << Get Display Width;

```

#### Get Excluded

**구문:** obj &lt;&lt; Get Excluded

**설명:** 열이 제외되었으면 1을 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
s = :Weight << Get excluded;
Show( s );

```

#### Get Field Width

**구문:** obj &lt;&lt; Get Field Width

**설명:** 열에 데이터를 표시하는 데 사용된 필드 너비를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
width = :Height << Get Field Width;
Show( width );

```

#### Get Format

**구문:** obj &lt;&lt; Get Format

**설명:** 열 형식을 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
f = :Height << Get Format;
Show( f );

```

#### Get Formula

**구문:** obj &lt;&lt; Get Formula

**설명:** 열의 계산식을 반환합니다.

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

**구문:** obj &lt;&lt; Get Group Name

**설명:** 이 열이 포함된 그룹의 이름 또는 경로를 반환합니다(있는 경우).

**JMP추가된 버전:** 19

**내포 그룹**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Group Columns( "XYZ", :sex, 3 );
dt << Group Columns( Path( "XYZ", "Measures" ), :height, 2 );
Show( :height << Get Group Name );

```

**단순 그룹**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Group Columns( :height, 2 );
Show( :height << Get Group Name );

```

#### Get Header Background Color

**구문:** obj &lt;&lt; Get Header Background Color

**설명:** 머리글 색상을 가져옵니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:height << Set Header Background Color( "Light Red" );
Show( :height << Get Header Background Color );

```

#### Get Header Chart Type

**구문:** obj &lt;&lt; Get Header Chart Type

**설명:** 데이터 테이블 열 머리글에 표시되는 차트 유형을 가져옵니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Show( :height << Get Header Chart Type );

```

#### Get Header Text Color

**구문:** obj &lt;&lt; Get Header Text Color

**설명:** 머리글 텍스트 색상을 가져옵니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:height << Set Header Text Color( "Dark Purple" );
Show( :height << Get Header Text Color );

```

#### Get Hidden

**구문:** obj &lt;&lt; Get Hidden

**설명:** 열이 숨겨졌으면 1을 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
s = :Weight << Get hidden;
Show( s );

```

#### Get Initial Data

**구문:** obj &lt;&lt; Get Initial Data

**설명:** 열 데이터를 초기화하는 데 사용된 값 또는 표현식을 가져옵니다.

```jsl

Names Default To Here( 1 );
dt = New Table( "MyDt" );
dt << Add Rows( 5 );
Column( dt, 1 ) << set initial data( Log( 1 ) );
Column( dt, 1 ) << get initial data;

```

#### Get Input Format

**구문:** obj &lt;&lt; Get Input Format

**설명:** 열에 데이터를 입력하고 정렬하는 데 사용된 형식을 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Stock Prices.jmp" );
f = :Date << Get Input Format;
Show( f );

```

#### Get Labeled

**구문:** obj &lt;&lt; Get Labeled

**설명:** 열에 라벨이 지정되었으면 1을 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
s = :Weight << Get labeled;
Show( s );

```

#### Get List Check

**구문:** obj &lt;&lt; Get List Check

**설명:** 목록 확인(열에 정의된 경우)을 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Movies.jmp" );
prop = :Type << Get List Check;
Show( prop );

```

#### Get Lock

**구문:** obj &lt;&lt; Get Lock

**설명:** 열이 잠겨 있으면 true를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cytometry.jmp" );
lock = :Prin1 << Get Lock;
Show( lock );

```

#### Get Modeling Type

**구문:** obj &lt;&lt; Get Modeling Type( &lt;"English"&gt; )

**설명:** 열의 모델링 유형을 반환합니다. 키워드 "English"를 생략하면 JMP가 실행 중인 언어로 모델링 유형이 반환됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
which = :Age << Get Modeling Type;
Show( which );

```

#### Get Name

**구문:** obj &lt;&lt; Get Name

**설명:** 열 이름을 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
col name = Column( 4 ) << Get Name;
Show( col name );

```

#### Get Properties List

**구문:** obj &lt;&lt; Get Properties List

**설명:** 이 열에 대한 모든 특성의 이름 목록을 가져옵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
:HARDNESS << Get Properties List();

```

#### Get Property

**구문:** obj &lt;&lt; Get Property( Notes| Range Check| List Check| Missing Value Codes| Value Labels| Value Scores | Value Order | Value Colors| Color Gradient| Axis| Units| Response Limits| Design Role| Coding| Mixture| Factor Changes | Spec Limits| Control Limits| Process Screening | Sigma| Process Capability Distribution| MSA | Distribution | Time Frequency| Map Role| Super Categories | Multiple Response | Target Level | Control Level| Profit Matrix | Expression Role | Event Handler | Link ID | Link Reference | Next In Hierarchy )

**설명:** 특정 특성(열에 정의된 경우)을 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Bank Loan.jmp" );
prop = :Credit Check << Get Property( "Axis" );
Show( prop );

```

#### Get Range Check

**구문:** obj &lt;&lt; Get Range Check

**설명:** 범위 확인(열에 정의된 경우)을 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Height << Range Check( LE LT( 48, 75 ) );
check = :Height << Get Range Check;
Show( check );

```

#### Get Role

**구문:** obj &lt;&lt; Get Role( &lt;"English"&gt; )

**설명:** 열의 역할을 반환합니다. 키워드 "English"를 생략하면 JMP가 실행 중인 언어로 역할이 반환됩니다

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
which = :Count << Get Role();
Show( which );

```

#### Get Script

**구문:** obj &lt;&lt; Get Script

**설명:** 열을 다시 생성하기 위한 스크립트를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
s = :Age << Get Script;
Show( s );

```

#### Get Scroll Locked

**구문:** obj &lt;&lt; Get Scroll Locked

**설명:** 열에 스크롤 잠금이 설정되었으면 1을 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
s = :Weight << Get Scroll locked;
Show( s );

```

#### Get Selected

**구문:** obj &lt;&lt; Get Selected

**설명:** 열이 선택되었으면 1을 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
s = :Weight << Get Selected;
Show( s );

```

#### Get Stored Values

**구문:** obj &lt;&lt; Get Stored Values

**설명:** 결측값 코드 변환 없이 열의 값을 반환합니다.

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

**구문:** obj &lt;&lt; Get Use Value Labels

**설명:** 값 라벨 사용 플래그의 상태를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
flag = :Color << Get Use Value Labels;
Show( flag );

```

#### Get Value Labels

**구문:** obj &lt;&lt; Get Value Labels

**설명:** 값 라벨(열에 정의된 경우)을 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
values = :Color << Get Value Labels;
Show( values );

```

#### Get Values

**구문:** obj &lt;&lt; Get Values

**설명:** 열의 값을 반환합니다.

**예제 1**

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

**예제 2**

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

**구문:** obj &lt;&lt; Ignore Errors( state=0|1 )

**설명:** 열 계산식을 실행할 때 오류를 무시하도록 플래그를 설정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
col = New Column( "Ratio" );
col << Set Formula( :Height / :Weight );
col << ignore errors( true );

```

#### Input Format

**구문:** obj &lt;&lt; Input Format( format )obj &lt;&lt; Input Format( "Format Pattern", pattern )

**설명:** 열에 데이터를 입력 및 저장하는 데 사용되는 형식을 설정합니다. 대개 날짜 및 시간 형식에 사용됩니다.

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Stock Prices.jmp" );
:Date << Input Format( "ddmmyyyy" );

```

**예제 2**

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

**구문:** obj &lt;&lt; Is Transform Column

**설명:** 열이 변환 열이면 1을 반환하고 그렇지 않으면 0을 반환합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:height << Is Transform Column();

```

#### IsTransformedOnSASExport

**구문:** obj &lt;&lt; IsTransformedOnSASExport

**설명:** 이 열에 대한 결과 SAS 데이터 집합의 데이터를 SAS로 내보낼 때 데이터가 변경되면 true를 반환합니다. 참고: 날짜 열에만 적용됩니다. 날짜는 SAS와 JMP에서 저장되는 방법이 다르기 때문입니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Stock Prices.jmp" );
flag = :Date << Is Transformed On SAS Export;
Show( flag );

```

#### Labels to Codes

**구문:** :col &lt;&lt; Labels to Codes(&lt;AssociativeArray&gt;|&lt;ListOfAssignments&gt;)

**설명:** 원래 문자 값에 해당하는 값 라벨을 사용하여 숫자 코드 열을 생성합니다.

**JMP추가된 버전:** 17

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Big Class.jmp" );
:sex << Labels to Codes;

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Big Class.jmp" );
:sex << Labels to Codes( ["F" => 10, "M" => 20] );

```

**예제 3**

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Big Class.jmp" );
:sex << Labels to Codes( {"F" = 10, "M" = 20} );

```

#### Lock

**구문:** obj &lt;&lt; Lock

**설명:** 열이 더 이상 변경되지 않도록 잠급니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Age << Lock( 1 );

```

#### Preselect Role

**구문:** obj &lt;&lt; Preselect Role( "역할 없음"|"X"|"Y"|"가중치"|"빈도"|"검증" )

**설명:** 데이터 테이블 열에 사전 선택된 역할을 지정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Weight << Preselect Role( "Y" );

```

#### Remove Value Labels

**구문:** obj &lt;&lt; Remove Value Labels

**설명:** 열에 정의된 모든 값 라벨을 제거합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
:Color << Remove Value Labels;

```

#### Reset Transform

**구문:** obj &lt;&lt; Reset Transform

**설명:** 변환 열에 대해 캐시된 데이터를 제거합니다. 열 데이터에 액세스하면 캐시가 다시 생성됩니다. 이를 사용하여 메모리를 줄이거나, 계산식이 외부 정보에 종속된 경우 다시 계산할 수 있습니다.

**JMP추가된 버전:** 16

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

**구문:** obj &lt;&lt; Set Data Type( "Numeric"|"Character"|"Expression"|"Row State", &lt;Format("format string")&gt;, &lt;Input Format("format string")&gt;, &lt;1|2|4&gt;, &lt; &lt;&lt;Fail On Conversion Error &gt;, &lt; &lt;&lt;Return Failed Rows &gt; )

**설명:** 열의 데이터 유형을 설정합니다. 숫자 열인 경우 선택적 인수를 사용하여 형식, 입력 형식 및 너비(바이트)도 설정할 수 있습니다. &apos;Fail On Conversion Error&apos;는 변환에 실패한 값이 있을 경우 데이터 유형 변경을 중단합니다. 이 옵션은 문자 열을 숫자 열로 변환할 때 특히 유용합니다. &apos;Return Failed Rows&apos;는 변환에 실패한 행의 인덱스를 포함하는 목록을 반환합니다.

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Time", "Character", "Nominal", Set Values( {"13:32", "20:10", "20:12", "14:56"} ) );
Wait( 2 );
dt:Time << Set Data Type( "Numeric", Format( "h:m", 12 ), Input Format( "h:m" ) );
dt:Time << Set Modeling Type( "Continuous" );

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
dt:Age << Set Data Type( "Character" );
dt:Height << Set Data Type( "Numeric", 2 );

```

**예제 3**

```jsl

Names Default To Here( 1 );
dt = New Table( "My Table",
	New Column( "col1", Character, "Nominal", Set Values( {"123", "456", "abc", "789", "", "def"} ) )
);
r = dt:col1 << Set Data Type( "Numeric", <<Fail On Conversion Error, <<Return Failed Rows );
Show( r );

```

**예제 4**

```jsl

Names Default To Here( 1 );
dt = New Table( "My Table",
	New Column( "col1", Character, "Nominal", Set Values( {"123", "456", "abc", "789", "", "def"} ) )
);
r = dt:col1 << Set Data Type( "Numeric", <<Return Failed Rows );
Show( r );

```

#### Set Display Width

**구문:** obj &lt;&lt; Set Display Width( number )

**설명:** 열 표시 너비를 변경합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 0 );
w = :Height << Get Display Width;
:Height << Set Display Width( 2 * w );

```

#### Set Each Value

**구문:** obj &lt;&lt; Set Each Value( number )

**설명:** 열의 모든 값을 상수로 설정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "X" );
dt:X << Set Each Value( 5 );

```

#### Set Excluded

**구문:** obj &lt;&lt; Set Excluded

**설명:** 열을 제외합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Weight << Set excluded;

```

#### Set Field Width

**구문:** obj &lt;&lt; Set Field Width( number )

**설명:** 열에 데이터를 표시하는 데 사용되는 필드 너비를 설정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Height << Set Field Width( 20 );

```

#### Set Formula

**구문:** obj &lt;&lt; Set Formula( formula ) obj &lt;&lt; Formula( formula )

**설명:** 열에 계산식을 설정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
col = New Column( "Ratio" );
col << Set Formula( :Height / :Weight );

```

#### Set Header Background Color

**구문:** obj &lt;&lt; Set Header Background Color

**설명:** 머리글 색상을 설정합니다. 기본 색상을 사용하려면 "없음"으로 설정합니다.

**JMP추가된 버전:** 18

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:height << Set Header Background Color( "Light Red" );

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:height << Set Header Background Color( {250, 200, 150} );

```

#### Set Header Chart Type

**구문:** obj &lt;&lt; Set Header Chart Type

**설명:** 데이터 테이블 열 머리글에 표시할 차트 유형을 설정합니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:height << Set Header Chart Type( "Run Chart" );

```

#### Set Header Text Color

**구문:** obj &lt;&lt; Set Header Text Color

**설명:** 머리글 텍스트 색상을 설정합니다. 기본 색상을 사용하려면 "없음"으로 설정합니다.

**JMP추가된 버전:** 18

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:height << Set Header Text Color( "Dark Purple" );

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:height << Set Header Text Color( {100, 50, 100} );

```

#### Set Hidden

**구문:** obj &lt;&lt; Set Hidden

**설명:** 열을 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Weight << Set hidden;

```

#### Set Initial Data

**구문:** obj &lt;&lt; Set Initial Data

**설명:** 열 데이터를 상수 또는 단순 표현식을 사용하여 초기화합니다.

**예제 1**

```jsl

Names Default To Here( 1 );
dt = New Table( "MyDt", New Column(), New Column() );
dt << Add Rows( 5 );
Column( dt, 1 ) << set initial data( Today() );
Column( dt, 2 ) << set initial data( 99 );

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = New Table( "MyDt" );
dt << Add Rows( 5 );
Column( dt, 1 ) << set initial data( Log( 1 ) );

```

#### Set Labeled

**구문:** obj &lt;&lt; Set Labeled

**설명:** 열의 데이터 값을 라벨로 사용합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Weight << Set labeled;

```

#### Set Modeling Type

**구문:** obj &lt;&lt; Set Modeling Type( "없음"|"연속형"|"순서형"|"명목형"|"행 상태"|"다중 반응"|"비정형 텍스트"|"벡터" )

**설명:** 데이터 테이블 열에 대한 모델링 유형을 설정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Age << Set Modeling Type( "Continuous" );

```

#### Set Name

**구문:** obj &lt;&lt; Set Name( name )

**설명:** 열 이름을 설정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Age << Set Name( "Time" );

```

#### Set Property

**구문:** obj &lt;&lt; Set Property( Notes | List Check | Range Check | Axis | Spec Limits | Control Limits | Sigma | Process Capability Distribution | Coding | Mixture | Design Role | Response Limits | Units | Value Order | Value Labels | Value Scores | Row Order Levels | Distribution | Time Frequency | Value Colors | Color Gradient | Missing Value Codes | Factor Change | Map Role | Supercategories | Multiple Response | Profit Matrix | Informative Missing | Expression Role | Link ID | Link Reference | Event Handler | Custom Property, {argument list} )

**설명:** 열에 특성을 설정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Weight << Set Property( "Units", lbs );

```

#### Set Scroll Locked

**구문:** obj &lt;&lt; Set Scroll Locked

**설명:** 열에 대해 스크롤 잠금을 설정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Weight << Set Scroll locked;

```

#### Set Selected

**구문:** obj &lt;&lt; Set Selected( state=0|1 )

**설명:** 열을 선택합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Height << Set Selected( 1 );

```

#### Set Use for Marker

**구문:** obj &lt;&lt; Set Use for Marker

**설명:** 이 열의 값을 그래프에서 표식으로 사용합니다. 그림이 있는 표현식 열이나 ID가 있는 문자 열은 제대로 작동할 수 있습니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Name << Set Use for Marker;

```

#### Set Values

**구문:** obj &lt;&lt; Set Values( [ value1, value2, value3, ... ] )

**설명:** 열에 값을 설정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Column( "X" );
:X << Set Values(
	[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4,
	5, 6, 7, 8, 9, 10]
);

```

#### SetLock

**구문:** obj &lt;&lt; SetLock

**설명:** 열이 더 이상 변경되지 않도록 잠급니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Age << Lock( 1 );

```

#### Suppress Eval

**구문:** obj &lt;&lt; Suppress Eval( state=0|1 )

**설명:** 열에서 계산식 실행을 제한하도록 플래그를 설정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
col = New Column( "Ratio" );
col << Set Formula( :Height / :Weight );
col << suppress eval( true );

```

#### Use Value Labels

**구문:** obj &lt;&lt; Use Value Labels( state=0|1 )

**설명:** 모든 출력에서 열에 정의된 값 라벨을 대체합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
:Color << Use Value Labels( 1 );
Distribution( Column( :Color ) );

```

#### Value Labels

**구문:** obj &lt;&lt; Value Labels( { value1 = "label1", value2 = "label2", ... } )

**설명:** 값 라벨을 설정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:sex << Value Labels( {"F" = "Female", "M" = "Male"} );

```

## Data Table Cols

### 연결된 생성자

#### Column

**구문:** Column( &lt;data table&gt;, "column name"|column number )

**설명:** 지정된 데이터 테이블 열에 대한 참조를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
col = Column( "height" );

```

### 항목 메시지

#### Add Multiple Columns

**구문:** obj &lt;&lt; Add Multiple Columns( Column prefix, number of columns, &lt;before first|after last|after(column)&gt;, Character|Numeric|Row State, &lt;fieldwidth(number)&gt; )

**설명:** 현재 데이터 테이블에 새 열을 여러 개 생성합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Add Multiple Columns( "Date", 5, Character );

```

#### Clear Column Selection

**구문:** obj &lt;&lt; Clear Column Selection

**설명:** 데이터 테이블의 열 선택을 지웁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
dt << Go To( :BP 12F );
Wait( 2 );
dt << Clear Column Selection();

```

#### Clone Formula Column

**구문:** obj &lt;&lt; Clone Formula Column( column, n, &lt;Substitute Column Reference( column1, list )&gt; )

**설명:** 제공된 column을 기반으로 n개의 새 계산식 열을 생성합니다. 원래 계산식의 column1에 대한 열 참조는 n개의 모든 열에 대해 list의 각 열로 대체됩니다. 원래 계산식에서 둘 이상의 열 참조를 바꾸는 경우 Substitute Column Reference 인수를 여러 개 사용합니다.

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

**구문:** obj &lt;&lt; Columns Manager

**설명:** 현재 테이블에서 열 관리자를 호출하여 열의 특성과 통계량을 표시합니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
col1 = dt << Columns Manager;

```

#### Combine Columns

**구문:** obj &lt;&lt; Combine Columns

**설명:** 열 집합을 구분자로 구분된(다중 반응) 열에 결합합니다.

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
dt << Combine Columns(
	delimiter( "," ),
	Columns( :Brush After Waking Up, :Brush After Meal, :Brush Before Sleep, :Brush Another Time ),
	Selected Columns are Indicator Columns( 1 ),
	Column Name( "When to Brush" )
);

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
dt << Combine Columns(
	delimiter( "," ),
	Columns( :Brush After Waking Up, :Brush After Meal, :Brush Before Sleep, :Brush Another Time ),
	Column Name( "When to Brush" )
);

```

#### Compress Selected Columns

**구문:** obj &lt;&lt; Compress Selected Columns( { column1, column2, ... )

**설명:** 각 열을 가장 압축된 형식으로 압축합니다.

수준이 255개 미만인 경우 문자 데이터는 1바이트입니다.

데이터가 -127에서 127 사이일 경우 숫자 데이터는 1바이트입니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Compress Selected Columns( {:Age, :sex, :Height, :Weight} );

```

#### Exclude/Unexclude

**구문:** obj &lt;&lt; Exclude( 0|1 )

**설명:** 열을 모든 분석 실행에서 제외합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:Name << Exclude( 1 );

```

#### Formula

**구문:** obj &lt;&lt; Formula

**설명:** 열에 계산식을 설정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
col1 = dt << New Column( "Ratio", Numeric, Continuous );
col1 << Formula( :height / :weight );

```

#### Freq

**구문:** obj &lt;&lt; Preselect Role( Freq )

**설명:** 데이터 테이블 열에 빈도 역할을 할당합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
col = Column( "weight" );
col << Preselect Role( "freq" );

```

#### Go to

**구문:** obj &lt;&lt; Go to( column name|column number )

**설명:** 현재 데이터 테이블에서 지정된 열을 선택하고 해당 열로 이동합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
dt << Go to( :BP 12F );

```

#### Hide/Unhide

**구문:** obj &lt;&lt; Hide( 0|1 )

**설명:** 데이터 격자에서 열을 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:Age << Hide( 1 );

```

#### Invert Column Selection

**구문:** obj &lt;&lt; Invert Column Selection( &lt;list of columns&gt; )

**설명:** 현재 열 선택을 반전합니다. 열 목록이 제공된 경우 목록에 없는 열이 선택됩니다.

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:age << Set Selected( 1 );
dt:height << Set Selected( 1 );
Wait( 1 );
b = dt << Invert Column Selection;

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
a = {:height, :weight};
b = dt << Invert Column Selection( a );

```

#### Label/Unlabel

**구문:** obj &lt;&lt; Label( 0|1 )

**설명:** 이 열을 식별을 위한 라벨로 설정합니다. 점을 선택하면 열의 값이 그래프에 나타납니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:Age << Label( 1 );

```

#### Make Indicator Columns

**구문:** obj &lt;&lt; Make Indicator Columns

**설명:** 선택한 열에서 표시자 열 집합을 생성합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
dt << Make Indicator Columns( columns( {:species, :season} ) );

```

#### Move Selected Columns

**구문:** obj &lt;&lt; Move Selected Columns( column|column list, To first|To last|After(column)|after(group)|after(Path({&lt;a&gt;, &lt;b&gt;, ...}) )

**설명:** 선택한 열을 데이터 테이블에서 이동합니다.

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

**구문:** obj &lt;&lt; New Column( &lt;name&gt;, &lt;data type&gt;, &lt;modeling type&gt;, &lt;Format()&gt;, &lt;Formula()&gt;, &lt;Set Property()&gt;, &lt;Set Values()&gt;, &lt;Like()&gt; )

**설명:** 현재 데이터 테이블에 새 열을 생성합니다.

**Like**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "like name", Like( :name ) );

```

**단순**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "X", Formula( Random Uniform() ) );

```

**새 테이블**

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
	New Column( "code", Character( 2 ), Nominal, Set Values( {"AA", "AA", "BB", "BB", "AA"} ) )
);

```

#### New Formula Column

**구문:** dt &lt;&lt; New Formula Column(Operation(name, &lt;Category(name)&gt;), Columns(columns), &lt;Group By(columns)&gt;)

**설명:** 지정된 열을 사용하고 연산 및 선택적 그룹화 열을 적용하여 테이블에 계산식 열을 생성합니다. 필요한 경우 연산 범주를 지정하여 연산 이름을 명확히 구분할 수 있습니다. 생성된 열에 대한 열 참조 목록을 반환합니다.

**JMP추가된 버전:** 17

**Log 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Formula Column( Operation( "Log 2" ), Columns( :height, :weight ) );

```

**그룹화 기준**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Formula Column( Operation( "Mean" ), Columns( :height, :weight ), Group By( :age ) );

```

#### Next Selected Column

**구문:** obj &lt;&lt; Next Selected Column

**설명:** 다음 선택 열로 이동합니다.

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

**구문:** obj &lt;&lt; Preselect Role( No Role )

**설명:** 데이터 테이블 열에서 할당된 역할을 제거합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Weight << Preselect Role( "No Role" );

```

#### Original Order

**구문:** obj &lt;&lt; Original Order

**설명:** 열을 다시 데이터 테이블의 원래 위치로 이동합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Go To( :Age );
dt << Move Selected Columns( To last );
Wait( 2 );
dt << Original Order();

```

#### Paste Column Properties

**구문:** obj &lt;&lt; Paste Column Properties

**설명:** 클립보드의 여러 열 특성 목록을 여러 열에 붙여 넣습니다. 데이터 테이블에서 대상 열을 선택하는 대신 대상 열 목록을 지정할 수도 있습니다.

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

**구문:** obj &lt;&lt; Previous Selected Column

**설명:** 이전 선택 열로 이동합니다.

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

**구문:** obj &lt;&lt; Reorder by Data Type

**설명:** 데이터 테이블의 열을 데이터 유형을 기준으로 재정렬합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
Wait( 1 );
dt << Reorder By Data Type();

```

#### Reorder by Modeling Type

**구문:** obj &lt;&lt; Reorder by Modeling Type

**설명:** 데이터 테이블의 열을 모델링 유형을 기준으로 재정렬합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
Wait( 1 );
dt << Reorder By Modeling Type();

```

#### Reorder by Name

**구문:** obj &lt;&lt; Reorder by Name

**설명:** 데이터 테이블의 열을 열 이름을 기준으로 재정렬합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
Wait( 1 );
dt << Reorder By Name();

```

#### Reverse Order

**구문:** obj &lt;&lt; Reverse Order

**설명:** 데이터 테이블의 열 순서를 역순으로 바꿉니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
Wait( 1 );
dt << Reverse Order();

```

#### Set Label Columns

**구문:** obj &lt;&lt; Set Label Columns( column(s) )

**설명:** 데이터 테이블의 선택된 열에 라벨 역할을 할당합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
Wait( 1 );
dt << Set Label Columns( :City, :State );

```

#### Set Scroll Lock Columns

**구문:** obj &lt;&lt; Set Scroll Lock Columns( column(s) )

**설명:** 데이터 테이블의 선택된 열을 잠가, 스크롤할 수 없도록 합니다. 열이 잠겨 있음을 나타내기 위해 배경 색상이 바뀝니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << Set Scroll Lock Columns( :City );

```

#### Text to Columns

**구문:** obj &lt;&lt; Text to Columns

**설명:** 구분자로 구분된 텍스트 열에서 여러 텍스트 열의 집합 또는 여러 표시자 열 집합을 생성합니다.

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
dt << Text To Columns( delimiter( "," ), columns( :Brush Delimited ) );

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
dt << Text To Columns( delimiter( "," ), columns( :Brush Delimited ), Make Indicator Columns( 1 ) );

```

#### Use for Marker

**구문:** obj &lt;&lt; UseForMarker( 0|1 )

**설명:** 이 열의 값을 그래프에서 표식으로 사용합니다. 그림이 있는 표현식 열이나 ID가 있는 문자 열은 제대로 작동할 수 있습니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:Name << UseForMarker( 1 );

```

#### Validation

**구문:** obj &lt;&lt; Preselect Role( Validation)

**설명:** 데이터 테이블 열에 검증 역할을 할당합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
col = Column( "age" );
col << Preselect Role( "Validation" );

```

#### Weight

**구문:** obj &lt;&lt; Preselect Role( Weight )

**설명:** 데이터 테이블 열에 가중치 역할을 할당합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:Weight << Preselect Role( "weight" );

```

#### X

**구문:** obj &lt;&lt; Preselect Role( X )

**설명:** 데이터 테이블 열에 X 역할을 할당합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
col = Column( "weight" );
col << Preselect Role( "X" );

```

#### Y

**구문:** obj &lt;&lt; Preselect Role( Y )

**설명:** 데이터 테이블 열에 Y 역할을 할당합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Weight << Preselect Role( "Y" );

```

## Data Table Rows

### 항목 메시지

#### Add Rows

**구문:** obj &lt;&lt; Add Rows( &lt;n&gt;, &lt;At Start|At End|After(m)&gt; | {list of (column name = value) pairs}) )

**설명:** 데이터 테이블의 시작 부분, 끝 부분 및 m 행 뒤에 n개의 행을 추가합니다.

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Add Rows( 3, after( 5 ) );

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Add Rows( {name = "David", age = 15} );

```

#### Clear Row States

**구문:** obj &lt;&lt; Clear Row States

**설명:** 모든 행에서 선택됨, 제외됨, 숨김, 표식, 라벨 및 색상과 같은 상태를 지웁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Rows( [5, 7, 8, 10, 12, 15] );
Wait( 2 );
dt << Clear Row States;

```

#### Clear Select

**구문:** obj &lt;&lt; Clear Select

**설명:** 선택한 행을 지우거나 선택 취소합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Rows( [5, 7, 8, 10] );
Wait( 2 );
dt << Clear Select();

```

#### Clear Selected Row States

**구문:** obj &lt;&lt; Clear Selected Row States

**설명:** 선택한 행에서 선택됨, 제외됨, 숨김, 표식, 라벨 및 색상과 같은 상태를 지웁니다.

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

**구문:** obj &lt;&lt; Color Rows by Row State

**설명:** 데이터 테이블의 행 상태로 지정된 색상을 셀에 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Color by Column( :Age );
Wait( 2 );
dt << Color Rows by Row State;

```

#### Color by Column

**구문:** obj &lt;&lt; Color by Column( column, &lt;Color( number )&gt;, &lt;Color Theme( color theme )&gt;, &lt; Continuous scale(0|1)&gt;, &lt;Reverse scale(0|1)&gt;, &lt;Excluded Row( 0|1 ), &lt;Make window with legend&gt; )

**설명:** 지정된 열의 값을 기반으로 데이터 테이블의 각 행에 색상을 할당합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Color by Column( :Age );

```

#### Color or Mark by Column

**구문:** obj &lt;&lt; Color or Mark by Column( column, &lt;Color( number )&gt;, &lt;Color Theme( color theme )&gt;, &lt;Marker Theme( standard|hollow|solid|paired|classic|alphanumeric )&gt; )

**설명:** 지정된 열의 값에 색상 또는 표식을 연결합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Color or Mark by Column( :Age );

```

#### Colors

**구문:** obj &lt;&lt; Colors( color )

**설명:** 표식으로 표현된 모든 그래픽 출력에서 선택한 행에 색상을 적용합니다.

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

**구문:** obj &lt;&lt; Data Filter( &lt;Location(x,y)&gt;, &lt;"Close Outline"&gt;, &lt;"Local"&gt;, &lt;Inverse(0|1)&gt;, &lt;Show Columns Selector(0|1)&gt;, &lt;Title(string)&gt;, &lt;Save And Restore Current Row States(0|1)&gt;, &lt;Conditional(0|1)&gt;, &lt;Auto Clear(0|1)&gt;, &lt;Group By AND(0|1)&gt;, &lt;Show Histograms And Bars(0|1)&gt;, &lt;Count Excluded Rows(0|1)&gt;, &lt;Mode(...)&gt;, &lt;Add Filter(Columns(...), Where(...), Display(...), &lt;Select Missing(cols)&gt;, &lt;Order By Count(cols)&gt;)&gt;, &lt;Favorites(...)&gt;, &lt;Animation(...)&gt; )

**설명:** 복합 조건을 만족하는 데이터 부분집합을 대화식으로 선택하는 데이터 필터를 생성하거나 표시합니다. Mode 옵션은 필터에서 선택한 항목에 따라 영향을 받는 행 상태를 결정합니다. Add Filter 명령은 지정된 Columns 및 Where 절을 사용하여 필터 그룹을 추가합니다. 필터 그룹이 여러 개 있는 경우에는 Group By AND 옵션에 따라 결합된 동작이 결정됩니다. Local 키워드가 지정된 경우에는 보고서에 필터를 포함하여 다른 보고서에 영향을 주지 않고 하나 이상의 플랫폼을 필터링할 수 있습니다.

**로컬 데이터 필터**

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

**전역 데이터 필터**

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

#### Data View

**구문:** obj &lt;&lt; Data View

**설명:** 현재 선택한 행으로 구성된 데이터 보기를 새로 만듭니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Where( :age < 14 );
dt << Data View;

```

#### Delete Rows

**구문:** obj &lt;&lt; Delete Rows

**설명:** 선택한 행을 삭제합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Rows( [5, 7, 8, 10] );
Wait( 2 );
r = dt << Delete Rows;
Show( r );

```

#### Exclude/Unexclude

**구문:** obj &lt;&lt; Exclude/Unexclude

**설명:** 계산에 사용되지 않도록 선택한 행을 제외합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
r = dt << Select Rows( [5, 7, 8, 10] );
r << Exclude;

```

#### Get Rows

**구문:** obj &lt;&lt; Get Rows( number )

**설명:** 지정한 행에 대한 열 값 목록을 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Get Rows( 3 );
dt << Get Rows( {1, 2, 3} );

```

#### Go to Row

**구문:** obj &lt;&lt; Go to Row( row number )

**설명:** 행 개체를 반환합니다. 지정한 행으로 이동합니다. 행을 선택하고 강조 표시합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Go To Row( 5 );

```

#### Hide and Exclude

**구문:** obj &lt;&lt; Hide and Exclude

**설명:** 선택한 행이 그래프에 나타나지 않도록 숨기고 계산에 사용되지 않도록 제외합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
r = dt << Select Rows( [5, 7, 8, 10] );
r << Hide and Exclude;

```

#### Hide/Unhide

**구문:** obj &lt;&lt; Hide/Unhide

**설명:** 그래프에 나타나지 않도록 선택한 행을 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
r = dt << Go To Row( 12 );
r << Hide;

```

#### Insert Rows

**구문:** obj &lt;&lt; Insert Rows

**설명:** 선택한 행 앞에 행을 삽입합니다. 행을 선택하지 않으면 효과가 없습니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Rows( [3, 4, 5] );
dt << Insert Rows;

```

#### Invert Row Selection

**구문:** obj &lt;&lt; Invert Row Selection

**설명:** 현재 행 선택을 반전합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
r = dt << Select Where( :Age < 14 );
Wait( 2 );
r << Invert Row Selection;

```

#### Label/Unlabel

**구문:** obj &lt;&lt; Label/Unlabel

**설명:** 표식으로 표현된 모든 그래픽 출력에서 선택한 행에 라벨을 지정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
r = dt << Go To Row( 5 );
r << Label;

```

#### Marker by Column

**구문:** obj &lt;&lt; Marker by Column( column, &lt;Marker( number )&gt;, &lt;Marker Theme( standard | hollow | solid | paired | classic | alphanumeric )&gt;, &lt;Color theme( string )&gt;, &lt; Continuous scale(0|1)&gt;, &lt;Reverse scale(0|1)&gt;, &lt;Excluded Row( 0|1 ), &lt;Make window with legend&gt; )

**설명:** 지정된 열의 값을 기반으로 데이터 테이블의 각 행에 표식을 할당합니다.

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Marker by Column( :sex );

```

**예제 2**

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

**구문:** obj &lt;&lt; Markers( marker )

**설명:** 표식으로 표현된 모든 그래픽 출력에서 선택한 행의 표식을 변경합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
r = dt << Select Where( :sex == "M" );
r << Markers( "+" );

```

#### Move Rows

**구문:** obj &lt;&lt; Move Rows( At Start|At End|After(n) )

**설명:** 선택한 행을 데이터 테이블에서 위나 아래로 움직여 지정한 새 위치로 이동합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
r = dt << Select Rows( [5, 7, 8, 10] );
Wait( 2 );
r << Move Rows( At Start );

```

#### Name Selection in Column

**구문:** obj &lt;&lt; Name Selection in Column( Column Name( name ), Selected( string ), Unselected( string ) )

**설명:** 선택된 행과 선택되지 않은 행에 대해 각각 하나씩 두 개의 값을 사용하여 새 범주형 열을 생성합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Where( :Age < 14 );
dt << Name Selection in Column( Column Name( "Younger" ), Selected( "Yes" ), Unselected( "No" ) );

```

#### Next Selected

**구문:** obj &lt;&lt; Next Selected

**설명:** 선택한 행 그룹에서 다음 행을 강조 표시합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
r = dt << Select Rows( [5, 7, 8, 10] );
Wait( 2 );
r << Next Selected;

```

#### Previous Selected

**구문:** obj &lt;&lt; Previous Selected

**설명:** 선택한 행 그룹에서 이전 행을 강조 표시합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
r = dt << Select Rows( [5, 7, 8, 10] );
Wait( 2 );
r << Previous Selected;

```

#### Row Editor

**구문:** obj &lt;&lt; Row Editor

**설명:** 선택한 행에 대한 행 편집기 대화상자를 엽니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
r = dt << Select Rows( [5, 7, 8, 10] );
r << Row Editor();

```

#### Row Selection

**구문:** obj &lt;&lt; Row Selection( Select Where(condition), &lt; current selection("extend" | "restrict" | "clear")&gt;, &lt;Dialog("Keep Dialog Open")&gt;, &lt;Match Case(0|1)&gt; )

**설명:** 정의된 조건을 충족하는 모든 행을 선택합니다. 이때 기존 선택을 확장 또는 제한하는 옵션과 선택을 실행하거나 대화상자만 표시하는 옵션을 지정할 수 있습니다. &apos;대/소문자 구분&apos;이 생략된 경우 기본값은 대/소문자를 구분합니다.

**JMP추가된 버전:** 15

**예제 1**

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Row Selection( Select where( :age < 15 ) );

```

**예제 2**

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Row Selection( Select where( :age < 15 ) );
Wait( 2 );
dt << Row Selection( Select where( :age == 15 ), current selection( "extend" ) );

```

**예제 3**

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

**예제 4**

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Row Selection( Select where( :name == "jane" ), Match Case( 0 ) );

```

#### Select All Matching Cells

**구문:** obj &lt;&lt; Select All Matching Cells

**설명:** 열려 있는 모든 데이터 테이블에서 선택된 열의 값이 해당 열에서 선택된 행의 값 중 하나와 매칭되는 모든 행을 선택합니다.

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

**구문:** obj &lt;&lt; Select All Rows

**설명:** 데이터 테이블의 모든 행을 선택합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select All Rows;

```

#### Select Dominant

**구문:** obj &lt;&lt; Select Dominant( {column1, column2, ...},{0|1, 0|1, ...} )

**설명:** 파레토 프론티어의 높음(1) 또는 낮음(0) 값을 기반으로 모든 행을 선택합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Go To( :height );
dt << Select Dominant( {:height, :weight}, {0, 0} );

```

#### Select Duplicate Rows

**구문:** obj &lt;&lt; Select Duplicate Rows( &lt;match(column1, column2, ...)&gt; )

**설명:** 중복 행을 선택하고 선택한 열에서 매칭을 수행합니다. 매칭 열을 제공하지 않으면 테이블의 모든 열에서 행 매칭이 수행됩니다. 중복 행 개수를 반환합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select duplicate rows( Match( :age, :height ) );

```

#### Select Excluded

**구문:** obj &lt;&lt; Select Excluded

**설명:** 데이터 테이블의 모든 제외된 행을 선택합니다.

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

**구문:** obj &lt;&lt; Select Hidden

**설명:** 데이터 테이블의 모든 숨겨진 행을 선택합니다.

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

**구문:** obj &lt;&lt; Select Labeled

**설명:** 데이터 테이블의 모든 라벨이 지정된 행을 선택합니다.

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

**구문:** obj &lt;&lt; Select Matching Cells

**설명:** 선택된 열의 값이 해당 열에서 선택된 행의 값 중 하나와 매칭되는 모든 행을 선택합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Rows( [1, 2, 3, 4] );
dt << Go To( :Height );
Wait( 2 );
dt << Select Matching Cells();

```

#### Select Randomly

**구문:** obj &lt;&lt; Select Randomly( number | probability | Sample Size( number ) | Sampling Rate( probability ) )

**설명:** 지정된 비율만큼 무작위로 행을 선택합니다.

**Probability**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Randomly( 0.3 );

```

**표본 크기**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Randomly( Sample Size( 12 ) );

```

**표집 비율**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Randomly( Sampling Rate( 0.3 ) );

```

#### Select Rows

**구문:** obj &lt;&lt; Select Rows( [row1, row2, ...] )

**설명:** 지정한 행을 선택합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Rows( [5, 7, 8, 10] );

```

#### Select Where

**구문:** obj &lt;&lt; Select Where( condition, &lt; current selection("extend" | "restrict" | "clear")&gt; )

**설명:** 옵션은 선택 사항을 확장 또는 제한하고, 선택 사항을 실행하거나 대화상자만 표시합니다.

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Where( :Age < 14 );

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Where( :Age == 14 );
Wait( 0 );
dt << Select Where( :sex == "M", current selection( "extend" ) );

```

**예제 3**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Where( Contains( :name, "AR" ) );

```

## Filter Views

### 항목 메시지

#### Get Data Filter

**구문:** expr = obj &lt;&lt; Get Data Filter

**설명:** 필터 보기의 필터 정의를 반환합니다.

**JMP추가된 버전:** 19

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

**구문:** data table = obj &lt;&lt; Get Data Table

**설명:** 필터 보기를 소유한 테이블을 반환합니다.

**JMP추가된 버전:** 19

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

**구문:** string = obj &lt;&lt; Get Name

**설명:** 필터 보기의 이름을 가져옵니다.

**JMP추가된 버전:** 19

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

**구문:** 0|1 = obj &lt;&lt; Get Show Hidden Rows

**설명:** 이 필터 보기의 숨겨진 행 표시 설정을 반환합니다.

**JMP추가된 버전:** 19

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

**구문:** obj &lt;&lt; Get Type

**설명:** 필터 보기의 유형인 "Unfiltered", "Filtered" 또는 "TemporaryFiltered" 중 하나를 가져옵니다.

**JMP추가된 버전:** 19

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

**구문:** 0|1 = obj &lt;&lt; Is Locked

**설명:** 이 필터 보기의 잠금 설정을 반환합니다.

**JMP추가된 버전:** 19

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

**구문:** 0|1 = obj &lt;&lt; Is Temporary

**설명:** 필터링된 보기가 임시 필터 보기이면 1을 반환합니다.

**JMP추가된 버전:** 19

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

**구문:** 0|1 = obj &lt;&lt; Is Unfiltered

**설명:** 필터링된 보기가 필터링되지 않은 필터 보기이면 1을 반환합니다.

**JMP추가된 버전:** 19

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

**구문:** obj &lt;&lt; Lock( 0|1 )

**설명:** 이 필터 보기를 편집할 수 없도록 합니다.

**JMP추가된 버전:** 19

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

**구문:** obj &lt;&lt; Set Data Filter( expr )

**설명:** 필터 보기의 필터 정의를 변경합니다. 필터링되지 않은 보기의 필터 정의는 변경할 수 없습니다.

**JMP추가된 버전:** 19

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
fv = dt << New Filter View( "Dream", Active( 0 ) );
fv << Set Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) );
Show( fv << Get Data Filter );

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
fv = dt << New Filter View( "Dream", Active( 0 ) );
fv << Set Data Filter(
	Data Filter( Inverse( 1 ), Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) )
);
Show( fv << Get Data Filter );

```

#### Set Name

**구문:** string = obj &lt;&lt; Set Name( name )

**설명:** 필터 보기의 이름을 변경합니다. 필터링되지 않은 보기와 필터링된 임시 보기의 이름은 변경할 수 없습니다.

**JMP추가된 버전:** 19

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

**구문:** obj &lt;&lt; Show Hidden Rows( 0|1 )

**설명:** 이 필터 보기의 숨겨진 행 표시 설정을 변경합니다.

**JMP추가된 버전:** 19

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

