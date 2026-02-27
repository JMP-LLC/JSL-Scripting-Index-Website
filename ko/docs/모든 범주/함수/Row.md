# Row



### As Table

**구문:** dt = As Table( matrix, &lt;matrix2,...&gt; &lt; &lt;&lt;invisible/private&gt;, &lt; &lt;&lt;Column Names(name list) &gt; )

**설명:** 행렬을 데이터 테이블로 변환합니다. invisible 옵션을 사용하여 테이블이 표시되지 않도록 할 수 있습니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

As Table( [1 2 3, 4 5 6] );

```

### Col Stored Value

**구문:** y = Col Stored Value( &lt;dt&gt;, xCol, &lt;row=Row()&gt; )

**설명:** 열 특성이 적용되지 않은 열 값을 반환합니다. 행 옵션이 지정되지 않은 경우 현재 행이 가정됩니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Open( "$SAMPLE_DATA/Equity.jmp" );:JOB << Set Property( "Missing Value Codes", {"Other"} );y1 = Col Stored Value( :JOB, 10 );y2 = Col Stored Value( :JOB, 11 );y3 = Col Stored Value( :JOB, 14 );y4 = Col Stored Value( :JOB, 15 );Show( y1, y2, y3, y4 );

```

### Column

**구문:** y = Column( name|number ); y = Column( dataTable, name|number, &lt;"formatted"&gt; )

**설명:** 지정된 데이터 테이블 열에 대한 참조를 반환합니다. "formatted" 키워드를 사용하면 값 라벨과 같이 형식이 지정된 데이터에 액세스할 수 있습니다.

**JMP추가된 버전:** 버전 14 이전

**예제 1**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );col4 = Column( 4 );ht = Column( "height" );col4[1] + ht[2];

```

**예제 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << run script( "Set Sex Value Labels" );col = Column( dt, "sex", "formatted" );Write( "\!n", col[5] );Write( "\!nData value returned is the formatted value of row 5." );

```

### Column Name

**구문:** name = Column Name( n )

**설명:** 현재 데이터 테이블의 n번째 열의 이름을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );Column Name( 4 );

```

### Count

**구문:** y = Count( start, end, s, &lt;n=1&gt; )

**설명:** start부터 end까지 s 간격으로 n번 반복하는 숫자 시퀀스에서 i번째 값을 반환합니다. 여기서 i는 Row() 계산식 값에 따라 결정됩니다. Row() 계산식에 종속되므로 Count() 계산식은 일반적으로 열 계산식에 사용됩니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

New Table( "Count Example",	Add Rows( 12 ),	New Column( "Count1" ),	New Column( "Count2" ),	New Column( "Count3", Set Formula( Count( 0, 6, 4, 1 ) ) ));For Each Row(	:Count1[Row()] = Count( 0, 6, 4, 1 );	:Count2[Row()] = Count( 0, 6, 3, 2 ););

```

### Current Data Table

**구문:** dt = Current Data Table( &lt;Project(title|index|box|window)&gt; ); Current Data Table( dt )

**설명:** 현재 데이터 테이블을 반환하거나 지정한 데이터 테이블을 현재 데이터 테이블로 설정합니다.



프로젝트를 지정하려면 제목, 인덱스, 표시 상자 또는 창 개체와 함께 선택적 Project() 인수를 사용하십시오. 프로젝트의 스크립트를 실행 중일 때 프로젝트 없음을 지정하려면 Project(0)을 사용하십시오.

**JMP추가된 버전:** 버전 14 이전

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );Current Data Table() << Get Column Names;

```

### Data Table

**구문:** dt = Data Table( name|number )

**설명:** 지정된 데이터 테이블에 대한 참조를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );Open( "$SAMPLE_DATA/Cars.jmp" );Data Table( 1 );

```

### Dif

**구문:** y = Dif( x, &lt;n=1&gt; )

**설명:** x - Lag( x, n )을 반환합니다. "1차 차이"라고도 합니다. Row()에 종속되므로 Dif()는 주로 열 계산식에 유용합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );Row() = 3;Dif( :height, 2 );

```

### Dim

**구문:** y = Dim(); y = Dim( dt ); y = Dim( matrix )

**설명:** 현재 데이터 테이블, 지정된 데이터 테이블 또는 행렬의 차원이 포함된 행 벡터를 반환합니다. 차원은 행과 열의 개수이며 해당 순서로 나열됩니다.

**JMP추가된 버전:** 14

```jsl

Dim( [11 22, 33 44, 55 66] );

