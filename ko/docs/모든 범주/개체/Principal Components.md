# Principal Components



## 연결된 생성자

### Principal Components

**구문:** Principal Components( Y( columns ) )

**설명:** 변수 집합의 변동을 본래 변수보다 더 적은 수의 주성분(본래 변수의 독립적 선형 결합)으로 모델링합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );

```

## 열

### By

**구문:** obj = Principal Components(...&lt;By( column(s) )&gt;...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 지정된 열의 각 수준에 대해 별도의 분석을 수행합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	By( _bycol )
);

```

### Columns

**구문:** obj = Principal Components(...&lt;Columns( column(s) )&gt;...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 성분을 분석할 변수를 지정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );

```

### Freq

**구문:** obj = Principal Components(...&lt;Freq( column )&gt;...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 분석을 위해 각 행에 빈도를 할당하는 값이 들어 있는 열을 지정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
dt << New Column( "_freqcol", Numeric, Continuous, Formula( Random Integer( 1, 5 ) ) );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Freq( _freqcol )
);

```

### Supplementary Variable

**구문:** obj &lt;&lt; Supplementary Variable( column(s) )

**설명:** 하나 이상의 보조 변수를 지정합니다. 보조 변수는 플랫폼에서 계산에 사용되지 않으며 변수를 포함해도 결과에 영향을 주지 않습니다. 이러한 변수는 데이터 해석을 개선하거나 향후 분석에 사용될 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Principal Components(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Z( :Species ),
	Standardize( "Standardized" )
);

```

### Weight

**구문:** obj = Principal Components(...&lt;Weight( column )&gt;...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 분석을 위해 각 행에 가중치를 할당하는 값이 들어 있는 열을 지정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
dt << New Column( "_weightcol", Numeric, Continuous, Formula( Random Beta( 1, 1 ) ) );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Weight( _weightcol )
);

```

### Y

**구문:** obj = Principal Components(...&lt;Y( column(s) )&gt;...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 성분을 분석할 변수를 지정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );

```

### Z

**구문:** obj &lt;&lt; Z( column(s) )

**설명:** 하나 이상의 보조 변수를 지정합니다. 보조 변수는 플랫폼에서 계산에 사용되지 않으며 변수를 포함해도 결과에 영향을 주지 않습니다. 이러한 변수는 데이터 해석을 개선하거나 향후 분석에 사용될 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Principal Components(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Z( :Species ),
	Standardize( "Standardized" )
);

```

## 항목 메시지

### 3D Score Plot

**구문:** obj &lt;&lt; 3D Score Plot( state=0|1 )

**설명:** 주성분을 3차원 공간에 선으로 나타내는 3D 산점도를 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), Standardize( "Standardized" ) );
obj << "3D Score Plot"n( 1 );

```

### Arrow Lines

**구문:** obj &lt;&lt; Arrow Lines( state=0|1 )

**설명:** 그래프에 화살표 선을 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), Standardize( "Standardized" ) );
obj << Arrow Lines( 0 );

```

### Bartlett Test

**구문:** obj &lt;&lt; Bartlett Test( state=0|1 )

**설명:** 각 주성분에 대한 동질성 검정 결과 보고서를 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), Standardize( "Standardized" ) );
obj << Bartlett Test( 1 );

```

### Biplot

**구문:** obj &lt;&lt; Biplot( number )

**설명:** 지정된 수의 성분에 대한 스코어 그림과 적재 그림을 중첩하는 그림을 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Standardize( "Standardized" )
);
obj << Biplot( 2 );

```

### Cluster Components

**구문:** obj &lt;&lt; Cluster Components( state=0|1 )

**설명:** 각 군집 내에서 첫 번째 주성분의 고유 벡터를 포함하는 표준화 성분 보고서를 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), "on Correlations" );
obj << Cluster Variables( Cluster Components( 1 ) );

```

### Cluster Members

**구문:** obj &lt;&lt; Cluster Members( state=0|1 )

**설명:** 각 군집의 변수에 대한 보고서를 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), "on Correlations" );
obj << Cluster Variables( Cluster Members( 1 ) );

```

### Cluster Summary

**구문:** obj &lt;&lt; Cluster Summary( state=0|1 )

