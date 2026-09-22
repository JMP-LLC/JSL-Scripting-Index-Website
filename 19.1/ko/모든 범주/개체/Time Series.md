# Time Series



## ARIMA

### 항목 메시지

#### Actual

**구문:** obj &lt;&lt; Actual( state=0|1 )

**설명:** Save Columns 명령을 사용하여 저장할 실제값 데이터 열을 선택합니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 0, 0, Actual( 1 ), Save Columns );

```

#### Autocorrelations

**구문:** obj &lt;&lt; Autocorrelations( state=0|1 )

**설명:** 자기상관 그림을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series(	Y( :Steel Shipments ),	Winters Method( 12, Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ), Autocorrelations( 1 ) ));(obj << report)["Residuals"] << Close( 0 );(obj << report)["Model Comparison"] << Close( 1 );

```

#### Confidence Intervals

**구문:** obj &lt;&lt; Confidence Intervals( number )

#### Create SAS Job

**구문:** obj &lt;&lt; Create SAS Job

**설명:** SAS를 시작하고 PROC ARIMA에서 분석을 실행하기 위한 SAS 작업을 생성합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj2 = obj << Arima( 1, 0, 0 );obj2 << Create SAS Job;

```

#### Innovations

**구문:** obj &lt;&lt; Innovations( state=0|1 )

**설명:** 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 16

#### Lower Confidence Limit

**구문:** obj &lt;&lt; Lower Confidence Limit( state=0|1 )

**설명:** Save Columns 명령을 사용하여 저장할 95% 신뢰 하한 값 열을 선택합니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 0, 0, Lower Confidence Limit( 1 ), Save Columns );

```

#### No Constrain

**구문:** obj &lt;&lt; No Constrain( state=0|1 )

**설명:** ARIMA 모형을 시작할 때 항상 안정 영역 및 가역 영역 내에 남도록 자기회귀 모수와 이동 평균 모수에 대한 제약 조건을 올립니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 1, 0, No Constrain( 1 ) );

```

#### No Intercept

**구문:** obj &lt;&lt; No Intercept( state=0|1 )

**설명:** ARIMA 모형을 시작할 때 절편을 0으로 설정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 1, 0, No Intercept( 1 ) );

```

#### Partial Autocorrelations

**구문:** obj &lt;&lt; Partial Autocorrelations( state=0|1 )

**설명:** 편자기상관 그림을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series(	Y( :Steel Shipments ),	Winters Method(		12,		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),		Partial Autocorrelations( 1 )	));(obj << report)["Residuals"] << Close( 0 );(obj << report)["Model Comparison"] << Close( 1 );

```

#### Plot

**구문:** obj &lt;&lt; Plot( state=0|1 )

**설명:** 잔차 통계량 그림을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series(	Y( :Steel Shipments ),	Winters Method( 12, Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ), Plot( 1 ) ));(obj << report)["Residuals"] << Close( 0 );(obj << report)["Model Comparison"] << Close( 1 );

```

#### Predicted

**구문:** obj &lt;&lt; Predicted( state=0|1 )

**설명:** Save Columns 명령을 사용하여 저장할 예측값 데이터 열을 선택합니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 0, 0, Predicted( 1 ), Save Columns );

```

#### Prediction Interval

**구문:** obj &lt;&lt; Prediction Interval( level )

**설명:** ARIMA 모형 예측에 대한 신뢰 구간의 크기를 설정합니다. 기본 크기는 0.95입니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 1, 0, Forecasting Interval( 0.99 ) );

```

#### Remove Fit

**구문:** obj &lt;&lt; Remove Fit

**JMP추가된 버전:** 16

#### Residuals

**구문:** obj &lt;&lt; Residuals( state=0|1 )

**설명:** Save Columns 명령을 사용하여 저장할 잔차 값 데이터 열을 선택합니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 0, 0, Residuals( 1 ), Save Columns );

```

#### Save Columns

**구문:** obj &lt;&lt; Save Columns

**설명:** 실제값 및 예측값과 함께 표준 오차, 잔차 및 반응에 대한 95% 예측 구간이 포함된 데이터 테이블을 새로 생성합니다. 이 옵션은 모든 ARIMA, 평활 및 전이 함수 모형에 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj2 = obj << Arima( 1, 0, 0 );obj2 << Save Columns;

```

#### Save Prediction Formula

**구문:** obj &lt;&lt; Save Prediction Formula

**설명:** 예측 계산식을 데이터 테이블의 새 열에 저장합니다. 이 옵션은 모든 ARIMA 및 평활 모형에 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj2 = obj << Arima( 1, 0, 0 );obj2 << Save Prediction Formula;

```

#### Show Confidence Interval

**구문:** obj &lt;&lt; Show Confidence Interval( state=0|1 )

**설명:** 시계열 예측 그림에 예측 구간을 표시하거나 숨깁니다. 이 옵션은 모든 ARIMA 및 평활 모형에 사용할 수 있습니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj2 = obj << Simple Exponential Smoothing( Zero to One );obj2 << Show Confidence Interval( 0 );

```

#### Show Points

**구문:** obj &lt;&lt; Show Points( state=0|1 )

**설명:** 시계열 예측 그림에 점을 표시하거나 숨깁니다. 이 옵션은 모든 ARIMA 및 평활 모형에 사용할 수 있습니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 0, 0, Show Points( 1 ) );(obj << report)["Model Comparison"] << Close( 1 );

```

#### Show Prediction Interval

**구문:** obj &lt;&lt; Show Prediction Interval( state=0|1 )

**설명:** 시계열 예측 그림에 예측 구간을 표시하거나 숨깁니다. 이 옵션은 모든 ARIMA 및 평활 모형에 사용할 수 있습니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj2 = obj << Simple Exponential Smoothing( Zero to One );obj2 << Show Prediction Interval( 0 );

```

#### Std Error of Predicted

**구문:** obj &lt;&lt; Std Error of Predicted( state=0|1 )

**설명:** Save Columns 명령을 사용하여 저장할 예측값 표준 오차 데이터 열을 선택합니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 0, 0, Std Error of Predicted( 1 ), Save Columns );

```

#### Time

**구문:** obj &lt;&lt; Time( state=0|1 )

**설명:** Save Columns 명령을 사용하여 저장할 시간 데이터 열을 선택합니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ), Time ID( :Date ) );obj << Arima( 1, 0, 0, Time( 0 ), Save Columns );

```

#### Upper Confidence Limit

**구문:** obj &lt;&lt; Upper Confidence Limit( state=0|1 )

**설명:** Save Columns 명령을 사용하여 저장할 95% 신뢰 상한 값 열을 선택합니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 0, 0, Upper Confidence Limit( 1 ), Save Columns );

```

#### Variogram

**구문:** obj &lt;&lt; Variogram( state=0|1 )

**설명:** 변동도를 표시하거나 숨깁니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series(	Y( :Steel Shipments ),	Winters Method( 12, Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ), Variogram( 1 ) ));(obj << report)["Residuals"] << Close( 0 );(obj << report)["Model Comparison"] << Close( 1 );

```

## 공유 항목 메시지

### Action

**구문:** obj &lt;&lt; Action

**설명:** 실행할 표현식을 삽입하기 위한 플랫폼 내의 다목적 트랩도어. 임시로 표시 상자 및 데이터 테이블 유형을 플랫폼에 설정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

### Apply Preset

**구문:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**설명:** 이전에 생성된 사전 설정을 개체에 적용하여 옵션과 사용자 정의를 저장된 설정과 일치하도록 업데이트합니다.

**JMP추가된 버전:** 18

#### 이름으로 검색

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

#### 익명 사전 설정

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );Wait( 1 );obj2 << Apply Preset( preset );

```

#### 폴더 내에서 검색

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

### Automatic Recalc

**구문:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**설명:** 제외 항목 및 데이터 변경이 있을 때 분석을 자동으로 다시 실행합니다. 자동 재계산 옵션이 설정된 경우 재계산하기 전에 제외 항목 및 데이터 변경이 적용되게 하려면 Wait(0) 명령을 사용하는 것이 좋습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = dt << Time Series( Y( :steel shipments ) );obj << Automatic Recalc( 1 );dt << Select Rows( 5 ) << Exclude( 1 );

```

### Broadcast

**구문:** obj &lt;&lt; Broadcast(message)

**설명:** 플랫폼에 메시지를 브로드캐스트합니다. 개별 개체의 반환 결과가 테이블인 경우 가능하면 테이블이 연결되고 최종 형식은 테이블 상자의 &apos;결합 테이블 저장&apos; 옵션 결과 또는 소스 열을 사용한 &apos;연결&apos; 옵션 결과와 동일합니다. 그 외의 경우에는 결과가 목록에 저장되어 반환됩니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );objs = Control Chart Builder( Variables( Subgroup( :DAY ), Y( :DIAMETER ) ), By( :OPERATOR ) );objs[1] << Broadcast( Save Summaries );

```

### Column Switcher

**구문:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**설명:** 플랫폼 변수를 변경하기 위한 제어판을 추가합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher( :marital status, {:sex, :country, :marital status} );

```

### Copy ByGroup Script

**구문:** obj &lt;&lt; Copy ByGroup Script

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 클립보드에 넣습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Time Series( Y( :steel shipments ), By( :_bycol ), Group Options( Return Group( 1 ) ) );obj[1] << Copy ByGroup Script;

```

### Copy Script

**구문:** obj &lt;&lt; Copy Script

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 클립보드에 넣습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = dt << Time Series( Y( :steel shipments ) );obj << Copy Script;

```

### Data Table Window

**구문:** obj &lt;&lt; Data Table Window

**설명:** 이 분석에 대한 데이터 테이블 창을 앞으로 가져옵니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = dt << Time Series( Y( :steel shipments ) );obj << Data Table Window;

```

### Get By Levels

**구문:** obj &lt;&lt; Get By Levels

**설명:** 기준 그룹 열을 값에 매핑하는 연관 배열을 반환합니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv << Get By Levels;

```

### Get ByGroup Script

**구문:** obj &lt;&lt; Get ByGroup Script

**설명:** 이 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Time Series( Y( :steel shipments ), By( :_bycol ), Group Options( Return Group( 1 ) ) );t = obj[1] << Get ByGroup Script;Show( t );

```

### Get Container

**구문:** obj &lt;&lt; Get Container

**설명:** 개체의 콘텐츠를 담고 있는 컨테이너 상자에 대한 참조를 반환합니다.

#### 일반

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = dt << Time Series( Y( :steel shipments ) );t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### 필터 사용 플랫폼

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

### Get Data Table

**구문:** obj &lt;&lt; Get Data Table

**설명:** 데이터 테이블에 대한 참조를 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = dt << Time Series( Y( :steel shipments ) );t = obj << Get Datatable;Show( N Rows( t ) );

```

### Get Group Platform

**구문:** obj &lt;&lt; Get Group Platform

**설명:** 이 플랫폼이 그룹의 일부인 경우 그룹 플랫폼 개체를 반환하고, 그렇지 않은 경우 Empty()를 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );group = biv[1] << Get Group Platform;Wait( 1 );group << Layout( "Arrange in Tabs" );

```

### Get Script

**구문:** obj &lt;&lt; Get Script

**설명:** 이 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = dt << Time Series( Y( :steel shipments ) );t = obj << Get Script;Show( t );

```

### Get Script With Data Table

**구문:** obj &lt;&lt; Get Script With Data Table

**설명:** 이 데이터 테이블을 참조하는 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = dt << Time Series( Y( :steel shipments ) );t = obj << Get Script With Data Table;Show( t );

```

### Get Timing

**구문:** obj &lt;&lt; Get Timing

**설명:** 플랫폼 시작 시간을 설정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = dt << Time Series( Y( :steel shipments ) );t = obj << Get Timing;Show( t );

```

### Get Web Support

**구문:** obj &lt;&lt; Get Web Support

**설명:** 표시 개체에 대한 대화식 HTML 지원 수준을 나타내는 숫자를 반환합니다. 1은 일부 또는 모든 요소가 지원됨을 의미하고 0은 지원되지 않음을 의미합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );s = obj << Get Web Support();Show( s );

```

### Get Where Expr

**구문:** obj &lt;&lt; Get Where Expr

**설명:** By() 또는 Where()를 사용하여 플랫폼이 시작된 경우 데이터 부분집합에 대한 Where 표현식을 반환하고, 그렇지 않은 경우 Empty()를 반환합니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

### Ignore Platform Preferences

**구문:** Ignore Platform Preferences( state=0|1 )

**설명:** 플랫폼의 현재 환경 설정을 무시합니다. 생성 후 플랫폼으로 전송될 때 메시지가 무시됩니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Ignore Platform Preferences( 1 ),	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

### Local Data Filter

**구문:** obj &lt;&lt; Local Data Filter

**설명:** 데이터를 특정 그룹 또는 범위로 필터링합니다. 이 플랫폼에서만 사용 가능합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));

```

### New Preset

**구문:** obj = New Preset()

