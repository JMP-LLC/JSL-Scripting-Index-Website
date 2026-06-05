# Print

## Print using Python Send
### Example 1
> **Summary**: Adds new rows to a JMP data table and retrieves the updated dataset using Python Send and Get commands.

<!-- Keywords: #JSLScripting, #PythonIntegration, #DataManipulation, #JMP, #Automation -->

**Code**:
```jsl
iris = Open("data_table.jmp");
Python Send( iris );
commands = "\[
iris.add_rows(5)			# add 5 rows to the end of the table
setW = iris[1]		# indexed starting with 0
#print(setW)
]\";
Python Submit( commands );
jdt = Python Get( iris );
```

**Code Explanation**:

1. Open data table;
2. Send dataset to Python.
3. Define Python commands.
4. Submit Python commands.
5. Retrieve updated dataset.



### Example 2
> **Summary**: Adds rows to a data table and retrieves the updated dataset using Python commands.

<!-- Keywords: #JSLScriptingLanguage, #PythonIntegration, #DataManipulation, #TableOperations, #JMP -->

**Code**:
```jsl
iris = Open("data_table.jmp");
Python Send( iris );
commands = "\[
iris.add_rows(5, -1)			# add 5 rows to the end of the table
setW = iris[1]		# indexed starting with 0
#print(setW)
]\";
Python Submit( commands );
jdt = Python Get( iris );
```

**Code Explanation**:

1. Open data table;
2. Send dataset to Python.
3. Define Python commands.
4. Add 5 rows to dataset.
5. Set variable `setW`.
6. Submit Python commands.
7. Retrieve updated dataset.
8. Store in `jdt`.



### Example 3
> **Summary**: Adds new rows to a data table and assigns the first column to a set, utilizing Python commands in JMP.

<!-- Keywords: #JMPScriptingLanguage, #PythonIntegration, #DataManipulation, #TableOperations, #SetAssignment -->

**Code**:
```jsl
iris = Open("data_table.jmp");
Python Send( iris );
commands = "\[
iris.add_rows(5, at = 10)	# add 5 rows after row 10
setW = iris[1]		# indexed starting with 0
#print(setW)
]\";
Python Submit( commands );
jdt = Python Get( iris );
```

**Code Explanation**:

1. Open data table;
2. Send dataset to Python.
3. Define Python commands.
4. Add 5 rows after row 10.
5. Assign first column to setW.
6. Submit Python commands.
7. Retrieve updated dataset.



### Example 4
> **Summary**: Adds rows to a data table and sets the first row using Python commands in JMP.

<!-- Keywords: #JMPScriptingLanguage, #PythonSend, #DataTableManipulation, #RowAddition, #SetRow -->

**Code**:
```jsl
iris = Open("data_table.jmp");
Python Send( iris );
commands =
"\[
iris.add_rows(5, at = 0)			# add 5 rows at the beginning of the table
setW = iris[1]		# indexed starting with 0
#print(setW)
]\";
Python Submit( commands );
jdt = Python Get( iris );
```

**Code Explanation**:

1. Open data table;
2. Send dataset to Python.
3. Define Python commands.
4. Add 5 rows to dataset.
5. Set first row.
6. Submit Python commands.
7. Retrieve updated dataset.



