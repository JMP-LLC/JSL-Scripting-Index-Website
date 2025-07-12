# Reliability Forecast



## 공유 항목 메시지

### Action

**구문:** obj << Action

**설명:** 실행할 표현식을 삽입하기 위한 플랫폼 내의 다목적 트랩도어. 임시로 표시 상자 및 데이터 테이블 유형을 플랫폼에 설정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

### Apply Preset

**구문:** Apply Preset( preset ); Apply Preset( source, label, <Folder( folder {, folder2, ...} )> )

**설명:** 이전에 생성된 사전 설정을 개체에 적용하여 옵션과 사용자 정의를 저장된 설정과 일치하도록 업데이트합니다.

**JMP추가된 버전:** 18

**이름으로 검색**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

**익명 사전 설정**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();
dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );
Wait( 1 );
obj2 << Apply Preset( preset );

```

**폴더 내에서 검색**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

### Automatic Recalc

**구문:** obj << Automatic Recalc( state=0|1 )

**설명:** 제외 항목 및 데이터 변경이 있을 때 분석을 자동으로 다시 실행합니다. 자동 재계산 옵션이 설정된 경우 재계산하기 전에 제외 항목 및 데이터 변경이 적용되게 하려면 Wait(0) 명령을 사용하는 것이 좋습니다.

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
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

### Column Switcher

**구문:** obj << Column Switcher(column reference, {column reference, ...}, < Title(title) >, < Close Outline(0|1) >, < Retain Axis Settings(0|1) >, < Layout(0|1) >)

**설명:** 플랫폼 변수를 변경하기 위한 제어판을 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher( :marital status, {:sex, :country, :marital status} );

```

### Copy Script

**구문:** obj << Copy Script

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 클립보드에 넣습니다.

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
obj << Copy Script;

```

### Data Table Window

**구문:** obj << Data Table Window

**설명:** 이 분석에 대한 데이터 테이블 창을 앞으로 가져옵니다.

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
obj << Data Table Window;

```

### Get By Levels

**구문:** obj << Get By Levels

**설명:** 기준 그룹 열을 값에 매핑하는 연관 배열을 반환합니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

### Get Container

**구문:** obj << Get Container

**설명:** 개체의 콘텐츠를 담고 있는 컨테이너 상자에 대한 참조를 반환합니다.

**일반**

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
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**필터 사용 플랫폼**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Show Control Panel( 0 ),
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),
	Local Data Filter(
		Add Filter(
			columns( :age, :sex, :height ),
			Where( :age == {12, 13, 14} ),
			Where( :sex == "F" ),
			Where( :height >= 55 ),
			Display( :age, N Items( 6 ) )
		)
	)
);
New Window( "platform boxes",
	H List Box(
		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),
		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )
	)
);

```

### Get Data Table

**구문:** obj << Get Data Table

**설명:** 데이터 테이블에 대한 참조를 반환합니다.

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
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Script

**구문:** obj << Get Script

**설명:** 이 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

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
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**구문:** obj << Get Script With Data Table

**설명:** 이 데이터 테이블을 참조하는 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

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
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**구문:** obj << Get Timing

**설명:** 플랫폼 시작 시간을 설정합니다.

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
t = obj << Get Timing;
Show( t );

```

### Get Web Support

**구문:** obj << Get Web Support

**설명:** 표시 개체에 대한 대화식 HTML 지원 수준을 나타내는 숫자를 반환합니다. 1은 일부 또는 모든 요소가 지원됨을 의미하고 0은 지원되지 않음을 의미합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

### Get Where Expr

**구문:** obj << Get Where Expr

**설명:** By() 또는 Where()를 사용하여 플랫폼이 시작된 경우 데이터 부분집합에 대한 Where 표현식을 반환하고, 그렇지 않은 경우 Empty()를 반환합니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );
Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

### Ignore Platform Preferences

**구문:** Ignore Platform Preferences( state=0|1 )

**설명:** 플랫폼의 현재 환경 설정을 무시합니다. 생성 후 플랫폼으로 전송될 때 메시지가 무시됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Ignore Platform Preferences( 1 ),
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

### Local Data Filter

**구문:** obj << Local Data Filter

**설명:** 데이터를 특정 그룹 또는 범위로 필터링합니다. 이 플랫폼에서만 사용 가능합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :country ) ),
	Local Data Filter(
		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),
		Mode( Show( 1 ), Include( 1 ) )
	)
);

```

### New JSL Preset

**구문:** New JSL Preset( preset )

**설명:** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
preset = obj << New JSL Preset( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) );
Wait( 1 );
obj << Apply Preset( preset );

```

### New Preset

**구문:** obj = New Preset()

**설명:** 개체에 적용된 옵션과 사용자 정의를 나타내는 익명 사전 설정을 생성합니다. 이 개체를 Apply Preset에 전달하여 같은 유형의 다른 개체에 설정을 복사할 수 있습니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

### Paste Local Data Filter

**구문:** obj << Paste Local Data Filter

**설명:** 클립보드의 로컬 데이터 필터를 현재 보고서에 적용합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
filter = dist << Local Data Filter( Add Filter( columns( :Region ), Where( :Region == "MW" ) ) );
filter << Copy Local Data Filter;
dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );
Wait( 1 );
dist2 << Paste Local Data Filter;

```

### Redo Analysis

**구문:** obj << Redo Analysis

**설명:** 동일한 분석을 새 창에서 다시 실행합니다. 데이터가 변경된 경우에는 분석결과가 달라집니다.

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
obj << Redo Analysis;

```

### Relaunch Analysis

**구문:** obj << Relaunch Analysis

**설명:** 플랫폼 시작 창을 열고 보고서를 생성하는 데 사용된 설정을 불러옵니다.

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
obj << Relaunch Analysis;

```

### Remove Column Switcher

**구문:** obj << Remove Column Switcher

**설명:** 플랫폼에 추가된 가장 최근 열 전환기를 제거합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher( :marital status, {:sex, :country, :marital status} );
Wait( 2 );
obj << Remove Column Switcher;

```

### Remove Local Data Filter

**구문:** obj << Remove Local Data Filter

**설명:** 로컬 데이터 필터가 생성된 경우 로컬 데이터 필터를 제거하고 데이터 테이블의 모든 데이터를 직접 사용하도록 플랫폼을 복원합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dist = dt << Distribution(
	Nominal Distribution( Column( :country ) ),
	Local Data Filter(
		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),
		Mode( Show( 1 ), Include( 1 ) )
	)
);
Wait( 2 );
dist << remove local data filter;

