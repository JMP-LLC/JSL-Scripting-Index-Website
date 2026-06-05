# Data Table

## Data Table using Add Rows
### Example 1
> **Summary**: Opens a data table, adds new rows with specified values, and demonstrates the use of the Add Rows platform in JMP.

<!-- Keywords: #JMPScriptingLanguage, #AddRows, #DataTableManagement, #NewRowInsertion, #JMPProgramming -->

**Code**:
```jsl
// Add New Rows
// Open data table
dt = Open("data_table.jmp");
// Add New Rows
Current Data Table() <<
Add Rows(
	{:location name = "Lanesboro", :Al =
	3866, :Mn = 15.56, :Na = 262.95, :Br
	 = 0.88, :Ce = 0.45, :Co = 0.31, :Cr
	 = 10.57, :Cs = 0.26, :Eu = 0.04, :Fe
	 = 433.86, :Hf = 0.15, :La = 0.28,
	:Sc = 0.12, :sm = 0.03, :U = 0.75},
	{:location name = "Stockton", :al =
	2789.16, :Mn = 6.6, :Na = 208.6, :Br
	 = 0.45, :Ce = 0.4, :Co = 0.28, :Cr
	 = 11.76, :Cs = 0.25, :Eu = 0.04, :Fe
	 = 342.8, :Hf = 0.08, :La = 0.12, :Sc
	 = 0.05, :Sm = 0.02, :U = 0.63}
);
```

**Code Explanation**:

1. Open data table.
2. Add new rows with data.



### Example 2
> **Summary**: Opens a data table, adds one row to the table, and prepares it for analysis.

<!-- Keywords: #JMPScriptingLanguage, #DataTableManagement, #RowAddition, #DataPreparation, #JMPScripting -->

**Code**:
```jsl
// Roll Once
// Open data table
dt = Open("data_table.jmp");
// Roll Once
Current Data Table() << Add Rows( 1 );
```

**Code Explanation**:

1. Open data table.
2. Add one row to table.



### Example 3
> **Summary**: Opens a data table, adds rows to the current table using the ':Num Rolls' variable, and clusters variables for analysis.

<!-- Keywords: #JMPScriptingLanguage, #DataTableOperations, #VariableClustering, #AddRows, #RollMany -->

**Code**:
```jsl
// Roll Many
// Open data table
dt = Open("data_table.jmp");
// Roll Many
Current Data Table() <<
Add Rows( :Num Rolls );
```

**Code Explanation**:

1. Open data table.
2. Set variable `dt`.
3. Add rows to current table.
4. Use `:Num Rolls` for count.



## Data Table using Column
### Example 1
> **Summary**: Simulates model responses by applying a logistic regression formula to the 'Y Simulated' column in a JMP data table, incorporating intercept and predictor variables.

<!-- Keywords: #JSLScriptingLanguage, #LogisticRegression, #DataSimulation, #JMPDataTable, #ColumnFormula -->

**Code**:
```jsl
// Simulate Model Responses
// Open data table
dt = Open("data_table.jmp");
// Simulate Model Responses
dt = Current Data Table();
col = Column( "Y Simulated" );
col <<
Formula(
	Random Binomial(
		1,
		1 / (1
		+Exp(
			-1 * (1 + 1 * :X1 + 0.9 * :X2
			 + 0.8 * :X3 + 0.7 * :X4
			+0.6 * :X5 + 0.5 * :X6)
		))
	)
);
```

**Code Explanation**:

1. Open data table.
2. Set current data table.
3. Select "Y Simulated" column.
4. Assign formula to column.
5. Use Random Binomial function.
6. Set number of trials to 1.
7. Calculate probability using logistic model.
8. Include intercept and predictors.
9. Apply exponential transformation.
10. Negate and sum terms.



### Example 2
> **Summary**: Process of opening selected defects and constructing web URLs for further analysis, utilizing a loop to iterate through defect IDs.

<!-- Keywords: #JSLScriptingLanguage, #DataTableOperations, #WebURLConstruction, #LoopControl, #DefectAnalysis -->

**Code**:
```jsl
// Open Selected Defects
Names Default To Here( 1 );
dt = Current Data Table();
defList = (Column( dt, 1 ) << get values)
[dt << Get Selected Rows];
For( i = 1, i <= N Items( defList ), i++,
	Eval(
		Parse(
			Substitute(
					"web(\!"http://sww.sas.com/cgi-bin/quick_browse?defectid=_DEF_\!")",
				"_DEF_", defList[i]
			)
		)
	)
);
```

**Code Explanation**:

1. Set default names.
2. Get current data table.
3. Retrieve selected rows.
4. Extract defect IDs.
5. Loop through each defect ID.
6. Construct web URL.
7. Evaluate the URL.



