# Show Recent Files

## Show Recent Files using New Project
> **Summary**: Creates a new JMP project, opens a data table, and applies a filter to display only records from Region C and N, while hiding count indicators and filter controls.

<!-- Keywords: #JMPScriptingLanguage, #DataFiltering, #InteractiveVisualization, #JMP, #DataAnalysis -->

**Code**:
```jsl
project = New Project();
project << Run Script(
	dt = Open( "$SAMPLE_DATA/data_table.jmp", invisible );
	obj = dt << Data Filter(
		show controls( 1 ),
		show counts( 1 ),
		no outline box( 1 ),
		Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
		Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
	);
	obj << show counts( 0 );
	obj << show controls( 0 );
);
project << Show recent files( 0 );
```

**Code Explanation**:

1. Create new project.
2. Open data table;
3. Initialize data filter object.
4. Display filter controls.
5. Display count indicators.
6. Disable outline box.
7. Add filter for Region C and N.
8. Set filter mode to minimal.
9. Hide count indicators.
10. Hide filter controls.



