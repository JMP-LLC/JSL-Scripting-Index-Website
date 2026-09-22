# DOE



## Colonne

### Factor

**Sintassi:** obj &lt;&lt; Factor( column(s) )

```jsl

DOE(	Custom Design,	{Add Response( Match Target, "Strength", 1.2, 1.4, . ),	Add Factor( Categorical, {"Coarse", "Medium"}, "Grind", 0 ),	Add Factor( Continuous, 195, 205, "Temperature", 0 ),	Add Factor( Continuous, 3, 4, "Time", 0 ), Add Factor(		Continuous, 1.6, 2.4, "Charge", 0	), Add Factor( Blocking, 4, "Station " ), Set Random Seed( 569534903 ),	Number of Starts( 100 ), Add Term( {1, 0} ), Add Term( {1, 1} ), Add Term( {2, 1} ),	Add Term( {3, 1} ), Add Term( {4, 1} ), Add Term( {5, 1} ),	Add Alias Term( {1, 1}, {2, 1} ), Add Alias Term( {1, 1}, {3, 1} ),	Add Alias Term( {1, 1}, {4, 1} ), Add Alias Term( {2, 1}, {3, 1} ),	Add Alias Term( {2, 1}, {4, 1} ), Add Alias Term( {3, 1}, {4, 1} ), Set Sample Size( 12 ),	Make Design});

```

### Response

**Sintassi:** obj &lt;&lt; Response( column(s) )

```jsl

DOE(	Custom Design,	{Add Response( Match Target, "Strength", 1.2, 1.4, . ),	Add Factor( Categorical, {"Coarse", "Medium"}, "Grind", 0 ),	Add Factor( Continuous, 195, 205, "Temperature", 0 ),	Add Factor( Continuous, 3, 4, "Time", 0 ), Add Factor(		Continuous, 1.6, 2.4, "Charge", 0	), Add Factor( Blocking, 4, "Station " ), Set Random Seed( 569534903 ),	Number of Starts( 100 ), Add Term( {1, 0} ), Add Term( {1, 1} ), Add Term( {2, 1} ),	Add Term( {3, 1} ), Add Term( {4, 1} ), Add Term( {5, 1} ),	Add Alias Term( {1, 1}, {2, 1} ), Add Alias Term( {1, 1}, {3, 1} ),	Add Alias Term( {1, 1}, {4, 1} ), Add Alias Term( {2, 1}, {3, 1} ),	Add Alias Term( {2, 1}, {4, 1} ), Add Alias Term( {3, 1}, {4, 1} ), Set Sample Size( 12 ),	Make Design});

```

### X

**Sintassi:** obj &lt;&lt; X( column(s) )

```jsl

DOE(	Custom Design,	{Add Response( Match Target, "Strength", 1.2, 1.4, . ),	Add Factor( Categorical, {"Coarse", "Medium"}, "Grind", 0 ),	Add Factor( Continuous, 195, 205, "Temperature", 0 ),	Add Factor( Continuous, 3, 4, "Time", 0 ), Add Factor(		Continuous, 1.6, 2.4, "Charge", 0	), Add Factor( Blocking, 4, "Station " ), Set Random Seed( 569534903 ),	Number of Starts( 100 ), Add Term( {1, 0} ), Add Term( {1, 1} ), Add Term( {2, 1} ),	Add Term( {3, 1} ), Add Term( {4, 1} ), Add Term( {5, 1} ),	Add Alias Term( {1, 1}, {2, 1} ), Add Alias Term( {1, 1}, {3, 1} ),	Add Alias Term( {1, 1}, {4, 1} ), Add Alias Term( {2, 1}, {3, 1} ),	Add Alias Term( {2, 1}, {4, 1} ), Add Alias Term( {3, 1}, {4, 1} ), Set Sample Size( 12 ),	Make Design});

```

### Y

**Sintassi:** obj &lt;&lt; Y( column(s) )

```jsl

DOE(	Custom Design,	{Add Response( Match Target, "Strength", 1.2, 1.4, . ),	Add Factor( Categorical, {"Coarse", "Medium"}, "Grind", 0 ),	Add Factor( Continuous, 195, 205, "Temperature", 0 ),	Add Factor( Continuous, 3, 4, "Time", 0 ), Add Factor(		Continuous, 1.6, 2.4, "Charge", 0	), Add Factor( Blocking, 4, "Station " ), Set Random Seed( 569534903 ),	Number of Starts( 100 ), Add Term( {1, 0} ), Add Term( {1, 1} ), Add Term( {2, 1} ),	Add Term( {3, 1} ), Add Term( {4, 1} ), Add Term( {5, 1} ),	Add Alias Term( {1, 1}, {2, 1} ), Add Alias Term( {1, 1}, {3, 1} ),	Add Alias Term( {1, 1}, {4, 1} ), Add Alias Term( {2, 1}, {3, 1} ),	Add Alias Term( {2, 1}, {4, 1} ), Add Alias Term( {3, 1}, {4, 1} ), Set Sample Size( 12 ),	Make Design});

```

## Costruttori associati

### DOE

**Sintassi:** DOE

#### Allarga piano

```jsl

Open( "$SAMPLE_DATA/Design Experiment/Reactor 8 Runs.jmp" );Wait( 0 );DOE(	Augment Design,	X( :Feed Rate, :Catalyst, :Stir Rate, :Temperature, :Concentration ),	Y( :Percent Reacted ),	{Augment Method( Augment ), Set Random Seed( 282322901 ), Number of Starts( 800 ),	Add Term( {1, 0} ), Add Term( {1, 1} ), Add Term( {2, 1} ), Add Term( {3, 1} ),	Add Term( {4, 1} ), Add Term( {5, 1} ), Add Term( {1, 1}, {2, 1} ),	Add Term( {1, 1}, {3, 1} ), Add Term( {1, 1}, {4, 1} ), Add Term( {1, 1}, {5, 1} ),	Add Term( {2, 1}, {3, 1} ), Add Term( {2, 1}, {4, 1} ), Add Term( {2, 1}, {5, 1} ),	Add Term( {3, 1}, {4, 1} ), Add Term( {3, 1}, {5, 1} ), Add Term( {4, 1}, {5, 1} ),	Set Sample Size( 16 ), Optimality Criterion( "Make D-Optimal Design" ), Make Design,	Save X Matrix( 0 ), Simulate Responses( 0 )});

```

#### Allarga piano, aggiungi punti centrali a un piano

```jsl

Open( "$SAMPLE_DATA/Design Experiment/Reactor 8 Runs.jmp" );Wait( 0 );DOE(	Augment Design,	X( :Feed Rate, :Catalyst, :Stir Rate, :Temperature, :Concentration ),	Y( :Percent Reacted ),	{Group new runs into separate block, Augment Method( Centerpoints, 2 ),	Save X Matrix( 0 ), Simulate Responses( 0 )});

```

#### Allarga piano, replica un piano

```jsl

Open( "$SAMPLE_DATA/Design Experiment/Reactor 8 Runs.jmp" );Wait( 0 );DOE(	Augment Design,	X( :Feed Rate, :Catalyst, :Stir Rate, :Temperature, :Concentration ),	Y( :Percent Reacted ),	{Group new runs into separate block, Augment Method( Replicate, 2 ), Save X Matrix( 0 ),	Simulate Responses( 0 )});

```

#### Piano a spazio pieno, piano a spazio pieno vincolato rapido e flessibile

```jsl

DOE(	Space Filling Design,	{Add Response( Maximize, "Y", ., ., . ), Add Factor( Continuous, 0, 1, "X1", 0 ),	Add Factor( Continuous, 0, 1, "X2", 0 ), Set Random Seed( 765 ),	Add Constraint( [1 1 0.8] ), FFF Optimality Criterion( MaxPro ),	Space Filling Design Type( Fast Flexible Filling, 200 ), Simulate Responses( 0 )});

```

#### Piano a spazio pieno, riempimento con sfere

```jsl

DOE(	Space Filling Design,	{Add Response( Maximize, "Y", ., ., . ), Add Factor( Continuous, 0, 1, "X1", 0 ),	Add Factor( Continuous, 0, 1, "X2", 0 ), Set Random Seed( 765 ),	Space Filling Design Type( Sphere Packing, 8 ), Simulate Responses( 0 )});

```

#### Piano della miscela, piano a vertici estremi

```jsl

DOE(	Mixture Design,	{Add Response( Maximize, "Y", ., ., . ), Change Factor Settings( 1, 0.05, 0.25, "X1" ),	Change Factor Settings( 2, 0.1, 0.3, "X2" ), Change Factor Settings( 3, 0.1, 0.3, "X3" ),	Add Factor( Mixture, 0.1, 0.4, "X4", 0 ), Add Factor( Mixture, 0.05, 0.25, "X5", 0 ),	Set Random Seed( 1409 ), Mixture Design Type( Extreme Vertices, 4 ), Find Subset( 10 ),	Simulate Responses( 0 )});

```

#### Piano della miscela, piano ottimale della miscela

```jsl

DOE(	Custom Design,	{Add Response( Maximize, "Y", ., ., . ), Add Factor( Mixture, 0, 1, "X1", 0 ),	Add Factor( Mixture, 0, 1, "X2", 0 ), Add Factor( Mixture, 0, 1, "X3", 0 ),	Set Random Seed( 1409 ), Number of Starts( 2 ), Add Constraint( [1 1 0 0.8] ),	Add Term( {1, 1} ), Add Term( {2, 1} ), Add Term( {3, 1} ), Add Term( {1, 1}, {2, 1} ),	Add Term( {1, 1}, {3, 1} ), Add Term( {2, 1}, {3, 1} ), Center Points( 2 ),	Set Sample Size( 12 ), Simulate Responses( 0 ), Save X Matrix( 0 ),	Optimality Criterion( "Make D-Optimal Design" ), Make Design});

```

#### Piano della superficie di risposta, piano Box-Behnken

```jsl

DOE(	Response Surface Design,	{Add Response( Match Target, "Stretch", 350, 550, 1 ),	Change Factor Settings( 1, 0.7, 1.7, "Silica" ),	Change Factor Settings( 2, 1.8, 2.8, "Sulfur" ),	Add Factor( Continuous, 40, 60, "Silane", 0 ), Set Random Seed( 12345 ), Make Design( 1 ),	Center Points( 3 ), Simulate Responses( 0 ), Save X Matrix( 0 )});

```

#### Piano di scelta

```jsl

DOE(	Choice Design,	{Add Factor( Categorical, {"Medium", "Coarse"}, "Grind", 0 ),	Add Factor( Categorical, {"195", "200", "205"}, "Temperature", 0 ),	Add Factor( Categorical, {"3", "3.5", "4"}, "Time", 0 ),	Add Factor( Categorical, {"1.6", "2", "2.4"}, "Charge", 0 ), Set Random Seed( 12345 ),	Add Term( {1, 1} ), Add Term( {2, 1} ), Add Term( {3, 1} ), Add Term( {4, 1} ),	Set Prior Mean Choice( [0 0 0 0 0 0 0] ),	Set Prior Variance Matrix(		[1 0 0 0 0 0 0,		0 1 0 0 0 0 0,		0 0 1 0 0 0 0,		0 0 0 1 0 0 0,		0 0 0 0 1 0 0,		0 0 0 0 0 1 0,		0 0 0 0 0 0 1]	), Set Number of Attributes( 4 ), Set Number of Profiles( 2 ),	Set Number of Choice Sets( 12 ), Set Number of Surveys( 1 ),	Set Expected Number of Respondents( 10 ), Make Design,	Choice Design Table Output( Separate )});

```

#### Piano di screening definitivo

```jsl

DOE(	Definitive Screening Design,	{Add Response( Maximize, "Yield", ., ., . ), Add Factor(		Continuous, 0, 10, "Methanol", 0	), Add Factor( Continuous, 0, 10, "Ethanol", 0 ),	Add Factor( Continuous, 0, 10, "Propanol", 0 ), Add Factor(		Continuous, 0, 10, "Butanol", 0	), Add Factor( Continuous, 6, 9, "pH", 0 ), Add Factor( Continuous, 1, 2, "Time", 0 ),	Show Blocking Options( 0, 0 ), Number of Extra Runs( 4 ), Set Random Seed( 880596769 ),	Make Design, Simulate Responses( 0 ), Save X Matrix( 0 )});

```

#### Piano di screening definitivo con blocchi

```jsl

DOE(	Definitive Screening Design,	{Add Response( Maximize, "Yield", ., ., . ), Add Factor( Blocking, 0, "Lot" ),	Add Factor( Continuous, 0, 10, "Methanol", 0 ), Add Factor(		Continuous, 0, 10, "Ethanol", 0	), Add Factor( Continuous, 0, 10, "Propanol", 0 ),	Add Factor( Continuous, 0, 10, "Butanol", 0 ), Add Factor( Continuous, 6, 9, "pH", 0 ),	Add Factor( Continuous, 1, 2, "Time", 0 ), Show Blocking Options( 1, 2 ),	Number of Extra Runs( 0 ), Set Random Seed( 1146016221 ), Make Design,	Simulate Responses( 0 ), Save X Matrix( 0 )});

```

#### Piano di screening, piano di screening a livello misto

```jsl

DOE(	Screening Design,	{Add Response( Maximize, "Y", ., ., . ), Add Factor( Continuous, -1, 1, "X1", 0 ),	Add Factor( Continuous, -1, 1, "X2", 0 ), Add Factor( Continuous, -1, 1, "X3", 0 ),	Add Factor( Continuous, -1, 1, "X4", 0 ), Add Factor( Continuous, -1, 1, "X5", 0 ),	Add Factor( Categorical, {"L1", "L2"}, "X6", 0 ),	Add Factor( Categorical, {"L1", "L2"}, "X7", 0 ),	Add Factor( Categorical, {"L1", "L2"}, "X8", 0 ), Set Random Seed( 12345 ),	Screening Type( 2, 2, 16 ), Make Design, Simulate Responses( 0 ), Save X Matrix( 0 )});

```

