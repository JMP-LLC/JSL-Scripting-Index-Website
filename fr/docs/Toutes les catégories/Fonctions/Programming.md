# Programming



### Add Custom Functions

**Syntaxe :** Add Custom Functions({f1, f2, ...} | f)

**Description :** Définit une liste des fonctions personnalisées à utiliser dans les scripts et l&apos;éditeur de formules. La commande ajoute également la liste à l&apos;environnement.

**JMP Version ajoutée :** 14

```jsl

myAdd = New Custom Function( "custom", "Add", Function( {x, y}, x + y - 1 ) );
mySub = New Custom Function( "custom", "Sub", Function( {x, y}, x - y + 1 ) );
Add Custom Functions( {myAdd, mySub} );

```

### As Boolean

**Syntaxe :** b = As Boolean( x )

**Description :** Évalue une expression et renvoie une valeur booléenne.

**JMP Version ajoutée :** 14

```jsl

x = 45;
b = As Boolean( x > 2 );
Show( b );

```

### As Column

**Syntaxe :** y = :name;y = dataTable:name;y = As Column( name );y = As Column( dataTable, name )

**Description :** Accède à la colonne spécifiée dans la table de données indiquée ou en cours. Une erreur est lancée si aucune colonne ou table de données de ce type n&apos;est trouvée.

**JMP Version ajoutée :** Avant la version 14

```jsl

exdt = Open( "$SAMPLE_DATA/Big Class.jmp" );
exdt:height[1] + :height[2] + As Column( "height" )[3];

```

### As Constant

**Syntaxe :** y = As Constant( x )

**Description :** Évalue une expression pour créer une valeur constante qui restera inchangée une fois le calcul effectué

**JMP Version ajoutée :** Avant la version 14

#### Exemple 1

```jsl

New Table( "As Constant Demo Table 1",
	Add Rows( 10 ),
	New Column( "Non-Constant", Formula( Random Uniform() ) ),
	New Column( "Constant", Formula( As Constant( Random Uniform() ) ) )
);

```

#### Exemple 2

```jsl

New Table( "As Constant Demo Table 2",
	Add Rows( 1000 ),
	New Column( "What's on Your Desktop?",
		"character",
		Formula(
			As Constant( xFiles = Files In Directory( "$Desktop" ) );
			iR = Row();
			If( iR <= N Items( xFiles ),
				xFiles[iR],
				"---"
			);
		)
	)
);

```

#### Exemple 3

```jsl

For( i = 1, i <= 10, i++,
	x = 2;
	y = 100;
	z = As Constant( x + y );
	x *= i;
	y /= i;
	Show( i, x + y, z );
);

```

### As Global

**Syntaxe :** y = ::name; y = As Global( name )

**Description :** Accède à la variable globale spécifiée ou lance une erreur si aucune variable globale de ce type n&apos;existe.

**JMP Version ajoutée :** Avant la version 14

```jsl

::ex = 23;
Local( {ex = 12}, Eval List( {ex, ::ex, As Global( "ex" )} ) );

```

### As List

**Syntaxe :** y = As List( matrix )

**Description :** Renvoie une représentation sous forme de liste d&apos;une matrice. Les matrices multicolonnes sont converties en une liste de listes, une par ligne, comme attendu par l&apos;opérateur de matrice.

**JMP Version ajoutée :** Avant la version 14

```jsl

As List( [11 22 33, 44 55 66] );

```

### As Name

**Syntaxe :** y = As Name( s )

**Description :** Convertit une chaîne en un nom, ou une liste de chaînes en une liste de noms.

**JMP Version ajoutée :** Avant la version 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:(As Name( "height" ))[3];

```

### As Namespace

**Syntaxe :** asns = As Namespace( ns )

**Description :** Accède à l’espace de noms spécifié ou lance une erreur si cet espace de noms n&apos;existe pas.

**JMP Version ajoutée :** Avant la version 14

```jsl

ns = New Namespace(
	"complex"
);
As Namespace( ns );

```

### As Root

**Syntaxe :** y = :::name; y = As Root( name )

**Description :** Accède à la variable racine spécifiée ou lance une erreur si cette variable racine n&apos;existe pas.

**JMP Version ajoutée :** 15

```jsl

::: ex = 23;
Local( {ex = 12}, Eval List( {ex, ::: ex, As Global( "ex" )} ) );

```

### As Scoped

**Syntaxe :** y = namespace:variable; y = As Scoped( namespace, variable )

**Description :** Accède à la variable d’étendue spécifiée ou lance une erreur si cette variable d’étendue n&apos;existe pas.

**JMP Version ajoutée :** Avant la version 14

```jsl

Here:z = 23.5;
As Scoped( Here, z );

```

### Associative Array

**Syntaxe :** y = Associative Array( {{key1, value1}, ...} );y = Associative Array( keys, values )

**Description :** Crée un tableau associatif, également appelé dictionnaire ou table de hachage. Sous la forme à deux arguments, les codes et valeurs peuvent être une liste, une matrice ou une colonne de table de données.

**JMP Version ajoutée :** Avant la version 14

```jsl

ex = Associative Array( {"red", "blue"}, {1, 2} );
ex["green"] = 3;
ex << get contents;

```

### Choose Closest

**Syntaxe :** Choose Closest(source string, {canonical strings...}, &lt;Ignore Case(ignore=1|0)&gt;, &lt;Ignore Nonprintable(ignore=1|0)&gt;, &lt;Ignore Whitespace(ignore=1|0)&gt;, &lt;Max Edit Count(count)&gt;, &lt;Max Edit Ratio([0..1])&gt;, &lt;Min String Length(&lt;count=3&gt;)&gt;, &lt;Replace Unmatched(replace=0|1)&gt;, &lt;Unmatched Value(&lt;value=""&gt;)&gt;)

**Description :** Choisir la chaîne la plus proche dans les règles données, et la renvoyer. 

Par défaut, la casse de caractère est ignorée ; utiliser Ignorer la casse pour spécifier.

Par défaut les caractères non imprimables sont ignorés ; utiliser Ignorer les caractères non imprimables pour spécifier.

Par défaut, l&apos;espace blanc est ignoré ; utiliser Ignorer les espaces blancs pour spécifier.

Par défaut, les modifications de caractère ne sont pas autorisées pour trouver une correspondance.

	Utiliser Nombre maximum de modifications pour contrôler combien de modifications sont autorisées.

	Utiliser Taux maximum de modification pour contrôler le pourcentage de modifications (en nombre de caractères dans la chaîne d&apos;origine) autorisé.

	Ces deux paramètres sont appliqués si spécifiés.

Par défaut, les chaînes de moins de 3 caractères ne sont pas appariées ; utiliser Longueur minimum de chaîne pour spécifier une longueur différente.

Chaînes non appariées

	Par défaut, si aucune chaîne canonique n&apos;est trouvée avec les règles données, la chaîne source est renvoyée.

	Utiliser Remplacer non appariée pour spécifier si la chaîne source doit être renvoyée.

	Utiliser Non appariée pour spécifier la valeur à renvoyer.

**JMP Version ajoutée :** 15

#### Autoriser les modifications

```jsl

