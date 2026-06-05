# Filter Views

## Enable Filter Views 
> **Summary**: Opens and configures a data table, enabling filter views and creating a new data box with enabled filter views.

<!-- Keywords: #JMPScriptingLanguage, #DataManagement, #FilterViews, #DataBox, #EnableFilterViews -->

**Code**:
```jsl
dt3 = Open( "$SAMPLE_DATA/data_table.jmp", Enable Filter Views( 1 ) );
dt3 << New Data Box( <<Enable Filter Views( 1 ) );
```

**Code Explanation**:

1. Open data table.
2. Enable filter views on table.
3. Create new data box.
4. Enable filter views on data box.



