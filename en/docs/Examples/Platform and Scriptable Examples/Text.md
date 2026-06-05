# Text

## Text using Run Script
> **Summary**: Executes a SEM script with LGC and LDF, retrieves fit indices, and generates report text.

<!-- Keywords: #JMPScriptingLanguage, #StructuralEquationModeling, #PathDiagrams, #FitIndices, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Run Script( "SEM:LGC with LDF" );
obj << (Fit[1] << Fit Indices( 1 ));
report_text = obj << get text();
```

**Code Explanation**:

1. Open data table.
2. Run SEM script.
3. Access first fit object.
4. Enable fit indices.
5. Retrieve report text.



