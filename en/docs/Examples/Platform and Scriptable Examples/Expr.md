# Expr

> **Summary**: Runs the definition of variables for graphing in a JMP data table, utilizing the Extract Expr function to specify variable sizes.

<!-- Keywords: #JSLScriptingLanguage, #ExtractExpr, #DataTable, #VariableDefinition, #Graphing -->

**Code**:
```jsl
Open("data_table.jmp");
var = Expr(
	Variables( X( :age, Size( 0, 20 ) ), Y( :height, Size( 0, 36 ) ), Y( :weight ) )
);
```

**Code Explanation**:

1. Open data table;
2. Define variables for graphing.