#### Piano di screening, piano di screening degli effetti principali

```jsl

DOE(	Screening Design,	{Add Response( Match Target, "Depth", 0.12, 0.22, . ),	Add Factor( Continuous, 3, 5, "Speed", 0 ), Add Factor(		Continuous, 150, 165, "Current", 0	), Add Factor( Continuous, 20, 30, "Wall Size", 0 ),	Add Factor( Categorical, {"John", "Mary"}, "Operator", 0 ),	Add Factor( Categorical, {"Conductance", "Keyhole"}, "Mode", 0 ),	Add Factor( Categorical, {"Double", "Single"}, "Geometry", 0 ),	Add Factor( Categorical, {"Aluminum", "Magnesium"}, "Material", 0 ),	Set Random Seed( 12345 ), Screening Type( 1 ), Number of Starts( 1 ),	Number of Column Starts( 50 ), Set Sample Size( 12 ), Make Design,	Simulate Responses( 0 ), Save X Matrix( 0 )});

```

#### Piano di screening, piano fattoriale frazionato

```jsl

DOE(	Screening Design,	{Add Response( Match Target, "Depth", 0.12, 0.22, . ),	Add Factor( Continuous, 3, 5, "Speed", 0 ), Add Factor(		Continuous, 150, 165, "Current", 0	), Add Factor( Continuous, 20, 30, "Wall Size", 0 ),	Add Factor( Categorical, {"John", "Mary"}, "Operator", 0 ),	Add Factor( Categorical, {"Conductance", "Keyhole"}, "Mode", 0 ),	Add Factor( Categorical, {"Double", "Single"}, "Geometry", 0 ),	Add Factor( Categorical, {"Aluminum", "Magnesium"}, "Material", 0 ),	Set Random Seed( 12345 ), Make Design( 1 ), Simulate Responses( 0 ), Save X Matrix( 0 )});

```

#### Piano fattoriale completo

```jsl

DOE(	Full Factorial Design,	{Add Response( Maximize, "Percent Reacted", 90, 100, 1 ),	Add Factor( Continuous, {10, 15}, "Feed Rate", 0 ),	Add Factor( Continuous, {1, 2}, "Catalyst", 0 ),	Add Factor( Continuous, {100, 120}, "Stir Rate", 0 ),	Add Factor( Continuous, {140, 180}, "Temperature", 0 ),	Add Factor( Continuous, {3, 6}, "Concentration", 0 ), Set Random Seed( 12345 ),	Make Design});

```

#### Piano gruppo ortogonale supersaturo

```jsl

DOE(	Group Orthogonal Supersaturated Design,	{GOSSDStructure( 12, 16, 4, 4 ), ChangeFactorSettings( 1, Continuous, -1, 1, "Fake 1" ),	ChangeFactorSettings( 2, Continuous, -1, 1, "Fake 2" ),	ChangeFactorSettings( 3, Continuous, -1, 1, "Fake 3" ),	ChangeFactorSettings( 4, Continuous, -1, 1, "X4" ),	ChangeFactorSettings( 5, Continuous, -1, 1, "X5" ),	ChangeFactorSettings( 6, Continuous, -1, 1, "X6" ),	ChangeFactorSettings( 7, Continuous, -1, 1, "X7" ),	ChangeFactorSettings( 8, Continuous, -1, 1, "X8" ),	ChangeFactorSettings( 9, Continuous, -1, 1, "X9" ),	ChangeFactorSettings( 10, Continuous, -1, 1, "X10" ),	ChangeFactorSettings( 11, Continuous, -1, 1, "X11" ),	ChangeFactorSettings( 12, Continuous, -1, 1, "X12" ),	ChangeFactorSettings( 13, Continuous, -1, 1, "X13" ),	ChangeFactorSettings( 14, Continuous, -1, 1, "X14" ),	ChangeFactorSettings( 15, Continuous, -1, 1, "X15" ), Make Design,	Simulate Responses( 0 )});

```

#### Piano MaxDiff

```jsl

Open( "$SAMPLE_DATA/Design Experiment/Candy Profiles.jmp" );DOE(	MaxDiff Design,	X( :Candy ),	{Set Number of Profiles( 4 ), Set Number of Choice Sets( 7 ), Make Design,	Simulate Responses( 0 )});

```

#### Piano MSA

```jsl

DOE(	MSA Design,	{Add Response( None, "Y", ., ., . ), Add Factor(		Categorical,		{"1", "2", "3", "4", "5"},		"Part",		MSA( 2, 1 )	), Add Factor( Categorical, {"1", "2", "3"}, "Operator", MSA( 1, 1 ) ),	Add Factor( Categorical, {"Lab A", "Lab B", "Lab C"}, "Lab", MSA( 3, 1 ) ),	Set Random Seed( 123 ), Replicates( 5, 0 ),	Nesting Structure( {"Lab", {"Operator" || "Part"}} ), Make Design,	Simulate Responses( 0 )});

```

#### Piano personalizzato, degustazione di vini

```jsl

DOE(	Custom Design,	{Add Response( Maximize, "Rating", 0, 20, . ), Add Factor( Blocking, 8, "Rater" ),	Add Factor( Categorical, {"Bernard", "Dijon"}, "Variety", 0 ),	Add Factor( Categorical, {"1", "2", "3", "4"}, "Field", 0 ),	Add Factor( Categorical, {"No", "Yes"}, "De-Stem", 0 ),	Add Factor( Categorical, {"Cultured", "Wild"}, "Yeast", 0 ),	Add Factor( Categorical, {"High", "Low"}, "Temperature", 0 ),	Add Factor( Categorical, {"Hard", "Soft"}, "Press", 0 ),	Add Factor( Categorical, {"New", "2 Years"}, "Barrel Age", 0 ),	Add Factor( Categorical, {"Air", "Kiln"}, "Barrel Seasoning", 0 ),	Add Factor( Categorical, {"No", "Yes"}, "Filtering", 0 ), Set Random Seed( 1234 ),	Number of Starts( 2 ), Add Term( {1, 0} ), Add Term( {2, 1} ), Add Term( {3, 1} ),	Add Term( {4, 1} ), Add Term( {5, 1} ), Add Term( {6, 1} ), Add Term( {7, 1} ),	Add Term( {8, 1} ), Add Term( {9, 1} ), Add Term( {10, 1} ), Add Term( {1, 1} ),	Add Alias Term( {2, 1}, {3, 1} ), Add Alias Term( {2, 1}, {4, 1} ),	Add Alias Term( {2, 1}, {5, 1} ), Add Alias Term( {2, 1}, {6, 1} ),	Add Alias Term( {2, 1}, {7, 1} ), Add Alias Term( {2, 1}, {8, 1} ),	Add Alias Term( {2, 1}, {9, 1} ), Add Alias Term( {2, 1}, {10, 1} ),	Add Alias Term( {3, 1}, {4, 1} ), Add Alias Term( {3, 1}, {5, 1} ),	Add Alias Term( {3, 1}, {6, 1} ), Add Alias Term( {3, 1}, {7, 1} ),	Add Alias Term( {3, 1}, {8, 1} ), Add Alias Term( {3, 1}, {9, 1} ),	Add Alias Term( {3, 1}, {10, 1} ), Add Alias Term( {4, 1}, {5, 1} ),	Add Alias Term( {4, 1}, {6, 1} ), Add Alias Term( {4, 1}, {7, 1} ),	Add Alias Term( {4, 1}, {8, 1} ), Add Alias Term( {4, 1}, {9, 1} ),	Add Alias Term( {4, 1}, {10, 1} ), Add Alias Term( {5, 1}, {6, 1} ),	Add Alias Term( {5, 1}, {7, 1} ), Add Alias Term( {5, 1}, {8, 1} ),	Add Alias Term( {5, 1}, {9, 1} ), Add Alias Term( {5, 1}, {10, 1} ),	Add Alias Term( {6, 1}, {7, 1} ), Add Alias Term( {6, 1}, {8, 1} ),	Add Alias Term( {6, 1}, {9, 1} ), Add Alias Term( {6, 1}, {10, 1} ),	Add Alias Term( {7, 1}, {8, 1} ), Add Alias Term( {7, 1}, {9, 1} ),	Add Alias Term( {7, 1}, {10, 1} ), Add Alias Term( {8, 1}, {9, 1} ),	Add Alias Term( {8, 1}, {10, 1} ), Add Alias Term( {9, 1}, {10, 1} ),	Set Sample Size( 40 ), Simulate Responses( 0 ), Save X Matrix( 0 ), Make Design});

```

#### Piano personalizzato, esperimento di screening che stima solo gli effetti principali

```jsl

DOE(	Custom Design,	{Add Response( Maximize, "Y", ., ., . ), Add Factor( Continuous, -1, 1, "X1", 0 ),	Add Factor( Continuous, -1, 1, "X2", 0 ), Add Factor( Continuous, -1, 1, "X3", 0 ),	Add Factor( Continuous, -1, 1, "X4", 0 ), Add Factor( Continuous, -1, 1, "X5", 0 ),	Add Factor( Continuous, -1, 1, "X6", 0 ), Set Random Seed( 12345 ), Number of Starts( 1 ),	Add Term( {1, 0} ), Add Term( {1, 1} ), Add Term( {2, 1} ), Add Term( {3, 1} ),	Add Term( {4, 1} ), Add Term( {5, 1} ), Add Term( {6, 1} ),	Add Alias Term( {1, 1}, {2, 1} ), Add Alias Term( {1, 1}, {3, 1} ),	Add Alias Term( {1, 1}, {4, 1} ), Add Alias Term( {1, 1}, {5, 1} ),	Add Alias Term( {1, 1}, {6, 1} ), Add Alias Term( {2, 1}, {3, 1} ),	Add Alias Term( {2, 1}, {4, 1} ), Add Alias Term( {2, 1}, {5, 1} ),	Add Alias Term( {2, 1}, {6, 1} ), Add Alias Term( {3, 1}, {4, 1} ),	Add Alias Term( {3, 1}, {5, 1} ), Add Alias Term( {3, 1}, {6, 1} ),	Add Alias Term( {4, 1}, {5, 1} ), Add Alias Term( {4, 1}, {6, 1} ),	Add Alias Term( {5, 1}, {6, 1} ), Set Sample Size( 12 ), Make Design});

```

#### Piano personalizzato, esperimento di screening con risoluzione V che risolve tutte le interazioni a due fattori

```jsl

DOE(	Custom Design,	{Add Response( Maximize, "Y", ., ., . ), Add Factor( Continuous, -1, 1, "X1", 0 ),	Add Factor( Continuous, -1, 1, "X2", 0 ), Add Factor( Continuous, -1, 1, "X3", 0 ),	Add Factor( Continuous, -1, 1, "X4", 0 ), Add Factor( Continuous, -1, 1, "X5", 0 ),	Set Random Seed( 12345 ), Number of Starts( 10 ), Add Term( {1, 0} ), Add Term( {1, 1} ),	Add Term( {2, 1} ), Add Term( {3, 1} ), Add Term( {4, 1} ), Add Term( {5, 1} ),	Add Term( {1, 1}, {2, 1} ), Add Term( {1, 1}, {3, 1} ), Add Term( {1, 1}, {4, 1} ),	Add Term( {1, 1}, {5, 1} ), Add Term( {2, 1}, {3, 1} ), Add Term( {2, 1}, {4, 1} ),	Add Term( {2, 1}, {5, 1} ), Add Term( {3, 1}, {4, 1} ), Add Term( {3, 1}, {5, 1} ),	Add Term( {4, 1}, {5, 1} ), Set Sample Size( 16 ),	Optimality Criterion( "Make D-Optimal Design" ), Make Design});

```

#### Piano personalizzato, esperimento split-plot

```jsl

DOE(	Custom Design,	{Add Response( Maximize, "thickness", 10, ., . ),	Add Factor( Continuous, -1, 1, "extrusion rate", 1 ),	Add Factor( Continuous, -1, 1, "temperature", 1 ), Add Factor( Mixture, 0, 1, "m1", 0 ),	Add Factor( Mixture, 0, 1, "m2", 0 ), Add Factor( Mixture, 0, 1, "m3", 0 ),	Set Random Seed( 12345 ), Number of Starts( 5 ), Add Term( {3, 1} ), Add Term( {4, 1} ),	Add Term( {5, 1} ), Add Term( {1, 1}, {2, 1} ), Add Term( {1, 1}, {3, 1} ),	Add Term( {1, 1}, {4, 1} ), Add Term( {1, 1}, {5, 1} ), Add Term( {2, 1}, {3, 1} ),	Add Term( {2, 1}, {4, 1} ), Add Term( {2, 1}, {5, 1} ), Add Term( {3, 1}, {4, 1} ),	Add Term( {3, 1}, {5, 1} ), Add Term( {4, 1}, {5, 1} ), Set N Whole Plots( 7 ),	Set Sample Size( 28 ), Optimality Criterion( "Make D-Optimal Design" ), Make Design});

```

#### Piano personalizzato, esperimento split-plot a due vie

