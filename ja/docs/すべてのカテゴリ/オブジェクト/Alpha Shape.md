# Alpha Shape



## 関連するコンストラクター

### Alpha Shape

**構文:** ashape = Alpha Shape(Triangulation)

**説明:** 指定された三角分割に対して、そこから計算されるアルファシェイプを戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );

```

## 項目のメッセージ

### Get Alpha

**構文:** alpha = obj << Get Alpha

**説明:** 現在のアルファ値を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
ashape << Get Alpha();

```

### Get Edges

**構文:** edges = obj << Get Edges

**説明:** 辺のインデックスをNx2の行列で戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
tri << Get Edges;

```

### Get Hull Edges

**構文:** ind = obj << Get Hull Edges

**説明:** 三角分割において、凸包を構成する辺の通し番号を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
tri << Get Hull Edges;

```

### Get Hull Path

**構文:** ind = obj << Get Hull Path

**説明:** 三角分割において、凸包の情報をパス形式で戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
tri << Get Hull Path;

```

### Get Hull Points

**構文:** ind = obj << Get Hull Points

**説明:** 三角分割の境界の点のインデックスを戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
tri << Get Hull Points;

```

### Get N Edges

**構文:** nedge = obj << Get N Edges

**説明:** 三角分割の辺の数を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
tri << Get NEdges;

```

### Get N Hull Edges

**構文:** nhull = obj << Get N Hull Edges

**説明:** 三角分割において、凸包を構成する辺の数を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
tri << Get N Hull Edges;

```

### Get N Hull Points

**構文:** nhull = obj << Get N Hull Points

**説明:** 三角分割において、凸包を構成する点の個数を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
tri << Get N Hull Points;

```

### Get N Points

**構文:** npt = obj << Get N Points

**説明:** 三角分割において、一意な点の個数を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
tri << Get N Points;

```

### Get N Triangles

**構文:** ntri = obj << Get N Triangles

**説明:** 三角形の個数を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
tri << Get N Triangles;

```

### Get Points

**構文:** {x1,x2} = obj << Get Points

**説明:** 三角分割において、一意な点の座標を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
tri << Get Points;

```

### Get Tri Alpha

**構文:** [alpha1, ...] = obj << Get Tri Alpha

**説明:** 各三角形のアルファ値を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
ashape << Get Tri Alpha();

```

### Get Triangles

**構文:** m = obj << Get Triangles

**説明:** 三角分割において、各三角形の情報を Nx3の行列で戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
tri << Get Triangles;

```

### Get Y

**構文:** y = obj << Get Y

**説明:** 三角分割において、一意な各座標に対するY値を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
tri << Get Y;

```

### Peel

**構文:** tri = obj << Peel

**説明:** 現在の三角分割から、凸包を構成する辺 (一番外側の辺) を削除する。

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

**構文:** obj << Set Alpha( alpha )

**説明:** アルファ値を設定し、その値によってアルファシェイプによる三角分割を再計算する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
ashape << Set Alpha( 0.5 );

```

### Subset

**構文:** tri = obj << Subset( {indices} )

**説明:** 指定された点の部分集合に対して、その三角分割を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = tri = Alpha Shape( triang );
Show( tri << Get N Triangles );
tri2 = tri << Subset( tri << Get Hull Points );
Show( tri2 << Get N Triangles );

```

