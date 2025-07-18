# Class



## Constructeurs associés

### Define Class

**Syntaxe :** Define Class("class name", &lt;Base Class{ "base class name", ... }&gt;, &lt;Show( All( boolean ) | ( Members( boolean ) | Methods( boolean ) | Functions( boolean ) )+ )&gt;, { method* | member* | function* } )

**Description :** Crée une classe où toutes les méthodes et variables de classe créées ne sont définies que dans le nom de classe spécifié.

```jsl

Define Class(
	"Test",
	nObs = 20;
	addition = Method( {x, y},
		(x + y) * nObs
	);
	append = Method( {a, b},
		Char( a ) || " + " || Char( b )
	);
);
clref = New Object( Test() );

```

## Messages d'éléments

### Clone

**Syntaxe :** obj &lt;&lt; Clone

**Description :** Cloner le contenu d&apos;une référence de classe pour créer un nouvel objet

**JMP Version ajoutée :** 14

```jsl

Define Class(
	"Test",
	nObs = 20;
	addition = Method( {x, y},
		(x + y) * nObs
	);
	append = Method( {a, b},
		Char( a ) || " + " || Char( b )
	);
);
clref = New Object( Test() );
nclref = clref << Clone;
Show( clref << Equal( nclref ) );
Show( clref == nclref );

```

### Contains

**Syntaxe :** obj &lt;&lt; Contains( string )

**Description :** Renvoie 1 si la classe contient l’expression chaîne spécifiée, ou 0 dans le cas contraire.

**JMP Version ajoutée :** 14

```jsl

Define Class(
	"Test",
	nObs = 20;
	addition = Method( {x, y},
		(x + y) * nObs
	);
	append = Method( {a, b},
		Char( a ) || " + " || Char( b )
	);
);
clref = New Object( Test() );
result = clref << Contains( "nObs" );

```

### Delete Class

**Syntaxe :** clref &lt;&lt; Delete Class( &lt; Force( boolean ) &gt; )

**Description :** Supprime cette classe.

**JMP Version ajoutée :** 14

```jsl

Define Class(
	"Test",
	nObs = 20;
	addition = Method( {x, y},
		(x + y) * nObs
	);
	append = Method( {a, b},
		Char( a ) || " + " || Char( b )
	);
);
clref = New Object( Test() );
clref << Delete Class;
Show( clref );

```

### Equal

**Syntaxe :** obj &lt;&lt; Equal( classref )

**Description :** Comparer l&apos;argument de la référence de classe avec la référence de classe cible pour déterminer l&apos;égalité

**JMP Version ajoutée :** 14

```jsl

Define Class(
	"Test",
	nObs = 20;
	addition = Method( {x, y},
		(x + y) * nObs
	);
	append = Method( {a, b},
		Char( a ) || " + " || Char( b )
	);
);
clref = New Object( Test() );
nclref = New Object( Test() );
Show( clref << Equal( nclref ) );
nclref:nObs = 50;
Show( clref << Equal( nclref ) );

```

### First

**Syntaxe :** obj &lt;&lt; First

**Description :** Renvoie l’expression chaîne du premier élément de cette classe.

**JMP Version ajoutée :** 14

```jsl

Define Class(
	"Test",
	nObs = 20;
	addition = Method( {x, y},
		(x + y) * nObs
	);
	append = Method( {a, b},
		Char( a ) || " + " || Char( b )
	);
);
clref = New Object( Test() );
result = clref << First;

```

### Get Contents

**Syntaxe :** obj &lt;&lt; Get Contents

**Description :** Renvoie une liste d’éléments dans cette classe. Chaque élément consiste en une liste de deux items contenant une clé et sa valeur.

**JMP Version ajoutée :** 14

```jsl

Define Class(
	"Test",
	nObs = 20;
	addition = Method( {x, y},
		(x + y) * nObs
	);
	append = Method( {a, b},
		Char( a ) || " + " || Char( b )
	);
);
clref = New Object( Test() );
result = clref << Get Contents;

```

### Get Keys

**Syntaxe :** obj &lt;&lt; Get Keys

**Description :** Renvoie une liste de clés dans cette classe. Chaque clé est une représentation chaîne d&apos;un élément indépendant contenu dans la classe.

**JMP Version ajoutée :** 14

```jsl

Define Class(
	"Test",
	nObs = 20;
	addition = Method( {x, y},
		(x + y) * nObs
	);
	append = Method( {a, b},
		Char( a ) || " + " || Char( b )
	);
);
clref = New Object( Test() );
result = clref << Get Keys;

```

### Get Name

**Syntaxe :** obj &lt;&lt; Get Name

**Description :** Renvoie le nom de cette classe.

**JMP Version ajoutée :** 14

```jsl

Define Class(
	"Test",
	nObs = 20;
	addition = Method( {x, y},
		(x + y) * nObs
	);
	append = Method( {a, b},
		Char( a ) || " + " || Char( b )
	);
);
clref = New Object( Test() );
class name = clref << Get Name;

```

### Get Value