```jsl

DOE(	Custom Design,	{Add Response( Minimize, "OCV", ., ., . ), Add Factor( Continuous, -1, 1, "A1", 2 ),	Add Factor( Continuous, -1, 1, "A2", 2 ), Add Factor( Continuous, -1, 1, "A3", 2 ),	Add Factor( Continuous, -1, 1, "A4", 2 ), Add Factor( Continuous, -1, 1, "C1", 1 ),	Add Factor( Continuous, -1, 1, "C2", 1 ), Set Random Seed( 1866762673 ),	Number of Starts( 21 ), Add Term( {1, 0} ), Add Term( {1, 1} ), Add Term( {2, 1} ),	Add Term( {3, 1} ), Add Term( {4, 1} ), Add Term( {5, 1} ), Add Term( {6, 1} ),	Add Term( {1, 1}, {2, 1} ), Add Term( {1, 1}, {3, 1} ), Add Term( {1, 1}, {4, 1} ),	Add Term( {1, 1}, {5, 1} ), Add Term( {1, 1}, {6, 1} ), Add Term( {2, 1}, {3, 1} ),	Add Term( {2, 1}, {4, 1} ), Add Term( {2, 1}, {5, 1} ), Add Term( {2, 1}, {6, 1} ),	Add Term( {3, 1}, {4, 1} ), Add Term( {3, 1}, {5, 1} ), Add Term( {3, 1}, {6, 1} ),	Add Term( {4, 1}, {5, 1} ), Add Term( {4, 1}, {6, 1} ), Add Term( {5, 1}, {6, 1} ),	Make Strip Plot Design, Set N Whole Plots( 16 ), Set N Subplots( 6 ),	Set Sample Size( 48 ), Optimality Criterion( "Make D-Optimal Design" ), Make Design});

```

#### Piano personalizzato, forza del caffè

```jsl

DOE(	Custom Design,	{Add Response( Match Target, "Strength", 1.2, 1.4, . ),	Add Factor( Categorical, {"Coarse", "Medium"}, "Grind", 0 ),	Add Factor( Continuous, 195, 205, "Temperature", 0 ),	Add Factor( Continuous, 3, 4, "Time", 0 ), Add Factor(		Continuous, 1.6, 2.4, "Charge", 0	), Add Factor( Blocking, 4, "Station " ), Set Random Seed( 569534903 ),	Number of Starts( 100 ), Add Term( {1, 0} ), Add Term( {1, 1} ), Add Term( {2, 1} ),	Add Term( {3, 1} ), Add Term( {4, 1} ), Add Term( {5, 1} ),	Add Alias Term( {1, 1}, {2, 1} ), Add Alias Term( {1, 1}, {3, 1} ),	Add Alias Term( {1, 1}, {4, 1} ), Add Alias Term( {2, 1}, {3, 1} ),	Add Alias Term( {2, 1}, {4, 1} ), Add Alias Term( {3, 1}, {4, 1} ), Set Sample Size( 12 ),	Make Design});

```

#### Piano personalizzato, piano con covariate difficili da modificare

```jsl

Open( "$SAMPLE_DATA/Design Experiment/Runners Covariates.jmp" );Wait( 0 );DOE(	Custom Design,	{Add Response( Minimize, "Wear", ., ., . ), Add Factor( Covariate, Miles, 1 ),	Add Factor( Covariate, Weight, 1 ), Add Factor( Covariate, Strike Point, 1 ),	Add Factor( Continuous, 5, 20, "Thickness", 0 ),	Add Factor( Continuous, 1, 10, "Gel", 0 ), Add Factor(		Categorical,		{"L1", "L2", "L3"},		"Outsole",		0	), Add Factor( Categorical, {"L1", "L2", "L3"}, "Midsole", 0 ), Set Random Seed( 12345 ),	Number of Starts( 1 ), Add Term( {1, 0} ), Add Term( {1, 1} ), Add Term( {2, 1} ),	Add Term( {3, 1} ), Add Term( {4, 1} ), Add Term( {5, 1} ), Add Term( {6, 1} ),	Add Term( {7, 1} ), Add Term( {1, 1}, {2, 1} ), Add Term( {1, 1}, {3, 1} ),	Add Term( {1, 1}, {4, 1} ), Add Term( {1, 1}, {5, 1} ), Add Term( {1, 1}, {6, 1} ),	Add Term( {1, 1}, {7, 1} ), Add Term( {2, 1}, {3, 1} ), Add Term( {2, 1}, {4, 1} ),	Add Term( {2, 1}, {5, 1} ), Add Term( {2, 1}, {6, 1} ), Add Term( {2, 1}, {7, 1} ),	Add Term( {3, 1}, {4, 1} ), Add Term( {3, 1}, {5, 1} ), Add Term( {3, 1}, {6, 1} ),	Add Term( {3, 1}, {7, 1} ), Add Term( {4, 1}, {5, 1} ), Add Term( {4, 1}, {6, 1} ),	Add Term( {4, 1}, {7, 1} ), Add Term( {5, 1}, {6, 1} ), Add Term( {5, 1}, {7, 1} ),	Add Term( {6, 1}, {7, 1} ), Set N Whole Plots( 32 ), Set Sample Size( 64 ),	Simulate Responses( 0 ), Save X Matrix( 0 ), Make Design});

```

#### Piano personalizzato, piano con covariate fisse

```jsl

Open( "$SAMPLE_DATA/Design Experiment/Thermoplastic.jmp" );Wait( 0 );DOE(	Custom Design,	{Add Response( Minimize, "Shrinkage", ., ., . ),	Add Factor( Covariate, Specific Gravity, 0 ), Add Factor(		Covariate, Tensile Strength, 0	), Add Factor( Covariate, Supplier, 0 ), Add Factor(		Continuous, -1, 1, "Temperature", 0	), Add Factor( Continuous, -1, 1, "Speed", 0 ), Add Factor(		Continuous, -1, 1, "Time", 0	), Set Random Seed( 84951 ), Number of Starts( 40 ), Add Term( {1, 0} ),	Add Term( {1, 1} ), Add Term( {2, 1} ), Add Term( {3, 1} ), Add Term( {4, 1} ),	Add Term( {5, 1} ), Add Term( {6, 1} ), Add Alias Term( {1, 1}, {2, 1} ),	Add Alias Term( {1, 1}, {3, 1} ), Add Alias Term( {1, 1}, {4, 1} ),	Add Alias Term( {1, 1}, {5, 1} ), Add Alias Term( {1, 1}, {6, 1} ),	Add Alias Term( {2, 1}, {3, 1} ), Add Alias Term( {2, 1}, {4, 1} ),	Add Alias Term( {2, 1}, {5, 1} ), Add Alias Term( {2, 1}, {6, 1} ),	Add Alias Term( {3, 1}, {4, 1} ), Add Alias Term( {3, 1}, {5, 1} ),	Add Alias Term( {3, 1}, {6, 1} ), Add Alias Term( {4, 1}, {5, 1} ),	Add Alias Term( {4, 1}, {6, 1} ), Add Alias Term( {5, 1}, {6, 1} ), Set Sample Size( 12 ),	Make Design});

```

#### Piano personalizzato, piano della miscela con fattori non di miscela

```jsl

DOE(	Custom Design,	{Add Response( None, "Damping", ., ., . ), Add Factor( Mixture, 0.2, 0.8, "CuSO4", 0 ),	Add Factor( Mixture, 0.2, 0.8, "Na2S2O3", 0 ), Add Factor(		Mixture, 0, 0.6, "Glyoxal", 0	), Add Factor( Categorical, {"L1", "L2", "L3"}, "Wavelength", 0 ),	Set Random Seed( 12345 ), Number of Starts( 5 ), Add Term( {1, 1} ), Add Term( {2, 1} ),	Add Term( {3, 1} ), Add Term( {1, 1}, {2, 1} ), Add Term( {1, 1}, {3, 1} ),	Add Term( {1, 1}, {4, 1} ), Add Term( {2, 1}, {3, 1} ), Add Term( {2, 1}, {4, 1} ),	Add Term( {3, 1}, {4, 1} ), Set Sample Size( 18 ), Make Design});

```

#### Piano personalizzato, piano della miscela di miscele

```jsl

DOE(	Custom Design,	{Add Response( Maximize, "Taste", 0, 10, . ), Add Factor( Mixture, 0.1, 0.2, "Cocoa", 0 ),	Add Factor( Mixture, 0, 0.15, "Sugar", 0 ), Add Factor( Mixture, 0.2, 0.3, "Flour", 0 ),	Add Factor( Mixture, 0.1, 0.2, "Butter", 0 ), Add Factor(		Mixture, 0.25, 0.35, "Milk", 0	), Add Factor( Mixture, 0.05, 0.2, "Eggs", 0 ), Set Random Seed( 12345 ),	Number of Starts( 40 ), Add Constraint( [1 1 1 0 0 0 0.45, -1 -1 -1 0 0 0 -0.45] ),	Add Term( {1, 1} ), Add Term( {2, 1} ), Add Term( {3, 1} ), Add Term( {4, 1} ),	Add Term( {5, 1} ), Add Alias Term( {1, 1}, {2, 1} ), Add Alias Term( {1, 1}, {3, 1} ),	Add Alias Term( {1, 1}, {4, 1} ), Add Alias Term( {1, 1}, {5, 1} ),	Add Alias Term( {1, 1}, {6, 1} ), Add Alias Term( {2, 1}, {3, 1} ),	Add Alias Term( {2, 1}, {4, 1} ), Add Alias Term( {2, 1}, {5, 1} ),	Add Alias Term( {2, 1}, {6, 1} ), Add Alias Term( {3, 1}, {4, 1} ),	Add Alias Term( {3, 1}, {5, 1} ), Add Alias Term( {3, 1}, {6, 1} ),	Add Alias Term( {4, 1}, {5, 1} ), Add Alias Term( {4, 1}, {6, 1} ),	Add Alias Term( {5, 1}, {6, 1} ), Set Sample Size( 10 ), Make Design});

```

#### Piano personalizzato, piano della superficie di risposta

```jsl

DOE(	Custom Design,	{Add Response( Match Target, "Y", 54, 56, . ), Add Factor( Continuous, -1, 1, "X1", 0 ),	Add Factor( Continuous, -1, 1, "X2", 0 ), Add Factor( Continuous, -1, 1, "X3", 0 ),	Set Random Seed( 929281409 ), Number of Starts( 40 ), Add Term( {1, 0} ),	Add Term( {1, 1} ), Add Term( {2, 1} ), Add Term( {3, 1} ), Add Term( {1, 2} ),	Add Term( {1, 1}, {2, 1} ), Add Term( {2, 2} ), Add Term( {1, 1}, {3, 1} ),	Add Term( {2, 1}, {3, 1} ), Add Term( {3, 2} ), Set Sample Size( 16 ),	Optimality Criterion( 2 ), Make Design});

```

#### Piano personalizzato, piano della superficie di risposta con creazione di blocchi flessibile

```jsl

DOE(	Custom Design,	{Add Response( Maximize, "Y", ., ., . ), Add Factor( Continuous, -1, 1, "X1", 0 ),	Add Factor( Continuous, -1, 1, "X2", 0 ), Add Factor( Blocking, 4, "X3" ),	Set Random Seed( 12345 ), Number of Starts( 5 ), Add Term( {1, 0} ), Add Term( {1, 1} ),	Add Term( {2, 1} ), Add Term( {3, 1} ), Add Term( {1, 2} ), Add Term( {1, 1}, {2, 1} ),	Add Term( {2, 2} ), Set Sample Size( 12 ), Optimality Criterion( 2 ), Make Design});

```

#### Piano personalizzato, piano di screening supersaturo

```jsl

DOE(	Custom Design,	{Add Response( Maximize, "Y", ., ., . ), Add Factor( Continuous, -1, 1, "X1", 0 ),	Add Factor( Continuous, -1, 1, "X2", 0 ), Add Factor( Continuous, -1, 1, "X3", 0 ),	Add Factor( Continuous, -1, 1, "X4", 0 ), Add Factor( Continuous, -1, 1, "X5", 0 ),	Add Factor( Continuous, -1, 1, "X6", 0 ), Add Factor( Continuous, -1, 1, "X7", 0 ),	Add Factor( Continuous, -1, 1, "X8", 0 ), Add Factor( Continuous, -1, 1, "X9", 0 ),	Add Factor( Continuous, -1, 1, "X10", 0 ), Add Factor( Continuous, -1, 1, "X11", 0 ),	Add Factor( Continuous, -1, 1, "X12", 0 ), Set Random Seed( 12345 ),	Number of Starts( 5 ), Add Term( {1, 0} ), Add Potential Term( {1, 1} ),	Add Potential Term( {2, 1} ), Add Potential Term( {3, 1} ), Add Potential Term( {4, 1} ),	Add Potential Term( {5, 1} ), Add Potential Term( {6, 1} ), Add Potential Term( {7, 1} ),	Add Potential Term( {8, 1} ), Add Potential Term( {9, 1} ), Add Potential Term( {10, 1} ),	Add Potential Term( {11, 1} ), Add Potential Term( {12, 1} ), Set Sample Size( 8 ),	Simulate Responses( 1 ), Save X Matrix( 0 ), Set Run Order( Randomize ), Make Design});

```

#### Piano personalizzato, piano per blocchi fissi

```jsl

DOE(	Custom Design,	{Add Response( Maximize, "Y", ., ., . ), Add Factor( Continuous, -1, 1, "X1", 0 ),	Add Factor( Continuous, -1, 1, "X2", 0 ), Add Factor( Continuous, -1, 1, "X3", 0 ),	Add Factor( Blocking, 3, "X4" ), Set Random Seed( 12345 ), Number of Starts( 5 ),	Add Term( {1, 0} ), Add Term( {1, 1} ), Add Term( {2, 1} ), Add Term( {3, 1} ),	Add Term( {4, 1} ), Add Term( {1, 1}, {2, 1} ), Add Term( {1, 1}, {3, 1} ),	Add Term( {2, 1}, {3, 1} ), Set Sample Size( 18 ), Make Design});

```

## Messaggi degli elementi

### A-Optimality Parameter Weights

**Sintassi:** obj &lt;&lt; A-Optimality Parameter Weights

**Descrizione:** Imposta i pesi da usare per la creazione di un piano A-ottimale.

