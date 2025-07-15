# Date Time



### Abbrev Date

**구문:** s = Abbrev Date( datetime, &lt;format&gt; )

**설명:** 날짜/시간 값에 대한 로케일별 약어 표현을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Abbrev Date( Today() );

```

### As Date

**구문:** dt = As Date( datetime )

**설명:** 출력을 위해 내부적으로 날짜로 표시된 날짜/시간 값을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
As Date( Today() );

```

### Date DMY

**구문:** z = Date DMY( d, m, y )

**설명:** 일, 월, 연도를 JMP 날짜/시간 값(1904년 1월 1일 이후의 시간(초))으로 변환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
As Date( Date DMY( 15, 7, 2000 ) );

```

### Date Difference

**구문:** delta = Date Difference( dt1, dt2, intervalName, &lt;alignment="start"&gt; )

**설명:** 두 날짜/시간 값의 간격 차이를 반환합니다. intervalName에 지원되는 값은 "연도", "분기", "월", "주", "일", "시", "분", "초" 및 "숫자"입니다. alignment가 "Start"이면 전체 또는 부분 간격을 포함하고 "Actual"이면 전체 간격만 포함합니다. alignment가 "Fractional"이면 "연도", "분기" 및 "월" 간격 기간에 대한 평균을 사용하여 소수 차이를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

**예제 1**

```jsl

Names Default To Here( 1 );
Date Difference( Date DMY( 31, 1, 2015 ), Date DMY( 1, 3, 2015 ), "Month", "start" );

```

**예제 2**

```jsl

Names Default To Here( 1 );
Date Difference( Date DMY( 31, 1, 2015 ), Date DMY( 1, 3, 2015 ), "Month", "actual" );

```

**예제 3**

```jsl

Names Default To Here( 1 );
Date Difference( Date DMY( 31, 1, 2015 ), Date DMY( 1, 3, 2015 ), "Month", "fractional" );

```

### Date Increment

**구문:** d = Date Increment( datetime, intervalName, &lt;incr=1&gt;, &lt;alignment="start"&gt; )

**설명:** incr개의 간격을 추가하여 새 날짜/시간 값을 반환합니다. intervalName에 지원되는 값은 "연도", "분기", "월", "주", "일", "시", "분", "초" 및 "숫자"입니다. alignment가 "Start"이면 증분을 추가하기 전에 가장 가까운 간격으로 절단되고 "Actual"이면 전체 입력 날짜/시간이 유지됩니다. alignment가 "Fractional"이면 "연도", "분기" 및 "월" 간격 기간에 대한 평균을 사용하여 소수 incr 값이 허용됩니다.

**JMP추가된 버전:** 버전 14 이전

**예제 1**

```jsl

Names Default To Here( 1 );
Date Increment( Today(), "Month", 100, "start" );

```

**예제 2**

```jsl

Names Default To Here( 1 );
Date Increment( Today(), "Month", 100, "actual" );

```

**예제 3**

```jsl

Names Default To Here( 1 );
Date Increment( Today(), "Month", 100, "fractional" );

```

### Date MDY

**구문:** z = Date MDY( m, d, y )

**설명:** 월, 일 및 연도를 JMP 날짜 값(1904년 1월 1일 이후의 시간(초))으로 변환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
As Date( Date MDY( 7, 15, 2000 ) );

```

### Day

**구문:** d = Day( datetime )

**설명:** 날짜/시간 값의 한달 기준 날짜 부분(1 ~ 31)을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Day( Today() );

```

### Day Of Week

**구문:** d = Day Of Week( datetime )

**설명:** 날짜/시간 값의 요일 부분(일요일 = 1, ..., 토요일 = 7)을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Day Of Week( Today() );

```

### Day Of Year

**구문:** d = Day Of Year( datetime )

**설명:** 날짜/시간 값의 일년 기준 날짜 부분을 반환합니다. 1월 1일은 1입니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Day Of Year( Today() );

