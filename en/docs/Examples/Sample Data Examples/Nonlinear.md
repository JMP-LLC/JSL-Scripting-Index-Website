# Nonlinear

## Example 1
> **Summary**: Perform a nonlinear regression model using the `Nonlinear` function.

<!-- Keywords: #Nonlinear, #Linear -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/Reaction Kinetics.jmp");
// Model
Nonlinear(
	Y( :Observed Yield ),
	X( :Yield Model )
);
```

## Example 2
> **Summary**: Fit a full nonlinear Mitscherlich growth curve model using the Nonlinear platform.

<!-- Keywords: #Nonlinear, #Linear -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Nonlinear Examples/Algae Mitscherlich.jmp");
// Full nonlinear model
Nonlinear(
	Y( :Algae density ),
	X( :Mitscherlich ),
	Finish
);
```

## Example 3
> **Summary**: Fit a reduced nonlinear model with equal alphas for algae density.

<!-- Keywords: #Nonlinear, #Linear -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Nonlinear Examples/Algae Mitscherlich.jmp");
// Reduced nonlinear model-with equal alphas
Nonlinear(
	Y( :Algae density ),
	X( :equal alphas ),
	Finish
);
```

## Example 4
> **Summary**: Create a nonlinear regression model to analyze algae density using the Algae Mitscherlich dataset with equal betas.

<!-- Keywords: #Nonlinear, #Linear -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Nonlinear Examples/Algae Mitscherlich.jmp");
// Reduced nonlinear model-with equal betas
Nonlinear(
	Y( :Algae density ),
	X( :equal betas ),
	Finish
);
```

## Example 5
> **Summary**: Northwest plots the distribution of shoot lengths in a satellite image.

<!-- Keywords: #Nonlinear, #Linear, #Log -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Nonlinear Examples/CES Production Function.jmp");
// Nonlinear
Nonlinear(
	Y( :"log($ value)"n ),
	X( :Model )
);
```

## Example 6
> **Summary**: Fit a nonlinear Meyers Model to the given dataset using the Newton method.

<!-- Keywords: #Nonlinear, #Linear -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Nonlinear Examples/Chemical Kinetics.jmp");
// Meyers Model Fit
Nonlinear(
	Y( :"Velocity (y)"n ),
	X( :"Model (x)"n ),
	Newton,
	Finish
);
```

## Example 7
> **Summary**: Perform nonlinear regression using a disjoint linear model to analyze yield data.

<!-- Keywords: #Nonlinear, #Linear, #Plot -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Nonlinear Examples/Corn.jmp");
// Nonlinear - disjoint linear
Nonlinear(
	Y( :yield ),
	X( :linear ),
	Plot( 1 )
);
```

## Example 8
> **Summary**: Fit a nonlinear disjoint quadratic model to analyze yield data using the Quasi-Newton SR1 algorithm.

<!-- Keywords: #Nonlinear, #Linear, #Plot -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Nonlinear Examples/Corn.jmp");
// Nonlinear - disjoint quadratic
Nonlinear(
	Y( :yield ),
	X( :quad ),
	Plot( 1 ),
	QuasiNewton SR1
);
```

## Example 9
> **Summary**: Fit a nonlinear model to the data using the Model Y variable, with the loss function specified as negative log-likelihood, using the Newton method for optimization and omitting the final plot.

<!-- Keywords: #Nonlinear, #Linear, #Loss, #LossisNegLogLikelihood, #Method -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Nonlinear Examples/Logistic w Loss.jmp");
// Nonlinear with ModelY and Loss
Nonlinear(
	X( :Model Y ),
	Loss( :Loss ),
	Second Deriv Method( 1 ),
	Loss is Neg LogLikelihood( 1 ),
	Newton,
	Finish,
	Plot( 0 )
);
```

## Example 10
> **Summary**: Perform a nonlinear analysis with the response variable designated as Model2 Y and the loss function specified as Loss2, utilizing gradient-based optimization techniques and Newton's method.

<!-- Keywords: #Nonlinear, #CLLimit, #GradientLimit, #Limit, #Linear -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Nonlinear Examples/Logistic w Loss.jmp");
// Nonlinear with Model2 Y and Loss2
Nonlinear(
	X( :Model2 Y ),
	Loss( :Loss2 ),
	Relative Gradient( 0.000000001 ),
	Gradient Limit( 0.000000001 ),
	CL Limit( 0.00000001 ),
	Numeric Derivatives Only( 1 ),
	Loss is Neg LogLikelihood( 1 ),
	Newton,
	Finish,
	Plot( 0 )
);
```

## Example 11
> **Summary**: Perform nonlinear regression analysis without a model column using Newton's method in the Nonlinear platform.

<!-- Keywords: #Nonlinear, #Linear, #Loss, #LossisNegLogLikelihood, #Method -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Nonlinear Examples/Logistic w Loss.jmp");
// Nonlinear with no Model Column
Nonlinear(
	Loss( :Loss with No Model Column ),
	Second Deriv Method( 1 ),
	Loss is Neg LogLikelihood( 1 ),
	Newton,
	Finish,
	Plot( 0 )
);
```

## Example 12
> **Summary**: Fit nonlinear Poisson regression using the Newton-Raphson method.

<!-- Keywords: #Nonlinear, #Linear, #Loss, #LossisNegLogLikelihood, #Plot -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Ship Damage.jmp");
// Nonlinear
Nonlinear(
	X( :model ),
	Loss( :Poisson ),
	Loss is Neg LogLikelihood( 1 ),
	Newton,
	Finish,
	Plot( 0 )
);
```