Choose Closest( "MARTA", {"MARTHA"}, Max Edit Count( 2 ) );

```

#### Choisir entre les chaînes, pas de modifications

```jsl

Choose Closest( "MARTHA_", {"Martha", "MARY"} );

```

#### Conserver la ponctuation

```jsl

Choose Closest( "MARTHA_", {"MARTHA"}, Ignore Punctuation( 0 ) );

```

#### Sans correspondance

```jsl

Choose Closest( "MARTHA", {"Martha"}, Ignore Case( 0 ), Unmatched() );

```

### Class Exists

**Syntaxe :** nsexists = Class Exists( class name )

**Description :** Renvoie 1 si la classe spécifiée par l&apos;argument name existe, 0 dans le cas contraire.

**JMP Version ajoutée :** Avant la version 14

```jsl

Define Class(
	"complex",
	real = 0;
	imag = 0;
	_init_ = Method( {a, b},
		real = a;
		imag = b;
	);
	Add = Method( {y},
		New Object( complex( real + y:real, imag + y:imag ) )
	);
	Sub = Method( {y},
		New Object( complex( real - y:real, imag - y:imag ) )
	);
	Mul = Method( {y},
		New Object(
			complex( real * y:real - imag * y:imag, imag * y:real + real * y:imag )
		)
	);
	Div = Method( {y},
		t = New Object( complex( 0, 0 ) );
		mag2 = y:Magsq();
		t:real = real * y:real + imag * y:imag;
		t:imag = imag * y:real + real * y:imag;
		t:real = t:real / mag2;
		t:imag = t:imag / mag2;
		t;
	);
	Magsq = Method( {},
		real * real + imag * imag
	);
	Mag = Method( {},
		Sqrt( real * real + imag * imag )
	);
	_to string_ = Method( {},
		Char( real ) || " + " || Char( imag ) || "i"
	);
	_show_ = _to string_;
);
cl = New Object( complex( 1, 2 ) );
clexists = Class Exists( cl );
Show( clexists );
cl << Delete;
Delete Classes( "complex" );

```

### Clear Globals

**Syntaxe :** Clear Globals( &lt; varname, ... &gt; )

**Description :** Efface les valeurs de tous les symboles globaux actuellement définis.

**JMP Version ajoutée :** Avant la version 14

```jsl

Clear Globals();

```

### Clear Log

**Syntaxe :** Clear Log()

**Description :** Vide le registre.

**JMP Version ajoutée :** Avant la version 14

```jsl

Clear Log();

```

### Clear Symbols

**Syntaxe :** Clear Symbols( &lt; varname, ... &gt; )

**Description :** Efface les valeurs de tous les symboles actuellement définis.

**JMP Version ajoutée :** Avant la version 14

```jsl

Clear Symbols();

```

### Close Log

**Syntaxe :** Close Log()

**Description :** Fermer la fenêtre log

**JMP Version ajoutée :** Avant la version 14

```jsl

Close Log();
Show( Is Log Open() );

```

### Define Class

**Syntaxe :** Define Class("class name", &lt;Base Class{ "base class name", ... }&gt;, &lt;Show( All( boolean ) | ( Members( boolean ) | Methods( boolean ) | Functions( boolean ) )+ )&gt;, { method* | member* | function* } )

**Description :** Définir une nouvelle classe

**JMP Version ajoutée :** 14

```jsl

Define Class(
	"complex",
	real = 0;
	imag = 0;
	_init_ = Method( {a, b},
		real = a;
		imag = b;
	);
	Add = Method( {y},
		New Object( complex( real + y:real, imag + y:imag ) )
	);
	Sub = Method( {y},
		New Object( complex( real - y:real, imag - y:imag ) )
	);
	Mul = Method( {y},
		New Object(
			complex( real * y:real - imag * y:imag, imag * y:real + real * y:imag )
		)
	);
	Div = Method( {y},
		t = New Object( complex( 0, 0 ) );
		mag2 = y:Magsq();
		t:real = real * y:real + imag * y:imag;
		t:imag = imag * y:real + real * y:imag;
		t:real = t:real / mag2;
		t:imag = t:imag / mag2;
		t;
	);
	Magsq = Method( {},
		real * real + imag * imag
	);
	Mag = Method( {},
		Sqrt( real * real + imag * imag )
	);
	_to string_ = Method( {},
		Char( real ) || " + " || Char( imag ) || "i"
	);
	_show_ = _to string_;
);
cl = New Object( complex( 1, 2 ) );
cl << Delete;
Delete Classes( complex );

```

### Delete Classes

**Syntaxe :** Delete Classes( &lt;Force( boolean )&gt;, &lt;class reference, ...&gt; )

**Description :** Supprime toutes les définitions de classe, ou une ou plusieurs définitions de classe spécifiques.

**JMP Version ajoutée :** Avant la version 14

```jsl

Define Class(
	"aa",
	{_init_ = Method( {} ), x = 1, m1 = Method( {a, b}, a * b )}
);
Define Class(
	"bb",
	{_init_ = Method( {} ), y = 1, m2 = Method( {a, b}, a / b )}
);
lcaa = New Object( aa() );
lcbb = New Object( bb() );
lcl = Get Classes();
Show( lcl );
Show Classes();
Clear Symbols( lcl );
lcaa << Delete;
lcbb << Delete;
Delete Classes( "aa", "bb" );
Show Classes();

```

### Delete Globals

**Syntaxe :** Delete Globals( &lt; varname, ... &gt; )

**Description :** Supprime tous les symboles globaux actuellement définis et leurs valeurs.

**JMP Version ajoutée :** Avant la version 14

```jsl

Delete Globals();

```

### Delete Namespaces

**Syntaxe :** Delete Namespaces( &lt;Force( boolean )&gt;, &lt;namespace reference, ...&gt; )

**Description :** Supprime tous les espaces de noms, ou un ou plusieurs espaces de noms spécifiques.

**JMP Version ajoutée :** Avant la version 14

```jsl


nsaa = New Namespace(
	"aa",
	{
		x = 1
	}
);
nsbb = New Namespace(
	"bb",
	{
		y = 1
	}
);
Show Namespaces();
Delete Namespaces( nsaa, nsbb );
Show Namespaces();

