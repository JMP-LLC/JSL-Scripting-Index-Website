# Principal Components

### Example 1
> **Summary**: Opens a data table, performs Principal Components analysis with sparse estimation method and 2 components, generates summary plots, and sends the results to a report.

<!-- Keywords: #PrincipalComponents, #SparseEstimation, #SummaryPlots, #JMPScriptingLanguage, #DataAnalysis -->

**Code**:
```jsl
// Principal Components
// Open data table
dt = Open("data_table.jmp");
// Principal Components
Principal Components(
	Y(
		:ABDOMINAL PAIN, :ABNORMAL VISION,
		:ALOPECIA, :AMBLYOPIA, :ANEMIA,
		:ANGINA PECTORIS, :ANOREXIA,
		:ANXIETY, :ASTHENIA, :ASTHMA,
		:BACK PAIN, :BRONCHITIS,
		:CHEST PAIN,
		:CHEST PAIN SUBSTERNAL, :CHILLS,
		:CONSTIPATION, :COUGH INCREASED,
		:DEAFNESS, :DEPRESSION, :DIARRHEA,
		:DIZZINESS, :DRY MOUTH,
		:DUODENAL ULCER, :DYSPEPSIA,
		:DYSURIA, :ECCHYMOSIS, :EDEMA,
		:EPISTAXIS, :ERUCTATION,
		:ESOPHAGITIS, :EYE DISORDER,
		:EYE HEMORRHAGE, :FACE EDEMA,
		:FEVER, :FLATULENCE,
		:FLU SYNDROME, :GENERALIZED EDEMA,
		:HEADACHE, :HYPERTONIA,
		:HYPERURICEMIA,
		:INCREASED URINARY FREQ,
		:INFECTION, :KERATOCONJUNCTIVITIS,
		:LACRIMATION DISORDER,
		:LYMPHADENOPATHY, :MELENA,
		:MIGRAINE, :NAUSEA, :NECK PAIN,
		:NERVOUSNESS, :NEUROPATHY, :PAIN,
		:PERIODONTAL ABSCESS,
		:PERIPHERAL EDEMA, :PHARYNGITIS,
		:PHLEBITIS, :POLYURIA, :PRURITUS,
		:RASH, :REACTION UNEVALUABLE,
		:RECTAL BLEEDING, :RHINITIS,
		:SGOT INCREASED, :SINUSITIS,
		:SOMNOLENCE, :STOMACH ULCER,
		:TACHYCARDIA, :TENOSYNOVITIS,
		:TINNITUS,
		:URINARY TRACT INFECTIO,
		:URINARY URGENCY,
		:VESTIBULAR DISORDER,
		:VITREOUS DISORDER,
		:VOICE ALTERATION, :VOMITING
	),
	Estimation Method( "Sparse" ),
	Number of Components( 2 ),
	"on Correlations",
	Summary Plots( Label variables( 0 ) ),
	SendToReport(
		Dispatch( {"Summary Plots"},
			"PCA Summary Plots", FrameBox,
			{Frame Size( 46, 36 )}
		),
		Dispatch( {"Summary Plots"},
			"PCA Summary Plots",
			FrameBox( 2 ),
			{Frame Size( 49, 36 )}
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Run Principal Components analysis.
3. Select multiple Y variables.
4. Use Sparse estimation method.
5. Set number of components to 2.
6. Enable correlation matrix.
7. Generate summary plots.
8. Do not label variables in plots.
9. Adjust first frame size.
10. Adjust second frame size.



### Example 2
> **Summary**: Performs a Principal Components analysis on a dataset, reducing the number of variables and visualizing the results in two summary plots.

<!-- Keywords: #PrincipalComponents, #VariableReduction, #SummaryPlots, #JMPScriptingLanguage, #DataAnalysis -->

**Code**:
```jsl
// Principal Components: Variable Reduction
// Open data table
dt = Open("data_table.jmp");
// Principal Components: Variable Reduction
Principal Components(
	Y(
		:"Age (years)"n, :"Weight (lbs)"n,
		:"Height (inches)"n,
		:"Neck circumference (cm)"n,
		:"Chest circumference (cm)"n,
		:"Abdomen circumference (cm)"n,
		:"Hip circumference (cm)"n,
		:"Thigh circumference (cm)"n,
		:"Knee circumference (cm)"n,
		:"Ankle circumference (cm)"n,
		:
		"Biceps (extended) circumference (cm)"n,
		:"Forearm circumference (cm)"n,
		:"Wrist circumference (cm)"n
	),
	Estimation Method( "Row-wise" ),
	on Correlations,
	Cluster Variables,
	SendToReport(
		Dispatch( {"Summary Plots"},
			"PCA Summary Plots", FrameBox,
			{Frame Size( 51, 37 )}
		),
		Dispatch( {"Summary Plots"},
			"PCA Summary Plots",
			FrameBox( 2 ),
			{Frame Size( 55, 37 )}
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Define principal components.
3. Specify variables for analysis.
4. Set estimation method.
5. Include correlations.
6. Cluster variables.
7. Send report settings.
8. Adjust summary plot size.
9. Adjust second summary plot size.
10. Execute principal component analysis.



### Example 3
> **Summary**: Opens a data table, performs principal component analysis (PCA) on selected variables, and displays the results in a report.

<!-- Keywords: #JMPScriptingLanguage, #PrincipalComponentAnalysis, #DataVisualization, #ReportGeneration, #Statistics -->

**Code**:
```jsl
// Principal Components
// Open data table
dt = Open("data_table.jmp");
// Principal Components
Principal Components(
	Y(
		:AA, :CO, :DL, :F9, :FL, :NW, :UA,
		:US, :WN
	),
	Estimation Method( "Default" ),
	"on Correlations"
);
```

**Code Explanation**:

1. Open data table.
2. Define variable `dt`.
3. Call `Principal Components` function.
4. Specify `Y` variables.
5. Set estimation method.
6. Enable correlation display.



### Example 4
> **Summary**: Loads a data table, performs Principal Components analysis with default estimation method and correlations, calculates the first eigenvalue, and generates a loading plot.

<!-- Keywords: #PrincipalComponents, #LoadingPlot, #DataAnalysis, #JMPScriptingLanguage, #EstimationMethod -->

**Code**:
```jsl
// Loading plot
// Open data table
dt = Open("data_table.jmp");
// Loading plot
Principal Components(
	Y(
		:Fuel, :Steam Flow, :Steam Temp,
		:MW, :Cool Temp, :Pressure
	),
	Estimation Method( "Default" ),
	"on Correlations",
	Eigenvalues( 1 ),
	Summary Plots( 0 ),
	Loading Plot( 4 )
);
```

**Code Explanation**:

1. Open data table.
2. Load Principal Components analysis.
3. Specify variables for analysis.
4. Use default estimation method.
5. Display correlations.
6. Calculate first eigenvalue.
7. Disable summary plots.
8. Generate loading plot.
9. Set plot detail level to 4.



### Example 5
> **Summary**: Performs a principal components analysis (PCA) on the Thickness variables in an appliance data table, using a row-wise estimation method and displaying eigenvalues. The results are sent to a report with two summary plots.

<!-- Keywords: #PrincipalComponents, #RowWiseEstimation, #Eigenvalues, #SummaryPlots, #JMPScriptingLanguage -->

**Code**:
```jsl
// Principal Components
// Open data table
dt = Open("data_table.jmp");
// Principal Components
Principal Components(
	Y(
		:Thickness 01, :Thickness 02,
		:Thickness 03, :Thickness 04,
		:Thickness 05, :Thickness 06,
		:Thickness 07, :Thickness 08,
		:Thickness 09, :Thickness 10,
		:Thickness 11, :Thickness 12
	),
	Estimation Method( "Row-wise" ),
	on Covariances,
	Eigenvalues( 1 ),
	Arrow Lines( 1 ),
	SendToReport(
		Dispatch( {"Summary Plots"},
			"PCA Summary Plots", FrameBox,
			{Frame Size( 200, 200 )}
		),
		Dispatch( {"Summary Plots"},
			"PCA Summary Plots",
			FrameBox( 2 ),
			{Frame Size( 200, 200 )}
		)
	)
);
```

**Code Explanation**:

1. Open table.
2. Perform principal components analysis.
3. Specify response variables.
4. Use row-wise estimation method.
5. Analyze covariances.
6. Display eigenvalues.
7. Show arrow lines.
8. Adjust summary plot size.
9. Adjust second summary plot size.
10. Generate report.



### Example 6
> **Summary**: Performs a principal components analysis on an appliance dataset, using row-wise variance estimation and scatterplot matrix visualization to identify key factors.

<!-- Keywords: #JMPScriptingLanguage, #PrincipalComponentsAnalysis, #ScatterplotMatrix, #RowWiseVarianceEstimation, #DataVisualization -->

**Code**:
```jsl
Open("data_table.jmp");
Principal Components(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Variance Estimation( "Row-wise" ),
	"on Correlations",
	Summary Plots( 0 ),
	Scatterplot Matrix( 4 ),
	Select component( 2, 1 ),
	SendToReport( Dispatch( {"Scatterplot Matrix"}, "403", ScaleBox, {Label Row( Inside Ticks( 1 ) )} ) )
);
```

**Code Explanation**:

1. Open data table;
2. Perform principal components analysis.
3. Set variables for analysis.
4. Use row-wise variance estimation.
5. Analyze correlations.
6. Disable summary plots.
7. Create scatterplot matrix.
8. Select first two components.
9. Modify report settings.
10. Adjust label row ticks.



### Example 7
> **Summary**: Runs a Principal Components analysis on the Sepal length, Sepal width, Petal length, and Petal width variables from an open data table, with default estimation method and outlier analysis on 4 components.

<!-- Keywords: #PrincipalComponents, #OutlierAnalysis, #DataVisualization, #JMPScriptingLanguage, #LifeDistributionAnalysis -->

**Code**:
```jsl
Open("data_table.jmp");
Principal Components(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Estimation Method( "Default" ),
	"on Correlations",
	Outlier Analysis( Number of Components( 4 ) ),
	SendToReport(
		Dispatch( {"Summary Plots"}, "PCA Summary Plots", FrameBox, {Frame Size( 41, 38 )} ),
		Dispatch( {"Summary Plots"}, "PCA Summary Plots", FrameBox( 2 ), {Frame Size( 49, 38 )} ),
		Dispatch( {"Outlier Analysis", "T¬≤ for 4 Principal Components"}, "PCA Outlier Analysis", FrameBox,
			{Grid Line Order( 1 ), Reference Line Order( 2 ), Add Pin Annotation(
				Seg( Marker Seg( 1 ) ),
				Index( 141 ),
				Index Row( 141 ),
				UniqueID( 629240157 ),
				FoundPt( {462, 552} ),
				Origin( {141.596244131455, 12.4} ),
				Offset( {142, 94} ),
				Tag Line( 1 ),
				Font( "Segoe UI", 9, "Plain" )
			)}
		),
		Dispatch( {"Outlier Analysis", "T¬≤ for 4 Principal Components"}, "PCA Outlier Analysis", FrameBox( 2 ),
			{DispatchSeg( CustomStreamSeg( 1 ), {Font( "Segoe UI", 9, "Plain" )} )}
		)
	)
);
```

**Code Explanation**:

1. Open data table;
2. Run Principal Components analysis.
3. Set variables for analysis.
4. Use default estimation method.
5. Analyze correlations.
6. Perform outlier analysis on 4 components.
7. Adjust summary plot frame size.
8. Adjust second summary plot frame size.
9. Add pin annotation to outlier plot.
10. Customize font for outlier plot labels.



### Example 8
> **Summary**: Runs a Principal Component Analysis (PCA) on selected columns of an appliance data table, utilizing correlations for estimation and enabling outlier analysis with 4 components.

<!-- Keywords: #JSLScriptingLanguage, #PrincipalComponentAnalysis, #OutlierAnalysis, #DataVisualization, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Principal Components(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Estimation Method( "Default" ),
	"on Correlations",
	Outlier Analysis( Number of Components( 4 ), Contribution Proportion Plot for Selected Samples( {101} ) ),
	SendToReport(
		Dispatch( {}, "Summary Plots", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Outlier Analysis", "T¬≤ for 4 Principal Components"}, "PCA Outlier Analysis", FrameBox,
			{Grid Line Order( 1 ), Reference Line Order( 2 ), Add Pin Annotation(
				Seg( Marker Seg( 1 ) ),
				Index( 100 ),
				Index Row( 100 ),
				UniqueID( 835428724 ),
				FoundPt( {359, 202} ),
				Origin( {102.159624413146, 8.80833333333333} ),
				Tag Line( 1 )
			)}
		)
	)
);
```

**Code Explanation**:

1. Open data table;
2. Perform PCA on selected columns.
3. Use correlations for estimation.
4. Enable outlier analysis with 4 components.
5. Create contribution proportion plot for sample 101.
6. Close summary plots outline box.
7. Access PCA outlier analysis frame.
8. Set grid line order to 1.
9. Set reference line order to 2.
10. Add pin annotation to specific point.



### Example 9
> **Summary**: Runs Principal Components analysis on a data table to identify key factors and correlations, generating summary plots and conducting outlier analysis.

<!-- Keywords: #PrincipalComponents, #DataAnalysis, #JMPScriptingLanguage, #SummaryPlots, #OutlierAnalysis -->

**Code**:
```jsl
Open("data_table.jmp");
Principal Components(
	Y(
		:ABDOMINAL PAIN, :ABNORMAL VISION, :ALOPECIA, :AMBLYOPIA, :ANEMIA, :ANGINA PECTORIS, :ANOREXIA, :ANXIETY, :ASTHENIA, :ASTHMA,
		:BACK PAIN, :BRONCHITIS, :CHEST PAIN, :CHEST PAIN SUBSTERNAL, :CHILLS, :CONSTIPATION, :COUGH INCREASED, :DEAFNESS, :DEPRESSION,
		:DIARRHEA, :DIZZINESS, :DRY MOUTH, :DUODENAL ULCER, :DYSPEPSIA, :DYSURIA, :ECCHYMOSIS, :EDEMA, :EPISTAXIS, :ERUCTATION,
		:ESOPHAGITIS, :EYE DISORDER, :EYE HEMORRHAGE, :FACE EDEMA, :FEVER, :FLATULENCE, :FLU SYNDROME, :GENERALIZED EDEMA, :HEADACHE,
		:HYPERTONIA, :HYPERURICEMIA, :INCREASED URINARY FREQ, :INFECTION, :KERATOCONJUNCTIVITIS, :LACRIMATION DISORDER, :LYMPHADENOPATHY,
		:MELENA, :MIGRAINE, :NAUSEA, :NECK PAIN, :NERVOUSNESS, :NEUROPATHY, :PAIN, :PERIODONTAL ABSCESS, :PERIPHERAL EDEMA, :PHARYNGITIS,
		:PHLEBITIS, :POLYURIA, :PRURITUS, :RASH, :REACTION UNEVALUABLE, :RECTAL BLEEDING, :RHINITIS, :SGOT INCREASED, :SINUSITIS,
		:SOMNOLENCE, :STOMACH ULCER, :TACHYCARDIA, :TENOSYNOVITIS, :TINNITUS, :URINARY TRACT INFECTIO, :URINARY URGENCY,
		:VESTIBULAR DISORDER, :VITREOUS DISORDER, :VOICE ALTERATION, :VOMITING
	),
	Estimation Method( "REML" ),
	"on Correlations",
	Summary Plots( Label variables( 0 ) ),
	Outlier Analysis( Contribution Proportions Heat Map( 1 ) ),
	SendToReport(
		Dispatch( {"Summary Plots"}, "PCA Summary Plots", FrameBox, {Frame Size( 46, 36 )} ),
		Dispatch( {"Summary Plots"}, "PCA Summary Plots", FrameBox( 2 ), {Frame Size( 49, 36 )} )
	)
);
```

**Code Explanation**:

1. Open data_table data
2. Perform Principal Components analysis.
3. Set response variables.
4. Use REML estimation method.
5. Enable correlations display.
6. Generate summary plots.
7. Disable variable labels in summary plots.
8. Conduct outlier analysis.
9. Create heat map for contribution proportions.
10. Resize PCA summary plots frames.



### Example 10
> **Summary**: Runs principal components analysis on a data table to extract key factors and visualize results in a report.

<!-- Keywords: #PrincipalComponentsAnalysis, #DataVisualization, #JMPScriptingLanguage, #LifeDistributionAnalysis, #WeibullDistribution -->

**Code**:
```jsl
Names Default To Here( 1 );
dt = Open("data_table.jmp");
obj = Principal Components( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
```

**Code Explanation**:

1. Set default names.
2. Open data table.
3. Perform principal components analysis.



### Example 11
> **Summary**: Runs principal components analysis (PCA) on a dataset with 12 variables, using row-wise estimation method and correlations to generate a 3D score plot and biplot.

<!-- Keywords: #PrincipalComponentsAnalysis, #JMPScriptingLanguage, #DataVisualization, #CorrelationAnalysis, #RowWiseEstimation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Principal Components(
	Y(
		:Name( "Age (years)" ), :Name( "Weight (lbs)" ), :Name( "Height (inches)" ), :Name( "Neck circumference (cm)" ),
		:Name( "Chest circumference (cm)" ), :Name( "Abdomen circumference (cm)" ), :Name( "Hip circumference (cm)" ),
		:Name( "Thigh circumference (cm)" ), :Name( "Knee circumference (cm)" ), :Name( "Ankle circumference (cm)" ),
		:Name( "Biceps (extended) circumference (cm)" ), :Name( "Forearm circumference (cm)" ), :Name( "Wrist circumference (cm)" )
	),
	Estimation Method( "Row-wise" ),
	on Correlations,
	Correlations( 1 ),
	Summary Plots( 0 ),
	Name( "3D Score Plot" )(1),
	Biplot( 2 ),
	SendToReport(
		Dispatch( {}, "Principal Components: on Correlations", OutlineBox, {Set Title( "Correlations, Biplot, 3D Score Plot" )} ),
		Dispatch( {"BiPlot"}, "PCA BiPlot", FrameBox, {Frame Size( 50, 35 )} )
	)
);
```

**Code Explanation**:

1. Open table.
2. Perform principal components analysis.
3. Specify variables for analysis.
4. Use row-wise estimation method.
5. Include correlations.
6. Set correlations to 1.
7. Disable summary plots.
8. Enable 3D score plot.
9. Enable biplot with 2 components.
10. Customize report title and frame size.



### Example 12
> **Summary**: Runs Principal Components analysis to extract insights from a dataset, utilizing row-wise estimation and correlations, with adjustable summary plot sizes.

<!-- Keywords: #PrincipalComponents, #RowWiseEstimation, #Correlations, #SummaryPlots, #JMPScriptingLanguage -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Principal Components(
	Y(
		:Name( "Age (years)" ), :Name( "Weight (lbs)" ), :Name( "Height (inches)" ), :Name( "Neck circumference (cm)" ),
		:Name( "Chest circumference (cm)" ), :Name( "Abdomen circumference (cm)" ), :Name( "Hip circumference (cm)" ),
		:Name( "Thigh circumference (cm)" ), :Name( "Knee circumference (cm)" ), :Name( "Ankle circumference (cm)" ),
		:Name( "Biceps (extended) circumference (cm)" ), :Name( "Forearm circumference (cm)" ), :Name( "Wrist circumference (cm)" )
	),
	Estimation Method( "Row-wise" ),
	on Correlations,
	Cluster Variables,
	SendToReport(
		Dispatch( {"Summary Plots"}, "PCA Summary Plots", FrameBox, {Frame Size( 51, 37 )} ),
		Dispatch( {"Summary Plots"}, "PCA Summary Plots", FrameBox( 2 ), {Frame Size( 55, 37 )} )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Run Principal Components analysis.
3. Specify variables for analysis.
4. Use row-wise estimation method.
5. Include correlations in output.
6. Cluster variables option selected.
7. Adjust first summary plot size.
8. Adjust second summary plot size.



### Example 13
> **Summary**: Performs a principal components analysis (PCA) to extract underlying patterns in appliance reliability data, generating summary plots and squared cosines of variables.

<!-- Keywords: #PrincipalComponentsAnalysis, #ReliabilityEngineering, #DataVisualization, #JMPScriptingLanguage, #LifeDistributionAnalysis -->

**Code**:
```jsl
Open( ‚Äú$SAMPLE_DATA/data_table.jmp‚Äù );
obj = Principal Components(
	Y( :"Population (1000)"n ),
	Z( :Life Expectancy Ranking ),
	Estimation Method( "Row-wise" ),
	Standardize( "Standardized" ),
	Eigenvalues( 1 ),
	Bartlett Test( 1 ),
	Summary Plots( Label variables( 0 ) ),
	Squared Cosines of Variables( Plot of Squared Cosines of Variables( Overview( 1 ), "Side by side" ) )
);
obj << Redo Analysis;
```

**Code Explanation**:

1. Open data table.
2. Run principal components analysis.
3. Set Y variable.
4. Set Z variable.
5. Use row-wise estimation.
6. Standardize data.
7. Calculate eigenvalues.
8. Perform Bartlett test.
9. Generate summary plots.
10. Create squared cosines plot.



### Example 14
> **Summary**: Runs a Principal Components analysis to identify key factors in an appliance's reliability, utilizing REML estimation method and clustering variables for visual insights.

<!-- Keywords: #PrincipalComponents, #REML, #Clustering, #JMPScriptingLanguage, #DataAnalysis -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Principal Components(
	Y( :Name( "Sales($M)" ), :Name( "Profit($M)" ), :Name( "#employees" ), :Name( "Assets($Mil.)" ), :Name( "Stockholder's Eq($Mil.)" ) ),
	Estimation Method( "REML" ),
	on Correlations,
	Cluster Variables,
	SendToReport(
		Dispatch( {"Summary Plots"}, "PCA Summary Plots", FrameBox, {Frame Size( 53, 39 )} ),
		Dispatch( {"Summary Plots"}, "PCA Summary Plots", FrameBox( 2 ), {Frame Size( 56, 39 )} ),
		Dispatch( {"Variable Clustering"}, "Cluster Summary", OutlineBox,
			{Set Title( "Cluster Summary - look for header labels on multiple lines, wrapping should occur" )}
		)
	)
);
```

**Code Explanation**:

1. Open data table;
2. Run Principal Components analysis.
3. Set Y variables: Sales, Profit, Employees, Assets, Stockholders' Equity.
4. Use REML estimation method.
5. Analyze correlations.
6. Cluster variables.
7. Resize first PCA plot.
8. Resize second PCA plot.
9. Customize cluster summary title.
10. Display reports.



### Example 15
> **Summary**: Runs Principal Components analysis on a filtered dataset to identify patterns and correlations, utilizing row-wise estimation method and local data filter.

<!-- Keywords: #PrincipalComponents, #DataFiltering, #RowWiseEstimation, #JMPScriptingLanguage, #LifeDistributionAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Principal Components(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Estimation Method( "Row-wise" ),
	on Correlations,
	Local Data Filter(
		Add Filter( columns( :Sepal length ), Where( :Sepal length >= 5.0 & :Sepal length <= 6.5 ) ),
		Mode( Select( 0 ), Show( 1 ), Include( 1 ) )
	), 
);
obj << Automatic Recalc( 0 );
dt << Select Where( :Species == "setosa" );
dt << Exclude();
rpt = Report( obj );
```

**Code Explanation**:

1. Open data table;
2. Create Principal Components analysis.
3. Set variables for analysis.
4. Use row-wise estimation method.
5. Enable correlation matrix.
6. Add local data filter.
7. Filter Sepal length between 5.0 and 6.5.
8. Set filter mode to select.
9. Exclude rows where Species is setosa.
10. Generate report from analysis.



### Example 16
> **Summary**: Runs Principal Components analysis on a dataset with local data filtering and automatic recalculation, generating reports for selected subsets of data.

<!-- Keywords: #PrincipalComponents, #LocalDataFilter, #AutomaticRecalculation, #ReportGeneration, #JMPScriptingLanguage -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Principal Components(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Estimation Method( "Row-wise" ),
	on Correlations,
	Local Data Filter(
		Add Filter( columns( :Sepal length ), Where( :Sepal length >= 5.0 & :Sepal length <= 6.5 ) ),
		Mode( Select( 0 ), Show( 1 ), Include( 1 ) )
	), 
);
obj << Automatic Recalc( 1 );
dt << Select Where( :Species == "setosa" );
dt << Exclude();
rpt = Report( obj );
Close( dt, NoSave );
dt = Open("data_table.jmp");
obj = Principal Components(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Estimation Method( "Row-wise" ),
	on Correlations,
	Local Data Filter(
		Add Filter( columns( :Sepal length ), Where( :Sepal length >= 5.0 & :Sepal length <= 6.5 ) ),
		Mode( Select( 0 ), Show( 1 ), Include( 1 ) )
	), 
);
obj << Automatic Recalc( 0 );
dt << Select Where( :Species == "setosa" );
dt << Exclude();
rpt = Report( obj );
```

**Code Explanation**:

1. Open data table;
2. Perform Principal Components analysis.
3. Set estimation method to row-wise.
4. Use correlations for analysis.
5. Add local data filter on Sepal length.
6. Set filter range to 5.0 to 6.5.
7. Configure filter mode to select 0, show 1, include 1.
8. Enable automatic recalculation.
9. Select rows where Species is setosa.
10. Exclude selected rows.
11. Generate report from analysis.
12. Close dataset without saving.
13. Reopen data_table dataset
14. Repeat Principal Components analysis.
15. Disable automatic recalculation.
16. Select rows where Species is setosa.
17. Exclude selected rows.
18. Generate report from analysis.



### Example 17
> **Summary**: Performs principal component analysis (PCA) on a data table to extract correlations and certified statistics for rows with Ether > 0 and < 0, utilizing the Principal Components platform in JMP.

<!-- Keywords: #JMPScriptingLanguage, #PrincipalComponents, #CorrelationMatrix, #CertifiedStatistics, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
princomp = dt << Principal Components(
	Y( :Name( "1-Octanol" ), :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride ),
	Estimation Method( "Row-wise" ),
	on Correlations,
	Correlations( 1 )
);
princomp << Automatic Recalc( 1 );
dt << Select where( :ether > 0 );
dt << Hide and Exclude( 1 );
sumStats1 = Report( princomp )["Correlations"][Matrix Box( 1 )] << get;
certStats1 = [1 0.639186964594469 0.544422420958056 0.601176645931733 0.495033263329161,
0.639186964594469 1 0.0590715881839129 0.293093401595568 0.337730686192189,
0.544422420958056 0.0590715881839129 1 0.91879136420179 0.846990757537019,
0.601176645931733 0.293093401595568 0.91879136420179 1 0.911341391651443,
0.495033263329161 0.337730686192189 0.846990757537019 0.911341391651443 1];
dt << Clear Row States;
dt << Select Where( :ether < 0 );
dt << Hide and Exclude;
sumStats2 = Report( princomp )["Correlations"][Matrix Box( 1 )] << get;
certStats2 = [1 0.889871330007042 0.501449346239283 0.62353476665854 0.553076202438458,
0.889871330007042 1 0.410122009781931 0.528569390988602 0.448983371517192,
0.501449346239283 0.410122009781931 1 0.936922763201392 0.91663777643923,
0.62353476665854 0.528569390988602 0.936922763201392 1 0.96147666420353,
0.553076202438458 0.448983371517192 0.91663777643923 0.96147666420353 1];
```

**Code Explanation**:

1. Open table.
2. Perform principal component analysis.
3. Enable automatic recalculation.
4. Select rows where Ether > 0.
5. Hide and exclude selected rows.
6. Retrieve correlation matrix.
7. Define certified statistics for Ether > 0.
8. Clear row states.
9. Select rows where Ether < 0.
10. Hide and exclude selected rows.



### Example 18
> **Summary**: Runs Principal Components analysis on a dataset to extract insights from anthropometric measurements, utilizing row-wise estimation and enabling correlations, biplot, and 3D score plot.

<!-- Keywords: #PrincipalComponents, #RowWiseEstimation, #Correlations, #Biplot, #3DScorePlot -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Principal Components(
	Y(
		:Name( "Age (years)" ), :Name( "Weight (lbs)" ), :Name( "Height (inches)" ), :Name( "Neck circumference (cm)" ),
		:Name( "Chest circumference (cm)" ), :Name( "Abdomen circumference (cm)" ), :Name( "Hip circumference (cm)" ),
		:Name( "Thigh circumference (cm)" ), :Name( "Knee circumference (cm)" ), :Name( "Ankle circumference (cm)" ),
		:Name( "Biceps (extended) circumference (cm)" ), :Name( "Forearm circumference (cm)" ), :Name( "Wrist circumference (cm)" )
	),
	Estimation Method( "Row-wise" ),
	on Correlations,
	Correlations( 1 ),
	Summary Plots( 0 ),
	Name( "3D Score Plot" )(1),
	Biplot( 2 ),
	SendToReport(
		Dispatch( {}, "Principal Components: on Correlations", OutlineBox, {Set Title( "Correlations, Biplot, 3D Score Plot" )} ),
		Dispatch( {"Principal Components: on Correlations", "Biplot"}, FrameBox( 2 ), {Frame Size( 50, 35 )} )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Run Principal Components analysis.
3. Set Y variables for analysis.
4. Use Row-wise estimation method.
5. Enable correlations.
6. Set correlation threshold to 1.
7. Disable summary plots.
8. Enable 3D Score Plot.
9. Enable Biplot.
10. Customize report title and size.



### Example 19
> **Summary**: Runs Principal Components analysis to extract insights from appliance data, utilizing row-wise estimation method and correlations.

<!-- Keywords: #PrincipalComponents, #RowWiseEstimation, #Correlations, #JMPScriptingLanguage, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Principal Components( Y( :height ), Estimation Method( "Row-wise" ), on Correlations, );
rpt = Report( obj );
```

**Code Explanation**:

1. Open data table;
2. Create Principal Components analysis.
3. Set height as Y variable.
4. Use Row-wise estimation method.
5. Include correlations.
6. Generate report object.



### Example 20
> **Summary**: Runs the principal component analysis (PCA) of a dataset to extract the most important features, using sparse estimation method and specifying height as the response variable.

<!-- Keywords: #PrincipalComponentAnalysis, #SparseEstimationMethod, #HeightResponseVariable, #JMPScriptingLanguage, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Principal Components( Y( :height ), Estimation Method( "Sparse" ), Number of Components( 1 ) );
```

**Code Explanation**:

1. Open data table.
2. Create principal components object.
3. Specify height as response.
4. Use sparse estimation method.
5. Set number of components to 1.



### Example 21
> **Summary**: Performs principal component analysis on a dataset to extract three key components using the sparse estimation method.

<!-- Keywords: #PrincipalComponentAnalysis, #SparseEstimationMethod, #JMPScriptingLanguage, #DataVisualization, #LifeDistributionAnalysis -->

**Code**:
```jsl
Open("data_table.jmp");
obj = Principal Components( Y( :p1, :p2, :p3 ), Estimation Method( "sparse" ), Number of Components( 3 ) );
```

**Code Explanation**:

1. Open data table.
2. Perform principal component analysis.
3. Specify response variables.
4. Use sparse estimation method.
5. Set number of components to 3.



### Example 22
> **Summary**: Performs a life distribution analysis using Weibull distribution to analyze appliance data, generating summary plots and comparing squared cosines of variables.

<!-- Keywords: #JMPScriptingLanguage, #PrincipalComponentsAnalysis, #LifeDistributionAnalysis, #WeibullDistribution, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj1 = dt << Principal Components(
	Y( :NPN1, :PNP1, :PNP2, :NPN2, :PNP3, :IVP1, :PNP4 ),
	Estimation Method( "Default" ),
	"on Correlations",
	Formatted Loading Matrix( 1 ),
	Squared Cosines of Variables( 1 ),
	SendToReport(
		Dispatch( {"Summary Plots"}, "PCA Summary Plots", FrameBox, {Frame Size( 49, 38 )} ),
		Dispatch( {"Summary Plots"}, "PCA Summary Plots", FrameBox( 2 ), {Frame Size( 52, 38 )} )
	)
);
	
obj2 = dt << Principal Components(
	Y( :NPN1, :PNP1, :PNP2, :NPN2, :PNP3, :IVP1, :PNP4 ),
	Estimation Method( "Default" ),
	"on Correlations",
	Squared Cosines of Variables( 1 ),
	Formatted Loading Matrix( 1 ),
	SendToReport(
		Dispatch( {"Summary Plots"}, "PCA Summary Plots", FrameBox, {Frame Size( 49, 38 )} ),
		Dispatch( {"Summary Plots"}, "PCA Summary Plots", FrameBox( 2 ), {Frame Size( 52, 38 )} )
	)
);
rpt1 = obj1 << Report;
rpt2 = obj2 << Report;
actForLo1 = rpt1[Outline Box( "Formatted Loading Matrix" )][Matrix Box( 1 )] << Get;
actForLo2 = rpt2[Outline Box( "Formatted Loading Matrix" )][Matrix Box( 1 )] << Get;
actPlot1 = rpt1[Outline Box( "Plot of Squared Cosines of Variables" )] << Get Picture;
actPlot2 = rpt2[Outline Box( "Plot of Squared Cosines of Variables" )] << Get Picture;
myLog = Log Capture( ut pictureCompare( actPlot1, actPlot2 ) );
```

**Code Explanation**:

1. Open data table;
2. Perform PCA on specified columns.
3. Configure PCA settings.
4. Generate summary plots.
5. Repeat PCA analysis.
6. Extract formatted loading matrix.
7. Extract squared cosines plot.
8. Compare squared cosines plots.
9. Capture comparison results.
10. Save log of comparison.



### Example 23
> **Summary**: Performs a principal components analysis (PCA) on a data table, generating multiple reports with partial contribution and squared cosines of variables, and extracting journals from each report.

<!-- Keywords: #PrincipalComponentsAnalysis, #DataVisualization, #JMPScriptingLanguage, #ReportGeneration, #JournalExtraction -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10, :Lead ),
	Estimation Method( "Default" ),
	"on Correlations",
	Partial Contribution of Variables( 1 )
);
rpt1 = obj << Report;
actJournal1 = rpt1 << Get Journal;
obj << Partial Contribution of Variables( 0 );
obj << Partial Contribution of Variables( 1 );
rpt2 = obj << Report;
actJournal2 = rpt2 << Get Journal;
obj << Squared Cosines of Variables( 1 );
obj << Squared Cosines of Variables( 0 );
obj << Squared Cosines of Variables( 1 );
rpt3 = obj << Report;
actJournal3 = rpt3 << Get Journal;
obj2 = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10, :Lead ),
	Estimation Method( "Default" ),
	"on Correlations",
	Partial Contribution of Variables( 1 ),
	Squared Cosines of Variables( 1 )
);
rpt4 = obj2 << Report;
actJournal4 = rpt4 << Get Journal;
```

**Code Explanation**:

1. Open data table;
2. Perform principal components analysis.
3. Generate first report.
4. Extract journal from report.
5. Toggle partial contribution option.
6. Regenerate report.
7. Extract second journal.
8. Toggle squared cosines option.
9. Regenerate report.
10. Extract third journal.



### Example 24
> **Summary**: Performs Principal Component Analysis on a data table to identify key components and detect outliers, generating a report with summary plots.

<!-- Keywords: #PrincipalComponentAnalysis, #DataVisualization, #OutlierDetection, #JMPScriptingLanguage, #DataAnalytics -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Principal Components(
	Y( :Mass, :Fore, :Bicep, :Chest, :Neck, :Shoulder, :Waist, :Height, :Calf, :Thigh, :Head ),
	Estimation Method( "Default" ),
	"on Correlations"
);
obj << Outlier Analysis;
rpt = obj << Report();
summary = rpt[Outline Box( "Principal Components: on Correlations" )] << Get Journal();
```

**Code Explanation**:

1. Open data table.
2. Run Principal Component Analysis.
3. Use correlation matrix.
4. Perform outlier analysis.
5. Retrieve analysis report.
6. Extract principal components summary.



### Example 25
> **Summary**: Analyze appliance data using Principal Component Analysis (PCA) with sparse and wide estimation methods, generating reports and extracting summaries.

<!-- Keywords: #JMPScriptingLanguage, #PrincipalComponentAnalysis, #SparseEstimation, #WideEstimation, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj1 = dt << Principal Components( Y( :POP, :Max deg. F Jan, :OZONE, :CO ), Estimation Method( "Sparse" ), Number of Components( 2 ) );
rpt1 = obj1 << Report();
summary = rpt1[Outline Box( "Principal Components" )] << Get Journal();
obj2 = dt << Principal Components( Y( :POP, :Max deg. F Jan, :OZONE, :CO ), Estimation Method( "Wide" ) );
rpt2 = obj2 << Report();
summary = rpt2[Outline Box( "Principal Components" )] << Get Journal();
```

**Code Explanation**:

1. Open table.
2. Fit sparse PCA.
3. Generate report.
4. Extract summary.
5. Fit wide PCA.
6. Generate report.
7. Extract summary.



### Example 26
> **Summary**: Analyze appliance reliability data using Principal Component Analysis (PCA) on both covariances and correlations, generating summary plots for each.

<!-- Keywords: #JMPScriptingLanguage, #PrincipalComponentAnalysis, #DataAnalysis, #ReliabilityEngineering, #AppliancePerformance -->

**Code**:
```jsl
dt1 = Open("data_table.jmp");
obj1 = dt1 << Principal Components( Y( 2 :: 30 ), Variance Estimation( "Wide" ), "on Covariances" );
rpt1 = obj1 << Report();
obj2 = dt1 << Principal Components( Y( 2 :: 30 ), Variance Estimation( "Wide" ), "on Correlations" );
rpt2 = obj2 << Report();
jrn1sum = rpt1[Outline Box( "Summary Plots" )] << Get Journal();
jrn2sum = rpt2[Outline Box( "Summary Plots" )] << Get Journal();
If( JMP Product Name() == "Pro",
	obj3 = dt1 << Principal Components( Y( 2 :: 30 ), Variance Estimation( "Sparse" ), Number of Components( 4 ), "on Covariances" );
	obj4 = dt1 << Principal Components( Y( 2 :: 30 ), Variance Estimation( "Sparse" ), Number of Components( 4 ), "on Correlations" );
	rpt3 = obj3 << Report();
	rpt4 = obj4 << Report();
	jrn3sum = rpt3[Outline Box( "Summary Plots" )] << Get Journal();
	jrn4sum = rpt4[Outline Box( "Summary Plots" )] << Get Journal();
);
```

**Code Explanation**:

1. Open data table;
2. Perform PCA on covariances.
3. Create report for PCA on covariances.
4. Perform PCA on correlations.
5. Create report for PCA on correlations.
6. Extract summary plots journal from PCA on covariances.
7. Extract summary plots journal from PCA on correlations.
8. Check if JMP product is Pro.
9. Perform sparse PCA on covariances.
10. Perform sparse PCA on correlations.



### Example 27
> **Summary**: Runs the principal component analysis (PCA) of a dataset, deleting the OZONE column and generating scriptable objects for further processing.

<!-- Keywords: #JMPScriptingLanguage, #PrincipalComponentAnalysis, #DataPreprocessing, #ScriptableObject, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Principal Components( Y( :POP, :OZONE, :CO, :SO2, :NO2 ), Variance Estimation( "Default" ), "on Correlations" );
dt << delete columns( "OZONE" );
scrobj = obj << Get Scriptable Object;
```

**Code Explanation**:

1. Open table.
2. Perform PCA.
3. Delete OZONE column.
4. Get scriptable object.



### Example 28
> **Summary**: Analyze appliance data by performing principal component analysis, removing columns 3 to 7, and capturing cluster variables.

<!-- Keywords: #PrincipalComponentAnalysis, #DataPreprocessing, #ClusterVariables, #JMPScriptingLanguage, #LifeDistributionAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
pca = dt << Principal Components( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
dt << Delete Columns( 3 :: 7 );
Log Capture( pca << Cluster Variables );
```

**Code Explanation**:

1. Open data table;
2. Perform principal component analysis.
3. Remove columns 3 to 7.
4. Log capture cluster variables output.



### Example 29
> **Summary**: Analyze appliance reliability data using principal component analysis, generating summary plots and extracting a report object.

<!-- Keywords: #PrincipalComponentAnalysis, #SummaryPlots, #ReportObject, #JMPScriptingLanguage, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Principal Components(
	Y( :height, :weight ),
	Variance Estimation( "Default" ),
	"on Correlations",
	SendToReport(
		Dispatch( {"Summary Plots"}, "1", ScaleBox, {Label Row( Inside Ticks( 1 ) )} ),
		Dispatch( {"Summary Plots"}, "2", ScaleBox, {Label Row( Inside Ticks( 1 ) )} )
	)
);
rpt = obj << report;
jrn = rpt << Get Journal;
ticks_exp = {Inside Ticks( 1 ), Inside Ticks( 1 ), Inside Ticks( 1 ), Inside Ticks( 1 ), Inside Ticks( 0 ), Inside Ticks( 0 )};
```

**Code Explanation**:

1. Open data table.
2. Perform principal component analysis.
3. Set variance estimation method.
4. Use correlations for analysis.
5. Customize summary plots.
6. Extract report object.
7. Retrieve journal from report.
8. Define tick marks for labels.



### Example 30
> **Summary**: Analyze appliance reliability data by performing principal component analysis on LBI and LBS variables, deleting rows 1-29, and conducting outlier analysis on component 1.

<!-- Keywords: #PrincipalComponentsAnalysis, #ApplianceReliability, #DataPreprocessing, #OutlierDetection, #JMPScriptingLanguage -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Principal Components( Y( :LBI, :LBS ), Variance Estimation( "Default" ), "on Correlations" );
dt << delete rows( 1 :: 29 );
obj << outlier analysis( 1 );
```

