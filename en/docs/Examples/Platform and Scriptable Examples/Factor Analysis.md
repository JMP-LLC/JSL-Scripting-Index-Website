# Factor Analysis

### Example 1
> **Summary**: Runs factor analysis on a data table, specifying variables for analysis and customizing the Scree Plot scale with two formats.

<!-- Keywords: #FactorAnalysis, #JMPScriptingLanguage, #ScreePlot, #VarianceScaling, #Customization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Factor Analysis(
	Y( :Name( "1-Octanol" ), :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Estimation Method( "Row-wise" ),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 1, "Varimax" ),
	SendToReport(
		Dispatch( {"Scree Plot"}, "1", ScaleBox, {Format( "Custom", Formula( "Sqrt(" || Char( value ^ 2 ) || ")" ), 12 )} ),
		Dispatch( {"Scree Plot"}, "2", ScaleBox, {Format( "Custom", Formula( Char( Round( Root( value, 2 ), 2 ) ) || "^2" ), 12 )} )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Perform factor analysis.
3. Specify variables for analysis.
4. Set estimation method to row-wise.
5. Use correlations for variance scaling.
6. Fit model using ML, SMC, and Varimax.
7. Customize Scree Plot scale.
8. Apply custom format to first scale.
9. Apply custom format to second scale.
10. Display customized reports.



### Example 2
> **Summary**: Runs the factor analysis process to extract underlying structure from a dataset, utilizing row-wise estimation and variance scaling by covariances.

<!-- Keywords: #FactorAnalysis, #JMPScriptingLanguage, #DataVisualization, #MultivariateStatistics, #RowWiseEstimation -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Factor Analysis(
	Y( :Name( "1-Octanol" ), :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Estimation Method( "Row-wise" ),
	Variance Scaling( Covariances ),
	Eigenvalues( 0 ),
	Scree Plot( 0 ),
	Fit(
		ML,
		SMC,
		2,
		Varimax,
		Prior Communality( 0 ),
		Eigenvalues( 0 ),
		Rotation Matrix( 0 ),
		Final Communality Estimates( 0 ),
		Standard Score Coefficients( 0 ),
		Variance Explained by Each Factor( 0 ),
		Significance Test( 0 ),
		Factor Loading Plot( 0 )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Perform factor analysis.
3. Set response variables.
4. Use row-wise estimation method.
5. Scale variances by covariances.
6. Disable eigenvalue output.
7. Disable scree plot.
8. Fit model using ML method.
9. Use SMC for initial communality estimates.
10. Specify 2 factors for rotation.



### Example 3
> **Summary**: Runs a factor analysis on covariances with 2 factors using Maximum Likelihood and Varimax rotation, then sends the results to a dispatch report with a customized frame size.

<!-- Keywords: #FactorAnalysis, #JMPScriptingLanguage, #CovarianceMatrix, #VarimaxRotation, #DispatchReport -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Factor Analysis(
	Y( :Name( "1-Octanol" ), :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Estimation Method( "Row-wise" ),
	Variance Scaling( Covariances ),
	Fit( ML, SMC, 2, Varimax ),
	SendToReport(
		Dispatch( {"Factor Analysis on Covariances with 2 Factors: Maximum Likelihood / Varimax", "Factor Loading Plot"},
			"Principal Components Loading Plot", FrameBox,
			{Frame Size( 56, 39 )}
		)
	)
);
```

**Code Explanation**:

1. Open table.
2. Define factor analysis object.
3. Set response variables.
4. Specify estimation method.
5. Choose variance scaling.
6. Fit model with ML, SMC, 2 factors.
7. Apply Varimax rotation.
8. Send report to dispatch.
9. Adjust frame size.
10. Display factor loading plot.



### Example 4
> **Summary**: Runs factor analysis on selected variables, enabling automatic recalculation and local data filtering for Benzene range, while excluding rows with Ether values less than 0.

<!-- Keywords: #JMPScriptingLanguage, #FactorAnalysis, #LocalDataFilter, #AutomaticRecalculation, #DataExclusion -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Factor Analysis(
	Y( :Name( "1-Octanol" ), :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Automatic Recalc( 1 ),
	Estimation Method( "Row-wise" ),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 1, "Varimax" ), 
);
obj << Local Data Filter(
	Location( {1087, 151} ),
	Add Filter( columns( :Benzene ), Where( :Benzene >= -1.3687 & :Benzene <= 2.225 ) ),
	Mode( Select( 0 ), Show( 1 ), Include( 1 ) )
);
obj << Automatic Recalc( 0 );
dt << Select Where( :Ether < 0 );
dt << Exclude();
rpt = obj << Report;
vallist = (rpt[Number Col Box( 2 )]);
```

**Code Explanation**:

1. Open data table;
2. Perform Factor Analysis on selected variables.
3. Enable automatic recalculation.
4. Use row-wise estimation method.
5. Scale variance using correlations.
6. Fit model with ML, SMC, Varimax.
7. Disable automatic recalculation.
8. Create local data filter for Benzene.
9. Set filter criteria for Benzene range.
10. Exclude rows where Ether is less than 0.



### Example 5
> **Summary**: Runs factor analysis on selected variables, adds local data filter for Benzene, and generates a report with values from the second number column box.

<!-- Keywords: #FactorAnalysis, #LocalDataFilter, #JMPScriptingLanguage, #ReportGeneration, #DataExclusion -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Factor Analysis(
	Y( :Name( "1-Octanol" ), :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Automatic Recalc( 1 ),
	Estimation Method( "Row-wise" ),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 1, "Varimax" ), 
);
obj << Local Data Filter(
	Location( {1087, 151} ),
	Add Filter( columns( :Benzene ), Where( :Benzene >= -1.3687 & :Benzene <= 2.225 ) ),
	Mode( Select( 0 ), Show( 1 ), Include( 1 ) )
);
dt << Select Where( :Ether < 0 );
dt << Exclude();
rpt = obj << Report;
vallist = (rpt[Number Col Box( 2 )]);
Close( dt, NoSave );
dt = Open("data_table.jmp");
obj = Factor Analysis(
	Y( :Name( "1-Octanol" ), :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Automatic Recalc( 1 ),
	Estimation Method( "Row-wise" ),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 1, "Varimax" ), 
);
obj << Local Data Filter(
	Location( {1087, 151} ),
	Add Filter( columns( :Benzene ), Where( :Benzene >= -1.3687 & :Benzene <= 2.225 ) ),
	Mode( Select( 0 ), Show( 1 ), Include( 1 ) )
);
obj << Automatic Recalc( 0 );
dt << Select Where( :Ether < 0 );
dt << Exclude();
rpt = obj << Report;
vallist = (rpt[Number Col Box( 2 )]);
```

**Code Explanation**:

1. Open data table;
2. Perform factor analysis on selected variables.
3. Add local data filter for Benzene.
4. Select rows where Ether is less than 0.
5. Exclude selected rows.
6. Generate factor analysis report.
7. Retrieve values from second number column box.
8. Close dataset without saving.
9. Reopen data_table dataset
10. Repeat factor analysis with same settings.



### Example 6
> **Summary**: Runs a factor analysis on the 'Name' variable, utilizing row-wise estimation and variance scaling to generate a report with customized frame settings.

<!-- Keywords: #FactorAnalysis, #JMPScriptingLanguage, #DataTable, #EstimationMethod, #ReportSettings -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Factor Analysis(
	Y( :Name( "1-Octanol" ), :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Estimation Method( "Row-wise" ),
	Variance Scaling( Covariances ),
	Fit( ML, SMC, 2, Varimax ),
	SendToReport( Dispatch( FrameBox, {Frame Size( 56, 39 )} ) )
);
```

**Code Explanation**:

1. Open data table.
2. Define analysis variables.
3. Set estimation method.
4. Choose variance scaling.
5. Specify fit parameters.
6. Send report settings.



### Example 7
> **Summary**: Runs a Factor Analysis on selected columns, generating reports with customized font and style, and redoing analysis with new settings to compare report equality.

<!-- Keywords: #JMPScriptingLanguage, #FactorAnalysis, #ReportGeneration, #Customization, #RedoAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
:Benzene << set values( {1, 1, 1} );
obj = Factor Analysis(
	Y( :Name( "1-Octanol" ), :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Estimation Method( "Row-wise" ),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 1, "Varimax" ),
	SendToReport( Dispatch( {}, "Model Launch", OutlineBox, {Set Font( "Segoe UI" ), Set Font Size( 11 ), Set Font Style( "Bold" )} ) )
);
rpt1 = obj << Report;
:Benzene << Set Property( "Missing Value Codes", 1 );
obj2 = obj << Redo Analysis;
rpt = obj2 << Report;
a = rpt << get text;
b = rpt1 << get text;
ans = Equal( a, b );
```

**Code Explanation**:

1. Open data table;
2. Set "Benzene" values to {1, 1, 1}.
3. Perform Factor Analysis on selected columns.
4. Configure analysis method and scaling.
5. Fit model using ML, SMC, Varimax.
6. Customize report font and style.
7. Generate initial report.
8. Set "Benzene" missing value code to 1.
9. Redo analysis with new settings.
10. Compare reports for equality.



### Example 8
> **Summary**: Runs factor analysis on a data table to extract eigenvalues, prior communality estimates, and rotation matrices using JMP's Factor Analysis platform.

<!-- Keywords: #JMPFactorAnalysis, #DataMining, #MultivariateStatistics, #ExploratoryDataAnalysis, #DimensionalityReduction -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Factor Analysis(
	Y( :Total Population, :Median School Years, :Total Employment, :Professional Services, :Median House Value ),
	Estimation Method( "ML" ),
	Variance Scaling( Correlations ),
	Fit( ML, SMC, 2, Varimax ), 
);
rpt = obj << report;
orig eigen = rpt["Eigenvalues"][Table Box( 1 )] << get as matrix;
smc = (rpt[Outline Box( "Prior Communality Estimates:SMC" )][Matrix Box( 1 )] << get);
eigenvalue = Matrix( rpt[Number Col Box( "Eigenvalue" )] << get );
unrotated = Matrix( rpt[Outline Box( "Unrotated Factor Loading" )][Matrix Box( 1 )] << get );
rotated = (rpt[Outline Box( "Rotation Matrix" )][Matrix Box( 1 )] << get);
finalCommunalityEstimates = (rpt[Outline Box( "Final Communality Estimates" )][Matrix Box( 1 )] << get);
stdScoreCoefs = (rpt[Outline Box( "Standard Score Coefficients" )][Matrix Box( 1 )] << get);
varFactor = Matrix( rpt[Outline Box( "Variance Explained by Each Factor" )][Number Col Box( "Variance" )] << get );
varPercent = Matrix( rpt[Outline Box( "Variance Explained by Each Factor" )][Number Col Box( "Percent" )] << get );
varCum = Matrix( rpt[Outline Box( "Variance Explained by Each Factor" )][Number Col Box( "Cum Percent" )] << get );
significanceTest1 = (rpt[Outline Box( "Significance Test" )][Table Box( 1 )][Number Col Box( "DF" )] << get) |/ (rpt[
Outline Box( "Significance Test" )][Table Box( 1 )][Number Col Box( "ChiSquare" )] << get) |/ (rpt[Outline Box( "Significance Test" )][
Table Box( 1 )][Number Col Box( "Prob>ChiSq" )] << get);
significanceTest2 = (rpt[Outline Box( "Significance Test" )][Table Box( 2 )][Number Col Box( "DF" )] << get) |/ (rpt[
Outline Box( "Significance Test" )][Table Box( 2 )][Number Col Box( "ChiSquare" )] << get) |/ (rpt[Outline Box( "Significance Test" )][
Table Box( 2 )][Number Col Box( "Prob>ChiSq" )] << get);
rotatedFactorLoading = Matrix( rpt[Outline Box( "Rotated Factor Loading" )][Matrix Box( 1 )] << get );
```

**Code Explanation**:

1. Open data_table data
2. Perform factor analysis.
3. Set estimation method to ML.
4. Use correlations for variance scaling.
5. Fit model with ML, SMC, 2 factors.
6. Extract eigenvalues report.
7. Retrieve prior communality estimates.
8. Get eigenvalue data.
9. Fetch unrotated factor loadings.
10. Obtain rotation matrix.



### Example 9
> **Summary**: Runs a factor analysis process to extract eigenvalues, SMC estimates, and final communality estimates from the data table, utilizing JMP's Factor Analysis platform.

<!-- Keywords: #JMPFactorAnalysis, #EigenvalueExtraction, #SMCEstimates, #CommunalityEstimation, #DataAnalytics -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Factor Analysis(
	Y( :Total Population, :Median School Years, :Total Employment, :Professional Services, :Median House Value ),
	Estimation Method( "ML" ),
	Variance Scaling( Correlations ),
	Fit( ML, SMC, 3, Varimax ), 
);
rpt = obj << report;
orig eigen = rpt["Eigenvalues"][Table Box( 1 )] << get as matrix;
smc = (rpt[Outline Box( "Prior Communality Estimates:SMC" )][Matrix Box( 1 )] << get);
eigenvalue = Matrix( rpt[Number Col Box( "Eigenvalue" )] << get );
unrotated = Matrix( rpt[Outline Box( "Unrotated Factor Loading" )][Matrix Box( 1 )] << get );
rotated = (rpt[Outline Box( "Rotation Matrix" )][Matrix Box( 1 )] << get);
finalCommunalityEstimates = (rpt[Outline Box( "Final Communality Estimates" )][Matrix Box( 1 )] << get);
stdScoreCoefs = (rpt[Outline Box( "Standard Score Coefficients" )][Matrix Box( 1 )] << get);
varFactor = Matrix( rpt[Outline Box( "Variance Explained by Each Factor" )][Number Col Box( "Variance" )] << get );
varPercent = Matrix( rpt[Outline Box( "Variance Explained by Each Factor" )][Number Col Box( "Percent" )] << get );
varCum = Matrix( rpt[Outline Box( "Variance Explained by Each Factor" )][Number Col Box( "Cum Percent" )] << get );
significanceTest1 = (rpt[Outline Box( "Significance Test" )][Table Box( 1 )][Number Col Box( "DF" )] << get) |/ (rpt[
Outline Box( "Significance Test" )][Table Box( 1 )][Number Col Box( "ChiSquare" )] << get) |/ (rpt[Outline Box( "Significance Test" )][
Table Box( 1 )][Number Col Box( "Prob>ChiSq" )] << get);
significanceTest2 = (rpt[Outline Box( "Significance Test" )][Table Box( 2 )][Number Col Box( "DF" )] << get) |/ (rpt[
Outline Box( "Significance Test" )][Table Box( 2 )][Number Col Box( "ChiSquare" )] << get) |/ (rpt[Outline Box( "Significance Test" )][
Table Box( 2 )][Number Col Box( "Prob>ChiSq" )] << get);
rotatedFactorLoading = Matrix( rpt[Outline Box( "Rotated Factor Loading" )][Matrix Box( 1 )] << get );
```

**Code Explanation**:

1. Open data_table data
2. Perform factor analysis.
3. Extract eigenvalues.
4. Get SMC estimates.
5. Retrieve eigenvalue matrix.
6. Fetch unrotated loadings.
7. Obtain rotation matrix.
8. Extract final communality estimates.
9. Get standard score coefficients.
10. Calculate variance explained.



### Example 10
> **Summary**: Runs factor analysis on a data table, specifying Y variables, variance estimation, and scaling, while suppressing loadings below 0.4022 and fitting the model using ML, SMC, and Varimax.

<!-- Keywords: #FactorAnalysis, #JMPScriptingLanguage, #DataTable, #VarianceEstimation, #ModelFitting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Factor Analysis(
	Y( :Support_L, :Goal_L, :Work_L, :Interact_L, :Person_C, :Intra_C, :Inter_C ),
	Variance Estimation( "Row-wise" ),
	Variance Scaling( "Correlations" ),
	Suppress Absolute Loading Value Less Than( 0.4022 ),
	Fit( "ML", "SMC", 2, "Varimax" ),
	SendToReport( Dispatch( {}, "Model Launch", OutlineBox, {Close( 0 )} ) )
);
rpt = obj << Report();
scrObj = rpt[Outline Box( "?/ Varimax" )] << Get Scriptable Object();
scrObj << Copy Model Specification for SEM();
```

**Code Explanation**:

1. Open data table;
2. Perform factor analysis.
3. Set Y variables.
4. Use row-wise variance estimation.
5. Scale variances by correlations.
6. Suppress loadings less than 0.4022.
7. Fit model using ML, SMC, 2 factors, Varimax.
8. Close model launch outline.
9. Retrieve report object.
10. Copy Varimax model specification for SEM.



## Multiple Factor Analysis 
### Example 1
> **Summary**: Runs Multiple Factor Analysis (MFA) on a data table, defining product IDs and Z variables, creating MFA blocks, and customizing report settings.

<!-- Keywords: #JMPScriptingLanguage, #MultipleFactorAnalysis, #DataVisualization, #ReportCustomization, #MFAOptions -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Multiple Factor Analysis(
	Product ID( :Vineyard ),
	Z( :Region ),
	MFA Blocks(
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness},
		{"Florence Flowery etc.", :Florence Flowery, :Florence Crispness, :Florence Tannin, :Florence Savory, :Florence Lightness},
		{"Xavier Fruity etc.", :Xavier Fruity, :Xavier Spicy, :Xavier Crispness, :Xavier Alcohol, :Xavier Savory, :Xavier Lightness},
		{"Robert Fruity etc.", :Robert Fruity, :Robert Flowery, :Robert Spicy, :Robert Crispness, :Robert Tannin, :Robert Alcohol,
		:Robert Savory, :Robert Lightness},
		{"Paula Fruity etc.", :Paula Fruity, :Paula Flowery, :Paula Spicy, :Paula Crispness, :Paula Tannin, :Paula Savory},
		{"Monica Fruity etc.", :Monica Fruity, :Monica Flowery, :Monica Spicy, :Monica Tannin, :Monica Alcohol, :Monica Savory,
		:Monica Lightness},
		{"Frank Fruity etc.", :Frank Fruity, :Frank Flowery, :Frank Spicy, :Frank Crispness, :Frank Tannin, :Frank Alcohol, :Frank Savory,
		:Frank Lightness}
	),
	Summary Plots( 0 ),
	Consensus Map( 0 ),
	Block Partial Inertias( 1 ),
	Block Partial Contributions( 1 ),
	SendToReport(
		Dispatch( {"Block Partial Contributions"}, "MFA Options", FrameBox, {Marker Size( 1 ), Marker Drawing Mode( "Normal" )} )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Launch Multiple Factor Analysis.
3. Set Product ID variable.
4. Define Z variable.
5. Create MFA blocks.
6. Disable summary plots.
7. Disable consensus map.
8. Enable block partial inertias.
9. Enable block partial contributions.
10. Customize report settings.



### Example 2
> **Summary**: Performs a Multiple Factor Analysis (MFA) to identify patterns and relationships between variables in the data table, generating a partial axis plot and biplot for visualization.

<!-- Keywords: #JMPScriptingLanguage, #MultipleFactorAnalysis, #PartialAxisPlot, #Biplot, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Multiple Factor Analysis(
	Product ID( :Vineyard ),
	Z( :Region ),
	MFA Blocks(
		{"Carolyn Peppery etc.", :Carolyn Peppery, :Carolyn Tannic, :Carolyn Aromatic, :Carolyn Berry Notes},
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness},
		{"Florence Flowery etc.", :Florence Flowery, :Florence Crispness, :Florence Tannin, :Florence Savory, :Florence Lightness},
		{"Xavier Fruity etc.", :Xavier Fruity, :Xavier Spicy, :Xavier Crispness, :Xavier Alcohol, :Xavier Savory, :Xavier Lightness},
		{"Robert Fruity etc.", :Robert Fruity, :Robert Flowery, :Robert Spicy, :Robert Crispness, :Robert Tannin, :Robert Alcohol,
		:Robert Savory, :Robert Lightness},
		{"Paula Fruity etc.", :Paula Fruity, :Paula Flowery, :Paula Spicy, :Paula Crispness, :Paula Tannin, :Paula Savory}
	),
	Partial Axis Plot( 1 ),
	Biplot( 1 )
);
```

**Code Explanation**:

1. Open data table.
2. Run Multiple Factor Analysis.
3. Set Product ID variable.
4. Set Z variable.
5. Define MFA Blocks.
6. Create Partial Axis Plot.
7. Create Biplot.



### Example 3
> **Summary**: Runs multiple factor analysis on a data table, defining blocks and selecting consensus map components to highlight products with small inertia.

<!-- Keywords: #JMPScriptingLanguage, #MultipleFactorAnalysis, #ConsensusMap, #DataVisualization, #ProductHighlight -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Multiple Factor Analysis(
	MFA Blocks(
		{"Carolyn Peppery etc.", :Carolyn Peppery, :Carolyn Tannic, :Carolyn Aromatic, :Carolyn Berry Notes},
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness},
		{"Florence Flowery etc.", :Florence Flowery, :Florence Crispness, :Florence Tannin, :Florence Savory, :Florence Lightness}
	),
	Consensus Map Select Component( 1, 2 ),
	Highlight Product( "Small Inertia", 0.0690263210638801 )
);
```