### Example 3
> **Summary**: Runs the recoding and reorganization of data table columns, including adding coding properties and updating column selection.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManipulation, #ColumnProperties, #RecodeProcess, #InteractiveDataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Column( dt, "Age" ) << Set Selected;
dt:Age << Add Column Properties( Set property( "Coding", {12, 17} ) );
recodeObj = dt << Recode( ‚ÄúReturn‚Äù );
recodeObj << Change Value( 17, 18 );
wrc = Window( "Recode - age" );
wrc[Combo Box( 1 )] << Set( 3 );
If( Host is( "windows" ),
	wrc[Button Box( 4 )] << Click(),
	wrc[Button Box( 6 )] << Click()
);
dt << Clear Column Selection;
Column( dt, "Height" ) << Set Selected;
dt:Height << Add Column Properties( Set property( "Coding", {51, 70} ) );
dt << Begin Data Update;
dc1 = New Column( :height );
dc1 << Set Name( "height 2" );
Current Data Table() << Go to( dc1 );
Current Data Table() << Move Selected Columns( after( :height ) );
For Each Row( dc1[] = Match( :height, 51, 50, :height ) );
dc1 << Set Property( Coding, Eval List( {Col Minimum( dc1 ), Col Maximum( dc1 )} ) );
Current Data Table() << End Data Update;
dt << Clear Column Selection;
```

**Code Explanation**:

1. Open data table.
2. Select "Age" column.
3. Add coding properties to "Age".
4. Initiate recode process.
5. Change value 17 to 18.
6. Access recode window.
7. Set combo box to third option.
8. Click appropriate button based on host OS.
9. Clear column selection.
10. Select "Height" column.



### Example 4
> **Summary**: Runs the recoding and formatting of a data table column, specifically changing values for 'ALFRED' to 'blah' and 'AMY' to 'a2', while converting all values to titlecase.

<!-- Keywords: #JSL, #DataTableManipulation, #Recode, #TitleCaseConversion, #ScriptWindow -->

**Code**:
```jsl
dtBCF = Open("data_table.jmp");
Column( dtBCF, "Name" ) << Set selected;
recode = (Current Data Table() << Recode( Return ))[1];
recode << Change Value( "ALFRED", "blah" );
recode << Change Value( "AMY", "a2" );
recode << Convert to Titlecase();
recode << Set Compress Sequence( 0 );
recode << Set Script Sequence( 0 );
recode << Save to Script Window();
recode << close recode;
```

**Code Explanation**:

1. Open data table.
2. Select "Name" column.
3. Initiate recode platform.
4. Change "ALFRED" to "blah".
5. Change "AMY" to "a2".
6. Convert values to titlecase.
7. Disable compression sequence.
8. Disable script sequence.
9. Save recode to script window.
10. Close recode platform.



## Data Table using Columns
> **Summary**: Opens a data table and transposes specified columns in JMP, allowing for efficient analysis and manipulation of the data.

<!-- Keywords: #JMPScriptingLanguage, #DataTableManagement, #ColumnTransposition, #DataAnalysis, #JSLScript -->

**Code**:
```jsl
// Transpose
// Open data table
dt = Open("data_table.jmp");
// Transpose
Current Data Table() <<
Columns( :plastic, :tin, :gold )`;
```

**Code Explanation**:

1. Open data table.
2. Transpose specified columns.



## Data Table using N Rows
### Example 1
> **Summary**: Excludes rows in a data table, starting from row 101, using the N Rows function to retrieve the total number of rows and then looping through each row to set its state as excluded.

<!-- Keywords: #JSL, #DataTableManagement, #RowState, #Looping, #NRows -->

**Code**:
```jsl
// Set currrent data as excluded
// Open data table
dt = Open("data_table.jmp");
// Set currrent data as excluded
dt = Current Data Table();
lastRow = N Rows( dt );
For( i = 101, i <= lastRow, i++,
	Row State( i ) = Excluded State( 1 )
);
```

**Code Explanation**:

1. Open data table.
2. Set current data as excluded.
3. Get number of rows.
4. Loop through rows starting from 101.
5. Exclude each row.
6. End loop.



### Example 2
> **Summary**: Process of clearing excluded data in a JMP data table, starting from row 101 to the end, by iterating through rows and setting their exclusion state to 'Not Excluded'.

<!-- Keywords: #JSLScripting, #DataTableManagement, #RowState, #ExclusionState, #LoopControl -->

**Code**:
```jsl
// Clear excluded data
// Open data table
dt = Open("data_table.jmp");
// Clear excluded data
dt = Current Data Table();
lastRow = N Rows( dt );
For( i = 101, i <= lastRow, i++,
	Row State( i ) = Excluded State( 0 )
);
```

**Code Explanation**:

1. Open data table.
2. Set current data table.
3. Get number of rows.
4. Loop through rows 101 to end.
5. Clear exclusion for each row.



## Data Table using New Column
### Example 1
> **Summary**: Adds a new column to the data table with simulated purity values generated using a Weibull distribution, and sets specification limits for quality control.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManipulation, #WeibullDistribution, #SimulationColumn, #QualityControl -->

**Code**:
```jsl
// Add Simulation Column
// Open data table
dt = Open("data_table.jmp");
// Add Simulation Column
dt = Current Data Table();
dt <<
New Column( "Simulated Purity",
	Formula(
		Random Weibull(
			1589.7167836,
			99.918708989
		)
	),
	Set Property(
		"Spec Limits",
		{LSL( 99.5 ), Show Limits( 0 )}
	)
);
```

**Code Explanation**:

1. Open data table.
2. Get current data table.
3. Add new column.
4. Name column "Simulated Purity".
5. Define column formula.
6. Use Random Weibull function.
7. Set shape parameter.
8. Set scale parameter.
9. Set specification limits.
10. Set lower specification limit.



### Example 2
> **Summary**: Recodes and rearranges a data table's sex column, utilizing New Column and Move Selected Columns functions.

<!-- Keywords: #JSLScripting, #DataManipulation, #ColumnManagement, #TableNavigation, #RecodeFunction -->

**Code**:
```jsl
dt1 = Open("data_table.jmp");
Current Data Table() << Begin Data Update;
dc1 = New Column( :sex );
dc1 << Set Name( "sex 2" );
Current Data Table() << Go to( dc1 );
Current Data Table() << Move Selected Columns( after( :sex ) );
For Each Row( dc1[] = Match( :sex, "F", "Female", "M", "Male", :sex ) );
Current Data Table() << End Data Update;
matrix1 = :sex2 << Get as Matrix();
Current Data Table() << Begin Data Update;
dc1 = Current Data Table() << New Column( "sex 2", Character, "Nominal", Formula( Match( :sex, "F", "Female", "M", "Male", :sex ) ) );
Current Data Table() << Go to( dc1 );
Current Data Table() << Move Selected Columns( after( :sex ) );
Current Data Table() << End Data Update;
```

**Code Explanation**:

1. Open data table.
2. Start data update.
3. Create new column for sex.
4. Rename new column to "sex 2".
5. Navigate to new column.
6. Move new column after original sex.
7. For each row, recode sex values.
8. End data update.
9. Get new column as matrix.
10. Recreate "sex 2" column with formula.



### Example 3
> **Summary**: Creates age lists from a data table, grouping names by age and generating a new table with the results.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManipulation, #TableCreation, #AgeGrouping, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
newDt = New Table( "Age Lists", New Column( "ageOld", Numeric ), New Column( "ageList", Character ) );
Current Data Table( dt );
str = "";
lastAge = 0;
For Each Row(
	theName = :name;
	theAge = :age;
	If( :age != lastAge,
		newDt << AddRow( {:ageOld = lastAge, :ageList = str} );
		str = "";
	);
	str ||= " " || theName;
	lastAge = theAge;
);
newDt << AddRow( {:ageOld = lastAge, :ageList = str} );
Close( dt, "nosave" );
Close( newDt, "nosave" );
colPlus3 = Function( {col},
	{dt},
	dt = col << Get Data Table;
	Eval( Substitute( Expr( dt << New Column( "plus 3", formula( As Column( c ) + 3 ) ) ), Expr( c ), col ) );
);
```

**Code Explanation**:

1. Open data table.
2. Create new table for age lists.
3. Set current data table to opened one.
4. Initialize string variable for names.
5. Initialize last age variable.
6. Iterate through each row in data table.
7. Assign name and age from current row.
8. Check if current age is different from last age.
9. Add row to new table with age and names list.
10. Reset names list string.
11. Append name to names list string.
12. Update last age variable.
13. Add final row to new table.
14. Close original data table without saving.
15. Close new data table without saving.
16. Define function to add new column with values plus 3.



### Example 4
> **Summary**: Creates an age-based list by grouping names and ages from a data table, utilizing a For Each Row loop to iterate through the rows.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManipulation, #ForEachRowLoop, #NewColumnCreation, #AddRowOperation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
newDt = New Table( "Age Lists", New Column( "ageOld", Numeric ), New Column( "ageList", Character ) );
Current Data Table( dt );
str = "";
lastAge = 0;
For Each Row(
	theName = :name;
	theAge = :age;
	If( :age != lastAge,
		newDt << AddRow( {:ageOld = lastAge, :ageList = str} );
		str = "";
	);
	str ||= " " || theName;
	lastAge = theAge;
);
newDt << AddRow( {:ageOld = lastAge, :ageList = str} );
```

**Code Explanation**:

1. Open data table;
2. Create new table "Age Lists".
3. Define columns "ageOld" and "ageList".
4. Set current data table to data_table.
5. Initialize string variable `str`.
6. Initialize variable `lastAge` to 0.
7. Loop through each row in the table.
8. Assign name and age from current row.
9. Check if age is different from `lastAge`.
10. Add row to new table with `lastAge` and `str`.
11. Reset `str` to empty.
12. Append name to `str`.
13. Update `lastAge` to current age.
14. After loop, add final row to new table.



## Data Table using ColorByColumn
### Example 1
> **Summary**: Visualizes the current data table by applying color and marker by column using the 'Color Rating' column, providing an interactive representation of the data.

<!-- Keywords: #JMPScriptingLanguage, #DataVisualization, #Column-BasedAnalysis, #MarkerByColumn, #ColorByColumn -->

**Code**:
```jsl
// Color and Mark by Color Rating
Current Data Table() <<
ColorByColumn( :Color Rating );
Current Data Table() <<
MarkerByColumn( :Color Rating );
```

**Code Explanation**:

1. Access current data table.
2. Apply color by column.
3. Use "Color Rating" column.
4. Access current data table again.
5. Apply marker by column.
6. Use "Color Rating" column.



### Example 2
> **Summary**: Colors and marks the current data table by region name, utilizing ColorByColumn and MarkerByColumn functions.

<!-- Keywords: #JSLScriptingLanguage, #DataVisualization, #ColorByColumn, #MarkerByColumn, #RegionName -->

**Code**:
```jsl
// Color and Mark by Region Name
Current Data Table() <<
ColorByColumn( :Region Name );
Current Data Table() <<
MarkerByColumn( :Region Name );
```

**Code Explanation**:

1. Get current data table.
2. Color by Region Name column.
3. Get current data table again.
4. Mark by Region Name column.



### Example 1
> **Summary**: Opens a data table, clears all selections and column selections, and performs principal component analysis (PCA) on variables using the 'on Correlations' option.

<!-- Keywords: #JMPScriptingLanguage, #PrincipalComponentAnalysis, #DataTableOperations, #CorrelationAnalysis, #DataScience -->

**Code**:
```jsl
// On Open
Current Data Table() <<
ClearSelect;
Current Data Table() <<
ClearColumnSelection;
```

**Code Explanation**:

1. Open table.
2. Clear all selections.
3. Clear column selections.



### Example 2
> **Summary**: Clears the current selection, row states, and column selection in a data table before performing principal component analysis (PCA) on variables using the 'on Correlations' option.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManagement, #PrincipalComponentAnalysis, #CorrelationAnalysis, #DataPreparation -->

**Code**:
```jsl
// On Open
Current Data Table() <<
ClearSelect;
Current Data Table() <<
ClearRowStates;
Current Data Table() <<
ClearColumnSelection;
```

**Code Explanation**:

1. Clear current selection.
2. Clear row states.
3. Clear column selection.



### Example 3
> **Summary**: Clears the selection, row states, and column selection in a data table to prepare it for further analysis.

<!-- Keywords: #DataTableManagement, #SelectionControl, #RowStateManagement, #ColumnSelection, #JSLScripting -->

**Code**:
```jsl
// Table Cleanup
Current Data Table() << ClearSelect;
Current Data Table() << ClearRowStates;
Current Data Table() <<
ClearColumnSelection;
```

**Code Explanation**:

1. Clear selected rows.
2. Clear row states.
3. Clear column selection.