**설명:** 개체에 적용된 옵션과 사용자 정의를 나타내는 익명 사전 설정을 생성합니다. 이 개체를 Apply Preset에 전달하여 같은 유형의 다른 개체에 설정을 복사할 수 있습니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();

```

### Paste Local Data Filter

**구문:** obj &lt;&lt; Paste Local Data Filter

**설명:** 클립보드의 로컬 데이터 필터를 현재 보고서에 적용합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );filter = dist << Local Data Filter( Add Filter( columns( :Region ), Where( :Region == "MW" ) ) );filter << Copy Local Data Filter;dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );Wait( 1 );dist2 << Paste Local Data Filter;

```

### Redo Analysis

**구문:** obj &lt;&lt; Redo Analysis

**설명:** 동일한 분석을 새 창에서 다시 실행합니다. 데이터가 변경된 경우에는 분석결과가 달라집니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = dt << Time Series( Y( :steel shipments ) );obj << Redo Analysis;

```

### Relaunch Analysis

**구문:** obj &lt;&lt; Relaunch Analysis

**설명:** 플랫폼 시작 창을 열고 보고서를 생성하는 데 사용된 설정을 불러옵니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = dt << Time Series( Y( :steel shipments ) );obj << Relaunch Analysis;

```

### Remove Column Switcher

**구문:** obj &lt;&lt; Remove Column Switcher

**설명:** 플랫폼에 추가된 가장 최근 열 전환기를 제거합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher( :marital status, {:sex, :country, :marital status} );Wait( 2 );obj << Remove Column Switcher;

```

### Remove Local Data Filter

**구문:** obj &lt;&lt; Remove Local Data Filter

**설명:** 로컬 데이터 필터가 생성된 경우 로컬 데이터 필터를 제거하고 데이터 테이블의 모든 데이터를 직접 사용하도록 플랫폼을 복원합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dist = dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));Wait( 2 );dist << remove local data filter;

```

### Report

**구문:** obj &lt;&lt; Report; Report( obj )

**설명:** 보고서 개체에 대한 참조를 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = dt << Time Series( Y( :steel shipments ) );r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Report View

**구문:** obj &lt;&lt; Report View( "전체"|"요약" )

**설명:** 보고서 보기는 플랫폼 보고서에 표시되는 상세 수준을 결정합니다. Full은 모든 상세 정보를 표시하고 Summary는 플랫폼에 따라 선택된 콘텐츠만 표시합니다. 사용자 정의된 동작의 경우 표시 상자는 <<Set Summary Behavior 메시지를 지원합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = dt << Time Series( Y( :steel shipments ) );obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**구문:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 데이터 테이블에 테이블 특성으로 저장합니다. 스크립트 이름을 지정할 수 있습니다. Append Suffix 옵션은 스크립트 이름에 숫자 접미사를 추가하여 이름이 같은 기존 스크립트와 구분합니다. Prompt 옵션은 사용자에게 스크립트 이름을 지정하라는 메시지를 표시합니다. Replace 옵션은 이름이 같은 기존 스크립트를 바꿉니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Time Series( Y( :steel shipments ), By( :_bycol ), Group Options( Return Group( 1 ) ) );obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**구문:** obj &lt;&lt; Save ByGroup Script to Journal

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 이 스크립트가 포함된 저널에 버튼을 추가합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Time Series( Y( :steel shipments ), By( :_bycol ), Group Options( Return Group( 1 ) ) );obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**구문:** obj &lt;&lt; Save ByGroup Script to Script Window

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 현재 스크립트 텍스트 창에 추가합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Time Series( Y( :steel shipments ), By( :_bycol ), Group Options( Return Group( 1 ) ) );obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**구문:** obj &lt;&lt; Save Script for All Objects

**설명:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = dt << Time Series( Y( :steel shipments ) );obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**구문:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**설명:** 모든 보고서 개체에 대한 스크립트를 현재 데이터 테이블에 저장합니다. 이 옵션은 창에 여러 보고서가 있을 때 유용합니다. 스크립트 이름을 따옴표로 묶어 지정하는 경우 외에는 첫 번째 플랫폼 이름을 따라 스크립트 이름이 지정됩니다.

**예제 1**

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Time Series( Y( :steel shipments ), By( :_bycol ), Group Options( Return Group( 1 ) ) );obj[1] << Save Script for All Objects To Data Table;

```

**예제 2**

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Time Series( Y( :steel shipments ), By( :_bycol ), Group Options( Return Group( 1 ) ) );obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**구문:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 데이터 테이블에 테이블 특성으로 저장합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = dt << Time Series( Y( :steel shipments ) );obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**구문:** obj &lt;&lt; Save Script to Journal

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 이 스크립트가 포함된 저널에 버튼을 추가합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = dt << Time Series( Y( :steel shipments ) );obj << Save Script to Journal;

```

### Save Script to Report

**구문:** obj &lt;&lt; Save Script to Report

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 보고서 자체에 표시합니다. 수행된 작업에 대한 인쇄된 기록을 유지하려는 경우에 유용합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = dt << Time Series( Y( :steel shipments ) );obj << Save Script to Report;

```

### Save Script to Script Window

**구문:** obj &lt;&lt; Save Script to Script Window

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 현재 스크립트 텍스트 창에 추가합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = dt << Time Series( Y( :steel shipments ) );obj << Save Script to Script Window;

```

### SendToByGroup

**구문:** SendToByGroup( {":Column == level"}, command );

**설명:** 기준 그룹의 각 수준으로 플랫폼 명령을 보내거나 사용자 정의 명령을 표시합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	By( :Sex ),	SendToByGroup( {:sex == "F"}, Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) ) ),	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) ));

```

### SendToEmbeddedScriptable

**구문:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**설명:** 포함된 스크립트 가능 개체로 보내기는 포함된 스크립트 가능 개체의 설정을 복원합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );dt << Life Distribution(	Y( :Time ),	Censor( :Censor ),	Censor Code( 1 ),	<<Fit Weibull,	SendToEmbeddedScriptable(		Dispatch( {"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}		)	));

```

### SendToReport

**구문:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**설명:** Send To Report는 보고서 모양을 사용자 정의하기 위해 Dispatch 명령과 함께 사용됩니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Nominal Distribution( Column( :age ) ),	Continuous Distribution( Column( :weight ) ),	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) ));

```

### Sync to Data Table Changes

**구문:** obj &lt;&lt; Sync to Data Table Changes

**설명:** 제외 항목 및 데이터 변경 사항과 동기화합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );Wait( 1 );dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );dist << Sync To Data Table Changes;

```

### Title

**구문:** obj &lt;&lt; Title( "new title" )

**설명:** 플랫폼의 제목을 설정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = dt << Time Series( Y( :steel shipments ) );obj << Title( "My Platform" );

```

### Top Report

**구문:** obj &lt;&lt; Top Report

**설명:** 보고서의 루트 노드에 대한 참조를 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = dt << Time Series( Y( :steel shipments ) );r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Transform Column

**구문:** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**설명:** 개체의 로컬 컨텍스트(대개 플랫폼)에서 변환 열을 생성합니다. 변환 열은 플랫폼의 수명 동안에만 활성화됩니다.

**JMP추가된 버전:** 16

<b>실행기 항목: 예</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),	Continuous Distribution( Column( :"age^2"n ) ));

```

### View Web XML

**구문:** obj &lt;&lt; View Web XML

**설명:** 대화식 HTML 보고서를 생성하는 데 사용된 XML 코드를 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );xml = obj << View Web XML;

```

### Window View

**구문:** obj = Time Series(...Window View( "Visible"|"Invisible"|"Private" )...) &lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 보고서에 대해 생성할 창 유형을 설정합니다. 기본적으로 Visible 보고서 창이 생성됩니다. Invisible 창은 화면에 나타나지 않지만 Window()와 같은 함수로 검색할 수 있습니다. Private 창은 대부분의 창 메시지에 응답하지만 검색할 수 없으며 보고서 개체를 통해 처리해야 합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

## 연결된 생성자

### Time Series

**구문:** Time Series( Y( column ) )

**설명:** 일정 간격의 시점에서 얻은 일련의 관측값을 모델링합니다. 시계열 그림, 자기상관, 변동도, 스펙트럼 밀도, ARIMA, 계절 ARIMA, 평활 모형 및 예측을 포함합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = dt << Time Series( Y( :steel shipments ) );

```

## 열

### By

**구문:** obj &lt;&lt; By( column(s) )

**설명:** 지정된 열의 각 수준에 대해 별도의 분석을 수행합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Time Series( Y( :steel shipments ), By( :_bycol ), Group Options( Return Group( 1 ) ) );

```

### Input List

**구문:** obj &lt;&lt; Input List( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = dt << Time Series( Y( :steel shipments ) );

```

### Time ID

**구문:** obj &lt;&lt; Time ID( column )

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = dt << Time Series( Y( :steel shipments ) );

```

### X

**구문:** obj &lt;&lt; X( column )

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = dt << Time Series( Y( :steel shipments ) );

```

### Y

**구문:** obj &lt;&lt; Y( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = dt << Time Series( Y( :steel shipments ) );

```

## 항목 메시지

### AR Coefficients

**구문:** obj &lt;&lt; AR Coefficients( state=0|1 )

**설명:** 자기상관 계수 그림을 표시하거나 숨깁니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = dt << Time Series( Y( :Steel Shipments ) );obj << AR Coefficients( 1 );

```

### ARIMA

**구문:** obj &lt;&lt; ARIMA( p, d, q, &lt;No Intercept( 0|1 )&gt;, &lt;No Constrain( 0|1 )&gt;, &lt;Confidence Intervals( level )&gt; )

**설명:** ARIMA 모형을 적합시킵니다. ARIMA(p,d,q) 모형에 대해 순서 p,d 및 q를 설정합니다. 0.95가 아닌 값에 대해 level을 설정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = dt << Time Series( Y( :Steel Shipments ) );obj << arima( 1, 0, 0 );obj << arima( 1, 0, 0, No Intercept( 1 ), No Constrain( 1 ), Confidence Intervals( 0.99 ) );

```

### ARIMA Model Group

**구문:** obj &lt;&lt; ARIMA Model Group( AR(p0,p1),Diff(d0,d1),MA(q0,q1),Seasonal AR(P0,P1),Seasonal Diff(D0,D1),Seasonal MA(Q0,Q1),Seasonal Period(S0,S1),Confidence Intervals(C),Intercept(1),Constrain fit(1) )

**설명:** 순서가 지정된 범위에 있는 ARIMA 모형 집합을 적합시킵니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = dt << Time Series( Y( :Steel Shipments ) );obj << ARIMA Model Group( AR( 0, 2 ), MA( 0, 2 ) );

```

### Autocorrelation

**구문:** obj &lt;&lt; Autocorrelation( state=0|1 )

**설명:** 자기상관 그림을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = dt << Time Series( Y( :Steel Shipments ) );obj << Autocorrelation( 1 );

```

### Autocorrelation Lags

**구문:** obj = Time Series(...Autocorrelation Lags( number=25 )...) &lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 자기상관 계산에 사용된 점 간의 최대 주기 수에 대한 시작 옵션을 설정합니다. 기본값은 "25"입니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = dt << Time Series( Y( :Steel Shipments ), Autocorrelation Lags( 10 ) );

```

### Combine and Save Forecasts from Models

**구문:** obj &lt;&lt; Combine and Save Forecasts from Models

**설명:** 보고서에 있는 모든 모형 적합의 결과를 결합하여 새 데이터 테이블을 생성합니다.

**JMP추가된 버전:** 16

### Connecting Lines

**구문:** obj &lt;&lt; Connecting Lines( state=0|1 )

**설명:** 기본 시계열 그림에 연결된 선을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = dt << Time Series( Y( :Steel Shipments ) );obj << Connecting Lines( 1 );

```

### Cross Correlation

**구문:** obj &lt;&lt; Cross Correlation( state=0|1 )

**설명:** 교차 상관 그림을 표시하거나 숨깁니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );obj = dt << Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );obj << Cross Correlation( 1 );

```

### Damped-Trend Linear Exponential Smoothing

**구문:** obj &lt;&lt; Damped-Trend Linear Exponential Smoothing( Zero to One|Unconstrained|Stable Invertible|Custom( (Damping|Level)( Unconstrained| Bounded( lower, upper )| Fixed( value ) )), &lt;Confidence Intervals(level)&gt; )

**설명:** 진폭감소추세 평활 모형을 적합시킵니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );Time Series( Y( :Steel Shipments ), "Damped-Trend Linear Exponential Smoothing"n( Zero to One ) );

```

### Difference

**구문:** obj &lt;&lt; Difference( d, &lt;D&gt;, &lt;S&gt; )

**설명:** 차분 계열을 계산하고 차분 계열의 자기상관 및 편자기상관 그래프를 생성합니다. 차분 계열은  (1-B)^d \* (1-B^S)^D \* y_t 로 지정되며, 여기서 y_t는 시계열, B는 B \* y_t = y_(t-1)로 정의된 후방 연산자, d는 비계절 차분 차수, D는 계절 차분 차수, S는 주기당 관측값 수입니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = dt << Time Series( Y( :Steel Shipments ) );obj << Difference( 1 );obj << Difference( 1, 1, 12 );

```

