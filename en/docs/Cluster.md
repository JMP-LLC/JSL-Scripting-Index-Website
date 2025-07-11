# Cluster



## Hierarchical Cluster

### Add Spatial Measures

**Syntax:** obj = Hierarchical Cluster(...Add Spatial Measures( state=0|1 )...)

**Description:** Enables you to select and weight spatial components to aid in clustering defect patterns. Available only if the specified data structure is Data is stacked.

```js

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

### By

**Syntax:** obj << By( column(s) )

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Hierarchical Cluster( Y( :birth, :death ), Label( :country ), By( _bycol ) );

```

### Cluster Criterion

**Syntax:** obj << Cluster Criterion( state=0|1 )

**Description:** Shows or hides the Cubic Clustering Criterion (CCC) for the entire range of number of clusters. The CCC is used to estimate the number of clusters, where larger values indicate a better fit.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Cluster Criterion
);

```

### Cluster Summary

**Syntax:** obj << Cluster Summary( state=0|1 )

**Description:** Shows or hides summary statistics for each of the specified number of clusters.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	Cluster Summary
);

```

### Clustering History

**Syntax:** obj << Clustering History( state=0|1 )

**Description:** Shows or hides the agglomeration history in order of joins. The table contains distances and is sorted from nearest to farthest. On by default.

**JMP Version Added:** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Clustering History( 0 )
);

```

### Color Clusters

**Syntax:** obj << Color Clusters( state=0|1 )

**Description:** Colors the rows and the dendrogram labels by cluster membership. The colors are updated as the number of clusters is changed.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Number of Clusters( 4 )
);
obj << Color Clusters( 1 );

```

### Color Map

**Syntax:** obj << Color Map

**Description:** Shows or hides a color map next to the dendrogram.

```js

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

### Column Cluster Criterion

**Syntax:** obj << Column Cluster Criterion( state=0|1 )

### Column Dendrogram Position

**Syntax:** obj << Column Dendrogram Position( "Below"|"Above" )

**Description:** Moves the position of the dendrogram for columns when two-way clustering is used.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :"1-Octanol"n, :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Number of Clusters( 5 ),
	Two Way Clustering,
	Column Dendrogram Position( "Above" )
);

```

### Column Label Position

**Syntax:** obj << Column Label Position( "Below"|"Above" )

**Description:** Moves the position of the labels on the dendrogram for columns when two-way clustering is used.

```js

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

### Constellation Plot

**Syntax:** obj << Constellation Plot( state=0|1 )

**Description:** Shows or hides an alternative way to present the information in the hierarchical clustering dendrogram. Each observation (row) is represented by an endpoint and each cluster join is represented by a new point. The lines that are drawn represent cluster membership.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Number of Clusters( 4 )
);
obj << Constellation Plot( 1 );

```

### Dendrogram Scale

**Syntax:** obj << Dendrogram Scale( "Distance Scale"|"Even Spacing"|"Geometric Spacing" )

**Description:** Specifies the scale for the dendrogram. Even Spacing makes the spacing even across dendrogram branches. Geometric Spacing increases the spacing as a scale multiple up the tree in the dendrogram. Distance Scale uses branch spacing proportional to distances.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Number of Clusters( 4 )
);
obj << Dendrogram Scale( Geometric Spacing );

```

### Dendrogram Width

**Syntax:** obj << Dendrogram Width( number=min(max(256,n*3),500) )

**Description:** How wide the dendrogram frame is for the clustering of rows. "min(max(256,n*3),500)" by default.

### Distance Graph

**Syntax:** obj << Distance Graph( state=0|1 )

**Description:** Shows or hides a graph that shows the distance overcome at each cluster join. On by default.

```js

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

### Get Clusters

**Syntax:** obj << Get Clusters

**Description:** Returns a vector of cluster assignments for each row.

```js

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

### Get Column Display Order

**Syntax:** obj << Get Column Display Order

**Description:** Returns a vector of the display position for each column in two-way clustering.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane, :"1-Octanol"n ),
	Twoway Clustering
);
rowOrder = obj << Get Column Display Order;

```

### Get Column Names

**Syntax:** obj << Get Column Names

**Description:** Returns the column names in cluster order after two-way clustering.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster( Y( :birth, :death ), Label( :country ) );
c = obj << Get Column Names;
Show( c );

```

### Get Display Order

**Syntax:** obj << Get Display Order

**Description:** Returns a vector of the display position for each row in the cluster, with missing values for undisplayed rows.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane, :"1-Octanol"n )
);
rowOrder = obj << Get Display Order;

```

### Get Distance Matrix

**Syntax:** obj << Get Distance Matrix

