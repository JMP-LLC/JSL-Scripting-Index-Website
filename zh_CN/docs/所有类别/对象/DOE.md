# DOE



## 关联的构造器

### DOE

**语法:** DOE

#### MaxDiff 设计

```jsl

Open( "$SAMPLE_DATA/Design Experiment/Candy Profiles.jmp" );DOE(	MaxDiff Design,	X( :Candy ),	{Set Number of Profiles( 4 ), Set Number of Choice Sets( 7 ), Make Design,	Simulate Responses( 0 )});

```

#### MSA 设计

```jsl

DOE(	MSA Design,	{Add Response( None, "Y", ., ., . ), Add Factor(		Categorical,		{"1", "2", "3", "4", "5"},		"Part",		MSA( 2, 1 )	), Add Factor( Categorical, {"1", "2", "3"}, "Operator", MSA( 1, 1 ) ),	Add Factor( Categorical, {"Lab A", "Lab B", "Lab C"}, "Lab", MSA( 3, 1 ) ),	Set Random Seed( 123 ), Replicates( 5, 0 ),	Nesting Structure( {"Lab", {"Operator" || "Part"}} ), Make Design,	Simulate Responses( 0 )});

```

#### 响应曲面设计，Box-Behnken 设计

```jsl

DOE(	Response Surface Design,	{Add Response( Match Target, "Stretch", 350, 550, 1 ),	Change Factor Settings( 1, 0.7, 1.7, "Silica" ),	Change Factor Settings( 2, 1.8, 2.8, "Sulfur" ),	Add Factor( Continuous, 40, 60, "Silane", 0 ), Set Random Seed( 12345 ), Make Design( 1 ),	Center Points( 3 ), Simulate Responses( 0 ), Save X Matrix( 0 )});

```

#### 完全析因设计

```jsl

DOE(	Full Factorial Design,	{Add Response( Maximize, "Percent Reacted", 90, 100, 1 ),	Add Factor( Continuous, {10, 15}, "Feed Rate", 0 ),	Add Factor( Continuous, {1, 2}, "Catalyst", 0 ),	Add Factor( Continuous, {100, 120}, "Stir Rate", 0 ),	Add Factor( Continuous, {140, 180}, "Temperature", 0 ),	Add Factor( Continuous, {3, 6}, "Concentration", 0 ), Set Random Seed( 12345 ),	Make Design});

```

#### 定制设计，仅估计主效应的筛选实验

```jsl

DOE(	Custom Design,	{Add Response( Maximize, "Y", ., ., . ), Add Factor( Continuous, -1, 1, "X1", 0 ),	Add Factor( Continuous, -1, 1, "X2", 0 ), Add Factor( Continuous, -1, 1, "X3", 0 ),	Add Factor( Continuous, -1, 1, "X4", 0 ), Add Factor( Continuous, -1, 1, "X5", 0 ),	Add Factor( Continuous, -1, 1, "X6", 0 ), Set Random Seed( 12345 ), Number of Starts( 1 ),	Add Term( {1, 0} ), Add Term( {1, 1} ), Add Term( {2, 1} ), Add Term( {3, 1} ),	Add Term( {4, 1} ), Add Term( {5, 1} ), Add Term( {6, 1} ),	Add Alias Term( {1, 1}, {2, 1} ), Add Alias Term( {1, 1}, {3, 1} ),	Add Alias Term( {1, 1}, {4, 1} ), Add Alias Term( {1, 1}, {5, 1} ),	Add Alias Term( {1, 1}, {6, 1} ), Add Alias Term( {2, 1}, {3, 1} ),	Add Alias Term( {2, 1}, {4, 1} ), Add Alias Term( {2, 1}, {5, 1} ),	Add Alias Term( {2, 1}, {6, 1} ), Add Alias Term( {3, 1}, {4, 1} ),	Add Alias Term( {3, 1}, {5, 1} ), Add Alias Term( {3, 1}, {6, 1} ),	Add Alias Term( {4, 1}, {5, 1} ), Add Alias Term( {4, 1}, {6, 1} ),	Add Alias Term( {5, 1}, {6, 1} ), Set Sample Size( 12 ), Make Design});

```

#### 定制设计，双因子裂区实验

```jsl

DOE(	Custom Design,	{Add Response( Minimize, "OCV", ., ., . ), Add Factor( Continuous, -1, 1, "A1", 2 ),	Add Factor( Continuous, -1, 1, "A2", 2 ), Add Factor( Continuous, -1, 1, "A3", 2 ),	Add Factor( Continuous, -1, 1, "A4", 2 ), Add Factor( Continuous, -1, 1, "C1", 1 ),	Add Factor( Continuous, -1, 1, "C2", 1 ), Set Random Seed( 1866762673 ),	Number of Starts( 21 ), Add Term( {1, 0} ), Add Term( {1, 1} ), Add Term( {2, 1} ),	Add Term( {3, 1} ), Add Term( {4, 1} ), Add Term( {5, 1} ), Add Term( {6, 1} ),	Add Term( {1, 1}, {2, 1} ), Add Term( {1, 1}, {3, 1} ), Add Term( {1, 1}, {4, 1} ),	Add Term( {1, 1}, {5, 1} ), Add Term( {1, 1}, {6, 1} ), Add Term( {2, 1}, {3, 1} ),	Add Term( {2, 1}, {4, 1} ), Add Term( {2, 1}, {5, 1} ), Add Term( {2, 1}, {6, 1} ),	Add Term( {3, 1}, {4, 1} ), Add Term( {3, 1}, {5, 1} ), Add Term( {3, 1}, {6, 1} ),	Add Term( {4, 1}, {5, 1} ), Add Term( {4, 1}, {6, 1} ), Add Term( {5, 1}, {6, 1} ),	Make Strip Plot Design, Set N Whole Plots( 16 ), Set N Subplots( 6 ),	Set Sample Size( 48 ), Optimality Criterion( "Make D-Optimal Design" ), Make Design});

```

#### 定制设计，咖啡浓度

```jsl

DOE(	Custom Design,	{Add Response( Match Target, "Strength", 1.2, 1.4, . ),	Add Factor( Categorical, {"Coarse", "Medium"}, "Grind", 0 ),	Add Factor( Continuous, 195, 205, "Temperature", 0 ),	Add Factor( Continuous, 3, 4, "Time", 0 ), Add Factor(		Continuous, 1.6, 2.4, "Charge", 0	), Add Factor( Blocking, 4, "Station " ), Set Random Seed( 569534903 ),	Number of Starts( 100 ), Add Term( {1, 0} ), Add Term( {1, 1} ), Add Term( {2, 1} ),	Add Term( {3, 1} ), Add Term( {4, 1} ), Add Term( {5, 1} ),	Add Alias Term( {1, 1}, {2, 1} ), Add Alias Term( {1, 1}, {3, 1} ),	Add Alias Term( {1, 1}, {4, 1} ), Add Alias Term( {2, 1}, {3, 1} ),	Add Alias Term( {2, 1}, {4, 1} ), Add Alias Term( {3, 1}, {4, 1} ), Set Sample Size( 12 ),	Make Design});

```

#### 定制设计，品酒

```jsl

DOE(	Custom Design,	{Add Response( Maximize, "Rating", 0, 20, . ), Add Factor( Blocking, 8, "Rater" ),	Add Factor( Categorical, {"Bernard", "Dijon"}, "Variety", 0 ),	Add Factor( Categorical, {"1", "2", "3", "4"}, "Field", 0 ),	Add Factor( Categorical, {"No", "Yes"}, "De-Stem", 0 ),	Add Factor( Categorical, {"Cultured", "Wild"}, "Yeast", 0 ),	Add Factor( Categorical, {"High", "Low"}, "Temperature", 0 ),	Add Factor( Categorical, {"Hard", "Soft"}, "Press", 0 ),	Add Factor( Categorical, {"New", "2 Years"}, "Barrel Age", 0 ),	Add Factor( Categorical, {"Air", "Kiln"}, "Barrel Seasoning", 0 ),	Add Factor( Categorical, {"No", "Yes"}, "Filtering", 0 ), Set Random Seed( 1234 ),	Number of Starts( 2 ), Add Term( {1, 0} ), Add Term( {2, 1} ), Add Term( {3, 1} ),	Add Term( {4, 1} ), Add Term( {5, 1} ), Add Term( {6, 1} ), Add Term( {7, 1} ),	Add Term( {8, 1} ), Add Term( {9, 1} ), Add Term( {10, 1} ), Add Term( {1, 1} ),	Add Alias Term( {2, 1}, {3, 1} ), Add Alias Term( {2, 1}, {4, 1} ),	Add Alias Term( {2, 1}, {5, 1} ), Add Alias Term( {2, 1}, {6, 1} ),	Add Alias Term( {2, 1}, {7, 1} ), Add Alias Term( {2, 1}, {8, 1} ),	Add Alias Term( {2, 1}, {9, 1} ), Add Alias Term( {2, 1}, {10, 1} ),	Add Alias Term( {3, 1}, {4, 1} ), Add Alias Term( {3, 1}, {5, 1} ),	Add Alias Term( {3, 1}, {6, 1} ), Add Alias Term( {3, 1}, {7, 1} ),	Add Alias Term( {3, 1}, {8, 1} ), Add Alias Term( {3, 1}, {9, 1} ),	Add Alias Term( {3, 1}, {10, 1} ), Add Alias Term( {4, 1}, {5, 1} ),	Add Alias Term( {4, 1}, {6, 1} ), Add Alias Term( {4, 1}, {7, 1} ),	Add Alias Term( {4, 1}, {8, 1} ), Add Alias Term( {4, 1}, {9, 1} ),	Add Alias Term( {4, 1}, {10, 1} ), Add Alias Term( {5, 1}, {6, 1} ),	Add Alias Term( {5, 1}, {7, 1} ), Add Alias Term( {5, 1}, {8, 1} ),	Add Alias Term( {5, 1}, {9, 1} ), Add Alias Term( {5, 1}, {10, 1} ),	Add Alias Term( {6, 1}, {7, 1} ), Add Alias Term( {6, 1}, {8, 1} ),	Add Alias Term( {6, 1}, {9, 1} ), Add Alias Term( {6, 1}, {10, 1} ),	Add Alias Term( {7, 1}, {8, 1} ), Add Alias Term( {7, 1}, {9, 1} ),	Add Alias Term( {7, 1}, {10, 1} ), Add Alias Term( {8, 1}, {9, 1} ),	Add Alias Term( {8, 1}, {10, 1} ), Add Alias Term( {9, 1}, {10, 1} ),	Set Sample Size( 40 ), Simulate Responses( 0 ), Save X Matrix( 0 ), Make Design});

```

#### 定制设计，响应曲面设计

```jsl

DOE(	Custom Design,	{Add Response( Match Target, "Y", 54, 56, . ), Add Factor( Continuous, -1, 1, "X1", 0 ),	Add Factor( Continuous, -1, 1, "X2", 0 ), Add Factor( Continuous, -1, 1, "X3", 0 ),	Set Random Seed( 929281409 ), Number of Starts( 40 ), Add Term( {1, 0} ),	Add Term( {1, 1} ), Add Term( {2, 1} ), Add Term( {3, 1} ), Add Term( {1, 2} ),	Add Term( {1, 1}, {2, 1} ), Add Term( {2, 2} ), Add Term( {1, 1}, {3, 1} ),	Add Term( {2, 1}, {3, 1} ), Add Term( {3, 2} ), Set Sample Size( 16 ),	Optimality Criterion( 2 ), Make Design});

```

#### 定制设计，固定区组设计

```jsl

DOE(	Custom Design,	{Add Response( Maximize, "Y", ., ., . ), Add Factor( Continuous, -1, 1, "X1", 0 ),	Add Factor( Continuous, -1, 1, "X2", 0 ), Add Factor( Continuous, -1, 1, "X3", 0 ),	Add Factor( Blocking, 3, "X4" ), Set Random Seed( 12345 ), Number of Starts( 5 ),	Add Term( {1, 0} ), Add Term( {1, 1} ), Add Term( {2, 1} ), Add Term( {3, 1} ),	Add Term( {4, 1} ), Add Term( {1, 1}, {2, 1} ), Add Term( {1, 1}, {3, 1} ),	Add Term( {2, 1}, {3, 1} ), Set Sample Size( 18 ), Make Design});

```

#### 定制设计，带固定协变量的设计

