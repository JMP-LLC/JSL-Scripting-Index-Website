# Fit Y by X Group



## Bivariate > Bivariate Curve

### 연결된 생성자

#### Curve

**구문:** obj &lt;&lt; ( Curve[number] )

**설명:** 추가 메시지 라우팅을 위해 개별 곡선에 접근합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Bivariate( Y( :Weight ), X( :Height ), Fit Line );obj << (curve[1] << Line of Fit( 1 ));Wait( 1 );obj << (curve[1] << Line of Fit( 0 ));

```

### 항목 메시지

#### Confid Curves Fit

**구문:** obj &lt;&lt; ( Curve[number] &lt;&lt; Confid Curves Fit( state=0|1 ) ); obj &lt;&lt; Fit Name( {Confid Curves Fit( state=0|1 )} )

**설명:** 적합선에 대한 신뢰 곡선을 표시하거나 숨깁니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Fit Line( {Confid Curves Fit( 1 )} );Wait( 1 );obj << Fit Polynomial( 3 );obj << (curve[2] << Confid Curves Fit( 1 ));

```

#### Confid Curves Indiv

**구문:** obj &lt;&lt; ( Curve[number] &lt;&lt; Confid Curves Indiv( state=0|1 ) ); obj &lt;&lt; Fit Name( {Confid Curves Indiv( state=0|1 )} )

**설명:** 개별 예측값에 대한 신뢰 곡선을 표시하거나 숨깁니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ), Fit Line( {Confid Curves Indiv( 1 )} ) );Wait( 1 );obj << Fit Polynomial( 3 );obj << (curve[2] << Confid Curves Indiv( 1 ));

```

#### Confid Shaded Fit

**구문:** obj &lt;&lt; ( Curve[number] &lt;&lt; Confid Shaded Fit( state=0|1 ) ); obj &lt;&lt; Fit Name( {Confid Shaded Fit( state=0|1 )} )

**설명:** 신뢰 곡선과 적합선 사이의 영역에 음영을 적용합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Bivariate( Y( :Weight ), X( :Height ) );obj << Fit Line( {Confid Curves Fit( 1 ), Confid Shaded Fit( 1 )} );Wait( 1 );obj << (curve[1] << Confid Shaded Fit( 0 ));

```

#### Confid Shaded Indiv

**구문:** obj &lt;&lt; ( Curve[number] &lt;&lt; Confid Shaded Indiv( state=0|1 ) ); obj &lt;&lt; Fit Name( {Confid Shaded Indiv( state=0|1 )} )

**설명:** 개별 예측값에 대한 신뢰 곡선과 적합선 사이의 영역에 음영을 적용합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Bivariate( Y( :Weight ), X( :Height ) );obj << Fit Line( {Confid Curves Indiv( 1 ), Confid Shaded Indiv( 1 )} );Wait( 1 );obj << (curve[1] << Confid Shaded Indiv( 0 ));

```

#### Indiv Confidence Limit Formula

**구문:** obj &lt;&lt; ( Curve[number] &lt;&lt; Indiv Confidence Limit Formula( &lt;alpha&gt; ) ); obj &lt;&lt; Fit Name( {Indiv Confidence Limit Formula( &lt;alpha&gt; ) )

**설명:** 새 계산식 열을 원래 데이터 테이블에 저장합니다. 개별 예측에 대한 신뢰 하한 및 신뢰 상한을 회귀변수의 함수로 계산하는 열이 포함됩니다. 기본 유의 수준은 0.05로, 95% 신뢰 한계를 생성합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ), Fit Polynomial( 3 ) );obj << (Curve[1] << Indiv Confidence Limit Formula( .001 ));Wait( 1 );obj << Fit Line( {Indiv Confidence Limit Formula( 0.01 )} );

```

#### Line Color

**구문:** obj &lt;&lt; ( Curve[number] &lt;&lt; Line Color( "color" ) ); obj &lt;&lt; Fit Name( {Line Color( "color" )} ) obj &lt;&lt; Density Ellipse( {Line Color( "color" )} )

**설명:** 적합선, 신뢰 곡선 및 음영 신뢰 영역의 선 색상을 변경합니다.

**곡선 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Fit Line( {Confid Curves Indiv, Line Color( "Medium Dark BlueGreen" )} );Wait( 1 );obj << (curve[1] << Line Color( "black" ));

```

**정규 타원 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Density Ellipse( 0.95, {Line Color( "Medium Dark BlueGreen" )} );Wait( 1 );obj << (curve[1] << Line Color( "black" ));

```

#### Line Style

**구문:** obj &lt;&lt; ( Curve[number] &lt;&lt; Line Style( "pen style" ) ); obj &lt;&lt; Fit Name( {Line Styel( "pen style" )} ) obj &lt;&lt; Density Ellipse( {Line Style( "pen style" )} )

**설명:** 적합선의 선 스타일을 변경합니다.

**곡선 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ), Fit Line( {Confid Curves Fit} ) );Wait( 1 );obj << (Curve[1] << Line Style( "DashDot" ));obj << Fit Polynomial( 3, {Line Style( "Dense Dash" )} );

```

**정규 타원 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ), Density Ellipse( 0.95 ) );Wait( 1 );obj << (Curve[1] << Line Style( "DashDot" ));obj << Density Ellipse( 0.90, {Line Style( "Dense Dash" )} );

```

#### Line Width

**구문:** obj &lt;&lt; ( Curve[number] &lt;&lt; Line Width( number ) ); obj &lt;&lt; Fit Name( {Line Width( number )} ) obj &lt;&lt; Density Ellipse( {Line Width( number )} )

**설명:** 적합선의 두께, 신뢰 곡선의 두께를 변경합니다.

**곡선 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Fit Line( {Line Width( 3 )} );Wait( 1 );obj << (curve[1] << Line Width( 1 ));

```

**정규 타원 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Density Ellipse( 0.99, {Line Width( 3 )} );Wait( 1 );obj << (curve[1] << Line Width( 1 ));

```

#### Line of Fit

**구문:** obj &lt;&lt; ( Curve[number] &lt;&lt; Line of Fit( state=0|1 ) ); obj &lt;&lt; Fit Name( {Line of Fit( state=0|1 )} ) obj &lt;&lt; Density Ellipse( {Line of Fit( state=0|1 )} )

**설명:** 적합선을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**곡선 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ), Fit Line );Wait( 1 );obj << (Curve[1] << Line of Fit( 0 ));obj << Fit Polynomial( 3, {Line of Fit( 0 )} );

```

**정규 타원 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ), Density Ellipse( 0.95 ) );Wait( 1 );obj << (Curve[1] << Line of Fit( 0 ));obj << Density Ellipse( 0.90, {Line of Fit( 0 )} );

```

#### Mean Confidence Limit Formula

**구문:** obj &lt;&lt; ( Curve[number] &lt;&lt; Mean Confidence Limit Formula( &lt;alpha&gt; ) ); obj &lt;&lt; Fit Name( {Mean Confidence Limit Formula( &lt;alpha&gt; ) )

**설명:** 새 계산식 열을 원래 데이터 테이블에 저장합니다. 평균 반응에 대한 신뢰 하한 및 신뢰 상한을 회귀변수의 함수로 계산하는 열이 포함됩니다. 기본 유의 수준은 0.05로, 95% 신뢰 한계를 생성합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ), Fit Polynomial( 3 ) );obj << (Curve[1] << Mean Confidence Limit Formula( .01 ));Wait( 1 );obj << Fit Line( {Mean Confidence Limit Formula( 0.05 )} );

```

#### Plot Residuals

**구문:** obj &lt;&lt; ( Curve[number] &lt;&lt; Plot Residuals( state=0|1 ) ); obj &lt;&lt; Fit Name( {Plot Residuals( state=0|1 )} )

**설명:** 다섯 가지 진단 그림을 표시하거나 숨깁니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Bivariate( Y( :Weight ), X( :Height ) );obj << Fit Line( 1, {Plot Residuals( 1 )} );Wait( 1 );obj << (curve[1] << Plot Residuals( 0 ));

```

#### Profiler

**구문:** obj &lt;&lt; ( Curve[number] &lt;&lt; Profiler( state=0|1 ) ); obj &lt;&lt; Fit Name( {Profiler( state=0|1 )} )

**설명:** 선택한 예측 변수와 지정된 모형이 주어지면 선택한 결과에 대한 예측 프로파일러를 표시하거나 숨깁니다.

**JMP추가된 버전:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Fit Polynomial( 3, {Profiler( 1 )} );Wait( 1 );obj << (Curve[1] << Profiler( 0 ));

```

#### Remove Fit

**구문:** obj &lt;&lt; ( Curve[number] &lt;&lt; Remove Fit )

**설명:** 적합 곡선을 제거합니다.

**곡선 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Fit Line( 1 );obj << Fit Polynomial( 3 );Wait( 1 );obj << (Curve[2] << Remove Fit);

```

**정규 타원 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Density Ellipse( 0.95 );obj << Density Ellipse( 0.90 );Wait( 1 );obj << (Curve[2] << Remove Fit);

```

#### Report

**구문:** obj &lt;&lt; ( Curve[number] &lt;&lt; Report( state=0|1 ) ); obj &lt;&lt; Fit Name( {Report( state=0|1 )} ) obj &lt;&lt; Density Ellipse( {Report( state=0|1 )} )

**설명:** 적합 요약, 적합 결여, ANOVA 및 모수 추정값에 대한 보고서를 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**곡선 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Fit Line( {Report( 0 )} );Wait( 1 );obj << (Curve[1] << Report( 1 ));

```

**정규 타원 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Density Ellipse( 0.95, {Report( 0 )} );Wait( 1 );obj << (Curve[1] << Report( 1 ));

```

#### Save Predicteds

**구문:** obj &lt;&lt; ( Curve[number] &lt;&lt; Save Predicteds ); obj &lt;&lt; Fit Name( {Save Predicteds} )

**설명:** 새 열을 원래 데이터 테이블에 저장합니다. 이 열에는 지정된 적합 곡선에 대한 예측값이 포함됩니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Fit Polynomial( 3, {Save Predicteds} );Wait( 1 );obj << Fit Line( 1 );obj << (curve[2] << Save Predicteds);

```

#### Save Residuals

**구문:** obj &lt;&lt; ( Curve[number] &lt;&lt; Save Residuals ); obj &lt;&lt; Fit Name( {Save Residuals} )

**설명:** 새 열을 원래 데이터 테이블에 저장합니다. 이 열에는 지정된 적합 곡선에 대한 잔차 값이 포함됩니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ), Fit Polynomial( 3 ) );obj << (Curve[1] << Save Residuals);Wait( 1 );obj << Fit Line( {Save Residuals} );

```

#### Save Studentized Residuals

**구문:** obj &lt;&lt; ( Curve[number] &lt;&lt; Save Studentized Residuals ); obj &lt;&lt; Fit Name( {Save Studentized Residuals} )

**설명:** 새 열을 원래 데이터 테이블에 저장합니다. 이 열에는 지정된 적합 곡선에 대한 스튜던트화 잔차가 포함됩니다.

**JMP추가된 버전:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ), Fit Polynomial( 3 ) );obj << (Curve[1] << Save Studentized Residuals);Wait( 1 );obj << Fit Line( {Save Studentized Residuals} );

```

#### Set Alpha Level

**구문:** obj &lt;&lt; ( Curve[number] &lt;&lt; Set Alpha Level( alpha ) ); obj &lt;&lt; Fit Name( {Set Alpha Level( alpha )} )

**설명:** 신뢰 곡선에 사용되는 유의 수준을 변경합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Bivariate( Y( :Weight ), X( :Height ) );obj << Fit Line( {Confid Curves Fit( 1 ), Set Alpha Level( 0.001 )} );obj << Fit Polynomial( 2, {Confid Curves Fit( 1 )} );Wait( 1 );obj << (curve[2] << Set Alpha Level( 0.01 ));

```

#### Set α Level

**구문:** obj &lt;&lt; ( Curve[number] &lt;&lt; Set Alpha Level( alpha ) ); obj &lt;&lt; Fit Name( {Set Alpha Level( alpha )} )

**설명:** 신뢰 곡선에 사용되는 유의 수준을 변경합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Bivariate( Y( :Weight ), X( :Height ) );obj << Fit Line( {Confid Curves Fit( 1 ), Set Alpha Level( 0.001 )} );obj << Fit Polynomial( 2, {Confid Curves Fit( 1 )} );Wait( 1 );obj << (curve[2] << Set Alpha Level( 0.01 ));

```

## Bivariate > Bivariate Nonpar Density

### 항목 메시지

#### 5% Contours

**구문:** obj &lt;&lt; ( Curve[number] &lt;&lt; "5% Contours"n( state=0|1 ) ); obj &lt;&lt; Nonpar Density( {"5% Contours"n( state=0|1 )} )

**설명:** 5% 등고선을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Nonpar Density( {"5% Contours"n( 0 )} );Wait( 1 );obj << (curve[1] << "5% Contours"n( 1 ));

```

#### Color By Density Quantile

**구문:** obj &lt;&lt; ( Curve[number] &lt;&lt; Color By Density Quantile ); obj &lt;&lt; Nonpar Density( {Color by Density Quantile} )

**설명:** 밀도에 따라 점과 행에 색상을 적용합니다.

**예제 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ), Nonpar Density );Wait( 1 );obj << (curve[1] << Color By Density Quantile);

```

**예제 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Nonpar Density( {Color By Density Quantile} );

```

#### Color Theme

**구문:** obj &lt;&lt; ( Curve[number] &lt;&lt; Color Theme( "theme"(state=0|1 ) ) ); obj &lt;&lt; Nonpar Density( {Color Theme( "theme"( state=0|1 ) )} )

**설명:** 분위수 밀도 등고선에 대한 색상 테마를 설정합니다.

**JMP추가된 버전:** 14

**예제 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ), Nonpar Density );obj << (curve[1] << Color Theme( "Jet"(1) ));

```

**예제 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Nonpar Density( {Color Theme( "White to Black"(1) )} );

```

#### Contour Fill

**구문:** obj &lt;&lt; ( Curve[number] &lt;&lt; Contour Fill( state=0|1 ) ); obj &lt;&lt; Nonpar Density( {Contour Fill( state=0|1 )} )

**설명:** 채워진 등고선을 표시하거나 숨깁니다.

**예제 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ), Nonpar Density( {Contour Lines( 0 )} ) );obj << (curve[1] << Contour Fill( 1 ));

```

**예제 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Nonpar Density( {Contour Fill( 1 )} );

```

#### Contour Lines

**구문:** obj &lt;&lt; ( Curve[number] &lt;&lt; Contour Lines( state=0|1 ) ); obj &lt;&lt; Nonpar Density( {Contour Lines( state=0|1 )} )

**설명:** 등고선을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Nonpar Density( {Contour Lines( 0 )} );Wait( 1 );obj << (curve[1] << Contour Lines( 1 ));

```

#### Kernel Control

**구문:** obj &lt;&lt; ( Curve[number] &lt;&lt; Kernel Control( state=0|1 ) ); obj &lt;&lt; Nonpar Density( {Kernel Control( state=0|1 )} )

**설명:** 각 변수의 표준편차를 제어하는 슬라이더를 표시하거나 숨깁니다. 표준편차는 등고선 밀도를 결정하기 위한 X 및 Y 값 범위를 정의합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Nonpar Density( {Kernel Control( 1 )} );Wait( 1 );obj << (curve[1] << Kernel Control( 0 ));

```

#### Mesh Plot

**구문:** obj &lt;&lt; ( Curve[number] &lt;&lt; Mesh Plot( state=0|1 ) ); obj &lt;&lt; Nonpar Density( {Mesh Plot( state=0|1 )} )

**설명:** 두 분석 변수의 격자에 대한 3차원 밀도 그림을 표시하거나 숨깁니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Nonpar Density( {Mesh Plot( 1 )} );Wait( 1 );obj << (curve[1] << Mesh Plot( 0 ));

```

#### Modal Clustering

**구문:** obj &lt;&lt; ( Curve[number] &lt;&lt; Modal Clustering( state=0|1 ) ); obj &lt;&lt; Nonpar Density( {Modal Clustering( state=0|1 )} )

**설명:** 현재 등고선을 기반으로 군집 할당을 식별하는 데이터의 최빈 군집화 결과를 표시하거나 숨깁니다. 또한 이 옵션은 군집 번호를 데이터 테이블의 새 열에 저장합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Nonpar Density( {Modal Clustering( 1 )} );Wait( 1 );obj << (curve[1] << Modal Clustering( 0 ));

```

#### Remove Fit

**구문:** obj &lt;&lt; ( Curve[number] &lt;&lt; Remove Fit )

**설명:** 비모수 밀도를 제거합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Nonpar Density();Wait( 1 );obj << (curve[1] << Remove Fit);

```

#### Report

**구문:** obj &lt;&lt; ( Curve[number] &lt;&lt; Report( state=0|1 ) ); obj &lt;&lt; Nonpar Density( {Report( state=0|1 )} )

**설명:** 분위수 밀도 등고선 보고서를 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Nonpar Density( {Report( 0 )} );Wait( 1 );obj << (curve[1] << Report( 1 ));

```

#### Save Density Grid

**구문:** obj &lt;&lt; ( Curve[number] &lt;&lt; Save Density Grid ); obj &lt;&lt; Nonpar Density( {Save Density Grid} )

**설명:** 열을 새 데이터 테이블에 저장합니다. 이 열에는 밀도 추정값과 해당 분위수가 포함됩니다.

**예제 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Nonpar Density( {Save Density Grid} );

```

**예제 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ), Nonpar Density );obj << (curve[1] << Save Density Grid);

```

#### Save Density Quantile

**구문:** obj &lt;&lt; ( Curve[number] &lt;&lt; Save Density Quantile ); obj &lt;&lt; Nonpar( {Save Density Quantile} )

**설명:** 새 열을 원래 데이터 테이블에 저장합니다. 이 열에는 각 점을 포함하는 밀도 분위수를 나타내는 값이 포함됩니다.

**예제 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ), Nonpar Density );obj << (curve[1] << Save Density Quantile);

```

**예제 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Nonpar Density( {Save Density Quantile} );

```

#### Select Points by Density

**구문:** obj &lt;&lt; ( Curve[number] &lt;&lt; Select Points by Density( lower probability, upper probability ) ); obj &lt;&lt; Nonpar Density( {Select Points by Density( lower probability, upper probability )} )

**설명:** 지정된 확률 하한과 확률 상한 사이의 점을 선택합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Nonpar Density( {Select Points by Density( 0.2, 0.5 )} );Wait( 1 );obj << (curve[1] << Select Points by Density( 0.8, 1 ));

```

#### Set Kernel

**구문:** obj &lt;&lt; ( Curve[number] &lt;&lt; Set Kernel( xStdDev, yStdDev )); obj &lt;&lt; Nonpar Density( {Set Kernel( xStdDev, yStdDev )} )

**설명:** X 및 Y 값에 대한 커널 표준편차를 설정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Nonpar Density( {Kernel Control( 1 ), Set Kernel( 8.537, 1.7333 )} );Wait( 1 );obj << (curve[1] << Set Kernel( 8, 1 ));

```

## Bivariate > Bivariate Normal Ellipse

### 항목 메시지

#### Confid Curves Fit

**구문:** obj &lt;&lt; ( Curve[number] &lt;&lt; Confid Curves Fit( state=0|1 ) ); obj &lt;&lt; Fit Name( {Confid Curves Fit( state=0|1 )} )

**설명:** 적합선에 대한 신뢰 곡선을 표시하거나 숨깁니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Fit Line( {Confid Curves Fit( 1 )} );Wait( 1 );obj << Fit Polynomial( 3 );obj << (curve[2] << Confid Curves Fit( 1 ));

```

#### Confid Curves Indiv

**구문:** obj &lt;&lt; ( Curve[number] &lt;&lt; Confid Curves Indiv( state=0|1 ) ); obj &lt;&lt; Fit Name( {Confid Curves Indiv( state=0|1 )} )

**설명:** 개별 예측값에 대한 신뢰 곡선을 표시하거나 숨깁니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ), Fit Line( {Confid Curves Indiv( 1 )} ) );Wait( 1 );obj << Fit Polynomial( 3 );obj << (curve[2] << Confid Curves Indiv( 1 ));

```

#### Indiv Confidence Limit Formula

**구문:** obj &lt;&lt; ( Curve[number] &lt;&lt; Indiv Confidence Limit Formula( &lt;alpha&gt; ) ); obj &lt;&lt; Fit Name( {Indiv Confidence Limit Formula( &lt;alpha&gt; ) )

**설명:** 새 계산식 열을 원래 데이터 테이블에 저장합니다. 개별 예측에 대한 신뢰 하한 및 신뢰 상한을 회귀변수의 함수로 계산하는 열이 포함됩니다. 기본 유의 수준은 0.05로, 95% 신뢰 한계를 생성합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ), Fit Polynomial( 3 ) );obj << (Curve[1] << Indiv Confidence Limit Formula( .001 ));Wait( 1 );obj << Fit Line( {Indiv Confidence Limit Formula( 0.01 )} );

```

#### Line Color

**구문:** obj &lt;&lt; ( Curve[number] &lt;&lt; Line Color( "color" ) ); obj &lt;&lt; Fit Name( {Line Color( "color" )} ) obj &lt;&lt; Density Ellipse( {Line Color( "color" )} )

**설명:** 적합선, 신뢰 곡선 및 음영 신뢰 영역의 선 색상을 변경합니다.

**곡선 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Fit Line( {Confid Curves Indiv, Line Color( "Medium Dark BlueGreen" )} );Wait( 1 );obj << (curve[1] << Line Color( "black" ));

```

**정규 타원 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Density Ellipse( 0.95, {Line Color( "Medium Dark BlueGreen" )} );Wait( 1 );obj << (curve[1] << Line Color( "black" ));

```

#### Line Style

**구문:** obj &lt;&lt; ( Curve[number] &lt;&lt; Line Style( "pen style" ) ); obj &lt;&lt; Fit Name( {Line Styel( "pen style" )} ) obj &lt;&lt; Density Ellipse( {Line Style( "pen style" )} )

**설명:** 적합선의 선 스타일을 변경합니다.

**곡선 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ), Fit Line( {Confid Curves Fit} ) );Wait( 1 );obj << (Curve[1] << Line Style( "DashDot" ));obj << Fit Polynomial( 3, {Line Style( "Dense Dash" )} );

```

**정규 타원 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ), Density Ellipse( 0.95 ) );Wait( 1 );obj << (Curve[1] << Line Style( "DashDot" ));obj << Density Ellipse( 0.90, {Line Style( "Dense Dash" )} );

```

#### Line Width

**구문:** obj &lt;&lt; ( Curve[number] &lt;&lt; Line Width( number ) ); obj &lt;&lt; Fit Name( {Line Width( number )} ) obj &lt;&lt; Density Ellipse( {Line Width( number )} )

**설명:** 적합선의 두께, 신뢰 곡선의 두께를 변경합니다.

**곡선 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Fit Line( {Line Width( 3 )} );Wait( 1 );obj << (curve[1] << Line Width( 1 ));

```

**정규 타원 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Density Ellipse( 0.99, {Line Width( 3 )} );Wait( 1 );obj << (curve[1] << Line Width( 1 ));

```

#### Line of Fit

**구문:** obj &lt;&lt; ( Curve[number] &lt;&lt; Line of Fit( state=0|1 ) ); obj &lt;&lt; Fit Name( {Line of Fit( state=0|1 )} ) obj &lt;&lt; Density Ellipse( {Line of Fit( state=0|1 )} )

**설명:** 적합선을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**곡선 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ), Fit Line );Wait( 1 );obj << (Curve[1] << Line of Fit( 0 ));obj << Fit Polynomial( 3, {Line of Fit( 0 )} );

```

**정규 타원 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ), Density Ellipse( 0.95 ) );Wait( 1 );obj << (Curve[1] << Line of Fit( 0 ));obj << Density Ellipse( 0.90, {Line of Fit( 0 )} );

```

#### Mean Confidence Limit Formula

