# Covariances

## Covariances using Run Script
> **Summary**: Configures a SEM path diagram to display means and hide various statistical details, utilizing the Run Script function in JMP.

<!-- Keywords: #JMP, #SEM, #PathDiagram, #DataVisualization, #Scripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Show Covariances( 0 ) );
obj << Path Diagram Properties( Show Equality Constraints( 0 ) );
obj << Path Diagram Properties( Show Estimates( "None" ) );
obj << Path Diagram Properties( Show Loadings( 0 ) );
obj << Path Diagram Properties( Show Means( 1 ) );
obj << Path Diagram Properties( Show Regressions( 0 ) );
obj << Path Diagram Properties( Show Variances( 0 ) );
```

**Code Explanation**:

1. Open data table.
2. Run SEM script.
3. Hide covariances.
4. Hide equality constraints.
5. Hide estimates.
6. Hide loadings.
7. Show means.
8. Hide regressions.
9. Hide variances.