**Code Explanation**:

1. Open data table;
2. Create principal component analysis object.
3. Analyze LBI and LBS variables.
4. Use default variance estimation.
5. Base analysis on correlations.
6. Delete first 29 rows from dataset.
7. Perform outlier analysis on component 1.



### Example 31
> **Summary**: Runs a principal component analysis (PCA) on the appliance data to identify key factors and visualize correlations, with outlier analysis and contribution heat maps.

<!-- Keywords: #PrincipalComponentAnalysis, #OutlierAnalysis, #ContributionHeatMap, #JMPScriptingLanguage, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Principal Components(
	Y( 2 :: N Col( dt ) ),
	Variance Estimation( "Wide" ),
	Number of Components( 2 ),
	"on Correlations",
	Outlier Analysis( Number of Components( 2 ), Contribution Heat Map( 1 ), Contribution Proportions Heat Map( 1 ) )
);
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Perform principal component analysis.
3. Set response variables range.
4. Use wide variance estimation.
5. Specify number of components.
6. Analyze correlations.
7. Conduct outlier analysis.
8. Set outlier analysis components.
9. Enable contribution heat map.
10. Enable contribution proportions heat map.



### Example 32
> **Summary**: Performs Principal Component Analysis (PCA) to identify patterns in the Sepal length, Sepal width, Petal length, and Petal width variables from a data table, with outlier analysis and contribution heat maps.