```

### Get Data Table

**구문:** dt = Get Data Table( &lt;Project(title|index|box|window)&gt;, name|index )

**설명:** 지정한 데이터 테이블에 대한 참조를 반환합니다.



현재 프로젝트(또는 프로젝트의 스크립트를 실행 중이지 않은 경우 프로젝트 없음)의 테이블로 검색이 제한됩니다.



프로젝트를 지정하려면 제목, 인덱스, 표시 상자 또는 창 개체와 함께 선택적 Project() 인수를 사용하십시오. 프로젝트의 스크립트를 실행 중일 때 프로젝트 없음을 지정하려면 Project(0)을 사용하십시오.

**JMP추가된 버전:** 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );Open( "$SAMPLE_DATA/Cars.jmp" );Get Data Table( 1 );

```

### Get Data Table List

**구문:** tableList = Get Data Table List( &lt;Project(title|index|box|window)&gt; )

**설명:** 모든 열린 데이터 테이블을 반환합니다.



목록은 현재 프로젝트(또는 프로젝트의 스크립트를 실행 중이지 않은 경우 프로젝트 없음)로 제한됩니다.



프로젝트를 지정하려면 제목, 인덱스, 표시 상자 또는 창 개체와 함께 선택적 Project() 인수를 사용하십시오. 프로젝트의 스크립트를 실행 중일 때 프로젝트 없음을 지정하려면 Project(0)을 사용하십시오.

**JMP추가된 버전:** 14

**예제 1**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );Open( "$SAMPLE_DATA/Cars.jmp" );Get Data Table List();

```

**예제 2**

```jsl

project = Open( "$SAMPLE_PROJECTS/Sports.jmpprj" );Get Data Table List( Project( project ) );

```

### Lag

**구문:** y = Lag( &lt;x&gt;, &lt;n=1&gt; )

**설명:** Row() - n으로 설정된 현재 행의 x 인수 값을 반환합니다. Row()에 종속되므로 Lag()는 주로 열 계산식에 유용합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );Row() = 3;Lag( :height, 2 );

```

### N Row

**구문:** y = N Row(); y = N Row( dt ); y = N Row( matrix )

**설명:** 현재 데이터 테이블, 지정된 데이터 테이블 또는 행렬의 행 수를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

N Row( [11 22, 33 44] );

```

### N Rows

**구문:** y = N Rows(); y = N Rows( dt ); y = N Rows( matrix )

**설명:** 현재 데이터 테이블, 지정된 데이터 테이블 또는 행렬의 행 수를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

N Rows( [11 22, 33 44] );

```

### N Table

**구문:** n = N Table()

**설명:** 현재 열려 있는 데이터 테이블의 수를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

**예제 1**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );N Table();

```

**예제 2**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );Open( "$SAMPLE_DATA/Cars.jmp" );Open( "$SAMPLE_DATA/Solubility.jmp" );d = {};For( i = 1, i <= N Table(), i++,	d[i] = Data Table( i ) << GetName);d;

```

### New Column

**구문:** dc = New Column( name, &lt;"Numeric"|"Character"|"RowState"|"Expression"&gt;, &lt;"Continuous"|"Ordinal"|"Nominal"|"Multiple Response"|"Unstructured Text"|"Vector"|"None"&gt;, &lt;Width( n )|Format(format name, width, precision)&gt;, &lt;Like(:other column)&gt;, &lt;actions&gt; )

**설명:** 현재 데이터 테이블에 새 열을 생성합니다. 선택적 actions 인수는 데이터 열에서 지원되는 모든 메시지입니다.

**JMP추가된 버전:** 버전 14 이전

#### Like

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );New Column( "like name", Like( :name ) );

```

#### 단순

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );New Column( "example", "Numeric", "Continuous", Width( 5 ), <<Set Each Value( 100 ) );

```

### New Column by Text Matching

**구문:** dc = New Column by Text Matching( Column(:name), Set Regex(), &lt;Output Column Name("Name")&gt;, &lt;Use Result(0 | 1)&gt; )

**설명:** 기존 열에서 정규 표현식 패턴 매칭을 수행하여 새 열을 생성합니다.

**JMP추가된 버전:** 16

```jsl

Open( "$SAMPLE_DATA/Aircraft Incidents.jmp" );New Column by Text Matching(	Column( :Narrative Cause ),	Set Regex( Library( "Words" ), Library( "Time" ), Library( "Units" ) ),	Output Column Name( "Match Output" ),	Use Result( 1 ));

```

### New Table

**구문:** dt = New Table( name, &lt;visibility("private"|"invisible"|"visible")&gt;, &lt;Enable Filter Views(bool)&gt;, &lt;actions&gt; )

**설명:** 새 데이터 테이블을 생성합니다. "Invisible"은 데이터 테이블을 보기에서 숨기되 JMP 홈 창의 목록에 표시합니다. "Private"은 테이블을 완전히 숨깁니다. "Visible"은 기본값으로, 표시 가능하고 JMP 홈 창에 나열되는 정규 테이블을 생성합니다. 선택적인 actions 인수는 데이터 테이블이 지원하는 메시지입니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

