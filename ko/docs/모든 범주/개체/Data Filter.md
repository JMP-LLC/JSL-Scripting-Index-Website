# Data Filter



## 연결된 생성자

### Data Filter

**구문:** Data Filter( &lt;local&gt;, &lt;invisible&gt;, &lt;Add Filter&gt;, &lt;Mode&gt;, &lt;Show Window(0 | 1)&gt;, &lt;no outline box(0 | 1)&gt; )

**설명:** 복합 조건을 만족하는 데이터 부분집합을 대화식으로 선택하는 데이터 필터를 생성하거나 표시합니다. Mode 옵션은 필터에서 선택한 항목에 따라 영향을 받는 행 상태를 결정합니다. Add Filter 명령은 지정된 Columns 및 Where 절을 사용하여 필터 그룹을 추가합니다. 필터 그룹이 여러 개 있는 경우에는 Group By AND 옵션에 따라 결합된 동작이 결정됩니다. Local 키워드가 지정된 경우에는 보고서에 필터를 포함하여 다른 보고서에 영향을 주지 않고 하나 이상의 플랫폼을 필터링할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);

```

## 열

### Add Filter Columns

**구문:** obj &lt;&lt; Add Filter Columns( Add Filter Columns( column ) )

**설명:** 하나 이상의 필터 열을 추가합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
obj << Add Filter Columns( :State );

```

### Filter Column

**구문:** obj &lt;&lt; Filter Column( column(s) )

**설명:** 필터 열을 추가합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
obj << Filter Column( :State );

```

### Filter Columns

**구문:** obj &lt;&lt; Filter Columns( column(s) )

**설명:** 하나 이상의 필터 열을 추가합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
obj << Filter Columns( :State, :OZONE );

```

### Filter Group

**구문:** obj &lt;&lt; Filter Group( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);

```

## 항목 메시지

### Add Favorites

**구문:** obj &lt;&lt; Add Favorites( name or string )

**설명:** 현재 필터 선택을 제공된 이름과 연결하고 즐겨찾기 목록에 저장합니다.

#### 예제 1

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
df = dt << Data Filter(
	Add Filter(
		columns( :age, :sex, :height, :weight ),
		Where( :sex == "F" ),
		Where( :height >= 55 & :height <= 65 )
	),
	Mode( Select )
);
Wait( 1 );
fav1 = df << add favorites( "FemaleAverageHt" );

```

#### 예제 2

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
df = dt << Data Filter(
	Add Filter( columns( :age, :sex, :height, :weight ), Where( :sex == "F" ) ),
	Mode( Select )
);
Wait( 1 );
fav1 = df << add favorites();
Show( fav1 );

```

### Add Filter

**구문:** obj &lt;&lt; Add Filter( columns( column, ... ), &lt;Where( clause )&gt; )

**설명:** 새 OR 그룹에 하나 이상의 필터 열을 추가합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter();
obj << Add Filter( columns( :POP ) );
obj << Add Filter(
	columns( :Region, :State, :City ),
	Where( :Region == "S" ),
	Where( :State == {"SC", "NC"} )
);

```

### Animation

**구문:** obj &lt;&lt; Animation( &lt;Animate Column( column )&gt;, &lt;Animate Rate( number )&gt;, &lt;Forward|Backward|Bounce&gt; )

**설명:** 지정된 열 선택 및 선택 취소 행의 정렬된 목록을 순환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
obj << Columns( :Region );
obj << Animation( Animate Column( :Region ), Bounce );
//Now press the play button.

```

### Apply Favorites

**구문:** obj &lt;&lt; Apply Favorites( name or string )

**설명:** 명명된 즐겨찾기에 저장된 필터 선택을 데이터 필터에 적용합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
df = dt << Data Filter(
	Add Filter(
		columns( :age, :sex, :height, :weight ),
		Where( :sex == "F" ),
		Where( :height >= 55 & :height <= 65 )
	),
	Mode( Select )
);
a = "FemaleAverageHt";
b = "Female";
df << add favorites( a );
df << Match( Where( :sex == "F" ) );
df << add favorites( b );
Wait( 1 );
df << apply favorites( "FemaleAverageHt" );

```

### Auto clear

**구문:** obj &lt;&lt; Auto clear( state=0|1 )

**설명:** 필터링할 때 새 항목을 선택하기 전에 모든 현재 선택된 행을 지우십시오.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Data Filter;
obj << Auto Clear( 1 );
obj << Add Filter( columns( :age, :sex ), Where( :age == {13, 14} ) );
Wait( 1 );
obj << (filter column( :sex ) << Where( :sex == "M" ));

```

### Clear

**구문:** obj &lt;&lt; Clear

**설명:** 현재 선택된 행을 지웁니다.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter;
obj << Add Filter( Columns( :Region ), Where( :Region == "N" ) );
Wait( 1 );
obj << Clear;

```

### Clear Selection

**구문:** obj &lt;&lt; Clear Selection

**설명:** 이 열 필터에 대한 선택을 취소합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter( Add( Filter Columns( :Region ), Where( :Region = {"N", "S"} ) ) );
Wait( 1 );
obj << (Filter Column( :Region ) << Clear Selection);

```

### Close

**구문:** obj &lt;&lt; Close

**설명:** 데이터 필터를 닫습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
obj << Close;

```

### Conditional

**구문:** obj &lt;&lt; Conditional( state=0|1 )

**설명:** 이 옵션은 범주형 열 필터가 조건부로 정렬되는지 여부를 나타냅니다. 범주를 선택하면 다음 열 필터의 범주가 선택한 범주에 있는 범주로 제한됩니다.

```jsl

dt = Open( "$SAMPLE_DATA/SATByYear.jmp" );
obj = dt << Data Filter( Add Filter( columns( :Region, :State ) ) );
obj << (Filter Column( :Region ) << Where( :Region == {"South"} ));
Wait( 1 );
obj << conditional( 1 );

```

### Copy Local Data Filter

**구문:** obj &lt;&lt; Copy Local Data Filter

**설명:** 로컬 데이터 필터의 스크립트를 클립보드에 복사합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
filter = dist << Local Data Filter( Add Filter( columns( :Region ), Where( :Region == "MW" ) ) );
filter << Copy Local Data Filter;
dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );
Wait( 1 );
dist2 << Paste Local Data Filter;