**구문:** obj &lt;&lt; ( Curve[number] &lt;&lt; Mean Confidence Limit Formula( &lt;alpha&gt; ) ); obj &lt;&lt; Fit Name( {Mean Confidence Limit Formula( &lt;alpha&gt; ) )

**설명:** 새 계산식 열을 원래 데이터 테이블에 저장합니다. 평균 반응에 대한 신뢰 하한 및 신뢰 상한을 회귀변수의 함수로 계산하는 열이 포함됩니다. 기본 유의 수준은 0.05로, 95% 신뢰 한계를 생성합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ), Fit Polynomial( 3 ) );obj << (Curve[1] << Mean Confidence Limit Formula( .01 ));Wait( 1 );obj << Fit Line( {Mean Confidence Limit Formula( 0.05 )} );

```

#### Remove Fit

**구문:** obj &lt;&lt; ( Curve[number] &lt;&lt; Remove Fit )

**설명:** 적합 곡선을 제거합니다.

**곡선 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Fit Line( 1 );obj << Fit Polynomial( 3 );Wait( 1 );obj << (Curve[2] << Remove Fit);

```

**정규 타원 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Density Ellipse( 0.95 );obj << Density Ellipse( 0.90 );Wait( 1 );obj << (Curve[2] << Remove Fit);

```

#### Report

**구문:** obj &lt;&lt; ( Curve[number] &lt;&lt; Report( state=0|1 ) ); obj &lt;&lt; Fit Name( {Report( state=0|1 )} ) obj &lt;&lt; Density Ellipse( {Report( state=0|1 )} )

**설명:** 적합 요약, 적합 결여, ANOVA 및 모수 추정값에 대한 보고서를 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**곡선 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Fit Line( {Report( 0 )} );Wait( 1 );obj << (Curve[1] << Report( 1 ));

```

**정규 타원 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Density Ellipse( 0.95, {Report( 0 )} );Wait( 1 );obj << (Curve[1] << Report( 1 ));

```

#### Save Predicteds

**구문:** obj &lt;&lt; ( Curve[number] &lt;&lt; Save Predicteds ); obj &lt;&lt; Fit Name( {Save Predicteds} )

**설명:** 새 열을 원래 데이터 테이블에 저장합니다. 이 열에는 지정된 적합 곡선에 대한 예측값이 포함됩니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Fit Polynomial( 3, {Save Predicteds} );Wait( 1 );obj << Fit Line( 1 );obj << (curve[2] << Save Predicteds);

```

#### Save Residuals

**구문:** obj &lt;&lt; ( Curve[number] &lt;&lt; Save Residuals ); obj &lt;&lt; Fit Name( {Save Residuals} )

**설명:** 새 열을 원래 데이터 테이블에 저장합니다. 이 열에는 지정된 적합 곡선에 대한 잔차 값이 포함됩니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ), Fit Polynomial( 3 ) );obj << (Curve[1] << Save Residuals);Wait( 1 );obj << Fit Line( {Save Residuals} );

```

#### Save Studentized Residuals

**구문:** obj &lt;&lt; ( Curve[number] &lt;&lt; Save Studentized Residuals ); obj &lt;&lt; Fit Name( {Save Studentized Residuals} )

**설명:** 새 열을 원래 데이터 테이블에 저장합니다. 이 열에는 지정된 적합 곡선에 대한 스튜던트화 잔차가 포함됩니다.

**JMP추가된 버전:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ), Fit Polynomial( 3 ) );obj << (Curve[1] << Save Studentized Residuals);Wait( 1 );obj << Fit Line( {Save Studentized Residuals} );

```

#### Select Points Inside

**구문:** obj &lt;&lt; ( Curve[number] &lt;&lt; Select Points Inside ); obj &lt;&lt; Density Ellipse( {Select Points Inside} )

**설명:** 타원 내부에 있는 점을 선택합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Bivariate( Y( :Weight ), X( :Height ), Density Ellipse( 0.95, {Line Color( {213, 72, 87} )} ), );obj << (curve[1] << Select Points Inside);Wait( 1 );obj << Density Ellipse( 0.8, {Select Points Inside} );

```

#### Select Points Outside

**구문:** obj &lt;&lt; ( Curve[number] &lt;&lt; Select Points Outside ); obj &lt;&lt; Density Ellipse( {Select Points Outside} )

**설명:** 타원 외부에 있는 점을 선택합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Bivariate( Y( :Weight ), X( :Height ), Density Ellipse( 0.8, {Line Color( {213, 72, 87} )} ), );obj << (curve[1] << Select Points Outside);Wait( 1 );obj << Density Ellipse( 0.95, {Select Points Outside} );

```

#### Shaded Contour

**구문:** obj &lt;&lt; ( Curve[number] &lt;&lt; Shaded Contour( state=0|1 ) ); obj &lt;&lt; Density Ellipse( {Shaded Contour( state=0|1 )} )

**설명:** 음영 등고선을 표시하거나 숨깁니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Bivariate( Y( :Weight ), X( :Height ), );obj << Density Ellipse( 0.95, {Shaded Contour( 1 )} );Wait( 1 );obj << (Curve[1] << Shaded Contour( 0 ));

```

## Bivariate

### 공유 항목 메시지

#### Action

**구문:** obj &lt;&lt; Action

**설명:** 실행할 표현식을 삽입하기 위한 플랫폼 내의 다목적 트랩도어. 임시로 표시 상자 및 데이터 테이블 유형을 플랫폼에 설정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

#### Apply Preset

**구문:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**설명:** 이전에 생성된 사전 설정을 개체에 적용하여 옵션과 사용자 정의를 저장된 설정과 일치하도록 업데이트합니다.

**JMP추가된 버전:** 18

**이름으로 검색**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

**익명 사전 설정**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );Wait( 1 );obj2 << Apply Preset( preset );

```

**폴더 내에서 검색**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

#### Automatic Recalc

**구문:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**설명:** 제외 항목 및 데이터 변경이 있을 때 분석을 자동으로 다시 실행합니다. 자동 재계산 옵션이 설정된 경우 재계산하기 전에 제외 항목 및 데이터 변경이 적용되게 하려면 Wait(0) 명령을 사용하는 것이 좋습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Automatic Recalc( 1 );dt << Select Rows( 5 ) << Exclude( 1 );

```

#### Broadcast

**구문:** obj &lt;&lt; Broadcast(message)

**설명:** 플랫폼에 메시지를 브로드캐스트합니다. 개별 개체의 반환 결과가 테이블인 경우 가능하면 테이블이 연결되고 최종 형식은 테이블 상자의 &apos;결합 테이블 저장&apos; 옵션 결과 또는 소스 열을 사용한 &apos;연결&apos; 옵션 결과와 동일합니다. 그 외의 경우에는 결과가 목록에 저장되어 반환됩니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );objs = Control Chart Builder( Variables( Subgroup( :DAY ), Y( :DIAMETER ) ), By( :OPERATOR ) );objs[1] << Broadcast( Save Summaries );

```

#### Column Switcher

**구문:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**설명:** 플랫폼 변수를 변경하기 위한 제어판을 추가합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher( :marital status, {:sex, :country, :marital status} );

```

#### Copy ByGroup Script

**구문:** obj &lt;&lt; Copy ByGroup Script

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 클립보드에 넣습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Bivariate( Y( :Weight ), X( :Height ), By( :_bycol ), Group Options( Return Group( 1 ) ) );obj[1] << Copy ByGroup Script;

```

#### Copy Script

**구문:** obj &lt;&lt; Copy Script

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 클립보드에 넣습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Copy Script;

```

#### Data Table Window

**구문:** obj &lt;&lt; Data Table Window

**설명:** 이 분석에 대한 데이터 테이블 창을 앞으로 가져옵니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Data Table Window;

```

#### Get By Levels

**구문:** obj &lt;&lt; Get By Levels

**설명:** 기준 그룹 열을 값에 매핑하는 연관 배열을 반환합니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv << Get By Levels;

```

#### Get ByGroup Script

**구문:** obj &lt;&lt; Get ByGroup Script

**설명:** 이 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Bivariate( Y( :Weight ), X( :Height ), By( :_bycol ), Group Options( Return Group( 1 ) ) );t = obj[1] << Get ByGroup Script;Show( t );

```

#### Get Container

**구문:** obj &lt;&lt; Get Container

**설명:** 개체의 콘텐츠를 담고 있는 컨테이너 상자에 대한 참조를 반환합니다.

**일반**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**필터 사용 플랫폼**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

#### Get Data Table

**구문:** obj &lt;&lt; Get Data Table

**설명:** 데이터 테이블에 대한 참조를 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );t = obj << Get Datatable;Show( N Rows( t ) );

```

#### Get Group Platform

**구문:** obj &lt;&lt; Get Group Platform

**설명:** 이 플랫폼이 그룹의 일부인 경우 그룹 플랫폼 개체를 반환하고, 그렇지 않은 경우 Empty()를 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );group = biv[1] << Get Group Platform;Wait( 1 );group << Layout( "Arrange in Tabs" );

```

#### Get Script

**구문:** obj &lt;&lt; Get Script

**설명:** 이 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );t = obj << Get Script;Show( t );

```

#### Get Script With Data Table

**구문:** obj &lt;&lt; Get Script With Data Table

**설명:** 이 데이터 테이블을 참조하는 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );t = obj << Get Script With Data Table;Show( t );

```

#### Get Timing

**구문:** obj &lt;&lt; Get Timing

**설명:** 플랫폼 시작 시간을 설정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );t = obj << Get Timing;Show( t );

```

#### Get Web Support

**구문:** obj &lt;&lt; Get Web Support

**설명:** 표시 개체에 대한 대화식 HTML 지원 수준을 나타내는 숫자를 반환합니다. 1은 일부 또는 모든 요소가 지원됨을 의미하고 0은 지원되지 않음을 의미합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );s = obj << Get Web Support();Show( s );

```

#### Get Where Expr

**구문:** obj &lt;&lt; Get Where Expr

**설명:** By() 또는 Where()를 사용하여 플랫폼이 시작된 경우 데이터 부분집합에 대한 Where 표현식을 반환하고, 그렇지 않은 경우 Empty()를 반환합니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

#### Ignore Platform Preferences

**구문:** Ignore Platform Preferences( state=0|1 )

**설명:** 플랫폼의 현재 환경 설정을 무시합니다. 생성 후 플랫폼으로 전송될 때 메시지가 무시됩니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Ignore Platform Preferences( 1 ),	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

#### Local Data Filter

**구문:** obj &lt;&lt; Local Data Filter

**설명:** 데이터를 특정 그룹 또는 범위로 필터링합니다. 이 플랫폼에서만 사용 가능합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));

```

#### New Preset

**구문:** obj = New Preset()

**설명:** 개체에 적용된 옵션과 사용자 정의를 나타내는 익명 사전 설정을 생성합니다. 이 개체를 Apply Preset에 전달하여 같은 유형의 다른 개체에 설정을 복사할 수 있습니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();

```

#### Paste Local Data Filter

**구문:** obj &lt;&lt; Paste Local Data Filter

**설명:** 클립보드의 로컬 데이터 필터를 현재 보고서에 적용합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );filter = dist << Local Data Filter( Add Filter( columns( :Region ), Where( :Region == "MW" ) ) );filter << Copy Local Data Filter;dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );Wait( 1 );dist2 << Paste Local Data Filter;

```

#### Redo Analysis

**구문:** obj &lt;&lt; Redo Analysis

**설명:** 동일한 분석을 새 창에서 다시 실행합니다. 데이터가 변경된 경우에는 분석결과가 달라집니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Redo Analysis;

```

#### Relaunch Analysis

**구문:** obj &lt;&lt; Relaunch Analysis

**설명:** 플랫폼 시작 창을 열고 보고서를 생성하는 데 사용된 설정을 불러옵니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Relaunch Analysis;

```

#### Remove Column Switcher

**구문:** obj &lt;&lt; Remove Column Switcher

**설명:** 플랫폼에 추가된 가장 최근 열 전환기를 제거합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher( :marital status, {:sex, :country, :marital status} );Wait( 2 );obj << Remove Column Switcher;

```

#### Remove Local Data Filter

**구문:** obj &lt;&lt; Remove Local Data Filter

**설명:** 로컬 데이터 필터가 생성된 경우 로컬 데이터 필터를 제거하고 데이터 테이블의 모든 데이터를 직접 사용하도록 플랫폼을 복원합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dist = dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));Wait( 2 );dist << remove local data filter;

```

#### Report

**구문:** obj &lt;&lt; Report; Report( obj )

**설명:** 보고서 개체에 대한 참조를 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

#### Report View

**구문:** obj &lt;&lt; Report View( "전체"|"요약" )

**설명:** 보고서 보기는 플랫폼 보고서에 표시되는 상세 수준을 결정합니다. Full은 모든 상세 정보를 표시하고 Summary는 플랫폼에 따라 선택된 콘텐츠만 표시합니다. 사용자 정의된 동작의 경우 표시 상자는 <<Set Summary Behavior 메시지를 지원합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**구문:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 데이터 테이블에 테이블 특성으로 저장합니다. 스크립트 이름을 지정할 수 있습니다. Append Suffix 옵션은 스크립트 이름에 숫자 접미사를 추가하여 이름이 같은 기존 스크립트와 구분합니다. Prompt 옵션은 사용자에게 스크립트 이름을 지정하라는 메시지를 표시합니다. Replace 옵션은 이름이 같은 기존 스크립트를 바꿉니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Bivariate( Y( :Weight ), X( :Height ), By( :_bycol ), Group Options( Return Group( 1 ) ) );obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**구문:** obj &lt;&lt; Save ByGroup Script to Journal

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 이 스크립트가 포함된 저널에 버튼을 추가합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Bivariate( Y( :Weight ), X( :Height ), By( :_bycol ), Group Options( Return Group( 1 ) ) );obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**구문:** obj &lt;&lt; Save ByGroup Script to Script Window

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 현재 스크립트 텍스트 창에 추가합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Bivariate( Y( :Weight ), X( :Height ), By( :_bycol ), Group Options( Return Group( 1 ) ) );obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**구문:** obj &lt;&lt; Save Script for All Objects

**설명:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**구문:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**설명:** 모든 보고서 개체에 대한 스크립트를 현재 데이터 테이블에 저장합니다. 이 옵션은 창에 여러 보고서가 있을 때 유용합니다. 스크립트 이름을 따옴표로 묶어 지정하는 경우 외에는 첫 번째 플랫폼 이름을 따라 스크립트 이름이 지정됩니다.

**예제 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Bivariate( Y( :Weight ), X( :Height ), By( :_bycol ), Group Options( Return Group( 1 ) ) );obj[1] << Save Script for All Objects To Data Table;

```

**예제 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Bivariate( Y( :Weight ), X( :Height ), By( :_bycol ), Group Options( Return Group( 1 ) ) );obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**구문:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 데이터 테이블에 테이블 특성으로 저장합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**구문:** obj &lt;&lt; Save Script to Journal

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 이 스크립트가 포함된 저널에 버튼을 추가합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Save Script to Journal;

```

#### Save Script to Report

**구문:** obj &lt;&lt; Save Script to Report

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 보고서 자체에 표시합니다. 수행된 작업에 대한 인쇄된 기록을 유지하려는 경우에 유용합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Save Script to Report;

```

#### Save Script to Script Window

**구문:** obj &lt;&lt; Save Script to Script Window

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 현재 스크립트 텍스트 창에 추가합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Save Script to Script Window;

```

#### SendToByGroup

**구문:** SendToByGroup( {":Column == level"}, command );

**설명:** 기준 그룹의 각 수준으로 플랫폼 명령을 보내거나 사용자 정의 명령을 표시합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	By( :Sex ),	SendToByGroup( {:sex == "F"}, Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) ) ),	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) ));

```

#### SendToEmbeddedScriptable

**구문:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**설명:** 포함된 스크립트 가능 개체로 보내기는 포함된 스크립트 가능 개체의 설정을 복원합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );dt << Life Distribution(	Y( :Time ),	Censor( :Censor ),	Censor Code( 1 ),	<<Fit Weibull,	SendToEmbeddedScriptable(		Dispatch( {"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}		)	));

```

#### SendToReport

**구문:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**설명:** Send To Report는 보고서 모양을 사용자 정의하기 위해 Dispatch 명령과 함께 사용됩니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Nominal Distribution( Column( :age ) ),	Continuous Distribution( Column( :weight ) ),	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) ));

```

#### Sync to Data Table Changes

**구문:** obj &lt;&lt; Sync to Data Table Changes

**설명:** 제외 항목 및 데이터 변경 사항과 동기화합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );Wait( 1 );dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );dist << Sync To Data Table Changes;

```

#### Title

**구문:** obj &lt;&lt; Title( "new title" )

**설명:** 플랫폼의 제목을 설정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Title( "My Platform" );

```

#### Top Report

**구문:** obj &lt;&lt; Top Report

**설명:** 보고서의 루트 노드에 대한 참조를 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

#### Transform Column

**구문:** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**설명:** 개체의 로컬 컨텍스트(대개 플랫폼)에서 변환 열을 생성합니다. 변환 열은 플랫폼의 수명 동안에만 활성화됩니다.

**JMP추가된 버전:** 16

<b>실행기 항목: 예</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),	Continuous Distribution( Column( :"age^2"n ) ));

```

#### View Web XML

**구문:** obj &lt;&lt; View Web XML

**설명:** 대화식 HTML 보고서를 생성하는 데 사용된 XML 코드를 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );xml = obj << View Web XML;

```

#### Window View

**구문:** obj = Bivariate(...Window View( "Visible"|"Invisible"|"Private" )...) &lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 보고서에 대해 생성할 창 유형을 설정합니다. 기본적으로 Visible 보고서 창이 생성됩니다. Invisible 창은 화면에 나타나지 않지만 Window()와 같은 함수로 검색할 수 있습니다. Private 창은 대부분의 창 메시지에 응답하지만 검색할 수 없으며 보고서 개체를 통해 처리해야 합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

### 연결된 생성자

#### Bivariate

**구문:** Bivariate( Y( columns ), X( columns ) )

**설명:** 연속형 반응을 다른 수치형 변수와의 관계를 통해 모델링합니다. 분석 방법으로는 적합선, 다항식, 스플라인 및 다변량 밀도가 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );

```

### 열

#### By

**구문:** obj = Bivariate(...&lt;By( column(s) )&gt;...) &lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 지정된 열의 각 수준에 대해 별도의 분석을 수행합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Bivariate( Y( :Weight ), X( :Height ), By( :_bycol ), Group Options( Return Group( 1 ) ) );

```

#### Freq

**구문:** obj = Bivariate(...&lt;Freq( column )&gt;...) &lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 분석을 위해 각 행에 빈도를 할당하는 값이 들어 있는 열을 지정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_freqcol", Numeric, Continuous, Set Each Value( Random Integer( 1, 5 ) ) );obj = dt << Bivariate( Y( :Weight ), X( :Height ), Freq( :_freqcol ) );

```

#### Regressor

**구문:** obj = Bivariate(...Regressor( column(s) )...) &lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 예측 변수를 지정합니다. 이러한 변수의 모델링 유형은 연속형이어야 합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );

```

#### Response

**구문:** obj = Bivariate(...Response( column(s) )...) &lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 분석할 하나 이상의 연속형 반응 변수를 지정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );

```

#### Weight

**구문:** obj = Bivariate(...&lt;Weight( column )&gt;...) &lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 분석을 위해 각 행에 가중치를 할당하는 값이 들어 있는 열을 지정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_weightcol", Numeric, Continuous, Set Each Value( Random Beta( 1, 1 ) ) );obj = dt << Bivariate( Y( :Weight ), X( :Height ), Weight( :_weightcol ) );

```

#### X

**구문:** obj = Bivariate(...X( column(s) )...) &lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 예측 변수를 지정합니다. 이러한 변수의 모델링 유형은 연속형이어야 합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );

```

#### Y

**구문:** obj = Bivariate(...Y( column(s) )...) &lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 분석할 하나 이상의 연속형 반응 변수를 지정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );

```

### 항목 메시지

#### Curve

**구문:** obj &lt;&lt; ( Curve[number] &lt;&lt; option )

**설명:** 적합선에 대한 핸들 배열입니다. 적합된 특정 곡선으로 Bivariate Curve 메시지를 전송하는 데 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Fit Line( 1 );obj << Fit Polynomial( 3 );obj << (curve[2] << Confid Curves Fit( 1 ));

```

#### Density Ellipse

**구문:** obj &lt;&lt; Density Ellipse( percent )

**설명:** 이변량 정규 등고선을 적합시킵니다. 등고선에는 총 데이터 점의 지정된 백분율이 포함됩니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Density Ellipse( 0.95 );

```

#### Fit Cauchy

**구문:** obj &lt;&lt; Fit Cauchy

**설명:** Cauchy 연결 함수를 사용한 최대 가능도로 모수가 추정되는 로버스트 회귀 모형을 적합시킵니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Fit Cauchy;

```

#### Fit Each Value

**구문:** obj &lt;&lt; Fit Each Value

**설명:** 고유한 X 값의 각 집합에 대한 Y 값의 평균을 통과하는 선을 적합시킵니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Fit Each Value;

```

#### Fit Line

**구문:** obj &lt;&lt; Fit Line

**설명:** 최소 제곱 회귀 모형을 데이터에 적합시킵니다. 적합선이 그림에 표시되고 적합 보고서가 제공됩니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Fit Line;

```

#### Fit Mean

**구문:** obj &lt;&lt; Fit Mean

**설명:** Y 반응 변수의 평균을 적합시킵니다. 기울기가 0인 편평한 선이 그림에 표시됩니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Fit Mean;

```

#### Fit Orthogonal

**구문:** obj &lt;&lt; Fit Orthogonal( Univariate Variances|Equal Variances|Fit X to Y|Specified Variance Ratio(number) )

**설명:** 지정된 직교 회귀 모형을 적합시킵니다. 직교 회귀 모형은 X 및 Y 변수 모두 오차를 사용하여 측정되는 경우에 유용합니다. "지정된 분산 비율" 인수를 사용하면 X 변수의 오차 분산 대 Y 변수의 오차 분산 비율을 지정할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Fit Orthogonal( Fit X to Y );

```

#### Fit Passing Bablok

**구문:** obj &lt;&lt; Fit Passing Bablok

**설명:** Passing-Bablok 절차를 사용하여 회귀 모형을 적합시킵니다. 이 절차는 X 및 Y 변수 모두 오차를 사용하여 측정되는 경우에 유용합니다.

**JMP추가된 버전:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Fit Passing Bablok;

```

#### Fit Polynomial

**구문:** obj &lt;&lt; Fit Polynomial( degree of model )

**설명:** 최소 제곱 회귀를 사용하여 지정된 차수의 다항식 곡선을 적합시킵니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Fit Polynomial( 3 );

```

#### Fit Robust

**구문:** obj &lt;&lt; Fit Robust

**설명:** 이상치에 대해 로버스트한 Huber M-추정 방법을 사용하여 회귀 모형을 적합시킵니다. Huber 손실 함수는 이상치에 벌점을 부과하여 작은 오차의 경우 2차 함수로 증가하고 큰 오차의 경우 선형 함수로 증가합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Fit Robust;

```

#### Fit Special

**구문:** obj &lt;&lt; Fit Special( xTran( "Log"|"Square Root"|"Square"|"Reciprocal"|"Exponential" ), yTran( "Log"|"Square Root"|"Square"|"Reciprocal"|"Exponential" ), &lt;Intercept( number )&gt;, &lt;Slope( number )&gt;, &lt;Degree( degree )&gt;, Centered Polynomial&gt; )

**설명:** X 및 Y 변수에 대한 변환을 포함하는 회귀 모형을 적합시킵니다. 기울기와 절편에 제약 조건을 적용할 수 있으며 차수 인수를 사용하여 다항식 모형을 적합시킬 수도 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Fit Special( xTran( "Log" ) );obj << Fit Special( xTran( "Square" ), yTran( "Reciprocal" ), Intercept( 0 ) );

```

#### Fit Spline

**구문:** obj &lt;&lt; Fit Spline( lambda, &lt;Standardized&gt; )

**설명:** 벌점 최소 제곱 모형을 데이터에 적합시킵니다. 이때 평활 모수 람다에 따라 모형 적합의 평활도가 결정됩니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Fit Spline( 341.1929, Standardized );obj << Fit Spline( 341.1929 );

```

#### Fit Where

**구문:** obj &lt;&lt; Fit Where( column == level, command )

**설명:** 곡선을 범주형 변수의 한 수준에 적합시킵니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :weight ), X( :height ) );obj << Fit Where( :sex == "F", Fit Line( 1 ) );