```

### Delete Symbols

**Syntaxe :** Delete Symbols( &lt; varname, ... &gt; )

**Description :** Supprime tous les symboles actuellement définis et leurs valeurs.

**JMP Version ajoutée :** Avant la version 14

```jsl

Delete Symbols();

```

### Eval

**Syntaxe :** y = Eval( x )

**Description :** Évalue l&apos;argument et retourne le résultat.

**JMP Version ajoutée :** Avant la version 14

```jsl

Eval( Expr( 1 + 2 ) );

```

### Eval Insert

**Syntaxe :** y = Eval Insert( string, &lt;startChar="^"&gt;, &lt;endChar=startChar&gt; )

**Description :** Recherche les sous-chaînes délimitées par la paire startChar/endChar et les remplace par l&apos;expression évaluée.

**JMP Version ajoutée :** Avant la version 14

```jsl

Eval Insert( "Today is ^As Date( Today())^" );

```

### Eval Insert Into

**Syntaxe :** Eval Insert Into( l_string, &lt;startChar="^"&gt;, &lt;endChar=startChar&gt; )

**Description :** Recherche les sous-chaînes délimitées par la paire startChar/endChar et les remplace par l&apos;expression évaluée, remplaçant l_string.

**JMP Version ajoutée :** Avant la version 14

```jsl

ex = "Today is ^As Date( Today())^";
Eval Insert Into( ex );
ex;

```

### Eval List

**Syntaxe :** y = Eval List( list )

**Description :** Renvoie une liste où chaque élément de la liste a été évalué.

**JMP Version ajoutée :** Avant la version 14

#### Exemple 1

```jsl

Eval List( {1 + 2, 3 + 4} );

```

#### Exemple 2

```jsl

x = 5;
y = 10;
Eval List( {x, y} );

```

### Exit

**Syntaxe :** Quit(&lt;"No Save"&gt;); Exit(&lt;"No Save"&gt;)

**Description :** Quitte JMP.

**JMP Version ajoutée :** Avant la version 14

```jsl

If(
	New Window( "Exit() example",
		<<Type( "Modal" ),
		Text Box( "Shut down JMP?" ),
		H List Box( Button Box( "OK" ), Button Box( "Cancel" ) )
	)["Button"] == 1, /*OK==1*/Exit(), /*cancel==-1*/"Good choice."
);

```

### First

**Syntaxe :** y = First( x1, x2, ... )

**Description :** Évalue chaque argument et retourne la valeur du premier argument.

**JMP Version ajoutée :** Avant la version 14

```jsl

First( 11, 22 );

```

### Function

**Syntaxe :** y = Function( {arg1=val1, ...}, &lt;{local1=val1, ...}&gt;, expr )

**Description :** Définit une fonction avec les arguments spécifiés, les valeurs par défaut et les variables locales facultatives. Les arguments contenant des valeurs par défaut sont en option lors de l&apos;appel de la fonction. Si Return() est utilisé dans le script de la fonction, l&apos;expression qu&apos;il contient est renvoyée.

**JMP Version ajoutée :** Avant la version 14

#### Exemple 1

```jsl

exsqr = Function( {x}, x * x );
exsqr( 5 );

```

#### Exemple 2

```jsl

// y is an optional argument
exmul = Function( {x, y = 3}, x * y );
a = exmul( 5 );
b = exmul( 5, 10 );
Show( a, b );

```

#### Exemple 3

```jsl

posorneg = Function( {x},
	{},
	If(
		x > 0, Return( "positive" ),
		x == 0, Return( "zero" ),
		Return( "negative" )
	)
);
posorneg( -5.5 );

```

### Get Class Names

**Syntaxe :** Get Class Names( &lt; &lt;class reference&gt;, ... &gt; )

**Description :** Renvoie une liste de noms pour toutes les classes actuellement définies.

**JMP Version ajoutée :** 14

```jsl

Define Class(
	"aa",
	{_init_ = Method( {} ), x = 1, m1 = Method( {a, b}, a * b )}
);
Define Class(
	"bb",
	{_init_ = Method( {} ), y = 1, m2 = Method( {a, b}, a / b )}
);
lcaa = New Object( aa() );
lcbb = New Object( bb() );
lcl = Get Class Names();
Show( lcl );
lcaa << Delete;
lcbb << Delete;
Delete Classes( "aa", "bb" );

```

### Get Classes

**Syntaxe :** Get Classes( &lt; &lt;class reference&gt;, ... &gt; )

**Description :** Renvoie une liste de références à toutes les classes actuellement définies

**JMP Version ajoutée :** Avant la version 14

```jsl

Define Class(
	"aa",
	{_init_ = Method( {} ), x = 1, m1 = Method( {a, b}, a * b )}
);
Define Class(
	"bb",
	{_init_ = Method( {} ), y = 1, m2 = Method( {a, b}, a / b )}
);
lcaa = New Object( aa() );
lcbb = New Object( bb() );
lcl = Get Classes();
Show( lcl );
Clear Symbols( lcl );
lcaa << Delete;
lcbb << Delete;
Delete Classes( "aa", "bb" );

```

### Get Custom Functions

**Syntaxe :** Get Custom Functions(&lt;{function 1 full name, function 2 full name, ...} | function full name&gt;)

**Description :** Obtenir une liste des fonctions personnalisées

**JMP Version ajoutée :** 14

#### Exemple 1

```jsl

Get Custom Functions();

```

#### Exemple 2

```jsl

Get Custom Functions( {"custom:Add", "custom:Sub"} );

```

### Get Environment Variable

**Syntaxe :** value = Get Environment Variable( string )

**Description :** Renvoie la valeur de la variable d’environnement spécifiée du système d’exploitation.



REMARQUE : sous le système d’exploitation Macintosh, le nom de variable est sensible à la casse.

**JMP Version ajoutée :** Avant la version 14

```jsl

Get Environment Variable( "PATH" );

```

### Get Locale Setting

**Syntaxe :** value = Get Locale Setting( settingName )

**Description :** Récupère un paramètre local comme le séparateur décimal

**JMP Version ajoutée :** 16

```jsl

Get Locale Setting( "Decimal Separator" );

```

### Get Log

**Syntaxe :** list = Get Log( &lt;N&gt; )

**Description :** Renvoie une liste de lignes du log. Si aucun argument n’est spécifié, renvoie toutes les lignes du log. Si l’argument numérique N est positif, renvoie les N premières lignes du log. Si N est négatif, renvoie les N dernières lignes du log. Si N est égal à zéro, aucune ligne n’est renvoyée.

**JMP Version ajoutée :** Avant la version 14

```jsl

all contents = Get Log();
headcontents = Get Log( 10 );
tailcontents = Get Log( -5 );

