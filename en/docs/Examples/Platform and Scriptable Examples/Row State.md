# Row State

## Row State using Get Rows Where
> **Summary**: Selects specific rows in a data table, utilizing the Get Rows Where() function and Row State() property.

<!-- Keywords: #JSLScripting, #DataTableManipulation, #RowSelection, #GetRowsWhere, #RowState -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Get Rows Where();
Selected( Row State( 16 ) ) = 1;
Selected( Row State( 23 ) ) = 1;
Selected( Row State( 24 ) ) = 1;
Selected( Row State( 25 ) ) = 1;
Selected( Row State( 26 ) ) = 1;
Selected( Row State( 27 ) ) = 1;
Selected( Row State( 28 ) ) = 1;
Selected( Row State( 34 ) ) = 1;
Selected( Row State( 35 ) ) = 1;
Selected( Row State( 40 ) ) = 1;
Selected( Row State( 60 ) ) = 1;
Selected( Row State( 61 ) ) = 1;
Selected( Row State( 62 ) ) = 1;
Selected( Row State( 65 ) ) = 1;
Selected( Row State( 67 ) ) = 1;
Selected( Row State( 68 ) ) = 1;
Selected( Row State( 70 ) ) = 1;
Selected( Row State( 74 ) ) = 1;
Selected( Row State( 75 ) ) = 1;
Selected( Row State( 88 ) ) = 1;
Selected( Row State( 91 ) ) = 1;
Selected( Row State( 92 ) ) = 1;
Selected( Row State( 93 ) ) = 1;
Selected( Row State( 94 ) ) = 1;
Selected( Row State( 96 ) ) = 1;
```

**Code Explanation**:

1. Open data table.
2. Get all rows initially.
3. Select row 16.
4. Select row 23.
5. Select row 24.
6. Select row 25.
7. Select row 26.
8. Select row 27.
9. Select row 28.
10. Select row 34.



