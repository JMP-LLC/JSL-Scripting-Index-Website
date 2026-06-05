# Association Analysis

### Example 1
> **Summary**: Associates product with customer ID using the Association Analysis platform, analyzing the relationship between these variables in a data table.

<!-- Keywords: #AssociationAnalysis, #DataTable, #CustomerID, #Product, #JMPScriptingLanguage -->

**Code**:
```jsl
// Association Analysis of Product
// Open data table
dt = Open("data_table.jmp");
// Association Analysis of Product
Association Analysis(
	Item( :Product ),
	ID( :Customer ID )
);
```

**Code Explanation**:

1. Open table.
2. Perform association analysis.
3. Use Product column.
4. Use Customer ID column.



### Example 2
> **Summary**: Runs association analysis to identify rules between product and customer ID, with configurable minimum support and confidence thresholds.

<!-- Keywords: #AssociationAnalysis, #JMPScriptingLanguage, #DataMining, #CustomerBehavior, #ProductRecommendation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Association Analysis(
	Item( :Product ),
	ID( :Customer ID ),
	Minimum Support( 0.119 ),
	Minimum Confidence( 0.65 ),
	Maximum Antecedents( 2 ),
	Maximum Rule Size( 3 ), 
);
rpt = obj << report;
left = rpt[Outline Box( "Rules" )][String Col Box( 1 )] << get;
right = rpt[Outline Box( "Rules" )][String Col Box( 2 )] << get;
conf = rpt[Outline Box( "Rules" )][Number Col Box( 1 )] << get as matrix;
lift = rpt[Outline Box( "Rules" )][Number Col Box( 2 )] << get as matrix;
```

**Code Explanation**:

1. Open data table.
2. Perform association analysis.
3. Set item column.
4. Set ID column.
5. Define minimum support.
6. Define minimum confidence.
7. Limit antecedents.
8. Limit rule size.
9. Extract rules report.
10. Retrieve rule details.



### Example 3
> **Summary**: Runs association analysis to identify relationships between product and customer ID, generating a report with rules outlined in the Bivariate platform.

<!-- Keywords: #AssociationAnalysis, #Bivariate, #JMPScriptingLanguage, #DataMining, #CustomerBehavior -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Association Analysis( Item( :Product ), ID( :Customer ID ), Minimum Confidence( 0.9 ), Maximum Antecedents( 2 ) );
rpt = obj << report;
condition = rpt[Outline Box( "Rules" )][Table Box( 1 )][String Col Box( 1 )] << get;
```

**Code Explanation**:

1. Open data table;
2. Perform association analysis.
3. Set item variable.
4. Set ID variable.
5. Define minimum confidence.
6. Limit maximum antecedents.
7. Generate report object.
8. Extract report content.
9. Access rules outline box.
10. Retrieve table box content.



## Association Analysis using If
### Example 1
> **Summary**: Analyze customer data to identify frequent item sets and singular values, utilizing Association Analysis and Local Data Filter features in JMP Pro.

<!-- Keywords: #JMPPro, #AssociationAnalysis, #LocalDataFilter, #DataVisualization, #CustomerAnalytics -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ) > 0,
	dt = Open("data_table.jmp");
	subset1 = dt << Subset( All rows, Selected columns only( 0 ) );
	s1 = subset1 << Select Where( :Customer ID > 500 );
	s1 << Delete Rows( s1 );
	s2 = dt << Select Where( :Customer ID > 500 );
	s2 << Exclude( 1 );
	obj1 = dt << Association Analysis(
		Item( :Product ),
		ID( :Customer ID ),
		Minimum Confidence( 0.9 ),
		Maximum Antecedents( 2 ),
		Rules( 0 ),
		Local Data Filter(
			Add Filter(
				columns( :Product ),
				Where( :Product == {"Heineken", "herring"} ),
				Display( :Product, Size( 160, 225 ), List Display )
			)
		),
		SendToReport( Dispatch( {}, "Frequent Item Sets", OutlineBox, {Close( 0 )} ) )
	);
	newtable1 = Report( obj1 )[Outline Box( "Association Analysis" )][Outline Box( "Frequent Item Sets" )][Table Box( 1 )] <<
	Make Into Data Table;
	values1 = newtable1:Item Set << get stored values;
	obj2 = dt << Association Analysis(
		Item( :Product ),
		ID( :Customer ID ),
		Minimum Confidence( 0.9 ),
		Maximum Antecedents( 2 ),
		Frequent Item Sets( 0 ),
		Rules( 0 ),
		SVD( Number of Singular Vectors( 6 ) ),
		Local Data Filter(
			Add Filter(
				columns( :Product ),
				Where( :Product == {"olives", "peppers", "sardines", "soda", "steak", "turkey"} ),
				Display( :Product, Size( 160, 225 ), List Display )
			)
		)
	);
	newtable2 = Report( obj2 )[Outline Box( "Association Analysis" )][Outline Box( "SVD" )][Outline Box( "Singular Values" )][
	Table Box( 1 )] << Make Into Data Table;
	values2 = newtable2:Cum Percent << get as matrix;
	Close( newtable1, nosave );
	Close( newtable2, nosave );
	Close( dt, no save );
	Close( subset1, no save );
);
```

**Code Explanation**:

1. Check for JMP Pro.
2. Open data table;
3. Create subset of all rows.
4. Select rows with Customer ID > 500.
5. Delete selected rows.
6. Select rows with Customer ID > 500 again.
7. Exclude selected rows.
8. Run Association Analysis.
9. Create data table from report.
10. Extract item set values.
11. Run another Association Analysis.
12. Create data table from report.
13. Extract cumulative percent values.
14. Close all data tables without saving.



### Example 2
> **Summary**: Runs association analysis and Singular Value Decomposition (SVD) on a data table, selecting the 'Product' column and deleting other columns, all within a JMP Pro environment.

<!-- Keywords: #JMPPro, #AssociationAnalysis, #SingularValueDecomposition, #DataTableManagement, #Scripting -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ) > 0,
	dt = Open("data_table.jmp");
	aa = dt << Association Analysis( Item( :Product ), ID( Name( "Customer ID" ) ) );
	Column( dt, "Product" ) << Set Selected( 1 );
	dt << Delete Columns;
	aa << SVD( Number of Singular Vectors( 20 ) );
	aa << close window;
	Close( dt, nosave );
);
```

**Code Explanation**:

1. Check if JMP version is Pro.
2. Open data table.
3. Perform association analysis.
4. Select "Product" column.
5. Delete columns from table.
6. Apply SVD with 20 vectors.
7. Close association analysis window.
8. Close data table without saving.