```

### Get Namespace Names

**Syntaxe :** Get Namespace Names( &lt; &lt;namespace reference&gt;, ... &gt; )

**Description :** Renvoie une liste de noms pour tous les espaces de noms actuellement définis.

**JMP Version ajoutée :** 14

```jsl

nsaa = New Namespace(
	"aa",
	{
		x = 1
	}
);
nsbb = New Namespace(
	"bb",
	{
		y = 1
	}
);
lns = Get Namespace Names();
Show( lns );
nsaa << Delete;
nsbb << Delete;

```

### Get Namespaces

**Syntaxe :** Get Namespaces( &lt; &lt;namespace reference&gt;, ... &gt; )

**Description :** Renvoie une liste de références à tous les espaces de nommage actuellement définis

**JMP Version ajoutée :** Avant la version 14

```jsl

nsaa = New Namespace(
	"aa",
	{
		x = 1
	}
);
nsbb = New Namespace(
	"bb",
	{
		y = 1
	}
);
lns = Get Namespaces();
Show( lns );
Clear Symbols( lns );
nsaa << Delete;
nsbb << Delete;

```

### Get Punctuation Characters

**Syntaxe :** Get Punctuation Characters(&lt;Exclude Chars(chars) | Include Chars(chars)&gt;)

**Description :** Renvoie une chaîne contenant les caractères de ponctuation typiquement utilisés pour séparer les mots. Il s&apos;agit notamment des caractères ,:;.?!\\/#@&~()[]<>"*`%$+=^|{} et de certains caractères de ponctuation Unicode courants.

**JMP Version ajoutée :** 15

#### Exemple 1

```jsl

Get Punctuation Characters();

```

#### Exemple 2

```jsl

Get Punctuation Characters( Include Chars( "_" ) );

```

#### Exemple 3

```jsl

Get Punctuation Characters( Exclude Chars( "$[]" ) );

```

#### Exemple 4

```jsl

Collapse Whitespace(
	Substitute( "This...string..has..dots",
		Items( Get Punctuation Characters(), "" ), " "
	)
);

```

### Get Session Script

**Syntaxe :** Get Session Script( win1, ... )

**Description :** Renvoie le script de session pour les fenêtres spécifiées. Le script de session est une expression JSL qui recréera les fenêtres données, en incluant les tables de données, les fenêtres de script, les journaux et les rapports. Les rapports créés via des scripts JSL ont une prise en charge limitée et tenteront uniquement de recréer la mise en page de l&apos;affichage.

**JMP Version ajoutée :** 17

```jsl


dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << RunScript( "Bivariate" );
Get Session Script( Report( biv ) );

```

### Get Whitespace Characters

**Syntaxe :** Get Whitespace Characters()

**Description :** Renvoie une chaîne contenant tous les caractères d&apos;espacement typiquement utilisés.

**JMP Version ajoutée :** Avant la version 14

```jsl

Get Whitespace Characters();

```

### Include

**Syntaxe :** y = Include( filepath, &lt; &lt;&lt;Parse Only&gt;, &lt; &lt;&lt;New Context&gt;, &lt; &lt;&lt;Names Default to Here&gt; )

**Description :** Exécute le JSL dans le fichier spécifié. Si Parse Only est spécifié, le script est analysé plutôt qu&apos;exécuté. Si New Context est spécifié, le JSL inclus est exécuté dans son espace de noms propre et unique. Si le script parent et le script inclus utilisent l&apos;espace de noms global, spécifier New Context et Names Default to Here pour éviter un conflit de noms.

**JMP Version ajoutée :** Avant la version 14

```jsl

Include( "$SAMPLE_SCRIPTS/chaosGame.jsl" );

```

### Include File List

**Syntaxe :** y = Include File List()

**Description :** Renvoie une liste de fichiers inclus au moment de l’exécution.

**JMP Version ajoutée :** Avant la version 14

```jsl

y = Include File List();

```

### Is Log Open

**Syntaxe :** Is Log Open()

**Description :** Renvoyer le résultat pour indiquer si la fenêtre log est ouverte

**JMP Version ajoutée :** Avant la version 14

#### Exemple 1

```jsl

If( Is Log Open(),
	Close Log()
);

```

#### Exemple 2

```jsl

If( !Is Log Open(),
	Open Log()
);

```

### Length

**Syntaxe :** l = Length( x )

**Description :** Renvoie la longueur de la chaîne donnée (en caractères), de la liste (en éléments), du tableau associatif (en nombre de codes), du blob (en octets), de la matrice (en éléments) ou de l&apos;espace de noms/classe (en nombre de fonctions et de variables).

**JMP Version ajoutée :** Avant la version 14

#### Exemple 1

```jsl

Length( "Café" );

```

#### Exemple 2

```jsl

Length( {1, 2 + 3, [11 22]} );

```

#### Exemple 3

```jsl

Length( ["a" => 10, "b" => 3, => 0] );

```

#### Exemple 4

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

### Local

**Syntaxe :** y = Local( {name=value, ...}, expression )

**Description :** Résout les noms en variables locales.

**JMP Version ajoutée :** Avant la version 14

```jsl

Local( {a = 1, b},
	b = 2;
	a + b;
);

```

### Local Here

**Syntaxe :** y = Local Here( expression )

**Description :** Exécute l’expression avec le mode local Names Default To Here(1)

**JMP Version ajoutée :** Avant la version 14

```jsl

y = Local Here(
	a = 1;
	b = 2;
	c = a + b;
	c;
);

```

### Lock Globals

**Syntaxe :** Lock Globals( name, ... )

**Description :** Verrouille les noms globaux spécifiés, empêchant leur modification ou effacement par la fonction Clear Globals.

**JMP Version ajoutée :** Avant la version 14

```jsl

exalpha = 0.05;
exdelta = 0.5;
Watch( exalpha, exdelta );
Wait( 3 );
Lock Globals( exalpha );
Wait( 3 );
Try( exalpha = 0.06, Show( "invalid - exalpha is locked" ) );
Try( exdelta = 0.6, Show( "invalid - exdelta is locked" ) );
Wait( 3 );
Unlock Globals( exalpha );
Wait( 3 );
Try( exalpha = 0.06, Show( "invalid - exalpha is locked" ) );

```

### Lock Symbols

**Syntaxe :** Lock Symbols( name, ... )

**Description :** Verrouille les noms globaux spécifiés, empêchant leur modification ou effacement par la fonction Clear Symbols.

**JMP Version ajoutée :** Avant la version 14

```jsl

exalpha = 0.05;
exdelta = 0.5;
Watch( exalpha, exdelta );
Wait( 3 );
Lock Symbols( exalpha );
Wait( 3 );
Try( exalpha = 0.06, Show( "invalid - exalpha is locked" ) );
Try( exdelta = 0.6, Show( "invalid - exdelta is locked" ) );
Wait( 3 );
Unlock Symbols( exalpha );
Wait( 3 );
Try( exalpha = 0.06, Show( "invalid - exalpha is locked" ) );

```

