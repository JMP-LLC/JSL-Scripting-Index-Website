# Diag

> **Summary**: Creates a correlation matrix by defining a custom function `make_cm` that initializes and modifies a matrix based on user-provided parameters.

<!-- Keywords: #JSLScriptingLanguage, #CorrelationMatrix, #MatrixOperations, #CustomFunction, #DataAnalysis -->

**Code**:
```jsl
make_cm = function ({k,r},
	corr_matrix=J(k,k,r);
	// diagonal elements equal to 1 by adding (1-r)
	corr_matrix=corr_matrix + diag(J(k,1,1-r)); 
);
make_cm (5, .9);
```

**Code Explanation**:

1. Define `make_cm` function.
2. Initialize `corr_matrix`.
3. Set diagonal elements to 1.
4. Call `make_cm` function.
5. Pass parameters 5 and 0.9.