```

#### Group By

**구문:** obj &lt;&lt; Group By( column )

**설명:** 그룹화 변수를 지정합니다. 그룹화 변수를 지정하면 모든 분석이 그룹화 변수의 각 수준에 대해 개별적으로 수행됩니다.

```jsl

dt = Open( "$SAMPLE_DATA/Dogs.jmp" );obj = dt << Bivariate( Y( :LogHist1 ), X( :LogHist0 ) );obj << Group By( :drug );obj << Fit Line;

```

#### Histogram Borders

**구문:** obj &lt;&lt; Histogram Borders( state=0|1 )

**설명:** 산점도의 가로 축과 세로 축에 히스토그램을 표시하거나 숨깁니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Histogram Borders( 1 );

```

#### Kernel Smoother

**구문:** obj &lt;&lt; Kernel Smoother( lambda = 0|1|2, weight = 1|2|3|4|5, alpha, robust passes = 0|1|2|3|4, delta proportion )

**설명:** 데이터의 반복되는 부분집합에 대해 로컬 적합을 적용합니다. 이때 부분집합 범위는 알파에 따라 결정되고, 적합 평활도는 람다에 따라 결정되며, 가중치는 가중치 함수에 따라 결정됩니다. 강건성이 증가할수록 이상치의 가중치는 감소하게 됩니다. 이 방법을 LOESS 평활기라고도 합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Chemical Kinetics.jmp" );obj = dt << Bivariate( Y( :"Velocity (y)"n ), X( :Concentration ) );obj << Kernel Smoother( 1, 1, 0.84615, 0 );

```

#### Nonpar Density

**구문:** obj &lt;&lt; Nonpar Density

**설명:** 비모수 이변량 밀도 등고선을 적합시키고 해당 등고선을 그래프에 그립니다. 등고선은 5% 구간에 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Nonpar Density;

```

#### Paired t test

**구문:** obj &lt;&lt; Paired t test

**설명:** 쌍체 t-검정을 실행하고 보고서를 생성하며 두 열이 동일함을 나타내는 45도 회색 선을 산점도에 표시합니다.



이 옵션은 매칭 쌍 플랫폼으로 향상되었습니다. 이변량 메뉴에서도 Shift 키를 누른 상태로 이 옵션에 액세스할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Dogs.jmp" );obj = dt << Bivariate( Y( :LogHist1 ), X( :LogHist0 ) );obj << Paired t test;

```

#### Points Jittered

**구문:** obj &lt;&lt; Points Jittered( "없음"|"자동"|"랜덤 균등"|"랜덤 정규"|"랜덤 밀도"|"묶음"|"격자"|"육각형 격자"|"벌떼 배열"="자동" )

**설명:** 데이터 점의 산포를 지정합니다. 이 옵션을 선택하면 표식이 중첩되지 않도록 데이터 점이 지터링됩니다. 기본값은 "자동"입니다.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Oneway( Y( :Sepal length ), X( :Sepal width ) );obj << Points Jittered( "Random Normal" );

```

#### Show Points

**구문:** obj &lt;&lt; Show Points( state=0|1 )

**설명:** 그래프에 점을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Fit Line( 1 );Wait( 1 );obj << Show Points( 0 );

```

#### Summary Statistics

**구문:** obj &lt;&lt; Summary Statistics( state=0|1 )

**설명:** 요약 통계량 테이블을 표시하거나 숨깁니다.

**JMP추가된 버전:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );obj << Summary Statistics( 1 );

```

## Contingency > Analysis of Means for Proportions

### 항목 메시지

#### Point Options

**구문:** obj &lt;&lt; Analysis of Means for Proportions( 1, Point Options( "Show Needles"|"Show Connected Points"|"Show Only Points" ) ); scrobj &lt;&lt; Point Options( "Show Needles"|"Show Connected Points"|"Show Only Points" )

**설명:** 비율에 대한 평균 분석 차트의 점 그리기 스타일을 지정합니다. 세로 바늘(수직선) 그리기, 점 연결 및 점만 표시 중에서 선택할 수 있습니다. 기본적으로 평균 위치에 그려진 가로선에 점을 연결하는 바늘로 차트를 그립니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = Contingency( Y( :marital status ), X( :type ) );obj << Analysis of Means for Proportions( 1, Point Options( "Show Only Points" ) );Wait( 2 );scrobj = Report( obj )["Analysis of Means for Proportions"] << Get Scriptable Object;scrobj << Point Options( "Show Connected Points" );

```

#### Set Alpha Level

**구문:** obj &lt;&lt; Analysis of Means for Proportions( 1, Set Alpha Level( alpha ) ); scrobj &lt;&lt; Set Alpha Level( alpha )

**설명:** 결정 한계 계산에 사용되는 유의 수준을 변경합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = Contingency( Y( :marital status ), X( :type ) );obj << Analysis of Means for Proportions( 1, Set Alpha Level( 0.1 ) );Wait( 2 );scrobj = Report( obj )["Analysis of Means for Proportions"] << Get Scriptable Object;scrobj << Set Alpha Level( 0.05 );

```

#### Show Center Line

**구문:** obj &lt;&lt; Analysis of Means for Proportions( 1, Show Center Line( state=0|1 ) ); scrobj &lt;&lt; Show Center Line( state=0|1 )

**설명:** 비율에 대한 평균 분석 차트에 중심선을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = Contingency( Y( :marital status ), X( :type ) );obj << Analysis of Means for Proportions( 1, Show Center Line( 0 ) );Wait( 2 );scrobj = Report( obj )["Analysis of Means for Proportions"] << Get Scriptable Object;scrobj << Show Center Line( 1 );

```

#### Show Decision Limit Shading

**구문:** obj &lt;&lt; Analysis of Means for Proportions( 1, Show Decision Limit Shading( state=0|1 ) ); scrobj &lt;&lt; Show Decision Limit Shading( state=0|1 )

**설명:** 비율에 대한 평균 분석 차트에 결정 한계 음영을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = Contingency( Y( :marital status ), X( :type ) );obj << Analysis of Means for Proportions( 1, Show Decision Limit Shading( 0 ) );Wait( 2 );scrobj = Report( obj )["Analysis of Means for Proportions"] << Get Scriptable Object;scrobj << Show Decision Limit Shading( 1 );

```

#### Show Decision Limits

**구문:** obj &lt;&lt; Analysis of Means for Proportions( 1, Show Decision Limits( state=0|1 ) ); scrobj &lt;&lt; Show Decision Limits( state=0|1 )

**설명:** 비율에 대한 평균 분석 차트에 결정 한계선을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = Contingency( Y( :marital status ), X( :type ) );obj << Analysis of Means for Proportions( 1, Show Decision Limits( 0 ) );Wait( 2 );scrobj = Report( obj )["Analysis of Means for Proportions"] << Get Scriptable Object;scrobj << Show Decision Limits( 1 );

```

#### Show Summary Report

**구문:** obj &lt;&lt; Analysis of Means for Proportions( 1, Show Summary Report( state=0|1 ) ); scrobj &lt;&lt; Show Summary Report( state=0|1 )

**설명:** X 변수의 각 수준에 대한 반응 비율 및 결정 한계가 포함된 보고서를 표시하거나 숨깁니다. 한계 초과 여부도 보고서에 표시됩니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = Contingency( Y( :marital status ), X( :type ) );obj << Analysis of Means for Proportions( 1, Show Summary Report( 1 ) );Wait( 2 );scrobj = Report( obj )["Analysis of Means for Proportions"] << Get Scriptable Object;scrobj << Show Summary Report( 0 );

```

#### Switch Response Level for Proportion

**구문:** obj &lt;&lt; Analysis of Means for Proportions( 1, Switch Response Level for Proportion( state=0|1 ) ); scrobj &lt;&lt; Switch Response Level for Proportion( state=0|1 )

**설명:** 분석에 사용되는 반응 범주를 변경합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = Contingency( Y( :marital status ), X( :type ) );obj << Analysis of Means for Proportions( 1, Switch Response Level for Proportion( 1 ) );Wait( 2 );scrobj = Report( obj )["Analysis of Means for Proportions"] << Get Scriptable Object;scrobj << Switch Response Level for Proportion( 0 );

```

## Contingency > Contingency Equivalence Tests

### 항목 메시지

#### Forest Plot

**구문:** obj &lt;&lt; Equivalence Tests( ..., Forest Plot( state=0|1 ) ); scobj &lt;&lt; Forest Plot( state=0|1 )

**설명:** 동등성 검정 포레스트 그림을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );obj = dt << Contingency(	Y( :Lung Cancer ),	X( :Smoker ),	Freq( :Count ),	Contingency Table( Count( 1 ), Total %( 0 ), Col %( 0 ), Row %( 1 ) ),	Equivalence Tests of Risk Difference(		0.1,		0.05,		"Equivalence",		Response Group( "Cancer" ),		Factor Group( "NonSmoker" )	));Wait( 2 );scobj = (Report( obj )["Equivalence Tests for the Risk Difference"] << Get Scriptable Object);scobj << Forest Plot( 0 );

```

#### Remove

**구문:** scobj &lt;&lt; Remove

**설명:** 동등성 검정 보고서를 제거합니다.

**JMP추가된 버전:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );obj = dt << Contingency(	Y( :Lung Cancer ),	X( :Smoker ),	Freq( :Count ),	Contingency Table( Count( 1 ), Total %( 0 ), Col %( 0 ), Row %( 1 ) ),	Equivalence Tests of Risk Difference(		0.1,		0.05,		"Equivalence",		Response Group( "Cancer" ),		Factor Group( "NonSmoker" )	));Wait( 1 );scobj = (Report( obj )["Equivalence Tests for the Risk Difference"] << Get Scriptable Object);Wait( 1 );scobj << Remove;

```

#### Test Report

**구문:** obj &lt;&lt; Equivalence Tests( ..., Test Report( state=0|1 ) ); scobj &lt;&lt; Test Report( state=0|1 )

**설명:** 위험도 차이나 위험비에 대한 동등성 검정, 우월성 검정 또는 비열등성 검정을 요약하는 보고서를 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );obj = dt << Contingency(	Y( :Lung Cancer ),	X( :Smoker ),	Freq( :Count ),	Contingency Table( Count( 1 ), Total %( 0 ), Col %( 0 ), Row %( 1 ) ),	Equivalence Tests of Risk Difference(		0.1,		0.05,		"Equivalence",		Response Group( "Cancer" ),		Factor Group( "NonSmoker" )	));Wait( 2 );scobj = (Report( obj )["Equivalence Tests for the Risk Difference"] << Get Scriptable Object);scobj << Test Report( 0 );

```

## Contingency > Contingency Table

### 항목 메시지

#### Cell Chi Square

**구문:** obj &lt;&lt; Contingency Table( Cell Chi Square( state=0|1, &lt;Format(...)&gt; ) )

**설명:** 분할표에 카이제곱 통계량에 대한 개별 셀의 기여도를 표시하거나 숨깁니다.

**예제 1**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );obj << Contingency Table( Cell Chi Square( 1 ) );

```

**예제 2**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );Wait( 2 );obj << Contingency Table( Cell Chi Square( 1, Format( "Fixed Dec", 8, 5 ) ) );

```

#### Col %

**구문:** obj &lt;&lt; Contingency Table( Col %( state=0|1, &lt;Format(...)&gt; ) )

**설명:** 분할표에 각 셀이 해당 열에서 차지하는 백분율을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**예제 1**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );Wait( 2 );obj << Contingency Table( Col %( 0 ) );

```

**예제 2**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );Wait( 2 );obj << Contingency Table( Col %( 1, Format( "Fixed Dec", 7, 1 ) ) );

```

#### Col Cum

**구문:** obj &lt;&lt; Contingency Table( Col Cum( state=0|1, &lt;Format(...)&gt; ) )

**설명:** 분할표에 누적 열 합계를 표시하거나 숨깁니다.

**예제 1**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );obj << Contingency Table( Total %( 0 ), Col %( 0 ), Row %( 0 ), Col Cum( 1 ) );

```

**예제 2**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );Wait( 2 );obj << Contingency Table( Total %( 0 ), Col %( 0 ), Row %( 0 ), Col Cum( 1, Format( "Fixed Dec", 7, 1 ) ) );

```

#### Col Cum %

**구문:** obj &lt;&lt; Contingency Table( Col Cum %( state=0|1, &lt;Format(...)&gt; ) )

**설명:** 분할표에 누적 열 백분율을 표시하거나 숨깁니다.

**예제 1**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );obj << Contingency Table( Total %( 0 ), Col %( 0 ), Row %( 0 ), Col Cum %( 1 ) );

```

**예제 2**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );Wait( 2 );obj << Contingency Table( Total %( 0 ), Col %( 0 ), Row %( 0 ), Col Cum %( 1, Format( "Fixed Dec", 7, 1 ) ) );

```

#### Count

**구문:** obj &lt;&lt; Contingency Table( Count( state=0|1, &lt;Format(...)&gt; ) )

**설명:** 분할표에 셀 개수를 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**예제 1**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );Wait( 2 );obj << Contingency Table( Count( 0 ) );

```

**예제 2**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );Wait( 2 );obj << Contingency Table( Count( 1, Format( "Fixed Dec", 7, 1 ) ) );

```

#### Deviation

**구문:** obj &lt;&lt; Contingency Table( Deviation( state=0|1, &lt;Format(...)&gt; ) )

**설명:** 분할표에 개별 셀 편차를 표시하거나 숨깁니다. 개별 셀 편차는 실제 셀 개수에서 기대 셀 개수를 뺀 값입니다.

**예제 1**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );obj << Contingency Table( Deviation( 1 ) );

```

**예제 2**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );Wait( 2 );obj << Contingency Table( Deviation( 1, Format( "Fixed Dec", 7, 1 ) ) );

```

#### Expected

**구문:** obj &lt;&lt; Contingency Table( Expected( state=0|1, &lt;Format(...)&gt; ) )

**설명:** 분할표에 기대 셀 개수를 표시하거나 숨깁니다. 기대 셀 개수는 해당하는 행 합계와 열 합계의 곱을 총 합계로 나눈 값입니다.

**예제 1**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );obj << Contingency Table( Expected( 1 ) );

```

**예제 2**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );Wait( 2 );obj << Contingency Table( Expected( 1, Format( "Fixed Dec", 7, 1 ) ) );

```

#### Make Into Data Table

**구문:** obj &lt;&lt; Contingency Table( Make Into Data Table )

**설명:** 교차표 데이터가 포함된 데이터 테이블을 생성합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Contingency( Y( :Age ), X( :sex ), Contingency Table( Make into Data Table ) );

```

#### Row %

**구문:** obj &lt;&lt; Contingency Table( Row %( state=0|1, &lt;Format(...)&gt; ) )

**설명:** 분할표에 각 셀이 해당 행에서 차지하는 백분율을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**예제 1**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );Wait( 2 );obj << Contingency Table( Row %( 0 ) );

```

**예제 2**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );Wait( 2 );obj << Contingency Table( Row %( 1, Format( "Fixed Dec", 7, 1 ) ) );

```

#### Row Cum

**구문:** obj &lt;&lt; Contingency Table( Row Cum( state=0|1, &lt;Format(...)&gt; ) )

**설명:** 분할표에 누적 행 합계를 표시하거나 숨깁니다.

**예제 1**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );obj << Contingency Table( Total %( 0 ), Col %( 0 ), Row %( 0 ), Row Cum( 1 ) );

```

**예제 2**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );Wait( 2 );obj << Contingency Table( Total %( 0 ), Col %( 0 ), Row %( 0 ), Row Cum( 1, Format( "Fixed Dec", 7, 1 ) ) );

```

#### Row Cum %

**구문:** obj &lt;&lt; Contingency Table( Row Cum %( state=0|1, &lt;Format(...)&gt; ) )

**설명:** 분할표에 누적 행 백분율을 표시하거나 숨깁니다.

**예제 1**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );obj << Contingency Table( Total %( 0 ), Col %( 0 ), Row %( 0 ), Row Cum %( 1 ) );

```

**예제 2**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );Wait( 2 );obj << Contingency Table( Total %( 0 ), Col %( 0 ), Row %( 0 ), Row Cum %( 1, Format( "Fixed Dec", 7, 1 ) ) );

```

#### Total %

**구문:** obj &lt;&lt; Contingency Table( Total %( state=0|1, &lt;Format(...)&gt; ) )

**설명:** 분할표에 셀 총 백분율을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**예제 1**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );Wait( 2 );obj << Contingency Table( Total %( 0 ) );

```

**예제 2**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );Wait( 2 );obj << Contingency Table( Total %( 1, Format( "Fixed Dec", 7, 1 ) ) );

```

## Contingency > Correspondence Analysis

### 항목 메시지

#### 3D Correspondence Analysis

**구문:** obj &lt;&lt; Correspondence Analysis( "3D Correspondence Analysis"( state=0|1 ) )

**설명:** 3차원 산점도를 표시하거나 숨깁니다.

```jsl

dt = Open( "$SAMPLE_DATA/Cars 1993.jmp" );obj = Contingency( Y( :Vehicle Category ), X( :Manufacturer ), Contingency Table( 0 ), Tests( 0 ) );Wait( 1 );obj << Correspondence Analysis( "3D Correspondence Analysis"(1) );

```

#### Make Table

**구문:** obj &lt;&lt; Correspondence Analysis( "Make Table" )

**설명:** 대응 분석 결과가 포함된 데이터 테이블을 생성합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Cereal.jmp" );obj = Contingency( Y( :Fiber Gr ), X( :Manufacturer ) );obj << Correspondence Analysis( "Make Table" );

```

#### Save Value Order

**구문:** obj &lt;&lt; Correspondence Analysis( "Save Value Order" )

**설명:** 값 순서화 열 특성을 데이터 테이블의 X 변수 열과 Y 변수 열에 저장합니다. 이 열 특성은 첫 번째 대응 스코어 계수를 기준으로 정렬된 수준의 순서를 지정합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Cereal.jmp" );obj = Contingency( Y( :Fiber Gr ), X( :Manufacturer ) );obj << Correspondence Analysis( "Save Value Order" );

```

## Contingency

### 공유 항목 메시지

#### Action

**구문:** obj &lt;&lt; Action

**설명:** 실행할 표현식을 삽입하기 위한 플랫폼 내의 다목적 트랩도어. 임시로 표시 상자 및 데이터 테이블 유형을 플랫폼에 설정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

#### Apply Preset

**구문:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**설명:** 이전에 생성된 사전 설정을 개체에 적용하여 옵션과 사용자 정의를 저장된 설정과 일치하도록 업데이트합니다.

**JMP추가된 버전:** 18

**이름으로 검색**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

**익명 사전 설정**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );Wait( 1 );obj2 << Apply Preset( preset );

```

**폴더 내에서 검색**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

#### Automatic Recalc

**구문:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**설명:** 제외 항목 및 데이터 변경이 있을 때 분석을 자동으로 다시 실행합니다. 자동 재계산 옵션이 설정된 경우 재계산하기 전에 제외 항목 및 데이터 변경이 적용되게 하려면 Wait(0) 명령을 사용하는 것이 좋습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Contingency( Y( :Age ), X( :sex ) );obj << Automatic Recalc( 1 );dt << Select Rows( 5 ) << Exclude( 1 );

```

#### Broadcast

**구문:** obj &lt;&lt; Broadcast(message)

**설명:** 플랫폼에 메시지를 브로드캐스트합니다. 개별 개체의 반환 결과가 테이블인 경우 가능하면 테이블이 연결되고 최종 형식은 테이블 상자의 &apos;결합 테이블 저장&apos; 옵션 결과 또는 소스 열을 사용한 &apos;연결&apos; 옵션 결과와 동일합니다. 그 외의 경우에는 결과가 목록에 저장되어 반환됩니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );objs = Control Chart Builder( Variables( Subgroup( :DAY ), Y( :DIAMETER ) ), By( :OPERATOR ) );objs[1] << Broadcast( Save Summaries );

```

#### Column Switcher

**구문:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**설명:** 플랫폼 변수를 변경하기 위한 제어판을 추가합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher( :marital status, {:sex, :country, :marital status} );

```

#### Copy ByGroup Script

**구문:** obj &lt;&lt; Copy ByGroup Script

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 클립보드에 넣습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Contingency( Y( :Age ), X( :sex ), By( :_bycol ), Group Options( Return Group( 1 ) ) );obj[1] << Copy ByGroup Script;

```

#### Copy Script

**구문:** obj &lt;&lt; Copy Script

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 클립보드에 넣습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Contingency( Y( :Age ), X( :sex ) );obj << Copy Script;

```

#### Data Table Window

**구문:** obj &lt;&lt; Data Table Window

**설명:** 이 분석에 대한 데이터 테이블 창을 앞으로 가져옵니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Contingency( Y( :Age ), X( :sex ) );obj << Data Table Window;

```

#### Get By Levels

**구문:** obj &lt;&lt; Get By Levels

**설명:** 기준 그룹 열을 값에 매핑하는 연관 배열을 반환합니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv << Get By Levels;

```

#### Get ByGroup Script

**구문:** obj &lt;&lt; Get ByGroup Script

**설명:** 이 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Contingency( Y( :Age ), X( :sex ), By( :_bycol ), Group Options( Return Group( 1 ) ) );t = obj[1] << Get ByGroup Script;Show( t );

```

#### Get Container

**구문:** obj &lt;&lt; Get Container

**설명:** 개체의 콘텐츠를 담고 있는 컨테이너 상자에 대한 참조를 반환합니다.

**일반**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Contingency( Y( :Age ), X( :sex ) );t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**필터 사용 플랫폼**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

#### Get Data Table

**구문:** obj &lt;&lt; Get Data Table

**설명:** 데이터 테이블에 대한 참조를 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Contingency( Y( :Age ), X( :sex ) );t = obj << Get Datatable;Show( N Rows( t ) );

```

#### Get Group Platform

**구문:** obj &lt;&lt; Get Group Platform

**설명:** 이 플랫폼이 그룹의 일부인 경우 그룹 플랫폼 개체를 반환하고, 그렇지 않은 경우 Empty()를 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );group = biv[1] << Get Group Platform;Wait( 1 );group << Layout( "Arrange in Tabs" );

```

#### Get Script

**구문:** obj &lt;&lt; Get Script

**설명:** 이 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Contingency( Y( :Age ), X( :sex ) );t = obj << Get Script;Show( t );

```

#### Get Script With Data Table

**구문:** obj &lt;&lt; Get Script With Data Table

**설명:** 이 데이터 테이블을 참조하는 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Contingency( Y( :Age ), X( :sex ) );t = obj << Get Script With Data Table;Show( t );

```

#### Get Timing

**구문:** obj &lt;&lt; Get Timing

**설명:** 플랫폼 시작 시간을 설정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Contingency( Y( :Age ), X( :sex ) );t = obj << Get Timing;Show( t );

```

#### Get Web Support

**구문:** obj &lt;&lt; Get Web Support

**설명:** 표시 개체에 대한 대화식 HTML 지원 수준을 나타내는 숫자를 반환합니다. 1은 일부 또는 모든 요소가 지원됨을 의미하고 0은 지원되지 않음을 의미합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );s = obj << Get Web Support();Show( s );

```

#### Get Where Expr

**구문:** obj &lt;&lt; Get Where Expr

**설명:** By() 또는 Where()를 사용하여 플랫폼이 시작된 경우 데이터 부분집합에 대한 Where 표현식을 반환하고, 그렇지 않은 경우 Empty()를 반환합니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

#### Ignore Platform Preferences

**구문:** Ignore Platform Preferences( state=0|1 )

**설명:** 플랫폼의 현재 환경 설정을 무시합니다. 생성 후 플랫폼으로 전송될 때 메시지가 무시됩니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Ignore Platform Preferences( 1 ),	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

#### Local Data Filter

**구문:** obj &lt;&lt; Local Data Filter

**설명:** 데이터를 특정 그룹 또는 범위로 필터링합니다. 이 플랫폼에서만 사용 가능합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));

```

#### New Preset

**구문:** obj = New Preset()

**설명:** 개체에 적용된 옵션과 사용자 정의를 나타내는 익명 사전 설정을 생성합니다. 이 개체를 Apply Preset에 전달하여 같은 유형의 다른 개체에 설정을 복사할 수 있습니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();

```

