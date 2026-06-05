# Is Missing

## Is Missing using Row
> **Summary**: Runs data table operations by opening a dataset, setting row indices, and checking for missing values in the 'name' column.

<!-- Keywords: #JSLScripting, #DataTableOperations, #MissingValueCheck, #RowIndexManagement, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt = Open("data_table.jmp");
Row() = 0;
Row() = 12;
x = Is Missing( dt:name );
```

**Code Explanation**:

1. Open data table;
2. Reopen data_table dataset
3. Set row index to 0.
4. Set row index to 12.
5. Check if name is missing in row 12.