```

### Copy Script

**구문:** obj &lt;&lt; Copy Script

**설명:** 필터 창을 생성하기 위한 JSL 스크립트를 생성하고 클립보드에 추가합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
obj << Copy Script;

```

### Count Excluded Rows

**구문:** obj &lt;&lt; Count Excluded Rows( state=0|1 )

**설명:** 옵션이 취소되면 데이터 테이블에서 제외된 행 상태를 가진 행은 데이터 필터의 열 값 및 개수에 포함되지 않습니다.

**JMP추가된 버전:** 14

#### 예제 1

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Data Filter(
	Mode( Select( 0 ), Show( 1 ), Include( 1 ) ),
	Add Filter( columns( :sex ), Where( :sex == "F" ) )
);
Distribution(
	Automatic Recalc( 1 ),
	Continuous Distribution( Column( :weight ) ),
	Local Data Filter( Count Excluded Rows( 0 ), Add Filter( columns( :age ), Where( :age == 12 ) ) )
);

```

#### 예제 2

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Data Filter(
	Mode( Select( 0 ), Show( 1 ), Include( 1 ) ),
	Add Filter( columns( :sex ), Where( :sex == "F" ) )
);
New Window( "Hierarchical Data Filter",
	V List Box(
		Data Filter Context Box(
			H List Box(
				Filter Ref Sub 1 = dt << Data Filter(
					Local,
					Add Filter( columns( :age ), Where( :age == 12 ) )
				),
				Platform( Current Data Table(), Distribution( Column( :weight ) ) )
			)
		),
		Data Filter Context Box(
			H List Box(
				Filter Ref Sub 2 = dt << Data Filter(
					Local,
					Count Excluded Rows( 0 ),
					Add Filter( columns( :age ), Where( :age == 12 ) )
				),
				Platform( Current Data Table(), Distribution( Column( :weight ) ) )
			)
		)
	)
);

```

### Data Table Window

**구문:** obj &lt;&lt; Data Table Window

**설명:** 이 필터 대화상자에 사용된 데이터 테이블을 표시합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
obj << Data Table Window;

```

### Delete

**구문:** obj &lt;&lt; Delete( {column(s)} )

**설명:** 데이터 필터의 기존 필터와 함께 지정된 열을 삭제합니다.

#### 예제 1

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
obj << Columns( :Region, :SO2, :CO, :State );
Wait( 1 );
obj << Delete( {:State} );

```

#### 예제 2

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
obj << Columns( :Region, :SO2, :CO, :State );
Wait( 1 );
obj << (Filter Column( :State ) << delete);

```

### Delete All

**구문:** obj &lt;&lt; Delete All

**설명:** 데이터 필터의 모든 기존 필터를 삭제합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
obj << Columns( :Region, :SO2, :CO, :State );
Wait( 2 );
obj << Delete All;

```

### Display

**구문:** obj &lt;&lt; Display( column, &lt;Invisible(0 | 1)&gt;, &lt;options&gt; )

**설명:** 열 수준이 필터에 표시되는 방법을 변경합니다. 범주형 열은 "블록 표시", "목록 표시", "단일 범주 표시", "체크박스 표시" 또는 "라디오 상자 표시"와 같은 표시 유형 옵션을 지원합니다. "항목 수(n)" 옵션은 스크롤 가능 보기에 표시되는 항목 수를 설정합니다. 연속형 열은 "계급 수(n)" 및 "높이(h)" 옵션을 지원합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
obj << Display( :Region, N Items( 4 ) );

```

### Extend Where

**구문:** obj &lt;&lt; Extend Where

**설명:** 이 열 필터에 대해 제공된 기준을 기반으로 선택을 확장합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter( Add( Filter Columns( :Region ), Where( :Region = {"N", "S"} ) ) );
Wait( 1 );
obj << (Filter Column( :Region ) << Extend Where( :Region = "W" ));

```

### Get Data Table

**구문:** obj &lt;&lt; Get Data Table

**설명:** 필터와 연결된 데이터 테이블을 반환합니다.

**JMP추가된 버전:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionfilter = obj << Get Data Table();

```

### Get Filter Column

**구문:** obj &lt;&lt; Get Filter Column( column, &lt;index&gt; )

**설명:** 명명된 열의 필터 열 개체를 반환합니다. 동일한 열이 여러 번 사용되는 경우에는 index 인수가 지정된 발생 항목을 반환합니다.

**JMP추가된 버전:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionfilter = obj << Get Filter Column( :Region );
regionfilter << Invert Selection;

```

### Get Filtered Rows

**구문:** obj &lt;&lt; Get Filtered Rows

**설명:** 현재 필터 조건을 충족하는 행 번호의 행렬을 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
obj << Get Filtered Rows;

```

### Get Script

**구문:** obj &lt;&lt; Get Script

**설명:** 데이터 필터 스크립트를 텍스트로 가져옵니다.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
txt = obj << Get Script;
Show( txt );

```

### Get where clause

**구문:** obj &lt;&lt; Get where clause

**설명:** 필터 선택에 대한 설명 텍스트를 가져옵니다.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter( Add( Filter Columns( :Region, :Lead ) ) );
Wait( 1 );
obj << (Filter Column( :Lead ) << Where( :Lead >= .4 & :Lead <= 1.4 ));
txt = obj << get where clause;

```

### Grouped by AND

**구문:** obj &lt;&lt; Grouped by AND( state=0|1 )

**설명:** 필터 항목 그룹이 AND로 결합됩니다.

### Inverse

**구문:** obj &lt;&lt; Inverse( state=0|1 )

**설명:** 데이터 테이블에 있는 행의 현재 선택 상태를 반전합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
obj << Inverse( 1 );

```

### Invert Selection

**구문:** obj &lt;&lt; Invert Selection

**설명:** 이 열 필터에 대한 선택을 반전합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter( Add( Filter Columns( :Region ), Where( :Region = {"N", "S"} ) ) );
Wait( 1 );
obj << (Filter Column( :Region ) << invert selection);