**설명:** 변수 군집화 결과를 요약하는 보고서를 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), "on Correlations" );
obj << Cluster Variables( Cluster Summary( 1 ) );

```

### Cluster Variables

**구문:** obj &lt;&lt; Cluster Variables( state=0|1 )

**설명:** 변수를 유사한 그룹으로 군집화합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), Standardize( "Standardized" ) );
obj << Cluster Variables( 1 );

```

### Color Map on Correlations

**구문:** obj &lt;&lt; Color Map on Correlations( state=0|1 )

**설명:** 변수 간의 상관관계에 대한 색상 맵을 표시하거나 숨깁니다. 여기서 변수는 같은 군집의 멤버가 그림에서 인접해 있도록 배열됩니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), "on Correlations" );
obj << Cluster Variables( Color Map On Correlations( 1 ) );

```

### Coordinate Matrix

**구문:** obj &lt;&lt; Coordinate Matrix( state=0|1 )

**설명:** Shows or hides a table that contains the component coordinates. This option is available only when there is a categorical variable in the analysis.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Principal Components(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width, :Species ),
	Standardize( "Standardized" )
);
obj << Coordinate  Matrix( 1 );

```

### Correlations

**구문:** obj &lt;&lt; Correlations( state=0|1 )

**설명:** 각 Y 변수 쌍 사이의 선형 관계 강도를 요약하는 상관계수 행렬을 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Standardize( "Standardized" )
);
obj << Correlations( 1 );

```

### Covariance Matrix

**구문:** obj &lt;&lt; Covariance Matrix( state=0|1 )

**설명:** 각 Y 변수 쌍에 대한 공분산 행렬을 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Standardize( "Standardized" )
);
obj << Covariance Matrix( 1 );

```

### Eigenvalues

**구문:** obj &lt;&lt; Eigenvalues( state=0|1 )

**설명:** 정렬된 고유값, 해당 변동률 및 누적 변동률을 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Standardize( "Standardized" )
);
obj << Eigenvalues( 1 );

```

### Eigenvectors

**구문:** obj &lt;&lt; Eigenvectors( state=0|1 )

**설명:** 각 주성분에 대한 고유 벡터 보고서를 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), Standardize( "Standardized" ) );
obj << Eigenvectors( 1 );

```

### Estimation Method

**구문:** Estimation Method( REML | ML | Robust | Row-wise | Pairwise | Full SVD | Truncated SVD | Randomized SVD | Robust SVD | Sparse SVD)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 상관 계산을 위한 추정 방법을 설정합니다.

결측값이 없는 경우 기본값은 &apos;행별&apos;입니다.

결측값이 있는 경우, 변수 수가 10개 이하이고 행 수가 5000개 이하이면 기본값은 &apos;REML&apos;입니다.

결측값이 있는 경우, 변수 수가 10개를 초과하거나 행 수가 5000개를 초과하면 기본값은 &apos;쌍별&apos;입니다. 기본값은 "기본값"입니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" ),
	Estimation Method( "REML" )
);

```

### Factor Analysis

**구문:** obj &lt;&lt; Factor Analysis( ML|PC, ONE|SMC, n Rotated, Varimax| Biquartimax| Equamax| Factorparsimax| Orthomax| Parsimax| Quartimax| Biquartimin| Covarimin| Obbiquartimax| Obequamax| Obfactorparsimax| Obequamax| Obfactorparsimax| Oblimin| Obparsimax| Obquartimax| Obvarimax| Quartimin| UnRotated| Promax )

**설명:** 주성분에 대한 요인 회전 패턴 보고서를 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), Standardize( "Standardized" ) );
obj << Factor Analysis( "ML", "SMC", 2, "Varimax" );

```

### Formatted Loading Matrix

**구문:** obj &lt;&lt; Formatted Loading Matrix( state=0|1 )

**설명:** 형식이 지정된 성분 적재를 포함하는 보고서를 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), Standardize( "Standardized" ) );
obj << Formatted Loading Matrix( 1 );

```

### Impute Missing Data

**구문:** obj &lt;&lt; Impute Missing Data

**설명:** 모든 Y 변수에 대한 결측값을 대치하고 기존 값과 새로 대치된 결측 데이터 값이 포함된 새 데이터 테이블을 생성합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Impute Missing Data( 1 );

```

### Launch Fit Model

