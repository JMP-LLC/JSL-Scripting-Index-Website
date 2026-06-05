# New Project

### Example 1
> **Summary**: Creates a new JMP project, runs a script to open and close a data table, demonstrating the basic functionality of the New Project platform.

<!-- Keywords: #JMPScriptingLanguage, #NewProject, #DataTableManagement, #ScriptExecution, #JMPBasics -->

**Code**:
```jsl
project = New Project();
project << run script(
	dt = Open("data_table.jmp");
	dt << Close Window();
);
```

**Code Explanation**:

1. Create new project.
2. Run script within project.
3. Open data table;
4. Close the opened dataset window.



### Example 2
> **Summary**: Creates a new JMP project, runs a script in the project, and opens a data table.

<!-- Keywords: #JMPScriptingLanguage, #NewProject, #DataTable, #ScriptExecution, #JSL -->

**Code**:
```jsl
project = New Project();
project << run script( dt = Open("data_table.jmp") );
```

**Code Explanation**:

1. Create new project.
2. Run script in project.
3. Open data table;



## New Project using Run Script
> **Summary**: Creates a new project and runs a 3D Scatterplot script on an open data table.

<!-- Keywords: #JMPScriptingLanguage, #DataTable, #NewProject, #Scatterplot, #PathDiagramProperties -->

**Code**:
```jsl
dt4 = Open("data_table.jmp");
obj4 = dt4 << Run Script( "Scatterplot 3D" );
p2 = New Project();
```

**Code Explanation**:

1. Open data table;
2. Run 3D Scatterplot script.
3. Create new project.



