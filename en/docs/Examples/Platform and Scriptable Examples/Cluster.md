# Cluster

## Hierarchical Cluster 
### Example 1
> **Summary**: Visualizes hierarchical clustering analysis on a data table, specifying columns for birth and death rates, color coding clusters, marking clusters, and setting the number of clusters to 14.

<!-- Keywords: #HierarchicalClustering, #DataVisualization, #JMPScriptingLanguage, #ClusterAnalysis, #BirthAndDeathRates -->

**Code**:
```jsl
// Hierarchical Cluster
// Open data table
dt = Open("data_table.jmp");
// Hierarchical Cluster
Hierarchical Cluster(
	Columns( :birth, :death ),
	Color Clusters( 1 ),
	Mark Clusters( 1 ),
	Number of Clusters( 14 )
);
```

**Code Explanation**:

1. Open data table.
2. Perform hierarchical clustering.
3. Specify columns for analysis.
4. Enable color coding clusters.
5. Enable marking clusters.
6. Set number of clusters to 14.



### Example 2
> **Summary**: Opens a data table, performs hierarchical clustering on columns S1 and S3, colors and marks clusters, and sets the number of clusters to 7.

<!-- Keywords: #HierarchicalClustering, #JMPScriptingLanguage, #DataVisualization, #ClusterAnalysis, #StatisticalAnalysis -->

**Code**:
```jsl
// Hierarchical Cluster
// Open data table
dt = Open("data_table.jmp");
// Hierarchical Cluster
Hierarchical Cluster(
	Columns( :S1, :S3 ),
	Color Clusters( 1 ),
	Mark Clusters( 1 ),
	Number of Clusters( 7 )
);
```

**Code Explanation**:

1. Open data table.
2. Perform hierarchical clustering.
3. Select columns S1 and S3.
4. Color clusters enabled.
5. Mark clusters enabled.
6. Set number of clusters to 7.



### Example 3
> **Summary**: Performs hierarchical clustering on a data table, using the Ward method and standardizing data. It generates a dendrogram with 5 clusters and sends the output to a report.

<!-- Keywords: #HierarchicalClustering, #WardMethod, #Dendrogram, #JMPScriptingLanguage, #DataVisualization -->

**Code**:
```jsl
// Hierarchical Cluster
// Open data table
dt = Open("data_table.jmp");
// Hierarchical Cluster
Hierarchical Cluster(
	Y(
		:ORE_FEMALE_WK1_1,
		:ORE_FEMALE_WK1_2,
		:ORE_FEMALE_WK1_11,
		:ORE_FEMALE_WK1_12,
		:ORE_FEMALE_WK1_21,
		:ORE_FEMALE_WK1_24,
		:ORE_FEMALE_WK6_1,
		:ORE_FEMALE_WK6_2,
		:ORE_FEMALE_WK6_11,
		:ORE_FEMALE_WK6_12,
		:ORE_FEMALE_WK6_21,
		:ORE_FEMALE_WK6_24,
		:ORE_MALE_WK1_3, :ORE_MALE_WK1_4,
		:ORE_MALE_WK1_9, :ORE_MALE_WK1_10,
		:ORE_MALE_WK1_19,
		:ORE_MALE_WK1_20, :ORE_MALE_WK6_3,
		:ORE_MALE_WK6_4, :ORE_MALE_WK6_9,
		:ORE_MALE_WK6_10,
		:ORE_MALE_WK6_19,
		:ORE_MALE_WK6_20,
		:SAM_FEMALE_WK1_7,
		:SAM_FEMALE_WK1_8,
		:SAM_FEMALE_WK1_15,
		:SAM_FEMALE_WK1_16,
		:SAM_FEMALE_WK1_22,
		:SAM_FEMALE_WK1_23,
		:SAM_FEMALE_WK6_7,
		:SAM_FEMALE_WK6_8,
		:SAM_FEMALE_WK6_15,
		:SAM_FEMALE_WK6_16,
		:SAM_FEMALE_WK6_22,
		:SAM_FEMALE_WK6_23,
		:SAM_MALE_WK1_5, :SAM_MALE_WK1_6,
		:SAM_MALE_WK1_13,
		:SAM_MALE_WK1_14,
		:SAM_MALE_WK1_17,
		:SAM_MALE_WK1_18, :SAM_MALE_WK6_5,
		:SAM_MALE_WK6_6, :SAM_MALE_WK6_13,
		:SAM_MALE_WK6_14,
		:SAM_MALE_WK6_17,
		:SAM_MALE_WK6_18
	),
	Label( :Observation ID ),
	Method( "Ward" ),
	Standardize Data( 0 ),
	Distance Matrix( 1 ),
	Dendrogram Scale( "Distance Scale" ),
	Number of Clusters( 5 ),
	SendToReport(
		Dispatch( {}, "Dendrogram",
			OutlineBox,
			{SetHorizontal( 1 )}
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Perform hierarchical clustering.
3. Specify response variables.
4. Use observation ID for labels.
5. Apply Ward method.
6. Do not standardize data.
7. Generate distance matrix.
8. Use distance scale for dendrogram.
9. Set number of clusters to 5.
10. Adjust dendrogram orientation.



### Example 4
> **Summary**: Opens a data table, performs hierarchical clustering on the 'Cities' column using the Ward method, and generates a dendrogram with 10 clusters. The resulting chart is then sent to a report with a customized outline box.

<!-- Keywords: #HierarchicalClustering, #WardMethod, #Dendrogram, #JSLScriptingLanguage, #DataVisualization -->

**Code**:
```jsl
// Hierarchical Cluster
// Open data table
dt = Open("data_table.jmp");
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

**Code Explanation**:

1. Open data table.
2. Define variables.
3. Start hierarchical clustering.
4. Specify response columns.
5. Label cities.
6. Choose Ward method.
7. Standardize data.
8. Display distance matrix.
9. Set dendrogram scale.
10. Define number of clusters.
11. Color clusters.
12. Adjust dendrogram orientation.



### Example 5
> **Summary**: Generates a hierarchical cluster analysis on factor scores, using the Ward method and standardizing data. The resulting dendrogram is scaled by distance and includes a color map column for Internet Use.

<!-- Keywords: #HierarchicalClustering, #FactorScores, #WardMethod, #Standardization, #Dendrogram -->

**Code**:
```jsl
// Hierarchical Cluster on Factor Scores
// Open data table
dt = Open("data_table.jmp");
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

**Code Explanation**:

1. Open data table.
2. Perform hierarchical clustering.
3. Specify cluster variables.
4. Choose Ward method.
5. Standardize data.
6. Enable cluster summary.
7. Apply two-way clustering.
8. Set number of clusters to 4.
9. Use distance scale for dendrogram.
10. Add color map column for Internet Use.



### Example 6
> **Summary**: Performs hierarchical clustering on a dataset, using the centroid method and standardizing data. It labels clusters by species and creates a constellation plot.

<!-- Keywords: #HierarchicalClustering, #CentroidMethod, #Standardization, #ClusterLabeling, #ConstellationPlot -->

**Code**:
```jsl
// Hierarchical Clustering
// Open data table
dt = Open("data_table.jmp");
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

**Code Explanation**:

1. Open table.
2. Perform hierarchical clustering.
3. Use specified variables.
4. Label clusters by species.
5. Use centroid method.
6. Standardize data.
7. Color clusters.
8. Use distance scale.
9. Set number of clusters to 4.
10. Create constellation plot.



### Example 7
> **Summary**: Generates a spatial cluster of defects by performing hierarchical clustering on the 'Defects' response variable, using lot and wafer as object IDs, X and Y die positions as attribute IDs, and the Ward method for clustering. The resulting dendrogram is scaled by distance and includes 7 clusters.

<!-- Keywords: #HierarchicalClustering, #SpatialAnalysis, #WardMethod, #Dendrogram, #ClusterSummary -->

**Code**:
```jsl
// Spatial Cluster of Defects
// Open data table
dt = Open("data_table.jmp");
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

**Code Explanation**:

1. Open data table.
2. Perform hierarchical clustering.
3. Use defects as response variable.
4. Define object ID for lots and wafers.
5. Specify attribute ID for X and Y die positions.
6. Choose Ward method for clustering.
7. Do not standardize data.
8. Generate cluster summary report.
9. Scale dendrogram by distance.
10. Set number of clusters to 7.



### Example 8
> **Summary**: Generates a hierarchical cluster analysis using the Ward method to group data based on Crude Death Rate and Crude Birth Rate, with standardized values and color-coded clusters.

<!-- Keywords: #HierarchicalClustering, #WardMethod, #Standardization, #ColorCoding, #Dendrogram -->

**Code**:
```jsl
// Hierarchical Cluster: Crude Death Rate and Crude Birth Rate
// Open data table
dt = Open("data_table.jmp");
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

**Code Explanation**:

1. Open table.
2. Perform hierarchical clustering.
3. Select variables.
4. Use Ward method.
5. Standardize data.
6. Color clusters.
7. Mark clusters.
8. Set dendrogram scale.
9. Specify number of clusters.



### Example 9
> **Summary**: Performs hierarchical clustering analysis  on sales data, grouping outlets by pie type and ordering by outlets, with a focus on visualizing the dendrogram using a customized report.

<!-- Keywords: #HierarchicalClustering, #Dendrogram, #JMPScriptingLanguage, #DataVisualization, #ClusterAnalysis -->

**Code**:
```jsl
Open( ‚Äú$SAMPLE_DATA/data_table.jmp‚Äù );
Hierarchical Cluster(
	Y( :"Sales (K)"n ),
	Label( :Pie Type ),
	Ordering( :Outlets ),
	Method( "Ward" ),
	Standardize By( "Columns" ),
	Dendrogram Scale( "Distance Scale" ),
	Number of Clusters( 2 ),
	SendToReport(
		Dispatch( {"Dendrogram"}, "Clust Dendro", FrameBox,
			{Frame Size( 71, 200 ), DispatchSeg( DendroLabelSeg( 1 ), {Font( Font( "Showcard Gothic" ) )} )}
		)
	)
);
```

**Code Explanation**:

1. Open data table;
2. Perform hierarchical clustering.
3. Use sales data for analysis.
4. Label pies by type.
5. Order by outlets.
6. Apply Ward method.
7. Standardize by columns.
8. Use distance scale.
9. Set number of clusters to 2.
10. Adjust dendrogram appearance.



### Example 10
> **Summary**: Performs hierarchical clustering analysis  on a data table, using the Ward method and standardizing by columns, to identify 5 clusters with distinct characteristics.

<!-- Keywords: #HierarchicalClustering, #WardMethod, #Standardization, #DataVisualization, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Hierarchical Cluster(
	Y( :name, :age, :sex, :height, :weight ),
	Method( "Ward" ),
	Standardize By( "Columns" ),
	Distance Graph( 0 ),
	Clustering History( 0 ),
	Dendrogram Scale( "Distance Scale" ),
	Two Way Clustering,
	Number of Clusters( 5 ),
	Color Map( "Blue to Gray to Red"(1) ),
	SendToReport( Dispatch( {"Dendrogram"}, "Clust Dendro", FrameBox, {Frame Size( 73, 610 )} ) )
);
```

**Code Explanation**:

1. Open data table.
2. Perform hierarchical clustering.
3. Specify variables for clustering.
4. Use Ward method.
5. Standardize by columns.
6. Disable distance graph.
7. Disable clustering history.
8. Set dendrogram scale.
9. Enable two-way clustering.
10. Define number of clusters.



### Example 11
> **Summary**: Performs hierarchical clustering analysis  on a data table, utilizing the Ward method and standardizing by columns, with interactive features for two-way clustering and color mapping.

<!-- Keywords: #HierarchicalClustering, #WardMethod, #Standardization, #TwoWayClustering, #ColorMapping -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Hierarchical Cluster(
	Y( :name, :age, :sex, :height, :weight ),
	Method( "Ward" ),
	Standardize By( "Columns" ),
	Distance Graph( 0 ),
	Clustering History( 0 ),
	Dendrogram Scale( "Distance Scale" ),
	Two Way Clustering,
	Number of Clusters( 5 ),
	Color Map( "Blue to Gray to Red"(1) ),
	SendToReport( Dispatch( {"Dendrogram"}, "Clust Dendro", FrameBox, {Frame Size( 73, 610 )} ) )
);
Open("data_table.jmp") << Cluster Variables(
	Y( :Al, :Mn, :Na, :Br, :Ce, :Co, :Cr, :Cs, :Eu, :Fe, :Hf, :La, :Sc, :Sm, :U ),
	Cluster Summary( 0 ),
	Cluster Members( 0 ),
	Cluster Components( 0 )
);
```

**Code Explanation**:

1. Open data table;
2. Perform hierarchical clustering.
3. Use Ward method for clustering.
4. Standardize data by columns.
5. Disable distance graph.
6. Disable clustering history.
7. Set dendrogram scale to distance.
8. Enable two-way clustering.
9. Specify 5 clusters.
10. Apply color map from blue to gray to red.
11. Adjust dendrogram frame size.
12. Open data table;
13. Cluster variables based on specified elements.
14. Disable cluster summary.
15. Disable cluster members.
16. Disable cluster components.



### Example 12
> **Summary**: Performs hierarchical clustering analysis  on birth and death variables, generating a constellation plot with customized appearance.

<!-- Keywords: #HierarchicalClustering, #ConstellationPlot, #WardMethod, #StandardizeData, #JMPScriptingLanguage -->

**Code**:
```jsl
Open("data_table.jmp");
Hierarchical Cluster(
	Y( :birth, :death ),
	Method( "Ward" ),
	Standardize Data( 1 ),
	Color Clusters( 1 ),
	Mark Clusters( 1 ),
	Dendrogram Scale( "Distance Scale" ),
	Number of Clusters( 14 ),
	Constellation Plot( 1 ),
	SendToReport(
		Dispatch( {"Constellation Plot"}, "Clust Hier", FrameBox,
			{DispatchSeg(
				Node Graph Seg( 1 ),
				{Line Color( "Medium Dark Green" ), Line Style( "DashDot" ), Line Width( 2 ), Marker( "Filled Diamond" ),
				Transparency( 0.5 )}
			)}
		)
	)
);
```

**Code Explanation**:

1. Open data table;
2. Perform hierarchical clustering.
3. Use birth and death variables.
4. Apply Ward method.
5. Standardize data.
6. Color clusters.
7. Mark clusters.
8. Use distance scale for dendrogram.
9. Set number of clusters to 14.
10. Generate constellation plot.
11. Customize constellation plot appearance.
12. Set line color to green.
13. Set line style to dash-dot.
14. Set line width to 2.
15. Use filled diamond marker.
16. Set transparency to 0.5.



### Example 13
> **Summary**: Performs hierarchical clustering analysis  on the 'birth' and 'death' variables, utilizing the Ward method and standardizing data for 30 clusters.