### Example 4
> **Summary**: Opens a data table, sets the header background and text colors for specific columns, and does not perform any statistical analysis or visualization.

<!-- Keywords: #JMPScriptingLanguage, #DataTableManagement, #HeaderCustomization, #NoStatisticalAnalysis, #NoVisualization -->

**Code**:
```jsl
Open("data_table.jmp");
Data Table("data_table"):picture << Set Header Background Color( "Medium Light YellowGreen" );
Data Table("data_table"):name << Set Header Text Color( "Medium Dark Fuchsia" );
Data Table("data_table"):name << Set Header Text Color( "Red" );
Data Table("data_table"):age << Set Header Text Color( "Dark Magenta" );
```

**Code Explanation**:

1. Open data table;
2. Set picture header color.
3. Set name header text color.
4. Override name header text color.
5. Set age header text color.



### Example 5
> **Summary**: Opens a data table, customizes the header colors and text, and sets specific colors for certain columns.

<!-- Keywords: #JMPScriptingLanguage, #DataTableCustomization, #HeaderColors, #ColumnSettings, #JMPDataAnalysis -->

**Code**:
```jsl
Open("data_table.jmp");
Data Table("data_table"):picture << Set Header Background Color( "Medium Light YellowGreen" );
Data Table("data_table"):name << Set Header Text Color( "Medium Dark Fuchsia" );
Data Table("data_table"):name << Set Header Text Color( "Red" );
Data Table("data_table"):age << Set Header Text Color( "Dark Magenta" );
Data Table("data_table"):sex << Set Header Background Color( "Light Cyan" );
```

**Code Explanation**:

1. Open data table.
2. Set header background color.
3. Set header text color.
4. Override previous text color.
5. Set header text color.
6. Set header text color.
7. Set header background color.



### Example 6
> **Summary**: Selects and excludes rows in a data table, clearing previous selections and hiding excluded rows.

<!-- Keywords: #DataTableManagement, #RowSelection, #Exclusion, #ClearingSelections, #JSLScripting -->

**Code**:
```jsl
Open("data_table.jmp");
dt = Data Table("data_table");
dt << Clear Select << Select Rows( Index( 1, 35 ) ) << Hide and Exclude;
```

**Code Explanation**:

1. Open data table.
2. Assign data table to variable.
3. Clear previous selections.
4. Select rows 1 to 35.
5. Hide and exclude selected rows.



### Example 7
> **Summary**: Configures data table properties for weight and height variables, setting spec limits and enabling display of limits.

<!-- Keywords: #DataTableProperties, #SpecLimits, #JSLScriptingLanguage, #WeightandHeightVariables, #LimitDisplay -->

**Code**:
```jsl
Open("data_table.jmp");
Data Table("data_table"):weight << Set Property( "Spec Limits", {LSL( 0 ), USL( 200 ), Show Limits( 1 )} );
Data Table("data_table"):height << Set Property( "Spec Limits", {LSL( 40 ), USL( 80 ), Show Limits( 1 )} );
```

**Code Explanation**:

1. Open data table;
2. Set weight spec limits.
3. Enable weight limits display.
4. Set height spec limits.
5. Enable height limits display.



### Example 8
> **Summary**: Runs color marking by age in a data table, utilizing the Color or Mark by Column feature with a custom color theme and marker theme.

<!-- Keywords: #JSLScriptingLanguage, #DataVisualization, #ColorMarking, #MarkerTheme, #Customization -->

**Code**:
```jsl
Open("data_table.jmp");
Data Table("data_table") << Color or Mark by Column( :age, Color( 0 ), Marker Theme( "Hollow" ) );
```

**Code Explanation**:

1. Open data table.
2. Select table
3. Apply color by age.
4. Set color theme.
5. Set marker theme.



