# DOE



## 연결된 생성자

### DOE

**구문:** DOE

## 열

### Factor

**구문:** obj &lt;&lt; Factor( column(s) )

### Response

**구문:** obj &lt;&lt; Response( column(s) )

### X

**구문:** obj &lt;&lt; X( column(s) )

### Y

**구문:** obj &lt;&lt; Y( column(s) )

## 항목 메시지

### A-Optimality Parameter Weights

**구문:** obj &lt;&lt; A-Optimality Parameter Weights

**설명:** A-최적 설계를 생성하는 데 사용할 가중치를 설정합니다.

**JMP추가된 버전:** 14

```jsl

DOE(
	Custom Design,
	{Add Factor( Continuous, -1, 1, "X1", 0 ), Add Factor( Continuous, -1, 1, "X2", 0 ),
	Add Factor( Continuous, -1, 1, "X3", 0 ), Add Term( {1, 0} ), Add Term( {1, 1} ), Add Term( {2, 1} ),
	Add Term( {3, 1} ), Add Term( {1, 1}, {2, 1} ), Add Term( {1, 1}, {3, 1} ), Add Term( {2, 1}, {3, 1} ),
	Set Sample Size( 14 ), Optimality Criterion( "Make A-Optimal Design"n ),
	"A-Optimality Parameter Weights"n( [1 1 1 1 0.1 0.1 0.1] )}
);

```

### ALT Factor Settings

**구문:** obj &lt;&lt; ALT Factor Settings

**설명:** 가속 수명 시험 계획의 지정된 요인 번호에 대해 요인 이름, 수준 수, 요인 변환, 사용 조건 및 시험 조건을 지정할 수 있도록 허용합니다.

```jsl

DOE(
	Accelerated Life Test Plan,
	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Continuous Monitoring" ),
	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),
	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ), Set Level Values( 1, [90 100 110] ),
	Distribution Choice( LogNormal ), Set Prior Mean ALT( [-40 1.5 2] ),
	Set Prior Std Error ALT( [10, 0.2, 0.5] ), Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ),
	Use Prior Uncertainty( 1 ), Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ),
	Set Length of Test( 1000 ), Set Number of Units( 150 )}
);

```

### ALT Plan Setup

**구문:** obj &lt;&lt; ALT Plan Setup( 1|2|3 )

**설명:** 가속 수명 시험 계획에 대한 초기 모형 선택을 지정합니다.

```jsl

DOE(
	Accelerated Life Test Plan,
	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Continuous Monitoring" ),
	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),
	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ), Set Level Values( 1, [90 100 110] ),
	Distribution Choice( LogNormal ), Set Prior Mean ALT( [-40 1.5 2] ),
	Set Prior Std Error ALT( [10, 0.2, 0.5] ), Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ),
	Use Prior Uncertainty( 1 ), Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ),
	Set Length of Test( 1000 ), Set Number of Units( 150 )}
);

```

### Add Alias Term

**구문:** obj &lt;&lt; Add Alias Term

**설명:** 별칭 항 목록에 별칭 항을 추가합니다. 목록의 각 효과에 대해 요인 번호 및 멱을 지정합니다. 쉼표로 효과를 구분하여 교호작용을 생성합니다.

```jsl

d = DOE( Custom Design, Add Factor( Continuous, -1, 1, "X1", 0 ), Add Factor( Continuous, -1, 1, "X2", 0 ) );
d << Add Alias Term( {1, 1}, {2, 1} );
d << Add Alias Term( {1, 2} );

```

### Add Constraint

**구문:** obj &lt;&lt; Add Constraint

**설명:** 행렬로 선형 제약 조건을 추가합니다. 각 행은 제약 조건을 나타냅니다. 마지막 열은 부등식 제약 조건의 오른쪽에 있는 값입니다. JSL에서는 부등식 제약 조건이 오른쪽에 있는 값보다 작거나 같아야 합니다.

```jsl

DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Add Factor( Continuous, -1, 1, "X3", 0 ),
	Add Constraint( [1 1 0 1, 1 0 1 1] ),
	Add Term( {1, 0} )
);

```

### Add Factor

**구문:** obj &lt;&lt; Add Factor( Continuous|Discrete Numeric|Blocking|Constant|Categorical|Mixture )

**설명:** 지정된 유형의 요인과 선택적 인수를 추가합니다. 아무것도 지정하지 않을 경우 연속형 요인이 추가됩니다.

```jsl

d = DOE( Custom Design );
d << Add Factor( Continuous, -1, 1, "X1", 0 );
d << Add Factor( Discrete Numeric, {1, 2, 3}, "X2", 0 );
d << Add Factor( Categorical, {"L1", "L2"}, "X3", 0 );
d << Add Factor( Blocking, 8, "X4" );
d << Add Factor( Constant, 3, "X5" );

```

### Add Functional Response

**구문:** obj &lt;&lt; Add Functional Response

**설명:** 지정된 이름, 런당 측정값 수 및 값을 사용하여 함수 반응을 추가합니다.

**JMP추가된 버전:** 15

```jsl

DOE(
	Custom Design,
	Add Response( Maximize, "Y", ., ., . ),
	Add Functional Response( "Y", 5, {1, 2, 3, 4, 5} ),
	Set Random Seed( 46055034 ),
	Simulate Responses( 0 ),
	Save X Matrix( 0 )
);

```

### Add Potential Term

**구문:** obj &lt;&lt; Add Potential Term

**설명:** 모형 항 목록에 If Possible 항을 추가합니다. 목록의 각 효과에 대해 요인 번호 및 멱을 지정합니다. 쉼표로 효과를 구분하여 교호작용을 생성합니다.

```jsl

d = DOE( Custom Design, Add Factor( Continuous, -1, 1, "X1", 0 ), Add Factor( Continuous, -1, 1, "X2", 0 ) );
d << Add Potential Term( {1, 1}, {2, 1} );
d << Add Potential Term( {1, 2} );

```

### Add Response

**구문:** obj &lt;&lt; Add Response( goal, name, lower limit, upper limit, importance, lower detection limit, upper detection limit )

**설명:** 지정된 목표, 이름, 하한, 상한 및 중요도가 있는 반응을 추가합니다.

#### 예제 1

```jsl

DOE( Custom Design, Add Response( Match Target, "Y", 10, 30, 1 ) );

```

#### 예제 2

```jsl

DOE( Custom Design, Add Response( Match Target, "Y", ., ., 1, 10, 30 ) );

```

### Add Term

**구문:** obj &lt;&lt; Add Term

**설명:** 모형 항 목록에 "필수" 항을 추가합니다. 효과는 {요인 번호, 멱}으로 지정됩니다. 쉼표로 효과를 구분하여 교호작용을 생성할 수 있습니다.

```jsl

d = DOE( Custom Design, Add Factor( Continuous, -1, 1, "X1", 0 ), Add Factor( Continuous, -1, 1, "X2", 0 ) );
d << Add Term( {1, 1}, {2, 1} );
d << Add Term( {1, 2} );

```

### Additional Designs

**구문:** obj &lt;&lt; Additional Designs

**설명:** 참조 설계와 비교할 최대 9개까지의 추가적인 설계를 지정합니다.

**JMP추가된 버전:** 14

```jsl

DOE( Custom Design, Add Factor, Add Factor, Add Factor, Set Sample Size( 12 ), Make Design, Make Table );
DOE( Custom Design, Add Factor, Add Factor, Add Factor, Make Design, Make Table );
DOE( Custom Design, Add Factor, Add Factor, Add Factor, Set Sample Size( 4 ), Make Design, Make Table );
DOE(
	Compare Designs,
	Reference Design( "Custom Design", X( :X1, :X2, :X3 ) ),
	Additional Designs( "Custom Design 2", X( :X1, :X2, :X3 ), "Custom Design 3", X( :X1, :X2, :X3 ) )
);

```

### Allow covariate rows to be repeated

**구문:** obj &lt;&lt; Allow covariate rows to be repeated( state=0|1 )

**설명:** 설계에서 공변량 행을 반복할 수 있는지 여부를 지정합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
DOE(
	Custom Design,
	Add Response( Maximize, "Y", ., ., . ),
	Add Factor( Covariate, :sex, 0 ),
	Add Factor( Covariate, :height, 0 ),
	Add Factor( Covariate, :weight, 0 ),
	Add Term( {1, 0} ),
	Add Term( {1, 1} ),
	Add Term( {2, 1} ),
	Add Term( {3, 1} ),
	Enforce Use of Selected Covariate Rows( 1 ),
	Allow covariate rows to be repeated( 1 ),
	Select Covariate Rows( [1 2 3 4] ),
	Set Sample Size( 24 )
);

