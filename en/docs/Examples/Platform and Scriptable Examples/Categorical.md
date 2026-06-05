# Categorical

## Categorical using Response Screening
> **Summary**: Generates a contour profiler plot for yield with Reaction Temperature and Reaction Time as factors, utilizing the Response Screening platform in JMP.

<!-- Keywords: #JMPScriptingLanguage, #ResponseScreening, #ContourProfilerPlot, #FactorAnalysis, #YieldOptimization -->

**Code**:
```jsl
// Response Screening
// Open data table
dt = Open("data_table.jmp");
// Response Screening
Response Screening(
	Y(
		:Job Satisfaction,
		:I am working on my career,
		:I want to see the world,
		:
		My home needs some major improvements,
		:
		I have vast interests outside of work,
		:
		I want to get my debt under control,
		:I come from a large family,
		:Brush, :Floss
	),
	X(
		:Gender, :Single Status,
		:School Age Children, :Age Group
	),
	Force X Categorical( 1 ),
	Force Y Categorical( 1 )
);
```

**Code Explanation**:

1. Open table.
2. Run Response Screening.
3. Set response variables.
4. Set predictor variables.
5. Force X categorical.
6. Force Y categorical.



### Example 1
> **Summary**: Opens a data table, defines a categorical analysis with multiple responses, and fits the model to predict Annual Salary Z while incorporating Gender, Length Of Service, and Performance as effects, suppressing detailed diagnostic plots.

<!-- Keywords: #JMPScriptingLanguage, #CategoricalAnalysis, #LinearRegression, #DataVisualization, #StatisticalModeling -->

**Code**:
```jsl
// Categorical Several
// Open data table
dt = Open("data_table.jmp");
// Categorical Several
Categorical(
	X( :Age Group, :School Age Children ),
	Grouping Option(
		"Each Individually"
	),
	Responses(
		:I am working on my career
	),
	Responses(
		:
		My home needs some major improvements
	),
	Responses(
		:
		I have vast interests outside of work
	),
	Responses(
		:I come from a large family
	),
	Crosstab Transposed( 1 ),
	Legend( 0 ),
	Test Response Homogeneity( 1 )
);
```

**Code Explanation**:

1. Open data table.
2. Define categorical analysis.
3. Specify X variables.
4. Set grouping option.
5. Add first response.
6. Add second response.
7. Add third response.
8. Add fourth response.
9. Transpose crosstab.
10. Disable legend.
11. Enable test for homogeneity.



### Example 2
> **Summary**: Visualizes career development by age group, using a categorical analysis to cross-tabulate responses with Age Group as the X-axis and suppressing detailed diagnostic plots.

<!-- Keywords: #JMPScriptingLanguage, #CategoricalAnalysis, #Cross-Tabulation, #DataVisualization, #AgeGroup -->

**Code**:
```jsl
// Career by Age Group
// Open data table
dt = Open("data_table.jmp");
// Career by Age Group
Categorical(
	X( :Age Group ),
	Responses(
		:I am working on my career
	),
	Crosstab Transposed( 1 ),
	Legend( 0 ),
	Test Response Homogeneity( 1 )
);
```

**Code Explanation**:

1. Open table.
2. Set categorical analysis.
3. Specify age group as X.
4. Add response variable.
5. Enable crosstab transposition.
6. Disable legend display.
7. Enable test for homogeneity.



### Example 3
> **Summary**: Opens a data table, performs categorical analysis to visualize the proportion of school children who think their home needs major improvements, and tests response homogeneity.

<!-- Keywords: #JSLScriptingLanguage, #CategoricalAnalysis, #DataVisualization, #ResponseHomogeneity, #JMP -->

**Code**:
```jsl
// Home Needs Improve by School Children
// Open data table
dt = Open("data_table.jmp");
// Home Needs Improve by School Children
Categorical(
	X( :School Age Children ),
	Responses(
		:
		My home needs some major improvements
	),
	Crosstab Transposed( 1 ),
	Legend( 0 ),
	Test Response Homogeneity( 1 )
);
```

**Code Explanation**:

1. Open table.
2. Set categorical analysis.
3. Specify X variable.
4. Define response.
5. Transpose crosstab.
6. Hide legend.
7. Test response homogeneity.



### Example 4
> **Summary**: Generates a categorical analysis to visualize the interests of school children outside of work, using a crosstab transposed layout and suppressing detailed diagnostic plots.

<!-- Keywords: #JMPScriptingLanguage, #CategoricalAnalysis, #DataVisualization, #SchoolChildrenInterests, #TransposedCrosstab -->

**Code**:
```jsl
// Vast Interests by School Children
// Open data table
dt = Open("data_table.jmp");
// Vast Interests by School Children
Categorical(
	X( :School Age Children ),
	Responses(
		:
		I have vast interests outside of work
	),
	Crosstab Transposed( 1 ),
	Legend( 0 ),
	Test Response Homogeneity( 1 )
);
```

**Code Explanation**:

1. Open data table.
2. Create categorical analysis.
3. Set X variable.
4. Define response.
5. Enable crosstab transposition.
6. Disable legend.
7. Test response homogeneity.



### Example 5
> **Summary**: Brushing Indicator Group by Age: Visualizes the distribution of brushing habits among different age groups, using a categorical analysis with indicator grouping and frequency charts.

<!-- Keywords: #JSLScriptingLanguage, #CategoricalAnalysis, #IndicatorGrouping, #FrequencyCharts, #DataVisualization -->

**Code**:
```jsl
// Brushing Indicator Group by Age
// Open data table
dt = Open("data_table.jmp");
// Brushing Indicator Group by Age
Categorical(
	X( :Age Group ),
	Indicator Group(
		:Brush After Waking Up,
		:Brush After Meal,
		:Brush Before Sleep,
		:Brush Another Time
	),
	Share Of Responses( 0 ),
	Share Chart( 0 ),
	Frequency Chart( 1 ),
	Crosstab( 1 ),
	Legend( 0 ),
	Test Each Response( 1 )
);
```

**Code Explanation**:

1. Open table.
2. Define categorical variable.
3. Set indicator group.
4. Exclude share of responses.
5. Disable share chart.
6. Enable frequency chart.
7. Enable crosstab.
8. Disable legend.
9. Enable test each response.



### Example 6
> **Summary**: Visualizes the flossing indicator by age group, using a categorical analysis to display frequency charts and crosstabs for each response.

<!-- Keywords: #JMPScriptingLanguage, #CategoricalAnalysis, #FrequencyChart, #Crosstab, #DataVisualization -->

**Code**:
```jsl
// Flossing Indicator by Age
// Open data table
dt = Open("data_table.jmp");
// Flossing Indicator by Age
Categorical(
	X( :Age Group ),
	Indicator Group(
		:Floss After Waking Up,
		:Floss After Meal,
		:Floss Before Sleep,
		:Floss Another Time
	),
	Share Of Responses( 0 ),
	Share Chart( 0 ),
	Frequency Chart( 1 ),
	Crosstab Transposed( 1 ),
	Legend( 0 ),
	Test Each Response( 1 )
);
```

**Code Explanation**:

1. Open data table.
2. Set categorical analysis.
3. Specify age group as X.
4. Define indicator groups for flossing.
5. Disable share of responses chart.
6. Disable share chart.
7. Enable frequency chart.
8. Enable crosstab transposed.
9. Disable legend.
10. Enable test each response.



### Example 7
> **Summary**: Brushes data to visualize the relationship between Age Group and Brush Delimited, using a categorical analysis with multiple delimited brushing, frequency chart, crosstab transposed, and test each response.

<!-- Keywords: #CategoricalAnalysis, #MultipleDelimitedBrushing, #FrequencyChart, #CrosstabTransposed, #TestEachResponse -->

**Code**:
```jsl
// Brushing Delimited by Age
// Open data table
dt = Open("data_table.jmp");
// Brushing Delimited by Age
Categorical(
	X( :Age Group ),
	Multiple Delimited(
		:Brush Delimited
	),
	Share Chart( 0 ),
	Frequency Chart( 1 ),
	Crosstab Transposed( 1 ),
	Legend( 0 ),
	Test Each Response( 1 )
);
```

**Code Explanation**:

1. Open data table.
2. Set categorical variable.
3. Specify multiple delimited brushing.
4. Disable shared chart.
5. Enable frequency chart.
6. Enable crosstab transposed.
7. Disable legend.
8. Enable test each response.



### Example 8
> **Summary**: Visualizes the distribution of flossing habits among individuals grouped by age, using a categorical analysis with multiple delimited responses and suppresses detailed diagnostic plots.

<!-- Keywords: #JMPScriptingLanguage, #CategoricalAnalysis, #MultipleDelimitedResponses, #DataVisualization, #AgeGroup -->

**Code**:
```jsl
// Flossing Delimited by Age
// Open data table
dt = Open("data_table.jmp");
// Flossing Delimited by Age
Categorical(
	X( :Age Group ),
	Multiple Delimited(
		:Floss Delimited
	),
	Share Of Responses( 0 ),
	Share Chart( 0 ),
	Frequency Chart( 1 ),
	Crosstab Transposed( 1 ),
	Legend( 0 ),
	Test Each Response( 1 )
);
```

**Code Explanation**:

1. Open data table.
2. Set categorical analysis.
3. Specify age group as X variable.
4. Use multiple delimited for flossing.
5. Disable share of responses.
6. Disable share chart.
7. Enable frequency chart.
8. Enable crosstab transposed.
9. Disable legend.
10. Enable test each response.



### Example 9
> **Summary**: Visualizes free text reasons not to floss by scoring and saving a word table, then performing a crosstab analysis with transposed results.

<!-- Keywords: #JMPScriptingLanguage, #CategoricalAnalysis, #FreeTextAnalysis, #WordTable, #Crosstab -->

**Code**:
```jsl
// Free Text Floss Reasons
// Open data table
dt = Open("data_table.jmp");
// Free Text Floss Reasons
Categorical(
	Free Text(
		:Reasons Not to Floss,
		<<Score Words by Column( :Floss ),
		<<Save Word Table
	),
	Crosstab Transposed( 1 ),
	Legend( 0 )
);
```

**Code Explanation**:

1. Open table.
2. Assign to dt variable.
3. Categorical analysis.
4. Free Text analysis.
5. Specify column for scoring.
6. Save word table.
7. Perform crosstab.
8. Transpose crosstab.
9. Disable legend.



### Example 10
> **Summary**: Opens a data table, performs categorical analysis by Age, and includes various responses such as Handedness, Analysis, BBQ, Pie, Discoveries, OS, Usage, Boy Band, DGA, and Type, with the legend display disabled.

<!-- Keywords: #JMP, #CategoricalAnalysis, #DataVisualization, #ScriptingLanguage, #JSL -->

**Code**:
```jsl
// Categorical by Age
// Open data table
dt = Open("data_table.jmp");
// Categorical by Age
Categorical(
	X( :Age ),
	Responses( :Handedness ),
	Responses( :Analysis ),
	Responses( :BBQ ),
	Responses( :Pie ),
	Responses( :Discoveries ),
	Responses( :OS ),
	Responses( :Usage ),
	Responses( :Boy Band ),
	Responses( :DGA ),
	Responses( :Type ),
	Legend( 0 )
);
```

**Code Explanation**:

1. Open data table.
2. Set categorical analysis.
3. Use Age as X variable.
4. Include Handedness as response.
5. Include Analysis as response.
6. Include BBQ as response.
7. Include Pie as response.
8. Include Discoveries as response.
9. Include OS as response.
10. Include Usage as response.
11. Include Boy Band as response.
12. Include DGA as response.
13. Include Type as response.
14. Disable legend display.



### Example 11
> **Summary**: Opens a data table, defines categorical variables and response frequencies, and analyzes the data to visualize the relationships between contamination, corrosion, doping, metallization, miscellaneous, oxide defect, and silicon defect.

<!-- Keywords: #JMP, #Categorical, #DataAnalysis, #ScriptingLanguage, #Statistics -->

**Code**:
```jsl
// Categorical
// Open data table
dt = Open("data_table.jmp");
// Categorical
Categorical(
	Sample Size( :SampleSize ),
	X( :clean, :date ),
	Response Frequencies(
		:contamination, :corrosion,
		:doping, :metallization,
		:miscellaneous, :oxide defect,
		:silicon defect
	)
);
```

**Code Explanation**:

1. Open table.
2. Set categorical variables.
3. Define sample size.
4. Specify X variables.
5. Define response frequencies.
6. Analyze categorical data.



### Example 12
> **Summary**: Opens a data table, defines a categorical analysis with multiple response by ID, and specifies the X variable for further exploration.

<!-- Keywords: #CategoricalAnalysis, #MultipleResponseByID, #DataTable, #JMPScriptingLanguage, #StatisticalModeling -->

**Code**:
```jsl
// Cat MultID
// Open data table
dt = Open("data_table.jmp");
// Cat MultID
Categorical(
	Freq( :N ),
	ID( :ID ),
	X( :clean ),
	Multiple Response by ID( :failure ),
	Sample Size( :SampleSize )
);
```

**Code Explanation**:

1. Open data table.
2. Define categorical analysis.
3. Set frequency variable.
4. Identify ID variable.
5. Specify X variable.
6. Define multiple response by ID.
7. Set sample size variable.



### Example 13
> **Summary**: Opens a data table, defines a categorical analysis with multiple response by ID, and specifies sample size. It visualizes the frequency of responses for each ID.

<!-- Keywords: #CategoricalAnalysis, #MultipleResponse, #SampleSize, #DataVisualization, #JMPScriptingLanguage -->

**Code**:
```jsl
// Cat MultID2
// Open data table
dt = Open("data_table.jmp");
// Cat MultID2
Categorical(
	Freq( :N ),
	ID( :ID ),
	X( :clean, :date ),
	Multiple Response by ID( :failure ),
	Sample Size( :SampleSize )
);
```

**Code Explanation**:

1. Open table.
2. Define categorical analysis.
3. Specify frequency column.
4. Identify ID column.
5. Define X variables.
6. Set multiple response by ID.
7. Specify sample size column.



### Example 14
> **Summary**: Opens a data table, sets categorical variables, defines multiple responses, and generates a frequency chart to visualize the distribution of Failure1, Failure2, and Failure3.

<!-- Keywords: #JMPScriptingLanguage, #CategoricalAnalysis, #FrequencyChart, #DataVisualization, #FailureRate -->

**Code**:
```jsl
// Categorical
// Open data table
dt = Open("data_table.jmp");
// Categorical
Categorical(
	X( :clean, :date ),
	Multiple Response(
		:Failure1, :Failure2, :Failure3
	),
	Frequency Chart( 0 )
);
```

**Code Explanation**:

1. Open data table.
2. Set variables as categorical.
3. Define multiple responses.
4. Generate frequency chart.



### Example 15
> **Summary**: Opens a data table, defines categorical variables, and fits a standard linear regression model to predict Annual Salary Z incorporating Gender, Length Of Service, and Performance as effects, while suppressing detailed diagnostic plots.

<!-- Keywords: #JMPScriptingLanguage, #LinearRegression, #DataTable, #CategoricalVariables, #RegressionAnalysis -->

**Code**:
```jsl
// Categorical Delimited
// Open data table
dt = Open("data_table.jmp");
// Categorical Delimited
Categorical(
	ID( :ID ),
	X( :clean, :date ),
	Multiple Delimited( :failureS )
);
```

**Code Explanation**:

1. Open data table.
2. Define categorical variables.
3. Set ID as categorical.
4. Set clean and date as continuous.
5. Set failureS as multiple delimited.



### Example 16
> **Summary**: Opens a data table, sets categorical variables for contamination, corrosion, doping, metallization, miscellaneous, and oxide defect, and then creates a Categorical plot to visualize the relationships between these factors.

<!-- Keywords: #JMPScriptingLanguage, #CategoricalPlot, #DataVisualization, #StatisticalAnalysis, #DataTable -->

**Code**:
```jsl
// Categorical
// Open data table
dt = Open("data_table.jmp");
// Categorical
Categorical(
	X( :clean, :date ),
	Indicator Group(
		:contamination, :corrosion,
		:doping, :metallization,
		:miscellaneous, :oxide defect,
		:silicon defect
	)
);
```

**Code Explanation**:

1. Open data table.
2. Set categorical variables.



### Example 17
> **Summary**: Opens a data table, defines categorical variables, specifies the response variable, sets the crosstab format, and suppresses legend display to visualize the relationship between gender, length of service, and performance on annual salary.

<!-- Keywords: #JMPScriptingLanguage, #CategoricalAnalysis, #DataVisualization, #RegressionModeling, #StatisticalAnalysis -->

**Code**:
```jsl
// Categorical
// Open data table
dt = Open("data_table.jmp");
// Categorical
Categorical(
	X( :Sex, :Passenger Class ),
	Separate Responses( :Survived ),
	Crosstab Format( 1 ),
	Legend( 0 )
);
```

**Code Explanation**:

1. Open data table.
2. Define categorical variables.
3. Specify response variable.
4. Set crosstab format.
5. Disable legend display.



### Example 18
> **Summary**: Uses the Categorical platform to analyze free text data, scoring words by a specified column and saving the word table. It then creates a crosstab transposed with legend display suppressed.

<!-- Keywords: #JMPScriptingLanguage, #Categorical, #FreeTextAnalysis, #WordTable, #Crosstab -->

**Code**:
```jsl
// Free Text Floss Reasons
Categorical(
	Free Text(
		:Reasons Not to Floss,
		<<Score Words by Column( :Floss ),
		<<Save Word Table
	),
	Crosstab Transposed( 1 ),
	Legend( 0 )
);
```

**Code Explanation**:

1. Analyze categorical data.
2. Use free text analysis.
3. Specify column for reasons.
4. Score words by another column.
5. Save word table.
6. Create crosstab transposed.
7. Disable legend display.



### Example 19
> **Summary**: Analyze employee data by fitting a categorical model to predict Annual Salary Z, incorporating Gender, Length Of Service, and Performance as effects, and suppressing detailed diagnostic plots.

