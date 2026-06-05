# Namespace

## Namespace using New Column
> **Summary**: Creates a new column with date-time format and assigns a value to each cell, utilizing the Open() function and New Column() syntax.

<!-- Keywords: #JSLScriptingLanguage, #NewColumn, #Date-TimeFormat, #Namespace, #DataManipulation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "example", Numeric, Continuous, Width( 5 ), Format( ddMonyyyy h:m:s ), <<Set Each Value( 100 ) );
fmt = {};
fmt = Char( :example << get format );
Close( dt, nosave );
ns = New Namespace();
ns:format = "ddMonyyyy h:m:s";
```

**Code Explanation**:

1. Open data table;
2. Add new column named "example".
3. Set column properties: numeric, continuous.
4. Set column width to 5.
5. Set column format to date-time.
6. Assign value 100 to each cell in "example".
7. Retrieve format of "example" column.
8. Close dataset without saving.
9. Create new namespace.
10. Assign date-time format to namespace variable.



