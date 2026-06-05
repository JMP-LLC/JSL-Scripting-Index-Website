# Data Filter

### Example 1
> **Summary**: Filters data in the 'data_table.jmp' file to display only exterior office spaces, utilizing a Data Filter with a specific location and condition.

<!-- Keywords: #DataFilter, #JMPScriptingLanguage, #LocationFilter, #ColumnFilter, #ListDisplay -->

**Code**:
```jsl
// Data Filter - Exterior Offices
// Open data table
dt = Open("data_table.jmp");
// Data Filter - Exterior Offices
Current Data Table() <<
Data Filter(
	Location( {376, 286} ),
	Add Filter(
		columns( :type of space ),
		Where(
			:type of space == "exterior"
		),
		Display(
			:type of space,
			Size( 204, 123 ),
			List Display
		)
	),
	Mode( Select( 0 ), Include( 1 ) )
);
```

**Code Explanation**:

1. Open data table.
2. Set current data table.
3. Add data filter.
4. Set filter location.
5. Add filter condition.
6. Specify filter column.
7. Define filter criteria.
8. Display filtered column.
9. Set display size.
10. Use list display mode.



### Example 2
> **Summary**: Opens a data table, filters female records, selects and colors them red, re-selects the filtered rows, colors marital status cells, clears row states, and clears row selection.

<!-- Keywords: #JMPScriptingLanguage, #DataFiltering, #RowSelection, #ColorCoding, #DataTableManipulation -->

**Code**:
```jsl
Open("data_table.jmp");
Current Data Table() << Data Filter( Location( {1705, 73} ), Add Filter( columns( :sex ), Where( :sex == "Female" ) ) );
Data Table("data_table") << Select Where( :sex == "Female" ) << Colors( "Red" );
Data Table("data_table") << Select Where( :sex == "Female" );
:marital status << Color Cells( 6 );
Data Table("data_table") << Clear Row States;
Data Table("data_table") << Clear Select;
```

**Code Explanation**:

1. Open data table;
2. Apply data filter for females.
3. Select all female rows.
4. Color selected rows red.
5. Re-select all female rows.
6. Color marital status cells.
7. Clear row states.
8. Clear row selection.



### Example 3
> **Summary**: Opens a data table, filters female rows, highlights them in red, selects the filtered rows again, colors marital status cells, clears row states and selection, and resets cell colors.

<!-- Keywords: #JMPScriptingLanguage, #DataFiltering, #RowSelection, #ColoringCells, #DataTableManipulation -->

**Code**:
```jsl
Open("data_table.jmp");
Current Data Table() << Data Filter( Location( {1705, 73} ), Add Filter( columns( :sex ), Where( :sex == "Female" ) ) );
Data Table("data_table") << Select Where( :sex == "Female" ) << Colors( "Red" );
Data Table("data_table") << Select Where( :sex == "Female" );
:marital status << Color Cells( 6 );
Data Table("data_table") << Clear Row States;
Data Table("data_table") << Clear Select;
:marital status << Color Cells( "" );
```

**Code Explanation**:

1. Open data table.
2. Apply data filter.
3. Highlight female rows red.
4. Select female rows again.
5. Color marital status cells.
6. Clear row states.
7. Clear selection.
8. Reset marital status cell colors.



### Example 4
> **Summary**: Creates a filtered data table based on age, sex, and height conditions, with interactive filtering capabilities.

<!-- Keywords: #DataFilter, #ConditionalFiltering, #InteractiveFiltering, #JMPScriptingLanguage, #FavoriteFilters -->

**Code**:
```jsl
dt = Open( "$SAMPLE_DATA/data_table.jmp", private );
DFFav = dt << Data Filter(
	Conditional,
	Mode( Select( 0 ), Show( 1 ), Include( 1 ) ),
	Add Filter( columns( :age, :sex, :height ), Order By Count( :age ) ),
	Favorites( "height >= 60 & height <= 65"(Match( columns( :age, :sex, :height ), Where( :height >= 60 & :height <= 65 ) )) )
);
```

**Code Explanation**:

1. Open data table.
2. Create Data Filter object.
3. Set filter mode to select.
4. Display selected rows.
5. Include selected rows in analysis.
6. Add filter for age, sex, height.
7. Order filter by count of age.
8. Define favorite filter.
9. Match rows where height is between 60 and 65.



### Example 5
> **Summary**: Creates a filtered data table based on age, sex, and height criteria, utilizing Data Filter to order by count and apply favorite filters.

<!-- Keywords: #DataFilter, #FavoriteFilters, #ConditionalFiltering, #JSLScripting, #JMP -->

**Code**:
```jsl
dt = Open( "$SAMPLE_DATA/data_table.jmp", private );
DFFav = dt << Data Filter(
	Conditional,
	Mode( Select( 0 ), Show( 1 ), Include( 1 ) ),
	Add Filter( columns( :age, :sex, :height ), Order By Count( :age ) ),
	Favorites( "height >= 60 & height <= 65"(Match( columns( :age, :sex, :height ), Where( :height >= 60 & :height <= 65 ) )) )
);
DFFav << Apply Favorites( "height >= 60 & height <= 65" );
```

**Code Explanation**:

1. Open data table.
2. Create data filter object.
3. Set filter mode to select.
4. Show and include filter options.
5. Add filter for age, sex, height.
6. Order by count of age.
7. Define favorite filter for height.
8. Apply favorite filter for height range.



### Example 6
> **Summary**: Data filtering and row state management for a JMP data table, utilizing the Data Filter function to select specific regions and include/exclude rows based on conditions.

<!-- Keywords: #JMPScriptingLanguage, #DataFiltering, #RowStateManagement, #ConditionalLogic, #DataTableOperations -->

**Code**:
```jsl
dt = Open( "$SAMPLE_DATA/data_table.jmp", "private" );
obj = dt << Data Filter(
	invisible,
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
If( Host is( Windows ),
	ws = Window( "Data Filter for data_table" ) << get window size()
);
rs = dt << get row states;
```

**Code Explanation**:

1. Open data table;
2. Create data filter object.
3. Set filter to invisible.
4. Add filter for Region and POP columns.
5. Filter where Region is "C" or "N".
6. Set filter mode to select, show, include.
7. Check if host is Windows.
8. Get window size of "Data Filter for Cities".
9. Get row states of the table.
10. Store results in variables.



### Example 7
> **Summary**: Selects and displays specific data rows in a JMP data table, utilizing the Data Filter function to filter out unwanted records.

<!-- Keywords: #JMPScriptingLanguage, #DataFilter, #FilterMode, #SelectRows, #IncludeSelected -->

**Code**:
```jsl
dt = Open( "$SAMPLE_DATA/data_table.jmp", "private" );
obj = dt << Data Filter( Add Filter(), Mode( Select( 0 ), Show( 0 ), Include( 1 ) ) );
```

**Code Explanation**:

1. Open data table.
2. Create data filter object.
3. Add filter to data table.
4. Set filter mode to select.
5. Hide filter interface.
6. Include selected rows.



### Example 8
> **Summary**: Filters a data table to focus on specific regions and states, utilizing Data Filter objects to add filters based on population and geographic criteria.

<!-- Keywords: #DataFilter, #JMPScriptingLanguage, #DataTableFiltering, #RegionSelection, #StateFiltering -->

**Code**:
```jsl
dt = Open( "$SAMPLE_DATA/data_table.jmp", "private" );
obj = dt << Data Filter();
obj << Add Filter( columns( :POP ), Where( :POP > 1000 ) );
obj << Add Filter( columns( :Region, :State, :City ), Where( :Region == "S" ), Where( :State == {"SC", "NC"} ) );
```

**Code Explanation**:

1. Open data table.
2. Create Data Filter object.
3. Add filter for POP > 1000.
4. Add filter for Region == "S".
5. Add filter for State == "SC" or "NC".



### Example 9
> **Summary**: Data filtering and row state management for a specific age range in a JMP data table, utilizing the Data Filter function.

<!-- Keywords: #JMPScriptingLanguage, #DataFiltering, #RowStateManagement, #FilterMode, #JSL -->

**Code**:
```jsl
dt = Open( "$SAMPLE_DATA/data_table.jmp", "private" );
df = dt << Data Filter( Add Filter( columns( :age ), Where( :age >= 31.86 & :age <= 60 ) ), Mode( Select( 0 ), Show( 0 ), Include( 1 ) ) );
rs = dt << get row states;
df << Mode( Select( 1 ), Show( 1 ), Include( 1 ) );
rs = dt << get row states;
df << Mode( Select( 0 ), Show( 0 ), Include( 0 ) );
rs = dt << get row states;
df << Mode( Select( 0 ), Show( 1 ), Include( 0 ) );
rs = dt << get row states;
df << Mode( Select( 1 ), Show( 0 ), Include( 0 ) );
rs = dt << get row states;
df << Mode( Select( 1 ), Show( 1 ), Include( 0 ) );
rs = dt << get row states;
df << Mode( Select( 0 ), Show( 1 ), Include( 1 ) );
rs = dt << get row states;
```

**Code Explanation**:

1. Open data table;
2. Create data filter for age.
3. Set filter mode to select off.
4. Get initial row states.
5. Set filter mode to select on.
6. Get row states after selection.
7. Set filter mode to include off.
8. Get row states after inclusion off.
9. Set filter mode to show on.
10. Get row states after showing.



### Example 10
> **Summary**: Filters and displays data based on specific state and region conditions, utilizing the Data Filter function in JMP.

<!-- Keywords: #JMPScriptingLanguage, #DataFilter, #Filtering, #DisplayOptions, #ConditionalStatements -->

**Code**:
```jsl
dt = Open( "$SAMPLE_DATA/data_table.jmp", "private" );
df = dt << Data Filter(
	Location( {673, 234} ),
	Add Filter(
		columns( :State, :Region ),
		Where( :State == {"AL", "AZ", "CA", "CO", "CT", "DC", "DE", "FL", "GA"} ),
		Where( :Region == {"MW", "N", "S"} ),
		Display( :State, Size( 204, 174 ), List Display )
	)
);
fr = df << Get Filtered Rows( 1 );
```

**Code Explanation**:

1. Open data table.
2. Create data filter.
3. Set filter location.
4. Add filter criteria.
5. Specify filter columns.
6. Define state filter conditions.
7. Define region filter conditions.
8. Set display options for state.
9. Retrieve filtered rows.
10. Assign filtered rows to variable.



### Example 11
> **Summary**: Data filtering and reporting for a specific geographic region, state, city, and lead range using the Data Filter function in JMP.

<!-- Keywords: #JMPScriptingLanguage, #DataFiltering, #ConditionalStatements, #ReportGeneration, #GeographicAnalysis -->

**Code**:
```jsl
dt = Open( "$SAMPLE_DATA/data_table.jmp", "private" );
df = dt << Data Filter(
	Location( {730, 327} ),
	Conditional,
	Add Filter(
		columns( :city, :State, :Region, :Lead ),
		Where( :Region == "MW" ),
		Where( :State == {"KS", "MI", "MN"} ),
		Where( :city == {"DETROIT", "MINNEAPOLIS", "WICHITA"} ),
		Where( :Lead >= 0.0606 & :Lead <= 0.24 ),
		Display( :city, Size( 204, 174 ), List Display ),
		Display( :State, Size( 204, 174 ), List Display ),
		Display( :Lead )
	)
);
If( Host is( windows ) & Is Empty( This Project() ),
	,
	dfrep = df << report
);
```

**Code Explanation**:

1. Open table.
2. Create data filter.
3. Set filter location.
4. Add conditional filter.
5. Select columns for filtering.
6. Filter by region.
7. Filter by state.
8. Filter by city.
9. Filter by lead range.
10. Display filtered data.



### Example 12
> **Summary**: Data filtering for specific regions and population values, enabling interactive selection and inclusion of filtered results.

<!-- Keywords: #DataFiltering, #InteractiveSelection, #JMPScriptingLanguage, #RegionPopulationAnalysis, #FilterModeControl -->

**Code**:
```jsl
dt = Open( "$SAMPLE_DATA/data_table.jmp", "private" );
df = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
```

**Code Explanation**:

1. Open data table.
2. Create data filter object.
3. Add filter for Region and POP columns.
4. Set filter condition for Region.
5. Configure filter mode to select.
6. Hide filter controls initially.
7. Enable filter inclusion.



### Example 13
> **Summary**: Data filtering and column selection to analyze specific regions, utilizing the Data Filter function in JMP.

<!-- Keywords: #JMPScriptingLanguage, #DataFiltering, #ColumnSelection, #RegionAnalysis, #Filtering -->

**Code**:
```jsl
dt = Open( "$SAMPLE_DATA/data_table.jmp", "private" );
df = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 1 ), Show( 0 ), Include( 0 ) )
);
df << Columns( :SO2, :CO, :State );
df << Match( Filter Columns( :SO2 ), Where( :SO2 > 0.08 ) );
```

**Code Explanation**:

1. Open data table;
2. Create Data Filter object.
3. Add filter for Region C and N.
4. Set filter mode to Select.
5. Hide filter controls.
6. Exclude filtered rows from analysis.
7. Select SO2, CO, and State columns.
8. Match SO2 column values.
9. Filter where SO2 > 0.08.



### Example 14
> **Summary**: Data filtering and deletion for a specific region and population using the Data Filter function in JMP.

<!-- Keywords: #JMPScriptingLanguage, #DataFiltering, #DeleteRows, #RegionPopulationAnalysis, #FilterMode -->

**Code**:
```jsl
dt = Open( "$SAMPLE_DATA/data_table.jmp", "private" );
df = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
df << Delete All;
```

**Code Explanation**:

1. Open data table;
2. Create data filter.
3. Add filter for Region and POP.
4. Set filter criteria for Region.
5. Set filter mode to select.
6. Hide filter interface.
7. Include filtered rows.
8. Delete all filters.



### Example 15
> **Summary**: Data filtering and column deletion for a specific dataset, utilizing the Data Filter function to apply conditional filters based on region, state, city, population, and ozone levels.

<!-- Keywords: #DataFilter, #ConditionalFiltering, #ColumnDeletion, #JMPScriptingLanguage, #DataManipulation -->

**Code**:
```jsl
dt = Open( "$SAMPLE_DATA/data_table.jmp", "private" );
df = dt << Data Filter(
	Location( {1134, 297} ),
	Conditional,
	Add Filter(
		columns( :city, :State, :Region, :POP, :OZONE ),
		Where( :Region == {"MW", "N", "S"} ),
		Where( :State == {"AL", "CT", "DC", "DE", "FL", "GA"} ),
		Where( :city == {"ATLANTA", "HARTFORD", "JACKSONVILLE", "MIAMI", "MOBILE", "MONTGOMERY", "WASHINGTON"} ),
		Where( :POP >= 832.1 & :POP <= 3646 ),
		Where( :OZONE >= 0.12 & :OZONE <= 0.161 ),
		Display( :city, Size( 204, 174 ), List Display ),
		Display( :State, Size( 204, 174 ), List Display ),
		Display( :POP ),
		Display( :OZONE )
	)
);
df << Delete( {:city} );
df << Delete( {:state} );
df << Delete( {:ozone, :SO2} );
df << Delete( {:region} );
```

**Code Explanation**:

1. Open data table;
2. Create data filter.
3. Set filter location.
4. Define conditional filter.
5. Add filter for selected columns.
6. Filter by Region values.
7. Filter by State values.
8. Filter by city values.
9. Filter by POP range.
10. Filter by OZONE range.



### Example 16
> **Summary**: Filters and displays data subsets based on specific conditions, including region, state, city, and lead range.

<!-- Keywords: #JSLScriptingLanguage, #DataFilter, #ConditionalFiltering, #DisplayOptions, #SubsetData -->

**Code**:
```jsl
dt = Open( "$SAMPLE_DATA/data_table.jmp", "private" );
df = dt << Data Filter(
	Location( {730, 327} ),
	Conditional,
	Add Filter(
		columns( :city, :State, :Region, :Lead ),
		Where( :Region == "MW" ),
		Where( :State == {"KS", "MI", "MN"} ),
		Where( :city == {"DETROIT", "MINNEAPOLIS", "WICHITA"} ),
		Where( :Lead >= 0.0606 & :Lead <= 0.24 ),
		Display( :city, Size( 204, 174 ), List Display ),
		Display( :State, Size( 204, 174 ), List Display ),
		Display( :Lead )
	)
);
subdt = df << Show Subset;
subMat = subdt << get as matrix;
```

**Code Explanation**:

1. Open data table.
2. Create data filter.
3. Set filter location.
4. Define conditional filter.
5. Add filter criteria for Region.
6. Add filter criteria for State.
7. Add filter criteria for city.
8. Add filter criteria for Lead range.
9. Display filtered cities.
10. Display filtered states.
11. Display filtered Lead.
12. Show subset of filtered data.
13. Get subset data as matrix.



### Example 17
> **Summary**: Runs the filtering and matching process for BP 8W, BP 6M, and BP 12M columns in a data table.

<!-- Keywords: #DataFiltering, #MatchCriteria, #JSLScripting, #DataManipulation, #ConditionalLogic -->

**Code**:
```jsl
dt = Open( "$SAMPLE_DATA/data_table.jmp", "private" );
df = dt << Data Filter( Add Filter( columns( :BP 8W, :BP 6M ) ), Add Filter( columns( :BP 12M ) ) );
df << Match( Filter Columns( :BP 8W, :BP 6M ), Where( :BP 8W > 174.8 & :BP 8W < 184.2 ) );
df << Match( Filter Columns( :BP 12M ), Where( :BP 12M > 181.9 & :BP 12M < 192.1 ) );
```

**Code Explanation**:

1. Open data table;
2. Create data filter object.
3. Add first filter for BP 8W and BP 6M.
4. Add second filter for BP 12M.
5. Set match criteria for BP 8W.
6. Set match criteria for BP 12M.



### Example 18
> **Summary**: Runs the filtering and matching process to extract specific data from a JMP data table, utilizing Data Filter and Match functions.

<!-- Keywords: #JMPScriptingLanguage, #DataFiltering, #MatchFunction, #FilterColumns, #ConditionalStatements -->

**Code**:
```jsl
dt = Open( "$SAMPLE_DATA/data_table.jmp", "private" );
df = dt << Data Filter(
	Location( {796, 211} ),
	Add Filter( columns( :State, :Region ), Display( :State, Size( 204, 174 ), List Display ) ),
	Add Filter( columns( :OZONE, :CO ), Display( :OZONE ), Display( :CO ) )
);
df << Match( Filter Columns( :ozone, :CO ), Where( :ozone > 0.10 & :ozone < 0.15 ) );
df << Match( Filter Columns( :State, :region ), Where( :state == {"AL", "NC", "FL"} ) );
df << Match( Filter Columns( :State, :region ), Where( :region == {"N", "CA"} ) );
```

**Code Explanation**:

1. Open data table;
2. Create data filter.
3. Set filter location.
4. Add State, Region filter.
5. Add OZONE, CO filter.
6. Filter OZONE between 0.10 and 0.15.
7. Filter State for AL, NC, FL.
8. Filter Region for N, CA.



### Example 19
> **Summary**: Filtering and selection process for a data table, applying multiple conditions to specific columns and inverting filter selections.

<!-- Keywords: #DataFiltering, #JSLScripting, #SelectionCriteria, #FilterInversion, #DataTableManipulation -->

**Code**:
```jsl
dt = Open( "$SAMPLE_DATA/data_table.jmp", "private" );
df = dt << Data Filter(
	Location( {219, 400} ),
	Add Filter(
		columns( :age, :sex, :height, :weight ),
		Where( :age == 14 ),
		Where( :sex == "F" ),
		Where( :height >= 55.8 & :height <= 70 ),
		Where( :weight >= 90.7 & :weight <= 172 )
	)
);
selRows1 = dt << Get Selected Rows;
df << Inverse( 1 );
selRows2 = dt << Get Selected Rows;
df << Inverse( 0 );
df << (Filter column( :age ) << Invert Selection);
selRows3 = dt << Get Selected Rows;
df << (Filter column( :sex ) << Invert Selection);
selRows4 = dt << Get Selected Rows;
df << (Filter column( :height ) << Invert Selection);
selRows5 = dt << Get Selected Rows;
df << (Filter column( :weight ) << Invert Selection);
selRows6 = dt << Get Selected Rows;
```

**Code Explanation**:

1. Open data table.
2. Create data filter.
3. Set filter location.
4. Add filter criteria.
5. Select rows matching criteria.
6. Invert filter selection.
7. Select new rows.
8. Enable filter again.
9. Invert age filter selection.
10. Select rows after inverting age.



### Example 20
> **Summary**: Creates and applies complex data filters in JMP, utilizing multiple conditions to narrow down a dataset.

<!-- Keywords: #JSLScriptingLanguage, #DataFiltering, #ConditionalLogic, #JMP, #DataAnalysis -->

**Code**:
```jsl
dt = Open( "$SAMPLE_DATA/data_table.jmp", "private" );
obj = dt << Data Filter( Add( Filter Columns( :Region, :Lead ) ) );
obj << (Filter Column( :Lead ) << Where( :Lead >= .4 & :Lead <= 1.4 ));
txt = obj << get where clause;
obj << Close;
dt << Clear Select;
Eval( Parse( "dt << " || txt ) );
dt << Clear Select;
obj = dt << Data Filter( Add( Filter Columns( :Region, :Lead ) ) );
obj << (Filter Column( :Region ) << Where( :Region == {"C", "MW"} ));
txt = obj << get where clause;
obj << Close;
dt << Clear Select;
Eval( Parse( "dt << " || txt ) );
dt << Clear Select;
Column( "region" )[1] = "";
Column( "region" )[2] = "";
Column( "region" )[3] = "";
Column( "pop" )[1] = .;
Column( "pop" )[2] = .;
Column( "pop" )[3] = .;
obj = dt << Data Filter( Add( Filter Columns( :Region, :Lead ) ) );
obj << (Filter Column( :Region ) << Where( :Region == "" ));
txt = obj << get where clause;
 
 
obj << Close;
dt << Clear Select;
Eval( Parse( "dt << " || txt ) );
dt << Clear Select;
Column( "POP" ) << modeling type( "Nominal" );
obj = dt << Data Filter( Add( Filter Columns( :pop ) ) );
obj << (Filter Column( :pop ) << Where( Is Missing( :pop ) ));
txt = obj << get where clause;
obj << Close;
dt << Clear Select;
Eval( Parse( "dt << " || txt ) );
dt << Clear Select;
df = dt << Data Filter(
	Location( {319, 249} ),
	Add Filter( columns( :city ), Where( :city == {"ALBUQUERQUE", "ATLANTA"} ), Display( :city, Size( 204, 259 ), List Display ) ),
	Add Filter(
		columns( :Region, :OZONE, :SO2 ),
		Where( :Region == {"", "C", "MW", "S", "TX"} ),
		Where( :OZONE >= 0.148 & :OZONE <= 0.33 ),
		Where( :SO2 >= 0.001 & :SO2 <= 0.058 )
	)
);
gwc = df << Get Where Clause;
df << Close;
dt << Clear Select;
Eval( Parse( "dt << " || gwc ) );
```

**Code Explanation**:

1. Open data table;
2. Create Data Filter object.
3. Add Region and Lead columns to filter.
4. Set Lead filter criteria.
5. Retrieve where clause.
6. Close Data Filter.
7. Clear table selection.
8. Apply filter using where clause.
9. Clear table selection again.
10. Modify Region and POP values for specific rows.
11. Create new Data Filter object.
12. Set Region filter criteria.
13. Retrieve where clause.
14. Close Data Filter.
15. Clear table selection.
16. Apply filter using where clause.
17. Clear table selection again.
18. Change POP column modeling type to Nominal.
19. Create new Data Filter object.
20. Set POP missing filter criteria.
21. Retrieve where clause.
22. Close Data Filter.
23. Clear table selection.
24. Apply filter using where clause.
25. Clear table selection again.
26. Create complex Data Filter object with multiple conditions.
27. Retrieve where clause.
28. Close Data Filter.
29. Clear table selection.
30. Apply complex filter using where clause.



### Example 21
> **Summary**: Data filtering for specific regions in a JMP data table, utilizing the Data Filter function to select and include relevant data.

<!-- Keywords: #JMPScriptingLanguage, #DataFiltering, #RegionSelection, #DataTableOperations, #Filtering -->

**Code**:
```jsl
dt = Open( "$SAMPLE_DATA/data_table.jmp", "private" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
txt1 = obj << Get Script;
where1 = Char( Arg( Arg( Arg( txt1, 2 ), 3 ), 2 ) );
```

**Code Explanation**:

1. Open data table;
2. Create data filter object.
3. Filter Region for C and N.
4. Set filter mode to select, show, include.
5. Get script from filter object.
6. Extract filter condition string.
7. Assign extracted string to where1 variable.



### Example 22
> **Summary**: Creates a data filter with conditional filtering and checkbox display for the 'age' column, utilizing the Data Filter function.

<!-- Keywords: #DataFilter, #ConditionalFiltering, #CheckboxDisplay, #JSLScriptingLanguage, #JMP -->

**Code**:
```jsl
dt_df = Open( "$SAMPLE_DATA/data_table.jmp", "private" );
df = dt_df << Data Filter(
	Location( {916, 42} ),
	conditional( 1 ),
	Add Filter( columns( :age ), Display( :age, Size( 160, 90 ), Check Box Display ) )
);
```

**Code Explanation**:

1. Open data table.
2. Create data filter.
3. Set filter location.
4. Enable conditional filtering.
5. Add age column filter.
6. Display age as checkbox.
7. Set age display size.



### Example 23
> **Summary**: Data filtering and display operations to select specific regions from a data table, utilizing the Data Filter function.

<!-- Keywords: #JSLScriptingLanguage, #DataFilter, #SingleCategoryDisplay, #GetSelectedRows, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
df = dt << Data Filter( Add Filter( columns( :Region, :POP ), Where( :Region == {"N"} ) ), Mode( Select( 1 ), Show( 0 ), Include( 0 ) ) );
selrows1 = dt << Get Selected Rows;
df << Display( :Region, Single Category Display );
selrows2 = dt << Get Selected Rows;
```

**Code Explanation**:

1. Open data table.
2. Create data filter object.
3. Set filter criteria.
4. Apply filter mode.
5. Retrieve selected rows.
6. Display filtered region.
7. Retrieve updated selected rows.



### Example 24
> **Summary**: Filters data based on specific conditions, moving the filtered results to a script window and closing the original table.

<!-- Keywords: #DataFiltering, #ScriptWindow, #JSL, #TableManipulation, #ConditionalLogic -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Data Filter( Add( Filter Columns( :Region, :Lead ) ) );
obj << (Filter Column( :Region ) << Where( :Region == {"C", "MW"} ));
obj << to Script Window;
obj << Close;
Close( dt, no save );
Window( "Script Window" ) << Close Window;
```

**Code Explanation**:

1. Open table.
2. Create data filter object.
3. Add filter columns.
4. Set filter condition for Region.
5. Move filter to script window.
6. Close filter object.
7. Close original table.
8. Close script window.