```

### Render Preset

**구문:** Render Preset( preset )

**설명:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

### Report

**구문:** obj << Report;

Report( obj )

**설명:** 보고서 개체에 대한 참조를 반환합니다.

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
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**구문:** obj << Report View( "전체"|"요약" )

**설명:** 보고서 보기는 플랫폼 보고서에 표시되는 상세 수준을 결정합니다. Full은 모든 상세 정보를 표시하고 Summary는 플랫폼에 따라 선택된 콘텐츠만 표시합니다. 사용자 정의된 동작의 경우 표시 상자는 <<Set Summary Behavior 메시지를 지원합니다.

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
obj << Report View( "Summary" );

```

### Save Script for All Objects

**구문:** obj << Save Script for All Objects

**설명:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

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
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**구문:** obj << Save Script for All Objects To Data Table( <name> )

**설명:** 모든 보고서 개체에 대한 스크립트를 현재 데이터 테이블에 저장합니다. 이 옵션은 창에 여러 보고서가 있을 때 유용합니다. 스크립트 이름을 따옴표로 묶어 지정하는 경우 외에는 첫 번째 플랫폼 이름을 따라 스크립트 이름이 지정됩니다.

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
collist = Transform Each( {i}, 3 :: 38, Output( "List" ), Column( dt, i ), By( _bycol ) );
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
obj[1] << Save Script for All Objects To Data Table;

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
collist = Transform Each( {i}, 3 :: 38, Output( "List" ), Column( dt, i ), By( _bycol ) );
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
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**구문:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 데이터 테이블에 테이블 특성으로 저장합니다.

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
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**구문:** obj << Save Script to Journal

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 이 스크립트가 포함된 저널에 버튼을 추가합니다.

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
obj << Save Script to Journal;

```

### Save Script to Report

**구문:** obj << Save Script to Report

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 보고서 자체에 표시합니다. 수행된 작업에 대한 인쇄된 기록을 유지하려는 경우에 유용합니다.

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
obj << Save Script to Report;

```

### Save Script to Script Window

**구문:** obj << Save Script to Script Window

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 현재 스크립트 텍스트 창에 추가합니다.

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
obj << Save Script to Script Window;

```

### SendToByGroup

**구문:** SendToByGroup( {":Column == level"}, command );

**설명:** 기준 그룹의 각 수준으로 플랫폼 명령을 보내거나 사용자 정의 명령을 표시합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	By( :Sex ),
	SendToByGroup( {:sex == "F"}, Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) ) ),
	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) )
);

```

### SendToEmbeddedScriptable

**구문:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**설명:** 포함된 스크립트 가능 개체로 보내기는 포함된 스크립트 가능 개체의 설정을 복원합니다.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
dt << Life Distribution(
	Y( :Time ),
	Censor( :Censor ),
	Censor Code( 1 ),
	<<Fit Weibull,
	SendToEmbeddedScriptable(
		Dispatch( {"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},
			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}
		)
	)
);

```

### SendToReport

**구문:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**설명:** Send To Report는 보고서 모양을 사용자 정의하기 위해 Dispatch 명령과 함께 사용됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :age ) ),
	Continuous Distribution( Column( :weight ) ),
	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) )
);

```

### Sync to Data Table Changes

**구문:** obj << Sync to Data Table Changes

**설명:** 제외 항목 및 데이터 변경 사항과 동기화합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
Wait( 1 );
dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );
dist << Sync To Data Table Changes;

```

### Title

**구문:** obj << Title( "new title" )

**설명:** 플랫폼의 제목을 설정합니다.

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
obj << Title( "My Platform" );

```

### Top Report

**구문:** obj << Top Report

**설명:** 보고서의 루트 노드에 대한 참조를 반환합니다.

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
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### View Web XML

**구문:** obj << View Web XML

**설명:** 대화식 HTML 보고서를 생성하는 데 사용된 XML 코드를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

## 연결된 생성자

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

## 항목 메시지

### Contract

**구문:** obj << Forecast( Contract( length, unit ) )

**설명:** 미래 위험을 예측하는 데 사용되는 계약의 기간 및 시간 단위를 지정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );
n = N Rows( dt );
mat = dt << get as matrix;
mat = (mat || J( n, 1, 1 )) |/ (mat || J( n, 1, 2 ));
dt = As Table( mat );
Column( dt, 2 ) << Format( "m/y", 7 );
Column( dt, 2 ) << set name( "Time" );
Column( dt, 1 ) << set name( "Volume" );
For Each( {i}, 3 :: 38,
	Column( dt, i ) << set name( Format( Date Increment( Column( dt, 2 )[i - 2], "Month", 1 ), "m/y", 7 ) )
);
Column( dt, 39 ) << set name( "Group" );
collist = Transform Each( {i}, 3 :: 38, Output( "List" ), Column( dt, i ) );
obj = dt << Reliability Forecast(
	Input Format( Nevada ),
	Production Count( :Volume ),
	Timestamp( :Time ),
	Failure Count( Eval List( collist ) ),
	Group ID( :Group ),
	Life Time Unit( Month ),
	Show Legend( 0 ),
	Show Graph Filter( 0 ),
	Forecast Options( Show Interval( 1 ) )
);
obj << Forecast(
	Group( "1" ),
	Risk Set(
		[1991, 2000, 1999, 2024, 1959, 1958, 2000, 2001, 1986, 1966, 1983, 2011, 2026, 1950, 1989, 1963, 1954,
		2030, 1981, 2006, 1991, 1950, 2025, 1996, 1987, 1957, 1988, 1966, 2038, 2014, 1962, 1965, 1952, 2045,
		2018, 2036]
	),
	Future Risk Set( [2003, 2003], [3139862400, 3142540800] ),
	Forecast To( "01/2004" ),
	Distribution( Weibull ),
	Contract( 5, Month ),
	Forecast Type( Cumulative ),
	Interval Type( No Interval ),
	Set Interval Level( 0.9 )
);
obj << Forecast(
	Group( "2" ),
	Risk Set(
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2026, 1950, 1989, 1963, 1954, 2030, 1981, 2006, 1991, 1950, 2025,
		1996, 1987, 1957, 1988, 1966, 2038, 2014, 1962, 1965, 1952, 2045, 2018, 2036]
	),
	Future Risk Set( [2000, 3000], [3139862400, 3142540800] ),
	Forecast To( "08/2005" ),
	Distribution( Weibull ),
	Contract( 36, Month ),
	Forecast Type( Incremental ),
	Interval Type( Prediction Interval ),
	Set Interval Level( 0.9 )
);

