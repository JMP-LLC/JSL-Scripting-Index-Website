# Multivariate Embedding

## Multivariate Embedding using If
> **Summary**: Process of performing multivariate embedding and t-SNE, generating reports for multiple groups, and extracting components from data tables in JMP Pro.

<!-- Keywords: #JMPPro, #MultivariateEmbedding, #tSNE, #DataVisualization, #Scripting -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ),
	dt = Open("data_table.jmp");
	uobj = dt << Multivariate Embedding( Y( Column Group( "Proteins" ) ), By( :Status ) );
	rpt_uGrp1 = uobj[1] << Report();
	rpt_uGrp2 = uobj[2] << Report();
	uobj[1] << Save Embedding Component Values;
	dt << subset( Columns( (N Col( dt ) - 1) :: N Col( dt ) ), By( :Status ), Keep by columns );
	dt_ugrp1 = Data Table("data_table");
	cmpnts_ugrp1 = dt_ugrp1[0, 2 :: 3];
	dt_ugrp2 = Data Table("data_table");
	cmpnts_ugrp2 = dt_ugrp2[0, 2 :: 3];
 
 
	Close( dt_ugrp1, nosave );
	Close( dt_ugrp2, nosave );
	uobj[2] << Save Embedding Component Values;
	cmpnts_ugrpsBoth = dt[0, (N Col( dt ) - 1) :: N Col( dt )];
	dt << delete columns( (N Col( dt ) - 1), N Col( dt ) );
	uobj << Save Embedding Component Values;
	cmpnts_uAll = dt[0, (N Col( dt ) - 1) :: N Col( dt )];
	tobj = dt << Multivariate Embedding( Y( Column Group( "Proteins" ) ), Method( "t-SNE" ), Perplexity( 10 ), By( :Status ) );
	rpt_tGrp1 = tobj[1] << Report();
	rpt_tGrp2 = tobj[2] << Report();
	tobj[2] << Save Embedding Component Values;
	dt << subset( Columns( (N Col( dt ) - 1) :: N Col( dt ) ), By( :Status ), Keep by columns );
	dt_tgrp1 = Data Table("data_table");
	cmpnts_tgrp1 = dt_tgrp1[0, 2 :: 3];
	dt_tgrp2 = Data Table("data_table");
	cmpnts_tgrp2 = dt_tgrp2[0, 2 :: 3];
 
 
 
	Close( dt_tgrp1, nosave );
	Close( dt_tgrp2, nosave );
	tobj[1] << Save Embedding Component Values;
	cmpnts_tgrpsBoth = dt[0, (N Col( dt ) - 1) :: N Col( dt )];
 
	dt << delete columns( (N Col( dt ) - 1), N Col( dt ) );
	tobj << Save Embedding Component Values;
	cmpnts_tAll = dt[0, (N Col( dt ) - 1) :: N Col( dt )];
	Close( dt, nosave );
);
```

**Code Explanation**:

1. Check if JMP is Pro.
2. Open data table.
3. Perform Multivariate Embedding.
4. Generate report for first group.
5. Generate report for second group.
6. Save embedding component values for first group.
7. Subset data by Status.
8. Extract components for first group.
9. Close first group data table.
10. Extract components for second group.
11. Close second group data table.
12. Save embedding component values for second group.
13. Combine components from both groups.
14. Delete original components columns.
15. Save all embedding component values.
16. Extract combined components.
17. Perform t-SNE Multivariate Embedding.
18. Generate report for first t-SNE group.
19. Generate report for second t-SNE group.
20. Save t-SNE component values for second group.
21. Subset data by Status for t-SNE.
22. Extract components for first t-SNE group.
23. Close first t-SNE group data table.
24. Extract components for second t-SNE group.
25. Close second t-SNE group data table.
26. Save t-SNE component values for first group.
27. Combine t-SNE components from both groups.
28. Delete original t-SNE components columns.
29. Save all t-SNE component values.
30. Extract combined t-SNE components.
31. Close the main data table.



### Example 1
> **Summary**: Runs the t-SNE multivariate embedding process for a data table, specifying method, perplexity, and random seed, and saves component values.

<!-- Keywords: #JSLScriptingLanguage, #MultivariateEmbedding, #tSNE, #DataVisualization, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Multivariate Embedding(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Method( "t-SNE" ),
	Perplexity( 8 ),
	Missing Value Imputation( 0 ),
	Sparse( 0 ),
	Random Seed( 422 )
);
obj << Save Embedding Component Values;
actualTSNEComponents = dt[0, 8 :: 9];
rpt = obj << Report();
actualIterationHistory = rpt[Outline Box( "Iteration History" )][Table Box( 1 )] << get as matrix;
If( Host is( Windows ), , );
```

**Code Explanation**:

1. Open data table;
2. Run Multivariate Embedding.
3. Select t-SNE method.
4. Set Perplexity to 8.
5. Disable Missing Value Imputation.
6. Disable Sparse mode.
7. Set Random Seed to 422.
8. Save embedding component values.
9. Extract actual TSNE components.
10. Retrieve iteration history report.



### Example 2
> **Summary**: Runs the UMAP embedding process, generating a report with component values and parameters.

<!-- Keywords: #JMPScriptingLanguage, #UMAP, #DimensionalityReduction, #DataVisualization, #MultivariateAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Multivariate Embedding( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ), Method( "UMAP" ), Random Seed( 123 ) );
obj << Save Embedding Component Values;
actualUMAPcomponents = dt[0, 6 :: 7];
rpt = obj << Report();
actualUMAPparameters = rpt[Outline Box( "UMAP Parameters" )][Table Box( 1 )] << get as matrix;
nn = rpt[Outline Box( "UMAP Parameters" )][Table Box( 1 )][String Col Box( 1 )] << get;
actualUMAPparameters_nn = nn[1];
gradient = rpt[Outline Box( "UMAP Parameters" )][Table Box( 1 )][String Col Box( 2 )] << get;
actualUMAPparameters_gradient = gradient[1];
distance = rpt[Outline Box( "UMAP Parameters" )][Table Box( 1 )][String Col Box( 3 )] << get;
actualUMAPparameters_distance = distance[1];
If( Host is( Windows ), , );
```

**Code Explanation**:

1. Open data table;
2. Perform UMAP embedding.
3. Save embedding component values.
4. Retrieve actual UMAP components.
5. Generate report from UMAP.
6. Extract UMAP parameters matrix.
7. Get nearest neighbors parameter.
8. Store nearest neighbors parameter.
9. Get gradient parameter.
10. Store gradient parameter.



