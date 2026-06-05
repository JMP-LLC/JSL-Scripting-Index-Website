# Col List Box

## Col List Box using New Window
### Example 1
> **Summary**: Creates a new window with multiple column list boxes, allowing users to select columns for analysis.

<!-- Keywords: #JSLScriptingLanguage, #ColumnListBoxes, #NewWindow, #DataAnalysis, #InteractiveVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
New Window( "Col List Box Example",
	H List Box(
		V List Box(
			clb = Col List Box( all, width( 250 ), maxSelected( 1 ) ),
			clb1 = Col List Box( all, width( 250 ), maxSelected( 1 ) ),
			clb2 = Col List Box( all, width( 250 ), maxSelected( 1 ) ),
			clb3 = Col List Box( all, width( 250 ), maxSelected( 1 ) ),
			clb4 = Col List Box( all, width( 250 ), maxSelected( 1 ) ),
			clb5 = Col List Box( all, width( 250 ), maxSelected( 1 ) ), 
		),
		Spacer Box( Size( 300, -1 ), Color( "Light Blue" ) )
	)
);
clb1 << Set Font Size( 13 );
clb2 << Set Width( 200 );
clb3 << Set Size( 200, 50 );
clb4 << Set Font Size( 13 );
clb4 << Set Width( 200 );
clb5 << Set Font Size( 13 );
```

**Code Explanation**:

1. Open table.
2. Create new window.
3. Add horizontal list box.
4. Add vertical list box.
5. Add column list box.
6. Add column list box.
7. Add column list box.
8. Add column list box.
9. Add column list box.
10. Adjust column list box properties.



### Example 2
> **Summary**: Creates a new window with multiple column list boxes, allowing for interactive selection and customization.

<!-- Keywords: #JSLScriptingLanguage, #ColumnListBox, #InteractiveAnalysis, #CustomizationOptions, #DataVisualization -->

**Code**:
```jsl
Names Default To Here( 1 );
dt = Open("data_table.jmp");
New Window( "Col List Box Example",
	H List Box(
		V List Box(
			clb = Col List Box( all, width( 250 ), maxSelected( 1 ) ),
			clb1 = Col List Box( all, width( 250 ), maxSelected( 1 ) ),
			clb2 = Col List Box( all, width( 250 ), maxSelected( 1 ) ),
			clb3 = Col List Box( all, width( 250 ), maxSelected( 1 ) ),
			clb4 = Col List Box( all, width( 250 ), maxSelected( 1 ) ),
			clb5 = Col List Box( all, width( 250 ), maxSelected( 1 ) ), 
		),
		Spacer Box( Size( 300, -1 ), Color( "Light Blue" ) )
	)
);
clb1 << Set Font Size( 13 );
clb2 << Set Width( 200 );
clb3 << Set Size( 200, 50 );
clb4 << Set Font Size( 13 );
clb4 << Set Width( 200 );
clb5 << Set Font Size( 13 );
clb5 << Set Size( 200, 50 );
```

**Code Explanation**:

1. Set default names scope.
2. Open data table;
3. Create new window.
4. Add horizontal list box.
5. Add vertical list box.
6. Create column list box clb.
7. Create column list box clb1.
8. Create column list box clb2.
9. Create column list box clb3.
10. Create column list box clb4.
11. Create column list box clb5.
12. Set font size for clb1.
13. Set width for clb2.
14. Set size for clb3.
15. Set font size for clb4.
16. Set width for clb4.
17. Set font size for clb5.
18. Set size for clb5.



### Example 3
> **Summary**: Creates a new window with a column list box, allowing users to select and visualize columns from a data table.

<!-- Keywords: #JMPScriptingLanguage, #ColumnListBox, #DataVisualization, #WindowManagement, #InteractiveAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
New Window( "Col List Box Example 1", clb = Col List Box( all, width( 250 ), maxSelected( 1 ) ) );
clb << Padding( 20 );
```