**Code Explanation**:

1. Open data table;
2. Perform multiple factor analysis.
3. Define blocks for analysis.
4. Select consensus map components.
5. Highlight products with small inertia.



### Example 4
> **Summary**: Runs multiple factor analysis (MFA) on a data table, defining MFA blocks with specified variables and saving block partial scores.

<!-- Keywords: #JMPScriptingLanguage, #MultipleFactorAnalysis, #DataTableOperations, #BlockPartialScores, #MFABlocks -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Multiple Factor Analysis(
	MFA Blocks(
		{"Carolyn Peppery etc.", :Carolyn Peppery, :Carolyn Tannic, :Carolyn Aromatic, :Carolyn Berry Notes},
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness}
	)
);
mytab = obj << Save Block Partial Scores();
```

**Code Explanation**:

1. Open data table.
2. Perform multiple factor analysis.
3. Define MFA blocks.
4. Specify block names and variables.
5. Save block partial scores.



### Example 5
> **Summary**: Runs multiple factor analysis on a data table, defining blocks and specifying variables for each block, and saves partial axes coordinates.

<!-- Keywords: #JMPScriptingLanguage, #MultipleFactorAnalysis, #DataTable, #PartialAxesCoordinates, #BlockDefinition -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Multiple Factor Analysis(
	MFA Blocks(
		{"Carolyn Peppery etc.", :Carolyn Peppery, :Carolyn Tannic, :Carolyn Aromatic, :Carolyn Berry Notes},
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness}
	)
);
mytab = obj << Save Partial Axes Coordinates();
```

