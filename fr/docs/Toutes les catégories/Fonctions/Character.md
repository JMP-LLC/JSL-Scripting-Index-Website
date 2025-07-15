# Character



### Blob To Char

**Syntaxe :** s = Blob To Char( blob, &lt;encoding="utf-8"&gt; )

**Description :** Crée une chaîne de caractères à partir d&apos;un BLOB (grand objet binaire), en utilisant l&apos;encodage spécifié. Encodages pris en charge : utf-8, utf-16le, utf-16be, us-ascii, iso-8859-1, shift_jis, euc-jp, et ascii~hex.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Blob To Char( Hex To Blob( "436166C3A9" ) ) ||
Blob To Char( Hex To Blob( "436166C3A9" ), "ascii~hex" );

```

### Blob To Matrix

**Syntaxe :** m = Blob To Matrix( blob, type, bytesEach, endian, &lt;nCols=1&gt; )

**Description :** Construit une matrice en convertissant les octets dans le blob en nombres : type peut être "int", "uint" ou "float" ; bytesEach peut être 1, 2, 4 ou 8 ; endian indique si le premier octet est le plus significatif ("big") ou le moins significatif ("little"); "native" indique le format natif du processeur.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Blob To Matrix( Hex To Blob( "00010002FFFFFFFE" ), "int", 2, "big", 2 );

```

### Char

**Syntaxe :** s = Char( x, &lt;w&gt;, &lt;d&gt;, &lt; &lt;&lt;Use Locale( Boolean ) &gt;, &lt; &lt;&lt;Full Precision( Boolean ) &gt; )

**Description :** Renvoie une représentation de x sous forme de chaîne de caractères, en utilisant la largeur maximale w et le nombre de décimales d si l&apos;argument x est numérique. <<FullPrecision écrit des valeurs numériques en utilisant toutes les précisions disponibles.

**JMP Version ajoutée :** Avant la version 14

**Précision complète**

```jsl

Names Default To Here( 1 );
Show( Char( 88.54 ), Char( 88.54, <<Full Precision( 1 ) ) );

```

**Simple**

```jsl

Names Default To Here( 1 );
Char( Pi(), 10, 4 );

```

**Utiliser Local**

```jsl

Names Default To Here( 1 );
Char( 2.1, <<Use Locale( 1 ) );

```

### Char To Blob

**Syntaxe :** blob = Char To Blob( string, &lt;encoding="utf-8"&gt; )

**Description :** Crée un BLOB (grand objet binaire) à partir d&apos;une chaîne de caractères, en utilisant l&apos;encodage spécifié. Encodages pris en charge : utf-8, utf-16le, utf-16be, us-ascii, iso-8859-1, shift_jis, euc-jp, et ascii~hex.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Char To Blob( "Café", "utf-16be" );

```

### Char To Hex

**Syntaxe :** h = Char To Hex( value, &lt;"integer"&gt;|&lt;encoding="utf-8"&gt; )

**Description :** Renvoie le texte hexadécimal correspondant à la valeur et au code donnés. Il peut s&apos;agir d&apos;un nombre, d&apos;une chaîne ou d&apos;un blob. Si la valeur est un nombre, le code 64 bits IEEE 754 est utilisé, sauf si l&apos;argument facultatif "integer" est fourni. Les codes pris en charge sont notamment : utf-8, utf-16le, utf-16be, us-ascii, iso-8859-1, ascii~hex, shift_jis, et euc-jp.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Hex( 1024, "integer" ) || " " || Hex( "Café", "utf-16be" );

```

### Collapse Whitespace

**Syntaxe :** scw = Collapse Whitespace( s )

**Description :** Supprime les espaces situés au début et à la fin, ainsi que les espaces dupliqués à l&apos;intérieur

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Collapse Whitespace( "  The  dog    crossed    the  road  " );

```

### Concat

**Syntaxe :** s = s1 || s2 ...; m = m1 || m2 ...; s = Concat( s1, s2, ... )

**Description :** Concatène des chaînes en une chaîne plus longue ou des matrices en une matrice plus large.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
[1 2] || [3 4] || [5 6];

```