### Example 9
> **Summary**: Runs the recoding and labeling of a column in a JMP data table, utilizing the Recode Column platform to transform values based on specific conditions.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManipulation, #RecodeColumn, #ValueLabels, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt = Data Table("data_table");
dt << Begin Data Update;
col1 = dt << New Column( dt:weight );
col1 << Set Name( "weight 2" );
dt << Move Selected Columns( {col1}, after( dt:weight ) );
dt << Recode Column(
	dt:weight,
	{Format( _rcNow, "Fixed Dec", 5, 0 ), Word(
		1,
		_rcNow,
		Get Whitespace Characters() || Get Punctuation Characters( Exclude Chars( "'-" ) ),
		Unmatched( _rcNow )
	), Num( _rcNow ), Map Value(
		_rcOrig,
		{64, 1, 67, 2, 74, 3, 79, 4, 81, 5, 84, 6, 85, 7, 91, 8, 92, 9, 93, 10, 95, 11, 98, 12, 99, 13, 104, 14, 105, 15, 106, 16, 107, 17,
		111, 18, 112, 19, 113, 20, 115, 21, 116, 22, 119, 23, 123, 24, 128, 25, 134, 26, 142, 27, 145, 28, 172, 29},
		Unmatched( _rcNow )
	)},
	Target Column( col1 )
);
col1 << Remove Value Labels;
col1 << Value Labels(
	{1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29},
	{"a64", "67", "74", "79", "81", "84", "85", "91", "92", "93", "95", "98", "99", "104", "105", "106", "107", "111", "112", "113", "115",
	"116", "119", "123", "128", "134", "142", "145", "172"}
);
dt << End Data Update;
valLabels = :weight 2 << get value labels;
```

**Code Explanation**:

1. Open data table;
2. Reference "data_table.jmp".
3. Start data update.
4. Create new column "weight 2".
5. Rename column to "weight 2".
6. Move "weight 2" after "weight".
7. Recode "weight" column.
8. Remove value labels from "weight 2".
9. Add value labels to "weight 2".
10. End data update.



### Example 10
> **Summary**: Runs the creation and repositioning of a new column in a data table, renaming it to 'Country 2' and moving it after the existing 'Country' column.

<!-- Keywords: #DataTableOperations, #ColumnManagement, #JSLScripting, #DataUpdate, #TableManipulation -->

**Code**:
```jsl
dt1 = Open("data_table.jmp");
dt = Data Table("data_table");
dt << Begin Data Update;
col1 = dt << New Column( dt:Country );
col1 << Set Name( "Country 2" );
dt << Move Selected Columns( {col1}, after( dt:Country ) );
```

**Code Explanation**:

1. Open data table.
2. Assign data table to variable.
3. Start data update.
4. Create new column from existing.
5. Rename new column.
6. Move new column position.
7. End data update.



### Example 11
> **Summary**: Creates and recodes a new column in a data table, utilizing an external list for comparison and setting specific parameters.

<!-- Keywords: #DataTableOperations, #ColumnCreation, #RecodeColumn, #ExternalDataComparison, #JSLScripting -->

**Code**:
```jsl
dt1 = Open("data_table.jmp");
dt = Data Table("data_table");
dt << Begin Data Update;
col1 = dt << New Column( dt:Country );
col1 << Set Name( "Country 2" );
dt << Move Selected Columns( {col1}, after( dt:Country ) );
dt << Recode Column(
	dt:Country,
	{Choose Closest(
		_rcNow,
		Local( {list, dt_save = Current Data Table()},
			list = Column( Open( "$SAMPLE_DATA/Birth Death.jmp", "Invisible" ), "country" ) << Get Values;
			Current Data Table( dt_save );
			list;
		),
		Max Edit Count( 2 ),
		Max Edit Ratio( 0.25 ),
		Min String Length( 3 )
	)},
	Target Column( col1 )
);
dt << End Data Update;
:Country 2 << set selected;
rows = dt << Get rows where( Contains( :Country 2, "Tunisia" ) );
list2 = :Country 2 << getvalues;
```

**Code Explanation**:

1. Open data table.
2. Assign data table to variable.
3. Start data update.
4. Create new column from existing.
5. Rename new column.
6. Move new column to specified position.
7. Begin recoding process.
8. Choose closest matching values for recoding.
9. Use external data for comparison.
10. Set recoding parameters.
11. Apply recoding to target column.
12. End data update.
13. Select new column.
14. Find rows containing specific value.
15. Retrieve values from new column.



### Example 12
> **Summary**: Runs the principal component analysis (PCA) on variables using the on Correlations option in JMP, allowing for efficient dimensionality reduction and feature extraction.

<!-- Keywords: #JMPScriptingLanguage, #PrincipalComponentAnalysis, #DimensionalityReduction, #FeatureExtraction, #DataAnalysis -->

**Code**:
```jsl
Current Data Table( Open("data_table.jmp") );
dt = Current Data Table();
```

**Code Explanation**:

1. Open data table.
2. Set current data table.



### Example 13
> **Summary**: Opens a data table, creates a new private table, and assigns the first data table to a variable.

<!-- Keywords: #JSLScriptingLanguage, #DataTableOperations, #TableManagement, #VariableAssignment, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
xx = New Table( "test", private );
name = Data Table( 1 );
```

**Code Explanation**:

1. Open data table.
2. Create new table named "test".
3. Set new table to private.
4. Assign first data table to variable "name".



### Example 14
> **Summary**: Sorts a joined data table based on the 'Shuffle' variable, generating an output table with the sorted results.

<!-- Keywords: #JSLScripting, #DataJoin, #Sorting, #OutputTable, #JMP -->

**Code**:
```jsl
dt2 = Open("data_table.jmp");
Current Data Table( dt2 );
```

**Code Explanation**:

1. Open data table;
2. Set current data table.



## Data Table using Set Table Variable
> **Summary**: Sets the current directory as the default name, assigns the current data table to a variable, and prompts the user to pick a directory.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManagement, #DirectoryNavigation, #InteractiveScripting, #JMPScripting -->

**Code**:
```jsl
// Set Current Directory
Names Default To Here( 1 );
dt = Current Data Table();
dt <<
Set Table Variable(
	"Path", Pick Directory()
);
```

**Code Explanation**:

1. Set default names to here.
2. Assign current data table to dt.
3. Set table variable "Path".
4. Prompt user to pick directory.



## Data Table using Pick File
> **Summary**: Sets a custom CSS file for the current data table and prompts the user to select a JMP file.

<!-- Keywords: #JSLScriptingLanguage, #DataTable, #CustomCSSFile, #PickFile, #TableVariable -->

**Code**:
```jsl
// Set Custom .css file
Names Default To Here( 1 );
dt = Current Data Table();
dt <<
set table variable(
	"CustomCssFile", Pick File()
);
```

**Code Explanation**:

1. Set default names context.
2. Get current data table.
3. Set table variable.
4. Prompt for CSS file.



## Data Table using Color by Column
### Example 1
> **Summary**: Visualizes the data table with colors categorized by the 'Category' column, using a Jet color theme and disabling marker coloring.

<!-- Keywords: #JSLScriptingLanguage, #ColorByColumn, #DataVisualization, #JetColorTheme, #MarkerDisabling -->

**Code**:
```jsl
// Color by Category
Current Data Table() <<
Color by Column(
	Category,
	Color( 1 ),
	Color Theme( "Jet" ),
	Marker( 0 ),
	Marker Theme( "" ),
	Continuous Scale( 0 ),
	Reverse Scale( 0 ),
	Excluded Rows( 0 )
);
```

**Code Explanation**:

1. Access current data table.
2. Apply color by column.
3. Use 'Category' column.
4. Set color index to 1.
5. Choose 'Jet' color theme.
6. Disable marker coloring.
7. Set marker theme to none.
8. Disable continuous scale.
9. Disable reverse scale.
10. Exclude rows setting off.



### Example 2
> **Summary**: Visualizes the Police District data table with color coding and marker styles, utilizing the Color by Column function to customize the appearance.