**Code Explanation**:

1. Open data table.
2. Perform multiple factor analysis.
3. Define blocks for analysis.
4. Specify variables for first block.
5. Specify variables for second block.
6. Save partial axes coordinates.
7. Store result in variable.



### Example 6
> **Summary**: Runs the creation and visualization of a Multiple Factor Analysis (MFA) object with partial axes plot and biplot, selecting specific components for each.

<!-- Keywords: #JMPScriptingLanguage, #MultipleFactorAnalysis, #PartialAxesPlot, #Biplot, #DataVisualization -->

**Code**:
```jsl
Open("data_table.jmp");
obj = Multiple Factor Analysis(
	MFA Blocks(
		{"Carolyn Peppery etc.", :Carolyn Peppery, :Carolyn Tannic, :Carolyn Aromatic, :Carolyn Berry Notes},
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness}
	)
);
obj << Partial Axes Plot Select Component( 1, 3 );
obj << Biplot Select Component( 1, 3 );
```

**Code Explanation**:

1. Open data table;
2. Create Multiple Factor Analysis object.
3. Define MFA blocks with variables.
4. Generate Partial Axes Plot.
5. Select specific components for plot.
6. Generate Biplot.
7. Select specific components for biplot.



### Example 7
> **Summary**: Performs the Multiple Factor Analysis (MFA) process to identify relationships between variables, and generates a partial axes plot and biplot for visual exploration.