### Concat Items

**Syntaxe :** string = Concat Items( {list of strings}, &lt;separatorString&gt; )

**Description :** Joint une liste de chaînes en une chaîne longue, en séparant chacune de la suivante à l&apos;aide d&apos;un séparateur, ou d&apos;un espace si rien n&apos;est spécifié.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Concat Items( {"www", "jmp", "com"}, "." );

```

### Concat To

**Syntaxe :** string1 ||= string2; matrix1 ||= matrix2; Concat To( a, b )

**Description :** Concatène sur place. La fonction a ||= b est équivalente à a = a || b. Il s’agit d’un opérateur d’affectation.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
ex = "hello ";
ex ||= "world";

```

### Contains

**Syntaxe :** pos = Contains( x, item, &lt;start=1&gt; )

**Description :** Renvoie la position de item dans x, en commençant par la position start, si celle-ci est donnée. Si start est négative, la recherche s&apos;effectue en arrière à partir de length( x ) - start. L’argument x peut être une chaîne ou une liste.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Show( Contains( "redreed", "re", -1 ) );
Show( Contains( {"A", 2, "C", [1 5], "C"}, "C", 4 ) );

```

### Contains Item

**Syntaxe :** b = Contains Item( x, item | list | Pat Regex(), &lt;delimiter&gt; )

**Description :** Renvoie un booléen indiquant si le mot [élément], un mot de la liste de mot [liste], ou le modèle [modèle] correspond ou non à l&apos;un des mots du texte représenté par [x]. Les mots sont séparés par les caractères de la chaîne de séparateurs [séparateur] facultative. Le séparateur par défaut est la virgule ",". Les vides sont tronqués par la fin de chaque mot extrait de la chaîne de texte d&apos;entrée [x].

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

Names Default To Here( 1 );
Show( Contains Item( "A, 2, C, D, C", "C", ", " ) );

```

**Exemple 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Food Journal.jmp" );
dt << New Column( "Cheese",
	numeric,
	continuous,
	Formula( Contains Item( dt:Item Name, "Cheese", ", " ) )
);
dt << Distribution( Column( :Cheese ) );

```

**Exemple 3**

```jsl

Names Default To Here( 1 );
//find repeated character c in cdcef
Contains Item( "abcde,bcdef,cdcef", Pat Regex( "(.).*?\1" ), "," );

```

### Ends With

**Syntaxe :** b = Ends With( s, sub )

**Description :** Renvoie 1 si s finit par sub, et 0 dans le cas contraire. Les arguments s et sub peuvent être deux chaînes ou deux listes. Équivalent à Right( s, Length( sub )) == sub.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Ends With( "http://www.jmp.com", ".com" );

```

### Hex

**Syntaxe :** h = Hex( value, &lt;"integer"&gt;|&lt;encoding="utf-8"&gt;|&lt;Base(number)&gt;,&lt;Pad To(number)&gt; )

**Description :** Renvoie le texte hexadécimal (ou autre système de numération à base) correspondant à la valeur et au codage donnés, qui peut être un nombre, une chaîne ou un blob. Si la valeur est un nombre, le code 64 bits IEEE 754 sera utilisé à moins qu&apos;un des arguments facultatifs, integer ou Base, soit fourni. Si Base est spécifié, la fonction renvoie le texte correspondant au nombre spécifié dans ce système de numération à base au lieu du texte hexadécimal. La base doit être une valeur entière comprise entre 2 et 36 inclus. Les codes pris en charge sont notamment utf-8, utf-16le, utf-16be, us-ascii, iso-8859-1, ascii~hex, shift_jis et euc-jp.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Hex( 1024, "integer" ) || " " || Hex( "Café", "utf-16be" ) || " " ||
Hex( 11, Base( 2 ), Pad To( 8 ) );

```

### Hex To Blob

**Syntaxe :** blob = Hex To Blob( hex string )

**Description :** Crée un BLOB (grand objet binaire) à partir de la chaîne de codes hexadécimaux donnée, qui peut également inclure des espaces, des virgules, des retours chariot et des sauts de ligne.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Hex To Blob( "FF78CE" );

```

