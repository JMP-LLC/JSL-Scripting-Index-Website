# Convert File Path

## Convert File Path using Run Script
> **Summary**: Creates and saves two reports, a Discriminant analysis report and a Scatterplot 3D report, in a new web report and saves it to a temporary folder.

<!-- Keywords: #JSLScriptingLanguage, #WebReport, #DiscriminantAnalysis, #Scatterplot3D, #ReportAutomation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
rpt1 = dt << Run Script( "Discriminant" );
rpt2 = dt << Run Script( "Scatterplot 3D" );
webrpt = New Web Report();
webrpt << Title( "Baseline Save Folder with Two Reports" );
webrpt << Add Reports( {rpt1, rpt2} );
rptPath = webrpt << Save( "$TEMP", Publish Data( 0 ) );
 
If(
	Host is( "Windows" ), folderPath = Substr( rptPath, 1, Length( Convert File Path( "$TEMP" ) ) + 35 ),
	Host is( "Mac" ), folderPath = Substr( rptPath, 1, Length( Convert File Path( "$TEMP" ) ) + 36 )
);
Delete Directory( folderPath );
```

**Code Explanation**:

1. Open data table;
2. Run Discriminant analysis.
3. Run Scatterplot 3D.
4. Create new web report.
5. Set report title.
6. Add analysis reports to web report.
7. Save web report to temp folder.
8. Check host operating system.
9. Extract folder path based on OS.
10. Delete created folder.



