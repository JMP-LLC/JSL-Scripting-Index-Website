# Name

## Name using Chart
### Example 1
> **Summary**: Creates a bar chart to visualize two variables, 'Humid1:PM' and 'Humid4:PM', using the Open() function to access the data table.

<!-- Keywords: #JMPScriptingLanguage, #BarChart, #DataTable, #Visualization, #ChartObject -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Chart( Y( :Name( "Humid1:PM" ), :Name( "Humid4:PM" ) ), Bar Chart( 1 ) );
```

**Code Explanation**:

1. Open data table;
2. Create chart object.
3. Set Y variables.
4. Configure bar chart type.



### Example 2
> **Summary**: Creates a line chart to visualize two variables, 'Humid1:PM' and 'Humid4:PM', with date as the X-axis variable.

<!-- Keywords: #JMPScriptingLanguage, #LineChart, #DataTable, #ChartObject, #X-YAxis -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Chart( X( :date ), Y( :Name( "Humid1:PM" ), :Name( "Humid4:PM" ) ), Line Chart( 1 ) );
```

**Code Explanation**:

1. Open table.
2. Create chart object.
3. Set X axis variable.
4. Add Y axis variables.
5. Apply line chart style.



### Example 3
> **Summary**: Creates a bar chart to visualize the percentage distribution of 'age' by 'sex', with horizontal orientation and labeled bars.

<!-- Keywords: #JMPScriptingLanguage, #BarChart, #DataVisualization, #ReportGeneration, #InteractiveAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
bar = Chart( X( :sex ), Y( Name( "% of Total" )(:age) ), Horizontal( 1 ), Label by Percent of Total Values, Show Labels, Bar Chart( 1 ), );
rpt = bar << report;
```

**Code Explanation**:

1. Open data table.
2. Create a bar chart.
3. Set X-axis to "sex".
4. Set Y-axis to "% of Total(age)".
5. Enable horizontal orientation.
6. Label bars by percent of total values.
7. Display labels on bars.
8. Use bar chart type.
9. Generate report from chart.
10. Assign report to variable "rpt".



### Example 4
> **Summary**: Creates a bar chart to visualize the distribution of height by age, with the percentage of total height displayed on the y-axis.

<!-- Keywords: #JMPScriptingLanguage, #BarChart, #DataVisualization, #GroupingVariable, #CustomY-Axis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
bchart = Chart( Grouping( :age ), X( :height ), Y( Name( "% of Total" )(:height) ), Bar Chart( 1 ) );
```

**Code Explanation**:

1. Open data table;
2. Create a chart object.
3. Set grouping variable to age.
4. Set X-axis to height.
5. Set Y-axis to % of Total(height).
6. Display as bar chart.
7. End script.



## Set Name 
### Example 1
> **Summary**: Opens and renames a data table in JMP.

<!-- Keywords: #JMPScriptingLanguage, #DataTableManagement, #TableRenaming, #JSLCodeSnippet, #JMPDataManipulation -->

**Code**:
```jsl
dt1 = Open("data_table.jmp");
dt1 << Set Name( "Students1" );
```

**Code Explanation**:

1. Open data table.
2. Rename table to Students1.



### Example 2
> **Summary**: Opens and renames a data table to 'Flower' in JMP.

<!-- Keywords: #JMPScriptingLanguage, #DataTableManagement, #RenameDataTable, #JSLScripting, #DataAnalysis -->

**Code**:
```jsl
dt1 = Open("data_table.jmp");
dt1 << Set Name( "Flower" );
```

**Code Explanation**:

1. Open data table;
2. Rename dataset to Flower.



### Example 3
> **Summary**: Opens and renames data tables in JMP, allowing for efficient management of datasets.

<!-- Keywords: #JMPScriptingLanguage, #DataTableManagement, #ScriptAutomation, #JMPDataHandling, #TableRenaming -->

**Code**:
```jsl
dt1 = Open("data_table.jmp");
dt1 << Set Name( "Flower" );
dt2 = Open("data_table.jmp");
dt2 << Set Name( "Best Class" );
```

**Code Explanation**:

1. Open data table.
2. Rename data table to "Flower".
3. Open data table.
4. Rename data table to "Best Class".



### Example 1
> **Summary**: Runs the subscription and unsubscription to column rename events in a JMP data table, utilizing the `subscribe` and `unsubscribe` functions.

