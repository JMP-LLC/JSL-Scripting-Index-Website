# Explore Outliers

## Explore Outliers using For Each
> **Summary**: Process of exploring outliers in a data table by applying presets and generating reports with customized titles.

<!-- Keywords: #JSLScriptingLanguage, #DataExploration, #OutlierAnalysis, #PresetManagement, #ReportGeneration -->

**Code**:
```jsl
plat_samples = ["Explore Outliers" => {"Show All Methods"}, => {}];
dt = Open("data_table.jmp");
For Each( {sample}, plat_samples["Explore Outliers"],
	obj = dt << Explore Outliers( Y( :"Q-E"n, :"ZN-E"n, :"PH-E"n, :"DBO-E"n, :"DQO-E"n, :"SS-E"n ) );
	Eval( Eval Expr( obj << Apply Preset( "Sample Presets", Expr( sample ) ) ) );
	obj << Set Report Title( sample );
);
```

**Code Explanation**:

1. Define presets for outlier exploration.
2. Open data table;
3. Iterate over each preset.
4. Run Explore Outliers analysis.
5. Apply the current preset.
6. Set the report title to the preset name.



## Explore Outliers using Structural Equation Models
> **Summary**: Creates and launches a Structural Equation Models analysis with specified model variables, generating an Explore Outliers output.

<!-- Keywords: #StructuralEquationModels, #ModelVariables, #ExploreOutliers, #JMPScriptingLanguage, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Structural Equation Models( Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ) );
obj << Launch Explore Outliers( 1 );
```

**Code Explanation**:

1. Open data_table data
2. Create Structural Equation Models object.
3. Define model variables.
4. Launch Explore Outliers analysis.



### Example 1
> **Summary**: Runs data table processing by identifying outlier columns, selecting a specific column, deleting selected columns, and re-analyzing outliers in JMP.

<!-- Keywords: #JMPScriptingLanguage, #DataTableProcessing, #OutlierAnalysis, #ColumnSelection, #DataCleaning -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Explore Outliers( Y( dt << Get Column Group( "Sensor Measurements" ) ) );
Column( dt, "Q-E" ) << set selected( 1 );
dt << delete columns;
obj << Quantile Range Outliers;
obj << close window;
```

**Code Explanation**:

1. Open data table.
2. Identify outlier columns.
3. Select column "Q-E".
4. Delete selected columns.
5. Analyze outliers again.
6. Close outlier analysis window.



### Example 2
> **Summary**: Process of exploring outliers in a data table, selecting a column, deleting columns, and performing robust fit on outliers.

<!-- Keywords: #JMPScriptingLanguage, #DataTableOperations, #OutlierAnalysis, #RobustFit, #InteractiveDataExploration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Explore Outliers( Y( dt << Get Column Group( "Sensor Measurements" ) ) );
Column( dt, "Q-E" ) << set selected( 1 );
dt << delete columns;
obj << Robust Fit Outliers;
obj << close window;
```

**Code Explanation**:

1. Open data table;
2. Explore outliers for Sensor Measurements.
3. Select column "Q-E".
4. Delete selected columns.
5. Perform robust fit on outliers.
6. Close explore outliers window.



### Example 3
> **Summary**: Explores and deletes outliers in a data table, utilizing Multivariate Robust Outliers analysis.

<!-- Keywords: #JMPScriptingLanguage, #DataTableManagement, #OutlierAnalysis, #MultivariateMethods, #DataCleaning -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Explore Outliers( Y( dt << Get Column Group( "Sensor Measurements" ) ) );
Column( dt, "Q-E" ) << set selected( 1 );
dt << delete columns;
obj << Multivariate Robust Outliers;
obj << close window;
```

**Code Explanation**:

1. Open data table;
2. Explore outliers on Sensor Measurements
3. Select column "Q-E"
4. Delete selected columns
5. Perform Multivariate Robust Outliers
6. Close outlier exploration window



### Example 4
> **Summary**: Process of identifying outliers in a data table, selecting columns, and performing multivariate k-Nearest Neighbor analysis with a specified value for k.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManipulation, #OutlierDetection, #MultivariateAnalysis, #kNN -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Explore Outliers( Y( dt << Get Column Group( "Sensor Measurements" ) ) );
Column( dt, "Q-E" ) << set selected( 1 );
dt << delete columns;
obj << Multivariate k Nearest Neighbor Outliers( K( 8 ) );
obj << close window;
```

**Code Explanation**:

1. Open data table;
2. Explore outliers for Sensor Measurements.
3. Select column "Q-E".
4. Delete selected columns.
5. Perform multivariate kNN outliers.
6. Set k to 8.
7. Close outlier exploration window.



### Example 5
> **Summary**: Explores outliers in a dataset by identifying quantile range outliers for height and weight variables.

<!-- Keywords: #JSLScriptingLanguage, #OutlierDetection, #QuantileRangeOutliers, #DataExploration, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Explore Outliers( Y( :height, :weight ), Quantile Range Outliers );
```

**Code Explanation**:

1. Open table.
2. Assign dataset to dt.
3. Create outlier exploration object.
4. Set Y variables: height, weight.
5. Use Quantile Range Outliers method.



### Example 6
> **Summary**: Process of identifying and culled outliers in a data table by configuring Robust Fit Outliers with K Sigma set to 1, and capturing the log of formula script for 'Culled' columns.

<!-- Keywords: #JMPScriptingLanguage, #DataTableManagement, #OutlierDetection, #FormulaColumns, #LogCapture -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Explore Outliers( Y( :height, :weight ), Robust Fit Outliers( K Sigma( 1 ) ) );
obj << Formula Columns( Suffix( "Culled" ) );
Log Capture( obj << Formula Script( Suffix( "Culled" ) ) );
```

**Code Explanation**:

1. Open data table;
2. Launch Explore Outliers platform.
3. Set height and weight as Y variables.
4. Configure Robust Fit Outliers with K Sigma set to 1.
5. Add formula columns with suffix "Culled".
6. Capture log of formula script for "Culled" columns.



### Example 7
> **Summary**: Process of identifying outliers in a data table, using robust fit with K Sigma set to 1, and captures the log of formula script with new columns prefixed with 'New'.

<!-- Keywords: #JSLScripting, #DataExploration, #OutlierDetection, #RobustFit, #FormulaScript -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Explore Outliers( Y( :height, :weight ), Robust Fit Outliers( K Sigma( 1 ) ) );
Log Capture( obj << Formula Script( Prefix( "New" ) ) );
obj << Formula Columns( Prefix( "New" ) );
```

**Code Explanation**:

1. Open data table;
2. Explore outliers for height and weight.
3. Use robust fit with K Sigma set to 1.
4. Capture log of formula script.
5. Prefix new columns with "New".



### Example 8
> **Summary**: Process of exploring outliers in a data table, applying robust fit parameters and capturing log output, while modifying formula columns with prefixes and suffixes.

<!-- Keywords: #JSLScriptingLanguage, #DataTableExploration, #OutlierDetection, #RobustFitParameters, #FormulaColumnModification -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Explore Outliers( Y( :height, :weight ), Robust Fit Outliers( K Sigma( 1 ) ) );
Log Capture( obj << Formula Script( Prefix( "New" ), Suffix( "Culled" ) ) );
obj << Formula Columns( Prefix( "New" ), Suffix( "Culled" ) );
```

**Code Explanation**:

1. Open data_table data
2. Create outlier exploration object.
3. Set robust fit parameters.
4. Capture log output.
5. Add prefix "New" to formulas.
6. Add suffix "Culled" to formulas.
7. Apply formula columns with modifications.



### Example 9
> **Summary**: Explores and filters outliers in a data table, utilizing robust fit methods to identify anomalies in 'height' and 'weight' columns, with log capture for output.

<!-- Keywords: #JSLScriptingLanguage, #DataExploration, #OutlierDetection, #RobustFit, #LogCapture -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Explore Outliers( Y( :height, :weight ), Robust Fit Outliers( K Sigma( 1 ), Huber( 0 ), Cauchy( 1 ) ) );
obj << Formula Columns( Suffix( "Culled" ) );
Log Capture( obj << Formula Script( Suffix( "Culled" ) ) );
```

