# Cluster



## 列

### Attribute ID

**语法:** obj = Y(...&lt;Attribute ID( column(s) )&gt;...)&lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 对于堆叠数据，这标识特性；若数据未堆叠，它将为列（变量）。

### Columns

**语法:** obj &lt;&lt; Columns( column(s) )

### Freq

**语法:** obj &lt;&lt; Freq( column )

### Label

**语法:** obj &lt;&lt; Label( column )

### Object ID

**语法:** obj = Y(...&lt;Object ID( column(s) )&gt;...)&lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 对于堆叠数据，这标识聚类的个体。否则，它用于对数据的每行进行聚合。

### Ordering

**语法:** obj &lt;&lt; Ordering( column )

### Weight

**语法:** obj &lt;&lt; Weight( column )

### Y

**语法:** obj &lt;&lt; Y( column(s) )

## Hierarchical Cluster

### 关联的构造器

#### Hierarchical Cluster

**语法:** Hierarchical Cluster( Y( columns ) )

**说明:** 基于连续或分类变量对行进行聚类。层次聚类首先将每行视为其自己的聚类，然后一次组合两个聚类，并重复下去。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster( Y( :birth, :death ), Label( :country ) );

```

### 列

#### By

**语法:** obj &lt;&lt; By( column(s) )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Hierarchical Cluster( Y( :birth, :death ), Label( :country ), By( _bycol ) );

```

### 项消息

#### Add Spatial Measures

**语法:** obj = Hierarchical Cluster(...Add Spatial Measures( state=0|1 )...)&lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 使您能够选择空间成分并为其加权，以帮助对缺陷模式进行聚类。仅当指定的数据结构为“数据被堆叠”时可用。

```jsl

Names Default To Here( 1 );
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

**语法:** obj &lt;&lt; Cluster Criterion( state=0|1 )

**说明:** 显示或隐藏针对聚类数整个范围的三次聚类准则 (CCC)。CCC 用于估计聚类数，其中较大的值表示较好的拟合度。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster( Y( :birth, :death ), Label( :country ), Cluster Criterion );

```

#### Cluster Summary

**语法:** obj &lt;&lt; Cluster Summary( state=0|1 )

**说明:** 显示或隐藏每个指定聚类数的汇总统计量。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	Cluster Summary
);

```

#### Clustering History

**语法:** obj &lt;&lt; Clustering History( state=0|1 )

**说明:** 按照连接的顺序显示或隐藏聚集历史。表包含距离并按照从最近到最远的方式排序。 默认开启。

**JMP添加的版本:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Clustering History( 0 )
);

```

#### Color Clusters

**语法:** obj &lt;&lt; Color Clusters( state=0|1 )

**说明:** 按聚类成员关系对行和系统树图标签着色。在聚类数更改时更新颜色。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Number of Clusters( 4 )
);
obj << Color Clusters( 1 );

```

#### Color Map

**语法:** obj &lt;&lt; Color Map

**说明:** 显示或隐藏系统树图旁的色图。

```jsl

Names Default To Here( 1 );
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

**语法:** obj &lt;&lt; Column Cluster Criterion( state=0|1 )

#### Column Dendrogram Position

**语法:** obj &lt;&lt; Column Dendrogram Position( "下"|"上" )

**说明:** 使用双向聚类时，移动列的系统树图的位置。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :"1-Octanol"n, :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Number of Clusters( 5 ),
	Two Way Clustering,
	Column Dendrogram Position( "Above" )
);

```

#### Column Label Position

**语法:** obj &lt;&lt; Column Label Position( "下"|"上" )

**说明:** 使用双向聚类时，在列的系统树图上移动标签的位置。

```jsl

Names Default To Here( 1 );
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

**语法:** obj &lt;&lt; Constellation Plot( state=0|1 )

**说明:** 显示或隐藏另一种在层次聚类系统树图中显示信息的方式。每个观测（行）由一个端点表示，每个聚类连接由一个新点表示。绘制的线条表示聚类成员关系。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Number of Clusters( 4 )
);
obj << Constellation Plot( 1 );

