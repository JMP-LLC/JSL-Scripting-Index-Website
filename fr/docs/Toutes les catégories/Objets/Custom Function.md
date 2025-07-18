# Custom Function



## Messages d'éléments

### Custom Format Category

**Syntaxe :** f &lt;&lt; Custom Format Category(1|0)

**Description :** Traiter la fonction personnalisée comme un format personnalisé. Spécifier 0 pour exclure la fonction du menu de format personnalisé.

**JMP Version ajoutée :** 14

```jsl

myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Custom Format Category( 1 );

```

### Description

**Syntaxe :** obj &lt;&lt; Description( text )

**Description :** Définir la description de la fonction personnalisée. Cette description sera affichée dans l&apos;Index des scripts et dans les info-bulles.

**JMP Version ajoutée :** 14

```jsl

myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Description( "Add two numbers together, but subtract 1" );

```

### Example

**Syntaxe :** f &lt;&lt; Example(example text | Expr(example JSL code), &lt;example name&gt;)

**Description :** Ajouter un exemple qui montre comment utiliser efficacement la fonction. L&apos;exemple doit être transmis sous la forme d&apos;une chaîne de texte ou d&apos;un code JSL ajusté avec la commande Expr. Vous pouvez envoyer le message à plusieurs reprises pour y ajouter d&apos;autres exemples.

**JMP Version ajoutée :** 14

#### Exemple 1

```jsl

myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Example( "Add(1, 2)" );

```

#### Exemple 2

```jsl

myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Example( "Add(1, 2)", "small add" );
myAdd << Example( "Add(1, 500)", "bigger add" );

```

### Formula Category

**Syntaxe :** f &lt;&lt; Formula Category(name|""|1|0)

**Description :** Inclure la fonction dans la catégorie spécifiée de l&apos;Éditeur de formules. Si spécifiée, cette fonction sera ajoutée à la fin de la catégorie correspondante. Si la catégorie n&apos;existe pas, une nouvelle catégorie sera créée. Spécifier 0 ou une chaîne vide pour ne pas afficher la fonction dans l&apos;arborescence de l&apos;éditeur de formules.

**JMP Version ajoutée :** 14

```jsl

myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Formula Category( "NumberStuff" );

```

### Get Custom Format Category

**Syntaxe :** f &lt;&lt; Get Custom Format Category

**Description :** Obtenir la catégorie du format personnalisé de la fonction personnalisée.

**JMP Version ajoutée :** 14

```jsl

myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Custom Format Category( 1 );
myAdd << Get Custom Format Category;

```

### Get Description

**Syntaxe :** f &lt;&lt; Get Description

**Description :** Obtenir la description de la fonction personnalisée.

**JMP Version ajoutée :** 14

```jsl

myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Description( "Add two numbers together, but subtract 1" );
myAdd << Get Description;

```

### Get Examples

**Syntaxe :** f &lt;&lt; Get Examples

**Description :** Récupérer la liste des exemples, sous forme de chaînes

**JMP Version ajoutée :** 14

```jsl

myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Example( "Add(1, 2)", "small add" );
myAdd << Example( "Add(1, 500)", "bigger add" );
myAdd << Get Examples;

```

### Get Formula Category

**Syntaxe :** f &lt;&lt; Get Formula Category

**Description :** Renvoyer à quelle catégorie de l&apos;éditeur de formules cette fonction devrait appartenir, s&apos;il y en a une.

**JMP Version ajoutée :** 14

```jsl

myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Formula Category( "NumberStuff" );
myAdd << Get Formula Category;

```

### Get Function

**Syntaxe :** f &lt;&lt; Get Function

**Description :** Récupérer la définition de la fonction.

**JMP Version ajoutée :** 14

```jsl

myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Get Function;

```

### Get Name

**Syntaxe :** f &lt;&lt; Get Name

**Description :** Récupérer le nom de la fonction.

**JMP Version ajoutée :** 14

```jsl

myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Get Name;

```

### Get Namespace

**Syntaxe :** f &lt;&lt; Get Namespace

**Description :** Récupérer l&apos;espace de noms de la fonction.

**JMP Version ajoutée :** 14

```jsl

myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Get Namespace;

```

### Get Parameters

**Syntaxe :** f &lt;&lt; Get Parameters