**구문:** obj &lt;&lt; Launch Fit Model

**설명:** 가장 대표적인 변수를 예측 변수로 사용하여 모형 적합을 시작합니다. 이러한 변수를 예측 변수로 사용하려면 먼저 군집 성분 저장을 선택하십시오.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), "on Correlations" );
obj << Cluster Variables( Launch Fit Model );

```

### Loading Matrix

**구문:** obj &lt;&lt; Loading Matrix( number )

**설명:** 성분 적재를 포함하는 테이블을 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), Standardize( "Standardized" ) );
obj << Loading Matrix( 1 );

```

### Loading Plot

**구문:** obj &lt;&lt; Loading Plot( number )

**설명:** 요인 적재를 2차원으로 표현한 그림 행렬을 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), Standardize( "Standardized" ) );
obj << Loading Plot( 2 );

```

### Missing value imputation

**구문:** obj = Principal Components(...Missing value imputation( state=0|1 )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 행렬 완성을 통해 결측값을 대치합니다. 이 옵션은 와이드 방법에 적용할 수 있습니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10, :Lead ),
	Estimation Method( "Truncated SVD" ),
	Number of Components( 6 ),
	Missing value imputation( 0 ),
	Standardize( "Standardized" )
);

```

### Model Driven Multivariate Control Chart

**구문:** obj &lt;&lt; Model Driven Multivariate Control Chart

**설명:** 지정된 수의 성분에 대한 모형 기반 다변량 관리도를 시작합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Standardize( "Standardized" )
);
obj << Model Driven Multivariate Control Chart( 2 );

```

### Number of Components

**구문:** obj = Principal Components(...Number of Components( number=10 )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 추출할 성분 수를 설정합니다. 계산 시간을 줄이려면 성분 수를 적게 입력하십시오. 기본값은 "10"입니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Principal Components(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Estimation Method( "Sparse" ),
	Number of Components( 3 ),
	Standardize( "Standardized" )
);

```

### Outlier Analysis

**구문:** obj &lt;&lt; Outlier Analysis( state=0|1 )

**설명:** T² 및 기여도 통계량을 통해 데이터에서 이상치를 감지할 수 있게 해 주는 이상치 분석 보고서를 표시하거나 숨깁니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Principal Components(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Estimation Method( "Default" ),
	Standardize( "Standardized" ),
	Outlier Analysis( 1 )
);

```

### Partial Contribution of Variables

**구문:** obj &lt;&lt; Partial Contribution of Variables( number )

**설명:** 변수의 부분 기여도를 포함하는 테이블과 처음 세 개 주성분에 대한 부분 기여도를 나타내는 그림을 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), Standardize( "Standardized" ) );
obj << Partial Contribution of Variables(
	Plot of Partial Contribution of Variables( Overview( 3 ), "Side by side" )
);

```

### Profiler for Predicteds

**구문:** obj &lt;&lt; Profiler for Predicteds

**설명:** 지정된 수의 성분을 사용한 예측을 위해 프로파일러를 시작합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Standardize( "Standardized" )
);
obj << Profiler for Predicteds( 2 );

```

### Publish Components Formulas

**구문:** obj &lt;&lt; Publish Components Formulas( number )

**설명:** 지정된 수의 주성분 계산식을 생성하여 계산식 저장소 플랫폼에 계산식 열 스크립트로 저장합니다. 계산식 저장소 보고서가 열려 있지 않은 경우 이 옵션은 계산식 저장소 보고서를 생성합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), Estimation Method( "Wide" ) );
obj << Publish Components Formulas( 3 );

```

### Publish Normalized DModX Formula

**구문:** obj &lt;&lt; Publish Normalized DModX Formula( number )

**설명:** 지정된 수의 주성분에 기반한 정규화된 DModX 계산식을 계산식 저장소 플랫폼에 계산식 열 스크립트로 저장합니다. 계산식 저장소 보고서가 열려 있지 않은 경우 이 옵션은 계산식 저장소 보고서를 생성합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), Standardize( "Standardized" ) );
obj << Publish Normalized DModX Formula( 3 );

```

### Save Cluster Components

**구문:** obj &lt;&lt; Save Cluster Components

**설명:** 각 군집에 대한 군집(첫 번째 주성분) 성분을 데이터 테이블에 저장합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), "on Correlations" );
obj << Cluster Variables( Save Cluster Components );

```

