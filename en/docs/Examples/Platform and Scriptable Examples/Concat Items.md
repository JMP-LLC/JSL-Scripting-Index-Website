# Concat Items

## Concat Items using Run Script
> **Summary**: Creates and publishes web reports with distribution data, handling exceptions and allowing for download.

<!-- Keywords: #JSLScriptingLanguage, #WebReportGeneration, #DistributionAnalysis, #ExceptionHandling, #DataPublishing -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dis = dt << Run Script( "Distribution" );
Try(
	webrpt = New Web Report( Add Report( dis ), Publish Data( 1 ), ),
	If( Is List( exception_msg ),
		exception_msg = Concat Items( exception_msg, "!n" )
	);
 
);
Try(
	webrpt = New Web Report( Add Report( dis ), Allow Download( 1 ), ),
	If( Is List( exception_msg ),
		exception_msg = Concat Items( exception_msg, "!n" )
	);
 
);
```

**Code Explanation**:

1. Open data table.
2. Run Distribution script on data.
3. Attempt to create web report with distribution.
4. Publish data in web report.
5. Handle exceptions if any.
6. Attempt to create another web report.
7. Allow download in web report.
8. Handle exceptions if any.