```

### Make Filter Change Handler

**구문:** rs = df &lt;&lt; Make Filter Change Handler(function(a) );

**설명:** 데이터 필터 처리기를 생성하여 필터가 변경되었다는 알림을 처리합니다. 필터링된 행 수는 함수에 대한 인수로 반환됩니다.

**JMP추가된 버전:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Automatic Recalc( 1 ), Continuous Distribution( Column( :POP ) ) );
filter = dist << Local Data Filter( Add Filter( columns( :Region ) ) );
f = Function( {a}, Print( a ) );
rs = filter << Make Filter Change Handler( f );

```

### Match

**구문:** obj &lt;&lt; Match( Filter Columns(:a, :b, :c, ...), where( conditions ) )

**설명:** 각 그룹에 대한 필터 조건을 설정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
obj = dt << Data Filter( Add Filter( columns( :BP 8W, :BP 6M ) ), Add Filter( columns( :BP 12M ) ) );
Wait( 1 );
obj << Match( Filter Columns( :BP 8W, :BP 6M ), Where( :BP 8W > 174.8 & :BP 8W < 184.2 ) );
obj << Match( Filter Columns( :BP 12M ), Where( :BP 12M > 181.9 & :BP 12M < 192.1 ) );

```

### Mode

**구문:** obj &lt;&lt; Mode( Select|Show|Include (state = 0|1) )

**설명:** 데이터 필터를 통해 행을 선택할 때 사용되는 작업 또는 모드를 설정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter;
obj << Mode( Include( 1 ), Select( 0 ), Show( 0 ) );
obj << Add Filter( Columns( :Region ), Where( :Region == "N" ) );

```

### On Clear

**구문:** obj &lt;&lt; On Clear

**설명:** 필터가 지워진 후 실행할 스크립트 또는 함수를 설정합니다.

```jsl


dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Data Filter;
df = obj << Add Filter( columns( :age, :sex ), Where( :age == {13, 14} ) );
obj << OnClear( Function( {}, df << Mode( Include( 0 ), Select( 1 ), Show( 0 ) ) ) );
Wait( 1 );
df << Mode( Include( 1 ), Select( 0 ), Show( 0 ) );

```

### Remove Favorites

**구문:** obj &lt;&lt; Remove Favorites( name or string )

**설명:** 명명된 즐겨찾기를 즐겨찾기 목록에서 제거합니다.

#### 예제 1

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
df = dt << Data Filter(
	Add Filter(
		columns( :age, :sex, :height, :weight ),
		Where( :sex == "F" ),
		Where( :height >= 55 & :height <= 65 )
	),
	Mode( Select )
);
df << add favorites( "FemaleAverageHt" );
df << Match( Where( :sex == "F" ) );
df << add favorites( "Female" );
Wait( 1 );
df << remove favorites( "FemaleAverageHt" );

```

#### 예제 2

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
df = dt << Data Filter(
	Add Filter(
		columns( :age, :sex, :height, :weight ),
		Where( :sex == "F" ),
		Where( :height >= 55 & :height <= 65 )
	),
	Mode( Select )
);
df << add favorites( "FemaleAverageHt" );
df << Match( Where( :sex == "F" ) );
df << add favorites( "Female" );
Wait( 1 );
df << remove favorites();

```

### Report

**구문:** obj &lt;&lt; Report