<!-- Keywords: #JMPScriptingLanguage, #DataTableManagement, #ColumnRenameEvent, #SubscriptionManagement, #JSLAutomation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
x = dt << subscribe( "abc", on column rename( renameNotify ) );
w = dt << unsubscribe( x, on column rename );
```

**Code Explanation**:

1. Open data table.
2. Subscribe to column rename event.
3. Define rename notify function.
4. Unsubscribe from column rename event.



### Example 2
> **Summary**: Opens and renames three JMP data tables, utilizing the Open() function to access datasets.

<!-- Keywords: #JMPScriptingLanguage, #DataTableManagement, #RenamingDatasets, #ScriptAutomation, #JMPDataAccess -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt2 = Open( "$SAMPLE_DATA/Baseball.jmp", invisible );
dt3 = Open( "$SAMPLE_DATA/Car Poll.jmp", private );
dt << set name( "Best Class" );
dt2 << set name( "Bball" );
dt3 << set name( "Poll of Cars" );
```

**Code Explanation**:

1. Open data table 1;
2. Open data table 2;
3. Open data table 3;
4. Rename data_table1 dataset.
5. Rename data_table2 dataset.
6. Rename data_table3 dataset.



### Example 3
> **Summary**: Opens and renames a data table in JMP, setting its name to 'data_table Dup'.

<!-- Keywords: #JMPScriptingLanguage, #DataTableManagement, #RenamingDataTables, #JSLCodeSnippet, #JMP -->

**Code**:
```jsl
dt1 = Open("data_table.jmp");
dt1 << set name( "data_table Dup" );
```

**Code Explanation**:

1. Open data table;
2. Rename dataset to "data_table Dup".



### Example 4
> **Summary**: Runs the linking of two data tables, setting a link reference property and enabling auto-open for efficient data analysis.

<!-- Keywords: #JSLScriptingLanguage, #DataTableLinking, #LinkReferenceProperty, #Auto-OpenFeature, #JMPDataAnalysis -->

**Code**:
```jsl
dt1 = Open("data_table1.jmp");
dt2 = Open("data_table2.jmp");
dt2:Name( "Unique Subject Identifier" ) << Set Property(
	"Link Reference",
	{Reference Table( dt1 ), Options( "Use Linked Column Name"(1), "Auto Open"(1) )}
);
```

**Code Explanation**:

1. Open data table 1;
2. Open data table 2;
3. Set link reference property.
4. Use linked column name.
5. Auto open linked table.



### Example 5
> **Summary**: Runs the linking of data tables in JMP, establishing a reference table and setting link references for two additional data tables.

<!-- Keywords: #JMPScriptingLanguage, #DataTableLinking, #ReferenceTables, #LinkReferences, #JMPDataManagement -->

**Code**:
```jsl
dt1 = Open("data_table.jmp");
dt2 = Open("data_table.jmp");
dt2:Name( "Unique Subject Identifier" ) << Set Property(
	"Link Reference",
	{Reference Table( dt1 ), Options( "Use Linked Column Name"(1), "Auto Open"(1) )}
);
dt3 = Open("data_table.jmp");
dt3:Name( "Unique Subject Identifier" ) << Set Property( "Link Reference", {Reference Table( dt1 ), Options( "Auto Open"(1) )} );
```

**Code Explanation**:

1. Open data table;
2. Open data table;
3. Set link reference for "dt2".
4. Open data table;
5. Set link reference for "dt3".



### Example 6
> **Summary**: Opens and renames a data table, followed by retrieving scripts from it.

<!-- Keywords: #JSLScripting, #DataTableManagement, #ScriptRetrieval, #JMP, #DataAnalysis -->

**Code**:
```jsl
dt2 = Open("data_table.jmp");
dt2 << set name( "utBigClass" );
ut_expected = dt2 << get script;
```

**Code Explanation**:

1. Open data_table data
2. Rename data table.
3. Retrieve scripts from data table.