<!-- Keywords: #HierarchicalClustering, #WardMethod, #Standardization, #Dendrogram, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Hierarchical Cluster(
	Y( :birth, :death ),
	Method( "Ward" ),
	Standardize Data( 1 ),
	Color Clusters( 1 ),
	Mark Clusters( 1 ),
	Cluster Criterion( 1 ),
	Dendrogram Scale( "Distance Scale" ),
	Number of Clusters( 30 ),
	Constellation Plot( 1 ),
	SendToReport(
		Dispatch( {}, "Dendrogram", OutlineBox, {SetHorizontal( 1 )} ),
		Dispatch( {"Dendrogram"}, "Clust Dendro", FrameBox, {Frame Size( 35, 700 )} ),
		Dispatch( {"Constellation Plot"}, "1", ScaleBox,
			{Format( "Custom", Formula( Round( Normal Density( value, mu = 0, sigma = 10 ), 2 ) ), 12 )}
		),
		Dispatch( {"Constellation Plot"}, "2", ScaleBox, {Format( "Custom", Formula( Round( Ln( Abs( value ) ), 2 ) ), 12 )} )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Perform hierarchical clustering.
3. Use variables "birth" and "death".
4. Apply Ward method.
5. Standardize data.
6. Color clusters.
7. Mark clusters.
8. Set cluster criterion.
9. Use distance scale for dendrogram.
10. Specify 30 clusters.



### Example 14
> **Summary**: Performs hierarchical clustering analysis  on a data table, using height and weight variables, Ward method, and distance scale for dendrogram, with 5 clusters and cluster summary.

<!-- Keywords: #HierarchicalClustering, #WardMethod, #Dendrogram, #ClusterSummary, #JSLScript -->

**Code**:
```jsl
dt = Open("data_table.jmp");
hc = dt << Hierarchical Cluster(
	Y( :height, :weight ),
	Label( :name ),
	Method( "Ward" ),
	Standardize Data( 0 ),
	Cluster Summary( 1 ),
	Dendrogram Scale( "Distance Scale" ),
	Number of Clusters( 5 ),
	SendToReport(
		Dispatch( {}, "Dendrogram", OutlineBox, {Close( 1 ), SetHorizontal( 1 )} ),
		Dispatch( {"Cluster Summary"}, "Cluster Means", OutlineBox, {Close( 1 )} )
	)
);
hc << Save Clusters;
```

**Code Explanation**:

1. Open table.
2. Perform hierarchical clustering.
3. Use height and weight as variables.
4. Label clusters by name.
5. Apply Ward method.
6. Do not standardize data.
7. Show cluster summary.
8. Use distance scale for dendrogram.
9. Specify 5 clusters.
10. Close dendrogram outline.
11. Close cluster means outline.
12. Save cluster results.



### Example 15
> **Summary**: Performs hierarchical clustering analysis  on a data table, using the Ward method and specifying variables for clustering, with cluster summary and parallel coordinate plots.

<!-- Keywords: #HierarchicalClustering, #WardMethod, #DataVisualization, #JMPScriptingLanguage, #ClusterAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
hc = dt << Hierarchical Cluster(
	Y( :height, :weight ),
	Label( :name ),
	Method( "Ward" ),
	Standardize Data( 0 ),
	Cluster Summary( 1 ),
	Dendrogram Scale( "Distance Scale" ),
	Number of Clusters( 5 ),
	SendToReport(
		Dispatch( {}, "Dendrogram", OutlineBox, {Close( 1 ), SetHorizontal( 1 )} ),
		Dispatch( {"Cluster Summary"}, "Cluster Means", OutlineBox, {Close( 1 )} )
	)
);
hc << Save Clusters;
hc << Parallel Coord Plots;
```

**Code Explanation**:

1. Open data table.
2. Perform hierarchical clustering.
3. Specify variables for clustering.
4. Use names as labels.
5. Choose Ward method.
6. Do not standardize data.
7. Show cluster summary.
8. Use distance scale for dendrogram.
9. Set number of clusters to 5.
10. Close unnecessary reports.
11. Save cluster results.
12. Create parallel coordinate plots.



### Example 16
> **Summary**: Performs hierarchical clustering analysis  on data table variables S1 and S3, using the Ward method, standardization, and color marking to identify 7 clusters.

<!-- Keywords: #HierarchicalClustering, #WardMethod, #Standardization, #ColorClusters, #JMPScriptingLanguage -->

**Code**:
```jsl
Open("data_table.jmp");
Hierarchical Cluster(
	Y( :S1, :S3 ),
	Method( "Ward" ),
	Standardize( 1 ),
	Color Clusters( 1 ),
	Mark Clusters( 1 ),
	Show Dendrogram( 0 ),
	Dendrogram Scale( "Distance Scale" ),
	Number of Clusters( 7 ),
	Constellation Plot( 1 ),
	SendToReport(
		Dispatch( {}, "Hierarchical Clustering", OutlineBox, {Set Title( "Constellation Plot, No Show Dendrogram" )} ),
		Dispatch( {}, "Dendrogram", OutlineBox, {SetHorizontal( 1 )} ),
		Dispatch( {"Constellation Plot"}, "Clust Hier", FrameBox, {Marker Size( 4 )} )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Perform hierarchical clustering.
3. Use variables S1 and S3.
4. Apply Ward method.
5. Standardize data.
6. Color clusters.
7. Mark clusters.
8. Hide dendrogram.
9. Set dendrogram scale.
10. Specify 7 clusters.



### Example 17
> **Summary**: Performs hierarchical clustering analysis  to group countries based on birth and death rates, labeling clusters by country.

<!-- Keywords: #HierarchicalClustering, #JMPScriptingLanguage, #DataAnalysis, #CountryComparison, #ClusterAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Hierarchical Cluster( Y( :birth, :death ), Label( :country ) );
```

**Code Explanation**:

1. Open data table.
2. Perform hierarchical clustering.
3. Use birth and death columns.
4. Label clusters by country.



### Example 18
> **Summary**: Creates a hierarchical cluster object using birth and death variables, with country labels, and generates a constellation plot.

<!-- Keywords: #HierarchicalClustering, #ConstellationPlot, #JMPScriptingLanguage, #DataVisualization, #ClusterAnalysis -->

**Code**:
```jsl
Names Default To Here( 1 );
dt = Open("data_table.jmp");
obj = Hierarchical Cluster( Y( :birth, :death ), Label( :country ) );
obj << Constellation Plot();
```

**Code Explanation**:

1. Set default names.
2. Open data table.
3. Create hierarchical cluster object.
4. Specify birth and death variables.
5. Use country for labeling.
6. Generate constellation plot.



### Example 19
> **Summary**: Performs hierarchical clustering analysis  on a data table, using the Ward method and standardizing input data to visualize clusters in a dendrogram.

<!-- Keywords: #HierarchicalClustering, #WardMethod, #Dendrogram, #Standardization, #JMPScriptingLanguage -->

**Code**:
```jsl
Open("data_table.jmp");
Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Method( "Ward" ),
	Standardize Data( 1 ),
	Dendrogram Scale( "Distance Scale" ),
	Number of Clusters( 2 ),
	SendToReport( Dispatch( {}, "Dendrogram", OutlineBox, {SetHorizontal( 1 )} ) )
);
```

**Code Explanation**:

1. Open data table;
2. Perform hierarchical clustering.
3. Set variables for clustering.
4. Use Ward method for clustering.
5. Standardize input data.
6. Use distance scale for dendrogram.
7. Specify number of clusters.
8. Adjust dendrogram orientation.



### Example 20
> **Summary**: Performs hierarchical clustering analysis  on a data table, using age, sex, height, and weight variables to identify 5 clusters with Ward's method, and visualizes the results in a dendrogram with blue-to-gray-to-red color mapping.

<!-- Keywords: #HierarchicalClustering, #WardMethod, #Dendrogram, #JMPScriptingLanguage, #DataVisualization -->

**Code**:
```jsl
Open("data_table.jmp");
Hierarchical Cluster(
	Y( :age, :sex, :height, :weight ),
	Label( :name ),
	Method( "Ward" ),
	Standardize By( "Columns" ),
	Dendrogram Scale( "Distance Scale" ),
	Number of Clusters( 5 ),
	Color Map( "Blue to Gray to Red" ),
	Two Way Clustering,
	SendToReport(
		Dispatch( {"Dendrogram"}, "Clust Dendro", FrameBox, {Frame Size( 86, 700 )} ),
		Dispatch( {"Dendrogram"}, "Clust Dendro", FrameBox( 4 ), {Frame Size( 72, 60 )} )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Perform hierarchical clustering.
3. Use age, sex, height, weight variables.
4. Label using name variable.
5. Apply Ward method.
6. Standardize by columns.
7. Use distance scale for dendrogram.
8. Specify 5 clusters.
9. Use blue to gray to red color map.
10. Enable two-way clustering.



### Example 21
> **Summary**: Performs hierarchical clustering analysis  on a data table, using the Ward method and standardizing by columns, to identify patterns in pH, specific gravity, temperature, sediment, and alcohol levels across different tanks.

<!-- Keywords: #HierarchicalClustering, #WardMethod, #Standardization, #Dendrogram, #JMPScriptingLanguage -->

**Code**:
```jsl
Open("data_table.jmp");
Hierarchical Cluster(
	Y( :pH, :Specific gravity, :"Temperature, degrees C"n, :"Sediment, ppb"n, :Alcohol ),
	Label( :Tank ),
	Method( "Ward" ),
	Standardize By( "Columns" ),
	Color Clusters( 1 ),
	Dendrogram Scale( "Distance Scale" ),
	Row Label Position( "Right" ),
	Number of Clusters( 3 ),
	SendToReport(
		Dispatch( {"Dendrogram"}, "Clust Dendro", FrameBox, {DispatchSeg( DendroSeg( 1 ), {Line Color( "Orange" ), Line Width( 3 )} )} ),
		Dispatch( {"Dendrogram"}, "Clust Dendro", FrameBox( 2 ), {Frame Size( 35, 385 )} )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Perform hierarchical clustering.
3. Specify response variables.
4. Use Tank for labeling.
5. Apply Ward method.
6. Standardize by columns.
7. Color clusters.
8. Set dendrogram scale.
9. Position row labels.
10. Define number of clusters.
11. Customize dendrogram appearance.
12. Adjust frame size.



### Example 22
> **Summary**: Performs hierarchical clustering analysis  using variables S1 and S3, with Ward method, standardization, and color marking of clusters.

<!-- Keywords: #HierarchicalClustering, #WardMethod, #Standardization, #ClusterAnalysis, #JMPScripting -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Hierarchical Cluster(
	Y( :S1, :S3 ),
	Method( "Ward" ),
	Standardize( 1 ),
	Color Clusters( 1 ),
	Mark Clusters( 1 ),
	Distance Graph( 0 ),
	Show NCluster Handle( 0 ),
	Cluster Criterion( 1 ),
	Dendrogram Scale( "Distance Scale" ),
	Two Way Clustering,
	Number of Clusters( 29 ),
	Color Map( "Blue to Gray to Red" ),
	SendToReport(
		Dispatch( {}, "Hierarchical Clustering", OutlineBox, {Set Title( "Cluster Criterion, No Distance Graph, Two Way Clustering" )} ),
		Dispatch( {}, "Dendrogram", OutlineBox, {SetHorizontal( 1 )} )
	)
);
```

**Code Explanation**:

1. Open table.
2. Perform hierarchical clustering.
3. Use variables S1, S3.
4. Apply Ward method.
5. Standardize data.
6. Color clusters.
7. Mark clusters.
8. Hide distance graph.
9. Disable NCluster handle.
10. Set cluster criterion.



### Example 23
> **Summary**: Performs hierarchical clustering analysis  using the Ward method, standardizing data and color-marking clusters, with a constellation plot and customized report title.

<!-- Keywords: #HierarchicalClustering, #WardMethod, #Standardization, #ConstellationPlot, #JSLScript -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Hierarchical Cluster(
	Y( :S1, :S3 ),
	Method( "Ward" ),
	Standardize( 1 ),
	Color Clusters( 1 ),
	Mark Clusters( 1 ),
	Show Dendrogram( 0 ),
	Dendrogram Scale( "Distance Scale" ),
	Number of Clusters( 7 ),
	Constellation Plot( 1 ),
	SendToReport(
		Dispatch( {}, "Hierarchical Clustering", OutlineBox, {Set Title( "Constellation Plot, No Show Dendrogram" )} ),
		Dispatch( {}, "Dendrogram", OutlineBox, {SetHorizontal( 1 )} ),
		Dispatch( {"Constellation Plot"}, "Clust Hier", FrameBox, {Marker Size( 4 )} )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Perform hierarchical clustering.
3. Use S1 and S3 columns.
4. Apply Ward method.
5. Standardize data.
6. Color clusters.
7. Mark clusters.
8. Hide dendrogram.
9. Set dendrogram scale.
10. Specify 7 clusters.
11. Create constellation plot.
12. Customize report title.
13. Set dendrogram horizontal.
14. Adjust marker size.



### Example 24
> **Summary**: Performs hierarchical clustering analysis  on columns S1 and S3, with color coding and marking enabled for 7 clusters.

<!-- Keywords: #HierarchicalClustering, #JMPScriptingLanguage, #DataAnalysis, #ClusterAnalysis, #Visualization -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Hierarchical Cluster( Columns( :S1, :S3 ), Color Clusters( 1 ), Mark Clusters( 1 ), Number of Clusters( 7 ) );
```

**Code Explanation**:

1. Open data table.
2. Perform hierarchical clustering.
3. Select columns S1 and S3.
4. Enable color coding for clusters.
5. Enable cluster marking.
6. Specify number of clusters as 7.



### Example 25
> **Summary**: Performs hierarchical clustering analysis  to group countries based on birth and death rates, using the Ward method and standardizing data for visualization.

<!-- Keywords: #HierarchicalClustering, #WardMethod, #Standardization, #Dendrogram, #JMPScriptingLanguage -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Method( "Ward" ),
	Standardize( 1 ),
	Color Clusters( 1 ),
	Mark Clusters( 1 ),
	Cluster Criterion( 1 ),
	Dendrogram Scale( "Distance Scale" ),
	Number of Clusters( 8 ),
	SendToReport( Dispatch( {}, "Dendrogram", OutlineBox, {SetHorizontal( 1 )} ) )
);
```

**Code Explanation**:

1. Open data table;
2. Perform hierarchical clustering.
3. Use birth and death variables.
4. Label clusters by country.
5. Apply Ward method.
6. Standardize data.
7. Color clusters.
8. Mark clusters.
9. Set cluster criterion.
10. Configure dendrogram scale.



### Example 26
> **Summary**: Performs hierarchical clustering analysis  on a data table, generating two separate cluster hierarchies and saving the distance matrices, display orders, and clusters for further exploration.

<!-- Keywords: #HierarchicalClustering, #JMPScriptingLanguage, #DataAnalysis, #ClusterAnalysis, #DistanceMatrix -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Hierarchical Cluster(
	Y( :State Since, :Capital Since ),
	Method( "Ward" ),
	Standardize By( "Columns" ),
	Dendrogram Scale( "Distance Scale" ),
	Number of Clusters( 6 ),
	SendToReport( Dispatch( {"Dendrogram"}, "Clust Dendro", FrameBox, {Frame Size( 35, 700 )} ) )
);
dt2 = obj << Save Distance Matrix;
dt2 = Current Data Table();
obj2 = dt2 << Hierarchical Cluster( Label( :Name ), Distance Matrix( 1 ), );
obj << Save Clusters;
obj2 << Save Clusters;
obj << Save Display Order;
obj2 << Save Display Order;
dt3 = obj << Save Cluster Hierarchy;
dt4 = obj2 << Save Cluster Hierarchy;
benchHMat = dt3 << Get All Columns As Matrix;
benchHMat = benchHMat[0, 1 :: 7];
validHMat = dt4 << Get All Columns As Matrix;
Close( dt3, No Save );
Close( dt4, No Save );
obj << Two Way Clustering;
obj << Legend( 1 );
obj2 << Two Way Clustering;
obj2 << Legend( 1 );
rpt = obj << report;
rpt2 = obj2 << report;
```

**Code Explanation**:

1. Open table.
2. Perform hierarchical clustering.
3. Save distance matrix.
4. Switch to distance matrix table.
5. Perform hierarchical clustering on labels.
6. Save clusters from first analysis.
7. Save clusters from second analysis.
8. Save display order from first analysis.
9. Save display order from second analysis.
10. Save cluster hierarchy from both analyses.



### Example 27
> **Summary**: Performs hierarchical clustering analysis  on a dataset with 8 clusters, utilizing the Ward method and standardizing variables, followed by local data filtering for specific conditions.

<!-- Keywords: #HierarchicalClustering, #WardMethod, #LocalDataFiltering, #JMPScriptingLanguage, #DataAnalysis -->

**Code**:
```jsl
dt = Open( "$SAMPLE_DATA/data_table.jmp", "private" );
clus = dt << Hierarchical Cluster(
	Y( :Saturated fat g, :Cholesterol g, :Sodium mg, :Carbohydrate g, :Dietary fiber g, :Sugars g, :Protein g, :Vitamin A %RDI ),
	Method( "Ward" ),
	Standardize( 1 ),
	Dendrogram Scale( "Distance Scale" ),
	Number of Clusters( 8 )
);
ldf = clus << Local Data Filter(
	Location( {451, 116} ),
	Add Filter( columns( :Calories, :Brand ), Where( :Brand == "M&M/Mars" ), Display( :Brand, Size( 204, 259 ), Check Box Display ) ),
	Mode( Select( 0 ), Show( 1 ), Include( 1 ) )
);
```

**Code Explanation**:

1. Open data table;
2. Perform hierarchical clustering.
3. Use Ward method.
4. Standardize variables.
5. Set dendrogram scale.
6. Specify 8 clusters.
7. Create local data filter.
8. Position filter at (451, 116).
9. Add filter for "Calories" and "Brand".
10. Set filter condition for "M&M/Mars".



### Example 28
> **Summary**: Performs hierarchical clustering analysis  on a dataset, identifying 8 clusters based on multiple variables and visualizing the results with a dendrogram scale.

<!-- Keywords: #HierarchicalClustering, #JMPScriptingLanguage, #DataAnalysis, #ClusterAnalysis, #Dendrogram -->

**Code**:
```jsl
dt = Open("data_table.jmp");
clus = dt << Hierarchical Cluster(
	Y( :Saturated fat g, :Cholesterol g, :Sodium mg, :Carbohydrate g, :Dietary fiber g, :Sugars g, :Protein g, :Vitamin A %RDI ),
	Method( "Ward" ),
	Standardize( 1 ),
	Dendrogram Scale( "Distance Scale" ),
	Number of Clusters( 8 )
);
ldf = clus << Local Data Filter(
	Location( {451, 116} ),
	Add Filter( columns( :Calories, :Brand ), Where( :Brand == "M&M/Mars" ), Display( :Brand, Size( 204, 259 ), List Display ) ),
	Mode( Select( 0 ), Show( 1 ), Include( 1 ) )
);
```

**Code Explanation**:

1. Open data table.
2. Perform hierarchical clustering.
3. Specify variables for clustering.
4. Choose Ward method.
5. Standardize data.
6. Set dendrogram scale.
7. Define number of clusters.
8. Create local data filter.
9. Set filter location.
10. Add filter criteria and display settings.



### Example 29
> **Summary**: Performs hierarchical clustering analysis  on a dataset, using the Ward method and standardizing data for 8 clusters, and then filters local data to display specific brand information.

<!-- Keywords: #HierarchicalClustering, #WardMethod, #LocalDataFilter, #JMPScriptingLanguage, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
clus = dt << Hierarchical Cluster(
	Y( :Saturated fat g, :Cholesterol g, :Sodium mg, :Carbohydrate g, :Dietary fiber g, :Sugars g, :Protein g, :Vitamin A %RDI ),
	Method( "Ward" ),
	Standardize( 1 ),
	Dendrogram Scale( "Distance Scale" ),
	Number of Clusters( 8 )
);
ldf = clus << Local Data Filter(
	Location( {451, 116} ),
	Add Filter(
		columns( :Calories, :Brand ),
		Where( :Brand == "M&M/Mars" ),
		Display( :Brand, Size( 204, 259 ) ),
		Mode( Select( 0 ), Show( 1 ), Include( 1 ) )
	)
);
ldf << Display( :brand, Check box Display );
```

**Code Explanation**:

1. Open data table;
2. Perform hierarchical clustering.
3. Set clustering method to "Ward".
4. Standardize data.
5. Use "Distance Scale" for dendrogram.
6. Specify 8 clusters.
7. Create local data filter.
8. Position filter at (451, 116).
9. Add filter for "Calories" and "Brand".
10. Filter where "Brand" equals "M&M/Mars".



### Example 30
> **Summary**: Performs hierarchical clustering analysis  on a subset of data, using the Ward method and standardizing values, with interactive filtering capabilities.

<!-- Keywords: #HierarchicalClustering, #WardMethod, #DataFiltering, #InteractiveAnalysis, #JMPScriptingLanguage -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Hierarchical Cluster(
	Y( :birth, :death ),
	Method( "Ward" ),
	Standardize( Yes ),
	Number of Clusters( 4 ),
	Local Data Filter(
		Location( {985, 3} ),
		Add Filter( columns( :birth ), Where( :birth >= 15 & :birth <= 35 ) ),
		Mode( Select( 0 ), Show( 1 ), Include( 1 ) )
	), 
);
obj << Automatic Recalc( 0 );
dt << Select Rows( 1 :: 10 );
dt << Exclude();
rpt = Report( obj );
```

**Code Explanation**:

1. Open data table.
2. Perform hierarchical clustering.
3. Use Ward method.
4. Standardize data.
5. Set number of clusters to 4.
6. Enable local data filter.
7. Position filter at (985, 3).
8. Add filter for birth column.
9. Set filter range 15 to 35.
10. Disable automatic recalculation.



### Example 31
> **Summary**: Performs hierarchical clustering analysis  on a data table, filtering birth column between 15 and 35, and generating reports with interactive features.

<!-- Keywords: #HierarchicalClustering, #DataFiltering, #ReportGeneration, #InteractiveFeatures, #JSLScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Hierarchical Cluster(
	Y( :birth, :death ),
	Method( "Ward" ),
	Standardize( Yes ),
	Number of Clusters( 4 ),
	Automatic Recalc( 1 ),
	Local Data Filter(
		Location( {985, 3} ),
		Add Filter( columns( :birth ), Where( :birth >= 15 & :birth <= 35 ) ),
		Mode( Select( 0 ), Show( 1 ), Include( 1 ) )
	), 
);
dt << Select Rows( 1 :: 10 );
dt << Exclude();
rpt = Report( obj );
Close( dt, NoSave );
dt = Open("data_table.jmp");
obj = Hierarchical Cluster(
	Y( :birth, :death ),
	Method( "Ward" ),
	Standardize( Yes ),
	Number of Clusters( 4 ),
	Local Data Filter(
		Location( {985, 3} ),
		Add Filter( columns( :birth ), Where( :birth >= 15 & :birth <= 35 ) ),
		Mode( Select( 0 ), Show( 1 ), Include( 1 ) )
	), 
);
obj << Automatic Recalc( 0 );
dt << Select Rows( 1 :: 10 );
dt << Exclude();
rpt = Report( obj );
```

**Code Explanation**:

1. Open data table.
2. Perform hierarchical clustering.
3. Set cluster method to Ward.
4. Standardize variables.
5. Define 4 clusters.
6. Enable automatic recalculation.
7. Add local data filter.
8. Filter birth column between 15 and 35.
9. Select first 10 rows.
10. Exclude selected rows.
11. Generate report.
12. Close data table without saving.
13. Reopen data table.
14. Repeat clustering process.
15. Disable automatic recalculation.
16. Select first 10 rows.
17. Exclude selected rows.
18. Generate report.



### Example 32
> **Summary**: Performs hierarchical clustering analysis  on a data table, using the Ward method and standardizing data for visualization in a dendrogram report.

<!-- Keywords: #HierarchicalClustering, #WardMethod, #DendrogramReport, #JMPScriptingLanguage, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Hierarchical Cluster(
	Y( :birth, :death ),
	Method( "Ward" ),
	Standardize Data( 1 ),
	Color Clusters( 1 ),
	Mark Clusters( 1 ),
	Cluster Criterion( 1 ),
	Dendrogram Scale( "Distance Scale" ),
	Number of Clusters( 30 ),
	Constellation Plot( 1 ),
	SendToReport( Dispatch( {}, "Dendrogram", OutlineBox, {SetHorizontal( 1 )} ) )
);
rpt1 = obj << Report;
actN1 = (rpt1[Number Col Box( 4 )][5]);
:birth << Set Property( "Missing Value Codes", 0 );
:birth << Set Values( [0, 0, 0, 0, 0, 0, 0, 0, 0, 0] );
obj2 = obj << Redo Analysis;
rpt2 = obj2 << Report;
actN2 = (rpt2[Number Col Box( 4 )][5]);
ans = Equal( actN1, actN2 );
```

**Code Explanation**:

1. Open data table.
2. Perform hierarchical clustering.
3. Set cluster method to Ward.
4. Standardize data.
5. Color clusters.
6. Mark clusters.
7. Set cluster criterion.
8. Use distance scale.
9. Specify number of clusters.
10. Generate constellation plot.



### Example 33
> **Summary**: Performs hierarchical clustering analysis  on a data table, retrieving distance matrices for standardized and non-standardized data, and visualizing the results in reports.

<!-- Keywords: #HierarchicalClustering, #JMPScriptingLanguage, #DataAnalysis, #DistanceMatrix, #ReportVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Hierarchical Cluster( Y( :birth, :death ), Method( "Ward" ), Standardize Data( Yes ), Number of Clusters( 4 ) );
rpt = obj << report;
distYes = rpt[Number Col Box( "Distance" )] << get as matrix;
obj << close window;
obj = dt << Hierarchical Cluster( Y( :birth, :death ), Method( "Ward" ), Standardize Data( 1 ), Number of Clusters( 4 ) );
rpt = obj << report;
dist1 = rpt[Number Col Box( "Distance" )] << get as matrix;
obj << close window;
obj = dt << Hierarchical Cluster( Y( :birth, :death ), Method( "Ward" ), Standardize Data( No ), Number of Clusters( 4 ) );
rpt = obj << report;
distNo = rpt[Number Col Box( "Distance" )] << get as matrix;
obj << close window;
obj = dt << Hierarchical Cluster( Y( :birth, :death ), Method( "Ward" ), Standardize Data( 0 ), Number of Clusters( 4 ) );
rpt = obj << report;
dist0 = rpt[Number Col Box( "Distance" )] << get as matrix;
obj << close window;
```

**Code Explanation**:

1. Open data table.
2. Perform hierarchical clustering.
3. Retrieve distance matrix.
4. Close cluster window.
5. Repeat steps 2-4 without standardizing data.
6. Retrieve distance matrix.
7. Close cluster window.
8. Repeat steps 2-4 with standardization off.
9. Retrieve distance matrix.
10. Close cluster window.



### Example 34
> **Summary**: Performs hierarchical clustering and K-means clustering analysis on a data table, with options for standardization and SOM enablement, and generates reports and biplots.

<!-- Keywords: #HierarchicalClustering, #KMeansClustering, #DataAnalysis, #JMPScriptingLanguage, #Biplot -->

**Code**:
```jsl
ut relative epsilon = 1e-10;
dt = Open("data_table.jmp");
obj = dt << Hierarchical Cluster( Y( :birth, :death ), Method( "Ward" ), Standardize Data( Yes ), Number of Clusters( 4 ) );
rpt = obj << report;
distYes = rpt[Number Col Box( "Distance" )] << get as matrix;
obj << close window;
obj = dt << Hierarchical Cluster( Y( :birth, :death ), Method( "Ward" ), Standardize Data( 1 ), Number of Clusters( 4 ) );
rpt = obj << report;
dist1 = rpt[Number Col Box( "Distance" )] << get as matrix;
obj << close window;
obj = dt << Hierarchical Cluster( Y( :birth, :death ), Method( "Ward" ), Standardize Data( No ), Number of Clusters( 4 ) );
rpt = obj << report;
distNo = rpt[Number Col Box( "Distance" )] << get as matrix;
obj << close window;
obj = dt << Hierarchical Cluster( Y( :birth, :death ), Method( "Ward" ), Standardize Data( 0 ), Number of Clusters( 4 ) );
rpt = obj << report;
dist0 = rpt[Number Col Box( "Distance" )] << get as matrix;
obj << close window;
Close( dt, no save );
dt = Open("data_table.jmp");
obj = K Means Cluster( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ), Number of Clusters( 3 ), SOM( 1 ), Go );
rpt = obj << report;
obj << close window;
obj = K Means Cluster( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ), Number of Clusters( 3 ), SOM( Yes ), Go );
rpt = obj << report;
obj << close window;
obj = K Means Cluster( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ), Number of Clusters( 3 ), SOM( 0 ), Go );
rpt = obj << report;
obj << close window;
obj = K Means Cluster( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ), Number of Clusters( 3 ), SOM( No ), Go );
rpt = obj << report;
obj << close window;
obj = K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	{Number of Clusters( 3 ), Name( "K-Means Clustering" ), Go}
);
obj << Biplot 3D( 1 );
obj << Biplot 3D( 0 );
```

**Code Explanation**:

1. Set relative epsilon.
2. Open data table;
3. Perform hierarchical clustering.
4. Extract distance matrix.
5. Close cluster window.
6. Repeat steps 3-5 for standardized data.
7. Repeat steps 3-5 for unstandardized data.
8. Close birth death dataset.
9. Open data table;
10. Perform K-means clustering without SOM.
11. Close K-means window.
12. Repeat steps 10-11 for SOM enabled.
13. Repeat steps 10-11 for SOM disabled.
14. Perform K-means clustering.
15. Create 3D biplot.
16. Create 2D biplot.



### Example 35
> **Summary**: Performs hierarchical clustering and K-means clustering operations on a data table, saving distance matrices and closing reports as needed.

<!-- Keywords: #JSLScripting, #HierarchicalClustering, #KMeansClustering, #DataAnalysis, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Hierarchical Cluster( Y( :c1, :c2, :c3 ) );
dtDist = obj << Save Distance Matrix;
Close( dt, No Save );
check = Function( {},
	cnt = 0;
	For( i = N Items( Window() ), i >= 1, i--,
		lnchWin = (Window()[i]);
		winTtl = lnchWin << get window title;
		If( winTtl == "Hierarchical Cluster" | winTtl == "K Means Cluster",
			cnt = 1;
			lnchWin[Button Box( 6 )] << Click;
			Break();
		);
	);
);
Cluster();
check();
Hierarchical Cluster();
check();
K Means Cluster();
check();
Cluster( Y( 2 :: 11 ) );
check();
Hierarchical Cluster( Distance Matrix( 1 ) );
check();
KMeans Cluster( Centers( :To John ) );
check();
Cluster( Y( 2 :: 11 ), Type( "Hierarchical" ) );
Current Report() << Close Window( 1 );
Hierarchical Cluster( Y( 2 :: 11 ) );
Current Report() << Close Window( 1 );
Cluster( Y( 2 :: 11 ), Type( "K Means" ) );
Current Report() << Close Window( 1 );
KMeans Cluster( Y( 2 :: 11 ) );
Current Report() << Close Window( 1 );
Hierarchical Cluster( Distance Matrix( 1 ), Label( :Name ) );
Current Report() << Close Window( 1 );
```

**Code Explanation**:

1. Open data table.
2. Perform hierarchical clustering.
3. Save distance matrix.
4. Close data table without saving.
5. Define check function.
6. Call cluster function.
7. Execute check function.
8. Perform hierarchical clustering again.
9. Execute check function.
10. Perform K-means clustering.
11. Execute check function.
12. Perform clustering on selected columns.
13. Execute check function.
14. Perform hierarchical clustering using distance matrix.
15. Execute check function.
16. Perform K-means clustering with specified centers.
17. Execute check function.
18. Perform hierarchical clustering on selected columns.
19. Close first report window.
20. Perform hierarchical clustering on selected columns.
21. Close first report window.
22. Perform K-means clustering on selected columns.
23. Close first report window.
24. Perform K-means clustering on selected columns.
25. Close first report window.
26. Perform hierarchical clustering with labeling.
27. Close first report window.



### Example 36
> **Summary**: Process of launching hierarchical clustering, retrieving combo box items and options, setting combo boxes, and closing data tables without saving.

<!-- Keywords: #JSLScripting, #HierarchicalClustering, #DataAnalysis, #ComboBoxes, #DataTables -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Hierarchical Cluster();
launchWin = Window()[N Items( Window() )];
cItems = launchWin[Combo Box( 1 )] << Get Items;
hcOptions = launchWin[Combo Box( 1 )] << Get Selected;
hcLbl = launchWin[Button Box( 3 )] << Get Button Name;
launchWin[Combo Box( 1 )] << Set( 2 );
kcOptions = launchWin[Combo Box( 1 )] << Get Selected;
kcLbL = launchWin[Button Box( 4 )] << Get Button Name;
Close( dt, No Save );
dt = Open("data_table.jmp");
obj = dt << Hierarchical Cluster( Y( :c1, :c2, :c3 ) );
dtDist = obj << Save Distance Matrix;
Close( dt, No Save );
check = Function( {},
	cnt = 0;
	For( i = N Items( Window() ), i >= 1, i--,
		lnchWin = (Window()[i]);
		winTtl = lnchWin << get window title;
		If( winTtl == "Hierarchical Cluster" | winTtl == "K Means Cluster",
			cnt = 1;
			lnchWin[Button Box( 6 )] << Click;
			Break();
		);
	);
);
Cluster();
check();
Hierarchical Cluster();
check();
K Means Cluster();
check();
Cluster( Y( 2 :: 11 ) );
check();
Hierarchical Cluster( Distance Matrix( 1 ) );
check();
KMeans Cluster( Centers( :To John ) );
check();
Cluster( Y( 2 :: 11 ), Type( "Hierarchical" ) );
Current Report() << Close Window( 1 );
Hierarchical Cluster( Y( 2 :: 11 ) );
Current Report() << Close Window( 1 );
Cluster( Y( 2 :: 11 ), Type( "K Means" ) );
Current Report() << Close Window( 1 );
KMeans Cluster( Y( 2 :: 11 ) );
Current Report() << Close Window( 1 );
Hierarchical Cluster( Distance Matrix( 1 ), Label( :Name ) );
Current Report() << Close Window( 1 );
```

**Code Explanation**:

1. Open data table.
2. Launch hierarchical clustering.
3. Retrieve combo box items.
4. Get selected hierarchical options.
5. Get hierarchical button label.
6. Set combo box to second option.
7. Get selected K-means options.
8. Get K-means button label.
9. Close data table without saving.
10. Reopen data table.



### Example 37
> **Summary**: Performs hierarchical clustering analysis  on a data table, generating a distance matrix and visualizing the results.

<!-- Keywords: #HierarchicalClustering, #DistanceMatrix, #DataVisualization, #JSLScripting, #JMPScriptingLanguage -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Hierarchical Cluster( Y( :c1, :c2, :c3 ) );
dtDist = obj << Save Distance Matrix;
```

**Code Explanation**:

1. Open data table.
2. Perform hierarchical clustering.
3. Save distance matrix.



### Example 38
> **Summary**: Performs hierarchical clustering analysis  on a data table, saving the distance matrix and generating a cluster summary.

<!-- Keywords: #HierarchicalClustering, #DistanceMatrix, #ClusterSummary, #DataAnalysis, #JMPScriptingLanguage -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Hierarchical Cluster( Y( :c1, :c2, :c3 ) );
dt1 = obj << Save Distance Matrix;
obj1 = dt1 << Hierarchical Cluster( Y, Label( :Name ), Distance Matrix( 1 ), );
obj1 << Cluster Summary( 1 );
```

**Code Explanation**:

1. Open data table.
2. Perform hierarchical clustering.
3. Save distance matrix.
4. Open distance matrix table.
5. Perform hierarchical clustering on matrix.
6. Generate cluster summary.



### Example 39
> **Summary**: Performs hierarchical clustering analysis  to identify patterns in age and sex variables, utilizing the Fast Ward method and standardizing data for optimal results.

<!-- Keywords: #HierarchicalClustering, #FastWardMethod, #Standardization, #Dendrogram, #ClusterAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Hierarchical Cluster(
	Y( :age, :sex ),
	Method( "Fast Ward" ),
	Standardize( 1 ),
	Dendrogram Scale( "Even Spacing" ),
	Number of Clusters( 5 )
);
obj << Save Clusters;
obj << Save Display Order;
myClusterID = dt << Get As Matrix( Column( "Cluster" ) );
myClusterOrder = dt << Get As Matrix( Column( "Cluster Order" ) );
rpt = Report( obj );
rpt1 = rpt << parent;
```

**Code Explanation**:

1. Open data table.
2. Perform hierarchical clustering.
3. Specify clustering variables.
4. Choose Fast Ward method.
5. Standardize variables.
6. Set dendrogram spacing.
7. Define number of clusters.
8. Save cluster assignments.
9. Save display order.
10. Extract cluster IDs.
11. Extract cluster order.
12. Generate report object.
13. Navigate to parent report.



### Example 40
> **Summary**: Performs hierarchical clustering analysis  to identify patterns in the Weight and Weight 2 variables, utilizing the Hierarchical Cluster platform.

<!-- Keywords: #HierarchicalClustering, #WeightedVariables, #JMPScriptingLanguage, #DataAnalysis, #ClusterAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Hierarchical Cluster( Y( :Weight, :Weight 2 ) );
```

**Code Explanation**:

1. Open data table;
2. Perform hierarchical clustering analysis.
3. Use Weight and Weight 2 variables.



### Example 41
> **Summary**: Performs hierarchical clustering on columns c1, c2, and c3 in a data table, generating an initial report object and extracting the dendrogram data.

<!-- Keywords: #HierarchicalClustering, #DataAnalysis, #JMPScriptingLanguage, #ReportObject, #Dendrogram -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Hierarchical Cluster( Y( :c1, :c2, :c3 ) );
rpt = obj << report;
dendro1 = rpt[Outline Box( "Hierarchical Clustering" )][If Box( 1 )] << get;
obj << Show Dendrogram( 0 );
rpt = obj << report;
dendro2 = rpt[Outline Box( "Hierarchical Clustering" )][If Box( 1 )] << get;
```

**Code Explanation**:

1. Open data table;
2. Perform hierarchical clustering on columns c1, c2, c3.
3. Retrieve initial report object.
4. Hide dendrogram display.
5. Generate new report object.
6. Extract updated dendrogram data.



### Example 42
> **Summary**: Performs hierarchical clustering analysis  on a subset of data, saving cluster assignments and retrieving cluster details.

<!-- Keywords: #HierarchicalClustering, #DataAnalysis, #JSLScripting, #ClusterAnalysis, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Hierarchical Cluster( Where( :Species == "setosa" ), Y( :Sepal Length, :Sepal Width, :Petal Length, :Petal Width ) );
obj << Save Clusters;
clustCol = Column( dt, "Cluster Where" ) << get as matrix;
clust = obj << Get Clusters;
obj << Data Table Window;
dt1 = Current Data Table();
```

**Code Explanation**:

1. Open data table;
2. Perform hierarchical clustering.
3. Save cluster assignments.
4. Retrieve cluster column.
5. Get cluster details.
6. Display data table window.
7. Assign current data table.



### Example 43
> **Summary**: Performs hierarchical clustering analysis  on columns c1, c2, and c3 in a data table, generating cluster summary without standardization.

<!-- Keywords: #HierarchicalClustering, #JSLScriptingLanguage, #DataAnalysis, #ClusterSummary, #Standardization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj1 = dt << Hierarchical Cluster( Y( :c1, :c2, :c3 ), Standardize( 0 ), Cluster Summary( 1 ), );
```

**Code Explanation**:

1. Open data table;
2. Perform hierarchical clustering.
3. Use columns c1, c2, c3.
4. Do not standardize data.
5. Generate cluster summary.



### Example 44
> **Summary**: Performs hierarchical clustering analysis  to identify patterns in the relationship between height and weight, generating a cluster summary report.

<!-- Keywords: #HierarchicalClustering, #ClusterAnalysis, #DataVisualization, #JMPScriptingLanguage, #StatisticalAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Hierarchical Cluster( Y( :height, :weight ), Cluster Summary( 1 ) );
```

**Code Explanation**:

1. Open data table;
2. Assign data table to variable.
3. Perform hierarchical clustering analysis.
4. Specify variables for clustering.
5. Generate cluster summary report.



### Example 45
> **Summary**: Performs hierarchical clustering and cluster assignment for a dataset, generating a report with cluster summary and calculating population standard deviations.

<!-- Keywords: #HierarchicalClustering, #ClusterAnalysis, #JSLScripting, #DataScience, #MachineLearning -->

**Code**:
```jsl
dt = Open("data_table.jmp");
_mat = dt << get as matrix();
obj = dt << Hierarchical Cluster( Y( 1 :: 4 ), Number of Clusters( 4 ) );
obj << Cluster Summary( 1 );
rpt = obj << report;
clustMeans = (rpt[Outline Box( "Cluster Means" )][Table Box( 1 )] << get as matrix)[0, 3 :: 6];
popStdDev = Std Dev( _mat[0, 1] ) |/ Std Dev( _mat[0, 2] ) |/ Std Dev( _mat[0, 3] ) |/ Std Dev( _mat[0, 4] );
obj << Save Formula for Closest Cluster;
dt << New Column( "Clust Formula",
	Formula(
		IfMin(
			((:Sepal length - clustMeans[1, 1]) / popStdDev[1]) ^ 2 + ((:Sepal width - clustMeans[1, 2]) / popStdDev[2]) ^ 2 + ((
			:Petal length - clustMeans[1, 3]) / popStdDev[3]) ^ 2 + ((:Petal width - clustMeans[1, 4]) / popStdDev[4]) ^ 2,
			1,
			((:Sepal length - clustMeans[2, 1]) / popStdDev[1]) ^ 2 + ((:Sepal width - clustMeans[2, 2]) / popStdDev[2]) ^ 2 + ((
			:Petal length - clustMeans[2, 3]) / popStdDev[3]) ^ 2 + ((:Petal width - clustMeans[2, 4]) / popStdDev[4]) ^ 2,
			2,
			((:Sepal length - clustMeans[3, 1]) / popStdDev[1]) ^ 2 + ((:Sepal width - clustMeans[3, 2]) / popStdDev[2]) ^ 2 + ((
			:Petal length - clustMeans[3, 3]) / popStdDev[3]) ^ 2 + ((:Petal width - clustMeans[3, 4]) / popStdDev[4]) ^ 2,
			3,
			((:Sepal length - clustMeans[4, 1]) / popStdDev[1]) ^ 2 + ((:Sepal width - clustMeans[4, 2]) / popStdDev[2]) ^ 2 + ((
			:Petal length - clustMeans[4, 3]) / popStdDev[3]) ^ 2 + ((:Petal width - clustMeans[4, 4]) / popStdDev[4]) ^ 2,
			4
		)
	)
);
```

**Code Explanation**:

1. Open data table;
2. Convert data to matrix.
3. Perform hierarchical clustering.
4. Display cluster summary.
5. Extract cluster means.
6. Calculate population standard deviations.
7. Save formula for closest cluster.
8. Create new column for cluster formula.
9. Define formula for cluster assignment.
10. Assign cluster based on minimum distance.



### Example 46
> **Summary**: Performs hierarchical clustering analysis  on a specified data table, saving the script to the Script Window and relaunching the analysis.

<!-- Keywords: #HierarchicalClustering, #ScriptWindow, #RelaunchAnalysis, #DataTable, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Hierarchical Cluster( Y( 2 :: 4 ) );
obj << Save Script to Script Window;
For( ii = 1, ii <= N Items( Window() ), ii++,
	If( (Window()[ii] << get Window title) == "Script Window",
		scptStdData = Words( Trim( Window()[ii][Script Box( 1 )] << Get Line Text( 5 ) ), "," )[1];
		Window()[ii] << Close Window;
		Break();
	)
);
obj << Relaunch Analysis;
For( ii = 1, ii <= N Items( Window() ), ii++,
	If( (Window()[ii] << get Window title) == "Hierarchical Cluster",
		clusterLnc = Window()[ii] << get journal;
		Break();
	)
);
```

**Code Explanation**:

1. Open data table.
2. Perform hierarchical clustering.
3. Save script to window.
4. Iterate through windows.
5. Find script window.
6. Extract script line.
7. Close script window.
8. Relaunch analysis.
9. Iterate through windows again.
10. Capture cluster journal.



### Example 47
> **Summary**: Performs hierarchical clustering analysis  on a data table, generating a cluster summary report and extracting journal content from the axis box.

<!-- Keywords: #HierarchicalClustering, #DataAnalysis, #JMPScriptingLanguage, #ClusterSummary, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Hierarchical Cluster( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ), Two Way Clustering );
obj << Cluster Summary( 1 );
rpt = obj << report;
tmp = rpt[Outline Box( "Cluster Summary" )][AxisBox( 1 )] << get journal;
```

**Code Explanation**:

1. Open data table;
2. Perform hierarchical clustering.
3. Set two-way clustering.
4. Generate cluster summary.
5. Retrieve report object.
6. Access cluster summary outline.
7. Get axis box content.
8. Extract journal from axis box.



### Example 48
> **Summary**: Performs hierarchical clustering analysis  on multiple columns, generating a scatterplot matrix and parallel coordinate plots for visualization.

<!-- Keywords: #HierarchicalClustering, #ScatterPlotMatrix, #ParallelCoordinatePlots, #JSLScriptingLanguage, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Hierarchical Cluster( Y( :c1, :c2, :c3 ), Standardize( 0 ), Cluster Summary( 1 ), );
Log Capture( obj << Scatterplot Matrix );
rptScatterPlotMat = Current Report();
obj << Parallel Coord Plots;
Close( dt, No Save );
dt = New Table( "Test", New Column( "Y1", Values( J( 10, 1, 0.45 ) ) ), New Column( "Y2", Values( J( 3, 1, 1 ) |/ J( 7, 1, 2 ) ) ) );
obj = dt << Hierarchical Cluster( Y( :Y1, :Y2 ), Cluster Summary( 1 ), Number of Clusters( 2 ), );
rpt = obj << report;
rSq = rpt[Outline Box( "Column Summary" )][Number Col Box( 1 )] << get as matrix;
```

**Code Explanation**:

1. Open data table;
2. Perform hierarchical clustering on columns c1, c2, c3.
3. Log capture scatterplot matrix.
4. Get current report.
5. Create parallel coordinate plots.
6. Close table without saving.
7. Create new table "Test".
8. Add column "Y1" with 10 values of 0.45.
9. Add column "Y2" with 3 values of 1 and 7 values of 2.
10. Perform hierarchical clustering on columns Y1, Y2 with 2 clusters.



### Example 49
> **Summary**: Performs hierarchical clustering analysis  and extracts cluster method and distance matrix, then relaunches the analysis with a specified number of clusters.

<!-- Keywords: #HierarchicalClustering, #JSLScriptingLanguage, #DataAnalysis, #ClusterMethod, #DistanceMatrix -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Method( "Ward" ),
	Standardize By( "Columns" ),
	Dendrogram Scale( "Distance Scale" ),
	Number of Clusters( 4 ), 
);
rpt = obj << report;
meth = rpt[Text Box( 1 )] << get text;
dist = rpt[Number Col Box( "Distance" )] << get as matrix;
obj << Relaunch Analysis;
For( i = 1, i <= N Items( Window() ), i++,
	If( Window()[i] << get window title == "Hierarchical Cluster",
		Window()[i][Radio Box( 1 )] << Set( 4 );
		Window()[i][Button Box( 5 )] << Click();
		rpt1 = Current Report();
		Break();
	)
);
meth1 = rpt1[Text Box( 1 )] << get text;
dist1 = rpt1[Number Col Box( "Distance" )] << get as matrix;
```

**Code Explanation**:

1. Open data table.
2. Perform hierarchical clustering.
3. Extract cluster method.
4. Extract distance matrix.
5. Relaunch analysis.
6. Loop through windows.
7. Find hierarchical cluster window.
8. Set number of clusters to 4.
9. Click apply button.
10. Extract new cluster method.
11. Extract new distance matrix.



### Example 50
> **Summary**: Process of performing hierarchical clustering on a data table, enabling automatic recalculation and saving the script to the Script Window.

<!-- Keywords: #HierarchicalClustering, #DataTable, #ScriptWindow, #AutomaticRecalculation, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Hierarchical Cluster( Y( :birth, :death ), Label( :country ) );
obj << Automatic Recalc( 1 );
obj << Save Script to Script Window;
For( i = 1, i <= N Items( Window() ), i++,
	If( Window()[i] << get window title == "Script Window",
		lc = ((Window()[i][Script Box( 1 )] << Get Text()));
		Window()[i] << Close Window();
		Break();
	)
);
```

**Code Explanation**:

1. Open data table.
2. Perform hierarchical clustering.
3. Enable automatic recalculation.
4. Save script to script window.
5. Loop through all windows.
6. Find script window.
7. Extract script text.
8. Close script window.
9. Break loop.
10. End script.



### Example 51
> **Summary**: Process of creating a hierarchical cluster object from a data table, selecting all rows, and deleting selected rows.

<!-- Keywords: #HierarchicalClustering, #DataManipulation, #JSLScripting, #DataAnalysis, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Hierarchical Cluster( Y( 2 :: 21 ) );
dt << Select All Rows << Delete Rows;
```

**Code Explanation**:

1. Open data table.
2. Create hierarchical cluster object.
3. Select all rows.
4. Delete selected rows.



### Example 52
> **Summary**: Performs hierarchical clustering on columns 2-21 of a data table, followed by deleting all selected rows and displaying the cluster summary.

<!-- Keywords: #HierarchicalClustering, #DataTableManipulation, #ClusterSummary, #JSLScripting, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Hierarchical Cluster( Y( 2 :: 21 ) );
dt << Select All Rows << Delete Rows;
obj << Cluster Summary;
```

**Code Explanation**:

1. Open data table;
2. Perform hierarchical clustering on columns 2-21.
3. Select all rows in the dataset.
4. Delete all selected rows.
5. Display cluster summary.



### Example 53
> **Summary**: Performs hierarchical clustering and two-way clustering on a subset of data columns, followed by cluster summary and deletion of selected rows.

<!-- Keywords: #HierarchicalClustering, #TwoWayClustering, #DataManipulation, #JSLScripting, #ClusterAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Hierarchical Cluster( Y( 2 :: 21 ) );
dt << Select All Rows << Delete Rows;
  
  
obj << Cluster Summary;
  
obj << Two Way Clustering;
```

**Code Explanation**:

1. Open data table;
2. Perform hierarchical clustering on columns 2-21.
3. Select all rows in the table.
4. Delete all selected rows.
5. Display cluster summary.
6. Perform two-way clustering.



### Example 54
> **Summary**: Performs hierarchical clustering analysis  on a data table, saving cluster results and retrieving modeling type.

<!-- Keywords: #HierarchicalClustering, #DataAnalysis, #JMPScriptingLanguage, #ClusterAnalysis, #ModelingType -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Hierarchical Cluster( Y( :birth, :death ), Label( :country ) );
obj << Save Clusters;
type = dt:Cluster << Get Modeling Type;
```

**Code Explanation**:

1. Open data table.
2. Perform hierarchical clustering.
3. Save cluster results.
4. Retrieve modeling type.



### Example 55
> **Summary**: Performs hierarchical clustering analysis  on a data table, using the Ward method and standardizing variables for optimal grouping.

<!-- Keywords: #HierarchicalClustering, #WardMethod, #Standardization, #DataAnalysis, #JMPScriptingLanguage -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Hierarchical Cluster(
	Y( :Sex, :Age, :Weight, :Oxy, :Runtime, :RunPulse, :RstPulse, :MaxPulse ),
	Method( "Ward" ),
	Standardize( 1 ), 
);
```

**Code Explanation**:

1. Open data table;
2. Assign data table to variable.
3. Perform hierarchical clustering.
4. Specify variables for clustering.
5. Choose Ward method.
6. Standardize data.



### Example 56
> **Summary**: Performs hierarchical clustering analysis  on columns 3 to 8 of a data table, generating parallel coordinate plots and labeling clusters by model.

<!-- Keywords: #HierarchicalClustering, #ParallelCoordinatePlots, #DataVisualization, #JMPScriptingLanguage, #ClusterAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Hierarchical Cluster( Y( 3 :: 8 ), Label( :Model ), Number of Clusters( 3 ) );
obj << Parallel Coord Plots;
obj1 = Current Report();
```

**Code Explanation**:

1. Open data table.
2. Perform hierarchical clustering.
3. Use columns 3 to 8 for analysis.
4. Label clusters by model.
5. Specify 3 clusters.
6. Generate parallel coordinate plots.
7. Retrieve current report object.



### Example 57
> **Summary**: Performs hierarchical clustering analysis  on columns 'birth' and 'death', extracting the number of clusters, and updating the missing value code for 'birth'.

<!-- Keywords: #HierarchicalClustering, #JSLScripting, #DataAnalysis, #ClusterCount, #MissingValueHandling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Hierarchical Cluster( Y( :birth, :death ), Standardize Data( 1 ), );
rpt = obj << report;
nClust = (rpt[Outline Box( "Clustering History" )][Number Col Box( "Number of Clusters" )] << get)[1];
:birth << Set Property( "Missing Value Codes", 0 );
:birth << Set Values( [0, 0] );
obj2 = obj << Redo Analysis;
rpt2 = obj2 << Report;
nClust2 = (rpt2[Outline Box( "Clustering History" )][Number Col Box( "Number of Clusters" )] << get)[1];
```

**Code Explanation**:

1. Open data table;
2. Perform hierarchical clustering on columns "birth" and "death".
3. Get report from clustering analysis.
4. Extract number of clusters from report.
5. Set missing value code for "birth" to 0.
6. Modify values of "birth" to [0, 0].
7. Redo the clustering analysis.
8. Get report from new clustering analysis.
9. Extract number of clusters from new report.
10. Store both cluster counts in variables.



### Example 58
> **Summary**: Performs hierarchical clustering on columns c1, c2, and c3 in a data table, generating cluster summary reports and scatterplot matrices.

<!-- Keywords: #HierarchicalClustering, #ScatterPlotMatrix, #ClusterSummary, #DataVisualization, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Hierarchical Cluster( Y( :c1, :c2, :c3 ), Standardize( 0 ), Cluster Summary( 1 ), );
Log Capture( obj << Scatterplot Matrix );
rptScatterPlotMat = Current Report();
obj << Parallel Coord Plots;
```

**Code Explanation**:

1. Open data table;
2. Perform hierarchical clustering on columns c1, c2, c3.
3. Do not standardize data.
4. Generate cluster summary report.
5. Capture log output.
6. Create scatterplot matrix.
7. Save current report.
8. Generate parallel coordinate plots.



### Example 59
> **Summary**: Calculates distances and cluster counts for hierarchical clustering analysis, utilizing data from a JMP data table.

<!-- Keywords: #HierarchicalClustering, #JSLScriptingLanguage, #DataAnalysis, #ClusterCounting, #DistanceCalculation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Hierarchical Cluster( Y( :c1, :c2, :c3 ), Method( "Centroid" ), Standardize( 0 ) );
rpt = obj << report;
distances = Matrix( rpt[String Col Box( "Distance" )] << get );
leader = rpt[String Col Box( "Leader" )] << get;
joiner = rpt[String Col Box( "Joiner" )] << get;
_mat = dt << get as matrix( {2, 3, 4} );
distanceToFrom = J( N Rows( distances ), 1, 0 );
numClusters = J( N Rows( dt ), 1, 1 );
meanVector = J( N Rows( dt ), 3, 0 );
For( i = 1, i <= N Rows( distances ), i++,
	rowNoLeader = (dt << Get Rows Where( :Name( "To/From" ) == leader[i] ))[1];
	rowNoJoiner = (dt << Get Rows Where( :Name( "To/From" ) == joiner[i] ))[1];
	FromLeader = _mat[rowNoLeader, 0];
	ToJoiner = _mat[rowNoJoiner, 0];
	If( numClusters[rowNoLeader] > 1,
		FromLeader = meanVector[rowNoLeader, 0]
	);
	If( numClusters[rowNoJoiner] > 1,
		ToJoiner = meanVector[rowNoJoiner, 0]
	);
	meanVector[rowNoLeader, 0] = (numClusters[rowNoLeader] * FromLeader + numClusters[rowNoJoiner] * ToJoiner) / (numClusters[rowNoLeader]
	 + numClusters[rowNoJoiner]);
	distanceToFrom[i] = Sqrt( Distance( FromLeader, ToJoiner ) )[1];
	numClusters[rowNoLeader] += numClusters[rowNoJoiner];
);
```

**Code Explanation**:

1. Open data table.
2. Perform hierarchical clustering.
3. Extract cluster report.
4. Retrieve distance data.
5. Retrieve leader data.
6. Retrieve joiner data.
7. Convert data table to matrix.
8. Initialize distance vector.
9. Initialize cluster count vector.
10. Initialize mean vector.



### Example 60
> **Summary**: Performs hierarchical clustering analysis  to identify patterns in a dataset, retrieving cluster reports and extracting distance data for further processing.

<!-- Keywords: #HierarchicalClustering, #JSLScriptingLanguage, #DataAnalysis, #ClusterAnalysis, #DistanceMetrics -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Hierarchical Cluster( Y( :c1, :c2, :c3 ), Method( "Ward" ), Standardize( 0 ) );
rpt = obj << report;
distances = Matrix( rpt[String Col Box( "Distance" )] << get );
leader = rpt[String Col Box( "Leader" )] << get;
joiner = rpt[String Col Box( "Joiner" )] << get;
_mat = dt << get as matrix( {2, 3, 4} );
distanceToFrom = J( N Rows( distances ), 1, 0 );
wardDistanceToFrom = J( N Rows( distances ), 1, 0 );
numClusters = J( N Rows( dt ), 1, 1 );
meanVector = J( N Rows( dt ), 3, 0 );
For( i = 1, i <= N Rows( distances ), i++,
	rowNoLeader = (dt << Get Rows Where( :Name( "To/From" ) == leader[i] ))[1];
	rowNoJoiner = (dt << Get Rows Where( :Name( "To/From" ) == joiner[i] ))[1];
	FromLeader = _mat[rowNoLeader, 0];
	ToJoiner = _mat[rowNoJoiner, 0];
	If( numClusters[rowNoLeader] > 1,
		FromLeader = meanVector[rowNoLeader, 0]
	);
	If( numClusters[rowNoJoiner] > 1,
		ToJoiner = meanVector[rowNoJoiner, 0]
	);
	meanVector[rowNoLeader, 0] = (numClusters[rowNoLeader] * FromLeader + numClusters[rowNoJoiner] * ToJoiner) / (numClusters[rowNoLeader]
	 + numClusters[rowNoJoiner]);
	distanceToFrom[i] = (Distance( FromLeader, ToJoiner ))[1];
	wardDistanceToFrom[i] = Sqrt( distanceToFrom[i] / ((1 / numClusters[rowNoLeader]) + (1 / numClusters[rowNoJoiner])) );
	numClusters[rowNoLeader] += numClusters[rowNoJoiner];
);
```

**Code Explanation**:

1. Open data table.
2. Perform hierarchical clustering.
3. Retrieve cluster report.
4. Extract distance data.
5. Extract leader data.
6. Extract joiner data.
7. Convert data table to matrix.
8. Initialize distance matrices.
9. Initialize cluster count matrix.
10. Initialize mean vector matrix.



### Example 61
> **Summary**: Performs hierarchical clustering analysis  on a data table, retrieving cluster reports and extracting distance matrices to facilitate further linkage calculations.

<!-- Keywords: #HierarchicalClustering, #DataAnalysis, #JSLScripting, #ClusterReports, #DistanceMatrices -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Hierarchical Cluster( Y( :c1, :c2, :c3 ), Method( "Average" ), Standardize( 0 ) );
rpt = obj << report;
distances = Matrix( rpt[String Col Box( "Distance" )] << get );
leader = rpt[String Col Box( "Leader" )] << get;
joiner = rpt[String Col Box( "Joiner" )] << get;
distanceToFrom = J( N Rows( distances ), 1, 0 );
averageLinkageToFrom = J( N Rows( distances ), 1, 0 );
leaderIndexList = {{1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}, {10}};
For( i = 1, i <= N Rows( distances ), i++,
	rowNoLeader = (dt << Get Rows Where( :Name( "To/From" ) == leader[i] ))[1];
	rowNoJoiner = (dt << Get Rows Where( :Name( "To/From" ) == joiner[i] ))[1];
	tempDistance = 0;
	averageLinkageToFrom[i] = tempDistance / (Length( leaderIndexList[rowNoLeader] ) * Length( leaderIndexList[rowNoJoiner] ));
	leaderIndexList[rowNoLeader] = leaderIndexList[rowNoLeader] || leaderIndexList[rowNoJoiner];
	leaderIndexList[rowNoJoiner] = leaderIndexList[rowNoLeader];
);
```

**Code Explanation**:

1. Open data table.
2. Perform hierarchical clustering.
3. Retrieve cluster report.
4. Extract distance matrix.
5. Extract leader column.
6. Extract joiner column.
7. Initialize distanceToFrom matrix.
8. Initialize averageLinkageToFrom matrix.
9. Define leader index list.
10. Loop through distances, calculate linkage.



### Example 62
> **Summary**: Performs hierarchical clustering and distance matrix calculations for a given data table, allowing for repeated clustering with customizable cluster criteria.

<!-- Keywords: #HierarchicalClustering, #DistanceMatrix, #JSLScripting, #DataAnalysis, #ClusterCriteria -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj1 = dt << Hierarchical Cluster( Y( :c1, :c2, :c3 ) );
dtDist = obj1 << Save Distance Matrix;
obj2 = dtDist << Hierarchical Cluster( Y, Label( :Name ), Distance Matrix( 1 ), Cluster Criterion( 1 ) );
obj3 = dtDist << Hierarchical Cluster( Y, Label( :Name ), Distance Matrix( 1 ) );
obj3 << Cluster Criterion( 1 );
dt = New Table( "TestTable",
	New Column( "Labels", Character, "Nominal", Set Values( {"a", "a", "b", "b"} ) ),
	New Column( "a", Set Values( [1, 2, 3, 4] ) ),
	New Column( "b", Set Values( [5, 6, 7, 8] ) )
);
For( i = 1, i <= 10, i++,
	obj = dt << Hierarchical Cluster( Y( :a, :b ), Label( :Labels ), Distance Matrix( 1 ) )
);
```

**Code Explanation**:

1. Open data table.
2. Perform hierarchical clustering.
3. Save distance matrix.
4. Cluster using saved distance matrix.
5. Repeat hierarchical clustering with distance matrix.
6. Set cluster criterion for third object.
7. Create new table with labels.
8. Loop 10 times.
9. Perform hierarchical clustering within loop.
10. End loop.



### Example 63
> **Summary**: Performs hierarchical clustering analysis  using columns c1, c2, and c3 in a data table, with attribute and object IDs set to 'To/From'.

<!-- Keywords: #HierarchicalClustering, #DataTable, #JMPScriptingLanguage, #AttributeID, #ObjectID -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Hierarchical Cluster(
	Y( :c1, :c2, :c3 ),
	Attribute ID( :Name( "To/From" ) ),
	Object ID( :Name( "To/From" ) ),
	Standardize( "Unstandardized" )
);
```

**Code Explanation**:

1. Open table.
2. Perform hierarchical clustering.
3. Use columns c1, c2, c3.
4. Set attribute ID.
5. Set object ID.
6. Do not standardize data.



### Example 64
> **Summary**: Performs hierarchical clustering analysis  on a data table, using the Ward method and robust standardization to generate a report with distance matrix extraction.

<!-- Keywords: #HierarchicalClustering, #WardMethod, #RobustStandardization, #DataAnalysis, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Hierarchical Cluster( Y( :c1, :c2, :c3 ), Method( "Ward" ), Standardize( 0 ), Standardize Robustly( 1 ), );
rpt = obj << report;
dist = Matrix( rpt[Number Col Box( "Distance" )] << get );
```

**Code Explanation**:

1. Open table.
2. Perform hierarchical clustering.
3. Use Ward method.
4. Do not standardize.
5. Use robust standardization.
6. Retrieve report object.
7. Extract distance matrix.



### Example 65
> **Summary**: Performs hierarchical clustering analysis  on a data table using the Average linkage method and generates a report with distance matrix extraction.

<!-- Keywords: #HierarchicalClustering, #AverageLinkage, #DataReport, #DistanceMatrix, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Hierarchical Cluster( Y( :c1, :c2, :c3 ), Method( Average ), Standardize( 0 ) );
rep = Report( obj );
dist = rep[Number Col Box( "Distance" )] << get as matrix;
```

**Code Explanation**:

1. Open data table.
2. Perform hierarchical clustering.
3. Use average linkage method.
4. Do not standardize data.
5. Create report object.
6. Extract distance matrix.



### Example 66
> **Summary**: Performs hierarchical clustering analysis  on a data table, using the single linkage method and retrieving the distance column box as a matrix.

<!-- Keywords: #HierarchicalClustering, #JSLScriptingLanguage, #DataAnalysis, #MatrixOperations, #SingleLinkageMethod -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Hierarchical Cluster( Y( :c1, :c2, :c3 ), Method( Single ), Standardize( 0 ) );
rep = Report( obj );
dist = rep[Number Col Box( "Distance" )] << get as matrix;
```

**Code Explanation**:

1. Open data table;
2. Perform hierarchical clustering.
3. Use single linkage method.
4. Do not standardize data.
5. Retrieve report object.
6. Extract distance column box.
7. Convert distances to matrix.



### Example 67
> **Summary**: Performs hierarchical clustering analysis  on a data table, generating a scatterplot matrix and creating a new column while deleting existing ones.

<!-- Keywords: #HierarchicalClustering, #DataTableManipulation, #ScatterPlotMatrix, #ColumnCreation, #DataDeletion -->

**Code**:
```jsl
dt = Open("data_table.jmp");
hc = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Method( "Ward" ),
	Standardize Data( 1 ),
	Dendrogram Scale( "Distance Scale" ),
	Number of Clusters( 4 ),
	SendToReport( Dispatch( {}, "Dendrogram", OutlineBox, {SetHorizontal( 1 )} ) )
);
dt << New Column( "Col4" );
Log Capture( dt << Delete Columns( {1, 2, 3} ) );
hc << Scatterplot Matrix;
hc << close window;
```

**Code Explanation**:

1. Open data table.
2. Perform hierarchical clustering.
3. Create new column "Col4".
4. Delete columns 1, 2, 3.
5. Generate scatterplot matrix.
6. Close hierarchical cluster window.



### Example 68
> **Summary**: Performs hierarchical clustering and parallel plotting to visualize relationships between variables, with certification values for quality control.

<!-- Keywords: #HierarchicalClustering, #ParallelPlotting, #DataVisualization, #QualityControl, #JMPScriptingLanguage -->

**Code**:
```jsl
dt = Open("data_table.jmp");
hc = Hierarchical Cluster(
	Y( :c1, :c2, :c3 ),
	Method( "Ward" ),
	Standardize( 0 ),
	Color Clusters( 1 ),
	Dendrogram Scale( "Distance Scale" ),
	Number of Clusters( 2 ), 
);
hc << Cluster Summary();
rpt = hc << report;
tb = rpt[Table Box( 2 )];
dt2 = tb << Make Into Data Table;
dt2 << Color or Mark by Column( :cluster );
pp = Parallel Plot(
	Scale Uniformly( 1 ),
	Center at zero( 1 ),
	Y( :c1, :c2, :c3 ),
	SendToReport( Dispatch( {}, "2", ScaleBox, {Min( -2 ), Max( 2 ), Inc( 0.5 ), Minor Ticks( 0 )} ) )
);
cert_ppvals = {values( 0.28278625, 0.08639375, 0.0230125, -1.0456, -0.00835, 0.069295 )};
cert_hcvals = {values( 0.28278625, 0.08639375, 0.0230125, -1.0456, -0.00835, 0.069295 )};
Report( hc )[FrameBox( 4 )] << Copy Frame Settings;
Report( pp )[FrameBox( 1 )] << Paste Frame Settings;
```

**Code Explanation**:

1. Open data table.
2. Perform hierarchical clustering.
3. Generate cluster summary.
4. Extract cluster table.
5. Create new data table from summary.
6. Color data table by cluster.
7. Create parallel plot.
8. Set plot scale and centering.
9. Define certification values for parallel plot.
10. Define certification values for hierarchical clustering.
11. Copy frame settings from hierarchical cluster report.
12. Paste frame settings to parallel plot report.



## K Means Cluster 
### Example 1
> **Summary**: Loads a data table, performs K-Means clustering with varying numbers of clusters (6-15), and generates reports for each analysis. The script also includes interactive features like biplots and report dispatching.

<!-- Keywords: #JMPScriptingLanguage, #KMeansClustering, #DataAnalysis, #ReportGeneration, #InteractiveFeatures -->

**Code**:
```jsl
// K Means Cluster: CD3 to MCB
// Open data table
dt = Open("data_table.jmp");
// K Means Cluster: CD3 to MCB
K Means Cluster(
	Y( :CD3, :CD8, :CD4, :MCB ),
	{Number of Clusters( 6 ),
	"K-Means Clustering"n, Go},
	{Number of Clusters( 7 ),
	"K-Means Clustering"n, Go},
	{Number of Clusters( 8 ),
	"K-Means Clustering"n, Go},
	{Number of Clusters( 9 ),
	"K-Means Clustering"n, Go},
	{Number of Clusters( 10 ),
	"K-Means Clustering"n, Go},
	{Number of Clusters( 11 ),
	"K-Means Clustering"n,
	Go( Biplot 3D( 1 ) )},
	{Number of Clusters( 12 ),
	"K-Means Clustering"n, Go},
	{Number of Clusters( 13 ),
	"K-Means Clustering"n, Go},
	{Number of Clusters( 14 ),
	"K-Means Clustering"n, Go},
	{Number of Clusters( 15 ),
	"K-Means Clustering"n, Go},
	SendToReport(
		Dispatch( {}, "Control Panel",
			OutlineBox,
			{Close( 1 )}
		),
		Dispatch( {},
			"K Means NCluster=6",
			OutlineBox,
			{Close( 1 )}
		),
		Dispatch( {},
			"K Means NCluster=7",
			OutlineBox,
			{Close( 1 )}
		),
		Dispatch( {},
			"K Means NCluster=8",
			OutlineBox,
			{Close( 1 )}
		),
		Dispatch( {},
			"K Means NCluster=9",
			OutlineBox,
			{Close( 1 )}
		),
		Dispatch( {},
			"K Means NCluster=10",
			OutlineBox,
			{Close( 1 )}
		),
		Dispatch( {},
			"K Means NCluster=12",
			OutlineBox,
			{Close( 1 )}
		),
		Dispatch( {},
			"K Means NCluster=13",
			OutlineBox,
			{Close( 1 )}
		),
		Dispatch( {},
			"K Means NCluster=14",
			OutlineBox,
			{Close( 1 )}
		),
		Dispatch( {},
			"K Means NCluster=15",
			OutlineBox,
			{Close( 1 )}
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Perform K Means Clustering.
3. Analyze 6 clusters.
4. Analyze 7 clusters.
5. Analyze 8 clusters.
6. Analyze 9 clusters.
7. Analyze 10 clusters.
8. Analyze 11 clusters with 3D biplot.
9. Analyze 12 clusters.
10. Close unnecessary reports.



### Example 2
> **Summary**: Loads a data table, performs K-Means Cluster analysis on variables CD3, CD8, CD4, and MCB with specific settings, and generates a 3D biplot. The control panel outline box is then closed.

<!-- Keywords: #JSL, #KMeansCluster, #Biplot, #CustomDesign, #DataAnalysis -->

**Code**:
```jsl
// Normal Mixtures
// Open data table
dt = Open("data_table.jmp");
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

**Code Explanation**:

1. Open data table.
2. Run K Means Cluster analysis.
3. Specify variables CD3, CD8, CD4, MCB.
4. Set mixtures tolerance.
5. Set maximum iterations.
6. Set number of starts.
7. Disable outlier cluster.
8. Disable diagonal variance.
9. Set number of clusters to 6.
10. Use normal mixtures method.
11. Generate 3D biplot.
12. Close control panel outline box.



### Example 3
> **Summary**: Selects and clusters data rows using K-Means algorithm to identify patterns in Sepal Length, Width, Petal Length, and Width.

<!-- Keywords: #JSLScriptingLanguage, #KMeansClustering, #DataSelection, #ParallelCoordinatePlots, #CustomDesign -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << select rows( 1 :: 15 );
dt << select rows( 51 :: 65 );
dt << select rows( 101 :: 115 );
km = dt << K Means Cluster(
	Y( :Sepal Length, :Sepal Width, :Petal length, :Petal width ),
	{Number of Clusters( 3 ), K Means Cluster, Go( Parallel Coord Plots )}, 
);
```

**Code Explanation**:

1. Open data table;
2. Select first 15 rows.
3. Select next 15 rows.
4. Select last 15 rows.
5. Perform K Means Clustering.
6. Use Sepal Length, Width.
7. Use Petal Length, Width.
8. Set number of clusters to 3.
9. Generate Parallel Coordinate Plots.



### Example 4
> **Summary**: Selects and clusters data rows using K Means Cluster, generating parallel coordinate plots in JMP.

<!-- Keywords: #JMPScriptingLanguage, #K-MeansClustering, #DataSelection, #ParallelCoordinatePlots, #CustomDesign -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << select rows( 1 :: 15 );
dt << select rows( 51 :: 65 );
dt << select rows( 101 :: 115 );
km = dt << K Means Cluster(
	Y( :Sepal Length, :Sepal Width, :Petal length, :Petal width ),
	{Number of Clusters( 3 ), K Means Cluster, Go( Parallel Coord Plots )}, 
);
km << journal();
```

**Code Explanation**:

1. Open data table.
2. Select first 15 rows.
3. Select next 15 rows.
4. Select last 15 rows.
5. Perform K Means clustering.
6. Specify cluster variables.
7. Set number of clusters to 3.
8. Use K Means Cluster method.
9. Generate parallel coordinate plots.
10. Output results to journal.



### Example 5
> **Summary**: Runs K-Means clustering analysis on CD3 and CD8 variables, generating parallel coordinate plots and a biplot for the first cluster.

<!-- Keywords: #JMPScriptingLanguage, #KMeansClustering, #DataAnalysis, #ParallelCoordinatePlots, #Biplot -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = K Means Cluster(
	Y( :CD3, :CD8 ),
	{Number of Clusters( 3 ), Name( "K-Means Clustering" ), Go( Parallel Coord Plots, Biplot( 1 ) )},
	SendToReport( Dispatch( {}, "Control Panel", OutlineBox, {Close( 1 )} ) )
);
```

**Code Explanation**:

1. Open data table;
2. Perform K-Means clustering.
3. Analyze CD3 and CD8 variables.
4. Set number of clusters to 3.
5. Generate parallel coordinate plots.
6. Create biplot for first cluster.
7. Close control panel outline box.
8. Display clustering results.
9. Save analysis output.
10. Exit script.



### Example 6
> **Summary**: Runs K-Means clustering on a subset of columns in a data table, generating parallel coordinate plots and 3D biplots, and retrieving cluster method and number of clusters.

<!-- Keywords: #JSLScriptingLanguage, #KMeansClustering, #ParallelCoordinatePlots, #Biplot, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << K Means Cluster(
	Y( 2 :: 7 ),
	{Number of Clusters( 3 ), Name( "K-Means Clustering" ), Go( Parallel Coord Plots, Biplot( 1 ), Biplot 3D( 1 ) )}
);
rpt = obj << report;
method = rpt[Combo Box( 1 )] << get;
noClust = rpt[Number Edit Box( 1 )] << get;
```

**Code Explanation**:

1. Open data table;
2. Perform K Means clustering.
3. Select columns 2 to 7.
4. Set number of clusters to 3.
5. Generate parallel coordinate plots.
6. Create biplot.
7. Generate 3D biplot.
8. Retrieve cluster method.
9. Get number of clusters.
10. Store results in variables.



### Example 7
> **Summary**: Runs K-Means clustering analysis on a dataset, generating reports and 3D biplots with varying settings for Self-Organizing Maps (SOM) and number of clusters.

<!-- Keywords: #JSLScripting, #KMeansClustering, #SelfOrganizingMaps, #DataVisualization, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = K Means Cluster( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ), Number of Clusters( 3 ), SOM( 1 ), Go );
rpt = obj << report;
obj << close window;
obj = K Means Cluster( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ), Number of Clusters( 3 ), SOM( Yes ), Go );
rpt = obj << report;
obj << close window;
obj = K Means Cluster( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ), Number of Clusters( 3 ), SOM( 0 ), Go );
rpt = obj << report;
obj << close window;
obj = K Means Cluster( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ), Number of Clusters( 3 ), SOM( No ), Go );
rpt = obj << report;
obj << close window;
obj = K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	{Number of Clusters( 3 ), Name( "K-Means Clustering" ), Go}
);
obj << Biplot 3D( 1 );
obj << Biplot 3D( 0 );
```

**Code Explanation**:

1. Open data table;
2. Run K-Means Cluster with SOM=1.
3. Get cluster report.
4. Close cluster window.
5. Run K-Means Cluster with SOM=Yes.
6. Get cluster report.
7. Close cluster window.
8. Run K-Means Cluster with SOM=0.
9. Get cluster report.
10. Close cluster window.
11. Run K-Means Cluster with SOM=No.
12. Get cluster report.
13. Close cluster window.
14. Run K-Means Cluster with default settings.
15. Create 3D biplot.
16. Remove 3D biplot.



### Example 8
> **Summary**: Runs K-Means clustering on a filtered data table to identify 6 clusters, with normal mixtures enabled and cluster assignments saved.

<!-- Keywords: #JSLScriptingLanguage, #KMeansClustering, #DataTableManipulation, #CustomDesign, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << K Means Cluster( Where( :species == "" ), Y( 1 :: 4 ), {Number of Clusters( 6 ), Normal Mixtures, Go}, );
obj << Save Clusters;
clustCol = Column( dt, "Cluster" ) << get as matrix;
obj << Save Cluster Formula;
clustFormCol = Column( dt, "Cluster Formula Where" ) << get as matrix;
obj << Data Table Window;
dt1 = Current Data Table();
```

**Code Explanation**:

1. Open data_table data
2. Perform K-Means clustering.
3. Filter rows where species is empty.
4. Use columns 1 to 4 for analysis.
5. Set number of clusters to 6.
6. Enable normal mixtures.
7. Execute clustering.
8. Save cluster assignments.
9. Extract cluster column as matrix.
10. Save cluster formula.



### Example 9
> **Summary**: Runs the K-Means clustering process on a data table, generating reports for each species and excluding rows based on specific conditions.

<!-- Keywords: #JSLScripting, #KMeansClustering, #DataExclusion, #CustomDesign, #JMPScriptingLanguage -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << K Means Cluster( Y( 1 :: 4 ), By( :Species ), Go );
rpt = obj << report;
CCC_By_setosa = rpt[1][Number Col Box( "CCC" )] << get as matrix;
CCC_By_versicolor = rpt[2][Number Col Box( "CCC" )] << get as matrix;
CCC_By_virginica = rpt[3][Number Col Box( "CCC" )] << get as matrix;
dt << Select Where( :Species != "setosa" );
dt << Exclude;
obj1 = dt << K Means Cluster( Y( 1 :: 4 ), Go );
rpt1 = obj1 << report;
setosa_CCC = rpt1[1][Number Col Box( "CCC" )] << get as matrix;
dt << Exclude( 0 );
dt << Select Where( :Species != "versicolor" );
dt << Exclude;
obj2 = dt << K Means Cluster( Y( 1 :: 4 ), Go );
rpt2 = obj2 << report;
versicolor_CCC = rpt2[1][Number Col Box( "CCC" )] << get as matrix;
dt << Exclude( 0 );
dt << Select Where( :Species != "virginica" );
dt << Exclude;
obj2 = dt << K Means Cluster( Y( 1 :: 4 ), Go );
rpt2 = obj2 << report;
virginica_CCC = rpt2[1][Number Col Box( "CCC" )] << get as matrix;
dt << Exclude( 0 );
```

**Code Explanation**:

1. Open data table;
2. Perform K-Means clustering by Species.
3. Extract CCC report for setosa.
4. Extract CCC report for versicolor.
5. Extract CCC report for virginica.
6. Select non-setosa rows.
7. Exclude selected rows.
8. Perform K-Means clustering on remaining data.
9. Extract CCC report for setosa-only cluster.
10. Reset row exclusions.



### Example 10
> **Summary**: Runs K-Means clustering on a data table, grouping by the Species variable and generating a biplot in 3D.

<!-- Keywords: #JMPScriptingLanguage, #KMeansClustering, #DataVisualization, #CustomDesign, #Biplot -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << K Means Cluster( Y( 1 :: 4 ), By( :Species ), Go );
```

**Code Explanation**:

1. Open data table;
2. Perform K-Means clustering.
3. Analyze all four variables.
4. Group by Species variable.
5. Execute the clustering process.



### Example 11
> **Summary**: Runs K-Means Cluster analysis on a data table, saving cluster assignments and formulas, and retrieving CCC values for setosa, versicolor, and virginica species.

<!-- Keywords: #JSLScriptingLanguage, #KMeansCluster, #DataAnalysis, #CustomDesign, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << K Means Cluster( Where( :species == "" ), Y( 1 :: 4 ), {Number of Clusters( 6 ), Normal Mixtures, Go}, );
obj << Save Clusters;
clustCol = Column( dt, "Cluster" ) << get as matrix;
obj << Save Cluster Formula;
clustFormCol = Column( dt, "Cluster Formula Where" ) << get as matrix;
obj << Data Table Window;
dt1 = Current Data Table();
Close( dt, No Save );
Close( dt1, No Save );
dt = Open("data_table.jmp");
obj = dt << K Means Cluster( Y( 1 :: 4 ), By( :Species ), Go );
rpt = obj << report;
CCC_By_setosa = rpt[1][Number Col Box( "CCC" )] << get as matrix;
CCC_By_versicolor = rpt[2][Number Col Box( "CCC" )] << get as matrix;
CCC_By_virginica = rpt[3][Number Col Box( "CCC" )] << get as matrix;
dt << Select Where( :Species != "setosa" );
dt << Exclude;
obj1 = dt << K Means Cluster( Y( 1 :: 4 ), Go );
rpt1 = obj1 << report;
setosa_CCC = rpt1[1][Number Col Box( "CCC" )] << get as matrix;
dt << Exclude( 0 );
dt << Select Where( :Species != "versicolor" );
dt << Exclude;
obj2 = dt << K Means Cluster( Y( 1 :: 4 ), Go );
rpt2 = obj2 << report;
versicolor_CCC = rpt2[1][Number Col Box( "CCC" )] << get as matrix;
dt << Exclude( 0 );
dt << Select Where( :Species != "virginica" );
dt << Exclude;
obj2 = dt << K Means Cluster( Y( 1 :: 4 ), Go );
rpt2 = obj2 << report;
virginica_CCC = rpt2[1][Number Col Box( "CCC" )] << get as matrix;
dt << Exclude( 0 );
```

**Code Explanation**:

1. Open data table;
2. Perform K Means Cluster analysis.
3. Save cluster assignments.
4. Retrieve cluster column as matrix.
5. Save cluster formula.
6. Retrieve cluster formula column as matrix.
7. Display data table window.
8. Close original data tables without saving.
9. Open data table;
10. Perform K Means Cluster analysis by species.
11. Retrieve CCC for setosa.
12. Retrieve CCC for versicolor.
13. Retrieve CCC for virginica.
14. Exclude non-setosa species.
15. Perform K Means Cluster analysis.
16. Retrieve CCC for setosa.
17. Reset exclusion.
18. Exclude non-versicolor species.
19. Perform K Means Cluster analysis.
20. Retrieve CCC for versicolor.
21. Reset exclusion.
22. Exclude non-virginica species.
23. Perform K Means Cluster analysis.
24. Retrieve CCC for virginica.
25. Reset exclusion.



### Example 12
> **Summary**: Runs K-Means clustering on a data table, setting the number of clusters to 3 and disabling standardization, then saves cluster assignments and formulas.

<!-- Keywords: #JMPScriptingLanguage, #KMeansClustering, #DataTable, #CustomDesign, #ClusterAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << K Means Cluster(
	Y( :skull length, :teeth row ),
	{Number of Clusters( 3 ), Name( "K-Means Clustering" ), Go},
	Standardize Data( 0 )
);
obj << Save Clusters;
obj << Save Cluster Formula;
expCLabels = Column( "Cluster" ) << get as matrix;
obsCLabels = Column( "Cluster Formula" ) << get as matrix;
```

**Code Explanation**:

1. Open data table;
2. Perform K-Means clustering.
3. Set number of clusters to 3.
4. Disable data standardization.
5. Save cluster assignments.
6. Save cluster formula.
7. Retrieve expected cluster labels.
8. Retrieve observed cluster labels.



### Example 13
> **Summary**: Runs K-means clustering on a data table, standardizing the data and saving cluster assignments and formulas.

<!-- Keywords: #JMPScriptingLanguage, #KMeansClustering, #DataStandardization, #ClusterAnalysis, #CustomDesign -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << K Means Cluster(
	Y( :skull length, :teeth row ),
	{Number of Clusters( 3 ), Name( "K-Means Clustering" ), Go},
	Standardize Data( 1 )
);
obj << Save Clusters;
obj << Save Cluster Formula;
expCLabels = Column( "Cluster" ) << get as matrix;
obsCLabels = Column( "Cluster Formula" ) << get as matrix;
```

**Code Explanation**:

1. Open table.
2. Perform K-means clustering.
3. Set number of clusters to 3.
4. Standardize data.
5. Save cluster assignments.
6. Save cluster formula.
7. Retrieve expected cluster labels.
8. Retrieve observed cluster labels.



### Example 14
> **Summary**: Runs the K-Means clustering process on a specified data table, with individual column scaling and cluster formula saving.

<!-- Keywords: #JMPScriptingLanguage, #KMeansClustering, #DataTableManipulation, #CustomDesign, #ClusterAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << K Means Cluster(
	Y( :skull length, :teeth row, :palatine foramen, :jaw length ),
	{SOM Bandwidth( 0.433012701892219 ), Number of Clusters( 3 ), SOM, Go},
	Columns Scaled Individually( 1 )
);
obj << Save Clusters;
obj << Save Cluster Formula;
expCLabels = Column( "Cluster" ) << get as matrix;
obsCLabels = Column( "Cluster Formula" ) << get as matrix;
```

**Code Explanation**:

1. Open table.
2. Perform K Means Cluster.
3. Specify cluster variables.
4. Set clustering parameters.
5. Scale columns individually.
6. Save clusters.
7. Save cluster formula.
8. Get expected cluster labels.
9. Get observed cluster labels.
10. Convert labels to matrices.



### Example 15
> **Summary**: Runs K-Means clustering on a data table, specifying cluster variables and number of clusters, with SOM bandwidth adjustment and column scaling.

<!-- Keywords: #JSLScriptingLanguage, #KMeansClustering, #SOMMethod, #DataTableManipulation, #CustomDesign -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << K Means Cluster(
	Y( :skull length, :teeth row, :palatine foramen, :jaw length ),
	{SOM Bandwidth( 0.433012701892219 ), Number of Clusters( 3 ), SOM, Go},
	Columns Scaled Individually( 0 )
);
obj << Save Clusters;
obj << Save Cluster Formula;
expCLabels = Column( "Cluster" ) << get as matrix;
obsCLabels = Column( "Cluster Formula" ) << get as matrix;
```