```jsl

Open( "$SAMPLE_DATA/Design Experiment/Thermoplastic.jmp" );Wait( 0 );DOE(	Custom Design,	{Add Response( Minimize, "Shrinkage", ., ., . ),	Add Factor( Covariate, Specific Gravity, 0 ), Add Factor(		Covariate, Tensile Strength, 0	), Add Factor( Covariate, Supplier, 0 ), Add Factor(		Continuous, -1, 1, "Temperature", 0	), Add Factor( Continuous, -1, 1, "Speed", 0 ), Add Factor(		Continuous, -1, 1, "Time", 0	), Set Random Seed( 84951 ), Number of Starts( 40 ), Add Term( {1, 0} ),	Add Term( {1, 1} ), Add Term( {2, 1} ), Add Term( {3, 1} ), Add Term( {4, 1} ),	Add Term( {5, 1} ), Add Term( {6, 1} ), Add Alias Term( {1, 1}, {2, 1} ),	Add Alias Term( {1, 1}, {3, 1} ), Add Alias Term( {1, 1}, {4, 1} ),	Add Alias Term( {1, 1}, {5, 1} ), Add Alias Term( {1, 1}, {6, 1} ),	Add Alias Term( {2, 1}, {3, 1} ), Add Alias Term( {2, 1}, {4, 1} ),	Add Alias Term( {2, 1}, {5, 1} ), Add Alias Term( {2, 1}, {6, 1} ),	Add Alias Term( {3, 1}, {4, 1} ), Add Alias Term( {3, 1}, {5, 1} ),	Add Alias Term( {3, 1}, {6, 1} ), Add Alias Term( {4, 1}, {5, 1} ),	Add Alias Term( {4, 1}, {6, 1} ), Add Alias Term( {5, 1}, {6, 1} ), Set Sample Size( 12 ),	Make Design});

```

#### 定制设计，带灵活分区组的响应曲面设计

```jsl

DOE(	Custom Design,	{Add Response( Maximize, "Y", ., ., . ), Add Factor( Continuous, -1, 1, "X1", 0 ),	Add Factor( Continuous, -1, 1, "X2", 0 ), Add Factor( Blocking, 4, "X3" ),	Set Random Seed( 12345 ), Number of Starts( 5 ), Add Term( {1, 0} ), Add Term( {1, 1} ),	Add Term( {2, 1} ), Add Term( {3, 1} ), Add Term( {1, 2} ), Add Term( {1, 1}, {2, 1} ),	Add Term( {2, 2} ), Set Sample Size( 12 ), Optimality Criterion( 2 ), Make Design});

```

#### 定制设计，带难以更改的协变量的设计

```jsl

Open( "$SAMPLE_DATA/Design Experiment/Runners Covariates.jmp" );Wait( 0 );DOE(	Custom Design,	{Add Response( Minimize, "Wear", ., ., . ), Add Factor( Covariate, Miles, 1 ),	Add Factor( Covariate, Weight, 1 ), Add Factor( Covariate, Strike Point, 1 ),	Add Factor( Continuous, 5, 20, "Thickness", 0 ),	Add Factor( Continuous, 1, 10, "Gel", 0 ), Add Factor(		Categorical,		{"L1", "L2", "L3"},		"Outsole",		0	), Add Factor( Categorical, {"L1", "L2", "L3"}, "Midsole", 0 ), Set Random Seed( 12345 ),	Number of Starts( 1 ), Add Term( {1, 0} ), Add Term( {1, 1} ), Add Term( {2, 1} ),	Add Term( {3, 1} ), Add Term( {4, 1} ), Add Term( {5, 1} ), Add Term( {6, 1} ),	Add Term( {7, 1} ), Add Term( {1, 1}, {2, 1} ), Add Term( {1, 1}, {3, 1} ),	Add Term( {1, 1}, {4, 1} ), Add Term( {1, 1}, {5, 1} ), Add Term( {1, 1}, {6, 1} ),	Add Term( {1, 1}, {7, 1} ), Add Term( {2, 1}, {3, 1} ), Add Term( {2, 1}, {4, 1} ),	Add Term( {2, 1}, {5, 1} ), Add Term( {2, 1}, {6, 1} ), Add Term( {2, 1}, {7, 1} ),	Add Term( {3, 1}, {4, 1} ), Add Term( {3, 1}, {5, 1} ), Add Term( {3, 1}, {6, 1} ),	Add Term( {3, 1}, {7, 1} ), Add Term( {4, 1}, {5, 1} ), Add Term( {4, 1}, {6, 1} ),	Add Term( {4, 1}, {7, 1} ), Add Term( {5, 1}, {6, 1} ), Add Term( {5, 1}, {7, 1} ),	Add Term( {6, 1}, {7, 1} ), Set N Whole Plots( 32 ), Set Sample Size( 64 ),	Simulate Responses( 0 ), Save X Matrix( 0 ), Make Design});

```

#### 定制设计，带非混料因子的混料设计

```jsl

DOE(	Custom Design,	{Add Response( None, "Damping", ., ., . ), Add Factor( Mixture, 0.2, 0.8, "CuSO4", 0 ),	Add Factor( Mixture, 0.2, 0.8, "Na2S2O3", 0 ), Add Factor(		Mixture, 0, 0.6, "Glyoxal", 0	), Add Factor( Categorical, {"L1", "L2", "L3"}, "Wavelength", 0 ),	Set Random Seed( 12345 ), Number of Starts( 5 ), Add Term( {1, 1} ), Add Term( {2, 1} ),	Add Term( {3, 1} ), Add Term( {1, 1}, {2, 1} ), Add Term( {1, 1}, {3, 1} ),	Add Term( {1, 1}, {4, 1} ), Add Term( {2, 1}, {3, 1} ), Add Term( {2, 1}, {4, 1} ),	Add Term( {3, 1}, {4, 1} ), Set Sample Size( 18 ), Make Design});

```

#### 定制设计，混合的混料设计

```jsl

DOE(	Custom Design,	{Add Response( Maximize, "Taste", 0, 10, . ), Add Factor( Mixture, 0.1, 0.2, "Cocoa", 0 ),	Add Factor( Mixture, 0, 0.15, "Sugar", 0 ), Add Factor( Mixture, 0.2, 0.3, "Flour", 0 ),	Add Factor( Mixture, 0.1, 0.2, "Butter", 0 ), Add Factor(		Mixture, 0.25, 0.35, "Milk", 0	), Add Factor( Mixture, 0.05, 0.2, "Eggs", 0 ), Set Random Seed( 12345 ),	Number of Starts( 40 ), Add Constraint( [1 1 1 0 0 0 0.45, -1 -1 -1 0 0 0 -0.45] ),	Add Term( {1, 1} ), Add Term( {2, 1} ), Add Term( {3, 1} ), Add Term( {4, 1} ),	Add Term( {5, 1} ), Add Alias Term( {1, 1}, {2, 1} ), Add Alias Term( {1, 1}, {3, 1} ),	Add Alias Term( {1, 1}, {4, 1} ), Add Alias Term( {1, 1}, {5, 1} ),	Add Alias Term( {1, 1}, {6, 1} ), Add Alias Term( {2, 1}, {3, 1} ),	Add Alias Term( {2, 1}, {4, 1} ), Add Alias Term( {2, 1}, {5, 1} ),	Add Alias Term( {2, 1}, {6, 1} ), Add Alias Term( {3, 1}, {4, 1} ),	Add Alias Term( {3, 1}, {5, 1} ), Add Alias Term( {3, 1}, {6, 1} ),	Add Alias Term( {4, 1}, {5, 1} ), Add Alias Term( {4, 1}, {6, 1} ),	Add Alias Term( {5, 1}, {6, 1} ), Set Sample Size( 10 ), Make Design});

```

#### 定制设计，裂区实验

```jsl

DOE(	Custom Design,	{Add Response( Maximize, "thickness", 10, ., . ),	Add Factor( Continuous, -1, 1, "extrusion rate", 1 ),	Add Factor( Continuous, -1, 1, "temperature", 1 ), Add Factor( Mixture, 0, 1, "m1", 0 ),	Add Factor( Mixture, 0, 1, "m2", 0 ), Add Factor( Mixture, 0, 1, "m3", 0 ),	Set Random Seed( 12345 ), Number of Starts( 5 ), Add Term( {3, 1} ), Add Term( {4, 1} ),	Add Term( {5, 1} ), Add Term( {1, 1}, {2, 1} ), Add Term( {1, 1}, {3, 1} ),	Add Term( {1, 1}, {4, 1} ), Add Term( {1, 1}, {5, 1} ), Add Term( {2, 1}, {3, 1} ),	Add Term( {2, 1}, {4, 1} ), Add Term( {2, 1}, {5, 1} ), Add Term( {3, 1}, {4, 1} ),	Add Term( {3, 1}, {5, 1} ), Add Term( {4, 1}, {5, 1} ), Set N Whole Plots( 7 ),	Set Sample Size( 28 ), Optimality Criterion( "Make D-Optimal Design" ), Make Design});

```

#### 定制设计，解析所有双因子交互作用的分辨率 V 筛选实验

```jsl

DOE(	Custom Design,	{Add Response( Maximize, "Y", ., ., . ), Add Factor( Continuous, -1, 1, "X1", 0 ),	Add Factor( Continuous, -1, 1, "X2", 0 ), Add Factor( Continuous, -1, 1, "X3", 0 ),	Add Factor( Continuous, -1, 1, "X4", 0 ), Add Factor( Continuous, -1, 1, "X5", 0 ),	Set Random Seed( 12345 ), Number of Starts( 10 ), Add Term( {1, 0} ), Add Term( {1, 1} ),	Add Term( {2, 1} ), Add Term( {3, 1} ), Add Term( {4, 1} ), Add Term( {5, 1} ),	Add Term( {1, 1}, {2, 1} ), Add Term( {1, 1}, {3, 1} ), Add Term( {1, 1}, {4, 1} ),	Add Term( {1, 1}, {5, 1} ), Add Term( {2, 1}, {3, 1} ), Add Term( {2, 1}, {4, 1} ),	Add Term( {2, 1}, {5, 1} ), Add Term( {3, 1}, {4, 1} ), Add Term( {3, 1}, {5, 1} ),	Add Term( {4, 1}, {5, 1} ), Set Sample Size( 16 ),	Optimality Criterion( "Make D-Optimal Design" ), Make Design});

```

#### 定制设计，超饱和筛选设计

```jsl

DOE(	Custom Design,	{Add Response( Maximize, "Y", ., ., . ), Add Factor( Continuous, -1, 1, "X1", 0 ),	Add Factor( Continuous, -1, 1, "X2", 0 ), Add Factor( Continuous, -1, 1, "X3", 0 ),	Add Factor( Continuous, -1, 1, "X4", 0 ), Add Factor( Continuous, -1, 1, "X5", 0 ),	Add Factor( Continuous, -1, 1, "X6", 0 ), Add Factor( Continuous, -1, 1, "X7", 0 ),	Add Factor( Continuous, -1, 1, "X8", 0 ), Add Factor( Continuous, -1, 1, "X9", 0 ),	Add Factor( Continuous, -1, 1, "X10", 0 ), Add Factor( Continuous, -1, 1, "X11", 0 ),	Add Factor( Continuous, -1, 1, "X12", 0 ), Set Random Seed( 12345 ),	Number of Starts( 5 ), Add Term( {1, 0} ), Add Potential Term( {1, 1} ),	Add Potential Term( {2, 1} ), Add Potential Term( {3, 1} ), Add Potential Term( {4, 1} ),	Add Potential Term( {5, 1} ), Add Potential Term( {6, 1} ), Add Potential Term( {7, 1} ),	Add Potential Term( {8, 1} ), Add Potential Term( {9, 1} ), Add Potential Term( {10, 1} ),	Add Potential Term( {11, 1} ), Add Potential Term( {12, 1} ), Set Sample Size( 8 ),	Simulate Responses( 1 ), Save X Matrix( 0 ), Set Run Order( Randomize ), Make Design});

```

#### 带区组的确定性筛选设计

```jsl

DOE(	Definitive Screening Design,	{Add Response( Maximize, "Yield", ., ., . ), Add Factor( Blocking, 0, "Lot" ),	Add Factor( Continuous, 0, 10, "Methanol", 0 ), Add Factor(		Continuous, 0, 10, "Ethanol", 0	), Add Factor( Continuous, 0, 10, "Propanol", 0 ),	Add Factor( Continuous, 0, 10, "Butanol", 0 ), Add Factor( Continuous, 6, 9, "pH", 0 ),	Add Factor( Continuous, 1, 2, "Time", 0 ), Show Blocking Options( 1, 2 ),	Number of Extra Runs( 0 ), Set Random Seed( 1146016221 ), Make Design,	Simulate Responses( 0 ), Save X Matrix( 0 )});

```

#### 扩充设计

```jsl

Open( "$SAMPLE_DATA/Design Experiment/Reactor 8 Runs.jmp" );Wait( 0 );DOE(	Augment Design,	X( :Feed Rate, :Catalyst, :Stir Rate, :Temperature, :Concentration ),	Y( :Percent Reacted ),	{Augment Method( Augment ), Set Random Seed( 282322901 ), Number of Starts( 800 ),	Add Term( {1, 0} ), Add Term( {1, 1} ), Add Term( {2, 1} ), Add Term( {3, 1} ),	Add Term( {4, 1} ), Add Term( {5, 1} ), Add Term( {1, 1}, {2, 1} ),	Add Term( {1, 1}, {3, 1} ), Add Term( {1, 1}, {4, 1} ), Add Term( {1, 1}, {5, 1} ),	Add Term( {2, 1}, {3, 1} ), Add Term( {2, 1}, {4, 1} ), Add Term( {2, 1}, {5, 1} ),	Add Term( {3, 1}, {4, 1} ), Add Term( {3, 1}, {5, 1} ), Add Term( {4, 1}, {5, 1} ),	Set Sample Size( 16 ), Optimality Criterion( "Make D-Optimal Design" ), Make Design,	Save X Matrix( 0 ), Simulate Responses( 0 )});

```