**Code Explanation**:

1. Open data table;
2. Explore outliers for columns "height" and "weight".
3. Use robust fit method.
4. Set K Sigma to 1.
5. Set Huber to 0.
6. Set Cauchy to 1.
7. Add suffix "Culled" to formula columns.
8. Capture log output.
9. Execute formula script with "Culled" suffix.
10. Save log capture.



### Example 10
> **Summary**: Process of exploring outliers in a data table, applying robust fit methods to height and weight variables, and capturing log output with formula scripting.

<!-- Keywords: #JSLScriptingLanguage, #DataExploration, #OutlierDetection, #RobustFit, #FormulaScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Explore Outliers( Y( :height, :weight ), Robust Fit Outliers( K Sigma( 1 ), Huber( 0 ), Cauchy( 1 ) ) );
Log Capture( obj << Formula Script( Prefix( "New" ) ) );
obj << Formula Columns( Prefix( "New" ) );
```

**Code Explanation**:

1. Open data table.
2. Explore outliers for height and weight.
3. Use robust fit with specified methods.
4. Capture log of formula script.
5. Apply prefix to new columns.



### Example 11
> **Summary**: Process of identifying outliers in a data table and capturing log output, utilizing Explore Outliers and Formula Columns to create new columns with prefixes and suffixes.

<!-- Keywords: #JSLScriptingLanguage, #ExploreOutliers, #FormulaColumns, #DataTableManipulation, #LogCapture -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Explore Outliers( Y( :height, :weight ), Robust Fit Outliers( K Sigma( 1 ), Huber( 0 ), Cauchy( 1 ) ) );
Log Capture( obj << Formula Script( Prefix( "New" ), Suffix( "Culled" ) ) );
obj << Formula Columns( Prefix( "New" ), Suffix( "Culled" ) );
```

**Code Explanation**:

1. Open data table;
2. Create Explore Outliers object.
3. Set robust fit outliers parameters.
4. Capture log output.
5. Add formula columns with prefix "New".
6. Add formula columns with suffix "Culled".



### Example 12
> **Summary**: Explores and filters outliers in a data table, utilizing robust fit parameters and formula columns with suffixes.

<!-- Keywords: #JSLScripting, #DataExploration, #OutlierDetection, #FormulaColumns, #LogCapture -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Explore Outliers( Y( :height, :weight ), Robust Fit Outliers( K Sigma( 1 ), Huber( 0 ), Quartile( 1 ) ) );
obj << Formula Columns( Suffix( "Culled" ) );
Log Capture( obj << Formula Script( Suffix( "Culled" ) ) );
```

**Code Explanation**:

1. Open data table.
2. Create outlier exploration object.
3. Set robust fit parameters.
4. Add suffix to formula columns.
5. Capture log output.



### Example 13
> **Summary**: Process of exploring outliers in a data table, utilizing robust fit methods and log capture for enhanced analysis.

<!-- Keywords: #JSLScriptingLanguage, #DataTableExploration, #OutlierDetection, #RobustFitMethods, #LogCapture -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Explore Outliers( Y( :height, :weight ), Robust Fit Outliers( K Sigma( 1 ), Huber( 0 ), Quartile( 1 ) ) );
Log Capture( obj << Formula Script( Prefix( "New" ) ) );
obj << Formula Columns( Prefix( "New" ) );
```

**Code Explanation**:

1. Open data table.
2. Explore outliers for height and weight.
3. Use robust fit method.
4. Set K Sigma to 1.
5. Set Huber to 0.
6. Set Quartile to 1.
7. Capture log output.
8. Prefix new formula script.
9. Apply prefix to formula columns.
10. Save changes to dataset.



### Example 14
> **Summary**: Process of exploring outliers in a data table, applying robust fit parameters and logging capture formula scripts with prefix and suffix modifications.

<!-- Keywords: #JSLScripting, #DataExploration, #OutlierDetection, #RobustFit, #FormulaScript -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Explore Outliers( Y( :height, :weight ), Robust Fit Outliers( K Sigma( 1 ), Huber( 0 ), Quartile( 1 ) ) );
Log Capture( obj << Formula Script( Prefix( "New" ), Suffix( "Culled" ) ) );
obj << Formula Columns( Prefix( "New" ), Suffix( "Culled" ) );
```

**Code Explanation**:

1. Open data table.
2. Explore outliers for height and weight.
3. Set robust fit parameters.
4. Log capture formula script.
5. Apply prefix and suffix to formulas.
6. Add formula columns with new names.



### Example 15
> **Summary**: Process of identifying and culled outliers in a data table, using robust fit method and K Sigma to 1, with interactive filtering by sex.

<!-- Keywords: #JSLScriptingLanguage, #DataTableAnalysis, #OutlierDetection, #RobustFitMethod, #InteractiveFiltering -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Explore Outliers( Y( :T, :P, :QRST, :J, :Heart rate ), By( :Sex ), Robust Fit Outliers( K Sigma( 1 ) ) );
obj[1] << Formula Columns( Suffix( "Culled" ) );
Log Capture( obj[1] << Formula Script( Suffix( "Culled" ) ) );
```

**Code Explanation**:

1. Open data table.
2. Explore outliers for specified variables.
3. Group analysis by sex.
4. Use robust fit method.
5. Set K Sigma to 1.
6. Access first analysis object.
7. Add formula columns with suffix.
8. Capture log of formula script.
9. Apply suffix to culled data.
10. Log the formula script for culled data.



### Example 16
> **Summary**: Explores outliers in a data table, grouping analysis by Sex and applying robust fit method with K Sigma set to 1, while capturing log of outlier analysis and prefixing formula script and columns with 'New'.

<!-- Keywords: #JMPScriptingLanguage, #OutlierAnalysis, #RobustFitMethod, #DataTableExploration, #FormulaColumns -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Explore Outliers( Y( :T, :P, :QRST, :J, :Heart rate ), By( :Sex ), Robust Fit Outliers( K Sigma( 1 ) ) );
Log Capture( obj[1] << Formula Script( Prefix( "New" ) ) );
obj[1] << Formula Columns( Prefix( "New" ) );
```

**Code Explanation**:

1. Open data table;
2. Explore outliers for specified variables.
3. Group analysis by Sex.
4. Use robust fit method.
5. Set K Sigma to 1.
6. Capture log of outlier analysis.
7. Prefix formula script with "New".
8. Apply formula columns with prefix "New".



### Example 17
> **Summary**: Explores and transforms a data table to identify outliers, group analysis by sex, and prefix/suffix new columns with specific labels.

<!-- Keywords: #JSLScriptingLanguage, #DataTableExploration, #OutlierDetection, #ColumnTransformation, #RobustFit -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Explore Outliers( Y( :T, :P, :QRST, :J, :Heart rate ), By( :Sex ), Robust Fit Outliers( K Sigma( 1 ) ) );
Log Capture( obj[1] << Formula Script( Prefix( "New" ), Suffix( "Culled" ) ) );
obj[1] << Formula Columns( Prefix( "New" ), Suffix( "Culled" ) );
```

**Code Explanation**:

1. Open data table.
2. Explore outliers for multiple variables.
3. Group analysis by sex.
4. Use robust fit method.
5. Set outlier detection to 1 sigma.
6. Capture log of formula script.
7. Prefix new columns with "New".
8. Suffix culled columns with "Culled".
9. Apply formula to columns.
10. Prefix columns with "New".
11. Suffix columns with "Culled".



