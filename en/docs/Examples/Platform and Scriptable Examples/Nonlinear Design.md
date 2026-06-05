# Nonlinear Design

### Example 1
> **Summary**: Creates a nonlinear design by specifying response and model variables, then closes the design window.

<!-- Keywords: #JMPScriptingLanguage, #NonlinearDesign, #DataAnalysis, #ModelSpecification, #WindowManagement -->

**Code**:
```jsl
dt = Open("data_table.jmp");
d = Nonlinear Design( Y( :Observed Yield ), X( :Yield Model ) );
d << close window;
```

**Code Explanation**:

1. Open data table.
2. Define nonlinear design.
3. Specify response variable.
4. Specify model variable.
5. Close design window.



### Example 2
> **Summary**: Creates and displays a nonlinear design window in JMP, utilizing the Nonlinear Design platform.

<!-- Keywords: #JMPNonlinearDesign, #JSLScripting, #DataTable, #WindowManagement, #Automation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
d = Nonlinear Design();
d = Window( "Nonlinear Design" );
```

**Code Explanation**:

1. Open table.
2. Create nonlinear design.
3. Display nonlinear design window.



### Example 3
> **Summary**: Creates a nonlinear design and generates a new data table from the specified response variable and model variables.

<!-- Keywords: #JMPScriptingLanguage, #NonlinearDesign, #DataTableGeneration, #ModelVariables, #ResponseVariable -->

**Code**:
```jsl
dt = Open("data_table.jmp");
d = Nonlinear Design( Y( :Observed Yield ), X( :Yield Model ) );
dtNew = d << Make Table;
```

**Code Explanation**:

1. Open data table.
2. Create nonlinear design.
3. Specify response variable.
4. Specify model variables.
5. Generate new data table.



## Nonlinear Design using Collapse Whitespace
> **Summary**: Creates a nonlinear design with specified response and predictor variables, capturing log output and collapsing whitespace.

<!-- Keywords: #JSLScriptingLanguage, #NonlinearDesign, #LogCapture, #WhitespaceCollapse, #DataTableOperations -->

**Code**:
```jsl
dt = Open("data_table.jmp");
lc = Collapse Whitespace( Log Capture( d = Nonlinear Design( Y( :height ), X( :weight ) ) ) );
```

**Code Explanation**:

1. Open data table.
2. Capture log output.
3. Create nonlinear design.
4. Specify response variable.
5. Specify predictor variable.
6. Collapse whitespace in log.
7. Assign result to variable.