### Example 25
> **Summary**: Filters and displays data in a JMP data table, applying population and state filters to generate a report.

<!-- Keywords: #JMPScriptingLanguage, #DataFilter, #ReportGeneration, #Filtering, #DisplayOptions -->

**Code**:
```jsl
dt = Open("data_table.jmp");
df = dt << Data Filter(
	Add Filter( columns( :POP ), Where( :POP > 1000 & :POP <= 8529 ) ),
	Add Filter( columns( :State ), Where( :State == "AL" ), )
);
df << Display( :State, Size( 64, 699 ), Check Box Display );
rep = df << report;
```

**Code Explanation**:

1. Open data table.
2. Create Data Filter object.
3. Add population filter: POP > 1000 & POP <= 8529.
4. Add state filter: State == "AL".
5. Display filter for State column.
6. Set display size to 64x699.
7. Use checkbox display style.
8. Generate filter report.
9. Assign report to variable rep.
10. End script.



### Example 26
> **Summary**: Filters and manipulates a data table by applying favorite filters to specific age and height ranges, adding new rows, and setting row names.

<!-- Keywords: #DataFilter, #FavoriteFilters, #AddRows, #RowNames, #JSLScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
df = dt << Data Filter(
	Location( {1038, 125} ),
	Add Filter( columns( :age, :height ) ),
	Favorites(
		"sex = M"(Match( columns( :sex ), Where( :sex == "M" ) )),
		"age = 12, 14, 16 and :height >= 58.93 & :height <= 70"(Match( columns( :age, :height ),
			Where( :age == {12, 14, 16} ), Where( :height >= 58.93 & :height <= 70 )
		))
	)
);
df << Apply Favorites( "age = 12, 14, 16 and :height >= 58.93 & :height <= 70" );
dt << Add Rows( 1 );
dt:name[41] = "Penelope";
```

**Code Explanation**:

1. Open data table;
2. Create Data Filter object.
3. Set filter location.
4. Add filter for age and height columns.
5. Define favorite filter for sex = M.
6. Define favorite filter for specific age and height range.
7. Apply the specific age-height favorite filter.
8. Add a new row to the table.
9. Set name of new row to "Penelope".



### Example 27
> **Summary**: Data filtering and row manipulation in a JMP data table, adding a new row with a specified name.

<!-- Keywords: #JMPScriptingLanguage, #DataFiltering, #RowManipulation, #DataTableOperations, #JSLScript -->

**Code**:
```jsl
dt = Open("data_table.jmp");
df = dt << Data Filter( Location( {232, 142} ), Add Filter( columns( :sex ), Where( :sex == "M" ) ), Mode( Show( 1 ), Include( 1 ) ) );
dt << Add Rows( 1 );
dt:name[41] = "VALENTINA";
```

**Code Explanation**:

1. Open data table;
2. Create data filter.
3. Set filter location.
4. Add filter for sex.
5. Set filter mode.
6. Add new row to table.
7. Assign name to new row.



### Example 28
> **Summary**: Filtering and selection process for a data table, allowing users to dynamically filter rows based on specific conditions and retrieve selected rows.

<!-- Keywords: #DataFiltering, #JSLScripting, #InteractiveFiltering, #RowSelection, #JMPScriptingLanguage -->

**Code**:
```jsl
dt = Open("data_table.jmp");
df = dt << Data Filter(
	Location( {437, 194} ),
	Add Filter(
		columns( :Brush Delimited ),
		Match All( Where( :Brush Delimited == {"Before Sleep", "Wake"} ) ),
		Display( :Brush Delimited, Size( 121, 70 ), Check Box Display )
	)
);
selRows = dt << Get Selected Rows;
df << Add Favorites( "All" );
df << Delete All;
df << Apply Favorites( "All" );
selRows2 = dt << Get Selected Rows;
```

**Code Explanation**:

1. Open data table.
2. Create data filter.
3. Set filter location.
4. Add filter condition.
5. Specify filter columns.
6. Define match criteria.
7. Display filter options.
8. Retrieve selected rows.
9. Save filter settings.
10. Clear all filters.
11. Apply saved filter.
12. Retrieve new selected rows.



### Example 29
> **Summary**: Runs the filtering process for a specific column in a data table, allowing users to match none, any, exactly, or only checked items.

<!-- Keywords: #DataFiltering, #JSLScripting, #ColumnMatching, #InteractiveFiltering, #JMPScriptingLanguage -->

**Code**:
```jsl
dt = Open("data_table.jmp");
df = dt << Data Filter(
	Location( {437, 194} ),
	Add Filter(
		columns( :Brush Delimited ),
		Match None( Where( :Brush Delimited == {"Before Sleep", "Wake"} ) ),
		Display( :Brush Delimited, Size( 121, 70 ), Check Box Display )
	)
);
df << (Filter Column( :Brush Delimited ) << Match Any of the Checked Items( Where( :Brush Delimited == {"Other", "Wake"} ) ));
df << (Filter Column( :Brush Delimited ) << Match none of the Checked Items( Where( :Brush Delimited == {"Before Sleep", "Wake"} ) ));
df << (Filter Column( :Brush Delimited ) << Match Exactly the Checked Items( Where( :Brush Delimited == {"Other", "Wake"} ) ));
df << (Filter Column( :Brush Delimited ) << Match Only the Checked Items( Where( :Brush Delimited == {"Before Sleep", "Wake"} ) ));
df << (Filter Column( :Brush Delimited ) << Match All of the Checked Items( Where( :Brush Delimited == {"Other", "Wake"} ) ));
```

**Code Explanation**:

1. Open data table;
2. Create data filter.
3. Set filter location.
4. Add filter for Brush Delimited.
5. Match none of checked items.
6. Display filter column.
7. Match any of checked items.
8. Match none of checked items.
9. Match exactly checked items.
10. Match only checked items.



### Example 30
> **Summary**: Data filtering and column deletion operations on a JMP data table, utilizing the Data Filter function to refine the dataset.

<!-- Keywords: #JMPScriptingLanguage, #DataFilter, #ColumnDeletion, #DataTableOperations, #JSL -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
obj << Delete( {:Region} );
obj << Delete( {:Pop, :city} );
obj << Delete( {} );
obj << Delete();
```

**Code Explanation**:

1. Open data table;
2. Create Data Filter object.
3. Add filter for Region C and N.
4. Set filter mode to select, hide, include.
5. Delete Region column from filter.
6. Delete Pop and city columns from filter.
7. Delete unnamed column from filter.
8. Delete filter object.



### Example 31
> **Summary**: Data filtering by adding a filter to the 'age' and 'sex' columns, extracting the script for further use.

<!-- Keywords: #DataFiltering, #JSLScripting, #ColumnFiltering, #DataManipulation, #JMPScriptingLanguage -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Data Filter( Add Filter( columns( :age, :sex ) ) );
s = Char( obj << Get Script );
```

**Code Explanation**:

1. Open data table;
2. Create data filter object.
3. Add age and sex columns filter.
4. Get script for filter object.



### Example 32
> **Summary**: Data filtering and report generation by applying conditional filters to a data table, specifying filter columns, and deleting a column.

<!-- Keywords: #DataFiltering, #JMPScriptingLanguage, #ReportGeneration, #ConditionalFiltering, #DataTableManipulation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
df = dt << Data Filter(
	Location( {204, 114} ),
	Conditional,
	Add Filter( columns( :name, :age, :sex ), Display( :name, Size( 204, 174 ), List Display ), Display( :sex, List Display ) )
);
df << (Filter Column( :sex ) << Where( :sex == "M" ));
df << (Filter Column( :age ) << Where( :age == 14 ));
df << (Filter Column( :name ) << Where( :name == {"ALFRED", "CHRIS"} ));
df << Delete( {:name} );
rep = df << report;
```

**Code Explanation**:

1. Open data table;
2. Create data filter.
3. Set filter location.
4. Add conditional filter.
5. Specify filter columns.
6. Display name column.
7. Display sex column.
8. Filter by sex "M".
9. Filter by age 14.
10. Filter by names "ALFRED", "CHRIS".
11. Delete name column.
12. Generate report.



### Example 33
> **Summary**: Data filtering by adding a filter column for Region and Lead, then setting the Region filter to C and MW.

<!-- Keywords: #DataFiltering, #JSLScripting, #FilterColumns, #RegionFilter, #LeadFilter -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Data Filter( Add( Filter Columns( :Region, :Lead ) ) );
obj << (Filter Column( :Region ) << Where( :Region == {"C", "MW"} ));
obj << to Script Window;
```

**Code Explanation**:

1. Open data table.
2. Create data filter object.
3. Add filter columns: Region, Lead.
4. Set Region filter to C, MW.
5. Display filter script in window.



### Example 34
> **Summary**: Data filtering and matching operations to extract specific rows from a JMP data table, utilizing the Data Filter and Match functions.

<!-- Keywords: #JMPScriptingLanguage, #DataFiltering, #MatchFunction, #JSLScripting, #DataTableOperations -->

**Code**:
```jsl
dt = Open("data_table.jmp");
df = dt << Data Filter( Add Filter( columns( :age, :weight ) ), Add Filter( columns( :height ) ), Mode( Select( 1 ) ) );
df << Match( Where( :sex == "F" ) );
```

**Code Explanation**:

1. Open data table.
2. Create data filter object.
3. Add filter for age and weight.
4. Add filter for height.
5. Set filter mode to select.
6. Apply filter to first condition.
7. Match rows where sex is female.



### Example 35
> **Summary**: Filters and selects data rows based on specific conditions, including age range and gender.

<!-- Keywords: #DataFiltering, #RowSelection, #JSLScripting, #ConditionalLogic, #InteractiveFiltering -->

**Code**:
```jsl
dt_df2 = Open("data_table.jmp");
df = dt_df2 << Data Filter(
	Location( {916, 42} ),
	conditional( 0 ),
	Add Filter( columns( :sex ), Display( :age, Size( 160, 90 ), List Display ) )
);
df << Add Filter( columns( :age ) );
obj = dt_df2 << Select Where( (:age == 16 | :age == 17) & :sex == "M" );
df = obj << get row states;
```

**Code Explanation**:

1. Open data table;
2. Create data filter object.
3. Set filter location.
4. Initialize filter conditions.
5. Add sex filter column.
6. Display age list for sex.
7. Add age filter column.
8. Select rows where age is 16 or 17.
9. Filter rows by male gender.
10. Retrieve selected row states.



### Example 36
> **Summary**: Data filtering and reporting by selecting specific regions and populations, then generating a report from the filtered data.

<!-- Keywords: #DataFiltering, #JMPScriptingLanguage, #ReportGeneration, #DataAnalysis, #FilteringAndSorting -->

**Code**:
```jsl
dt2 = Open("data_table.jmp");
dfWin = dt2 << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
regionobj = dfWin << Get Filter Column( :Region );
regionobj << Find( Set Text( "w" ) );
reprt = dfWin << report;
```

**Code Explanation**:

1. Open data table;
2. Create data filter window.
3. Add filter for Region and POP columns.
4. Set filter mode to Select, Show, Include.
5. Get Region filter object.
6. Find text "w" in Region filter.
7. Generate report from filtered data.



### Example 37
> **Summary**: Data filtering and row state management for a JMP data table, utilizing the Data Filter function to apply conditions and set filter visibility.

<!-- Keywords: #JMPScriptingLanguage, #DataFiltering, #RowStateManagement, #DataTableOperations, #Filtering -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Data Filter(
	invisible,
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
If( Host is( Windows ),
	ws = Window( "Data Filter for data_table" ) << get window size()
);
rs = dt << get row states;
```

**Code Explanation**:

1. Open table.
2. Create data filter.
3. Set filter visibility.
4. Add filter conditions.
5. Set filter mode.
6. Check host OS.
7. Get window size (Windows).
8. Get row states.



### Example 38
> **Summary**: Data filtering by adding a filter to a data table, selecting specific rows for analysis, and hiding the filter interface.

<!-- Keywords: #DataFiltering, #JSLScripting, #DataAnalysis, #JMP, #FilteringRows -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Data Filter( Add Filter(), Mode( Select( 0 ), Show( 0 ), Include( 1 ) ) );
```

**Code Explanation**:

1. Open data table.
2. Create data filter object.
3. Add filter to data table.
4. Set filter mode to select.
5. Hide filter interface.
6. Include filtered rows in analysis.



### Example 39
> **Summary**: Data filtering to extract specific records from a data table, utilizing the Data Filter object and conditional statements.

<!-- Keywords: #DataFilter, #ConditionalStatement, #JSLScriptingLanguage, #DataTableManipulation, #Filtering -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Data Filter();
obj << Add Filter( columns( :POP ), Where( :POP > 1000 ) );
obj << Add Filter( columns( :Region, :State, :City ), Where( :Region == "S" ), Where( :State == {"SC", "NC"} ) );
```

**Code Explanation**:

1. Open data table;
2. Create data filter object.
3. Add population filter.
4. Add region filter.
5. Add state filter.
6. Apply city filter.



### Example 40
> **Summary**: Runs the filtering and row state management of a data table based on age criteria, enabling interactive selection and display control.

