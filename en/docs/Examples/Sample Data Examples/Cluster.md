# Cluster

## Example 1
> **Summary**: Perform hierarchical cluster analysis

<!-- Keywords: #Cluster, #HierarchicalCluster, #ColorClusters, #columns, #MarkClusters -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Birth Death.jmp");
// Hierarchical Cluster
Hierarchical Cluster(
	Columns( :birth, :death ),
	Color Clusters( 1 ),
	Mark Clusters( 1 ),
	Number of Clusters( 14 )
);
```

## Example 2
> **Summary**: Generate a hierarchical cluster

<!-- Keywords: #Cluster, #HierarchicalCluster, #ColorClusters, #columns, #MarkClusters -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Crops.jmp");
// Hierarchical Cluster
Hierarchical Cluster(
	Columns( :S1, :S3 ),
	Color Clusters( 1 ),
	Mark Clusters( 1 ),
	Number of Clusters( 7 )
);
```

## Example 3
> **Summary**: Perform a k means cluster analysis with normal mixtures

<!-- Keywords: #Cluster, #KMeansCluster, #Biplot3D, #Close, #DiagonalVariance -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Cytometry.jmp");
// Normal Mixtures
K Means Cluster(
	Y( :CD3, :CD8, :CD4, :MCB ),
	{Mixtures Tolerance( 0.00000001 ),
	Mixtures MaxIter( 200 ),
	Mixtures N Starts( 20 ),
	Outlier Cluster( 0 ),
	Diagonal Variance( 0 ),
	Number of Clusters( 6 ),
	Normal Mixtures, Go( Biplot 3D( 1 ) )
	},
	SendToReport(
		Dispatch( {}, "Control Panel",
			OutlineBox,
			{Close( 1 )}
		)
	)
);
```

## Example 4
> **Summary**: Perform hierarchical clustering on flight distances using the Ward method with standardized data, and display the dendrogram with 10 clusters colored for easy identification.

<!-- Keywords: #Cluster, #DistanceMatrix, #HierarchicalCluster, #ColorClusters, #DendrogramScale -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Flight Distances.jmp");
// Hierarchical Cluster
Hierarchical Cluster(
	Y(
		:Birmingham, :Boston, :Buffalo,
		:Chicago, :Cleveland, :Dallas,
		:Denver, :Detroit, :El Paso,
		:Houston, :Indianapolis,
		:Kansas City, :Los Angeles,
		:Louisville, :Memphis, :Miami,
		:Minneapolis, :New Orleans,
		:New York, :Omaha, :Philadelphia,
		:Phoenix, :Pittsburgh, :St. Louis,
		:Salt Lake City, :San Francisco,
		:Seattle, :Washington DC
	),
	Label( :Cities ),
	Method( "Ward" ),
	Standardize Data( 1 ),
	Distance Matrix( 1 ),
	Dendrogram Scale( "Distance Scale" ),
	Number of Clusters( 10 ),
	Color Clusters( 1 ),
	SendToReport(
		Dispatch( {}, "Dendrogram",
			OutlineBox,
			{SetHorizontal( 1 )}
		)
	)
);
```

## Example 5
> **Summary**: Perform hierarchical cluster analysis on factor scores using the Ward method with standardized data and generate cluster summary and two-way clustering with a specified number of clusters and dendrogram scale.

<!-- Keywords: #Cluster, #HierarchicalCluster, #ClusterSummary, #columns, #DendrogramScale -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Online Consumer Data.jmp");
// Hierarchical Cluster on Factor Scores
Hierarchical Cluster(
	Y(
		:Privacy, :Security, :Reputation,
		:Trust, :Purchase Int
	),
	Method( "Ward" ),
	Standardize Data( 1 ),
	Cluster Summary( 1 ),
	Two Way Clustering,
	Number of Clusters( 4 ),
	Dendrogram Scale( "Distance Scale" ),
	More Color Map Columns(
		:Internet Use
	)
);
```

## Example 6
> **Summary**: Perform hierarchical clustering on the Penguin dataset using centroid linkage and standardize the data. Generate a constellation plot.

<!-- Keywords: #Cluster, #HierarchicalCluster, #ColorClusters, #ConstellationPlot, #DendrogramScale -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Penguins.jmp");
// Hierarchical Clustering
Hierarchical Cluster(
	Y(
		:Culmen Length, :Culmen Depth,
		:Flipper Length, :Body Mass,
		:Delta 15 N, :Delta 13 C
	),
	Label( :Species ),
	Method( "Centroid" ),
	Standardize Data( 1 ),
	Color Clusters( 1 ),
	Dendrogram Scale( "Distance Scale" ),
	Number of Clusters( 4 ),
	Constellation Plot( 1 )
);
```

## Example 7
> **Summary**: Perform hierarchical spatial clustering on defects using the Ward method .

<!-- Keywords: #Cluster, #HierarchicalCluster, #AddSpatialMeasures, #AttributeID, #Close -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Wafer Stacked.jmp");
// Spatial Cluster of Defects
Hierarchical Cluster(
	Y( :Defects ),
	Object ID( :Lot, :Wafer ),
	Attribute ID( :X_Die, :Y_Die ),
	Method( "Ward" ),
	Standardize Data( 0 ),
	Cluster Summary( 1 ),
	Dendrogram Scale( "Distance Scale" ),
	Number of Clusters( 7 ),
	Add Spatial Measures(
		Attributes( 1 ),
		Angle( 1 ),
		Radius( 1 ),
		Streak Angle( 1 ),
		Streak Distance( 1 )
	),
	SendToReport(
		Dispatch( {}, "Dendrogram",
			OutlineBox,
			{Close( 1 ),
			SetHorizontal( 1 )}
		),
		Dispatch( {"Dendrogram"},
			"Clust Dendro", FrameBox,
			{Frame Size( 35, 700 )}
		)
	)
);
```

## Example 8
> **Summary**: Perform hierarchical cluster analysis on crude death rate and crude birth rate using Ward's method and geometric spacing scaling with 14 clusters.

<!-- Keywords: #Cluster, #HierarchicalCluster, #ColorClusters, #DendrogramScale, #MarkClusters -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/World Demographics.jmp");
// Hierarchical Cluster: Crude Death Rate and Crude Birth Rate
Hierarchical Cluster(
	Y(
		:"Crude Death Rate (1000)"n,
		:"Crude Birth Rate (1000)"n
	),
	Method( "Ward" ),
	Standardize( 1 ),
	Color Clusters( 1 ),
	Mark Clusters( 1 ),
	Dendrogram Scale(
		"Geometric Spacing"
	),
	Number of Clusters( 14 )
);
```

