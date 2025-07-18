# Cluster



## 列

### Attribute ID

**構文:** obj = Y(...&lt;Attribute ID( column(s) )&gt;...)

**説明:** 積み重ねたデータの場合に、属性を含んでいる列を指定する。これは通常の矩形データにおける列(変数)に相当するもの。

### Columns

**構文:** obj &lt;&lt; Columns( column(s) )

### Freq

**構文:** obj &lt;&lt; Freq( column )

### Label

**構文:** obj &lt;&lt; Label( column )

### Object ID

**構文:** obj = Y(...&lt;Object ID( column(s) )&gt;...)

**説明:** 積み重ねたデータの場合に、個々の対象を識別する列を指定する。それ以外の場合には、データ行の集計に使用する。

### Ordering

**構文:** obj &lt;&lt; Ordering( column )

### Weight

**構文:** obj &lt;&lt; Weight( column )

### Y

**構文:** obj &lt;&lt; Y( column(s) )

## Hierarchical Cluster

### 列

#### By

**構文:** obj &lt;&lt; By( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Hierarchical Cluster( Y( :birth, :death ), Label( :country ), By( _bycol ) );

```

### 関連するコンストラクター

#### Hierarchical Cluster

**構文:** Hierarchical Cluster( Y( columns ) )

**説明:** 連続量またはカテゴリカルな変数に基づいて行をクラスタリングする。階層クラスタリングは、まず各行を独自のクラスターとして扱い、一度に2つずつクラスターを組み合わせていく。

```jsl

dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster( Y( :birth, :death ), Label( :country ) );

```

### 項目のメッセージ

#### Add Spatial Measures

**構文:** obj = Hierarchical Cluster(...Add Spatial Measures( state=0|1 )...)

**説明:** クラスター分析に使いたい空間的な指標を指定し、また、それらの各指標に重みを与える。データの形式に[積み重ねたデータ]が指定されている場合のみ使用可能。この機能は、X-Y座標上に不適合個所が記録されたデータをクラスタリングしたい時に有用である。

```jsl

dt = Open( "$SAMPLE_DATA/Wafer Stacked.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :Defects ),
	Object ID( :Lot, :Wafer ),
	Attribute ID( :X_Die, :Y_Die ),
	Method( "Ward" ),
	Standardize Data( 0 ),
	Dendrogram Scale( "Distance Scale" ),
	Number of Clusters( 12 ),
	g
    Add Spatial Measures(
		Attributes( 1 ),
		Angle( 1 ),
		Radius( 1 ),
		Streak Angle( 1 ),
		Streak Distance( 1 )
	)
);

```

#### Cluster Criterion

**構文:** obj &lt;&lt; Cluster Criterion( state=0|1 )

**説明:** 複数のクラスター数に対して、立方体クラスター規準(CCC)を求める。CCCは、クラスター数の選択に使われる指標である。CCCが大きいほど、データへの適合度が良いことを示している。

```jsl

dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster( Y( :birth, :death ), Label( :country ), Cluster Criterion );

```

#### Cluster Summary

**構文:** obj &lt;&lt; Cluster Summary( state=0|1 )

**説明:** 指定された個数のクラスターに関して、各クラスターの要約統計量の表示/非表示を切り替える。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	Cluster Summary
);

```

#### Clustering History

**構文:** obj &lt;&lt; Clustering History( state=0|1 )

**説明:** 「クラスター分析の履歴」レポートの表示/非表示を切り替えます。この表には、距離が短く、先に結合していったクラスターから順に、結合した時の距離が示されています。 デフォルトではオン。

**JMP追加されたバージョン:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Clustering History( 0 )
);

```

#### Color Clusters

**構文:** obj &lt;&lt; Color Clusters( state=0|1 )

**説明:** データ行や樹形図のラベルを、属するクラスターで色分けする。クラスターの数を変更した場合、それに合わせて色も更新される。

```jsl

dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Number of Clusters( 4 )
);
obj << Color Clusters( 1 );

```

#### Color Map

**構文:** obj &lt;&lt; Color Map

**説明:** 樹形図の横に表示されるカラーマップの表示/非表示を切り替える。

```jsl

dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Number of Clusters( 4 )
);
obj << Color Map( Green to Black to Red );
Wait( 1 );
obj << Color Map( Blue to Gray to Red );