**Description:** Returns the distance matrix used for hierarchical clustering.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :"1-Octanol"n, :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Number of Clusters( 8 )
);
m = obj << Get Distance Matrix;
Show( m );

```

### Hierarchical Cluster

**Syntax:** Hierarchical Cluster( Y( columns ) )

**Description:** Clusters rows based on continuous or categorical variables. Hierarchical clustering begins by treating each row as its own cluster, then successively combining two clusters at a time.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster( Y( :birth, :death ), Label( :country ) );

```

### Hybrid Cycles

**Syntax:** obj = Hierarchical Cluster(...Hybrid Cycles( number=30 )...)

**Description:** Specifies the minimum number of near-neighbor joining cycles that are performed before switching to the hierarchical clustering routine. "30" by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :"1-Octanol"n, :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Method( "Hybrid Ward" ),
	Hybrid Cycles( 20 )
);

```

### Hybrid Goal

**Syntax:** obj = Hierarchical Cluster(...Hybrid Goal( number=400 )...)

**Description:** Specifies the maximum number of clusters allowed before switching to the hierarchical clustering routine. When the hierarchical clustering routine starts, the number of clusters must be less than or equal to the Hybrid Goal. "400" by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :"1-Octanol"n, :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Method( "Hybrid Ward" ),
	Hybrid Goal( 300 )
);

```

### Hybrid Initial K

**Syntax:** obj = Hierarchical Cluster(...Hybrid Initial K( number=10 )...)

**Description:** Specifies the initial number of neighbors used in the near-neighbor joining cycles. The number of neighbors can increase or decrease depending on how many unique near neighbors are found in the previous cycle. "10" by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :"1-Octanol"n, :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Method( "Hybrid Ward" ),
	Hybrid Initial K( 8 )
);

```

### Hybrid Log Details

**Syntax:** obj = Hierarchical Cluster(...Hybrid Log Details( state=0|1 )...)

**Description:** Specifies whether to show the status and timings of each state of the Hybrid Ward method in the log.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :"1-Octanol"n, :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Method( "Hybrid Ward" ),
	Hybrid Log Details( 1 )
);

```

### Hybrid RandomPCA Dim

**Syntax:** obj = Hierarchical Cluster(...Hybrid RandomPCA Dim( number=0 )...)

**Description:** Specifies the number of dimensions to use in the Randomized PCA dimension reduction technique. This technique is used when the value of Hybrid RandomPCA Dim is any value greater than zero and provides further speed improvements. "0" by default.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :"1-Octanol"n, :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Method( "Hybrid Ward" ),
	Hybrid RandomPCA Dim( 3 )
);

```

### Late Join Outliers

**Syntax:** obj << Late Join Outliers( state=0|1 )

**Description:** Shows or hides a report on which items clustered very late in the agglomeration.

**JMP Version Added:** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Late Join Outliers( 1 )
);

```

### Legend

**Syntax:** obj << Legend( state=0|1 )

**Description:** Shows or hides a legend for the color map to the right of the dendrogram.

```js

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

### Mark Clusters

**Syntax:** obj << Mark Clusters( state=0|1 )

**Description:** Assigns markers to the rows of the data table corresponding to the cluster to which the row belongs. The markers update if you change the number of clusters. If you deselect this option, the markers are no longer updated based on the number of clusters.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Number of Clusters( 4 )
);
obj << Mark Clusters;

```

### Method

**Syntax:** Method( "Average"|"Centroid"|"Ward"|"Single"|"Complete"|"Fast Ward"|"Hybrid Ward" )

**Description:** Specifies the distance method used to form the clusters.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Number of Clusters( 4 ),
	Method( "Complete" )
);

```

### Missing value imputation

**Syntax:** obj = Hierarchical Cluster(...Missing value imputation( state=0|1 )...)

**Description:** Imputes missing values using multivariate normal or multivariate SVD imputation.

```js

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

### More Color Map Columns

**Syntax:** obj << More Color Map Columns( column )

**Description:** Adds another color map based on the column specified.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Skull.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :length, :basilar, :zygomat, :postorb ),
	Color Map( "Blue to Gray to Red" ),
	More Color Map columns( :sex )
);

```

### Number of Clusters

**Syntax:** obj << Number of Clusters( number )

**Description:** To set the number-of-clusters, the place to cut the tree to define cluster groups. There is a diamond-shaped drag icon that can also change the number of clusters.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Number of Clusters( 3 )
);

```

### Number of Column Clusters

**Syntax:** obj << Number of Column Clusters( number )

**Description:** Specifies the number of column clusters prior to saving. Available only for two-way clustering.

**JMP Version Added:** 17

### Parallel Coord Plots

**Syntax:** obj << Parallel Coord Plots