**설명:** 보고서 개체에 대한 참조를 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
obj << Add Filter( columns( :POP ) );
obj << Add Filter(
	columns( :Region, :State, :City ),
	Where( :Region == "S" ),
	Where( :State == {"SC", "NC"} )
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Save Script to Data Table

**구문:** obj &lt;&lt; Save Script to Data Table

**설명:** 필터 창을 생성하기 위한 JSL 스크립트를 생성하고 데이터 테이블에 테이블 특성으로 저장합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
obj << Save Script to Data Table;

```

### Save Script to Journal

**구문:** obj &lt;&lt; Save Script to Journal

**설명:** 필터 창을 생성하기 위한 JSL 스크립트를 생성하고 이 스크립트가 포함된 저널에 버튼을 추가합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
obj << Save Script to Journal;

```

### Save Script to Script Window

**구문:** obj &lt;&lt; Save Script to Script Window

**설명:** 필터 창을 생성하기 위한 JSL 스크립트를 생성하고 현재 스크립트 텍스트 창에 추가합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
obj << Save Script to Script Window;

```

### Save Where Clause to Clipboard

**구문:** obj &lt;&lt; Save Where Clause to Clipboard

**설명:** 필터 기준에서 WHERE 절을 생성하고 클립보드에 놓습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter;
obj << Add Filter( Columns( :Lead ), Where( :Lead >= .4 & :Lead <= 2.0 ) );
obj << Save Where Clause To Clipboard;

```

### Save Where Clause to Data Table

**구문:** obj &lt;&lt; Save Where Clause to Data Table

**설명:** 필터 기준에서 WHERE 절을 생성하고 데이터 테이블에 테이블 특성으로 저장합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter;
obj << Add Filter( Columns( :Lead ), Where( :Lead >= .4 & :Lead <= 2.0 ) );
obj << Save Where Clause To Data Table;

```

### Save Where Clause to Formula Column

**구문:** obj &lt;&lt; Save Where Clause to Formula Column

**설명:** 필터 기준과 동등한 계산식을 포함하는 표시자 열을 생성합니다. 필터 기준을 충족하는 행의 값은 1이 되고 다른 모든 행의 값은 0이 됩니다.

**JMP추가된 버전:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter;
obj << Add Filter( Columns( :Lead ), Where( :Lead >= .4 & :Lead <= 2.0 ) );
obj << Save Where Clause To Formula Column;

```

### Save Where Clause to Journal

**구문:** obj &lt;&lt; Save Where Clause to Journal

**설명:** 필터 기준에서 WHERE 절을 생성하고 저널에 추가합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter;
obj << Add Filter( Columns( :Lead ), Where( :Lead >= .4 & :Lead <= 2.0 ) );
obj << Save Where Clause To Journal;

```

### Save Where Clause to Row State Column

**구문:** obj &lt;&lt; Save Where Clause to Row State Column

**설명:** 필터 기준과 동등한 계산식이 있는 행 상태 열을 생성합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter;
obj << Add Filter( Columns( :Lead ), Where( :Lead >= .4 & :Lead <= 2.0 ) );
obj << Save Where Clause To Row State Column;

```

### Save Where Clause to Script Window

**구문:** obj &lt;&lt; Save Where Clause to Script Window

**설명:** 필터 기준에서 WHERE 절을 생성하고 현재 스크립트 텍스트 창에 추가합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter;
obj << Add Filter( Columns( :Lead ), Where( :Lead >= .4 & :Lead <= 2.0 ) );
obj << Save Where Clause To Script Window;

```

### Save and restore current row states

**구문:** obj &lt;&lt; Save and restore current row states( state=0|1 )

**설명:** 데이터 테이블에 대한 현재 행 상태를 저장한 다음 데이터 필터를 닫을 때 해당 상태를 복원합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Save and Restore Current Row States( 1 ),
	Add Filter( Columns( :Region ), Where( :Region == "N" ) )
);
Wait( 1 );
obj << Close;

```

### Select Missing

**구문:** obj &lt;&lt; Select Missing( state=0|1 )

**설명:** 결측 행을 이 연속형 열 필터에 대한 선택에 추가합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter( Add( Filter Columns( :CO ), Where( :CO >= 9 & :CO < 15 ) ) );
Wait( 1 );
obj << (Filter Column( :CO ) << Select Missing);

```

### Set Include

**구문:** obj &lt;&lt; Set Include( state=0|1 )

**설명:** 선택 해제된 포함 모드를 선택합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Data Filter( Add Filter( columns( :age, :sex ) ) );
obj << set Include( 1 );
Wait( 1 );
obj << set Include( 0 );

```

### Set Select

**구문:** obj &lt;&lt; Set Select( state=0|1 )

**설명:** 선택 모드를 선택 또는 선택 해제합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Data Filter( Add Filter( columns( :age, :sex ) ) );
obj << set select( 1 );
Wait( 1 );
obj << set select( 0 );

```

### Set Show

**구문:** obj &lt;&lt; Set Show( state=0|1 )

**설명:** 선택 해제된 표시 모드를 선택합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Data Filter( Add Filter( columns( :age, :sex ) ) );
obj << set Show( 1 );
Wait( 1 );
obj << set Show( 0 );

```

### Show Controls

**구문:** obj &lt;&lt; Show Controls( state=0|1 )

**설명:** 데이터 필터 옵션을 수정하기 위한 컨트롤을 표시하거나 숨깁니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
obj << Show Controls( 0 );

```

### Show Counts

**구문:** obj &lt;&lt; Show Counts( state=0|1 )

**JMP추가된 버전:** 16

### Show Histograms and Bars

**구문:** obj &lt;&lt; Show Histograms and Bars( state=0|1 )

**설명:** Show Histograms and Bars for filter columns where available

**JMP추가된 버전:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter( Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ) );
Wait( 1 );
obj << Show Histograms and Bars( 0 );

```

### Show Modes

**구문:** obj &lt;&lt; Show Modes( state=0|1 )

**설명:** 데이터 필터의 선택/표시/포함 동작을 제어하는 데이터 필터 모드를 변경하기 위한 컨트롤을 표시하거나 숨깁니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
obj << Show Modes( 0 );

```

### Show Subset

**구문:** obj &lt;&lt; Show Subset

**설명:** 필터링된 데이터를 별도의 데이터 테이블 창에 표시합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter;
obj << Add Filter( Columns( :Region ), Where( :Region == "N" ) );
obj << Show Subset;

```

### Stretch Width

**구문:** obj &lt;&lt; Stretch Width( "Manual" | "Window" )

**설명:** 필터의 가로 늘이기 동작을 설정합니다. 기본적으로 필터 너비는 수동으로 변경할 수 있습니다. "Window"로 설정하면 창 크기에 따라 너비가 커지거나 작아집니다.

**JMP추가된 버전:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Shared Local Filter",
	Data Filter Context Box(
		H Splitter Box(
			Size( 1200, 500 ),
			V Scroll Box(
				dt << Data Filter(
					Local,
					Stretch Width( "Window" ),
					Add Filter( columns( :sex ), Where( :sex == "F" ) )
				),
				<<Set Stretch( "Off", "Fill" )
			),
			H Splitter Box(
				dt << Bubble Plot(
					X( :weight ),
					Y( :height ),
					Fit To Window( "On" ),
					Sizes( :age ),
					Title Position( 0, 0 )
				),
				dt << Graph Builder(
					Size( 525, 456 ),
					Show Control Panel( 0 ),
					Fit To Window( "On" ),
					Variables( X( :weight ), Y( :age ) ),
					Elements( Box Plot( X, Y, Legend( 4 ) ) ),

				),

			)
		)
	)
);

```

### Title

**구문:** obj &lt;&lt; Title

### Unstructured Text

**구문:** obj &lt;&lt; Unstructured Text

**JMP추가된 버전:** 16

### Use Floating Window

**구문:** obj &lt;&lt; Use Floating Window( state=0|1 )

**설명:** 이 데이터 필터에 대해 데이터 테이블 및 관련 창 위에 표시되는 부동 창이 사용되는지, 아니면 다른 창과 함께 배열할 수 있는 창이 사용되는지 간에 설정을 전환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter;
obj << Use Floating Window;

```

### Where

**구문:** obj &lt;&lt; Where

**설명:** 이 열 필터에 대해 제공된 기준을 기반으로 행을 선택합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter( Add( Filter Columns( :Region, :Lead ) ) );
Wait( 1 );
obj << (Filter Column( :Lead ) << Where( :Lead >= .4 & :Lead <= 1.4 ));

```

### columns

**구문:** obj &lt;&lt; columns( columns )

**설명:** 필터 열을 추가합니다. 필터 열을 추가하기 위한 대체 명령입니다.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
obj << Columns( :Region, :SO2, :CO, :State );

```

## Categorical Filter

### 항목 메시지

#### Blocks Display

**구문:** obj &lt;&lt; Blocks Display( state=0|1 )

**설명:** 각 수준을 선택 가능한 블록으로 표시합니다.

```jsl


dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Display( :Region, "List Display" ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Blocks Display;

```

#### Check Box Display

**구문:** obj &lt;&lt; Check Box Display( state=0|1 )

**설명:** 각 수준을 체크박스를 사용하여 표시하고 빈도 수 및 막대를 함께 표시합니다.

```jsl


dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Display( :Region, "List Display" ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Check Box Display;

```

#### Clear Find

