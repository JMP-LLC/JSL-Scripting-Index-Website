# Conditional



### And

**Sintassi:** y = x1 & x2; y = And( x1, x2, ... )

**Descrizione:** Restituisce l&apos;AND logico di tutti gli argomenti: 1 se tutti gli argomenti sono diversi da zero e 0 in caso contrario.

**JMP Versione aggiunta:** prima della versione 14

```jsl

1 < 2 & 3 < 4;

```

### AndMZ

**Sintassi:** y = AndMZ( x1, x2, ... )

**Descrizione:** Restituisce l&apos;AND logico di tutti gli argomenti senza i valori mancanti trattati come zeri: 1 se tutti gli argomenti sono diversi da zero e 0 in caso contrario.

**JMP Versione aggiunta:** prima della versione 14

```jsl

AndMZ( 1 < 2, 3 < 4 );

```

### Break

**Sintassi:** Break()

**Descrizione:** Causa un&apos;interruzione del flusso di controllo in un ciclo For o While.

**JMP Versione aggiunta:** prima della versione 14

```jsl

For( i = 1, i <= 10, i++,
	If( i == 5, Break() );
	Print( "i=" || Char( i ) );
);

```

### Choose

**Sintassi:** y = Choose( i, expr1, expr2, ..., exprElse )

**Descrizione:** Valuta e restituisce l&apos;i-esimo argomento expr o l&apos;argomento exprElse se non esiste alcun i-esimo argomento expr.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Choose( Random Integer( 1, 5 ), "red", "blue", "other" );

```

### Continue

**Sintassi:** Continue()

**Descrizione:** Causa una continuazione dell&apos;iterazione successiva del flusso di controllo in un ciclo For o While.

**JMP Versione aggiunta:** prima della versione 14

```jsl

For( i = 1, i <= 10, i++,
	If( i < 2, Continue() );
	Print( "i=" || Char( i ) );
);

```

### Filter Each

**Sintassi:** list = Filter Each({&lt;value&gt;, &lt;index&gt;} | {&lt;element&gt;, &lt;index | {row, col}&gt;} | {&lt;key | {key, value}&gt;, &lt;index&gt;} | {&lt;values | {value1, ..., valueN}&gt;, &lt;index&gt;}, list | matrix | associative array | expression | Across( container1, ..., &lt;containerN&gt;, &lt;Count( "Longest" | "Shortest" | "Enforce Equal" | n )&gt; ), &lt;locals list&gt;, body)

**Descrizione:** Fa tutto quello che fa la funzione Per ognuno, ma restituisce anche un elenco di valori filtrati dal contenitore originale sulla base del risultato di un valore booleano. Il tipo di risultato corrisponderà al tipo di contenitore di input. Per l&apos;input Matrice, sarà restituita una matrice del vettore di riga, poiché la dimensione della matrice non può essere conosciuta.

**JMP Versione aggiunta:** 16

#### Associative Array

```jsl

values = Filter Each( {{key, value}}, ["A" => 8, "B" => 6, "C" => 10], value > 6 );
Show( values );

```

#### Expression

```jsl

values = Filter Each( {value}, Expr( MyExpr( 1, 2, 3, 4 ) ), Mod( value, 2 ) == 0 );
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

**Sintassi:** For( initExpr, whileExpr, nextExpr, bodyExpr )

**Descrizione:** Valuta initExpr una volta e ripetutamente whileExpr, bodyExpr, e nextExpr fino a quando whileExpr viene valutato diverso da zero.

**JMP Versione aggiunta:** prima della versione 14

```jsl

s = "";
For( i = 1, i < 10, i++,
	s ||= " " || Char( i )
);
Trim( s );

```

### For Each

**Sintassi:** For Each({&lt;value&gt;, &lt;index&gt;} | {&lt;element&gt;, &lt;index | {row, col}&gt;} | {&lt;key | {key, value}&gt;, &lt;index&gt;} | {&lt;values | {value1, ..., valueN}&gt;, &lt;index&gt;}, list | matrix | associative array | expression | Across( container1, ..., &lt;containerN&gt;, &lt;Count( "Longest" | "Shortest" | "Enforce Equal" | n )&gt; ), &lt;locals list&gt;, body)