### Save Imputed Formula

**구문:** obj &lt;&lt; Save Imputed Formula

**설명:** Y 열에 결측값이 존재할 때 새로운 값으로 대치합니다. 결측값 대치 계산식이 포함된 새 열을 만들어 원래 데이터 테이블에 저장합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Save Imputed Formula( 1 );

```

### Save Individual Partial Contributions

**구문:** obj &lt;&lt; Save Individual Partial Contributions( number )

**설명:** 개별 부분 기여도를 데이터 테이블의 새 열에 저장합니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), "on Covariances" );
obj << Save Individual Partial Contributions( 3 );

```

### Save Individual Squared Cosines

**구문:** obj &lt;&lt; Save Individual Squared Cosines( number )

**설명:** 개별 제곱코사인을 데이터 테이블의 새 열에 저장합니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), "on Covariances" );
obj << Save Individual Squared Cosines( 3 );

```

### Save Low Rank Principal Components

**구문:** obj &lt;&lt; Save Low Rank Principal Components( number )

**설명:** 이상치와 잡음이 제거된 낮은 계수 데이터에서 주성분 스코어를 저장합니다. 이 옵션은 로버스트 PCA 추정 방법에만 적용됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" ),
	Estimation Method( "Robust PCA" ),
	Number of Components( 3 )
);
obj << Save Low Rank Principal Components( 3 );

```

### Save Normalized DModX

**구문:** obj &lt;&lt; Save Normalized DModX( number )

**설명:** 정규화된 DModX 값을 데이터 테이블의 새 열에 저장합니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), "on Covariances" );
obj << Save Normalized DMODX( 3 );

```

### Save Predicteds

**구문:** obj &lt;&lt; Save Predicteds( number )

**설명:** 예측된 변수를 지정된 개수의 주성분과 함께 데이터 테이블의 새 열에 저장합니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), "on Covariances" );
obj << Save Predicteds( 3 );

```

### Save Predicteds as Component Formulas

**구문:** obj &lt;&lt; Save Predicteds as Component Formulas

**설명:** 지정된 수의 주성분에 대한 성분 계산식을 데이터 테이블의 새 열에 저장합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Standardize( "Standardized" )
);
obj << Save Predicteds As Component Formulas( 3 );

```

### Save Principal Component Script

**구문:** obj &lt;&lt; Save Principal Component Script( number )

**설명:** 실행 시 지정된 수만큼의 주성분에 해당하는 새 열을 데이터 테이블에 생성하는 스크립트를 스크립트 창에 저장합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), Standardize( "Standardized" ) );
obj << save principal Component script( 3 );

```

### Save Principal Component Values

**구문:** obj &lt;&lt; Save Principal Component Values( number )

**설명:** 결측값 대치된 셀을 포함하여 주어진 수의 주성분을 데이터 테이블의 새 비계산식 열에 저장합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), Standardize( "Standardized" ) );
obj << Save Principal Component Values( 3 );

```

### Save Principal Components

**구문:** obj &lt;&lt; Save Principal Components( number )

**설명:** 주어진 수의 주성분을 데이터 테이블의 새 계산식 열에 저장합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), Standardize( "Standardized" ) );
obj << Save Principal Components( 3 );

```

### Save Principal Components with Imputation

**구문:** obj &lt;&lt; Save Principal Components with Imputation( number )

**설명:** 결측값 대치를 사용하여 계산된 주어진 수의 주성분을 데이터 테이블의 새 열에 저장합니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), Standardize( "Standardized" ) );
obj << Save Principal Components with Imputation( 3 );

```

### Save Rotated Components

**구문:** obj &lt;&lt; Save Rotated Components

**설명:** 회전된 성분을 데이터 테이블의 새 열에 저장합니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" ),
	Factor Analysis( "SMC", 2, "Varimax" )
);
obj << Save Rotated Components;

```

### Save Rotated Components with Imputation

**구문:** obj &lt;&lt; Save Rotated Components with Imputation

**설명:** 결측값 대치를 사용하여 계산된 회전 성분을 데이터 테이블의 새 열에 저장합니다. 참고: 이 옵션은 요인 회전을 실행한 후에만 사용할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" ),
	Factor Analysis( "SMC", 2, "Varimax" )
);
obj << Save Rotated Components with Imputation;

