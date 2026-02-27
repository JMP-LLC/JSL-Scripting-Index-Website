# Columns Manager



## 항목 메시지

### Clear All Filters

**구문:** obj &lt;&lt; Clear All Filters

**설명:** 이 옵션은 요약 테이블에서 모든 필터를 제거합니다. &apos;열 설정&apos; 명령은 필터가 아니므로 이 명령을 호출해도 표시되는 열에 적용된 제한이 제거되지 않습니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Columns Manager;obj << Set Text Filter( "t" );obj << Clear All Filters;

```

### Create Data Dictionary

**구문:** obj &lt;&lt; Create Data Dictionary

**설명:** 각 열에 대한 통계량과 특성 정보를 포함하는 저널을 생성합니다.

**JMP추가된 버전:** 18

### Extended Statistics

**구문:** obj &lt;&lt; Extended Statistics(&lt;list of statistics&gt;)

**설명:** 환경 설정에서 목록을 구성할 필요 없이 기본 확장 통계량 집합을 재정의합니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Columns Manager( Include Extended Statistics( 1 ) );obj << Extended Statistics( {"Median Absolute Deviation", "Q1"} );

```

### Force calculations for all categorical columns

**구문:** obj &lt;&lt; Force calculations for all categorical columns( state=0|1 )

**설명:** 이 옵션을 활성화하면 문자 열뿐만 아니라 모든 범주형 열에 대해 통계량이 계산됩니다. 예를 들어 표현식 열은 결측값 수를 계산합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );obj = dt << Columns Manager;obj << Force calculations for all categorical columns( 1 );

```

### Force calculations for all numeric columns

**구문:** obj &lt;&lt; Force calculations for all numeric columns( state=0|1 )

**설명:** 이 옵션을 활성화하면 모든 숫자 열에 대해 수치 통계량이 계산됩니다(가능한 경우). 예를 들어 연속형으로 지정된 열의 고유 값 개수가 계산됩니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Columns Manager;obj << Force calculations for all numeric columns( 1 );

```

### Get Summary Table

**구문:** obj &lt;&lt; Get Summary Table

**설명:** 요약 테이블에 대한 테이블 상자를 가져옵니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Columns Manager;tab = obj << Get Summary table;tab << Sort By Column( "n unique" );

```

### Hide Excluded Columns

**구문:** obj &lt;&lt; Hide Excluded Columns( state=0|1 )

**설명:** &apos;제외됨&apos;으로 표시된 열을 요약 테이블에 포함하거나 제거합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Columns Manager;obj << Hide Excluded Columns( 0 );

```

### Hide Hidden Columns

**구문:** obj &lt;&lt; Hide Hidden Columns( state=0|1 )

**설명:** &apos;숨김&apos;으로 표시된 열을 요약 테이블에 포함하거나 제거합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Columns Manager;obj << Hide Hidden Columns( 0 );

```

### Include Extended Statistics

**구문:** obj &lt;&lt; Include Extended Statistics( state=0|1 )

**설명:** &apos;환경 설정&apos;에서 추가 통계량 집합을 구성할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Columns Manager;obj << Include Extended Statistics( 1 );

```

### Select Rows

**구문:** obj &lt;&lt; Select Rows(&lt;empty&gt; | All | None | &lt;column references&gt;)

**설명:** 이 옵션은 요약 테이블에서 열에 해당하는 행을 선택합니다. 인수를 전달하지 않고 필터를 지웁니다. &apos;All&apos; 또는 &apos;None&apos;을 전달하여 표시되는 행을 모두 선택하거나 선택하지 않습니다. 열 참조 목록을 전달하여 특정 행을 선택합니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Columns Manager;obj << Select Rows( :age, :height );

```

### Set Columns

**구문:** obj &lt;&lt; Set Columns(&lt;columns&gt;)

**설명:** 기본적으로 열 관리자에는 데이터 테이블의 모든 열이 기본 열 집합으로 포함됩니다. 제외된 열 제거를 통해 보고서에서 해당 집합이 축소되거나 축소되지 않을 수 있습니다. 이 옵션을 사용하면 열 관리자가 액세스할 수 있는 열 집합을 제한할 수 있습니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Columns Manager;obj << Set Columns( {:height, :weight} );

```

### Set Modeling Type Filter

**구문:** obj &lt;&lt; Set Modeling Type Filter(&lt;empty&gt; | &lt;Continuous, Nominal, Ordinal, Vector, Unstructured Text, Multiple Response, None&gt;)

**설명:** 이 옵션은 모델링 유형 필터를 설정합니다. 인수를 전달하지 않고 필터를 지우거나, 하나 이상의 모델링 유형 이름을 지정합니다. 분석 유형과 매칭되는 열이 필터를 충족합니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Columns Manager;obj << Set Modeling Type Filter( "Continuous", "Ordinal" );

```

### Set Property Filter

**구문:** obj &lt;&lt; Set Property Filter(&lt;empty&gt; | At Least One Property | &lt;list of property names&gt;)

**설명:** 이 옵션은 특성 필터를 설정합니다. 인수를 전달하지 않고 필터를 지우거나, 하나 이상의 특성 이름을 지정합니다. 필터는 특성을 포함하는 열에 의해 지정됩니다. 특성을 가진 열과 매칭되는 특수한 값도 있습니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );obj = dt << Columns Manager;obj << Set Property Filter( "Matrix Column Names", "Value colors" );

```

### Set Selection Filter

**구문:** obj &lt;&lt; Set Selection Filter(&lt;empty&gt; | Keep | Hide)

**설명:** 이 옵션은 선택 필터를 설정합니다. 이를 통해 사용자는 임의로 열을 선택한 후 목록을 해당 열 집합으로 필터링할 수 있습니다(&apos;유지&apos; 또는 &apos;숨기기&apos; 사용). 인수를 전달하지 않고 필터를 지웁니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Columns Manager;obj << Select Rows( :age, :height );obj << Set Selection Filter( "Keep" );

```

### Set Text Filter

**구문:** obj &lt;&lt; Set Text Filter(&lt;empty&gt; | &lt;search text&gt;)

**설명:** 이 옵션은 현재 텍스트 필터 데이터를 설정하여 요약 테이블에 표시되는 열 수를 줄입니다. 텍스트 필터는 열 이름에만 적용됩니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Columns Manager;obj << Set Text Filter( "me" );

```

### Show Attributes

**구문:** obj &lt;&lt; Show Attributes( state=0|1 )

**설명:** 요약 테이블에서 열 속성이 포함된 섹션을 펼치거나 접습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Columns Manager;obj << Show Attributes( 0 );

```

### Show Properties

**구문:** obj &lt;&lt; Show Properties( state=0|1 )

**설명:** 요약 테이블에서 열 특성이 포함된 섹션을 펼치거나 접습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Columns Manager;obj << Show Properties( 0 );

```

### Show Statistics

**구문:** obj &lt;&lt; Show Statistics( state=0|1 )

**설명:** 요약 테이블에서 열 통계량이 포함된 섹션을 펼치거나 접습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Columns Manager;obj << Show Statistics( 0 );

```