#### 扩充设计，向设计添加中心点

```jsl

Open( "$SAMPLE_DATA/Design Experiment/Reactor 8 Runs.jmp" );Wait( 0 );DOE(	Augment Design,	X( :Feed Rate, :Catalyst, :Stir Rate, :Temperature, :Concentration ),	Y( :Percent Reacted ),	{Group new runs into separate block, Augment Method( Centerpoints, 2 ),	Save X Matrix( 0 ), Simulate Responses( 0 )});

```

#### 扩充设计，重复设计

```jsl

Open( "$SAMPLE_DATA/Design Experiment/Reactor 8 Runs.jmp" );Wait( 0 );DOE(	Augment Design,	X( :Feed Rate, :Catalyst, :Stir Rate, :Temperature, :Concentration ),	Y( :Percent Reacted ),	{Group new runs into separate block, Augment Method( Replicate, 2 ), Save X Matrix( 0 ),	Simulate Responses( 0 )});

```

#### 混料设计，最优混料设计

```jsl

DOE(	Custom Design,	{Add Response( Maximize, "Y", ., ., . ), Add Factor( Mixture, 0, 1, "X1", 0 ),	Add Factor( Mixture, 0, 1, "X2", 0 ), Add Factor( Mixture, 0, 1, "X3", 0 ),	Set Random Seed( 1409 ), Number of Starts( 2 ), Add Constraint( [1 1 0 0.8] ),	Add Term( {1, 1} ), Add Term( {2, 1} ), Add Term( {3, 1} ), Add Term( {1, 1}, {2, 1} ),	Add Term( {1, 1}, {3, 1} ), Add Term( {2, 1}, {3, 1} ), Center Points( 2 ),	Set Sample Size( 12 ), Simulate Responses( 0 ), Save X Matrix( 0 ),	Optimality Criterion( "Make D-Optimal Design" ), Make Design});

```

#### 混料设计，极端顶点设计

```jsl

DOE(	Mixture Design,	{Add Response( Maximize, "Y", ., ., . ), Change Factor Settings( 1, 0.05, 0.25, "X1" ),	Change Factor Settings( 2, 0.1, 0.3, "X2" ), Change Factor Settings( 3, 0.1, 0.3, "X3" ),	Add Factor( Mixture, 0.1, 0.4, "X4", 0 ), Add Factor( Mixture, 0.05, 0.25, "X5", 0 ),	Set Random Seed( 1409 ), Mixture Design Type( Extreme Vertices, 4 ), Find Subset( 10 ),	Simulate Responses( 0 )});

```

#### 确定性筛选设计

```jsl

DOE(	Definitive Screening Design,	{Add Response( Maximize, "Yield", ., ., . ), Add Factor(		Continuous, 0, 10, "Methanol", 0	), Add Factor( Continuous, 0, 10, "Ethanol", 0 ),	Add Factor( Continuous, 0, 10, "Propanol", 0 ), Add Factor(		Continuous, 0, 10, "Butanol", 0	), Add Factor( Continuous, 6, 9, "pH", 0 ), Add Factor( Continuous, 1, 2, "Time", 0 ),	Show Blocking Options( 0, 0 ), Number of Extra Runs( 4 ), Set Random Seed( 880596769 ),	Make Design, Simulate Responses( 0 ), Save X Matrix( 0 )});

```

#### 空间填充设计，含约束快速灵活填充

```jsl

DOE(	Space Filling Design,	{Add Response( Maximize, "Y", ., ., . ), Add Factor( Continuous, 0, 1, "X1", 0 ),	Add Factor( Continuous, 0, 1, "X2", 0 ), Set Random Seed( 765 ),	Add Constraint( [1 1 0.8] ), FFF Optimality Criterion( MaxPro ),	Space Filling Design Type( Fast Flexible Filling, 200 ), Simulate Responses( 0 )});

```

#### 空间填充设计，球堆积

```jsl

DOE(	Space Filling Design,	{Add Response( Maximize, "Y", ., ., . ), Add Factor( Continuous, 0, 1, "X1", 0 ),	Add Factor( Continuous, 0, 1, "X2", 0 ), Set Random Seed( 765 ),	Space Filling Design Type( Sphere Packing, 8 ), Simulate Responses( 0 )});

```

#### 筛选设计，主效应筛选设计

```jsl

DOE(	Screening Design,	{Add Response( Match Target, "Depth", 0.12, 0.22, . ),	Add Factor( Continuous, 3, 5, "Speed", 0 ), Add Factor(		Continuous, 150, 165, "Current", 0	), Add Factor( Continuous, 20, 30, "Wall Size", 0 ),	Add Factor( Categorical, {"John", "Mary"}, "Operator", 0 ),	Add Factor( Categorical, {"Conductance", "Keyhole"}, "Mode", 0 ),	Add Factor( Categorical, {"Double", "Single"}, "Geometry", 0 ),	Add Factor( Categorical, {"Aluminum", "Magnesium"}, "Material", 0 ),	Set Random Seed( 12345 ), Screening Type( 1 ), Number of Starts( 1 ),	Number of Column Starts( 50 ), Set Sample Size( 12 ), Make Design,	Simulate Responses( 0 ), Save X Matrix( 0 )});

```

#### 筛选设计，混合水平筛选设计

```jsl

DOE(	Screening Design,	{Add Response( Maximize, "Y", ., ., . ), Add Factor( Continuous, -1, 1, "X1", 0 ),	Add Factor( Continuous, -1, 1, "X2", 0 ), Add Factor( Continuous, -1, 1, "X3", 0 ),	Add Factor( Continuous, -1, 1, "X4", 0 ), Add Factor( Continuous, -1, 1, "X5", 0 ),	Add Factor( Categorical, {"L1", "L2"}, "X6", 0 ),	Add Factor( Categorical, {"L1", "L2"}, "X7", 0 ),	Add Factor( Categorical, {"L1", "L2"}, "X8", 0 ), Set Random Seed( 12345 ),	Screening Type( 2, 2, 16 ), Make Design, Simulate Responses( 0 ), Save X Matrix( 0 )});

```

#### 筛选设计，部分析因设计

```jsl

DOE(	Screening Design,	{Add Response( Match Target, "Depth", 0.12, 0.22, . ),	Add Factor( Continuous, 3, 5, "Speed", 0 ), Add Factor(		Continuous, 150, 165, "Current", 0	), Add Factor( Continuous, 20, 30, "Wall Size", 0 ),	Add Factor( Categorical, {"John", "Mary"}, "Operator", 0 ),	Add Factor( Categorical, {"Conductance", "Keyhole"}, "Mode", 0 ),	Add Factor( Categorical, {"Double", "Single"}, "Geometry", 0 ),	Add Factor( Categorical, {"Aluminum", "Magnesium"}, "Material", 0 ),	Set Random Seed( 12345 ), Make Design( 1 ), Simulate Responses( 0 ), Save X Matrix( 0 )});

```

#### 组正交超饱和设计

```jsl

DOE(	Group Orthogonal Supersaturated Design,	{GOSSDStructure( 12, 16, 4, 4 ), ChangeFactorSettings( 1, Continuous, -1, 1, "Fake 1" ),	ChangeFactorSettings( 2, Continuous, -1, 1, "Fake 2" ),	ChangeFactorSettings( 3, Continuous, -1, 1, "Fake 3" ),	ChangeFactorSettings( 4, Continuous, -1, 1, "X4" ),	ChangeFactorSettings( 5, Continuous, -1, 1, "X5" ),	ChangeFactorSettings( 6, Continuous, -1, 1, "X6" ),	ChangeFactorSettings( 7, Continuous, -1, 1, "X7" ),	ChangeFactorSettings( 8, Continuous, -1, 1, "X8" ),	ChangeFactorSettings( 9, Continuous, -1, 1, "X9" ),	ChangeFactorSettings( 10, Continuous, -1, 1, "X10" ),	ChangeFactorSettings( 11, Continuous, -1, 1, "X11" ),	ChangeFactorSettings( 12, Continuous, -1, 1, "X12" ),	ChangeFactorSettings( 13, Continuous, -1, 1, "X13" ),	ChangeFactorSettings( 14, Continuous, -1, 1, "X14" ),	ChangeFactorSettings( 15, Continuous, -1, 1, "X15" ), Make Design,	Simulate Responses( 0 )});

```

#### 选择设计

```jsl

DOE(	Choice Design,	{Add Factor( Categorical, {"Medium", "Coarse"}, "Grind", 0 ),	Add Factor( Categorical, {"195", "200", "205"}, "Temperature", 0 ),	Add Factor( Categorical, {"3", "3.5", "4"}, "Time", 0 ),	Add Factor( Categorical, {"1.6", "2", "2.4"}, "Charge", 0 ), Set Random Seed( 12345 ),	Add Term( {1, 1} ), Add Term( {2, 1} ), Add Term( {3, 1} ), Add Term( {4, 1} ),	Set Prior Mean Choice( [0 0 0 0 0 0 0] ),	Set Prior Variance Matrix(		[1 0 0 0 0 0 0,		0 1 0 0 0 0 0,		0 0 1 0 0 0 0,		0 0 0 1 0 0 0,		0 0 0 0 1 0 0,		0 0 0 0 0 1 0,		0 0 0 0 0 0 1]	), Set Number of Attributes( 4 ), Set Number of Profiles( 2 ),	Set Number of Choice Sets( 12 ), Set Number of Surveys( 1 ),	Set Expected Number of Respondents( 10 ), Make Design,	Choice Design Table Output( Separate )});

```

## 列

### Factor

**语法:** obj &lt;&lt; Factor( column(s) )

```jsl

DOE(	Custom Design,	{Add Response( Match Target, "Strength", 1.2, 1.4, . ),	Add Factor( Categorical, {"Coarse", "Medium"}, "Grind", 0 ),	Add Factor( Continuous, 195, 205, "Temperature", 0 ),	Add Factor( Continuous, 3, 4, "Time", 0 ), Add Factor(		Continuous, 1.6, 2.4, "Charge", 0	), Add Factor( Blocking, 4, "Station " ), Set Random Seed( 569534903 ),	Number of Starts( 100 ), Add Term( {1, 0} ), Add Term( {1, 1} ), Add Term( {2, 1} ),	Add Term( {3, 1} ), Add Term( {4, 1} ), Add Term( {5, 1} ),	Add Alias Term( {1, 1}, {2, 1} ), Add Alias Term( {1, 1}, {3, 1} ),	Add Alias Term( {1, 1}, {4, 1} ), Add Alias Term( {2, 1}, {3, 1} ),	Add Alias Term( {2, 1}, {4, 1} ), Add Alias Term( {3, 1}, {4, 1} ), Set Sample Size( 12 ),	Make Design});

```

### Response

**语法:** obj &lt;&lt; Response( column(s) )

```jsl

DOE(	Custom Design,	{Add Response( Match Target, "Strength", 1.2, 1.4, . ),	Add Factor( Categorical, {"Coarse", "Medium"}, "Grind", 0 ),	Add Factor( Continuous, 195, 205, "Temperature", 0 ),	Add Factor( Continuous, 3, 4, "Time", 0 ), Add Factor(		Continuous, 1.6, 2.4, "Charge", 0	), Add Factor( Blocking, 4, "Station " ), Set Random Seed( 569534903 ),	Number of Starts( 100 ), Add Term( {1, 0} ), Add Term( {1, 1} ), Add Term( {2, 1} ),	Add Term( {3, 1} ), Add Term( {4, 1} ), Add Term( {5, 1} ),	Add Alias Term( {1, 1}, {2, 1} ), Add Alias Term( {1, 1}, {3, 1} ),	Add Alias Term( {1, 1}, {4, 1} ), Add Alias Term( {2, 1}, {3, 1} ),	Add Alias Term( {2, 1}, {4, 1} ), Add Alias Term( {3, 1}, {4, 1} ), Set Sample Size( 12 ),	Make Design});

```

### X

**语法:** obj &lt;&lt; X( column(s) )

