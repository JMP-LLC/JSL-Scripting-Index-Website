# Get Clipboard

> **Summary**: Process of opening a data table and copying its script.

<!-- Keywords: #JSLScripting, #DataTableManagement, #CopyScript, #Automation, #JMP -->

**Code**:
```jsl
mapDt = Open("data_table.jmp");
mapDt << Copy Table Script;
dtScript = Get Clipboard();
```

**Code Explanation**:

1. Open data table.
2. Copy table script.



