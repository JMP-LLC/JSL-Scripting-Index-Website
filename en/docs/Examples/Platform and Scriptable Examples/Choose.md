# Choose

## Choose using New Column
> **Summary**: Creates a new column in a JMP data table with a custom formula based on multiple conditions, including age and height.

<!-- Keywords: #JSLScriptingLanguage, #CustomFormula, #DataTableManipulation, #ConditionalLogic, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "Pred Formula",
	formula(
		If( :height < 65,
			If( :height < 60,
				79,
				Choose( Match( :age, 12, 1, 13, 1, 14, 2, 15, 2, 16, 2, 17, 2, 3 ), 109.833333333333, 97.1538461538462, 101.157894736842 )
			),
			123.214285714286
		)
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create new column "Pred Formula".
3. Define formula for "Pred Formula".
4. Check if height < 65.
5. If height < 60, set value to 79.
6. If height >= 60, match age.
7. For age 12-17, choose formula values.
8. If age doesn't match, use default value.
9. If height >= 65, set value to 123.214285714286.