```jsl

DOE(	Custom Design,	{Add Response( Match Target, "Strength", 1.2, 1.4, . ),	Add Factor( Categorical, {"Coarse", "Medium"}, "Grind", 0 ),	Add Factor( Continuous, 195, 205, "Temperature", 0 ),	Add Factor( Continuous, 3, 4, "Time", 0 ), Add Factor(		Continuous, 1.6, 2.4, "Charge", 0	), Add Factor( Blocking, 4, "Station " ), Set Random Seed( 569534903 ),	Number of Starts( 100 ), Add Term( {1, 0} ), Add Term( {1, 1} ), Add Term( {2, 1} ),	Add Term( {3, 1} ), Add Term( {4, 1} ), Add Term( {5, 1} ),	Add Alias Term( {1, 1}, {2, 1} ), Add Alias Term( {1, 1}, {3, 1} ),	Add Alias Term( {1, 1}, {4, 1} ), Add Alias Term( {2, 1}, {3, 1} ),	Add Alias Term( {2, 1}, {4, 1} ), Add Alias Term( {3, 1}, {4, 1} ), Set Sample Size( 12 ),	Make Design});

```

### Y

**语法:** obj &lt;&lt; Y( column(s) )

```jsl

DOE(	Custom Design,	{Add Response( Match Target, "Strength", 1.2, 1.4, . ),	Add Factor( Categorical, {"Coarse", "Medium"}, "Grind", 0 ),	Add Factor( Continuous, 195, 205, "Temperature", 0 ),	Add Factor( Continuous, 3, 4, "Time", 0 ), Add Factor(		Continuous, 1.6, 2.4, "Charge", 0	), Add Factor( Blocking, 4, "Station " ), Set Random Seed( 569534903 ),	Number of Starts( 100 ), Add Term( {1, 0} ), Add Term( {1, 1} ), Add Term( {2, 1} ),	Add Term( {3, 1} ), Add Term( {4, 1} ), Add Term( {5, 1} ),	Add Alias Term( {1, 1}, {2, 1} ), Add Alias Term( {1, 1}, {3, 1} ),	Add Alias Term( {1, 1}, {4, 1} ), Add Alias Term( {2, 1}, {3, 1} ),	Add Alias Term( {2, 1}, {4, 1} ), Add Alias Term( {3, 1}, {4, 1} ), Set Sample Size( 12 ),	Make Design});

```

## 项消息

### A-Optimality Parameter Weights

**语法:** obj &lt;&lt; A-Optimality Parameter Weights

**说明:** 设置用于创建 A 最优设计的权重。

**JMP添加的版本:** 14

```jsl

DOE(	Custom Design,	{Add Factor( Continuous, -1, 1, "X1", 0 ), Add Factor( Continuous, -1, 1, "X2", 0 ),	Add Factor( Continuous, -1, 1, "X3", 0 ), Add Term( {1, 0} ), Add Term( {1, 1} ),	Add Term( {2, 1} ), Add Term( {3, 1} ), Add Term( {1, 1}, {2, 1} ),	Add Term( {1, 1}, {3, 1} ), Add Term( {2, 1}, {3, 1} ), Set Sample Size( 14 ),	Optimality Criterion( "Make A-Optimal Design"n ),	"A-Optimality Parameter Weights"n( [1 1 1 1 0.1 0.1 0.1] )});

```

### ALT Factor Settings

**语法:** obj &lt;&lt; ALT Factor Settings

**说明:** 对于加速寿命试验计划中的给定因子数，允许指定因子名称、水平数、因子变换、使用条件和检验条件。

```jsl

DOE(	Accelerated Life Test Plan,	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Continuous Monitoring" ),	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),	Set Prior Mean ALT( [-40 1.5 2] ), Set Prior Std Error ALT( [10, 0.2, 0.5] ),	Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ), Use Prior Uncertainty( 1 ),	Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ),	Set Length of Test( 1000 ), Set Number of Units( 150 )});

```

### ALT Plan Setup

**语法:** obj &lt;&lt; ALT Plan Setup( 1|2|3 )

**说明:** 指定加速寿命试验计划的初始模型选择。

```jsl

DOE(	Accelerated Life Test Plan,	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Continuous Monitoring" ),	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),	Set Prior Mean ALT( [-40 1.5 2] ), Set Prior Std Error ALT( [10, 0.2, 0.5] ),	Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ), Use Prior Uncertainty( 1 ),	Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ),	Set Length of Test( 1000 ), Set Number of Units( 150 )});

```

### Add Alias Term

**语法:** obj &lt;&lt; Add Alias Term

**说明:** 将别名项添加至别名项列表。为列表中的每个效应指定因子数和功效。通过用逗号分隔效应来创建交互作用。

```jsl

d = DOE(	Custom Design,	Add Factor( Continuous, -1, 1, "X1", 0 ),	Add Factor( Continuous, -1, 1, "X2", 0 ));d << Add Alias Term( {1, 1}, {2, 1} );d << Add Alias Term( {1, 2} );

```

### Add Constraint

**语法:** obj &lt;&lt; Add Constraint

**说明:** 通过矩阵添加线性约束。每行表示一个约束。最后一列对应不等式约束右侧的值。在 JSL 中，不等式约束必须小于等于右侧的值。

```jsl

DOE(	Custom Design,	Add Factor( Continuous, -1, 1, "X1", 0 ),	Add Factor( Continuous, -1, 1, "X2", 0 ),	Add Factor( Continuous, -1, 1, "X3", 0 ),	Add Constraint( [1 1 0 1, 1 0 1 1] ),	Add Term( {1, 0} ));

```

### Add Factor

**语法:** obj &lt;&lt; Add Factor( Continuous|Discrete Numeric|Blocking|Constant|Categorical|Mixture )

**说明:** 添加具有指定类型和可选参数的因子。若未指定任何内容，该命令会添加连续因子。

```jsl

d = DOE( Custom Design );d << Add Factor( Continuous, -1, 1, "X1", 0 );d << Add Factor( Discrete Numeric, {1, 2, 3}, "X2", 0 );d << Add Factor( Categorical, {"L1", "L2"}, "X3", 0 );d << Add Factor( Blocking, 8, "X4" );d << Add Factor( Constant, 3, "X5" );

```

### Add Functional Response

**语法:** obj &lt;&lt; Add Functional Response

**说明:** 添加具有指定名称、每个试验的测量值数和值的函数响应。

**JMP添加的版本:** 15

```jsl

DOE(	Custom Design,	Add Response( Maximize, "Y", ., ., . ),	Add Functional Response( "Y", 5, {1, 2, 3, 4, 5} ),	Set Random Seed( 46055034 ),	Simulate Responses( 0 ),	Save X Matrix( 0 ));

```

### Add Potential Term

**语法:** obj &lt;&lt; Add Potential Term

**说明:** 将“若可能”项添加至模型项列表。为列表中的每个效应指定因子数和功效。通过用逗号分隔效应来创建交互作用。

```jsl

d = DOE(	Custom Design,	Add Factor( Continuous, -1, 1, "X1", 0 ),	Add Factor( Continuous, -1, 1, "X2", 0 ));d << Add Potential Term( {1, 1}, {2, 1} );d << Add Potential Term( {1, 2} );

```

### Add Response

**语法:** obj &lt;&lt; Add Response( goal, name, lower limit, upper limit, importance, lower detection limit, upper detection limit )

**说明:** 添加具有指定目标、名称、下限、上限和重要性的响应。

**示例 1**

```jsl

DOE( Custom Design, Add Response( Match Target, "Y", 10, 30, 1 ) );

```

**示例 2**

```jsl

DOE( Custom Design, Add Response( Match Target, "Y", ., ., 1, 10, 30 ) );

```

### Add Term

**语法:** obj &lt;&lt; Add Term

**说明:** 将“必需”项添加至模型项列表。按 {因子编号，功效} 指定效应。可以通过按逗号分隔效应来创建交互作用。

```jsl

d = DOE(	Custom Design,	Add Factor( Continuous, -1, 1, "X1", 0 ),	Add Factor( Continuous, -1, 1, "X2", 0 ));d << Add Term( {1, 1}, {2, 1} );d << Add Term( {1, 2} );

```

### Additional Designs

**语法:** obj &lt;&lt; Additional Designs

**说明:** 最多指定额外九个设计与参考设计进行比较。

**JMP添加的版本:** 14

```jsl

DOE(	Custom Design,	Add Factor,	Add Factor,	Add Factor,	Set Sample Size( 12 ),	Make Design,	Make Table);DOE( Custom Design, Add Factor, Add Factor, Add Factor, Make Design, Make Table );DOE(	Custom Design,	Add Factor,	Add Factor,	Add Factor,	Set Sample Size( 4 ),	Make Design,	Make Table);DOE(	Compare Designs,	Reference Design( "Custom Design", X( :X1, :X2, :X3 ) ),	Additional Designs(		"Custom Design 2",		X( :X1, :X2, :X3 ),		"Custom Design 3",		X( :X1, :X2, :X3 )	));

```

### Allow covariate rows to be repeated

**语法:** obj &lt;&lt; Allow covariate rows to be repeated( state=0|1 )

**说明:** 指定在设计中是否允许协变量行重复。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );DOE(	Custom Design,	Add Response( Maximize, "Y", ., ., . ),	Add Factor( Covariate, :sex, 0 ),	Add Factor( Covariate, :height, 0 ),	Add Factor( Covariate, :weight, 0 ),	Add Term( {1, 0} ),	Add Term( {1, 1} ),	Add Term( {2, 1} ),	Add Term( {3, 1} ),	Enforce Use of Selected Covariate Rows( 1 ),	Allow covariate rows to be repeated( 1 ),	Select Covariate Rows( [1 2 3 4] ),	Set Sample Size( 24 ));

```

### Augment Method

**语法:** obj &lt;&lt; Augment Method( Replicate|Centerpoints|Fold Over|Add Axial|Augment )

**说明:** 指定扩充方法的类型及其参数。

**示例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );d = DOE( Augment Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );d << Augment Method( Augment );d << Set Sample Size( 24 );d << Make Design;

```

**示例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/2x3x4 Factorial.jmp" );d = DOE( Augment Design, X( :X1, :X2, :X3 ), Y( :Y ) );d << Augment Method( Replicate, 2 );

```

**示例 3**

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );d = DOE( Augment Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );d << Augment Method( Centerpoints, 3 );

```

**示例 4**

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );d = DOE( Augment Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );d << Augment Method( Fold Over, [1 2] );

```

**示例 5**

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );d = DOE( Augment Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );d << Augment Method( Add Axial, 1, 2 );

```

### Blocks

**语法:** obj &lt;&lt; Blocks

**说明:** 指定平衡不完全区组设计 (BIBD) 的区组大小。

**JMP添加的版本:** 14

```jsl

d = DOE( Balanced Incomplete Block Design, Treatments( 3, {"L1", "L2", "L3"} ) );d << Blocks( 2 );d << Make Design;

```

### Center Points

**语法:** obj &lt;&lt; Center Points

**说明:** 指定中心点数。

**示例 1**

```jsl

d = DOE(	Custom Design,	Add Factor( Continuous, -1, 1, "X1", 0 ),	Add Factor( Continuous, -1, 1, "X2", 0 ));d << Make Model( Linear );d << Center Points( 2 );

```

**示例 2**

```jsl

DOE(	Definitive Screening Design,	Add Factor,	Add Factor,	Add Factor,	Add Factor,	Add Factor,	Add Factor,	Show Blocking Options( 1, 2 ),	Number of Extra Runs( 4 ),	Center Points( 1 ));

```

### Change Anticipated Coefficients

**语法:** obj &lt;&lt; Change Anticipated Coefficients

**说明:** 更改功效分析中的预期系数。

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );d = DOE( Evaluate Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );d << Change Anticipated Coefficients( [1 2 3 4 2 2 2 3 3 3] );

```

### Change Factor Settings

**语法:** obj &lt;&lt; Change Factor Settings

**说明:** 指定在第一个参数中包括的连续或混料因子的最小值、最大值和名称。对最初具有预定义因子的平台会特别有用。

**示例 1**

```jsl

d = DOE( Response Surface Design );d << Change Factor Settings( 1, 2, 3, "A" );d << Change Factor Settings( 2, 0, 4 );

```

**示例 2**

```jsl

d = DOE( Mixture Design );d << Change Factor Settings( 1, 0.1, 0.4, "A" );d << Change Factor Settings( 3, 0, 0.8, "C" );

```

### Check Inscribe

**语法:** obj &lt;&lt; Check Inscribe

**说明:** 重新调整设计尺度，以便轴点位于范围的低端和高端。

```jsl

d = DOE( Response Surface Design, Make Design( 2 ) );d << Set Axial Choice( 2 );d << Check Inscribe;

```

### Choice Design Table Output

**语法:** obj &lt;&lt; Choice Design Table Output( "分隔"|"合并" )

**说明:** 指定如何为选择设计创建数据表。

```jsl

DOE(	Choice Design,	{Add Factor( Categorical, {"L1", "L2"}, "X1", 0 ),	Add Factor( Categorical, {"L1", "L2"}, "X2", 0 ), Add Term( {1, 1} ), Add Term( {2, 1} ),	Set Prior Mean Choice( [0 0] ), Set Prior Variance Matrix( [1 0, 0 1] ),	Set Number of Attributes( 2 ), Set Number of Profiles( 2 ),	Set Number of Choice Sets( 8 ), Set Number of Surveys( 1 ),	Set Expected Number of Respondents( 1 ), Make Design,	Choice Design Table Output( Combined )});

