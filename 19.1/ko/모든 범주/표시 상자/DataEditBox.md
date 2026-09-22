# DataEditBox



## 항목 메시지

### Blink

**구문:** obj &lt;&lt; Blink

**설명:** 데이터 편집 상자에 표시된 행을 깜박입니다.

```jsl

Open( "$SAMPLE_DATA/SAT.jmp" );New Window( "Example",	cp = Cell Plot(		Scale Uniformly( 0 ),		Center at zero( 0 ),		Y( :"2004 Verbal"n, :"2004 Math"n, :"2003 Verbal"n, :"2003 Math"n )	));cpr = cp << report;cpb = cpr[Cell Plot Box( 1 )];cpb << Row Editor;win = Window( "Row Editor for SAT" );dataedit = win[Data Edit Box( 1 )];dataedit << Blink;

```

### Find

**구문:** obj &lt;&lt; Find( search term )

**설명:** 입력된 검색 단어로 찾은 행을 표시합니다.

```jsl

Open( "$SAMPLE_DATA/SAT.jmp" );New Window( "Example",	cp = Cell Plot(		Scale Uniformly( 0 ),		Center at zero( 0 ),		Y( :"2004 Verbal"n, :"2004 Math"n, :"2003 Verbal"n, :"2003 Math"n )	));cpr = cp << report;cpb = cpr[Cell Plot Box( 1 )];cpb << Row Editor;win = Window( "Row Editor for SAT" );dataedit = win[Data Edit Box( 1 )];dataedit << Find( Contains( :State, "North Carolina" ) );

```

### Go to row

**구문:** obj &lt;&lt; Go to row( row )

**설명:** 입력된 행을 데이터 편집 상자에 표시합니다.

```jsl

Open( "$SAMPLE_DATA/SAT.jmp" );New Window( "Example",	cp = Cell Plot(		Scale Uniformly( 0 ),		Center at zero( 0 ),		Y( :"2004 Verbal"n, :"2004 Math"n, :"2003 Verbal"n, :"2003 Math"n )	));cpr = cp << report;cpb = cpr[Cell Plot Box( 1 )];cpb << Row Editor;win = Window( "Row Editor for SAT" );dataedit = win[Data Edit Box( 1 )];dataedit << Go To Row( 23 );

```

### New Row

**구문:** obj &lt;&lt; New Row

**설명:** 데이터 테이블에 새 행을 생성하고 데이터 편집 상자에 해당 행을 표시합니다.

```jsl

Open( "$SAMPLE_DATA/SAT.jmp" );New Window( "Example",	cp = Cell Plot(		Scale Uniformly( 0 ),		Center at zero( 0 ),		Y( :"2004 Verbal"n, :"2004 Math"n, :"2003 Verbal"n, :"2003 Math"n )	));cpr = cp << report;cpb = cpr[Cell Plot Box( 1 )];cpb << Row Editor;win = Window( "Row Editor for SAT" );dataedit = win[Data Edit Box( 1 )];dataedit << New Row;

```

### Next

**구문:** obj &lt;&lt; Next

**설명:** 다음 선택된 행을 데이터 편집 상자에 표시합니다.

```jsl

Open( "$SAMPLE_DATA/SAT.jmp" );New Window( "Example",	cp = Cell Plot(		Scale Uniformly( 0 ),		Center at zero( 0 ),		Y( :"2004 Verbal"n, :"2004 Math"n, :"2003 Verbal"n, :"2003 Math"n )	));cpr = cp << report;cpb = cpr[Cell Plot Box( 1 )];cpb << Row Editor;win = Window( "Row Editor for SAT" );dataedit = win[Data Edit Box( 1 )];dataedit << Next;

```

### Next Selected

**구문:** obj &lt;&lt; Next Selected

**설명:** 선택된 행 중에서 다음 선택된 행을 데이터 편집 상자에 표시합니다.

```jsl

dt = Open( "$SAMPLE_DATA/SAT.jmp" );New Window( "Example",	cp = Cell Plot(		Scale Uniformly( 0 ),		Center at zero( 0 ),		Y( :"2004 Verbal"n, :"2004 Math"n, :"2003 Verbal"n, :"2003 Math"n )	));cpr = cp << report;cpb = cpr[Cell Plot Box( 1 )];cpb << Row Editor;win = Window( "Row Editor for SAT" );dt << Select Where( dt:population > 10000000 );dataedit = win[Data Edit Box( 1 )];dataedit << Next Selected;

```

### Prev

**구문:** obj &lt;&lt; Prev

**설명:** 이전 선택된 행을 데이터 편집 상자에 표시합니다.

```jsl

Open( "$SAMPLE_DATA/SAT.jmp" );New Window( "Example",	cp = Cell Plot(		Scale Uniformly( 0 ),		Center at zero( 0 ),		Y( :"2004 Verbal"n, :"2004 Math"n, :"2003 Verbal"n, :"2003 Math"n )	));cpr = cp << report;cpb = cpr[Cell Plot Box( 1 )];cpb << Row Editor;win = Window( "Row Editor for SAT" );dataedit = win[Data Edit Box( 1 )];dataedit << Go To Row( 23 );dataedit << Prev;

```

### Prev Selected

**구문:** obj &lt;&lt; Prev Selected

**설명:** 선택된 행 중에서 이전 선택된 행을 데이터 편집 상자에 표시합니다.

```jsl

dt = Open( "$SAMPLE_DATA/SAT.jmp" );New Window( "Example",	cp = Cell Plot(		Scale Uniformly( 0 ),		Center at zero( 0 ),		Y( :"2004 Verbal"n, :"2004 Math"n, :"2003 Verbal"n, :"2003 Math"n )	));cpr = cp << report;cpb = cpr[Cell Plot Box( 1 )];cpb << Row Editor;win = Window( "Row Editor for SAT" );dt << Select Where( dt:population > 10000000 );dataedit = win[Data Edit Box( 1 )];dataedit << Prev Selected;

```

### Save

**구문:** obj &lt;&lt; Save

**설명:** 데이터 편집 상자의 행 값을 데이터 테이블에 저장합니다.

```jsl

dt = Open( "$SAMPLE_DATA/SAT.jmp" );dt << Save( "$TEMP/SAT.jmp" );New Window( "Example",	cp = dt << Cell Plot(		Scale Uniformly( 0 ),		Center at zero( 0 ),		Y( :"2004 Verbal"n, :"2004 Math"n, :"2003 Verbal"n, :"2003 Math"n )	));cpr = cp << report;cpb = cpr[Cell Plot Box( 1 )];cpb << Row Editor;win = Window( "Row Editor for SAT" );dataedit = win[Data Edit Box( 1 )];dataedit << New Row;dataedit << Save;

```