#### Paste Local Data Filter

**구문:** obj &lt;&lt; Paste Local Data Filter

**설명:** 클립보드의 로컬 데이터 필터를 현재 보고서에 적용합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );filter = dist << Local Data Filter( Add Filter( columns( :Region ), Where( :Region == "MW" ) ) );filter << Copy Local Data Filter;dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );Wait( 1 );dist2 << Paste Local Data Filter;

```

#### Redo Analysis

**구문:** obj &lt;&lt; Redo Analysis

**설명:** 동일한 분석을 새 창에서 다시 실행합니다. 데이터가 변경된 경우에는 분석결과가 달라집니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Contingency( Y( :Age ), X( :sex ) );obj << Redo Analysis;

```

#### Relaunch Analysis

**구문:** obj &lt;&lt; Relaunch Analysis

**설명:** 플랫폼 시작 창을 열고 보고서를 생성하는 데 사용된 설정을 불러옵니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Contingency( Y( :Age ), X( :sex ) );obj << Relaunch Analysis;

```

#### Remove Column Switcher

**구문:** obj &lt;&lt; Remove Column Switcher

**설명:** 플랫폼에 추가된 가장 최근 열 전환기를 제거합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher( :marital status, {:sex, :country, :marital status} );Wait( 2 );obj << Remove Column Switcher;

```

#### Remove Local Data Filter

**구문:** obj &lt;&lt; Remove Local Data Filter

**설명:** 로컬 데이터 필터가 생성된 경우 로컬 데이터 필터를 제거하고 데이터 테이블의 모든 데이터를 직접 사용하도록 플랫폼을 복원합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dist = dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));Wait( 2 );dist << remove local data filter;

```

#### Report

**구문:** obj &lt;&lt; Report; Report( obj )

**설명:** 보고서 개체에 대한 참조를 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Contingency( Y( :Age ), X( :sex ) );r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

#### Report View

**구문:** obj &lt;&lt; Report View( "전체"|"요약" )

**설명:** 보고서 보기는 플랫폼 보고서에 표시되는 상세 수준을 결정합니다. Full은 모든 상세 정보를 표시하고 Summary는 플랫폼에 따라 선택된 콘텐츠만 표시합니다. 사용자 정의된 동작의 경우 표시 상자는 <<Set Summary Behavior 메시지를 지원합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Contingency( Y( :Age ), X( :sex ) );obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**구문:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 데이터 테이블에 테이블 특성으로 저장합니다. 스크립트 이름을 지정할 수 있습니다. Append Suffix 옵션은 스크립트 이름에 숫자 접미사를 추가하여 이름이 같은 기존 스크립트와 구분합니다. Prompt 옵션은 사용자에게 스크립트 이름을 지정하라는 메시지를 표시합니다. Replace 옵션은 이름이 같은 기존 스크립트를 바꿉니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Contingency( Y( :Age ), X( :sex ), By( :_bycol ), Group Options( Return Group( 1 ) ) );obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**구문:** obj &lt;&lt; Save ByGroup Script to Journal

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 이 스크립트가 포함된 저널에 버튼을 추가합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Contingency( Y( :Age ), X( :sex ), By( :_bycol ), Group Options( Return Group( 1 ) ) );obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**구문:** obj &lt;&lt; Save ByGroup Script to Script Window

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 현재 스크립트 텍스트 창에 추가합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Contingency( Y( :Age ), X( :sex ), By( :_bycol ), Group Options( Return Group( 1 ) ) );obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**구문:** obj &lt;&lt; Save Script for All Objects

**설명:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Contingency( Y( :Age ), X( :sex ) );obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**구문:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**설명:** 모든 보고서 개체에 대한 스크립트를 현재 데이터 테이블에 저장합니다. 이 옵션은 창에 여러 보고서가 있을 때 유용합니다. 스크립트 이름을 따옴표로 묶어 지정하는 경우 외에는 첫 번째 플랫폼 이름을 따라 스크립트 이름이 지정됩니다.

**예제 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Contingency( Y( :Age ), X( :sex ), By( :_bycol ), Group Options( Return Group( 1 ) ) );obj[1] << Save Script for All Objects To Data Table;

```

**예제 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Contingency( Y( :Age ), X( :sex ), By( :_bycol ), Group Options( Return Group( 1 ) ) );obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**구문:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 데이터 테이블에 테이블 특성으로 저장합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Contingency( Y( :Age ), X( :sex ) );obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**구문:** obj &lt;&lt; Save Script to Journal

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 이 스크립트가 포함된 저널에 버튼을 추가합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Contingency( Y( :Age ), X( :sex ) );obj << Save Script to Journal;

```

#### Save Script to Report

**구문:** obj &lt;&lt; Save Script to Report

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 보고서 자체에 표시합니다. 수행된 작업에 대한 인쇄된 기록을 유지하려는 경우에 유용합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Contingency( Y( :Age ), X( :sex ) );obj << Save Script to Report;

```

#### Save Script to Script Window

**구문:** obj &lt;&lt; Save Script to Script Window

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 현재 스크립트 텍스트 창에 추가합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Contingency( Y( :Age ), X( :sex ) );obj << Save Script to Script Window;

```

#### SendToByGroup

**구문:** SendToByGroup( {":Column == level"}, command );

**설명:** 기준 그룹의 각 수준으로 플랫폼 명령을 보내거나 사용자 정의 명령을 표시합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	By( :Sex ),	SendToByGroup( {:sex == "F"}, Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) ) ),	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) ));

```

#### SendToEmbeddedScriptable

**구문:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**설명:** 포함된 스크립트 가능 개체로 보내기는 포함된 스크립트 가능 개체의 설정을 복원합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );dt << Life Distribution(	Y( :Time ),	Censor( :Censor ),	Censor Code( 1 ),	<<Fit Weibull,	SendToEmbeddedScriptable(		Dispatch( {"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}		)	));

```

#### SendToReport

**구문:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**설명:** Send To Report는 보고서 모양을 사용자 정의하기 위해 Dispatch 명령과 함께 사용됩니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Nominal Distribution( Column( :age ) ),	Continuous Distribution( Column( :weight ) ),	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) ));

```

#### Sync to Data Table Changes

**구문:** obj &lt;&lt; Sync to Data Table Changes

**설명:** 제외 항목 및 데이터 변경 사항과 동기화합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );Wait( 1 );dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );dist << Sync To Data Table Changes;

```

#### Title

**구문:** obj &lt;&lt; Title( "new title" )

**설명:** 플랫폼의 제목을 설정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Contingency( Y( :Age ), X( :sex ) );obj << Title( "My Platform" );

```

#### Top Report

**구문:** obj &lt;&lt; Top Report

**설명:** 보고서의 루트 노드에 대한 참조를 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Contingency( Y( :Age ), X( :sex ) );r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

#### Transform Column

**구문:** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**설명:** 개체의 로컬 컨텍스트(대개 플랫폼)에서 변환 열을 생성합니다. 변환 열은 플랫폼의 수명 동안에만 활성화됩니다.

**JMP추가된 버전:** 16

<b>실행기 항목: 예</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),	Continuous Distribution( Column( :"age^2"n ) ));

```

#### View Web XML

**구문:** obj &lt;&lt; View Web XML

**설명:** 대화식 HTML 보고서를 생성하는 데 사용된 XML 코드를 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );xml = obj << View Web XML;

```

#### Window View

**구문:** obj = Contingency(...Window View( "Visible"|"Invisible"|"Private" )...) &lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 보고서에 대해 생성할 창 유형을 설정합니다. 기본적으로 Visible 보고서 창이 생성됩니다. Invisible 창은 화면에 나타나지 않지만 Window()와 같은 함수로 검색할 수 있습니다. Private 창은 대부분의 창 메시지에 응답하지만 검색할 수 없으며 보고서 개체를 통해 처리해야 합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

### 연결된 생성자

#### Contingency

**구문:** Contingency( Y( columns ), X( columns ) )

**설명:** 일련의 범주형 그룹 간에 범주형 응답을 모델링합니다. 분석 방법에는 카이제곱 검정과 모자이크 그림이 포함됩니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Contingency( Y( :Age ), X( :sex ) );

```

### 열

#### Block

**구문:** obj = Contingency(...&lt;Block( column )&gt;...) &lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 블록 변수를 지정합니다. 이 변수는 두 번째 요인을 식별하고 Cochran-Mantel-Haenszel 검정을 수행합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.JMP" );obj = dt << Contingency( Y( :marital status ), X( :type ), Block( :sex ) );

```

#### By

**구문:** obj = Contingency(...&lt;By( column(s) )&gt;...) &lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 지정된 열의 각 수준에 대해 별도의 분석을 수행합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Contingency( Y( :Age ), X( :sex ), By( :_bycol ), Group Options( Return Group( 1 ) ) );

```

#### Freq

**구문:** obj = Contingency(...&lt;Freq( column )&gt;...) &lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 분석을 위해 각 행에 빈도를 할당하는 값이 들어 있는 열을 지정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_freqcol", Numeric, Continuous, Set Each Value( Random Integer( 1, 5 ) ) );obj = dt << Contingency( Y( :Age ), X( :sex ), Freq( :_freqcol ) );

```

#### Grouping Category

**구문:** obj = Contingency(...Grouping Category( column(s) )...) &lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 예측 변수를 지정합니다. 이러한 변수의 모델링 유형은 순서형 또는 명목형이어야 합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Contingency( Y( :Age ), X( :sex ) );

```

#### Response Category

**구문:** obj = Contingency(...Response Category( column(s) )...) &lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 분석할 하나 이상의 범주형 반응 변수를 지정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Contingency( Y( :Age ), X( :sex ) );

```

#### Weight

**구문:** obj = Contingency(...&lt;Weight( column )&gt;...) &lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 분석을 위해 각 행에 가중치를 할당하는 값이 들어 있는 열을 지정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_weightcol", Numeric, Continuous, Set Each Value( Random Beta( 1, 1 ) ) );obj = dt << Contingency( Y( :Age ), X( :sex ), Weight( :_weightcol ) );

```

#### X

**구문:** obj = Contingency(...X( column(s) )...) &lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 예측 변수를 지정합니다. 이러한 변수의 모델링 유형은 순서형 또는 명목형이어야 합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Contingency( Y( :Age ), X( :sex ) );

```

#### Y

**구문:** obj = Contingency(...Y( column(s) )...) &lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 분석할 하나 이상의 범주형 반응 변수를 지정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Contingency( Y( :Age ), X( :sex ) );

```

### 항목 메시지

#### Agreement Statistic

**구문:** obj &lt;&lt; Agreement Statistic( state=0|1 )

**설명:** 수준 간 합치도를 측정하는 통계량이 포함된 보고서를 표시하거나 숨깁니다. 이 보고서에는 통계량에 대한 표준 오차, 신뢰 구간 및 가설 검정 외에 카파 통계량이 포함됩니다. 또한 McNemar 검정이라고도 하는 Bowker 대칭성 검정이 포함됩니다. 이 옵션은 X 변수와 Y 변수의 수준이 동일한 경우에만 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Prime Minister Ratings.jmp" );obj = dt << Contingency(	Y( :Second Survey ),	X( :First Survey ),	Freq( :Count ),	Tests( 0 ),	Agreement Statistic( 1 ));

```

#### Analysis of Means for Proportions

**구문:** obj &lt;&lt; Analysis of Means for Proportions( state=0|1, &lt;chart options&gt; )

**설명:** 그룹 비율을 비교하기 위한 ANOMP(비율에 대한 평균 분석) 결정 차트를 표시하거나 숨깁니다. ANOMP는 X 변수 수준에 대한 반응 비율을 전체 반응 비율과 비교하는 다중 비교 절차입니다. 이 옵션은 Y 변수의 수준이 정확히 두 개인 경우에만 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :marital status ), X( :type ), Analysis of Means for Proportions( 1 ) );

```

#### Cochran Armitage Trend Test

**구문:** obj &lt;&lt; Cochran Armitage Trend Test( state=0|1 )

**설명:** 단일 변수의 수준 간에 이항 비율 추세에 대한 검정을 표시하거나 숨깁니다. 이 옵션은 한 변수의 수준이 정확히 두 개이고 다른 변수는 순서형인 경우에만 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.JMP" );obj = dt << Contingency( Y( :size ), X( :sex ), Mosaic Plot( 0 ) );obj << Cochran Armitage Trend Test( 1 );

```

#### Cochran Mantel Haenszel

**구문:** obj &lt;&lt; Cochran Mantel Haenszel( column ); obj &lt;&lt; Cochran Mantel Haenszel( state=0|1 )

**설명:** 세 번째 분류 변수를 블록화한 후 두 범주형 변수 간에 관계가 있는지 여부를 판별하는 검정을 표시하거나 숨깁니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.JMP" );obj = dt << Contingency( Y( :type ), X( :marital status ) );obj << Cochran Mantel Haenszel( :country );Wait( 2 );obj << Cochran Mantel Haenszel( 0 );

```

#### Contingency Table

**구문:** obj &lt;&lt; Contingency Table( state=0|1 )

**설명:** 이원 빈도 테이블을 표시하거나 숨깁니다. 이 테이블에는 X 변수의 각 수준에 대한 행과 Y 변수의 각 수준에 대한 열이 포함됩니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );Wait( 2 );obj << Contingency Table( 0 );

```

#### Correspondence Analysis

**구문:** obj &lt;&lt; Correspondence Analysis( state=0|1 ); obj &lt;&lt; Correspondence Analysis( correspondence chart options )

**설명:** 빈도 테이블에서 개수 패턴이 유사한 행 또는 열을 식별하는 대응 분석을 표시하거나 숨깁니다. 대응 분석 그림에는 분할표의 각 행과 각 열에 대한 점이 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Cereal.jmp" );obj = dt << Contingency( Y( :Fiber Gr ), X( :Manufacturer ) );obj << Correspondence Analysis( 1 );

```

#### Equivalence Tests of Relative Risk

**구문:** obj &lt;&lt; Equivalence Tests of Relative Risk( ratio, &lt;alpha=.05&gt;, &lt;test type&gt;, &lt;Response Group( level )&gt;, &lt;Factor Group( level )&gt; )

**설명:** 상대 위험도가 실제적으로 동등하다고 결정된 비율 이상으로 다르지 않은지를 검정합니다. 이는 일반 유의성 검정과 반대입니다. 유의 수준, 검정 유형 및 그룹 수준은 선택적 인수입니다. 검정 유형 인수는 기본적으로 "동등성"이지만 우월성 또는 비열등성 검정을 지정하는 데 사용할 수도 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );obj = dt << Contingency(	Y( :Lung Cancer ),	X( :Smoker ),	Freq( :Count ),	Contingency Table( Count( 1 ), Total %( 0 ), Col %( 0 ), Row %( 1 ) ),	Equivalence Tests of Relative Risk(		0.8,		0.05,		"Equivalence",		Response Group( "Cancer" ),		Factor Group( "NonSmoker" )	));

```

#### Equivalence Tests of Risk Difference

**구문:** obj &lt;&lt; Equivalence Tests of Risk Difference( difference, &lt;alpha=.05&gt;, &lt;test type&gt;, &lt;Response Group( level )&gt;, &lt;Factor Group( level )&gt; )

**설명:** 위험도 차이가 실제적으로 동등하다고 결정된 크기(차이) 이상으로 다르지 않은지를 검정합니다. 이는 일반 유의성 검정과 반대입니다. 유의 수준, 검정 유형 및 그룹 수준은 선택적 인수입니다. 검정 유형 인수는 기본적으로 "동등성"이지만 우월성 또는 비열등성 검정을 지정하는 데 사용할 수도 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );obj = dt << Contingency(	Y( :Lung Cancer ),	X( :Smoker ),	Freq( :Count ),	Contingency Table( Count( 1 ), Total %( 0 ), Col %( 0 ), Row %( 1 ) ),	Equivalence Tests of Risk Difference(		0.1,		0.05,		"Equivalence",		Response Group( "Cancer" ),		Factor Group( "NonSmoker" )	));

```

#### Exact Agreement Statistic

**구문:** obj &lt;&lt; Exact Agreement Statistic( state=0|1 )

**설명:** 정확 합치도 통계량 카파를 표시하거나 숨깁니다.

```jsl

dt = Open( "$SAMPLE_DATA/Prime Minister Ratings.jmp" );obj = dt << Contingency( Y( :Second Survey ), X( :First Survey ), Freq( :Count ), Tests( 0 ) );obj << Exact Agreement Statistic( 1 );

```

#### Exact Cochran Armitage Trend Test

**구문:** obj &lt;&lt; Exact Cochran Armitage Trend Test( state=0|1 )

**설명:** 정확 Cochran-Armitage 추세 검정을 표시하거나 숨깁니다.

```jsl

dt = Open( "$SAMPLE_DATA/Prime Minister Ratings.jmp" );obj = dt << Contingency( Y( :Second Survey ), X( :First Survey ), Freq( :Count ), Tests( 0 ) );obj << Exact Cochran Armitage Trend Test( 1 );

```

#### Fisher's Exact Test

**구문:** obj &lt;&lt; Fisher&apos;s Exact Test( state=0|1 )

**설명:** 두 범주형 변수 간의 연관성을 검정하기 위한 Fisher 정확 검정을 표시하거나 숨깁니다. 이 검정은 대표본 분포 가정에 의존하지 않습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Contingency( Y( :Age ), X( :sex ) );obj << Fisher's Exact Test( 1 );

```

#### Horizontal Mosaic

**구문:** obj &lt;&lt; Horizontal Mosaic( state=0|1 )

**설명:** 모자이크 그림을 가로(1) 또는 세로(0)로 회전합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Contingency( Y( :Age ), X( :sex ) );Wait( 2 );obj << Horizontal Mosaic( 1 );

```

#### Jonckheere Terpstra Test

**구문:** obj &lt;&lt; Jonckheere Terpstra Test( state=0|1 )

**설명:** 클래스 간 정렬된 차이에 대한 비모수 검정인 Jonckheere-Terpstra 검정의 보고서를 표시하거나 숨깁니다. 여기에서는 반응 변수의 분포가 클래스 간에 차이가 없다는 귀무가설을 검정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.JMP" );:height << Nominal( 1 );obj = dt << Contingency(	Y( :height ),	X( :age ),	Contingency Table(		Count( 1 ),		Total %( 0 ),		Col %( 0 ),		Row %( 0 ),		Expected( 0 ),		Deviation( 0 ),		Cell Chi Square( 0 ),		Col Cum( 0 ),		Col Cum %( 0 ),		Row Cum( 0 ),		Row Cum %( 0 )	));obj << Jonckheere Terpstra Test( 1 );

```

#### Measures of Association

**구문:** obj &lt;&lt; Measures of Association( state=0|1 )

**설명:** 분할표에 있는 변수 간의 연관성 측도가 포함된 보고서를 표시하거나 숨깁니다.

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ), Measures of Association( 1 ) );

```

#### Mosaic Plot

**구문:** obj &lt;&lt; Mosaic Plot( state=0|1 )

**설명:** 분할표의 그래픽 표현을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );Wait( 2 );obj << Mosaic Plot( 0 );

```

#### Odds Ratio

**구문:** obj &lt;&lt; Odds Ratio( state=0|1 )

**설명:** 승산비 보고서를 표시하거나 숨깁니다. 이 옵션은 X 변수와 Y 변수의 수준이 각각 정확히 두 개인 경우에만 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ), Odds Ratio( 1 ) );

```

#### Relative Risk

**구문:** obj &lt;&lt; Relative Risk( state=0|1, &lt;Y variable level, X variable level&gt; ); obj &lt;&lt; Relative Risk( state=0|1, &lt;"All"&gt; )

**설명:** 응답 수준 간의 상대 위험도를 표시하거나 숨깁니다. 이 옵션은 X 변수와 Y 변수의 수준이 각각 정확히 두 개인 경우에만 사용할 수 있습니다.

**예제 1**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ), Contingency Table( 0 ) );obj << Relative Risk( 1, "Cancer", "Smoker" );

```

**예제 2**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ), Contingency Table( 0 ) );obj << Relative Risk( 1, "All" );

```

#### Set Alpha Level

**구문:** obj &lt;&lt; Set Alpha Level( alpha=0.05 )

**설명:** 결정 한계 계산에 사용되는 유의 수준을 변경합니다. 기본값은 "0.05"입니다.

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );obj << Set Alpha Level( 0.1 );obj << Measures of Association( 1 );

```

#### Set α Level

**구문:** obj &lt;&lt; Set α Level( alpha=0.05 )

**설명:** 결정 한계 계산에 사용되는 유의 수준을 변경합니다. 기본값은 "0.05"입니다.

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );obj << Set Alpha Level( 0.1 );obj << Measures of Association( 1 );

```

#### Tests

**구문:** obj &lt;&lt; Tests( state=0|1 )

**설명:** 반응 수준 비율이 X 변수의 수준 간에 동일한지 여부를 측정하는 검정을 표시하거나 숨깁니다. 이러한 검정은 연속형 데이터에 대한 분산 분석 테이블과 유사합니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );Wait( 2 );obj << Tests( 0 );

```

#### Two Sample Test for Proportions

**구문:** obj &lt;&lt; Two Sample Test for Proportions( state=0|1 )

**설명:** 비율에 대한 2표본 검정을 표시하거나 숨깁니다. 이 검정은 X 변수의 두 수준 간에 Y 변수의 비율을 비교합니다. 이 옵션은 X 변수와 Y 변수의 수준이 각각 정확히 두 개인 경우에만 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );obj = dt << Contingency(	Y( :Lung Cancer ),	X( :Smoker ),	Freq( :Count ),	Two Sample Test for Proportions( 1 ));

```

## Logistic

### 공유 항목 메시지

#### Action

**구문:** obj &lt;&lt; Action

**설명:** 실행할 표현식을 삽입하기 위한 플랫폼 내의 다목적 트랩도어. 임시로 표시 상자 및 데이터 테이블 유형을 플랫폼에 설정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

#### Apply Preset

**구문:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**설명:** 이전에 생성된 사전 설정을 개체에 적용하여 옵션과 사용자 정의를 저장된 설정과 일치하도록 업데이트합니다.

**JMP추가된 버전:** 18

**이름으로 검색**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

**익명 사전 설정**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );Wait( 1 );obj2 << Apply Preset( preset );

```

**폴더 내에서 검색**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

#### Automatic Recalc

**구문:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**설명:** 제외 항목 및 데이터 변경이 있을 때 분석을 자동으로 다시 실행합니다. 자동 재계산 옵션이 설정된 경우 재계산하기 전에 제외 항목 및 데이터 변경이 적용되게 하려면 Wait(0) 명령을 사용하는 것이 좋습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );obj << Automatic Recalc( 1 );dt << Select Rows( 5 ) << Exclude( 1 );

```

#### Broadcast

**구문:** obj &lt;&lt; Broadcast(message)

**설명:** 플랫폼에 메시지를 브로드캐스트합니다. 개별 개체의 반환 결과가 테이블인 경우 가능하면 테이블이 연결되고 최종 형식은 테이블 상자의 &apos;결합 테이블 저장&apos; 옵션 결과 또는 소스 열을 사용한 &apos;연결&apos; 옵션 결과와 동일합니다. 그 외의 경우에는 결과가 목록에 저장되어 반환됩니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );objs = Control Chart Builder( Variables( Subgroup( :DAY ), Y( :DIAMETER ) ), By( :OPERATOR ) );objs[1] << Broadcast( Save Summaries );

```

#### Column Switcher

**구문:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**설명:** 플랫폼 변수를 변경하기 위한 제어판을 추가합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher( :marital status, {:sex, :country, :marital status} );

```

#### Copy ByGroup Script

**구문:** obj &lt;&lt; Copy ByGroup Script

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 클립보드에 넣습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Logistic(	Y( :Response ),	X( :"ln(dose)"n ),	Freq( :Count ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Copy ByGroup Script;

```

#### Copy Script

**구문:** obj &lt;&lt; Copy Script

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 클립보드에 넣습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );obj << Copy Script;

```

#### Data Table Window

**구문:** obj &lt;&lt; Data Table Window

**설명:** 이 분석에 대한 데이터 테이블 창을 앞으로 가져옵니다.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );obj << Data Table Window;

```

#### Get By Levels