```

### D Efficiency Weight

**语法:** obj &lt;&lt; D Efficiency Weight

**说明:** 使用该选项可控制 D-效率和别名消除间的相对重要性。请提供介于 0 和 1 之间的值。

```jsl

DOE(	Custom Design,	Add Factor( Continuous, -1, 1, "X1", 0 ),	Add Factor( Continuous, -1, 1, "X2", 0 ),	D Efficiency Weight( 0.5 ),	Make Design);

```

### Design Search Time

**语法:** obj &lt;&lt; Design Search Time( number )

**说明:** 指定搜索设计的秒数。

```jsl

DOE(	Custom Design,	{Add Factor( Continuous, -1, 1, "X1", 0 ), Add Factor( Continuous, -1, 1, "X2", 0 ),	Set Sample Size( 7 ), Design Search Time( 8 ), Make Design});

```

### Disallowed Combinations

**语法:** obj &lt;&lt; Disallowed Combinations

**说明:** 允许您提供一个脚本，对于任何应从您的设计中排除的因子组合返回真。

```jsl

DOE(	Custom Design,	Add Factor( Continuous, -1, 1, "X1", 0 ),	Add Factor( Categorical, {"L1", "L2"}, "X2", 0 ),	Number of Starts( 100 ),	Disallowed Combinations( X1 > 0.5 & X2 == 2 ),	Make Design);

```

### Discrete Numeric Powers Set to Necessary

**语法:** obj &lt;&lt; Discrete Numeric Powers Set to Necessary( state=0|1 )

**说明:** 指定离散数值因子中的幂是否应为必要的模型项。

```jsl

DOE(	Custom Design,	Add Factor( Discrete Numeric, {1, 2, 3}, "X1", 0 ),	Add Factor( Discrete Numeric, {1, 2, 3}, "X2", 0 ),	Discrete Numeric Powers Set to Necessary( 1 ),	Make Model( Linear ));

```

### Distribution Choice

**语法:** obj &lt;&lt; Distribution Choice

**说明:** 指定加速寿命试验计划的分布。

```jsl

DOE(	Accelerated Life Test Plan,	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Continuous Monitoring" ),	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),	Set Prior Mean ALT( [-40 1.5 2] ), Set Prior Std Error ALT( [10, 0.2, 0.5] ),	Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ), Use Prior Uncertainty( 1 ),	Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ),	Set Length of Test( 1000 ), Set Number of Units( 150 )});

```

### Enforce Use of Selected Covariate Rows

**语法:** obj &lt;&lt; Enforce Use of Selected Covariate Rows( state=0|1 )

**说明:** 指定是否在设计中包括所有选定的协变量行。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );DOE(	Custom Design,	Add Response( Maximize, "Y", ., ., . ),	Add Factor( Covariate, :sex, 0 ),	Add Factor( Covariate, :height, 0 ),	Add Factor( Covariate, :weight, 0 ),	Add Term( {1, 0} ),	Add Term( {1, 1} ),	Add Term( {2, 1} ),	Add Term( {3, 1} ),	Enforce Use of Selected Covariate Rows( 1 ),	Allow covariate rows to be repeated( 1 ),	Select Covariate Rows( [1 2 3 4] ),	Set Sample Size( 24 ));

```

### FFF Optimality Criterion

**语法:** obj &lt;&lt; FFF Optimality Criterion( "MaxPro"|"重心法" )

**说明:** 指定设计中使用的条件。推荐使用默认值。

**示例 1**

```jsl

DOE(	Custom Design,	Add Factor( Continuous, -1, 1, "X1", 0 ),	Add Factor( Continuous, -1, 1, "X2", 0 ),	Add Factor( Continuous, -1, 1, "X3", 0 ),	Optimality Criterion( "Make I-optimal Design" ),	Make Design);

```

**示例 2**

```jsl

DOE(	Custom Design,	Add Factor( Continuous, -1, 1, "X1", 0 ),	Add Factor( Continuous, -1, 1, "X2", 0 ),	Add Factor( Continuous, -1, 1, "X3", 0 ),	Optimality Criterion( 2 ),	Make Design);

```

### Find Subset

**语法:** obj &lt;&lt; Find Subset

**说明:** 查找极端顶点设计的 D 最优子集。

```jsl

d = DOE( Mixture Design, Add Factor( Mixture, 0.1, 1, "X4", 0 ) );d << Mixture Design Type( Extreme Vertices, 3 );d << Find Subset( 10 );

```

### GOSSDDetails

**语法:** obj &lt;&lt; GOSSDDetails

**说明:** 以列表形式返回当前因子设置。

**JMP添加的版本:** 15

```jsl

d = DOE( Group Orthogonal Supersaturated Design );Show( d << GOSSDDetails );

```

### GOSSDStructure

**语法:** obj &lt;&lt; GOSSDStructure

**说明:** 指定 GOSSD 的结构

**JMP添加的版本:** 15

```jsl

d = DOE( Group Orthogonal Supersaturated Design );d << GOSSDStructure( 6, 8 );

```

### Get Alias Matrix

**语法:** obj &lt;&lt; Get Alias Matrix

**说明:** 从设计评估返回别名矩阵。

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );d = DOE( Evaluate Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );d << Get Alias Matrix;

```

### Get Design Diagnostics

**语法:** obj &lt;&lt; Get Design Diagnostics

**说明:** 返回 D-效率、G-效率、A-效率和预测的平均方差。

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );d = DOE( Evaluate Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );d << Get Design Diagnostics;

```

### Get Effect Power

**语法:** obj &lt;&lt; Get Effect Power

**说明:** 返回效应估计值的功效向量。

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/2x3x4 Factorial.jmp" );d = DOE( Evaluate Design, X( :X1, :X2, :X3 ), Y( :Y ) );d << Get Effect Power;

```

### Get Estimation Efficiencies

**语法:** obj &lt;&lt; Get Estimation Efficiencies

**说明:** 返回相比于理想设计每个参数估计值增加的宽度的向量。

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );d = DOE( Evaluate Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );d << Get Estimation Efficiencies;

```

### Get MaxPro Values

**语法:** obj &lt;&lt; Get MaxPro Values

**说明:** 返回快速灵活设计的 MaxPro 值，包括基于分类因子水平的任何子设计。

**JMP添加的版本:** 14

```jsl

d = DOE(	Space Filling Design,	{Add Factor( Continuous, -1, 1, "X1", 0 ), Add Factor( Continuous, -1, 1, "X2", 0 ),	Add Factor( Categorical, {"L1", "L2", "L3", "L4"}, "X3", 0 ),	FFF Optimality Criterion( MaxPro ), MaxPro Categorical Weight( 4 ),	Space Filling Design Type( Fast Flexible Filling, 100 )});d << Get MaxPro Values;

```

### Get Number of Random Starts

**语法:** obj &lt;&lt; Get Number of Random Starts

**说明:** 返回设计生成中使用的随机开始数。

**JMP添加的版本:** 15

### Get Power

**语法:** obj &lt;&lt; Get Power

**说明:** 返回参数估计的功效向量。

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );d = DOE( Evaluate Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );d << Get Power;

```

### Get Prediction Variances

**语法:** obj &lt;&lt; Get Prediction Variances

**说明:** 从设计空间比例图中返回预测方差的向量。

**JMP添加的版本:** 14

```jsl

d = DOE(	Custom Design,	{Add Factor( Continuous, -1, 1, "X1", 0 ), Add Factor( Continuous, -1, 1, "X2", 0 ),	Set Sample Size( 7 ), Design Search Time( 8 ), Set Number of FDS points( 20000 ),	Make Design});d << Get Prediction Variances;

```

### Get X Matrix

**语法:** obj &lt;&lt; Get X Matrix

**说明:** 返回设计矩阵（也称 X 矩阵）。

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );d = DOE( Evaluate Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );d << Get X Matrix;

```

### Group New Runs Into Separate Block

**语法:** obj &lt;&lt; Group New Runs Into Separate Block

**说明:** 添加分区组因子，在扩充设计时它将新试验分组到单独的区组中。

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );d = DOE( Augment Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );d << Group New Runs Into Separate Block;

```

### Load Constraints

**语法:** obj &lt;&lt; Load Constraints

**说明:** 加载一个先前保存的因子约束表用于实验中。

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Diamond Constraints.jmp" );d = DOE(	Custom Design,	Add Factor( Continuous, -1, 1, "X1", 0 ),	Add Factor( Continuous, -1, 1, "X2", 0 ),	Add Term( {1, 0} ),	Load Constraints);

```

### Load Design

**语法:** obj &lt;&lt; Load Design

**说明:** 加载设计

```jsl

d = DOE( Custom Design );d << Load Design();

```

### Load Factors

**语法:** obj &lt;&lt; Load Factors

**说明:** 加载一个先前保存的因子表以用于实验中。

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Factors.jmp" );DOE( Custom Design, Load Factors );

```

### Load Responses

**语法:** obj &lt;&lt; Load Responses

**说明:** 加载以前保存的响应数据表。

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Response.jmp" );DOE( Custom Design, Load Responses );

```

### Local Design

**语法:** obj &lt;&lt; Local Design( state=0|1 )

**说明:** 指定是否应创建先验均值的局部设计。

```jsl

DOE(	Accelerated Life Test Plan,	{ALT Plan Setup( 1 ), Set Monitoring Choice( 2, {5, 200, 200} ),	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),	Set Prior Mean ALT( [-40 1.5 2] ), Set Prior Std Error ALT( [10, 0.2, 0.5] ),	Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ), Local Design( 0 ),	Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ),	Set Length of Test( 1000 ), Set Inspection Times( [200 400 600 800 1000] ),	Set Number of Units( 150 ), Set Candidate Runs( [90 0 150, 100 0 150, 110 0 150] )});

```

### Make Design

**语法:** obj &lt;&lt; Make Design

**说明:** 创建您在脚本中指定的设计。

```jsl

d = DOE( Custom Design, Add factor, Add factor, Add factor );d << Make Model( RSM );d << Make Design;

```

### Make Model

**语法:** obj &lt;&lt; Make Model( Linear|Interactions|RSM )

**说明:** 为指定模型将项添加至模型项列表。

**示例 1**

```jsl

d = DOE( Custom Design, Add Factor, Add Factor, Add Factor );d << Make Model( RSM );

```

**示例 2**

```jsl

d = DOE( Custom Design, Add Factor, Add Factor, Add Factor );d << Make Model( Interactions );

```

### Make Strip Plot Design

**语法:** obj &lt;&lt; Make Strip Plot Design

**说明:** 指定当难以更改的因子可独立于极难更改的因子发生变化时的带区设计。

```jsl

d = DOE(	Custom Design,	Add Factor( Continuous, -1, 1, "X1", 2 ),	Add Factor( Continuous, -1, 1, "X2", 1 ),	Add Factor( Continuous, -1, 1, "X3", 0 ));d << Set N Whole Plots( 4 );d << Make Strip Plot Design;

```

### Make Table

**语法:** obj &lt;&lt; Make Table

**说明:** 根据当前设计创建数据表。

```jsl

d = DOE( Custom Design, Add factor, Add factor, Add factor );d << Make Design;d << Make Table;

```

### Make Test Plan

**语法:** obj &lt;&lt; Make Test Plan

**说明:** 创建加速寿命试验计划的检验计划。

```jsl

DOE(	Accelerated Life Test Plan,	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Monitoring at Intervals", {5, 200, 200} ),	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),	Set Prior Mean ALT( [-40 1.5 2] ), Set Prior Std Error ALT( [10, 0.2, 0.5] ),	Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ), Use Prior Uncertainty( 1 ),	Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ),	Set Length of Test( 1000 ), Set Inspection Times( [200 400 600 800 1000] ),	Set Number of Units( 150 ), Set Candidate Runs( [90 0 150, 100 0 150, 110 0 150] ),	Make Design, Make Test Plan});

```

### MaxPro Categorical Weight

**语法:** obj &lt;&lt; MaxPro Categorical Weight

**说明:** 指定 MaxPro 权重。值大于 1 会使具有相同分类水平的点增加分离程度。

**JMP添加的版本:** 14

```jsl

DOE(	Space Filling Design,	{Add Factor( Continuous, -1, 1, "X1", 0 ), Add Factor( Continuous, -1, 1, "X2", 0 ),	Add Factor( Categorical, {"L1", "L2", "L3", "L4"}, "X3", 0 ),	FFF Optimality Criterion( MaxPro ), MaxPro Categorical Weight( 4 ),	Space Filling Design Type( Fast Flexible Filling, 100 )});

```

### Mixture Design Type

**语法:** obj &lt;&lt; Mixture Design Type( Simplex Centroid|Simplex Lattice|ABCD|Extreme Vertices|Space Filling )

**说明:** 指定混料设计的类型。使用默认参数，除非您指定该参数为第二个变元。

**示例 1**

```jsl

d = doe( Mixture Design );d << Mixture Design Type( Simplex Centroid, 2 );

```