```

### Days In Month

**구문:** v = Days In Month(year, month)

**설명:** 지정된 월의 일 수를 반환합니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
v = Days In Month( 2016, 2 );

```

### Format

**구문:** s = Format( x, formatString, &lt;options&gt; )s = Format( x, "Format Pattern", pattern, &lt;options&gt; )

**설명:** 지정된 형식으로 숫자를 반환합니다. 형식에는 열 정보 대화상자의 항목(예: "최적" 및 "h:m:s")이 포함됩니다. p 값, 통화, 날짜 및 시간, 지리 형식을 포함한 다른 옵션의 경우 도움말 항목을 참조하십시오.

**JMP추가된 버전:** 버전 14 이전

**날짜/시간**

```jsl

Names Default To Here( 1 );
Print( Format( Today(), "yyyyQq" ), Format( Today(), "m/d/y h:m" ) );

```

**백분율, 통화**

```jsl

Names Default To Here( 1 );
pct = Format( 0.123, "Percent", 2 );
amt = Format( 123.4567, "Currency", "EUR", 2 );
result = "Revenue increase: " || amt || " or " || pct || ".";

```

**전체 정밀도**

```jsl

Names Default To Here( 1 );
Show( Format( 88.54, "Best" ), Format( 88.54, "Best", "Full Precision" ) );

```

**형식 패턴**

```jsl

Names Default To Here( 1 );
Print( Format( Today(), "Format Pattern", "<YYYY></><MM></><DD> <hh24><:><mm><:><ss>" ) );

```

### Format Date

**구문:** s = Format( x, formatString, &lt;options&gt; )s = Format( x, "Format Pattern", pattern, &lt;options&gt; )

**설명:** 지정된 형식으로 숫자를 반환합니다. 형식에는 열 정보 대화상자의 항목(예: "최적" 및 "h:m:s")이 포함됩니다. p 값, 통화, 날짜 및 시간, 지리 형식을 포함한 다른 옵션의 경우 도움말 항목을 참조하십시오.

**JMP추가된 버전:** 버전 14 이전

**예제 1**

```jsl

Names Default To Here( 1 );
Print( Format( Today(), "yyyyQq" ), Format( Today(), "m/d/y h:m" ) );

```

**예제 2**

```jsl

Names Default To Here( 1 );
Print( Format( Today(), "Format Pattern", "<YYYY></><MM></><DD> <hh24><:><mm><:><ss>" ) );

```

**예제 3**

```jsl

Names Default To Here( 1 );
pct = Format( 0.123, "Percent", 2 );
amt = Format( 123.4567, "Currency", "EUR", 2 );
result = "Revenue increase: " || amt || " or " || pct || ".";

```

### HP Time

**구문:** t = HP Time()

**설명:** 고정밀 시간 값(마이크로초 단위)을 반환합니다. 다른 HP Time() 값과 관련에서만 유용합니다. 시간 값은 JMP 세션을 시작한 이후 경과된 시간(마이크로초 단위)을 나타냅니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
bt = HP Time();
Open( "$SAMPLE_DATA/Big Class.jmp" );
et = HP Time();
it = et - bt;
Show( it );

```

### Hour

**구문:** hr = Hour( datetime, &lt;12&gt; )

**설명:** 날짜/시간 값의 시간 부분을 반환합니다. 12시간 모드의 경우 (12, 1 ~ 11)이고 24시간 모드의 경우 (0 ~ 23)입니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Hour( Today() );

```

### ISO Year

**구문:** yr = ISO Year( datetime )

**설명:** 날짜/시간 값의 ISO 연도를 반환합니다. ISO 연도는 ISO 주에 해당합니다. 이때 주는 최소 4일 이상 포함된 첫 번째 주의 월요일에 시작됩니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
ISO Year( Today() );

```

### In Days

**구문:** y = In Days( &lt;x=1&gt; )

**설명:** x를 일 수에서 동등한 수의 초로 변환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
In Days( 1.5 );

```

### In Hours

**구문:** y = In Hours( &lt;x=1&gt; )

