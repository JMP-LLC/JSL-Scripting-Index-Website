# Method

## Discriminant Method 
> **Summary**: Executes a Discriminant script with a Quadratic method on an open data table.

<!-- Keywords: #JMPScriptingLanguage, #DiscriminantAnalysis, #QuadraticMethod, #DataTableOperations, #ScriptAutomation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
disc = dt << run script( "Discriminant" );
disc << Discriminant Method( "Quadratic" );
```

**Code Explanation**:

1. Open data table;
2. Run Discriminant script.
3. Set method to Quadratic.



