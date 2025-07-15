# Gaussian Process Model



## 연결된 생성자

### Bayesian Optimization

**구문:** Bayesian Optimization( Y( column ), X( columns ) )

**설명:** 연속형 반응 변수와 하나 이상의 연속형 예측 변수 간의 관계를 보간을 사용한 스플라인으로 모델링합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/2D PUT EXAMPLE FILE HERE" );
obj = dt << Bayesian Optimization( Y( :Y ), X( :X1, :X2 ) );

```

## 항목 메시지

### Copy Model Fit Script

**구문:** obj &lt;&lt; Copy Model Fit Script

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 클립보드에 넣습니다.

### Intercept

**구문:** obj &lt;&lt; Intercept( number )

### Nugget

**구문:** obj &lt;&lt; Nugget( number )

### Profiler

**구문:** obj &lt;&lt; Profiler( state=0|1 )

**설명:** 전체 모형에 대해 각 요인의 변화에 따른 각 열의 변화를 탐색합니다.

### Residual

**구문:** obj &lt;&lt; Residual( number )

### Save Model Fit Script to Data Table

**구문:** obj &lt;&lt; Save Model Fit Script to Data Table

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 데이터 테이블에 테이블 특성으로 저장합니다.

### Save Model Fit Script to Journal

**구문:** obj &lt;&lt; Save Model Fit Script to Journal

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 이 스크립트가 포함된 저널에 버튼을 추가합니다.

### Save Model Fit Script to Report

**구문:** obj &lt;&lt; Save Model Fit Script to Report

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 보고서 자체에 표시합니다. 수행된 작업에 대한 인쇄된 기록을 유지하려는 경우에 유용합니다.

### Save Model Fit Script to Script Window

**구문:** obj &lt;&lt; Save Model Fit Script to Script Window

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 현재 스크립트 텍스트 창에 추가합니다.

### Starting Values

**구문:** obj &lt;&lt; Starting Values( number )

### Theta Values

**구문:** obj &lt;&lt; Theta Values( number )

