# Treemap

### Example 1
> **Summary**: Visualizes a treemap representation of data by State, colored by 2004 Verbal scores and sized by % Taking (2004), using the Open data table feature in JMP.

<!-- Keywords: #JMPScriptingLanguage, #TreemapVisualization, #DataTable, #Coloring, #Sizes -->

**Code**:
```jsl
// Treemap
// Open data table
dt = Open("data_table.jmp");
// Treemap
Treemap(
	Categories( :State ),
	Coloring( :"2004 Verbal"n ),
	Sizes( :"% Taking (2004)"n ),
	Ordering( :X, :Y )
);
```

**Code Explanation**:

1. Open data table;
2. Create treemap visualization.
3. Set categories by State.
4. Color by 2004 Verbal scores.
5. Size by % Taking (2004).
6. Order by X and Y.



### Example 2
> **Summary**: Vizualizes electoral data by state, using Treemap to display Winner, Electors, and Mean(X) and Mean(Y) values, with a JMP Default color theme.

<!-- Keywords: #JSL, #Treemap, #DataVisualization, #ElectoralData, #JMP -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Treemap(
	Categories( :State ),
	Coloring( :Winner ),
	Sizes( :Electors ),
	Ordering( :Name( "Mean(X)" ), :Name( "Mean(Y)" ) ),
	Color Theme( "JMP Default" )
);
```

**Code Explanation**:

1. Open data_table data
2. Create Treemap object.
3. Set categories to State.
4. Color by Winner.
5. Size by Electors.
6. Order by Mean(X).
7. Order by Mean(Y).
8. Use JMP Default color theme.



### Example 3
> **Summary**: Creates a treemap visualization to display data by State, colored by 2004 Verbal and sized by % Taking (2004), with ordering based on X and Y.

<!-- Keywords: #Treemap, #JMPScriptingLanguage, #DataVisualization, #State-BasedAnalysis, #CustomizedVisualization -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Treemap( Categories( :State ), Coloring( :Name( "2004 Verbal" ) ), Sizes( :Name( "% Taking (2004)" ) ), Ordering( :X, :Y ) );
```

**Code Explanation**:

1. Open table.
2. Create treemap object.
3. Set categories to State.
4. Color by 2004 Verbal.
5. Size by % Taking (2004).
6. Order by X and Y.



### Example 4
> **Summary**: Creates a treemap visualization to display city-level data, colored by ozone levels and sized by population.

<!-- Keywords: #TreemapVisualization, #JSLScriptingLanguage, #DataVisualization, #OzoneLevels, #Population -->

**Code**:
```jsl
Open("data_table.jmp");
Treemap( Categories( :city ), Coloring( :OZONE ), Sizes( :POP ) );
```

**Code Explanation**:

1. Open data table;
2. Create treemap visualization.
3. Set categories to city.
4. Color by ozone levels.
5. Size by population.



### Example 5
> **Summary**: Creates and analyzes a treemap visualization to explore city-level data, setting missing value codes and generating a report with journal extraction.

<!-- Keywords: #Treemap, #DataVisualization, #JSLScripting, #MissingValueHandling, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Treemap( Categories( :city ), Coloring( :OZONE ), Sizes( :POP ) );
:city << Set Property( "Missing Value Codes", "ALBANY" );
obj2 = obj << Redo Analysis;
rpt = obj2 << Report;
expr = rpt << Get Journal;
p = "ALBANY";
ans = Pat Match( expr, p );
```

**Code Explanation**:

1. Open data table;
2. Create treemap object.
3. Set missing value code for city.
4. Redo analysis with updated settings.
5. Generate report from analysis.
6. Extract journal from report.
7. Define pattern to search for.
8. Search for pattern in journal.
9. Store search result in ans variable.



### Example 6
> **Summary**: Creates a Treemap visualization to analyze data by city, state, and region, utilizing transformed columns for coloring, sizing, and ordering.

<!-- Keywords: #JSLScriptingLanguage, #TreemapVisualization, #DataTransformation, #ColumnFormulae, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Treemap(
	Categories( Transform Column( "Concatenate[city,State]", Character, Formula( :city || ", " || :State ) ) ),
	Coloring( Transform Column( "OZONE^2", Formula( :OZONE * :OZONE ) ) ),
	Sizes( Transform Column( "POP^2", Formula( :POP * :POP ) ) ),
	Ordering( Transform Column( "Max deg. F Jan^3", Formula( :Max deg. F Jan ^ 3 ) ) ),
	Tile( 0 ),
	By( Transform Column( "Last[Region]", Character, Formula( Word( -1, :Region ) ) ) )
);
Close( dt, nosave );
exlog = "While processing sex=M the following error(s) occurred: No multivariate correlations due to all rows missing";
```