<!-- Keywords: #JMPScriptingLanguage, #CategoricalModel, #DataAnalysis, #EmployeeData, #PredictiveModeling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Categorical(
	ID( :Response ID ),
	X( :Gender ),
	Unique Occurrences within ID( 1 ),
	Multiple Delimited( :Brush Delimited ),
	Legend( 0 ),
	Conditional Association( 1 ), 
);
obj << Local Data Filter(
	Mode,
	Add Filter(
		columns( :Brush Delimited ),
		Match Any( Where( :Brush Delimited == "After Meal" ) ),
		Display( :Brush Delimited, Size( 117, 66 ), Check Box Display )
	)
);
Distribution(
	Automatic Recalc( 1 ),
	Nominal Distribution( Column( :Age Group ) ),
	Nominal Distribution( Column( :Employee Tenure ) ),
	Nominal Distribution( Column( :Position Tenure ) ),
	Local Data Filter(
		Add Filter(
			columns( :Floss Delimited ),
			Match Any( Where( :Floss Delimited == "After Meal" ) ),
			Display( :Floss Delimited, Check Box Display )
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Apply categorical analysis.
3. Set response ID.
4. Include gender variable.
5. Ensure unique occurrences.
6. Use brush delimited column.
7. Disable legend.
8. Enable conditional association.
9. Add local data filter.
10. Filter for "After Meal".
11. Create distribution analysis.
12. Recalculate automatically.
13. Analyze age group.
14. Analyze employee tenure.
15. Analyze position tenure.
16. Add local data filter for Floss Delimited.
17. Filter for "After Meal".
18. Display with check box.



### Example 20
> **Summary**: Creates a categorical object from structured data, highlighting cells with high share and mean score, and customizing color for specific conditions.

<!-- Keywords: #JSLScriptingLanguage, #CategoricalObject, #StructuredData, #HighlightCells, #CustomColor -->

**Code**:
```jsl
Open("data_table.jmp");
obj = dt = Categorical( Structured( :Position Tenure + :Age Group, :I am working on my career + :Brush ), Mean Score( 1 ) );
obj << Highlight Cells( Share >= 0.8 );
obj << Highlight Cells( Mean Score >= 2.7, Color( "Blue" ) );
```

**Code Explanation**:

1. Open data table.
2. Create categorical object.
3. Structure categorical variables.
4. Calculate mean score.
5. Highlight cells with share >= 0.8.
6. Highlight cells with mean score >= 2.7.
7. Set highlight color to blue.



### Example 21
> **Summary**: Creates a categorical analysis object to highlight cells with share >= 0.8 and mean score >= 2.7 in blue, utilizing the Categorical platform in JMP.

<!-- Keywords: #JMP, #CategoricalAnalysis, #HighlightingCells, #MeanScore, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt = Categorical( Structured( :Position Tenure + :Age Group, :I am working on my career + :Brush ), Mean Score( 1 ) );
obj << Highlight Cells( Share >= 0.8 );
obj << Highlight Cells( Mean Score >= 2.7, Color( "Blue" ) );
obj << Journal;
```

**Code Explanation**:

1. Open data table.
2. Create categorical analysis object.
3. Highlight cells with share >= 0.8.
4. Highlight mean score >= 2.7 in blue.
5. Output results to journal.



### Example 22
> **Summary**: Creates a categorical table to analyze passenger survival rates based on gender and passenger class, using crosstab format and suppressing legend display.

<!-- Keywords: #JSLScriptingLanguage, #CategoricalTable, #DataAnalysis, #JMP, #SurvivalRates -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Categorical( X( :Sex, :Passenger Class ), Separate Responses( :Survived ), Crosstab Format( 1 ), Legend( 0 ) );
```

**Code Explanation**:

1. Open data table;
2. Create Categorical object.
3. Set X variables: Sex, Passenger Class.
4. Set response variable: Survived.
5. Use Crosstab format.
6. Disable legend display.



### Example 23
> **Summary**: Creates a categorical analysis object to visualize the relationship between passenger class and survival, suppressing detailed diagnostic plots.

<!-- Keywords: #CategoricalAnalysis, #JMPScriptingLanguage, #DataVisualization, #SurvivalAnalysis, #PassengerClass -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Categorical(
	X( :Sex, :Passenger Class ),
	Responses( :Survived ),
	Frequencies( 0 ),
	Share Of Responses( 0 ),
	Share Chart( 0 ),
	Frequency Chart( 1 ),
	Crosstab Transposed( 1 ),
	Legend( 0 ),
	Test Response Homogeneity( 1 ),
	Total Responses( 0 ),
	Mean Score( 1 ),
	Force Crosstab Shading( 0 ),
	SendToReport(
		Dispatch( {}, "Categorical", OutlineBox,
			{Set Title( "Frequency Chart, Crosstab Transposed, Test Response Homogeneity, Mean Score" )}
		)
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create Categorical analysis object.
3. Set X variables: Sex, Passenger Class.
4. Set response variable: Survived.
5. Disable frequencies display.
6. Disable share of responses display.
7. Disable share chart display.
8. Enable frequency chart display.
9. Enable crosstab transposed display.
10. Disable legend display.
11. Enable test response homogeneity.
12. Disable total responses display.
13. Enable mean score display.
14. Disable force crosstab shading.
15. Set report title.



### Example 24
> **Summary**: Creates a categorical analysis to visualize responses from employees, incorporating age group and school age children as X variables, with additional filters for Floss Delimited column.

<!-- Keywords: #JSLScriptingLanguage, #CategoricalAnalysis, #LocalDataFilter, #Filtering, #JMP -->

**Code**:
```jsl
dt2 = Open("data_table.jmp");
cat = dt2 << Categorical(
	X( :Age Group, :School Age Children ),
	Grouping Option( "Each Individually" ),
	Responses( :I am working on my career ),
	Responses( :My home needs some major improvements ),
	Responses( :I have vast interests outside of work ),
	Responses( :I come from a large family ),
	Crosstab Transposed( 1 ),
	Legend( 0 ),
	Test Response Homogeneity( 1 )
);
ldf = cat << Local Data Filter(
	Location( {607, 87} ),
	Mode,
	Add Filter(
		columns( :Floss Delimited ),
		Match Between( 1, 2, Where( :Floss Delimited == {"After Meal", "Before Sleep", "Other"} ) ),
		Display( :Floss Delimited, Size( 121, 87 ), Check Box Display )
	)
);
txt = ldf << Get Script;
whereClause = Char( Arg( Arg( txt, 2 ), 2 ) );
```

**Code Explanation**:

1. Open data table;
2. Create categorical analysis.
3. Set age group and school age children as X variables.
4. Group individually.
5. Add responses for career, home improvements, interests, and family size.
6. Transpose crosstab.
7. Hide legend.
8. Test response homogeneity.
9. Add local data filter.
10. Set filter location and mode.
11. Add filter for Floss Delimited column.
12. Match values after meal, before sleep, other.
13. Display checkboxes for filter.
14. Get script for local data filter.
15. Extract where clause from script.



### Example 25
> **Summary**: Creates a categorical analysis with local data filtering, incorporating specific response variables and filter settings.

<!-- Keywords: #JSLScripting, #CategoricalAnalysis, #LocalDataFilter, #ResponseVariables, #FilterSettings -->

**Code**:
```jsl
dt = Open("data_table.jmp");
cat = dt << Categorical(
	X( :Age Group, :School Age Children ),
	Grouping Option( Each Individually ),
	Responses( :I am working on my career ),
	Responses( :My home needs some major improvements ),
	Responses( :I have vast interests outside of work ),
	Responses( :I come from a large family ),
	Crosstab Transposed( 1 ),
	Legend( 0 ),
	Test Response Homogeneity( 1 )
);
ldf = cat << Local Data Filter(
	Location( {351, 167} ),
	Mode( Select( 0 ), Show( 1 ), Include( 1 ) ),
	Inverse,
	Add Filter(
		columns( :Brush Delimited ),
		Match Any( Where( :Brush Delimited == {"After Meal", "Before Sleep"} ) ),
		Display( :Brush Delimited, Size( 121, 70 ), Check Box Display )
	),
	Add Filter(
		columns( :Brush Delimited ),
		Match Any( Where( :Brush Delimited == "Other" ) ),
		Display( :Brush Delimited, Size( 121, 70 ), Check Box Display )
	),
	Add Filter(
		columns( :Floss Delimited ),
		Match Any( Where( :Floss Delimited == {"Other", "Wake"} ) ),
		Display( :Floss Delimited, Size( 121, 87 ), Check Box Display )
	),
	Add Filter(
		columns( :Frequency of Teeth Cleaning ),
		Where( :Frequency of Teeth Cleaning == 2 ),
		Display( :Frequency of Teeth Cleaning, Size( 208, 72 ), List Display )
	)
);
ldf << Add Favorites( "Foo" );
ldf << Delete All;
ldf << Apply Favorites( "Foo" );
```

**Code Explanation**:

1. Open data table;
2. Create categorical analysis.
3. Set X variables: Age Group, School Age Children.
4. Group each individually.
5. Set response variables.
6. Transpose crosstab.
7. Hide legend.
8. Test response homogeneity.
9. Add local data filter.
10. Configure filter settings.



### Example 26
> **Summary**: Creates a categorical analysis report, incorporating local data filters and filtering by gender, age group, and single status to predict annual salary Z.

<!-- Keywords: #JSLScriptingLanguage, #CategoricalAnalysis, #LocalDataFilter, #Filtering, #PredictiveModeling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
categ = dt << Categorical(
	X( :Age Group ),
	Indicator Group( :Brush After Waking Up, :Brush After Meal, :Brush Before Sleep, :Brush Another Time ),
	Share Of Responses( 0 ),
	Share Chart( 0 ),
	Frequency Chart( 1 ),
	Legend( 0 ),
	Count Test( 1 ), 
);
preMatrix = (Report( categ )["Test Each Response"][Table Box( 1 )] << Get as Matrix)[0, 1 :: 2];
ldf1 = categ << Local Data Filter(
	Location( {379, 328} ),
	Grouped by AND( 1 ),
	Add Filter(
		columns( :Gender, :Age Group ),
		Where( :Gender == 2 ),
		Where( :Age Group == 3 ),
		Display( :Age Group, Size( 220, 115 ), List Display )
	),
	Add Filter( columns( :Age in Years ), Where( :Age in Years >= 29.8 & :Age in Years <= 62.5 ) ),
	Add Filter( columns( :Single Status, :School Age Children ), Where( :Single Status == 2 ), Where( :School Age Children == 1 ) ),
	Add Filter( columns( :Age in Years ), Where( :Age in Years >= 38.3 & :Age in Years <= 58.6 ) ),
	Favorites(
		"((Gender = F) or (Age Group = 35-39)) and (Age in Years >= 29.8 & Age in Years <= 62.5) and ((Single Status = Not Single) or (School Age Children = Yes)) and (Age in Years >= 38.3 & Age in Years <= 58.6)"
		(Match( columns( :Gender, :Age Group ), Where( :Gender == 2 ), Where( :Age Group == 3 ) ), Match( columns( :Age in Years ),
			Where( :Age in Years >= 29.8 & :Age in Years <= 62.5 )
		), Match( columns( :Single Status, :School Age Children ), Where( :Single Status == 2 ), Where( :School Age Children == 1 ) ),
		Match( columns( :Age in Years ), Where( :Age in Years >= 38.3 & :Age in Years <= 58.6 ) ))
	)
);
afterMatrix = (Report( categ )["Test Each Response"][Table Box( 1 )] << Get as Matrix)[0, 1 :: 2];
```

**Code Explanation**:

1. Open data table;
2. Create categorical analysis.
3. Extract pre-filter matrix.
4. Add local data filter.
5. Set filter location.
6. Group filters using AND.
7. Add gender filter.
8. Add age group filter.
9. Add age range filter.
10. Add single status and school age children filter.



### Example 27
> **Summary**: Creates a categorical analysis report, incorporating local data filters and test response homogeneity to analyze employee demographics and habits.

<!-- Keywords: #JSLScripting, #CategoricalAnalysis, #LocalDataFilter, #TestResponseHomogeneity, #EmployeeDemographics -->

**Code**:
```jsl
dt = Open("data_table.jmp");
cateq = dt << Categorical(
	X( :Age Group ),
	Indicator Group( :Floss After Waking Up, :Floss After Meal, :Floss Before Sleep, :Floss Another Time ),
	Share Of Responses( 0 ),
	Share Chart( 0 ),
	Frequency Chart( 1 ),
	Crosstab Transposed( 1 ),
	Legend( 0 ),
	Test Each Response( 1 )
);
preMatrix = (Report( cateq )["Test Each Response"][Table Box( 1 )] << Get as Matrix)[0, 1 :: 2];
ldf1 = cateq << Local Data Filter(
	Grouped by AND( 1 ),
	Add Filter(
		columns( :Floss Delimited, :Gender ),
		Match At Least( 2, Where( :Floss Delimited == {"Before Sleep", "Wake"} ) ),
		Where( :Gender == 2 ),
		Display( :Floss Delimited, Size( 134, 96 ), Check Box Display )
	),
	Add Filter(
		columns( :Brush Delimited, :Employee Tenure ),
		Match All( Where( :Brush Delimited == {"After Meal", "Before Sleep"} ) ),
		Where( :Employee Tenure == 2 ),
		Display( :Brush Delimited, Size( 134, 77 ), Check Box Display ),
		Display( :Employee Tenure, Size( 220, 70 ), List Display )
	)
);
afterMatrix = (Report( cateq )["Test Each Response"][Table Box( 1 )] << Get as Matrix)[0, 1 :: 2];
```

**Code Explanation**:

1. Open data table.
2. Create categorical analysis.
3. Configure categorical settings.
4. Extract initial test matrix.
5. Add local data filter.
6. Set filter grouped by AND.
7. Add first filter criteria.
8. Add second filter criteria.
9. Extract final test matrix.



### Example 28
> **Summary**: Creates a categorical analysis with local data filtering, displaying filtered results in a list display and check box displays.

<!-- Keywords: #JSLScriptingLanguage, #CategoricalAnalysis, #LocalDataFilter, #ListDisplay, #CheckBoxDisplay -->

**Code**:
```jsl
dt = Open("data_table.jmp");
categ = dt << Categorical(
	X( :Age Group ),
	Responses( :I am working on my career ),
	Crosstab Transposed( 1 ),
	Legend( 0 ),
	Test Response Homogeneity( 1 )
);
ldf = categ << Local Data Filter(
	Location( {317, 239} ),
	Add Filter(
		columns( :Age Group, :Brush Delimited, :Floss Delimited ),
		Where( :Age Group == 7 ),
		Match Any( Where( :Brush Delimited == "Before Sleep" ) ),
		Match Any( Where( :Floss Delimited == "Before Sleep" ) ),
		Display( :Age Group, Size( 204, 123 ), List Display ),
		Display( :Brush Delimited, Size( 121, 70 ), Check Box Display ),
		Display( :Floss Delimited, Size( 121, 87 ), Check Box Display )
	),
	Mode( Select( 0 ), Show( 1 ), Include( 1 ) )
);
sub1 = ldf << Show Subset;
ldf << Add Favorites( "Mixed filters" );
ldf << Delete All;
ldf << Apply Favorites( "Mixed filters" );
sub2 = ldf << Show Subset;
result = sub1 << Compare Data Tables( compare With( sub2 ) );
Close( dt, no save );
```

**Code Explanation**:

1. Open data table.
2. Create categorical analysis.
3. Set up local data filter.
4. Configure filter location.
5. Add filter for age group.
6. Match brush delimited condition.
7. Match floss delimited condition.
8. Display age group list.
9. Display brush delimited checkboxes.
10. Display floss delimited checkboxes.



### Example 29
> **Summary**: Creates a categorical analysis to filter and subset data based on specific conditions, utilizing Local Data Filter and Show Subset features.

<!-- Keywords: #JSLScripting, #CategoricalAnalysis, #LocalDataFilter, #ShowSubset, #JMPScriptingLanguage -->

**Code**:
```jsl
dt = Open("data_table.jmp");
categ = dt << Categorical(
	X( :Age Group ),
	Responses( :I am working on my career ),
	Crosstab Transposed( 1 ),
	Legend( 0 ),
	Test Response Homogeneity( 1 )
);
ldf = categ << Local Data Filter(
	Location( {317, 239} ),
	Add Filter(
		columns( :Age Group, :Brush Delimited, :Floss Delimited ),
		Where( :Age Group == 7 ),
		Match Any( Where( :Brush Delimited == "Before Sleep" ) ),
		Match Any( Where( :Floss Delimited == "Before Sleep" ) ),
		Display( :Age Group, Size( 204, 123 ), List Display ),
		Display( :Brush Delimited, Size( 121, 70 ), Check Box Display ),
		Display( :Floss Delimited, Size( 121, 87 ), Check Box Display )
	),
	Mode( Select( 0 ), Show( 1 ), Include( 1 ) )
);
sub1 = ldf << Show Subset;
ldf << Add Favorites( "Mixed filters" );
ldf << Delete All;
ldf << Apply Favorites( "Mixed filters" );
sub2 = ldf << Show Subset;
result = sub1 << Compare Data Tables( compare With( sub2 ) );
```

**Code Explanation**:

1. Open data table.
2. Create categorical analysis.
3. Set X variable to Age Group.
4. Set response variable.
5. Configure crosstab settings.
6. Disable legend.
7. Enable test for response homogeneity.
8. Add local data filter.
9. Set filter location.
10. Define filter conditions.
11. Display filter options.
12. Set filter mode.
13. Show subset with current filters.
14. Save filter as "Mixed filters".
15. Clear all filters.
16. Apply saved "Mixed filters".
17. Show subset with new filters.
18. Compare data tables from subsets.



### Example 30
> **Summary**: Data filtering and report generation from a categorical object, incorporating local data filters and automatic recalculation suppression.

<!-- Keywords: #JSLScriptingLanguage, #CategoricalObject, #DataFiltering, #ReportGeneration, #AutomaticRecalculation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Categorical(
	Sample Size( :SampleSize ),
	X( :clean, :date ),
	Response Frequencies( :contamination, :corrosion, :doping, :metallization, :miscellaneous, :oxide defect, :silicon defect )
);
obj << Local Data Filter(
	Location( {0, 0} ),
	Add Filter( columns( :clean ), Where( :clean == "after" ) ),
	Mode( Select( 0 ), Show( 1 ), Include( 1 ) )
);
obj << Automatic Recalc( 0 );
dt << Select rows( [1, 4] );
dt << Exclude();
dt << Clear Select();
rpt = Report( obj );
rpt[Outline Box( 2 )][GridMultiCellBox( 2 )] << copydata;
s = Get Clipboard();
```

**Code Explanation**:

1. Open data table.
2. Create categorical object.
3. Set local data filter.
4. Disable automatic recalculation.
5. Select specific rows.
6. Exclude selected rows.
7. Clear row selection.
8. Generate report from object.
9. Copy grid data to clipboard.
10. Retrieve clipboard content.



### Example 31
> **Summary**: Data filtering and report generation from a categorical object, incorporating local data filters and row selection to extract specific data subsets.

<!-- Keywords: #JSLScripting, #CategoricalObject, #LocalDataFilter, #RowSelection, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Categorical(
	Sample Size( :SampleSize ),
	X( :clean, :date ),
	Response Frequencies( :contamination, :corrosion, :doping, :metallization, :miscellaneous, :oxide defect, :silicon defect )
);
obj << Local Data Filter(
	Location( {0, 0} ),
	Add Filter( columns( :clean ), Where( :clean == "after" ) ),
	Mode( Select( 0 ), Show( 1 ), Include( 1 ) )
);
dt << Select rows( [1, 4] );
dt << Exclude();
dt << Clear Select();
rpt = Report( obj );
rpt[Outline Box( 2 )][GridCellBox( 5 )] << copydata;
s = Get Clipboard();
Close( dt, NoSave );
dt = Open("data_table.jmp");
obj = Categorical(
	Sample Size( :SampleSize ),
	X( :clean, :date ),
	Response Frequencies( :contamination, :corrosion, :doping, :metallization, :miscellaneous, :oxide defect, :silicon defect )
);
obj << Local Data Filter(
	Location( {0, 0} ),
	Add Filter( columns( :clean ), Where( :clean == "after" ) ),
	Mode( Select( 0 ), Show( 1 ), Include( 1 ) )
);
obj << Automatic Recalc( 0 );
dt << Select rows( [1, 4] );
dt << Exclude();
dt << Clear Select();
rpt = Report( obj );
rpt[Outline Box( 2 )][GridMultiCellBox( 2 )] << copydata;
s = Get Clipboard();
```

**Code Explanation**:

1. Open table.
2. Create categorical object.
3. Add local data filter.
4. Select specific rows.
5. Exclude selected rows.
6. Clear row selection.
7. Generate report.
8. Copy data from report.
9. Close table without saving.
10. Repeat steps 1-9.



### Example 32
> **Summary**: Runs a categorical analysis to visualize the relationship between employee tenure, job satisfaction, and interests outside of work, with comparison groups 'D/E' and cell-by-cell comparisons.

<!-- Keywords: #JMPScriptingLanguage, #CategoricalAnalysis, #StructuredAnalysis, #ComparisonGroups, #Cell-by-CellComparisons -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Categorical(
	Structured(
		:I have vast interests outside of work * (:Employee Tenure + :Job Satisfaction), :Brush + :Floss,
		<<Specify Comparison Groups( "D/E" )
	),
	Compare Each Cell( 1 ),
	Share Chart( 0 ),
	Legend( 0 )
);
```

**Code Explanation**:

1. Open table "data_table".
2. Create categorical analysis object.
3. Define structured analysis.
4. Include interaction terms.
5. Specify comparison groups "D/E".
6. Compare each cell.
7. Do not share chart.
8. Do not show legend.



### Example 33
> **Summary**: Runs the creation and deletion of rows in a JMP data table, as well as the closing of a categorical analysis window.

<!-- Keywords: #JMPScriptingLanguage, #DataTableManagement, #CategoricalAnalysis, #WindowControl, #ScriptAutomation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Categorical( X( :sex, :marital status ), Aligned Responses( :country, :size ), Grouping Option( Each Individually ) );
dt << Select Rows( 1 :: N Row( dt ) );
dt << Delete Rows();
obj = Window( "data_table - Categorical" );
obj << close window;
```

**Code Explanation**:

1. Open data table;
2. Create categorical analysis object.
3. Select all rows in table.
4. Delete all selected rows.
5. Find window "data_table - Categorical".
6. Close found window.



### Example 34
> **Summary**: Runs the creation and deletion of a categorical analysis object in JMP, utilizing the Categorical platform to analyze data.

<!-- Keywords: #JMPScriptingLanguage, #CategoricalAnalysis, #DataTableManagement, #Automation, #JSL -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Categorical( Repeated Measures( :First Survey, :Second Survey ), Freq( :Count ) );
dt << Select Rows( 1 :: N Row( dt ) );
dt << Delete Rows();
obj = Window( "data_table - Categorical" );
obj << close window;
```

**Code Explanation**:

1. Open data table.
2. Create categorical analysis object.
3. Select all rows in table.
4. Delete selected rows.
5. Close categorical analysis window.



### Example 35
> **Summary**: Runs the creation and deletion of a categorical analysis object in JMP, utilizing the Categorical platform to analyze data.

<!-- Keywords: #JMPScriptingLanguage, #CategoricalAnalysis, #DataTableManagement, #Automation, #JSLScript -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Categorical( Rater Agreement( :First Survey, :Second Survey ), Freq( :Count ) );
dt << Select Rows( 1 :: N Row( dt ) );
dt << Delete Rows();
obj = Window( "data_table - Categorical" );
obj << close window;
```

**Code Explanation**:

1. Open data table;
2. Create categorical analysis object.
3. Select all rows in data table.
4. Delete selected rows.
5. Close categorical analysis window.



### Example 36
> **Summary**: Creates a categorical analysis by selecting all rows, deleting them, and closing the analysis window.

<!-- Keywords: #JSLScriptingLanguage, #CategoricalAnalysis, #DataManipulation, #JMP, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Categorical( X( :Single Status ), Responses( :Age Group ), Legend( 0 ) );
dt << Select Rows( 1 :: N Row( dt ) );
dt << Delete Rows();
obj = Window( "data_table - Categorical by Single Status" );
obj << close window;
```

**Code Explanation**:

1. Open data table.
2. Create categorical analysis.
3. Select all rows.
4. Delete selected rows.
5. Find analysis window.
6. Close analysis window.



### Example 37
> **Summary**: Runs the creation and deletion of rows in a JMP data table, as well as the opening and closing of an analysis window.

<!-- Keywords: #JMPScriptingLanguage, #DataTableManagement, #AnalysisWindowControl, #RowOperations, #ScriptAutomation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Categorical( X( :clean, :date ), Multiple Response( :Failure1, :Failure2, :Failure3 ), Frequency Chart( 0 ) );
dt << Select Rows( 1 :: N Row( dt ) );
dt << Delete Rows();
obj = Window( "Failure3MultipleField - Categorical" );
obj << close window;
```

**Code Explanation**:

1. Open data table;
2. Create categorical analysis object.
3. Select all rows in table.
4. Delete all rows from table.
5. Locate analysis window.
6. Close analysis window.



### Example 38
> **Summary**: Runs the opening and categorization of a data table, selecting all rows, deleting them, and closing the analysis window.

<!-- Keywords: #JMPScriptingLanguage, #DataTableManagement, #CategoricalAnalysis, #WindowControl, #ScriptAutomation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Categorical( Structured( :Gender * :Age Group + :Position Tenure, :Job Satisfaction + :Salary Group ) );
dt << Select Rows( 1 :: N Row( dt ) );
dt << Delete Rows();
obj = Window( "data_table - Categorical" );
obj << close window;
```

**Code Explanation**:

1. Open data table.
2. Perform categorical analysis.
3. Select all rows.
4. Delete all rows.
5. Locate analysis window.
6. Close analysis window.



### Example 39
> **Summary**: Creates and configures a categorical analysis object, selecting all rows, deleting them, and closing the analysis window.

<!-- Keywords: #JSLScriptingLanguage, #CategoricalAnalysis, #DataTableManagement, #InteractiveFeatures, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Categorical(
	Structured(
		Empty(),
		Empty(),
		Aligned Responses(
			:I am working on my career, :I want to see the world, :My home needs some major improvements,
			:I have vast interests outside of work, :I want to get my debt under control, :I come from a large family
		)
	),
	Legend( 0 ),
	Share Chart( 1 )
);
dt << Select Rows( 1 :: N Row( dt ) );
dt << Delete Rows();
obj = Window( "data_table - Categorical" );
obj << close window;
```

**Code Explanation**:

1. Open data table.
2. Create categorical analysis object.
3. Configure structured analysis.
4. Set legend visibility.
5. Enable shared chart.
6. Select all rows.
7. Delete selected rows.
8. Locate analysis window.
9. Close analysis window.



### Example 40
> **Summary**: Creates a categorical analysis object to visualize relationships between gender, marital status, country, and size, with interactive filtering by age.

<!-- Keywords: #JMPScriptingLanguage, #CategoricalAnalysis, #DataFiltering, #InteractiveVisualization, #StatisticalModeling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Categorical( X( :sex, :marital status ), Aligned Responses( :country, :size ), Grouping Option( Each Individually ) );
obj << Local Data Filter( Add Filter( columns( :age ), Where( :age == 18.5 ) ) );
obj << close window;
```

**Code Explanation**:

1. Open data table;
2. Create Categorical analysis object.
3. Set X variables: sex, marital status.
4. Set aligned responses: country, size.
5. Grouping option: each individually.
6. Add local data filter.
7. Filter column age.
8. Where age equals 18.5.
9. Close analysis window.



### Example 41
> **Summary**: Creates a categorical analysis report to visualize and analyze employee data, incorporating indicator groups for country and size, X variables for sex and marital status, and individual grouping options.

<!-- Keywords: #JMPScriptingLanguage, #CategoricalAnalysis, #DataVisualization, #EmployeeData, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Categorical( Indicator Group( :country, :size ), X( :sex, :marital status ), Grouping Option( Each Individually ) );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Create categorical analysis object.
3. Set indicator group variables.
4. Define X variables for analysis.
5. Set grouping option individually.
6. Generate report from analysis.



### Example 42
> **Summary**: Creates a categorical analysis object to structure age variable, align height and weight responses, enable crosstab transposition, disable legend display, and share chart across windows.

<!-- Keywords: #JMPScriptingLanguage, #CategoricalAnalysis, #DataVisualization, #StatisticalModeling, #InteractiveDashboard -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Categorical(
	Structured( :age, Aligned Responses( :height, :weight ) ),
	Crosstab Transposed( 1 ),
	Legend( 0 ),
	Share Chart( 1 )
);
obj << close window;
```

**Code Explanation**:

1. Open data table;
2. Create categorical analysis object.
3. Structure age variable.
4. Align height and weight responses.
5. Enable crosstab transposition.
6. Disable legend display.
7. Share chart across windows.
8. Close analysis window.



### Example 43
> **Summary**: Creates a categorical analysis object to visualize Age Group and Gender, then saves the output to an Excel file on the desktop.

<!-- Keywords: #JSLScriptingLanguage, #CategoricalAnalysis, #DataVisualization, #ExcelOutput, #AgeGroup -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Categorical( X( :Age Group ), Responses( :Gender ), Legend( 0 ) );
Log Capture( obj << Save Excel File( "$DESKTOP\consumerpreferences.xlsx", Separate Rows for each cell
statistic( 1 ) ) );
```

**Code Explanation**:

1. Open data table.
2. Create categorical analysis object.
3. Set X variable to Age Group.
4. Set Responses variable to Gender.
5. Disable legend display.
6. Capture log output.
7. Save analysis to Excel file.
8. Specify file path on desktop.
9. Use separate rows for each cell.
10. Include only first statistic.



### Example 44
> **Summary**: Creates and saves a structured analysis object to an Excel file, incorporating categorical variables for sex, marital status, and size.

<!-- Keywords: #JSLScriptingLanguage, #StructuredAnalysis, #CategoricalVariables, #ExcelFileOutput, #DataTable -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj1 = dt << Categorical( Structured( :sex * :marital status, :size ), Structured( :size, :sex * :marital status ) );
Log Capture( obj1 << Save Excel File( "$DESKTOP\testSaveStructuredMultiple.xlsx", Separate Rows for each
cell statistic( 1 ) ) );
```

**Code Explanation**:

1. Open data table;
2. Create categorical analysis object.
3. Define structured analysis for sex, marital status, and size.
4. Define another structured analysis for size, sex, and marital status.
5. Capture log output.
6. Save structured analysis to Excel file.
7. Use separate rows for cell statistics.
8. Specify cell statistic option.
9. Save file to desktop.
10. Name file "testSaveStructuredMultiple.xlsx".



### Example 45
> **Summary**: Creates a categorical analysis object to explore the relationship between gender and age, suppressing detailed diagnostic plots and saving the results to an Excel file.

<!-- Keywords: #JSLScriptingLanguage, #CategoricalAnalysis, #DataVisualization, #ExcelOutput, #StatisticalModeling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Categorical(
	X( :sex ),
	Responses( :age ),
	Frequencies( 0 ),
	Share Of Responses( 0 ),
	Cell Chisq( 1 ),
	Share Chart( 0 ),
	Legend( 0 )
);
Log Capture( obj << Save Excel File( "$DESKTOP\chisq.xlsx", Separate Rows for each cell statistic( 1 ) ) );
```

**Code Explanation**:

1. Open data table;
2. Create categorical analysis object.
3. Set X variable to "sex".
4. Set response variable to "age".
5. Disable frequencies display.
6. Disable share of responses display.
7. Enable cell chi-square calculation.
8. Disable share chart display.
9. Disable legend display.
10. Save analysis to Excel file.



### Example 46
> **Summary**: Creates a categorical analysis object with structured layout, aligned responses, and crosstab transposed view to analyze age-related data, and saves the results to an Excel file.

<!-- Keywords: #JSLScriptingLanguage, #CategoricalAnalysis, #StructuredLayout, #AlignedResponses, #ExcelFileOutput -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Categorical(
	Structured( Empty(), :age, Aligned Responses( :height, :weight ) ),
	Crosstab Transposed( 1 ),
	Legend( 0 ),
	Share Chart( 1 )
);
Log Capture( obj << Save Excel File( "$DESKTOP\aligned.xlsx", Separate Rows for each cell statistic( 1 ) ) );
```

**Code Explanation**:

1. Open data table;
2. Create categorical analysis object.
3. Use structured layout.
4. Include age variable.
5. Align height and weight responses.
6. Use crosstab transposed view.
7. Disable legend display.
8. Share chart across cells.
9. Log capture of save operation.
10. Save results to aligned.xlsx.



### Example 47
> **Summary**: Creates a structured categorical analysis object from a data table, incorporating age and marital status variables, and saves it to an Excel file with separate rows for each cell statistic.

<!-- Keywords: #JSLScriptingLanguage, #CategoricalAnalysis, #StructuredData, #ExcelFileOutput, #CellStatistic -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Categorical( Structured( age * :marital status, :size ) );
obj << Save Excel File( "$DESKTOP\testSaveStructured_AgeTimesMS_Cols.xlsx", Separate Rows for each cell statistic( 1 ) );
```