**Code Explanation**:

1. Open table.
2. Perform K Means Cluster.
3. Specify cluster variables.
4. Set SOM Bandwidth.
5. Define number of clusters.
6. Use SOM method.
7. Execute clustering.
8. Scale columns individually.
9. Save cluster assignments.
10. Save cluster formula.



### Example 16
> **Summary**: Runs K-Means clustering and SOM analysis on a data table, saving cluster results and formulas, and retrieving expected and observed cluster labels.

<!-- Keywords: #JMPScriptingLanguage, #KMeansClustering, #Self-OrganizingMaps, #DataAnalysis, #CustomDesign -->

**Code**:
```jsl
ut relative epsilon = 1e-10;
dt = Open("data_table.jmp");
obj = dt << K Means Cluster(
	Y( :skull length, :teeth row ),
	{Number of Clusters( 3 ), Name( "K-Means Clustering" ), Go},
	Standardize Data( 0 )
);
obj << Save Clusters;
obj << Save Cluster Formula;
expCLabels = Column( "Cluster" ) << get as matrix;
obsCLabels = Column( "Cluster Formula" ) << get as matrix;
Close( dt, no save );
dt = Open("data_table.jmp");
obj = dt << K Means Cluster(
	Y( :skull length, :teeth row ),
	{Number of Clusters( 3 ), Name( "K-Means Clustering" ), Go},
	Standardize Data( 1 )
);
obj << Save Clusters;
obj << Save Cluster Formula;
expCLabels = Column( "Cluster" ) << get as matrix;
obsCLabels = Column( "Cluster Formula" ) << get as matrix;
Close( dt, no save );
dt = Open("data_table.jmp");
obj = dt << K Means Cluster(
	Y( :skull length, :teeth row, :palatine foramen, :jaw length ),
	{SOM Bandwidth( 0.433012701892219 ), Number of Clusters( 3 ), SOM, Go},
	Columns Scaled Individually( 1 )
);
obj << Save Clusters;
obj << Save Cluster Formula;
expCLabels = Column( "Cluster" ) << get as matrix;
obsCLabels = Column( "Cluster Formula" ) << get as matrix;
Close( dt, no save );
dt = Open("data_table.jmp");
obj = dt << K Means Cluster(
	Y( :skull length, :teeth row, :palatine foramen, :jaw length ),
	{SOM Bandwidth( 0.433012701892219 ), Number of Clusters( 3 ), SOM, Go},
	Columns Scaled Individually( 0 )
);
obj << Save Clusters;
obj << Save Cluster Formula;
expCLabels = Column( "Cluster" ) << get as matrix;
obsCLabels = Column( "Cluster Formula" ) << get as matrix;
```