**JMP Versione aggiunta:** 14

```jsl

DOE(	Custom Design,	{Add Factor( Continuous, -1, 1, "X1", 0 ), Add Factor( Continuous, -1, 1, "X2", 0 ),	Add Factor( Continuous, -1, 1, "X3", 0 ), Add Term( {1, 0} ), Add Term( {1, 1} ),	Add Term( {2, 1} ), Add Term( {3, 1} ), Add Term( {1, 1}, {2, 1} ),	Add Term( {1, 1}, {3, 1} ), Add Term( {2, 1}, {3, 1} ), Set Sample Size( 14 ),	Optimality Criterion( "Make A-Optimal Design"n ),	"A-Optimality Parameter Weights"n( [1 1 1 1 0.1 0.1 0.1] )});

```

### ALT Factor Settings

**Sintassi:** obj &lt;&lt; ALT Factor Settings

**Descrizione:** Per il numero di fattori dato in un piano di test accelerato di durata, consente di specificare nome del fattore, numero di livelli, trasformazione del fattore e condizioni di utilizzo e test.

```jsl

DOE(	Accelerated Life Test Plan,	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Continuous Monitoring" ),	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),	Set Prior Mean ALT( [-40 1.5 2] ), Set Prior Std Error ALT( [10, 0.2, 0.5] ),	Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ), Use Prior Uncertainty( 1 ),	Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ),	Set Length of Test( 1000 ), Set Number of Units( 150 )});

```

### ALT Plan Setup

**Sintassi:** obj &lt;&lt; ALT Plan Setup( 1|2|3 )

**Descrizione:** Specifica la scelta iniziale del modello per un piano di test accelerato di durata.

```jsl

DOE(	Accelerated Life Test Plan,	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Continuous Monitoring" ),	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),	Set Prior Mean ALT( [-40 1.5 2] ), Set Prior Std Error ALT( [10, 0.2, 0.5] ),	Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ), Use Prior Uncertainty( 1 ),	Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ),	Set Length of Test( 1000 ), Set Number of Units( 150 )});

```

### Add Alias Term

**Sintassi:** obj &lt;&lt; Add Alias Term

**Descrizione:** Aggiunge un termine alias all&apos;elenco di termini alias. Specifica il numero e potenza del fattore per ciascun effetto in un elenco. Crea interazioni separando gli effetti con virgole.

```jsl

d = DOE(	Custom Design,	Add Factor( Continuous, -1, 1, "X1", 0 ),	Add Factor( Continuous, -1, 1, "X2", 0 ));d << Add Alias Term( {1, 1}, {2, 1} );d << Add Alias Term( {1, 2} );

```

### Add Constraint

**Sintassi:** obj &lt;&lt; Add Constraint

**Descrizione:** Aggiunge vincoli lineari attraverso una matrice. Ogni riga rappresenta un vincolo. L’ultima colonna è per i valori sul lato destro dei vincoli di disuguaglianza. In JSL, i vincoli di disuguaglianza devono essere inferiori o uguali ai valori sulla destra.

```jsl

DOE(	Custom Design,	Add Factor( Continuous, -1, 1, "X1", 0 ),	Add Factor( Continuous, -1, 1, "X2", 0 ),	Add Factor( Continuous, -1, 1, "X3", 0 ),	Add Constraint( [1 1 0 1, 1 0 1 1] ),	Add Term( {1, 0} ));

```

### Add Factor

**Sintassi:** obj &lt;&lt; Add Factor( Continuous|Discrete Numeric|Blocking|Constant|Categorical|Mixture )

**Descrizione:** Aggiunge un fattore del tipo specificato e argomenti facoltativi. Se non viene specificato nulla, questo comando aggiunge un fattore continuo.

```jsl

d = DOE( Custom Design );d << Add Factor( Continuous, -1, 1, "X1", 0 );d << Add Factor( Discrete Numeric, {1, 2, 3}, "X2", 0 );d << Add Factor( Categorical, {"L1", "L2"}, "X3", 0 );d << Add Factor( Blocking, 8, "X4" );d << Add Factor( Constant, 3, "X5" );

```

### Add Functional Response

**Sintassi:** obj &lt;&lt; Add Functional Response

**Descrizione:** Aggiunge una risposta funzionale con il nome, il numero di misurazioni per esecuzione e i valori specificati.

**JMP Versione aggiunta:** 15

```jsl

DOE(	Custom Design,	Add Response( Maximize, "Y", ., ., . ),	Add Functional Response( "Y", 5, {1, 2, 3, 4, 5} ),	Set Random Seed( 46055034 ),	Simulate Responses( 0 ),	Save X Matrix( 0 ));

```

### Add Potential Term

**Sintassi:** obj &lt;&lt; Add Potential Term

**Descrizione:** Aggiunge un termine Se possibile all&apos;elenco di termini del modello. Specifica il numero e potenza del fattore per ciascun effetto in un elenco. Crea interazioni separando gli effetti con virgole.

```jsl

d = DOE(	Custom Design,	Add Factor( Continuous, -1, 1, "X1", 0 ),	Add Factor( Continuous, -1, 1, "X2", 0 ));d << Add Potential Term( {1, 1}, {2, 1} );d << Add Potential Term( {1, 2} );

```

### Add Response

**Sintassi:** obj &lt;&lt; Add Response( goal, name, lower limit, upper limit, importance, lower detection limit, upper detection limit )

**Descrizione:** Aggiunge una risposta con l&apos;obiettivo, il nome, il limite inferiore, il limite superiore e l&apos;importanza specificati.

**Esempio 1**

```jsl

DOE( Custom Design, Add Response( Match Target, "Y", 10, 30, 1 ) );

```

**Esempio 2**

```jsl

DOE( Custom Design, Add Response( Match Target, "Y", ., ., 1, 10, 30 ) );

```

### Add Term

**Sintassi:** obj &lt;&lt; Add Term

**Descrizione:** Aggiunge un termine "Necessario" all&apos;elenco di termini del modello. Gli effetti sono specificati da {numero di fattori, potenza}. È possibile creare interazioni separando gli effetti con virgole.

```jsl

d = DOE(	Custom Design,	Add Factor( Continuous, -1, 1, "X1", 0 ),	Add Factor( Continuous, -1, 1, "X2", 0 ));d << Add Term( {1, 1}, {2, 1} );d << Add Term( {1, 2} );

```

### Additional Designs

**Sintassi:** obj &lt;&lt; Additional Designs

**Descrizione:** Specifica fino a nove piani supplementari da confrontare con il piano di riferimento.

**JMP Versione aggiunta:** 14

```jsl

DOE(	Custom Design,	Add Factor,	Add Factor,	Add Factor,	Set Sample Size( 12 ),	Make Design,	Make Table);DOE( Custom Design, Add Factor, Add Factor, Add Factor, Make Design, Make Table );DOE(	Custom Design,	Add Factor,	Add Factor,	Add Factor,	Set Sample Size( 4 ),	Make Design,	Make Table);DOE(	Compare Designs,	Reference Design( "Custom Design", X( :X1, :X2, :X3 ) ),	Additional Designs(		"Custom Design 2",		X( :X1, :X2, :X3 ),		"Custom Design 3",		X( :X1, :X2, :X3 )	));

```

### Allow covariate rows to be repeated

**Sintassi:** obj &lt;&lt; Allow covariate rows to be repeated( state=0|1 )

**Descrizione:** Specifica se è consentito ripetere nel piano le righe covariate.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );DOE(	Custom Design,	Add Response( Maximize, "Y", ., ., . ),	Add Factor( Covariate, :sex, 0 ),	Add Factor( Covariate, :height, 0 ),	Add Factor( Covariate, :weight, 0 ),	Add Term( {1, 0} ),	Add Term( {1, 1} ),	Add Term( {2, 1} ),	Add Term( {3, 1} ),	Enforce Use of Selected Covariate Rows( 1 ),	Allow covariate rows to be repeated( 1 ),	Select Covariate Rows( [1 2 3 4] ),	Set Sample Size( 24 ));

```

### Augment Method

**Sintassi:** obj &lt;&lt; Augment Method( Replicate|Centerpoints|Fold Over|Add Axial|Augment )

**Descrizione:** Specifica il tipo di metodo di allargamento e i rispettivi parametri.

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );d = DOE( Augment Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );d << Augment Method( Augment );d << Set Sample Size( 24 );d << Make Design;

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/2x3x4 Factorial.jmp" );d = DOE( Augment Design, X( :X1, :X2, :X3 ), Y( :Y ) );d << Augment Method( Replicate, 2 );

```

**Esempio 3**

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );d = DOE( Augment Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );d << Augment Method( Centerpoints, 3 );

```

**Esempio 4**

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );d = DOE( Augment Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );d << Augment Method( Fold Over, [1 2] );

```

**Esempio 5**

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );d = DOE( Augment Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );d << Augment Method( Add Axial, 1, 2 );

```

### Blocks

**Sintassi:** obj &lt;&lt; Blocks

**Descrizione:** Specifica la dimensione del blocco per un piano con blocco incompleto bilanciato (BIBD).

**JMP Versione aggiunta:** 14

```jsl

d = DOE( Balanced Incomplete Block Design, Treatments( 3, {"L1", "L2", "L3"} ) );d << Blocks( 2 );d << Make Design;

```

### Center Points

**Sintassi:** obj &lt;&lt; Center Points

**Descrizione:** Specifica il numero di punti centrali.

**Esempio 1**

```jsl

d = DOE(	Custom Design,	Add Factor( Continuous, -1, 1, "X1", 0 ),	Add Factor( Continuous, -1, 1, "X2", 0 ));d << Make Model( Linear );d << Center Points( 2 );

```

**Esempio 2**

```jsl

DOE(	Definitive Screening Design,	Add Factor,	Add Factor,	Add Factor,	Add Factor,	Add Factor,	Add Factor,	Show Blocking Options( 1, 2 ),	Number of Extra Runs( 4 ),	Center Points( 1 ));

```

### Change Anticipated Coefficients

**Sintassi:** obj &lt;&lt; Change Anticipated Coefficients

**Descrizione:** Cambia i coefficienti anticipati nell&apos;analisi di potenza.

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );d = DOE( Evaluate Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );d << Change Anticipated Coefficients( [1 2 3 4 2 2 2 3 3 3] );

```

### Change Factor Settings

**Sintassi:** obj &lt;&lt; Change Factor Settings

**Descrizione:** Specifica il minimo, il massimo e il nome del fattore della miscela o continuo incluso nel primo argomento. Particolarmente utile per piattaforme con fattori inizialmente predefiniti.

**Esempio 1**

```jsl

d = DOE( Response Surface Design );d << Change Factor Settings( 1, 2, 3, "A" );d << Change Factor Settings( 2, 0, 4 );

```

**Esempio 2**

```jsl

d = DOE( Mixture Design );d << Change Factor Settings( 1, 0.1, 0.4, "A" );d << Change Factor Settings( 3, 0, 0.8, "C" );

```

### Check Inscribe

**Sintassi:** obj &lt;&lt; Check Inscribe

**Descrizione:** Ridimensiona il piano in modo che i punti assiali siano alle estremità inferiore e superiore del range.

```jsl

d = DOE( Response Surface Design, Make Design( 2 ) );d << Set Axial Choice( 2 );d << Check Inscribe;

```

### Choice Design Table Output

**Sintassi:** obj &lt;&lt; Choice Design Table Output( "Separa"|"Combinati" )

**Descrizione:** Specifica come creare una tabella di dati per un piano di scelta.

```jsl

DOE(	Choice Design,	{Add Factor( Categorical, {"L1", "L2"}, "X1", 0 ),	Add Factor( Categorical, {"L1", "L2"}, "X2", 0 ), Add Term( {1, 1} ), Add Term( {2, 1} ),	Set Prior Mean Choice( [0 0] ), Set Prior Variance Matrix( [1 0, 0 1] ),	Set Number of Attributes( 2 ), Set Number of Profiles( 2 ),	Set Number of Choice Sets( 8 ), Set Number of Surveys( 1 ),	Set Expected Number of Respondents( 1 ), Make Design,	Choice Design Table Output( Combined )});

```

### D Efficiency Weight

**Sintassi:** obj &lt;&lt; D Efficiency Weight

**Descrizione:** Utilizzare questa opzione per controllare l&apos;importanza relativa dell&apos;efficienza D nel ridurre la generazione di alias. Specificare un numero compreso tra zero e uno.

```jsl

DOE(	Custom Design,	Add Factor( Continuous, -1, 1, "X1", 0 ),	Add Factor( Continuous, -1, 1, "X2", 0 ),	D Efficiency Weight( 0.5 ),	Make Design);

```

### Design Search Time

**Sintassi:** obj &lt;&lt; Design Search Time( number )

**Descrizione:** Specifica il numero di secondi di ricerca di un piano.

```jsl

DOE(	Custom Design,	{Add Factor( Continuous, -1, 1, "X1", 0 ), Add Factor( Continuous, -1, 1, "X2", 0 ),	Set Sample Size( 7 ), Design Search Time( 8 ), Make Design});

```

### Disallowed Combinations

**Sintassi:** obj &lt;&lt; Disallowed Combinations

**Descrizione:** Permette di creare uno script che restituisce il valore vero per tutte le combinazioni di fattori che devono essere escluse dal piano.

```jsl

DOE(	Custom Design,	Add Factor( Continuous, -1, 1, "X1", 0 ),	Add Factor( Categorical, {"L1", "L2"}, "X2", 0 ),	Number of Starts( 100 ),	Disallowed Combinations( X1 > 0.5 & X2 == 2 ),	Make Design);

```

### Discrete Numeric Powers Set to Necessary

**Sintassi:** obj &lt;&lt; Discrete Numeric Powers Set to Necessary( state=0|1 )

**Descrizione:** Specifica se le potenze nei fattori numerici discreti devono essere termini del modello necessari.

