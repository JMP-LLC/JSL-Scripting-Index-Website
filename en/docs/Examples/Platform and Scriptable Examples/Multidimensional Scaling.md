# Multidimensional Scaling

### Example 1
> **Summary**: Runs a multidimensional scaling analysis to visualize the proximity of cities, utilizing Weiszfeld's algorithm and setting initial portion and dimensions.

<!-- Keywords: #MultidimensionalScaling, #WeiszfeldsAlgorithm, #JMPScriptingLanguage, #DataVisualization, #GeographicAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Multidimensional Scaling(
	Y(
		:Birmingham, :Boston, :Buffalo, :Chicago, :Cleveland, :Dallas, :Denver, :Detroit, :El Paso, :Houston, :Indianapolis, :Kansas City,
		:Los Angeles, :Louisville, :Memphis, :Miami, :Minneapolis, :New Orleans, :New York, :Omaha, :Philadelphia, :Phoenix, :Pittsburgh,
		:St. Louis, :Salt Lake City, :San Francisco, :Seattle, :Washington DC
	),
	Show Coordinates( 1 ),
	Show Proximity( 1 ),
	Waern Links( "Smallest Portion", 0.33, 1 ),
	Set Dimensions( 3 )
);
```

**Code Explanation**:

1. Open data_table data
2. Perform multidimensional scaling.
3. Select multiple city columns.
4. Display coordinates.
5. Display proximity.
6. Apply Weiszfeld's algorithm.
7. Set initial portion.
8. Set maximum iterations.
9. Specify dimensions.
10. Execute analysis.



### Example 2
> **Summary**: Generates a 3D Multidimensional Scaling plot from data table variables, displaying coordinates and proximity, with customizable warning links and dimension selection.

<!-- Keywords: #JMPScriptingLanguage, #MultidimensionalScaling, #DataVisualization, #CustomizationOptions, #InteractivePlotting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Multidimensional Scaling(
	Y( 2 :: 29 ),
	Show Coordinates( 1 ),
	Show Proximity( 1 ),
	Name( "3D Plot" )(1),
	Waern Links( "Smallest Portion", 0.33, 0 ),
	Set Dimensions( 3 ),
	Select Dimension( 3, 2 )
);
rpt = obj << Report();
actComboBox1 = rpt[Outline Box( "Multidimensional Scaling Plot" )][Combo Box( 1 )] << Get();
actComboBox2 = rpt[Outline Box( "Multidimensional Scaling Plot" )][Combo Box( 2 )] << Get();
```

**Code Explanation**:

1. Open data table.
2. Launch Multidimensional Scaling.
3. Specify variables 2 to 29.
4. Display coordinates.
5. Display proximity.
6. Enable 3D plot.
7. Set warning links.
8. Set dimensions to 3.
9. Select dimensions 3 and 2.
10. Retrieve combo box values.



### Example 3
> **Summary**: Process of performing Multidimensional Scaling on a data table, generating a 3D plot with coordinates and proximity information, and capturing a picture of the result.

<!-- Keywords: #MultidimensionalScaling, #JMPScriptingLanguage, #DataVisualization, #Plotting, #PictureCapture -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Multidimensional Scaling(
	Y( 2 :: 29 ),
	Show Coordinates( 1 ),
	Show Proximity( 1 ),
	Name( "3D Plot" )(1),
	Waern Links( "Smallest Portion", 0.33, 0 ),
	Transformation( "Ratio" ),
	Set Dimensions( 4 )
);
rpt = obj << Report;
rpt[Outline Box( "Multidimensional Scaling Plot" )][Combo Box( 1 )] << Set( 3 );
thepic1 = rpt[Outline Box( "Multidimensional Scaling Plot" )][Picture Box( 1 )] << GetPicture;
x = Log Capture( obj2 = obj << Redo Analysis( 1 ) );
secondrpt = Current Report();
thepic2 = secondrpt[Outline Box( "Multidimensional Scaling Plot" )][Picture Box( 1 )] << GetPicture;
```

**Code Explanation**:

1. Open data table.
2. Perform Multidimensional Scaling.
3. Display coordinates and proximity.
4. Enable 3D plot option.
5. Set warning links parameters.
6. Apply ratio transformation.
7. Set dimensions to 4.
8. Generate initial report.
9. Change combo box selection.
10. Capture first picture.



### Example 4
> **Summary**: Creates and analyzes a multidimensional scaling object from a data table, generating a report and saving coordinates for further exploration.

<!-- Keywords: #MultidimensionalScaling, #DataAnalysis, #JMPScriptingLanguage, #DimensionalityReduction, #Visualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Multidimensional Scaling(
	Y( :Top incisors, :Bottom incisors, :Top canines, :Bottom canines, :Top premolars, :Bottom premolars, :Top molars, :Bottom molars ),
	Waern Links( "Smallest Portion", 0.33, 0 ),
	Data Format( "Attribute List" ),
	Set Dimensions( 1 )
);
rpt = obj << report;
obj << Save Coordinates;
actDim1 = Column( dt, "Dimension 1" ) << get as matrix;
actDistance = [];
For( i = 1, i <= N Rows( actDim1 ), i++,
	For( j = i + 1, j <= N Rows( actDim1 ), j++,
		distancecalc = Sqrt( (actDim1[j] - actDim1[i]) ^ 2 );
		actDistance = V Concat( actDistance, distancecalc );
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create multidimensional scaling object.
3. Specify variables for analysis.
4. Configure Waern Links method.
5. Set data format to attribute list.
6. Define dimensions for analysis.
7. Generate report from object.
8. Save coordinates to dataset.
9. Extract Dimension 1 values.
10. Calculate distances between points.



### Example 5
> **Summary**: Runs a multidimensional scaling analysis to visualize geographic relationships between cities, utilizing the Multidimensional Scaling platform in JMP.

<!-- Keywords: #JMPScriptingLanguage, #MultidimensionalScaling, #GeographicAnalysis, #DataVisualization, #Integration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Multidimensional Scaling(
	Y(
		:Birmingham, :Boston, :Buffalo, :Chicago, :Cleveland, :Dallas, :Denver, :Detroit, :El Paso, :Houston, :Indianapolis, :Kansas City,
		:Los Angeles, :Louisville, :Memphis, :Miami, :Minneapolis, :New Orleans, :New York, :Omaha, :Philadelphia, :Phoenix, :Pittsburgh,
		:St. Louis, :Salt Lake City, :San Francisco, :Seattle, :Washington DC
	)
);
rpt = Current Report();
box = rpt[Outline Box( "2D Multidimensional Scaling" )];
```

