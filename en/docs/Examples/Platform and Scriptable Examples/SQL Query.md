# SQL Query

## SQL Query using Function
> **Summary**: Runs the lookup process for pairs of age and sex values by running a SQL query on a JMP table, selecting specific columns and filtering by age and sex.

<!-- Keywords: #JSLScriptingLanguage, #JMPTables, #SQLQuery, #DataFiltering, #LookupOperation -->

**Code**:
```jsl
Names Default To Here (1);
myquery = Function( {vals, agevar, sexvar},
	// Section below would normally be your SQL query against your database.
	// this was just copy/pasted from doing it manually
	New SQL Query(   
		Version( 130 ),
		Connection( "JMP" ),
		JMP Tables(
			["data_table" => "$SAMPLE_DATA\data_table.jmp"]
		),
		QueryName( "mylookup" ),
		Select(
			Column( "height", "t1", Numeric Format( "Fixed Dec", "0", "NO", "" ) ),
			Column( "weight", "t1", Numeric Format( "Fixed Dec", "0", "NO", "" ) )
		),
		From( Table( "data_table", Alias( "t1" ) ), Sample( First N( vals ) ) ), //'vals' variable added here
		Where(
			In List(
				Column(
					"age",
					"t1",
					Analysis Type( "Ordinal" ),
					Numeric Format( "Fixed Dec", "0", "NO", "" )
				),
				{agevar}, //'age' variable added here
				UI( SelectListFilter( ListBox, Base( "Categorical" ) ) )
			) & In List(
				Column( "sex", "t1" ),
				{sexvar}, //'sex' variable added here
				UI( SelectListFilter( ListBox, Base( "Categorical" ) ) )
			)
		)
	) << Run
);
// test to make sure function works
dt = myquery (2, 12, "F"); 
close (dt, no save);
//make table with pairs to lookup
dtlookup = New Table( "combos",
	Add Rows( 4 ),
	New Column(
		"age",
		Numeric,
		"Ordinal",
		Format( "Fixed Dec", 5, 0 ),
		
		Set Values( [12, 12, 13, 13] ),
		Set Display Width( 53 )
	),
	New Column( "sex", Character, "Nominal", Set Values( {"F", "M", "F", "M"} ) )
);
//now run the lookup for each pair
for each row (dtlookup,
	myquery (2, :age, :sex )
);
```

**Code Explanation**:

1. Define `myquery` function.
2. Create new SQL query.
3. Set connection to JMP.
4. Specify JMP tables.
5. Name the query "mylookup".
6. Select columns "height" and "weight".
7. From "data_table" table, sample first N rows.
8. Filter by age and sex.
9. Run the query.
10. Test `myquery` function.
11. Close test table without saving.
12. Create "combos" table.
13. Add rows to "combos".
14. Add "age" column with values.
15. Add "sex" column with values.
16. For each row in "combos", run `myquery`.



