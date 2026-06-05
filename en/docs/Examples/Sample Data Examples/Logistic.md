# Logistic

## Example 1
> **Summary**: Fit a logistic regression model

<!-- Keywords: #Logistic -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Big Class.jmp");
// Logistic
Logistic( Y( :age ), X( :weight ) );
```

## Example 2
> **Summary**: Fit a logistic regression model to predict the response based on the dose, and perform inverse prediction at the 0.5 response level.

<!-- Keywords: #Logistic, #Response, #InversePrediction, #Prediction -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Dose Response.jmp");
// Logistic
Logistic(
	Y( response ),
	X( dose ),
	Inverse Prediction( Response( 0.5 ) )
);
```

## Example 3
> **Summary**: Perform logistic regression on the O-Ring Failure data table, predicting the Response variable using Temperature as the predictor, and calculate the inverse prediction for a Response value of 0.00063.

<!-- Keywords: #Logistic, #Response, #InversePrediction, #Prediction -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/O-Ring Failure.jmp");
// Logistic
Logistic(
	Y( Response ),
	X( Temperature ),
	Inverse Prediction(
		Response( 0.00063 )
	)
);
```

## Example 4
> **Summary**: Fit a logistic regression model with a response variable of interest and a predictor variable, including a frequency column.

<!-- Keywords: #Logistic, #Freq -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Penicillin.jmp");
// Logistic
Logistic(
	Y( Response ),
	X( "ln(dose)"n ),
	Freq( count )
);
```

## Example 5
> **Summary**: Perform a logistic regression analysis with age as the dependent variable and weight in pounds as the independent variable.

<!-- Keywords: #Logistic -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/World Class.jmp");
// Logistic
Logistic(
	Y( :age ),
	X( :"weight (lb.)"n )
);
```