### Hex To Char

**Syntaxe :** s = Hex To Char( hextext, &lt;encoding="utf-8"&gt; )

**Description :** Renvoie le texte correspondant au texte hexadécimal, à l&apos;aide du code spécifié. Les codes pris en charge sont notamment : utf-8, utf-16le, utf-16be, us-ascii, iso-8859-1, ascii~hex, shift_jis, et euc-jp.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Hex To Char( "436166C3A9" ) ||
Hex To Char( "00430061006600E9", "utf-16be" );

```

### Hex To Number

**Syntaxe :** x = Hex To Number( hextext, &lt;Base(number)&gt; )

**Description :** Renvoie le nombre correspondant au texte hexadécimal (ou autre système de numération à base). Les 16 chiffres hexadécimaux sont convertis sous forme de nombres à virgules flottantes 64 bits IEEE 754 ; sinon l&apos;entrée est traitée comme un entier hexadécimal. Si Base est spécifié, le texte est traité comme une chaîne représentant le nombre dans cette base. La base doit être un entier compris entre 2 et 36 inclus.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Hex To Number( "11110000", Base( 2 ) );

```

### Insert

**Syntaxe :** z = Insert( x, y, &lt;i&gt; )

**Description :** Renvoie une copie de la liste x avec y inséré à la i-ième position ou ajouté à la fin si l’argument facultatif i n&apos;est pas spécifié.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
z = {11, 22, 33};
z = Insert( z, 99, 2 );

```

### Insert Into

**Syntaxe :** Insert Into( x, y, &lt;i&gt; )

**Description :** Modifie la liste, le tableau associatif ou la boîte d&apos;affichage x avec y inséré dans la série. Les listes et boîtes d&apos;affichage prennent en charge un i en option pour spécifier la position, ou les éléments seront ajoutés si la position n&apos;est pas spécifiée. Notez que l&apos;argument x doit être une variable.

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

Names Default To Here( 1 );
ex = {11, 22, 33};
Insert Into( ex, 99 );
ex;

```

**Exemple 2**

```jsl

Names Default To Here( 1 );
ex = ["a" => 10, "b" => 3, => 0];
Insert Into( ex, "c", 12 );
ex;

```

**Exemple 3**

```jsl

Names Default To Here( 1 );
New Window( "boxes",
	hlist = H List Box( Button Box( "a" ), Button Box( "b" ) )
);
Wait( 1 );
Insert Into( hlist, Button Box( "c" ) );

```

### Item

**Syntaxe :** w = Item( n|[first last], s, &lt;delim&gt;, &lt;Unmatched(result string)&gt;, &lt;Include Boundary Delimiters(0|1)&gt;)

**Description :** Renvoie le n-ième élément de l&apos;argument s, où les éléments sont des sous-chaînes (éventuellement vides) séparées par exactement un des caractères indiqués dans l&apos;argument delim. Si delim est absent, le caractère utilisé sera l&apos;espace. Si delim est la chaîne vide, tous les caractères sont traités comme un élément.

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

Names Default To Here( 1 );
Item( 5, "http://www.jmp.com", ":/." );

```

**Exemple 2**

```jsl

Names Default To Here( 1 );
Item( [2 -1], "This is a sentence" );

```

**Exemple 3**

```jsl

Names Default To Here( 1 );
Item(
	4,
	"Apple+Banana Tree,,Pear,,Peach,,Grape",
	Get Punctuation Characters()
);

```

**Exemple 4**

```jsl

Names Default To Here( 1 );
Item( 5, "a b c d", Unmatched( "None" ) );

```

**Exemple 5**

```jsl

Names Default To Here( 1 );
Item( 2, "abcd", "" );

```

**Exemple 6**

```jsl

Names Default To Here( 1 );
Item( 2, ",abcd", ",", Include Boundary Delimiters );