**구문:** obj &lt;&lt; Clear Find

**JMP추가된 버전:** 15

#### Clear Selection

**구문:** obj &lt;&lt; Clear Selection

**설명:** 지정된 열의 현재 선택 항목을 모두 지웁니다.

```jsl


dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Clear Selection;

```

#### Continuous

**구문:** obj &lt;&lt; Continuous( state=0|1 )

**JMP추가된 버전:** 16

#### Delete

**구문:** obj &lt;&lt; Delete

**설명:** "데이터 필터" 제어판에서 변수를 제거합니다.

```jsl


dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Delete;

```

#### Extend Where

**구문:** obj &lt;&lt; Extend Where

**설명:** 표현식을 사용하여 행을 선택하고 이를 현재 선택 항목에 추가합니다.

```jsl


dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Extend Where( :Region == {"MW"} );

```

#### Find

**구문:** obj &lt;&lt; Find(Set Text("string"), &lt;options&gt;)

**설명:** 선택한 열에 대한 검색 문자열을 입력할 수 있는 텍스트 상자를 제공합니다.

**JMP추가된 버전:** 15

```jsl


dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Find( Set Text( "w" ) );

```

#### Get Selected Items

**구문:** obj &lt;&lt; Get Selected Items

**JMP추가된 버전:** 15

#### Get Visible Items

**구문:** obj &lt;&lt; Get Visible Items

**JMP추가된 버전:** 19

#### Invert Selection

**구문:** obj &lt;&lt; Invert Selection

**설명:** 지정된 열에서 선택된 모든 값을 선택 취소하고 이전에 선택되지 않았던 모든 값을 선택합니다.

```jsl


dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Invert Selection;

```

#### List Display

**구문:** obj &lt;&lt; List Display( state=0|1 )

**설명:** 목록의 각 수준을 빈도 수 및 막대와 함께 표시합니다.

```jsl


dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Display( :Region, "Check Box Display" ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << List Display;

```

#### Multiple Response

**구문:** obj &lt;&lt; Multiple Response( state=0|1 )

**JMP추가된 버전:** 16

#### Nominal/Ordinal

**구문:** obj &lt;&lt; Nominal/Ordinal( state=0|1 )

**JMP추가된 버전:** 16

#### Order By Count

**구문:** obj &lt;&lt; Order By Count( state=0|1 )

**설명:** 값을 개수 기준으로 내림차순 정렬합니다.

**JMP추가된 버전:** 15

```jsl


dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Order by Count;

```

#### Radio Box Display

**구문:** obj &lt;&lt; Radio Box Display( state=0|1 )

**설명:** 각 수준을 라디오 상자를 사용하여 표시하고 빈도 수 및 막대를 함께 표시합니다.

**JMP추가된 버전:** 15

```jsl


dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Display( :Region, "List Display" ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Radio Box Display;

```

#### Select Filter Item

**구문:** obj &lt;&lt; Select Filter Item

**설명:** 지정된 필터 항목을 선택합니다. 선택된 필터는 현재 애니메이션 개체로 사용됩니다.

```jsl


dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
popobj = obj << Get Filter Column( :POP );
popobj << Select Filter Item;

```

#### Single Category Display

**구문:** obj &lt;&lt; Single Category Display( state=0|1 )

**설명:** 콤보 상자 메뉴에 각 수준 및 빈도 수를 표시합니다.

```jsl


dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Display( :Region, "List Display" ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Single Category Display;

```

#### Unstructured Text

**구문:** obj &lt;&lt; Unstructured Text( state=0|1 )

**JMP추가된 버전:** 16

#### Where

**구문:** obj &lt;&lt; Where

**설명:** 표현식을 사용하여 행을 선택합니다.

```jsl


dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Where( :Region == {"MW"} );

```

## Continuous Filter

### 항목 메시지

#### Clear Selection

**구문:** obj &lt;&lt; Clear Selection

**설명:** 지정된 열의 현재 선택 항목을 모두 지웁니다.

```jsl


dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Clear Selection;

```

#### Continuous

**구문:** obj &lt;&lt; Continuous( state=0|1 )

**JMP추가된 버전:** 16

#### Delete

**구문:** obj &lt;&lt; Delete

**설명:** "데이터 필터" 제어판에서 변수를 제거합니다.

```jsl


dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Delete;

```

#### Extend Where

**구문:** obj &lt;&lt; Extend Where

**설명:** 표현식을 사용하여 행을 선택하고 이를 현재 선택 항목에 추가합니다.

```jsl


dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Extend Where( :Region == {"MW"} );

```

#### Invert Selection

**구문:** obj &lt;&lt; Invert Selection

**설명:** 지정된 열에서 선택된 모든 값을 선택 취소하고 이전에 선택되지 않았던 모든 값을 선택합니다.

```jsl


dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Invert Selection;

```

#### Multiple Response

**구문:** obj &lt;&lt; Multiple Response( state=0|1 )

**JMP추가된 버전:** 16

#### Nominal/Ordinal

**구문:** obj &lt;&lt; Nominal/Ordinal( state=0|1 )

**JMP추가된 버전:** 16

#### Reset Zoom

**구문:** obj &lt;&lt; Reset Zoom

**설명:** 필터 표시의 최소값 및 최대값을 기본값으로 재설정합니다.

**JMP추가된 버전:** 15

```jsl


dt = Open( "$SAMPLE_DATA/Time Series/Air.jmp" );
gb = dt << Graph Builder(
	Size( 522, 492 ),
	Show Control Panel( 0 ),
	Variables( X( :month ), Y( :Ozone Concentration ), Group X( :Summer Months Intervention ) ),
	Elements( Points( X, Y, Legend( 10 ) ), Smoother( X, Y, Legend( 11 ) ) ), 
    
);
ldf = gb << Local Data Filter(
	Add Filter( columns( :date ), Where( :date >= 16Oct1965 & :date <= 31Aug1968 ) )
);
fc = ldf << Get Filter Column( :date );
fc << Zoom to Selection;
Wait( 1 );
fc << Reset Zoom;

```

#### Select Filter Item

**구문:** obj &lt;&lt; Select Filter Item

**설명:** 지정된 필터 항목을 선택합니다. 선택된 필터는 현재 애니메이션 개체로 사용됩니다.

