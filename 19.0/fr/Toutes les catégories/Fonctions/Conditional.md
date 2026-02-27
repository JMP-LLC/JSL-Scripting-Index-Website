# Conditional



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

### Choose

**Syntaxe :** y = Choose( i, expr1, expr2, ..., exprElse )

**Description :** Calcule et renvoie le i-ième argument de expr ou l’argument exprElse s’il n’y a pas de i-ième expr argument.

**JMP Version ajoutée :** Avant la version 14

```jsl

Choose( Random Integer( 1, 5 ), "red", "blue", "other" );

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

### Filter Each

**Syntaxe :** list = Filter Each({&lt;value&gt;, &lt;index&gt;} | {&lt;element&gt;, &lt;index | {row, col}&gt;} | {&lt;key | {key, value}&gt;, &lt;index&gt;} | {&lt;values | {value1, ..., valueN}&gt;, &lt;index&gt;}, list | matrix | associative array | expression | Across( container1, ..., &lt;containerN&gt;, &lt;Count( "Longest" | "Shortest" | "Enforce Equal" | n )&gt; ), &lt;locals list&gt;, body)

**Description :** Identique à la fonction For Each, mais renvoie également une liste de valeurs du conteneur original filtrées sur la base d&apos;un résultat à valeur booléenne. Le type de résultat correspond au type du conteneur d&apos;entrée. Pour l&apos;entrée de matrice, une matrice de vecteurs lignes sera renvoyée, car la taille de la matrice est inconnue.

**JMP Version ajoutée :** 16

#### Associative Array

```jsl

values = Filter Each( {{key, value}}, ["A" => 8, "B" => 6, "C" => 10],
	value > 6
);
Show( values );

```

#### Expression

```jsl

values = Filter Each( {value}, Expr( MyExpr( 1, 2, 3, 4 ) ),
	Mod( value, 2 ) == 0
);
Show( values );

```

#### List

```jsl

values = Filter Each( {x}, {0, -5, 2, -10, 4}, x > 0 );
Show( values );

```

#### Matrix

```jsl

values = Filter Each( {x, i}, 100 :: 120, i > 10 );
Show( values );

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

#### Across

```jsl


// Across multiple containers
x = {1, 3};
y = {2, 4};
For Each( {{a, b}, index}, Across( x, y ), Show( a, b, index ) );

// Across list of containers
xy = {{1, 3}, {2, 4}};
For Each( {{a, b}, index}, Across( xy ), Show( a, b, index ) );

```

#### Across - Count

```jsl


list1 = {1, 3, 5, 7, 9};
list2 = {2, 4}; 

Write( "\!N===Longest [default]===" );
For Each( {{l1, l2}}, Across( list1, list2, Count( "Longest" ) ),
	Show( l1, l2 )
);

Write( "\!N===Shortest===" );
For Each( {{s1, s2}}, Across( list1, list2, Count( "Shortest" ) ),
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

#### Associative Array

```jsl

For Each( {{key, value}, index}, ["A" => 8, "B" => 6, "C" => 10],
	Show( key, value, index )
);

```

#### Expression

```jsl

For Each( {value, index}, Expr( MyExpr( 10, 20, 30 ) ), Show( value ) );

```

#### List

```jsl

For Each( {value, index}, {10, 20, 30}, Show( value, index ) );

```

#### Matrice - Indice linéaire

```jsl

For Each( {element, index}, 10 :: 15, Show( element, index ) );

```

#### Matrix

```jsl

For Each( {element, {row, col}}, 10 :: 15, Show( element, row, col ) );

```

### For Each Row

**Syntaxe :** y = For Each Row( &lt;dt&gt;, body )

**Description :** Évalue de manière itérative l&apos;expression pour chaque colonne dans la table de données en cours.

**JMP Version ajoutée :** Avant la version 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( :height = -:height );

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

### Interpolate

**Syntaxe :** y = Interpolate(x|xmatrix|xlist, x1, y1, x2, y2);y = Interpolate(x | xmatrix | xlist, xmatrix, ymatrix);z = Interpolate({ x, y }, xvector, yvector, zmatrix)

**Description :** Trouve les arguments xi qui comprennent x et interpole linéairement les arguments yi correspondants. Notez que les arguments xi doivent être indiqués dans l’ordre.

**JMP Version ajoutée :** Avant la version 14

#### Exemple 1

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

#### Exemple 2

```jsl

Interpolate( 2.5, [1 2 3], [15, 20, 30] );

```

#### Exemple 3

```jsl

Interpolate( {.5, .8}, [0 1], [0 1], [10 20, 12 18] );