```

#### Column Cluster Criterion

**構文:** obj &lt;&lt; Column Cluster Criterion( state=0|1 )

#### Column Dendrogram Position

**構文:** obj &lt;&lt; Column Dendrogram Position( "下"|"上" )

**説明:** 変数間クラスターを行った時に、樹形図の表示位置を変更する。

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :"1-Octanol"n, :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Number of Clusters( 5 ),
	Two Way Clustering,
	Column Dendrogram Position( "Above" )
);

```

#### Column Label Position

**構文:** obj &lt;&lt; Column Label Position( "下"|"上" )

**説明:** 変数間クラスターを行った時に、樹形図におけるラベルの表示位置を変更する。

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :"1-Octanol"n, :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Number of Clusters( 5 ),
	Two Way Clustering,
	Distance Graph( 0 ),
	Column Label Position( "Above" )
);

```

#### Constellation Plot

**構文:** obj &lt;&lt; Constellation Plot( state=0|1 )

**説明:** 階層型クラスター分析の樹形図を、別の形式で表示する。各データ行(各オブザベーション)が端点、クラスターの各結合が点として描かれる。線分は、属するクラスターを示す。

```jsl

dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Number of Clusters( 4 )
);
obj << Constellation Plot( 1 );

```

#### Dendrogram Scale

**構文:** obj &lt;&lt; Dendrogram Scale( "距離スケール"|"等間隔"|"幾何級数" )

**説明:** 樹形図のスケールを指定する。[等間隔]は樹形図の枝を等間隔に配置する。[幾何級数]は樹形図の根から葉の方向へ徐々に枝の間隔を広くする。[距離スケール]は樹形図の枝を距離に比例した間隔で配置する。

```jsl

dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Number of Clusters( 4 )
);
obj << Dendrogram Scale( Geometric Spacing );

```

#### Dendrogram Width

**構文:** obj &lt;&lt; Dendrogram Width( number=min(max(256,n*3),500) )

**説明:** 行クラスターの樹形図におけるフレームの幅。 デフォルトの値は"min(max(256,n*3),500)"。

#### Distance Graph

**構文:** obj &lt;&lt; Distance Graph( state=0|1 )

**説明:** クラスターの各結合に対して、その結合されたクラスター間の距離をプロットしたグラフの表示/非表示を切り替える。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Number of Clusters( 4 ),
	Distance Graph( 0 )
);
Wait( 1 );
obj << Distance Graph( 1 );

```

#### Get Clusters

**構文:** obj &lt;&lt; Get Clusters

**説明:** データの各行が属するクラスターの名前（クラスターの番号）を含んだベクトルを戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Number of Clusters( 3 )
);
c = obj << Get Clusters;
Show( c );

```

#### Get Column Display Order

**構文:** obj &lt;&lt; Get Column Display Order

**説明:** 変数間クラスターでの表示順序をベクトルで戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane, :"1-Octanol"n ),
	Twoway Clustering
);
rowOrder = obj << Get Column Display Order;

```

#### Get Column Names

**構文:** obj &lt;&lt; Get Column Names

**説明:** 変数間クラスターでの表示順序に並べた列名を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster( Y( :birth, :death ), Label( :country ) );
c = obj << Get Column Names;
Show( c );

```

#### Get Display Order

**構文:** obj &lt;&lt; Get Display Order

**説明:** データの各行が表示される順序を含んだベクトルを戻す。表示されない行に対しては欠測値とする。

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane, :"1-Octanol"n )
);
rowOrder = obj << Get Display Order;

```

#### Get Distance Matrix

**構文:** obj &lt;&lt; Get Distance Matrix

**説明:** 階層型クラスターに使用された距離行列を戻す。

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :"1-Octanol"n, :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Number of Clusters( 8 )
);
m = obj << Get Distance Matrix;
Show( m );

```

#### Hybrid Cycles

**構文:** obj = Hierarchical Cluster(...Hybrid Cycles( number=30 )...)

**説明:** 折衷型Ward法において、簡便なクラスタリング(近傍結合)のサイクルに対する最小回数を指定する。なお、折衷型Ward法では、簡便なクラスタリング階層型クラスター分析に切り替わる。 デフォルトの値は"30"。

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :"1-Octanol"n, :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Method( "Hybrid Ward" ),
	Hybrid Cycles( 20 )
);

```

#### Hybrid Goal

**構文:** obj = Hierarchical Cluster(...Hybrid Goal( number=400 )...)