### Log Capture

**Syntaxe :** string = Log Capture( expr )

**Description :** Évalue l’argument expr, capture la sortie qui devrait apparaître dans la fenêtre log JMP et la renvoie dans une chaîne.

**JMP Version ajoutée :** Avant la version 14

```jsl

"captured:" || Log Capture(
	For( i = 1, i <= 3, i++,
		Write( Char( i ) );
		Write( " " );
	)
);

```

### Map Value

**Syntaxe :** Map Value(string | number, {key1, value1...|{key1...},{value1...}}, &lt;Unmatched(value)&gt;)

**Description :** Évaluer la valeur initiale et renvoyer le résultat correspondant ou un résultat par défaut.

**JMP Version ajoutée :** 15

#### Exemple 1

```jsl

Map Value( "celry", {"celry", "celery"} );

```

#### Exemple 2

```jsl

Map Value( "carrot", {"celry", "celery"}, Unmatched( "not found" ) );

```

#### Exemple 3

```jsl

Map Value( 10, {10, "celery", 11, "banana"} );

```

#### Exemple 4

```jsl

Map Value( 10, {{1, 2, 3}, {100, 200, 300}} );

```

### Method

**Syntaxe :** m = Method( { arg1 = val1, ... }, expression* )

**Description :** Créer une méthode dans une classe

**JMP Version ajoutée :** Avant la version 14

```jsl

Define Class(
	"complex",
	real = 0;
	imag = 0;
	_init_ = Method( {a, b},
		real = a;
		imag = b;
	);
	Add = Method( {y},
		New Object( complex( real + y:real, imag + y:imag ) )
	);
	Sub = Method( {y},
		New Object( complex( real - y:real, imag - y:imag ) )
	);
	Mul = Method( {y},
		New Object(
			complex( real * y:real - imag * y:imag, imag * y:real + real * y:imag )
		)
	);
	Div = Method( {y},
		t = New Object( complex( 0, 0 ) );
		mag2 = y:Magsq();
		t:real = real * y:real + imag * y:imag;
		t:imag = imag * y:real + real * y:imag;
		t:real = t:real / mag2;
		t:imag = t:imag / mag2;
		t;
	);
	Magsq = Method( {},
		real * real + imag * imag
	);
	Mag = Method( {},
		Sqrt( real * real + imag * imag )
	);
	_to string_ = Method( {},
		Char( real ) || " + " || Char( imag ) || "i"
	);
	_show_ = _to string_;
);
cl = New Object( complex( 1, 2 ) );
cl << Delete;
Delete Classes( "complex" );

```

### Mimic

**Syntaxe :** mimic obj = Mimic(Box|PlatformRef)

**Description :** Creates a GUI automation object that mimics a real user. ONLY AVAILABLE IN INTERNAL JMP BUILDS.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :age ) );
outline = Report( obj )[Outline Box( 1 )];
mc = Mimic( obj );
mc << Mark( outline );
mc << Mouse Click( Offset( TopLeft( outline ), [25 15] ) );

```

### N Items

**Syntaxe :** y = N Items( x )

**Description :** Renvoie le nombre d&apos;éléments d&apos;une liste, le nombre d&apos;éléments d&apos;une matrice, le nombre de codes d&apos;un tableau associatif, le nombre de fonctions et de variables d&apos;un espace de noms, le nombre de méthodes et de variables d&apos;un objet de classe, ou le nombre d&apos;enfants d&apos;une boîte de dialogue.

**JMP Version ajoutée :** Avant la version 14

#### Exemple 1

```jsl

N Items( {1, 2 + 3, [11 22]} );

```

#### Exemple 2

```jsl

N Items( ["a" => 10, "b" => 3, => 0] );

```

#### Exemple 3

```jsl

New Window( "boxes", hlist = H List Box( Button Box( "a" ), Button Box( "b" ) ) );
N Items( hlist );

```

### Names Default To Here

**Syntaxe :** Names Default To Here( boolean )

**Description :** Détermine si les noms non résolus sont mémorisés, en tant que global/local ( 0 ) ou sous Here: espace de noms ( 1 ).

**JMP Version ajoutée :** Avant la version 14

```jsl

/* Variable x will be stored in the Here: namespace by default */x = 1;
Show( x );

```

### Namespace

**Syntaxe :** ns = Namespace( namespace reference )

**Description :** Renvoie une référence à l’espace de noms spécifié par l’argument name.

**JMP Version ajoutée :** Avant la version 14

```jsl

New Namespace(
	"complex",
	{
		make = Function( {a, b},
			Index( a, b, b - a )
		),
		add = Function( {x, y}, x + y ),
		sub = Function( {x, y}, x - y ),
		mul = Function( {x, y},
			local:z = J( 1, 2 );
			local:z[1] = x[1] * y[1] - x[2] * y[2];
			local:z[2] = x[1] * y[2] + x[2] * y[1];
			local:z;
		),
		div = Function( {x, y},
			local:z = J( 1, 2 );
			local:d = (y[1] ^ 2 + y[2] ^ 2);
			local:z[1] = (x[1] * y[1] + x[2] * y[2]) / local:d;
			local:z[2] = (x[2] * y[1] - x[1] * y[2]) / local:d;
			local:z;
		),
		write = Function( {x},
			Write( x[1], " + ", x[2], "i\!n" )
		)
	}
);
ns = Namespace( "complex" );
Show( ns );
ns << Delete;

```

### Namespace Exists

**Syntaxe :** nsexists = Namespace Exists( namespace reference )

**Description :** Renvoie 1 si l’espace de noms spécifié par l’argument name existe, 0 dans le cas contraire.

**JMP Version ajoutée :** Avant la version 14

```jsl

ns = New Namespace(
	"complex",
	{
		make = Function( {a, b},
			Index( a, b, b - a )
		),
		add = Function( {x, y}, x + y ),
		sub = Function( {x, y}, x - y ),
		mul = Function( {x, y},
			local:z = J( 1, 2 );
			local:z[1] = x[1] * y[1] - x[2] * y[2];
			local:z[2] = x[1] * y[2] + x[2] * y[1];
			local:z;
		),
		div = Function( {x, y},
			local:z = J( 1, 2 );
			local:d = (y[1] ^ 2 + y[2] ^ 2);
			local:z[1] = (x[1] * y[1] + x[2] * y[2]) / local:d;
			local:z[2] = (x[2] * y[1] - x[1] * y[2]) / local:d;
			local:z;
		),
		write = Function( {x},
			Write( x[1], " + ", x[2], "i\!n" )
		)
	}
);
nsexists = Namespace Exists( ns );
Show( nsexists );
ns << Delete;