**Code Explanation**:

1. Open data table.
2. Create concatenated city and state column.
3. Create squared OZONE column.
4. Create squared POP column.
5. Create cubed Max deg. F Jan column.
6. Create last word from Region column.
7. Generate Treemap visualization.
8. Close data table without saving.
9. Log error message for sex=M.



### Example 7
> **Summary**: Creates a treemap visualization to explore relationships between city, state, ozone levels, population sizes, and max January degrees Fahrenheit.

<!-- Keywords: #JSLScriptingLanguage, #TreemapVisualization, #DataTable, #ColumnTransformation, #Visualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Treemap(
	Categories( Transform Column( "Concatenate[city,State]", Character, Formula( :city || ", " || :State ) ) ),
	Coloring( Transform Column( "OZONE^2", Formula( :OZONE * :OZONE ) ) ),
	Sizes( Transform Column( "POP^2", Formula( :POP * :POP ) ) ),
	Ordering( Transform Column( "Max deg. F Jan^3", Formula( :Max deg. F Jan ^ 3 ) ) ),
	Tile( 0 ),
	By( Transform Column( "Last[Region]", Character, Formula( Word( -1, :Region ) ) ) )
);
```

**Code Explanation**:

1. Open data table;
2. Create treemap visualization.
3. Concatenate city and state.
4. Calculate squared ozone levels.
5. Calculate squared population sizes.
6. Calculate cubed max January degrees Fahrenheit.
7. Set tile option to 0.
8. Group by last region word.



## Treemap using Expr
### Example 1
> **Summary**: Create and execute two treemap scripts from a data table, filtering rows by height and selecting categories based on age.

<!-- Keywords: #JSLScriptingLanguage, #Treemap, #DataVisualization, #Filtering, #Selection -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << row selection( select where( :height == 60 ), current selection( "clear" ) );
tmJSL = Expr(
	dt << Treemap( Categories( :age ), Sizes( :weight ) )
);
tmJSL1 = Expr(
	Treemap( Categories( :age ) )
);
```

**Code Explanation**:

1. Open data table.
2. Select rows where height is 60.
3. Clear current selections.
4. Define treemap script.
5. Define another treemap script.
6. Execute first treemap script.
7. Execute second treemap script.



### Example 2
> **Summary**: Creates a treemap visualization with proportional selection, combining two expressions for age categories and weight sizes.

<!-- Keywords: #JSLScriptingLanguage, #TreemapVisualization, #ProportionalSelection, #DataTableManipulation, #NewWindowCreation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << row selection( select where( :height == 60 ), current selection( "clear" ) );
tmJSL = Expr(
	dt << Treemap( Categories( :age ), Sizes( :weight ) )
);
tmJSL1 = Expr(
	Treemap( Categories( :age ) )
);
New Window( "combined treemap for proportional selection", Outline Box( "test", V List Box( Eval( tmJSL ), Eval( tmJSL1 ) ) ) );
```

**Code Explanation**:

1. Open data table.
2. Select rows where height is 60.
3. Clear current selections.
4. Define treemap expression with age categories and weight sizes.
5. Define treemap expression with age categories only.
6. Create new window for combined treemap.
7. Add outline box titled "test".
8. Add vertical list box to window.
9. Evaluate first treemap expression.
10. Evaluate second treemap expression.



## TreeMap 
> **Summary**: Creates a treemap report with color themes based on population data, using JMP's TreeMap platform.

<!-- Keywords: #JMP, #TreeMap, #Coloring, #ReportGeneration, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = TreeMap( Categories( :city ), Coloring( :POP ) );
For( i = 0, i <= 9, i++,
	obj << color theme( i )
);
obj << Color theme( Green to black to red );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table.
2. Create treemap object.
3. Set categories to city.
4. Set coloring to population.
5. Loop through color themes.
6. Apply each color theme.
7. Set final color theme.
8. Generate report.



