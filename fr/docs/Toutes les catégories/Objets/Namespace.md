# Namespace



## Constructeurs associés

### New Namespace

**Syntaxe :** ns = New Namespace( <name>, <list of expressions> )

**Description :** Crée un espace de noms où toutes les fonctions et les variables créées ne sont définies que dans le nom spécifié.

```jsl

Names Default To Here( 1 );
nsref = New Namespace(
	"Add Class"
);
Add Class:nObs = 20;
Add Class:addition = Function( {x, y}, x + y );
Add Class:append = Function( {a, b},
	Char( a ) || " + " || Char( b )
);

```

## Messages d'éléments

### Contains

**Syntaxe :** obj << Contains( string )

**Description :** Renvoie 1 si l’espace de noms contient l’expression chaîne spécifiée, ou 0 dans le cas contraire.

```jsl

Names Default To Here( 1 );
nsref = New Namespace(
	"Add Class"
);
Add Class:nObs = 20;
Add Class:addition = Function( {x, y}, x + y );
Add Class:append = Function( {a, b},
	Char( a ) || " + " || Char( b )
);
result = nsref << Contains( "nObs" );

```

### Delete Namespace

**Syntaxe :** nsref << Delete Namespace( < Force( boolean ) > )

**Description :** Supprime cet espace de noms.

**JMP Version ajoutée :** 14

```jsl

Names Default To Here( 1 );
nsref = New Namespace(
	"Add Class"
);
Add Class:nObs = 20;
Add Class:addition = Function( {x, y}, x + y );
Add Class:append = Function( {a, b},
	Char( a ) || " + " || Char( b )
);
nsref << Delete Namespace;
Show( nsref );

```

### First

**Syntaxe :** obj << First

**Description :** Renvoie l’expression de la chaîne du premier élément de cet espace de noms.

```jsl

Names Default To Here( 1 );
nsref = New Namespace(
	"Add Class"
);
Add Class:nObs = 20;
Add Class:addition = Function( {x, y}, x + y );
Add Class:append = Function( {a, b},
	Char( a ) || " + " || Char( b )
);
result = nsref << First;

```

### Get Contents

**Syntaxe :** obj << Get Contents

**Description :** Renvoie une liste d’éléments dans cet espace de noms, où chaque élément consiste en une liste de deux items contenant une clé et sa valeur.

```jsl

Names Default To Here( 1 );
nsref = New Namespace(
	"Add Class"
);
Add Class:nObs = 20;
Add Class:addition = Function( {x, y}, x + y );
Add Class:append = Function( {a, b},
	Char( a ) || " + " || Char( b )
);
result = nsref << Get Contents;

```

### Get Keys

**Syntaxe :** obj << Get Keys

**Description :** Renvoie une liste de clés dans cet espace de noms, où une clé est une représentation chaîne d&apos;un élément indépendant contenu dans l&apos;espace de noms.

```jsl

Names Default To Here( 1 );
nsref = New Namespace(
	"Add Class"
);
Add Class:nObs = 20;
Add Class:addition = Function( {x, y}, x + y );
Add Class:append = Function( {a, b},
	Char( a ) || " + " || Char( b )
);
result = nsref << Get Keys;

```

### Get Name

**Syntaxe :** obj << Get Name

**Description :** Renvoie le nom de cet espace de noms.

```jsl

Names Default To Here( 1 );
nsref = New Namespace(
	"Add Class"
);
Add Class:nObs = 20;
Add Class:addition = Function( {x, y}, x + y );
Add Class:append = Function( {a, b},
	Char( a ) || " + " || Char( b )
);
space name = nsref << Get Name;

```

### Get Value

**Syntaxe :** obj << Get Value( string )

**Description :** Renvoie la valeur de l’élément spécifié dans cet espace de noms. La "chaîne" est la clé de l’élément.

```jsl

Names Default To Here( 1 );
nsref = New Namespace(
	"Add Class"
);
Add Class:nObs = 20;
Add Class:addition = Function( {x, y}, x + y );
Add Class:append = Function( {a, b},
	Char( a ) || " + " || Char( b )
);
result = nsref << Get Value( "nObs" );

```

### Get Values

**Syntaxe :** obj << Get Values

**Description :** Renvoie une liste de valeurs correspondantes à chaque élément contenu dans cet espace de noms.

