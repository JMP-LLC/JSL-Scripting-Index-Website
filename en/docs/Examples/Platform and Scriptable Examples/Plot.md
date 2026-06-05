# Plot

## Plot using Run Script
> **Summary**: Creates a predicted values plot for SEM: LGC with LDF analysis, utilizing the Run Script and Predicted Values Plot functions in JMP.

<!-- Keywords: #JMP, #SEM, #PredictiveAnalytics, #PathAnalysis, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Run Script( "SEM: LGC with LDF" );
obj << Predicted Values Plot( 1, 1 );
```

**Code Explanation**:

1. Open table.
2. Run SEM script.
3. Create predicted values plot.