### Example 18
> **Summary**: Process of exploring outliers in a data table, applying robust fit methods, and modifying formula columns suffixes, while grouping analysis by sex.

<!-- Keywords: #JMPScriptingLanguage, #DataExploration, #OutlierDetection, #RobustFitMethods, #FormulaColumns -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Explore Outliers( Y( :T, :P, :QRST, :J, :Heart rate ), By( :Sex ), Robust Fit Outliers( K Sigma( 1 ), Huber( 0 ), Cauchy( 1 ) ) );
obj[2] << Formula Columns( Suffix( "Culled" ) );
Log Capture( obj[2] << Formula Script( Suffix( "Culled" ) ) );
```

**Code Explanation**:

1. Open data table;
2. Explore outliers for specified columns.
3. Apply robust fit method.
4. Set outlier detection parameters.
5. Group analysis by sex.
6. Modify formula columns suffix.
7. Log captured formula script.



### Example 19
> **Summary**: Detects and handles outliers in a data table, utilizing Explore Outliers to identify anomalies and Log Capture to record output.

<!-- Keywords: #JMPScriptingLanguage, #ExploreOutliers, #LogCapture, #DataTableAnalysis, #OutlierDetection -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Explore Outliers( Y( :T, :P, :QRST, :J, :Heart rate ), By( :Sex ), Robust Fit Outliers( K Sigma( 1 ), Huber( 0 ), Cauchy( 1 ) ) );
Log Capture( obj[2] << Formula Script( Prefix( "New" ) ) );
obj[2] << Formula Columns( Prefix( "New" ) );
```

**Code Explanation**:

1. Open data table.
2. Create Explore Outliers object.
3. Specify response variables.
4. Use Sex for grouping.
5. Apply Robust Fit Outliers method.
6. Set K Sigma to 1.
7. Set Huber to 0.
8. Set Cauchy to 1.
9. Capture log output.
10. Add new formula columns.



### Example 20
> **Summary**: Explores and filters outliers in a data table, utilizing robust fit methods and formula columns with custom prefixes and suffixes.

<!-- Keywords: #JSLScripting, #DataExploration, #OutlierDetection, #FormulaColumns, #RobustFit -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Explore Outliers( Y( :T, :P, :QRST, :J, :Heart rate ), By( :Sex ), Robust Fit Outliers( K Sigma( 1 ), Huber( 0 ), Cauchy( 1 ) ) );
Log Capture( obj[2] << Formula Script( Prefix( "New" ), Suffix( "Culled" ) ) );
obj[2] << Formula Columns( Prefix( "New" ), Suffix( "Culled" ) );
```

**Code Explanation**:

1. Open data table.
2. Explore outliers for multiple variables.
3. Apply robust fit outliers method.
4. Set K Sigma parameter to 1.
5. Set Huber parameter to 0.
6. Set Cauchy parameter to 1.
7. Capture log of formula script.
8. Prefix new columns with "New".
9. Suffix new columns with "Culled".
10. Apply formula columns with specified prefix and suffix.



### Example 21
> **Summary**: Process of exploring outliers in a data table, grouping analysis by sex, and renaming formula columns with a suffix.

<!-- Keywords: #JMPScriptingLanguage, #DataExploration, #OutlierDetection, #RobustFit, #FormulaColumns -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Explore Outliers( Y( :T, :P, :QRST, :J, :Heart rate ), By( :Sex ), Robust Fit Outliers( K Sigma( 1 ), Huber( 0 ), Quartile( 1 ) ) );
obj[1] << Formula Columns( Suffix( "Culled" ) );
Log Capture( obj[2] << Formula Script( Suffix( "Culled" ) ) );
```

**Code Explanation**:

1. Open data table;
2. Explore outliers for selected variables.
3. Group analysis by sex.
4. Use robust fit method.
5. Set outlier detection parameters.
6. Rename formula columns with suffix.
7. Capture log of formula script.
8. Apply suffix to formula script.



### Example 22
> **Summary**: Explores outliers in a data table, grouping by sex and configuring robust fit outlier settings, while capturing log formulas and prefixing new columns with 'New'.

<!-- Keywords: #JSLScriptingLanguage, #DataTableExploration, #OutlierAnalysis, #RobustFitOutliers, #FormulaScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Explore Outliers( Y( :T, :P, :QRST, :J, :Heart rate ), By( :Sex ), Robust Fit Outliers( K Sigma( 1 ), Huber( 0 ), Quartile( 1 ) ) );
Log Capture( obj[2] << Formula Script( Prefix( "New" ) ) );
obj[1] << Formula Columns( Prefix( "New" ) );
```

**Code Explanation**:

1. Open data table;
2. Create outlier exploration object.
3. Set Y variables for analysis.
4. Use Sex variable to group data.
5. Configure robust fit outliers settings.
6. Capture log of outlier formulas.
7. Prefix new formula columns with "New".



### Example 23
> **Summary**: Process of exploring outliers in a data table, applying robust fit method, and modifying formula column names.

<!-- Keywords: #JMPScriptingLanguage, #DataExploration, #OutlierDetection, #RobustFitMethod, #FormulaColumnModification -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Explore Outliers( Y( :T, :P, :QRST, :J, :Heart rate ), By( :Sex ), Robust Fit Outliers( K Sigma( 1 ), Huber( 0 ), Quartile( 1 ) ) );
Log Capture( obj[1] << Formula Script( Prefix( "New" ), Suffix( "Culled" ) ) );
obj[2] << Formula Columns( Prefix( "New" ), Suffix( "Culled" ) );
Close( dt, nosave );
makeFormCols = 1;
```

**Code Explanation**:

1. Open data table.
2. Explore outliers for specified columns.
3. Apply robust fit method.
4. Capture log of formula script.
5. Modify formula column names.
6. Close data table without saving.
7. Set makeFormCols variable to 1.



### Example 24
> **Summary**: Explores and clears outliers in a data table using Robust PCA, saving cleaned data, residuals, scaled residuals, and low rank approximation, while deleting added columns.

<!-- Keywords: #JSLScriptingLanguage, #DataCleaning, #OutlierDetection, #RobustPCA, #DataTableManagement -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Explore Outliers( Y( 7 :: 106 ), Robust PCA Outliers( Center( 1 ), Scale( 1 ) ) );
p = N Col( dt );
For( i = 1, i <= 10, i++,
	obj << Save Cleaned( Trim( 2 ), Impute( 3 ), Make Missing( 5 ) );
	obj << Save Residuals;
	obj << Save Scaled Residuals;
	obj << Save Low Rank Approx;
	dt << Delete Column( (p + 1) :: N Col( dt ) );
);
obj << close window;
```

**Code Explanation**:

1. Open data table.
2. Explore outliers using Robust PCA.
3. Count columns in data table.
4. Loop 10 times.
5. Save cleaned data.
6. Save residuals.
7. Save scaled residuals.
8. Save low rank approximation.
9. Delete added columns.
10. Close outlier exploration window.



### Example 25
> **Summary**: Process of identifying outliers in a data table by creating an outlier exploration object, setting the tail quantile to zero, rescanning for outliers, and closing the outlier window.

<!-- Keywords: #JSLScriptingLanguage, #OutlierDetection, #DataTableManipulation, #QuantileRangeOutliers, #InteractiveAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Explore Outliers( Y( :height, :weight ), Quantile Range Outliers );
obj << Tail Quantile( . );
obj << Rescan;
obj << close window;
```

**Code Explanation**:

1. Open data table.
2. Create outlier exploration object.
3. Set tail quantile to zero.
4. Rescan for outliers.
5. Close the outlier window.



### Example 26
> **Summary**: Explores and transforms a data table by identifying outliers, capturing log information, and modifying formula columns.