<!-- Keywords: #JMPScriptingLanguage, #MultipleFactorAnalysis, #PartialAxesPlot, #Biplot, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Multiple Factor Analysis(
	MFA Blocks(
		{"Carolyn Peppery etc.", :Carolyn Peppery, :Carolyn Tannic, :Carolyn Aromatic, :Carolyn Berry Notes},
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness}
	)
);
obj << Partial Axes Plot Select Component( 1, 3 );
obj << Biplot Select Component( 1, 3 );
```

**Code Explanation**:

1. Open table.
2. Perform MFA analysis.
3. Define MFA blocks.
4. Select components for plot.
5. Generate partial axes plot.
6. Select components for biplot.
7. Generate biplot.



### Example 8
> **Summary**: Process of performing multiple factor analysis on a data table, generating a report, and enabling/disabling block squared cosines to extract journal information.

<!-- Keywords: #JMPScriptingLanguage, #MultipleFactorAnalysis, #BlockSquaredCosines, #DataTableOperations, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Multiple Factor Analysis( MFA Blocks( {:Al, :Mn, :Na, :Br}, {:Ce, :Co, :Cr, :Cs}, {:Eu, :Fe, :Hf, :La} ) );
rpt = obj << Report();
obj << Block Squared Cosines( 1 );
blkJournal = rpt[Outline Box( "Block Squared Cosines" )] << Get Journal();
obj << Block Squared Cosines( 0 );
Try( blkJournal = rpt[Outline Box( "Block Squared Cosines" )] << Get Journal() );
```

