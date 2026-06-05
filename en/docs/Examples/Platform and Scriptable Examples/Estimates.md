# Estimates

## Estimates using Run Script
> **Summary**: Creates a path diagram for SEM: Bollen (1989) analysis, with customizable appearance and thickness options.

<!-- Keywords: #JSL, #SEM, #PathDiagram, #Bollen1989, #JMP16 -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Show Estimates( 0 );
```

**Code Explanation**:

1. Open data table;
2. Run SEM: Bollen (1989) script.
3. Hide estimates output.



