# Latent Class Analysis

## Latent Class Analysis using Set Selected
> **Summary**: This JSL script launches the LCA , opens a data table, clears column selection, and selects specific variables for analysis before running Latent Class Analysis.

<!-- Keywords: #JMPScriptingLanguage, #LatentClassAnalysis, #DataTableManagement, #ColumnSelection, #LCA -->

**Code**:
```jsl
// Launch LCA 
// Open data table
dt = Open("data_table.jmp");
// Launch LCA 
_cdt = Current Data Table();
_cdt << Clear Column Selection;
_cdt:"Drove 1+ times when drinking"n <<
Set Selected( 1 );
_cdt:Smoked cigarette before 13 <<
Set Selected( 1 );
_cdt:Smoked daily for 30 days <<
Set Selected( 1 );
_cdt:Had first drink before 13 <<
Set Selected( 1 );
_cdt:"Five+ drinks 1+ past 30 days"n <<
Set Selected( 1 );
_cdt:Tried marijuana before 13 <<
Set Selected( 1 );
_cdt:"Used cocaine 1+ times in life"n <<
Set Selected( 1 );
_cdt:"Sniffed glue 1+ times in life"n <<
Set Selected( 1 );
_cdt:"Used meth 1+ times in life"n <<
Set Selected( 1 );
_cdt:"Used ecstasy 1+ times in life"n <<
Set Selected( 1 );
_cdt:Had sex before 13 <<
Set Selected( 1 );
_cdt:"Had sex with 4+ people in life"n
 << Set Selected( 1 );
Latent Class Analysis();
Window()[N Items( Window() )][
Button Box( 1 )] << click;
```

**Code Explanation**:

1. Open data table.
2. Launch LCA .
3. Clear column selection.
4. Select "Drove 1+ times when drinking".
5. Select "Smoked cigarette before 13".
6. Select "Smoked daily for 30 days".
7. Select "Had first drink before 13".
8. Select "Five+ drinks 1+ past 30 days".
9. Select "Tried marijuana before 13".
10. Run Latent Class Analysis.



### Example 1
> **Summary**: Opens a data table and performs Latent Class Analysis with 5 clusters, using the specified response variables.

<!-- Keywords: #LatentClassAnalysis, #JSLScriptingLanguage, #DataTable, #ClusterAnalysis, #ResponseVariables -->

**Code**:
```jsl
// Latent Class Analysis
// Open data table
dt = Open("data_table.jmp");
// Latent Class Analysis
Latent Class Analysis(
	Y(
		:"Drove 1+ times when drinking"n,
		:Smoked cigarette before 13,
		:Smoked daily for 30 days,
		:Had first drink before 13,
		:"Five+ drinks 1+ past 30 days"n,
		:Tried marijuana before 13,
		:"Used cocaine 1+ times in life"n,
		:"Sniffed glue 1+ times in life"n,
		:"Used meth 1+ times in life"n,
		:"Used ecstasy 1+ times in life"n,
		:Had sex before 13,
		:
		"Had sex with 4+ people in life"n
	),
	Number of Clusters( 5 )
);
```

**Code Explanation**:

1. Open data table.
2. Run Latent Class Analysis.
3. Specify response variables.
4. Set number of clusters to 5.



### Example 2
> **Summary**: Process of performing Latent Class Analysis on a data table, specifying sex, marital status, country, and size variables, with 3 clusters, and generating a report.

<!-- Keywords: #LatentClassAnalysis, #JMPScriptingLanguage, #DataTable, #ClusterAnalysis, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Latent Class Analysis( Y( :sex, :marital status, :country, :size ), Number of Clusters( 3 ) );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Perform Latent Class Analysis.
3. Specify sex, marital status, country, size.
4. Set number of clusters to 3.
5. Generate analysis report.



### Example 3
> **Summary**: Runs Latent Class Analysis on a data table, specifying six variables and allowing up to 7 clusters, then generates a report with cluster counts.