<!-- Keywords: #JSLScripting, #DataExploration, #OutlierDetection, #FormulaScripting, #TableTransformation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Explore Outliers( Y( :T, :P, :QRST, :J, :Heart rate ), By( :Sex ), Robust Fit Outliers( K Sigma( 1 ), Huber( 0 ), Quartile( 1 ) ) );
Log Capture( obj[1] << Formula Script( Prefix( "New" ), Suffix( "Culled" ) ) );
obj[2] << Formula Columns( Prefix( "New" ), Suffix( "Culled" ) );
```

**Code Explanation**:

1. Open data table.
2. Create outlier exploration object.
3. Set robust fit parameters.
4. Capture log of formula script.
5. Apply prefix to formula script.
6. Apply suffix to formula script.
7. Modify formula columns.
8. Apply prefix to formula columns.
9. Apply suffix to formula columns.



### Example 27
> **Summary**: Explores outliers in a data table, identifying quantile range outliers and capturing missing value codes for further analysis.

<!-- Keywords: #JMPScriptingLanguage, #DataExploration, #OutlierDetection, #MissingValueHandling, #QuantileRange -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Explore Outliers( Y( :BP ), Tail Quantile( 0.25 ), Q( 1.5 ), Quantile Range Outliers, By( :Y Binary, :Y Ordinal ) );
Log Capture( obj[1] << Add Highest Nines to Missing Value Codes( :BP ) );
MVC_Prop = Char( Column( dt, "BP" ) << Get Property( "Missing Value Codes" ) );
obj << close window;
```

**Code Explanation**:

1. Open data table;
2. Explore outliers for BP.
3. Set tail quantile to 0.25.
4. Use Q value of 1.5.
5. Identify quantile range outliers.
6. Group by Y Binary and Y Ordinal.
7. Log capture highest nines as missing.
8. Retrieve missing value codes for BP.
9. Convert MVC to character.
10. Close outlier exploration window.



### Example 28
> **Summary**: Explores outliers in a data table, generating XML output for labeled and unlabeled outlier detection, and closing the corresponding windows.

<!-- Keywords: #JSLScriptingLanguage, #DataTableExploration, #OutlierDetection, #XMLOutput, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Explore Outliers( Label( :name ), Y( :height, :weight ), Quantile Range Outliers );
obj2 = dt << Explore Outliers( Y( :height, :weight ), Quantile Range Outliers );
output1 = obj << get xml;
output2 = obj2 << get xml;
obj << close window;
obj2 << close window;
```

**Code Explanation**:

1. Open data table;
2. Explore outliers with labels.
3. Explore outliers without labels.
4. Get XML output for labeled exploration.
5. Get XML output for unlabeled exploration.
6. Close labeled exploration window.
7. Close unlabeled exploration window.



### Example 29
> **Summary**: Explores outliers in a data table, generating XML output for labeled and unlabeled outlier detection.

<!-- Keywords: #JSLScripting, #DataExploration, #OutlierDetection, #XMLOutput, #JMPScriptingLanguage -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Explore Outliers( Label( :name ), Y( :height, :weight ), Robust Fit Outliers );
obj2 = dt << Explore Outliers( Y( :height, :weight ), Robust Fit Outliers );
output1 = obj << get xml;
output2 = obj2 << get xml;
obj << close window;
obj2 << close window;
```

**Code Explanation**:

1. Open data table.
2. Explore outliers with label.
3. Explore outliers without label.
4. Get XML output for labeled exploration.
5. Get XML output for unlabeled exploration.
6. Close labeled exploration window.
7. Close unlabeled exploration window.



### Example 30
> **Summary**: Explores outliers in a data table, utilizing various options such as label and grouping, and creates a validation column for random sampling.

<!-- Keywords: #JMPScriptingLanguage, #DataExploration, #OutlierDetection, #ValidationColumn, #RandomSampling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Explore Outliers( Y( :height, :weight ) );
obj << close window;
obj = dt << Explore Outliers( Y( :height, :weight ), Label( :name ) );
obj << close window;
obj = dt << Explore Outliers( Y( :height, :weight ), By( :sex ) );
obj << close window;
isPro = 1;
If( isPro,
	dt << Make Validation Column( Random Seed( 123456789 ), Go );
	obj = dt << Explore Outliers( Y( :height, :weight ), Validation( :Validation ) );
	obj << close window;
);
```

**Code Explanation**:

1. Open data table.
2. Explore outliers for height and weight.
3. Close outlier exploration window.
4. Explore outliers with name labels.
5. Close outlier exploration window.
6. Explore outliers by sex.
7. Close outlier exploration window.
8. Set isPro flag to 1.
9. Create validation column if isPro.
10. Explore outliers with validation column.



### Example 31
> **Summary**: Explores outliers in a data table, specifically for height and weight variables, using various methods such as Huber, Cauchy, and Quartile.

<!-- Keywords: #JSLScriptingLanguage, #OutlierDetection, #DataExploration, #HuberMethod, #CauchyMethod -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Explore Outliers( Y( :height, :weight ), Robust Fit Outliers );
obj << Huber( 0 );
obj << Cauchy( 1 );
obj << Cauchy( 0 );
obj << Quartile( 1 );
obj << Quartile( 0 );
obj << Huber( 1 );
obj << Cauchy( 1 );
obj << Quartile( 1 );
obj << close window;
```

**Code Explanation**:

1. Open data table.
2. Explore outliers for height and weight.
3. Set Huber method parameter to 0.
4. Set Cauchy method parameter to 1.
5. Set Cauchy method parameter to 0.
6. Set Quartile method parameter to 1.
7. Set Quartile method parameter to 0.
8. Set Huber method parameter to 1.
9. Set Cauchy method parameter to 1.
10. Set Quartile method parameter to 1.



### Example 32
> **Summary**: Explores outliers in a data table, specifically for 'Sensor Measurements', and configures quantile range outliers with Q4 and tail quantile 0.05.

<!-- Keywords: #JMPScriptingLanguage, #DataExploration, #OutlierDetection, #QuantileRangeOutliers, #JSLScript -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ), Quantile Range Outliers( Q( 4 ), Tail Quantile( 0.05 ) ) );
obj2 = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj2 << Quantile Range Outliers;
obj2 << Q( 4 );
obj2 << Tail Quantile( 0.05 );
obj2 << Rescan;
obj << close window;
obj2 << close window;
```

**Code Explanation**:

1. Open data table;
2. Explore outliers for Sensor Measurements.
3. Set quantile range to Q4.
4. Set tail quantile to 0.05.
5. Repeat outlier exploration.
6. Apply quantile range outliers.
7. Set quantile range to Q4.
8. Set tail quantile to 0.05.
9. Rescan for outliers.
10. Close both windows.



### Example 33
> **Summary**: Explores outliers in a data table, specifically for Sensor Measurements, using robust fit methods and configuring K Sigma, Cauchy, and Quartile parameters.

<!-- Keywords: #JMPScriptingLanguage, #DataExploration, #OutlierDetection, #RobustFitMethods, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Explore Outliers(
	Y( Column Group( "Sensor Measurements" ) ),
	Robust Fit Outliers( K Sigma( 2 ), Huber( 1 ), Cauchy( 1 ), Quartile( 1 ) )
);
obj2 = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj2 << Robust Fit Outliers;
obj2 << K Sigma( 2 );
obj2 << Cauchy( 1 );
obj2 << Quartile( 1 );
obj2 << Rescan;
obj << close window;
obj2 << close window;
```

**Code Explanation**:

1. Open data table;
2. Create Explore Outliers object.
3. Set Y as Sensor Measurements.
4. Configure robust fit outliers.
5. Create second Explore Outliers object.
6. Set Y as Sensor Measurements.
7. Enable robust fit outliers.
8. Set K Sigma to 2.
9. Set Cauchy to 1.
10. Set Quartile to 1.
11. Rescan data.
12. Close first window.
13. Close second window.



