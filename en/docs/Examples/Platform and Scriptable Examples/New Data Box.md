# New Data Box

## New Data Box using RunScript
> **Summary**: Process of setting value labels and creating a new data box from an existing data table.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManagement, #ValueLabels, #DataBoxCreation, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << RunScript( "Set Sex Value Labels" );
dtb = dt << new data box();
```

**Code Explanation**:

1. Open data table.
2. Run script to set value labels.
3. Create new data box.



