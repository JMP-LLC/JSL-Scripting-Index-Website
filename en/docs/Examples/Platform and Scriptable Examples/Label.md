# Label

### Example 1
> **Summary**: Labels variables in a JMP data table, specifically assigning labels to the 'age' and 'sex' columns.

<!-- Keywords: #JMPScriptingLanguage, #DataTableManagement, #VariableLabeling, #ScriptAutomation, #JSLCoding -->

**Code**:
```jsl
Open("data_table.jmp");
:age << Label( 1 );
:sex << Label( 1 );
```

**Code Explanation**:

1. Open data table.
2. Label age variable.
3. Label sex variable.



### Example 2
> **Summary**: Opens a data table and unlabels the name column.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManagement, #ColumnLabeling, #JMPScripting, #DataPreparation -->

**Code**:
```jsl
Open("data_table.jmp");
:name << Label( 0 );
```

**Code Explanation**:

1. Open data table.
2. Unlabel name column.



