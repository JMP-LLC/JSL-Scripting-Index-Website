# Column

### Example 1
> **Summary**: Sets value labels for the 'sex' column in a JMP data table, enabling the use of these labels for further analysis.

<!-- Keywords: #JSLScriptingLanguage, #ValueLabels, #DataTable, #ColumnOperations, #JMP -->

**Code**:
```jsl
// Set Sex Value Labels
// Open data table
dt = Open("data_table.jmp");
// Set Sex Value Labels
Column( "sex" ) <<
ValueLabels(
	{"M", "F"},
	{"Male", "Female"}
);
Column( "sex" ) << UseValueLabels;
```

**Code Explanation**:

1. Open data table.
2. Set Sex value labels.
3. Use value labels for sex.



### Example 2
> **Summary**: Sets age value labels for a data table column, enabling the use of custom labels in subsequent analyses.

<!-- Keywords: #JSLScriptingLanguage, #DataTableOperations, #ValueLabels, #CustomLabels, #DataAnalysis -->

**Code**:
```jsl
// Set Age Value Labels
// Open data table
dt = Open("data_table.jmp");
// Set Age Value Labels
Column( "age" ) <<
ValueLabels(
	{12, 13, 14, 15, 16, 17},
	{"Twelve", "Thirteen", "Fourteen",
	"Fifteen", "Sixteen", "Seventeen"}
);
Column( "age" ) << UseValueLabels;
```

**Code Explanation**:

1. Open data table.
2. Set Age Value Labels.
3. Define age labels.
4. Apply value labels.
5. Enable value labels.



### Example 3
> **Summary**: Configures specification limits for a column in a JMP data table, setting lower and upper spec limits, target value, and displaying specification limits.

<!-- Keywords: #JSLScriptingLanguage, #SpecificationLimits, #DataTableConfiguration, #JMP, #ColumnProperties -->

**Code**:
```jsl
Open("data_table.jmp");
Column( "Delay" ) << Set Property( "Spec Limits", {LSL( -10 ), USL( 40 ), Target( 15 ), Show Limits( 1 )} );
```

**Code Explanation**:

1. Open data table;
2. Access "Delay" column.
3. Set lower spec limit to -10.
4. Set upper spec limit to 40.
5. Set target value to 15.
6. Display specification limits.



### Example 4
> **Summary**: Runs the ordering of values in the 'height' column of a data table, utilizing a specific set of ordered values.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManagement, #ValueOrdering, #ColumnProperties, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
  
Column( dt, "height" ) << Set Property( "Value Ordering", {51, 52, 55, 56, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70} );
```

**Code Explanation**:

1. Open data table.
2. Set value ordering for height column.



### Example 5
> **Summary**: Sets up a data table and sets value order for the 'height' column, preparing it for further analysis.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManagement, #ValueOrder, #ColumnProperties, #JMPDataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Column( dt, "height" ) << Set Property( "Value Order", {51, 52, 55, 56, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70} );
```

**Code Explanation**:

1. Open data table.
2. Set value order for height column.



### Example 6
> **Summary**: Runs the setup for multivariate correlations analysis with mahalanobis distances by opening a data table and setting the age column as continuous.

<!-- Keywords: #MultivariateCorrelations, #MahalanobisDistance, #DataTableSetup, #ContinuousColumn, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Column( dt, "age" ) << modeling type( "Continuous" );
```

**Code Explanation**:

1. Open data table;
2. Set age column as continuous.



### Example 7
> **Summary**: Runs the specification of limits for a column in a JMP data table, setting LSL to 40, USL to 100, and target value to 70.

<!-- Keywords: #JMPScriptingLanguage, #DataTableManagement, #ColumnProperties, #SpecLimits, #TargetValue -->

**Code**:
```jsl
Open("data_table.jmp");
Column( "height" ) << Set Property( "Spec Limits", {LSL( 40 ), USL( 100 ), Target( 70 ), Show Limits( 1 )} );
```

**Code Explanation**:

1. Open data_table data
2. Set spec limits for height column.
3. LSL set to 40.
4. USL set to 100.
5. Target set to 70.
6. Show limits enabled.



### Example 8
> **Summary**: Sets age column modeling type to continuous and sets values for specific rows to missing.

<!-- Keywords: #JSLScriptingLanguage, #DataTableOperations, #ColumnModeling, #MissingValues, #LoopControl -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Column( dt, "age" ) << set modeling type( "continuous" );
For( i = 38, i <= 40, i++,
	Column( dt, "age" )[i] = .
);
```

**Code Explanation**:

1. Open table.
2. Set age as continuous.
3. Loop from row 38 to 40.
4. Set age values to missing.



### Example 9
> **Summary**: Process of performing multivariate correlations analysis with mahalanobis distances on a data table, utilizing JMP's built-in functionality.

<!-- Keywords: #MultivariateCorrelation, #MahalanobisDistance, #JMPScriptingLanguage, #DataAnalysis, #StatisticalModeling -->

**Code**:
```jsl
Open("data_table.jmp");
Column( "Landfall in USA" ) << Modeling Type( "Continuous" );
```

**Code Explanation**:

1. Open data table;
2. Set column modeling type.



### Example 10
> **Summary**: Formats a 'height' column in a JMP data table as currency with a specified precision and scale.

<!-- Keywords: #JSLScriptingLanguage, #DataTableFormatting, #CurrencyFormat, #PrecisionControl, #ScaleAdjustment -->

**Code**:
```jsl
Open("data_table.jmp");
Column( "height" ) << Format( "Currency", "USD", 10, 0 );
```

**Code Explanation**:

1. Open data table;
2. Format height column as currency.



### Example 11
> **Summary**: Assigns value labels to a specific column in an open data table, defining label ranges and values.

<!-- Keywords: #JSLScriptingLanguage, #ValueLabels, #DataTableOperations, #ColumnAccess, #LabelRanges -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Column( dt, "height" ) << value labels( {51 <= "below 63" <= 63} );
```

**Code Explanation**:

1. Open data table.
2. Assign table to variable `dt`.
3. Access "height" column.
4. Apply value labels to "height".
5. Define label range for values.
6. Label values below 63.
7. Label values equal to 63.



### Example 12
> **Summary**: Runs the renaming and labeling of a column in a JMP data table, allowing for interactive filtering by gender.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManagement, #ColumnRenaming, #ValueLabels, #InteractiveFiltering -->

**Code**:
```jsl
dt = Open("data_table.jmp");
col = Column( dt, "sex" );
col << Set Name( "gender with Value Labels" );
col << Value Labels( {"F" = "Females", "M" = "Males"} );
col << Use Value Labels( 1 );
```

**Code Explanation**:

1. Open table.
2. Assign column.
3. Rename column.
4. Set value labels.
5. Enable value labels.



### Example 13
> **Summary**: Formats sales and employees columns in a JMP data table, using thousands separators for improved readability.

<!-- Keywords: #JMPScriptingLanguage, #DataTableFormatting, #ThousandsSeparator, #ColumnFormat, #JSLScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Column( "sales($M)" ) << Format( "use thousands separator" );
Column( "#employees" ) << Format( "use thousands separator" );
```

**Code Explanation**:

1. Open data table.
2. Format sales column.
3. Format employees column.



### Example 14
> **Summary**: Selects and deletes specific rows in a data table, utilizing the Recode option to modify column settings.

<!-- Keywords: #JSLScriptingLanguage, #DataTableOperations, #RecodeOption, #RowSelection, #DataManipulation -->

**Code**:
```jsl
dt2 = Open("data_table.jmp");
Column( "weight" ) << Set Selected;
Main Menu( "Cols:Recode" );
dt2 << Select Rows( [5, 6] );
dt2 << Delete rows();
```

**Code Explanation**:

1. Open data table.
2. Select weight column.
3. Access Recode option.
4. Select specific rows.
5. Delete selected rows.



### Example 15
> **Summary**: Selects and excludes rows in a JMP data table, utilizing the Main Menu to access recoding options.

<!-- Keywords: #JMPScriptingLanguage, #DataTableManagement, #RowSelection, #RecodeOptions, #MainMenu -->

**Code**:
```jsl
dt3 = Open("data_table.jmp");
Column( "weight" ) << Set Selected;
Main Menu( "Cols:Recode" );
dt3 << Select Rows( [5, 6] );
dt3 << Exclude();
dt3 << Select Rows( [10, 11] );
dt3 << Hide();
```

**Code Explanation**:

1. Open data table.
2. Select weight column.
3. Access recode menu.
4. Select rows 5 and 6.
5. Exclude selected rows.
6. Select rows 10 and 11.
7. Hide selected rows.



### Example 16
> **Summary**: Runs the selection and recoding of a specific column in a JMP data table, allowing for further analysis.

<!-- Keywords: #JMPScriptingLanguage, #DataTableOperations, #ColumnSelection, #RecodeOption, #MultivariateAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Column( "weight" ) << Set Selected;
Main Menu( "Cols:Recode" );
```

**Code Explanation**:

1. Open data table.
2. Select weight column.
3. Access Columns menu.
4. Choose Recode option.



### Example 17
> **Summary**: Excludes specific columns from a data table, retrieving the excluded column list for further analysis.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManagement, #ColumnExclusion, #DataAnalysis, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Column( dt, "Turning Circle" ) << Exclude( 1 );
Column( dt, "Type" ) << Exclude( 1 );
Column( dt, "Model" ) << Exclude( 1 );
act excluded = dt << Get Excluded Columns;
excludeList = {};
For( i = 1, i <= N Col( dt ), i++,
	Insert Into( excludeList, Column( i ) << Get Excluded )
);
```

**Code Explanation**:

1. Open data table.
2. Exclude first row from "Turning Circle".
3. Exclude first row from "Type".
4. Exclude first row from "Model".
5. Retrieve excluded columns.
6. Initialize empty exclude list.
7. Loop through all columns.
8. Insert exclusion status into list.
9. End loop.



### Example 18
> **Summary**: Runs the labeling and retrieval of columns in a JMP data table, utilizing the Get Labeled Columns function.

<!-- Keywords: #JSLScriptingLanguage, #JMPDataTables, #ColumnLabeling, #GetLabeledColumns, #DataTableOperations -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Column( dt, "Turning Circle" ) << Label( 1 );
Column( dt, "Type" ) << Label( 1 );
Column( dt, "Model" ) << Label( 1 );
act labelled = dt << Get Labeled Columns;
act labeled = dt << Get Labeled Columns;
labelList = {};
For( i = 1, i <= N Col( dt ), i++,
	Insert Into( labelList, Column( i ) << Get Labelled )
);
```

**Code Explanation**:

1. Open data table.
2. Label "Turning Circle".
3. Label "Type".
4. Label "Model".
5. Retrieve labeled columns.
6. Retrieve labeled columns again.
7. Initialize label list.
8. Loop through all columns.
9. Get column labels.
10. Insert labels into list.



### Example 19
> **Summary**: Selects and retrieves specific columns from a data table, providing a list of selected columns for further analysis.

<!-- Keywords: #JSLScriptingLanguage, #DataTableOperations, #ColumnSelection, #DataAnalysis, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Column( dt, "Turning Circle" ) << Set Selected;
Column( dt, "Type" ) << Set Selected;
Column( dt, "Model" ) << Set Selected;
act selected = dt << Get selected Columns;
selectList = {};
For( i = 1, i <= N Col( dt ), i++,
	Insert Into( selectList, Column( i ) << Get selected )
);
```

**Code Explanation**:

1. Open data table.
2. Select "Turning Circle" column.
3. Select "Type" column.
4. Select "Model" column.
5. Get selected columns.
6. Initialize selection list.
7. Loop through all columns.
8. Check each column's selection status.
9. Insert selection status into list.
10. End loop.



### Example 20
> **Summary**: Locks and retrieves specific columns in a JMP data table, allowing for interactive filtering and analysis.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManagement, #ColumnLocking, #InteractiveAnalysis, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Column( dt, "Turning Circle" ) << Scroll Lock( 1 );
Column( dt, "Type" ) << Scroll Lock( 1 );
Column( dt, "Model" ) << Scroll Lock( 1 );
act scrolled = dt << Get Scroll Locked Columns;
scrollList = {};
For( i = 1, i <= N Col( dt ), i++,
	Insert Into( scrollList, Column( i ) << Get Scroll Locked )
);
```

**Code Explanation**:

1. Open table.
2. Lock "Turning Circle" column.
3. Lock "Type" column.
4. Lock "Model" column.
5. Get locked columns.
6. Initialize scrollList.
7. Loop through columns.
8. Check each column's lock state.
9. Add lock states to scrollList.
10. End loop.



### Example 21
> **Summary**: Hides and unhides specific columns in a JMP data table, allowing for dynamic column management.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManagement, #ColumnHiding, #JMPScripting, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Column( dt, "brand" ) << set Hidden( 1 );
Column( dt, "softness" ) << set Hidden( 1 );
Column( dt, "previous use" ) << set Hidden( 1 );
act hidden = dt << Get Hidden Columns;
hideList = {};
For( i = 1, i <= N Col( dt ), i++,
	Insert Into( hideList, Column( i ) << Get Hidden )
);
Column( dt, "brand" ) << set Hidden( 0 );
Column( dt, "softness" ) << set Hidden( 0 );
Column( dt, "previous use" ) << set Hidden( 0 );
act hidden = dt << Get Hidden Columns;
hideList = {};
For( i = 1, i <= N Col( dt ), i++,
	Insert Into( hideList, Column( i ) << Get Hidden )
);
```

**Code Explanation**:

1. Open data table.
2. Hide "brand" column.
3. Hide "softness" column.
4. Hide "previous use" column.
5. Get list of hidden columns.
6. Initialize empty list hideList.
7. Loop through all columns.
8. Insert hidden status into hideList.
9. Unhide "brand" column.
10. Unhide "softness" column.
11. Unhide "previous use" column.
12. Get updated list of hidden columns.
13. Reinitialize empty list hideList.
14. Loop through all columns again.
15. Insert updated hidden status into hideList.



### Example 22
> **Summary**: Runs the exclusion and re-inclusion of specific columns in a JMP data table, allowing for dynamic management of column visibility.

<!-- Keywords: #JMPScriptingLanguage, #DataTableManagement, #ColumnExclusion, #DynamicAnalysis, #Scripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Column( dt, "brand" ) << set excluded( 1 );
Column( dt, "softness" ) << set excluded( 1 );
Column( dt, "previous use" ) << set excluded( 1 );
act excluded = dt << Get excluded Columns;
excludedList = {};
For( i = 1, i <= N Col( dt ), i++,
	Insert Into( excludedList, Column( i ) << Get excluded )
);
Column( dt, "brand" ) << set excluded( 0 );
Column( dt, "softness" ) << set excluded( 0 );
Column( dt, "previous use" ) << set excluded( 0 );
act excluded = dt << Get excluded Columns;
excludedList = {};
For( i = 1, i <= N Col( dt ), i++,
	Insert Into( excludedList, Column( i ) << Get excluded )
);
```

**Code Explanation**:

1. Open data_table data
2. Exclude "brand" column.
3. Exclude "softness" column.
4. Exclude "previous use" column.
5. Retrieve excluded columns.
6. Initialize empty list.
7. Loop through all columns.
8. Insert exclusion status into list.
9. Include "brand" column again.
10. Include "softness" column again.
11. Include "previous use" column again.
12. Retrieve excluded columns.
13. Reinitialize empty list.
14. Loop through all columns.
15. Insert exclusion status into list.



### Example 23
> **Summary**: Runs the labelling and unlabelling of specific columns in a JMP data table, allowing for dynamic manipulation of column properties.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManagement, #ColumnLabelling, #DynamicDataManipulation, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Column( dt, "brand" ) << set Labelled( 1 );
Column( dt, "softness" ) << setLabelled( 1 );
Column( dt, "previous use" ) << set Labelled( 1 );
act Labelled = dt << Get Labeled Columns;
LabelledList = {};
For( i = 1, i <= N Col( dt ), i++,
	Insert Into( LabelledList, Column( i ) << Get Labelled )
);
Column( dt, "brand" ) << set Labelled( 0 );
Column( dt, "softness" ) << set Labelled( 0 );
Column( dt, "previous use" ) << set Labelled( 0 );
act Labelled = dt << Get Labeled Columns;
LabelledList = {};
For( i = 1, i <= N Col( dt ), i++,
	Insert Into( LabelledList, Column( i ) << Get Labelled )
);
```

**Code Explanation**:

1. Open data table;
2. Set "brand" column as labelled.
3. Set "softness" column as labelled.
4. Set "previous use" column as labelled.
5. Retrieve labelled columns.
6. Initialize empty list for labels.
7. Loop through all columns.
8. Add labelled status to list.
9. Unset "brand" column as labelled.
10. Unset "softness" column as labelled.
11. Unset "previous use" column as labelled.
12. Retrieve labelled columns again.
13. Reinitialize empty list for labels.
14. Loop through all columns again.
15. Add labelled status to list.



### Example 24
> **Summary**: Runs the selection and deselection of specific columns in a JMP data table, updating the SelectedList accordingly.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManagement, #ColumnSelection, #SelectedList, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Column( dt, "brand" ) << set Selected( 1 );
Column( dt, "softness" ) << set Selected( 1 );
Column( dt, "previous use" ) << set Selected( 1 );
act selected = dt << Get Selected Columns;
SelectedList = {};
For( i = 1, i <= N Col( dt ), i++,
	Insert Into( SelectedList, Column( i ) << Get Selected )
);
Column( dt, "brand" ) << set Selected( 0 );
Column( dt, "softness" ) << set Selected( 0 );
Column( dt, "previous use" ) << set Selected( 0 );
act Selected = dt << Get Selected Columns;
SelectedList = {};
For( i = 1, i <= N Col( dt ), i++,
	Insert Into( SelectedList, Column( i ) << Get Selected )
);
```

**Code Explanation**:

1. Open data table;
2. Select "brand" column.
3. Select "softness" column.
4. Select "previous use" column.
5. Retrieve selected columns.
6. Initialize SelectedList.
7. Loop through all columns.
8. Add selection status to SelectedList.
9. Unselect "brand" column.
10. Unselect "softness" column.
11. Unselect "previous use" column.
12. Retrieve selected columns again.
13. Reinitialize SelectedList.
14. Loop through all columns again.
15. Add updated selection status to SelectedList.



### Example 25
> **Summary**: Locks and unlocks scroll functionality for specific columns in a JMP data table, allowing for dynamic control over column visibility.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManagement, #ColumnControl, #ScrollLocking, #InteractiveAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Column( dt, "brand" ) << set scroll locked( 1 );
Column( dt, "softness" ) << set scroll locked( 1 );
Column( dt, "previous use" ) << set scroll locked( 1 );
act scroll locked = dt << Get scroll locked Columns;
scrollList = {};
For( i = 1, i <= N Col( dt ), i++,
	Insert Into( scrollList, Column( i ) << Get scroll locked )
);
Column( dt, "brand" ) << set scroll locked( 0 );
Column( dt, "softness" ) << set scroll locked( 0 );
Column( dt, "previous use" ) << set scroll locked( 0 );
act scroll locked = dt << Get scroll locked Columns;
scrollList = {};
For( i = 1, i <= N Col( dt ), i++,
	Insert Into( scrollList, Column( i ) << Get scroll locked )
);
```

**Code Explanation**:

1. Open data_table data
2. Lock scroll for "brand" column.
3. Lock scroll for "softness" column.
4. Lock scroll for "previous use" column.
5. Retrieve locked columns.
6. Initialize empty scrollList.
7. Loop through all columns.
8. Add scroll lock status to scrollList.
9. Unlock scroll for "brand" column.
10. Unlock scroll for "softness" column.
11. Unlock scroll for "previous use" column.
12. Retrieve locked columns again.
13. Reinitialize empty scrollList.
14. Loop through all columns again.
15. Add updated scroll lock status to scrollList.



### Example 26
> **Summary**: Manages scroll locks for specific columns in a JMP data table, allowing for dynamic control over column visibility and interaction.

<!-- Keywords: #JMPScriptingLanguage, #DataTableManagement, #ColumnControl, #ScrollLocks, #InteractiveAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Column( "name" ) << Set Hidden( 1 );
Column( "age" ) << Scroll Lock( 1 );
Column( "sex" ) << Scroll Lock( 1 );
Column( "name" ) << Scroll Lock( 1 );
act scroll locked = dt << Get scroll locked Columns;
scrollList = {};
For( i = 1, i <= N Col( dt ), i++,
	Insert Into( scrollList, Column( i ) << Get scroll locked )
);
Column( "name" ) << Scroll Lock( 0 );
Column( "age" ) << Scroll Lock( 0 );
Column( "sex" ) << Scroll Lock( 0 );
Column( "name" ) << Scroll Lock( 0 );
act scroll locked = dt << Get scroll locked Columns;
scrollList = {};
For( i = 1, i <= N Col( dt ), i++,
	Insert Into( scrollList, Column( i ) << Get scroll locked )
);
```

**Code Explanation**:

1. Open data table.
2. Hide "name" column.
3. Lock "age" column scroll.
4. Lock "sex" column scroll.
5. Lock "name" column scroll again.
6. Get scroll-locked columns.
7. Initialize scrollList.
8. Loop through all columns.
9. Add scroll lock status to scrollList.
10. Unlock "name" column scroll four times.
11. Unlock "age" column scroll.
12. Unlock "sex" column scroll.
13. Get scroll-locked columns again.
14. Initialize scrollList again.
15. Loop through all columns.
16. Add scroll lock status to scrollList.



### Example 27
> **Summary**: Hides and unhides specific columns in a JMP data table, allowing for dynamic column management.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManagement, #ColumnHiding, #JMPScripting, #DynamicAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Column( "name" ) << hide( 1 );
Column( "age" ) << hide( 1 );
Column( "sex" ) << hide( 1 );
Column( "name" ) << hide( 1 );
act hide = dt << Get hidden Columns;
hideList = {};
For( i = 1, i <= N Col( dt ), i++,
	Insert Into( hideList, Column( i ) << Get hidden )
);
Column( "name" ) << hide( 0 );
Column( "age" ) << hide( 0 );
Column( "sex" ) << hide( 0 );
Column( "name" ) << hide( 0 );
act hide = dt << Get hidden Columns;
hideList = {};
For( i = 1, i <= N Col( dt ), i++,
	Insert Into( hideList, Column( i ) << Get hidden )
);
```

**Code Explanation**:

1. Open data table.
2. Hide "name" column.
3. Hide "age" column.
4. Hide "sex" column.
5. Hide "name" column again.
6. Get hidden columns list.
7. Initialize empty list.
8. Loop through all columns.
9. Add hidden status to list.
10. Unhide "name" column.
11. Unhide "age" column.
12. Unhide "sex" column.
13. Unhide "name" column again.
14. Get hidden columns list.
15. Initialize empty list.
16. Loop through all columns.
17. Add hidden status to list.



### Example 28
> **Summary**: Runs the labeling and unlabeled process for specific columns in a JMP data table, utilizing loops to track labeled status.

<!-- Keywords: #JSLScriptingLanguage, #DataLabeling, #ColumnManagement, #LoopControl, #JMPDataTable -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Column( "name" ) << Label( 1 );
Column( "age" ) << Label( 1 );
Column( "sex" ) << Label( 1 );
Column( "name" ) << Label( 1 );
act Label = dt << Get labeled Columns;
LabelList = {};
For( i = 1, i <= N Col( dt ), i++,
	Insert Into( LabelList, Column( i ) << Get labelled )
);
Column( "name" ) << Label( 0 );
Column( "age" ) << Label( 0 );
Column( "sex" ) << Label( 0 );
Column( "name" ) << Label( 0 );
act Label = dt << Get labeled Columns;
LabelList = {};
For( i = 1, i <= N Col( dt ), i++,
	Insert Into( LabelList, Column( i ) << Get Labelled )
);
```

**Code Explanation**:

1. Open data table.
2. Label "name" column.
3. Label "age" column.
4. Label "sex" column.
5. Get labeled columns.
6. Initialize empty list.
7. Loop through all columns.
8. Insert labeled status into list.
9. Unlabel "name" column.
10. Unlabel "age" column.
11. Unlabel "sex" column.
12. Unlabel "name" column.
13. Get labeled columns again.
14. Initialize empty list.
15. Loop through all columns.
16. Insert labeled status into list.



### Example 29
> **Summary**: Runs the exclusion and re-inclusion of specific columns in a JMP data table, allowing for dynamic management of column visibility.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManagement, #ColumnExclusion, #Reinclusion, #DynamicVisibility -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Column( "name" ) << Exclude( 1 );
Column( "age" ) << Exclude( 1 );
Column( "sex" ) << Exclude( 1 );
Column( "name" ) << Exclude( 1 );
act Exclude = dt << Get excluded Columns;
ExcludeList = {};
For( i = 1, i <= N Col( dt ), i++,
	Insert Into( ExcludeList, Column( i ) << Get excluded )
);
Column( "name" ) << Exclude( 0 );
Column( "age" ) << Exclude( 0 );
Column( "sex" ) << Exclude( 0 );
Column( "name" ) << Exclude( 0 );
act Exclude = dt << Get excluded Columns;
ExcludeList = {};
For( i = 1, i <= N Col( dt ), i++,
	Insert Into( ExcludeList, Column( i ) << Get excluded )
);
```

**Code Explanation**:

1. Open data table;
2. Exclude first row from "name".
3. Exclude first row from "age".
4. Exclude first row from "sex".
5. Exclude first row from "name".
6. Get excluded columns.
7. Initialize ExcludeList.
8. Loop through all columns.
9. Insert exclusion status into ExcludeList.
10. Unexclude first row from "name".
11. Unexclude first row from "age".
12. Unexclude first row from "sex".
13. Unexclude first row from "name".
14. Get excluded columns again.
15. Reinitialize ExcludeList.
16. Loop through all columns again.
17. Insert new exclusion status into ExcludeList.



### Example 30
> **Summary**: Runs column management and selection for data exploration, including labeling, hiding, excluding, and locking columns in a JMP data table.

<!-- Keywords: #JMPScriptingLanguage, #ColumnManagement, #DataExploration, #TableConfiguration, #Scripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Column( dt, "name" ) << Set Labelled << Set Excluded;
Column( dt, "sex" ) << Set Labelled << Set Hidden;
Column( dt, "age" ) << Set Hidden << Set Excluded;
Column( dt, "oxy" ) << Set selected << set scroll locked;
Column( dt, "weight" ) << set selected << set scroll locked << set excluded << set hidden < set labelled;
act label = dt << Get Labeled Columns;
act select = dt << Get Selected Columns;
act hide = dt << Get hidden columns;
act exclude = dt << get excluded columns;
act scroll = dt << get scroll locked columns;
```

**Code Explanation**:

1. Open data table;
2. Label "name" column.
3. Exclude "name" column.
4. Label "sex" column.
5. Hide "sex" column.
6. Hide "age" column.
7. Exclude "age" column.
8. Select "oxy" column.
9. Lock "oxy" column scrolling.
10. Select "weight" column.
11. Lock "weight" column scrolling.
12. Exclude "weight" column.
13. Hide "weight" column.
14. Label "weight" column.
15. Retrieve labeled columns.
16. Retrieve selected columns.
17. Retrieve hidden columns.
18. Retrieve excluded columns.
19. Retrieve scroll-locked columns.



### Example 31
> **Summary**: Configures a custom value ordering and list check for the 'age' column in a JMP data table.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManagement, #ColumnProperties, #ValueOrdering, #ListCheck -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Column( "age" ) << Get Property( "Aliases" );
Column( "age" ) << Add Column Properties( Set Property( Value Ordering, {17, 16, 15, 14, 13, 12} ) );
:Age << Add Column Properties( List Check( {17, 16, 15, 14, 13, 12} ) );
```

