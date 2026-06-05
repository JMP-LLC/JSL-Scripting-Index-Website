# Cluster Variables

### Example 1
> **Summary**: Opens a data table, defines cluster variables for clustering analysis, and sends the results to a report with standardized components.

<!-- Keywords: #JMPScriptingLanguage, #ClusterAnalysis, #DataTable, #SendToReport, #StandardizedComponents -->

**Code**:
```jsl
// Cluster Variables
// Open data table
dt = Open("data_table.jmp");
// Cluster Variables
Cluster Variables(
	Y(
		:Al, :Mn, :Na, :Br, :Ce, :Co, :Cr,
		:Cs, :Eu, :Fe, :Hf, :La, :Sc, :Sm,
		:U
	),
	SendToReport(
		Dispatch( {},
			"Standardized Components",
			OutlineBox,
			{Close( 1 )}
		)
	)
);
```

**Code Explanation**:

1. Open table.
2. Define variables for clustering.
3. Perform cluster analysis.
4. Close standardized components report.



### Example 2
> **Summary**: Opens a data table and clusters selected variables, enabling interactive analysis of the relationships between Age, BMI, BP, Total Cholesterol, LDL, HDL, TCH, LTG, and Glucose.

<!-- Keywords: #JMPScriptingLanguage, #ClusterVariables, #DataAnalysis, #InteractiveAnalysis, #VariableSelection -->

**Code**:
```jsl
// Cluster Variables
// Open data table
dt = Open("data_table.jmp");
// Cluster Variables
Cluster Variables(
	Y(
		:Age, :BMI, :BP,
		:Total Cholesterol, :LDL, :HDL,
		:TCH, :LTG, :Glucose
	)
);
```

**Code Explanation**:

1. Open data table;
2. Cluster selected variables.



### Example 3
> **Summary**: Runs the clustering of chemical elements in a data table, disabling summary and component displays.

<!-- Keywords: #JSLScriptingLanguage, #DataTableOperations, #ClusterVariables, #SendToReport, #JMPScripting -->

**Code**:
```jsl
Open("data_table.jmp") << Cluster Variables(
	Y( :Al, :Mn, :Na, :Br, :Ce, :Co, :Cr, :Cs, :Eu, :Fe, :Hf, :La, :Sc, :Sm, :U ),
	Cluster Summary( 0 ),
	Cluster Members( 0 ),
	Cluster Components( 0 )
);
```

**Code Explanation**:

1. Open data table;
2. Start clustering variables.
3. Select chemical elements for analysis.
4. Disable cluster summary display.
5. Disable cluster members display.
6. Disable cluster components display.



### Example 4
> **Summary**: Runs the computation of sparse singular value decomposition (SVD) and residual matrix calculation, utilizing a custom function jslSVDTest.

<!-- Keywords: #JSLScriptingLanguage, #SparseSVD, #ResidualMatrix, #CustomFunction, #DataAnalysis -->