<!-- Keywords: #JMPScriptingLanguage, #DataVisualization, #ColorCoding, #MarkerStyles, #TableAnalysis -->

**Code**:
```jsl
// Mark by Police District
Current Data Table() <<
Color by Column(
	Police District,
	Color( 0 ),
	Color Theme( "" ),
	Marker( 1 ),
	Marker Theme( "Standard" ),
	Continuous Scale( 0 ),
	Reverse Scale( 0 ),
	Excluded Rows( 0 )
);
```

**Code Explanation**:

1. Access current data table.
2. Apply color coding.
3. Use Police District column.
4. Set color index to 0.
5. Clear color theme.
6. Use marker style 1.
7. Apply standard marker theme.
8. Disable continuous scale.
9. Disable reverse scale.
10. Include all rows.



### Example 3
> **Summary**: Visualizes the 'Octane' column in a color-coded format using the Color by Column function, with a custom theme and continuous scale.

<!-- Keywords: #JSLScriptingLanguage, #ColorByColumn, #CustomTheme, #ContinuousScale, #DataVisualization -->

**Code**:
```jsl
// Color by Octane
dt = Current Data Table() <<
Color by Column(
	Octane,
	Color( 1 ),
	Color Theme( "Blue to Gray to Red" ),
	Marker( 0 ),
	Marker Theme( "" ),
	Continuous Scale( 1 ),
	Reverse Scale( 0 ),
	Excluded Rows( 0 )
);
```

**Code Explanation**:

1. Get current data table.
2. Apply color by column.
3. Use "Octane" column.
4. Set color index to 1.
5. Apply "Blue to Gray to Red" theme.
6. Disable marker.
7. Clear marker theme.
8. Enable continuous scale.
9. Disable reverse scale.
10. Include all rows.



## Data Table using Preferences
### Example 1
> **Summary**: Creates and formats a new column in a JMP data table, utilizing JSL scripting to set formulas and formats.

<!-- Keywords: #JMPScriptingLanguage, #DataTableManipulation, #ColumnCreation, #FormulaSetting, #FormatApplication -->

**Code**:
```jsl
Preferences( Show History Panel in Workflow Builder( 0 ) );
w = Workflow();
w << Set Flow Name( "WFB2" );
w << Add JSL Step( "open", "dt=Open(\!"$SAMPLE_DATA/data_table.jmp\!", \!"invisible\!");" );
w << Add JSL Step(
	"new column", "Data Table( \!"data_table.jmp\!" ) << New Column( \!"Column 6\!", Numeric,\!"Continuous\!",Format( \!"Best\!", 12 ));"
);
w << Add JSL Step( "formula", "Data Table( \!"data_table.jmp\!" ):Column 6 << Set Formula( :height / :weight );" );
w << Add JSL Step( "format Col 6", "Data Table( \!"data_table.jmp\!" ):Column 6 << Format( \!"Percent\!", 12, 0 );" );
w << Clear Selection();
w << Select Steps( 1, 4 );
w << Group( "1st open, formula, format" );
w << Clear Selection();
w << Add Empty Group( "next group" );
w << Add JSL Step( "JSL", "x=1200;" );
w << Add JSL Step( "JSL 2", "x / 100;" );
w << Clear Selection();
w << Start over;
w << resume;
```

**Code Explanation**:

1. Set workflow history preference.
2. Create new workflow.
3. Name workflow "WFB2".
4. Add step to open data table.
5. Add step to create new column.
6. Add step to set column formula.
7. Add step to format column.
8. Clear workflow selection.
9. Select first four steps.
10. Group selected steps.



### Example 2
> **Summary**: Creates and formats a new column in a JMP data table, utilizing JSL scripting to set formulas and formats.

<!-- Keywords: #JMPScriptingLanguage, #DataTableManagement, #ColumnCreation, #FormulaSetting, #FormatConfiguration -->

**Code**:
```jsl
Preferences( Show History Panel in Workflow Builder( 0 ) );
If( Host is( Windows ),
	Main Menu( "File:New:Workflow" ),
	Main Menu( "File:New:New Workflow" )
);
w = Workflow();
w << Set Flow Name( "WFB3" );
w << Add JSL Step( "open", "dt=Open(\!"$SAMPLE_DATA/data_table.jmp\!");" );
w << Add JSL Step(
	"new column", "Data Table( \!"data_table.jmp\!" ) << New Column( \!"Column 6\!", Numeric,\!"Continuous\!",Format( \!"Best\!", 12 ));"
);
w << Add JSL Step( "formula", "Data Table( \!"data_table.jmp\!" ):Column 6 << Set Formula( :height / :weight );" );
w << Add JSL Step( "format Col 6", "Data Table( \!"data_table.jmp\!" ):Column 6 << Format( \!"Percent\!", 12, 0 );" );
w << Clear Selection();
w << Select Steps( 1, 4 );
w << Group( "1st open, formula, format" );
Preferences( Show History Panel in Workflow Builder( 1 ) );
```

**Code Explanation**:

1. Set preferences for history panel.
2. Check if host is Windows.
3. Open new workflow.
4. Create workflow object.
5. Set workflow name.
6. Add step to open data table.
7. Add step to create new column.
8. Add step to set formula for new column.
9. Add step to format new column.
10. Restore history panel preference.



### Example 3
> **Summary**: Creates a new column, sets its formula, and formats it in a JMP workflow, while also modifying preferences for the Workflow Builder.

<!-- Keywords: #JMPWorkflow, #DataManipulation, #ColumnCreation, #FormulaSetting, #FormatAdjustment -->