**Code Explanation**:

1. Open data table.
2. Perform multidimensional scaling analysis.
3. Retrieve current report object.
4. Access 2D Multidimensional Scaling outline box.



## Multidimensional Scaling using Log Capture
### Example 1
> **Summary**: Configures a multidimensional scaling analysis to visualize distances between cities, utilizing Log Capture and Data Format settings.

<!-- Keywords: #JMPScriptingLanguage, #MultidimensionalScaling, #DataFormat, #LogCapture, #DistanceMatrix -->

**Code**:
```jsl
Open("data_table.jmp");
dtfrmt = Log Capture(
	Multidimensional Scaling(
		Y( :Birmingham, :Boston, :Buffalo, :Chicago, :Cleveland, :Dallas, :Denver, :Detroit ),
		Data Format( "Distance Matrix" )
	)
);
dtfrmtexp = Collapse Whitespace( "
The data format is not Distance Matrix and is set to Attribute List.
" );
```

**Code Explanation**:

1. Open data table.
2. Log capture starts.
3. Initiate multidimensional scaling.
4. Set data format to distance matrix.
5. Specify Y variables for analysis.
6. Log capture ends.
7. Collapse whitespace in log.
8. Store result in dtfrmtexp variable.



### Example 2
> **Summary**: Process of capturing log output, performing multidimensional scaling with a distance matrix format, and comparing expected output while collapsing whitespace in the log.

<!-- Keywords: #JSLScriptingLanguage, #MultidimensionalScaling, #DistanceMatrixFormat, #LogCapture, #WhitespaceCollapse -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dtfrmt = Log Capture(
	Multidimensional Scaling(
		Y( :Birmingham, :Boston, :Buffalo, :Chicago, :Cleveland, :Dallas, :Denver, :Detroit ),
		Data Format( "Distance Matrix" )
	)
);
dtfrmtexp = Collapse Whitespace( "
The data format is not Distance Matrix and is set to Attribute List.
" );
```

**Code Explanation**:

1. Open data_table data
2. Capture log output.
3. Perform multidimensional scaling.
4. Specify distance matrix format.
5. Compare expected output.
6. Collapse whitespace in log.
7. Store result in variable.
8. Define expected message.
9. Check if actual matches expected.
10. Output comparison result.



### Example 3
> **Summary**: Process of performing multidimensional scaling analysis on a selected data table row, capturing log output, and retrieving the current report with MDS results.

<!-- Keywords: #MultidimensionalScaling, #JSLScriptingLanguage, #DataAnalysis, #ReportGeneration, #LogCapture -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << select rows( [28] );
dt << Hide and Exclude;
x = Log Capture(
	Multidimensional Scaling(
		Y(
			:Birmingham, :Boston, :Buffalo, :Chicago, :Cleveland, :Dallas, :Denver, :Detroit, :El Paso, :Houston, :Indianapolis,
			:Kansas City, :Los Angeles, :Louisville, :Memphis, :Miami, :Minneapolis, :New Orleans, :New York, :Omaha, :Philadelphia,
			:Phoenix, :Pittsburgh, :St. Louis, :Salt Lake City, :San Francisco, :Seattle, :Washington DC
		)
	)
);
rpt = Current Report();
box = rpt[Outline Box( "2D Multidimensional Scaling" )];
```

**Code Explanation**:

1. Open data table;
2. Select specific row.
3. Hide and exclude selected row.
4. Perform multidimensional scaling analysis.
5. Capture log output.
6. Retrieve current report.
7. Access outline box for MDS results.