**Code**:
```jsl
Open("data_table.jmp");
obj = Cluster Variables( Y( :X1, :Y1, :X2, :Y2, :X3, :Y3, :X4, :Y4 ) );
Random Reset( 123456789 );
A = J( 5, 10, Random Integer( 0, 1 ) );
{U, S, V} = Sparse SVD( A, 5 );
Z = U * Diag( S ) * V` - A;
traceTrick = Trace( Z` * Z );
A = [1 1 0 0 0 0 0 0 0 0 0,
0 1 0 0 0 0 0 0 0 0 1,
0 0 1 0 1 0 0 0 0 0 0,
0 0 1 1 1 0 0 0 0 0 0,
1 0 0 0 0 1 0 0 0 0 0,
0 0 0 1 0 0 0 0 0 1 0,
1 0 0 0 0 0 1 0 0 0 0,
0 0 0 0 0 0 0 0 1 0 0,
0 0 0 0 0 1 0 1 0 0 0];
Asm = A[0, 1 :: 7];
jslSVDTest = Function( {thematrix, numSV},
	{A, Ut, St, Vt, U, S, V, GHvsSparse},
	thematrix = V Standardize( thematrix );
	{Ut, St, Vt} = SVD( thematrix );
	{U, S, V} = Sparse SVD( thematrix, numSV );
	GHvsSparse = (St || (S |/ J( N Row( St ) - N Row( S ), 1, 0 )));
);
```

**Code Explanation**:

1. Open data table;
2. Perform cluster analysis.
3. Set random seed.
4. Create random matrix A.
5. Compute sparse SVD of A.
6. Calculate residual matrix Z.
7. Compute trace of Z transpose times Z.
8. Define matrix A.
9. Extract submatrix Asm.
10. Define function jslSVDTest.



### Example 5
> **Summary**: Analyze clustered variables by opening a data table and performing a cluster variables calculation, sending the results to a report.

<!-- Keywords: #JSLScriptingLanguage, #ClusterVariables, #DataAnalysis, #ReportGeneration, #JMP -->

**Code**:
```jsl
Open("data_table.jmp");
obj = Cluster Variables( Y( :X1, :Y1, :X2, :Y2, :X3, :Y3, :X4, :Y4 ) );
```

**Code Explanation**:

1. Open data table;
2. Cluster variables analysis.



### Example 6
> **Summary**: Generates a cluster summary report from a data table, extracting key statistics and converting them to a matrix format.

<!-- Keywords: #JSLScripting, #ClusterAnalysis, #DataVisualization, #ReportGeneration, #MatrixOperations -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Cluster Variables( Y( :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG ) );
rpt = obj << report;
actSummary = rpt["Cluster Summary"][Table Box( 1 )] << get as matrix;
```

**Code Explanation**:

1. Open data table;
2. Create cluster variables object.
3. Retrieve report from object.
4. Extract cluster summary table.
5. Convert table to matrix.



## Cluster Variables using Data Table
> **Summary**: Selects and filters data rows in a JMP Data Table, followed by cluster analysis with specific variables and conditions.

<!-- Keywords: #JSLScriptingLanguage, #DataTableOperations, #ClusterAnalysis, #Filtering, #Selection -->

**Code**:
```jsl
Open("data_table.jmp");
dt = Data Table("data_table");
dt << Clear Select << Select Rows( Index( 1, 35 ) ) << Hide and Exclude;
dt << Cluster Variables(
	Y( :age, :height, :weight ),
	Cluster Summary( 0 ),
	Cluster Members( 0 ),
	Cluster Components( 0 ),
	Local Data Filter( Add Filter( columns( :height ), Where( :height >= 68 ) ) )
);
```

**Code Explanation**:

1. Open data table;
2. Assign data table to dt.
3. Clear previous selections.
4. Select rows 1 to 35.
5. Hide and exclude selected rows.
6. Perform cluster analysis.
7. Set variables for clustering.
8. Disable cluster summary.
9. Disable cluster members.
10. Disable cluster components.
11. Add local data filter.
12. Filter height column.
13. Set filter condition: height >= 68.



## Cluster Variables using Principal Components
### Example 1
> **Summary**: Runs a Principal Components analysis on the Iris dataset, filtering for setosa species and visualizing results in 3D Score Plot, Biplot, and Loading Plot.

<!-- Keywords: #PrincipalComponents, #IrisDataset, #JMPScriptingLanguage, #DataVisualization, #MultivariateAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj_cust = dt << Principal Components(
	SendToByGroup( {:Species == "setosa"} ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj_cust << "3D Score Plot"n( 1 );
obj_cust << Arrow Lines( 0 );
obj_cust << Arrow Lines( 1 );
obj_cust << Bartlett Test( 1 );
obj_cust << Biplot( 3 );
obj_cust << Cluster Variables( Cluster Components( 1 ) );
obj_cust << Factor Analysis( "ML", "SMC", 2, "Varimax" );
obj_cust << Loading Plot( 4 );
obj_cust << Score Ellipses( 1 );
obj_cust << Score Ellipse Coverage( 0.75 );
obj_cust << Squared Cosines of Variables( Plot of Squared Cosines of Variables( Overview( 3 ), "Stacked", "Horizontal" ) );
obj = dt << Principal Components( SendToByGroup( {:Species == "setosa"} ), Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Empty();
preset = obj_cust << New Preset;
obj << Apply Preset( preset );
```

**Code Explanation**:

1. Open data table;
2. Run Principal Components analysis.
3. Filter for Species setosa.
4. Select variables for analysis.
5. Create 3D Score Plot.
6. Disable Arrow Lines.
7. Enable Arrow Lines.
8. Perform Bartlett Test.
9. Create Biplot.
10. Cluster variables.
11. Conduct Factor Analysis.
12. Generate Loading Plot.
13. Enable Score Ellipses.
14. Set ellipse coverage to 0.75.
15. Plot Squared Cosines of Variables.
16. Run another Principal Components analysis.
17. Clear previous results.
18. Save analysis preset.
19. Apply saved preset.



### Example 2
> **Summary**: Runs Principal Components analysis on a standardized data table, clustering variables using method 1.

<!-- Keywords: #PrincipalComponentsAnalysis, #DataStandardization, #Clustering, #JMPScriptingLanguage, #MultivariateStatistics -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Principal Components( Y( :Sepal length, :Sepal width, :Petal length, :Petal width, :Species ), Standardize( "Standardized" ), );
obj << Cluster Variables( 1 );
```

**Code Explanation**:

1. Open data table;
2. Run Principal Components analysis.
3. Standardize variables.
4. Cluster variables using method 1.



## Cluster Variables using Get Column Groups Names
### Example 1
> **Summary**: Runs cluster analysis on a data table, saving the resulting components and updating column groups.

<!-- Keywords: #JSLScriptingLanguage, #ClusterAnalysis, #DataTableOperations, #ColumnGroups, #DataMining -->

**Code**:
```jsl
dt = Open("data_table.jmp");
colGp1 = dt << Get Column Groups Names();
obj = dt << Cluster Variables( Y( 1 :: 5 ) );
obj << Save Cluster Components();
colGp2 = dt << Get Column Groups Names();
```

**Code Explanation**:

1. Open data_table data
2. Retrieve initial column groups.
3. Perform cluster analysis on first five columns.
4. Save cluster components.
5. Retrieve updated column groups.



### Example 2
> **Summary**: Performs principal component analysis with variable clustering to generate a report, updating column groups accordingly.

<!-- Keywords: #JMPScriptingLanguage, #PrincipalComponentAnalysis, #VariableClustering, #DataTableManipulation, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
colGp1 = dt << Get Column Groups Names();
obj = dt << Principal Components( Y( 1 :: 5 ), Estimation Method( "Default" ), "on Correlations", Cluster Variables( 1 ) );
rpt = obj << Report();
scrobj = rpt[Outline Box( "Variable Clustering" )] << Get Scriptable Object();
scrobj << Save Cluster Components();
colGp2 = dt << Get Column Groups Names();
```

**Code Explanation**:

1. Open data table;
2. Retrieve initial column groups.
3. Perform principal component analysis.
4. Use correlations for estimation.
5. Enable variable clustering.
6. Generate report object.
7. Access variable clustering outline.
8. Get scriptable object for clustering.
9. Save cluster components.
10. Retrieve updated column groups.



## Cluster Variables using If
> **Summary**: Runs Principal Component analysis with REML variance estimation and local data filtering to analyze athletic performance data, generating a report with summary plots.

<!-- Keywords: #JMPScriptingLanguage, #PrincipalComponentAnalysis, #REMLVarianceEstimation, #LocalDataFiltering, #AthleticPerformanceAnalysis -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ),
	dt = Open("data_table.jmp");
	obj = dt << Principal Components(
		Y( :"100m"n, :Long Jump, :Shot Put, :High Jump, :"400m"n, :"100m hurdles"n, :Discus, :Pole Vault, :Javelin, :"1500m"n ),
		Variance Estimation( "REML" ),
		"on Covariances",
		Summary Plots( Label variables( 0 ) ),
		Cluster Variables( 1 ),
		Local Data Filter(
			Width( 208 ),
			Add Filter( columns( :Country ), Where( :Country == "CAN" ), Display( :Country, N Items( 15 ) ) )
		)
	);
	obj << Save Script to Report;
	rpt = obj << report;
	text_act = Try( rpt[Text Box( 1 )] << Get Text );
	text_exp =
	"Principal Components(
Y(
:\!"100m\!"n, :Long Jump, :Shot Put, :High Jump, :\!"400m\!"n, :\!"100m hurdles\!"n,
:Discus, :Pole Vault, :Javelin, :\!"1500m\!"n
),
Estimation Method( \!"REML\!" ),
Standardize( \!"Unscaled\!" ),
Cluster Variables( 1 ),
Local Data Filter(
Width( 208 ),
Add Filter(
	columns( :Country ),
	Where( :Country == \!"CAN\!" ),
	Display( :Country, N Items( 15 ) )
)
)
)";
	Close( dt, nosave );
);
```

**Code Explanation**:

1. Check for JMP Pro version.
2. Open data table;
3. Perform Principal Component analysis.
4. Use REML variance estimation.
5. Analyze covariances.
6. Generate summary plots.
7. Cluster variables.
8. Apply local data filter.
9. Save script to report.
10. Extract report text.



