# SAS



### As C Expr

**Syntax:** y = As C Expr( x )

**Beschreibung:** Gibt einen äquivalenten Ausdruck in der Programmiersprache C zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
As C Expr( Expr( Match( sex, 1, "Male", 2, "Female", "Other" ) ) );

```

### As JSON Expr

**Syntax:** y = As JSON Expr( x )

**Beschreibung:** Gibt eine JSON-Darstellung (JavaScript Object Notation) des Ausdrucks zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
As JSON Expr( Expr( Match( sex, 1, "Male", 2, "Female", "Other" ) ) );

```

### As JavaScript Expr

**Syntax:** y = As JavaScript Expr( x )

**Beschreibung:** Gibt einen äquivalenten Ausdruck in der Programmiersprache JavaScript zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
As JavaScript Expr( Expr( Match( sex, 1, "Male", 2, "Female", "Other" ) ) );

```

### As Python Expr

**Syntax:** y = As Python Expr( x )

**Beschreibung:** Gibt einen äquivalenten Ausdruck in der Programmiersprache Python zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
As Python Expr( Expr( Match( sex, 1, "Male", 2, "Female", "Other" ) ) );

```

### As SAS Expr

**Syntax:** y = As SAS Expr( x )

**Beschreibung:** Gibt eine Version des Ausdrucks zurück, die für einen SAS-DATA-Step besser geeignet ist. Der Code muss in einen PROC DS2-Aufruf verpackt werden.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
As SAS Expr( Expr( Match( sex, 1, "Male", 2, "Female", "Other" ) ) );

```

### SAS Name

**Syntax:** sasName = SAS Name( string|namelist )

**Beschreibung:** Wandelt JMP-Variablennamen in Zeichenketten mit gültigen SAS-Variablennamen um, indem Sonderzeichen und Leerzeichen durch Unterstriche ersetzt werden. Das Argument kann als Zeichenkette oder als Liste mit Zeichenketten angegeben werden.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
SAS Name( {"x 1", "x 2"} );

```

### SAS Open For Var Names

**Syntax:** nameList = SAS Open For Var Names( path )

**Beschreibung:** Gibt eine Liste der Variablennamen eines SAS-Datensatzes zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
SAS Open For Var Names( "C:\my data\somedata.sas7bdat" );

```