**구문:** obj &lt;&lt; Get By Levels

**설명:** 기준 그룹 열을 값에 매핑하는 연관 배열을 반환합니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv << Get By Levels;

```

#### Get ByGroup Script

**구문:** obj &lt;&lt; Get ByGroup Script

**설명:** 이 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Logistic(	Y( :Response ),	X( :"ln(dose)"n ),	Freq( :Count ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));t = obj[1] << Get ByGroup Script;Show( t );

```

#### Get Container

**구문:** obj &lt;&lt; Get Container

**설명:** 개체의 콘텐츠를 담고 있는 컨테이너 상자에 대한 참조를 반환합니다.

**일반**

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**필터 사용 플랫폼**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

#### Get Data Table

**구문:** obj &lt;&lt; Get Data Table

**설명:** 데이터 테이블에 대한 참조를 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );t = obj << Get Datatable;Show( N Rows( t ) );

```

#### Get Group Platform

**구문:** obj &lt;&lt; Get Group Platform

**설명:** 이 플랫폼이 그룹의 일부인 경우 그룹 플랫폼 개체를 반환하고, 그렇지 않은 경우 Empty()를 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );group = biv[1] << Get Group Platform;Wait( 1 );group << Layout( "Arrange in Tabs" );

```

#### Get Script

**구문:** obj &lt;&lt; Get Script

**설명:** 이 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );t = obj << Get Script;Show( t );

```

#### Get Script With Data Table

**구문:** obj &lt;&lt; Get Script With Data Table

**설명:** 이 데이터 테이블을 참조하는 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );t = obj << Get Script With Data Table;Show( t );

```

#### Get Timing

**구문:** obj &lt;&lt; Get Timing

**설명:** 플랫폼 시작 시간을 설정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );t = obj << Get Timing;Show( t );

```

#### Get Web Support

**구문:** obj &lt;&lt; Get Web Support

**설명:** 표시 개체에 대한 대화식 HTML 지원 수준을 나타내는 숫자를 반환합니다. 1은 일부 또는 모든 요소가 지원됨을 의미하고 0은 지원되지 않음을 의미합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );s = obj << Get Web Support();Show( s );

```

#### Get Where Expr

**구문:** obj &lt;&lt; Get Where Expr

**설명:** By() 또는 Where()를 사용하여 플랫폼이 시작된 경우 데이터 부분집합에 대한 Where 표현식을 반환하고, 그렇지 않은 경우 Empty()를 반환합니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

#### Ignore Platform Preferences

**구문:** Ignore Platform Preferences( state=0|1 )

**설명:** 플랫폼의 현재 환경 설정을 무시합니다. 생성 후 플랫폼으로 전송될 때 메시지가 무시됩니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Ignore Platform Preferences( 1 ),	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

#### Local Data Filter

**구문:** obj &lt;&lt; Local Data Filter

**설명:** 데이터를 특정 그룹 또는 범위로 필터링합니다. 이 플랫폼에서만 사용 가능합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));

```

#### New Preset

**구문:** obj = New Preset()

**설명:** 개체에 적용된 옵션과 사용자 정의를 나타내는 익명 사전 설정을 생성합니다. 이 개체를 Apply Preset에 전달하여 같은 유형의 다른 개체에 설정을 복사할 수 있습니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();

```

#### Paste Local Data Filter

**구문:** obj &lt;&lt; Paste Local Data Filter

**설명:** 클립보드의 로컬 데이터 필터를 현재 보고서에 적용합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );filter = dist << Local Data Filter( Add Filter( columns( :Region ), Where( :Region == "MW" ) ) );filter << Copy Local Data Filter;dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );Wait( 1 );dist2 << Paste Local Data Filter;

```

#### Redo Analysis

**구문:** obj &lt;&lt; Redo Analysis

**설명:** 동일한 분석을 새 창에서 다시 실행합니다. 데이터가 변경된 경우에는 분석결과가 달라집니다.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );obj << Redo Analysis;

```

#### Relaunch Analysis

**구문:** obj &lt;&lt; Relaunch Analysis

**설명:** 플랫폼 시작 창을 열고 보고서를 생성하는 데 사용된 설정을 불러옵니다.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );obj << Relaunch Analysis;

```

#### Remove Column Switcher

**구문:** obj &lt;&lt; Remove Column Switcher

**설명:** 플랫폼에 추가된 가장 최근 열 전환기를 제거합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher( :marital status, {:sex, :country, :marital status} );Wait( 2 );obj << Remove Column Switcher;

```

#### Remove Local Data Filter

**구문:** obj &lt;&lt; Remove Local Data Filter

**설명:** 로컬 데이터 필터가 생성된 경우 로컬 데이터 필터를 제거하고 데이터 테이블의 모든 데이터를 직접 사용하도록 플랫폼을 복원합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dist = dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));Wait( 2 );dist << remove local data filter;

```

#### Report

**구문:** obj &lt;&lt; Report; Report( obj )

**설명:** 보고서 개체에 대한 참조를 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

#### Report View

**구문:** obj &lt;&lt; Report View( "전체"|"요약" )

**설명:** 보고서 보기는 플랫폼 보고서에 표시되는 상세 수준을 결정합니다. Full은 모든 상세 정보를 표시하고 Summary는 플랫폼에 따라 선택된 콘텐츠만 표시합니다. 사용자 정의된 동작의 경우 표시 상자는 <<Set Summary Behavior 메시지를 지원합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**구문:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 데이터 테이블에 테이블 특성으로 저장합니다. 스크립트 이름을 지정할 수 있습니다. Append Suffix 옵션은 스크립트 이름에 숫자 접미사를 추가하여 이름이 같은 기존 스크립트와 구분합니다. Prompt 옵션은 사용자에게 스크립트 이름을 지정하라는 메시지를 표시합니다. Replace 옵션은 이름이 같은 기존 스크립트를 바꿉니다.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Logistic(	Y( :Response ),	X( :"ln(dose)"n ),	Freq( :Count ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**구문:** obj &lt;&lt; Save ByGroup Script to Journal

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 이 스크립트가 포함된 저널에 버튼을 추가합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Logistic(	Y( :Response ),	X( :"ln(dose)"n ),	Freq( :Count ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**구문:** obj &lt;&lt; Save ByGroup Script to Script Window

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 현재 스크립트 텍스트 창에 추가합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Logistic(	Y( :Response ),	X( :"ln(dose)"n ),	Freq( :Count ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**구문:** obj &lt;&lt; Save Script for All Objects

**설명:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**구문:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**설명:** 모든 보고서 개체에 대한 스크립트를 현재 데이터 테이블에 저장합니다. 이 옵션은 창에 여러 보고서가 있을 때 유용합니다. 스크립트 이름을 따옴표로 묶어 지정하는 경우 외에는 첫 번째 플랫폼 이름을 따라 스크립트 이름이 지정됩니다.

**예제 1**

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Logistic(	Y( :Response ),	X( :"ln(dose)"n ),	Freq( :Count ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table;

```

**예제 2**

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Logistic(	Y( :Response ),	X( :"ln(dose)"n ),	Freq( :Count ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**구문:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 데이터 테이블에 테이블 특성으로 저장합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**구문:** obj &lt;&lt; Save Script to Journal

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 이 스크립트가 포함된 저널에 버튼을 추가합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );obj << Save Script to Journal;

```

#### Save Script to Report

**구문:** obj &lt;&lt; Save Script to Report

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 보고서 자체에 표시합니다. 수행된 작업에 대한 인쇄된 기록을 유지하려는 경우에 유용합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );obj << Save Script to Report;

```

#### Save Script to Script Window

**구문:** obj &lt;&lt; Save Script to Script Window

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 현재 스크립트 텍스트 창에 추가합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );obj << Save Script to Script Window;

```

#### SendToByGroup

**구문:** SendToByGroup( {":Column == level"}, command );

**설명:** 기준 그룹의 각 수준으로 플랫폼 명령을 보내거나 사용자 정의 명령을 표시합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	By( :Sex ),	SendToByGroup( {:sex == "F"}, Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) ) ),	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) ));

```

#### SendToEmbeddedScriptable

**구문:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**설명:** 포함된 스크립트 가능 개체로 보내기는 포함된 스크립트 가능 개체의 설정을 복원합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );dt << Life Distribution(	Y( :Time ),	Censor( :Censor ),	Censor Code( 1 ),	<<Fit Weibull,	SendToEmbeddedScriptable(		Dispatch( {"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}		)	));

```

#### SendToReport

**구문:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**설명:** Send To Report는 보고서 모양을 사용자 정의하기 위해 Dispatch 명령과 함께 사용됩니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Nominal Distribution( Column( :age ) ),	Continuous Distribution( Column( :weight ) ),	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) ));

```

#### Sync to Data Table Changes

**구문:** obj &lt;&lt; Sync to Data Table Changes

**설명:** 제외 항목 및 데이터 변경 사항과 동기화합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );Wait( 1 );dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );dist << Sync To Data Table Changes;

```

#### Title

**구문:** obj &lt;&lt; Title( "new title" )

**설명:** 플랫폼의 제목을 설정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );obj << Title( "My Platform" );

```

#### Top Report

**구문:** obj &lt;&lt; Top Report

**설명:** 보고서의 루트 노드에 대한 참조를 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

#### Transform Column

**구문:** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**설명:** 개체의 로컬 컨텍스트(대개 플랫폼)에서 변환 열을 생성합니다. 변환 열은 플랫폼의 수명 동안에만 활성화됩니다.

**JMP추가된 버전:** 16

<b>실행기 항목: 예</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),	Continuous Distribution( Column( :"age^2"n ) ));

```

#### View Web XML

**구문:** obj &lt;&lt; View Web XML

**설명:** 대화식 HTML 보고서를 생성하는 데 사용된 XML 코드를 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );xml = obj << View Web XML;

```

#### Window View

**구문:** obj = Logistic(...Window View( "Visible"|"Invisible"|"Private" )...) &lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 보고서에 대해 생성할 창 유형을 설정합니다. 기본적으로 Visible 보고서 창이 생성됩니다. Invisible 창은 화면에 나타나지 않지만 Window()와 같은 함수로 검색할 수 있습니다. Private 창은 대부분의 창 메시지에 응답하지만 검색할 수 없으며 보고서 개체를 통해 처리해야 합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

### 연결된 생성자

#### Logistic

**구문:** Logistic( Y( columns ), X( columns ) )

**설명:** 연속형 변수에 대한 범주형 반응의 관계를 모델링합니다. 분석 방법에는 로지스틱 회귀와 ROC 곡선이 포함됩니다.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );

```

### 열

#### By

**구문:** obj = Logistic(...&lt;By( column(s) )&gt;...) &lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 지정된 열의 각 수준에 대해 별도의 분석을 수행합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Logistic(	Y( :Response ),	X( :"ln(dose)"n ),	Freq( :Count ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));

```

#### Categorical Response

**구문:** obj = Logistic(...Categorical Response( column(s) )...) &lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 분석할 하나 이상의 범주형 반응 변수를 지정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );

```

#### Continuous Regressor

**구문:** obj = Logistic(...Continuous Regressor( column(s) )...) &lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 예측 변수를 지정합니다. 이러한 변수의 모델링 유형은 연속형이어야 합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );

```

#### Freq

**구문:** obj = Logistic(...&lt;Freq( column )&gt;...) &lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 분석을 위해 각 행에 빈도를 할당하는 값이 들어 있는 열을 지정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );

```

#### Weight

**구문:** obj = Logistic(...&lt;Weight( column )&gt;...) &lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 분석을 위해 각 행에 가중치를 할당하는 값이 들어 있는 열을 지정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );dt << New Column( "_weightcol", Numeric, Continuous, Set Each Value( Random Beta( 1, 1 ) ) );obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ), Weight( :_weightcol ) );

```

#### X

**구문:** obj = Logistic(...X( column(s) )...) &lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 예측 변수를 지정합니다. 이러한 변수의 모델링 유형은 연속형이어야 합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );

```

#### Y

**구문:** obj = Logistic(...Y( column(s) )...) &lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 분석할 하나 이상의 범주형 반응 변수를 지정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );

```

### 항목 메시지

#### Confidence Intervals

**구문:** obj &lt;&lt; Confidence Intervals( &lt;state=0|1&gt; | &lt;fraction&gt; )

**설명:** 모수 추정값 테이블에서 각 효과 오른쪽에 신뢰 구간을 표시하거나 숨깁니다.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Logistic( Freq( :Count ), Y( :Response ), X( :"ln(dose)"n ) );obj << Confidence Intervals( 0.01 );

```

#### Inverse Prediction

**구문:** obj &lt;&lt; Inverse Prediction( Response( prob1, prob2, ... ), &lt;Confidence Level( percent=0.95 )&gt;, &lt;Two sided|Lower One Sided|Upper One Sided&gt; )

**설명:** 하나 이상의 반응 변수 값에 대한 예측 변수 값을 예측할 수 있습니다. 기본적으로 각 역추정 예측에 대해 양측 95% 신뢰 한계가 계산됩니다.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );Wait( 1 );obj << Inverse Prediction( Response( 0.5, 0.9 ) );

```

#### Lift Curve

**구문:** obj &lt;&lt; Lift Curve( state=0|1 )

**설명:** 향상도 곡선 그림을 표시하거나 숨깁니다. 향상도 곡선은 향상도 대 관측값 비율을 표시하고 모형의 예측 능력에 대한 또 다른 보기를 제공합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );Wait( 1 );obj << Lift Curve( 1 );

```

#### Line Color

**구문:** obj &lt;&lt; Line Color( color )

**설명:** 그림 곡선의 색상을 선택할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );Wait( 1 );obj << Line Color( "Magenta" );

```

#### Logistic Plot

**구문:** obj &lt;&lt; Logistic Plot( state=0|1 )

**설명:** 로지스틱 그림을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );Wait( 1 );obj << Logistic Plot( 0 );

```

#### Odds Ratios

**구문:** obj &lt;&lt; Odds Ratios( state=0|1 )

**설명:** 모수 추정값 보고서에서 승산비가 포함된 열을 추가하거나 제거합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );Wait( 1 );obj << Odds Ratios( 1 );

```

#### Precision Recall Curve

**구문:** obj &lt;&lt; Precision Recall Curve( state=0|1 )

**설명:** 반응 변수의 각 수준에 대한 곡선을 포함하는 정밀도-재현율 곡선 그림을 표시하거나 숨깁니다. 정밀도-재현율 곡선은 다양한 임계값에서 정밀도 값 대 재현율 값을 표시합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ), Target Level( "Cured" ) );Wait( 1 );obj << Precision Recall Curve( 1 );

```

#### ROC Curve

**구문:** obj &lt;&lt; ROC Curve( state=0|1 )

**설명:** 반응 변수의 각 수준에 대한 ROC(Receiver Operating Characteristic) 곡선을 표시하거나 숨깁니다. ROC 곡선은 민감도 대 (1 - 특이도)를 보여 주는 그림입니다.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ), Target Level( "Cured" ) );Wait( 1 );obj << ROC Curve( 1 );

```

#### Save Probability Formula

**구문:** obj &lt;&lt; Save Probability Formula

**설명:** 새 열을 데이터 테이블에 저장합니다. 새 열에는 모형에서 예측하는 확률의 계산식이 포함됩니다.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );Wait( 1 );obj << Save Probability Formula;

```

#### Show Points

**구문:** obj &lt;&lt; Show Points( state=0|1 )

**설명:** 로지스틱 그림에 점을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );Wait( 1 );obj << Show Points( 0 );

```

#### Show Rate Curve

**구문:** obj &lt;&lt; Show Rate Curve( state=0|1 )

**설명:** 로지스틱 그림에 비율 곡선을 표시하거나 숨깁니다. 비율 곡선은 X 변수의 각 값에 대해 여러 개의 점이 있는 경우에만 유용합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );Wait( 1 );obj << Show Rate Curve( 1 );

```

#### Target Level

**구문:** obj = Logistic(...Target Level( level )...)

**설명:** 확률을 모델링할 반응 수준을 지정합니다.

**JMP추가된 버전:** 16

<b>실행기 항목: 예</b>

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ), Target Level( "Cured" ) );obj << ROC Curve( 1 );

```

## Oneway > ANOM for Ranges

### 항목 메시지

#### Point Options

**구문:** obj &lt;&lt; ANOM for Ranges( 1, Point Options( "Show Needles"|"Show Connected Points"|"Show Only Points" ) ); scrobj &lt;&lt; Point Options( "Show Needles"|"Show Connected Points"|"Show Only Points" )

**설명:** 차트의 점 그리기 스타일을 지정합니다. 세로 바늘(수직선) 그리기, 점 연결 및 점만 표시 중에서 선택할 수 있습니다. 기본적으로 평균 위치에 그려진 가로선에 점을 연결하는 바늘로 차트를 그립니다.

```jsl

dt = Open( "$SAMPLE_DATA/Michelson.jmp" );obj = dt << Oneway( Y( :Velocity ), X( :Trial# ) );obj << ANOM for Ranges( 1, Point Options( "Show Connected Points" ) );Wait( 2 );scrobj = Report( obj )["Analysis of Means for Ranges"] << Get Scriptable Object;scrobj << Point Options( "Show Only Points" );

```

#### Set Alpha Level

**구문:** obj &lt;&lt; ANOM for Ranges( 1, Set Alpha Level( alpha ) ); scrobj &lt;&lt; Set Alpha Level( alpha )

**설명:** 결정 한계 계산에 사용되는 유의 수준을 변경합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Michelson.jmp" );obj = dt << Oneway( Y( :Velocity ), X( :Trial# ) );obj << ANOM for Ranges( 1, Set Alpha Level( 0.1 ) );Wait( 2 );scrobj = Report( obj )["Analysis of Means for Ranges"] << Get Scriptable Object;scrobj << Set Alpha Level( 0.05 );

```

#### Show Center Line

**구문:** obj &lt;&lt; ANOM for Ranges( 1, Show Center Line( state=0|1 ) ); scrobj &lt;&lt; Show Center Line( state=0|1 )

**설명:** 중심선(전체 평균 범위)을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Michelson.jmp" );obj = dt << Oneway( Y( :Velocity ), X( :Trial# ) );obj << ANOM for Ranges( 1, Show Center Line( 0 ) );Wait( 2 );scrobj = Report( obj )["Analysis of Means for Ranges"] << Get Scriptable Object;scrobj << Show Center Line( 1 );

```

#### Show Decision Limit Shading

**구문:** obj &lt;&lt; ANOM for Ranges( 1, Show Decision Limit Shading( state=0|1 ) ); scrobj &lt;&lt; Show Decision Limit Shading( state=0|1 )

**설명:** 범위 평균 분석 차트의 결정 한계 음영을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Michelson.jmp" );obj = dt << Oneway( Y( :Velocity ), X( :Trial# ) );obj << ANOM for Ranges( 1, Show Decision Limit Shading( 0 ) );Wait( 2 );scrobj = Report( obj )["Analysis of Means for Ranges"] << Get Scriptable Object;scrobj << Show Decision Limit Shading( 1 );

```

#### Show Decision Limits

**구문:** obj &lt;&lt; ANOM for Ranges( 1, Show Decision Limits( state=0|1 ) ); scrobj &lt;&lt; Show Decision Limits( state=0|1 )

**설명:** 범위 평균 분석 차트의 결정 한계선을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Michelson.jmp" );obj = dt << Oneway( Y( :Velocity ), X( :Trial# ) );obj << ANOM for Ranges( 1, Show Decision Limits( 0 ) );Wait( 2 );scrobj = Report( obj )["Analysis of Means for Ranges"] << Get Scriptable Object;scrobj << Show Decision Limits( 1 );

```

#### Show Summary Report

**구문:** obj &lt;&lt; ANOM for Ranges( 1, Show Summary Report( state=0|1 ) ); scrobj &lt;&lt; Show Summary Report( state=0|1 )

**설명:** 그룹 범위 및 해당 결정 한계가 포함된 보고서를 표시하거나 숨깁니다.

```jsl

dt = Open( "$SAMPLE_DATA/Michelson.jmp" );obj = dt << Oneway( Y( :Velocity ), X( :Trial# ) );obj << ANOM for Ranges( 1, Show Summary Report( 1 ) );Wait( 2 );scrobj = Report( obj )["Analysis of Means for Ranges"] << Get Scriptable Object;scrobj << Show Summary Report( 0 );

```

## Oneway > ANOM for Variances with Levene(ADM)

### 항목 메시지

#### Point Options

**구문:** obj &lt;&lt; "ANOM for Variances with Levene(ADM)"n( 1, Point Options( "Show Needles"|"Show Connected Points"|"Show Only Points" ) ); scrobj &lt;&lt; Point Options( "Show Needles"|"Show Connected Points"|"Show Only Points" )

**설명:** 차트의 점 그리기 스타일을 지정합니다. 세로 바늘(수직선) 그리기, 점 연결 및 점만 표시 중에서 선택할 수 있습니다. 기본적으로 평균 위치에 그려진 가로선에 점을 연결하는 바늘로 차트를 그립니다.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Oneway( Y( :y ), X( :Drug ) );obj << "ANOM for Variances with Levene(ADM)"n( 1, Point Options( "Show Only Points" ) );Wait( 2 );scrobj = Report( obj )["Analysis of Means for Variances-Levene(ADM)"] << Get Scriptable Object;scrobj << Point Options( "Show Connected Points" );

```

#### Set Alpha Level

**구문:** obj &lt;&lt; "ANOM for Variances with Levene(ADM)"n( 1, Set Alpha Level( alpha ) ); scrobj &lt;&lt; Set Alpha Level( alpha )

**설명:** 결정 한계 계산에 사용되는 유의 수준을 변경합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Oneway( Y( :y ), X( :Drug ) );obj << "ANOM for Variances with Levene(ADM)"n( 1, Set Alpha Level( 0.1 ) );Wait( 2 );scrobj = Report( obj )["Analysis of Means for Variances-Levene(ADM)"] << Get Scriptable Object;scrobj << Set Alpha Level( 0.05 );

```

#### Show Center Line

**구문:** obj &lt;&lt; "ANOM for Variances with Levene(ADM)"n( 1, Show Center Line( state=0|1 ) ); scrobj &lt;&lt; Show Center Line( state=0|1 )

**설명:** 중심선(전체 평균 ADM)을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Oneway( Y( :y ), X( :Drug ) );obj << "ANOM for Variances with Levene(ADM)"n( 1, Show Center Line( 0 ) );Wait( 2 );scrobj = Report( obj )["Analysis of Means for Variances-Levene(ADM)"] << Get Scriptable Object;scrobj << Show Center Line( 1 );

```

#### Show Decision Limit Shading

**구문:** obj &lt;&lt; "ANOM for Variances with Levene(ADM)"n( 1, Show Decision Limit Shading( state=0|1 ) ); scrobj &lt;&lt; Show Decision Limit Shading( state=0|1 )

**설명:** ANOMV-Levene(ADM) 차트에 대한 결정 한계 음영을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Oneway( Y( :y ), X( :Drug ) );obj << "ANOM for Variances with Levene(ADM)"n( 1, Show Decision Limit Shading( 0 ) );Wait( 2 );scrobj = Report( obj )["Analysis of Means for Variances-Levene(ADM)"] << Get Scriptable Object;scrobj << Show Decision Limit Shading( 1 );

```

#### Show Decision Limits

**구문:** obj &lt;&lt; "ANOM for Variances with Levene(ADM)"n( 1, Show Decision Limits( state=0|1 ) ); scrobj &lt;&lt; Show Decision Limits( state=0|1 )

**설명:** ANOMV-Levene(ADM) 차트에 대한 결정 한계선을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Oneway( Y( :y ), X( :Drug ) );obj << "ANOM for Variances with Levene(ADM)"n( 1, Show Decision Limits( 0 ) );Wait( 2 );scrobj = Report( obj )["Analysis of Means for Variances-Levene(ADM)"] << Get Scriptable Object;scrobj << Show Decision Limits( 1 );

```

#### Show Summary Report

**구문:** obj &lt;&lt; "ANOM for Variances with Levene(ADM)"n( 1, Show Summary Report( state=0|1 ) ); scrobj &lt;&lt; Show Summary Report( state=0|1 )

**설명:** 그룹 평균 ADM 및 결정 한계가 포함된 보고서를 표시하거나 숨깁니다.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Oneway( Y( :y ), X( :Drug ) );obj << "ANOM for Variances with Levene(ADM)"n( 1, Show Summary Report( 1 ) );Wait( 2 );scrobj = Report( obj )["Analysis of Means for Variances-Levene(ADM)"] << Get Scriptable Object;scrobj << Show Summary Report( 0 );

```

