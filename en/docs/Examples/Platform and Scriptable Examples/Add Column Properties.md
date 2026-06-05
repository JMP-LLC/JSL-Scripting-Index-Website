# Add Column Properties

> **Summary**: Adds column properties to a data table, specifically setting the 'Link ID' property for the 'Person' column.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManipulation, #ColumnProperties, #JMPScripting, #DataAnalysis -->

**Code**:
```jsl
dt1 = Open("data_table.jmp");
dt1:Person << Add Column Properties( Set Property( "Link ID", 1 ) );
```

**Code Explanation**:

1. Open data table.
2. Add column properties to Person.



