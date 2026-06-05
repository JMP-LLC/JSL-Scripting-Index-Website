# JMP App

## JMP App using Run Script
### Example 1
> **Summary**: Creates and configures a bubble plot report in JMP, including setting window titles and combining windows into an application.

<!-- Keywords: #JMPScriptingLanguage, #BubblePlot, #DataVisualization, #ApplicationConfiguration, #WindowManagement -->

**Code**:
```jsl
dt = Open("data_table.jmp");
bp = dt << Run Script( "Bubble Plot By State" );
If( Host is( "Windows" ),
	Main Menu( "File:New:Application" );
	windows = Get Window List();
	closeMe = windows[N Items( windows )];
	closeMe << Close Window;
);
app = JMP App();
app << Set Name( "Bubble Plot App" );
app << Combine Windows( {bp << Report, dt} );
(app << Get Modules)[1] << Set Window Title( "My Bubble Plot Report" );
app << Run;
```

**Code Explanation**:

1. Open data table.
2. Run bubble plot script.
3. Check if host is Windows.
4. Create new application.
5. Get window list.
6. Identify last window.
7. Close last window.
8. Create JMP application.
9. Set application name.
10. Combine windows into app.



### Example 2
> **Summary**: Creates and configures a JMP application with a bar chart report, combining data table and chart in a single window, and setting the window title.

<!-- Keywords: #JMPScriptingLanguage, #GraphBuilder, #BarChart, #ApplicationConfiguration, #WindowManagement -->

**Code**:
```jsl
dt = Open("data_table.jmp");
ch = dt << Run Script( "Graph Builder Bar Chart" );
If( Host is( "Windows" ),
	Main Menu( "File:New:Application" );
	windows = Get Window List();
	closeMe = windows[N Items( windows )];
	closeMe << Close Window;
);
app = JMP App();
app << Set Name( "Chart App" );
app << Combine Windows( {ch << Report, dt} );
(app << Get Modules)[1] << Set Window Title( "My Chart Report" );
app << Run;
```

**Code Explanation**:

1. Open data table.
2. Run Graph Builder Bar Chart script.
3. Check if host is Windows.
4. Create new application from File menu.
5. Get list of open windows.
6. Identify last window in list.
7. Close identified window.
8. Create new JMP application.
9. Set application name to "Chart App".
10. Combine chart report and data table into app.
11. Set first module's window title to "My Chart Report".
12. Run the application.



### Example 3
> **Summary**: Creates and configures a contour plot application, combining report and data table, and setting window title.

<!-- Keywords: #ContourPlot, #JMPApp, #DataTable, #WindowManagement, #Scripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
cp = dt << Run Script( "Contour Plot" );
If( Host is( "Windows" ),
	Main Menu( "File:New:Application" );
	windows = Get Window List();
	closeMe = windows[N Items( windows )];
	closeMe << Close Window;
);
app = JMP App();
app << Set Name( "Contour Plot App" );
app << Combine Windows( {cp << Report, dt} );
(app << Get Modules)[1] << Set Window Title( "My Contour Plot Report" );
app << Run;
```

**Code Explanation**:

1. Open data table.
2. Run contour plot script.
3. Check if host is Windows.
4. Create new application.
5. Get window list.
6. Identify last window.
7. Close last window.
8. Create new JMP app.
9. Set app name.
10. Combine report and data table.



### Example 4
> **Summary**: Creates and configures a JMP application, combining a report and data table windows, and closing unnecessary windows.

<!-- Keywords: #JMPScriptingLanguage, #JSLCode, #DataTableManagement, #ApplicationConfiguration, #WindowControl -->

**Code**:
```jsl
dt = Open("data_table.jmp");
ish = dt << Run Script( "Diagram" );
If( Host is( "Windows" ),
	Main Menu( "File:New:Application" );
	windows = Get Window List();
	closeMe = windows[N Items( windows )];
	closeMe << Close Window;
);
app = JMP App();
app << Set Name( "Diagram App" );
app << Combine Windows( {ish << Report, dt} );
(app << Get Modules)[1] << Set Window Title( "My Diagram Report" );
app << Run;
Close( dt, no save );
Window( "data_table - Diagram of Child by Parent" ) << Close Window;
Window( "My Diagram Report" ) << Close Window;
```

**Code Explanation**:

1. Open data table.
2. Run Diagram script on data table.
3. Check if host is Windows.
4. Create new application.
5. Get list of open windows.
6. Identify last window.
7. Close last window.
8. Create new JMP application.
9. Set application name.
10. Combine report and data table windows.



### Example 5
> **Summary**: Creates and configures an overlay plot application, combining a graph builder report with a data table, and setting window titles for interactive exploration.

<!-- Keywords: #JMPScriptingLanguage, #GraphBuilder, #DataTable, #ApplicationDevelopment, #InteractiveExploration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
op = dt << Run Script( "Graph Builder Overlay Plot" );
If( Host is( "Windows" ),
	Main Menu( "File:New:Application" );
	windows = Get Window List();
	closeMe = windows[N Items( windows )];
	closeMe << Close Window;
);
app = JMP App();
app << Set Name( "Overlay Plot App" );
app << Combine Windows( {op << Report, dt} );
(app << Get Modules)[1] << Set Window Title( "My Overlay Plot Report" );
app << Run;
```

**Code Explanation**:

1. Open data table;
2. Run script for graph builder.
3. Check if host is Windows.
4. Create new application from file menu.
5. Get list of open windows.
6. Identify last window opened.
7. Close the last window.
8. Create new JMP application.
9. Set application name.
10. Combine graph and data table into app.
11. Set window title for first module.
12. Run the application.



### Example 6
> **Summary**: Creates and configures a Pareto Plot application, combining data table and report in a new JMP app.

<!-- Keywords: #ParetoPlot, #JMPApp, #DataCombination, #Windows, #Scripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
pp = dt << Run Script( "Pareto Plot" );
If( Host is( "Windows" ),
	Main Menu( "File:New:Application" );
	windows = Get Window List();
	closeMe = windows[N Items( windows )];
	closeMe << Close Window;
);
app = JMP App();
app << Set Name( "Pareto Plot App" );
app << Combine Windows( {pp << Report, dt} );
(app << Get Modules)[1] << Set Window Title( "My Pareto Plot Report" );
app << Run;
```

**Code Explanation**:

1. Open data table.
2. Run Pareto Plot script.
3. Check if host is Windows.
4. Create new application.
5. Get list of open windows.
6. Identify last window.
7. Close last window.
8. Create new JMP app.
9. Set app name to "Pareto Plot App".
10. Combine Pareto plot and data table in app.
11. Set first module window title to "My Pareto Plot Report".
12. Run the app.