### Example 34
> **Summary**: Explores outliers in a data table by creating two Explore Outliers objects, configuring Robust PCA Outliers, and executing the analysis.

<!-- Keywords: #JMPScriptingLanguage, #ExploreOutliers, #RobustPCA, #DataTableAnalysis, #OutlierDetection -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Explore Outliers(
	Y( Column Group( "Sensor Measurements" ) ),
	Robust PCA Outliers( Lambda( 0.2 ), Center( 0 ), Scale( 0 ), MaxIt( 35 ), Outlier Threshold( 1.5 ) )
);
obj2 = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj2 << Robust PCA Outliers( Lambda( 0.2 ), Center( 0 ), Scale( 0 ), MaxIt( 35 ), Outlier Threshold( 1.5 ) );
```

**Code Explanation**:

1. Open data table.
2. Create Explore Outliers object.
3. Set Y variable group.
4. Configure Robust PCA Outliers.
5. Execute Explore Outliers.
6. Create second Explore Outliers object.
7. Set Y variable group again.
8. Configure Robust PCA Outliers again.
9. Execute Robust PCA Outliers.
10. Save results.



### Example 35
> **Summary**: Explores outliers in sensor measurements, utilizing k Nearest Neighbor Outliers to identify anomalies and repeating the process with a specified K value.

<!-- Keywords: #JMPScriptingLanguage, #OutlierDetection, #kNearestNeighbor, #DataExploration, #SensorMeasurements -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ), k Nearest Neighbor Outliers( K( 3 ) ) );
obj2 = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj2 << k Nearest Neighbor Outliers( K( 3 ) );
```

**Code Explanation**:

1. Open table.
2. Explore outliers on sensors.
3. Set K to 3 neighbors.
4. Repeat outlier exploration.
5. Apply K nearest neighbor method.
6. Set K to 3 neighbors again.



### Example 36
> **Summary**: Explores outliers in a table, utilizing Robust PCA method with specified parameters and logs capture results.

<!-- Keywords: #JMPScriptingLanguage, #RobustPrincipalComponentAnalysis, #OutlierDetection, #DataExploration, #LogCapture -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Explore Outliers(
	Y( Column Group( "Sensor Measurements" ) ),
	Robust PCA Outliers( Lambda( 0.2 ), Center( 0 ), Scale( 0 ), MaxIt( 35 ) )
);
Log Capture(
	rpca = runMultivariateRobustPCA(
		dt[0, 2 :: 39], TrainRows = [], center = 0, scale = 0, tol = 0.0000001, maxIter = 35, useRandomSVD = 0, showDetails = 0,
		lambda = 0.2
	)
);
obj << close window;
```

**Code Explanation**:

1. Open table.
2. Explore outliers.
3. Define Y variables.
4. Use Robust PCA method.
5. Set Lambda to 0.2.
6. Center data at 0.
7. Scale data at 0.
8. Set maximum iterations to 35.
9. Close window.
10. Log capture results.



### Example 37
> **Summary**: Explores outliers in a data table using Robust PCA, capturing log output and closing the outlier window.

<!-- Keywords: #JMPScriptingLanguage, #RobustPrincipalComponentAnalysis, #OutlierDetection, #DataExploration, #LogCapture -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Explore Outliers( Y( 6 :: 13 ), Robust PCA Outliers( Lambda( 0.789654123 ), Center( 1 ), Scale( 0 ), MaxIt( 37 ) ) );
Log Capture(
	rpca = runMultivariateRobustPCA(
		dt[0, 6 :: 13], TrainRows = [], center = 1, scale = 0, tol = 0.0000001, maxIter = 37, useRandomSVD = 0, showDetails = 0,
		lambda = 0.789654123
	)
);
obj << close window;
```

**Code Explanation**:

1. Open data table;
2. Explore outliers using Robust PCA.
3. Capture log output.
4. Run multivariate Robust PCA.
5. Set parameters for Robust PCA.
6. Execute Robust PCA algorithm.
7. Close outlier exploration window.



### Example 38
> **Summary**: Explores outliers in a data table using Robust PCA, configuring parameters and capturing log results.

<!-- Keywords: #JSLScripting, #RobustPCA, #OutlierDetection, #DataExploration, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Explore Outliers(
	Y( Column Group( "Laboratory Results" ) ),
	Robust PCA Outliers( Lambda( 0.0339862892978446 ), Center( 1 ), Scale( 1 ), MaxIt( 38 ) )
);
Log Capture(
	rpca = runMultivariateRobustPCA(
		x = dt[0, 11 :: 37], TrainRows = [], center = 1, scale = 1, tol = 0.0000001, maxIter = 38, useRandomSVD = 0, showDetails = 0,
		lambda = 0.0339862892978446
	)
);
obj << close window;
```

**Code Explanation**:

1. Open data table.
2. Explore outliers using Robust PCA.
3. Set Y variable as Laboratory Results.
4. Configure Robust PCA parameters.
5. Log capture of Robust PCA results.
6. Define input variables for Robust PCA.
7. Set Robust PCA options.
8. Execute Robust PCA function.
9. Close outlier exploration window.



### Example 39
> **Summary**: Explores outliers in a data table by identifying robust principal component analysis (PCA) outliers and clearing all selections.

<!-- Keywords: #JSLScriptingLanguage, #DataTableExploration, #OutlierDetection, #RobustPCA, #JMPDataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ), Robust PCA Outliers );
dt << Clear Select;
dt << Clear Column Selection;
```

**Code Explanation**:

1. Open data table;
2. Create outlier exploration object.
3. Set Y variable as "Sensor Measurements".
4. Use Robust PCA for outliers.
5. Clear all selections in data table.
6. Clear column selections in data table.



### Example 40
> **Summary**: Process of identifying outliers in a specified range of variables using Robust PCA Outliers method, and clears selected rows and column selection.

<!-- Keywords: #JMPScriptingLanguage, #DataTableOperations, #OutlierDetection, #RobustPCA, #DataCleaning -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Explore Outliers( Y( 3 :: 21 ), Robust PCA Outliers( Lambda( 0.5 ), Center( 0 ), Scale( 0 ) ) );
dt << Clear Select;
dt << Clear Column Selection;
```

**Code Explanation**:

1. Open data table;
2. Create Explore Outliers object.
3. Set Y variables 3 to 21.
4. Use Robust PCA Outliers method.
5. Set Lambda to 0.5.
6. Center data at 0.
7. Scale data at 0.
8. Clear selected rows.
9. Clear column selection.



### Example 41
> **Summary**: Explores and analyzes outliers in a data table, utilizing the Explore Outliers platform to identify quantile range outliers and robust fit outliers.

<!-- Keywords: #JMPScriptingLanguage, #DataTableAnalysis, #OutlierDetection, #QuantileRange, #RobustFit -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Explore Outliers( Y( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ), By( :Y Ordinal, :Gender ) );
obj << Quantile Range Outliers( Tail Quantile( 0.25 ), Q( 1.5 ) );
Log Capture( obj << Select Rows );
Log Capture( obj << Exclude Rows );
dt << Clear Select << Select Excluded << Exclude( 0 ) << Clear Select;
obj << close window;
obj = dt << Explore Outliers( Y( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ), By( :Y Ordinal, :Gender ) );
obj << Robust Fit Outliers( K Sigma( 3 ) );
Log Capture( obj << Select Rows );
Log Capture( obj << Exclude Rows );
dt << Clear Select << Select Excluded << Exclude( 0 ) << Clear Select;
```

**Code Explanation**:

1. Open data table;
2. Explore outliers for multiple variables.
3. Set quantile range for outliers.
4. Log selected rows.
5. Log excluded rows.
6. Clear selection.
7. Close outlier exploration window.
8. Re-explore outliers using robust fit.
9. Set robust fit parameters.
10. Log selected and excluded rows.