**설명:** x를 시간 수에서 동등한 수의 초로 변환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
In Hours( 0.5 );

```

### In Minutes

**구문:** y = In Minutes( &lt;x=1&gt; )

**설명:** x를 분 수에서 동등한 수의 초로 변환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
In Minutes( 1 );

```

### In Weeks

**구문:** y = In Weeks( &lt;x=1&gt; )

**설명:** x를 주 수에서 동등한 수의 초로 변환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
In Weeks( 1 );

```

### In Years

**구문:** y = In Years( &lt;x=1&gt; )

**설명:** x를 연도 수에서 동등한 수의 초로 변환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
In Years( 1 );

```

### Informat

**구문:** dt = In Format( s, formatString, &lt; &lt;&lt;Use Locale(b=1)&gt;, &lt; &lt;&lt;Restrict &gt; )dt = In Format( s, "Format Pattern", pattern, &lt; &lt;&lt;Use Locale(b=1)&gt; )

**설명:** 지정된 형식의 문자열을 파싱합니다. 날짜/시간 형식의 경우 값은 As Date()로 묶인 것처럼 표현되고 ddMonyyyy 형식의 날짜를 반환합니다. "Best" formatString과 함께 사용되는 선택적 <<Restrict는 정수, 십진수 및 과학적 형식을 사용한 변환만 허용합니다.

**JMP추가된 버전:** 버전 14 이전

**예제 1**

```jsl

Names Default To Here( 1 );
Informat( "07152000", "MMDDYYYY" );

```

**예제 2**

```jsl

Names Default To Here( 1 );
Informat( "07.15.2000", "Format Pattern", "<MM>.<DD>.<YYYY>" );

```

**예제 3**

```jsl

Names Default To Here( 1 );
Informat( "86.8287° W", "Longitude DDD" );

```

**예제 4**

```jsl

Names Default To Here( 1 );
Informat( "123.45%", "Percent" );

```

**예제 5**

```jsl

Names Default To Here( 1 );
Show(
	Informat( "1.23e4", "Best" ),
	Informat( "1.23e4", "Best", <<Restrict ),
	Informat( "1989-10-04", "Best" ),
	Informat( "1989-10-04", "Best", <<Restrict )
);

```

### Is Leap Year

**구문:** v = Is Leap Year(year)

**설명:** 지정된 연도가 윤년인지 여부를 반환합니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
v = Is Leap Year( 2016 );

```

### Long Date

**구문:** s = Long Date( datetime, &lt;format&gt; )

**설명:** 날짜/시간 값에 대한 long 형식의 로케일별 표현을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Long Date( Today() );

```

### MDYHMS

**구문:** s = MDYHMS( datetime, &lt;format&gt; )

**설명:** 월, 일, 연도, 시간, 분, 초 순서로 날짜/시간 값 표현을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
MDYHMS( Today() );

```

### Minute

**구문:** min = Minute( datetime )

**설명:** 날짜/시간 값의 분 부분(0 ~ 59)을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Minute( Today() );

```

### Month

**구문:** mon = Month( datetime )

**설명:** 날짜/시간 값의 월 부분(1 ~ 12)을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Month( Today() );

```

### Nth Day Of Week in the Month

**구문:** n = Nth Day Of Week in the Month( datetime )

**설명:** 해당 월에서 날짜/시간 인수의 요일 인스턴스가 발견된 서수를 나타내는 정수를 반환합니다. 예를 들어 2019년 11월 28일은 해당 월의 4번째 목요일이므로 함수에서 4를 반환합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
Nth Day Of Week in the Month( Date MDY( 11, 28, 2019 ) );

```

### Parse Date

**구문:** dt = In Format( s, formatString, &lt; &lt;&lt;Use Locale(b=1)&gt;, &lt; &lt;&lt;Restrict &gt; )dt = In Format( s, "Format Pattern", pattern, &lt; &lt;&lt;Use Locale(b=1)&gt; )