```

### Distribution

**구문:** obj << Forecast( Distribution( name ) )

**설명:** 미래 위험을 예측하는 데 사용되는 분포를 지정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );
n = N Rows( dt );
mat = dt << get as matrix;
mat = (mat || J( n, 1, 1 )) |/ (mat || J( n, 1, 2 ));
dt = As Table( mat );
Column( dt, 2 ) << Format( "m/y", 7 );
Column( dt, 2 ) << set name( "Time" );
Column( dt, 1 ) << set name( "Volume" );
For Each( {i}, 3 :: 38,
	Column( dt, i ) << set name( Format( Date Increment( Column( dt, 2 )[i - 2], "Month", 1 ), "m/y", 7 ) )
);
Column( dt, 39 ) << set name( "Group" );
collist = Transform Each( {i}, 3 :: 38, Output( "List" ), Column( dt, i ) );
obj = dt << Reliability Forecast(
	Input Format( Nevada ),
	Production Count( :Volume ),
	Timestamp( :Time ),
	Failure Count( Eval List( collist ) ),
	Group ID( :Group ),
	Life Time Unit( Month ),
	Show Legend( 0 ),
	Show Graph Filter( 0 ),
	Forecast Options( Show Interval( 1 ) )
);
obj << Forecast(
	Group( "1" ),
	Risk Set(
		[1991, 2000, 1999, 2024, 1959, 1958, 2000, 2001, 1986, 1966, 1983, 2011, 2026, 1950, 1989, 1963, 1954,
		2030, 1981, 2006, 1991, 1950, 2025, 1996, 1987, 1957, 1988, 1966, 2038, 2014, 1962, 1965, 1952, 2045,
		2018, 2036]
	),
	Future Risk Set( [2003, 2003], [3139862400, 3142540800] ),
	Forecast To( "01/2004" ),
	Distribution( Weibull ),
	Contract( 5, Month ),
	Forecast Type( Cumulative ),
	Interval Type( No Interval ),
	Set Interval Level( 0.9 )
);
obj << Forecast(
	Group( "2" ),
	Risk Set(
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2026, 1950, 1989, 1963, 1954, 2030, 1981, 2006, 1991, 1950, 2025,
		1996, 1987, 1957, 1988, 1966, 2038, 2014, 1962, 1965, 1952, 2045, 2018, 2036]
	),
	Future Risk Set( [2000, 3000], [3139862400, 3142540800] ),
	Forecast To( "08/2005" ),
	Distribution( Weibull ),
	Contract( 36, Month ),
	Forecast Type( Incremental ),
	Interval Type( Prediction Interval ),
	Set Interval Level( 0.9 )
);

```

### Forecast Options

**구문:** obj << Forecast Options( forecast message(), ... );

(obj << Forecast Options) << forecast message()

**설명:** 예측 보고서 스크립트 가능 개체에 메시지를 보냅니다. 예측 보고서의 빨간색 삼각형 메뉴에서 하나 이상의 옵션을 지정할 수 있습니다. 인수가 없는 경우 이 옵션은 예측 보고서 스크립트 가능 개체에 대한 JSL 참조를 반환하고, 인수가 있는 경우 이 옵션은 플랫폼 개체에 대한 JSL 참조를 반환합니다. 자세한 내용은 &apos;예측 옵션&apos; 아래의 항목을 참조하십시오.

**인수 없음**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );
obj = dt << Run Script( "Reliability Forecast" );
(obj << Forecast Options) << Show Interval( 0 );

```

**인수 포함**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );
obj = dt << Run Script( "Reliability Forecast" );
obj << Forecast Options( Animation( 0 ), Use Contract Length( 1 ), Show Interval( 1 ) );

```

### Forecast To

**구문:** obj << Forecast( Forecast To( time ) )

**설명:** 미래 위험을 예측할 최종 시간을 지정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );
n = N Rows( dt );
mat = dt << get as matrix;
mat = (mat || J( n, 1, 1 )) |/ (mat || J( n, 1, 2 ));
dt = As Table( mat );
Column( dt, 2 ) << Format( "m/y", 7 );
Column( dt, 2 ) << set name( "Time" );
Column( dt, 1 ) << set name( "Volume" );
For Each( {i}, 3 :: 38,
	Column( dt, i ) << set name( Format( Date Increment( Column( dt, 2 )[i - 2], "Month", 1 ), "m/y", 7 ) )
);
Column( dt, 39 ) << set name( "Group" );
collist = Transform Each( {i}, 3 :: 38, Output( "List" ), Column( dt, i ) );
obj = dt << Reliability Forecast(
	Input Format( Nevada ),
	Production Count( :Volume ),
	Timestamp( :Time ),
	Failure Count( Eval List( collist ) ),
	Group ID( :Group ),
	Life Time Unit( Month ),
	Show Legend( 0 ),
	Show Graph Filter( 0 ),
	Forecast Options( Show Interval( 1 ) )
);
obj << Forecast(
	Group( "1" ),
	Risk Set(
		[1991, 2000, 1999, 2024, 1959, 1958, 2000, 2001, 1986, 1966, 1983, 2011, 2026, 1950, 1989, 1963, 1954,
		2030, 1981, 2006, 1991, 1950, 2025, 1996, 1987, 1957, 1988, 1966, 2038, 2014, 1962, 1965, 1952, 2045,
		2018, 2036]
	),
	Future Risk Set( [2003, 2003], [3139862400, 3142540800] ),
	Forecast To( "01/2004" ),
	Distribution( Weibull ),
	Contract( 5, Month ),
	Forecast Type( Cumulative ),
	Interval Type( No Interval ),
	Set Interval Level( 0.9 )
);
obj << Forecast(
	Group( "2" ),
	Risk Set(
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2026, 1950, 1989, 1963, 1954, 2030, 1981, 2006, 1991, 1950, 2025,
		1996, 1987, 1957, 1988, 1966, 2038, 2014, 1962, 1965, 1952, 2045, 2018, 2036]
	),
	Future Risk Set( [2000, 3000], [3139862400, 3142540800] ),
	Forecast To( "08/2005" ),
	Distribution( Weibull ),
	Contract( 36, Month ),
	Forecast Type( Incremental ),
	Interval Type( Prediction Interval ),
	Set Interval Level( 0.9 )
);