```jsl

DOE(	Custom Design,	Add Factor( Discrete Numeric, {1, 2, 3}, "X1", 0 ),	Add Factor( Discrete Numeric, {1, 2, 3}, "X2", 0 ),	Discrete Numeric Powers Set to Necessary( 1 ),	Make Model( Linear ));

```

### Distribution Choice

**Sintassi:** obj &lt;&lt; Distribution Choice

**Descrizione:** Specifica la distribuzione per un piano di test accelerato di durata.

```jsl

DOE(	Accelerated Life Test Plan,	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Continuous Monitoring" ),	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),	Set Prior Mean ALT( [-40 1.5 2] ), Set Prior Std Error ALT( [10, 0.2, 0.5] ),	Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ), Use Prior Uncertainty( 1 ),	Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ),	Set Length of Test( 1000 ), Set Number of Units( 150 )});

```

### Enforce Use of Selected Covariate Rows

**Sintassi:** obj &lt;&lt; Enforce Use of Selected Covariate Rows( state=0|1 )

**Descrizione:** Specifica se tutte le righe covariate selezionate devono essere incluse nel piano.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );DOE(	Custom Design,	Add Response( Maximize, "Y", ., ., . ),	Add Factor( Covariate, :sex, 0 ),	Add Factor( Covariate, :height, 0 ),	Add Factor( Covariate, :weight, 0 ),	Add Term( {1, 0} ),	Add Term( {1, 1} ),	Add Term( {2, 1} ),	Add Term( {3, 1} ),	Enforce Use of Selected Covariate Rows( 1 ),	Allow covariate rows to be repeated( 1 ),	Select Covariate Rows( [1 2 3 4] ),	Set Sample Size( 24 ));

```

### FFF Optimality Criterion

**Sintassi:** obj &lt;&lt; FFF Optimality Criterion( "MaxPro"|"Centroide" )

**Descrizione:** Specifica il criterio utilizzato nel piano. Si consiglia il valore predefinito.

**Esempio 1**

```jsl

DOE(	Custom Design,	Add Factor( Continuous, -1, 1, "X1", 0 ),	Add Factor( Continuous, -1, 1, "X2", 0 ),	Add Factor( Continuous, -1, 1, "X3", 0 ),	Optimality Criterion( "Make I-optimal Design" ),	Make Design);

```

**Esempio 2**

```jsl

DOE(	Custom Design,	Add Factor( Continuous, -1, 1, "X1", 0 ),	Add Factor( Continuous, -1, 1, "X2", 0 ),	Add Factor( Continuous, -1, 1, "X3", 0 ),	Optimality Criterion( 2 ),	Make Design);

```

### Find Subset

**Sintassi:** obj &lt;&lt; Find Subset

**Descrizione:** Trova il sottoinsieme D-ottimale di un piano a vertici estremi.

```jsl

d = DOE( Mixture Design, Add Factor( Mixture, 0.1, 1, "X4", 0 ) );d << Mixture Design Type( Extreme Vertices, 3 );d << Find Subset( 10 );

```

### GOSSDDetails

**Sintassi:** obj &lt;&lt; GOSSDDetails

**Descrizione:** Restituisce le impostazioni correnti dei fattori come elenco.

**JMP Versione aggiunta:** 15

```jsl

d = DOE( Group Orthogonal Supersaturated Design );Show( d << GOSSDDetails );

```

### GOSSDStructure

**Sintassi:** obj &lt;&lt; GOSSDStructure

**Descrizione:** Specifica la struttura di un GOSSD

**JMP Versione aggiunta:** 15

```jsl

d = DOE( Group Orthogonal Supersaturated Design );d << GOSSDStructure( 6, 8 );

```

### Get Alias Matrix

**Sintassi:** obj &lt;&lt; Get Alias Matrix

**Descrizione:** Restituisce la matrice degli alias dalla valutazione del piano.

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );d = DOE( Evaluate Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );d << Get Alias Matrix;

```

### Get Design Diagnostics

**Sintassi:** obj &lt;&lt; Get Design Diagnostics

**Descrizione:** Restituisce efficienza D, efficienza G, efficienza A e varianza media di previsione.

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );d = DOE( Evaluate Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );d << Get Design Diagnostics;

```

### Get Effect Power

**Sintassi:** obj &lt;&lt; Get Effect Power

**Descrizione:** Restituisce il vettore di potenze per stime degli effetti.

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/2x3x4 Factorial.jmp" );d = DOE( Evaluate Design, X( :X1, :X2, :X3 ), Y( :Y ) );d << Get Effect Power;

```

### Get Estimation Efficiencies

**Sintassi:** obj &lt;&lt; Get Estimation Efficiencies

**Descrizione:** Restituisce un vettore per la maggiore larghezza di ciascuna stima dei parametri rispetto a un piano ideale.

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );d = DOE( Evaluate Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );d << Get Estimation Efficiencies;

```

### Get MaxPro Values

**Sintassi:** obj &lt;&lt; Get MaxPro Values

**Descrizione:** Restituisce i valori MaxPro per un piano rapido-flessibile, compresi alcuni sottopiani basati sui livelli di un fattore categorico.

**JMP Versione aggiunta:** 14

```jsl

d = DOE(	Space Filling Design,	{Add Factor( Continuous, -1, 1, "X1", 0 ), Add Factor( Continuous, -1, 1, "X2", 0 ),	Add Factor( Categorical, {"L1", "L2", "L3", "L4"}, "X3", 0 ),	FFF Optimality Criterion( MaxPro ), MaxPro Categorical Weight( 4 ),	Space Filling Design Type( Fast Flexible Filling, 100 )});d << Get MaxPro Values;

```

### Get Number of Random Starts

**Sintassi:** obj &lt;&lt; Get Number of Random Starts

**Descrizione:** Restituisce il numero di partenze casuali utilizzate nella generazione del piano.

**JMP Versione aggiunta:** 15

### Get Power

**Sintassi:** obj &lt;&lt; Get Power

**Descrizione:** Restituisce il vettore di potenze per stime dei parametri.

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );d = DOE( Evaluate Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );d << Get Power;

```

### Get Prediction Variances

**Sintassi:** obj &lt;&lt; Get Prediction Variances

**Descrizione:** Restituisce le varianze del vettore di previsione dal diagramma della relazione tra frazione dello spazio sperimentale e varianza prevista.

**JMP Versione aggiunta:** 14

```jsl

d = DOE(	Custom Design,	{Add Factor( Continuous, -1, 1, "X1", 0 ), Add Factor( Continuous, -1, 1, "X2", 0 ),	Set Sample Size( 7 ), Design Search Time( 8 ), Set Number of FDS points( 20000 ),	Make Design});d << Get Prediction Variances;

```

### Get X Matrix

**Sintassi:** obj &lt;&lt; Get X Matrix

**Descrizione:** Restituisce la matrice del piano (denominata anche matrice X).

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );d = DOE( Evaluate Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );d << Get X Matrix;

```

### Group New Runs Into Separate Block

**Sintassi:** obj &lt;&lt; Group New Runs Into Separate Block

**Descrizione:** Aggiunge un fattore di blocco che raggruppa nuove esecuzioni in blocchi separati quando si allarga un piano.

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );d = DOE( Augment Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );d << Group New Runs Into Separate Block;

```

### Load Constraints

**Sintassi:** obj &lt;&lt; Load Constraints

**Descrizione:** Carica una tabella di vincoli di fattori salvata in precedenza, per utilizzarla nell&apos;esperimento in corso.

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Diamond Constraints.jmp" );d = DOE(	Custom Design,	Add Factor( Continuous, -1, 1, "X1", 0 ),	Add Factor( Continuous, -1, 1, "X2", 0 ),	Add Term( {1, 0} ),	Load Constraints);

```

### Load Design

**Sintassi:** obj &lt;&lt; Load Design

**Descrizione:** Carica piano

```jsl

d = DOE( Custom Design );d << Load Design();

```

### Load Factors

**Sintassi:** obj &lt;&lt; Load Factors

**Descrizione:** Carica una tabella di fattori salvata in precedenza, per utilizzarla nell&apos;esperimento in corso.

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Factors.jmp" );DOE( Custom Design, Load Factors );

```

### Load Responses

**Sintassi:** obj &lt;&lt; Load Responses

**Descrizione:** Carica una tabella di dati di risposte precedentemente salvata.

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Response.jmp" );DOE( Custom Design, Load Responses );

```

### Local Design

**Sintassi:** obj &lt;&lt; Local Design( state=0|1 )

**Descrizione:** Specifica se deve essere creato il piano locale per la media a priori.

```jsl

DOE(	Accelerated Life Test Plan,	{ALT Plan Setup( 1 ), Set Monitoring Choice( 2, {5, 200, 200} ),	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),	Set Prior Mean ALT( [-40 1.5 2] ), Set Prior Std Error ALT( [10, 0.2, 0.5] ),	Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ), Local Design( 0 ),	Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ),	Set Length of Test( 1000 ), Set Inspection Times( [200 400 600 800 1000] ),	Set Number of Units( 150 ), Set Candidate Runs( [90 0 150, 100 0 150, 110 0 150] )});

```

### Make Design

**Sintassi:** obj &lt;&lt; Make Design

**Descrizione:** Crea il piano specificato nello script.

```jsl

d = DOE( Custom Design, Add factor, Add factor, Add factor );d << Make Model( RSM );d << Make Design;

```

### Make Model

**Sintassi:** obj &lt;&lt; Make Model( Linear|Interactions|RSM )

**Descrizione:** Aggiunge termini all&apos;elenco di termini del modello per il modello specificato.

**Esempio 1**

```jsl

d = DOE( Custom Design, Add Factor, Add Factor, Add Factor );d << Make Model( RSM );

```

**Esempio 2**

```jsl

d = DOE( Custom Design, Add Factor, Add Factor, Add Factor );d << Make Model( Interactions );

```

### Make Strip Plot Design

**Sintassi:** obj &lt;&lt; Make Strip Plot Design

**Descrizione:** Specifica un piano strip plot quando i fattori difficili da modificare variano indipendentemente dai fattori molto difficili da modificare.

```jsl

d = DOE(	Custom Design,	Add Factor( Continuous, -1, 1, "X1", 2 ),	Add Factor( Continuous, -1, 1, "X2", 1 ),	Add Factor( Continuous, -1, 1, "X3", 0 ));d << Set N Whole Plots( 4 );d << Make Strip Plot Design;

```

### Make Table

**Sintassi:** obj &lt;&lt; Make Table

**Descrizione:** Crea una tabella di dati dal piano corrente.

```jsl

d = DOE( Custom Design, Add factor, Add factor, Add factor );d << Make Design;d << Make Table;

```

### Make Test Plan

**Sintassi:** obj &lt;&lt; Make Test Plan

**Descrizione:** Crea il piano di test per un piano di test accelerato di durata.

```jsl

