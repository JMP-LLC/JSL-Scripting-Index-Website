# Alpha Shape



## 关联的构造器

### Alpha Shape

**语法:** ashape = Alpha Shape(Triangulation)

**说明:** 返回给定三角测量的 alpha 形状。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );

```

## 项消息

### Get Alpha

**语法:** alpha = obj << Get Alpha

**说明:** 返回当前 alpha 值。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
ashape << Get Alpha();

```

### Get Edges

**语法:** edges = obj << Get Edges

**说明:** 以 Nx2 矩阵形式返回各边索引。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
tri << Get Edges;

```

### Get Hull Edges

**语法:** ind = obj << Get Hull Edges

**说明:** 返回三角测量边界上各边的索引。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
tri << Get Hull Edges;

```

### Get Hull Path

**语法:** ind = obj << Get Hull Path

**说明:** 将三角测量的边界作为路径返回。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
tri << Get Hull Path;

```

### Get Hull Points

**语法:** ind = obj << Get Hull Points

**说明:** 返回三角测量边界上各点的索引。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
tri << Get Hull Points;

```

### Get N Edges

**语法:** nedge = obj << Get N Edges

**说明:** 返回三角测量中的边数。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
tri << Get NEdges;

```

### Get N Hull Edges

**语法:** nhull = obj << Get N Hull Edges

**说明:** 返回三角测量边界上的边数。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
tri << Get N Hull Edges;

```

### Get N Hull Points

**语法:** nhull = obj << Get N Hull Points

**说明:** 返回三角测量边界上的点数。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
tri << Get N Hull Points;

```

### Get N Points

**语法:** npt = obj << Get N Points

**说明:** 返回三角测量中的唯一点数。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
tri << Get N Points;

```

### Get N Triangles

**语法:** ntri = obj << Get N Triangles

**说明:** 返回三角数。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
tri << Get N Triangles;

```

### Get Points

**语法:** {x1,x2} = obj << Get Points

**说明:** 返回三角测量中唯一点的坐标。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
tri << Get Points;

```

### Get Tri Alpha

**语法:** [alpha1, ...] = obj << Get Tri Alpha

**说明:** 返回每个三角的 alpha 值。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
ashape << Get Tri Alpha();

```

### Get Triangles

**语法:** m = obj << Get Triangles

**说明:** 以 Nx3 矩阵形式返回三角测量的索引。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
tri << Get Triangles;

```

### Get Y

**语法:** y = obj << Get Y

**说明:** 返回三角测量中唯一点的 Y 值。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
tri << Get Y;

```

### Peel

**语法:** tri = obj << Peel

**说明:** 剥除三角测量的边界层，返回新的三角测量。

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

**语法:** obj << Set Alpha( alpha )

**说明:** 设置当前 alpha 值并重新计算三角测量。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
ashape << Set Alpha( 0.5 );

```

### Subset

**语法:** tri = obj << Subset( {indices} )

**说明:** 返回从给定的点子集得到的三角测量。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
Show( tri << Get N Triangles );
tri2 = tri << Subset( tri << Get Hull Points );
Show( tri2 << Get N Triangles );

```

