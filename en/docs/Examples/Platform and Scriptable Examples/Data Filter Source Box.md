# Data Filter Source Box

> **Summary**: Runs the initial setup and configuration of a data filter source box, setting row states to hide all rows initially and then making specific rows visible.

<!-- Keywords: #JSLScriptingLanguage, #DataFilterSourceBox, #RowStates, #JMP, #DataTable -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Data Filter Source Box( 1 ) << Set Row States( dt, [0] );
Data Filter Source Box( 1 ) << Set Row States( dt, [1, 2, 3, 4] );
rowstates = dt << get row states;
```

**Code Explanation**:

1. Open data table.
2. Access Data Filter Source Box.
3. Set initial row states to all hidden.
4. Set specific rows visible.
5. Retrieve current row states.



