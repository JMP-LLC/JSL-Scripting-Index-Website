# Categorical

More examples for this topic using the sample data files provided with JMP

## Indicator Group

### Perform categorical analysis with indicator group

```jsl

// Open data table
dt = Open("$Sample_Data/Consumer Preferences.jmp");
// Flossing Indicator by Age
Categorical(
	X( :Age Group ),
	Indicator Group(
		:Floss After Waking Up,
		:Floss After Meal,
		:Floss Before Sleep,
		:Floss Another Time
	),
	Share Of Responses( 0 ),
	Share Chart( 0 ),
	Frequency Chart( 1 ),
	Crosstab Transposed( 1 ),
	Legend( 0 ),
	Test Each Response( 1 )
);

```

