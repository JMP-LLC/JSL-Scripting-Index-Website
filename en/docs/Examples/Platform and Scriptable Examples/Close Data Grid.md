# Close Data Grid

## Close data grid 
> **Summary**: Configures data table properties for Coating Supplier and Lot Acceptance, including setting tags with specific attributes.

<!-- Keywords: #JMPScripting, #DataTableManagement, #PropertySetting, #TagsConfiguration, #CoatingSupplier -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Close data grid( 1 );
dt:Coating Supplier << Set Property( "Tags", {"attributes"} );
dt:Lot Acceptance << Set Property( "Tags", {"attributes"} );
```

**Code Explanation**:

1. Open data table.
2. Close data grid view.
3. Set tags for Coating Supplier.
4. Set tags for Lot Acceptance.



> **Summary**: Opens and closes a data table in JMP, allowing for efficient data management.

<!-- Keywords: #JMPScriptingLanguage, #DataTableManagement, #JSLAutomation, #JMPDataGrid, #Scripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Close Data Grid( 1 );
```

**Code Explanation**:

1. Open data table.
2. Close data grid window.