**Code Explanation**:

1. Open data table;
2. Create categorical analysis object.
3. Structure analysis by age and marital status.
4. Include size variable in analysis.
5. Save structured data to Excel.
6. Place file on desktop.
7. Use separate rows for each cell.
8. Include cell statistics in Excel.
9. Specify cell statistic as 1.
10. Complete script execution.



### Example 48
> **Summary**: Creates a categorical analysis object to visualize and analyze the distribution of responses based on gender, suppressing detailed diagnostic plots.

<!-- Keywords: #CategoricalAnalysis, #DataVisualization, #JSLScripting, #RegressionModel, #StatisticalAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Categorical(
	Responses( :sex ),
	Share Chart( 1 ),
	Legend( 0 ),
	Mean Score( 1 ),
	Mean Std Error( 1 ),
	Mean Confidence Interval( 1 ),
	Std Dev Score( 1 )
);
rpt = Report( obj );
 
 
 
 
 
allScores = J( 18, 1, 1 ) |/ J( 22, 1, 2 );
mean value = Mean( allScores );
std dev val = Std Dev( allScores );
mean se val = std dev val / Sqrt( 40 );
lower limit = mean value - t Quantile( 0.975, N Row( allScores ) - 1 ) * mean se val;
upper limit = mean value + t Quantile( 0.975, N Row( allScores ) - 1 ) * mean se val;
 
 
 
 
lcap = Log Capture( dt2 = obj << savettestsandpvalues );
check = Contains( lcap, "No t-Tests or p-Values to save." );
dtMeanScores = obj << Save Mean Scores;
 
 
 
 
obj << close window;
Close( dtMeanScores, nosave );
Close( dt, no save );
ut relative epsilon = 1e-2;
```

**Code Explanation**:

1. Open data table;
2. Create categorical analysis object.
3. Set responses to "sex".
4. Enable share chart.
5. Disable legend.
6. Enable mean score.
7. Enable mean standard error.
8. Enable mean confidence interval.
9. Enable standard deviation score.
10. Generate report from object.



### Example 49
> **Summary**: Calculates and visualizes mean scores, standard deviation, and confidence intervals for categorical responses in a data table, while suppressing detailed diagnostic plots.

<!-- Keywords: #JSLScriptingLanguage, #CategoricalAnalysis, #DataVisualization, #ConfidenceIntervals, #MeanScores -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Categorical(
	Responses( :sex ),
	Share Chart( 1 ),
	Legend( 0 ),
	Mean Score( 1 ),
	Mean Std Error( 1 ),
	Mean Confidence Interval( 1 ),
	Std Dev Score( 1 )
);
rpt = Report( obj );
 
 
 
 
 
allScores = J( 18, 1, 1 ) |/ J( 22, 1, 2 );
mean value = Mean( allScores );
std dev val = Std Dev( allScores );
mean se val = std dev val / Sqrt( 40 );
lower limit = mean value - t Quantile( 0.975, N Row( allScores ) - 1 ) * mean se val;
upper limit = mean value + t Quantile( 0.975, N Row( allScores ) - 1 ) * mean se val;
 
 
 
 
lcap = Log Capture( dt2 = obj << savettestsandpvalues );
check = Contains( lcap, "No t-Tests or p-Values to save." );
dtMeanScores = obj << Save Mean Scores;
 
 
 
 
obj << close window;
```

**Code Explanation**:

1. Open data table.
2. Perform categorical analysis.
3. Generate share chart.
4. Calculate mean score.
5. Calculate mean standard error.
6. Calculate mean confidence interval.
7. Calculate standard deviation score.
8. Create report object.
9. Define all scores array.
10. Calculate mean value.
11. Calculate standard deviation.
12. Calculate mean standard error value.
13. Calculate lower confidence limit.
14. Calculate upper confidence limit.
15. Save t-tests and p-values.
16. Check for t-test results.
17. Save mean scores.
18. Close analysis window.



### Example 50
> **Summary**: Creates a categorical analysis object for reporting, disabling chart sharing and legend display, and setting rate per case responding.

<!-- Keywords: #JSLScriptingLanguage, #CategoricalAnalysis, #ReportGeneration, #DataTableManagement, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Categorical( Structured( Empty(), :Brush Delimited ), Share Chart( 0 ), Legend( 0 ), Rate per case responding( 1 ) );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table.
2. Create categorical analysis object.
3. Disable chart sharing.
4. Disable legend display.
5. Set rate per case responding.
6. Generate report object.



### Example 51
> **Summary**: Creates two categorical analysis objects to compare and test response homogeneity in a data table, generating reports with associated matrices.

<!-- Keywords: #JSLScripting, #CategoricalAnalysis, #DataTableManipulation, #ReportGeneration, #MatrixExtraction -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj1 = dt << Categorical(
	Structured( :Brush Delimited, :Brush ),
	Compare Each Cell( 1 ),
	Cell Chisq( 1 ),
	Test Response Homogeneity( 1 ),
	Compare Each Sample( 1 )
);
rpt1 = obj1 << report;
actMat = rpt1[Outline Box( 3 )][Table Box( 1 )] << getasmatrix;
obj2 = dt << Categorical(
	Structured( :Brush Delimited, :Brush, <<Specify Comparison Groups( "A/B/c/d" ) ),
	Test Response Homogeneity( 1 ), 
);
rpt2 = obj2 << report;
expMat = rpt2[Outline Box( 3 )][Table Box( 1 )] << getasmatrix;
```

**Code Explanation**:

1. Open data table;
2. Create categorical analysis object.
3. Configure structured comparison.
4. Enable cell chi-square test.
5. Test response homogeneity.
6. Compare each sample.
7. Generate report from analysis.
8. Extract matrix from report.
9. Create second categorical analysis object.
10. Specify comparison groups.
11. Test response homogeneity.
12. Generate second report.
13. Extract matrix from second report.



### Example 52
> **Summary**: Creates a frequency table to analyze failure modes by clean and date, utilizing Categorical analysis and nested loops.

<!-- Keywords: #JSLScripting, #CategoricalAnalysis, #FrequencyTable, #DataVisualization, #FailureModes -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Categorical( ID( :ID ), X( :clean, :date ), Multiple Delimited( :failureS ) );
rpt = Report( obj );
cleanKeys = Associative Array( dt[0, "clean"] ) << Get Keys;
dateKeys = Associative Array( dt[0, "date"] ) << Get Keys;
failureKeys = {"", "contamination", "corrosion", "doping", "metallization", "miscellaneous", "oxide defect", "silicon defect"};
freq_table = [];
For( i = 1, i <= Length( cleanKeys ), i++,
	For( j = 1, j <= Length( dateKeys ), j++,
		freq_row = [];
		For( k = 2, k <= Length( failureKeys ), k++,
			freq_row = freq_row || N Row(
				dt << Select Where( :clean == cleanKeys[i] & :date == dateKeys[j] & Contains( :"failureS"n, failureKeys[k] ) ) <<
				Get Selected Rows
			)
		);
		freq_table = freq_table |/ freq_row;
	)
);
dt_freq = obj << Save Frequencies;
```

**Code Explanation**:

1. Open data table.
2. Create categorical analysis object.
3. Generate report from object.
4. Extract unique clean keys.
5. Extract unique date keys.
6. Define failure keys array.
7. Initialize frequency table.
8. Loop through clean keys.
9. Loop through date keys.
10. Initialize frequency row.
11. Loop through failure keys.
12. Count rows for each condition.
13. Append count to frequency row.
14. Append frequency row to table.
15. Save frequencies to new table.



### Example 53
> **Summary**: Creates a categorical object from a structured data table, calculating mean and standard deviation scores for Age Group, and generates a report.

<!-- Keywords: #JSLScriptingLanguage, #CategoricalObject, #StructuredData, #ReportGeneration, #StatisticalAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Categorical( Structured( Empty(), :Age Group ), Mean Score( 1 ), Std Dev Score( 1 ) );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table.
2. Create categorical object.
3. Structure by Age Group.
4. Calculate mean score.
5. Calculate standard deviation score.
6. Generate report object.



### Example 54
> **Summary**: Fits a standard linear regression model to predict Annual Salary Z, incorporating Gender, Length Of Service, and Performance as effects, and suppresses detailed diagnostic plots.

<!-- Keywords: #JSLScriptingLanguage, #LinearRegression, #CategoricalAnalysis, #DataVisualization, #StatisticalModeling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj1 = dt << Categorical(
	X( :sex, :marital status ),
	Multiple Response( :country, :size ),
	Table Format( 0 ),
	Crosstab Format( 1 ),
	Legend( 0 ),
	Test Each Response( 1 ),
	Order by Significance( 1 )
);
rpt1 = obj1 << report;
order valuelists = [0.26100816059817, 0.364885791886085, 0.486159330404024, 0.559548341908125, 0.592553284037938, 0.995444207835343];
valuelists = rpt1[Outline Box( 3 )][Number Col Box( 2 )] << get as matrix;
obj3 = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
obj3 << ChiSquare Test Choices( LR Only );
rpt3 = Report( obj3 );
val1 = rpt3[Outline Box( "Test Response Homogeneity" )][Number Col Box( 1 )] << get as matrix;
val2 = rpt3[Outline Box( "Test Response Homogeneity" )][Number Col Box( 2 )] << get as matrix;
exp1 = [5.68644135646778];
exp2 = [0.459215091587712];
```

**Code Explanation**:

1. Open data table;
2. Run Categorical analysis.
3. Set multiple responses.
4. Use crosstab format.
5. Disable legend.
6. Test each response.
7. Order by significance.
8. Generate report.
9. Extract value lists.
10. Run ChiSquare test.



### Example 55
> **Summary**: Analyze categorical responses to predict annual salary, incorporating gender, length of service, and performance as effects, and suppresses detailed diagnostic plots.

<!-- Keywords: #JSLScriptingLanguage, #CategoricalAnalysis, #PredictiveModeling, #DataTableManipulation, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Categorical( Multiple Response( :country, :size ), X( :sex, :marital status ) );
obj << Test Each Response( 1 );
rpt = Report( obj );
val = rpt[Outline Box( 3 )][Number Col Box( 1 )] << get as matrix;
val1 = [4.00422599201568, 1.90407349729486, 2.06244174616131, 3.17869629977412, 2.4403954010094, 0.0673496556842679];
```

**Code Explanation**:

1. Open data table.
2. Create Categorical analysis object.
3. Set multiple response variables.
4. Set predictor variables.
5. Test each response.
6. Generate report from analysis.
7. Extract outline box from report.
8. Get matrix from number column box.
9. Define target values array.



### Example 56
> **Summary**: Analyze categorical data by fitting a standard linear regression model to predict Annual Salary Z, incorporating Gender, Length Of Service, and Performance as effects, and suppressing detailed diagnostic plots.

<!-- Keywords: #CategoricalAnalysis, #LinearRegression, #JMPScriptingLanguage, #DataVisualization, #StatisticalModeling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Categorical( X( :sex, :marital status ), Responses( :country ) );
obj << Test Response Homogeneity( 1 );
rpt = Report( obj );
val = rpt[Outline Box( 3 )][Number Col Box( 1 )] << get as matrix;
val2 = rpt[Outline Box( 3 )][Number Col Box( 3 )] << get as matrix;
val1 = [5.68644135646778, 5.6069849388796];
```

**Code Explanation**:

1. Open table.
2. Create categorical analysis.
3. Test response homogeneity.
4. Generate report.
5. Extract first value matrix.
6. Extract third value matrix.
7. Define fixed values array.



### Example 57
> **Summary**: Fits a standard linear regression model to predict Annual Salary Z, incorporating Gender, Length Of Service, and Performance as effects, and generates a report with detailed results.

<!-- Keywords: #JSLScriptingLanguage, #LinearRegression, #DataAnalysis, #PredictiveModeling, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Categorical( X( :size ), Responses( :country ) );
obj << Cell Chisq( 1 );
obj << Compare each sample( 1 );
obj << Compare each cell( 1 );
rpt = Report( obj );
val1 = rpt["Compare Each Sample"][Matrix Box( 1 )] << get;
eval1 = [. 0.0000003111401583204 5.98746519668924e-16,
0.0000003111401583204 . 0.0000792793472117579,
5.98746519668924e-16 0.0000792793472117579 .];
val2 = rpt["Compare Each Cell - Details"][Table Box( 1 )] << get as matrix;
eval2 = [0.0000004358910269543 1.70186058968822e-15 0.0000268030789191484,
0.468856725856521 0.448498257255933 0.970334867561975,
0.000000288775318326 2.43290419919438e-14 0.000117284011578632];
```

**Code Explanation**:

1. Open data table;
2. Create Categorical object.
3. Set Chi-square test option.
4. Enable Compare Each Sample option.
5. Enable Compare Each Cell option.
6. Generate report from object.
7. Extract "Compare Each Sample" matrix.
8. Store expected matrix eval1.
9. Extract "Compare Each Cell - Details" matrix.
10. Store expected matrix eval2.



### Example 58
> **Summary**: Fits a standard linear regression model to predict Annual Salary Z, incorporating Gender, Length Of Service, and Performance as effects, and suppressing detailed diagnostic plots.

<!-- Keywords: #JSLScriptingLanguage, #LinearRegression, #CategoricalAnalysis, #DataTable, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Categorical( Responses( :size ), X( :country ) );
obj << Compare Each Sample( 1 );
rpt = Report( obj );
val = rpt[Outline Box( 3 )][Matrix Box( 1 )] << get;
val1 = [. 0.00234452809225109 2.32230956499395e-16, 0.00234452809225109 . 0.0273253411221382, 2.32230956499395e-16 0.0273253411221382 .];
obj1 = dt << Categorical( Responses( :size ), X( :country ) );
obj1 << Compare Each Cell( 1 );
rpt = Report( obj1 );
valu = rpt[Outline Box( 3 )][Table Box( 1 )] << get as matrix;
valu1 = [0.00451998340635482 3.14754693928954e-13 0.0147433443816591,
0.694189731336238 0.116137177808372 0.488681022629614,
0.00361318849538789 6.86794158436025e-11 0.0965057693685581];
```

**Code Explanation**:

1. Open data table;
2. Run Categorical analysis.
3. Set responses to :size.
4. Set X to :country.
5. Compare each sample.
6. Extract report.
7. Get matrix values.
8. Define val1 matrix.
9. Run Categorical analysis again.
10. Compare each cell.
11. Extract report.
12. Get table values as matrix.
13. Define valu1 matrix.



### Example 59
> **Summary**: Creates a categorical chart to analyze country distribution based on size, type, and responses from an open data table.

<!-- Keywords: #JSLScriptingLanguage, #CategoricalChart, #DataTable, #Responses, #Legend -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Categorical( X( :size, :type ), Responses( :country ), Legend( 0 ) );
```

**Code Explanation**:

1. Open data table;
2. Create categorical chart object.
3. Set X variables: size, type.
4. Set response variable: country.
5. Disable legend display.



### Example 60
> **Summary**: Creates a categorical analysis object from a data table, specifying sample size, X variable, response frequencies, and frequency charts.

<!-- Keywords: #JSLScriptingLanguage, #CategoricalAnalysis, #DataTable, #FrequencyCharts, #ReportObject -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Categorical(
	Sample Size( :SampleSize ),
	X( :clean ),
	Response Frequencies( :contamination, :corrosion, :doping, :metallization, :miscellaneous, :oxide defect, :silicon defect ),
	Frequency Chart( 1 ),
	Transposed Freq Chart( 1 ), 
);
rpt = Report( obj );
```

**Code Explanation**:

1. Open data table;
2. Define categorical analysis object.
3. Set sample size variable.
4. Specify X variable.
5. Define response frequencies.
6. Create frequency chart.
7. Create transposed frequency chart.
8. Generate report object.



### Example 61
> **Summary**: Calculates and visualizes rater agreement for categorical data, using a Categorical object to group individual responses and generate a report.

<!-- Keywords: #JSLScriptingLanguage, #CategoricalObject, #RaterAgreement, #DataVisualization, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Categorical( X, Rater Agreement( :A, :B, :C ), Grouping Option( Each Individually ) );
rpt = Report( obj );
val = rpt[Outline Box( 3 )][Number Col Box( 1 )] << get as matrix;
exp = [0.862944162436548, 0.776119402985075, 0.788007268322229];
```

**Code Explanation**:

1. Open data table;
2. Create Categorical object.
3. Set Rater Agreement.
4. Group individually.
5. Generate report.
6. Access outline box 3.
7. Get number column box 1.
8. Convert to matrix.
9. Define expected values.
10. Compare results.



### Example 62
> **Summary**: Creates a categorical report to compare letter grades, utilizing the Categorical function and suppressing detailed diagnostic plots.

<!-- Keywords: #JSLScriptingLanguage, #CategoricalFunction, #ReportGeneration, #DataAnalysis, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Categorical( Structured( :Goals, :Grade ), Compare Each Cell( 1 ) );
rpt = Report( obj );
text = rpt[Outline Box( 3 )][Text Box( 1 )] << get text;
exp = "Letter comparisons use Fisher's Exact Test";
```

**Code Explanation**:

1. Open data table;
2. Create categorical object.
3. Generate report.
4. Extract text from report.
5. Define expected text.



### Example 63
> **Summary**: Creates a categorical analysis with local data filtering to visualize country-specific responses for female employees, suppressing detailed diagnostic plots.

<!-- Keywords: #JMPScriptingLanguage, #CategoricalAnalysis, #LocalDataFilter, #FemaleEmployees, #CountrySpecificResponses -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Categorical(
	Responses( :country ),
	Legend( 0 ),
	Local Data Filter(
		Location( {1856, 246} ),
		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),
		Mode( Select( 0 ), Show( 1 ), Include( 1 ) )
	)
);
indicator = Is Scriptable( obj );
```

**Code Explanation**:

1. Open table.
2. Create categorical analysis.
3. Set response variable.
4. Disable legend.
5. Add local data filter.
6. Set filter location.
7. Filter by sex.
8. Configure filter mode.
9. Check scriptability.
10. Assign result to indicator.



### Example 64
> **Summary**: Creates a categorical report to visualize and analyze responses from an employee survey, incorporating gender and single status as effects.

<!-- Keywords: #JMPScriptingLanguage, #CategoricalReport, #SurveyAnalysis, #EmployeeData, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Categorical( Responses( :Gender ), Responses( :Single Status ), Legend( 0 ) );
obj << Automatic Recalc;
rpt = obj << report;
```

**Code Explanation**:

1. Open data table.
2. Create categorical object.
3. Set responses to Gender.
4. Add Single Status response.
5. Disable legend.
6. Enable automatic recalculation.
7. Generate report.



### Example 65
> **Summary**: Creates a categorical analysis object to visualize frequency charts and share charts for Annual Salary Z, incorporating Gender, Length Of Service, and Performance as effects, while suppressing detailed diagnostic plots.

<!-- Keywords: #CategoricalAnalysis, #FrequencyChart, #ShareChart, #LinearRegression, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Categorical( Structured( Empty(), :Brush Delimited ), Frequency Chart( 1 ), Share Chart( 1 ), Legend( 0 ) );
obj << savescripttodatatable;
rpt = obj << report;
obj2 = dt << runscript( "Categorical" );
rpt2 = obj2 << report;
```

**Code Explanation**:

1. Open data table.
2. Create categorical analysis object.
3. Configure frequency chart.
4. Configure share chart.
5. Disable legend.
6. Save script to data table.
7. Generate initial report.
8. Run script again.
9. Generate second report.



### Example 66
> **Summary**: Creates a categorical analysis report to visualize Rater Agreement for Employee Tenure, suppressing detailed diagnostic plots.

<!-- Keywords: #JSLScriptingLanguage, #CategoricalAnalysis, #RaterAgreement, #EmployeeTenure, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Categorical( Rater Agreement( :Employee Tenure ), Legend( 0 ) );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table.
2. Create categorical analysis.
3. Set variable for analysis.
4. Disable legend display.
5. Generate report object.



### Example 67
> **Summary**: Creates a categorical analysis report to explore employee tenure, age group, and comparison groups, suppressing detailed diagnostic plots.

<!-- Keywords: #JMPScriptingLanguage, #CategoricalAnalysis, #StructuredComparisonGroups, #ReportGeneration, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Categorical(
	Structured( :Employee Tenure, :Age Group, <<Specify Comparison Groups( "A/B/C/D" ) ),
	Share Chart( 0 ),
	Legend( 0 )
);
rpt = obj << report;
```

**Code Explanation**:

1. Open data table.
2. Create categorical analysis object.
3. Define structured comparison groups.
4. Disable shared chart.
5. Disable legend.
6. Generate report object.



### Example 68
> **Summary**: Creates a categorical analysis report, incorporating count missing responses and structured data from the Employee Master table.

<!-- Keywords: #JMPScriptingLanguage, #CategoricalAnalysis, #StructuredData, #ReportGeneration, #DataTableOperations -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Categorical( Count Missing Responses( 1 ), Structured( Empty(), :Floss Delimited ), Share Chart( 0 ), Legend( 0 ) );
rpt = obj << report;
```

