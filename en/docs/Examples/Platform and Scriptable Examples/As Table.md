# As Table

## As Table using For
> **Summary**: Generates a table with a specific pattern of ones, utilizing a For loop to populate the matrix and then converting it to a table.

<!-- Keywords: #JSLScriptingLanguage, #MatrixOperations, #TableConversion, #LoopControl, #DataManipulation -->

**Code**:
```jsl
// 
d = J( 81, 81, 0 );
 
For( i = 1, i <= 81, i++,
	d[i, 1 :: i] = 1
);
 
As Table( d[0, 2 :: 80] );
```

**Code Explanation**:

1. Initialize 81x81 matrix `d`.
2. Loop through rows 1 to 81.
3. Set diagonal and lower triangle to 1.
4. Convert matrix `d` to table.
5. Exclude first row from table.
6. Exclude first column from table.
7. Display resulting table.



## As Table using New Window
> **Summary**: Creates and configures new windows with column list boxes and filter column selectors, demonstrating data retrieval and interactive filtering capabilities in JMP.

<!-- Keywords: #JMPScriptingLanguage, #DataRetrieval, #InteractiveFiltering, #ColumnListBox, #FilterColumnSelector -->

**Code**:
```jsl
dt = Open("data_table.jmp");
myitems = dt << get column names( string );
nw1 = New Window( "Col List Box Example", Col List Box( all, width( 250 ), maxSelected( 1 ) ), fontobj = lb = Col List Box() );
lb << Set Items( myitems );
lb << Get Items;
 
nw2 = New Window( "Filter Col Selector Example", fontobj = lb = Filter Col Selector( width( 250 ) ) );
myend = Tick Seconds();
Close( dt, nosave );
nw1 << close window;
nw2 << close window;
n = 20;
p = 10000;
dt1 = As Table( (J( n / 2, 1, 0 ) |/ J( n / 2, 1, 1 )) || J( n, p, Random Normal() ) );
mystart1 = Tick Seconds();
myitems = dt1 << get column names( string );
nw1 = New Window( "Col List Box Example", Col List Box( all, width( 250 ), maxSelected( 1 ) ), fontobj = lb = Col List Box() );
lb << Set Items( myitems );
lb << Get Items;
myend1 = Tick Seconds();
mystart2 = Tick Seconds();
nw2 = New Window( "Filter Col Selector Example", fontobj = lb = Filter Col Selector( width( 250 ) ) );
myend2 = Tick Seconds();
Close( dt1, nosave );
nw1 << close window;
nw2 << close window;
 
n = 20;
p = 100000;
dt1 = As Table( (J( n / 2, 1, 0 ) |/ J( n / 2, 1, 1 )) || J( n, p, Random Normal() ) );
mystart1 = Tick Seconds();
myitems = dt1 << get column names( string );
nw1 = New Window( "Col List Box Example", Col List Box( all, width( 250 ), maxSelected( 1 ) ), fontobj = lb = Col List Box() );
lb << Set Items( myitems );
lb << Get Items;
myend1 = Tick Seconds();
mystart2 = Tick Seconds();
nw2 = New Window( "Filter Col Selector Example", fontobj = lb = Filter Col Selector( width( 250 ) ) );
myend2 = Tick Seconds();
Close( dt1, nosave );
nw1 << close window;
```

**Code Explanation**:

1. Open data table.
2. Retrieve column names.
3. Create new window with column list box.
4. Set items in column list box.
5. Get items from column list box.
6. Create new window with filter column selector.
7. Record end time.
8. Close data table without saving.
9. Close windows.
10. Repeat steps 1-9 with different data sizes.



## As Table using Tick Seconds
> **Summary**: Creates and configures two windows with a column list box and filter col selector in JMP, utilizing data table operations and timing measurements.

<!-- Keywords: #JMPScriptingLanguage, #DataVisualization, #WindowCreation, #ColumnListbox, #FilterColSelector -->

**Code**:
```jsl
mystart = Tick Seconds();
dt = Open("data_table.jmp");
myitems = dt << get column names( string );
nw1 = New Window( "Col List Box Example", Col List Box( all, width( 250 ), maxSelected( 1 ) ), fontobj = lb = Col List Box() );
lb << Set Items( myitems );
lb << Get Items;
 
nw2 = New Window( "Filter Col Selector Example", fontobj = lb = Filter Col Selector( width( 250 ) ) );
myend = Tick Seconds();
Close( dt, nosave );
nw1 << close window;
nw2 << close window;
n = 20;
p = 10000;
dt1 = As Table( (J( n / 2, 1, 0 ) |/ J( n / 2, 1, 1 )) || J( n, p, Random Normal() ) );
mystart1 = Tick Seconds();
myitems = dt1 << get column names( string );
nw1 = New Window( "Col List Box Example", Col List Box( all, width( 250 ), maxSelected( 1 ) ), fontobj = lb = Col List Box() );
lb << Set Items( myitems );
lb << Get Items;
myend1 = Tick Seconds();
mystart2 = Tick Seconds();
nw2 = New Window( "Filter Col Selector Example", fontobj = lb = Filter Col Selector( width( 250 ) ) );
myend2 = Tick Seconds();
Close( dt1, nosave );
nw1 << close window;
nw2 << close window;
 
n = 20;
p = 100000;
dt1 = As Table( (J( n / 2, 1, 0 ) |/ J( n / 2, 1, 1 )) || J( n, p, Random Normal() ) );
mystart1 = Tick Seconds();
myitems = dt1 << get column names( string );
nw1 = New Window( "Col List Box Example", Col List Box( all, width( 250 ), maxSelected( 1 ) ), fontobj = lb = Col List Box() );
lb << Set Items( myitems );
lb << Get Items;
myend1 = Tick Seconds();
mystart2 = Tick Seconds();
nw2 = New Window( "Filter Col Selector Example", fontobj = lb = Filter Col Selector( width( 250 ) ) );
myend2 = Tick Seconds();
Close( dt1, nosave );
nw1 << close window;
nw2 << close window;
```

**Code Explanation**:

1. Start timer.
2. Open data table.
3. Get column names.
4. Create new window.
5. Add column list box.
6. Set list box items.
7. Get selected items.
8. Create another window.
9. Add filter column selector.
10. Close data table.
11. Close windows.
12. Define variables n, p.
13. Create new data table.
14. Start timer.
15. Get column names.
16. Create new window.
17. Add column list box.
18. Set list box items.
19. Get selected items.
20. End timer.
21. Create another window.
22. Add filter column selector.
23. End timer.
24. Close data table.
25. Close windows.
26. Redefine variables n, p.
27. Create new data table.
28. Start timer.
29. Get column names.
30. Create new window.
31. Add column list box.
32. Set list box items.
33. Get selected items.
34. End timer.
35. Create another window.
36. Add filter column selector.
37. End timer.
38. Close data table.
39. Close windows.



> **Summary**: Creates a new table from columns 1 to 2 in a data table, utilizing the As Table function.

<!-- Keywords: #JSLScriptingLanguage, #DataManipulation, #TableCreation, #ColumnSelection, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt2 = As Table( 1 :: 2 );
```

**Code Explanation**:

1. Open data table;
2. Create new table from columns 1 to 2.