```jsl


dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
popobj = obj << Get Filter Column( :POP );
popobj << Select Filter Item;

```

#### Select Missing

**구문:** obj &lt;&lt; Select Missing

**설명:** 결측값이 포함된 행을 선택합니다.

**JMP추가된 버전:** 15

```jsl


dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Location( {2098, 120} ),
	Mode( Select( 0 ), Include( 1 ) ),
	Add Filter( columns( :OZONE ), Where( :OZONE >= 0.1 & :OZONE <= 0.2 ) )
);
Wait( 1 );
ozoneobj = obj << Get Filter Column( :OZONE );
ozoneobj << Select Missing;

```

#### Unstructured Text

**구문:** obj &lt;&lt; Unstructured Text( state=0|1 )

**JMP추가된 버전:** 16

#### Where

**구문:** obj &lt;&lt; Where

**설명:** 표현식을 사용하여 행을 선택합니다.

```jsl


dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Where( :Region == {"MW"} );

```

#### Zoom to Selection

**구문:** obj &lt;&lt; Zoom to Selection

**설명:** 현재 선택된 간격을 기준으로 필터 표시의 최소값 및 최대값을 설정합니다.

**JMP추가된 버전:** 15

```jsl


dt = Open( "$SAMPLE_DATA/Time Series/Air.jmp" );
gb = dt << Graph Builder(
	Size( 522, 492 ),
	Show Control Panel( 0 ),
	Variables( X( :month ), Y( :Ozone Concentration ), Group X( :Summer Months Intervention ) ),
	Elements( Points( X, Y, Legend( 10 ) ), Smoother( X, Y, Legend( 11 ) ) ), 
    
);
ldf = gb << Local Data Filter(
	Add Filter( columns( :date ), Where( :date >= 16Oct1965 & :date <= 31Aug1968 ) )
);
fc = ldf << Get Filter Column( :date );
Wait( 1 );
fc << Zoom to Selection;

```

## Multiple Response Filter

### 항목 메시지

#### Blocks Display

**구문:** obj &lt;&lt; Blocks Display( state=0|1 )

**설명:** 각 수준을 선택 가능한 블록으로 표시합니다.

```jsl


dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Display( :Region, "List Display" ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Blocks Display;

```

#### Check Box Display

**구문:** obj &lt;&lt; Check Box Display( state=0|1 )

**설명:** 각 수준을 체크박스를 사용하여 표시하고 빈도 수 및 막대를 함께 표시합니다.

```jsl


dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Display( :Region, "List Display" ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Check Box Display;

```

#### Clear Find

**구문:** obj &lt;&lt; Clear Find

**JMP추가된 버전:** 15

#### Clear Selection

**구문:** obj &lt;&lt; Clear Selection

**설명:** 지정된 열의 현재 선택 항목을 모두 지웁니다.

```jsl


dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Clear Selection;

```

#### Continuous

**구문:** obj &lt;&lt; Continuous( state=0|1 )

**JMP추가된 버전:** 16

#### Delete

**구문:** obj &lt;&lt; Delete

**설명:** "데이터 필터" 제어판에서 변수를 제거합니다.

```jsl


dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Delete;

```

#### Extend Where

**구문:** obj &lt;&lt; Extend Where

**설명:** 표현식을 사용하여 행을 선택하고 이를 현재 선택 항목에 추가합니다.

```jsl


dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Extend Where( :Region == {"MW"} );

```

#### Find

**구문:** obj &lt;&lt; Find(Set Text("string"), &lt;options&gt;)

**설명:** 선택한 열에 대한 검색 문자열을 입력할 수 있는 텍스트 상자를 제공합니다.

**JMP추가된 버전:** 15

```jsl


dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Find( Set Text( "w" ) );

```

#### Get Selected Items

**구문:** obj &lt;&lt; Get Selected Items

**JMP추가된 버전:** 15

#### Get Visible Items

**구문:** obj &lt;&lt; Get Visible Items

**JMP추가된 버전:** 19

#### Invert Selection

**구문:** obj &lt;&lt; Invert Selection

**설명:** 지정된 열에서 선택된 모든 값을 선택 취소하고 이전에 선택되지 않았던 모든 값을 선택합니다.

```jsl


dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Invert Selection;

```

#### List Display

**구문:** obj &lt;&lt; List Display( state=0|1 )

**설명:** 목록의 각 수준을 빈도 수 및 막대와 함께 표시합니다.

```jsl


dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Display( :Region, "Check Box Display" ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << List Display;

```

#### Match All

**구문:** obj &lt;&lt; Match All

**설명:** 선택한 모든 값과 매칭되는 값이 있는 행을 선택합니다.

```jsl


dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Sports ), Match Any( Where( :sports == {"Basketball", "Tennis"} ) ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
sportsobj = obj << Get Filter Column( :Sports );
sportsobj << Match All;

```

#### Match Any

**구문:** obj &lt;&lt; Match Any

**설명:** 선택한 값과 매칭되는 값이 있는 행을 선택합니다. 기본적으로 이 옵션이 선택됩니다.

```jsl


dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Sports ), Match Any( Where( :sports == {"Basketball", "Tennis"} ) ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
sportsobj = obj << Get Filter Column( :Sports );
sportsobj << Match Any;

```

#### Match At Least

**구문:** dfitem &lt;&lt; Match At Least(n);

**설명:** 선택한 값 중 최소 n개의 값이 매칭되는 행을 선택합니다.

```jsl


dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Sports ), Match Any( Where( :sports == {"Basketball", "Tennis"} ) ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
sportsobj = obj << Get Filter Column( :Sports );
sportsobj << Match At Least( 1 );

```

#### Match At Most

**구문:** dfitem &lt;&lt; Match At Most(n);

**설명:** 선택한 값 중 최대 n개의 값이 매칭되는 행을 선택합니다.

```jsl


dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Sports ), Match Any( Where( :sports == {"Basketball", "Tennis"} ) ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
sportsobj = obj << Get Filter Column( :Sports );
sportsobj << Match At Most( 1 );

```

#### Match Between

**구문:** dfitem &lt;&lt; Match Between(n, m);

**설명:** 선택한 값 중 n개 ~ m개 사이의 값이 매칭되는 행을 선택합니다.

