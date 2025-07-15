# SAS



### As C Expr

**Sintaxis:** y = As C Expr( x )

**Descripción:** Devuelve una expresión equivalente en el lenguaje de programación C.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
As C Expr( Expr( Match( sex, 1, "Male", 2, "Female", "Other" ) ) );

```

### As JSON Expr

**Sintaxis:** y = As JSON Expr( x )

**Descripción:** Devuelve una representación JSON (notación de objetos JavaScript) de la expresión.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
As JSON Expr( Expr( Match( sex, 1, "Male", 2, "Female", "Other" ) ) );

```

### As JavaScript Expr

**Sintaxis:** y = As JavaScript Expr( x )

**Descripción:** Devuelve una expresión equivalente en el lenguaje de programación JavaScript.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
As JavaScript Expr( Expr( Match( sex, 1, "Male", 2, "Female", "Other" ) ) );

```

### As Python Expr

**Sintaxis:** y = As Python Expr( x )

**Descripción:** Devuelve una expresión equivalente en el lenguaje de programación Python.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
As Python Expr( Expr( Match( sex, 1, "Male", 2, "Female", "Other" ) ) );

```

### As SAS Expr

**Sintaxis:** y = As SAS Expr( x )

**Descripción:** Devuelve una versión de la expresión más adecuada para un paso de datos SAS. El código debe estar incluido en una llamada PROC DS2.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
As SAS Expr( Expr( Match( sex, 1, "Male", 2, "Female", "Other" ) ) );

```

### SAS Name

**Sintaxis:** sasName = SAS Name( string|namelist )

**Descripción:** Convierte los nombres de variables de JMP en una cadena de caracteres que contiene nombres de variables de SAS válidos obtenidos mediante la sustitución de los caracteres especiales y los espacios por guiones bajos. El argumento se puede especificar como cadena de caracteres o lista de cadenas de caracteres.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
SAS Name( {"x 1", "x 2"} );

```

### SAS Open For Var Names

**Sintaxis:** nameList = SAS Open For Var Names( path )

**Descripción:** Devuelve una lista de nombres de variables de un conjunto de datos de SAS.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
SAS Open For Var Names( "C:\my data\somedata.sas7bdat" );

```