**説明:** 折衷型Ward法において、階層型クラスター分析に切り替えるときのクラスター個数の閾値を指定する。簡便なクラスタリング(近傍結合)でのクラスター個数がここで指定した個数以下となると、階層型クラスター分析に切り替わる。つまり、階層型クラスター分析が開始される前には、クラスター個数がここで指定した値以下となっている。 デフォルトの値は"400"。

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :"1-Octanol"n, :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Method( "Hybrid Ward" ),
	Hybrid Goal( 300 )
);

```

#### Hybrid Initial K

**構文:** obj = Hierarchical Cluster(...Hybrid Initial K( number=10 )...)

**説明:** 折衷型Ward法における簡便なクラスタリング(近傍結合)のサイクルで、求める近傍点の個数を指定する。ただし、これは初期値であり、求められる近傍点の個数は、前のサイクルで検出された一意な近傍点の個数により増減する。 デフォルトの値は"10"。

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :"1-Octanol"n, :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Method( "Hybrid Ward" ),
	Hybrid Initial K( 8 )
);

```

#### Hybrid Log Details

**構文:** obj = Hierarchical Cluster(...Hybrid Log Details( state=0|1 )...)

**説明:** 折衷型Ward法が行った処理についての詳細をログに表示するかどうかを指定する。

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :"1-Octanol"n, :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Method( "Hybrid Ward" ),
	Hybrid Log Details( 1 )
);

```

#### Hybrid RandomPCA Dim

**構文:** obj = Hierarchical Cluster(...Hybrid RandomPCA Dim( number=0 )...)

**説明:** 折衷型Ward法において次元削減のために用いる乱択主成分分析の次元数を指定する。乱択主成分分析は、このオプションの値が0より大きい場合に使用される。一般に、乱択主成分分析で次元を削減することで、折衷型Ward法の処理速度はさらに向上する。 デフォルトの値は"0"。

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :"1-Octanol"n, :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Method( "Hybrid Ward" ),
	Hybrid RandomPCA Dim( 3 )
);

```

#### Late Join Outliers

**構文:** obj &lt;&lt; Late Join Outliers( state=0|1 )

**説明:** 階層的クラスター分析においてどの行もしくは列が凝集の非常に最後のステップで結合されたかに関するレポートの表示/非表示を切り替える。

**JMP追加されたバージョン:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Birth Death.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Late Join Outliers( 1 )
);

```

#### Legend

**構文:** obj &lt;&lt; Legend( state=0|1 )

**説明:** 樹形図の横に表示されるカラーマップに対する凡例の表示/非表示を切り替える。

```jsl

dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Number of Clusters( 4 ),
	Color Map( Blue to Gray to Red )
);
obj << Legend( 1 );

```

#### Mark Clusters

**構文:** obj &lt;&lt; Mark Clusters( state=0|1 )

**説明:** データテーブルの行に、その行が属するクラスターに対応したマーカーを割り当てる。クラスターの個数を変更するとマーカーも更新される。このオプションの選択を解除すると、クラスターの個数を変更してもマーカーが更新されなくなる。

```jsl

dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Number of Clusters( 4 )
);
obj << Mark Clusters;

```

#### Method

**構文:** Method( "Average"|"Centroid"|"Ward"|"Single"|"Complete"|"Fast Ward"|"Hybrid Ward" )

**説明:** クラスター間距離の計算方法を指定する。指定された計算方法が、クラスタリングの結合時に使われる。

```jsl

dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Number of Clusters( 4 ),
	Method( "Complete" )
);

```

#### Missing value imputation

**構文:** obj = Hierarchical Cluster(...Missing value imputation( state=0|1 )...)

**説明:** 多変量正規分布に基づく補完、または、特異値分解に基づく補完によって、欠測値を補完する。

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :OZONE, :CO, :SO2, :NO, :PM10, :Lead ),
	Method( "Ward" ),
	Standardize Data( 1 ),
	Missing value imputation( 1 ),
	Dendrogram Scale( "Distance Scale" ),
	Number of Clusters( 6 )
);

```

#### More Color Map Columns

**構文:** obj &lt;&lt; More Color Map Columns( column )

**説明:** 指定された列をカラーマップに追加する。

```jsl

dt = Open( "$SAMPLE_DATA/Skull.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :length, :basilar, :zygomat, :postorb ),
	Color Map( "Blue to Gray to Red" ),
	More Color Map columns( :sex )
);

```

