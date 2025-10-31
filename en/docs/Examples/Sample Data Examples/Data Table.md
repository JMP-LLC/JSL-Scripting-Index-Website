# Data Table

More examples for this topic using the sample data files provided with JMP

## Concatenate

### Concatenate 2 tables

```jsl

// Open data table
dt = Open("$Sample_Data/Cancer2.jmp");
// Concatenate
Open( "$SAMPLE_DATA/Cancer1.jmp" ) <<
Concatenate( Data Table( "Cancer2" ) );

```

```jsl

// Open data table
dt = Open("$Sample_Data/Cancer1.jmp");
// Concatenate
Data Table( "Cancer1" ) <<
Concatenate(
	Open( "$SAMPLE_DATA/Cancer2.jmp" )
);

```

## Value Labels

### Set value labels column property

```jsl

// Open data table
dt = Open("$Sample_Data/Big Class.jmp");
// Set Age Value Labels
Column( "age" ) <<
ValueLabels(
	{12, 13, 14, 15, 16, 17},
	{"Twelve", "Thirteen", "Fourteen",
	"Fifteen", "Sixteen", "Seventeen"}
);
Column( "age" ) << UseValueLabels;

```

