# Range

## Range using Group Columns
### Example 1
> **Summary**: Opens a data table and groups columns by specific business periods (BP) for Monday, Wednesday, Friday, and Week1 etc., enabling interactive analysis and visualization.

<!-- Keywords: #JMPScriptingLanguage, #DataTableOperations, #GroupColumns, #BusinessPeriods, #InteractiveAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Group Columns( "Monday", BP 8M, 3 );
dt << Group Columns( "Wednesday", BP 8W, 3 );
dt << Group Columns( "Friday", BP 8F, 3 );
dt << Group Columns( Item Range( "Monday", :BP 6W ), "Week1 etc." );
dt << Group Columns( Item Range( "Week1 etc.", :BP 6F ), "Week1 etc. etc." );
```

**Code Explanation**:

1. Open data table;
2. Group Monday columns by BP 8M.
3. Group Wednesday columns by BP 8W.
4. Group Friday columns by BP 8F.
5. Group Monday and BP 6W columns.
6. Group Week1 etc. and BP 6F columns.



### Example 2
> **Summary**: Opens a data table and groups columns based on specific conditions, including item ranges, before expanding all column groups.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManagement, #ColumnGrouping, #ItemRanges, #ExpandColumnGroups -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Group Columns( "Monday", BP 8M, 3 );
dt << Group Columns( "Wednesday", BP 8W, 3 );
dt << Group Columns( "Friday", BP 8F, 3 );
dt << Group Columns( Item Range( "Monday", :BP 6W ), "Week1 etc." );
dt << Group Columns( Item Range( "Week1 etc.", :BP 6F ), "Week1 etc. etc." );
dt << Expand all column groups;
```

**Code Explanation**:

1. Open data_table data
2. Group Monday columns.
3. Group Wednesday columns.
4. Group Friday columns.
5. Group Monday to Week1.
6. Group Week1 to Week1 etc.
7. Expand all column groups.