DOE(	Accelerated Life Test Plan,	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Monitoring at Intervals", {5, 200, 200} ),	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),	Set Prior Mean ALT( [-40 1.5 2] ), Set Prior Std Error ALT( [10, 0.2, 0.5] ),	Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ), Use Prior Uncertainty( 1 ),	Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ),	Set Length of Test( 1000 ), Set Inspection Times( [200 400 600 800 1000] ),	Set Number of Units( 150 ), Set Candidate Runs( [90 0 150, 100 0 150, 110 0 150] ),	Make Design, Make Test Plan});

```

### MaxPro Categorical Weight

**Sintassi:** obj &lt;&lt; MaxPro Categorical Weight

**Descrizione:** Specifica il peso MaxPro. I valori superiori a 1 aumentano la separazione dei punti che hanno lo stesso livello categorico.

**JMP Versione aggiunta:** 14

```jsl

DOE(	Space Filling Design,	{Add Factor( Continuous, -1, 1, "X1", 0 ), Add Factor( Continuous, -1, 1, "X2", 0 ),	Add Factor( Categorical, {"L1", "L2", "L3", "L4"}, "X3", 0 ),	FFF Optimality Criterion( MaxPro ), MaxPro Categorical Weight( 4 ),	Space Filling Design Type( Fast Flexible Filling, 100 )});

```

### Mixture Design Type

**Sintassi:** obj &lt;&lt; Mixture Design Type( Simplex Centroid|Simplex Lattice|ABCD|Extreme Vertices|Space Filling )

**Descrizione:** Specifica il tipo di piano della miscela. Vengono utilizzati i parametri predefiniti a meno che si specifichi il parametro come secondo argomento.

**Esempio 1**

```jsl

d = doe( Mixture Design );d << Mixture Design Type( Simplex Centroid, 2 );

```

**Esempio 2**

```jsl

d = doe( Mixture Design );d << Mixture Design Type( Simplex Lattice, 4 );

```

**Esempio 3**

```jsl

d = doe( Mixture Design );d << Mixture Design Type( ABCD );

```

**Esempio 4**

```jsl

d = doe( Mixture Design );d << Change Factor Settings( 1, .05, .25 );d << Mixture Design Type( Extreme Vertices, 3 );

```

**Esempio 5**

```jsl

d = doe( Mixture Design );d << Mixture Design Type( Space Filling, 25 );

```

### Mixture Sum

**Sintassi:** obj &lt;&lt; Mixture Sum

**Descrizione:** Utilizzare questa opzione quando si desidera esprimere la somma di tutti gli ingredienti diversa da 1. Il totale della miscela è la somma di tutte le quantità degli ingredienti.

```jsl

DOE(	Custom Design,	Mixture Sum( 50 ),	Add Factor( Mixture, 10, 25, "X1", 0 ),	Add Factor( Mixture, 0, 15, "X2", 0 ),	Add Factor( Mixture, 25, 40, "X3", 0 ),	Make Design);

```

### Nesting Structure

**Sintassi:** obj &lt;&lt; Nesting Structure

**Descrizione:** Specifica la struttura di nidificazione del piano. Usare un elenco con parentesi per indicare la nidificazione (il primo elemento è un fattore di nidificazione, il secondo elemento è un elenco con parentesi di fattori o strutture nidificati). Usare la concatenazione orizzontale (&apos;||&apos;) per indicare fattori o strutture incrociati.

```jsl

DOE(	MSA Design,	Add Factor( Categorical, {"L1", "L2"}, "X1", MSA( 4, 1, 1 ) ),	Add Factor( Categorical, {"L1", "L2"}, "X2", MSA( 4, 1, 1 ) ),	Add Factor( Categorical, {"L1", "L2"}, "X3", MSA( 4, 1, 1 ) ),	Nesting Structure( {"X1", {"X2"}} || "X3" ));

```

### Number of Column Starts

**Sintassi:** obj &lt;&lt; Number of Column Starts

**Descrizione:** Specifica il numero di volte in cui le colonne casuali sono ottimizzate per ciascun fattore di un piano di screening degli effetti principali.

```jsl

DOE(	Screening Design,	Add Factor( Continuous, -1, 1, "X1", 0 ),	Add Factor( Continuous, -1, 1, "X2", 0 ),	Add Factor( Continuous, -1, 1, "X3", 0 ),	Screening Type( 1 ),	Number of Column Starts( 100 ),	Set Sample Size( 12 ),	Make Design);

```

### Number of Extra Runs

**Sintassi:** obj &lt;&lt; Number of Extra Runs

**Descrizione:** Specifica il numero di esecuzioni aggiuntive da includere in un piano di screening definitivo.

```jsl

DOE(	Definitive Screening Design,	Add Factor,	Add Factor,	Add Factor,	Add Factor,	Add Factor,	Add Factor,	Show Blocking Options( 1, 2 ),	Number of Extra Runs( 4 ));

```

### Number of Starts

**Sintassi:** obj &lt;&lt; Number of Starts

**Descrizione:** Specifica il numero di volte in cui il piano viene rigenerato per ottimizzare il piano generale.

```jsl

DOE(	Custom Design,	Add Factor( Continuous, -1, 1, "X1", 0 ),	Add Factor( Continuous, -1, 1, "X2", 0 ),	Add Factor( Continuous, -1, 1, "X3", 0 ),	Number of Starts( 1000 ),	Make Design);

```

### Optimality Criterion

**Sintassi:** obj &lt;&lt; Optimality Criterion( "Consigliato"|"Costruisci piano D-ottimale"|"Costruisci piano I-ottimale"|"Costruisci piano A-ottimale"|"Costruisci piano alias-ottimale" )

**Descrizione:** Specifica il criterio utilizzato nel piano. Si consiglia il valore predefinito.

**Esempio 1**

```jsl

DOE(	Custom Design,	Add Factor( Continuous, -1, 1, "X1", 0 ),	Add Factor( Continuous, -1, 1, "X2", 0 ),	Add Factor( Continuous, -1, 1, "X3", 0 ),	Optimality Criterion( "Make I-optimal Design" ),	Make Design);

```

**Esempio 2**

```jsl

DOE(	Custom Design,	Add Factor( Continuous, -1, 1, "X1", 0 ),	Add Factor( Continuous, -1, 1, "X2", 0 ),	Add Factor( Continuous, -1, 1, "X3", 0 ),	Optimality Criterion( 2 ),	Make Design);

```

### Order Column

**Sintassi:** obj &lt;&lt; Order Column

**Descrizione:** Richiede una colonna Ordine quando viene creata la tabella di dati.

**JMP Versione aggiunta:** 14

```jsl

d = DOE( Balanced Incomplete Block Design );d << Treatments( 3, {"L1", "L2", "L3"} );d << Make Design;d << OrderColumn( 1 );

```

### Prior Parameter Variance

**Sintassi:** obj &lt;&lt; Prior Parameter Variance

**Descrizione:** Utilizzare questa opzione per controllare il peso utilizzato per i termini Se possibile in un modello. I valori più elevati significano maggiori informazioni a priori e una varianza inferiore. Le varianze sono i reciproci dei valori inseriti.

```jsl

DOE(	Custom Design,	Add Factor( Continuous, -1, 1, "X1", 0 ),	Add Factor( Continuous, -1, 1, "X2", 0 ),	Add Potential Term( {1, 1} ),	Add Potential Term( {2, 1} ),	Add Potential Term( {1, 1}, {2, 1} ),	Prior Parameter Variance( [0, 1, 2, 6] ),	Make Design);

```

### Prior Specification Choice

**Sintassi:** obj &lt;&lt; Prior Specification Choice

**Descrizione:** Imposta l&apos;opzione per specificare i parametri a priori, dove 1 indica Specifica intercetta e 2 indica Specifica quantile.

```jsl

DOE(	Accelerated Life Test Plan,	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Continuous Monitoring" ),	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),	Prior Specification Choice( 1 ), Set Prior Mean ALT( [-40 1.5 2] ),	Set Prior Std Error ALT( [10, 0.2, 0.5] ),	Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ), Use Prior Uncertainty( 1 ),	Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ),	Set Length of Test( 1000 ), Set Number of Units( 150 )});

```

### Reference Design

**Sintassi:** obj &lt;&lt; Reference Design

**Descrizione:** Specifica il piano di riferimento per il confronto tra piani.

**JMP Versione aggiunta:** 14

```jsl

DOE(	Custom Design,	Add Factor,	Add Factor,	Add Factor,	Set Sample Size( 12 ),	Make Design,	Make Table);DOE( Custom Design, Add Factor, Add Factor, Add Factor, Make Design, Make Table );DOE(	Custom Design,	Add Factor,	Add Factor,	Add Factor,	Set Sample Size( 4 ),	Make Design,	Make Table);DOE(	Compare Designs,	Reference Design( "Custom Design", X( :X1, :X2, :X3 ) ),	Additional Designs(		"Custom Design 2",		X( :X1, :X2, :X3 ),		"Custom Design 3",		X( :X1, :X2, :X3 )	));

```

### Remove Alias Term

**Sintassi:** obj &lt;&lt; Remove Alias Term

**Descrizione:** Rimuove un termine dall&apos;elenco di termini alias. Specifica il numero e potenza dei fattori per ciascun effetto in un elenco. Crea interazioni separando gli effetti con virgole.

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );d = DOE( Evaluate Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );d << Remove Alias Term( {1, 1}, {3, 1} );

```

### Remove All Alias Terms

**Sintassi:** obj &lt;&lt; Remove All Alias Terms

**Descrizione:** Rimuove tutti i termini alias dall&apos;elenco dei termini alias

```jsl

d = DOE(	Custom Design,	Add Factor( Continuous, -1, 1, "X1", 0 ),	Add Factor( Continuous, -1, 1, "X2", 0 ));d << Make Model( Linear );d << Remove All Alias Terms;

```

### Remove Term

**Sintassi:** obj &lt;&lt; Remove Term

**Descrizione:** Rimuove un termine dall&apos;elenco di termini del modello. Specifica il numero e potenza dei fattori per ciascun effetto in un elenco. Crea interazioni separando gli effetti con virgole.

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );d = DOE( Evaluate Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );d << Remove Term( {1, 1}, {3, 1} );d << Remove Term( {3, 2} );

```

### Replicates

**Sintassi:** obj &lt;&lt; Replicates

**Descrizione:** Specifica il numero di esecuzioni replicate. Per i piani MSA, un secondo argomento specifica la struttura della replica: 0=Completamente randomizzata, 1=Ripetizione batch, 2=Ripetizione veloce.

**Esempio 1**

```jsl

d = DOE(	Custom Design,	Add Factor( Continuous, -1, 1, "X1", 0 ),	Add Factor( Continuous, -1, 1, "X2", 0 ));d << Make Model( Linear );d << Replicates( 2 );

```

**Esempio 2**

```jsl

d = DOE(	MSA Design,	{Add Response( None, "Y", ., ., . ), Add Factor(		Categorical,		{"L1", "L2"},		"X1",		MSA( 4, 1 )	), Add Factor( Categorical, {"L1", "L2"}, "X2", MSA( 4, 1 ) ),	Add Factor( Categorical, {"L1", "L2"}, "X3", MSA( 4, 1 ) ), Set Random Seed( 3983347 ),	Replicates( 2, 0 ), Simulate Responses( 0 )});

```

### Report

**Sintassi:** obj &lt;&lt; Report

**Descrizione:** Restituisce un riferimento all&apos;oggetto del report.

```jsl

d = DOE( Custom Design );r = d << report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Save Constraints

**Sintassi:** obj &lt;&lt; Save Constraints

**Descrizione:** Salva i vincoli dei fattori dell&apos;esperimento corrente in una tabella JMP, in modo da poterli utilizzare per un altro esperimento

```jsl

DOE(	Custom Design,	Add Response( Maximize, "Y", ., ., . ),	Add Factor( Continuous, -1, 1, "X1", 0 ),	Add Factor( Continuous, -1, 1, "X2", 0 ),	Add Factor( Continuous, -1, 1, "X3", 0 ),	Add Constraint( [1 1 0 1, 1 0 1 1] ),	Add Term( {1, 0} ),	Save Constraints);

```

### Save Factors

**Sintassi:** obj &lt;&lt; Save Factors

**Descrizione:** Salva i fattori appena creati in una tabella JMP, in modo da poterli utilizzare per un altro esperimento.

```jsl

DOE(	Custom Design,	Add Response( Match Target, "Stretch", 350, 550, 1 ),	Add Factor( Continuous, 0.7, 1.7, "Silica", 0 ),	Add Factor( Continuous, 1.8, 2.8, "Sulfur", 0 ),	Add Factor( Continuous, 40, 60, "Silane", 0 ),	Save Factors);

```

### Save Responses

**Sintassi:** obj &lt;&lt; Save Responses

**Descrizione:** Salva le risposte create dall&apos;utente come tabella di dati JMP. È possibile caricare queste risposte in altri esperimenti.

```jsl

DOE(	Custom Design,	Add Response( Match Target, "Stretch", 350, 550, 1 ),	Add Factor( Continuous, 0.7, 1.7, "Silica", 0 ),	Add Factor( Continuous, 1.8, 2.8, "Sulfur", 0 ),	Add Factor( Continuous, 40, 60, "Silane", 0 ),	Save Responses);

```

### Save Script to Data Table

**Sintassi:** obj &lt;&lt; Save Script to Data Table

**Descrizione:** Crea uno script che riprodurrà questo piano.

### Save Script to Script Window

**Sintassi:** obj &lt;&lt; Save Script to Script Window

**Descrizione:** Crea uno script che riprodurrà questo piano.

```jsl

DOE(	Custom Design,	Add Factor( Continuous, -1, 1, "X1", 0 ),	Add Factor( Continuous, -1, 1, "X2", 0 ),	Make Design,	Save Script to Script Window);

```

### Save X Matrix

**Sintassi:** obj &lt;&lt; Save X Matrix( state=0|1 )

**Descrizione:** Salva la matrice del piano (denominata anche matrice X) come proprietà di una tabella nella tabella di dati di JMP che contiene il piano.

```jsl

DOE(	Custom Design,	Add Factor( Continuous, -1, 1, "X1", 0 ),	Add Factor( Continuous, -1, 1, "X2", 0 ),	Save X Matrix,	Make Design,	Make Table);

```

### Screening Type

**Sintassi:** obj &lt;&lt; Screening Type

**Descrizione:** Specifica un piano di screening degli effetti principali che è ortogonale o quasi ortogonale.

```jsl

d = DOE(	Screening Design,	Add Factor( Continuous, -1, 1, "X1", 0 ),	Add Factor( Continuous, -1, 1, "X2", 0 ),	Add Factor( Continuous, -1, 1, "X3", 0 ));d << Screening Type( 1 );d << Set Sample Size( 12 );d << Make Design;

```

### Select Covariate Rows

**Sintassi:** obj &lt;&lt; Select Covariate Rows

**Descrizione:** Specifica le righe della tabella covariata da selezionare in DOE.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );DOE(	Custom Design,	Add Response( Maximize, "Y", ., ., . ),	Add Factor( Covariate, :sex, 0 ),	Add Factor( Covariate, :height, 0 ),	Add Factor( Covariate, :weight, 0 ),	Add Term( {1, 0} ),	Add Term( {1, 1} ),	Add Term( {2, 1} ),	Add Term( {3, 1} ),	Enforce Use of Selected Covariate Rows( 1 ),	Allow covariate rows to be repeated( 1 ),	Select Covariate Rows( [1 2 3 4] ),	Set Sample Size( 24 ));

```

### Set ALT Probability of Interest

**Sintassi:** obj &lt;&lt; Set ALT Probability of Interest

**Descrizione:** Imposta la probabilità osservata per un piano di test accelerato di durata.

```jsl