<!-- Keywords: #PrincipalComponentAnalysis, #OutlierDetection, #DataVisualization, #JMPScriptingLanguage, #MultivariateAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Principal Components(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Variance Estimation( "Default" ),
	"on Correlations",
	Outlier Analysis(
		1,
		Number of Components( 2 ),
		Set Œ± Level( 0.1 ),
		Contribution Heat Map( 1 ),
		Contribution Proportions Heat Map( 1 ),
		Normalized DModX Plot( 1 ),
		Contribution Plots for Selected Samples( {16, 34, 42, 61} )
	)
);
obj << Save Script to Report;
rpt = obj << report;
text_act = Try( rpt[Text Box( 1 )] << Get Text );
text_exp =
"Principal Components(
Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
Estimation Method( \!"Row-wise\!" ),
Standardize( \!"Standardized\!" ),
Outlier Analysis(
1,
Number of Components( 2 ),
Set Œ± Level( 0.1 ),
Contribution Heat Map( 1 ),
Contribution Proportions Heat Map( 1 ),
Normalized DModX Plot( 1 ),
Contribution Plots for Selected Samples( {16, 34, 42, 61} )
)
)";
```

**Code Explanation**:

1. Open data table;
2. Perform Principal Component Analysis.
3. Analyze correlations.
4. Conduct outlier analysis.
5. Use 2 components for outliers.
6. Set Œ± level to 0.1.
7. Enable contribution heat map.
8. Enable contribution proportions heat map.
9. Enable normalized DModX plot.
10. Generate contribution plots for specific samples.



### Example 33
> **Summary**: Performs Principal Component Analysis (PCA) on a data table to visualize relationships between variables, generating biplots, loading plots, and scatterplot matrices.

<!-- Keywords: #JMPScriptingLanguage, #PrincipalComponentAnalysis, #DataVisualization, #Statistics, #MachineLearning -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Principal Components(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Variance Estimation( "Default" ),
	"on Correlations",
	Biplot( 2 ),
	Scatterplot Matrix( 3 ),
	Loading Plot( 2 )
);
rpt = obj << report;
obj << Biplot( 2, Label variables( 0 ) );
obj << Loading Plot( 2, Label variables( 0 ) );
obj << Scatterplot Matrix( 3, Label variables( 0 ) );
obj << Biplot( Label variables( 1 ) );
obj << Loading Plot( Label variables( 1 ) );
obj << Scatterplot Matrix( Label variables( 1 ) );
```