**Code Explanation**:

1. Open table.
2. Get column property.
3. Set value ordering.
4. Add list check.



### Example 32
> **Summary**: Configures a profit matrix property for a data table column, allowing for conditional formatting and decision-making based on specific criteria.

<!-- Keywords: #JSLScriptingLanguage, #DataTableProperty, #ProfitMatrix, #ConditionalFormatting, #Decision-Making -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Column( dt, "Banding?" ) << Set Property( "Profit Matrix", {[1 - 3, -1 2, . .], {"band", "noband", "Undecided"}} );
prop = Column( dt, "Banding?" ) << Get Property( "Profit Matrix" );
```

**Code Explanation**:

1. Open table.
2. Set profit matrix property.
3. Retrieve profit matrix property.



### Example 33
> **Summary**: Runs property setting operations on a JMP data table column, demonstrating various syntax and error handling scenarios.

<!-- Keywords: #JSLScriptingLanguage, #JMPDataTables, #ColumnProperties, #PropertySetting, #ErrorHandling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dc = Column( dt, "age" );
dc << Set Property( Any, Eval(), Any );
Try( dc << Set Property() );
dc << Set Property( [] );
dc << Set Property( {} );
dc << Set Property( foo, foo );
dc << Set Property( "", {} );
dc << Set Property( Eval() );
```

**Code Explanation**:

1. Open data table;
2. Access "age" column.
3. Set property using Any.
4. Attempt setting property without arguments.
5. Set property using empty list.
6. Set property using empty dictionary.
7. Set property using "foo".
8. Set property using empty string and dictionary.
9. Set property using Eval().



### Example 34
> **Summary**: Runs data table operations to set color properties, apply color coding, select all rows, and delete selected rows.

<!-- Keywords: #JSLScriptingLanguage, #DataTableOperations, #ColorCoding, #RowSelection, #DataManipulation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Column( "season" ) << Set Property( "Value Colors", {"fall" = -13977687, "spring" = -3780931, "summer" = -4222943, "winter" = -13596966} );
Column( "season" ) << Color Cell by Value;
dt << Select All Rows;
dt << Delete Rows;
```

**Code Explanation**:

1. Open data table;
2. Define color properties for "season".
3. Apply color coding to "season" column.
4. Select all rows in table.
5. Delete all selected rows.



### Example 35
> **Summary**: Runs the reorganization and selection of columns in a JMP data table, grouping and rearranging variables for analysis.

<!-- Keywords: #JMPScriptingLanguage, #ColumnManagement, #DataTableOrganization, #GroupingColumns, #SelectionandRearrangement -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << group columns( "xy", {:X, :Y} );
dt << group columns( "pollutants", :Ozone :: :Lead );
dt << group columns( "location", :Latitude :: :Longitude );
dt << move column group( after( Column( "State" ) ), "location" );
dt << move column group( after( xy ), "location" );
dt << move column group( after( State ), "location" );
dt << move column group( after( State ), "xy" );
dt << move column group( after( :State ), "location" );
dt << Select Column Group( "location" );
dt << Move Selected Columns( after( "State" ) );
dt << Select Column Group( "location" );
dt << Move Selected Columns( after( "city" ) );
dt << Clear column selection;
dt << Select Column Group( "pollutants" );
dt << Move Column Group( "pollutants", After( "xy" ) );
```

**Code Explanation**:

1. Open data table.
2. Group columns X and Y as "xy".
3. Group columns Ozone to Lead as "pollutants".
4. Group columns Latitude and Longitude as "location".
5. Move "location" after "State".
6. Move "location" after "xy".
7. Move "location" after "State".
8. Move "xy" after "State".
9. Move "location" after "State".
10. Select "location" group.
11. Move "location" after "State".
12. Select "location" group.
13. Move "location" after "city".
14. Clear column selection.
15. Select "pollutants" group.
16. Move "pollutants" after "xy".



### Example 36
> **Summary**: Creates a new column with properties copied from an existing column, demonstrating data manipulation and property inheritance in JMP.

<!-- Keywords: #JMPScriptingLanguage, #DataManipulation, #ColumnProperties, #PropertyInheritance, #JMPDataTables -->

**Code**:
```jsl
dt = Open("data_table.jmp");
c = Column( 5 );
p = c << get column properties();
c2 = New Column( "New Col" );
c2 << add column properties( p );
p2 = c2 << get column properties();
```

**Code Explanation**:

1. Open data table.
2. Select fifth column.
3. Retrieve column properties.
4. Create new column.
5. Add retrieved properties to new column.
6. Retrieve properties of new column.



### Example 37
> **Summary**: Runs data table operations, including column deletion and selection, to prepare the dataset for further analysis.

<!-- Keywords: #JSLScriptingLanguage, #DataTableOperations, #ColumnManagement, #DataPreparation, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << delete columns( "age" );
Column( "height" ) << set selected;
dt << delete column();
colNames = dt << Get Column Names;
```

**Code Explanation**:

1. Open data table;
2. Delete "age" column.
3. Select "height" column.
4. Delete selected column.
5. Retrieve remaining column names.



### Example 38
> **Summary**: Process of setting and retrieving the field width of a column in a JMP data table.

<!-- Keywords: #JSLScriptingLanguage, #DataTableOperations, #ColumnManagement, #FieldWidth, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
ncol = Column( "weight" );
ncol << set field width( 2 );
fw = ncol << Get Field Width;
```

**Code Explanation**:

1. Open data table.
2. Assign weight column to variable.
3. Set field width of weight column.
4. Retrieve field width of weight column.



### Example 39
> **Summary**: Retrieves the first value from the 'age' column in a data table, assigning it to the variable 'firstval'.

<!-- Keywords: #JSLScriptingLanguage, #DataTableOperations, #ColumnRetrieval, #VariableAssignment, #JMPScripting -->

**Code**:
```jsl
dtp = Open( "$SAMPLE_DATA/data_table.jmp", private );
firstval = Column( dtp, "age" )[1];
```

**Code Explanation**:

1. Open data table.
2. Assign table to `dtp`.
3. Retrieve first value from "age" column.
4. Assign value to `firstval`.



### Example 40
> **Summary**: Retrieves a value from column 4, row 2 in a data table.

<!-- Keywords: #JSLScriptingLanguage, #DataTableOperations, #ColumnAccess, #RowSelection, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
var = "";
var = Column( dt, 4 )[2];
```

**Code Explanation**:

1. Open data table;
2. Initialize variable `var`.
3. Assign value from column 4, row 2.



### Example 41
> **Summary**: Extracts a specific column value from an open data table, utilizing Column() function.

<!-- Keywords: #JSLScriptingLanguage, #DataTableOperations, #ColumnFunction, #VariableAssignment, #ScriptingAutomation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
var = "";
var = Column(dt, Column Name( 4 ))[2];
```

**Code Explanation**:

1. Open data table;
2. Initialize variable var as empty string.
3. Assign second value of fourth column to var.



### Example 42
> **Summary**: Opens a data table and assigns a column reference for multivariate correlations analysis.

