# Lineup Box

## Lineup Box using Log Capture
> **Summary**: Executes Recurrence Analysis on a data table and extracts the report text content from the Lineup Box.

<!-- Keywords: #JMPScriptingLanguage, #RecurrenceAnalysis, #DataTable, #ReportExtraction, #LineupBox -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Log Capture( rc = dt << Run Script( "Recurrence Analysis" ) );
sb = Report( rc )["Recurrence Analysis"][Lineup Box( 1 )][Text Box( 2 )] << get text;
```

**Code Explanation**:

1. Open data table.
2. Run Recurrence Analysis script.
3. Capture report object.
4. Extract Recurrence Analysis report.
5. Access Lineup Box.
6. Retrieve Text Box.
7. Get text content.



