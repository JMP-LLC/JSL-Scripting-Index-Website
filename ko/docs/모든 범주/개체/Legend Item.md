# Legend Item



## 항목 메시지

### Get Label

**구문:** obj << Get Label

**설명:** 범례 항목의 라벨을 반환합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ), Overlay( :sex ), Color( :age ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) )
);
lgnd = gb << Get Legend Display;
item = lgnd << Get Item( 2, 1 );
Print( item << Get Label );

```

### Get Position

**구문:** obj << Get Position

**설명:** 범례 항목의 순차 위치를 반환하거나, 표시되지 않는 경우 음수 코드를 반환합니다. 코드는 -1 = 사용자가 숨김, -2 = If Display로 숨김, -3 = 종속성으로 숨김, -4 = 초기 설정으로 숨김입니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ), Overlay( :sex ), Color( :age ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) )
);
lgnd = gb << Get Legend Display;
item = lgnd << Get Item( 2, 1 );
Print( item << Get Position );

```

### Get Type

**구문:** obj << Get Type

**설명:** 범례 항목의 유형을 반환합니다. 유형은 "없음", "표식", "H 선", "V 선", "단계", "막대", "V 상자 그림", "H 구간", "V 구간", "H 막대 상자 그림", "V 막대 상자 그림", "OHLC 그림", "H 상자 그림", 그래디언트", "밀도 그래디언트", "채우기 및 선", "표식 크기", "선 크기", 그래디언트 선", "그래디언트 등고선", "표식 색상", "표식 크기 범주형", "셀 크기"입니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ), Overlay( :sex ), Color( :age ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) )
);
lgnd = gb << Get Legend Display;
item = lgnd << Get Item( 2, 1 );
Print( item << Get Type );

```

### Set Label

**구문:** obj << Set Label( text )

**설명:** 범례 항목의 라벨을 설정합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ), Overlay( :sex ), Color( :age ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) )
);
lgnd = gb << Get Legend Display;
item = lgnd << Get Item( 2, 1 );
item << Set Label( "Label Set Through Script" );

```

### Set Visible

**구문:** obj << Set Visible( state=0|1 )

**설명:** 범례 항목의 표시 여부를 설정합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ), Overlay( :sex ), Color( :age ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) )
);
lgnd = gb << Get Legend Display;
item = lgnd << Get Item( 2, 1 );
item << Set Visible( 0 );

```