```

### Augment Method

**구문:** obj &lt;&lt; Augment Method( Replicate|Centerpoints|Fold Over|Add Axial|Augment )

**설명:** 확대 방법의 유형 및 해당 모수를 지정합니다.

#### 예제 1

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );
d = DOE( Augment Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );
d << Augment Method( Augment );
d << Set Sample Size( 24 );
d << Make Design;

```

#### 예제 2

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/2x3x4 Factorial.jmp" );
d = DOE( Augment Design, X( :X1, :X2, :X3 ), Y( :Y ) );
d << Augment Method( Replicate, 2 );

```

#### 예제 3

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );
d = DOE( Augment Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );
d << Augment Method( Centerpoints, 3 );

```

#### 예제 4

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );
d = DOE( Augment Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );
d << Augment Method( Fold Over, [1 2] );

```

#### 예제 5

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );
d = DOE( Augment Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );
d << Augment Method( Add Axial, 1, 2 );

```

### Blocks

**구문:** obj &lt;&lt; Blocks

**설명:** 균형 불완비 블록 설계(BIBD)에 대한 블록 크기를 지정합니다.

**JMP추가된 버전:** 14

```jsl

d = DOE( Balanced Incomplete Block Design, Treatments( 3, {"L1", "L2", "L3"} ) );
d << Blocks( 2 );
d << Make Design;

```

### Center Points

**구문:** obj &lt;&lt; Center Points

**설명:** 중앙점에서의 반복 횟수를 지정합니다.

#### 예제 1

```jsl

d = DOE( Custom Design, Add Factor( Continuous, -1, 1, "X1", 0 ), Add Factor( Continuous, -1, 1, "X2", 0 ) );
d << Make Model( Linear );
d << Center Points( 2 );

```

#### 예제 2

```jsl

DOE(
	Definitive Screening Design,
	Add Factor,
	Add Factor,
	Add Factor,
	Add Factor,
	Add Factor,
	Add Factor,
	Show Blocking Options( 1, 2 ),
	Number of Extra Runs( 4 ),
	Center Points( 1 )
);

```

### Change Anticipated Coefficients

**구문:** obj &lt;&lt; Change Anticipated Coefficients

**설명:** 검정력 분석의 예상 계수를 변경합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );
d = DOE( Evaluate Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );
d << Change Anticipated Coefficients( [1 2 3 4 2 2 2 3 3 3] );

```

### Change Factor Settings

**구문:** obj &lt;&lt; Change Factor Settings

**설명:** 첫 번째 인수에 포함한 연속형 또는 혼합물 요인의 최소값, 최대값 및 이름을 지정합니다. 초기에 요인을 사전 정의한 플랫폼에 가장 유용합니다.

#### 예제 1

```jsl

d = DOE( Response Surface Design );
d << Change Factor Settings( 1, 2, 3, "A" );
d << Change Factor Settings( 2, 0, 4 );

```

#### 예제 2

```jsl

d = DOE( Mixture Design );
d << Change Factor Settings( 1, 0.1, 0.4, "A" );
d << Change Factor Settings( 3, 0, 0.8, "C" );

```

### Check Inscribe

**구문:** obj &lt;&lt; Check Inscribe

**설명:** 축 점이 범위의 아래쪽 및 위쪽 끝에 놓이도록 설계의 척도를 재조정합니다.

```jsl

d = DOE( Response Surface Design, Make Design( 2 ) );
d << Set Axial Choice( 2 );
d << Check Inscribe;

```

### Choice Design Table Output

**구문:** obj &lt;&lt; Choice Design Table Output( "별도"|"결합" )

**설명:** 선택 설계에 대한 데이터 테이블 생성 방법을 지정합니다.

```jsl

DOE(
	Choice Design,
	{Add Factor( Categorical, {"L1", "L2"}, "X1", 0 ), Add Factor( Categorical, {"L1", "L2"}, "X2", 0 ),
	Add Term( {1, 1} ), Add Term( {2, 1} ), Set Prior Mean Choice( [0 0] ),
	Set Prior Variance Matrix( [1 0, 0 1] ), Set Number of Attributes( 2 ), Set Number of Profiles( 2 ),
	Set Number of Choice Sets( 8 ), Set Number of Surveys( 1 ), Set Expected Number of Respondents( 1 ),
	Make Design, Choice Design Table Output( Combined )}
);

```

### D Efficiency Weight

**구문:** obj &lt;&lt; D Efficiency Weight

**설명:** 이 옵션을 사용하여 D-효율도의 상대 중요도 및 별칭 축소를 조절할 수 있습니다. 0에서 1 사이의 숫자를 지정하십시오.

```jsl

DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	D Efficiency Weight( 0.5 ),
	Make Design
);

```

### Design Search Time

**구문:** obj &lt;&lt; Design Search Time( number )

**설명:** 설계를 검색할 시간(초)을 지정합니다.

```jsl

DOE(
	Custom Design,
	{Add Factor( Continuous, -1, 1, "X1", 0 ), Add Factor( Continuous, -1, 1, "X2", 0 ), Set Sample Size( 7 ),
	Design Search Time( 8 ), Make Design}
);

```

### Disallowed Combinations

**구문:** obj &lt;&lt; Disallowed Combinations

**설명:** 설계에서 제외되어야 하는 모든 요인 조합에 대해 true를 반환하는 스크립트를 제공할 수 있습니다.

```jsl

DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Categorical, {"L1", "L2"}, "X2", 0 ),
	Number of Starts( 100 ),
	Disallowed Combinations( X1 > 0.5 & X2 == 2 ),
	Make Design
);

```

### Discrete Numeric Powers Set to Necessary

**구문:** obj &lt;&lt; Discrete Numeric Powers Set to Necessary( state=0|1 )

**설명:** 이산 수치형 요인의 멱이 필수 모형 항인지 여부를 지정합니다.

```jsl

DOE(
	Custom Design,
	Add Factor( Discrete Numeric, {1, 2, 3}, "X1", 0 ),
	Add Factor( Discrete Numeric, {1, 2, 3}, "X2", 0 ),
	Discrete Numeric Powers Set to Necessary( 1 ),
	Make Model( Linear )
);

```

### Distribution Choice

**구문:** obj &lt;&lt; Distribution Choice

**설명:** 가속 수명 시험 계획에 대한 분포를 지정합니다.

```jsl

DOE(
	Accelerated Life Test Plan,
	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Continuous Monitoring" ),
	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),
	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ), Set Level Values( 1, [90 100 110] ),
	Distribution Choice( LogNormal ), Set Prior Mean ALT( [-40 1.5 2] ),
	Set Prior Std Error ALT( [10, 0.2, 0.5] ), Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ),
	Use Prior Uncertainty( 1 ), Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ),
	Set Length of Test( 1000 ), Set Number of Units( 150 )}
);

```

### Enforce Use of Selected Covariate Rows

**구문:** obj &lt;&lt; Enforce Use of Selected Covariate Rows( state=0|1 )

**설명:** 선택한 모든 공변량 행을 설계에 포함할지 여부를 지정합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
DOE(
	Custom Design,
	Add Response( Maximize, "Y", ., ., . ),
	Add Factor( Covariate, :sex, 0 ),
	Add Factor( Covariate, :height, 0 ),
	Add Factor( Covariate, :weight, 0 ),
	Add Term( {1, 0} ),
	Add Term( {1, 1} ),
	Add Term( {2, 1} ),
	Add Term( {3, 1} ),
	Enforce Use of Selected Covariate Rows( 1 ),
	Allow covariate rows to be repeated( 1 ),
	Select Covariate Rows( [1 2 3 4] ),
	Set Sample Size( 24 )
);

```

### FFF Optimality Criterion

**구문:** obj &lt;&lt; FFF Optimality Criterion( "MaxPro"|"Centroid" )

**설명:** 설계에 사용되는 기준을 지정합니다. 권장 값은 기본값입니다.

#### 예제 1

```jsl

DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Add Factor( Continuous, -1, 1, "X3", 0 ),
	Optimality Criterion( "Make I-optimal Design" ),
	Make Design
);

```

#### 예제 2

```jsl

DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Add Factor( Continuous, -1, 1, "X3", 0 ),
	Optimality Criterion( 2 ),
	Make Design
);

```

### Find Subset

**구문:** obj &lt;&lt; Find Subset

**설명:** 꼭지점 설계의 D-최적 부분집합을 찾습니다.