**Code Explanation**:

1. Open data table;
2. Perform PCA analysis.
3. Use correlations for variance estimation.
4. Create biplot with 2 components.
5. Generate scatterplot matrix with 3 components.
6. Produce loading plot with 2 components.
7. Retrieve PCA report.
8. Update biplot to not label variables.
9. Update loading plot to not label variables.
10. Update scatterplot matrix to not label variables.
11. Update biplot to label variables.
12. Update loading plot to label variables.
13. Update scatterplot matrix to label variables.



### Example 34
> **Summary**: Performs Principal Component Analysis (PCA) on intensities to extract meaningful components, utilizing row-wise variance estimation and correlation-based analysis.

<!-- Keywords: #PrincipalComponentAnalysis, #RowWiseVarianceEstimation, #CorrelationBasedAnalysis, #DataMatrix, #JMPScriptingLanguage -->

**Code**:
```jsl
data = Open("data_table.jmp");
obj = data << Principal Components( Y( Column Group( "Intensities" ) ), Variance Estimation( "Row-wise" ), "on Correlations" );
obj << Save DMODX( 15 );
obj << Save DMODX( 27 );
obj << Save DMODX( 100 );
obj << Save DMODX( 1 );
obj << Save DMODX( 0 );
mymat = data << Get As Matrix();
```

**Code Explanation**:

1. Open data table;
2. Perform PCA on intensities.
3. Use row-wise variance estimation.
4. Base analysis on correlations.
5. Save DMODX for component 15.
6. Save DMODX for component 27.
7. Save DMODX for component 100.
8. Save DMODX for component 1.
9. Save DMODX for component 0.
10. Retrieve data as matrix.



### Example 35
> **Summary**: Runs the principal component analysis (PCA) of appliance data to extract meaningful insights, defining expected values for Principal Component 1 and 2, and saving the first two components.

<!-- Keywords: #JSLScriptingLanguage, #PrincipalComponentAnalysis, #DataVisualization, #ApplianceReliability, #LifeDistributionAnalysis -->

**Code**:
```jsl
data = Open("data_table.jmp");
obj = data << Principal Components( Y( :ls, :ha, :dt ), Variance Estimation( "Wide" ), "on Correlations" );
GetPrinComp1Exp = [-1.231799651, -1.889587812, -1.589739752, -1.117547105, -0.840710102, 0.4132510795, 0.1548555807, 0.8364033347,
0.7231268034, -0.57903298, 1.145119381, 2.3802722188, -0.257007399, 0.266991695, 0.2136793205, 1.3717253868];
GetPrinComp2Exp = [-0.061600286, 1.5026828618, -1.568999353, -0.116351984, 1.0202367043, 0.248407965, -0.098002428, -1.130309797,
0.5088371309, -1.192747906, -1.109704567, 0.1416042873, 1.1601978549, -0.149420549, -0.784690422, 1.6298604863];
GroupedCol = obj << Save Principal Components( 2 );
groupcol1 = Column( "Prin1" );
GetPrinComp1Act = groupcol1 << Get As Matrix;
groupcol2 = Column( "Prin2" );
GetPrinComp2Act = groupcol2 << Get As Matrix;
```

**Code Explanation**:

1. Open data table;
2. Perform principal component analysis.
3. Define expected values for Principal Component 1.
4. Define expected values for Principal Component 2.
5. Save the first two principal components.
6. Retrieve column "Prin1".
7. Convert "Prin1" to matrix.
8. Retrieve column "Prin2".
9. Convert "Prin2" to matrix.



### Example 36
> **Summary**: Performs a life distribution analysis using principal component analysis (PCA) to extract predicted values for appliance reliability, utilizing the Weibull distribution and JMP scripting language.

<!-- Keywords: #JMPScriptingLanguage, #PrincipalComponentAnalysis, #LifeDistributionAnalysis, #WeibullDistribution, #ApplianceReliability -->

**Code**:
```jsl
data = Open("data_table.jmp");
obj = data << Principal Components( Y( :ls, :ha, :dt ), Variance Estimation( "Wide" ), "on Correlations" );
GetPred1Exp = [1.1415886635, 0.5307489019, 0.8355018855, 1.2452669491, 1.48232604, 2.6221372435, 2.3929013108, 3.0192414727, 2.8987726342,
1.743067689, 3.2975055097, 4.3977852538, 2.0073253288, 2.4946331757, 2.4536251607, 3.4713727811];
GetPred2Exp = [0.1780960543, 0.3499363368, -0.079597029, 0.1805532078, 0.3755006598, 0.3770200293, 0.3014438002, 0.2110218595, 0.4445741033,
0.0702839767, 0.242758109, 0.5437790318, 0.4505450902, 0.3042007912, 0.204657467, 0.6717265125];
GetPred3Exp = [41.483367922, -11.77763906, 72.089707963, 45.253249543, 22.321003669, 68.014673097, 71.368861136, 111.68619926, 67.908108074,
83.696625764, 117.61438773, 111.80206451, 30.977943271, 75.010312247, 89.946303947, 53.13483092];
GroupedCol = obj << Save Predicteds( 2 );
groupcol1 = Column( "Predicted ls" );
GetPred1Act = groupcol1 << Get As Matrix;
groupcol2 = Column( "Predicted ha" );
GetPred2Act = groupcol2 << Get As Matrix;
groupcol3 = Column( "Predicted dt" );
GetPred3Act = groupcol3 << Get As Matrix;
```

**Code Explanation**:

1. Open data table;
2. Perform principal component analysis.
3. Define expected predictions for GetPred1.
4. Define expected predictions for GetPred2.
5. Define expected predictions for GetPred3.
6. Save predicted values from PCA.
7. Extract "Predicted ls" column.
8. Convert "Predicted ls" to matrix.
9. Extract "Predicted ha" column.
10. Convert "Predicted ha" to matrix.



### Example 37
> **Summary**: Performs a principal components analysis on an appliance data table, analyzing correlations and generating a report.

<!-- Keywords: #PrincipalComponentsAnalysis, #CorrelationAnalysis, #ReportGeneration, #JMPScriptingLanguage, #DataAnalytics -->

