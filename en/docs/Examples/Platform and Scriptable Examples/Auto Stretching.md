# Auto Stretching

## Auto Stretching using Run Script
### Example 1
> **Summary**: Creates and configures a path diagram in JMP, enabling customization of appearance and interaction with data.

<!-- Keywords: #JMPScriptingLanguage, #PathDiagrams, #DataVisualization, #GraphicalUserInterface, #Scripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dist = dt << Run Script( "Distribution" );
frame = (dist << Report)[Frame Box( 1 )];
frame << Set Auto Stretching( 1, 1 ) << Set Max Size( 10000, 10000 );
```

**Code Explanation**:

1. Open data table;
2. Run Distribution script.
3. Access first frame box.
4. Enable auto stretching.
5. Set max size to 10000x10000.



### Example 2
> **Summary**: Visualizes and configures a path diagram in JMP, allowing users to customize appearance settings such as color, thickness, and transparency.

<!-- Keywords: #JMPScriptingLanguage, #PathDiagrams, #DataVisualization, #CustomizationOptions, #Automation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dist = dt << Run Script( "Distribution" );
frame = (dist << Report)[Frame Box( 1 )];
frame << Set Auto Stretching( 1, 1 ) << Set Max Size( 10000, 10000 );
frame << Set Window Size( 600, 900 );
```

**Code Explanation**:

1. Open data table;
2. Run Distribution script.
3. Access first frame box.
4. Enable auto stretching.
5. Set max size to 10000x10000.
6. Set window size to 600x900.



