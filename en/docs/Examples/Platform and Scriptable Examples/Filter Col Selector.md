# Filter Col Selector

## Filter Col Selector using New Window
### Example 1
> **Summary**: Creates a new window with a filter column selector, allowing users to interactively select columns for analysis.

<!-- Keywords: #JMPScriptingLanguage, #FilterColumnSelector, #NewWindow, #InteractiveAnalysis, #DataExploration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
nw = New Window( "Filter Col Selector Example", lb = Filter Col Selector( width( 250 ) ) );
lb << Set Size( 300, 300 );
fSize = lb << Get Size;
lb << Set Size( 59, 59 );
fSize = lb << Get Size;
lb << Set Size( -1, -1 );
fSize = lb << Get Size;
lb << Set Size( {} );
fSize = lb << Get Size;
lb << Set Size( 80, 80 );
bsize = lb << get size;
lb << Set Size();
fSize = lb << Get Size;
```

**Code Explanation**:

1. Open data table.
2. Create new window.
3. Add filter column selector.
4. Set initial size.
5. Get current size.
6. Change size to small.
7. Get updated size.
8. Reset size to default.
9. Get default size.
10. Set size to empty.
11. Get empty size.
12. Set size to square.
13. Get final size.



### Example 2
> **Summary**: Runs the selection and filtering process in a new JMP window, utilizing a Filter Col Selector to dynamically update the maximum number of selected items.

<!-- Keywords: #JMPScriptingLanguage, #FilterColSelector, #NewWindow, #DataTable, #InteractiveFiltering -->

**Code**:
```jsl
dt = Open("data_table.jmp");
nw = New Window( "Filter Col Selector Example", lb = Filter Col Selector( width( 250 ) ) );
myVar = 2;
ms = lb << Get Max Selected;
lb << Set Max Selected();
lb << Set Max Selected( -1 );
ms = lb << Get Max Selected;
lb << Set Max Selected( 0 );
ms = lb << Get Max Selected;
lb << Set Max Selected( 10 );
ms = lb << Get Max Selected;
lb << Set Max Selected( myVar );
ms = lb << Get Max Selected;
lb << Set Max Selected( [1] );
nw << Close window;
```

**Code Explanation**:

1. Open data table;
2. Create new window.
3. Add filter column selector.
4. Initialize variable `myVar`.
5. Get max selected items.
6. Set max selected items to default.
7. Set max selected items to unlimited.
8. Get max selected items again.
9. Set max selected items to zero.
10. Get max selected items again.
11. Set max selected items to ten.
12. Get max selected items again.
13. Set max selected items to `myVar`.
14. Get max selected items again.
15. Set max selected items to one.
16. Close the window.



### Example 3
> **Summary**: Creates a new window with a Filter Column Selector, enabling and disabling selection, and capturing log events.

<!-- Keywords: #JMPScriptingLanguage, #FilterColumnSelector, #LogCapture, #WindowManagement, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
New Window( "Test Case 28", lb = Filter Col Selector( width( 250 ) ) );
lb << Set Selected( 3 );
lb << Enable( 0 );
lb << Set Selected( 5 );
lb << Enable( 1 );
lb << Set Selected( 3, 0 );
log = Trim( Log Capture( lb << Enable ) );
log = "1";
lb << Enable( 0 );
log = Trim( Log Capture( lb << Enable ) );
lb << Close Window;
```

**Code Explanation**:

1. Open data table;
2. Create new window named "Test Case 28".
3. Add Filter Column Selector.
4. Set selected column index 3.
5. Disable filter selector.
6. Set selected column index 5.
7. Enable filter selector.
8. Unselect column index 3.
9. Capture log of enabling selector.
10. Close the window.



### Example 4
> **Summary**: Creates a new window with a Filter Col Selector, allowing users to dynamically adjust the number of lines displayed.

<!-- Keywords: #JSLScriptingLanguage, #FilterColSelector, #NewWindow, #DataVisualization, #InteractiveFeatures -->

**Code**:
```jsl
dt = Open("data_table.jmp");
nw = New Window( "Col List Box Example", lb = Filter Col Selector( width( 250 ) ) );
lb << Set N Lines( 20 );
numLines = lb << Get Nlines;
numLines = lb << Get Nlines;
lb << Set N Lines( 0 );
numLines = lb << Get Nlines;
lb << Set N Lines( 5 );
numLines = lb << Get Nlines;
```

**Code Explanation**:

1. Open data table;
2. Create new window titled "Col List Box Example".
3. Add Filter Col Selector to window.
4. Set width of selector to 250.
5. Set number of lines to display to 20.
6. Retrieve number of lines displayed.
7. Retrieve number of lines displayed again.
8. Set number of lines to display to 0.
9. Retrieve number of lines displayed.
10. Set number of lines to display to 5.



