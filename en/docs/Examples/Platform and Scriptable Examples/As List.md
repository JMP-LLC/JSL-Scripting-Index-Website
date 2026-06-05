# As List

## As List using N Items
### Example 1
> **Summary**: Process of opening a table, counting unique names, and creating a new window with a list box that allows selection of items.

<!-- Keywords: #JSLScriptingLanguage, #DataTableOperations, #ListBoxControl, #SelectionManagement, #InteractiveAnalysis -->

**Code**:
```jsl
dt29 = Open("data_table.jmp");
nit = N Items( As List( dt29:name << get values ) );
New Window( "Test Case 29", lb29 = List Box( As List( dt29:name << get values ), var29a = lb29 << get selected ) );
lb29 << set selected( 2 );
var29b = N Items( lb29 << get items );
```

**Code Explanation**:

1. Open table.
2. Count unique names.
3. Create new window.
4. Add list box.
5. Set list box items.
6. Select second item.
7. Get selected item.
8. Count list box items.



### Example 2
> **Summary**: Process of opening a data table, counting columns, and creating a new window with a list box that displays column names and allows selection.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManagement, #ListBoxControl, #ColumnCounting, #WindowCreation -->

**Code**:
```jsl
dt30 = Open("data_table.jmp");
nit = N Items( As List( dt30 << Get Column Names ) );
New Window( "Test Case 30", lb30 = List Box( As List( dt30 << Get Column Names ), var30a = lb30 << get selected ) );
lb30 << set selected( 4 );
var30b = N Items( lb30 << get items );
```

**Code Explanation**:

1. Open data table;
2. Count columns.
3. Create new window.
4. Add list box.
5. List all column names.
6. Get selected item.
7. Set selection to fourth item.
8. Count items in list box.