## Oneway > ANOM for Variances

### 항목 메시지

#### Graph in Variance Scale

**구문:** obj &lt;&lt; ANOM for Variances( 1, Graph in Variance Scale( state=0|1 ) ); scrobj &lt;&lt; Graph in Variance Scale( state=0|1 )

**설명:** 세로 축의 척도를 지정합니다. 표준편차와 분산 중에서 선택할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Oneway( Y( :y ), X( :Drug ) );obj << ANOM for Variances( 1, Graph in Variance Scale( 1 ) );Wait( 2 );scrobj = Report( obj )["Analysis of Means for Variances"] << Get Scriptable Object;scrobj << Graph in Variance Scale( 0 );

```

#### Point Options

**구문:** obj &lt;&lt; ANOM for Variances( 1, Point Options( "Show Needles"|"Show Connected Points"|"Show Only Points" ) ); scrobj &lt;&lt; Point Options( "Show Needles"|"Show Connected Points"|"Show Only Points" )

**설명:** 차트의 점 그리기 스타일을 지정합니다. 세로 바늘(수직선) 그리기, 점 연결 및 점만 표시 중에서 선택할 수 있습니다. 기본적으로 평균 위치에 그려진 가로선에 점을 연결하는 바늘로 차트를 그립니다.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Oneway( Y( :y ), X( :Drug ) );obj << ANOM for Variances( 1, Point Options( "Show Only Points" ) );Wait( 2 );scrobj = Report( obj )["Analysis of Means for Variances"] << Get Scriptable Object;scrobj << Point Options( "Show Connected Points" );

```

#### Set Alpha Level

**구문:** obj &lt;&lt; ANOM for Variances( 1, Set Alpha Level( alpha ) ); scrobj &lt;&lt; Set Alpha Level( alpha )

**설명:** 결정 한계 계산에 사용되는 유의 수준을 변경합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Oneway( Y( :y ), X( :Drug ) );obj << ANOM for Variances( 1, Set Alpha Level( 0.1 ) );Wait( 2 );scrobj = Report( obj )["Analysis of Means for Variances"] << Get Scriptable Object;scrobj << Set Alpha Level( 0.05 );

```

#### Show Center Line

**구문:** obj &lt;&lt; ANOM for Variances( 1, Show Center Line( state=0|1 ) ); scrobj &lt;&lt; Show Center Line( state=0|1 )

**설명:** 중심선(Y 척도에 따라 RMSE 또는 MSE)을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Oneway( Y( :y ), X( :Drug ) );obj << ANOM for Variances( 1, Show Center Line( 0 ) );Wait( 2 );scrobj = Report( obj )["Analysis of Means for Variances"] << Get Scriptable Object;scrobj << Show Center Line( 1 );

```

#### Show Decision Limit Shading

**구문:** obj &lt;&lt; ANOM for Variances( 1, Show Decision Limit Shading( state=0|1 ) ); scrobj &lt;&lt; Show Decision Limit Shading( state=0|1 )

**설명:** ANOMV 차트에 대한 결정 한계 음영을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Oneway( Y( :y ), X( :Drug ) );obj << ANOM for Variances( 1, Show Decision Limit Shading( 0 ) );Wait( 2 );scrobj = Report( obj )["Analysis of Means for Variances"] << Get Scriptable Object;scrobj << Show Decision Limit Shading( 1 );

```

#### Show Decision Limits

**구문:** obj &lt;&lt; ANOM for Variances( 1, Show Decision Limits( state=0|1 ) ); scrobj &lt;&lt; Show Decision Limits( state=0|1 )

**설명:** ANOMV 차트에 대한 결정 한계선을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Oneway( Y( :y ), X( :Drug ) );obj << ANOM for Variances( 1, Show Decision Limits( 0 ) );Wait( 2 );scrobj = Report( obj )["Analysis of Means for Variances"] << Get Scriptable Object;scrobj << Show Decision Limits( 1 );

```

#### Show Summary Report

**구문:** obj &lt;&lt; ANOM for Variances( 1, Show Summary Report( state=0|1 ) ); scrobj &lt;&lt; Show Summary Report( state=0|1 )

**설명:** 그룹 표준편차(또는 분산) 및 결정 한계가 포함된 보고서를 표시하거나 숨깁니다.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Oneway( Y( :y ), X( :Drug ) );obj << ANOM for Variances( 1, Show Summary Report( 1 ) );Wait( 2 );scrobj = Report( obj )["Analysis of Means for Variances"] << Get Scriptable Object;scrobj << Show Summary Report( 0 );

```

## Oneway > ANOM with Transformed Ranks

### 항목 메시지

#### Point Options

**구문:** obj &lt;&lt; ANOM with Transformed Ranks( 1, Point Options( "Show Needles"|"Show Connected Points"|"Show Only Points" ) ); scrobj &lt;&lt; Point Options( "Show Needles"|"Show Connected Points"|"Show Only Points" )

**설명:** 차트의 점 그리기 스타일을 지정합니다. 세로 바늘(수직선) 그리기, 점 연결 및 점만 표시 중에서 선택할 수 있습니다. 기본적으로 평균 위치에 그려진 가로선에 점을 연결하는 바늘로 차트를 그립니다.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Oneway( Y( :y ), X( :Drug ) );obj << ANOM with Transformed Ranks( 1, Point Options( "Show Only Points" ) );Wait( 2 );scrobj = Report( obj )["Analysis of Means-Transformed Ranks"] << Get Scriptable Object;scrobj << Point Options( "Show Connected Points" );

```

#### Set Alpha Level

**구문:** obj &lt;&lt; ANOM with Transformed Ranks( 1, Set Alpha Level( alpha ) ); scrobj &lt;&lt; Set Alpha Level( alpha )

**설명:** 결정 한계 계산에 사용되는 유의 수준을 변경합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Oneway( Y( :y ), X( :Drug ) );obj << ANOM with Transformed Ranks( 1, Set Alpha Level( 0.1 ) );Wait( 2 );scrobj = Report( obj )["Analysis of Means-Transformed Ranks"] << Get Scriptable Object;scrobj << Set Alpha Level( 0.05 );

```

#### Show Center Line

**구문:** obj &lt;&lt; ANOM with Transformed Ranks( 1, Show Center Line( state=0|1 ) ); scrobj &lt;&lt; Show Center Line( state=0|1 )

**설명:** 중심선(전체 평균)을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Oneway( Y( :y ), X( :Drug ) );obj << ANOM with Transformed Ranks( 1, Show Center Line( 0 ) );Wait( 2 );scrobj = Report( obj )["Analysis of Means-Transformed Ranks"] << Get Scriptable Object;scrobj << Show Center Line( 1 );

```

#### Show Decision Limit Shading

**구문:** obj &lt;&lt; ANOM with Transformed Ranks( 1, Show Decision Limit Shading( state=0|1 ) ); scrobj &lt;&lt; Show Decision Limit Shading( state=0|1 )

**설명:** ANOM-TR 차트에 대한 결정 한계 음영을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Oneway( Y( :y ), X( :Drug ) );obj << ANOM with Transformed Ranks( 1, Show Decision Limit Shading( 0 ) );Wait( 2 );scrobj = Report( obj )["Analysis of Means-Transformed Ranks"] << Get Scriptable Object;scrobj << Show Decision Limit Shading( 1 );

```

#### Show Decision Limits

**구문:** obj &lt;&lt; ANOM with Transformed Ranks( 1, Show Decision Limits( state=0|1 ) ); scrobj &lt;&lt; Show Decision Limits( state=0|1 )

**설명:** ANOM-TR 차트에 대한 결정 한계선을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Oneway( Y( :y ), X( :Drug ) );obj << ANOM with Transformed Ranks( 1, Show Decision Limits( 0 ) );Wait( 2 );scrobj = Report( obj )["Analysis of Means-Transformed Ranks"] << Get Scriptable Object;scrobj << Show Decision Limits( 1 );

```

#### Show Summary Report

**구문:** obj &lt;&lt; ANOM with Transformed Ranks( 1, Show Summary Report( state=0|1 ) ); scrobj &lt;&lt; Show Summary Report( state=0|1 )

**설명:** 그룹 평균 변환 순위 및 결정 한계가 포함된 보고서를 표시하거나 숨깁니다.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Oneway( Y( :y ), X( :Drug ) );obj << ANOM with Transformed Ranks( 1, Show Summary Report( 1 ) );Wait( 2 );scrobj = Report( obj )["Analysis of Means-Transformed Ranks"] << Get Scriptable Object;scrobj << Show Summary Report( 0 );

```

## Oneway > ANOM

### 항목 메시지

#### Point Options

**구문:** obj &lt;&lt; ANOM( 1, Point Options( "Show Needles"|"Show Connected Points"|"Show Only Points" ) ); scrobj &lt;&lt; Point Options( "Show Needles"|"Show Connected Points"|"Show Only Points" )

**설명:** 차트의 점 그리기 스타일을 지정합니다. 세로 바늘(수직선) 그리기, 점 연결 및 점만 표시 중에서 선택할 수 있습니다. 기본적으로 평균 위치에 그려진 가로선에 점을 연결하는 바늘로 차트를 그립니다.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Oneway( Y( :y ), X( :Drug ) );obj << ANOM( 1, Point Options( "Show Only Points" ) );Wait( 2 );scrobj = Report( obj )["Analysis of Means"] << Get Scriptable Object;scrobj << Point Options( "Show Connected Points" );

```

#### Set Alpha Level

**구문:** obj &lt;&lt; ANOM( 1, Set Alpha Level( alpha ) ); scrobj &lt;&lt; Set Alpha Level( alpha )

**설명:** 결정 한계 계산에 사용되는 유의 수준을 변경합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = Oneway( Y( :y ), X( :Drug ) );obj << ANOM( 1, Set Alpha Level( 0.1 ) );Wait( 2 );scrobj = Report( obj )["Analysis of Means"] << Get Scriptable Object;scrobj << Set Alpha Level( 0.05 );

```

#### Show Center Line

**구문:** obj &lt;&lt; ANOM( 1, Show Center Line( state=0|1 ) ); scrobj &lt;&lt; Show Center Line( state=0|1 )

**설명:** ANOM 차트에 중심선(전체 평균)을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Oneway( Y( :y ), X( :Drug ) );obj << ANOM( 1, Show Center Line( 0 ) );Wait( 2 );scrobj = Report( obj )["Analysis of Means"] << Get Scriptable Object;scrobj << Show Center Line( 1 );

```

#### Show Decision Limit Shading

**구문:** obj &lt;&lt; ANOM( 1, Show Decision Limit Shading( state=0|1 ) ); scrobj &lt;&lt; Show Decision Limit Shading( state=0|1 )

**설명:** ANOM 차트에 대한 결정 한계 음영을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Oneway( Y( :y ), X( :Drug ) );obj << ANOM( 1, Show Decision Limit Shading( 0 ) );Wait( 2 );scrobj = Report( obj )["Analysis of Means"] << Get Scriptable Object;scrobj << Show Decision Limit Shading( 1 );

```

#### Show Decision Limits

**구문:** obj &lt;&lt; ANOM( 1, Show Decision Limits( state=0|1 ) ); scrobj &lt;&lt; Show Decision Limits( state=0|1 )

**설명:** ANOM 차트에 대한 결정 한계선을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Oneway( Y( :y ), X( :Drug ) );obj << ANOM( 1, Show Decision Limits( 0 ) );Wait( 2 );scrobj = Report( obj )["Analysis of Means"] << Get Scriptable Object;scrobj << Show Decision Limits( 1 );

```

#### Show Summary Report

**구문:** obj &lt;&lt; ANOM( 1, Show Summary Report( state=0|1 ) ); scrobj &lt;&lt; Show Summary Report( state=0|1 )

**설명:** 그룹 평균 및 결정 한계가 포함된 보고서를 표시하거나 숨깁니다.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Oneway( Y( :y ), X( :Drug ) );obj << ANOM( 1, Show Summary Report( 1 ) );Wait( 2 );scrobj = Report( obj )["Analysis of Means"] << Get Scriptable Object;scrobj << Show Summary Report( 0 );

```

## Oneway > Oneway Equivalence Tests

### 항목 메시지

#### Forest Plot

**구문:** obj &lt;&lt; Equivalence Tests( ..., Forest Plot( state=0|1 ) ); scobj &lt;&lt; Forest Plot( state=0|1 )

**설명:** 동등성 검정 포레스트 그림을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Equivalence Tests( 4, 0.05, "Pooled Variance", "Equivalence", Forest Plot( 1 ) );Wait( 2 );scobj = (Report( obj )["Equivalence Tests with Pooled Variance"] << Get Scriptable Object);scobj << Forest Plot( 0 );

```

#### Pairwise Comparisons

**구문:** obj &lt;&lt; Equivalence Tests( ..., Equivalence Tests Pairwise Comparisons( state=0|1 ) ); scobj &lt;&lt; Equivalence Tests Pairwise Comparisons( state=0|1 )

**설명:** 모든 쌍별 비교에 대한 동등성 검정 쌍별 비교 보고서를 표시하거나 숨깁니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Equivalence Tests(	4,	0.05,	"Pooled Variance",	"Equivalence",	Equivalence Tests Pairwise Comparisons( 1 ));Wait( 2 );scobj = (Report( obj )["Equivalence Tests with Pooled Variance"] << Get Scriptable Object);scobj << Pairwise Comparisons( 0 );

```

#### Remove

**구문:** scobj &lt;&lt; Remove

**설명:** 동등성 검정 보고서를 제거합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Equivalence Tests(	4,	0.05,	"Pooled Variance",	"Equivalence",	Equivalence Tests Pairwise Comparisons( 1 ));Wait( 1 );scobj = (Report( obj )["Equivalence Tests with Pooled Variance"] << Get Scriptable Object);Wait( 1 );scobj << Remove;

```

#### Scatterplot

**구문:** obj &lt;&lt; Equivalence Tests( ..., Scatterplot( state=0|1 ) ); scobj &lt;&lt; Scatterplot( state=0|1 )

**설명:** 동등성 검정 산점도를 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Equivalence Tests( 4, 0.05, "Pooled Variance", "Equivalence", Scatterplot( 1 ) );Wait( 2 );scobj = (Report( obj )["Equivalence Tests with Pooled Variance"] << Get Scriptable Object);scobj << Scatterplot( 0 );

```

#### Test Report

**구문:** obj &lt;&lt; Equivalence Tests( ..., Test Report( state=0|1 ) ); scobj &lt;&lt; Test Report( state=0|1 )

**설명:** 평균이나 표준편차에 대한 동등성 검정, 우월성 검정 또는 비열등성 검정을 요약하는 보고서를 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Equivalence Tests( 4, 0.05, "Pooled Variance", "Equivalence", Test Report( 1 ) );Wait( 2 );scobj = (Report( obj )["Equivalence Tests with Pooled Variance"] << Get Scriptable Object);scobj << Test Report( 0 );

```

## Oneway > Oneway Means Comparisons

### 항목 메시지

#### Confidence Quantile

**구문:** obj &lt;&lt; Each Pair( 1, Confidence Quantile( state=0|1 ) ); obj &lt;&lt; All Pairs( 1, Confidence Quantile( state=0|1 ) ); obj &lt;&lt; With Best( 1, Confidence Quantile( state=0|1 ) ); obj &lt;&lt; With Control( 1, Confidence Quantile( state=0|1 ) ); obj &lt;&lt; Each Pair Stepwise( 1, Confidence Quantile( state=0|1 ) )

**설명:** 평균 비교에 사용되는 임계값 및 유의 수준을 표시하거나 숨깁니다. 



Each Pair는 Student&apos;s t와 동등합니다. All Pairs는 Tukey HSD와 동등합니다. With Best는 Hsu MCB와 동등합니다. With Control은 Dunnett&apos;s와 동등합니다. Each Pair Stepwise는 Newman-Keuls와 동등합니다.

 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Oneway( Y( :Height ), X( :Age ) );obj << Each Pair( 1, Confidence Quantile( 1 ) );

```

#### Connecting Letters Report

**구문:** obj &lt;&lt; Each Pair( 1, Connecting Letters Report( state=0|1 ) ); obj &lt;&lt; All Pairs( 1, Connecting Letters Report( state=0|1 ) ); obj &lt;&lt; Each Pair Stepwise( 1, Connecting Letters Report( state=0|1 ) )

**설명:** 기존의 문자로 코딩된 보고서를 표시하거나 숨깁니다. 이 보고서에서 문자를 공유하지 않는 평균에는 유의차가 있습니다. 



Each Pair는 Student&apos;s t와 동등합니다. All Pairs는 Tukey HSD와 동등합니다. With Best는 Hsu MCB와 동등합니다. With Control은 Dunnett&apos;s와 동등합니다. Each Pair Stepwise는 Newman-Keuls와 동등합니다.

 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Oneway( Y( :Height ), X( :Age ) );obj << Each Pair( 1, Connecting Letters Report( 1 ) );

```

#### Detailed Comparisons Report

**구문:** obj &lt;&lt; Each Pair( 1, Detailed Comparisons Report( state=0|1 ) )

**설명:** 각 비교에 대한 상세 보고서를 표시하거나 숨깁니다. 각 섹션에서는 수준 간 차이, 표준 오차와 신뢰 구간, t 비, p 값 및 자유도를 보여 줍니다. 



Each Pair는 Student&apos;s t와 동등합니다. All Pairs는 Tukey HSD와 동등합니다. With Best는 Hsu MCB와 동등합니다. With Control은 Dunnett&apos;s와 동등합니다. Each Pair Stepwise는 Newman-Keuls와 동등합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Oneway( Y( :Height ), X( :Age ) );obj << Each Pair( 1, Detailed Comparisons Report( 1 ) );

```

#### Difference Matrix

**구문:** obj &lt;&lt; Each Pair( 1, Difference Matrix( state=0|1 ) ); obj &lt;&lt; All Pairs( 1, Difference Matrix( state=0|1 ) ); obj &lt;&lt; With Best( 1, Difference Matrix( state=0|1 ) ); obj &lt;&lt; With Control( 1, Difference Matrix( state=0|1 ) ); obj &lt;&lt; Each Pair Stepwise( 1, Difference Matrix( state=0|1 ) )

**설명:** 모든 평균 차이가 포함된 테이블을 표시하거나 숨깁니다. 



Each Pair는 Student&apos;s t와 동등합니다. All Pairs는 Tukey HSD와 동등합니다. With Best는 Hsu MCB와 동등합니다. With Control은 Dunnett&apos;s와 동등합니다. Each Pair Stepwise는 Newman-Keuls와 동등합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Oneway( Y( :Height ), X( :Age ) );obj << Each Pair( 1, Difference Matrix( 1 ) );

```

#### Dunnett's Lower

**구문:** obj &lt;&lt; Dunnett&apos;s Lower( state=0|1 )

**설명:** 평균이 대조군 평균보다 작은지 여부를 검정하는 Dunnett 하한 한쪽 꼬리 t-검정을 표시하거나 숨깁니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << With Control( 1, {15}, Dunnett's Lower( 1 ) );

```

#### Dunnett's Upper

**구문:** obj &lt;&lt; Dunnett&apos;s Upper( state=0|1 )

**설명:** 평균이 대조군 평균보다 큰지 여부를 검정하는 Dunnett 상한 한쪽 꼬리 t-검정을 표시하거나 숨깁니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << With Control( 1, {15}, Dunnett's Upper( 1 ) );

```

#### LSD Threshold Matrix

**구문:** obj &lt;&lt; Each Pair( 1, LSD Threshold Matrix( state=0|1 ) ); obj &lt;&lt; All Pairs( 1, LSD Threshold Matrix( state=0|1 ) ); obj &lt;&lt; With Best( 1, LSD Threshold Matrix( state=0|1 ) ); obj &lt;&lt; With Control( 1, LSD Threshold Matrix( state=0|1 ) )

**설명:** 평균의 쌍별 차이에서 이러한 평균에 대한 최소 유의차를 뺀 행렬을 표시하거나 숨깁니다. 양수 값은 유의차가 있는 평균의 쌍을 나타냅니다. 



Each Pair는 Student&apos;s t와 동등합니다. All Pairs는 Tukey HSD와 동등합니다. With Best는 Hsu MCB와 동등합니다. With Control은 Dunnett&apos;s와 동등합니다. Each Pair Stepwise는 Newman-Keuls와 동등합니다.

 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Oneway( Y( :Height ), X( :Age ) );obj << Each Pair( 1, LSD Threshold Matrix( 1 ) );

```

#### Ordered Differences Report

**구문:** obj &lt;&lt; Each Pair( 1, Ordered Differences Report( state=0|1 ) ); obj &lt;&lt; All Pairs( 1, Ordered Differences Report( state=0|1 ) )

**설명:** 모든 쌍의 양수 쪽 차이, 차이의 표준 오차, 신뢰 구간 및 p 값과 함께 신뢰 구간이 중첩 표시된 차이 크기 그림을 표시하거나 숨깁니다. 



Each Pair는 Student&apos;s t와 동등합니다. All Pairs는 Tukey HSD와 동등합니다. With Best는 Hsu MCB와 동등합니다. With Control은 Dunnett&apos;s와 동등합니다. Each Pair Stepwise는 Newman-Keuls와 동등합니다.

 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Oneway( Y( :Height ), X( :Age ) );obj << Each Pair( 1, Ordered Differences Report( 1 ) );

```

#### Ordered Ratio Report

**구문:** obj &lt;&lt; Each Pair( 1, Ordered Differences Report( state=0|1 ) ); obj &lt;&lt; Ratio Comparison for Pooled Variance( 1, Ordered Differences Report( state=0|1 ) )

**설명:** 모든 쌍의 양수 쪽 차이, 차이의 표준 오차, 신뢰 구간 및 p 값과 함께 신뢰 구간이 중첩 표시된 차이 크기 그림을 표시하거나 숨깁니다. 



Each Pair는 Student&apos;s t와 동등합니다. All Pairs는 Tukey HSD와 동등합니다. With Best는 Hsu MCB와 동등합니다. With Control은 Dunnett&apos;s와 동등합니다. Each Pair Stepwise는 Newman-Keuls와 동등합니다.

 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Oneway( Y( :Height ), X( :Age ) );obj << Ratio Comparison for Pooled Variance( 1, Ordered Differences Report( 1 ) );

```

#### Ratio Matrix

**구문:** obj &lt;&lt; Ratios with Pooled Variance( 1, Ratio Matrix( state=0|1 ) ); obj &lt;&lt; Ratio Comparison for Pooled Variance( 1, Ratio Matrix( state=0|1 ) )

**설명:** 모든 평균 차이가 포함된 테이블을 표시하거나 숨깁니다. 



Each Pair는 Student&apos;s t와 동등합니다. All Pairs는 Tukey HSD와 동등합니다. With Best는 Hsu MCB와 동등합니다. With Control은 Dunnett&apos;s와 동등합니다. Each Pair Stepwise는 Newman-Keuls와 동등합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Oneway( Y( :Height ), X( :Age ) );obj << Ratios with Pooled Variance( 1, Ratio Matrix( 1 ) );

```

## Oneway > Post Hoc Analysis for Friedman's Test

### 항목 메시지

#### Nemenyi Test

**구문:** obj &lt;&lt; Nemenyi Test( state=0|1 )

**설명:** Nemenyi 검정 보고서를 표시하거나 숨깁니다. Nemenyi 검정은 반복되지 않는 블록 데이터의 평균 순위합 다중 비교를 위한 쌍별 사후 검정입니다. 이 검정은 일반적으로 유의한 Friedman 검정 결과를 얻은 후에 수행됩니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Snapdragon.jmp" );obj = dt << Oneway( Y( :Y ), X( :Soil ), Block( :Block ) );obj << Friedman Rank Test( 1, Nemenyi Test( 1 ) );

```

## Oneway

### 공유 항목 메시지

#### Action

**구문:** obj &lt;&lt; Action

**설명:** 실행할 표현식을 삽입하기 위한 플랫폼 내의 다목적 트랩도어. 임시로 표시 상자 및 데이터 테이블 유형을 플랫폼에 설정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

#### Apply Preset

**구문:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**설명:** 이전에 생성된 사전 설정을 개체에 적용하여 옵션과 사용자 정의를 저장된 설정과 일치하도록 업데이트합니다.

**JMP추가된 버전:** 18

**이름으로 검색**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

**익명 사전 설정**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );Wait( 1 );obj2 << Apply Preset( preset );

```

**폴더 내에서 검색**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

#### Automatic Recalc

**구문:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**설명:** 제외 항목 및 데이터 변경이 있을 때 분석을 자동으로 다시 실행합니다. 자동 재계산 옵션이 설정된 경우 재계산하기 전에 제외 항목 및 데이터 변경이 적용되게 하려면 Wait(0) 명령을 사용하는 것이 좋습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Automatic Recalc( 1 );dt << Select Rows( 5 ) << Exclude( 1 );

```

#### Broadcast

**구문:** obj &lt;&lt; Broadcast(message)

**설명:** 플랫폼에 메시지를 브로드캐스트합니다. 개별 개체의 반환 결과가 테이블인 경우 가능하면 테이블이 연결되고 최종 형식은 테이블 상자의 &apos;결합 테이블 저장&apos; 옵션 결과 또는 소스 열을 사용한 &apos;연결&apos; 옵션 결과와 동일합니다. 그 외의 경우에는 결과가 목록에 저장되어 반환됩니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );objs = Control Chart Builder( Variables( Subgroup( :DAY ), Y( :DIAMETER ) ), By( :OPERATOR ) );objs[1] << Broadcast( Save Summaries );

```

#### Column Switcher

**구문:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**설명:** 플랫폼 변수를 변경하기 위한 제어판을 추가합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher( :marital status, {:sex, :country, :marital status} );

```

#### Copy ByGroup Script

**구문:** obj &lt;&lt; Copy ByGroup Script

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 클립보드에 넣습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Oneway( Y( :Height ), X( :Age ), By( :_bycol ), Group Options( Return Group( 1 ) ) );obj[1] << Copy ByGroup Script;

```

#### Copy Script

**구문:** obj &lt;&lt; Copy Script

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 클립보드에 넣습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Copy Script;

```

#### Data Table Window

**구문:** obj &lt;&lt; Data Table Window

**설명:** 이 분석에 대한 데이터 테이블 창을 앞으로 가져옵니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Data Table Window;

```

#### Get By Levels

**구문:** obj &lt;&lt; Get By Levels

**설명:** 기준 그룹 열을 값에 매핑하는 연관 배열을 반환합니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv << Get By Levels;

```

#### Get ByGroup Script

**구문:** obj &lt;&lt; Get ByGroup Script

**설명:** 이 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Oneway( Y( :Height ), X( :Age ), By( :_bycol ), Group Options( Return Group( 1 ) ) );t = obj[1] << Get ByGroup Script;Show( t );

```

#### Get Container

**구문:** obj &lt;&lt; Get Container

**설명:** 개체의 콘텐츠를 담고 있는 컨테이너 상자에 대한 참조를 반환합니다.

**일반**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**필터 사용 플랫폼**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

#### Get Data Table

**구문:** obj &lt;&lt; Get Data Table

**설명:** 데이터 테이블에 대한 참조를 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );t = obj << Get Datatable;Show( N Rows( t ) );