**Code Explanation**:

1. Open data table.
2. Create new window titled "Col List Box Example 1".
3. Add column list box to window.
4. Set list box to show all columns.
5. Set list box width to 250.
6. Limit selection to 1 item.
7. Apply padding of 20 units to list box.



### Example 4
> **Summary**: Creates a new window with a list box and column list box, configuring various settings such as width, height, padding, and margin.

<!-- Keywords: #JMPScriptingLanguage, #NewWindow, #Listbox, #ColumnListbox, #DataVisualization -->

**Code**:
```jsl
New Window( "Example",
	Panel Box( "List Box",
		lb = List Box(
			{"First Item", "This is a fairly long testing Second Item", "Third Item", "Fourth Item", "Fifth Item", "Sixth Item",
			"Seventh Item", "Eighth Item"},
			width( 200 ),
			max selected( 2 ),
			nlines( 6 )
		)
	)
);
lb << Padding( 20 );
lb << Margin( 20 );
dt = Open("data_table.jmp");
New Window( "Col List Box Example 1", clb = Col List Box( all, width( 250 ), maxSelected( 1 ) ) );
clb << Padding( 20 );
clb << Margin( 20 );
```

**Code Explanation**:

1. Create new window "Example".
2. Add panel box titled "List Box".
3. Insert list box with items.
4. Set list box width to 200.
5. Allow max 2 selections.
6. Set list box height to 6 lines.
7. Apply padding to list box.
8. Apply margin to list box.
9. Open data table.
10. Create new window "Col List Box Example 1".
11. Add column list box with all columns.
12. Set column list box width to 250.
13. Allow max 1 selection.
14. Apply padding to column list box.
15. Apply margin to column list box.



### Example 5
> **Summary**: Opens a data table and creation of a new window with an outline box and column list box, retrieving items from the column list box.

<!-- Keywords: #JSLScriptingLanguage, #DataVisualization, #JMP, #ColumnListBox, #OutlineBox -->

**Code**:
```jsl
dt = Open("data_table.jmp");
nw = New Window( "Test Case 1a", Outline Box( "Test", clb = Col List Box( all ) ) );
colItems = clb << get items;
```

**Code Explanation**:

1. Open data table;
2. Create new window titled "Test Case 1a".
3. Add outline box named "Test".
4. Insert column list box with all columns.
5. Retrieve items from column list box.



### Example 6
> **Summary**: Selects and processes columns in a JMP data table, creating two new windows with column list boxes that interactively select and run scripts.

<!-- Keywords: #JSLScriptingLanguage, #ColumnListbox, #InteractiveWindow, #ScriptExecution, #DataTableManipulation -->

**Code**:
```jsl
Open("data_table.jmp");
vartest = {};
New Window( "Test Case 1a", clb = Col List Box( all, Insert Into( vartest, clb << Get Selected Indices ) ) );
clb << Set Selected( 2, 1 );
clb << Set Selected( 3, 1, Run Script( 0 ) );
clb << Set Selected( 4, 1, Run Script( 1 ) );
clb << Close Window;
vartest = {};
New Window( "Test Case 1b",
	clb = Col List Box( all, <<Set Function( Function( {this}, {}, Insert Into( vartest, clb << Get Selected Indices ) ) ) )
);
clb << Set Selected( 2, 1 );
clb << Set Selected( 3, 1, Run Script( 0 ) );
clb << Set Selected( 4, 1, Run Script( 1 ) );
clb << Close Window;
```

**Code Explanation**:

1. Open data table.
2. Initialize empty list `vartest`.
3. Create new window "Test Case 1a".
4. Add column list box to window.
5. Select columns 2 and 1.
6. Select columns 3 and 1, run script 0.
7. Select columns 4 and 1, run script 1.
8. Close the window.
9. Reinitialize `vartest` as empty list.
10. Create new window "Test Case 1b" with set function.
11. Select columns 2 and 1.
12. Select columns 3 and 1, run script 0.
13. Select columns 4 and 1, run script 1.
14. Close the window.