### Example 42
> **Summary**: Explores outliers in a data table by creating an Explore Outliers object and setting the Y variable group.

<!-- Keywords: #JSLScriptingLanguage, #DataTableExploration, #OutlierDetection, #VariableGrouping, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
```

**Code Explanation**:

1. Open data table;
2. Create Explore Outliers object.
3. Set Y variable group.



### Example 43
> **Summary**: Runs the exploration and selection of outliers in a multivariate dataset using the Multivariate k-Nearest Neighbor method, grouping by binary and ordinal Y variables.

<!-- Keywords: #JMPScriptingLanguage, #MultivariateAnalysis, #OutlierDetection, #K-NearestNeighborAlgorithm, #DataExploration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Explore Outliers(
	Y( :BMI, :BP, :Total Cholesterol, :LDL ),
	Name( "Multivariate k-Nearest Neighbor Outliers" )(K( 2 )),
	By( :Y Binary, :Y Ordinal )
);
p = N Col( dt );
obj[1] << Save NN Distances;
selRows1 = dt << Select Where( :Y Binary == "Low" & :Y Ordinal == "Low" ) << Get Selected Rows;
selRows2 = dt << Invert Row Selection << Get Selected Rows;
countNN = N Row( selRows1 ) * 2;
obj[2] << Save NN Distances;
selRows1 = dt << Select Where( :Y Binary == "Low" & :Y Ordinal == "Medium" ) << Get Selected Rows;
selRows2 = dt << Invert Row Selection << Get Selected Rows;
obj[3] << Save NN Distances;
selRows1 = dt << Select Where( :Y Binary == "High" & :Y Ordinal == "High" ) << Get Selected Rows;
selRows2 = dt << Invert Row Selection << Get Selected Rows;
obj << close window;
```

**Code Explanation**:

1. Open data table;
2. Explore outliers for selected columns.
3. Set multivariate k-Nearest Neighbor method.
4. Use K=2 for outlier detection.
5. Group by binary and ordinal Y variables.
6. Count number of columns in dataset.
7. Save nearest neighbor distances for first group.
8. Select rows where both Y variables are "Low".
9. Invert row selection to get other rows.
10. Calculate count of nearest neighbors for selected rows.



### Example 44
> **Summary**: Explores outliers in a data table using Robust PCA method, with lambda value set to 0.25 and centered/scaled at 0.

<!-- Keywords: #JMPScriptingLanguage, #DataExploration, #RobustPCA, #OutlierDetection, #DataPreprocessing -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Explore Outliers( Y( :height, :weight ), Robust PCA Outliers( Lambda( 0.25 ), Center( 0 ), Scale( 0 ) ) );
obj2 = dt << Explore Outliers( Y( :height, :weight ), Lambda( 0.25 ), Center( 0 ), Scale( 0 ), Robust PCA Outliers );
```

**Code Explanation**:

1. Open data table.
2. Assign table to variable.
3. Explore outliers for height and weight.
4. Use Robust PCA method.
5. Set lambda value to 0.25.
6. Center data at 0.
7. Scale data at 0.
8. Assign result to variable.
9. Explore outliers again for height and weight.
10. Use Robust PCA method with same parameters.



### Example 45
> **Summary**: Explores outliers in sensor measurements data, utilizing the quantile range method with a tail quantile set to 0.2 and a quantile set to 0.6.

<!-- Keywords: #JMPScriptingLanguage, #DataExploration, #OutlierDetection, #QuantileRangeMethod, #SensorMeasurements -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ), Quantile Range Outliers( Tail Quantile( 0.2 ), Q( 0.6 ) ) );
```

**Code Explanation**:

1. Open data table.
2. Explore outliers for sensor measurements.
3. Use quantile range method.
4. Set tail quantile to 0.2.
5. Set quantile to 0.6.



## Explore Outliers using Preferences
> **Summary**: Explores outliers in a data table by generating a report and extracting a summary table, utilizing advanced linear algebra routines.

<!-- Keywords: #JMPScriptingLanguage, #DataExploration, #OutlierDetection, #AdvancedLinearAlgebra, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Preferences( Enable Advanced Linear Algebra Routines( 1 ) );
Log Capture( obj = dt << Explore Outliers( Y( Column Group( "Responses" ) ), Robust PCA Outliers( Use Randomized SVD( 1 ) ) ) );
rpt = Report( obj );
summary = rpt[Table Box( 1 )] << Get as matrix;
obj << close window;
```

**Code Explanation**:

1. Open data table;
2. Enable advanced linear algebra.
3. Log outlier exploration.
4. Create report object.
5. Extract summary table.
6. Close report window.



## Explore Outliers using New Column
### Example 1
> **Summary**: Process of assigning group labels to data rows and identifying outliers in a dataset, utilizing the Explore Outliers platform.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManipulation, #OutlierDetection, #GroupLabeling, #ExploreOutliers -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "By", Character, "Nominal" );
n = N Row( dt );
maxRow = ind = 1;
While( maxRow < n,
	n2 = Random Integer( 1, 10 );
	upper = Min( (maxRow + n2), n );
	dt[maxRow :: upper, "By"] = Char( ind );
	ind++;
	maxRow = maxRow + n2 + 1;
);
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ), By( :By ) );
nObj = Length( obj );
byCol = dt[0, "By"];
groups = Associative Array( dt[0, "By"] ) << Get Keys;
For( i = 1, i <= Length( obj ), i++,
	myK = N Row( Loc( byCol, Char( i ) ) );
	obj[i] << K Nearest Neighbor Outliers( K( myK ) );
);
obj << close window;
```

**Code Explanation**:

1. Open data table;
2. Create new column "By".
3. Initialize row count.
4. Initialize variables for loop.
5. Loop through rows, assign group labels.
6. Explore outliers by "Sensor Measurements".
7. Count number of outlier objects.
8. Retrieve unique group keys.
9. Loop through outlier objects.
10. Set K for KNN outliers.



### Example 2
> **Summary**: Process of assigning random groups and exploring outliers in a data table, utilizing Robust PCA and saving residuals.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManipulation, #OutlierDetection, #RobustPCA, #ResidualAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "Group", Numeric, "Nominal", Format( "Best", 12 ) ) << Move Selected Columns( {:Group}, after( :Date ) ) <<
Begin Data Update;
For Each Row( dt, :Group = Random Integer( 1, 5 ) );
dt << End Data Update;
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ), Robust PCA Outliers, By( :Group ) );
obj << Save Residuals;
dt << Clear Column Selection << Select Columns( {"Q-E Resid By Group"} ) << Delete Columns;
For( i = 1, i <= 5, i++,
	obj << Save Residuals;
);
obj << close window;
```

**Code Explanation**:

1. Open data table.
2. Add new column "Group".
3. Move "Group" after "Date".
4. Begin data update.
5. Assign random group values.
6. End data update.
7. Explore outliers using Robust PCA.
8. Save residuals.
9. Clear column selection.
10. Delete "Q-E Resid By Group".
11. Loop to save residuals 5 times.
12. Close outlier exploration window.



## Explore Outliers using Log Capture
### Example 1
> **Summary**: Explores outliers in a data table using Robust PCA, with specified lambda value, centering, scaling, and maximum iterations.

<!-- Keywords: #JMPScriptingLanguage, #RobustPrincipalComponentAnalysis, #OutlierDetection, #DataExploration, #MultivariateAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Log Capture(
	obj = dt << Explore Outliers( Y( 10 :: 15 ), Robust PCA Outliers( Lambda( 0.3456789 ), Center( 0 ), Scale( 1 ), MaxIt( 35 ) ) )
);
Log Capture(
	rpca = runMultivariateRobustPCA(
		dt[0, 10 :: 15], TrainRows = [], center = 0, scale = 1, tol = 0.0000001, maxIter = 35, useRandomSVD = 0, showDetails = 0,
		lambda = 0.3456789
	)
);
obj << close window;
```