```

### Items

**Syntaxe :** wl = Items(&lt;[first last]&gt;, s, &lt;delim&gt;, &lt;Include Boundary Delimiters(0|1)&gt;)

**Description :** Renvoie une liste des sous-chaînes (éventuellement vides) séparées par exactement l&apos;un des caractères spécifiés dans l&apos;argument delim. Si delim est absent, le caractère utilisé sera l&apos;espace. Si delim est la chaîne vide, chaque caractère sera traité comme un élément distinct.

**JMP Version ajoutée :** 15

**Exemple 1**

```jsl

Names Default To Here( 1 );
Eval List(
	{Items( "http://www.jmp.com", ":/." ), Items( "hello", "" )}
);

```

**Exemple 2**

```jsl

Names Default To Here( 1 );
Items( ",Apple,Banana Tree,Peach", Get Punctuation Characters() );

```

**Exemple 3**

```jsl

Names Default To Here( 1 );
Items(
	",Apple,Banana Tree,Peach",
	Get Punctuation Characters(),
	Include Boundary Delimiters
);

```

**Exemple 4**

```jsl

Names Default To Here( 1 );
Items(
	[1 2],
	",Apple,Banana Tree,Peach",
	Get Punctuation Characters()
);

```

### Left

**Syntaxe :** sub = Left( s, n, &lt;filler&gt; )

**Description :** Renvoie une version tronquée ou complétée de la chaîne ou liste d&apos;origine s. Le résultat contient les n caractères de gauche ou éléments de liste, complétés par des filler à droite si la longueur de s est inférieure à n.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
exurl = "http://www.jmp.com";
Left( exurl, Contains( exurl, ":" ) - 1 );

```

### Length

**Syntaxe :** l = Length( x )

**Description :** Renvoie la longueur de la chaîne donnée (en caractères), de la liste (en éléments), du tableau associatif (en nombre de codes), du blob (en octets), de la matrice (en éléments) ou de l&apos;espace de noms/classe (en nombre de fonctions et de variables).

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

Names Default To Here( 1 );
Length( "Café" );

```

**Exemple 2**

```jsl

Names Default To Here( 1 );
Length( {1, 2 + 3, [11 22]} );

```

**Exemple 3**

```jsl

Names Default To Here( 1 );
Length( ["a" => 10, "b" => 3, => 0] );

```

**Exemple 4**

```jsl

Names Default To Here( 1 );
Length( Char To Blob( "Café" ) );

```

### Lowercase

**Syntaxe :** sl = Lowercase( s )

**Description :** Convertit les lettres majuscules en lettres minuscules dans la chaîne spécifiée. Les règles sur la casse varient localement.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Lowercase( "CAFÉ #23" );

```

### Matrix To Blob

**Syntaxe :** m = Matrix To Blob( matrix, type, bytesEach, endian )

**Description :** Fait un blob à partir d&apos;une matrice en convertissant les éléments de la matrice en nombres entiers, signés ou non signés, 1, 2 ou 4 bytes ; ou en nombres à virgule flottante, 4 ou 8 bytes.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Matrix To Blob( [3.14, 1.414], "float", 4, "big" );

```

### Munger

**Syntaxe :** r = Munger( s, startPos, findStringOrNChars, &lt;replaceString&gt; )

**Description :** Recherche dans l’argument s une sous-chaîne ou une position en fonction de la combinaison d’arguments.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Eval List(
	{Munger( "over there", 1, "t", "" ),
	Munger( "17 June 2000", 4, 4, "March" )}
);

```

### Num

**Syntaxe :** y = Num( s, &lt; &lt;&lt;Use Locale( use=1 ) &gt;, &lt; &lt;&lt;Restrict &gt; )

**Description :** Convertit s en nombre en utilisant le format intégré, y compris les formats de devise et de date. Renvoie une valeur manquante si la conversion échoue. L&apos;argument facultatif <<Restrict permet uniquement la conversion aux formats entier, décimal et scientifique.

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

Names Default To Here( 1 );
Show( Num( "3.1e6" ), Num( "1989-10-04" ), Num( "5%" ), Num( "£23" ) );

```

**Exemple 2**

```jsl

Names Default To Here( 1 );
Show(
	Num( "3.1e6", <<Restrict ),
	Num( "1989-10-04", <<Restrict ),
	Num( "5%", <<Restrict ),
	Num( "£23", <<Restrict )
);

