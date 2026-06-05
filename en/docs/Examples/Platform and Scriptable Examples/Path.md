# Path

## Path using Close data grid
### Example 1
> **Summary**: Opens a data table, groups columns into 'Grp1', selects the group, and then ungroups the columns while clearing column selection.

<!-- Keywords: #JMPScriptingLanguage, #DataTableManagement, #ColumnGrouping, #SelectionManagement, #DataManipulation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Close data grid( 1 );
dt << Group Columns( "Grp1", {:age, :sex} );
dt << Select column group( "Grp1" );
dt << Group Columns( Path( "Grp1", "Stats" ), {:height, :weight} );
dt << Select column group( "Grp1" );
dt << ungroup columns( column group( "Grp1" ) );
dt << Clear column selection;
```

**Code Explanation**:

1. Open data table.
2. Close data grid.
3. Group columns into "Grp1".
4. Select "Grp1" group.
5. Group columns into nested "Stats".
6. Select "Grp1" group again.
7. Ungroup "Grp1" columns.
8. Clear column selection.



### Example 2
> **Summary**: Processes grouping and selecting columns in a JMP data table, allowing for efficient analysis and exploration.

<!-- Keywords: #JMPScriptingLanguage, #DataTableManagement, #ColumnGrouping, #Selection, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Close data grid( 1 );
dt << Group Columns( "Grp1", {:age, :sex} );
dt << Select column group( "Grp1" );
dt << Group Columns( Path( "Grp1", "Stats" ), {:height, :weight} );
dt << Select column group( "Grp1" );
dt << ungroup columns( column group( "Grp1" ) );
dt << Clear column selection;
dt << Select column group( "Stats" );
```

**Code Explanation**:

1. Open data table.
2. Close data grid.
3. Group age and sex into Grp1.
4. Select Grp1 column group.
5. Group height and weight under Stats.
6. Select Grp1 column group again.
7. Ungroup Grp1 column group.
8. Clear column selection.
9. Select Stats column group.



### Example 3
> **Summary**: Organizes and selects scripts in a data table, grouping and ungrouping scripts for specific analysis tasks.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManagement, #ScriptOrganization, #AnalysisAutomation, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Close data grid( 1 );
dt << group scripts( "1st", {"Distribution", "Bivariate"} );
dt << Group scripts( Path( "1st", "2nd" ), {"Oneway", "Logistic"} );
dt << Select scripts( {"Oneway"} );
dt << Ungroup scripts( "1st" );
```

**Code Explanation**:

1. Open data table.
2. Close data grid.
3. Group scripts for "1st".
4. Add "Distribution" and "Bivariate".
5. Group scripts for "1st/2nd".
6. Add "Oneway" and "Logistic".
7. Select "Oneway" script.
8. Ungroup scripts for "1st".



### Example 4
> **Summary**: Runs data table operations to group and select scripts, demonstrating control over script execution in JMP.

<!-- Keywords: #JMPScriptingLanguage, #DataTableOperations, #ScriptControl, #GroupScripts, #SelectScripts -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Close data grid( 1 );
dt << group scripts( "1st", {"Distribution", "Bivariate"} );
dt << Group scripts( Path( "1st", "2nd" ), {"Oneway", "Logistic"} );
dt << Select scripts( {"Oneway"} );
dt << Ungroup scripts( "1st" );
dt << Select scripts( {"Oneway"} );
```

**Code Explanation**:

1. Open data table.
2. Close data grid.
3. Group scripts for "1st".
4. Group scripts for "2nd".
5. Select "Oneway" script.
6. Ungroup scripts for "1st".
7. Select "Oneway" script again.



