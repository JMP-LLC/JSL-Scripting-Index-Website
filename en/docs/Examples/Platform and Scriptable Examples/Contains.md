# Contains

## Contains using Window
> **Summary**: Process of opening a private data table, retrieving its name, and checking if it matches a window title.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManagement, #WindowHandling, #PrivateData, #JMPScripting -->

**Code**:
```jsl
dt = Open( "$SAMPLE_DATA/data_table.jmp", private );
thisTitle = dt << Get Name;
testWins = Window() << Get Window Title;
testThisWin = Contains( testWins, thisTitle );
```

**Code Explanation**:

1. Open data table;
2. Set dataset to private.
3. Retrieve dataset name.
4. Get all window titles.
5. Check if dataset title is in window titles.



## Contains using Try
> **Summary**: Process of opening a private data table, retrieving its name, and checking if it matches the current window title.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManagement, #WindowTitleVerification, #PrivateDataAccess, #ErrorHandling -->

**Code**:
```jsl
dt = Open( "$SAMPLE_DATA/data_table.jmp", "private" );
thisTitle = dt << Get Name;
testWins = Try( Get Window List() << Get Window Title, Window() << Get Window Title );
testThisWin = Contains( testWins, thisTitle );
```

**Code Explanation**:

1. Open data table;
2. Set dataset to private.
3. Retrieve dataset name.
4. Get list of window titles.
5. Handle potential errors in getting window titles.
6. Attempt to get current window title.
7. Check if dataset name is in window titles list.
8. Assign result to testThisWin variable.



## Contains using If
> **Summary**: Executes a Structural Equation Modeling (SEM) script in JMP Pro, configuring path diagram properties to hide covariances, equality constraints, and loadings while showing means and variances.

<!-- Keywords: #JMPPro, #SEM, #PathDiagram, #DataAnalysis, #Scripting -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ),
	Names Default To Here( 1 );
	dt = Open("data_table.jmp");
	obj = dt << Run Script( "SEM: Bollen (1989)" );
	obj << Path Diagram Properties( Show Covariances( 0 ) );
	obj << Path Diagram Properties( Show Equality Constraints( 0 ) );
	obj << Path Diagram Properties( Show Estimates( "None" ) );
	obj << Path Diagram Properties( Show Loadings( 0 ) );
	obj << Path Diagram Properties( Show Means( 1 ) );
	obj << Path Diagram Properties( Show Regressions( 0 ) );
	obj << Path Diagram Properties( Show Variances( 0 ) );
);
```

**Code Explanation**:

1. Check if JMP Pro is installed.
2. Set default name scope.
3. Open data table.
4. Run SEM script.
5. Hide covariances in path diagram.
6. Hide equality constraints.
7. Set estimate display to none.
8. Hide loadings.
9. Show means.
10. Hide regressions.
11. Hide variances.