### Double Exponential Smoothing

**구문:** obj &lt;&lt; Double Exponential Smoothing( Zero to One|Unconstrained|Stable Invertible|Custom( Level( Unconstrained| Bounded( lower, upper )| Fixed( value ) )), &lt;Confidence Intervals(level)&gt; )

**설명:** 이중 지수 평활 모형 적합을 호출합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );Time Series(	Y( :Steel Shipments ),	Double Exponential Smoothing( Zero to One ),	Double Exponential Smoothing( Unconstrained ),	Double Exponential Smoothing( Stable Invertible ),	Double Exponential Smoothing( Custom( Level( Bounded( 0.8, 1 ) ) ) ),	Double Exponential Smoothing( Custom( Level( Fixed( 0 ) ) ) ),	Double Exponential Smoothing( Custom( Level( Unconstrained ) ) ));

```

### Fit Recommended ETS

**구문:** obj &lt;&lt; Fit Recommended ETS( Period( m ),Constrained( "Yes"|"No" ) )

**설명:** 권장되는 모든 상태 공간 평활 모형을 적합시킵니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Seriesg.jmp" );obj = dt << Time Series( Y( :Passengers ) );obj << Fit Recommended ETS( Period( 12 ), Constrained( "Yes" ) );

```

### Forecast Periods

**구문:** obj = Time Series(...Forecast Periods( number=25 )...) &lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 예측 보고서의 예측 단계 수에 대한 시작 옵션을 설정합니다. 기본값은 "25"입니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = dt << Time Series( Y( :Steel Shipments ), Forecast Periods( 10 ) );obj << ARIMA( 1, 0, 0 );

```

### Forecast on Holdback

**구문:** obj = Time Series(...Forecast on Holdback( state=0|1 )...)

**설명:** 예측이 미래 관측값에 대해 수행되는지 아니면 홀드백 관측값에 대해 수행되는지 결정합니다. 이 옵션을 선택하면 예측 주기 옵션에 지정된 수에 따라 결정된 홀드백 집합에서 예측이 수행됩니다.

**JMP추가된 버전:** 16

<b>실행기 항목: 예</b>

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = dt << Time Series( Y( :Steel Shipments ), Forecast on Holdback( 1 ) );obj << arima( 1, 0, 0 );obj << Number of Forecast Periods( 100 );

```

### Generate Simulation

**구문:** obj &lt;&lt; Generate Simulation( id, seed, length, n )

**설명:** 적합된 모형의 미래 궤적 여러 개가 포함된 데이터 테이블을 생성합니다. 테이블 참조를 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = dt << Time Series( Y( :Steel Shipments ) );obj << arima( 1, 0, 0 );dt = obj << Generate Simulation( 1, 11111, 100, 5 );

```

### Get Model Specs

**구문:** obj &lt;&lt; Get Model Specs

**설명:** 각각 모형 규격에 의해 이름이 지정된 명명된 모형 결과 목록을 반환합니다. 출력에는 추정값과 표준 오차가 포함됩니다. ARIMA, 계절 ARIMA, 모든 평활 모형 및 전이 함수 모형에 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Seriesg.jmp" );obj = dt << Time Series( Y( :Log Passengers ) );obj << Seasonal ARIMA( 0, 1, 1, 0, 1, 1, 12, No Intercept( 1 ) );l = obj << Get Model Specs;Show( l );

```

### Get Models

**구문:** obj &lt;&lt; Get Models

**설명:** 명명된 모형 결과 목록을 반환합니다. 각 모형 결과는 모형 설명으로 명명됩니다. 출력에는 추정값 및 표준 오차가 포함됩니다. ARIMA, 계절 ARIMA, 모든 평활 모형 및 전이 함수 모형에 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Seriesg.jmp" );obj = dt << Time Series( Y( :Log Passengers ) );obj << Seasonal ARIMA( 0, 1, 1, 0, 1, 1, 12, No Intercept( 1 ) );l = obj << Get Models;Show( l );

```

### Hide All Reports

**구문:** obj &lt;&lt; Hide All Reports

**설명:** 보고서 창에서 모형 비교 테이블에 나열된 모든 모형을 숨깁니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Seriesg.jmp" );obj = dt << Time Series( Y( :Passengers ) );obj << Fit Recommended ETS( Period( 12 ), Constrained( "Yes" ) );obj << Hide All Model Reports;

```

### Input Series

**구문:** obj &lt;&lt; Input Series( Column, &lt;ARIMA( )&gt;| &lt;Prewhitening( )&gt; ... )

**설명:** 입력 계열로 전송된 메시지를 그룹화합니다. 참고: 입력 목록 변수를 지정해야 합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );obj = dt << Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );obj << Input Series( :Input Gas Rate, ARIMA( 1, 0, 0 ) );

```

### Keep Best Models

**구문:** obj &lt;&lt; Keep Best Models( "AIC"|"SBC" )

**설명:** 개별 모형 계층 중 최적 모형을 유지하고 나머지 모형을 제거합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Seriesg.jmp" );obj = dt << Time Series( Y( :Passengers ) );obj << Fit Recommended ETS( Period( 12 ), Constrained( "Yes" ) );Wait( 1 );obj << Keep Best Models( "AIC" );

```

### Lambda for Box-Cox

**구문:** obj = Time Series(...Lambda for Box-Cox( number=0 )...)

**설명:** 원래 데이터의 Box-Cox 변환에 사용되는 람다 모수를 지정합니다. 기본값은 "0"입니다.

**JMP추가된 버전:** 16

<b>실행기 항목: 예</b>

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = dt << Time Series(	Y( :Steel Shipments ),	Name( "Use Box-Cox Transformation" )(1),	Name( "Lambda for Box-Cox" )(0));obj << arima( 1, 0, 0 );obj << Number of Forecast Periods( 100 );

```

### Linear Exponential Smoothing

**구문:** obj &lt;&lt; Linear Exponential Smoothing( Zero to One|Unconstrained|Stable Invertible|Custom( (Trend|Level)( Unconstrained| Bounded( lower, upper )| Fixed( value ) )), &lt;Confidence Intervals(level)&gt; )

**설명:** 선형 지수 평활 모형을 적합시킵니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );Time Series(	Y( :Steel Shipments ),	Linear Exponential Smoothing( Zero to One ),	Linear Exponential Smoothing( Unconstrained ),	Linear Exponential Smoothing( Stable Invertible ),	Linear Exponential Smoothing( Custom( Level( Bounded( 0.8, 1 ) ), Trend( Bounded( 0.7, 0.9 ) ) ) ),	Linear Exponential Smoothing( Custom( Level( Fixed( 0 ) ), Trend( Fixed( .3 ) ) ) ),	Linear Exponential Smoothing( Custom( Level( Unconstrained ), Trend( Fixed( .4 ) ) ) ));

```

### Maximum Iterations

**구문:** obj &lt;&lt; Maximum Iterations( maxIter=250 )

**설명:** ARIMA 모형 적합에 사용된 미래 최적화에 대한 최대 반복 수를 재설정합니다. 기본값은 "250"입니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = dt << Time Series( Y( :Steel Shipments ) );obj << Maximum Iterations( 2 );obj << ARIMA( 1, 0, 0 );

```

### Mean Line

**구문:** obj &lt;&lt; Mean Line( state=0|1 )

**설명:** 기본 시계열 그림에 평균 선을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = dt << Time Series( Y( :Steel Shipments ) );obj << Mean Line( 1 );

```

### Model Comparison Report

**구문:** obj &lt;&lt; Model Comparison Report

**설명:** 모형 비교 보고서 설정을 구성합니다.

### Number of Forecast Periods

**구문:** obj &lt;&lt; Number of Forecast Periods( number )

**설명:** 예측 주기 수를 재설정하고 예측 보고서를 업데이트합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = dt << Time Series( Y( :Steel Shipments ) );obj << arima( 1, 0, 0 );obj << Number of Forecast Periods( 100 );

```

### Partial Autocorrelation

**구문:** obj &lt;&lt; Partial Autocorrelation( state=0|1 )

**설명:** 편자기상관 그림을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = dt << Time Series( Y( :Steel Shipments ) );obj << Partial Autocorrelation( 1 );

```

### Prewhitening

**구문:** obj &lt;&lt; Prewhitening( Order(p, d, q), Seasonal(P, D, Q, S) )

**설명:** 사전백색화 순서를 설정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );obj = dt << Time Series(	Y( :Output CO2 ),	Input List( :Input Gas Rate ),	Input Series( :Input Gas Rate, Prewhitening( Order( 1, 0, 0 ), Seasonal( 0, 0, 0, 12 ) ) ));

```

### Remove All Simulation

**구문:** obj &lt;&lt; Remove All Simulation

**설명:** 모든 시뮬레이션된 미래 궤적을 제거합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = dt << Time Series( Y( :Steel Shipments ) );obj << arima( 1, 0, 0 );obj << arima( 2, 0, 0 );obj << Simulate More( 1, 2 );obj << Simulate More( 2, 3 );obj << Remove All Simulation;

```

### Remove Cycle

**구문:** obj &lt;&lt; Remove Cycle( Units per Cycle( number ), Has Constant( 0|1 ) )

**설명:** 코사인 함수를 사용하여 순환 성분을 추정한 다음 데이터에서 제거합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Monthly Sales.jmp" );obj = dt << Time Series( Y( :Sales ) );obj << Remove Cycle( Units per Cycle( 12 ), Has Constant( 1 ) );

```

### Remove Fit

**구문:** obj &lt;&lt; Remove Fit

**JMP추가된 버전:** 16

### Remove Linear Trend

**구문:** obj &lt;&lt; Remove Linear Trend

**설명:** 선형 추세를 추정한 다음 데이터에서 제거합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Monthly Sales.jmp" );obj = dt << Time Series( Y( :Sales ) );obj << Remove Linear Trend;

```

### Remove Model Simulation

**구문:** obj &lt;&lt; Remove Model Simulation( id )

**설명:** 적합 모형의 시뮬레이션된 미래 궤적을 제거합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = dt << Time Series( Y( :Steel Shipments ) );obj << arima( 1, 0, 0 );obj << arima( 2, 0, 0 );obj << Simulate More( 1, 2 );obj << Simulate More( 2, 3 );obj << Remove Model Simulation( 1 );

```

### Save Spectral Density

**구문:** obj &lt;&lt; Save Spectral Density

**설명:** 테이블에 스펙트럼 밀도를 저장합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = dt << Time Series( Y( :Steel Shipments ) );obj << Save Spectral Density;

```

### Seasonal ARIMA

**구문:** obj &lt;&lt; Seasonal ARIMA( p, d, q, P, D, Q, S, &lt;No Intercept( 0|1 )&gt;, &lt;No Constrain( 0|1 )&gt;, &lt;Confidence Intervals( level )&gt; )

**설명:** 계절 ARIMA 모형을 적합시킵니다. ARIMA(p,d,q)(P,D,Q)S 모형에 대해 순서 p,d,q,P,D,Q 및 S를 설정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = dt << Time Series( Y( :Steel Shipments ) );obj << seasonal arima( 1, 0, 0, 1, 0, 0, 12 );obj << seasonal arima(	1,	0,	0,	1,	0,	0,	12,	No Intercept( 1 ),	No Constrain( 1 ),	Confidence Intervals( 0.99 ));

```

### Seasonal Exponential Smoothing

**구문:** obj &lt;&lt; Seasonal Exponential Smoothing( Zero to One|Unconstrained|Custom( (Level| Seasonal)( Unconstrained| Bounded( lower, upper )| Fixed( value ) )), &lt;Confidence Intervals(level)&gt; )

**설명:** 계절 지수 평활 모형을 적합시킵니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );Time Series(	Y( :Steel Shipments ),	Seasonal Exponential Smoothing( 12, Custom( Level( Bounded( 0, 1 ) ), Seasonal( Bounded( 0, 1 ) ) ) ));

```

### Set Seed

**구문:** obj &lt;&lt; Set Seed( seed )

**설명:** 난수 시드값을 설정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = dt << Time Series( Y( :Steel Shipments ) );obj << arima( 1, 0, 0 );obj << Set Seed( 1111 );obj << Simulate Once( 1 );obj << Set Seed( 1111 );obj << Simulate Once( 1 );

```

### Show Box-Cox Transformation Plot

**구문:** obj &lt;&lt; Show Box-Cox Transformation Plot( state=0|1 )

**JMP추가된 버전:** 16

### Show Lag Plot

**구문:** obj &lt;&lt; Show Lag Plot( state=0|1 )

### Show Points

**구문:** obj &lt;&lt; Show Points( state=0|1 )

**설명:** 기본 시계열 그림에 점을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = dt << Time Series( Y( :Steel Shipments ) );obj << Show Points( 1 );

```