**Code**:
```jsl
Preferences( Show History Panel in Workflow Builder( 0 ), Show Enable Checkboxes( 1 ) );
w = Workflow();
w << Set Flow Name( "WFB3" );
w << Add JSL Step( "open", "dt=Open(\!"$SAMPLE_DATA/data_table.jmp\!");" );
w << Add JSL Step(
	"new column", "Data Table( \!"data_table.jmp\!" ) << New Column( \!"Column 6\!", Numeric,\!"Continuous\!",Format( \!"Best\!", 12 ));"
);
w << Add JSL Step( "formula", "Data Table( \!"data_table.jmp\!" ):Column 6 << Set Formula( :height / :weight );" );
w << Add JSL Step( "format Col 6", "Data Table( \!"data_table.jmp\!" ):Column 6 << Format( \!"Percent\!", 12, 0 );" );
w << Clear Selection();
w << Group( "1st open, formula, format" );
w << Select Steps( 4 );
Preferences( Show History Panel in Workflow Builder( 1 ), Show Enable Checkboxes( 0 ) );
```

**Code Explanation**:

1. Set preferences for workflow.
2. Create a new workflow.
3. Name the workflow "WFB3".
4. Add step to open a data table.
5. Add step to create a new column.
6. Add step to set a formula for the new column.
7. Add step to format the new column.
8. Clear selected steps.
9. Group first three steps together.
10. Select the fourth step.
11. Reset preferences for workflow.



## Data Table using Local
> **Summary**: Creates and configures a new column in a data table, renaming it to 'age 2' and setting its coding property.

<!-- Keywords: #JSLScriptingLanguage, #DataTableOperations, #ColumnManagement, #CodingProperty, #DataUpdate -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Local( {dt, col1},
	dt = Data Table("data_table");
	dt << Begin Data Update;
	col1 = dt << New Column( dt:age );
	col1 << Set Name( "age 2" );
	dt << Move Selected Columns( {col1}, after( dt:age ) );
	For Each Row( col1[] = Match( dt:age, 16, 25, dt:age ) );
	col1 << Set Property( Coding, Eval List( {Col Minimum( col1 ), Col Maximum( col1 )} ) );
	dt << End Data Update;
);
```

**Code Explanation**:

1. Open data table.
2. Define local variables `dt` and `col1`.
3. Assign "data_table" data table to `dt`.
4. Begin data update.
5. Create new column from `dt:age`.
6. Rename new column to "age 2".
7. Move new column after `dt:age`.
8. For each row, set `col1` value based on `dt:age`.
9. Set coding property for `col1`.
10. End data update.



## Data Table using Try
### Example 1
> **Summary**: Adds a new column to a data table, sets a variable, and closes the dataset without saving.

<!-- Keywords: #JSLScriptingLanguage, #DataTableOperations, #ColumnAddition, #VariableAssignment, #DatasetManagement -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Try( Current Data Table() << Add Multiple Columns( "Bad", 1, Before First ) );
x = 2;
Close( dt, nosave );
cert m = [12, 12, 13, 13, 14, 14, 15, 15, 16, 16, 17, 17];
```

**Code Explanation**:

1. Open data table;
2. Try adding "Bad" column.
3. Set variable x to 2.
4. Close dataset without saving.
5. Define matrix cert m.



### Example 2
> **Summary**: Adds a new column to a data table and sets a variable x to 2.

<!-- Keywords: #JSLScriptingLanguage, #DataManipulation, #ColumnAddition, #VariableAssignment, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Try( Current Data Table() << Add Multiple Columns( "Bad", 1, Before First ) );
x = 2;
```

**Code Explanation**:

1. Open data table.
2. Attempt to add column.
3. Set variable x to 2.



## Data Table using Function
### Example 1
> **Summary**: Runs data table subscription and unsubscription processes, enabling real-time updates and notifications in JMP.

<!-- Keywords: #JMPScriptingLanguage, #DataSubscription, #DataTableManagement, #RealTimeUpdates, #JMPAutomation -->

**Code**:
```jsl
Open("data_table.jmp");
MultipleGroupApp.subscribeDataTable = Function( {dt},
	{subscriptionId},
	subscriptionId = dt << subscribe( "sem", onClose( MultipleGroupApp.onTableClose ) );
	subscriptionId;
);
MultipleGroupApp.unsubscribeDataTable = Function( {dt, subscriptionId},
	dt << unsubscribe( subscriptionId, onClose )
);
MultipleGroupApp.onTableClose = Function( {dt},
	dtname = dt << get name;
	MultipleGroupApp.unsubscribeDataTable( dt, subscriptionId );
);
main = Function( {},
	My.data = [=> ];
	My.data[1] = [=> ];
	My.data[1]["dt"] = MY.cdt = Current Data Table();
	subscriptionId = MultipleGroupApp.subscribeDataTable( MY.cdt );
);
main();
Close( Current Data Table(), no save );
renameList = {};
f1 = Function( {dtab},
	dtname = (dtab << getname());
	Print( "opening" );
	Print( dtname );
);
f2 = Function( {dtab},
	dtname = (dtab << getname());
	Print( "closing" );
	Print( dtname );
);
f3 = Function( {dtab, dname},
	{dtname},
	dtname = ((Words( (dtab << getname()), "." ))[1]);
	Insert Into( renameList, dtname );
);
```

**Code Explanation**:

1. Open data table.
2. Define `subscribeDataTable` function.
3. Define `unsubscribeDataTable` function.
4. Define `onTableClose` function.
5. Define `main` function.
6. Initialize `My.data` dictionary.
7. Assign current data table to `MY.cdt`.
8. Subscribe to data table with `subscribeDataTable`.
9. Call `main` function.
10. Close current data table without saving.



### Example 2
> **Summary**: Runs the subscription and unsubscription of a data table in JMP, utilizing the SingleGroupApp to manage closed tables.

<!-- Keywords: #JSLScriptingLanguage, #SingleGroupApp, #DataSubscription, #DataTableManagement, #JMP -->

**Code**:
```jsl
dtx = Open("data_table.jmp");
closedTableList = {};
SingleGroupApp.subscribeDataTable = Function( {dt},
	{subscriptionId},
	subscriptionId = dt << subscribe( ""("client"), onClose( SingleGroupApp.onTableClose ) );
	subscriptionId;
);
SingleGroupApp.onTableClose = Function( {dt},
	If( Is Scriptable( MY.cdt ),
		MY.cdt << get name;
		Insert Into( closedTableList, MY.cdt );
	);
	If( Is Scriptable( My.data[1]["dt"] ),
		My.data[1]["dt"] << get name;
		Insert Into( closedTableList, My.data[1]["dt"] );
	);
	SingleGroupApp.unsubscribeDataTable( dt, subscriptionId );
);
SingleGroupApp.unsubscribeDataTable = Function( {dt, subscriptionId},
	If( Is Scriptable( dt ),
		dt << unsubscribe( subscriptionId, onClose )
	)
);
main = Function( {},
	My.data = [=> ];
	My.data[1] = [=> ];
	My.data[1]["dt"] = MY.cdt = Data Table( Current Data Table() << get name );
	subscriptionId = SingleGroupApp.subscribeDataTable( MY.cdt );
);
main();
Try( Close( dtx, no save ) );
Try( dtx << unsubscribe( subscriptionId, "all" ) );
```

**Code Explanation**:

1. Open data table.
2. Initialize empty closedTableList.
3. Define subscribeDataTable function.
4. Define onTableClose function.
5. Define unsubscribeDataTable function.
6. Define main function.
7. Initialize My.data dictionary.
8. Set My.data[1]["dt"] to current data table.
9. Subscribe to current data table.
10. Call main function.
11. Close data_table.jmp data table without saving.
12. Unsubscribe from data_table.jmp data table.



## Data Table using For
> **Summary**: Runs the opening and inspection of a data table, utilizing loops to interact with the JMP environment.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManagement, #LoopControl, #InteractiveFeatures, #JMP -->

**Code**:
```jsl
For( i = 1, i <= 20, i++,
	Open( "$SAMPLE_DATA/data_table.jmp", private );
	w = Open( "$SAMPLE_DATA/data_table.jmp", invisible );
);
view = Current Data Table() << has data view;
```

**Code Explanation**:

1. Loop starts.
2. Open data table;
3. Open data table;
4. Increment loop counter.
5. Repeat steps 2-4 until loop ends.
6. Get current data table.
7. Check for data view existence.



## Data Table using New Script
> **Summary**: Deletes a formula from the 'Matrix Row' column in a JMP data table, and then collapses whitespace in the resulting string.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManipulation, #StringProcessing, #JMP, #Automation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Current Data Table() << New Script( "test", Current Data Table():Name( "Matrix Row" ) << Delete Formula );
var = Collapse Whitespace( Char( dt << get property( "test" ) ) );
```