```jsl


dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Sports ), Match Any( Where( :sports == {"Basketball", "Tennis"} ) ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
sportsobj = obj << Get Filter Column( :Sports );
sportsobj << Match Between( 1, 2 );

```

#### Match Exactly

**구문:** obj &lt;&lt; Match Exactly

**설명:** 선택한 값과 정확하게 매칭되는 값이 있는 행을 선택합니다.

```jsl


dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Sports ), Match Any( Where( :sports == {"Basketball", "Tennis"} ) ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
sportsobj = obj << Get Filter Column( :Sports );
sportsobj << Match Exactly;

```

#### Match None

**구문:** obj &lt;&lt; Match None

**설명:** 선택한 값과 매칭되지 않는 값이 있는 행을 선택합니다.

```jsl


dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Sports ), Match Any( Where( :sports == {"Basketball", "Tennis"} ) ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
sportsobj = obj << Get Filter Column( :Sports );
sportsobj << Match None;

```

#### Match Only

**구문:** obj &lt;&lt; Match Only

**설명:** 선택한 값과만 매칭되는 값이 있는 행을 선택합니다.

```jsl


dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Sports ), Match Any( Where( :sports == {"Basketball", "Tennis"} ) ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
sportsobj = obj << Get Filter Column( :Sports );
sportsobj << Match Only;

```

#### Multiple Response

**구문:** obj &lt;&lt; Multiple Response( state=0|1 )

**JMP추가된 버전:** 16

#### Nominal/Ordinal

**구문:** obj &lt;&lt; Nominal/Ordinal( state=0|1 )

**JMP추가된 버전:** 16

#### Order By Count

**구문:** obj &lt;&lt; Order By Count( state=0|1 )

**설명:** 값을 개수 기준으로 내림차순 정렬합니다.

**JMP추가된 버전:** 15

```jsl


dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Order by Count;

```

#### Radio Box Display

**구문:** obj &lt;&lt; Radio Box Display( state=0|1 )

**설명:** 각 수준을 라디오 상자를 사용하여 표시하고 빈도 수 및 막대를 함께 표시합니다.

**JMP추가된 버전:** 15

```jsl


dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Display( :Region, "List Display" ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Radio Box Display;

```

#### Select Filter Item

**구문:** obj &lt;&lt; Select Filter Item

**설명:** 지정된 필터 항목을 선택합니다. 선택된 필터는 현재 애니메이션 개체로 사용됩니다.

```jsl


dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
popobj = obj << Get Filter Column( :POP );
popobj << Select Filter Item;

```

#### Single Category Display

**구문:** obj &lt;&lt; Single Category Display( state=0|1 )

**설명:** 콤보 상자 메뉴에 각 수준 및 빈도 수를 표시합니다.

```jsl


dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Display( :Region, "List Display" ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Single Category Display;

```

#### Unstructured Text

**구문:** obj &lt;&lt; Unstructured Text( state=0|1 )

**JMP추가된 버전:** 16

#### Where

**구문:** obj &lt;&lt; Where

**설명:** 표현식을 사용하여 행을 선택합니다.

```jsl


dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Where( :Region == {"MW"} );

```

## Unstructured Text Filter

### 항목 메시지

#### Add Missing

**구문:** obj &lt;&lt; Add Missing

**설명:** 결측값을 비정형 텍스트에 대해 선택 가능한 옵션으로 추가합니다.

**JMP추가된 버전:** 16

```jsl


dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Graph Builder(
	Show Control Panel( 0 ),
	Variables( X( :sibling ages ) ),
	Elements( Bar( X, Legend( 3 ) ) )
);
df = obj << Local Data Filter(
	Add Filter(
		columns( :reported illnesses ),
		Unstructured Text( Column( :reported illnesses ), Add Filter Text( "head" ) ),
		Match Any( Where( Contains( :reported illnesses, "head" ) ) ),

	)
);
Wait( 1 );
illness_obj = df << Get Filter Column( :reported illnesses );
illness_obj << Add Missing;

```

#### Blocks Display

**구문:** obj &lt;&lt; Blocks Display( state=0|1 )

**설명:** 각 수준을 선택 가능한 블록으로 표시합니다.

```jsl


dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Display( :Region, "List Display" ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Blocks Display;

```

#### Check Box Display

**구문:** obj &lt;&lt; Check Box Display( state=0|1 )

**설명:** 각 수준을 체크박스를 사용하여 표시하고 빈도 수 및 막대를 함께 표시합니다.

```jsl


dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Display( :Region, "List Display" ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Check Box Display;

```

#### Clear Filter Texts List

**구문:** obj &lt;&lt; Clear Filter Texts List

**설명:** 비정형 텍스트 필터 항목에 대한 필터 목록을 지웁니다.

**JMP추가된 버전:** 16

```jsl


dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Graph Builder(
	Show Control Panel( 0 ),
	Variables( X( :sibling ages ) ),
	Elements( Bar( X, Legend( 3 ) ) )
);
df = obj << Local Data Filter(
	Add Filter(
		columns( :reported illnesses ),
		Unstructured Text( Column( :reported illnesses ), Add Filter Text( "head" ) ),
		Match Any( Where( Contains( :reported illnesses, "head" ) ) ),

	)
);
Wait( 1 );
illness_obj = df << Get Filter Column( :reported illnesses );
illness_obj << Clear Filter Texts List;

```

#### Clear Selection

**구문:** obj &lt;&lt; Clear Selection

**설명:** 지정된 열의 현재 선택 항목을 모두 지웁니다.

```jsl


dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Clear Selection;

```

#### Continuous

**구문:** obj &lt;&lt; Continuous( state=0|1 )

**JMP추가된 버전:** 16

#### Delete

**구문:** obj &lt;&lt; Delete

**설명:** "데이터 필터" 제어판에서 변수를 제거합니다.

```jsl


dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Delete;

```

#### Extend Where

**구문:** obj &lt;&lt; Extend Where

**설명:** 표현식을 사용하여 행을 선택하고 이를 현재 선택 항목에 추가합니다.

```jsl


dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Extend Where( :Region == {"MW"} );

```

#### Get Selected Items

**구문:** obj &lt;&lt; Get Selected Items

**JMP추가된 버전:** 15

#### Get Visible Items

**구문:** obj &lt;&lt; Get Visible Items

**JMP추가된 버전:** 19

#### Invert Selection