### Simple Exponential Smoothing

**구문:** obj &lt;&lt; Simple Exponential Smoothing( Zero to One|Unconstrained|Stable Invertible|Custom( Level( Unconstrained| Bounded( lower, upper )| Fixed( value ) )), &lt;Confidence Intervals(level)&gt; )

**설명:** 단순 지수 평활 모형을 적합시킵니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );Time Series(	Y( :Steel Shipments ),	Simple Exponential Smoothing( Zero to One ),	Simple Exponential Smoothing( Unconstrained ),	Simple Exponential Smoothing( Stable Invertible ),	Simple Exponential Smoothing( Custom( Level( Bounded( 0.8, 1 ) ) ) ),	Simple Exponential Smoothing( Custom( Level( Fixed( 0 ) ) ) ),	Simple Exponential Smoothing( Custom( Level( Unconstrained ) ) ));

```

### Simple Moving Average

**구문:** obj &lt;&lt; Simple Moving Average

**설명:** 추가 인수가 없는 경우 단순 이동 평균 지정 대화상자를 호출하고 모형을 적합시킵니다. 단순 이동 평균 모형 스크립트 가능 항목에 인수를 전달합니다. 반환 값은 단순 이동 평균 모형 스크립트 가능 항목 핸들입니다. 인수에 대한 자세한 내용은 단순 이동 평균 스크립트 가능 항목을 참조하십시오.

```jsl

dt = Open( "$SAMPLE_DATA/Stock Prices.jmp" );obj = dt << Time Series( Y( :Close ) );sma = obj << Simple Moving Average;sma << Add Model( 10 );

```

### Simple Moving Average Centering Method

**구문:** obj &lt;&lt; Simple Moving Average Centering Method( "중심화 안 함"|"중심화"|"짝수 항에 대해 중심화 및 이중 평활" )

### Simulate More

**구문:** obj &lt;&lt; Simulate More( id, n )

**설명:** 적합 모형의 미래 궤적 여러 개를 시뮬레이션합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = dt << Time Series( Y( :Steel Shipments ) );obj << arima( 1, 0, 0 );obj << arima( 2, 0, 0 );obj << Simulate More( 1, 2 );obj << Simulate More( 2, 3 );

```

### Simulate Once

**구문:** obj &lt;&lt; Simulate Once( id )

**설명:** 적합 모형의 미래 궤적 하나를 시뮬레이션합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = dt << Time Series( Y( :Steel Shipments ) );obj << arima( 1, 0, 0 );obj << arima( 2, 0, 0 );obj << Simulate Once( 1 );obj << Simulate Once( 2 );

```

### Spectral Density

**구문:** obj &lt;&lt; Spectral Density( state=0|1 )

**설명:** 스펙트럼 밀도 그래프를 표시하거나 숨깁니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = dt << Time Series( Y( :Steel Shipments ) );obj << Spectral Density( 1 );

```

### State Space Smoothing

**구문:** obj &lt;&lt; State Space Smoothing( Error Type( "Additive"|"Multiplicative" ),Trend Type( "None"|"Additive"|"Multiplicative" ),Seasonal Type( "None"|"Additive"|"Multiplicative" ),Damped( "Yes"|"No" ),Period( m ),Constrained( "Yes"|"No" ) )

**설명:** 상태 공간 평활 모형을 적합시킵니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Seriesg.jmp" );obj = dt << Time Series( Y( :Passengers ) );obj << State Space Smoothing(	Error Type( "Multiplicative" ),	Trend Type( "Additive" ),	Seasonal Type( "Multiplicative" ),	Damped( "No" ),	Period( 12 ),	Constrained( "Yes" ));

```

### Time Series Graph

**구문:** obj &lt;&lt; Time Series Graph( state=0|1 )

**설명:** 기본 시계열 그림을 설정 또는 해제합니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = dt << Time Series( Y( :Steel Shipments ) );obj << Time Series Graph( 1 );

```

### Transfer Function

**구문:** obj &lt;&lt; Transfer Function( Order(p, d, q), Seasonal(P, D, Q, S), input1(Order(p, d, q), Seasonal(P, D, Q, S), Lag(lag)), &lt;input2(Order(p, d, q), Seasonal(P, D, Q, S), Lag(lag))&gt;, ..., &lt;No Intercept(flag1)&gt;, &lt;No Constrain(flag2)&gt;, &lt;Alternative Parameterization( flag3 )&gt;, &lt;Confidence Intervals( level )&gt;, &lt;Number of Forecast Periods( nAhead )&gt; )

**설명:** 전이 함수 모형을 적합시킵니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );obj = dt << Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );obj << Transfer Function(	Order( 2, 0, 0 ),	Seasonal( 0, 0, 0, 0 ),	:Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ));obj << Transfer Function(	Order( 2, 0, 0 ),	Seasonal( 0, 0, 0, 0 ),	:Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ),	No Intercept( 1 ),	Alternative Parameterization( 1 ),	Confidence Intervals( 0.99 ),	Number of Forecast Periods( 10 ));

```

### Use Box-Cox Transformation

**구문:** obj = Time Series(...Use Box-Cox Transformation( state=0|1 )...)

**설명:** Box-Cox에 대한 람다 옵션에 지정된 람다로 Box-Cox 변환을 사용하여 원래 데이터를 변환합니다. 이 옵션을 선택하면 변환된 데이터에서 시계열 보고서의 모든 분석이 수행됩니다.

**JMP추가된 버전:** 16

<b>실행기 항목: 예</b>

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = dt << Time Series( Y( :Steel Shipments ), Name( "Use Box-Cox Transformation" )(1) );obj << arima( 1, 0, 0 );obj << Number of Forecast Periods( 100 );

```

### Variogram

**구문:** obj &lt;&lt; Variogram( state=0|1 )

**설명:** 시계열 기본 진단 보고서에 변동도 그림을 표시하거나 숨깁니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = dt << Time Series( Y( :Steel Shipments ) );obj << Variogram( 1 );

```

### Winters Method

**구문:** obj &lt;&lt; Winters Method( Zero to One|Unconstrained|Custom( (Level|Seasonal|Trend)( Unconstrained| Seasonal| Bounded( lower, upper )| Fixed( value ) )), &lt;Confidence Intervals(level)&gt; )

**설명:** Winter 방법을 사용하여 평활 모형을 적합시킵니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );Time Series(	Y( :Steel Shipments ),	Winters Method(		12,		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ), Seasonal( Bounded( 0, 1 ) ) )	));

```

### X11

**구문:** obj &lt;&lt; X11( Additive|Multiplicative )

**설명:** 미국 인구조사국(US Bureau of the Census)에서 개발한 X-11 방법을 사용하여 추세 및 계절 효과를 제거합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Monthly Sales.jmp" );obj = dt << Time Series( X( :Date ), Y( :Sales ) );obj << X11( Additive );

```

## Damped-Trend Linear Exponential Smoothing

### 항목 메시지

#### Actual

**구문:** obj &lt;&lt; Actual( state=0|1 )

**설명:** Save Columns 명령을 사용하여 저장할 실제값 데이터 열을 선택합니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 0, 0, Actual( 1 ), Save Columns );

```

#### Autocorrelations

**구문:** obj &lt;&lt; Autocorrelations( state=0|1 )

**설명:** 자기상관 그림을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series(	Y( :Steel Shipments ),	Winters Method( 12, Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ), Autocorrelations( 1 ) ));(obj << report)["Residuals"] << Close( 0 );(obj << report)["Model Comparison"] << Close( 1 );

```

#### Confidence Intervals

**구문:** obj &lt;&lt; Confidence Intervals( number )

#### Create SAS Job

**구문:** obj &lt;&lt; Create SAS Job

**설명:** SAS를 시작하고 PROC ARIMA에서 분석을 실행하기 위한 SAS 작업을 생성합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj2 = obj << Arima( 1, 0, 0 );obj2 << Create SAS Job;

```

#### Innovations

**구문:** obj &lt;&lt; Innovations( state=0|1 )

**설명:** 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 16

#### Lower Confidence Limit

**구문:** obj &lt;&lt; Lower Confidence Limit( state=0|1 )

**설명:** Save Columns 명령을 사용하여 저장할 95% 신뢰 하한 값 열을 선택합니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 0, 0, Lower Confidence Limit( 1 ), Save Columns );

```

#### No Constrain

**구문:** obj &lt;&lt; No Constrain( state=0|1 )

**설명:** ARIMA 모형을 시작할 때 항상 안정 영역 및 가역 영역 내에 남도록 자기회귀 모수와 이동 평균 모수에 대한 제약 조건을 올립니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 1, 0, No Constrain( 1 ) );

```

#### No Intercept

**구문:** obj &lt;&lt; No Intercept( state=0|1 )

**설명:** ARIMA 모형을 시작할 때 절편을 0으로 설정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 1, 0, No Intercept( 1 ) );

```

#### Partial Autocorrelations

**구문:** obj &lt;&lt; Partial Autocorrelations( state=0|1 )

**설명:** 편자기상관 그림을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series(	Y( :Steel Shipments ),	Winters Method(		12,		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),		Partial Autocorrelations( 1 )	));(obj << report)["Residuals"] << Close( 0 );(obj << report)["Model Comparison"] << Close( 1 );

```

#### Plot

**구문:** obj &lt;&lt; Plot( state=0|1 )

**설명:** 잔차 통계량 그림을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series(	Y( :Steel Shipments ),	Winters Method( 12, Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ), Plot( 1 ) ));(obj << report)["Residuals"] << Close( 0 );(obj << report)["Model Comparison"] << Close( 1 );

```

#### Predicted

**구문:** obj &lt;&lt; Predicted( state=0|1 )

**설명:** Save Columns 명령을 사용하여 저장할 예측값 데이터 열을 선택합니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 0, 0, Predicted( 1 ), Save Columns );

```

#### Prediction Interval

**구문:** obj &lt;&lt; Prediction Interval( level )

**설명:** ARIMA 모형 예측에 대한 신뢰 구간의 크기를 설정합니다. 기본 크기는 0.95입니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 1, 0, Forecasting Interval( 0.99 ) );

```

#### Remove Fit

**구문:** obj &lt;&lt; Remove Fit

**JMP추가된 버전:** 16

#### Residuals

**구문:** obj &lt;&lt; Residuals( state=0|1 )

**설명:** Save Columns 명령을 사용하여 저장할 잔차 값 데이터 열을 선택합니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 0, 0, Residuals( 1 ), Save Columns );

```

#### Save Columns

**구문:** obj &lt;&lt; Save Columns

**설명:** 실제값 및 예측값과 함께 표준 오차, 잔차 및 반응에 대한 95% 예측 구간이 포함된 데이터 테이블을 새로 생성합니다. 이 옵션은 모든 ARIMA, 평활 및 전이 함수 모형에 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj2 = obj << Arima( 1, 0, 0 );obj2 << Save Columns;

```

#### Save Prediction Formula

**구문:** obj &lt;&lt; Save Prediction Formula

**설명:** 예측 계산식을 데이터 테이블의 새 열에 저장합니다. 이 옵션은 모든 ARIMA 및 평활 모형에 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj2 = obj << Arima( 1, 0, 0 );obj2 << Save Prediction Formula;

```

#### Show Confidence Interval

**구문:** obj &lt;&lt; Show Confidence Interval( state=0|1 )

**설명:** 시계열 예측 그림에 예측 구간을 표시하거나 숨깁니다. 이 옵션은 모든 ARIMA 및 평활 모형에 사용할 수 있습니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj2 = obj << Simple Exponential Smoothing( Zero to One );obj2 << Show Confidence Interval( 0 );

```

#### Show Points

**구문:** obj &lt;&lt; Show Points( state=0|1 )

**설명:** 시계열 예측 그림에 점을 표시하거나 숨깁니다. 이 옵션은 모든 ARIMA 및 평활 모형에 사용할 수 있습니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 0, 0, Show Points( 1 ) );(obj << report)["Model Comparison"] << Close( 1 );

```

#### Show Prediction Interval

**구문:** obj &lt;&lt; Show Prediction Interval( state=0|1 )

**설명:** 시계열 예측 그림에 예측 구간을 표시하거나 숨깁니다. 이 옵션은 모든 ARIMA 및 평활 모형에 사용할 수 있습니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj2 = obj << Simple Exponential Smoothing( Zero to One );obj2 << Show Prediction Interval( 0 );

```

#### Std Error of Predicted

**구문:** obj &lt;&lt; Std Error of Predicted( state=0|1 )

**설명:** Save Columns 명령을 사용하여 저장할 예측값 표준 오차 데이터 열을 선택합니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 0, 0, Std Error of Predicted( 1 ), Save Columns );

```

#### Time

**구문:** obj &lt;&lt; Time( state=0|1 )

**설명:** Save Columns 명령을 사용하여 저장할 시간 데이터 열을 선택합니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ), Time ID( :Date ) );obj << Arima( 1, 0, 0, Time( 0 ), Save Columns );