**Code Explanation**:

1. Open table.
2. Create categorical analysis object.
3. Set count missing responses.
4. Define structured data.
5. Disable shared chart.
6. Disable legend.
7. Generate report.



### Example 69
> **Summary**: Creates a categorical analysis report, incorporating frequency and structured variables, with customized formatting for frequencies and shares.

<!-- Keywords: #JSLScriptingLanguage, #CategoricalAnalysis, #ReportGeneration, #DataTableOperations, #CustomFormatting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Categorical(
	Freq( :varnish pct ),
	Structured( Empty(), :blade mfg ),
	Frequencies Format( "Fixed Dec", 7, 3 ),
	Shares and Rates Format( "Percent", 7, 2 )
);
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Create categorical analysis.
3. Set frequency variable.
4. Define structured analysis.
5. Specify empty structure.
6. Include blade mfg variable.
7. Set frequencies format.
8. Set shares and rates format.
9. Generate report object.
10. Display report.



### Example 70
> **Summary**: Creates a categorical report to analyze structured data, incorporating comparison groups and response homogeneity testing.

<!-- Keywords: #JSLScriptingLanguage, #CategoricalReport, #StructuredDataAnalysis, #ComparisonGroups, #ResponseHomogeneity -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Categorical(
	Structured( :Brush Delimited, :Brush, <<Specify Comparison Groups( "A/B/c/d" ) ),
	Test Response Homogeneity( 1 ), 
);
rpt = obj << report;
```

**Code Explanation**:

1. Open data table.
2. Create categorical object.
3. Specify structured analysis.
4. Define comparison groups.
5. Test response homogeneity.
6. Generate report.



### Example 71
> **Summary**: Creates a categorical analysis object to visualize the relationship between age, type, country, and sex in predicting annual salary Z.

<!-- Keywords: #CategoricalAnalysis, #StructuredModeling, #ComparisonGroups, #FrequencyChart, #Legend -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Categorical(
	Structured(
		:size * :age, :type * :country + :sex,
		<<Specify Comparison Groups(
			"A/B/C/D/E/F/G/H/I/J/K/L/M/N/O/P/Q/R/S/T/U/V/W/X/Y/Z/A1/B1/C1/D1/E1,F1/G1/H1/I1/J1/K1/L1/M1/N1/O1/P1/Q1/R1/S1/T1/U1/V1/W1/X1/Y1/Z1/A2/B2/C2/D2/E2/F2/G2/H2/I2/J2,K2/L2/M2/N2/O2/P2/Q2/R2/S2/T2/U2/V2/W2/X2/Y2/Z2/A3/B3/C3/D3/E3/F3"
		)
	),
	Frequencies( 0 ),
	Compare Each Cell( 1 ),
	Share Chart( 0 ),
	Frequency Chart( 1 ),
	Legend( 0 )
);
obj << close window;
```

**Code Explanation**:

1. Open data table;
2. Create categorical analysis object.
3. Define structured model: size*age, type*country+sex.
4. Specify comparison groups.
5. Set frequencies to 0.
6. Compare each cell.
7. Disable shared chart.
8. Enable frequency chart.
9. Disable legend.
10. Close analysis window.



### Example 72
> **Summary**: Creates a categorical object in JMP, specifying ID variable 'size', multiple responses for 'country' and 'size', and suppressing detailed diagnostic plots.

<!-- Keywords: #JMPScriptingLanguage, #CategoricalObject, #DataTable, #MultipleResponses, #Legend -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Categorical(
	ID( :size ),
	Multiple Response( :country, :size ),
	Multiple Response by ID( :country, :size ),
	Multiple Delimited( :country ),
	Multiple Delimited( :size ),
	Legend( 0 )
);
obj << close window;
```

**Code Explanation**:

1. Open data table;
2. Create categorical object.
3. Set ID variable to "size".
4. Add "country" and "size" as multiple responses.
5. Add "country" and "size" as multiple responses by ID.
6. Add "country" as multiple delimited.
7. Add "size" as multiple delimited.
8. Set legend visibility to off.
9. Close the categorical object window.



### Example 73
> **Summary**: Creates two categorical analysis objects to analyze Age Group and responses, with options for excluding nonresponses and testing response homogeneity.

<!-- Keywords: #JSLScriptingLanguage, #CategoricalAnalysis, #DataVisualization, #JMP, #StatisticalModeling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Categorical(
	Title( "Original" ),
	X( :Age Group ),
	Responses( :I am working on my career ),
	Legend( 0 ),
	Test Response Homogeneity( 1 )
);
obj2 = Categorical(
	Title( "Exclude Nonresponses" ),
	Exclude Nonresponses( 1 ),
	X( :Age Group ),
	Responses( :I am working on my career ),
	Legend( 0 ),
	Test Response Homogeneity( 1 )
);
obj << close window;
obj2 << close window;
```

**Code Explanation**:

1. Open data table.
2. Create categorical analysis object.
3. Set title "Original".
4. Set X variable to Age Group.
5. Add response variable.
6. Disable legend.
7. Enable test for response homogeneity.
8. Create second categorical analysis object.
9. Set title "Exclude Nonresponses".
10. Exclude nonresponse cases.
11. Set X variable to Age Group.
12. Add response variable.
13. Disable legend.
14. Enable test for response homogeneity.
15. Close first analysis window.
16. Close second analysis window.



### Example 74
> **Summary**: Creates and configures a categorical object to analyze responses, applying local data filters and updating missing responses count.

<!-- Keywords: #JSLScriptingLanguage, #CategoricalObject, #LocalDataFilter, #MissingResponsesCount, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Categorical(
	Count Missing Responses( 1 ),
	Structured(
		Empty(),
		Aligned Responses(
			:Name( "I am working on my career" ), :Name( "I want to see the world" ), :Name( "My home needs some major improvements" ),
			:Name( "I have vast interests outside of work" ), :Name( "I want to get my debt under control" ),
			:Name( "I come from a large family" ),
		)
	),
	Legend( 0 ),
	Share Chart( 1 )
);
ldf = obj << Local Data Filter(
	Add Filter(
		columns( :Name( "I want to see the world" ) ),
		Display( :Name( "I want to see the world" ), Size( 160, 102 ), "List Display" )
	)
);
ldf = ldf << (Filter Column( :Name( "I want to see the world" ) ) << Where( :Name( "I want to see the world" ) == 2 ));
obj << Count Missing Responses( 0 );
ldf = ldf << (Filter Column( :Name( "I want to see the world" ) ) << Where( :Name( "I want to see the world" ) == 1 ));
freqs = obj << Save Frequencies;
freqs_mat = freqs << Get as matrix;
obj << close window;
```

**Code Explanation**:

1. Open data table.
2. Create categorical object.
3. Configure missing responses count.
4. Define structured analysis.
5. Disable legend display.
6. Enable shared chart.
7. Add local data filter.
8. Set filter for specific column.
9. Apply filter condition.
10. Update missing responses count.
11. Change filter condition.
12. Save frequencies.
13. Convert frequencies to matrix.
14. Close categorical object window.



### Example 75
> **Summary**: Creates and manipulates categorical analysis objects to analyze rater agreement statistics, suppressing detailed diagnostic plots.

<!-- Keywords: #JSLScriptingLanguage, #CategoricalAnalysis, #RaterAgreement, #JournalManagement, #DataManipulation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Categorical( Rater Agreement( :First Survey, :Second Survey ), Freq( :Count ) );
jrn = obj << get journal;
check_agreement1 = Contains( jrn, "Rater Agreement Statistics" );
obj << Agreement Statistic( 0 );
jrn2 = obj << get journal;
check_agreement2 = Contains( jrn2, "Rater Agreement Statistics" );
obj << close window;
obj2 = dt << Categorical( Rater Agreement( :First Survey, :Second Survey ), Freq( :Count ), Agreement Statistic( 0 ) );
jrn3 = obj2 << get journal;
check_agreement3 = Contains( jrn3, "Rater Agreement Statistics" );
obj2 << close window;
```

**Code Explanation**:

1. Open data table.
2. Create categorical analysis.
3. Retrieve analysis journal.
4. Check for agreement statistics.
5. Disable agreement statistic.
6. Retrieve updated journal.
7. Check for agreement statistics again.
8. Close analysis window.
9. Create categorical analysis with disabled statistic.
10. Retrieve final journal and check for agreement statistics.



### Example 76
> **Summary**: Creates a categorical analysis object to visualize frequency of teeth cleaning habits based on indicator groups, suppressing detailed diagnostic plots.

<!-- Keywords: #JSLScriptingLanguage, #CategoricalAnalysis, #IndicatorGroups, #DataVisualization, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Categorical(
	X( :Frequency of Teeth Cleaning ),
	Indicator Group( :Floss After Waking Up, :Floss After Meal, :Floss Before Sleep, :Floss Another Time ),
	Legend( 0 )
);
```

**Code Explanation**:

1. Open data table.
2. Create categorical analysis object.
3. Set X variable.
4. Define indicator groups.
5. Hide legend.



### Example 77
> **Summary**: Creates a categorical analysis object to predict Single Status and Job Satisfaction based on interactions between Age Group, Gender, and other variables.

<!-- Keywords: #CategoricalAnalysis, #JMPScriptingLanguage, #PredictiveModeling, #DataVisualization, #StatisticalModeling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Categorical(
	Structured( :Single Status * :Gender, :Age Group * :Job Satisfaction ),
	Share Chart( 0 ),
	Legend( 0 ),
	Test Response Homogeneity( 1 ),
	FDR Adjusted PValues( 1 )
);
```

**Code Explanation**:

1. Open table "data_table".
2. Create categorical analysis object.
3. Define structured analysis.
4. Include interactions: Single Status * Gender, Age Group * Job Satisfaction.
5. Disable shared chart.
6. Disable legend.
7. Enable test for response homogeneity.
8. Enable FDR adjusted p-values.



### Example 78
> **Summary**: Fits a standard linear regression model to predict Annual Salary Z, incorporating Gender, Length Of Service, and Performance as effects, and suppresses detailed diagnostic plots.

<!-- Keywords: #JSLScriptingLanguage, #LinearRegression, #CategoricalAnalysis, #DataVisualization, #StatisticalModeling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Categorical(
	Grouping Option( Both ),
	X( :clean, :date ),
	Multiple Response( :Failure1, :Failure2, :Failure3 ),
	Legend( 0 ),
	Count Test( 1 ),
	Homogeneity Test( 1 ),
	FDR Adjusted PValues( 1 )
);
```

**Code Explanation**:

1. Open data table.
2. Launch Categorical analysis.
3. Set grouping option.
4. Specify X variables.
5. Define multiple responses.
6. Hide legend.
7. Enable count test.
8. Enable homogeneity test.
9. Adjust for false discovery rate.
10. Display results.



### Example 79
> **Summary**: Fits a standard linear regression model to predict Annual Salary Z, incorporating Gender, Length Of Service, and Performance as effects, while suppressing detailed diagnostic plots.

<!-- Keywords: #JMPScriptingLanguage, #LinearRegression, #CategoricalAnalysis, #DataTable, #StatisticalModeling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Categorical(
	Grouping Option( Each Individually ),
	X( :Age Group, :Employee Tenure ),
	Multiple Delimited( :Brush Delimited ),
	Share Chart( 0 ),
	Legend( 0 ),
	Count Test( 1 ),
	Homogeneity Test( 1 ),
	FDR Adjusted PValues( 1 )
);
```

**Code Explanation**:

1. Open data table.
2. Perform categorical analysis.
3. Group individually.
4. Set X variables.
5. Enable multiple delimited.
6. Disable share chart.
7. Disable legend.
8. Enable count test.
9. Enable homogeneity test.
10. Enable FDR adjusted p-values.



### Example 80
> **Summary**: Creates a categorical table to analyze frequency and homogeneity tests, incorporating multiple response variables and suppressing detailed diagnostic plots.

<!-- Keywords: #JSLScripting, #CategoricalTable, #FrequencyTest, #HomogeneityTest, #MultipleResponse -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Categorical(
	Freq( :N ),
	Grouping Option( Both ),
	X( :date ),
	By( :clean ),
	Sample Size( :SampleSize ),
	ID( :ID ),
	Multiple Response by ID( :failure ),
	Legend( 0 ),
	Count Test( 1 ),
	Homogeneity Test( 1 ),
	FDR Adjusted PValues( 1 )
);
```

**Code Explanation**:

1. Open data table.
2. Set frequency variable.
3. Enable grouping option.
4. Define X-axis variable.
5. Apply by variable.
6. Specify sample size.
7. Identify ID variable.
8. Set multiple response.
9. Disable legend display.
10. Enable count test.
11. Enable homogeneity test.
12. Adjust p-values for FDR.



### Example 81
> **Summary**: Creates a categorical analysis object to visualize and analyze employee data, incorporating Age Group, Employee Tenure, Brush After Waking Up, Brush After Meal, Brush Before Sleep, and Brush Another Time as effects.

<!-- Keywords: #JSL, #CategoricalAnalysis, #DataVisualization, #EmployeeData, #StatisticalModeling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Categorical(
	X( :Age Group, :Employee Tenure ),
	Indicator Group( :Brush After Waking Up, :Brush After Meal, :Brush Before Sleep, :Brush Another Time ),
	Legend( 0 ),
	Count Test( 1 ),
	Homogeneity Test( 1 ),
	FDR Adjusted PValues( 1 )
);
```

**Code Explanation**:

1. Open table.
2. Create categorical analysis object.
3. Set X variables.
4. Define indicator groups.
5. Disable legend.
6. Enable count test.
7. Enable homogeneity test.
8. Enable FDR adjusted p-values.



### Example 82
> **Summary**: Creates a categorical object to analyze response frequencies, suppressing detailed diagnostic plots and enabling FDR adjusted p-values.

<!-- Keywords: #JSLScriptingLanguage, #CategoricalObject, #ResponseFrequencies, #FDRAdjustedP-Values, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Categorical(
	Sample Size( :SampleSize ),
	X( :clean, :date ),
	Response Frequencies( :contamination, :corrosion, :doping, :metallization, :miscellaneous, :oxide defect, :silicon defect ),
	Legend( 0 ),
	Count Test( 1 ),
	Homogeneity Test( 1 ),
	FDR Adjusted PValues( 1 )
);
```

**Code Explanation**:

1. Open data table.
2. Create categorical object.
3. Set sample size.
4. Define X variables.
5. Specify response frequencies.
6. Disable legend.
7. Enable count test.
8. Enable homogeneity test.
9. Enable FDR adjusted p-values.



### Example 83
> **Summary**: Creates a categorical object for structured analysis, incorporating Single Status and Gender as grouping options, and suppressing detailed diagnostic plots.

<!-- Keywords: #JSLScriptingLanguage, #CategoricalObject, #StructuredAnalysis, #DataVisualization, #StatisticalModeling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Categorical(
	Structured( :Single Status * :Gender, :Age Group * Brush Delimited ),
	Share Chart( 0 ),
	Legend( 0 ),
	Count Test( 1 ),
	Homogeneity Test( 1 ),
	FDR Adjusted PValues( 1 )
);
```

**Code Explanation**:

1. Open table.
2. Create categorical object.
3. Define structured analysis.
4. Disable shared chart.
5. Disable legend.
6. Enable count test.
7. Enable homogeneity test.
8. Enable FDR adjusted p-values.



### Example 84
> **Summary**: Creates two categorical plots from a data table, transforming 'sex' to titlecase and setting 'name' as responses, while suppressing detailed diagnostic plots.

<!-- Keywords: #JSLScriptingLanguage, #CategoricalPlot, #DataTransformation, #JMPScripting, #StatisticalAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Categorical(
	X( Transform Column( "Titlecase[sex]", Character, Formula( Titlecase( :sex ) ) ) ),
	Responses( :name ),
	Legend( 0 )
);
obj2 = dt << Categorical( X( :sex ), Responses( :name ) );
checkTables = Function( {obj, obj2, saveScript},
	Eval( Parse( "dt1 = obj << " || Char( saveScript ) ) );
	Eval( Parse( "dt2 = obj2 << " || Char( saveScript ) ) );
	Close( dt1, nosave );
	Close( dt2, nosave );
);
obj << close window;
obj2 << close window;
```

**Code Explanation**:

1. Open data table;
2. Create categorical plot.
3. Transform "sex" to titlecase.
4. Set "name" as response.
5. Disable legend.
6. Create second categorical plot.
7. Set "sex" as predictor.
8. Define checkTables function.
9. Save script to dt1 and dt2.
10. Close dt1 and dt2 without saving.
11. Close first categorical plot.
12. Close second categorical plot.



### Example 85
> **Summary**: Creates two categorical plots with multiple delimited options and legend suppression, utilizing JMP's Categorical platform.

<!-- Keywords: #JMPScriptingLanguage, #CategoricalPlot, #MultipleDelimited, #LegendSuppression, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Categorical(
	X( :I am working on my career ),
	Multiple Delimited( Transform Column( "Uppercase[Floss Delimited]", Character, Formula( Uppercase( :Floss Delimited ) ) ) ),
	Legend( 0 )
);
obj2 = dt << Categorical( X( :I am working on my career ), Multiple Delimited( :Floss Delimited ), Legend( 0 ) );
obj << close window;
obj2 << close window;
```

**Code Explanation**:

1. Open data table.
2. Create categorical plot.
3. Transform column to uppercase.
4. Set multiple delimited option.
5. Hide legend.
6. Create second categorical plot.
7. Set multiple delimited option.
8. Hide legend.
9. Close first plot window.
10. Close second plot window.



### Example 86
> **Summary**: Runs the transformation and visualization of employee data by standardizing Employee Tenure and centering Age Group, then creating two categorical objects for analysis.

<!-- Keywords: #JSLScriptingLanguage, #DataTransformation, #Visualization, #CategoricalAnalysis, #EmployeeData -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Categorical(
	Structured(
		Transform Column( "Standardize[Employee Tenure]", Formula( Col Standardize( :Employee Tenure ) ) ),
		Transform Column( "Center[Age Group]", Formula( :Age Group - Col Mean( :Age Group ) ) )
	),
	Share Chart( 0 ),
	Legend( 0 )
);
obj2 = dt << Categorical( Structured( :Employee Tenure, :Age Group ), Share Chart( 0 ), Legend( 0 ) );
obj << close window;
obj2 << close window;
```

**Code Explanation**:

1. Open data table.
2. Create categorical object with transformations.
3. Transform Employee Tenure column.
4. Center Age Group column.
5. Disable shared chart.
6. Disable legend.
7. Create second categorical object.
8. Include Employee Tenure and Age Group.
9. Disable shared chart.
10. Disable legend.



### Example 87
> **Summary**: Creates two categorical analysis objects to transform and analyze data, incorporating various effects and suppressing detailed diagnostic plots.

<!-- Keywords: #JSLScripting, #CategoricalAnalysis, #DataTransformation, #RegressionModel, #JMPScriptingLanguage -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Categorical(
	Structured(
		Transform Column( "Square Root[Position Tenure]", Formula( Sqrt( :Position Tenure ) ) ) *
		Transform Column( "Abs[My home needs some major improvements]", Formula( Abs( :My home needs some major improvements ) ) ) *
		:Age Group,
		Transform Column( "Abs[I am working on my career]", Formula( Abs( :I am working on my career ) ) ) *
		Transform Column( "I want to see the world^2", Formula( :I want to see the world * :I want to see the world ) ) *
		:I come from a large family
	),
	Share Chart( 0 ),
	Legend( 0 )
);
obj2 = dt << Categorical(
	Structured(
		:Position Tenure * :My home needs some major improvements * :Age Group,
		:I am working on my career * :I want to see the world * :I come from a large family
	),
	Share Chart( 0 ),
	Legend( 0 )
);
obj << close window;
obj2 << close window;
```

**Code Explanation**:

1. Open data table.
2. Create categorical analysis object.
3. Transform "Position Tenure" column.
4. Transform "My home needs some major improvements" column.
5. Include "Age Group" in analysis.
6. Transform "I am working on my career" column.
7. Square "I want to see the world" column.
8. Include "I come from a large family" in analysis.
9. Create second categorical analysis object.
10. Close both analysis windows.



### Example 88
> **Summary**: Creates a categorical object from a data table, specifying repeated measures and frequency variables for analysis.

<!-- Keywords: #JSLScriptingLanguage, #CategoricalObject, #RepeatedMeasures, #FrequencyVariable, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Categorical( Repeated Measures( :First Survey, :Second Survey ), Freq( :Count ) );
```

**Code Explanation**:

1. Open data table.
2. Create categorical object.
3. Specify repeated measures.
4. Set frequency variable.



### Example 89
> **Summary**: Creates a categorical analysis report from a structured data table, filtering results and generating a report with specified settings.

<!-- Keywords: #JSLScripting, #CategoricalAnalysis, #StructuredData, #Filtering, #Reporting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Categorical(
	Structured( :Gender * :Single Status + :Age Group, :I want to see the world + :I want to get my debt under control )
);
obj << Filter( 1 );
rpt = obj << report;
a = 0;
```

**Code Explanation**:

1. Open table "data_table".
2. Create categorical analysis.
3. Define structured categories.
4. Apply filter to analysis.
5. Generate report from analysis.
6. Initialize variable 'a' to 0.



### Example 90
> **Summary**: Creates a categorical analysis object to explore gender-based responses, utilizing structured analysis and suppressing detailed diagnostic plots.

<!-- Keywords: #JSLScriptingLanguage, #CategoricalAnalysis, #StructuredAnalysis, #GenderStudies, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Categorical(
	Structured(
		Empty(),
		:Gender,
		Aligned Responses(
			:I am working on my career, :I want to see the world, :My home needs some major improvements,
			:I have vast interests outside of work, :I want to get my debt under control, :I come from a large family
		)
	),
	Legend( 0 ),
	Test Response Homogeneity( 1 ),
	FDR Adjusted PValues( 1 ),
	Share Chart( 1 )
);
```

**Code Explanation**:

1. Open data table.
2. Create categorical analysis object.
3. Define structured analysis.
4. Include empty structure.
5. Add gender variable.
6. Align response variables.
7. Specify response variables.
8. Disable legend display.
9. Enable response homogeneity test.
10. Use FDR adjusted p-values.
11. Enable share chart option.



### Example 91
> **Summary**: Creates categorical analysis objects to visualize and analyze employee data, incorporating titlecase transformation for the 'sex' column and suppressing detailed diagnostic plots.

<!-- Keywords: #JMPScriptingLanguage, #CategoricalAnalysis, #DataVisualization, #EmployeeData, #TitlecaseTransformation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Categorical(
	X( Transform Column( "Titlecase[sex]", Character, Formula( Titlecase( :sex ) ) ) ),
	Responses( :name ),
	Legend( 0 )
);
obj2 = dt << Categorical( X( :sex ), Responses( :name ) );
```

**Code Explanation**:

1. Open data table;
2. Create categorical analysis object.
3. Transform sex column to titlecase.
4. Set name as response variable.
5. Hide legend.
6. Create second categorical analysis object.
7. Use original sex column.
8. Set name as response variable again.



### Example 92
> **Summary**: Creates a categorical analysis object to compare each cell in a structured data table, incorporating age and sex variables, and suppresses detailed diagnostic plots.

<!-- Keywords: #CategoricalAnalysis, #StructuredData, #CellComparison, #PlotSuppression, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Categorical(
	Structured( :age, :sex ),
	Compare Each Cell( 1 ),
	Share Chart( 0 ),
	Frequency Chart( 1 ),
	Legend( 0 ),
	SendToReport( Dispatch( {"sex By age"}, "Compare Each Cell - Details", OutlineBox, {Close( 0 )} ) )
);
```

**Code Explanation**:

1. Open data table;
2. Create categorical analysis object.
3. Define structured variables: age, sex.
4. Compare each cell with value 1.
5. Do not share chart.
6. Generate frequency chart.
7. Hide legend.
8. Send report dispatch.
9. Close "Compare Each Cell - Details" outline box.



### Example 93
> **Summary**: Creates a categorical analysis object to compare each cell in a structured data table, suppressing detailed diagnostic plots.

<!-- Keywords: #JSLScripting, #CategoricalAnalysis, #StructuredData, #CellComparison, #DiagnosticPlotSuppression -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Categorical( Structured( :Employee Tenure, :Job Satisfaction ), Legend( 0 ) );
obj << Compare Each Cell( 1 );
```