<!-- Keywords: #DataFilter, #RowStateManagement, #InteractiveFiltering, #JSLScripting, #DataTableManipulation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
df = dt << Data Filter( Add Filter( columns( :age ), Where( :age >= 31.86 & :age <= 60 ) ), Mode( Select( 0 ), Show( 0 ), Include( 1 ) ) );
rs = dt << get row states;
df << Mode( Select( 1 ), Show( 1 ), Include( 1 ) );
rs = dt << get row states;
df << Mode( Select( 0 ), Show( 0 ), Include( 0 ) );
rs = dt << get row states;
df << Mode( Select( 0 ), Show( 1 ), Include( 0 ) );
rs = dt << get row states;
df << Mode( Select( 1 ), Show( 0 ), Include( 0 ) );
rs = dt << get row states;
df << Mode( Select( 1 ), Show( 1 ), Include( 0 ) );
rs = dt << get row states;
df << Mode( Select( 0 ), Show( 1 ), Include( 1 ) );
rs = dt << get row states;
```

**Code Explanation**:

1. Open data_table data
2. Create age filter.
3. Get initial row states.
4. Enable filter selection.
5. Get updated row states.
6. Disable filter selection.
7. Get updated row states.
8. Disable filter display.
9. Get updated row states.
10. Enable filter display.



### Example 41
> **Summary**: Filters data based on specific State and Region conditions, displaying the filtered results in a list format.

<!-- Keywords: #DataFiltering, #JSLScripting, #ConditionalLogic, #ListDisplay, #InteractiveFiltering -->

**Code**:
```jsl
dt = Open("data_table.jmp");
df = dt << Data Filter(
	Location( {673, 234} ),
	Add Filter(
		columns( :State, :Region ),
		Where( :State == {"AL", "AZ", "CA", "CO", "CT", "DC", "DE", "FL", "GA"} ),
		Where( :Region == {"MW", "N", "S"} ),
		Display( :State, Size( 204, 174 ), List Display )
	)
);
fr = df << Get Filtered Rows( 1 );
```

**Code Explanation**:

1. Open data table.
2. Create data filter.
3. Set filter location.
4. Add filter criteria.
5. Specify State column.
6. Define State conditions.
7. Specify Region column.
8. Define Region conditions.
9. Display State filter.
10. Retrieve filtered rows.



### Example 42
> **Summary**: Runs the filtering and animation of a data table based on Region and POP, generating a report with interactive buttons.

<!-- Keywords: #DataFilter, #Animation, #ButtonBox, #JMPScriptingLanguage, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
df = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
df << Columns( :Region );
df << Animation( Animate Column( :Region ), Bounce );
rep = df << report;
rep[Button Box( 5 )] << Click;
rep[Button Box( 7 )] << Click;
```

**Code Explanation**:

1. Open data table;
2. Create data filter.
3. Set filter criteria for Region.
4. Set filter criteria for POP.
5. Apply filter mode settings.
6. Select Region column for animation.
7. Animate Region column.
8. Generate filter report.
9. Click on button box 5.
10. Click on button box 7.



### Example 43
> **Summary**: Data filtering and reporting for a specific region, utilizing the Data Filter function to select relevant data and generate a report.

<!-- Keywords: #DataFilter, #ReportGeneration, #JSLScripting, #DataAnalysis, #Filtering -->

**Code**:
```jsl
dt = Open("data_table.jmp");
df = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
rep = df << report;
df << Close;
```

**Code Explanation**:

1. Open data table.
2. Create data filter object.
3. Add filter for Region and POP columns.
4. Set filter condition for Region.
5. Configure filter mode.
6. Generate filter report.
7. Close data filter window.



### Example 44
> **Summary**: Data filtering and matching operations to extract specific rows from a data table, utilizing the Data Filter and Match functions.

<!-- Keywords: #DataFilter, #MatchFunction, #JMPScriptingLanguage, #DataAnalysis, #FilteringOperations -->

**Code**:
```jsl
dt = Open("data_table.jmp");
df = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 1 ), Show( 0 ), Include( 0 ) )
);
df << Columns( :SO2, :CO, :State );
df << Match( Filter Columns( :SO2 ), Where( :SO2 > 0.08 ) );
```

**Code Explanation**:

1. Open data table.
2. Create data filter object.
3. Add filter for Region and POP columns.
4. Set filter mode to select.
5. Hide filter interface.
6. Exclude filtered rows.
7. Add SO2, CO, State to filter.
8. Match filter columns to SO2.
9. Apply condition: SO2 > 0.08.



### Example 45
> **Summary**: Runs the filtering and deletion process for a data table, selecting rows where Region is 'C' or 'N', and then deleting all filters.

<!-- Keywords: #DataFilter, #DeleteAll, #JSLScriptingLanguage, #JMP, #DataManipulation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
df = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
df << Delete All;
```

**Code Explanation**:

1. Open data table;
2. Create data filter.
3. Add filter for Region "C" and "N".
4. Set filter mode to select all.
5. Hide filter panel.
6. Include filtered rows.
7. Delete all filters.



### Example 46
> **Summary**: Data filtering and column deletion for a specific dataset, utilizing the Data Filter function to apply conditional criteria.

<!-- Keywords: #DataFilter, #ConditionalFiltering, #ColumnDeletion, #JSLScriptingLanguage, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
df = dt << Data Filter(
	Location( {1134, 297} ),
	Conditional,
	Add Filter(
		columns( :city, :State, :Region, :POP, :OZONE ),
		Where( :Region == {"MW", "N", "S"} ),
		Where( :State == {"AL", "CT", "DC", "DE", "FL", "GA"} ),
		Where( :city == {"ATLANTA", "HARTFORD", "JACKSONVILLE", "MIAMI", "MOBILE", "MONTGOMERY", "WASHINGTON"} ),
		Where( :POP >= 832.1 & :POP <= 3646 ),
		Where( :OZONE >= 0.12 & :OZONE <= 0.161 ),
		Display( :city, Size( 204, 174 ), List Display ),
		Display( :State, Size( 204, 174 ), List Display ),
		Display( :POP ),
		Display( :OZONE )
	)
);
df << Delete( {:city} );
df << Delete( {:state} );
df << Delete( {:ozone, :SO2} );
df << Delete( {:region} );
```

**Code Explanation**:

1. Open data table.
2. Create Data Filter object.
3. Set filter location.
4. Define conditional filtering.
5. Add filter criteria for Region.
6. Add filter criteria for State.
7. Add filter criteria for city.
8. Add filter criteria for POP range.
9. Add filter criteria for OZONE range.
10. Delete selected columns from filter.



### Example 47
> **Summary**: Filters and displays data based on population and state criteria, generating a report with checkbox displays.

<!-- Keywords: #DataFilter, #JSLScriptingLanguage, #ReportGeneration, #CheckboxDisplay, #Filtering -->

**Code**:
```jsl
dt = Open("data_table.jmp");
df = dt << Data Filter(
	Location( {678, 183} ),
	Add Filter( columns( :POP ), Where( :pop > 1000 ) ),
	Add Filter( columns( :State ), Where( :State == "AL" ) )
);
df << Display( :state, Check box Display );
dfrep = df << Report;
```

**Code Explanation**:

1. Open data table.
2. Create Data Filter object.
3. Set filter location.
4. Add population filter: POP > 1000.
5. Add state filter: State == "AL".
6. Display state filter as checkbox.
7. Generate filter report.



### Example 48
> **Summary**: Filters and subsets data based on specific conditions, including Region, State, city, and Lead range, to generate a matrix representation of the filtered data.

<!-- Keywords: #DataFilter, #ConditionalFilter, #MatrixRepresentation, #JSLScriptingLanguage, #SubsetOperation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
df = dt << Data Filter(
	Location( {730, 327} ),
	Conditional,
	Add Filter(
		columns( :city, :State, :Region, :Lead ),
		Where( :Region == "MW" ),
		Where( :State == {"KS", "MI", "MN"} ),
		Where( :city == {"DETROIT", "MINNEAPOLIS", "WICHITA"} ),
		Where( :Lead >= 0.0606 & :Lead <= 0.24 ),
		Display( :city, Size( 204, 174 ), List Display ),
		Display( :State, Size( 204, 174 ), List Display ),
		Display( :Lead )
	)
);
subdt = df << Show Subset;
subMat = subdt << get as matrix;
```

**Code Explanation**:

1. Open data table.
2. Create data filter object.
3. Set filter location.
4. Define conditional filter.
5. Add filter criteria for Region.
6. Add filter criteria for State.
7. Add filter criteria for city.
8. Add filter criteria for Lead range.
9. Display filtered city in list.
10. Display filtered State in list.
11. Display filtered Lead.
12. Show subset of filtered data.
13. Convert subset to matrix.



### Example 49
> **Summary**: Runs the filtering and matching process for BP 8W, BP 6M, and BP 12M columns in a data table.

<!-- Keywords: #DataFilter, #Match, #JSLScripting, #DataTableOperations, #ConditionalLogic -->

**Code**:
```jsl
dt = Open("data_table.jmp");
df = dt << Data Filter( Add Filter( columns( :BP 8W, :BP 6M ) ), Add Filter( columns( :BP 12M ) ) );
df << Match( Filter Columns( :BP 8W, :BP 6M ), Where( :BP 8W > 174.8 & :BP 8W < 184.2 ) );
df << Match( Filter Columns( :BP 12M ), Where( :BP 12M > 181.9 & :BP 12M < 192.1 ) );
```

**Code Explanation**:

1. Open data table;
2. Create Data Filter object.
3. Add first filter for BP 8W and BP 6M.
4. Add second filter for BP 12M.
5. Match BP 8W filter criteria.
6. Match BP 6M filter criteria.
7. Match BP 12M filter criteria.



### Example 50
> **Summary**: Filters and matches data in a JMP script, utilizing Data Filter and Match functions to narrow down the dataset based on specific conditions.

<!-- Keywords: #JMPScriptingLanguage, #DataFilter, #MatchFunction, #ConditionalLogic, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
df = dt << Data Filter(
	Location( {796, 211} ),
	Add Filter( columns( :State, :Region ), Display( :State, Size( 204, 174 ), List Display ) ),
	Add Filter( columns( :OZONE, :CO ), Display( :OZONE ), Display( :CO ) )
);
df << Match( Filter Columns( :ozone, :CO ), Where( :ozone > 0.10 & :ozone < 0.15 ) );
df << Match( Filter Columns( :State, :region ), Where( :state == {"AL", "NC", "FL"} ) );
df << Match( Filter Columns( :State, :region ), Where( :region == {"N", "CA"} ) );
```

**Code Explanation**:

1. Open data table;
2. Create data filter.
3. Set filter location.
4. Add filter for State and Region.
5. Add filter for OZONE and CO.
6. Match ozone levels between 0.10 and 0.15.
7. Match states AL, NC, FL.
8. Match regions N, CA.
9. Apply filters.
10. Display filtered data.



### Example 51
> **Summary**: Filters and selects rows in a data table based on specific conditions, including age, sex, height, and weight.

<!-- Keywords: #DataFilter, #JSLScriptingLanguage, #FilteringAndSelection, #DataTableManipulation, #ConditionalLogic -->

**Code**:
```jsl
dt = Open("data_table.jmp");
df = dt << Data Filter(
	Location( {219, 400} ),
	Add Filter(
		columns( :age, :sex, :height, :weight ),
		Where( :age == 14 ),
		Where( :sex == "F" ),
		Where( :height >= 55.8 & :height <= 70 ),
		Where( :weight >= 90.7 & :weight <= 172 )
	)
);
selRows1 = dt << Get Selected Rows;
df << Inverse( 1 );
selRows2 = dt << Get Selected Rows;
df << Inverse( 0 );
df << (Filter column( :age ) << Invert Selection);
selRows3 = dt << Get Selected Rows;
df << (Filter column( :sex ) << Invert Selection);
selRows4 = dt << Get Selected Rows;
df << (Filter column( :height ) << Invert Selection);
selRows5 = dt << Get Selected Rows;
df << (Filter column( :weight ) << Invert Selection);
selRows6 = dt << Get Selected Rows;
```

**Code Explanation**:

1. Open data table.
2. Create data filter.
3. Set filter location.
4. Add filter for age, sex, height, weight.
5. Filter where age equals 14.
6. Filter where sex equals "F".
7. Filter where height between 55.8 and 70.
8. Filter where weight between 90.7 and 172.
9. Get selected rows after initial filter.
10. Invert filter settings.
11. Get selected rows after inverting.
12. Invert age filter selection.
13. Get selected rows after inverting age.
14. Invert sex filter selection.
15. Get selected rows after inverting sex.
16. Invert height filter selection.
17. Get selected rows after inverting height.
18. Invert weight filter selection.
19. Get selected rows after inverting weight.



### Example 52
> **Summary**: Filters a data table to include only North, South, and West regions, extending the initial filter for further analysis.

<!-- Keywords: #DataFilter, #JSLScriptingLanguage, #RegionFilter, #DataTableManipulation, #FilterExtension -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Data Filter( Add( Filter Columns( :Region ), Where( :Region = {"N", "S"} ) ) );
obj << (Filter Column( :Region ) << Extend Where( :Region = "W" ));
```

**Code Explanation**:

1. Open data table;
2. Create data filter object.
3. Add Region filter column.
4. Set initial filter for North and South.
5. Extend filter to include West region.



### Example 53
> **Summary**: Data filtering and extraction by applying a filter to the 'Region' and 'POP' columns, then retrieving and processing the script from the Data Filter object.

<!-- Keywords: #DataFiltering, #JSLScripting, #ColumnSelection, #FilterMode, #ScriptExtraction -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
txt1 = obj << Get Script;
where1 = Char( Arg( Arg( Arg( txt1, 2 ), 3 ), 2 ) );
```

**Code Explanation**:

1. Open data table.
2. Create Data Filter object.
3. Add filter for Region and POP columns.
4. Set filter criteria: Region == {"C", "N"}.
5. Configure filter mode: Select, Show, Include.
6. Retrieve script from Data Filter object.
7. Extract second argument from script.
8. Extract third argument from nested structure.
9. Convert extracted argument to character string.
10. Assign result to where1 variable.



