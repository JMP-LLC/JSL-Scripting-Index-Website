# Row



## Fonctions

### As Table

**Syntaxe :** dt = As Table( matrix, <matrix2,...> < <<invisible/private>, < <<Column Names(name list) > )

**Description :** Convertit une matrice en une table de données. L’argument facultatif invisible peut servir à éviter l&apos;affichage de la table.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
As Table( [1 2 3, 4 5 6] );

```

### Col Stored Value

**Syntaxe :** y = Col Stored Value( <dt>, xCol, <row=Row()> )

**Description :** Renvoie la valeur d&apos;une colonne à laquelle aucune propriété de colonne n&apos;a été appliquée. Si l&apos;option de ligne n&apos;est pas spécifiée, la ligne actuelle est supposée.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Equity.jmp" );
:JOB << Set Property( "Missing Value Codes", {"Other"} );
y1 = Col Stored Value( :JOB, 10 );
y2 = Col Stored Value( :JOB, 11 );
y3 = Col Stored Value( :JOB, 14 );
y4 = Col Stored Value( :JOB, 15 );
Show( y1, y2, y3, y4 );

```

### Column

**Syntaxe :** y = Column( name|number );

y = Column( dataTable, name|number, <"formatted"> )

**Description :** Renvoie une référence à la colonne de la table de données spécifiée. Le mot clé "formatée" permet d&apos;accéder aux données formatées, comme l&apos;étiquette de valeur.

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
col4 = Column( 4 );
ht = Column( "height" );
col4[1] + ht[2];

```

**Exemple 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << run script( "Set Sex Value Labels" );
col = Column( dt, "sex", "formatted" );
Write( "\!n", col[5] );
Write( "\!nData value returned is the formatted value of row 5." );

```

### Column Name

**Syntaxe :** name = Column Name( n )

**Description :** Renvoie le noms de la n-ième colonne de la table de données active.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Column Name( 4 );

```

### Count

**Syntaxe :** y = Count( start, end, s, <n=1> )

**Description :** Renvoie la valeur i-ième dans la séquence des nombres de start à end en incrémentant par s et en répétant chaque nombre n fois, où i est déterminé par la valeur de la fonction Row(). Puisqu&apos;elle dépend de la fonction Row(), la fonction Count() est principalement utile dans les formules de colonne.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
New Table( "Count Example",
	Add Rows( 12 ),
	New Column( "Count1" ),
	New Column( "Count2" ),
	New Column( "Count3", Set Formula( Count( 0, 6, 4, 1 ) ) )
);
For Each Row(
	:Count1[Row()] = Count( 0, 6, 4, 1 );
	:Count2[Row()] = Count( 0, 6, 3, 2 );
);

```

### Current Data Table

**Syntaxe :** dt = Current Data Table( <Project(title|index|box|window)> ); Current Data Table( dt )

**Description :** Renvoie la table de données active ou rend la table de données spécifiée active, si une table de données est spécifiée.



Pour spécifier un projet, utilisez l&apos;argument facultatif Project() avec un titre, un index, une boîte d’affichage ou un objet fenêtre. Utilisez Project(0) pour spécifier que le script n&apos;est pas exécuté dans un projet.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Current Data Table() << Get Column Names;

```

### Data Table

**Syntaxe :** dt = Data Table( name|number )

**Description :** Renvoie une référence à la table de données spécifiée.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Open( "$SAMPLE_DATA/Cars.jmp" );
Data Table( 1 );

```

### Dif

**Syntaxe :** y = Dif( x, <n=1> )

**Description :** Renvoie x - Lag( x, n ), également connue sous le nom de "première différence". Puisqu&apos;elle dépend de Row(), la fonction Dif() est principalement utile dans les formules de colonne.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row() = 3;
Dif( :height, 2 );

```

### Dim

**Syntaxe :** y = Dim(); y = Dim( dt ); y = Dim( matrix )

**Description :** Renvoie un vecteur ligne avec les dimensions de la table de données active, une table de données spécifiée ou une matrice. Les dimensions correspondent au nombre de lignes et de colonnes, et sont listées dans cet ordre.

**JMP Version ajoutée :** 14

```jsl

Names Default To Here( 1 );
Dim( [11 22, 33 44, 55 66] );