```jsl

d = DOE( Mixture Design, Add Factor( Mixture, 0.1, 1, "X4", 0 ) );
d << Mixture Design Type( Extreme Vertices, 3 );
d << Find Subset( 10 );

```

### GOSSDDetails

**구문:** obj &lt;&lt; GOSSDDetails

**설명:** 현재 요인 설정을 목록으로 반환합니다.

**JMP추가된 버전:** 15

```jsl

d = DOE( Group Orthogonal Supersaturated Design );
Show( d << GOSSDDetails );

```

### GOSSDStructure

**구문:** obj &lt;&lt; GOSSDStructure

**설명:** GOSSD의 구조를 지정합니다.

**JMP추가된 버전:** 15

```jsl

d = DOE( Group Orthogonal Supersaturated Design );
d << GOSSDStructure( 6, 8 );

```

### Get Alias Matrix

**구문:** obj &lt;&lt; Get Alias Matrix

**설명:** 설계 평가로부터 별칭 행렬을 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );
d = DOE( Evaluate Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );
d << Get Alias Matrix;

```

### Get Design Diagnostics

**구문:** obj &lt;&lt; Get Design Diagnostics

**설명:** D 효율도, G 효율도, A 효율도 및 예측 평균 분산을 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );
d = DOE( Evaluate Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );
d << Get Design Diagnostics;

```

### Get Effect Power

**구문:** obj &lt;&lt; Get Effect Power

**설명:** 효과 추정값에 대한 멱의 벡터를 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/2x3x4 Factorial.jmp" );
d = DOE( Evaluate Design, X( :X1, :X2, :X3 ), Y( :Y ) );
d << Get Effect Power;

```

### Get Estimation Efficiencies

**구문:** obj &lt;&lt; Get Estimation Efficiencies

**설명:** 이상적 설계와 비교하여 각 모수 추정값의 증가한 너비에 대한 벡터를 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );
d = DOE( Evaluate Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );
d << Get Estimation Efficiencies;

```

### Get MaxPro Values

**구문:** obj &lt;&lt; Get MaxPro Values

**설명:** 범주형 요인의 수준을 기반으로 하는 하위 설계를 포함하여 빠르고 유연한 설계에 대한 MaxPro 값을 반환합니다.

**JMP추가된 버전:** 14

```jsl

d = DOE(
	Space Filling Design,
	{Add Factor( Continuous, -1, 1, "X1", 0 ), Add Factor( Continuous, -1, 1, "X2", 0 ),
	Add Factor( Categorical, {"L1", "L2", "L3", "L4"}, "X3", 0 ), FFF Optimality Criterion( MaxPro ),
	MaxPro Categorical Weight( 4 ), Space Filling Design Type( Fast Flexible Filling, 100 )}
);
d << Get MaxPro Values;

```

### Get Number of Random Starts

**구문:** obj &lt;&lt; Get Number of Random Starts

**설명:** 설계 생성에 사용되는 랜덤 시작 횟수를 반환합니다.

**JMP추가된 버전:** 15

### Get Power

**구문:** obj &lt;&lt; Get Power

**설명:** 모수 추정값에 대한 멱의 벡터를 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );
d = DOE( Evaluate Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );
d << Get Power;

```

### Get Prediction Variances

**구문:** obj &lt;&lt; Get Prediction Variances

**설명:** 설계 공간 비율 그림에서 예측 분산 벡터를 반환합니다.

**JMP추가된 버전:** 14

```jsl

d = DOE(
	Custom Design,
	{Add Factor( Continuous, -1, 1, "X1", 0 ), Add Factor( Continuous, -1, 1, "X2", 0 ), Set Sample Size( 7 ),
	Design Search Time( 8 ), Set Number of FDS points( 20000 ), Make Design}
);
d << Get Prediction Variances;

```

### Get X Matrix

**구문:** obj &lt;&lt; Get X Matrix

**설명:** 설계 행렬(행렬 X라고도 함)을 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );
d = DOE( Evaluate Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );
d << Get X Matrix;

```

### Group New Runs Into Separate Block

**구문:** obj &lt;&lt; Group New Runs Into Separate Block

**설명:** 설계 확대 시 새로운 런을 별개의 블록으로 그룹화하는 블록 요인을 추가합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );
d = DOE( Augment Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );
d << Group New Runs Into Separate Block;

```

### Load Constraints

**구문:** obj &lt;&lt; Load Constraints

**설명:** 이 실험에 사용할 수 있도록 이전에 저장한 요인 제약 조건 테이블을 불러옵니다.

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Diamond Constraints.jmp" );
d = DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Add Term( {1, 0} ),
	Load Constraints
);

```

### Load Design

**구문:** obj &lt;&lt; Load Design

**설명:** 설계 불러오기

```jsl

d = DOE( Custom Design );
d << Load Design();

```

### Load Factors

**구문:** obj &lt;&lt; Load Factors

**설명:** 이 실험에 사용할 수 있도록 이전에 저장한 요인 테이블을 불러옵니다.

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Factors.jmp" );
DOE( Custom Design, Load Factors );

```

### Load Responses

**구문:** obj &lt;&lt; Load Responses

**설명:** 이전에 저장한 반응 데이터 테이블을 불러옵니다.

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Response.jmp" );
DOE( Custom Design, Load Responses );

```

### Local Design

**구문:** obj &lt;&lt; Local Design( state=0|1 )

**설명:** 사전 평균에 대한 로컬 설계를 생성할지 여부를 지정합니다.

```jsl

DOE(
	Accelerated Life Test Plan,
	{ALT Plan Setup( 1 ), Set Monitoring Choice( 2, {5, 200, 200} ),
	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),
	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ), Set Level Values( 1, [90 100 110] ),
	Distribution Choice( LogNormal ), Set Prior Mean ALT( [-40 1.5 2] ),
	Set Prior Std Error ALT( [10, 0.2, 0.5] ), Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ),
	Local Design( 0 ), Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ),
	Set Length of Test( 1000 ), Set Inspection Times( [200 400 600 800 1000] ), Set Number of Units( 150 ),
	Set Candidate Runs( [90 0 150, 100 0 150, 110 0 150] )}
);

```

### Make Design

**구문:** obj &lt;&lt; Make Design

**설명:** 스크립트에 지정한 설계를 생성합니다.

```jsl

d = DOE( Custom Design, Add factor, Add factor, Add factor );
d << Make Model( RSM );
d << Make Design;

```

### Make Model

**구문:** obj &lt;&lt; Make Model( Linear|Interactions|RSM )

**설명:** 지정된 모형의 모형 항 목록에 항을 추가합니다.

#### 예제 1

```jsl

d = DOE( Custom Design, Add Factor, Add Factor, Add Factor );
d << Make Model( RSM );

```

#### 예제 2

```jsl

d = DOE( Custom Design, Add Factor, Add Factor, Add Factor );
d << Make Model( Interactions );

```

### Make Strip Plot Design

**구문:** obj &lt;&lt; Make Strip Plot Design

**설명:** 변경하기 힘든 요인이 매우 변경하기 힘든 요인과 독립적으로 변하는 경우 조각구 설계를 지정합니다.

```jsl

d = DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 2 ),
	Add Factor( Continuous, -1, 1, "X2", 1 ),
	Add Factor( Continuous, -1, 1, "X3", 0 )
);
d << Set N Whole Plots( 4 );
d << Make Strip Plot Design;

```

### Make Table

**구문:** obj &lt;&lt; Make Table

**설명:** 현재 설계에서 데이터 테이블을 생성합니다.

```jsl

d = DOE( Custom Design, Add factor, Add factor, Add factor );
d << Make Design;
d << Make Table;

```

### Make Test Plan

**구문:** obj &lt;&lt; Make Test Plan

**설명:** 가속 수명 시험 계획에 대한 시험 계획을 생성합니다.

```jsl

DOE(
	Accelerated Life Test Plan,
	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Monitoring at Intervals", {5, 200, 200} ),
	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),
	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ), Set Level Values( 1, [90 100 110] ),
	Distribution Choice( LogNormal ), Set Prior Mean ALT( [-40 1.5 2] ),
	Set Prior Std Error ALT( [10, 0.2, 0.5] ), Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ),
	Use Prior Uncertainty( 1 ), Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ),
	Set Length of Test( 1000 ), Set Inspection Times( [200 400 600 800 1000] ), Set Number of Units( 150 ),
	Set Candidate Runs( [90 0 150, 100 0 150, 110 0 150] ), Make Design, Make Test Plan}
);

```

### MaxPro Categorical Weight