**Code**:
```jsl
dtb = Open("data_table.jmp");
dtb[3, 9] = .;
dtb[8, 12] = .;
dtb[5, 14] = .;
obj = dtb << Principal Components(
	Y(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16, :v17, :v18, :v19, :v20, :v21, :v22, :v23,
		:v24, :v25, :v26, :v27
	),
	Estimation Method( "Default" ),
	"on Correlations"
);
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Set cell [3, 9] to missing.
3. Set cell [8, 12] to missing.
4. Set cell [5, 14] to missing.
5. Perform principal components analysis.
6. Specify variables for analysis.
7. Use default estimation method.
8. Analyze correlations.
9. Generate report object.
10. Assign report to variable.



### Example 38
> **Summary**: Performs principal component analysis (PCA) on the appliance data table, extracting a single component using randomized SVD method and generating various plots for visualization.

<!-- Keywords: #PrincipalComponentAnalysis, #RandomizedSVD, #JMPScriptingLanguage, #DataVisualization, #ApplianceReliability -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Principal Components(
	Y( :height ),
	Estimation Method( "Randomized SVD" ),
	Number of Components( 1 ),
	Standardize( "Standardized" ),
	Formatted Loading Matrix( 1 ),
	Scree Plot( 1 ),
	Score Ellipses( 1 ),
	Summary Plots( Label variables( 0 ) ),
	Loading Matrix( Plot of Loading Matrix( Overview( 1 ), "Side by side" ) ),
	Squared Cosines of Variables( Plot of Squared Cosines of Variables( Overview( 1 ), "Side by side" ) ),
	Partial Contribution of Variables( Plot of Partial Contribution of Variables( Overview( 1 ), "Side by side" ) )
);
```

**Code Explanation**:

1. Open data table.
2. Perform principal component analysis.
3. Use height as response variable.
4. Apply randomized SVD method.
5. Set number of components to 1.
6. Standardize data.
7. Include formatted loading matrix.
8. Generate scree plot.
9. Display score ellipses.
10. Create summary plots without labels.



### Example 39
> **Summary**: Performs a principal components analysis (PCA) to identify relationships between OZONE, CO, SO2, NO, and PM10 variables in the provided data table, with standardized variables and partial contribution plots.

<!-- Keywords: #PrincipalComponentsAnalysis, #DataStandardization, #PartialContributionPlot, #JMPScriptingLanguage, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), Standardize( "Standardized" ) );
obj << Partial Contribution of Variables( Plot of Partial Contribution of Variables( Overview( 3 ), "Side by side" ) );
```

**Code Explanation**:

1. Open data table;
2. Perform principal components analysis.
3. Analyze variables OZONE, CO, SO2, NO, PM10.
4. Standardize variables.
5. Display partial contribution plot.
6. Set overview to 3.
7. Arrange plots side by side.



### Example 40
> **Summary**: Runs Principal Components analysis to extract meaningful relationships between OZONE, CO, SO2, NO, and PM10 variables in a data table, with individual partial contributions saved for the top 3 components.

<!-- Keywords: #PrincipalComponents, #DataAnalysis, #JMPScriptingLanguage, #PartialContributions, #MultivariateAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), "on Covariances" );
obj << Save Individual Partial Contributions( 3 );
```

**Code Explanation**:

1. Open data table;
2. Perform Principal Components analysis.
3. Specify OZONE, CO, SO2, NO, PM10 variables.
4. Use covariances for analysis.
5. Save individual partial contributions.
6. Set number of components to 3.



### Example 41
> **Summary**: Runs the principal component analysis (PCA) of a data table to extract key variables and relationships, utilizing covariances for analysis.

<!-- Keywords: #JMPScriptingLanguage, #PrincipalComponentAnalysis, #DataVisualization, #CovarianceMatrix, #PCAApplication -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), "on Covariances" );
obj << Save Individual Squared Cosines( 3 );
```

**Code Explanation**:

1. Open data table;
2. Create principal component analysis object.
3. Specify variables for analysis.
4. Use covariances for analysis.
5. Save individual squared cosines.



### Example 42
> **Summary**: Performs principal component analysis (PCA) to extract insights from variables OZONE, CO, SO2, NO, and PM10 in a standardized data set, generating a squared cosines plot with horizontal orientation.

<!-- Keywords: #PrincipalComponentAnalysis, #DataStandardization, #SquaredCosinesPlot, #JMPScriptingLanguage, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), Standardize( "Standardized" ) );
obj << Squared Cosines of Variables( Plot of Squared Cosines of Variables( Overview( 3 ), "Stacked", "Horizontal" ) );
```

**Code Explanation**:

1. Open data table;
2. Create principal component analysis.
3. Analyze variables OZONE, CO, SO2, NO, PM10.
4. Standardize data using "Standardized" method.
5. Generate squared cosines plot.
6. Display overview with 3 components.
7. Use stacked layout for plot.
8. Orient plot horizontally.



### Example 43
> **Summary**: Runs Principal Components analysis to extract the first eigenvalue and perform a Bartlett test on correlations, generating a report object with summary plots.

<!-- Keywords: #PrincipalComponents, #BartlettTest, #Eigenvalues, #Correlations, #JMPReport -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Principal Components(
	Y( :v1, :v2, :v3, :v4 ),
	Estimation Method( "Default" ),
	"on Correlations",
	Eigenvalues( 1 ),
	Bartlett Test( 1 ), 
);
rpt = obj << Report();
```

**Code Explanation**:

1. Open data table;
2. Run Principal Components analysis.
3. Specify variables v1, v2, v3, v4.
4. Use default estimation method.
5. Analyze correlations.
6. Extract first eigenvalue.
7. Perform Bartlett test.
8. Generate report object.



### Example 44
> **Summary**: Runs the principal component analysis (PCA) on a subset of columns in an appliance data table, saving the results with imputation.

<!-- Keywords: #JMPScriptingLanguage, #PrincipalComponentAnalysis, #DataImputation, #ApplianceReliability, #LifeDistributionAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
:Al[1 :: 5] = .;
obj1 = dt << Principal Components( Y( 2 :: 16 ) );
obj1 << Save Principal Components with Imputation( 2 );
```

**Code Explanation**:

1. Open data table;
2. Set Al columns 1-5 to missing.
3. Perform PCA on columns 2-16.
4. Save principal components with imputation.



### Example 45
> **Summary**: Runs principal components analysis on a dataset to extract two key components, generating a loading plot and biplot for visual inspection.

<!-- Keywords: #JMPScriptingLanguage, #PrincipalComponentsAnalysis, #DataVisualization, #LoadingPlot, #Biplot -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Principal Components( Y( 1 :: 5 ) );
obj << Loading Plot( 2 );
obj << Biplot( 2 );
```

**Code Explanation**:

1. Open data table;
2. Perform principal components analysis.
3. Generate loading plot for two components.
4. Create biplot for two components.



### Example 46
> **Summary**: Performs a principal components analysis on the appliance data, generating a report with loading plots and biplots for 2 variables.

<!-- Keywords: #PrincipalComponentsAnalysis, #LoadingPlot, #Biplot, #ReportGeneration, #JMPScriptingLanguage -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Principal Components( Y( 1 :: 5 ), Loading Plot( 2 ), Biplot( 2 ) );
obj << {Loading Plot( 0 ), Biplot( 0 )};
rpt = obj << report;
```

**Code Explanation**:

1. Open data_table data
2. Run principal components analysis.
3. Set loading plot to 2 variables.
4. Set biplot to 2 variables.
5. Disable loading plot.
6. Disable biplot.
7. Generate report object.



### Example 47
> **Summary**: Performs a principal components analysis (PCA) on selected variables from an appliance data table, generating summary plots and biplots for visualization.

<!-- Keywords: #PrincipalComponentsAnalysis, #DataVisualization, #JMPScriptingLanguage, #ApplianceReliability, #LifeDistributionAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	"on Correlations",
	Arrow Lines( 1 ),
	Biplot( 2 ),
	Loading Plot( 2 ), 
);
rpt = obj << report;
obj << Label variables( 0 );
labelCheck = rpt[Outline Box( "Summary Plots" )][CheckBoxBox( 1 )] << get;
biplotLabel = rpt[Outline Box( "Biplot" )][CheckBoxBox( 1 )] << get;
loadingLabel = rpt[Outline Box( "Loading Plot" )][CheckBoxBox( 1 )] << get;
```

**Code Explanation**:

1. Open table.
2. Perform principal components analysis.
3. Select variables for analysis.
4. Enable correlations display.
5. Set arrow lines thickness.
6. Generate biplot.
7. Create loading plot.
8. Retrieve report object.
9. Disable variable labels.
10. Check summary plots label status.
11. Check biplot label status.
12. Check loading plot label status.



### Example 48
> **Summary**: Analyze a dataset to identify principal components and visualize summary plots, specifically focusing on setosa species data.

<!-- Keywords: #JMPScriptingLanguage, #PrincipalComponentsAnalysis, #DataVisualization, #SummaryPlots, #SetosaSpecies -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Principal Components( Where( :Species == "setosa" ), Y( :Sepal Length, :Sepal Width, :Petal Length, :Petal Width ) );
obj << Save Principal Components( 2 );
obj << Data Table Window;
dt1 = Current Data Table();
```

**Code Explanation**:

1. Open data table;
2. Select rows where Species is setosa.
3. Perform Principal Component Analysis.
4. Specify variables for analysis.
5. Save first two principal components.
6. Display data table window.
7. Retrieve current data table.



### Example 49
> **Summary**: Performs a life distribution analysis using Weibull distribution to analyze appliance data, performing principal component analysis (PCA) on selected columns and generating loading plots and biplots.

<!-- Keywords: #JMPScriptingLanguage, #PrincipalComponentsAnalysis, #LifeDistributionAnalysis, #WeibullDistribution, #ApplianceReliability -->

**Code**:
```jsl
dt = Open("data_table.jmp");
:Al[1 :: 5] = .;
obj1 = dt << Principal Components( Y( 2 :: 16 ) );
obj1 << Save Principal Components with Imputation( 2 );
dt = Open("data_table.jmp");
obj = dt << Principal Components( Y( 1 :: 5 ) );
obj << Loading Plot( 2 );
obj << Biplot( 2 );
```

**Code Explanation**:

1. Open data table;
2. Set first 5 Al values to missing.
3. Perform PCA on columns 2-16.
4. Save PCA with imputation for 2 components.
5. Open data table;
6. Perform PCA on columns 1-5.
7. Create loading plot for 2 components.
8. Create biplot for 2 components.



### Example 50
> **Summary**: Performs a life distribution analysis using Principal Components and pairwise estimation method to analyze correlations in an appliance data table.

<!-- Keywords: #JMPScriptingLanguage, #PrincipalComponents, #PairwiseEstimationMethod, #CorrelationAnalysis, #LifeDistributionAnalysis -->

**Code**:
```jsl
dt1 = Open("data_table.jmp");
dt1:v1[1] = .;
mv = dt1 << Principal Components(
	Y(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16, :v17, :v18, :v19, :v20, :v21, :v22, :v23,
		:v24, :v25, :v26, :v27
	),
	Estimation Method( "Pairwise" ),
	"on Correlations", 
);
mv << Impute Missing Data( 1 );
Close( dt1, No Save );
dt2 = Current Data Table();
v1One = Column( dt2, 1 )[1];
```

**Code Explanation**:

1. Open data table;
2. Set first value of v1 to missing.
3. Perform Principal Components analysis.
4. Use pairwise estimation method.
5. Analyze correlations.
6. Impute missing data.
7. Close original table without saving.
8. Retrieve current data table.
9. Assign first value of first column to v1One.



### Example 51
> **Summary**: Performs a life distribution analysis using Principal Components to identify patterns in appliance data, with pairwise estimation and missing data imputation.

<!-- Keywords: #PrincipalComponents, #LifeDistributionAnalysis, #ApplianceData, #PairwiseEstimation, #MissingDataImputation -->

**Code**:
```jsl
dt1 = Open("data_table.jmp");
dt1:v1[1] = .;
mv = dt1 << Principal Components(
	Y(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16, :v17, :v18, :v19, :v20, :v21, :v22, :v23,
		:v24, :v25, :v26, :v27
	),
	Estimation Method( "Pairwise" ),
	"on Correlations", 
);
mv << Impute Missing Data( 1 );
```

**Code Explanation**:

1. Open data table;
2. Set first value of v1 to missing.
3. Run Principal Components analysis.
4. Select variables v1 to v27 for analysis.
5. Use pairwise estimation method.
6. Analyze correlations.
7. Impute missing data.



### Example 52
> **Summary**: Creates a Principal Components report from a data table, standardizing variables 'name' and 'sex', and generating summary plots.

<!-- Keywords: #PrincipalComponents, #Standardization, #SummaryPlots, #DataAnalysis, #JMP -->

**Code**:
```jsl
dt2 = Open("data_table.jmp");
obj2 = dt2 << Principal Components( Y( :name, :sex ), Standardize( "Standardized" ) );
rpt2 = Report( obj2 );
jrn2 = rpt2 << get journal;
```

**Code Explanation**:

1. Open data table;
2. Create Principal Components object.
3. Specify Y variables: name, sex.
4. Standardize data.
5. Generate report object.
6. Extract journal from report.



### Example 53
> **Summary**: Creates and saves two principal components (PCs) from a JMP data table, using standardized variables and eigenvectors.

<!-- Keywords: #JMPScriptingLanguage, #PrincipalComponentsAnalysis, #DataStandardization, #Eigenvectors, #PCA -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj1 = dt << Principal Components(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width, :Species ),
	Standardize( "Standardized" ),
	Eigenvectors( 1 )
);
obj1 << save principal components( 2 );
 
