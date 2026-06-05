# JMP Live Content

## JMP Live Content using Run Script
### Example 1
> **Summary**: Process of running a Discriminant analysis on a data table, creating two live contents from the results and publishing one of them.

<!-- Keywords: #JSLScriptingLanguage, #DiscriminantAnalysis, #LiveContent, #DataTable, #JMP -->

**Code**:
```jsl
dt_iris = Open("data_table.jmp");
dis = dt_iris << Run Script( "Discriminant" );
content1 = New JMP Live Content( dis, Publish Data( 0 ) );
content2 = New JMP Live Content( Data( dt_iris ) );
```

**Code Explanation**:

1. Open data table;
2. Run Discriminant analysis.
3. Create content from analysis.
4. Publish data for content.
5. Create content from dataset.
6. End script.



### Example 2
> **Summary**: Creates and publishes interactive content for Discriminant analysis, Map visualization, and data exploration in JMP.

<!-- Keywords: #JMPScriptingLanguage, #DiscriminantAnalysis, #MapVisualization, #DataExploration, #InteractiveContent -->

**Code**:
```jsl
dt_iris = Open("data_table.jmp");
dis = dt_iris << Run Script( "Discriminant" );
content1 = New JMP Live Content( dis, Publish Data( 0 ) );
content2 = New JMP Live Content( Data( dt_iris ) );
dt_map = Open("data_table.jmp");
content3 = New JMP Live Content( Map( dt_map ) );
content4 = New JMP Live Content( Data( "$SAMPLE_DATA\Big Class.jmp" ) );
Try(
	result = lc_1 << Publish( {content1, content2}, Space( spaceKey ) ),
	If( Is List( exception_msg ),
		exception_msg = Concat Items( exception_msg, "!n" )
	);
 
);
Try(
	result = lc_1 << Publish( {content1, content3}, Space( spaceKey ) ),
	If( Is List( exception_msg ),
		exception_msg = Concat Items( exception_msg, "!n" )
	);
 
);
Try(
	result = lc_1 << Publish( {content1, content2, content4}, Space( spaceKey ) ),
	If( Is List( exception_msg ),
		exception_msg = Concat Items( exception_msg, "!n" )
	);
 
);
```

**Code Explanation**:

1. Open data table;
2. Run Discriminant analysis.
3. Create content for Discriminant analysis.
4. Create content for data_table dataset.
5. Open data table;
6. Create content for Map.
7. Create content for data_table dataset.
8. Try publishing content1 and content2.
9. Handle exceptions if any.
10. Try publishing content1 and content3.
11. Handle exceptions if any.
12. Try publishing content1, content2, and content4.
13. Handle exceptions if any.



## New JMP Live Content 
> **Summary**: Creates and publishes JMP Live content, including a map and data visualization for Big Class.jmp, with error handling for exceptions.

<!-- Keywords: #JMPScriptingLanguage, #JMPLiveContent, #DataVisualization, #ErrorHandling, #Publishing -->

**Code**:
```jsl
dt_map = Open("data_table.jmp");
content3 = New JMP Live Content( Map( dt_map ) );
content4 = New JMP Live Content( Data( "$SAMPLE_DATA\Big Class.jmp" ) );
Try(
	result = lc_1 << Publish( {content1, content2}, Space( spaceKey ) ),
	If( Is List( exception_msg ),
		exception_msg = Concat Items( exception_msg, "!n" )
	);
 
);
Try(
	result = lc_1 << Publish( {content1, content3}, Space( spaceKey ) ),
	If( Is List( exception_msg ),
		exception_msg = Concat Items( exception_msg, "!n" )
	);
 
);
Try(
	result = lc_1 << Publish( {content1, content2, content4}, Space( spaceKey ) ),
	If( Is List( exception_msg ),
		exception_msg = Concat Items( exception_msg, "!n" )
	);
 
);
```

**Code Explanation**:

1. Open data table;
2. Create new JMP Live Map content.
3. Create new JMP Live Data content for Big Class.jmp.
4. Attempt to publish content1 and content2.
5. Check for exceptions during publishing.
6. Attempt to publish content1 and content3.
7. Check for exceptions during publishing.
8. Attempt to publish content1, content2, and content4.
9. Check for exceptions during publishing.
10. Concatenate exception messages if they exist.



