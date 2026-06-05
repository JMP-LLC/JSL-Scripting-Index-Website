# Empty

## Empty using Row
> **Summary**: Opens a data table, sets the row index to 12, and checks if the 'name' column is empty.

<!-- Keywords: #JSLScriptingLanguage, #DataTableOperations, #RowIndexing, #ColumnChecking, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt = Open("data_table.jmp");
Row() = 12;
x = Is Empty( dt:name );
```

**Code Explanation**:

1. Open data table;
2. Open data table;
3. Set row index to 12.
4. Check if column "name" is empty.



## Empty using New Window
### Example 1
> **Summary**: Runs font style settings for a Filter Column Selector in JMP, allowing users to customize the appearance of their data visualization.

<!-- Keywords: #JMPScriptingLanguage, #FontStyleSettings, #FilterColumnSelector, #DataVisualization, #Customization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
New Window( "Test Case 30", lb = Filter Col Selector( width( 250 ) ) );
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

1. Open data table;
2. Create new window titled "Test Case 30".
3. Add Filter Column Selector to window.
4. Set base font to "Title".
5. Set base font to "Heading".
6. Set base font to "Mono".
7. Set base font to "duh".
8. Set base font to number 2.
9. Reset base font to default.
10. Set base font to empty value.
11. Set base font to "text".
12. Set base font to "SMALL".
13. Set base font to "formula editor".
14. Set base font to "ANNOtatioN".
15. Set base font to "axiS".



### Example 2
> **Summary**: Creates a new window with a Filter Col Selector and font scaling adjustments, capturing log messages for each operation.

<!-- Keywords: #JMPScriptingLanguage, #NewWindow, #FilterColSelector, #FontScaling, #LogCapture -->

**Code**:
```jsl
dt = Open("data_table.jmp");
New Window( "Test Case 31", lb = Filter Col Selector( width( 250 ) ) );
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

1. Open data table;
2. Create new window "Test Case 31".
3. Add Filter Col Selector to window.
4. Set font scale to 2.
5. Initialize tt to 0.75.
6. Set font scale to tt.
7. Initialize log as empty string.
8. Capture log for setting font scale to 0.
9. Reset log to empty string.
10. Capture log for default font scale.
11. Reset log to empty string.
12. Capture log for setting font scale to .
13. Reset log to empty string.
14. Capture log for setting font scale to Empty().
15. Reset log to empty string.
16. Capture log for setting font scale to -5.
17. Set font scale to 1.