```

### Forecast Type

**구문:** obj << Forecast( Forecast Type( type ) )

**설명:** 미래 위험을 예측하는 데 사용되는 수량 유형을 지정합니다. type 인수는 증분 또는 누적일 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );
n = N Rows( dt );
mat = dt << get as matrix;
mat = (mat || J( n, 1, 1 )) |/ (mat || J( n, 1, 2 ));
dt = As Table( mat );
Column( dt, 2 ) << Format( "m/y", 7 );
Column( dt, 2 ) << set name( "Time" );
Column( dt, 1 ) << set name( "Volume" );
For Each( {i}, 3 :: 38,
	Column( dt, i ) << set name( Format( Date Increment( Column( dt, 2 )[i - 2], "Month", 1 ), "m/y", 7 ) )
);
Column( dt, 39 ) << set name( "Group" );
collist = Transform Each( {i}, 3 :: 38, Output( "List" ), Column( dt, i ) );
obj = dt << Reliability Forecast(
	Input Format( Nevada ),
	Production Count( :Volume ),
	Timestamp( :Time ),
	Failure Count( Eval List( collist ) ),
	Group ID( :Group ),
	Life Time Unit( Month ),
	Show Legend( 0 ),
	Show Graph Filter( 0 ),
	Forecast Options( Show Interval( 1 ) )
);
obj << Forecast(
	Group( "1" ),
	Risk Set(
		[1991, 2000, 1999, 2024, 1959, 1958, 2000, 2001, 1986, 1966, 1983, 2011, 2026, 1950, 1989, 1963, 1954,
		2030, 1981, 2006, 1991, 1950, 2025, 1996, 1987, 1957, 1988, 1966, 2038, 2014, 1962, 1965, 1952, 2045,
		2018, 2036]
	),
	Future Risk Set( [2003, 2003], [3139862400, 3142540800] ),
	Forecast To( "01/2004" ),
	Distribution( Weibull ),
	Contract( 5, Month ),
	Forecast Type( Cumulative ),
	Interval Type( No Interval ),
	Set Interval Level( 0.9 )
);
obj << Forecast(
	Group( "2" ),
	Risk Set(
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2026, 1950, 1989, 1963, 1954, 2030, 1981, 2006, 1991, 1950, 2025,
		1996, 1987, 1957, 1988, 1966, 2038, 2014, 1962, 1965, 1952, 2045, 2018, 2036]
	),
	Future Risk Set( [2000, 3000], [3139862400, 3142540800] ),
	Forecast To( "08/2005" ),
	Distribution( Weibull ),
	Contract( 36, Month ),
	Forecast Type( Incremental ),
	Interval Type( Prediction Interval ),
	Set Interval Level( 0.9 )
);

```

### Future Risk Set

**구문:** obj << Forecast( Future Risk Set( count vector, time vector ) )

**설명:** 미래 위험을 예측하는 데 사용되는 미래 위험 집합을 지정합니다. 인수는 생산 개수 벡터와 미래 시간 벡터입니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );
n = N Rows( dt );
mat = dt << get as matrix;
mat = (mat || J( n, 1, 1 )) |/ (mat || J( n, 1, 2 ));
dt = As Table( mat );
Column( dt, 2 ) << Format( "m/y", 7 );
Column( dt, 2 ) << set name( "Time" );
Column( dt, 1 ) << set name( "Volume" );
For Each( {i}, 3 :: 38,
	Column( dt, i ) << set name( Format( Date Increment( Column( dt, 2 )[i - 2], "Month", 1 ), "m/y", 7 ) )
);
Column( dt, 39 ) << set name( "Group" );
collist = Transform Each( {i}, 3 :: 38, Output( "List" ), Column( dt, i ) );
obj = dt << Reliability Forecast(
	Input Format( Nevada ),
	Production Count( :Volume ),
	Timestamp( :Time ),
	Failure Count( Eval List( collist ) ),
	Group ID( :Group ),
	Life Time Unit( Month ),
	Show Legend( 0 ),
	Show Graph Filter( 0 ),
	Forecast Options( Show Interval( 1 ) )
);
obj << Forecast(
	Group( "1" ),
	Risk Set(
		[1991, 2000, 1999, 2024, 1959, 1958, 2000, 2001, 1986, 1966, 1983, 2011, 2026, 1950, 1989, 1963, 1954,
		2030, 1981, 2006, 1991, 1950, 2025, 1996, 1987, 1957, 1988, 1966, 2038, 2014, 1962, 1965, 1952, 2045,
		2018, 2036]
	),
	Future Risk Set( [2003, 2003], [3139862400, 3142540800] ),
	Forecast To( "01/2004" ),
	Distribution( Weibull ),
	Contract( 5, Month ),
	Forecast Type( Cumulative ),
	Interval Type( No Interval ),
	Set Interval Level( 0.9 )
);
obj << Forecast(
	Group( "2" ),
	Risk Set(
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2026, 1950, 1989, 1963, 1954, 2030, 1981, 2006, 1991, 1950, 2025,
		1996, 1987, 1957, 1988, 1966, 2038, 2014, 1962, 1965, 1952, 2045, 2018, 2036]
	),
	Future Risk Set( [2000, 3000], [3139862400, 3142540800] ),
	Forecast To( "08/2005" ),
	Distribution( Weibull ),
	Contract( 36, Month ),
	Forecast Type( Incremental ),
	Interval Type( Prediction Interval ),
	Set Interval Level( 0.9 )
);

```

### Get Results

**구문:** obj << Get Results

**설명:** 예측 결과를 포함하는 명명된 목록을 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );
obj = dt << Run Script( "Reliability Forecast" );
result = obj << Get Results;

```

### Group

**구문:** obj << Forecast( Group( group ), ... )