```

#### Upper Confidence Limit

**구문:** obj &lt;&lt; Upper Confidence Limit( state=0|1 )

**설명:** Save Columns 명령을 사용하여 저장할 95% 신뢰 상한 값 열을 선택합니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 0, 0, Upper Confidence Limit( 1 ), Save Columns );

```

#### Variogram

**구문:** obj &lt;&lt; Variogram( state=0|1 )

**설명:** 변동도를 표시하거나 숨깁니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series(	Y( :Steel Shipments ),	Winters Method( 12, Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ), Variogram( 1 ) ));(obj << report)["Residuals"] << Close( 0 );(obj << report)["Model Comparison"] << Close( 1 );

```

## Difference

### 항목 메시지

#### Autocorrelation

**구문:** obj &lt;&lt; Autocorrelation( state=0|1 )

**설명:** 차분 보고서에 자기상관을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Difference( 1, 0, 0, Autocorrelation( 1 ) );

```

#### Connecting Lines

**구문:** obj &lt;&lt; Connecting Lines( state=0|1 )

**설명:** 차분 그래프에 점을 연결하는 선을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Difference( 1, 0, 0, Connecting Lines( 1 ) );

```

#### Difference Graph

**구문:** obj &lt;&lt; Difference Graph( state=0|1 )

**설명:** 차분 그래프를 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Difference( 1, 0, 0, Difference Graph( 1 ) );

```

#### Mean Line

**구문:** obj &lt;&lt; Mean Line( state=0|1 )

**설명:** 차분 그래프에 평균 선을 표시하거나 숨깁니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Difference( 1, 0, 0, Mean Line( 1 ) );

```

#### Partial Autocorrelation

**구문:** obj &lt;&lt; Partial Autocorrelation( state=0|1 )

**설명:** 차분 보고서에 편자기상관을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Difference( 1, 0, 0, Partial Autocorrelation( 1 ) );

```

#### Remove Fit

**구문:** obj &lt;&lt; Remove Fit

**JMP추가된 버전:** 16

#### Save

**구문:** obj &lt;&lt; Save

**설명:** 차분 값을 데이터 테이블의 새 열에 저장합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Difference( 1, 0, 0, Save );

```

#### Show Points

**구문:** obj &lt;&lt; Show Points( state=0|1 )

**설명:** 차분 그래프에 점을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Difference( 1, 0, 0, Show Points( 1 ) );

```

#### Variogram

**구문:** obj &lt;&lt; Variogram( state=0|1 )

**설명:** 차분 보고서에 변동도를 표시하거나 숨깁니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Difference( 1, 0, 0, Variogram( 1 ) );

```

## Double (Brown) Exponential Smoothing

### 항목 메시지

#### Actual

**구문:** obj &lt;&lt; Actual( state=0|1 )

**설명:** Save Columns 명령을 사용하여 저장할 실제값 데이터 열을 선택합니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 0, 0, Actual( 1 ), Save Columns );

```

#### Autocorrelations

**구문:** obj &lt;&lt; Autocorrelations( state=0|1 )

**설명:** 자기상관 그림을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series(	Y( :Steel Shipments ),	Winters Method( 12, Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ), Autocorrelations( 1 ) ));(obj << report)["Residuals"] << Close( 0 );(obj << report)["Model Comparison"] << Close( 1 );

```

#### Confidence Intervals

**구문:** obj &lt;&lt; Confidence Intervals( number )

#### Create SAS Job

**구문:** obj &lt;&lt; Create SAS Job

**설명:** SAS를 시작하고 PROC ARIMA에서 분석을 실행하기 위한 SAS 작업을 생성합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj2 = obj << Arima( 1, 0, 0 );obj2 << Create SAS Job;

```

#### Innovations

**구문:** obj &lt;&lt; Innovations( state=0|1 )

**설명:** 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 16

#### Lower Confidence Limit

**구문:** obj &lt;&lt; Lower Confidence Limit( state=0|1 )

**설명:** Save Columns 명령을 사용하여 저장할 95% 신뢰 하한 값 열을 선택합니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 0, 0, Lower Confidence Limit( 1 ), Save Columns );

```

#### No Constrain

**구문:** obj &lt;&lt; No Constrain( state=0|1 )

**설명:** ARIMA 모형을 시작할 때 항상 안정 영역 및 가역 영역 내에 남도록 자기회귀 모수와 이동 평균 모수에 대한 제약 조건을 올립니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 1, 0, No Constrain( 1 ) );

```

#### No Intercept

**구문:** obj &lt;&lt; No Intercept( state=0|1 )

**설명:** ARIMA 모형을 시작할 때 절편을 0으로 설정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 1, 0, No Intercept( 1 ) );

```

#### Partial Autocorrelations

**구문:** obj &lt;&lt; Partial Autocorrelations( state=0|1 )

**설명:** 편자기상관 그림을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series(	Y( :Steel Shipments ),	Winters Method(		12,		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),		Partial Autocorrelations( 1 )	));(obj << report)["Residuals"] << Close( 0 );(obj << report)["Model Comparison"] << Close( 1 );

```

#### Plot

**구문:** obj &lt;&lt; Plot( state=0|1 )

**설명:** 잔차 통계량 그림을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series(	Y( :Steel Shipments ),	Winters Method( 12, Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ), Plot( 1 ) ));(obj << report)["Residuals"] << Close( 0 );(obj << report)["Model Comparison"] << Close( 1 );

```

#### Predicted

**구문:** obj &lt;&lt; Predicted( state=0|1 )

**설명:** Save Columns 명령을 사용하여 저장할 예측값 데이터 열을 선택합니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 0, 0, Predicted( 1 ), Save Columns );

```

#### Prediction Interval

**구문:** obj &lt;&lt; Prediction Interval( level )

**설명:** ARIMA 모형 예측에 대한 신뢰 구간의 크기를 설정합니다. 기본 크기는 0.95입니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 1, 0, Forecasting Interval( 0.99 ) );

```

#### Remove Fit

**구문:** obj &lt;&lt; Remove Fit

**JMP추가된 버전:** 16

#### Residuals

**구문:** obj &lt;&lt; Residuals( state=0|1 )

**설명:** Save Columns 명령을 사용하여 저장할 잔차 값 데이터 열을 선택합니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 0, 0, Residuals( 1 ), Save Columns );

```

#### Save Columns

**구문:** obj &lt;&lt; Save Columns

**설명:** 실제값 및 예측값과 함께 표준 오차, 잔차 및 반응에 대한 95% 예측 구간이 포함된 데이터 테이블을 새로 생성합니다. 이 옵션은 모든 ARIMA, 평활 및 전이 함수 모형에 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj2 = obj << Arima( 1, 0, 0 );obj2 << Save Columns;

```

#### Save Prediction Formula

**구문:** obj &lt;&lt; Save Prediction Formula

**설명:** 예측 계산식을 데이터 테이블의 새 열에 저장합니다. 이 옵션은 모든 ARIMA 및 평활 모형에 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj2 = obj << Arima( 1, 0, 0 );obj2 << Save Prediction Formula;

```

#### Show Confidence Interval

**구문:** obj &lt;&lt; Show Confidence Interval( state=0|1 )

**설명:** 시계열 예측 그림에 예측 구간을 표시하거나 숨깁니다. 이 옵션은 모든 ARIMA 및 평활 모형에 사용할 수 있습니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj2 = obj << Simple Exponential Smoothing( Zero to One );obj2 << Show Confidence Interval( 0 );

```

#### Show Points

**구문:** obj &lt;&lt; Show Points( state=0|1 )

**설명:** 시계열 예측 그림에 점을 표시하거나 숨깁니다. 이 옵션은 모든 ARIMA 및 평활 모형에 사용할 수 있습니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 0, 0, Show Points( 1 ) );(obj << report)["Model Comparison"] << Close( 1 );

```

#### Show Prediction Interval

**구문:** obj &lt;&lt; Show Prediction Interval( state=0|1 )

**설명:** 시계열 예측 그림에 예측 구간을 표시하거나 숨깁니다. 이 옵션은 모든 ARIMA 및 평활 모형에 사용할 수 있습니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj2 = obj << Simple Exponential Smoothing( Zero to One );obj2 << Show Prediction Interval( 0 );

```

#### Std Error of Predicted

**구문:** obj &lt;&lt; Std Error of Predicted( state=0|1 )

**설명:** Save Columns 명령을 사용하여 저장할 예측값 표준 오차 데이터 열을 선택합니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 0, 0, Std Error of Predicted( 1 ), Save Columns );

```

#### Time

**구문:** obj &lt;&lt; Time( state=0|1 )

**설명:** Save Columns 명령을 사용하여 저장할 시간 데이터 열을 선택합니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ), Time ID( :Date ) );obj << Arima( 1, 0, 0, Time( 0 ), Save Columns );

```

#### Upper Confidence Limit

**구문:** obj &lt;&lt; Upper Confidence Limit( state=0|1 )

**설명:** Save Columns 명령을 사용하여 저장할 95% 신뢰 상한 값 열을 선택합니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 0, 0, Upper Confidence Limit( 1 ), Save Columns );

```

#### Variogram

**구문:** obj &lt;&lt; Variogram( state=0|1 )

**설명:** 변동도를 표시하거나 숨깁니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series(	Y( :Steel Shipments ),	Winters Method( 12, Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ), Variogram( 1 ) ));(obj << report)["Residuals"] << Close( 0 );(obj << report)["Model Comparison"] << Close( 1 );

```

## Linear (Holt) Exponential Smoothing

### 항목 메시지

#### Actual

**구문:** obj &lt;&lt; Actual( state=0|1 )

**설명:** Save Columns 명령을 사용하여 저장할 실제값 데이터 열을 선택합니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 0, 0, Actual( 1 ), Save Columns );

```

#### Autocorrelations

**구문:** obj &lt;&lt; Autocorrelations( state=0|1 )

**설명:** 자기상관 그림을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series(	Y( :Steel Shipments ),	Winters Method( 12, Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ), Autocorrelations( 1 ) ));(obj << report)["Residuals"] << Close( 0 );(obj << report)["Model Comparison"] << Close( 1 );

```

#### Confidence Intervals

**구문:** obj &lt;&lt; Confidence Intervals( number )

#### Create SAS Job

**구문:** obj &lt;&lt; Create SAS Job

**설명:** SAS를 시작하고 PROC ARIMA에서 분석을 실행하기 위한 SAS 작업을 생성합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj2 = obj << Arima( 1, 0, 0 );obj2 << Create SAS Job;

```

#### Innovations

**구문:** obj &lt;&lt; Innovations( state=0|1 )

**설명:** 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 16

#### Lower Confidence Limit

**구문:** obj &lt;&lt; Lower Confidence Limit( state=0|1 )

**설명:** Save Columns 명령을 사용하여 저장할 95% 신뢰 하한 값 열을 선택합니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 0, 0, Lower Confidence Limit( 1 ), Save Columns );

```

#### No Constrain

**구문:** obj &lt;&lt; No Constrain( state=0|1 )

**설명:** ARIMA 모형을 시작할 때 항상 안정 영역 및 가역 영역 내에 남도록 자기회귀 모수와 이동 평균 모수에 대한 제약 조건을 올립니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 1, 0, No Constrain( 1 ) );

```

#### No Intercept

**구문:** obj &lt;&lt; No Intercept( state=0|1 )

**설명:** ARIMA 모형을 시작할 때 절편을 0으로 설정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 1, 0, No Intercept( 1 ) );

```

#### Partial Autocorrelations

**구문:** obj &lt;&lt; Partial Autocorrelations( state=0|1 )

**설명:** 편자기상관 그림을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series(	Y( :Steel Shipments ),	Winters Method(		12,		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),		Partial Autocorrelations( 1 )	));(obj << report)["Residuals"] << Close( 0 );(obj << report)["Model Comparison"] << Close( 1 );

```

#### Plot

**구문:** obj &lt;&lt; Plot( state=0|1 )

**설명:** 잔차 통계량 그림을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series(	Y( :Steel Shipments ),	Winters Method( 12, Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ), Plot( 1 ) ));(obj << report)["Residuals"] << Close( 0 );(obj << report)["Model Comparison"] << Close( 1 );

```

#### Predicted

**구문:** obj &lt;&lt; Predicted( state=0|1 )

**설명:** Save Columns 명령을 사용하여 저장할 예측값 데이터 열을 선택합니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 0, 0, Predicted( 1 ), Save Columns );

```

#### Prediction Interval

**구문:** obj &lt;&lt; Prediction Interval( level )

**설명:** ARIMA 모형 예측에 대한 신뢰 구간의 크기를 설정합니다. 기본 크기는 0.95입니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 1, 0, Forecasting Interval( 0.99 ) );