**Descrizione:** Itera in un contenitore, sia esso un elenco, una matrice, un array associativo o espressione, fornendo il valore, l&apos;elemento o la chiave a ogni iterazione. A ogni iterazione è anche disponibile il numero dell&apos;indice. Per i contenitori di array associativi, la chiave e il valore sono accessibili utilizzando un elenco di due elementi. Per i contenitori Matrice, è fornito un indice lineare per impostazione predefinita, ma è possibile utilizzare un elenco di due elementi per accedere agli indici di righe e colonne. Questi simboli sono forniti solo all&apos;interno del corpo del ciclo, con un blocco locale integrato. Può essere fornito anche un elenco di elementi locali, che sono inizializzati dopo l&apos;impostazione dei simboli della prima iterazione.

**JMP Versione aggiunta:** 16

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
For Each( {{l1, l2}}, Across( list1, list2, Count( "Longest" ) ), Show( l1, l2 ) );

Write( "\!N===Shortest===" );
For Each( {{s1, s2}}, Across( list1, list2, Count( "Shortest" ) ), Show( s1, s2 ) );

Write( "\!N===N===" );
For Each( {{n1, n2}}, Across( list1, list2, Count( 7 ) ), Show( n1, n2 ) );

Write( "\!N===Enforce Equal===" );
Try(
	For Each( {values}, Across( list1, list2, Count( "Enforce Equal" ) ), Show( values ) ),
	Print( "Error occurred" )
);

```

#### Associative Array

```jsl

For Each( {{key, value}, index}, ["A" => 8, "B" => 6, "C" => 10], Show( key, value, index ) );

```

#### Expression

```jsl

For Each( {value, index}, Expr( MyExpr( 10, 20, 30 ) ), Show( value ) );

```

#### List

```jsl

For Each( {value, index}, {10, 20, 30}, Show( value, index ) );

```

#### Matrice - Indice lineare

```jsl

For Each( {element, index}, 10 :: 15, Show( element, index ) );

```

#### Matrix

```jsl

For Each( {element, {row, col}}, 10 :: 15, Show( element, row, col ) );

```

### For Each Row

**Sintassi:** y = For Each Row( &lt;dt&gt;, body )

**Descrizione:** Valuta iterativamente l&apos;espressione principale bodyExpr per ciascuna riga nella tabella di dati corrente.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( :height = -:height );

```

### If

**Sintassi:** y = If( condition1, result1, &lt;condition2, result2&gt;, ..., &lt;elseResult&gt; )

**Descrizione:** Valuta il primo di ogni coppia di argomenti e restituisce la valutazione dell&apos;espressione result associata al primo argomento condition valutato con un risultato diverso da zero. Gli argomenti condition sono valutati in ordine. Se tutti gli argomenti condition sono valutati zero, viene valutato il elseResult facoltativo e viene restituito il risultato. Se non viene specificato alcun elseResult, e nessuna delle condizioni è vera, viene restituito un valore mancante. Se tutti gli argomenti condition sono valutati come mancanti, viene restituito un valore mancante.

**JMP Versione aggiunta:** prima della versione 14

```jsl

If( Random Uniform() < 0.5,
	"heads",
	"tails"
);

```

### IfMZ

**Sintassi:** y = IfMZ( condition1, result1, &lt;condition2, result2&gt;, ..., &lt;elseResult&gt; )

**Descrizione:** Valuta il primo di ogni coppia di argomenti e restituisce la valutazione dell&apos;espressione result associata al primo argomento condition valutato con un risultato diverso da zero. Gli argomenti condition sono valutati in ordine. Se tutti gli argomenti condition sono valutati zero o mancanti, viene valutato il elseResult facoltativo e viene restituito il risultato. Se non viene specificato alcun elseResult, e nessuna delle condizioni è vera, viene restituito un valore mancante. (IfMZ() è equivalente a If() dove i valori mancanti per gli argomenti condition valutati sono trattati come zero.)

