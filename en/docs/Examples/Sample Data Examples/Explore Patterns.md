# Explore Patterns

> **Summary**: Explore patterns in a dataset containing various laboratory test results using the function `Explore Patterns`.

<!-- Keywords: #ExplorePatterns, #Patterns -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Nicardipine Lab Patterns.jmp");
// Explore Patterns
Explore Patterns(
	Y(
		:Activated PTT, :ALT, :ALP, :AST,
		:Bilirubin, :BUN, :Calcium, :CO2,
		:Chloride, :Creatine Kinase,
		:Creatinine, :Erythrocytes,
		:Glucose, :Hematocrit,
		:Hemoglobin, :LDH, :Leukocytes,
		:PCO2, :Partial Pressure Oxygen,
		:pH, :Phosphate, :Platelet,
		:Potassium, :Protein,
		:Prothrombin Time, :Sodium,
		:Urate
	)
);
```