```

#### Remove Fit

**구문:** obj &lt;&lt; Remove Fit

**JMP추가된 버전:** 16

#### Residuals

**구문:** obj &lt;&lt; Residuals( state=0|1 )

**설명:** Save Columns 명령을 사용하여 저장할 잔차 값 데이터 열을 선택합니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 0, 0, Residuals( 1 ), Save Columns );

```

#### Save Columns

**구문:** obj &lt;&lt; Save Columns

**설명:** 실제값 및 예측값과 함께 표준 오차, 잔차 및 반응에 대한 95% 예측 구간이 포함된 데이터 테이블을 새로 생성합니다. 이 옵션은 모든 ARIMA, 평활 및 전이 함수 모형에 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj2 = obj << Arima( 1, 0, 0 );obj2 << Save Columns;

```

#### Save Prediction Formula

**구문:** obj &lt;&lt; Save Prediction Formula

**설명:** 예측 계산식을 데이터 테이블의 새 열에 저장합니다. 이 옵션은 모든 ARIMA 및 평활 모형에 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj2 = obj << Arima( 1, 0, 0 );obj2 << Save Prediction Formula;

```

#### Show Confidence Interval

**구문:** obj &lt;&lt; Show Confidence Interval( state=0|1 )

**설명:** 시계열 예측 그림에 예측 구간을 표시하거나 숨깁니다. 이 옵션은 모든 ARIMA 및 평활 모형에 사용할 수 있습니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj2 = obj << Simple Exponential Smoothing( Zero to One );obj2 << Show Confidence Interval( 0 );

```

#### Show Points

**구문:** obj &lt;&lt; Show Points( state=0|1 )

**설명:** 시계열 예측 그림에 점을 표시하거나 숨깁니다. 이 옵션은 모든 ARIMA 및 평활 모형에 사용할 수 있습니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 0, 0, Show Points( 1 ) );(obj << report)["Model Comparison"] << Close( 1 );

```

#### Show Prediction Interval

**구문:** obj &lt;&lt; Show Prediction Interval( state=0|1 )

**설명:** 시계열 예측 그림에 예측 구간을 표시하거나 숨깁니다. 이 옵션은 모든 ARIMA 및 평활 모형에 사용할 수 있습니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj2 = obj << Simple Exponential Smoothing( Zero to One );obj2 << Show Prediction Interval( 0 );

```

#### Std Error of Predicted

**구문:** obj &lt;&lt; Std Error of Predicted( state=0|1 )

**설명:** Save Columns 명령을 사용하여 저장할 예측값 표준 오차 데이터 열을 선택합니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 0, 0, Std Error of Predicted( 1 ), Save Columns );

```

#### Time

**구문:** obj &lt;&lt; Time( state=0|1 )

**설명:** Save Columns 명령을 사용하여 저장할 시간 데이터 열을 선택합니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ), Time ID( :Date ) );obj << Arima( 1, 0, 0, Time( 0 ), Save Columns );

```

#### Upper Confidence Limit

**구문:** obj &lt;&lt; Upper Confidence Limit( state=0|1 )

**설명:** Save Columns 명령을 사용하여 저장할 95% 신뢰 상한 값 열을 선택합니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 0, 0, Upper Confidence Limit( 1 ), Save Columns );

```

#### Variogram

**구문:** obj &lt;&lt; Variogram( state=0|1 )

**설명:** 변동도를 표시하거나 숨깁니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series(	Y( :Steel Shipments ),	Winters Method( 12, Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ), Variogram( 1 ) ));(obj << report)["Residuals"] << Close( 0 );(obj << report)["Model Comparison"] << Close( 1 );

```

## Seasonal ARIMA

### 항목 메시지

#### Actual

**구문:** obj &lt;&lt; Actual( state=0|1 )

**설명:** Save Columns 명령을 사용하여 저장할 실제값 데이터 열을 선택합니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 0, 0, Actual( 1 ), Save Columns );

```

#### Autocorrelations

**구문:** obj &lt;&lt; Autocorrelations( state=0|1 )

**설명:** 자기상관 그림을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series(	Y( :Steel Shipments ),	Winters Method( 12, Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ), Autocorrelations( 1 ) ));(obj << report)["Residuals"] << Close( 0 );(obj << report)["Model Comparison"] << Close( 1 );

```

#### Confidence Intervals

**구문:** obj &lt;&lt; Confidence Intervals( number )

#### Create SAS Job

**구문:** obj &lt;&lt; Create SAS Job

**설명:** SAS를 시작하고 PROC ARIMA에서 분석을 실행하기 위한 SAS 작업을 생성합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj2 = obj << Arima( 1, 0, 0 );obj2 << Create SAS Job;

```

#### Innovations

**구문:** obj &lt;&lt; Innovations( state=0|1 )

**설명:** 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 16

#### Lower Confidence Limit

**구문:** obj &lt;&lt; Lower Confidence Limit( state=0|1 )

**설명:** Save Columns 명령을 사용하여 저장할 95% 신뢰 하한 값 열을 선택합니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 0, 0, Lower Confidence Limit( 1 ), Save Columns );

```

#### No Constrain

**구문:** obj &lt;&lt; No Constrain( state=0|1 )

**설명:** ARIMA 모형을 시작할 때 항상 안정 영역 및 가역 영역 내에 남도록 자기회귀 모수와 이동 평균 모수에 대한 제약 조건을 올립니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 1, 0, No Constrain( 1 ) );

```

#### No Intercept

**구문:** obj &lt;&lt; No Intercept( state=0|1 )

**설명:** ARIMA 모형을 시작할 때 절편을 0으로 설정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 1, 0, No Intercept( 1 ) );

```

#### Partial Autocorrelations

**구문:** obj &lt;&lt; Partial Autocorrelations( state=0|1 )

**설명:** 편자기상관 그림을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series(	Y( :Steel Shipments ),	Winters Method(		12,		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),		Partial Autocorrelations( 1 )	));(obj << report)["Residuals"] << Close( 0 );(obj << report)["Model Comparison"] << Close( 1 );

```

#### Plot

**구문:** obj &lt;&lt; Plot( state=0|1 )

**설명:** 잔차 통계량 그림을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series(	Y( :Steel Shipments ),	Winters Method( 12, Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ), Plot( 1 ) ));(obj << report)["Residuals"] << Close( 0 );(obj << report)["Model Comparison"] << Close( 1 );

```

#### Predicted

**구문:** obj &lt;&lt; Predicted( state=0|1 )

**설명:** Save Columns 명령을 사용하여 저장할 예측값 데이터 열을 선택합니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 0, 0, Predicted( 1 ), Save Columns );

```

#### Prediction Interval

**구문:** obj &lt;&lt; Prediction Interval( level )

**설명:** ARIMA 모형 예측에 대한 신뢰 구간의 크기를 설정합니다. 기본 크기는 0.95입니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 1, 0, Forecasting Interval( 0.99 ) );

```

#### Remove Fit

**구문:** obj &lt;&lt; Remove Fit

**JMP추가된 버전:** 16

#### Residuals

**구문:** obj &lt;&lt; Residuals( state=0|1 )

**설명:** Save Columns 명령을 사용하여 저장할 잔차 값 데이터 열을 선택합니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 0, 0, Residuals( 1 ), Save Columns );

```

#### Save Columns

**구문:** obj &lt;&lt; Save Columns

**설명:** 실제값 및 예측값과 함께 표준 오차, 잔차 및 반응에 대한 95% 예측 구간이 포함된 데이터 테이블을 새로 생성합니다. 이 옵션은 모든 ARIMA, 평활 및 전이 함수 모형에 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj2 = obj << Arima( 1, 0, 0 );obj2 << Save Columns;

```

#### Save Prediction Formula

**구문:** obj &lt;&lt; Save Prediction Formula

**설명:** 예측 계산식을 데이터 테이블의 새 열에 저장합니다. 이 옵션은 모든 ARIMA 및 평활 모형에 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj2 = obj << Arima( 1, 0, 0 );obj2 << Save Prediction Formula;

```

#### Show Confidence Interval

**구문:** obj &lt;&lt; Show Confidence Interval( state=0|1 )

**설명:** 시계열 예측 그림에 예측 구간을 표시하거나 숨깁니다. 이 옵션은 모든 ARIMA 및 평활 모형에 사용할 수 있습니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj2 = obj << Simple Exponential Smoothing( Zero to One );obj2 << Show Confidence Interval( 0 );

```

#### Show Points

**구문:** obj &lt;&lt; Show Points( state=0|1 )

**설명:** 시계열 예측 그림에 점을 표시하거나 숨깁니다. 이 옵션은 모든 ARIMA 및 평활 모형에 사용할 수 있습니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 0, 0, Show Points( 1 ) );(obj << report)["Model Comparison"] << Close( 1 );

```

#### Show Prediction Interval

**구문:** obj &lt;&lt; Show Prediction Interval( state=0|1 )

**설명:** 시계열 예측 그림에 예측 구간을 표시하거나 숨깁니다. 이 옵션은 모든 ARIMA 및 평활 모형에 사용할 수 있습니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj2 = obj << Simple Exponential Smoothing( Zero to One );obj2 << Show Prediction Interval( 0 );

```

#### Std Error of Predicted

**구문:** obj &lt;&lt; Std Error of Predicted( state=0|1 )

**설명:** Save Columns 명령을 사용하여 저장할 예측값 표준 오차 데이터 열을 선택합니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 0, 0, Std Error of Predicted( 1 ), Save Columns );

```

#### Time

**구문:** obj &lt;&lt; Time( state=0|1 )

**설명:** Save Columns 명령을 사용하여 저장할 시간 데이터 열을 선택합니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ), Time ID( :Date ) );obj << Arima( 1, 0, 0, Time( 0 ), Save Columns );

```

#### Upper Confidence Limit

**구문:** obj &lt;&lt; Upper Confidence Limit( state=0|1 )

**설명:** Save Columns 명령을 사용하여 저장할 95% 신뢰 상한 값 열을 선택합니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 0, 0, Upper Confidence Limit( 1 ), Save Columns );

```

#### Variogram

**구문:** obj &lt;&lt; Variogram( state=0|1 )

**설명:** 변동도를 표시하거나 숨깁니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series(	Y( :Steel Shipments ),	Winters Method( 12, Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ), Variogram( 1 ) ));(obj << report)["Residuals"] << Close( 0 );(obj << report)["Model Comparison"] << Close( 1 );

```

## Seasonal Exponential Smoothing

### 항목 메시지

#### Actual

**구문:** obj &lt;&lt; Actual( state=0|1 )

**설명:** Save Columns 명령을 사용하여 저장할 실제값 데이터 열을 선택합니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 0, 0, Actual( 1 ), Save Columns );

```

#### Autocorrelations

**구문:** obj &lt;&lt; Autocorrelations( state=0|1 )

**설명:** 자기상관 그림을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series(	Y( :Steel Shipments ),	Winters Method( 12, Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ), Autocorrelations( 1 ) ));(obj << report)["Residuals"] << Close( 0 );(obj << report)["Model Comparison"] << Close( 1 );

```

#### Confidence Intervals

**구문:** obj &lt;&lt; Confidence Intervals( number )

#### Create SAS Job

**구문:** obj &lt;&lt; Create SAS Job

**설명:** SAS를 시작하고 PROC ARIMA에서 분석을 실행하기 위한 SAS 작업을 생성합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj2 = obj << Arima( 1, 0, 0 );obj2 << Create SAS Job;

```

#### Innovations

**구문:** obj &lt;&lt; Innovations( state=0|1 )

**설명:** 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 16

#### Lower Confidence Limit

**구문:** obj &lt;&lt; Lower Confidence Limit( state=0|1 )

**설명:** Save Columns 명령을 사용하여 저장할 95% 신뢰 하한 값 열을 선택합니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 0, 0, Lower Confidence Limit( 1 ), Save Columns );

```

#### No Constrain

**구문:** obj &lt;&lt; No Constrain( state=0|1 )

**설명:** ARIMA 모형을 시작할 때 항상 안정 영역 및 가역 영역 내에 남도록 자기회귀 모수와 이동 평균 모수에 대한 제약 조건을 올립니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 1, 0, No Constrain( 1 ) );

```

#### No Intercept

**구문:** obj &lt;&lt; No Intercept( state=0|1 )

**설명:** ARIMA 모형을 시작할 때 절편을 0으로 설정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 1, 0, No Intercept( 1 ) );

```

#### Partial Autocorrelations

**구문:** obj &lt;&lt; Partial Autocorrelations( state=0|1 )

**설명:** 편자기상관 그림을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series(	Y( :Steel Shipments ),	Winters Method(		12,		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),		Partial Autocorrelations( 1 )	));(obj << report)["Residuals"] << Close( 0 );(obj << report)["Model Comparison"] << Close( 1 );

```

#### Plot

**구문:** obj &lt;&lt; Plot( state=0|1 )

**설명:** 잔차 통계량 그림을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series(	Y( :Steel Shipments ),	Winters Method( 12, Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ), Plot( 1 ) ));(obj << report)["Residuals"] << Close( 0 );(obj << report)["Model Comparison"] << Close( 1 );

