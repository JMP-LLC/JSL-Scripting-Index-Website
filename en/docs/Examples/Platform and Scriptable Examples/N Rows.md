# N Rows

## N Rows using Run Script
> **Summary**: Runs the extraction and processing of tables from a Recurrence Analysis report, including Placebo, Pyridoxine, and Thiotepa tables.

<!-- Keywords: #JSLScriptingLanguage, #RecurrenceAnalysis, #TableExtraction, #DataProcessing, #ReportAutomation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Run Script( "Recurrence Analysis" );
rpt = obj << report;
placeboTbl = rpt[Outline Box( "Placebo" )][Table Box( 1 )] << get as matrix;
pyridoxineTbl = rpt[Outline Box( "Pyridoxine" )][Table Box( 1 )] << get as matrix;
thiotepaTbl = rpt[Outline Box( "Thiotepa" )][Table Box( 1 )] << get as matrix;
nRowPlacebo = N Rows( placeboTbl );
nRowPyridoxine = N Rows( pyridoxineTbl );
nRowThiotepa = N Rows( thiotepaTbl );
placeboTblObj = rpt[Outline Box( "Placebo" )][Table Box( 1 )];
dt1 = placeboTblObj << Make Combined Data Table;
```

**Code Explanation**:

1. Open data_table data
2. Run Recurrence Analysis script.
3. Extract report object.
4. Retrieve Placebo table as matrix.
5. Retrieve Pyridoxine table as matrix.
6. Retrieve Thiotepa table as matrix.
7. Count rows in Placebo table.
8. Count rows in Pyridoxine table.
9. Count rows in Thiotepa table.
10. Create combined data table from Placebo.



