# Rename Table Script

> **Summary**: Renames and executes a script in a JMP data table, allowing for efficient processing of complex analyses.

<!-- Keywords: #JMPScriptingLanguage, #DataTableManagement, #ScriptExecution, #RenameScripts, #Automation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Rename Table Script( "Distribution", "Bivariate\X" );
dt << Run Script( "Bivariate\X" );
```

**Code Explanation**:

1. Open data table;
2. Rename script "Distribution" to "BivariateX".
3. Run renamed script "BivariateX".



