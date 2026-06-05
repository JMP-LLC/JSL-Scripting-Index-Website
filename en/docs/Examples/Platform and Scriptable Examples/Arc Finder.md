# Arc Finder

### Example 1
> **Summary**: This JSL script defines an Arc Finder function to identify arcs in a dataset, utilizing the Group By feature for Lot and Wafer. The script then visualizes the results using Graph Builder.

<!-- Keywords: #JMPScriptingLanguage, #ArcFinder, #GraphBuilder, #GroupBy, #DataVisualization -->

**Code**:
```jsl
// Arc Finder
Arc Finder(
	X( :Col ),
	Y( :Row ),
	Group( :Lot, :Wafer )
);
```

**Code Explanation**:

1. Define Arc Finder function.
2. Specify X column.
3. Specify Y column.
4. Group by Lot and Wafer.



### Example 2
> **Summary**: Runs the Arc Finder tool to identify optimal grouping and visualization of wafer data, utilizing Group() function and Graph Builder.

<!-- Keywords: #ArcFinder, #Grouping, #Visualization, #WaferData, #JMPScriptingLanguage -->

**Code**:
```jsl
// Arc Finder
Arc Finder(
	Group( :Wafer ID ),
	X( :LocX ),
	Y( :LocY ),
	Min Distance( 12 ),
	Min Radius( 35 ),
	Max Radius( 2000 ),
	Max Radius Error( 1 ),
	Min Arc Points( 5 ),
	Number of Searches( 500 ),
	Max Number Arcs( 4 )
);
```

**Code Explanation**:

1. Launch Arc Finder tool.
2. Group data by Wafer ID.
3. Set X-axis variable to LocX.
4. Set Y-axis variable to LocY.
5. Define minimum distance as 12.
6. Set minimum radius to 35.
7. Set maximum radius to 2000.
8. Allow max radius error of 1.
9. Require at least 5 arc points.
10. Perform 500 searches.
11. Limit to 4 arcs.



### Example 3
> **Summary**: Runs the Arc Finder tool to identify optimal grouping and visualize wafer data using Graph Builder.

<!-- Keywords: #ArcFinder, #GraphBuilder, #JMPScriptingLanguage, #DataVisualization, #Optimization -->

**Code**:
```jsl
// Arc Finder 3000
Arc Finder(
	Group( :Wafer ID ),
	X( :LocX ),
	Y( :LocY ),
	Min Distance( 12 ),
	Min Radius( 35 ),
	Max Radius( 2000 ),
	Max Radius Error( 1 ),
	Min Arc Points( 5 ),
	Number of Searches( 3000 ),
	Max Number Arcs( 4 )
);
```

**Code Explanation**:

1. Launch Arc Finder tool.
2. Group data by Wafer ID.
3. Set X-axis variable to LocX.
4. Set Y-axis variable to LocY.
5. Define minimum distance as 12.
6. Set minimum radius to 35.
7. Set maximum radius to 2000.
8. Allow maximum radius error of 1.
9. Require at least 5 arc points.
10. Perform 3000 searches.
11. Limit to 4 maximum arcs.