```

### Get Data Table

**Syntaxe :** dt = Get Data Table( <Project(title|index|box|window)>, name|index )

**Description :** Renvoie une référence à la table de données spécifiée.



La recherche se limite aux tables du projet actif (sauf lorsque le script n&apos;est pas exécuté dans un projet).



Pour spécifier un projet, utilisez l&apos;argument facultatif Project() avec un titre, un index, une boîte d&apos;affichage ou un objet fenêtre. Utilisez Project(0) pour spécifier que le script n&apos;est pas exécuté dans un projet.

**JMP Version ajoutée :** 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Open( "$SAMPLE_DATA/Cars.jmp" );
Get Data Table( 1 );

```

### Get Data Table List

**Syntaxe :** tableList = Get Data Table List( <Project(title|index|box|window)> )

**Description :** Renvoie une liste de toutes les tables de données ouvertes.



Elle se limite aux tables du projet actif (sauf lorsque le script n&apos;est pas exécuté dans un projet).



Pour spécifier un projet, utilisez l&apos;argument facultatif Project() avec un titre, un index, une boîte d&apos;affichage ou un objet fenêtre. Utilisez Project(0) pour spécifier que le script n&apos;est pas exécuté dans un projet.

**JMP Version ajoutée :** 14

**Exemple 1**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Open( "$SAMPLE_DATA/Cars.jmp" );
Get Data Table List();

```

**Exemple 2**

```jsl

Names Default To Here( 1 );
project = Open( "$SAMPLE_PROJECTS/Sports.jmpprj" );
Get Data Table List( Project( project ) );

```

### Lag

**Syntaxe :** y = Lag( <x>, <n=1> )

**Description :** Renvoie la valeur de l’argument x avec la ligne en cours définie comme Row() - n. Puisqu&apos;elle dépend de Row(), la fonction Lag() est principalement utile dans les formules de colonne.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row() = 3;
Lag( :height, 2 );

```

### N Row

**Syntaxe :** y = N Row(); y = N Row( dt ); y = N Row( matrix )

**Description :** Renvoie le nombre de lignes dans la table de données en cours, une table de données spécifiée ou une matrice.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
N Row( [11 22, 33 44] );

```

### N Rows

**Syntaxe :** y = N Rows(); y = N Rows( dt ); y = N Rows( matrix )

**Description :** Renvoie le nombre de lignes dans la table de données en cours, une table de données spécifiée ou une matrice.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
N Rows( [11 22, 33 44] );

```

### N Table

**Syntaxe :** n = N Table()

**Description :** Renvoie le nombre de tables de données actuellement ouvertes.

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
N Table();

```

**Exemple 2**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Open( "$SAMPLE_DATA/Cars.jmp" );
Open( "$SAMPLE_DATA/Solubility.jmp" );
d = {};
For( i = 1, i <= N Table(), i++,
	d[i] = Data Table( i ) << GetName
);
d;

```

### New Column

**Syntaxe :** dc = New Column( name, <"Numeric"|"Character"|"RowState"|"Expression">, <"Continuous"|"Ordinal"|"Nominal"|"Multiple Response"|"Unstructured Text"|"Vector"|"None">, <Width( n )|Format(format name, width, precision)>, <Like(:other column)>, <actions> )

**Description :** Crée une nouvelle colonne dans la table de données active. Les arguments facultatifs actions sont tous les messages que les colonnes de données prennent en charge.

**JMP Version ajoutée :** Avant la version 14

**Semblable**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
New Column( "like name", Like( :name ) );

```

**Simple**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
New Column( "example", "Numeric", "Continuous", Width( 5 ), <<Set Each Value( 100 ) );

```

### New Column by Text Matching

**Syntaxe :** dc = New Column by Text Matching( Column(:name), Set Regex(), <Output Column Name("Name")>, <Use Result(0 | 1)> )

**Description :** Crée une nouvelle colonne en effectuant une recherche de motif d&apos;expression régulière sur une colonne existante.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Aircraft Incidents.jmp" );
New Column by Text Matching(
	Column( :Narrative Cause ),
	Set Regex( Library( "Words" ), Library( "Time" ), Library( "Units" ) ),
	Output Column Name( "Match Output" ),
	Use Result( 1 )
);

```

### New Table

**Syntaxe :** dt = New Table( name, <visibility("private"|"invisible"|"visible")>, <Enable Filter Views(bool)>, <actions> )

**Description :** Crée une nouvelle table de données. "Invisible" masque la table de données mais la répertorie dans la fenêtre d&apos;accueil JMP. "Private" masque totalement la table de données. "Visible" est l&apos;option par défaut et crée une table de données normale qui est visible et répertoriée dans la fenêtre d&apos;accueil JMP. Les arguments facultatifs actions sont les messages, quels qu&apos;ils soient, pris en charge par les tables de données.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
New Table( "Little Class",
	Add Rows( 3 ),
	New Column( "name",
		Character,
		Nominal,
		Set Values( {"KATIE", "LOUISE", "JANE"} )
	),
	New Column( "age", Nominal, Set Values( [12, 13, 13] ) ),
	New Column( "weight", Continuous, Set Values( [95, 123, 74] ) )
);

```