**示例 2**

```jsl

d = doe( Mixture Design );d << Mixture Design Type( Simplex Lattice, 4 );

```

**示例 3**

```jsl

d = doe( Mixture Design );d << Mixture Design Type( ABCD );

```

**示例 4**

```jsl

d = doe( Mixture Design );d << Change Factor Settings( 1, .05, .25 );d << Mixture Design Type( Extreme Vertices, 3 );

```

**示例 5**

```jsl

d = doe( Mixture Design );d << Mixture Design Type( Space Filling, 25 );

```

### Mixture Sum

**语法:** obj &lt;&lt; Mixture Sum

**说明:** 若要将所有成分的总和表达为非 1 的值，请使用该选项。混料合计是所有成分量的总和。

```jsl

DOE(	Custom Design,	Mixture Sum( 50 ),	Add Factor( Mixture, 10, 25, "X1", 0 ),	Add Factor( Mixture, 0, 15, "X2", 0 ),	Add Factor( Mixture, 25, 40, "X3", 0 ),	Make Design);

```

### Nesting Structure

**语法:** obj &lt;&lt; Nesting Structure

**说明:** 指定设计的嵌套结构。使用带括号的列表指示嵌套（第一个元素是嵌套因子，第二个元素是嵌套因子或结构的带括号列表）。使用水平拼接 (&apos;||&apos;) 表示交叉因子或结构。

```jsl

DOE(	MSA Design,	Add Factor( Categorical, {"L1", "L2"}, "X1", MSA( 4, 1, 1 ) ),	Add Factor( Categorical, {"L1", "L2"}, "X2", MSA( 4, 1, 1 ) ),	Add Factor( Categorical, {"L1", "L2"}, "X3", MSA( 4, 1, 1 ) ),	Nesting Structure( {"X1", {"X2"}} || "X3" ));

```

### Number of Column Starts

**语法:** obj &lt;&lt; Number of Column Starts

**说明:** 指定针对主效应筛选设计的每个因子优化随机列的次数。

```jsl

DOE(	Screening Design,	Add Factor( Continuous, -1, 1, "X1", 0 ),	Add Factor( Continuous, -1, 1, "X2", 0 ),	Add Factor( Continuous, -1, 1, "X3", 0 ),	Screening Type( 1 ),	Number of Column Starts( 100 ),	Set Sample Size( 12 ),	Make Design);

```

### Number of Extra Runs

**语法:** obj &lt;&lt; Number of Extra Runs

**说明:** 指定要包括在确定性筛选设计中的额外试验次数。

```jsl

DOE(	Definitive Screening Design,	Add Factor,	Add Factor,	Add Factor,	Add Factor,	Add Factor,	Add Factor,	Show Blocking Options( 1, 2 ),	Number of Extra Runs( 4 ));

```

### Number of Starts

**语法:** obj &lt;&lt; Number of Starts

**说明:** 指定为优化总体设计而重新生成设计的次数。

```jsl

DOE(	Custom Design,	Add Factor( Continuous, -1, 1, "X1", 0 ),	Add Factor( Continuous, -1, 1, "X2", 0 ),	Add Factor( Continuous, -1, 1, "X3", 0 ),	Number of Starts( 1000 ),	Make Design);

```

### Optimality Criterion

**语法:** obj &lt;&lt; Optimality Criterion( "推荐"|"制作 D 最优设计"|"制作 I 最优设计"|"制作 A 最优设计"|"制作别名最优设计" )

**说明:** 指定设计中使用的条件。推荐使用默认值。

**示例 1**

```jsl

DOE(	Custom Design,	Add Factor( Continuous, -1, 1, "X1", 0 ),	Add Factor( Continuous, -1, 1, "X2", 0 ),	Add Factor( Continuous, -1, 1, "X3", 0 ),	Optimality Criterion( "Make I-optimal Design" ),	Make Design);

```

**示例 2**

```jsl

DOE(	Custom Design,	Add Factor( Continuous, -1, 1, "X1", 0 ),	Add Factor( Continuous, -1, 1, "X2", 0 ),	Add Factor( Continuous, -1, 1, "X3", 0 ),	Optimality Criterion( 2 ),	Make Design);

```

### Order Column

**语法:** obj &lt;&lt; Order Column

**说明:** 创建数据表时请求顺序列。

**JMP添加的版本:** 14

```jsl

d = DOE( Balanced Incomplete Block Design );d << Treatments( 3, {"L1", "L2", "L3"} );d << Make Design;d << OrderColumn( 1 );

```

### Prior Parameter Variance

**语法:** obj &lt;&lt; Prior Parameter Variance

**说明:** 使用该选项可控制用于模型中“若可能”项的权重。值越大意味着信息重要性越高，方差越小。方差是所输入值的倒数。

```jsl

DOE(	Custom Design,	Add Factor( Continuous, -1, 1, "X1", 0 ),	Add Factor( Continuous, -1, 1, "X2", 0 ),	Add Potential Term( {1, 1} ),	Add Potential Term( {2, 1} ),	Add Potential Term( {1, 1}, {2, 1} ),	Prior Parameter Variance( [0, 1, 2, 6] ),	Make Design);

```

### Prior Specification Choice

**语法:** obj &lt;&lt; Prior Specification Choice

**说明:** 设置用于指定先验参数的选项，1 表示“指定截距”，2 表示“指定分位数”。

```jsl

DOE(	Accelerated Life Test Plan,	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Continuous Monitoring" ),	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),	Prior Specification Choice( 1 ), Set Prior Mean ALT( [-40 1.5 2] ),	Set Prior Std Error ALT( [10, 0.2, 0.5] ),	Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ), Use Prior Uncertainty( 1 ),	Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ),	Set Length of Test( 1000 ), Set Number of Units( 150 )});

```

### Reference Design

**语法:** obj &lt;&lt; Reference Design

**说明:** 指定设计比较的参考设计。

**JMP添加的版本:** 14

```jsl

DOE(	Custom Design,	Add Factor,	Add Factor,	Add Factor,	Set Sample Size( 12 ),	Make Design,	Make Table);DOE( Custom Design, Add Factor, Add Factor, Add Factor, Make Design, Make Table );DOE(	Custom Design,	Add Factor,	Add Factor,	Add Factor,	Set Sample Size( 4 ),	Make Design,	Make Table);DOE(	Compare Designs,	Reference Design( "Custom Design", X( :X1, :X2, :X3 ) ),	Additional Designs(		"Custom Design 2",		X( :X1, :X2, :X3 ),		"Custom Design 3",		X( :X1, :X2, :X3 )	));

```

### Remove Alias Term

**语法:** obj &lt;&lt; Remove Alias Term

**说明:** 从别名项列表删除项。为列表中的每个效应指定因子数和功效。通过用逗号分隔效应来创建交互作用。

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );d = DOE( Evaluate Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );d << Remove Alias Term( {1, 1}, {3, 1} );

```

### Remove All Alias Terms

**语法:** obj &lt;&lt; Remove All Alias Terms

**说明:** 从别名项列表中删除所有别名项

```jsl

d = DOE(	Custom Design,	Add Factor( Continuous, -1, 1, "X1", 0 ),	Add Factor( Continuous, -1, 1, "X2", 0 ));d << Make Model( Linear );d << Remove All Alias Terms;

```

### Remove Term

**语法:** obj &lt;&lt; Remove Term

**说明:** 从模型项列表删除项。为列表中的每个效应指定因子数和功效。通过用逗号分隔效应来创建交互作用。

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );d = DOE( Evaluate Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );d << Remove Term( {1, 1}, {3, 1} );d << Remove Term( {3, 2} );

```

### Replicates

**语法:** obj &lt;&lt; Replicates

**说明:** 指定重复试验的次数。对于 MSA 设计，第二个参数指定重复结构: 0=完全随机化，1=批次重复，2=快速重复。

**示例 1**

```jsl

d = DOE(	Custom Design,	Add Factor( Continuous, -1, 1, "X1", 0 ),	Add Factor( Continuous, -1, 1, "X2", 0 ));d << Make Model( Linear );d << Replicates( 2 );

```

**示例 2**

```jsl

d = DOE(	MSA Design,	{Add Response( None, "Y", ., ., . ), Add Factor(		Categorical,		{"L1", "L2"},		"X1",		MSA( 4, 1 )	), Add Factor( Categorical, {"L1", "L2"}, "X2", MSA( 4, 1 ) ),	Add Factor( Categorical, {"L1", "L2"}, "X3", MSA( 4, 1 ) ), Set Random Seed( 3983347 ),	Replicates( 2, 0 ), Simulate Responses( 0 )});

```

### Report

**语法:** obj &lt;&lt; Report

**说明:** 返回对该报表对象的引用。

```jsl

d = DOE( Custom Design );r = d << report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Save Constraints

**语法:** obj &lt;&lt; Save Constraints

**说明:** 将当前实验的因子约束保存到 JMP 表以用于其他实验

```jsl

DOE(	Custom Design,	Add Response( Maximize, "Y", ., ., . ),	Add Factor( Continuous, -1, 1, "X1", 0 ),	Add Factor( Continuous, -1, 1, "X2", 0 ),	Add Factor( Continuous, -1, 1, "X3", 0 ),	Add Constraint( [1 1 0 1, 1 0 1 1] ),	Add Term( {1, 0} ),	Save Constraints);

```

### Save Factors

**语法:** obj &lt;&lt; Save Factors

**说明:** 将您刚刚创建的因子保存到 JMP 表，从而可以使用这些因子进行其他实验。

```jsl

DOE(	Custom Design,	Add Response( Match Target, "Stretch", 350, 550, 1 ),	Add Factor( Continuous, 0.7, 1.7, "Silica", 0 ),	Add Factor( Continuous, 1.8, 2.8, "Sulfur", 0 ),	Add Factor( Continuous, 40, 60, "Silane", 0 ),	Save Factors);

```

### Save Responses

**语法:** obj &lt;&lt; Save Responses

**说明:** 将创建的响应保存为 JMP 数据表。您可以在其他实验中加载这些响应。

```jsl

DOE(	Custom Design,	Add Response( Match Target, "Stretch", 350, 550, 1 ),	Add Factor( Continuous, 0.7, 1.7, "Silica", 0 ),	Add Factor( Continuous, 1.8, 2.8, "Sulfur", 0 ),	Add Factor( Continuous, 40, 60, "Silane", 0 ),	Save Responses);

```

### Save Script to Data Table

**语法:** obj &lt;&lt; Save Script to Data Table

**说明:** 创建可重新生成该设计的脚本。

### Save Script to Script Window

**语法:** obj &lt;&lt; Save Script to Script Window

**说明:** 创建可重新生成该设计的脚本。

```jsl

DOE(	Custom Design,	Add Factor( Continuous, -1, 1, "X1", 0 ),	Add Factor( Continuous, -1, 1, "X2", 0 ),	Make Design,	Save Script to Script Window);

```

### Save X Matrix

**语法:** obj &lt;&lt; Save X Matrix( state=0|1 )

**说明:** 将设计矩阵（也称 X 矩阵）保存为包含该设计的 JMP 数据表中的表属性。

```jsl

DOE(	Custom Design,	Add Factor( Continuous, -1, 1, "X1", 0 ),	Add Factor( Continuous, -1, 1, "X2", 0 ),	Save X Matrix,	Make Design,	Make Table);

```

### Screening Type

**语法:** obj &lt;&lt; Screening Type

**说明:** 指定主效应筛选设计，它是正交或接近正交设计。

```jsl

d = DOE(	Screening Design,	Add Factor( Continuous, -1, 1, "X1", 0 ),	Add Factor( Continuous, -1, 1, "X2", 0 ),	Add Factor( Continuous, -1, 1, "X3", 0 ));d << Screening Type( 1 );d << Set Sample Size( 12 );d << Make Design;

```

### Select Covariate Rows

**语法:** obj &lt;&lt; Select Covariate Rows

**说明:** 指定要在“实验设计”中选择的协变量表中的行。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );DOE(	Custom Design,	Add Response( Maximize, "Y", ., ., . ),	Add Factor( Covariate, :sex, 0 ),	Add Factor( Covariate, :height, 0 ),	Add Factor( Covariate, :weight, 0 ),	Add Term( {1, 0} ),	Add Term( {1, 1} ),	Add Term( {2, 1} ),	Add Term( {3, 1} ),	Enforce Use of Selected Covariate Rows( 1 ),	Allow covariate rows to be repeated( 1 ),	Select Covariate Rows( [1 2 3 4] ),	Set Sample Size( 24 ));

```

### Set ALT Probability of Interest

**语法:** obj &lt;&lt; Set ALT Probability of Interest

**说明:** 设置加速寿命试验计划的关注的概率。

```jsl

DOE(	Accelerated Life Test Plan,	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Continuous Monitoring" ),	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),	Set Prior Mean ALT( [-40 1.5 2] ), Set Prior Std Error ALT( [10, 0.2, 0.5] ),	Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ), Use Prior Uncertainty( 1 ),	Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ),	Set Length of Test( 1000 ), Set Number of Units( 150 )});

```

