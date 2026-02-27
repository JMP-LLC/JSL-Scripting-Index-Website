# List



### As List

**Syntaxe :** y = As List( matrix )

**Description :** Renvoie une représentation sous forme de liste d&apos;une matrice. Les matrices multicolonnes sont converties en une liste de listes, une par ligne, comme attendu par l&apos;opérateur de matrice.

**JMP Version ajoutée :** Avant la version 14

```jsl

As List( [11 22 33, 44 55 66] );

```

### Concat Items

**Syntaxe :** string = Concat Items( {list of strings}, &lt;separatorString&gt; )

**Description :** Joint une liste de chaînes en une chaîne longue, en séparant chacune de la suivante à l&apos;aide d&apos;un séparateur, ou d&apos;un espace si rien n&apos;est spécifié.

**JMP Version ajoutée :** Avant la version 14

```jsl

Concat Items( {"www", "jmp", "com"}, "." );

```

### Eval List

**Syntaxe :** y = Eval List( list )

**Description :** Renvoie une liste où chaque élément de la liste a été évalué.

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

Eval List( {1 + 2, 3 + 4} );

```

**Exemple 2**

```jsl

x = 5;y = 10;Eval List( {x, y} );

```

### Insert

**Syntaxe :** z = Insert( x, y, &lt;i&gt; )

**Description :** Renvoie une copie de la liste x avec y inséré à la i-ième position ou ajouté à la fin si l’argument facultatif i n&apos;est pas spécifié.

**JMP Version ajoutée :** Avant la version 14

```jsl

z = {11, 22, 33};z = Insert( z, 99, 2 );

```

### Insert Into

**Syntaxe :** Insert Into( x, y, &lt;i&gt; )

**Description :** Modifie la liste, le tableau associatif ou la boîte d&apos;affichage x avec y inséré dans la série. Les listes et boîtes d&apos;affichage prennent en charge un i en option pour spécifier la position, ou les éléments seront ajoutés si la position n&apos;est pas spécifiée. Notez que l&apos;argument x doit être une variable.

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

ex = {11, 22, 33};Insert Into( ex, 99 );ex;

```

**Exemple 2**

```jsl

ex = ["a" => 10, "b" => 3, => 0];Insert Into( ex, "c", 12 );ex;

```

**Exemple 3**

```jsl

New Window( "boxes", hlist = H List Box( Button Box( "a" ), Button Box( "b" ) ) );Wait( 1 );Insert Into( hlist, Button Box( "c" ) );

```

### Is List

**Syntaxe :** y = Is List( x )

**Description :** Renvoie 1 si l’argument x est une liste, 0 dans le cas contraire.

**JMP Version ajoutée :** Avant la version 14

```jsl

Is List( {1, 2, 3} );

```

### Items

**Syntaxe :** wl = Items(&lt;[first last]&gt;, s, &lt;delim&gt;, &lt;Include Boundary Delimiters(0|1)&gt;)

**Description :** Renvoie une liste des sous-chaînes (éventuellement vides) séparées par exactement l&apos;un des caractères spécifiés dans l&apos;argument delim. Si delim est absent, le caractère utilisé sera l&apos;espace. Si delim est la chaîne vide, chaque caractère sera traité comme un élément distinct.

**JMP Version ajoutée :** 15

**Exemple 1**

```jsl

Eval List( {Items( "http://www.jmp.com", ":/." ), Items( "hello", "" )} );

```

**Exemple 2**

```jsl

Items( ",Apple,Banana Tree,Peach", Get Punctuation Characters() );

```

**Exemple 3**

```jsl

Items(	",Apple,Banana Tree,Peach",	Get Punctuation Characters(),	Include Boundary Delimiters);

```

**Exemple 4**

```jsl

Items( [1 2], ",Apple,Banana Tree,Peach", Get Punctuation Characters() );

```

### Length

**Syntaxe :** l = Length( x )

**Description :** Renvoie la longueur de la chaîne donnée (en caractères), de la liste (en éléments), du tableau associatif (en nombre de codes), du blob (en octets), de la matrice (en éléments) ou de l&apos;espace de noms/classe (en nombre de fonctions et de variables).

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

Length( "Café" );

```

**Exemple 2**

```jsl

Length( {1, 2 + 3, [11 22]} );

```

**Exemple 3**

```jsl

Length( ["a" => 10, "b" => 3, => 0] );

```

**Exemple 4**

```jsl

Length( Char To Blob( "Café" ) );

```

### List

**Syntaxe :** y = {a, b, ...}; y = List( a, b, ... )

**Description :** Crée une liste d&apos;éléments sans les évaluer.

**JMP Version ajoutée :** Avant la version 14

```jsl

{1, 2 + 3, [11 22]};

```

### N Items

**Syntaxe :** y = N Items( x )

**Description :** Renvoie le nombre d&apos;éléments d&apos;une liste, le nombre d&apos;éléments d&apos;une matrice, le nombre de codes d&apos;un tableau associatif, le nombre de fonctions et de variables d&apos;un espace de noms, le nombre de méthodes et de variables d&apos;un objet de classe, ou le nombre d&apos;enfants d&apos;une boîte de dialogue.

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

N Items( {1, 2 + 3, [11 22]} );

```