```

### Scatterplot Matrix

**구문:** obj &lt;&lt; Scatterplot Matrix( number )

**설명:** 지정된 수의 주성분에 대한 스코어 및 적재 행렬 그림을 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Standardize( "Standardized" )
);
obj << Scatterplot Matrix( 4 );

```

### Score Ellipse Coverage

**구문:** obj &lt;&lt; Score Ellipse Coverage( "0.90"|"0.95"|"0.99"|"1 시그마"|"2 시그마"|"3 시그마"|"기타…" )

**설명:** 각 주성분 쌍에 대한 스코어 그림에서 신뢰도 타원의 유의 수준을 변경합니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), Standardize( "Standardized" ) );
obj << Score Ellipse Coverage( 0.9 );

```

### Score Ellipses

**구문:** obj &lt;&lt; Score Ellipses( state=0|1 )

**설명:** 각 주성분 쌍에 대한 스코어 그림에서 신뢰도 타원을 표시하거나 숨깁니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), Standardize( "Standardized" ) );
obj << Score Ellipses( 1 );

```

### Score Plot

**구문:** obj &lt;&lt; Score Plot( number )

**설명:** 지정된 수의 각 주성분 쌍에 대한 스코어를 포함하는 산점도 행렬을 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), Standardize( "Standardized" ) );
obj << Score Plot( 2 );

```

### Score Plot with Imputation

**구문:** obj &lt;&lt; Score Plot with Imputation( number of principal components )

**설명:** 결측값 대치를 사용하고 지정된 수의 각 주성분 쌍에 대한 스코어를 포함하는 산점도 행렬을 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), Standardize( "Standardized" ) );
obj << Score Plot with Imputation( 2 );

```

### Scree Plot

**구문:** obj &lt;&lt; Scree Plot( state=0|1 )

**설명:** 각 성분에 대한 고유값의 선 그림을 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), Standardize( "Standardized" ) );
obj << Scree Plot( 1 );

```

### Select component

**구문:** obj &lt;&lt; Select component( &lt;specify dimension to plot&gt; )

**설명:** 요약 그림에서 축으로 사용되는 차원을 선택합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Principal Components(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Standardize( "Standardized" )
);
obj << Select Component( 1, 3 );

```

### Show Supplementary Variable

**구문:** obj &lt;&lt; Show Supplementary Variable( state=0|1 )

**설명:** 그래프에서 보조 변수의 화살표 선을 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Principal Components(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Z( :Species ),
	Standardize( "Standardized" )
);
obj << Show Supplementary Variable( 0 );

```

### Squared Cosines of Variables

**구문:** obj &lt;&lt; Squared Cosines of Variables( number )

**설명:** 변수의 제곱코사인을 포함하는 테이블을 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), Standardize( "Standardized" ) );
obj << Squared Cosines of Variables(
	Plot of Squared Cosines of Variables( Overview( 3 ), "Stacked", "Horizontal" )
);

```

### Standardize

**구문:** obj = Principal Components(...Standardize( "표준화"|"비척도화"|"비척도화 및 비중심화" )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 각 열을 개별적으로 표준화할지 여부를 지정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Principal Components(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Estimation Method( "Row-wise" ),
	Standardize( "Standardized" )
);

```

### Summary Plots

**구문:** obj &lt;&lt; Summary Plots( state=0|1 )

**설명:** 고유값 그림, 스코어 그림 및 적재 그림을 포함하는 개요 노드를 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Standardize( "Standardized" )
);
obj << Summary Plots( 1 );

```

### on Correlations

**구문:** Principal Components( Y( columns ), On Correlations )

**설명:** 상관 행렬을 사용하여 주성분 보고서를 생성합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Standardize( "Standardized" )
);

```

### on Covariances

**구문:** Principal Components( Y( columns ), On Covariances )

**설명:** 공분산 행렬을 사용하여 주성분 보고서를 생성합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	"on Covariances"
);

```

### on Unscaled

**구문:** Principal Components( Y( column ), On Unscaled )

**설명:** 비척도화 데이터를 사용하여 주성분 보고서를 생성합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	"on Unscaled"
);

```