```

### Regex

**Syntaxe :** result = Regex( source, pattern, &lt;format, &lt;IGNORECASE&gt;, &lt;GLOBALREPLACE&gt;&gt; )

**Description :** Recherche dans le texte source un appariement pour le pattern. Le format est défini par défaut à « \0 » (appariement complet), mais il peut être défini à « Fred » (pour un remplacement de la constante) ou à « \1 » (pour utiliser le texte apparié par la première parenthèse dans le pattern). Renvoie une valeur numérique manquante si aucun appariement n&apos;est trouvé. Par défaut, la casse doit être respectée.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Regex(
	"   Are you there Alice?, asked Jerry.",
	" (here|there) (\w+).+(said|asked) (\w+)\.",
	"  I am \1, \4, replied \2."
);

```

### Remove

**Syntaxe :** y = Remove( x, &lt;i&gt;, &lt;n=1&gt; ); y = Remove( x, {list} )

**Description :** Renvoie une copie de la liste x en supprimant n éléments en commençant par le i-ième élément ou en supprimant une liste d’éléments spécifiée par l’argument list.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Remove( {11, 22, 33, 44, 55}, 3, 2 );

```

### Remove From

**Syntaxe :** Remove From( x, &lt;i&gt;, &lt;n=1&gt; )

**Description :** Modifie la liste, le tableau associatif ou la boîte d&apos;affichage x en supprimant des éléments. Les tableaux associatifs spécifient l&apos;élément à supprimer avec une valeur clé i. Les listes et les boîtes d&apos;affichage commencent par supprimer l&apos;élément en position i. Une liste supprimera plusieurs éléments à la fois si l&apos;option n est spécifiée. Notez que l&apos;argument x doit être une variable.

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

Names Default To Here( 1 );
ex = {11, 22, 33, 44, 55};
Remove From( ex, 3, 2 );
ex;

```

**Exemple 2**

```jsl

Names Default To Here( 1 );
ex = ["a" => 10, "b" => 3, "c" => 12, => 0];
Remove From( ex, "c" );
ex;

```

**Exemple 3**

```jsl

Names Default To Here( 1 );
New Window( "boxes",
	hlist = H List Box(
		Button Box( "a" ),
		Button Box( "b" ),
		Button Box( "c" )
	)
);
Wait( 1 );
Remove From( hlist, 1 );

```

### Repeat

**Syntaxe :** s = Repeat( x, n, &lt;m=1&gt; )

**Description :** Renvoie le texte, la matrice ou la liste spécifié(e) par l&apos;argument x concaténé avec lui-même n fois. Si x est un nombre ou une matrice, alors n indique une répétition verticale et l&apos;argument facultatif m désigne une répétition horizontale.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Show( Repeat( {"A", "B"}, 3 ), Repeat( 2, 3 ), Repeat( 2, 1, 3 ) );

```

### Reverse

**Syntaxe :** y = Reverse( x )

**Description :** Renvoie une copie de la liste x avec les éléments dans l’ordre inverse.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Reverse( {11, 22, 33, 44, 55} );

```

### Reverse Into

**Syntaxe :** Reverse Into( x )

**Description :** Modifie la liste ou la boîte d&apos;affichage x avec les éléments dans l&apos;ordre inverse. Notez que l&apos;argument x doit être une variable.

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

Names Default To Here( 1 );
ex = {11, 22, 33, 44, 55};
Reverse Into( ex );
ex;

```

**Exemple 2**

```jsl

Names Default To Here( 1 );
New Window( "boxes",
	hlist = H List Box(
		Button Box( "a" ),
		Button Box( "b" ),
		Button Box( "c" )
	)
);
Wait( 1 );
Reverse Into( hlist );

```

### Right

**Syntaxe :** sub = Right( s, n, &lt;filler&gt; )

**Description :** Renvoie une version tronquée ou complétée de la chaîne ou liste d&apos;origine s. Le résultat contient les n caractères de droite ou éléments de liste, complétés par des filler à gauche si la longueur de s est inférieure à n.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Right( "http://www.jmp.com", 3 );

```