```

#### Dendrogram Scale

**语法:** obj &lt;&lt; Dendrogram Scale( "距离尺度"|"等间距"|"几何间距" )

**说明:** 指定系统树图的尺度。“等间距”使系统树图分支间的间距相等。“几何间距”使系统树图间距随着尺度在树中倍增而增加。“距离尺度”使用与距离成比例的分支间距。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Number of Clusters( 4 )
);
obj << Dendrogram Scale( Geometric Spacing );

```

#### Dendrogram Width

**语法:** obj &lt;&lt; Dendrogram Width( number=min(max(256,n*3),500) )

**说明:** 系统树图框架对于行聚类有多宽。 默认为“min(max(256,n*3),500)”。

#### Distance Graph

**语法:** obj &lt;&lt; Distance Graph( state=0|1 )

**说明:** 显示或隐藏可显示在每个聚类连接处渡过的距离的图形。 默认开启。

```jsl

Names Default To Here( 1 );
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

**语法:** obj &lt;&lt; Get Clusters

**说明:** 返回每行的聚类分配向量。

```jsl

Names Default To Here( 1 );
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

**语法:** obj &lt;&lt; Get Column Display Order

**说明:** 返回双向聚类中每列的显示位置的向量。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane, :"1-Octanol"n ),
	Twoway Clustering
);
rowOrder = obj << Get Column Display Order;

```

#### Get Column Names

**语法:** obj &lt;&lt; Get Column Names

**说明:** 双向聚类后，按聚类顺序返回列名。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster( Y( :birth, :death ), Label( :country ) );
c = obj << Get Column Names;
Show( c );

```

#### Get Display Order

**语法:** obj &lt;&lt; Get Display Order

**说明:** 返回聚类中每行的显示位置的向量，以及未显示行的缺失值。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane, :"1-Octanol"n )
);
rowOrder = obj << Get Display Order;

```

#### Get Distance Matrix

**语法:** obj &lt;&lt; Get Distance Matrix

**说明:** 返回用于层次聚类的距离矩阵。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :"1-Octanol"n, :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Number of Clusters( 8 )
);
m = obj << Get Distance Matrix;
Show( m );

```

#### Hybrid Cycles

**语法:** obj = Hierarchical Cluster(...Hybrid Cycles( number=30 )...)&lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定在切换到层次聚类例程之前执行的最小近邻连接循环数。 默认为“30”。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :"1-Octanol"n, :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Method( "Hybrid Ward" ),
	Hybrid Cycles( 20 )
);

```

#### Hybrid Goal

**语法:** obj = Hierarchical Cluster(...Hybrid Goal( number=400 )...)&lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定切换到层次聚类例程之前允许的最大聚类数。当层次聚类例程启动时，聚类数必须小于等于“混合目标”。 默认为“400”。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :"1-Octanol"n, :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Method( "Hybrid Ward" ),
	Hybrid Goal( 300 )
);

```

#### Hybrid Initial K

**语法:** obj = Hierarchical Cluster(...Hybrid Initial K( number=10 )...)&lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定近邻连接循环中使用的初始近邻数。近邻数可增加或减少，具体取决于在上一个循环中找到的唯一近邻数。 默认为“10”。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :"1-Octanol"n, :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Method( "Hybrid Ward" ),
	Hybrid Initial K( 8 )
);

```

#### Hybrid Log Details

**语法:** obj = Hierarchical Cluster(...Hybrid Log Details( state=0|1 )...)&lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定是否在日志中显示“混合 Ward”方法每个状态的状态和计时。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :"1-Octanol"n, :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Method( "Hybrid Ward" ),
	Hybrid Log Details( 1 )
);

```

#### Hybrid RandomPCA Dim

**语法:** obj = Hierarchical Cluster(...Hybrid RandomPCA Dim( number=0 )...)&lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定要在“随机 PCA”降维方法中使用的维数。当“混合随机 PCA 维”的值是大于零的任意值时使用该方法，它可进一步提高速度。 默认为“0”。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :"1-Octanol"n, :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Method( "Hybrid Ward" ),
	Hybrid RandomPCA Dim( 3 )
);