### Row

**Syntaxe :** y = Row(); Row() = y

**Description :** Renvoie la ligne actuelle dans une table de données. Peut être définie comme une valeur L. Réinitialisez la ligne actuelle en affectant la valeur 0.

**JMP Version ajoutée :** Avant la version 14

**Définir la ligne**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Row() = 3;
:height * :weight;

```

**Réinitialiser la ligne**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Add Rows( 5 );
Show( Row() );
Row() = 0;

```

### Sequence

**Syntaxe :** y = Sequence( start, end, <incr=1>, <n=1> )

**Description :** Renvoie le Row()-ième élément de la séquence des nombres de start à end incrémentée par incr. Chaque nombre de la séquence est répété n fois. Puisqu&apos;elle dépend de Row(), la fonction Sequence() est principalement utile dans les formules de colonne. Pour créer des séquences sous forme de matrices JSL, veuillez consulter Index().

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Row() = 3;
Sequence( 1, 9, 2 );

```

### Subscribe to Data Table List

**Syntaxe :** aSub = Subscribe to Data Table List( <subscriber name | "">, <OnOpen(fn) | OnClose(fn) | On Rename(fn)>)

**Description :** S’inscrire à la liste des tables de données pour recevoir la notification lors de l’ajout ou de la suppression d’une table de données.

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

Names Default To Here( 1 );
f1 = Function( {dtab},
	dtname = (dtab << getname());
	Print( "opening" );
	Print( dtname );
);
f2 = Function( {dtab},
	dtname = (dtab << getname());
	Print( "closing" );
	Print( dtname );
);
aSub = Subscribe to Data Table List( , OnOpen( f1 ) );
Subscribe to Data Table List( aSub, OnClose( f2 ) );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
Close( dt );

```

**Exemple 2**

```jsl

Names Default To Here( 1 );
f1 = Function( {dtab},
	dtname = (dtab << getname());
	Print( "opening" );
	Print( dtname );
);
f2 = Function( {dtab, b},
	dtname = (dtab << getname());
	Print( "renaming ", b, " to ", dtname );
);
aSub = Subscribe to Data Table List( , OnOpen( f1 ) );
Subscribe to Data Table List( aSub, OnRename( f2 ) );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
dt << setname( "xxx" );

```

### Subscript

**Syntaxe :** y = x[i]; y = m[row, col]; y = Subscript( x, i )

**Description :** Renvoie la i-ième valeur d&apos;un objet indicé, qui peut être une colonne de table de données, une matrice, une liste ou un élément d&apos;affichage de rapport.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
{11, 12, 13}[2];

```

### Suppress Formula Eval

**Syntaxe :** Suppress Formula Eval( <suppress=1> )

**Description :** Supprime les évaluations de formules dans toutes les tables de données si l&apos;argument n&apos;est pas nul.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Suppress Formula Eval( 1 );

```

### Unsubscribe to Data Table List

**Syntaxe :** aSub = Unsubscribe to Data Table List(<subscriber name>, <"OnOpen" | "OnClose" | "OnRename" | "ALL">)

**Description :** Supprimer une inscription à la liste des tables de données si ajoutée à l’aide de la commande "s’inscrire à la liste des tables de données".

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

Names Default To Here( 1 );
f1 = Function( {dtab},
	dtname = (dtab << getname());
	Print( "opening" );
	Print( dtname );
);
f2 = Function( {dtab},
	dtname = (dtab << getname());
	Print( "closing" );
	Print( dtname );
);
aSub = Subscribe to Data Table List( , OnOpen( f1 ) );
Subscribe to Data Table List( aSub, OnClose( f2 ) );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
Close( dt );
Unsubscribe to Data Table List( aSub, "on close" );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );

```

**Exemple 2**

```jsl

Names Default To Here( 1 );
f1 = Function( {dtab},
	dtname = (dtab << getname());
	Print( "opening" );
	Print( dtname );
);
f2 = Function( {dtab},
	dtname = (dtab << getname());
	Print( "closing" );
	Print( dtname );
);
aSub = Subscribe to Data Table List( , OnOpen( f1 ) );
Subscribe to Data Table List( aSub, OnClose( f2 ) );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
Close( dt );
Unsubscribe to Data Table List( aSub, "all" );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
Close( dt );

```

