# Include

## Include using Save Window Report
### Example 1
> **Summary**: Loads and saves a Six Quality Graphs Dashboard in JMP, including embedding data and closing the window.

<!-- Keywords: #JMPScriptingLanguage, #JMPDashboards, #DataVisualization, #Automation, #JMP -->

**Code**:
```jsl
Open("data_table.jmp");
app = Include( "$SAMPLE_DASHBOARDS/Six Quality Graphs Dashboard.jmpappsource" ) << Run;
win = (app << Get Windows)[1];
win << Save Window Report( "$TEMP/dashboard.jrp", embed data( 0 ) );
win << Close Window;
```

**Code Explanation**:

1. Open data table;
2. Load Six Quality Graphs Dashboard.
3. Run the dashboard application.
4. Retrieve the first window.
5. Save window report to dashboard.jrp.
6. Embed data in the report.
7. Close the window.



### Example 2
> **Summary**: Opens and saves a dashboard report, including running a Six Quality Graphs Dashboard application.

<!-- Keywords: #JMPScriptingLanguage, #DashboardAutomation, #DataTableManagement, #WindowReporting, #InteractiveVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
app = Include( "$SAMPLE_DASHBOARDS/Six Quality Graphs Dashboard.jmpappsource" ) << Run;
win = (app << Get Windows)[1];
win << Save Window Report( "$TEMP/dashboard.jrp", embed data( 0 ) );
win << Close Window;
Open( "$TEMP/dashboard.jrp" );
```

**Code Explanation**:

1. Open data table;
2. Include Six Quality Graphs Dashboard.
3. Run the dashboard application.
4. Get the first window from the app.
5. Save the window report as dashboard.jrp.
6. Embed data set to 0.
7. Close the window.
8. Open the saved dashboard report.