**설명:** 동일한 &apos;예측&apos; 절에 있는 모든 메시지를 보낼 그룹을 식별합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );
n = N Rows( dt );
mat = dt << get as matrix;
mat = (mat || J( n, 1, 1 )) |/ (mat || J( n, 1, 2 ));
dt = As Table( mat );
Column( dt, 2 ) << Format( "m/y", 7 );
Column( dt, 2 ) << set name( "Time" );
Column( dt, 1 ) << set name( "Volume" );
For Each( {i}, 3 :: 38,
	Column( dt, i ) << set name( Format( Date Increment( Column( dt, 2 )[i - 2], "Month", 1 ), "m/y", 7 ) )
);
Column( dt, 39 ) << set name( "Group" );
collist = Transform Each( {i}, 3 :: 38, Output( "List" ), Column( dt, i ) );
obj = dt << Reliability Forecast(
	Input Format( Nevada ),
	Production Count( :Volume ),
	Timestamp( :Time ),
	Failure Count( Eval List( collist ) ),
	Group ID( :Group ),
	Life Time Unit( Month ),
	Show Legend( 0 ),
	Show Graph Filter( 0 ),
	Forecast Options( Show Interval( 1 ) )
);
obj << Forecast(
	Group( "1" ),
	Risk Set(
		[1991, 2000, 1999, 2024, 1959, 1958, 2000, 2001, 1986, 1966, 1983, 2011, 2026, 1950, 1989, 1963, 1954,
		2030, 1981, 2006, 1991, 1950, 2025, 1996, 1987, 1957, 1988, 1966, 2038, 2014, 1962, 1965, 1952, 2045,
		2018, 2036]
	),
	Future Risk Set( [2003, 2003], [3139862400, 3142540800] ),
	Forecast To( "01/2004" ),
	Distribution( Weibull ),
	Contract( 5, Month ),
	Forecast Type( Cumulative ),
	Interval Type( No Interval ),
	Set Interval Level( 0.9 )
);
obj << Forecast(
	Group( "2" ),
	Risk Set(
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2026, 1950, 1989, 1963, 1954, 2030, 1981, 2006, 1991, 1950, 2025,
		1996, 1987, 1957, 1988, 1966, 2038, 2014, 1962, 1965, 1952, 2045, 2018, 2036]
	),
	Future Risk Set( [2000, 3000], [3139862400, 3142540800] ),
	Forecast To( "08/2005" ),
	Distribution( Weibull ),
	Contract( 36, Month ),
	Forecast Type( Incremental ),
	Interval Type( Prediction Interval ),
	Set Interval Level( 0.9 )
);

```

### Input Format

**구문:** obj = Reliability Forecast(...Input Format( Nevada|Dates|Time to Event )...)

**설명:** 분석을 위한 입력 데이터의 형식 유형을 지정합니다.

**Nevada 형식**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Small Production.jmp" );
dt << Reliability Forecast(
	Input Format( Nevada ),
	Production Count( :Sold Quantity ),
	Timestamp( :Sold Month ),
	Failure Count(
		:"08/2009"n, :"09/2009"n, :"10/2009"n, :"11/2009"n, :"12/2009"n, :"01/2010"n, :"02/2010"n
	),
	Life Time Unit( Month ),
	Interval Censored Failure( 1 ),
	Show Legend( 1 ),
	Show Graph Filter( 0 ),
	Forecast(
		Group( "" ),
		Risk Set( [2550, 2600, 2650, 2700, 2750, 2800, 2850] ),
		Future Risk Set(
			[3022.5, 3307.5, 3502, 3502, 3502, 3502],
			[3347827200, 3350246400, 3352924800, 3355516800, 3358195200, 3360787200]
		),
		Forecast To( "02/2011" ),
		Distribution( Weibull ),
		Contract( 12, Month ),
		Forecast Type( Sequential ),
		Interval Type( No Interval ),
		Alpha( 0.05 )
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

### Interval Type

**구문:** obj << Forecast( Interval Type( type ) )

**설명:** 미래 위험 오차를 예측하는 데 사용되는 구간 유형을 지정합니다. type 구간은 구간 없음, 플러그인 구간 또는 예측 구간일 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );
n = N Rows( dt );
mat = dt << get as matrix;
mat = (mat || J( n, 1, 1 )) |/ (mat || J( n, 1, 2 ));
dt = As Table( mat );
Column( dt, 2 ) << Format( "m/y", 7 );
Column( dt, 2 ) << set name( "Time" );
Column( dt, 1 ) << set name( "Volume" );
For Each( {i}, 3 :: 38,
	Column( dt, i ) << set name( Format( Date Increment( Column( dt, 2 )[i - 2], "Month", 1 ), "m/y", 7 ) )
);
Column( dt, 39 ) << set name( "Group" );
collist = Transform Each( {i}, 3 :: 38, Output( "List" ), Column( dt, i ) );
obj = dt << Reliability Forecast(
	Input Format( Nevada ),
	Production Count( :Volume ),
	Timestamp( :Time ),
	Failure Count( Eval List( collist ) ),
	Group ID( :Group ),
	Life Time Unit( Month ),
	Show Legend( 0 ),
	Show Graph Filter( 0 ),
	Forecast Options( Show Interval( 1 ) )
);
obj << Forecast(
	Group( "1" ),
	Risk Set(
		[1991, 2000, 1999, 2024, 1959, 1958, 2000, 2001, 1986, 1966, 1983, 2011, 2026, 1950, 1989, 1963, 1954,
		2030, 1981, 2006, 1991, 1950, 2025, 1996, 1987, 1957, 1988, 1966, 2038, 2014, 1962, 1965, 1952, 2045,
		2018, 2036]
	),
	Future Risk Set( [2003, 2003], [3139862400, 3142540800] ),
	Forecast To( "01/2004" ),
	Distribution( Weibull ),
	Contract( 5, Month ),
	Forecast Type( Cumulative ),
	Interval Type( No Interval ),
	Set Interval Level( 0.9 )
);
obj << Forecast(
	Group( "2" ),
	Risk Set(
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2026, 1950, 1989, 1963, 1954, 2030, 1981, 2006, 1991, 1950, 2025,
		1996, 1987, 1957, 1988, 1966, 2038, 2014, 1962, 1965, 1952, 2045, 2018, 2036]
	),
	Future Risk Set( [2000, 3000], [3139862400, 3142540800] ),
	Forecast To( "08/2005" ),
	Distribution( Weibull ),
	Contract( 36, Month ),
	Forecast Type( Incremental ),
	Interval Type( Prediction Interval ),
	Set Interval Level( 0.9 )
);

```

### Risk Set

**구문:** obj << Forecast( Risk Set( count vector ) )