**Code Explanation**:

1. Open data table;
2. Log outlier exploration.
3. Explore outliers using Robust PCA.
4. Set Lambda to 0.3456789.
5. Center data at 0.
6. Scale data to 1.
7. Set maximum iterations to 35.
8. Log robust PCA execution.
9. Run multivariate Robust PCA.
10. Close outlier exploration window.



### Example 2
> **Summary**: Process of exploring outliers in a data table, utilizing Robust PCA and Quantile Range Outliers to identify anomalies.

<!-- Keywords: #JSLScripting, #OutlierDetection, #RobustPCA, #QuantileRangeOutliers, #DataExploration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Log Capture(
	obj = dt << Explore Outliers(
		Y( Column Group( "Sensor Measurements" ) ),
		Robust PCA Outliers( Lambda( 0.2 ), Center( 1 ), Scale( 1 ), MaxIt( 1 ) )
	)
);
obj << close window;
Close( dt, nosave );
dt = New Table( "S1540172",
	Add Rows( 5 ),
	New Column( "x", Numeric, "Continuous", Format( "Best", 12 ), Set Values( [0, 1, 2, 1, 9999] ), Set Display Width( 78 ) ),
	New Column( "x2", Numeric, "Continuous", Format( "Best", 12 ), Set Values( [9999, 1, 2, 1, 0] ), Set Display Width( 78 ) )
);
obj = dt << Explore Outliers( Y( :x ), Quantile Range Outliers( Tail Quantile( 0.4 ), Q( 1 ) ) );
obj2 = dt << Explore Outliers( Y( :x2 ), Quantile Range Outliers( Tail Quantile( 0.4 ), Q( 1 ) ) );
```

**Code Explanation**:

1. Open data table.
2. Log capture start.
3. Explore outliers using Robust PCA.
4. Close outlier exploration window.
5. Close original data table without saving.
6. Create new table "S1540172".
7. Add rows to new table.
8. Add column "x" with values.
9. Add column "x2" with values.
10. Explore outliers for column "x".
11. Explore outliers for column "x2".



### Example 3
> **Summary**: Explores outliers in a data table using Robust PCA Outliers method, with specified parameters for Lambda, Center, Scale, and MaxIt.

<!-- Keywords: #JMPScriptingLanguage, #DataExploration, #OutlierDetection, #RobustPCA, #LogCapture -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Log Capture(
	obj = dt << Explore Outliers(
		Y( Column Group( "Sensor Measurements" ) ),
		Robust PCA Outliers( Lambda( 0.2 ), Center( 1 ), Scale( 1 ), MaxIt( 1 ) )
	)
);
obj << close window;
```

**Code Explanation**:

1. Open data table;
2. Start Log Capture.
3. Explore outliers on Sensor Measurements.
4. Use Robust PCA Outliers method.
5. Set Lambda to 0.2.
6. Center data at 1.
7. Scale data at 1.
8. Set MaxIt to 1.
9. Close log capture window.
10. Close outlier exploration window.



## Explore Outliers using Select Rows
### Example 1
> **Summary**: Process of identifying outliers in a data table, using Robust PCA and saving residuals and low rank approximations.

<!-- Keywords: #JSLScriptingLanguage, #DataTableAnalysis, #OutlierDetection, #RobustPCA, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Select Rows( 11 :: N Row( dt ) ) << Delete Rows();
obj = dt << Explore Outliers( Y( Column Group( "Processes" ) ), Robust PCA Outliers( Center( 0 ), Scale( 0 ) ) );
obj << Save Residuals;
obj << Save Low Rank Approx;
```

**Code Explanation**:

1. Open data table.
2. Select rows 11 to last.
3. Delete selected rows.
4. Explore outliers on processes.
5. Use Robust PCA for outliers.
6. Center data at zero.
7. Scale data at zero.
8. Save residuals to table.
9. Save low rank approximation.
10. End script execution.



### Example 2
> **Summary**: Explores outliers in a data table by selecting specific rows, excluding others, and creating an outlier object using quantile range method.

<!-- Keywords: #JMPScriptingLanguage, #DataTableExploration, #OutlierDetection, #QuantileRangeMethod, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Clear Select << Select Rows( {108} ) << Exclude( 1 );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ), Quantile Range Outliers );
```

**Code Explanation**:

1. Open data table.
2. Clear previous selections.
3. Select row 108.
4. Exclude selected row.
5. Create outlier exploration object.
6. Set Y variable group.
7. Specify sensor measurements column.
8. Use quantile range method.



### Example 3
> **Summary**: Process of exploring outliers in a data table, generating two journals with outlier detection results for both the original and subset tables.

<!-- Keywords: #JMPScriptingLanguage, #DataTableExploration, #OutlierDetection, #RobustPCA, #JournalGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Select Rows( 500 :: N Row( dt ) ) << Hide and Exclude( 1 );
dt << Invert Row Selection;
dtSub = dt << Subset( Output Table Name( "Subset of Data" ), Selected Rows( 1 ), All Columns( 1 ) );
dt << Clear Select;
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ), Robust PCA Outliers( Lambda( 0.08 ) ) );
obj2 = dtSub << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ), Robust PCA Outliers( Lambda( 0.08 ) ) );
jrn1 = Collapse Whitespace( Char( obj << Get Journal ) );
jrn2 = Substitute( Collapse Whitespace( Char( obj2 << Get Journal ) ), "Subset of Data", "data_table" );
If( Host is( "Mac" ),
	jrn1 = Substitute( jrn1, "Table(\!"data_table.jmp\!")", "" );
	jrn2 = Substitute( jrn2, "Table(\!"data_table\!")", "" );
);
obj << close window;
obj2 << close window;
```

**Code Explanation**:

1. Open data table;
2. Select rows 500 to end.
3. Hide and exclude selected rows.
4. Invert row selection.
5. Subset selected rows into new table.
6. Clear original table's selection.
7. Explore outliers on original table.
8. Explore outliers on subset table.
9. Get journal from original exploration.
10. Get journal from subset exploration.
11. Replace subset name in subset journal.
12. If Mac, remove table reference from journals.
13. Close original exploration window.
14. Close subset exploration window.



## Explore Outliers using Add Rows
> **Summary**: Process of selecting and preparing variables for outlier analysis in a JMP data table, utilizing Robust PCA Outliers method to identify anomalies.

<!-- Keywords: #JMPScriptingLanguage, #DataPreparation, #OutlierAnalysis, #RobustPCA, #VariableSelection -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dtShort = New Table( "data_table Short", Add Rows( N Row( dt ) ) );
For( i = 3, i <= 21, i++,
	If( Max( dt[0, i] ) < 127 & Min( dt[0, i] ) > -126,
		dtShort << New Column( Column( dt, i ) << Get Name, Numeric( 1 ), "Continuous", Set Values( dt[0, i] ) ),
		dtShort << New Column( Column( dt, i ) << Get Name, Numeric( 4 ), "Continuous", Set Values( dt[0, i] ) )
	)
);
dtShort << Delete Columns( 1 );
obj = dtShort << Explore Outliers( Y( 1 :: 19 ), Robust PCA Outliers( Center( 1 ), Scale( 1 ) ) );
obj << Save Residuals;
obj << Save Low Rank Approx;
```

**Code Explanation**:

1. Open data table;
2. Create new table Arrhythmia Short.
3. Loop through columns 3 to 21.
4. Check column max and min values.
5. Add column to Arrhythmia Short if conditions met.
6. Delete first column from Arrhythmia Short.
7. Explore outliers on columns 1 to 19.
8. Use Robust PCA Outliers method.
9. Save residuals from outlier analysis.
10. Save low rank approximation.