**구문:** obj &lt;&lt; Invert Selection

**설명:** 지정된 열에서 선택된 모든 값을 선택 취소하고 이전에 선택되지 않았던 모든 값을 선택합니다.

```jsl


dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Invert Selection;

```

#### List Display

**구문:** obj &lt;&lt; List Display( state=0|1 )

**설명:** 목록의 각 수준을 빈도 수 및 막대와 함께 표시합니다.

```jsl


dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Display( :Region, "Check Box Display" ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << List Display;

```

#### Match All

**구문:** obj &lt;&lt; Match All

**설명:** 선택한 모든 값과 매칭되는 값이 있는 행을 선택합니다.

```jsl


dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Sports ), Match Any( Where( :sports == {"Basketball", "Tennis"} ) ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
sportsobj = obj << Get Filter Column( :Sports );
sportsobj << Match All;

```

#### Match Any

**구문:** obj &lt;&lt; Match Any

**설명:** 선택한 값과 매칭되는 값이 있는 행을 선택합니다. 기본적으로 이 옵션이 선택됩니다.

```jsl


dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Sports ), Match Any( Where( :sports == {"Basketball", "Tennis"} ) ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
sportsobj = obj << Get Filter Column( :Sports );
sportsobj << Match Any;

```

#### Match At Least

**구문:** dfitem &lt;&lt; Match At Least(n);

**설명:** 선택한 값 중 최소 n개의 값이 매칭되는 행을 선택합니다.

```jsl


dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Sports ), Match Any( Where( :sports == {"Basketball", "Tennis"} ) ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
sportsobj = obj << Get Filter Column( :Sports );
sportsobj << Match At Least( 1 );

```

#### Match At Most

**구문:** dfitem &lt;&lt; Match At Most(n);

**설명:** 선택한 값 중 최대 n개의 값이 매칭되는 행을 선택합니다.

```jsl


dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Sports ), Match Any( Where( :sports == {"Basketball", "Tennis"} ) ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
sportsobj = obj << Get Filter Column( :Sports );
sportsobj << Match At Most( 1 );

```

#### Match Between

**구문:** dfitem &lt;&lt; Match Between(n, m);

**설명:** 선택한 값 중 n개 ~ m개 사이의 값이 매칭되는 행을 선택합니다.

```jsl


dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Sports ), Match Any( Where( :sports == {"Basketball", "Tennis"} ) ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
sportsobj = obj << Get Filter Column( :Sports );
sportsobj << Match Between( 1, 2 );

```

#### Match Exactly

**구문:** obj &lt;&lt; Match Exactly

**설명:** 선택한 값과 정확하게 매칭되는 값이 있는 행을 선택합니다.

```jsl


dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Sports ), Match Any( Where( :sports == {"Basketball", "Tennis"} ) ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
sportsobj = obj << Get Filter Column( :Sports );
sportsobj << Match Exactly;

```

#### Match None

**구문:** obj &lt;&lt; Match None

**설명:** 선택한 값과 매칭되지 않는 값이 있는 행을 선택합니다.

```jsl


dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Sports ), Match Any( Where( :sports == {"Basketball", "Tennis"} ) ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
sportsobj = obj << Get Filter Column( :Sports );
sportsobj << Match None;

```

#### Match Only

**구문:** obj &lt;&lt; Match Only

**설명:** 선택한 값과만 매칭되는 값이 있는 행을 선택합니다.

```jsl


dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Sports ), Match Any( Where( :sports == {"Basketball", "Tennis"} ) ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
sportsobj = obj << Get Filter Column( :Sports );
sportsobj << Match Only;

```

#### Multiple Response

**구문:** obj &lt;&lt; Multiple Response( state=0|1 )

**JMP추가된 버전:** 16

#### Nominal/Ordinal

**구문:** obj &lt;&lt; Nominal/Ordinal( state=0|1 )

**JMP추가된 버전:** 16

#### Order By Count

**구문:** obj &lt;&lt; Order By Count( state=0|1 )

**설명:** 값을 개수 기준으로 내림차순 정렬합니다.

**JMP추가된 버전:** 15

```jsl


dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Order by Count;

```

#### Radio Box Display

**구문:** obj &lt;&lt; Radio Box Display( state=0|1 )

**설명:** 각 수준을 라디오 상자를 사용하여 표시하고 빈도 수 및 막대를 함께 표시합니다.

**JMP추가된 버전:** 15

```jsl


dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Display( :Region, "List Display" ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Radio Box Display;

```

#### Select Filter Item

**구문:** obj &lt;&lt; Select Filter Item

**설명:** 지정된 필터 항목을 선택합니다. 선택된 필터는 현재 애니메이션 개체로 사용됩니다.

```jsl


dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
popobj = obj << Get Filter Column( :POP );
popobj << Select Filter Item;

```

#### Show Filter Text Edit Box

**구문:** obj &lt;&lt; Show Filter Text Edit Box( state=0|1 )

**설명:** 텍스트 필터 조건을 정의하기 위한 텍스트 편집 상자를 표시하거나 숨깁니다.

**JMP추가된 버전:** 16

```jsl


dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Graph Builder(
	Show Control Panel( 0 ),
	Variables( X( :sibling ages ) ),
	Elements( Bar( X, Legend( 3 ) ) )
);
df = obj << Local Data Filter(
	Add Filter(
		columns( :reported illnesses ),
		Unstructured Text( Column( :reported illnesses ), Add Filter Text( "head" ) ),
		Match Any( Where( Contains( :reported illnesses, "head" ) ) ),

	)
);
Wait( 1 );
illness_obj = df << Get Filter Column( :reported illnesses );
illness_obj << Show Filter Text Edit Box( 0 );

```

#### Single Category Display

**구문:** obj &lt;&lt; Single Category Display( state=0|1 )

**설명:** 콤보 상자 메뉴에 각 수준 및 빈도 수를 표시합니다.

```jsl


dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Display( :Region, "List Display" ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Single Category Display;

```

#### Unstructured Text

**구문:** obj &lt;&lt; Unstructured Text( state=0|1 )

**JMP추가된 버전:** 16

#### Where

**구문:** obj &lt;&lt; Where

**설명:** 표현식을 사용하여 행을 선택합니다.

```jsl


dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Where( :Region == {"MW"} );

```