New Table( "Little Class",	Add Rows( 3 ),	New Column( "name", Character, Nominal, Set Values( {"KATIE", "LOUISE", "JANE"} ) ),	New Column( "age", Nominal, Set Values( [12, 13, 13] ) ),	New Column( "weight", Continuous, Set Values( [95, 123, 74] ) ));

```

### Row

**구문:** y = Row(); Row() = y

**설명:** 데이터 테이블의 현재 행을 반환합니다. L-값으로 설정할 수 있습니다. 0 값을 할당하여 현재 행을 재설정합니다.

**JMP추가된 버전:** 버전 14 이전

#### 행 설정

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Row() = 3;:height * :weight;

```

#### 행 재설정

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Add Rows( 5 );Show( Row() );Row() = 0;

```

### Sequence

**구문:** y = Sequence( start, end, &lt;incr=1&gt;, &lt;n=1&gt; )

**설명:** incr씩 증분하고 n번 반복하여 start부터 end까지의 숫자 시퀀스에서 Row()번째 항목을 반환합니다. Row()에 종속되므로 Sequence() 계산식은 주로 열 계산식에서 유용합니다. JSL 행렬로 시퀀스를 생성하려면 Index() 항목을 참조하십시오.

**JMP추가된 버전:** 버전 14 이전

```jsl

Row() = 3;Sequence( 1, 9, 2 );

```

### Subscribe to Data Table List

**구문:** aSub = Subscribe to Data Table List( &lt;subscriber name | ""&gt;, &lt;OnOpen(fn) | OnClose(fn) | On Rename(fn)&gt;)

**설명:** 새 데이터 테이블이 추가되거나 닫히면 알림을 받을 데이터 테이블 목록을 구독합니다.

**JMP추가된 버전:** 버전 14 이전

**예제 1**

```jsl

f1 = Function( {dtab},	dtname = (dtab << getname());	Print( "opening" );	Print( dtname ););f2 = Function( {dtab},	dtname = (dtab << getname());	Print( "closing" );	Print( dtname ););aSub = Subscribe to Data Table List( , OnOpen( f1 ) );Subscribe to Data Table List( aSub, OnClose( f2 ) );dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Wait( 2 );Close( dt );

```

**예제 2**

```jsl

f1 = Function( {dtab},	dtname = (dtab << getname());	Print( "opening" );	Print( dtname ););f2 = Function( {dtab, b},	dtname = (dtab << getname());	Print( "renaming ", b, " to ", dtname ););aSub = Subscribe to Data Table List( , OnOpen( f1 ) );Subscribe to Data Table List( aSub, OnRename( f2 ) );dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Wait( 2 );dt << setname( "xxx" );

```

### Subscript

**구문:** y = x[i]; y = m[row, col]; y = Subscript( x, i )

**설명:** 참조가 가능한 즉, 서브스크립트가 가능한 개체의 i번째 값을 반환합니다. 데이터 테이블의 열, 행렬, 목록 또는 보고서 표시 요소일 수 있습니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

{11, 12, 13}[2];

```

### Suppress Formula Eval

**구문:** Suppress Formula Eval( &lt;suppress=1&gt; )

**설명:** 인수가 0이 아닌 경우 모든 데이터 테이블에서 계산식 실행을 제한합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Suppress Formula Eval( 1 );

```

### Unsubscribe to Data Table List

**구문:** aSub = Unsubscribe to Data Table List(&lt;subscriber name&gt;, &lt;"OnOpen" | "OnClose" | "OnRename" | "ALL"&gt;)

**설명:** "Subscribe to Data Table List" 명령을 통해 추가된 데이터 테이블 목록에 대한 구독을 제거합니다.

**JMP추가된 버전:** 버전 14 이전

**예제 1**

```jsl

f1 = Function( {dtab},	dtname = (dtab << getname());	Print( "opening" );	Print( dtname ););f2 = Function( {dtab},	dtname = (dtab << getname());	Print( "closing" );	Print( dtname ););aSub = Subscribe to Data Table List( , OnOpen( f1 ) );Subscribe to Data Table List( aSub, OnClose( f2 ) );dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Wait( 2 );Close( dt );Unsubscribe to Data Table List( aSub, "on close" );dt = Open( "$SAMPLE_DATA/Big Class.jmp" );

```

**예제 2**

```jsl

f1 = Function( {dtab},	dtname = (dtab << getname());	Print( "opening" );	Print( dtname ););f2 = Function( {dtab},	dtname = (dtab << getname());	Print( "closing" );	Print( dtname ););aSub = Subscribe to Data Table List( , OnOpen( f1 ) );Subscribe to Data Table List( aSub, OnClose( f2 ) );dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Wait( 2 );Close( dt );Unsubscribe to Data Table List( aSub, "all" );dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Wait( 2 );Close( dt );

```