**Code Explanation**:

1. Set relative epsilon.
2. Open data table.
3. Perform K Means Cluster analysis.
4. Save cluster results.
5. Save cluster formula.
6. Get expected cluster labels.
7. Get observed cluster labels.
8. Close data table without saving.
9. Repeat steps 2-8 with standardized data.
10. Perform SOM clustering with individual scaling.
11. Save cluster results.
12. Save cluster formula.
13. Get expected cluster labels.
14. Get observed cluster labels.
15. Perform SOM clustering without individual scaling.
16. Save cluster results.
17. Save cluster formula.



## Cluster using Subset
### Example 1
> **Summary**: Runs text analysis and visualization for the Final Narrative column, utilizing Text Explorer to generate word clouds and perform latent class analysis with 5 clusters.

<!-- Keywords: #TextExplorer, #LatentClassAnalysis, #WordClouds, #JMPScriptingLanguage, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp") << Subset( Rows( 1 :: 100 ) );
te = dt << Text Explorer(
	Text Columns( :Final Narrative ),
	Show Word Cloud( 1 ),
	Latent Class Analysis(
		Number of Clusters( 5 ),
		Maximum Number of Terms( 25 ),
		Minimum Term Frequency( 10 ),
		Word Clouds by Cluster( 1 )
	),
	Discriminant Analysis(
		Column( :Weather Condition ),
		Maximum Number of Terms( 25 ),
		Minimum Term Frequency( 10 ),
		Weighting( "TF IDF" ),
		Number of Singular Vectors( 100 ),
		Canonical Plot( 1, N Canon( 2 ) )
	),
	Layout( "Centered" ),
	Coloring( "Arbitrary Colors" ),
	Tokenizing( "Basic Words" ),
	Minimum Characters per Word( 8 ),
	Maximum Characters per Word( 8 ),
	Maximum Number of Phrases( 25 ),
	Language( "English" ),
	SendToReport(
		Dispatch( {}, "", IfBox, {Set Summary Behavior( "Visible" )} ),
		Dispatch( {"Term and Phrase Lists"}, "", TableBox, {Set Summary Behavior( "Collapse" )} ),
		Dispatch( {"Latent Class Analysis for 5 Clusters", "MDS Plot"}, "1", ScaleBox,
			{Min( -10.8333333333333 ), Max( 15.8333333333333 ), Inc( 5 ), Minor Ticks( 1 )}
		), 
	)
);
```

**Code Explanation**:

1. Open data_table data
2. Subset first 100 rows.
3. Launch Text Explorer.
4. Analyze Final Narrative column.
5. Show word cloud.
6. Perform latent class analysis.
7. Set 5 clusters.
8. Limit terms to 25.
9. Require minimum term frequency of 10.
10. Display word clouds by cluster.



### Example 2
> **Summary**: Analyze and visualize text data in a JMP report, including word cloud generation, latent class analysis, and discriminant analysis.

<!-- Keywords: #JMPScriptingLanguage, #TextExplorer, #LatentClassAnalysis, #DiscriminantAnalysis, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp") << Subset( Rows( 1 :: 100 ) );
te = dt << Text Explorer(
	Text Columns( :Final Narrative ),
	Show Word Cloud( 1 ),
	Latent Class Analysis(
		Number of Clusters( 5 ),
		Maximum Number of Terms( 25 ),
		Minimum Term Frequency( 10 ),
		Word Clouds by Cluster( 1 )
	),
	Discriminant Analysis(
		Column( :Weather Condition ),
		Maximum Number of Terms( 25 ),
		Minimum Term Frequency( 10 ),
		Weighting( "TF IDF" ),
		Number of Singular Vectors( 100 ),
		Canonical Plot( 1, N Canon( 2 ) )
	),
	Layout( "Centered" ),
	Coloring( "Arbitrary Colors" ),
	Tokenizing( "Basic Words" ),
	Minimum Characters per Word( 8 ),
	Maximum Characters per Word( 8 ),
	Maximum Number of Phrases( 25 ),
	Language( "English" ),
	SendToReport(
		Dispatch( {}, "", IfBox, {Set Summary Behavior( "Visible" )} ),
		Dispatch( {"Term and Phrase Lists"}, "", TableBox, {Set Summary Behavior( "Collapse" )} ),
		Dispatch( {"Latent Class Analysis for 5 Clusters", "MDS Plot"}, "1", ScaleBox,
			{Min( -10.8333333333333 ), Max( 15.8333333333333 ), Inc( 5 ), Minor Ticks( 1 )}
		), 
	)
);
(te << Report)[Table Box( 2 )] << Set Selected Rows( [2] );
```