```

#### Exemple 4

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

### Is Empty

**Syntaxe :** y = Is Empty( name )

**Description :** Renvoie 1 si la variable n&apos;est pas définie ou garde la valeur Empty().

**JMP Version ajoutée :** Avant la version 14

#### Exemple 1

```jsl

Is Empty( x );

```

#### Exemple 2

```jsl

x = Empty();
Is Empty( x );

```

#### Exemple 3

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

### Is List

**Syntaxe :** y = Is List( x )

**Description :** Renvoie 1 si l’argument x est une liste, 0 dans le cas contraire.

**JMP Version ajoutée :** Avant la version 14

```jsl

Is List( {1, 2, 3} );

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

### Is Scriptable

**Syntaxe :** tf = Is Scriptable( x )

**Description :** Renvoie 1 si l’argument x est un objet scriptable, et 0 dans le cas contraire.

**JMP Version ajoutée :** Avant la version 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Is Scriptable( Bivariate( Y( :weight ), X( :height ) ) );

```

### Is String

**Syntaxe :** y = Is String( x )

**Description :** Renvoie 1 si l’argument x est une chaîne, 0 dans le cas contraire.

**JMP Version ajoutée :** Avant la version 14

```jsl

Is String( "abc" );

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

### Not

**Syntaxe :** y = !x; y = Not( x )

**Description :** Renvoie le NOT logique de x : 1 si x est égal à zéro, manquant si x est manquant et 0 dans les autres cas.

**JMP Version ajoutée :** Avant la version 14

```jsl

!(1 < 2);

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

### Return

**Syntaxe :** Return(&lt;Expr&gt;, ..., &lt;ExprN&gt;)

**Description :** Renvoie une valeur d&apos;expression issue d&apos;une fonction définie par l&apos;utilisateur.

**JMP Version ajoutée :** Avant la version 14

#### Exemple 1

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

#### Exemple 2

```jsl

f = Function( {a, b},
	Return( a - b, a + b )
);
{lo, hi} = f( 10, 1 );
Show( lo, hi );
Show( f( 7, 15 ) );

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

### Transform Each

**Syntaxe :** list = Transform Each({&lt;value&gt;, &lt;index&gt;} | {&lt;element&gt;, &lt;index | {row, col}&gt;} | {&lt;key | {key, value}&gt;, &lt;index&gt;} | {&lt;values | {value1, ..., valueN}&gt;, &lt;index&gt;}, list | matrix | associative array | expression | Across( container1, ..., &lt;containerN&gt;, &lt;Count( "Longest" | "Shortest" | "Enforce Equal" | n )&gt; ), &lt;Output( "List" | "Matrix" | "Associative Array" | "Expression", &lt;expr head name&gt; )&gt;, &lt;locals list&gt;, body)

**Description :** Identique à la fonction For Each, mais renvoie également un conteneur du résultat à chaque itération. Par défaut, renvoie un conteneur correspondant au type du conteneur d&apos;entrée, ce qui peut être changé avec l&apos;argument Output. Pour la sortie de liste ou d&apos;expression, Empty() sera utilisé lorsqu&apos;aucun résultat n&apos;est renvoyé. Pour la sortie de matrice, une valeur numérique manquante est utilisée lorsqu&apos;aucun résultat n&apos;est renvoyé, ou si le résultat n&apos;est pas numérique. Pour la sortie de tableau associatif, il n&apos;y aura pas de clé lorsqu&apos;aucun résultat n&apos;est renvoyé. Si Continue() est utilisé, cela revient à ne renvoyer aucune valeur pour cette itération.

**JMP Version ajoutée :** 16

#### Associative Array

```jsl

values = Transform Each( {{key, value}},
	["A" => 8, "B" => 6, "C" => 10],
	value + 1
);
Show( values );

```

#### Expression 1

```jsl

ex = Transform Each( {value}, Expr( MyExpr( 10, 20, 30 ) ), value + 1 );
Show( ex );

```

#### Expression 2

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

#### List

```jsl

values = Transform Each( {value}, {10, 20, 30}, value + 5 );
Show( values );

```

#### Matrix

```jsl

values = Transform Each( {element}, 10 :: 15, element + 5 );
Show( values );

```

#### Output

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

### Zero Or Missing

**Syntaxe :** y = Zero Or Missing( x )

**Description :** Renvoie le NOT logique de x en considérant les valeurs manquantes comme des zéro : 1 x est manquant ou nul et 0 dans le cas contraire.

**JMP Version ajoutée :** Avant la version 14

```jsl

Zero Or Missing( 1 < 2 );

```

