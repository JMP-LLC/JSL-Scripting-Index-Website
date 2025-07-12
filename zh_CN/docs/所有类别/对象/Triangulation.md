# Triangulation



## 关联的构造器

### Triangulation

**语法:** triangulation = Triangulation( X(Column1, Column2), < Y(Column) > )

**说明:** 返回包含给定点集的 Delaunay 三角测量的对象。可选 Y 将对重复点求平均值，并且输出中的所有点都是唯一的。

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
tri = Triangulation( X( :X, :Y ), Y( :POP ) );

```

**示例 2**

```jsl

Names Default To Here( 1 );
tri = Triangulation( X( [0 0 1 1], [0 1 0 1] ), Y( [0 1 2 3] ) );

```

## 项消息

### Get Edges

**语法:** edges = obj << Get Edges

**说明:** 以 Nx2 矩阵形式返回各边索引。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
tri = Triangulation( X( :X, :Y ), Y( :POP ) );
tri << Get Edges;

```

### Get Hull Edges

**语法:** ind = obj << Get Hull Edges

**说明:** 返回三角测量边界上各边的索引。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
tri = Triangulation( X( :X, :Y ), Y( :POP ) );
tri << Get Hull Edges;

```

### Get Hull Path

**语法:** ind = obj << Get Hull Path

**说明:** 将三角测量的边界作为路径返回。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
tri = Triangulation( X( :X, :Y ), Y( :POP ) );
tri << Get Hull Path;

```

### Get Hull Points

**语法:** ind = obj << Get Hull Points

**说明:** 返回三角测量边界上各点的索引。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
tri = Triangulation( X( :X, :Y ), Y( :POP ) );
tri << Get Hull Points;

```

### Get N Edges

**语法:** nedge = obj << Get N Edges

**说明:** 返回三角测量中的边数。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
tri = Triangulation( X( :X, :Y ), Y( :POP ) );
tri << Get NEdges;

```

### Get N Hull Edges

**语法:** nhull = obj << Get N Hull Edges

**说明:** 返回三角测量边界上的边数。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
tri = Triangulation( X( :X, :Y ), Y( :POP ) );
tri << Get N Hull Edges;

```

### Get N Hull Points

**语法:** nhull = obj << Get N Hull Points

**说明:** 返回三角测量边界上的点数。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
tri = Triangulation( X( :X, :Y ), Y( :POP ) );
tri << Get N Hull Points;

```

### Get N Points

**语法:** npt = obj << Get N Points

**说明:** 返回三角测量中的唯一点数。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
tri = Triangulation( X( :X, :Y ), Y( :POP ) );
tri << Get N Points;

```

### Get N Triangles

**语法:** ntri = obj << Get N Triangles

**说明:** 返回三角数。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
tri = Triangulation( X( :X, :Y ), Y( :POP ) );
tri << Get N Triangles;

```

### Get Points

**语法:** {x1,x2} = obj << Get Points

**说明:** 返回三角测量中唯一点的坐标。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
tri = Triangulation( X( :X, :Y ), Y( :POP ) );
tri << Get Points;

```

### Get Triangles

**语法:** m = obj << Get Triangles

**说明:** 以 Nx3 矩阵形式返回三角测量的索引。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
tri = Triangulation( X( :X, :Y ), Y( :POP ) );
tri << Get Triangles;

```

### Get Y

**语法:** y = obj << Get Y

**说明:** 返回三角测量中唯一点的 Y 值。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
tri = Triangulation( X( :X, :Y ), Y( :POP ) );
tri << Get Y;

```

### Peel

**语法:** tri = obj << Peel

**说明:** 剥除三角测量的边界层，返回新的三角测量。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
tri = Triangulation( X( :X, :Y ), Y( :POP ) );
Show( tri << Get N Triangles );
tri2 = tri << Peel;
Show( tri2 << Get N Triangles );

```

### Subset

**语法:** tri = obj << Subset( {indices} )

**说明:** 返回从给定的点子集得到的三角测量。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
tri = Triangulation( X( :X, :Y ), Y( :POP ) );
Show( tri << Get N Triangles );
tri2 = tri << Subset( tri << Get Hull Points );
Show( tri2 << Get N Triangles );

```

### Transform

**语法:** obj << Transform( "无"|"标准化范围" )

**说明:** 设置三角测量计算的变换。变换不会影响输出的坐标，但三角测量将在统一尺度的空间中进行计算。这可能会根据坐标空间和变换空间的纵横比得到不同的三角测量。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
tri = Triangulation( X( :X, :Y ), Y( :POP ) );
tri << Transform( "Range Normalized" );

```