obj2 = dt << Principal Components(
	Y( :Species, :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Standardize( "Standardized" ),
	Eigenvectors( 1 )
);
obj2 << save principal components( 2 );
```

**Code Explanation**:

1. Open data table;
2. Create PCA object 1.
3. Include all variables in PCA.
4. Standardize data.
5. Set eigenvectors to 1.
6. Save first two principal components.
7. Create PCA object 2.
8. Include Species in PCA.
9. Standardize data.
10. Set eigenvectors to 1.
11. Save first two principal components.



### Example 54
> **Summary**: Analyze a dataset using Principal Component Analysis (PCA) to extract meaningful patterns and relationships, generating reports for both sparse and row-wise estimation methods.

<!-- Keywords: #JMPScriptingLanguage, #PrincipalComponentAnalysis, #DataAnalysis, #SparsePca, #RowWisePca -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Principal Components(
	Estimation Method( "Sparse" ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Components( 4 ),
	Eigenvalues( 1 )
);
rpt = obj << report;
obj2 = dt << Principal Components(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Estimation Method( "Row-wise" ),
	"on Correlations",
	Eigenvalues( 1 )
);
rpt2 = obj2 << report;
```

**Code Explanation**:

1. Open data table;
2. Run Sparse PCA analysis.
3. Specify variables for analysis.
4. Set number of components.
5. Request eigenvalues.
6. Generate report for Sparse PCA.
7. Run Row-wise PCA analysis.
8. Specify variables for analysis.
9. Use correlations for estimation.
10. Request eigenvalues and generate report.



### Example 55
> **Summary**: Runs the principal component analysis (PCA) of a dataset to extract two components using the sparse estimation method.

<!-- Keywords: #PrincipalComponentAnalysis, #SparseEstimationMethod, #DataVisualization, #JMPScriptingLanguage, #DimensionalityReduction -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Principal Components( Y( :Name( "pop- m" ), :POP ), Estimation Method( "Sparse" ), Number of Components( 2 ) );
```

**Code Explanation**:

1. Open table.
2. Create principal components object.
3. Specify response variables.
4. Choose sparse estimation method.
5. Set number of components.



### Example 56
> **Summary**: Runs the principal component analysis (PCA) of a data table to extract key features and relationships, utilizing row-wise estimation method.

<!-- Keywords: #PrincipalComponentAnalysis, #DataVisualization, #JMPScriptingLanguage, #RowWiseEstimation, #SummaryPlots -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Principal Components( Y( :age, :height, :weight ), Estimation Method( "Row-wise" ) );
```

**Code Explanation**:

1. Open table.
2. Fit principal components.



## Principal Components using Scatterplot 3D
### Example 1
> **Summary**: Creates a 3D scatter plot with principal components analysis, biplot rays, and normal contour ellipsoids to visualize relationships between Amplitude, x, and y variables in a data table.

<!-- Keywords: #JSL, #ScatterPlot3D, #PrincipalComponents, #BiplotRays, #NormalContourEllipsoids -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Scatterplot 3D(
	Y( :Amplitude, :x, :y ),
	Principal Components( 1 ),
	Biplot Rays( 1 ),
	Normal Contour Ellipsoids( 1 ),
	Frame3D( Set Grab Handles( 0 ), Set Rotation( -60.8796255350304, -1.27222187258541e-14, 38 ) ),
	SendToReport(
		Dispatch( {}, "1", ScaleBox,
			{Scale( "Log" ), Format( "Custom", Formula( value / 0.001 ), 12 ), Min( 0.001 ), Max( 2.06629384326619 ), Inc( 1 ),
			Minor Ticks( 1 )}
		),
		Dispatch( {}, "2", ScaleBox, {Scale( "Power" ), Format( "Custom", Formula( Char( value ) || "''''" ), 12 ), Minor Ticks( 1 )} ),
		Dispatch( {}, "3", ScaleBox,
			{Scale( "Power" ), Format(
				"Custom",
				Formula(
					Random Reset( 1 );
					Round( Random SEV( value ), 3 );
				),
				12
			), Minor Ticks( 1 )}
		)
	)
);
```

**Code Explanation**:

1. Open data_table data
2. Create 3D scatter plot.
3. Use Amplitude, x, y for Y-axis.
4. Apply principal components analysis.
5. Enable biplot rays.
6. Show normal contour ellipsoids.
7. Configure 3D frame settings.
8. Set grab handles to off.
9. Rotate 3D view.
10. Customize axis scales and formats.



### Example 2
> **Summary**: Creates a 3D scatter plot to visualize relationships between Height, Calf, and Thigh variables, with Waist used for weight and Head variable coloring, utilizing JMP's Scatterplot 3D platform.

<!-- Keywords: #JMP, #ScatterPlot3D, #DataVisualization, #StatisticalGraphics, #Scripting -->

**Code**:
```jsl
Open("data_table.jmp");
Scatterplot 3D(
	Y( :Height, :Calf, :Thigh ),
	Weight( :Waist ),
	Coloring( :Head ),
	Principal Components( 1 ),
	Biplot Rays( 0 ),
	Sized Points( 1 ),
	Legend( 5 ),
	Frame3D( Legend( 1 ), ),
	SendToReport( Dispatch( {}, "100", ScaleBox, {Legend Model( 5, Properties( 0, {gradient( {Color Theme( "Spectral" )} )} ) )} ) )
);
```

**Code Explanation**:

1. Open data table.
2. Create 3D scatter plot.
3. Set Y variables: Height, Calf, Thigh.
4. Use Waist for weight.
5. Color by Head variable.
6. Enable principal components.
7. Disable biplot rays.
8. Use sized points.
9. Set legend to position 5.
10. Adjust frame and legend appearance.



### Example 3
> **Summary**: Creates and compares a 3D scatterplot report with principal components, biplot rays, and normal contour ellipsoids, incorporating missing value codes and redoing analysis.

<!-- Keywords: #JSLScripting, #Scatterplot3D, #PrincipalComponents, #BiplotRays, #NormalContourEllipsoids -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Scatterplot 3D(
	Y( :Amplitude, :x, :y ),
	Principal Components( 1 ),
	Biplot Rays( 1 ),
	Normal Contour Ellipsoids( 1 ),
	Frame3D( Set Grab Handles( 0 ), Set Rotation( -54, -3.18055468146352e-15, 38 ) )
);
rpt1 = obj << Report;
expr1 = rpt1 << Get Journal;
:Y << Set Property( "Missing Value Codes", 4 );
obj2 = obj << Redo Analysis;
rpt2 = obj2 << Report;
expr2 = rpt2 << Get Journal;
ans = Equal( expr2, expr1 );
```

**Code Explanation**:

1. Open data table.
2. Create 3D scatterplot.
3. Configure plot settings.
4. Generate initial report.
5. Extract initial journal.
6. Set missing value code.
7. Redo analysis.
8. Generate updated report.
9. Extract updated journal.
10. Compare journals for equality.



### Example 4
> **Summary**: Creates a 3D scatterplot to visualize relationships between four variables: ABRASION, MODULUS, ELONG, and HARDNESS.

<!-- Keywords: #Scatterplot3D, #JMPScriptingLanguage, #DataVisualization, #PrincipalComponents, #BiplotRays -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Scatterplot 3D(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),
	Principal Components( 1 ),
	Biplot Rays( 1 ),
	Show Ray Labels( 1 ),
	Frame3D( Set Grab Handles( 0 ), Set Rotation( -54, 0, 38 ) )
);
```

**Code Explanation**:

1. Open data table;
2. Create Scatterplot 3D.
3. Set Y variables.
4. Enable Principal Components.
5. Enable Biplot Rays.
6. Show Ray Labels.
7. Configure Frame3D.
8. Disable Grab Handles.
9. Set Rotation angles.
10. Finalize plot setup.



### Example 5
> **Summary**: Creates two 3D scatterplots from a data table, with the first plot colored by Age and the second using principal components, and configures frame settings for both plots.

<!-- Keywords: #JSLScripting, #Scatterplot3D, #DataVisualization, #PrincipalComponents, #FrameSettings -->

**Code**:
```jsl
cert_levels = {levels( "Age" ), levels( "Age" )};
dt = Open("data_table.jmp");
obj = Scatterplot 3D(
	Y( :RunPulse, :RstPulse, :MaxPulse ),
	Coloring( :Age ),
	Frame3D( Legend( 1 ), Set Grab Handles( 0 ), Set Rotation( -54, 0, 38 ), Set Marker Scale( 4.92625 ) )
);
rpt = obj << report;
Close( dt, nosave );
dt = Open("data_table.jmp");
obj = Scatterplot 3D(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),
	Principal Components( 1 ),
	Biplot Rays( 1 ),
	Show Ray Labels( 1 ),
	Frame3D( Set Grab Handles( 0 ), Set Rotation( -54, 0, 38 ) )
);
```

**Code Explanation**:

1. Define cert_levels.
2. Open data table;
3. Create 3D scatterplot.
4. Color by Age.
5. Configure 3D frame settings.
6. Generate report.
7. Close data_table.jmp without saving.
8. Open data table;
9. Create 3D scatterplot.
10. Use principal components.



## Principal Components using Set Values
### Example 1
> **Summary**: Performs a principal components analysis (PCA) on a data table, setting age values to 99 and configuring report settings.

<!-- Keywords: #JMPScriptingLanguage, #PrincipalComponentsAnalysis, #DataVisualization, #ReportGeneration, #MissingValueHandling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
:"Age (years)" << Set Values( {99, 99, 99} );
obj = Principal Components(
	Y(
		:Name( "Age (years)" ), :Name( "Weight (lbs)" ), :Name( "Height (inches)" ), :Name( "Neck circumference (cm)" ),
		:Name( "Chest circumference (cm)" ), :Name( "Abdomen circumference (cm)" ), :Name( "Hip circumference (cm)" ),
		:Name( "Thigh circumference (cm)" ), :Name( "Knee circumference (cm)" ), :Name( "Ankle circumference (cm)" ),
		:Name( "Biceps (extended) circumference (cm)" ), :Name( "Forearm circumference (cm)" ), :Name( "Wrist circumference (cm)" )
	),
	Estimation Method( "Row-wise" ),
	"on Correlations",
	Eigenvectors( 1 ),
	Scree Plot( 1 ),
	Arrow Lines( 1 ),
	SendToReport(
		Dispatch( {"Summary Plots"}, "PCA Summary Plots", FrameBox, {Frame Size( 49, 37 )} ),
		Dispatch( {"Summary Plots"}, "PCA Summary Plots", FrameBox( 2 ), {Frame Size( 52, 37 )} )
	)
);
rpt1 = obj << Report;
expr1 = (rpt1 << get journal());
:"Age (years)" << Set Property( "Missing Value Codes", 99 );
obj2 = obj << Redo Analysis;
rpt2 = obj2 << Report;
expr2 = (rpt2 << get journal());
ans = Equal( expr1, expr2 );
```

**Code Explanation**:

1. Open data table.
2. Set age values to 99.
3. Perform principal components analysis.
4. Configure PCA settings.
5. Generate scree plot.
6. Add arrow lines.
7. Adjust report size.
8. Retrieve first report.
9. Save first journal.
10. Set missing value code for age.
11. Redo PCA analysis.
12. Retrieve second report.
13. Save second journal.
14. Compare two journals.



### Example 2
> **Summary**: Runs data manipulation and analysis tasks, including retrieving values, setting missing values, updating tables, and performing Principal Components analysis with score plots.

<!-- Keywords: #JSLScriptingLanguage, #DataManipulation, #PrincipalComponentsAnalysis, #ScorePlot, #Imputation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
newval = dt:Long Jump << get values;
newval[17] = .;
dt:Long Jump << Set Values( newval );
newval = dt:"400m" << get values;
newval[10] = .;
dt:"400m" << Set Values( newval );
obj = dt << Principal Components( Y( 4 :: 13 ) );
obj << Score Plot( 2 );
obj << Score Plot with Imputation( 2 );
```

**Code Explanation**:

1. Open data table;
2. Retrieve Long Jump values.
3. Set missing value in Long Jump.
4. Update Long Jump values.
5. Retrieve 400m values.
6. Set missing value in 400m.
7. Update 400m values.
8. Perform Principal Components analysis.
9. Create Score Plot.
10. Create Score Plot with Imputation.



## Principal Components using Log Capture
### Example 1
> **Summary**: Executes four Principal Component Analysis (PCA) methods: Sparse, Wide, Default, and Row-wise, on a specified data table, generating eigenvalues for each method.

<!-- Keywords: #JMPScriptingLanguage, #PrincipalComponentAnalysis, #DataVisualization, #MatrixOperations, #Eigenvalues -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Log Capture(
	res = New Window( "PCAs",
		H List Box(
			obj = dt << Principal Components(
				Y( 5 :: 130 ),
				Title( "Sparse" ),
				Summary Plots( 0 ),
				Estimation Method( "Sparse" ),
				Number of Components( 100 ),
				Eigenvalues
			);
			obj = dt << Principal Components(
				Y( 5 :: 130 ),
				Title( "Wide" ),
				Summary Plots( 0 ),
				Estimation Method( "Wide" ),
				Number of Components( 100 ),
				Eigenvalues
			);
			obj = dt << Principal Components(
				Y( 5 :: 130 ),
				Title( "Default" ),
				Summary Plots( 0 ),
				Estimation Method( "Default" ),
				Number of Components( 100 ),
				Eigenvalues
			);
			obj = dt << Principal Components(
				Y( 5 :: 130 ),
				Title( "Row-wise" ),
				Summary Plots( 0 ),
				Estimation Method( "Row-wise" ),
				Number of Components( 100 ),
				Eigenvalues
			);
			obj = dt << Principal Components(
				Y( 5 :: 130 ),
				Title( "ML" ),
				Summary Plots( 0 ),
				Estimation Method( "ML" ),
				Number of Components( 100 ),
				Eigenvalues
			);
		)
	)
);
Log Capture(
	myEigFun = Function( {method},
		{actEig, actEigCumP},
		actEig = res[Outline Box( method )][Outline Box( "Eigenvalues" )][Number Col Box( 2 )] << Get as Matrix();
		actEigCumP = res[Outline Box( method )][Outline Box( "Eigenvalues" )][Number Col Box( 4 )] << Get as Matrix();
		actEig = actEig[1 :: 86];
		actEigCumP = actEigCumP[1 :: 86];
		myEigMat = actEig || actEigCumP;
	)
);
EigMatSparse = myEigFun( "Sparse" );
EigMatWide = myEigFun( "Wide" );
EigMatDef = myEigFun( "Default" );
EigMatRow = myEigFun( "Row-wise" );
```