### Example 7
> **Summary**: Configures data table properties, including setting spec limits and selecting rows based on specific conditions.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManagement, #SpecLimitsConfiguration, #RowSelection, #ConditionalFiltering -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt:Name( "Pred Formula Trait1" ) << Set Property( "Spec Limits", {LSL( 22.5 )} );
dt:Name( "Pred Formula Trait2" ) << Set Property( "Spec Limits", {USL( 25.5 )} );
dt:Name( "Probability( Disease Status=1 )" ) << Set Property( "Spec Limits", {USL( 0.3 )} );
dt << Clear Select << Clear Row States;
dt << Select Where( :Father == 0 & :Mother == 0 & Row() <= 100 );
dt << Invert Row Selection << Exclude;
dt << Clear Select;
```

**Code Explanation**:

1. Open data table;
2. Set lower spec limit.
3. Set upper spec limit.
4. Set upper spec limit.
5. Clear row selection.
6. Select rows without parents.
7. Invert row selection.
8. Exclude selected rows.
9. Clear row selection.



### Example 8
> **Summary**: Runs data table operations by opening a file, assigning column names to a variable, deleting specified columns, and retrieving the remaining column names.

<!-- Keywords: #JSLScriptingLanguage, #DataTableOperations, #ColumnManagement, #JMP, #ScriptingAutomation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
xcol = {:Name( "age" ), :Name( "sex" ), :Name( "height" ), :Name( "weight" )};
dt << Delete Columns( xcol );
col_names = dt << Get Column Names();
```

**Code Explanation**:

1. Open data table.
2. Assign columns to variable.
3. Delete specified columns.
4. Retrieve column names.



## Name using Run Script
> **Summary**: Modifies font styles and sizes in a Bivariate report object, allowing for customization of the report's appearance.

<!-- Keywords: #JSLScriptingLanguage, #BivariateAnalysis, #ReportCustomization, #FontStyles, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
biv = dt << Run Script( "Bivariate" );
bivRep = Report( biv );
bivRep[Outline Box( 1 )] << Set Font Name( "Arial Black" );
bivRep[Outline Box( 2 )] << Set Font Style( "Italic" );
bivRep[Outline Box( 3 )] << Set Font Size( 20 );
bivRep[Outline Box( 4 )] << Set Font( "Arial Black", 20, "italic underline" );
bivRep[Outline Box( 1 )] << Set Title( "Test Font Change" );
biv2 = biv << Redo Analysis();
```

**Code Explanation**:

1. Open data table;
2. Run Bivariate analysis script.
3. Retrieve Bivariate report object.
4. Set first outline box font to Arial Black.
5. Set second outline box style to Italic.
6. Set third outline box size to 20.
7. Set fourth outline box font, size, and style.
8. Set first outline box title to "Test Font Change".
9. Redo Bivariate analysis.



## Name using Text
> **Summary**: Creates a bar chart to visualize age percentage distribution by sex, utilizing JMP's Chart platform.

<!-- Keywords: #JMPChart, #BarChart, #DataVisualization, #JSLScripting, #Automation -->

**Code**:
```jsl
cert_text = {Text( {0.568350626118068, 0.723826714801444}, Vert Center, "55.64%" ), Text(
	{0.455649373881932, 0.268953068592058},
	Vert Center,
	"44.36%"
)};
dt = Open("data_table.jmp");
bar = Chart( X( :sex ), Y( Name( "% of Total" )(:age) ), Horizontal( 1 ), Label by Percent of Total Values, Show Labels, Bar Chart( 1 ), );
rpt = bar << report;
```

**Code Explanation**:

1. Define certificate text.
2. Open data table;
3. Create bar chart.
4. Set X-axis to sex.
5. Set Y-axis to age percentage.
6. Enable horizontal orientation.
7. Label by percent of total values.
8. Show labels.
9. Use bar chart style.
10. Retrieve report object.



## Name using Delete Columns
> **Summary**: Deletes columns 'age', 'height', and 'weight' from a data table, then retrieves the remaining column names.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManagement, #ColumnDeletion, #DataRetrieval, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Delete Columns( {:Name( "name" ), :Name( "age" ), :Name( "sex" ), :Name( "height" ), :Name( "weight" )}[2 :: 5] );
col_names = dt << Get Column Names();
```

**Code Explanation**:

1. Open data table;
2. Delete columns "age" to "weight".
3. Retrieve remaining column names.



## Name using Window
> **Summary**: Runs the opening, renaming, and closing of a window in JMP.

<!-- Keywords: #JMPScriptingLanguage, #WindowHandler, #DataTable, #RenameDataset, #CloseWindow -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << setname( "Ding" );
myWin = Window( "Ding" );
myWin << closewindow();
```

**Code Explanation**:

1. Open data table;
2. Rename dataset to "Ding".
3. Create window named "Ding".
4. Close the "Ding" window.



