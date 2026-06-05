# Get Column Reference

> **Summary**: Process of retrieving column references from a data table, storing them in two separate results.

<!-- Keywords: #JSLScriptingLanguage, #DataTableOperations, #ColumnReferences, #JMPScripting, #Automation -->

**Code**:
```jsl
dtz = Open("data_table.jmp");
result1 = dtz << get column reference();
result2 = dtz << get column reference( [] );
```

**Code Explanation**:

1. Open data table.
2. Get all column references.
3. Store column references in result1.
4. Get all column references again.
5. Store column references in result2.