### Example 54
> **Summary**: Creates and manipulates data filters in JMP to analyze specific conditions, utilizing interactive features like Check Box Display and Local Data Filters.

<!-- Keywords: #JMPScriptingLanguage, #DataFilter, #InteractiveFiltering, #ConditionalAnalysis, #FilterManipulation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
df = dt << Data Filter(
	Location( {437, 50} ),
	Add Filter(
		columns( :Brush Delimited ),
		Match None( Where( :Brush Delimited == {"Before Sleep", "Wake"} ) ),
		Display( :Brush Delimited, Size( 121, 70 ), Check Box Display )
	)
);
df << Delete( :Brush Delimited );
text1 = df << get script;
If( Host is( windows ),
	Window( "Data Filter for data_table" ) << Close Window,
	repDF = df << report;
	repDf << Close Window;
);
df = dt << Data Filter(
	Location( {437, 50} ),
	Add Filter(
		columns( :Brush Delimited ),
		Match None( Where( :Brush Delimited == {"Before Sleep", "Wake"} ) ),
		Display( :Brush Delimited, Size( 121, 70 ), Check Box Display )
	)
);
df << Delete( {:Brush Delimited} );
text2 = df << Get script;
If( Host is( windows ),
	Window( "Data Filter for data_table" ) << Close Window,
	repDF = df << report;
	repDf << Close Window;
);
df2 = dt << Data Filter(
	Location( {437, 90} ),
	Add Filter(
		columns( :Brush Delimited, :Age in Years ),
		Match None( Where( :Brush Delimited == {"Before Sleep", "Wake"} ) ),
		Where( :Age in Years >= 33.3 & :Age in Years <= 74 ),
		Display( :Brush Delimited, Size( 117, 66 ), Check Box Display )
	)
);
df2 << Delete( :Brush Delimited );
```

**Code Explanation**:

1. Open data table;
2. Create data filter.
3. Set filter location.
4. Add filter column.
5. Match none where conditions.
6. Display filter settings.
7. Delete filter column.
8. Get filter script.
9. Check if host is Windows.
10. Close data filter window.
11. Repeat steps 2-10.
12. Create second data filter.
13. Set second filter location.
14. Add second filter columns.
15. Match none where conditions.
16. Apply age range condition.
17. Display second filter settings.
18. Delete second filter column.



### Example 55
> **Summary**: Creates a data filter object with multiple filtering criteria, including adding filters and configuring mode to select all rows.

<!-- Keywords: #JSLScriptingLanguage, #DataFilter, #AddFilter, #ModeSelect, #IncludeAllRows -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Data Filter( Add Filter(), Mode( Select( 0 ), Show( 0 ), Include( 1 ) ) );
obj = dt << Data Filter( Add Filter() );
```

**Code Explanation**:

1. Open data table.
2. Create data filter object.
3. Configure filter mode to select all.
4. Hide filter interface initially.
5. Include all rows in filter.
6. Add another filter to data table.



### Example 56
> **Summary**: Filtering and selection process for a specific column in a data table, utilizing Data Filter and Get Selected Rows functions.

<!-- Keywords: #DataFilter, #GetSelectedRows, #JSLScriptingLanguage, #JMP, #DataTable -->

**Code**:
```jsl
dt = Open("data_table.jmp");
df = dt << Data Filter(
	Location( {437, 194} ),
	Add Filter(
		columns( :Brush Delimited ),
		Match None( Where( :Brush Delimited == {"Before Sleep", "Wake"} ) ),
		Display( :Brush Delimited, Size( 121, 70 ), Check Box Display )
	)
);
selRows = dt << Get Selected Rows;
df << Inverse( 1 );
selRows2 = dt << Get Selected Rows;
df << Inverse( 0 );
selRows3 = dt << Get Selected Rows;
df << (filter column( :Brush Delimited ) << Invert Selection);
selRows4 = dt << Get Selected Rows;
```

**Code Explanation**:

1. Open data table.
2. Create data filter.
3. Set filter location.
4. Add filter for "Brush Delimited".
5. Exclude "Before Sleep" and "Wake".
6. Display filter with checkbox.
7. Get selected rows.
8. Invert filter selection.
9. Get selected rows again.
10. Invert filter selection again.
11. Invert selection of "Brush Delimited".
12. Get final selected rows.



### Example 57
> **Summary**: Filters and selects rows in a data table based on specific criteria, utilizing Data Filter and Add Filter functions.

<!-- Keywords: #JSLScripting, #DataFiltering, #RowSelection, #JMPScriptingLanguage, #DataTableManipulation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
df = dt << Data Filter(
	Location( {566, 71} ),
	Add Filter(
		columns( :Floss Delimited ),
		Match At Most( 1, Where( :Floss Delimited == {"After Meal", "Other", Is Missing( :Floss Delimited ), "Before Sleep", "Wake"} ) ),
		Display( :Floss Delimited, Size( 121, 87 ), Check Box Display )
	)
);
selRowsAtMost = dt << get selected rows;
stdSelRowsAtMost = dt << get rows where(
	:Floss delimited == "After Meal," | :Floss delimited == "Other" | :Floss delimited == "Before Sleep," | :Floss delimited == "Wake," |
	Is Missing( :Floss Delimited )
);
df << Delete( {:Floss Delimited} );
df << Add Filter(
	columns( :Floss Delimited ),
	Match At Most( 0, Where( :Floss Delimited == {"After Meal", "Before Sleep", "Other", "Wake"} ) ),
	Display( :Floss Delimited, Size( 121, 87 ), Check Box Display )
);
selRowsAtMost0 = dt << get selected rows;
stdSelRowsAtMost0 = dt << get rows where( Is Missing( :Floss Delimited ) );
df << Delete( {:Floss Delimited} );
df << Add Filter(
	columns( :Floss Delimited ),
	Match At Most( 5, Where( :Floss Delimited == {"After Meal", "Before Sleep", "Other", "Wake"} ) ),
	Display( :Floss Delimited, Size( 121, 87 ), Check Box Display )
);
selRowsAtMost5 = dt << get selected rows;
stdSelRowsAtMost5 = dt << get rows where(
	Contains( :Floss delimited, "After Meal" ) | Contains( :Floss delimited, "Other" ) | Contains( :Floss delimited, "Before Sleep" ) |
	Contains( :Floss delimited, "Wake" ) | Is Missing( :Floss Delimited )
);
df << Delete( {:Floss Delimited} );
df << Add Filter(
	columns( :Floss Delimited ),
	Match At Most( ., Where( :Floss Delimited == {"After Meal", "Before Sleep", "Other", "Wake"} ) ),
	Display( :Floss Delimited, Size( 121, 87 ), Check Box Display )
);
selRowsAtMostMiss = dt << get selected rows;
```

**Code Explanation**:

1. Open data table;
2. Create data filter.
3. Set filter location.
4. Add filter for Floss Delimited.
5. Select rows matching criteria.
6. Get standard selected rows.
7. Remove Floss Delimited from filter.
8. Add new filter for Floss Delimited.
9. Select rows matching criteria.
10. Get standard selected rows.



### Example 58
> **Summary**: Data filtering by adding a filter to the data table, selecting specific rows based on conditions.

<!-- Keywords: #DataFiltering, #JMPScriptingLanguage, #TableManipulation, #ConditionalLogic, #InteractiveAnalysis -->

**Code**:
```jsl
dt = Open( "$SAMPLE_DATA/data_table.jmp", invisible );
dt << Data Filter();
```

**Code Explanation**:

1. Open data table.
2. Make data table invisible.
3. Add data filter.



### Example 59
> **Summary**: Selects and filters data rows based on specific conditions in a JMP data table, utilizing Data Filter and Match functions.

<!-- Keywords: #JMPScriptingLanguage, #DataFilter, #MatchFunction, #DataTableManipulation, #ConditionalSelection -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Data Filter( Add Filter( columns( :BP 8W, :BP 6M ) ), Add Filter( columns( :BP 12M ) ) );
obj << Match( Filter Columns( :BP 8W, :BP 6M ), Where( :BP 8W > 174.8 & :BP 8W < 184.2 ) );
obj << Match( Filter Columns( :BP 12M ), Where( :BP 12M > 181.9 & :BP 12M < 192.1 ) );
obj << Mode( Select( 1 ) );
r = dt << Get Selected Rows();
cert r = [3, 4, 6, 7, 9, 10, 11, 12, 15, 16, 18, 19, 20];
```

**Code Explanation**:

1. Open data table;
2. Create data filter object.
3. Add filter for BP 8W and BP 6M.
4. Add filter for BP 12M.
5. Set match criteria for BP 8W.
6. Set match criteria for BP 12M.
7. Activate first filter mode.
8. Retrieve selected rows.
9. Define certified row list.



### Example 60
> **Summary**: Runs a series of data manipulation tasks, including filtering, column management, and table variable creation.

<!-- Keywords: #JSLScripting, #DataFiltering, #TableVariableManagement, #ColumnCreation, #DataUpdate -->

**Code**:
```jsl
dt = Open("data_table.jmp");
df = dt << Data Filter( Location( {632, 143} ), Add Filter( columns( :age ), Where( :age == 13 ) ), Mode( Include( 1 ), Select( 1 ) ) );
df << (filter column( :age ) << invert selection);
dt << Get Row States;
Close( dt, nosave );
dt = New Table( "Table Variable Problem" );
dt << New Table Variable( "Variable", . );
Close( dt, nosave );
dt1 = New Table( "Table 1" );
dt2 = New Table( "Table 2" );
c2 = Char( Current Data Table() );
dt1 << Bring Window To Front;
c1 = Char( Current Data Table() );
Close( dt2, nosave );
Close( dt1, nosave );
dt = New Table( "Distribution Timing" );
dt << begin data update;
dt << add rows( 2000 );
dt << begin data update;
For( i = 1, i <= 50, i++,
	c = dt << New Column( "Column" || Char( i ), numeric, formula( Random Normal() ) );
	c << eval formula;
);
dt << delete column( Column( 1 ) );
dt << end data update;
Close( dt, nosave );
dt = New Table( "Table Variable Problem" );
dt << New Table Variable( "Variable", . );
```

**Code Explanation**:

1. Open data table;
2. Create data filter.
3. Set filter for age 13.
4. Invert age filter selection.
5. Get row states.
6. Close "data_table.jmp".
7. Create new table "Table Variable Problem".
8. Add table variable.
9. Close "Table Variable Problem".
10. Create "Table 1" and "Table 2".
11. Get current data table name.
12. Bring "Table 1" to front.
13. Get current data table name again.
14. Close "Table 2".
15. Close "Table 1".
16. Create new table "Distribution Timing".
17. Begin data update.
18. Add 2000 rows.
19. Begin another data update.
20. Loop 50 times.
21. Create new columns with random normal data.
22. Evaluate formulas.
23. Delete first column.
24. End data update.
25. Close "Distribution Timing".
26. Create new table "Table Variable Problem".
27. Add table variable.



### Example 61
> **Summary**: Data filtering and row state retrieval by applying a filter to a specific location, adding an age filter with a condition, and inverting the selection.

<!-- Keywords: #JSLScriptingLanguage, #DataFiltering, #RowStateRetrieval, #JMP, #DataManipulation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
df = dt << Data Filter( Location( {632, 143} ), Add Filter( columns( :age ), Where( :age == 13 ) ), Mode( Include( 1 ), Select( 1 ) ) );
df << (filter column( :age ) << invert selection);
dt << Get Row States;
```

**Code Explanation**:

1. Open data table;
2. Create data filter.
3. Set filter location.
4. Add age filter.
5. Set filter condition.
6. Apply filter mode.
7. Invert age selection.
8. Retrieve row states.



### Example 62
> **Summary**: Data filtering by opening a data table, adding a filter with specific conditions, and setting preferences for the filter.

<!-- Keywords: #DataFiltering, #JSLScriptingLanguage, #JMP, #DataManagement, #FilteringConditions -->

**Code**:
```jsl
dt = Open("data_table.jmp");
df = dt << Data Filter( Add Filter( columns( :Name( "1972" ) ), Where( ::Name( "1972" ) > .53 & :Name( "1972" ) < .62 ), ) );
Close( dt, nosave );
Preferences( Data Filter Select Check( 1 ), Data Filter Show Check( 0 ), Data Filter Include Check( 1 ) );
```

**Code Explanation**:

1. Open table.
2. Add data filter.
3. Set filter conditions.
4. Close table without saving.
5. Set preferences for data filter.



### Example 63
> **Summary**: Data filtering and configuration settings in JMP, opening a data table, applying a filter with specific conditions, and closing the table without saving.

<!-- Keywords: #JMPScriptingLanguage, #DataFiltering, #TableConfiguration, #FilteringConditions, #ScriptAutomation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
df = dt << Data Filter( Add Filter( columns( :Name( "1972" ) ), Where( :Name( "1972" ) > .53 & :Name( "1972" ) < .62 ), ) );
Close( dt, nosave );
Preferences( Data Filter Select Check( 0 ), Data Filter Show Check( 1 ), Data Filter Include Check( 1 ) );
```

**Code Explanation**:

1. Open data table.
2. Apply data filter.
3. Close table without saving.
4. Set data filter select check off.
5. Set data filter show check on.
6. Set data filter include check on.



### Example 64
> **Summary**: Data filtering and preference settings for a specific column range in a JMP data table.

<!-- Keywords: #JMPScriptingLanguage, #DataFiltering, #Preferences, #ColumnRange, #DataTableManagement -->