```jsl

Names Default To Here( 1 );
nsref = New Namespace(
	"Add Class"
);
Add Class:nObs = 20;
Add Class:addition = Function( {x, y}, x + y );
Add Class:append = Function( {a, b},
	Char( a ) || " + " || Char( b )
);
result = nsref << Get Values;

```

### Insert

**Syntaxe :** obj << Insert( string, value )

**Description :** Introduit une expression chaîne, avec une valeur spécifiée dans cet espace de noms.

```jsl

Names Default To Here( 1 );
nsref = New Namespace(
	"Add Class"
);
Add Class:nObs = 20;
Add Class:addition = Function( {x, y}, x + y );
Add Class:append = Function( {a, b},
	Char( a ) || " + " || Char( b )
);
nsref << Insert( "X", 25 );
Show( nsref );

```

### Lock Namespace

**Syntaxe :** obj << Lock Namespace( <string, | {string, ...}>* )

**Description :** Verrouille toutes les variables ou les variables nommées spécifiées dans cet espace de noms et empêche tout ajout, suppression ou modification de variables.

**JMP Version ajoutée :** 14

```jsl

Names Default To Here( 1 );
nsref = New Namespace(
	"Add Class"
);
Add Class:nObs = 20;
Add Class:addition = Function( {x, y}, x + y );
Add Class:append = Function( {a, b},
	Char( a ) || " + " || Char( b )
);
nsref << Lock Namespace;
Try( Add Class:nObs = 40, "Add Class is locked." );

```

### N Items

**Syntaxe :** obj << N Items

**Description :** Renvoie le nombre d’éléments contenus dans cet espace de noms.

```jsl

Names Default To Here( 1 );
nsref = New Namespace(
	"Add Class"
);
Add Class:nObs = 20;
Add Class:addition = Function( {x, y}, x + y );
Add Class:append = Function( {a, b},
	Char( a ) || " + " || Char( b )
);
n = nsref << N Items;

```

### Next

**Syntaxe :** obj << Next( string )

**Description :** Renvoie l’expression de la chaîne de l&apos;élément qui suit la clé spécifiée dans cet espace de noms.

```jsl

Names Default To Here( 1 );
nsref = New Namespace(
	"Add Class"
);
Add Class:nObs = 20;
Add Class:addition = Function( {x, y}, x + y );
Add Class:append = Function( {a, b},
	Char( a ) || " + " || Char( b )
);
result = nsref << Next( "addition" );

```

### Remove

**Syntaxe :** obj << Remove( <string | {string, ...}>* )

**Description :** Supprime l’expression chaîne spécifiée de l’espace de noms.

```jsl

Names Default To Here( 1 );
nsref = New Namespace(
	"Add Class"
);
Add Class:nObs = 20;
Add Class:addition = Function( {x, y}, x + y );
Add Class:append = Function( {a, b},
	Char( a ) || " + " || Char( b )
);
nsref << Remove( "nObs" );
Show( nsref );

```

### Show Contents

**Syntaxe :** obj << Show Contents

**Description :** Affiche le contenu d’un espace de noms dans le log JMP.

```jsl

Names Default To Here( 1 );
nsref = New Namespace(
	"Add Class"
);
Add Class:nObs = 20;
Add Class:addition = Function( {x, y}, x + y );
Add Class:append = Function( {a, b},
	Char( a ) || " + " || Char( b )
);
result = nsref << Show Contents;

```

### Unlock Namespace

**Syntaxe :** obj << Unlock Namespace( <string | {string, ...}>* )

**Description :** Déverrouille un espace de noms préalablement verrouillé avec toutes les variables verrouillées dans cet espace de travail et empêche tout ajout, suppression ou modification de variables.

**JMP Version ajoutée :** 14

```jsl

Names Default To Here( 1 );
nsref = New Namespace(
	"Add Class"
);
Add Class:nObs = 20;
Add Class:addition = Function( {x, y}, x + y );
Add Class:append = Function( {a, b},
	Char( a ) || " + " || Char( b )
);
nsref << Lock Namespace( "nObs" );
Try( Add Class:nObs = 30, Show( "Add Class is locked." ) ); 
//Try again after unlocking. 
nsref << Unlock Namespace( "nObs" );
Try( Add Class:nObs = 40, Show( "Add Class is locked." ) );

```

