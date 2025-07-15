# SAS



### As C Expr

**Syntax:** y = As C Expr( x )

**Description:** Returns an equivalent expression in the C programming language.

```jsl

Names Default To Here( 1 );
As C Expr( Expr( Match( sex, 1, "Male", 2, "Female", "Other" ) ) );

```

### As JSON Expr

**Syntax:** y = As JSON Expr( x )

**Description:** Returns a JSON (JavaScript Object Notation) representation of the expression.

```jsl

Names Default To Here( 1 );
As JSON Expr( Expr( Match( sex, 1, "Male", 2, "Female", "Other" ) ) );

```

### As JavaScript Expr

**Syntax:** y = As JavaScript Expr( x )

**Description:** Returns an equivalent expression in the JavaScript programming language.

```jsl

Names Default To Here( 1 );
As JavaScript Expr( Expr( Match( sex, 1, "Male", 2, "Female", "Other" ) ) );

```

### As Python Expr

**Syntax:** y = As Python Expr( x )

**Description:** Returns an equivalent expression in the Python programming language.

```jsl

Names Default To Here( 1 );
As Python Expr( Expr( Match( sex, 1, "Male", 2, "Female", "Other" ) ) );

```

### As SAS Expr

**Syntax:** y = As SAS Expr( x )

**Description:** Returns a version of the expression more suitable for a SAS DATA step. The code must be wrapped in a PROC DS2 call.

```jsl

Names Default To Here( 1 );
As SAS Expr( Expr( Match( sex, 1, "Male", 2, "Female", "Other" ) ) );

```

### SAS Name

**Syntax:** sasName = SAS Name( string|namelist )

**Description:** Converts JMP variable names to a string containing valid SAS variable names by changing special characters and blanks to underscores. The argument can be specified as a string or a list of strings.

```jsl

Names Default To Here( 1 );
SAS Name( {"x 1", "x 2"} );

```

### SAS Open For Var Names

**Syntax:** nameList = SAS Open For Var Names( path )

**Description:** Returns a list of variable names from a SAS data set.

```jsl

Names Default To Here( 1 );
SAS Open For Var Names( "C:\my data\somedata.sas7bdat" );

```

