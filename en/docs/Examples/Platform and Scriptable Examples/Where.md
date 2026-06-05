# Where

### Example 1
> **Summary**: Selects rows in a data table where the type is 'interior'.

<!-- Keywords: #JSLScriptingLanguage, #DataTableOperations, #SelectionCriteria, #ConditionalStatements, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << select where( :type of space == "interior" );
```

**Code Explanation**:

1. Open data table.
2. Select rows where type is interior.



### Example 2
> **Summary**: Selects female records from a data table, utilizing the WHERE clause to filter rows based on sex.

<!-- Keywords: #JSLScriptingLanguage, #DataTableOperations, #WHEREClause, #FilteringData, #Sex-BasedAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << select where( :sex == "F" );
```

**Code Explanation**:

1. Open data table;
2. Select rows where sex is female.



### Example 3
> **Summary**: Selects data by opening a data table, selecting rows where Calories equals 190.

<!-- Keywords: #DataSelection, #JMPScriptingLanguage, #TableOperations, #FilteringData, #CalorieAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << select where( :Calories == 190 );
```

**Code Explanation**:

1. Open data table;
2. Select rows where Calories equals 190.



### Example 4
> **Summary**: Selects and excludes rows in a data table based on specific conditions, utilizing the WHERE clause to identify matching records.

<!-- Keywords: #JSLScriptingLanguage, #DataTableOperations, #RowSelection, #Exclusion, #WHEREClause -->

**Code**:
```jsl
dt = Open("data_table.jmp");
myrows = dt << get rows where( :age == 12 );
dt << select rows( myrows );
dt << exclude( 1 );
dt << hide( 1 );
```

**Code Explanation**:

1. Open data table.
2. Identify rows where age is 12.
3. Select identified rows.
4. Exclude selected rows.
5. Hide excluded rows.



### Example 5
> **Summary**: Selects and hides rows in a data table based on specific conditions, utilizing the WHERE clause to restrict the selection.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManipulation, #WHEREClause, #SelectionRestriction, #RowHiding -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << select where( :age == 14, current selection( "Restrict" ) );
dt << hide;
dt << clear select;
```

**Code Explanation**:

1. Open data table;
2. Select rows where age is 14.
3. Restrict selection to current selection.
4. Hide selected rows.
5. Clear selection.



### Example 6
> **Summary**: Selects and hides rows in a data table based on specific conditions, utilizing the WHERE clause.

<!-- Keywords: #JSLScriptingLanguage, #DataTableOperations, #WHEREClause, #RowSelection, #HideRows -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << select where( :age == 14 & :sex == "F" );
dt << hide;
dt << clear select;
```

**Code Explanation**:

1. Open data table.
2. Select rows where age is 14.
3. Select rows where sex is female.
4. Hide selected rows.
5. Clear selection.



### Example 7
> **Summary**: Excludes rows with specific smoking history values from a data table, utilizing the WHERE clause and EXCLUDE operation.

<!-- Keywords: #JSLScriptingLanguage, #DataExclusion, #WHEREClause, #EXCLUDEOperation, #SmokingHistory -->

**Code**:
```jsl
dt = Open("data_table.jmp");
myExcludedRows = dt << get rows where( :Smoking History == "pipes" | :SmokingHistory == "cigarettes" );
dt << select rows( myExcludedRows );
dt << exclude;
```

**Code Explanation**:

1. Open data table.
2. Identify smoking history rows.
3. Select identified rows.
4. Exclude selected rows.



### Example 8
> **Summary**: Selects rows from a data table where age equals 14, utilizing the WHERE clause.

<!-- Keywords: #JSLScriptingLanguage, #DataTableOperations, #WHEREClause, #RowSelection, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << select where( :age == 14 );
```

**Code Explanation**:

1. Open data table;
2. Select rows where age equals 14.



### Example 9
> **Summary**: Selects and excludes rows in a data table based on specific conditions, utilizing the Where() function to filter out unwanted records.

<!-- Keywords: #JSLScriptingLanguage, #DataTableOperations, #RowSelection, #Exclusion, #ConditionalFiltering -->

**Code**:
```jsl
dt = Open("data_table.jmp");
myRows = dt << get rows where( :age == 14 & :sex == "F" );
dt << select rows( myRows );
dt << exclude;
```

**Code Explanation**:

1. Open data table.
2. Assign rows where age is 14 and sex is female.
3. Select assigned rows.
4. Exclude selected rows.



### Example 10
> **Summary**: Selects rows in a data table where smoking history is 'cigarettes', utilizing the WHERE clause.

<!-- Keywords: #JSLScriptingLanguage, #DataTableOperations, #WHEREClause, #SelectionCriteria, #SmokingHistory -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << select where( :Smoking History == "cigarettes" );
```

**Code Explanation**:

1. Open data table.
2. Select rows where smoking history is cigarettes.



### Example 11
> **Summary**: Selects and filters data rows based on specific conditions, opening a JMP data table and selecting rows where age is 14 and sex is 'F'.

<!-- Keywords: #JSLScriptingLanguage, #DataTableOperations, #Filtering, #Selection, #ConditionalStatements -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << select where( :age == 14 & :sex == "F" );
```

**Code Explanation**:

1. Open data table;
2. Select rows where age is 14.
3. Filter selected rows for female sex.



### Example 12
> **Summary**: Selects and excludes data rows based on specific conditions, opening a JMP data table and filtering by age and sex.

<!-- Keywords: #JMPScriptingLanguage, #DataTableManagement, #Filtering, #Exclusion, #ConditionalSelection -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << select where( :age == 12 & :sex == "F" );
dt << exclude;
```

**Code Explanation**:

1. Open data table.
2. Select rows where age is 12.
3. Select rows where sex is female.
4. Exclude selected rows.



### Example 13
> **Summary**: Selects and filters data rows based on specific conditions, opening a JMP data table and selecting male individuals aged 16.

<!-- Keywords: #JMPScriptingLanguage, #DataSelection, #Filtering, #ConditionalStatements, #DataTableOperations -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << select where( :sex == "M" & :age == 16 );
```

**Code Explanation**:

1. Open data table;
2. Select rows where sex is Male.
3. Filter selected rows where age is 16.



### Example 14
> **Summary**: Selects and filters data rows based on sex and height, opening a JMP data table.

<!-- Keywords: #JMPScriptingLanguage, #DataSelection, #Filtering, #DataTableOperations, #JSLSyntax -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << select where( :sex == "M" & 58 <= :height < 60 );
```

**Code Explanation**:

1. Open data table.
2. Select rows where sex is male.
3. Filter height between 58 and 60 inches.



### Example 15
> **Summary**: Selects rows in a data table where the name is 'LAWRENCE'.

<!-- Keywords: #JSLScriptingLanguage, #DataTableOperations, #SelectionCriteria, #ConditionalStatements, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << select where( :name == "LAWRENCE" );
```

**Code Explanation**:

1. Open data table.
2. Select rows where name is Lawrence.



### Example 16
> **Summary**: Selects and labels specific rows in a data table, utilizing the WHERE clause to filter by age and name.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManipulation, #WHEREClause, #RowSelection, #Labeling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << clear row states;
rs = dt << select where( :age == 12 );
rs << hide and exclude;
rs = dt << select where( :name == "LESLIE" );
dt << label();
```

**Code Explanation**:

1. Open data table.
2. Clear row states.
3. Select age 12 rows.
4. Hide and exclude selected rows.
5. Select name "LESLIE".
6. Label selected rows.



### Example 17
> **Summary**: Selects and hides rows in a data table based on specific conditions, utilizing the WHERE clause to filter out unwanted data.

<!-- Keywords: #JSLScriptingLanguage, #DataTableOperations, #WHEREClause, #RowSelection, #DataFiltering -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << select where( :age == 12 );
dt << hide;
```

**Code Explanation**:

1. Open data table.
2. Select rows where age is 12.
3. Hide selected rows.



### Example 18
> **Summary**: Selects rows from a data table where age is 17, utilizing the WHERE clause.