**Code Explanation**:

1. Open data table.
2. Create new window for PCA results.
3. Perform Sparse PCA analysis.
4. Perform Wide PCA analysis.
5. Perform Default PCA analysis.
6. Perform Row-wise PCA analysis.
7. Define function to extract eigenvalues.
8. Extract eigenvalues for Sparse PCA.
9. Extract eigenvalues for Wide PCA.
10. Extract eigenvalues for Default PCA.



### Example 2
> **Summary**: Executes two Principal Component Analysis (PCA) models on a data table, with sparse and row-wise estimation methods, and extracts eigenvalues from the reports.

<!-- Keywords: #JMPScriptingLanguage, #PrincipalComponentAnalysis, #DataTableManipulation, #SparsePCA, #Row-WisePCA -->

**Code**:
```jsl
dt_i = Open("data_table.jmp");
dt_i[0, 3] = dt_i[0, 2] / 2;
dt_i[0, 4] = 0;
Log Capture(
	obj1 = dt_i << Principal Components(
		Y( 1 :: 4 ),
		Estimation Method( "Sparse" ),
		Number of Components( 3 ),
		"on Correlations",
		Eigenvectors( 1 ),
		Eigenvalues( 1 )
	)
);
rpt1 = obj1 << Report();
actEig1 = rpt1[Outline Box( "Eigenvalues" )][Number Col Box( 2 )] << Get As Matrix;
Log Capture(
	obj2 = dt_i << Principal Components(
		Y( 1 :: 4 ),
		Estimation Method( "Row-wise" ),
		"on Correlations",
		Eigenvectors( 1 ),
		Eigenvalues( 1 )
	)
);
rpt2 = obj2 << Report();
actEig2 = rpt2[Outline Box( "Eigenvalues" )][Number Col Box( 2 )] << Get As Matrix;
```

**Code Explanation**:

1. Open data table;
2. Modify first row's third column.
3. Set first row's fourth column to zero.
4. Log capture for sparse PCA.
5. Perform sparse PCA on dataset.
6. Retrieve PCA report.
7. Extract eigenvalues from report.
8. Log capture for row-wise PCA.
9. Perform row-wise PCA on dataset.
10. Retrieve PCA report.
11. Extract eigenvalues from report.



### Example 3
> **Summary**: Performs principal component analysis (PCA) on a data table, specifying sparse estimation and extracting eigenvalues and cumulative percentages.

<!-- Keywords: #JMPScriptingLanguage, #PrincipalComponentAnalysis, #SparseEstimation, #EigenvalueCalculation, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Log Capture(
	obj = dt << Principal Components(
		Y( :Box, :Name( "# Defects" ), Box Size, :Avg defects ),
		Estimation Method( "Sparse" ),
		Number of Components( 3 ),
		Eigenvalues( 1 )
	)
);
rpt = obj << Report();
actEig = rpt[Outline Box( "Eigenvalues" )][Number Col Box( 2 )] << Get As Matrix;
actLastEig = actEig[2];
actCumPer = rpt[Outline Box( "Eigenvalues" )][Number Col Box( 4 )] << Get As Matrix;
actLastCumPer = actCumPer[N Row( actCumPer )];
```

**Code Explanation**:

1. Open data table;
2. Perform principal component analysis.
3. Specify variables for analysis.
4. Use sparse estimation method.
5. Set number of components to 3.
6. Request eigenvalues calculation.
7. Capture log of analysis results.
8. Extract report from analysis object.
9. Retrieve eigenvalues from report.
10. Extract last eigenvalue and cumulative percentage.



### Example 4
> **Summary**: Runs principal components analysis to extract cumulative percentage values from eigenvalues, utilizing sparse estimation method and generating a report.

<!-- Keywords: #JMPScriptingLanguage, #PrincipalComponentsAnalysis, #SparseEstimationMethod, #EigenvalueExtraction, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Log Capture(
	obj = dt << Principal Components(
		Y( :Box, :Name( "# Defects" ), :Box Size, :Avg defects ),
		Estimation Method( "Sparse" ),
		Number of Components( 10 ),
		Eigenvalues( 1 )
	)
);
rpt = obj << Report();
actCumPer = rpt[Outline Box( "Eigenvalues" )][Number Col Box( 4 )] << Get As Matrix;
actLastCumPer = actCumPer[N Row( actCumPer )];
```

**Code Explanation**:

1. Open data table;
2. Log capture starts.
3. Perform principal components analysis.
4. Set Y variables: Box, # Defects, Box Size, Avg defects.
5. Use sparse estimation method.
6. Set number of components to 10.
7. Include eigenvalues.
8. Generate report from analysis.
9. Extract cumulative percentage from eigenvalues.
10. Retrieve last cumulative percentage value.



### Example 5
> **Summary**: Runs data table manipulation by setting specific cells to missing values and performing principal component analysis with variance estimation on correlations.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManipulation, #PrincipalComponentAnalysis, #VarianceEstimation, #Correlation -->

**Code**:
```jsl
dt_balt = Open("data_table.jmp");
dt_balt[5, 5] = .;
dt_balt[6, 5] = .;
dt_balt[9, 1] = .;
dt_balt[12, 3] = .;
dt_balt[6, 10] = .;
dt_balt[6, 15] = .;
dt_balt[12, 15] = .;
dt_balt[4, 25] = .;
dt_balt[13, 25] = .;
warn = Log Capture(
	obj = dt_balt << Principal Components(
		Y(
			:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16, :v17, :v18, :v19, :v20, :v21, :v22, :v23,
			:v24, :v25, :v26, :v27
		),
		Variance Estimation( "Default" ),
		"on Correlations",
		Eigenvalues( 1 )
	)
);
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Set cell [5,5] to missing.
3. Set cell [6,5] to missing.
4. Set cell [9,1] to missing.
5. Set cell [12,3] to missing.
6. Set cell [6,10] to missing.
7. Set cell [6,15] to missing.
8. Set cell [12,15] to missing.
9. Set cell [4,25] to missing.
10. Set cell [13,25] to missing.



## Principal Components using If
### Example 1
> **Summary**: Runs Principal Components analysis with sparse estimation method on a specified range of columns, generating a report with eigenvalues.

<!-- Keywords: #JMPScripting, #PrincipalComponents, #SparseEstimation, #DataAnalysis, #ReportGeneration -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ),
	dt = Open("data_table.jmp");
	obj = dt << Principal Components( Estimation Method( "Sparse" ), Y( 2 :: 16 ), Number of Components( 5 ), Eigenvalues( 1 ) );
	rpt = obj << Report();
	numcomps = 5;
	actEig = rpt[Outline Box( "Eigenvalues" )][Number Col Box( 2 )] << Get As Matrix;
		
	Close( dt, Nosave );
);
```

**Code Explanation**:

1. Check if JMP Pro.
2. Open data table;
3. Run Principal Components analysis.
4. Set estimation method to Sparse.
5. Specify columns 2 to 16 as Y variables.
6. Request 5 components.
7. Include eigenvalues in output.
8. Retrieve report object.
9. Extract eigenvalues matrix.
10. Close dataset without saving.



### Example 2
> **Summary**: Calculates and visualizes sparse principal components on a data table, generating reports and extracting eigenvalues for analysis.

<!-- Keywords: #JMPScriptingLanguage, #SparsePrincipalComponents, #DataVisualization, #ReportGeneration, #EigenvalueAnalysis -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ),
	dt = Open("data_table.jmp");
	New Window( "Sparse SVD on data_table",
		V List Box(
			obj1 = dt << Principal Components(
				Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
				Estimation Method( "Sparse" ),
				Number of Components( 4 ),
				Eigenvalues( 1 )
			);
			obj2 = dt << Principal Components(
				Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
				Estimation Method( "Sparse" ),
				Number of Components( 4 ),
				Eigenvalues( 1 )
			);
			obj3 = dt << Principal Components(
				Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
				Estimation Method( "Sparse" ),
				Number of Components( 4 ),
				Eigenvalues( 1 )
			);
		)
	);
	rpt1 = obj1 << Report();
	rpt2 = obj2 << Report();
	rpt3 = obj3 << Report();
	eval1 = rpt1[Outline Box( "Eigenvalues" )][Number Col Box( "Eigenvalue" )] << Get As Matrix;
	eval2 = rpt2[Outline Box( "Eigenvalues" )][Number Col Box( "Eigenvalue" )] << Get As Matrix;
	eval3 = rpt3[Outline Box( "Eigenvalues" )][Number Col Box( "Eigenvalue" )] << Get As Matrix;
	Close( dt, Nosave );
);
```

**Code Explanation**:

1. Check if JMP is Pro.
2. Open data table;
3. Create new window titled "Sparse SVD on data_table".
4. Add vertical list box to window.
5. Perform Sparse PCA on data_table data.
6. Repeat PCA for three times.
7. Generate report for each PCA.
8. Extract eigenvalues from each report.
9. Convert eigenvalues to matrices.
10. Close dataset without saving.



### Example 3
> **Summary**: Process of performing Principal Component Analysis (PCA) on a data table with varying weight options and captures report text, suitable for JMP Pro users.

<!-- Keywords: #JMPPro, #PrincipalComponentAnalysis, #DataVisualization, #WeightedPca, #ReportCapture -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ),
	dt = Open("data_table.jmp");
	dt << New Column( "weight", Numeric, Continuous, Formula( Random Uniform( .05, 1 ) ) );
	Log Capture(
		obj = dt << Principal Components(
			Y( :Name( "1-Octanol" ), :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
			Weight( :weight ),
			Variance Estimation( "Wide" ),
			"on Correlations"
		)
	);
	rpt = obj << report;
	text_act = Try( rpt[Text Box( 1 )] << Get Text );
	Log Capture(
		obj = dt << Principal Components(
			Y( :Name( "1-Octanol" ), :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
			Weight( :weight ),
			Variance Estimation( "Sparse" ),
			Number of Components( 3 ),
			"on Correlations"
		)
	);
	rpt = obj << report;
	text_act = Try( rpt[Text Box( 1 )] << Get Text );
	dt << New Column( "freq", Numeric, Continuous, Formula( Random Integer( 1, 3 ) ) );
	Log Capture(
		obj = dt << Principal Components(
			Y( :Name( "1-Octanol" ), :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
			Weight( :freq ),
			Variance Estimation( "Sparse" ),
			Number of Components( 3 ),
			"on Correlations"
		)
	);
	rpt = obj << report;
	text_act = Try( rpt[Text Box( 1 )] << Get Text );
	Log Capture(
		obj = dt << Principal Components(
			Y( :Name( "1-Octanol" ), :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
			Weight( :freq ),
			Variance Estimation( "Sparse" ),
			Number of Components( 3 ),
			"on Correlations"
		)
	);
	rpt = obj << report;
	text_act = Try( rpt[Text Box( 1 )] << Get Text );
	Close( dt, nosave );
);
```

**Code Explanation**:

1. Check if JMP is Pro version.
2. Open data table.
3. Add "weight" column with random values.
4. Perform PCA on selected columns with wide variance estimation.
5. Capture PCA report text.
6. Perform PCA again with sparse variance estimation and 3 components.
7. Capture PCA report text.
8. Add "freq" column with random integer values.
9. Perform PCA using "freq" as weight.
10. Capture PCA report text.
11. Perform PCA again with same settings.
12. Capture PCA report text.
13. Close data table without saving.



## Principal Components using Collapse Whitespace
> **Summary**: Runs Principal Components analysis on a data table, capturing log output and comparing it to expected warnings.