**Description:** Creates a parallel coordinate plot for each cluster, all contained in a separate window.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Physical Data.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :Type, :Weight, :Turning Circle, :Displacement, :Horsepower, :Gas Tank Size ),
	Label( :Model ),
	Number of Clusters( 3 )
);
obj << Parallel Coord Plots;

```

### Pivot on Selected Cluster

**Syntax:** obj << Pivot on Selected Cluster

**Description:** Reverses the order of the two sub-clusters of the currently selected cluster.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster( Y( :birth, :death ), Label( :country ) );
dt << Select Rows( Loc( (obj << Get Clusters) == 3 ) );
Wait( 2 );
obj << Pivot on Selected Cluster;

```

### Release Zoom

**Syntax:** obj << Release Zoom

**Description:** Releases the zoom on the dendrogram to the selected rows.

```js

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

### Row Dendrogram Position

**Syntax:** obj << Row Dendrogram Position( "Left"|"Right" )

**Description:** Moves the position of the dendrogram for rows.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :"1-Octanol"n, :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Two Way Clustering,
	Row Dendrogram Position( "Left" )
);

```

### Row Label Position

**Syntax:** obj << Row Label Position( "Left"|"Right" )

**Description:** Moves the position of the labels on the dendrogram for rows.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :"1-Octanol"n, :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Two Way Clustering,
	Row Label Position( "Right" )
);

```

### Row More Position

**Syntax:** obj << Row More Position( "Left"|"Right" )

**Description:** Moves the position of the color map added with the More Color Map Columns command.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Skull.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :length, :basilar, :zygomat, :postorb ),
	Color Map( "Blue to Gray to Red" ),
	More Color Map Columns( :sex ),
	Row More Position( "Right" )
);

```

### Save Cluster Hierarchy

**Syntax:** obj << Save Cluster Hierarchy

**Description:** Creates a data table that contains information useful in reconstructing the dendrogram.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Number of Clusters( 4 )
);
obj << Save Cluster Hierarchy;

```

### Save Cluster History

**Syntax:** obj << Save Cluster History

**Description:** Saves the table that appears in the Clustering History report as a new data table.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	Save Cluster History
);

```

### Save Cluster Means

**Syntax:** obj << Save Cluster Means

**Description:** Saves a table of cluster means for the given number of clusters.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	Save Cluster Means
);

```

### Save Cluster Tree

**Syntax:** obj << Save Cluster Tree

**Description:** Creates a data table that contains the nodes of the cluster tree.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Number of Clusters( 4 )
);
obj << Save Cluster Tree;

```

### Save Clusters

**Syntax:** obj << Save Clusters

**Description:** Creates a data table column that contains the cluster numbers.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Number of Clusters( 4 )
);
obj << Save Clusters;

```

### Save Column Clusters

**Syntax:** obj << Save Column Clusters

**Description:** Save a new data table that contains cluster membership information for the columns. Available only for two-way clustering.

**JMP Version Added:** 17

### Save Constellation Coordinates

**Syntax:** obj << Save Constellation Coordinates

**Description:** Saves the coordinates of the constellation plot to a new column in the data table.

```js

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

### Save Display Order

**Syntax:** obj << Save Display Order

**Description:** Creates a data table column that contains the order in which the row appears in the dendrogram.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Number of Clusters( 4 )
);
obj << Save Display Order;

```

### Save Distance Matrix

**Syntax:** obj << Save Distance Matrix

**Description:** Creates a data table that contains the distances between observations.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Save Distance Matrix
);

```

### Save Formula for Closest Cluster

**Syntax:** obj << Save Formula for Closest Cluster

**Description:** Saves a formula column to the data table that gives the cluster number of the closest cluster mean.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Number of Clusters( 4 )
);
obj << Save Formula for Closest Cluster;

```

### Scatterplot Matrix

**Syntax:** obj << Scatterplot Matrix

**Description:** Creates a scatterplot matrix in a new window with confidence ellipses based on the current number of clusters.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	Scatterplot Matrix
);

```

### Set Random Seed

**Syntax:** obj << Set Random Seed( number )

**Description:** Specifies a random seed to reproduce the results for future launches of the platform.

### Show Dendrogram

**Syntax:** obj << Show Dendrogram( state=0|1 )

**Description:** Enables you to turn off dendrogram if you want to see only the color map. On by default.

```js

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

### Show NCluster Handle

**Syntax:** obj << Show NCluster Handle( state=0|1 )

**Description:** Shows or hides the diamond handle that is used to choose the number of clusters on the dendrogram. On by default.

```js

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

### Standardize

**Syntax:** obj << Standardize( "Unstandardized"|"Columns"|"Rows"|"Columns and Rows" )

**Description:** Alias for &apos;Standardize By&apos;, which specifies how to standardize the values prior to clustering.

