# Fill Color

## Fill Color using Run Script
> **Summary**: Creates a path diagram with customized appearance settings, including R2 fill color and show R Squared values, using the SEM: Bollen (1989) script.

<!-- Keywords: #JSLScriptingLanguage, #PathDiagram, #SEMAnalysis, #R2FillColor, #ShowRSquaredValues -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( R2 Fill Color( Cyan ), Show R Squared Values( 1 ) );
```

**Code Explanation**:

1. Open table.
2. Run SEM script.
3. Set path diagram properties.
4. Change R2 fill color.
5. Show R Squared values.