**Exemple 2**

```jsl

N Items( ["a" => 10, "b" => 3, => 0] );

```

**Exemple 3**

```jsl

New Window( "boxes", hlist = H List Box( Button Box( "a" ), Button Box( "b" ) ) );N Items( hlist );

```

### Remove

**Syntaxe :** y = Remove( x, &lt;i&gt;, &lt;n=1&gt; ); y = Remove( x, {list} )

**Description :** Renvoie une copie de la liste x en supprimant n éléments en commençant par le i-ième élément ou en supprimant une liste d’éléments spécifiée par l’argument list.

**JMP Version ajoutée :** Avant la version 14

```jsl

Remove( {11, 22, 33, 44, 55}, 3, 2 );

```

### Remove From

**Syntaxe :** Remove From( x, &lt;i&gt;, &lt;n=1&gt; )

**Description :** Modifie la liste, le tableau associatif ou la boîte d&apos;affichage x en supprimant des éléments. Les tableaux associatifs spécifient l&apos;élément à supprimer avec une valeur clé i. Les listes et les boîtes d&apos;affichage commencent par supprimer l&apos;élément en position i. Une liste supprimera plusieurs éléments à la fois si l&apos;option n est spécifiée. Notez que l&apos;argument x doit être une variable.

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

ex = {11, 22, 33, 44, 55};Remove From( ex, 3, 2 );ex;

```

**Exemple 2**

```jsl

ex = ["a" => 10, "b" => 3, "c" => 12, => 0];Remove From( ex, "c" );ex;

```

**Exemple 3**

```jsl

New Window( "boxes",	hlist = H List Box( Button Box( "a" ), Button Box( "b" ), Button Box( "c" ) ));Wait( 1 );Remove From( hlist, 1 );

```

### Reverse

**Syntaxe :** y = Reverse( x )

**Description :** Renvoie une copie de la liste x avec les éléments dans l’ordre inverse.

**JMP Version ajoutée :** Avant la version 14

```jsl

Reverse( {11, 22, 33, 44, 55} );

```

### Reverse Into

**Syntaxe :** Reverse Into( x )

**Description :** Modifie la liste ou la boîte d&apos;affichage x avec les éléments dans l&apos;ordre inverse. Notez que l&apos;argument x doit être une variable.

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

ex = {11, 22, 33, 44, 55};Reverse Into( ex );ex;

```

**Exemple 2**

```jsl

New Window( "boxes",	hlist = H List Box( Button Box( "a" ), Button Box( "b" ), Button Box( "c" ) ));Wait( 1 );Reverse Into( hlist );

```

### Set Difference

**Syntaxe :** list = Set Difference( list1, list2 )

**Description :** Renvoie la liste d&apos;éléments qui apparaissent dans list1 et pas dans list2. Les éléments peuvent être répétés. Si un argument est une référence de colonne à réponses multiples, il est traité comme une liste de ses valeurs dans la ligne actuelle.

**JMP Version ajoutée :** 19

```jsl

Show( Set Difference( {1, 3}, {3, 2} ) );Show( Set Difference( {1, 3, 4, 3}, {3, 2, 3, 5, 3} ) );

```

### Set Intersection

**Syntaxe :** list = Set Intersect( list1, list2 )

**Description :** Renvoie la liste d&apos;éléments qui apparaissent dans les deux listes. Les éléments peuvent être répétés. Si un argument est une référence de colonne à réponses multiples, il est traité comme une liste de ses valeurs dans la ligne actuelle.

**JMP Version ajoutée :** 19

```jsl

Show( Set Intersection( {1, 3}, {3, 2} ) );Show( Set Intersection( {1, 3, 4, 3}, {3, 2, 3, 5, 3} ) );dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );dt << get rows where( Set Intersection( :sports, {"Soccer"} ) != {} );

```

### Set Union

**Syntaxe :** list = Set Union( list1, list2 )

**Description :** Renvoie la liste d&apos;éléments qui apparaissent dans l&apos;une ou l&apos;autre des listes. Les éléments peuvent être répétés. Si un argument est une référence de colonne à réponses multiples, il est traité comme une liste de ses valeurs dans la ligne actuelle.

**JMP Version ajoutée :** 19

```jsl

Show( Set Union( {1, 3}, {3, 2} ) );Show( Set Union( {1, 3, 4, 3}, {3, 2, 3, 5, 3} ) );all = {};Open( "$SAMPLE_DATA/Big Class Families.jmp" );For Each Row( all = Set Union( all, :sports ) );all = Set Unique( all );Show( all );

```

### Set Unique

**Syntaxe :** list = Set Unique( list )

**Description :** Renvoie la liste d&apos;éléments uniques qui apparaissent dans la liste d&apos;entrée. Si un argument est une référence de colonne à réponses multiples, il est traité comme une liste de ses valeurs dans la ligne actuelle.

**JMP Version ajoutée :** 19

