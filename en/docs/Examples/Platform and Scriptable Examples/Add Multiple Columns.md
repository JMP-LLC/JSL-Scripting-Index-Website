# Add Multiple Columns

## Add Multiple Columns using Run Script
> **Summary**: Process of opening a data table, running a Fit Model script, and adding 20 numeric columns named Foo.

<!-- Keywords: #JSLScriptingLanguage, #FitModel, #DataTableManagement, #ColumnAddition, #Automation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Run Script( "Fit Model" );
dt << Add Multiple Columns( "Foo", 20, Numeric );
```

**Code Explanation**:

1. Open data table.
2. Run Fit Model script.
3. Add 20 numeric columns named Foo.