### Set Difference

**Syntaxe :** list = Set Difference( list1, list2 )

**Description :** Renvoie la liste d&apos;éléments qui apparaissent dans list1 et pas dans list2. Les éléments peuvent être répétés. Si un argument est une référence de colonne à réponses multiples, il est traité comme une liste de ses valeurs dans la ligne actuelle.

**JMP Version ajoutée :** 19

```jsl

Names Default To Here( 1 );
Show( Set Difference( {1, 3}, {3, 2} ) );
Show( Set Difference( {1, 3, 4, 3}, {3, 2, 3, 5, 3} ) );

```

### Set Intersection

**Syntaxe :** list = Set Intersect( list1, list2 )

**Description :** Renvoie la liste d&apos;éléments qui apparaissent dans les deux listes. Les éléments peuvent être répétés. Si un argument est une référence de colonne à réponses multiples, il est traité comme une liste de ses valeurs dans la ligne actuelle.

**JMP Version ajoutée :** 19

```jsl

Names Default To Here( 1 );
Show( Set Intersection( {1, 3}, {3, 2} ) );
Show( Set Intersection( {1, 3, 4, 3}, {3, 2, 3, 5, 3} ) );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
dt << get rows where( Set Intersection( :sports, {"Soccer"} ) != {} );

```

### Set Union

**Syntaxe :** list = Set Union( list1, list2 )

**Description :** Renvoie la liste d&apos;éléments qui apparaissent dans l&apos;une ou l&apos;autre des listes. Les éléments peuvent être répétés. Si un argument est une référence de colonne à réponses multiples, il est traité comme une liste de ses valeurs dans la ligne actuelle.

**JMP Version ajoutée :** 19

```jsl

Names Default To Here( 1 );
Show( Set Union( {1, 3}, {3, 2} ) );
Show( Set Union( {1, 3, 4, 3}, {3, 2, 3, 5, 3} ) );
all = {};
Open( "$SAMPLE_DATA/Big Class Families.jmp" );
For Each Row( all = Set Union( all, :sports ) );
all = Set Unique( all );
Show( all );

```

### Set Unique

**Syntaxe :** list = Set Unique( list )

**Description :** Renvoie la liste d&apos;éléments uniques qui apparaissent dans la liste d&apos;entrée. Si un argument est une référence de colonne à réponses multiples, il est traité comme une liste de ses valeurs dans la ligne actuelle.

**JMP Version ajoutée :** 19

```jsl

Names Default To Here( 1 );
Show( Set Unique( {1, 3, 2} ) );
Show( Set Unique( {1, 3, 4, 3, 3, 2, 3, 5, 3} ) );
Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Row() = 1;
Show( Set Unique( :sports ) );

```

### Shift

**Syntaxe :** y = Shift( x, &lt;n=1&gt; )

**Description :** Renvoie une copie de la liste x avec les premiers n éléments déplacés à la fin de la liste, ou, si n est négatif, les derniers n éléments déplacés au début.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Shift( {11, 22, 33, 44, 55}, 2 );

```

### Shift Into

**Syntaxe :** Shift Into( x, &lt;n=1&gt; )

**Description :** Modifie la liste ou la boîte d&apos;affichage x avec les premiers n éléments déplacés à la fin de la liste ou, si n est négatif, les derniers n éléments déplacés au début. Notez que l&apos;argument x doit être une variable.

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

Names Default To Here( 1 );
ex = {11, 22, 33, 44, 55};
Shift Into( ex, -2 );
ex;

```

**Exemple 2**

```jsl

Names Default To Here( 1 );
New Window( "boxes",
	hlist = H List Box(
		Button Box( "a" ),
		Button Box( "b" ),
		Button Box( "c" )
	)
);
Wait( 1 );
Shift Into( hlist, -2 );

```

### Starts With

**Syntaxe :** b = Starts With( s, sub )