**Code Explanation**:

1. Open data table.
2. Create categorical analysis object.
3. Define structured variables.
4. Disable legend display.
5. Compare each cell.



### Example 94
> **Summary**: Creates a categorical object with multiple delimited failures, ID column, and X variables for data analysis.

<!-- Keywords: #JSLScriptingLanguage, #CategoricalObject, #DataAnalysis, #IDColumn, #XVariables -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Categorical( Multiple Delimited( :failureS ), ID( :ID ), X( :clean, :date ) );
obj << Compare Each Cell( 1 );
```

**Code Explanation**:

1. Open data table;
2. Assign dataset to variable `dt`.
3. Create categorical object with multiple delimited failures.
4. Set ID column to :ID.
5. Set X variables to :clean and :date.
6. Assign categorical object to variable `obj`.
7. Compare each cell with threshold 1.



### Example 95
> **Summary**: Creates and analyzes contingency tables from a data table, including filtering out rows and renaming tables.

<!-- Keywords: #JSLScriptingLanguage, #ContingencyTableAnalysis, #DataFiltering, #TableRenaming, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt[1, 3 :: 9] = 0;
obj1 = dt << Categorical(
	Title( "Original" ),
	Sample Size( :SampleSize ),
	X( :clean, :date ),
	Response Frequencies( :contamination, :corrosion, :doping, :metallization, :miscellaneous, :oxide defect, :silicon defect ),
	Legend( 0 ),
	Count Test( 1 ),
	Homogeneity Test( 1 )
);
dt2 = dt << Subset( All Rows( 1 ), All Columns( 1 ) );
dt2 << Select Rows( 1 );
dt2 << exclude;
obj4 = dt2 << Categorical(
	Title( "Exclude Rows" ),
	Sample Size( :SampleSize ),
	X( :clean, :date ),
	Response Frequencies( :contamination, :corrosion, :doping, :metallization, :miscellaneous, :oxide defect, :silicon defect ),
	Legend( 0 ),
	Count Test( 1 ),
	Homogeneity Test( 1 )
);
tab1 = obj1 << Save Contingency Table;
tab1 << Set Name( "Contingency Table - Original Data" );
tab2 = obj4 << Save Contingency Table;
tab2 << Set Name( "Contingency Table - Excluded One Row" );
mat1 = tab1 << Get as Matrix;
mat2 = tab2 << Get as Matrix;
obj1 << close window;
obj4 << close window;
Close( tab1, nosave );
Close( tab2, nosave );
```

**Code Explanation**:

1. Open data table.
2. Set selected columns to zero.
3. Create categorical analysis object.
4. Duplicate data table.
5. Select first row in duplicate.
6. Exclude selected row.
7. Create categorical analysis object on excluded data.
8. Save contingency table from original analysis.
9. Rename original contingency table.
10. Save contingency table from excluded analysis.
11. Rename excluded contingency table.
12. Extract matrix from original table.
13. Extract matrix from excluded table.
14. Close original analysis window.
15. Close excluded analysis window.
16. Close original contingency table without saving.
17. Close excluded contingency table without saving.



### Example 96
> **Summary**: Creates and analyzes contingency tables for original and excluded data, utilizing Categorical and Subset operations in JMP.

<!-- Keywords: #JMPScriptingLanguage, #CategoricalAnalysis, #DataSubset, #ContingencyTable, #JSLCode -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt[1, 3 :: 9] = 0;
obj1 = dt << Categorical(
	Title( "Original" ),
	Sample Size( :SampleSize ),
	X( :clean, :date ),
	Response Frequencies( :contamination, :corrosion, :doping, :metallization, :miscellaneous, :oxide defect, :silicon defect ),
	Legend( 0 ),
	Count Test( 1 ),
	Homogeneity Test( 1 )
);
dt2 = dt << Subset( All Rows( 1 ), All Columns( 1 ) );
dt2 << Select Rows( 1 );
dt2 << exclude;
obj4 = dt2 << Categorical(
	Title( "Exclude Rows" ),
	Sample Size( :SampleSize ),
	X( :clean, :date ),
	Response Frequencies( :contamination, :corrosion, :doping, :metallization, :miscellaneous, :oxide defect, :silicon defect ),
	Legend( 0 ),
	Count Test( 1 ),
	Homogeneity Test( 1 )
);
tab1 = obj1 << Save Contingency Table;
tab1 << Set Name( "Contingency Table - Original Data" );
tab2 = obj4 << Save Contingency Table;
tab2 << Set Name( "Contingency Table - Excluded One Row" );
mat1 = tab1 << Get as Matrix;
mat2 = tab2 << Get as Matrix;
obj1 << close window;
obj4 << close window;
```

**Code Explanation**:

1. Open data table.
2. Set specific cells to zero.
3. Create categorical analysis for original data.
4. Subset all rows and columns.
5. Exclude first row from subset.
6. Create categorical analysis for excluded data.
7. Save contingency table for original data.
8. Rename original contingency table.
9. Save contingency table for excluded data.
10. Rename excluded contingency table.



### Example 97
> **Summary**: Creates a categorical object to analyze multiple responses and hide nonsignificant results, utilizing the Categorical platform in JMP.

<!-- Keywords: #JMPScriptingLanguage, #Categorical, #MultipleResponses, #SignificanceTesting, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Categorical( Multiple Response( :country, :size ), X( :sex, :marital status ) );
obj << Count Test( 1 );
obj << Hide Nonsignificant( 1 );
```

**Code Explanation**:

1. Open data table;
2. Create categorical object.
3. Set multiple responses.
4. Add predictors.
5. Run count test.
6. Hide nonsignificant results.



### Example 98
> **Summary**: Creates and analyzes contingency tables for failure modes, incorporating multiple response by ID and supercategories, with frequency and sample size columns.

<!-- Keywords: #CategoricalAnalysis, #ContingencyTables, #FailureModes, #MultipleResponse, #JSL -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Categorical(
	Multiple Response by ID( :failure ),
	Supercategories(
		:failure(
			{Group( "First Three", {"contamination", "corrosion", "doping"} ), Group(
				"Last Few",
				{"metallization", "miscellaneous", "oxide defect", "silicon defect"}
			)}
		),
	),
	Freq( :N ),
	Sample Size( :SampleSize ),
	ID( :ID ),
	X( :clean, :date )
);
obj << Rate Per Case Responding( 1 );
obj2 = dt << Categorical( Multiple Response by ID( :failure ), Freq( :N ), Sample Size( :SampleSize ), ID( :ID ), X( :clean, :date ) );
dtCont1 = obj << Save Contingency Table;
dtCont2 = obj2 << Save Contingency Table;
selRows = dtCont1 << Select Where( :failure == "First Three" | :failure == "Last Few" ) << Invert Row Selection << Get Selected Rows;
obj << close window;
obj2 << close window;
```

**Code Explanation**:

1. Open data table.
2. Create categorical analysis object.
3. Define multiple response by ID.
4. Define supercategories for failure.
5. Set frequency column.
6. Set sample size column.
7. Set ID column.
8. Include clean and date variables.
9. Set rate per case responding.
10. Create second categorical analysis object.
11. Save first contingency table.
12. Save second contingency table.
13. Select specific rows in first table.
14. Invert row selection.
15. Get selected rows.
16. Close first analysis window.
17. Close second analysis window.



### Example 99
> **Summary**: Analyzes and creates reports for categorical data by opening a JMP data table, running a categorical analysis, retrieving the report object, extracting journal information, and defining comparison oracles.

<!-- Keywords: #JMPScriptingLanguage, #CategoricalAnalysis, #DataTableManagement, #ReportGeneration, #ComparisonOracle -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Categorical( Structured( :Employee Tenure, :Age Group ), Compare Each Cell( 1 ), Compare Each Cell FDR( 1 ), );
rpt = obj << Report;
jrn = rpt[Alignment Grid Box( 1 )] << Get Journal;
comparisons = (rpt[Alignment Grid Box( 1 )] << Get Gridcell Data( "Comparisons" ))[1]["Data"]["Comparisons"];
comparisonsFDR = (rpt[Alignment Grid Box( 1 )] << Get Gridcell Data( "Comparisons FDR" ))[1]["Data"]["Comparisons FDR"];
compOracle = {"B,C,D", "C,D", "", "", "", "", "", "C,D", "a,C,D", "D", "a,D", "a", "", "a", "*", "*", "A,b,D*", "A,b,D*", "A*", "A,B*", "*",
"*", "*", "*", "*", "A,B*", "A,B*", "A,B,C*"};
compFDROracle = {"B,C,D", "C,D", "", "", "", "", "", "C,D", "C,D", "D", "D", "", "", "", "*", "*", "A,D*", "A,D*", "A*", "A,B*", "*", "*",
"*", "*", "*", "A,B*", "A,B*", "A,B,C*"};
obj << close window;
```

**Code Explanation**:

1. Open data table.
2. Run categorical analysis.
3. Retrieve report object.
4. Extract journal from report.
5. Get comparisons data.
6. Get FDR comparisons data.
7. Define comparison oracle.
8. Define FDR comparison oracle.
9. Close analysis window.



### Example 100
> **Summary**: Creates and analyzes categorical comparisons in a JMP report, extracting data from grid boxes to facilitate further exploration.

<!-- Keywords: #JMPScriptingLanguage, #CategoricalAnalysis, #GridBoxDataExtraction, #ReportAutomation, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Categorical(
	Structured(
		:Brush Delimited + :Floss Delimited, :Frequency of Teeth Cleaning + :Number of Fillings,
		<<Specify Comparison Groups( "A/B/C/D/E/F/G/H" )
	),
	Legend( 0 ),
	Compare Each Cell( 1 )
);
rpt = obj << report;
compTable1 = (rpt[Alignment Grid Box( 1 )] << Get Gridcell Data( "Comparisons" ))[1]["Data"]["Comparisons"];
compTable2 = (rpt[Alignment Grid Box( 1 )] << Get Gridcell Data( "Comparisons" ))[2]["Data"]["Comparisons"];
compTable3 = (rpt[Alignment Grid Box( 1 )] << Get Gridcell Data( "Comparisons" ))[3]["Data"]["Comparisons"];
compTable4 = (rpt[Alignment Grid Box( 1 )] << Get Gridcell Data( "Comparisons" ))[4]["Data"]["Comparisons"];
obj << close window;
```

**Code Explanation**:

1. Open data table.
2. Create categorical analysis object.
3. Define structured comparison groups.
4. Disable legend display.
5. Enable cell comparison.
6. Retrieve analysis report.
7. Extract comparisons data from grid box 1.
8. Extract comparisons data from grid box 2.
9. Extract comparisons data from grid box 3.
10. Extract comparisons data from grid box 4.
11. Close analysis window.



### Example 101
> **Summary**: Analyzes and creates reports for categorical data, generating expected letters and compare means for specified grid cells.

<!-- Keywords: #CategoricalAnalysis, #JSLScripting, #DataReporting, #GridCellManagement, #CompareMeans -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Categorical(
	Structured( :Position Tenure + :Age Group, :I am working on my career + :Brush ),
	Mean Score( 1 ),
	Mean Score Comparisons( 1 )
);
rpt = obj << report;
exp_Letter = {"A", "B", "C", "D", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "E", "F", "G", "H", "I", "J", "K"};
GridCellBox_Num = [10, 20, 30, 40];
exp_CompareMeans = {};
For( i = 1, i <= 2, i++,
	journal = Parse(
		rpt["I am working on my career+Brush By Position Tenure+Age Group", GridCellBox( GridCellBox_Num[i] )] << get journal
	);
	expr = Extract Expr( journal, strings( Wild(), Wild(), Wild(), Wild() ) );
	For( j = 1, j <= 4, j++,
		exp_CompareMeans = Insert( exp_CompareMeans, Arg( expr, j ) )
	);
);
For( i = 3, i <= 4, i++,
	journal = Parse(
		rpt["I am working on my career+Brush By Position Tenure+Age Group", GridCellBox( GridCellBox_Num[i] )] << get journal
	);
	expr = Extract Expr( journal, strings( Wild(), Wild(), Wild(), Wild(), Wild(), Wild(), Wild() ) );
	For( j = 1, j <= 7, j++,
		exp_CompareMeans = Insert( exp_CompareMeans, Arg( expr, j ) )
	);
);
dt1 = obj << Save Mean Scores;
act_Letter = dt1:"Letter" << get values;
act_CompareMeans = dt1:"Compare Means" << get values;
```

**Code Explanation**:

1. Open data table.
2. Perform categorical analysis.
3. Generate report object.
4. Define expected letters.
5. Define grid cell numbers.
6. Initialize compare means list.
7. Loop through grid cells 1-2.
8. Parse journal from report.
9. Extract expressions from journal.
10. Insert extracted expressions into compare means list.
11. Loop through grid cells 3-4.
12. Parse journal from report.
13. Extract expressions from journal.
14. Insert extracted expressions into compare means list.
15. Save mean scores to new table.
16. Retrieve actual letters from new table.
17. Retrieve actual compare means from new table.



### Example 102
> **Summary**: Creates a categorical analysis object to explore structured responses and save frequencies, utilizing JMP's Categorical platform.

<!-- Keywords: #JMPScriptingLanguage, #CategoricalAnalysis, #StructuredResponses, #FrequencyTables, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Categorical(
	Structured(
		:Age Group,
		Empty(),
		Aligned Responses(
			:I am working on my career, :I want to see the world, :My home needs some major improvements,
			:I have vast interests outside of work, :I want to get my debt under control, :I come from a large family
		)
	),
	Legend( 0 ),
	Share Chart( 0 ),
	Mean Score( 1 )
);
dtFreq = obj << Save Frequencies;
expectedSampleGroups = {"I am working on my career, All", "I want to see the world, All", "My home needs some major improvements, All",
"I have vast interests outside of work, All", "I want to get my debt under control, All", "I come from a large family, All"};
obj << close window;
```

**Code Explanation**:

1. Open data table.
2. Create categorical analysis object.
3. Define structured categorical variables.
4. Set empty group.
5. Align response variables.
6. Disable legend.
7. Disable shared chart.
8. Enable mean score display.
9. Save frequencies to new table.
10. Close categorical analysis window.



### Example 103
> **Summary**: Creates and analyzes categorical data from a structured dataset, generating frequency tables and expected sample groups.

<!-- Keywords: #JSLScripting, #CategoricalAnalysis, #FrequencyTables, #ExpectedSampleGroups, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Categorical(
	Structured(
		:"What is your gender?"n,
		Empty(),
		Aligned Responses( :"I like the color blue."n, :"I like the color red."n, :"I like the color orange."n )
	),
	Legend( 0 ),
	Share Chart( 0 ),
	Mean Score( 1 )
);
dtFreq = obj << Save Frequencies;
expectedSampleGroups = {"I like the color blue., All", "I like the color red., All", "I like the color orange., All"};
obj << close window;
Close( dtFreq, nosave );
obj = dt << Categorical(
	Structured(
		Empty(),
		:"What is your gender?"n,
		Aligned Responses( :"I like the color blue."n, :"I like the color red."n, :"I like the color orange."n )
	),
	Legend( 0 ),
	Share Chart( 0 ),
	Mean Score( 1 )
);
dtFreq = obj << Save Frequencies;
expectedSampleGroups = {"I like the color blue., What is your gender? = Female", "I like the color blue., What is your gender? = Male",
"I like the color red., What is your gender? = Female", "I like the color red., What is your gender? = Male",
"I like the color orange., What is your gender? = Female", "I like the color orange., What is your gender? = Male"};
obj << close window;
Close( dtFreq, nosave );
obj = dt << Categorical(
	Structured(
		Empty(),
		Empty(),
		Aligned Responses( :"I like the color blue."n, :"I like the color red."n, :"I like the color orange."n )
	),
	Legend( 0 ),
	Share Chart( 0 ),
	Mean Score( 1 )
);
dtFreq = obj << Save Frequencies;
expectedSampleGroups = {"I like the color blue., All", "I like the color red., All", "I like the color orange., All"};
obj << close window;
```

**Code Explanation**:

1. Open data table.
2. Create categorical analysis object.
3. Save frequencies to new table.
4. Define expected sample groups.
5. Close categorical analysis window.
6. Close frequency table without saving.
7. Create another categorical analysis object.
8. Save frequencies to new table.
9. Define expected sample groups.
10. Close categorical analysis window.



### Example 104
> **Summary**: Analyze employee tenure and age group to generate a report with mean score comparisons, suppressing detailed diagnostic plots.

<!-- Keywords: #JSLScriptingLanguage, #CategoricalAnalysis, #MeanScoreComparisons, #ReportGeneration, #DataTable -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Categorical( Structured( :Employee Tenure, :Age Group ), Mean Score( 1 ), Mean Score Comparisons( 1 ) );
rpt = obj << report;
journal = Parse( rpt["Age Group By Employee Tenure", GridCellBox( 10 )] << get journal );
color = Arg( Extract Expr( journal, coloruse( Wild() ) ) );
```

**Code Explanation**:

1. Open data table;
2. Perform categorical analysis.
3. Structure analysis by "Employee Tenure" and "Age Group".
4. Calculate mean score for each group.
5. Compare mean scores between groups.
6. Retrieve analysis report.
7. Parse report for specific grid cell.
8. Extract journal from grid cell.
9. Find color usage expression in journal.
10. Assign extracted color to variable.



### Example 105
> **Summary**: Creates a categorical analysis report, incorporating structured variables and mean score comparisons to visualize employee tenure and age group data.

<!-- Keywords: #JMPScriptingLanguage, #CategoricalAnalysis, #StructuredVariables, #MeanScoreComparisons, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Categorical( Structured( :Employee Tenure, :Age Group ), Mean Score( 1 ), Mean Score Comparisons( 1 ) );
obj << Crosstab Transposed( 1 );
rpt = obj << report;
journal = Parse( rpt["Age Group By Employee Tenure", GridCellBox( 10 )] << get journal );
color = Arg( Extract Expr( journal, coloruse( Wild() ) ) );
```

**Code Explanation**:

1. Open table.
2. Create categorical analysis.
3. Set structured variables.
4. Enable mean score.
5. Enable mean score comparisons.
6. Transpose crosstab.
7. Generate report.
8. Extract specific grid cell.
9. Get journal from grid cell.
10. Extract color usage expression.



### Example 106
> **Summary**: Creates a categorical analysis object to visualize Age Group by Employee Tenure, with additional features for mean score and comparisons.

<!-- Keywords: #JSLScriptingLanguage, #CategoricalAnalysis, #DataVisualization, #MeanScoreComparisons, #EmployeeTenure -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Categorical( X( :Employee Tenure ), Responses( :Age Group ), Share Chart( 1 ), Mean Score( 1 ), Mean Score Comparisons( 1 ) );
rpt = obj << report;
journal = Parse( rpt["Age Group By Employee Tenure", GridCellBox( 10 )] << get journal );
color = Arg( Extract Expr( journal, coloruse( Wild() ) ) );
```

**Code Explanation**:

1. Open data table.
2. Create categorical analysis object.
3. Set X variable to "Employee Tenure".
4. Set response variable to "Age Group".
5. Enable Share Chart option.
6. Enable Mean Score option.
7. Enable Mean Score Comparisons option.
8. Generate report from analysis object.
9. Extract specific grid cell content.
10. Parse and extract color usage expression.



### Example 107
> **Summary**: Creates a categorical analysis object from a data table, defining oracle titles and suppressing detailed diagnostic plots.

<!-- Keywords: #JSLScriptingLanguage, #CategoricalAnalysis, #DataTableManipulation, #OracleTitles, #DiagnosticPlots -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Categorical( Multiple Delimited( :failureS ), ID( :ID ), X( :clean, :date ) );
oracleTitles = {"Categorical", "Multiple Delimited(failures) By clean*date", "Test Each Response, Poisson", "clean, date, failures",
"Test Each Response, Binomial", "clean, date, failures", "Compare Each Cell - Details", "clean, date, failures"};
oracleTitles = {"Categorical", "Multiple Delimited(failures) By clean", "Test Each Response, Poisson", "clean, failures",
"Test Each Response, Binomial", "clean, failures", "Compare Each Cell - Details", "clean, failures", "Multiple Delimited(failures) By date",
"Test Each Response, Poisson", "date, failures", "Test Each Response, Binomial", "date, failures", "Compare Each Cell - Details",
"date, failures"};
oracleTitles = {"Categorical", "Multiple Delimited(failures) By clean*date", "Test Each Response, Poisson", "clean, date, failures",
"Test Each Response, Binomial", "clean, date, failures", "Compare Each Cell - Details", "clean, date, failures",
"Multiple Delimited(failures) By clean", "Test Each Response, Poisson", "clean, failures", "Test Each Response, Binomial",
"clean, failures", "Compare Each Cell - Details", "clean, failures", "Multiple Delimited(failures) By date", "Test Each Response, Poisson",
"date, failures", "Test Each Response, Binomial", "date, failures", "Compare Each Cell - Details", "date, failures"};
oracleTitles = {"Categorical", "Multiple Delimited(failures) By clean*date", "Test Each Response, Poisson", "clean, date, failures",
"Test Each Response, Binomial", "clean, date, failures", "Compare Each Cell - Details", "clean, date, failures"};
```

**Code Explanation**:

1. Open data table;
2. Create categorical analysis object.
3. Define oracle titles array.
4. Update oracle titles array.
5. Update oracle titles array again.
6. Update oracle titles array once more.
7. Set final oracle titles array.



### Example 108
> **Summary**: Creates two categorical analysis objects to analyze and format data for further exploration, utilizing frequency variables, structured analyses, and custom formatting options.

<!-- Keywords: #JSLScriptingLanguage, #CategoricalAnalysis, #DataFormatting, #StructuredAnalysis, #FrequencyVariables -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Categorical(
	Freq( :varnish pct ),
	Structured( Empty(), :blade mfg, Empty() ),
	Format Elements( Shares and Rates( Percent, 7, 2 ), Frequencies( Fixed Dec, 7, 3 ) )
);
obj2 = dt << Categorical(
	Freq( :varnish pct ),
	Structured( Empty(), :blade mfg ),
	Frequencies Format( "Fixed Dec", 7, 3 ),
	Shares and Rates Format( "Percent", 7, 2 )
);
```

**Code Explanation**:

1. Open data table.
2. Create categorical analysis object.
3. Set frequency variable.
4. Define structured analysis.
5. Format shares and rates.
6. Format frequencies.
7. Create second categorical analysis object.
8. Set frequency variable.
9. Define structured analysis.
10. Format frequencies and shares/rates.



### Example 109
> **Summary**: Creates a categorical analysis object to explore relationships between country, size, sex, and marital status in a dataset.

<!-- Keywords: #JMPScriptingLanguage, #CategoricalAnalysis, #DataExploration, #StructuredAnalysis, #TestResponseHomogeneity -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Categorical(
	Include Responses Not in Data( 1 ),
	Structured( :country * :size, :sex * :marital status ),
	Share Of Responses( 0 ),
	Compare Each Cell( 1 ),
	Share Chart( 0 ),
	Legend( 0 ),
	Test Response Homogeneity( 1 ),
	Total Responses( 0 )
);
```

**Code Explanation**:

1. Open data table;
2. Create categorical analysis object.
3. Include responses not in data.
4. Define structured analysis: country*size, sex*marital status.
5. Disable share of responses.
6. Enable compare each cell.
7. Disable share chart.
8. Disable legend.
9. Enable test response homogeneity.
10. Disable total responses.



### Example 110
> **Summary**: Analyze employee tenure and age, generating a report that compares mean scores for various responses.