**Code Explanation**:

1. Open data table.
2. Perform multiple factor analysis.
3. Retrieve analysis report.
4. Enable block squared cosines.
5. Extract block journal.
6. Disable block squared cosines.
7. Attempt to extract block journal again.



### Example 9
> **Summary**: Performs a Multiple Factor Analysis (MFA) workflow, generating reports and extracting journals from the analysis results.

<!-- Keywords: #JMPScriptingLanguage, #MultipleFactorAnalysis, #DataVisualization, #ReportGeneration, #JournalExtraction -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Multiple Factor Analysis(
	MFA Blocks(
		{"Carolyn Peppery etc.", :Carolyn Peppery, :Carolyn Tannic, :Carolyn Aromatic, :Carolyn Berry Notes},
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness}
	)
);
rpt1 = obj << Report();
jrn1 = rpt1[Outline Box( "Multiple Factor Analysis" )] << Get Journal();
obj << Partial Axis Plot Select component( 1, 3 );
rpt2 = obj << Report();
jrn2 = rpt2[Outline Box( "Multiple Factor Analysis" )] << Get Journal();
obj << Partial Axes Plot Select component( 1, 3 );
rpt3 = obj << Report();
jrn3 = rpt3[Outline Box( "Multiple Factor Analysis" )] << Get Journal();
```

**Code Explanation**:

1. Open data table;
2. Run Multiple Factor Analysis.
3. Retrieve initial report.
4. Extract journal from first report.
5. Select component 1, axis 3.
6. Generate second report.
7. Extract journal from second report.
8. Select component 1, axis 3 again.
9. Generate third report.
10. Extract journal from third report.



### Example 10
> **Summary**: Runs Multiple Factor Analysis (MFA) to identify patterns and relationships between variables, generating a partial axes plot with selected components.

<!-- Keywords: #JMPScriptingLanguage, #MultipleFactorAnalysis, #PartialAxesPlot, #DataVisualization, #DimensionalityReduction -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Multiple Factor Analysis(
	MFA Blocks(
		{"Carolyn Peppery etc.", :Carolyn Peppery, :Carolyn Tannic, :Carolyn Aromatic, :Carolyn Berry Notes},
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness}
	)
);
obj << Partial Axes Plot Select component( 1, 3 );
```

**Code Explanation**:

1. Open data table.
2. Perform Multiple Factor Analysis.
3. Define MFA blocks.
4. Specify Carolyn block variables.
5. Specify Susan block variables.
6. Generate partial axes plot.
7. Select component 1.
8. Select component 3.



### Example 11
> **Summary**: Performs the Multiple Factor Analysis (MFA) process on a data table, defining factor blocks and relaunching the analysis.

<!-- Keywords: #JMPScriptingLanguage, #MultipleFactorAnalysis, #DataTable, #FactorBlocks, #RelaunchAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Multiple Factor Analysis( MFABlocks( {:Al, :Mn, :Na}, {:Br, :Ce, :Co} ) );
obj << Relaunch Analysis();
```

**Code Explanation**:

1. Open data table.
2. Perform Multiple Factor Analysis.
3. Define factor blocks.
4. Relaunch analysis.



### Example 12
> **Summary**: Performs the Multiple Factor Analysis (MFA) process, defining blocks and relaunching the analysis to retrieve journal information.

<!-- Keywords: #JMPScriptingLanguage, #MultipleFactorAnalysis, #DataTable, #BlockDefinition, #JournalRetrieval -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Multiple Factor Analysis( MFA Blocks( {"MyBlock1", :Sepal length, :Sepal width}, {"MyBlock2", :Petal length, :Petal width} ) );
obj << Relaunch Analysis();
launchWin = Get Window( "Multiple Factor Analysis Model Dialog" );
actJrn = launchWin << Get Journal();
actAddBlock1 = Regex( actJrn, "MyBlock1" );
actAddBlock2 = Regex( actJrn, "MyBlock2" );
```

**Code Explanation**:

1. Open data table;
2. Launch Multiple Factor Analysis.
3. Define MFA blocks.
4. Relaunch the analysis.
5. Get MFA dialog window.
6. Retrieve journal from window.
7. Search for "MyBlock1" in journal.
8. Search for "MyBlock2" in journal.



## Factor Analysis using Tick Seconds
### Example 1
> **Summary**: Perform a Multiple Factor Analysis (MFA) on a data table, defining blocks and enabling RV correlations and LG coefficients.

<!-- Keywords: #JMPScriptingLanguage, #MultipleFactorAnalysis, #DataTable, #BlockDefinition, #RVCorrelations -->

**Code**:
```jsl
dt = Open("data_table.jmp");
start = Tick Seconds();
obj = dt << Multiple Factor Analysis(
	MFA Blocks( {"Block 1", :NPN1, :PNP1}, {"Block 2", :PNP2, :NPN2}, {"Block 3", :PNP3, :IVP1} ),
	RV Correlations( 1 ),
	Lg Coefficients( 1 )
);
end = Tick Seconds();
elapsed = end - start;
```