**구문:** obj &lt;&lt; MaxPro Categorical Weight

**설명:** MaxPro 가중치를 지정하십시오. 1보다 큰 값은 동일한 범주형 수준을 가진 점 간의 간격을 늘립니다.

**JMP추가된 버전:** 14

```jsl

DOE(
	Space Filling Design,
	{Add Factor( Continuous, -1, 1, "X1", 0 ), Add Factor( Continuous, -1, 1, "X2", 0 ),
	Add Factor( Categorical, {"L1", "L2", "L3", "L4"}, "X3", 0 ), FFF Optimality Criterion( MaxPro ),
	MaxPro Categorical Weight( 4 ), Space Filling Design Type( Fast Flexible Filling, 100 )}
);

```

### Mixture Design Type

**구문:** obj &lt;&lt; Mixture Design Type( Simplex Centroid|Simplex Lattice|ABCD|Extreme Vertices|Space Filling )

**설명:** 혼합물 설계의 유형을 지정합니다. 두 번째 인수로 모수를 지정하지 않으면 기본 모수가 사용됩니다.

#### 예제 1

```jsl

d = doe( Mixture Design );
d << Mixture Design Type( Simplex Centroid, 2 );

```

#### 예제 2

```jsl

d = doe( Mixture Design );
d << Mixture Design Type( Simplex Lattice, 4 );

```

#### 예제 3

```jsl

d = doe( Mixture Design );
d << Mixture Design Type( ABCD );

```

#### 예제 4

```jsl

d = doe( Mixture Design );
d << Change Factor Settings( 1, .05, .25 );
d << Mixture Design Type( Extreme Vertices, 3 );

```

#### 예제 5

```jsl

d = doe( Mixture Design );
d << Mixture Design Type( Space Filling, 25 );

```

### Mixture Sum

**구문:** obj &lt;&lt; Mixture Sum

**설명:** 모든 성분의 합이 1이 아닌 다른 값이 되도록 표현하려는 경우 이 옵션을 사용하십시오. 혼합물 총계는 모든 성분의 합입니다.

```jsl

DOE(
	Custom Design,
	Mixture Sum( 50 ),
	Add Factor( Mixture, 10, 25, "X1", 0 ),
	Add Factor( Mixture, 0, 15, "X2", 0 ),
	Add Factor( Mixture, 25, 40, "X3", 0 ),
	Make Design
);

```

### Nesting Structure

**구문:** obj &lt;&lt; Nesting Structure

**설명:** 설계의 내포 구조를 지정합니다. 내포를 나타내려면 대괄호로 묶은 목록을 사용합니다(첫 번째 요소는 내포 요인, 두 번째 요소는 내포된 요인 또는 구조를 대괄호로 묶은 목록). 교차된 요인 또는 구조를 나타내려면 수평 연결 기호(&apos;||&apos;)를 사용합니다.

```jsl

DOE(
	MSA Design,
	Add Factor( Categorical, {"L1", "L2"}, "X1", MSA( 4, 1, 1 ) ),
	Add Factor( Categorical, {"L1", "L2"}, "X2", MSA( 4, 1, 1 ) ),
	Add Factor( Categorical, {"L1", "L2"}, "X3", MSA( 4, 1, 1 ) ),
	Nesting Structure( {"X1", {"X2"}} || "X3" )
);

```

### Number of Column Starts

**구문:** obj &lt;&lt; Number of Column Starts

**설명:** 주효과 선별 설계의 각 요인에 대해 랜덤 열이 최적화되는 횟수를 지정합니다.

```jsl

DOE(
	Screening Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Add Factor( Continuous, -1, 1, "X3", 0 ),
	Screening Type( 1 ),
	Number of Column Starts( 100 ),
	Set Sample Size( 12 ),
	Make Design
);

```

### Number of Extra Runs

**구문:** obj &lt;&lt; Number of Extra Runs

**설명:** 확증적 선별 설계에 포함할 추가 런 수를 지정합니다.

```jsl

DOE(
	Definitive Screening Design,
	Add Factor,
	Add Factor,
	Add Factor,
	Add Factor,
	Add Factor,
	Add Factor,
	Show Blocking Options( 1, 2 ),
	Number of Extra Runs( 4 )
);

```

### Number of Starts

**구문:** obj &lt;&lt; Number of Starts

**설명:** 전체 설계를 최적화하기 위해 설계가 재생성되는 횟수를 지정합니다.

```jsl

DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Add Factor( Continuous, -1, 1, "X3", 0 ),
	Number of Starts( 1000 ),
	Make Design
);

```

### Optimality Criterion

**구문:** obj &lt;&lt; Optimality Criterion( "권장 사항"|"D-최적 설계 생성"|"I-최적 설계 생성"|"A-최적 설계 생성"|"최적 설계 별칭 생성" )

**설명:** 설계에 사용되는 기준을 지정합니다. 권장 값은 기본값입니다.

#### 예제 1

```jsl

DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Add Factor( Continuous, -1, 1, "X3", 0 ),
	Optimality Criterion( "Make I-optimal Design" ),
	Make Design
);

```

#### 예제 2

```jsl

DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Add Factor( Continuous, -1, 1, "X3", 0 ),
	Optimality Criterion( 2 ),
	Make Design
);

```

### Order Column

**구문:** obj &lt;&lt; Order Column

**설명:** 데이터 테이블이 생성될 때 순서 열을 요청합니다.

**JMP추가된 버전:** 14

```jsl

d = DOE( Balanced Incomplete Block Design );
d << Treatments( 3, {"L1", "L2", "L3"} );
d << Make Design;
d << OrderColumn( 1 );

```

### Prior Parameter Variance

**구문:** obj &lt;&lt; Prior Parameter Variance

**설명:** 이 옵션을 사용하여 (가능한 경우만) 모형의 항에 사용되는 가중치를 조절할 수 있습니다. 값이 높을수록 사전 정보가 더 많고 분산이 작음을 의미합니다. 분산은 입력된 값에 대한 역수입니다.

```jsl

DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Add Potential Term( {1, 1} ),
	Add Potential Term( {2, 1} ),
	Add Potential Term( {1, 1}, {2, 1} ),
	Prior Parameter Variance( [0, 1, 2, 6] ),
	Make Design
);

```

### Prior Specification Choice

**구문:** obj &lt;&lt; Prior Specification Choice

**설명:** 사전 모수를 지정하기 위한 옵션을 설정합니다. 여기서 1은 절편 지정을 나타내고 2는 분위수 지정을 나타냅니다.

```jsl

DOE(
	Accelerated Life Test Plan,
	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Continuous Monitoring" ),
	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),
	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ), Set Level Values( 1, [90 100 110] ),
	Distribution Choice( LogNormal ), Prior Specification Choice( 1 ), Set Prior Mean ALT( [-40 1.5 2] ),
	Set Prior Std Error ALT( [10, 0.2, 0.5] ), Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ),
	Use Prior Uncertainty( 1 ), Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ),
	Set Length of Test( 1000 ), Set Number of Units( 150 )}
);

```

### Reference Design

**구문:** obj &lt;&lt; Reference Design

**설명:** 설계 비교를 위한 참조 설계를 지정합니다.

**JMP추가된 버전:** 14

```jsl

DOE( Custom Design, Add Factor, Add Factor, Add Factor, Set Sample Size( 12 ), Make Design, Make Table );
DOE( Custom Design, Add Factor, Add Factor, Add Factor, Make Design, Make Table );
DOE( Custom Design, Add Factor, Add Factor, Add Factor, Set Sample Size( 4 ), Make Design, Make Table );
DOE(
	Compare Designs,
	Reference Design( "Custom Design", X( :X1, :X2, :X3 ) ),
	Additional Designs( "Custom Design 2", X( :X1, :X2, :X3 ), "Custom Design 3", X( :X1, :X2, :X3 ) )
);

```

### Remove Alias Term

**구문:** obj &lt;&lt; Remove Alias Term

**설명:** 별칭 항 목록에서 항을 제거합니다. 목록의 각 효과에 대해 요인 번호 및 멱을 지정합니다. 쉼표로 효과를 구분하여 교호작용을 생성합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );
d = DOE( Evaluate Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );
d << Remove Alias Term( {1, 1}, {3, 1} );

```

### Remove All Alias Terms

**구문:** obj &lt;&lt; Remove All Alias Terms

**설명:** 별칭 항 목록에서 모든 별칭 항을 제거합니다.

```jsl