```

#### Get Group Platform

**구문:** obj &lt;&lt; Get Group Platform

**설명:** 이 플랫폼이 그룹의 일부인 경우 그룹 플랫폼 개체를 반환하고, 그렇지 않은 경우 Empty()를 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );group = biv[1] << Get Group Platform;Wait( 1 );group << Layout( "Arrange in Tabs" );

```

#### Get Script

**구문:** obj &lt;&lt; Get Script

**설명:** 이 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );t = obj << Get Script;Show( t );

```

#### Get Script With Data Table

**구문:** obj &lt;&lt; Get Script With Data Table

**설명:** 이 데이터 테이블을 참조하는 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );t = obj << Get Script With Data Table;Show( t );

```

#### Get Timing

**구문:** obj &lt;&lt; Get Timing

**설명:** 플랫폼 시작 시간을 설정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );t = obj << Get Timing;Show( t );

```

#### Get Web Support

**구문:** obj &lt;&lt; Get Web Support

**설명:** 표시 개체에 대한 대화식 HTML 지원 수준을 나타내는 숫자를 반환합니다. 1은 일부 또는 모든 요소가 지원됨을 의미하고 0은 지원되지 않음을 의미합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );s = obj << Get Web Support();Show( s );

```

#### Get Where Expr

**구문:** obj &lt;&lt; Get Where Expr

**설명:** By() 또는 Where()를 사용하여 플랫폼이 시작된 경우 데이터 부분집합에 대한 Where 표현식을 반환하고, 그렇지 않은 경우 Empty()를 반환합니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

#### Ignore Platform Preferences

**구문:** Ignore Platform Preferences( state=0|1 )

**설명:** 플랫폼의 현재 환경 설정을 무시합니다. 생성 후 플랫폼으로 전송될 때 메시지가 무시됩니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Ignore Platform Preferences( 1 ),	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

#### Local Data Filter

**구문:** obj &lt;&lt; Local Data Filter

**설명:** 데이터를 특정 그룹 또는 범위로 필터링합니다. 이 플랫폼에서만 사용 가능합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));

```

#### New Preset

**구문:** obj = New Preset()

**설명:** 개체에 적용된 옵션과 사용자 정의를 나타내는 익명 사전 설정을 생성합니다. 이 개체를 Apply Preset에 전달하여 같은 유형의 다른 개체에 설정을 복사할 수 있습니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();

```

#### Paste Local Data Filter

**구문:** obj &lt;&lt; Paste Local Data Filter

**설명:** 클립보드의 로컬 데이터 필터를 현재 보고서에 적용합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );filter = dist << Local Data Filter( Add Filter( columns( :Region ), Where( :Region == "MW" ) ) );filter << Copy Local Data Filter;dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );Wait( 1 );dist2 << Paste Local Data Filter;

```

#### Redo Analysis

**구문:** obj &lt;&lt; Redo Analysis

**설명:** 동일한 분석을 새 창에서 다시 실행합니다. 데이터가 변경된 경우에는 분석결과가 달라집니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Redo Analysis;

```

#### Relaunch Analysis

**구문:** obj &lt;&lt; Relaunch Analysis

**설명:** 플랫폼 시작 창을 열고 보고서를 생성하는 데 사용된 설정을 불러옵니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Relaunch Analysis;

```

#### Remove Column Switcher

**구문:** obj &lt;&lt; Remove Column Switcher

**설명:** 플랫폼에 추가된 가장 최근 열 전환기를 제거합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher( :marital status, {:sex, :country, :marital status} );Wait( 2 );obj << Remove Column Switcher;

```

#### Remove Local Data Filter

**구문:** obj &lt;&lt; Remove Local Data Filter

**설명:** 로컬 데이터 필터가 생성된 경우 로컬 데이터 필터를 제거하고 데이터 테이블의 모든 데이터를 직접 사용하도록 플랫폼을 복원합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dist = dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));Wait( 2 );dist << remove local data filter;

```

#### Report

**구문:** obj &lt;&lt; Report; Report( obj )

**설명:** 보고서 개체에 대한 참조를 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

#### Report View

**구문:** obj &lt;&lt; Report View( "전체"|"요약" )

**설명:** 보고서 보기는 플랫폼 보고서에 표시되는 상세 수준을 결정합니다. Full은 모든 상세 정보를 표시하고 Summary는 플랫폼에 따라 선택된 콘텐츠만 표시합니다. 사용자 정의된 동작의 경우 표시 상자는 <<Set Summary Behavior 메시지를 지원합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**구문:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 데이터 테이블에 테이블 특성으로 저장합니다. 스크립트 이름을 지정할 수 있습니다. Append Suffix 옵션은 스크립트 이름에 숫자 접미사를 추가하여 이름이 같은 기존 스크립트와 구분합니다. Prompt 옵션은 사용자에게 스크립트 이름을 지정하라는 메시지를 표시합니다. Replace 옵션은 이름이 같은 기존 스크립트를 바꿉니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Oneway( Y( :Height ), X( :Age ), By( :_bycol ), Group Options( Return Group( 1 ) ) );obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**구문:** obj &lt;&lt; Save ByGroup Script to Journal

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 이 스크립트가 포함된 저널에 버튼을 추가합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Oneway( Y( :Height ), X( :Age ), By( :_bycol ), Group Options( Return Group( 1 ) ) );obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**구문:** obj &lt;&lt; Save ByGroup Script to Script Window

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 현재 스크립트 텍스트 창에 추가합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Oneway( Y( :Height ), X( :Age ), By( :_bycol ), Group Options( Return Group( 1 ) ) );obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**구문:** obj &lt;&lt; Save Script for All Objects

**설명:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**구문:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**설명:** 모든 보고서 개체에 대한 스크립트를 현재 데이터 테이블에 저장합니다. 이 옵션은 창에 여러 보고서가 있을 때 유용합니다. 스크립트 이름을 따옴표로 묶어 지정하는 경우 외에는 첫 번째 플랫폼 이름을 따라 스크립트 이름이 지정됩니다.

**예제 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Oneway( Y( :Height ), X( :Age ), By( :_bycol ), Group Options( Return Group( 1 ) ) );obj[1] << Save Script for All Objects To Data Table;

```

**예제 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Oneway( Y( :Height ), X( :Age ), By( :_bycol ), Group Options( Return Group( 1 ) ) );obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**구문:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 데이터 테이블에 테이블 특성으로 저장합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**구문:** obj &lt;&lt; Save Script to Journal

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 이 스크립트가 포함된 저널에 버튼을 추가합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Save Script to Journal;

```

#### Save Script to Report

**구문:** obj &lt;&lt; Save Script to Report

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 보고서 자체에 표시합니다. 수행된 작업에 대한 인쇄된 기록을 유지하려는 경우에 유용합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Save Script to Report;

```

#### Save Script to Script Window

**구문:** obj &lt;&lt; Save Script to Script Window

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 현재 스크립트 텍스트 창에 추가합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Save Script to Script Window;

```

#### SendToByGroup

**구문:** SendToByGroup( {":Column == level"}, command );

**설명:** 기준 그룹의 각 수준으로 플랫폼 명령을 보내거나 사용자 정의 명령을 표시합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	By( :Sex ),	SendToByGroup( {:sex == "F"}, Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) ) ),	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) ));

```

#### SendToEmbeddedScriptable

**구문:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**설명:** 포함된 스크립트 가능 개체로 보내기는 포함된 스크립트 가능 개체의 설정을 복원합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );dt << Life Distribution(	Y( :Time ),	Censor( :Censor ),	Censor Code( 1 ),	<<Fit Weibull,	SendToEmbeddedScriptable(		Dispatch( {"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}		)	));

```

#### SendToReport

**구문:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**설명:** Send To Report는 보고서 모양을 사용자 정의하기 위해 Dispatch 명령과 함께 사용됩니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Nominal Distribution( Column( :age ) ),	Continuous Distribution( Column( :weight ) ),	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) ));

```

#### Sync to Data Table Changes

**구문:** obj &lt;&lt; Sync to Data Table Changes

**설명:** 제외 항목 및 데이터 변경 사항과 동기화합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );Wait( 1 );dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );dist << Sync To Data Table Changes;

```

#### Title

**구문:** obj &lt;&lt; Title( "new title" )

**설명:** 플랫폼의 제목을 설정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Title( "My Platform" );

```

#### Top Report

**구문:** obj &lt;&lt; Top Report

**설명:** 보고서의 루트 노드에 대한 참조를 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

#### Transform Column

**구문:** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**설명:** 개체의 로컬 컨텍스트(대개 플랫폼)에서 변환 열을 생성합니다. 변환 열은 플랫폼의 수명 동안에만 활성화됩니다.

**JMP추가된 버전:** 16

<b>실행기 항목: 예</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),	Continuous Distribution( Column( :"age^2"n ) ));

```

#### View Web XML

**구문:** obj &lt;&lt; View Web XML

**설명:** 대화식 HTML 보고서를 생성하는 데 사용된 XML 코드를 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );xml = obj << View Web XML;

```

#### Window View

**구문:** obj = Oneway(...Window View( "Visible"|"Invisible"|"Private" )...) &lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 보고서에 대해 생성할 창 유형을 설정합니다. 기본적으로 Visible 보고서 창이 생성됩니다. Invisible 창은 화면에 나타나지 않지만 Window()와 같은 함수로 검색할 수 있습니다. Private 창은 대부분의 창 메시지에 응답하지만 검색할 수 없으며 보고서 개체를 통해 처리해야 합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

### 연결된 생성자

#### Oneway

**구문:** Oneway( Y( columns ), X( columns ) )

**설명:** 일련의 범주형 그룹에서 연속형 반응을 모델링합니다. 분석 방법으로는 ANOVA, 평균 비교, 평균 분석 및 분위수 그림이 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );

```

### 열

#### Block

**구문:** obj &lt;&lt; Block( column )

**설명:** 블록 변수를 지정합니다. 이 열을 지정하면 반응 변수의 값이 블록 변수를 기준으로 중심화됩니다.

```jsl

dt = Open( "$SAMPLE_DATA/Snapdragon.jmp" );obj = dt << Oneway( Y( :Y ), X( :Soil ), Block( :Block ) );obj << Friedman Rank Test( 1 );

```

#### By

**구문:** obj &lt;&lt; By( column(s) )

**설명:** 지정된 열의 각 수준에 대해 별도의 분석을 수행합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Oneway( Y( :Height ), X( :Age ), By( :_bycol ), Group Options( Return Group( 1 ) ) );

```

#### Freq

**구문:** obj &lt;&lt; Freq( column )

**설명:** 분석을 위해 각 행에 빈도를 할당하는 값이 들어 있는 열을 지정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_freqcol", Numeric, Continuous, Set Each Value( Random Integer( 1, 5 ) ) );obj = dt << Oneway( Y( :Height ), X( :Age ), Freq( :_freqcol ) );

```

#### Grouping

**구문:** obj &lt;&lt; Grouping( column(s) )

**설명:** 예측 변수를 지정합니다. 이러한 변수의 모델링 유형은 순서형 또는 명목형이어야 합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );

```

#### Response

**구문:** obj &lt;&lt; Response( column(s) )

**설명:** 분석할 하나 이상의 연속형 반응 변수를 지정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );

```

#### Weight

**구문:** obj &lt;&lt; Weight( column )

**설명:** 분석을 위해 각 행에 가중치를 할당하는 값이 들어 있는 열을 지정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_weightcol", Numeric, Continuous, Set Each Value( Random Beta( 1, 1 ) ) );obj = dt << Oneway( Y( :Height ), X( :Age ), Weight( :_weightcol ) );

```

#### X

**구문:** obj &lt;&lt; X( column(s) )

**설명:** 예측 변수를 지정합니다. 이러한 변수의 모델링 유형은 순서형 또는 명목형이어야 합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );

```

#### Y

**구문:** obj &lt;&lt; Y( column(s) )

**설명:** 분석할 하나 이상의 연속형 반응 변수를 지정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );

```

### 항목 메시지

#### ANOM

**구문:** obj &lt;&lt; ANOM( state=0|1, &lt;chart options&gt; )

**설명:** 각 그룹 평균을 전체 평균과 비교합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Oneway( Y( :y ), X( :Drug ) );obj << ANOM( 1 );

```

#### ANOM for Ranges

**구문:** obj &lt;&lt; ANOM for Ranges( state=0|1, &lt;chart options&gt; )

**설명:** 그룹 범위를 전체 평균 범위와 비교하여 이분산을 검정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Oneway( Y( :y ), X( :Drug ) );obj << ANOM for Ranges( 1 );

```

#### ANOM for Variances

**구문:** obj &lt;&lt; ANOM for Variances( state=0|1, &lt;chart options&gt; )

**설명:** 그룹 표준편차를 평균 제곱 오차의 제곱근과 비교하여 이분산성을 검정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Oneway( Y( :y ), X( :Drug ) );obj << ANOM for Variances( 1 );

```

#### ANOM for Variances with Levene(ADM)

**구문:** obj &lt;&lt; "ANOM for Variances with Levene(ADM)"n( state=0|1, &lt;chart options&gt; )

**설명:** ADM(중앙값 절대 편차)의 그룹 평균을 전체 평균 ADM과 비교하여 이분산을 검정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Oneway( Y( :y ), X( :Drug ) );obj << "ANOM for Variances with Levene(ADM)"n( 1 );

```

#### ANOM with Transformed Ranks

**구문:** obj &lt;&lt; ANOM with Transformed Ranks( state=0|1, &lt;chart options&gt; )

**설명:** 각 그룹 평균의 변환된 순위를 전체 평균의 변환된 순위와 비교합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Oneway( Y( :y ), X( :Drug ) );obj << ANOM with Transformed Ranks( 1 );

```

#### All Graphs

**구문:** obj &lt;&lt; All Graphs( state=0|1 )

**설명:** 일원 분석 그림을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );Wait( 2 );obj << All Graphs( 0 );

```

#### All Pairs

**구문:** obj &lt;&lt; All Pairs( state=0|1 ); obj &lt;&lt; Tukey HSD( state=0|1 ); obj &lt;&lt; "All Pairs, Tukey HSD"n( state=0|1 )

**설명:** Tukey HSD(Honestly Significant Difference)를 계산합니다. 이 검정은 전체 오차율을 보호합니다. 추가 표시 옵션은 일원 평균 비교 메시지를 참조하십시오.

**예제 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << All Pairs( 1 );

```

**예제 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Tukey HSD( 1 );

```

#### Box Plots

**구문:** obj &lt;&lt; Box Plots( state=0|1 )

**설명:** 각 그룹에 대한 이상치 상자 그림을 표시하거나 숨깁니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Box Plots( 1 );

```

#### CDF Plot

**구문:** obj &lt;&lt; CDF Plot( state=0|1 )

**설명:** 일원 분석 보고서에서 모든 그룹에 대한 누적 분포 함수를 표시하거나 숨깁니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << CDF Plot( 1 );

```

#### Cauchy Fit

**구문:** obj &lt;&lt; Cauchy Fit( state=0|1 )

**설명:** 오차가 Cauchy 분포를 따른다고 가정합니다. Cauchy 적합은 극단 이상치를 처리할 수 있는 로버스트 방법입니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Cauchy Fit( 1 );

```

#### Compare Densities

**구문:** obj &lt;&lt; Compare Densities( state=0|1 )

**설명:** 각 그룹에 대한 확률 밀도 함수가 중첩된 그림을 표시하거나 숨깁니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Compare Densities( 1 );

```

#### Comparison Circles

**구문:** obj &lt;&lt; Comparison Circles( state=0|1 )

**설명:** 비교 원을 표시하거나 숨깁니다. 이 옵션은 다중 비교 보고서가 열려 있는 경우에만 사용할 수 있습니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << All Pairs( 1 );Wait( 2 );obj << Comparison Circles( 0 );

```

#### Composition of Densities

**구문:** obj &lt;&lt; Composition of Densities( state=0|1 )

**설명:** 각 그룹의 개수에 따라 가중치가 부여된 합산 밀도 그림을 표시하거나 숨깁니다. "밀도의 합성" 그림에는 X 변수의 범위에서 각 그룹이 총 밀도에 어떻게 기여하는지 보여 줍니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Composition of Densities( 1 );

```

#### Connect Means

**구문:** obj &lt;&lt; Connect Means( state=0|1 )

**설명:** 그룹 평균을 연결하는 직선을 표시하거나 숨깁니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Connect Means( 1 );

```

#### Dunn All Pairs for Joint Ranks

**구문:** obj &lt;&lt; Dunn All Pairs for Joint Ranks( state=0|1 )

**설명:** 결합 순위를 기준으로 전체 쌍을 비교하기 위한 Dunnett 검정을 표시하거나 숨깁니다. 이 검정은 Bonferroni 수정을 사용하지만 전체 오차율을 보호하지 않을 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Dunn All Pairs for Joint Ranks( 1 );

```

#### Dunn With Control for Joint Ranks

**구문:** obj &lt;&lt; Dunn With Control for Joint Ranks( state = 0|1, {control level} )

**설명:** 결합 순위를 기준으로 대조군과 비교하기 위한 Dunnett 검정을 표시하거나 숨깁니다. 이 검정은 Bonferroni 수정을 사용하지만 전체 오차율을 보호하지 않을 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Dunn With Control for Joint Ranks( 1, {12} );

```

#### Dunnett's

**구문:** obj &lt;&lt; With Control( state=0|1, {control ID} ); obj &lt;&lt; "Dunnett&apos;s"n( state=0|1, {control ID} ); obj &lt;&lt; "With Control, Dunnett&apos;s"n( state=0|1, {control ID} )

**설명:** Dunnett 검정을 계산합니다. 이 검정은 평균이 대조군의 평균과 다른지 여부를 검정합니다. 추가 표시 옵션은 일원 평균 비교 메시지를 참조하십시오.

**예제 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << With Control( 1, {15} );

```

**예제 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << "Dunnett's"n( 1, {15} );

```

#### Each Pair

**구문:** obj &lt;&lt; Each Pair( state=0|1 ); obj &lt;&lt; "Student&apos;s t"n( state=0|1 ); obj &lt;&lt; "Each Pair, Student&apos;s t"n( state=0|1 )

**설명:** 다중 검정에 대해 무조정 스튜던트 t-검정을 사용하여 각각의 쌍별 비교를 계산합니다. 추가 표시 옵션은 일원 평균 비교 메시지를 참조하십시오.

**예제 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Each Pair( 1 );

```

**예제 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << "Student's t"n( 1 );

```

#### Each Pair Stepwise

**구문:** obj &lt;&lt; Each Pair Stepwise( state=0|1 ); obj &lt;&lt; "Newman-Keuls"n( state=0|1 ); obj &lt;&lt; "Each Pair Stepwise, Newman-Keuls"n( state=0|1 )

**설명:** Newman-Keuls 검정을 계산합니다. 이 검정은 단계별 절차에서 스튜던트화 범위 검정을 사용하여 평균 간에 차이가 있는지 여부를 검정합니다. Student-Newman-Keuls 방법이라고도 하는 이 검정은 Tukey HSD 검정보다 덜 보수적이고 더 강력합니다. 추가 표시 옵션은 일원 평균 비교 메시지를 참조하십시오.

**JMP추가된 버전:** 14

**예제 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Each Pair Stepwise( 1 );

```

**예제 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << "Newman-Keuls"n( 1 );

```

#### Equivalence Tests

**구문:** obj &lt;&lt; Equivalence Tests( difference, &lt;alpha=.05&gt;, &lt;"Pooled Variance"|"Unequal Variances"&gt;, &lt;test type&gt; )

**설명:** 평균이 실제적으로 동등하다고 결정된 크기(차이) 이상으로 다르지 않은지를 검정합니다. 이는 일반 유의성 검정과 반대입니다. 유의 수준, 분산 가정 및 검정 유형은 선택적 인수입니다. 기본적으로 "합동 분산" 가정이 사용됩니다. 검정 유형 인수는 기본적으로 "동등성"이지만 우월성 또는 비열등성 검정을 지정하는 데 사용할 수도 있습니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Equivalence Tests( 4, 0.1, "Unequal Variances" );

```

#### Equivalence Tests of Std Dev

**구문:** obj &lt;&lt; Equivalence Tests of Std Dev( ratio, &lt;alpha=.05&gt;, &lt;test type&gt; )

**설명:** 표준편차가 실제적으로 동등하다고 결정된 비율 이상으로 다르지 않은지를 검정합니다. 이는 일반 유의성 검정과 반대입니다. 유의 수준과 검정 유형은 선택적 인수입니다. 검정 유형 인수는 기본적으로 "동등성"이지만 우월성 또는 비열등성 검정을 지정하는 데 사용할 수도 있습니다.

**JMP추가된 버전:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Equivalence Tests of Std Dev( 0.8, 0.05, "Equivalence" );