<!-- Keywords: #JSLScriptingLanguage, #DataTableOperations, #WHEREClause, #SelectionCriteria, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << select where( :age == 17 );
```

**Code Explanation**:

1. Open data table.
2. Select rows where age is 17.



### Example 19
> **Summary**: Process of updating names in a data table by concatenating special characters, specifically targeting rows where the name is 'KATIE'.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManipulation, #ConditionalStatements, #StringConcatenation, #RowSelection -->

**Code**:
```jsl
dt = Open("data_table.jmp");
rs = dt << get rows where( :name == "KATIE" );
:name[rs] = "KATIE" || "\";
```

**Code Explanation**:

1. Open data table.
2. Assign table reference to `dt`.
3. Get rows where name is "KATIE".
4. Assign row indices to `rs`.
5. Concatenate special character to names.
6. Update name column with new values.



## Select Where 
### Example 1
> **Summary**: Selects rows in a data table based on specific country codes, utilizing the Select Where platform.

<!-- Keywords: #JSLScriptingLanguage, #DataTableOperations, #SelectWhere, #CountryCodes, #DataFiltering -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Select Where( :Country == 1125 | :Country == 4120 );
```

**Code Explanation**:

1. Open data table;
2. Select rows where Country is 1125 or 4120.



### Example 2
> **Summary**: Selects male data points from a data table, utilizing the Select Where platform in JMP.

<!-- Keywords: #JMPScriptingLanguage, #DataSelection, #SelectWhere, #JMP, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Select Where( :sex == "M" );
```

**Code Explanation**:

1. Open data table.
2. Select rows where sex is male.



### Example 3
> **Summary**: Filtering and selection process for a data table, excluding records with specific values and clearing any previous selections.

<!-- Keywords: #JMPScriptingLanguage, #DataTableOperations, #FilteringandSelection, #DataPreparation, #ScriptingAutomation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Select Where( :sex == "F" & :height != 61 );
dt << Exclude;
dt << Clear Select;
```

**Code Explanation**:

1. Open data table.
2. Select female records.
3. Exclude height 61 records.
4. Clear selection.



### Example 4
> **Summary**: Selects and hides data table rows based on age criteria, utilizing JMP's built-in filtering capabilities.

<!-- Keywords: #JMPScriptingLanguage, #DataTableManipulation, #Filtering, #Selection, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Select Where( :age > 50 );
dt << Hide;
```

**Code Explanation**:

1. Open data table.
2. Select rows where age > 50.
3. Hide selected rows.



### Example 5
> **Summary**: Selects and filters rows in a data table based on specific conditions, including age, sex, and weight.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManipulation, #Filtering, #Selection, #RowStates -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << get row states;
obj = dt << Select Where( :age == 17 & :sex == "M" & :weight == 64 );
df = obj << get row states;
```

**Code Explanation**:

1. Open data table;
2. Get row states.
3. Select rows where age is 17.
4. Select rows where sex is "M".
5. Select rows where weight is 64.
6. Get row states again.



### Example 6
> **Summary**: Data filtering and extraction by opening a data table, selecting rows based on a specific player, creating a data view, and extracting all columns as a matrix.

<!-- Keywords: #JSLScriptingLanguage, #DataFiltering, #DataExtraction, #MatrixOperations, #JMPDataTables -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Select Where( :Player == "Rick Robey" );
dt2 = dt << data view();
m = dt2 << Get All Columns As Matrix;
```

**Code Explanation**:

1. Open data table;
2. Select rows where Player is Rick Robey.
3. Create data view of selected rows.
4. Extract all columns as matrix.



### Example 7
> **Summary**: Selects and hides rows in a JMP data table based on specific age conditions, utilizing various data manipulation techniques.

<!-- Keywords: #JMPScriptingLanguage, #DataTableManipulation, #RowSelection, #HideandExclude, #GetRowStates -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Select Where( :age == 12 );
dt << Hide;
dt << Hide and Exclude;
rs = dt << get row states;
dt << clear row states;
dt << Select Where( :age == 12 );
dt << Exclude;
dt << Select Where( :age == 12 | :age == 13 );
dt << Hide and Exclude;
rs = dt << Get Row States;
```

**Code Explanation**:

1. Open data_table data
2. Select rows where age is 12.
3. Hide selected rows.
4. Hide and exclude selected rows.
5. Get row states.
6. Clear row states.
7. Select rows where age is 12.
8. Exclude selected rows.
9. Select rows where age is 12 or 13.
10. Hide and exclude selected rows.



### Example 8
> **Summary**: Selects and groups data rows based on specific conditions, retrieving names from selected rows.

<!-- Keywords: #JSLScriptingLanguage, #DataSelection, #Grouping, #DataRetrieval, #ConditionalStatements -->