**Code**:
```jsl
dt = Open("data_table.jmp");
df = dt << Data Filter( Add Filter( columns( :Name( "1972" ) ), Where( :Name( "1972" ) > .53 & :Name( "1972" ) < .62 ), ) );
Close( dt, nosave );
Preferences( Data Filter Select Check( 0 ), Data Filter Show Check( 0 ), Data Filter Include Check( 1 ) );
```

**Code Explanation**:

1. Open data table;
2. Create data filter.
3. Add filter on column "1972".
4. Set filter conditions.
5. Close table without saving.
6. Set preferences for data filter.
7. Disable select check.
8. Disable show check.
9. Enable include check.



### Example 65
> **Summary**: Filters and closes a data table, while also setting Excel label preferences.

<!-- Keywords: #JSLScriptingLanguage, #DataFiltering, #TableManagement, #ExcelIntegration, #Preferences -->

**Code**:
```jsl
dt = Open("data_table.jmp");
df = dt << Data Filter( Add Filter( columns( :Name( "1972" ) ), Where( :Name( "1972" ) > .53 & :Name( "1972" ) < .62 ), ) );
Close( dt, nosave );
final prefs = Get Preferences();
initial preferences = Get Preferences();
Preference( Excel Has Labels( 1 ), Use Excel Labels as Headings( 1 ) );
```

**Code Explanation**:

1. Open table.
2. Apply data filter.
3. Close table without saving.
4. Save initial preferences.
5. Save initial preferences again.
6. Set Excel label preference.



### Example 66
> **Summary**: Data filtering for the '1972' column in a JMP data table, applying conditions to select values between 0.53 and 0.62.

<!-- Keywords: #JMPScriptingLanguage, #DataFiltering, #ConditionalStatements, #JMPDataTables, #Filtering -->

**Code**:
```jsl
dt = Open("data_table.jmp");
df = dt << Data Filter( Add Filter( columns( :Name( "1972" ) ), Where( ::Name( "1972" ) > .53 & :Name( "1972" ) < .62 ), ) );
```

**Code Explanation**:

1. Open data table;
2. Create data filter.
3. Add filter for "1972" column.
4. Set filter condition: "1972" > 0.53.
5. Set filter condition: "1972" < 0.62.



### Example 67
> **Summary**: Data filtering by applying a conditional statement to select specific rows from the 'data_table.jmp' dataset, utilizing the Data Filter function.

<!-- Keywords: #DataFilter, #ConditionalStatement, #JSLScriptingLanguage, #DataManipulation, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
df = dt << Data Filter( Add Filter( columns( :Name( "1972" ) ), Where( :Name( "1972" ) > .53 & :Name( "1972" ) < .62 ), ) );
```

**Code Explanation**:

1. Open table.
2. Apply data filter.



## Data Filter using New Window
### Example 1
> **Summary**: Creates a local filter window in JMP, filtering data based on specific conditions for POP, SO2, and OZONE columns.

<!-- Keywords: #JMPScriptingLanguage, #DataFilter, #ConditionalFiltering, #LocalFiltering, #InteractiveDataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
w = New Window( "local filter",
	df = dt << Data Filter(
		Conditional,
		Local,
		Add Filter(
			columns( :POP, :OZONE, :SO2 ),
			Where( :POP >= 3497.5 & :POP <= 8529 ),
			Where( :SO2 >= 0.033 & :SO2 <= 0.083 ),
			Where( :OZONE >= 0.16 & :OZONE <= 0.21 )
		)
	)
);
(df << Get Filter Column( :OZONE )) << Where( :OZONE >= 0.17 & :OZONE <= 0.21 );
```

**Code Explanation**:

1. Open data table.
2. Create new window "local filter".
3. Add Data Filter to window.
4. Set filter type to Conditional.
5. Enable local filtering.
6. Add filter for POP column.
7. Set POP filter criteria.
8. Add filter for SO2 column.
9. Set SO2 filter criteria.
10. Modify OZONE filter criteria.



### Example 2
> **Summary**: Creates a custom window with data filtering and multiple script execution for bivariate and contingency analysis.

<!-- Keywords: #JSLScriptingLanguage, #DataFiltering, #BivariateAnalysis, #ContingencyTable, #CustomWindow -->

**Code**:
```jsl
dt = Open("data_table.jmp");
win = New Window( "filter",
	Data Filter Context Box(
		V List Box(
			Text Box( "Custom Window" ),
			H List Box(
				dt << Data Filter( Local, Add Filter( columns( :height ), Where( :height >= 58.577 & :height <= 70 ) ) ),
				H Splitter Box(
					Size( 1000, 500 ),
					Tab Page Box( "Bivariate", Scroll Box( Size( 500, 500 ), dt << Run Script( "Bivariate" ) ) ),
					Tab Page Box( "Contingency", Scroll Box( Size( 500, 500 ), dt << Run Script( "Contingency" ) ) ), 
				)
			)
		)
	)
);
win << Save Window Report( "$TEMP/customwindow.jrp", embed data( 0 ) );
win << Close Window;
```

**Code Explanation**:

1. Open data table;
2. Create new window "filter".
3. Add data filter context box.
4. Add vertical list box.
5. Add text box "Custom Window".
6. Add horizontal list box.
7. Apply height filter (58.577 to 70).
8. Add horizontal splitter box.
9. Add tab page "Bivariate" with scroll box.
10. Run Bivariate script.
11. Add tab page "Contingency" with scroll box.
12. Run Contingency script.
13. Save window report to "$TEMP/customwindow.jrp".
14. Close window.



### Example 3
> **Summary**: Creates a custom window with data filtering, bivariate and contingency analysis, and report saving.

<!-- Keywords: #JSLScriptingLanguage, #DataFiltering, #BivariateAnalysis, #ContingencyTable, #ReportSaving -->

**Code**:
```jsl
dt = Open("data_table.jmp");
win = New Window( "filter",
	Data Filter Context Box(
		V List Box(
			Text Box( "Custom Window" ),
			H List Box(
				dt << Data Filter( Local, Add Filter( columns( :height ), Where( :height >= 58.577 & :height <= 70 ) ) ),
				H Splitter Box(
					Size( 1000, 500 ),
					Tab Page Box(
						"Bivariate",
						Scroll Box(
							Size( 500, 500 ),
							dt << Run Script( "Bivariate" ),
							<<Set Stretch( "Window", "Window" ),
							<<Set Max Size( 1000, 1000 )
						)
					),
					Tab Page Box(
						"Contingency",
						Scroll Box( Size( 500, 500 ), dt << Run Script( "Contingency" ), <<Set Max Size( 1000, 1000 ) )
					), 
				)
			)
		)
	)
);
win << Save Window Report( "$TEMP/customwindow.jrp", embed data( 0 ) );
win << Close Window;
Open( "$TEMP/customwindow.jrp" );
```

**Code Explanation**:

1. Open data table;
2. Create new window titled "filter".
3. Add data filter context box.
4. Display "Custom Window" text.
5. Apply height filter (>=58.577 & <=70).
6. Create horizontal splitter box.
7. Add "Bivariate" tab page.
8. Run Bivariate script on dataset.
9. Add "Contingency" tab page.
10. Run Contingency script on dataset.
11. Save window report to temporary file.
12. Close the window.
13. Open saved window report.



## Data Filter using Function
> **Summary**: Creates a data filter for a specific range of values in a JMP data table, utilizing local filtering and conditional statements.

<!-- Keywords: #JMPScriptingLanguage, #DataFilter, #LocalFiltering, #ConditionalStatements, #JMPDataTable -->

**Code**:
```jsl
frameExtents = Function( {frame},
	{DefaultLocal},
	hist = frame << Find Seg( Hist Seg( 1 ) );
	jrn = hist << Get Journal;
	orig = Substr( jrn, Contains( jrn, "scaleOrig(" ) + 10 );
	orig = Num( Left( orig, Contains( orig, ")" ) - 1 ) );
	width = Substr( jrn, Contains( jrn, "scaleWidth(" ) + 11 );
	width = Num( Left( width, Contains( width, ")" ) - 1 ) );
	Eval List( {orig, orig + width} );
);
dt = Open("data_table.jmp");
w = New Window( "local filter",
	df = dt << Data Filter(
		Conditional,
		Local,
		Add Filter(
			columns( :POP, :OZONE, :SO2 ),
			Where( :POP >= 3497.5 & :POP <= 8529 ),
			Where( :SO2 >= 0.033 & :SO2 <= 0.083 ),
			Where( :OZONE >= 0.16 & :OZONE <= 0.21 )
		)
	)
);
(df << Get Filter Column( :OZONE )) << Where( :OZONE >= 0.17 & :OZONE <= 0.21 );
(df << Get Filter Column( :SO2 )) << Where( :SO2 >= 0.033 & :SO2 <= 0.05 );
```

**Code Explanation**:

1. Define `frameExtents` function.
2. Open data table.
3. Create new window "local filter".
4. Add Data Filter to data table.
5. Set filter conditions for POP, OZONE, SO2.
6. Modify OZONE filter condition.
7. Modify SO2 filter condition.



## Data Filter using Preferences
> **Summary**: Configures summary graph preferences and data filtering in JMP, allowing for customized visualization and analysis of data.

<!-- Keywords: #JMPScriptingLanguage, #SummaryGraphs, #DataFiltering, #Preferences, #JSL -->

**Code**:
```jsl
Names Default To Here( 1 );
c = 0.9;
Preferences(
	Show Summary Graphs Below Column Names( 1 ),
	Summary Graph Continuous Color( RGB Color( c, 0, 0 ) ),
	Summary Graph Continuous Missing Color( RGB Color( 0, 0, c ) ),
	Summary Graph Size Ordered Color( RGB Color( 0, c, 0 ) ),
	Summary Graph Name Ordered Color( RGB Color( 0, c, c ) ),
	Summary Graph Other Color( RGB Color( c, c, 0 ) )
);
Open("data_table.jmp");
For( i = 1, i < 50, i++,
	Row State( i ) = Selected State( 0 )
);
Current Data Table() << Data Filter(
	Location( {599, 196} ),
	Add Filter( columns( :Year, :Size ), Display( :Year, N Items( 5 ) ), Display( :Size, N Items( 8 ) ) )
);
```

**Code Explanation**:

1. Set default names scope.
2. Define color constant `c`.
3. Set preferences for summary graphs.
4. Open data table.
5. Loop through first 49 rows.
6. Unselect each row.
7. Apply data filter to current table.
8. Set filter location.
9. Add filter for columns "Year" and "Size".
10. Display filters with specified settings.



