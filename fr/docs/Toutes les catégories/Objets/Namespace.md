# Namespace



## Constructeurs associés

### New Namespace

**Syntaxe :** ns = New Namespace( &lt;name&gt;, &lt;list of expressions&gt; )

**Description :** Crée un espace de noms où toutes les fonctions et les variables créées ne sont définies que dans le nom spécifié.

```jsl

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

**Syntaxe :** obj &lt;&lt; Contains( string )

**Description :** Renvoie 1 si l’espace de noms contient l’expression chaîne spécifiée, ou 0 dans le cas contraire.

```jsl

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

**Syntaxe :** nsref &lt;&lt; Delete Namespace( &lt; Force( boolean ) &gt; )

**Description :** Supprime cet espace de noms.

**JMP Version ajoutée :** 14

```jsl

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

**Syntaxe :** obj &lt;&lt; First

**Description :** Renvoie l’expression de la chaîne du premier élément de cet espace de noms.

```jsl

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

**Syntaxe :** obj &lt;&lt; Get Contents

**Description :** Renvoie une liste d’éléments dans cet espace de noms, où chaque élément consiste en une liste de deux items contenant une clé et sa valeur.

```jsl

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

**Syntaxe :** obj &lt;&lt; Get Keys

**Description :** Renvoie une liste de clés dans cet espace de noms, où une clé est une représentation chaîne d&apos;un élément indépendant contenu dans l&apos;espace de noms.

```jsl

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

**Syntaxe :** obj &lt;&lt; Get Name

**Description :** Renvoie le nom de cet espace de noms.

```jsl

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

**Syntaxe :** obj &lt;&lt; Get Value( string )

**Description :** Renvoie la valeur de l’élément spécifié dans cet espace de noms. La "chaîne" est la clé de l’élément.

```jsl

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

**Syntaxe :** obj &lt;&lt; Get Values

**Description :** Renvoie une liste de valeurs correspondantes à chaque élément contenu dans cet espace de noms.

```jsl

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

**Syntaxe :** obj &lt;&lt; Insert( string, value )

**Description :** Introduit une expression chaîne, avec une valeur spécifiée dans cet espace de noms.

```jsl

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

**Syntaxe :** obj &lt;&lt; Lock Namespace( &lt;string, | {string, ...}&gt;* )

**Description :** Verrouille toutes les variables ou les variables nommées spécifiées dans cet espace de noms et empêche tout ajout, suppression ou modification de variables.

**JMP Version ajoutée :** 14

```jsl

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

**Syntaxe :** obj &lt;&lt; N Items

**Description :** Renvoie le nombre d’éléments contenus dans cet espace de noms.

```jsl

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

**Syntaxe :** obj &lt;&lt; Next( string )

**Description :** Renvoie l’expression de la chaîne de l&apos;élément qui suit la clé spécifiée dans cet espace de noms.

```jsl

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

**Syntaxe :** obj &lt;&lt; Remove( &lt;string | {string, ...}&gt;* )

**Description :** Supprime l’expression chaîne spécifiée de l’espace de noms.

```jsl

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

**Syntaxe :** obj &lt;&lt; Show Contents

**Description :** Affiche le contenu d’un espace de noms dans le log JMP.

```jsl

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

**Syntaxe :** obj &lt;&lt; Unlock Namespace( &lt;string | {string, ...}&gt;* )

**Description :** Déverrouille un espace de noms préalablement verrouillé avec toutes les variables verrouillées dans cet espace de travail et empêche tout ajout, suppression ou modification de variables.

**JMP Version ajoutée :** 14

```jsl

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