```

### New Custom Function

**Syntaxe :** f=New Custom Function(namespace, name, function definition)

**Description :** Créer un nouvel objet de fonction personnalisée. Une fonction personnalisée apparaîtra en couleur dans l&apos;éditeur de script et sera affichée dans l&apos;index des scripts. Les informations requises pour une fonction utilisateur personnalisée sont l&apos;espace de noms (pour éviter les collisions avec les fonctions générales), le nom et la définition de la fonction. Des informations d&apos;aide peuvent être ajoutées à l&apos;aide de messages. Utiliser la commande Ajouter des fonctions personnalisées pour publier la nouvelle fonction dans l&apos;environnement JMP.

**JMP Version ajoutée :** 14

#### Exemple 1

```jsl

myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );

```

#### Exemple 2

```jsl

/*Create a custom function that can be used as a format*/
Add Custom Functions(
	{New Custom Function(
		"custom",
		"User Defined Format Function",
		Function( {inches},
			Char( inches ) || " in"
		),
		<<Custom Format Category( "Custom" ), 

	)}
);

```

#### Exemple 3

```jsl

/*Create a custom function that can be used as a transform*/
Add Custom Functions(
	{New Custom Function(
		"custom",
		"User Defined Transform Function",
		Function( {inches},
			inches * 2.54
		),
		<<Transform Category( "Custom" ), 

	)}
);

```

### New Namespace

**Syntaxe :** ns = New Namespace( &lt;name&gt;, &lt;list of expressions&gt; )

**Description :** Crée un nouvel espace de noms avec un nom spécifié par l’argument name ou avec un nom anonyme si name n’est pas spécifié.

**JMP Version ajoutée :** Avant la version 14

```jsl

ns = New Namespace(
	"complex",
	{
		make = Function( {a, b},
			Index( a, b, b - a )
		),
		add = Function( {x, y}, x + y ),
		sub = Function( {x, y}, x - y ),
		mul = Function( {x, y},
			local:z = J( 1, 2 );
			local:z[1] = x[1] * y[1] - x[2] * y[2];
			local:z[2] = x[1] * y[2] + x[2] * y[1];
			local:z;
		),
		div = Function( {x, y},
			local:z = J( 1, 2 );
			local:d = (y[1] ^ 2 + y[2] ^ 2);
			local:z[1] = (x[1] * y[1] + x[2] * y[2]) / local:d;
			local:z[2] = (x[2] * y[1] - x[1] * y[2]) / local:d;
			local:z;
		),
		write = Function( {x},
			Write( x[1], " + ", x[2], "i\!n" )
		)
	}
);
Show( ns );
ns << Delete;

```

### New Object

**Syntaxe :** New Object( "class name" | class name | class reference( constructor arguments* ) )

**Description :** Crée un objet instance de classe.

**JMP Version ajoutée :** 14

```jsl

Define Class(
	"complex",
	real = 0;
	imag = 0;
	_init_ = Method( {a, b},
		real = a;
		imag = b;
	);
	Add = Method( {y},
		New Object( complex( real + y:real, imag + y:imag ) )
	);
	Sub = Method( {y},
		New Object( complex( real - y:real, imag - y:imag ) )
	);
	Mul = Method( {y},
		New Object(
			complex( real * y:real - imag * y:imag, imag * y:real + real * y:imag )
		)
	);
	Div = Method( {y},
		t = New Object( complex( 0, 0 ) );
		mag2 = y:Magsq();
		t:real = real * y:real + imag * y:imag;
		t:imag = imag * y:real + real * y:imag;
		t:real = t:real / mag2;
		t:imag = t:imag / mag2;
		t;
	);
	Magsq = Method( {},
		real * real + imag * imag
	);
	Mag = Method( {},
		Sqrt( real * real + imag * imag )
	);
	_to string_ = Method( {},
		Char( real ) || " + " || Char( imag ) || "i"
	);
	_show_ = _to string_;
);
cl = New Object( complex( 1, 2 ) );
cl << Delete;
Delete Classes( "complex" );

```

### Open Log

**Syntaxe :** Open Log( &lt;bring window to top&gt; )

**Description :** Ouvrir la fenêtre log

**JMP Version ajoutée :** Avant la version 14

#### Exemple 1

```jsl

Open Log();
Show( Is Log Open() );

```

#### Exemple 2

```jsl

/* Bring Log Windows to the Top */
Open Log( 1 );
Show( Is Log Open() );

```

### Parameter

**Syntaxe :** y = Parameter( {name=value, ...}, model expression )

**Description :** Définit les paramètres de la formule sur les modèles pour la plate-forme non linéaire.

**JMP Version ajoutée :** Avant la version 14

```jsl

Parameter( {a = 1}, a + 1 );

```

### Parse

**Syntaxe :** y = Parse( s )

**Description :** Analyse la chaîne et retourne l&apos;expression JSL résultante.

**JMP Version ajoutée :** Avant la version 14

```jsl

Parse( "x+y" );

```

### Print

**Syntaxe :** Print( x, ... )

**Description :** Affiche les valeurs des arguments dans le registre, une par ligne.

**JMP Version ajoutée :** Avant la version 14

```jsl

Print( 355 / 113, Pi() );

```

### Quit

**Syntaxe :** Quit(&lt;"No Save"&gt;); Exit(&lt;"No Save"&gt;)

**Description :** Quitte JMP.

**JMP Version ajoutée :** Avant la version 14

```jsl

If(
	New Window( "Quit() example",
		<<Type( "Modal" ),
		Text Box( "Shut down JMP?" ),
		H List Box( Button Box( "OK" ), Button Box( "Cancel" ) )
	)["Button"] == 1, /*OK==1*/Quit(), /*cancel==-1*/"Good choice."
);

```

### Recode

**Syntaxe :** recode(string|number|list, {&lt;transform&gt;, ...}, &lt;Multiple Response (Separator(sepChar))&gt;, &lt;By Word(Delimiters(&lt;chars&gt;)&gt;)

**Description :** Appliquez les transformations listées aux valeurs d&apos;entrée et renvoyez les résultats. Les options Réponses multiples et Par mot divisent les données de caractères fournies en plus petites valeurs d&apos;entrée. Une fois que les valeurs d&apos;entrée sont déterminées, les transformations sont appliquées à ces valeurs séparément.

Les variables JSL spéciales sont remplies à l&apos;exécution de la commande :

	_rcNow est la valeur actuelle de l&apos;entrée après les transformations précédentes.

	_rcOrig est la valeur d&apos;origine de l&apos;entrée.

**JMP Version ajoutée :** 15

#### Exemple 1

```jsl

