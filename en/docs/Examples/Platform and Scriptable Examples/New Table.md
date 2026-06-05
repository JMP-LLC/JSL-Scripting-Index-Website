# New Table

## New Table using Select Properties
> **Summary**: Runs the selection and addition of properties to a new table, including creating table variables and clearing property selection.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManipulation, #PropertySelection, #TableCreation, #VariableDefinition -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Select Properties( {2, 4} );
proplist = dt << Get Selected Properties();
dt2 = New Table( "Little Class" );
dt2 << Add scripts to table( proplist );
dt << New Table Variable( "abc", "abc" );
dt << New Table Variable( "def", 42 );
dt << Clear Properties Selection;
dt << Select Properties( {"Contingency", "abc", "def"} );
proplist2 = dt << Get Selected Properties();
dt2 << Add scripts to table( proplist2 );
```

**Code Explanation**:

1. Open data table;
2. Select properties 2 and 4.
3. Get selected properties.
4. Create new table "Little Class".
5. Add scripts to "Little Class".
6. Create table variable "abc" with value "abc".
7. Create table variable "def" with value 42.
8. Clear property selection.
9. Select properties "Contingency", "abc", "def".
10. Get selected properties and add to "Little Class".



