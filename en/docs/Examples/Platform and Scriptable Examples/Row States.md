# Row States

## Set Row States 
> **Summary**: Opens a data table and sets row states for specific rows.

<!-- Keywords: #JMPScriptingLanguage, #DataTableManagement, #RowStates, #InteractiveDataAnalysis, #JSLScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Set Row States(
	[8960, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
);
```

**Code Explanation**:

1. Open data table.
2. Set row states for table.



