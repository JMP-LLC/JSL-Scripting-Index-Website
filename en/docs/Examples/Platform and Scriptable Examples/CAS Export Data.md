# CAS Export Data

> **Summary**: Runs the opening and exporting of a data table to CAS.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManagement, #CASExport, #JMPScripting, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
rc = CAS Export Data( dt, "Casuser", "data_table" );
```

**Code Explanation**:

1. Open data table.
2. Export data to CAS.



