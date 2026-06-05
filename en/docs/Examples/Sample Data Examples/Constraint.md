# Constraint

## Example 1
> **Summary**: Apply linear constraints to regression analysis. Use the Fit Model function to create a linear regression model with constraints on the coefficients of the predictors.

<!-- Keywords: #Constraint -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/Cake Data.jmp");
// Constraint
{1 * :Cocoa + 1 * :Sugar + 1 * :Flour <=
0.45, -1 * :Cocoa + -1 * :Sugar + -1 *
:Flour <= -0.45};
```

## Example 2
> **Summary**: Apply linear constraints to a dataset.

<!-- Keywords: #Constraint -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/Piepel.jmp");
// Constraint
{-85 * :X1 + -90 * :X2 + -100 * :X3 - (
-90), 85 * :X1 + 90 * :X2 + 100 * :X3
-95, -0.7 * :X1 + -1 * :X3 - (-0.4)};
```

## Example 3
> **Summary**: Apply constraints to the factors in a DOE analysis.

<!-- Keywords: #Constraint -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/Popcorn DOE Results.jmp");
// Constraint
{1 * :Time + 1 * :Power <= 13, 1 * :Time
 + 1 * :Power >= 10};
```

## Example 4
> **Summary**: Apply constraint to ensure positive levels of active ingredient and sufficient water relative to solvent in formulation.

<!-- Keywords: #Constraint -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Functional Data/Formulation For Homogeneity DOE.jmp");
// Constraint
{1 * :Solvent + -1.4 * :Active >= 0, -0.1
 * :Active + 1 * :Water >= 0};
```

