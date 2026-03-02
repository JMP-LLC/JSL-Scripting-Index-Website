# Legend Model



## 항목 메시지

### Get Fill Color

**구문:** obj &lt;&lt; Get Fill Color

**설명:** 그래프의 표시 세그먼트에 연결되는 범례 모형 항목의 채우기 색상을 반환합니다.

**JMP추가된 버전:** 16

```jsl


dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ), Overlay( :sex ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Ellipse( X, Y, Legend( 3 ) ) )
);
server = gb << Get Legend Server;
item = server << Get Legend Item( 3, 1 );
Show( item << Get Fill Color );

```

### Get Gradient Settings

**구문:** obj &lt;&lt; Get Gradient Settings

**설명:** 그래프의 표시 세그먼트에 연결되는 범례 모형 항목의 그래디언트 설정 목록을 반환합니다.

**JMP추가된 버전:** 16

```jsl


dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ), Color( :weight ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) )
);
server = gb << Get Legend Server;
item = server << Get Legend Item( 1, 1 );
Print( item << Get Gradient Settings );

```

### Get Label

**구문:** obj &lt;&lt; Get Label

**설명:** 범례 모형 항목의 라벨을 반환합니다.

**JMP추가된 버전:** 16

```jsl


dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ), Overlay( :sex ), Color( :age ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) )
);
server = gb << Get Legend Server;
item = server << Get Legend Item( 2, 1 );
Print( item << Get Label );

```

### Get Marker Size Settings

**구문:** obj &lt;&lt; Get Marker Size Settings

**설명:** 그래프의 표시 세그먼트에 연결되는 범례 모형 항목의 표식 크기 설정 목록을 반환합니다.

**JMP추가된 버전:** 16

```jsl


dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ), Size( :height ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) )
);
server = gb << Get Legend Server;
item = server << Get Legend Item( 1, 1 );
Print( item << Get Marker Size Settings );

```

### Get Pen Settings

**구문:** obj &lt;&lt; Get Pen Settings

**설명:** 그래프의 표시 세그먼트에 연결되는 범례 모형 항목의 펜 설정 목록을 반환합니다.

**JMP추가된 버전:** 16

```jsl


dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ), Overlay( :sex ), Color( :age ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) )
);
server = gb << Get Legend Server;
item = server << Get Legend Item( 1, 7 );
Print( item << Get Pen Settings );

```

### Get Type

**구문:** obj &lt;&lt; Get Type

**설명:** 범례 모형 항목의 유형을 반환합니다. 유형은 "없음", "표식", "H 선", "V 선", "단계", "막대", "V 상자 그림", "H 구간", "V 구간", "H 막대 상자 그림", "V 막대 상자 그림", "OHLC 그림", "H 상자 그림", 그래디언트", "밀도 그래디언트", "채우기 및 선", "표식 크기", "선 크기", 그래디언트 선", "그래디언트 등고선", "표식 색상", "표식 크기 범주형", "셀 크기"입니다.

**JMP추가된 버전:** 16

```jsl


dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ), Overlay( :sex ), Color( :age ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) )
);
server = gb << Get Legend Server;
item = server << Get Legend Item( 2, 1 );
Print( item << Get Type );

```

### Set Label

**구문:** obj &lt;&lt; Set Label( text )

**설명:** 그래프의 표시 세그먼트에 연결되는 범례 모형 항목의 라벨을 설정합니다.

**JMP추가된 버전:** 16

```jsl


dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ), Overlay( :sex ), Color( :age ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) )
);
server = gb << Get Legend Server;
items = server << Get Legend Items;
For Each( {item, index}, items[1], item << Set Label( "Item " || Char( index ) ) );

```

### Set Properties

**구문:** obj &lt;&lt; Set Properties

**설명:** 그래프의 표시 세그먼트에 연결되는 범례 모형 항목의 임의 표시 특성을 설정합니다.

**JMP추가된 버전:** 16

```jsl


dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ), Size( :height ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) )
);
server = gb << Get Legend Server;
item = server << Get Legend Item( 1, 1 );
item << Set Properties(
	{Marker Size( 5 ), Marker Scale( {Marker Size Minimum( "Dot" ), Style( "Nested Full" )} )}
);

```

