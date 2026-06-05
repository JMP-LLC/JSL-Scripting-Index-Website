# N Table

> **Summary**: Opens two data tables and counts the number of tables after opening.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManagement, #ScriptingAutomation, #TableCounting, #JMPScripting -->

**Code**:
```jsl
dt = Open( "$SAMPLE_DATA/Students1.JMP", invisible );
dt2 = Open( "$SAMPLE_DATA/Students2.JMP", invisible );
afterOpen2 = N Table();
```

**Code Explanation**:

1. Open data table;
2. Open data table;
3. Count tables after opening.