Recode(
	"27513-0000",
	{Regex( _rcNow, "(\d\d\d\d\d)-\d+", "\1", GLOBALREPLACE ), Num( _rcNow )}
);

```

#### Exemple 2

```jsl

Recode(
	"A B C",
	{Map Value( _rcNow, {"A", "Apple", "B", "Banana"}, Unmatched( "Unknown fruit" ) )
	},
	By Word
);

```

### Recurse

**Syntaxe :** y = Recurse( x1, ... )

**Description :** Appelle la fonction de rétention.

**JMP Version ajoutée :** Avant la version 14

```jsl

ex rev = Function( {s},
	If( Length( s ) <= 1,
		s,
		Recurse( Substr( s, 2 ) ) || Left( s, 1 )
	)
);
ex rev( "abcd" );

```

### Remove Custom Functions

**Syntaxe :** Remove Custom Functions({function 1 full name, function 2 full name, ...} | function full name)

**Description :** Supprime une liste de fonctions personnalisées de l&apos;environnement.

**JMP Version ajoutée :** 14

```jsl

Remove Custom Functions( {"custom:Add", "custom:Sub"} );

```

### Save Log

**Syntaxe :** f = Save Log( &lt;path&gt; )

**Description :** Écrit les contenus du registre dans l&apos;emplacement de fichier spécifié. Si l&apos;écriture est réalisée avec succès, cette fonction retourne le nom du fichier créé.

**JMP Version ajoutée :** Avant la version 14

```jsl

Save Log( "$TEMP/log.txt" );
exlogText = Load Text File( "$TEMP/log.txt" );
Substr( exlogText, 1, 30 );

```

### Send

**Syntaxe :** r = obj &lt;&lt; msg( args ); r = obj &lt;&lt; msg; r = Send( obj, msg )

**Description :** Envoie un message (sous la forme d&apos;une expression) à un objet.

**JMP Version ajoutée :** Avant la version 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Bivariate( Y( :weight ), X( :height ) ) << Fit Line;

```

### Set Environment Variable

**Syntaxe :** value = Set Environment Variable( string, &lt; string&gt; )

**Description :** Définit la valeur de la variable d&apos;environnement spécifiée dans le système d&apos;exploitation. Si le deuxième argument est manquant ou est une chaîne vide, alors la variable d&apos;environnement est supprimée.



REMARQUE : sous le système d&apos;exploitation Macintosh, le nom de variable est sensible à la casse.

**JMP Version ajoutée :** Avant la version 14

```jsl

Set Environment Variable( "PATH", "some path to a directory" );

```

### Show

**Syntaxe :** Show( x, ... )

**Description :** Affiche le nom et la valeur des arguments dans le registre, un(e) par ligne.

**JMP Version ajoutée :** Avant la version 14

```jsl

Show( 355 / 113, Pi() );

```

### Show Classes

**Syntaxe :** Show Classes( &lt; &lt;class name | class reference&gt;, ... &gt; )

**Description :** Afficher le contenu de toutes les classes définies par l&apos;utilisateur.

**JMP Version ajoutée :** Avant la version 14

```jsl

Define Class(
	"complex",
	real = 0;
	imag = 0;
	_init_ = Method( {a, b},
		real = a;
		imag = b;
	);
	Add = Method( {y},
		New Object( complex( real + y:real, imag + y:imag ) )
	);
	Sub = Method( {y},
		New Object( complex( real - y:real, imag - y:imag ) )
	);
	Mul = Method( {y},
		New Object(
			complex( real * y:real - imag * y:imag, imag * y:real + real * y:imag )
		)
	);
	Div = Method( {y},
		t = New Object( complex( 0, 0 ) );
		mag2 = y:Magsq();
		t:real = real * y:real + imag * y:imag;
		t:imag = imag * y:real + real * y:imag;
		t:real = t:real / mag2;
		t:imag = t:imag / mag2;
		t;
	);
	Magsq = Method( {},
		real * real + imag * imag
	);
	Mag = Method( {},
		Sqrt( real * real + imag * imag )
	);
	_to string_ = Method( {},
		Char( real ) || " + " || Char( imag ) || "i"
	);
	_show_ = _to string_;
);
Show Classes();

```

### Show Globals

**Syntaxe :** Show Globals()

**Description :** Dresse la liste de tous les symboles globaux actuellement définis et de leurs valeurs.

**JMP Version ajoutée :** Avant la version 14

```jsl

Show Globals();

```

### Show Namespaces

**Syntaxe :** Show Namespaces( &lt; &lt;namespace reference&gt;, ... &gt; )

**Description :** Affiche le contenu de tous les espaces de noms utilisateurs, nommés et anonymes.

**JMP Version ajoutée :** Avant la version 14

```jsl

New Namespace(
	"complex",
	{
		make = Function( {a, b},
			Index( a, b, b - a )
		),
		add = Function( {x, y}, x + y ),
		sub = Function( {x, y}, x - y ),
		mul = Function( {x, y},
			local:z = J( 1, 2 );
			local:z[1] = x[1] * y[1] - x[2] * y[2];
			local:z[2] = x[1] * y[2] + x[2] * y[1];
			local:z;
		),
		div = Function( {x, y},
			local:z = J( 1, 2 );
			local:d = (y[1] ^ 2 + y[2] ^ 2);
			local:z[1] = (x[1] * y[1] + x[2] * y[2]) / local:d;
			local:z[2] = (x[2] * y[1] - x[1] * y[2]) / local:d;
			local:z;
		),
		write = Function( {x},
			Write( x[1], " + ", x[2], "i\!n" )
		)
	}
);
Show Namespaces( "complex" );
Delete Namespaces( "complex" );

```

### Show Symbols

**Syntaxe :** Show Symbols()

**Description :** Dresse la liste de tous les symboles actuellement définis et de leurs valeurs.

**JMP Version ajoutée :** Avant la version 14

```jsl

Show Symbols();

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

ex = {111, 212, 133, 114, 55};
Sort List Into( ex );
ex;

```

### Throw

**Syntaxe :** Throw(&lt;message&gt;, &lt;Boolean&gt;)

**Description :** Dévie l&apos;exécution vers le Try() englobant. Sinon, l&apos;exécution du script est arrêtée. Si message commence par un point d&apos;exclamation, l&apos;erreur est fatale et ne peut pas être interceptée par Try(). Le deuxième argument est un booléen facultatif pour inclure un retraçage.

**JMP Version ajoutée :** Avant la version 14

#### Fatal Throw

```jsl


Try( Throw( "!This is a fatal error" ), Print( "CATCH message not reached" ) );
Print( "AFTER TRY message not reached" );

```

#### Retraçage

```jsl

Throw( "A line number is included in this error", 1 );

```

#### Try-Catch

```jsl

Try( If( Random Uniform() < 0.5, 1, Throw() ), "thrown" );

```

