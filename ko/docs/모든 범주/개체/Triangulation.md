# Triangulation



## 연결된 생성자

### Triangulation

**구문:** triangulation = Triangulation( X(Column1, Column2), &lt; Y(Column) &gt; )

**설명:** 지정된 점 집합의 Delaunay 삼각 분할이 포함된 개체를 반환합니다. 선택적 Y는 중복 점에 대해 평균화되고 출력의 모든 점은 고유합니다.

**예제 1**

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );tri = Triangulation( X( :X, :Y ), Y( :POP ) );

```

**예제 2**

```jsl

tri = Triangulation( X( [0 0 1 1], [0 1 0 1] ), Y( [0 1 2 3] ) );

```

## 항목 메시지

### Get Edges

**구문:** edges = obj &lt;&lt; Get Edges

**설명:** 모서리의 인덱스를 Nx2 행렬 형식으로 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );tri = Triangulation( X( :X, :Y ), Y( :POP ) );tri << Get Edges;

```

### Get Hull Edges

**구문:** ind = obj &lt;&lt; Get Hull Edges

**설명:** 삼각 분할 경계에 있는 모서리의 인덱스를 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );tri = Triangulation( X( :X, :Y ), Y( :POP ) );tri << Get Hull Edges;

```

### Get Hull Path

**구문:** ind = obj &lt;&lt; Get Hull Path

**설명:** 삼각 분할의 경계를 경로로 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );tri = Triangulation( X( :X, :Y ), Y( :POP ) );tri << Get Hull Path;

```

### Get Hull Points

**구문:** ind = obj &lt;&lt; Get Hull Points

**설명:** 삼각 분할 경계에 있는 점의 인덱스를 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );tri = Triangulation( X( :X, :Y ), Y( :POP ) );tri << Get Hull Points;

```

### Get N Edges

**구문:** nedge = obj &lt;&lt; Get N Edges

**설명:** 삼각 분할의 모서리 수를 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );tri = Triangulation( X( :X, :Y ), Y( :POP ) );tri << Get NEdges;

```

### Get N Hull Edges

**구문:** nhull = obj &lt;&lt; Get N Hull Edges

**설명:** 삼각 분할 경계에 있는 모서리 수를 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );tri = Triangulation( X( :X, :Y ), Y( :POP ) );tri << Get N Hull Edges;

```

### Get N Hull Points

**구문:** nhull = obj &lt;&lt; Get N Hull Points

**설명:** 삼각 분할 경계에 있는 점의 수를 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );tri = Triangulation( X( :X, :Y ), Y( :POP ) );tri << Get N Hull Points;

```

### Get N Points

**구문:** npt = obj &lt;&lt; Get N Points

**설명:** 삼각 분할에 있는 고유 점의 수를 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );tri = Triangulation( X( :X, :Y ), Y( :POP ) );tri << Get N Points;

```

### Get N Triangles

**구문:** ntri = obj &lt;&lt; Get N Triangles

**설명:** 삼각형의 수를 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );tri = Triangulation( X( :X, :Y ), Y( :POP ) );tri << Get N Triangles;

```

### Get Points

**구문:** {x1,x2} = obj &lt;&lt; Get Points

**설명:** 삼각 분할에 있는 고유 점의 좌표를 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );tri = Triangulation( X( :X, :Y ), Y( :POP ) );tri << Get Points;

```

### Get Triangles

**구문:** m = obj &lt;&lt; Get Triangles

**설명:** 삼각형의 인덱스를 Nx3 행렬 형식으로 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );tri = Triangulation( X( :X, :Y ), Y( :POP ) );tri << Get Triangles;

```

### Get Y

**구문:** y = obj &lt;&lt; Get Y

**설명:** 삼각 분할에 있는 고유 점의 Y 값을 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );tri = Triangulation( X( :X, :Y ), Y( :POP ) );tri << Get Y;

```

### Peel

**구문:** tri = obj &lt;&lt; Peel

**설명:** 삼각 분할의 경계 레이어를 제거하여 새 삼각 분할을 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );tri = Triangulation( X( :X, :Y ), Y( :POP ) );Show( tri << Get N Triangles );tri2 = tri << Peel;Show( tri2 << Get N Triangles );

```

### Subset

**구문:** tri = obj &lt;&lt; Subset( {indices} )

**설명:** 지정된 점 부분집합의 결과로 생성된 삼각 분할을 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );tri = Triangulation( X( :X, :Y ), Y( :POP ) );Show( tri << Get N Triangles );tri2 = tri << Subset( tri << Get Hull Points );Show( tri2 << Get N Triangles );

```

### Transform

**구문:** obj &lt;&lt; Transform( "없음"|"정규 범위" )

**설명:** 삼각 분할 계산에 대한 변환을 설정합니다. 변환은 출력의 좌표에는 영향을 주지 않지만 변환된 공간에서 삼각 분할이 계산됩니다. 이 경우 좌표 공간과 변환된 공간의 화면비율에 따라 다른 삼각 분할이 생성될 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );tri = Triangulation( X( :X, :Y ), Y( :POP ) );tri << Transform( "Range Normalized" );

```