#### Number of Clusters

**構文:** obj &lt;&lt; Number of Clusters( number )

**説明:** クラスター数を設定する。設定されたクラスター数の箇所で、樹形図が切られる。樹形図におけるひし形のアイコンをドラッグすることによっても、クラスター数は設定できる。

```jsl

dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Number of Clusters( 3 )
);

```

#### Number of Column Clusters

**構文:** obj &lt;&lt; Number of Column Clusters( number )

**説明:** データテーブルに保存する列クラスターの数を指定する。変数間クラスター分析(行および列の両方に対するクラスタリング)を行った場合のみ使用可能。

**JMP追加されたバージョン:** 17

#### Parallel Coord Plots

**構文:** obj &lt;&lt; Parallel Coord Plots

**説明:** 各クラスターのパラレルプロットを作成し、別のウィンドウにまとめて表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Car Physical Data.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :Type, :Weight, :Turning Circle, :Displacement, :Horsepower, :Gas Tank Size ),
	Label( :Model ),
	Number of Clusters( 3 )
);
obj << Parallel Coord Plots;

```

#### Pivot on Selected Cluster

**構文:** obj &lt;&lt; Pivot on Selected Cluster

**説明:** 現在選択されているクラスターの2つの下位クラスターの表示順序を入れ替える。

```jsl

dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster( Y( :birth, :death ), Label( :country ) );
dt << Select Rows( Loc( (obj << Get Clusters) == 3 ) );
Wait( 2 );
obj << Pivot on Selected Cluster;

```

#### Release Zoom

**構文:** obj &lt;&lt; Release Zoom

**説明:** 選択した行を中心とした樹形図のズームを解除する。

```jsl

dt = Open( "$SAMPLE_DATA/Car Physical Data.jmp" );
dt << Select Rows( [19, 22, 45, 61, 62, 64] );
obj = dt << Hierarchical Cluster(
	Y( :Type, :Weight, :Turning Circle, :Displacement, :Horsepower, :Gas Tank Size ),
	Label( :Model )
);
obj << Zoom to Selected Rows;
Wait( 2 );
obj << Release Zoom;

```

#### Row Dendrogram Position

**構文:** obj &lt;&lt; Row Dendrogram Position( "左"|"右" )

**説明:** 行に対する樹形図の位置を変える。

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :"1-Octanol"n, :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Two Way Clustering,
	Row Dendrogram Position( "Left" )
);

```

#### Row Label Position

**構文:** obj &lt;&lt; Row Label Position( "左"|"右" )

**説明:** 行に対する樹形図のラベルの位置を変える。

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :"1-Octanol"n, :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Two Way Clustering,
	Row Label Position( "Right" )
);

```

#### Row More Position

**構文:** obj &lt;&lt; Row More Position( "左"|"右" )

**説明:** [More Color Map Columns](カラーマップに列の追加)コマンドで追加されたカラーマップの位置を変える。

```jsl

dt = Open( "$SAMPLE_DATA/Skull.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :length, :basilar, :zygomat, :postorb ),
	Color Map( "Blue to Gray to Red" ),
	More Color Map Columns( :sex ),
	Row More Position( "Right" )
);

```

#### Save Cluster Hierarchy

**構文:** obj &lt;&lt; Save Cluster Hierarchy

**説明:** 樹形図を再構築するのに役立つ情報を、新しいデータテーブルにまとめる。

```jsl

dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Number of Clusters( 4 )
);
obj << Save Cluster Hierarchy;

```

#### Save Cluster History

**構文:** obj &lt;&lt; Save Cluster History

**説明:** 「クラスター分析の履歴」レポートに表示される表を新しいデータテーブルに保存する。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	Save Cluster History
);

```

#### Save Cluster Means

**構文:** obj &lt;&lt; Save Cluster Means

**説明:** 指定された個数のクラスターに関して、各クラスターの平均をデータテーブルに保存する。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	Save Cluster Means
);

```

#### Save Cluster Tree

**構文:** obj &lt;&lt; Save Cluster Tree

**説明:** 樹形図のツリーにおける各ノードの情報を新しいデータテーブルにまとめる。

```jsl

dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Number of Clusters( 4 )
);
obj << Save Cluster Tree;

```

#### Save Clusters

**構文:** obj &lt;&lt; Save Clusters

**説明:** データテーブルに、クラスターの名前(クラスターの番号)を含んだ列を保存する。

```jsl

dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Number of Clusters( 4 )
);
obj << Save Clusters;

```

#### Save Column Clusters

**構文:** obj &lt;&lt; Save Column Clusters

**説明:** データテーブルに列クラスターの情報を保存する。変数間クラスター分析(行および列の両方に対するクラスタリング)を行った場合のみ使用可能。

**JMP追加されたバージョン:** 17

#### Save Constellation Coordinates

**構文:** obj &lt;&lt; Save Constellation Coordinates

**説明:** データテーブルに、星座樹形図の座標を含んだ列を保存する。

```jsl

dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Number of Clusters( 4 )
);
obj << Constellation Plot( 1 );
obj << Save Constellation Coordinates( 1 );

```

#### Save Display Order

**構文:** obj &lt;&lt; Save Display Order

**説明:** データテーブルに、行がどの順序で樹形図に現れるかを示す列を作成する。

```jsl

dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Number of Clusters( 4 )
);
obj << Save Display Order;

```

#### Save Distance Matrix

**構文:** obj &lt;&lt; Save Distance Matrix

**説明:** データ行の間の距離を新しいデータテーブルにまとめる。

```jsl

dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Save Distance Matrix
);

```

#### Save Formula for Closest Cluster

**構文:** obj &lt;&lt; Save Formula for Closest Cluster

**説明:** データテーブルに、最も近いクラスター平均のクラスターの名前(クラスターの番号)を求める計算式の列を保存する。

```jsl

dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Number of Clusters( 4 )
);
obj << Save Formula for Closest Cluster;

```

#### Scatterplot Matrix

**構文:** obj &lt;&lt; Scatterplot Matrix

**説明:** 新しいウィンドウに散布図行列を作成し、現在のクラスター数に基づく信頼限界楕円を表示する。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	Scatterplot Matrix
);

```

#### Set Random Seed

**構文:** obj &lt;&lt; Set Random Seed( number )

**説明:** 乱数シード値を指定する。乱数シード値を指定することにより、今後プラットフォームを起動したときに同じ結果を再現できる。

#### Show Dendrogram

**構文:** obj &lt;&lt; Show Dendrogram( state=0|1 )

**説明:** 樹形図をオフにする。このオプションにより、樹形図をオフにして、カラーマップだけを表示できる。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Number of Clusters( 3 ),
	Distance Graph( 0 ),
	Color Map( Green to Black to Red ),
	Color Clusters( 1 ),
	Show Dendrogram( 0 )
);

```

#### Show NCluster Handle

**構文:** obj &lt;&lt; Show NCluster Handle( state=0|1 )

**説明:** ひし形ハンドルの表示/非表示を切り替える。このハンドルを動かすことで、樹形図においてクラスター数を変更できる。 デフォルトではオン。

```jsl

dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Number of Clusters( 4 ),
	Color Clusters( 1 ),
	Show NCluster Handle( 0 )
);

```

#### Standardize

**構文:** obj &lt;&lt; Standardize( "非標準化"|"列"|"行"|"列と行の両方" )

**説明:** 「標準化の対象」の別名。クラスター分析の前にデータを標準化する方向を指定する。

#### Standardize By

**構文:** obj = Hierarchical Cluster(...Standardize By( "非標準化"|"列"|"行"|"列と行の両方" )...)

**説明:** クラスター分析の前にデータを標準化する方法を指定する。列の標準化、行の標準化、列と行での標準化が行える。また、標準化しないことも可能。

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :"1-Octanol"n, :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Standardize( "Unstandardized" ),
	Two Way Clustering,
	Row Label Position( "Right" )
);

```

#### Standardize Data

**構文:** obj &lt;&lt; Standardize Data( state=0|1 )

**説明:** 古いオプション名はサポートされるが、「標準化の対象」（Standardize By）オプションに置き換えられる。

#### Standardize Robustly

**構文:** obj = Hierarchical Cluster(...Standardize Robustly( state=0|1 )...)

**説明:** 平均と標準偏差によってデータを標準化する。

#### Two Way Clustering

**構文:** obj = Hierarchical Cluster(...Two Way Clustering...)

**説明:** 行と同様に、列もクラスタリングする。列は同じ単位で測定されていなければならない。

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :"1-Octanol"n, :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Number of Clusters( 8 )
);
Wait( .1 );
obj << Two Way Clustering;