**설명:** 미래 위험을 예측하는 데 사용되는 기존 위험 집합을 지정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );
n = N Rows( dt );
mat = dt << get as matrix;
mat = (mat || J( n, 1, 1 )) |/ (mat || J( n, 1, 2 ));
dt = As Table( mat );
Column( dt, 2 ) << Format( "m/y", 7 );
Column( dt, 2 ) << set name( "Time" );
Column( dt, 1 ) << set name( "Volume" );
For Each( {i}, 3 :: 38,
	Column( dt, i ) << set name( Format( Date Increment( Column( dt, 2 )[i - 2], "Month", 1 ), "m/y", 7 ) )
);
Column( dt, 39 ) << set name( "Group" );
collist = Transform Each( {i}, 3 :: 38, Output( "List" ), Column( dt, i ) );
obj = dt << Reliability Forecast(
	Input Format( Nevada ),
	Production Count( :Volume ),
	Timestamp( :Time ),
	Failure Count( Eval List( collist ) ),
	Group ID( :Group ),
	Life Time Unit( Month ),
	Show Legend( 0 ),
	Show Graph Filter( 0 ),
	Forecast Options( Show Interval( 1 ) )
);
obj << Forecast(
	Group( "1" ),
	Risk Set(
		[1991, 2000, 1999, 2024, 1959, 1958, 2000, 2001, 1986, 1966, 1983, 2011, 2026, 1950, 1989, 1963, 1954,
		2030, 1981, 2006, 1991, 1950, 2025, 1996, 1987, 1957, 1988, 1966, 2038, 2014, 1962, 1965, 1952, 2045,
		2018, 2036]
	),
	Future Risk Set( [2003, 2003], [3139862400, 3142540800] ),
	Forecast To( "01/2004" ),
	Distribution( Weibull ),
	Contract( 5, Month ),
	Forecast Type( Cumulative ),
	Interval Type( No Interval ),
	Set Interval Level( 0.9 )
);
obj << Forecast(
	Group( "2" ),
	Risk Set(
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2026, 1950, 1989, 1963, 1954, 2030, 1981, 2006, 1991, 1950, 2025,
		1996, 1987, 1957, 1988, 1966, 2038, 2014, 1962, 1965, 1952, 2045, 2018, 2036]
	),
	Future Risk Set( [2000, 3000], [3139862400, 3142540800] ),
	Forecast To( "08/2005" ),
	Distribution( Weibull ),
	Contract( 36, Month ),
	Forecast Type( Incremental ),
	Interval Type( Prediction Interval ),
	Set Interval Level( 0.9 )
);

```

### Save Data in Time to Event Format

**구문:** obj << Save Data in Time to Event Format

**설명:** Nevada 또는 날짜 형식 데이터를 사건 발생 시간 형식의 새 데이터 테이블에 저장합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );
obj = dt << Run Script( "Reliability Forecast" );
obj << Save Data in Time to Event Format;

```

### Save Forecast Data Table

**구문:** obj << Save Forecast Data Table

**설명:** 시작 창에서 선택한 변수와 함께 누적 및 증분 반환 수를 새 데이터 테이블에 저장합니다. 그룹화된 분석의 경우 테이블 이름에 그룹 ID와 "집계"라는 단어가 포함됩니다. 집계 데이터 테이블에는 기존 반환도 포함됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );
obj = dt << Run Script( "Reliability Forecast" );
dt results = obj << Save Forecast Data Table;

```

### Set Interval Level

**구문:** obj << Forecast( Set Interval Level( value ) )

**설명:** 미래 위험 오차를 예측하는 데 사용되는 구간의 신뢰 수준을 지정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );
n = N Rows( dt );
mat = dt << get as matrix;
mat = (mat || J( n, 1, 1 )) |/ (mat || J( n, 1, 2 ));
dt = As Table( mat );
Column( dt, 2 ) << Format( "m/y", 7 );
Column( dt, 2 ) << set name( "Time" );
Column( dt, 1 ) << set name( "Volume" );
For Each( {i}, 3 :: 38,
	Column( dt, i ) << set name( Format( Date Increment( Column( dt, 2 )[i - 2], "Month", 1 ), "m/y", 7 ) )
);
Column( dt, 39 ) << set name( "Group" );
collist = Transform Each( {i}, 3 :: 38, Output( "List" ), Column( dt, i ) );
obj = dt << Reliability Forecast(
	Input Format( Nevada ),
	Production Count( :Volume ),
	Timestamp( :Time ),
	Failure Count( Eval List( collist ) ),
	Group ID( :Group ),
	Life Time Unit( Month ),
	Show Legend( 0 ),
	Show Graph Filter( 0 ),
	Forecast Options( Show Interval( 1 ) )
);
obj << Forecast(
	Group( "1" ),
	Risk Set(
		[1991, 2000, 1999, 2024, 1959, 1958, 2000, 2001, 1986, 1966, 1983, 2011, 2026, 1950, 1989, 1963, 1954,
		2030, 1981, 2006, 1991, 1950, 2025, 1996, 1987, 1957, 1988, 1966, 2038, 2014, 1962, 1965, 1952, 2045,
		2018, 2036]
	),
	Future Risk Set( [2003, 2003], [3139862400, 3142540800] ),
	Forecast To( "01/2004" ),
	Distribution( Weibull ),
	Contract( 5, Month ),
	Forecast Type( Cumulative ),
	Interval Type( No Interval ),
	Set Interval Level( 0.9 )
);
obj << Forecast(
	Group( "2" ),
	Risk Set(
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2026, 1950, 1989, 1963, 1954, 2030, 1981, 2006, 1991, 1950, 2025,
		1996, 1987, 1957, 1988, 1966, 2038, 2014, 1962, 1965, 1952, 2045, 2018, 2036]
	),
	Future Risk Set( [2000, 3000], [3139862400, 3142540800] ),
	Forecast To( "08/2005" ),
	Distribution( Weibull ),
	Contract( 36, Month ),
	Forecast Type( Incremental ),
	Interval Type( Prediction Interval ),
	Set Interval Level( 0.9 )
);

```

### Show Graph Filter

**구문:** obj << Show Graph Filter( state=0|1 )

**설명:** 관측된 데이터 그래프에 표시할 생산 기간을 선택할 수 있도록 그래프 필터를 표시하거나 숨깁니다. 선택 취소된 기간의 막대는 흐리게 표시됩니다. 그래프를 원래 상태로 표시하려면 기간을 선택 취소합니다. 사건 발생 시간 데이터에는 이 옵션을 사용할 수 없습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );
obj = dt << Run Script( "Reliability Forecast" );
obj << Show Graph Filter( 1 );

```

### Show Legend

**구문:** obj << Show Legend( state=0|1 )

**설명:** 관측된 데이터 보고서의 범례를 표시하거나 숨깁니다. 사건 발생 시간 데이터에는 이 옵션을 사용할 수 없습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );
obj = dt << Run Script( "Reliability Forecast" );
obj << Show Legend( 1 );

```

## Forecast Options

### 항목 메시지

#### Animation

**구문:** obj << Animation( state=0|1 )

**설명:** 예측 그래프에서 핫 스폿의 깜박임을 제어합니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );
obj = dt << Run Script( "Reliability Forecast" );
option = obj << Forecast Options;
option << Animation( 0 );
option << Interactive Configuration of Risk Sets( 0 );
option << Spreadsheet Configuration of Risk Sets( 1 );
option << Show Interval( 1 );
option << Forecasting Interval Type( Prediction Interval );
option << Use Contract Length( 1 );
option << Use Failure Cost( 1 );
option << Set Failure Cost( 100 );
option << Monte Carlo Sample Size( 10000 );
option << Random Seed( 1111 );
option << Use Approximate Distribution( 1 );