<!-- Keywords: #JMPScriptingLanguage, #MultivariateCorrelations, #DataTableOperations, #ColumnReference, #CorrelationAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
col = Column( dt, "name" );
```

**Code Explanation**:

1. Open data table.
2. Assign column reference.



### Example 43
> **Summary**: Creates a marker segment graph to visualize height and age data, utilizing the Get Values and New Window functions in JMP.

<!-- Keywords: #JMPScriptingLanguage, #MarkerSegments, #GraphBuilder, #DataVisualization, #Scripting -->

**Code**:
```jsl
dt = Open( "$SAMPLE_DATA/data_table.jmp", invisible );
xx = Column( "height" ) << Get Values;
aa = [=> 0];
sz = Column( "age" ) << get values;
yy = J( N Rows( xx ), 1, 0 );
For( ii = 1, ii <= N Rows( xx ), ii++,
	aa[xx[ii]]++;
	yy[ii] = aa[xx[ii]];
);
nw15 = New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg( xx, yy, Row States( dt ), Sizes( sz ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( "Marker Seg" ));
seg << Set Transparency( 0.3 );
nw15 << Close Window;
dt << Close Window;
```

**Code Explanation**:

1. Open data table;
2. Extract height values.
3. Initialize count array.
4. Extract age values.
5. Initialize marker array.
6. Loop through each row.
7. Increment count for height.
8. Assign count to marker array.
9. Create new window.
10. Add graph box.
11. Set frame size.
12. Define x-axis scale.
13. Define y-axis scale.
14. Add marker segment.
15. Access frame box.
16. Find marker segment.
17. Set transparency.
18. Close new window.
19. Close dataset window.



### Example 44
> **Summary**: Creates a graph with marker segments to visualize height and age data, utilizing the Get Values and New Window functions.

<!-- Keywords: #JSLScriptingLanguage, #MarkerSegments, #GraphBuilder, #DataVisualization, #JMP -->

**Code**:
```jsl
dt = Open( "$SAMPLE_DATA/data_table.jmp", invisible );
xx = Column( "height" ) << Get Values;
aa = [=> 0];
sz = Column( "age" ) << get values;
yy = J( N Rows( xx ), 1, 0 );
For( ii = 1, ii <= N Rows( xx ), ii++,
	aa[xx[ii]]++;
	yy[ii] = aa[xx[ii]];
);
nw16 = New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg( xx, yy, Row States( dt ), Sizes( sz ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( "Marker Seg" ));
seg << Set Transparency( 0.9 );
gt = seg << Get Transparency;
nw16 << Close Window;
dt << Close Window;
```

**Code Explanation**:

1. Open data table.
2. Extract height column values.
3. Initialize age count array.
4. Extract age column values.
5. Create zero vector for yy.
6. Loop through each row.
7. Increment age count.
8. Assign count to yy.
9. Create new window for graph.
10. Add graph box with marker segments.
11. Adjust frame size and scales.
12. Plot marker segments.
13. Find marker segment in frame.
14. Set transparency to 0.9.
15. Retrieve transparency value.
16. Close graph window.
17. Close data table window.



### Example 45
> **Summary**: Creates a marker segment plot with sizes based on age values, utilizing the `Marker Seg` function in JMP.

<!-- Keywords: #JMPScriptingLanguage, #MarkerSeg, #DataVisualization, #GraphBuilder, #Scripting -->

**Code**:
```jsl
dt = Open( "$SAMPLE_DATA/data_table.jmp", invisible );
xx = Column( "height" ) << Get Values;
aa = [=> 0];
sz = Column( "age" ) << get values;
yy = J( N Rows( xx ), 1, 0 );
For( ii = 1, ii <= N Rows( xx ), ii++,
	aa[xx[ii]]++;
	yy[ii] = aa[xx[ii]];
);
nw25 = New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg( xx, yy, Row States( dt ), Sizes( sz ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( "Marker Seg" ));
class_name = seg << Class Name;
nw25 << Close Window;
dt << Close Window;
```

**Code Explanation**:

1. Open data table;
2. Retrieve height column values.
3. Initialize array `aa`.
4. Retrieve age column values.
5. Create zero-filled array `yy`.
6. Loop through each row.
7. Increment count for each height.
8. Assign count to `yy` array.
9. Create new window "Marker Seg Example".
10. Add graph box with marker segment plot.
11. Adjust frame size and scales.
12. Plot marker segments with sizes.
13. Get frame box from graph.
14. Find marker segment element.
15. Retrieve class name.
16. Close the new window.
17. Close the data table.



### Example 46
> **Summary**: Vizualizes marker segments in a graph box, utilizing color and marker themes to highlight age groups.

<!-- Keywords: #JSLScriptingLanguage, #MarkerSegments, #GraphBox, #ColorTheme, #MarkerTheme -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << color or mark by column( :age, color theme( "pastel" ), marker theme( "alphanumeric" ) );
xx = Column( "height" ) << Get Values;
aa = [=> 0];
sz = Column( "age" ) << get values;
yy = J( N Rows( xx ), 1, 0 );
For( ii = 1, ii <= N Rows( xx ), ii++,
	aa[xx[ii]]++;
	yy[ii] = aa[xx[ii]];
);
nw33 = New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg( xx, yy, Row States( dt ), Sizes( sz ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( "Marker Seg" ));
rsColors = seg << get colors;
nw33 << Close Window;
```

**Code Explanation**:

1. Open data table;
2. Color/mark by age column.
3. Retrieve height values.
4. Initialize age array.
5. Retrieve age values.
6. Initialize yy array.
7. Loop through each row.
8. Increment age count.
9. Assign yy value.
10. Create new window with graph box.



### Example 47
> **Summary**: Creates a graph window to visualize marker segments based on height and age data, utilizing JSL scripting language.

<!-- Keywords: #JMPScriptingLanguage, #MarkerSegments, #GraphWindow, #DataVisualization, #Scripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
xx = Column( "height" ) << Get Values;
aa = [=> 0];
sz = Column( "age" ) << get values;
yy = J( N Rows( xx ), 1, 0 );
For( ii = 1, ii <= N Rows( xx ), ii++,
	aa[xx[ii]]++;
	yy[ii] = aa[xx[ii]];
);
win = New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg( xx, yy, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Marker Seg( 1 ) ));
seg << color( RGB Color( 190, 190, 80 ) );
seg << color( 3 );
win << Close Window;
```

**Code Explanation**:

1. Open data table.
2. Retrieve height column values.
3. Initialize age count array.
4. Retrieve age column values.
5. Create zero-filled result array.
6. Loop through each row.
7. Increment age count for height.
8. Assign count to result array.
9. Create new window for graph.
10. Close the graph window.



### Example 48
> **Summary**: Creates a marker segment graph to visualize height and age data, utilizing the Get Values and New Window functions in JMP.

<!-- Keywords: #JMPScriptingLanguage, #MarkerSegmentGraph, #DataVisualization, #GetValues, #NewWindow -->

**Code**:
```jsl
dt = Open( "$SAMPLE_DATA/data_table.jmp", invisible );
xx = Column( "height" ) << Get Values;
aa = [=> 0];
sz = Column( "age" ) << get values;
yy = J( N Rows( xx ), 1, 0 );
For( ii = 1, ii <= N Rows( xx ), ii++,
	aa[xx[ii]]++;
	yy[ii] = aa[xx[ii]];
);
nw26 = New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg( xx, yy, Row States( dt ), Sizes( sz ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( "Marker Seg" ));
seg << Delete;
nw26 << Close Window;
```

**Code Explanation**:

1. Open data table.
2. Retrieve height column values.
3. Initialize age array.
4. Get age column values.
5. Create zero-filled result array.
6. Loop through each row.
7. Increment age count.
8. Assign count to result array.
9. Create new window.
10. Add graph box with marker segments.
11. Locate frame box.
12. Find marker segment.
13. Delete marker segment.
14. Close window.



### Example 49
> **Summary**: Process of setting a column to nominal modeling type, allowing for further analysis and visualization in JMP.

<!-- Keywords: #JMPScriptingLanguage, #ColumnModelingType, #NominalData, #DataPreparation, #AnalyticsAutomation -->

**Code**:
```jsl
dt1 = Open("data_table.jmp");
Column( dt1, "Price" ) << Modeling Type( Nominal );
```

**Code Explanation**:

1. Open data table;
2. Set "Price" column to nominal.



### Example 50
> **Summary**: Modifies a data table by setting the value of the second column to 1.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManipulation, #ColumnModification, #JMPScripting, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Column( dt, 2 )[1] = 1;
```

**Code Explanation**:

1. Open data table.
2. Modify second column value.



## New Column 
### Example 1
> **Summary**: Calculates the loss function template for an Exponential model, incorporating conditional logic and parameter estimation.

<!-- Keywords: #JSLScriptingLanguage, #ExponentialModel, #ConditionalLogic, #ParameterEstimation, #LossFunctionTemplate -->

**Code**:
```jsl
// 
///////////////////////////////////////////////////////////////////////////////////////////////////////////
// JSL to create a loss function template of Exponenential             //
///////////////////////////////////////////////////////////////////////////////////////////////////////////
dt= new table ("Exponential");
dt<<New Column("Time", Numeric,continuous);   
dt<<New Column("Censor", Numeric,continuous);
dt<<New Column("Exponential", Numeric,continuous);
col=column( "Exponential");
col<<formula( Parameter({sigma=28703.3328183542}, -IfMZ( :Censor==0, (-Log(sigma))- :Time/sigma, -( :Time/sigma)))  );
```

**Code Explanation**:

1. Create new table named "Exponential".
2. Add column "Time" to table.
3. Add column "Censor" to table.
4. Add column "Exponential" to table.
5. Assign "Exponential" column to variable `col`.
6. Define formula for "Exponential" column.
7. Set initial value for parameter sigma.
8. Use IfMZ function for conditional logic.
9. Calculate negative log of sigma if Censor equals 0.
10. Calculate negative time divided by sigma otherwise.



### Example 2
> **Summary**: Calculates the loss function template for Extreme Value Theory, utilizing conditional logic and mathematical expressions to model censoring effects.

<!-- Keywords: #ExtremeValueTheory, #LossFunction, #ConditionalLogic, #MathematicalExpressions, #JSLScripting -->

**Code**:
```jsl
// 
///////////////////////////////////////////////////////////////////////////////////////////////////////////
// JSL to create a loss function template of Extreme value            //
///////////////////////////////////////////////////////////////////////////////////////////////////////////
dt= new table ("Extreme value");
dt<<New Column("Time", Numeric,continuous);   
dt<<New Column("Censor", Numeric,continuous);
dt<<New Column("Extreme value", Numeric,continuous);
col=column( "Extreme value");
col<<formula(  Parameter({lambda=3.26944897591195, delta=0.94478144505066}, -IfMZ( :Censor==0, ((-Log(delta))-Exp((Log( :Time/100)-lambda)/delta))+(Log( :Time)/100-lambda)/delta, -Exp((Log( :Time/100)-lambda)/delta))) );
```

**Code Explanation**:

1. Create new table.
2. Name table "Extreme value".
3. Add "Time" column.
4. Add "Censor" column.
5. Add "Extreme value" column.
6. Reference "Extreme value" column.
7. Define formula for column.
8. Use parameters lambda and delta.
9. Apply conditional logic based on Censor.
10. Calculate log and exponential expressions.



### Example 3
> **Summary**: Creates a loss function template for LogLogistic regression, defining formulas for the 'Model' and 'LogLogistic Loss' columns in a new table.

<!-- Keywords: #JMPScriptingLanguage, #LogLogisticRegression, #LossFunctionTemplate, #DataTableOperations, #FormulaDefinition -->

**Code**:
```jsl
// 
///////////////////////////////////////////////////////////////////////////////////////////////////////////
// JSL to create a loss function template of LogLogistic                 //
///////////////////////////////////////////////////////////////////////////////////////////////////////////
dt= new table ("LogLogistic");
dt<<New Column("Time", Numeric,continuous);   
dt<<New Column("Censor", Numeric,continuous);
dt<<New Column("Model", Numeric,continuous);
dt<<New Column("LogLogistic Loss", Numeric,continuous);
column( "Model") << formula( Parameter({b0=-11.8912196204114, b1=9.03834026782309}, Log( :Time)-(b0+b1*Empty())) );
column( "LogLogistic Loss") << formula( Parameter({sigma=0.5}, -IfMZ( :censor==0,  :Model/sigma-2*Log(1+Exp( :Model/sigma))-Log(sigma), -Log(1+Exp( :Model/sigma))))  );
```

**Code Explanation**:

1. Create new table "LogLogistic".
2. Add column "Time" as numeric continuous.
3. Add column "Censor" as numeric continuous.
4. Add column "Model" as numeric continuous.
5. Add column "LogLogistic Loss" as numeric continuous.
6. Define "Model" formula with parameters b0, b1.
7. Define "LogLogistic Loss" formula with parameter sigma.
8. Use IfMZ function for conditional calculation.



### Example 4
> **Summary**: Creates a loss function template for Weibull distribution with one parameter, defining the 'Model' and 'Weibull' columns based on the provided formulae.

<!-- Keywords: #JSLScriptingLanguage, #WeibullDistribution, #LossFunctionTemplate, #StatisticalModeling, #DataAnalysis -->

**Code**:
```jsl
// 
///////////////////////////////////////////////////////////////////////////////////////////////////////////
// JSL to create a loss function template of Weibull, 1 Parm          //
///////////////////////////////////////////////////////////////////////////////////////////////////////////
dt= new table ("Weibull, 1 Parm");
dt<<New Column("Censor", Numeric,continuous);   
dt<<New Column("Model", Numeric,continuous);
dt<<New Column("Weibull", Numeric,continuous);
column( "Model") << formula( Parameter({b0=3.93988152926993, b1=0.004505313558698, b2=-0.01244813868867}, Log(Empty())-(b0+b1*Empty()+b2*Empty()))  );
column( "Weibull") << formula( Parameter({sigma=0.928115276636918}, -IfMZ( :Censor==0,  :Model/sigma-Exp( :Model/sigma)-Log(sigma), -Exp( :Model/sigma)))  );
```

**Code Explanation**:

1. Create new table.
2. Name table "Weibull, 1 Parm".
3. Add "Censor" column.
4. Add "Model" column.
5. Add "Weibull" column.
6. Define "Model" column formula.
7. Define "Weibull" column formula.



### Example 5
> **Summary**: Creates a Weibull distribution with two parameters (Alpha and Beta) in JMP, incorporating censoring and calculating the log-likelihood for censored data.

<!-- Keywords: #WeibullDistribution, #JMPScriptingLanguage, #Censoring, #LogLikelihood, #StatisticalModel -->

**Code**:
```jsl
// 
///////////////////////////////////////////////////////////////////////////////////////////////////////////
// JSL to create a loss function template of Weibull, 2 Parm          //
///////////////////////////////////////////////////////////////////////////////////////////////////////////
dt= new table ("Weibull, 2 Parm");
dt<<set table variable("Notes","Nelson (1982) suggests \!"Good starting values for this   Weibull are: ... use the 63.2th quartile of Time as a starting value for alpha and something between .5 and 5 for beta.\!" Use Distribution of Y on time and Save Prob Scores to get quartiles for Time.");
dt<<New Column("Time", Numeric,continuous); 
dt<<New Column("Censor", Numeric,continuous);   
dt<<New Column("Weibull", Numeric,continuous);
column( "Weibull") << formula( Parameter({Alpha=26296.8172051511, Beta=1.0584462447544}, -IfMZ( :Censor!=0, -Exp(Beta*Log( :Time/Alpha)), ((Log(Beta)+(Beta-1)*Log( :Time))-Beta*Log(Alpha))+(-Exp(Beta*Log( :Time/Alpha))))) );
```

**Code Explanation**:

1. Create new table named "Weibull, 2 Parm".
2. Set table variable "Notes" with Nelson's suggestion.
3. Add column "Time" as numeric continuous.
4. Add column "Censor" as numeric continuous.
5. Add column "Weibull" as numeric continuous.
6. Define formula for "Weibull" column.
7. Use parameters Alpha and Beta.
8. Apply IfMZ condition for censoring.
9. Calculate exponential term for uncensored data.
10. Compute log-likelihood for censored data.



### Example 6
> **Summary**: Calculates and generates new columns in a JMP data table, specifically 'time point', 'segments', and 'cycle', using formulas that increment values based on conditions.

<!-- Keywords: #JMPScriptingLanguage, #DataTableManipulation, #FormulaCalculation, #TimeSeriesAnalysis, #Segmentation -->

**Code**:
```jsl
// 
New Column( "time point",
	formula(
		If( Row() == 1,
			1,
			If(
				:power == 0 &
				Lag( :time point, 1 ) <=
				50,
				Lag( :time point, 1 ) + 1,
				If( :power == 0,
					1,
					Lag( :time point, 1 )
					 + 1
				)
			)
		)
	)
);
New Column( "segments",
	formula(
		If(
			Row() == 1, 0,
			:time point == 1,
				Lag( :segments, 1 ) + 1,
			Lag( :segments, 1 )
		)
	)
);
New Column( "cycle",
	formula(
		If(
			:time point > 70 | :segments
			 == 0,
			.,
			:segments
		)
	)
);
```

**Code Explanation**:

1. Create new column "time point".
2. Define formula for "time point".
3. Check if row is 1.
4. Set "time point" to 1.
5. Check if power is 0 and lagged "time point" <= 50.
6. Increment lagged "time point" by 1.
7. Check if power is 0.
8. Set "time point" to 1.
9. Increment lagged "time point" by 1.
10. Create new column "segments".
11. Define formula for "segments".
12. Check if row is 1.
13. Set "segments" to 0.
14. Check if "time point" equals 1.
15. Increment lagged "segments" by 1.
16. Set "segments" to lagged "segments".
17. Create new column "cycle".
18. Define formula for "cycle".
19. Check if "time point" > 70 or "segments" equals 0.
20. Set "cycle" to missing.
21. Set "cycle" to "segments".



### Example 7
> **Summary**: Creates a new column in a JMP data table, populating the first three rows with country names from a predefined list and leaving remaining rows empty.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManipulation, #ColumnCreation, #ConditionalLogic, #LoopControl -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "nations", character );
myCountries = {"US", "China", "French"};
For( i = 1, i <= N Row( dt ), i++,
	If( i <= 3,
		:nations[i] = myCountries[i],
		:nations[i] = ""
	)
);
```

**Code Explanation**:

1. Open data table;
2. Add new column "nations".
3. Define country list.
4. Loop through rows.
5. Assign first three countries.
6. Leave remaining nations empty.



### Example 8
> **Summary**: Creates a new character column in a JMP data table by concatenating values from existing columns, including 'sex' and 'name'.

<!-- Keywords: #JMPScriptingLanguage, #DataTableManipulation, #CharacterColumnCreation, #ColumnConcatenation, #ScriptAutomation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "Special Name", char, formula( :sex || " \ " || :name ) );
```

**Code Explanation**:

1. Open data table;
2. Create new column named "Special Name".
3. Set column data type to character.
4. Define formula for new column.
5. Concatenate "sex" and "name" columns.
6. Insert space between concatenated values.



### Example 9
> **Summary**: Calculates and visualizes Body Mass Index (BMI) values from a data table, utilizing a formula-based column creation.

<!-- Keywords: #JSLScriptingLanguage, #DataVisualization, #ColumnCreation, #FormulaCalculation, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "BMI", Numeric, "Continuous", Format( "Best", 12 ), Formula( (:weight * 703) / :height ^ 2 ) );
my grid = [11 -5, 5 1, 11 -5, 5 1];
```

**Code Explanation**:

1. Open data table.
2. Create new column "BMI".
3. Define BMI formula.
4. Assign grid values.



### Example 10
> **Summary**: Creates a new column with random integer values, utilizing the Open and New Column functions in JMP Scripting Language.

<!-- Keywords: #JSLScriptingLanguage, #NewColumnFunction, #RandomInteger, #DataManipulation, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "myFreq", formula( Random Integer( -6, 6 ) ) );
```

**Code Explanation**:

1. Open data table;
2. Create new column "myFreq".
3. Assign random integers to "myFreq".



### Example 11
> **Summary**: Creates a new column 'ratio' by dividing height by weight in a data table, utilizing the Open and New Column functions.

<!-- Keywords: #JSLScriptingLanguage, #DataTableOperations, #ColumnCreation, #FormulaCalculation, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "ratio", Formula( :height / :weight ) );
```

**Code Explanation**:

1. Open data table;
2. Create new column "ratio".
3. Set formula for "ratio" column.
4. Divide height by weight for each row.



### Example 12
> **Summary**: Creates a new column in a JMP data table, calculating the ratio of height to weight and formatting it as a percentage.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManipulation, #ColumnCreation, #FormulaCalculation, #PercentFormat -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "Ratio", numeric, continuous, Format( percent ), formula( :height / :weight ) );
```

**Code Explanation**:

1. Open data table.
2. Create new column named "Ratio".
3. Set column type to numeric.
4. Define column as continuous.
5. Apply percent format to column.
6. Assign formula for height divided by weight.



### Example 13
> **Summary**: Creates a new column '_bycol' with nominal values 'A' and 'B', repeated for all rows in the data table.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManipulation, #ColumnCreation, #NominalValues, #Repeater -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "_bycol", Character, Nominal, set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ) );
```

**Code Explanation**:

1. Open data table.
2. Create new column "_bycol".
3. Set column type to Character.
4. Set column modeling type to Nominal.
5. Generate values "A", "B".
6. Repeat values for all rows.
7. Assign generated values to "_bycol".



### Example 14
> **Summary**: Creates a new column in a JMP data table with a custom prediction formula based on height values.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManipulation, #ConditionalLogic, #FormulaCreation, #CustomPrediction -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "Pred Formula",
	formula(
		If( Is Missing( :height ) | :height < 65,
			If( Is Missing( :height ) | :height < 60,
				79,
				101.157894736842
			),
			123.214285714286
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create new column "Pred Formula".
3. Define formula for prediction.
4. Check if height is missing or less than 65.
5. If true, check if height is missing or less than 60.
6. If true, set prediction to 79.
7. If false, set prediction to 101.157894736842.
8. If false, set prediction to 123.214285714286.



### Example 15
> **Summary**: Creates a new column in a JMP data table, categorizing individuals based on their age (over 70 or not) and retrieving all column names.

<!-- Keywords: #JMPScriptingLanguage, #DataTableOperations, #ColumnCreation, #AgeCategorization, #ColumnNamesRetrieval -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
dt under test << New Column( "Over 70", numeric, nominal, values( (Column( "Age(years)" ) << get values) > 70 ) );
cols = dt under test << get column names();
```

**Code Explanation**:

1. Open data table;
2. Create "Over 70" column.
3. Set "Over 70" as nominal.
4. Assign age values > 70.
5. Retrieve all column names.



### Example 16
> **Summary**: Creates a new column in a data table and populates it with specific values, also modifying existing columns.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManipulation, #ColumnCreation, #ArrayOperations, #ListHandling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "ec", "Expression" );
dt[1, "ec"] = {{"A"}};
dt[2, 6] = [4 5 3];
dt[3, 6 :: 6] = {[44 5 3]};
dt[4 :: 4, 6 :: 6] = {{[444 5 3]}};
var = List( 1, 2, 3 );
n = [1];
```

**Code Explanation**:

1. Open data table;
2. Add new column "ec".
3. Set first row's "ec" to {"A"}.
4. Set second row's sixth column to [4 5 3].
5. Set third row's sixth column to {[44 5 3]}.
6. Set fourth row's sixth column to {{[444 5 3]}}.
7. Create list var with elements 1, 2, 3.
8. Create array n with element 1.



### Example 17
> **Summary**: Creates a new column in a JMP data table, setting its formula to excluded.

<!-- Keywords: #JSLScriptingLanguage, #NewColumn, #Formula, #Excluded, #DataTable -->

**Code**:
```jsl
Dt_lab = Open( "$SAMPLE_DATA\data_table.jmp", private );
Dt_lab << New Column( "rscol", Formula( Excluded() ) );
```

**Code Explanation**:

1. Open table.
2. Create new column.
3. Set formula to excluded.



### Example 18
> **Summary**: Prepares data and initialization for further analysis by opening a data table, retrieving character column names, initializing empty lists and matrices, and creating a new numeric column.

<!-- Keywords: #JSLScriptingLanguage, #DataPreparation, #DataTableOperations, #ColumnManagement, #Initialization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
 
name list = dt << get column names( "character", "string" );  
 
		
emptyList = {};
emptyMatrix = [];
dt2 = New Table( New Column( "col1", Numeric ) );
```

**Code Explanation**:

1. Open data table.
2. Retrieve character column names.
3. Initialize empty list.
4. Initialize empty matrix.
5. Create new data table.
6. Add numeric column "col1".



### Example 19
> **Summary**: Creates and calculates a new column 'ratio' in a data table, setting its formula to 5/11 and evaluating it.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManipulation, #ColumnFormula, #MatrixRetrieval, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
col = New Column( "ratio" );
col << Set Formula( 5 / 11 );
col << Eval Formula;
a = col << GetAsMatrix;
```

**Code Explanation**:

1. Open data table;
2. Create new column "ratio".
3. Set column formula to 5/11.
4. Evaluate column formula.
5. Retrieve column values as matrix.



### Example 20
> **Summary**: Creates a new column 'Test' in a data table by adding the values of 'height' and 'weight', then selecting these columns for further analysis.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManipulation, #ColumnCreation, #FormulaCalculation, #Selection -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "Test", numeric, continuous, formula( :height + weight ) );
dt << RunFormulas;
Column( "height" ) << set selected;
Column( "weight" ) << set selected;
Column( "Test" ) << set selected;
dt << delete columns();
```

**Code Explanation**:

1. Open data table.
2. Create new column "Test".
3. Define formula for "Test".
4. Run formulas on table.
5. Select "height" column.
6. Select "weight" column.
7. Select "Test" column.
8. Delete all columns from table.



### Example 21
> **Summary**: Creates two new numeric columns in a JMP data table, with formulas based on existing columns and custom formatting.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManipulation, #ColumnCreation, #FormulaDefinition, #CustomFormatting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "Label1A \!N Label2A \!N myValue ",
	Numeric,
	"Continuous",
	Format( 20, 0 ),
	Formula( :weight * 3 ),
	Set Property( "Units", "someUnit" )
);
dt << New Column( "Label1B \!N Label2B \!N myValue ",
	Numeric,
	"Continuous",
	Format( 20, 0 ),
	Formula( :age * 3 ),
	Set Property( "Units", "someUnit" )
);
dt << Set Header Height( 50 );
newvalue1 = Column( 6 )[1];
newvalue2 = Column( 7 )[40];
```

**Code Explanation**:

1. Open data table;
2. Add new column "Label1A !N Label2A !N myValue ".
3. Set column as numeric and continuous.
4. Format column width to 20.
5. Define formula as weight * 3.
6. Set units property to "someUnit".
7. Add new column "Label1B !N Label2B !N myValue ".
8. Set column as numeric and continuous.
9. Format column width to 20.
10. Define formula as age * 3.
11. Set units property to "someUnit".
12. Increase header height to 50.
13. Assign first value of sixth column to newvalue1.
14. Assign 40th value of seventh column to newvalue2.



### Example 22
> **Summary**: Creates a data table with additional columns for row state, photos, and fit line by age, utilizing JMP's New Column function.

<!-- Keywords: #JMPScriptingLanguage, #DataTableManipulation, #NewColumnFunction, #RowState, #FitLine -->

**Code**:
```jsl
dt1 = Open("data_table.jmp");
dt1 << New Column( "Rowstate Col", row state );
dt1 << New Column( "Photos", expression );
dt1 << New Column( "Fit Line By Age", expression );
```

**Code Explanation**:

1. Open data table;
2. Add "Rowstate Col" column.
3. Add "Photos" column.
4. Add "Fit Line By Age" column.



### Example 23
> **Summary**: Creates a new column 'X' in a data table, using the Munger function to extract specific values from another column.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManipulation, #ColumnCreation, #FormulaEvaluation, #MungerFunction -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "X", Formula( Munger( :name, 1, "M" ) ) );
Column( "X" ) << Eval Formula;
colVals = Column( dt, "x" ) << Get Values;
```

**Code Explanation**:

1. Open data table.
2. Create new column "X".
3. Set formula for column "X".
4. Evaluate formula for column "X".
5. Retrieve values from column "X".



### Example 24
> **Summary**: Creates a new column in a JMP data table, setting its properties and filling it with a specified value.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManipulation, #ColumnProperties, #ValueFilling, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "example", Numeric, Continuous, Width( 5 ), Format( ddMonyyyy h:m:s ), <<Set Each Value( 100 ) );
```

**Code Explanation**:

1. Open data table.
2. Add new column.
3. Set column properties.
4. Fill column with value.



### Example 25
> **Summary**: Creates a new column in a JMP data table to identify rows containing 'Cheese' using the Contains Item function.

<!-- Keywords: #JMPScriptingLanguage, #DataTableManipulation, #ContainsItemFunction, #NewColumnCreation, #FormulaApplication -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "Cheese", numeric, continuous, Formula( Contains Item( dt:Item Name, "Cheese", ", " ) ) );
```

**Code Explanation**:

1. Open table.
2. Create new column.
3. Define column name.
4. Set column type.
5. Specify column properties.
6. Apply formula to column.
7. Use Contains Item function.
8. Check for "Cheese".
9. Use ", " as delimiter.
10. Store result in column.



### Example 26
> **Summary**: Creates new columns in a JMP data table, including 'Soccer', 'Stomach', and 'Jetta' columns, using formulas that contain specific items or values.

<!-- Keywords: #JMPScriptingLanguage, #DataTableManipulation, #FormulaColumnCreation, #MultipleResponseProperty, #ColumnSetValues -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "Soccer", numeric, continuous, Formula( Contains Item( dt:sports, "Soccer", ", " ) ) );
dt << New Column( "Stomach", numeric, continuous, Formula( Contains Item( Lowercase( dt:reported illnesses ), "stomach", ", " ) ) );
cars = dt:family cars << get values;
dt << New Column( "Cars MR Prop", character, nominal, Set Property( "Multiple Response", {Separator( "," )} ), Set Values( cars ) );
dt << New Column( "Jetta", numeric, continuous, Formula( Contains Item( dt:Cars MR Prop, "Jetta", ", " ) ) );
```

**Code Explanation**:

1. Open data table.
2. Create "Soccer" column.
3. Create "Stomach" column.
4. Get family car values.
5. Create "Cars MR Prop" column.
6. Create "Jetta" column.



### Example 27
> **Summary**: Creates a new column in a data table by dividing age by weight and formatting it as a fixed decimal with 4 precision places.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManipulation, #ColumnCreation, #Formula, #FixedDecimal -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "x", Formula( :age / :weight ), Format( "Fixed Dec", 10, 4 ) );
```

**Code Explanation**:

1. Open data table;
2. Create new column named "x".
3. Set formula for column "x".
4. Divide age by weight in formula.
5. Format column "x" as fixed decimal.
6. Set precision to 4 decimal places.



### Example 28
> **Summary**: Creates a new column in a JMP data table, calculating the square of the weight variable and capturing log output.

<!-- Keywords: #JMPScriptingLanguage, #DataTableManipulation, #ColumnCreation, #LogCapture, #WeightedFormula -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "expr", "Numeric", "Continuous", Formula( weight * weight ) );
log = Log Capture( dt:expr << Set Formula( {weight * weight} ) );
```

**Code Explanation**:

1. Open data table;
2. Create new column "expr".
3. Set column type to numeric.
4. Define column as continuous.
5. Assign formula weight squared.
6. Capture log output.
7. Update formula for expr column.



### Example 29
> **Summary**: Creates a new column in a JMP data table, using a formula that applies the Lag function based on sex and name.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManipulation, #LagFunction, #NominalModeling, #ColumnFormula -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "Lag Test", "Character", "Nominal", Formula( If( :sex == "M", Lag( :name ), Lag() ) ) );
```

**Code Explanation**:

1. Open data table;
2. Create new column "Lag Test".
3. Set column data type to Character.
4. Set modeling type to Nominal.
5. Define column formula.
6. Check if sex is Male.
7. Apply Lag function to name if Male.
8. Apply Lag function without arguments otherwise.
9. End of script.



### Example 30
> **Summary**: Creates a new nominal column 'Validation 2' in a JMP data table, using a random category formula with specified probabilities.

<!-- Keywords: #JSLScriptingLanguage, #NominalColumn, #RandomCategoryFormula, #DataTableManipulation, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "Validation 2", nominal, formula( Random Category( 0.4, 0, 0.35, 1, 2 ) ) );
```

**Code Explanation**:

1. Open data table;
2. Add new column "Validation 2".
3. Set column type to nominal.
4. Apply random category formula.
5. Assign probabilities for categories.



### Example 31
> **Summary**: Fits a standard least squares model with multiple effects and generates a profiler plot to analyze the relationship between 'Y' and 'Sodium mg' in the data table.

<!-- Keywords: #JSLScriptingLanguage, #FitYbyXAnalysis, #ProfilerPlot, #LeastSquaresModel, #MultipleEffects -->

**Code**:
```jsl
dt = Open("data_table.jmp");
New Column( "Y", Character, Nominal, Set Values( Repeat( {"F"}, 38 ) || Repeat( {"M"}, 37 ) ) );
bv = dt << Fit Y by X( Y( :Y ), X( :Sodium mg ), Weight( :"Oz/pkg" ) );
```

**Code Explanation**:

1. Open data table;
2. Create new column "Y".
3. Set column type to Character.
4. Set column modeling type to Nominal.
5. Fill first 38 rows with "F".
6. Fill next 37 rows with "M".
7. Fit Y by X analysis.
8. Set Y variable to "Y".
9. Set X variable to "Sodium mg".
10. Set weight to "Oz/pkg".



### Example 32
> **Summary**: Process of generating a password list by importing a remote word list, selecting short words, and creating a new table with a 'PW' column and a date formula.

<!-- Keywords: #JSLScriptingLanguage, #DataTableOperations, #PasswordGeneration, #RandomSampling, #DateFormula -->

**Code**:
```jsl
Names Default To Here( 1 );
dtwords = Open(
	"https://www.mit.edu/~ecprice/wordlist.10000",
	columns( New Column( "a", Character, "Nominal" ) ),
	Import Settings(
		End Of Line( CRLF, CR, LF ),
		End Of Field( Tab, Comma, CSV( 1 ) ),
		Strip Quotes( 1 ),
		Use Apostrophe as Quotation Mark( 0 ),
		Use Regional Settings( 0 ),
		Scan Whole File( 1 ),
		Treat empty columns as numeric( 0 ),
		CompressNumericColumns( 0 ),
		CompressCharacterColumns( 0 ),
		CompressAllowListCheck( 0 ),
		Labels( 0 ),
		Column Names Start( 1 ),
		First Named Column( 1 ),
		Data Starts( 1 ),
		Lines To Read( "All" ),
		Year Rule( "20xx" )
	)
);
dtwords:a << Set Name( "Word_entry" );
	
dtwords << Select where( Length( :Word_entry ) < 8 );
dtwords << Delete rows();
	
pslist = {};
For Each( {i}, 1 :: 27,
	r = Random Integer( 1, N Rows( dtwords ) );
	Insert Into( pslist, :Word_entry[r] );
);
dtpwds = New Table( "PW List",
	New Column( "PW", "Character", set values( pslist ) ),
	New Column( "Date",
		Format( "m/d/y" ),
		set formula( Date Increment( Today(), "day", Row() ) )
	)
);
```

**Code Explanation**:

1. Open remote word list.
2. Create new column "a".
3. Set import settings.
4. Import data into table.
5. Rename column "a" to "Word_entry".
6. Select short words.
7. Delete selected rows.
8. Initialize password list.
9. Loop to select random words.
10. Create new table "PW List".
11. Add "PW" column.
12. Add "Date" column.
13. Set date formula.
14. Open Google Sheets link.



### Example 33
> **Summary**: Retrieves and displays environment variable values in a JMP table, allowing for easy exploration and analysis.

<!-- Keywords: #JSLScriptingLanguage, #EnvironmentVariables, #JMPTable, #DataRetrieval, #Automation -->

**Code**:
```jsl
Names Default To Here( 1 );
dt = New Table( "Environemnt Variables" );
dt << New Column( "Variable",
	Character,
	Set Values(
		{"ALLUSERSPROFILE", "APPDATA", "CD", "CMDCMDLINE", "CMDEXTVERSION", "COMMONPROGRAMFILES", "COMMONPROGRAMFILES(x86)", "CommonProgramW6432",
		"COMPUTERNAME", "COMSPEC", "DATE", "DriverData", "ERRORLEVEL", "HOMEDRIVE", "HOMEPATH", "LOCALAPPDATA", "LOGONSERVER", "NUMBER_OF_PROCESSORS",
		"OneDrive", "OS", "PATH", "PathExt", "PROCESSOR_IDENTIFIER", "PROCESSOR_LEVEL", "PROCESSOR_REVISION", "PROGRAMDATA", "PROGRAMFILES",
		"PROGRAMFILES(X86)", "ProgramW6432", "PROMPT", "PSModulePath", "PUBLIC", "RANDOM", "SystemDrive", "SystemRoot", "TEMP", "TIME", "TMP",
		"USERDOMAIN", "USERDOMAIN_ROAMINGPROFILE", "USERNAME", "USERPROFILE", "WINDIR"}
	)
);
dt << New Column( "Output", Character );
For Each Row( dt, :Output = Get Environment Variable( :Variable ) );
```

**Code Explanation**:

1. Set default names scope.
2. Create new table.
3. Name table "Environemnt Variables".
4. Add "Variable" column.
5. Set column data type to character.
6. Populate "Variable" column with environment variable names.
7. Add "Output" column.
8. Set column data type to character.
9. Loop through each row.
10. Get environment variable value for current row.



## Column using N Row
> **Summary**: This JSL script expands data by counts, creating a new table with start and end times repeated according to the count values.

<!-- Keywords: #JMPScriptingLanguage, #DataExpansion, #TableManipulation, #Start-EndTimes, #CountValues -->

**Code**:
```jsl
// Expand Data by Counts
// Open data table
dt = Open("data_table.jmp");
// Expand Data by Counts
Names Default To Here( 1 );
start = :start time << GetAsMatrix;
end = :end time << GetAsMatrix;
c = :count << GetAsMatrix;
n = N Row();
nr = Sum( c );
start name = :start time << Get Name;
end name = :end time << Get Name;
dt =
New Table( "",
	Add Rows( nr ),
	New Column( start name, Numeric ),
	New Column( end name, Numeric )
);
st = Column( dt, start name );
en = Column( dt, end name );
irow = 0;
For( i = 1, i <= n, i++,
	For( j = 1, j <= c[i], j++,
		irow++;
		st[irow] = start[i];
		en[irow] = end[i];
	)
);
Names Default To Here( 0 );
```

**Code Explanation**:

1. Open data table.
2. Initialize variables.
3. Extract start times.
4. Extract end times.
5. Extract counts.
6. Calculate total rows.
7. Store column names.
8. Create new table.
9. Add columns to table.
10. Populate table with expanded data.



## Column using Run Script
### Example 1
> **Summary**: Creates a ternary plot and modifies a value in column 'p1' within an open data table.

<!-- Keywords: #JSLScriptingLanguage, #TernaryPlot, #DataModification, #PathDiagramProperties, #SEM -->

**Code**:
```jsl
dt = Open("data_table.jmp");
tern = dt << Run Script( "Ternary Plot" );
Column( dt, "p1" )[6] = .8;
```

**Code Explanation**:

1. Open data table;
2. Assign dataset to variable `dt`.
3. Run script for ternary plot.
4. Assign ternary plot to variable `tern`.
5. Modify value in column "p1".



### Example 2
> **Summary**: Fits a life table by X, adding a new column to the data table, capturing log information, deleting columns 1-6, setting time acceleration baseline, and closing the window.

<!-- Keywords: #JMP, #LifeTable, #DataManipulation, #Automation, #Scripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
fl = dt << Run Script( "Fit Life by X" );
dt << New Column();
Log Capture( dt << Delete Columns( 1 :: 6 ) );
fl << Time Acceleration Baseline( 11 );
fl << close window;
```

**Code Explanation**:

1. Open table.
2. Run "Fit Life by X".
3. Add new column.
4. Capture log.
5. Delete columns 1 to 6.
6. Set time acceleration baseline.
7. Close window.



### Example 3
> **Summary**: Runs the life distribution analysis and creates a new column in the data table, while capturing log output and deleting columns 1 through 5.

<!-- Keywords: #JMPScriptingLanguage, #LifeDistributionAnalysis, #DataTableManipulation, #LogCapture, #ColumnManagement -->

**Code**:
```jsl
dt = Open("data_table.jmp");
ld = dt << Run Script( "Life Distribution - Exponential" );
dt << New Column();
Log Capture( dt << Delete Columns( 1 :: 5 ) );
```

**Code Explanation**:

1. Open data table;
2. Run life distribution script.
3. Create new column.
4. Capture log output.
5. Delete columns 1 through 5.



### Example 4
> **Summary**: Process of running a destructive degradation fit, creating a new column, and deleting the first four columns in a data table.

<!-- Keywords: #JSLScriptingLanguage, #DestructiveDegradationFit, #DataTableManipulation, #ColumnManagement, #LogCapture -->

**Code**:
```jsl
dt = Open("data_table.jmp");
deg = dt << Run Script( "Destructive Degradation Fit" );
dt << New Column();
Log Capture( dt << Delete Columns( 1 :: 4 ) );
```

**Code Explanation**:

1. Open data table.
2. Run destructive degradation fit.
3. Create new column.
4. Delete first four columns.
5. Capture log output.



### Example 5
> **Summary**: Fits a life table model, adding a new column to the data table, and deleting columns 1 through 6.

<!-- Keywords: #JSLScriptingLanguage, #PathDiagramProperties, #LifeTableModel, #DataManipulation, #SEM -->

**Code**:
```jsl
dt = Open("data_table.jmp");
fl = dt << Run Script( "Fit Life by X" );
dt << New Column();
Log Capture( dt << Delete Columns( 1 :: 6 ) );
```

**Code Explanation**:

1. Open data table.
2. Run "Fit Life by X" script.
3. Add new column to table.
4. Delete columns 1 through 6.



### Example 6
> **Summary**: Analyze and visualize a parametric survival model, including distribution plotting and column deletion.

<!-- Keywords: #ParametricSurvival, #JMPScriptingLanguage, #DataVisualization, #ColumnDeletion, #PathDiagram -->

**Code**:
```jsl
dt = Open("data_table.jmp");
ps = dt << Run Script( "Fit Parametric Survival" );
dt << New Column();
Log Capture( dt << Delete Columns( 1 :: 3 ) );
ps << Distribution Plot by Level Combinations;
ps << close window;
```

**Code Explanation**:

1. Open data table.
2. Run parametric survival script.
3. Add new column.
4. Log capture delete columns.
5. Create distribution plot.
6. Close window.



### Example 7
> **Summary**: Fits a lognormal distribution to data and deleting columns 1-6, while capturing log output.

<!-- Keywords: #JSLScriptingLanguage, #LognormalDistribution, #DataTableManipulation, #FitLifeByX, #PathDiagramProperties -->

**Code**:
```jsl
dt = Open("data_table.jmp");
fl = dt << Run Script( "Fit Life by X" );
dt << New Column();
Log Capture( dt << Delete Columns( 1 :: 6 ) );
fl << Fit Lognormal;
fl << close window;
```

**Code Explanation**:

1. Open data table.
2. Run "Fit Life by X" script.
3. Add new column to table.
4. Capture log output.
5. Delete columns 1 to 6.
6. Fit lognormal distribution.
7. Close fit life window.



## Column using For
### Example 1
> **Summary**: Modifies height values by multiplying them by -1 for rows where age is 12 in a specified data table.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManipulation, #ConditionalStatements, #LoopControl, #ColumnOperations -->

**Code**:
```jsl
dt = Open("data_table.jmp");
rs = dt << get rows where( :age == 12 );
For( i = 1, i <= N Items( rs ), i++,
	Column( "height" )[i] = (-1) * Column( "height" )[i]
);
```

**Code Explanation**:

1. Open data table.
2. Retrieve rows where age is 12.
3. Loop through selected rows.
4. Multiply height values by -1.



### Example 2
> **Summary**: Generates a distribution analysis for continuous variables in a specified data table, utilizing the Distribution platform to create a Resample Freq column and populate testVar with relevant values.

<!-- Keywords: #JSLScriptingLanguage, #Distribution, #DataTableOperations, #ConditionalStatements, #LoopControl -->

**Code**:
```jsl
dt = Open("data_table.jmp");
xlist = {"1", "2", "3", "4"};
testVar = {};
For( i = 1, i <= N Items( xlist ), i++,
	y = "sex";
	If( i == 3, y = "height" );
	Match( xlist[i],
		xlist[1], Insert Into( testVar, Eval List( {i, y} ) ),
		xlist[2], Insert Into( testVar, Eval List( {i, y} ) ),
		xlist[3],
			New Column( "Resample Freq", numeric, Formula( Resample Freq( 5, Column( dt, y ) ) ) );
			Insert Into( testVar, Eval List( {i, y} ) );
			testVar2 = :Resample Freq << Get Values;,
		xlist[4], Insert Into( testVar, Eval List( {i, y} ) ),
		Insert Into( testVar, Eval List( {i, y, "error"} ) )
	);
);
```

**Code Explanation**:

1. Open data table.
2. Define xlist with four items.
3. Initialize empty list testVar.
4. Loop through each item in xlist.
5. Set y to "sex".
6. Change y to "height" if i equals 3.
7. Match current xlist item.
8. Insert i and y into testVar for first two items.
9. Create "Resample Freq" column for third item.
10. Insert i, y, and values from "Resample Freq" into testVar.



### Example 3
> **Summary**: Generates a distribution analysis for continuous variables in a specified data table, utilizing the MatchMZ function to create a new column and populate a test variable.

<!-- Keywords: #JSLScriptingLanguage, #Distribution, #MatchMZFunction, #DataTableOperations, #ConditionalLogic -->

**Code**:
```jsl
dt = Open("data_table.jmp");
xlist = {"1", "2", "3", "4"};
testVar = {};
For( i = 1, i <= N Items( xlist ), i++,
	y = "sex";
	If( i == 3, y = "height" );
	MatchMZ( xlist[i],
		xlist[1], Insert Into( testVar, Eval List( {i, y} ) ),
		xlist[2], Insert Into( testVar, Eval List( {i, y} ) ),
		xlist[3],
			New Column( "Resample Freq", numeric, Formula( Resample Freq( 5, Column( dt, y ) ) ) );
			Insert Into( testVar, Eval List( {i, y} ) );
			testVar2 = :Resample Freq << Get Values;,
		xlist[4], Insert Into( testVar, Eval List( {i, y} ) ),
		Insert Into( testVar, Eval List( {i, y, "error"} ) )
	);
);
```

**Code Explanation**:

1. Open data table;
2. Define xlist with 4 elements.
3. Initialize empty list testVar.
4. Loop through each item in xlist.
5. Set y to "sex".
6. Change y to "height" if i equals 3.
7. Match xlist[i] with cases.
8. For xlist[1] and [2], insert {i, y} into testVar.
9. For xlist[3], create "Resample Freq" column.
10. Insert {i, y} into testVar and get values.



### Example 4
> **Summary**: Generates distribution analysis for continuous variables in a specified data table using the Distribution platform, with interactive features and conditional logic.

<!-- Keywords: #JSLScriptingLanguage, #Distribution, #ConditionalLogic, #InteractiveFeatures, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
xlist = {"1", "2", "3", "4"};
testVar = {};
For( i = 1, i <= N Items( xlist ), i++,
	y = "sex";
	If( i == 3, y = "height" );
	MatchV3( xlist[i],
		xlist[1], Insert Into( testVar, Eval List( {i, y} ) ),
		xlist[2], Insert Into( testVar, Eval List( {i, y} ) ),
		xlist[3],
			New Column( "Resample Freq", numeric, Formula( Resample Freq( 5, Column( dt, y ) ) ) );
			Insert Into( testVar, Eval List( {i, y} ) );
			testVar2 = :Resample Freq << Get Values;,
		xlist[4], Insert Into( testVar, Eval List( {i, y} ) ),
		Insert Into( testVar, Eval List( {i, y, "error"} ) )
	);
);
```

**Code Explanation**:

1. Open data table.
2. Define variable list.
3. Initialize empty testVar.
4. Start loop through xlist.
5. Set y to "sex".
6. Change y to "height" for third iteration.
7. Match xlist item.
8. Insert i and y into testVar.
9. Create "Resample Freq" column for third match.
10. Insert i, y, and values into testVar.



## Column using Auto Clear
> **Summary**: Data filtering and row retrieval by opening a data table, adding filters for age and sex, and retrieving the filtered rows.

<!-- Keywords: #JMPScriptingLanguage, #DataFiltering, #RowRetrieval, #DataTableOperations, #Filtering -->

**Code**:
```jsl
dt = Open("data_table.jmp");
df = dt << Data Filter;
df << Auto Clear( 0 );
df << Add Filter( columns( :age, :sex ), Where( :age == {13, 14} ) );
df << (filter column( :sex ) << Where( :sex == "M" ));
fr = df << Get Filtered Rows( 1 );
```

**Code Explanation**:

1. Open data table;
2. Access Data Filter.
3. Disable auto-clear filter.
4. Add age filter for 13 and 14.
5. Add sex filter for males.
6. Retrieve filtered rows.



## New Column by Text Matching 
### Example 1
> **Summary**: Creates a new column in a data table by matching text using regular expressions from the 'Words' library, with the matched values stored in an output column named 'Regex: Words‚í∑ÊñØÂÜ∞Â∑ù*()'.

<!-- Keywords: #JSLScripting, #DataTableManipulation, #RegularExpressions, #TextMatching, #ColumnCreation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column by Text Matching(
	Column( Name( "Reasons Not to Floss" ) ),
	Set Regex( Library( "Words" ) ),
	output column name( "Regex: Words‚í∑ÊñØÂÜ∞Â∑ù*()" )
);
```

**Code Explanation**:

1. Open data table.
2. Create new column.
3. Match text using regex.
4. Specify column for matching.
5. Use regex library "Words".
6. Name output column.
7. Regex pattern "Words‚í∑ÊñØÂÜ∞Â∑ù*()".



### Example 2
> **Summary**: Extracts specific text patterns from a column in a JMP data table, utilizing regular expressions and text matching.

<!-- Keywords: #JSLScriptingLanguage, #TextMatching, #RegularExpressions, #DataTableManipulation, #ColumnOperations -->

**Code**:
```jsl
Open("data_table.jmp");
New Column by Text Matching(
	Column( :Reasons Not to Floss ),
	Set Regex( Separators( Characters( "e" ), Result( "\[\1]\" ) ) ),
	Use Result( 1 )
);
```

**Code Explanation**:

1. Open data table;
2. Create new column.
3. Specify matching column.
4. Set regex separators.
5. Define result format.
6. Apply regex matching.
7. Extract first match.



### Example 3
> **Summary**: Creates a new column in a data table by text matching, using regular expressions to extract specific patterns.

<!-- Keywords: #JSLScriptingLanguage, #TextMatching, #RegularExpressions, #DataTableOperations, #ColumnCreation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
New Column by Text Matching(
	Column( :Reasons Not to Floss ),
	Set Regex( Separators( Characters( "e" ), Result( "\[\1]\" ) ) ),
	Use Result( 0 )
);
```

**Code Explanation**:

1. Open data table.
2. Create new column.
3. Define text matching.
4. Set regex separators.
5. Specify result format.
6. Use regex result.



### Example 4
> **Summary**: Creates a new column in a data table by text matching using regular expressions from the 'Words' library, with the matched output column named 'Regex: Words‚í∑ÊñØÂÜ∞Â∑ù*()'.

<!-- Keywords: #JSL, #DataTable, #TextMatching, #RegularExpressions, #ColumnCreation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column by Text Matching(
	Column( Name( "Reasons Not to Floss" ) ),
	Set Regex( Library( "Words" ) ),
	output column name( "Regex: Words‚í∑ÊñØÂÜ∞Â∑ù*()" ),
	Use Result( {} )
);
```

**Code Explanation**:

1. Open data table;
2. Create new column by text matching.
3. Match text in "Reasons Not to Floss".
4. Use regex library "Words".
5. Name output column "Regex: Words‚í∑ÊñØÂÜ∞Â∑ù*()".
6. Use result for further processing.



### Example 5
> **Summary**: Creates a new column in a data table by text matching using the 'New Column by Text Matching' function, with regex patterns from the 'Words' library.

<!-- Keywords: #JSLScriptingLanguage, #DataTableOperations, #TextMatching, #RegexPatterns, #ColumnCreation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column by Text Matching(
	Column( Name( "Reasons Not to Floss" ) ),
	Set Regex( Library( "Words" ) ),
	output column name( "Regex: Words‚í∑ÊñØÂÜ∞Â∑ù*()" ),
	Use Result
);
```

**Code Explanation**:

1. Open data table;
2. Create new column by text matching.
3. Match Reasons Not to Floss.
4. Set regex from Words library.
5. Output column named "Regex: Words‚í∑ÊñØÂÜ∞Â∑ù*()".
6. Use regex match result.



### Example 6
> **Summary**: Creates a new column by matching text using regular expressions from the 'Words' library, and sets the output column name.

<!-- Keywords: #JSLScriptingLanguage, #NewColumn, #TextMatching, #RegularExpressions, #DataTable -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column by Text Matching(
	Column( Name( "Reasons Not to Floss" ) ),
	Set Regex( Library( "Words" ) ),
	output column name( "Regex: Words‚í∑ÊñØÂÜ∞Â∑ù*()" ),
	Use Result()
);
```

**Code Explanation**:

1. Open data table.
2. Create new column.
3. Match text using regex.
4. Use regex library "Words".
5. Set output column name.
6. Apply regex matching.



### Example 7
> **Summary**: Creates a new column in a data table by text matching using the New Column by Text Matching platform, with regex from the Words library and outputting to a specified column name.

<!-- Keywords: #JSLScripting, #DataTableOperations, #TextMatching, #Regex, #NewColumn -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column by Text Matching(
	Column( Name( "Reasons Not to Floss" ) ),
	Set Regex( Library( "Words" ) ),
	output column name( "Regex: Words‚í∑ÊñØÂÜ∞Â∑ù*()" ),
	Use Result( "abcde" )
);
```

**Code Explanation**:

1. Open data table;
2. Create new column by text matching.
3. Specify Reasons Not to Floss column.
4. Set regex from Words library.
5. Name output column Regex: Words.
6. Use result abcde.



### Example 8
> **Summary**: Creates a new column by matching text in a data table, utilizing regex from a library and specifying an output column name.

<!-- Keywords: #JSLScriptingLanguage, #DataTableOperations, #TextMatching, #RegexPatterns, #ColumnCreation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column by Text Matching(
	Column( Name( "Reasons Not to Floss" ) ),
	Set Regex( Library( "Words" ) ),
	output column name( "Regex: Words‚í∑ÊñØÂÜ∞Â∑ù*()" ),
	Use Result( . )
);
```

**Code Explanation**:

1. Open data table.
2. Create new column by matching text.
3. Specify column for matching.
4. Set regex from library.
5. Define output column name.
6. Use result for matching.



### Example 9
> **Summary**: Creates a new column in a data table by text matching using regular expressions from the 'Words' library, with the result value set to -111.11.

<!-- Keywords: #JMPScriptingLanguage, #TextMatching, #RegularExpressions, #DataTableManipulation, #ColumnCreation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column by Text Matching(
	Column( Name( "Reasons Not to Floss" ) ),
	Set Regex( Library( "Words" ) ),
	output column name( "Regex: Words‚í∑ÊñØÂÜ∞Â∑ù*()" ),
	Use Result( -111.11 )
);
```

**Code Explanation**:

1. Open data table.
2. Create new column.
3. Use text matching.
4. Specify column for matching.
5. Set regex library.
6. Define output column name.
7. Use result value.



## Column using Delete Rows
> **Summary**: Data filtering and selection by opening a JMP data table, deleting rows, selecting rows based on age, creating a column selection, and retrieving the selected matrix.

<!-- Keywords: #JMPScriptingLanguage, #DataFiltering, #ColumnSelection, #MatrixRetrieval, #DataManipulation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Delete Rows( 21 :: 40 );
dt << Select Where( :age < 14 );
dt << Name Selection in Column( Column Name( "Younger" ), Selected( 1 ), unselected( 0 ) );
m = dt:Younger << Get As Matrix();
```

**Code Explanation**:

1. Open data_table data
2. Delete rows 21 to 40.
3. Select rows where age < 14.
4. Create "Younger" column selection.
5. Retrieve "Younger" column matrix.



## Column using Function
### Example 1
> **Summary**: Runs the renaming of a column in a JMP data table, utilizing a custom function to notify on rename events.

<!-- Keywords: #JMPScriptingLanguage, #DataTableManagement, #RenameColumn, #EventHandling, #CustomFunction -->

**Code**:
```jsl
dt = Open("data_table.jmp");
renameNotify = Function( {dtab, newname, oldname},
	dtname = Word( 1, dtab << getname(), "." );
	Write( "dtname=", dtname );
	Write( "\!Noldname=", oldname );
	Write( "\!Nnewname=", newname );
);
dt << Subscribe( "rename", On rename column( renameNotify ) );
dt:sex << Set Name( "Gender" );
```

**Code Explanation**:

1. Open data table.
2. Define renameNotify function.
3. Subscribe to rename event.
4. Rename 'sex' column to 'Gender'.



### Example 2
> **Summary**: Process of updating a data table's name column value and subscribing to save events, utilizing JMP scripting language.

<!-- Keywords: #JMPScriptingLanguage, #DataTableManagement, #SaveEventSubscription, #ColumnValueUpdate, #Automation -->

**Code**:
```jsl
dtb = Open("data_table.jmp");
fsave = Function( {dtab, newpathname},
	Insert Into( changeList, Word( 1, dtab << get name, "." ) )
);
dtb << Subscribe( "name15b"("client"), On Save( fsave ) );
Column( dtb, "name" )[1] = "PENELOPE";
```

**Code Explanation**:

1. Open data table.
2. Define function `fsave`.
3. Subscribe to save event.
4. Change first row's name column value.



## Column using Save
### Example 1
> **Summary**: Opens and saves a data table, renaming a column to 'Gender'.

<!-- Keywords: #JSLScriptingLanguage, #DataManagement, #ColumnRenaming, #FileIO, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Save( "$TEMP\testit.jmp" );
Column( dt, "sex" ) << set name( "Gender" );
```

**Code Explanation**:

1. Open data table.
2. Save table to temp location.
3. Rename "sex" column to "Gender".



### Example 2
> **Summary**: Runs data processing by opening a data table, renaming a column, and retrieving column names.

<!-- Keywords: #JSLScriptingLanguage, #DataProcessing, #ColumnRenaming, #ColumnNames, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Save( "$TEMP\testit.jmp" );
Column( dt, "sex" ) << set name( "Gender" );
dt2 = Open("data_table.jmp");
colnames = dt2 << get column names();
```

**Code Explanation**:

1. Open data_table data
2. Save data to testit.jmp.
3. Rename "sex" column to "Gender".
4. Open data_table data
5. Retrieve column names.



## Column using Select Where
### Example 1
> **Summary**: Data filtering and coloring in JMP to select rows where age is 12 and color selected cells light yellow, while also coloring all cells light green.

<!-- Keywords: #JMPScriptingLanguage, #DataFiltering, #ColorCells, #ConditionalFormatting, #JSLCode -->

**Code**:
```jsl
dt = Open("data_table.jmp");
r = dt << Select Where( :age == 12 );
Column( dt, 1 ) << Color Cells( "Light Yellow", r );
Column( dt, 1 ) << Color Cells( "light green" );
```

**Code Explanation**:

1. Open data table.
2. Select rows where age is 12.
3. Color selected cells light yellow.
4. Color all cells light green.



### Example 2
> **Summary**: Explores data and visualization by selecting specific rows, coloring cells, running a Bivariate script, and setting row states.

<!-- Keywords: #JMPScripting, #DataVisualization, #BivariateAnalysis, #RowStates, #InteractiveExploration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
r = dt << Select Where( :age == 12 );
Column( dt, 1 ) << Color Cells( "Light Yellow", r );
Column( dt, 1 ) << Color Cells( "light green" );
dt = Open("data_table.jmp");
obj = dt << Run Script( "Bivariate" );
dt << Select Where( :sex == "F" );
dt << Colors( "Red" );
rs = dt << Get row states;
```

**Code Explanation**:

1. Open data table.
2. Select rows where age is 12.
3. Color selected cells light yellow.
4. Color all cells light green.
5. Reopen data table.
6. Run Bivariate script.
7. Select rows where sex is female.
8. Set colors to red.
9. Get row states.



### Example 3
> **Summary**: Data filtering and row state management by selecting specific rows, hiding and excluding others, and labeling and coloring the remaining rows.

<!-- Keywords: #JMPScriptingLanguage, #DataFiltering, #RowStateManagement, #Labeling, #Coloring -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Select Where( :age == 14 );
dt << Exclude;
dt << Select Where( :sex == "F" );
dt << Hide;
dt << Select Where( :sex == "M" );
dt << Label;
dt << Color Or Mark By Column( :age );
rs = dt << Get Row States;
dt << Select Where( :height > 60 );
dt << Hide and Exclude;
rs2 = dt << Get Row states;
dt << Hide and Exclude( 0 );
rs3 = dt << Get Row states;
```

**Code Explanation**:

1. Open data table.
2. Select age 14 rows.
3. Exclude selected rows.
4. Select female rows.
5. Hide selected rows.
6. Select male rows.
7. Label selected rows.
8. Color by age column.
9. Get row states.
10. Select height > 60 rows.
11. Hide and exclude selected rows.
12. Get new row states.
13. Restore all rows visibility and exclusion.



## Column using Row Selection
> **Summary**: Selects and edits rows in a data table based on age, while keeping the dialog open and creating a window titled 'Select Rows'.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManipulation, #RowSelection, #DialogManagement, #WindowCreation -->

**Code**:
```jsl
dt2 = Open("data_table.jmp");
dt2 << Row Selection( Select where( :age == 12 ), Dialog( Edit( Source Column( :age ) == "12" ), Keep dialog open ) );
win = Window( "Select Rows" );
```

**Code Explanation**:

1. Open data table.
2. Select rows where age is 12.
3. Edit source column for age.
4. Keep dialog open.
5. Create window titled "Select Rows".



## Add Multiple Columns 
> **Summary**: Process of adding multiple columns to a JMP table and retrieving data types, providing an efficient way to analyze and manipulate data.

<!-- Keywords: #JMPScriptingLanguage, #DataManipulation, #ColumnOperations, #DataAnalysis, #Scripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Add Multiple Columns( "Express", 5, Expression );
typeList = {};
For( i = 1, i <= N Col( dt ), i++,
	Insert Into( typeList, Column( i ) << Get Data Type )
);
```

**Code Explanation**:

1. Open table.
2. Add multiple columns.
3. Initialize empty list.
4. Loop through columns.
5. Insert data types.



## Delete Columns 
> **Summary**: Runs data cleaning and configuration tasks by opening a JMP data table, deleting columns, selecting rows, creating a new data box, and enabling/disabling value labels for the color column.

<!-- Keywords: #JMPScriptingLanguage, #DataCleaning, #DataConfiguration, #ValueLabels, #DataBox -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Delete Columns( {:satell, :width, :weight, :weightstd} );
dt << Select where( Row() > 5 );
dt << Delete Rows;
ndb = dt << new data box();
Column( "color" ) << Use Value Labels( 0 );
Column( "color" ) << Use Value Labels( 1 );
Column( "color" ) << Use Value Labels( 0 );
Column( "color" ) << Use Value Labels;
Column( "color" ) << Use Value Labels;
```

**Code Explanation**:

1. Open data table;
2. Delete columns: satell, width, weight, weightstd.
3. Select rows greater than 5.
4. Delete selected rows.
5. Create new data box.
6. Enable value labels for color column.
7. Disable value labels for color column.
8. Enable value labels for color column.
9. Disable value labels for color column.
10. Toggle value labels for color column.



## Color or Mark by Column 
### Example 1
> **Summary**: Vizualizes a data table by coloring and marking rows based on age, selecting female records, and creating a new window with a graph box.

<!-- Keywords: #JSLScriptingLanguage, #DataVisualization, #GraphBox, #NewWindow, #RowSelection -->

**Code**:
```jsl
dt = Open( "$SAMPLE_DATA/data_table.jmp", invisible );
dt << Color or Mark by Column( :Age, Color theme( "pastel" ), Marker theme( "alphanumeric" ) );
dt << Select Where( :sex == "F" );
dt << Hide;
dt << Clear Select;
sz = [11, 12, 13, 14];
nw15 = New Window( "Test", g15 = Graph Box( Lines Seg( [10 10 90 90, 10 90 90 10], Row states( dt, [5 11 21 30] ), Sizes( sz ) ) ) );
frame = g15[FrameBox( 1 )];
nw15 << Close Window;
```

**Code Explanation**:

1. Open data table.
2. Color rows by age.
3. Mark rows by age.
4. Select female rows.
5. Hide selected rows.
6. Clear selection.
7. Define sizes array.
8. Create new window.
9. Add graph box.
10. Close window.



### Example 2
> **Summary**: Vizualizes a data table by coloring and marking rows based on age, selecting female records, and creating a graph with marker segments.

<!-- Keywords: #JSLScriptingLanguage, #DataVisualization, #GraphBuilder, #MarkerSegments, #InteractiveAnalysis -->

**Code**:
```jsl
dt = Open( "$SAMPLE_DATA/data_table.jmp", invisible );
dt << Color or Mark by Column( :Age, Color theme( "pastel" ), Marker theme( "alphanumeric" ) );
dt << Select Where( :sex == "F" );
dt << Hide;
dt << Clear Select;
sz = [11, 12, 13, 14];
nw15 = New Window( "Test", g15 = Graph Box( Marker Seg( [10 20 30 40], [40 30 20 10], Row states( dt, [5 11 20 29] ), Sizes( sz ) ) ) );
frame = g15[FrameBox( 1 )];
nw15 << Close Window;
```

**Code Explanation**:

1. Open data table;
2. Color by Age, mark by alphanumeric.
3. Select female rows.
4. Hide selected rows.
5. Clear row selection.
6. Define sizes array.
7. Create new window with graph.
8. Create marker segment graph.
9. Access frame box.
10. Close window.



### Example 3
> **Summary**: Visualizes and filters a data table, coloring or marking by age, selecting female rows, excluding selected rows, and creating a new window with a graph.

<!-- Keywords: #JSLScriptingLanguage, #DataVisualization, #Filtering, #Graphing, #InteractiveAnalysis -->

**Code**:
```jsl
dt = Open( "$SAMPLE_DATA/data_table.jmp", invisible );
dt << Color or Mark by Column( :Age, Color theme( "pastel" ), Marker theme( "alphanumeric" ) );
dt << Select Where( :sex == "F" );
dt << Exclude;
dt << Clear Select;
sz = [11, 12, 13, 14];
nw29 = New Window( "Test", g29 = Graph Box( Marker Seg( [10 20 30 40], [40 30 20 10], Row states( dt, [5 11 20 29] ), Sizes( sz ) ) ) );
frame = g29[FrameBox( 1 )];
nw29 << Close Window;
```

**Code Explanation**:

1. Open data table.
2. Color and mark by age.
3. Select female rows.
4. Exclude selected rows.
5. Clear row selection.
6. Define sizes array.
7. Create new window with graph.
8. Access graph frame.
9. Close created window.



### Example 4
> **Summary**: Vizualizes a data table by coloring and marking rows based on the Age column, selecting female records, and creating a new window with a graph box containing marker segments.

<!-- Keywords: #JSLScriptingLanguage, #DataVisualization, #GraphBuilder, #MarkerSegments, #InteractiveAnalysis -->

**Code**:
```jsl
dt = Open( "$SAMPLE_DATA/data_table.jmp", invisible );
dt << Color or Mark by Column( :Age, Color theme( "pastel" ), Marker theme( "alphanumeric" ) );
dt << Select Where( :sex == "F" );
sz = [11, 12, 13, 14];
nw30b = New Window( "Test", g30b = Graph Box( Marker Seg( [10 20 30 40], [40 30 20 10], Row states( dt, [5 11 20 29] ), Sizes( sz ) ) ) );
frame = g30b[FrameBox( 1 )];
nw30b << Close Window;
```

**Code Explanation**:

1. Open data table.
2. Color/mark by age column.
3. Select female rows.
4. Define size array.
5. Create new window.
6. Add graph box with marker segments.
7. Get frame box.
8. Close window.



## Column using Round
> **Summary**: Executes various regression scripts on a data table, generating predicted values and standard errors for each model type.

<!-- Keywords: #JSLScriptingLanguage, #RegressionAnalysis, #DataTableOperations, #ModelingType, #PredictedValues -->

**Code**:
```jsl
dt = Open("data_table.jmp");
script list = {"Lasso", "Elastic Net", "Ridge Regression", "Maximum  Likelihood", "Lasso Full Factorial", "Elastic Net Full Factorial",
"Ridge Regression Full Factorial"};
tmp = dt:TCH << get values;
dt:TCH << set values( Round( tmp ) );
dt:TCH << Modeling Type( "Ordinal" );
For( i = 1, i <= N Items( script list ), i++,
	obj = dt << Run Script( script list[i] );
	obj << (Fit[1] << Std Error of Predicted);
	obj << (Fit[1] << Std Error of Predicted Formula);
	saved pred1 = Column( dt, 15 ) << get values;
	saved pred2 = Column( dt, 16 ) << get values;
	obj << close window;
	dt << Clear Column Selection;
	Column( dt, 16 ) << set selected;
	dt << Delete Columns;
	Column( dt, 15 ) << set selected;
	dt << Delete Columns;
);
```

**Code Explanation**:

1. Open data table;
2. Define script list.
3. Get TCH values.
4. Round TCH values.
5. Set TCH modeling type to Ordinal.
6. Loop through script list.
7. Run current script.
8. Add Std Error of Predicted.
9. Add Std Error of Predicted Formula.
10. Save predicted values.



## Column using Clear Row States
> **Summary**: Process of opening a data table, clearing row states, and adding a new column with frequency values based on a formula.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManagement, #ColumnOperations, #FormulaCalculation, #JMPScripting -->

**Code**:
```jsl
dt1 = Open("data_table.jmp");
dt1 << Clear Row States( 1 );
dt1 << New Column( "Freq", values( [2, 3] |/ J( N Rows( dt1 ) - 2, 1, 1 ) ) );
```

**Code Explanation**:

1. Open data table.
2. Clear row states.
3. Add new column "Freq".
4. Set column values using formula.



## Column using Random Reset
> **Summary**: Creates a new column in a data table using Make KFold Formula, stratified by height and grouped by age and sex.

<!-- Keywords: #JSLScriptingLanguage, #DataManipulation, #KFoldFormula, #Stratification, #Grouping -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Random Reset( 123 );
dt << New Column( "5 Fold Column",
	Numeric,
	"Nominal",
	Formula( Make KFold Formula( 5, <<Y Columns( :weight ), <<Stratification Columns( :height ), <<Grouping Columns( :age, :sex ) ) )
);
```

**Code Explanation**:

1. Open data table.
2. Set random seed.
3. Create new column.
4. Define column as numeric.
5. Set column type to nominal.
6. Apply formula to column.
7. Use Make KFold Formula.
8. Specify 5 folds.
9. Include weight as Y column.
10. Stratify by height.
11. Group by age and sex.



## Get Column Names 
> **Summary**: Runs data table operations by opening a file, retrieving column names, accessing the second column, and modifying the first row value.

<!-- Keywords: #JSLScriptingLanguage, #DataTableOperations, #ColumnAccess, #RowModification, #FileHandling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
colNames = dt << Get Column Names( String );
Column( dt, colNames[2] )[1] = 1;
```

**Code Explanation**:

1. Open data table.
2. Retrieve column names.
3. Access second column.
4. Modify first row value.



## Column using Log Capture
> **Summary**: Executes a 'Degradation' script and subsequent data table operations, including adding a new column and deleting columns 1 to 4.

<!-- Keywords: #JSLScriptingLanguage, #DataTableOperations, #ScriptExecution, #ColumnManagement, #LogCapture -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Log Capture( deg = dt << Run Script( "Degradation" ) );
dt << New Column();
Log Capture( dt << Delete Columns( 1 :: 4 ) );
deg << Location Parameter Path( 1 );
deg << close window;
```

**Code Explanation**:

1. Open data table.
2. Run "Degradation" script.
3. Log capture results.
4. Add new column.
5. Delete columns 1 to 4.
6. Log capture deletion.
7. Set location parameter path.
8. Close window.



## Column using For Each
> **Summary**: Sorts individual columns in a data table without considering other columns, setting the sorted values back to each column.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManipulation, #ColumnSorting, #InSituProcessing, #JMPScripting -->

**Code**:
```jsl
//sort individual columns w/o respect to other columns, in situ
Names Default To Here( 1 );
dt = Open("data_table.jmp");
//lstcols = dt << Get Column Names;
For Each( {i}, 1::n cols (dt),
	m1 = Column(i) << Get Values;
	m2 = Sort Ascending( m1 );
	column(i) << Set Values( m2 );
);
```

**Code Explanation**:

1. Set default names.
2. Open data table;
3. Loop through each column.
4. Get values of current column.
5. Sort values in ascending order.
6. Set sorted values back to column.
7. Repeat for all columns.