```jsl

Show( Set Unique( {1, 3, 2} ) );Show( Set Unique( {1, 3, 4, 3, 3, 2, 3, 5, 3} ) );Open( "$SAMPLE_DATA/Big Class Families.jmp" );Row() = 1;Show( Set Unique( :sports ) );

```

### Shift

**Syntaxe :** y = Shift( x, &lt;n=1&gt; )

**Description :** Renvoie une copie de la liste x avec les premiers n éléments déplacés à la fin de la liste, ou, si n est négatif, les derniers n éléments déplacés au début.

**JMP Version ajoutée :** Avant la version 14

```jsl

Shift( {11, 22, 33, 44, 55}, 2 );

```

### Shift Into

**Syntaxe :** Shift Into( x, &lt;n=1&gt; )

**Description :** Modifie la liste ou la boîte d&apos;affichage x avec les premiers n éléments déplacés à la fin de la liste ou, si n est négatif, les derniers n éléments déplacés au début. Notez que l&apos;argument x doit être une variable.

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

ex = {11, 22, 33, 44, 55};Shift Into( ex, -2 );ex;

```

**Exemple 2**

```jsl

New Window( "boxes",	hlist = H List Box( Button Box( "a" ), Button Box( "b" ), Button Box( "c" ) ));Wait( 1 );Shift Into( hlist, -2 );

```

### Sort List

**Syntaxe :** y = Sort List( x )

**Description :** Renvoie une copie de la liste x avec les éléments dans l’ordre croissant.

**JMP Version ajoutée :** Avant la version 14

```jsl

Sort List( {111, 212, 133, 114, 55} );

```

### Sort List Into

**Syntaxe :** Sort List Into( x )

**Description :** Modifie la liste x avec les éléments dans l’ordre croissant. Notez que l’argument x doit être une variable.

**JMP Version ajoutée :** Avant la version 14

```jsl

ex = {111, 212, 133, 114, 55};Sort List Into( ex );ex;

```

### Substitute

**Syntaxe :** y = Substitute( x, patternExpr1, replacementExpr1, ... ) y = Substitute( x, patternString1, replacementString1, ..., &lt; &lt;&lt;IGNORECASE &gt; )

**Description :** Renvoie une copie de la chaîne, de la liste ou de l&apos;expression x, en remplaçant les instances de chaque expression de configuration par l&apos;expression de remplacement correspondante. L&apos;argument facultatif <<IGNORECASE active la correspondance non sensible à la casse si x est une chaîne.

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

Substitute( Expr( a + Sqrt( a ) ), Expr( a ), Expr( b ) );

```

**Exemple 2**

```jsl

Substitute( "All things considered", "All", "Some" );

```

**Exemple 3**

```jsl

lst = {"a", "b", "c"};Substitute( lst, "a", "A" );

```

**Exemple 4**

```jsl

Substitute( "All things considered", {"things", "All"}, {"ideas", "Some"} );

```

**Exemple 5**

```jsl

Substitute( "Apple,orange,banana-grape",	Items( Get Punctuation Characters() || "-'", "" ), " ");

```

**Exemple 6**

```jsl

Substitute( "Apple,APPLE,apple", "apple", "orange", <<IGNORECASE );

```

### Substitute Into

**Syntaxe :** Substitute Into( x, patternExpr1, replacementExpr1, ... ) Substitute Into( x, patternString1, replacementString1, ..., &lt; &lt;&lt;IGNORECASE &gt; )

**Description :** Modifie la chaîne, la liste ou l&apos;expression x, en remplaçant les instances de chaque expression de configuration par l&apos;expression de remplacement correspondante. Notez que l&apos;argument x doit être une variable. L&apos;argument facultatif <<IGNORECASE active la correspondance non sensible à la casse si x est une chaîne.

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

ex = Expr( a + Sqrt( a ) );Substitute Into( ex, Expr( a ), Expr( b ) );Name Expr( ex );

```

**Exemple 2**

```jsl

ex = "All things considered";Substitute Into( ex, "All", "Some" );Show( ex );

```

**Exemple 3**

```jsl

lst = {"a", "b", "c"};Substitute Into( lst, "a", "A" );Show( lst );

```

**Exemple 4**

```jsl

s = "Apple,APPLE,apple";Substitute Into( s, "apple", "orange", <<IGNORECASE );Show( s );

```

### Words

**Syntaxe :** wl = Words( &lt;[first last]&gt;, s, &lt;delim&gt;)

**Description :** Renvoie une liste des sous-chaînes séparées par un quelconque des caractères spécifiés dans l&apos;argument delim. Si delim est absent, le caractère utilisé sera l&apos;espace. Si delim est la chaîne vide, tous les caractères sont traités comme un mot.

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

Eval List( {Words( "http://www.jmp.com", ":/." ), Words( "hello", "" )} );

```

**Exemple 2**

```jsl

Words( "Apple,Banana Tree,Peach", Get Punctuation Characters() );

```

**Exemple 3**

```jsl

Words( [1 2], "Apple,Banana Tree,Peach", Get Punctuation Characters() );

```