```

#### Forecasting Interval Type

**구문:** obj << Forecasting Interval Type( type )

**설명:** 미래 위험 오차를 예측하는 데 사용되는 구간 유형을 지정합니다. type 구간은 플러그인 구간 또는 예측 구간일 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );
obj = dt << Run Script( "Reliability Forecast" );
option = obj << Forecast Options;
option << Animation( 0 );
option << Interactive Configuration of Risk Sets( 0 );
option << Spreadsheet Configuration of Risk Sets( 1 );
option << Show Interval( 1 );
option << Forecasting Interval Type( Prediction Interval );
option << Use Contract Length( 1 );
option << Use Failure Cost( 1 );
option << Set Failure Cost( 100 );
option << Monte Carlo Sample Size( 10000 );
option << Random Seed( 1111 );
option << Use Approximate Distribution( 1 );

```

#### Import Future Risk Set

**구문:** obj << Import Future Risk Set

**설명:** 열려 있는 다른 데이터 테이블에서 미래 생산 데이터를 가져올 수 있습니다. 그러면 미래 위험 그래프에 새 예측이 나타납니다. 가져온 데이터 테이블에는 타임스탬프와 생산 개수에 대한 열이 있어야 합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );
obj = dt << Run Script( "Reliability Forecast" );
option = obj << Forecast Options;
import set = [3139862400 2000, 3142540800 2050, 3145219200 2100, 3147811200 2150, 3150489600 2200, 3153081600
2250];
dt import = As Table( import set, <<Column Names( {"Time", "Volume"} ) );
option << Import Future Risk Set;

```

#### Interactive Configuration of Risk Sets

**구문:** obj << Interactive Configuration of Risk Sets( state=0|1 )

**설명:** 그래프에서 핫 스폿을 드래그할 수 있는지 여부를 결정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );
obj = dt << Run Script( "Reliability Forecast" );
option = obj << Forecast Options;
option << Animation( 0 );
option << Interactive Configuration of Risk Sets( 0 );
option << Spreadsheet Configuration of Risk Sets( 1 );
option << Show Interval( 1 );
option << Forecasting Interval Type( Prediction Interval );
option << Use Contract Length( 1 );
option << Use Failure Cost( 1 );
option << Set Failure Cost( 100 );
option << Monte Carlo Sample Size( 10000 );
option << Random Seed( 1111 );
option << Use Approximate Distribution( 1 );

```

#### Monte Carlo Sample Size

**구문:** obj << Monte Carlo Sample Size( number )

**설명:** 예측 구간을 생성하는 데 사용되는 시뮬레이션의 표본 크기를 지정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );
obj = dt << Run Script( "Reliability Forecast" );
option = obj << Forecast Options;
option << Animation( 0 );
option << Interactive Configuration of Risk Sets( 0 );
option << Spreadsheet Configuration of Risk Sets( 1 );
option << Show Interval( 1 );
option << Forecasting Interval Type( Prediction Interval );
option << Use Contract Length( 1 );
option << Use Failure Cost( 1 );
option << Set Failure Cost( 100 );
option << Monte Carlo Sample Size( 10000 );
option << Random Seed( 1111 );
option << Use Approximate Distribution( 1 );

```

#### Random Seed

**구문:** obj << Random Seed( number )

**설명:** 시뮬레이션된 예측 구간을 재현하는 데 사용할 수 있는 난수 시드값을 지정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );
obj = dt << Run Script( "Reliability Forecast" );
option = obj << Forecast Options;
option << Animation( 0 );
option << Interactive Configuration of Risk Sets( 0 );
option << Spreadsheet Configuration of Risk Sets( 1 );
option << Show Interval( 1 );
option << Forecasting Interval Type( Prediction Interval );
option << Use Contract Length( 1 );
option << Use Failure Cost( 1 );
option << Set Failure Cost( 100 );
option << Monte Carlo Sample Size( 10000 );
option << Random Seed( 1111 );
option << Use Approximate Distribution( 1 );

```

#### Save Forecast Data Table

**구문:** obj << Save Forecast Data Table

**설명:** 시작 창에서 선택한 변수와 함께 누적 및 증분 반환 수를 새 데이터 테이블에 저장합니다. 그룹화된 분석의 경우 테이블 이름에 그룹 ID와 "집계"라는 단어가 포함됩니다. 집계 데이터 테이블에는 기존 반환도 포함됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );
obj = dt << Run Script( "Reliability Forecast" );
option = obj << Forecast Options;
option << Save Forecast Data Table;

```

#### Set Failure Cost

**구문:** obj << Set Failure Cost( number )

**설명:** 각 고장에 대한 비용을 지정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );
obj = dt << Run Script( "Reliability Forecast" );
option = obj << Forecast Options;
option << Animation( 0 );
option << Interactive Configuration of Risk Sets( 0 );
option << Spreadsheet Configuration of Risk Sets( 1 );
option << Show Interval( 1 );
option << Forecasting Interval Type( Prediction Interval );
option << Use Contract Length( 1 );
option << Use Failure Cost( 1 );
option << Set Failure Cost( 100 );
option << Monte Carlo Sample Size( 10000 );
option << Random Seed( 1111 );
option << Use Approximate Distribution( 1 );

```

#### Show Interval

**구문:** obj << Show Interval( state=0|1 )

**설명:** 그래프에 95% 신뢰 한계를 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );
obj = dt << Run Script( "Reliability Forecast" );
option = obj << Forecast Options;
option << Animation( 0 );
option << Interactive Configuration of Risk Sets( 0 );
option << Spreadsheet Configuration of Risk Sets( 1 );
option << Show Interval( 1 );
option << Forecasting Interval Type( Prediction Interval );
option << Use Contract Length( 1 );
option << Use Failure Cost( 1 );
option << Set Failure Cost( 100 );
option << Monte Carlo Sample Size( 10000 );
option << Random Seed( 1111 );
option << Use Approximate Distribution( 1 );

```

#### Spreadsheet Configuration of Risk Sets

**구문:** obj << Spreadsheet Configuration of Risk Sets( state=0|1 )

**설명:** 특정 생산 개수와 타임스탬프를 대화식 그래프에 추가하는 대신 입력할 수 있는 보고서를 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );
obj = dt << Run Script( "Reliability Forecast" );
option = obj << Forecast Options;
option << Animation( 0 );
option << Interactive Configuration of Risk Sets( 0 );
option << Spreadsheet Configuration of Risk Sets( 1 );
option << Show Interval( 1 );
option << Forecasting Interval Type( Prediction Interval );
option << Use Contract Length( 1 );
option << Use Failure Cost( 1 );
option << Set Failure Cost( 100 );
option << Monte Carlo Sample Size( 10000 );
option << Random Seed( 1111 );
option << Use Approximate Distribution( 1 );

```