```

#### Late Join Outliers

**语法:** obj &lt;&lt; Late Join Outliers( state=0|1 )

**说明:** 显示或隐藏一个报表，其中显示在聚集过程中最晚聚类的项。

**JMP添加的版本:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Late Join Outliers( 1 )
);

```

#### Legend

**语法:** obj &lt;&lt; Legend( state=0|1 )

**说明:** 显示或隐藏系统树图右侧的色图图例。

```jsl

Names Default To Here( 1 );
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

**语法:** obj &lt;&lt; Mark Clusters( state=0|1 )

**说明:** 将标记分配给数据表中与该行所属的聚类对应的那些行。若您更改聚类数，标记会更新。若您取消选择该选项，标记不再基于聚类数更新。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Number of Clusters( 4 )
);
obj << Mark Clusters;

```

#### Method

**语法:** Method( "Average"|"Centroid"|"Ward"|"Single"|"Complete"|"Fast Ward"|"Hybrid Ward" )&lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定用于形成聚类的距离方法。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Number of Clusters( 4 ),
	Method( "Complete" )
);

```

#### Missing value imputation

**语法:** obj = Hierarchical Cluster(...Missing value imputation( state=0|1 )...)&lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 使用多元正态或多元 SVD 插补来插补缺失值。

```jsl

Names Default To Here( 1 );
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

**语法:** obj &lt;&lt; More Color Map Columns( column )

**说明:** 基于指定列添加另一色图。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Skull.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :length, :basilar, :zygomat, :postorb ),
	Color Map( "Blue to Gray to Red" ),
	More Color Map columns( :sex )
);

```

#### Number of Clusters

**语法:** obj &lt;&lt; Number of Clusters( number )

**说明:** 用于设置聚类数，您还可以在此剪切树以定义聚类组。菱形拖拽图标也可以更改聚类数。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Number of Clusters( 3 )
);

```

#### Number of Column Clusters

**语法:** obj &lt;&lt; Number of Column Clusters( number )

**说明:** 指定保存前的列聚类数。仅可用于双向聚类。

**JMP添加的版本:** 17

#### Parallel Coord Plots

**语法:** obj &lt;&lt; Parallel Coord Plots

**说明:** 为每个聚类创建一个平行坐标图，它们均包含在单独的窗口中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Physical Data.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :Type, :Weight, :Turning Circle, :Displacement, :Horsepower, :Gas Tank Size ),
	Label( :Model ),
	Number of Clusters( 3 )
);
obj << Parallel Coord Plots;

```

#### Pivot on Selected Cluster

**语法:** obj &lt;&lt; Pivot on Selected Cluster

**说明:** 反转当前选定聚类的两个子聚类的顺序。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster( Y( :birth, :death ), Label( :country ) );
dt << Select Rows( Loc( (obj << Get Clusters) == 3 ) );
Wait( 2 );
obj << Pivot on Selected Cluster;

```

#### Release Zoom

**语法:** obj &lt;&lt; Release Zoom

**说明:** 取消系统树图中对选定行的缩放。

```jsl

Names Default To Here( 1 );
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

**语法:** obj &lt;&lt; Row Dendrogram Position( "左"|"右" )

**说明:** 移动行的系统树图的位置。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :"1-Octanol"n, :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Two Way Clustering,
	Row Dendrogram Position( "Left" )
);

```

#### Row Label Position

**语法:** obj &lt;&lt; Row Label Position( "左"|"右" )

**说明:** 在行的系统树图上移动标签的位置。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :"1-Octanol"n, :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Two Way Clustering,
	Row Label Position( "Right" )
);

```

#### Row More Position

**语法:** obj &lt;&lt; Row More Position( "左"|"右" )

**说明:** 移动使用“更多色图列”命令添加的色图的位置。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Skull.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :length, :basilar, :zygomat, :postorb ),
	Color Map( "Blue to Gray to Red" ),
	More Color Map Columns( :sex ),
	Row More Position( "Right" )
);

```