## Explore Outliers using Summary
> **Summary**: Creates a summary table and outlier exploration for a data table, grouping by age and sex, calculating means for height and weight, and identifying outliers using the quantile range method.

<!-- Keywords: #JMPScriptingLanguage, #DataSummary, #OutlierDetection, #QuantileRangeMethod, #GroupBy -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dtSummary = dt << Summary(
	Group( :age, :sex ),
	Mean( :height ),
	Mean( :weight ),
	Freq( "None" ),
	Weight( "None" ),
	output table name( "Summary of data_table grouped by age, sex" )
);
obj = dtSummary << Explore Outliers( Y( :"Mean(height)"n, :"Mean(weight)"n ), Quantile Range Outliers( Tail Quantile( 0.2 ), Q( 1 ) ) );
```

**Code Explanation**:

1. Open data table;
2. Create summary table.
3. Group by age, sex.
4. Calculate mean height.
5. Calculate mean weight.
6. Name output table.
7. Explore outliers in summary.
8. Set Y variables: mean height, weight.
9. Use quantile range method.
10. Define tail quantile as 0.2.



## Explore Outliers using N Col
### Example 1
> **Summary**: Explores and analyzes outliers in a data table, utilizing Robust PCA Outliers to identify anomalies and perform robust principal component analysis.

<!-- Keywords: #JSLScriptingLanguage, #RobustPCA, #OutlierDetection, #DataExploration, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
p = N Col( dt );
obj = dt << Explore Outliers( Y( :QRS, :T, :P, :QRST, :J, :Heart rate ), Robust PCA Outliers( Lambda( 0.0940720868383597 ), Center( 0 ) ) );
x = dt[0, 10 :: 15];
Results = Robust PCA( X, Center( 0 ), Scale( 1 ), Lambda( 0.0940720868383597 ) );
```

**Code Explanation**:

1. Open data table;
2. Count columns in dataset.
3. Explore outliers for specified variables.
4. Set robust PCA parameters.
5. Extract specific data range.
6. Perform robust PCA analysis.



### Example 2
> **Summary**: Process of exploring outliers in a dataset using Robust PCA, extracting specific columns, and storing results.

<!-- Keywords: #JSLScriptingLanguage, #DataExploration, #RobustPCA, #OutlierDetection, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
p = N Col( dt );
obj = dt << Explore Outliers( Y( :height, :weight ), Robust PCA Outliers( Lambda( 0.316227766016838 ), Scale( 0 ) ) );
x = dt[0, 4 :: 5];
Results = Robust PCA( X, Center( 1 ), Scale( 0 ), Lambda( 0.316227766016838 ) );
```

**Code Explanation**:

1. Open data table;
2. Count columns in dataset.
3. Create outlier exploration object.
4. Extract columns 4 and 5 from dataset.
5. Perform robust PCA on selected columns.
6. Center data before PCA.
7. Do not scale data for PCA.
8. Set lambda value for PCA.
9. Store PCA results.
10. End script execution.



### Example 3
> **Summary**: Process of identifying outliers in a dataset using Robust PCA Outliers and configuring the analysis with specific lambda, centering, and scaling methods.

<!-- Keywords: #JSLScriptingLanguage, #RobustPCAOutliers, #DataAnalysis, #JMP, #OutlierDetection -->

**Code**:
```jsl
dt = Open("data_table.jmp");
p = N Col( dt );
obj = dt << Explore Outliers( Y( 4 :: 8 ), Robust PCA Outliers( Lambda( 0.272165526975909 ), Center( 0 ), Scale( 0 ) ) );
x = dt[0, 4 :: 8];
Results = Robust PCA( X, Center( 0 ), Scale( 0 ), Lambda( 0.272165526975909 ) );
```

**Code Explanation**:

1. Open data table;
2. Count columns in dataset.
3. Launch Explore Outliers platform.
4. Specify Y variables.
5. Configure Robust PCA Outliers.
6. Extract data for analysis.
7. Perform Robust PCA.
8. Set centering method.
9. Set scaling method.
10. Apply lambda value.



## Explore Outliers using Select Randomly
### Example 1
> **Summary**: Process of identifying outliers in a dataset, including random sampling and subset creation.

<!-- Keywords: #JMPScriptingLanguage, #DataSubsetCreation, #OutlierDetection, #RandomSampling, #DataPreprocessing -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Clear Row States;
randRows = dt << Select Randomly( 0.5 ) << Get Selected Rows;
dt << Select Rows( randRows ) << Exclude( 1 );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
dt << Invert Row Selection;
dt2 = dt << Subset( Selected Rows( 1 ), All Columns( 1 ) );
obj2 = dt2 << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
unexcludedRowsOrig = dt << Clear Select << Select Excluded << Invert Row Selection << Get Selected Rows;
dt << Clear Select;
obj << Quantile Range Outliers( Tail Quantile( 0.25 ), Q( 1.5 ) );
obj2 << Quantile Range Outliers( Tail Quantile( 0.25 ), Q( 1.5 ) );
```

**Code Explanation**:

1. Open table.
2. Clear row states.
3. Select random rows.
4. Exclude selected rows.
5. Explore outliers in original data.
6. Invert row selection.
7. Subset selected rows.
8. Explore outliers in subset data.
9. Select unexcluded rows from original.
10. Clear selection.



### Example 2
> **Summary**: Process of identifying and analyzing outliers in a data table, utilizing random sampling, exclusion, and robust fitting techniques.

<!-- Keywords: #JMPScriptingLanguage, #DataAnalysis, #OutlierDetection, #RobustStatistics, #DataPreprocessing -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Clear Row States;
randRows = dt << Select Randomly( 0.25 ) << Get Selected Rows;
dt << Select Rows( randRows ) << Exclude( 1 );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
dt << Invert Row Selection;
dt2 = dt << Subset( Selected Rows( 1 ), All Columns( 1 ) );
obj2 = dt2 << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
unexcludedRowsOrig = dt << Clear Select << Select Excluded << Invert Row Selection << Get Selected Rows;
dt << Clear Select;
obj << Robust Fit Outliers( K Sigma( 3 ), Huber( 1 ), Cauchy( 1 ), Quartile( 1 ) );
obj2 << Robust Fit Outliers( K Sigma( 3 ), Huber( 1 ), Cauchy( 1 ), Quartile( 1 ) );
```

**Code Explanation**:

1. Open data table;
2. Clear all row states.
3. Select 25% rows randomly.
4. Exclude selected rows.
5. Explore outliers for Sensor Measurements.
6. Invert row selection.
7. Subset selected rows.
8. Explore outliers for subset.
9. Select unexcluded original rows.
10. Clear selection.



## Explore Outliers using Random Reset
> **Summary**: Explores outliers in a data table using Robust PCA and captures log output, then extracts a summary table and compares it to expected values.

<!-- Keywords: #JSLScriptingLanguage, #DataExploration, #RobustPCA, #LogCapture, #SummaryStatistics -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Random Reset( 123 );
Log Capture( obj = dt << Explore Outliers( Y( Column Group( "Responses" ) ), Robust PCA Outliers( Use Randomized SVD( 1 ) ) ) );
rpt = Report( obj );
summary = (rpt[Table Box( 1 )] << Get as matrix)[1 :: 4]`;
summaryOracle = [128 100 0.0000001354586550406 0.0262612865719445];
obj << close window;
```

**Code Explanation**:

1. Open data table.
2. Set random seed.
3. Explore outliers using Robust PCA.
4. Capture log output.
5. Extract report object.
6. Get summary table from report.
7. Convert summary to matrix.
8. Define expected summary values.
9. Compare summary to expected.
10. Close exploration window.



