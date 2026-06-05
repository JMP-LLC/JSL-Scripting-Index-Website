# Explore Patterns

### Example 1
> **Summary**: Opens a data table and explores patterns for specified variables using the Explore Patterns platform in JMP.

<!-- Keywords: #JMPScriptingLanguage, #ExplorePatterns, #DataTable, #PatternExploration, #JSLScript -->

**Code**:
```jsl
// Explore Patterns
// Open data table
dt = Open("data_table.jmp");
// Explore Patterns
Explore Patterns(
	Y(
		:Activated PTT, :ALT, :ALP, :AST,
		:Bilirubin, :BUN, :Calcium, :CO2,
		:Chloride, :Creatine Kinase,
		:Creatinine, :Erythrocytes,
		:Glucose, :Hematocrit,
		:Hemoglobin, :LDH, :Leukocytes,
		:PCO2, :Partial Pressure Oxygen,
		:pH, :Phosphate, :Platelet,
		:Potassium, :Protein,
		:Prothrombin Time, :Sodium,
		:Urate
	)
);
```

**Code Explanation**:

1. Open table.
2. Explore patterns for variables.



### Example 2
> **Summary**: Explores patterns in sensor measurements, generating a report and including missing values.

<!-- Keywords: #JMPScriptingLanguage, #ExplorePatterns, #ColumnGroup, #MissingValues, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Explore Patterns( Y( Column Group( "Sensor Measurements" ) ) );
rpt = obj << report;
obj << close window;
obj = dt << Explore Patterns( Y( Column Group( "Sensor Measurements" ) ), Include Missing( 1 ) );
```

**Code Explanation**:

1. Open data table.
2. Launch Explore Patterns.
3. Set Y variable group.
4. Generate report object.
5. Close Explore Patterns window.
6. Relaunch Explore Patterns.
7. Include missing values option.
8. Set Y variable group again.
9. Generate report object again.
10. Explore Patterns window remains open.



### Example 3
> **Summary**: Explores patterns in laboratory results data, grouping by sex and applying various formatting options.

<!-- Keywords: #JSLScriptingLanguage, #ExplorePatterns, #DataVisualization, #LaboratoryResults, #SexBasedGrouping -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Explore Patterns(
	Y( Column Group( "Laboratory Results" ) ),
	Minimum Rows for Linear Relationship( 4 ),
	Formatted Widths( 1 ),
	Leading and Trailing Digits( 1 ),
	Fraction Length( 1 ),
	Duplicates Across Columns( 1 ),
	Linear Relationships( 1 ),
	By( :SEX )
);
obj2 = dt << Explore Patterns(
	Y( Column Group( "Laboratory Results" ) ),
	Minimum Rows for Linear Relationship( 4 ),
	Formatted Widths( 1 ),
	Leading and Trailing Digits( 1 ),
	Fraction Length( 1 ),
	Duplicates Across Columns( 1 ),
	Linear Relationships( 1 ),
	Where( :SEX == "F" )
);
obj3 = dt << Explore Patterns(
	Y( Column Group( "Laboratory Results" ) ),
	Minimum Rows for Linear Relationship( 4 ),
	Formatted Widths( 1 ),
	Leading and Trailing Digits( 1 ),
	Fraction Length( 1 ),
	Duplicates Across Columns( 1 ),
	Linear Relationships( 1 ),
	Where( :SEX == "M" )
);
```

**Code Explanation**:

1. Open data table.
2. Explore patterns for all groups.
3. Set minimum rows for linear relationship.
4. Define formatted widths.
5. Set leading and trailing digits.
6. Define fraction length.
7. Allow duplicates across columns.
8. Enable linear relationships.
9. Group by sex.
10. Explore patterns for females.
11. Explore patterns for males.



### Example 4
> **Summary**: Explores patterns in a data table by specifying Y variables and setting various parameters for run size, duplicates, and linear relationships.

<!-- Keywords: #JSLScriptingLanguage, #ExplorePatterns, #DataTableAnalysis, #PatternDiscovery, #StatisticalModeling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
explore_patterns_obj = dt << Explore Patterns(
	Y(
		:Activated PTT, :ALT, :ALP, :AST, :Bilirubin, :BUN, :Calcium, :CO2, :Chloride, :Creatine Kinase, :Creatinine, :Erythrocytes,
		:Glucose, :Hematocrit, :Hemoglobin, :LDH, :Leukocytes, :PCO2, :Partial Pressure Oxygen, :pH, :Phosphate, :Platelet, :Potassium,
		:Protein, :Prothrombin Time, :Sodium, :Urate
	),
	Minimum Run Size( -1 ),
	Minimum Longest Duplicate Size( 0 ),
	Minimum Cross Column Duplicate Run Size( 1 ),
	Minimum Rows for Linear Relationship( 2 )
);
```

**Code Explanation**:

1. Open data table.
2. Create Explore Patterns object.
3. Specify Y variables.
4. Set minimum run size.
5. Set minimum duplicate size.
6. Set cross column duplicate run size.
7. Set minimum rows for linear relationship.



## Explore Patterns using Collapse Whitespace
> **Summary**: Runs exploratory data analysis by opening a data table, exploring patterns in various combinations of age, weight, height, and sex, and collapsing log whitespace.

<!-- Keywords: #JSLScriptingLanguage, #DataExploration, #PatternExploration, #LogWhitespaceCollapse, #JMPScript -->

**Code**:
```jsl
dt = Open("data_table.jmp");
lc = Collapse Whitespace( Log Capture( ep = dt << Explore Patterns( Y( :age ) ) ) );
lc = Collapse Whitespace( Log Capture( ep = dt << Explore Patterns( Y( :age, :weight, :height ) ) ) );
ep << close window;
lc = Collapse Whitespace( Log Capture( ep = dt << Explore Patterns( Y( :age, :sex ) ) ) );
lc = Collapse Whitespace( Log Capture( ep = dt << Explore Patterns( Y( :age, :sex, :weight, :height ) ) ) );
ep << close window;
```

**Code Explanation**:

1. Open data table;
2. Explore Patterns on age.
3. Collapse log whitespace.
4. Explore Patterns on age, weight, height.
5. Collapse log whitespace.
6. Close Explore Patterns window.
7. Explore Patterns on age, sex.
8. Collapse log whitespace.
9. Explore Patterns on age, sex, weight, height.
10. Collapse log whitespace.