**Code Explanation**:

1. Open table.
2. Start timer.
3. Perform MFA analysis.
4. Define blocks.
5. Enable RV correlations.
6. Enable LG coefficients.
7. End timer.
8. Calculate elapsed time.



### Example 2
> **Summary**: Performs principal component analysis (PCA) on a data table, specifying row-wise estimation method and factor analysis with ML method, Varimax rotation, and correlation inclusion.

<!-- Keywords: #JMPScriptingLanguage, #PrincipalComponentAnalysis, #FactorAnalysis, #Row-WiseEstimation, #VarimaxRotation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
t1 = Tick Seconds();
obj = dt << Principal Components(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Estimation Method( "Row-wise" ),
	on Correlations,
	Factor Analysis( ML, SMC, 3, Varimax )
);
t2 = Tick Seconds();
rpt = obj << Report();
rpt = rpt["Factor Loading Plot"];
```

**Code Explanation**:

1. Open data table;
2. Start timer.
3. Perform principal component analysis.
4. Specify variables for analysis.
5. Use row-wise estimation method.
6. Include correlations.
7. Apply factor analysis with ML method.
8. Set SMC value to 3.
9. Use Varimax rotation.
10. Stop timer.



## Factor Analysis using Log Capture
### Example 1
> **Summary**: Runs factor analysis and score plot generation for a specified data table, capturing log output and retrieving resulting data tables.

<!-- Keywords: #JMPScriptingLanguage, #FactorAnalysis, #ScorePlot, #DataTableManipulation, #LogCapture -->

**Code**:
```jsl
dt = Open("data_table.jmp");
log = Log Capture(
	obj = dt << Factor Analysis(
		Y( :Total Population, :Median School Years, :Total Employment, :Professional Services, :Median House Value ),
		Variance Scaling( "Correlations" ),
		Fit( "ML", "SMC", 2, "Varimax" )
	)
);
_dts = obj << Get Data Table;
_dts = If( Is List( _dts ),
	_dts,
	Eval List( {_dts} )
);
For( _i = 1, _i <= N Items( _dts ), _i++,
	_dts[_i] << Select Rows( Index( 1, N Row( _dts[_i] ) ) )
);
_dts << Delete Rows;
obj << (Fit[1] << Score Plot( 1 ));
obj << (Fit[1] << Score Plot( 1 ));
```

**Code Explanation**:

1. Open data table.
2. Perform factor analysis.
3. Capture log output.
4. Retrieve resulting data tables.
5. Ensure data tables are in list form.
6. Loop through each data table.
7. Select all rows in each table.
8. Delete selected rows from each table.
9. Generate score plot for first fit.
10. Repeat score plot generation.



### Example 2
> **Summary**: Runs the factor analysis process for a data table, utilizing row-wise variance estimation and correlation-based scaling.

<!-- Keywords: #FactorAnalysis, #JMPScriptingLanguage, #DataScience, #MultivariateStatistics, #VarianceEstimation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
log = Log Capture(
	fa = dt << Factor Analysis(
		Y( :Name( "1-Octanol" ), :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
		Variance Estimation( "Row-wise" ),
		Variance Scaling( "Correlations" ),
		Fit( "ML", "SMC", 2, "Varimax" )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Start log capture.
3. Perform factor analysis.
4. Set response variables.
5. Use row-wise variance estimation.
6. Scale variances by correlations.
7. Fit using ML method.
8. Fit using SMC method.
9. Specify 2 factors.
10. Apply Varimax rotation.



### Example 3
> **Summary**: Runs factor analysis on a data table, capturing the maximum likelihood and Varimax rotation results, and calculates the difference from baseline values.

<!-- Keywords: #JMPScriptingLanguage, #FactorAnalysis, #MaximumLikelihood, #VarimaxRotation, #DataTableProcessing -->

**Code**:
```jsl
dt = Open("data_table.jmp");
log = Log Capture(
	Factor Analysis(
		Y( :Total Population, :Median School Years, :Total Employment, :Professional Services, :Median House Value ),
		Variance Estimation( "Row-wise" ),
		Variance Scaling( "Correlations" ),
		Fit( "ML", "ONE", 3, "Varimax" )
	)
);
rpt = Current Report();
results_mx = (rpt[Outline Box( "?Maximum Likelihood / Varimax" )][Number Col Box( 7 )]) << get as matrix();
results_bm_mx = -2;
comp = Round( results_mx, 3 ) - Round( results_bm_mx, 3 );
```

**Code Explanation**:

1. Open data table.
2. Start logging output.
3. Perform factor analysis.
4. Set variance estimation method.
5. Set variance scaling method.
6. Fit model using ML and Varimax.
7. Capture current report.
8. Extract specific report element.
9. Convert extracted data to matrix.
10. Calculate difference from baseline value.



### Example 4
> **Summary**: Runs factor analysis and visualization for a data table, generating score plots and factor loading plots, while defining final communality values, rotation matrix values, and variance values.

<!-- Keywords: #JMPScriptingLanguage, #FactorAnalysis, #DataVisualization, #StatisticalModeling, #MatrixOperations -->

**Code**:
```jsl
dt = Open("data_table.jmp");
x = Log Capture( obj = dt << Factor Analysis( Y( 1 :: 4 ), Fit( ML, SMC, 1, Varimax ) ) );
obj << Score Plot;
obj << Factor Loading Plot;
Close( dt, No Save );
finalCommunality_sas = [0.17406442, 0.25183876, 0.19821788, 0.09235689, 0.46386227, 0.51549842, 0.50779990, 0.51361059, 0.24254463,
0.31094842, 0.16923939, 0.22822810, 0.53062310, 0.55584860, 0.59939623, 0.24762886];
rotationMatrix_sas = [0.97847 0.20641, -0.20641 0.97847];
variance_sas = [2.99155331, 2.61015315];
```

**Code Explanation**:

1. Open data table;
2. Perform factor analysis.
3. Create score plot.
4. Create factor loading plot.
5. Close dataset without saving.
6. Define final communality values.
7. Define rotation matrix values.
8. Define variance values.



### Example 5
> **Summary**: Process of performing factor analysis on a data table, setting analysis options, and retrieving the report, including accessing a combo box method.

<!-- Keywords: #FactorAnalysis, #JSLScripting, #DataTableOperations, #ComboBoxMethod, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
x = Log Capture( obj = dt << Factor Analysis( Y( 1 :: 5 ), Fit( ML, SMC, 1, Varimax ) ) );
rpt = obj << report;
method = rpt[Combo Box( 1 )] << get;
```