## Local Data Filter 
> **Summary**: Process of running a fit model script, adding local data filters, and sending reports with pin annotations to visualize the results.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #LocalDataFilter, #PinAnnotation, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << run script( "fit model" );
obj << Local Data Filter( Add Filter( columns( :RUN # ), Display( :RUN #, "Check Box Display", Find( Set Text( "" ) ) ) ) );
obj << SendToReport(
	Dispatch( {"Response MN ckt wx", "Whole Model", "Actual by Predicted Plot"}, "FitLS Leverage", FrameBox,
		Add Pin Annotation(
			Seg( Marker Seg( 1 ) ),
			Index( 7 ),
			Index Row( 7 ),
			UniqueID( 7 ),
			FoundPt( {380, 456} ),
			Origin( {1.3066617481203, 1.294024} ),
			RightOfCenter( 0 ),
			Tag Line( 1 )
		)
	),
	Dispatch( {"Response MN ckt wx", "Whole Model", "Residual by Predicted Plot"}, "FitLS Leverage", FrameBox,
		Add Pin Annotation(
			Seg( Marker Seg( 1 ) ),
			Index( 3 ),
			Index Row( 3 ),
			UniqueID( 3 ),
			FoundPt( {341, 520} ),
			Origin( {1.21653381410256, 0.0408873379629631} ),
			RightOfCenter( 0 ),
			Tag Line( 1 )
		)
	)
);
obj = dt << run script( "fit model" );
obj << Local Data Filter( Add Filter( columns( :PEB ), Where( :PEB >= 100 & :PEB <= 120 ) ) );
obj << SendToReport(
	Dispatch( {"Response MN ckt wx", "Whole Model", "Actual by Predicted Plot"}, "FitLS Leverage", FrameBox,
		Add Pin Annotation(
			Seg( Marker Seg( 1 ) ),
			Index( 7 ),
			Index Row( 7 ),
			UniqueID( 7 ),
			FoundPt( {380, 456} ),
			Origin( {1.3066617481203, 1.294024} ),
			RightOfCenter( 0 ),
			Tag Line( 1 )
		)
	),
	Dispatch( {"Response MN ckt wx", "Whole Model", "Residual by Predicted Plot"}, "FitLS Leverage", FrameBox,
		Add Pin Annotation(
			Seg( Marker Seg( 1 ) ),
			Index( 3 ),
			Index Row( 3 ),
			UniqueID( 3 ),
			FoundPt( {341, 520} ),
			Origin( {1.21653381410256, 0.0408873379629631} ),
			RightOfCenter( 0 ),
			Tag Line( 1 )
		)
	)
);
```

**Code Explanation**:

1. Open table.
2. Run fit model script.
3. Add local data filter.
4. Send report with pin annotations.
5. Run fit model script again.
6. Add local data filter with condition.
7. Send report with pin annotations.



## Data Filter using Column
### Example 1
> **Summary**: Data filtering and selection based on specific criteria, including missing values and nominal population categories.

<!-- Keywords: #JSLScriptingLanguage, #DataFiltering, #NominalColumns, #MissingValues, #DataSelection -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Column( "region" )[1] = "";
Column( "region" )[2] = "";
Column( "region" )[3] = "";
Column( "pop" )[1] = .;
Column( "pop" )[2] = .;
Column( "pop" )[3] = .;
Column( "POP" ) << modeling type( "Nominal" );
dt << New Column( "Rank", numeric, ordinal, Formula( Row() ) );
Column( "Rank" ) << Delete Formula;
Column( "rank" )[1] = .;
Column( "rank" )[2] = .;
Column( "rank" )[3] = .;
df = dt << Data Filter(
	Location( {360, 74} ),
	Add Filter(
		columns( :city, :OZONE, :SO2 ),
		Where(
			:city == {"ALBANY", "ALBUQUERQUE", "ATLANTA", "ATLANTIC CITY", "BALTIMORE", "BOSTON", "BURLINGTON", "CHARLESTON", "CHARLOTTE",
			"CHEYENNE", "CHICAGO", "CINCINNATI", "CLEVELAND", "DENVER"}
		),
		Where( :OZONE >= 0.096 & :OZONE <= 0.33 ),
		Where( :SO2 >= 0.001 & :SO2 <= 0.065 ),
		Display( :city, Size( 204, 259 ), List Display )
	),
	Add Filter( columns( :POP ), Where( Is Missing( :POP ) | :POP == 347 ), Display( :POP, Size( 204, 259 ), List Display ) ),
	Add Filter( columns( :Rank ), Where( Is Missing( :Rank ) | :Rank == 7 ), Display( :Rank, Size( 204, 259 ), List Display ) )
);
cert = dt << get selected rows;
gwc = df << get where clause;
df << Close;
dt << Clear Select;
Eval( Parse( "dt << " || gwc ) );
gsr = dt << Get Selected Rows;
```

**Code Explanation**:

1. Open data table.
2. Clear first three region entries.
3. Set first three population values to missing.
4. Change POP column to nominal.
5. Create new "Rank" column.
6. Remove formula from "Rank" column.
7. Set first three rank values to missing.
8. Create data filter with specified criteria.
9. Get selected rows from data table.
10. Get where clause from data filter.
11. Close data filter.
12. Clear selection in data table.
13. Apply where clause to data table.
14. Get selected rows from data table.



### Example 2
> **Summary**: Data filtering and ranking operations on a JMP data table, utilizing various column and formula manipulation techniques.

<!-- Keywords: #JMPScriptingLanguage, #DataFiltering, #Ranking, #ColumnManipulation, #FormulaAutomation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Column( "region" )[1] = "";
Column( "region" )[2] = "";
Column( "region" )[3] = "";
Column( "pop" )[1] = .;
Column( "pop" )[2] = .;
Column( "pop" )[3] = .;
Column( "POP" ) << modeling type( "Nominal" );
dt << New Column( "Rank", numeric, ordinal, Formula( Row() ) );
dt << RunFormulas;
Column( "Rank" ) << Delete Formula;
Column( "rank" )[1] = .;
Column( "rank" )[2] = .;
Column( "rank" )[3] = .;
df = dt << Data Filter(
	Location( {360, 74} ),
	Add Filter(
		columns( :city, :OZONE, :SO2 ),
		Where(
			:city == {"ALBANY", "ALBUQUERQUE", "ATLANTA", "ATLANTIC CITY", "BALTIMORE", "BOSTON", "BURLINGTON", "CHARLESTON", "CHARLOTTE",
			"CHEYENNE", "CHICAGO", "CINCINNATI", "CLEVELAND", "DENVER"}
		),
		Where( :OZONE >= 0.096 & :OZONE <= 0.33 ),
		Where( :SO2 >= 0.001 & :SO2 <= 0.065 ),
		Display( :city, Size( 204, 259 ), List Display )
	),
	Add Filter( columns( :POP ), Where( Is Missing( :POP ) | :POP == 347 ), Display( :POP, Size( 204, 259 ), List Display ) ),
	Add Filter( columns( :Rank ), Where( Is Missing( :Rank ) | :Rank == 7 ), Display( :Rank, Size( 204, 259 ), List Display ) )
);
fave = df << Add Favorites( "Selected Rows" );
df << Clear;
df << Apply Favorites( "Selected Rows" );
df << Delete All;
df << Apply Favorites( "Selected Rows" );
df << Save script to data table;
df << Remove Favorites( "Selected Rows" );
skript = dt << Get Property( "Data Filter" );
```

**Code Explanation**:

1. Open data table.
2. Clear first three region values.
3. Set first three population values to missing.
4. Change POP column type to nominal.
5. Create new "Rank" column with row numbers.
6. Run formulas in data table.
7. Delete formula from "Rank" column.
8. Set first three rank values to missing.
9. Create data filter with specified conditions.
10. Add favorites for selected rows.
11. Clear data filter.
12. Apply favorites to data filter.
13. Delete all rows in data filter.
14. Apply favorites again.
15. Save script to data table.
16. Remove favorites from data filter.
17. Retrieve data filter script.



### Example 3
> **Summary**: Filters and manipulates data in a JMP table, setting city values to empty, creating a data filter with specific criteria, and applying favorites.

<!-- Keywords: #JMPScriptingLanguage, #DataFiltering, #FavoriteFilters, #DataManipulation, #JMPTable -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Column( dt, "city" )[9] = "";
Column( dt, "city" )[10] = "";
Column( dt, "city" )[11] = "";
Column( dt, "city" )[12] = "";
df = dt << Data Filter(
	Location( {1107, 173} ),
	Add Filter(
		columns( :city, :OZONE ),
		Where(
			:city == {"", "ALBUQUERQUE", "ATLANTIC CITY", "BOSTON", "CHARLESTON", "DENVER", "DETROIT", "GALVESTON-T.C.", "HARTFORD",
			"HUNTINGTON", "JACKSON", "LOS ANGELES", "MADISON", "MILWAUKEE", "MOBILE", "NASHVILLE", "NEW YORK", "OKLAHOMA CITY",
			"PHILADELPHIA", "PORTLAND", "SALT LAKE CITY", "SEATTLE", "ST. LOUIS", "WICHITA"}
		),
		Where( :OZONE >= 0.095 & :OZONE <= 0.281 ),
		Display( :city, Size( 204, 174 ), List Display )
	)
);
df << Inverse( 1 );
wc2 = df << Add Favorites( "Inverse Original" );
df << Clear;
df << Apply Favorites( "Inverse Original" );
filterRows = df << Get Filtered Rows;
df << (filter column( :OZONE ) << Invert Selection);
df << (filter column( :city ) << Invert Selection);
```

**Code Explanation**:

1. Open table.
2. Set city values to empty.
3. Create data filter.
4. Add filter criteria.
5. Set filter location.
6. Invert filter.
7. Add favorite filter.
8. Clear current filter.
9. Apply favorite filter.
10. Get filtered rows.



## Data Filter using Run script
> **Summary**: Creates a treemap visualization using Graph Builder, filtering data based on specific conditions and deleting unnecessary columns.

<!-- Keywords: #JMPScriptingLanguage, #GraphBuilder, #TreemapVisualization, #DataFiltering, #ColumnDeletion -->

**Code**:
```jsl
dt = Open("data_table.jmp");
tm = dt << Run script( "Graph Builder Treemap" );
ldf = tm << Local Data Filter(
	Location( {673, 257} ),
	Conditional,
	Mode( Select( 0 ), Show( 1 ), Include( 1 ) ),
	Add Filter(
		columns( :city, :State, :Region, :OZONE ),
		Display( :city, Size( 204, 174 ), List Display ),
		Display( :State, Size( 204, 174 ), List Display ),
		Display( :OZONE )
	)
);
ldf << (Filter Column( :region ) << Where( :region == "N" ));
ldf << (Filter Column( :state ) << Where( :age == {"NY", "PA"} ));
ldf << (Filter Column( :city ) << Where( :city == {"ALBANY", "HARRISBURG"} ));
ldf << (Filter Column( :OZONE ) << Where( :OZONE > 0.131 ));
ldf << Delete( {:city} );
rep4 = ldf << report;
```

**Code Explanation**:

1. Open data table;
2. Run Graph Builder Treemap script.
3. Create local data filter.
4. Set filter location and mode.
5. Add filter for specified columns.
6. Filter region where region is "N".
7. Filter state where state is "NY" or "PA".
8. Filter city where city is "ALBANY" or "HARRISBURG".
9. Filter OZONE where OZONE is greater than 0.131.
10. Delete city column from filter.



## Data Filter using Run Script
### Example 1
> **Summary**: Creates and applies a local data filter to select specific values in the 'Floss Delimited' column, utilizing interactive features like check boxes and favorites.

<!-- Keywords: #JSLScriptingLanguage, #LocalDataFilter, #Favorites, #Checkboxes, #InteractiveFeatures -->

**Code**:
```jsl
dt = Open("data_table.jmp");
cat = dt << Run Script( "Categorical Several" );
ldf = cat << Local Data Filter(
	Mode( Select( 0 ), Show( 1 ), Include( 1 ) ),
	Add Filter(
		columns( :Floss Delimited, :Floss Delimited ),
		Match Any( Where( :Floss Delimited == "After Meal" ) ),
		Match Any( Where( :Floss Delimited == "Before Sleep" ) ),
		Display( :Floss Delimited, Size( 121, 87 ), Check Box Display ),
		Display( :Floss Delimited, Size( 121, 87 ), Check Box Display )
	)
);
ldf << Add Favorites( "Two of the Same" );
ldf << Delete All;
ldf << Apply Favorites( "Two of the Same" );
where1 = Words( ldf << Get Where clause, "\!r\!n\!N" );
```

**Code Explanation**:

1. Open data table;
2. Run "Categorical Several" script.
3. Create local data filter.
4. Set filter mode to select, show, include.
5. Add filter for "Floss Delimited".
6. Match "After Meal" and "Before Sleep".
7. Display filter with check boxes.
8. Add favorites named "Two of the Same".
9. Delete all filters.
10. Apply favorites "Two of the Same".



### Example 2
> **Summary**: Data filtering and reporting for a JMP data table, setting sex value labels and age value labels, and retrieving filtered results based on host OS.

<!-- Keywords: #JSLScriptingLanguage, #DataFiltering, #ReportGeneration, #OSDependentLogic, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Run Script( "Set Sex Value Labels" );
dt << Run Script( "Set Age Value Labels" );
df = dt << Data Filter(
	Location( {310, 310} ),
	Add Filter(
		columns( :age, :sex ),
		Where( :sex == "F" ),
		Where( :age == 15 ),
		Display( :age, Size( 204, 72 ), List Display ),
		Display( :sex, Check Box Display )
	)
);
If( Host is( windows ),
	ageList = Window( "Data Filter for data_table" )[listboxbox( 1 )] << get items,
	dfrep = df << Report;
	ageList = dfrep[listboxbox( 1 )] << get items;
);
If( Host is( windows ),
	genderList = Window( "Data Filter for data_table" )[Number Col Box( 1 )] << get text,
	dfrep = df << Report;
	genderList = dfrep[Number Col Box( 1 )] << get text;
);
```

**Code Explanation**:

1. Open data table.
2. Run script to set sex labels.
3. Run script to set age labels.
4. Create data filter.
5. Set filter location.
6. Add filter for age and sex.
7. Apply filter conditions.
8. Display age in list box.
9. Display sex in check box.
10. Retrieve age list based on host OS.
11. Retrieve gender list based on host OS.



### Example 3
> **Summary**: Runs a contingency analysis on a filtered data table, generating a report with specified settings.

<!-- Keywords: #JSLScriptingLanguage, #ContingencyAnalysis, #DataFiltering, #ReportGeneration, #PathDiagramProperties -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Run Script( "Contingency" );
obj << Local Data Filter(
	Location( {0, 0} ),
	Add Filter( columns( :sex ), Where( :sex == "F" ) ),
	Mode( Select( 0 ), Show( 1 ), Include( 1 ) )
);
obj << Automatic Recalc( 0 );
dt << Select Where( :age == 12 );
dt << Exclude();
rpt = obj << Report;
```

**Code Explanation**:

1. Open data table.
2. Run contingency analysis.
3. Add local data filter.
4. Set filter location.
5. Filter by sex female.
6. Configure filter mode.
7. Disable automatic recalculation.
8. Select rows where age is 12.
9. Exclude selected rows.
10. Generate report.



### Example 4
> **Summary**: Generates a contingency report by filtering data for female sex and age 12, then excludes selected rows and generates a report.

<!-- Keywords: #JSLScriptingLanguage, #ContingencyReport, #DataFiltering, #LocalDataFilter, #PathDiagram -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Run Script( "Contingency" );
obj << Local Data Filter(
	Location( {0, 0} ),
	Add Filter( columns( :sex ), Where( :sex == "F" ) ),
	Mode( Select( 0 ), Show( 1 ), Include( 1 ) )
);
dt << Select Where( :age == 12 );
dt << Exclude();
rpt = obj << Report;
Close( dt, NoSave );
dt = Open("data_table.jmp");
obj = dt << Run Script( "Contingency" );
obj << Local Data Filter(
	Location( {0, 0} ),
	Add Filter( columns( :sex ), Where( :sex == "F" ) ),
	Mode( Select( 0 ), Show( 1 ), Include( 1 ) )
);
obj << Automatic Recalc( 0 );
dt << Select Where( :age == 12 );
dt << Exclude();
rpt = obj << Report;
```

**Code Explanation**:

1. Open data table;
2. Run Contingency script.
3. Add local data filter.
4. Filter for female sex.
5. Select age 12 rows.
6. Exclude selected rows.
7. Generate report.
8. Close dataset without saving.
9. Reopen data_table dataset
10. Run Contingency script again.



### Example 5
> **Summary**: Data filtering and visualization by running a script, creating local data filters, and customizing display settings for specific variables.

<!-- Keywords: #JSLScriptingLanguage, #DataFiltering, #Visualization, #LocalDataFilter, #CustomDisplaySettings -->

**Code**:
```jsl
dt2 = Open("data_table.jmp");
Cate = dt2 << Run Script( "Brushing Delimited by Age" );
ldf1 = Cate << Local Data Filter(
	Show Histograms and Bars( 0 ),
	Add Filter( columns( :Age Group ), Where( :Age Group == {1, 2} ), Display( :Age Group, Size( 160, 119 ) ) )
);
Cate << Close window;
Preferences( Data filter histograms and bars( 1 ) );
Cate2 = dt2 << Run Script( "Brushing Delimited by Age" );
ldf2 = Cate2 << Local Data Filter(
	Add Filter( columns( :Employee Tenure ), Where( :Employee Tenure == 1 ), Display( :Employee Tenure, Size( 160, 68 ) ) )
);
```

**Code Explanation**:

1. Open data table;
2. Run "Brushing Delimited by Age" script.
3. Create local data filter.
4. Hide histograms and bars.
5. Filter by Age Group 1 and 2.
6. Set display size for Age Group.
7. Close the window.
8. Enable data filter histograms and bars.
9. Run "Brushing Delimited by Age" script again.
10. Create local data filter for Employee Tenure.



## Data Filter using If
### Example 1
> **Summary**: Data filtering and window sizing on a JMP dataset, utilizing the Data Filter feature to create a filtered view of the data.

<!-- Keywords: #JMPScriptingLanguage, #DataFiltering, #WindowManagement, #InteractiveAnalysis, #Windows -->

**Code**:
```jsl
If( Host is( windows ),
	dt = Open("data_table.jmp");
	df = dt << Data Filter( Add Filter( columns( :age, :sex ) ), show window( 0 ) );
	ws = Window( "Data Filter for data_table" ) << get window size();
	df << Show Window( 1 );
	{x, y} = Window( "Data Filter for data_table" ) << get window size();
	If( x > 200 & y > 200,
		ws = 1,
		ws = 0
	);
	Close( dt, no save );
);
```

**Code Explanation**:

1. Check if host is Windows.
2. Open data table;
3. Create data filter on age and sex.
4. Hide data filter window.
5. Get initial window size.
6. Show data filter window.
7. Get updated window size.
8. Compare window sizes.
9. Set ws variable based on comparison.
10. Close dataset without saving.



### Example 2
> **Summary**: Data filtering and selection for a JMP data table, utilizing the Data Filter feature to filter by age and sex, and updating a checkbox box accordingly.

<!-- Keywords: #JMPScriptingLanguage, #DataFilter, #CheckboxBox, #Windows, #JSLAutomation -->

**Code**:
```jsl
If( Host is( windows ),
	dt = Open("data_table.jmp");
	df = dt << Data Filter( Add Filter( columns( :age, :sex ) ) );
	df << set select( 0 );
	selectBox = Window( "Data Filter for data_table" )[checkboxbox( 1 )] << Get( 1 );
	df << set select( 1 );
	selectBox = Window( "Data Filter for data_table" )[checkboxbox( 1 )] << Get( 1 );
	Close( dt, no save );
);
```

**Code Explanation**:

1. Check if host is Windows.
2. Open data table.
3. Add data filter for age and sex.
4. Deselect all filters initially.
5. Get reference to checkbox box.
6. Select all filters.
7. Update checkbox box status.
8. Deselect all filters again.
9. Update checkbox box status.
10. Close data table without saving.



### Example 3
> **Summary**: Data filtering and checkbox object manipulation for a JMP dataset, utilizing the Data Filter feature to filter by age and sex.

<!-- Keywords: #JMPScripting, #DataFilter, #CheckboxObject, #Windows, #JSLAutomation -->

**Code**:
```jsl
If( Host is( windows ),
	dt = Open("data_table.jmp");
	df = dt << Data Filter( Add Filter( columns( :age, :sex ) ) );
	df << set show( 1 );
	selectBox = Window( "Data Filter for data_table" )[checkboxbox( 2 )] << Get( 1 );
	df << set show( 0 );
	selectBox = Window( "Data Filter for data_table" )[checkboxbox( 2 )] << Get( 1 );
	Close( dt, no save );
);
```

**Code Explanation**:

1. Check if host is Windows.
2. Open data table;
3. Create data filter for age and sex.
4. Show data filter window.
5. Get checkbox box object.
6. Hide data filter window.
7. Get checkbox box object again.
8. Close dataset without saving.



### Example 4
> **Summary**: Data filtering and selection for a JMP data table on Windows, utilizing the Data Filter feature to interactively manage rows.

<!-- Keywords: #JMPScriptingLanguage, #DataFilter, #Windows, #InteractiveAnalysis, #JSLCode -->

**Code**:
```jsl
If( Host is( windows ),
	dt = Open("data_table.jmp");
	df = dt << Data Filter( Add Filter( columns( :age, :sex ) ) );
	df << set include( 1 );
	selectBox = Window( "Data Filter for data_table" )[checkboxbox( 3 )] << Get( 1 );
	df << set include( 0 );
	selectBox = Window( "Data Filter for data_table" )[checkboxbox( 3 )] << Get( 1 );
	Close( dt, no save );
);
```

**Code Explanation**:

1. Check if host is Windows.
2. Open data table.
3. Add data filter for age and sex.
4. Set filter to include all rows.
5. Get selected items from checkbox box.
6. Set filter to exclude all rows.
7. Get selected items from checkbox box again.
8. Close data table without saving.



## Data Filter using Select Where
> **Summary**: Filters and displays data for specific conditions in a JMP data table, utilizing Data Filter and Hide and Exclude operations.

<!-- Keywords: #JMPDataFilter, #HideAndExclude, #DataTableOperations, #ConditionalFiltering, #InteractiveVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Select Where( :Gender == 1 );
dt << Hide and Exclude;
df = dt << Data Filter(
	Location( {538, 43} ),
	Save and restore current row states( 1 ),
	Add Filter(
		columns( :Brush Delimited, :Floss Delimited ),
		Match Any( Where( :Brush Delimited == "Before Sleep" ) ),
		Match Any( Where( :Floss Delimited == "Before Sleep" ) ),
		Display( :Brush Delimited, Size( 121, 70 ), Check Box Display ),
		Display( :Floss Delimited, Size( 121, 87 ), Check Box Display )
	),
	Mode( Show( 1 ), Include( 1 ) )
);
df << Close;
```

**Code Explanation**:

1. Open data table;
2. Select rows where Gender == 1.
3. Hide and exclude selected rows.
4. Create data filter.
5. Set filter location.
6. Save and restore row states.
7. Add filter for Brush Delimited.
8. Add filter for Floss Delimited.
9. Set display for Brush Delimited.
10. Set display for Floss Delimited.



## Data Filter using Chart
### Example 1
> **Summary**: Creates a bar chart to visualize mean age distribution by sex, with interactive filtering and formatting options.

<!-- Keywords: #JMPScriptingLanguage, #BarChart, #DataFiltering, #InteractiveVisualization, #StatisticalAnalysis -->

**Code**:
```jsl
Open("data_table.jmp");
obj = Chart(
	X( :sex ),
	Y( Mean( :age ) ),
	Overlay Axis << {{Format( "Fixed Dec", 12, 0 ), Min( 0 ), Max( 55 ), Inc( 10 ), Minor Ticks( 1 )}},
	Overlay Stack Axis << {{Format( "Fixed Dec", 12, 0 ), Min( 0 ), Max( 120 ), Inc( 20 ), Minor Ticks( 1 )}},
	Bar Chart( 1 ),
	Local Data Filter( Add Filter( columns( :age ), Where( :age >= 40.6 & :age <= 60 ) ) )
);
rpt = obj << Report;
expr = rpt << Get Journal;
p = ":age >= 40.6";
ans = Pat Match( expr, p );
```

**Code Explanation**:

1. Open data table.
2. Create chart object.
3. Set X-axis to sex.
4. Set Y-axis to mean age.
5. Format overlay axis.
6. Format overlay stack axis.
7. Add bar chart.
8. Apply local data filter.
9. Generate report.
10. Extract journal expression.
11. Define pattern.
12. Find pattern match.



### Example 2
> **Summary**: Creates a bar chart to visualize age distribution by sex, with interactive filtering and formatting options.

<!-- Keywords: #JMPScriptingLanguage, #BarChart, #DataFiltering, #InteractiveVisualization, #ChartFormatting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Chart(
	X( :sex ),
	Y( Mean( :age ) ),
	Overlay Axis << {{Format( "Fixed Dec", 12, 0 ), Min( 0 ), Max( 55 ), Inc( 10 ), Minor Ticks( 1 )}},
	Overlay Stack Axis << {{Format( "Fixed Dec", 12, 0 ), Min( 0 ), Max( 120 ), Inc( 20 ), Minor Ticks( 1 )}},
	Bar Chart( 1 ),
	Local Data Filter( Add Filter( columns( :age ), Where( :age >= 40.6 & :age <= 60 ) ) )
);
rpt = obj << Report;
expr = rpt << Get Journal;
p = ":age >= 40.6";
ans = Pat Match( expr, p );
```

**Code Explanation**:

1. Open table.
2. Create chart object.
3. Set X-axis variable.
4. Set Y-axis variable.
5. Format overlay axis.
6. Format overlay stack axis.
7. Add bar chart.
8. Apply local data filter.
9. Generate report.
10. Extract journal expression.



## Data Filter using Tree Map
### Example 1
> **Summary**: Creates a tree map report from a data table, filtering by country and type, and excluding selected rows.

<!-- Keywords: #JSLScriptingLanguage, #TreeMap, #DataFiltering, #ReportGeneration, #InteractiveVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Tree Map(
	Categories( :country, :marital status ),
	Coloring( :country ),
	Local Data Filter( Add Filter( columns( :country ), Where( :country == "American" ) ), Mode( Select( 0 ), Show( 1 ), Include( 1 ) ) ), 
);
obj << Automatic Recalc( 0 );
dt << Select Where( :type == "Family" );
dt << Exclude();
rpt = Report( obj );
```

**Code Explanation**:

1. Open data table.
2. Create tree map object.
3. Set categories and coloring.
4. Add local data filter.
5. Configure filter mode.
6. Disable automatic recalculation.
7. Select rows by type.
8. Exclude selected rows.
9. Generate report from tree map.



### Example 2
> **Summary**: Creates and customizes a Tree Map object to visualize data, applying filters and recalculation settings, and generates reports from the filtered data.

<!-- Keywords: #JSLScriptingLanguage, #TreeMapVisualization, #DataFiltering, #AutomaticRecalculation, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Tree Map(
	Categories( :country, :marital status ),
	Coloring( :country ),
	Local Data Filter( Add Filter( columns( :country ), Where( :country == "American" ) ), Mode( Select( 0 ), Show( 1 ), Include( 1 ) ) ), 
);
obj << Automatic Recalc( 1 );
dt << Select Where( :type == "Family" );
dt << Exclude();
rpt = Report( obj );
Close( dt, NoSave );
dt = Open("data_table.jmp");
obj = Tree Map(
	Categories( :country, :marital status ),
	Coloring( :country ),
	Local Data Filter( Add Filter( columns( :country ), Where( :country == "American" ) ), Mode( Select( 0 ), Show( 1 ), Include( 1 ) ) ), 
);
obj << Automatic Recalc( 0 );
dt << Select Where( :type == "Family" );
dt << Exclude();
rpt = Report( obj );
```

**Code Explanation**:

1. Open data_table data
2. Create Tree Map object.
3. Set categories and coloring.
4. Add local data filter for country.
5. Enable automatic recalculation.
6. Select rows where type is Family.
7. Exclude selected rows.
8. Generate report from Tree Map.
9. Close data table without saving.
10. Reopen data_table data.
11. Create Tree Map object again.
12. Set categories and coloring.
13. Add local data filter for country.
14. Disable automatic recalculation.
15. Select rows where type is Family.
16. Exclude selected rows.
17. Generate report from Tree Map.



## Data Filter using Auto Clear
> **Summary**: Data filtering and selection for a specific dataset, utilizing various filter conditions to narrow down the data based on age, sex, and height.

<!-- Keywords: #JMPScriptingLanguage, #DataFiltering, #ConditionalStatements, #DataTableOperations, #Filtering -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = (Current Data Table() << data filter( show window( 0 ) ));
obj << Auto Clear( 1 );
obj << add filter( columns( :age, :sex, :height ) );
obj << (filter column( :age ) << Where( :age = {12, 13} ));
obj << (filter column( :age ) << invert selection);
obj << (filter column( :sex ) << Where( :sex = {"M"} ));
obj << (filter column( :height ) << Where( (:height < 58) | (:height > 65) ));
obj << Auto Clear( 0 );
```

**Code Explanation**:

1. Open data table;
2. Create data filter object.
3. Disable auto clear.
4. Add filter for age, sex, height.
5. Filter age 12 and 13.
6. Invert age selection.
7. Filter sex male.
8. Filter height less than 58 or greater than 65.
9. Enable auto clear.



## Data Filter using Where
> **Summary**: Data filtering and column selection for a specific dataset, targeting males with age 12.

<!-- Keywords: #DataFiltering, #ColumnSelection, #JMPScriptingLanguage, #DataAnalysis, #FilteringCriteria -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = (dt << data filter());
obj << add filter columns( :sex, :age );
obj << (filter column( :sex ) << Where( :sex == "M" ));
obj << autoclear( 0 );
obj << (filter column( :age ) << Where( :age == 12 ));
```

**Code Explanation**:

1. Open data table.
2. Create data filter object.
3. Add filter columns: sex, age.
4. Filter sex for males.
5. Disable auto-clear filter.
6. Filter age for 12 years old.