**Code Explanation**:

1. Open data table.
2. Subset first 100 rows.
3. Launch Text Explorer.
4. Analyze Final Narrative column.
5. Show word cloud.
6. Perform latent class analysis.
7. Set number of clusters to 5.
8. Configure latent class analysis parameters.
9. Conduct discriminant analysis.
10. Set discriminant analysis parameters.
11. Adjust layout and appearance.
12. Customize tokenization settings.
13. Modify report summary behavior.
14. Collapse term and phrase lists.
15. Adjust MDS plot scale.
16. Select second row in table box.



## Cluster using New Column
### Example 1
> **Summary**: Performs hierarchical clustering analysis  on a data table, generating distance matrices and visualizing the results.

<!-- Keywords: #JSLScripting, #HierarchicalClustering, #DataAnalysis, #DistanceMatrix, #Visualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "Sex Continuous", Formula( If( :Sex == "F", 1, 2 ) ) );
dt:Sex Continuous << Delete Formula;
hclust = Expr(
	dt << Hierarchical Cluster( Y( :Sex Continuous, :Age, :Weight, :Oxy, :Runtime, :RunPulse, :RstPulse, :MaxPulse ) )
);
dt:Sex Continuous[1 :: 3] = 0;
dt:Sex Continuous << Set Property( "Missing Value Codes", {0} );
obj1 = Eval( Name Expr( hclust ) );
dist1 = Matrix( Report( obj1 )[Number Col Box( "Distance" )] << get );
dt:Sex Continuous[1 :: 3] = .;
obj2 = Eval( Name Expr( hclust ) );
dist2 = Matrix( Report( obj2 )[Number Col Box( "Distance" )] << get );
```

**Code Explanation**:

1. Open data_table data
2. Create new column "Sex Continuous".
3. Define formula for "Sex Continuous".
4. Delete formula from "Sex Continuous".
5. Define hierarchical clustering expression.
6. Set first three "Sex Continuous" values to 0.
7. Set missing value codes for "Sex Continuous".
8. Execute hierarchical clustering with modified data.
9. Retrieve distance matrix from first clustering result.
10. Reset first three "Sex Continuous" values to missing.
11. Execute hierarchical clustering again with original data.
12. Retrieve distance matrix from second clustering result.



### Example 2
> **Summary**: Performs hierarchical clustering analysis  on a data table, generating a report and extracting the second text box content.

<!-- Keywords: #HierarchicalClustering, #DataAnalysis, #JMPScriptingLanguage, #ReportGeneration, #TextProcessing -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "Empty", Numeric );
obj = dt << Hierarchical Cluster(
	Y( :height, :weight, :Empty ),
	Method( "Fast Ward" ),
	Standardize Data( 1 ),
	Missing value imputation( 1 )
);
rpt = obj << report;
txt = rpt["Hierarchical Clustering"][Text Box( 2 )] << get text;
```