### Set ALT Time Range

**语法:** obj &lt;&lt; Set ALT Time Range

**说明:** 设置加速寿命试验计划的关注的时间范围。

```jsl

DOE(	Accelerated Life Test Plan,	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Continuous Monitoring" ),	ALT Optimality Criterion( "Make Failure Probability Optimal" ),	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),	Set Prior Mean ALT( [-40 1.5 2] ), Set Prior Std Error ALT( [10, 0.2, 0.5] ),	Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ), Use Prior Uncertainty( 1 ),	Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ),	Set Length of Test( 1000 ), Set Number of Units( 150 )});

```

### Set Average Cluster Size

**语法:** obj &lt;&lt; Set Average Cluster Size

**说明:** 控制用于聚类快速灵活填充设计的随机点数。

```jsl

DOE(	Space Filling Design,	Change Factor Settings( 1, -1, 1, "X1" ),	Change Factor Settings( 2, -1, 1, "X2" ),	Set Average Cluster Size( 100 ),	Space Filling Design Type( Fast Flexible Filling, 50 ));

```

### Set Axial Choice

**语法:** obj &lt;&lt; Set Axial Choice( 1|2|3|4 )

**说明:** 指定轴值设置。使用 1 表示可旋转，2 表示正交，3 表示位于表面，4 表示用户指定。

```jsl

d = DOE( Response Surface Design, Make Design( 2 ) );d << Set Axial Choice( 2 );

```

### Set Axial Value

**语法:** obj &lt;&lt; Set Axial Value

**说明:** 指定“用户指定”轴值。

```jsl

d = DOE( Response Surface Design, Make Design( 2 ) );d << Set Axial Value( 2 );

```

### Set Candidate Runs

**语法:** obj &lt;&lt; Set Candidate Runs

**说明:** 设置加速寿命试验计划的候选试验。

```jsl

DOE(	Accelerated Life Test Plan,	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Monitoring at Intervals", {5, 200, 200} ),	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),	Set Prior Mean ALT( [-40 1.5 2] ), Set Prior Std Error ALT( [10, 0.2, 0.5] ),	Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ), Use Prior Uncertainty( 1 ),	Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ),	Set Length of Test( 1000 ), Set Inspection Times( [200 400 600 800 1000] ),	Set Number of Units( 150 ), Set Candidate Runs( [90 0 150, 100 0 150, 110 0 150] )});

```

### Set Delta For Power

**语法:** obj &lt;&lt; Set Delta For Power

**说明:** 指定“功效分析”中预期系数的值。预期系数将是指定值的一半。

```jsl

DOE(	Custom Design,	Add Factor( Continuous, -1, 1, "X1", 0 ),	Add Factor( Continuous, -1, 1, "X2", 0 ),	Set Delta For Power( 3 ),	Make Design);

```

### Set Expected Number of Respondents

**语法:** obj &lt;&lt; Set Expected Number of Respondents

**说明:** 设置每个调查期望的响应者数目。

```jsl

DOE(	Choice Design,	{Add Factor( Categorical, {"L1", "L2"}, "X1", 0 ),	Add Factor( Categorical, {"L1", "L2"}, "X2", 0 ), Set Random Seed( 1245253625 ),	Add Term( {1, 1} ), Add Term( {2, 1} ), Set Prior Mean Choice( [0 0] ),	Set Prior Variance Matrix( [1 0, 0 1] ), Set Number of Attributes( 2 ),	Set Number of Profiles( 2 ), Set Number of Choice Sets( 8 ), Set Number of Surveys( 1 ),	Set Expected Number of Respondents( 1 )});

```

### Set Generators

**语法:** obj &lt;&lt; Set Generators

**说明:** 指定筛选设计中使用的生成器。

```jsl

DOE(	Screening Design,	{Add Factor, Add Factor, Add Factor, Make Design( 1 ), Set Generators( [1, 1, 0] )});

```

### Set Inspection Times

**语法:** obj &lt;&lt; Set Inspection Times

**说明:** 设置加速寿命试验计划的检查次数。

```jsl

DOE(	Accelerated Life Test Plan,	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Monitoring at Intervals", {5, 200, 200} ),	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),	Set Prior Mean ALT( [-40 1.5 2] ), Set Prior Std Error ALT( [10, 0.2, 0.5] ),	Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ), Use Prior Uncertainty( 1 ),	Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ),	Set Length of Test( 1000 ), Set Inspection Times( [200 400 600 800 1000] ),	Set Number of Units( 150 ), Set Candidate Runs( [90 0 150, 100 0 150, 110 0 150] )});

```

### Set Length of Test

**语法:** obj &lt;&lt; Set Length of Test

**说明:** 设置加速寿命试验计划的试验长度。

```jsl

DOE(	Accelerated Life Test Plan,	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Continuous Monitoring" ),	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),	Set Prior Mean ALT( [-40 1.5 2] ), Set Prior Std Error ALT( [10, 0.2, 0.5] ),	Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ), Use Prior Uncertainty( 1 ),	Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ),	Set Length of Test( 1000 ), Set Number of Units( 150 )});

```

### Set Level Values

**语法:** obj &lt;&lt; Set Level Values

**说明:** 设置加速寿命试验计划中的加速因子的水平值。

```jsl

DOE(	Accelerated Life Test Plan,	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Monitoring at Intervals", {5, 200, 200} ),	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),	Set Prior Mean ALT( [-40 1.5 2] ), Set Prior Std Error ALT( [10, 0.2, 0.5] ),	Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ), Use Prior Uncertainty( 1 ),	Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ),	Set Length of Test( 1000 ), Set Inspection Times( [200 400 600 800 1000] ),	Set Number of Units( 150 ), Set Candidate Runs( [90 0 150, 100 0 150, 110 0 150] )});

```

### Set Monitoring Choice

**语法:** obj &lt;&lt; Set Monitoring Choice

**说明:** 指定加速寿命试验计划的监控类型。

```jsl

DOE(	Accelerated Life Test Plan,	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Continuous Monitoring" ),	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),	Set Prior Mean ALT( [-40 1.5 2] ), Set Prior Std Error ALT( [10, 0.2, 0.5] ),	Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ), Use Prior Uncertainty( 1 ),	Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ),	Set Length of Test( 1000 ), Set Number of Units( 150 )});

```

### Set N Subplots

**语法:** obj &lt;&lt; Set N Subplots

**说明:** 指定存在难以更改的因子和极难更改的因子时子区的数目。

```jsl

d = DOE(	Custom Design,	Add Factor( Continuous, -1, 1, "X1", 2 ),	Add Factor( Continuous, -1, 1, "X2", 1 ),	Add Factor( Continuous, -1, 1, "X3", 0 ));d << Set N Whole Plots( 4 );d << Set N Subplots( 8 );

```

### Set N Whole Plots

**语法:** obj &lt;&lt; Set N Whole Plots

**说明:** 指定存在难以更改的因子或极难更改的因子时整区的数目。

```jsl

d = DOE(	Custom Design,	Add Factor( Continuous, -1, 1, "X1", 1 ),	Add Factor( Continuous, -1, 1, "X2", 0 ));d << Set N Whole Plots( 6 );

```

### Set Number of Attributes

**语法:** obj &lt;&lt; Set Number of Attributes

**说明:** 设置选择集内可更改的特性数目。

```jsl

DOE(	Choice Design,	{Add Factor( Categorical, {"L1", "L2"}, "X1", 0 ),	Add Factor( Categorical, {"L1", "L2"}, "X2", 0 ), Set Random Seed( 1245253625 ),	Add Term( {1, 1} ), Add Term( {2, 1} ), Set Prior Mean Choice( [0 0] ),	Set Prior Variance Matrix( [1 0, 0 1] ), Set Number of Attributes( 2 ),	Set Number of Profiles( 2 ), Set Number of Choice Sets( 8 ), Set Number of Surveys( 1 ),	Set Expected Number of Respondents( 1 )});

```

### Set Number of Choice Sets

**语法:** obj &lt;&lt; Set Number of Choice Sets

**说明:** 设置每个调查的选择集数目。

```jsl

DOE(	Choice Design,	{Add Factor( Categorical, {"L1", "L2"}, "X1", 0 ),	Add Factor( Categorical, {"L1", "L2"}, "X2", 0 ), Set Random Seed( 1245253625 ),	Add Term( {1, 1} ), Add Term( {2, 1} ), Set Prior Mean Choice( [0 0] ),	Set Prior Variance Matrix( [1 0, 0 1] ), Set Number of Attributes( 2 ),	Set Number of Profiles( 2 ), Set Number of Choice Sets( 8 ), Set Number of Surveys( 1 ),	Set Expected Number of Respondents( 1 )});

```

### Set Number of FDS points

**语法:** obj &lt;&lt; Set Number of FDS points

**说明:** 设置用于生成设计空间比例图的点数。

**JMP添加的版本:** 14

```jsl

DOE(	Custom Design,	{Add Factor( Continuous, -1, 1, "X1", 0 ), Add Factor( Continuous, -1, 1, "X2", 0 ),	Set Sample Size( 7 ), Design Search Time( 8 ), Set Number of FDS points( 20000 ),	Make Design});

```

### Set Number of Profiles

**语法:** obj &lt;&lt; Set Number of Profiles

**说明:** 设置每个选择集的特征数目。

```jsl

DOE(	Choice Design,	{Add Factor( Categorical, {"L1", "L2"}, "X1", 0 ),	Add Factor( Categorical, {"L1", "L2"}, "X2", 0 ), Set Random Seed( 1245253625 ),	Add Term( {1, 1} ), Add Term( {2, 1} ), Set Prior Mean Choice( [0 0] ),	Set Prior Variance Matrix( [1 0, 0 1] ), Set Number of Attributes( 2 ),	Set Number of Profiles( 2 ), Set Number of Choice Sets( 8 ), Set Number of Surveys( 1 ),	Set Expected Number of Respondents( 1 )});

```

### Set Number of Surveys

**语法:** obj &lt;&lt; Set Number of Surveys

**说明:** 设置选择设计的调查数目。

```jsl

DOE(	Choice Design,	{Add Factor( Categorical, {"L1", "L2"}, "X1", 0 ),	Add Factor( Categorical, {"L1", "L2"}, "X2", 0 ), Set Random Seed( 1245253625 ),	Add Term( {1, 1} ), Add Term( {2, 1} ), Set Prior Mean Choice( [0 0] ),	Set Prior Variance Matrix( [1 0, 0 1] ), Set Number of Attributes( 2 ),	Set Number of Profiles( 2 ), Set Number of Choice Sets( 8 ), Set Number of Surveys( 1 ),	Set Expected Number of Respondents( 1 )});

```

### Set Number of Units

**语法:** obj &lt;&lt; Set Number of Units

**说明:** 设置加速寿命试验计划的试验单元的数量。

```jsl

DOE(	Accelerated Life Test Plan,	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Continuous Monitoring" ),	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),	Set Prior Mean ALT( [-40 1.5 2] ), Set Prior Std Error ALT( [10, 0.2, 0.5] ),	Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ), Use Prior Uncertainty( 1 ),	Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ),	Set Length of Test( 1000 ), Set Number of Units( 150 )});

```

### Set Prior Correlation ALT

**语法:** obj &lt;&lt; Set Prior Correlation ALT

**说明:** 设置加速寿命试验计划的先验相关性。

**JMP添加的版本:** 16

```jsl

DOE(	Accelerated Life Test Plan,	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Continuous Monitoring" ),	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),	Set Prior Mean ALT( [-40 1.5 2] ), Set Prior Std Error ALT( [10, 0.2, 0.5] ),	Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ), Use Prior Uncertainty( 1 ),	Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ),	Set Length of Test( 1000 ), Set Number of Units( 150 )});

```

### Set Prior Mean ALT

**语法:** obj &lt;&lt; Set Prior Mean ALT

**说明:** 设置加速寿命试验计划的先验均值。

```jsl

DOE(	Accelerated Life Test Plan,	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Continuous Monitoring" ),	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),	Set Prior Mean ALT( [-40 1.5 2] ), Set Prior Std Error ALT( [10, 0.2, 0.5] ),	Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ), Use Prior Uncertainty( 1 ),	Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ),	Set Length of Test( 1000 ), Set Number of Units( 150 )});

```

### Set Prior Mean Choice

**语法:** obj &lt;&lt; Set Prior Mean Choice

**说明:** 设置选择设计的先验均值。

```jsl

DOE(	Choice Design,	{Add Factor( Categorical, {"L1", "L2"}, "X1", 0 ),	Add Factor( Categorical, {"L1", "L2"}, "X2", 0 ), Set Random Seed( 1245253625 ),	Add Term( {1, 1} ), Add Term( {2, 1} ), Set Prior Mean Choice( [0 0] ),	Set Prior Variance Matrix( [1 0, 0 1] ), Set Number of Attributes( 2 ),	Set Number of Profiles( 2 ), Set Number of Choice Sets( 8 ), Set Number of Surveys( 1 ),	Set Expected Number of Respondents( 1 )});

```