#### Save Cluster Hierarchy

**语法:** obj &lt;&lt; Save Cluster Hierarchy

**说明:** 创建包含有助于重新构造系统树图的信息的数据表。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Number of Clusters( 4 )
);
obj << Save Cluster Hierarchy;

```

#### Save Cluster History

**语法:** obj &lt;&lt; Save Cluster History

**说明:** 将“聚类历史记录”报表中出现的表另存为新数据表。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	Save Cluster History
);

```

#### Save Cluster Means

**语法:** obj &lt;&lt; Save Cluster Means

**说明:** 对于给定数量的聚类，保存聚类均值表。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	Save Cluster Means
);

```

#### Save Cluster Tree

**语法:** obj &lt;&lt; Save Cluster Tree

**说明:** 创建包含聚类树的节点的数据表。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Number of Clusters( 4 )
);
obj << Save Cluster Tree;

```

#### Save Clusters

**语法:** obj &lt;&lt; Save Clusters

**说明:** 创建一个包含聚类数的数据表列。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Number of Clusters( 4 )
);
obj << Save Clusters;

```

#### Save Column Clusters

**语法:** obj &lt;&lt; Save Column Clusters

**说明:** 保存一个新数据表，它包含列的聚类成员关系信息。仅可用于双向聚类。

**JMP添加的版本:** 17

#### Save Constellation Coordinates

**语法:** obj &lt;&lt; Save Constellation Coordinates

**说明:** 将星座图的坐标保存至数据表中的新列。

```jsl

Names Default To Here( 1 );
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

**语法:** obj &lt;&lt; Save Display Order

**说明:** 创建包含行在系统树图中的显示顺序的数据表列。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Number of Clusters( 4 )
);
obj << Save Display Order;

```

#### Save Distance Matrix

**语法:** obj &lt;&lt; Save Distance Matrix

**说明:** 创建包含观测值之间的距离的数据表。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Save Distance Matrix
);

```

#### Save Formula for Closest Cluster

**语法:** obj &lt;&lt; Save Formula for Closest Cluster

**说明:** 将公式列保存至数据表，该列给出最近聚类均值的聚类数。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Number of Clusters( 4 )
);
obj << Save Formula for Closest Cluster;

```

#### Scatterplot Matrix

**语法:** obj &lt;&lt; Scatterplot Matrix

**说明:** 基于当前聚类数使用置信椭圆在新窗口中创建散点图矩阵。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	Scatterplot Matrix
);

```

#### Set Random Seed

**语法:** obj &lt;&lt; Set Random Seed( number )

**说明:** 指定一个随机种子，以便将来启动该平台时重现结果。

#### Show Dendrogram

**语法:** obj &lt;&lt; Show Dendrogram( state=0|1 )

**说明:** 若您仅想查看色图，则允许您关闭系统树图。 默认开启。

```jsl

Names Default To Here( 1 );
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

**语法:** obj &lt;&lt; Show NCluster Handle( state=0|1 )

**说明:** 显示或隐藏用于选择系统树图上聚类数的菱形控点。 默认开启。

```jsl

Names Default To Here( 1 );
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

**语法:** obj &lt;&lt; Standardize( "未标准化"|"列"|"行"|"列和行" )

**说明:** “标准化依据”的别名，指定聚类之前如何标准化值。

#### Standardize By

**语法:** obj = Hierarchical Cluster(...Standardize By( "未标准化"|"列"|"行"|"列和行" )...)&lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定聚类之前如何标准化值。您可以按列、行、列和行或完全不标准化。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :"1-Octanol"n, :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Standardize( "Unstandardized" ),
	Two Way Clustering,
	Row Label Position( "Right" )
);

