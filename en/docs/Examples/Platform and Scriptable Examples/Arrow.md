# Arrow

## Arrow using New Window
### Example 1
> **Summary**: Visualizes a picture with ovals and text labels, creating a new window with suppressed axes in Graph Box.

<!-- Keywords: #JMPScriptingLanguage, #GraphBox, #PictureVisualization, #NewWindow, #SuppressAxes -->

**Code**:
```jsl
// Picture
// Open data table
dt = Open("data_table.jmp");
// Picture
New Window( :Picture Window Title,
	Graph Box(
		Suppress Axes,
		Oval( 10, 70, 30, 25 );
		Text( {18, 45}, "A" );
		Oval( 40, 70, 60, 25 );
		Text( {48, 45}, "B" );
		Oval( 70, 70, 90, 25 );
		Text( {78, 45}, "C" );
		Arrow( {30, 50}, {40, 50} );
		Arrow( {60, 50}, {70, 50} );
		Text( {32, 60}, "k1" );
		Text( {62, 60}, "k2" );
		Text( {5, 90}, :Picture Text 1 );
		Text( {5, 15}, :Picture Text 2 );
		Text( {5, 5}, :Picture Text 3 );
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create new window.
3. Suppress axes in graph box.
4. Draw oval at position (10, 70).
5. Label oval with "A".
6. Draw oval at position (40, 70).
7. Label oval with "B".
8. Draw oval at position (70, 70).
9. Label oval with "C".
10. Draw arrows between ovals with labels "k1" and "k2".



### Example 2
> **Summary**: Visualizes a reaction kinetics model with adjustable parameters k1 and k2, using a Graph Box to illustrate the relationships between A, B, and C.

<!-- Keywords: #JSLScriptingLanguage, #GraphBox, #ReactionKinetics, #ModelVisualization, #ParameterAdjustment -->

**Code**:
```jsl
// Picture of Reaction
// Open data table
dt = Open("data_table.jmp");
// Picture of Reaction
New Window(
	"Kinetics, from Box and Draper",
	Graph Box(
		Fill Color(
			RGB Color( 180, 190, 240 )
		);
		Oval( 10, 70, 30, 25, 1 );
		Text( {18, 45}, "A" );
		Fill Color(
			RGB Color( 170, 240, 190 )
		);
		Oval( 40, 70, 60, 25, 1 );
		Text( {48, 45}, "B" );
		Fill Color(
			RGB Color( 230, 190, 190 )
		);
		Oval( 70, 70, 90, 25, 1 );
		Fill Color( 0 );
		Text( {78, 45}, "C" );
		Arrow( {30, 50}, {40, 50} );
		Arrow( {60, 50}, {70, 50} );
		Text( {32, 60}, "k1" );
		Text( {62, 60}, "k2" );
		Text(
			{5, 90},
			"Objective: Maximize B"
		);
		Text(
			{5, 15},
			"Reaction rates k1,k2"
		);
		Text(
			{5, 5},
			"functions of temperature, time"
		);
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create new window.
3. Set window title.
4. Add graph box.
5. Set fill color.
6. Draw oval for A.
7. Add text for A.
8. Change fill color.
9. Draw oval for B.
10. Add text for B.



