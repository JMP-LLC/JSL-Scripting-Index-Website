# Row State



### As Row State

**구문:** rs = As Row State( x )

**설명:** 숫자를 행 상태 값으로 변환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row(
	Row State() = As Row State(
		(:sex == "F") * 2 + (:sex == "M") * 4 + ((:sex == "F") * 2 + (:sex == "M") * 6) * 16 + (:age - 11) *
		256
	)
);

```

### Color Of

**구문:** y = Color Of( &lt;rs&gt; ); Color Of( &lt;Row State( &lt;r&gt; )&gt; ) = y

**설명:** 지정된 행 상태 값의 색상 구성 요소를 양의 JMP 색상 팔레트 인덱스 또는 음의 RGB 인코딩 값으로 반환합니다. Color Of가 L-값으로 사용된 경우 현재 데이터 테이블의 현재(또는 r번째) 행의 색상을 변경합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" ) << Color By Column( :height );
Color To RGB( Color Of( Row State( 3 ) ) );
Row() = 3;
Color To RGB( Color Of() );

```

### Color State

**구문:** rs = Color State( color )

**설명:** 지정된 값으로 설정된 색상 구성 요소를 사용하여 행 상태 값을 반환합니다. color 인수는 유효한 JSL 색상일 수 있습니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Color State( {1, 0.5, 1} );
Color To RGB( Color Of( Row State( 3 ) ) );

```

### Combine States

**구문:** rs = Combine States( rs1, ... )

**설명:** 여러 개의 행 상태 값을 하나로 결합합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Combine States( Hue State( 5 ), Shade State( 1 ) );

```

### Excluded

**구문:** y = Excluded( &lt;rs&gt; ); Excluded( &lt;Row State( &lt;r&gt; )&gt; ) = y

**설명:** 지정된 행 상태 값 0 또는 1의 제외된 성분을 반환합니다. Excluded() 함수가 L-값으로 사용된 경우 현재 데이터 테이블의 현재(또는 r번째) 행의 제외된 상태를 변경합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Excluded State( 1 );
Excluded( Row State( 3 ) );
Row() = 3;
Excluded();

```

### Excluded State

**구문:** rs = Excluded State( x )

**설명:** 지정된 값으로 설정된 제외 항목 구성 요소를 사용하여 행 상태 값을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Excluded State( 1 );
Excluded( Row State( 3 ) );

```

### Hidden

**구문:** y = Hidden( &lt;rs&gt; ); Hidden( &lt;Row State( &lt;r&gt; )&gt; ) = y

**설명:** 지정된 행 상태 값 0 또는 1의 숨겨진 성분을 반환합니다. Hidden이 L-값으로 사용된 경우 현재 데이터 테이블의 현재(또는 r번째) 행의 숨김 상태를 변경합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Hidden State( 1 );
Hidden( Row State( 3 ) );
Row() = 3;
Hidden();

```

### Hidden State

**구문:** rs = Hidden State( x )

**설명:** 지정된 값으로 설정된 숨김 항목 구성 요소를 사용하여 행 상태 값을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Hidden State( 1 );
Hidden( Row State( 3 ) );

```

### Hue State

**구문:** rs = Hue State( x )

**설명:** 지정된 값으로 설정된 색조 구성 요소를 사용하여 행 상태 값을 반환합니다. 유효한 색상을 생성하려면 Shade State() 값과 함께 사용해야 합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Combine States( Hue State( 5 ), Shade State( 1 ) );

```

### Labeled

**구문:** y = Labeled( &lt;rs&gt; ); Labeled( &lt;Row State( &lt;r&gt; )&gt; ) = y

**설명:** 지정된 행 상태 값 0 또는 1의 라벨 성분을 반환합니다. Labeled가 L-값으로 사용된 경우 현재 데이터 테이블의 현재(또는 r번째) 행의 라벨 상태를 변경합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Labeled State( 1 );
Labeled( Row State( 3 ) );
Row() = 3;
Labeled();

```

### Labeled State

**구문:** rs = Labeled State( x )

**설명:** 지정된 값으로 설정된 라벨 항목 구성 요소를 사용하여 행 상태 값을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Labeled State( 1 );
Labeled( Row State( 3 ) );

```

### Marker Of

**구문:** y = Marker Of( &lt;rs&gt; ); Marker Of( &lt;Row State( &lt;r&gt; )&gt; ) = y

**설명:** 지정된 행 상태 값의 표식 성분을 반환합니다. Marker Of가 L-값으로 사용된 경우 현재 데이터 테이블의 현재(또는 r번째) 행의 표식을 변경합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Marker State( 5 );
Marker Of( Row State( 3 ) );
Row() = 3;
Marker Of();

```

### Marker State

**구문:** rs = Marker State( marker )

**설명:** 지정된 값으로 설정된 표식 구성 요소를 사용하여 행 상태 값을 반환합니다. marker 인수는 표식을 지정하며 양의 정수, 문자, 유니코드 문자에 대한 양의 정수 또는 유니코드 문자에 대한 Hex 문자일 수 있습니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Marker State( 5 );
Marker Of( Row State( 3 ) );

```

### Row State

**구문:** y = Row State( &lt;dt&gt;, &lt;r&gt; ); Row State( &lt;dt&gt;, &lt;r&gt; ) = y

**설명:** 현재 데이터 테이블의 현재(또는 r번째) 행의 행 상태를 반환합니다. Row State() 함수가 L-값으로 사용된 경우 현재 데이터 테이블에서 현재(또는 r번째) 행의 행 상태를 변경합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Color State( {1, .5, 1} );
Color To RGB( Color Of( Row State( 3 ) ) );

```

### Selected

**구문:** y = Selected( &lt;rs&gt; );Selected( &lt;Row State( &lt;r&gt; )&gt; ) = y

**설명:** 지정된 행 상태 값 0 또는 1의 선택된 성분을 반환합니다. Selected가 L-값으로 사용된 경우 현재 데이터 테이블에서 현재(또는 r번째) 행의 선택 상태가 변경됩니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Selected State( 1 );
Selected( Row State( 3 ) );
Row() = 3;
Selected();

```

### Selected State

**구문:** rs = Selected State( x )

**설명:** 지정된 값으로 설정된 선택 항목 구성 요소를 사용하여 행 상태 값을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Selected State( 1 );
Selected( Row State( 3 ) );

```

### Shade State

**구문:** rs = Shade State( x )

**설명:** 지정된 값으로 설정된 색상 음영 구성 요소를 사용하여 행 상태 값을 반환합니다. 유효한 색상을 생성하려면 Hue State() 값과 함께 사용해야 합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Combine States( Hue State( 5 ), Shade State( 1 ) );

```