<!-- Keywords: #JSLScriptingLanguage, #CategoricalAnalysis, #MeanScoreComparisons, #ReportGeneration, #DataTableManipulation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Categorical( Structured( :Employee Tenure, :Age Group ), Mean Score( 1 ), Mean Score Comparisons( 1 ) );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table.
2. Perform categorical analysis.
3. Structure analysis by tenure and age.
4. Calculate mean scores.
5. Compare mean scores.
6. Generate analysis report.



### Example 111
> **Summary**: Analyze categorical data by structuring responses based on gender and saving frequency results, while suppressing detailed diagnostic plots.

<!-- Keywords: #JSLScriptingLanguage, #CategoricalAnalysis, #DataTableManipulation, #FrequencyResults, #DiagnosticPlots -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Categorical(
	Structured(
		:"What is your gender?"n,
		Empty(),
		Aligned Responses( :"I like the color blue."n, :"I like the color red."n, :"I like the color orange."n )
	),
	Legend( 0 ),
	Share Chart( 0 ),
	Mean Score( 1 )
);
dtFreq = obj << Save Frequencies;
expectedSampleGroups = {"I like the color blue., All", "I like the color red., All", "I like the color orange., All"};
obj << close window;
```

**Code Explanation**:

1. Open data table.
2. Run categorical analysis.
3. Structure analysis by gender.
4. Align responses for color preferences.
5. Disable legend display.
6. Disable shared chart option.
7. Enable mean score calculation.
8. Save frequency results.
9. Define expected sample groups.
10. Close analysis window.



### Example 112
> **Summary**: Analyze and visualize employee tenure and age group data, generating a report with mean score comparisons and color-coded journal extraction.

<!-- Keywords: #JSLScripting, #CategoricalAnalysis, #MeanScoreComparisons, #JournalExtraction, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Categorical( Structured( :Employee Tenure, :Age Group ), Mean Score( 1 ), Mean Score Comparisons( 1 ) );
rpt = obj << report;
journal = Parse( rpt["Age Group By Employee Tenure", GridCellBox( 10 )] << get journal );
color = Arg( Extract Expr( journal, coloruse( Wild() ) ) );
dt = Open("data_table.jmp");
obj = dt << Categorical( Structured( :Employee Tenure, :Age Group ), Mean Score( 1 ), Mean Score Comparisons( 1 ) );
obj << Crosstab Transposed( 1 );
rpt = obj << report;
journal = Parse( rpt["Age Group By Employee Tenure", GridCellBox( 10 )] << get journal );
color = Arg( Extract Expr( journal, coloruse( Wild() ) ) );
dt = Open("data_table.jmp");
obj = dt << Categorical( X( :Employee Tenure ), Responses( :Age Group ), Share Chart( 1 ), Mean Score( 1 ), Mean Score Comparisons( 1 ) );
rpt = obj << report;
journal = Parse( rpt["Age Group By Employee Tenure", GridCellBox( 10 )] << get journal );
color = Arg( Extract Expr( journal, coloruse( Wild() ) ) );
```

**Code Explanation**:

1. Open data table;
2. Create categorical analysis.
3. Generate mean score report.
4. Extract journal from report.
5. Parse journal for color usage.
6. Open data table;
7. Create categorical analysis.
8. Enable crosstab transposition.
9. Generate mean score report.
10. Extract journal from report.



### Example 113
> **Summary**: Creates two categorical analysis objects to analyze employee data, incorporating structured analysis with interaction and various formatting options.

<!-- Keywords: #JSLScriptingLanguage, #CategoricalAnalysis, #StructuredAnalysis, #DataVisualization, #EmployeeAnalytics -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Categorical(
	Structured( :Position Tenure * :Gender, :I am working on my career + :Brush ),
	Share Confidence Interval( 1 ),
	Mean Score( 1 ),
	Std Dev Score( 1 ),
	Format Elements( Shares and Rates( Percent, 7, 2 ), Frequencies( Fixed Dec, 7, 3 ) ),
	Means Decimals( 2 )
);
obj2 = dt << Categorical(
	Structured( :Position Tenure * :Gender, :I am working on my career + :Brush ),
	Share Confidence Interval( 1 ),
	Mean Score( 1 ),
	Std Dev Score( 1 ),
	Shares and Rates Format( "Percent", 7, 2 ),
	Frequencies Format( "Fixed Dec", 7, 3 ),
	Means Format( "Fixed Dec", 7, 2 )
);
cellItemsOld = cellItemsNew = {};
```

**Code Explanation**:

1. Open data table;
2. Create categorical analysis object.
3. Define structured analysis with interaction.
4. Enable share confidence interval.
5. Enable mean score calculation.
6. Enable standard deviation score calculation.
7. Set format for shares and rates.
8. Set format for frequencies.
9. Set means decimals to 2.
10. Repeat steps 2-9 for second analysis object.



### Example 114
> **Summary**: Creates a new table 'S1053610' with nominal, ordinal, and continuous columns, and calculates relative risk for categorical analysis.

<!-- Keywords: #JSLScriptingLanguage, #CategoricalAnalysis, #RelativeRisk, #TableCreation, #DataManipulation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Categorical( Freq( :Count ), Structured( :First Survey, :Second Survey ) );
obj << Relative Risk( 1, {"Approve"}, {"Approve"} );
Close( dt, No save );
dt = New Table( "S1053610",
	Add Rows( 36 ),
	New Column( "Cheese",
		Character( 1 ),
		"Nominal",
		Set Values(
			{"A", "A", "A", "A", "A", "A", "A", "A", "A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "C", "C", "C", "C", "C", "C", "C",
			"C", "C", "D", "D", "D", "D", "D", "D", "D", "D", "D"}
		)
	),
	New Column( "Response",
		Numeric,
		"Ordinal",
		Format( "Fixed Dec", 5, 0 ),
		Set Property( "Supercategories", {Group( "Top Two", {8, 9}, Hide ), All, Mean, Std Dev} ),
		Set Values( [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9] )
	),
	New Column( "Count",
		Numeric,
		"Continuous",
		Format( "Fixed Dec", 5, 0 ),
		Preselect Role( Freq ),
		Set Values( [0, 0, 1, 7, 8, 8, 19, 8, 1, 6, 9, 12, 11, 7, 6, 1, 0, 0, 1, 1, 6, 8, 23, 7, 5, 1, 0, 0, 0, 0, 1, 3, 7, 14, 16, 11] )
	),
	New Column( "Response nosuper",
		Numeric,
		"Ordinal",
		Format( "Fixed Dec", 5, 0 ),
		Set Values( [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9] )
	)
);
obj = dt << Categorical( Freq( :Count ), Structured( :Cheese, :Response nosuper * :Response ), Include Responses Not in Data( 1 ) );
rpt = obj << report;
```

**Code Explanation**:

1. Open table "data_table".
2. Create categorical analysis object.
3. Calculate relative risk for "Approve".
4. Close table without saving.
5. Create new table "S1053610".
6. Add 36 rows to new table.
7. Add "Cheese" column with nominal data.
8. Add "Response" column with ordinal data.
9. Add "Count" column with continuous data.
10. Add "Response nosuper" column with ordinal data.



### Example 115
> **Summary**: Calculates relative risk between 'Approve' responses in First Survey and Second Survey, using categorical data structured by First Survey and Second Survey.

<!-- Keywords: #Categorical, #RelativeRisk, #StructuredData, #SurveyAnalysis, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Categorical( Freq( :Count ), Structured( :First Survey, :Second Survey ) );
obj << Relative Risk( 1, {"Approve"}, {"Approve"} );
```

**Code Explanation**:

1. Open data table;
2. Create categorical object.
3. Set frequency to :Count.
4. Structure by First Survey, Second Survey.
5. Calculate relative risk.
6. Compare "Approve" from both surveys.



### Example 116
> **Summary**: Creates and creates a report for a categorical analysis for Age Group, utilizing structured variables, alpha level, base count minimum, and base count warning.

<!-- Keywords: #JSLScriptingLanguage, #CategoricalAnalysis, #StructuredVariables, #AlphaLevel, #BaseCount -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Categorical(
	Structured( :Age Group, :I am working on my career, ),
	Uppercase Alpha Level( 0.03 ),
	Base Count Minimum( 44 ),
	Base Count Warning( 60 ),
	Compare Each Cell( 1 )
);
obj << savescripttodatatable;
rpt = obj << report;
obj2 = dt << runscript( "Categorical" );
rpt2 = obj2 << report;
```

**Code Explanation**:

1. Open table.
2. Create categorical analysis.
3. Set structured variables.
4. Define alpha level.
5. Set base count minimum.
6. Set base count warning.
7. Compare each cell.
8. Save script to data table.
9. Generate report.
10. Run script again.
11. Generate second report.



### Example 117
> **Summary**: Creates a categorical report to analyze structured data, incorporating gender and age group as effects.

<!-- Keywords: #JSLScripting, #CategoricalReport, #StructuredDataAnalysis, #GenderEffects, #AgeGroupAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Categorical(
	Structured( :Gender * :Single Status + :Age Group, :I want to see the world + :I want to get my debt under control ),
	Compare Each Cell( 1 )
);
rpt = obj << report;
```

**Code Explanation**:

1. Open data table.
2. Create categorical object.
3. Define structured analysis.
4. Compare each cell.
5. Generate report.



### Example 118
> **Summary**: Creates a categorical analysis to predict career advancement based on gender, with interactive filtering and relative risk calculations.

<!-- Keywords: #CategoricalAnalysis, #RelativeRisk, #InteractiveFiltering, #JSLScripting, #CareerAdvancement -->

**Code**:
```jsl
dt = Open("data_table.jmp");
cat = Categorical(
	X( :Gender ),
	Responses( :I am working on my career ),
	Legend( 0 ),
	Relative Risk( 1, {"Agree"}, {"M"} ),
	Local Data Filter( Add Filter( columns( :I want to see the world ), Where( :I want to see the world == 1 ) ) )
);
AgreeRR = [1.01029988150579 0.869976221793149 1.17325718220986];
NoFilterRR = [1.0302066772655 0.894378426763271 1.18666301212489];
DisagreeRR = [1.23076923076923 0.792372325175638 1.91171858390248];
For( i = 1, i <= 10, i++,
	cat << Remove Local Data Filter();
	u = Random Uniform( 1 );
	If(
		u < 0.33333333333333,
			cat << Local Data Filter( Add Filter( columns( :I want to see the world ), Where( :I want to see the world == 1 ) ) ),
		u >= 0.33333333333333 & u < 0.66666666666666,
			cat << Local Data Filter( Add Filter( columns( :I want to see the world ), Where( :I want to see the world == 2 ) ) ), 
	);
);
```

**Code Explanation**:

1. Open data table.
2. Create categorical analysis.
3. Set X variable.
4. Set response variable.
5. Hide legend.
6. Calculate relative risk.
7. Add local data filter.
8. Define AgreeRR array.
9. Define NoFilterRR array.
10. Define DisagreeRR array.



### Example 119
> **Summary**: Creates a categorical object to analyze and visualize the relationship between Gender, Age Group, and Single Status in a data table.

<!-- Keywords: #JMPScriptingLanguage, #CategoricalObject, #DataVisualization, #StatisticalAnalysis, #InteractiveFiltering -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Categorical(
	Structured( :Gender * :Single Status, :Age Group ),
	Frequency Chart( 1 ),
	Legend( 0 ),
	Relative Risk( 1, {}, {} ),
	Local Data Filter( Mode, Add Filter( columns( :Gender ), Where( :Gender == 1 ) ) )
);
obj << updatewindow;
rpt = obj << report;
```

**Code Explanation**:

1. Open table.
2. Create categorical object.
3. Define structured variables.
4. Generate frequency chart.
5. Disable legend.
6. Calculate relative risk.
7. Add local data filter.
8. Update window.
9. Retrieve report.
10. Assign report to variable.



### Example 120
> **Summary**: Creates a categorical analysis report for employee data, incorporating gender and responses to predict annual salary.

<!-- Keywords: #CategoricalAnalysis, #JMPScriptingLanguage, #DataVisualization, #PredictiveModeling, #EmployeeData -->

**Code**:
```jsl
Open("data_table.jmp");
Cat = Categorical( X( :sex ), Responses( :country ) );
Cat << Share Chart( 0 );
rep = Report( Cat );
```

**Code Explanation**:

1. Open data table;
2. Define categorical analysis.
3. Set share chart option off.
4. Generate report object.



### Example 121
> **Summary**: Creates a crosstabulation report to analyze categorical data, incorporating gender and country as effects.

<!-- Keywords: #JSLScriptingLanguage, #CategoricalAnalysis, #DataVisualization, #ReportGeneration, #JMPScript -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Cat = Categorical( X( :sex ), Responses( :country ) );
Cat << Crosstab Transposed( 1 );
rep = Report( Cat );
```

**Code Explanation**:

1. Open data table.
2. Define categorical analysis.
3. Set X variable to sex.
4. Set response to country.
5. Create crosstabulation.
6. Transpose crosstabulation.
7. Generate report object.



### Example 122
> **Summary**: Creates a categorical analysis report to visualize the relationship between sex and age, utilizing the Categorical platform in JMP.

<!-- Keywords: #JMP, #CategoricalAnalysis, #DataVisualization, #PredictiveModeling, #StatisticalReporting -->

**Code**:
```jsl
dt2 = Open("data_table.jmp");
Cat2 = Categorical( X( :sex ), Responses( :age ) );
rep = Report( Cat2 );
```

**Code Explanation**:

1. Open data table;
2. Create categorical analysis object.
3. Set sex as predictor variable.
4. Set age as response variable.
5. Generate report for analysis.



### Example 123
> **Summary**: Creates a categorical analysis report from an open data table, incorporating frequency charts and share charts to visualize response patterns.

<!-- Keywords: #JMPScriptingLanguage, #CategoricalAnalysis, #FrequencyCharts, #ShareCharts, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Cat = Categorical(
	Freq( :N ),
	Sample Size( :SampleSize ),
	ID( :ID ),
	X( :clean, :date ),
	Multiple Response by ID( :failure ),
	Frequencies( 1 ),
	Share Of Responses( 1 ),
	Rate Per Case( 1 ),
	Share Chart( 1 ),
	Frequency Chart( 1 ),
	Legend( 1 ),
	Test Each Response( 1 )
);
rep = Report( Cat );
```

**Code Explanation**:

1. Open data table;
2. Define categorical analysis parameters.
3. Execute categorical analysis.
4. Generate report from analysis.



### Example 124
> **Summary**: Creates a categorical analysis report to visualize and analyze responses from a multiple-delimited question, incorporating frequencies, share of responses, and rate per case.

<!-- Keywords: #CategoricalAnalysis, #MultipleDelimitedQuestion, #Frequencies, #ShareOfResponses, #RatePerCase -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Cat = Categorical(
	ID( :ID ),
	X( :clean, :date ),
	Multiple Delimited( :failureS ),
	Frequencies( 1 ),
	Share Of Responses( 1 ),
	Rate Per Case( 1 ),
	Share Chart( 0 ),
	Frequency Chart( 0 ),
	Legend( 0 ),
	Test Each Response( 1 )
);
rep = Report( Cat );
test1 = [8.46577628973955, 1.0464962875291, 7.20615293666683, 4.52601207203459, 10.2381048678878, 11.520396075057, 7.53393801725972];
test2 = [0.132365487570605, 0.958729023419547, 0.205754380610095, 0.476410674168705, 0.0687630087355663, 0.0419844399852416,
0.183860872995198];
```

**Code Explanation**:

1. Open data table.
2. Define categorical analysis.
3. Set ID variable.
4. Specify X variables.
5. Handle multiple delimited responses.
6. Enable frequencies.
7. Enable share of responses.
8. Enable rate per case.
9. Disable share chart.
10. Disable frequency chart.



### Example 125
> **Summary**: Creates a categorical analysis report from a data table, specifying X variables, indicator groups, and formatting options.

<!-- Keywords: #JSLScriptingLanguage, #CategoricalAnalysis, #DataTable, #ReportGeneration, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Cat = Categorical(
	X( :clean, :date ),
	Indicator Group( :contamination, :corrosion, :doping, :metallization, :miscellaneous, :oxide defect, :silicon defect ),
	Frequencies( 1 ),
	Share Of Responses( 1 ),
	Rate Per Case( 1 ),
	Share Chart( 1 ),
	Frequency Chart( 0 ),
	Table Format( 0 ),
	Table Transposed( 1 ),
	Legend( 0 )
);
rep = Report( Cat );
```

**Code Explanation**:

1. Open data table;
2. Create categorical analysis object.
3. Set X variables: clean, date.
4. Define indicator groups for categories.
5. Enable frequencies calculation.
6. Enable share of responses.
7. Enable rate per case.
8. Enable share chart.
9. Disable frequency chart.
10. Disable table format.
11. Enable transposed table.
12. Disable legend.
13. Generate report from analysis.



### Example 126
> **Summary**: Creates a categorical analysis report, incorporating response frequencies and suppressing detailed diagnostic plots.

<!-- Keywords: #JMPScriptingLanguage, #CategoricalAnalysis, #ReportGeneration, #DataVisualization, #StatisticalModeling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Cat = Categorical(
	Sample Size( :SampleSize ),
	X( :clean, :date ),
	Response Frequencies( :contamination, :corrosion, :doping, :metallization, :miscellaneous, :oxide defect, :silicon defect ),
	Frequencies( 1 ),
	Share Of Responses( 1 ),
	Rate Per Case( 1 ),
	Share Chart( 1 ),
	Frequency Chart( 1 ),
	Legend( 1 )
);
rep = Report( Cat );
test1 = [23, 23, 17, 31, 30, 36];
```

**Code Explanation**:

1. Open data table.
2. Create categorical analysis.
3. Set sample size column.
4. Define X variables.
5. Specify response frequencies.
6. Enable frequencies display.
7. Enable share of responses display.
8. Enable rate per case display.
9. Enable share chart display.
10. Enable frequency chart display.



### Example 127
> **Summary**: Creates a categorical report from a structured data table, combining 'Single Status' and 'School Age Children', and including 'Gender' as a variable.

<!-- Keywords: #JSLScriptingLanguage, #CategoricalReport, #StructuredData, #DataCombination, #VariableInclusion -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Categorical( Structured( :Single Status + :School Age Children, :Gender ) );
rpt = Report( obj );
```

**Code Explanation**:

1. Open table "data_table".
2. Create categorical object.
3. Structure categorical variables.
4. Combine "Single Status" and "School Age Children".
5. Include "Gender" variable.
6. Generate report object.
7. Assign report to variable.



### Example 128
> **Summary**: Creates a categorical analysis object to visualize employee tenure and age group, utilizing the Categorical platform in JMP.

<!-- Keywords: #JMPScriptingLanguage, #CategoricalAnalysis, #EmployeeTenure, #AgeGroup, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Categorical( X( :Employee Tenure ), Responses( :Age Group ), Share Chart( 1 ) );
rpt = obj << Current Report();
rpt << get xml;
Comparison_lev = {"A/B", "C/D"};
```

**Code Explanation**:

1. Open data table.
2. Create categorical analysis object.
3. Assign responses variable.
4. Generate share chart.
5. Retrieve current report.
6. Convert report to XML.
7. Define comparison levels.



### Example 129
> **Summary**: Creates a categorical analysis to compare employee tenure and age groups, generating t-tests and p-values for each level.

<!-- Keywords: #JSLScriptingLanguage, #CategoricalAnalysis, #TTestsAndPValues, #EmployeeTenure, #AgeGroups -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Categorical( X( :Age Group ), Responses( :Employee Tenure ), Share Chart( 1 ), Legend( 0 ), Compare Each Cell( 1 ) );
dtTests = obj << Save TTests and PValues;
Summarize( dtTests, unq_level = by( :Level ) );
Insert Into( unq_level, ">54" );
act_comp_lev = dtTests:Compare Levels << get values;
act_comp_col = dtTests:Compare Column << get values;
act_with_col = dtTests:With Column << get values;
act_comp_col_lev = Substitute( act_comp_col,
	"A", unq_level[1],
	"B", unq_level[2],
	"C", unq_level[3],
	"D", unq_level[4],
	"E", unq_level[5],
	"F", unq_level[6],
	"G", unq_level[7]
);
act_with_col_lev = Substitute( act_with_col,
	"A", unq_level[1],
	"B", unq_level[2],
	"C", unq_level[3],
	"D", unq_level[4],
	"E", unq_level[5],
	"F", unq_level[6],
	"G", unq_level[7]
);
exp_comp_lev = {};
For( i = 1, i <= N Items( act_comp_col_lev ), i++,
	exp_comp_lev[i] = act_comp_col_lev[i] || "-" || act_with_col_lev[i]
);
```

**Code Explanation**:

1. Open table.
2. Create categorical analysis.
3. Save t-tests and p-values.
4. Summarize test data.
5. Insert new level.
6. Get compare levels.
7. Get compare column.
8. Get with column.
9. Substitute compare column levels.
10. Substitute with column levels.



## Categorical using Preferences
> **Summary**: Sets default name location, configures header statistics preferences, and opens a data table for analysis.

<!-- Keywords: #JMPScriptingLanguage, #DataTableManagement, #HeaderStatistics, #ExperimentalDataTableGUI, #Scripting -->

**Code**:
```jsl
Names Default To Here( 1 );
Preferences(
	Header Stats(
		Show( 1 ),
		Track Selection( 1 ),
		Row Limit( 1000000 ),
		Categorical( {"N Unique", "Mode", "N Missing", "N Rows"} ),
		Continuous( {"N", "Mean", "Std Dev", "Median", "Sum"} )
	),
	Set( Enable Experimental Data Table GUI( 1 ) )
);
dat1 = Open("data_table.jmp");
```

**Code Explanation**:

1. Set default name location.
2. Configure header statistics preferences.
3. Show header statistics.
4. Track selection changes.
5. Set row limit to 1,000,000.
6. Define categorical statistics.
7. Define continuous statistics.
8. Enable experimental data table GUI.
9. Open data table.



## Categorical using Column
### Example 1
> **Summary**: Creates a categorical analysis object for multivariate correlations, grouping by sex and ordering by age in descending order.

<!-- Keywords: #JSLScriptingLanguage, #CategoricalAnalysis, #MultivariateCorrelations, #DataTableManipulation, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Column( dt, "age" ) << Set Modeling Type( "Continuous" );
obj = dt << Categorical(
	By( :sex ),
	X( :age ),
	Responses( :weight ),
	Group Options( Order By( :age, Descending( 1 ), Order Statistic( "Mean" ) ), Return Group( 1 ) ),
	Automatic Recalc( 1 )
);
dt << Clear Select << Select Where( :age == 17 & :sex == "M" ) << Delete Rows();
dt << Clear Select << Select Where( :age == 16 & :sex == "M" ) << Delete Rows();
```

**Code Explanation**:

1. Open data table.
2. Set age column to continuous.
3. Create categorical analysis object.
4. Group by sex.
5. Use age as X variable.
6. Set weight as response.
7. Order by age descending.
8. Calculate mean for ordering.
9. Enable automatic recalculation.
10. Delete rows where age is 17 and sex is M.
11. Delete rows where age is 16 and sex is M.



### Example 2
> **Summary**: Runs a categorical analysis to explore the relationship between 'age', 'sex', and 'weight' in a data table, using group options to order by 'age' descending and calculate mean for ordering.

<!-- Keywords: #JSL, #CategoricalAnalysis, #GroupOptions, #DataTable, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Column( dt, "age" ) << Set Modeling Type( "Continuous" );
obj = dt << Categorical(
	By( :sex ),
	X( :age ),
	Responses( :weight ),
	Group Options( Order By( :age, Descending( 1 ), Order Statistic( "Mean" ) ), Return Group( 1 ) ),
	Automatic Recalc( 1 )
);
dt << Clear Select << Select Where( :age == 17 & :sex == "M" ) << Delete Rows();
dt << Clear Select << Select Where( :age == 16 & :sex == "M" ) << Delete Rows();
obj << Redo Analysis;
```

**Code Explanation**:

1. Open data table;
2. Set "age" column to continuous.
3. Create categorical analysis object.
4. Group by "sex".
5. Use "age" as predictor.
6. Analyze "weight" responses.
7. Order by "age" descending.
8. Calculate mean for ordering.
9. Return top group.
10. Automatically recalculate results.
11. Clear previous selections.
12. Select rows where age is 17 and sex is M.
13. Delete selected rows.
14. Clear previous selections.
15. Select rows where age is 16 and sex is M.
16. Delete selected rows.
17. Redo the analysis.



## Categorical using Data Filter
> **Summary**: Data filtering and categorical analysis to extract insights from a JMP data table, utilizing Data Filter and Categorical functions.

<!-- Keywords: #JMPScriptingLanguage, #DataFilter, #CategoricalAnalysis, #InteractiveFiltering, #JSLScript -->

**Code**:
```jsl
dt = Open( "$SAMPLE_DATA/data_table.jmp", "private" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
txt1 = obj << Get Script;
where1 = Char( Arg( Arg( Arg( txt1, 2 ), 3 ), 2 ) );
dt2 = Open("data_table.jmp");
cat = dt2 << Categorical(
	X( :Age Group, :School Age Children ),
	Grouping Option( "Each Individually" ),
	Responses( :I am working on my career ),
	Responses( :My home needs some major improvements ),
	Responses( :I have vast interests outside of work ),
	Responses( :I come from a large family ),
	Crosstab Transposed( 1 ),
	Legend( 0 ),
	Test Response Homogeneity( 1 )
);
ldf = cat << Local Data Filter(
	Location( {607, 87} ),
	Mode,
	Add Filter(
		columns( :Floss Delimited ),
		Match Between( 1, 2, Where( :Floss Delimited == {"After Meal", "Before Sleep", "Other"} ) ),
		Display( :Floss Delimited, Size( 121, 87 ), Check Box Display )
	)
);
txt = ldf << Get Script;
whereClause = Char( Arg( Arg( txt, 2 ), 2 ) );
```

**Code Explanation**:

1. Open data table;
2. Create data filter for Region and POP.
3. Set filter mode to Select 0, Show 0, Include 1.
4. Extract filter script.
5. Extract where clause from script.
6. Open data table;
7. Create categorical analysis.
8. Set X variables: Age Group, School Age Children.
9. Set grouping option to Each Individually.
10. Define responses and set crosstab options.



## Categorical using Log Capture
### Example 1
> **Summary**: Runs categorical analysis on 'Reasons Not to Floss' and generates a new table with grouped data, utilizing Log Capture and Collapse Whitespace features.

<!-- Keywords: #JSLScriptingLanguage, #CategoricalAnalysis, #LogCapture, #CollapseWhitespace, #TableManipulation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
lc = Log Capture( obj = dt << Categorical( Free Text( :Reasons Not to Floss << Score Terms by Column( :Gender ) ) ) );
Close( dt, nosave );
dt = New Table( "bygroups",
	Add Rows( 39 ),
	New Column( "Column 1",
		Numeric,
		Nominal,
		Set Values( [0, 1, 2, 1, 1, 2, 2, 0, 2, 2, 1, 1, 2, 0, 1, 2, 1, 2, ., 1, 2, 0, 0, ., 1, 2, ., ., ., ., ., ., ., ., ., ., ., ., .] )
	),
	New Column( "by", Numeric, Continuous, Formula( Sequence( 1, 3, 1, 13 ) ) ),
	New Column( "Column 3",
		Character,
		Nominal,
		Set Values(
			{"a", "a", "b", "b", "c", "c", "a", "a", "b", "b", "c", "c", "a", "a", "a", "b", "b", "c", "", "a", "a", "b", "b", "", "c", "a",
			"", "", "", "", "", "", "", "", "", "", "", "", ""}
		)
	)
);
lc = Collapse Whitespace( Log Capture( obj = Categorical( X( :Column 3 ), Responses( :Column 1 ), By( :by ) ) ) );
Close( dt, nosave );
dt = New Table( "missing",
	New Column( "a", character, nominal ),
	New Column( "b", character, nominal, setvalues( {"b1", "b2", "b3", "b1"} ) )
);
lc = Collapse Whitespace( Log Capture( obj = dt << Categorical( X( :a ), Responses( :b ), Structured( :a, :b ) ) ) );
```

**Code Explanation**:

1. Open data table.
2. Perform categorical analysis on 'Reasons Not to Floss'.
3. Close the original table without saving.
4. Create new table 'bygroups'.
5. Add rows and columns to 'bygroups'.
6. Set values for columns in 'bygroups'.
7. Perform categorical analysis on 'bygroups' with 'by' grouping.
8. Close 'bygroups' table without saving.
9. Create new table 'missing'.
10. Add columns and set values to 'missing'.



### Example 2
> **Summary**: Analyze categorical data by launching a Categorical platform with structured modeling, comparison groups, and frequency charts.

<!-- Keywords: #JMPScriptingLanguage, #CategoricalAnalysis, #StructuredModeling, #ComparisonGroups, #FrequencyCharts -->

**Code**:
```jsl
dt = Open("data_table.jmp");
lc = Log Capture(
	obj = dt << Categorical(
		Structured(
			:size * :age, :type * :country + :sex,
			<<Specify Comparison Groups(
				"A/B/C/D/E/F/G/H/I/J/K/L/M/N/O/P/Q/R/S/T/U/V/W/X/Y/Z/A1/B1/C1/D1/E1,F1/G1/H1/I1/J1/K1/L1/M1/N1/O1/P1/Q1/R1/S1/T1/U1/V1/W1/X1/Y1/Z1/A2/B2/C2/D2/E2/F2/G2/H2/I2/J2,K2/L2/M2/N2/O2/P2/Q2/R2/S2/T2/U2/V2/W2/X2/Y2/Z2/A3/B3/C3/D3/E3/F3"
			)
		),
		Frequencies( 0 ),
		Compare Each Cell( 1 ),
		Share Chart( 0 ),
		Frequency Chart( 1 ),
		Legend( 0 )
	)
);
obj << close window;
```

**Code Explanation**:

1. Open data_table data
2. Start log capture.
3. Launch Categorical analysis.
4. Define structured model.
5. Specify comparison groups.
6. Set frequencies to 0.
7. Enable compare each cell.
8. Disable share chart.
9. Enable frequency chart.
10. Disable legend.
11. Close analysis window.



### Example 3
> **Summary**: Runs categorical analysis to compare mean scores across structured model terms, utilizing comparison groups and enabling mean score comparisons and cell-by-cell analysis.

<!-- Keywords: #JSLScriptingLanguage, #CategoricalAnalysis, #StructuredModeling, #ComparisonGroups, #MeanScoreComparisons -->

**Code**:
```jsl
dt = Open("data_table.jmp");
lc = Log Capture(
	obj = dt << Categorical(
		Structured(
			:Salary Group + :Floss,
			:Age Group * :Gender * :Single Status + :Employee Tenure * :Single Status * :School Age Children + :Job Satisfaction * :Gender
			 * :School Age Children, <<Specify Comparison Groups( "A/F,B/G, C/H, D/E/I" )
		),
		Mean Score Comparisons( 1 ),
		Compare Each Cell( 1 )
	)
);
obj << close window;
```

**Code Explanation**:

1. Open data table.
2. Create log capture object.
3. Launch categorical analysis.
4. Define structured model terms.
5. Specify comparison groups.
6. Enable mean score comparisons.
7. Enable compare each cell.
8. Close analysis window.



### Example 4
> **Summary**: Creates a log capture object to analyze categorical data, specifically reasons not to floss scored by gender.

<!-- Keywords: #JSLScriptingLanguage, #LogCapture, #CategoricalAnalysis, #GenderScoring, #DataTable -->

**Code**:
```jsl
dt = Open("data_table.jmp");
lc = Log Capture( obj = dt << Categorical( Free Text( :Reasons Not to Floss << Score Terms by Column( :Gender ) ) ) );
```

**Code Explanation**:

1. Open table.
2. Create log capture object.
3. Launch categorical analysis.
4. Specify free text variable.
5. Include reasons not to floss.
6. Score terms by gender column.



### Example 5
> **Summary**: Analyze employee tenure and position tenure, filtering data by birth year range and inverting selection.

<!-- Keywords: #JMPScriptingLanguage, #DataFiltering, #CategoricalAnalysis, #LocalDataFilters, #InteractiveAnalytics -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Log Capture( obj = dt << Categorical( Rater Agreement( :Employee Tenure, :Position Tenure ) ) );
Log Capture(
	ldf = obj << Local Data Filter( Add Filter( columns( :Birth Year ), Where( :Birth Year >= 1938 & :Birth Year <= 1974.188 ) ) )
);
Log Capture( birth_obj = ldf << Get Filter Column( :Name( "Birth Year" ) ) );
Log Capture( birth_obj << Invert Selection );
obj << close window;
```

**Code Explanation**:

1. Open table.
2. Fit categorical analysis.
3. Create local data filter.
4. Add filter for birth year.
5. Capture filter object.
6. Invert selection.
7. Close analysis window.



## Categorical using New Column
### Example 1
> **Summary**: Creates a categorical analysis object to fit a standard least squares model with multiple effects and generate a profiler plot, utilizing expected values for names, ages, sexes, heights, weights, and column 6.

<!-- Keywords: #JSL, #CategoricalAnalysis, #LeastSquaresModel, #ProfilerPlot, #DataTable -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column();
expectedName = {"KATIE", "LOUISE", "JANE", "JACLYN", "LILLIE", "TIM", "JAMES", "ROBERT", "BARBARA", "ALICE", "SUSAN", "JOHN", "JOE",
"MICHAEL", "DAVID", "JUDY", "ELIZABETH", "LESLIE", "CAROL", "PATTY", "FREDERICK", "ALFRED", "HENRY", "LEWIS", "EDWARD", "CHRIS", "JEFFREY",
"MARY", "AMY", "ROBERT", "WILLIAM", "CLAY", "MARK", "DANNY", "MARTHA", "MARION", "PHILLIP", "LINDA", "KIRK", "LAWRENCE"};
expectedAge = [12, 12, 12, 12, 12, 12, 12, 12, 13, 13, 13, 13, 13, 13, 13, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 15, 15, 15, 15,
15, 15, 15, 16, 16, 16, 17, 17, 17];
expectedSex = {"F", "F", "F", "F", "F", "M", "M", "M", "F", "F", "F", "M", "M", "M", "M", "F", "F", "F", "F", "F", "M", "M", "M", "M", "M",
"M", "M", "F", "F", "M", "M", "M", "M", "M", "F", "F", "M", "F", "M", "M"};
expectedHeight = [59, 61, 55, 66, 52, 60, 61, 51, 60, 61, 56, 65, 63, 58, 59, 61, 62, 65, 63, 62, 63, 64, 65, 64, 68, 64, 69, 62, 64, 67,
65, 66, 62, 66, 65, 60, 68, 62, 68, 70];
expectedWeight = [95, 123, 74, 145, 64, 84, 128, 79, 112, 107, 67, 98, 105, 95, 79, 81, 91, 142, 84, 85, 93, 99, 119, 92, 112, 99, 113, 92,
112, 128, 111, 105, 104, 106, 112, 115, 128, 116, 134, 172];
expectedCol6 = [., ., ., ., ., ., ., ., ., ., ., ., ., ., ., ., ., ., ., ., ., ., ., ., ., ., ., ., ., ., ., ., ., ., ., ., ., ., ., .];
obj = dt << Categorical( X( :age ), Responses( :Column 6 ), Legend( 0 ), Compare Each Sample( 1 ), Share Chart( 1 ) );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table.
2. Add new column to table.
3. Define expected names list.
4. Define expected ages list.
5. Define expected sexes list.
6. Define expected heights list.
7. Define expected weights list.
8. Define expected values for column 6.
9. Create categorical analysis object.
10. Generate report from analysis.



### Example 2
> **Summary**: Creates and analyzes a data table with multiple columns, including categorical grouping and formula-based calculations, before saving the results to an Excel file.

<!-- Keywords: #JSLScriptingLanguage, #DataTableOperations, #CategoricalAnalysis, #FormulaCalculations, #ExcelFileOutput -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "new1",
	set values( [10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20] )
);
dt << New Column( "new2",
	set values(
		[100 100 100 100 100 100 100 100 100 100 100 100 100 100 200 200 200 200 200 200 200 200 200 200 200 200 200 200 200 200 300 300
		300 300 300 300 300 300 300 300]
	)
);
dt << New Column( "new3", set values( [4 4 4 4 4 3 3 3 3 2 2 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1] ) );
dt << New Column( "new4", Formula( :new1 + 1 ) );
obj = dt << Categorical( Grouping Option( Each Individually ), X( :age, :height, :new1, :new2, :new3 ), Responses( :sex ), Legend( 0 ) );
Log Capture( obj << Save Excel File( "$Temp\checkExcel1.xlsx", Separate Rows for each cellstatistic( 1 ) ) );
```

**Code Explanation**:

1. Open data table;
2. Add new column "new1".
3. Set values for "new1".
4. Add new column "new2".
5. Set values for "new2".
6. Add new column "new3".
7. Set values for "new3".
8. Add new column "new4" with formula.
9. Create categorical analysis object.
10. Save analysis results to Excel file.



### Example 3
> **Summary**: Creates and analyzes a data table with multiple columns, including categorical grouping and formula-based calculations, before saving the results to an Excel file.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManipulation, #CategoricalGrouping, #Formula-BasedCalculations, #ExcelFileOutput -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "new1",
	set values( [10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20] )
);
dt << New Column( "new2",
	set values(
		[100 100 100 100 100 100 100 100 100 100 100 100 100 100 200 200 200 200 200 200 200 200 200 200 200 200 200 200 200 200 300 300
		300 300 300 300 300 300 300 300]
	)
);
dt << New Column( "new3", set values( [4 4 4 4 4 3 3 3 3 2 2 2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1] ) );
dt << New Column( "new4", Formula( :new1 + 1 ) );
obj = dt << Categorical( Grouping Option( Each Individually ), X( :age, :height, :new1, :new2, :new3 ), Responses( :sex ), Legend( 0 ) );
Log Capture( obj << Save Excel File( "$Temp\checkExcel1.xlsx", Separate Rows for each cellstatistic( 1 ) ) );
newdt = Open( "$Temp\checkExcel1.xlsx" );
```

**Code Explanation**:

1. Open data table;
2. Create new column "new1".
3. Set values for "new1".
4. Create new column "new2".
5. Set values for "new2".
6. Create new column "new3".
7. Set values for "new3".
8. Create new column "new4".
9. Define formula for "new4".
10. Run Categorical analysis.
11. Save results to Excel.
12. Open saved Excel file.



### Example 4
> **Summary**: Fits a standard least squares model with multiple effects and generates a profiler plot to visualize the relationship between age and Column 6, utilizing categorical analysis and local data filtering.

<!-- Keywords: #JSLScriptingLanguage, #CategoricalAnalysis, #LocalDataFiltering, #ProfilerPlot, #LeastSquaresModel -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column();
obj = Categorical(
	X( :age ),
	Responses( :Column 6, <<Specify Comparison Groups( "A/B/C/D/E" ) ),
	Compare Each Cell( 1 ),
	Legend( 0 ),
	Compare Each Sample( 1 ),
	Contents Summary( 1 ),
	Local Data Filter( Add Filter( columns( :height ), Where( :height >= 51 & :height <= 63.1 ) ) ),
	SendToReport(
		Dispatch( {"Column 6 By age"}, "Compare Each Sample", OutlineBox, {Close( 0 )} ),
		Dispatch( {"Column 6 By age"}, "Compare Each Cell - Details", OutlineBox, {Close( 0 )} )
	)
);
obj << close window;
```

**Code Explanation**:

1. Open data table.
2. Create new column.
3. Initialize categorical analysis object.
4. Set X variable to age.
5. Define response variables.
6. Specify comparison groups.
7. Enable cell comparisons.
8. Disable legend.
9. Enable sample comparisons.
10. Enable contents summary.
11. Add local data filter.
12. Close specific report sections.
13. Close analysis window.



### Example 5
> **Summary**: Creates categorical analysis objects and saves mean scores from two separate analyses, utilizing the Categorical platform in JMP.

<!-- Keywords: #JMPScriptingLanguage, #CategoricalAnalysis, #MeanScores, #DataTable, #Automation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "Dummy X", Character, "Nominal", Formula( If( :age > 0, "All" ) ) );
obj = dt << Categorical(
	Structured( :country * :size, Empty() ),
	Share Of Responses( 0 ),
	Share Chart( 0 ),
	Legend( 0 ),
	Total Responses( 0 ),
	Mean Score( 1 )
);
obj2 = dt << Categorical(
	Structured( :country * :size, :Dummy X ),
	Share Of Responses( 0 ),
	Share Chart( 0 ),
	Legend( 0 ),
	Total Responses( 0 ),
	Mean Score( 1 )
);
ms1 = obj << Save Mean Scores;
ms2 = obj2 << Save Mean Scores;
Close( ms1, nosave );
```

**Code Explanation**:

1. Open table.
2. Create new column.
3. Run categorical analysis.
4. Run second categorical analysis.
5. Save mean scores.
6. Save second mean scores.
7. Close first mean scores table.



### Example 6
> **Summary**: Creates categorical analysis objects with structured data and calculates mean scores for multiple effects, utilizing the Categorical platform in JMP.

<!-- Keywords: #JMPScriptingLanguage, #CategoricalAnalysis, #StructuredData, #MeanScores, #MultipleEffects -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "Dummy X", Character, "Nominal", Formula( If( :age > 0, "All" ) ) );
obj = dt << Categorical(
	Structured( :country * :size, Empty() ),
	Share Of Responses( 0 ),
	Share Chart( 0 ),
	Legend( 0 ),
	Total Responses( 0 ),
	Mean Score( 1 )
);
obj2 = dt << Categorical(
	Structured( :country * :size, :Dummy X ),
	Share Of Responses( 0 ),
	Share Chart( 0 ),
	Legend( 0 ),
	Total Responses( 0 ),
	Mean Score( 1 )
);
ms1 = obj << Save Mean Scores;
ms2 = obj2 << Save Mean Scores;
```

**Code Explanation**:

1. Open data table.
2. Create new column "Dummy X".
3. Define formula for "Dummy X".
4. Perform categorical analysis on country*size.
5. Disable share of responses.
6. Disable share chart.
7. Disable legend.
8. Disable total responses.
9. Enable mean score.
10. Save mean scores from analysis.



### Example 7
> **Summary**: Creates categorical columns for multiple response data, utilizing the `New Column` and `Categorical` functions in JMP.

<!-- Keywords: #JMPScriptingLanguage, #MultipleResponseData, #CategoricalAnalysis, #DataTableOperations, #ColumnCreation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "Brush Delimited Only 2",
	Character,
	formula(
		If( Contains( :Brush Delimited, "Wake" ), "Wake,", "" ) || If( Contains( :Brush Delimited, "After Meal" ), "After Meal", "" )
	),
	set property( "Multiple Response", Multiple Response( Separator( "," ) ) )
);
dt << New Column( "Floss Delimited Only 2",
	Character,
	Formula(
		If( Contains( :Brush Delimited, "Before Sleep" ), "Before Sleep,", "" ) || If( Contains( :Brush Delimited, "Other" ), "Other", "" )
	),
	set property( "Multiple Response", Multiple Response( Separator( "," ) ) )
);
obj = dt << Categorical(
	ID( :Response ID ),
	Unique Occurrences within ID( 1 ),
	X( :Gender ),
	Multiple Delimited( :Brush Delimited Only 2 ),
	Multiple Delimited( :Floss Delimited Only 2 ),
	Legend( 0 ), 
);
rpt = obj << report;
```

**Code Explanation**:

1. Open data table.
2. Create new column "Brush Delimited Only 2".
3. Set column data type to character.
4. Define column formula for brush delimited values.
5. Set multiple response property with comma separator.
6. Create new column "Floss Delimited Only 2".
7. Set column data type to character.
8. Define column formula for floss delimited values.
9. Set multiple response property with comma separator.
10. Perform categorical analysis on data table.



## Categorical using Sort Ascending
### Example 1
> **Summary**: Creates a frequency table to analyze the distribution of Age Group and Career question responses, utilizing random row indices and categorical analysis.

<!-- Keywords: #JSLScriptingLanguage, #CategoricalAnalysis, #FrequencyTable, #DataManipulation, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
randRows = Sort Ascending( J( 0.1 * N Row( dt ), 1, Random Integer( 1, N Row( dt ) ) ) );
randRows2 = Sort Ascending( J( 0.15 * N Row( dt ), 1, Random Integer( 1, N Row( dt ) ) ) );
dt[randRows, "Age Group"] = .;
dt[randRows2, "I am working on my career"] = .;
obj = dt << Categorical( Structured( :Age Group, :I am working on my career ) );
rpt = Report( obj );
ageKeys = Associative Array( dt[0, "Age Group"] ) << Get Keys;
careerKeys = Associative Array( dt[0, "I am working on my career"] ) << Get Keys;
freq_table = [];
For( i = 2, i <= Length( careerKeys ), i++,
	freq_row = [];
	For( j = 2, j <= Length( ageKeys ), j++,
		freq_row = freq_row || N Row(
			dt << Select Where( :Age Group == ageKeys[j] & :"I am working on my career"n == careerKeys[i] ) << Get Selected Rows
		)
	);
	freq_table = freq_table |/ freq_row;
);
dt_freq = obj << Save Frequencies;
```

**Code Explanation**:

1. Open data table.
2. Generate random row indices for Age Group.
3. Generate additional random row indices for Career question.
4. Set selected Age Group values to missing.
5. Set selected Career question values to missing.
6. Create categorical analysis object.
7. Retrieve report from categorical analysis.
8. Extract keys from Age Group column.
9. Extract keys from Career question column.
10. Create frequency table and save frequencies.



### Example 2
> **Summary**: Process of generating a categorical analysis report, selecting random rows, and counting responses for Democrats and Republicans.

<!-- Keywords: #JSLScriptingLanguage, #CategoricalAnalysis, #RandomSampling, #FrequencyTable, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
randRows = Sort Ascending( J( 0.1 * N Row( dt ), 1, Random Integer( 1, N Row( dt ) ) ) );
randRows2 = Sort Ascending( J( 0.15 * N Row( dt ), 1, Random Integer( 1, N Row( dt ) ) ) );
dt[randRows, "1996 Winner"] = .;
dt[randRows2, "2000 Winner"] = .;
obj = dt << Categorical(
	Count Missing Responses( 0 ),
	Repeated Measures(
		:"1980 Winner"n, :"1984 Winner"n, :"1988 Winner"n, :"1992 Winner"n, :"1996 Winner"n, :"2000 Winner"n, :"2004 Winner"n,
		:"2008 Winner"n, :"2012 Winner"n
	), 
);
rpt = Report( obj );
Responses = {:"1980 Winner"n, :"1984 Winner"n, :"1988 Winner"n, :"1992 Winner"n, :"1996 Winner"n, :"2000 Winner"n, :"2004 Winner"n,
:"2008 Winner"n, :"2012 Winner"n};
freq_table = [];
For( i = 1, i <= Length( Responses ), i++,
	numDem = N Row( dt << Select Where( Eval( Responses[i] ) == "Democrat" ) << Get Selected Rows );
	numRep = N Row( dt << Select Where( Eval( Responses[i] ) == "Republican" ) << Get Selected Rows );
	freq_table = freq_table |/ (numDem || numRep);
);
dt_freq = obj << Save Frequencies;
```

**Code Explanation**:

1. Open table.
2. Generate random rows.
3. Generate another set of random rows.
4. Clear data in selected rows.
5. Clear data in selected rows.
6. Perform categorical analysis.
7. Create report object.
8. Define response variables.
9. Initialize frequency table.
10. Loop through responses.
11. Count Democrat responses.
12. Count Republican responses.
13. Append counts to table.
14. Save frequency table.



## Categorical using Is Scriptable
### Example 1
> **Summary**: Creates a categorical object for exploratory data analysis, utilizing Is Scriptable to check scriptability and set X variables.