**JMP Versione aggiunta:** prima della versione 14

```jsl

x = 1;
Show( IfMZ( x == 1, 10, x == 2, 20, 30 ) );
x = .;
Show( IfMZ( x == 1, 10, x == 2, 20, 30 ) );
x = .;
Show( If( x == 1, 10, x == 2, 20, 30 ) );

```

### IfMax

**Sintassi:** y = IfMax( expr1, result1, expr2, result2, ..., &lt;allMissingResult&gt; )

**Descrizione:** Valuta il primo argomento di ciascuna coppia e restituisce la valutazione dell&apos;espressione del risultato associata al massimo delle espressioni. Se sono presenti valori equivalenti, restituisce il primo massimo. Se tutte le espressioni sono mancanti, restituisce Vuoto nel caso di un numero di argomenti pari o, nel caso contrario, l&apos;ultimo argomento. Le espressioni del test devono avere una valutazione numerica, mentre le espressioni del risultato possono essere qualsiasi cosa.

**JMP Versione aggiunta:** prima della versione 14

```jsl

TomScore = 45;
JonScore = 47;
TimScore = 46;
highestScorer = IfMax( TomScore, "Tom", JonScore, "Jon", TimScore, "Tim", "Noone" );

```

### IfMin

**Sintassi:** y = IfMin( expr1, result1, expr2, result2, ..., &lt;allMissingResult&gt; )

**Descrizione:** Valuta il primo argomento di ciascuna coppia e restituisce la valutazione dell&apos;espressione del risultato associata al minimo delle espressioni. Se sono presenti valori equivalenti, restituisce il primo minimo. Se tutte le espressioni sono mancanti, restituisce Vuoto nel caso di un numero di argomenti pari o, nel caso contrario, l&apos;ultimo argomento. Le espressioni del test devono avere una valutazione numerica, mentre le espressioni del risultato possono essere qualsiasi cosa.

**JMP Versione aggiunta:** prima della versione 14

```jsl

TomScore = 45;
JonScore = 47;
TimScore = 46;
lowestScorer = IfMin( TomScore, "Tom", JonScore, "Jon", TimScore, "Tim", "Noone" );

```

### Interpolate

**Sintassi:** y = Interpolate(x|xmatrix|xlist, x1, y1, x2, y2);y = Interpolate(x | xmatrix | xlist, xmatrix, ymatrix);z = Interpolate({ x, y }, xvector, yvector, zmatrix)

**Descrizione:** Trova gli argomenti xi tra i quali si trova x e interpola linearmente i corrispondenti argomenti yi. Nota: gli argomenti xi devono essere specificati in ordine.

**JMP Versione aggiunta:** prima della versione 14

#### Esempio 1

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

#### Esempio 2

```jsl

Interpolate( 2.5, [1 2 3], [15, 20, 30] );

```

#### Esempio 3

```jsl

Interpolate( {.5, .8}, [0 1], [0 1], [10 20, 12 18] );

```

#### Esempio 4

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

**Sintassi:** y = Is Associative Array( x )

**Descrizione:** Restituisce 1 se l&apos;argomento x è un array associativo e 0 in caso contrario.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Is Associative Array( [1 => 2] );

```

### Is Class

**Sintassi:** isns = Is Class( class reference )

**Descrizione:** Restituisce 1 se l&apos;argomento class è una classe. Altrimenti, restituisce 0.

**JMP Versione aggiunta:** prima della versione 14

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
		New Object( complex( real * y:real - imag * y:imag, imag * y:real + real * y:imag ) )
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

**Sintassi:** y = Is Empty( name )

**Descrizione:** Restituisce 1 se la variabile non è definita o contiene il valore Empty().

**JMP Versione aggiunta:** prima della versione 14

#### Esempio 1

```jsl

Is Empty( x );

