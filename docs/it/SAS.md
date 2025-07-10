# SAS



### As C Expr

**Sintassi:** y = As C Expr( x )

**Descrizione:** Restituisce un&apos;espressione equivalente nel linguaggio di programmazione C.

**JMP Versione aggiunta:** prima della versione 14

```js

Names Default To Here( 1 );
As C Expr( Expr( Match( sex, 1, "Male", 2, "Female", "Other" ) ) );

```

### As JSON Expr

**Sintassi:** y = As JSON Expr( x )

**Descrizione:** Restituisce una rappresentazione JSON (JavaScript Object Notation) dell&apos;espressione.

**JMP Versione aggiunta:** prima della versione 14

```js

Names Default To Here( 1 );
As JSON Expr( Expr( Match( sex, 1, "Male", 2, "Female", "Other" ) ) );

```

### As JavaScript Expr

**Sintassi:** y = As JavaScript Expr( x )

**Descrizione:** Restituisce un&apos;espressione equivalente nel linguaggio di programmazione JavaScript.

**JMP Versione aggiunta:** prima della versione 14

```js

Names Default To Here( 1 );
As JavaScript Expr( Expr( Match( sex, 1, "Male", 2, "Female", "Other" ) ) );

```

### As Python Expr

**Sintassi:** y = As Python Expr( x )

**Descrizione:** Restituisce un&apos;espressione equivalente nel linguaggio di programmazione Python.

**JMP Versione aggiunta:** prima della versione 14

```js

Names Default To Here( 1 );
As Python Expr( Expr( Match( sex, 1, "Male", 2, "Female", "Other" ) ) );

```

### As SAS Expr

**Sintassi:** y = As SAS Expr( x )

**Descrizione:** Restituisce una versione dell&apos;espressione più idonea per un passo di DATA SAS. Il codice deve essere impaginato con testo a capo in una chiamata PROC DS2.

**JMP Versione aggiunta:** prima della versione 14

```js

Names Default To Here( 1 );
As SAS Expr( Expr( Match( sex, 1, "Male", 2, "Female", "Other" ) ) );

```

### SAS Name

**Sintassi:** sasName = SAS Name( string|namelist )

**Descrizione:** Converte nomi di variabili JMP in una stringa contenente nomi di variabili SAS validi, sostituendo caratteri speciali e spazi con trattini bassi. L&apos;argomento può essere specificato come una stringa o un elenco di stringhe.

**JMP Versione aggiunta:** prima della versione 14

```js

Names Default To Here( 1 );
SAS Name( {"x 1", "x 2"} );

```

### SAS Open For Var Names

**Sintassi:** nameList = SAS Open For Var Names( path )

**Descrizione:** Restituisce un elenco di nomi di variabili da un data set SAS.

**JMP Versione aggiunta:** prima della versione 14

```js

Names Default To Here( 1 );
SAS Open For Var Names( "C:\my data\somedata.sas7bdat" );

```