**Syntaxe :** obj &lt;&lt; Get Value( string )

**Description :** Renvoie la valeur de l’élément spécifié dans cette classe. La "chaîne" est la clé de l’élément.

**JMP Version ajoutée :** 14

```jsl

Define Class(
	"Test",
	nObs = 20;
	addition = Method( {x, y},
		(x + y) * nObs
	);
	append = Method( {a, b},
		Char( a ) || " + " || Char( b )
	);
);
clref = New Object( Test() );
result = clref << Get Value( "nObs" );

```

### Get Values

**Syntaxe :** obj &lt;&lt; Get Values

**Description :** Renvoie une liste de valeurs correspondantes à chaque élément contenu dans cette classe.

**JMP Version ajoutée :** 14

```jsl

Define Class(
	"Test",
	nObs = 20;
	addition = Method( {x, y},
		(x + y) * nObs
	);
	append = Method( {a, b},
		Char( a ) || " + " || Char( b )
	);
);
clref = New Object( Test() );
result = clref << Get Values;

```

### Insert

**Syntaxe :** obj &lt;&lt; Insert( string, value )

**Description :** Introduit une expression chaîne avec une valeur spécifiée dans cette classe.

**JMP Version ajoutée :** 14

```jsl

Define Class(
	"Test",
	nObs = 20;
	addition = Method( {x, y},
		(x + y) * nObs
	);
	append = Method( {a, b},
		Char( a ) || " + " || Char( b )
	);
);
clref = New Object( Test() );
clref << Insert( "X", 25 );
Show( clref );

```

### Lock Class

**Syntaxe :** obj &lt;&lt; Lock Class( &lt;string, | {string, ...}&gt;* )

**Description :** Verrouille tous les membres de la méthode ou tous les membres nommés spécifiés de cette classe, et empêche qu&apos;ils soient ajoutés, modifiés ou supprimés.

**JMP Version ajoutée :** 14

```jsl

Define Class(
	"Test",
	nObs = 20;
	addition = Method( {x, y},
		(x + y) * nObs
	);
	append = Method( {a, b},
		Char( a ) || " + " || Char( b )
	);
);
clref = New Object( Test() );
clref << Lock Class;
Try( clref:nObs = 40, "clref is locked." );

```

### N Items

**Syntaxe :** obj &lt;&lt; N Items

**Description :** Renvoie le nombre d’éléments contenus dans cette classe.

**JMP Version ajoutée :** 14

```jsl

Define Class(
	"Test",
	nObs = 20;
	addition = Method( {x, y},
		(x + y) * nObs
	);
	append = Method( {a, b},
		Char( a ) || " + " || Char( b )
	);
);
clref = New Object( Test() );
n = clref << N Items;

```

### Next

**Syntaxe :** obj &lt;&lt; Next( string )

**Description :** Renvoie l’expression chaîne de l&apos;élément qui suit la clé spécifiée dans cette classe.

**JMP Version ajoutée :** 14

```jsl

Define Class(
	"Test",
	nObs = 20;
	addition = Method( {x, y},
		(x + y) * nObs
	);
	append = Method( {a, b},
		Char( a ) || " + " || Char( b )
	);
);
clref = New Object( Test() );
result = clref << Next( "addition" );

```

### Remove

**Syntaxe :** obj &lt;&lt; Remove( &lt;string | {string, ...}&gt;* )

**Description :** Supprime l’expression chaîne spécifiée de la classe.

**JMP Version ajoutée :** 14

```jsl

Define Class(
	"Test",
	nObs = 20;
	addition = Method( {x, y},
		(x + y) * nObs
	);
	append = Method( {a, b},
		Char( a ) || " + " || Char( b )
	);
);
clref = New Object( Test() );
clref << Remove( "nObs" );
Show( clref );

```

### Show Contents

**Syntaxe :** obj &lt;&lt; Show Contents

**Description :** Affiche le contenu d’une classe dans le log JMP.

**JMP Version ajoutée :** 14

```jsl

Define Class(
	"Test",
	nObs = 20;
	addition = Method( {x, y},
		(x + y) * nObs
	);
	append = Method( {a, b},
		Char( a ) || " + " || Char( b )
	);
);
clref = New Object( Test() );
result = clref << Show Contents;

```

### Unlock Class

**Syntaxe :** obj &lt;&lt; Unlock Class( &lt;string | {string, ...}&gt;* )

**Description :** Déverrouille une classe verrouillée contenant les membres de la méthode qui ne pouvaient pas être ajoutés, modifiés ou supprimés.

**JMP Version ajoutée :** 14

```jsl

Define Class(
	"Test",
	nObs = 20;
	addition = Method( {x, y},
		(x + y) * nObs
	);
	append = Method( {a, b},
		Char( a ) || " + " || Char( b )
	);
);
clref = New Object( Test() );
clref << Lock Class( "nObs" );
Try( clref:nObs = 30, Show( "clref is locked." ) ); 
//Try again after unlocking. 
clref << Unlock Class( "nObs" );
Try( clref:nObs = 40, Show( "clref is locked." ) );

```

