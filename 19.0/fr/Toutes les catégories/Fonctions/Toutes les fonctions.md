# Toutes les fonctions

### \\[...]\\

**Syntaxe :** y = \\[string]\\

**Description :** Les passages requérant de nombreux caractères d&apos;échappement peuvent utiliser le séparateur \\[...]\\.

**JMP Version ajoutée :** Avant la version 14

```jsl


jslPhrase =
"The JSL to do this is :\[
a = "hello";
b = a|| " world.";
show(b);
]\ and you use the Submit command to run it.";
Show( jslPhrase );

```

### Abbrev Date

**Syntaxe :** s = Abbrev Date( datetime, &lt;format&gt; )

**Description :** Renvoie une représentation locale abrégée d&apos;une valeur « date-heure » de JMP.

**JMP Version ajoutée :** Avant la version 14

```jsl

Abbrev Date( Today() );

```

### Abs

**Syntaxe :** y = Abs( x )

**Description :** Renvoie la valeur absolue de x. L’argument peut être un nombre, une matrice ou une liste de nombres.

**JMP Version ajoutée :** Avant la version 14

```jsl

Abs( -5 );

```

### Add

**Syntaxe :** y = x0 + x1; y = Add( x0, x1, ... )

**Description :** Ajoute tous les arguments, qui peuvent être des nombres, des matrices ou des listes de nombres.

**JMP Version ajoutée :** Avant la version 14

```jsl

Pi() + 10;

```

### Add Color Theme

**Description :** Crée un nouveau thème de couleur personnalisé et l&apos;enregistre avec le sélecteur de thème.

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

Add Color Theme(
	{"Yellow To Blue", 0, {{255, 255, 0},
	{0, 0, 255}}, {0.0, 1.0}}
);

```

**Exemple 2**

```jsl

Add Color Theme(
	{"Black To Red To White",
	{"Continuous", "Categorical",
	"Diverging"}, {{0, 0, 0}, {255, 0, 0
	}, {255, 255, 255},
	Missing( "Green" )}, {"Full Color",
	"Tritanopia", "Tritanomaly"}}
);

```

### Add Custom Functions

**Syntaxe :** Add Custom Functions({f1, f2, ...} | f)

**Description :** Définit une liste des fonctions personnalisées à utiliser dans les scripts et l&apos;éditeur de formules. La commande ajoute également la liste à l&apos;environnement.

**JMP Version ajoutée :** 14

```jsl

myAdd =
New Custom Function(
	"custom",
	"Add",
	Function( {x, y}, x + y - 1 )
);
mySub =
New Custom Function(
	"custom",
	"Sub",
	Function( {x, y}, x - y + 1 )
);
Add Custom Functions( {myAdd, mySub} );

```

### Add To

**Syntaxe :** y += x; Add To( y, x )

**Description :** Ajoute une valeur à une variable ou à une liste de variables.

**JMP Version ajoutée :** Avant la version 14

```jsl

ex = 1;
ex += 2;
ex;

```

### Add Vectors BLAS

**Syntaxe :** z = Add Vectors BLAS( x, y, alpha )

**JMP Version ajoutée :** 17

```jsl

x = [1, 2, 3, 4];
y = [5, 6, 7, 8];
alpha = 0.5;
z = Add Vectors BLAS( x, y, alpha );

```

### Alignment Cell Box

**Syntaxe :** y = Alignment Cell Box( row, col, nRow, nCol, &lt;Sides(left+2*top+4*right+8*bottom=15)&gt; &lt;RowSpan(nRow matrix)&gt; &lt;ColSpan(nCol matrix)&gt;, matrix or list of strings )

**Description :** Renvoie une référence à une boîte d&apos;affichage qui contient les contenus de la ligne (ou colonne) qui se trouvent à l&apos;intérieur de la zone de grille d&apos;alignement.

**JMP Version ajoutée :** 19

```jsl


New Window( "Crosstab",
	Alignment Grid Box(
		Alignment Cell Box(
			0,
			1,
			1,
			1,
			ColSpan( [3] ),
			{"sex"}
		),
		Alignment Cell Box(
			1,
			1,
			1,
			3,
			{"F", "M", "Total"}
		),
		Alignment Cell Box(
			3,
			0,
			1,
			1,
			Sides( 0 ),
			ColSpan( [4] ),
			{"age"}
		),
		Alignment Cell Box(
			4,
			0,
			6,
			1,
			{"  12", "  13", "  14",
			"  15", "  16", "  17"}
		),
		Alignment Cell Box(
			4,
			1,
			6,
			3,
			{"5 (28%)", "3 (14%)",
			"8 (20%)", "3 (17%)",
			"4 (18%)", "7 (18%)",
			"5 (28%)", "7 (32%)",
			"12 (30%)", "2 (11%)",
			"5 (23%)", "7 (18%)",
			"2 (11%)", "1 (5%)",
			"3 (8%)", "1 (6%)", "2 (9%)",
			"3 (8%)"}
		)
	)
);

```

### Alignment Grid Box

**Syntaxe :** y = Alignment Grid Box( alignment cell boxes )

**Description :** Renvoie une référence à une boîte d&apos;affichage qui peut contenir des zones de cellule d&apos;alignement.

**JMP Version ajoutée :** 19

```jsl


New Window( "Crosstab",
	Alignment Grid Box(
		Alignment Cell Box(
			0,
			1,
			1,
			1,
			ColSpan( [3] ),
			{"sex"}
		),
		Alignment Cell Box(
			1,
			1,
			1,
			3,
			{"F", "M", "Total"}
		),
		Alignment Cell Box(
			3,
			0,
			1,
			1,
			Sides( 0 ),
			ColSpan( [4] ),
			{"age"}
		),
		Alignment Cell Box(
			4,
			0,
			6,
			1,
			{"  12", "  13", "  14",
			"  15", "  16", "  17"}
		),
		Alignment Cell Box(
			4,
			1,
			6,
			3,
			{"5 (28%)", "3 (14%)",
			"8 (20%)", "3 (17%)",
			"4 (18%)", "7 (18%)",
			"5 (28%)", "7 (32%)",
			"12 (30%)", "2 (11%)",
			"5 (23%)", "7 (18%)",
			"2 (11%)", "1 (5%)",
			"3 (8%)", "1 (6%)", "2 (9%)",
			"3 (8%)"}
		)
	)
);

```

### Alignment Multi Box

**Syntaxe :** y = Alignment Multi Box( row, col, nRow, nCol, nElements, list-of-nElements-matrices or empty values, list-of-nElements-lists of strings or empty values )

**Description :** Renvoie une référence à une boîte d&apos;affichage qui contient plusieurs éléments de chaque cellule qui se trouve à l&apos;intérieur de la zone de grille d&apos;alignement.

**JMP Version ajoutée :** 19

```jsl


New Window( "Alignment MultiBox",
	Border Box( Top( 15 ), Left( 15 ),
		Right( 15 ), Bottom( 15 ),
		Alignment Grid Box(
			Alignment Multi Box(
				0,
				1,
				1,
				1,
				2,
				{},
				{{"Freq"}, {"Share"}}
			),
			Alignment Cell Box(
				0,
				2,
				1,
				1,
				ColSpan( [2] ),
				{"sex"}
			),
			Alignment Cell Box(
				1,
				2,
				1,
				2,
				ColSpan( [1, 1] ),
				{"F", "M"}
			),
			Alignment Cell Box(
				2,
				0,
				1,
				1,
				RowSpan( [7] ),
				{"age"}
			),
			Alignment Cell Box(
				2,
				1,
				7,
				1,
				{"12", "13", "14", "15",
				"16", "17",
				"Total Responses"}
			),
			Alignment Multi Box(
				2,
				2,
				6,
				2,
				2,
				{[5 3, 5 2, 2 1, 3 4, 7
				5, 1 2], [0.277 0.167,
				0.278 0.111, 0.111 0.055,
				0.136 0.181, 0.318 0.227,
				0.045 0.090]},
				{Empty(), Empty()}
			),
			Alignment Cell Box(
				8,
				2,
				1,
				2,
				[18 22]
			)
		)
	)
);

```

### All

**Syntaxe :** y = All( x, ... )

**Description :** Renvoie 1 si tous les éléments ne sont pas zéro, et 0 dans le cas contraire.

**JMP Version ajoutée :** Avant la version 14

```jsl

All( [1 2 3] );

```

### Alpha Shape

**Syntaxe :** ashape = Alpha Shape(Triangulation)

**Description :** Renvoie la forme alpha correspondant à la triangulation donnée.

**JMP Version ajoutée :** Avant la version 14

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang =
Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = Alpha Shape( triang );

```

### And

**Syntaxe :** y = x1 & x2; y = And( x1, x2, ... )

**Description :** Renvoie l’AND logique de tous les arguments : 1 si tous les arguments ne sont pas nuls, 0 dans le cas contraire.

**JMP Version ajoutée :** Avant la version 14

```jsl

1 < 2 & 3 < 4;

```

### AndMZ

**Syntaxe :** y = AndMZ( x1, x2, ... )

**Description :** Renvoie l’AND logique de tous les arguments en traitant les valeurs manquantes comme des zéro : 1 si tous les arguments ne sont pas nuls et 0 dans le cas contraire.

**JMP Version ajoutée :** Avant la version 14

```jsl

AndMZ( 1 < 2, 3 < 4 );

```

### Any

**Syntaxe :** y = Any( x, ... )

**Description :** Renvoie 1 si un élément n&apos;est pas zéro, et 0 dans le cas contraire.

**JMP Version ajoutée :** Avant la version 14

```jsl

Any( [1 0 2] );

```

### Arc

**Syntaxe :** Arc( left, top, right, bottom, startAngle, endAngle )

**Description :** Dessine un arc d&apos;ovale.

**JMP Version ajoutée :** Avant la version 14

```jsl

New Window( "Example",
	Graph Box(
		Pen Color( "red" );
		Arc( 10, 80, 70, 30, 0, 90 );
	)
);

```

### Arc Finder

**Syntaxe :** Arc Finder( Group( lot, wafer ), X( col ), Y( col ), &lt;optional arguments&gt; )

**Description :** Trouve les arcs dans les données de points et crée une nouvelle colonne identifiant les arcs.

**JMP Version ajoutée :** 14

```jsl


dt = Open(
	"$SAMPLE_DATA/Wafer Stacked.jmp"
);
Arc Finder(
	Group( :Lot, :Wafer ),
	X( :X_Die ),
	Y( :Y_Die ),
	Min Distance( 12 ), // minimum distance among 3 points to seed an arc
	Min Radius( 15 ), // minimum radius of the acceptable arc
	Max Radius( 2000 ), // maximum radius of acceptable arc
	Max Radius Error( 2 ), // how close a point needs to be added
	Min Arc Points( 5 ), // how many points to define an arc
	Number of Searches( 500 ), // how many random probes of data
	Max Number Arcs( 3 ) // number of arcs searched for
);
dt <<
Color or Mark by Column( :Arc Number );
dt <<
Graph Builder(
	Size( 1539, 921 ),
	Variables(
		X( :X_Die ),
		Y( :Y_Die ),
		Wrap( :Lot_Wafer Label ),
		Color( :Arc Number )
	),
	Elements(
		Points( X, Y, Legend( 6 ) )
	)
);

```

### ArcCosH

**Syntaxe :** y = ArcCosH( x )

**Description :** Renvoie le cosinus hyperbolique inverse de x.

**JMP Version ajoutée :** Avant la version 14

```jsl

ArcCosH( 1 );

```

### ArcCosine

**Syntaxe :** y = ArcCosine( x )

**Description :** Renvoie le cosinus trigonométrique inverse de x, où x est dans l’étendue [-1, 1] et le résultat est dans l’intervalle [0, Pi()].

**JMP Version ajoutée :** Avant la version 14

```jsl

ArcCosine( 0.5 );

```

### ArCos

**Syntaxe :** y = ArcCosine( x )

**Description :** Renvoie le cosinus trigonométrique inverse de x, où x est dans l’étendue [-1, 1] et le résultat est dans l’intervalle [0, Pi()].

**JMP Version ajoutée :** Avant la version 14

```jsl

ArcCosine( 0.5 );

```

### ArcSine

**Syntaxe :** y = ArcSine( x )

**Description :** Renvoie le sinus trigonométrique inverse de x, où x est dans l’étendue [-1, 1] et le résultat est dans l’intervalle [-Pi()/2, Pi()/2].

**JMP Version ajoutée :** Avant la version 14

```jsl

ArcSine( 0.5 );

```

### ArcSinH

**Syntaxe :** y = ArcSinH( x )

**Description :** Renvoie le sinus hyperbolique inverse de x.

**JMP Version ajoutée :** Avant la version 14

```jsl

ArcSinH( 1 );

```

### ArcTan

**Syntaxe :** y = ArcTangent( x1, &lt;x2=1&gt; )

**Description :** Renvoie la tangente trigonométrique inverse de x1/x2, où le résultat est dans l’intervalle[-Pi()/2, Pi()/2].

**JMP Version ajoutée :** Avant la version 14

```jsl

4 * ArcTangent( 1 );

```

### ArcTangent

**Syntaxe :** y = ArcTangent( x1, &lt;x2=1&gt; )

**Description :** Renvoie la tangente trigonométrique inverse de x1/x2, où le résultat est dans l’intervalle[-Pi()/2, Pi()/2].

**JMP Version ajoutée :** Avant la version 14

```jsl

4 * ArcTangent( 1 );

```

### ArcTanH

**Syntaxe :** y = ArcTanH( x )

**Description :** Renvoie la tangente hyperbolique inverse de x.

**JMP Version ajoutée :** Avant la version 14

```jsl

ArcTanH( 0.5 );

```

### Arg

**Syntaxe :** y = Arg( x, i )

**Description :** Renvoie le i-ième argument de l’expression évaluée ou Empty() s’il n’y a pas de i-ième argument.

**JMP Version ajoutée :** Avant la version 14

```jsl

Arg( Expr( Sum( a, b, c ) ), 2 );

```

### Arg Expr

**Syntaxe :** y = Arg Expr( expr, i )

**Description :** Renvoie le i-ième argument de l’expression évaluée ou Empty() s’il n’y a pas de i-ième argument. Cette fonction est déconseillée. Veuillez plutôt utiliser Arg().

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

// See Example 2 for the deprecated Arg Expr() equivalent
Arg( Expr( Sum( a, b, c ) ), 2 );

```

**Exemple 2**

```jsl

// Deprecated
Arg Expr( Sum( a, b, c ), 2 );

```

### ARIMA Forecast

**Syntaxe :** x = ARIMA Forecast( dtcol, length, model, estimates, from, to )

**Description :** Renvoie un vecteur de valeurs de prévision de la colonne dtcol dans l’intervalle déterminée par les arguments from et to. L’argument length spécifie une portion de colonne à utiliser pour la fonction. L’argument model correspond aux messages qui sont envoyés à la plate-forme Série chronologique pour l’ajustement du modèle. L’argument estimates correspond à l’enfant du résultat du message Obtenir les modèles d’un seul modèle. Typiquement, la valeur from est comprise entre 1 et to, bornes comprises. Cependant, si from<=0 et from<=to, une partie des résultats sont des prévisions filtrées.

**JMP Version ajoutée :** Avant la version 14

```jsl

Open(
	"$SAMPLE_DATA/Time Series/Steel Shipments.jmp"
);
ARIMA Forecast(
	:Steel Shipments,
	96,
	ARIMA( 1, 0, 1 ),
	{
	AR Coefficients(
		{0.900397691783565}
	),
	MA Coefficients(
		{0.483316746530245}
	), Intercept( 6466.03264802329 )},
	1,
	2
);

```

### Arrhenius

**Syntaxe :** y = Arrhenius( tempC )

**Description :** Renvoie la composante non spécifique de la relation d&apos;Arrhenius qui est ensuite multipliée par l&apos;énergie d&apos;activation dans l&apos;équation d&apos;Arrhenius. Renvoie 11604.5181215503 / (tempC + 273.15).

**JMP Version ajoutée :** Avant la version 14

```jsl

Arrhenius( 100 );

```

### Arrhenius Inv

**Syntaxe :** tempC = Arrhenius Inv( y )

**Description :** Renvoie l’inverse de la fonction d’Arrhenius, qui est (11604.5181215503 / y) - 273.15.

**JMP Version ajoutée :** Avant la version 14

```jsl

Arrhenius Inv( 100 );

```

### Arrow

**Syntaxe :** Arrow( {x1, y1}, {x2, y2}, ... ); Arrow( xMatrix, yMatrix )

**Description :** Dessine une ligne avec une flèche ou une séquence de ces lignes.

**JMP Version ajoutée :** Avant la version 14

```jsl

New Window( "Example",
	Graph Box(
		Pen Size( 4 );
		Arrow( [10 30 90], [88 22 44] );
	)
);

```

### ArSin

**Syntaxe :** y = ArcSine( x )

**Description :** Renvoie le sinus trigonométrique inverse de x, où x est dans l’étendue [-1, 1] et le résultat est dans l’intervalle [-Pi()/2, Pi()/2].

**JMP Version ajoutée :** Avant la version 14

```jsl

ArcSine( 0.5 );

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

### As C Expr

**Syntaxe :** y = As C Expr( x )

**Description :** Renvoie une expression équivalente dans le langage de programmation C.

**JMP Version ajoutée :** Avant la version 14

```jsl

As C Expr(
	Expr(
		Match( sex,
			1, "Male",
			2, "Female",
			"Other"
		)
	)
);

```

### As Column

**Syntaxe :** y = :name;y = dataTable:name;y = As Column( name );y = As Column( dataTable, name )

**Description :** Accède à la colonne spécifiée dans la table de données indiquée ou en cours. Une erreur est lancée si aucune colonne ou table de données de ce type n&apos;est trouvée.

**JMP Version ajoutée :** Avant la version 14

```jsl

exdt =
Open( "$SAMPLE_DATA/Big Class.jmp" );
exdt:height[1] + :height[2]
+As Column( "height" )[3];

```

### As Constant

**Syntaxe :** y = As Constant( x )

**Description :** Évalue une expression pour créer une valeur constante qui restera inchangée une fois le calcul effectué

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

New Table( "As Constant Demo Table 1",
	Add Rows( 10 ),
	New Column( "Non-Constant",
		Formula( Random Uniform() )
	),
	New Column( "Constant",
		Formula(
			As Constant(
				Random Uniform()
			)
		)
	)
);

```

**Exemple 2**

```jsl

New Table( "As Constant Demo Table 2",
	Add Rows( 1000 ),
	New Column(
		"What's on Your Desktop?",
		"character",
		Formula(
			As Constant(
				xFiles =
				Files In Directory(
					"$Desktop"
				)
			);
			iR = Row();
			If( iR <= N Items( xFiles ),
				xFiles[iR],
				"---"
			);
		)
	)
);

```

**Exemple 3**

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

### As Date

**Syntaxe :** dt = As Date( datetime )

**Description :** Renvoie une valeur de date-heure marquée de façon interne comme une date à des fins de sortie.

**JMP Version ajoutée :** Avant la version 14

```jsl

As Date( Today() );

```

### As Global

**Syntaxe :** y = ::name; y = As Global( name )

**Description :** Accède à la variable globale spécifiée ou lance une erreur si aucune variable globale de ce type n&apos;existe.

**JMP Version ajoutée :** Avant la version 14

```jsl

::ex = 23;
Local( {ex = 12},
	Eval List(
		{ex, ::ex, As Global( "ex" )}
	)
);

```

### As JavaScript Expr

**Syntaxe :** y = As JavaScript Expr( x )

**Description :** Renvoie une expression équivalente dans le langage de programmation JavaScript.

**JMP Version ajoutée :** Avant la version 14

```jsl

As JavaScript Expr(
	Expr(
		Match( sex,
			1, "Male",
			2, "Female",
			"Other"
		)
	)
);

```

### As JSON Expr

**Syntaxe :** y = As JSON Expr( x )

**Description :** Renvoie une représentation JSON (JavaScript Object Notation) de l&apos;expression.

**JMP Version ajoutée :** Avant la version 14

```jsl

As JSON Expr(
	Expr(
		Match( sex,
			1, "Male",
			2, "Female",
			"Other"
		)
	)
);

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

dt = Open(
	"$SAMPLE_DATA/Big Class.jmp"
);
dt:(As Name( "height" ))[3];

```

### As Namespace

**Syntaxe :** asns = As Namespace( ns )

**Description :** Accède à l’espace de noms spécifié ou lance une erreur si cet espace de noms n&apos;existe pas.

**JMP Version ajoutée :** Avant la version 14

```jsl

ns =
New Namespace(
	"complex"
);
As Namespace( ns );

```

### As Python Expr

**Syntaxe :** y = As Python Expr( x )

**Description :** Renvoie une expression équivalente dans le langage de programmation Python.

**JMP Version ajoutée :** Avant la version 14

```jsl

As Python Expr(
	Expr(
		Match( sex,
			1, "Male",
			2, "Female",
			"Other"
		)
	)
);

```

### As Root

**Syntaxe :** y = :::name; y = As Root( name )

**Description :** Accède à la variable racine spécifiée ou lance une erreur si cette variable racine n&apos;existe pas.

**JMP Version ajoutée :** 15

```jsl

::: ex = 23;
Local( {ex = 12},
	Eval List(
		{ex, ::: ex, As Global( "ex" )}
	)
);

```

### As Row State

**Syntaxe :** rs = As Row State( x )

**Description :** Convertit un nombre en une valeur d&apos;état de ligne.

**JMP Version ajoutée :** Avant la version 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row(
	Row State() =
	As Row State(
		(:sex == "F") * 2 + (:sex == "M"
		) * 4 + ((:sex == "F") * 2 + (
		:sex == "M") * 6) * 16 + (:age
		 - 11) * 256
	)
);

```

### As SAS Expr

**Syntaxe :** y = As SAS Expr( x )

**Description :** Renvoie une version plus adaptée de l&apos;expression pour un SAS DATA step. Le code doit être ajusté dans un appel PROC DS2.

**JMP Version ajoutée :** Avant la version 14

```jsl

As SAS Expr(
	Expr(
		Match( sex,
			1, "Male",
			2, "Female",
			"Other"
		)
	)
);

```

### As Scoped

**Syntaxe :** y = namespace:variable; y = As Scoped( namespace, variable )

**Description :** Accède à la variable d’étendue spécifiée ou lance une erreur si cette variable d’étendue n&apos;existe pas.

**JMP Version ajoutée :** Avant la version 14

```jsl

Here:z = 23.5;
As Scoped( Here, z );

```

### As SQL Expr

**Syntaxe :** y = As SQL Expr( x, &lt;style&gt; )

**Description :** Renvoie une chaîne qui contient l&apos;expression convertie en syntaxe SQL valide pouvant être utilisée dans une instruction SQL Select.

**JMP Version ajoutée :** Avant la version 14

```jsl

As SQL Expr(
	Expr(
		Match( sex,
			1, "Male",
			2, "Female",
			"Other"
		)
	),
	"MySQL"
);

```

### As Table

**Syntaxe :** dt = As Table( matrix, &lt;matrix2,...&gt; &lt; &lt;&lt;invisible/private&gt;, &lt; &lt;&lt;Column Names(name list) &gt; )

**Description :** Convertit une matrice en une table de données. L’argument facultatif invisible peut servir à éviter l&apos;affichage de la table.

**JMP Version ajoutée :** Avant la version 14

```jsl

As Table( [1 2 3, 4 5 6] );

```

### Assign

**Syntaxe :** y = x; Assign( y, x )

**Description :** Assigne une valeur à une variable ou à une liste de variables.

**JMP Version ajoutée :** Avant la version 14

```jsl

{ex1, ex2} = {Pi(), 1};
ex1 + ex1;

```

### Associative Array

**Syntaxe :** y = Associative Array( {{key1, value1}, ...} );y = Associative Array( keys, values )

**Description :** Crée un tableau associatif, également appelé dictionnaire ou table de hachage. Sous la forme à deux arguments, les codes et valeurs peuvent être une liste, une matrice ou une colonne de table de données.

**JMP Version ajoutée :** Avant la version 14

```jsl

ex =
Associative Array(
	{"red", "blue"},
	{1, 2}
);
ex["green"] = 3;
ex << get contents;

```

### ATan

**Syntaxe :** y = ArcTangent( x1, &lt;x2=1&gt; )

**Description :** Renvoie la tangente trigonométrique inverse de x1/x2, où le résultat est dans l’intervalle[-Pi()/2, Pi()/2].

**JMP Version ajoutée :** Avant la version 14

```jsl

4 * ArcTangent( 1 );

```

### B Spline Coef

**Syntaxe :** coef = B Spline Coef( x, Internal Knot Grid, &lt;degree = 3&gt;, &lt;KnotEndPoints = min(x) || max(x)&gt; )

**Description :** Renvoie la matrice des coefficients B-splines. Internal Knot Grid est soit le nombre de points souhaité pour le nœud, sur la base des percentiles de x, ou un vecteur spécifiant les points du nœud interne. Le paramètre facultatif degree spécifie le degré des B-splines, 3 étant la valeur par défaut. Le paramètre facultatif KnotEndPoints prend une matrice 2x1 contenant les positions [inférieure, supérieure] des nœuds sur la frontière. Les points finaux du nœud sont, par défaut, le min. et le max. de x. Le deuxième exemple montre comment les coefficients B-splines peuvent être utilisés comme matrice de plan dans un modèle linéaire.

**JMP Version ajoutée :** 14

**Exemple 1**

```jsl

B Spline Coef(
	[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
	2
);
B Spline Coef(
	[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
	[3, 7]
);

```

**Exemple 2**

```jsl

xx = (0 :: 10)`;
yy = [0, 1, 0, -1, 0, 1, 0, -1, 0, 1, 0];
designMat = B Spline Coef( xx, 2 );
Linear Regression(
	yy,
	designMat,
	<<nointercept
);

```

### Back Color

**Syntaxe :** Back Color( &lt;name|index|rgbList&gt; )

**Description :** Définit la couleur de fond pour le mode effacer dans la fonction Text().

**JMP Version ajoutée :** Avant la version 14

```jsl

New Window( "Example",
	Graph Box(
		Back Color( "red" );
		Text(
			Erased,
			{50, 20},
			"Hello"
		);
	)
);

```

### Beep

**Syntaxe :** Beep()

**Description :** Réalise une alerte sonore.

**JMP Version ajoutée :** Avant la version 14

```jsl

Beep();

```

### Best Partition

**Syntaxe :** {c1, c2, g2} = Best Partition( xIndices, yIndices, &lt;&lt;Ordered, &lt;&lt;ContinuousY, &lt;&lt;ContinuousX )

**Description :** Détermine le groupement optimal (fonction expérimentale).

**JMP Version ajoutée :** Avant la version 14

```jsl

/*Example for Continuous X and Continuous Y*/Best Partition(
	[1.2, 2.2, 3.5, 4.4, 5.6, 7.8],
	[11.2, 11.5, 11.8, 100.5, 100.7,
	100.8],
	<<ContinuousX,
	<<ContinuousY
);

```

### Beta

**Syntaxe :** z = Beta( x, y )

**Description :** Renvoie la fonction Bêta de x et y, définie comme Gamma( x ) * Gamma( y ) / Gamma( x + y ).

**JMP Version ajoutée :** Avant la version 14

```jsl

Beta( 5, 4 );

```

### Beta Binomial Distribution

**Syntaxe :** cumprob = Beta Binomial Distribution( k, p, n, delta )

**Description :** Renvoie la probabilité qu&apos;une variable aléatoire distribuée de façon binomiale bêta soit inférieure ou égale à k.

**JMP Version ajoutée :** Avant la version 14

```jsl

p = 0.5;
n = 25;
delta = 0;
New Window(
	"Example: BetaBinomial Distribution",
	y =
	Graph Box(
		Y Scale( 0, 1.05 ),
		X Scale( -1, n + 1 ),
		Pen Color( "red" ),
		Pen Size( 1 );
		For( k = 0, k <= n, k++,
			H Line(
				k,
				k + 1,
				Beta Binomial Distribution(
					k,
					p,
					n,
					delta
				)
			);
			V Line(
				k + 1,
				Beta Binomial Distribution(
					k,
					p,
					n,
					delta
				),
				Beta Binomial Distribution(
					k + 1,
					p,
					n,
					delta
				)
			);
		);
		Text(
			{15, 0.1},
			"n=",
			Round( n ),
			" p=",
			Round( p, 2 )
		);
		Text(
			{15, 0.04},
			"Dispersion=",
			Round( delta, 2 )
		);
	),
	H List Box(
		Slider Box(
			0.01,
			0.99,
			p,
			y << reshow
		),
		Text Box( " p" )
	),
	H List Box(
		Slider Box(
			-0.01,
			0.99,
			delta,
			y << reshow
		),
		Text Box( " Dispersion" )
	)
);

```

### Beta Binomial Probability

**Syntaxe :** prob = Beta Binomial Probability( k, p, n, delta )

**Description :** Renvoie la probabilité qu&apos;une variable aléatoire distribuée de façon binomiale bêta soit égale à k.

**JMP Version ajoutée :** Avant la version 14

```jsl

n = 25;
p = 0.5;
delta = 0;
New Window(
	"Binomial and BetaBinomial Probabilities",
	clty =
	Graph Box(
		Y Scale( 0, 0.3 ),
		X Scale( -1, n + 1 ),
		Pen Color( "red" ),
		Pen Size( 2 );
		For( x = 0, x <= n, x++,
			Pen Color( "red" );
			V Line(
				x,
				0,
				Binomial Probability(
					p,
					n,
					x
				)
			);
			Pen Color( "blue" );
			V Line(
				x + 0.35,
				0,
				Beta Binomial Probability(
					x,
					p,
					n,
					delta
				)
			);
		);
		Text(
			{1, 0.25},
			"p=",
			Round( p, 8 ),
			" Dispersion=",
			Round( delta, 8 )
		);
		Text(
			{0, 0.28},
			"Red = Binomial, Blue = BetaBinomial"
		);
	),
	H List Box(
		Slider Box(
			0.2,
			0.8,
			p,
			clty << reshow
		),
		Text Box( " p" )
	),
	H List Box(
		Slider Box(
			-0.05,
			0.999,
			delta,
			clty << reshow
		),
		Text Box( " Dispersion" )
	)
);

```

### Beta Binomial Quantile

**Syntaxe :** q = Beta Binomial Quantile( p, n, delta, cumprob )

**Description :** Renvoie le quantile entier le plus petit, pour lequel la probabilité cumulée d&apos;observer une variable aléatoire binomiale bêta ( p, n, delta )est supérieure ou égale à cumprob.

**JMP Version ajoutée :** Avant la version 14

```jsl

qbinexp = 0.3;
qbinexn = 20;
qbinexq = 0.5;
delta = 0;
New Window(
	"Example: BetaBinomial Quantile",
	qbinexy =
	Graph Box(
		Y Scale( 0, 1.05 ),
		X Scale( -1, 41 ),
		Pen Color( "red" ),
		Pen Size( 2 );
		For( qbinexk = 0,
			qbinexk < Round( qbinexn ),
			qbinexk++,
			H Line(
				qbinexk,
				qbinexk + 1,
				Beta Binomial Distribution(
					qbinexk,
					qbinexp,
					Round( qbinexn ),
					delta
				)
			);
			V Line(
				qbinexk + 1,
				Beta Binomial Distribution(
					qbinexk,
					qbinexp,
					Round( qbinexn ),
					delta
				),
				Beta Binomial Distribution(
					qbinexk + 1,
					qbinexp,
					Round( qbinexn ),
					delta
				)
			);
		);
		Pen Color( "blue" );
		V Line(
			Beta Binomial Quantile(
				qbinexp,
				Round( qbinexn ),
				delta,
				qbinexq
			),
			0,
			1
		);
		Text(
			{6, 0.17},
			"n=",
			Round( qbinexn ),
			" p=",
			Round( qbinexp, 2 ),
			" Disp.=",
			Round( Delta, 2 ),
			" q=",
			Round( qbinexq, 2 )
		);
		Text(
			{6, 0.1},
			"quantile=",
			Round(
				Beta Binomial Quantile(
					qbinexp,
					Round( qbinexn ),
					delta,
					qbinexq
				)
			)
		);
	),
	H List Box(
		Slider Box(
			0,
			0.99,
			qbinexp,
			qbinexy << reshow
		),
		Text Box( " p" )
	),
	H List Box(
		Slider Box(
			0,
			40,
			qbinexn,
			qbinexy << reshow
		),
		Text Box( " n" )
	),
	H List Box(
		Slider Box(
			-0.01,
			0.99,
			delta,
			qbinexy << reshow
		),
		Text Box( " Dispersion" )
	),
	H List Box(
		Slider Box(
			0,
			1,
			qbinexq,
			qbinexy << reshow
		),
		Text Box( " q" )
	)
);

```

### Beta Density

**Syntaxe :** y = Beta Density( q, alpha, beta, &lt;theta=0&gt;, &lt;sigma=1&gt; )

**Description :** Renvoie la densité pour la valeur q de la distribution bêta, où q est dans l’intervalle de theta à theta + sigma, alpha et beta sont les paramètres de forme, theta et sigma sont les paramètres de seuillage et d&apos;échelle, respectivement.

**JMP Version ajoutée :** Avant la version 14

```jsl

alpha = 0.5;
beta = 0.5;
New Window( "Example: Beta Density",
	y =
	Graph Box(
		Y Scale( 0, 2.5 ),
		X Scale( 0, 1 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function(
			Beta Density(
				q,
				alpha,
				beta
			),
			q
		);
		Text(
			{0.55, 2.2},
			"\!U03B1=",
			Round( alpha, 2 ),
			" \!U03B2=",
			Round( beta, 2 )
		);
	),
	H List Box(
		Slider Box(
			0,
			10,
			alpha,
			y << reshow
		),
		Text Box( " \!U03B1" )
	),
	H List Box(
		Slider Box(
			0,
			10,
			beta,
			y << reshow
		),
		Text Box( " \!U03B2" )
	)
);

```

### Beta Distribution

**Syntaxe :** p = Beta Distribution( q, alpha, beta, &lt;theta=0&gt;, &lt;sigma=1&gt; )

**Description :** Renvoie la probabilité qu&apos;une variable aléatoire de loi bêta soit inférieure à q, où alpha et beta sont les paramètres de forme et theta et sigma sont les paramètres de seuillage et d’échelle, respectivement.

**JMP Version ajoutée :** Avant la version 14

```jsl

alpha = 0.5;
beta = 0.5;
New Window( "Example: Beta Distribution",
	y =
	Graph Box(
		Y Scale( 0, 1 ),
		X Scale( 0, 1 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function(
			Beta Distribution(
				q,
				alpha,
				beta
			),
			q
		);
		Text(
			{0.1, 0.9},
			"\!U03B1=",
			Round( alpha, 2 ),
			" \!U03B2=",
			Round( beta, 2 )
		);
	),
	H List Box(
		Slider Box(
			0,
			10,
			alpha,
			y << reshow
		),
		Text Box( " \!U03B1" )
	),
	H List Box(
		Slider Box(
			0,
			10,
			beta,
			y << reshow
		),
		Text Box( " \!U03B2" )
	)
);

```

### Beta Quantile

**Syntaxe :** q = Beta Quantile( p, alpha, beta, &lt;theta=0&gt;, &lt;sigma=1&gt; )

**Description :** Renvoie le quantile d’une distribution bêta, correspondant à la probabilité p qu&apos;une valeur aléatoire ayant cette distribution prenne une valeur inférieure au quantile, où alpha et beta sont les paramètres de forme et theta et sigma sont les paramètres de seuillage et d’échelle, respectivement.

**JMP Version ajoutée :** Avant la version 14

```jsl

Beta Quantile( 0.95, 2, 5 );

```

### Binomial Distribution

**Syntaxe :** cumprob = Binomial Distribution( p, n, k )

**Description :** Renvoie la probabilité qu&apos;une variable aléatoire distribuée de façon binomiale soit inférieure ou égale à k.

**JMP Version ajoutée :** Avant la version 14

```jsl

p = 0.5;
n = 30;
New Window(
	"Example: Binomial Distribution",
	y =
	Graph Box(
		Y Scale( 0, 1.05 ),
		X Scale( -1, 31 ),
		Pen Color( "red" ),
		Pen Size( 1 );
		For( k = 0, k <= n, k++,
			H Line(
				k,
				k + 1,
				Binomial Distribution(
					p,
					n,
					k
				)
			);
			V Line(
				k + 1,
				Binomial Distribution(
					p,
					n,
					k
				),
				Binomial Distribution(
					p,
					n,
					k + 1
				)
			);
		);
		Text(
			{20, 0.1},
			"n=",
			Round( n ),
			" p=",
			Round( p, 2 )
		);
	),
	H List Box(
		Slider Box(
			0,
			1,
			p,
			y << reshow
		),
		Text Box( " p" )
	),
	H List Box(
		Slider Box(
			0,
			30,
			n,
			y << reshow
		),
		Text Box( " n" )
	)
);

```

### Binomial Probability

**Syntaxe :** prob = Binomial Probability( p, n, k )

**Description :** Renvoie la probabilité qu&apos;une variable aléatoire distribuée de façon binomiale soit égale à k.

**JMP Version ajoutée :** Avant la version 14

```jsl

cltp = 0.03;
cltn = 30;
New Window(
	"Example: Binomial Probability and Central Limit Theorem",
	clty =
	Graph Box(
		Y Scale( 0, 0.3 ),
		X Scale( -1, 60 ),
		Pen Color( "red" ),
		Pen Size( 2 );
		For( cltk = 0, cltk <= cltn,
			cltk++,
			V Line(
				cltk,
				0,
				Binomial Probability(
					cltp,
					cltn,
					cltk
				)
			)
		);
		Text(
			{15, 0.09},
			"n=",
			Round( cltn ),
			" p=",
			Round( cltp, 2 )
		);
	),
	H List Box(
		Slider Box(
			0.01,
			0.99,
			cltp,
			clty << reshow
		),
		Text Box( " p" )
	),
	H List Box(
		Slider Box(
			0,
			2000,
			cltn,
			clty << reshow
		),
		Text Box(
			" n ( Drag me and see Central Limit Theorem )"
		)
	)
);

```

### Binomial Quantile

**Syntaxe :** q = Binomial Quantile( p, n, cumprob )

**Description :** Renvoie le quantile entier le plus petit, pour lequel la probabilité cumulée d&apos;observer une variable aléatoire binomiale (p, n) est supérieure ou égale à cumprob.

**JMP Version ajoutée :** Avant la version 14

```jsl

qbinexp = 0.3;
qbinexn = 20;
qbinexq = 0.5;
New Window( "Example: Binomial Quantile",
	qbinexy =
	Graph Box(
		Y Scale( 0, 1.05 ),
		X Scale( -1, 41 ),
		Pen Color( "red" ),
		Pen Size( 2 );
		For( qbinexk = 0,
			qbinexk < Round( qbinexn ),
			qbinexk++,
			H Line(
				qbinexk,
				qbinexk + 1,
				Binomial Distribution(
					qbinexp,
					Round( qbinexn ),
					qbinexk
				)
			);
			V Line(
				qbinexk + 1,
				Binomial Distribution(
					qbinexp,
					Round( qbinexn ),
					qbinexk
				),
				Binomial Distribution(
					qbinexp,
					Round( qbinexn ),
					qbinexk + 1
				)
			);
		);
		Pen Color( "blue" );
		V Line(
			Binomial Quantile(
				qbinexp,
				Round( qbinexn ),
				qbinexq
			),
			0,
			1.0
		);
		Text(
			{6, 0.17},
			"n=",
			Round( qbinexn ),
			" p=",
			Round( qbinexp, 2 ),
			" q=",
			Round( qbinexq, 2 ),
			" quantile=",
			Round(
				Binomial Quantile(
					qbinexp,
					Round( qbinexn ),
					qbinexq
				)
			)
		);
	),
	H List Box(
		Slider Box(
			0,
			1,
			qbinexp,
			qbinexy << reshow
		),
		Text Box( " p" )
	),
	H List Box(
		Slider Box(
			0,
			40,
			qbinexn,
			qbinexy << reshow
		),
		Text Box( " n" )
	),
	H List Box(
		Slider Box(
			0,
			1,
			qbinexq,
			qbinexy << reshow
		),
		Text Box( " q" )
	)
);

```

### Blend Colors

**Syntaxe :** color = Blend Colors( color1, color2, &lt;percent2&gt;, &lt;colorSpace&gt;, &lt;hueDirection&gt; )

**Description :** Mélange deux couleurs avec un pourcentage et un espace de couleur paramétrables.

**JMP Version ajoutée :** 18

**Exemple 1**

```jsl

Blend Colors( "black", "white", 0.25 );

```

**Exemple 2**

```jsl

Blend Colors( "red", "blue", "sRGB" );

```

**Exemple 3**

```jsl

Blend Colors( "red", "blue", "lRGB" );

```

**Exemple 4**

```jsl

Blend Colors(
	"red",
	"blue",
	0.5,
	"LUV"
);

```

**Exemple 5**

```jsl

Blend Colors(
	"red",
	"blue",
	0.75,
	"HLS"
);

```

**Exemple 6**

```jsl

c1 = "red";
c2 = "blue";
steps = 20;
New Window( "HLS Radial Color Blending",
	Graph(
		frameSize( 290, 110 ),
		X Scale( 0, 150 ),
		Y Scale( 0, 55 ),
		Suppress Axes,
		Text( {2, 47}, "Short" ),
		Text( {2, 32}, "Long" ),
		Text( {2, 17}, "Positive" ),
		Text( {2, 2}, "Negative" ),
		For( i = 0, i < steps, i += 1,
			x = i * 6 + 30;
			Fill Color(
				Blend Colors(
					c1,
					c2,
					i / (steps - 1),
					"HLS",
					"Short"
				)
			);
			Rect( x, 45, x + 5, 55, 1 );
			Fill Color(
				Blend Colors(
					c1,
					c2,
					i / (steps - 1),
					"HLS",
					"Long"
				)
			);
			Rect( x, 30, x + 5, 40, 1 );
			Fill Color(
				Blend Colors(
					c1,
					c2,
					i / (steps - 1),
					"HLS",
					"Positive"
				)
			);
			Rect( x, 15, x + 5, 25, 1 );
			Fill Color(
				Blend Colors(
					c1,
					c2,
					i / (steps - 1),
					"HLS",
					"Negative"
				)
			);
			Rect( x, 0, x + 5, 10, 1 );
		)
	)
);

```

**Exemple 7**

```jsl

c1 = "blue";
c2 = "red";
steps = 20;
New Window(
	"HCLuv Radial Color Blending",
	Graph(
		frameSize( 290, 110 ),
		X Scale( 0, 150 ),
		Y Scale( 0, 55 ),
		Suppress Axes,
		Text( {2, 47}, "Short" ),
		Text( {2, 32}, "Long" ),
		Text( {2, 17}, "Positive" ),
		Text( {2, 2}, "Negative" ),
		For( i = 0, i < steps, i += 1,
			x = i * 6 + 30;
			Fill Color(
				Blend Colors(
					c1,
					c2,
					i / (steps - 1),
					"HCLuv",
					"Short"
				)
			);
			Rect( x, 45, x + 5, 55, 1 );
			Fill Color(
				Blend Colors(
					c1,
					c2,
					i / (steps - 1),
					"HCLuv",
					"Long"
				)
			);
			Rect( x, 30, x + 5, 40, 1 );
			Fill Color(
				Blend Colors(
					c1,
					c2,
					i / (steps - 1),
					"HCLuv",
					"Positive"
				)
			);
			Rect( x, 15, x + 5, 25, 1 );
			Fill Color(
				Blend Colors(
					c1,
					c2,
					i / (steps - 1),
					"HCLuv",
					"Negative"
				)
			);
			Rect( x, 0, x + 5, 10, 1 );
		)
	)
);

```

### Blob MD5

**Syntaxe :** blobResult = Blob MD5( blob )

**Description :** Crée un BLOB (Binary Large OBject) résultat à 16 octets à partir d&apos;un BLOB source. Le BLOB à 16 octets est la somme de contrôle MD5 (ou le hachage) du BLOB source.

**JMP Version ajoutée :** Avant la version 14

```jsl

Hex(/* make it printable */
	Blob MD5(/* get the hash */
		Load Text File(/* a file from the samples */
			"$SAMPLE_IMPORT_DATA/animals.txt",
			BLOB/* the result is a BLOB, not a string */
		)
	)
) == "763D3C9F5F3E92951B3A3DC965084DAC" /* benchmark hash value */
/* the result is 1 if the benchmark matches */
;

```

### Blob Peek

**Syntaxe :** blobResult = Blob Peek( blob, offset, &lt;length&gt; )

**Description :** Crée un nouveau blob à partir d&apos;une sous-étendue d’octets du blob donné. L’argument offset partant de zéro, le premier octet est à un offset de zéro.

**JMP Version ajoutée :** Avant la version 14

```jsl

Blob Peek(
	Char To Blob(
		"Quick Bob, eat your lunch!"
	),
	6 /*Zero based!*/,
	3
);

```

### Blob To Char

**Syntaxe :** s = Blob To Char( blob, &lt;encoding="utf-8"&gt; )

**Description :** Crée une chaîne de caractères à partir d&apos;un BLOB (grand objet binaire), en utilisant l&apos;encodage spécifié. Encodages pris en charge : utf-8, utf-16le, utf-16be, us-ascii, iso-8859-1, shift_jis, euc-jp, et ascii~hex.

**JMP Version ajoutée :** Avant la version 14

```jsl

Blob To Char(
	Hex To Blob( "436166C3A9" )
) ||
Blob To Char(
	Hex To Blob( "436166C3A9" ),
	"ascii~hex"
);

```

### Blob To Matrix

**Syntaxe :** m = Blob To Matrix( blob, type, bytesEach, endian, &lt;nCols=1&gt; )

**Description :** Construit une matrice en convertissant les octets dans le blob en nombres : type peut être "int", "uint" ou "float" ; bytesEach peut être 1, 2, 4 ou 8 ; endian indique si le premier octet est le plus significatif ("big") ou le moins significatif ("little"); "native" indique le format natif du processeur.

**JMP Version ajoutée :** Avant la version 14

```jsl

Blob To Matrix(
	Hex To Blob( "00010002FFFFFFFE" ),
	"int",
	2,
	"big",
	2
);

```

### Border Box

**Syntaxe :** y = Border Box( &lt;Left( pix )&gt;, &lt;Right( pix )&gt;, &lt;Top( pix )&gt;, &lt;Bottom( pix )&gt;, &lt;Sides( 0 )&gt;, displayBoxArg )

**Description :** Renvoie une boîte d&apos;affichage pour ajouter de l&apos;espace autour de la boîte d&apos;affichage de l&apos;argument.

**JMP Version ajoutée :** Avant la version 14

```jsl

New Window( "Example",
	Lineup Box( N Col( 1 ),
		spacing( 10 ),
		Text Box( "Quadratic Formula" ),
		Border Box( Left( 10 ),
			Right( 10 ), bottom( 10 ),
			top( 10 ), sides( 15 ),
			Expr As Picture(
				Expr(
					(-b
					+Sqrt(
						b ^ 2 - 4 * a *
						c
					)) / (2 * a)
				)
			)
		)
	)
);

```

### Box Cox Inverse Transform

**Syntaxe :** x = Box Cox Inverse Transform( y, lambda )

**Description :** Renvoie la transformation inverse de Box-Cox de l&apos;argument.

**JMP Version ajoutée :** 19

```jsl

Box Cox Inverse Transform( 3, 2 );

```

### Box Cox Transform

**Syntaxe :** y = Box Cox Transform( x, lambda )

**Description :** Renvoie la transformation de Box-Cox de l&apos;argument.

**JMP Version ajoutée :** 19

```jsl

Box Cox Transform( 3, 2 );

```

### Box Plot Seg

**Syntaxe :** b = Box Plot Seg(&lt;data&gt;, &lt;frequency&gt;, &lt;weight&gt;, &lt;vertical=0|1&gt;)

**Description :** Renvoie un groupe d’affichage représentant une boîte à moustaches basée sur les valeurs x et y passées.

**JMP Version ajoutée :** Avant la version 14

```jsl

New Window( "Box Plot Seg Example",
	g =
	Graph Box(
		Frame Size( 40, 180 ),
		Y Scale( 0, 5 ),
		Box Plot Seg( [1, 2, 3, 4] )
	)
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] <<
Find Seg( "Box Plot Seg" ));

```

### Break

**Syntaxe :** Break()

**Description :** Interrompt le flux de contrôle dans une boucle For ou While.

**JMP Version ajoutée :** Avant la version 14

```jsl

For( i = 1, i <= 10, i++,
	If( i == 5, Break() );
	Print( "i=" || Char( i ) );
);

```

### Build Information

**Syntaxe :** y = Build Information()

**Description :** Renvoie l’heure et la date de la version, de la version finale ou de la version de débogage et le nom du produit.

**JMP Version ajoutée :** Avant la version 14

```jsl

Build Information();

```

### Busy Light

**Syntaxe :** y = Busy Light( &lt; &lt;&lt;Automatic(0|1)&gt;, &lt;Size(x, y)&gt;, &lt; &lt;&lt;Disable&gt; )

**Description :** Crée une image en rotation pour indiquer un processus occupé.

**JMP Version ajoutée :** Avant la version 14

```jsl

New Window( "Example",
	Busy Light( <<automatic )
);

```

### Button Box

**Syntaxe :** y = Button Box( title, script )

**Description :** Renvoie une boîte d’affichage illustrant un bouton avec un titre. L&apos;argument script est exécuté lorsque vous cliquez sur la case d’option.

**JMP Version ajoutée :** Avant la version 14

```jsl

New Window( "Example",
	Button Box( "Press Me",
		Print( "Pressed." )
	)
);

```

### Calendar Box

**Syntaxe :** y = Calendar Box()

**Description :** Renvoie une boîte d&apos;affichage contenant un contrôle calendaire. Le calendrier prend en charge la sélection unique d&apos;une date et d&apos;une heure facultative.

**JMP Version ajoutée :** Avant la version 14

```jsl

New Window( "Calendar Box Example",
	Calendar Box()
);

```

### Caption

**Syntaxe :** y = Caption( &lt;{h, v}&gt;, text | remove, &lt;Delayed( seconds )&gt;, &lt;Font(font)&gt;, &lt;Font Size(size)&gt;, &lt;Text Color(color)&gt;, &lt;Back Color(color)&gt;, &lt;Spoken(bool)&gt; )

**Description :** Affiche une fenêtre de légende à la position spécifiée par {h, v} et qui contient le texte spécifié par l’argument text. L’argument Delayed( seconds ) définit le temps d’attente en secondes avant chaque légende.

**JMP Version ajoutée :** Avant la version 14

**Légende formatée**

```jsl

Caption(
	{100, 200},
	"explanation",
	Font( "Arial Black" ),
	Font Size( 16 ),
	Text Color( "blue" ),
	Back Color( "yellow" ),
	Spoken( 1 )
);

```

**Supprimer la légende**

```jsl

Caption( "explanation" );
Wait( 2 );
Caption( remove );

```

### CAS Connect

**Syntaxe :** CAS Connect(&lt;URL(...)&gt;, &lt;Username(...)&gt;, &lt;Password(...)&gt;, &lt;Prompt(Never | Always | IfNeeded)&gt;, &lt;Session("session id")&gt;, &lt;Proxy Server("http://my_proxy:80")&gt;, &lt;Proxy User("proxy_username")&gt;, &lt;Bypass Proxy("http://localhost:80")&gt;, &lt;Certificates(...)&gt;, &lt;Verify Certificates(1 | 0)&gt;, &lt;No Verify Certificates(1 | 0)&gt;, &lt;Timeout(seconds)&gt;, &lt;Authorization Method("Basic" | "Bearer")&gt;)

**Description :** Se connecte à un nouveau serveur CAS. CAS Connect utilise l&apos;URL, le nom d&apos;utilisateur, les arguments de mot de passe et, en option, l&apos;invite et la session. L&apos;invite peut être IfNeeded, Always ou Never. L&apos;URL, le nom d&apos;utilisateur et le mot de passe peuvent être omis si l&apos;argument d&apos;invite est IfNeeded ou Always. La valeur par défaut pour l&apos;invite est Never. La session peut servir à se reconnecter à une session CAS existante. La session doit être valide pour l&apos;URL, le nom d&apos;utilisateur et le mot de passe utilisés pour la connexion. L&apos;argument facultatif Certificates est utile pour fournir des certificats de confiance à CAS pour les connexions https. L&apos;argument facultatif Verify Certificates ou No Verify Certificates est utile pour accepter temporairement les certificats auto-signés. L&apos;argument facultatif Proxy Server est utile pour fournir un hôte proxy dans un environnement proxy. L&apos;argument facultatif Proxy User est utile pour fournir des informations sur l&apos;utilisateur et le mot de passe pour un environnement proxy. L&apos;argument facultatif Bypass Proxy permet d&apos;ignorer le proxy pour certains hôtes. L&apos;argument facultatif Timeout définit une valeur de dépassement de temps pour les opérations de connexion à CAS. L&apos;argument facultatif Authorization Method spécifie comment JMP se connecte à CAS. Cela est dépendant du déploiement de CAS.

**JMP Version ajoutée :** 15

```jsl


url = "http://myCasURL";
cas = CAS Connect(
	URL( url ),
	Username( "myCas_user" ),
	Prompt( Always ),
	Certificates( "c:\mycerts.crt" )
);

```

### CAS Delete Table

**Syntaxe :** CAS Delete Table(tablename, &lt;remove&gt;)

**Description :** Cette action supprime la table de données filesystem. La table de données en mémoire n&apos;est pas affectée. Spécifier Quiet supprimera les erreurs en cas de table de données inexistante. Spécifier remACs supprimera les commandes d&apos;accès pour une table de données. Spécifier Remove supprimera également la table de données de la mémoire.

**JMP Version ajoutée :** 15

```jsl


CAS Connect( Prompt( ifNeeded ) );
CAS Export Data(
	Open( "$SAMPLE_DATA\Big Class.jmp" ),
	"Casuser",
	"Big Class"
);
CAS Delete Table( "Casuser", "Big Class" );

```

### CAS Disconnect

**Syntaxe :** CAS Disconnect()

**Description :** Se déconnecte d&apos;un serveur CAS et, de façon facultative, termine la session. Par défaut, la session est terminée lors de la déconnexion.

**JMP Version ajoutée :** 15

```jsl


url = "http://myCasURL";
cas = CAS Connect(
	URL( url ),
	Username( "myCas_user" ),
	Prompt( Always )
);
CAS Disconnect();

```

### CAS Export Data

**Syntaxe :** y = CAS Export Data(jmp_data_table, cas_libref, cas_dataset, &lt;named_arguments&gt;)

**Description :** Exporte une table de données dans un serveur CAS. La table jmp_data_table est la table de données JMP à exporter, tandis que cas_libref et cas_dataset sont les emplacements cibles sur le serveur CAS. L&apos;argument nommé facultatif est Save(1|0). Lorsqu&apos;une table de données est exportée dans CAS, elle n&apos;est pas conservée dans le système de fichiers CAS, à moins que l&apos;option Enregistrer soit utilisée. La plupart des actions CAS se trouvent en mémoire.

**JMP Version ajoutée :** 15

```jsl


CAS Connect( Prompt( ifNeeded ) );
CAS Export Data(
	Open( "$SAMPLE_DATA\Big Class.jmp" ),
	"CASUSER",
	"Big Class"
);

```

### CAS Get Data Sets

**Syntaxe :** y = CAS Get Data Sets(&lt;"caslib"&gt;)

**Description :** Obtient une liste des ensembles de données CAS disponibles. Ces ensembles de données se trouvent dans le système de fichiers CAS. L&apos;argument facultatif limite la liste des ensembles de données dans la bibliothèque CAS. Si aucun argument n&apos;est spécifié, la liste contiendra le nom complet de l&apos;ensemble de données (library.dataset). Si l&apos;argument est utilisé, la liste sera une liste de noms d&apos;ensembles de données.

**JMP Version ajoutée :** 15

```jsl


cas = Current CAS Connection();
cas << Export Data(
	Open( "$SAMPLE_DATA\Big Class.jmp" ),
	"Casuser",
	"Big Class",
	Save( 1 )
);
datasets = CAS Get Data Sets( "casuser" );
Show( datasets );
cas << Delete Table( "Casuser", "Big Class" );
datasets = CAS Get Data Sets( "casuser" );
Show( datasets );

```

### CAS Get Libraries

**Syntaxe :** y = CAS Get Libraries()

**Description :** Obtient une liste des bibliothèques CAS disponibles.

**JMP Version ajoutée :** 15

```jsl


CAS Connect( Prompt( ifNeeded ) );
libraries = CAS Get Libraries();
Show( libraries );

```

### CAS Import Data

**Syntaxe :** dt = CAS Import Data(libref, dataset, &lt;named_arguments&gt;)

**Description :** Importe une table depuis un serveur CAS. Les arguments nommés facultatifs sont Invisible(0|1), Private(0|1) et UseLabelsForVarNames(0|1).

**JMP Version ajoutée :** 15

```jsl


CAS Connect( Prompt( ifNeeded ) );
CAS Export Data(
	Open( "$SAMPLE_DATA\Big Class.jmp" ),
	"Casuser",
	"Big Class"
);
CAS Import Data( "Casuser.Big Class" );

```

### CAS Is Connected

**Syntaxe :** CAS Is Connected

**Description :** Renvoie 1 si une connexion au serveur CAS est active, 0 dans le cas contraire.

**JMP Version ajoutée :** 15

```jsl


connected = CAS Is Connected();
Show( connected );

```

### CAS Remove Table

**Syntaxe :** CAS Remove Table(tablename, &lt;delete&gt;)

**Description :** Cette action supprime la table en mémoire. Le fichier qui avait été créé lors de la sauvegarde n&apos;est pas affecté. Cette action  entraînera également la suppression de la table dans le système de fichiers.

**JMP Version ajoutée :** 15

```jsl


CAS Connect( Prompt( ifNeeded ) );
CAS Export Data(
	Open( "$SAMPLE_DATA\Big Class.jmp" ),
	"Casuser",
	"Big Class"
);
CAS Remove Table( "Casuser", "Big Class" );

```

### CAS Table To Data Table

**Syntaxe :** dt = CAS Table To Data Table(jsonstring, &lt;Invisible(1|0) | Private(1|0) | Use Labels for Var Names(1|0)&gt;)

**Description :** Convertit un texte JSON de table de données CAS SAS en une table de données JMP.

**JMP Version ajoutée :** 15

```jsl


json =
"\[
{
  "_ctb": true,
  "label": "Selected Rows from Table BIG CLASS",
  "name": "Fetch",
  "title": "Selected Rows from Table BIG CLASS",
  "schema": [
    {
      "format": "",
      "label": "",
      "name": "_Index_",
      "type": "int",
      "width": 4
    },
    {
      "format": "",
      "label": "",
      "name": "name",
      "type": "string",
      "width": 9
    },
    {
      "format": "",
      "label": "",
      "name": "age",
      "type": "double",
      "width": 8
    },
    {
      "format": "",
      "label": "",
      "name": "sex",
      "type": "string",
      "width": 1
    },
    {
      "format": "",
      "label": "",
      "name": "height",
      "type": "double",
      "width": 8
    },
    {
      "format": "",
      "label": "",
      "name": "weight",
      "type": "double",
      "width": 8
    }
  ],
  "rows": [
    [
      1,
      "KATIE",
      12,
      "F",
      59,
      95
    ],
    [
      2,
      "LOUISE",
      12,
      "F",
      61,
      123
    ],
    [
      3,
      "JANE",
      12,
      "F",
      55,
      74
    ],
    [
      4,
      "JACLYN",
      12,
      "F",
      66,
      145
    ],
    [
      5,
      "LILLIE",
      12,
      "F",
      52,
      64
    ],
    [
      6,
      "TIM",
      12,
      "M",
      60,
      84
    ],
    [
      7,
      "JAMES",
      12,
      "M",
      61,
      128
    ],
    [
      8,
      "ROBERT",
      12,
      "M",
      51,
      79
    ],
    [
      9,
      "BARBARA",
      13,
      "F",
      60,
      112
    ],
    [
      10,
      "ALICE",
      13,
      "F",
      61,
      107
    ],
    [
      11,
      "SUSAN",
      13,
      "F",
      56,
      67
    ],
    [
      12,
      "JOHN",
      13,
      "M",
      65,
      98
    ],
    [
      13,
      "JOE",
      13,
      "M",
      63,
      105
    ],
    [
      14,
      "MICHAEL",
      13,
      "M",
      58,
      95
    ],
    [
      15,
      "DAVID",
      13,
      "M",
      59,
      79
    ],
    [
      16,
      "JUDY",
      14,
      "F",
      61,
      81
    ],
    [
      17,
      "ELIZABETH",
      14,
      "F",
      62,
      91
    ],
    [
      18,
      "LESLIE",
      14,
      "F",
      65,
      142
    ],
    [
      19,
      "CAROL",
      14,
      "F",
      63,
      84
    ],
    [
      20,
      "PATTY",
      14,
      "F",
      62,
      85
    ]
  ]
}
]\";
dt = CAS Table To Data Table( json );

```

### CAS Terminate Sessions

**Syntaxe :** CAS Terminate Sessions

**Description :** Termine toutes les sessions CAS de l&apos;utilisateur actuel.

**JMP Version ajoutée :** 15

```jsl


CAS Connect( Prompt( ifNeeded ) );
CAS Terminate Sessions();

```

### Cauchy Density

**Syntaxe :** y = Cauchy Density( q, &lt;center&gt;, &lt;scale&gt; )

**Description :** Renvoie la densité à q d&apos;une distribution de Cauchy avec un centre mu et une échelle sigma.

**JMP Version ajoutée :** Avant la version 14

```jsl

New Window( "Example: Cauchy Density",
	y = Graph Box(
		Y Scale( 0, .4 ),
		X Scale( -6, 6 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( Cauchy Density( q ), q );
	)
);

```

### Cauchy Distribution

**Syntaxe :** p = Cauchy Distribution( q, &lt;center&gt;, &lt;scale&gt; )

**Description :** Renvoie la probabilité qu&apos;une variable aléatoire distribuée selon Cauchy soit inférieure à q.

**JMP Version ajoutée :** Avant la version 14

```jsl

New Window( "Example: Cauchy Distribution",
	y = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( -6, 6 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( Cauchy Distribution( q ), q );
	)
);

```

### Cauchy Quantile

**Syntaxe :** q = Cauchy Quantile( p, &lt;center&gt;, &lt;scale&gt; )

**Description :** Renvoie le quantile d&apos;une distribution de Cauchy, correspondant à la probabilité p qu’une variable aléatoire ayant cette distribution prenne une valeur inférieure au quantile.

**JMP Version ajoutée :** Avant la version 14

```jsl

New Window( "Example: Cauchy Quantile",
	Graph Box(
		Y Scale( -6, 6 ),
		X Scale( 0, 1 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( Cauchy Quantile( p ), p );
	)
);

```

### CDF

**Syntaxe :** {QuantVec, CumProbVec} = CDF( Y )

**Description :** Renvoie les valeurs de la fonction de distribution empirique de probabilité cumulée du vecteur ou de la liste Y. La probabilité cumulée est la proportion des valeurs de données inférieures ou égales à l’entrée correspondante dans le vecteur QuantVec

**JMP Version ajoutée :** Avant la version 14

```jsl

/* Generate random values, Normal(0,1) */
Y = J( 150, 1, Random Normal() );

/* CDF function */
{Quant, CumProb} = CDF( Y ); 

/* Draw empirical and theorical CDF */
New Window( "Empirical CDF",
	Graph Box(
		X Scale( -3, 3 ),
		Y Scale( 0, 1 ),
		Pen Color( "red" );
		For( i = 2, i <= N Row( Quant ), i++,
			H Line(
				Quant[i - 1],
				Quant[i],
				CumProb[i]
			);
			V Line(
				Quant[i - 1],
				CumProb[i - 1],
				CumProb[i]
			);
		);
		i = N Row( Quant );
		V Line( Quant[i], CumProb[i], 1 );
		Pen Color( "blue" );
		Y Function( Normal Distribution( q ), q );
	)
);

```

### Ceiling

**Syntaxe :** y = Ceiling( x )

**Description :** Renvoie le plus petit entier supérieur ou égal à  x. L’argument peut être un nombre, une matrice ou une liste de nombres.

**JMP Version ajoutée :** Avant la version 14

```jsl

Ceiling( 1.2 );

```

### Char

**Syntaxe :** s = Char( x, &lt;w&gt;, &lt;d&gt;, &lt; &lt;&lt;Use Locale( Boolean ) &gt;, &lt; &lt;&lt;Full Precision( Boolean ) &gt; )

**Description :** Renvoie une représentation de x sous forme de chaîne de caractères, en utilisant la largeur maximale w et le nombre de décimales d si l&apos;argument x est numérique. <<FullPrecision écrit des valeurs numériques en utilisant toutes les précisions disponibles.

**JMP Version ajoutée :** Avant la version 14

**Précision complète**

```jsl

Show(
	Char( 88.54 ),
	Char( 88.54, <<Full Precision( 1 ) )
);

```

**Simple**

```jsl

Char( Pi(), 10, 4 );

```

**Utiliser Local**

```jsl

Char( 2.1, <<Use Locale( 1 ) );

```

### Char To Blob

**Syntaxe :** blob = Char To Blob( string, &lt;encoding="utf-8"&gt; )

**Description :** Crée un BLOB (grand objet binaire) à partir d&apos;une chaîne de caractères, en utilisant l&apos;encodage spécifié. Encodages pris en charge : utf-8, utf-16le, utf-16be, us-ascii, iso-8859-1, shift_jis, euc-jp, et ascii~hex.

**JMP Version ajoutée :** Avant la version 14

```jsl

Char To Blob( "Café", "utf-16be" );

```

### Char To Hex

**Syntaxe :** h = Char To Hex( value, &lt;"integer"&gt;|&lt;encoding="utf-8"&gt; )

**Description :** Renvoie le texte hexadécimal correspondant à la valeur et au code donnés. Il peut s&apos;agir d&apos;un nombre, d&apos;une chaîne ou d&apos;un blob. Si la valeur est un nombre, le code 64 bits IEEE 754 est utilisé, sauf si l&apos;argument facultatif "integer" est fourni. Les codes pris en charge sont notamment : utf-8, utf-16le, utf-16be, us-ascii, iso-8859-1, ascii~hex, shift_jis, et euc-jp.

**JMP Version ajoutée :** Avant la version 14

```jsl

Hex( 1024, "integer" ) || " " ||
Hex( "Café", "utf-16be" );

```

### Char To Path

**Syntaxe :** m = Char To Path( pathText )

**Description :** Convertit une spécification de chemin sous forme de caractère en une sous forme de matrice.

**JMP Version ajoutée :** Avant la version 14

```jsl

Show(
	Char To Path(
		"M10 10 L50 10 L30 50 Z M20 20 L40 20 L30 40 Z"
	)
);

```

### Check Box

**Syntaxe :** y = Check Box( {item, ...}, &lt;script&gt; )

**Description :** Renvoie une boîte d&apos;affichage pour afficher une ou plusieurs cases à cocher.

**JMP Version ajoutée :** Avant la version 14

```jsl

New Window( "Example",
	cb = Check Box(
		{"Good"},
		Show( cb << Get() )
	)
);

```

### ChiSquare Density

**Syntaxe :** p = ChiSquare Density( q, df, &lt;nonCentrality=0&gt; )

**Description :** Renvoie la densité au point q d’une Khi deux avec df degré(s) de liberté.

**JMP Version ajoutée :** Avant la version 14

```jsl

cdedf = 2;
New Window( "Example: ChiSquare Density",
	cdey =
	Graph Box(
		Y Scale( 0, 0.4 ),
		X Scale( 0, 10 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function(
			ChiSquare Density( cdeq, cdedf ),
			cdeq
		);
		Text(
			{7, 0.35},
			"df=",
			Round( cdedf, 2 )
		);
	),
	H List Box(
		Text Box( "df " ),
		Slider Box(
			0.5,
			10,
			cdedf,
			cdey << reshow
		)
	)
);

```

### ChiSquare Distribution

**Syntaxe :** p = ChiSquare Distribution( q, df, &lt;nonCentrality=0&gt; )

**Description :** Renvoie la probabilité qu&apos;une variable aléatoire distribuée selon Khi deux est inférieure à q.

**JMP Version ajoutée :** Avant la version 14

```jsl

cdidf = 2;
New Window( "Example: ChiSquare Distribution",
	cdiy =
	Graph Box(
		Y Scale( 0, 1 ),
		X Scale( 0, 10 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function(
			ChiSquare Distribution( cdiq, cdidf ),
			cdiq
		);
		Text(
			{1, 0.9},
			"df=",
			Round( cdidf, 2 )
		);
	),
	H List Box(
		Text Box( "df " ),
		Slider Box(
			0.5,
			10,
			cdidf,
			cdiy << reshow
		)
	)
);

```

### ChiSquare Log CDistribution

**Syntaxe :** y = ChiSquare Log CDistribution( x, df, &lt;nonCentrality=0&gt; )

**Description :** Renvoie le logarithme de 1 - Distribution selon le Khi deux.

**JMP Version ajoutée :** Avant la version 14

```jsl

clcdidf = 2;
New Window(
	"Example: ChiSquare Log CDistribution",
	clcdiy =
	Graph Box(
		Y Scale( -4, 0.05 ),
		X Scale( 0, 10 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function(
			ChiSquare Log CDistribution(
				clcdiq,
				clcdidf
			),
			clcdiq
		);
		Text(
			{1, -0.9},
			"df=",
			Round( clcdidf, 2 )
		);
	),
	H List Box(
		Text Box( "df " ),
		Slider Box(
			1,
			10,
			clcdidf,
			clcdiy << reshow
		)
	)
);

```

### ChiSquare Log Density

**Syntaxe :** y = ChiSquare Log Density( x, df, &lt;nonCentrality=0&gt; )

**Description :** Renvoie le logarithme de la densité de probabilité de Khi deux.

**JMP Version ajoutée :** Avant la version 14

```jsl

cldedf = 1;
New Window( "Example: ChiSquare Log Density",
	cldey =
	Graph Box(
		Y Scale( -4, 0.05 ),
		X Scale( 0, 10 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function(
			ChiSquare Log Density(
				cldeq,
				cldedf
			),
			cldeq
		);
		Text(
			{7, -0.35},
			"df=",
			Round( cldedf, 2 )
		);
	),
	H List Box(
		Text Box( "df " ),
		Slider Box(
			0.5,
			10,
			cldedf,
			cldey << reshow
		)
	)
);

```

### ChiSquare Log Distribution

**Syntaxe :** y = ChiSquare Log Distribution( x, df, &lt;nonCentrality=0&gt; )

**Description :** Renvoie le logarithme de la distribution selon le Khi deux.

**JMP Version ajoutée :** Avant la version 14

```jsl

cldidf = 2;
New Window( "Example: ChiSquare Log Distribution",
	cldiy =
	Graph Box(
		Y Scale( -4, 0.05 ),
		X Scale( 0, 10 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function(
			ChiSquare Log Distribution(
				cldiq,
				cldidf
			),
			cldiq
		);
		Text(
			{1, -0.9},
			"df=",
			Round( cldidf, 2 )
		);
	),
	H List Box(
		Text Box( "df " ),
		Slider Box(
			1,
			10,
			cldidf,
			cldiy << reshow
		)
	)
);

```

### ChiSquare Noncentrality

**Syntaxe :** nc = ChiSquare Noncentrality( x, df, prob )

**Description :** Renvoie le paramètre de non-centralité nc de sorte que prob soit égale à la probabilité selon laquelle une variable aléatoire distribuée selon le Khi deux avec df degré(s) de liberté soit inférieure à x.

**JMP Version ajoutée :** Avant la version 14

```jsl

New Window( "Example: ChiSquare Noncentrality",
	chincgr =
	Graph Box(
		Y Scale( 0.01, 0.99 ),
		X Scale( 0.01, 0.99 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function(
			ChiSquare Noncentrality(
				3,
				2,
				ChiSquare Distribution( 3, 2, q )
			),
			q
		);
	)
);
ChiSquare Noncentrality(
	3,
	2,
	ChiSquare Distribution( 3, 2, 0.5 )
);

```

### ChiSquare Quantile

**Syntaxe :** q = ChiSquare Quantile( p, df, &lt;nonCentrality=0&gt; )

**Description :** Renvoie le quantile d’une distribution khi-deux, correspondant à la probabilité p qu’une variable aléatoire ayant cette distribution prenne une valeur inférieure au quantile.

**JMP Version ajoutée :** Avant la version 14

```jsl

ChiSquare Quantile( 0.15, 5 );

```

### Chol Update

**Syntaxe :** L2 = Chol Update( L, V, C )

**Description :** Renvoie une racine de Cholesky mise à jour de A+V*C*V&apos; où C est une matrice symétrique m par m et V une matrice n par m. L&apos;argument L doit être la racine de Cholesky d&apos;une matrice A n par n.

**JMP Version ajoutée :** Avant la version 14

```jsl

/* The inner product of a design matrix */
exS = [16 1 0 11 -1 12,
1 11 -1 1 -1 1,
0 -1 12 -1 1 0,
11 1 -1 11 -1 9,
-1 -1 1 -1 9 -1,
12 1 0 9 -1 12];
/* Conduct the Cholesky decomposition */
exAchol = Cholesky( exS );

/* Two column vectors to be applied to change the design matrix */
exV = [1 1, 0 0, 0 1, 0 0, 0 0, 0 1];

/* The first column vector is added to one of the rows in the design matrix */
/* The second column vector is subtracted from one of the rows in the design matrix */
exC = [1 0, 0 -1];

/* Update the Cholesky decomposition manually */
exAnew = exS + exV * exC * exV`;
exAcholnew = Cholesky( exAnew );

/* Update the Cholesky decomposition more efficiently */
exAcholnew_test =
Chol Update( exAchol, exV, exC );

/* Results are the same */
Show( exAcholnew_test );
Show( exAcholnew );

```

### Cholesky

**Syntaxe :** L = Cholesky( A )

**Description :** Renvoie la décomposition de Cholesky d&apos;une matrice semi-définie positive. L est une matrice triangulaire inférieure telle que L*L` = A.

**JMP Version ajoutée :** Avant la version 14

```jsl

Cholesky( [1 2, 2 13] );

```

### Choose

**Syntaxe :** y = Choose( i, expr1, expr2, ..., exprElse )

**Description :** Calcule et renvoie le i-ième argument de expr ou l’argument exprElse s’il n’y a pas de i-ième expr argument.

**JMP Version ajoutée :** Avant la version 14

```jsl

Choose( Random Integer( 1, 5 ),
	"red",
	"blue",
	"other"
);

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

**Autoriser les modifications**

```jsl

Choose Closest( "MARTA", {"MARTHA"}, Max Edit Count( 2 ) );

```

**Choisir entre les chaînes, pas de modifications**

```jsl

Choose Closest( "MARTHA_", {"Martha", "MARY"} );

```

**Conserver la ponctuation**

```jsl

Choose Closest( "MARTHA_", {"MARTHA"}, Ignore Punctuation( 0 ) );

```

**Sans correspondance**

```jsl

Choose Closest(
	"MARTHA",
	{"Martha"},
	Ignore Case( 0 ),
	Unmatched()
);

```

### Circle

**Syntaxe :** Circle( {x, y}, radius|PixelRadius( px ), ..., &lt;"FILL"&gt; )

**Description :** Dessine un cercle centré sur {x, y}. Le rayon peut être spécifié en tant que nombre entier en fonction de l&apos;axe vertical ou comme un nombre de pixels. Un rayon exprimé en pixels donne un cercle dont la taille n&apos;est pas modifiée lorsque l&apos;axe vertical change. Les arguments peuvent être répétés dans n&apos;importe quel ordre pour dessiner de nombreux cercles. Le paramètre "FILL", s&apos;il est utilisé, doit être le dernier et colorie les cercles avec la couleur de remplissage au lieu de les dessiner avec la couleur du stylo.

**JMP Version ajoutée :** Avant la version 14

```jsl

New Window( "Example",
	Graph Box(
		Pen Color( "red" );
		Circle(
			{20, 20},
			4,
			7,
			10/* no fill for concentric circles */
		);
		Fill Color( "blue" );
		Transparency( .25 );/* transparent fill for concentric circles */
		Circle( {60, 20}, 4, 7, 10, "FILL" );
		Fill Color( "green" );
		Transparency( 1 );/* solid fill */
		Circle(
			PixelRadius( 18 ),
			{40, 20},
			{40, 50},
			{40, 80},
			"FILL"
		);
	)
);

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
			complex(
				real * y:real - imag * y:imag,
				imag * y:real + real * y:imag
			)
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

### Clear Global Window Handler

**Syntaxe :** Clear Global Window Handler()

**Description :** Efface un gestionnaire de fenêtre précédemment défini par Définir un gestionnaire de fenêtre global.

**JMP Version ajoutée :** 17

```jsl

Set Global Window Handler(
	Function( {window},
		Print( window << get window title() );
		window << close window();
	)
);
New Window( "My Window" );
Clear Global Window Handler();

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

### Clipboard Capture

**Syntaxe :** clp = Clipboard Capture( box &lt;&lt; Copy )

**Description :** If the JSL within this function would have normally copied something to the OS Clipboard, it is instead copied to a Clipboard object and returned.

**JMP Version ajoutée :** 19

```jsl


dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:height << Set Property( "Units", "in" );
clp = Clipboard Capture(
	dt << Select Columns( :height ) << Copy Column Properties
);
Show( Get Clipboard() );
Show( clp << Get Flavor Data( "Text", <<Text ) );

```

### Close

**Syntaxe :** Close( &lt;dataTableRef|name&gt;, &lt;NoSave|Save( "path" )&gt; )

**Description :** Ferme la table de données référencée par le premier argument, qui est par défaut la table de données active du projet actif (sauf si le script n&apos;est pas exécuté dans un projet).



Pour spécifier un projet, utilisez l&apos;argument facultatif Project() avec un titre, un index, une boîte d&apos;affichage ou un objet fenêtre. Utilisez Project(0) pour spécifier que le script n&apos;est pas exécuté dans un projet.



Le deuxième argument est utilisé pour enregistrer la table de données. Utilisez une extension de fichier appropriée pour enregistrer la table de données sous un format non JMP. Si vous spécifiez NoSave, l&apos;invite à enregistrer ou ignorer les modifications ne sera pas affichée.

**JMP Version ajoutée :** Avant la version 14

```jsl

exdt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 3 );
Close( exdt, NoSave );

```

### Close All

**Syntaxe :** Close All( &lt;Project(title|index|box|window)&gt;, Data Tables | Reports | Journals, &lt;invisible | private&gt;, &lt;NoSave|Save&gt; )

**Description :** Ferme toutes les ressources d&apos;un type spécifique ouvertes : tables de données, journaux ou rapports.



Seules les fenêtres du projet actif (sauf si le script n&apos;est pas exécuté dans un projet) seront fermées. Pour spécifier un projet, utilisez l&apos;argument facultatif Project() avec un titre, un index, une boîte d&apos;affichage ou un objet fenêtre. Utilisez Project(0) pour spécifier que le script n&apos;est pas exécuté dans un projet.

**JMP Version ajoutée :** Avant la version 14

```jsl

exdt1 = Open( "$SAMPLE_DATA/Big Class.jmp" );
exdt2 = Open( "$SAMPLE_DATA/Animals.jmp" );
Wait( 3 );
Close All( Data Tables, NoSave );

```

### Close Database Connection

**Syntaxe :** Close Database Connection(databaseConnectionHandle)

**Description :** Ferme la connexion à la base de données renvoyée par la commande Créer une connexion à la base de données

**JMP Version ajoutée :** Avant la version 14

```jsl

Close Database Connection( databaseConnectionHandle );

```

### Close Log

**Syntaxe :** Close Log()

**Description :** Fermer la fenêtre log

**JMP Version ajoutée :** Avant la version 14

```jsl

Close Log();
Show( Is Log Open() );

```

### Col At

**Syntaxe :** y = Col At( col, index, &lt;byVar, ...&gt;, &lt; &lt;&lt;relative(bool)&gt;, &lt; &lt;&lt;skip missing(expr)&gt; )

**Description :** Renvoie la valeur de col à la position de ligne index dans son groupe byVar. Les lignes dont l&apos;expression skip missing est évaluée comme une valeur manquante ne sont pas incluses dans l&apos;index.

**JMP Version ajoutée :** 19

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
New Column( "Lag Height by Sex",
	Formula( Col At( :height, -1, :sex, <<relative( 1 ) ) )
);
New Column( "Relative to First Height",
	Formula( :height / Col At( :height, 1, :sex ) )
);
New Column( "Relative to Last Height",
	Formula( :height / Col At( :height, -1, :sex ) )
);

```

### Col Box

**Syntaxe :** y = Col Box( title, boxes )

**Description :** Renvoie une boîte de colonnes composée des boîtes d’affichage en question.

**JMP Version ajoutée :** Avant la version 14

```jsl

dt = New Window( "Example",
	exx = 1;
	exy = 4;
	exz = 8;
	Table Box(
		String Col Box( "strings", {"x", "y", "z"} ),
		Col Box(
			"boxes",
			Slider Box( 0, 10, exx, Show( exx ) ),
			Slider Box( 0, 10, exy, Show( exy ) ),
			Slider Box( 0, 10, exz, Show( exz ) )
		)
	);
);

```

### Col Cumulative Sum

**Syntaxe :** y = Col Cumulative Sum( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt;, &lt; &lt;&lt; Freq( freqCol ) &gt; )

**Description :** Renvoie la somme cumulée pour la ligne en cours. Il n&apos;est pas nécessaire d&apos;effectuer un tri préalable des variables Par.

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row() = 40;
Col Cumulative Sum( :height, :sex );

```

**Exemple 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) <<
Exclude;
dt << New Column( "Col Cumulative Sum for each Sex",
	Formula( Col Cumulative Sum( :height, :sex ) )
);
dt << New Column(
	"Col Cumulative Sum for each Sex grouped by Excluded",
	Formula(
		Col Cumulative Sum(
			:height,
			:sex,
			Excluded( Row State() )
		)
	)
);

```

### Col Interpolate

**Syntaxe :** y = Col Interpolate( v, xCol, yCol, &lt;byVar, ...&gt;, &lt; &lt;&lt;method(linear|nearest|previous|next)&gt;, &lt; &lt;&lt;extrapolate(bool)&gt; )

**Description :** Renvoie une valeur interpolée dans yCol, correspondant à la position de v, où xCol]. Values outside the range of xCol seront manquantes, sauf si extrapolate est activé, et dans ce cas la valeur yCol la plus proche sera renvoyée.

**JMP Version ajoutée :** 19

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/GNP.jmp" );
dt << New Column( "date30", Formula( :date + 30 ) );
dt << New Column( "gnp30",
	Formula(
		Col Interpolate(
			:date30,
			:date,
			:"gross national product ($billions)"n
		)
	)
);

```

### Col List Box

**Syntaxe :** y = Col List Box( &lt;Data Table( name )&gt;, &lt;all&gt;|&lt;character|numeric&gt;, &lt;width( pix )&gt;, &lt;grouped&gt;, &lt;maxSelected( n )&gt;, &lt;nlines( n )&gt;, &lt;MaxItems( n )&gt;, &lt;MinItems( n )&gt;, &lt;onChange( expr )&gt;, &lt; &lt;&lt;Modeling Type({"Any","Continuous","Nominal","Ordinal","Multiple Response","Unstructured Text","Vector","None","Row State"}) &gt;, &lt; &lt;&lt; Set Data Type(Any|Numeric|Character)&gt;, &lt;script&gt; )

**Description :** Renvoie une boîte d&apos;affichage pour afficher la zone de liste permettant de sélectionner les colonnes de la table de données. Utiliser le message <<Modeling Type pour autoriser les types de modélisation spécialisée ou pour restreindre les types autorisés. La valeur par défaut "Any" autorisera toutes les colonnes avec un type de modélisation classique ("Continuous", "Nominal", "Ordinal").

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Col List Box Example 1",
	Col List Box( all, width( 250 ), maxSelected( 1 ) )
);

```

**Exemple 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Col List Box Example 2",
	Col List Box(
		all,
		<<Set Data Type( "numeric" ),
		width( 250 ),
		maxSelected( 1 )
	)
);

```

**Exemple 3**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Col List Box Example 3",
	H List Box(
		ll1 = Col List Box( all ),
		Button Box( "Add",
			ll2 << append( ll1 << get selected )
		),
		ll2 = Col List Box(
			"numeric",
			MaxItems( 1 ),
			nlines( 1 )
		),
		Button Box( "Remove", ll2 << remove selected )
	)
);

```

### Col Max

**Syntaxe :** y = Col Maximum( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt; )

**Description :** Renvoie la valeur maximale entre les lignes d&apos;une colonne. Le résultat est mis en cache en interne afin que les évaluations multiples soient efficaces. Les arguments facultatifs byVar spécifient des groupes pour le calcul. Notez que les arguments byVar doivent être utilisés dans une formule de colonne ou dans une fonction For Each Row() .

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Maximum( :height );

```

**Exemple 2**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Maximum( :height, :age ) ) );

```

**Exemple 3**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Maximum Value for Each Age and Sex Group",
	Formula( Col Maximum( :height, :age, :sex ) )
);

```

**Exemple 4**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) <<
Exclude;
dt << New Column( "Col Max for each Sex",
	Formula( Col Maximum( :height, :sex ) )
);
dt << New Column( "Col Max for each Sex grouped by Excluded",
	Formula(
		Col Maximum( :height, :sex, Excluded( Row State() ) )
	)
);

```

### Col Maximum

**Syntaxe :** y = Col Maximum( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt; )

**Description :** Renvoie la valeur maximale entre les lignes d&apos;une colonne. Le résultat est mis en cache en interne afin que les évaluations multiples soient efficaces. Les arguments facultatifs byVar spécifient des groupes pour le calcul. Notez que les arguments byVar doivent être utilisés dans une formule de colonne ou dans une fonction For Each Row() .

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Maximum( :height );

```

**Exemple 2**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Maximum( :height, :age ) ) );

```

**Exemple 3**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Maximum Value for Each Age and Sex Group",
	Formula( Col Maximum( :height, :age, :sex ) )
);

```

**Exemple 4**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) <<
Exclude;
dt << New Column( "Col Max for each Sex",
	Formula( Col Maximum( :height, :sex ) )
);
dt << New Column( "Col Max for each Sex grouped by Excluded",
	Formula(
		Col Maximum( :height, :sex, Excluded( Row State() ) )
	)
);

```

### Col Mean

**Syntaxe :** y = Col Mean( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt;, &lt; &lt;&lt; Freq( freqCol ) &gt; )

**Description :** Renvoie la moyenne d&apos;un échantillon pour les lignes d&apos;une colonne. Le résultat est mis en cache en interne afin que les évaluations multiples soient efficaces. Les arguments facultatifs byVar spécifient des groupes pour le calcul. Notez que les arguments byVar doivent être utilisés dans une formule de colonne ou dans une fonction For Each Row() .

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Mean( :height );

```

**Exemple 2**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Mean( :height, <<Freq( :weight ) );

```

**Exemple 3**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Mean( :height, :age ) ) );

```

**Exemple 4**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Mean for Each Age and Sex Group",
	Formula( Col Mean( :height, :age, :sex ) )
);

```

**Exemple 5**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) <<
Exclude;
dt << New Column( "Col Mean for each Sex",
	Formula( Col Mean( :height, :sex ) )
);
dt << New Column( "Col Mean for each Sex grouped by Excluded",
	Formula(
		Col Mean( :height, :sex, Excluded( Row State() ) )
	)
);

```

### Col Median

**Syntaxe :** y = Col Median( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt;, &lt; &lt;&lt; Freq( freqCol ) &gt; )

**Description :** Renvoie la médiane spécifiée pour toutes les lignes d&apos;une colonne. L&apos;ordre est mis en cache de façon interne afin que les évaluations multiples soient efficaces.

**JMP Version ajoutée :** 15

**Exemple 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Col Median Height",
	numeric,
	continuous,
	formula( Col Median( :height ) )
);
dt << New Column( "Col Median Height by Age",
	numeric,
	continuous,
	formula( Col Median( :height, :age ) )
);

```

**Exemple 2**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row() = 1;
Show( Col Median( :height ) );
Row() = 1;
Show( Col Median( :height, :age ) );

```

**Exemple 3**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) <<
Exclude;
dt << New Column( "Col Median for each Sex",
	Formula( Col Median( :height, :sex ) )
);
dt << New Column( "Col Median for each Sex grouped by Excluded",
	Formula(
		Col Median( :height, :sex, Excluded( Row State() ) )
	)
);

```

### Col Min

**Syntaxe :** y = Col Minimum( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt; )

**Description :** Renvoie la valeur minimale entre les lignes d&apos;une colonne. Le résultat est mis en cache en interne afin que les évaluations multiples soient efficaces. Les arguments facultatifs byVar spécifient des groupes pour le calcul. Notez que les arguments byVar doivent être utilisés dans une formule de colonne ou dans une fonction For Each Row() .

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Minimum( :height );

```

**Exemple 2**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Minimum( :height, :age ) ) );

```

**Exemple 3**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Minimum Value for Each Age and Sex Group",
	Formula( Col Minimum( :height, :age, :sex ) )
);

```

**Exemple 4**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) <<
Exclude;
dt << New Column( "Col Min for each Sex",
	Formula( Col Minimum( :height, :sex ) )
);
dt << New Column( "Col Min for each Sex grouped by Excluded",
	Formula(
		Col Minimum( :height, :sex, Excluded( Row State() ) )
	)
);

```

### Col Minimum

**Syntaxe :** y = Col Minimum( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt; )

**Description :** Renvoie la valeur minimale entre les lignes d&apos;une colonne. Le résultat est mis en cache en interne afin que les évaluations multiples soient efficaces. Les arguments facultatifs byVar spécifient des groupes pour le calcul. Notez que les arguments byVar doivent être utilisés dans une formule de colonne ou dans une fonction For Each Row() .

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Minimum( :height );

```

**Exemple 2**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Minimum( :height, :age ) ) );

```

**Exemple 3**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Minimum Value for Each Age and Sex Group",
	Formula( Col Minimum( :height, :age, :sex ) )
);

```

**Exemple 4**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) <<
Exclude;
dt << New Column( "Col Min for each Sex",
	Formula( Col Minimum( :height, :sex ) )
);
dt << New Column( "Col Min for each Sex grouped by Excluded",
	Formula(
		Col Minimum( :height, :sex, Excluded( Row State() ) )
	)
);

```

### Col Mode

**Syntaxe :** y = Col Mode( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt;, &lt; &lt;&lt; Freq( freqCol ) &gt; )

**Description :** Renvoie le mode d&apos;un échantillon pour les lignes d&apos;une colonne, en sélectionnant le plus petit dans le cas de plusieurs modes. Le résultat est mis en cache en interne afin que les évaluations multiples soient efficaces. Les arguments facultatifs byVar spécifient des groupes pour le calcul. Notez que les arguments byVar doivent être utilisés dans une formule de colonne ou dans une fonction For Each Row().

**JMP Version ajoutée :** 17

**Exemple 1**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Mode( :height );

```

**Exemple 2**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Mode( :height, :age ) ) );

```

**Exemple 3**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Mode for Each Age and Sex Group",
	Formula( Col Mode( :height, :age, :sex ) )
);

```

**Exemple 4**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) <<
Exclude;
dt << New Column( "Col Mode for each Sex",
	Formula( Col Mode( :height, :sex ) )
);
dt << New Column( "Col Mode for each Sex grouped by Excluded",
	Formula(
		Col Mode( :height, :sex, Excluded( Row State() ) )
	)
);

```

### Col Moving Average

**Syntaxe :** y = Col Moving Average( xCol, &lt;weighting=0.25&gt;, &lt;before=-1&gt;, &lt;after=0&gt;, &lt;partial window is missing=1&gt;, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt; )

**Description :** Renvoie la moyenne mobile sur un intervalle donné basé sur la ligne en cours. Pour le multiplicateur de pondération, 1 correspond à une pondération égale, 0 à une pondération linéaire, et les autres valeurs agissent comme un multiplicateur de pondération exponentielle.  Il n&apos;est pas nécessaire d&apos;effectuer un tri préalable des variables Par.

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row() = 40;
Col Moving Average( :height, 1, 5, 0, :sex );

```

**Exemple 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) <<
Exclude;
dt << New Column( "Col Moving Average for each Sex",
	Formula( Col Moving Average( :height, :sex ) )
);
dt << New Column(
	"Col Moving Average for each Sex grouped by Excluded",
	Formula(
		Col Moving Average(
			:height,
			:sex,
			Excluded( Row State() )
		)
	)
);

```

### Col N Missing

**Syntaxe :** y = Col N Missing( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt; )

**Description :** Renvoie le nombre de valeurs manquantes parmi les lignes d&apos;une colonne. Le résultat est mis en cache en interne afin que les évaluations multiples soient efficaces. Les arguments facultatifs byVar spécifient des groupes pour le calcul. Notez que les arguments byVar doivent être utilisés dans une formule de colonne ou dans une fonction For Each Row() .

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Col N Missing( :height );

```

**Exemple 2**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col N Missing( :height, :age ) ) );

```

**Exemple 3**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column(
	"Number of Missing Values for Each Age and Sex Group",
	Formula( Col N Missing( :height, :age, :sex ) )
);

```

**Exemple 4**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:height[10] = .;
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) <<
Exclude;
dt << New Column( "Col N Missing for each Sex",
	Formula( Col N Missing( :height, :sex ) )
);
dt << New Column(
	"Col N Missing for each Sex grouped by Excluded",
	Formula(
		Col N Missing( :height, :sex, Excluded( Row State() ) )
	)
);

```

### Col N Unique

**Syntaxe :** y = Col N Unique( xCol, &lt;byVar, ...&gt;, &lt; &lt;&lt;score missing(bool)&gt; )

**Description :** Renvoie le nombre de valeurs uniques dans une colonne. Si les valeurs manquantes sont demandées, tous les codes d&apos;une valeur manquante sont comptés comme une seule valeur.

**JMP Version ajoutée :** 19

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
New Column( "N unique age by sex",
	Formula( Col N Unique( :age, :sex ) )
);
New Column( "N unique height by age",
	Formula( Col N Unique( :height, :age ) )
);

```

### Col Number

**Syntaxe :** y = Col Number( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt;, &lt; &lt;&lt; Freq( freqCol ) &gt; )

**Description :** Renvoie le nombre de valeurs non manquantes parmi les lignes d&apos;une colonne. Le résultat est mis en cache en interne afin que les évaluations multiples soient efficaces. Les arguments facultatifs byVar spécifient des groupes pour le calcul. Notez que les arguments byVar doivent être utilisés dans une formule de colonne ou dans une fonction For Each Row() .

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Number( :height );

```

**Exemple 2**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Number( :height, :age ) ) );

```

**Exemple 3**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column(
	"Number of Nonmissing Values for Each Age and Sex Group",
	Formula( Col Number( :height, :age, :sex ) )
);

```

**Exemple 4**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:height[10] = .;
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) <<
Exclude;
dt << New Column( "Col Number for each Sex",
	Formula( Col Number( :height, :sex ) )
);
dt << New Column( "Col Number for each Sex grouped by Excluded",
	Formula(
		Col Number( :height, :sex, Excluded( Row State() ) )
	)
);

```

### Col Quantile

**Syntaxe :** y = Col Quantile( xCol, p, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt;, &lt; &lt;&lt; Freq( freqCol ) &gt; )

**Description :** Renvoie le quantile spécifié pour toutes les lignes d&apos;une colonne. L&apos;ordre est mis en cache de façon interne afin que les évaluations multiples soient efficaces.

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Col Quantile Height",
	numeric,
	continuous,
	formula( Col Quantile( :height, 0.5 ) )
);
dt << New Column( "Col Quantile Height by Age",
	numeric,
	continuous,
	formula( Col Quantile( :height, 0.5, :age ) )
);

```

**Exemple 2**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row() = 1;
Show( Col Quantile( :height, 0.5 ) );
Row() = 1;
Show( Col Quantile( :height, 0.5, :age ) );

```

**Exemple 3**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) <<
Exclude;
dt << New Column( "Col Quantile for each Sex",
	Formula( Col Quantile( :height, 0.5, :sex ) )
);
dt << New Column(
	"Col Quantile for each Sex grouped by Excluded",
	Formula(
		Col Quantile(
			:height,
			0.5,
			:sex,
			Excluded( Row State() )
		)
	)
);

```

### Col Rank

**Syntaxe :** y = Col Rank( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt;, &lt; &lt;&lt;tie("average"|"row"|"minimum"|"maximum"|"arbitrary")&gt; )

**Description :** Renvoie le rang, 1 étant le plus faible, avec un départage par ordre de ligne sauf si spécifié par l&apos;argument <<Tie. « Moyenne » renvoie la moyenne des rangs ex-æquo et « Minimum » renvoie le plus faible des rangs ex-æquo. Pour « Ligne » et « Arbitraire », chaque ligne a un rang unique.

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
New Column( "Rank Height",
	Formula( Col Rank( :height, <<tie( "average" ) ) )
);
New Column( "Rank Height by age",
	Formula( Col Rank( :height, :age ) )
);

```

**Exemple 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) <<
Exclude;
dt << New Column( "Col Rank for each Sex",
	Formula( Col Rank( :height, :sex ) )
);
dt << New Column( "Col Rank for each Sex grouped by Excluded",
	Formula(
		Col Rank( :height, :sex, Excluded( Row State() ) )
	)
);

```

### Col Score

**Syntaxe :** y = Col Score( xCol, &lt;byVar, ...&gt;, &lt; &lt;&lt;score missing(bool)&gt; )

**Description :** Renvoie un score entier pour chaque valeur unique, en respectant l&apos;ordre des propriétés de colonne pertinentes éventuelles.

**JMP Version ajoutée :** 19

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
New Column( "Score Height", Formula( Col Score( :height ) ) );
New Column( "Score Height by age",
	Formula( Col Score( :height, :age ) )
);

```

### Col Sequence

**Syntaxe :** y = Col Sequence( &lt;byVar, ...&gt;, &lt; &lt;&lt;skip missing(expr)&gt;, &lt; &lt;&lt;sequence(start=1, end=unbounded, incr=1, repeat=1)&gt;)

**Description :** Renvoie la position de cette ligne dans son groupe byVar, ajustée selon skip missing et les paramètres sequence éventuels.

**JMP Version ajoutée :** 19

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
New Column( "Row within sex", Formula( Col Sequence( :sex ) ) );
New Column( "Alternate within sex",
	Formula( Col Sequence( :sex, <<Sequence( 1, 2 ) ) )
);
New Column( "Row within sex, 60+",
	Formula(
		Col Sequence(
			:sex,
			<<skip missing( Sqrt( :height - 60 ) )
		)
	)
);

```

### Col Shuffle

**Syntaxe :** y = Col Shuffle(&lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt;)

**Description :** Renvoie un nombre entier aléatoire entre 1 et le nombre de lignes de la table de données active. Lorsqu&apos;on l&apos;utilise dans une formule de colonne, Col Shuffle() crée un ordre aléatoire des numéros de lignes où chaque numéro de ligne apparaît une seule fois. L&apos;ordre est mis en cache en interne pour que des évaluations multiples soient efficaces.

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Shuffle 1",
	Numeric,
	Continuous,
	Set Formula( Col Shuffle() )
);
dt << New Column( "Shuffle 2",
	Numeric,
	Continuous,
	Set Formula( Col Shuffle() )
);

```

**Exemple 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Shuffle",
	Numeric,
	Continuous,
	Set Formula( Col Shuffle( :age ) )
);

```

**Exemple 3**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) <<
Exclude;
dt << New Column( "Col Shuffle for each Sex",
	Formula( Col Shuffle( :height, :sex ) )
);
dt << New Column( "Col Shuffle for each Sex grouped by Excluded",
	Formula(
		Col Shuffle( :height, :sex, Excluded( Row State() ) )
	)
);

```

### Col Simple Exponential Smoothing

**Syntaxe :** y = Col Simple Exponential Smoothing( xCol, alpha, &lt;byVar, ...&gt; )

**Description :** Renvoie la prévision du lissage exponentiel simple pour la ligne active, en utilisant la pondération de lissage alpha. Les variables Par n&apos;ont pas besoin d&apos;être préalablement triées. La formule est : Valeur prévue[t]=alpha * Valeur observée[t-1] + (1-alpha) * Valeur prévue[t-1], avec Valeur prévue[1] = Valeur observée[1].

**JMP Version ajoutée :** 15

```jsl

Open( "$SAMPLE_DATA/Time Series/Seriesa.jmp" );
Row() = 40;
Col Simple Exponential Smoothing( :Column1, .7 );

```

### Col Span Box

**Syntaxe :** y = Col Span Box( title, children )

**Description :** Renvoie une colonne ayant un en-tête qui porte sur les colonnes enfants

**JMP Version ajoutée :** Avant la version 14

```jsl

New Window( "test",
	Table Box(
		Col Span Box(
			"Col Span",
			String Col Box( "col 1", {"A", "B", "C"} ),
			Number Col Box( "col2", {1, 2, 3} )
		)
	)
);

```

### Col Standardize

**Syntaxe :** y = Col Standardize( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt; )

**Description :** Renvoie la valeur moins la moyenne de la colonne, divisé par l&apos;écart-type de la colonne calculé sur l&apos;ensemble des lignes d&apos;une colonne. Si des colonnes groupées sont spécifiées, la valeur est standardisée par rapport à la moyenne et à l&apos;écart-type du groupe.

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row() = 1;
Col Standardize( :height );

```

**Exemple 2**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Standardize( :height, :age ) ) );

```

**Exemple 3**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) <<
Exclude;
dt << New Column( "Col Standardize for each Sex",
	Formula( Col Standardize( :height, :sex ) )
);
dt << New Column(
	"Col Standardize for each Sex grouped by Excluded",
	Formula(
		Col Standardize(
			:height,
			:sex,
			Excluded( Row State() )
		)
	)
);

```

### Col Std Dev

**Syntaxe :** y = Col Std Dev( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt;, &lt; &lt;&lt; Freq( freqCol ) &gt; )

**Description :** Renvoie l&apos;écart-type d&apos;un échantillon pour les lignes d&apos;une colonne. Le résultat est mis en cache en interne afin que les évaluations multiples soient efficaces. Les arguments facultatifs byVar spécifient des groupes pour le calcul. Notez que les arguments byVar doivent être utilisés dans une formule de colonne ou dans une fonction For Each Row() .

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Std Dev( :height );

```

**Exemple 2**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Std Dev( :height, :age ) ) );

```

**Exemple 3**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row(
	Show( Col Std Dev( :height, :age, <<Freq( :weight ) ) )
);

```

**Exemple 4**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column(
	"Standard Deviation for Each Age and Sex Group",
	Formula( Col Std Dev( :height, :age, :sex ) )
);

```

**Exemple 5**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) <<
Exclude;
dt << New Column( "Col Standard Deviation for each Sex",
	Formula( Col Std Dev( :height, :sex ) )
);
dt << New Column(
	"Col Standard Deviation for each Sex grouped by Excluded",
	Formula(
		Col Std Dev( :height, :sex, Excluded( Row State() ) )
	)
);

```

### Col Stored Value

**Syntaxe :** y = Col Stored Value( &lt;dt&gt;, xCol, &lt;row=Row()&gt; )

**Description :** Renvoie la valeur d&apos;une colonne à laquelle aucune propriété de colonne n&apos;a été appliquée. Si l&apos;option de ligne n&apos;est pas spécifiée, la ligne actuelle est supposée.

**JMP Version ajoutée :** Avant la version 14

```jsl

Open( "$SAMPLE_DATA/Equity.jmp" );
:JOB << Set Property( "Missing Value Codes", {"Other"} );
y1 = Col Stored Value( :JOB, 10 );
y2 = Col Stored Value( :JOB, 11 );
y3 = Col Stored Value( :JOB, 14 );
y4 = Col Stored Value( :JOB, 15 );
Show( y1, y2, y3, y4 );

```

### Col Sum

**Syntaxe :** y = Col Sum( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt;, &lt; &lt;&lt; Freq( freqCol ) &gt; )

**Description :** Renvoie la somme de toutes les lignes d&apos;une colonne. Le résultat est mis en cache en interne afin que les évaluations multiples soient efficaces. Les arguments facultatifs byVar spécifient des groupes pour le calcul. Notez que les arguments byVar doivent être utilisés dans une formule de colonne ou dans une fonction For Each Row() .

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Sum( :height );

```

**Exemple 2**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Sum( :height, <<Freq( :weight ) );

```

**Exemple 3**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Sum( :height, :age ) ) );

```

**Exemple 4**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Sum for Each Age and Sex Group",
	Formula( Col Sum( :height, :age, :sex ) )
);

```

**Exemple 5**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) <<
Exclude;
dt << New Column( "Col Sum for each Sex",
	Formula( Col Sum( :height, :sex ) )
);
dt << New Column( "Col Sum for each Sex grouped by Excluded",
	Formula( Col Sum( :height, :sex, Excluded( Row State() ) ) )
);

```

### Collapse Whitespace

**Syntaxe :** scw = Collapse Whitespace( s )

**Description :** Supprime les espaces situés au début et à la fin, ainsi que les espaces dupliqués à l&apos;intérieur

**JMP Version ajoutée :** Avant la version 14

```jsl

Collapse Whitespace( "  The  dog    crossed    the  road  " );

```

### Color Difference

**Syntaxe :** color = Color Difference( color1, color2, &lt;difference metric&gt;)

**Description :** Renvoie la différence entre deux couleurs selon une métrique de différence de couleur spécifiée.

**JMP Version ajoutée :** 18

**Exemple 1**

```jsl

Color Difference( "red", "blue" );

```

**Exemple 2**

```jsl

Color Difference( "red", "blue", "sRGB" );

```

**Exemple 3**

```jsl

Color Difference( "red", "blue", "redmean" );

```

**Exemple 4**

```jsl

Color Difference( "red", "blue", "CIE76" );

```

**Exemple 5**

```jsl

Color Difference( "red", "blue", "CIE94" );

```

**Exemple 6**

```jsl

Color Difference( "red", "blue", "CIEDE2000" );

```

**Exemple 7**

```jsl

Color Difference( "red", "blue", "dEok" );

```

### Color Of

**Syntaxe :** y = Color Of( &lt;rs&gt; ); Color Of( &lt;Row State( &lt;r&gt; )&gt; ) = y

**Description :** Renvoie la composante de couleur de la valeur d&apos;état de ligne spécifiée, un index de palette de couleurs JMP positive ou une valeur encodée RVB négative. Si Color Of est utilisée comme une L-value, la couleur de la ligne active (ou r-ième) de la table de données active est changée.

**JMP Version ajoutée :** Avant la version 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" ) <<
Color By Column( :height );
Color To RGB( Color Of( Row State( 3 ) ) );
Row() = 3;
Color To RGB( Color Of() );

```

### Color State

**Syntaxe :** rs = Color State( color )

**Description :** Renvoie une valeur d&apos;état de ligne avec la composante de couleur définie comme la valeur spécifiée. L’argument color peut être une couleur quelconque JSL qui soit correcte.

**JMP Version ajoutée :** Avant la version 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Color State( {1, 0.5, 1} );
Color To RGB( Color Of( Row State( 3 ) ) );

```

### Color To HLS

**Syntaxe :** {h, l, s} = Color To HLS( color )

**Description :** Renvoie une liste des composantes tonalité, luminosité et saturation.  L’argument color peut être une couleur JSL correcte ou une matrice de numéros de couleur.

**JMP Version ajoutée :** Avant la version 14

```jsl

Color To HLS( RGB Color( 1.0, 0.5, 0.5 ) );

```

### Color To RGB

**Syntaxe :** {r, g, b} = Color To RGB( color )

**Description :** Renvoie une liste de composantes rouge, vert et bleu, comprises entre 0 et 1. L’argument couleur peut être une couleur JSL quelconque correcte ou une matrice de numéros de couleurs.

**JMP Version ajoutée :** Avant la version 14

```jsl

Color To RGB( HLS Color( 30 / 360, 0.5, 1 ) );

```

### Column

**Syntaxe :** y = Column( name|number );y = Column( dataTable, name|number, &lt;"formatted"&gt; )

**Description :** Renvoie une référence à la colonne de la table de données spécifiée. Le mot clé "formatée" permet d&apos;accéder aux données formatées, comme l&apos;étiquette de valeur.

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
col4 = Column( 4 );
ht = Column( "height" );
col4[1] + ht[2];

```

**Exemple 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << run script( "Set Sex Value Labels" );
col = Column( dt, "sex", "formatted" );
Write( "\!n", col[5] );
Write(
	"\!nData value returned is the formatted value of row 5."
);

```

### Column Dialog

**Syntaxe :** y = Column Dialog( &lt;var = ColList("Label", &lt;Min Col(min)&gt;, &lt;Max Col(max)&gt;, &lt;Width(w)&gt;, &lt;Data Type("Numeric"|"Character"|"Any")&gt;, &lt;Modeling Type({&lt;"Continuous"&gt;, &lt;"Nominal"&gt;, &lt;"Ordinal"&gt;, &lt;"None"&gt;, &lt;"Multiple Response"&gt;, &lt;"Unstructured Text"&gt;, &lt;"Vector"&gt;})&gt; )&gt;, &lt;var=EditText("string")&gt;, &lt;var=EditNumber(num)&gt;, &lt;var=Check Box( "Text", 0|1)&gt;, &lt;var=RadioButtons( "a", "b" )&gt;, &lt;var=Combo Box("choice1", ...)&gt;, &lt;HList(box, ...)&gt;, &lt;VList(box, ...)&gt;, &lt;LineUp(ncol, box, ...)&gt;, &lt;Text Box("string")&gt;, &lt;Window Title("title")&gt;, &lt;Window Icon("icon string")&gt;, &lt;Dialog Description("description")&gt;, &lt;Recall(script)&gt;, &lt;Help Script(script)&gt;)

**Description :** Invite l&apos;utilisateur avec une fenêtre modale contenant des champs permettant de sélectionner les colonnes d&apos;une table de données. La spécification peut inclure plusieurs types de zones de saisie, ainsi que des zones de conteneur pour organiser la fenêtre.

**JMP Version ajoutée :** Avant la version 14

```jsl

Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
Column Dialog(
	ex y = ColList( "Y",
		Min Col( 1 ),
		Max Col( 2 ),
		Data Type( "Numeric" )
	),
	ex x = ColList( "X",
		Max Col( 1 ),
		Modeling Type( {"Continuous", "Multiple Response"} )
	),
	Line Up( 2,
		Text Box( "Alpha" ), ex = EditNumber( .05 ),
		Text Box( "Beta" ), ey = EditText( "xyz" )
	),
	HList( cb = Check Box( "check", 1 ) ),
	HList( combo = Combo Box( "option1", "option2" ) ),
	HList( rb = RadioButtons( "a", "b" ) ),
	Window Title( "Custom Launch Dialog" ),
	Window Icon( "RowState" ), //icon string can be a full path file name of an image file.
	Dialog Description(
		"The dialog before a groundbreaking discovery!"
	),
	Recall Script(
		Function( {dlgBox},
			dlgBox[list box box( 2 )] << remove all;
			dlgBox[list box box( 1 )] << clear selection;
			dlgBox[list box box( 1 )] << set selected( 3 );
			dlgBox[Button Box( 2 )] << click;
		)
	),
	Help Script( Web( "http://www.jmp.com/" ) )
);

```

### Column Name

**Syntaxe :** name = Column Name( n )

**Description :** Renvoie le noms de la n-ième colonne de la table de données active.

**JMP Version ajoutée :** Avant la version 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Column Name( 4 );

```

### Combine States

**Syntaxe :** rs = Combine States( rs1, ... )

**Description :** Combine plusieurs valeurs d&apos;état de ligne en une seule.

**JMP Version ajoutée :** Avant la version 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Combine States(
	Hue State( 5 ),
	Shade State( 1 )
);

```

### Combo Box

**Syntaxe :** y = Combo Box( {item &lt;( tipstr )&gt;, ...}, &lt;script&gt; )

**Description :** Renvoie une boîte d&apos;affichage pour afficher une zone combinée avec un menu contextuel. Chaque élément de la zone combinée peut avoir une info-bulle facultative qui est spécifiée comme une chaîne entre parenthèses à la suite de la chaîne de texte de l&apos;élément.

**JMP Version ajoutée :** Avant la version 14

```jsl

New Window( "Example",
	cb = Combo Box(
		{"single", "double", "triple"("tool tip")},
		Show( cb << Get() )
	)
);

```

### Concat

**Syntaxe :** s = s1 || s2 ...; m = m1 || m2 ...; s = Concat( s1, s2, ... )

**Description :** Concatène des chaînes en une chaîne plus longue ou des matrices en une matrice plus large.

**JMP Version ajoutée :** Avant la version 14

```jsl

[1 2] || [3 4] || [5 6];

```

### Concat Items

**Syntaxe :** string = Concat Items( {list of strings}, &lt;separatorString&gt; )

**Description :** Joint une liste de chaînes en une chaîne longue, en séparant chacune de la suivante à l&apos;aide d&apos;un séparateur, ou d&apos;un espace si rien n&apos;est spécifié.

**JMP Version ajoutée :** Avant la version 14

```jsl

Concat Items( {"www", "jmp", "com"}, "." );

```

### Concat To

**Syntaxe :** string1 ||= string2; matrix1 ||= matrix2; Concat To( a, b )

**Description :** Concatène sur place. La fonction a ||= b est équivalente à a = a || b. Il s’agit d’un opérateur d’affectation.

**JMP Version ajoutée :** Avant la version 14

```jsl

ex = "hello ";
ex ||= "world";

```

### Constrained Maximize

**Syntaxe :** Constrained Maximize( expr, {x1( low1, up1 ), x2( low2, up2 ), ...}, &lt;&lt;LessThanEQ({mat_A, vec_b}), &lt;&lt;GreaterThanEQ({mat_A, vec_b}), &lt;&lt;EqualTo({mat_A, vec_b}), &lt;&lt;MaxIter( 250 ), &lt;&lt;tolerance( .00001 ), &lt;&lt;ShowDetails(True), &lt;&lt;StartingValues([x1, x2, ... ])), &lt;&lt;SetVariableLimit({lowerLimitVector,upperLimitVector})

**Description :** Trouve les valeurs des arguments de la fonction, communiquées dans la liste {x1, x2, ...}, qui maximisent l&apos;expression expr avec des contraintes linéaires facultatives. Les variables, x1, x2, etc., peuvent être des scalaires ou des vecteurs. Les limites inférieures et supérieures doivent être spécifiées pour chaque variable, entre parenthèses, à la suite du nom de la variable ou avec le paramètre facultatif <<SetVariableLimits(). Les arguments facultatifs de la fonction Constrained Maximize vous permettent de spécifier ce qui suit : les contraintes linéaires, le nombre maximum d&apos;itérations, la tolérance souhaitée, les détails de la sortie, les valeurs de départ et les limites des variables d&apos;optimisation (voir exemple 2). Les contraintes linéaires sont spécifiées à l&apos;aide de la matrice des coefficients mat_A et du vecteur vec_b du côté droit.

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

/*Simple Example*/
f = Expr(
	-2 * x1 ^ 2 - 2 * x2 ^ 2 + 2 * x1 * x2 + 4 * x1 + 6 * x2
);
A = [1 1, 1 5];
b = [2, 5];
minFun = Constrained Maximize(
	f,
	{x1( 0, 5 ), x2( 0, 5 )},
	<<lessthanEQ( {A, b} )/*and/or <<GreaterThanEQ({A,b}) and/or <<EqualTo({A,b})*/
,
	<<StartingValues( [1, .5] )
);
Eval List( {x1, x2, minFun} );

```

**Exemple 2**

```jsl

/*Simple Example with optional parameters included*/ 
x = [., .];
f = Expr(
	-2 * x[1] ^ 2 - 2 * x[2] ^ 2 + 2 * x[1] * x[2] + 4 * x[1]
	+6 * x[2]
);
A = [1 1, 1 5];
b = [2, 5];
{objVal, iters, gradient, hessian} =
Constrained Maximize(
	f,
	{x},
	<<lessthanEQ( {A, b} )/*and/or <<GreaterThanEQ({A,b}) and/or <<EqualTo({A,b})*/
,
	MaxIter( 250 ),
	<<tolerance( 1e-5 ),
	<<showDetails( True ),
	<<StartingValues( [1, .5] ),
	<<setVariableLimit( {[0, 0], [5, 5]} )
);
Show( x, objVal, iters, gradient, hessian );

```

### Constrained Minimize

**Syntaxe :** Constrained Minimize( expr, {x1( low1, up1 ), x2( low2, up2 ), ...}, &lt;&lt;LessThanEQ({mat_A, vec_b}), &lt;&lt;GreaterThanEQ({mat_A, vec_b}), &lt;&lt;EqualTo({mat_A, vec_b}), &lt;&lt;MaxIter( 250 ), &lt;&lt;tolerance( .00001 ), &lt;&lt;ShowDetails(True), &lt;&lt;StartingValues([x1, x2, ... ])), &lt;&lt;SetVariableLimit({low,high})

**Description :** Trouve les valeurs des arguments de la fonction, communiquées dans la liste {x1, x2, ...}, qui minimisent l&apos;expression expr avec des contraintes linéaires facultatives. Les variables, x1, x2, etc., peuvent être des scalaires ou des vecteurs. Les limites inférieures et supérieures doivent être spécifiées pour chaque variable, entre parenthèses, à la suite du nom de la variable ou avec le paramètre facultatif <<SetVariableLimits(). Les arguments facultatifs de la fonction Constrained Minimize vous permettent de spécifier ce qui suit : les contraintes linéaires, le nombre maximum d&apos;itérations, la tolérance souhaitée, les détails de la sortie, les valeurs de départ et les limites des variables d&apos;optimisation (voir exemple 2). Les contraintes linéaires sont spécifiées à l&apos;aide de la matrice des coefficients mat_A et du vecteur vec_b du côté droit.

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

/*Simple Example*/
f = Expr(
	2 * x1 ^ 2 + 2 * x2 ^ 2 - 2 * x1 * x2 - 4 * x1 - 6 * x2
);
A = [1 1, 1 5];
b = [2, 5];
minFun = Constrained Minimize(
	f,
	{x1( 0, 5 ), x2( 0, 5 )},
	<<lessthanEQ( {A, b} )/*and/or <<GreaterThanEQ({A,b}) and/or <<EqualTo({A,b})*/
,
	<<StartingValues( [1, .5] )
);
Eval List( {x1, x2, minFun} );

```

**Exemple 2**

```jsl

/*Simple Example with optional parameters included*/ 
x = [., .];
f = Expr(
	2 * x[1] ^ 2 + 2 * x[2] ^ 2 - 2 * x[1] * x[2] - 4 * x[1] - 6
	 * x[2]
);
A = [1 1, 1 5];
b = [2, 5];
{objVal, iters, gradient, hessian} =
Constrained Minimize(
	f,
	{x},
	<<lessthanEQ( {A, b} ) /*and/or <<GreaterThanEQ({A,b}) and/or <<EqualTo({A,b})*/
,
	MaxIter( 250 ),
	<<tolerance( 1e-5 ),
	<<showDetails( True ),
	<<StartingValues( [1, .5] ),
	<<setVariableLimit( {[0, 0], [5, 5]} )
);
Show( x, objVal, iters, gradient, hessian );

```

### Contains

**Syntaxe :** pos = Contains( x, item, &lt;start=1&gt; )

**Description :** Renvoie la position de item dans x, en commençant par la position start, si celle-ci est donnée. Si start est négative, la recherche s&apos;effectue en arrière à partir de length( x ) - start. L’argument x peut être une chaîne ou une liste.

**JMP Version ajoutée :** Avant la version 14

```jsl

Show( Contains( "redreed", "re", -1 ) );
Show( Contains( {"A", 2, "C", [1 5], "C"}, "C", 4 ) );

```

### Contains Item

**Syntaxe :** b = Contains Item( x, item | list | Pat Regex(), &lt;delimiter&gt; )

**Description :** Renvoie un booléen indiquant si le mot [élément], un mot de la liste de mot [liste], ou le modèle [modèle] correspond ou non à l&apos;un des mots du texte représenté par [x]. Les mots sont séparés par les caractères de la chaîne de séparateurs [séparateur] facultative. Le séparateur par défaut est la virgule ",". Les vides sont tronqués par la fin de chaque mot extrait de la chaîne de texte d&apos;entrée [x].

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

Show( Contains Item( "A, 2, C, D, C", "C", ", " ) );

```

**Exemple 2**

```jsl

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

//find repeated character c in cdcef
Contains Item(
	"abcde,bcdef,cdcef",
	Pat Regex( "(.).*?\1" ),
	","
);

```

### Context Box

**Syntaxe :** y = Context Box( displayBox, ... )

**Description :** Renvoie une boîte d’affichage qui établit un contexte d’étendues d’évaluation. Permet d’exécuter les différentes parties d’une fenêtre d’affichage indépendamment les unes des autres.

**JMP Version ajoutée :** Avant la version 14

```jsl

New Window( "Example",
	Context Box(
		Outline Box( "Picker",
			V List Box(
				Text Box( "Label:" ),
				Text Edit Box( Char( 213 ) )
			)
		)
	)
);

```

### Continue

**Syntaxe :** Continue()

**Description :** Entraîne une continuation de l&apos;itération suivante du flux de contrôle dans une boucle For ou While.

**JMP Version ajoutée :** Avant la version 14

```jsl

For( i = 1, i <= 10, i++,
	If( i < 2, Continue() );
	Print( "i=" || Char( i ) );
);

```

### Contour

**Syntaxe :** Contour( xVector, yVector, zGridMatrix, zContours, &lt; &lt;&lt;zColor( color, option )&gt;, &lt; &lt;&lt;Fill|Fill Between|Fill Below|Fill Above&gt;, &lt; &lt;&lt;Transparency(vector)&gt; )

**Description :** Dessine des isoréponses en fonction d&apos;une grille de valeurs. Si le nombre de couleurs spécifié est inférieur au nombre d&apos;isoréponses, les options « Interpolate Colors » ou « Cycle Colors » déterminent comment appliquer les couleurs.

**JMP Version ajoutée :** Avant la version 14

```jsl


New Window( "Example",
	H List Box(
		Outline Box( "Line",
			Graph Box(
				Contour(
					1 :: 100,
					1 :: 100,
					(1 :: 100)` * (1 :: 100),
					7 ^ (0 :: 4)
				)
			)
		),
		Outline Box( "Line Colors",
			Graph Box(
				Contour(
					1 :: 100,
					1 :: 100,
					(1 :: 100)` * (1 :: 100),
					7 ^ (0 :: 4),
					<<zColor( {"Blue", "Red"} )
				)
			)
		)
	),
	H List Box(
		Outline Box( "Fill Cycle",
			Graph Box(
				Contour(
					1 :: 100,
					1 :: 100,
					(1 :: 100)` * (1 :: 100),
					7 ^ (0 :: 4),
					<<zColor(
						{RGB Color( 218, 218, 255 ),
						RGB Color( 255, 218, 218 )},
						"Cycle Colors"
					),
					fill
				)
			)
		),
		Outline Box( "Fill Interpolate",
			Graph Box(
				Contour(
					1 :: 100,
					1 :: 100,
					(1 :: 100)` * (1 :: 100),
					7 ^ (0 :: 4),
					<<zColor(
						{"Blue", "Red"},
						"Interpolate Colors"
					),
					fill
				)
			)
		)
	)
);

```

### Contour Function

**Syntaxe :** Contour Function( zExpr, xName, yName, z|zMatrix, &lt; &lt;&lt;XGrid( min, max, incr )&gt;, &lt; &lt;&lt;YGrid( min, max, incr )&gt;, &lt; &lt;&lt;ZColor( color, option )&gt;, &lt; &lt;&lt;ZLabeled&gt;, &lt; &lt;&lt;Filled&gt;, &lt; &lt;&lt;FillBetween&gt;, &lt; &lt;&lt;Ternary&gt;, &lt; &lt;&lt;Transparency( t )&gt; )

**Description :** Évalue l&apos;expression sur une grille de valeurs xName et yName et dessine les lignes d&apos;isoréponses. La couleur color peut être spécifiée par un nombre, une matrice, une liste de valeurs RVB, une liste de noms de couleurs ou un thème de couleur.  La transparence t peut être spécifiée par un nombre ou par une matrice.  Si l’option Ternary est sélectionnée, les courbes d&apos;isoréponses sont coupées sur un système de coordonnées ternaire.

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

New Window( "Example",
	Graph Box(
		Contour Function(
			Log( a * a + b * b ),
			a,
			b,
			1 :: 10,
			<<ZColor( {"blue", "green", "red"}, "Cycle Colors" ),
			Transparency( 0.9 )
		)
	)
);

```

**Exemple 2**

```jsl

New Window( "Example",
	Graph Box(
		Contour Function(
			Log( a * a + b * b ),
			a,
			b,
			1 :: 10,
			<<Filled,
			<<ZColor(
				{{1, 0.1, 0.1}, {0.1, 1, 0.1}, {0.1, 0.1, 1}},
				"Interpolate Colors"
			)
		)
	)
);

```

### Contour Seg

**Syntaxe :** me = Contour Seg( Triangulation, [ levels ], &lt; zColor([colors], &lt;Cycle Colors|Interpolate Colors&gt;) &gt;, &lt; Transparency([] | t) &gt;

**Description :** Renvoie un seg d&apos;affichage représentant les courbes d&apos;isoréponses d&apos;une triangulation. Des couleurs facultatives peuvent être spécifiées pour chaque niveau comme une matrice ou une liste. La transparence peut être spécifiée comme un nombre ou une matrice.

**JMP Version ajoutée :** Avant la version 14

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
tri = Triangulation( X( :X, :Y ), Y( :POP ) );
{xx, yy} = tri << Get Points();
New Window( "Contour Seg Example",
	g = Graph Box(
		X Scale( Min( xx ) - .1, Max( xx ) + .1 ),
		Y Scale( Min( yy ) - .1, Max( yy ) + .1 ),
		Contour Seg(
			tri,
			[0, 400, 1000, 2000, 9000],
			zColor( 5 + [64 32 0 16 48] ),
			Transparency( [1, 1, 1, 1, 1] )
		)
	)
);

```

### Convert File Path

**Syntaxe :** path = Convert File Path( path, &lt;absolute|relative&gt;, &lt;posix|windows&gt;, &lt;base( path )&gt;, &lt;search&gt; )

**Description :** Renvoie le chemin d&apos;accès converti.

**JMP Version ajoutée :** Avant la version 14

```jsl

For Each( {pv},
	{"HOME", "DOCUMENTS", "SAMPLE_DATA", "SAMPLE_IMPORT_DATA",
	"SAMPLE_SCRIPTS", "SAMPLE_IMAGES", "USER_APPDATA",
	"USER_JMPDATA", "MAPS", "USER_JMPDATA_ALL", "TEMP"},
	Write(
		pv || Repeat( " ", 20 - Length( pv ) ) || " => " ||
		Convert File Path( "$" || pv ) || "\!N"
	)
);

```

### Copy Directory

**Syntaxe :** rc = Copy Directory( from, to, &lt;recursive(0|1)&gt; )

**Description :** Copie les fichiers d’un répertoire sur un autre, éventuellement avec les sous-répertoires. Le nom du répertoire sera créé sur le chemin to et ne fera pas partie du chemin to. Renvoie 1 si le répertoire a été copié ou 0 si le répertoire n&apos;a pas pu être copié. Génère une erreur si le chemin est incorrect ou n&apos;existe pas.

**JMP Version ajoutée :** Avant la version 14

```jsl

rc0 = Copy Directory(
	"$SAMPLE_DATA/Loss Function Templates",
	"$TEMP"
);/* creates $TEMP/Loss Function Templates */ 
rc1 = File Exists( "$TEMP/Loss Function Templates/Normal.jmp" );
rc2 = Delete File( "$TEMP/Loss Function Templates/Normal.jmp" );
rc3 = File Exists( "$TEMP/Loss Function Templates/Normal.jmp" );
rc4 = Delete Directory( "$TEMP/Loss Function Templates" );
rc5 = Directory Exists( "$TEMP/Loss Function Templates" );
Char( rc0 ) || " " || Char( rc1 ) || " " || Char( rc2 ) || " "
 || Char( rc3 ) || " " || Char( rc4 ) || " " || Char( rc5 );/* 1 1 1 0 1 0 */

```

### Copy File

**Syntaxe :** rc = Copy File( from, to )

**Description :** Copie un fichier à partir du fichier d&apos;origine. Son nom sera identique ou différent. Spécifiez un chemin complet et un nom de fichier pour la destination. Renvoie 1 si le fichier a été copié ou 0 si le fichier n&apos;a pas pu être copié. Génère une erreur si le chemin est incorrect ou n&apos;existe pas. Un fichier ne peut pas être copié lorsque le chemin from ou to est incorrect, ou si le fichier to existe déjà.

**JMP Version ajoutée :** Avant la version 14

```jsl

rc0 = File Exists( "$TEMP/x.jmp" );
rc1 = Copy File(
	"$SAMPLE_DATA/Loss Function Templates/Normal.jmp",
	"$TEMP/x.jmp"
);
rc2 = File Exists( "$TEMP/x.jmp" );
rc3 = Delete File( "$TEMP/x.jmp" );
rc4 = File Exists( "$TEMP/x.jmp" );
Char( rc0 ) || " " || Char( rc1 ) || " " || Char( rc2 ) || " "
 || Char( rc3 ) || " " || Char( rc4 );/* 0 1 1 1 0 */

```

### Correlation

**Syntaxe :** y = Correlation( x , &lt; &lt;&lt;"Pairwise" &gt;, &lt; &lt;&lt;"Shrink" &gt;, &lt; &lt;&lt;Freq(vector) &gt;, &lt; &lt;&lt;Weight(vector) &gt; )

**Description :** Renvoie la matrice de corrélation de l&apos;argument x de la matrice. L&apos;argument "Pairwise" traite les valeurs manquantes par paire plutôt que par ligne. L&apos;argument "Shrink" réduit les éléments non diagonaux d&apos;un facteur déterminé à l&apos;aide de la méthode décrite dans Schafer and Strimmer, 2005. Les arguments Freq et Weight spécifient les vecteurs des valeurs de fréquence et de pondération, respectivement.

**JMP Version ajoutée :** Avant la version 14

```jsl

Correlation( [1 3 5, 3 2 6, 5 6 1] );

```

### Cos

**Syntaxe :** y = Cosine( x )

**Description :** Renvoie le cosinus trigonométrique de x, où x est un angle en radians.

**JMP Version ajoutée :** Avant la version 14

```jsl

Cosine( Pi() / 2 );

```

### CosH

**Syntaxe :** y = CosH( x )

**Description :** Renvoie le cosinus hyperbolique de x.

**JMP Version ajoutée :** Avant la version 14

```jsl

CosH( 1 );

```

### Cosine

**Syntaxe :** y = Cosine( x )

**Description :** Renvoie le cosinus trigonométrique de x, où x est un angle en radians.

**JMP Version ajoutée :** Avant la version 14

```jsl

Cosine( Pi() / 2 );

```

### Count

**Syntaxe :** y = Count( start, end, s, &lt;n=1&gt; )

**Description :** Renvoie la valeur i-ième dans la séquence des nombres de start à end en incrémentant par s et en répétant chaque nombre n fois, où i est déterminé par la valeur de la fonction Row(). Puisqu&apos;elle dépend de la fonction Row(), la fonction Count() est principalement utile dans les formules de colonne.

**JMP Version ajoutée :** Avant la version 14

```jsl

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

### Covariance

**Syntaxe :** y = Covariance( x , &lt; &lt;&lt;"Pairwise" &gt;, &lt; &lt;&lt;"Shrink" &gt;, &lt; &lt;&lt;Freq(vector) &gt;, &lt; &lt;&lt;Weight(vector) &gt; )

**Description :** Renvoie la matrice de covariance de l&apos;argument x de la matrice. L&apos;argument "Pairwise" traite les valeurs manquantes par paire plutôt que par ligne. L&apos;argument "Shrink" réduit les éléments non diagonaux d&apos;un facteur déterminé à l&apos;aide de la méthode décrite dans Schafer and Strimmer, 2005. Les arguments Freq et Weight spécifient les vecteurs des valeurs de fréquence et de pondération, respectivement.

**JMP Version ajoutée :** Avant la version 14

```jsl

Covariance( [1 3 5, 3 2 6, 5 6 1] );

```

### Create Database Connection

**Syntaxe :** dbc = Create Database Connection( dataSourceName|"Connect Dialog", &lt;DriverPrompt(true|false)&gt; )

**Description :** Crée une connexion à la base de données et renvoie un handle à la connexion. Si DriverPrompt est Vrai, l&apos;utilisateur sera invité à utiliser l&apos;invite du pilote ODBC pour fournir les informations d&apos;identification, si nécessaire.

**JMP Version ajoutée :** Avant la version 14

```jsl

dbc = Create Database Connection(
	"DSN=dBASE Files;DBQ=C:/Program Files/JMP/JMPPRO/19/Samples/Import Data/;"
);

```

### Create Directory

**Syntaxe :** rc = Create Directory( path )

**Description :** Crée un répertoire. Renvoie 1 si le répertoire a été créé. Renvoie 0 si le répertoire existe déjà ou si JMP n&apos;a pas pu créer le répertoire.

**JMP Version ajoutée :** Avant la version 14

```jsl

Delete Directory( "$TEMP/sub1" );
rc0 = Create Directory( "$TEMP/sub1/sub2/sub3" );
Save Text File(
	"$TEMP/sub1/sub2/sub3/temp.txt",
	"example text"
);
date = Last Modification Date( "$TEMP/sub1/sub2/sub3/temp.txt" );
rc1 = Delete Directory( "$TEMP/sub1" );
rc2 = File Exists( "$TEMP/sub1/sub2/sub3/temp.txt" );
Char( rc0 ) || " " || Char( rc1 ) || " " || Char( rc2 ) || " "
 || Format( date, "ddmonyyyy:h:m:s" );/* 1 1 0 date:time */

```

### Create Excel Workbook

**Syntaxe :** Create Excel Workbook(&lt;Workbook Name&gt;, &lt;{List of open tables}&gt;, &lt;Optional list of worksheet names&gt; )

**Description :** Générer un classeur Excel à partir des tables de données JMP ouvertes

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

dt1 = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt2 = Open( "$SAMPLE_DATA/Abrasion.jmp" );
Create Excel Workbook(
	"$TEMP/MyWorkbook.xlsx",
	{dt1, dt2},
	{"Big", "Abrasive"}
);

```

**Exemple 2**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Open( "$SAMPLE_DATA/Abrasion.jmp" );
Create Excel Workbook(
	"$TEMP/MyWorkbook.xlsx",
	{"Big Class", "Abrasion"},
	{"Big", "Abrasive"}
);

```

### Creation Date

**Syntaxe :** date = Creation Date( path )

**Description :** Renvoie la date de création d’un fichier ou d’un répertoire. Génère une erreur si le chemin d&apos;accès est incorrect ou n&apos;existe pas.

**JMP Version ajoutée :** Avant la version 14

```jsl

Format(
	Creation Date( "$SAMPLE_DATA/Big Class.jmp" ),
	"ddmonyyyy:h:m:s"
);

```

### Cumulative Sum

**Syntaxe :** y = Cumulative Sum( x )

**Description :** Renvoie une matrice des sommes partielles pour la matrice des entrées.

**JMP Version ajoutée :** Avant la version 14

```jsl

Cumulative Sum( [1 1 1 1 . 10 20] );

```

### Current CAS Connection

**Syntaxe :** Current CAS Connection()

**Description :** Obtient la connexion au serveur CAS actif.

**JMP Version ajoutée :** 15

```jsl


connection = Current CAS Connection();
Show( connection );

```

### Current Data Table

**Syntaxe :** dt = Current Data Table( &lt;Project(title|index|box|window)&gt; ); Current Data Table( dt )

**Description :** Renvoie la table de données active ou rend la table de données spécifiée active, si une table de données est spécifiée.



Pour spécifier un projet, utilisez l&apos;argument facultatif Project() avec un titre, un index, une boîte d’affichage ou un objet fenêtre. Utilisez Project(0) pour spécifier que le script n&apos;est pas exécuté dans un projet.

**JMP Version ajoutée :** Avant la version 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Current Data Table() << Get Column Names;

```

### Current Journal

**Syntaxe :** y = Current Journal( &lt;Project(title|index|box|window)&gt; )

**Description :** Renvoie une référence au journal actif du projet actif (sauf lorsque le script n&apos;est pas exécuté dans un projet).



Pour spécifier un projet, utilisez l&apos;argument facultatif Project() avec un titre, un index, une boîte d&apos;affichage ou un objet fenêtre. Utilisez Project(0) pour spécifier que le script n&apos;est pas exécuté dans un projet.



Si le projet spécifié ne contient aucun journal actif, il en sera créé un automatiquement.

**JMP Version ajoutée :** Avant la version 14

```jsl

Current Journal();

```

### Current Report

**Syntaxe :** y = Current Report( &lt;Project(title|index|box|window)&gt; )

**Description :** Renvoie une référence de boîte d&apos;affichage au rapport actif du projet actif (sauf lorsque le script n&apos;est pas exécuté dans un projet).



Pour spécifier un projet, utilisez l&apos;argument facultatif Project() avec un titre, un index, une boîte d&apos;affichage ou un objet fenêtre. Utilisez Project(0) pour spécifier que le script n&apos;est pas exécuté dans un projet.

**JMP Version ajoutée :** Avant la version 14

```jsl

Current Report();

```

### Current Window

**Syntaxe :** y = Current Window( &lt;Project(title|index|box|window)&gt; )

**Description :** Renvoie une référence à la fenêtre active du projet actif (sauf lorsque le script n&apos;est pas exécuté dans un projet).



Pour spécifier un projet, utilisez l&apos;argument facultatif Project() avec un titre, un index, une boîte d&apos;affichage ou un objet fenêtre. Utilisez Project(0) pour spécifier que le script n&apos;est pas exécuté dans un projet.

**JMP Version ajoutée :** Avant la version 14

```jsl

New Window( "Example",
	Outline Box( "Example Outline",
		Text Box( "Example Text" ),
		Button Box( "Close", Current Window() << Close Window )
	)
);

```

### Cytometry Logicle

**Syntaxe :** y = Cytometry Logicle( x, T, W, M, A )

**Description :** Calcule la transformation cytométrique « Logicle » .

**JMP Version ajoutée :** Avant la version 14

```jsl

Cytometry Logicle( 100, 10000, .15, .45, 0 );

```

### Cytometry Logicle Inverse

**Syntaxe :** x = Cytometry Logicle Inverse( y, T, W, M, A )

**Description :** Calcule l&apos;inverse de la transformation cytométrique « Logicle » .

**JMP Version ajoutée :** Avant la version 14

```jsl

Cytometry Logicle Inverse( 100, 10000, .15, .45, 0 );

```

### Data Connector Registry

**Syntaxe :** Data Connector Registry()

**Description :** La collection de connecteurs de données pour JMP.

**JMP Version ajoutée :** 18

```jsl


dc = Data Connector Registry() << Get( "com.jmp.sql_server" );

```

### Data Filter Context Box

**Syntaxe :** y = Data Filter Context Box( displayBox )

**Description :** Renvoie une boîte d’affichage qui définit l’étendue des filtres de données locales, contenue dans une arborescence de boîtes d’affichage. Les filtres de données et les boîtes de contexte de filtres de données peuvent être organisés dans une hiérarchie et seront partagés entre les plates-formes ou entre les boîtes contenues à l’intérieur des boîtes de contexte de filtres de données.

**JMP Version ajoutée :** Avant la version 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Shared Local Filter",
	Data Filter Context Box(
		H List Box(
			dt << Data Filter(
				Local,
				Add Filter(
					columns( :sex ),
					Where( :sex == "F" )
				)
			),
			dt << Bubble Plot(
				X( :weight ),
				Y( :height ),
				Fit To Window( "On" ),
				Sizes( :age ),
				Title Position( 0, 0 )
			),
			dt << Graph Builder(
				Size( 525, 456 ),
				Show Control Panel( 0 ),
				Fit To Window( "On" ),
				Variables( X( :weight ), Y( :age ) ),
				Elements( Box Plot( X, Y, Legend( 4 ) ) ),

			)
		)
	)
);

```

### Data Filter Source Box

**Syntaxe :** y = Data Filter Source Box( displayBox )

**Description :** Renvoie une boîte d&apos;affichage qui définit la source du filtre de sélection. Les lignes sélectionnées dans les rapports contenus dans la boîte Source de filtre de données seront incluses pour analyse dans les autres rapports contenus dans une boîte Contexte de filtres de données commune.

**JMP Version ajoutée :** Avant la version 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Selection Filter",
	Data Filter Context Box(
		H List Box(
			Data Filter Source Box(
				Graph Builder(
					Size( 208, 207 ),
					Show Control Panel( 0 ),
					Show Legend( 0 ),
					Variables( X( :age ) ),
					Elements( Bar( X, Legend( 3 ) ) ),
					SendToReport(
						Dispatch( {}, "Graph Builder",
							OutlineBox,
							{Set Title( "Filter" )}
						)
					)
				)
			),
			Platform(
				Current Data Table(),
				Bubble Plot(
					X( :weight ),
					Y( :height ),
					Sizes( :age ),
					Title Position( 0, 0 )
				)
			)
		)
	)
);

```

### Data Grid Box

**Syntaxe :** y = Data Grid Box( )

**Description :** Renvoie une boîte d&apos;affichage qui peut contenir une table de données.

**JMP Version ajoutée :** Avant la version 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Example", x = Data Grid Box() );
x << Set Data Table( dt );

```

### Data Table

**Syntaxe :** dt = Data Table( name|number )

**Description :** Renvoie une référence à la table de données spécifiée.

**JMP Version ajoutée :** Avant la version 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Open( "$SAMPLE_DATA/Cars.jmp" );
Data Table( 1 );

```

### Data Table Box

**Syntaxe :** y = Data Table Box( datatable )

**Description :** Renvoie une boîte de tableaux représentant la table de données en question.

**JMP Version ajoutée :** Avant la version 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Example", Data Table Box( dt ) );

```

### Data Table Col Box

**Syntaxe :** y = Data Table Col Box( col )

**Description :** Renvoie une boîte de colonnes correspondant à la colonne de la table de données en question.

**JMP Version ajoutée :** Avant la version 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Example",
	Table Box(
		Data Table Col Box( :name ),
		Data Table Col Box( :height )
	)
);

```

### Data Table Plot Col Box

**Syntaxe :** y = Data Table Plot Col Box( col )

**Description :** Renvoie un Plot Col Box correspondant à la colonne donnée de la table de données et, en option, utilise la deuxième et la troisième colonne de la table de données pour créer des limites de contrôle.

**JMP Version ajoutée :** 17

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Example",
	Table Box(
		Data Table Plot Col Box( :weight ),
		Data Table Plot Col Box( :height )
	)
);

```

### Datafeed

**Syntaxe :** y = Open Datafeed( ... )

**Description :** Crée un objet et une fenêtre permettant d&apos;envoyer des messages, afin de gérer les sources de données en temps réel.

**JMP Version ajoutée :** Avant la version 14

```jsl

exfeed = Open Datafeed(/*Connect( Port( "com3" ), Baud( 4800 ), DataBits( 8 ) ),*/
	Set Script(
		ex = exfeed << getLine;
		Show( ex );
	)
);
For( exi = 0, exi < 5, exi++, /* this is just a way to test a feed when the real data source is not available...*/
	exfeed << Queue Line( Char( exi ) );
	Wait( .5 );
);

```

### Date Difference

**Syntaxe :** delta = Date Difference( dt1, dt2, intervalName, &lt;alignment="start"&gt; )

**Description :** Renvoie la différence en intervalles de deux valeurs date/heure. Les valeurs de intervalName prises en charge sont « Année », « Quartier », « Mois », « Semaine », « Jour », « Heure », « Minute », « Seconde » et « Numérique ». Un alignment de "Start" comprend des intervalles complets ou partiels, alors que "Actual" renvoie uniquement des intervalles complets. Un alignment de "Fractional" renvoie des différences fractionnelles, en utilisant les moyennes de durée des intervalles « Année », « Quartier » et « Mois ».

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

Date Difference(
	Date DMY( 31, 1, 2015 ),
	Date DMY( 1, 3, 2015 ),
	"Month",
	"start"
);

```

**Exemple 2**

```jsl

Date Difference(
	Date DMY( 31, 1, 2015 ),
	Date DMY( 1, 3, 2015 ),
	"Month",
	"actual"
);

```

**Exemple 3**

```jsl

Date Difference(
	Date DMY( 31, 1, 2015 ),
	Date DMY( 1, 3, 2015 ),
	"Month",
	"fractional"
);

```

### Date DMY

**Syntaxe :** z = Date DMY( d, m, y )

**Description :** Convertit au format « jour, mois et année » une valeur au format « date-heure » de JMP qui est le nombre de secondes depuis le 1er janvier 1904.

**JMP Version ajoutée :** Avant la version 14

```jsl

As Date( Date DMY( 15, 7, 2000 ) );

```

### Date Increment

**Syntaxe :** d = Date Increment( datetime, intervalName, &lt;incr=1&gt;, &lt;alignment="start"&gt; )

**Description :** Renvoie une nouvelle valeur date-heure en ajoutant un nombre incr d&apos;intervalles. Les valeurs de intervalName prises en charge sont « Année », « Quartier », « Mois », « Semaine », « Jour », « Heure », « Minute », « Seconde » et « Numérique ». Un alignment de "Start" tronque à l&apos;intervalle le plus proche avant d&apos;ajouter l&apos;incrément, alors que "Actual" retient la date/heure d&apos;entrée complète. Un alignment de "Fractional" permet des valeurs incr fractionnelles, en utilisant les moyennes de durée des intervalles « Année », « Quartier » et « Mois ».

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

Date Increment( Today(), "Month", 100, "start" );

```

**Exemple 2**

```jsl

Date Increment( Today(), "Month", 100, "actual" );

```

**Exemple 3**

```jsl

Date Increment( Today(), "Month", 100, "fractional" );

```

### Date MDY

**Syntaxe :** z = Date MDY( m, d, y )

**Description :** Convertit au format « mois, jour et année » une valeur au format « date-heure » de JMP qui est le nombre de secondes depuis le 1er janvier 1904.

**JMP Version ajoutée :** Avant la version 14

```jsl

As Date( Date MDY( 7, 15, 2000 ) );

```

### Day

**Syntaxe :** d = Day( datetime )

**Description :** Renvoie le jour du mois d&apos;une valeur « date-heure » de JMP, 1 - 31.

**JMP Version ajoutée :** Avant la version 14

```jsl

Day( Today() );

```

### Day Of Week

**Syntaxe :** d = Day Of Week( datetime )

**Description :** Renvoie le jour de la semaine d&apos;une valeur « date-heure » de JMP. Dimanche = 1, ..., Samedi = 7.

**JMP Version ajoutée :** Avant la version 14

```jsl

Day Of Week( Today() );

```

### Day Of Year

**Syntaxe :** d = Day Of Year( datetime )

**Description :** Renvoie le jour de l&apos;année d&apos;une valeur « date-heure » de JMP. Le 1er janvier est 1.

**JMP Version ajoutée :** Avant la version 14

```jsl

Day Of Year( Today() );

```

### Days In Month

**Syntaxe :** v = Days In Month(year, month)

**Description :** Renvoyer le nombre de jours dans un mois donné.

**JMP Version ajoutée :** 15

```jsl

v = Days In Month( 2016, 2 );

```

### Debug Break

**Syntaxe :** Debug Break()

**Description :** Quand cette expression est évaluée dans JSL Debugger, le Debugger arrête l&apos;exécution du script.

**JMP Version ajoutée :** Avant la version 14

```jsl

// Right-click and select Debug.
// In the JSL Debugger, click Run.
x = 5;
y = 8;
Debug Break();
z = x + yy;
Show( z );

```

### Decode URI

**Syntaxe :** Decode URI( value )

**Description :** Coder la chaîne à l&apos;aide du codage URI

**JMP Version ajoutée :** 14

```jsl


Decode URI( "Foo%20Bar" );

```

### Decode64 Blob

**Syntaxe :** y = Decode64 Blob( base64String )

**Description :** Décode une chaîne imprimable de texte en base 64 dans un blob.

**JMP Version ajoutée :** 14

```jsl

Decode64 Blob( "dGhlIHF1aWNrIGJyb3duIGZveA==" );

```

### Decode64 Double

**Syntaxe :** y = Decode64 Double( base64String )

**Description :** Renvoie le nombre à virgule flottante à double précision de la chaîne encodée base64.

**JMP Version ajoutée :** Avant la version 14

```jsl

Decode64 Double( "P/lUWYIBG9Q=" );

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
			complex(
				real * y:real - imag * y:imag,
				imag * y:real + real * y:imag
			)
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

### Delete Directory

**Syntaxe :** rc = Delete Directory( path, &lt;Allow Undo( boolean )&gt; )

**Description :** Supprime un répertoire, ainsi que ses fichiers et sous-répertoires. Renvoie 1 si le répertoire a été supprimé. Renvoie 0 si le répertoire n&apos;a pas pu être supprimé ou si le chemin est incorrect.

**JMP Version ajoutée :** Avant la version 14

```jsl

Delete Directory( "$TEMP/sub1" );
rc0 = Create Directory( "$TEMP/sub1/sub2/sub3" );
Save Text File(
	"$TEMP/sub1/sub2/sub3/temp.txt",
	"example text"
);
date = Last Modification Date( "$TEMP/sub1/sub2/sub3/temp.txt" );
rc1 = Delete Directory( "$TEMP/sub1" );
rc2 = File Exists( "$TEMP/sub1/sub2/sub3/temp.txt" );
Char( rc0 ) || " " || Char( rc1 ) || " " || Char( rc2 ) || " "
 || Format( date, "ddmonyyyy:h:m:s" );/* 1 1 0 date:time */

```

### Delete File

**Syntaxe :** rc = Delete File( path, &lt;Allow Undo( boolean )&gt; )

**Description :** Supprime un fichier. Renvoie 1 si le fichier a été supprimé. Renvoie 0 si le fichier n&apos;a pas pu être supprimé. Génère une erreur si le chemin est incorrect ou n&apos;existe pas.

**JMP Version ajoutée :** Avant la version 14

```jsl

rc0 = Copy File(
	"$SAMPLE_DATA/Loss Function Templates/Normal.jmp",
	"$TEMP/x.jmp"
);
rc1 = File Exists( "$TEMP/x.jmp" );
rc2 = Delete File( "$TEMP/x.jmp" );
rc3 = File Exists( "$TEMP/x.jmp" );
Char( rc0 ) || " " || Char( rc1 ) || " " || Char( rc2 ) || " "
 || Char( rc3 ) /* 1 1 1 0 */;

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

### Derivative

**Syntaxe :** y = Derivative( expr, name )

**Description :** Renvoie la dérivée symbolique pour l&apos;expression donnée par rapport au nom de variable spécifié.

**JMP Version ajoutée :** Avant la version 14

```jsl

Derivative( Sin( x ), x );

```

### Design

**Syntaxe :** y = Design( v, &lt; levelsList|&lt;&lt;Levels, &lt;&lt;ElseMissing &gt; )

**Description :** Crée une matrice de plan qui contient une colonne de 1 et de 0 pour chaque valeur unique de l&apos;argument. Utiliser l&apos;argument levelsList pour spécifier une liste des niveaux pour la matrice de plan. Si l&apos;argument <<Levels est spécifié, la valeur de renvoi est une liste contenant la matrice de plan et une liste des niveaux. Si l&apos;argument <<ElseMissing est spécifié, les valeurs manquantes sont placées dans la matrice de plan pour les valeurs de l&apos;argument v n&apos;apparaissant pas dans la levelsList. Sinon, des 0 sont placés dans la matrice de plan.

**JMP Version ajoutée :** Avant la version 14

```jsl

/* example that Design(...) takes one argument */
exLevels = [1, 2, 3, 2, 1];
Show( Design( exLevels ) );
/* Also see DesignNom, DesignOrd */

/* example that Design(...) takes two arguments */
Show( Design( 3, {1, 2, 3} ) );
Show( Design( [1 2], {1, 2, 3} ) );
exLevels = [1, 2, 3, 2, 1, 2, 3];
Show( Design( exLevels, {1, 2, 3} ) );
Show( Design( {"a", "b"}, {"a", "b", "c"} ) );

/* example that Design(...) takes three arguments */
Show( Design( [1, 2, 3, 4, 5], {1, 2, 3, 4}, <<ElseMissing ) );
Show( Design( [1, 2, 3, 4, 5], {1, 2, 3, 4} ) );

```

### Design Last

**Syntaxe :** y = Design Last( v, &lt; levelsList, &lt;&lt;ElseMissing &gt; )

**Description :** Crée une matrice de plan qui contient une colonne de 1 et de 0 pour toutes les valeurs uniques de l&apos;argument à l&apos;exception de la dernière. Le dernier niveau est codé en tant que ligne de 0. Si l&apos;argument levelsList est spécifié, le dernier niveau est également le dernier niveau dans levelsList. Sinon, le dernier niveau est défini comme la valeur la plus grande dans v. Si l&apos;argument <<Levels est spécifié, la valeur de renvoi est une liste contenant la matrice de plan et une liste des niveaux. Si l&apos;argument  <<ElseMissing est spécifié, les valeurs manquantes sont placées dans la matrice de plan pour les valeurs de l&apos;argument v n&apos;apparaissant pas dans la levelsList. Sinon, des 0 sont placés dans la matrice de plan.

**JMP Version ajoutée :** Avant la version 14

```jsl

/* example that Design Last(...) takes one argument */
exLevels = [1, 2, 3, 2, 1];
Show( Design Last( exLevels ) );
/* see what is different from Design(...) */
Show( Design( exLevels ) );

/* Also see Design, DesignOrd */

/* example that Design Last(...) takes two arguments */
Show( Design Last( 3, {1, 2, 3} ) );
Show( Design( 3, {1, 2, 3} ) );
Show( Design Last( [1 2], {1, 2, 3} ) );
Show( Design( [1 2], {1, 2, 3} ) );
exLevels = [1, 2, 3, 2, 1, 2, 3];
Show( Design Last( exLevels, {1, 2, 3} ) );
Show( Design( exLevels, {1, 2, 3} ) );
Show( Design Last( {"a", "b"}, {"a", "b", "c"} ) );
Show( Design( {"a", "b"}, {"a", "b", "c"} ) );

/* example that Design Last(...) takes three arguments */
Show(
	Design Last( [1, 2, 3, 4, 5], {1, 2, 3, 4}, <<ElseMissing )
);
Show( Design Last( [1, 2, 3, 4, 5], {1, 2, 3, 4} ) );

```

### Design Nom

**Syntaxe :** y = Design Nom( v, &lt; levelsList|&lt;&lt;Levels, &lt;&lt;ElseMissing &gt; )

**Description :** Crée une matrice de plan qui contient une colonne de 1 et de 0 pour toutes les valeurs uniques de l&apos;argument à l&apos;exception de la dernière. Le dernier niveau est codé en tant que ligne de -1. Si l&apos;argument levelsList est spécifié, le dernier niveau est également le dernier niveau dans levelsList. Sinon, le dernier niveau est défini comme la valeur la plus grande dans v. Si l&apos;argument <<Levels est spécifié, la valeur de renvoi est une liste contenant la matrice de plan et une liste des niveaux. Si l&apos;argument <<ElseMissing est spécifié, les valeurs manquantes sont placées dans la matrice de plan pour les valeurs de l&apos;argument v n&apos;apparaissant pas dans la levelsList. Sinon, des 0 sont placés dans la matrice de plan.

**JMP Version ajoutée :** Avant la version 14

```jsl

/* example that Design Nom(...) takes one argument */
exLevels = [1, 2, 3, 2, 1];
Show( Design Nom( exLevels ) );
/* see what is different from Design(...) */
Show( Design( exLevels ) );

/* Also see Design, DesignOrd */

/* example that Design Nom(...) takes two arguments */
Show( Design Nom( 3, {1, 2, 3} ) );
Show( Design( 3, {1, 2, 3} ) );
Show( Design Nom( [1 2], {1, 2, 3} ) );
Show( Design( [1 2], {1, 2, 3} ) );
exLevels = [1, 2, 3, 2, 1, 2, 3];
Show( Design Nom( exLevels, {1, 2, 3} ) );
Show( Design( exLevels, {1, 2, 3} ) );
Show( Design Nom( {"a", "b"}, {"a", "b", "c"} ) );
Show( Design( {"a", "b"}, {"a", "b", "c"} ) );

 /* example that Design Nom(...) takes three arguments */
Show(
	Design Nom( [1, 2, 3, 4, 5], {1, 2, 3, 4}, <<ElseMissing )
);
Show( Design Nom( [1, 2, 3, 4, 5], {1, 2, 3, 4} ) );

```

### Design Ord

**Syntaxe :** y = Design Ord( v, &lt; levelsList|&lt;&lt;Levels, &lt;&lt;ElseMissing &gt; )

**Description :** Crée une matrice de plan qui contient une colonne pour toutes les valeurs uniques de l&apos;argument à l&apos;exception de la dernière. Le premier niveau est codé en tant que ligne de 0. Chacun des (X) niveaux suivants de l&apos;argument levelsList est codé en tant que ligne de (n-1) 1 et le reste en tant que 0. Si l&apos;argument <<Levels est spécifié, la valeur de renvoi est une liste contenant la matrice de plan et une liste des niveaux. Si l&apos;argument <<ElseMissing est spécifié, les valeurs manquantes sont placées dans la matrice de plan pour les valeurs de l&apos;argument v n&apos;apparaissant pas dans la levelsList. Sinon, des 0 sont placés dans la matrice de plan.

**JMP Version ajoutée :** Avant la version 14

```jsl

/* example that Design Ord(...) takes one argument */
exLevels = [1, 2, 3, 2, 1];
Show( Design Ord( exLevels ) );
/* see what is different from Design Nom(...) */
Show( Design Nom( exLevels ) );

/* Also see Design, Design Nom */

/* example that Design Ord(...) takes two arguments */
Show( Design Ord( 3, {1, 2, 3} ) );
Show( Design Nom( 3, {1, 2, 3} ) );
Show( Design Ord( [1 2], {1, 2, 3} ) );
Show( Design Nom( [1 2], {1, 2, 3} ) );
exLevels = [1, 2, 3, 2, 1, 2, 3];
Show( Design Ord( exLevels, {1, 2, 3} ) );
Show( Design Nom( exLevels, {1, 2, 3} ) );
Show( Design Ord( {"a", "b"}, {"a", "b", "c"} ) );
Show( Design Nom( {"a", "b"}, {"a", "b", "c"} ) );

/* example that Design Ord(...) takes three arguments */
Show(
	Design Ord( [1, 2, 3, 4, 5], {1, 2, 3, 4}, <<ElseMissing )
);
Show( Design Ord( [1, 2, 3, 4, 5], {1, 2, 3, 4} ) );

```

### DesignF

**Syntaxe :** y = DesignF( v, &lt; levelsList|&lt;&lt;Levels, &lt;&lt;ElseMissing &gt; )

**Description :** Crée une matrice de plan qui contient une colonne de 1 et de 0 pour toutes les valeurs uniques de l&apos;argument à l&apos;exception de la dernière. Le dernier niveau est codé en tant que ligne de -1. Si l&apos;argument levelsList est spécifié, le dernier niveau est également le dernier niveau dans levelsList. Sinon, le dernier niveau est défini comme la valeur la plus grande dans v. Si l&apos;argument <<Levels est spécifié, la valeur de renvoi est une liste contenant la matrice de plan et une liste des niveaux. Si l&apos;argument <<ElseMissing est spécifié, les valeurs manquantes sont placées dans la matrice de plan pour les valeurs de l&apos;argument v n&apos;apparaissant pas dans la levelsList. Sinon, des 0 sont placés dans la matrice de plan.

**JMP Version ajoutée :** Avant la version 14

```jsl

/* example that DesignF(...) takes one argument */
exLevels = [1, 2, 3, 2, 1];
Show( DesignF( exLevels ) );
/* see what is different from Design(...) */
Show( Design( exLevels ) );

/* Also see Design, DesignOrd */

/* example that DesignF(...) takes two arguments */
Show( DesignF( 3, {1, 2, 3} ) );
Show( Design( 3, {1, 2, 3} ) );
Show( DesignF( [1 2], {1, 2, 3} ) );
Show( Design( [1 2], {1, 2, 3} ) );
exLevels = [1, 2, 3, 2, 1, 2, 3];
Show( DesignF( exLevels, {1, 2, 3} ) );
Show( Design( exLevels, {1, 2, 3} ) );
Show( DesignF( {"a", "b"}, {"a", "b", "c"} ) );
Show( Design( {"a", "b"}, {"a", "b", "c"} ) );

/* example that DesignF(...) takes three arguments */
Show( DesignF( [1, 2, 3, 4, 5], {1, 2, 3, 4}, <<ElseMissing ) );
Show( DesignF( [1, 2, 3, 4, 5], {1, 2, 3, 4} ) );

```

### Desirability

**Syntaxe :** des = Desirability( yVector, dVector, y )

**Description :** Renvoie une courbe de désirabilité où yVector est un vecteur de 3 valeurs d&apos;entrée, dVector constitue les 3 valeurs de désirabilité correspondantes, et y est l&apos;argument permettant de calculer la désirabilité..

**JMP Version ajoutée :** Avant la version 14

```jsl

dvec = [0.1 0.9 0.1];
yvec = [1 5 10];
New Window( "Desirability",
	Graph Box(
		X Scale( 0, 12 ),
		Y Scale( 0, 1 ),
		Frame Size( 500, 400 ),
		Drag Marker( yvec, dvec );
		Y Function( Desirability( yvec, dvec, x ), x );
	)
);

```

### Det

**Syntaxe :** y = Det( x )

**Description :** Renvoie le déterminant d&apos;une matrice carrée.

**JMP Version ajoutée :** Avant la version 14

```jsl

Det( [11 22, 33 44] );

```

### Diag

**Syntaxe :** y = Diag( matrix ); y = Diag( vector ); y = Diag( matrix1, matrix )

**Description :** Construit une matrice diagonale à partir d&apos;une matrice ou d&apos;un vecteur. Si deux arguments sont spécifiés,concatène les matrices diagonalement.

**JMP Version ajoutée :** Avant la version 14

```jsl

Diag( [11 22] );

```

### Dialog

**Syntaxe :** y = Dialog( specification )

**Description :** Invite l&apos;utilisateur avec une fenêtre modale. Cette fonction est obsolète. Veuillez utiliser la fonction Nouvelle fenêtre avec l&apos;argument <<Modal.

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

// See Example 2 for the deprecated Dialog equivalent
If(
	ex = New Window( "Dialog() example",
		<<Modal,
		<<Return Result,
		V List Box(
			H List Box(
				"Set this value",
				variable = Number Edit Box( 42 )
			),
			H List Box(
				Button Box( "OK" ),
				Button Box( "Cancel" )
			)
		)
	);
	ex["button"] == 1;
,
	ex["variable"],
	"CANCEL"
);

```

**Exemple 2**

```jsl

// Deprecated
If(
	ex = Dialog(
		Title( " Dialog() example" ),
		vlist(
			hlist(
				"Set this value", variable = EditNumber( 42 )
			),
			hlist( Button( "OK" ), Button( "Cancel" ) )
		)
	);
	ex["button"] == 1;
,
	ex["variable"],
	"CANCEL"
);

```

### Dif

**Syntaxe :** y = Dif( x, &lt;n=1&gt; )

**Description :** Renvoie x - Lag( x, n ), également connue sous le nom de "première différence". Puisqu&apos;elle dépend de Row(), la fonction Dif() est principalement utile dans les formules de colonne.

**JMP Version ajoutée :** Avant la version 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row() = 3;
Dif( :height, 2 );

```

### Digamma

**Syntaxe :** y = Digamma( x )

**Description :** Renvoie la fonction digamma évaluée à x, où la fonction digamma est la dérivée du logarithme de la fonction gamma.

**JMP Version ajoutée :** Avant la version 14

```jsl

Digamma( 5 );

```

### Dim

**Syntaxe :** y = Dim(); y = Dim( dt ); y = Dim( matrix )

**Description :** Renvoie un vecteur ligne avec les dimensions de la table de données active, une table de données spécifiée ou une matrice. Les dimensions correspondent au nombre de lignes et de colonnes, et sont listées dans cet ordre.

**JMP Version ajoutée :** 14

```jsl

Dim( [11 22, 33 44, 55 66] );

```

### Direct Product

**Syntaxe :** y = Direct Product( A, B )

**Description :** Renvoie le produit cartésien ou de Kronecker. Le résultat est A[i,j]*B, en développant tous les produits possibles.

**JMP Version ajoutée :** Avant la version 14

```jsl

exA = [1 2, 3 4];
exB = [1 1 1, 2 2 2, 3 3 3];
exProd = Direct Product( exA, exB );
Show( exProd );

/* verify results */
Show( exProd[1 :: 3, 1 :: 3] == exB );
Show( exProd[4 :: 6, 1 :: 3] == (exB * 3) );
Show( exProd[1 :: 3, 4 :: 6] == (exB * 2) );
Show( exProd[4 :: 6, 4 :: 6] == (exB * 4) );

/* Also see H Direct Product */

```

### Directory Exists

**Syntaxe :** rc = Directory Exists( path )

**Description :** Déterminez si le répertoire existe. Renvoie 1 si le chemin existe. Renvoie 0 si le chemin est incorrect ou n&apos;existe pas.

**JMP Version ajoutée :** Avant la version 14

```jsl

If( Directory Exists( "$SAMPLE_DATA/Loss Function Templates" ),
	"ok",
	"missing!"
);

```

### Disable JMP Live URL

**Syntaxe :** Disable JMP Live URL(url)

**Description :** Désactive un URL JMP Live. Cette méthode est uniquement disponible lors de l&apos;exécution de jmpStartAdmin.jsl. Un astérisque * peut être utilisé en tant que caractère générique pour spécifier les URL comme suit : * (tout URL), *.jmp.com (un URL se terminant par .jmp.com), http://public.* (un URL commençant par http://public.), ou *public* (un URL contenant public).

**JMP Version ajoutée :** 15

```jsl


Disable JMP Live URL( "*public.jmp.com" );

```

### Disable Proxy Settings

**Syntaxe :** Disable Proxy Settings( 1|0 )

**Description :** Désactive ou active les paramètres du proxy lors de l&apos;exécution de jmpStartAdmin.jsl. Les paramètres du proxy sont activés par défaut.

**JMP Version ajoutée :** 15

```jsl


Disable Proxy Settings( 1 );

```

### Distance

**Syntaxe :** y = Distance( x1, x2, &lt;scales&gt;, &lt;powers&gt; )

**Description :** Crée une matrice de distances entre les lignes de x1 et les lignes de x2. Pour personnaliser le codage et les puissances pour chaque colonne, spécifiez les arguments supplémentaires scale et powers. La fonction Exp(-distance(x1,x2)) est utilisée pour le krigeage.

**JMP Version ajoutée :** Avant la version 14

```jsl

/*1-D example*/
exX1 = [1, 2, 3, 4];
exX2 = [2, 4, 6, 8]; 
/*Compute squared Euclidean distance*/
exD = Distance( exX1, exX2 ); 
/*Verify result*/
exDm = J( 4, 4, . );
For( exi = 1, exi <= 4, exi++,
	For( exj = 1, exj <= 4, exj++,
		exDm[exi, exj] = Sum(
			(exX1[exi, 0] - exX2[exj, 0]) ^ 2
		)
	)
);
Show( exDm == exD ); 

/*2-D example*/
exX1 = [1 1, 2 2, 3 3, 4 4];
exX2 = [2 1, 4 2, 6 0, 8 7]; 
/*Compute squared Euclidean distance*/
exD = Distance( exX1, exX2 ); 
/*Verify result*/
exDm = J( 4, 4, . );
For( exi = 1, exi <= 4, exi++,
	For( exj = 1, exj <= 4, exj++,
		exDm[exi, exj] = Sum(
			(exX1[exi, 0] - exX2[exj, 0]) ^ 2
		)
	)
);
Show( exDm == exD ); 

/*2-D example*/
exX1 = [1 1, 2 2, 3 3, 4 4];
exX2 = [2 1, 4 2, 6 0, 8 7]; 
/*Compute squared Euclidean distance, with a scaler [0.5 2.0]*/
exD = Distance( exX1, exX2, [0.5 2.0] ); 
/*Verify result*/
exDm = J( 4, 4, . );
For( exi = 1, exi <= 4, exi++,
	For( exj = 1, exj <= 4, exj++,
		exDm[exi, exj] = Sum(
			[0.5 2.0] :* (Abs( exX1[exi, 0] - exX2[exj, 0] ) ^ 2
			)
		)
	)
);
Show( exDm == exD ); 

/*2-D example*/
exX1 = [1 1, 2 2, 3 3, 4 4];
exX2 = [2 1, 4 2, 6 0, 8 7]; 
/*Compute squared Euclidean distance, with scalers [0.5 2.0] and powers [1.5 2.0]*/
exD = Distance( exX1, exX2, [0.5 2.0], [1.5 2.0] ); 
/*Verify result*/
exDm = J( 4, 4, . );
For( exi = 1, exi <= 4, exi++,
	For( exj = 1, exj <= 4, exj++,
		exDm[exi, exj] = Sum(
			[0.5 2.0] :* (Abs( exX1[exi, 0] - exX2[exj, 0] ) :^
			[1.5 2.0])
		)
	)
);
Show( exDm == exD );

```

### Divide

**Syntaxe :** y = x0 / x1; y = Divide( x0, &lt;x1&gt;, ... )

**Description :** Sépare tous les arguments consécutifs du premier argument. Les arguments peuvent être des nombres, des matrices ou des listes de nombres. Lorsque l&apos;appel est fait avec un seul argument, le résultat est la réciproque.

**JMP Version ajoutée :** Avant la version 14

**Réciproque**

```jsl

x = Divide( 5 );
y = 1 / 5;
Show( x, y );

```

**Simple**

```jsl

6 / 3 / 2;

```

### Divide To

**Syntaxe :** y /= x; Divide To( y, x )

**Description :** Divise une variable ou une liste de variables par une valeur.

**JMP Version ajoutée :** Avant la version 14

```jsl

ex = 1;
ex /= 2;
ex;

```

### Double Declining Balance

**Syntaxe :** x = Double Declining Balance( cost, salvage, life, period, &lt;factor=2&gt; )

**Description :** Renvoie l’amortissement d’un capital sur une période donnée à l’aide la méthode dégressive à taux double ou d’un autre facteur d’amortissement. Équivalent à la fonction DDB de Microsoft Excel.

**JMP Version ajoutée :** Avant la version 14

```jsl

Double Declining Balance( 10000, 100, 3, 2 );

```

### Drag Line

**Syntaxe :** Drag Line( xMatrixName, yMatrixName, &lt;dragScript&gt;, &lt;MouseUpScript&gt; )

**Description :** Dessine une polyligne sur les points indiqués. Toutefois, à la différence de la ligne, les points peuvent être glissés à l&apos;écran, ce qui met à jour les valeurs des arguments de la matrice (valeur L).

**JMP Version ajoutée :** Avant la version 14

```jsl

New Window( "Example",
	exx = [11 33 77];
	exy = [88 22 44];,
	Graph Box(
		Drag Line( exx, exy );
		Line( exx, exy );
	)
);

```

### Drag Marker

**Syntaxe :** Drag Marker( xMatrixName, yMatrixName, &lt;dragScript&gt;, &lt;MouseUpScript&gt; )

**Description :** Dessine des marqueurs déplaçables aux point indiqués. Les valeurs de la matrice sont mises à jour lorsque les marqueurs sont déplacés.

**JMP Version ajoutée :** Avant la version 14

```jsl

New Window( "Example",
	exx = [11 33 77];
	exy = [88 22 44];,
	Graph Box(
		Drag Marker( exx, exy );
		Line( exx, exy );
	)
);

```

### Drag Polygon

**Syntaxe :** Drag Polygon( xMatrixName, yMatrixName, &lt;dragScript&gt;, &lt;MouseUpScript&gt; )

**Description :** Dessine un polygone plein sur les points indiqués. Les points peuvent être glissés à l&apos;écran, ce qui met à jour les valeurs des arguments de matrice (l-value).

**JMP Version ajoutée :** Avant la version 14

```jsl

New Window( "Example",
	exx = [11 33 77];
	exy = [88 22 44];,
	Graph Box(
		Drag Polygon( exx, exy );
		Line( exx, exy );
	)
);

```

### Drag Rect

**Syntaxe :** Drag Rect( xMatrixName, yMatrixName, &lt;dragScript&gt;, &lt;MouseUpScript&gt; )

**Description :** Dessine un rectangle sur les points indiqués. Toutefois, à la différence de Rect, ces coins peuvent être glissés à l&apos;écran, ce qui met à jour les valeurs des arguments de la matrice (valeur L).

**JMP Version ajoutée :** Avant la version 14

```jsl

New Window( "Example",
	exx = [11 33];
	exy = [88 22];,
	Graph Box(
		Drag Rect( exx, exy );
		Line( exx, exy );
	)
);

```

### Drag Text

**Syntaxe :** Drag Text( xMatrixName, yMatrixName, text, &lt;dragScript&gt;, &lt;MouseUpScript&gt; )

**Description :** Dessine le texte aux points indiqués. Toutefois, à la différence de la fonction Text(), les points peuvent être glissés à l&apos;écran, ce qui met à jour les valeurs des arguments des matrices xMatrixName et yMatrixName. L’argument text peut être une chaîne ou une liste de chaînes.

**JMP Version ajoutée :** Avant la version 14

```jsl

New Window( "Example",
	exx = [11 33 77];
	exy = [88 22 44];,
	Graph Box(
		Drag Text( exx, exy, "hello" );
		Line( exx, exy );
	)
);

```

### Dunnett P value

**Syntaxe :** p = Dunnett P value( q, nTrt, dfe, &lt;lambdaVec = .&gt; )

**Description :** Renvoie la p-value du test des comparaisons multiples de Dunnett, où q est la statistique de test, nTrt est le nombre de traitements à comparer avec le groupe de contrôle, dfe est le degré de liberté de l’erreur (compte tenu de l’échantillon total de l’étude) et le lambdaVec facultatif est un vecteur des paramètres, lesquels sont définis 1/sqrt(2) par défaut.

**JMP Version ajoutée :** Avant la version 14

```jsl

Dunnett P value( 1.67623, 3, 11 );

```

### Dunnett Quantile

**Syntaxe :** q = Dunnett Quantile( 1-alpha, nTrt, dfe, &lt;lambdaVec = .&gt; )

**Description :** Renvoie le quantile nécessaire pour le test des comparaisons multiples de Dunnett, où 1-alpha est le niveau de confiance, nTrt est le nombre de traitements à comparer avec le groupe de contrôle, dfe est le degré de liberté de l’erreur (compte tenu de l’échantillon total de l’étude) et le lambdaVec facultatif est un vecteur des paramètres, lesquels sont définis 1/sqrt(2) par défaut.

**JMP Version ajoutée :** Avant la version 14

```jsl

Dunnett Quantile( 0.95, 3, 11 );

```

### e

**Syntaxe :** y = e()

**Description :** Renvoie la constante mathématique e, avec une précision d&apos;environ 15 chiffres après la virgule : 2.7182818....

**JMP Version ajoutée :** Avant la version 14

```jsl

Round( e(), 10 );

```

### E Div

**Syntaxe :** y = A :/ B; y = E Div( A, B )

**Description :** Renvoie une division par élément de matrices.

**JMP Version ajoutée :** Avant la version 14

```jsl

[11 22 33] :/ [1 2 3];

```

### E Max

**Syntaxe :** y = E Max( A, B )

**Description :** Renvoie une matrice qui est le maximum des éléments correspondants de ses arguments.

**JMP Version ajoutée :** 16

```jsl

E Max( [1 22 33], [11 2 3] );

```

### E Min

**Syntaxe :** y = E Min( A, B )

**Description :** Renvoie une matrice qui est le minimum des éléments correspondants de ses arguments.

**JMP Version ajoutée :** 16

```jsl

E Min( [1 22 33], [11 2 3] );

```

### E Mult

**Syntaxe :** y = A :* B; y = E Mult( A, B )

**Description :** Renvoie une multiplication par élément de matrices.

**JMP Version ajoutée :** Avant la version 14

```jsl

[1 2 3] :* [11 22 33];

```

### Eigen

**Syntaxe :** {M, E} = Eigen( X )

**Description :** Réalise la diagonalisation d&apos;une matrice X symétrique en valeurs propres. Renvoie la liste {M, E} telle que E*Diag(M)*E` = X.

**JMP Version ajoutée :** Avant la version 14

```jsl

X = [11 22, 22 33];
{M, E} = Eigen( X );
E * Diag( M ) * E`;

```

### Eigen BLAS

**Syntaxe :** z = Eigen BLAS( X, &lt;nvec = ncol&gt; )

**JMP Version ajoutée :** 17

```jsl

X = [5 4 1 1, 4 5 1 1, 1 1 4 2, 1 1 2 4];
{M1, E1} = Eigen BLAS( X );

```

### Empty

**Syntaxe :** y = Empty()

**Description :** Renvoie une valeur vide. Utilisé dans l&apos;éditeur de formules pour les arguments non spécifiés.

**JMP Version ajoutée :** Avant la version 14

```jsl

Empty();

```

### Enable JMP Live URL

**Syntaxe :** Enable JMP Live URL(url)

**Description :** Active un URL JMP Live. Cette méthode est uniquement disponible lors de l&apos;exécution de jmpStartAdmin.jsl. Un astérisque * peut être utilisé en tant que caractère générique pour spécifier les URL comme suit : * (tout URL), *.jmp.com (un URL se terminant par .jmp.com), http://public.* (un URL commençant par http://public.), ou *public* (un URL contenant public).

**JMP Version ajoutée :** 15

```jsl


Enable JMP Live URL( "https://public.jmp.com" );

```

### Enable Proxy Settings

**Syntaxe :** Enable Proxy Settings( 1|0 )

**Description :** Active ou désactive les paramètres du proxy lors de l&apos;exécution de jmpStartAdmin.jsl. Les paramètres du proxy sont activés par défaut.

**JMP Version ajoutée :** 15

```jsl


Enable Proxy Settings( 0 );

```

### Encode URI

**Syntaxe :** Encode URI( value )

**Description :** Coder la chaîne à l&apos;aide du codage URI

**JMP Version ajoutée :** 14

```jsl


Encode URI( "Foo Bar" );

```

### Encode64 Blob

**Syntaxe :** s = Encode64 Blob( x )

**Description :** Code un blob dans une chaîne imprimable de texte en base 64.

**JMP Version ajoutée :** 14

```jsl

Encode64 Blob( Char To Blob( "the quick brown fox" ) );

```

### Encode64 Double

**Syntaxe :** s = Encode64 Double( x )

**Description :** Renvoie un encodage de chaîne base64 du nombre à virgule flottante.

**JMP Version ajoutée :** Avant la version 14

```jsl

Encode64 Double( -1.5831 );

```

### Ends With

**Syntaxe :** b = Ends With( s, sub )

**Description :** Renvoie 1 si s finit par sub, et 0 dans le cas contraire. Les arguments s et sub peuvent être deux chaînes ou deux listes. Équivalent à Right( s, Length( sub )) == sub.

**JMP Version ajoutée :** Avant la version 14

```jsl

Ends With( "http://www.jmp.com", ".com" );

```

### Equal

**Syntaxe :** z = x == y == ...; z = Equal( x, y, ... )

**Description :** Renvoie 1 si chaque argument est égal à l&apos;argument suivant, et 0 dans le cas contraire.

**JMP Version ajoutée :** Avant la version 14

```jsl

1 == 1;

```

### Estimate Bartlett Factor Score

**Syntaxe :** {factorScores} = Estimate Bartlett Factor Score( dataRow , mvMeanVec, lvMeanVec, modSRAM, modARAM )

**Description :** En utilisant la méthode de Bartlett, estime les scores des facteurs à partir d&apos;un modèle d&apos;équation structurelle (MES). Les arguments d&apos;entrée sont un vecteur de données ligne, la moyenne à modèle implicite pour les variables manifestes, la moyenne à modèle implicite pour les variables latentes, la matrice S RAM et une matrice A RAM provenant d&apos;un MES. Renvoie un vecteur ligne avec les scores des facteurs estimés sur la base du MES.

**JMP Version ajoutée :** 16

```jsl

Estimate Bartlett Factor Score(
	[2 2 0],
	[2.085 2.76 1.56],
	[0],
	[1 0 0 0 0,
	0 0.684181992749 0 0 0,
	0 0 1.19686444665695 0 0,
	0 0 0 0.875198112795068 0,
	0 0 0 0 0.953592961124492],
	[0 0 0 0 0,
	2.085 0 0 0 1,
	2.76 0 0 0 0.61913203807175,
	1.56 0 0 0 0.710365935511608,
	0 0 0 0 0]
);

```

### Estimate Factor Score

**Syntaxe :** {factorScores} = Estimate Factor Score( dataRow , modImpVarCov, mvMeanVec, lvMeanVec )

**Description :** En utilisant la méthode par régression, estime les scores des facteurs à partir d&apos;un modèle d&apos;équation structurelle (MES). Les arguments d&apos;entrée sont un vecteur de données ligne, une matrice de variance-covariance à modèle implicite, un vecteur des moyennes des variables manifestes à modèle implicite, et un vecteur des moyennes des variables latentes à modèle implicite. Renvoie un vecteur ligne avec les scores des facteurs estimés sur la base du MES.

**JMP Version ajoutée :** 15

```jsl

Estimate Factor Score(
	[7 10 5 2 2 0],
	[1.66 0.45 0.58 -0.58 -0.44 -0.5 0.59 -0.58,
	0.45 1.22 0.44 -0.44 -0.33 -0.38 0.45 -0.44,
	0.58 0.44 1.88 -0.57 -0.43 -0.49 0.58 -0.57,
	-0.58 -0.44 -0.57 1.64 0.57 0.65 -0.58 0.76,
	-0.44 -0.33 -0.43 0.57 1.56 0.49 -0.44 0.57,
	-0.5 -0.38 -0.49 0.65 0.49 1.36 -0.5 0.65,
	0.59 0.45 0.58 -0.58 -0.44 -0.5 0.59 -0.58,
	-0.58 -0.44 -0.57 0.76 0.57 0.65 -0.58 0.76],
	[6.59, 8.81, 2.92, 2.09, 2.76, 1.56],
	[0, 0]
);

```

### Eval

**Syntaxe :** y = Eval( x )

**Description :** Évalue l&apos;argument et retourne le résultat.

**JMP Version ajoutée :** Avant la version 14

```jsl

Eval( Expr( 1 + 2 ) );

```

### Eval Expr

**Syntaxe :** y = Eval Expr( x )

**Description :** Renvoie une copie de l&apos;expression x avec chaque clause Expr() dans x remplacée par sa valeur évaluée.

**JMP Version ajoutée :** Avant la version 14

```jsl

Eval Expr( Length( Expr( "X" || Char( 12 ) ) ) );

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

**Exemple 1**

```jsl

Eval List( {1 + 2, 3 + 4} );

```

**Exemple 2**

```jsl

x = 5;
y = 10;
Eval List( {x, y} );

```

### Excerpt Box

**Syntaxe :** y = Excerpt Box( rptnum, lstSubscripts )

**Description :** Renvoie une boîte d&apos;affichage contenant l&apos;extrait indiqué par le rapport numéro rptnum et la liste des indices d&apos;affichage lstSubscripts. Les indices indiquent l&apos;état actuel du rapport, une fois que les extraits antérieurs ont été supprimés.

**JMP Version ajoutée :** Avant la version 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Example",
	V Sheet Box(
		<<Hold(
			Bivariate( Y( :weight ), X( :height ), Fit Line() )
		),
		<<Hold(
			Distribution(
				Automatic Recalc( 1 ),
				Continuous Distribution(
					Column( :height ),
					Horizontal Layout( 1 ),
					Vertical( 0 ),
					Outlier Box Plot( 0 )
				)
			)
		),
		<<Hold( Treemap( Categories( :age ) ) ),
		<<Hold(
			Bubble Plot(
				X( :height ),
				Y( :weight ),
				Sizes( :age ),
				Coloring( :sex ),
				Circle Size( 6.226 ),
				All Labels( 0 )
			)
		),
		H Sheet Box(
			Sheet Part(
				"weight by height",
				Excerpt Box( 1, {Picture Box( 1 )} )
			),
			Sheet Part(
				"height",
				Excerpt Box( 2, {Picture Box( 1 )} )
			)
		),
		H Sheet Box(
			Sheet Part(
				"",
				Excerpt Box( 3, {Picture Box( 1 )} )
			),
			Sheet Part(
				"height by weight",
				Excerpt Box( 4, {Picture Box( 1 )} )
			)
		)
	)
);

```

### Excluded

**Syntaxe :** y = Excluded( &lt;rs&gt; ); Excluded( &lt;Row State( &lt;r&gt; )&gt; ) = y

**Description :** Renvoie la composante exclue de la valeur d&apos;état de ligne spécifiée, 0 ou 1. Si la fonction Excluded() est utilisée comme L-value, l’état exclu de la ligne active (ou r-ième) de la table de données active est modifié.

**JMP Version ajoutée :** Avant la version 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Excluded State( 1 );
Excluded( Row State( 3 ) );
Row() = 3;
Excluded();

```

### Excluded State

**Syntaxe :** rs = Excluded State( x )

**Description :** Renvoie une valeur d&apos;état de ligne avec la composante exclue définie comme la valeur spécifiée.

**JMP Version ajoutée :** Avant la version 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Excluded State( 1 );
Excluded( Row State( 3 ) );

```

### Execute SQL

**Syntaxe :** dt = Execute SQL(databaseConnectionHandle|dataConnector, "SELECT ..."|"SQLFILE=..."|tableName, &lt;invisible(0|1)&gt;, &lt;outputTableName&gt;, &lt;Batch Submit(0|1)&gt; )

**Description :** Exécute SQL sur une connexion à la base de données renvoyée par la commande Créer une connexion à la base de données ou un connecteur de données. L&apos;activation de l&apos;envoi par lot permet de recevoir plusieurs instructions SQL et de renvoyer une liste des résultats (pilotes qui prennent en charge cette fonction uniquement).

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

dt = Execute SQL(
	databaseConnectionHandle,
	"SELECT HEIGHT, WEIGHT FROM Bigclass",
	"NewTable"
);

```

**Exemple 2**

```jsl

dc = Data Connector Registry() << Get( "com.jmp.sql_server" );
dt = Execute SQL( dc, "SELECT HEIGHT, WEIGHT FROM Bigclass" );

```

**Exemple 3**

```jsl

dc = Data Connector Registry() << Get( "com.jmp.sql_server" );
resultList = Execute SQL(
	dc,
	"SELECT HEIGHT, WEIGHT FROM Bigclass; SELECT AGE, WEIGHT FROM BigClass;",
	Batch Submit( 1 )
);

```

### ExGaussian Density

**Syntaxe :** y = ExGaussian Density( x, location, scale, shape )

**Description :** Renvoie la densité à x d&apos;une distribution ExGaussienne.

**JMP Version ajoutée :** 18

```jsl

New Window( "Example: ExGaussian Density",
	y = Graph Box(
		Y Scale( 0, .2 ),
		X Scale( -2, 15 ),
		XName( "x" ),
		Pen Color( "red" );
		Y Function( ExGaussian Density( x, 0, .5, .25 ), x );
	)
);

```

### ExGaussian Distribution

**Syntaxe :** y = ExGaussian Distribution( x, location, scale, shape )

**Description :** Renvoie la probabilité qu&apos;une variable aléatoire distribuée de façon ExGaussienne soit inférieure à x.

**JMP Version ajoutée :** 18

```jsl

New Window( "Example: ExGaussian Distribution",
	y = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( -2, 15 ),
		XName( "x" ),
		Pen Color( "red" );
		Y Function(
			ExGaussian Distribution( x, 0, .5, .25 ),
			x
		);
	)
);

```

### ExGaussian Quantile

**Syntaxe :** q = ExGaussian Quantile( p, mu, sigma, lambda )

**Description :** Renvoie le quantile d&apos;une distribution ExGaussienne, correspondant à la probabilité p qu&apos;une valeur aléatoire soit inférieure à la valeur du quantile.

**JMP Version ajoutée :** 18

```jsl

New Window( "Example: ExGaussian Quantile",
	Graph Box(
		Y Scale( -2, 15 ),
		X Scale( 0, 1 ),
		XName( "p" ),
		Pen Color( "red" );
		Y Function( ExGaussian Quantile( p, 0, .5, .25 ), p );
	)
);

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
	)["Button"] == 1, /*OK==1*/Exit(), /*cancel==-1*/
	"Good choice."
);

```

### Exp

**Syntaxe :** y = Exp( &lt;x=1&gt; )

**Description :** Renvoie e élevé à la puissance x. L’argument peut être un nombre, une matrice ou une liste de nombres.

**JMP Version ajoutée :** Avant la version 14

```jsl

Round( Exp( 1 ), 5 );

```

### Exp Density

**Syntaxe :** y = Exp Density( x, &lt;theta=1&gt; )

**Description :** Renvoie la densité à x d&apos;une distribution exponentielle avec paramètre theta.

**JMP Version ajoutée :** 14

```jsl

New Window( "Example: Exp Density",
	y = Graph Box(
		Y Scale( 0, 0.45 ),
		X Scale( 0, 4 ),
		XName( "x" ),
		Pen Color( "red" );
		Y Function( Exp Density( x, 2 ), x );
	)
);

```

### Exp Distribution

**Syntaxe :** p = Exp Distribution( x, &lt;theta=1&gt; )

**Description :** Renvoie la probabilité qu&apos;une variable aléatoire distribuée exponentiellement soit inférieure à x.

**JMP Version ajoutée :** 14

```jsl

New Window( "Example: Exp Distribution",
	y = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( 0, 4 ),
		XName( "x" ),
		Pen Color( "red" );
		Y Function( Exp Distribution( x, 2 ), x );
	)
);

```

### Exp Quantile

**Syntaxe :** q = Exp Quantile( p, &lt;theta=1&gt; )

**Description :** Renvoie le quantile d’une distribution exponentielle, correspondant à la probabilité p qu’une variable aléatoire ayant cette distribution prenne une valeur inférieure au quantile.

**JMP Version ajoutée :** 14

```jsl

New Window( "Example: Exp Quantile",
	y = Graph Box(
		Y Scale( 0, 4 ),
		X Scale( 0, 1 ),
		Pen Color( "red" );
		Y Function( Exp Quantile( qq, 2 ), qq );
	)
);

```

### ExpM1

**Syntaxe :** y = ExpM1( x )

**Description :** Renvoie un calcul de Exp(x)-1 plus précis lorsque x est très petit.

**JMP Version ajoutée :** Avant la version 14

```jsl

Show( ExpM1( 1.1e-18 ), Exp( 1.1e-18 ) - 1 );

```

### Exponential Density

**Syntaxe :** y = Exponential Density( x, &lt;theta=1&gt; )

**Description :** Renvoie la densité à x d&apos;une distribution exponentielle avec paramètre theta.

**JMP Version ajoutée :** 17

```jsl

New Window( "Example: Exponential Density",
	y = Graph Box(
		Y Scale( 0, 0.45 ),
		X Scale( 0, 4 ),
		XName( "x" ),
		Pen Color( "red" );
		Y Function( Exponential Density( x, 2 ), x );
	)
);

```

### Exponential Distribution

**Syntaxe :** p = Exponential Distribution( x, &lt;theta=1&gt; )

**Description :** Renvoie la probabilité qu&apos;une variable aléatoire distribuée exponentiellement soit inférieure à x.

**JMP Version ajoutée :** 17

```jsl

New Window( "Example: Exponential Distribution",
	y = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( 0, 4 ),
		XName( "x" ),
		Pen Color( "red" );
		Y Function( Exponential Distribution( x, 2 ), x );
	)
);

```

### Exponential Quantile

**Syntaxe :** q = Exponential Quantile( p, &lt;theta=1&gt; )

**Description :** Renvoie le quantile d’une distribution exponentielle, correspondant à la probabilité p qu’une variable aléatoire ayant cette distribution prenne une valeur inférieure au quantile.

**JMP Version ajoutée :** 17

```jsl

New Window( "Example: Exponential Quantile",
	y = Graph Box(
		Y Scale( 0, 4 ),
		X Scale( 0, 1 ),
		Pen Color( "red" );
		Y Function( Exponential Quantile( qq, 2 ), qq );
	)
);

```

### Expr

**Syntaxe :** y = Expr( x )

**Description :** Renvoie son argument non évalué. Utilisé pour citer des expressions.

**JMP Version ajoutée :** Avant la version 14

```jsl

Expr( x + y );

```

### Expr As Picture

**Syntaxe :** y = Expr As Picture( expr( ... ), &lt;width in pixels&gt;, &lt;Max Matrix Size( dim )&gt; )

**Description :** Renvoie une image contenant l&apos;expression spécifiée comme image de formule. La largeur par défaut est 600 pixels et la taille de matrice max par défaut est 100.

**JMP Version ajoutée :** Avant la version 14

```jsl

New Window( "Example",
	Lineup Box( N Col( 1 ), spacing( 10 ),
		Text Box( "Quadratic Formula" ),
		Border Box( Left( 10 ), Right( 10 ), bottom( 10 ),
			top( 10 ), sides( 15 ),
			Expr As Picture(
				Expr(
					(-b + Sqrt( b ^ 2 - 4 * a * c )) / (2 * a)
				)
			)
		)
	)
);

```

### Extract Expr

**Syntaxe :** y = Extract Expr( expr, pattern )

**Description :** Renvoie une sous-expression correspondant à la configuration spécifiée.

**JMP Version ajoutée :** Avant la version 14

```jsl

Extract Expr( a + b * c, Wild() * Wild() );

```

### F Density

**Syntaxe :** y = F Density( q, dfnum, dfden, &lt;nonCentrality=0&gt; )

**Description :** Renvoie la densité à q d’une distribution de Fisher avec dfn et dfd degré(s) de liberté.

**JMP Version ajoutée :** Avant la version 14

```jsl

fdedfn = 2;
fdedfd = 2;
New Window( "Example: F Density",
	fdey = Graph Box(
		Y Scale( 0, 0.8 ),
		X Scale( 0, 5 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( F Density( fdeq, fdedfn, fdedfd ), fdeq );
		Text(
			{2.5, 0.7},
			"dfn=",
			Round( fdedfn, 2 ),
			" dfd=",
			Round( fdedfd, 2 )
		);
	),
	H List Box(
		Text Box( "dfn " ),
		Slider Box( 1, 10, fdedfn, fdey << reshow )
	),
	H List Box(
		Text Box( "dfd " ),
		Slider Box( 1, 10, fdedfd, fdey << reshow )
	)
);

```

### F Distribution

**Syntaxe :** y = F Distribution( q, dfnum, dfden, &lt;nonCentrality=0&gt; )

**Description :** Renvoie la probabilité qu&apos;une variable aléatoire distribuée selon F est inférieure à q.

**JMP Version ajoutée :** Avant la version 14

```jsl

fdidfn = 5;
fdidfd = 5;
New Window( "Example: F Distribution",
	fdiy = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( 0, 10 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function(
			F Distribution( fdiq, fdidfn, fdidfd ),
			fdiq
		);
		Text(
			{0.5, 0.9},
			"dfn=",
			Round( fdidfn, 2 ),
			" dfd=",
			Round( fdidfd, 2 )
		);
	),
	H List Box(
		Text Box( "dfn " ),
		Slider Box( 0.5, 10, fdidfn, fdiy << reshow )
	),
	H List Box(
		Text Box( "dfd " ),
		Slider Box( 0.5, 10, fdidfd, fdiy << reshow )
	)
);

```

### F Log CDistribution

**Syntaxe :** y = F Log CDistribution( x, dfnum, dfden, &lt;nonCentrality=0&gt; )

**Description :** Renvoie le logarithme de 1 - Distribution F.

**JMP Version ajoutée :** Avant la version 14

```jsl

flcddfn = 5;
flcddfd = 5;
New Window( "Example: F Log CDistribution",
	flcdy = Graph Box(
		Y Scale( -4, 0.05 ),
		X Scale( 0, 10 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function(
			F Log CDistribution( flcdq, flcddfn, flcddfd ),
			flcdq
		);
		Text(
			{0.5, -0.9},
			"dfn=",
			Round( flcddfn, 2 ),
			" dfd=",
			Round( flcddfd, 2 )
		);
	),
	H List Box(
		Text Box( "dfn " ),
		Slider Box( 1, 10, flcddfn, flcdy << reshow )
	),
	H List Box(
		Text Box( "dfd " ),
		Slider Box( 1, 30, flcddfd, flcdy << reshow )
	)
);

```

### F Log Density

**Syntaxe :** y = F Log Density( x, dfnum, dfden, &lt;nonCentrality=0&gt; )

**Description :** Renvoie le logarithme de la densité de probabilité F.

**JMP Version ajoutée :** Avant la version 14

```jsl

fldedfn = 1;
fldedfd = 1;
New Window( "Example: F Log Density",
	fldey = Graph Box(
		Y Scale( -4, 0.05 ),
		X Scale( 0, 5 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function(
			F Log Density( fldeq, fldedfn, fldedfd ),
			fldeq
		);
		Text(
			{2.5, -0.7},
			"dfn=",
			Round( fldedfn, 2 ),
			" dfd=",
			Round( fldedfd, 2 )
		);
	),
	H List Box(
		Text Box( "dfn " ),
		Slider Box( 1, 10, fldedfn, fldey << reshow )
	),
	H List Box(
		Text Box( "dfd " ),
		Slider Box( 1, 10, fldedfd, fldey << reshow )
	)
);

```

### F Log Distribution

**Syntaxe :** y = F Log Distribution( x, dfnum, dfden, &lt;nonCentrality=0&gt; )

**Description :** Renvoie le logarithme de la distribution F.

**JMP Version ajoutée :** Avant la version 14

```jsl

flddfn = 5;
flddfd = 5;
New Window( "Example: F Log Distribution",
	fldy = Graph Box(
		Y Scale( -4, 0.05 ),
		X Scale( 0, 10 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function(
			F Log Distribution( fldq, flddfn, flddfd ),
			fldq
		);
		Text(
			{0.5, -0.9},
			"dfn=",
			Round( flddfn, 2 ),
			" dfd=",
			Round( flddfd, 2 )
		);
	),
	H List Box(
		Text Box( "dfn " ),
		Slider Box( 1, 10, flddfn, fldy << reshow )
	),
	H List Box(
		Text Box( "dfd " ),
		Slider Box( 1, 30, flddfd, fldy << reshow )
	)
);

```

### F Noncentrality

**Syntaxe :** nc = F Noncentrality( x, dfnum, dfden, prob )

**Description :** Résout le paramètre de non-centralité nc telle que prob = F Distribution( x, ndf, ddf, nc ).

**JMP Version ajoutée :** Avant la version 14

```jsl

New Window( "Example: F Noncentrality",
	fncgr = Graph Box(
		Y Scale( 0.01, 0.99 ),
		X Scale( 0.01, 0.99 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function(
			F Noncentrality(
				3,
				2,
				5,
				F Distribution( 3, 2, 5, q )
			),
			q
		);
	)
);
F Noncentrality( 3, 2, 5, F Distribution( 3, 2, 5, 0.4 ) );

```

### F Power

**Syntaxe :** p = F Power( alpha, dfh, dfm, d, n )

**Description :** Calcule la puissance d’un test de Fisher, où alpha est le niveau de significativité, dfh est le degré de liberté de l&apos;hypothèse, dfm est le degré de liberté de tout le modèle, d est le carré de la taille de l&apos;effet, SSH/(n*sigma^2) où SSH est la somme des carrés correspondant à l’hypothèse et n le nombre total d’observations. Notez que pour le modèle ANOVA, d = Sum(a[i]^2)/(k * sigma^2) où a[i] sont les effets et k est le nombre de moyennes.

**JMP Version ajoutée :** Avant la version 14

```jsl

alpha = 0.05;
obs = 25;
dfh = 5;
dfm = 5;
d = 1;
New Window( "Example: F Power (alpha=.05,dfh=5,dfm=5)",
	fpdigr = Graph Box(
		Y Scale( 0, 1.05 ),
		X Scale( 0, 1 ),
		YName( "Power" ),
		XName( "d" ),
		Pen Color( "red" );
		Y Function( F Power( alpha, dfh, dfm, d, obs ), d );
		Text( {0.75, 0.1}, "obs=", Round( obs ) );
	),
	H List Box(
		Text Box( "obs" ),
		Slider Box( 10, 100, obs, fpdigr << reshow )
	)
);

```

### F Quantile

**Syntaxe :** q = F Quantile( p, dfnum, dfden, &lt;nonCentrality=0&gt; )

**Description :** Renvoie le quantile d’une distribution F, correspondant à la probabilité p qu’une variable aléatoire ayant cette distribution prenne une valeur inférieure au quantile.

**JMP Version ajoutée :** Avant la version 14

```jsl

F Quantile( 0.7, 5, 3 );

```

### F Sample Size

**Syntaxe :** n = F Sample Size( alpha, dfh, dfm, d, power )

**Description :** Calcule la taille d&apos;échantillon, où alpha est le niveau de significativité, dfh est le degré de liberté de l&apos;hypothèse, dfm est le degré de liberté de tout le modèle, d est le carré de la taille de l&apos;effet, SSH/(n*sigma^2) où SSH est la somme des carrés correspondant à l’hypothèse et power la puissance désirée. Notez que pour le modèle ANOVA, d = Sum(a[i]^2)/(k * sigma^2) où a[i] sont les effets et k est le nombre de moyennes.

**JMP Version ajoutée :** Avant la version 14

```jsl

alpha = 0.05;
pow = 0.6;
dfh = 5;
dfm = 5;
d = 1;
New Window( "Example: F Sample Size (alpha=.05,dfh=5,dfm=5)",
	fpdigr = Graph Box(
		Y Scale( 0, 50 ),
		X Scale( 0.5, 5 ),
		YName( "Sample Size" ),
		XName( "d" ),
		Pen Color( "red" );
		Y Function(
			F Sample Size( alpha, dfh, dfm, d, pow ),
			d
		);
		Text( {0.75, 0.2}, "power=", Round( pow, 2 ) );
	),
	H List Box(
		Text Box( "power" ),
		Slider Box( 0.2, 0.95, pow, fpdigr << reshow )
	)
);

```

### Factorial

**Syntaxe :** y = Factorial( x )

**Description :** Renvoie le factoriel de x, qui est le même que gamma Gamma( x + 1 ). Si x est un entier, le résultat est le produit 1 * 2 * ... * x.

**JMP Version ajoutée :** Avant la version 14

```jsl

Factorial( 5 );

```

### Faure Quasi Random Sequence

**Syntaxe :** points = Faure Quasi Random Sequence(nDim, nRow)

**Description :** Générez une séquence de remplissage des nombres quasi-aléatoires à l&apos;aide de la suite de Faure.

**JMP Version ajoutée :** Avant la version 14

```jsl

A = Faure Quasi Random Sequence( 3, 100 );
As Table( A );
Scatterplot 3D( Y( :Col1, :Col2, :Col3 ) );

```

### FDR Adjust

**Syntaxe :** y = FDR Adjust( matrix )

**Description :** Renvoie l&apos;ajustement du taux de fausses découvertes pour les p-values spécifiées à l&apos;aide de la méthode de Benjamini-Hochberg.

**JMP Version ajoutée :** 19

```jsl

FDR Adjust( [0.5, 0.2, 0.05, 0.01] );

```

### FFT

**Syntaxe :** ret = FFT( L, &lt;&lt;inverse( 0 ), &lt;&lt;multivariate( 0 ), &lt;&lt;scale( 1.0 ) )

**Description :** Réalise la transformation de Fourier rapide (FFT) sur l&apos;argument L, une liste requise formée de parties réelles et imaginaires des données sous forme de matrices. Si L n&apos;est formé que d&apos;une seule matrice, la matrice est considérée comme la partie réelle. Si L est formé de deux matrices, la première est la partie réelle et la deuxième est la partie imaginaire. Les deux matrices doivent avoir les mêmes dimensions et doivent contenir plus d&apos;une ligne. Trois arguments facultatifs sont disponibles : l’argument inverse détermine si la FFT inverse doit être réalisée ; l’argument multivariate détermine si la FFT spatiale ou multivariée doit être réalisée ; l’argument scale détermine la constante par laquelle multiplier les valeurs calculées. La structure des valeurs retournées est identique à celle du premier argument d’entrée, une liste d’une ou de deux matrices.

**JMP Version ajoutée :** Avant la version 14

```jsl

FFT(
	{[1, 2, 3, 4, 4, 5, 5, 6, 7, 7, 2, 3, 6, 6, 2, 2, 2, 3, 3, 3
	]}
);
A = [1, 2, 3, 4, 4, 5, 5, 6, 7, 7, 2, 3, 6, 6, 2, 2, 2, 3, 3, 3];
res = FFT( {A} );
res = FFT( {A}, <<Inverse( 1 ) );
res = FFT( {A}, <<multivariate( 1 ) );
res = FFT( FFT( {A} ), <<Inverse( 1 ), <<scale( 1 / 20 ) );
B = FFT( {A} );
FFT( B, <<Inverse( 1 ), <<scale( 1 / 20 ) );
Afun = Function( {},
	[1, 2, 3, 4, 4, 5, 5, 6, 7, 7, 2, 3, 6, 6, 2, 2, 2, 3, 3, 3]
);
FFT( FFT( {Afun()} ), <<Inverse( 1 ), <<scale( 1 / 20 ) );
Afun = Function( {},
	{[1, 2, 3, 4, 4, 5, 5, 6, 7, 7, 2, 3, 6, 6, 2, 2, 2, 3, 3, 3
	]}
);
FFT( FFT( Afun() ), <<Inverse( 1 ), <<scale( 1 / 20 ) );
A = [1 3, 2 4, 3 1, 4 3, 4 5, 5 2, 5 7, 6 9, 7 5, 7 3, 2 7, 3 4,
6 7, 6 4, 2 7, 2 4, 2 6, 3 5, 3 6, 3 1];
res = FFT( {A} );
res = FFT( {A}, <<multivariate( 1 ) );
res = FFT( FFT( {A} ), <<Inverse( 1 ), <<scale( 1 / 40 ) );
res = FFT(
	FFT( {A}, <<multivariate( 1 ) ),
	<<multivariate( 1 ),
	<<Inverse( 1 ),
	<<scale( 1 / 20 )
);
A = [1 3 1,
2 4 3,
3 1 2,
4 3 3,
4 5 9,
5 2 8,
5 7 6,
6 9 5,
7 5 3,
7 3 2,
2 7 1,
3 4 3,
6 7 3,
6 4 2,
2 7 4,
2 4 1,
2 6 5,
3 5 1,
3 6 2,
3 1 9];
res = FFT( {A} );
res = FFT( {A}, <<multivariate( 1 ) );
FFT( FFT( {A} ), <<Inverse( 1 ), <<scale( 1 / 60 ) );
fin = FFT(
	FFT( {A}, <<multivariate( 1 ) ),
	<<Inverse( 1 ),
	<<multivariate( 1 ),
	<<scale( 1 / 20 )
);
Show( fin );

```

### File Exists

**Syntaxe :** rc = File Exists( path )

**Description :** Déterminez si le fichier existe. Renvoie 1 si le chemin d&apos;accès au fichier existe. Renvoie 0 si le chemin d&apos;accès est incorrect ou n&apos;existe pas.

**JMP Version ajoutée :** Avant la version 14

```jsl

If( File Exists( "$SAMPLE_DATA/Big Class.jmp" ),
	"ok",
	"missing!"
);

```

### File Size

**Syntaxe :** size = File Size( path )

**Description :** Renvoie la taille du fichier au chemin d&apos;accès spécifié. Renvoie manquant si le chemin d&apos;accès au fichier est incorrect ou n&apos;existe pas.

**JMP Version ajoutée :** Avant la version 14

```jsl

File Size( "$SAMPLE_DATA/Big Class.jmp" );

```

### Files In Directory

**Syntaxe :** y = Files In Directory( "path", &lt;recursive(0|1)&gt;, &lt;include hidden(0|1)&gt; )

**Description :** Renvoie la liste des noms de fichiers contenus dans un répertoire spécifié par path. Si l&apos;argument Recursive n&apos;est pas spécifié, les noms de répertoire sont inclus dans la liste.

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

Files In Directory( "$HOME" );

```

**Exemple 2**

```jsl

Filter Each( {fn},
	Files In Directory( "$SAMPLE_DATA", recursive( 1 ) ),
	Contains( Lowercase( fn ), "stacked" )
);

```

### Fill Color

**Syntaxe :** Fill Color( &lt;name|index|rgbList&gt; )

**Description :** Définit la couleur de dessin des zones de remplissage.

**JMP Version ajoutée :** Avant la version 14

```jsl

New Window( "Example",
	Graph Box(
		Fill Color( {1, 1, .5} );
		Polygon( [10 30 90], [88 22 44] );
	)
);

```

### Fill Pattern

**Syntaxe :** Fill Pattern( name|mask|image )

**Description :** Définit la configuration de dessin des zones remplies. Un masque est une matrice de valeurs comprises entre 0 et 1 devant être appliquée à la couleur de remplissage actuelle.

**JMP Version ajoutée :** Avant la version 14

**Image**

```jsl


image = New Image( "$SAMPLE_IMAGES/pi.gif" );
New Window( "Example",
	Graph Box(
		Fill Pattern( image );
		Polygon( [10 30 90], [88 22 44] );
	)
);

```

**Masque**

```jsl

New Window( "Example",
	Graph Box(
		Fill Pattern(
			[1 0.5 0 0, 0.5 0 0 1, 0 0 1 0.5, 0 1 0.5 0]
		);
		Polygon( [10 30 90], [88 22 44] );
	)
);

```

### Filter Col Selector

**Syntaxe :** y = Filter Col Selector(&lt;Data Table(name)&gt;, &lt;width(pixels)&gt;, &lt;nlines(n)&gt;, &lt;script&gt;, &lt;onchange(expr)&gt;)

**Description :** Renvoie une boîte d’affichage contenant une liste d’éléments. Le contrôle permet le filtrage de colonne.

**JMP Version ajoutée :** Avant la version 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Col List Box Example",
	fontobj = lb = Filter Col Selector( width( 250 ) )
);

```

### Filter Each

**Syntaxe :** list = Filter Each({&lt;value&gt;, &lt;index&gt;} | {&lt;element&gt;, &lt;index | {row, col}&gt;} | {&lt;key | {key, value}&gt;, &lt;index&gt;} | {&lt;values | {value1, ..., valueN}&gt;, &lt;index&gt;}, list | matrix | associative array | expression | Across( container1, ..., &lt;containerN&gt;, &lt;Count( "Longest" | "Shortest" | "Enforce Equal" | n )&gt; ), &lt;locals list&gt;, body)

**Description :** Identique à la fonction For Each, mais renvoie également une liste de valeurs du conteneur original filtrées sur la base d&apos;un résultat à valeur booléenne. Le type de résultat correspond au type du conteneur d&apos;entrée. Pour l&apos;entrée de matrice, une matrice de vecteurs lignes sera renvoyée, car la taille de la matrice est inconnue.

**JMP Version ajoutée :** 16

**Associative Array**

```jsl

values = Filter Each( {{key, value}},
	["A" => 8, "B" => 6, "C" => 10],
	value > 6
);
Show( values );

```

**Expression**

```jsl

values = Filter Each( {value}, Expr( MyExpr( 1, 2, 3, 4 ) ),
	Mod( value, 2 ) == 0
);
Show( values );

```

**List**

```jsl

values = Filter Each( {x}, {0, -5, 2, -10, 4}, x > 0 );
Show( values );

```

**Matrix**

```jsl

values = Filter Each( {x, i}, 100 :: 120, i > 10 );
Show( values );

```

### Find All

**Syntaxe :** Find All( &lt;Project(title|index|box|window)&gt;, Data Tables | Reports | Journals, &lt;invisible | private&gt; )

**Description :** Trouve toutes les ressources d&apos;un type spécifique ouvertes : tables de données, journaux ou rapports.



Seules les fenêtres du projet en cours (sauf si le script n&apos;est pas exécuté dans un projet) seront incluses. Pour spécifier un projet, utilisez l&apos;argument facultatif Project() avec un titre, un index, une boîte d&apos;affichage ou un objet fenêtre. Utilisez Project(0) pour spécifier que le script n&apos;est pas exécuté dans un projet.

**JMP Version ajoutée :** 14

```jsl


exdt1 = Open( "$SAMPLE_DATA/Big Class.jmp" );
exdt2 = Open( "$SAMPLE_DATA/Animals.jmp" );
windows = Find All( Data Tables );
For( i = 1, i <= N Items( windows ), i++,
	Write( Char( windows[i] << Get Window Title ) || "\!N" )
);

```

### First

**Syntaxe :** y = First( x1, x2, ... )

**Description :** Évalue chaque argument et retourne la valeur du premier argument.

**JMP Version ajoutée :** Avant la version 14

```jsl

First( 11, 22 );

```

### Fit Censored

**Syntaxe :** result = FitCensored( Distribution(name), YLow(vector) | Y(vector), &lt;YHigh(vector)&gt;, &lt;Weight(vector)&gt;, &lt;X(matrix)&gt;, &lt;Z(matrix)&gt;, &lt;HoldParm(vector)&gt;, &lt;Use random sample to compute initial values(percent)&gt;, &lt;Use first N observations to compute initial values(nobs)&gt; )

**Description :** Ajuste une distribution en utilisant des données censurées. Les arguments requis sont Distribution et soit YLow ou Y. La fonction renvoie une liste contenant l&apos;estimation des paramètres, la matrice de covariance, la log-vraisemblance, l&apos;AICc, le BIC et un message de convergence. Les arguments X et Z spécifient les matrices de plans de la régression, pour la position et l&apos;échelle, respectivement. Lorsque le vecteur de données est important, deux arguments facultatifs peuvent être utilisés afin de  spécifier un échantillon pour calculer les valeurs initiales. Vous pouvez spécifier un percent des observations ou les nobs premières observations, mais la taille totale de l&apos;échantillon doit être supérieure à 100.

**JMP Version ajoutée :** Avant la version 14

```jsl

result = Fit Censored(
	Distribution( "Weibull" ),
	Y(
		[142, 156, 163, 198, 204, 205, 232, 239, 240, 261, 280,
		296, 323, 344]
	)
);
Show( result );

```

### Fit Circle

**Syntaxe :** {xCenter, yCenter, radius, sse} = Fit Circle( Xvec, Yvec )

**Description :** Ajuste le cercle qui passe par trois points ou plus définis par deux vecteurs de coordonnées. Le résultat est une liste qui contient les coordonnées X et Y du point central du cercle, la longueur du rayon et la somme des carrés des erreurs.

**JMP Version ajoutée :** 14

```jsl

x = [68, 77, 85, 88, 93, 93, 95, 98];
y = [1, 9, 18, 94, 35, 82, 40, 59];
result = Fit Circle( x, y );
New Window( "Fit Circle",
	Graph Box(
		X Scale( -50, 100 ),
		Y Scale( -20, 130 ),
		FrameSize( 300, 300 ),
		Marker( x, y );
		Circle( {result[1], result[2]}, result[3] );
	)
);

```

### Fit Transform To Normal

**Syntaxe :** result = Fit Transform To Normal( Distribution(name), Y(vector), &lt;Freq(vector)&gt; )

**Description :** Ajuste une transformation pour la normalité pour un vecteur de données. Ceci inclut les distributions de Johnson Sl, Johnson Sb, Johnson Su et GLog. La fonction renvoie une liste contenant l’estimation des coefficients, la matrice de covariance, la log-vraisemblance, l’AICc, le BIC et un message de convergence.

**JMP Version ajoutée :** Avant la version 14

```jsl

datavec = [-3.7975076, 0.48221038, -1.3082712, -1.860647,
-6.9470789, -17.237024, -19.470857, -6.1855986, 2.16525629,
-30.990061];
freqvec = [1, 1, 1, 1, 1, 2, 2, 2, 2, 2];
As Table( datavec || freqvec );
Column( 1 ) << set name( "x" );
Column( 2 ) << set name( "freq vec" );
Distribution(
	Freq( :freq vec ),
	Continuous Distribution(
		Column( :x ),
		Fit Distribution( GLog )
	)
);
results = Fit Transform To Normal(
	Distribution( "glog" ),
	Y( datavec ),
	freq( freqvec )
);
Show( results );

```

### Floor

**Syntaxe :** y = Floor( x )

**Description :** Renvoie le plus grand entier inférieur ou égal à x. L&apos;argument peut être un nombre, une matrice ou une liste de nombres.

**JMP Version ajoutée :** Avant la version 14

```jsl

Floor( 1.2 );

```

### For

**Syntaxe :** For( initExpr, whileExpr, nextExpr, bodyExpr )

**Description :** Évalue initExpr une fois et évalue de façon répétée whileExpr, bodyExpr et nextExpr tant que whileExpr est évalué comme non nul.

**JMP Version ajoutée :** Avant la version 14

```jsl

s = "";
For( i = 1, i < 10, i++,
	s ||= " " || Char( i )
);
Trim( s );

```

### For Each

**Syntaxe :** For Each({&lt;value&gt;, &lt;index&gt;} | {&lt;element&gt;, &lt;index | {row, col}&gt;} | {&lt;key | {key, value}&gt;, &lt;index&gt;} | {&lt;values | {value1, ..., valueN}&gt;, &lt;index&gt;}, list | matrix | associative array | expression | Across( container1, ..., &lt;containerN&gt;, &lt;Count( "Longest" | "Shortest" | "Enforce Equal" | n )&gt; ), &lt;locals list&gt;, body)

**Description :** Itère sur un conteneur, soit une liste, soit une matrice, soit un tableau associatif, soit une expression, en fournissant la valeur, l&apos;élément ou la clé à chaque itération. Le numéro d&apos;indice est également disponible à chaque itération. Pour les conteneurs de tableaux associatifs, la clé et la valeur sont accessibles via une liste à deux éléments. Pour les conteneurs de matrices, un indice linéaire est fourni par défaut, mais il est possible d&apos;utiliser une liste à deux éléments pour accéder aux indices de ligne et de colonne. Ces symboles sont fournis dans le corps de la boucle uniquement, avec un bloc local intégré. Une liste de valeurs locales peut également être fournie. Ces valeurs seront initialisées après avoir défini les premiers symboles d&apos;itération.

**JMP Version ajoutée :** 16

**Across**

```jsl


// Across multiple containers
x = {1, 3};
y = {2, 4};
For Each( {{a, b}, index}, Across( x, y ), Show( a, b, index ) );

// Across list of containers
xy = {{1, 3}, {2, 4}};
For Each( {{a, b}, index}, Across( xy ), Show( a, b, index ) );

```

**Across - Count**

```jsl


list1 = {1, 3, 5, 7, 9};
list2 = {2, 4}; 

Write( "\!N===Longest [default]===" );
For Each( {{l1, l2}}, Across( list1, list2, Count( "Longest" ) ),
	Show( l1, l2 )
);

Write( "\!N===Shortest===" );
For Each( {{s1, s2}},
	Across( list1, list2, Count( "Shortest" ) ),
	Show( s1, s2 )
);

Write( "\!N===N===" );
For Each( {{n1, n2}}, Across( list1, list2, Count( 7 ) ),
	Show( n1, n2 )
);

Write( "\!N===Enforce Equal===" );
Try(
	For Each( {values},
		Across( list1, list2, Count( "Enforce Equal" ) ),
		Show( values )
	),
	Print( "Error occurred" )
);

```

**Associative Array**

```jsl

For Each( {{key, value}, index}, ["A" => 8, "B" => 6, "C" => 10],
	Show( key, value, index )
);

```

**Expression**

```jsl

For Each( {value, index}, Expr( MyExpr( 10, 20, 30 ) ),
	Show( value )
);

```

**List**

```jsl

For Each( {value, index}, {10, 20, 30}, Show( value, index ) );

```

**Matrice - Indice linéaire**

```jsl

For Each( {element, index}, 10 :: 15, Show( element, index ) );

```

**Matrix**

```jsl

For Each( {element, {row, col}}, 10 :: 15,
	Show( element, row, col )
);

```

### For Each Row

**Syntaxe :** y = For Each Row( &lt;dt&gt;, body )

**Description :** Évalue de manière itérative l&apos;expression pour chaque colonne dans la table de données en cours.

**JMP Version ajoutée :** Avant la version 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( :height = -:height );

```

### Force Action Notes

**JMP Version ajoutée :** 16

### Format

**Syntaxe :** s = Format( x, formatString, &lt;options&gt; )s = Format( x, "Format Pattern", pattern, &lt;options&gt; )

**Description :** Renvoie le nombre au format spécifié. Les formats incluent les éléments de la boîte de dialogue Informations sur la colonne, tels que "Best" et "h:m:s". Voir la rubrique Aide pour découvrir d&apos;autres options, notamment les formats de p-value, de devise, de date et d&apos;heure, et géographiques.

**JMP Version ajoutée :** Avant la version 14

**Date et heure**

```jsl

Print(
	Format( Today(), "yyyyQq" ),
	Format( Today(), "m/d/y h:m" )
);

```

**Motif de format**

```jsl

Print(
	Format(
		Today(),
		"Format Pattern",
		"<YYYY></><MM></><DD> <hh24><:><mm><:><ss>"
	)
);

```

**Pourcentage, devise**

```jsl

pct = Format( 0.123, "Percent", 2 );
amt = Format( 123.4567, "Currency", "EUR", 2 );
result = "Revenue increase: " || amt || " or " || pct || ".";

```

**Précision complète**

```jsl

Show(
	Format( 88.54, "Best" ),
	Format( 88.54, "Best", "Full Precision" )
);

```

### Format Date

**Syntaxe :** s = Format( x, formatString, &lt;options&gt; )s = Format( x, "Format Pattern", pattern, &lt;options&gt; )

**Description :** Renvoie le nombre au format spécifié. Les formats incluent les éléments de la boîte de dialogue Informations sur la colonne, tels que "Best" et "h:m:s". Voir la rubrique Aide pour découvrir d&apos;autres options, notamment les formats de p-value, de devise, de date et d&apos;heure, et géographiques.

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

Print(
	Format( Today(), "yyyyQq" ),
	Format( Today(), "m/d/y h:m" )
);

```

**Exemple 2**

```jsl

Print(
	Format(
		Today(),
		"Format Pattern",
		"<YYYY></><MM></><DD> <hh24><:><mm><:><ss>"
	)
);

```

**Exemple 3**

```jsl

pct = Format( 0.123, "Percent", 2 );
amt = Format( 123.4567, "Currency", "EUR", 2 );
result = "Revenue increase: " || amt || " or " || pct || ".";

```

### Format Pattern

**Syntaxe :** s = Format( x, "Format Pattern", pattern, &lt;width&gt;, &lt;dec&gt;)x = In Format( s, "Format Pattern", pattern, &lt; &lt;&lt;Use Locale(b=1)&gt; )obj = Format("Format Pattern", pattern, &lt;width&gt;, &lt;dec&gt;)

**Description :** Les configurations de format sont des chaînes qui définissent un format de date et heure, comme « <YYYY></><MM></><DD> <hh><:><mm><:><ss><ampm> ». Les parties de la configuration entre <> sont appelées des descripteurs de champ. Ils représentent une valeur (comme « <YYYY> » pour l&apos;année à quatre chiffres) ou un autre texte de date et heure (comme « </> » qui est le séparateur local de date). Une configuration de format vous permet de créer des formats non fournis dans JMP. Ces formats peuvent être utilisés pour le formatage et l&apos;entrée de données.

**JMP Version ajoutée :** 16

```jsl

s = Format(
	Today(),
	"Format Pattern",
	"<YYYY></><MM></><DD> <hh24><:><mm>"
);
x = Informat(
	"2020/02/10 14:54",
	"Format Pattern",
	"<YYYY></><MM></><DD> <hh24><:><mm>"
);
Show( s, x );
                                                /*
Descripteurs de champ

Dates
(ne peut pas être utilisé avec les descripteurs de champ de durée)
================================================================================
<YYYY>        Année à quatre chiffres. (Accepte de 1 à 4 chiffres en entrée.)
<YY>          Année à deux chiffres
<yyyy>        Année ISO à quatre chiffres ; correspond aux semaines ISO.
              (Accepte 1 à 4 chiffres en entrée.)
<yy>          Année ISO à deux chiffres ; correspond aux semaines ISO.
<YYYY.>       Année avec une année fractionnelle. Décrit complètement la date et
              l'heure.
<M>           Numéro du mois (1 à 12)
<MM>          Numéro du mois, précédé par un zéro (01 à 12)
<Month>       Nom long du mois
<Mmm>         Nom court du mois
<MMM>         Nom du mois « en ligne ». Toujours trois lettres.
<WW1>         Numéro de semaine à deux chiffres, précédé par un zéro. La semaine
              2 commence le premier dimanche de l'année. La semaine 1 comprend
              les jours avant le premier dimanche. (01 à 54)
<WW2>         Numéro de semaine à deux chiffres, précédé par un zéro. La semaine
              1 commence le premier dimanche de l'année. La semaine 0 comprend
              les jours avant le premier dimanche. (00 à 53)
<ww>          Numéro de semaine ISO à deux chiffres, précédé par un zéro. Les
              semaines commencent le lundi. La semaine 1 est la première semaine
              de l'année ayant 4 jours ou plus. Aucune semaine partielle. La
              première ou la dernière semaine de l'année déborde sur l'année
              précédente ou suivante, respectivement. (01 à 53)
<D>           Jour du mois (1 à 31)
<DD>          Jour du mois, précédé par un zéro (01 à 31)
<Q>           Trimestre de l'année (1 à 4)
<Q#>          « T » suivi du trimestre de l'année (1 à 4)
<DayOfWeek>   Nom du jour de la semaine
<DW>          Numéro représentant le jour de la semaine. 1 = dimanche, 7 =
              samedi
<dw>          Numéro représentant le jour de la semaine. 1 = lundi, 7 = dimanche
</>           Le séparateur de date régional . (Accepte la plupart des
              séparateurs courants en entrée.)
<->           Le séparateur de date ISO « - ». (Accepte la plupart des
              séparateurs courants en entrée.)
</?>          Séparateur de date facultatif pour la saisie de la date. Le
              séparateur n'est jamais écrit en sortie.
<'T'>         Le « T » dans les dates ISO

Temps
(peut parfois être utilisé avec les descripteurs de champ de durée)
================================================================================
<hh>          Heure formatée selon les paramètres régionaux actuels. Si un
              descripteur <ampm> est présent, utilisera une horloge à 12 ou 24
              heures selon la région. Si un descripteur <AMPM> est présent,
              utilisera une horloge à 12 heures. Sinon, utilisera une horloge à
              24 heures. (Ne peut pas être utilisé avec les descripteurs de
              champ de durée.)
<zhh>         Heure formatée selon les paramètres régionaux actuels et précédée
              par un zéro. Si un descripteur <ampm> est présent, utilisera une
              horloge à 12 ou 24 heures selon la région. Si un descripteur
              <AMPM> est présent, utilisera une horloge à 12 heures. Sinon,
              utilisera une horloge à 24 heures. (Ne peut pas être utilisé avec
              les descripteurs de champ de durée.)
<hh24>        Heure au format 24 heures précédé par un zéro (00 à 23)
<mm>          Minute, précédée par un zéro (00 à 59)
<ss>          Seconde, précédée par un zéro (00 à 59)
<ampm>        Symbole Matin / Après-midi pour les paramètres régionaux actuels.
              (Ne peut pas être utilisé avec les descripteurs de champ de
              durée.)
<AMPM>        Symbole matin/après-midi « AM » ou « PM » indépendant des
              paramètres régionaux. (Ne peut pas être utilisé avec les
              descripteurs de champ de durée.)
<:>           Le séparateur de temps régional.
<::>          Le séparateur de temps ISO « : ». (Accepte également le séparateur
              de temps régional en entrée.)
<:?>          Séparateur d'heure facultatif pour la saisie de la date. Le
              séparateur n'est jamais écrit en sortie.

Durées
(ne peut pas être utilisé avec les descripteurs de champ de date)
================================================================================
<Day>         Nombre de jour. Utilisé comme champ le plus significatif dans les
              durées. Ne peut être utilisé avec aucun autre « count ».
<Hour>        Nombre d'heure. Utilisé comme champ le plus significatif dans les
              durées. Ne peut être utilisé avec aucun autre « count ».
<Minute>      Nombre de minute. Utilisé comme champ le plus significatif dans
              les durées. Ne peut être utilisé avec aucun autre « count ».

Autre
================================================================================
<<>           Remplacé par « < »
*/

```

### Fourier Basis Coef

**Syntaxe :** coef = Fourier Basis Coef( x, Number Pairs, &lt;Period = max(x)-min(x)+1&gt; )

**Description :** Renvoie la matrice des coefficients de la Base de Fourier. Number Pairs est le nombre de paires sin() et cos() de la base. Le paramètre facultatif Period spécifie la période pour les fonctions trigonométriques, max(x) - min(x) + 1 par défaut.

**JMP Version ajoutée :** 14

```jsl

Fourier Basis Coef( [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] / 10, 2 );
Fourier Basis Coef(
	[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] / 10,
	2,
	2
);

```

### Frechet Density

**Syntaxe :** y = Frechet Density( x, mu, sigma )

**Description :** Renvoie la densité à x d’une distribution de Fréchet avec paramètre de position mu et paramètre d’échelle sigma.

**JMP Version ajoutée :** Avant la version 14

```jsl

mu = 0;
sig = .5;
New Window( "Example: Frechet Density",
	y = Graph Box(
		Y Scale( 0, .06 ),
		X Scale( 0, 60 ),
		Pen Color( "red" );
		Y Function( Frechet Density( x, mu, sig ), x );
		Text( {0, .055}, "mu=", Round( mu, 2 ) );
		Text( {0, .045}, "sig=", Round( sig, 2 ) );
	),
	H List Box(
		Slider Box( 0, 4, mu, y << reshow ),
		Text Box( "mu" )
	),
	H List Box(
		Slider Box( 0, 10, sig, y << reshow ),
		Text Box( "sig" )
	), 

);

```

### Frechet Distribution

**Syntaxe :** p = Frechet Distribution( x, mu, sigma )

**Description :** Renvoie la probabilité à x d’une distribution de Fréchet avec paramètre de position mu et paramètre d’échelle sigma.

**JMP Version ajoutée :** Avant la version 14

```jsl

mu = 0;
sig = .5;
New Window( "Example: Frechet Distribution",
	y = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( 0, 60 ),
		Pen Color( "red" );
		Y Function( Frechet Distribution( x, mu, sig ), x );
		Text( {0.1, 0.9}, "mu=", Round( mu, 2 ) );
		Text( {0.1, 0.8}, "sig=", Round( sig, 2 ) );
	),
	H List Box(
		Slider Box( 0, 4, mu, y << reshow ),
		Text Box( " mu" )
	),
	H List Box(
		Slider Box( 0, 10, sig, y << reshow ),
		Text Box( " sig" )
	)
);

```

### Frechet Quantile

**Syntaxe :** q = Frechet Quantile( p, mu, sigma )

**Description :** Renvoie le quantile à p d’une distribution de Fréchet avec paramètre de position mu et paramètre d’échelle sigma.

**JMP Version ajoutée :** Avant la version 14

```jsl

mu = 0;
sig = .5;
qq = .5;
New Window( "Example: Frechet Quantile",
	y = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( 0, 60 ),
		Pen Color( "red" );
		Y Function( Frechet Distribution( qq, mu, sig ), qq );
		Pen Color( "blue" );
		V Line( Frechet Quantile( qq, mu, sig ), 0, 1 );
		Text(
			{0.1, 0.9},
			" mu=",
			Round( mu, 2 ),
			" sig=",
			Round( sig, 2 ),
			" quantile=",
			Round( qq, 2 )
		);
	),
	H List Box(
		Slider Box( 0, 4, mu, y << reshow ),
		Text Box( " mu" )
	),
	H List Box(
		Slider Box( 0, 10, sig, y << reshow ),
		Text Box( " sig" )
	),
	H List Box(
		Slider Box( 0.01, 0.99, qq, y << reshow ),
		Text Box( " quantile" )
	)
);

```

### Function

**Syntaxe :** y = Function( {arg1=val1, ...}, &lt;{local1=val1, ...}&gt;, expr )

**Description :** Définit une fonction avec les arguments spécifiés, les valeurs par défaut et les variables locales facultatives. Les arguments contenant des valeurs par défaut sont en option lors de l&apos;appel de la fonction. Si Return() est utilisé dans le script de la fonction, l&apos;expression qu&apos;il contient est renvoyée.

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

exsqr = Function( {x}, x * x );
exsqr( 5 );

```

**Exemple 2**

```jsl

// y is an optional argument
exmul = Function( {x, y = 3}, x * y );
a = exmul( 5 );
b = exmul( 5, 10 );
Show( a, b );

```

**Exemple 3**

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

### Future Value

**Syntaxe :** x = Future Value( rate, nper, pmt, &lt;pv=0&gt;, &lt;type=0&gt; )

**Description :** Renvoie la valeur future d’un investissement en se basant sur des paiements et un taux d’intérêt constants. L’argument type est 0 pour les paiements en fin de période et 1 pour les paiements en début de période. Équivalent à la fonction FV de Microsoft Excel.

**JMP Version ajoutée :** Avant la version 14

```jsl

Future Value( .03, 12, 100, 0, 1 );

```

### G Inverse

**Syntaxe :** g = G Inverse( A )

**Description :** Renvoie la matrice inverse généralisée (Moore-Penrose).

**JMP Version ajoutée :** Avant la version 14

```jsl

Round( G Inverse( [11 22, 33 44] ), 2 );

```

### Gamma

**Syntaxe :** y = Gamma( x, &lt;limit&gt; )

**Description :** Renvoie la fonction gamma de x, définie comme l&apos;intégrale de z^(x-1)*exp(-z) dz de 0 à ∞. Si la limite limit est présente, un gamma incomplet sera calculé avec cette limite d&apos;intégration.

**JMP Version ajoutée :** Avant la version 14

```jsl

Gamma( 5 );

```

### Gamma Density

**Syntaxe :** y = Gamma Density( q, &lt;alpha=1&gt;, &lt;scale=1&gt;, &lt;threshold=0&gt; )

**Description :** Renvoie la densité au point q de la distribution de probabilité Gamma, où l’argument paramètre de forme alpha doit être positif.

**JMP Version ajoutée :** Avant la version 14

```jsl

gdealpha = Log( 1.5 );
New Window( "Example: Gamma Density",
	gdey = Graph Box(
		Y Scale( 0, 0.5 ),
		X Scale( 0, 12 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function(
			Gamma Density( gdeq, Exp( gdealpha ) ),
			gdeq
		);
		Text(
			{9, 0.45},
			"\!U03B1=",
			Round( Exp( gdealpha ), 2 )
		);
	),
	H List Box(
		Slider Box(
			Log( 0.1 ),
			Log( 12 ),
			gdealpha,
			gdey << reshow
		),
		Text Box( " \!U03B1" )
	)
);

```

### Gamma Distribution

**Syntaxe :** p = Gamma Distribution( q, &lt;alpha=1&gt;, &lt;scale=1&gt;, &lt;threshold=0&gt; )

**Description :** Renvoie la probabilité qu&apos;une variable aléatoire de loi gamma soit inférieure à q, où l’argument paramètre de forme alpha doit être positif. IGamma() est un alias de Gamma Distribution(). La fonction Gamma Distribution() est équivalente à Gamma(alpha,q)/Gamma(alpha).

**JMP Version ajoutée :** Avant la version 14

```jsl

gdialpha = Log( 1.5 );
New Window( "Example: Gamma Distribution",
	gdiy = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( 0, 12 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function(
			Gamma Distribution( gdiq, Exp( gdialpha ) ),
			gdiq
		);
		Text(
			{1, 0.9},
			"\!U03B1=",
			Round( Exp( gdialpha ), 2 )
		);
	),
	H List Box(
		Slider Box(
			Log( 0.1 ),
			Log( 12 ),
			gdialpha,
			gdiy << reshow
		),
		Text Box( " \!U03B1" )
	)
);

```

### Gamma Log CDistribution

**Syntaxe :** p = Gamma Log CDistribution( x, &lt;alpha=1&gt;, &lt;scale=1&gt;, &lt;threshold=0&gt; )

**Description :** Renvoie le logarithme de la distribution 1 - Gamma.

**JMP Version ajoutée :** Avant la version 14

```jsl

glcdialpha = Log( 1.5 );
New Window( "Example: Gamma Log CDistribution",
	glcdiy = Graph Box(
		Y Scale( -4, 0.05 ),
		X Scale( 0, 12 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function(
			Gamma Log CDistribution( glcdiq, Exp( glcdialpha ) ),
			glcdiq
		);
		Text(
			{1, -0.9},
			"\!U03B1=",
			Round( Exp( glcdialpha ), 2 )
		);
	),
	H List Box(
		Slider Box(
			Log( 0.1 ),
			Log( 12 ),
			glcdialpha,
			glcdiy << reshow
		),
		Text Box( " \!U03B1" )
	)
);

```

### Gamma Log Density

**Syntaxe :** y = Gamma Log Density( x, &lt;alpha=1&gt;, &lt;scale=1&gt;, &lt;threshold=0&gt; )

**Description :** Renvoie le logarithme de la densité de probabilité Gamma.

**JMP Version ajoutée :** Avant la version 14

```jsl

gldealpha = Log( 1.5 );
New Window( "Example: Gamma Log Density",
	gldey = Graph Box(
		Y Scale( -4, 0.05 ),
		X Scale( 0, 12 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function(
			Gamma Log Density( gldeq, Exp( gldealpha ) ),
			gldeq
		);
		Text(
			{9, -0.45},
			"\!U03B1=",
			Round( Exp( gldealpha ), 2 )
		);
	),
	H List Box(
		Slider Box(
			Log( 0.1 ),
			Log( 12 ),
			gldealpha,
			gldey << reshow
		),
		Text Box( " \!U03B1" )
	)
);

```

### Gamma Log Distribution

**Syntaxe :** p = Gamma Log Distribution( x, &lt;alpha=1&gt;, &lt;scale=1&gt;, &lt;threshold=0&gt; )

**Description :** Renvoie le logarithme de la distribution Gamma.

**JMP Version ajoutée :** Avant la version 14

```jsl

gldialpha = Log( 1.5 );
New Window( "Example: Gamma Log Distribution",
	gldiy = Graph Box(
		Y Scale( -4, 0.05 ),
		X Scale( 0, 12 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function(
			Gamma Log Distribution( gldiq, Exp( gldialpha ) ),
			gldiq
		);
		Text(
			{1, -0.9},
			"\!U03B1=",
			Round( Exp( gldialpha ), 2 )
		);
	),
	H List Box(
		Slider Box(
			Log( 0.1 ),
			Log( 12 ),
			gldialpha,
			gldiy << reshow
		),
		Text Box( " \!U03B1" )
	)
);

```

### Gamma Poisson Distribution

**Syntaxe :** cumprob = Gamma Poisson Distribution( k, lambda, sigma )

**Description :** Renvoie la probabilité qu&apos;une variable aléatoire distribuée selon Gamma/Poisson soit inférieure ou égale à k, où lambda est le paramètre de moyenne, sigma le paramètre de d’hyperdispersion et k le dénombrement pertinent.

**JMP Version ajoutée :** Avant la version 14

```jsl

lambda = 20;
sigma = 2;
New Window( "Example: Gamma Poisson Distribution",
	ppy = Graph Box(
		Y Scale( 0, 1.01 ),
		X Scale( -1, 40 ),
		Pen Color( "red" ),
		Pen Size( 1 );
		For( k = 0, k <= 40, k++,
			H Line(
				k,
				k + 1,
				Gamma Poisson Distribution( k, lambda, sigma )
			);
			V Line(
				k + 1,
				Gamma Poisson Distribution( k, lambda, sigma ),
				Gamma Poisson Distribution(
					k + 1,
					lambda,
					sigma
				)
			);
		);
		Text( {2, 0.95}, "\!U03BB=", Round( lambda, 2 ) );
		Text( {2, 0.87}, "\!U03C3=", Round( sigma, 2 ) );
	),
	H List Box(
		Slider Box( 3, 40, lambda, ppy << reshow ),
		Text Box( " \!U03BB" )
	),
	H List Box(
		Slider Box( 1, 5, sigma, ppy << reshow ),
		Text Box( " \!U03C3" )
	)
);

```

### Gamma Poisson Probability

**Syntaxe :** prob = Gamma Poisson Probability( k, lambda, sigma )

**Description :** Renvoie la probabilité qu&apos;une variable aléatoire distribuée selon Gamma/Poisson soit égale à k, où lambda est le paramètre de moyenne, sigma le paramètre de d’hyperdispersion et k le dénombrement pertinent.

**JMP Version ajoutée :** Avant la version 14

```jsl

lambda = 5;
sigma = 2;
New Window( "Poisson and Gamma Poisson",
	clty = Graph Box(
		Y Scale( 0, 0.3 ),
		X Scale( -1, 20.5 ),
		Pen Color( "red" ),
		Pen Size( 2 );
		For( x = 0, x <= 20, x++,
			Pen Color( "red" );
			V Line( x, 0, Poisson Probability( lambda, x ) );
			Pen Color( "blue" );
			V Line(
				x + 0.35,
				0,
				Gamma Poisson Probability( x, lambda, sigma )
			);
		);
		Text(
			{1, 0.25},
			"\!U03BB=",
			Round( lambda, 8 ),
			" \!U03C3=",
			Round( sigma, 8 )
		);
		Text( {0, 0.28}, "Red = Poisson, Blue = Gamma Poisson" );
	),
	H List Box(
		Slider Box( 3, 10, lambda, clty << reshow ),
		Text Box( " \!U03BB" )
	),
	H List Box(
		Slider Box( 1, 5, sigma, clty << reshow ),
		Text Box( " \!U03C3" )
	)
);

```

### Gamma Poisson Quantile

**Syntaxe :** q = Gamma Poisson Quantile( lambda, sigma, cumprob )

**Description :** Renvoie le quantile entier le plus petit, pour lequel la probabilité cumulée d&apos;observer une variable aléatoire de Gamma/Poisson (lambda, sigma ) est supérieure ou égale à cumprob.

**JMP Version ajoutée :** Avant la version 14

```jsl

qexpl = 20;
qexps = 2;
qexpn = 40;
qexpq = 0.5;
New Window( "Example: Gamma Poisson Quantile",
	qexpy = Graph Box(
		Y Scale( 0, 1.05 ),
		X Scale( -1, 41 ),
		Pen Color( "red" ),
		Pen Size( 2 );
		For( qexpk = 0, qexpk < Round( qexpn ), qexpk++,
			H Line(
				qexpk,
				qexpk + 1,
				Gamma Poisson Distribution(
					qexpk,
					qexpl,
					qexps
				)
			);
			V Line(
				qexpk + 1,
				Gamma Poisson Distribution(
					qexpk,
					qexpl,
					qexps
				),
				Gamma Poisson Distribution(
					qexpk + 1,
					qexpl,
					qexps
				)
			);
		);
		Pen Color( "blue" );
		V Line(
			Gamma Poisson Quantile( qexpl, qexps, qexpq ),
			0,
			1
		);
		Text(
			{1, 0.9},
			" \!U03BB=",
			Round( qexpl, 2 ),
			" \!U03C3=",
			Round( qexps, 2 )
		);
		Text(
			{1, 0.8},
			" q=",
			Round( qexpq, 2 ),
			" quantile=",
			Round(
				Gamma Poisson Quantile( qexpl, qexps, qexpq )
			)
		);
	),
	H List Box(
		Slider Box( 3, 40, qexpl, qexpy << reshow ),
		Text Box( " \!U03BB" )
	),
	H List Box(
		Slider Box( 1, 5, qexps, qexpy << reshow ),
		Text Box( " \!U03C3" )
	),
	H List Box(
		Slider Box( 0, 1, qexpq, qexpy << reshow ),
		Text Box( " q" )
	)
);

```

### Gamma Quantile

**Syntaxe :** q = Gamma Quantile( p, &lt;alpha=1&gt;, &lt;scale=1&gt;, &lt;threshold=0&gt; )

**Description :** Renvoie le quantile d’une distribution gamma, correspondant à la probabilité p qu’une variable aléatoire ayant cette distribution prenne une valeur inférieure au quantile.

**JMP Version ajoutée :** Avant la version 14

```jsl

Gamma Quantile( 0.75, 4 );

```

### GenGamma Density

**Syntaxe :** y = GenGamma Density( x, mu, sigma, lambda )

**Description :** Renvoie la densité à x d&apos;une distribution de probabilité gamma généralisée étendue avec les paramètres mu, sigma, et lambda.

**JMP Version ajoutée :** Avant la version 14

```jsl

mu = 0;
sigma = 1;
lambda = 1;
New Window( "Example: GenGamma Density",
	gdey = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( -5, 10 ),
		XName( "y" ),
		Pen Color( "red" );
		Y Function(
			GenGamma Density( y, mu, sigma, lambda ),
			y
		);
		Text(
			{-4, 0.9},
			"\!U03BC=",
			Round( mu, 4 ),
			" \!U03C3=",
			Round( sigma, 4 )
		);
		Text( {-4, 0.8}, "\!U03BB=", Round( lambda, 4 ) );
	),
	H List Box(
		Slider Box( -5, 5, mu, gdey << reshow ),
		Text Box( "\!U03BC" )
	),
	H List Box(
		Slider Box( 0, 4, sigma, gdey << reshow ),
		Text Box( "\!U03C3" )
	),
	H List Box(
		Slider Box( 0, 10, lambda, gdey << reshow ),
		Text Box( "\!U03BB" )
	)
);

```

### GenGamma Distribution

**Syntaxe :** p = GenGamma Distribution( x, mu, sigma, lambda )

**Description :** Renvoie la probabilité qu&apos;une variable aléatoire distribuée selon gamma généralisé étendu (avec les paramètres mu, sigma, et lambda) soit inférieure à x.

**JMP Version ajoutée :** Avant la version 14

```jsl

mu = 0;
sigma = 1;
lambda = 1;
New Window( "Example: GenGamma Distribution",
	gdey = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( -10, 20 ),
		XName( "y" ),
		Pen Color( "red" );
		Y Function(
			GenGamma Distribution( y, mu, sigma, lambda ),
			y
		);
		Text(
			{-9, 0.9},
			"\!U03BC=",
			Round( mu, 4 ),
			" \!U03C3=",
			Round( sigma, 4 )
		);
		Text( {-9, 0.8}, "\!U03BB=", Round( lambda, 4 ) );
	),
	H List Box(
		Slider Box( -5, 5, mu, gdey << reshow ),
		Text Box( "\!U03BC" )
	),
	H List Box(
		Slider Box( 0, 4, sigma, gdey << reshow ),
		Text Box( "\!U03C3" )
	),
	H List Box(
		Slider Box( 0, 10, lambda, gdey << reshow ),
		Text Box( "\!U03BB" )
	)
);

```

### GenGamma Quantile

**Syntaxe :** q = GenGamma Quantile( p, mu, sigma, lambda )

**Description :** Renvoie le quantile d’une distribution gamma généralisée étendue (avec les paramètres mu, sigma, et lambda), dont la valeur correspondant à la probabilité p qu&apos;une valeur aléatoire soit inférieure.

**JMP Version ajoutée :** Avant la version 14

```jsl

mu = 0;
sigma = 1;
lambda = 1;
p = 0.4;
New Window( "Example: GenGamma Quantile",
	gdey = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( -10, 20 ),
		XName( "y" ),
		Pen Color( "red" );
		Y Function(
			GenGamma Distribution( x, mu, sigma, lambda ),
			x
		);
		Pen Color( "Blue" );
		V Line(
			GenGamma Quantile( p, mu, sigma, lambda ),
			0,
			1
		);
		Text(
			{-9, 0.9},
			"\!U03BC=",
			Round( mu, 4 ),
			" \!U03C3=",
			Round( sigma, 4 ),
			" \!U03BB=",
			Round( lambda, 4 )
		);
		Text( {-9, 0.8}, "p=", Round( p, 3 ) );
		Text(
			{-9, 0.7},
			"quantile= ",
			Round(
				GenGamma Quantile( p, mu, sigma, lambda ),
				2
			)
		);
	),
	H List Box(
		Slider Box( -2, 2, mu, gdey << reshow ),
		Text Box( "\!U03BC" )
	),
	H List Box(
		Slider Box( 0, 4, sigma, gdey << reshow ),
		Text Box( "\!U03C3" )
	),
	H List Box(
		Slider Box( 0, 10, lambda, gdey << reshow ),
		Text Box( "\!U03BB" )
	),
	H List Box(
		Slider Box( 0.01, 0.99, p, gdey << reshow ),
		Text Box( " p" )
	)
);

```

### Get Addin

**Syntaxe :** Get Addin( ID )

**Description :** Récupère un complément enregistré spécifié par son identifiant.

**JMP Version ajoutée :** Avant la version 14

```jsl

addin = Get Addin( "com.mycompany.myaddin" );

```

### Get Addins

**Syntaxe :** Get Addins( )

**Description :** Renvoie une liste de tous les compléments enregistrés.

**JMP Version ajoutée :** Avant la version 14

```jsl

addins = Get Addins();
addin ids = Get Addins() << id;
Show( addins, addin ids );

```

### Get Addr Info

**Syntaxe :** Get Addr Info( string )

**Description :** Cherche l&apos;adresse numérique pour un nom. Dans la plupart des cas, le nom devrait être utilisé pour la compatibilité future avec IPV6.

**JMP Version ajoutée :** Avant la version 14

```jsl

Get Addr Info( "www.jmp.com" )[3][4];

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

### Get Clipboard

**Syntaxe :** Get Clipboard()

**Description :** Obtenir le contenu actuel du presse-papiers

**JMP Version ajoutée :** Avant la version 14

```jsl

Get Clipboard();

```

### Get Color Theme Detail

**Syntaxe :** script = Get Color Theme Detail(name)

**Description :** Renvoie le script pour un nom de thème de couleur donné

**JMP Version ajoutée :** Avant la version 14

```jsl

Get Color Theme Detail( "JMP Default" );

```

### Get Color Theme Names

**Syntaxe :** {list of names} = Get Color Theme Names(&lt;kind&gt;)

**Description :** Renvoie une liste de chaînes de thèmes de couleur appariés au paramètre facultatif kind. kind prend l&apos;une des valeurs suivantes : « continu », « catégoriel », « séquentiel », « divergent », « qualitatif » ou « chromatique ».

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

Get Color Theme Names();

```

**Exemple 2**

```jsl

Get Color Theme Names( "sequential" );

```

### Get Custom Functions

**Syntaxe :** Get Custom Functions(&lt;{function 1 full name, function 2 full name, ...} | function full name&gt;)

**Description :** Obtenir une liste des fonctions personnalisées

**JMP Version ajoutée :** 14

**Exemple 1**

```jsl

Get Custom Functions();

```

**Exemple 2**

```jsl

Get Custom Functions( {"custom:Add", "custom:Sub"} );

```

### Get Data Table

**Syntaxe :** dt = Get Data Table( &lt;Project(title|index|box|window)&gt;, name|index )

**Description :** Renvoie une référence à la table de données spécifiée.



La recherche se limite aux tables du projet actif (sauf lorsque le script n&apos;est pas exécuté dans un projet).



Pour spécifier un projet, utilisez l&apos;argument facultatif Project() avec un titre, un index, une boîte d&apos;affichage ou un objet fenêtre. Utilisez Project(0) pour spécifier que le script n&apos;est pas exécuté dans un projet.

**JMP Version ajoutée :** 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Open( "$SAMPLE_DATA/Cars.jmp" );
Get Data Table( 1 );

```

### Get Data Table List

**Syntaxe :** tableList = Get Data Table List( &lt;Project(title|index|box|window)&gt; )

**Description :** Renvoie une liste de toutes les tables de données ouvertes.



Elle se limite aux tables du projet actif (sauf lorsque le script n&apos;est pas exécuté dans un projet).



Pour spécifier un projet, utilisez l&apos;argument facultatif Project() avec un titre, un index, une boîte d&apos;affichage ou un objet fenêtre. Utilisez Project(0) pour spécifier que le script n&apos;est pas exécuté dans un projet.

**JMP Version ajoutée :** 14

**Exemple 1**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Open( "$SAMPLE_DATA/Cars.jmp" );
Get Data Table List();

```

**Exemple 2**

```jsl

project = Open( "$SAMPLE_PROJECTS/Sports.jmpprj" );
Get Data Table List( Project( project ) );

```

### Get Default Directory

**Syntaxe :** y = Get Default Directory()

**Description :** Renvoie le répertoire JMP par défaut, qui est utilisé comme base pour les chemins d&apos;accès relatifs consécutifs. Ce chemin d&apos;accès est le répertoire qui contient le script en cours d&apos;exécution si le script est enregistré.

**JMP Version ajoutée :** Avant la version 14

```jsl

Show( Get Default Directory() );
Set Default Directory( "$SAMPLE_DATA" );
Show( Get Default Directory() );

```

### Get Environment Variable

**Syntaxe :** value = Get Environment Variable( string )

**Description :** Renvoie la valeur de la variable d’environnement spécifiée du système d’exploitation.



REMARQUE : sous le système d’exploitation Macintosh, le nom de variable est sensible à la casse.

**JMP Version ajoutée :** Avant la version 14

```jsl

Get Environment Variable( "PATH" );

```

### Get Excel Worksheets

**Syntaxe :** list = Get Excel Worksheets("filepath")

**Description :** Renvoie une liste des feuilles de calcul d&apos;un classeur Excel

**JMP Version ajoutée :** Avant la version 14

```jsl

sheetList = Get Excel Worksheets(
	"$SAMPLE_IMPORT_DATA\Team Results.xlsx"
);
Show( sheetList );

```

### Get Expr Location

**Syntaxe :** Get Expr Location(&lt;expression&gt;, [{"TokenStartLine"|"TokenStartCol"|"TokenStart"|"TokenLength"|"TreeStart"|"TreeEnd"|"TreeLength"}+]

**Description :** Récupère les emplacements du token supérieur dans une expression analysée. L&apos;appel par défaut renvoie {le fichier source, TokenStartLine, TokenStartCol, TokenLength}.

**JMP Version ajoutée :** 17

**Remplacer une sous-chaîne**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
data = " :height + 20 ";
e = Parse( data );
positions = Get Expr Location(
	Arg( e, 2 ),
	{"TreeStart", "TreeLength"}
);
Munger( data, positions[1], positions[2], "45" );

```

**Sélectionner la sortie**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
e = Parse( " :height + 20 " );
Get Expr Location( e, {"TreeStart", "TreeEnd"} );

```

**Sortie par défaut**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
e = Parse( ":height + 20" );
Get Expr Location( e );

```

### Get File Search Path

**Syntaxe :** y = Get File Search Path()

**Description :** Renvoie la liste courante des répertoires à rechercher pour l&apos;ouverture des fichiers.

**JMP Version ajoutée :** Avant la version 14

```jsl

Get File Search Path();

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

### Get Name Info

**Syntaxe :** Get Name Info( string )

**Description :** Cherche le nom pour une adresse numérique. Dans la plupart des cas, le nom devrait être utilisé pour la compatibilité future avec IPV6.

**JMP Version ajoutée :** Avant la version 14

```jsl

Get Name Info( "149.173.5.120" )[3][4];

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

### Get Notebook List

**Syntaxe :** notebookList = Get Notebook List()

**Description :** Renvoie une liste de tous les notebooks ouverts.

**JMP Version ajoutée :** 19

### Get OAuth2 Grant Types

**Syntaxe :** Get OAuth2 Grant Types

**Description :** Obtient les types d&apos;autorisation OAuth2 JMP pris en charge.

**JMP Version ajoutée :** 15

```jsl


/*
https://oauth.net/2/grant-types/
*/
grant_types = Get OAuth2 Grant Types();
Show( grant_types );

```

### Get OpenID Connect Discovery

**JMP Version ajoutée :** 15

```jsl


url =
"https://login.microsoftonline.com/common/v2.0/.well-known/openid-configuration";
aa = Get OpenID Connect Discovery( url );
Show( aa );

```

### Get OpenIDC Discovery

**JMP Version ajoutée :** 15

### Get Path Variable

**Syntaxe :** value = Get Path Variable( name )

**Description :** Renvoie la valeur d&apos;une variable de chemin d&apos;accès, qui est un nom tel que SAMPLE_DATA, qui est remplacé lorsqu&apos;il se trouve dans les noms de chemin d&apos;accès.

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

Get Path Variable( "SAMPLE_DATA" );
/* try: SAMPLE_DATA, SAMPLE_IMPORT_DATA, SAMPLE_SCRIPTS
See full listing of Path Variables in the other example
See also Convert File Path() and Set Path Variable() */

```

**Liste**

```jsl

// Run for a Path Variable listing
path vars = {"SAMPLE_DATA", "DESKTOP", "DOCUMENTS", "DOWNLOADS",
"TEMP", "HOME", "USER_APPDATA", "ALL_HOME", "BUILTIN_SCRIPTS",
"SAMPLE_APPS", "SAMPLE_DASHBOARDS", "SAMPLE_IMAGES",
"SAMPLE_IMPORT_DATA", "SAMPLE_PROJECTS", "SAMPLE_SCRIPTS"};
path vars ||= Transform Each( {id}, Get Addins() << ID,
	Eval Insert( "ADDIN_HOME(^id^)" )
);
path vars = Filter Each( {var}, path vars,
	Directory Exists( Get Path Variable( var ) )
);

New Window( "Path Variables",
	<<Type( "Dialog" ),
	Outline Box( "Path Variables",
		H List Box(
			Button Box( "Open Paths",
				For Each( {row}, tbl << Get Selected Rows,
					{path},
					path = tbl[String Col Box( 2 )] <<
					Get( row );
					Open( path );
				)
			),
			Button Box( "Copy Paths",
				If( N Items( tbl << Get Selected Rows ),
					Set Clipboard(
						Concat Items(
							Transform Each( {row},
								tbl << Get Selected Rows,
								Output( "List" ),
								tbl[String Col Box( 2 )] <<
								Get( row )
							),
							"\!N"
						)
					)
				)
			)
		),
		window:tbl = Table Box(
			String Col Box( "Variable", path vars ),
			String Col Box( "Path",
				Transform Each( {var}, path vars,
					Get Path Variable( var )
				)
			),
			<<Set Selectable Rows
		)
	)
);

```

### Get Platform Preference

**Syntaxe :** Get Platform Preferences( &lt; platformName &lt; ( optionName, ... ) &gt; ... &gt; )

**Description :** Obtient les préférences de la plate-forme telles que spécifiées.

**JMP Version ajoutée :** Avant la version 14

```jsl

Get Platform Preferences( Bivariate( Fit Line ), DOE );

```

### Get Platform Preferences

**Syntaxe :** Get Platform Preferences( &lt; platformName &lt; ( optionName, ... ) &gt; ... &gt; )

**Description :** Obtient les préférences de la plate-forme telles que spécifiées.

**JMP Version ajoutée :** Avant la version 14

```jsl

Get Platform Preferences( Bivariate( Fit Line ), DOE );

```

### Get Policies

**Syntaxe :** Get Policies( &lt;Machine|User|Both&gt; )

**Description :** Renvoie un tableau associatif contenant les noms et les valeurs de la stratégie actuelle.

**JMP Version ajoutée :** 18

```jsl

Get Policies();

```

### Get Policy

**Syntaxe :** Get Policy( "PolicyName" )

**JMP Version ajoutée :** 18

### Get Preference

**Syntaxe :** Get Preferences( pref1, ... )

**Description :** Obtient les préférences telles que spécifiées.

**JMP Version ajoutée :** Avant la version 14

```jsl

Get Preferences( Graph marker size );

```

### Get Preferences

**Syntaxe :** Get Preferences( pref1, ... )

**Description :** Obtient les préférences telles que spécifiées.

**JMP Version ajoutée :** Avant la version 14

```jsl

Get Preferences( Graph marker size );

```

### Get Project

**Syntaxe :** project = Get Project( title|index|box|window )

**Description :** Renvoie une référence à un projet ouvert spécifique selon le titre, l&apos;index ou la boîte.

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

Open( "$SAMPLE_PROJECTS/Big Class.jmpprj" );
Open( "$SAMPLE_PROJECTS/Sports.jmpprj" );
                             
Print( Get Project( 2 ) << Get Window Title() );

```

**Exemple 2**

```jsl

Open( "$SAMPLE_PROJECTS/Big Class.jmpprj" );
Open( "$SAMPLE_PROJECTS/Sports.jmpprj" );
                             
project = Get Project( "Big Class" );

```

### Get Project List

**Syntaxe :** projectList = Get Project List()

**Description :** Renvoie une liste de tous les projets ouverts.

**JMP Version ajoutée :** Avant la version 14

```jsl

New Project();
Open( "$SAMPLE_PROJECTS/Big Class.jmpprj" );
                              
Print( Get Project List() << Get Window Title() );

```

### Get Punctuation Characters

**Syntaxe :** Get Punctuation Characters(&lt;Exclude Chars(chars) | Include Chars(chars)&gt;)

**Description :** Renvoie une chaîne contenant les caractères de ponctuation typiquement utilisés pour séparer les mots. Il s&apos;agit notamment des caractères ,:;.?!\\/#@&~()[]<>"*`%$+=^|{} et de certains caractères de ponctuation Unicode courants.

**JMP Version ajoutée :** 15

**Exemple 1**

```jsl

Get Punctuation Characters();

```

**Exemple 2**

```jsl

Get Punctuation Characters( Include Chars( "_" ) );

```

**Exemple 3**

```jsl

Get Punctuation Characters( Exclude Chars( "$[]" ) );

```

**Exemple 4**

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

### Get Window

**Syntaxe :** window = Get Window( &lt;Project(title|index|box|window)&gt;, &lt;Type(string)&gt;, title|index|box )

**Description :** Renvoie une référence à une fenêtre ouverte spécifique selon le titre, l&apos;index ou la boîte.



La recherche se limite aux fenêtres du projet actif (sauf lorsque le script n&apos;est pas exécuté dans un projet).



Pour spécifier un projet, utilisez l&apos;argument facultatif Project() avec un titre, un index, une boîte d&apos;affichage ou un objet fenêtre. Utilisez Project(0) pour spécifier que le script n&apos;est pas exécuté dans un projet.



Utilisez l&apos;argument facultatif Type() avec "Data Tables", "Journals", "Reports", ou "Dialogs" pour limiter la recherche aux fenêtres d&apos;un type particulier.

**JMP Version ajoutée :** 14

**Exemple 1**

```jsl

Open( "$SAMPLE_DATA\Big Class.jmp" );
                                        
window = Get Window( "Big Class" );

```

**Exemple 2**

```jsl

project = Open( "$SAMPLE_PROJECTS\Big Class.jmpprj" );
                             
window = Get Window( Project( project ), "Big Class" );

```

### Get Window List

**Syntaxe :** windowList = Get Window List( &lt;Project(title|index|box|window)&gt;, &lt;Type(string)&gt; )

**Description :** Renvoie une liste de toutes les fenêtres ouvertes.



Elle se limite aux fenêtres du projet actif (sauf lorsque le script n&apos;est pas exécuté dans un projet).



Pour spécifier un projet, utilisez l&apos;argument facultatif Project() avec un titre, un index, une boîte d&apos;affichage ou un objet fenêtre. Utilisez Project(0) pour spécifier que le script n&apos;est pas exécuté dans un projet.



Utilisez l&apos;argument facultatif Type() avec "Data Tables", "Journals", "Reports", ou "Dialogs" pour limiter la liste aux fenêtres d&apos;un type particulier.

**JMP Version ajoutée :** 14

**Exemple 1**

```jsl

Print( Get Window List() << Get Window Title() );

```

**Exemple 2**

```jsl

project = Open( "$SAMPLE_PROJECTS\Big Class.jmpprj" );
                             
Print(
	Get Window List( Project( project ) ) << Get Window Title()
);

```

**Exemple 3**

```jsl

project = Open( "$SAMPLE_PROJECTS\Big Class.jmpprj" );
                             
Print(
	Get Window List( Project( project ), Type( "Data Tables" ) )
	 << Get Window Title()
);

```

### Global Box

**Syntaxe :** box = Global Box( name )

**Description :** Crée une boîte d&apos;affichage indiquant la valeur d&apos;une variable globale.

**JMP Version ajoutée :** Avant la version 14

```jsl

ex = .6;
New Window( "Example", Global Box( ex ) );

```

### GLog Density

**Syntaxe :** y = GLog Density( q, mu, sigma, lambda )

**Description :** Renvoie la densité à q d’une distribution logarithmique généralisée avec paramètre de position mu, paramètre d’échelle sigma et de forme lambda.

**JMP Version ajoutée :** Avant la version 14

```jsl

mu = 0;
sigma = 1;
lambda = 1;
New Window( "Example: GLog Density",
	gdey = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( -10, 10 ),
		XName( "y" ),
		Pen Color( "red" );
		Y Function( GLog Density( y, mu, sigma, lambda ), y );
		Text(
			{-9, 0.9},
			"\!U03BC=",
			Round( mu, 4 ),
			" \!U03C3=",
			Round( sigma, 4 )
		);
		Text( {-9, 0.8}, "\!U03BB=", Round( lambda, 4 ) );
	),
	H List Box(
		Slider Box( -5, 5, mu, gdey << reshow ),
		Text Box( " \!U03BC" )
	),
	H List Box(
		Slider Box( 0, 4, sigma, gdey << reshow ),
		Text Box( " \!U03C3" )
	),
	H List Box(
		Slider Box( 0, 10, lambda, gdey << reshow ),
		Text Box( " \!U03BB" )
	)
);

```

### GLog Distribution

**Syntaxe :** p = GLog Distribution( q, mu, sigma, lambda )

**Description :** Renvoie la probabilité qu&apos;une variable aléatoire distribuée selon le logarithme généralisé est inférieure à q.

**JMP Version ajoutée :** Avant la version 14

```jsl

mu = 0;
sigma = 1;
lambda = 1;
New Window( "Example: Glog Distribution",
	gdey = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( -20, 20 ),
		XName( "y" ),
		Pen Color( "red" );
		Y Function(
			GLog Distribution( y, mu, sigma, lambda ),
			y
		);
		Text(
			{-9, 0.9},
			"\!U03BC=",
			Round( mu, 4 ),
			" \!U03C3=",
			Round( sigma, 4 )
		);
		Text( {-9, 0.8}, "\!U03BB=", Round( lambda, 4 ) );
	),
	H List Box(
		Slider Box( -5, 5, mu, gdey << reshow ),
		Text Box( " \!U03BC" )
	),
	H List Box(
		Slider Box( 0, 4, sigma, gdey << reshow ),
		Text Box( " \!U03C3" )
	),
	H List Box(
		Slider Box( 0, 10, lambda, gdey << reshow ),
		Text Box( " \!U03BB" )
	)
);

```

### GLog Quantile

**Syntaxe :** q = GLog Quantile( p, mu, sigma, lambda )

**Description :** Renvoie le quantile d’une distribution logarithmique généralisée, correspondant à la probabilité p qu’une variable aléatoire ayant cette distribution prenne une valeur inférieure au quantile.

**JMP Version ajoutée :** Avant la version 14

```jsl

mu = 0;
sigma = 1;
lambda = 1;
p = 0.4;
New Window( "Example: GLog Quantile",
	gdey = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( -20, 20 ),
		XName( "y" ),
		Pen Color( "red" );
		Y Function(
			GLog Distribution( x, mu, sigma, lambda ),
			x
		);
		Pen Color( "Blue" );
		V Line( GLog Quantile( p, mu, sigma, lambda ), 0, 1 );
		Text(
			{-9, 0.9},
			"\!U03BC=",
			Round( mu, 4 ),
			" \!U03C3=",
			Round( sigma, 4 ),
			" \!U03BB=",
			Round( lambda, 4 )
		);
		Text( {-9, 0.8}, "p=", Round( p, 3 ) );
		Text(
			{-9, 0.7},
			"quantile= ",
			Round( GLog Quantile( p, mu, sigma, lambda ), 2 )
		);
	),
	H List Box(
		Slider Box( -2, 2, mu, gdey << reshow ),
		Text Box( " \!U03BC" )
	),
	H List Box(
		Slider Box( 0, 4, sigma, gdey << reshow ),
		Text Box( " \!U03C3" )
	),
	H List Box(
		Slider Box( 0, 10, lambda, gdey << reshow ),
		Text Box( " \!U03BB" )
	),
	H List Box(
		Slider Box( 0.01, 0.99, p, gdey << reshow ),
		Text Box( " p" )
	)
);

```

### Glue

**Syntaxe :** y = ( expr1; expr2; ... ); y = Glue( expr1, expr2, ... )

**Description :** Évalue chaque argument et retourne le dernier résultat.

**JMP Version ajoutée :** Avant la version 14

```jsl

ex1 = 1;
ex2 = 2;

```

### Google Sheet Export

**Syntaxe :** Google Sheet Export(dt, Email(address), Spreadsheet(url|id) | New Spreadsheet(name), Sheet Name(name))

**Description :** Exporte une table de données dans une nouvelle feuille de calcul Google ou dans un nouvel onglet d&apos;une feuille de calcul Google existante.

**JMP Version ajoutée :** 15

```jsl

email = "youremail@gmail.com"; //Replace this with your email
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Google Sheet Export(
	dt,
	Email( email ),
	New Spreadsheet( "JSL Example" ),
	Sheet Name( "Example 1" )
);

```

### Google Sheet Import

**Syntaxe :** Google Sheet Import(Email(address), Spreadsheet(url|id), &lt;Sheets("sheetName1", ... "sheetNameN")&gt;, &lt;Sheet Settings( Has Column Headers(Boolean), Data Starts on Row(n), Cell Range(range), Import Cell Colors(Boolean), Supress Empty Columns(Boolean))&gt;)

**Description :** Ouvre un fichier Google Sheet.

**JMP Version ajoutée :** 15

```jsl

email = "youremail@gmail.com"; //Replace this with your email
spreadsheet =
"https://docs.google.com/spreadsheets/d/1AqV2ZkzzMtFrk-devlFdQW2Sb09ipOQaCQ1p0iho-iE/"; 
                                        
Google Sheet Import(
	Email( email ),
	Spreadsheet( spreadsheet ),
	Sheets( "Sheet1", "Sheet2" ),
	Sheet Settings(
		Has Column Headers( 0 ),
		Data Starts on Row( 1 ),
		Cell Range( "A1:C2" ),
		Import Cell Colors( 0 ),
		Suppress Empty Columns( 1 )
	)
);

```

### Gradient Function

**Syntaxe :** Gradient Function( zExpr, xName, yName, zLimits, zColor( color list or matrix ), &lt; &lt;&lt;XGrid( min, max, incr )&gt;, &lt; &lt;&lt;YGrid( min, max, incr )&gt;, &lt; &lt;&lt;Transparency( t )&gt; )

**Description :** Remplit le graphique avec des dégradés entre deux couleurs. L&apos;argument zExpr est une fonction des deux variables xName et yName. Le vecteur zLimits spécifie l’intervalle des valeurs de zExpr. L&apos;argument zColor est un vecteur ou une liste qui définit les deux couleurs qui sont mélangées pour créer le dégradé. Le Transparency est une valeur unique appliquée à l&apos;ensemble de la grille.

**JMP Version ajoutée :** Avant la version 14

```jsl

New Window( "Example",
	Graph Box(
		Gradient Function(
			Log( a * a + b * b ),
			a,
			b,
			[2 10],
			Z Color( {"Green", "Orange"} )
		)
	)
);

```

### Graph

**Syntaxe :** y = Graph Box( props, script )

**Description :** Renvoie une boîte d&apos;affichage contenant un graphique avec des axes. Les arguments nommés peuvent être : Title("title"), XScale(low, high), YScale(low, high), FrameSize(h, v), XName("x"), yName("y"), DoubleBuffer et SuppressAxes.

**JMP Version ajoutée :** Avant la version 14

```jsl

New Window( "Example",
	Graph Box(
		Frame Size( 300, 300 ),
		Marker( Marker State( 3 ), [11 44 77], [75 25 50] );
		Pen Color( "Blue" );
		Line( [10 30 70], [88 22 44] );
	)
);

```

### Graph 3D Box

**Syntaxe :** y = Graph 3D Box()

**Description :** (Expérimental) Renvoie une boîte d&apos;affichage avec un contenu 3D qui peut être utilisée avec d&apos;autres boîtes d&apos;affichage pour créer des rapports personnalisés.

**JMP Version ajoutée :** Avant la version 14

```jsl

x3d = Graph 3D Box(
	framesize( 300, 300 ),
	Xname( "X Axis" ),
	Yname( "Y Axis" ),
	Zname( "Z Axis" )
);
New Window( "Graph3DBox Example", x3d );
x3d << addmarkers(/*x*/[20 20 20 20], /*y*/[20 20 20 20], /*z*/[
	10 20 30 40]
);
x3d << AddVector(
	[60 60 60]/*from*/,
	[90 60 60, 60 90 60, 60 60 90]/*to*/,
	ShaftThickness( [.1] ),
	FromThickness( [.2] ),
	ToThickness( [.3] ),
	ShaftColor( [-255] ),
	FromColor( [-16711680] ),
	ToColor( [-65280] ),
	Facets( Round ),
	FromCap( Sphere ),
	toCap( Point )
);

```

### Graph Box

**Syntaxe :** y = Graph Box( props, script )

**Description :** Renvoie une boîte d&apos;affichage contenant un graphique avec des axes. Les arguments nommés peuvent être : Title("title"), XScale(low, high), YScale(low, high), FrameSize(h, v), XName("x"), yName("y"), DoubleBuffer et SuppressAxes.

**JMP Version ajoutée :** Avant la version 14

```jsl

New Window( "Example",
	Graph Box(
		Frame Size( 300, 300 ),
		Marker( Marker State( 3 ), [11 44 77], [75 25 50] );
		Pen Color( "Blue" );
		Line( [10 30 70], [88 22 44] );
	)
);

```

### Greater

**Syntaxe :** z = x &gt; y &gt; ... ; z = Greater( x, y, ... )

**Description :** Renvoie 1 si chaque argument est supérieur à l&apos;argument suivant, et 0 dans le cas contraire.

**JMP Version ajoutée :** Avant la version 14

```jsl

3 > 2 > 1;

```

### Greater or Equal

**Syntaxe :** z = x &gt;= y &gt;= ... ; z = Greater or Equal( x, y, ... )

**Description :** Renvoie 1 si chaque argument est supérieur ou égal à l&apos;argument suivant, et 0 dans le cas contraire.

**JMP Version ajoutée :** Avant la version 14

```jsl

3 >= 2 >= 2;

```

### Gzip Compress

**Syntaxe :** blob = Gzip Compress( blob )

**Description :** Compresse un blob de données pour obtenir un blob gzip.

**JMP Version ajoutée :** 14

```jsl

Gzip Compress(
	Char To Blob(
		"random data does not usually compress well and may get larger"
	)
);

```

### Gzip Uncompress

**Syntaxe :** blob = Gzip Uncompress( blob )

**Description :** Décompresse un blob de données gzip dans un blob.

**JMP Version ajoutée :** 14

```jsl

Gzip Uncompress(/*typically this data might come from GzipCompress() but might also come from a .gz file using loadTextFile with the blob option*/
	Char To Blob(
		"~1F~8B~08~00~00~00~00~00~00~0A~0D~CA~C1~0D~00~21~08~04~C0V~B6~B5~CDA~FC~80~5C~00c~EC^~E7=~C9)~E1~106~21~A1~85~19~8DU~8Bf~07_~F8~9FZ~85~ADfx~13~CE~83~A1~0Dc~0E~CD~0B~94*~16~1E=~00~00~00",
		"ascii~hex"
	)
);

```

### H Center Box

**Syntaxe :** y = H Center Box( &lt;childbox&gt; )

**Description :** Renvoie une boîte d&apos;affichage contenant l&apos;argument boîte d&apos;affichage childbox centré sur l&apos;espace horizontal défini par la taille maximale de cette boîte enfant et de toutes les boîtes sœurs de la boîte centrale.

**JMP Version ajoutée :** Avant la version 14

```jsl

New Window( "test",
	H List Box(
		V Center Box( Text Box( "V+V" ) ),
		V List Box(
			Text Box( "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm" ),
			H Center Box( Text Box( "H+H" ) ),
			Text Box( "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm" ),
			Text Box( "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm" ),
			Text Box( "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm" ),
			Text Box( "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm" )
		)
	)
);

```

### H Direct Product

**Syntaxe :** y = H Direct Product( A, B )

**Description :** Renvoie le produit cartésien horizontal, qui est le produit cartésien de chaque ligne des matrices A et B.

**JMP Version ajoutée :** Avant la version 14

```jsl

exA = [1 2, 3 4];
exB = [1 1 1, 2 2 2];
exProd = H Direct Product( exA, exB );
Show( exProd );

/* verify result */
Show(
	exProd[1, 1 :: 6] ==
	Direct Product( exA[1, 1 :: 2], exB[1, 1 :: 3] )
);
Show(
	exProd[2, 1 :: 6] ==
	Direct Product( exA[2, 1 :: 2], exB[2, 1 :: 3] )
);

```

### H Line

**Syntaxe :** H Line( y ); H Line( x1, x2, y )

**Description :** Dessine une droite horizontale sur y, de x1 à x2 ou traversant tout le cadre.

**JMP Version ajoutée :** Avant la version 14

```jsl

New Window( "Example",
	Graph Box(
		Pen Size( 2 );
		H Line( 10, 50, 20 );
	)
);

```

### H List Box

**Syntaxe :** y = H List Box( &lt;Align( center|bottom )&gt;, displayBox, ... )

**Description :** Renvoie une boîte d&apos;affichage qui réorganise les boîtes d&apos;affichage fournies par les arguments dans une mise en page horizontale. Le message <<Hold demande à la feuille de conserver le(s) rapport(s) qui seront extraits. L’argument facultatif Align permet d’aligner à bottom ou au center le contenu de la boîte d’affichage.

**JMP Version ajoutée :** Avant la version 14

```jsl

New Window( "Example",
	Outline Box( "Picker",
		H List Box(
			Text Box( "Label:" ),
			Text Edit Box( Char( 213 ) )
		)
	)
);

```

### H Scroll Box

**Syntaxe :** y = H Scroll Box( &lt;Size( x )&gt;, displayBox )

**Description :** Renvoie une boîte d’affichage qui positionne une boîte enfant plus grande avec une barre de défilement horizontale.

**JMP Version ajoutée :** Avant la version 14

```jsl

New Window( "Example",
	Outline Box( "Picker",
		H Scroll Box(
			Size( 200 ),
			H List Box(
				H List Box(
					Text Box( "Label:" ),
					Text Edit Box( Char( 213 ) )
				),
				H List Box(
					Text Box( "Label:" ),
					Text Edit Box( Char( 213 ) )
				),
				H List Box(
					Text Box( "Label:" ),
					Text Edit Box( Char( 213 ) )
				),
				H List Box(
					Text Box( "Label:" ),
					Text Edit Box( Char( 213 ) )
				),
				H List Box(
					Text Box( "Label:" ),
					Text Edit Box( Char( 213 ) )
				)
			),
			<<Set Stretch( "Window", "Window" )
		)
	)
);

```

### H Sheet Box

**Syntaxe :** y = H Sheet Box( &lt;&lt;Hold( rpt ), displayBox, ... )

**Description :** Renvoie une boîte d&apos;affichage qui réorganise les boîtes d&apos;affichage fournies par les arguments dans une mise en page horizontale. Le message <<Hold demande à la feuille de conserver le(s) rapport(s) qui seront extraits. L’argument facultatif Align permet d’aligner à right ou au center le contenu de la boîte d’affichage.

**JMP Version ajoutée :** Avant la version 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Example",
	V Sheet Box(
		<<Hold(
			Bivariate( Y( :weight ), X( :height ), Fit Line() )
		),
		<<Hold(
			Distribution(
				Automatic Recalc( 1 ),
				Continuous Distribution(
					Column( :height ),
					Horizontal Layout( 1 ),
					Vertical( 0 ),
					Outlier Box Plot( 0 )
				)
			)
		),
		<<Hold( Treemap( Categories( :age ) ) ),
		<<Hold(
			Bubble Plot(
				X( :height ),
				Y( :weight ),
				Sizes( :age ),
				Coloring( :sex ),
				Circle Size( 6.226 ),
				All Labels( 0 )
			)
		),
		H Sheet Box(
			Sheet Part(
				"weight by height",
				Excerpt Box( 1, {Picture Box( 1 )} )
			),
			Sheet Part(
				"height",
				Excerpt Box( 2, {Picture Box( 1 )} )
			)
		),
		H Sheet Box(
			Sheet Part(
				"",
				Excerpt Box( 3, {Picture Box( 1 )} )
			),
			Sheet Part(
				"height by weight",
				Excerpt Box( 4, {Picture Box( 1 )} )
			)
		)
	)
);

```

### H Size

**Syntaxe :** h = H Size()

**Description :** Renvoie la taille horizontale du cadre des graphiques en pixels.

**JMP Version ajoutée :** Avant la version 14

```jsl

New Window( "Example",
	Graph Box(
		Pen Size( H Size() / 20 );
		Line( [10 30 90], [88 22 44] );
	)
);

```

### H Splitter Box

**Syntaxe :** y = H Splitter Box( &lt;Size(x,y)&gt;, displayBox, ... )

**Description :** Renvoie une boîte d&apos;affichage qui permet d&apos;organiser d&apos;autres boîtes d&apos;affichage horizontalement, avec un contrôle interactif des tailles. Les tailles enfant sont spécifiées sous la forme d&apos;une proportion de la largeur ou de la hauteur de la Splitter Box. L&apos;argument facultatif Size n&apos;est utilisé que pour la Splitter Box de premier niveau ; les boîtes de niveau inférieur sont dimensionnées comme toute autre boîte enfant.

**JMP Version ajoutée :** Avant la version 14

```jsl

New Window( "Splitter",
	V Splitter Box(
		Size( 800, 600 ),
		H Splitter Box(
			graph = Graph Box(),
			Script Box(),
			<<Sizes( {0.6, 0.4} )
		),
		H Splitter Box(
			pict = Picture Box(
				Open( "$SAMPLE_IMAGES/tile.jpg", jpg )
			),
			spacer = Spacer Box(),
			<<Sizes( {0.4, 0.6} )
		)
	)
);
graph[FrameBox( 1 )] << Set Stretch( "Window", "Window" );
pict << Set Min Size( 100, 100 );
pict << Set Max Size( 500, 500 );
pict << Set Stretch( "Window", "Window" );
spacer << Set Fill( 1 );
spacer << Color( "Red" );
spacer << Set Stretch( "Window", "Window" );

```

### Hadamard

**Syntaxe :** y = Hadamard( n, &lt;normalize = 0&gt; )

**Description :** Crée une matrice de Hadamard d&apos;ordre n.

**JMP Version ajoutée :** 15

```jsl

Show( Hadamard( 12 ), Hadamard( 12, 1 ) );

```

### Handle

**Syntaxe :** Handle( xPos, yPos, dragScript, &lt;mouseUpScript&gt; )

**Description :** Dessine un marqueur carré aux coordonnées spécifiées par xPos et yPos, et évalue de façon répétée l’expression dragScript lorsque vous cliquez sur le marqueur. Avant l&apos;exécution du script, les valeurs globales x et y sont définies par le pointeur de la souris, elles sont rétablies par la suite à leurs valeurs d&apos;origine. L’expression mouseUpScript est exécutée une fois que le bouton de la souris est relâché.

**JMP Version ajoutée :** Avant la version 14

```jsl

New Window( "Example",
	exx = 20;
	exy = 50;,
	Graph Box(
		Frame Size( 200, 200 ),
		Handle(
			exx,
			exy,
			exx = x;
			exy = y;
		);
		Circle( {0, 0}, Sqrt( exx * exx + exy * exy ) );
	)
);

```

### Head

**Syntaxe :** y = Head( x )

**Description :** Renvoie la tête de l&apos;expression évaluée, sans ses arguments.

**JMP Version ajoutée :** Avant la version 14

```jsl

Head( Expr( Sum( a, b, c ) ) );

```

### Head Expr

**Syntaxe :** y = Head Expr( expr )

**Description :** Renvoie la tête de l&apos;expression, sans ses arguments. Cette fonction est déconseillée. Veuillez plutôt utiliser Tête().

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

// See Example 2 for the deprecated Head Expr() equivalent
Head( Expr( Sum( a, b, c ) ) );

```

**Exemple 2**

```jsl

// Deprecated
Head Expr( Sum( a, b, c ) );

```

### Head Name

**Syntaxe :** y = Head Name( x )

**Description :** Renvoie la tête de l&apos;expression évaluée sous forme de chaîne, sans ses arguments.

**JMP Version ajoutée :** Avant la version 14

```jsl

Head Name( Expr( Sum( a, b, c ) ) );

```

### Head Name Expr

**Syntaxe :** y = Head Name Expr( expr )

**Description :** Renvoie la tête de l&apos;expression sous forme de chaîne, sans ses arguments. Cette fonction est déconseillée. Veuillez plutôt utiliser Nom de la tête().

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

// See Example 2 for the deprecated Head Name Expr() equivalent
Head Name( Expr( Sum( a, b, c ) ) );

```

**Exemple 2**

```jsl

// Deprecated
Head Name Expr( Sum( a, b, c ) );

```

### Heat Color

**Syntaxe :** y = Heat Color( x ); y = Heat Color( x, &lt; &lt;&lt;theme&gt; )

**Description :** Renvoie une couleur correspondant à une valeur comprise entre 0 et 1. La couleur par défaut va du bleu au rouge, en passant par le gris. Toute couleur prise en charge par le diagramme de cellules est prise en charge ici. Les arguments de matrice sont également pris en charge.

**JMP Version ajoutée :** Avant la version 14

```jsl

New Window( "Color Bar",
	Graph(
		For( z = 0, z < 1, z += .1,
			x = 10 + 80 * z;
			Fill Color(
				Heat Color( z, <<"Green to Black to Red" )
			);
			Rect( x - 5, 45, x + 5, 55, 1 );
		)
	)
);

```

### Hex

**Syntaxe :** h = Hex( value, &lt;"integer"&gt;|&lt;encoding="utf-8"&gt;|&lt;Base(number)&gt;,&lt;Pad To(number)&gt; )

**Description :** Renvoie le texte hexadécimal (ou autre système de numération à base) correspondant à la valeur et au codage donnés, qui peut être un nombre, une chaîne ou un blob. Si la valeur est un nombre, le code 64 bits IEEE 754 sera utilisé à moins qu&apos;un des arguments facultatifs, integer ou Base, soit fourni. Si Base est spécifié, la fonction renvoie le texte correspondant au nombre spécifié dans ce système de numération à base au lieu du texte hexadécimal. La base doit être une valeur entière comprise entre 2 et 36 inclus. Les codes pris en charge sont notamment utf-8, utf-16le, utf-16be, us-ascii, iso-8859-1, ascii~hex, shift_jis et euc-jp.

**JMP Version ajoutée :** Avant la version 14

```jsl

Hex( 1024, "integer" ) || " " || Hex( "Café", "utf-16be" ) ||
" " || Hex( 11, Base( 2 ), Pad To( 8 ) );

```

### Hex To Blob

**Syntaxe :** blob = Hex To Blob( hex string )

**Description :** Crée un BLOB (grand objet binaire) à partir de la chaîne de codes hexadécimaux donnée, qui peut également inclure des espaces, des virgules, des retours chariot et des sauts de ligne.

**JMP Version ajoutée :** Avant la version 14

```jsl

Hex To Blob( "FF78CE" );

```

### Hex To Char

**Syntaxe :** s = Hex To Char( hextext, &lt;encoding="utf-8"&gt; )

**Description :** Renvoie le texte correspondant au texte hexadécimal, à l&apos;aide du code spécifié. Les codes pris en charge sont notamment : utf-8, utf-16le, utf-16be, us-ascii, iso-8859-1, ascii~hex, shift_jis, et euc-jp.

**JMP Version ajoutée :** Avant la version 14

```jsl

Hex To Char( "436166C3A9" ) ||
Hex To Char( "00430061006600E9", "utf-16be" );

```

### Hex To Number

**Syntaxe :** x = Hex To Number( hextext, &lt;Base(number)&gt; )

**Description :** Renvoie le nombre correspondant au texte hexadécimal (ou autre système de numération à base). Les 16 chiffres hexadécimaux sont convertis sous forme de nombres à virgules flottantes 64 bits IEEE 754 ; sinon l&apos;entrée est traitée comme un entier hexadécimal. Si Base est spécifié, le texte est traité comme une chaîne représentant le nombre dans cette base. La base doit être un entier compris entre 2 et 36 inclus.

**JMP Version ajoutée :** Avant la version 14

```jsl

Hex To Number( "11110000", Base( 2 ) );

```

### Hidden

**Syntaxe :** y = Hidden( &lt;rs&gt; ); Hidden( &lt;Row State( &lt;r&gt; )&gt; ) = y

**Description :** Renvoie la composante masquée de la valeur d&apos;état de ligne spécifiée, 0 ou 1. Si Hidden est utilisée comme L-value, l’état masqué de la ligne active (ou r-ième) de la table de données est modifié.

**JMP Version ajoutée :** Avant la version 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Hidden State( 1 );
Hidden( Row State( 3 ) );
Row() = 3;
Hidden();

```

### Hidden State

**Syntaxe :** rs = Hidden State( x )

**Description :** Renvoie une valeur d&apos;état de ligne avec la composante masquée définie comme la valeur spécifiée.

**JMP Version ajoutée :** Avant la version 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Hidden State( 1 );
Hidden( Row State( 3 ) );

```

### Hier Box

**Syntaxe :** y = Hier Box( text, Hier Box( ... ), Hier Box( ... ), ... )

**Description :** Renvoie une boîte d’affichage illustrant les arbres de la hiérarchie. L’argument text représente le nom du nœud et peut être une Text Edit Box.

**JMP Version ajoutée :** Avant la version 14

```jsl

New Window( "Example",
	Hier Box(
		Text Edit Box( "Cause 1" ),
		Hier Box(
			Text Edit Box( "Subcause 1.1" ),
			<<direction( 1 )
		),
		Hier Box( Text Box( "Subcause 1.2" ) ),
		<<Change Type( Fishbone ),
		<<direction( 1 )
	)
);

```

### Hier Clust

**Syntaxe :** {c1, c2, c3, c4, c5} = Hier Clust( x )

**Description :** Renvoie l&apos;historique de classification d’une classification hiérarchique en utilisant la méthode de Ward (sans standardiser les données), où x est une matrice de données.

**JMP Version ajoutée :** Avant la version 14

```jsl

exdt = Open( "$SAMPLE_DATA/Body Measurements.jmp" );
ex = exdt << get as matrix();
exhc = Hierarchical Cluster(
	Y( Eval( exdt << Get Column Names ) ),
	Method( Ward ),
	Standardize( 0 ),
	Dendrogram Scale( Even Spacing ),
	Number of Clusters( 3 )
);
Report( exhc )["Dendrogram"] << Close( 1 );
Report( exhc )["Clustering History"] << Close( 0 );
exhistory = Hier Clust( ex );
exhistory[3, 1];

```

### Hist Seg

**Syntaxe :** b = Hist Seg([data], &lt;[freq data]&gt;,&lt;[weight data]&gt;, &lt;vertical=0|1&gt;, &lt;Row States()&gt;)

**Description :** Renvoie un seg hist

**JMP Version ajoutée :** Avant la version 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
rows = N Row( xx );
New Window( "Hist Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, .2 ),
		Hist Seg(
			xx,
			J( rows, 1 ),
			J( rows, 1 ),
			1,
			Row States( dt )
		)
	)
);

```

### HLS Color

**Syntaxe :** y = HLS Color( h, l, s ); y = HLS Color( {h, l, s} )

**Description :** Renvoie un numéro de couleur à partir des composantes tonalité, luminosité et saturation, toutes comprises entre 0 et 1.

**JMP Version ajoutée :** Avant la version 14

```jsl

New Window( "Color Wheel",
	Graph(
		frameSize( 200, 200 ),
		For( hue = 0, hue < 360, hue += 30,
			y = 50 - 40 * Cos( hue * 2 * Pi() / 360 );
			x = 50 + 40 * Sin( hue * 2 * Pi() / 360 );
			Fill Color( HLS Color( hue / 360, 0.5, 1 ) );
			Oval( x - 10, y - 10, x + 10, y + 10, 1 );
		)
	)
);

```

### Host is

**Syntaxe :** y = Host is( "Mac"|"Windows"|"Bits32"|"Bits64"|"x86_64"|"arm64" )

**Description :** Renvoie 1 si l’application JMP correspond à l’argument ; 0 dans le cas contraire. Les arguments Windows ou Mac vérifient le système d’exploitation spécifié et les arguments Bits32 ou Bits64 vérifient l’application JMP spécifiée à 32 ou 64 bits. Un seul argument peut être vérifié à la fois.

**JMP Version ajoutée :** Avant la version 14

```jsl

If( Host is( "Mac" ),
	Show( "On Mac" ),
	Show( "Not on Mac" )
);
If( Host is( "Bits64" ),
	Show( "64 bit" )
);
If(
	Host is( "x86_64" ), Show( "On x86_64" ),
	Host is( "arm64" ), Show( "On arm64" )
);

```

### Hough Line Transform

**Syntaxe :** accum = Hough Line Transform( matrix, &lt;NAngle(number)&gt; &lt;NRadius(number)&gt; )

**Description :** Renvoie la transformation de Hough pour détecter les lignes dans les données image

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

xx = .4;
yy = .4;
angleDegrees = (1 :: 180)`;
angle = Pi() * angleDegrees / (180);
New Window( "Hough Transform Demo 1",
	Border Box( Left( 20 ), Top( 20 ), Right( 15 ), Bottom( 15 ),
		V List Box(
			Text Box(
				"Click and drag the circle in a straight line."
			),
			Graph Box(
				X Scale( -1, 1 ),
				Y Scale( -1, 1 ),
				Circle( {xx, yy}, .05 );
				Text(
					{xx + .1, yy + .1},
					Char( xx, 4 ) || " " || Char( yy, 4 )
				);
				Mousetrap(
					xx = x;
					yy = y;
					gb << reshow;
				);
			),
			Text Box(
				"For angle 1 to 180 , x*Cos(angle)+y*Sin(angle)"
			),
			Text Box(
				"What position stays constant as you move?"
			),
			gb = Graph Box(
				X Scale( 0, 180 ),
				XName( "Angle" ),
				Y Scale( -1.5, 1.5 ),
				YName( "Distance to Line" ),
				Line(
					angleDegrees,
					xx * Cos( angle ) + yy * Sin( angle )
				)
			)
		)
	)
);

```

**Exemple 2**

```jsl

nRow = 35;
nCol = 35;

// Make a wafer template missing outside a radius
waferTemplate = J( nRow, nCol, 0 );
If( 0,
	For( i = 1, i <= nRow, i++,
		For( j = 1, j <= nCol, j++,
			If(
				(i - nrow / 2) ^ 2 + (j - nCol / 2) ^ 2 > ((nRow
				 + nCol) / 4) ^ 2,
				waferTemplate[i, j] = .
			)
		)
	)
);
wafer = waferTemplate;
wafer[5, 22] = 1;
lightGray = RGB Color( .9, .9, .9 );
showWafer = Expr(
	For( i = 1, i <= nRow, i++,
		For( j = 1, j <= nCol, j++,
			z = wafer[i, j];
			If( Is Missing( z ),
				Continue()
			);
			Fill Color( If( z == 0, lightGray, 3 ) );
			Rect(
				i - nrow / 2,
				j - nCol / 2,
				i - nrow / 2 - 1,
				j - nCol / 2 + 1,
				1
			);
		)
	)
);
showHough = Expr(
	accum = Hough Line Transform( wafer );
	maxAccum = Max( Max( accum ), 1 );
	accumHeat = Heat Color( accum / maxAccum );
	nr = N Row( accum );
	nc = N Col( accum );
	For( i = 1, i <= nr, i++,
		For( j = 1, j <= nc, j++,
			z = accumHeat[i, j];
			Fill Color( z );
			Rect( j - 1, nr - i, j, nr - i + 1, 1 );
		)
	);
    //Marginals
	radiusDensity = V Max( accum` );
	radiusScale = 3 * Max( radiusDensity ) /
	Mean( radiusDensity );
	radiusColor = Heat Color( radiusDensity / radiusScale );
	If( 1,
		angleDensity = V Max( accum );
		angleScale = 3 * Max( angleDensity ) /
		Mean( angleDensity );
		angleColor = Heat Color( angleDensity / angleScale );
	,
		angle1 = angleDensity - Mean( angleDensity );
		angle1 = angle1 :* (angle1 > 0);
		angleColor = Heat Color( angle1 / Max( angle1 ) );
	);
	For( j = 1, j <= nc, j++,
		Fill Color( angleColor[j] );
		Rect( j - 1, -5, j, -8, 1 );
	);
	For( i = 1, i <= nr, i++,
		Fill Color( radiusColor[i] );
		Rect( 185, nr - i, 190, nr - i + 1, 1 );
	);
);
mouseAction = Expr(
	i = Floor( x + nrow / 2 + .5 );
	j = Floor( y + ncol / 2 + .5 );
	If( i > 0 & i <= nRow & j > 0 & j <= nCol,
		wafer[i, j]
		++);
	bothBox << reshow;
);
New Window( "Hough Transform Demo 2",
	Border Box( Left( 15 ), Top( 15 ), Right( 10 ), Bottom( 10 ),
		bothBox = V List Box(
			Text Box(
				"Click to add points in the top frame along a slanted line."
			),
			Text Box(
				"The Hough transform is shown below with marginal densities."
			),
			Text Box( "" ),
			H List Box(
				Button Box( "Clear",
					wafer = waferTemplate;
					bothBox << Reshow;
				),
				Button Box( "Add Random",
					wafer = wafer |
					J( nRow, nCol, Random Uniform() < .05 );
					bothBox << Reshow;
				)
			),
			waferBox = Graph Box(
				X Scale( -18, 18 ),
				Y Scale( -18, 18 ),
				FrameSize( 300, 300 ),
				XName( "Angle" ),
				YName( "Radius" ),
				Mousetrap( mouseAction ),
				showWafer
			),
			houghBox = Graph Box(
				X Scale( 0, 190 ),
				Y Scale( -10, 50 ),
				FrameSize( 500, 200 ),
				showHough
			)
		)
	)
);

```

### Hour

**Syntaxe :** hr = Hour( datetime, &lt;12&gt; )

**Description :** Renvoie l&apos;heure d&apos;une valeur « date-heure » de JMP, dans le mode 12 heures (12, 1 - 11) ou dans le mode 24 heures (0 - 23).

**JMP Version ajoutée :** Avant la version 14

```jsl

Hour( Today() );

```

### HP Time

**Syntaxe :** t = HP Time()

**Description :** Renvoie une valeur de temps très précise, en micro secondes. Seulement utile en relation avec une autre valeur HP Time(). La valeur de temps représente le nombre de microsecondes depuis le démarrage de la session JMP.

**JMP Version ajoutée :** Avant la version 14

```jsl

bt = HP Time();
Open( "$SAMPLE_DATA/Big Class.jmp" );
et = HP Time();
it = et - bt;
Show( it );

```

### Hue State

**Syntaxe :** rs = Hue State( x )

**Description :** Renvoie une valeur d&apos;état de ligne avec la composante de tonalité de la couleur définie comme la valeur spécifiée. Doit être combiné à une valeur Shade State() pour produire une couleur correcte.

**JMP Version ajoutée :** Avant la version 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Combine States(
	Hue State( 5 ),
	Shade State( 1 )
);

```

### Hypergeometric Distribution

**Syntaxe :** cumprob = Hypergeometric Distribution( N, K, n, x, &lt;r&gt; )

**Description :** Renvoie la probabilité qu&apos;une variable aléatoire distribuée de façon hypergéométrique soit inférieure ou égale à x, N étant la taille de la population, K le nombre d&apos;éléments dans la catégorie d&apos;intérêt, n la taille d&apos;échantillon, x le nombre d&apos;éléments dans la catégorie d&apos;intérêt et r un rapport de probabilités facultatif.

**JMP Version ajoutée :** Avant la version 14

```jsl

exhdK = 10;
exhdn = 10;
New Window( "Example: Hypergeometric Distribution",
	exy = Graph Box(
		Y Scale( 0, 1.05 ),
		X Scale( -1, 21 ),
		Pen Color( "red" ),
		Pen Size( 2 );
		For( exhdx = 0, exhdx < Round( exhdn ), exhdx++,
			H Line(
				exhdx,
				exhdx + 1,
				Hypergeometric Distribution(
					20,
					Round( exhdK ),
					Round( exhdn ),
					exhdx
				)
			);
			V Line(
				exhdx + 1,
				Hypergeometric Distribution(
					20,
					Round( exhdK ),
					Round( exhdn ),
					exhdx
				),
				Hypergeometric Distribution(
					20,
					Round( exhdK ),
					Round( exhdn ),
					exhdx + 1
				)
			);
		);
		Text(
			{10, 0.17},
			"N=",
			20,
			" K=",
			Round( exhdK ),
			" n=",
			Round( exhdn )
		);
	),
	H List Box(
		Slider Box( 0, 20, exhdK, exy << reshow ),
		Text Box( " K" )
	),
	H List Box(
		Slider Box( 0, 20, exhdn, exy << reshow ),
		Text Box( " n" )
	)
);

```

### Hypergeometric Probability

**Syntaxe :** prob = Hypergeometric Probability( N, K, n, x, &lt;r&gt; )

**Description :** Renvoie la probabilité qu&apos;une variable aléatoire distribuée de façon hypergéométrique soit égale à x, N étant la taille de la population, K le nombre d&apos;éléments dans la catégorie d&apos;intérêt, n la taille d&apos;échantillon, x le nombre d&apos;éléments dans la catégorie d&apos;intérêt et r un rapport de probabilités facultatif.

**JMP Version ajoutée :** Avant la version 14

```jsl

exhdK = 10;
exhdn = 10;
New Window( "Example: Hypergeometric Probability",
	exhdy = Graph Box(
		Y Scale( 0, 1.05 ),
		X Scale( -1, 21 ),
		Pen Color( "red" ),
		Pen Size( 2 );
		For( exhdx = 0, exhdx <= Round( exhdn ), exhdx++,
			V Line(
				exhdx,
				0,
				Hypergeometric Probability(
					20,
					Round( exhdK ),
					Round( exhdn ),
					exhdx
				)
			)
		);
		Text(
			{10, 0.17},
			"N=",
			20,
			" K=",
			Round( exhdK ),
			" n=",
			Round( exhdn )
		);
	),
	H List Box(
		Slider Box( 0, 20, exhdK, exhdy << reshow ),
		Text Box( " K" )
	),
	H List Box(
		Slider Box( 0, 20, exhdn, exhdy << reshow ),
		Text Box( " n" )
	)
);

```

### Icon Box

**Syntaxe :** Box = Icon Box( "Name" )

**Description :** Construit une boîte d&apos;affichage contenant une icône, où l&apos;argument name peut être un nom d&apos;icône JMP ou le chemin d&apos;une image.

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

New Window( "Example",
	ex1 = Icon Box( "Popup" ),
	ex2 = Icon Box( "Locked" ),
	ex3 = Icon Box( "Labeled" ),
	ex4 = Icon Box( "Sub" ),
	ex5 = Icon Box( "Excluded" ),
	ex6 = Icon Box( "Hidden" ),
	ex7 = Icon Box( "Continuous" ),
	ex8 = Icon Box( "Nominal" ),
	ex9 = Icon Box( "Ordinal" )
);

```

**Exemple 2**

```jsl

New Window( "Example with Path",
	ex = Icon Box( "$SAMPLE_IMAGES/pi.gif" )
);

```

### Identity

**Syntaxe :** y = Identity( n )

**Description :** Crée une matrice unité n -par-n, les éléments diagonaux étant des 1 et les autres éléments des zéros.

**JMP Version ajoutée :** Avant la version 14

```jsl

Identity( 2 );

```

### If

**Syntaxe :** y = If( condition1, result1, &lt;condition2, result2&gt;, ..., &lt;elseResult&gt; )

**Description :** Évalue le premier argument de chaque paire et renvoie l&apos;évaluation de l&apos;expression result associée au premier argument condition qui donne un résultat différent de zéro. Les arguments condition sont évalués dans l&apos;ordre. Si tous les arguments condition donnent un résultat de zéro, le elseResult facultatif est évalué et le résultat renvoyé. Si aucun elseResult n&apos;est spécifié, et qu&apos;aucune des conditions n&apos;est vraie, une valeur manquante est renvoyée. Si tous les arguments condition sont évalués comme manquants, une valeur manquante est renvoyée.

**JMP Version ajoutée :** Avant la version 14

```jsl

If( Random Uniform() < 0.5,
	"heads",
	"tails"
);

```

### If Box

**Syntaxe :** box = If Box( 0|1, displayBoxArgs )

**Description :** Renvoie une boîte d&apos;affichage qui affiche conditionnellement les arguments de la boîte d&apos;affichage spécifiée.

**JMP Version ajoutée :** Avant la version 14

```jsl

New Window( "Example",
	H List Box(
		englishBox = If Box( 1, Text Box( "Good day" ) ),
		frenchBox = If Box( 0, Text Box( "Bon Jour" ) )
	)
);
Wait( 5 );
englishBox << Set( 0 );
frenchBox << Set( 1 );

```

### If Seg

**Syntaxe :** seg = If Seg(&lt;state=0|1&gt;)

**Description :** Renvoie un groupe d’affichage qui affiche ou masque le groupe d’affichage enfant.

**JMP Version ajoutée :** Avant la version 14

```jsl

lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];
New Window( "Lines Seg Example",
	g = Graph Box(
		If Seg( true, <<append( Lines Seg( lines ) ) )
	)
);

```

### IfMax

**Syntaxe :** y = IfMax( expr1, result1, expr2, result2, ..., &lt;allMissingResult&gt; )

**Description :** Évalue la première de chaque paire d’arguments et renvoie l’évaluation de l’expression résultat associée au maximum des expressions. En cas d’ex-aequo, il renvoie le premier maximum. Au cas où toutes les expressions seraient manquantes, il renvoie la valeur Vide si le nombre d’arguments est pair ou le dernier argument si le nombre d’arguments est impair. L’évaluation des expressions test doit donner un résultat numérique, alors que l’évaluation des expressions résultats peut être d’un type quelconque.

**JMP Version ajoutée :** Avant la version 14

```jsl

TomScore = 45;
JonScore = 47;
TimScore = 46;
highestScorer = IfMax(
	TomScore,
	"Tom",
	JonScore,
	"Jon",
	TimScore,
	"Tim",
	"Noone"
);

```

### IfMin

**Syntaxe :** y = IfMin( expr1, result1, expr2, result2, ..., &lt;allMissingResult&gt; )

**Description :** Évalue la première de chaque paire d’arguments et renvoie l’évaluation de l’expression résultat associée au minimum des expressions. En cas d’ex-aequo, il renvoie le premier minimum. Au cas où toutes les expressions seraient manquantes, il renvoie la valeur Vide si le nombre d’arguments est pair ou le dernier argument si le nombre d’arguments est impair. L’évaluation des expressions test doit donner un résultat numérique, alors que l’évaluation des expressions résultats peut être d’un type quelconque.

**JMP Version ajoutée :** Avant la version 14

```jsl

TomScore = 45;
JonScore = 47;
TimScore = 46;
lowestScorer = IfMin(
	TomScore,
	"Tom",
	JonScore,
	"Jon",
	TimScore,
	"Tim",
	"Noone"
);

```

### IfMZ

**Syntaxe :** y = IfMZ( condition1, result1, &lt;condition2, result2&gt;, ..., &lt;elseResult&gt; )

**Description :** Évalue le premier argument de chaque paire et renvoie l&apos;évaluation de l&apos;expression result associée au premier argument condition qui donne un résultat différent de zéro. Les arguments condition sont évalués dans l&apos;ordre. Si tous les arguments condition donnent un résultat de zéro ou sont manquants, le elseResult facultatif est évalué et le résultat renvoyé. Si aucun elseResult n&apos;est spécifié, et qu&apos;aucune des conditions n&apos;est vraie, une valeur manquante est renvoyée. (IfMZ() est équivalent à If() où les valeurs manquantes correspondant aux arguments condition évalués sont traitées comme des zéros).

**JMP Version ajoutée :** Avant la version 14

```jsl

x = 1;
Show( IfMZ( x == 1, 10, x == 2, 20, 30 ) );
x = .;
Show( IfMZ( x == 1, 10, x == 2, 20, 30 ) );
x = .;
Show( If( x == 1, 10, x == 2, 20, 30 ) );

```

### IGamma

**Syntaxe :** p = Gamma Distribution( q, &lt;alpha=1&gt;, &lt;scale=1&gt;, &lt;threshold=0&gt; )

**Description :** Renvoie la probabilité qu&apos;une variable aléatoire de loi gamma soit inférieure à q, où l’argument paramètre de forme alpha doit être positif. IGamma() est un alias de Gamma Distribution(). La fonction Gamma Distribution() est équivalente à Gamma(alpha,q)/Gamma(alpha).

**JMP Version ajoutée :** Avant la version 14

```jsl

gdialpha = Log( 1.5 );
New Window( "Example: Gamma Distribution",
	gdiy = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( 0, 12 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function(
			Gamma Distribution( gdiq, Exp( gdialpha ) ),
			gdiq
		);
		Text(
			{1, 0.9},
			"\!U03B1=",
			Round( Exp( gdialpha ), 2 )
		);
	),
	H List Box(
		Slider Box(
			Log( 0.1 ),
			Log( 12 ),
			gdialpha,
			gdiy << reshow
		),
		Text Box( " \!U03B1" )
	)
);

```

### In Days

**Syntaxe :** y = In Days( &lt;x=1&gt; )

**Description :** Convertit en secondes une valeur en jours.

**JMP Version ajoutée :** Avant la version 14

```jsl

In Days( 1.5 );

```

### In Hours

**Syntaxe :** y = In Hours( &lt;x=1&gt; )

**Description :** Convertit en secondes une valeur en heures.

**JMP Version ajoutée :** Avant la version 14

```jsl

In Hours( 0.5 );

```

### In Minutes

**Syntaxe :** y = In Minutes( &lt;x=1&gt; )

**Description :** Convertit en secondes une valeur en minutes.

**JMP Version ajoutée :** Avant la version 14

```jsl

In Minutes( 1 );

```

### In Path

**Syntaxe :** b = In Path( x, y, pathMatrix|pathText )

**Description :** Renvoie 1 si le point (x,y) se trouve dans le chemin donné, autrement il renvoie 0.

**JMP Version ajoutée :** Avant la version 14

```jsl


New Window( "Example",
	window:p = "M10 10 L52 10 L37 52 Z M20 16 L40 20 L35 40 Z";
	Graph Box(
		Fill Color( "light blue" );
		Path( window:p, 1 );
		For Each( {x}, 5 :: 55 :: 5,
			For Each( {y}, 5 :: 55 :: 5,
				Marker(
					Marker State(
						If( In Path( x, y, window:p ),
							"x",
							"circle"
						)
					),
					{x, y}
				)
			)
		);
	);
);

```

### In Polygon

**Syntaxe :** b = In Polygon( x, y, xMatrix, &lt;yMatrix&gt; )

**Description :** Renvoie 1 si le point (x,y) est dans le polygone défini par les arguments du vecteur, et 0 dans le cas contraire.

**JMP Version ajoutée :** Avant la version 14

```jsl

In Polygon( 11, 22, [10 20 30], [10 30 20] );

```

### In Weeks

**Syntaxe :** y = In Weeks( &lt;x=1&gt; )

**Description :** Convertit en secondes une valeur en semaines.

**JMP Version ajoutée :** Avant la version 14

```jsl

In Weeks( 1 );

```

### In Years

**Syntaxe :** y = In Years( &lt;x=1&gt; )

**Description :** Convertit en secondes une valeur en années.

**JMP Version ajoutée :** Avant la version 14

```jsl

In Years( 1 );

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

### Index

**Syntaxe :** ii = n1::n2; ii = n1::n2::n3; ii = Index( n1, n2, &lt;n3=1&gt;)

**Description :** Renvoie une matrice de lignes qui contient la séquence des valeurs de n1 à n2 par incréments de n3.

**JMP Version ajoutée :** Avant la version 14

```jsl

1 :: 10;

```

### Informat

**Syntaxe :** dt = In Format( s, formatString, &lt; &lt;&lt;Use Locale(b=1)&gt;, &lt; &lt;&lt;Restrict &gt; )dt = In Format( s, "Format Pattern", pattern, &lt; &lt;&lt;Use Locale(b=1)&gt; )

**Description :** Analyse une chaîne d&apos;un format donné. Si le format correspond à un format de date et heure, la valeur est exprimée comme si elle était entre As Date() et renvoie la date au format jjmoiaaaa. L&apos;argument facultatif <<Restrict utilisé avec le « Meilleur » formatString permet uniquement la conversion aux formats entier, décimal et scientifique.

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

Informat( "07152000", "MMDDYYYY" );

```

**Exemple 2**

```jsl

Informat( "07.15.2000", "Format Pattern", "<MM>.<DD>.<YYYY>" );

```

**Exemple 3**

```jsl

Informat( "86.8287° W", "Longitude DDD" );

```

**Exemple 4**

```jsl

Informat( "123.45%", "Percent" );

```

**Exemple 5**

```jsl

Show(
	Informat( "1.23e4", "Best" ),
	Informat( "1.23e4", "Best", <<Restrict ),
	Informat( "1989-10-04", "Best" ),
	Informat( "1989-10-04", "Best", <<Restrict )
);

```

### Inner Product BLAS

**Syntaxe :** y = Inner Product BLAS( A, B, ... )

**JMP Version ajoutée :** 17

```jsl

a = [1, 2, 3, -2, 0, -1, 0, 1, 1];
b = [4, 5, 6, -2, 0, -1, 0, 7, 2];
y = Inner Product BLAS( a, b );

```

### Insert

**Syntaxe :** z = Insert( x, y, &lt;i&gt; )

**Description :** Renvoie une copie de la liste x avec y inséré à la i-ième position ou ajouté à la fin si l’argument facultatif i n&apos;est pas spécifié.

**JMP Version ajoutée :** Avant la version 14

```jsl

z = {11, 22, 33};
z = Insert( z, 99, 2 );

```

### Insert Into

**Syntaxe :** Insert Into( x, y, &lt;i&gt; )

**Description :** Modifie la liste, le tableau associatif ou la boîte d&apos;affichage x avec y inséré dans la série. Les listes et boîtes d&apos;affichage prennent en charge un i en option pour spécifier la position, ou les éléments seront ajoutés si la position n&apos;est pas spécifiée. Notez que l&apos;argument x doit être une variable.

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

ex = {11, 22, 33};
Insert Into( ex, 99 );
ex;

```

**Exemple 2**

```jsl

ex = ["a" => 10, "b" => 3, => 0];
Insert Into( ex, "c", 12 );
ex;

```

**Exemple 3**

```jsl

New Window( "boxes",
	hlist = H List Box( Button Box( "a" ), Button Box( "b" ) )
);
Wait( 1 );
Insert Into( hlist, Button Box( "c" ) );

```

### Integrate

**Syntaxe :** y = Integrate( expr, varname, lowLimit, upLimit, &lt;&lt;Tolerance(1e-10), &lt;&lt;StoreInfo(list), &lt;&lt;StartingValue(val) )

**Description :** Intègre une expression par rapport à une valeur scalaire en utilisant la méthode de quadrature adaptative de Gander et Gautschi (2000). Si la variable spécifiée avec varname a une valeur assignée, ou si l&apos;argument facultatif <<StartingValue() spécifie une valeur de départ, cette valeur sera utilisée en tant que valeur type pour améliorer la précision de l&apos;intégrale. Pour spécifier des étendues infinies d&apos;intégration, définir lowLimit, upLimit, ou les deux, comme manquantes. Si <<StoreInfo() est spécifié, l&apos;argument de <<StoreInfo() contiendra les diagnostics de la routine d&apos;intégration numérique. Si <<Tolerance() est spécifié, l&apos;argument <<Tolerance() sera utilisé comme niveau de tolérance dans la fonction d&apos;auto-intégration utilisée pour évaluer l&apos;intégrale. Des valeurs plus petites entraînent un temps d&apos;exécution plus long mais permettent d&apos;obtenir des résultats plus précis.

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

Integrate( Exp( -x ), x, 0, . );

```

**Exemple 2**

```jsl

x = 100;
Integrate( Normal Density( x - 100 ), x, ., . );

```

### Interest Payment

**Syntaxe :** x = Interest Payment( rate, per, nper, pv, &lt;fv=0&gt;, &lt;type=0&gt; )

**Description :** Renvoie le paiement des intérêts d’un investissement sur une période donnée en se basant sur des paiements et un taux d’intérêt constants. L’argument type est 0 pour les paiements en fin de période et 1 pour les paiements en début de période. Équivalent à la fonction IPMT de Microsoft Excel.

**JMP Version ajoutée :** Avant la version 14

```jsl

Payment( .05 / 12, 30 * 12, 100000 )
-Interest Payment( .05 / 12, 13, 30 * 12, 100000 )
-Principal Payment( .05 / 12, 13, 30 * 12, 100000 );

```

### Interest Rate

**Syntaxe :** x = Interest Rate( nper, pmt, pv, &lt;fv=0&gt;, &lt;type=0&gt;, &lt;guess=0.1&gt; )

**Description :** Renvoie le taux d’intérêt d’une annuité par période. L’argument type est 0 pour les paiements en fin de période et 1 pour les paiements en début de période. Équivalent à la fonction RATE de Microsoft Excel.

**JMP Version ajoutée :** Avant la version 14

```jsl

Interest Rate(
	30 * 12,
	Payment( .05 / 12, 30 * 12, 100000 ),
	100000
);

```

### Internal Rate of Return

**Syntaxe :** x = Internal Rate of Return( values, &lt;guess=0.1&gt; );x = Internal Rate of Return( guess, value1, value2, &lt;value3, ...&gt; )

**Description :** Renvoie le taux de rentabilité interne pour une série de flux de trésorerie représentée par les chiffres dans l’argument values. Équivalent à la fonction IRR de Microsoft Excel. Le deuxième prototype de la fonction n’accepte que des arguments scalaires.

**JMP Version ajoutée :** Avant la version 14

```jsl

Internal Rate of Return( [-10000, 1000, 900, 950] );
Internal Rate of Return( .01, -10000, 1000, 900, 950 );

```

### Interpolate

**Syntaxe :** y = Interpolate(x|xmatrix|xlist, x1, y1, x2, y2);y = Interpolate(x | xmatrix | xlist, xmatrix, ymatrix);z = Interpolate({ x, y }, xvector, yvector, zmatrix)

**Description :** Trouve les arguments xi qui comprennent x et interpole linéairement les arguments yi correspondants. Notez que les arguments xi doivent être indiqués dans l’ordre.

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl


New Window( "Interpolate",
	window:x = (2 :: 9) * 10;
	window:y = 50 + Sin( (2 :: 9) ) * 40;
	Graph Box(
		Pen Color( "blue" );
		Marker( window:x, window:y );
		Y Function( Interpolate( a, window:x, window:y ), a );
	);
)
;

```

**Exemple 2**

```jsl

Interpolate( 2.5, [1 2 3], [15, 20, 30] );

```

**Exemple 3**

```jsl

Interpolate( {.5, .8}, [0 1], [0 1], [10 20, 12 18] );

```

**Exemple 4**

```jsl


xd = Transpose( Index( 1, 6 * Pi(), 0.3 ) );
yd = Sin( xd );
                                    
xd2 = xd + 0.15;
yd2 = Interpolate( xd2, xd, yd );
                                    
New Window( "Interpolated values are blue",
	Graph Box(
		X Scale( 1, 6 * Pi() ),
		Y Scale( -1, 1 ),
		For( i = 0, i < N Rows( xd ), i++,
			Pen Color( "red" );
			Circle( {xd[i], yd[i]}, 0.01 );
			Pen Color( "blue" );
			Circle( {xd2[i], yd2[i]}, 0.01 );
		)
	)
);

```

### Inv

**Syntaxe :** y = Inverse( x ); y = Inv( x )

**Description :** Renvoie l’inverse de l’argument x, qui doit être une matrice carrée et non singulière.

**JMP Version ajoutée :** Avant la version 14

```jsl

Round( Inverse( [11 22, 33 44] ), 2 );

```

### Inv Update

**Syntaxe :** y = Inv Update( S, X, &lt;w=1&gt; )

**Description :** Renvoie une matrice inverse actualisée, où le premier argument S est une matrice définie positive symétrique avec le même nombre de colonnes que X, le deuxième argument X est une matrice qui contient les lignes à ajouter ou à supprimer et le troisième argument w détermine si ajouter ou supprimer des lignes (utiliser 1 pour ajouter des lignes et -1 pour en supprimer). Cette fonction évalue la quantité S-w*S*X`*Inv(I+w*X*S*X`)*X*S, où I est une matrice identité et Inv(A) désigne l’inverse de la matrice A.

**JMP Version ajoutée :** Avant la version 14

```jsl

/* Generate a design matrix */
exX = [1 0 4 2,
1 0 5 1,
1 0 2 4,
5 4 4 5,
0 1 4 3,
0 1 9 1,
0 1 2 4,
0 1 1 9,
0 1 5 2,
0 1 2 1,
0 1 4 5];
S = Inverse( exX` * exX );
Show( "----------Adding Rows (w=1) --------" );
X = [5 4 3 3, 4 3 2 1, 9 1 2 5];
w = 1;
y = Inv Update( S, X, w );
Show( "Result of Inv Update" );
Show( y );
Show( "Result of updating formula" );
Show(
	S - w * S * X` * Inv(
		Identity( N Row( X ) ) + w * X * S * X`
	) * X * S
);
Show( "Result of direct calculation" );
Show( Inverse( (exX |/ X)` * (exX |/ X) ) );
Show( "----------Deleting Rows (w=-1) --------" );
X = [0 1 5 2, 0 1 2 1, 0 1 4 5];
w = -1;
y = Inv Update( S, X, w );
Show( "Result of Inv Update" );
Show( y );
Show( "Result of updating formula" );
Show(
	S - w * S * X` * Inv(
		Identity( N Row( X ) ) + w * X * S * X`
	) * X * S
);
Show( "Result of direct calculation" );
p = N Row( exX ) - 3;
Show(
	Inverse( exX[Index( 1, p ), 0]` * exX[Index( 1, p ), 0] )
);

```

### Inverse

**Syntaxe :** y = Inverse( x ); y = Inv( x )

**Description :** Renvoie l’inverse de l’argument x, qui doit être une matrice carrée et non singulière.

**JMP Version ajoutée :** Avant la version 14

```jsl

Round( Inverse( [11 22, 33 44] ), 2 );

```

### Invert Expr

**Syntaxe :** y = Invert Expr( expr, xname, yname )

**Description :** Inverse l&apos;argument expression expr, en dépliant autour de l&apos;occurrence unique de xname.

**JMP Version ajoutée :** Avant la version 14

```jsl

Invert Expr( Sqrt( Log( x ) ), x, y );

```

### IRT Ability

**Syntaxe :** y = IRT Ability( Q1, ..., Qn, parmMatrix )

**Description :** Produit des scores pour la variable latente d&apos;un modèle de théorie des réponses aux items avec n items binaires et une matrice des paramètres connus, spécifiés selon parmMatrix. La matrice des paramètres devrait contenir autant de lignes qu&apos;il y a de paramètres dans le modèle, et autant de colonnes qu&apos;il y a d&apos;items dans l&apos;analyse.

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

dt = Open( "$SAMPLE_DATA/MathScienceTest.jmp" );
obj = dt << Item Analysis(
	Y( :Q1, :Q2, :Q3, :Q4, :Q5 ),
	Model( "Logistic 2PL" )
);
obj << Save Ability Formula;
Column( dt, N Cols( dt ) ) << Get Formula;

```

**Exemple 2**

```jsl

dt = Open( "$SAMPLE_DATA/MathScienceTest.jmp" );
mth = (dt << get as matrix)[0, Index( 2, 6 )];
mthlst = {};
i = Floor( Random Uniform( 1, N Rows( mth ) ) );
mthlst[1] = mth[i, 1] |/ mth[i, 2] |/ mth[i, 3] |/ mth[i, 4] |/
mth[i, 5];
mthlst[2] = IRT Ability(
	mth[i, 1],
	mth[i, 2],
	mth[i, 3],
	mth[i, 4],
	mth[i, 5],
	[0.28 1.93 1.9 1.67 1, -0.06 -0.55 0.5 -1.89 0.04]
);
mthlst;

```

### Is Alt Key

**Syntaxe :** y = Is Alt Key()

**Description :** Renvoie 1 si la touche Alt est enfoncée, et 0 dans le cas contraire. Prévu pour être utilisé dans les scripts de rappel de graphiques. Sur Mac, il s&apos;agit de la touche Options.

**JMP Version ajoutée :** Avant la version 14

```jsl

New Window( "Show me the key",
	Graph Box(
		Rect( 45, 55, 55, 45, 1 );
		If( Is Shift Key(),
			Text( {50, 60}, "Shift Key" )
		);
		If( Is Control Key(),
			Text( {60, 50}, "Control Key" )
		);
		If( Is Alt Key(),
			Text( {50, 35}, "Alt Key" )
		);
		Mousetrap( {} );
	)
);

```

### Is Associative Array

**Syntaxe :** y = Is Associative Array( x )

**Description :** Renvoie 1 si l’argument x est un tableau associatif, 0 dans le cas contraire.

**JMP Version ajoutée :** Avant la version 14

```jsl

Is Associative Array( [1 => 2] );

```

### Is Class

**Syntaxe :** isns = Is Class( class reference )

**Description :** Renvoie 1 si l’argument class est une classe, 0 dans le cas contraire.

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
			complex(
				real * y:real - imag * y:imag,
				imag * y:real + real * y:imag
			)
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
iscl = Is Class( cl );
Show( iscl );
cl << Delete;
Delete Classes( "complex" );

```

### Is Command Key

**Syntaxe :** y = Is Command Key()

**Description :** Renvoie 1 si la touche Commande est enfoncée, et 0 dans le cas contraire. Prévu pour être utilisé dans les scripts de rappel de graphiques.

**JMP Version ajoutée :** Avant la version 14

```jsl

New Window( "Show me the key",
	Graph Box(
		Rect( 45, 55, 55, 45, 1 );
		If( Is Shift Key(),
			Text( {50, 60}, "Shift Key" )
		);
		If( Is Command Key(),
			Text( {60, 50}, "Command Key" )
		);
		If( Is Alt Key(),
			Text( {50, 35}, "Alt Key" )
		);
		Mousetrap( {} );
	)
);

```

### Is Context Key

**Syntaxe :** y = Is Context Key()

**Description :** Renvoie 1 si la touche Contexte est enfoncée, et 0 dans le cas contraire. Prévu pour être utilisé dans les scripts de rappel de graphiques.

**JMP Version ajoutée :** Avant la version 14

```jsl

New Window( "Show me the key",
	Graph Box(
		Rect( 45, 55, 55, 45, 1 );
		If( Is Shift Key(),
			Text( {50, 60}, "Shift Key" )
		);
		If( Is Context Key(),
			Text( {60, 50}, "Context Key" )
		);
		If( Is Alt Key(),
			Text( {50, 35}, "Alt Key" )
		);
		Mousetrap( {} );
	)
);

```

### Is Control Key

**Syntaxe :** y = Is Control Key()

**Description :** Renvoie 1 si la touche Contrôle est enfoncée, et 0 dans le cas contraire. Prévu pour être utilisé dans les scripts de rappel de graphiques. Sur Mac, il s&apos;agit de la touche Commande.

**JMP Version ajoutée :** Avant la version 14

```jsl

New Window( "Show me the key",
	Graph Box(
		Rect( 45, 55, 55, 45, 1 );
		If( Is Shift Key(),
			Text( {50, 60}, "Shift Key" )
		);
		If( Is Control Key(),
			Text( {60, 50}, "Control Key" )
		);
		If( Is Alt Key(),
			Text( {50, 35}, "Alt Key" )
		);
		Mousetrap( {} );
	)
);

```

### Is Directory

**Syntaxe :** rc = Is Directory( path )

**Description :** Déterminez si le chemin d&apos;accès spécifié correspond à un répertoire. Renvoie 0 si le chemin d&apos;accès est incorrect ou n&apos;existe pas.

**JMP Version ajoutée :** Avant la version 14

```jsl

rc0 = Is Directory( "$SAMPLE_DATA" );
rc1 = Is Directory( "$SAMPLE_DATA/Big Class.jmp" );
Char( rc0 ) || " " || Char( rc1 );/* 1 0 */

```

### Is Directory Writable

**Syntaxe :** rc = Is Directory Writable( path )

**Description :** Déterminez si le chemin d&apos;accès spécifié au répertoire est ouvert en écriture. Renvoie 0 si le chemin d&apos;accès est incorrect ou n&apos;existe pas.

**JMP Version ajoutée :** Avant la version 14

```jsl

Is Directory Writable( "$SAMPLE_DATA" );

```

### Is Empty

**Syntaxe :** y = Is Empty( name )

**Description :** Renvoie 1 si la variable n&apos;est pas définie ou garde la valeur Empty().

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

Is Empty( x );

```

**Exemple 2**

```jsl

x = Empty();
Is Empty( x );

```

**Exemple 3**

```jsl


dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 1 );
If( Is Empty( dt ),
	Print( "There is no open data table." ),
	Print( "This data table is open: " || (dt << Get Name()) )
);
Wait( 1 );
Close( DT, "nosave" );
Wait( 1 );
If( Is Empty( dt ),
	Print( "There is no open data table." ),
	Print( "This data table is open: " || (dt << Get Name()) )
);

```

### Is Expr

**Syntaxe :** y = Is Expr( x )

**Description :** Renvoie 1 si l’argument x est une expression, 0 dans le cas contraire.

**JMP Version ajoutée :** Avant la version 14

```jsl

Is Expr( Expr( x ) );

```

### Is File

**Syntaxe :** rc = Is File( path )

**Description :** Déterminez si le chemin d&apos;accès spécifié correspond à un fichier. Renvoie 0 si le chemin d&apos;accès est incorrect ou n&apos;existe pas.

**JMP Version ajoutée :** Avant la version 14

```jsl

rc0 = Is File( "$SAMPLE_DATA" );
rc1 = Is File( "$SAMPLE_DATA/Big Class.jmp" );
Char( rc0 ) || " " || Char( rc1 );/* 0 1 */

```

### Is File Writable

**Syntaxe :** rc = Is File Writable( path )

**Description :** Déterminez si le chemin d&apos;accès spécifié au fichier est ouvert en écriture. Renvoie 0 si le chemin d&apos;accès est incorrect ou n&apos;existe pas.

**JMP Version ajoutée :** Avant la version 14

```jsl

Is File Writable( "$SAMPLE_DATA/Big Class.jmp" );

```

### Is JMP Live URL Enabled

**Syntaxe :** Is JMP Live URL Enabled(url)

**Description :** Détermine si l&apos;URL spécifié peut être utilisé dans cette session JMP. Les URL peuvent être activés et/ou désactivés à l&apos;aide du script jmpStartAdmin.jsl. Cela ne détermine pas s&apos;il est valide ou si l&apos;utilisateur peut se connecter. Cela détermine uniquement si l&apos;URL est bloqué par JMP.

**JMP Version ajoutée :** 15

```jsl


url = "http://public.jmp.com";
Show( Is JMP Live URL Enabled( url ) );

```

### Is Leap Year

**Syntaxe :** v = Is Leap Year(year)

**Description :** Renvoyer si une année donnée est une année bissextile.

**JMP Version ajoutée :** 15

```jsl

v = Is Leap Year( 2016 );

```

### Is List

**Syntaxe :** y = Is List( x )

**Description :** Renvoie 1 si l’argument x est une liste, 0 dans le cas contraire.

**JMP Version ajoutée :** Avant la version 14

```jsl

Is List( {1, 2, 3} );

```

### Is Log Open

**Syntaxe :** Is Log Open()

**Description :** Renvoyer le résultat pour indiquer si la fenêtre log est ouverte

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

If( Is Log Open(),
	Close Log()
);

```

**Exemple 2**

```jsl

If( !Is Log Open(),
	Open Log()
);

```

### Is Matrix

**Syntaxe :** y = Is Matrix( x )

**Description :** Renvoie 1 si l&apos;argument est une matrice, et 0 dans le cas contraire.

**JMP Version ajoutée :** Avant la version 14

```jsl

Is Matrix( [11 22 33] );

```

### Is Missing

**Syntaxe :** y = Is Missing( x )

**Description :** Renvoie 1 si l’argument x est une valeur manquante, et 0 dans le cas contraire.

**JMP Version ajoutée :** Avant la version 14

```jsl

Is Missing( . );

```

### Is Name

**Syntaxe :** y = Is Name( x )

**Description :** Renvoie 1 si l’argument x est un nom, 0 dans le cas contraire.

**JMP Version ajoutée :** Avant la version 14

```jsl

Is Name( Name Expr( n ) );

```

### Is Namespace

**Syntaxe :** isns = Is Namespace( namespace reference )

**Description :** Renvoie 1 si l’argument namespace est un espace de noms, 0 dans le cas contraire.

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
isns = Is Namespace( ns );
Show( isns );
ns << Delete;

```

### Is Number

**Syntaxe :** y = Is Number( x )

**Description :** Renvoie 1 si l’argument x est un nombre, 0 dans le cas contraire.

**JMP Version ajoutée :** Avant la version 14

```jsl

Is Number( 213 );

```

### Is Option Key

**Syntaxe :** y = Is Option Key()

**Description :** Renvoie 1 si la touche Option est enfoncée, et 0 dans le cas contraire. Prévu pour être utilisé dans les scripts de rappel de graphiques.

**JMP Version ajoutée :** Avant la version 14

```jsl

New Window( "Show me the key",
	Graph Box(
		Rect( 45, 55, 55, 45, 1 );
		If( Is Shift Key(),
			Text( {50, 60}, "Shift Key" )
		);
		If( Is Option Key(),
			Text( {60, 50}, "Option Key" )
		);
		If( Is Alt Key(),
			Text( {50, 35}, "Alt Key" )
		);
		Mousetrap( {} );
	)
);

```

### Is Same Color

**Syntaxe :** x = Is Same Color( color1, color2, ... )

**Description :** Compare les couleurs pour déterminer l&apos;égalité.

**JMP Version ajoutée :** 18

**Exemple 1**

```jsl

Is Same Color( "black", 0 );

```

**Exemple 2**

```jsl

Is Same Color( "red", "green", "blue" );

```

**Exemple 3**

```jsl

Is Same Color( "red", To Color Space( "hls", "red" ) );

```

**Exemple 4**

```jsl

Is Same Color( To Color Space( "LUV", "red" ), "red" );

```

### Is Scriptable

**Syntaxe :** tf = Is Scriptable( x )

**Description :** Renvoie 1 si l’argument x est un objet scriptable, et 0 dans le cas contraire.

**JMP Version ajoutée :** Avant la version 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Is Scriptable( Bivariate( Y( :weight ), X( :height ) ) );

```

### Is Shift Key

**Syntaxe :** y = Is Shift Key()

**Description :** Renvoie 1 si la touche Maj est enfoncée, et 0 dans le cas contraire. Prévu pour être utilisé dans les scripts de rappel de graphiques.

**JMP Version ajoutée :** Avant la version 14

```jsl

New Window( "Show me the key",
	Graph Box(
		Rect( 45, 55, 55, 45, 1 );
		If( Is Shift Key(),
			Text( {50, 60}, "Shift Key" )
		);
		If( Is Control Key(),
			Text( {60, 50}, "Control Key" )
		);
		If( Is Alt Key(),
			Text( {50, 35}, "Alt Key" )
		);
		Mousetrap( {} );
	)
);

```

### Is String

**Syntaxe :** y = Is String( x )

**Description :** Renvoie 1 si l’argument x est une chaîne, 0 dans le cas contraire.

**JMP Version ajoutée :** Avant la version 14

```jsl

Is String( "abc" );

```

### ISO Year

**Syntaxe :** yr = ISO Year( datetime )

**Description :** Renvoie l&apos;année ISO de la valeur date-time. Les années ISO correspondent aux semaines ISO ; elles commencent le lundi de la première semaine ayant au moins quatre jours.

**JMP Version ajoutée :** 16

```jsl

ISO Year( Today() );

```

### Item

**Syntaxe :** w = Item( n|[first last], s, &lt;delim&gt;, &lt;Unmatched(result string)&gt;, &lt;Include Boundary Delimiters(0|1)&gt;)

**Description :** Renvoie le n-ième élément de l&apos;argument s, où les éléments sont des sous-chaînes (éventuellement vides) séparées par exactement un des caractères indiqués dans l&apos;argument delim. Si delim est absent, le caractère utilisé sera l&apos;espace. Si delim est la chaîne vide, tous les caractères sont traités comme un élément.

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

Item( 5, "http://www.jmp.com", ":/." );

```

**Exemple 2**

```jsl

Item( [2 -1], "This is a sentence" );

```

**Exemple 3**

```jsl

Item(
	4,
	"Apple+Banana Tree,,Pear,,Peach,,Grape",
	Get Punctuation Characters()
);

```

**Exemple 4**

```jsl

Item( 5, "a b c d", Unmatched( "None" ) );

```

**Exemple 5**

```jsl

Item( 2, "abcd", "" );

```

**Exemple 6**

```jsl

Item( 2, ",abcd", ",", Include Boundary Delimiters );

```

### Items

**Syntaxe :** wl = Items(&lt;[first last]&gt;, s, &lt;delim&gt;, &lt;Include Boundary Delimiters(0|1)&gt;)

**Description :** Renvoie une liste des sous-chaînes (éventuellement vides) séparées par exactement l&apos;un des caractères spécifiés dans l&apos;argument delim. Si delim est absent, le caractère utilisé sera l&apos;espace. Si delim est la chaîne vide, chaque caractère sera traité comme un élément distinct.

**JMP Version ajoutée :** 15

**Exemple 1**

```jsl

Eval List(
	{Items( "http://www.jmp.com", ":/." ), Items( "hello", "" )}
);

```

**Exemple 2**

```jsl

Items(
	",Apple,Banana Tree,Peach",
	Get Punctuation Characters()
);

```

**Exemple 3**

```jsl

Items(
	",Apple,Banana Tree,Peach",
	Get Punctuation Characters(),
	Include Boundary Delimiters
);

```

**Exemple 4**

```jsl

Items(
	[1 2],
	",Apple,Banana Tree,Peach",
	Get Punctuation Characters()
);

```

### J

**Syntaxe :** y = J( nr, &lt;nc&gt;, &lt;v&gt; ); y = J( nr, nc ); y = J( n )

**Description :** Crée une matrice (nr par nc) des valeurs déterminées par le troisième argument. La valeur par défaut du deuxième argument est égale à celle du premier argument. La valeur par défaut du troisième argument est 1. Mais le troisième argument peut être un nombre, un nom de variable d&apos;un nombre ou un code JSL. Si le troisième argument est un code, le code est évalué et la valeur de renvoi est assignée à chaque élément de la matrice, élément par élément, ligne par ligne.

**JMP Version ajoutée :** Avant la version 14

```jsl


// Produce a 2x3 matrix, filled with 15.
m = J( 2, 3, 15 );
// Produce a default 4x4 matrix, filled with 1.
m = J( 4 );
// Produce a 2x3 matrix, filled with a number determined by a variable.
a = 3.14;
m = J( 2, 3, a );
// Produce a vector of random numbers from the Uniform distribution.
m = J( 1, 100, Random Uniform() );
// Produce a 2x3 matrix, filled with a sequence of integers.
a = 0;
m = J( 2, 3, a = a + 1 );
// This is a fun example to illustrate what is possible for the third argument.
i = 1;
J(
	10,
	1,
	Print(
		Eval Insert(
			"For the ^i^^if(i < 4, words(\!"st,nd,rd\!",\!",\!")[i], \!"th\!")^ time, I'm not a loop!"
		)
	);
	Round( 1 / Sqrt( 5 ) * ((1 + Sqrt( 5 )) / 2) ^ i++ );
);

```

### JMP Product Name

**Syntaxe :** y = JMP Product Name()

**Description :** Renvoie "Standard" ou "Pro" en fonction de la version du produit sous licence.

**JMP Version ajoutée :** Avant la version 14

```jsl

JMP Product Name();

```

### JMP Version

**Syntaxe :** y = JMP Version()

**Description :** Renvoie la version de JMP (version.révision{.fix}) ; non disponible avant 6.0.

**JMP Version ajoutée :** Avant la version 14

```jsl

JMP Version();

```

### Johnson Sb Density

**Syntaxe :** y = Johnson Sb Density( q, gamma, delta, theta, sigma )

**Description :** Renvoie la densité à q d&apos;une distribution de Johnson Sb, où q compris dans l&apos;intervalle entre theta et theta + sigma, delta>0 et gamma entre -∞ et +∞ sont des paramètres de forme, sigma>0 est un paramètre d&apos;échelle, et theta entre -∞ et +∞ est un paramètre de seuillage. Remarque : theta est l’extrémité inférieure de la distribution etsigma  est l&apos;étendue du support de la distribution.

**JMP Version ajoutée :** Avant la version 14

```jsl

gamma = 0.5;
delta = 0.5;
theta = 0.5;
sigma = 1;
New Window( "Example: Johnson Sb Density",
	jsbp = Graph Box(
		Y Scale( 0, 5.5 ),
		X Scale( 0.2, 1.8 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function(
			Johnson Sb Density( q, gamma, delta, theta, sigma ),
			q
		);
		Text(
			{0.5, 4.5},
			"\!U03B3=",
			Round( gamma, 2 ),
			" \!U03B4=",
			Round( delta, 2 ),
			" \!U03B8=",
			Round( theta, 2 ),
			" \!U03C3=",
			Round( sigma, 2 )
		);
	),
	H List Box(
		Slider Box( 0, 1, gamma, jsbp << reshow ),
		Text Box( " \!U03B3" )
	),
	H List Box(
		Slider Box( 0, 2, delta, jsbp << reshow ),
		Text Box( " \!U03B4" )
	),
	H List Box(
		Slider Box( -2, 2, theta, jsbp << reshow ),
		Text Box( " \!U03B8" )
	),
	H List Box(
		Slider Box( 0, 10, sigma, jsbp << reshow ),
		Text Box( " \!U03C3" )
	)
);

```

### Johnson Sb Distribution

**Syntaxe :** p = Johnson Sb Distribution( q, gamma, delta, theta, sigma )

**Description :** Renvoie la probabilité qu&apos;une variable aléatoire distribuée selon le Sb de Johnson est inférieure à q. (Remarque : voir la fonction Johnson Sb Density() pour obtenir la description des paramètres.)

**JMP Version ajoutée :** Avant la version 14

```jsl

gamma = 0.5;
delta = 0.5;
theta = 0.5;
sigma = 3;
New Window( "Example: Johnson Sb Distribution",
	jsbc = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( 0.2, 3.8 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function(
			Johnson Sb Distribution(
				q,
				gamma,
				delta,
				theta,
				sigma
			),
			q
		);
		Text(
			{0.3, 0.8},
			"\!U03B3=",
			Round( gamma, 2 ),
			" \!U03B4=",
			Round( delta, 2 ),
			" \!U03B8=",
			Round( theta, 2 ),
			" \!U03C3=",
			Round( sigma, 2 )
		);
	),
	H List Box(
		Slider Box( 0, 1, gamma, jsbc << reshow ),
		Text Box( " \!U03B3" )
	),
	H List Box(
		Slider Box( 0, 1, delta, jsbc << reshow ),
		Text Box( " \!U03B4" )
	),
	H List Box(
		Slider Box( 0, 1, theta, jsbc << reshow ),
		Text Box( " \!U03B8" )
	),
	H List Box(
		Slider Box( 0, 4, sigma, jsbc << reshow ),
		Text Box( " \!U03C3" )
	)
);

```

### Johnson Sb Quantile

**Syntaxe :** q = Johnson Sb Quantile( p, gamma, delta, theta, sigma )

**Description :** Renvoie le quantile d’une distribution Sb de Johnson, correspondant à la probabilité p qu’une variable aléatoire ayant cette distribution prenne une valeur inférieure au quantile. (Remarque : p est le premier paramètre. Voir la fonction Johnson Sb Density() pour obtenir la description des paramètres.)

**JMP Version ajoutée :** Avant la version 14

```jsl

Johnson Sb Quantile( 0.5, 0.5, 1, 1, 1 );

```

### Johnson Sl Density

**Syntaxe :** y = Johnson Sl Density( q, gamma, delta, theta, &lt;sigma=1&gt; )

**Description :** Renvoie la densité au point q d&apos;une distribution de Johnson Sl, où q compris dans l&apos;intervalle de theta à +∞, delta>0 et gamma entre -∞ et +∞ sont des paramètres de forme, sigma égal à +1 ou -1 est un paramètre d&apos;échelle, et theta compris entre -∞ et +∞ est un paramètre de seuillage. Remarque : quand sigma = 1, theta est la limite inférieure de la distribution, et quand sigma=-1, theta est la limite supérieure. Également, sigma positif implique que la distribution est asymétrique positive, sigma négatif implique que la distribution est asymétrique négative.

**JMP Version ajoutée :** Avant la version 14

```jsl

gamma = 0.5;
delta = 1;
theta = 0;
sigma = 1;
New Window( "Example: Johnson Sl Density",
	jslp = Graph Box(
		Y Scale( 0, 1.5 ),
		X Scale( -5, 5 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function(
			Johnson Sl Density( q, gamma, delta, theta, sigma ),
			q
		);
		Text(
			{-1, 1.1},
			"\!U03B3=",
			Round( gamma, 2 ),
			" \!U03B4=",
			Round( delta, 2 ),
			" \!U03B8=",
			Round( theta, 2 )
		);
	),
	jslpcb = Check Box(
		{"\!U03C3 = +1 (Note: When unchecked \!U03C3 = -1)"},
		<<set( 1 ),
		sigma = [-1, 1][((jslpcb << get()) + 1)];
		jslp << reshow;
	),
	H List Box(
		Slider Box( -15, 15, gamma, jslp << reshow ),
		Text Box( " \!U03B3" )
	),
	H List Box(
		Slider Box( 0, 10, delta, jslp << reshow ),
		Text Box( " \!U03B4" )
	),
	H List Box(
		Slider Box( -5, 5, theta, jslp << reshow ),
		Text Box( " \!U03B8" )
	)
);

```

### Johnson Sl Distribution

**Syntaxe :** p = Johnson Sl Distribution( q, gamma, delta, theta, &lt;sigma=1&gt; )

**Description :** Renvoie la probabilité qu&apos;une variable aléatoire distribuée selon le S1 de Johnson est inférieure à q. (Remarque : voir la fonction Johnson Sl Density() pour obtenir la description des paramètres.)

**JMP Version ajoutée :** Avant la version 14

```jsl

gamma = 0.5;
delta = 1;
theta = 0;
sigma = 1;
New Window( "Example: Johnson Sl Distribution",
	jslc = Graph Box(
		Y Scale( 0, 1.05 ),
		X Scale( -5, 5 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function(
			Johnson Sl Distribution(
				q,
				gamma,
				delta,
				theta,
				sigma
			),
			q
		);
		Text(
			{-1, 0.9},
			"\!U03B3=",
			Round( gamma, 2 ),
			" \!U03B4=",
			Round( delta, 2 ),
			" \!U03B8=",
			Round( theta, 2 )
		);
	),
	jslccb = Check Box(
		{"\!U03C3 = +1 (Note: When unchecked \!U03C3 = -1)"},
		<<set( 1 ),
		sigma = [-1, 1][((jslccb << get()) + 1)];
		jslc << reshow;
	),
	H List Box(
		Slider Box( -15, 15, gamma, jslc << reshow ),
		Text Box( " \!U03B3" )
	),
	H List Box(
		Slider Box( 0, 10, delta, jslc << reshow ),
		Text Box( " \!U03B4" )
	),
	H List Box(
		Slider Box( -5, 5, theta, jslc << reshow ),
		Text Box( " \!U03B8" )
	)
);

```

### Johnson Sl Quantile

**Syntaxe :** q = Johnson Sl Quantile( p, gamma, delta, theta, &lt;sigma=1&gt; )

**Description :** Renvoie le quantile d’une distribution S1 de Johnson, correspondant à la probabilité p qu’une variable aléatoire ayant cette distribution prenne une valeur inférieure au quantile. (Remarque : p est le premier paramètre. Voir la fonction Johnson Sl Density() pour obtenir la description des paramètres.)

**JMP Version ajoutée :** Avant la version 14

```jsl

Johnson Sl Quantile( 0.5, 0.5, 1, 1, 1 );

```

### Johnson Su Density

**Syntaxe :** y = Johnson Su Density( q, gamma, delta, theta, sigma )

**Description :** Renvoie la densité à q d&apos;une distribution Johnson Su, où q compris entre -∞ et +∞, delta>0 et gamma entre -∞ et +∞ sont des paramètres de forme, sigma>0 est un paramètre d&apos;échelle, et theta entre -∞ et +∞ est un paramètre de seuillage.

**JMP Version ajoutée :** Avant la version 14

```jsl

gamma = 0.5;
delta = 1;
theta = 1;
sigma = 1;
New Window( "Example: Johnson Su Density",
	y = Graph Box(
		Y Scale( 0, 1.5 ),
		X Scale( -2, 2 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function(
			Johnson Su Density( q, gamma, delta, theta, sigma ),
			q
		);
		Text(
			{-1, 1.3},
			"\!U03B3=",
			Round( gamma, 2 ),
			" \!U03B4=",
			Round( delta, 2 ),
			" \!U03B8=",
			Round( theta, 2 ),
			" \!U03C3=",
			Round( sigma, 2 )
		);
	),
	H List Box(
		Slider Box( 0, 1, gamma, y << reshow ),
		Text Box( " \!U03B3" )
	),
	H List Box(
		Slider Box( 0, 2, delta, y << reshow ),
		Text Box( " \!U03B4" )
	),
	H List Box(
		Slider Box( 0, 2, theta, y << reshow ),
		Text Box( " \!U03B8" )
	),
	H List Box(
		Slider Box( 0, 2, sigma, y << reshow ),
		Text Box( " \!U03C3" )
	)
);

```

### Johnson Su Distribution

**Syntaxe :** p = Johnson Su Distribution( q, gamma, delta, theta, sigma )

**Description :** Renvoie la probabilité qu&apos;une variable aléatoire distribuée selon le Su de Johnson est inférieure à q. (Remarque : voir la fonction Johnson Su Density() pour obtenir la description des paramètres.)

**JMP Version ajoutée :** Avant la version 14

```jsl

gamma = 0.5;
delta = 1;
theta = 1;
sigma = 1;
New Window( "Example: Johnson Su Distribution",
	jsuc = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( -2, 2 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function(
			Johnson Su Distribution(
				q,
				gamma,
				delta,
				theta,
				sigma
			),
			q
		);
		Text(
			{-1, 0.9},
			"\!U03B3=",
			Round( gamma, 2 ),
			" \!U03B4=",
			Round( delta, 2 ),
			" \!U03B8=",
			Round( theta, 2 ),
			" \!U03C3=",
			Round( sigma, 2 )
		);
	),
	H List Box(
		Slider Box( 0, 1, gamma, jsuc << reshow ),
		Text Box( " \!U03B3" )
	),
	H List Box(
		Slider Box( 0, 2, delta, jsuc << reshow ),
		Text Box( " \!U03B4" )
	),
	H List Box(
		Slider Box( 0, 2, theta, jsuc << reshow ),
		Text Box( " \!U03B8" )
	),
	H List Box(
		Slider Box( 0, 2, sigma, jsuc << reshow ),
		Text Box( " \!U03C3" )
	)
);

```

### Johnson Su Quantile

**Syntaxe :** q = Johnson Su Quantile( p, gamma, delta, theta, sigma )

**Description :** Renvoie le quantile d’une distribution Su de Johnson, correspondant à la probabilité p qu’une variable aléatoire ayant cette distribution prenne une valeur inférieure au quantile. (Remarque : p est le premier paramètre. Voir la fonction Johnson Su Density() pour obtenir la description des paramètres.)

**JMP Version ajoutée :** Avant la version 14

```jsl

Johnson Su Quantile( 0.5, 0.5, 1, 1, 1 );

```

### Journal Box

**Syntaxe :** y = Journal Box( journalText )

**Description :** Construit une boîte d&apos;affichage à partir d&apos;instructions qui seraient enregistrées dans un journal.

**JMP Version ajoutée :** Avant la version 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
sample = Distribution( Y( :height ) );
sampjourn = sample << Get Journal;
New Window( "Distribution of Height",
	Text Box(
		"Here is the result of the distribution platform for Height."
	),
	Journal Box( sampjourn )
);

```

### JSL Encrypted

**Syntaxe :** y = JSL Encrypted(script)

**Description :** Incorpore un script crypté dans un autre script. Créez un script crypté en sélectionnant Éditer > Crypter le script dans le menu principal de l&apos;éditeur de script. Saisissez vos mots de passe et le texte crypté s&apos;affiche dans une nouvelle fenêtre. Copiez ce texte dans une commande de JSL Encrypted("") pour incorporer le script crypté dans un autre script.

**JMP Version ajoutée :** Avant la version 14

```jsl

JSL Encrypted(
	"//-e6.0.2\!NWUSXEHSB?SRAMXPSY?;KDGMNGPQFZP;?><JLEXCQZYIGWSI@<FOPBLDKJ?HEUPTOGSZDYWFDMB;NEVB;HFP=VQ@N;LCVQPWRHIXEIPFKGO=H?DWS?KFQRIPBEPSAE<AM?YG=C@VFRENPEW>@;ND=JA<?=WOZZOG>FZBZKZLMFOX?YF@LWA=B=SJXDGVW>VYLBRJT<I<MFE<Q??QCUOZM?RY>RXLBJRH=BH<EGVSEMABSS<IE=CAPID;XM;;?XIU<FA=SCE<CB;AGOCZWHZXK;*"
);

```

### JSL Quote

**Syntaxe :** y = JSL Quote(script)

**Description :** Enregistrer un script JSL dans une variable, en incluant tous les commentaires et le formatage.

**JMP Version ajoutée :** Avant la version 14

```jsl


x = JSL Quote(/* Begin quote. */
    For (i = 1, i <= 5, i++,
        // Print the value of i.
        Print(i);
    );
    // End expression.
);
New Window( "editor", Script Box( x ) );

```

### JSON Literal

**Syntaxe :** l = JSON Literal( string )

**Description :** Renvoie une valeur booléenne JSON valide ou une valeur constante nulle selon la spécification du paramètre.

**JMP Version ajoutée :** 14

```jsl


myJSON =
"{ \!"myChar\!": \!"Character Value\!", \!"myNum\!": 12345, \!"myBool\!": true, \!"myOtherChar\!": \!"Another char value\!", \!"myNull\!": null, \!"x\!": 54321, \!"myOtherBool\!": false, \!"y\!": \!"Hello\!" }";
parsed = Parse JSON( myJSON );
x = parsed["myBool"];
Show( x );
If( x == JSON Literal( true ),
	Show( "Worked" ),
	Show( "Didn't work" )
);

```

### JSON To Data Table

**Syntaxe :** dt = JSON To Data Table( jsonstring, &lt;Invisible( boolean ) | Private( boolean )&gt;, &lt;Guess(Stack(Boolean)|"Tall"|"Wide")&gt;, &lt;JSON Settings(...)&gt; )

**Description :** Convertir le texte JSON en une table de données JMP

**JMP Version ajoutée :** 14

```jsl

dt = JSON To Data Table(
	"[ { \!"name\!": \!"KATIE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 59, \!"weight\!": 95 }, { \!"name\!": \!"LOUISE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 61, \!"weight\!": 123 }, { \!"name\!": \!"JANE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 55, \!"weight\!": 74 } ]"
);

```

### JSON To List

**Syntaxe :** l = JSON To List( jsonstring )

**Description :** Convertir le texte JSON en une liste JSL représentant la structure spécifiée par les données JSON.

**JMP Version ajoutée :** Avant la version 14

```jsl

l = JSON To List(
	"[ { \!"name\!": \!"KATIE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 59, \!"weight\!": 95 }, { \!"name\!": \!"LOUISE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 61, \!"weight\!": 123 }, { \!"name\!": \!"JANE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 55, \!"weight\!": 74 } ]"
);
Show( l );

```

### JSS Context Box

**Syntaxe :** y = JSS Context Box( displayBox )

**JMP Version ajoutée :** 19

```jsl

New Window( "JSS Context",
	JSS Context Box(
		V List Box(
			Panel Box( "Panel",
				Text Box( "Hi" ),
				Button Box( "Press Me" ),

			),
			Button Box( "Outside" ),

		),
		<<Set JSS(
			Expr(
				Type( TextBox ) << Background Color( "Red" );
				Type( ButtonBox ) << Background Color( "Green" );
				Descend( Type( PanelBox ), Type( ButtonBox ) )
				 << Background Color( "Blue" );
			)
		)
	)
);

```

### KDE

**Syntaxe :** {Estimates, Bins, Counts, ActualBandwidth, Error} = KDE( Vector, &lt;&lt;weights, &lt;&lt;bandwidth( 0 ), &lt;&lt;bandwidth scale( 1 ), &lt;&lt;bandwidth selection( 0 ), &lt;&lt;kernel )

**Description :** Renvoie un estimateur de densité à noyau avec sélection automatique de la largeur de bande. L’argument facultatif weights doit être un vecteur de la même longueur que Vector. L&apos;argument facultatif bandwidthdoit être un nombre réel positif ou nul, qui force l&apos;utilisation de la valeur de l’argument bandwidth selection. L&apos;argument facultatif bandwidth scale doit être un nombre réel positif. L&apos;argument facultatif bandwidth selection doit être 0, 1, 2 ou 3, correspondant à Sheather et Jones, Référence normale, méthode empirique de Silverman, ou surlissage, respectivement. L&apos;argument facultatif kernel accepte les valeurs 0, 1, 2, 3 ou 4, correspondant à Gaussien, Epanechnikov, Bipoids, Triangulaire, ou Rectangulaire, respectivement.

**JMP Version ajoutée :** Avant la version 14

```jsl

// generate sample dataset from a mixture of 3 normal distributions
ndata3 = 25;
Random Reset( 113 );
channel = J( 1, ndata3 * 3, 0 );
For( i = 1, i <= ndata3, i++,
	channel[1, i] = Random Normal() - 3;
	channel[1, ndata3 + i] = Random Normal() / 2;
	channel[1, ndata3 + ndata3 + i] = Random Normal() + 3;
);

// use kernel density estimator to estimate the underlying distribution
bw = .; // automatic bandwidth
bscl = 1; // bandwidth multiplier
bsel = 0; // Sheather and Jones bandwith selection

// Create data table with estimates from all smoothing KDEs and Bins
dt = New Table( "KDE Smoothing",
	New Column( "Kernel", "Character" ),
	New Column( "Bin" ),
	New Column( "Density Estimate" ),
	New Column( "Counts" )
);

kernels = {"Gaussian", "Epanechnikov", "Biweight", "Triangular",
"Rectangular"};
For( kernel = 0, kernel < N Items( kernels ), kernel++,
	res = KDE(
		channel,
		<<bandwidth( bw ),
		<<bandwidth scale( bscl ),
		<<bandwidth selection( bsel ),
		<<kernel( kernel )
	);
	nbin = N Items( res["Bins"] );
	rows = (N Rows( dt ) + 1) :: (N Rows( dt ) + nbin);
	dt << Add Rows( nbin );
	dt[rows, "Kernel"] = kernels[kernel + 1];
	dt[rows, "Bin"] = res["Bins"]`;
	dt[rows, "Density Estimate"] = res["Estimates"]`;
	dt[rows, "Counts"] = res["Counts"]`;
);

dt << Graph Builder(
	Size( 1000, 376 ),
	Show Control Panel( 0 ),
	Legend Position( "Bottom" ),
	Variables(
		X( :Bin ),
		Y( :Density Estimate, Side( "Right" ) ),
		Y( :Counts, Position( 1 ) ),
		Overlay( :Kernel )
	),
	Elements(
		Bar(
			X,
			Y( 2 ),
			Overlay( 0 ),
			Legend( 2 ),
			Bar Style( "Needle" )
		),
		Line( X, Y( 1 ), Legend( 3 ) )
	)
);

```

### KDTable

**Syntaxe :** tab = KDTable( [ 1 1 1, 1 2 1, 1 2 2, 2 2 2, 3 3 3, 4 5 6 ] )

**Description :** Renvoie une table de données permettant de chercher efficacement les proches voisins. Les arguments de la matrice sont des points d’un espace k-dimensionnel. Il n&apos;existe aucune limite au nombre de dimensions ou de points.

**JMP Version ajoutée :** Avant la version 14

```jsl

tab = KDTable( [1 1 1, 1 2 1, 1 2 2, 2 2 2, 3 3 3, 4 5 6] );
{rows, dist} = tab << K nearest rows( 2, 1 );
"2 nearest rows to row 1 are " || Char( rows );

```

### Labeled

**Syntaxe :** y = Labeled( &lt;rs&gt; ); Labeled( &lt;Row State( &lt;r&gt; )&gt; ) = y

**Description :** Renvoie la composante étiquetée de la valeur d&apos;état de ligne spécifiée, 0 ou 1. Si Labeled est utilisée comme L-value, l’état étiqueté de la ligne active (ou r-ième) de la table de données active est modifié.

**JMP Version ajoutée :** Avant la version 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Labeled State( 1 );
Labeled( Row State( 3 ) );
Row() = 3;
Labeled();

```

### Labeled State

**Syntaxe :** rs = Labeled State( x )

**Description :** Renvoie une valeur d&apos;état de ligne avec la composante étiquetée définie comme la valeur spécifiée.

**JMP Version ajoutée :** Avant la version 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Labeled State( 1 );
Labeled( Row State( 3 ) );

```

### Lag

**Syntaxe :** y = Lag( &lt;x&gt;, &lt;n=1&gt; )

**Description :** Renvoie la valeur de l’argument x avec la ligne en cours définie comme Row() - n. Puisqu&apos;elle dépend de Row(), la fonction Lag() est principalement utile dans les formules de colonne.

**JMP Version ajoutée :** Avant la version 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row() = 3;
Lag( :height, 2 );

```

### Last Modification Date

**Syntaxe :** date = Last Modification Date( path )

**Description :** Renvoie la dernière date de modification d’un fichier ou d’un répertoire. Génère une erreur si le chemin d&apos;accès est incorrect ou n&apos;existe pas.

**JMP Version ajoutée :** Avant la version 14

```jsl

Format(
	Last Modification Date( "$SAMPLE_DATA/Big Class.jmp" ),
	"ddmonyyyy:h:m:s"
);

```

### Least Squares Solve

**Syntaxe :** {Beta, VarBeta} = Least Squares Solve(y, X, &lt;&lt;noIntercept, &lt;&lt;weights(optionalWeightVector), &lt;&lt;method("Sweep"|"GInv"))

**Description :** Renvoie une liste qui contient un vecteur des estimations, Beta = Inverse(X&apos;X)X&apos;y, et la matrice des variances estimées de Beta. L&apos;argument facultatif <<noIntercept spécifie un modèle sans constante. L&apos;argument facultatif <<weights spécifie un vecteur des pondérations pour le calcul les moindres carrés pondérés. L&apos;argument facultatif <<method vous permet de choisir entre la méthode Sweep par défaut et une méthode inverse généralisée ("GInv") pour résoudre les équations normales.

**JMP Version ajoutée :** Avant la version 14

```jsl

/*Simple Linear Regression*/
y = [3, 5, 7, 5];
X = [1, 2, 3, 4];
{Beta, VarBeta} = Least Squares Solve( y, X );

```

### Left

**Syntaxe :** sub = Left( s, n, &lt;filler&gt; )

**Description :** Renvoie une version tronquée ou complétée de la chaîne ou liste d&apos;origine s. Le résultat contient les n caractères de gauche ou éléments de liste, complétés par des filler à droite si la longueur de s est inférieure à n.

**JMP Version ajoutée :** Avant la version 14

```jsl

exurl = "http://www.jmp.com";
Left( exurl, Contains( exurl, ":" ) - 1 );

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

### LenthPSE

**Syntaxe :** y = LenthPSE( x )

**Description :** Renvoie l&apos;erreur pseudo-standard de Lenth des valeurs d’un vecteur x unique x.

**JMP Version ajoutée :** Avant la version 14

```jsl

Eval List(
	{LenthPSE( [1, 2, 3, 4, 5] ), Std Dev( [1, 2, 3, 4, 5] )}
);

```

### Less

**Syntaxe :** z = x &lt; y &lt; ... ; z = Less( x, y, ... )

**Description :** Renvoie 1 si chaque argument est inférieur à l&apos;argument suivant, et 0 dans le cas contraire.

**JMP Version ajoutée :** Avant la version 14

```jsl

[1 1 1] < [0 1 2];

```

### Less LessEqual

**Syntaxe :** z = x &lt; y &lt;= ... ; z = Less LessEqual( x, y, ... )

**Description :** Renvoie 1 si le premier argument est inférieur au second et que chaque argument, sauf le premier, est inférieur ou égal à l&apos;argument suivant ; retourne 0 dans le cas contraire.

**JMP Version ajoutée :** Avant la version 14

```jsl

1 < 2 <= 2;

```

### Less or Equal

**Syntaxe :** z = x &lt;= y &lt;= ... ; z = Less or Equal( x, y, ... )

**Description :** Renvoie 1 si chaque argument est inférieur ou égal à l&apos;argument suivant, et 0 dans le cas contraire.

**JMP Version ajoutée :** Avant la version 14

```jsl

1 <= 2 <= 2;

```

### LessEqual Less

**Syntaxe :** z = x &lt;= y &lt; ... ; z = LessEqual Less( x, y, ... )

**Description :** Renvoie 1 si le premier argument est inférieur ou égal au second et que chaque argument, sauf le premier, est inférieur à l&apos;argument suivant ; retourne 0 dans le cas contraire.

**JMP Version ajoutée :** Avant la version 14

```jsl

2 <= 2 < 3;

```

### LEV Density

**Syntaxe :** y = LEV Density( x, mu, sigma )

**Description :** Renvoie la densité à x d’une distribution des valeurs extrêmes les plus grandes avec paramètre de position mu et paramètre d’échelle sigma.

**JMP Version ajoutée :** Avant la version 14

```jsl

mu = 10;
sig = 5;
New Window( "Example: LEV Density",
	y = Graph Box(
		Y Scale( 0, .08 ),
		X Scale( 0, 60 ),
		Pen Color( "red" );
		Y Function( LEV Density( x, mu, sig ), x );
		Text( {0, .055}, "mu=", Round( mu, 2 ) );
		Text( {0, .045}, "sig=", Round( sig, 2 ) );
	),
	H List Box(
		Slider Box( 0, 100, mu, y << reshow ),
		Text Box( "mu" )
	),
	H List Box(
		Slider Box( 0, 10, sig, y << reshow ),
		Text Box( "sig" )
	), 

);

```

### LEV Distribution

**Syntaxe :** p = LEV Distribution( x, mu, sigma )

**Description :** Renvoie la probabilité à x d’une distribution des valeurs extrêmes les plus grandes avec paramètre de position mu et paramètre d’échelle sigma.

**JMP Version ajoutée :** Avant la version 14

```jsl

mu = 10;
sig = 5;
New Window( "Example: LEV Distribution",
	y = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( 0, 60 ),
		Pen Color( "red" );
		Y Function( LEV Distribution( x, mu, sig ), x );
		Text( {0.1, 0.9}, "mu=", Round( mu, 2 ) );
		Text( {0.1, 0.8}, "sig=", Round( sig, 2 ) );
	),
	H List Box(
		Slider Box( 0, 100, mu, y << reshow ),
		Text Box( " mu" )
	),
	H List Box(
		Slider Box( 0, 10, sig, y << reshow ),
		Text Box( " sig" )
	)
);

```

### LEV Quantile

**Syntaxe :** q = LEV Quantile( p, mu, sigma )

**Description :** Renvoie le quantile à p d’une distribution des valeurs extrêmes les plus grandes avec paramètre de position mu et paramètre d’échelle sigma.

**JMP Version ajoutée :** Avant la version 14

```jsl

mu = 10;
sig = 5;
qq = .5;
New Window( "Example: LEV Quantile",
	y = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( 0, 60 ),
		Pen Color( "red" );
		Y Function( LEV Distribution( qq, mu, sig ), qq );
		Pen Color( "blue" );
		V Line( LEV Quantile( qq, mu, sig ), 0, 1 );
		Text(
			{0.1, 0.9},
			" mu=",
			Round( mu, 2 ),
			" sig=",
			Round( sig, 2 ),
			" quantile=",
			Round( qq, 2 )
		);
	),
	H List Box(
		Slider Box( 0, 80, mu, y << reshow ),
		Text Box( " mu" )
	),
	H List Box(
		Slider Box( 0, 10, sig, y << reshow ),
		Text Box( " sig" )
	),
	H List Box(
		Slider Box( 0.01, 0.99, qq, y << reshow ),
		Text Box( " quantile" )
	)
);

```

### Level Color

**Syntaxe :** y = Level Color( i ); y = Level Color( i, n ); y = Level Color( i, n, &lt;theme&gt; ); y = Level Color( i, &lt;theme&gt; )

**Description :** Renvoie une couleur de catégorie, où i est le niveau de catégorie; n est le nombre de catégories (facultatif) et theme correspond aux thèmes de couleur répertoriés dans la zone de liste déroulante Couleur de la valeur de la boîte de dialogue Informations sur la colonne. ("JMP par défaut" indique le thème par défaut.) L&apos;index de catégorie doit être >= 1 et <= au nombre de catégories spécifié dans l&apos;appel ou défini par le thème. Si le deuxième argument est un caractère, il s’agit du thème de couleur et n n&apos;est pas spécifié.

**JMP Version ajoutée :** Avant la version 14

```jsl

New Window( "Color Bar",
	Graph(
		For( x = 1, x <= 100, x += 5,
			Fill Color(
				Level Color( x, 100, "Green to Black to Red" )
			);
			Rect( x - 5, 45, x + 5, 55, 1 );
		)
	)
);

```

### LGamma

**Syntaxe :** y = LGamma( x )

**Description :** Renvoie le logarithme naturel de la fonction gamma de x. Utile lorsque gamma(x) est trop grand pour être utilisé directement.

**JMP Version ajoutée :** Avant la version 14

```jsl

LGamma( 5 );

```

### Line

**Syntaxe :** Line( {x1, y1}, {x2, y2}, ..., &lt; &lt;&lt;Value Space( 0|1 ) &gt;, &lt; &lt;&lt;Smooth( tension, domain, min response, max response ) &gt; ); Line( xMatrix, yMatrix, &lt; &lt;&lt;Value Space(0 | 1) &gt;, &lt; &lt;&lt;Smooth( tension, domain, min response, max response ) &gt; )

**Description :** Dessine une droite ou des droites connectées. Dans le cas par défaut, la droite est dessinée linéairement entre les points finaux. Si l&apos;option Value Space est définie , la droite suivra la projection spécifiée par l&apos;échelle des axes sous-jacents. Si l&apos;option Smooth est définie, les connexions sont lissées, restreintes par tension, domain dimension, min response et max response.

**JMP Version ajoutée :** Avant la version 14

**Constrained smoothing**

```jsl

New Window( "Constrained smoothing",
	Graph Box(
		Pen Color( "gray" );
		H Line( 90 );
		H Line( 92 );
		H Line( 10 );
		H Line( 8 );
		Pen Color( "red" );
		Line(
			Index( 10, 90, 10 ),
			[20 10 90 90 60 70 10 10 40],
			<<Smooth( . )
		);
		Pen Color( "blue" );
		Line(
			Index( 10, 90, 10 ),
			[20 10 90 90 60 70 10 10 40],
			<<Smooth( ., "X", 8, 92 )
		);
	)
);

```

**Polyline**

```jsl

New Window( "Example",
	Graph Box( Line( [10 30 90], [88 22 44] ) )
);

```

**Smoothing**

```jsl

New Window( "Smoothing",
	Graph Box(
		XAxis( Min( 0 ), Max( 10 ), Inc( 2 ) ),
		YAxis( Min( -1.1 ), Max( 1.1 ), Inc( 1 ) ),
		Pen Color( "gray" );
		H Line( 1 );
		H Line( -1 );
		H Line( 0 );
		Line( 0 :: 10, Sin( 0 :: 10 ) );
		Pen Color( "red" );
		Line( 0 :: 10, Sin( 0 :: 10 ), <<Smooth( . ) );
		Pen Color( "blue" );
		Line( 0 :: 10, Sin( 0 :: 10 ), <<Smooth( 0.25 ) );
	)
);

```

**Value space interpolation**

```jsl

New Window( "Interpolate in value space",
	Graph Box(
		XAxis( Scale( "Log" ), Min( 10 ), Max( 100 ) ),
		YAxis( Scale( "Log" ), Min( 10 ), Max( 100 ) ),
		Line( [10 30 90], [88 22 44], <<Value Space( 1 ) )
	)
);

```

### Line Seg

**Syntaxe :** ls = Line Seg(x values, y values, &lt;Row States( dt | dt,[rows] | dt,{{rows}, ...} | {states} ) &gt;, &lt; Sizes( s ) &gt; )&gt;)

**Description :** Renvoie un groupe d’affichage avec des lignes reliant toutes les valeurs x et y.

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

x = [10, 50, 90];
y = [10, 90, 10];
New Window( "Line Seg Example",
	g = Graph Box( Line Seg( x, y ) )
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( "Line Seg" ));

```

**Exemple 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
x = [10, 50, 90];
y = [10, 90, 10];
New Window( "Line Seg Example",
	g = Graph Box( Line Seg( x, y, RowStates( dt ) ) )
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( "Line Seg" ));

```

**Exemple 3**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
x = [10, 50, 90];
y = [10, 90, 10];
New Window( "Line Seg Example",
	g = Graph Box(
		Line Seg( x, y, RowStates( dt, {1, 3, 5} ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( "Line Seg" ));

```

### Line Style

**Syntaxe :** Line Style( x )

**Description :** Définit le style de la ligne actuelle, parmi les suivants : 0 (continu), 1 (pointillé), 2 (tireté), 3 (tiret-point), or 4 (tiret-point-point).

**JMP Version ajoutée :** Avant la version 14

```jsl

New Window( "Line Style Example",
	Graph Box(
		Frame Size( 500, 400 ),
		named line styles = {"Solid", "Dotted", "Dashed",
		"Dash Dot", "Dash Dot Dot", "Dash Dash Dot",
		"Dash Dash Dot Dot", "Long Dash", "Long Dash Dash",
		"Dense Dash", "Sparse Dash", "Sparse Dot",
		"Sparse Dash Dot"};
		For Each( {istyle, i}, named line styles,
			{x = 5 :: 75, y = 12 * Sin( x / 12 )},
			Text(
				{x[N Items( x )] + 1, y[N Items( y )] + 92 - 6
				 * i - 1.5},
				istyle
			);
			Line Style( istyle );
			Pen Size( 2 );
			Line( x, y + 92 - 6 * i );
		);
	)
);

```

### Linear Regression

**Syntaxe :** {Estimates, Std_Error, Diagnostics} = Linear Regression(y, X, &lt;&lt;noIntercept, &lt;&lt;printToLog, &lt;&lt;weight(WeightVector), &lt;&lt;freq(FrequencyVector)

**Description :** Ajuste une régression linéaire pour le modèle supposé y = X * beta + error. L&apos;argument facultatif <<noIntercept spécifie un modèle sans constante. L&apos;argument facultatif <<printToLog spécifie qu&apos;un résumé de l&apos;ajustement est imprimé dans la fenêtre log. L&apos;argument facultatif weight spécifie un vecteur des pondérations pour le calcul des moindres carrés pondérés, et l&apos;argument facultatif freq spécifie un vecteur des fréquences. Renvoie une liste contenant un vecteur des estimations, un vecteur des erreurs standard et une liste des diagnostics. La liste des diagnostics contient les vecteurs des statistiques t et les p-values pour les estimations, ainsi que les valeurs R carré et R carré ajustées pour l&apos;ajustement de la régression.

**JMP Version ajoutée :** 14

**Exemple 1**

```jsl

/*Simple Linear Regression: y = intercept + beta * x + error*/
y = [3, 5, 7, 5];
X = [1, 2, 3, 4];
{Estimates, Std_Error, Diagnostics} =
Linear Regression( y, X, <<printToLog ); 
/*
t_ratio = Diagnostics["t_ratio"]; 
p_value = Diagnostics["p_value"]; 
RSquare = Diagnostics["RSquare"]; 
RSquare Adj = Diagnostics["RSquare Adj"];
*/

```

**Exemple 2**

```jsl

/*Model: y = beta_1*x + beta_2*x^2 + error*/
y = [3, 5, 7, 5];
X = [1 1, 2 4, 3 9, 4 16];
{Estimates, Std_Error, Diagnostics} =
Linear Regression( y, X, <<noIntercept, <<printToLog );

```

**Exemple 3**

```jsl

/*Categorical Variable Example*/
/*Model: y = beta_1*boy + beta_2*girl + beta_3*x + error*/
y = [3, 5, 7, 5];
x = [1, 2, 3, 4];
gender = {"boy", "girl", "girl", "boy"};
designMat = Design( gender ) || x;
{Estimates, Std_Error, Diagnostics} =
Linear Regression( y, designMat, <<noIntercept, <<printToLog );

```

### Lines Seg

**Syntaxe :** ls = Lines Seg([x1 y1 x2 y2,...])

**Description :** Renvoie un groupe d’affichage avec une séquence de segments de droite pour les valeurs x et y passées.

**JMP Version ajoutée :** Avant la version 14

```jsl

lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];
New Window( "Lines Seg Example",
	g = Graph Box( Lines Seg( lines ) )
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( "Lines Seg" ));

```

### Lineup Box

**Syntaxe :** y = Lineup Box( &lt;NCol( nc )&gt;, &lt;Spacing( pixels, &lt;vspace&gt; )&gt;, displayBoxArgs, ... )

**Description :** Renvoie une boîte d&apos;affichage pour afficher un alignement de boîtes en nc colonnes. L&apos;argument facultatif Spacing spécifie l&apos;espace horizontal et vertical autour des boîtes d&apos;affichage. Si vous utilisez l’argument vspace, vspace est l&apos;espace vertical et pixels est l&apos;espace horizontal.

**JMP Version ajoutée :** Avant la version 14

```jsl

New Window( "Example",
	Lineup Box( N Col( 1 ), spacing( 10 ),
		Text Box( "Quadratic Formula" ),
		Border Box( Left( 10 ), Right( 10 ), bottom( 10 ),
			top( 10 ), sides( 15 ),
			Expr As Picture(
				Expr(
					(-b + Sqrt( b ^ 2 - 4 * a * c )) / (2 * a)
				)
			)
		)
	)
);

```

### Lineup Ruler Box

**Syntaxe :** y = Lineup Box( &lt;Widths( {width1, width2, ...} )&gt;, displayBoxArgs, ... )

**Description :** Renvoie une boîte d’affichage qui définit les largeurs de colonne des boîtes d&apos;alignement qu&apos;elle contient.

**JMP Version ajoutée :** 16

```jsl


New Window( "Lineup Ruler",
	lrb = Lineup Ruler Box(
		Widths( {120, 200} ),
		Outline Box( "Customer 1",
			Lineup Box( N Col( 2 ),
				Text Box( "First Name:" ),
				Text Edit Box(),
				Text Box( "Last Name:" ),
				Text Edit Box(), 

			)
		),
		Outline Box( "Customer 2",
			Lineup Box( N Col( 2 ),
				Text Box( "First Name:" ),
				Text Edit Box(),
				Text Box( "Last Name:" ),
				Text Edit Box(), 

			)
		)
	)
);

```

### List

**Syntaxe :** y = {a, b, ...}; y = List( a, b, ... )

**Description :** Crée une liste d&apos;éléments sans les évaluer.

**JMP Version ajoutée :** Avant la version 14

```jsl

{1, 2 + 3, [11 22]};

```

### List Box

**Syntaxe :** y = List Box( {item, ...}, &lt;width( pixels )&gt;, &lt;maxSelected( 9999 )&gt;, &lt;nlines( 12 )&gt;, &lt;script&gt; )

**Description :** Renvoie une boîte d&apos;affichage pour afficher une zone de liste d&apos;éléments de sélection. Si item est en lui-même une liste à deux éléments contenant le nom de l’élément et une chaîne spécifiant le type de modélisation ou l’ordre de tri, "Ordinal" ou "Ascending" par exemple, l’icône appropriée s’affichera en regard de l’élément concerné dans la zone de liste.

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

New Window( "Example",
	b = List Box( {"single", "double", "triple"}, nlines( 10 ) )
);

```

**Exemple 2**

```jsl

New Window( "Example",
	lb = List Box(
		{{"First Item", "continuous"}, {"Second Item", "ordinal"
		}, {"Third Item", "nominal"}},
		width( 200 ),
		max selected( 2 ),
		nlines( 6 )
	)
);

```

### Ln

**Syntaxe :** y = Ln( x )

**Description :** Renvoie le logarithme naturel de x.

**JMP Version ajoutée :** Avant la version 14

```jsl

Ln( Exp( 2 ) );

```

### Load DLL

**Syntaxe :** dll = Load DLL( file path | Base Name( file path without extension ), &lt; AutoDeclare( bool | Quiet | Verbose) | Quiet | Verbose )&gt; )

**Description :** Charge une DLL à laquelle conduit le chemin d&apos;accès spécifié.

**JMP Version ajoutée :** Avant la version 14

**Cross platform using Base Name()**

```jsl

dll = Load DLL( Base Name( "/path/to/dll/financial" ) );
// Loads "financial.dll" on Windows and "libfinancial.dylib" on Mac
// Declarations for "irr" and "npv" are auto-loaded
myirr = dll << irr( 0.1, -51000, 1000, 900, 950 );
mynpv = dll << npv( 0.05, -51000, 1000, 900, 9500 );
dll << UnloadDLL();

```

**Windows only**

```jsl

If( Host is( "Windows" ),
	dll = Load DLL( "C:/Windows/System32/User32.DLL" );
	dll << CallDLL( "MessageBeep", "n", 0 );
	Wait( 1 );
	dll << CallDLL( "MessageBeep", "n", 0 );
	dll << UnloadDLL();
);

```

### Load Text File

**Syntaxe :** text = Load Text File( path, &lt;Charset("best guess", &lt;force("throw" | "alert" | "silent")&gt;)&gt;, &lt;LineSeparator("\\!N")&gt;, &lt;XMLParse&gt;|&lt;SASODSXML&gt;|&lt;JSON&gt;|&lt;BLOB( &lt;readOffsetFromBegin(0)&gt;|&lt;readOffsetFromEnd(42)&gt;, &lt;readLength(2147483647)&gt;, &lt;base64Compressed( 1 /* 0: ascii~hex */)&gt; )&gt; )

**Description :** Lit un fichier texte entier dans une variable JSL. Load Text File() vous invite à saisir un nom de fichier. Load Text File( path ) renvoie une chaîne. L&apos;option XMLParse convertit du code XML en une arborescence d&apos;expression. La fonction SASODSXML effectue l&apos;analyse en tant que fichier XML par défaut d&apos;un fichier ODS de SAS. L&apos;option [{JSON}] convertit du code JSON en une arborescence d&apos;expression. L&apos;argument BLOB renvoie des données binaires dans une variable Blob JSL ; les paramètres facultatifs nommés du BLOB permettent de lire une sous-chaîne du fichier.

**JMP Version ajoutée :** Avant la version 14

```jsl

ex = Load Text File(
	Get Path Variable( "sample_import_data" ) || "/animals.txt"
/*, Charset("ascii")*/
/*, LineSeparator("\!r\!n")*/
/*, BLOB*/
);
Word( 4, ex, " \!t\!n\!r" );

```

### Loc

**Syntaxe :** y = Loc( m ); y = Loc( v, x )

**Description :** Renvoie une matrice des positions de la matrice m qui sont différentes de zéro. Si deux arguments sont spécifiés, Loc(v, x) renvoie une matrice des positions de la liste ou une matrice v, égales à la valeur x. Préférez Where à la place lorsque possible.

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

/*more examples, above*/
Show( Loc( [1 0 1 0 1 0] ) );
Show( Loc( {"A", 2, 3, 2, 5, 2, 4, [1 5]}, 2 ) );
Show( Loc( {"A", 2, 3, 2, 5, 2, 4, [1 5]}, [1 5] ) );

```

**Exemple 2**

```jsl

Loc( [0, -2, 3, 0, 5, ., -7, ., 9] ) /*missing is not zero or non-zero*/
;

```

**Exemple 3**

```jsl

Loc( [5, 7, 5, ., 5], 5 );

```

**Exemple 4**

```jsl

Loc( [5, 7, 5, ., 5] == 5 ) /*[5,7,5, . ,5]==5   ==>   [1, 0, 1, ., 1]*/
;

```

**Exemple 5**

```jsl

Loc( {"a", "fred", "b", "fred"}, "fred" );

```

### Loc Max

**Syntaxe :** y = Loc Max( x )

**Description :** Renvoie la première position dans x de la valeur maximale.

**JMP Version ajoutée :** Avant la version 14

```jsl

Loc Max( [11 22 33 22 33 11] );

```

### Loc Min

**Syntaxe :** y = Loc Min( x )

**Description :** Renvoie la première position dans x de la valeur minimale.

**JMP Version ajoutée :** Avant la version 14

```jsl

Loc Min( [11 22 33 22 33 11] );

```

### Loc Nonmissing

**Syntaxe :** y = Loc Nonmissing( matrixArg,...,{listArg},... )

**Description :** Renvoie un vecteur de numéros de lignes d&apos;une matrice, lesquelles ne contiennent  pas de valeurs manquantes ; ou pour les listes, celles qui n’ont pas de nombres  manquants ou de caractères vides.

**JMP Version ajoutée :** Avant la version 14

```jsl

Loc Nonmissing( [1 2 3, 4 . 6, 7 8 ., 8 7 6] );

```

### Loc Sorted

**Syntaxe :** idx = Loc Sorted( x, y )

**Description :** Crée un vecteur colonne des positions d&apos;indice où les valeurs de x sont inférieures ou égales à celles de y sur la base d&apos;une recherche binaire. x doit être une matrice triée par ordre croissant, sans valeur manquante.

**JMP Version ajoutée :** Avant la version 14

```jsl

Show(
	Loc Sorted( [11 22 33 44 55], [11 33 55] ),
	Loc Sorted( [11 22 33 44 55], [1] ),
	Loc Sorted( [11 22 33 44 55], [500] )
);

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

### Log

**Syntaxe :** y = Log( x, &lt;b&gt; )

**Description :** Renvoie le logarithme de base b de x ou le logarithme naturel de x sib n’est pas spécifié.

**JMP Version ajoutée :** Avant la version 14

```jsl

Log( 256, 2 );

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

### Log Table Messages

**Syntaxe :** Log Table Messages( &lt;On|Off&gt;, &lt;Enable(subject, ...)&gt;, &lt;Disable(subject, ...)&gt;, &lt;Include(msgname, ...)&gt;, &lt;Exclude(msgname, )&gt;

**Description :** Control logging of data table messages (such as DtMsgClose). By default logging is off, but all subjects are enabled. (If you turn logging on, you do not need to enable the subjects you&apos;re interested in.) Only a subset of all messages are logged. Not available in retail builds.

**JMP Version ajoutée :** 17

**Turn off logging**

```jsl

Log Table Messages( Off );

```

**Turn on logging**

```jsl

Log Table Messages( On );

```

**Turn on logging, and include all messages except "DtMsgClose"**

```jsl

Log Table Messages( On, Exclude( "DtMsgClose" ) );

```

**Turn on logging, and include only the "DtMsgClose" message**

```jsl

Log Table Messages( On, Include( "DtMsgClose" ) );

```

**Turn on logging, but ignore column messages**

```jsl

Log Table Messages( On, Disable( "Column" ) );

```

**Turn on logging, but ignore table messages**

```jsl

Log Table Messages( On );
Log Table Messages( Disable( "Table" ) );

```

### Log10

**Syntaxe :** y = Log10( x )

**Description :** Renvoie le logarithme de base 10 de x.

**JMP Version ajoutée :** Avant la version 14

```jsl

Log10( 100 );

```

### Log1P

**Syntaxe :** y = Log1P( x )

**Description :** Renvoie un calcul de Log(1 + x) plus précis lorsque x est très petit.

**JMP Version ajoutée :** Avant la version 14

```jsl

Log1P( 1e-6 );

```

### LogGenGamma Density

**Syntaxe :** y = LogGenGamma Density( x, mu, sigma, lambda )

**Description :** Renvoie la densité à x d&apos;une distribution de probabilité log gamma généralisée avec les paramètres mu, sigma, et lambda.

**JMP Version ajoutée :** Avant la version 14

```jsl

mu = 0;
sigma = 1;
lambda = 1;
New Window( "Example: LogGenGamma Density",
	gdey = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( -10, 10 ),
		XName( "y" ),
		Pen Color( "red" );
		Y Function( LogGenGamma Density( y, mu, sigma, lambda ), y );
		Text(
			{-9, 0.9},
			"\!U03BC=",
			Round( mu, 4 ),
			" \!U03C3=",
			Round( sigma, 4 )
		);
		Text( {-9, 0.8}, "\!U03BB=", Round( lambda, 4 ) );
	),
	H List Box(
		Slider Box( -5, 5, mu, gdey << reshow ),
		Text Box( "\!U03BC" )
	),
	H List Box(
		Slider Box( 0, 4, sigma, gdey << reshow ),
		Text Box( "\!U03C3" )
	),
	H List Box(
		Slider Box( 0, 10, lambda, gdey << reshow ),
		Text Box( "\!U03BB" )
	)
);

```

### LogGenGamma Distribution

**Syntaxe :** p = LogGenGamma Distribution( x, mu, sigma, lambda )

**Description :** Renvoie la probabilité qu&apos;une variable aléatoire distribuée selon log gamma généralisé (avec les paramètres mu, sigma, et  lambda) soit inférieure à x.

**JMP Version ajoutée :** Avant la version 14

```jsl

mu = 0;
sigma = 1;
lambda = 1;
New Window( "Example: LogGenGamma Distribution",
	gdey = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( -20, 20 ),
		XName( "y" ),
		Pen Color( "red" );
		Y Function(
			LogGenGamma Distribution( y, mu, sigma, lambda ),
			y
		);
		Text(
			{-9, 0.9},
			"\!U03BC=",
			Round( mu, 4 ),
			" \!U03C3=",
			Round( sigma, 4 )
		);
		Text( {-9, 0.8}, "\!U03BB=", Round( lambda, 4 ) );
	),
	H List Box(
		Slider Box( -5, 5, mu, gdey << reshow ),
		Text Box( "\!U03BC" )
	),
	H List Box(
		Slider Box( 0, 4, sigma, gdey << reshow ),
		Text Box( "\!U03C3" )
	),
	H List Box(
		Slider Box( 0, 10, lambda, gdey << reshow ),
		Text Box( "\!U03BB" )
	)
);

```

### LogGenGamma Quantile

**Syntaxe :** q = LogGenGamma Quantile( p, mu, sigma, lambda )

**Description :** Renvoie le quantile d’une distribution log gamma généralisée (avec les paramètres mu, sigma, et lambda), dont la valeur correspondant à la probabilité p qu&apos;une valeur aléatoire soit inférieure.

**JMP Version ajoutée :** Avant la version 14

```jsl

mu = 0;
sigma = 1;
lambda = 1;
p = 0.4;
New Window( "Example: LogGenGamma Quantile",
	gdey = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( -20, 20 ),
		XName( "y" ),
		Pen Color( "red" );
		Y Function(
			LogGenGamma Distribution( x, mu, sigma, lambda ),
			x
		);
		Pen Color( "Blue" );
		V Line( LogGenGamma Quantile( p, mu, sigma, lambda ), 0, 1 );
		Text(
			{-19, 0.9},
			"\!U03BC=",
			Round( mu, 4 ),
			" \!U03C3=",
			Round( sigma, 4 ),
			" \!U03BB=",
			Round( lambda, 4 )
		);
		Text( {-19, 0.8}, "p=", Round( p, 3 ) );
		Text(
			{-19, 0.7},
			"quantile= ",
			Round( LogGenGamma Quantile( p, mu, sigma, lambda ), 2 )
		);
	),
	H List Box(
		Slider Box( -2, 2, mu, gdey << reshow ),
		Text Box( "\!U03BC" )
	),
	H List Box(
		Slider Box( 0, 4, sigma, gdey << reshow ),
		Text Box( "\!U03C3" )
	),
	H List Box(
		Slider Box( 0, 10, lambda, gdey << reshow ),
		Text Box( "\!U03BB" )
	),
	H List Box(
		Slider Box( 0.01, 0.99, p, gdey << reshow ),
		Text Box( " p" )
	)
);

```

### Logist

**Syntaxe :** y = Logist( x )

**Description :** Renvoie 1 / (1 + Exp( -x )), qui convertit un nombre compris dans le domaine -∞...+∞ dans l&apos;intervalle 0...1. La fonction Logist() s&apos;avère utile dans la régression logistique.

**JMP Version ajoutée :** Avant la version 14

```jsl

Logist( 2 );

```

### Logist Percent

**Syntaxe :** y = Logist Percent( x )

**Description :** La fonction Logist renvoie un résultat compris entre 0 et 100.

**JMP Version ajoutée :** Avant la version 14

```jsl

Logist Percent( 10 );

```

### Logistic Density

**Syntaxe :** y = Logistic Density( x, mu, sigma )

**Description :** Renvoie la densité à x d’une distribution logistique avec paramètre de position mu et paramètre d’échelle sigma.

**JMP Version ajoutée :** Avant la version 14

```jsl

mu = 0;
sig = .2;
New Window( "Example: Logistic Density",
	y = Graph Box(
		Y Scale( 0, 2 ),
		X Scale( -10, 10 ),
		Pen Color( "red" );
		Y Function( Logistic Density( x, mu, sig ), x );
		Text( {0, 1.8}, "mu=", Round( mu, 2 ) );
		Text( {0, 1.6}, "sig=", Round( sig, 2 ) );
	),
	H List Box(
		Slider Box( -4, 4, mu, y << reshow ),
		Text Box( "mu" )
	),
	H List Box(
		Slider Box( 0.01, 2, sig, y << reshow ),
		Text Box( "sig" )
	), 

);

```

### Logistic Distribution

**Syntaxe :** p = Logistic Distribution( x, mu, sigma )

**Description :** Renvoie la probabilité à x d’une distribution logistique avec paramètre de position mu et paramètre d’échelle sigma.

**JMP Version ajoutée :** Avant la version 14

```jsl

mu = 0;
sig = .2;
New Window( "Example: Logistic Distribution",
	y = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( -10, 10 ),
		Pen Color( "red" );
		Y Function( Logistic Distribution( x, mu, sig ), x );
		Text( {0.1, 0.9}, "mu=", Round( mu, 2 ) );
		Text( {0.1, 0.8}, "sig=", Round( sig, 2 ) );
	),
	H List Box(
		Slider Box( -4, 4, mu, y << reshow ),
		Text Box( " mu" )
	),
	H List Box(
		Slider Box( 0.01, 2, sig, y << reshow ),
		Text Box( " sig" )
	)
);

```

### Logistic Quantile

**Syntaxe :** q = Logistic Quantile( p, mu, sigma )

**Description :** Renvoie le quantile à p d’une distribution logistique avec paramètre de position mu et paramètre d’échelle sigma.

**JMP Version ajoutée :** Avant la version 14

```jsl

mu = 0;
sig = .2;
qq = .5;
New Window( "Example: Logistic Quantile",
	y = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( -10, 10 ),
		Pen Color( "red" );
		Y Function( Logistic Distribution( qq, mu, sig ), qq );
		Pen Color( "blue" );
		V Line( Logistic Quantile( qq, mu, sig ), 0, 1 );
		Text(
			{0.1, 0.9},
			" mu=",
			Round( mu, 2 ),
			" sig=",
			Round( sig, 2 ),
			" quantile=",
			Round( qq, 2 )
		);
	),
	H List Box(
		Slider Box( -4, 4, mu, y << reshow ),
		Text Box( " mu" )
	),
	H List Box(
		Slider Box( 0.01, 2, sig, y << reshow ),
		Text Box( " sig" )
	),
	H List Box(
		Slider Box( 0.01, 0.99, qq, y << reshow ),
		Text Box( " quantile" )
	)
);

```

### Logit

**Syntaxe :** y = Logit( p )

**Description :** Renvoie le logit de p, définit comme log(p / (1 - p)).

**JMP Version ajoutée :** Avant la version 14

```jsl

Logit( 0.95 );

```

### Logit Percent

**Syntaxe :** y = Logit Percent( p )

**Description :** La fonction Logit avec argument de 0 à 100, plutôt que de 0 à 1.

**JMP Version ajoutée :** Avant la version 14

```jsl

Logit Percent( 95.0 );

```

### Loglogistic Density

**Syntaxe :** y = Loglogistic Density( x, mu, sigma )

**Description :** Renvoie la densité à x d’une distribution log-logistique avec paramètre de position mu et paramètre d’échelle sigma.

**JMP Version ajoutée :** Avant la version 14

```jsl

mu = 0;
sig = .2;
New Window( "Example: Loglogistic Density",
	y = Graph Box(
		Y Scale( 0, .06 ),
		X Scale( 0, 60 ),
		Pen Color( "red" );
		Y Function( Loglogistic Density( x, mu, sig ), x );
		Text( {0, .055}, "mu=", Round( mu, 2 ) );
		Text( {0, .045}, "sig=", Round( sig, 2 ) );
	),
	H List Box( Slider Box( 0, 4, mu, y << reshow ), Text Box( "mu" ) ),
	H List Box(
		Slider Box( 0, 10, sig, y << reshow ),
		Text Box( "sig" )
	), 

);

```

### Loglogistic Distribution

**Syntaxe :** p = Loglogistic Distribution( x, mu, sigma )

**Description :** Renvoie la probabilité à x d’une distribution log-logistique avec paramètre de position mu et paramètre d’échelle sigma.

**JMP Version ajoutée :** Avant la version 14

```jsl

mu = 0;
sig = .2;
New Window( "Example: Loglogistic Distribution",
	y = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( 0, 60 ),
		Pen Color( "red" );
		Y Function( Loglogistic Distribution( x, mu, sig ), x );
		Text( {0.1, 0.9}, "mu=", Round( mu, 2 ) );
		Text( {0.1, 0.8}, "sig=", Round( sig, 2 ) );
	),
	H List Box(
		Slider Box( 0, 4, mu, y << reshow ),
		Text Box( " mu" )
	),
	H List Box(
		Slider Box( 0, 10, sig, y << reshow ),
		Text Box( " sig" )
	)
);

```

### Loglogistic Quantile

**Syntaxe :** q = Loglogistic Quantile( p, mu, sigma )

**Description :** Renvoie le quantile à p d’une distribution log-logistique avec paramètre de position mu et paramètre d’échelle sigma.

**JMP Version ajoutée :** Avant la version 14

```jsl

mu = 0;
sig = .2;
qq = .5;
New Window( "Example: Loglogistic Quantile",
	y = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( 0, 60 ),
		Pen Color( "red" );
		Y Function( Loglogistic Distribution( qq, mu, sig ), qq );
		Pen Color( "blue" );
		V Line( Loglogistic Quantile( qq, mu, sig ), 0, 1 );
		Text(
			{0.1, 0.9},
			" mu=",
			Round( mu, 2 ),
			" sig=",
			Round( sig, 2 ),
			" quantile=",
			Round( qq, 2 )
		);
	),
	H List Box(
		Slider Box( 0, 4, mu, y << reshow ),
		Text Box( " mu" )
	),
	H List Box(
		Slider Box( 0, 10, sig, y << reshow ),
		Text Box( " sig" )
	),
	H List Box(
		Slider Box( 0.01, 0.99, qq, y << reshow ),
		Text Box( " quantile" )
	)
);

```

### Lognormal Density

**Syntaxe :** y = Lognormal Density( x, mu, sigma )

**Description :** Renvoie la densité à x d’une distribution log-normale avec paramètre de position mu et paramètre d’échelle sigma.

**JMP Version ajoutée :** Avant la version 14

```jsl

mu = 0;
sig = 1;
New Window( "Example: Lognormal Density",
	y = Graph Box(
		Y Scale( 0, .15 ),
		X Scale( 0, 60 ),
		Pen Color( "red" );
		Y Function( Lognormal Density( x, mu, sig ), x );
		Text( {0, .14}, "mu=", Round( mu, 2 ) );
		Text( {0, .12}, "sig=", Round( sig, 2 ) );
	),
	H List Box( Slider Box( 0, 4, mu, y << reshow ), Text Box( "mu" ) ),
	H List Box(
		Slider Box( 0, 2, sig, y << reshow ),
		Text Box( "sig" )
	), 

);

```

### Lognormal Distribution

**Syntaxe :** p = Lognormal Distribution( x, mu, sigma )

**Description :** Renvoie la probabilité à x d’une distribution log-normale avec paramètre de position mu et paramètre d’échelle sigma.

**JMP Version ajoutée :** Avant la version 14

```jsl

mu = 0;
sig = 1;
New Window( "Example: Lognormal Distribution",
	y = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( 0, 60 ),
		Pen Color( "red" );
		Y Function( Lognormal Distribution( x, mu, sig ), x );
		Text( {0.1, 0.9}, "mu=", Round( mu, 2 ) );
		Text( {0.1, 0.8}, "sig=", Round( sig, 2 ) );
	),
	H List Box(
		Slider Box( 0, 4, mu, y << reshow ),
		Text Box( " mu" )
	),
	H List Box(
		Slider Box( 0, 2, sig, y << reshow ),
		Text Box( " sig" )
	)
);

```

### Lognormal Quantile

**Syntaxe :** q = Lognormal Quantile( p, mu, sigma )

**Description :** Renvoie le quantile à p d’une distribution log-normale avec paramètre de position mu et paramètre d’échelle sigma.

**JMP Version ajoutée :** Avant la version 14

```jsl

mu = 0;
sig = 1;
qq = .5;
New Window( "Example: Lognormal Quantile",
	y = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( 0, 60 ),
		Pen Color( "red" );
		Y Function( Lognormal Distribution( qq, mu, sig ), qq );
		Pen Color( "blue" );
		V Line( Lognormal Quantile( qq, mu, sig ), 0, 1 );
		Text(
			{0.1, 0.9},
			" mu=",
			Round( mu, 2 ),
			" sig=",
			Round( sig, 2 ),
			" quantile=",
			Round( qq, 2 )
		);
	),
	H List Box(
		Slider Box( 0, 4, mu, y << reshow ),
		Text Box( " mu" )
	),
	H List Box(
		Slider Box( 0, 3, sig, y << reshow ),
		Text Box( " sig" )
	),
	H List Box(
		Slider Box( 0.01, 0.99, qq, y << reshow ),
		Text Box( " quantile" )
	)
);

```

### Long Date

**Syntaxe :** s = Long Date( datetime, &lt;format&gt; )

**Description :** Renvoie une représentation locale longue d&apos;une valeur « date-heure » de JMP.

**JMP Version ajoutée :** Avant la version 14

```jsl

Long Date( Today() );

```

### Low Rank Symmetric Update BLAS

**Syntaxe :** y = Low Rank Symmetric Update BLAS( A, U, s )

**JMP Version ajoutée :** 17

```jsl

A = [2 0, 0 2];
U = [2 4, 3 5];
s = 2.5;
AUpdate = Low Rank Symmetric Update BLAS( A, U, s );

```

### Lowercase

**Syntaxe :** sl = Lowercase( s )

**Description :** Convertit les lettres majuscules en lettres minuscules dans la chaîne spécifiée. Les règles sur la casse varient localement.

**JMP Version ajoutée :** Avant la version 14

```jsl

Lowercase( "CAFÉ #23" );

```

### LPSolve

**Syntaxe :** {x, z} = LPSolve( A, b, c, L, U, neq, nle, nge, &lt;slackVars=0&gt; )

**Description :** Minimise la fonction objectif soumise aux contraintes données et renvoie une liste de deux éléments. Le premier élément de la liste, x, contient les variables de décision (et les variables d’écart si slackVars=1). Le deuxième élément de la liste, z, contient la valeur optimale de la fonction objectif (si elle existe). Les premiers cinq arguments sont des matrices. L’argument A est la matrice des coefficients de contrainte. L’argument b est la colonne des valeurs des contraintes de droite. L&apos;argument c est le vecteur des coefficients de coûts de la fonction objectif. Les arguments L et U sont respectivement les limites inférieure et supérieure des variables. Les arguments neq, nle et nge sont respectivement le nombre de contraintes d&apos;égalité, le nombre d&apos;inégalités inférieures ou égales et le nombre d&apos;inégalités supérieures ou égales. Notez que les contraintes doivent être répertoriées d&apos;abord comme égalités, puis comme inégalités inférieures ou égales, et enfin comme inégalités supérieures ou égales.

**JMP Version ajoutée :** Avant la version 14

```jsl

A = [5 -2 6, 2 4 0, 3 8 -4];
b = [17, 19, 14];
c = [9 6 -4];
L = [. 0 .];
U = [0 . .];
{x, z} = LPSolve( A, b, c, L, U, 1, 1, 1, 1 );
Show( x, z );

```

### Mail

**Syntaxe :** Mail( "address", "subject", "message", &lt;"attachment filepath"&gt; | { "attachment filepath", ...} )

**Description :** Crée un message électronique sortant comme spécifié si le système d&apos;exploitation le permet. Toutes les options ne fonctionneront pas sur toutes les versions de système d&apos;exploitation. Pour plus de détails, consultez l&apos;aide.

**JMP Version ajoutée :** Avant la version 14

```jsl

Mail(
	"test@example.com",
	"revelation",
	"JMP is great.",
	"$SAMPLE_DATA/Big Class.jmp"
);

```

### Main Menu

**Syntaxe :** menu = Main Menu( command, &lt;window name&gt; )

**Description :** Exécute la commande du menu principal spécifiée.

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

Main Menu( "Sample Index" );

```

**Exemple 2**

```jsl

Main Menu( "Help:Sample Index" );

```

### Make KFold Formula

**Syntaxe :** y = Make KFold Formula( folds, Y Columns( cols ), &lt;&lt;Stratification Columns( cols ), &lt;&lt;Grouping Columns( cols ) )

**Description :** Génère une colonne de validation à folds niveaux si utilisée dans une formule de colonne. Cette fonction JSL est principalement utilisée par la plate-forme Créer une colonne de validation pour générer des colonnes de formule.

**JMP Version ajoutée :** 17

**Exemple 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "KFold Validation",
	"Numeric",
	"Nominal",
	Formula( Make KFold Formula( 5, <<Y Columns( :height ) ) )
);

```

**Exemple 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Stratified KFold",
	"Numeric",
	"Nominal",
	Formula(
		Make KFold Formula(
			4,
			<<Y Columns( :height ),
			<<Stratification Columns( :sex )
		)
	)
);

```

### Make Validation Formula

**Syntaxe :** y = Make Validation Formula( rates, &lt;&lt;Stratification Columns( cols ), &lt;&lt;Grouping Columns( cols ), &lt;&lt;Cutpoint Column ( col ), &lt;&lt;Cutpoint Batch ID( col ), &lt;&lt;Determine cutpoints using( "Proportions"|"Numbers of Rows"|"Fixed Time or Date"|"Elapsed Time" ), &lt;&lt;Assign Extra Rows( "To Training"|"To Validation"|"To Test" ) )

**Description :** Génère une colonne de validation à deux ou trois niveaux lorsqu&apos;elle est utilisée dans une formule de colonne. L&apos;argument rates est une matrice 3 par 1 contenant les proportions d&apos;apprentissage, de validation et de tests, respectivement. Cette fonction JSL est principalement utilisée par la plate-forme Créer une colonne de validation pour générer des colonnes de formule.

**JMP Version ajoutée :** 15

**Exemple 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Validation",
	"Numeric",
	"Nominal",
	Formula( Make Validation Formula( [.6, .4, 0] ) ),
	Set Property( "Value Labels", {0 = "Training", 1 = "Validation"} )
);

```

**Exemple 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Validation",
	"Numeric",
	"Nominal",
	Formula(
		Make Validation Formula(
			[.6, .2, .2],
			<<Stratification Columns( :age )
		)
	),
	Set Property(
		"Value Labels",
		{0 = "Training", 1 = "Validation", 2 = "Test"}
	)
);

```

**Exemple 3**

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
dt << New Column( "Validation",
	"Numeric",
	"Nominal",
	Formula(
		Make Validation Formula(
			[20, 10, 4],
			<<Cutpoint Column( :Week of Year ),
			<<Cutpoint Batch ID( :ID ),
			<<Determine cutpoints using( "Numbers of Rows" )
		)
	),
	Set Property(
		"Value Labels",
		{0 = "Training", 1 = "Validation", 2 = "Test"}
	)
);

```

### Mandelbrot

**Syntaxe :** v = Mandelbrot( n, radius, x, y )

**Description :** calcule la valeur de la fonction de Mandelbrot sur x,y, en s&apos;arrêtant après n itérations ou lorsque le rayon est dépassé

**JMP Version ajoutée :** Avant la version 14

```jsl

grid = 50;
rmax = 0/*zero for smooth*/;
nmax = 50;// http://wikipedia.org/wiki/Mandelbrot_set 
New Window( "Mandelbrot - use magnifier to zoom in",
	g = Graph Box(
		X Scale( -3, 3 ),
		Y Scale( -2, 2 ),
		framesize( 600, 400 ),
		Gradient Function(
			Mandelbrot( nmax, rmax, a, b ), // return value: number of iterations before something interesting happened
			a, // standard GradientFunction stuff...
			b,
			Matrix( {0, nmax} ), // range to map the colors onto
			Z Color(
				{RGB Color( 0, 0, 0 ), RGB Color( 1, 0, 0 ),
				RGB Color( 1, 1, 0 ), RGB Color( 0, 1, 0 ),
				RGB Color( 0, 1, 1 ), RGB Color( 0, 0, 1 ),
				RGB Color( .3, .3, .4 )}
			),
			<<xgrid(
				X Origin(), X Origin() + X Range(),
				X Range() / (Floor( grid * H Size() / V Size() ))
			),
			<<ygrid(
				Y Origin(), Y Origin() + Y Range(),
				Y Range() / (Floor( grid ))
			), 

		)
	),
	H List Box(
		Slider Box( 2, 500, nmax, g << reshow ),
		Global Box( nmax )
	),
	H List Box(
		Slider Box( 0, 5, rmax, g << reshow ),
		Global Box( rmax )
	),
	H List Box(
		Slider Box( 2, 500, grid, g << reshow ),
		Global Box( grid )
	), 

);
g << Set X Axis(
	{Format( "Best", 15 ), Show Major Ticks( 0 ),
	Rotated Labels( "Parallel" )}
);
g << Set Y Axis(
	{Format( "Best", 15 ), Show Major Ticks( 0 ),
	Rotated Labels( "Parallel" )}
);

```

### Map Value

**Syntaxe :** Map Value(string | number, {key1, value1...|{key1...},{value1...}}, &lt;Unmatched(value)&gt;)

**Description :** Évaluer la valeur initiale et renvoyer le résultat correspondant ou un résultat par défaut.

**JMP Version ajoutée :** 15

**Exemple 1**

```jsl

Map Value( "celry", {"celry", "celery"} );

```

**Exemple 2**

```jsl

Map Value( "carrot", {"celry", "celery"}, Unmatched( "not found" ) );

```

**Exemple 3**

```jsl

Map Value( 10, {10, "celery", 11, "banana"} );

```

**Exemple 4**

```jsl

Map Value( 10, {{1, 2, 3}, {100, 200, 300}} );

```

### Marker

**Syntaxe :** Marker( &lt;rs&gt;, {x1, y1}, {x2, y2}, ... ); Marker( &lt;rs&gt;, xMatrix, yMatrix )

**Description :** Dessine des marqueurs aux coordonnées indiquées.

**JMP Version ajoutée :** Avant la version 14

```jsl

New Window( "Example",
	Graph Box( Marker( Marker State( 3 ), [11 44 77], [75 25 50] ) )
);

```

### Marker Of

**Syntaxe :** y = Marker Of( &lt;rs&gt; ); Marker Of( &lt;Row State( &lt;r&gt; )&gt; ) = y

**Description :** Renvoie la composante de marqueur de la valeur d&apos;état de ligne spécifiée. Si Marker Of est utilisé comme L-value, le marqueur de la ligne active (ou r-ième) de la table de données active est modifié.

**JMP Version ajoutée :** Avant la version 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Marker State( 5 );
Marker Of( Row State( 3 ) );
Row() = 3;
Marker Of();

```

### Marker Seg

**Syntaxe :** me = Marker Seg( x, y, &lt; Row States( dt | dt,[rows] | dt,{{rows}, ...} | {states} ) &gt;, &lt; Sizes( s ) &gt; )

**Description :** Renvoie un groupe d’affichage avec des marqueurs pour toutes les valeurs x et y.

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
sz = Column( "age" ) << get values;
aa = [=> 0];
yy = J( N Rows( xx ), 1, 0 );
For( ii = 1, ii <= N Rows( xx ), ii++,
	aa[xx[ii]]++;
	yy[ii] = aa[xx[ii]];
);
New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg( xx, yy, Row States( dt ), sizes( sz ) )
	)
);

```

**Exemple 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = [1 2 3 4 5];
yy = [2 3 4 5 6];
New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg( xx, yy, Row States( dt, {3, 4, 11, 7, 13} ) )
	)
);

```

**Exemple 3**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = [1 2 3 4 5];
yy = [2 3 4 5 6];
New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg( xx, yy, Row States( dt, 11 :: 15 ) )
	)
);

```

**Exemple 4**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = [1 2 3 4 5];
yy = [2 3 4 5 6];
New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg(
			xx,
			yy,
			Row States(
				dt, {{1, 2, 3}, {4, 5}, {6}, {7, 12, 15, 9}, {21, 8}}
			)
		)
	)
);

```

**Exemple 5**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = [1 2 3 4 5];
yy = [2 3 4 5 6];
New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg(
			xx,
			yy,
			Row States(
				{Color State( "Blue" ), Color State( "Orange" ),
				Color State( "Green" ), Color State( "Purple" ),
				Color State( "Red" )}
			)
		)
	)
);

```

### Marker Size

**Syntaxe :** Marker Size( n )

**Description :** Définit la taille des marqueurs dessinés dans le cadre des graphiques. 0 = point, 1 = petit, ...

**JMP Version ajoutée :** Avant la version 14

```jsl

New Window( "Example",
	Graph Box(
		Marker Size( 5 );
		Marker( Marker State( 3 ), [11 44 77], [75 25 50] );
	)
);

```

### Marker State

**Syntaxe :** rs = Marker State( marker )

**Description :** Renvoie une valeur d&apos;état de ligne avec la composante de marqueur définie comme la valeur spécifiée. L’argument marker indique un marqueur et peut être un entier positif, un caractère, un entier positif Unicode ou un caractère hexadécimal Unicode.

**JMP Version ajoutée :** Avant la version 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Marker State( 5 );
Marker Of( Row State( 3 ) );

```

### Match

**Syntaxe :** y = Match( x, v1, expr1, v2, expr2, ..., exprElse )

**Description :** Évalue et renvoie l&apos;argument exprN correspondant au premier argument vN qui est égal à x ou évalue et renvoie l’argument exprElse si aucune valeur n&apos;est égale à x.

**JMP Version ajoutée :** Avant la version 14

```jsl

Match( Year( Today() ),
	2013, "snake",
	2014, "horse",
	2015, "goat",
	"other"
);

```

### MatchMZ

**Syntaxe :** y = MatchMZ( x, v1, expr1, v2, expr2, ..., exprElse )

**Description :** Évalue et renvoie l&apos;argument exprN correspondant au premier argument vN qui est égal à x ou évalue et renvoie l’argument exprElse si aucune valeur n&apos;est égale à x. (La fonction MatchMZ() se comporte de la même façon que Match(), si ce n&apos;est que les valeurs manquantes sont traitées comme des 0.)

**JMP Version ajoutée :** Avant la version 14

```jsl

MatchMZ( Year( Today() ),
	2013, "snake",
	2014, "horse",
	2015, "goat",
	"other"
);

```

### Matrix

**Syntaxe :** y = Matrix( {{x11, ..., x1m}, {...}, {xn1, ..., xnm}} )y = Matrix( {x1, ..., xn} )y = Matrix( n, m )

**Description :** Construit une matrice n en fonction de m. Si vous spécifiez une liste de n listes n contenant chacune m valeurs de ligne, la matrice est formée par concaténation verticale des listes évaluées. Si vous spécifiez une seule liste de n éléments, la valeur de renvoi est un vecteur colonne n en fonction de 1. Si vous spécifiez deux arguments entiers, la valeur de renvoi est une matrice de zéros contenant n lignes et m colonnes.

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

Matrix( {{11, 22, 33}, {44, 55, 66}} );

```

**Exemple 2**

```jsl

Matrix( {{[1 2 3], 4, 5, 6, 7, 8, 9}} );

```

**Exemple 3**

```jsl

Matrix( {2, 3 + 7} );

```

**Exemple 4**

```jsl

Matrix( 2, 3 );

```

### Matrix Box

**Syntaxe :** y = Matrix Box( matrix, &lt; &lt;&lt;Column Names( "c1", "c2", ... )&gt;, &lt; &lt;&lt;Row Names( "r1", "r2", ... )&gt; )

**Description :** Renvoie une boîte d&apos;affichage pour afficher une matrice de nombres.

**JMP Version ajoutée :** Avant la version 14

```jsl

New Window( "Example",
	Matrix Box( [11 22 33, 44 55 66], <<RowNames( "First", "Second" ) )
);

```

### Matrix Mult

**Syntaxe :** y = Matrix Mult( A, B, ... ); y = A * B

**Description :** Effectue une multiplication de matrices. Les arguments de la matrice doivent être conformes : NCol(a)==NRow(b). Notez que A * B fonctionne également.

**JMP Version ajoutée :** Avant la version 14

```jsl

exMatA = [1 2 3, -2 0 -1, 0 1 1];
exMatB = [1 2, 1 2, 1 2];
exMatM1 = exMatA * exMatB;
exMatM2 = Matrix Mult( exMatA, exMatB );
exMatC = [1 2, 1 2];
exMatM3 = Matrix Mult( exMatA, exMatB, exMatC );
Show( exMatM1 );
Show( exMatM2 );
Show( exMatM3 );

```

### Matrix Mult BLAS

**Syntaxe :** y = Matrix Mult BLAS( A, B, ... )

**Description :** Effectue une multiplication de matrices. Les arguments de la matrice doivent être conformes : NCol(A)==NRow(B).

**JMP Version ajoutée :** 17

```jsl

exMatA = [1 2 3, -2 0 -1, 0 1 1];
exMatB = [1 2, 1 2, 1 2];
exMatM2 = Matrix Mult BLAS( exMatA, exMatB );

```

### Matrix Rank

**Syntaxe :** r = Matrix Rank( X )

**Description :** Renvoie le rang de la matrice X.

**JMP Version ajoutée :** 14

```jsl

Matrix Rank( [1 0 0, 0 1 0, 0 1 0] );

```

### Matrix To Blob

**Syntaxe :** m = Matrix To Blob( matrix, type, bytesEach, endian )

**Description :** Fait un blob à partir d&apos;une matrice en convertissant les éléments de la matrice en nombres entiers, signés ou non signés, 1, 2 ou 4 bytes ; ou en nombres à virgule flottante, 4 ou 8 bytes.

**JMP Version ajoutée :** Avant la version 14

```jsl

Matrix To Blob( [3.14, 1.414], "float", 4, "big" );

```

### Max

**Syntaxe :** y = Max( x1, ... ); y = Maximum( x1, ... )

**Description :** Renvoie la valeur maximum parmi les arguments ou les valeurs dans un argument unique de matrice ou de liste.

**JMP Version ajoutée :** Avant la version 14

```jsl

Eval List( {Max( Pi(), e() ), Max( [33 44 22] )} );

```

### Maximize

**Syntaxe :** Maximize( expr, {x1, x2, ...} );Maximize( expr, {x1( low1, up1 ), x2( low2, up2 ), ...}, &lt;&lt;MaxIter( 250 ), &lt;&lt;Tolerance( .00000001 ), &lt;&lt;details(both | returnDetails | displaySteps), &lt;&lt;gradient(), &lt;&lt;hessian(), method(NR | SR1), &lt;&lt;useNumericDeriv(True))

**Description :** Trouve les valeurs des arguments de la fonction, communiquées dans la liste {x1, x2, ...}, qui maximisent l&apos;expression expr. Vous pouvez spécifier des limites inférieures et supérieures pour chaque argument entre parenthèses à la suite du nom de l&apos;argument. Si expr n&apos;est pas une fonction concave, Maximize pourrait trouver un maximum local au lieu du maximum global. Si cela pose problème, essayez plusieurs valeurs de départ. Maximize fonctionne également mieux pour les fonctions avec une dérivée seconde continue. Les arguments supplémentaires de la fonction Maximize vous permettent de définir le nombre maximum d&apos;itérations, la tolérance pour la convergence, et d&apos;afficher davantage de détails sur l&apos;optimisation. Cliquez sur le bouton de la rubrique Aide pour davantage d&apos;informations sur les arguments facultatifs.

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

/*Simple example*/ 
x = 0;
y = 0;
maxf = Maximize( ((2 * x ^ 2 + 12 * x * y - y * 3)), {x, y} );
Eval List( {x, y, maxf} );

```

**Exemple 2**

```jsl

/*Find the MLE for a Normal Distribution with a random sample of 3 observations*/
x = [3 4 5]; /* observed values*/ 
n = 3;
logDens = Expr(
	(-n / 2) * Log( 2 * Pi() * sigSq )
	-Summation( i = 1, 3, ((x[i] - mu) ^ 2) ) / (2 * sigSq)
);
mu = 3;
sigSq = 1;/*initial values*/ 
{maxReached, iters, gradient, hessian} =
Maximize( logDens, {mu, sigSq( 0, . )}, <<details( both ) );

```

**Exemple 3**

```jsl

/*Simple example with all optional arguments*/ 
x = 0;
y = 0;
{objVal, iters, gradient, hessian} =
Maximize(
	((2 * x ^ 2 + 12 * x * y - y * 3)),
	{x( -1, 1 ), y( -1, 1 )},
	<<maxIter( 200 ),
	<<tolerance( 10 ^ -6 ),
	<<details( both )
);

```

### Maximum

**Syntaxe :** y = Max( x1, ... ); y = Maximum( x1, ... )

**Description :** Renvoie la valeur maximum parmi les arguments ou les valeurs dans un argument unique de matrice ou de liste.

**JMP Version ajoutée :** Avant la version 14

```jsl

Eval List( {Max( Pi(), e() ), Max( [33 44 22] )} );

```

### MDYHMS

**Syntaxe :** s = MDYHMS( datetime, &lt;format&gt; )

**Description :** Renvoie une représentation d&apos;une valeur « date-heure » de JMP dans l&apos;ordre suivant : mois, jour, année, heure, minute, seconde.

**JMP Version ajoutée :** Avant la version 14

```jsl

MDYHMS( Today() );

```

### Mean

**Syntaxe :** y = Mean( x1, ... )

**Description :** Renvoie la moyenne arithmétique des arguments ou des valeurs dans un argument unique de matrice ou de liste.

**JMP Version ajoutée :** Avant la version 14

```jsl

Eval List( {Mean( Pi(), e() ), Mean( [33 44 22 20 30] )} );

```

### Median

**Syntaxe :** y = Median( x1, ... )

**Description :** Renvoie la médiane des arguments combinés, lesquels peuvent être des arguments scalaires, de matrice ou de liste.

**JMP Version ajoutée :** 15

```jsl

Median( [1.2, 1.5, 10, 25, 31, 40, 50, 99, 1000, 5000, 25000, 100000] );

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
			complex(
				real * y:real - imag * y:imag,
				imag * y:real + real * y:imag
			)
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

### Min

**Syntaxe :** y = Min( x1, ... ); y = Minimum( x1, ... )

**Description :** Renvoie la valeur minimum parmi les arguments ou les valeurs dans un argument unique de matrice ou de liste.

**JMP Version ajoutée :** Avant la version 14

```jsl

Eval List( {Min( Pi(), e() ), Min( [33 44 22] )} );

```

### Minimize

**Syntaxe :** Minimize( expr, {x1, x2, ...} );Minimize( expr, {x1( low1, up1 ), x2( low2, up2 ), ...}, &lt;&lt;MaxIter( 250 ), &lt;&lt;Tolerance( .00000001 ), &lt;&lt;details(both | returnDetails | displaySteps), &lt;&lt;gradient(), &lt;&lt;Hessian(), &lt;&lt;method(NR | SR1), &lt;&lt;useNumericDeriv(True))

**Description :** Trouve les valeurs des arguments de la fonction, communiquées dans la liste {x1, x2, ...}, qui minimisent l&apos;expression expr. Vous pouvez spécifier des limites inférieures et supérieures pour chaque argument entre parenthèses à la suite du nom de l&apos;argument. Si expr n&apos;est pas une fonction convexe, Minimize pourrait trouver un minimum local au lieu du minimum global. Si cela pose problème, essayez plusieurs valeurs de départ. Minimize fonctionne également mieux pour les fonctions avec une dérivée seconde continue. Les arguments supplémentaires de la fonction Minimize vous permettent de définir le nombre maximum d&apos;itérations, la tolérance pour la convergence, et d&apos;afficher davantage de détails sur l&apos;optimisation. Cliquez sur le bouton de la rubrique Aide pour davantage d&apos;informations sur les arguments facultatifs.

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

/*Simple Example*/
x = 0;
y = 0;
minFun = Minimize( (y * 3 - 2 * x ^ 2 - 12 * x * y), {x, y} );
Eval List( {x, y, minFun} );

```

**Exemple 2**

```jsl

/*Nonlinear Sums of Squares Example*/
x = [1.309, 1.471, 1.49, 1.565, 1.611, 1.68];
y = [2.138, 3.421, 3.597, 4.34, 4.882, 5.66];
sseExpr = Expr(
	Summation( i = 1, 6, (y[i] - b1 * x[i] ^ b2) ^ 2 )
);
b1 = 1;
b2 = 5;
{objVal, iters, gradient, hessian} =
Minimize(
	sseExpr,
	{b1, b2},
	<<details( both ),
	<<tolerance( 10 ^ -16 )
);

```

**Exemple 3**

```jsl

/*Simple example with some optional arguments*/
x = 0;
y = 0;
{objVal, iters, gradient, hessian} =
Minimize(
	((2 * x ^ 2 + 12 * x * y - y * 3)),
	{x( -1, 1 ), y( -1, 1 )},
	<<maxIter( 200 ),
	<<tolerance( 10 ^ -6 ),
	<<details( both )
);

```

**Exemple 4**

```jsl

/*Example with gradient, hessian, and method(nr) options*/
xx = [1.309, 1.471, 1.49, 1.565, 1.611, 1.68];
yy = [2.138, 3.421, 3.597, 4.34, 4.882, 5.66];
tmp3 = Expr(
	Summation( i = 1, 6, (yy[i] - b1 * xx[i] ^ b2) ^ 2 )
);
b1 = 1;
b2 = 5;
Minimize(
	tmp3,
	{b1, b2},
	<<details( both ),
	<<tolerance( 10 ^ -10 ),
	<<Method( nr ),
	<<gradient(
		{Summation(
			i = 1,
			6,
			-2 * xx[i] ^ b2 * (yy[i] - b1 * xx[i] ^ b2)
		), Summation(
			i = 1,
			6,
			2 * (b1 * Ln( xx[i] ) * xx[i] ^ b2) * (b1 * xx[i] ^ b2 - yy
			[i])
		)}
	),
	<<hessian(
		{{Summation( i = 1, 6, 2 * xx[i] ^ (2 * b2) ),
		Summation(
			i = 1,
			6,
			2 * Ln( xx[i] ) * xx[i] ^ b2 * (2 * b1 * xx[i] ^ b2 - yy[i]
			)
		)}, {Summation(
			i = 1,
			6,
			2 * b1 * Ln( xx[i] ) ^ 2 * xx[i] ^ b2 * (2 * b1 * xx[i] ^
			b2 - yy[i])
		)}}
	)
);

```

**Exemple 5**

```jsl

/*Example with usNumericDeriv and method(sr1) options*/
xx = [1.309, 1.471, 1.49, 1.565, 1.611, 1.68];
yy = [2.138, 3.421, 3.597, 4.34, 4.882, 5.66];
tmp3 = Expr(
	Summation( i = 1, 6, (yy[i] - b1 * xx[i] ^ b2) ^ 2 )
);
b1 = 1;
b2 = 5;
{objValue, iter, gradient, hessian} =
Minimize(
	tmp3,
	{b1, b2},
	<<details( both ),
	<<tolerance( 10 ^ -16 ),
	<<Method( sr1 ),
	<<useNumericDeriv( True )
);

```

### Minimum

**Syntaxe :** y = Min( x1, ... ); y = Minimum( x1, ... )

**Description :** Renvoie la valeur minimum parmi les arguments ou les valeurs dans un argument unique de matrice ou de liste.

**JMP Version ajoutée :** Avant la version 14

```jsl

Eval List( {Min( Pi(), e() ), Min( [33 44 22] )} );

```

### Minus

**Syntaxe :** y = -x; y = Minus( x )

**Description :** Opposé de x, qui peut être un nombre, une matrice ou une liste de nombres.

**JMP Version ajoutée :** Avant la version 14

```jsl

-Pi();

```

### Minute

**Syntaxe :** min = Minute( datetime )

**Description :** Renvoie les minutes d&apos;une valeur « date-heure » de JMP, 0 - 59.

**JMP Version ajoutée :** Avant la version 14

```jsl

Minute( Today() );

```

### Mod

**Syntaxe :** z = Modulo( x, y )

**Description :** Renvoie le reste de la division de x par y. Le reste aura le même signe que x.

**JMP Version ajoutée :** Avant la version 14

```jsl

Modulo( 10, 3 );

```

### Mode

**Syntaxe :** y = Mode( list or matrix )

**Description :** Choisit l&apos;élément le « plus fréquent » d&apos;une matrice ou d&apos;une liste, la valeur inférieure pour les ex-aequos

**JMP Version ajoutée :** Avant la version 14

```jsl

Show( Mode( [1, 2, 3, 2, 1] ), Mode( {"a", "b", "c", "b", "a", "b"} ) );

```

### Modified Internal Rate of Return

**Syntaxe :** x = Modified Internal Rate of Return( values, finance_rate, reinvest_rate );x = Modified Internal Rate of Return( finance_rate, reinvest_rate, value1, value2, &lt;value3, ...&gt; )

**Description :** Renvoie le taux de rentabilité interne pour une série de flux de trésorerie en fonction du coût de l&apos;investissement et de l&apos;intérêt sur le réinvestissement des liquidités. Équivalent à la fonction MIRR de Microsoft Excel. Le deuxième prototype de la fonction n’accepte que des arguments scalaires.

**JMP Version ajoutée :** Avant la version 14

```jsl

Modified Internal Rate of Return( [-10000, 1000, 900, 950], .1, -.12 );
Modified Internal Rate of Return( .1, -.12, -10000, 1000, 900, 950 );

```

### Modulo

**Syntaxe :** z = Modulo( x, y )

**Description :** Renvoie le reste de la division de x par y. Le reste aura le même signe que x.

**JMP Version ajoutée :** Avant la version 14

```jsl

Modulo( 10, 3 );

```

### Month

**Syntaxe :** mon = Month( datetime )

**Description :** Renvoie le mois d&apos;une valeur « date-heure » de JMP, 1 - 12.

**JMP Version ajoutée :** Avant la version 14

```jsl

Month( Today() );

```

### MouseBox

**Syntaxe :** box = MouseBox( displayBoxArgs )

**Description :** Renvoie une boîte qui peut faire des rappels JSL pour les actions de souris.

**JMP Version ajoutée :** Avant la version 14

```jsl

New Window( "Example",
	MouseBox(/*first sibling*/Text Box( "drag from here" ),
		<<setDragText( "hello" ),
		<<setTooltip( "source" ),
		<<setDragEnable( 1 ),
		<<setDragBegin(/* decide if a drag is allowed */
			Function( {this, clickpt},
				"magic text";/* 0.0 to prevent the drag.  1.0 is the same as 'this<<getDragText' */
			)
		),
		<<setDragEnd(/* clean up after a drag finishes or cancels */
			Function( {this, clickpt, how}, /* how=move,copy,ignore */
				If(
					how != "ignore" & !Is Empty( this << getDestBox )
					 & this << getDestBox == this << sib, /* the getDestBox check makes sure the destination of the drag-and-drop was my sibling and not some other program beyond our control */
					(this << child) <<
					setText(
						"done!" /* 'move' suggests clearing the source */
					)
				)
			)
		)
	),
	MouseBox(/*second sibling*/Text Box( "drag to here" ),
		<<setTooltip( "destination" ),
		<<setDropEnable( 1 ),
		<<setDropTrack(/* decide if dropping is allowed, before the drop.  The getSourceBox check makes sure the source of the drag-and-drop is my sibling, and not some other program */
			Function( {this, clickpt},
				If(
					!Is Empty( this << getSourceBox ) & this == (this
					 << getSourceBox) << sib,
					1, /*else*/0
				)
			)
		),
		<<setDropCommit(/* accept the drop */
			Function( {this, clickpt, text},
				(this << child) << setText( text )
			)
		)
	)
);

```

### Mousetrap

**Syntaxe :** Mousetrap( dragScript, &lt;mouseUpScript&gt; )

**Description :** Évalue de façon répétée l’expression dragScript lorsque vous cliquez avec la souris sur le graphique et que celle-ci n&apos;est pas gérée par un autre objet graphique. Avant l&apos;exécution du script, les valeurs globales x et y sont définies par le pointeur de la souris, elles sont rétablies par la suite à leurs valeurs d&apos;origine. L’expression mouseUpScript est exécutée une fois que le bouton de la souris est relâché.

**JMP Version ajoutée :** Avant la version 14

```jsl

New Window( "Example",
	exx = 20;
	exy = 50;,
	Graph Box(
		Frame Size( 200, 200 ),
		Mousetrap(
			exx = x;
			exy = y;
		);
		Circle( {0, 0}, Sqrt( exx * exx + exy * exy ) );
	)
);

```

### Move Directory

**Syntaxe :** rc = Move Directory( from, to )

**Description :** Déplace un répertoire d’un endroit à un autre. Renvoie 1 si le répertoire a été déplacé. Renvoie 0 si le répertoire n&apos;a pas pu être déplacé. Génère une erreur si le chemin est incorrect ou n&apos;existe pas.

**JMP Version ajoutée :** Avant la version 14

```jsl

Delete Directory( "$TEMP/subB" );
Delete Directory( "$TEMP/Loss Function Templates" );
rc0 = Copy Directory( "$SAMPLE_DATA/Loss Function Templates", "$TEMP" );
Create Directory( "$TEMP/subB" );
rc1 = Move Directory( "$TEMP/Loss Function Templates", "$TEMP/subB" );
rc2 = Directory Exists( "$TEMP/Loss Function Templates" );
rc3 = Directory Exists( "$TEMP/subB" );
rc4 = Delete Directory( "$TEMP/subB" );
rc5 = Directory Exists( "$TEMP/subB" );
Char( rc0 ) || " " || Char( rc1 ) || " " || Char( rc2 ) || " " ||
Char( rc3 ) || " " || Char( rc4 ) || " " || Char( rc5 );/* 1 1 0 1 1 0 */

```

### Move File

**Syntaxe :** rc = Move File( from, to )

**Description :** Déplace un fichier d’un endroit à un autre. Renvoie 1 si le fichier a été déplacé. Renvoie 0 si le fichier n&apos;a pas pu être déplacé. Génère une erreur si le chemin est incorrect ou n&apos;existe pas.

**JMP Version ajoutée :** Avant la version 14

```jsl

If( File Exists( "$TEMP/y.jmp" ),
	Delete File( "$TEMP/y.jmp" )
);
rc0 = Copy File(
	"$SAMPLE_DATA/Loss Function Templates/Normal.jmp",
	"$TEMP/x.jmp"
);
rc1 = Move File( "$TEMP/x.jmp", "$TEMP/y.jmp" );
rc2 = File Exists( "$TEMP/x.jmp" );
rc3 = File Exists( "$TEMP/y.jmp" );
rc4 = Delete File( "$TEMP/y.jmp" );
rc5 = File Exists( "$TEMP/y.jmp" );
Char( rc0 ) || " " || Char( rc1 ) || " " || Char( rc2 ) || " " ||
Char( rc3 ) || " " || Char( rc4 ) || " " || Char( rc5 );/* 1 1 0 1 1 0 */

```

### Move to Project

**Syntaxe :** Move to Project(&lt;Source(project)&gt;, &lt;Destination(project)&gt;, &lt;Windows({list of windows to move})&gt;)

**Description :** Déplace une ou plusieurs fenêtres dans un projet, à l&apos;extérieur d&apos;un projet ou entre plusieurs projets. Seule Source ou Destination doit être spécifiée ; l&apos;autre sera associée par défaut au projet en cours (Utilisez uniquement Source pour déplacer des fenêtres dans le projet en cours, et uniquement Destination pour déplacer des fenêtres à l&apos;extérieur du projet en cours). Une fenêtre de table de données sera déplacée avec les rapports auxquels elle est associée, bien qu&apos;il ne soit pas nécessaire d&apos;en spécifier plusieurs dans l&apos;argument Windows. En l&apos;absence de spécification, l&apos;argument Windows déplacera par défaut toutes les fenêtres ouvertes dans le projet source.

**JMP Version ajoutée :** 14

**Exemple 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
report = dt << Run Script( "Bivariate" );
                              
project = New Project();
                              
Move to Project( destination( project ), windows( {report} ) );

```

**Exemple 2**

```jsl

project = Open( "$SAMPLE_PROJECTS/Sports.jmpprj" );
Move to Project( Source( project ) );
project << Close Window();

```

### Moving Average

**Syntaxe :** y = Moving Average( x, weighting, &lt;before=-1&gt;, &lt;after=0&gt;, &lt;partial window is missing=0&gt; )

**Description :** Renvoie une matrice des moyennes mobiles pour la matrice des entrées. before et after déterminent l&apos;étendue (« fenêtre ») des éléments dont la moyenne est à calculer, où before peut être -1 pour indiquer tous les éléments a priori. Si weighting est égal à 1, tous les éléments ont une pondération égale. Si weighting est égal à 0, les éléments ont des pondérations linéairement incrémentielles. Sinon, weighting est le paramètre pour la pondération exponentielle (EWMA). partial window is missing indique si les moyennes sont rapportées lorsque certains voisins ne sont pas présents, ce qui peut se produire aux extrémités ou à proximité des valeurs manquantes. Si partial window is missing est non nul, les valeurs manquantes sont rapportées pour les fenêtres partielles.

**JMP Version ajoutée :** Avant la version 14

```jsl

Eval List(
	{Moving Average( [1 2 1 2 3 4 9 9 9 9 9], 1, 3 ),
	Moving Average( [1 2 1 2 3 4 9 9 9 9 9], 0, 2, 2 ),
	Moving Average( [1 2 1 2 . 4 9 9 9 9 9], 1, 1, 1, 1 ),
	Moving Average( [1 2 1 2 3 4 9 9 9 9 9], 0.5 )}
);

```

### Multiple File Import

**Syntaxe :** mfiObj = Multiple File Import();

**Description :** Crée un objet Importation de plusieurs fichiers. L&apos;objet accepte les messages pour définir un dossier, filtrer des fichiers et importer. Pour ouvrir une boîte de dialogue, utilisez le message « Créer une fenêtre ». Pour importer immédiatement, utilisez le message « Importer les données » qui renvoie la liste des tables de données créées.

**JMP Version ajoutée :** 14

**Exemple de scriptage**

```jsl


mfi = Multiple File Import();
mfi << Set Folder( "$SAMPLE_IMPORT_DATA" );
mfi << Set Name Filter( "*.txt" );
mfi << Set Name Enable( 1 );
tables = mfi << Import Data();

```

**Exemple interactif**

```jsl

// use the save-script-to-script-window button 
// in the MFI dialog to see more messages
// for filtering files and controlling the import
Multiple File Import(
	<<Set Folder( "$DESKTOP" ),
	<<Set Name Filter( "*.csv;" ),
	<<Set Name Enable( 1 )
) << Create Window;

```

### Multiply

**Syntaxe :** y = x0 * x1; y = Multiply( x0, x1, ... )

**Description :** Multiplie tous les arguments, qui peuvent être des nombres, des matrices ou des listes de nombres.

**JMP Version ajoutée :** Avant la version 14

```jsl

2 * Pi();

```

### Multiply To

**Syntaxe :** y *= x; Multiply To( y, x )

**Description :** Multiplie une variable ou une liste de variables par une valeur.

**JMP Version ajoutée :** Avant la version 14

```jsl

ex = 3;
ex *= 2;
ex;

```

### Multivariate Normal Impute

**Syntaxe :** y = Multivariate Normal Impute( yVec, meanYvec, symCovMat, colMin, colMax )

**Description :** Renvoie un vecteur réponse avec des valeurs imputées aux valeurs manquantes du vecteur réponses yVec. Les imputations se basent sur une distribution normale multivariée avec un vecteur de moyenne meanYvec et une matrice de covariance symétrique symCovMat. Les arguments facultatifs colMin et colMax sont les vecteurs respectifs des minimums et des maximums des colonnes. Ces arguments donnent les limites pour les imputations.

**JMP Version ajoutée :** Avant la version 14

```jsl

mat = [0.430735257211985 -0.935632420013493 . 0.424649913158299,
. -0.687720061441453 0.29665732536624 -1.94898001941576,
-0.0425472526673373 0.463229145080277 0.635619352779951 .];
cov = Covariance( mat, <<"Pairwise"/*, <<"shrink"*/ );
colMean = V Mean( mat );
colMin = V Min( mat );
colMax = V Max( mat );
For( it = 1, it <= N Row( mat ), it++,
	mat[it, 0] =
	Multivariate Normal Impute(
		mat[it, 0],
		colMean,
		cov,
		colMin,
		colMax
	)`
);
Print( mat );

```

### Munger

**Syntaxe :** r = Munger( s, startPos, findStringOrNChars, &lt;replaceString&gt; )

**Description :** Recherche dans l’argument s une sous-chaîne ou une position en fonction de la combinaison d’arguments.

**JMP Version ajoutée :** Avant la version 14

```jsl

Eval List(
	{Munger( "over there", 1, "t", "" ),
	Munger( "17 June 2000", 4, 4, "March" )}
);

```

### N Arg

**Syntaxe :** n = N Arg( expr )

**Description :** Renvoie le nombre d&apos;arguments de la tête de l&apos;expression évaluée.

**JMP Version ajoutée :** Avant la version 14

```jsl

N Arg( Expr( Sum( a, b, c ) ) );

```

### N Arg Expr

**Syntaxe :** n = N Arg Expr( expr )

**Description :** Renvoie le nombre d&apos;arguments de la tête de l&apos;expression. Cette fonction est déconseillée. Veuillez plutôt utiliser N Arg().

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

// See Example 2 for the deprecated N Arg Expr() equivalent
N Arg( Expr( Sum( a, b, c ) ) );

```

**Exemple 2**

```jsl

// Deprecated
N Arg Expr( Sum( a, b, c ) );

```

### N Choose K

**Syntaxe :** m = N Choose K( n, k )

**Description :** Renvoie n! / (k! * (n - k)!), qui est le nombre de façons de choisir k éléments parmi n, en ignorant l&apos;ordre.

**JMP Version ajoutée :** Avant la version 14

```jsl

N Choose K( 5, 3 );

```

### N Col

**Syntaxe :** y = N Col(); y = N Col( dataTable ); y = N Col( matrix )

**Description :** Renvoie le nombre de colonnes de la table de données active, dans une table de données spécifiée ou dans une matrice.

**JMP Version ajoutée :** Avant la version 14

```jsl

N Col( [11 22, 33 44] );

```

### N Cols

**Syntaxe :** y = N Cols(); y = N Cols( dataTable ); y = N Col( matrix )

**Description :** Renvoie le nombre de colonnes de la table de données active, dans une table de données spécifiée ou dans une matrice.

**JMP Version ajoutée :** Avant la version 14

```jsl

N Col( [11 22, 33 44] );

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

New Window( "boxes",
	hlist = H List Box( Button Box( "a" ), Button Box( "b" ) )
);
N Items( hlist );

```

### N Missing

**Syntaxe :** y = N Missing( x1, x2, ... )

**Description :** Renvoie le nombre de valeurs manquantes parmi les arguments.

**JMP Version ajoutée :** Avant la version 14

```jsl

N Missing( 1, 2, ., 3, [11 22 . .], 4 );

```

### N Row

**Syntaxe :** y = N Row(); y = N Row( dt ); y = N Row( matrix )

**Description :** Renvoie le nombre de lignes dans la table de données en cours, une table de données spécifiée ou une matrice.

**JMP Version ajoutée :** Avant la version 14

```jsl

N Row( [11 22, 33 44] );

```

### N Rows

**Syntaxe :** y = N Rows(); y = N Rows( dt ); y = N Rows( matrix )

**Description :** Renvoie le nombre de lignes dans la table de données en cours, une table de données spécifiée ou une matrice.

**JMP Version ajoutée :** Avant la version 14

```jsl

N Rows( [11 22, 33 44] );

```

### N Table

**Syntaxe :** n = N Table()

**Description :** Renvoie le nombre de tables de données actuellement ouvertes.

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
N Table();

```

**Exemple 2**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Open( "$SAMPLE_DATA/Cars.jmp" );
Open( "$SAMPLE_DATA/Solubility.jmp" );
d = {};
For( i = 1, i <= N Table(), i++,
	d[i] = Data Table( i ) << GetName
);
d;

```

### Name

**Syntaxe :** Name(string)

**Description :** Un nom permet simplement d&apos;appeler un élément. Les noms sont utilisés pour les variables et les fonctions, et peuvent être utilisés directement dans les scripts si certaines règles sont respectées. Si le nom commence par un caractère alphabétique ou un trait bas, suivi de caractères alphanumériques, d&apos;un espace, de symboles mathématiques Unicode et de certains signes de ponctuation (apostrophes (’), pourcentages (%), points (.), barres obliques inversées (\\), et traits bas (_)), alors il peut être utilisé directement dans les scripts. Les noms qui ne respectent pas ces règles peuvent être utilisés à l&apos;aide du mot-clé du Nom().

**JMP Version ajoutée :** 14

```jsl

Name( "taxable income(2011)" ) = 456000;
tax = .25;
Print( tax * Name( "taxable income(2011)" ) );

```

### Name Expr

**Syntaxe :** y = Name Expr( x )

**Description :** Renvoie la valeur d&apos;un symbole, sans l&apos;évaluer s&apos;il s&apos;agit d&apos;une expression.

**JMP Version ajoutée :** Avant la version 14

```jsl

ex = Expr( 1 + 2 );
Eval List( {ex, Name Expr( ex )} );

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

### NChooseK Matrix

**Syntaxe :** m = NChooseK Matrix( n, k )

**Description :** Crée une matrice de nChooseK(n,k) lignes et k colonnes formant toutes les combinaisons de k entiers compris entre 1 et n.

**JMP Version ajoutée :** Avant la version 14

```jsl

Print( NChooseK Matrix( 5, 3 ) );

```

### Neg Binomial Distribution

**Syntaxe :** cumprob = Neg Binomial Distribution( p, n, k )

**Description :** Renvoie la probabilité qu&apos;une variable aléatoire d’une distribution négative binomiale soit inférieure ou égale à k, où p est la probabilité de succès et n est le nombre de succès.

**JMP Version ajoutée :** Avant la version 14

```jsl

exnbdp = 0.5;
exnbdn = 10;
New Window( "Example: Neg Binomial Distribution",
	exnbdy = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( -1, 41 ),
		Pen Color( "red" ),
		Pen Size( 2 );
		For( exnbdk = 0, exnbdk < 100, exnbdk++,
			H Line(
				exnbdk,
				exnbdk + 1,
				Neg Binomial Distribution(
					exnbdp,
					Round( exnbdn ),
					exnbdk
				)
			);
			V Line(
				exnbdk + 1,
				Neg Binomial Distribution(
					exnbdp,
					Round( exnbdn ),
					exnbdk
				),
				Neg Binomial Distribution(
					exnbdp,
					Round( exnbdn ),
					exnbdk + 1
				)
			);
		);
		Text(
			{30, 0.07},
			"n=",
			Round( exnbdn ),
			" p=",
			Round( exnbdp, 2 )
		);
	),
	H List Box(
		Slider Box( 0, 1, exnbdp, exnbdy << reshow ),
		Text Box( " p" )
	),
	H List Box(
		Slider Box( 1, 20, exnbdn, exnbdy << reshow ),
		Text Box( " n" )
	)
);

```

### Neg Binomial Probability

**Syntaxe :** prob = Neg Binomial Probability( p, n, k )

**Description :** Renvoie la probabilité qu&apos;une variable aléatoire d’une distribution négative binomiale soit égale à k, où p  est la probabilité de succès et n est le nombre de succès.

**JMP Version ajoutée :** Avant la version 14

```jsl

exnbpp = 0.5;
exnbpn = 10;
New Window( "Example: Neg Binomial Probability",
	exnbpy = Graph Box(
		Y Scale( 0, 0.3 ),
		X Scale( -1, 41 ),
		Pen Color( "red" ),
		Pen Size( 2 );
		For( exnbpk = 0, exnbpk < 100, exnbpk++,
			V Line(
				exnbpk,
				0,
				Neg Binomial Probability( exnbpp, exnbpn, exnbpk )
			)
		);
		Text(
			{30, 0.27},
			"n=",
			Round( exnbpn ),
			" p=",
			Round( exnbpp, 2 )
		);
	),
	H List Box(
		Slider Box( 0, 1, exnbpp, exnbpy << reshow ),
		Text Box( " p" )
	),
	H List Box(
		Slider Box( 0, 40, exnbpn, exnbpy << reshow ),
		Text Box( " n" )
	)
);

```

### Negative Binomial Distribution

**Syntaxe :** cumprob = Negative Binomial Distribution( k, lambda, sigma )

**Description :** Renvoie la probabilité qu&apos;une variable aléatoire distribuée selon une distribution binomiale négative soit égale à k, où lambda est le paramètre de position, sigma est le paramètre d&apos;échelle et k est le dénombrement pertinent.

**JMP Version ajoutée :** 19

```jsl

lambda = 20;
sigma = 2;
New Window( "Example: Negative Binomial Distribution",
	ppy = Graph Box(
		Y Scale( 0, 1.01 ),
		X Scale( -1, 40 ),
		Pen Color( "red" ),
		Pen Size( 1 );
		For( k = 0, k <= 40, k++,
			H Line(
				k,
				k + 1,
				Negative Binomial Distribution( k, lambda, sigma )
			);
			V Line(
				k + 1,
				Negative Binomial Distribution( k, lambda, sigma ),
				Negative Binomial Distribution( k + 1, lambda, sigma )
			);
		);
		Text( {2, 0.95}, "\!U03BB=", Round( lambda, 2 ) );
		Text( {2, 0.87}, "\!U03C3=", Round( sigma, 2 ) );
	),
	H List Box(
		Slider Box( 3, 40, lambda, ppy << reshow ),
		Text Box( " \!U03BB" )
	),
	H List Box(
		Slider Box( .01, 5, sigma, ppy << reshow ),
		Text Box( " \!U03C3" )
	)
);

```

### Negative Binomial Probability

**Syntaxe :** prob = Negative Binomial Probability( k, lambda, sigma )

**Description :** Renvoie la probabilité qu&apos;une variable aléatoire distribuée selon une distribution binomiale négative soit égale à k, où lambda est le paramètre de position, sigma est le paramètre d&apos;échelle et k est le dénombrement pertinent.

**JMP Version ajoutée :** 19

```jsl

lambda = 5;
sigma = 2;
New Window( "Poisson and Negative Binomial",
	clty = Graph Box(
		Y Scale( 0, 0.3 ),
		X Scale( -1, 20.5 ),
		Pen Color( "red" ),
		Pen Size( 2 );
		For( x = 0, x <= 20, x++,
			Pen Color( "red" );
			V Line( x, 0, Poisson Probability( lambda, x ) );
			Pen Color( "blue" );
			V Line(
				x + 0.35,
				0,
				Negative Binomial Probability( x, lambda, sigma )
			);
		);
		Text(
			{1, 0.25},
			"\!U03BB=",
			Round( lambda, 8 ),
			" \!U03C3=",
			Round( sigma, 8 )
		);
		Text( {0, 0.28}, "Red = Poisson, Blue = Negative Binomial" );
	),
	H List Box(
		Slider Box( 3, 10, lambda, clty << reshow ),
		Text Box( " \!U03BB" )
	),
	H List Box(
		Slider Box( .01, 5, sigma, clty << reshow ),
		Text Box( " \!U03C3" )
	)
);

```

### Negative Binomial Quantile

**Syntaxe :** q = Gamma Negative Binomial Quantile( lambda, sigma, cumprob )

**Description :** Renvoie le quantile entier le plus petit, pour lequel la probabilité cumulée de la distribution binomiale négative (lambda, sigma) est supérieure ou égale à cumprob.

**JMP Version ajoutée :** 19

```jsl

qexpl = 20;
qexps = 2;
qexpn = 40;
qexpq = 0.5;
New Window( "Example: Negative Binomial Quantile",
	qexpy = Graph Box(
		Y Scale( 0, 1.05 ),
		X Scale( -1, 41 ),
		Pen Color( "red" ),
		Pen Size( 2 );
		For( qexpk = 0, qexpk < Round( qexpn ), qexpk++,
			H Line(
				qexpk,
				qexpk + 1,
				Negative Binomial Distribution( qexpk, qexpl, qexps )
			);
			V Line(
				qexpk + 1,
				Negative Binomial Distribution( qexpk, qexpl, qexps ),
				Negative Binomial Distribution(
					qexpk + 1,
					qexpl,
					qexps
				)
			);
		);
		Pen Color( "blue" );
		V Line(
			Negative Binomial Quantile( qexpl, qexps, qexpq ),
			0,
			1
		);
		Text(
			{1, 0.9},
			" \!U03BB=",
			Round( qexpl, 2 ),
			" \!U03C3=",
			Round( qexps, 2 )
		);
		Text(
			{1, 0.8},
			" q=",
			Round( qexpq, 2 ),
			" quantile=",
			Round( Negative Binomial Quantile( qexpl, qexps, qexpq ) )
		);
	),
	H List Box(
		Slider Box( 3, 40, qexpl, qexpy << reshow ),
		Text Box( " \!U03BB" )
	),
	H List Box(
		Slider Box( .01, 5, qexps, qexpy << reshow ),
		Text Box( " \!U03C3" )
	),
	H List Box(
		Slider Box( 0, 1, qexpq, qexpy << reshow ),
		Text Box( " q" )
	)
);

```

### Net Present Value

**Syntaxe :** x = Net Present Value( rate, values );x = Net Present Value( rate, value1, value2, &lt;value3, ...&gt; )

**Description :** Renvoie la valeur actuelle nette d&apos;un investissement calculée en fonction d’un taux d’escompte et d’une série de débits (valeurs négatives) et de crédits (valeurs positives) futurs. L’argument values est une matrice unidimensionnelle. Équivalent à la fonction NPV de Microsoft Excel. Le deuxième prototype de la fonction n’accepte que des arguments scalaires.

**JMP Version ajoutée :** Avant la version 14

```jsl

Net Present Value( .05, [-10000, 1000, 900, 9500] );
Net Present Value( .05, -10000, 1000, 900, 9500 );

```

### New CAS Action

**Syntaxe :** action = New CAS Action(...)

**Description :** Crée une action CAS.

**JMP Version ajoutée :** 15

```jsl


echo = [=> ];
echo["a"] = 1;
echo["b"] = JSON Literal( true );
echo["c"] = 3.141559;
action = New CAS Action( Action( "builtins.echo" ), JSON( echo ) );

```

### New CAS DATA Step action

**Syntaxe :** action = New CAS DATA Step Action(...)

**Description :** Crée une action d&apos;étape CAS DATA.

**JMP Version ajoutée :** 15

```jsl


cas = Current CAS Connection();
code =
"\[
	data temp;
	x = 9.1; y = 6; z = sqrt(x**2 + y**2);
	A = "SAS"; B = "Statistics";
	put _ALL_;              /* display all variables and values */
	run;
]\";
action = New CAS DATA Step action( Code( code ) );
cas << Submit( action );

```

### New CAS Server

**Syntaxe :** cas = New CAS Server(&lt;...&gt;)

**Description :** Crée un nouveau serveur CAS.

**JMP Version ajoutée :** 15

```jsl


url = "http://myCasURL";
cas = New CAS Server( Connect( URL( url ), Prompt( IfNeeded ) ) );

```

### New Clipboard

**Syntaxe :** clp = New Clipboard( &lt;&lt;&lt;Get From OS&gt; )

**Description :** Creates a new Clipboard, either empty or with access to the OS clipboard.

**JMP Version ajoutée :** 19

```jsl


clp = New Clipboard( <<Get From OS );
New Window( "Img", clp << Get Flavor Data( "Graphic" ) )
;

```

### New Column

**Syntaxe :** dc = New Column( name, &lt;"Numeric"|"Character"|"RowState"|"Expression"&gt;, &lt;"Continuous"|"Ordinal"|"Nominal"|"Multiple Response"|"Unstructured Text"|"Vector"|"None"&gt;, &lt;Width( n )|Format(format name, width, precision)&gt;, &lt;Like(:other column)&gt;, &lt;actions&gt; )

**Description :** Crée une nouvelle colonne dans la table de données active. Les arguments facultatifs actions sont tous les messages que les colonnes de données prennent en charge.

**JMP Version ajoutée :** Avant la version 14

**Semblable**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
New Column( "like name", Like( :name ) );

```

**Simple**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
New Column( "example",
	"Numeric",
	"Continuous",
	Width( 5 ),
	<<Set Each Value( 100 )
);

```

### New Column by Text Matching

**Syntaxe :** dc = New Column by Text Matching( Column(:name), Set Regex(), &lt;Output Column Name("Name")&gt;, &lt;Use Result(0 | 1)&gt; )

**Description :** Crée une nouvelle colonne en effectuant une recherche de motif d&apos;expression régulière sur une colonne existante.

**JMP Version ajoutée :** 16

```jsl

Open( "$SAMPLE_DATA/Aircraft Incidents.jmp" );
New Column by Text Matching(
	Column( :Narrative Cause ),
	Set Regex(
		Library( "Words" ),
		Library( "Time" ),
		Library( "Units" )
	),
	Output Column Name( "Match Output" ),
	Use Result( 1 )
);

```

### New Custom Function

**Syntaxe :** f=New Custom Function(namespace, name, function definition)

**Description :** Créer un nouvel objet de fonction personnalisée. Une fonction personnalisée apparaîtra en couleur dans l&apos;éditeur de script et sera affichée dans l&apos;index des scripts. Les informations requises pour une fonction utilisateur personnalisée sont l&apos;espace de noms (pour éviter les collisions avec les fonctions générales), le nom et la définition de la fonction. Des informations d&apos;aide peuvent être ajoutées à l&apos;aide de messages. Utiliser la commande Ajouter des fonctions personnalisées pour publier la nouvelle fonction dans l&apos;environnement JMP.

**JMP Version ajoutée :** 14

**Exemple 1**

```jsl

myAdd = New Custom Function(
	"custom",
	"Add",
	Function( {x, y = 1},
		x + y - 1
	)
);

```

**Exemple 2**

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

**Exemple 3**

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

### New Data Connector

**Syntaxe :** result = New Data Connector( Type( type ) | ID( id ) | File( path ) | Spec( string ) | Base( data connector ), &lt; Option1( value1 ) &gt;, ..., &lt; OptionN( valueN ) &gt; )

**Description :** Créez un objet de configuration de connecteur de données.

**JMP Version ajoutée :** 18

**Exemple 1**

```jsl


// Create a data connector from scratch
dc = New Data Connector(
	Type( "ODBC" ),
	Database( "foo" ),
	Server( "bar.example.com" )
);
Show( dc << Get( Database ) );  // Overridden database value "foo"
Show( dc << Get( Driver ) );  // Default driver value . (missing)
dc << Set( Database( "foo2" ), Driver( "SQL Server" ) );
Show( dc << Get( Database ) );  // New database value "foo2"
Show( dc << Get( Driver ) );  // New driver value "SQL Server"

```

**Exemple 2**

```jsl


// Launch Query Builder from a SQL Server data source
dc = New Data Connector(
	ID( "com.jmp.sql_server" ), 
    // All these example values need to be replaced with real ones
	Server( "database.example.com" ),
	Database( "MainDatabase" ),
	User( "username" ),
	Password( "password" )
);
New SQL Query( Connection( dc ) ) << Modify;

```

### New Heat Image

**Syntaxe :** New Heat Image( Matrix, &lt;Color Theme / gradient ( ... )&gt;

**Description :** Crée une image de carte thermique basée sur une matrice et un thème de couleur ou un dégradé.

**JMP Version ajoutée :** 16

```jsl


nx = 20; // data is this size
ny = 15;
data = J( ny, nx, Random Normal() ); // ny=rows, nx=cols
// create a magnified matrix for seeing each value
magnify = 10;
big data = J( N Rows( data ) * magnify, N Cols( data ) * magnify );
big data = Transform Each( {z, {row, col}}, big data, 
	// and filling each value with one from the small matrix
	data[Floor( (row - 1) / magnify ) + 1, Floor( (col - 1) / magnify )
	 + 1]
);
New Window( "small and big",
	Lineup Box( N Col( 3 ),
		New Heat Image(
			data,
			gradient(
				{Color Theme( "Blue To Gray To Orange" ),
				Scale Type( "Standard Deviation" )}
			)
		),
		New Heat Image(
			big data,
			gradient(
				{Color Theme( "Blue To Gray To Orange" ),
				Scale Type( "Standard Deviation" )}
			)
		),
		New Heat Image(
			Abs( big data ),
			gradient(
				{Color Theme( "White to Black" ), Scale Values( [0 2] ),
				Reverse Gradient( 1 )}
			)
		)
	)
);

```

### New HTTP Request

**Syntaxe :** obj = New HTTP Request(URL(...), Method(...), &lt;Form(&lt;Fields(...)&gt;, &lt;Files(...)&gt;)&gt; | &lt;File(...)&gt; | &lt;Blob(...)&gt; | &lt;JSON(...)&gt;, &lt;QueryString(...)&gt;, &lt;Headers(...)&gt;, &lt;Username(...)&gt;, &lt;Password(...)&gt;)

**Description :** Crée une demande d&apos;envoi à un service Internet.

**JMP Version ajoutée :** 14

```jsl


getSentiment = Function( {text},
	{Default Local},
	fields = Associative Array();
	fields["text"] = text;
	s = New HTTP Request(
		URL( "http://text-processing.com/api/sentiment/" ),
		Method( "POST" ),
		Form( Fields( fields ) ),
		Headers( {"Accept: application/json"} )
	) << Send;
	sAsList = Parse JSON( s );
	retval = Associative Array();
	retval["pos"] = sAsList["probability"]["pos"];
	retval["neg"] = sAsList["probability"]["neg"];
	retval["neutral"] = sAsList["probability"]["neutral"];
	retval["label"] = sAsList["label"];
	retval;
);
                         
addSentimentColumns = Function( {dt, colname, bLabel, bValues},
	{Default Local},
	col = Column( dt, colname );
	colLabel = "Sentiment_Label(" || colname || ")";
	colValPos = "Sentiment_Pos(" || colname || ")";
	colValNeg = "Sentiment_Neg(" || colname || ")";
	colValNeutral = "Sentiment_Neutral(" || colname || ")";
	If( bLabel,
		dt << New Column( colLabel, Character )
	);
	If( bValues,
		dt << New Column( colValPos, Numeric );
		dt << New Column( colValNeg, Numeric );
		dt << New Column( colValNeutral, Numeric );
	);
	For( i = 1, i <= N Rows( dt ), i++,
		sentiment = getSentiment( col[i] );
		If( bLabel,
			Column( dt, colLabel )[i] = sentiment["label"]
		);
		If( bValues,
			Column( dt, colValPos )[i] = sentiment["pos"];
			Column( dt, colValNeg )[i] = sentiment["neg"];
			Column( dt, colValNeutral )[i] = sentiment["neutral"];
		);
	);
);
                         
dt2 = Open( "$SAMPLE_DATA\Cereal.jmp" );
addSentimentColumns( dt2, "Name", 1, 1 );

```

### New Image

**Syntaxe :** img = New Image()img = New Image( width, height )img = New Image( pathname )img = New Image( picture )img = New Image( matrix of JSL color pixels ) img = New Image( rgb|r|g|rgba, {i, i, i} )

**Description :** Renvoie une nouvelle image éditable ultérieurement à l’aide des commandes JSL. Si le chemin spécifié pointe vers un fichier image existant, ce fichier doit être de type .JPG, .PNG, .GIF, .BMP ou .TIF.

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

image = New Image( "$SAMPLE_IMAGES/windmap.png" );
New Window( "new image", image );

```

**Exemple 2**

```jsl

pic = Open( "$SAMPLE_IMAGES/windmap.png", png );
image2 = New Image( pic );
New Window( "new image", image2 );

```

**Exemple 3**

```jsl

image3 = New Image();
mat = J( 256, 256 );
For( y = 0, y < 256, y++,
	For( x = 0, x < 256, x++,
		mat[y * 256 + x] = RGB Color( y / 255.0, 0.0, x / 255.0 )
	)
);
image3 << Set Pixels( mat );
New Window( "image", image3 );

```

### New IP21 Client

**Syntaxe :** New IP21 Client(URL(base URL), &lt;Authentication Method("None"|"Basic"|"NTLM"|"Kerberos")&gt;, &lt;Username(userid)&gt;,&lt;Password(password)&gt;)

**Description :** Crée une nouvelle instance de client IP21 qui peut être utilisée pour importer les données depuis un serveur AspenTech IP.21.

**JMP Version ajoutée :** 19

### New JMP Live

**Syntaxe :** New JMP Live(Connection("Connection Name"), &lt;Prompt("No" | "If Needed")&gt;)

**Description :** Démarre une connexion à JMP Live en utilisant les informations de connexion enregistrées. L&apos;argument Connexion est facultatif et prend par défaut la connexion spécifiée dans le gestionnaire de connexions. L&apos;argument Prompt est facultatif et « No » par défaut. Les valeurs valides de Prompt sont « Yes », « No » et « If Needed ». Une valeur de « Yes » demande toujours les identifiants de connexion. Une valeur de « No » ne demande jamais les identifiants de connexion, mais pourrait causer un échec d&apos;authentification. Une valeur de « If Needed » demande les identifiants uniquement si les identifiants actuellement enregistrés ne sont pas valides. Renvoie un objet Connexion JMP Live.

**JMP Version ajoutée :** 15

**Exemple 1**

```jsl

jmplive = New JMP Live();

```

**Exemple 2**

```jsl

jmplive = New JMP Live( Connection( "MyJMPLive" ), Prompt( No ) );

```

**Exemple 3**

```jsl

jmplive = New JMP Live(
	Connection( "MyJMPLive" ),
	Prompt( If Needed )
);

```

### New JMP Live Content

**Syntaxe :** obj = New JMP Live Content(jmpreport|Image(path_to_image)|Data(jmpdatatable)|Map(jmpmap), &lt;Title(...)&gt;, &lt;Description(...)&gt;, &lt;Publish Data(0|1)&gt;, &lt;Enable Warnings(0|1)&gt;, &lt;Optimization("Interactivity" | "Performance")&gt;

**Description :** Permet de créer du contenu interactif pour le publier sur JMP Live. 

	Le premier paramètre est obligatoire. Il spécifie les données à utiliser pour le contenu. Ces données peuvent être un rapport, une table de données, une carte ou une image. 

	Le titre et la description servent à personnaliser n&apos;importe quel type de contenu publié. Les paramètres restant sont facultatifs et servent à personnaliser le contenu du rapport uniquement. 

	Publier les données indique si les données utilisées dans le rapport sont publiées sur JMP Live ou non. Les données du rapport sont publiées par défaut.

	Activer les avertissements indique si les avertissements relatifs à la carte de contrôle doivent être activés ou non pour le rapport. Les avertissements relatifs à la carte de contrôle sont désactivés par défaut. 

	L&apos;optimisation sert à personnaliser la manière dont le rapport est publié sur JMP Live. Le rapport est publié pour permettre une plus grande interactivité par défaut.

**JMP Version ajoutée :** 17

**Exemple 1**

```jsl

bc = Open( "$SAMPLE_DATA/Big Class.jmp" );
dist = bc << Run Script( "Distribution" );

liveconnection = New JMP Live();
jmpliveresult = liveconnection <<
Create Folder(
	Parent Folder( "~" ),
	Title( "Folder for Sample Content" )
);
folder = jmpliveresult << As Scriptable;

content = New JMP Live Content(
	dist,
	Title( "Distribution Web Report" ),
	Description(
		"This report was created with the sample found in the Scripting Index"
	),
	Publish Data( 1 ),
	Optimization( "Interactivity" )
);

jmpliveresult = liveconnection << Publish( content, Folder( folder ) );

```

**Exemple 2**

```jsl

liveconnection = New JMP Live();
jmpliveresult = liveconnection <<
Create Folder(
	Parent Folder( "~" ),
	Title( "Folder for Data Content" )
);
folder = jmpliveresult << As Scriptable;

content = New JMP Live Content(
	Data( "$SAMPLE_DATA/Big Class.jmp" ),
	Title( "Big Class Sample Table" ),
	Description(
		"This data table was published with the sample found in the Scripting Index"
	)
);

jmpliveresult = liveconnection << Publish( content, Folder( folder ) );

```

**Exemple 3**

```jsl

liveconnection = New JMP Live();
jmpliveresult = liveconnection <<
Create Folder(
	Parent Folder( "~" ),
	Title( "Folder for Map Content" )
);
folder = jmpliveresult << As Scriptable;

content = New JMP Live Content( Map( "$SAMPLE_DATA/S4-XY.jmp" ) );

jmpliveresult = liveconnection << Publish( content, Folder( folder ) );

```

**Exemple 4**

```jsl

liveconnection = New JMP Live();
jmpliveresult = liveconnection <<
Create Folder(
	Parent Folder( "~" ),
	Title( "Folder for Image Content" )
);
folder = jmpliveresult << As Scriptable;

imageContent = New JMP Live Content(
	Image( "$SAMPLE_IMAGES/black rhino footprint.jpg" ),
	Title( "Rhino Footprint" ),
	Description( "An image of a rhino footprint from the Sample Data" )
);

jmpliveresult = liveconnection <<
Publish( imageContent, Folder( folder ) );

```

### New Multi HTTP Request

**Syntaxe :** multi_request = New Multi HTTP Request()

**Description :** Envoie ou télécharge plusieurs requêtes HTTP en parallèle.

**JMP Version ajoutée :** 17

```jsl


requests = New Multi HTTP Request();
requests << Add(
	New HTTP Request(
		Method( "GET" ),
		URL(
			"http://cdimage.ubuntu.com/lubuntu/releases/20.04.3/release/lubuntu-20.04.3-desktop-amd64.iso"
		)
	)
);

requests << Add(
	New HTTP Request(
		Method( "GET" ),
		URL(
			"http://downloads.sourceforge.net/clonezilla/clonezilla-live-2.7.3-19-amd64.iso"
		)
	)
);

data = requests << Download( "show progress", "detailed" );
http_requests = requests << Get Requests();
For( i = 1, i <= N Items( http_requests ), i++,
	Show( http_requests[i] << Get Mime Type() )
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

### New OAuth2

**Syntaxe :** oauth2 = New OAuth2()

**Description :** Crée une nouvelle autorisation OAuth2.

**JMP Version ajoutée :** 15

```jsl


/*
https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow
*/

/*
Note: the "code" parameter is set automatically after the redirect occurs
*/
auth_url =
"https://login.microsoftonline.com/common/oauth2/v2.0/authorize";
token_url =
"https://login.microsoftonline.com/common/oauth2/v2.0/token";
redirect_url = "http://localhost/myapp/";
client_id = "6731de76-14a6-49ae-97bc-6eba6914391e";
client_secret = "JqQX2PNo9bpM0uEihUPzyrh";
scope = "openid offline_access https://graph.microsoft.com/user.read";
auth_fields = [=> ];
token_fields = [=> ];
                                          
oauth2 = New OAuth2();
oauth2 << Grant Type( "Authorization Code" );
oauth2 << Auth URL( auth_url );
oauth2 << Token URL( token_url );
oauth2 << Redirect URL( redirect_url );
                                          
auth_fields["scope"] = scope;
auth_fields["client_id"] = client_id;
token_fields["client_secret"] = client_secret;
                                          
oauth2 << Auth Fields( auth_fields );
oauth2 << Token Fields( token_fields );
                                          
auth_header = oauth2 << Get Auth Header();
request = New HTTP Request(
	URL( "https://graph.microsoft.com/v1.0/me" ),
	Headers( {auth_header} ),
	Method( "GET" )
);
data = request << Send;

```

### New OAuth2 Token

**Syntaxe :** token = New OAuth2 Token( Account("jmpgoogldev@gmail.com"), Client ID("test"), Client Secret("test 2"), Refresh Token(""), Token URL(""))

**Description :** Crée un token OAuth2 pour avoir un accès sécurisé aux données depuis de nombreuses API Internet différentes.

**JMP Version ajoutée :** 15

```jsl

token = New OAuth2 Token(
	Account( "jmpgoogldev@gmail.com" ),
	Client ID( "test" ),
	Client Secret( "test 2" ),
	Refresh Token( "" ),
	Token URL( "" )
);

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
			complex(
				real * y:real - imag * y:imag,
				imag * y:real + real * y:imag
			)
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

### New PI Client

**Syntaxe :** New Pi Client(URL(base URL), &lt;Authentication Method("None"|"Basic"|"NTLM"|"Kerberos")&gt;, &lt;Username(userid)&gt;,&lt;Password(password)&gt;)

**Description :** Crée une nouvelle instance de client PI qui peut être utilisée pour importer les données depuis un serveur PI.

**JMP Version ajoutée :** 17

**Exemple 1**

```jsl

/* Import raw data */
client = New PI Client(
	URL( "https://myserver.com/piwebapi" ),
	Authentication Method( "basic" ),
	Username( "myuserid" ),
	Password( "mypassword" )
);
importer = client << Importer(
	AF Path(
		"\\myserver\PIData\Atlanta Data Center\Server Rack1\ION 6200 Power Meter1|I A"
	), /* Asset Framework path */
	Series( "raw" ),
	Start Time( "*-1d" ), /* PI time string */
	End Time( "*" ),      /* PI time string */
	Boundary Type( "inside" ), /* choices are "inside", "outside", "interpolated" */
	UTC( 0 ), /* whether specified start/end times are based on UTC - default is zero */
	Max Count( 5000 ), /* Max. number of values to fetch - default is 5000 */
	Filter( "" ), /* Optional filter */
	Retrieve Attribute Status( 0 ) /* Whether to retrieve value attributes (i.e. "good", "questionable", "substituted", "annotated") - default is 0 */
);
importer << Run;

```

**Exemple 2**

```jsl

/* Import plot data using Kerberos for authentication */
client = New PI Client(
	URL( "https://myserver.com/piwebapi" ),
	Authentication Method( "kerberos" )
);
importer = client << Importer(
	AF Path(
		"\\myserver\PIData\Atlanta Data Center\Server Rack1\ION 6200 Power Meter1|I A"
	),
	Series( "plot" ),
	Start Time( "*-1d" ),
	End Time( "*" ),
	UTC( 0 ),
	Intervals( 24 )
); /* No of time intervals to fetch*/
importer << Run;

```

**Exemple 3**

```jsl

/* Import interpolated data from a server that does not require authentication */
client = New PI Client(
	URL( "https://myserver.com/piwebapi" ),
	Authentication Method( "none" )
);
importer = client << Importer(
	AF Path(
		"\\myserver\PIData\Atlanta Data Center\Server Rack1\ION 6200 Power Meter1|I A"
	),
	Series( "interpolated" ),
	Start Time( "*-1d" ),
	End Time( "*" ),
	UTC( 0 ),
	Sync Time Boundary Type( "inside" ),   /*  choices are "inside", "outside" */
	Interval( "1h" ),            /* interval period */
	Sync Time( "01JUL2021" ),    /* optional sync point - ie. intervals begin from this point */
	Filter( "" )
);
importer << Run;

```

### New Project

**Syntaxe :** project = new Project( &lt;project messages&gt; )

**Description :** Crée une nouvelle fenêtre de projet vide. Un ou plusieurs messages de projet peuvent être inclus en tant qu&apos;arguments de sorte à créer un projet en une seule étape.

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

project = New Project();

```

**Exemple 2**

```jsl

project = New Project(
	Run Script(
		dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
		dt << Run Script( "Bivariate" );
	)
);

```

**Exemple 3**

```jsl

project = New Project(
	Run Script(
		Open( "$SAMPLE_DATA/Big Class.jmp" );
		New Window( "Big Class - Bivariate of weight by height",
			Bivariate( Y( :weight ), X( :height ) )
		);
	)
);

```

**Exemple 4**

```jsl

project = New Project(
	Set Bookmarks(
		{File( "$SAMPLE_DATA/Animals.jmp" ),
		File( "$SAMPLE_DATA/Big Class.jmp" )}
	),
	Run Script(
		Open( "$SAMPLE_DATA/Big Class.jmp" );
		New Window( "Big Class - Bivariate of weight by height",
			Bivariate( Y( :weight ), X( :height ) )
		);
	)
);

```

**Exemple 5**

```jsl

project = New Project(
	Run Script(
		Open(
			"$SAMPLE_SCRIPTS/demoCorr.jsl",
			Set Window ID( "demoCorr" ),
			Script
		)
	),
	Set Layout(
		H Splitter Box(
			<<Set Sizes( {0.15, 0.85} ),
			Tab Page Box(
				Title( "Window List" ),
				Window ID( "Windows" )
			),
			V Splitter Box(
				<<Set Sizes( {0.7, 0.3} ),
				Tab Page Box(
					Title( "demoCorr" ),
					Window ID( "demoCorr" )
				),
				Tab Page Box( Title( "Log" ), Window ID( "Log" ) )
			)
		)
	)
);

```

### New SQL Query

**Syntaxe :** obj = New SQL Query( Connection( "ODBC:my_connection_string" ), Select( Column( "mycolumn", "t1" ) ), From( Table( "my_table", Schema( "my_schema" ), Alias( "t1" ) ) ) ); obj = New SQL Query( Connection( "ODBC:my_connection_string;" ), CustomSQL( "SELECT c1, c2, c3 FROM my_table;" ) )

**Description :** Crée un objet SQL Query pour la connexion, colonnes et table spécifiées, ou pour la requête SQL personnalisée spécifiée. Utilisez le générateur de requêtes pour générer des scripts qui créent de requêtes.

**JMP Version ajoutée :** Avant la version 14

```jsl


obj = New SQL Query(
	Connection( "ODBC:DSN=mydsn" ),
	Select(),
	From( Table( "my_table", Schema( "my_schema" ), Alias( "t1" ) ) )
);

```

### New Table

**Syntaxe :** dt = New Table( name, &lt;visibility("private"|"invisible"|"visible")&gt;, &lt;Enable Filter Views(bool)&gt;, &lt;actions&gt; )

**Description :** Crée une nouvelle table de données. "Invisible" masque la table de données mais la répertorie dans la fenêtre d&apos;accueil JMP. "Private" masque totalement la table de données. "Visible" est l&apos;option par défaut et crée une table de données normale qui est visible et répertoriée dans la fenêtre d&apos;accueil JMP. Les arguments facultatifs actions sont les messages, quels qu&apos;ils soient, pris en charge par les tables de données.

**JMP Version ajoutée :** Avant la version 14

```jsl

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

### New Web Report

**Syntaxe :** obj = New Web Report(...)

**Description :** Crée un rapport HTML interactif.

**JMP Version ajoutée :** 14

```jsl


Open( "$SAMPLE_DATA/Big Class.jmp", Invisible );
webreport = New Web Report(
	Add Report(
		Distribution(
			Continuous Distribution( Column( :weight ) ),
			Nominal Distribution( Column( :age ) )
		),
		Title( "Distribution Web Report" ),
		Description(
			"This report was created with the sample found in the Scripting Index"
		)
	),
	Add Report(
		Bivariate(
			Y( :weight ),
			X( :height ),
			Automatic Recalc( 1 ),
			Fit Line( {Line Color( {213, 72, 87} )} ),
			Local Data Filter( Add Filter( columns( :sex ) ) )
		)
	)
);
webreport << Index( Title( "Big Class Report" ) );
file = webreport << Save( "$TEMP" );
If( !Is Empty( file ),
	Web( file )
);

```

### New Window

**Syntaxe :** w = New Window( title, &lt; &lt;&lt;Type("Report" | "Dialog" | "Modal Dialog" | "Journal" | "Launcher" | "Script")&gt;, &lt; &lt;&lt; Return Result&gt;, &lt; &lt;&lt; On Open(expr | function | method)&gt;, &lt; &lt;&lt; On Close(expr | function | method)&gt;, &lt; &lt;&lt;On Validate(expr | function | method)&gt;, &lt; &lt;&lt;Show Menu(0 | 1)&gt;, &lt; &lt;&lt;Show Toolbars(0 | 1)&gt;, &lt; &lt;&lt;Suppress AutoHide(0 | 1)&gt;, &lt; &lt;&lt;Window View("Visible" | "Invisible")&gt;, &lt; &lt;&lt;Language("C" | "JavaScript" | "JSL" | "JSON" | "Python" | "R" | "SAS" | "SQL" | "Text" | "XML")&gt;, &lt; &lt;&lt;Size(x, y)&gt;, displayBox | script)

**Description :** Crée une fenêtre contenant la boîte d&apos;affichage ou le script spécifié. Une fenêtre de rapport est créée par défaut, sauf si l&apos;option Type est spécifiée. Une fenêtre de Type("Modal Dialog") arrête l&apos;exécution jusqu&apos;à ce que la boîte de dialogue soit remplie. On Open, On Validate et Return Result sont disponibles uniquement pour les fenêtres modales. On Open() évalue son expression, sa fonction ou sa méthode de classe à la création de la fenêtre. Si On Close() renvoie la valeur faux, la fenêtre ne peut pas être fermée. On Validate() exécute son expression, sa fonction ou sa méthode de classe lorsque vous cliquez sur le bouton OK. Si l&apos;expression renvoie la valeur Vrai, la fenêtre est fermée. Sinon, la fenêtre reste ouverte. Return Result modifie la valeur de renvoi de la fenêtre lorsqu&apos;elle se ferme pour correspondre à la fonction obsolète Dialog(). Pour les types de fenêtre qui prennent en charge les barres d&apos;outils, utilisez Show Toolbars pour spécifier les changements par rapport au comportement par défaut. Les options Show Menu et Suppress AutoHide sont pour Windows uniquement. L&apos;option Window View("Invisible") peut servir pour n&apos;importe quelle fenêtre autre qu&apos;une Modal Dialog. Une fenêtre de Type("Script") crée un document JSL sauf si l&apos;option <<Language est spécifiée.

**JMP Version ajoutée :** Avant la version 14

**[Win] Barres d’outils et menus**

```jsl

// Compare settings for toolbars and menus
// Suppress AutoHide is Windows only
g = Graph Box(
	Frame Size( 300, 300 ),
	Marker( Marker State( 3 ), [11 44 77], [75 25 50] );
	Pen Color( "Blue" );
	Line( [10 30 70], [88 22 44] );
);
New Window( "Default - menu and toolbars", g );
New Window( "Menu, no toolbars, suppress autohide",
	Suppress AutoHide( 1 ),
	Show Toolbars( 0 ),
	g
);
New Window( "Toolbars, no menu", Show Menu( 0 ), g );
New Window( "No menu, no toolbars",
	Show Menu( 0 ),
	Show Toolbars( 0 ),
	g
);

```

**Boîte de dialogue**

```jsl


ex = New Window( "Dialog example",
	<<Type( "Dialog" ),
	V List Box(
		Panel Box( "Sample data dialog",
			Button Box( "Open Sample Data",
				Open( "$SAMPLE_DATA/Big Class.jmp" )
			)
		),
		H List Box( Button Box( "Close", Try( ex << CloseWindow ) ) )
	)
);

```

**Boîte de dialogue modale**

```jsl


ex = New Window( "Modal Dialog example",
	<<Type( "Modal Dialog" ),
	<<Return Result,
	<<On Validate(
		num = myEditBox << Get;
		If( num >= 1 & num <= 100, // in range
			myEditBox << Background Color( "Background" ); // this field does not need attention
			1; //the number is good, validate
		, // else out of range
			myEditBox << Background Color( "Light Yellow" ); // this field needs attention
			0; // the number is bad, do not validate
		) // the result of this if(...) is the OnValidate( ) answer, 0 or 1
		;
	),
	V List Box(
		Text Box( "Enter a value between [1,100]:" ),
		H List Box( myEditBox = Number Edit Box( 42 ) ),
		H List Box( Button Box( "OK" ), Button Box( "Cancel" ) )
	)
);

//  the Modal window must be closed before the following code runs

If(
	ex["button"] == 1 // not canceled
, // then show the value
	Write( ex["myEditBox"] ); // note: myEditBox is the name of the variable holding the text edit box
, // else report no selection
	Write( "CANCEL" ); // cancel button or red X was pressed
);

```

**Invisible**

```jsl


g = Graph Box(
	Frame Size( 300, 300 ),
	Marker( Marker State( 3 ), [11 44 77], [75 25 50] );
	Pen Color( "Blue" );
	Line( [10 30 70], [88 22 44] );
);
w = New Window( "My Window's Title", <<WindowView( "Invisible" ), g );
p = w << Get Picture();
w << Close Window;
psize = p << Size;
New Window( "picture",
	Outline Box( "picture size: " || Char( psize ), p )
);

```

**Rapport**

```jsl

g = Graph Box(
	Frame Size( 300, 300 ),
	Marker( Marker State( 3 ), [11 44 77], [75 25 50] );
	Pen Color( "Blue" );
	Line( [10 30 70], [88 22 44] );
);
New Window( "My Window's Title", g );

```

**Script**

```jsl

script = JSL Quote(Names Default To Here(1);
dt=Open("$SAMPLE_DATA/Big Class.jmp");
dt << Run Script("Bivariate");
);
ex = New Window( "Script example", <<Type( "Script" ), script );

```

**Script Python**

```jsl

pyscript = "\[import numpy as np
a = np.arange(15).reshape(3, 5)]\";
ex = New Window( "Script example",
	<<Type( "Script" ),
	<<Language( "Python" ),
	pyscript
);

```

### Normal Biv Distribution

**Syntaxe :** y = Normal Biv Distribution( x, y, r, &lt;mu1=0&gt;, &lt;s1=1&gt;, &lt;mu2=0&gt;, &lt;s2=1&gt; )

**Description :** Calcule la probabilité qu&apos;une observation (X, Y) est inférieure ou égale à (x, y) avec un coefficient de corrélation de r où X présente une distribution normale marginale avec une moyenne de mu1 et un écart-type de s1, et Y présente une distribution normale marginale avec une moyenne de mu2 et un écart-type de s2. Si mu1, s1, mu2 et s2 ne sont pas donnés, la fonction prend la forme d&apos;une distribution bivariée normale standard avec mu1=0, s1=1, mu2=0 et s2=1.

**JMP Version ajoutée :** Avant la version 14

```jsl

Normal Biv Distribution( -2, -2, .5, 1, 1.5, -1, 2 );

```

### Normal Contour

**Syntaxe :** Normal Contour( prob, meanMatrix, stdMatrix, corrMatrix, &lt;colorsMatrix&gt;, &lt;fill=0&gt; )

**Description :** Dessine les courbes d&apos;iso-probabilité normales pour k populations et deux variables. L’argument prob peut être une probabilité scalaire ou une matrice de probabilités. Les arguments meanMatrix et stdsMatrix sont des matrices k par 2, et l&apos;argument corrMatrix est un vecteur k par 1. L&apos;argument colorsMatrix spécifie la ou les couleurs des k courbes d&apos;isoréponses k ; les couleurs doivent être spécifiées comme couleurs JSL (soit des valeurs entières de couleur JSL, soit des valeurs retournées par des fonctions de couleur JSL telles que RGB Color() ou HLS Color()). L&apos;argument fill spécifie la valeur de transparence de la couleur de remplissage de la courbe d&apos;isoréponses.

**JMP Version ajoutée :** Avant la version 14

```jsl

New Window( "Example",
	Graph Box(
		Fill Color( "blue" );
		Normal Contour( 0.95, [40 40], [15 5], [0.5], Empty(), 0.1 );,
		Normal Contour(
			0.95,
			[40 40, 60 50],
			[15 5, 10 10],
			[-0.9, -0.5],
			Matrix( {RGB Color( {0.1, 0.9, 0.1} ), 3} ),
			0.2
		)
	)
);

```

### Normal Density

**Syntaxe :** y = Normal Density( q, &lt;mu=0&gt;, &lt;sigma=1&gt; )

**Description :** Renvoie la densité à q d’une distribution normale avec moyenne mu et écart-type sigma.

**JMP Version ajoutée :** Avant la version 14

```jsl

New Window( "Example: Normal Density",
	y = Graph Box(
		Y Scale( 0, 0.45 ),
		X Scale( -4, 4 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( Normal Density( q ), q );
	)
);

```

### Normal Distribution

**Syntaxe :** p = Normal Distribution( q, &lt;mu=0&gt;, &lt;sigma=1&gt; )

**Description :** Renvoie la probabilité qu&apos;une variable aléatoire normale est inférieure à q.

**JMP Version ajoutée :** Avant la version 14

```jsl

New Window( "Example: Normal Distribution",
	y = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( -4, 4 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( Normal Distribution( q ), q );
	)
);

```

### Normal Integrate

**Syntaxe :** {mean, var} = Normal Integrate( muVector, sigmaMatrix, expr, x, NStrata, NSim )

**Description :** Renvoie le résultat de l&apos;intégration radiale-sphérique pour les fonctions de lissage de variables normales multivariées. L&apos;idée de base est la même qu&apos;une méthode dans Genz et Monahan(1996). Mais une quadrature de type Radau-Gauss-Laguerre est utilisée pour la direction radiale.

**JMP Version ajoutée :** Avant la version 14

```jsl

Normal Integrate(
	J( 3, 1, 0 ),
	Identity( 3 ),
	ex[1] ^ 4 * ex[2] ^ 2 * ex[3] ^ 2,
	ex,
	2,
	5000
);

```

### Normal Log CDistribution

**Syntaxe :** y = Normal Log CDistribution( x, &lt;mean=0&gt;, &lt;std dev=1&gt; )

**Description :** Renvoie le logarithme de 1 - Distribution normale à x avec moyenne mu et écart-type sigma.

**JMP Version ajoutée :** Avant la version 14

```jsl

New Window( "Example: Normal Log CDistribution",
	nlcdiy = Graph Box(
		Y Scale( -10, 0.05 ),
		X Scale( -4, 4 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( Normal Log CDistribution( q ), q );
	)
);

```

### Normal Log Density

**Syntaxe :** y = Normal Log Density( x, &lt;mu=0&gt;, &lt;sigma=1&gt;)

**Description :** Renvoie le logarithme de la densité de probabilité normale à x avec moyenne mu et écart-type sigma.

**JMP Version ajoutée :** Avant la version 14

```jsl

New Window( "Example: Normal Log Density",
	nldey = Graph Box(
		Y Scale( -9, 0.05 ),
		X Scale( -4, 4 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( Normal Log Density( q ), q );
	)
);

```

### Normal Log Distribution

**Syntaxe :** y = Normal Log Distribution( x, &lt;mean=0&gt;, &lt;std dev=1&gt; )

**Description :** Renvoie le logarithme de la distribution normale à x avec moyenne mu et écart-type sigma.

**JMP Version ajoutée :** Avant la version 14

```jsl

New Window( "Example: Normal Log Distribution",
	nldiy = Graph Box(
		Y Scale( -10, 0.05 ),
		X Scale( -4, 4 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( Normal Log Distribution( q ), q );
	)
);

```

### Normal Mixture Density

**Syntaxe :** y = Normal Mixture Density(q, meanvec, sdvec, probvec)

**Description :** Renvoie la densité à q d’une distribution de mélange normal avec moyennes de groupe meanvec, écarts-types de groupe sdvec et probabilités de groupe probvec. Ici meanvec, sdvec et probvec sont des vecteurs de même dimension.

**JMP Version ajoutée :** Avant la version 14

```jsl

mu1 = -2;
mu2 = 2;
sigma1 = 1;
sigma2 = 4;
p1 = .5;
t1 = mu1 |/ mu2;
t2 = sigma1 |/ sigma2;
t3 = p1 |/ (1 - p1);
New Window( "Univariate Normal Mixture Density",
	clty = Graph Box(
		Y Scale( 0, 0.4 ),
		X Scale( -8, 8 ),
		Pen Color( "red" ),
		Pen Size( 2 );
		t1 = mu1 |/ mu2;
		t2 = sigma1 |/ sigma2;
		t3 = p1 |/ (1 - p1);
		Y Function(
			Normal Mixture Density(
				y,
				mu1 |/ mu2,
				sigma1 |/ sigma2,
				p1 |/ (1 - p1)
			),
			y
		);
		Text( {-7, .37}, "Mean1=", Round( mu1, 2 ) );
		Text( {-2, .37}, "Mean2=", Round( mu2, 2 ) );
		Text( {-7, .34}, "SD1=", Round( sigma1, 2 ) );
		Text( {-2, .34}, "SD2=", Round( sigma2, 2 ) );
		Text( {-7, .31}, "P1=", Round( p1, 2 ) );
		Text( {-2, .31}, "P2=", Round( 1 - p1, 2 ) );
	),
	H List Box(
		Slider Box( -3, 3, mu1, clty << reshow ),
		Text Box( " Mean 1" )
	),
	H List Box(
		Slider Box( -3, 3, mu2, clty << reshow ),
		Text Box( " Mean 2" )
	),
	H List Box(
		Slider Box( .1, 9, sigma1, clty << reshow ),
		Text Box( " Std Dev 1" )
	),
	H List Box(
		Slider Box( .1, 9, sigma2, clty << reshow ),
		Text Box( " Std Dev 2" )
	),
	H List Box(
		Slider Box( 0, 1, p1, clty << reshow ),
		Text Box( " P 1" )
	), 

);

```

### Normal Mixture Distribution

**Syntaxe :** y = Normal Mixture Distribution(q, meanvec, sdvec, probvec)

**Description :** Renvoie la probabilité qu’une variable distribuée selon un modèle mélange normal avec moyennes de groupe meanvec, écarts-types de groupe sdvecprobabilités de groupe probvec soit inférieure à q. Ici meanvec, sdvec et probvec sont des vecteurs de même dimension.

**JMP Version ajoutée :** Avant la version 14

```jsl

mu1 = -2;
mu2 = 2;
sigma1 = 1;
sigma2 = 4;
p1 = .5;
New Window( "Univariate Normal Mixture Distribution",
	clty = Graph Box(
		Y Scale( 0, 1.05 ),
		X Scale( -8, 8 ),
		Pen Color( "red" ),
		Pen Size( 2 );
		Y Function(
			Normal Mixture Distribution(
				y,
				mu1 |/ mu2,
				sigma1 |/ sigma2,
				p1 |/ (1 - p1)
			),
			y
		);
		Text( {-7, .95}, "Mean1=", Round( mu1, 2 ) );
		Text( {-2, .95}, "Mean2=", Round( mu2, 2 ) );
		Text( {-7, .85}, "SD1=", Round( sigma1, 2 ) );
		Text( {-2, .85}, "SD2=", Round( sigma2, 2 ) );
		Text( {-7, .75}, "P1=", Round( p1, 2 ) );
		Text( {-2, .75}, "P2=", Round( 1 - p1, 2 ) );
	),
	H List Box(
		Slider Box( -3, 3, mu1, clty << reshow ),
		Text Box( " Mean 1" )
	),
	H List Box(
		Slider Box( -3, 3, mu2, clty << reshow ),
		Text Box( " Mean 2" )
	),
	H List Box(
		Slider Box( .1, 9, sigma1, clty << reshow ),
		Text Box( " Std Dev 1" )
	),
	H List Box(
		Slider Box( .1, 9, sigma2, clty << reshow ),
		Text Box( " Std Dev 2" )
	),
	H List Box(
		Slider Box( 0, 1, p1, clty << reshow ),
		Text Box( " P 1" )
	), 

);

```

### Normal Mixture Quantile

**Syntaxe :** q = Normal Mixture Quantile(p, meanvec, sdvec, probvec)

**Description :** Renvoie le quantile d’une distribution de mélange normal, correspondant à la probabilité p qu’une variable aléatoire ayant cette distribution prenne une valeur inférieure au quantile.

**JMP Version ajoutée :** Avant la version 14

```jsl

extqdf = 1;
extqqq = 0.5;
mu1 = -1;
mu2 = 1;
sigma1 = 1;
sigma2 = 4;
p1 = .3;
New Window( "Example: Normal Mixture Quantile",
	extqgr = Graph Box(
		Y Scale( 0, 1.05 ),
		X Scale( -5, 5 ),
		XName( "q" ),
		Pen Color( "red" );
		Pen Size( 2 );
		Y Function(
			Normal Mixture Distribution(
				q,
				mu1 |/ mu2,
				sigma1 |/ sigma2,
				p1 |/ (1 - p1)
			),
			q
		);
		Pen Color( "blue" );
		V Line(
			Normal Mixture Quantile(
				extqqq,
				mu1 |/ mu2,
				sigma1 |/ sigma2,
				p1 |/ (1 - p1)
			),
			0,
			1
		);
		Text( {-4.5, 0.9}, " quantile=", Round( extqqq, 2 ) );
	),
	H List Box(
		Slider Box( 0.01, 0.99, extqqq, extqgr << reshow ),
		Text Box( " quantile" )
	),
	H List Box(
		Slider Box( -3, 3, mu1, extqgr << reshow ),
		Text Box( " Mean 1" )
	),
	H List Box(
		Slider Box( -3, 3, mu2, extqgr << reshow ),
		Text Box( " Mean 2" )
	),
	H List Box(
		Slider Box( .1, 9, sigma1, extqgr << reshow ),
		Text Box( " Std Dev 1" )
	),
	H List Box(
		Slider Box( .1, 9, sigma2, extqgr << reshow ),
		Text Box( " Std Dev 2" )
	),
	H List Box(
		Slider Box( 0, 1, p1, extqgr << reshow ),
		Text Box( " P 1" )
	), 

);

```

### Normal Quantile

**Syntaxe :** q = Normal Quantile( p, &lt;mu=0&gt;, &lt;sigma=1&gt; ); q = Probit( p )

**Description :** Renvoie le quantile d’une distribution normale, correspondant à la probabilité p qu’une valeur aléatoire ayant cette distribution prenne une valeur inférieure au quantile.

**JMP Version ajoutée :** Avant la version 14

```jsl

Normal Quantile( 0.9 );

```

### Normal Tolerance Factor

**Syntaxe :** q = Normal Tolerance Factor( 1-alpha, p, n, &lt;One Sided&gt; )

**Description :** Calcule le facteur de tolérance pour construire un intervalle de confiance à 1-alpha qui contient la proportion p des moyennes avec une taille d&apos;échantillon de n de la distribution normale. Une option permet de demander le facteur pour un intervalle de tolérance unilatéral.

**JMP Version ajoutée :** 19

```jsl

n = 15;
New Window( "Example: Tolerance Factor()",
	tdig = Graph Box(
		Y Scale( 0, 5 ),
		X Scale( 0.05, 0.95 ),
		Yname( "Tolerance Factor" ),
		Xname( "p" ),
		Pen Color( "red" );
		Y Function( Normal Tolerance Factor( 0.95, p, n ), p );
		Text( {0.1, 4}, "n=", Round( n ) );
	),
	H List Box(
		Text Box( "n" ),
		Slider Box( 5, 25, n, tdig << reshow )
	)
);

```

### Not

**Syntaxe :** y = !x; y = Not( x )

**Description :** Renvoie le NOT logique de x : 1 si x est égal à zéro, manquant si x est manquant et 0 dans les autres cas.

**JMP Version ajoutée :** Avant la version 14

```jsl

!(1 < 2);

```

### Not Equal

**Syntaxe :** z = x != y != ...; z = Not Equal( x, y, ... )

**Description :** Renvoie 1 si chaque argument n&apos;est pas égal à l&apos;argument suivant, et 0 dans le cas contraire.

**JMP Version ajoutée :** Avant la version 14

```jsl

1 != 2 != 1;

```

### Notebook

**Syntaxe :** nb = Notebook( name|number )

**Description :** Renvoie une référence au notebook spécifié.

**JMP Version ajoutée :** 19

### Nth Day Of Week in the Month

**Syntaxe :** n = Nth Day Of Week in the Month( datetime )

**Description :** Renvoie un nombre entier représentant le nombre d&apos;instances du jour de la semaine de l&apos;argument datetime qui se sont produites durant le mois. Par exemple, le 28 novembre 2019 est le 4e jeudi du mois, la fonction renvoie donc la valeur 4.

**JMP Version ajoutée :** 16

```jsl

Nth Day Of Week in the Month( Date MDY( 11, 28, 2019 ) );

```

### Num

**Syntaxe :** y = Num( s, &lt; &lt;&lt;Use Locale( use=1 ) &gt;, &lt; &lt;&lt;Restrict &gt; )

**Description :** Convertit s en nombre en utilisant le format intégré, y compris les formats de devise et de date. Renvoie une valeur manquante si la conversion échoue. L&apos;argument facultatif <<Restrict permet uniquement la conversion aux formats entier, décimal et scientifique.

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

Show( Num( "3.1e6" ), Num( "1989-10-04" ), Num( "5%" ), Num( "£23" ) );

```

**Exemple 2**

```jsl

Show(
	Num( "3.1e6", <<Restrict ),
	Num( "1989-10-04", <<Restrict ),
	Num( "5%", <<Restrict ),
	Num( "£23", <<Restrict )
);

```

### Num Deriv

**Syntaxe :** y = Num Deriv( f( x, ... ), &lt;parnum&gt;)

**Description :** Renvoie la dérivée numérique de la fonction f( x,... ) par rapport à l&apos;un de ses arguments. Vous pouvez spécifier cet argument comme le second argument de la fonction Num Deriv. S&apos;il n&apos;y a pas de second argument spécifié, la dérivée est prise par rapport au premier argument de la fonction. La dérivée est évaluée à l&apos;aide des valeurs numériques spécifiées dans l&apos;expression de la fonction f( x,... ).

**JMP Version ajoutée :** Avant la version 14

```jsl

f = Function( {x, y}, x ^ 2 + y );
Num Deriv( f( 2, 1 ) );
Num Deriv( f( 2, 1 ), 2 );

```

### Num Deriv2

**Syntaxe :** y = Num Deriv2( f( x, ... ) )

**Description :** Renvoie la deuxième dérivée numérique de la fonction f( x,... ) par rapport à x. La dérivée est évaluée à l&apos;aide des valeurs numériques spécifiées dans l&apos;expression de la fonction f( x,... ).

**JMP Version ajoutée :** Avant la version 14

```jsl

f = Function( {x}, x ^ 3 );
Num Deriv2( f( 2 ) );

```

### Number

**Syntaxe :** y = Number( x1, ... )

**Description :** Renvoie le nombre d&apos;arguments non manquants ou les valeurs non manquantes dans un argument unique de matrice ou de liste.

**JMP Version ajoutée :** Avant la version 14

```jsl

Eval List(
	{Number( 12, ., 11, 0, -42 ), Number( [33 . -42 . 0 . -30] )}
);

```

### Number Col Box

**Syntaxe :** y = Number Col Box( title, numbers )

**Description :** Renvoie une boîte d&apos;affichage pour afficher les nombres spécifiés par l’argument numbers, qui peut être une liste ou une matrice.

**JMP Version ajoutée :** Avant la version 14

```jsl

New Window( "Example",
	Outline Box( "Table",
		Table Box(
			String Col Box( "names", {"x", "y", "z"} ),
			Number Col Box( "values", {11, 22, 33} ),
			Plot Col Box( "values", {11, 22, 33} )
		)
	)
);

```

### Number Col Edit Box

**Syntaxe :** y = Number Col Edit Box( title, numbers )

**Description :** Renvoie une boîte d&apos;affichage pour afficher les nombres spécifiés par l’argument numbers, qui peut être une liste ou une matrice.

**JMP Version ajoutée :** Avant la version 14

```jsl

x = y = z = 0;
New Window( "Example",
	Modal,
	<<Return Result,
	Outline Box( "Table",
		Table Box( neb = Number Col Edit Box( "values", {x, y, z} ) )
	)
);

```

### Number Edit Box

**Syntaxe :** y = Number Edit Box( initValue, &lt;width&gt; )

**Description :** Renvoie une zone d&apos;édition qui n&apos;accepte que les entrées numériques. Spécifier l&apos;argument facultatif  width pour définir la largeur de la zone en caractères.

**JMP Version ajoutée :** Avant la version 14

```jsl

New Window( "Example", neb = Number Edit Box( 5 ) );
x = neb << get;

```

### Number of Periods

**Syntaxe :** x = Number of Periods( rate, pmt, pv, &lt;fv=0&gt;, &lt;type=0&gt; )

**Description :** Renvoie le nombre de périodes d’un investissement en se basant sur des paiements et un taux d’intérêt constants. L’argument type est 0 pour les paiements en fin de période et 1 pour les paiements en début de période. Équivalent à la fonction NPER de Microsoft Excel.

**JMP Version ajoutée :** Avant la version 14

```jsl

Number of Periods( .05 / 12, -2000, 100000 );

```

### Open

**Syntaxe :** Open( filePath, &lt;data table options | Excel import options | text import options | SAS import options | HTML import options | esriShapeFile import options | PDF import options | other file options &gt; )

**Description :** Renvoie une référence vers une table de données, ou vers un autre fichier JMP ou objet créé à partir d&apos;un fichier. Si aucun chemin n&apos;est spécifié, la boîte de dialogue Ouvrir s&apos;affiche. Si un chemin vers un répertoire est spécifié, l&apos;explorateur de fichiers du système est ouvert et aucun objet n&apos;est renvoyé. Consultez la syntaxe de référence pour obtenir une description complète des options disponibles.

**JMP Version ajoutée :** Avant la version 14

**Add-In**

```jsl

/* Installing Add-In:
Open( Add-In to open,
    <Check For Updates( "never" | "startup" | "always")>, // "always" will check for updates at startup and while jmp is running
    <Update Prompt(0|1)>) // whether or not the add-in will silently update or prompt first */
Open(
	"$downloads\test.jmpaddin",
	Check For Updates( "always" ),
	Update Prompt( 1 )
);

```

**Autre**

```jsl

/* Other options:
   SAS File imported as a data table:
   Open( sasFilePath,
     <Invisible | Private>,
     <Use Labels for Var Names(0|1)>,
     <Password( "password" )>
   )
   
   SAS Transport File imported as a data table, members are separate tables within the larger file:
   Open( sasTransportFilePath,
     <Use Labels for Var Names(0|1)>,
     <Members({"Table1", "Table2"})>
   )
   
   HTML file imported as a data table:
   Open( htmlFilePath,
     <Invisible | Private>,
     <HTML Table(n, <ColumnNames(n)>, DataStarts(n)>)>
   )
   
   Get column names as a list for a JMP Data Table without opening the table:
   Open( jmpDataTableFilePath, 
     "Column Names Only"
   )
   
   esriShapeFile opened for use as a map shape data table:
   Open( esriShapeFilePath,
     <Invisible | Private>,
     Columns( Shape=numeric(n),
     Part=numeric(n),
     X=numeric(n),
     Y=numeric(n) ),
              Polygon Import Options(Simplification Factor(f), Geodesic(g))
   )
*/
//SAS Example:
dt1 = Open(
	"$SAMPLE_IMPORT_DATA/Bigclass.sas7bdat",
	Use Labels for Var Names( 1 )
);

// HTML Example:
dt2 = Open(
	"https://en.wikipedia.org/wiki/Black_Mountains_(North_Carolina)",
	HTML Table( 3, Column Names( 1 ), Data Starts( 2 ) )
);

// Column Names Only Example: 
colNames = Open(
	"$SAMPLE_DATA/Semiconductor Capability.jmp",
	"Column Names Only"
);

// SHP Shapefile Example with polygon simplification: 
Open(
	"$SAMPLE_IMPORT_DATA/parishes.shp",
	Polygon Import Options(
		Simplification Factor( 200 ),
		Geodesic( 1 )
	)
);

```

**Excel**

```jsl

/* Excel files imported into a data table:
   Open( excelFilePath,
     <Worksheets( "sheet name" | {"sheet name", "sheet name", ...} | "n" )>,
     <Use for all sheets(0|1)>,
     <Concatenate Worksheets(0|1)>,
     <Create Concatenation Column(0|1)>,
     <Worksheet Settings( 0|1,
       Has Column Headers(0|1),
       Number of Rows in Headers(n),
       Headers Start on Row(n),
       Data Starts on Row(n),
       Data Starts on Column(n),
       Data Ends on Row(n),
       Data Ends on Column(n),
       Replicated Spanned Rows(0|1),
       Suppress Hidden Rows(0|1),
       Suppress Hidden Columns(0|1),
       Treat as Hierarchy(0|1)
     )>,
     <Invisible | Private>
   )
*/

/* Using the Excel Wizard dialog:
   Open("$SAMPLE_IMPORT_DATA/Bigclass.xlsx", "Excel Wizard");  
*/

dt = Open(
	"$SAMPLE_IMPORT_DATA/Team Results.xlsx",
	Worksheets( "Ungrouped Team Results" ),
	Worksheet Settings(
		Headers Start on Row( 3 ),
		Data Starts on Row( 4 )
	)
);

```

**Folder**

```jsl

/* Open of folder launches file browser */
Open( "$SAMPLE_DATA" );

```

**Image**

```jsl

/* Picture file imported as a picture object */
pic = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );
New Window( "Picture", Outline Box( "Picture", Picture Box( pic ) ) );

```

**PDF**

```jsl

/* PDF file imported as one or multiple data tables
open(pdfFilePath,
    PDF Tables(Table(<Name(name)>, Add Rows(Page(n | {page list}), <Header Rows(n)>, Rect(top, left, right, bottom), <RowBorders(n, ...)>, <Column Borders(n, ....)>), ...)) |
    PDF All Tables(< Combine(All | Matching Headers | None)>, <Minimum Rows(n)>, <Minimum Columns(n)>) |
    PDF Text(<Pages(n, ...)>, <sort>) |
    PDF Wizard
);*/
dt = Open( "$SAMPLE_DATA\big class.jmp" );
w = New Window( "test", Data Table Box( dt ) );
w << save picture( "$DOCUMENTS\test.pdf", pdf );
pdftable = Open(
	"$DOCUMENTS\test.pdf",
	PDF All Tables( Combine( all ) )
); // just some of the rows
pdftable2 = Open(
	"$DOCUMENTS\test.pdf",
	PDF Tables(
		Table(
			Table Name( "test" ),
			Add Rows( Page( 1 ), Rect( 0, 0, 5, 3 ) )
		)
	)
);

```

**Table de données**

```jsl

/* Data tables, other JMP files, external files:
   Open( filePath,
     <Invisible | Private>,
     <Select Columns( "col", ... )>,
     <Ignore Columns( "col", ... )>,
     <Add to Recent Files(bool)>,
     <Quarantine Action("Allow Scripts"|"Block Scripts"|"Do Not Open"|"Show Dialog")>
     <Force Refresh>,
     <Enable Filter Views(bool)>,
     <"file type">
   )
*/
//Basic data table open
dt1 = Open( "$SAMPLE_DATA/Big Class.jmp" );
//Data table open with some options
dt2 = Open(
	"$SAMPLE_DATA/Fitness.jmp",
	Select Columns( "Name", "Sex", "Age", "Weight" )
);

```

**Texte**

```jsl

/* Text files imported into a data table:
   Open( textFilePath,
     <Invisible | Private>,
     CharSet("option") // "Best Guess", "utf-8", "utf-16", "us-ascii", "windows-1252", "x-max-roman", "x-mac-japanese", "shift-jis", "euc-jp", "utf-16be", "gb2312"
     <Number of Columns(n)>,
     <Columns(colName=colType(colWidth),... )>,// colType is Character|Numeric and colWidth is an integer specifying the width of the column
     <End Of Field (Tab|Space|Comma|Semicolon|Other|None)>,
     <EOF Other ("char")>,
     <End Of Line (CRLF|CR|LF|Semicolon|Other)>,
     <EOL Other ("char")>,
     <Strip Quotes|Strip Enclosing Quotes (0|1)>,
     <Labels|Table Contains Column Headers (0|1)>,
     <Year Rule|Two digit year rule ("decade start")>, // For example, if the earliest date is 1979, use "1970". If the earliest date is 2001, use "20xx".
     Treat Empty Columns as Numeric(0|1)
     Scan Whole File(0|1) // 1 means scan the whole file and 0 means scan for 5 seconds.
     <Column Names Start|Column Names are on line (n)>,
     <Data Starts|Data starts on line (n)>,
     <Lines to Read>, // a number
     <Use Apostrophe as Quotation Mark>,
     <CompressNumericColumns(0|1)>,
     <CompressCharacterColumns(0|1)>,
     <CompressAllowListCheck(0|1)>
   )
*/
dt = Open(
	"$SAMPLE_IMPORT_DATA/EOF_comma.txt",
	Table Contains Column Headers( 0 )
);

```

### Open Database

**Syntaxe :** dt = Open Database( dataSourceName|"Connect Dialog", "SELECT ..."|"SQLFILE=..."|tableName, &lt;invisible | private&gt;, &lt;outputTableName&gt; )

**Description :** Ouvre une base de données en utilisant ODBC, exécute la SQL donnée, et met les données dans une table de données avec le nom du tableau de sortie donné.

**JMP Version ajoutée :** Avant la version 14

```jsl

Open Database(
	"DSN=dBASE Files;DBQ=C:/Program Files/JMP/JMPPRO/19/Samples/Import Data/;",
	"SELECT HEIGHT, WEIGHT FROM Bigclass",
	"hw"
);

```

### Open Datafeed

**Syntaxe :** y = Open Datafeed( ... )

**Description :** Crée un objet et une fenêtre permettant d&apos;envoyer des messages, afin de gérer les sources de données en temps réel.

**JMP Version ajoutée :** Avant la version 14

```jsl

exfeed = Open Datafeed(/*Connect( Port( "com3" ), Baud( 4800 ), DataBits( 8 ) ),*/
	Set Script(
		ex = exfeed << getLine;
		Show( ex );
	)
);
For( exi = 0, exi < 5, exi++, /* this is just a way to test a feed when the real data source is not available...*/
	exfeed << Queue Line( Char( exi ) );
	Wait( .5 );
);

```

### Open Help

**Syntaxe :** w = Open Help( "Help" | "Scripting Index", ... )

**Description :** Ouvre l&apos;aide JMP en ligne ou l&apos;index des scripts.

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

Open Help( "Help" );

```

**Exemple 2**

```jsl

Open Help(
	"Scripting Index",
	Search(
		Term( "Open" ),
		Match( {"Contains Terms", "Match All Terms", "Ignore Case"} )
	),
	IndexContext( Category( "Functions" ) )
);

```

**Exemple 3**

```jsl

Open Help(
	"Scripting Index",
	Search(
		Term( "alpha" ),
		Match( {"Contains Terms", "Match All Terms", "Ignore Case"} )
	),
	IndexContext(
		Category( "All Categories" ),
		Object( "Search results" ),
		Method( "Get Alpha" )
	)
);

```

### Open Log

**Syntaxe :** Open Log( &lt;bring window to top&gt; )

**Description :** Ouvrir la fenêtre log

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

Open Log();
Show( Is Log Open() );

```

**Exemple 2**

```jsl

/* Bring Log Windows to the Top */
Open Log( 1 );
Show( Is Log Open() );

```

### Or

**Syntaxe :** y = x1 | x2; y = Or( x1, x2, ... )

**Description :** Renvoie l’OR logique de tous les arguments : 1 si des arguments ne sont pas nuls, 0 dans le cas contraire.

**JMP Version ajoutée :** Avant la version 14

```jsl

1 < 2 | 3 < 2;

```

### OrMZ

**Syntaxe :** y = OrMZ( x1, x2, ... )

**Description :** Renvoie l’OR logique de tous les arguments en traitant les valeurs manquantes comme des zéro : 1 si des arguments ne sont pas nuls, 0 dans le cas contraire.

**JMP Version ajoutée :** Avant la version 14

```jsl

OrMZ( 1 < 2, 3 < 2 );

```

### Ortho

**Syntaxe :** L = Ortho( A, &lt;Centered( 0 )&gt;, &lt;Scaled( 1 )&gt; )

**Description :** Orthogonalise les colonnes d&apos;une matrice. L&apos;option « Centré » conduit à une somme nulle des éléments de la colonne. L&apos;option « Normalisation » conduit à une norme unité des vecteurs correspondant aux colonnes.

**JMP Version ajoutée :** Avant la version 14

```jsl

Ortho( [1 1, 1 -1] );

```

### Ortho Poly

**Syntaxe :** L = Ortho Poly( V, order )

**Description :** Renvoie des polynômes orthogonaux du vecteur V jusqu&apos;à l&apos;ordre spécifié par l’argument order. L’argument V peut être une ligne ou un vecteur colonne. L&apos;option de réduction les rend de longueur unitaire.

**JMP Version ajoutée :** Avant la version 14

```jsl

Ortho Poly( 1 :: 10, 2 );

```

### Outline Box

**Syntaxe :** y = Outline Box( title, &lt;command script pairs list&gt;, displayBox, ... )

**Description :** Crée un élément de contour dans le rapport en retournant la référence de boîte d&apos;affichage. Pour inclure un menu dans le nœud de contour, spécifie la liste command script pairs list, indiquant les commandes de menu et les scripts associés.

**JMP Version ajoutée :** Avant la version 14

```jsl

New Window( "Example",
	Outline Box( "Picker",
		{"Show label value", Show( teb << get text )},
		H List Box(
			Text Box( "Label:" ),
			teb = Text Edit Box( Char( 213 ) )
		)
	)
);

```

### Oval

**Syntaxe :** Oval( left, top, right, bottom, &lt;fill=0&gt; )

**Description :** Dessine un ovale dans le rectangle spécifié, rempli si le remplissage est différent de zéro.

**JMP Version ajoutée :** Avant la version 14

```jsl

New Window( "Example",
	Graph Box(
		Pen Color( "Green" );
		Pen Size( 2 );
		Fill Color( "Red" );
		Oval( 15, 75, 65, 55, 1 );
		Oval( 10, 80, 70, 50 );
	)
);

```

### P Spline Coef

**Syntaxe :** coef = P Spline Coef( x, Internal Knot Grid, &lt;degree = 3&gt;, &lt;KnotEndPoints = min(x) || max(x)&gt; )

**Description :** Renvoie la matrice des coefficients P-splines. Internal Knot Grid est soit le nombre de points souhaité pour le nœud, sur la base des percentiles de x, ou un vecteur spécifiant les points du nœud interne. Le paramètre facultatif degree spécifie le degré des P-splines, 3 étant la valeur par défaut.

**JMP Version ajoutée :** 14

```jsl

P Spline Coef( [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2 );
P Spline Coef( [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [3, 7] );

```

### Page Break Box

**Syntaxe :** Page Break Box()

**Description :** Crée une boîte d&apos;affichage forçant un saut de page.

**JMP Version ajoutée :** Avant la version 14

```jsl

New Window( "Example",
	Graph Box(
		Frame Size( 300, 300 ),
		Marker( Marker State( 3 ), [11 44 77], [75 25 50] );
		Pen Color( "Blue" );
		Line( [10 30 70], [88 22 44] );
	),
	Page Break Box(),
	Graph Box(
		Frame Size( 300, 300 ),
		Marker( Marker State( 3 ), [77 44 11], [75 25 50] );
		Pen Color( "Red" );
		Line( [70 30 10], [88 22 44] );
	)
);

```

### Panel Box

**Syntaxe :** y = Panel Box( title, displayBoxArgs )

**Description :** Renvoie une boîte d&apos;affichage pour étiqueter et contenir la boîte d&apos;affichage de l&apos;argument.

**JMP Version ajoutée :** Avant la version 14

```jsl

New Window( "Example",
	Tab Box(
		"alpha",
		Panel Box( "panel", Text Box( "text" ) ),
		"beta",
		Popup Box( {"x", ex = 1, "y", ex = 2} )
	)
);

```

### Parallel Assign

**Syntaxe :** tf = ParallelAssign( { thread_local_var = global_var, ... }, m[ a, b ] = expression using a and b )

**Description :** Utilisez des threads multiples pour assigner des valeurs à la matrice. Si un thread génère une exception, un message est ajouté au log et la valeur 0 est renvoyée. Si tous les threads se terminent sans erreur, la valeur 1 est renvoyée. Les fonctions qui lancent des plates-formes, créent ou utilisent des tables de données, ou accèdent au sous-système graphique sont prises en charge uniquement dans le thread principal. Elles génèrent une exception en cas d&apos;appel depuis un thread worker.

**JMP Version ajoutée :** Avant la version 14

```jsl

m = J( 3, 2, -1 );
If(
	Parallel Assign(
		{/*no locals */ },
		m[a/* 1,2,3 */, b/* 1,2 */ ] = a * a + b
	) == 0,
	Throw( "thread failed" )
);
m;/* 1*1+1  1*1+2, 2*2+1  2*2+2, 3*3+1  3*3+2 */

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

### Parse Date

**Syntaxe :** dt = In Format( s, formatString, &lt; &lt;&lt;Use Locale(b=1)&gt;, &lt; &lt;&lt;Restrict &gt; )dt = In Format( s, "Format Pattern", pattern, &lt; &lt;&lt;Use Locale(b=1)&gt; )

**Description :** Analyse une chaîne d&apos;un format donné. Si le format correspond à un format de date et heure, la valeur est exprimée comme si elle était entre As Date() et renvoie la date au format jjmoiaaaa. L&apos;argument facultatif <<Restrict utilisé avec le « Meilleur » formatString permet uniquement la conversion aux formats entier, décimal et scientifique.

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

Informat( "07152000", "MMDDYYYY" );

```

**Exemple 2**

```jsl

Informat( "07.15.2000", "Format Pattern", "<MM>.<DD>.<YYYY>" );

```

**Exemple 3**

```jsl

Informat( "86.8287° W", "Longitude DDD" );

```

**Exemple 4**

```jsl

Informat( "123.45%", "Percent" );

```

**Exemple 5**

```jsl

Show(
	Informat( "1.23e4", "Best" ),
	Informat( "1.23e4", "Best", <<Restrict ),
	Informat( "1989-10-04", "Best" ),
	Informat( "1989-10-04", "Best", <<Restrict )
);

```

### Parse JSON

**Syntaxe :** l = Parse JSON( jsonstring )

**Description :** Convertir le texte JSON en une liste JSL ou en un tableau associatif représentant la structure spécifiée par les données JSON.

**JMP Version ajoutée :** 14

```jsl

l = Parse JSON(
	"[ { \!"name\!": \!"KATIE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 59, \!"weight\!": 95 }, { \!"name\!": \!"LOUISE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 61, \!"weight\!": 123 }, { \!"name\!": \!"JANE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 55, \!"weight\!": 74 } ]"
);
Show( l );

```

### Parse XML

**Syntaxe :** Parse XML( string, OnElement( tagname, StartTag( expr ), EndTag( expr ) ), ... )

**Description :** Analyse une expression XML en utilisant les expressions OnElement pour les balises XML spécifiées.

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

/*See example two for more details*/
ex =
"<table name='fromxml'><col name='x'>[1 2 3]</col><col name='y'>[11 22 33]</col></table>";
Parse XML( ex,
	On Element( "table", Start Tag( New Table( XML Attr( "name" ) ) ) ),
	On Element(
		"col",
		End Tag(
			New Column( XML Attr( "name" ),
				Set Values( Parse( XML Text() ) )
			)
		)
	)
);

```

**Exemple 2**

```jsl


doc =
"
<a title='one'>
    WWWa
    <b>BB<c>ZZZ</c>B1</b>
    XXXa
    <b>BBB2</b>
    YYYa
    <c>CCC</c>
</a>";
// doc, above, has tags a, b, and c. The c tags are not handled by the parser, below,
// to show why text should be collected by Text(...) and then processed by EndTag(...)
// Text(...) captures the BB ZZZ B1 while using EndTag(...) only captures the final snippet.
docname = "undefined";
doctext = "";
recordtext = "";
records = {};
NestLevel = 0; // not really used here, but shows how to use Start/End Tag to track nesting level
Parse XML( doc,
	On Element(
		"a",
		Start Tag(
			docname = XML Attr( "title" );
			NestLevel++;
		), 
        // decide here to trim the CRLF and blanks and use a single blank
		Text( doctext = doctext || Trim( XML Text() ) || " " ),
		End Tag( NestLevel-- )
	),
	On Element(
		"b",
		Start Tag( NestLevel++ ), 
        // comment out the next line and...
		Text( recordtext = recordtext || Trim( XML Text() ) || " " ),
		End Tag(
            // ...uncomment the next line and observe the "B1" vs "BB ZZZ B1 " value in records
			// recordtext = XMLText();
			Insert Into( records, recordtext );
			recordtext = "";
			NestLevel--;
		)
	)
);

Show( docname, doctext, records, NestLevel );

```

### Pat Abort

**Syntaxe :** Pat Abort()

**Description :** Génère une valeur de configuration qui entraîne l&apos;échec immédiat de toute la correspondance, sans sauvegarde ni nouvelle tentative.

**JMP Version ajoutée :** Avant la version 14

```jsl

source = "xxxxx";
n = 0;
pattern = Pat Succeed() + Pat Arb() >> xs
+Expr(
	Show( xs );
	n = n + 1;
	If( n > 16,
		Pat Abort(),
		Pat Fail()
	);
);
rc = Pat Match( source, pattern, NULL, FULLSCAN );

```

### Pat Altern

**Syntaxe :** Pat Altern( pat1, pat2, ... )

**Description :** Génère une valeur de configuration qui correspond à une quelconque des configurations données. Généralement exprimée comme pat1 | pat2 | ....

**JMP Version ajoutée :** Avant la version 14

```jsl

Pat Match(
	"123456789",
	((Pat Pos( 2 ) + "1") | (Pat Pos( 1 ) + "2") | (Pat Pos( 0 ) + "3")
	) >> result
);
result;

```

### Pat Any

**Syntaxe :** Pat Any( string )

**Description :** Génère une valeur de configuration qui correspondra à n&apos;importe quel caractère présent dans la chaîne.

**JMP Version ajoutée :** Avant la version 14

```jsl

operators = Pat Any( "*+-/" );
text = "abc+def";
Pat Match( text, operators >> op );
op;

```

### Pat Arb

**Syntaxe :** Pat Arb( pattern )

**Description :** Génère une valeur de configuration qui correspond à zéro ou plusieurs caractères.

**JMP Version ajoutée :** Avant la version 14

```jsl

Pat Match(
	"123nonnumeric456",
	Pat Span( "0123456789" ) + Pat Arb() >> result
	+Pat Span( "0123456789" )
);
result;

```

### Pat Arb No

**Syntaxe :** Pat Arb No( pattern )

**Description :** Génère une valeur de configuration qui correspond à son argument zéro ou plusieurs fois. Équivalent à patRepeat(pattern,0,infinity,RELUCTANT) ; (*? dans une expression régulière).

**JMP Version ajoutée :** Avant la version 14

```jsl

Pat Match(
	"xyz aaaaabbbbbb@ccc no c is matched because reluctant",
	Pat Arb No( "a" ) >> a + Pat Arb No( "b" ) >> b + "@"
	+Pat Arb No( "c" ) >> c
);
" a=" || a || " b=" || b || " c=" || c;

```

### Pat At

**Syntaxe :** Pat At( variable )

**Description :** Génère une valeur de configuration qui correspond à un nombre de caractères égal à zéro et affecte la position actuelle du curseur à une variable. Généralement exprimée comme patpos()>>variable.

**JMP Version ajoutée :** Avant la version 14

```jsl

Pat Match( "123456789", Pat Len( 2 ) + Pat At( result ) );
result;

```

### Pat Break

**Syntaxe :** Pat Break( string )

**Description :** Génère une valeur de configuration qui correspond à aucun ou plusieurs caractères non présents dans la chaîne et s&apos;arrête avant un caractère (nécessaire) dans la chaîne.

**JMP Version ajoutée :** Avant la version 14

```jsl

b = "- ";
Pat Match(
	"one two three-",
	Pat Repeat( Pat Break( b ) >> word + Pat Any( b ) )
);
word;

```

### Pat Concat

**Syntaxe :** Pat Concat( pat1, pat2, ... )

**Description :** Génère une valeur de configuration qui correspond à chacune des configurations données à tour de rôle. Généralement exprimée comme pat1 + pat2 + ....

**JMP Version ajoutée :** Avant la version 14

```jsl

num = Pat Break( "," );
sep = ",";
Pat Match( "1.3,7.9,8.66", num + sep + num >> result + sep + num );
result;

```

### Pat Conditional

**Syntaxe :** Pat Conditional( pattern, variable )

**Description :** Génère une valeur de configuration qui correspond à la configuration donnée et enregistre le texte correspondant dans une variable en cas de succès. Généralement exprimée comme pattern >? variable.

**JMP Version ajoutée :** Avant la version 14

```jsl

a = "unchanged";
b = "unchanged";
Pat Match( "123456789", (Pat Len( 2 ) >? a | Pat Len( 1 ) >? b) + "2" );
" a=" || a || " b=" || b;

```

### Pat Fail

**Syntaxe :** Pat Fail()

**Description :** Génère une valeur de configuration qui échoue toujours la correspondance vers l&apos;avant, obligeant le système à essayer des alternatives.

**JMP Version ajoutée :** Avant la version 14

```jsl

source = "xxxxx";
n = 0;
pattern = Pat Succeed() + Pat Arb() >> xs
+Expr(
	Show( xs );
	n = n + 1;
	If( n > 16,
		Pat Abort(),
		Pat Fail()
	);
);
rc = Pat Match( source, pattern, NULL, FULLSCAN );

```

### Pat Fence

**Syntaxe :** Pat Fence()

**Description :** Génère une valeur de configuration qui correspond aux caractères zéro vers l&apos;avant, et échoue lors de la sauvegarde, provoquant l&apos;échec de la correspondance. Également utilisé pour réduire la pile de sauvegardes de configuration.

**JMP Version ajoutée :** Avant la version 14

```jsl

rc = Pat Match(
	"123456789",
	(Pat Len( 1 ) | Pat Len( 2 )) >> result + Pat Fence() + "3"
);
"rc=" || Char( rc ) || " result=" || result;

```

### Pat Immediate

**Syntaxe :** Pat Immediate( pattern, variable )

**Description :** Génère une valeur de configuration qui correspond à la configuration donnée et enregistre le texte correspondant dans une variable. Généralement exprimée comme pattern >> variable.

**JMP Version ajoutée :** Avant la version 14

```jsl

a = "unchanged";
b = "unchanged";
Pat Match( "123456789", (Pat Len( 2 ) >> a | Pat Len( 1 ) >> b) + "2" );
" a=" || a || " b=" || b;

```

### Pat Len

**Syntaxe :** Pat Len( n )

**Description :** Génère une valeur de configuration qui correspond à n caractères.

**JMP Version ajoutée :** Avant la version 14

```jsl

Pat Match( "123456789", Pat Len( 2 ) + Pat Len( 3 ) >> result );
result;

```

### Pat Look Ahead

**Syntaxe :** Pat Look Ahead( pattern, &lt;0|1&gt; )

**Description :** Une correspondance de largeur zéro après la position actuelle. Le deuxième argument facultatif prend par défaut la valeur zéro. 1 désigne une correspondance négative, ou une absence de correspondance.

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

Test = "These are Bob's sons' nails.";
While( /* repeat the match until it fails */
	Pat Match( Test, "s" + Pat Look Ahead( "'" ), "z" ), /* find an s that IS followed by an apostrophe and replace it with z */
	Print( test )
);

```

**Exemple 2**

```jsl

Test = "These are Bob's sons' nails.";
While( /* repeat the match until it fails */
	Pat Match( Test, "s" + Pat Look Ahead( "'", 1 ), "z" ), /* find an s that is NOT followed by an apostrophe and replace it with z */
	Print( test )
);

```

**Exemple 3**

```jsl

Test = "a bb ccc dddd";
While( /* keep repeating the match until it won't match */
	Pat Match(
		Test,
		Pat Len( 1 ) >> xxx/* find any character */
		+ Pat Look Behind( Expr( xxx ) + Expr( xxx ) ) /* back up 2 positions, which includes the character just found */
		+ Pat Look Ahead(
			Expr( xxx ) /* and look ahead one position */
		),
		"@" /* replacement for the middle character of a triple */
	),
	Print( test ) /* show each intermediate result */
);

```

### Pat Look Behind

**Syntaxe :** Pat Look Behind( pattern, &lt;0|1&gt; )

**Description :** Une correspondance de largeur zéro avant la position actuelle. Le deuxième argument facultatif prend par défaut la valeur zéro. 1 désigne une correspondance négative, ou une absence de correspondance.

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

Test = "These are Bob's sons' nails.";
While( /* repeat the match until it fails */
	Pat Match( Test, Pat Look Behind( "'" ) + "s", "z" ), /* find an s that IS preceded by an apostrophe and replace it with z */
	Print( test )
);

```

**Exemple 2**

```jsl

Test = "These are Bob's sons' nails.";
While( /* repeat the match until it fails */
	Pat Match( Test, Pat Look Behind( "'", 1 ) + "s", "z" ), /* find an s that is NOT preceded by an apostrophe and replace it with a z */
	Print( test )
);

```

**Exemple 3**

```jsl

Test = "a bb ccc dddd";
While( /* keep repeating the match until it won't match */
	Pat Match(
		Test,
		Pat Len( 1 ) >> xxx/* find any character */
		+ Pat Look Behind( Expr( xxx ) + Expr( xxx ) ) /* back up 2 positions, which includes the character just found */
		+ Pat Look Ahead(
			Expr( xxx ) /* and look ahead one position */
		),
		"@" /* replacement for the middle character of a triple */
	),
	Print( test ) /* show each intermediate result */
);

```

### Pat Match

**Syntaxe :** Pat Match( source, pattern, &lt;replacement&gt; )

**Description :** Exécute la correspondance de configuration dans la variable pattern sur la chaîne dans la variable source ; le texte de remplacement replacement facultatif remplace le texte correspondant.

**JMP Version ajoutée :** Avant la version 14

```jsl

string = "John Smith";
Pat Match(
	string,
	Pat Break( " " ) >> first + Pat Span( " " ) + Pat Rem() >> last,
	last || ", " || first
);
string;

```

### Pat Not Any

**Syntaxe :** Pat Not Any( string )

**Description :** Génère une valeur de configuration qui correspondra à n&apos;importe quel caractère non présent dans la chaîne.

**JMP Version ajoutée :** Avant la version 14

```jsl

delimiter = ";,-";
text = "fish,dog,cat,";
Pat Match(
	text,
	Pat Repeat( Pat Not Any( delimiter ) ) >> word
	+Pat Any( delimiter )
);
word;

```

### Pat Pos

**Syntaxe :** Pat Pos( n )

**Description :** Génère une valeur de configuration qui correspond à un nombre de caractères égal à zéro si le curseur se trouve à la position n. En absence d’arguments, la fonction Pat Pos() renvoie la position du curseur pour >> ou >? affectation : patpos()>>variable.

**JMP Version ajoutée :** Avant la version 14

```jsl

Pat Match(
	"ab3defghi",
	Pat Pos( 2 ) + Pat Len( 1 ) >> v/*v=3*/+ Expr( Pat Len( v ) )
	+Pat Pos( /* no argument returns current position = 6 */ ) >>
	result
);
result;

```

### Pat R Pos

**Syntaxe :** Pat R Pos( n )

**Description :** Génère une valeur de configuration qui correspond à un nombre de caractères égal à zéro si le curseur est à n caractères de la fin.

**JMP Version ajoutée :** Avant la version 14

```jsl

Pat Match( "quick brown fox", Pat R Pos( 3 ) + Pat Rem() >> result );
result;

```

### Pat R Tab

**Syntaxe :** Pat R Tab( n )

**Description :** Génère une valeur de configuration qui correspond à zéro caractère ou plus pour faire avancer le curseur de n caractères avant la fin.

**JMP Version ajoutée :** Avant la version 14

```jsl

Pat Match( "123456789", "23" + Pat R Tab( 2 ) >> result );
result;

```

### Pat Regex

**Syntaxe :** Pat Regex( string )

**Description :** Génère une valeur de configuration qui correspond à l&apos;expression régulière dans la chaîne.

**JMP Version ajoutée :** Avant la version 14

```jsl

string = "John Smith";
Regex Match( string, Pat Regex( "([^ ]+)([ ]+)([^ ]+)" ), "\3, \1" );
string;

```

### Pat Rem

**Syntaxe :** Pat Rem()

**Description :** Génère une valeur de configuration qui correspond au reste du texte.

**JMP Version ajoutée :** Avant la version 14

```jsl

Pat Match( "the quick fox", Pat R Pos( 3 ) + Pat Rem() >> result );
result;

```

### Pat Repeat

**Syntaxe :** Pat Repeat( pattern, &lt;min=1&gt;, &lt;max=infinity&gt;, &lt;GREEDY or RELUCTANT=GREEDY&gt; )

**Description :** Génère une valeur de configuration qui correspond à la configuration donnée entre min et max fois.

**JMP Version ajoutée :** Avant la version 14

```jsl

Pat Match(
	"xyz aaaaabbbbbbccc 3 c is matched because greedy",
	Pat Repeat( "a" ) >> a + Pat Repeat( "b" ) >> b + Pat Repeat( "c" )
	 >> c
);
" a=" || a || " b=" || b || " c=" || c;

```

### Pat Span

**Syntaxe :** Pat Span( string )

**Description :** Génère une valeur de configuration qui correspond à un ou plusieurs caractères dans la chaîne.

**JMP Version ajoutée :** Avant la version 14

```jsl

sp = Pat Span( "0123456789.-" );
Pat Match( "junk=-33.44e33", sp >> result );
result;

```

### Pat String

**Syntaxe :** Pat String( string )

**Description :** Génère une valeur de configuration qui correspond à la chaîne. En général, la chaîne peut être utilisée sans la fonction. Pat String().

**JMP Version ajoutée :** Avant la version 14

```jsl

x = Pat String( "a" || "b" );
Pat Match(
	"acbdbababc",
	Pat Arb() >> before + Pat Repeat( x ) >> match + Pat Rem() >> after
);
"before=" || before || " match=" || match || " after=" || after;

```

### Pat Succeed

**Syntaxe :** Pat Succeed()

**Description :** Génère une valeur de configuration qui correspond toujours aux caractères zéro, même lors de la sauvegarde.

**JMP Version ajoutée :** Avant la version 14

```jsl

source = "xxxxx";
n = 0;
pattern = Pat Succeed() + Pat Arb() >> xs
+Expr(
	Show( xs );
	n = n + 1;
	If( n > 16,
		Pat Abort(),
		Pat Fail()
	);
);
rc = Pat Match( source, pattern, NULL, FULLSCAN );

```

### Pat Tab

**Syntaxe :** Pat Tab( n )

**Description :** Génère une valeur de configuration qui correspond à zéro caractère ou plus pour faire avancer le curseur à la position n.

**JMP Version ajoutée :** Avant la version 14

```jsl

Pat Match( "123456789", "23" + Pat Tab( 6 ) >> result );
result;

```

### Pat Test

**Syntaxe :** Pat Test( expression )

**Description :** Génère une valeur de configuration qui correspond à zéro caractère si l&apos;expression n&apos;est pas nulle. L&apos;expression est réévaluée pendant chaque test, équivalent à utiliser Expr().

**JMP Version ajoutée :** Avant la version 14

```jsl

nCats = 0;
whichCat = 3;
string = "catch a catnapping cat in a catsup factory";
rc = Pat Match(
	string,
	"cat" + Pat Test(
		nCats = nCats + 1;
		nCats == whichCat;
	),
	"dog"
);
string;

```

### Path

**Syntaxe :** Path( pathMatrix|pathText, &lt;fill=0&gt; )

**Description :** Dessine un trait le long du chemin donné si le remplissage est zéro, ou peint l’intérieur du chemin donné si le remplissage est différent de zéro. Le chemin peut être spécifié par une matrice N x 3 ou par une représentation textuelle. Une matrice de chemin a trois colonnes pour x, y et les drapeaux pour chaque point du chemin. Les valeurs de drapeau sont 0 pour le contrôle, 1 pour le déplacement, 2 pour le segment de ligne, 3 pour le segment cubique de Bézier et sont négatifs si le point ferme aussi le chemin. Le texte de chemin autorise la syntaxe SVG.

**JMP Version ajoutée :** Avant la version 14

```jsl

New Window( "Example",
	Graph Box(
		Fill Color( "blue" );
		Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3], 1 );
		Path( "M20,20 C20,60 60,60 60,20 Z", 0 );
	)
);

```

### Path To Char

**Syntaxe :** s = Path To Char( pathMatrix )

**Description :** Convertit une spécification de chemin sous forme de matrice en une sous forme de caractère.

**JMP Version ajoutée :** Avant la version 14

```jsl

Path To Char( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] );

```

### Payment

**Syntaxe :** x = Payment( rate, nper, pv, &lt;fv=0&gt;, &lt;type=0&gt; )

**Description :** Renvoie le remboursement d’un prêt en se basant sur des paiements et un taux d’intérêt constants. L’argument type est 0 pour les paiements en fin de période et 1 pour les paiements en début de période. Équivalent à la fonction PMT de Microsoft Excel.

**JMP Version ajoutée :** Avant la version 14

```jsl

Payment( .05 / 12, 30 * 12, 100000 )
-Interest Payment( .05 / 12, 13, 30 * 12, 100000 )
-Principal Payment( .05 / 12, 13, 30 * 12, 100000 );

```

### Pdf Page Count

**Syntaxe :** Pdf Page Count( file name)

**Description :** Renvoie le nombre de pages dans un fichier PDF.

**JMP Version ajoutée :** Avant la version 14

```jsl

pageCount = Pdf Page Count( "$documents\myfile.pdf" );

```

### Pen Color

**Syntaxe :** Pen Color( &lt;name|index|rgbList&gt; )

**Description :** Définit la couleur pour le dessin des lignes.

**JMP Version ajoutée :** Avant la version 14

```jsl

New Window( "Example",
	Graph Box(
		Pen Color( {.3, .5, .7} );
		Circle( {20, 20}, 10 );
	)
);

```

### Pen Size

**Syntaxe :** Pen Size( &lt;x&gt; )

**Description :** Définit la taille du stylo en pixels pour le dessin des lignes.

**JMP Version ajoutée :** Avant la version 14

```jsl

New Window( "Example",
	Graph Box(
		Pen Size( 4 );
		Line( [10 30 90], [88 22 44] );
	)
);

```

### Pi

**Syntaxe :** y = Pi()

**Description :** Renvoie la constante mathématique π, avec une précision d&apos;environ 15 chiffres après la virgule : 3.1415926535....

**JMP Version ajoutée :** Avant la version 14

```jsl

Char( Pi(), 5 );

```

### Pick Color

**Syntaxe :** color = Pick Color( &lt;window title&gt;, &lt;name|index|rgbList&gt; )

**Description :** Renvoie une couleur qui a été sélectionnée avec l&apos;outil Pipette standard.

**JMP Version ajoutée :** 14

```jsl

pickedColor = Pick Color( "Pick a Line Color", "Red" );
New Window( "Example",
	Graph Box(
		Frame Size( 300, 300 ),
		Marker( Marker State( 3 ), [11 44 77], [75 25 50] );
		Pen Color( pickedColor );
		Line( [10 30 70], [88 22 44] );
	)
);

```

### Pick Color Theme

**Syntaxe :** theme = Pick Color Theme( &lt;window title&gt;, &lt;Color Theme(name|specification)&gt;, &lt;Type("Continuous" | "Sequential" | "Bad to Good" | "Categorical")&gt;)

**Description :** Renvoie un thème de couleur qui a été sélectionné avec l&apos;outil Pipette standard. Le thème initial peut être spécifié explicitement ou en choisissant un Type pour utiliser les thèmes définis dans les préférences.

**JMP Version ajoutée :** 17

**Constructeur de graphiques**

```jsl


theme = Pick Color Theme(
	"Choose a color theme",
	Type( "Bad to Good" )
);
dt = Open( "$SAMPLE_DATA/SATByYear.jmp" );
gb = dt << Graph Builder(
	Show Control Panel( 0 ),
	Variables( Color( :SAT Math ), Shape( :State ) ),
	Elements( Map Shapes( Legend( 2 ) ) )
);
server = gb << Get Legend Server;
item = server << Get Legend Item( 2, 1 );
item << Set Properties( {Gradient( {Color Theme( theme )} )} );

```

**Légende de ligne**

```jsl


pickedTheme = Pick Color Theme( "Pick a Color Theme" );
biv = Open( "$SAMPLE_DATA/Big Class.jmp" ) << Run Script( "Bivariate" );
Report( biv )[FrameBox( 1 )] <<
Row Legend( "age", Color Theme( pickedTheme ) );

```

### Pick Directory

**Syntaxe :** path = Pick Directory( &lt;prompt&gt;, &lt;path&gt;, &lt;Show Files( boolean )&gt; )

**Description :** Une fenêtre Ouvrir le répertoire s&apos;affiche, en renvoyant le nom de chemin d&apos;accès du répertoire choisi. La chaîne prompt facultative s’affiche en haut de la fenêtre. L’argument Show Files peut être l’un des trois arguments et est du type booléen. La valeur 1 affiche les fichiers dans la fenêtre Choisir un répertoire, la valeur 0 non. La valeur 0 est la valeur par défaut. La chaîne path indique le répertoire affiché initialement dans la fenêtre Choisir un répertoire. Si vous utilisez la chaîne path, elle doit suivre la chaîne prompt, mais l’argument Show Files peut se situer entre les deux.

**JMP Version ajoutée :** Avant la version 14

**Show Files**

```jsl

Pick Directory( "Select a directory", "$DOCUMENTS", Show Files( 1 ) );

```

**Simple**

```jsl

Pick Directory( "Select a directory" );

```

### Pick File

**Syntaxe :** path = Pick File( &lt;prompt&gt;, &lt;initial directory&gt;, &lt;filterList&gt;, &lt;first filter&gt;, &lt;saveFlag=0|1&gt;, &lt;default file&gt;, &lt;multiple&gt; )

**Description :** Une fenêtre Ouvrir s&apos;affiche, en renvoyant le nom du chemin d&apos;accès du fichier choisi. L’argument filterList est une liste de chaînes de la forme : "Étiquette|suffixe1;suffixe2;...". L’argument first filter spécifie quel est le filtre affiché en premier. Le cinquième argument indique si la fenêtre doit fonctionner comme une fenêtre d’enregistrement (saveFlag = 1) ou d’ouverture (saveFlag = 0). L’argument de default file spécifie le fichier sélectionné initialement. L’argument multiple permet de sélectionner plusieurs fichiers si saveFlag est égal à 0.

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

Pick File(
	"Select JMP File",
	"$DOCUMENTS",
	{"JMP Files|jmp;jsl;jrn", "All Files|*"},
	1,
	0,
	"newJmpFile.jmp"
);

```

**Exemple 2**

```jsl

Files = Pick File(
	"Select JMP File",
	"$SAMPLE_DATA",
	{"JMP Files|jmp;jsl;jrn", "All Files|*"},
	1,
	0,
	"",
	"multiple"
);
For( i = 1, i <= N Items( Files ), i++,
	Try( Open( Files[i] ) )
);

```

**Exemple 3**

```jsl

filename = Pick File(
	"Save As Text",
	"$DOCUMENTS",
	{"Text File|txt"},
	1,
	1, // Save Flag
	"export.txt"
);
If( Is Missing( filename ),
	Print( "Canceled" ),
	Save Text File( filename, "The quick brown fox" )
);

```

### Picture Box

**Syntaxe :** pict = Picture Box( Picture Object )

**Description :** Crée une boîte d’affichage contenant un objet d’image graphique Vous pouvez ouvrir une image, puis y faire référence ou bien choisir la commande Ouvrir et indiquer le chemin de l’image à la place de l’argument Picture Object.

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

New Window( "Example",
	Picture Box(
		Open( "$SAMPLE_IMAGES/black rhino footprint.jpg", jpg )
	)
);

```

**Exemple 2**

```jsl

pict = Open( "$SAMPLE_IMAGES/black rhino footprint.jpg", jpg );
New Window( "Example", Picture Box( pict ) );

```

### Pie

**Syntaxe :** Pie( left, top, right, bottom, startAngle, endAngle )

**Description :** Dessine un secteur d&apos;un diagramme en secteurs.

**JMP Version ajoutée :** Avant la version 14

```jsl

New Window( "Example",
	Graph Box(
		Fill Color( "red" );
		Pie( 10, 80, 70, 40, 0, 90 );
	)
);

```

### Pie Seg

**Syntaxe :** ps = Pie Seg(&lt;{ xorigin, yorigin }&gt;, &lt;radius&gt;, &lt;style("pie", "ring", "coxcomb")&gt;, values)

**Description :** Crée un seg à secteurs à l&apos;origin spécifiée, avec le radius spécifié, basé sur les valeurs spécifiées au format de matrice.

**JMP Version ajoutée :** Avant la version 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Summarize(
	a = by( :age ),
	c = count,
	sumHt = Sum( :height ),
	sumWt = Sum( :weight )
);
New Window( "Pie Seg",
	Graph Box(
		Pie Seg( style( "ring" ), {25, 50}, .25, sumHt ),
		Pie Seg( {75, 50}, .25, sumWt )
	)
);

```

### Pixel Line To

**Syntaxe :** Pixel Line To( h, v )

**Description :** Dessine une ligne allant de la coordonnée actuelle du stylo pixel aux coordonnées horizontale et verticale données.

**JMP Version ajoutée :** Avant la version 14

```jsl

New Window( "Example",
	Graph Box(
		Pixel Origin( 50, 50 ); // in axis coordinates
		// others are pixels, relative to pixel origin
		Pixel Move To( 0, 0 );
		Pixel Line To( 0, 80 );
		Pixel Move To( 2, 0 );
		Pixel Line To( 2, 40 );
		Pixel Move To( 4, 0 );
		Pixel Line To( 4, 20 );
	)
);

```

### Pixel Move To

**Syntaxe :** Pixel Move To( h, v )

**Description :** Déplace le stylo à adresse pixel aux coordonnées horizontales et verticales relatives à l&apos;origine.

**JMP Version ajoutée :** Avant la version 14

```jsl

New Window( "Example",
	Graph Box(
		Pixel Origin( 50, 50 ); // in axis coordinates
		// others are pixels, relative to pixel origin
		Pixel Move To( 0, 0 );
		Pixel Line To( 0, 80 );
		Pixel Move To( 2, 0 );
		Pixel Line To( 2, 40 );
		Pixel Move To( 4, 0 );
		Pixel Line To( 4, 20 );
	)
);

```

### Pixel Origin

**Syntaxe :** Pixel Origin( x, y )

**Description :** Définit l&apos;origine sur laquelle se basent les commandes de dessin de pixel.

**JMP Version ajoutée :** Avant la version 14

```jsl

New Window( "Example",
	Graph Box(
		Pixel Origin( 50, 50 ); // in axis coordinates
		// others are pixels, relative to pixel origin
		Pixel Move To( 0, 0 );
		Pixel Line To( 0, 80 );
		Pixel Move To( 2, 0 );
		Pixel Line To( 2, 40 );
		Pixel Move To( 4, 0 );
		Pixel Line To( 4, 20 );
	)
);

```

### Pixel Path

**Syntaxe :** PixelPath( h, v, pathMatrix|pathText, &lt;fill=0&gt;, &lt;scale=1.0&gt;, &lt;orient={0.0,1.0}&gt; )

**Description :** Trace un trait le long du chemin en question, basé sur le pixel, si le remplissage est égal à 0 ; ou peint l’intérieur du chemin en question si le remplissage n’est pas égal à 0. Le chemin peut être spécifié avec une matrice N x 3 ou avec une représentation texte. Une matrice de chemin possède trois colonnes pour x, y et les alertes pour chaque point sur le chemin. Les valeurs d’alerte sont 0 pour le contrôle, 1 pour le déplacement, 2 pour le segment de droite, 3 pour le segment de Bézier cubique, et sont négatives si le point ferme également le chemin.  Le texte du chemin supporte la syntaxe SVG. Le chemin sera mis à l’échelle et traduit à l’original en fonction des paramètres facultatifs, avec l’orientation spécifiée dans l’espace de l’axe.

**JMP Version ajoutée :** Avant la version 14

```jsl

New Window( "Example",
	Graph Box(
		Fill Color( "blue" );
		angle = 45 * Pi() / 180; // 45 deg in radians
		Pixel Origin( 20, 80 );
		Pixel Path(
			0,
			0, // offset from pixel origin in pixels
			[-10 -10 1,
			10 -10 0,
			20 20 0,
			-10 20 -3],
			1, // fill
			2.0, // scale
			{Sin( angle ), Cos( angle )} // clockwise rotation
		);
		Pixel Origin( 80, 20 );
		Pixel Path(
			0,
			0,
			"M-10,-10 C10,-10 20,20 -10,20 Z",
			0,
			1.0,
			{Sin( -angle ), Cos( -angle )}
		);
	)
);

```

### Pixel Text

**Syntaxe :** Pixel Text( &lt;properties&gt;, {h, v}, text, ... )

**Description :** Avance jusqu’à la position du pixel {h, v} et dessine le texte spécifié par l’argument text. Les arguments de propriété nommés incluent Center Justified, Right Justified, Top Align, Bottom Align, Erased, Boxed, Counterclockwise, Clockwise. Les arguments de position, les arguments nommés et les chaînes peuvent être mélangés dans n’importe quel ordre.

**JMP Version ajoutée :** Avant la version 14

```jsl


New Window( "Example",
	Graph Box(
		Pixel Origin( 10, 80 ); // in axis coordinates
		Pixel Move To( 0, 0 );
		Pixel Line To( 160, 140 ); // in pixels from pixel origin
		Pixel Text( {0, 0}, "default" );
		Pixel Text(
			Erased,
			Boxed,
			Clockwise,
			{75, 75},
			"Erased Boxed Clockwise"
		);
		Pixel Text(
			Center Justified,
			Bottom Align,
			{160, 140},  // in pixels from pixel origin
			"Bottom Align\!NCenter Justified"
		);
	)
);

```

### Platform

**Syntaxe :** y = Platform( dataTable, script )

**Description :** Calcule le script donné dans le contexte de la table de données donnée. Renvoie la boîte d’affichage produite pour l’incorporer dans une arborescence de boîtes d’affichage.

**JMP Version ajoutée :** Avant la version 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Platform example",
	H List Box(
		Platform(
			dt,
			Bubble Plot(
				X( :weight ),
				Y( :height ),
				Sizes( :age ),
				Title Position( 0, 0 )
			)
		),
		Platform(
			dt,
			Bubble Plot(
				X( :weight ),
				Y( :age ),
				Sizes( :height ),
				Title Position( 0, 0 )
			)
		)
	)
);

```

### Platform Preference

**Syntaxe :** Platform Preferences( platformName( optionName( value ), ... ) ... )

**Description :** Définit les préférences de plate-forme comme spécifié.

**JMP Version ajoutée :** Avant la version 14

```jsl

Platform Preferences( Bivariate( Fit Line( 1 ) ) );

```

### Platform Preferences

**Syntaxe :** Platform Preferences( platformName( optionName( value ), ... ) ... )

**Description :** Définit les préférences de plate-forme comme spécifié.

**JMP Version ajoutée :** Avant la version 14

```jsl

Platform Preferences( Bivariate( Fit Line( 1 ) ) );

```

### Plot Col Box

**Syntaxe :** y = Plot Col Box( title, numbers )

**Description :** Renvoie une boîte d’affichage illustrant le graphique correspondant aux nombres. L’argument numbers peut être une liste ou une matrice.

**JMP Version ajoutée :** Avant la version 14

```jsl

New Window( "Example",
	Outline Box( "Table",
		Table Box(
			String Col Box( "names", {"x", "y", "z"} ),
			Number Col Box( "values", {11, 22, 33} ),
			Plot Col Box( "values", {11, 22, 33} )
		)
	)
);

```

### Poisson Distribution

**Syntaxe :** cumprob = Poisson Distribution( lambda, k )

**Description :** Renvoie la probabilité qu&apos;une variable aléatoire distribuée selon Poisson soit inférieure ou égale à k, où lambda est le paramètre de moyenne et k le dénombrement pertinent.

**JMP Version ajoutée :** Avant la version 14

```jsl

lambda = 4;
New Window( "Example: Poisson Distribution",
	ppy = Graph Box(
		Y Scale( 0, 1.01 ),
		X Scale( -1, 40 ),
		Pen Color( "red" ),
		Pen Size( 1 );
		For( k = 0, k <= 40, k++,
			H Line( k, k + 1, Poisson Distribution( lambda, k ) );
			V Line(
				k + 1,
				Poisson Distribution( lambda, k ),
				Poisson Distribution( lambda, k + 1 )
			);
		);
		Text( {2, 0.9}, "\!U03BB=", Round( lambda, 2 ) );
	),
	H List Box(
		Slider Box( 0, 40, lambda, ppy << reshow ),
		Text Box( " \!U03BB" )
	)
);

```

### Poisson Probability

**Syntaxe :** prob = Poisson Probability( lambda, k )

**Description :** Renvoie la probabilité qu&apos;une variable aléatoire distribuée selon Poisson soit égale à k, où lambda est le paramètre de moyenne et k le dénombrement pertinent.

**JMP Version ajoutée :** Avant la version 14

```jsl

lambda = 4;
New Window( "Example: Poisson Probability",
	pdy = Graph Box(
		Y Scale( 0, 0.20 ),
		X Scale( -1, 40 ),
		Pen Color( "red" ),
		Pen Size( 2 );
		For( k = 0, k <= 40, k++,
			V Line( k, 0, Poisson Probability( lambda, k ) )
		);
		Text( {30, 0.18}, "\!U03BB=", Round( lambda, 2 ) );
	),
	H List Box(
		Slider Box( 0, 40, lambda, pdy << reshow ),
		Text Box( " \!U03BB" )
	)
);

```

### Poisson Quantile

**Syntaxe :** q = Poisson Quantile( lambda, cumprob )

**Description :** Renvoie le quantile entier le plus petit, pour lequel la probabilité cumulée d&apos;observer une variable aléatoire de Poisson ( lambda ) est supérieure ou égale à cumprob.

**JMP Version ajoutée :** Avant la version 14

```jsl

qexpl = 20;
qexpn = 40;
qexpq = 0.5;
New Window( "Example: Poisson Quantile",
	qexpy = Graph Box(
		Y Scale( 0, 1.05 ),
		X Scale( -1, 41 ),
		Pen Color( "red" ),
		Pen Size( 2 );
		For( qexpk = 0, qexpk < Round( qexpn ), qexpk++,
			H Line(
				qexpk,
				qexpk + 1,
				Poisson Distribution( qexpl, qexpk )
			);
			V Line(
				qexpk + 1,
				Poisson Distribution( qexpl, qexpk ),
				Poisson Distribution( qexpl, qexpk + 1 )
			);
		);
		Pen Color( "blue" );
		V Line( Poisson Quantile( qexpl, qexpq ), 0, 1.0 );
		Text(
			{6, 0.17},
			" \!U03BB=",
			Round( qexpl, 2 ),
			" q=",
			Round( qexpq, 2 ),
			" quantile=",
			Round( Poisson Quantile( qexpl, qexpq ) )
		);
	),
	H List Box(
		Slider Box( 0, 40, qexpl, qexpy << reshow ),
		Text Box( " \!U03BB" )
	),
	H List Box(
		Slider Box( 0, 1, qexpq, qexpy << reshow ),
		Text Box( " q" )
	)
);

```

### Poly Seg

**Syntaxe :** ps = Poly Seg(x values, y values)

**Description :** Renvoie un groupe d’affichage qui représente un polygône avec des sommets basés sur les valeurs x et y passées.

**JMP Version ajoutée :** Avant la version 14

```jsl

x = [10, 50, 90];
y = [10, 90, 10];
New Window( "Poly Seg Example", g = Graph Box( Poly Seg( x, y ) ) );
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( "Poly Seg" ));

```

### Polygon

**Syntaxe :** Polygon( {x1, y1}, {x2, y2}, ..., &lt;&lt;fill(bool) ); Polygon( xMatrix, &lt;yMatrix&gt;, &lt;&lt;fill(bool) )

**Description :** Dessine le polygone spécifié par les points.

**JMP Version ajoutée :** Avant la version 14

```jsl

New Window( "Example",
	Graph Box(
		Fill Color( "gray" );
		Polygon( [10 30 90], [88 22 44] );
		Polygon( [10 10, 50 80, 80 20, 50 50], <<Fill( 0 ) );
	)
);

```

### Polygon Area

**Syntaxe :** area = Polygon Area( {x1, y1}, {x2, y2}, ... );area = Polygon Area( xMatrix, yMatrix )

**Description :** Calcule la surface du polygone spécifié.

**JMP Version ajoutée :** 14

**Exemple 1**

```jsl

area = Polygon Area( {0, 0}, {0, 10}, {10, 10}, {10, 0} );

```

**Exemple 2**

```jsl

area = Polygon Area( [10 20 30], [10 30 20] );

```

### Polygon Centroid

**Syntaxe :** {cx, cy} = Polygon Centroid( {x1, y1}, {x2, y2}, ... );centroid = Polygon Centroid( xMatrix, yMatrix )

**Description :** Calcule le centroïde du polygone spécifié.

**JMP Version ajoutée :** 14

**Exemple 1**

```jsl

{cx, cy} = Polygon Centroid( {0, 0}, {0, 10}, {10, 10}, {10, 0} );

```

**Exemple 2**

```jsl

centroid = Polygon Centroid( [10 20 30], [10 30 20] );

```

### Polygon Simplify

**Syntaxe :** rows = Polygon Simplify( xMatrix|xyMatrix, &lt;yMatrix&gt;, &lt;&lt;&lt;detail factor(f=200)&gt;, &lt;&lt;&lt;multiple(ids)&gt;, &lt;&lt;&lt;geodesic(bool)&gt; )

**Description :** Supprime les points d&apos;un polygone qui supportent une faible quantité de détails et renvoie les indices des points restants. detail factor est inversement proportionnel à la tolérance d&apos;erreur du détail. multiple(ids) indique que de nombreux polygones doivent être simplifiés de manière à traiter les arêtes communes de manière cohérente. ids est une matrice avec une ligne par point. geodesic(1) indique que les coordonnées sont exprimées en latitude et longitude pour la mesure de la distance.

**JMP Version ajoutée :** 19

**Exemple 1**

```jsl

New Window( "Example",
	Graph Box(
		Fill Color( "cyan" );
		xx = 18 * [1 1 1 1 1 2 3 4 5 5 5 5 5 4 3 2]
		+J( 1, 16, Random Uniform( -5, 5 ) );
		yy = 18 * [1 2 3 4 5 5 5 5 5 4 3 2 1 1 1 1]
		+J( 1, 16, Random Uniform( -5, 5 ) );
		Polygon( xx, yy );
		rows = Polygon Simplify( xx, yy, <<detail factor( 10 ) );
		Polygon( xx[rows], yy[rows], <<Fill( 0 ) );
	)
);

```

**Plusieurs polygones**

```jsl

dt = Open( "$SAMPLE_IMPORT_DATA/Parishes.shp" );
rows = Where( dt, 4 <= :Shape <= 7 );
polys = dt[rows, {"X", "Y"}];
ids = dt[rows, {"Shape"}] * 100 + dt[rows, {"Part"}];
Close( dt, NoSave );

simple rows = Polygon Simplify(
	polys,
	<<detail factor( 500 ),
	<<multiple( ids ),
	<<geodesic( 1 )
);
unique ids = Associative Array( ids );

minx = Min( polys[0, 1] );
maxx = Max( polys[0, 1] );
sx = maxx - minx;
miny = Min( polys[0, 2] );
maxy = Max( polys[0, 2] );
sy = maxy - miny;

New Window( "Parishes",
	Graph Box(
		Frame Size( 600, 600 ),
		X Scale( minx - sx * 0.02, maxx + sx * 0.02 ),
		Y Scale( miny - sy * 0.02, maxy + sy * 0.02 ), 
		
		For Each( {id}, unique ids, 

			rows = simple rows[Loc( ids[simple rows] == id )];
			Pen Color( "light red" );
			Pen Size( 4 );
			Polygon( polys[rows, 0], <<Fill( 0 ) );

			rows = Loc( ids == id );
			Pen Color( "black" );
			Pen Size( 1 );
			Polygon( polys[rows, 0], <<Fill( 0 ) );
			
			{cx, cy} = Polygon Centroid( polys[rows, 0] );
			Text( Center Justified, {cx, cy}, Char( id ) );
		)
	)
);

```

### Polytope Uniform Random

**Syntaxe :** points = Polytope Uniform Random( numSamples, A, b, L, U, neq, nle, nge, &lt;nwarm=200&gt;, &lt;nstride=25&gt; )

**Description :** Génère aléatoirement des points répartis uniformément sur un polytope convexe. L’argument numSamples spécifie le nombre de points aléatoires à générer. L’argument A est la matrice des coefficients de contrainte. L’argument B représente les valeurs des contraintes de droite. Les arguments L et U sont respectivement les limites inférieure et supérieure des variables. Les arguments neq, mle et nge sont respectivement le nombre de contraintes d&apos;égalité, le nombre d&apos;inégalités inférieures ou égales et le nombre d&apos;inégalités supérieures ou égales. L’argument nwarm est le nombre de répétitions warm-up avant que les points ne soient écrits dans la matrice de sortie. L’argument nstride est le nombre de répétitions entre chaque point, qui est écrit dans la matrice de sortie. Notez que les contraintes doivent être répertoriées d&apos;abord comme égalités, puis comme inégalités inférieures ou égales, et enfin comme inégalités supérieures ou égales.

**JMP Version ajoutée :** Avant la version 14

```jsl

A = [1 1 1, 1 2 0];
b = [1, 0.5];
L = [0, 0, 0.1];
U = [1, 1, 1];
points = Polytope Uniform Random( 2000, A, b, L, U, 1, 0, 1, 300, 50 );
dt = As Table( points );
tobj = Report( Ternary Plot( X( :Col1, :Col2, :Col3 ) ) );
tfr = tobj[scalebox( 1 )] << clone box;
New Window( "Example: Polytope Uniform Random",
	Outline Box( "Points on a Ternary Plot", tfr ),
	Outline Box( "Constraints",
		Text Box( "X1 + x2 + x3 = 1" ),
		Text Box( "X2 + 2*x2 >= 0.5" )
	),
	Outline Box( "Variable Bounds",
		Text Box( "0 <= x1 <= 1" ),
		Text Box( "0 <= x2 <= 1" ),
		Text Box( ".1 < x3 <= 1" )
	)
);
Close( dt, no save );
Show( "see new window for example output" );

```

### Popup Box

**Syntaxe :** y = Popup Box( {label1, script1, ...} )

**Description :** Renvoie une boîte d&apos;affichage avec un menu contextuel défini par des paires étiquette/script.

**JMP Version ajoutée :** Avant la version 14

```jsl

New Window( "Example",
	Tab Box(
		"alpha",
		Popup Box( {"x", ex = 1, "y", ex = 2} ),
		"beta",
		Panel Box( "panel", Text Box( "text" ) )
	)
);

```

### PostDecrement

**Syntaxe :** x--; PostDecrement( x )

**Description :** Soustrait 1 à une variable ou à une liste de variables.

**JMP Version ajoutée :** Avant la version 14

```jsl

ex = 1;
ex--;
ex;

```

### PostIncrement

**Syntaxe :** x++; PostIncrement( x )

**Description :** Ajoute 1 à une variable ou à une liste de variables.

**JMP Version ajoutée :** Avant la version 14

```jsl

ex = 1;
ex++;
ex;

```

### Power

**Syntaxe :** z = x ^ y; z = Power( x, &lt;y=2&gt; )

**Description :** Renvoie x élevé à la puissance y. Si x est négatif, y doit être un entier.

**JMP Version ajoutée :** Avant la version 14

```jsl

Power( 2, 5 );

```

### Pref

**Syntaxe :** Preferences( pref1( value1 ), ... )

**Description :** Définit les préférences comme spécifié.

**JMP Version ajoutée :** Avant la version 14

```jsl

Preferences( Graph marker size( "Large" ) );

```

### Preference

**Syntaxe :** Preferences( pref1( value1 ), ... )

**Description :** Définit les préférences comme spécifié.

**JMP Version ajoutée :** Avant la version 14

```jsl

Preferences( Graph marker size( "Large" ) );

```

### Preferences

**Syntaxe :** Preferences( pref1( value1 ), ... )

**Description :** Définit les préférences comme spécifié.

**JMP Version ajoutée :** Avant la version 14

```jsl

Preferences( Graph marker size( "Large" ) );

```

### Prefs

**Syntaxe :** Preferences( pref1( value1 ), ... )

**Description :** Définit les préférences comme spécifié.

**JMP Version ajoutée :** Avant la version 14

```jsl

Preferences( Graph marker size( "Large" ) );

```

### Present Value

**Syntaxe :** x = Present Value( rate, nper, pmt, &lt;fv=0&gt;, &lt;type=0&gt; )

**Description :** Renvoie la valeur actuelle d’un investissement. L’argument type est 0 pour les paiements en fin de période et 1 pour les paiements en début de période. Équivalent à la fonction PV de Microsoft Excel.

**JMP Version ajoutée :** Avant la version 14

```jsl

Present Value( .05 / 12, 30 * 12, 1000 );

```

### Principal Payment

**Syntaxe :** x = Principal Payment( rate, per, nper, pv, &lt;fv=0&gt;, &lt;type=0&gt; )

**Description :** Renvoie la part de remboursement du capital total sur une période donnée en se basant sur des remboursements et un taux d’intérêt constants. L’argument type est 0 pour les paiements en fin de période et 1 pour les paiements en début de période. Équivalent à la fonction PPMT de Microsoft Excel.

**JMP Version ajoutée :** Avant la version 14

```jsl

Payment( .05 / 12, 30 * 12, 100000 )
-Interest Payment( .05 / 12, 13, 30 * 12, 100000 )
-Principal Payment( .05 / 12, 13, 30 * 12, 100000 );

```

### Print

**Syntaxe :** Print( x, ... )

**Description :** Affiche les valeurs des arguments dans le registre, une par ligne.

**JMP Version ajoutée :** Avant la version 14

```jsl

Print( 355 / 113, Pi() );

```

### Print Matrix

**Syntaxe :** s = Print Matrix( M, &lt;&lt;ignore locale( 0 ), &lt;&lt;style( "parseable" ), &lt;&lt;separate( ", " ), &lt;&lt;line begin( "[ " ), &lt;&lt;line end( " ]" ) )

**Description :** Imprime la matrice M. L&apos;argument facultatif ignore locale détermine si l&apos;impression des séparateurs décimaux doit respecter les informations locales; zéro signifie qu&apos;elle les respecte. L&apos;argument facultatif style détermine si utiliser un style et lequel. Les styles disponibles sont : parseable, qui est une expression de matrice JSL reformatée, latex et other. Lorsque l&apos;argument style est other, les trois derniers arguments facultatifs définissent les caractères de début et de fin des lignes imprimées et les caractères de séparation des entrées concaténées.

**JMP Version ajoutée :** Avant la version 14

```jsl

A = [3.509 0.003, 874.4 0.00384, 0.03 0.093];
Print Matrix( A );
Print Matrix( A, <<ignore locale( 1 ) );
Print Matrix( A, <<style( "latex" ) );
Print Matrix(
	A,
	<<style( "other" ),
	<<line begin( "| " ),
	<<line end( " |" ),
	<<separate( " | " )
);

```

### Probit

**Syntaxe :** q = Normal Quantile( p, &lt;mu=0&gt;, &lt;sigma=1&gt; ); q = Probit( p )

**Description :** Renvoie le quantile d’une distribution normale, correspondant à la probabilité p qu’une valeur aléatoire ayant cette distribution prenne une valeur inférieure au quantile.

**JMP Version ajoutée :** Avant la version 14

```jsl

Normal Quantile( 0.9 );

```

### Product

**Syntaxe :** y = Product( assignExpr, limit, bodyExpr )

**Description :** Renvoie le produit des évaluations de bodyExpr, en incrémentant à chaque fois la variable de assignExpr jusqu&apos;à ce quelle soit supérieure ou égale à la limite limit.

**JMP Version ajoutée :** Avant la version 14

```jsl

2 * Product( i = 1, 10000, 4 * i * i / (2 * i - 1) / (2 * i + 1) );

```

### Python Connect

**Syntaxe :** PythonConnection = Python Connect ()

**Description :** Renvoie un objet scriptable de connexion à Python.

**JMP Version ajoutée :** 14

```jsl

PythonConnection = Python Connect();
version = PythonConnection << Get Version;
Show( version );

```

### Python Create JPIP CMD

**Syntaxe :** Python Create JPIP CMD()

**Description :** Déclenche la création d&apos;un script wrapper de ligne de commande jpip pour la commande pip Python. Une boîte de dialogue de sélection de répertoire vous demandera l&apos;emplacement du répertoire où enregistrer le script. Ce script fournit alors toutes les fonctionnalités de pip, tout en établissant correctement les variables d&apos;environnement nécessaires pour l&apos;environnement Python isolé de JMP.

**JMP Version ajoutée :** 18

**Exemple 1**

```jsl

Python Create JPIP CMD();

```

**Exemple 2**

```jsl

// install numpy and pandas packages
conn = Python Connect();
conn << Create JPIP CMD();

```

### Python Execute

**Syntaxe :** Python Execute( { list of Inputs }, { list of Outputs }, statements &lt; , echo( 1 | 0 ) &gt; )

**Description :** Envoie une liste des entrées, exécute les instructions et renvoie une liste des sorties. Le paramètre facultatif echo() est défini par défaut sur Vrai. Le paramètre echo contrôle l&apos;affichage du code source Python dans le log. La valeur logique Vrai (1) active l&apos;affichage du code source, tandis que 0 supprime l&apos;affichage dans le log.

**JMP Version ajoutée :** 14

**Exemple 1**

```jsl


a = "abcdef";
d = 3.141;
x = 0;
z = 0;
v = [1 0 0, 0 1 0, 0 0 1];
// pi, e, phi, c, Plank's, Faraday, 345 triangle
m = [3.141 2.718 1.618,
2.997 6.626 9.648,
3 4 5];
ml = Python Execute(
	{v, m, a, d},
	{x, z, a, d},
	"\[
import numpy as np
a = np.multiply(v, m) # matrix product
d = np.divide(v, m) # matrix division
z = np.multiply(m, np.linalg.inv(v)) # m * inv(v) called Left division
x = np.multiply(np.linalg.inv(m), v) # inv(m) * v called right division
]\"
);
Show( v, m, ml, x, z, a, d );

```

**Exemple 2**

```jsl


x1 = 1;
x2 = 2;
y1 = 1;
y2 = 2;
z1 = 1;
z2 = 2;
v = [1 0 0, 0 1 0, 0 0 1];
// pi, e, phi, c, Plank's, Faraday, 345 triangle
m = [3.141 2.718 1.618,
2.997 6.626 9.648,
3 4 5];
ml = Python Execute(
	{v, m},
	{x1, x2, y1, y2, z1, z2},
	"\[
import numpy as np
x1 = np.multiply(v, m) # matrix product
print('x1=', x1)
x2 = np.divide(v, m) # matrix division
print('x2=', x2)
y1 = np.dot(v, m) # dot product of v and m
print('y1=', y1)
y2 = np.dot(m, v) # dot product of m and v
print('y2=', y2)
z1 = np.inner(v, m) # inner product of v and m
print('z1=', z1)
z2 = np.inner(m, v) # innder product of m and v
print('z2=', z2)
]\"
);
Show( v, m, ml, x1, x2, y1, y2, z1, z2 );

```

### Python Get

**Syntaxe :** y = Python Get( name )

**Description :** Renvoie des données de Python, où l&apos;argument name peut représenter l&apos;un des types de données Python suivants : numérique, chaîne, matrice, liste, dictionnaire, table de données, cadre de données, datetime ou numpy.datetime64.

**JMP Version ajoutée :** 14

**Datetime**

```jsl


date1 = As Date( Today() );
Python Send( date1 );
date2 = Python Get( date1 );
Show( date1, date2 );

```

**Exemple 1**

```jsl


x1 = {1, 2, 3};
Python Send( x1 );
x2 = Python Get( x1 );
Show( x1, x2 );

```

**numpy.datetime64**

```jsl


Python Install Packages( "numpy" );
Python Submit( "import numpy as np" );
Python Submit( "datetime64 = np.datetime64('1989-10-05')" );
numpy_datetime = Python Get( datetime64 );
Show( numpy_datetime );

```

### Python Get Version

**Syntaxe :** version = Python Get Version()

**Description :** Renvoie le numéro de la version Python utilisée avec les interfaces Python JMP.

**JMP Version ajoutée :** 14

```jsl

version = Python Get Version();
Show( version );

```

### Python Init

**Syntaxe :** PythonConnection = Python Init( )

**Description :** Remarque : cette fonction est obsolète depuis JMP 18 et est équivalente à la fonction Python Connect().

**JMP Version ajoutée :** 14

**Exemple 1**

```jsl


Python Init();
Python Submit(
	"\[
str = 'The quick brown fox jumps over the lazy dog';
]\"
);
getStr = Python Get( str );
Show( getStr );

```

**Exemple 2**

```jsl


PythonConnection = Python Init();
PythonConnection << Submit(
	"\[
str = 'The quick brown fox jumps over the lazy dog';
]\"
);
getStr = Python Get( str );
Show( getStr );

```

### Python Install Packages

**Syntaxe :** Python Install Packages( packages )

**Description :** Cela enveloppe l&apos;installeur de packages Python dans le répertoire JMP site-packages. Pour les opérations au-delà de la simple installation de package, consultez Commande Python Create JPIP CMD() pour créer un script wrapper pip de ligne de commande dans un répertoire choisi avec Directory Pick(). Autrement, pour exécuter l&apos;installeur à partir d&apos;une fenêtre de script Python JMP, regardez jmputils.jpip sous la catégorie Python ici dans l&apos;index des scripts.

**JMP Version ajoutée :** 18

**Exemple 1**

```jsl

// install numpy and pandas packages
Python Install Packages( "numpy pandas" );

```

**Exemple 2**

```jsl

// install numpy and pandas packages
Python Install Packages( {"numpy", "pandas"} );

```

**Exemple 3**

```jsl

// install numpy and pandas packages
conn = Python Connect();
conn << Install Packages( "numpy pandas" );

```

### Python Is Connected

**Syntaxe :** connected = Python Is Connected()

**Description :** Remarque : cette fonction est obsolète depuis JMP 18 et renvoie toujours 1.

**JMP Version ajoutée :** 14

```jsl

x = Python Is Connected();
Show( x );

```

### Python JMP Name to Python Name

**Syntaxe :** Python name = Python JMP Name To Python Name( JMP name )

**Description :** Convertit un nom de variable JMP en un nom de variable Python à l&apos;aide des règles de nommage des variables Python.

**JMP Version ajoutée :** 14

```jsl

Python name = Python JMP Name to Python Name( a b c );
Show( Python name );

```

### Python Reset

**Syntaxe :** Python Reset()

**Description :** Resets the shared Python environment, primarily clearing all references to objects. This does not change the import cache of imported modules. This is a limitation of the Python environment itself.  Modules that load shared libraries cannot be unloaded by the running process. To reload pure Python code, see the Python.org documentation on importlib reload().

**JMP Version ajoutée :** 19

```jsl

pi = 3.1415927;
Python Send( pi );
Python Submit( "print(pi)" );
Python Reset();
// will show error, pi not defined
Python Submit( "print(pi)" );

```

### Python Send

**Syntaxe :** Python Send( name, &lt;Python Name( name ) | "as_name" &gt; )

**Description :** Sends data to Python, where the name argument can represent any of the following JMP data types ( numeric | string | matrix | list | data table | data table column | date ).

**JMP Version ajoutée :** 14

**Colonne**

```jsl


dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Python Send( dt:weight );
Python Submit( "print(weight)" );

```

**Date**

```jsl


date = As Date( Today() );
Python Send( date );
Python Submit( "print(date)" );

```

**Table de données**

```jsl


x = {1, 2, 3};
Python Send( x );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Python Send( dt );
Python Submit( "print(x)" );
Python Submit( "print(dt)" );

```

### Python Send File

**Syntaxe :** Python Send File( filename, &lt;Python Name( name )&gt; )

**Description :** Envoie un fichier de données à Python, où l’argument de filename est une chaîne qui indique un chemin d’accès vers le fichier à envoyer à Python.

**JMP Version ajoutée :** 14

```jsl


Python Send File( "$SAMPLE_DATA/Big Class.jmp" );
Python Send File( "$SAMPLE_DATA/Baseball.jmp" );
Python Submit( "print(Big_Class)" );
Python Submit( "print(Baseball)" );

```

### Python Submit

**Syntaxe :** Python Submit( statements &lt; , echo( 1 | 0 ) &gt; )

**Description :** Soumet des instructions à Python. Les instructions peuvent être sous forme de chaînes de caractères ou d&apos;une liste de chaînes de caractères. Le paramètre facultatif echo() est défini par défaut sur 1. Le paramètre echo contrôle l&apos;affichage du code source Python dans le log. La valeur logique Vrai (1) active l&apos;affichage du code source, tandis que 0 supprime l&apos;affichage dans le log.

**JMP Version ajoutée :** 14

```jsl

Python Submit(
	"\[
str = 'The quick brown fox jumps over the lazy dog'
a = 200]\"
);
getStr = Python Get( str );
getNum = Python Get( a );
Show( getStr, getNum );

```

### Python Submit File

**Syntaxe :** Python Submit File( path )

**Description :** Soumet les instructions à Python au moyen d&apos;un fichier pointé par l&apos;argument path.

**JMP Version ajoutée :** 14

```jsl

Python Submit File( "some_Python_source.py" );

```

### Python Term

**Syntaxe :** Python Term()

**Description :** Remarque : cette fonction est obsolète depuis JMP 18 et n&apos;a aucun effet.

**JMP Version ajoutée :** 14

### QR

**Syntaxe :** {Q, R} = QR( X )

**Description :** Crée une matrice orthogonale Q m par m et une matrice triangulaire supérieure R m par n, de sorte que X = Q * R. L&apos;argument X est une matrice m par n.

**JMP Version ajoutée :** Avant la version 14

```jsl

QR( [11 22, 33 44] );

```

### QR LAPACK

**Syntaxe :** {Q, R} = QR LAPACK( X )

**Description :** Crée une matrice orthogonale Q m par k et une matrice triangulaire supérieure R k par n, de sorte que X = Q * R. L&apos;argument X est une matrice m par n, où k=min(m, n).

**JMP Version ajoutée :** 17

```jsl

QR LAPACK( [11 22, 33 44] );

```

### Quadratic Form BLAS

**Syntaxe :** y = Quadratic Form BLAS( A, x )

**JMP Version ajoutée :** 17

```jsl

A = [2 0, 0 2];
x = [2, 3];
y = Quadratic Form BLAS( A, x );

```

### Quantile

**Syntaxe :** y = Quantile( p, x1, ... )

**Description :** Renvoie le quantile spécifié p des arguments x. L&apos;argument de quantile peut être un scalaire ou une matrice. Les valeurs x peuvent également être spécifiées en tant que valeurs dans un argument unique de matrice ou de liste.

**JMP Version ajoutée :** Avant la version 14

```jsl

Eval List(
	{Quantile(
		0.75,
		0,
		100,
		200,
		300,
		400,
		500,
		600,
		700,
		800,
		900,
		1000
	), Quantile(
		0.5,
		[1.2, 1.5, 10, 25, 31, 40, 50, 99, 1000, 5000, 25000, 100000]
	)}
);

```

### Quarter

**Syntaxe :** q = Quarter( datetime )

**Description :** Renvoie le quart de la valeur date-heure, 1 - 4.

**JMP Version ajoutée :** Avant la version 14

```jsl

Quarter( Today() );

```

### Query

**Syntaxe :** result = Query( &lt; &lt; dt1 | Table( dt1, alias1 ) &gt;, ..., &lt; dtN | Table( dtN, aliasN ) &gt; &gt;, &lt;Private|Invisible&gt;, &lt;Scalar&gt;, sqlStatement )

**Description :** Exécute une requête SQL sur les tables de données JMP. sqlStatement (la requête SQL, plus probablement une instruction SELECT) est exigé et doit être le dernier argument. Les tables de données JMP référencées par l&apos;instruction SQL doivent être transmises à la requête() en tant qu&apos;arguments, à l&apos;aide de la table(dt, "alias"), pour créer un alias de la table que SQL peut utiliser si cela est souhaité. Invisible ou Private peuvent être transmis pour contrôler la visibilité de la table de données créée. Si l&apos;instruction SQL renvoie une valeur unique, transmettre Scalar pour renvoyer la valeur unique au lieu de la table de données.

**JMP Version ajoutée :** Avant la version 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp", Invisible );
Query(
	dt,
	"SELECT name, age, height FROM 'Big Class'
         WHERE age > 14; "
);

		// Using aliases, performing a join
dtSAT = Open( "$SAMPLE_DATA/SATByYear.jmp", Invisible );
dtUS = Open( "$SAMPLE_DATA/US Demographics.jmp", Invisible );
Query(
	Table( dtSAT, "t1" ),
	Table( dtUS, "t2" ), 

	"\[SELECT t1.State, t1."SAT Math", t2."College Degrees",
            t2."Eighth Grade Math"
       FROM t1
       LEFT OUTER JOIN t2
           ON t1.State = t2.State
       WHERE t1.'SAT Math' > 550;
      ]\"
);

		// Query that returns a scalar value
retval = Query( Scalar, dt, "SELECT AVG(height) from 'Big Class';" );
// Query with no tables
retval = Query( Scalar, "SELECT SQRT(152399025);" );

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

### R Connect

**Syntaxe :** RConnection = R Connect()

**Description :** Renvoie un objet scriptable de connexion à R.

**JMP Version ajoutée :** Avant la version 14

```jsl

RConnection = R Connect();

```

### R Control

**Syntaxe :** R Control( Interrupt | Async( bool ) | Echo( bool ) )

**Description :** Change les options de contrôle de R

**JMP Version ajoutée :** Avant la version 14

```jsl

R Init( Echo( true ) );
R Control( Echo( false ) );
R Submit( "Add R code" );

```

### R Execute

**Syntaxe :** R Execute( { list of Inputs }, { list of Outputs }, statements )

**Description :** Envoie une liste d&apos;entrées, exécute des instructions et renvoie une liste de sorties.

**JMP Version ajoutée :** Avant la version 14

```jsl

R Init();
a = "abcdef";
d = 3.141;
x = 0;
z = 0;
v = [9 8 7, 6 5 4, 3 2 1];
m = [1 2 3, 4 5 6, 7 8 9];
rc = R Execute(
	{v, m, a, d},
	{x, z, a, d},
	"\[
x <- rnorm(5)
z <- v * m
]\"
);
Show( v, m, rc, x, z, a, d );

```

### R Get

**Syntaxe :** y = R Get( name )

**Description :** Renvoie les données de R, où l&apos;argument name peut représenter l&apos;un des types de données R suivants : numérique, chaîne, matrice, liste, ou cadre de données.

**JMP Version ajoutée :** Avant la version 14

```jsl

R Init();
x1 = [1, 2, 3];
R Send( x1 );
x2 = R Get( x1 );
Show( x1, x2 );
dt1 = New Table( "Test", New Column( "Col", Values( [10, 20, 30] ) ) );
R Send( dt1 );
dt2 = R Get( dt1 );
Close( dt1, No Save );

```

### R Get Graphics

**Syntaxe :** R graphics = R Get Graphics( format )

**Description :** OBSOLÈTE dans JMP 19 et n&apos;a pas d&apos;effet. Pour la remplacer, définissez l&apos;appareil sur un nom de fichier (par exemple, un fichier png « r_plot.png »), puis ouvrez le fichier pour récupérer l&apos;image. Cette option sera supprimée à partir de JMP 20. Le code ci-dessous montre la solution de contournement.

**JMP Version ajoutée :** Avant la version 14

```jsl

R Init();
img_path = Get Path Variable( "TEMP" ) || "r_plot.png";
R Execute( {img_path}, {}, "\[
png(img_path)
plot(1:10)
dev.off()
]\" );
plot = Open( img_path );
rc = Delete File( img_path );

```

### R Get Version

**Syntaxe :** version = R Get Version()

**Description :** Renvoie le numéro de la version R utilisée avec les interfaces R JMP.

**JMP Version ajoutée :** 14

```jsl

R Init();
version = R Get Version();
Show( version );

```

### R Init

**Syntaxe :** R Init()

**Description :** Initialise les interfaces R.

**JMP Version ajoutée :** Avant la version 14

```jsl

R Init();

```

### R Is Connected

**Syntaxe :** connected = R Is Connected()

**Description :** Renvoie 1 si une connexion R est active, 0 dans le cas contraire.

**JMP Version ajoutée :** Avant la version 14

```jsl

R Init();
connected = R Is Connected();

```

### R JMP Name to R Name

**Syntaxe :** R name = R JMP Name To R Name( JMP name )

**Description :** Convertit un nom de variable JMP en un nom de variable R à l&apos;aide des règles de nommage des variables R.

**JMP Version ajoutée :** Avant la version 14

```jsl

R name = R JMP Name to R Name( a b c );

```

### R Send

**Syntaxe :** R Send( name, &lt;R Name( as_name ) | "as_name"&gt; )

**Description :** Envoie des données à R, où l&apos;argument name peut représenter l&apos;un des types de données JMP suivants : numérique, chaîne, matrice, liste, table de données ou colonne de table de données.

**JMP Version ajoutée :** Avant la version 14

**Colonne**

```jsl

R Init();
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
R Send( dt:weight );
Close( dt );
w = R Get( "weight" );

```

**Table de données**

```jsl

R Init();
x = [1, 2, 3];
R Send( x, "x1" );
rx = R Get( "x1" );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
R Send( dt );
Close( dt );
R Submit( "dt" );

```

### R Send File

**Syntaxe :** R Send File( filename, &lt;R Name( name )&gt; )

**Description :** Envoie un fichier de données à R, où l&apos;argument de filename est une chaîne qui indique un chemin d&apos;accès vers le fichier à envoyer à R.

**JMP Version ajoutée :** Avant la version 14

```jsl

R Init();
R Send File( "$SAMPLE_DATA/Big Class.jmp" );
R Send File( "$SAMPLE_DATA/Baseball.jmp" );
R Submit( "Big.Class" );
R Submit( "Baseball" );

```

### R Submit

**Syntaxe :** R Submit( statements )

**Description :** Soumet les instructions à R. Les instructions peuvent être sous forme d&apos;une valeur de chaîne ou d&apos;une liste de valeurs de chaînes.

**JMP Version ajoutée :** Avant la version 14

```jsl


R Init();
img_path = Get Path Variable( "TEMP" ) || "r_plot.png";
code =
"\[
x <- rnorm(1000)
hx <- hist(x, breaks=100, plot=FALSE)
png("IMG_PATH")
plot(hx, col=ifelse(abs(hx$breaks) < 1.669, 4, 2))
dev.off()
x <- rnorm (100)
y <- x**2 + rnorm (100)
summary(y)
]\";
// substitue portable path into R code
r_code = Substitute( code, "IMG_PATH", img_path );
R Submit( r_code );
Wait( 3 );
plot = Open( img_path );
rc = Delete File( img_path );

```

### R Submit File

**Syntaxe :** R Submit File( path )

**Description :** Soumet des instructions à R au moyen d&apos;un fichier spécifié par l&apos;argument path.

**JMP Version ajoutée :** Avant la version 14

```jsl


R Init();
file_path = Get Path Variable( "SAMPLE_SCRIPTS" ) || "R/SI_example.R";
R Submit File( file_path );

```

### R Term

**Syntaxe :** R Term()

**Description :** Obsolète dans JMP 19 et n&apos;a pas d&apos;effet.

**JMP Version ajoutée :** Avant la version 14

```jsl

R Init();
R Term();

```

### Radio Box

**Syntaxe :** y = Radio Box( {item, ...}, &lt;script&gt; )

**Description :** Renvoie une boîte d&apos;affichage pour afficher un ensemble de cases d&apos;option.

**JMP Version ajoutée :** Avant la version 14

```jsl

New Window( "Example",
	rb = Radio Box(
		{"single", "double", "triple"},
		Show( rb << Get() )
	)
);

```

### Random Beta

**Syntaxe :** y = Random Beta( alpha, beta, &lt;theta=0&gt;, &lt;sigma=1&gt; )

**Description :** Renvoie un pseudo nombre aléatoire extrait d&apos;une distribution bêta.

**JMP Version ajoutée :** Avant la version 14

```jsl


//produce a single random number
x = Random Beta( 1, 1 );
//produce a vector of random numbers
v = J( 1, 10, Random Beta( 1, 1 ) );
//show results
Show( x, v );

```

### Random Beta Binomial

**Syntaxe :** y = Random Beta Binomial( n, p, &lt;delta=0&gt; )

**Description :** Renvoie un nombre aléatoire d’une distribution binomiale bêta pour n épreuves avec probabilité p et corrélation delta.

**JMP Version ajoutée :** Avant la version 14

```jsl


//produce a single random number
x = Random Beta Binomial( 14, .5, .2 );
//produce a vector of random numbers
v = J( 1, 10, Random Beta Binomial( 14, .5, .2 ) );
//show results
Show( x, v );

```

### Random Binomial

**Syntaxe :** y = Random Binomial( n, p )

**Description :** Renvoie un nombre aléatoire extrait d’une distribution binomiale avec n épreuves et une probabilité d&apos;évènement p.

**JMP Version ajoutée :** Avant la version 14

```jsl

exrbinp = 0.5;
exrbinn = 40;
exrbinlsz = Log( 1000 );
New Window( "Example: Random Binomial and Empirical Distribution",
	exrbiny = Graph Box(
		Y Scale( 0, 1.05 ),
		X Scale( 0, 40 ),
		Pen Color( "red" ),
		Pen Size( 2 );
		exrbinsz = Round( Exp( exrbinlsz ) );
		exrbinsamp = J( Round( exrbinsz ), 1, . );
		exrbinfreq = J( Round( exrbinn + 1 ), 1, . );
		For( exrbink = 1, exrbink <= Round( exrbinsz ), exrbink++,
			exrbinsamp[exrbink] = Random Binomial( exrbinn, exrbinp )
		);
		For( exrbink = 0, exrbink <= Round( exrbinn ), exrbink++,
			exrbinfreq[exrbink + 1] = Sum( exrbinsamp <= exrbink ) /
			Round( exrbinsz )
		);
		For( exrbink = 0, exrbink < Round( exrbinn ), exrbink++,
			H Line(
				exrbink,
				exrbink + 1,
				Binomial Distribution(
					exrbinp,
					Round( exrbinn ),
					exrbink
				)
			);
			V Line(
				exrbink + 1,
				Binomial Distribution(
					exrbinp,
					Round( exrbinn ),
					exrbink
				),
				Binomial Distribution(
					exrbinp,
					Round( exrbinn ),
					exrbink + 1
				)
			);
		);
		Pen Color( "blue" );
		For( exrbink = 1, exrbink <= Round( exrbinn ), exrbink++,
			H Line( exrbink - 1, exrbink, exrbinfreq[exrbink] );
			V Line(
				exrbink,
				exrbinfreq[exrbink],
				exrbinfreq[exrbink + 1]
			);
		);
		Text(
			{0.5, 0.9},
			"n=",
			Round( exrbinn ),
			" p=",
			Round( exrbinp, 2 ),
			" size=",
			Round( exrbinsz )
		);
	),
	H List Box(
		Slider Box(
			Log( 10 ),
			Log( 5000 ),
			exrbinlsz,
			exrbiny << reshow
		),
		Text Box( " random sample size" )
	)
);

```

### Random Category

**Syntaxe :** y = Random Category( probabilityA, resultA, probabilityB, resultB, resultElse )

**Description :** Renvoie une catégorie aléatoire compte tenu des paires de probabilités et des expressions résultat. Un nombre aléatoire de loi uniforme est généré et comparé aux arguments probabilité de sorte à déterminer quel argument résultat est renvoyé.

**JMP Version ajoutée :** Avant la version 14

```jsl

Random Category( .2, "A", .3, "B", .4, "C", "D" );

```

### Random Cauchy

**Syntaxe :** y = Random Cauchy()

**Description :** Renvoie un nombre pseudo aléatoire extrait d&apos;une distribution de Cauchy ayant une médiane de 0.

**JMP Version ajoutée :** Avant la version 14

```jsl


//produce a single random number
x = Random Cauchy();
//produce a vector of random numbers
v = J( 1, 10, Random Cauchy() );
//show results
Show( x, v );

```

### Random ChiSquare

**Syntaxe :** y = Random ChiSquare( df, &lt;nonCentrality=0&gt; )

**Description :** Renvoie un nombre aléatoire extrait d’une distribution Khi-deux.

**JMP Version ajoutée :** Avant la version 14

```jsl


//produce a single random number
x = Random ChiSquare( 2 );
//produce a vector of random numbers
v = J( 1, 10, Random ChiSquare( 2 ) );
//show results
Show( x, v );

```

### Random ExGaussian

**Syntaxe :** y = Random ExGaussian( location, scale, shape)

**Description :** Renvoie un nombre aléatoire extrait d&apos;une distribution ExGaussienne.

**JMP Version ajoutée :** 18

```jsl


//produce a single random number
x = Random ExGaussian( 0, .5, .25 );
//produce a vector of random numbers
v = J( 1, 10, Random ExGaussian( 0, .5, .25 ) );
//show results
Show( x, v );

```

### Random Exp

**Syntaxe :** y = Random Exp()

**Description :** Renvoie un pseudo nombre aléatoire extrait d&apos;une distribution exponentielle de 0 à ∞. Identique à -Log(Random Uniform()).

**JMP Version ajoutée :** Avant la version 14

```jsl


//produce a single random number
x = Random Exp();
//produce a vector of random numbers
v = J( 1, 10, Random Exp() );
//show results
Show( x, v );

```

### Random F

**Syntaxe :** y = Random F( dfnum, dfden, &lt;nonCentrality=0&gt; )

**Description :** Renvoie un nombre aléatoire extrait d&apos;une distribution F.

**JMP Version ajoutée :** Avant la version 14

```jsl


//produce a single random number
x = Random F( 2, 2 );
//produce a vector of random numbers
v = J( 1, 10, Random F( 2, 2 ) );
//show results
Show( x, v );

```

### Random Frechet

**Syntaxe :** y = Random Frechet( &lt;mu=0&gt;, &lt;sigma=1&gt; )

**Description :** Renvoie un nombre aléatoire extrait d’une distribution de Fréchet.

**JMP Version ajoutée :** Avant la version 14

```jsl


//produce a single random number
x = Random Frechet( 10, 5 );
//produce a vector of random numbers
v = J( 1, 10, Random Frechet( 10, 5 ) );
//show results
Show( x, v );

```

### Random Gamma

**Syntaxe :** y = Random Gamma( alpha, &lt;scale=1&gt; )

**Description :** Renvoie un pseudo nombre aléatoire extrait d&apos;une distribution gamma.

**JMP Version ajoutée :** Avant la version 14

```jsl


//produce a single random number
x = Random Gamma( 1 );
//produce a vector of random numbers
v = J( 1, 10, Random Gamma( 1 ) );
//show results
Show( x, v );

```

### Random Gamma Poisson

**Syntaxe :** y = Random Gamma Poisson( lambda, &lt;sigma=1&gt; )

**Description :** Renvoie un nombre aléatoire extrait d’une distribution Gamma/Poisson avec les paramètres lambda et sigma.

**JMP Version ajoutée :** Avant la version 14

```jsl


//produce a single random number
x = Random Gamma Poisson( 3, 2 );
//produce a vector of random numbers
v = J( 1, 10, Random Gamma Poisson( 3, 2 ) );
//show results
Show( x, v );

```

### Random GenGamma

**Syntaxe :** y = Random GenGamma( &lt;mu=0&gt;, &lt;sigma=1&gt;, &lt;lambda=0&gt; )

**Description :** Renvoie un nombre aléatoire extrait d’une distribution gamma généralisée étendue avec les paramètres mu, sigma, et lambda.

**JMP Version ajoutée :** Avant la version 14

```jsl


//produce a single random number
x = Random GenGamma( 2, 1.25 );
//produce a vector of random numbers
v = J( 1, 10, Random GenGamma( 2, 1.25 ) );
//show results
Show( x, v );

```

### Random Geometric

**Syntaxe :** y = Random Geometric( p )

**Description :** Renvoie un nombre aléatoire de non-événements jusqu’à ce qu’un événement survienne, pour les événements avec probabilité p.

**JMP Version ajoutée :** Avant la version 14

```jsl

exrgeop = 0.1;
exrgeolsz = Log( 300 );
New Window( "Example: Random Geometric and Empirical Distribution",
	exrgeoy = Graph Box(
		Y Scale( 0, 1.05 ),
		X Scale( -1, 50 ),
		Pen Color( "red" ),
		Pen Size( 1 );
		exrgeosz = Round( Exp( exrgeolsz ) );
		exrgeosamp = J( Round( exrgeosz ), 1, . );
		exrgeofreq = J( Round( 50 + 1 ), 1, . );
		For( exrgeok = 1, exrgeok <= Round( exrgeosz ), exrgeok++,
			exrgeosamp[exrgeok] = Random Geometric( exrgeop )
		);
		For( exrgeok = 0, exrgeok <= 50, exrgeok++,
			exrgeofreq[exrgeok + 1] = Sum( exrgeosamp <= exrgeok ) /
			Round( exrgeosz )
		);
		exrgeotmp1 = 0;
		exrgeotmp2 = 0;
		For( exrgeok = 0, exrgeok < 50, exrgeok++,
			exrgeotmp2 = exrgeotmp2 + (1 - exrgeop) ^ exrgeok * exrgeop;
			H Line( exrgeok, exrgeok + 1, exrgeotmp2 );
			V Line( exrgeok, exrgeotmp1, exrgeotmp2 );
			exrgeotmp1 = exrgeotmp2;
		);
		Pen Color( "blue" );
		For( exrgeok = 0, exrgeok < 50, exrgeok++,
			H Line( exrgeok, exrgeok + 1, exrgeofreq[exrgeok + 1] );
			V Line(
				exrgeok + 1,
				exrgeofreq[exrgeok + 1],
				exrgeofreq[exrgeok + 2]
			);
		);
		Text(
			{10, 0.2},
			" p=",
			Round( exrgeop, 2 ),
			" sample size=",
			Round( exrgeosz )
		);
	),
	H List Box(
		Slider Box(
			Log( 10 ),
			Log( 5000 ),
			exrgeolsz,
			exrgeoy << reshow
		),
		Text Box( " random sample size" )
	)
);

```

### Random GLog

**Syntaxe :** y = Random GLog( mu, sigma, lambda )

**Description :** Renvoie un nombre aléatoire d&apos;une distribution selon le logarithme généralisé.

**JMP Version ajoutée :** Avant la version 14

```jsl


//produce a single random number
x = Random GLog( 4, 1, 0.1 );
//produce a vector of random numbers
v = J( 1, 10, Random GLog( 4, 1, 0.1 ) );
//show results
Show( x, v );

```

### Random Index

**Syntaxe :** x = Random Index( n, k )

**Description :** Renvoie une matrice k par 1 d&apos;entiers aléatoires compris entre 1 et n sans répétitions.

**JMP Version ajoutée :** Avant la version 14

```jsl

Random Index( 100, 5 );

```

### Random Integer

**Syntaxe :** y = Random Integer( n ); Random Integer( k, n )

**Description :** Renvoie un entier aléatoire compris entre 1 et n (ou entre k et n), bornes inclues.

**JMP Version ajoutée :** Avant la version 14

```jsl


//produce a single random number
x = Random Integer( 1, 10 );
//produce a vector of random numbers
v = J( 1, 10, Random Integer( 1, 10 ) );
//show results
Show( x, v );

```

### Random Johnson Sb

**Syntaxe :** y = Random Johnson Sb( gamma, delta, theta, sigma )

**Description :** Renvoie un nombre pseudo aléatoire ectrait d&apos;une distribution du Sb de Johnson.

**JMP Version ajoutée :** Avant la version 14

```jsl


//produce a single random number
x = Random Johnson Sb( 0.5, 1, 1, 1 );
//produce a vector of random numbers
v = J( 1, 10, Random Johnson Sb( 0.5, 1, 1, 1 ) );
//show results
Show( x, v );

```

### Random Johnson Sl

**Syntaxe :** y = Random Johnson Sl( gamma, delta, theta, &lt;sigma=1&gt; )

**Description :** Renvoie un nombre pseudo aléatoire extrait d&apos;une distribution du Sl de Johnson.

**JMP Version ajoutée :** Avant la version 14

```jsl


//produce a single random number
x = Random Johnson Sl( 0.5, 1, 1, 1 );
//produce a vector of random numbers
v = J( 1, 10, Random Johnson Sl( 0.5, 1, 1, 1 ) );
//show results
Show( x, v );

```

### Random Johnson Su

**Syntaxe :** y = Random Johnson Su( gamma, delta, theta, sigma )

**Description :** Renvoie un nombre pseudo aléatoire extrait d&apos;une distribution du Su de Johnson.

**JMP Version ajoutée :** Avant la version 14

```jsl


//produce a single random number
x = Random Johnson Su( 0.5, 1, 1, 1 );
//produce a vector of random numbers
v = J( 1, 10, Random Johnson Su( 0.5, 1, 1, 1 ) );
//show results
Show( x, v );

```

### Random LEV

**Syntaxe :** y = Random LEV( &lt;mu=0&gt;, &lt;sigma=1&gt; )

**Description :** Renvoie un nombre aléatoire d’une distribution LEV.

**JMP Version ajoutée :** Avant la version 14

```jsl


//produce a single random number
x = Random LEV( 10, 5 );
//produce a vector of random numbers
v = J( 1, 10, Random LEV( 10, 5 ) );
//show results
Show( x, v );

```

### Random LogGenGamma

**Syntaxe :** y = Random LogGenGamma( &lt;mu=0&gt;, &lt;sigma=1&gt;, &lt;lambda=0&gt; )

**Description :** Renvoie un nombre aléatoire extrait d’une distribution log gamma généralisée avec les paramètres mu, sigma, et lambda.

**JMP Version ajoutée :** Avant la version 14

```jsl


//produce a single random number
x = Random LogGenGamma( 2, 1.25 );
//produce a vector of random numbers
v = J( 1, 10, Random LogGenGamma( 2, 1.25 ) );
//show results
Show( x, v );

```

### Random Logistic

**Syntaxe :** y = Random Logistic( &lt;mu=0&gt;, &lt;sigma=1&gt; )

**Description :** Renvoie un nombre aléatoire extrait d’une distribution logistique.

**JMP Version ajoutée :** Avant la version 14

```jsl


//produce a single random number
x = Random Logistic( 15, 1 );
//produce a vector of random numbers
v = J( 1, 10, Random Logistic( 15, 1 ) );
//show results
Show( x, v );

```

### Random Loglogistic

**Syntaxe :** y = Random Loglogistic( &lt;mu=0&gt;, &lt;sigma=1&gt; )

**Description :** Renvoie un nombre aléatoire extrait d’une distribution log-logistique.

**JMP Version ajoutée :** Avant la version 14

```jsl


//produce a single random number
x = Random Loglogistic( 15, 1 );
//produce a vector of random numbers
v = J( 1, 10, Random Loglogistic( 15, 1 ) );
//show results
Show( x, v );

```

### Random Lognormal

**Syntaxe :** y = Random Lognormal( &lt;mu=0&gt;, &lt;sigma=1&gt; )

**Description :** Renvoie un nombre aléatoire extrait d’une distribution log-normale avec un paramètre de position mu et un paramètre d’échelle sigma.

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl


//produce a single random number
x = Random Lognormal( -1, 1.5 );
//produce a vector of random numbers
v = J( 1, 10, Random Lognormal( -1, 1.5 ) );
//show results
Show( x, v );

```

**Exemple 2**

```jsl

exrlnn = 30;
New Window( "Example: Random Lognormal and Empirical Distribution",
	exrlny = Graph Box(
		Y Scale( -0.05, 1.05 ),
		X Scale( -.05, 10 ),
		Pen Color( "red" );
		exranlnorm = J( Round( exrlnn ), 1, . );
		For( k = 1, k <= Round( exrlnn ), k++,
			exranlnorm[k] = Random Lognormal( -1, 1.5 )
		);
		exranlnorm = Sort Ascending( exranlnorm );
		H Line( 0, exranlnorm[1], 0 );
		For( k = 2, k <= Round( exrlnn ), k++,
			H Line(
				exranlnorm[k - 1],
				exranlnorm[k],
				(k - 1) / Round( exrlnn )
			)
		);
		H Line( exranlnorm[Round( exrlnn )], 10, 1.0 );
		Pen Color( "blue" );
		Y Function( Normal Distribution( Log( tdeq ), -1, 1.5 ), tdeq );
		Text( {-4, 0.8}, " n=", Round( exrlnn ) );
	),
	H List Box(
		Slider Box( 10, 2000, exrlnn, exrlny << reshow ),
		Text Box( " n" )
	)
);

```

### Random Multivariate Normal

**Syntaxe :** y = Random Multivariate Normal( mean, covar, &lt;nrows=1&gt;)

**Description :** Renvoie une matrice aléatoire nrows en fonction de p à partir d&apos;une distribution normale multivariée avec un vecteur de moyenne mean et une matrice de covariance covar (semi-définie positive), où p est défini comme le nombre de lignes de covar.

**JMP Version ajoutée :** 15

```jsl

meanvec = 1 :: 3;
covar = [1 .6 .6, .6 1 .6, .6 .6 1];
randmvnRow = Random Multivariate Normal( meanvec, covar );
randmvnMat = Random Multivariate Normal( meanvec, covar, 10 );

```

### Random Negative Binomial

**Syntaxe :** y = Random Negative Binomial( r, p )

**Description :** Renvoie un nombre aléatoire de non-événements jusqu’à ce que r événements surviennent, pour les événements avec probabilité p.

**JMP Version ajoutée :** Avant la version 14

```jsl

exnbpp = 0.3;
exnbpn = 20;
exnbrn = Random Negative Binomial( 20, 0.3 );
New Window( "Example: Neg Binomial Probability",
	exnbpy = Graph Box(
		Y Scale( 0, 0.04 ),
		X Scale( -1, 100 ),
		Pen Color( "red" ),
		Pen Size( 2 );
		For( exnbpk = 0, exnbpk < 1000, exnbpk++,
			V Line(
				exnbpk,
				0,
				Neg Binomial Probability( exnbpp, exnbpn, exnbpk )
			)
		);
		Pen Color( "blue" );,
		Pen Size( 4 ),
		V Line(
			exnbrn,
			0,
			Neg Binomial Probability( exnbpp, exnbpn, exnbrn )
		);
		Text(
			{1, 0.035},
			"n=",
			Round( exnbpn ),
			" p=",
			Round( exnbpp, 2 )
		);
		Text(
			{1, 0.030},
			"x=",
			Round( exnbrn, 2 ),
			" Prob=",
			Round(
				Neg Binomial Probability( exnbpp, exnbpn, exnbrn ),
				2
			)
		);
	),
	H List Box(
		Button Box( "Generate a Random Negative Binomial Number",
			exnbrn = Random Negative Binomial( 20, 0.3 );
			exnbpy << reshow;
		)
	)
);

```

### Random Normal

**Syntaxe :** y = Random Normal( &lt;mu=0&gt;, &lt;sigma=1&gt; )

**Description :** Renvoie un pseudo nombre aléatoire extrait d&apos;une distribution normale de moyenne mu et d&apos;écart-type sigma.

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl


//produce a single random number
x = Random Normal();
//produce a vector of random numbers
v = J( 1, 10, Random Normal() );
//show results
Show( x, v );

```

**Exemple 2**

```jsl

exGcoordX = J( 50, 1, . );
exGcoordY = J( 50, 1, . );
For( k = 1, k <= 50, k++,
	exGcoordX[k] = Random Uniform( -5, 5 )
);
For( k = 1, k <= 50, k++,
	exGcoordY[k] = exGcoordX[k] + Random Normal()
);
New Window( "Random Normal, Linear Regression, and Outlier",
	V List Box(
		Graph Box(
			framesize( 600, 300 ),
			X Scale( -10, 10 ),
			Y Scale( 1.5 * Min( exGcoordY ), 1.5 * Max( exGcoordY ) ),
			double buffer,
			exsx = Sum( exGcoordX ),
			exsy = Sum( exGcoordY ),
			exsxx = Sum( (exGcoordX) ^ 2 );
			exsxy = Sum( exGcoordX :* exGcoordY );
			exbeta1 = (100 * exsxy - exsx * exsy) / (100 * exsxx - exsx
			 * exsx);
			exbeta0 = (exsy - exbeta1 * exsx) / 100;
			exx1 = Min( exGcoordX );
			exy1 = exbeta0 + exbeta1 * Min( exGcoordX );
			exx2 = Max( exGcoordX );
			exy2 = exbeta0 + exbeta1 * Max( exGcoordX );
			Line( {exx1, exy1}, {exx2, exy2} );
			Marker Size( 5 );
			Drag Marker( exGcoordX, exGcoordY );
			Drag Text( [-7], [-5], "drag any marker" );
		)
	)
);

```

### Random Normal Mixture

**Syntaxe :** y = Random Normal Mixture( meanvec, sdvec, probvec )

**Description :** Renvoie un nombre aléatoire extrait d’une distribution de mélange normal avec moyennes de groupe meanvec, écarts-types de groupe sdvec et probabilités de groupe probvec.

**JMP Version ajoutée :** Avant la version 14

```jsl

dt = New Table( "Example",
	New Column( "Rand NM",
		set formula(
			Random Normal Mixture( [-3, 3], [1, 1], [.3, .7] )
		)
	)
);
dt << add rows( 1000 );
Distribution(
	Continuous Distribution( Column( :Rand NM ), Vertical( 0 ) )
);

```

### Random Poisson

**Syntaxe :** y = Random Poisson( lambda )

**Description :** Renvoie un pseudo nombre aléatoire distribué Poisson.

**JMP Version ajoutée :** Avant la version 14

```jsl

exrpoilambda = 20;
exrpoilsz = Log( 300 );
New Window( "Example: Random Poisson and Empirical Distribution",
	exrpoiy = Graph Box(
		Y Scale( 0, 1.05 ),
		X Scale( -1, 50 ),
		Pen Color( "red" ),
		Pen Size( 1 );
		exrpoisz = Round( Exp( exrpoilsz ) );
		exrpoisamp = J( Round( exrpoisz ), 1, . );
		exrpoifreq = J( Round( 50 + 1 ), 1, . );
		For( exrpoik = 1, exrpoik <= Round( exrpoisz ), exrpoik++,
			exrpoisamp[exrpoik] = Random Poisson( exrpoilambda )
		);
		For( exrpoik = 0, exrpoik <= 50, exrpoik++,
			exrpoifreq[exrpoik + 1] = Sum( exrpoisamp <= exrpoik ) /
			Round( exrpoisz )
		);
		exrpoitmp1 = 0;
		exrpoitmp2 = 0;
		For( exrpoik = 0, exrpoik < 50, exrpoik++,
			H Line(
				exrpoik,
				exrpoik + 1,
				Poisson Distribution( exrpoilambda, exrpoik )
			);
			V Line(
				exrpoik + 1,
				Poisson Distribution( exrpoilambda, exrpoik ),
				Poisson Distribution( exrpoilambda, exrpoik + 1 )
			);
		);
		Pen Color( "blue" );
		For( exrpoik = 0, exrpoik < 50, exrpoik++,
			H Line( exrpoik, exrpoik + 1, exrpoifreq[exrpoik + 1] );
			V Line(
				exrpoik + 1,
				exrpoifreq[exrpoik + 1],
				exrpoifreq[exrpoik + 2]
			);
		);
		Text(
			{10, 0.2},
			" \!U03BB=",
			Round( exrpoilambda, 2 ),
			" sample size=",
			Round( exrpoisz )
		);
	),
	H List Box(
		Slider Box(
			Log( 10 ),
			Log( 5000 ),
			exrpoilsz,
			exrpoiy << reshow
		),
		Text Box( " random sample size" )
	)
);

```

### Random Reset

**Syntaxe :** Random Reset( seed number )

**Description :** Relance les séquences aléatoires avec un nouveau germe.

**JMP Version ajoutée :** Avant la version 14

```jsl

Random Reset( 1 );
Random Normal();

```

### Random Seed State

**Syntaxe :** Random Seed State( &lt;seed state&gt; )

**Description :** Récupère ou restaure l&apos;état de la graine aléatoire vers ou à partir d&apos;un objet blob.

**JMP Version ajoutée :** Avant la version 14

```jsl

r = Random Seed State();
Random Seed State( r );

```

### Random SEV

**Syntaxe :** y = Random SEV( &lt;mu=0&gt;, &lt;sigma=1&gt; )

**Description :** Renvoie un nombre aléatoire d’une distribution SEV.

**JMP Version ajoutée :** Avant la version 14

```jsl


//produce a single random number
x = Random SEV( 50, 5 );
//produce a vector of random numbers
v = J( 1, 10, Random SEV( 50, 5 ) );
//show results
Show( x, v );

```

### Random SHASH

**Syntaxe :** y = Random SHASH( gamma, delta, theta, sigma )

**Description :** Renvoie un nombre aléatoire à partir de la distribution sinh-arcsinh (SHASH).

**JMP Version ajoutée :** 14

**Exemple 1**

```jsl


//produce a single random number
x = Random SHASH( 0, 1, 0, 1 );
//produce a vector of random numbers
v = J( 1, 10, Random SHASH( 0, 1, 0, 1 ) );
//show results
Show( x, v );

```

**Transformation SHASH**

```jsl

gamma = 1;
delta = .5;
theta = -1;
sigma = 2;
x = 3;
result1 = SHASHTrans( x, gamma, delta, theta, sigma );
result2 = SinH( gamma + delta * ArcSinH( (x - theta) / sigma ) );
Show( result1, result2 );

```

### Random Shuffle

**Syntaxe :** y = Random Shuffle( matrix )

**Description :** Renvoie la matrice avec les éléments réorganisés en ordre aléatoire.

**JMP Version ajoutée :** Avant la version 14

```jsl

exA = [1 2 6, 3 5 8];
Random Shuffle( exA );

```

### Random SVD

**Syntaxe :** {U, M, V} = Random SVD( X , &lt;nSingularValues=min(nRow,nCol)&gt;, &lt;nOver=10&gt;, &lt;nIter=2&gt;)

**Description :** Calcule la décomposition en valeurs singulières de la matrice X à l&apos;aide de la décomposition en valeurs singulières randomisée en retournant une liste {U, M, V} telle que U*diag(M)*V` est égal à X.

**JMP Version ajoutée :** 17

```jsl

Random SVD( [11 22, 33 44], 1 );

```

### Random t

**Syntaxe :** y = Random t( df, &lt;nonCentrality=0&gt; )

**Description :** Renvoie un nombre aléatoire extrait d&apos;une distribution t.

**JMP Version ajoutée :** Avant la version 14

```jsl


//produce a single random number
x = Random t( 2 );
//produce a vector of random numbers
v = J( 1, 10, Random t( 2 ) );
//show results
Show( x, v );

```

### Random Triangular

**Syntaxe :** y = Random Triangular( a, b, c );y = Random Triangular( b, c );y = Random Triangular( b )

**Description :** Renvoie un nombre aléatoire extrait d’une distribution triangulaire avec une limite inférieure a, le mode b, et une limite supérieure c. Random Triangular(b,c) équivaut à Random Triangular(0,b,c). Random Triangular(b) équivaut à Random Triangular(0,b,1).

**JMP Version ajoutée :** Avant la version 14

```jsl

Random Reset( 13579 );
x = Random Triangular( 0.8 );
Random Reset( 13579 );
y = Random Triangular( 0, 0.8, 1 );
Show( x, y );

```

### Random Uniform

**Syntaxe :** y = Random Uniform( &lt;min&gt;, &lt;max&gt; )

**Description :** Renvoie un pseudo nombre aléatoire extrait d&apos;une distribution uniforme entre min. et max., non inclus.

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl


//produce a single random number
x = Random Uniform( 1, 10 );
//produce a vector of random numbers
v = J( 1, 10, Random Uniform( 1, 10 ) );
//show results
Show( x, v );

```

**Exemple 2**

```jsl

Random Uniform( 1, 10 );

```

### Random Weibull

**Syntaxe :** y = Random Weibull( beta, &lt;alpha=1&gt; )

**Description :** Renvoie un nombre pseudo aléatoire extrait d&apos;une distribution de Weibull.

**JMP Version ajoutée :** Avant la version 14

```jsl


//produce a single random number
x = Random Weibull( 3, 20 );
//produce a vector of random numbers
v = J( 1, 10, Random Weibull( 3, 20 ) );
//show results
Show( x, v );

```

### Random ZI Negative Binomial

**Syntaxe :** y = Random ZI Negative Binomial( lambda, sigma, pi )

**Description :** Renvoie un nombre aléatoire extrait d&apos;une distribution binomiale négative avec un paramètre de position lambda, un paramètre d&apos;échelle sigma et un paramètre de Dirac en 0 pi.

**JMP Version ajoutée :** 19

**Exemple 1**

```jsl

exnbpp = 0.3;
exnbpn = 20;
rnb = Random ZI Negative Binomial( 25, .5, .05 );
New Window( "Example: Zero Inflated Negative Binomial",
	exnbpy = Graph Box(
		Y Scale( 0, 0.075 ),
		X Scale( -1, 100 ),
		Pen Color( "red" ),
		Pen Size( 2 );
		For( i = 0, i < 100, i++,
			V Line(
				i,
				0,
				ZI Negative Binomial Probability( i, 25, .5, .05 )
			)
		);
		Pen Color( "blue" );,
		Pen Size( 4 ),
		V Line(
			rnb,
			0,
			ZI Negative Binomial Probability( rnb, 25, .5, .05 )
		);
		Text(
			{25, 0.06},
			"lambda=",
			Round( 25 ),
			", sigma=",
			Round( .5, 2 ),
			", pi=",
			Round( .05, 2 )
		);
		Text(
			{25, 0.05},
			"x=",
			Round( rnb, 2 ),
			", Prob=",
			Round(
				ZI Negative Binomial Probability( rnb, 25, .5, .05 ),
				4
			)
		);
	),
	H List Box(
		Button Box(
			"Generate a Random Zero Inflated Negative Binomial Number",
			rnb = Random ZI Negative Binomial( 25, .5, .05 );
			exnbpy << reshow;
		)
	)
);

```

**Exemple 2**

```jsl

Random Reset( 19 );
dt = As Table( J( 1000, 1, Random ZI Negative Binomial( 5, 2, .2 ) ) );
Column( 1 ) << set name( "Random ZiNB" );
dt << Distribution(
	Continuous Distribution(
		Column( :Random ZiNB ),
		Vertical( 0 ),
		Fit ZI Negative Binomial,
		CDF Plot( 1 )
	)
);

```

### Random ZI Poisson

**Syntaxe :** y = Random ZI Poisson Binomial( lambda, pi )

**Description :** Renvoie un nombre aléatoire extrait d&apos;une distribution de Poisson comportant un Dirac en 0 avec un paramètre de position lambda et un paramètre de Dirac en 0 pi.

**JMP Version ajoutée :** 19

**Exemple 1**

```jsl

exnbpp = 0.3;
exnbpn = 20;
rp = Random ZI Poisson( 20, .05 );
New Window( "Example: Zero Inflated Poisson",
	exnbpy = Graph Box(
		Y Scale( 0, 0.1 ),
		X Scale( -1, 60 ),
		Pen Color( "red" ),
		Pen Size( 2 );
		For( i = 0, i < 100, i++,
			V Line( i, 0, ZI Poisson Probability( i, 20, .05 ) )
		);
		Pen Color( "blue" );,
		Pen Size( 4 ),
		V Line( rp, 0, ZI Poisson Probability( rp, 20, .05 ) );
		Text(
			{30, 0.06},
			"lambda=",
			Round( 20 ),
			", pi=",
			Round( .05, 2 )
		);
		Text(
			{30, 0.05},
			"x=",
			Round( rp, 2 ),
			", Prob=",
			Round( ZI Poisson Probability( rp, 20, .05 ), 4 )
		);
	),
	H List Box(
		Button Box( "Generate a Random Zero Inflated Poisson Number",
			rp = Random ZI Poisson( 20, .05 );
			exnbpy << reshow;
		)
	)
);

```

**Exemple 2**

```jsl

Random Reset( 19 );
dt = As Table( J( 1000, 1, Random ZI Poisson( 5, .2 ) ) );
Column( 1 ) << set name( "Random ZIP" );
dt << Distribution(
	Continuous Distribution(
		Column( :Random ZIP ),
		Vertical( 0 ),
		Fit ZI Poisson,
		CDF Plot( 1 )
	)
);

```

### Range

**Syntaxe :** y = Range( x1, ... )

**Description :** Renvoie les valeurs minimum et maximum parmi les arguments combinés, lesquels peuvent être des arguments scalaires, de matrice ou de liste.

**JMP Version ajoutée :** 15

```jsl

Eval List( {Range( Pi(), e() ), Range( [33 44 22] )} );

```

### Range Slider Box

**Syntaxe :** y = Range Slider Box( minValue, maxValue, lowVariable, highVariable, script )

**Description :** Renvoie une boîte d’affichage avec un curseur de contrôle d&apos;étendue allant de minValue à maxValue. Lorsque les positions des deux curseurs changent, leurs valeurs sont placées dans lowVariable et dans highVariable, et le script est exécuté.

**JMP Version ajoutée :** Avant la version 14

```jsl

sliderLowerValue = .5;
sliderUpperValue = .7;
New Window( "Example",
	Panel Box( "Range Slider",
		tb1 = Text Box( "Low Value: " || Char( sliderLowerValue ) ),
		tb2 = Text Box( "High Value: " || Char( sliderUpperValue ) ),
		sb = Range Slider Box(
			0,
			1,
			sliderLowerValue,
			sliderUpperValue,
			tb1 << Set Text(
				"Low Value: " || Char( sliderLowerValue )
			);
			tb2 << Set Text(
				"High Value: " || Char( sliderUpperValue )
			);
		)
	)
);

```

### Rank

**Syntaxe :** y = Rank Index( x )

**Description :** Renvoie un vecteur d&apos;indices qui, utilisé comme un indice du vecteur v d&apos;origine, trie le vecteur par rang. Exclut les valeurs manquantes.

**JMP Version ajoutée :** Avant la version 14

```jsl

Rank( [33, 22, 44, 11, ., 33] );

```

### Rank Index

**Syntaxe :** y = Rank Index( x )

**Description :** Renvoie un vecteur d&apos;indices qui, utilisé comme un indice du vecteur v d&apos;origine, trie le vecteur par rang. Exclut les valeurs manquantes.

**JMP Version ajoutée :** Avant la version 14

```jsl

Rank Index( [33, 22, 44, 11, ., 33] );

```

### Ranking

**Syntaxe :** y = Ranking( x, &lt; &lt;&lt;tie("average"|"row"|"minimum"|"maximum"|"arbitrary")&gt; )

**Description :** Renvoie un vecteur de rangs des valeurs de x, de bas à haut comme de 1 à n, ex-aequos arbitrairement.

**JMP Version ajoutée :** Avant la version 14

```jsl

Ranking( [33, 22, 44, 11, 33] );
Ranking( [22, 11, 33, 11, 44, 55, 44, 44, 44], <<Tie( "minimum" ) );

```

### Ranking Tie

**Syntaxe :** y = Ranking Tie( x, &lt; &lt;&lt;tie("average"|"row"|"minimum"|"maximum"|"arbitrary")&gt; )

**Description :** Renvoie un vecteur de rangs des valeurs de x, en prenant la moyenne des rangs des ex-aequos.

**JMP Version ajoutée :** Avant la version 14

```jsl

Ranking Tie( [33, 22, 44, 11, 33] );

```

### Recode

**Syntaxe :** recode(string|number|list, {&lt;transform&gt;, ...}, &lt;Multiple Response (Separator(sepChar))&gt;, &lt;By Word(Delimiters(&lt;chars&gt;)&gt;)

**Description :** Appliquez les transformations listées aux valeurs d&apos;entrée et renvoyez les résultats. Les options Réponses multiples et Par mot divisent les données de caractères fournies en plus petites valeurs d&apos;entrée. Une fois que les valeurs d&apos;entrée sont déterminées, les transformations sont appliquées à ces valeurs séparément.

Les variables JSL spéciales sont remplies à l&apos;exécution de la commande :

	_rcNow est la valeur actuelle de l&apos;entrée après les transformations précédentes.

	_rcOrig est la valeur d&apos;origine de l&apos;entrée.

**JMP Version ajoutée :** 15

**Exemple 1**

```jsl

Recode(
	"27513-0000",
	{Regex( _rcNow, "(\d\d\d\d\d)-\d+", "\1", GLOBALREPLACE ),
	Num( _rcNow )}
);

```

**Exemple 2**

```jsl

Recode(
	"A B C",
	{Map Value(
		_rcNow,
		{"A", "Apple", "B", "Banana"},
		Unmatched( "Unknown fruit" )
	)},
	By Word
);

```

### Rect

**Syntaxe :** Rect( left, top, right, bottom, &lt;fill=0&gt; ); Rect( {left, top}, {right, bottom} )

**Description :** Dessine un rectangle rempli si le remplissage est différent de zéro.

**JMP Version ajoutée :** Avant la version 14

```jsl

New Window( "Example",
	Graph Box(
		Pen Color( "Green" );
		Pen Size( 2 );
		Fill Color( "Red" );
		Rect( 15, 75, 65, 55, 1 );
		Rect( 10, 80, 70, 50 );
	)
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

### Regex

**Syntaxe :** result = Regex( source, pattern, &lt;format, &lt;IGNORECASE&gt;, &lt;GLOBALREPLACE&gt;&gt; )

**Description :** Recherche dans le texte source un appariement pour le pattern. Le format est défini par défaut à « \\0 » (appariement complet), mais il peut être défini à « Fred » (pour un remplacement de la constante) ou à « \\1 » (pour utiliser le texte apparié par la première parenthèse dans le pattern). Renvoie une valeur numérique manquante si aucun appariement n&apos;est trouvé. Par défaut, la casse doit être respectée.

**JMP Version ajoutée :** Avant la version 14

```jsl

Regex(
	"   Are you there Alice?, asked Jerry.",
	" (here|there) (\w+).+(said|asked) (\w+)\.",
	"  I am \1, \4, replied \2."
);

```

### Regex Match

**Syntaxe :** Regex Match( source, pattern, &lt;replacement | NULL&gt;, &lt;MATCHCASE&gt; )

**Description :** Exécute un appariement d&apos;expression régulière et renvoie une liste de l&apos;ensemble du texte apparié ainsi que les appariements pour chaque référence inverse créée par une parenthèse ouverte. Le troisième argument peut éventuellement spécifier une chaîne de remplacement pour l&apos;ensemble de l&apos;appariement ; la chaîne de remplacement peut utiliser des références inverses.

**JMP Version ajoutée :** Avant la version 14

```jsl


source = "believe";
// [aeiou] matches exactly one vowel
// .*? is a reluctant (vs greedy) match. try it without the ? to see the greedy behavior
// \1 is a back reference to the first ( group -- [aeiou] is inside the first ( group
matches = Regex Match(
	source, // a variable allows updating some text
	"([aeiou])(.*?)(\1)", // a regex with parens makes back references
	">\2<" // the match is replaced by text that uses a back reference
);
Show( source, matches );
// results:
// source = "b>li<ve";
// matches = {"elie", "e", "li", "e"};
// notes:
// matches[1] is the entire match AND the part that will be replaced
// matches[2] is back ref \1  this is the letter e matched by [aeiou]
// matches[3] is back ref \2  this is the letter li matched by .*?
// matches[4] is back ref \3  this is another letter e match by \1, which was an e
//
// the * operator is greedy by default, taking as many characters as it can, and
// only backing up if required. Adding the ? makes it reluctant, taking characters
// one at a time and allowing the remaining pattern to have a chance earlier.

```

### Register Addin

**Syntaxe :** Register Addin( uniqueId, homeFolder, &lt;displayName(name)&gt;, &lt;MinJMPVersion(version)&gt;, &lt;MaxJMPVersion(version)&gt;, &lt;LoadsAtStartup(autoLoad)&gt;, &lt;LoadNow(load)&gt; )

**Description :** Enregistre un complément

**JMP Version ajoutée :** Avant la version 14

```jsl

Register Addin(
	"com.mycompany.myaddin",
	"$DOCUMENTS/myaddin",
	displayname( "Sample Addin" )
);

```

### Reload Policies

**Syntaxe :** Reload Policies()

**JMP Version ajoutée :** 18

### Remove

**Syntaxe :** y = Remove( x, &lt;i&gt;, &lt;n=1&gt; ); y = Remove( x, {list} )

**Description :** Renvoie une copie de la liste x en supprimant n éléments en commençant par le i-ième élément ou en supprimant une liste d’éléments spécifiée par l’argument list.

**JMP Version ajoutée :** Avant la version 14

```jsl

Remove( {11, 22, 33, 44, 55}, 3, 2 );

```

### Remove Color Theme

**Syntaxe :** Remove Color Theme("Name"|{"Name", &lt;flags&gt;, {color, ...}, &lt;{position, ...}&gt;})

**Description :** Supprime un thème de couleurs personnalisé de la liste globale, soit en fonction du nom ou de l&apos;objet complet du thème de couleurs.

**JMP Version ajoutée :** Avant la version 14

```jsl

Remove Color Theme( "Yellow To Blue" );

```

### Remove Custom Functions

**Syntaxe :** Remove Custom Functions({function 1 full name, function 2 full name, ...} | function full name)

**Description :** Supprime une liste de fonctions personnalisées de l&apos;environnement.

**JMP Version ajoutée :** 14

```jsl

Remove Custom Functions( {"custom:Add", "custom:Sub"} );

```

### Remove From

**Syntaxe :** Remove From( x, &lt;i&gt;, &lt;n=1&gt; )

**Description :** Modifie la liste, le tableau associatif ou la boîte d&apos;affichage x en supprimant des éléments. Les tableaux associatifs spécifient l&apos;élément à supprimer avec une valeur clé i. Les listes et les boîtes d&apos;affichage commencent par supprimer l&apos;élément en position i. Une liste supprimera plusieurs éléments à la fois si l&apos;option n est spécifiée. Notez que l&apos;argument x doit être une variable.

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

ex = {11, 22, 33, 44, 55};
Remove From( ex, 3, 2 );
ex;

```

**Exemple 2**

```jsl

ex = ["a" => 10, "b" => 3, "c" => 12, => 0];
Remove From( ex, "c" );
ex;

```

**Exemple 3**

```jsl

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

### Rename Directory

**Syntaxe :** rc = Rename Directory( old, new )

**Description :** Renomme un répertoire sans le déplacer ni le copier ; le nouveau nom n’inclut PAS de chemin. Renvoie 1 si le répertoire a été renommé. Renvoie 0 si le répertoire n&apos;a pas pu être renommé ou si le chemin est incorrect.

**JMP Version ajoutée :** Avant la version 14

```jsl

Delete Directory( "$TEMP/subD" );
Delete Directory( "$TEMP/Loss Function Templates" );
rc0 = Copy Directory( "$SAMPLE_DATA/Loss Function Templates", "$TEMP" );
rc1 = Rename Directory(
	"$TEMP/Loss Function Templates",
	"subD" /* NO PATH */
);
rc2 = Directory Exists( "$TEMP/Loss Function Templates" );
rc3 = Directory Exists( "$TEMP/subD" );
rc4 = Delete Directory( "$TEMP/subD" );
rc5 = Directory Exists( "$TEMP/subD" );
Char( rc0 ) || " " || Char( rc1 ) || " " || Char( rc2 ) || " " ||
Char( rc3 ) || " " || Char( rc4 ) || " " || Char( rc5 );/* 1 1 0 1 1 0 */

```

### Rename File

**Syntaxe :** rc = Rename File( old, new )

**Description :** Renomme un fichier sans le déplacer ni le copier ; le nouveau nom n’inclut PAS de chemin. Renvoie 1 si le fichier a été renommé. Renvoie 0 si le fichier n&apos;a pas pu être renommé. Génère une erreur si le chemin est incorrect ou n&apos;existe pas.

**JMP Version ajoutée :** Avant la version 14

```jsl

rc0 = Copy File(
	"$SAMPLE_DATA/Loss Function Templates/Normal.jmp",
	"$TEMP/x.jmp"
);
rc1 = Rename File( "$TEMP/x.jmp", "y.jmp" /* NO PATH */ );
rc2 = File Exists( "$TEMP/x.jmp" );
rc3 = File Exists( "$TEMP/y.jmp" );
rc4 = Delete File( "$TEMP/y.jmp" );
rc5 = File Exists( "$TEMP/y.jmp" );
Char( rc0 ) || " " || Char( rc1 ) || " " || Char( rc2 ) || " " ||
Char( rc3 ) || " " || Char( rc4 ) || " " || Char( rc5 );/* 1 1 0 1 1 0 */

```

### Repeat

**Syntaxe :** s = Repeat( x, n, &lt;m=1&gt; )

**Description :** Renvoie le texte, la matrice ou la liste spécifié(e) par l&apos;argument x concaténé avec lui-même n fois. Si x est un nombre ou une matrice, alors n indique une répétition verticale et l&apos;argument facultatif m désigne une répétition horizontale.

**JMP Version ajoutée :** Avant la version 14

```jsl

Show( Repeat( {"A", "B"}, 3 ), Repeat( 2, 3 ), Repeat( 2, 1, 3 ) );

```

### Report

**Syntaxe :** y = Report( platform object )

**Description :** Renvoie une référence à l&apos;arbre d&apos;affichage pour le rapport d&apos;une plate-forme.

**JMP Version ajoutée :** Avant la version 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Report( Bivariate( Y( :weight ), X( :height ), Fit Line ) );

```

### Resample Freq

**Syntaxe :** Resample Freq( &lt;rate=1&gt;, &lt;column&gt; )

**Description :** Génère un décompte de fréquence pour l&apos;échantillonnage avec remplacement, ce qui est utile pour les échantillons de bootstrap. Sans aucun argument, la fonction génère un rééchantillonnage à 100%. L’argument rate spécifie le taux du rééchantillonnage. Si l’argument column est spécifié, la taille d&apos;échantillon choisie est rate multipliée par la somme de la colonne spécifiée. Un rate négatif signale que les fréquences fractionnelles sont admises.

**JMP Version ajoutée :** Avant la version 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
New Column( "Freq", numeric, formula( Resample Freq() ) );
New Window( "w", theBox = V List Box() );
For( i = 1, i <= 30, i++,
	Column( "Freq" ) << EvalFormula;
	theBox << append(
		V List Box(
			Bivariate(
				Y( :height ),
				X( :weight ),
				Freq( :Freq ),
				Fit Line( 1 )
			)
		)
	);
);
newDt = theBox["Parameter Estimates", Table Box( 1 )] <<
MakeCombinedDataTable;
newDt << Distribution(
	Y( :Estimate ),
	By( :Term ),
	Horizontal Layout( 1 )
);
theBox << CloseWindow;

```

### Return

**Syntaxe :** Return(&lt;Expr&gt;, ..., &lt;ExprN&gt;)

**Description :** Renvoie une valeur d&apos;expression issue d&apos;une fonction définie par l&apos;utilisateur.

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

vr = Function( {},
	x = 2;
	y = 4;
	Return( Char( x * y ) );
);
lvr = Function( {},
	x = 2;
	y = 4;
	For( i = 1, i < 5, i++,
		If( i == 3,
			Return( i * x * y )
		)
	);
);
nr = Function( {}, Return() );
vrv = vr();
lvrv = lvr();
nrv = nr();
Show( vrv, lvrv, nrv );

```

**Exemple 2**

```jsl

f = Function( {a, b},
	Return( a - b, a + b )
);
{lo, hi} = f( 10, 1 );
Show( lo, hi );
Show( f( 7, 15 ) );

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

ex = {11, 22, 33, 44, 55};
Reverse Into( ex );
ex;

```

**Exemple 2**

```jsl

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

### Revert Menu

**Syntaxe :** Revert Menu()

**Description :** Restaure les menus par défaut.

**JMP Version ajoutée :** Avant la version 14

```jsl

/* Reverts menus back to factory default settings. */

```

### RGB Color

**Syntaxe :** y = RGB Color( r, g, b ); y = RGB Color( {r, g, b} )

**Description :** Renvoie un numéro de couleur à partir des composantes rouge, vert et bleu, tous compris entre 0 et 1. RGB Color(1, 1, 1) est le blanc.

**JMP Version ajoutée :** Avant la version 14

```jsl

New Window( "RGB Color Example", 
    /* 1 through 16 are good */ 
	division = 6;
	blocks = division + 1;
	ysize = 400 / Sqrt( division );
	xsize = ysize * blocks;
	fract = 1 / division;
    /* 100 is default axis range */
	yBlockSize = 100 / blocks;
	xBlockSize = 100 / (blocks * blocks);
	Graph(
		frameSize( xsize, ysize ),
		For( blue = 0, blue <= 1, blue += fract,
			For( red = 0, red <= 1, red += fract,
				For( green = 0, green <= 1, green += fract,
					y = red / fract * yBlockSize;
					x = green / fract * xBlockSize + blue / fract *
					xBlockSize * blocks;
                    /* here's the example */
					Fill Color( RGB Color( red, green, blue ) );
					Rect( x, y, x + xBlockSize, y + yBlockSize, 1 );
				)
			)
		)
	);
);

```

### Right

**Syntaxe :** sub = Right( s, n, &lt;filler&gt; )

**Description :** Renvoie une version tronquée ou complétée de la chaîne ou liste d&apos;origine s. Le résultat contient les n caractères de droite ou éléments de liste, complétés par des filler à gauche si la longueur de s est inférieure à n.

**JMP Version ajoutée :** Avant la version 14

```jsl

Right( "http://www.jmp.com", 3 );

```

### Robust PCA

**Syntaxe :** {A,E} = Robust PCA( X , &lt;Lambda(2/sqrt(max(nrow,ncol)))&gt;, &lt;tolerance=1e-10&gt;,&lt;maxit(75)&gt;,&lt;Center(1)&gt;,&lt;Scale(1)&gt;

**Description :** Décompose de manière robuste les données en une matrice de rang faible et une matrice de résidus clairsemée. Les valeurs aberrantes sont détectées dans les résidus. Les valeurs manquantes peuvent également être imputées.

**JMP Version ajoutée :** 16

```jsl

X = [1 -3, -1 -2, -3 -4, -4 -3, -3 1, 3 3] * [-2 5 -1 -2 1,
4 5 -4 -3 1];
X[2, 3] += 15;
Result = Robust PCA( X, Center( 0 ), Scale( 0 ), Lambda( .80 ) );

```

### Root

**Syntaxe :** y = Root( x, &lt;n=2&gt; )

**Description :** Renvoie la racine n-ième de x.

**JMP Version ajoutée :** Avant la version 14

```jsl

Round( Root( 2, 3 ), 4 ) /* cube root */;

```

### Round

**Syntaxe :** y = Round( x, &lt;n&gt; )

**Description :** Arrondit x à n chiffres après la virgule (ou 0 chiffre si n n&apos;est pas spécifié). Notez que l&apos;argument n peut être négatif.

**JMP Version ajoutée :** Avant la version 14

```jsl

Round( 213, -1 );

```

### Row

**Syntaxe :** y = Row(); Row() = y

**Description :** Renvoie la ligne actuelle dans une table de données. Peut être définie comme une valeur L. Réinitialisez la ligne actuelle en affectant la valeur 0.

**JMP Version ajoutée :** Avant la version 14

**Définir la ligne**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Row() = 3;
:height * :weight;

```

**Réinitialiser la ligne**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Add Rows( 5 );
Show( Row() );
Row() = 0;

```

### Row State

**Syntaxe :** y = Row State( &lt;dt&gt;, &lt;r&gt; ); Row State( &lt;dt&gt;, &lt;r&gt; ) = y

**Description :** Renvoie l&apos;état de ligne de la ligne actuelle (ou r-ième) dans la table de données en cours. Si la fonction Row State() est utilisée comme L-value, l&apos;état de ligne de la ligne actuelle (ou r-ième) est modifié dans la table de données en cours.

**JMP Version ajoutée :** Avant la version 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Color State( {1, .5, 1} );
Color To RGB( Color Of( Row State( 3 ) ) );

```

### Rummage

**Syntaxe :** treasures = Rummage( box, query )

**JMP Version ajoutée :** 17

**Exemple 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Rummage( Window( dt ), "Wilcox" ) << title;

```

**Exemple 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Rummage( Report( obj ), "Wilcox" ) << details;

```

**Exemple 3**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Show(
	Rummage(
		Window( dt ),
		"graph builder",
		Algorithm( "FilterUtility" ),
		Match All Terms( 0 )
	)[1 :: 5] << Title
);
Show(
	Rummage( Window( dt ), "graph builder", Algorithm( "Basic" ) )[1
	 :: 3] << Title
);

```

### Run Program

**Syntaxe :** obj = Run Program( Executable( "path/etc.exe" ), &lt; Options( {"/a", "/b etc" } ) &gt;, &lt; Parameter( optParm ) &gt;, &lt; Read Function( Function( {this, optParm}, etc ) | "text" | "blob" ) &gt;, &lt; Write Function( Function( {this, optParm}, etc ) ) &gt;)

**Description :** Contrôler un programme externe à l&apos;aide de stdin et stdout.

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

RP = Run Program(
	Executable( "PING.EXE"/*path probably not needed*/ ),
	Options( {"-n 5", "localhost"} ),
	ReadFunction( Function( {this}, Write( this << read ) ) )
);

```

**Exemple 2**

```jsl

RP = Run Program(
	Executable( "CMD.EXE"/*path probably not needed*/ ),
	Options( {"/a", "/q", "/c dir"} ),
	ReadFunction( Function( {this}, Write( this << read ) ) )
);

```

**Exemple 3**

```jsl

commands = {"echo this is a test\!n", "ping -n 1 localhost\!n",
"exit\!n"};
icommand = 0;
RP = Run Program(
	Executable( "CMD.EXE" ),
	Options( {"/a", "/q"} ),
	ReadFunction( Function( {this}, Write( this << Read ) ) ),
	WriteFunction(
		Function( {this},
			icommand++;
			If( icommand <= N Items( commands ),
				this << Write( commands[icommand] );
				Show( commands[icommand] );
			,
				this << WriteEOF;
				Show(
					this << CanRead,
					this << CanWrite,
					this << isReadEOF
				);
			);
		)
	)
);

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

### Save Log

**Syntaxe :** f = Save Log( &lt;path&gt; )

**Description :** Écrit les contenus du registre dans l&apos;emplacement de fichier spécifié. Si l&apos;écriture est réalisée avec succès, cette fonction retourne le nom du fichier créé.

**JMP Version ajoutée :** Avant la version 14

```jsl

Save Log( "$TEMP/log.txt" );
exlogText = Load Text File( "$TEMP/log.txt" );
Substr( exlogText, 1, 30 );

```

### Save Text File

**Syntaxe :** f = Save Text File( path, text|blob, &lt;mode("replace"|"append")&gt; )

**Description :** Crée un fichier texte portant le nom de fichier spécifié par le chemin d&apos;accès path et dont le contenu est spécifié par la chaîne text. Si l&apos;enregistrement réussit, la fonction Save Text File() renvoie le nom de chemin d&apos;accès du fichier créé.

**JMP Version ajoutée :** Avant la version 14

```jsl

Save Text File( "$TEMP/DeleteMe.txt", "The quick brown fox" );
Load Text File( "$TEMP/DeleteMe.txt" );

```

### SbInv

**Syntaxe :** x = SbInv( z, gamma, delta, theta, sigma )

**Description :** Transforme une variable normale standard en une variable de Johnson doublement bornée.

**JMP Version ajoutée :** Avant la version 14

```jsl

SbInv( 1.96, 1.5, 2, 1, 2 );

```

### SbTrans

**Syntaxe :** z = SbTrans( x, gamma, delta, theta, sigma )

**Description :** Transforme une variable de Johnson doublement bornée en une variable normale standard.

**JMP Version ajoutée :** Avant la version 14

```jsl

Round( SbTrans( 2.114, 1.5, 2, 1, 2 ), 2 );

```

### Scene Box

**Syntaxe :** box = Scene Box( xsize, ysize )

**Description :** Renvoie une boîte d&apos;affichage pour les graphiques 3D.

**JMP Version ajoutée :** Avant la version 14

```jsl

Scene = Scene Box( 600, 600 );
Scene << backgroundcolor( 0 );
Scene << showarcball( always );
New Window( "See HelloWorld.jsl in sample scripts", Scene );
Scene << perspective( 45, .2, 20 );
Scene << Translate( 0.0, 0.0, -4.5 );
ex = Scene Display List();
ex << color( .9, .9, .9 );
ex << Text( center, middle, .3, "Hello World" );
Scene << arcball( ex, 1.5 );
Scene << update;

```

### Scene Display List

**Syntaxe :** list = Scene Display List()

**Description :** Renvoie une liste d&apos;affichage pour les graphiques en 3D.

**JMP Version ajoutée :** Avant la version 14

```jsl

ex = Scene Display List();
ex << color( .9, .9, .9 );
ex << Text( center, middle, .3, "Hello World" );
exScene = Scene Box( 600, 600 );
exScene << backgroundcolor( 0 );
exScene << showarcball( always );
New Window( "See HelloWorld.jsl in sample scripts", exScene );
exScene << perspective( 45, .2, 20 );
exScene << Translate( 0.0, 0.0, -4.5 );
exScene << arcball( ex, 1.5 );
exScene << update;

```

### Schedule

**Syntaxe :** Schedule( sec, scpt )

**Description :** Planifie un événement qui exécutera le script scpt après un délai de sec secondes.

**JMP Version ajoutée :** Avant la version 14

```jsl

Schedule(
	10,
	Beep();
	Print( "Time's up!" );
);

```

### Scheffe Cubic

**Syntaxe :** y = Scheffe Cubic( x1, x2 )

**Description :** Évalue comme x1*x2*(x1-x2) ; utilisé pour prendre en charge la notation de modélisation des modèles de mélange cubiques.

**JMP Version ajoutée :** Avant la version 14

```jsl

Scheffe Cubic( [1, -1, 1, -1, 1], [-1, -1, 1, 1, -1] );

```

### Scoring Impute

**Syntaxe :** {imputedRow} = Scoring Impute ( rowWithMissing , VMat, colMeanVec, colStdDevVec)

**Description :** Fournit une fonctionnalité d&apos;imputation en continu à l&apos;algorithme d&apos;Imputation automatisée des données (ADI). Les arguments d&apos;entrée sont un vecteur ligne qui contient les valeurs manquantes, une matrice des loadings (aussi nommée matrice V) qui est produite par l&apos;algorithme ADI, un vecteur de la moyenne des colonnes ignorant les cellules manquantes et un vecteur de l&apos;écart-type des colonnes ignorant les cellules manquantes. Renvoie le vecteur ligne avec les valeurs manquantes imputées à l&apos;aide de l&apos;estimation des moindres carrés.

**JMP Version ajoutée :** 14

```jsl

Scoring Impute(
	[1 2 3 . 4 .],
	[.5 .6, .3 .4, .1 .2, .6 .7, .3 .3, .5 .4],
	[0, 0, 0, 0, 0, 0],
	[1, 1, 1, 1, 1, 1]
);

```

### Script Box

**Syntaxe :** y = Script Box( &lt;s&gt;, &lt;"C" | "JavaScript" | "JSL" | "JSON" | "Python" | "R" | "SAS" | "SQL" | "Text" | "XML"&gt;, &lt;width&gt;, &lt;height&gt; )

**Description :** Renvoie une boîte d&apos;affichage permettant de modifier un script. Par défaut, l&apos;éditeur a la mise en surbrillance de la syntaxe et le comportement de JSL.

**JMP Version ajoutée :** Avant la version 14

**JSL**

```jsl

Script = Script Box( "// This window is editable.", "JSL", 300, 100 );
New Window( "This is a script box", Script );

```

**Script Python**

```jsl

pyscript = "\[import numpy as np
a = np.arange(15).reshape(3, 5)]\";
Script = Script Box( pyscript, "Python", 300, 100 );
New Window( "This is a python script box", Script );

```

### Scroll Box

**Syntaxe :** y = Scroll Box( &lt;Size( x, y )&gt;, displayBox )

**Description :** Renvoie une boîte d’affichage qui positionne une boîte enfant plus grande avec des barres de défilement.

**JMP Version ajoutée :** Avant la version 14

```jsl

New Window( "Example",
	Outline Box( "Picker",
		Scroll Box(
			Size( 200, 100 ),
			V List Box(
				H List Box(
					Text Box( "Label:" ),
					Text Edit Box( Char( 213 ) )
				),
				H List Box(
					Text Box( "Label:" ),
					Text Edit Box( Char( 213 ) )
				),
				H List Box(
					Text Box( "Label:" ),
					Text Edit Box( Char( 213 ) )
				),
				H List Box(
					Text Box( "Label:" ),
					Text Edit Box( Char( 213 ) )
				),
				H List Box(
					Text Box( "Label:" ),
					Text Edit Box( Char( 213 ) )
				)
			),
			<<Set Stretch( "Window", "Window" )
		)
	)
);

```

### Second

**Syntaxe :** sec = Second( datetime )

**Description :** Renvoie les secondes d&apos;une valeur « date-heure » de JMP, y compris la partie fractionnelle, 0 - 60 non inclus.

**JMP Version ajoutée :** Avant la version 14

```jsl

Second( Today() );

```

### Selected

**Syntaxe :** y = Selected( &lt;rs&gt; );Selected( &lt;Row State( &lt;r&gt; )&gt; ) = y

**Description :** Renvoie la composante sélectionnée de la valeur d&apos;état de ligne spécifiée, 0 ou 1. Si Selected est utilisé comme L-value, l’état sélectionné de la ligne active (ou r-ième) de la table de données active est modifié.

**JMP Version ajoutée :** Avant la version 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Selected State( 1 );
Selected( Row State( 3 ) );
Row() = 3;
Selected();

```

### Selected State

**Syntaxe :** rs = Selected State( x )

**Description :** Renvoie une valeur d&apos;état de ligne avec la composante sélectionnée définie comme la valeur spécifiée.

**JMP Version ajoutée :** Avant la version 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Selected State( 1 );
Selected( Row State( 3 ) );

```

### Send

**Syntaxe :** r = obj &lt;&lt; msg( args ); r = obj &lt;&lt; msg; r = Send( obj, msg )

**Description :** Envoie un message (sous la forme d&apos;une expression) à un objet.

**JMP Version ajoutée :** Avant la version 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Bivariate( Y( :weight ), X( :height ) ) << Fit Line;

```

### Sequence

**Syntaxe :** y = Sequence( start, end, &lt;incr=1&gt;, &lt;n=1&gt; )

**Description :** Renvoie le Row()-ième élément de la séquence des nombres de start à end incrémentée par incr. Chaque nombre de la séquence est répété n fois. Puisqu&apos;elle dépend de Row(), la fonction Sequence() est principalement utile dans les formules de colonne. Pour créer des séquences sous forme de matrices JSL, veuillez consulter Index().

**JMP Version ajoutée :** Avant la version 14

```jsl

Row() = 3;
Sequence( 1, 9, 2 );

```

### Set Clipboard

**Syntaxe :** Set Clipboard( text )

**Description :** Met le texte spécifié dans le presse-papiers du système utilisé par le menu Édition.

**JMP Version ajoutée :** Avant la version 14

```jsl

Set Clipboard( "example" );

```

### Set Default Directory

**Syntaxe :** Set Default Directory( path )

**Description :** Définit le répertoire JMP par défaut, qui est utilisé comme base pour les chemins d&apos;accès relatifs consécutifs.

**JMP Version ajoutée :** Avant la version 14

```jsl

Set Default Directory( "$SAMPLE_DATA" );
Open( "Big Class.jmp" );

```

### Set Difference

**Syntaxe :** list = Set Difference( list1, list2 )

**Description :** Renvoie la liste d&apos;éléments qui apparaissent dans list1 et pas dans list2. Les éléments peuvent être répétés. Si un argument est une référence de colonne à réponses multiples, il est traité comme une liste de ses valeurs dans la ligne actuelle.

**JMP Version ajoutée :** 19

```jsl

Show( Set Difference( {1, 3}, {3, 2} ) );
Show( Set Difference( {1, 3, 4, 3}, {3, 2, 3, 5, 3} ) );

```

### Set Environment Variable

**Syntaxe :** value = Set Environment Variable( string, &lt; string&gt; )

**Description :** Définit la valeur de la variable d&apos;environnement spécifiée dans le système d&apos;exploitation. Si le deuxième argument est manquant ou est une chaîne vide, alors la variable d&apos;environnement est supprimée.



REMARQUE : sous le système d&apos;exploitation Macintosh, le nom de variable est sensible à la casse.

**JMP Version ajoutée :** Avant la version 14

```jsl

Set Environment Variable( "PATH", "some path to a directory" );

```

### Set File Search Path

**Syntaxe :** Set File Search Path(path | {list of paths})

**Description :** Définit la liste courante des répertoires à rechercher pour l&apos;ouverture des fichiers. "." représente le répertoire courant.

**JMP Version ajoutée :** Avant la version 14

```jsl

Set File Search Path(
	{Convert File Path( "$SAMPLE_DATA/" ),
	Convert File Path( "$SAMPLE_DATA/Time Series/" )}
);
Show( Get File Search Path() );
Show( Convert File Path( "Air.jmp", search ) );
Show( Convert File Path( "Full of Air.jmp", search ) );
Show( Convert File Path( "Iris.jmp", search ) );

```

### Set Global Window Handler

**Syntaxe :** Set Global Window Handler( Handler Function )

**Description :** Définit une fonction à appeler chaque fois qu&apos;une nouvelle fenêtre est créée.

**JMP Version ajoutée :** 17

```jsl

Set Global Window Handler(
	Function( {window},
		Print( window << get window title() );
		window << close window();
	)
);
New Window( "My Window" );
Clear Global Window Handler();

```

### Set Intersection

**Syntaxe :** list = Set Intersect( list1, list2 )

**Description :** Renvoie la liste d&apos;éléments qui apparaissent dans les deux listes. Les éléments peuvent être répétés. Si un argument est une référence de colonne à réponses multiples, il est traité comme une liste de ses valeurs dans la ligne actuelle.

**JMP Version ajoutée :** 19

```jsl

Show( Set Intersection( {1, 3}, {3, 2} ) );
Show( Set Intersection( {1, 3, 4, 3}, {3, 2, 3, 5, 3} ) );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
dt << get rows where( Set Intersection( :sports, {"Soccer"} ) != {} );

```

### Set Path Variable

**Syntaxe :** Set Path Variable( name, &lt;value&gt; )

**Description :** Définit une variable de chemin d&apos;accès, qui est un nom tel que SAMPLE_DATA qui est remplacé lorsqu&apos;il se trouve dans les noms de chemin d&apos;accès.

**JMP Version ajoutée :** Avant la version 14

```jsl

Set Path Variable( "SAMPLE_DATA", Get Path Variable( "SAMPLE_DATA" ) );

```

### Set Platform Preference

**Syntaxe :** Platform Preferences( platformName( optionName( value ), ... ) ... )

**Description :** Définit les préférences de plate-forme comme spécifié.

**JMP Version ajoutée :** Avant la version 14

```jsl

Platform Preferences( Bivariate( Fit Line( 1 ) ) );

```

### Set Platform Preferences

**Syntaxe :** Platform Preferences( platformName( optionName( value ), ... ) ... )

**Description :** Définit les préférences de plate-forme comme spécifié.

**JMP Version ajoutée :** Avant la version 14

```jsl

Platform Preferences( Bivariate( Fit Line( 1 ) ) );

```

### Set Policy

**Syntaxe :** Set Policy("PolicyName", &lt;Empty()|#|"value"&gt; )

**JMP Version ajoutée :** 18

### Set Preference

**Syntaxe :** Preferences( pref1( value1 ), ... )

**Description :** Définit les préférences comme spécifié.

**JMP Version ajoutée :** Avant la version 14

```jsl

Preferences( Graph marker size( "Large" ) );

```

### Set Preferences

**Syntaxe :** Preferences( pref1( value1 ), ... )

**Description :** Définit les préférences comme spécifié.

**JMP Version ajoutée :** Avant la version 14

```jsl

Preferences( Graph marker size( "Large" ) );

```

### Set Toolbar Visibility

**Syntaxe :** rc = Set Toolbar Visibility( "toolbar-name" | Default | All, &lt;window-class-name | All&gt;, &lt;True | False&gt; )

**Description :** Définit la visibilité d&apos;une barre d&apos;outils donnée pour une classe de fenêtres donnée. Nom de barre d&apos;outils correspond au nom interne de la barre. Si le nom de barre d&apos;outils donné est Default, la classe de fenêtres spécifiée est remise à la valeur par défaut de la barre d&apos;outils, définie pour cette classe de fenêtres. Voici des exemples de nom de classe de fenêtre: Table de données, Script, Rapport et Journal. Si le nom de classe de fenêtres donné est Tout, la visibilité de la barre d&apos;outils spécifiée est définie pour toutes les classes de fenêtres.

Renvoie 1 en cas de succès, 0 en cas d&apos;échec.

**JMP Version ajoutée :** Avant la version 14

```jsl


// Make the Analyze toolbar visible in Script windows
Set Toolbar Visibility( "Analyze", Script, true );

// Make the Analyze toolbar visible in all classes of windows
Set Toolbar Visibility( "Analyze", All, true );

// Revert Script windows to the default toolbar set for Script windows
Set Toolbar Visibility( Default, Script );

// Revert all windows to their default toolbar set
Set Toolbar Visibility( Default, All );

```

### Set Union

**Syntaxe :** list = Set Union( list1, list2 )

**Description :** Renvoie la liste d&apos;éléments qui apparaissent dans l&apos;une ou l&apos;autre des listes. Les éléments peuvent être répétés. Si un argument est une référence de colonne à réponses multiples, il est traité comme une liste de ses valeurs dans la ligne actuelle.

**JMP Version ajoutée :** 19

```jsl

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

Show( Set Unique( {1, 3, 2} ) );
Show( Set Unique( {1, 3, 4, 3, 3, 2, 3, 5, 3} ) );
Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Row() = 1;
Show( Set Unique( :sports ) );

```

### SEV Density

**Syntaxe :** y = SEV Density( x, mu, sigma )

**Description :** Renvoie la densité à x d’une distribution des valeurs extrêmes les plus petites avec paramètre de position mu et paramètre d’échelle sigma.

**JMP Version ajoutée :** Avant la version 14

```jsl

mu = 50;
sig = 5;
New Window( "Example: SEV Density",
	y = Graph Box(
		Y Scale( 0, .06 ),
		X Scale( 0, 60 ),
		Pen Color( "red" );
		Y Function( SEV Density( x, mu, sig ), x );
		Text( {0, .055}, "mu=", Round( mu, 2 ) );
		Text( {0, .045}, "sig=", Round( sig, 2 ) );
	),
	H List Box(
		Slider Box( 0, 100, mu, y << reshow ),
		Text Box( "mu" )
	),
	H List Box(
		Slider Box( 0, 10, sig, y << reshow ),
		Text Box( "sig" )
	), 

);

```

### SEV Distribution

**Syntaxe :** p = SEV Distribution( x, mu, sigma )

**Description :** Renvoie la probabilité à x d’une distribution des valeurs extrêmes les plus petites avec paramètre de position mu et paramètre d’échelle sigma.

**JMP Version ajoutée :** Avant la version 14

```jsl

mu = 50;
sig = 5;
New Window( "Example: SEV Distribution",
	y = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( 0, 60 ),
		Pen Color( "red" );
		Y Function( SEV Distribution( x, mu, sig ), x );
		Text( {0.1, 0.9}, "mu=", Round( mu, 2 ) );
		Text( {0.1, 0.8}, "sig=", Round( sig, 2 ) );
	),
	H List Box(
		Slider Box( 0, 100, mu, y << reshow ),
		Text Box( " mu" )
	),
	H List Box(
		Slider Box( 0, 10, sig, y << reshow ),
		Text Box( " sig" )
	)
);

```

### SEV Quantile

**Syntaxe :** q = SEV Quantile( p, mu, sigma )

**Description :** Renvoie le quantile à p d’une distribution des valeurs extrêmes les plus petites avec paramètre de position mu et paramètre d’échelle sigma.

**JMP Version ajoutée :** Avant la version 14

```jsl

mu = 50;
sig = 5;
qq = .5;
New Window( "Example: SEV Quantile",
	y = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( 0, 60 ),
		Pen Color( "red" );
		Y Function( SEV Distribution( qq, mu, sig ), qq );
		Pen Color( "blue" );
		V Line( SEV Quantile( qq, mu, sig ), 0, 1 );
		Text(
			{0.1, 0.9},
			" mu=",
			Round( mu, 2 ),
			" sig=",
			Round( sig, 2 ),
			" quantile=",
			Round( qq, 2 )
		);
	),
	H List Box(
		Slider Box( 0, 80, mu, y << reshow ),
		Text Box( " mu" )
	),
	H List Box(
		Slider Box( 0, 10, sig, y << reshow ),
		Text Box( " sig" )
	),
	H List Box(
		Slider Box( 0.01, 0.99, qq, y << reshow ),
		Text Box( " quantile" )
	)
);

```

### Shade State

**Syntaxe :** rs = Shade State( x )

**Description :** Renvoie une valeur d&apos;état de ligne avec la composante de la nuance de la couleur définie comme la valeur spécifiée. Doit être combiné à une valeur de la fonction État de teinte() pour produire une couleur correcte.

**JMP Version ajoutée :** Avant la version 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Combine States( Hue State( 5 ), Shade State( 1 ) );

```

### Shape

**Syntaxe :** r = Shape( M, nr, &lt;nc&gt;, &lt;&lt;bycol)

**Description :** Restructure la matrice M ou le scalaire dans les lignes de sorte qu&apos;il y ait nr lignes pour nc colonnes. Une valeur manquante est autorisée pour nr. Les données de M peuvent être répliquées de sorte à remplir la matrice avec nr pour nc. L&apos;argument facultatif <<bycol remplit les données par colonne. Par défaut, les données sont remplies par ligne. Cette option est généralement utilisée pour restructurer un vecteur dans une matrice ou pour vectoriser une matrice.

**JMP Version ajoutée :** Avant la version 14

```jsl

Eval List(
	{Shape( [11 22, 33 44], 1, 4 ), Shape( [11 22, 33 44], 1 ),
	Shape( [11 22, 33 44], ., 4 )}
);

```

### Shape Seg

**Syntaxe :** me = Shape Seg( {Path(&lt;path&gt;), ...}, &lt; Row States( dt | dt,[rows] | dt,{{rows}, ...} | {states} ) &gt; )

**Description :** Renvoie un seg d&apos;affichage avec une série de formes. Chaque forme dessine un trait le long du chemin spécifié si le remplissage est zéro, ou peint l’intérieur du chemin spécifié si le remplissage est différent de zéro. Le chemin peut être spécifié par une matrice N x 3 ou par une représentation textuelle. Une matrice de chemin à trois colonnes pour x, y et les drapeaux pour chaque point du chemin. Les valeurs de drapeau sont 0 pour le contrôle, 1 pour le déplacement, 2 pour le segment de ligne, 3 pour le segment cubique de Bézier et sont négatives si le point ferme aussi le chemin. Le texte de chemin autorise la syntaxe SVG.

**JMP Version ajoutée :** Avant la version 14

```jsl

New Window( "Shape Seg Example",
	Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);

```

### SHASH Density

**Syntaxe :** d = SHASH Density( x, gamma, delta, theta, sigma )

**Description :** Renvoie la densité à x d&apos;une distribution sinh-arcsinh (SHASH). La transformation SHASH peut être utilisée pour créer des données plus normalement distribuées.

**JMP Version ajoutée :** 14

**Exemple 1**

```jsl

SHASH Density( 0, -1, 2, -2, 3 );

```

**Transformation SHASH**

```jsl

gamma = 1;
delta = .5;
theta = -1;
sigma = 2;
x = 3;
result1 = SHASHTrans( x, gamma, delta, theta, sigma );
result2 = SinH( gamma + delta * ArcSinH( (x - theta) / sigma ) );
Show( result1, result2 );

```

### SHASH Distribution

**Syntaxe :** p = SHASH Distribution( q, gamma, delta, theta, sigma )

**Description :** Renvoie la probabilité qu&apos;une variable distribuée sinh-arcsinh (SHASH) soit inférieure à q. La transformation SHASH peut être utilisée pour créer des données plus normalement distribuées.

**JMP Version ajoutée :** 14

**Exemple 1**

```jsl

gamma = 0.5;
delta = 1;
theta = 1;
sigma = 1;
New Window( "Example: SHASH Distribution",
	jsuc = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( -2, 2 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function(
			SHASH Distribution( q, gamma, delta, theta, sigma ),
			q
		);
		Text(
			{-1, 0.9},
			"\!U03B3=",
			Round( gamma, 2 ),
			" \!U03B4=",
			Round( delta, 2 ),
			" \!U03B8=",
			Round( theta, 2 ),
			" \!U03C3=",
			Round( sigma, 2 )
		);
	),
	H List Box(
		Slider Box( 0, 1, gamma, jsuc << reshow ),
		Text Box( " \!U03B3" )
	),
	H List Box(
		Slider Box( 0, 2, delta, jsuc << reshow ),
		Text Box( " \!U03B4" )
	),
	H List Box(
		Slider Box( 0, 2, theta, jsuc << reshow ),
		Text Box( " \!U03B8" )
	),
	H List Box(
		Slider Box( 0, 2, sigma, jsuc << reshow ),
		Text Box( " \!U03C3" )
	)
);

```

**Transformation SHASH**

```jsl

gamma = 1;
delta = .5;
theta = -1;
sigma = 2;
x = 3;
result1 = SHASHTrans( x, gamma, delta, theta, sigma );
result2 = SinH( gamma + delta * ArcSinH( (x - theta) / sigma ) );
Show( result1, result2 );

```

### SHASH Quantile

**Syntaxe :** q = SHASH Quantile( p, gamma, delta, theta, sigma )

**Description :** Renvoie le quantile d&apos;une distribution sinh-arcsinh (SHASH), correspondant à la probabilité p qu&apos;une variable aléatoire ayant cette distribution prenne une valeur inférieure au quantile. La transformation SHASH peut être utilisée pour créer des données plus normalement distribuées.

**JMP Version ajoutée :** 14

**Exemple 1**

```jsl

SHASH Quantile( .5, 1, 2, 3, 1 );

```

**Transformation SHASH**

```jsl

gamma = 1;
delta = .5;
theta = -1;
sigma = 2;
x = 3;
result1 = SHASHTrans( x, gamma, delta, theta, sigma );
result2 = SinH( gamma + delta * ArcSinH( (x - theta) / sigma ) );
Show( result1, result2 );

```

### SHASHInv

**Syntaxe :** x = SHASHInv( z, gamma, delta, theta, sigma )

**Description :** Transforme une variable normale standard en une variable distribuée sinh-arcsinh (SHASH).

**JMP Version ajoutée :** 14

```jsl

gamma = 1;
delta = .5;
theta = -1;
sigma = 2;
x = 3;
result1 = SHASHTrans( x, gamma, delta, theta, sigma );
x1 = SHASHInv( result1, gamma, delta, theta, sigma );
x2 = SinH( (ArcSinH( result1 ) - gamma) / delta ) * sigma + theta;
Show( x1, x2 );

```

### SHASHTrans

**Syntaxe :** z = SHASHTrans( x, gamma, delta, theta, sigma )

**Description :** Transforme une variable distribuée sinh-arcsinh (SHASH) en une variable distribuée normale standard. La transformation SHASH peut être utilisée pour créer des données plus normalement distribuées.

**JMP Version ajoutée :** 14

```jsl

gamma = 1;
delta = .5;
theta = -1;
sigma = 2;
x = 3;
result1 = SHASHTrans( x, gamma, delta, theta, sigma );
result2 = SinH( gamma + delta * ArcSinH( (x - theta) / sigma ) );
Show( result1, result2 );

```

### Sheet Part

**Syntaxe :** y = Sheet Part( title, childbox )

**Description :** Renvoie une boîte d&apos;affichage contenant l’argument boîte d&apos;affichage childbox avec un titre donné.

**JMP Version ajoutée :** Avant la version 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Example",
	V Sheet Box(
		<<Hold( Bivariate( Y( :weight ), X( :height ), Fit Line() ) ),
		<<Hold(
			Distribution(
				Automatic Recalc( 1 ),
				Continuous Distribution(
					Column( :height ),
					Horizontal Layout( 1 ),
					Vertical( 0 ),
					Outlier Box Plot( 0 )
				)
			)
		),
		<<Hold( Treemap( Categories( :age ) ) ),
		<<Hold(
			Bubble Plot(
				X( :height ),
				Y( :weight ),
				Sizes( :age ),
				Coloring( :sex ),
				Circle Size( 6.226 ),
				All Labels( 0 )
			)
		),
		H Sheet Box(
			Sheet Part(
				"weight by height",
				Excerpt Box( 1, {Picture Box( 1 )} )
			),
			Sheet Part(
				"height",
				Excerpt Box( 2, {Picture Box( 1 )} )
			)
		),
		H Sheet Box(
			Sheet Part( "", Excerpt Box( 3, {Picture Box( 1 )} ) ),
			Sheet Part(
				"height by weight",
				Excerpt Box( 4, {Picture Box( 1 )} )
			)
		)
	)
);

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

ex = {11, 22, 33, 44, 55};
Shift Into( ex, -2 );
ex;

```

**Exemple 2**

```jsl

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

### Short Date

**Syntaxe :** s = Short Date( datetime, &lt;format&gt; )

**Description :** Renvoie une représentation locale (JJ/MM/AAAA) numérique d&apos;une valeur date-heure.

**JMP Version ajoutée :** Avant la version 14

```jsl

Short Date( Today() );

```

### Shortest Edit Script

**Syntaxe :** list = Shortest Edit Script(A,B); matrix = Shortest Edit Script( strings( A, B, matrix(1), limit(9999) ) ); list = Shortest Edit Script( lines( A, B, separators("defaults to newline"), ignore("defaults to none")|ignoreWhiteSpace(), matrix(0), limit(9999) ) ); matrix = Shortest Edit Script( sequences(nA, nB, Function({iA,iB}, adata[iA] == bdata[ib] ) ) )

**Description :** Renvoie un des scripts d’édition les plus courts pour convertir une chaîne A en chaîne B. La forme simple renvoie uniquement une liste. strings() et lines() ont une option permettant de renvoyer une matrice ou une liste. sequences() renvoie uniquement une matrice.  En option, limit() arrêtera la fonction rapidement si la liste d’édition possède plus d’insertions et de suppressions que la limite autorisée. lines() compare les lignes au lieu des caractères ; les options ignore("characters") ou ignoreWhiteSpace() sélectionnent les caractères non ignorés par défaut.   Si nécessaire, ESC arrêtera la fonction.

**JMP Version ajoutée :** Avant la version 14

```jsl

editList = Shortest Edit Script(
	"time flies like an arrow",
	"fruit flies like a banana"
);
common = "";/* assemble a longest common subsequence */
For( i = 1, i <= N Items( editList ), i++,
	If( editList[i][1] == "Common", /* or Insert or Remove */common =
		common || editList[i][2] /* the snippet */
	)
);
common;

```

### Show

**Syntaxe :** Show( x, ... )

**Description :** Affiche le nom et la valeur des arguments dans le registre, un(e) par ligne.

**JMP Version ajoutée :** Avant la version 14

```jsl

Show( 355 / 113, Pi() );

```

### Show Addin Builder Dialog

**Syntaxe :** Show Addin Builder Dialog()

**Description :** Ouvre une boîte de dialogue permettant de créer des compléments personnalisés.

**JMP Version ajoutée :** Avant la version 14

```jsl

Show Addin Builder Dialog();

```

### Show Addins Dialog

**Syntaxe :** Show Addins Dialog()

**Description :** Ouvre une boîte de dialogue affichant l’état de tous les compléments enregistrés.

**JMP Version ajoutée :** Avant la version 14

```jsl

Show Addins Dialog();

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
			complex(
				real * y:real - imag * y:imag,
				imag * y:real + real * y:imag
			)
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

### Show Commands

**Syntaxe :** Show Commands( &lt;keyword=Builtins&gt; )

**Description :** Crée une ou plusieurs tables de données contenant des informations sur plusieurs composantes JSL. L&apos;argument keyword détermine le contenu de la table de sortie. Spécifiez les éléments intégrés (par défaut) pour les opérateurs et fonctions intégrés. Spécifiez les objets scriptables pour toutes les commandes scriptables des objets. Spécifiez les traductions pour l&apos;Anglais et les versions traduites des commandes scriptables. Spécifiez les boîtes d&apos;affichage pour les commandes scriptables liées aux boîtes d&apos;affichage et aux segs d&apos;affichage. Spécifiez les noms scriptables pour les noms des objets scriptables. Spécifiez les noms de plate-forme pour les noms des plates-formes.

**JMP Version ajoutée :** Avant la version 14

```jsl

Show Commands();

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

### Show Preferences

**Syntaxe :** Show Preferences()

**Description :** Affiche les paramètres de préférence actuels dans le registre.

**JMP Version ajoutée :** Avant la version 14

```jsl

Show Preferences();

```

### Show Properties

**Syntaxe :** Show Properties( object )

**Description :** Affiche dans le registre les messages auxquels correspond un objet.

**JMP Version ajoutée :** Avant la version 14

```jsl

Show Properties( Current Data Table() );

```

### Show Symbols

**Syntaxe :** Show Symbols()

**Description :** Dresse la liste de tous les symboles actuellement définis et de leurs valeurs.

**JMP Version ajoutée :** Avant la version 14

```jsl

Show Symbols();

```

### Simplify Expr

**Syntaxe :** resultExpr = Simplify Expr( expr( ... ) )

**Description :** Renvoie une expression équivalente qui simplifie l&apos;expression de l&apos;argument de plusieurs façons.

**JMP Version ajoutée :** Avant la version 14

```jsl

Simplify Expr( Expr( 2 * 3 * a + b * (a + 3 - c) - a * b ) );

```

### Sin

**Syntaxe :** y = Sine( x )

**Description :** Renvoie le sinus trigonométrique de x, où x est un angle en radians.

**JMP Version ajoutée :** Avant la version 14

```jsl

Sine( Pi() / 6 );

```

### Sine

**Syntaxe :** y = Sine( x )

**Description :** Renvoie le sinus trigonométrique de x, où x est un angle en radians.

**JMP Version ajoutée :** Avant la version 14

```jsl

Sine( Pi() / 6 );

```

### SinH

**Syntaxe :** y = SinH( x )

**Description :** Renvoie le sinus hyperbolique de x.

**JMP Version ajoutée :** Avant la version 14

```jsl

SinH( 1 );

```

### Slider Box

**Syntaxe :** box = Slider Box(minValue, maxValue, variable, script, &lt;set width(n)&gt;, &lt;rescale slider(minValue, maxValue)&gt;)

**Description :** Renvoie une boîte d’affichage avec un curseur de contrôle allant de minValue à maxValue. Lorsque la position du curseur change, sa valeur est placée dans variable et le script est exécuté.

**JMP Version ajoutée :** Avant la version 14

```jsl

sliderValue = .6;
New Window( "Example",
	Panel Box( "Slider Box",
		tb = Text Box( "Value: " || Char( sliderValue ) ),
		sb = Slider Box(
			0,
			1,
			sliderValue,
			tb << Set Text( "Value: " || Char( sliderValue ) )
		)
	)
);

```

### SlInv

**Syntaxe :** x = SlInv( z, gamma, delta, theta, &lt;sigma=1&gt; )

**Description :** Transforme une variable normale standard en une variable SL de Johnson.

**JMP Version ajoutée :** Avant la version 14

```jsl

SlInv( 1.96, 1.5, 2, 1 );

```

### SlTrans

**Syntaxe :** z = SlTrans( x, gamma, delta, theta, &lt;sigma=1&gt; )

**Description :** Transforme une variable SL de Johnson en une variable normale standard.

**JMP Version ajoutée :** Avant la version 14

```jsl

Round( SlTrans( 2.259, 1.5, 2, 1 ), 2 );

```

### Sobol Quasi Random Sequence

**Syntaxe :** points = Sobol Quasi Random Sequence(nDim, nRow)

**Description :** Générez une séquence de remplissage des nombres quasi-aléatoires à l&apos;aide de la suite de Sobol dans 4 000 dimensions au maximum.

**JMP Version ajoutée :** Avant la version 14

```jsl

A = Sobol Quasi Random Sequence( 3, 100 );
As Table( A );
Scatterplot 3D( Y( :Col1, :Col2, :Col3 ) );

```

### Socket

**Syntaxe :** socketHandle = Socket( &lt;STREAM | DGRAM&gt; )

**Description :** Crée une variable de socket qui peut communiquer avec les sockets de cet ordinateur ou d&apos;autres du réseau. L&apos;argument par défaut est STREAM. Essayez le site Internet de votre société.

**JMP Version ajoutée :** Avant la version 14

```jsl


// see the socket's OBJECT messages in the scripting index for better examples
tCall = Socket();
tcall << Ioctl( FIONBIO, 1 );
rc = tCall << connect( "www.jmp.com", "80" );
If( rc[2] == "ok",
	tCall << <<Char To Blob(
		"GET /en_us/home.html HTTP/1.1~0d~0aHost: www.jmp.com~0d~0aConnection: Close~0d~0a~0d~0a",
		"ASCII~HEX"
	);
	While( 1,
		tMessage = tCall << Recv( 100000 );
		If(
			tMessage[2] == "ok",
				Show( Length( tMessage[3] ) ); //typically about six chunks of around 5-20K bytes
		,
			Starts With( tMessage[2], "WOULDBLOCK" ),
				Show( "waiting" ) // sometimes data might not be available yet
		,
			Starts With( tMessage[2], "CLOSED" ),
				Break(); // this is the desired result
		, // else
			Show( tMessage );
			Stop();
		);
	);
	tCall << Close();// done
, // else
	Show( rc );
	Stop();
);

```

### Solve

**Syntaxe :** y = Solve( A, B )

**Description :** Résout le système linéaireA*x=B pour x. La fonction Solve() est équivalente à Inverse(A)*B si A est non singulier. Notez que l’argument A doit être une matrice carrée.

**JMP Version ajoutée :** Avant la version 14

```jsl

Solve( [1 1, -1 4], [11, 14] );

```

### Sort Ascending

**Syntaxe :** y = Sort Ascending( x )

**Description :** Renvoie une copie de la liste ou de la matrice x avec les éléments dans l’ordre croissant.

**JMP Version ajoutée :** Avant la version 14

```jsl

Sort Ascending( {111, 212, 133, 114, 55} );

```

### Sort Descending

**Syntaxe :** y = Sort Descending( x )

**Description :** Renvoie une copie de la liste ou de la matrice x avec les éléments dans l’ordre décroissant.

**JMP Version ajoutée :** Avant la version 14

```jsl

Sort Descending( {111, 212, 133, 114, 55} );

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

### Spacer Box

**Syntaxe :** y = Spacer Box( &lt;Size( x, y )&gt;, &lt;Color( c )&gt;)

**Description :** Renvoie une boîte d’affichage utilisable pour maintenir un espace entre d’autres boîtes d’affichage ou pour remplir une cellule dans une Lineup Box. Les arguments Size sont exprimés en pixels et l’argument Color est une couleur quelconque admise par JSL.

**JMP Version ajoutée :** Avant la version 14

```jsl

New Window( "Example",
	Lineup Box( N Col( 3 ),
		Text Box( "a" ),
		Spacer Box(),
		Text Box( "b" ),
		Spacer Box(),
		Text Edit Box( "Under Spacer Box" )
	)
);

```

### Sparse SVD

**Syntaxe :** {U, M, V} = Sparse SVD( X , &lt;nSingularValues=min(nRow,nCol)&gt;, &lt;tolerance=1e-10&gt;)

**Description :** Calcule la décomposition en valeurs singulières de la matrice X en utilisant la méthode de redémarrage implicite et de réorthogonalisation partielle de Lanczos, pour analyser les matrices en renvoyant une liste {U, M, V} de sorte que U*diag(M)*V` est égal à X.

**JMP Version ajoutée :** Avant la version 14

```jsl

Sparse SVD( [11 22, 33 44], 1, 1e-8 );

```

### Speak

**Syntaxe :** Speak( text, &lt;Wait( sync )&gt; )

**Description :** Énonce le texte si le système d&apos;exploitation le permet. En spécifiant l’argument facultatif Wait(true), l&apos;exécution du script est retardée jusqu’à ce que le discours soit terminé.

**JMP Version ajoutée :** Avant la version 14

```jsl

Speak( "Hello" );

```

### Spin Box

**Syntaxe :** y = Spin Box( &lt;script&gt; )

**Description :** Renvoie une boîte d&apos;affichage permettant d&apos;afficher un bouton avec les commandes monter/descendre. L&apos;argument script est invoqué avec un argument qui indique la direction de la flèche qui a été cliquée (moins correspond à descendre, plus correspond à monter). La valeur 1 indique un seul clic, alors que de plus grandes valeurs peuvent être utilisées pour indiquer une action répétitive.

**JMP Version ajoutée :** Avant la version 14

```jsl

New Window( "Example",
	Lineup Box(
		2,
		nb = Number Edit Box( 3 ),
		sb = Spin Box( Function( {value}, nb << Increment( value ) ) )
	)
);
nb << Set Increment( 1 );

```

### Spline Coef

**Syntaxe :** coef = Spline Coef( x, y, lambda, &lt;weights&gt; )

**Description :** Returns a five-column matrix of coefficients in the following order: knots||a||b||c||d for each of the unique values in x. The smoothing parameter lambda must be a positive value, where larger values of lambda result in greater stiffness of the spline. The optional weights vector specifies a weight for each value in x. A weight of zero removes the corresponding point from the spline fit.

**JMP Version ajoutée :** Avant la version 14

```jsl

Spline Eval( 0 :: 10, Spline Coef( 0 :: 10, Sqrt( 0 :: 10 ), 100 ) );

```

### Spline Eval

**Syntaxe :** yhat = Spline Eval( x, coef, &lt;extrapolation=-1&gt; )

**Description :** Évalue les prévisions des splines en utilisant la matrice coef sous la même forme que celle renvoyée par la fonction Spline Coef(). extrapolation indique le dépassement de l&apos;étendue de la spline, sous la forme d&apos;une fraction de l&apos;étendue, de sorte à pouvoir étendre l&apos;évaluation avant de renvoyer les valeurs manquantes.

**JMP Version ajoutée :** Avant la version 14

```jsl


New Window( "Spline Fit",
	window:x = 20 :: 80;
	window:y = 50 + Sin( (20 :: 80) / 10 ) * 40
	+J( 1, N Col( window:x ), Random Normal( 0, 10 ) );
	window:loglambda = 2;
	window:g = Graph Box(
		Pen Color( "blue" );
		window:m = Spline Coef(
			window:x,
			window:y,
			Power( 10, window:loglambda )
		);
		Marker( window:x, window:y );
		Y Function( Spline Eval( a, window:m, 0.05 ), a );
	);,
	H List Box(
		Text Box( "Lambda: " ),
		Slider Box( -2, 5, window:loglambda, window:g << reshow )
	)
)
;

```

### Spline Smooth

**Syntaxe :** yhat = Spline Smooth( x, y, lambda, &lt;weights&gt; )

**Description :** Returns the smoothed predicted values from a spline fit. The smoothing parameter lambda must be a positive value, where larger values of lambda result in greater stiffness of the spline. The optional weights vector specifies a weight for each value in x. A weight of zero removes the corresponding point from the spline fit.

**JMP Version ajoutée :** Avant la version 14

```jsl

Spline Smooth( 0 :: 10, Sqrt( 0 :: 10 ), 100 );

```

### Sqrt

**Syntaxe :** y = Sqrt( x )

**Description :** Renvoie la racine carrée positive de l’argument x, qui peut être un nombre, une matrice ou une liste de nombres.

**JMP Version ajoutée :** Avant la version 14

```jsl

Round( Sqrt( 2 ), 4 );

```

### Squash

**Syntaxe :** y = Squash( x )

**Description :** Renvoie 1 / (1 + Exp( x )), qui convertit un nombre dans le domaine -∞, +∞ en un nombre dans l&apos;intervalle 1..0. La fonction Squash() est utile dans la régression logistique.

**JMP Version ajoutée :** Avant la version 14

```jsl

Squash( 10 );

```

### Squish

**Syntaxe :** y = Logist( x )

**Description :** Renvoie 1 / (1 + Exp( -x )), qui convertit un nombre compris dans le domaine -∞...+∞ dans l&apos;intervalle 0...1. La fonction Logist() s&apos;avère utile dans la régression logistique.

**JMP Version ajoutée :** Avant la version 14

```jsl

Logist( 2 );

```

### SSQ

**Syntaxe :** y = SSQ( x1, ... )

**Description :** Renvoie la somme des carrés de tous les éléments

**JMP Version ajoutée :** Avant la version 14

```jsl

Eval List( {SSQ( Pi(), e() ), SSQ( [33 44 22 20 30] )} );

```

### Starts With

**Syntaxe :** b = Starts With( s, sub )

**Description :** Renvoie 1 si s commence par sub, et 0 dans le cas contraire. Les arguments s et sub peuvent être deux chaînes ou deux listes. Équivalent à Left( s, Length( sub )) == sub.

**JMP Version ajoutée :** Avant la version 14

```jsl

Starts With( "http://www.jmp.com", "http:" );

```

### Status Msg

**Syntaxe :** Status Msg( message )

**Description :** Affiche le message spécifié dans la barre d&apos;état.

**JMP Version ajoutée :** Avant la version 14

```jsl

Status Msg( "calculating..." );

```

### Std Dev

**Syntaxe :** y = Std Dev( x1, ... )

**Description :** Renvoie l&apos;écart-type des arguments ou des valeurs dans un argument unique de matrice ou de liste.

**JMP Version ajoutée :** Avant la version 14

```jsl

Eval List( {Std Dev( Pi(), e() ), Std Dev( [33 44 22 20 30] )} );

```

### Step

**Syntaxe :** y = Step( x, x1, y1, x2, y2, ... )y = Step( x, [x1, x2, ...], [y1, y2, ...] )

**Description :** Renvoie l’argument yi correspondant à la valeur la plus grande de xi telle que xi est supérieur ou égal à l’argument x. Notez que les arguments xi doivent être indiqués dans l’ordre.

**JMP Version ajoutée :** Avant la version 14

```jsl

Step( 2.5, [1 2 3], [15, 20, 30] );

```

### Stop

**Syntaxe :** Stop()

**Description :** Termine immédiatement l’exécution d’un script JSL

**JMP Version ajoutée :** Avant la version 14

```jsl

For( i = 1, i <= 10, i++,
	If( i == 7, Stop() );
	Print( "i=" || Char( i ) );
);

```

### Straight Line Depreciation

**Syntaxe :** x = Straight Line Depreciation( cost, salvage, life )

**Description :** Renvoie l’amortissement linéaire d’un capital sur une période. Équivalent à la fonction SLN de Microsoft Excel.

**JMP Version ajoutée :** Avant la version 14

```jsl

Straight Line Depreciation( 1000, 100, 3 );

```

### String Col Box

**Syntaxe :** y = String Col Box( title, {strings} )

**Description :** Renvoie une boîte d&apos;affichage illustrant les chaînes spécifiées par l’argument strings, qui est une liste de chaînes de caractères.

**JMP Version ajoutée :** Avant la version 14

```jsl

New Window( "Example",
	Outline Box( "Table",
		Table Box(
			String Col Box( "names", {"x", "y", "z"} ),
			Number Col Box( "values", {11, 22, 33} ),
			Plot Col Box( "values", {11, 22, 33} )
		)
	)
);

```

### String Col Edit Box

**Syntaxe :** y = String Col Edit Box( title, {strings} )

**Description :** Renvoie une boîte d&apos;affichage illustrant les chaînes spécifiées par l’argument strings, qui est une liste de chaînes de caractères.

**JMP Version ajoutée :** Avant la version 14

```jsl

a = b = c = "";
New Window( "Example",
	Modal,
	<<Return Result,
	Outline Box( "Table",
		Table Box( seb = String Col Edit Box( "names", {a, b, c} ) )
	)
);

```

### Students t Density

**Syntaxe :** p = t Density( q, df, &lt;nonCentrality=0&gt; )

**Description :** Renvoie la fonction de densité du t de Student.

**JMP Version ajoutée :** Avant la version 14

```jsl

tdedf = 1;
New Window( "Example: Students t Density",
	tdegr = Graph Box(
		Y Scale( -.05, 0.45 ),
		X Scale( -8, 8 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( t Density( tdeq, Exp( tdedf ) ), tdeq );
		H Line( 2, 3, 0.3 );
		Pen Color( "blue" );
		Y Function( Normal Density( tdeq ), tdeq );
		H Line( 2, 3, 0.25 );
		Text( {2, 0.35}, "df=", Round( Exp( tdedf ), 2 ) );
		Text( {3.5, 0.3}, "Student t" );
		Text( {3.5, 0.25}, "Normal" );
	),
	H List Box(
		Text Box( "df " ),
		Slider Box( Log( 0.1 ), Log( 1000 ), tdedf, tdegr << reshow )
	)
);

```

### Students t Distribution

**Syntaxe :** p = t Distribution( q, df, &lt;nonCentrality=0&gt; )

**Description :** Renvoie la probabilité qu&apos;une variable aléatoire distribuée selon Student est inférieure à q.

**JMP Version ajoutée :** Avant la version 14

```jsl

tdidf = 1;
New Window( "Example: Students t Distribution",
	tdigr = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( -5, 5 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( t Distribution( tdiq, tdidf ), tdiq );
		Text( {-4.5, 0.9}, "df=", Round( tdidf, 2 ) );
	),
	H List Box(
		Text Box( "df " ),
		Slider Box( 1, 10, tdidf, tdigr << reshow )
	)
);

```

### Students t Quantile

**Syntaxe :** q = t Quantile( p, df, &lt;nonCentrality=0&gt; )

**Description :** Renvoie le quantile d’une distribution t de Student, correspondant à la probabilité p qu’une variable aléatoire ayant cette distribution prenne une valeur inférieure au quantile.

**JMP Version ajoutée :** Avant la version 14

```jsl

extqdf = 1;
extqqq = 0.5;
New Window( "Example: Students t Quantile",
	extqgr = Graph Box(
		Y Scale( 0, 1.05 ),
		X Scale( -5, 5 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( t Distribution( q, Round( extqdf ) ), q );
		Pen Color( "blue" );
		V Line( t Quantile( extqqq, Round( extqdf ) ), 0, 1 );
		Text(
			{-4.5, 0.9},
			"df=",
			Round( extqdf, 2 ),
			" quantile=",
			Round( extqqq, 2 )
		);
	),
	H List Box(
		Slider Box( 1, 30, extqdf, extqgr << reshow ),
		Text Box( " df" )
	),
	H List Box(
		Slider Box( 0.01, 0.99, extqqq, extqgr << reshow ),
		Text Box( " quantile" )
	), 

);

```

### Subscribe to Data Table List

**Syntaxe :** aSub = Subscribe to Data Table List( &lt;subscriber name | ""&gt;, &lt;OnOpen(fn) | OnClose(fn) | On Rename(fn)&gt;)

**Description :** S’inscrire à la liste des tables de données pour recevoir la notification lors de l’ajout ou de la suppression d’une table de données.

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

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

{11, 12, 13}[2];

```

### Substitute

**Syntaxe :** y = Substitute( x, patternExpr1, replacementExpr1, ... )y = Substitute( x, patternString1, replacementString1, ..., &lt; &lt;&lt;IGNORECASE &gt; )

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

lst = {"a", "b", "c"};
Substitute( lst, "a", "A" );

```

**Exemple 4**

```jsl

Substitute( "All things considered",
	{"things", "All"}, {"ideas", "Some"}
);

```

**Exemple 5**

```jsl

Substitute( "Apple,orange,banana-grape",
	Items( Get Punctuation Characters() || "-'", "" ), " "
);

```

**Exemple 6**

```jsl

Substitute( "Apple,APPLE,apple", "apple", "orange", <<IGNORECASE );

```

### Substitute Into

**Syntaxe :** Substitute Into( x, patternExpr1, replacementExpr1, ... )Substitute Into( x, patternString1, replacementString1, ..., &lt; &lt;&lt;IGNORECASE &gt; )

**Description :** Modifie la chaîne, la liste ou l&apos;expression x, en remplaçant les instances de chaque expression de configuration par l&apos;expression de remplacement correspondante. Notez que l&apos;argument x doit être une variable. L&apos;argument facultatif <<IGNORECASE active la correspondance non sensible à la casse si x est une chaîne.

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

ex = Expr( a + Sqrt( a ) );
Substitute Into( ex, Expr( a ), Expr( b ) );
Name Expr( ex );

```

**Exemple 2**

```jsl

ex = "All things considered";
Substitute Into( ex, "All", "Some" );
Show( ex );

```

**Exemple 3**

```jsl

lst = {"a", "b", "c"};
Substitute Into( lst, "a", "A" );
Show( lst );

```

**Exemple 4**

```jsl

s = "Apple,APPLE,apple";
Substitute Into( s, "apple", "orange", <<IGNORECASE );
Show( s );

```

### Substr

**Syntaxe :** sub = Substr( s, start, &lt;count&gt; )

**Description :** Renvoie la partie de la chaîne s composée de count caractères en commençant par la position start. Un count négatif ou absent signifie le reste de la chaîne. Un start négatif signifie que les caractères de départ start sont considérés en partant de la fin. La fonction Substr() s’applique également aux listes.

**JMP Version ajoutée :** Avant la version 14

```jsl

Eval List(
	{Substr( "undergo", 4 ), Substr( {10, 11, 12, 13, 14}, 2, 3 )}
);

```

### Subtract

**Syntaxe :** y = x0 - x1; y = Subtract( x0, x1, ... )

**Description :** Soustrait tous les arguments consécutifs du premier argument. Les arguments peuvent être des nombres, des matrices ou des listes de nombres.

**JMP Version ajoutée :** Avant la version 14

```jsl

6 - 2 - 1;

```

### Subtract To

**Syntaxe :** y -= x; Subtract To( y, x )

**Description :** Soustrait une valeur d&apos;une variable ou d&apos;une liste de variables.

**JMP Version ajoutée :** Avant la version 14

```jsl

ex = 1;
ex -= 2;
ex;

```

### SuInv

**Syntaxe :** x = SuInv( z, gamma, delta, theta, sigma )

**Description :** Transforme une variable normale standard en une variable de Johnson non bornée.

**JMP Version ajoutée :** Avant la version 14

```jsl

SuInv( 1.96, 1.5, 2, 1, 2 );

```

### Sum

**Syntaxe :** y = Sum( x1, ... )

**Description :** Renvoie la somme des arguments ou des valeurs dans un argument unique de matrice ou de liste.

**JMP Version ajoutée :** Avant la version 14

```jsl

Eval List( {Sum( Pi(), e() ), Sum( [33 44 22 20 30] )} );

```

### Sum Of Years Digits Depreciation

**Syntaxe :** x = Sum Of Years Digits Depreciation( cost, salvage, life, per )

**Description :** Renvoie l’amortissement d’un capital sur une période donnée calculé selon la méthode « sum-of-years&apos; digits ». Équivalent à la fonction SYD de Microsoft Excel.

**JMP Version ajoutée :** Avant la version 14

```jsl

Sum Of Years Digits Depreciation( 1000, 100, 3, 2 );

```

### Summarize

**Syntaxe :** Summarize( &lt;dt&gt;, nameBy=By( colBy ), name1=statName1( col1 ), ... )

**Description :** Calcule différentes statistiques de résumé sur une colonne Par groupe. Les noms des statistiques sont Dénombrement, Somme, Moyenne, Max ou Maximum, Min ou Minimum, Écart-type, Corrélation, Quantile, Première. Les statistiques peuvent uniquement être calculées pour les colonnes numériques. Les résultats sont stockés sous forme de matrices dans des variables avec les noms spécifiés.

**JMP Version ajoutée :** Avant la version 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Summarize( exg = By( :sex ), exm = Mean( :height ) );
Eval List( {exg, Round( exm, 1 )} );

```

### Summarize YByX

**Syntaxe :** Summarize YByX( X(x columns),Y(y columns), Group(grouping columns), Freq(freq column), Weight(Weight column))

**Description :** Calcule toutes les combinaisons de la fonction Ajuster Y en fonction de X

**JMP Version ajoutée :** Avant la version 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Summarize YByX( X( :age, :height ), Y( :sex, :weight ) );

```

### Summation

**Syntaxe :** y = Summation( assignExpr, limit, bodyExpr )

**Description :** Renvoie la somme des évaluations de bodyExpr, en incrémentant à chaque fois la variable de assignExpr jusqu&apos;à ce quelle soit supérieure ou égale à la limite limit.

**JMP Version ajoutée :** Avant la version 14

```jsl

Summation( i = 0, 10, 1 / Factorial( i ) );

```

### Suppress Formula Eval

**Syntaxe :** Suppress Formula Eval( &lt;suppress=1&gt; )

**Description :** Supprime les évaluations de formules dans toutes les tables de données si l&apos;argument n&apos;est pas nul.

**JMP Version ajoutée :** Avant la version 14

```jsl

Suppress Formula Eval( 1 );

```

### SuTrans

**Syntaxe :** z = SuTrans( x, gamma, delta, theta, sigma )

**Description :** Transforme une variable de Johnson non bornée en une variable normale standard.

**JMP Version ajoutée :** Avant la version 14

```jsl

Round( SuTrans( 1.46, 1.5, 2, 1, 2 ), 2 );

```

### SVD

**Syntaxe :** {U, M, V} = SVD( X )

**Description :** Calcule la décomposition en valeurs singulières de la matrice X en retournant une liste {U, M, V} telle que U*diag(M)*V` est égal à X.

**JMP Version ajoutée :** Avant la version 14

```jsl

SVD( [11 22, 33 44] );

```

### SVD LAPACK

**Syntaxe :** {U, M, V} = SVD LAPACK( X )

**Description :** Calcule la décomposition en valeurs singulières de la matrice X en retournant une liste {U, M, V} telle que U*diag(M)*V` est égal à X.

**JMP Version ajoutée :** 17

```jsl

SVD LAPACK( [11 22, 33 44] );

```

### Sweep

**Syntaxe :** y = Sweep( A, &lt;indices&gt; )

**Description :** Renvoie le balayage de la matrice A sur les pivots de la diagonale indiqués par indices. Il s&apos;agit d&apos;une façon d&apos;inverser une matrice un pivot à la fois.

**JMP Version ajoutée :** Avant la version 14

```jsl

exMat = [5 4 1 1, 4 5 1 1, 1 1 4 2, 1 1 2 4];
exMatswp = Sweep( exMat, [1, 2, 3, 4] );
exMatinv = Inverse( exMat );
Show( exMatswp );
Show( exMatinv );

```

### Sym Matrix Mult BLAS

**Syntaxe :** y = Sym Matrix Mult BLAS( A, B, ... )

**Description :** Effectue une multiplication de matrices, où A est une matrice symétrique. Les arguments de la matrice doivent être conformes : NCol(A)==NRow(B).

**JMP Version ajoutée :** 17

```jsl

exMatA = [1 2 3, -2 0 -1, 0 1 1];
exMatA = exMatA` * exMatA;
exMatB = [1 2, 1 2, 1 2];
exMatM2 = Sym Matrix Mult BLAS( exMatA, exMatB );

```

### t Density

**Syntaxe :** p = t Density( q, df, &lt;nonCentrality=0&gt; )

**Description :** Renvoie la fonction de densité du t de Student.

**JMP Version ajoutée :** Avant la version 14

```jsl

tdedf = 1;
New Window( "Example: Students t Density",
	tdegr = Graph Box(
		Y Scale( -.05, 0.45 ),
		X Scale( -8, 8 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( t Density( tdeq, Exp( tdedf ) ), tdeq );
		H Line( 2, 3, 0.3 );
		Pen Color( "blue" );
		Y Function( Normal Density( tdeq ), tdeq );
		H Line( 2, 3, 0.25 );
		Text( {2, 0.35}, "df=", Round( Exp( tdedf ), 2 ) );
		Text( {3.5, 0.3}, "Student t" );
		Text( {3.5, 0.25}, "Normal" );
	),
	H List Box(
		Text Box( "df " ),
		Slider Box( Log( 0.1 ), Log( 1000 ), tdedf, tdegr << reshow )
	)
);

```

### t Distribution

**Syntaxe :** p = t Distribution( q, df, &lt;nonCentrality=0&gt; )

**Description :** Renvoie la probabilité qu&apos;une variable aléatoire distribuée selon Student est inférieure à q.

**JMP Version ajoutée :** Avant la version 14

```jsl

tdidf = 1;
New Window( "Example: Students t Distribution",
	tdigr = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( -5, 5 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( t Distribution( tdiq, tdidf ), tdiq );
		Text( {-4.5, 0.9}, "df=", Round( tdidf, 2 ) );
	),
	H List Box(
		Text Box( "df " ),
		Slider Box( 1, 10, tdidf, tdigr << reshow )
	)
);

```

### t Log CDistribution

**Syntaxe :** y = t Log CDistribution( x, df, &lt;nc&gt; )

**Description :** Renvoie le logarithme de la distribution 1-t.

**JMP Version ajoutée :** Avant la version 14

```jsl

tlcdidf = 1;
New Window( "Example: Students t Log CDistribution",
	tlcdigr = Graph Box(
		Y Scale( -4, 0.05 ),
		X Scale( -5, 5 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( t Log CDistribution( tlcdiq, tlcdidf ), tlcdiq );
		Text( {-4.5, -0.9}, "df=", Round( tlcdidf, 2 ) );
	),
	H List Box(
		Text Box( "df " ),
		Slider Box( 1, 10, tlcdidf, tlcdigr << reshow )
	)
);

```

### t Log Density

**Syntaxe :** y = t Log Density( x, df, &lt;nc&gt; )

**Description :** Renvoie le logarithme de la densité de probabilité t.

**JMP Version ajoutée :** Avant la version 14

```jsl

tldedf = 1;
New Window( "Example: Students t Log Density",
	tldegr = Graph Box(
		Y Scale( -4, 0.05 ),
		X Scale( -5, 5 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( t Log Density( tldeq, tldedf ), tldeq );
		Text( {2.5, -0.35}, "df=", Round( tldedf, 2 ) );
	),
	H List Box(
		Text Box( "df " ),
		Slider Box( 0.5, 10, tldedf, tldegr << reshow )
	)
);

```

### t Log Distribution

**Syntaxe :** y = t Log Distribution( x, df, &lt;nc&gt; )

**Description :** Renvoie le logarithme de la distribution t.

**JMP Version ajoutée :** Avant la version 14

```jsl

tldidf = 1;
New Window( "Example: Students t Log Distribution",
	tldigr = Graph Box(
		Y Scale( -4, 0.05 ),
		X Scale( -5, 5 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( t Log Distribution( tldiq, tldidf ), tldiq );
		Text( {-4.5, -0.9}, "df=", Round( tldidf, 2 ) );
	),
	H List Box(
		Text Box( "df " ),
		Slider Box( 1, 10, tldidf, tldigr << reshow )
	)
);

```

### t Noncentrality

**Syntaxe :** nc = t Noncentrality( x, df, prob )

**Description :** Résout le paramètre de non-centralité d’une distribution de Student, telle que prob = t Distribution( x, df, nc ).

**JMP Version ajoutée :** Avant la version 14

```jsl

New Window( "Example: t Noncentrality",
	tncgr = Graph Box(
		Y Scale( 0.01, 0.99 ),
		X Scale( 0.01, 0.99 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function(
			t Distribution( 3, 2, t Noncentrality( 3, 2, q ) ),
			q
		);
	)
);
t Distribution( 3, 2, t Noncentrality( 3, 2, 0.5 ) );

```

### t Quantile

**Syntaxe :** q = t Quantile( p, df, &lt;nonCentrality=0&gt; )

**Description :** Renvoie le quantile d’une distribution t de Student, correspondant à la probabilité p qu’une variable aléatoire ayant cette distribution prenne une valeur inférieure au quantile.

**JMP Version ajoutée :** Avant la version 14

```jsl

extqdf = 1;
extqqq = 0.5;
New Window( "Example: Students t Quantile",
	extqgr = Graph Box(
		Y Scale( 0, 1.05 ),
		X Scale( -5, 5 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( t Distribution( q, Round( extqdf ) ), q );
		Pen Color( "blue" );
		V Line( t Quantile( extqqq, Round( extqdf ) ), 0, 1 );
		Text(
			{-4.5, 0.9},
			"df=",
			Round( extqdf, 2 ),
			" quantile=",
			Round( extqqq, 2 )
		);
	),
	H List Box(
		Slider Box( 1, 30, extqdf, extqgr << reshow ),
		Text Box( " df" )
	),
	H List Box(
		Slider Box( 0.01, 0.99, extqqq, extqgr << reshow ),
		Text Box( " quantile" )
	), 

);

```

### Tab Box

**Syntaxe :** y = Tab Box( Tab Page Box(...), TabPageBox(...), ... )

**Description :** Crée un panneau de page tabulée dans une fenêtre Boîte d&apos;affichage.

**JMP Version ajoutée :** Avant la version 14

```jsl

New Window( "Example",
	Tab Box(
		"alpha",
		Panel Box( "panel", Text Box( "text" ) ),
		"beta",
		Popup Box( {"x", ex = 1, "y", ex = 2} )
	)
);

```

### Tab Page Box

**Syntaxe :** y = Tab Page Box( &lt;Title("string")&gt;, &lt;Tip(0|1)&gt;, &lt;Closeable(0|1)&gt;, &lt;Icon("string")&gt;, &lt;Moveable(0|1)&gt;, contents)

**Description :** Renvoie une boîte d&apos;affichage qui peut être utilisée dans une Tab Box ou comme conteneur autonome avec un titre. Les options reconnues incluent Title(chaîne) pour spécifier un titre, Tip(chaîne) pour spécifier une info-bulle, Closeable(0|1) pour spécifier si la page peut être fermée, Icon(chaîne) pour spécifier l&apos;icône, et Moveable(0|1) pour spécifier si la page peut être déplacée.

**JMP Version ajoutée :** Avant la version 14

```jsl

New Window( "Example",
	Tab Box(
		tp = Tab Page Box(
			Title( "alpha" ),
			Panel Box( "panel", Text Box( "text" ) )
		),
		Tab Page Box(
			Title( "beta" ),
			Popup Box( {"x", ex = 1, "y", ex = 2} )
		)
	)
);

```

### Table Box

**Syntaxe :** y = Table Box( displayBox, ... )

**Description :** Renvoie une boîte d&apos;affichage qui compose un tableau des boîtes d&apos;affichage des colonnes String Col Box, Number Col Box et Plot Col Box fournies par les arguments.

**JMP Version ajoutée :** Avant la version 14

```jsl

New Window( "Example",
	Outline Box( "Table",
		Table Box(
			String Col Box( "names", {"x", "y", "z"} ),
			Number Col Box( "values", {11, 22, 33} ),
			Plot Col Box( "values", {11, 22, 33} )
		)
	)
);

```

### Tan

**Syntaxe :** y = Tangent( x )

**Description :** Renvoie la tangente trigonométrique de x, où x est un angle en radians.

**JMP Version ajoutée :** Avant la version 14

```jsl

Tangent( Pi() / 4 );

```

### Tangent

**Syntaxe :** y = Tangent( x )

**Description :** Renvoie la tangente trigonométrique de x, où x est un angle en radians.

**JMP Version ajoutée :** Avant la version 14

```jsl

Tangent( Pi() / 4 );

```

### TanH

**Syntaxe :** y = TanH( x )

**Description :** Renvoie la tangente hyperbolique de x.

**JMP Version ajoutée :** Avant la version 14

```jsl

TanH( 1 );

```

### Test Promise Error After

**JMP Version ajoutée :** 17

### Test Promise Result After

**JMP Version ajoutée :** 17

### Text

**Syntaxe :** Text( &lt;properties&gt;, {x, y}, text, ... )Text( {left, top, right, bottom}, text )

**Description :** Se déplace vers la position {x, y} et écrit le texte spécifié par l&apos;argument text. Les arguments de propriété nommés sont : Center Justified, Right Justified, Erased, Boxed, Counterclockwise, Clockwise. Les arguments de position, les arguments nommés et les chaînes peuvent être mélangés dans un ordre quelconque. Vous pouvez aussi utiliser quatre coordonnées x, y pour décrire un boîte dans laquelle écrire le texte. Dans ce cas, les propriétés ne sont pas utilisées.

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

New Window( "Example",
	Graph Box(
		Text Color( "red" );
		Text( Center Justified, {50, 20}, "centered" );
	)
);

```

**Exemple 2**

```jsl

New Window( "Example",
	Graph Box(
		Text Color( "blue" );
		Text( {20, 80, 40, 70}, "some text" );
	)
);

```

### Text Box

**Syntaxe :** y = Text Box( text, &lt;&lt;Justify Text( strPos ), &lt;&lt;Set Wrap( width ) )

**Description :** Construit une boîte d&apos;affichage contenant le texte de la chaîne text. Les arguments facultatifs permettent de gérer la justification du texte ou de définir la largeur du retour chariot du texte. L’argument Justify Text doit être une chaîne contenant left, right ou center.

**JMP Version ajoutée :** Avant la version 14

```jsl

New Window( "Justification Example",
	Outline Box( "text",
		V List Box(
			Text Box(
				"Text implicitly justified over multiple lines:",
				<<Set Wrap( 100 )
			),
			Text Box( " " ),
			Text Box(
				"Text left justified over multiple lines:",
				<<Justify Text( "left" ),
				<<Set Wrap( 100 )
			),
			Text Box( " " ),
			Text Box(
				"Text center justified over multiple lines:",
				<<Justify Text( "center" ),
				<<Set Wrap( 100 )
			),
			Text Box( " " ),
			Text Box(
				"Text right justified over multiple lines:",
				<<Justify Text( "right" ),
				<<Set Wrap( 100 )
			)
		)
	)
);

```

### Text Color

**Syntaxe :** Text Color( &lt;name|index|rgbList&gt; )

**Description :** Définit la couleur pour le dessin du texte.

**JMP Version ajoutée :** Avant la version 14

```jsl

New Window( "Example",
	Graph Box(
		Text Color( "red" );
		Text( {50, 20}, "label" );
	)
);

```

### Text Edit Box

**Syntaxe :** y = Text Edit Box( text, &lt;&lt;Password Style( bool ), &lt;&lt;Set Script( script ), &lt;&lt;Set Width( value ) )

**Description :** Construit une boîte éditable qui contient le texte de la chaîne entre guillemets text, en retournant la référence de boîte d&apos;affichage. Les arguments facultatifs sont disponibles pour contrôler l&apos;affichage du texte, joindre un script à la boîte de texte et définir la largeur en pixels de la boîte de texte. En spécifiant Set Width(-1), vous forcez un redimensionnement du contenu. Notez qu’un script peut être joint à la boîte de texte en l’ajoutant en tant qu’argument facultatif ou en envoyant le message Set Script.

**JMP Version ajoutée :** Avant la version 14

```jsl

New Window( "Example: Text Edit Box",
	Outline Box( "Picker Example",
		H List Box(
			Text Box( "Label:" ),
			Text Edit Box( Char( 213 ) )
		)
	),
	Outline Box( "Text Edit Box with password style Example",
		H List Box(
			Text Box( "Enter password:    " ),
			exq = Text Edit Box( "",
				Password Style( 1 ),
				Set Script( Print( "changed!" ) )
			)
		),
		Button Box( "print to log",
			Set Script( Print( exq << Get Text() ) )
		),
		Button Box( "hide password",
			Set Script( exq << Password Style( 1 ) )
		),
		Button Box( "show password",
			Set Script( exq << Password Style( 0 ) )
		)
	)
); // "look in the log window"

```

### Text Font

**Syntaxe :** {nm, sz, st, an} = Text Font(fontName, &lt;size&gt;, &lt;"bold italic underline strikeout"&gt;, &lt;angle&gt;

**Description :** Définit la police pour le dessin Text() consécutif. N&apos;utiliser aucun argument pour obtenir les paramètres de police actuels. L&apos;angle est défini en degrés, dans le sens des aiguilles d&apos;une montre.

**JMP Version ajoutée :** 15

```jsl

New Window( "Degrees",
	Graph Box(
		FrameSize( 400, 400 ),
		X Scale( -100, 100 ),
		Y Scale( -100, 100 ),
		Local( {fname, fsize, fstyle, fangle, i, a},
			{fname, fsize, fstyle, fangle} = Text Font();
			Text Font(
				If( Host is( "Mac" ),
					"Helvetica",
					"Arial"
				),
				30,
				"Italic Bold"
			);
			Text( Center Justified, {0, -10}, "JMP" );
			For( i = 0, i < 360, i += 15,
				Text Font( {fname, 10, "plain", -i + 90} );
				a = i * Pi() / 180;
				Text(
					Center Justified,
					{80 * Cos( a ), 80 * Sin( a )},
					Char( i )
				);
				Line(
					{70 * Cos( a ), 70 * Sin( a )},
					{76 * Cos( a ), 76 * Sin( a )}
				);
			);
		)
	)
);

```

### Text Score

**Syntaxe :** score vector = Text Score( text column, text-to-number, &lt;weighting&gt;, &lt;{&lt;center&gt;, &lt;scale&gt;, scoring matrix}&gt;);

**Description :** Utilisé pour créer des formules de calcul du score dans l&apos;explorateur de texte. L&apos;argument text-to-number est un tableau associatif représentant les mots en minuscules par rapport aux nombres. L&apos;argument de pondération est "Binary", "Ternary", "Count", "LogCount", "LCA" ou un tableau des pondérations de la fréquence inverse de document pour TFLogIDF. La matrice de scores doit avoir le même nombre de colonnes que les mots du tableau associatif, ou une de plus si LCA. La sortie est un vecteur de scores. Si aucune matrice de scores n&apos;est spécifiée, un vecteur de scores de dénombrement est renvoyé. Si aucune pondération n&apos;est spécifiée, le dénombrement est utilisé. Cette fonction ne prend pas en charge l&apos;option Indexer par radicaux pour combiner.

**JMP Version ajoutée :** Avant la version 14

```jsl

score = Text Score(
	"over the lazy dogs back",
	["lazy" => 1, "dogs" => 2],
	"Count",
	[1 0, 0 1]
);
Show( score );

```

### Text Seg

**Syntaxe :** seg = Text Seg("text")

**JMP Version ajoutée :** 17

```jsl

w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg(
	ts1 = Text Seg( "default location fixed bottom left" )
);

```

### Text Size

**Syntaxe :** Text Size( n )

**Description :** Définit la taille de la police pour le dessin du texte.

**JMP Version ajoutée :** Avant la version 14

```jsl

New Window( "Example",
	Graph Box(
		Text Size( 20 );
		Text( {50, 20}, "label" );
	)
);

```

### This Project

**Syntaxe :** project = this project()

**Description :** Dans un projet, renvoie l&apos;objet de projet correspondant. En dehors d&apos;un projet ne renvoie rien.

**JMP Version ajoutée :** 14

```jsl

If(
	Is Empty( This Project() ), Print( "Project: (none)" ),
	Print( "Project: " || (This Project() << Get Window Title()) ),
);

```

### Throw

**Syntaxe :** Throw(&lt;message&gt;, &lt;Boolean&gt;)

**Description :** Dévie l&apos;exécution vers le Try() englobant. Sinon, l&apos;exécution du script est arrêtée. Si message commence par un point d&apos;exclamation, l&apos;erreur est fatale et ne peut pas être interceptée par Try(). Le deuxième argument est un booléen facultatif pour inclure un retraçage.

**JMP Version ajoutée :** Avant la version 14

**Fatal Throw**

```jsl


Try(
	Throw( "!This is a fatal error" ),
	Print( "CATCH message not reached" )
);
Print( "AFTER TRY message not reached" );

```

**Retraçage**

```jsl

Throw( "A line number is included in this error", 1 );

```

**Try-Catch**

```jsl

Try( If( Random Uniform() < 0.5, 1, Throw() ), "thrown" );

```

### Tick Seconds

**Syntaxe :** t = Tick Seconds()

**Description :** Renvoie une valeur de temps en secondes, avec généralement une précision d&apos;au moins 1/60 de seconde (une "graduation"), en fonction de l&apos;ordinateur. Seulement utile en relation avec une autre valeur Tick Seconds().

**JMP Version ajoutée :** Avant la version 14

```jsl

t1 = Tick Seconds();
Open( "$SAMPLE_DATA/Big Class.jmp" );
t2 = Tick Seconds();
Round( t2 - t1, 3 );

```

### Time Of Day

**Syntaxe :** sec = Time Of Day( datetime )

**Description :** Renvoie l&apos;heure d&apos;une valeur « date-heure » de JMP, y compris la partie fractionnelle.

**JMP Version ajoutée :** Avant la version 14

```jsl

Format( Time Of Day( Today() ), "h:m:s" );

```

### Titlecase

**Syntaxe :** st = Titlecase( s )

**Description :** Convertit en casse de titre

**JMP Version ajoutée :** Avant la version 14

```jsl

Titlecase( "The dog crossed the road" );

```

### To Color Space

**Syntaxe :** color = To Color Space( color, colorSpace )

**Description :** Traduit une couleur dans un autre espace de couleur. Les couleurs non imprimables sont mappées pour l&apos;ajustement lors de la conversion en espaces de couleur plus petits.

**JMP Version ajoutée :** 18

**Exemple 1**

```jsl

To Color Space( "red", "LMS" );

```

**Exemple 2**

```jsl

To Color Space( {0.871, 0.032, 0.061, "lRGB"}, "HLS" );

```

**Exemple 3**

```jsl

To Color Space(
	{0.941, 0.196, 0.274, "lRGB", 0.871, 0.032, 0.061},
	"HLS"
);

```

### Today

**Syntaxe :** dt = Today()

**Description :** Renvoie la date et l&apos;heure du moment présent.

**JMP Version ajoutée :** Avant la version 14

```jsl

As Date( Today() );

```

### Trace

**Syntaxe :** y = Trace( x )

**Description :** Renvoie la somme des éléments diagonaux d&apos;une matrice carrée.

**JMP Version ajoutée :** Avant la version 14

```jsl

Trace( [11 22, 33 44] );

```

### Transform Each

**Syntaxe :** list = Transform Each({&lt;value&gt;, &lt;index&gt;} | {&lt;element&gt;, &lt;index | {row, col}&gt;} | {&lt;key | {key, value}&gt;, &lt;index&gt;} | {&lt;values | {value1, ..., valueN}&gt;, &lt;index&gt;}, list | matrix | associative array | expression | Across( container1, ..., &lt;containerN&gt;, &lt;Count( "Longest" | "Shortest" | "Enforce Equal" | n )&gt; ), &lt;Output( "List" | "Matrix" | "Associative Array" | "Expression", &lt;expr head name&gt; )&gt;, &lt;locals list&gt;, body)

**Description :** Identique à la fonction For Each, mais renvoie également un conteneur du résultat à chaque itération. Par défaut, renvoie un conteneur correspondant au type du conteneur d&apos;entrée, ce qui peut être changé avec l&apos;argument Output. Pour la sortie de liste ou d&apos;expression, Empty() sera utilisé lorsqu&apos;aucun résultat n&apos;est renvoyé. Pour la sortie de matrice, une valeur numérique manquante est utilisée lorsqu&apos;aucun résultat n&apos;est renvoyé, ou si le résultat n&apos;est pas numérique. Pour la sortie de tableau associatif, il n&apos;y aura pas de clé lorsqu&apos;aucun résultat n&apos;est renvoyé. Si Continue() est utilisé, cela revient à ne renvoyer aucune valeur pour cette itération.

**JMP Version ajoutée :** 16

**Associative Array**

```jsl

values = Transform Each( {{key, value}},
	["A" => 8, "B" => 6, "C" => 10],
	value + 1
);
Show( values );

```

**Expression 1**

```jsl

ex = Transform Each( {value}, Expr( MyExpr( 10, 20, 30 ) ), value + 1 );
Show( ex );

```

**Expression 2**

```jsl

// Find Functions defined in a script
parsedScript = Include(
	"$SAMPLE_SCRIPTS/BayesPlotForFactors.jsl",
	<<ParseOnly
);
functionNames = Transform Each( {statement}, Name Expr( parsedScript ),
	Output( "List" ), {lhs, rhs},
	If( Head( statement ) == Expr( Assign() ),
		rhs = Arg( statement, 2 );
		If( !Is Empty( rhs ) & Contains( {Function()}, Head( rhs ) ),
			Head Name( Arg( statement, 1 ) ),
			Empty()
		);
	,
		Empty()
	)
);
functionNames = Filter Each( {f}, functionNames, !Is Empty( f ) );
Show( functionNames );

```

**List**

```jsl

values = Transform Each( {value}, {10, 20, 30}, value + 5 );
Show( values );

```

**Matrix**

```jsl

values = Transform Each( {element}, 10 :: 15, element + 5 );
Show( values );

```

**Output**

```jsl


Write( "\!N===List===" );
lst = Transform Each( {value}, [10, 20, 30], Output( "List" ),
	value + 1
);
Show( lst );

Write( "\!N===Matrix===" );
mat = Transform Each( {value}, {10, 20, 30}, Output( "Matrix" ),
	value + 1
);
Show( mat );

Write( "\!N===Associative Array===" );
aa = Transform Each( {value}, {10, 20, 30},
	Output( "Associative Array" ),
	value + 1
);
Show( aa );

Write( "\!N===Expression===" );
ex = Transform Each( {value}, {10, 20, 30},
	Output( "Expression", "My Values" ),
	value + 1
);
Show( ex );

```

### Transparency

**Syntaxe :** Transparency( &lt;alpha&gt; )

**Description :** Définit la transparence utilisée dans les commandes de dessin. Alpha s&apos;étend de 0 (transparent) à 1 (opaque, valeur par défaut). Certains systèmes d&apos;exploitation ne le prennent pas en charge.

**JMP Version ajoutée :** Avant la version 14

```jsl

New Window( "Example",
	Graph Box(
		Frame Size( 500, 500 ),
		X Scale( -3, 3 ),
		Y Scale( -3, 3 ),
		Transparency( .1 );
		Fill Color( RGB Color( 1/*red*/, 0/*green*/, 0/*blue*/ ) );
		For( i = 0, i < 10000, i++,
			Circle( {Random Normal(), Random Normal()}, 0.05, "FILL" )
		);
	)
);

```

### Transpose

**Syntaxe :** y = Transpose( matrix ); y = matrix`

**Description :** Transpose l&apos;argument d&apos;une matrice en interchangeant les lignes et les colonnes.

**JMP Version ajoutée :** Avant la version 14

```jsl

Show( Transpose( [11 22, 33 44] ), [11 22, 33 44]` );

```

### Tree Box

**Syntaxe :** tree = Tree Box( &lt;{rootnodes}&gt;, &lt;Size( x, y )&gt;, &lt;Multiselect( 0|1 )&gt; )

**Description :** Construit une boîte d’affichage pour afficher les informations hiérarchiques.

**JMP Version ajoutée :** Avant la version 14

```jsl

root1 = Tree Node( "Parent 1" );
root2 = Tree Node( "Parent 2" );
                                        
c1 = Tree Node( "Child 1" );
c2 = Tree Node( "Child 2" );
c3 = Tree Node( "Child 3" );
c4 = Tree Node( "Child 4" );
                                        
root1 << Append( c1 );
root1 << Append( c2 );
root2 << Append( c3 );
root2 << Append( c4 );
                                        
New Window( "TreeBox",
	tree = Tree Box( {root1, root2}, Size( 300, 200 ) )
);

```

### Tree Node

**Syntaxe :** node = Tree Node( &lt;label&gt; )

**Description :** Construit un nœud d’arborescence destiné à l’affichage dans une boîte d’arborescence.

**JMP Version ajoutée :** Avant la version 14

```jsl

root1 = Tree Node( "Parent 1" );
root2 = Tree Node( "Parent 2" );
                                        
c1 = Tree Node( "Child 1" );
c2 = Tree Node( "Child 2" );
c3 = Tree Node( "Child 3" );
c4 = Tree Node( "Child 4" );
                                        
root1 << Append( c1 );
root1 << Append( c2 );
root2 << Append( c3 );
root2 << Append( c4 );
                                        
New Window( "TreeBox Nodes",
	tree = Tree Box( {root1, root2}, Size( 300, 200 ) )
);

```

### Triangulation

**Syntaxe :** triangulation = Triangulation( X(Column1, Column2), &lt; Y(Column) &gt; )

**Description :** Renvoie un objet contenant la triangulation de Delaunay de l&apos;ensemble de points donné. La moyenne de la valeur de Y (en option) est calculée pour les points dupliqués, et tous les points de la sortie sont uniques.

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
tri = Triangulation( X( :X, :Y ), Y( :POP ) );

```

**Exemple 2**

```jsl

tri = Triangulation( X( [0 0 1 1], [0 1 0 1] ), Y( [0 1 2 3] ) );

```

### Trigamma

**Syntaxe :** y = Trigamma( x )

**Description :** Renvoie la fonction trigamma évaluée à x, où la fonction trigamma est la dérivée de la fonction digamma.

**JMP Version ajoutée :** Avant la version 14

```jsl

Trigamma( 5 );

```

### Trim

**Syntaxe :** sub = Trim( s, &lt;left|right|both&gt; )

**Description :** Renvoie une copie de la chaîne s en supprimant les espaces au début et à la fin. Le deuxième argument indique si la suppression concerne les espaces au début ou à la fin de la chaîne. Si vous ne spécifiez pas le deuxième argument, les espaces sont éliminés au début et à la fin.

**JMP Version ajoutée :** Avant la version 14

```jsl

Trim( " title   ", both );

```

### Trim Whitespace

**Syntaxe :** sub = Trim Whitespace( s, &lt;left|right|both&gt; )

**Description :** Renvoie une copie de la chaîne s en supprimant les espaces au début et à la fin. Le deuxième argument indique si la suppression concerne les espaces au début ou à la fin de la chaîne. Si vous ne spécifiez pas le deuxième argument, les espaces sont éliminés au début et à la fin.

**JMP Version ajoutée :** Avant la version 14

```jsl

Trim Whitespace( "  The  dog    crossed    the  road  " );

```

### TripleS Import

**Syntaxe :** TripleSImport( &lt;path to xml file&gt; )

**Description :** Ouvre les fichiers Triple-S. Le format Triple-S contient un fichier xml ou sss et un fichier csv ou un fichier dat/asc. Les deux fichiers doivent porter le même nom, l&apos;extension appropriée, et doivent se trouver dans le même répertoire. Spécifier le chemin d&apos;accès xml ou sss pour importer les données.

**JMP Version ajoutée :** Avant la version 14

```jsl

TripleS Import(); //To get a file dialog to select the XML file
TripleS Import( "c:/MyFile.xml" ); //To open the Triple-S MyFile

```

### Try

**Syntaxe :** y = Try( expr, &lt;catchExpr&gt; )

**Description :** Évalue et renvoie l&apos;argument expr, à moins que l&apos;évaluation ne provoque un Throw() ou une exception interne. Dans ce cas l&apos;évaluation de catchExpr est renvoyée. Si vous utilisez exception_msg en tant que catchExpr, une liste est renvoyée indiquant des informations supplémentaires sur l&apos;erreur.

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

Try( Sqrt( "s" ), "invalid" );

```

**Exemple 2**

```jsl

Try( Sqrt( "s" ), exception_msg );

```

### Tukey HSD P value

**Syntaxe :** p = Tukey HSD P value( q, nGroups, dfe )

**Description :** Renvoie la p-value du test des comparaisons multiples HSD de Tukey, où q est la statistique de test, nGroups est le nombre de groupes de l’étude et dfe est le degré de liberté de l’erreur (compte tenu de l’échantillon total de l’étude).



Notez que q est la valeur critique ajustée de Tukey, qui est le quantile de la distribution de l&apos;étendue studentisée de Tukey divisé par racine(2).

**JMP Version ajoutée :** Avant la version 14

```jsl

Tukey HSD P value( 3.73, 6, 34 );

```

### Tukey HSD Quantile

**Syntaxe :** q = Tukey HSD Quantile( 1-alpha, nGroups, dfe )

**Description :** Renvoie le quantile nécessaire pour le test des comparaisons multiples HSD de Tukey, où 1-alpha est le niveau de confiance, nGroups est le nombre de groupes de l’étude, et dfe est le degré de liberté de l’erreur (compte tenu de l’échantillon total de l’étude).



Notez que q est la valeur critique ajustée de Tukey, qui est le quantile de la distribution de l&apos;étendue studentisée de Tukey divisé par racine(2).

**JMP Version ajoutée :** Avant la version 14

```jsl

alpha = 0.05;
dfe = 5;
Tukey HSD Quantile( 1 - alpha, 20, dfe );
New Window( "Example: Tukey HSD Quantile",
	tdigr = Graph Box(
		Y Scale( 2, 8 ),
		X Scale( 2.5, 15.5 ),
		YName( "Tukey HSD Quantile" ),
		XName( "Groups" ),
		Pen Color( "red" );
		For( i = 3, i <= 15, i++,
			V Line( i, 0, Tukey HSD Quantile( 1 - alpha, i, dfe ) )
		);
		Text( {3, 7}, "dfe=", Round( dfe, 2 ) );
	),
	H List Box(
		Text Box( "dfe" ),
		Slider Box( 3, 10, dfe, tdigr << reshow )
	)
);

```

### Type

**Syntaxe :** y = Type( x )

**Description :** Renvoie une chaîne indiquant le type de valeur de l’argument x.

**JMP Version ajoutée :** Avant la version 14

```jsl

Type( [1 2 3] );

```

### Unit Test

**JMP Version ajoutée :** Avant la version 14

### Unlineup Box

**Syntaxe :** y = UnLineup Box(displayBoxArgs, ... )

**Description :** Renvoie une boîte d&apos;affichage qui suspend temporairement la mise en page de colonne d&apos;une boîte d&apos;alignement. L&apos;enfant d&apos;une boîte de désalignement sera étendu pour couvrir toutes les colonnes de la boîte d&apos;alignement.

**JMP Version ajoutée :** 16

```jsl

New Window( "unlineup",
	Lineup Box( N Col( 2 ),
		Unlineup Box(
			Text Box( "First Section", <<Justify Text( "Center" ) )
		),
		Button Box( "First Section 1" ),
		Button Box( "First Section 2" ),
		Unlineup Box(
			Text Box( "Second Section", <<Justify Text( "Center" ) )
		),
		Button Box( "Second Section 1" ),
		Button Box( "Second Section 2" )
	)
);

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

### Unregister Addin

**Syntaxe :** Unregister Addin( uniqueId)

**Description :** Annule l’enregistrement d’un complément

**JMP Version ajoutée :** Avant la version 14

```jsl

Unregister Addin( "com.mycompany.myaddin" );

```

### Unsubscribe to Data Table List

**Syntaxe :** aSub = Unsubscribe to Data Table List(&lt;subscriber name&gt;, &lt;"OnOpen" | "OnClose" | "OnRename" | "ALL"&gt;)

**Description :** Supprimer une inscription à la liste des tables de données si ajoutée à l’aide de la commande "s’inscrire à la liste des tables de données".

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

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

### Uppercase

**Syntaxe :** su = Uppercase( s )

**Description :** Convertit les lettres minuscules en lettres majuscules dans la chaîne spécifiée. Les règles sur la casse varient localement.

**JMP Version ajoutée :** Avant la version 14

```jsl

Uppercase( "Café #23" );

```

### V Center Box

**Syntaxe :** y = V Center Box( &lt;childbox&gt; )

**Description :** Renvoie une boîte d&apos;affichage contenant l&apos;argument boîte d&apos;affichage childbox centré sur l&apos;espace vertical défini par la taille maximale de cette boîte enfant et de toutes les boîtes sœurs de la boîte centrale.

**JMP Version ajoutée :** Avant la version 14

```jsl

New Window( "test",
	H List Box(
		V Center Box( Text Box( "V+V" ) ),
		V List Box(
			Text Box( "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm" ),
			H Center Box( Text Box( "H+H" ) ),
			Text Box( "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm" ),
			Text Box( "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm" ),
			Text Box( "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm" ),
			Text Box( "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm" )
		)
	)
);

```

### V Concat

**Syntaxe :** y = a |/ b; y = V Concat( a, b, ... )

**Description :** Concatène les matrices verticalement. Les arguments doivent avoir le même nombre de colonnes.

**JMP Version ajoutée :** Avant la version 14

```jsl

[11 22] |/ [33 44];

```

### V Concat To

**Syntaxe :** matrix1 |/= matrix2; V Concat To( matrix1, matrix2 )

**Description :** Concatène sur place, verticalement. a |/= b est équivalent à a = a |/ b. Il s&apos;agit d&apos;un opérateur d&apos;affectation.

**JMP Version ajoutée :** Avant la version 14

```jsl

exA = [1 2, 3 4];
exB = [5 6, 7 8, 9 10];
exC = [1, 1, 1, 1, 1];
exD = V Concat To( exA, exB );
exE = Concat( exD, exC );
/* exA is changed and exD is not. */
Show( exA, exB, exC, exD, exE );
/* Also see ConcatTo(), VConcat() */

```

### V Line

**Syntaxe :** V Line( x ); V Line( x, y1, y2 )

**Description :** Dessine une droite verticale sur x, de y1 à y2 ou traversant tout le cadre.

**JMP Version ajoutée :** Avant la version 14

```jsl

New Window( "Example",
	Graph Box(
		Pen Size( 2 );
		V Line( 20, 10, 50 );
	)
);

```

### V List Box

**Syntaxe :** y = V List Box( &lt;Align( center|right )&gt;, displayBox, ... )

**Description :** Renvoie une boîte d&apos;affichage qui réorganise les boîtes d&apos;affichage fournies par les arguments dans une mise en page verticale. Le message <<Hold demande à la feuille de conserver le(s) rapport(s) qui seront extraits. L’argument optionnel Align permet d’aligner à right ou au center le contenu de la boîte d’affichage.

**JMP Version ajoutée :** Avant la version 14

```jsl

New Window( "Example",
	Outline Box( "Picker",
		V List Box(
			Text Box( "Label:" ),
			Text Edit Box( Char( 213 ) )
		)
	)
);

```

### V Max

**Syntaxe :** b = V Max( matrix )

**Description :** Renvoie un vecteur ligne contenant le maximum de chaque colonne dans l&apos;argument.

**JMP Version ajoutée :** Avant la version 14

```jsl

V Max( [11 22, 33 44, 55 66] );

```

### V Mean

**Syntaxe :** m = V Mean( matrix )

**Description :** Renvoie un vecteur ligne contenant la moyenne de chaque colonne dans l&apos;argument.

**JMP Version ajoutée :** Avant la version 14

```jsl

V Mean( [11 22, 33 44, 55 66] );

```

### V Median

**Syntaxe :** m = V Median( matrix )

**Description :** Renvoie un vecteur ligne contenant la médiane de chaque colonne dans l&apos;argument.

**JMP Version ajoutée :** 15

```jsl

V Median( [11 22, 33 44, 35 46, 55 66] );

```

### V Min

**Syntaxe :** a = V Min( matrix )

**Description :** Renvoie un vecteur ligne contenant le minimum de chaque colonne dans l&apos;argument.

**JMP Version ajoutée :** Avant la version 14

```jsl

V Min( [11 22, 33 44, 55 66] );

```

### V Quantile

**Syntaxe :** m = V Quantile( matrix, p )

**Description :** Renvoie un vecteur ligne contenant le quantile p spécifié de chaque colonne dans l&apos;argument.

**JMP Version ajoutée :** 15

```jsl

V Quantile( [11 22, 33 44, 35 46, 55 66], .25 );

```

### V Robust Standardize

**Syntaxe :** b = V Robust Standardize( X, &lt;center=1&gt;, &lt;scale=1&gt; )

**Description :** Renvoie une matrice centrée par la médiane et réduite par une estimation robuste de l&apos;écart-type de la matrice X. Les arguments booléens facultatifs spécifient si le centrage et la réduction sont effectués.

**JMP Version ajoutée :** 17

```jsl

V Robust Standardize( J( 150, 4, Random Normal() ), 1, 1 );

```

### V Scroll Box

**Syntaxe :** y = V Scroll Box( &lt;Size( y )&gt;, displayBox )

**Description :** Renvoie une boîte d’affichage qui positionne une boîte enfant plus grande avec une barre de défilement verticale.

**JMP Version ajoutée :** Avant la version 14

```jsl

New Window( "Example",
	Outline Box( "Picker",
		V Scroll Box(
			Size( 100 ),
			V List Box(
				H List Box(
					Text Box( "Label:" ),
					Text Edit Box( Char( 213 ) )
				),
				H List Box(
					Text Box( "Label:" ),
					Text Edit Box( Char( 213 ) )
				),
				H List Box(
					Text Box( "Label:" ),
					Text Edit Box( Char( 213 ) )
				),
				H List Box(
					Text Box( "Label:" ),
					Text Edit Box( Char( 213 ) )
				),
				H List Box(
					Text Box( "Label:" ),
					Text Edit Box( Char( 213 ) )
				),
				H List Box(
					Text Box( "Label:" ),
					Text Edit Box( Char( 213 ) )
				),
				H List Box(
					Text Box( "Label:" ),
					Text Edit Box( Char( 213 ) )
				)
			),
			<<Set Stretch( "Window", "Window" )
		)
	)
);

```

### V Sheet Box

**Syntaxe :** y = V Sheet Box( &lt;&lt;Hold( rpt ), displayBox, ... )

**Description :** Renvoie une boîte d&apos;affichage qui réorganise les boîtes d&apos;affichage fournies par les arguments dans une mise en page verticale. Le message <<Hold demande à la feuille de conserver le(s) rapport(s) qui seront extraits. L’argument optionnel Align permet d’aligner à right ou au center le contenu de la boîte d’affichage.

**JMP Version ajoutée :** Avant la version 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Example",
	V Sheet Box(
		<<Hold( Bivariate( Y( :weight ), X( :height ), Fit Line() ) ),
		<<Hold(
			Distribution(
				Automatic Recalc( 1 ),
				Continuous Distribution(
					Column( :height ),
					Horizontal Layout( 1 ),
					Vertical( 0 ),
					Outlier Box Plot( 0 )
				)
			)
		),
		<<Hold( Treemap( Categories( :age ) ) ),
		<<Hold(
			Bubble Plot(
				X( :height ),
				Y( :weight ),
				Sizes( :age ),
				Coloring( :sex ),
				Circle Size( 6.226 ),
				All Labels( 0 )
			)
		),
		H Sheet Box(
			Sheet Part(
				"weight by height",
				Excerpt Box( 1, {Picture Box( 1 )} )
			),
			Sheet Part(
				"height",
				Excerpt Box( 2, {Picture Box( 1 )} )
			)
		),
		H Sheet Box(
			Sheet Part( "", Excerpt Box( 3, {Picture Box( 1 )} ) ),
			Sheet Part(
				"height by weight",
				Excerpt Box( 4, {Picture Box( 1 )} )
			)
		)
	)
);

```

### V Size

**Syntaxe :** v = V Size()

**Description :** Renvoie la taille verticale du cadre des graphiques en pixels.

**JMP Version ajoutée :** Avant la version 14

```jsl

New Window( "Example",
	Graph Box(
		Text Size( V Size() / 4 );
		Text( {50, 20}, "label" );
	)
);

```

### V Splitter Box

**Syntaxe :** y = V Splitter Box( &lt;Size(x,y)&gt;, displayBox, ... )

**Description :** Renvoie une boîte d&apos;affichage qui permet d&apos;organiser d&apos;autres boîtes d&apos;affichage verticalement, avec un contrôle interactif des tailles. Les tailles enfant sont spécifiées sous la forme d&apos;une proportion de la largeur ou de la hauteur de la Splitter Box. L&apos;argument facultatif Size n&apos;est utilisé que pour la Splitter Box de premier niveau ; les boîtes de niveau inférieur sont dimensionnées comme toute autre boîte enfant.

**JMP Version ajoutée :** Avant la version 14

```jsl

New Window( "Splitter",
	V Splitter Box(
		Size( 800, 600 ),
		H Splitter Box(
			graph = Graph Box(),
			Script Box(),
			<<Sizes( {0.6, 0.4} )
		),
		H Splitter Box(
			pict = Picture Box(
				Open( "$SAMPLE_IMAGES/tile.jpg", jpg )
			),
			spacer = Spacer Box(),
			<<Sizes( {0.4, 0.6} )
		)
	)
);
graph[FrameBox( 1 )] << Set Stretch( "Window", "Window" );
pict << Set Min Size( 100, 100 );
pict << Set Max Size( 500, 500 );
pict << Set Stretch( "Window", "Window" );
spacer << Set Fill( 1 );
spacer << Color( "Red" );
spacer << Set Stretch( "Window", "Window" );

```

### V Standardize

**Syntaxe :** b = V Standardize( X )

**Description :** Renvoie une matrice qui est la version centrée et réduite de la matrice X. Chaque colonne de b a une moyenne de 0 et un écart-type de 1.

**JMP Version ajoutée :** Avant la version 14

```jsl

V Standardize( [11 22, 33 44, 55 66] );

```

### V Std

**Syntaxe :** b = V Std( matrix )

**Description :** Renvoie un vecteur ligne contenant les écarts-types de chaque colonne dans l&apos;argument.

**JMP Version ajoutée :** Avant la version 14

```jsl

V Std( [11 22, 33 44, 55 66] );

```

### V Sum

**Syntaxe :** s = V Sum( matrix )

**Description :** Renvoie un vecteur ligne contenant la somme de chaque colonne dans l&apos;argument.

**JMP Version ajoutée :** Avant la version 14

```jsl

V Sum( [11 22, 33 44, 55 66] );

```

### Varimax

**Syntaxe :** {R,T} = Varimax( F, &lt;norm=1&gt; )

**Description :** Effectue une rotation Varimax de la matrice F spécifiée. Renvoie une liste qui contient la matrice pivotée et la matrice de rotation orthogonale. Par défaut, une rotation Varimax normalisée est effectuée. Spécifier norm = 0 pour effectuer une rotation Varimax non normalisée.

**JMP Version ajoutée :** Avant la version 14

```jsl

Varimax( [1.2 .4, .9 1.5] );

```

### Vec Diag

**Syntaxe :** y = Vec Diag( x )

**Description :** Renvoie les éléments diagonaux de la matrice carrée comme un vecteur.

**JMP Version ajoutée :** Avant la version 14

```jsl

Vec Diag( [11 22, 33 44] );

```

### Vec Quadratic

**Syntaxe :** Vec Quadratic( S, X )

**Description :** Évalue comme Vec Diag( X * S * X` ).

**JMP Version ajoutée :** Avant la version 14

```jsl

exS = [1 3 5, 3 2 6, 5 6 1];
exX = [1 3 5, 2 4 6];
Vec Quadratic( exS, exX );

```

### VPTree

**Syntaxe :** tab = VPTree( [ matrix ] )

**Description :** Renvoie une table de données permettant de chercher efficacement les proches voisins. Les arguments de la matrice sont des points d’un espace k-dimensionnel. Il n&apos;existe aucune limite au nombre de dimensions ou de points.

**JMP Version ajoutée :** 16

```jsl

tab = VPTree( [1 1 1, 1 2 1, 1 2 2, 2 2 2, 3 3 3, 4 5 6] );
{rows, dist} = tab << K nearest rows( 2, [1.1 .9 1] );
"2 nearest rows to [1.1 .9 1] are " || Char( rows );

```

### Wait

**Syntaxe :** Wait( &lt;x&gt; )

**Description :** Attend x secondes avant de continuer l&apos;exécution. La valeur par défaut de x est 3 secondes. Si x est supérieur ou égal à 0, JMP terminera les événements du système d&apos;exploitation (par ex. dessiner à l&apos;écran) ainsi que les rappels en attente éventuels (par ex. l&apos;évaluation d&apos;une formule) en plus de l&apos;attente. Si x est inférieur à 0, seul le dessin à l&apos;écran et les événements en attente de l’OS sont confirmés comme terminés avant de continuer.

**JMP Version ajoutée :** Avant la version 14

**Événements OS**

```jsl

Wait( -1 ); // Wait for OS events

```

**Rappels**

```jsl

Wait( 0 ); // Wait for OS events and callbacks

```

**Simple**

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

### Wavelet Basis Coef

**Syntaxe :** y = Wavelet Basis Coef( x, grid, coef, &lt;wavelet = "Haar" or "Biorthogonal" or "Coiflet" or "Daubechies" or "Symlet"&gt;, &lt;param = 0&gt; )

**Description :** Renvoie la prévision aux points x pour le modèle Ondelettes spécifié. Le paramètre grid est un vecteur qui spécifie la grille de données pour le modèle Ondelettes. Le paramètre coef est un vecteur des coefficients d&apos;ondelette. Le paramètre wavelet est le nom du modèle Ondelettes. Le paramètre param facultatif est le paramètre du modèle Ondelettes (si nécessaire, 0 par défaut).

**JMP Version ajoutée :** 17

```jsl

Wavelet Basis Coef( 2.5, [1, 2, 3, 4], [0, 1, 2, 3], "Haar" );

```

### Web

**Syntaxe :** Web( string, &lt;JMP Window&gt; )

**Description :** Ouvre l&apos;URL ou un fichier stocké dans string dans le navigateur web par défaut. Le deuxième argument facultatif permet de spécifier qu’un fichier HTML s’ouvre dans une fenêtre du navigateur JMP.

**JMP Version ajoutée :** Avant la version 14

**Gestionnaire d'événements**

```jsl

//Making a clickable link show up in a formula column
New Table( "Example",
	Add Rows( 2 ),
	New Column( "URL",
		"Character",
		"Nominal",
		Formula( "https://www.jmp.com/" || :Page ),
		Set Property(
			"Event Handler",
			Event Handler(
				Click(JSL Quote( Function( {dt, col, row}, Web( dt:col[row] ) ) )
				)
			)
		)
	),
	New Column( "Page",
		"Character",
		"Nominal",
		Set Values(
			{"support/knowledge_base.shtml", "en_us/about.html"}
		)
	)
);

```

**Simple**

```jsl

Web( "http://www.jmp.com/" );

```

### Web Browser Box

**Syntaxe :** wb = Web Browser Box( url )

**Description :** Renvoie une boîte d’affichage visualisant une page web, indiquée par un argument chaîne de caractères url.

**JMP Version ajoutée :** Avant la version 14

```jsl

New Window( "Example", wb = Web Browser Box() );
wb << Navigate( "http://www.jmp.com" );
wb << Set Stretch( "Window", "Window" );
wb << Set Max Size( 10000, 10000 );

```

### Week Of Year

**Syntaxe :** d = Week Of Year( datetime, &lt;rule=1&gt; )

**Description :** Renvoie la semaine de l&apos;année d&apos;une valeur de la date-heure en utilisant l&apos;une des trois règles. Par défaut (règle 1), les semaines commencent le dimanche et le premier dimanche de l&apos;année se trouve dans la semaine no. 2. La semaine 1 est une semaine partielle ou vide (comme en 2006). La règle 2 établit que le premier dimanche se trouve dans la semaine 1, les jours précédents se trouvant dans la semaine 0. La règle 3 renvoie le numéro ISO de la semaine, selon lequel les semaines commencent le lundi et la semaine 1 est la première semaine de l&apos;année avec quatre jours dans cette année là. Avec les semaines ISO, il est possible que les premiers ou les derniers jours de l&apos;année appartiennent à une semaine de deux années voisines.

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

Week Of Year( Today() );

```

**Exemple 2**

```jsl

Show(
	Week Of Year( 01jan2012, 1 ),
	Week Of Year( 01jan2012, 2 ),
	Week Of Year( 01jan2012, 3 )
);

```

### Weibull Density

**Syntaxe :** y = Weibull Density( x, shape, &lt;scale=1&gt;, &lt;threshold=0&gt; )

**Description :** Renvoie la densité à x d’une distribution de probabilité de Weibull avec un paramètre shape et un paramètre scale facultatif.

**JMP Version ajoutée :** Avant la version 14

```jsl

shape = 0.5;
New Window( "Example: Weibull Density",
	y = Graph Box(
		Y Scale( 0, 2 ),
		X Scale( 0, 1.5 ),
		XName( "x" ),
		Pen Color( "red" );
		Y Function( Weibull Density( x, shape ), x );
		Text( {1.1, 1.8}, " shape=", Round( shape, 2 ) );
	),
	H List Box(
		Slider Box( 0, 5, shape, y << reshow ),
		Text Box( " shape" )
	)
);

```

### Weibull Distribution

**Syntaxe :** p = Weibull Distribution( x, shape, &lt;scale=1&gt;, &lt;threshold=0&gt; )

**Description :** Renvoie la probabilité qu&apos;une variable aléatoire distribuée selon Weibull (avec un paramètre shape et le paramètre facultatif scale) soit inférieure à x.

**JMP Version ajoutée :** Avant la version 14

```jsl

shape = 2;
New Window( "Example: Weibull Distribution",
	y = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( 0, 2 ),
		XName( "x" ),
		Pen Color( "red" );
		Y Function( Weibull Distribution( x, shape ), x );
		Text( {0.1, 0.9}, " shape=", Round( shape, 2 ) );
	),
	H List Box(
		Slider Box( 0, 5, shape, y << reshow ),
		Text Box( " shape" )
	)
);

```

### Weibull Quantile

**Syntaxe :** q = Weibull Quantile( p, beta, &lt;alpha=1&gt;, &lt;threshold=0&gt; )

**Description :** Renvoie le quantile d’une distribution de Weibull, correspondant à la probabilité p qu’une variable aléatoire ayant cette distribution prenne une valeur inférieure au quantile, où beta et alpha sont les paramètres de forme et d’échelle, respectivement.

**JMP Version ajoutée :** Avant la version 14

```jsl

exwqbeta = 2;
exwqqq = 0.5;
New Window( "Example: Weibull Quantile",
	exwqy = Graph Box(
		Y Scale( 0, 1.05 ),
		X Scale( 0, 2 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( Weibull Distribution( exwqq, exwqbeta ), exwqq );
		Pen Color( "blue" );
		V Line( Weibull Quantile( exwqqq, exwqbeta ), 0, 1 );
		Text(
			{0.1, 0.9},
			" \!U03B2=",
			Round( exwqbeta, 2 ),
			" quantile=",
			Round( exwqqq, 2 )
		);
	),
	H List Box(
		Slider Box( 0, 5, exwqbeta, exwqy << reshow ),
		Text Box( " \!U03B2" )
	),
	H List Box(
		Slider Box( 0.01, 0.99, exwqqq, exwqy << reshow ),
		Text Box( " quantile" )
	)
);

```

### Where

**Syntaxe :** Where( &lt;dt&gt;, clause )

**Description :** Renvoie les indices (généralement des numéros de ligne) correspondant à la clause Where donnée. Le dt facultatif modifie le Current Data Table lors de l&apos;évaluation. Ces clauses sont souvent écrites par JMP avec le filtre de données. Ce sera souvent plus rapide que d&apos;utiliser Loc, <<Get Rows Where ou <<Select Where. Le comportement est indéfini si la clause modifie les séquences ou des symboles lors de l&apos;évaluation.

**JMP Version ajoutée :** 18

**Autre**

```jsl

xs = [10 20 30 . 50];
ys = [0 0 0 1 1];
Where( xs > 20 & ys );

xs = {{10}, {20}, {15}};
Where( xs[1] < 18 );

```

**Colonnes**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Get Rows Where( :sex == "M" );
Where( :sex == "M" );
Where( dt, :sex == "M" );

```

**États de ligne**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Rows( [2 4 6] ) << Exclude( 1 );
Where( Excluded() );
Where( !Excluded() );

```

**Fonctions de colonne**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Select << Select Rows(
	Where( Col Max( :height, :age ) >= 68 )
);
dt << Clear Select << Select Rows(
	Where( :height == Col Max( :height, :age ) )
);

```

**Matrice/Liste**

```jsl

xs = [10 20 30 . 50];
xs[Where( xs >= 20 )];
xs[Where( !Is Missing( xs ) )];
ys = {10, 20, "30", ., 50};
ys[Where( ys >= 20 )];

```

### While

**Syntaxe :** While( testExpr, bodyExpr )

**Description :** Évalue de façon répétée les expressions testExpr et bodyExpr tant que testExpr est évalué comme non nul.

**JMP Version ajoutée :** Avant la version 14

```jsl

i = 1;
s = "";
While( i < 1000,
	s ||= " " || Char( i );
	i *= 2;
);
s;

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
Extract Expr(
	extestexpr,
	For( i = 1, Wild(), i++, Print( "YES!!!" ) )
);

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
Extract Expr(
	extestexpr,
	For( i = 1, Wild List(), Print( "YES!!!" ) )
);

```

### Window

**Syntaxe :** y = Window( &lt;string|int&gt; )

**Description :** Cette fonction est obsolète et conservée uniquement pour la rétrocompatibilité avec les scripts existants. Pour les nouveaux scripts, utilisez Get Window() ou Get Window List().

**JMP Version ajoutée :** Avant la version 14

```jsl

Window( "Big Class" );

```

### With Clipboard

**Syntaxe :** two = With Clipboard( clp, box &lt;&lt; Paste; 1 + 1 )

**Description :** If the JSL within this function would have normally pasted something from the OS Clipboard, it is instead pasted from the provided Clipboard object.

**JMP Version ajoutée :** 19

```jsl


dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:height << Set Property( "Units", "HELLO" );
clp = Clipboard Capture(
	dt << Select Columns( :height ) << Copy Column Properties
);
With Clipboard(
	clp,
	dt << Select Columns( :weight ) << Paste Column Properties
);

```

### With Window Handler

**Syntaxe :** With Window Handler( JSL Code, Handler Function )

**Description :** Exécute un bloc de code avec une fonction à appeler chaque fois qu&apos;une nouvelle fenêtre est créée.

**JMP Version ajoutée :** 17

```jsl

With Window Handler(
	New Window( "My Window" ),
	Function( {window},
		Print( window << get window title() );
		window << close window();
	)
);

```

### Word

**Syntaxe :** w = Word( n|[first last], s, &lt;delim&gt;, &lt;Unmatched(result string)&gt;

**Description :** Renvoie le n-ième mot de la chaîne s, où les mots sont des sous-chaînes séparées par un ou plusieurs des caractères indiqués dans l&apos;argument delim. Si delim est absent, le caractère utilisé sera l&apos;espace. Si delim est la chaîne vide, tous les caractères sont traités comme un mot.

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

Word( 3, "http://www.jmp.com", ":/." );

```

**Exemple 2**

```jsl

Word( [2 -1], "This is a sentence" );

```

**Exemple 3**

```jsl

Word(
	4,
	"Apple+Banana Tree,,Pear,,Peach,,Grape",
	Get Punctuation Characters()
);

```

**Exemple 4**

```jsl

Word( 5, "a b c d", Unmatched( "None" ) );

```

**Exemple 5**

```jsl

Word( 2, "abcd", "" );

```

### Words

**Syntaxe :** wl = Words( &lt;[first last]&gt;, s, &lt;delim&gt;)

**Description :** Renvoie une liste des sous-chaînes séparées par un quelconque des caractères spécifiés dans l&apos;argument delim. Si delim est absent, le caractère utilisé sera l&apos;espace. Si delim est la chaîne vide, tous les caractères sont traités comme un mot.

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

Eval List(
	{Words( "http://www.jmp.com", ":/." ), Words( "hello", "" )}
);

```

**Exemple 2**

```jsl

Words( "Apple,Banana Tree,Peach", Get Punctuation Characters() );

```

**Exemple 3**

```jsl

Words( [1 2], "Apple,Banana Tree,Peach", Get Punctuation Characters() );

```

### Wrap List Box

**Syntaxe :** y = Wrap List Box( displayBox, ... )

**Description :** Renvoie une boîte d&apos;affichage qui réorganise les boîtes d&apos;affichage fournies par les arguments dans une mise en page horizontale, mais effectuera un retour chariot de la liste lors de l&apos;impression.

**JMP Version ajoutée :** Avant la version 14

```jsl

New Window( "WrapListBox",
	Wrap List Box(
		Graph Box( framesize( 150, 100 ), Text( {50, 50}, "1" ) ),
		Graph Box( framesize( 150, 100 ), Text( {50, 50}, "2" ) ),
		Graph Box( framesize( 150, 100 ), Text( {50, 50}, "3" ) ),
		Graph Box( framesize( 150, 100 ), Text( {50, 50}, "4" ) )
	)
);

```

### Write

**Syntaxe :** Write( x, ... )

**Description :** Affiche les valeurs spécifiées dans le registre sans ajouter de guillemets, espaces ou sauts de ligne (comme le fait Print()).

**JMP Version ajoutée :** Avant la version 14

```jsl

Write( "fraction = ", 355 / 113, "\!N", "pi       = ", Pi() );

```

### X Function

**Syntaxe :** X Function( xExpr, yName, &lt;properties&gt; )

**Description :** Dessine la fonction xExpr dans la dimension X alors que yName varie sur l&apos;étendue de l&apos;axe Y du graphique. Arguments de propriété nommés supplémentaires : Min(X inférieur), Max(X supérieur), Fill(configuration, valeur à remplir), Inc(limite supérieure de l’incrément).

**JMP Version ajoutée :** Avant la version 14

```jsl

New Window( "Example",
	Graph Box(
		Pen Color( "red" );
		X Function( 20 + 40 * Sin( a / 30 ), a );
	)
);

```

### X Origin

**Syntaxe :** x = X Origin()

**Description :** Renvoie la valeur x pour le bord gauche du cadre des graphiques.

**JMP Version ajoutée :** Avant la version 14

```jsl

New Window( "Example",
	Graph Box(
		Fill Color( "red" );
		Oval(
			X Origin() + 10,
			Y Origin() + Y Range() - 10,
			X Origin() + X Range() - 10,
			Y Origin() + 10,
			1
		);
	)
);

```

### X Range

**Syntaxe :** x = X Range()

**Description :** Renvoie la distance x de gauche à droite. X Origin() + X Range() est le bord droit.

**JMP Version ajoutée :** Avant la version 14

```jsl

New Window( "Example",
	Graph Box(
		Fill Color( "red" );
		Oval(
			X Origin() + 10,
			Y Origin() + Y Range() - 10,
			X Origin() + X Range() - 10,
			Y Origin() + 10,
			1
		);
	)
);

```

### X Scale

**Syntaxe :** X Scale( &lt;xMin&gt;, &lt;xMax&gt; )

**Description :** Définit une nouvelle échelle pour le cadre des graphiques.

**JMP Version ajoutée :** Avant la version 14

```jsl

/* Default value for X Scale() is (0,100). */
New Window( "Example",
	Graph Box(
		Y Scale( -10, 90 ),
		X Scale( -10, 90 ),
		Oval(
			X Origin() + 10,
			(Y Origin() + Y Range()) - 10,
			(X Origin() + X Range()) - 10,
			Y Origin() + 10,
			1
		)
	)
);

```

### XML Attr

**Syntaxe :** value = XML Attr( attr name ); aa = XML Attr()

**Description :** Extrait la valeur de chaîne d&apos;un attribut XML dans le contexte d&apos;une évaluation dans une commande Parse XML(). Si aucun nom n’est donné, un tableau associatif de toutes les paires d&apos;attributs nom/valeur sera renvoyé.

**JMP Version ajoutée :** Avant la version 14

```jsl

ex =
"<table name='fromxml'><col name='x'>[1 2 3]</col><col name='y'>[11 22 33]</col></table>";
Parse XML( ex,
	On Element( "table", Start Tag( New Table( XML Attr( "name" ) ) ) ),
	On Element(
		"col",
		End Tag(
			New Column( XML Attr( "name" ),
				Set Values( Parse( XML Text() ) )
			)
		)
	)
);

```

### XML Decode

**Syntaxe :** text = XML Decode( textxml )

**Description :** Décode les symboles XML en texte ordinaire, remplace " par ", < par <, &gt par >; & par &.

**JMP Version ajoutée :** Avant la version 14

```jsl

text = XML Decode(
	"isSmallAlpha = letter&gt;=&quot;a&quot; &amp; letter&lt;=&quot;z&quot;"
);

```

### XML Encode

**Syntaxe :** textxml = XML Encode( text )

**Description :** Prépare le texte à incorporer dans XML, remplace " par ", < par <, > par > & par &.

**JMP Version ajoutée :** Avant la version 14

```jsl

textxml = XML Encode( "\[isSmallAlpha = letter>="a" & letter<="z"]\" );

```

### XML Text

**Syntaxe :** value = XML Text()

**Description :** Extrait le texte de chaîne du corps d&apos;une balise XML dans le contexte d&apos;une évaluation d&apos;une commande Parse XML().

**JMP Version ajoutée :** Avant la version 14

```jsl

ex =
"<table name='fromxml'><col name='x'>[1 2 3]</col><col name='y'>[11 22 33]</col></table>";
Parse XML( ex,
	On Element( "table", Start Tag( New Table( XML Attr( "name" ) ) ) ),
	On Element(
		"col",
		End Tag(
			New Column( XML Attr( "name" ),
				Set Values( Parse( XML Text() ) )
			)
		)
	)
);

```

### XPath Query

**Syntaxe :** result = XPath Query(xml, xpath expression)

**Description :** Exécute une requête XPath sur un document XML.

**JMP Version ajoutée :** Avant la version 14

```jsl

result = XPath Query(
	"<doc><colors><color>red</color><color>green</color><color>blue</color></colors></doc>",
	"//color/text()"
);

```

### XY Function

**Syntaxe :** XY Function( x(t), y(t), t, min(0), max(1), inc(.01) | steps(100) )

**Description :** Cette fonction de script graphique combine une expression x(t) et une expression y(t) permettant de dessiner une courbe x-y pour l&apos;étendue des paramètres t spécifiée. Inc() est l&apos;incrément maximum sur t, ou étapes() est le nombre minimum d&apos;étapes sur t. Utiliser les étapes() ou inc() si la valeur par défaut n&apos;est pas détaillée.

**JMP Version ajoutée :** Avant la version 14

```jsl

New Window( "Spiral",
	Graph Box(
		Pen Color( "red" );
		xCenter = 50;
		yCenter = 50;
		minAngle = 0;
		maxAngle = Pi() * 2 * 20;
		XY Function(
			xCenter + ((ta / 3) * Cos( ta )),
			yCenter + ((ta / 3) * Sin( ta )),
			ta,
			Min( minAngle ),
			Max( maxAngle ),
			inc( Pi() / 100 )
		);
	)
);
/* sin() and cos() use ta as an argument (rotates)
   AND as a factor (expands) in this example.
   (sin and cos use radians, not degrees.) */

```

### Y Function

**Syntaxe :** Y Function( yExpr, xName, &lt;properties&gt; )

**Description :** Dessine la fonction yExpr dans la dimension Y alors que xName varie sur l&apos;étendue de l&apos;axe X du graphique. Arguments de propriété nommés supplémentaires : Min(X inférieur), Max(X supérieur), Fill(configuration, valeur à remplir), Inc(limite supérieure de l’incrément).

**JMP Version ajoutée :** Avant la version 14

```jsl

New Window( "Example",
	Graph Box(
		Pen Color( "red" );
		Y Function( 20 + 40 * Sin( a / 30 ), a );
	)
);

```

### Y Origin

**Syntaxe :** y = Y Origin()

**Description :** Renvoie la valeur y pour le bord inférieur du cadre des graphiques.

**JMP Version ajoutée :** Avant la version 14

```jsl

New Window( "Example",
	Graph Box(
		Fill Color( "red" );
		Oval(
			X Origin() + 10,
			Y Origin() + Y Range() - 10,
			X Origin() + X Range() - 10,
			Y Origin() + 10,
			1
		);
	)
);

```

### Y Range

**Syntaxe :** y = Y Range()

**Description :** Renvoie la distance y du bas jusqu&apos;au haut. Y Origin() + Y Range() est le bord supérieur.

**JMP Version ajoutée :** Avant la version 14

```jsl

New Window( "Example",
	Graph Box(
		Fill Color( "red" );
		Oval(
			X Origin() + 10,
			Y Origin() + Y Range() - 10,
			X Origin() + X Range() - 10,
			Y Origin() + 10,
			1
		);
	)
);

```

### Y Scale

**Syntaxe :** Y Scale( &lt;yMin&gt;, &lt;yMax&gt; )

**Description :** Définit une nouvelle échelle pour le cadre des graphiques.

**JMP Version ajoutée :** Avant la version 14

```jsl

/* Default value for Y Scale() is (0,100).*/
New Window( "Example",
	Graph Box(
		Y Scale( -10, 90 ),
		X Scale( -10, 90 ),
		Oval(
			X Origin() + 10,
			(Y Origin() + Y Range()) - 10,
			(X Origin() + X Range()) - 10,
			Y Origin() + 10,
			1
		)
	)
);

```

### Year

**Syntaxe :** yr = Year( datetime )

**Description :** Renvoie l&apos;année d&apos;une date.

**JMP Version ajoutée :** Avant la version 14

```jsl

Year( Today() );

```

### Zero Or Missing

**Syntaxe :** y = Zero Or Missing( x )

**Description :** Renvoie le NOT logique de x en considérant les valeurs manquantes comme des zéro : 1 x est manquant ou nul et 0 dans le cas contraire.

**JMP Version ajoutée :** Avant la version 14

```jsl

Zero Or Missing( 1 < 2 );

```

### ZI Negative Binomial Distribution

**Syntaxe :** cumprob = ZI Negative Binomial Distribution( k, lambda, sigma, pi )

**Description :** Renvoie la probabilité qu&apos;une variable aléatoire distribuée selon une distribution binomiale négative comportant un Dirac en 0 soit inférieure ou égale à k, où lambda est le paramètre de position, sigma est le paramètre d&apos;échelle, pi est le paramètre de Dirac en 0 et k est le dénombrement pertinent.

**JMP Version ajoutée :** 19

```jsl

lambda = 4;
sigma = .5;
p = .2;
New Window( "Example: Zero Inflated Negative Binomial Distribution",
	ppy = Graph Box(
		Y Scale( 0, 1.01 ),
		X Scale( -1, 40 ),
		Pen Color( "red" ),
		Pen Size( 1 );
		For( k = 0, k <= 40, k++,
			H Line(
				k,
				k + 1,
				ZI Negative Binomial Distribution(
					k,
					lambda,
					sigma,
					p
				)
			);
			V Line(
				k + 1,
				ZI Negative Binomial Distribution(
					k,
					lambda,
					sigma,
					p
				),
				ZI Negative Binomial Distribution(
					k + 1,
					lambda,
					sigma,
					p
				)
			);
		);
		Text( {30, 0.3}, "\!U03BB=", Round( lambda, 2 ) );
		Text( {30, .2}, "\!U03C3=", Round( sigma, 2 ) );
		Text( {30, .1}, "\!U03C0=", Round( p, 2 ) );
	),
	V List Box(
		H List Box(
			Slider Box( 0.01, 40, lambda, ppy << reshow ),
			Text Box( " \!U03BB" )
		),
		H List Box(
			Slider Box( 0.001, 2, sigma, ppy << reshow ),
			Text Box( "\!U03C3" )
		),
		H List Box(
			Slider Box( 0, .99, p, ppy << reshow ),
			Text Box( " \!U03C0" )
		),

	)
);

```

### ZI Negative Binomial Probability

**Syntaxe :** prob = ZI Negative Binomial Probability( k, lambda, sigma, pi)

**Description :** Renvoie la probabilité qu&apos;une variable aléatoire distribuée selon une distribution binomiale négative comportant un Dirac en 0 soit égale à k, où lambda est le paramètre de position, sigma est le paramètre d&apos;échelle, pi est le paramètre de Dirac en 0 et k est le dénombrement pertinent.

**JMP Version ajoutée :** 19

```jsl

lambda = 4;
sigma = .5;
p = .1;
New Window( "Example: Zero Inflated Negative Binomial Probability",
	ppy = Graph Box(
		Y Scale( 0, .4 ),
		X Scale( -1, 40 ),
		Pen Color( "red" ),
		Pen Size( 2 );
		For( k = 0, k <= 40, k++,
			V Line(
				k,
				0,
				ZI Negative Binomial Probability( k, lambda, sigma, p )
			)
		);
		Text( {30, 0.3}, "\!U03BB=", Round( lambda, 2 ) );
		Text( {30, .25}, "\!U03C3=", Round( sigma, 2 ) );
		Text( {30, .2}, "\!U03C0=", Round( p, 2 ) );
	),
	V List Box(
		H List Box(
			Slider Box( .01, 40, lambda, ppy << reshow ),
			Text Box( " \!U03BB" )
		),
		H List Box(
			Slider Box( 0.001, 2, sigma, ppy << reshow ),
			Text Box( "\!U03C3" )
		),
		H List Box(
			Slider Box( 0, .25, p, ppy << reshow ),
			Text Box( " \!U03C0" )
		)
	)
);

```

### ZI Negative Binomial Quantile

**Syntaxe :** q = ZI Negative Binomial Quantile( lambda, sigma, pi, cumprob )

**Description :** Renvoie le quantile entier le plus petit, pour lequel la probabilité cumulée de la distribution binomiale négative (lambda, sigma, pi) comportant un Dirac en 0 soit supérieure ou égale à cumprob.

**JMP Version ajoutée :** 19

```jsl

qexpl = 20;
qexpsig = .5;
qexpp = .2;
qexpn = 40;
qexpq = 0.5;
New Window( "Example: ZI Negative Binomial Quantile",
	qexpy = Graph Box(
		Y Scale( 0, 1.05 ),
		X Scale( -1, 41 ),
		Pen Color( "red" ),
		Pen Size( 2 );
		For( qexpk = 0, qexpk < Round( qexpn ), qexpk++,
			H Line(
				qexpk,
				qexpk + 1,
				ZI Negative Binomial Distribution(
					qexpk,
					qexpl,
					qexpsig,
					qexpp
				)
			);
			V Line(
				qexpk + 1,
				ZI Negative Binomial Distribution(
					qexpk,
					qexpl,
					qexpsig,
					qexpp
				),
				ZI Negative Binomial Distribution(
					qexpk + 1,
					qexpl,
					qexpsig,
					qexpp
				)
			);
		);
		Pen Color( "blue" );
		V Line(
			ZI Negative Binomial Quantile(
				qexpl,
				qexpsig,
				qexpp,
				qexpq
			),
			0,
			1.0
		);
		Text(
			{2, 0.9},
			" \!U03BB=",
			Round( qexpl, 2 ),
			" \!U03C3=",
			Round( qexpsig, 2 ),
			" \!U03C0=",
			Round( qexpp, 2 )
		);
		Text(
			{2, 0.8},
			" q=",
			Round( qexpq, 2 ),
			" quantile=",
			Round(
				ZI Negative Binomial Quantile(
					qexpl,
					qexpsig,
					qexpp,
					qexpq
				)
			)
		);
	),
	H List Box(
		Slider Box( 0.001, 40, qexpl, qexpy << reshow ),
		Text Box( " \!U03BB" )
	),
	H List Box(
		Slider Box( 0.001, 2, qexpsig, qexpy << reshow ),
		Text Box( "\!U03C3" )
	),
	H List Box(
		Slider Box( 0, .99, qexpp, qexpy << reshow ),
		Text Box( " \!U03C0" )
	),
	H List Box(
		Slider Box( 0.001, .999, qexpq, qexpy << reshow ),
		Text Box( " q" )
	)
);

```

### ZI Poisson Distribution

**Syntaxe :** cumprob = ZI Poisson Distribution( k, lambda, pi )

**Description :** Renvoie la probabilité qu&apos;une variable aléatoire distribuée selon une distribution de Poisson comportant un Dirac en 0 soit inférieure ou égale à k, où lambda est le paramètre de position, pi est le paramètre de Dirac en 0 et k est le dénombrement pertinent.

**JMP Version ajoutée :** 19

```jsl

lambda = 4;
p = .2;
New Window( "Example: Zero Inflated Poisson Distribution",
	ppy = Graph Box(
		Y Scale( 0, 1.01 ),
		X Scale( -1, 40 ),
		Pen Color( "red" ),
		Pen Size( 1 );
		For( k = 0, k <= 40, k++,
			H Line( k, k + 1, ZI Poisson Distribution( k, lambda, p ) );
			V Line(
				k + 1,
				ZI Poisson Distribution( k, lambda, p ),
				ZI Poisson Distribution( k + 1, lambda, p )
			);
		);
		Text( {30, 0.2}, "\!U03BB=", Round( lambda, 2 ) );
		Text( {30, .1}, "\!U03C0=", Round( p, 2 ) );
	),
	V List Box(
		H List Box(
			Slider Box( 0, 40, lambda, ppy << reshow ),
			Text Box( " \!U03BB" )
		),
		H List Box(
			Slider Box( 0, .99, p, ppy << reshow ),
			Text Box( " \!U03C0" )
		),

	)
);

```

### ZI Poisson Probability

**Syntaxe :** prob = ZI Poisson Probability( k, lambda, pi)

**Description :** Renvoie la probabilité qu&apos;une variable aléatoire distribuée selon une distribution de Poisson comportant un Dirac en 0 soit égale à k, où lambda est le paramètre de position, pi est le paramètre de Dirac en 0 et k est le dénombrement pertinent.

**JMP Version ajoutée :** 19

```jsl

lambda = 4;
p = .2;
New Window( "Example: Poisson Probability",
	ppy = Graph Box(
		Y Scale( 0, .6 ),
		X Scale( -1, 40 ),
		Pen Color( "red" ),
		Pen Size( 2 );
		For( k = 0, k <= 40, k++,
			V Line( k, 0, ZI Poisson Probability( k, lambda, p ) )
		);
		Text( {30, 0.5}, "\!U03BB=", Round( lambda, 2 ) );
		Text( {30, .4}, "\!U03C0=", Round( p, 2 ) );
	),
	V List Box(
		H List Box(
			Slider Box( 0, 40, lambda, ppy << reshow ),
			Text Box( " \!U03BB" )
		),
		H List Box(
			Slider Box( 0, .99, p, ppy << reshow ),
			Text Box( " \!U03C0" )
		),

	)
);

```

### ZI Poisson Quantile

**Syntaxe :** q = ZI Poisson Quantile( lambda, pi, cumprob )

**Description :** Renvoie le quantile entier le plus petit, pour lequel la probabilité cumulée de la distribution de Poisson (lambda, pi) comportant un Dirac en 0 soit supérieure ou égale à cumprob.

**JMP Version ajoutée :** 19

```jsl

qexpl = 20;
qexpp = .2;
qexpn = 40;
qexpq = 0.5;
New Window( "Example: ZI Poisson Quantile",
	qexpy = Graph Box(
		Y Scale( 0, 1.05 ),
		X Scale( -1, 41 ),
		Pen Color( "red" ),
		Pen Size( 2 );
		For( qexpk = 0, qexpk < Round( qexpn ), qexpk++,
			H Line(
				qexpk,
				qexpk + 1,
				ZI Poisson Distribution( qexpk, qexpl, qexpp )
			);
			V Line(
				qexpk + 1,
				ZI Poisson Distribution( qexpl, qexpp, qexpk ),
				ZI Poisson Distribution( qexpl, qexpp, qexpk + 1 )
			);
		);
		Pen Color( "blue" );
		V Line( ZI Poisson Quantile( qexpl, qexpp, qexpq ), 0, 1.0 );
		Text(
			{2, 0.9},
			" \!U03BB=",
			Round( qexpl, 2 ),
			" \!U03C0=",
			Round( qexpp, 2 )
		);
		Text(
			{2, 0.8},
			" q=",
			Round( qexpq, 2 ),
			" quantile=",
			Round( ZI Poisson Quantile( qexpl, qexpp, qexpq ) )
		);
	),
	H List Box(
		Slider Box( 0, 40, qexpl, qexpy << reshow ),
		Text Box( " \!U03BB" )
	),
	H List Box(
		Slider Box( 0, .99, qexpp, qexpy << reshow ),
		Text Box( " \!U03C0" )
	),
	H List Box(
		Slider Box( 0, 1, qexpq, qexpy << reshow ),
		Text Box( " q" )
	)
);

```