**Code Explanation**:

1. Open data table.
2. Add new numeric column.
3. Perform hierarchical clustering.
4. Use Fast Ward method.
5. Standardize data.
6. Impute missing values.
7. Generate cluster report.
8. Extract hierarchical clustering section.
9. Retrieve second text box content.
10. Assign text to variable.



## Cluster using Lock Data Table
### Example 1
> **Summary**: Performs hierarchical clustering analysis  on a data table, capturing log output and generating a distance matrix.

<!-- Keywords: #JSLScripting, #HierarchicalClustering, #DataAnalysis, #DistanceMatrix, #LogCapture -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Lock Data Table( 1 );
Log Capture(
	obj = dt << Hierarchical Cluster(
		Y( :age, :sex ),
		Save Constellation Coordinates,
		Save Clusters,
		Save Display Order,
		Save Cluster Hierarchy,
		Save Cluster Tree,
		Save Distance Matrix
	)
);
dt << Lock Data Table( 0 );
Close( dt, No Save );
dt = New Table( "outputnomiss_small_onesex.sas7bdat",
	New Column( "sex", Set Values( {2, 2} ) ),
	New Column( "_TYPE_", Character, Nominal, Set Values( {CORR, CORR} ) ),
	New Column( "_NAME_", Character, Nominal, Set Values( {numgeno31, numgeno32} ) ),
	New Column( "numgeno25", Set Values( {0.1, 0.130465614610688} ) ),
	New Column( "numgeno26", Set Values( {., .} ) ),
	New Column( "numgeno27", Set Values( {0.232889003895833, -0.208890048326718} ) ),
	New Column( "numgeno30", Set Values( {0.269679944985297, 0.219899748566771} ) ), 
);
Column( "sex" ) << label( 1 );
Column( "_NAME_" ) << label( 1 );
obj1 = dt << Hierarchical Cluster(
	By( :sex ),
	Y( Name( "numgeno25" ), Name( "numgeno26" ), Name( "numgeno27" ), Name( "numgeno30" ) ),
	Method( "Centroid" ),
	Missing value imputation( 1 ),
	Standardize( 0 ),
	ColorClusters( 1 ),
	Two way clustering,
	Number of Clusters( 3 ),
	Color Map( Blue to Gray to Red ),
	Legend( 1 ),
	Dendrogram Scale( Distance Scale )
);
dist1 = Report( obj1 )[Outline Box( "Clustering History" )][Number Col Box( "Distance" )] << get as matrix;
 
