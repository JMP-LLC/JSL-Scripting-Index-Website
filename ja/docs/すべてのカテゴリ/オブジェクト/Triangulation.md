# Triangulation



## 関連するコンストラクター

### Triangulation

**構文:** triangulation = Triangulation( X(Column1, Column2), &lt; Y(Column) &gt; )

**説明:** 与えられたデータ点に対して、Delaunayの三角分割を行い、その結果のオブジェクトを戻す。データ点の座標に重複があった場合、それらのデータ点は一つにまとめられ、オプション指定のY値には平均が使われる。

**例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
tri = Triangulation( X( :X, :Y ), Y( :POP ) );

```

**例 2**

```jsl

Names Default To Here( 1 );
tri = Triangulation( X( [0 0 1 1], [0 1 0 1] ), Y( [0 1 2 3] ) );

```

## 項目のメッセージ

### Get Edges

**構文:** edges = obj &lt;&lt; Get Edges

**説明:** 辺のインデックスをNx2の行列で戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
tri = Triangulation( X( :X, :Y ), Y( :POP ) );
tri << Get Edges;

```

### Get Hull Edges

**構文:** ind = obj &lt;&lt; Get Hull Edges

**説明:** 三角分割において、凸包を構成する辺の通し番号を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
tri = Triangulation( X( :X, :Y ), Y( :POP ) );
tri << Get Hull Edges;

```

### Get Hull Path

**構文:** ind = obj &lt;&lt; Get Hull Path

**説明:** 三角分割において、凸包の情報をパス形式で戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
tri = Triangulation( X( :X, :Y ), Y( :POP ) );
tri << Get Hull Path;

```

### Get Hull Points

**構文:** ind = obj &lt;&lt; Get Hull Points

**説明:** 三角分割の境界の点のインデックスを戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
tri = Triangulation( X( :X, :Y ), Y( :POP ) );
tri << Get Hull Points;

```

### Get N Edges

**構文:** nedge = obj &lt;&lt; Get N Edges

**説明:** 三角分割の辺の数を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
tri = Triangulation( X( :X, :Y ), Y( :POP ) );
tri << Get NEdges;

```

### Get N Hull Edges

**構文:** nhull = obj &lt;&lt; Get N Hull Edges

**説明:** 三角分割において、凸包を構成する辺の数を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
tri = Triangulation( X( :X, :Y ), Y( :POP ) );
tri << Get N Hull Edges;

```

### Get N Hull Points

**構文:** nhull = obj &lt;&lt; Get N Hull Points

**説明:** 三角分割において、凸包を構成する点の個数を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
tri = Triangulation( X( :X, :Y ), Y( :POP ) );
tri << Get N Hull Points;

```

### Get N Points

**構文:** npt = obj &lt;&lt; Get N Points

**説明:** 三角分割において、一意な点の個数を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
tri = Triangulation( X( :X, :Y ), Y( :POP ) );
tri << Get N Points;

```

### Get N Triangles

**構文:** ntri = obj &lt;&lt; Get N Triangles

**説明:** 三角形の個数を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
tri = Triangulation( X( :X, :Y ), Y( :POP ) );
tri << Get N Triangles;

```

### Get Points

**構文:** {x1,x2} = obj &lt;&lt; Get Points

**説明:** 三角分割において、一意な点の座標を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
tri = Triangulation( X( :X, :Y ), Y( :POP ) );
tri << Get Points;

```

### Get Triangles

**構文:** m = obj &lt;&lt; Get Triangles

**説明:** 三角分割において、各三角形の情報を Nx3の行列で戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
tri = Triangulation( X( :X, :Y ), Y( :POP ) );
tri << Get Triangles;

```

### Get Y

**構文:** y = obj &lt;&lt; Get Y

**説明:** 三角分割において、一意な各座標に対するY値を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
tri = Triangulation( X( :X, :Y ), Y( :POP ) );
tri << Get Y;

```

### Peel

**構文:** tri = obj &lt;&lt; Peel

**説明:** 現在の三角分割から、凸包を構成する辺 (一番外側の辺) を削除する。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
tri = Triangulation( X( :X, :Y ), Y( :POP ) );
Show( tri << Get N Triangles );
tri2 = tri << Peel;
Show( tri2 << Get N Triangles );

```

### Subset

**構文:** tri = obj &lt;&lt; Subset( {indices} )

**説明:** 指定された点の部分集合に対して、その三角分割を戻す。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
tri = Triangulation( X( :X, :Y ), Y( :POP ) );
Show( tri << Get N Triangles );
tri2 = tri << Subset( tri << Get Hull Points );
Show( tri2 << Get N Triangles );

```

### Transform

**構文:** obj &lt;&lt; Transform( "なし"|"範囲による正規化" )

**説明:** 三角分割を計算する前に適用する、尺度化の方法を設定する。このオプションによって、三角形分割が適用される空間の縦横比が変化するため、生成される三角形の構成が影響を受ける。なお、出力される座標は、変換される前の元の座標であり、影響を受けない。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
tri = Triangulation( X( :X, :Y ), Y( :POP ) );
tri << Transform( "Range Normalized" );

```