```

#### Predicted

**구문:** obj &lt;&lt; Predicted( state=0|1 )

**설명:** Save Columns 명령을 사용하여 저장할 예측값 데이터 열을 선택합니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 0, 0, Predicted( 1 ), Save Columns );

```

#### Prediction Interval

**구문:** obj &lt;&lt; Prediction Interval( level )

**설명:** ARIMA 모형 예측에 대한 신뢰 구간의 크기를 설정합니다. 기본 크기는 0.95입니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 1, 0, Forecasting Interval( 0.99 ) );

```

#### Remove Fit

**구문:** obj &lt;&lt; Remove Fit

**JMP추가된 버전:** 16

#### Residuals

**구문:** obj &lt;&lt; Residuals( state=0|1 )

**설명:** Save Columns 명령을 사용하여 저장할 잔차 값 데이터 열을 선택합니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 0, 0, Residuals( 1 ), Save Columns );

```

#### Save Columns

**구문:** obj &lt;&lt; Save Columns

**설명:** 실제값 및 예측값과 함께 표준 오차, 잔차 및 반응에 대한 95% 예측 구간이 포함된 데이터 테이블을 새로 생성합니다. 이 옵션은 모든 ARIMA, 평활 및 전이 함수 모형에 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj2 = obj << Arima( 1, 0, 0 );obj2 << Save Columns;

```

#### Save Prediction Formula

**구문:** obj &lt;&lt; Save Prediction Formula

**설명:** 예측 계산식을 데이터 테이블의 새 열에 저장합니다. 이 옵션은 모든 ARIMA 및 평활 모형에 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj2 = obj << Arima( 1, 0, 0 );obj2 << Save Prediction Formula;

```

#### Show Confidence Interval

**구문:** obj &lt;&lt; Show Confidence Interval( state=0|1 )

**설명:** 시계열 예측 그림에 예측 구간을 표시하거나 숨깁니다. 이 옵션은 모든 ARIMA 및 평활 모형에 사용할 수 있습니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj2 = obj << Simple Exponential Smoothing( Zero to One );obj2 << Show Confidence Interval( 0 );

```

#### Show Points

**구문:** obj &lt;&lt; Show Points( state=0|1 )

**설명:** 시계열 예측 그림에 점을 표시하거나 숨깁니다. 이 옵션은 모든 ARIMA 및 평활 모형에 사용할 수 있습니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 0, 0, Show Points( 1 ) );(obj << report)["Model Comparison"] << Close( 1 );

```

#### Show Prediction Interval

**구문:** obj &lt;&lt; Show Prediction Interval( state=0|1 )

**설명:** 시계열 예측 그림에 예측 구간을 표시하거나 숨깁니다. 이 옵션은 모든 ARIMA 및 평활 모형에 사용할 수 있습니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj2 = obj << Simple Exponential Smoothing( Zero to One );obj2 << Show Prediction Interval( 0 );

```

#### Std Error of Predicted

**구문:** obj &lt;&lt; Std Error of Predicted( state=0|1 )

**설명:** Save Columns 명령을 사용하여 저장할 예측값 표준 오차 데이터 열을 선택합니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 0, 0, Std Error of Predicted( 1 ), Save Columns );

```

#### Time

**구문:** obj &lt;&lt; Time( state=0|1 )

**설명:** Save Columns 명령을 사용하여 저장할 시간 데이터 열을 선택합니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ), Time ID( :Date ) );obj << Arima( 1, 0, 0, Time( 0 ), Save Columns );

```

#### Upper Confidence Limit

**구문:** obj &lt;&lt; Upper Confidence Limit( state=0|1 )

**설명:** Save Columns 명령을 사용하여 저장할 95% 신뢰 상한 값 열을 선택합니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 0, 0, Upper Confidence Limit( 1 ), Save Columns );

```

#### Variogram

**구문:** obj &lt;&lt; Variogram( state=0|1 )

**설명:** 변동도를 표시하거나 숨깁니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series(	Y( :Steel Shipments ),	Winters Method( 12, Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ), Variogram( 1 ) ));(obj << report)["Residuals"] << Close( 0 );(obj << report)["Model Comparison"] << Close( 1 );

```

## Simple Exponential Smoothing

### 항목 메시지

#### Actual

**구문:** obj &lt;&lt; Actual( state=0|1 )

**설명:** Save Columns 명령을 사용하여 저장할 실제값 데이터 열을 선택합니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 0, 0, Actual( 1 ), Save Columns );

```

#### Autocorrelations

**구문:** obj &lt;&lt; Autocorrelations( state=0|1 )

**설명:** 자기상관 그림을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series(	Y( :Steel Shipments ),	Winters Method( 12, Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ), Autocorrelations( 1 ) ));(obj << report)["Residuals"] << Close( 0 );(obj << report)["Model Comparison"] << Close( 1 );

```

#### Confidence Intervals

**구문:** obj &lt;&lt; Confidence Intervals( number )

#### Create SAS Job

**구문:** obj &lt;&lt; Create SAS Job

**설명:** SAS를 시작하고 PROC ARIMA에서 분석을 실행하기 위한 SAS 작업을 생성합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj2 = obj << Arima( 1, 0, 0 );obj2 << Create SAS Job;

```

#### Innovations

**구문:** obj &lt;&lt; Innovations( state=0|1 )

**설명:** 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 16

#### Lower Confidence Limit

**구문:** obj &lt;&lt; Lower Confidence Limit( state=0|1 )

**설명:** Save Columns 명령을 사용하여 저장할 95% 신뢰 하한 값 열을 선택합니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 0, 0, Lower Confidence Limit( 1 ), Save Columns );

```

#### No Constrain

**구문:** obj &lt;&lt; No Constrain( state=0|1 )

**설명:** ARIMA 모형을 시작할 때 항상 안정 영역 및 가역 영역 내에 남도록 자기회귀 모수와 이동 평균 모수에 대한 제약 조건을 올립니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 1, 0, No Constrain( 1 ) );

```

#### No Intercept

**구문:** obj &lt;&lt; No Intercept( state=0|1 )

**설명:** ARIMA 모형을 시작할 때 절편을 0으로 설정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 1, 0, No Intercept( 1 ) );

```

#### Partial Autocorrelations

**구문:** obj &lt;&lt; Partial Autocorrelations( state=0|1 )

**설명:** 편자기상관 그림을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series(	Y( :Steel Shipments ),	Winters Method(		12,		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),		Partial Autocorrelations( 1 )	));(obj << report)["Residuals"] << Close( 0 );(obj << report)["Model Comparison"] << Close( 1 );

```

#### Plot

**구문:** obj &lt;&lt; Plot( state=0|1 )

**설명:** 잔차 통계량 그림을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series(	Y( :Steel Shipments ),	Winters Method( 12, Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ), Plot( 1 ) ));(obj << report)["Residuals"] << Close( 0 );(obj << report)["Model Comparison"] << Close( 1 );

```

#### Predicted

**구문:** obj &lt;&lt; Predicted( state=0|1 )

**설명:** Save Columns 명령을 사용하여 저장할 예측값 데이터 열을 선택합니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 0, 0, Predicted( 1 ), Save Columns );

```

#### Prediction Interval

**구문:** obj &lt;&lt; Prediction Interval( level )

**설명:** ARIMA 모형 예측에 대한 신뢰 구간의 크기를 설정합니다. 기본 크기는 0.95입니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 1, 0, Forecasting Interval( 0.99 ) );

```

#### Remove Fit

**구문:** obj &lt;&lt; Remove Fit

**JMP추가된 버전:** 16

#### Residuals

**구문:** obj &lt;&lt; Residuals( state=0|1 )

**설명:** Save Columns 명령을 사용하여 저장할 잔차 값 데이터 열을 선택합니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 0, 0, Residuals( 1 ), Save Columns );

```

#### Save Columns

**구문:** obj &lt;&lt; Save Columns

**설명:** 실제값 및 예측값과 함께 표준 오차, 잔차 및 반응에 대한 95% 예측 구간이 포함된 데이터 테이블을 새로 생성합니다. 이 옵션은 모든 ARIMA, 평활 및 전이 함수 모형에 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj2 = obj << Arima( 1, 0, 0 );obj2 << Save Columns;

```

#### Save Prediction Formula

**구문:** obj &lt;&lt; Save Prediction Formula

**설명:** 예측 계산식을 데이터 테이블의 새 열에 저장합니다. 이 옵션은 모든 ARIMA 및 평활 모형에 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj2 = obj << Arima( 1, 0, 0 );obj2 << Save Prediction Formula;

```

#### Show Confidence Interval

**구문:** obj &lt;&lt; Show Confidence Interval( state=0|1 )

**설명:** 시계열 예측 그림에 예측 구간을 표시하거나 숨깁니다. 이 옵션은 모든 ARIMA 및 평활 모형에 사용할 수 있습니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj2 = obj << Simple Exponential Smoothing( Zero to One );obj2 << Show Confidence Interval( 0 );

```

#### Show Points

**구문:** obj &lt;&lt; Show Points( state=0|1 )

**설명:** 시계열 예측 그림에 점을 표시하거나 숨깁니다. 이 옵션은 모든 ARIMA 및 평활 모형에 사용할 수 있습니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 0, 0, Show Points( 1 ) );(obj << report)["Model Comparison"] << Close( 1 );

```

#### Show Prediction Interval

**구문:** obj &lt;&lt; Show Prediction Interval( state=0|1 )

**설명:** 시계열 예측 그림에 예측 구간을 표시하거나 숨깁니다. 이 옵션은 모든 ARIMA 및 평활 모형에 사용할 수 있습니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj2 = obj << Simple Exponential Smoothing( Zero to One );obj2 << Show Prediction Interval( 0 );

```

#### Std Error of Predicted

**구문:** obj &lt;&lt; Std Error of Predicted( state=0|1 )

**설명:** Save Columns 명령을 사용하여 저장할 예측값 표준 오차 데이터 열을 선택합니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 0, 0, Std Error of Predicted( 1 ), Save Columns );

```

#### Time

**구문:** obj &lt;&lt; Time( state=0|1 )

**설명:** Save Columns 명령을 사용하여 저장할 시간 데이터 열을 선택합니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ), Time ID( :Date ) );obj << Arima( 1, 0, 0, Time( 0 ), Save Columns );

```

#### Upper Confidence Limit

**구문:** obj &lt;&lt; Upper Confidence Limit( state=0|1 )

**설명:** Save Columns 명령을 사용하여 저장할 95% 신뢰 상한 값 열을 선택합니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 0, 0, Upper Confidence Limit( 1 ), Save Columns );

```

#### Variogram

**구문:** obj &lt;&lt; Variogram( state=0|1 )

**설명:** 변동도를 표시하거나 숨깁니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series(	Y( :Steel Shipments ),	Winters Method( 12, Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ), Variogram( 1 ) ));(obj << report)["Residuals"] << Close( 0 );(obj << report)["Model Comparison"] << Close( 1 );

```

## Simple Moving Average

### 항목 메시지

#### Add Model

**구문:** obj &lt;&lt; Add Model( Window Width, &lt;Centered&gt; )

**설명:** 단순 이동 평균 모형을 추가합니다. 모형은 이동 창 너비로 식별됩니다. 선택적 인수는 중심화 여부를 지정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Stock Prices.jmp" );obj = Time Series( Y( :Close ), Simple Moving Average( Add Model( 5 ) ) );sma = obj << Simple Moving Average( Add Model( 10 ) );sma << Add Model( 15, Centered );

```

#### Connecting Lines

**구문:** obj &lt;&lt; Connecting Lines( &lt;1|0&gt; )

**설명:** 연결된 선을 표시하기 위한 그래프 옵션입니다.

```jsl

dt = Open( "$SAMPLE_DATA/Stock Prices.jmp" );obj = Time Series( Y( :Close ), Simple Moving Average( Add Model( 5 ) ) );sma = obj << Simple Moving Average( Connecting Lines );

```

#### Get Results

**구문:** obj &lt;&lt; Get Results

**설명:** 모든 단순 이동 평균 모형을 JSL 개체로 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Stock Prices.jmp" );obj = Time Series( Y( :Close ), Simple Moving Average( Add Model( 5 ) ) );resultobj = obj << Simple Moving Average( Get Result );

```

#### Remove Model

**구문:** obj &lt;&lt; Remove Model( Window Width, &lt;Centered&gt; )

**설명:** 단순 이동 평균 모형을 제거합니다. 모형은 이동 창 너비로 식별됩니다.

```jsl

dt = Open( "$SAMPLE_DATA/Stock Prices.jmp" );obj = Time Series( Y( :Close ), Simple Moving Average( Add Model( 5 ) ) );obj << Simple Moving Average( Remove Model( 5 ) );

```

#### Remove Report

**구문:** obj &lt;&lt; Remove Report

**JMP추가된 버전:** 16

#### Save to Data Table

**구문:** obj &lt;&lt; Save to Data Table

**설명:** 모든 단순 이동 평균 모형을 데이터 테이블에 저장하고 데이터 테이블 핸들을 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Stock Prices.jmp" );obj = Time Series( Y( :Close ), Simple Moving Average( Add Model( 5 ) ) );resultdt = obj << Simple Moving Average( Save to Data Table );

```