**Code Explanation**:

1. Open data_table data
2. Perform factor analysis.
3. Set analysis options.
4. Retrieve factor analysis report.
5. Access combo box method.



### Example 6
> **Summary**: Executes two factor analyses on a data table, capturing reports and extracting variance explained by each factor, percentage variance explained, and cumulative percentage variance explained.

<!-- Keywords: #JMPScriptingLanguage, #FactorAnalysis, #VarianceScaling, #ReportGeneration, #DataTableManipulation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
x = Log Capture( obj1 = dt << Factor Analysis( Y( 2 :: 7 ), Variance Scaling( Correlations ), Fit( ML, SMC, 2, Varimax ), ) );
rpt1 = obj1 << report;
var1 = rpt1[Outline Box( "Variance Explained by Each Factor" )][Number Col Box( "Variance" )] << get as matrix;
percent1 = rpt1[Outline Box( "Variance Explained by Each Factor" )][Number Col Box( "Percent" )] << get as matrix;
cum1 = rpt1[Outline Box( "Variance Explained by Each Factor" )][Number Col Box( "Cum Percent" )] << get as matrix;
x = Log Capture( obj2 = dt << Factor Analysis( Y( 2 :: 7 ), Variance Scaling( Covariances ), Fit( ML, SMC, 2, Varimax ), ) );
rpt2 = obj2 << report;
var2 = rpt2[Outline Box( "Variance Explained by Each Factor" )][Number Col Box( "Variance" )] << get as matrix;
percent2 = rpt2[Outline Box( "Variance Explained by Each Factor" )][Number Col Box( "Percent" )] << get as matrix;
cum2 = rpt2[Outline Box( "Variance Explained by Each Factor" )][Number Col Box( "Cum Percent" )] << get as matrix;
```

**Code Explanation**:

1. Open data table;
2. Perform factor analysis on columns 2-7.
3. Use correlations for variance scaling.
4. Fit model using ML, SMC, 2 factors, Varimax rotation.
5. Capture factor analysis report.
6. Extract variance explained by each factor.
7. Extract percentage variance explained.
8. Extract cumulative percentage variance explained.
9. Repeat factor analysis with covariances.
10. Extract similar metrics from second report.



### Example 7
> **Summary**: Process of performing factor analysis on a data table, generating reports, and checking box selections in the Factor Loading Plot.

<!-- Keywords: #JMPScriptingLanguage, #FactorAnalysis, #DataVisualization, #ReportGeneration, #InteractiveFeatures -->

**Code**:
```jsl
dt = Open("data_table.jmp");
x = Log Capture( obj = dt << Factor Analysis( Y( 1 :: 4 ), Variance Scaling( Covariances ), Fit( PC, ONE, 5, Promax ) ) );
Close( dt, No Save );
dt = As Table( J( 240, 33, Random Normal() ) );
x = Log Capture( obj = dt << Factor Analysis( Y( 1 :: N Cols( dt ) ), Fit( ML, SMC, 10, Varimax ) ) );
rpt = obj << report;
labelCheck = rpt[Outline Box( "Factor Loading Plot" )][CheckBoxBox( 1 )] << get;
```

**Code Explanation**:

1. Open data table;
2. Perform factor analysis.
3. Close dataset without saving.
4. Create new random table.
5. Perform factor analysis on new data.
6. Retrieve analysis report.
7. Check box in factor loading plot.



### Example 8
> **Summary**: Runs the factor analysis process on a data table, utilizing maximum likelihood estimation and varimax rotation to extract underlying factors.

<!-- Keywords: #FactorAnalysis, #MaximumLikelihood, #VarimaxRotation, #JSLScripting, #DataTable -->

**Code**:
```jsl
dt = Open("data_table.jmp");
x = Log Capture( obj = dt << Factor Analysis( Y( 1 :: N Cols( dt ) ), Fit( ML, SMC, 2, Varimax ) ) );
```

**Code Explanation**:

1. Open data_table data
2. Perform factor analysis.
3. Use maximum likelihood method.
4. Apply small sample correction.
5. Set initial factors to 2.
6. Rotate using varimax method.
7. Store results in variable x.



### Example 9
> **Summary**: Process of performing factor analysis, creating score plots with imputation, and setting missing values in specific columns, while also retrieving a report object.

<!-- Keywords: #JMPScriptingLanguage, #FactorAnalysis, #ScorePlot, #Imputation, #DataPreprocessing -->

**Code**:
```jsl
dt = Open("data_table.jmp");
x = Log Capture( obj = dt << Factor Analysis( Y( 1 :: 5 ), Variance Scaling( "Correlations" ), Fit( "ML", "SMC", 2, "Varimax" ) ) );
obj << (Fit[1] << Score Plot with Imputation( 1 ));
Column( dt, "Total Population" )[12] = .;
Column( dt, "Median School Years" )[3] = .;
Column( dt, "Total Employment" )[12] = .;
Column( dt, "Professional Services" )[8] = .;
Column( dt, "Median House Value" )[7] = .;
x = Log Capture(
	a = Try( obj = dt << Factor Analysis( Y( 1 :: 5 ), Variance Scaling( "Correlations" ), Fit( "ML", "SMC", 2, "Varimax" ) ) )
);
obj << (Fit[1] << Score Plot with Imputation( 1 ));
Log Capture(
	obj = dt << Factor Analysis(
		Y( 1 :: 5 ),
		Variance Scaling( "Correlations" ),
		Estimation Method( "Pairwise" ),
		Fit( "ML", "SMC", 2, "Varimax" )
	);
	obj << (Fit[1] << Score Plot with Imputation( 1 ));
);
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Perform factor analysis.
3. Create score plot with imputation.
4. Set missing values in specific columns.
5. Repeat factor analysis with missing values.
6. Create score plot with imputation again.
7. Perform factor analysis with pairwise estimation.
8. Create score plot with imputation.
9. Retrieve the report object.