<!-- Keywords: #JSLScriptingLanguage, #CategoricalObject, #DataAnalysis, #ExploratoryDataAnalysis, #IsScriptable -->

**Code**:
```jsl
dt = Open("data_table.jmp");
test = Is Scriptable(
	obj = Categorical(
		X( :I want to see the world, :My home needs some major improvements, :I have vast interests outside of work ),
		Responses( :Gender ),
		Legend( 0 ),
		Test Response Homogeneity( 1 );
		Hide Nonsignificant( 1 );
	)
);
```

**Code Explanation**:

1. Open data table.
2. Check if scriptable.
3. Create categorical object.
4. Set X variables.
5. Set response variable.
6. Disable legend display.
7. Enable test for homogeneity.
8. Hide nonsignificant results.



### Example 2
> **Summary**: Creates a categorical object from a data table, separating responses by country and checking scriptability.

<!-- Keywords: #JSLScriptingLanguage, #CategoricalObject, #DataTable, #ScriptabilityCheck, #Country-SpecificAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
test = Is Scriptable( obj = Categorical( X( :sex, :marital status ), Separate Responses( :country ) ) );
```

**Code Explanation**:

1. Open data table;
2. Create categorical object.
3. Set X variables: sex, marital status.
4. Separate responses by country.
5. Check if scriptable.



## Categorical using Associative Array
### Example 1
> **Summary**: Analyze and visualize job satisfaction data by age group, generating a categorical chart with frequency distributions and expected results.

<!-- Keywords: #JMPScriptingLanguage, #CategoricalAnalysis, #FrequencyDistribution, #DataVisualization, #AgeGroupAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
bef aa = Associative Array( Window() << get window title );
obj = Categorical( X( :Age Group ), Responses( :Job Satisfaction ), Share
Chart( 0 ), Crosstab Format( 1 ), Legend( 0 ) );
dt1 = obj << Save Frequencies;
mat1 = dt1 << get rows( {1, 2, 3, 4, 5, 6, 7} );
exp = {{:Sample Group = "Age Group = 25-29", :Name( "Job Satisfaction=Not at all satisfied" ) = 6, :Name(
	"Job Satisfaction=Somewhat satisfied"
) = 66, :Name( "Job Satisfaction=Extremely satisfied" ) = 41}, {:Sample Group = "Age Group = 30-34", :Name(
	"Job Satisfaction=Not at all satisfied"
) = 4, :Name( "Job Satisfaction=Somewhat satisfied" ) = 44, :Name( "Job Satisfaction=Extremely satisfied" ) = 20}, {:Sample Group =
"Age Group = 35-39", :Name( "Job Satisfaction=Not at all satisfied" ) = 1, :Name( "Job Satisfaction=Somewhat satisfied" ) = 27,
:Name( "Job Satisfaction=Extremely satisfied" ) = 21}, {:Sample Group = "Age Group = 40-44", :Name(
	"Job Satisfaction=Not at all satisfied"
) = 8, :Name( "Job Satisfaction=Somewhat satisfied" ) = 25, :Name( "Job Satisfaction=Extremely satisfied" ) = 19}, {:Sample Group =
"Age Group = 45-49", :Name( "Job Satisfaction=Not at all satisfied" ) = 5, :Name( "Job Satisfaction=Somewhat satisfied" ) = 24,
:Name( "Job Satisfaction=Extremely satisfied" ) = 23}, {:Sample Group = "Age Group = 50-54", :Name(
	"Job Satisfaction=Not at all satisfied"
) = 3, :Name( "Job Satisfaction=Somewhat satisfied" ) = 21, :Name( "Job Satisfaction=Extremely satisfied" ) = 19}, {:Sample Group =
"Age Group = >54", :Name( "Job Satisfaction=Not at all satisfied" ) = 5, :Name( "Job Satisfaction=Somewhat satisfied" ) = 35,
:Name( "Job Satisfaction=Extremely satisfied" ) = 31}};
```

**Code Explanation**:

1. Open table.
2. Create associative array.
3. Generate categorical analysis.
4. Save frequencies.
5. Extract specific rows.
6. Define expected results.



### Example 2
> **Summary**: Analyze and visualize categorical data, generating a frequency table and extracting specific rows for further exploration.

<!-- Keywords: #JSLScripting, #CategoricalAnalysis, #FrequencyTable, #DataVisualization, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
bef aa = Associative Array( Window() << get window title );
obj = Categorical( X( :Gender ), Responses( :Job Satisfaction ), Crosstab Format( 1 ) );
dt1 = obj << Save Frequencies;
mat1 = dt1 << get rows( {1, 2} );
exp = {{:Sample Group = "Gender = M", :Name( "Job Satisfaction=Not at all satisfied" ) = 17, :Name( "Job Satisfaction=Somewhat satisfied" )
 = 135, :Name( "Job Satisfaction=Extremely satisfied" ) = 107}, {:Sample Group = "Gender = F", :Name(
	"Job Satisfaction=Not at all satisfied"
) = 15, :Name( "Job Satisfaction=Somewhat satisfied" ) = 107, :Name( "Job Satisfaction=Extremely satisfied" ) = 67}};
```

**Code Explanation**:

1. Open data table.
2. Create associative array of windows.
3. Run categorical analysis.
4. Save frequencies to new table.
5. Extract specific rows from new table.
6. Define expected results.



### Example 3
> **Summary**: Response Screening analysis and retrieves PValues table data, converting it to a matrix for further processing.

<!-- Keywords: #JMPScriptingLanguage, #ResponseScreening, #AssociativeArrays, #DataTables, #MatrixConversion -->

**Code**:
```jsl
dt = Open("data_table.jmp");
bef aa = Associative Array( Window() << get window title );
obj = dt << Response Screening( Y( :First Survey ), X( :Second Survey ), Weight( :Count ), Kappa( 1 ), PValues Table on Launch( 1 ) );
aft aa = Associative Array( Window() << get window title );
aft aa << Remove( bef aa );
aftlst = aftaa << get keys;
For( i = 1, i <= N Items( aftlst ), i++,
	If( Contains( aftlst[i], "PValues" ),
		dt2 = Data Table( aftlst[i] )
	)
);
mat2 = dt2 << get as matrix;
obj1 = dt << Categorical( Freq( :Count ), Rater Agreement( :First Survey, :Second Survey ), );
rpt = Report( obj1 );
kappa_value = 0.69959266802444;
```

**Code Explanation**:

1. Open data table.
2. Create associative array before.
3. Run Response Screening analysis.
4. Create associative array after.
5. Remove unchanged windows.
6. Get keys of remaining windows.
7. Loop through window keys.
8. Find "PValues" window.
9. Retrieve data table from "PValues".
10. Convert data table to matrix.



### Example 4
> **Summary**: Runs response screening and data extraction from a JMP data table, utilizing associative arrays to manage window titles and retrieve specific windows.

<!-- Keywords: #JMPScriptingLanguage, #ResponseScreening, #DataExtraction, #AssociativeArrays, #WindowManagement -->

**Code**:
```jsl
dt = Open("data_table.jmp");
bef aa = Associative Array( Window() << get window title );
obj = dt << Response Screening(
	Y( :I am working on my career, :I want to see the world, :My home needs some major improvements ),
	X( :Salary, :Age in Years ),
	Force X Categorical( 1 ),
	PValues Table on Launch( 1 )
);
aft aa = Associative Array( Window() << get window title );
aft aa << Remove( bef aa );
aftlst = aftaa << get keys;
For( i = 1, i <= N Items( aftlst ), i++,
	If( Contains( aftlst[i], "PValues" ),
		dt2 = Data Table( aftlst[i] )
	)
);
mat2 = dt2 << get as matrix;
pval = mat2[0, 2];
lrchq = mat2[0, 9];
exppval = [0.0448587969620063, 0.0000315865719277565, 0.239983810330969, 0.00402880306504693, 0.000662571593958354, 0.173657643350891];
explrchq = [148.599294896027, 91.8735127037343, 131.621917923019, 72.8521121598647, 177.20969029244, 52.6710248009576];
```

**Code Explanation**:

1. Open data table.
2. Create associative array before analysis.
3. Perform response screening.
4. Create associative array after analysis.
5. Remove common windows from associative array.
6. Get keys of remaining windows.
7. Loop through window keys.
8. Identify PValues window.
9. Retrieve data from PValues window.
10. Extract p-values and R-squared values.



### Example 5
> **Summary**: Response Screening analysis on a data table, generating PValues tables and extracting specific values from the results.

<!-- Keywords: #JSLScripting, #ResponseScreening, #PValuesTable, #DataAnalysis, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
bef aa = Associative Array( Window() << get window title );
obj = dt << Response Screening(
	Y( :Salary ),
	X( :I am working on my career, :I want to see the world ),
	Force Y Categorical( 1 ),
	PValues Table on Launch( 1 )
);
aft aa = Associative Array( Window() << get window title );
aft aa << Remove( bef aa );
aftlst = aftaa << get keys;
For( i = 1, i <= N Items( aftlst ), i++,
	If( Contains( aftlst[i], "PValues" ),
		dt2 = Data Table( aftlst[i] )
	)
);
mat2 = dt2 << get as matrix;
pval = mat2[0, 2];
lrchq = mat2[0, 9];
exppval = [0.0448587969620422, 0.239983810330813];
explrchq = [148.59929489602, 131.621917923027];
```

**Code Explanation**:

1. Open data table;
2. Create associative array before analysis.
3. Perform Response Screening.
4. Set Salary as response variable.
5. Set two predictor variables.
6. Force Y categorical.
7. Enable PValues Table on launch.
8. Create associative array after analysis.
9. Remove windows present before analysis.
10. Get keys from remaining windows.



### Example 6
> **Summary**: Executes Response Screening script and extracts PValues data tables from the output.

<!-- Keywords: #JSLScripting, #ResponseScreening, #DataExtraction, #PValuesTable, #JMPScriptingLanguage -->

**Code**:
```jsl
Open("data_table.jmp");
bef aa = Associative Array( Window() << get window title );
test = Is Scriptable(
	obj = Response Screening(
		Y(
			:Job Satisfaction, :I am working on my career, :I want to see the world, :My home needs some major improvements,
			:I have vast interests outside of work, :I want to get my debt under control, :I come from a large family, :Brush, :Floss
		),
		X( :Gender, :Single Status, :School Age Children, :Age Group ),
		Force X Categorical( 1 ),
		Force Y Categorical( 1 ),
		PValues Table On Launch( 1 )
	)
);
aft aa = Associative Array( Window() << get window title );
aft aa << Remove( bef aa );
aftlst = aftaa << get keys;
For( i = 1, i <= N Items( aftlst ), i++,
	If( Contains( aftlst[i], "PValues" ),
		dt2 = Data Table( aftlst[i] )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create associative array before running script.
3. Run Response Screening script.
4. Create associative array after running script.
5. Remove windows present before script.
6. Get keys from remaining windows.
7. Loop through window keys.
8. Check if key contains "PValues".
9. Assign matching data table to dt2.
10. End loop.



### Example 7
> **Summary**: Executes Response Screening and Categorical analyses, generating PValues tables and managing data table windows.

<!-- Keywords: #JSLScripting, #ResponseScreening, #CategoricalAnalysis, #PValuesTable, #DataManagement -->

**Code**:
```jsl
dt = Open("data_table.jmp");
bef aa = Associative Array( Window() << get window title );
test = Is Scriptable(
	obj = Response Screening(
		Y(
			:Job Satisfaction, :I am working on my career, :I want to see the world, :My home needs some major improvements,
			:I have vast interests outside of work, :I want to get my debt under control, :I come from a large family, :Brush, :Floss
		),
		X( :Gender, :Single Status, :School Age Children, :Age Group ),
		Force X Categorical( 1 ),
		Force Y Categorical( 1 ),
		PValues Table On Launch( 1 )
	)
);
aft aa = Associative Array( Window() << get window title );
aft aa << Remove( bef aa );
aftlst = aftaa << get keys;
For( i = 1, i <= N Items( aftlst ), i++,
	If( Contains( aftlst[i], "PValues" ),
		dt2 = Data Table( aftlst[i] )
	)
);
Close( dt2, no save );
Close( dt, no save );
dt = Open("data_table.jmp");
bef aa = Associative Array( Window() << get window title );
test = Is Scriptable( obj = Response Screening( Y( 8 :: 394 ), X( :Process ), MaxLogWorth( 1000 ), PValues Table on Launch( 1 ) ) );
aft aa = Associative Array( Window() << get window title );
aft aa << Remove( bef aa );
aftlst = aftaa << get keys;
For( i = 1, i <= N Items( aftlst ), i++,
	If( Contains( aftlst[i], "PValues" ),
		dt2 = Data Table( aftlst[i] )
	)
);
Close( dt2, no save );
Close( dt, no save );
dt = Open("data_table.jmp");
test = Is Scriptable( obj = Categorical( X( :sex, :marital status ), Separate Responses( :country ) ) );
```

**Code Explanation**:

1. Open data table;
2. Create associative array before analysis.
3. Perform Response Screening analysis.
4. Create associative array after analysis.
5. Remove windows from before analysis.
6. Get keys from after analysis array.
7. Loop through keys to find "PValues".
8. Open PValues table.
9. Close PValues table without saving.
10. Close data_table.jmp without saving.
11. Open data table;
12. Create associative array before analysis.
13. Perform Response Screening analysis.
14. Create associative array after analysis.
15. Remove windows from before analysis.
16. Get keys from after analysis array.
17. Loop through keys to find "PValues".
18. Open PValues table.
19. Close PValues table without saving.
20. Close data_table.jmp without saving.
21. Open data table;
22. Perform Categorical analysis.



## Categorical using Set Modeling Type
> **Summary**: Creates a categorical object from a structured data table, utilizing the Brush Delimited column and setting multiple response separator.

<!-- Keywords: #JSLScriptingLanguage, #CategoricalObject, #StructuredData, #MultipleResponse, #BrushDelimited -->

**Code**:
```jsl
dt = Open("data_table.jmp");
:Brush Delimited << Set Modeling Type( "Nominal" );
:Brush Delimited << Set Property( "Multiple Response", "," );
obj = dt << Categorical( Structured( :Brush Delimited, :Gender ) );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table.
2. Set Brush Delimited as Nominal.
3. Define multiple response separator.
4. Create Categorical object.
5. Generate report.



## Categorical using Random Reset
> **Summary**: Creates and customizes a categorical column with random values, followed by data updates and visualization of frequency charts and mean scores.

<!-- Keywords: #JSLScriptingLanguage, #CategoricalColumn, #DataUpdate, #FrequencyChart, #MeanScore -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Random Reset( 123456789 );
yellowList = {0, 25, 50, 75, 100};
yellowCol = J( 80, 1, yellowList[Random Integer( 1, 5 )] );
dt << New Column( "I like the color yellow.",
	Numeric,
	"Nominal",
	Set Property( "Supercategories", {Group( "Top 2", {75, 100} ), Group( "Bottom 2", {0, 25} )} ),
	Set Property( "Value Order", {Custom Order( {100, 75, 50, 25, 0} )}, {Sorted Order( {100, 75, 50, 25, 00} )} ),
	Value Labels( {0 = "Strongly Disagree", 25 = "Disagree", 50 = "Neutral", 75 = "Agree", 100 = "Strongly Agree"} ),
	Use Value Labels( 1 ),
	Set Values( yellowCol )
);
dt << Begin Data Update;
col1 = dt << New Column( dt:I like the color yellow. );
col1 << Set Name( "I like the color yellow. 2" );
dt << Move Selected Columns( {col1}, after( dt:I like the color yellow. ) );
dt << Recode Column(
	dt:I like the color yellow.,
	{Map Value( _rcOrig, {0, -2, 25, -1, 50, 0, 75, 1, 100, 2}, Unmatched( _rcNow ) )},
	Target Column( col1 )
);
col1 << Remove Value Labels;
col1 << Value Labels( {-2, -1, 0, 1, 2}, {"Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"} );
dt << End Data Update;
obj = dt << Categorical(
	Responses( :I like the color yellow. ),
	Frequency Chart( 1 ),
	Transposed Freq Chart( 1 ),
	Legend( 0 ),
	Mean Score( 1 ),
	Std Dev Score( 1 )
);
obj2 = dt << Categorical(
	Responses( :"I like the color yellow. 2"n ),
	Frequency Chart( 1 ),
	Transposed Freq Chart( 1 ),
	Legend( 0 ),
	Mean Score( 1 ),
	Std Dev Score( 1 )
);
```

**Code Explanation**:

1. Open data table.
2. Set random seed.
3. Define yellow list values.
4. Generate random yellow column.
5. Create new categorical column.
6. Set properties for new column.
7. Start data update.
8. Duplicate column.
9. Rename duplicated column.
10. Move duplicated column.
11. Recode original column.
12. Remove value labels from recoded column.
13. Set new value labels for recoded column.
14. End data update.
15. Create frequency chart for original column.
16. Create transposed frequency chart for original column.
17. Create mean score plot for original column.
18. Create standard deviation plot for original column.
19. Create frequency chart for recoded column.
20. Create transposed frequency chart for recoded column.
21. Create mean score plot for recoded column.
22. Create standard deviation plot for recoded column.



## Categorical using New Script
> **Summary**: Runs the highlighting of cells in a JMP data table based on specific conditions, including share and mean score thresholds.

<!-- Keywords: #JMPScriptingLanguage, #DataTableOperations, #HighlightCells, #ConditionalFormatting, #Scripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Script( "Highlight Cells", {Highlight Cells( Share >= 0.8 ), Highlight Cells( Mean Score >= 2.7, Color( "Blue" ) )} );
obj = Categorical( Structured( :Position Tenure + :Age Group, :I am working on my career + :Brush ), Mean Score( 1 ) );
obj << Highlight Cells( Share >= 0.8 );
obj << Highlight Cells( Mean Score >= 2.7, Color( "Blue" ) );
obj << close window;
```

**Code Explanation**:

1. Open table.
2. Create new script.
3. Highlight cells with Share >= 0.8.
4. Highlight cells with Mean Score >= 2.7 in blue.
5. Create categorical analysis object.
6. Highlight cells with Share >= 0.8 in object.
7. Highlight cells with Mean Score >= 2.7 in blue in object.
8. Close window.



## Categorical using Get Window List
> **Summary**: Prepares data by opening a data table, selecting all rows, deleting selected rows, and creating a categorical analysis with 'Birth Year' and 'Gender', while updating the window list.

<!-- Keywords: #JSLScripting, #DataPreparation, #CategoricalAnalysis, #WindowManagement, #JMPScriptingLanguage -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << select all rows;
dt << delete rows;
winList1 = Get Window List();
obj = dt << Categorical( Structured( :Birth Year, :Gender ) );
winList2 = Get Window List();
```

**Code Explanation**:

1. Open data table;
2. Select all rows in the table.
3. Delete selected rows from the table.
4. Get list of current windows.
5. Create categorical analysis with "Birth Year" and "Gender".
6. Get updated list of windows.



## Categorical using Set Values
> **Summary**: Creates and compares categorical reports in JMP, utilizing a Categorical object to generate frequency charts and transposed frequency charts.

<!-- Keywords: #JMPScriptingLanguage, #CategoricalObject, #FrequencyCharts, #TransposedFrequencyCharts, #ReportAutomation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
:FailureS << Set Values( {"X", "X", "X"} );
obj = Categorical(
	ID( :ID ),
	X( :clean, :date ),
	Multiple Delimited( :failureS ),
	Frequency Chart( 1 ),
	Transposed Freq Chart( 1 ),
	Legend( 0 )
);
rpt1 = obj << report;
expr1 = rpt1 << get journal;
:FailureS << Set Property( "Missing Value Codes", "X" );
obj2 = obj << Redo Analysis;
rpt2 = obj2 << Report;
expr2 = rpt2 << Get Journal;
ans = Equal( expr1, expr2 );
```

**Code Explanation**:

1. Open data table.
2. Set FailureS values.
3. Create categorical object.
4. Generate report.
5. Extract journal.
6. Set missing value codes.
7. Redo analysis.
8. Generate new report.
9. Extract new journal.
10. Compare journals.



## Categorical using Multiple Correspondence Analysis
### Example 1
> **Summary**: Runs multiple correspondence analysis (MCA) on selected columns, selects rows and excludes the first row, generates categorical reports, and retrieves MCA reports.

<!-- Keywords: #JMPScriptingLanguage, #MultipleCorrespondenceAnalysis, #DataTableOperations, #CategoricalReports, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj1 = dt << Multiple Correspondence Analysis(
	Y( :sex, :marital status, :country ),
	Z( :size, :type ),
	Cross Table( Total %( 0 ), Show Total( 1 ) ),
	Cross Table of Supplementary Columns( Total %( 0 ), Show Total( 1 ) )
);
dt << SelectRows( 19 :: 303 );
dt << Exclude( 1 );
obj2 = dt << Multiple Correspondence Analysis(
	Y( :sex, :marital status, :country ),
	Z( :size, :type ),
	Cross Table( Total %( 0 ), Show Total( 1 ) ),
	Cross Table of Supplementary Columns( Total %( 0 ), Show Total( 1 ) )
);
objCat = dt << Categorical(
	Structured( :size + :type, :sex + :marital status + :country ),
	Share Of Responses( 0 ),
	Share Chart( 0 ),
	Legend( 0 ),
	Total Responses( 0 ),
	Force Crosstab Shading( 0 )
);
rpt1 = obj1 << Report();
rpt2 = obj2 << Report();
rptCat = objCat << Report();
```

**Code Explanation**:

1. Open data table;
2. Perform MCA on selected columns.
3. Select rows 19 to 303.
4. Exclude first row.
5. Perform MCA again on selected columns.
6. Create categorical analysis report.
7. Retrieve first MCA report.
8. Retrieve second MCA report.
9. Retrieve categorical report.



### Example 2
> **Summary**: Executes multiple correspondence analyses (MCAs) on a modified dataset, generates reports for each MCA, and extracts specific text from the reports.

<!-- Keywords: #JSLScriptingLanguage, #MultipleCorrespondenceAnalysis, #DataVisualization, #ReportGeneration, #TextExtraction -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj1 = dt << Multiple Correspondence Analysis(
	Y( :sex, :marital status, :country ),
	Z( :size, :type ),
	Cross Table( Total %( 0 ), Show Total( 1 ) ),
	Cross Table of Supplementary Columns( Total %( 0 ), Show Total( 1 ) )
);
dt << SelectRows( 19 :: 303 );
dt << Exclude( 1 );
obj2 = dt << Multiple Correspondence Analysis(
	Y( :sex, :marital status, :country ),
	Z( :size, :type ),
	Cross Table( Total %( 0 ), Show Total( 1 ) ),
	Cross Table of Supplementary Columns( Total %( 0 ), Show Total( 1 ) )
);
objCat = dt << Categorical(
	Structured( :size + :type, :sex + :marital status + :country ),
	Share Of Responses( 0 ),
	Share Chart( 0 ),
	Legend( 0 ),
	Total Responses( 0 ),
	Force Crosstab Shading( 0 )
);
rpt1 = obj1 << Report();
rpt2 = obj2 << Report();
rptCat = objCat << Report();
rpt1[Outline Box( "Contingency Table: Supplementary Columns" )] << Set Open();
rpt2[Outline Box( "Contingency Table: Supplementary Columns" )] << Set Open();
actSupColCount1 = rpt1[Outline Box( "Contingency Table: Supplementary Columns" )][GridMultiCellBox( 2 )] << Get Text;
actSupColCount2 = rpt2[Outline Box( "Contingency Table: Supplementary Columns" )][GridMultiCellBox( 2 )] << Get Text;
actSupColCountCat = rptCat[Outline Box( "?+type" )][GridMultiCellBox( 2 )] << Get Text;
```

**Code Explanation**:

1. Open data table;
2. Perform MCA on selected columns.
3. Select rows 19 to 303.
4. Exclude selected rows.
5. Perform MCA again on modified dataset.
6. Create categorical analysis.
7. Generate report for first MCA.
8. Generate report for second MCA.
9. Generate report for categorical analysis.
10. Extract specific text from reports.