### Example 7
> **Summary**: Runs the selection and enabling/disabling of columns in a Column List Box, capturing log messages for debugging purposes.

<!-- Keywords: #JSLScriptingLanguage, #ColumnListbox, #LogCapture, #Debugging, #InteractiveFeatures -->

**Code**:
```jsl
dt = Open("data_table.jmp");
log = "";
vartest = {};
New Window( "Test Case 3", clb = Col List Box( all, vartest = clb << Get Selected Indices ) );
clb << Set Selected( 2 );
clb << Enable( 0 );
clb << Set Selected( 3 );
clb << Enable( 1 );
clb << Set Selected( 2, 0 );
log = Trim( Log Capture( clb << Enable ) );
log = "1";
clb << Enable( 0 );
log = Trim( Log Capture( clb << Enable ) );
clb << Close Window;
```

**Code Explanation**:

1. Open data table.
2. Initialize log variable.
3. Initialize variable test.
4. Create new window.
5. Add column list box.
6. Select second column.
7. Disable column list box.
8. Select third column.
9. Enable column list box.
10. Deselect second column.



### Example 8
> **Summary**: Creates a column list box with various analysis types and data types, allowing for interactive exploration of data in JMP.

<!-- Keywords: #JSLScriptingLanguage, #ColumnListBox, #DataAnalysis, #InteractiveExploration, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
New Window( "S1262898", c = Col List Box() );
c << Set Analysis Type( "Any" );
c << Set Analysis Type( "Nominal" );
c << Set Analysis Type( "Ordinal" );
c << Set Analysis Type( "Continuous" );
c << Set Analysis Type( "Any" );
c << Set Data Type( "Any" );
c << Set Data Type( "Numeric" );
c << Set Data Type( "Character" );
c << Set Data Type( "Expression" );
c << Set Data Type( "Row State" );
c << close window;
```

**Code Explanation**:

1. Open data table;
2. Create new window.
3. Add column list box.
4. Set analysis type to Any.
5. Set analysis type to Nominal.
6. Set analysis type to Ordinal.
7. Set analysis type to Continuous.
8. Set analysis type to Any.
9. Set data type to Any.
10. Set data type to Numeric.
11. Set data type to Character.
12. Set data type to Expression.
13. Set data type to Row State.
14. Close window.



### Example 9
> **Summary**: Creates a new window with a column list box, appending specific columns and setting font styles.

<!-- Keywords: #JSLScriptingLanguage, #ColumnListbox, #FontStyles, #NewWindow, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
New Window( "Col List Box Example", Col List Box( all, width( 250 ), maxSelected( 1 ) ), lb = Col List Box() );
lb << append( "weight" );
lb << append( "height" );
lb << Set Base Font( "Title" );
tt = "Heading";
lb << Set Base Font( tt );
Small = "Mono";
lb << Set Base Font( Small );
lb << Set Base Font( "duh" );
lb << Set Base Font( 2 );
lb << Set Base Font();
lb << Set Base Font( . );
lb << Set Base Font( Empty() );
lb << Set Base Font( "text" );
lb << Set Base Font( "SMALL" );
lb << Set Base Font( "formula editor" );
lb << Set Base Font( "ANNOtatioN" );
lb << Set Base Font( "axiS" );
```

**Code Explanation**:

1. Open data table.
2. Create new window.
3. Add column list box.
4. Append "weight" to list box.
5. Append "height" to list box.
6. Set base font to "Title".
7. Define heading variable.
8. Set base font to heading.
9. Set base font to "Mono".
10. Set base font to "duh".



### Example 10
> **Summary**: Creates a column list box with font scaling and log capture in JMP.

