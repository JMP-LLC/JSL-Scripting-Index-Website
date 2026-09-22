# SAS



### As C Expr

**Syntaxe :** y = As C Expr( x )

**Description :** Renvoie une expression équivalente dans le langage de programmation C.

**JMP Version ajoutée :** Avant la version 14

```jsl

As C Expr( Expr( Match( sex, 1, "Male", 2, "Female", "Other" ) ) );

```

### As JSON Expr

**Syntaxe :** y = As JSON Expr( x )

**Description :** Renvoie une représentation JSON (JavaScript Object Notation) de l&apos;expression.

**JMP Version ajoutée :** Avant la version 14

```jsl

As JSON Expr( Expr( Match( sex, 1, "Male", 2, "Female", "Other" ) ) );

```

### As JavaScript Expr

**Syntaxe :** y = As JavaScript Expr( x )

**Description :** Renvoie une expression équivalente dans le langage de programmation JavaScript.

**JMP Version ajoutée :** Avant la version 14

```jsl

As JavaScript Expr( Expr( Match( sex, 1, "Male", 2, "Female", "Other" ) ) );

```

### As Python Expr

**Syntaxe :** y = As Python Expr( x )

**Description :** Renvoie une expression équivalente dans le langage de programmation Python.

**JMP Version ajoutée :** Avant la version 14

```jsl

As Python Expr( Expr( Match( sex, 1, "Male", 2, "Female", "Other" ) ) );

```

### As SAS Expr

**Syntaxe :** y = As SAS Expr( x )

**Description :** Renvoie une version plus adaptée de l&apos;expression pour un SAS DATA step. Le code doit être ajusté dans un appel PROC DS2.

**JMP Version ajoutée :** Avant la version 14

```jsl

As SAS Expr( Expr( Match( sex, 1, "Male", 2, "Female", "Other" ) ) );

```

### SAS Name

**Syntaxe :** sasName = SAS Name( string|namelist )

**Description :** Convertit les noms de variable JMP en une chaîne contenant les noms de variable SAS corrects en remplaçant les caractères spéciaux et les espaces vides par des traits de soulignement. L&apos;argument peut être spécifié comme une chaîne ou une liste de chaînes.

**JMP Version ajoutée :** Avant la version 14

```jsl

SAS Name( {"x 1", "x 2"} );

```

### SAS Open For Var Names

**Syntaxe :** nameList = SAS Open For Var Names( path )

**Description :** Renvoie une liste de noms de variable d&apos;un jeu de données SAS.

**JMP Version ajoutée :** Avant la version 14

```jsl

SAS Open For Var Names( "C:\my data\somedata.sas7bdat" );

```