<!-- Keywords: #PrincipalComponents, #DataAnalysis, #JMPScriptingLanguage, #LogCapture, #WarningHandling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
actWarn = Collapse Whitespace(
	Log Capture(
		dt << Principal Components(
			Y( Column Group( "Proteins" ) ),
			Variance Estimation( "REML" ),
			"on Correlations",
			Summary Plots( Label variables( 0 ) )
		)
	)
);
expWarn = "With 667 columns, we recommend switching to a 'Wide' method. OK?";
actWarn = Collapse Whitespace(
	Log Capture(
		dt << Principal Components(
			Y( Column Group( "Proteins" ) ),
			Variance Estimation( "Truncated SVD" ),
			Number of Components( 10 ),
			"on Correlations",
			Summary Plots( Label variables( 0 ) )
		)
	)
);
expWarn = "";
```

**Code Explanation**:

1. Open data table;
2. Run Principal Components analysis.
3. Capture log output.
4. Compare log to expected warning.
5. Set expected warning to empty.
6. Run Principal Components analysis again.
7. Capture log output.
8. Compare log to expected warning.
9. Set expected warning to empty.
10. End script.



## Principal Components using By
> **Summary**: Performs the principal components analysis on a data table, grouping by sex and generating reports for male and female groups.

<!-- Keywords: #JMPScriptingLanguage, #PrincipalComponentsAnalysis, #DataTable, #ByGrouping, #ReportGeneration -->

**Code**:
```jsl
txt1 = "F";
txt2 = "M";
dt = Open("data_table.jmp");
obj = dt << principal components( Y( :height, :weight, :age ), By( :sex ) );
rp1 = Report( obj[1] );
rp2 = Report( obj[2] );
check = Contains( txt2, Expr( title( "sex=M" ) ) ) & Contains( txt1, Expr( title( "sex=F" ) ) );
```

**Code Explanation**:

1. Assign "F" to txt1.
2. Assign "M" to txt2.
3. Open data table;
4. Perform principal components analysis.
5. Set Y variables: height, weight, age.
6. Group by sex.
7. Create report for sex=M.
8. Create report for sex=F.
9. Check if title contains "sex=M".
10. Check if title contains "sex=F".



## Principal Components using Delete Rows
> **Summary**: Prepares data and principal components analysis, capturing the log of the process and retrieving a report.

<!-- Keywords: #JMPScriptingLanguage, #DataPreprocessing, #PrincipalComponentsAnalysis, #LogCapture, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Delete Rows( 10 :: N Row( dt ) );
dt[6, 3 :: 6] = .;
dt[8, 5 :: 9] = .;
myLog = Log Capture( obj = dt << Principal Components( Y( 2 :: N Col( dt ) ), Score Plot( 2 ), Score Plot with Imputation( 2 ) ) );
rpt = obj << Report;
```

**Code Explanation**:

1. Open data table;
2. Delete rows 10 to end.
3. Set cells [6,3] to [6,6] to missing.
4. Set cells [8,5] to [8,9] to missing.
5. Capture log of principal components analysis.
6. Perform principal components analysis on columns 2 to end.
7. Create score plot for first two components.
8. Create score plot with imputation for first two components.
9. Retrieve report from analysis object.
10. Assign report to variable rpt.



## Principal Components using New Column
> **Summary**: Fits a standard least squares model with multiple effects and generating a profiler plot, utilizing principal component analysis (PCA) to extract eigenvalues from selected columns.

<!-- Keywords: #JSLScriptingLanguage, #PrincipalComponentAnalysis, #LeastSquaresModel, #ProfilerPlot, #DataTransformation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "Freq", Set Values( [0 1 1 1 1 1 1 2 0 . 2 1 1 2 -1 2]` ) );
pc1 = dt << principal components( Y( :v1, :v2, :v3, :v4 ), Freq( :Freq ), Eigenvalues( 1 ), Bartlett Test( 1 ) );
eg1 = Report( pc1 )["Eigenvalues"][Table Box( 1 )] << get as matrix;
dt << Select Where( :Freq == 0 | :Freq == -1 | Is Missing( :Freq ) );
dt << Exclude;
dt << Invert Row Selection;
dtsub = dt << Subset( Selected Rows( 1 ) );
pc3 = dtsub << principal components( Y( :v1, :v2, :v3, :v4 ), Freq( :Freq ), Eigenvalues( 1 ), Bartlett Test( 1 ) );
eg3 = Report( pc3 )["Eigenvalues"][Table Box( 1 )] << get as matrix;
```

**Code Explanation**:

1. Open data table;
2. Add new column "Freq".
3. Set values for "Freq" column.
4. Run principal component analysis on selected columns.
5. Extract eigenvalues from first PCA.
6. Select rows where "Freq" is 0, -1, or missing.
7. Exclude selected rows.
8. Invert row selection.
9. Create subset of remaining rows.
10. Run principal component analysis on subset.



## Principal Components using N Row
> **Summary**: Performs the principal components analysis (PCA) of a data table, capturing log output and collapsing whitespace to identify dropped columns.

<!-- Keywords: #JSLScriptingLanguage, #PrincipalComponentsAnalysis, #DataTableManipulation, #LogCapture, #WhitespaceManagement -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt[2 :: N Row( dt ), 3] = .;
actWarn = Collapse Whitespace(
	Log Capture( dt << Principal Components( Y( :Na, :Br, :Ce, :Co, :Cr, :Cs ), Z( :Al, :Mn ), Loading Matrix( 1 ) ) )
);
expWarn = "One or more columns were dropped because they were non-numeric or constant (no variation). {:Mn}";
```

**Code Explanation**:

1. Open data table.
2. Set selected rows' column 3 to missing.
3. Capture log output.
4. Perform principal components analysis.
5. Specify Y variables: Na, Br, Ce, Co, Cr, Cs.
6. Specify Z variable: Al, Mn.
7. Request loading matrix.
8. Collapse whitespace in log.
9. Store captured log in actWarn.
10. Define expected warning message in expWarn.



## Principal Components using Lock Data Table
> **Summary**: Performs the principal components analysis on a locked data table, capturing log output and removing whitespace to generate expected warning messages.

<!-- Keywords: #JMPScriptingLanguage, #PrincipalComponentsAnalysis, #DataTableOperations, #LogCapture, #WarningMessages -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Lock Data Table( 1 );
obj = dt << Principal Components( Y( :height, :weight ), Estimation Method( "Row-wise" ), "on Correlations", Arrow Lines( 1 ) );
actWarn = Collapse Whitespace( Log Capture( obj << Save Principal Components( 2 ) ) );
expWarn =
"Cannot make new column in locked data table in access or evaluation of 'Save Principal Components' , Save Principal Components( 2 ) ";
```

**Code Explanation**:

1. Open data table;
2. Lock data table.
3. Run principal components analysis.
4. Save first two principal components.
5. Capture log output.
6. Remove whitespace from log.
7. Define expected warning message.



## Principal Components using For
### Example 1
> **Summary**: Generates a principal component analysis (PCA) report for continuous variables in a specified data table, utilizing row-wise estimation and correlation analysis.

<!-- Keywords: #JMPScriptingLanguage, #PrincipalComponentAnalysis, #DataTable, #Row-WiseEstimation, #CorrelationAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
For( i = 1, i <= 4, i++, dt[i, i] = . );
mat = dt << Get as Matrix;
mat = mat[5 :: N Row( mat ), 0];
obj = Principal Components(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Estimation Method( "Row-wise" ),
	"on Correlations"
);
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Loop through columns 1-4.
3. Set diagonal elements to missing.
4. Convert data table to matrix.
5. Remove first four rows from matrix.
6. Perform principal component analysis.
7. Specify variables for PCA.
8. Use row-wise estimation method.
9. Analyze correlations.
10. Generate PCA report.



### Example 2
> **Summary**: Process of setting every second value to missing in a specified data table, followed by principal components analysis and imputation of missing data.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManipulation, #PrincipalComponentsAnalysis, #MissingDataImputation, #PairwiseEstimationMethod -->

**Code**:
```jsl
dt = Open("data_table.jmp");
For( i = 2, i <= N Cols( dt ), i++,
	Column( dt, i )[2 * i :: 2 * (i + 1)] = .
);
obj = dt << Principal Components(
	Y( :Al, :Mn, :Na, :Br, :Ce, :Co, :Cr, :Cs, :Eu, :Fe, :Hf, :La, :Sc, :Sm, :U ),
	Estimation Method( "Pairwise" ),
	"on Correlations"
);
obj << Impute Missing Data;
```

**Code Explanation**:

1. Open data table.
2. Loop through columns starting from 2.
3. Set every second value to missing.
4. Perform principal components analysis.
5. Select specified columns for analysis.
6. Use pairwise estimation method.
7. Analyze correlations.
8. Impute missing data in results.



### Example 3
> **Summary**: Process of preparing a data table for Principal Components analysis by setting every second value to missing, performing PCA with pairwise estimation method, and saving imputation formula.

<!-- Keywords: #JSLScriptingLanguage, #PrincipalComponentsAnalysis, #DataPreparation, #MissingValueImputation, #PairwiseEstimation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
For( i = N Cols( dt ), i >= 2, i--,
	Column( dt, i )[2 * (i - 1) :: 2 * i] = .
);
obj = dt << Principal Components(
	Y( :Al, :Mn, :Na, :Br, :Ce, :Co, :Cr, :Cs, :Eu, :Fe, :Hf, :La, :Sc, :Sm, :U ),
	Estimation Method( "Pairwise" ),
	"on Correlations"
);
obj << Save Imputed Formula;
_mat = (dt << get as matrix( {17 :: N Cols( dt )} ));
obj << Impute Missing Data;
dt1 = Current Data Table();
_mat1 = (dt1 << get as matrix( {1 :: N Cols( dt1 )} ));
```

**Code Explanation**:

1. Open data table;
2. Loop through columns.
3. Set every second value to missing.
4. Perform Principal Components analysis.
5. Use pairwise estimation method.
6. Analyze correlations.
7. Save imputation formula.
8. Extract data matrix.
9. Impute missing data.
10. Get updated data matrix.



### Example 4
> **Summary**: Process of performing Principal Component Analysis (PCA) on selected variables in a data table, imputing missing values, and saving the imputation formula.

<!-- Keywords: #JSLScriptingLanguage, #PrincipalComponentAnalysis, #DataImputation, #MissingValues, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
For( i = 2, i <= N Cols( dt ), i++,
	Column( dt, i )[2 * i :: 2 * (i + 1)] = .
);
obj = dt << Principal Components(
	Y( :Al, :Mn, :Na, :Br, :Ce, :Co, :Cr, :Cs, :Eu, :Fe, :Hf, :La, :Sc, :Sm, :U ),
	Estimation Method( "Pairwise" ),
	"on Correlations"
);
obj << Impute Missing Data;
dt = Open("data_table.jmp");
For( i = N Cols( dt ), i >= 2, i--,
	Column( dt, i )[2 * (i - 1) :: 2 * i] = .
);
obj = dt << Principal Components(
	Y( :Al, :Mn, :Na, :Br, :Ce, :Co, :Cr, :Cs, :Eu, :Fe, :Hf, :La, :Sc, :Sm, :U ),
	Estimation Method( "Pairwise" ),
	"on Correlations"
);
obj << Save Imputed Formula;
_mat = (dt << get as matrix( {17 :: N Cols( dt )} ));
obj << Impute Missing Data;
dt1 = Current Data Table();
_mat1 = (dt1 << get as matrix( {1 :: N Cols( dt1 )} ));
```

**Code Explanation**:

1. Open data table;
2. Loop through columns 2 to end.
3. Set every second value to missing.
4. Perform PCA on selected variables.
5. Impute missing data.
6. Reopen data_table dataset
7. Loop through columns end to 2.
8. Set every second value to missing.
9. Perform PCA on selected variables.
10. Save imputation formula.



## Principal Components using Select Rows
> **Summary**: Runs a Principal Components analysis to extract insights from the Iris dataset, utilizing row-wise estimation and standardized variables.

<!-- Keywords: #PrincipalComponents, #RowWiseEstimation, #StandardizedVariables, #JMPScriptingLanguage, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
:Petal width[1] = .;
r = dt << Select Rows( [1, 2, 3, 4, 5] );
r << Exclude;
obj = dt << Principal Components(
	Y( :Sepal length, :Sepal width, :Petal length ),
	Z( :Petal width ),
	Estimation Method( "Row-wise" ),
	Standardize( "Standardized" ),
	Loading Matrix( Plot of Loading Matrix( Overview( 3 ), "Side by side" ) ),
	Partial Contribution of Variables( Plot of Partial Contribution of Variables( Overview( 3 ), "Side by side" ) )
);
rpt = Report( obj );
obj << Save Individual Partial Contributions( 3 );
UnexcludedPartCont1exp = UnexcludedPartCont2exp = UnexcludedPartCont3exp = 100;
UnexcludedPartCont1act = Sum( dt[1 :: 5, 6] );
UnexcludedPartCont2act = Sum( dt[1 :: 5, 7] );
UnexcludedPartCont3act = Sum( dt[1 :: 5, 8] );
```

**Code Explanation**:

1. Open data table;
2. Set Petal width missing for row 1.
3. Select rows 1-5.
4. Exclude selected rows.
5. Run Principal Components analysis.
6. Use Sepal length, width, Petal length as Y variables.
7. Use Petal width as Z variable.
8. Set Row-wise estimation method.
9. Standardize variables.
10. Generate loading matrix plot.



