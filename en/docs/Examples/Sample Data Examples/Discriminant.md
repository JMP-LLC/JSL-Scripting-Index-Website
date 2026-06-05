# Discriminant

## Example 1
> **Summary**: Generate discriminant analysis

<!-- Keywords: #Discriminant, #Counts, #ShowClassificationCounts -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Cherts.jmp");
// Discriminant
Discriminant(
	X( :location name ),
	Y(
		:Al, :Mn, :Na, :Br, :Ce, :Co, :Cr,
		:Cs, :Eu, :Fe, :Hf, :La, :Sc, :Sm,
		:U
	),
	Show Classification Counts( 1 )
);
```

## Example 2
> **Summary**: Perform discriminant analysis to classify species based on sepal and petal measurements using the Iris dataset.

<!-- Keywords: #Discriminant -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Iris.jmp");
// Discriminant
Discriminant(
	X( :Species ),
	Y(
		:Sepal length, :Sepal width,
		:Petal length, :Petal width
	)
);
```

