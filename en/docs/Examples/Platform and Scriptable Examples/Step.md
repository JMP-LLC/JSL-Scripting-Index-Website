# Step

## Step using Run Script
### Example 1
> **Summary**: Executes a Bubble Plot script and selects specific country data, stepping through the plot 27 times.

<!-- Keywords: #JSLScriptingLanguage, #BubblePlot, #DataSelection, #StepThrough, #PathDiagramProperties -->

**Code**:
```jsl
dt = Open("data_table.jmp");
bp = dt << Run Script( "Bubble Plot Dynamic" );
dt << Select Where( :Country == 3365 );
bp << Step();
bp << Step();
bp << Step();
bp << Step();
bp << Step();
bp << Step();
bp << Step();
bp << Step();
bp << Step();
bp << Step();
bp << Step();
bp << Step();
bp << Step();
bp << Step();
bp << Step();
bp << Step();
bp << Step();
bp << Step();
bp << Step();
bp << Step();
bp << Step();
bp << Step();
bp << Step();
bp << Step();
```

**Code Explanation**:

1. Open data table.
2. Run Bubble Plot script.
3. Select specific country.
4. Step through Bubble Plot 27 times.



### Example 2
> **Summary**: Executes a Bubble Plot Dynamic script with 31 steps, selecting rows where Country is 3365.

<!-- Keywords: #JSLScripting, #BubblePlot, #DataSelection, #StepExecution, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
bp = dt << Run Script( "Bubble Plot Dynamic" );
dt << Select Where( :Country == 3365 );
bp << Step();
bp << Step();
bp << Step();
bp << Step();
bp << Step();
bp << Step();
bp << Step();
bp << Step();
bp << Step();
bp << Step();
bp << Step();
bp << Step();
bp << Step();
bp << Step();
bp << Step();
bp << Step();
bp << Step();
bp << Step();
bp << Step();
bp << Step();
bp << Step();
bp << Step();
bp << Step();
bp << Step();
bp << Step();
bp << Step();
bp << Step();
bp << Step();
```

**Code Explanation**:

1. Open data table;
2. Run Bubble Plot Dynamic script.
3. Select rows where Country is 3365.
4. Execute Step command 31 times.



### Example 3
> **Summary**: Runs a dynamic bubble plot to visualize data for a specific country, with interactive features enabled for gap selection.

<!-- Keywords: #JSLScriptingLanguage, #BubblePlot, #DynamicVisualization, #InteractiveFeatures, #DataSelection -->

**Code**:
```jsl
dt = Open("data_table.jmp");
bp = dt << Run Script( "Bubble Plot Dynamic" );
dt << Select Where( :Country == 3365 );
bp << Step();
bp << Step();
bp << Step();
bp << Step();
bp << Step();
bp << Step();
bp << Step();
bp << Step();
bp << Step();
bp << Step();
bp << Step();
bp << Step();
bp << Step();
bp << Step();
bp << Step();
bp << Step();
bp << Step();
bp << Step();
bp << Step();
bp << Step();
bp << Step();
bp << Step();
bp << Step();
bp << Step();
bp << Step();
bp << Step();
bp << Step();
bp << Step();
bp << Selectable Across Gaps( 1 );
```

**Code Explanation**:

1. Open data table.
2. Run Bubble Plot script.
3. Select specific country.
4. Advance bubble plot steps multiple times.
5. Enable selectable across gaps.



### Example 4
> **Summary**: Creates a bubble plot by region, utilizing the Run Script function to execute the 'Bubble Plot by Region' script and advance through subsequent steps.

<!-- Keywords: #JSLScriptingLanguage, #BubblePlot, #RunScript, #PathDiagramProperties, #JMP16 -->

**Code**:
```jsl
dt = Open("data_table.jmp");
bp = dt << Run Script( "Bubble Plot by Region" );
bp << Step();
bp << Step();
```

**Code Explanation**:

1. Open data table.
2. Run "Bubble Plot by Region" script.
3. Advance to next step.
4. Advance to next step.



### Example 5
> **Summary**: Create and execute a bubble plot script with three steps, utilizing JMP's Run Script functionality.

<!-- Keywords: #JMPScriptingLanguage, #BubblePlot, #RunScript, #PathDiagramProperties, #SEM -->

**Code**:
```jsl
dt = Open("data_table.jmp");
bp = dt << Run Script( "Bubble Plot by Region" );
bp << Step();
bp << Step();
bp << Step();
```

**Code Explanation**:

1. Open table.
2. Run bubble plot script.
3. Execute first step.
4. Execute second step.
5. Execute third step.



### Example 6
> **Summary**: Creates and customizes a bubble plot by region, utilizing JMP's Run Script feature.

<!-- Keywords: #JMPScriptingLanguage, #BubblePlot, #DataVisualization, #PathDiagram, #SEM -->

**Code**:
```jsl
dt = Open("data_table.jmp");
bp = dt << Run Script( "Bubble Plot by Region" );
bp << Step();
bp << Step();
bp << Step();
bp << Close Window();
```

**Code Explanation**:

1. Open table.
2. Run script for Bubble Plot.
3. Step through plot.
4. Step through plot.
5. Step through plot.
6. Close plot window.