```

#### Esempio 2

```jsl

x = Empty();
Is Empty( x );

```

#### Esempio 3

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

**Sintassi:** y = Is Expr( x )

**Descrizione:** Restituisce 1 se l&apos;argomento x è un&apos;espressione e 0 in caso contrario.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Is Expr( Expr( x ) );

```

### Is List

**Sintassi:** y = Is List( x )

**Descrizione:** Restituisce 1 se l&apos;argomento x è un elenco e 0 in caso contrario.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Is List( {1, 2, 3} );

```

### Is Name

**Sintassi:** y = Is Name( x )

**Descrizione:** Restituisce 1 se l&apos;argomento x è un nome e 0 in caso contrario.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Is Name( Name Expr( n ) );

```

### Is Namespace

**Sintassi:** isns = Is Namespace( namespace reference )

**Descrizione:** Restituisce 1 se l&apos;argomento namespace è uno spazio dei nomi, in caso contrario 0.

**JMP Versione aggiunta:** prima della versione 14

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

**Sintassi:** y = Is Number( x )

**Descrizione:** Restituisce 1 se l&apos;argomento x è un numero e 0 in caso contrario.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Is Number( 213 );

```

### Is Scriptable

**Sintassi:** tf = Is Scriptable( x )

**Descrizione:** Restituisce 1 se x è un oggetto che supporta script e 0 in caso contrario.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Is Scriptable( Bivariate( Y( :weight ), X( :height ) ) );

```

### Is String

**Sintassi:** y = Is String( x )

**Descrizione:** Restituisce 1 se l&apos;argomento x è una stringa e 0 in caso contrario.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Is String( "abc" );

```

### Match

**Sintassi:** y = Match( x, v1, expr1, v2, expr2, ..., exprElse )

**Descrizione:** Valuta e restituisce l&apos;argomento exprN corrispondente al primo argomento vN uguale a x, o exprElse se nessun valore è pari a x.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Match( Year( Today() ), 2013, "snake", 2014, "horse", 2015, "goat", "other" );

```

### MatchMZ

**Sintassi:** y = MatchMZ( x, v1, expr1, v2, expr2, ..., exprElse )

**Descrizione:** Valuta e restituisce l&apos;argomento exprN corrispondente al primo argomento vN uguale a x, o exprElse se nessun valore è pari a x. (La funzione MatchMZ() si comporta allo stesso modo della funzione Match(), con l&apos;eccezione che i valori mancanti sono trattati come 0.)

**JMP Versione aggiunta:** prima della versione 14

```jsl

MatchMZ( Year( Today() ), 2013, "snake", 2014, "horse", 2015, "goat", "other" );

```

### Not

**Sintassi:** y = !x; y = Not( x )

**Descrizione:** Restituisce il NOT logico di x: 1 se x è zero, mancante se x è mancante e 0 in caso contrario.

**JMP Versione aggiunta:** prima della versione 14

```jsl

!(1 < 2);

```

### Or

**Sintassi:** y = x1 | x2; y = Or( x1, x2, ... )

**Descrizione:** Restituisce l&apos;OR logico di tutti gli argomenti: 1 se un qualsiasi argomento è diverso da zero e 0 in caso contrario.

**JMP Versione aggiunta:** prima della versione 14

```jsl

1 < 2 | 3 < 2;

```

### OrMZ

**Sintassi:** y = OrMZ( x1, x2, ... )

**Descrizione:** Restituisce l&apos;OR logico di tutti gli argomenti senza i valori mancanti trattati come zeri: 1 se un qualsiasi argomento è diverso da zero e 0 in caso contrario.

**JMP Versione aggiunta:** prima della versione 14

```jsl

OrMZ( 1 < 2, 3 < 2 );

```

### Return

**Sintassi:** Return(&lt;Expr&gt;, ..., &lt;ExprN&gt;)

**Descrizione:** Restituisce un valore espressione da una funzione definita dall&apos;utente.

**JMP Versione aggiunta:** prima della versione 14