DOE(	Accelerated Life Test Plan,	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Continuous Monitoring" ),	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),	Set Prior Mean ALT( [-40 1.5 2] ), Set Prior Std Error ALT( [10, 0.2, 0.5] ),	Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ), Use Prior Uncertainty( 1 ),	Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ),	Set Length of Test( 1000 ), Set Number of Units( 150 )});

```

### Set ALT Time Range

**Sintassi:** obj &lt;&lt; Set ALT Time Range

**Descrizione:** Imposta il range di tempo osservato per un piano di test accelerato di durata.

```jsl

DOE(	Accelerated Life Test Plan,	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Continuous Monitoring" ),	ALT Optimality Criterion( "Make Failure Probability Optimal" ),	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),	Set Prior Mean ALT( [-40 1.5 2] ), Set Prior Std Error ALT( [10, 0.2, 0.5] ),	Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ), Use Prior Uncertainty( 1 ),	Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ),	Set Length of Test( 1000 ), Set Number of Units( 150 )});

```

### Set Average Cluster Size

**Sintassi:** obj &lt;&lt; Set Average Cluster Size

**Descrizione:** Controlla il numero dei punti casuali per la clusterizzazione di un piano a spazio pieno rapido e flessibile.

```jsl

DOE(	Space Filling Design,	Change Factor Settings( 1, -1, 1, "X1" ),	Change Factor Settings( 2, -1, 1, "X2" ),	Set Average Cluster Size( 100 ),	Space Filling Design Type( Fast Flexible Filling, 50 ));

```

### Set Axial Choice

**Sintassi:** obj &lt;&lt; Set Axial Choice( 1|2|3|4 )

**Descrizione:** Specifica le impostazioni del valore assiale. Utilizza 1 per Ruotabile, 2 per Ortogonale, 3 per Sulla faccia e 4 per Specificato dall&apos;utente.

```jsl

d = DOE( Response Surface Design, Make Design( 2 ) );d << Set Axial Choice( 2 );

```

### Set Axial Value

**Sintassi:** obj &lt;&lt; Set Axial Value

**Descrizione:** Specifica il valore assiale specificato dall&apos;utente.

```jsl

d = DOE( Response Surface Design, Make Design( 2 ) );d << Set Axial Value( 2 );

```

### Set Candidate Runs

**Sintassi:** obj &lt;&lt; Set Candidate Runs

**Descrizione:** Imposta le esecuzioni candidate per un piano di test accelerato di durata.

```jsl

DOE(	Accelerated Life Test Plan,	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Monitoring at Intervals", {5, 200, 200} ),	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),	Set Prior Mean ALT( [-40 1.5 2] ), Set Prior Std Error ALT( [10, 0.2, 0.5] ),	Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ), Use Prior Uncertainty( 1 ),	Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ),	Set Length of Test( 1000 ), Set Inspection Times( [200 400 600 800 1000] ),	Set Number of Units( 150 ), Set Candidate Runs( [90 0 150, 100 0 150, 110 0 150] )});

```

### Set Delta For Power

**Sintassi:** obj &lt;&lt; Set Delta For Power

**Descrizione:** Specifica i valori dei coefficienti previsti nell&apos;analisi di potenza. I coefficienti previsti saranno la metà del valore specificato.

```jsl

DOE(	Custom Design,	Add Factor( Continuous, -1, 1, "X1", 0 ),	Add Factor( Continuous, -1, 1, "X2", 0 ),	Set Delta For Power( 3 ),	Make Design);

```

### Set Expected Number of Respondents

**Sintassi:** obj &lt;&lt; Set Expected Number of Respondents

**Descrizione:** Imposta il numero previsto di rispondenti per indagine.

```jsl

DOE(	Choice Design,	{Add Factor( Categorical, {"L1", "L2"}, "X1", 0 ),	Add Factor( Categorical, {"L1", "L2"}, "X2", 0 ), Set Random Seed( 1245253625 ),	Add Term( {1, 1} ), Add Term( {2, 1} ), Set Prior Mean Choice( [0 0] ),	Set Prior Variance Matrix( [1 0, 0 1] ), Set Number of Attributes( 2 ),	Set Number of Profiles( 2 ), Set Number of Choice Sets( 8 ), Set Number of Surveys( 1 ),	Set Expected Number of Respondents( 1 )});

```

### Set Generators

**Sintassi:** obj &lt;&lt; Set Generators

**Descrizione:** Specifica i generatori da usare in un piano di screening.

```jsl

DOE(	Screening Design,	{Add Factor, Add Factor, Add Factor, Make Design( 1 ), Set Generators( [1, 1, 0] )});

```

### Set Inspection Times

**Sintassi:** obj &lt;&lt; Set Inspection Times

**Descrizione:** Imposta i tempi di ispezione per un piano di test accelerato di durata.

```jsl

DOE(	Accelerated Life Test Plan,	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Monitoring at Intervals", {5, 200, 200} ),	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),	Set Prior Mean ALT( [-40 1.5 2] ), Set Prior Std Error ALT( [10, 0.2, 0.5] ),	Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ), Use Prior Uncertainty( 1 ),	Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ),	Set Length of Test( 1000 ), Set Inspection Times( [200 400 600 800 1000] ),	Set Number of Units( 150 ), Set Candidate Runs( [90 0 150, 100 0 150, 110 0 150] )});

```

### Set Length of Test

**Sintassi:** obj &lt;&lt; Set Length of Test

**Descrizione:** Imposta la lunghezza del test per un piano di test accelerato di durata.

```jsl

DOE(	Accelerated Life Test Plan,	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Continuous Monitoring" ),	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),	Set Prior Mean ALT( [-40 1.5 2] ), Set Prior Std Error ALT( [10, 0.2, 0.5] ),	Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ), Use Prior Uncertainty( 1 ),	Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ),	Set Length of Test( 1000 ), Set Number of Units( 150 )});

```

### Set Level Values

**Sintassi:** obj &lt;&lt; Set Level Values

**Descrizione:** Imposta i valori del livello per i(l) fattore(i) di accelerazione in un piano di test accelerato di durata.

```jsl

DOE(	Accelerated Life Test Plan,	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Monitoring at Intervals", {5, 200, 200} ),	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),	Set Prior Mean ALT( [-40 1.5 2] ), Set Prior Std Error ALT( [10, 0.2, 0.5] ),	Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ), Use Prior Uncertainty( 1 ),	Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ),	Set Length of Test( 1000 ), Set Inspection Times( [200 400 600 800 1000] ),	Set Number of Units( 150 ), Set Candidate Runs( [90 0 150, 100 0 150, 110 0 150] )});

```

### Set Monitoring Choice

**Sintassi:** obj &lt;&lt; Set Monitoring Choice

**Descrizione:** Specifica il tipo di monitoraggio di un piano di test accelerato di durata.

```jsl

DOE(	Accelerated Life Test Plan,	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Continuous Monitoring" ),	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),	Set Prior Mean ALT( [-40 1.5 2] ), Set Prior Std Error ALT( [10, 0.2, 0.5] ),	Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ), Use Prior Uncertainty( 1 ),	Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ),	Set Length of Test( 1000 ), Set Number of Units( 150 )});

```

### Set N Subplots

**Sintassi:** obj &lt;&lt; Set N Subplots

**Descrizione:** Specifica il numero di diagrammi secondari quando sono presenti sia fattori difficili sia molto difficili da modificare.

```jsl

d = DOE(	Custom Design,	Add Factor( Continuous, -1, 1, "X1", 2 ),	Add Factor( Continuous, -1, 1, "X2", 1 ),	Add Factor( Continuous, -1, 1, "X3", 0 ));d << Set N Whole Plots( 4 );d << Set N Subplots( 8 );

```

### Set N Whole Plots

**Sintassi:** obj &lt;&lt; Set N Whole Plots

**Descrizione:** Specifica il numero di diagrammi completi quando sono presenti fattori difficili da modificare o molto difficili da modificare.

```jsl

d = DOE(	Custom Design,	Add Factor( Continuous, -1, 1, "X1", 1 ),	Add Factor( Continuous, -1, 1, "X2", 0 ));d << Set N Whole Plots( 6 );

```

### Set Number of Attributes

**Sintassi:** obj &lt;&lt; Set Number of Attributes

**Descrizione:** Imposta il numero di attributi che può cambiare in un set di scelte.

```jsl

DOE(	Choice Design,	{Add Factor( Categorical, {"L1", "L2"}, "X1", 0 ),	Add Factor( Categorical, {"L1", "L2"}, "X2", 0 ), Set Random Seed( 1245253625 ),	Add Term( {1, 1} ), Add Term( {2, 1} ), Set Prior Mean Choice( [0 0] ),	Set Prior Variance Matrix( [1 0, 0 1] ), Set Number of Attributes( 2 ),	Set Number of Profiles( 2 ), Set Number of Choice Sets( 8 ), Set Number of Surveys( 1 ),	Set Expected Number of Respondents( 1 )});

```

### Set Number of Choice Sets

**Sintassi:** obj &lt;&lt; Set Number of Choice Sets

**Descrizione:** Imposta il numero di set di scelte per indagine.

```jsl

DOE(	Choice Design,	{Add Factor( Categorical, {"L1", "L2"}, "X1", 0 ),	Add Factor( Categorical, {"L1", "L2"}, "X2", 0 ), Set Random Seed( 1245253625 ),	Add Term( {1, 1} ), Add Term( {2, 1} ), Set Prior Mean Choice( [0 0] ),	Set Prior Variance Matrix( [1 0, 0 1] ), Set Number of Attributes( 2 ),	Set Number of Profiles( 2 ), Set Number of Choice Sets( 8 ), Set Number of Surveys( 1 ),	Set Expected Number of Respondents( 1 )});

```

### Set Number of FDS points

**Sintassi:** obj &lt;&lt; Set Number of FDS points

**Descrizione:** Imposta il numero di punti usato per generare il diagramma della relazione tra frazione dello spazio sperimentale e varianza prevista.

**JMP Versione aggiunta:** 14

```jsl

DOE(	Custom Design,	{Add Factor( Continuous, -1, 1, "X1", 0 ), Add Factor( Continuous, -1, 1, "X2", 0 ),	Set Sample Size( 7 ), Design Search Time( 8 ), Set Number of FDS points( 20000 ),	Make Design});

```

### Set Number of Profiles

**Sintassi:** obj &lt;&lt; Set Number of Profiles

**Descrizione:** Imposta il numero di profili per set di scelte.

```jsl

DOE(	Choice Design,	{Add Factor( Categorical, {"L1", "L2"}, "X1", 0 ),	Add Factor( Categorical, {"L1", "L2"}, "X2", 0 ), Set Random Seed( 1245253625 ),	Add Term( {1, 1} ), Add Term( {2, 1} ), Set Prior Mean Choice( [0 0] ),	Set Prior Variance Matrix( [1 0, 0 1] ), Set Number of Attributes( 2 ),	Set Number of Profiles( 2 ), Set Number of Choice Sets( 8 ), Set Number of Surveys( 1 ),	Set Expected Number of Respondents( 1 )});

```

### Set Number of Surveys

**Sintassi:** obj &lt;&lt; Set Number of Surveys

**Descrizione:** Imposta il numero di indagini per un piano di scelta.

```jsl

DOE(	Choice Design,	{Add Factor( Categorical, {"L1", "L2"}, "X1", 0 ),	Add Factor( Categorical, {"L1", "L2"}, "X2", 0 ), Set Random Seed( 1245253625 ),	Add Term( {1, 1} ), Add Term( {2, 1} ), Set Prior Mean Choice( [0 0] ),	Set Prior Variance Matrix( [1 0, 0 1] ), Set Number of Attributes( 2 ),	Set Number of Profiles( 2 ), Set Number of Choice Sets( 8 ), Set Number of Surveys( 1 ),	Set Expected Number of Respondents( 1 )});

```

### Set Number of Units

**Sintassi:** obj &lt;&lt; Set Number of Units

**Descrizione:** Imposta il numero di unità nell&apos;esperimento per un piano di test accelerato di durata.

```jsl

DOE(	Accelerated Life Test Plan,	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Continuous Monitoring" ),	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),	Set Prior Mean ALT( [-40 1.5 2] ), Set Prior Std Error ALT( [10, 0.2, 0.5] ),	Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ), Use Prior Uncertainty( 1 ),	Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ),	Set Length of Test( 1000 ), Set Number of Units( 150 )});

```

### Set Prior Correlation ALT

**Sintassi:** obj &lt;&lt; Set Prior Correlation ALT

**Descrizione:** Imposta le correlazioni a priori per un piano di test di durata accelerato.

**JMP Versione aggiunta:** 16

```jsl

DOE(	Accelerated Life Test Plan,	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Continuous Monitoring" ),	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),	Set Prior Mean ALT( [-40 1.5 2] ), Set Prior Std Error ALT( [10, 0.2, 0.5] ),	Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ), Use Prior Uncertainty( 1 ),	Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ),	Set Length of Test( 1000 ), Set Number of Units( 150 )});

```

### Set Prior Mean ALT

**Sintassi:** obj &lt;&lt; Set Prior Mean ALT

**Descrizione:** Imposta la media a priori per un piano di test accelerato di durata.

```jsl

DOE(	Accelerated Life Test Plan,	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Continuous Monitoring" ),	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),	Set Prior Mean ALT( [-40 1.5 2] ), Set Prior Std Error ALT( [10, 0.2, 0.5] ),	Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ), Use Prior Uncertainty( 1 ),	Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ),	Set Length of Test( 1000 ), Set Number of Units( 150 )});

```

### Set Prior Mean Choice

**Sintassi:** obj &lt;&lt; Set Prior Mean Choice

**Descrizione:** Imposta la media a priori per un piano di scelta.

```jsl

DOE(	Choice Design,	{Add Factor( Categorical, {"L1", "L2"}, "X1", 0 ),	Add Factor( Categorical, {"L1", "L2"}, "X2", 0 ), Set Random Seed( 1245253625 ),	Add Term( {1, 1} ), Add Term( {2, 1} ), Set Prior Mean Choice( [0 0] ),	Set Prior Variance Matrix( [1 0, 0 1] ), Set Number of Attributes( 2 ),	Set Number of Profiles( 2 ), Set Number of Choice Sets( 8 ), Set Number of Surveys( 1 ),	Set Expected Number of Respondents( 1 )});

```

### Set Prior Quantile ALT

**Sintassi:** obj &lt;&lt; Set Prior Quantile ALT

**Descrizione:** Imposta le informazioni per specificare l&apos;intercetta a priori basata su un quantile.

```jsl

DOE(	Accelerated Life Test Plan,	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Continuous Monitoring" ),	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),	Prior Specification Choice( 2 ), Set Prior Quantile ALT( {[1.5 2], 0.065, 2642, 45} ),	Set Prior Std Error ALT( [10, 0.2, 0.5] ),	Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ), Use Prior Uncertainty( 1 ),	Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ),	Set Length of Test( 1000 ), Set Number of Units( 150 )});

```

### Set Prior Std Error ALT

**Sintassi:** obj &lt;&lt; Set Prior Std Error ALT

**Descrizione:** Imposta l&apos;errore standard a priori per un piano di test di durata accelerato.

**JMP Versione aggiunta:** 16

```jsl

DOE(	Accelerated Life Test Plan,	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Continuous Monitoring" ),	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),	Set Prior Mean ALT( [-40 1.5 2] ), Set Prior Std Error ALT( [10, 0.2, 0.5] ),	Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ), Use Prior Uncertainty( 1 ),	Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ),	Set Length of Test( 1000 ), Set Number of Units( 150 )});

```

### Set Prior Variance ALT

**Sintassi:** obj &lt;&lt; Set Prior Variance ALT

**Descrizione:** Imposta la varianza a priori per un piano di test accelerato di durata.

```jsl

DOE(	Accelerated Life Test Plan,	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Continuous Monitoring" ),	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),	Set Prior Mean ALT( [-40 1.5 2] ), Set Prior Variance ALT( [0.1 0 0, 0 0.1 0, 0 0 0.1] ),	Use Prior Uncertainty( 1 ), Set ALT Time Range( 10000, 20000 ),	Set ALT Probability of Interest( 0.1 ), Set Length of Test( 1000 ),	Set Number of Units( 150 )});

```

### Set Prior Variance Matrix

**Sintassi:** obj &lt;&lt; Set Prior Variance Matrix

**Descrizione:** Imposta la matrice di varianza a priori per un piano di scelta.

```jsl

DOE(	Choice Design,	{Add Factor( Categorical, {"L1", "L2"}, "X1", 0 ),	Add Factor( Categorical, {"L1", "L2"}, "X2", 0 ), Set Random Seed( 1245253625 ),	Add Term( {1, 1} ), Add Term( {2, 1} ), Set Prior Mean Choice( [0 0] ),	Set Prior Variance Matrix( [1 0, 0 1] ), Set Number of Attributes( 2 ),	Set Number of Profiles( 2 ), Set Number of Choice Sets( 8 ), Set Number of Surveys( 1 ),	Set Expected Number of Respondents( 1 )});

```

### Set RMSE

**Sintassi:** obj &lt;&lt; Set RMSE

**Descrizione:** Specifica lo scarto quadratico medio (RMSE) previsto nell&apos;analisi di potenza.

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );d = DOE( Evaluate Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );d << Set RMSE( 1.5 );

```

### Set Random Seed

**Sintassi:** obj &lt;&lt; Set Random Seed

**Descrizione:** Utile a fini didattici. Se si imposta il seme casuale su un valore specifico, tutti gli studenti avranno il medesimo piano.

```jsl

DOE(	Custom Design,	Add Factor( Continuous, -1, 1, "X1", 0 ),	Add Factor( Continuous, -1, 1, "X2", 0 ),	Set Random Seed( 34067086 ),	Make Design);

```

### Set Run Order

**Sintassi:** obj &lt;&lt; Set Run Order

**Descrizione:** Specifica le modalità di impostazione dell&apos;ordine delle esecuzioni quando si crea una tabella di dati da un piano.

```jsl

d = DOE( Custom Design, Add factor, Add factor, Add factor );d << Make Design;d << Set Run Order( Sort Left to Right );d << Make Table;

```

### Set Runs Per Random Block

**Sintassi:** obj &lt;&lt; Set Runs Per Random Block

**Descrizione:** Specifica la dimensione dei blocchi casuali nel piano.

```jsl

d = DOE(	Custom Design,	Add Factor( Continuous, -1, 1, "X1", 0 ),	Add Factor( Continuous, -1, 1, "X2", 0 ),	Make Model( Linear ));d << Set Runs Per Random Block( 4 );

```

### Set Sample Size

**Sintassi:** obj &lt;&lt; Set Sample Size

**Descrizione:** Specifica la dimensione campionaria prima della creazione del piano. Se il numero specificato è inferiore al valore minimo mostrato nel designer, la dimensione campionaria è impostata al valore minimo.

```jsl

d = DOE( Custom Design, Add factor, Add factor, Add factor );d << Make Model( Linear );d << Set Sample Size( 12 );

```

### Set Significance Level

**Sintassi:** obj &lt;&lt; Set Significance Level

**Descrizione:** Cambia il livello di significatività nell&apos;analisi di potenza.

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );d = DOE( Evaluate Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );d << Set Significance Level( 0.10 );

```

### Set Strength

**Sintassi:** obj &lt;&lt; Set Strength

**Descrizione:** Imposta la forza degli array di copertura

```jsl

d = DOE(	Covering Array,	Add factor( Categorical ),	Add factor( Categorical ),	Add factor( Categorical ));d << Set Strength( 3 );d << Make Table;

```

### Show Blocking Options

**Sintassi:** obj &lt;&lt; Show Blocking Options

**Descrizione:** Specifica la scelta di creazione di blocchi e il numero di blocchi per un piano di screening definitivo. Un valore pari a 0 indica nessun blocco.

**Esempio 1**

```jsl

DOE(	Definitive Screening Design,	Add Factor,	Add Factor,	Add Factor,	Add Factor,	Add Factor,	Add Factor,	Show Blocking Options( 0, 0 ),	Number of Extra Runs( 4 ));

```

**Esempio 2**

```jsl

DOE(	Definitive Screening Design,	Add Factor,	Add Factor,	Add Factor,	Add Factor,	Add Factor,	Add Factor,	Show Blocking Options( 1, 2 ),	Number of Extra Runs( 4 ));

```

### Simulate Responses

**Sintassi:** obj &lt;&lt; Simulate Responses( state=0|1 )

**Descrizione:** Aggiunge i dati delle risposte alla tabella dei piani JMP. Utile a fini didattici, per l&apos;insegnamento di DOE.

```jsl

DOE(	Custom Design,	Add Factor( Continuous, -1, 1, "X1", 0 ),	Add Factor( Continuous, -1, 1, "X2", 0 ),	Make Design,	Simulate Responses,	Make Table);

```

### Solve for Power

**Sintassi:** obj &lt;&lt; Solve for Power

**Descrizione:** Imposta i coefficienti anticipati nell&apos;analisi di potenza in modo che la potenza si avvicini al valore specificato.

**JMP Versione aggiunta:** 16

```jsl

DOE(	Custom Design,	Add Factor( Continuous, -1, 1, "X1", 0 ),	Add Factor( Continuous, -1, 1, "X2", 0 ),	Make Design,	Solve for Power( 0.8 ));

```

### Space Filling Design Type

**Sintassi:** obj &lt;&lt; Space Filling Design Type( Sphere Packing|Latin Hypercube|Uniform|Minimum Potential|Maximum Entropy|IMSE Optimal|Fast Flexible Filling )

**Descrizione:** Specifica il tipo di piano a spazio pieno e il numero di esecuzioni.

**Esempio 1**

```jsl

d = DOE( Space Filling Design );d << Space Filling Design Type( Sphere Packing, 30 );

```

**Esempio 2**

```jsl

d = DOE( Space Filling Design );d << Space Filling Design Type( Latin Hypercube, 100 );

```

**Esempio 3**

```jsl

d = DOE( Space Filling Design );d << Space Filling Design Type( Uniform, 20 );

```

**Esempio 4**

```jsl

d = DOE( Space Filling Design );d << Space Filling Design Type( Fast Flexible Filling, 100 );

```

**Esempio 5**

```jsl

d = DOE( Space Filling Design, Space Filling Design Type( IMSE Optimal, 20 ) );d << Theta( [2, 3] );d << Make Design;

```

### Sphere Radius

**Sintassi:** obj &lt;&lt; Sphere Radius

**Descrizione:** Specifica una regione sferica del piano e permette di definirne il raggio.

```jsl

DOE(	Custom Design,	Add Factor( Continuous, -1, 1, "X1", 0 ),	Add Factor( Continuous, -1, 1, "X2", 0 ),	Sphere Radius( 1 ),	Make Design);

```

### Split Plot Variance Ratio

**Sintassi:** obj &lt;&lt; Split Plot Variance Ratio( Whole Plot Ratio | [Whole Plot Ratio, Subplot Ratio] )

**Descrizione:** Per i fattori difficili da modificare, specifica il rapporto di varianza tra l&apos;errore del diagramma completo e l&apos;errore esecuzione per esecuzione. Per i fattori difficili e molto difficili da modificare, specifica il rapporto tra il diagramma completo e l&apos;errore del diagramma secondario e l&apos;errore esecuzione per esecuzione.

**Esempio 1**

```jsl

DOE(	Custom Design,	Add Factor( Continuous, -1, 1, "X1", 1 ),	Add Factor( Continuous, -1, 1, "X2", 0 ),	Set N Whole Plots( 4 ),	Split Plot Variance Ratio( 2 ),	Make Design);

```

**Esempio 2**

```jsl

d = DOE(	Custom Design,	Add Factor( Continuous, -1, 1, "X1", 2 ),	Add Factor( Continuous, -1, 1, "X2", 1 ),	Add Factor( Continuous, -1, 1, "X3", 0 ),	Set N Whole Plots( 4 ));d << Split Plot Variance Ratio( [3, 2] );d << Make Design;

```

### Suppress Cotter Designs

**Sintassi:** obj &lt;&lt; Suppress Cotter Designs( state=0|1 )

**Descrizione:** Mostra/Nasconde piani di Cotter nell&apos;elenco di piani di screening. Questa opzione è selezionata per impostazione predefinita e significa che i piani di Cotter non sono inizialmente presenti nell&apos;elenco dei piani di screening. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

DOE(	Screening Design,	Add Factor( Continuous, -1, 1, "X1", 0 ),	Add Factor( Continuous, -1, 1, "X2", 0 ),	Add Factor( Continuous, -1, 1, "X3", 0 ),	Suppress Cotter Designs,	Make Design( 5 ));

```

### Table of Correlations

**Sintassi:** obj &lt;&lt; Table of Correlations

**Descrizione:** Crea una tabella di dati con la Tabella di correlazioni da Diagnostiche del piano.

**JMP Versione aggiunta:** 15

```jsl

DOE(	Custom Design,	Add Factor( Continuous, -1, 1, "X1", 0 ),	Add Factor( Continuous, -1, 1, "X2", 0 ),	Make Design,	Table of Correlations);

```

### Theta

**Sintassi:** obj &lt;&lt; Theta

**Descrizione:** Specifica il vettore del parametro di covarianza per piani a spazio pieno.

```jsl

d = DOE( Space Filling Design, Space Filling Design Type( IMSE Optimal, 20 ) );d << Theta( [2, 3] );

```

### Treatments

**Sintassi:** obj &lt;&lt; Treatments

**Descrizione:** Specifica il numero di trattamenti per un piano con blocco incompleto bilanciato (BIBD).

**JMP Versione aggiunta:** 14

```jsl

d = DOE( Balanced Incomplete Block Design );d << Treatments( 3, {"L1", "L2", "L3"} );d << Make Design;

```

### Use Bayesian information

**Sintassi:** obj &lt;&lt; Use Bayesian information( state=0|1 )

**Descrizione:** Usa informazioni a priori nell&apos;impostazione bayesiana per le diagnostiche del piano.

**JMP Versione aggiunta:** 15

```jsl

DOE(	Custom Design,	Add Factor( Continuous, -1, 1, "X1", 0 ),	Add Factor( Continuous, -1, 1, "X2", 0 ),	Add Term( {1, 1} ),	Add Term( {2, 1} ),	Add Potential Term( {1, 1}, {2, 1} ),	Number of Starts( 10 ),	Make Design,	Use Bayesian Information( 1 ));

```

### Use Blue to Red color theme for color map

**Sintassi:** obj &lt;&lt; Use Blue to Red color theme for color map( state=0|1 )

**Descrizione:** Utilizza il tema dei colori da blu a rosso per la mappa a colori sulle correlazioni.

**JMP Versione aggiunta:** 15

### Use Prior Uncertainty

**Sintassi:** obj &lt;&lt; Use Prior Uncertainty( state=0|1 )

**Descrizione:** Specifica se l&apos;incertezza a priori deve essere utilizzata per costruire il piano ottimale.

**JMP Versione aggiunta:** 16

```jsl

DOE(	Accelerated Life Test Plan,	{ALT Plan Setup( 1 ), Set Monitoring Choice( 2, {5, 200, 200} ),	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),	Set Prior Mean ALT( [-40 1.5 2] ), Set Prior Std Error ALT( [10, 0.2, 0.5] ),	Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ), Use Prior Uncertainty( 1 ),	Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ),	Set Length of Test( 1000 ), Set Inspection Times( [200 400 600 800 1000] ),	Set Number of Units( 150 ), Set Candidate Runs( [90 0 150, 100 0 150, 110 0 150] )});

```

### Utility Neutral Design

**Sintassi:** obj &lt;&lt; Utility Neutral Design( state=0|1 )

**Descrizione:** Specifica se deve essere creato il piano di scelta neutro delle utilità.

```jsl

DOE(	Choice Design,	{Add Factor( Categorical, {"L1", "L2"}, "X1", 0 ),	Add Factor( Categorical, {"L1", "L2"}, "X2", 0 ), Set Random Seed( 1245253625 ),	Add Term( {1, 1} ), Add Term( {2, 1} ), Set Prior Mean Choice( [0 0] ),	Set Prior Variance Matrix( [1 0, 0 1] ), Set Number of Attributes( 2 ),	Set Number of Profiles( 2 ), Set Number of Choice Sets( 8 ), Set Number of Surveys( 1 ),	Set Expected Number of Respondents( 1 ), Utility Neutral Design( 1 )});

```