d = DOE( Custom Design, Add Factor( Continuous, -1, 1, "X1", 0 ), Add Factor( Continuous, -1, 1, "X2", 0 ) );
d << Make Model( Linear );
d << Remove All Alias Terms;

```

### Remove Term

**구문:** obj &lt;&lt; Remove Term

**설명:** 모형 항 목록에서 항을 제거합니다. 목록의 각 효과에 대해 요인 번호 및 멱을 지정합니다. 쉼표로 효과를 구분하여 교호작용을 생성합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );
d = DOE( Evaluate Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );
d << Remove Term( {1, 1}, {3, 1} );
d << Remove Term( {3, 2} );

```

### Replicates

**구문:** obj &lt;&lt; Replicates

**설명:** 반복 런 수를 지정합니다. MSA 설계의 경우 두 번째 인수는 반복 구조를 지정합니다. 0=완전 랜덤화, 1=일괄 반복, 2=빠른 반복

#### 예제 1

```jsl

d = DOE( Custom Design, Add Factor( Continuous, -1, 1, "X1", 0 ), Add Factor( Continuous, -1, 1, "X2", 0 ) );
d << Make Model( Linear );
d << Replicates( 2 );

```

#### 예제 2

```jsl

d = DOE(
	MSA Design,
	{Add Response( None, "Y", ., ., . ), Add Factor( Categorical, {"L1", "L2"}, "X1", MSA( 4, 1 ) ),
	Add Factor( Categorical, {"L1", "L2"}, "X2", MSA( 4, 1 ) ), Add Factor(
		Categorical,
		{"L1", "L2"},
		"X3",
		MSA( 4, 1 )
	), Set Random Seed( 3983347 ), Replicates( 2, 0 ), Simulate Responses( 0 )}
);

```

### Report

**구문:** obj &lt;&lt; Report

**설명:** 보고서 개체에 대한 참조를 반환합니다.

```jsl

d = DOE( Custom Design );
r = d << report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Save Constraints

**구문:** obj &lt;&lt; Save Constraints

**설명:** 다른 실험에 사용할 수 있도록 현재 실험의 요인 제약 조건을 JMP 테이블에 저장합니다.

```jsl

DOE(
	Custom Design,
	Add Response( Maximize, "Y", ., ., . ),
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Add Factor( Continuous, -1, 1, "X3", 0 ),
	Add Constraint( [1 1 0 1, 1 0 1 1] ),
	Add Term( {1, 0} ),
	Save Constraints
);

```

### Save Factors

**구문:** obj &lt;&lt; Save Factors

**설명:** 방금 생성한 요인을 다른 실험에 사용할 수 있도록 JMP 테이블에 저장합니다.

```jsl

DOE(
	Custom Design,
	Add Response( Match Target, "Stretch", 350, 550, 1 ),
	Add Factor( Continuous, 0.7, 1.7, "Silica", 0 ),
	Add Factor( Continuous, 1.8, 2.8, "Sulfur", 0 ),
	Add Factor( Continuous, 40, 60, "Silane", 0 ),
	Save Factors
);

```

### Save Responses

**구문:** obj &lt;&lt; Save Responses

**설명:** 생성한 반응을 JMP 데이터 테이블로 저장합니다. 다른 실험에서 이러한 반응을 불러올 수 있습니다.

```jsl

DOE(
	Custom Design,
	Add Response( Match Target, "Stretch", 350, 550, 1 ),
	Add Factor( Continuous, 0.7, 1.7, "Silica", 0 ),
	Add Factor( Continuous, 1.8, 2.8, "Sulfur", 0 ),
	Add Factor( Continuous, 40, 60, "Silane", 0 ),
	Save Responses
);

```

### Save Script to Data Table

**구문:** obj &lt;&lt; Save Script to Data Table

**설명:** 이 설계를 재현할 스크립트를 생성합니다.

### Save Script to Script Window

**구문:** obj &lt;&lt; Save Script to Script Window

**설명:** 이 설계를 재현할 스크립트를 생성합니다.

```jsl

DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Make Design,
	Save Script to Script Window
);

```

### Save X Matrix

**구문:** obj &lt;&lt; Save X Matrix( state=0|1 )

**설명:** 설계 행렬(행렬 X라고도 함)을 설계가 포함된 JMP 데이터 테이블에 테이블 특성으로 저장합니다.

```jsl

DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Save X Matrix,
	Make Design,
	Make Table
);

```

### Screening Type

**구문:** obj &lt;&lt; Screening Type

**설명:** 주효과 선별 설계(직교 또는 직교에 가까움)를 지정합니다.

```jsl

d = DOE(
	Screening Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Add Factor( Continuous, -1, 1, "X3", 0 )
);
d << Screening Type( 1 );
d << Set Sample Size( 12 );
d << Make Design;

```

### Select Covariate Rows

**구문:** obj &lt;&lt; Select Covariate Rows

**설명:** DOE에서 선택할 공변량 테이블의 행을 지정합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
DOE(
	Custom Design,
	Add Response( Maximize, "Y", ., ., . ),
	Add Factor( Covariate, :sex, 0 ),
	Add Factor( Covariate, :height, 0 ),
	Add Factor( Covariate, :weight, 0 ),
	Add Term( {1, 0} ),
	Add Term( {1, 1} ),
	Add Term( {2, 1} ),
	Add Term( {3, 1} ),
	Enforce Use of Selected Covariate Rows( 1 ),
	Allow covariate rows to be repeated( 1 ),
	Select Covariate Rows( [1 2 3 4] ),
	Set Sample Size( 24 )
);

```

### Set ALT Probability of Interest

**구문:** obj &lt;&lt; Set ALT Probability of Interest

**설명:** 가속 수명 시험 계획에 대한 관심 확률을 설정합니다.

```jsl

DOE(
	Accelerated Life Test Plan,
	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Continuous Monitoring" ),
	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),
	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ), Set Level Values( 1, [90 100 110] ),
	Distribution Choice( LogNormal ), Set Prior Mean ALT( [-40 1.5 2] ),
	Set Prior Std Error ALT( [10, 0.2, 0.5] ), Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ),
	Use Prior Uncertainty( 1 ), Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ),
	Set Length of Test( 1000 ), Set Number of Units( 150 )}
);

```

### Set ALT Time Range

**구문:** obj &lt;&lt; Set ALT Time Range

**설명:** 가속 수명 시험 계획에 대한 관심 시간 범위를 설정합니다.

```jsl

DOE(
	Accelerated Life Test Plan,
	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Continuous Monitoring" ),
	ALT Optimality Criterion( "Make Failure Probability Optimal" ),
	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ), Set Level Values( 1, [90 100 110] ),
	Distribution Choice( LogNormal ), Set Prior Mean ALT( [-40 1.5 2] ),
	Set Prior Std Error ALT( [10, 0.2, 0.5] ), Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ),
	Use Prior Uncertainty( 1 ), Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ),
	Set Length of Test( 1000 ), Set Number of Units( 150 )}
);

```

### Set Average Cluster Size

**구문:** obj &lt;&lt; Set Average Cluster Size

**설명:** 쾌속 유연 채움 설계 군집화에 대한 랜덤 점 개수를 제어합니다.

```jsl

DOE(
	Space Filling Design,
	Change Factor Settings( 1, -1, 1, "X1" ),
	Change Factor Settings( 2, -1, 1, "X2" ),
	Set Average Cluster Size( 100 ),
	Space Filling Design Type( Fast Flexible Filling, 50 )
);

```

### Set Axial Choice

**구문:** obj &lt;&lt; Set Axial Choice( 1|2|3|4 )

**설명:** 축 값 설정을 지정합니다. 회전은 1, 직교는 2, 평면 위는 3, 사용자 지정은 4를 사용하십시오.

```jsl

d = DOE( Response Surface Design, Make Design( 2 ) );
d << Set Axial Choice( 2 );

```

### Set Axial Value

**구문:** obj &lt;&lt; Set Axial Value

**설명:** 사용자 지정 축 값을 지정합니다.

```jsl

d = DOE( Response Surface Design, Make Design( 2 ) );
d << Set Axial Value( 2 );

```

### Set Candidate Runs

**구문:** obj &lt;&lt; Set Candidate Runs

**설명:** 가속 수명 시험 계획에 대한 후보 런을 설정합니다.