<!-- Keywords: #JMPScriptingLanguage, #ColumnListBox, #FontScaling, #LogCapture, #InteractiveVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
New Window( "Col List Box Example", Col List Box( all, width( 250 ), maxSelected( 1 ) ), lb = Col List Box() );
lb << append( "weight" );
lb << append( "height" );
lb << Set Font Scale( 2 );
tt = .75;
lb << Set Font Scale( tt );
log = "";
log = Log Capture( lb << Set Font Scale( 0 ) );
log = "";
log = Log Capture( lb << Set Font Scale() );
log = "";
log = Log Capture( lb << Set Font Scale( . ) );
log = "";
log = Log Capture( lb << Set Font Scale( Empty() ) );
log = "";
log = Log Capture( lb << Set Font Scale( -5 ) );
lb << Set Font Scale( 1 );
```

**Code Explanation**:

1. Open data table.
2. Create new window.
3. Add column list box.
4. Append "weight" to list box.
5. Append "height" to list box.
6. Set font scale to 2.
7. Set font scale to 0.75.
8. Capture log of setting font scale.
9. Clear log.
10. Set font scale to 1.



### Example 11
> **Summary**: Selects and displays specific columns in a new window, utilizing a Column List Box to interactively filter data.

<!-- Keywords: #JMPScriptingLanguage, #ColumnListBox, #NewWindow, #DataTable, #InteractiveFiltering -->

**Code**:
```jsl
dt = Open("data_table.jmp");
New Window( "Test Case 7", ll = Col List Box( "all" ) );
ll << Set Selected( 2 );
ll << Set Selected( 3 );
ll << Close Window;
```

**Code Explanation**:

1. Open data table;
2. Create new window titled "Test Case 7".
3. Add column list box to window.
4. Set selected index to 2.
5. Set selected index to 3.
6. Close the window.



### Example 12
> **Summary**: Creates a new window with a column list box and filter column selector, allowing users to interactively select columns for analysis.

<!-- Keywords: #JSLScriptingLanguage, #NewWindow, #ColumnListBox, #FilterColumnSelector, #InteractiveAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
myitems = dt << get column names( string );
nw1 = New Window( "Col List Box Example", Col List Box( all, width( 250 ), maxSelected( 1 ) ), fontobj = lb = Col List Box() );
lb << Set Items( myitems );
lb << Get Items;
 
nw2 = New Window( "Filter Col Selector Example", fontobj = lb = Filter Col Selector( width( 250 ) ) );
myend = Tick Seconds();
```

**Code Explanation**:

1. Open data table;
2. Retrieve column names.
3. Create new window with column list box.
4. Set column list box items.
5. Get selected items from list box.
6. Create another new window.
7. Add filter column selector to window.
8. Capture end time.



## Col List Box using Define Tag
> **Summary**: Process of tagging string columns in a data table and displaying them in a column list box within a new window.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManagement, #ColumnListbox, #WindowCreation, #Tagging -->

**Code**:
```jsl
dt = Open( "$SAMPLE_DATA/data_table.jmp", Invisible );
dt << Define Tag( "Everything", Symbol( "ü•á" ) );
For Each( {col}, dt << Get Column Names( "String" ), Column( dt, col ) << Set Property( "Tags", {"Everything"} ) );
emojWin = New Window( "EmojiClippingIssue",
	<<Type( "Dialog" ),
	Col List Box( All, Width( 200 ), N Lines( 3 ), Max Selected( 1 ), <<Padding( 8 ), <<Margin( 24 ) )
);
cols = dt << get tagged columns( "Everything" );
emojWin << Close window;
```

**Code Explanation**:

1. Open data table;
2. Define "Everything" tag with ü•á symbol.
3. For each string column, set "Everything" tag.
4. Create new window EmojiClippingIssue.
5. Add dialog type to window.
6. Add column list box to window.
7. Retrieve columns tagged "Everything".
8. Close EmojiClippingIssue window.



