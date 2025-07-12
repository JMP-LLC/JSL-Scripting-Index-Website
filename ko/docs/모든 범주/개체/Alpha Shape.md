# Alpha Shape



## 연결된 생성자

### Alpha Shape

**구문:** ashape = Alpha Shape(Triangulation)

**설명:** 지정된 삼각 분할에 대한 알파 셰이프를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );

```

## 항목 메시지

### Get Alpha

**구문:** alpha = obj << Get Alpha

**설명:** 현재 알파 값을 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
ashape << Get Alpha();

```

### Get Edges

**구문:** edges = obj << Get Edges

**설명:** 모서리의 인덱스를 Nx2 행렬 형식으로 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
tri << Get Edges;

```

### Get Hull Edges

**구문:** ind = obj << Get Hull Edges

**설명:** 삼각 분할 경계에 있는 모서리의 인덱스를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
tri << Get Hull Edges;

```

### Get Hull Path

**구문:** ind = obj << Get Hull Path

**설명:** 삼각 분할의 경계를 경로로 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
tri << Get Hull Path;

```

### Get Hull Points

**구문:** ind = obj << Get Hull Points

**설명:** 삼각 분할 경계에 있는 점의 인덱스를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
tri << Get Hull Points;

```

### Get N Edges

**구문:** nedge = obj << Get N Edges

**설명:** 삼각 분할의 모서리 수를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
tri << Get NEdges;

```

### Get N Hull Edges

**구문:** nhull = obj << Get N Hull Edges

**설명:** 삼각 분할 경계에 있는 모서리 수를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
tri << Get N Hull Edges;

```

### Get N Hull Points

**구문:** nhull = obj << Get N Hull Points

**설명:** 삼각 분할 경계에 있는 점의 수를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
tri << Get N Hull Points;

```

### Get N Points

**구문:** npt = obj << Get N Points

**설명:** 삼각 분할에 있는 고유 점의 수를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
tri << Get N Points;

```

### Get N Triangles

**구문:** ntri = obj << Get N Triangles

**설명:** 삼각형의 수를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
tri << Get N Triangles;

```

### Get Points

**구문:** {x1,x2} = obj << Get Points

**설명:** 삼각 분할에 있는 고유 점의 좌표를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
tri << Get Points;

```

### Get Tri Alpha

**구문:** [alpha1, ...] = obj << Get Tri Alpha

**설명:** 각 삼각형에 대한 알파 값을 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
ashape << Get Tri Alpha();

```

### Get Triangles

**구문:** m = obj << Get Triangles

**설명:** 삼각형의 인덱스를 Nx3 행렬 형식으로 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
tri << Get Triangles;

```

### Get Y

**구문:** y = obj << Get Y

**설명:** 삼각 분할에 있는 고유 점의 Y 값을 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
tri << Get Y;

```

### Peel

**구문:** tri = obj << Peel

**설명:** 삼각 분할의 경계 계층을 벗겨 새 삼각 분할을 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
Show( tri << Get N Triangles );
tri2 = tri << Peel;
Show( tri2 << Get N Triangles );

```

### Set Alpha

**구문:** obj << Set Alpha( alpha )

**설명:** 현재 알파 값을 설정하고 삼각 분할을 다시 계산합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
ashape << Set Alpha( 0.5 );

```

### Subset

**구문:** tri = obj << Subset( {indices} )

**설명:** 지정된 점 부분집합의 결과로 생성된 삼각 분할을 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
Show( tri << Get N Triangles );
tri2 = tri << Subset( tri << Get Hull Points );
Show( tri2 << Get N Triangles );

```