<!-- Keywords: #JSLScriptingLanguage, #LatentClassAnalysis, #DataTable, #ClusterAnalysis, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Latent Class Analysis(
	Y(
		:I am working on my career, :I want to see the world, :My home needs some major improvements,
		:I have vast interests outside of work, :I want to get my debt under control, :I come from a large family
	),
	Number of Clusters( 3 ),
	Up to( 7 )
);
rpt = obj << report;
bmrk ncluster = [3, 4, 5, 6, 7];
ncluster = rpt[Number Col Box( "NCluster" )] << get as matrix;
bmrk rmv = [3, 4, 5, 7];
rmv fit = obj << (Fit[4] << Remove Fit);
rmv rpt = rmv fit << report;
rmv ncluster = rpt[Number Col Box( "NCluster" )] << get as matrix;
```

**Code Explanation**:

1. Open data table;
2. Perform Latent Class Analysis.
3. Specify six variables for analysis.
4. Set number of clusters to 3.
5. Allow up to 7 clusters.
6. Generate analysis report.
7. Define bookmarked cluster numbers.
8. Extract actual cluster count from report.
9. Define clusters to remove.
10. Remove specified fits from analysis.



### Example 4
> **Summary**: Runs latent class analysis to identify patterns in categorical data, specifying 3 clusters and up to 7 possible classes.

<!-- Keywords: #LatentClassAnalysis, #CategoricalData, #ClusterAnalysis, #JMPScriptingLanguage, #DataMining -->

**Code**:
```jsl
Open("data_table.jmp");
obj = Latent Class Analysis( Y( :sex, :marital status, :country, :size, :type ), Number of Clusters( 3 ), Up To( 7 ) );
```

**Code Explanation**:

1. Open data table;
2. Perform latent class analysis.
3. Specify response variables.
4. Set number of clusters to 3.
5. Define up to 7 clusters.



### Example 5
> **Summary**: Process of performing latent class analysis on a dataset, specifying response variables and setting the number of clusters to 3 with an upper limit of 7.

<!-- Keywords: #LatentClassAnalysis, #JSLScripting, #DataAnalysis, #ClusterModeling, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Latent Class Analysis( Y( :sex, :marital status, :country, :size, :type ), Number of Clusters( 3 ), Up To( 7 ) );
```

**Code Explanation**:

1. Open data table;
2. Assign dataset to dt.
3. Perform latent class analysis.
4. Specify response variables.
5. Set number of clusters to 3.
6. Allow up to 7 clusters.



## Latent Class Analysis using Set Property
> **Summary**: Process of performing Latent Class Analysis (LCA) on a data table, generating a report with cluster results.

<!-- Keywords: #LatentClassAnalysis, #DataTable, #JMPScriptingLanguage, #ReportGeneration, #ClusterAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
:country << Set Property( "Value Colors", {"American" = -13977687, "European" = 6, "Japanese" = 52} );
exp_colorlist = [-13977687, 6, 52];
obj = dt << Latent Class Analysis( Y( :sex, :marital status, :country ), Number of Clusters( 3 ) );
rpt = obj << report;
```

**Code Explanation**:

1. Open table.
2. Set country colors.
3. Define color list.
4. Perform LCA.
5. Generate report.



## Latent Class Analysis using If
> **Summary**: Runs the analysis and reporting process for a Text Explorer object in JMP Pro, utilizing Latent Class Analysis to identify patterns in text data.

<!-- Keywords: #JMPPro, #TextExplorer, #LatentClassAnalysis, #DataAnalysis, #Reporting -->

**Code**:
```jsl
If( JMP Product Name() == "Pro",
	dt = Open("data_table.jmp");
	obj = Text Explorer(
		Text Columns( :name ),
		Validation( :age ),
		ID( :sex ),
		Set Regex( Library( "Money" ), Library( "Words" ), Library( "HTML Link Grabber" ), Library( "Time" ), Library( "Numbers" ) ),
		Language( "English" )
	);
	dt << Delete Columns( :age, :sex );
	obj << Latent Class Analysis(
		Number of Clusters( 5 ),
		Maximum Number of Terms( 39 ),
		Minimum Term Frequency( 1 ),
		Set Random Seed( 452418151 )
	);
	rep = obj << report;
	Close( dt, nosave );
);
```

**Code Explanation**:

1. Check if JMP version is Pro.
2. Open data table;
3. Create Text Explorer object.
4. Specify text columns.
5. Set validation column.
6. Define ID column.
7. Load regex libraries.
8. Set language to English.
9. Delete age and sex columns.
10. Perform Latent Class Analysis.
11. Generate report.
12. Close dataset without saving.