#### Esempio 1

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

#### Esempio 2

```jsl

f = Function( {a, b},
	Return( a - b, a + b )
);
{lo, hi} = f( 10, 1 );
Show( lo, hi );
Show( f( 7, 15 ) );

```

### Step

**Sintassi:** y = Step( x, x1, y1, x2, y2, ... )y = Step( x, [x1, x2, ...], [y1, y2, ...] )

**Descrizione:** Restituisce l&apos;argomento yi corrispondente al più grande valore xi che soddisfa xi minore o uguale all&apos;argomento x. Nota: gli argomenti xi devono essere specificati in ordine.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Step( 2.5, [1 2 3], [15, 20, 30] );

```

### Stop

**Sintassi:** Stop()

**Descrizione:** Termina immediatamente l&apos;esecuzione di uno script JSL

**JMP Versione aggiunta:** prima della versione 14

```jsl

For( i = 1, i <= 10, i++,
	If( i == 7, Stop() );
	Print( "i=" || Char( i ) );
);

```

### Transform Each

**Sintassi:** list = Transform Each({&lt;value&gt;, &lt;index&gt;} | {&lt;element&gt;, &lt;index | {row, col}&gt;} | {&lt;key | {key, value}&gt;, &lt;index&gt;} | {&lt;values | {value1, ..., valueN}&gt;, &lt;index&gt;}, list | matrix | associative array | expression | Across( container1, ..., &lt;containerN&gt;, &lt;Count( "Longest" | "Shortest" | "Enforce Equal" | n )&gt; ), &lt;Output( "List" | "Matrix" | "Associative Array" | "Expression", &lt;expr head name&gt; )&gt;, &lt;locals list&gt;, body)

**Descrizione:** Fa tutto ciò che fa la funzione Per ognuno, ma restituisce anche un contenitore con i risultati di ogni iterazione. Per impostazione predefinita, restituisce un contenitore che corrisponde al tipo di contenitore di input, ma può essere modificato usando l&apos;argomento Output. Per l&apos;output Elenco o Espressione, sarà usato Vuoto() quando non esistono risultati. Per l&apos;output Matrice, quando non esistono risultati o quando il risultato non è numerico, viene usato un valore mancante numerico. Per l&apos;output di Array associativo, la chiave non esisterà in assenza di risultato. Se si usa Continua(), è equivalente a non restituire alcun valore per quell&apos;iterazione.

**JMP Versione aggiunta:** 16

#### Associative Array

```jsl

values = Transform Each( {{key, value}}, ["A" => 8, "B" => 6, "C" => 10], value + 1 );
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
parsedScript = Include( "$SAMPLE_SCRIPTS/BayesPlotForFactors.jsl", <<ParseOnly );
functionNames = Transform Each( {statement}, Name Expr( parsedScript ), Output( "List" ),
	{lhs, rhs},
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
lst = Transform Each( {value}, [10, 20, 30], Output( "List" ), value + 1 );
Show( lst );

Write( "\!N===Matrix===" );
mat = Transform Each( {value}, {10, 20, 30}, Output( "Matrix" ), value + 1 );
Show( mat );

Write( "\!N===Associative Array===" );
aa = Transform Each( {value}, {10, 20, 30}, Output( "Associative Array" ), value + 1 );
Show( aa );

Write( "\!N===Expression===" );
ex = Transform Each( {value}, {10, 20, 30}, Output( "Expression", "My Values" ), value + 1 );
Show( ex );

```

### While

**Sintassi:** While( testExpr, bodyExpr )

**Descrizione:** Valuta iterativamente le espressioni testExpr e bodyExpr finché testExpr viene valutato diverso da zero.

**JMP Versione aggiunta:** prima della versione 14

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

**Sintassi:** y = Zero Or Missing( x )

**Descrizione:** Restituisce il NOT logico di x senza i valori mancanti trattati come zeri: 1 se x è mancante o zero e 0 in caso contrario.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Zero Or Missing( 1 < 2 );

```

