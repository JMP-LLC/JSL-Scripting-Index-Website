# As Global

## As Global using For
> **Summary**: Runs the creation and assignment of matrix variables from columns 4 and 5 in a specified data table, followed by interactive button box operations.

<!-- Keywords: #JSLScriptingLanguage, #DataManipulation, #MatrixVariables, #ButtonBox, #InteractiveOperations -->

**Code**:
```jsl
dt = Open("data_table.jmp");
DataM4 = "";
DataM5 = "";
SrcMatrix = "";
For( a = 4, a <= 5, a++,
	SrcMatrix = "DataM" || Char( a );
	As Global( SrcMatrix ) = Column( dt, a ) << get as matrix;
);
DataM4 = "";
DataM5 = "";
SrcMatrix = "";
New Window( "Test",
	bb = Button Box( "Ok",
		For( a = 4, a <= 5, a++,
			SrcMatrix = "DataM" || Char( a );
			As Global( SrcMatrix ) = Column( dt, a ) << get as matrix;
		)
	)
);
bb << click;
bb << close window();
```

**Code Explanation**:

1. Open data table.
2. Initialize empty strings.
3. Loop through columns 4 and 5.
4. Construct matrix variable name.
5. Assign column data to global matrix.
6. Clear matrix variables.
7. Create new window.
8. Add button box.
9. On button click, loop through columns.
10. Assign column data to global matrix.
11. Click button programmatically.
12. Close button window.



