# As SQL Expr

> **Summary**: Calculates a SQL expression to model the relationship between height and sex, incorporating constant terms and coefficients.

<!-- Keywords: #JSLScriptingLanguage, #SQLExpression, #HeightModel, #SexVariable, #Coefficient -->

**Code**:
```jsl
// 
As SQL Expr(
	Expr(
		(-138.653431987844)
		+3.89885710510669 * :height
		+Match( :sex,
			"F", 2.20079936579243,
			"M", -2.20079936579243,
			.
		)
	)
);
```

**Code Explanation**:

1. Define SQL expression.
2. Start expression block.
3. Add constant term.
4. Multiply height by coefficient.
5. Match sex variable.
6. Assign value for "F".
7. Assign value for "M".
8. Handle missing values.
9. End expression block.
10. Convert to SQL.