### Example 10
> **Summary**: Runs factor analysis on a data table, capturing the log and setting selected item in listbox.

<!-- Keywords: #FactorAnalysis, #JMPScriptingLanguage, #DataTable, #LogCapture, #Listbox -->

**Code**:
```jsl
dt = Open("data_table.jmp");
x = Log Capture(
	obj = dt << Factor Analysis(
		Y( :Name( "1-Octanol" ), :Ether, :Chloroform ),
		Estimation Method( "Row-wise" ),
		Variance Scaling( "Correlations" ),
		Fit( "ML", "SMC", 1, "Varimax" ),
		Column Switcher( :Ether, {:Benzene, :Carbon Tetrachloride, :Hexane} )
	)
);
Window( "data_table - Factor Analysis" )[listboxbox( 1 )] << Set Selected( 1, 1 );
```

**Code Explanation**:

1. Open data table;
2. Perform factor analysis.
3. Set Y variables: 1-Octanol, Ether, Chloroform.
4. Use row-wise estimation method.
5. Scale variance by correlations.
6. Fit models: ML, SMC, Varimax.
7. Switch column Ether to Benzene, Carbon Tetrachloride, Hexane.
8. Capture log of factor analysis.
9. Create window "Solubility - Factor Analysis".
10. Select first item in listbox.



### Example 11
> **Summary**: Process of performing factor analysis on a data table, capturing the report and extracting eigenvalues and number of factors.

<!-- Keywords: #JMPScriptingLanguage, #FactorAnalysis, #DataTable, #ReportGeneration, #MatrixOperations -->

**Code**:
```jsl
dt = Open("data_table.jmp");
x = Log Capture( obj = dt << Factor Analysis( Y( 2 :: 16 ) ) );
rpt = obj << report;
eigenvalues = Matrix( rpt[Number Col Box( "Eigenvalue" )] << get );
numberFactors = rpt[Number Edit Box( 1 )] << get;
```

**Code Explanation**:

1. Open data table;
2. Perform factor analysis.
3. Capture factor analysis object.
4. Retrieve report from analysis.
5. Extract eigenvalues from report.
6. Get number of factors from report.



### Example 12
> **Summary**: Runs factor analysis and generates score and loading plots from a data table, utilizing the Log Capture feature to capture analysis results.

<!-- Keywords: #JMPScriptingLanguage, #FactorAnalysis, #DataVisualization, #LogCapture, #StatisticalModeling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
x = Log Capture( obj = dt << Factor Analysis( Y( 1 :: 4 ), Fit( ML, SMC, 1, Varimax ) ) );
obj << Score Plot;
obj << Factor Loading Plot;
```

**Code Explanation**:

1. Open data table;
2. Perform factor analysis.
3. Log capture analysis results.
4. Generate score plot.
5. Generate factor loading plot.



### Example 13
> **Summary**: Process of performing factor analysis on a data table, utilizing variance scaling with covariances and fitting principal components with Promax rotation.

<!-- Keywords: #FactorAnalysis, #PrincipalComponents, #PromaxRotation, #VarianceScaling, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
x = Log Capture( obj = dt << Factor Analysis( Y( 1 :: 4 ), Variance Scaling( Covariances ), Fit( PC, ONE, 5, Promax ) ) );
```

**Code Explanation**:

1. Open data table;
2. Perform factor analysis.
3. Set analysis variables.
4. Use covariances scaling.
5. Fit principal components.
6. Set number of components to 5.
7. Apply Promax rotation.



## Factor Analysis using Principal Components
### Example 1
> **Summary**: Performs Principal Component Analysis (PCA) to extract underlying factors from a dataset, utilizing row-wise estimation and Varimax rotation.

<!-- Keywords: #PrincipalComponentAnalysis, #RowWiseEstimation, #VarimaxRotation, #FactorAnalysis, #JMPScriptingLanguage -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Principal Components(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Estimation Method( "Row-wise" ),
	on Correlations,
	Factor Analysis( ML, SMC, 3, Varimax )
);
rp = Report( obj );
```

**Code Explanation**:

1. Open data table;
2. Perform PCA analysis.
3. Specify variables for analysis.
4. Use row-wise estimation method.
5. Analyze correlations.
6. Apply factor analysis.
7. Set method to Maximum Likelihood.
8. Use Squared Multiple Correlation.
9. Set number of factors to 3.
10. Apply Varimax rotation.



### Example 2
> **Summary**: Performs a life distribution analysis using principal components and factor analysis to extract insights from appliance data, generating reports and interactive plots.

<!-- Keywords: #JMPScriptingLanguage, #PrincipalComponentsAnalysis, #FactorAnalysis, #LifeDistributionAnalysis, #ApplianceReliability -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Principal Components( Y( 2 :: 16 ) );
obj << Factor Analysis( 6 );
obj << Factor Analysis( 7 );
obj << Factor Analysis( 0 );
rpt = obj << report;
Close( dt, No Save );
dt = As Table( J( 240, 33, Random Normal() ) );
obj = dt << Principal Components( Y( 1 :: N Cols( dt ) ) );
rpt = obj << report;
labelCheck = rpt[Outline Box( "Summary Plots" )][CheckBoxBox( 1 )] << get;
```

**Code Explanation**:

1. Open data table;
2. Perform principal components analysis.
3. Conduct factor analysis for 6 factors.
4. Conduct factor analysis for 7 factors.
5. Conduct factor analysis for all factors.
6. Generate report from analysis.
7. Close data table without saving.
8. Create new random data table.
9. Perform principal components analysis on new data.
10. Extract label check status from summary plots.



### Example 3
> **Summary**: Performs a life distribution analysis using Principal Components and Factor Analysis to extract insights from appliance data, generating a report with summary plots.

<!-- Keywords: #JMPScriptingLanguage, #PrincipalComponents, #FactorAnalysis, #LifeDistributionAnalysis, #ApplianceData -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Principal Components( Y( 2 :: 16 ) );
obj << Factor Analysis( 6 );
obj << Factor Analysis( 7 );
obj << Factor Analysis( 0 );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table.
2. Run Principal Components analysis.
3. Perform Factor Analysis for 6 factors.
4. Perform Factor Analysis for 7 factors.
5. Perform Factor Analysis for 0 factors.
6. Generate analysis report.