obj2 = dt << Hierarchical Cluster(
	By( :sex ),
	Y( Name( "numgeno25" ), Name( "numgeno26" ), Name( "numgeno27" ), Name( "numgeno30" ) ),
	Method( "Centroid" ),
	Missing value imputation( 1 ),
	Standardize( 0 ),
	ColorClusters( 1 ),
	Two way clustering,
	Number of Clusters( 3 ),
	Color Map( Blue to Gray to Red ),
	Legend( 1 ),
	Dendrogram Scale( Distance Scale )
);
dist2 = Report( obj1 )[Outline Box( "Clustering History" )][Number Col Box( "Distance" )] << get as matrix;
```

**Code Explanation**:

1. Open data table.
2. Lock data table.
3. Perform hierarchical clustering.
4. Capture log output.
5. Unlock data table.
6. Close data table without saving.
7. Create new data table.
8. Label columns.
9. Perform hierarchical clustering by sex.
10. Extract distance matrix.



### Example 2
> **Summary**: Performs hierarchical clustering analysis  on a data table, using age and sex as variables, and saves various results including constellation coordinates, clusters, display order, cluster hierarchy, cluster tree, and distance matrix.

<!-- Keywords: #JSL, #HierarchicalClustering, #DataAnalysis, #JMPScriptingLanguage, #LogCapture -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Lock Data Table( 1 );
Log Capture(
	obj = dt << Hierarchical Cluster(
		Y( :age, :sex ),
		Save Constellation Coordinates,
		Save Clusters,
		Save Display Order,
		Save Cluster Hierarchy,
		Save Cluster Tree,
		Save Distance Matrix
	)
);
dt << Lock Data Table( 0 );
```