**Description :** Renvoie 1 si s commence par sub, et 0 dans le cas contraire. Les arguments s et sub peuvent être deux chaînes ou deux listes. Équivalent à Left( s, Length( sub )) == sub.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Starts With( "http://www.jmp.com", "http:" );

```

### Substitute

**Syntaxe :** y = Substitute( x, patternExpr1, replacementExpr1, ... )y = Substitute( x, patternString1, replacementString1, ..., &lt; &lt;&lt;IGNORECASE &gt; )

**Description :** Renvoie une copie de la chaîne, de la liste ou de l&apos;expression x, en remplaçant les instances de chaque expression de configuration par l&apos;expression de remplacement correspondante. L&apos;argument facultatif <<IGNORECASE active la correspondance non sensible à la casse si x est une chaîne.

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

Names Default To Here( 1 );
Substitute( Expr( a + Sqrt( a ) ), Expr( a ), Expr( b ) );

```

**Exemple 2**

```jsl

Names Default To Here( 1 );
Substitute( "All things considered", "All", "Some" );

```

**Exemple 3**

```jsl

Names Default To Here( 1 );
lst = {"a", "b", "c"};
Substitute( lst, "a", "A" );

```

**Exemple 4**

```jsl

Names Default To Here( 1 );
Substitute( "All things considered",
	{"things", "All"}, {"ideas", "Some"}
);

```

**Exemple 5**

```jsl

Names Default To Here( 1 );
Substitute( "Apple,orange,banana-grape",
	Items( Get Punctuation Characters() || "-'", "" ), " "
);

```

**Exemple 6**

```jsl

Names Default To Here( 1 );
Substitute( "Apple,APPLE,apple", "apple", "orange", <<IGNORECASE );

```

### Substitute Into

**Syntaxe :** Substitute Into( x, patternExpr1, replacementExpr1, ... )Substitute Into( x, patternString1, replacementString1, ..., &lt; &lt;&lt;IGNORECASE &gt; )

**Description :** Modifie la chaîne, la liste ou l&apos;expression x, en remplaçant les instances de chaque expression de configuration par l&apos;expression de remplacement correspondante. Notez que l&apos;argument x doit être une variable. L&apos;argument facultatif <<IGNORECASE active la correspondance non sensible à la casse si x est une chaîne.

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

Names Default To Here( 1 );
ex = Expr( a + Sqrt( a ) );
Substitute Into( ex, Expr( a ), Expr( b ) );
Name Expr( ex );

```

**Exemple 2**

```jsl

Names Default To Here( 1 );
ex = "All things considered";
Substitute Into( ex, "All", "Some" );
Show( ex );

```

**Exemple 3**

```jsl

Names Default To Here( 1 );
lst = {"a", "b", "c"};
Substitute Into( lst, "a", "A" );
Show( lst );

```

**Exemple 4**

```jsl

Names Default To Here( 1 );
s = "Apple,APPLE,apple";
Substitute Into( s, "apple", "orange", <<IGNORECASE );
Show( s );

```

### Substr

**Syntaxe :** sub = Substr( s, start, &lt;count&gt; )

**Description :** Renvoie la partie de la chaîne s composée de count caractères en commençant par la position start. Un count négatif ou absent signifie le reste de la chaîne. Un start négatif signifie que les caractères de départ start sont considérés en partant de la fin. La fonction Substr() s’applique également aux listes.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Eval List(
	{Substr( "undergo", 4 ), Substr( {10, 11, 12, 13, 14}, 2, 3 )}
);

```

### Text Score

**Syntaxe :** score vector = Text Score( text column, text-to-number, &lt;weighting&gt;, &lt;{&lt;center&gt;, &lt;scale&gt;, scoring matrix}&gt;);