#### Show Points

**구문:** obj &lt;&lt; Show Points( &lt;1|0&gt; )

**설명:** 점을 표시하기 위한 그래프 옵션입니다.

```jsl

dt = Open( "$SAMPLE_DATA/Stock Prices.jmp" );obj = Time Series( Y( :Close ), Simple Moving Average( Add Model( 5 ) ) );sma = obj << Simple Moving Average( Show Points( 0 ) );

```

## Transfer Function Model

### 항목 메시지

#### Alternative Parameterization

**구문:** obj &lt;&lt; Alternative Parameterization( state=0|1 )

**설명:** 분자 다항식에서 일반 회귀 계수를 인수 분해할지 여부를 지정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );obj = Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );obj << Transfer Function(	Order( 2, 0, 0 ),	Seasonal( 0, 0, 0, 0 ),	:Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ));obj << Transfer Function(	Order( 2, 0, 0 ),	Seasonal( 0, 0, 0, 0 ),	:Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ),	Alternative Parameterization( 1 ));

```

#### Autocorrelations

**구문:** obj &lt;&lt; Autocorrelations( state=0|1 )

**설명:** 자기상관 그림을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );obj = Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );obj << Transfer Function(	Order( 2, 0, 0 ),	Seasonal( 0, 0, 0, 0 ),	Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ),	Autocorrelations( 1 ));(obj << report)["Residuals"] << Close( 0 );

```

#### Compute Objective

**구문:** obj &lt;&lt; Compute Objective

#### Create SAS Job

**구문:** obj &lt;&lt; Create SAS Job

**설명:** SAS를 시작하고 PROC ARIMA에서 분석을 실행하기 위한 SAS 작업을 생성합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );obj = Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );obj << Transfer Function(	Order( 2, 0, 0 ),	Seasonal( 0, 0, 0, 0 ),	Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ),	Create SAS Job);

```

#### Import New Inputs

**구문:** obj &lt;&lt; Import New Inputs

**JMP추가된 버전:** 16

#### Maximum Iterations

**구문:** obj &lt;&lt; Maximum Iterations( number )

**설명:** 최대 반복 수를 지정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );obj = Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );obj << Transfer Function(	Order( 2, 0, 0 ),	Seasonal( 0, 0, 0, 0 ),	:Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ));obj << Transfer Function(	Order( 2, 0, 0 ),	Seasonal( 0, 0, 0, 0 ),	:Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ),	Maximum Iterations( 10 ));

```

#### No Constrain

**구문:** obj &lt;&lt; No Constrain( state=0|1 )

**설명:** AR 및 MA 계수에 대한 제약 조건을 제거합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );obj = Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );obj << Transfer Function(	Order( 2, 0, 0 ),	Seasonal( 0, 0, 0, 0 ),	:Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ));obj << Transfer Function(	Order( 2, 0, 0 ),	Seasonal( 0, 0, 0, 0 ),	:Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ),	No Constrain( 1 ));

```

#### No Intercept

**구문:** obj &lt;&lt; No Intercept( state=0|1 )

**설명:** 절편을 0으로 설정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );obj = Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );obj << Transfer Function(	Order( 2, 0, 0 ),	Seasonal( 0, 0, 0, 0 ),	:Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ));obj << Transfer Function(	Order( 2, 0, 0 ),	Seasonal( 0, 0, 0, 0 ),	:Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ),	No Intercept( 1 ));

```

#### Number of Forecast Periods

**구문:** obj &lt;&lt; Number of Forecast Periods( number )

**설명:** 예측 주기 수를 지정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );obj = Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );obj << Transfer Function(	Order( 2, 0, 0 ),	Seasonal( 0, 0, 0, 0 ),	:Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ));obj << Transfer Function(	Order( 2, 0, 0 ),	Seasonal( 0, 0, 0, 0 ),	:Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ),	Number of Forecast Periods( 10 ));

```

#### Partial Autocorrelations

**구문:** obj &lt;&lt; Partial Autocorrelations( state=0|1 )

**설명:** 편자기상관 그림을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );obj = Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );obj << Transfer Function(	Order( 2, 0, 0 ),	Seasonal( 0, 0, 0, 0 ),	Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ),	Partial Autocorrelations( 1 ));(obj << report)["Residuals"] << Close( 0 );

```

#### Plot

**구문:** obj &lt;&lt; Plot( state=0|1 )

**설명:** 잔차 통계량 그림을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );obj = Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );obj << Transfer Function(	Order( 2, 0, 0 ),	Seasonal( 0, 0, 0, 0 ),	Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ),	Plot( 1 ));(obj << report)["Residuals"] << Close( 0 );

```

#### Prediction Interval

**구문:** obj &lt;&lt; Prediction Interval( number )

**설명:** 표시되는 신뢰 구간의 수준을 설정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );obj = Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );obj << Transfer Function(	Order( 2, 0, 0 ),	Seasonal( 0, 0, 0, 0 ),	:Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ));obj << Transfer Function(	Order( 2, 0, 0 ),	Seasonal( 0, 0, 0, 0 ),	:Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ),	Confidence Intervals( 0.99 ));

```

#### Remove Fit

**구문:** obj &lt;&lt; Remove Fit

**JMP추가된 버전:** 16

#### Save Columns

**구문:** obj &lt;&lt; Save Columns

**설명:** 실제값 및 예측값과 함께 표준 오차, 잔차 및 반응에 대한 95% 예측 구간이 포함된 데이터 테이블을 새로 생성합니다. 이 옵션은 모든 ARIMA, 평활 및 전이 함수 모형에 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );obj = Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );obj << Transfer Function(	Order( 2, 0, 0 ),	Seasonal( 0, 0, 0, 0 ),	Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ),	Save Columns);

```

#### Variogram

**구문:** obj &lt;&lt; Variogram( state=0|1 )

**설명:** 변동도를 표시하거나 숨깁니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );obj = Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );obj << Transfer Function(	Order( 2, 0, 0 ),	Seasonal( 0, 0, 0, 0 ),	Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ),	Variogram( 1 ));(obj << report)["Residuals"] << Close( 0 );

```

## Winters Method (Additive)

### 항목 메시지

#### Actual

**구문:** obj &lt;&lt; Actual( state=0|1 )

**설명:** Save Columns 명령을 사용하여 저장할 실제값 데이터 열을 선택합니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 0, 0, Actual( 1 ), Save Columns );

```

#### Autocorrelations

**구문:** obj &lt;&lt; Autocorrelations( state=0|1 )

**설명:** 자기상관 그림을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series(	Y( :Steel Shipments ),	Winters Method( 12, Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ), Autocorrelations( 1 ) ));(obj << report)["Residuals"] << Close( 0 );(obj << report)["Model Comparison"] << Close( 1 );

```

#### Confidence Intervals

**구문:** obj &lt;&lt; Confidence Intervals( number )

#### Create SAS Job

**구문:** obj &lt;&lt; Create SAS Job

**설명:** SAS를 시작하고 PROC ARIMA에서 분석을 실행하기 위한 SAS 작업을 생성합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj2 = obj << Arima( 1, 0, 0 );obj2 << Create SAS Job;

```

#### Innovations

**구문:** obj &lt;&lt; Innovations( state=0|1 )

**설명:** 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 16

#### Lower Confidence Limit

**구문:** obj &lt;&lt; Lower Confidence Limit( state=0|1 )

**설명:** Save Columns 명령을 사용하여 저장할 95% 신뢰 하한 값 열을 선택합니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 0, 0, Lower Confidence Limit( 1 ), Save Columns );

```

#### No Constrain

**구문:** obj &lt;&lt; No Constrain( state=0|1 )

**설명:** ARIMA 모형을 시작할 때 항상 안정 영역 및 가역 영역 내에 남도록 자기회귀 모수와 이동 평균 모수에 대한 제약 조건을 올립니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 1, 0, No Constrain( 1 ) );

```

#### No Intercept

**구문:** obj &lt;&lt; No Intercept( state=0|1 )

**설명:** ARIMA 모형을 시작할 때 절편을 0으로 설정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 1, 0, No Intercept( 1 ) );

```

#### Partial Autocorrelations

**구문:** obj &lt;&lt; Partial Autocorrelations( state=0|1 )

**설명:** 편자기상관 그림을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series(	Y( :Steel Shipments ),	Winters Method(		12,		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),		Partial Autocorrelations( 1 )	));(obj << report)["Residuals"] << Close( 0 );(obj << report)["Model Comparison"] << Close( 1 );

```

#### Plot

**구문:** obj &lt;&lt; Plot( state=0|1 )

**설명:** 잔차 통계량 그림을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series(	Y( :Steel Shipments ),	Winters Method( 12, Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ), Plot( 1 ) ));(obj << report)["Residuals"] << Close( 0 );(obj << report)["Model Comparison"] << Close( 1 );

```

#### Predicted

**구문:** obj &lt;&lt; Predicted( state=0|1 )

**설명:** Save Columns 명령을 사용하여 저장할 예측값 데이터 열을 선택합니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 0, 0, Predicted( 1 ), Save Columns );

```

#### Prediction Interval

**구문:** obj &lt;&lt; Prediction Interval( level )

**설명:** ARIMA 모형 예측에 대한 신뢰 구간의 크기를 설정합니다. 기본 크기는 0.95입니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 1, 0, Forecasting Interval( 0.99 ) );

```

#### Remove Fit

**구문:** obj &lt;&lt; Remove Fit

**JMP추가된 버전:** 16

#### Residuals

**구문:** obj &lt;&lt; Residuals( state=0|1 )

**설명:** Save Columns 명령을 사용하여 저장할 잔차 값 데이터 열을 선택합니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 0, 0, Residuals( 1 ), Save Columns );

```

#### Save Columns

**구문:** obj &lt;&lt; Save Columns

**설명:** 실제값 및 예측값과 함께 표준 오차, 잔차 및 반응에 대한 95% 예측 구간이 포함된 데이터 테이블을 새로 생성합니다. 이 옵션은 모든 ARIMA, 평활 및 전이 함수 모형에 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj2 = obj << Arima( 1, 0, 0 );obj2 << Save Columns;

```

#### Save Prediction Formula

**구문:** obj &lt;&lt; Save Prediction Formula

**설명:** 예측 계산식을 데이터 테이블의 새 열에 저장합니다. 이 옵션은 모든 ARIMA 및 평활 모형에 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj2 = obj << Arima( 1, 0, 0 );obj2 << Save Prediction Formula;

```

#### Show Confidence Interval

**구문:** obj &lt;&lt; Show Confidence Interval( state=0|1 )

**설명:** 시계열 예측 그림에 예측 구간을 표시하거나 숨깁니다. 이 옵션은 모든 ARIMA 및 평활 모형에 사용할 수 있습니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj2 = obj << Simple Exponential Smoothing( Zero to One );obj2 << Show Confidence Interval( 0 );

```

#### Show Points

**구문:** obj &lt;&lt; Show Points( state=0|1 )

**설명:** 시계열 예측 그림에 점을 표시하거나 숨깁니다. 이 옵션은 모든 ARIMA 및 평활 모형에 사용할 수 있습니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 0, 0, Show Points( 1 ) );(obj << report)["Model Comparison"] << Close( 1 );

```

#### Show Prediction Interval

**구문:** obj &lt;&lt; Show Prediction Interval( state=0|1 )

**설명:** 시계열 예측 그림에 예측 구간을 표시하거나 숨깁니다. 이 옵션은 모든 ARIMA 및 평활 모형에 사용할 수 있습니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj2 = obj << Simple Exponential Smoothing( Zero to One );obj2 << Show Prediction Interval( 0 );

```

#### Std Error of Predicted

**구문:** obj &lt;&lt; Std Error of Predicted( state=0|1 )

**설명:** Save Columns 명령을 사용하여 저장할 예측값 표준 오차 데이터 열을 선택합니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 0, 0, Std Error of Predicted( 1 ), Save Columns );

```

#### Time

**구문:** obj &lt;&lt; Time( state=0|1 )

**설명:** Save Columns 명령을 사용하여 저장할 시간 데이터 열을 선택합니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ), Time ID( :Date ) );obj << Arima( 1, 0, 0, Time( 0 ), Save Columns );

```

#### Upper Confidence Limit

**구문:** obj &lt;&lt; Upper Confidence Limit( state=0|1 )

**설명:** Save Columns 명령을 사용하여 저장할 95% 신뢰 상한 값 열을 선택합니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 0, 0, Upper Confidence Limit( 1 ), Save Columns );

```

#### Variogram

**구문:** obj &lt;&lt; Variogram( state=0|1 )

**설명:** 변동도를 표시하거나 숨깁니다.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series(	Y( :Steel Shipments ),	Winters Method( 12, Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ), Variogram( 1 ) ));(obj << report)["Residuals"] << Close( 0 );(obj << report)["Model Comparison"] << Close( 1 );

```