**Description :** Récupérer la liste des paramètres.

**JMP Version ajoutée :** 14

```jsl

myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Parameter( "Number", "number" );
myAdd << Parameter( "Number", "<number=1>" );
myAdd << Get Parameters;

```

### Get Prototype

**Syntaxe :** f &lt;&lt; Get Prototype

**Description :** Obtenir le prototype qui apparaît pour cette fonction dans l&apos;Index des scripts

**JMP Version ajoutée :** 14

```jsl

myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Prototype( "Add(number, <number=1>)" );
myAdd << Get Prototype;

```

### Get Result Type

**Syntaxe :** f &lt;&lt; Get Result Type

**Description :** Obtenir le type de résultat de la fonction.

**JMP Version ajoutée :** 14

```jsl

myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Result Type( "Number" );
myAdd << Get Result Type;

```

### Get Scripting Index Category

**Syntaxe :** f &lt;&lt; Get Scripting Index Category

**Description :** Obtenir la catégorie de la fonction personnalisée dans l&apos;Index des scripts.

**JMP Version ajoutée :** 14

```jsl

myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Scripting Index Category( "My Functions" );
myAdd << Get Scripting Index Category;

```

### Get Transform Category

**Syntaxe :** f &lt;&lt; Get Transform Category

**Description :** Obtenir la catégorie de transformation de la fonction personnalisée.

**JMP Version ajoutée :** 14

```jsl

myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Transform Category( 1 );
myAdd << Get Transform Category;

```

### Parameter

**Syntaxe :** f &lt;&lt; Parameter(typename | {typename1, typename2, ...}, hint text)

**Description :** Ajouter des informations concernant un paramètre de la fonction. Envoyer ce message une seule fois pour chaque paramètre pris en compte par la fonction. Il est possible de l&apos;utiliser pour la validation de code. Pour les types de paramètres, les choix valides sont Tout, Nom, Nombre, Chaîne, Liste, Matrice, État de ligne. Si plusieurs types de résultats sont possibles, en communiquer les noms dans une liste. Le texte de conseil est utilisé pour indiquer quelles données doivent être utilisées dans l&apos;argument correspondant de l&apos;éditeur de formules. Une chaîne vide devra être spécifiée si aucun texte de conseil n&apos;est souhaité.

**JMP Version ajoutée :** 14

```jsl

myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Parameter( "Number", "number" );
myAdd << Parameter( "Number", "<number=1>" );

```

### Prototype

**Syntaxe :** obj &lt;&lt; Prototype( text )

**Description :** Définir le prototype qui apparaît pour cette fonction dans l&apos;Index des scripts

**JMP Version ajoutée :** 14

```jsl

myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Prototype( "Add(number, <number=1>)" );

```

### Result Type

**Syntaxe :** f &lt;&lt; Result Type(typename | {typename1, typename2 ...})

**Description :** Définir le type de résultat de la fonction. Il est possible de l&apos;utiliser pour la validation de code. Les choix valides sont Tout, Nom, Nombre, Chaîne, Liste, Matrice, État de ligne. Si plusieurs types de résultats sont possibles, en communiquer les noms dans une liste.

**JMP Version ajoutée :** 14

#### Exemple 1

```jsl

myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Result Type( "Number" );

```

#### Exemple 2

```jsl

myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Result Type( {"Number", "String"} );

```

### Scripting Index Category

**Syntaxe :** f &lt;&lt; Scripting Index Category(name|""|1|0)

**Description :** Définit la catégorie de la fonction personnalisée dans l&apos;Index des scripts. Chaque fonction personnalisée sera listée dans la catégorie Toutes les fonctions en plus de la catégorie que vous aurez spécifiée. Spécifiez 0 ou "" pour que la fonction apparaisse uniquement dans la catégorie Toutes les fonctions.

**JMP Version ajoutée :** 14

```jsl

myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Scripting Index Category( "My Functions" );

```

### Transform Category

**Syntaxe :** f &lt;&lt; Transform Category(1|0)

**Description :** Traiter la fonction personnalisée comme une transformation de colonne. Spécifier 0 pour exclure la fonction du menu de transformation de colonne.

**JMP Version ajoutée :** 14

```jsl

myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Transform Category( 1 );

```