**설명:** 지정된 형식의 문자열을 파싱합니다. 날짜/시간 형식의 경우 값은 As Date()로 묶인 것처럼 표현되고 ddMonyyyy 형식의 날짜를 반환합니다. "Best" formatString과 함께 사용되는 선택적 <<Restrict는 정수, 십진수 및 과학적 형식을 사용한 변환만 허용합니다.

**JMP추가된 버전:** 버전 14 이전

**예제 1**

```jsl

Names Default To Here( 1 );
Informat( "07152000", "MMDDYYYY" );

```

**예제 2**

```jsl

Names Default To Here( 1 );
Informat( "07.15.2000", "Format Pattern", "<MM>.<DD>.<YYYY>" );

```

**예제 3**

```jsl

Names Default To Here( 1 );
Informat( "86.8287° W", "Longitude DDD" );

```

**예제 4**

```jsl

Names Default To Here( 1 );
Informat( "123.45%", "Percent" );

```

**예제 5**

```jsl

Names Default To Here( 1 );
Show(
	Informat( "1.23e4", "Best" ),
	Informat( "1.23e4", "Best", <<Restrict ),
	Informat( "1989-10-04", "Best" ),
	Informat( "1989-10-04", "Best", <<Restrict )
);

```

### Quarter

**구문:** q = Quarter( datetime )

**설명:** 날짜/시간 값의 분기 부분(1 ~ 4)을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Quarter( Today() );

```

### Second

**구문:** sec = Second( datetime )

**설명:** 날짜/시간 값의 초 부분(소수 부분을 포함하여 0 ~ 60)을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Second( Today() );

```

### Short Date

**구문:** s = Short Date( datetime, &lt;format&gt; )

**설명:** 날짜/시간 값에 대한 숫자 형식(MM/DD/YYYY)의 로케일별 표현을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Short Date( Today() );

```

### Tick Seconds

**구문:** t = Tick Seconds()

**설명:** 시간 값(초)을 반환합니다. 일반적으로 1/60초("눈금")까지 정확합니다. 다른 Tick Seconds() 값과 관련해서만 유용합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
t1 = Tick Seconds();
Open( "$SAMPLE_DATA/Big Class.jmp" );
t2 = Tick Seconds();
Round( t2 - t1, 3 );

```

### Time Of Day

**구문:** sec = Time Of Day( datetime )

**설명:** 날짜/시간 값의 시간 부분(소수 초 포함)을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Format( Time Of Day( Today() ), "h:m:s" );

```

### Today

**구문:** dt = Today()

**설명:** 현재 시간의 날짜/시간 값을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
As Date( Today() );

```

### Week Of Year

**구문:** d = Week Of Year( datetime, &lt;rule=1&gt; )

**설명:** 세 개의 규칙 중 하나를 사용하여 날짜/시간 값이 포함된 주를 반환합니다. 기본적으로(규칙 1) 주가 일요일에 시작되고 해당 연도의 첫 번째 일요일은 주 2가 됩니다. 주 1은 부분 주이거나 비어 있습니다(2006년처럼). 규칙 2에서는 첫 번째 일요일이 주 1이고 그 앞의 일은 주 0입니다. 규칙 3에서는 ISO 주 번호가 반환되며 이때 주는 월요일에 시작되고 주 1이 한 해의 첫 번째 주(해당 연도의 4개 일 포함)입니다. ISO 주를 사용할 경우 한 해의 처음 또는 마지막 3일은 이웃 연도의 주 번호에 속할 수 있습니다.

**JMP추가된 버전:** 버전 14 이전

**예제 1**

```jsl

Names Default To Here( 1 );
Week Of Year( Today() );

```

**예제 2**

```jsl

Names Default To Here( 1 );
Show( Week Of Year( 01jan2012, 1 ), Week Of Year( 01jan2012, 2 ), Week Of Year( 01jan2012, 3 ) );

```

### Year

**구문:** yr = Year( datetime )

**설명:** 날짜/시간 값의 연도 부분을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Year( Today() );

```