**Code**:
```jsl
dt_limit = Open("data_table.jmp");
dt_limit << Select Where( :age == 12 );
Group1List = (dt_limit:name[dt_limit << get selected rows]);
```

**Code Explanation**:

1. Open data table;
2. Select rows where age is 12.
3. Retrieve names from selected rows.



## Where using Add Filter
### Example 1
> **Summary**: Data filtering by opening a table, adding a filter condition based on the 'Region' column, and clearing the filter.

<!-- Keywords: #JMPScriptingLanguage, #DataFiltering, #TableOperations, #ConditionalLogic, #DataManipulation -->

**Code**:
```jsl
dt = Open( "$SAMPLE_DATA/data_table.jmp", "private" );
df = dt << Data Filter;
df << Add Filter( Columns( :Region ), Where( :Region == "N" ) );
df << Clear;
```

**Code Explanation**:

1. Open table.
2. Access data filter.
3. Add filter condition.
4. Clear filter.



### Example 2
> **Summary**: Runs the filtering process to extract data from a specific region, 'N', by opening a data table, accessing the data filter, adding a region filter, and clearing the data filter.

<!-- Keywords: #JSLScripting, #DataFiltering, #RegionFiltering, #DataTableOperations, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
df = dt << Data Filter;
df << Add Filter( Columns( :Region ), Where( :Region == "N" ) );
df << Clear;
```

**Code Explanation**:

1. Open data table.
2. Access data filter.
3. Add region filter.
4. Set region to "N".
5. Clear data filter.



## Get Rows Where 
> **Summary**: Runs data table operations by opening a file, retrieving all rows, and defining an age list.

<!-- Keywords: #JSLScriptingLanguage, #DataTableOperations, #AgeListDefinition, #GetRowsWhere, #MatrixAssignment -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Get Rows Where();
certage =
"[12, 12, 12, 12, 12, 12, 12, 12, 13, 13, 13, 13, 13, 13, 13, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 15, 15, 15, 15, 15, 15, 15, 16, 16, 16, 17, 17, 17]";
a = :age << GetAsMatrix;
```

**Code Explanation**:

1. Open data table;
2. Retrieve all rows from table.
3. Define ages list.
4. Assign age column to variable a.



## Select where 
### Example 1
> **Summary**: Selects and hides rows in a data table, based on specific conditions.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManipulation, #RowSelection, #ColumnHiding, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Select where( :age == 13 );
dt << Hide;
dt << Hide( 1 );
dt << Hide;
dt << Hide;
dt << Hide( 0 );
```

**Code Explanation**:

1. Open data table;
2. Select rows where age is 13.
3. Hide selected rows.
4. Hide first column.
5. Hide selected rows again.
6. Hide selected rows again.
7. Hide all columns.
8. Unhide first column.



### Example 2
> **Summary**: Runs data table operations to select rows based on age, apply labels, and manage label colors.

<!-- Keywords: #JMPScriptingLanguage, #DataTableOperations, #LabelManagement, #ConditionalSelection, #JSLCode -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Select where( :age == 13 );
dt << Label;
dt << Label( 1 );
dt << Label;
dt << Label;
dt << Label( 0 );
```

**Code Explanation**:

1. Open data table.
2. Select rows where age is 13.
3. Apply label to selected rows.
4. Set label color to red.
5. Apply label again.
6. Set label color to default.
7. Apply label again.
8. Remove label from selected rows.



### Example 3
> **Summary**: Data filtering and labeling operations on a JMP data table, selecting rows where age is 13 and hiding labels for those rows.

<!-- Keywords: #JMPScriptingLanguage, #DataFiltering, #Labeling, #TableOperations, #ConditionalSelection -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Select where( :age == 13 );
dt << Label << Hide( 1 ) << Exclude( 0 );
dt << Label( 1 ) << Hide << Exclude;
dt << Label << Hide( 0 ) << Exclude( 0 );
dt << Label << Hide << Exclude;
dt << Label( 0 ) << Hide( 0 ) << Exclude( 0 );
```

**Code Explanation**:

1. Open data table.
2. Select rows where age is 13.
3. Hide label for selected rows.
4. Exclude selected rows.
5. Hide label for all rows.
6. Exclude all rows.
7. Hide label for all rows.
8. Exclude all rows.
9. Hide label for no rows.
10. Exclude no rows.