**Description :** Utilisé pour créer des formules de calcul du score dans l&apos;explorateur de texte. L&apos;argument text-to-number est un tableau associatif représentant les mots en minuscules par rapport aux nombres. L&apos;argument de pondération est "Binary", "Ternary", "Count", "LogCount", "LCA" ou un tableau des pondérations de la fréquence inverse de document pour TFLogIDF. La matrice de scores doit avoir le même nombre de colonnes que les mots du tableau associatif, ou une de plus si LCA. La sortie est un vecteur de scores. Si aucune matrice de scores n&apos;est spécifiée, un vecteur de scores de dénombrement est renvoyé. Si aucune pondération n&apos;est spécifiée, le dénombrement est utilisé. Cette fonction ne prend pas en charge l&apos;option Indexer par radicaux pour combiner.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
score = Text Score(
	"over the lazy dogs back",
	["lazy" => 1, "dogs" => 2],
	"Count",
	[1 0, 0 1]
);
Show( score );

```

### Titlecase

**Syntaxe :** st = Titlecase( s )

**Description :** Convertit en casse de titre

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Titlecase( "The dog crossed the road" );

```

### Trim

**Syntaxe :** sub = Trim( s, &lt;left|right|both&gt; )

**Description :** Renvoie une copie de la chaîne s en supprimant les espaces au début et à la fin. Le deuxième argument indique si la suppression concerne les espaces au début ou à la fin de la chaîne. Si vous ne spécifiez pas le deuxième argument, les espaces sont éliminés au début et à la fin.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Trim( " title   ", both );

```

### Trim Whitespace

**Syntaxe :** sub = Trim Whitespace( s, &lt;left|right|both&gt; )

**Description :** Renvoie une copie de la chaîne s en supprimant les espaces au début et à la fin. Le deuxième argument indique si la suppression concerne les espaces au début ou à la fin de la chaîne. Si vous ne spécifiez pas le deuxième argument, les espaces sont éliminés au début et à la fin.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Trim Whitespace( "  The  dog    crossed    the  road  " );

```

### Uppercase

**Syntaxe :** su = Uppercase( s )

**Description :** Convertit les lettres minuscules en lettres majuscules dans la chaîne spécifiée. Les règles sur la casse varient localement.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Uppercase( "Café #23" );

```

### Word

**Syntaxe :** w = Word( n|[first last], s, &lt;delim&gt;, &lt;Unmatched(result string)&gt;

**Description :** Renvoie le n-ième mot de la chaîne s, où les mots sont des sous-chaînes séparées par un ou plusieurs des caractères indiqués dans l&apos;argument delim. Si delim est absent, le caractère utilisé sera l&apos;espace. Si delim est la chaîne vide, tous les caractères sont traités comme un mot.

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

Names Default To Here( 1 );
Word( 3, "http://www.jmp.com", ":/." );

```

**Exemple 2**

```jsl

Names Default To Here( 1 );
Word( [2 -1], "This is a sentence" );

```

**Exemple 3**

```jsl

Names Default To Here( 1 );
Word(
	4,
	"Apple+Banana Tree,,Pear,,Peach,,Grape",
	Get Punctuation Characters()
);

```

**Exemple 4**

```jsl

Names Default To Here( 1 );
Word( 5, "a b c d", Unmatched( "None" ) );

```

**Exemple 5**

```jsl

Names Default To Here( 1 );
Word( 2, "abcd", "" );

```

### Words

**Syntaxe :** wl = Words( &lt;[first last]&gt;, s, &lt;delim&gt;)

**Description :** Renvoie une liste des sous-chaînes séparées par un quelconque des caractères spécifiés dans l&apos;argument delim. Si delim est absent, le caractère utilisé sera l&apos;espace. Si delim est la chaîne vide, tous les caractères sont traités comme un mot.

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

Names Default To Here( 1 );
Eval List(
	{Words( "http://www.jmp.com", ":/." ), Words( "hello", "" )}
);

```

**Exemple 2**

```jsl

Names Default To Here( 1 );
Words( "Apple,Banana Tree,Peach", Get Punctuation Characters() );

```

**Exemple 3**

```jsl

Names Default To Here( 1 );
Words( [1 2], "Apple,Banana Tree,Peach", Get Punctuation Characters() );

```

### XPath Query

**Syntaxe :** result = XPath Query(xml, xpath expression)

**Description :** Exécute une requête XPath sur un document XML.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
result = XPath Query(
	"<doc><colors><color>red</color><color>green</color><color>blue</color></colors></doc>",
	"//color/text()"
);

```