```jsl

DOE(
	Accelerated Life Test Plan,
	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Monitoring at Intervals", {5, 200, 200} ),
	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),
	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ), Set Level Values( 1, [90 100 110] ),
	Distribution Choice( LogNormal ), Set Prior Mean ALT( [-40 1.5 2] ),
	Set Prior Std Error ALT( [10, 0.2, 0.5] ), Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ),
	Use Prior Uncertainty( 1 ), Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ),
	Set Length of Test( 1000 ), Set Inspection Times( [200 400 600 800 1000] ), Set Number of Units( 150 ),
	Set Candidate Runs( [90 0 150, 100 0 150, 110 0 150] )}
);

```

### Set Delta For Power

**구문:** obj &lt;&lt; Set Delta For Power

**설명:** 검정력 분석의 예상 계수 값을 지정합니다. 예상 계수는 지정된 값의 2분의 1이 됩니다.

```jsl

DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Set Delta For Power( 3 ),
	Make Design
);

```

### Set Expected Number of Respondents

**구문:** obj &lt;&lt; Set Expected Number of Respondents

**설명:** 설문 조사별 기대 응답자 수를 설정합니다.

```jsl

DOE(
	Choice Design,
	{Add Factor( Categorical, {"L1", "L2"}, "X1", 0 ), Add Factor( Categorical, {"L1", "L2"}, "X2", 0 ),
	Set Random Seed( 1245253625 ), Add Term( {1, 1} ), Add Term( {2, 1} ), Set Prior Mean Choice( [0 0] ),
	Set Prior Variance Matrix( [1 0, 0 1] ), Set Number of Attributes( 2 ), Set Number of Profiles( 2 ),
	Set Number of Choice Sets( 8 ), Set Number of Surveys( 1 ), Set Expected Number of Respondents( 1 )}
);

```

### Set Generators

**구문:** obj &lt;&lt; Set Generators

**설명:** 선별 설계에 사용할 생성자를 지정합니다.

```jsl

DOE( Screening Design, {Add Factor, Add Factor, Add Factor, Make Design( 1 ), Set Generators( [1, 1, 0] )} );

```

### Set Inspection Times

**구문:** obj &lt;&lt; Set Inspection Times

**설명:** 가속 수명 시험 계획에 대한 검사 횟수를 설정합니다.

```jsl

DOE(
	Accelerated Life Test Plan,
	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Monitoring at Intervals", {5, 200, 200} ),
	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),
	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ), Set Level Values( 1, [90 100 110] ),
	Distribution Choice( LogNormal ), Set Prior Mean ALT( [-40 1.5 2] ),
	Set Prior Std Error ALT( [10, 0.2, 0.5] ), Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ),
	Use Prior Uncertainty( 1 ), Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ),
	Set Length of Test( 1000 ), Set Inspection Times( [200 400 600 800 1000] ), Set Number of Units( 150 ),
	Set Candidate Runs( [90 0 150, 100 0 150, 110 0 150] )}
);

```

### Set Length of Test

**구문:** obj &lt;&lt; Set Length of Test

**설명:** 가속 수명 시험 계획에 대한 시험 시간을 설정합니다.

```jsl

DOE(
	Accelerated Life Test Plan,
	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Continuous Monitoring" ),
	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),
	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ), Set Level Values( 1, [90 100 110] ),
	Distribution Choice( LogNormal ), Set Prior Mean ALT( [-40 1.5 2] ),
	Set Prior Std Error ALT( [10, 0.2, 0.5] ), Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ),
	Use Prior Uncertainty( 1 ), Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ),
	Set Length of Test( 1000 ), Set Number of Units( 150 )}
);

```

### Set Level Values

**구문:** obj &lt;&lt; Set Level Values

**설명:** 가속 수명 시험 계획의 가속 요인에 대한 수준 값을 설정합니다.

```jsl

DOE(
	Accelerated Life Test Plan,
	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Monitoring at Intervals", {5, 200, 200} ),
	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),
	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ), Set Level Values( 1, [90 100 110] ),
	Distribution Choice( LogNormal ), Set Prior Mean ALT( [-40 1.5 2] ),
	Set Prior Std Error ALT( [10, 0.2, 0.5] ), Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ),
	Use Prior Uncertainty( 1 ), Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ),
	Set Length of Test( 1000 ), Set Inspection Times( [200 400 600 800 1000] ), Set Number of Units( 150 ),
	Set Candidate Runs( [90 0 150, 100 0 150, 110 0 150] )}
);

```

### Set Monitoring Choice

**구문:** obj &lt;&lt; Set Monitoring Choice

**설명:** 가속 수명 시험 계획에 대한 모니터링 유형을 지정합니다.

```jsl

DOE(
	Accelerated Life Test Plan,
	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Continuous Monitoring" ),
	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),
	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ), Set Level Values( 1, [90 100 110] ),
	Distribution Choice( LogNormal ), Set Prior Mean ALT( [-40 1.5 2] ),
	Set Prior Std Error ALT( [10, 0.2, 0.5] ), Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ),
	Use Prior Uncertainty( 1 ), Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ),
	Set Length of Test( 1000 ), Set Number of Units( 150 )}
);

```

### Set N Subplots

**구문:** obj &lt;&lt; Set N Subplots

**설명:** 변경하기 힘든 요인 및 매우 변경하기 힘든 요인이 모두 있는 경우의 하위구 수를 지정합니다.

```jsl

d = DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 2 ),
	Add Factor( Continuous, -1, 1, "X2", 1 ),
	Add Factor( Continuous, -1, 1, "X3", 0 )
);
d << Set N Whole Plots( 4 );
d << Set N Subplots( 8 );

```

### Set N Whole Plots

**구문:** obj &lt;&lt; Set N Whole Plots

**설명:** 변경하기 힘든 요인 또는 매우 변경하기 힘든 요인이 있는 경우의 주구 수를 지정합니다.

```jsl

d = DOE( Custom Design, Add Factor( Continuous, -1, 1, "X1", 1 ), Add Factor( Continuous, -1, 1, "X2", 0 ) );
d << Set N Whole Plots( 6 );

```

### Set Number of Attributes

**구문:** obj &lt;&lt; Set Number of Attributes

**설명:** 한 선택 집합 안에서 변경될 수 있는 속성 수를 설정합니다.

```jsl

DOE(
	Choice Design,
	{Add Factor( Categorical, {"L1", "L2"}, "X1", 0 ), Add Factor( Categorical, {"L1", "L2"}, "X2", 0 ),
	Set Random Seed( 1245253625 ), Add Term( {1, 1} ), Add Term( {2, 1} ), Set Prior Mean Choice( [0 0] ),
	Set Prior Variance Matrix( [1 0, 0 1] ), Set Number of Attributes( 2 ), Set Number of Profiles( 2 ),
	Set Number of Choice Sets( 8 ), Set Number of Surveys( 1 ), Set Expected Number of Respondents( 1 )}
);

```

### Set Number of Choice Sets

**구문:** obj &lt;&lt; Set Number of Choice Sets

**설명:** 설문 조사별 선택 집합 수를 설정합니다.

```jsl

DOE(
	Choice Design,
	{Add Factor( Categorical, {"L1", "L2"}, "X1", 0 ), Add Factor( Categorical, {"L1", "L2"}, "X2", 0 ),
	Set Random Seed( 1245253625 ), Add Term( {1, 1} ), Add Term( {2, 1} ), Set Prior Mean Choice( [0 0] ),
	Set Prior Variance Matrix( [1 0, 0 1] ), Set Number of Attributes( 2 ), Set Number of Profiles( 2 ),
	Set Number of Choice Sets( 8 ), Set Number of Surveys( 1 ), Set Expected Number of Respondents( 1 )}
);

```

### Set Number of FDS points

**구문:** obj &lt;&lt; Set Number of FDS points

**설명:** 설계 공간 비율 그림을 생성하는 데 사용할 점의 수를 설정합니다.

**JMP추가된 버전:** 14

```jsl

DOE(
	Custom Design,
	{Add Factor( Continuous, -1, 1, "X1", 0 ), Add Factor( Continuous, -1, 1, "X2", 0 ), Set Sample Size( 7 ),
	Design Search Time( 8 ), Set Number of FDS points( 20000 ), Make Design}
);

```

### Set Number of Profiles

**구문:** obj &lt;&lt; Set Number of Profiles

**설명:** 선택 집합별 프로파일 수를 설정합니다.

```jsl

DOE(
	Choice Design,
	{Add Factor( Categorical, {"L1", "L2"}, "X1", 0 ), Add Factor( Categorical, {"L1", "L2"}, "X2", 0 ),
	Set Random Seed( 1245253625 ), Add Term( {1, 1} ), Add Term( {2, 1} ), Set Prior Mean Choice( [0 0] ),
	Set Prior Variance Matrix( [1 0, 0 1] ), Set Number of Attributes( 2 ), Set Number of Profiles( 2 ),
	Set Number of Choice Sets( 8 ), Set Number of Surveys( 1 ), Set Expected Number of Respondents( 1 )}
);

```