### Try

**Syntaxe :** y = Try( expr, &lt;catchExpr&gt; )

**Description :** Évalue et renvoie l&apos;argument expr, à moins que l&apos;évaluation ne provoque un Throw() ou une exception interne. Dans ce cas l&apos;évaluation de catchExpr est renvoyée. Si vous utilisez exception_msg en tant que catchExpr, une liste est renvoyée indiquant des informations supplémentaires sur l&apos;erreur.

**JMP Version ajoutée :** Avant la version 14

#### Exemple 1

```jsl

Try( Sqrt( "s" ), "invalid" );

```

#### Exemple 2

```jsl

Try( Sqrt( "s" ), exception_msg );

```

### Type

**Syntaxe :** y = Type( x )

**Description :** Renvoie une chaîne indiquant le type de valeur de l’argument x.

**JMP Version ajoutée :** Avant la version 14

```jsl

Type( [1 2 3] );

```

### Unlock Globals

**Syntaxe :** Unlock Globals( name, ... )

**Description :** Déverrouille les noms globaux spécifiés, permettant leur modification ou effacement par la fonction  Clear Globals.

**JMP Version ajoutée :** Avant la version 14

```jsl

exalpha = 0.05;
exdelta = 0.5;
Watch( exalpha, exdelta );
Wait( 3 );
Lock Globals( exalpha );
Wait( 3 );
Try( exalpha = 0.06, Show( "invalid - exalpha is locked" ) );
Try( exdelta = 0.6, Show( "invalid - exdelta is locked" ) );
Wait( 3 );
Unlock Globals( exalpha );
Wait( 3 );
Try( exalpha = 0.06, Show( "invalid - exalpha is locked" ) );

```

### Unlock Symbols

**Syntaxe :** Unlock Symbols( name, ... )

**Description :** Déverrouille les noms globaux spécifiés, permettant leur modification ou effacement par la fonction Clear Symbols.

**JMP Version ajoutée :** Avant la version 14

```jsl

exalpha = 0.05;
exdelta = 0.5;
Watch( exalpha, exdelta );
Wait( 3 );
Lock Symbols( exalpha );
Wait( 3 );
Try( exalpha = 0.06, Show( "invalid - exalpha is locked" ) );
Try( exdelta = 0.6, Show( "invalid - exdelta is locked" ) );
Wait( 3 );
Unlock Symbols( exalpha );
Wait( 3 );
Try( exalpha = 0.06, Show( "invalid - exalpha is locked" ) );

```

### Wait

**Syntaxe :** Wait( &lt;x&gt; )

**Description :** Attend x secondes avant de continuer l&apos;exécution. La valeur par défaut de x est 3 secondes. Si x est supérieur ou égal à 0, JMP terminera les événements du système d&apos;exploitation (par ex. dessiner à l&apos;écran) ainsi que les rappels en attente éventuels (par ex. l&apos;évaluation d&apos;une formule) en plus de l&apos;attente. Si x est inférieur à 0, seul le dessin à l&apos;écran et les événements en attente de l’OS sont confirmés comme terminés avant de continuer.

**JMP Version ajoutée :** Avant la version 14

#### Événements OS

```jsl

Wait( -1 ); // Wait for OS events

```

#### Rappels

```jsl

Wait( 0 ); // Wait for OS events and callbacks

```

#### Simple

```jsl

Wait( 1.5 );

```

### Watch

**Syntaxe :** w = Watch( all|name1, ... )

**Description :** Crée une fenêtre qui affiche les variables des espaces de nommage Global, Here et Local, ainsi que leurs valeurs.

**JMP Version ajoutée :** Avant la version 14

```jsl

x = 1;
y = 2;
z = "abc";
w = Watch( all );
Wait( 5 );
x = x * 5;
y = y / 25;
z = z || "def";
Wait( 5 );
w << close Window();

```

### Where

**Syntaxe :** Where( &lt;dt&gt;, clause )

**Description :** Renvoie les indices (généralement des numéros de ligne) correspondant à la clause Where donnée. Le dt facultatif modifie le Current Data Table lors de l&apos;évaluation. Ces clauses sont souvent écrites par JMP avec le filtre de données. Ce sera souvent plus rapide que d&apos;utiliser Loc, <<Get Rows Where ou <<Select Where. Le comportement est indéfini si la clause modifie les séquences ou des symboles lors de l&apos;évaluation.

**JMP Version ajoutée :** 18

#### Autre

```jsl

xs = [10 20 30 . 50];
ys = [0 0 0 1 1];
Where( xs > 20 & ys );

xs = {{10}, {20}, {15}};
Where( xs[1] < 18 );

```

#### Colonnes

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Get Rows Where( :sex == "M" );
Where( :sex == "M" );
Where( dt, :sex == "M" );

```

#### États de ligne

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Rows( [2 4 6] ) << Exclude( 1 );
Where( Excluded() );
Where( !Excluded() );

```

#### Fonctions de colonne

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Select << Select Rows( Where( Col Max( :height, :age ) >= 68 ) );
dt << Clear Select << Select Rows( Where( :height == Col Max( :height, :age ) ) );

```

#### Matrice/Liste

```jsl

xs = [10 20 30 . 50];
xs[Where( xs >= 20 )];
xs[Where( !Is Missing( xs ) )];
ys = {10, 20, "30", ., 50};
ys[Where( ys >= 20 )];

```

### Wild

**Syntaxe :** Wild()

**Description :** Indique une position générique qui correspond à n&apos;importe quelle expression (seulement utilisé dans les configurations d&apos;expression).

**JMP Version ajoutée :** Avant la version 14

```jsl

extestexpr = Expr(
	For( i = 1, i <= 14, i++, Print( "YES!!!" ) );
	Show( "END" );
);
Extract Expr( extestexpr, For( i = 1, Wild(), i++, Print( "YES!!!" ) ) );

```

### Wild List

**Syntaxe :** Wild List()

**Description :** Indique une série d&apos;arguments génériques pouvant correspondre à quoi que ce soit (seulement utilisé dans les configurations d&apos;expression).

**JMP Version ajoutée :** Avant la version 14

```jsl

extestexpr = Expr(
	For( i = 1, i <= 14, i++, Print( "YES!!!" ) );
	Show( "END" );
);
Extract Expr( extestexpr, For( i = 1, Wild List(), Print( "YES!!!" ) ) );

```

### Write

**Syntaxe :** Write( x, ... )

**Description :** Affiche les valeurs spécifiées dans le registre sans ajouter de guillemets, espaces ou sauts de ligne (comme le fait Print()).

**JMP Version ajoutée :** Avant la version 14

```jsl

Write( "fraction = ", 355 / 113, "\!N", "pi       = ", Pi() );

```