### Set Prior Quantile ALT

**语法:** obj &lt;&lt; Set Prior Quantile ALT

**说明:** 设置根据分位数指定先验截距的信息。

```jsl

DOE(	Accelerated Life Test Plan,	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Continuous Monitoring" ),	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),	Prior Specification Choice( 2 ), Set Prior Quantile ALT( {[1.5 2], 0.065, 2642, 45} ),	Set Prior Std Error ALT( [10, 0.2, 0.5] ),	Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ), Use Prior Uncertainty( 1 ),	Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ),	Set Length of Test( 1000 ), Set Number of Units( 150 )});

```

### Set Prior Std Error ALT

**语法:** obj &lt;&lt; Set Prior Std Error ALT

**说明:** 设置加速寿命试验计划的先验标准误差。

**JMP添加的版本:** 16

```jsl

DOE(	Accelerated Life Test Plan,	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Continuous Monitoring" ),	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),	Set Prior Mean ALT( [-40 1.5 2] ), Set Prior Std Error ALT( [10, 0.2, 0.5] ),	Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ), Use Prior Uncertainty( 1 ),	Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ),	Set Length of Test( 1000 ), Set Number of Units( 150 )});

```

### Set Prior Variance ALT

**语法:** obj &lt;&lt; Set Prior Variance ALT

**说明:** 设置加速寿命试验计划的先验方差。

```jsl

DOE(	Accelerated Life Test Plan,	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Continuous Monitoring" ),	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),	Set Prior Mean ALT( [-40 1.5 2] ), Set Prior Variance ALT( [0.1 0 0, 0 0.1 0, 0 0 0.1] ),	Use Prior Uncertainty( 1 ), Set ALT Time Range( 10000, 20000 ),	Set ALT Probability of Interest( 0.1 ), Set Length of Test( 1000 ),	Set Number of Units( 150 )});

```

### Set Prior Variance Matrix

**语法:** obj &lt;&lt; Set Prior Variance Matrix

**说明:** 设置选择设计的先验方差矩阵。

```jsl

DOE(	Choice Design,	{Add Factor( Categorical, {"L1", "L2"}, "X1", 0 ),	Add Factor( Categorical, {"L1", "L2"}, "X2", 0 ), Set Random Seed( 1245253625 ),	Add Term( {1, 1} ), Add Term( {2, 1} ), Set Prior Mean Choice( [0 0] ),	Set Prior Variance Matrix( [1 0, 0 1] ), Set Number of Attributes( 2 ),	Set Number of Profiles( 2 ), Set Number of Choice Sets( 8 ), Set Number of Surveys( 1 ),	Set Expected Number of Respondents( 1 )});

```

### Set RMSE

**语法:** obj &lt;&lt; Set RMSE

**说明:** 指定“功效分析”中的预期均方根误差 (RMSE)。

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );d = DOE( Evaluate Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );d << Set RMSE( 1.5 );

```

### Set Random Seed

**语法:** obj &lt;&lt; Set Random Seed

**说明:** 对于教学十分有用。将随机种子设置为一个特定值，可确保班级所有成员获得相同的设计。

```jsl

DOE(	Custom Design,	Add Factor( Continuous, -1, 1, "X1", 0 ),	Add Factor( Continuous, -1, 1, "X2", 0 ),	Set Random Seed( 34067086 ),	Make Design);

```

### Set Run Order

**语法:** obj &lt;&lt; Set Run Order

**说明:** 在根据设计生成数据表时指定如何设置试验顺序。

```jsl

d = DOE( Custom Design, Add factor, Add factor, Add factor );d << Make Design;d << Set Run Order( Sort Left to Right );d << Make Table;

```

### Set Runs Per Random Block

**语法:** obj &lt;&lt; Set Runs Per Random Block

**说明:** 指定设计中随机区组的大小。

```jsl

d = DOE(	Custom Design,	Add Factor( Continuous, -1, 1, "X1", 0 ),	Add Factor( Continuous, -1, 1, "X2", 0 ),	Make Model( Linear ));d << Set Runs Per Random Block( 4 );

```

### Set Sample Size

**语法:** obj &lt;&lt; Set Sample Size

**说明:** 指定创建设计前的样本大小。若指定的数字小于设计器中显示的最小值，则样本大小设置为最小值。

```jsl

d = DOE( Custom Design, Add factor, Add factor, Add factor );d << Make Model( Linear );d << Set Sample Size( 12 );

```

### Set Significance Level

**语法:** obj &lt;&lt; Set Significance Level

**说明:** 更改功效分析中的显著性水平。

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );d = DOE( Evaluate Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );d << Set Significance Level( 0.10 );

```

### Set Strength

**语法:** obj &lt;&lt; Set Strength

**说明:** 设置覆盖阵列的强度

```jsl

d = DOE(	Covering Array,	Add factor( Categorical ),	Add factor( Categorical ),	Add factor( Categorical ));d << Set Strength( 3 );d << Make Table;

```

### Show Blocking Options

**语法:** obj &lt;&lt; Show Blocking Options

**说明:** 指定确定性筛选设计的分区组选择和区组数。指定值为 0 表示没有区组。

**示例 1**

```jsl

DOE(	Definitive Screening Design,	Add Factor,	Add Factor,	Add Factor,	Add Factor,	Add Factor,	Add Factor,	Show Blocking Options( 0, 0 ),	Number of Extra Runs( 4 ));

```

**示例 2**

```jsl

DOE(	Definitive Screening Design,	Add Factor,	Add Factor,	Add Factor,	Add Factor,	Add Factor,	Add Factor,	Show Blocking Options( 1, 2 ),	Number of Extra Runs( 4 ));

```

### Simulate Responses

**语法:** obj &lt;&lt; Simulate Responses( state=0|1 )

**说明:** 将响应数据添加至 JMP 设计表，可在教授实验设计时使用。

```jsl

DOE(	Custom Design,	Add Factor( Continuous, -1, 1, "X1", 0 ),	Add Factor( Continuous, -1, 1, "X2", 0 ),	Make Design,	Simulate Responses,	Make Table);

```

### Solve for Power

**语法:** obj &lt;&lt; Solve for Power

**说明:** 设置“功效分析”中的预期系数，以使功效接近指定值。

**JMP添加的版本:** 16

```jsl

DOE(	Custom Design,	Add Factor( Continuous, -1, 1, "X1", 0 ),	Add Factor( Continuous, -1, 1, "X2", 0 ),	Make Design,	Solve for Power( 0.8 ));

```

### Space Filling Design Type

**语法:** obj &lt;&lt; Space Filling Design Type( Sphere Packing|Latin Hypercube|Uniform|Minimum Potential|Maximum Entropy|IMSE Optimal|Fast Flexible Filling )

**说明:** 指定空间填充设计的类型和试验数。

**示例 1**

```jsl

d = DOE( Space Filling Design );d << Space Filling Design Type( Sphere Packing, 30 );

```

**示例 2**

```jsl

d = DOE( Space Filling Design );d << Space Filling Design Type( Latin Hypercube, 100 );

```

**示例 3**

```jsl

d = DOE( Space Filling Design );d << Space Filling Design Type( Uniform, 20 );

```

**示例 4**

```jsl

d = DOE( Space Filling Design );d << Space Filling Design Type( Fast Flexible Filling, 100 );

```

**示例 5**

```jsl

d = DOE( Space Filling Design, Space Filling Design Type( IMSE Optimal, 20 ) );d << Theta( [2, 3] );d << Make Design;

```

### Sphere Radius

**语法:** obj &lt;&lt; Sphere Radius

**说明:** 指定一个球形设计区域，并允许您设置区域的半径。

```jsl

DOE(	Custom Design,	Add Factor( Continuous, -1, 1, "X1", 0 ),	Add Factor( Continuous, -1, 1, "X2", 0 ),	Sphere Radius( 1 ),	Make Design);

```

### Split Plot Variance Ratio

**语法:** obj &lt;&lt; Split Plot Variance Ratio( Whole Plot Ratio | [Whole Plot Ratio, Subplot Ratio] )

**说明:** 对于难以更改的因子，指定整区误差方差与分批运行误差之间的比值。对于难以更改的因子和极难更改的因子，指定整区和子区误差与批次误差之间的比值。

**示例 1**

```jsl

DOE(	Custom Design,	Add Factor( Continuous, -1, 1, "X1", 1 ),	Add Factor( Continuous, -1, 1, "X2", 0 ),	Set N Whole Plots( 4 ),	Split Plot Variance Ratio( 2 ),	Make Design);

```

**示例 2**

```jsl

d = DOE(	Custom Design,	Add Factor( Continuous, -1, 1, "X1", 2 ),	Add Factor( Continuous, -1, 1, "X2", 1 ),	Add Factor( Continuous, -1, 1, "X3", 0 ),	Set N Whole Plots( 4 ));d << Split Plot Variance Ratio( [3, 2] );d << Make Design;

```

### Suppress Cotter Designs

**语法:** obj &lt;&lt; Suppress Cotter Designs( state=0|1 )

**说明:** 显示或隐藏筛选设计列表中的 Cotter 设计。该选项默认选中，这意味着 Cotters 设计最初不在筛选设计列表中。 默认开启。

```jsl

DOE(	Screening Design,	Add Factor( Continuous, -1, 1, "X1", 0 ),	Add Factor( Continuous, -1, 1, "X2", 0 ),	Add Factor( Continuous, -1, 1, "X3", 0 ),	Suppress Cotter Designs,	Make Design( 5 ));

```

### Table of Correlations

**语法:** obj &lt;&lt; Table of Correlations

**说明:** 创建一个带有“设计诊断”中的“相关性表”的数据表。

**JMP添加的版本:** 15

```jsl

DOE(	Custom Design,	Add Factor( Continuous, -1, 1, "X1", 0 ),	Add Factor( Continuous, -1, 1, "X2", 0 ),	Make Design,	Table of Correlations);

```

### Theta

**语法:** obj &lt;&lt; Theta

**说明:** 指定空间填充设计的协方差参数向量。

```jsl

d = DOE( Space Filling Design, Space Filling Design Type( IMSE Optimal, 20 ) );d << Theta( [2, 3] );

```

### Treatments

**语法:** obj &lt;&lt; Treatments

**说明:** 指定平衡不完全区组设计 (BIBD) 的处理数。

**JMP添加的版本:** 14

```jsl

d = DOE( Balanced Incomplete Block Design );d << Treatments( 3, {"L1", "L2", "L3"} );d << Make Design;

```

### Use Bayesian information

**语法:** obj &lt;&lt; Use Bayesian information( state=0|1 )

**说明:** 使用 Bayesian 设置中的先验信息进行设计诊断。

**JMP添加的版本:** 15

```jsl

DOE(	Custom Design,	Add Factor( Continuous, -1, 1, "X1", 0 ),	Add Factor( Continuous, -1, 1, "X2", 0 ),	Add Term( {1, 1} ),	Add Term( {2, 1} ),	Add Potential Term( {1, 1}, {2, 1} ),	Number of Starts( 10 ),	Make Design,	Use Bayesian Information( 1 ));

```

### Use Blue to Red color theme for color map

**语法:** obj &lt;&lt; Use Blue to Red color theme for color map( state=0|1 )

**说明:** 对相关性色图使用蓝色到红色颜色主题。

**JMP添加的版本:** 15

### Use Prior Uncertainty

**语法:** obj &lt;&lt; Use Prior Uncertainty( state=0|1 )

**说明:** 指定是否应使用先验不确定性来构造最优设计。

**JMP添加的版本:** 16

```jsl

DOE(	Accelerated Life Test Plan,	{ALT Plan Setup( 1 ), Set Monitoring Choice( 2, {5, 200, 200} ),	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),	Set Prior Mean ALT( [-40 1.5 2] ), Set Prior Std Error ALT( [10, 0.2, 0.5] ),	Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ), Use Prior Uncertainty( 1 ),	Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ),	Set Length of Test( 1000 ), Set Inspection Times( [200 400 600 800 1000] ),	Set Number of Units( 150 ), Set Candidate Runs( [90 0 150, 100 0 150, 110 0 150] )});

```

### Utility Neutral Design

**语法:** obj &lt;&lt; Utility Neutral Design( state=0|1 )

**说明:** 指定是否应创建效用均等选择设计。

```jsl

DOE(	Choice Design,	{Add Factor( Categorical, {"L1", "L2"}, "X1", 0 ),	Add Factor( Categorical, {"L1", "L2"}, "X2", 0 ), Set Random Seed( 1245253625 ),	Add Term( {1, 1} ), Add Term( {2, 1} ), Set Prior Mean Choice( [0 0] ),	Set Prior Variance Matrix( [1 0, 0 1] ), Set Number of Attributes( 2 ),	Set Number of Profiles( 2 ), Set Number of Choice Sets( 8 ), Set Number of Surveys( 1 ),	Set Expected Number of Respondents( 1 ), Utility Neutral Design( 1 )});

```