```

#### Friedman Rank Test

**구문:** obj &lt;&lt; Friedman Rank Test( state=0|1 )

**설명:** Friedman 순위 스코어에 기반한 검정을 표시하거나 숨깁니다. Friedman 순위 스코어는 블록 변수의 각 수준 내에서 데이터의 순위입니다. 이 검정의 모수 버전은 반복 측정 ANOVA입니다. 이 옵션은 플랫폼 시작 시 각 블록 내의 관측값 수가 동일한 블록 변수를 지정한 경우에만 사용할 수 있습니다.

**JMP추가된 버전:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Snapdragon.jmp" );obj = dt << Oneway( Y( :Y ), X( :Soil ), Block( :Block ) );obj << Friedman Rank Test( 1 );

```

#### Games-Howell

**구문:** obj &lt;&lt; "Games-Howell"n( state=0|1 );

**설명:** 모든 평균 쌍의 Games-Howell 다중 비교 보고서를 표시하거나 숨깁니다. 이 검정은 개별 그룹 분산이 동일하다고 가정할 수 없는 설정에서 적용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << "Games-Howell"n( 1 );

```

#### Grand Mean

**구문:** obj &lt;&lt; Grand Mean( state=0|1 )

**설명:** Y 변수의 전체 평균을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ), Grand Mean( 0 ) );Wait( 2 );obj << Grand Mean( 1 );

```

#### Histograms

**구문:** obj &lt;&lt; Histograms( state=0|1 )

**설명:** 원래 그림 오른쪽에 가로 배열 히스토그램을 표시하거나 숨깁니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Histograms( 1 );

```

#### Hsu MCB

**구문:** obj &lt;&lt; With Best( state=0|1 ); obj &lt;&lt; Hsu MCB( state=0|1 ); obj &lt;&lt; "With Best, Hsu MCB"n( state=0|1 )

**설명:** Hsu MCB(Multiple Comparison with Best) 검정을 계산합니다. 이 검정은 평균이 알 수 없는 최대값보다 작은지 여부를 검정합니다. 추가 표시 옵션은 일원 평균 비교 메시지를 참조하십시오.

**예제 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << With Best( 1 );

```

**예제 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Hsu MCB( 1 );

```

#### Jonckheere Terpstra Test

**구문:** obj &lt;&lt; Jonckheere Terpstra Test( state=0|1 )

**설명:** 클래스 간 정렬된 차이에 대한 비모수 검정인 Jonckheere-Terpstra 검정의 보고서를 표시하거나 숨깁니다. 여기에서는 반응 변수의 분포가 클래스 간에 차이가 없다는 귀무가설을 검정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.JMP" );obj = dt << Oneway( Y( :Height ), X( :age ) );obj << Jonckheere Terpstra Test( 1 );

```

#### Kolmogorov Smirnov Exact Test

**구문:** obj &lt;&lt; Kolmogorov Smirnov Exact Test( state=0|1 )

**설명:** 경험적 분포 함수를 기반으로 하는 Kolmogorov-Smirnov 정확 검정을 표시하거나 숨깁니다. 이 검정은 반응 분포가 그룹 간에 동일한지 여부를 판별합니다. 이 옵션은 X 변수의 수준이 정확히 두 개인 경우에만 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :sex ) );obj << Kolmogorov Smirnov Exact Test( 1 );

```

#### Kolmogorov Smirnov Test

**구문:** obj &lt;&lt; Kolmogorov Smirnov Test( state=0|1 )

**설명:** 경험적 분포 함수를 기반으로 반응 분포가 그룹 간에 동일한지 여부를 판별하는 검정을 표시하거나 숨깁니다. 이 옵션은 X 변수의 수준이 정확히 두 개인 경우에만 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :sex ) );obj << Kolmogorov Smirnov Test( 1 );

```

#### Legend

**구문:** obj &lt;&lt; Legend( state=0|1 )

**설명:** 정규 분위수, CDF(누적 분포 함수) 및 밀도 그림에 대한 범례를 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ), Plot Quantile by Actual( 1 ), Legend( 0 ) );Wait( 2 );obj << Legend( 1 );

```

#### Line of Fit

**구문:** obj &lt;&lt; Line of Fit( state=0|1 )

**설명:** 열려 있는 각 분위수 그림에서 X 변수의 각 수준에 대한 데이터에 적합된 참조선을 표시하거나 숨깁니다. 이 옵션은 분위수 그림이 열려 있는 경우에만 사용할 수 있습니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Plot Quantile by Actual( 1 );Wait( 2 );obj << Line of Fit( 0 );

```

#### Matching Column

**구문:** obj &lt;&lt; Matching Column( column )

**설명:** 지정된 매칭 변수를 기반으로 일원 분석 그림에서 매칭 적합선 및 해당 적합선을 표시하거나 숨깁니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Weight ), X( :Age, :sex ) );Wait( 2 );obj[1] << Matching Column( :sex );obj[2] << Matching Column( :Age );

```

#### Matching Dotted Lines

**구문:** obj &lt;&lt; Matching Dotted Lines( state=0|1 )

**설명:** 매칭 변수의 결측 수준을 통과하여 평균을 연결하는 점선을 표시하거나 숨깁니다. 결측 셀 평균 대신 사용되는 값은 이원 ANOVA 모형을 사용하여 구합니다. 이 옵션은 "매칭 열" 옵션을 선택하고 매칭 변수의 값이 X 변수의 수준에 대해 모두 결측인 경우에만 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );:sex[6 :: 8] = "";obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Matching Column( :sex );Wait( 2 );obj << Matching Dotted Lines( 1 );

```

#### Matching Lines

**구문:** obj &lt;&lt; Matching Lines( state=0|1 )

**설명:** 매칭 변수의 각 수준 평균을 연결하는 선을 표시하거나 숨깁니다. 이 옵션은 "매칭 열" 옵션을 선택한 경우에만 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Dogs.jmp" );obj = dt << Oneway( Y( :LogHist0 ), X( :drug ) );obj << Matching Column( :LogHist1 );Wait( 2 );obj << Matching Lines( 0 );

```

#### Mean CI Lines

**구문:** obj &lt;&lt; Mean CI Lines( state=0|1 )

**설명:** 각 그룹에 대한 상위 및 하위 95% 신뢰 수준에 선을 표시하거나 숨깁니다. 95% 신뢰 수준은 합동 표준편차를 사용하여 계산됩니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Mean CI Lines( 1 );

```

#### Mean Diamonds

**구문:** obj &lt;&lt; Mean Diamonds( state=0|1 )

**설명:** 일원 분석 그림에 평균 다이아몬드를 표시하거나 숨깁니다. 각 평균 다이아몬드는 해당 그룹 평균의 95% 신뢰 구간에 걸쳐 있으며 평균 위치에 가로선이 있습니다. 95% 신뢰 구간은 합동 표준편차를 사용하여 계산됩니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Mean Diamonds( 1 );

```

#### Mean Error Bars

**구문:** obj &lt;&lt; Mean Error Bars( state=0|1 )

**설명:** 평균으로부터 1 표준 오차 위와 아래에 해당하는 오차 막대와 함께 각 그룹의 평균을 표시하거나 숨깁니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Mean Error Bars( 1 );

```

#### Mean Lines

**구문:** obj &lt;&lt; Mean Lines( state=0|1 )

**설명:** 각 그룹의 평균에 선을 표시하거나 숨깁니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Mean Lines( 1 );

```

#### Mean of Means

**구문:** obj &lt;&lt; Mean of Means( state=0|1 )

**설명:** 그룹 평균의 평균을 표시하거나 숨깁니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Mean of Means( 1 );

```

#### Means and Std Dev

**구문:** obj &lt;&lt; Means and Std Dev( state=0|1 )

**설명:** 일원 분석 그림에 평균 선, 오차 막대 및 표준편차 선을 표시하거나 숨기고 요약 통계량 테이블을 표시하거나 숨깁니다. 평균의 표준 오차에는 개별 그룹 표준편차가 사용됩니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Means and Std Dev( 1 );

```

#### Means/Anova

**구문:** obj &lt;&lt; Means( state=0|1 ); obj &lt;&lt; "Means/Anova"n( state=0|1)

**설명:** 일원 분석 그림에 평균 다이아몬드를 표시하거나 숨기고 ANOVA 보고서를 표시하거나 숨깁니다. 이 옵션은 X 변수의 수준이 세 개 이상인 경우에만 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Means( 1 );

```

#### Means/Anova/Pooled t

**구문:** obj &lt;&lt; Means( state=0|1 ); obj &lt;&lt; "Means/Anova/Pooled t"n( state=0|1)

**설명:** 일원 분석 그림에 평균 다이아몬드를 표시하거나 숨기고 ANOVA 보고서를 표시하거나 숨깁니다. ANOVA 보고서에는 두 그룹의 분산이 같다고 가정하는 합동 t-검정 보고서가 포함됩니다. 이 옵션은 X 변수의 수준이 정확히 두 개인 경우에만 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :sex ) );obj << Means( 1 );

```

#### Median Exact Test

**구문:** obj &lt;&lt; Median Exact Test( state=0|1 )

**설명:** 중앙값 스코어 분석을 표시하거나 숨깁니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :sex ) );obj << Median Exact Test( 1 );

```

#### Median Test

**구문:** obj &lt;&lt; Median Test( state=0|1 )

**설명:** 중앙값 순위 스코어에 기반한 검정을 표시하거나 숨깁니다. 중앙값 순위 스코어는 순위가 중앙값 순위보다 높은지 아니면 낮은지에 따라 1 또는 0입니다. 중앙값 검정은 이중 지수 분포를 따르는 오차에 대한 가장 강력한 순위 검정입니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Median Test( 1 );

```

#### Newman-Keuls

**구문:** obj &lt;&lt; Each Pair Stepwise( state=0|1 ); obj &lt;&lt; "Newman-Keuls"n( state=0|1 ); obj &lt;&lt; "Each Pair Stepwise, Newman-Keuls"n( state=0|1 )

**설명:** Newman-Keuls 검정을 계산합니다. 이 검정은 단계별 절차에서 스튜던트화 범위 검정을 사용하여 평균 간에 차이가 있는지 여부를 검정합니다. Student-Newman-Keuls 방법이라고도 하는 이 검정은 Tukey HSD 검정보다 덜 보수적이고 더 강력합니다. 추가 표시 옵션은 일원 평균 비교 메시지를 참조하십시오.

**JMP추가된 버전:** 14

**예제 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Each Pair Stepwise( 1 );

```

**예제 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << "Newman-Keuls"n( 1 );

```

#### Normal Quantile Label

**구문:** obj &lt;&lt; Normal Quantile Label( state=0|1 )

**설명:** 열려 있는 각 분위수 그림에 정규 분위수 척도를 표시하거나 숨깁니다. 이 옵션은 분위수 그림이 열려 있는 경우에만 사용할 수 있습니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Plot Quantile by Actual( 1 );Wait( 2 );obj << Normal Quantile Label( 0 );

```

#### Plot Actual by Quantile

**구문:** obj &lt;&lt; Plot Actual by Quantile( state=0|1 )

**설명:** 일원 분석 그림 오른쪽에 분위수 그림을 표시하거나 숨깁니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Plot Actual by Quantile( 1 );

```

#### Plot Quantile by Actual

**구문:** obj &lt;&lt; Plot Quantile by Actual( state=0|1 )

**설명:** 가로 축에 Y 변수가 있고 세로 축에 누적 확률이 있는 분위수 그림을 표시하거나 숨깁니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Plot Quantile by Actual( 1 );

```

#### Points

**구문:** obj &lt;&lt; Points( state=0|1 )

**설명:** 일원 분석 그림에 데이터 점을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );Wait( 2 );obj << Points( 0 );

```

#### Points Jittered

**구문:** obj &lt;&lt; Points Jittered( "없음"|"자동"|"랜덤 균등"|"랜덤 정규"|"랜덤 밀도"|"묶음"|"격자"|"육각형 격자"|"벌떼 배열"="자동" )

**설명:** 데이터 점의 산포를 지정합니다. 이 옵션을 선택하면 표식이 중첩되지 않도록 데이터 점이 지터링됩니다. 기본값은 "자동"입니다.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Oneway( Y( :Sepal length ), X( :Species ) );obj << Points Jittered( "Binned" );

```

#### Points Spread

**구문:** obj &lt;&lt; Points Spread( state=0|1 )

**설명:** 데이터 점의 산포를 지정합니다. 이 옵션을 선택하면 데이터 점이 구간 너비 전체에 퍼집니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Points Spread( 1 );

```

#### Pooled Variance

**구문:** obj &lt;&lt; Ratios with Pooled Variance( state=0|1 );

**설명:** 각 평균 쌍의 비율 비교 보고서를 표시하거나 숨깁니다. 등분산을 가정할 경우 평균 비율의 합동 신뢰 구간은 Fieller 신뢰 구간입니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Ratios with Pooled Variance( 1 );

```

#### Power

**구문:** obj &lt;&lt; Power( Alpha( from, &lt;to&gt;, &lt;by&gt; ), Sigma( from, &lt;to&gt;, &lt;by&gt; ), Delta( from, &lt;to&gt;, &lt;by&gt; ), Number( from, &lt;to&gt;, &lt;by&gt; ), Solve for Power|Solve for Least Significant Number|Solve for Least Significant Value|Adjusted Power and Confidence Interval, Power Plot, Done )

**설명:** 통계 검정력 계산을 보고합니다. 인수를 사용하면 알파, 시그마, 델타 및 총 표본 크기(숫자)에 대해 범위를 지정할 수 있습니다. 다섯 번째 인수는 보고서의 결과를 지정합니다. 여섯 번째 인수는 검정력 그림을 요청하고 Done 인수는 검정력 대화상자를 해제합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ), All Graphs( 0 ) );obj << Power(	Alpha( 0.05 ),	Sigma( 3.382, 3.73 ),	Delta( 2.79679 ),	Number( 10, 90, 5 ),	Solve for Power,	Power Plot,	Done);

```

#### Proportion of Densities

**구문:** obj &lt;&lt; Proportion of Densities( state=0|1 )

**설명:** X 변수의 각 수준별로 밀도에 대한 기여도를 보여 주는 그림을 표시하거나 숨깁니다. 기여도는 X 변수의 전체 범위에서 총 밀도의 비율로 표시됩니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Proportion of Densities( 1 );

```

#### Quantiles

**구문:** obj &lt;&lt; Quantiles( state=0|1 )

**설명:** 일원 분석 그림에 상자 그림을 표시하거나 숨기고 분위수 보고서를 표시하거나 숨깁니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Quantiles( 1 );

```

#### Robust Fit

**구문:** obj &lt;&lt; Robust Fit( state=0|1 )

**설명:** 작은 잔차의 경우 최소 제곱 잔차와 동일하고 큰 잔차의 경우 최소 절대값과 동일한 Huber 추정값을 생성합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Robust Fit( 1 );

```

#### Robust Means Lines

**구문:** obj &lt;&lt; Robust Means Lines( state=0|1 )

**설명:** 각 그룹의 로버스트 평균에 선을 표시하거나 숨깁니다. 이 옵션은 "로버스트" 옵션을 선택한 경우에만 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Robust Fit( 1 );obj << Robust Means Lines( 1 );

```

#### Save Normal Quantiles

**구문:** obj &lt;&lt; Save Normal Quantiles

**설명:** X 변수의 각 수준에 대한 정규 분위수 값을 저장합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Save Normal Quantiles;

```

#### Save Predicted

**구문:** obj &lt;&lt; Save Predicted

**설명:** X 변수의 각 수준에 대한 Y 변수의 예측 평균을 저장합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Save Predicted;

```

#### Save Residuals

**구문:** obj &lt;&lt; Save Residuals

**설명:** Y 변수에서 X 변수의 각 수준에 대한 Y 변수의 평균을 뺀 값을 저장합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Save Residuals;

```

#### Save Standardized

**구문:** obj &lt;&lt; Save Standardized

**설명:** X 변수의 각 수준에 대한 Y 변수의 표준화된 값을 저장합니다. 표준화된 값은 중심화된 반응을 각 수준 내의 표준편차로 나눈 값입니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Save Standardized;

```

#### Select Group

**구문:** obj &lt;&lt; Select Group( X value )

**설명:** 원이 강조 표시되도록 그룹을 선택합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Weight ), X( :Age ), Each Pair );Wait( 2 );obj << Select Group( 14 );

```

#### Set Alpha Level

**구문:** obj &lt;&lt; Set Alpha Level( alpha=0.05 )

**설명:** 보고서의 신뢰 한계, 평균 다이아몬드 및 신뢰 수준 값에 사용되는 유의 수준을 변경합니다. 기본값은 "0.05"입니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Means( 1 );Wait( 2 );obj << Set Alpha Level( 0.01 );

```

#### Set α Level

**구문:** obj &lt;&lt; Set α Level( alpha=0.05 )

**설명:** 보고서의 신뢰 한계, 평균 다이아몬드 및 신뢰 수준 값에 사용되는 유의 수준을 변경합니다. 기본값은 "0.05"입니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Means( 1 );Wait( 2 );obj << Set Alpha Level( 0.01 );

```

#### Standard Deviations

**구문:** obj &lt;&lt; Standard Deviations

**설명:** 표준편차에 대한 동등성, 우월성 또는 비열등성 검정 옵션이 있는 창을 시작합니다. 임계 비율을 지정하십시오.

#### Std Dev Lines

**구문:** obj &lt;&lt; Std Dev Lines( state=0|1 )

**설명:** 각 그룹 평균의 1 표준편차 위와 아래에 선을 표시하거나 숨깁니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Std Dev Lines( 1 );

```

#### Steel With Control

**구문:** obj &lt;&lt; Steel With Control( state = 0|1, {control level} )

**설명:** 다른 모든 그룹을 대조군과 비교하기 위해 전체 오차율을 보호하는 Steel 검정을 표시하거나 숨깁니다. 이 방법은 Dunnett 방법의 비모수 버전입니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Steel With Control( 1, {12} );

```

#### Steel-Dwass All Pairs

**구문:** obj &lt;&lt; "Steel-Dwass All Pairs"n( state=0|1 )

**설명:** 전체 오차율을 보호하는 Steel-Dwass 검정을 표시하거나 숨깁니다. 이 방법은 Turkey 방법의 비모수 버전입니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << "Steel-Dwass All Pairs"n( 1 );

```

#### Student's t

**구문:** obj &lt;&lt; Each Pair( state=0|1 ); obj &lt;&lt; "Student&apos;s t"n( state=0|1 ); obj &lt;&lt; "Each Pair, Student&apos;s t"n( state=0|1 )

**설명:** 다중 검정에 대해 무조정 스튜던트 t-검정을 사용하여 각각의 쌍별 비교를 계산합니다. 추가 표시 옵션은 일원 평균 비교 메시지를 참조하십시오.

**예제 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Each Pair( 1 );

```

**예제 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << "Student's t"n( 1 );

```

#### Tukey HSD

**구문:** obj &lt;&lt; All Pairs( state=0|1 ); obj &lt;&lt; Tukey HSD( state=0|1 ); obj &lt;&lt; "All Pairs, Tukey HSD"n( state=0|1 )

**설명:** Tukey HSD(Honestly Significant Difference)를 계산합니다. 이 검정은 전체 오차율을 보호합니다. 추가 표시 옵션은 일원 평균 비교 메시지를 참조하십시오.

**예제 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << All Pairs( 1 );

```

**예제 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Tukey HSD( 1 );

```

#### Unequal Variances

**구문:** obj &lt;&lt; Unequal Variances( state=0|1 )

**설명:** 그룹 분산의 동일성에 대한 네 가지 검정을 표시하거나 숨깁니다. 이 옵션은 그룹 내 분산이 같지 않을 때 평균을 비교하기 위한 ANOVA 검정인 Welch 검정도 생성합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Unequal Variances( 1 );

```

#### Unpooled Variance

**구문:** obj &lt;&lt; Ratios with Unpooled Variance( state=0|1 );

**설명:** 각 평균 쌍의 비율 비교 보고서를 표시하거나 숨깁니다. 이분산을 가정할 경우 평균 비율의 비합동 Satterthwaite 기반 신뢰 구간이 계산됩니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Ratios with Unpooled Variance( 1 );

```

#### Van Der Waerden Exact Test

**구문:** obj &lt;&lt; Van Der Waerden Exact Test( state=0|1 )

**설명:** Van der Waerden 또는 정규 스코어 분석을 표시하거나 숨깁니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :sex ) );obj << Van Der Waerden Exact Test( 1 );

```

#### Wilcoxon Each Pair

**구문:** obj &lt;&lt; Wilcoxon Each Pair( state=0|1 )

**설명:** 다중 검정에 대한 조정 없이 가능한 모든 개별 쌍을 비교하는 Wilcoxon 검정을 표시하거나 숨깁니다. 이 방법은 개별 쌍 비교(스튜던트 t) 방법의 비모수 버전입니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Wilcoxon Each Pair( 1 );

```

#### Wilcoxon Exact Test

**구문:** obj &lt;&lt; Wilcoxon Exact Test( state=0|1 )

**설명:** 각 수준 쌍에 대해 정확 방법을 사용한 Wilcoxon 스코어 분석을 표시하거나 숨깁니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :sex ) );obj << Wilcoxon Exact Test( 1 );

```

#### Wilcoxon Test

**구문:** obj &lt;&lt; Wilcoxon Test( state=0|1 )

**설명:** Wilcoxon 순위 스코어에 기반한 검정을 표시하거나 숨깁니다. Wilcoxon 순위 스코어는 데이터의 단순 순위입니다. Wilcoxon 검정은 로지스틱 분포를 따르는 오차에 대한 가장 강력한 순위 검정입니다. X 변수의 수준이 정확히 두 개인 경우 Wilcoxon 검정은 Mann-Whitney 검정과 동일합니다. X 변수의 수준이 세 개 이상인 경우에는 Kruskal-Wallis 검정이 수행됩니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Wilcoxon Test( 1 );

```

#### With Best

**구문:** obj &lt;&lt; With Best( state=0|1 ); obj &lt;&lt; Hsu MCB( state=0|1 ); obj &lt;&lt; "With Best, Hsu MCB"n( state=0|1 )

**설명:** Hsu MCB(Multiple Comparison with Best) 검정을 계산합니다. 이 검정은 평균이 알 수 없는 최대값보다 작은지 여부를 검정합니다. 추가 표시 옵션은 일원 평균 비교 메시지를 참조하십시오.

**예제 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << With Best( 1 );

```

**예제 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << Hsu MCB( 1 );

```

#### With Control

**구문:** obj &lt;&lt; With Control( state=0|1, {control ID} ); obj &lt;&lt; "Dunnett&apos;s"n( state=0|1, {control ID} ); obj &lt;&lt; "With Control, Dunnett&apos;s"n( state=0|1, {control ID} )

**설명:** Dunnett 검정을 계산합니다. 이 검정은 평균이 대조군의 평균과 다른지 여부를 검정합니다. 추가 표시 옵션은 일원 평균 비교 메시지를 참조하십시오.

**예제 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << With Control( 1, {15} );

```

**예제 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << "Dunnett's"n( 1, {15} );

```

#### X Axis Proportional

**구문:** obj &lt;&lt; X Axis Proportional( state=0|1 )

**설명:** 가로 축에 간격을 지정합니다. 이 옵션을 선택하면 간격이 각 수준의 관측값 수에 비례합니다. "매칭 열" 옵션을 선택한 경우에는 이 옵션을 사용할 수 없습니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ), X Axis Proportional( 0 ) );Wait( 2 );obj << X Axis Proportional( 1 );

```

#### t Test

**구문:** obj &lt;&lt; t Test( state=0|1 )

**설명:** 분산이 같지 않다는 가정하에 t-검정 보고서를 표시하거나 숨깁니다. 이 옵션은 X 변수의 수준이 정확히 두 개인 경우에만 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :sex ) );obj << t Test( 1 );

```

#### van der Waerden Test

**구문:** obj &lt;&lt; van der Waerden Test( state=0|1 )

**설명:** Van der Waerden 순위 스코어에 기반한 검정을 표시하거나 숨깁니다. Van der Waerden 순위 스코어는 데이터 순위를 1 + 스코어 값으로 나눈 값입니다. 스코어 값은 정규 분포 함수의 역을 적용하여 정규 스코어로 변환된 관측값의 수입니다. Van der Waerden 검정은 정규 분포를 따르는 오차에 대한 가장 강력한 순위 검정입니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );obj << van der Waerden Test( 1 );

```

