# Scatterplot 3D

## Example 1
> **Summary**: Generate a 3d scatterplot

<!-- Keywords: #Scatterplot3D -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Amplitude 21.jmp");
// Scatterplot 3D
Scatterplot 3D( Y( :Amplitude, :x, :y ) );
```

## Example 2
> **Summary**: Generate a 3d scatterplot

<!-- Keywords: #Scatterplot3D -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Cowboy Hat Template.jmp");
// Scatterplot 3D
Scatterplot 3D( Y( :x, :y, :z ) );
```

## Example 3
> **Summary**: Generate a 3d scatterplot

<!-- Keywords: #Scatterplot3D -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Cowboy Hat.jmp");
// Scatterplot 3D
Scatterplot 3D( Y( :x, :y, :z ) );
```

## Example 4
> **Summary**: Generate a 3D scatterplot using the Earth.jmp dataset with customized display settings, including the Y coordinates for :x, :y, and :z, and adjusting the frame settings to remove walls, boxes, axes, and grids while setting a black background color and specific rotation angles.

<!-- Keywords: #Frame3D, #Scatterplot3D, #BackgroundColor, #SetAxes, #SetBox -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Earth.jmp");
// Scatterplot 3D
Scatterplot 3D(
	Y( :x, :y, :z ),
	Frame3D(
		Set Wall Color( 0 ),
		Set Box( 0 ),
		Set Axes( 0 ),
		Set Grids( 0 ),
		Set Walls( 0 ),
		Set Rotation( -76, -18, -88 ),
		Background Color( 0, 0, 0 )
	)
);
```

## Example 5
> **Summary**: Create a 3D scatterplot visualization for three different variables using the data from the Mail 3D dataset.

<!-- Keywords: #Scatterplot3D -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Mail  3D.jmp");
// Scatterplot 3D
Scatterplot 3D( Y( :c1, :c2, :c3 ) );
```

## Example 6
> **Summary**: Generate a 3D scatterplot displaying Age, Oxy, and Runtime variables from the Fitness 3D 2 dataset.

<!-- Keywords: #Scatterplot3D -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Fitness 3D 2.jmp");
// Scatterplot 3D
Scatterplot 3D(
	Y( :Age, :Oxy, :Runtime )
);
```

## Example 7
> **Summary**: Create a 3D scatterplot analyzing the relationship between Age, Oxy, and Runtime using the Fitness 3D dataset.

<!-- Keywords: #Scatterplot3D -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Fitness 3D.jmp");
// Scatterplot 3D
Scatterplot 3D(
	Y( :Age, :Oxy, :Runtime )
);
```

## Example 8
> **Summary**: Create a 3D scatterplot with dynamic coloring for surface quality and customized 3D frame settings.

<!-- Keywords: #Frame3D, #Scatterplot3D, #Coloring, #Legend, #SetGrabHandles -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Hardware Surface Unit Data.jmp");
// Scatterplot 3D
Scatterplot 3D(
	Y( :X, :Y, :Z ),
	Coloring( :surface quality ),
	Frame3D(
		Legend( 1 ),
		Set Grab Handles( 0 ),
		Set Rotation(
			-131.974910853295,
			-55.4597023094039,
			56.3897695048096
		)
	)
);
```

## Example 9
> **Summary**: Create a 3D scatterplot showing the relationship between sepal and petal dimensions in the Iris dataset.

<!-- Keywords: #Frame3D, #Scatterplot3D, #SetRotation -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Iris.jmp");
// Scatterplot 3D
Scatterplot 3D(
	Y(
		:Sepal length, :Sepal width,
		:Petal length, :Petal width
	),
	Frame3D(
		Set Rotation(
			-37.7763571468042,
			-20.0181349932962,
			0.755666043084993
		)
	)
);
```

## Example 10
> **Summary**: Title: Create a 3D Scatterplot with Normal Contour Ellipsoids and Nonparametric Density Contour for Different Species in the Penguins Dataset.

<!-- Keywords: #Frame3D, #Scatterplot3D, #Close, #Coloring, #GraphSize -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Penguins.jmp");
// Scatterplot 3D
Scatterplot 3D(
	Y(
		:Culmen Length, :Culmen Depth,
		:Flipper Length
	),
	Coloring( :Species ),
	Normal Contour Ellipsoids(
		1, :Species
	),
	Nonpar Density Contour( 1, :Species ),
	Legend( 1 ),
	Frame3D(
		Set Graph Size( 655, 672 ),
		Legend( 1 ),
		Set Grab Handles( 0 ),
		Set Rotation(
			-72.1900689453449,
			-1.75327107936844,
			34.4563606108469
		)
	),
	SendToReport(
		Dispatch( {},
			"Density Contour Controls",
			OutlineBox,
			{Close( 1 )}
		)
	)
);
```

## Example 11
> **Summary**: Create a 3D scatterplot with coordinates from the X, Y, and Max °F Jan columns in the Pollutants Map data table.

<!-- Keywords: #Frame3D, #Scatterplot3D, #SetGrabHandles, #SetRotation -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Pollutants Map.jmp");
// Scatterplot 3D
Scatterplot 3D(
	Y( :X, :Y, :Max °F Jan ),
	Frame3D(
		Set Grab Handles( 0 ),
		Set Rotation(
			24.1937619852405,
			-39.6864960978558,
			-7.80895767396027
		)
	)
);
```

## Example 12
> **Summary**: Generate a 3D scatterplot with Portion 0-19, Portion60+, and Year as Y-axis variables, connect lines between points, and customize the 3D frame with specific rotation, view perspective, zoom, and background color settings.

<!-- Keywords: #Frame3D, #Scatterplot3D, #BackgroundColor, #Perspective, #SetRotation -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/PopAgeGroupSubset.jmp");
// Scatterplot 3D
Scatterplot 3D(
	Y(
		:"Portion 0-19"n, :"Portion60+"n,
		:Year
	),
	Connect Lines( 1 ),
	Frame3D(
		Set Rotation(
			32.2919968078136,
			-52.900586943001,
			19.4821987530212
		),
		Set View Perspective( 0.1095 ),
		Set View Zoom( 1.07375 ),
		Background Color( 127, 127, 127 )
	)
);
```

## Example 13
> **Summary**: Create a 3D scatterplot to visualize the relationship between six solvents using the Scatterplot 3D function .

<!-- Keywords: #Scatterplot3D -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Solubility.jmp");
// Scatterplot 3D
Scatterplot 3D(
	Y(
		:"1-Octanol"n, :Ether,
		:Chloroform, :Benzene,
		:Carbon Tetrachloride, :Hexane
	)
);
```