#### Use Approximate Distribution

**구문:** obj << Use Approximate Distribution( state=0|1 )

**설명:** 각 구간의 고장 수에 근사한 값을 산출하기 위해 Poisson 분포를 사용하여 예측 구간을 생성하도록 지정합니다. 이 옵션을 선택하지 않으면 예측 구간은 다항 분포를 사용하여 각 구간의 고장 수를 시뮬레이션합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );
obj = dt << Run Script( "Reliability Forecast" );
option = obj << Forecast Options;
option << Animation( 0 );
option << Interactive Configuration of Risk Sets( 0 );
option << Spreadsheet Configuration of Risk Sets( 1 );
option << Show Interval( 1 );
option << Forecasting Interval Type( Prediction Interval );
option << Use Contract Length( 1 );
option << Use Failure Cost( 1 );
option << Set Failure Cost( 100 );
option << Monte Carlo Sample Size( 10000 );
option << Random Seed( 1111 );
option << Use Approximate Distribution( 1 );

```

#### Use Contract Length

**구문:** obj << Use Contract Length( state=0|1 )

**설명:** 지정된 계약 기간을 예측에서 고려할지 여부를 결정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );
obj = dt << Run Script( "Reliability Forecast" );
option = obj << Forecast Options;
option << Animation( 0 );
option << Interactive Configuration of Risk Sets( 0 );
option << Spreadsheet Configuration of Risk Sets( 1 );
option << Show Interval( 1 );
option << Forecasting Interval Type( Prediction Interval );
option << Use Contract Length( 1 );
option << Use Failure Cost( 1 );
option << Set Failure Cost( 100 );
option << Monte Carlo Sample Size( 10000 );
option << Random Seed( 1111 );
option << Use Approximate Distribution( 1 );

```

#### Use Failure Cost

**구문:** obj << Use Failure Cost( state=0|1 )

**설명:** 미래 위험 그래프에 고장 개수 대신 고장 비용을 표시합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );
obj = dt << Run Script( "Reliability Forecast" );
option = obj << Forecast Options;
option << Animation( 0 );
option << Interactive Configuration of Risk Sets( 0 );
option << Spreadsheet Configuration of Risk Sets( 1 );
option << Show Interval( 1 );
option << Forecasting Interval Type( Prediction Interval );
option << Use Contract Length( 1 );
option << Use Failure Cost( 1 );
option << Set Failure Cost( 100 );
option << Monte Carlo Sample Size( 10000 );
option << Random Seed( 1111 );
option << Use Approximate Distribution( 1 );

```

## Reliability Forecast for Dates Format

### 열

#### Failure Count

**구문:** obj << Failure Count( column )

#### Failure Time

**구문:** obj << Failure Time( column(s) )

#### Group ID

**구문:** obj << Group ID( column )

#### Left Censor

**구문:** obj << Left Censor( column )

#### Production Count

**구문:** obj << Production Count( column )

#### Timestamp

**구문:** obj << Timestamp( column )

### 항목 메시지

#### Censor Code

**구문:** obj = Reliability Forecast(...Input Format( Dates ), Censor Code( value=1 )...)

**설명:** 오른쪽 중도절단된 관측값을 지정하는 중도절단 열의 값을 식별합니다.

#### Life Time Unit

**구문:** obj = Reliability Forecast(...Input Format( Dates ), Life Time Unit( unit )...)

**설명:** 반환 개수에 대한 열 제목 형식을 포함하여 모든 타임스탬프의 실제 날짜/시간 형식을 지정합니다. 이 설정은 단계 증분을 예측하는 데 사용됩니다. unit 인수는 숫자, 연도, 월, 주, 일, 시간, 분 또는 초일 수 있습니다.

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

## Reliability Forecast for Nevada Format

### 열

#### Failure Count

**구문:** obj << Failure Count( column(s) )

#### Group ID

**구문:** obj << Group ID( column )

#### Production Count

**구문:** obj << Production Count( column )

#### Timestamp

**구문:** obj << Timestamp( column )

### 항목 메시지

#### Interval Censored Failure

**구문:** obj = Reliability Forecast(...Input Format( Nevada ), Interval Censored Failure( state=0|1 )...)

<b>실행기 항목: 예</b>

**설명:** 반환된 값을 구간 중도절단 관측값으로 처리하도록 지정합니다. 구간은 마지막 기록 시간과 고장 관측 시간 사이입니다. 기본적으로 설정되어 있습니다.

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

#### Life Time Unit

**구문:** obj = Reliability Forecast(...Input Format( Nevada ), Life Time Unit( unit )...)

**설명:** 반환 개수에 대한 열 제목 형식을 포함하여 모든 타임스탬프의 실제 날짜/시간 형식을 지정합니다. 이 설정은 단계 증분을 예측하는 데 사용됩니다. unit 인수는 숫자, 연도, 월, 주, 일, 시간, 분 또는 초일 수 있습니다.

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

## Reliability Forecast for Time to Event Format

### 열

#### Censor

**구문:** obj << Censor( column )

#### Freq

**구문:** obj << Freq( column )

#### Group ID

**구문:** obj << Group ID( column )

#### Time to Event

**구문:** obj << Time to Event( column(s) )

### 항목 메시지

#### Censor Code

**구문:** obj = Reliability Forecast(...Input Format( Time to Event ), Censor Code( value=1 )...)

**설명:** 오른쪽 중도절단된 관측값을 지정하는 중도절단 열의 값을 식별합니다.

#### Forecast Start

**구문:** obj = Reliability Forecast(...Input Format( Time to Event ), Forecast Start( time )...)

**설명:** 예측이 시작되는 시간을 지정합니다. 시간 형식은 &apos;수명 시간 단위&apos; 옵션 설정에 따라 달라집니다.

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

#### Life Time Unit

**구문:** obj = Reliability Forecast(...Input Format( Time to Event ), Life Time Unit( unit )...)

**설명:** 반환 개수에 대한 열 제목 형식을 포함하여 모든 타임스탬프의 실제 날짜/시간 형식을 지정합니다. 이 설정은 단계 증분을 예측하는 데 사용됩니다. unit 인수는 숫자, 연도, 월, 주, 일, 시간, 분 또는 초일 수 있습니다.

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