```

#### Standardize Data

**语法:** obj &lt;&lt; Standardize Data( state=0|1 )

**说明:** 旧选项名称，仍受支持，但替换为“标准化依据”。

#### Standardize Robustly

**语法:** obj = Hierarchical Cluster(...Standardize Robustly( state=0|1 )...)&lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 使用	均值和标准差的稳健估计值以标准化数据。

#### Two Way Clustering

**语法:** obj = Hierarchical Cluster(...Two Way Clustering...)&lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 将列和行聚类。必须以相同的尺度测量列。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :"1-Octanol"n, :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Number of Clusters( 8 )
);
Wait( .1 );
obj << Two Way Clustering;

```

#### Use Saved Cluster Table

**语法:** obj = Hierarchical Cluster(...Use Saved Cluster Table( state=0|1 )...)&lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 使用单独的聚类历史记录表以指定聚类。

#### Zoom to Selected Rows

**语法:** obj &lt;&lt; Zoom to Selected Rows

**说明:** 将系统树图放大至选定的行。

```jsl

Names Default To Here( 1 );
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

### 关联的构造器

#### KDTable

**语法:** tbl = KDTable( [ point1, point2, point3, point4, point5, ... ] )

**说明:** 返回一个用于有效查找近邻的表。矩阵参数为 k 维点。该函数本身未对维数和点数进行限制。

```jsl

Names Default To Here( 1 );
tbl = KDTable( [1 1 1, 1 2 1, 1 2 2, 2 2 2, 3 3 3, 4 5 6] );
{rows, dist} = tbl << K nearest rows( 2, 1 ); 
//2 nearest rows to row 1 are: 
Show( rows );

```

### 项消息

#### Distance between rows

**语法:** distance = KDTable &lt;&lt; Distance between rows( row1, row2 )

**说明:** 返回两行之间的距离。该距离对于删除和插入的行都适用。

```jsl

Names Default To Here( 1 );
tbl = KDTable( [1 1, 2 2, 1 2, 2 1, 4 4] );
distance = tbl << Distance between rows( 1, 2 ); 
//distance from row 1 to row 2 is: 
Show( distance );

```

#### Insert rows

**语法:** n = KDTable &lt;&lt; Insert rows( number|[ vector ] )

**说明:** 允许您将行重新插入到表搜索中。插入或删除行时不改变行索引，且仅原始行可删除后（重新）插入。返回插入的行数。若某行已经插入，则将其忽略。

```jsl

Names Default To Here( 1 );
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

**语法:** {rows, dist} = KDTable &lt;&lt; K nearest rows( stop, &lt;position&gt; )

**说明:** 返回某点或某行（若指定了位置）或者是全部行（若未指定位置）的 n 个最近的行和距离，当超出距离限制时停止搜索。“停止”值可以为 n 或 {n,limit}。位置是可选项，为一个点，以 1xK 矩阵（其中 K 为维数）或行编号表示。若未指定位置，则将以矩阵（大小为“行数 x n”）形式返回离各行最近的 n 行。

```jsl

Names Default To Here( 1 );
tbl = KDTable( [1 1 1, 1 2 1, 1 2 2, 2 2 2, 3 3 3, 4 5 6] );
{rows, dist} = tbl << K nearest rows( {3, 2.0} ); 
//3 nearest rows to each row are: 
Show( rows );

```

#### Remove rows

**语法:** n = KDTable &lt;&lt; Remove rows( number|[ vector ] )

**说明:** 从表搜索中删除行。插入或删除行时不改变行索引，且仅原始行可删除后（重新）插入。已删除行的索引仍可用作 K 个最近行的起始点。返回已删除的行数。若某行已被删除，则将其忽略。

```jsl

Names Default To Here( 1 );
tbl = KDTable( [1 1, 2 2, 1 2, 2 1, 4 4] );  
//  remove 2 rows
tbl << RemoveRows( [2 1] ); 
//  re-insert 1 row 
tbl << Insert rows( 2 );
{rows, dist} = tbl << K nearest rows( 2, [1.5 1.5] ); 
//2 nearest rows to point at [1.5 1.5], ignoring row 1, are: 
Show( rows );

```