### Standardize By

**Syntax:** obj = Hierarchical Cluster(...Standardize By( "Unstandardized"|"Columns"|"Rows"|"Columns and Rows" )...)

**Description:** Specifies how to standardize the values prior to clustering. You can standardize by columns, rows, columns and rows, or not at all.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :"1-Octanol"n, :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Standardize( "Unstandardized" ),
	Two Way Clustering,
	Row Label Position( "Right" )
);

```

### Standardize Data

**Syntax:** obj << Standardize Data( state=0|1 )

**Description:** Old option name, still supported, but replaced by &apos;Standardize By&apos;.

### Standardize Robustly

**Syntax:** obj = Hierarchical Cluster(...Standardize Robustly( state=0|1 )...)

**Description:** Uses robust estimates of the	mean and standard deviation to standardize the data.

### Two Way Clustering

**Syntax:** obj = Hierarchical Cluster(...Two Way Clustering...)

**Description:** Clusters together columns as well as rows. The columns must be measured on the same scale.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :"1-Octanol"n, :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Number of Clusters( 8 )
);
Wait( .1 );
obj << Two Way Clustering;

```

### Use Saved Cluster Table

**Syntax:** obj = Hierarchical Cluster(...Use Saved Cluster Table( state=0|1 )...)

**Description:** Uses a separate cluster history table to specify the clustering.

### Zoom to Selected Rows

**Syntax:** obj << Zoom to Selected Rows

**Description:** Zooms the dendrogram to the selected rows.

```js

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

### Distance between rows

**Syntax:** distance = KDTable << Distance between rows( row1, row2 )

**Description:** Returns the distance between two rows. Distance applies to removed rows as well as inserted rows.

```js

Names Default To Here( 1 );
tbl = KDTable( [1 1, 2 2, 1 2, 2 1, 4 4] );
distance = tbl << Distance between rows( 1, 2 ); 
//distance from row 1 to row 2 is: 
Show( distance );

```

### Insert rows

**Syntax:** n = KDTable << Insert rows( number|[ vector ] )

**Description:** Enables you to re-insert rows into table searches. The row indexes do not change when rows are inserted or removed, and only the original rows can be removed and then (re)inserted. Returns the number of rows inserted. If a row was already inserted, it is ignored.

```js

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

### K nearest rows

**Syntax:** {rows, dist} = KDTable << K nearest rows( stop, <position> )

**Description:** Returns the n nearest rows and distances to either a point or row (if position is specified) or all rows (if position is omitted), stopping the search when the distance limit is exceeded. Stop can be either n or {n,limit}. The optional position is a point either as (1xK) matrix where K is the number of dimensions or the number of a row. If position is not supplied, the nearest n rows to each row are returned in a (rows x n) matrix.

```js

Names Default To Here( 1 );
tbl = KDTable( [1 1 1, 1 2 1, 1 2 2, 2 2 2, 3 3 3, 4 5 6] );
{rows, dist} = tbl << K nearest rows( {3, 2.0} ); 
//3 nearest rows to each row are: 
Show( rows );

```

### KDTable

**Syntax:** tbl = KDTable( [ point1, point2, point3, point4, point5, ... ] )

**Description:** Returns a table for efficiently looking up near neighbors. The matrix arguments are k-dimensional points. There is no built in limit on the number of dimensions or points.

```js

Names Default To Here( 1 );
tbl = KDTable( [1 1 1, 1 2 1, 1 2 2, 2 2 2, 3 3 3, 4 5 6] );
{rows, dist} = tbl << K nearest rows( 2, 1 ); 
//2 nearest rows to row 1 are: 
Show( rows );

```

### Remove rows

**Syntax:** n = KDTable << Remove rows( number|[ vector ] )

**Description:** Remove rows from table searches. The row indexes do not change when rows are inserted or removed, and only the original rows can be removed then (re)inserted. The removed row&apos;s index can still be used as a starting point for K nearest rows. Returns the number of rows removed. If a row was already removed, it is ignored.

```js

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

### Attribute ID

**Syntax:** obj = Y(...<Attribute ID( column(s) )>...)

**Description:** For stacked data, this identifies attributes, which would be columns (variables) if the data was not stacked.

### Freq

**Syntax:** obj << Freq( column )

### Label

**Syntax:** obj << Label( column )

### Object ID

**Syntax:** obj = Y(...<Object ID( column(s) )>...)

**Description:** For stacked data, this identifies individuals to cluster. Otherwise, it is used to aggregate across each rows of a data.

### Ordering

**Syntax:** obj << Ordering( column )

### Weight

**Syntax:** obj << Weight( column )

### Y

**Syntax:** obj << Y( column(s) )