**Code Explanation**:

1. Open data table;
2. Lock data table.
3. Start log capture.
4. Perform hierarchical clustering.
5. Use age and sex as variables.
6. Save constellation coordinates.
7. Save clusters.
8. Save display order.
9. Save cluster hierarchy.
10. Save cluster tree.
11. Save distance matrix.
12. Stop log capture.
13. Unlock data table.



## Cluster using N Rows
### Example 1
> **Summary**: Performs hierarchical clustering analysis  on a data table, generating a report with cubic clustering criterion values.

<!-- Keywords: #HierarchicalClustering, #DataAnalysis, #JMPScriptingLanguage, #WardMethod, #CubicClusteringCriterion -->

**Code**:
```jsl
dt = Open("data_table.jmp");
nR = N Rows( dt );
obj = dt << Hierarchical Cluster( Y( :Weight, :Oxy ), Label( :Name ), Method( "Ward" ), Standardize( 1 ), Cluster Criterion( 1 ), );
rpt = obj << report;
nClust = rpt[Outline Box( "Cubic Clustering Criterion" )][Number Col Box( "CCC" )] << get as matrix;
```

**Code Explanation**:

1. Open data table;
2. Get number of rows.
3. Perform hierarchical clustering.
4. Specify weight and oxy variables.
5. Use name for labels.
6. Apply Ward method.
7. Standardize data.
8. Use CCC criterion.
9. Retrieve report object.
10. Extract CCC values.



### Example 2
> **Summary**: Process of performing hierarchical clustering on a data table, generating a report with cluster information and extracting CCC values as a matrix.

<!-- Keywords: #HierarchicalClustering, #DataMining, #JMPScriptingLanguage, #ClusterAnalysis, #DataScience -->

**Code**:
```jsl
dt = Open("data_table.jmp");
nR = N Rows( dt );
obj = dt << Hierarchical Cluster( Y( :Petal length, :Sepal width ), Method( "Ward" ), Standardize( 1 ), Cluster Criterion( 1 ), );
rpt = obj << report;
nClust = rpt[Outline Box( "Cubic Clustering Criterion" )][Number Col Box( "CCC" )] << get as matrix;
```

**Code Explanation**:

1. Open data table;
2. Count number of rows.
3. Perform hierarchical clustering.
4. Specify clustering method.
5. Enable standardization.
6. Set cluster criterion.
7. Retrieve clustering report.
8. Locate CCC outline box.
9. Find CCC number column.
10. Extract CCC values as matrix.



## Cluster using Distribution
### Example 1
> **Summary**: Analyze and visualize multiple continuous variables, including Age, Weight, Oxy, Runtime, RunPulse, RstPulse, and MaxPulse, using a hierarchical clustering method with 4 clusters.

<!-- Keywords: #JMPScriptingLanguage, #HierarchicalClustering, #ContinuousVariables, #DataVisualization, #ClusterAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Distribution(
	Nominal Distribution( Column( :Sex ) ),
	Continuous Distribution( Column( :Age ) ),
	Continuous Distribution( Column( :Weight ) ),
	Continuous Distribution( Column( :Oxy ) ),
	Continuous Distribution( Column( :Runtime ) ),
	Continuous Distribution( Column( :RunPulse ) ),
	Continuous Distribution( Column( :RstPulse ) ),
	Continuous Distribution( Column( :MaxPulse ) )
);
rpt = obj << report;
obj << close window;
obj = Hierarchical Cluster(
	Y( :Sex, :Age, :Weight, :Oxy, :Runtime, :RunPulse, :RstPulse, :MaxPulse ),
	Method( "Ward" ),
	Standardize( 1 ),
	Two Way Clustering,
	Number of Clusters( 4 ),
	Color Map( "Blue to Gray to Red" ),
	Legend( 1 )
);
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Create distribution object.
3. Analyze nominal Sex column.
4. Analyze continuous Age column.
5. Analyze continuous Weight column.
6. Analyze continuous Oxy column.
7. Analyze continuous Runtime column.
8. Analyze continuous RunPulse column.
9. Analyze continuous RstPulse column.
10. Analyze continuous MaxPulse column.



### Example 2
> **Summary**: Creates a hierarchical cluster analysis report using the Ward method, with standardized data and color-coded clusters.

<!-- Keywords: #JSLScripting, #HierarchicalClustering, #WardMethod, #Standardization, #ColorCoding -->

**Code**:
```jsl
ut relative epsilon = 1e-9;
dt = Open("data_table.jmp");
obj = Distribution(
	Nominal Distribution( Column( :Sex ) ),
	Continuous Distribution( Column( :Age ) ),
	Continuous Distribution( Column( :Weight ) ),
	Continuous Distribution( Column( :Oxy ) ),
	Continuous Distribution( Column( :Runtime ) ),
	Continuous Distribution( Column( :RunPulse ) ),
	Continuous Distribution( Column( :RstPulse ) ),
	Continuous Distribution( Column( :MaxPulse ) )
);
rpt = obj << report;
obj << close window;
obj = Hierarchical Cluster(
	Y( :Sex, :Age, :Weight, :Oxy, :Runtime, :RunPulse, :RstPulse, :MaxPulse ),
	Method( "Ward" ),
	Standardize( 1 ),
	Two Way Clustering,
	Number of Clusters( 4 ),
	Color Map( "Blue to Gray to Red" ),
	Legend( 1 )
);
rpt = obj << report;
```

**Code Explanation**:

1. Set relative epsilon.
2. Open data table;
3. Create distribution object.
4. Include nominal distribution for Sex.
5. Include continuous distributions for other variables.
6. Generate distribution report.
7. Close distribution window.
8. Perform hierarchical clustering.
9. Use Ward method for clustering.
10. Standardize data before clustering.
11. Enable two-way clustering.
12. Specify number of clusters as 4.
13. Use blue-to-gray-to-red color map.
14. Add legend to the plot.



