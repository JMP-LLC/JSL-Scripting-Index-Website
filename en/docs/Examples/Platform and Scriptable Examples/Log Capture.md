# Log Capture

## Log Capture using Run Script
### Example 1
> **Summary**: Process of running a Fit Model script, generating predicted values, selecting specific rows, and capturing log output in JMP.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #PredictedValues, #RowSelection, #LogCapture -->

**Code**:
```jsl
dt = Open("data_table.jmp");
fm = dt << Run Script( "Fit Model" );
fm << Predicted Values;
dt << Select Rows( [1 2 3 4 5] );
dt << Move Rows( At End );
log1 = Log Capture( fm << Predicted Values );
```

**Code Explanation**:

1. Open data table;
2. Run Fit Model script.
3. Add predicted values column.
4. Select first five rows.
5. Move selected rows to end.
6. Capture log output.



### Example 2
> **Summary**: Executes Recurrence Analysis and Grouped scripts, capturing logs for Proportional Intensity Model and endtime calculations in columns and fields.

<!-- Keywords: #RecurrenceAnalysis, #PathDiagramProperties, #LogCapture, #JMPScriptingLanguage, #SEM -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Run Script( "Recurrence Analysis" );
dt << Run Script( "Recurrence Grouped" );
lcap1 = Log Capture( dt << Run Script( "Proportional Intensity Model" ) );
lcap2 = Log Capture( dt << Run Script( "Recurrence endtime in column" ) );
lcap3 = Log Capture( dt << Run Script( "Recurrence endtime in field" ) );
```

**Code Explanation**:

1. Open table.
2. Run Recurrence Analysis script.
3. Run Recurrence Grouped script.
4. Capture Proportional Intensity Model log.
5. Capture Recurrence endtime in column log.
6. Capture Recurrence endtime in field log.



### Example 1
> **Summary**: Runs the execution and reporting of SEM: CFA and Mediation analyses on a data table, capturing logs for each script run.

<!-- Keywords: #JMPScriptingLanguage, #StructuralEquationModeling, #ConfirmatoryFactorAnalysis, #MediationAnalysis, #DataTableOperations -->

**Code**:
```jsl
dt = Open("data_table.jmp");
model_log = Log Capture(
	obj7 = dt << Run Script( "SEM: CFA" );
	rpt7 = obj7 << Report();
);
model_log = Log Capture(
	obj8 = dt << Run Script( "SEM: CFA and Mediation" );
	rpt8 = obj8 << Report();
);
```

**Code Explanation**:

1. Open data table.
2. Capture log for SEM: CFA script.
3. Run SEM: CFA script on data.
4. Generate report from CFA analysis.
5. Capture log for SEM: CFA and Mediation script.
6. Run SEM: CFA and Mediation script on data.
7. Generate report from CFA and Mediation analysis.



### Example 2
> **Summary**: Opens a data table, creation of Python commands, log capture from submission, and retrieval of the updated Iris object.

<!-- Keywords: #JSLScripting, #PythonIntegration, #DataTableManagement, #LogCapture, #IrisObject -->

**Code**:
```jsl
iris = Open("data_table.jmp");
commands = "\[
iris = jmp.current()   
print(iris.name)
]\";
s = Log Capture( Python Submit( commands ) );
iris = Python Get( iris );
```

**Code Explanation**:

1. Open data table;
2. Create Python commands string.
3. Capture log from Python submission.
4. Retrieve updated Iris object from Python.



## Log Capture using Select Rows
> **Summary**: Runs data table operations by opening a file, selecting specific rows, deleting them, capturing log output, and running a Time Series script.

<!-- Keywords: #JSLScriptingLanguage, #DataTableOperations, #TimeSeriesAnalysis, #LogCapture, #ScriptExecution -->

**Code**:
```jsl
dt = Open("data_table.jmp");
r = dt << Select Rows( 2 :: 296 );
r << Delete Rows;
log1 = Log Capture( dt << run script( "Time Series" ) );
```

**Code Explanation**:

1. Open data table.
2. Select specific rows.
3. Delete selected rows.
4. Capture log output.
5. Run Time Series script.



## Log Capture using Python Send
### Example 1
> **Summary**: Opens a data table, sending it to Python for processing, and printing dataset name, row count, and column count.

<!-- Keywords: #JSLScriptingLanguage, #PythonIntegration, #DataAnalysis, #JMP, #Automation -->

**Code**:
```jsl
commands =
"\[
jmp.run_jsl('''
iris=Open("data_table.jmp");
Python Send(iris);   ''')
print ( f"{ iris.name } Row Count: { iris.nrows } Column count: { iris.ncols }\n" )
]\";
s = Log Capture( Python Submit( commands ) );
```

**Code Explanation**:

1. Open data table;
2. Send data to Python.
3. Print dataset name.
4. Print row count.
5. Print column count.
6. Capture log output.



### Example 2
> **Summary**: Sends a JMP data table to Python for further processing and retrieval, utilizing the `Python Send` function.

<!-- Keywords: #JMPScriptingLanguage, #PythonIntegration, #DataTableManagement, #Automation, #Scripting -->

**Code**:
```jsl
iris = Open("data_table.jmp");
Python Send( iris );
commands = "\[
iris = jmp.table('data_table.jmp') 
print(iris.name)
]\";
s = Log Capture( Python Submit( commands ) );
iris = Python Get( iris );
```

**Code Explanation**:

1. Open data table;
2. Send data to Python.
3. Define Python commands.
4. Capture log output.
5. Submit Python commands.
6. Retrieve updated data.



### Example 3
> **Summary**: Modify and retrieve a JMP data table's name through Python scripting, capturing log output and handling potential errors.

<!-- Keywords: #JMPScripting, #PythonIntegration, #DataTableManagement, #ErrorHandling, #LogCapture -->

**Code**:
```jsl
iris = Open("data_table.jmp");
Python Send( iris );
commands = "\[
print(iris.name)
]\";
s = Log Capture( Python Submit( commands ) );
commands = "\[
iris.name = 'New data_table'
]\";
Python Submit( commands );
s = Python Get( iris );
iris = Python Get( iris ) << Get Name;
commands = "\[
try:
iris.name = 7
except ValueError as e:
print( 'DataTable.name: ' + repr(e) )
]\";
s = Log Capture( Python Submit( commands ) );
commands = "\[
try:
iris.name = None
except ValueError as e:
print( 'DataTable.name: ' + repr(e) )
]\";
s = Log Capture( Python Submit( commands ) );
```

**Code Explanation**:

1. Open data table;
2. Send table to Python.
3. Execute Python command.
4. Capture log output.
5. Change table name to "New Iris".
6. Submit Python command.
7. Retrieve updated table.
8. Get new table name.
9. Attempt to set invalid table name.
10. Capture error message.



### Example 4
> **Summary**: Sends a JMP data table to Python, executing commands to print row and column counts, assign the first column to a set, and capture log output.

<!-- Keywords: #JMP, #Python, #DataTable, #LogCapture, #Scripting -->

**Code**:
```jsl
iris = Open("data_table.jmp");
Python Send( iris );
commands =
"\[
print ( f"Row Count: { iris.nrows } Column count: { iris.ncols }\n" )
setW = iris[1]		# indexed starting with 0
print(f"{setW.name}  Row Count: {iris.nrows}")
]\";
s = Log Capture( Python Submit( commands ) );
```

**Code Explanation**:

1. Open data table;
2. Send data to Python.
3. Define Python commands.
4. Print row and column counts.
5. Assign first column to setW.
6. Print column name and row count.
7. Capture log output.
8. Submit Python commands.



### Example 5
> **Summary**: Sends a JMP data table to Python for further processing and logging, utilizing the `Python Send` function.

<!-- Keywords: #JMP, #Python, #DataTable, #LogCapture, #Automation -->

**Code**:
```jsl
iris = Open("data_table.jmp");
Python Send( iris );
commands = "\[
import jmp
iris = jmp.table('data_table.jmp') 
print(iris.__class__)
]\";
s = Log Capture( Python Submit( commands ) );
```

**Code Explanation**:

1. Open data table;
2. Send table to Python.
3. Define Python commands.
4. Capture log output.



### Example 6
> **Summary**: Sends a weight column to Python and captures its output, utilizing Log Capture.

<!-- Keywords: #JSLScriptingLanguage, #PythonIntegration, #LogCapture, #DataTransfer, #Automation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Python Send( dt:weight );
w = Log Capture( Python Submit( "print(dt_weight)" ) );
```

**Code Explanation**:

1. Open table.
2. Send weight column to Python.
3. Capture Python output.
4. Log captured output.



### Example 7
> **Summary**: Sends a weight column from a JMP data table to Python, capturing the output as a log.

<!-- Keywords: #JMPScriptingLanguage, #PythonIntegration, #DataTransfer, #LogCapture, #Automation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Python Send( dt:weight, Python Name( "weight" ) );
s = Log Capture( Python Submit( "print(weight)" ) );
```

**Code Explanation**:

1. Open data table;
2. Assign weight column to variable.
3. Send weight data to Python.
4. Capture Python output.



### Example 8
> **Summary**: Sends a JMP data table to Python and captures log output using the Log Capture function, executing a custom Python script.

<!-- Keywords: #JMPScriptingLanguage, #PythonIntegration, #LogCapture, #DataTableManagement, #CustomScriptExecution -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Python Send( dt );
s = Log Capture( Python Submit File( "$SAMPLE_SCRIPTS/Python/ListCheck.py" ) );
```

**Code Explanation**:

1. Open data table;
2. Send data to Python.
3. Capture log output.
4. Execute "ListCheck.py".