### Set Number of Surveys

**구문:** obj &lt;&lt; Set Number of Surveys

**설명:** 선택 설계에 대한 설문 조사 수를 설정합니다.

```jsl

DOE(
	Choice Design,
	{Add Factor( Categorical, {"L1", "L2"}, "X1", 0 ), Add Factor( Categorical, {"L1", "L2"}, "X2", 0 ),
	Set Random Seed( 1245253625 ), Add Term( {1, 1} ), Add Term( {2, 1} ), Set Prior Mean Choice( [0 0] ),
	Set Prior Variance Matrix( [1 0, 0 1] ), Set Number of Attributes( 2 ), Set Number of Profiles( 2 ),
	Set Number of Choice Sets( 8 ), Set Number of Surveys( 1 ), Set Expected Number of Respondents( 1 )}
);

```

### Set Number of Units

**구문:** obj &lt;&lt; Set Number of Units

**설명:** 가속 수명 시험 계획에 대한 시험 유닛 수를 설정합니다.

```jsl

DOE(
	Accelerated Life Test Plan,
	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Continuous Monitoring" ),
	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),
	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ), Set Level Values( 1, [90 100 110] ),
	Distribution Choice( LogNormal ), Set Prior Mean ALT( [-40 1.5 2] ),
	Set Prior Std Error ALT( [10, 0.2, 0.5] ), Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ),
	Use Prior Uncertainty( 1 ), Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ),
	Set Length of Test( 1000 ), Set Number of Units( 150 )}
);

```

### Set Prior Correlation ALT

**구문:** obj &lt;&lt; Set Prior Correlation ALT

**설명:** 가속 수명 시험 계획에 대한 사전 상관을 설정합니다.

**JMP추가된 버전:** 16

```jsl

DOE(
	Accelerated Life Test Plan,
	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Continuous Monitoring" ),
	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),
	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ), Set Level Values( 1, [90 100 110] ),
	Distribution Choice( LogNormal ), Set Prior Mean ALT( [-40 1.5 2] ),
	Set Prior Std Error ALT( [10, 0.2, 0.5] ), Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ),
	Use Prior Uncertainty( 1 ), Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ),
	Set Length of Test( 1000 ), Set Number of Units( 150 )}
);

```

### Set Prior Mean ALT

**구문:** obj &lt;&lt; Set Prior Mean ALT

**설명:** 가속 수명 시험 계획에 대한 사전 평균을 설정합니다.

```jsl

DOE(
	Accelerated Life Test Plan,
	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Continuous Monitoring" ),
	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),
	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ), Set Level Values( 1, [90 100 110] ),
	Distribution Choice( LogNormal ), Set Prior Mean ALT( [-40 1.5 2] ),
	Set Prior Std Error ALT( [10, 0.2, 0.5] ), Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ),
	Use Prior Uncertainty( 1 ), Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ),
	Set Length of Test( 1000 ), Set Number of Units( 150 )}
);

```

### Set Prior Mean Choice

**구문:** obj &lt;&lt; Set Prior Mean Choice

**설명:** 선택 설계에 대한 사전 평균을 설정합니다.

```jsl

DOE(
	Choice Design,
	{Add Factor( Categorical, {"L1", "L2"}, "X1", 0 ), Add Factor( Categorical, {"L1", "L2"}, "X2", 0 ),
	Set Random Seed( 1245253625 ), Add Term( {1, 1} ), Add Term( {2, 1} ), Set Prior Mean Choice( [0 0] ),
	Set Prior Variance Matrix( [1 0, 0 1] ), Set Number of Attributes( 2 ), Set Number of Profiles( 2 ),
	Set Number of Choice Sets( 8 ), Set Number of Surveys( 1 ), Set Expected Number of Respondents( 1 )}
);

```

### Set Prior Quantile ALT

**구문:** obj &lt;&lt; Set Prior Quantile ALT

**설명:** 분위수를 기반으로 사전 절편을 지정하기 위한 정보를 설정합니다.

```jsl

DOE(
	Accelerated Life Test Plan,
	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Continuous Monitoring" ),
	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),
	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ), Set Level Values( 1, [90 100 110] ),
	Distribution Choice( LogNormal ), Prior Specification Choice( 2 ),
	Set Prior Quantile ALT( {[1.5 2], 0.065, 2642, 45} ), Set Prior Std Error ALT( [10, 0.2, 0.5] ),
	Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ), Use Prior Uncertainty( 1 ),
	Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ), Set Length of Test( 1000 ),
	Set Number of Units( 150 )}
);

```

### Set Prior Std Error ALT

**구문:** obj &lt;&lt; Set Prior Std Error ALT

**설명:** 가속 수명 시험 계획에 대한 사전 표준 오차를 설정합니다.

**JMP추가된 버전:** 16

```jsl

DOE(
	Accelerated Life Test Plan,
	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Continuous Monitoring" ),
	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),
	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ), Set Level Values( 1, [90 100 110] ),
	Distribution Choice( LogNormal ), Set Prior Mean ALT( [-40 1.5 2] ),
	Set Prior Std Error ALT( [10, 0.2, 0.5] ), Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ),
	Use Prior Uncertainty( 1 ), Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ),
	Set Length of Test( 1000 ), Set Number of Units( 150 )}
);

```

### Set Prior Variance ALT

**구문:** obj &lt;&lt; Set Prior Variance ALT

**설명:** 가속 수명 시험 계획에 대한 사전 분산을 설정합니다.

```jsl

DOE(
	Accelerated Life Test Plan,
	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Continuous Monitoring" ),
	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),
	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ), Set Level Values( 1, [90 100 110] ),
	Distribution Choice( LogNormal ), Set Prior Mean ALT( [-40 1.5 2] ),
	Set Prior Variance ALT( [0.1 0 0, 0 0.1 0, 0 0 0.1] ), Use Prior Uncertainty( 1 ),
	Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ), Set Length of Test( 1000 ),
	Set Number of Units( 150 )}
);

```

### Set Prior Variance Matrix

**구문:** obj &lt;&lt; Set Prior Variance Matrix

**설명:** 선택 설계에 대한 사전 분산 행렬을 설정합니다.

```jsl

DOE(
	Choice Design,
	{Add Factor( Categorical, {"L1", "L2"}, "X1", 0 ), Add Factor( Categorical, {"L1", "L2"}, "X2", 0 ),
	Set Random Seed( 1245253625 ), Add Term( {1, 1} ), Add Term( {2, 1} ), Set Prior Mean Choice( [0 0] ),
	Set Prior Variance Matrix( [1 0, 0 1] ), Set Number of Attributes( 2 ), Set Number of Profiles( 2 ),
	Set Number of Choice Sets( 8 ), Set Number of Surveys( 1 ), Set Expected Number of Respondents( 1 )}
);

```

### Set RMSE

**구문:** obj &lt;&lt; Set RMSE

**설명:** 검정력 분석에 예상 RMSE(제곱근 평균 제곱 오차)를 지정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );
d = DOE( Evaluate Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );
d << Set RMSE( 1.5 );

```

### Set Random Seed

**구문:** obj &lt;&lt; Set Random Seed

**설명:** 강의에 유용합니다. 난수 시드값을 특정 값으로 설정함으로써 모든 학급 구성원이 동일한 설계를 사용하게 할 수 있습니다.

```jsl

DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Set Random Seed( 34067086 ),
	Make Design
);

```

### Set Run Order

**구문:** obj &lt;&lt; Set Run Order

**설명:** 설계에서 데이터 테이블을 만들 때 어떤 방법으로 런 순서를 설정해야 하는지를 지정합니다.

```jsl

d = DOE( Custom Design, Add factor, Add factor, Add factor );
d << Make Design;
d << Set Run Order( Sort Left to Right );
d << Make Table;

```

### Set Runs Per Random Block

**구문:** obj &lt;&lt; Set Runs Per Random Block

**설명:** 설계의 랜덤 블록 크기를 지정합니다.

```jsl

d = DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Make Model( Linear )
);
d << Set Runs Per Random Block( 4 );

```

### Set Sample Size

**구문:** obj &lt;&lt; Set Sample Size

**설명:** 설계가 생성되기 전의 표본 크기를 지정합니다. 지정된 숫자가 설계 도구에 표시된 최소값보다 작을 경우 표본 크기가 최소값으로 설정됩니다.

```jsl