**Code Explanation**:

1. Open data table;
2. Access current data table.
3. Create new script named "test".
4. Delete formula from "Matrix Row" column.
5. Get property "test" of data table.
6. Convert property to string.
7. Collapse whitespace in string.
8. Assign result to variable var.



## Data Table using New Window
> **Summary**: Creates four windows with lineup boxes, text boxes, and column list boxes for data tables 1 and 2, demonstrating interactive features like maxSelected(1) and get selected.

<!-- Keywords: #JSL, #JMPScriptingLanguage, #DataTables, #LineupBoxes, #ColumnListBoxes -->

**Code**:
```jsl
dt1 = Open("data_table1.jmp");
dt2 = Open("data_table2.jmp");
nw = New Window( "Test",
	Lineup Box( N Col( 2 ),
		Text Box( "data_table1" ),
		Text Box( "Popcorn2" ),
		c1 = Col List Box( Data Table("data_table1"), all, maxSelected( 1 ), col_var = c1 << get selected ),
		c2 = Col List Box( Data Table("data_table2"), all, maxSelected( 1 ), col_var2 = c2 << get selected )
	)
);
nw << close window;
nw = New Window( "Test2",
	Lineup Box( N Col( 2 ),
		Text Box( "data_table1" ),
		Text Box( "data_table2" ),
		c1 = Col List Box( dt1, all, maxSelected( 1 ), col_var = c1 << get selected ),
		c2 = Col List Box( dt2, all, maxSelected( 1 ), col_var2 = c2 << get selected )
	)
);
nw << close window;
nw = New Window( "Test3",
	Lineup Box( N Col( 2 ),
		Text Box( "data_table" ),
		Text Box( "Popcorn" ),
		c1 = Col List Box( Data Table( dt1 ), all, maxSelected( 1 ), col_var = c1 << get selected ),
		c2 = Col List Box( Data Table( dt2 ), all, maxSelected( 1 ), col_var2 = c2 << get selected )
	)
);
nw << close window;
nw = New Window( "Test4",
	Lineup Box( N Col( 2 ),
		Text Box( "data_table" ),
		Text Box( "Popcorn" ),
		c1 = Col List Box( Data Table( Data Table("data_table") ), all, maxSelected( 1 ), col_var = c1 << get selected ),
		c2 = Col List Box( Data Table( Data Table("data_table") ), all, maxSelected( 1 ), col_var2 = c2 << get selected )
	)
);
nw << close window;
```

**Code Explanation**:

1. Open data table 1;
2. Open data table 2;
3. Create window Test.
4. Add lineup box.
5. Add text box data_table1.
6. Add text box data_table2.
7. Add column list box for data_table1.
8. Add column list box for data_table2.
9. Close window Test.
10. Repeat steps 3-9 for windows Test2, Test3, and Test4.



## Data Table using Run Script
> **Summary**: Creates a path diagram from a data table, allowing for customization of path styles, thickness, and transparency.

<!-- Keywords: #JSLScriptingLanguage, #PathDiagrams, #DataTables, #SEMAnalysis, #JMP16 -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Run Script( "Free Text Floss Reasons" );
dt2 = Data Table("data_table");
```

**Code Explanation**:

1. Open data table.
2. Run script on table.
3. Access new data table.