```

#### Use Saved Cluster Table

**構文:** obj = Hierarchical Cluster(...Use Saved Cluster Table( state=0|1 )...)

**説明:** クラスター分析を指定するために、クラスター履歴のデータテーブルを使用する。

#### Zoom to Selected Rows

**構文:** obj &lt;&lt; Zoom to Selected Rows

**説明:** 選択した行を中心に樹形図をズームする。

```jsl

dt = Open( "$SAMPLE_DATA/Car Physical Data.jmp" );
dt << Select Rows( [19, 22, 45, 61, 62, 64] );
obj = dt << Hierarchical Cluster(
	Y( :Type, :Weight, :Turning Circle, :Displacement, :Horsepower, :Gas Tank Size ),
	Label( :Model )
);
Wait( 2 );
obj << Zoom to Selected Rows;

```

## KDTable

### 関連するコンストラクター

#### KDTable

**構文:** tbl = KDTable( [ point1, point2, point3, point4, point5, ... ] )

**説明:** 近傍点を効率よく探索するためのテーブルを戻す。行列の引数はk次元の点。データの個数や次元に制限はない。

```jsl

tbl = KDTable( [1 1 1, 1 2 1, 1 2 2, 2 2 2, 3 3 3, 4 5 6] );
{rows, dist} = tbl << K nearest rows( 2, 1 ); 
//2 nearest rows to row 1 are: 
Show( rows );

```

### 項目のメッセージ

#### Distance between rows

**構文:** distance = KDTable &lt;&lt; Distance between rows( row1, row2 )

**説明:** 2つの行の間の距離を戻す。距離は、削除された行や挿入された行に対しても計算される。

```jsl

tbl = KDTable( [1 1, 2 2, 1 2, 2 1, 4 4] );
distance = tbl << Distance between rows( 1, 2 ); 
//distance from row 1 to row 2 is: 
Show( distance );

```

#### Insert rows

**構文:** n = KDTable &lt;&lt; Insert rows( number|[ vector ] )

**説明:** 近傍点の検索に使われるように、一度削除された行を再度追加する。行に対する通し番号は、行を削除や追加しても変更されない。戻り値は、追加した行数。もし、行が既に追加されていたならば、追加したままにしておく。

```jsl

tbl = KDTable( [1 1, 2 2, 1 2, 2 1, 4 4] ); 
//  remove 3 rows 
tbl << Remove Rows( [2 1 3] ); 
//  re-insert 1 row 
tbl << InsertRows( 2 ); 
// re-insert 2 rows, ignoring row 2 
tbl << InsertRows( [3 2] );
{rows, dist} = tbl << K nearest rows( 2, 4 ); 
//2 nearest rows to row 4, ignoring row 1, are:
Show( rows );

```

#### K nearest rows

**構文:** {rows, dist} = KDTable &lt;&lt; K nearest rows( stop, &lt;position&gt; )

**説明:** 近い方からn番目までに位置する行および距離を戻す。positionが指定されている場合、その座標または行に近い点が戻される。positionが省略されている場合、すべての行に対する結果が戻される。指定された距離内でなければn個の点を見つける前に検索が中止される。stopには、nまたは{n,limit}を指定できる。オプションのpositionには、(1xK)行列(kは次数)または行番号を指定できる。positionを指定しなければ、各行に対して近い方からn個の行が(行x n)行列で戻される。

```jsl

tbl = KDTable( [1 1 1, 1 2 1, 1 2 2, 2 2 2, 3 3 3, 4 5 6] );
{rows, dist} = tbl << K nearest rows( {3, 2.0} ); 
//3 nearest rows to each row are: 
Show( rows );

```

#### Remove rows

**構文:** n = KDTable &lt;&lt; Remove rows( number|[ vector ] )

**説明:** 近傍点の検索に使われないように、指定された行を削除する。行に対する通し番号は、行を削除しても変更されない。近傍点を探すための基準点には、削除した点も指定することができる。削除した行数が戻される。もし、行が既に削除されていたならば、削除したままにしておく。

```jsl

tbl = KDTable( [1 1, 2 2, 1 2, 2 1, 4 4] );  
//  remove 2 rows
tbl << RemoveRows( [2 1] ); 
//  re-insert 1 row 
tbl << Insert rows( 2 );
{rows, dist} = tbl << K nearest rows( 2, [1.5 1.5] ); 
//2 nearest rows to point at [1.5 1.5], ignoring row 1, are: 
Show( rows );

```