d = DOE( Custom Design, Add factor, Add factor, Add factor );
d << Make Model( Linear );
d << Set Sample Size( 12 );

```

### Set Significance Level

**구문:** obj &lt;&lt; Set Significance Level

**설명:** 검정력 분석의 유의 수준을 변경합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );
d = DOE( Evaluate Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );
d << Set Significance Level( 0.10 );

```

### Set Strength

**구문:** obj &lt;&lt; Set Strength

**설명:** 덮기 배열 강도를 설정합니다.

```jsl

d = DOE( Covering Array, Add factor( Categorical ), Add factor( Categorical ), Add factor( Categorical ) );
d << Set Strength( 3 );
d << Make Table;

```

### Show Blocking Options

**구문:** obj &lt;&lt; Show Blocking Options

**설명:** 확증적 선별 설계에 대한 블록 선택 및 블록 수를 지정합니다. 0 값을 지정하면 블록이 없음을 나타냅니다.

#### 예제 1

```jsl

DOE(
	Definitive Screening Design,
	Add Factor,
	Add Factor,
	Add Factor,
	Add Factor,
	Add Factor,
	Add Factor,
	Show Blocking Options( 0, 0 ),
	Number of Extra Runs( 4 )
);

```

#### 예제 2

```jsl

DOE(
	Definitive Screening Design,
	Add Factor,
	Add Factor,
	Add Factor,
	Add Factor,
	Add Factor,
	Add Factor,
	Show Blocking Options( 1, 2 ),
	Number of Extra Runs( 4 )
);

```

### Simulate Responses

**구문:** obj &lt;&lt; Simulate Responses( state=0|1 )

**설명:** 반응에 대한 데이터를 JMP 설계 테이블에 저장합니다. DOE 강의에 사용할 수 있습니다.

```jsl

DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Make Design,
	Simulate Responses,
	Make Table
);

```

### Solve for Power

**구문:** obj &lt;&lt; Solve for Power

**설명:** 검정력이 지정된 값에 가깝도록 검정력 분석의 예상 계수를 설정합니다.

**JMP추가된 버전:** 16

```jsl

DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Make Design,
	Solve for Power( 0.8 )
);

```

### Space Filling Design Type

**구문:** obj &lt;&lt; Space Filling Design Type( Sphere Packing|Latin Hypercube|Uniform|Minimum Potential|Maximum Entropy|IMSE Optimal|Fast Flexible Filling )

**설명:** 공간 채움 설계의 유형과 런 수를 지정합니다.

#### 예제 1

```jsl

d = DOE( Space Filling Design );
d << Space Filling Design Type( Sphere Packing, 30 );

```

#### 예제 2

```jsl

d = DOE( Space Filling Design );
d << Space Filling Design Type( Latin Hypercube, 100 );

```

#### 예제 3

```jsl

d = DOE( Space Filling Design );
d << Space Filling Design Type( Uniform, 20 );

```

#### 예제 4

```jsl

d = DOE( Space Filling Design );
d << Space Filling Design Type( Fast Flexible Filling, 100 );

```

#### 예제 5

```jsl

d = DOE( Space Filling Design, Space Filling Design Type( IMSE Optimal, 20 ) );
d << Theta( [2, 3] );
d << Make Design;

```

### Sphere Radius

**구문:** obj &lt;&lt; Sphere Radius

**설명:** 구형 설계 영역을 지정하며 영역의 반지름을 설정할 수 있습니다.

```jsl

DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Sphere Radius( 1 ),
	Make Design
);

```

### Split Plot Variance Ratio

**구문:** obj &lt;&lt; Split Plot Variance Ratio( Whole Plot Ratio | [Whole Plot Ratio, Subplot Ratio] )

**설명:** 변경하기 힘든 요인의 경우 주구 오차 분산 대 런 간의 오차 분산의 비를 지정합니다. 변경하기 힘든 요인 및 매우 변경하기 힘든 요인의 경우 주구 및 하위구 오차 대 런 간의 오차의 비를 지정합니다.

#### 예제 1

```jsl

DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 1 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Set N Whole Plots( 4 ),
	Split Plot Variance Ratio( 2 ),
	Make Design
);

```

#### 예제 2

```jsl

d = DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 2 ),
	Add Factor( Continuous, -1, 1, "X2", 1 ),
	Add Factor( Continuous, -1, 1, "X3", 0 ),
	Set N Whole Plots( 4 )
);
d << Split Plot Variance Ratio( [3, 2] );
d << Make Design;

```

### Suppress Cotter Designs

**구문:** obj &lt;&lt; Suppress Cotter Designs( state=0|1 )

**설명:** 선별 설계 목록에 Cotter 설계를 표시하거나 숨깁니다. 이 옵션은 기본값으로 선택됨. 즉, Cotter 설계가 처음에는 선별 설계 목록에 없습니다. 기본적으로 설정되어 있습니다.

```jsl

DOE(
	Screening Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Add Factor( Continuous, -1, 1, "X3", 0 ),
	Suppress Cotter Designs,
	Make Design( 5 )
);

```

### Table of Correlations

**구문:** obj &lt;&lt; Table of Correlations

**설명:** 설계 진단에서 상관계수표를 사용하여 데이터 테이블을 생성합니다.

**JMP추가된 버전:** 15

```jsl

DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Make Design,
	Table of Correlations
);

```

### Theta

**구문:** obj &lt;&lt; Theta

**설명:** 공간 채움 설계에 대한 공분산 모수 벡터를 지정합니다.

```jsl

d = DOE( Space Filling Design, Space Filling Design Type( IMSE Optimal, 20 ) );
d << Theta( [2, 3] );

```

### Treatments

**구문:** obj &lt;&lt; Treatments

**설명:** 균형 불완비 블록 설계(BIBD)에 대한 처리 수를 지정합니다.

**JMP추가된 버전:** 14

```jsl

d = DOE( Balanced Incomplete Block Design );
d << Treatments( 3, {"L1", "L2", "L3"} );
d << Make Design;

```

### Use Bayesian information

**구문:** obj &lt;&lt; Use Bayesian information( state=0|1 )

**설명:** 설계 진단을 위해 베이지안 설정의 사전 정보를 사용합니다.

**JMP추가된 버전:** 15

```jsl

DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Add Term( {1, 1} ),
	Add Term( {2, 1} ),
	Add Potential Term( {1, 1}, {2, 1} ),
	Number of Starts( 10 ),
	Make Design,
	Use Bayesian Information( 1 )
);

```

### Use Blue to Red color theme for color map

**구문:** obj &lt;&lt; Use Blue to Red color theme for color map( state=0|1 )

**설명:** 상관 색상 맵에 파랑-빨강 색상 테마를 사용합니다.

**JMP추가된 버전:** 15

### Use Prior Uncertainty

**구문:** obj &lt;&lt; Use Prior Uncertainty( state=0|1 )

**설명:** 최적 설계를 생성하기 위해 사전 불확도를 사용할지 여부를 지정합니다.

**JMP추가된 버전:** 16

```jsl

DOE(
	Accelerated Life Test Plan,
	{ALT Plan Setup( 1 ), Set Monitoring Choice( 2, {5, 200, 200} ),
	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),
	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ), Set Level Values( 1, [90 100 110] ),
	Distribution Choice( LogNormal ), Set Prior Mean ALT( [-40 1.5 2] ),
	Set Prior Std Error ALT( [10, 0.2, 0.5] ), Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ),
	Use Prior Uncertainty( 1 ), Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ),
	Set Length of Test( 1000 ), Set Inspection Times( [200 400 600 800 1000] ), Set Number of Units( 150 ),
	Set Candidate Runs( [90 0 150, 100 0 150, 110 0 150] )}
);

```

### Utility Neutral Design

**구문:** obj &lt;&lt; Utility Neutral Design( state=0|1 )

**설명:** 효용 중립 선택 설계를 생성할지 여부를 지정합니다.

```jsl

DOE(
	Choice Design,
	{Add Factor( Categorical, {"L1", "L2"}, "X1", 0 ), Add Factor( Categorical, {"L1", "L2"}, "X2", 0 ),
	Set Random Seed( 1245253625 ), Add Term( {1, 1} ), Add Term( {2, 1} ), Set Prior Mean Choice( [0 0] ),
	Set Prior Variance Matrix( [1 0, 0 1] ), Set Number of Attributes( 2 ), Set Number of Profiles( 2 ),
	Set Number of Choice Sets( 8 ), Set Number of Surveys( 1 ), Set Expected Number of Respondents( 1 ),
	Utility Neutral Design( 1 )}
);

```

